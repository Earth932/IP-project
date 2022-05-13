const textElement = document.getElementById('text')
const count = document.getElementById('count')
const type = document.getElementById('type')
const optionButtonsElement = document.getElementById('option-buttons')
const progressText = document.getElementById("progressText")
const progressBarFull = document.getElementById("progressBarFull")

let state = {}

function startQuiz() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  const c = textNodes.count
  count.innerText = textNode.count
  const q = textNodes.type
  type.innerText = textNode.type
  let countQuestion = parseFloat(c);
  let allQuestion = parseFloat(q);
  console.log(parseInt(c));
  progressBarFull.style.width = `${(countQuestion / allQuestion) * 100}px`;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startQuiz()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    type: 2,
    count: 1,
    text: 'ประเภทของผู้เข้าใช้ระบบ',
    options: [
      {
        text: 'บุคคลธรรมดา',
        nextText: 2
      },
      {
        text: 'นิติบุคคล',
        nextText: 2
      },
      {
        text: 'หน่วยงานรัฐ',
        nextText: 2
      },
      {
        text: 'มูลนิธิ',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    type: 2,
    count: 2,
    text: 'ประเภทของผลงาน',
    options: [
      {
        text: 'โปรแกรมคอมพิวเตอร์/ซอฟต์แวร์',
        setState: { progress: 1 },
        nextText: 3
      },
      {
        text: 'อุปกรณ์/โครงสร้าง/กลไก/เครื่องมือ',
        setState: { progress: 2 },
        nextText: 10
      },
      {
        text: 'วิธีการ/กรรมวิธี/กระบวนการ',
        setState: { progress: 2 },
        nextText: 10
      },
      {
        text: 'รูปร่างลักษณะภายนอกของผลงาน',
        setState: { progress: 3 },
        nextText: 20
      }
    ]
  },
  {
    id: 3,
    type: 6,
    count: 1,
    text: 'ผลงานชิ้นนี้ มีองค์ประกอบหรือผลงานบางส่วนที่มาจากจากผู้อื่น โดยไม่ได้รับอนุญาตหรือไม่',
    options: [
      {
        text: 'ใช่',
        nextText: 99
      },
      {
        text: 'ไม่ใช่',
        nextText: 4
      }
    ]
  },
  {
    id: 99,
    type: 6,
    count: 6,
    text: 'ผลงานของคุณไม่สามารถจดทะเบียนทรัพย์สินทางปัญญาได้',
    options: [
      {
        text: 'ตกลง',
        nextText: -1
      }
    ]
  },
  {
    id: 4,
    type: 6,
    count: 2,
    text: 'ผลงานชิ้นนี้ มีลักษณะ เป็นแนวความคิด หลักการ การค้นพบ หรือทฤษฎีทางวิทยาศาสตร์หรือคณิตศาสตร์หรือไม่',
    options: [
      {
        text: 'ใช่',
        nextText: -1
      },
      {
        text: 'ไม่ใช่',
        nextText: 5
      },
    ]
  },
  {
    id: 5,
    type: 6,
    count: 3,
    text: 'ผลงานชิ้นนี้ มีลักษณะเป็น ข่าวสาร, ระเบียบข้อบังคับ, คำสั่ง, คำพิพากษา, คำวินิจฉัย หรือเป็นเรื่องลามกอนาจาร หรือไม่',
    options: [
      {
        text: 'ใช่',
        setState: { shape: false, patent: false, pettyPatent: false, copyrights: false },
        nextText: 99
      },
      {
        text: 'ไม่ใช่',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    type: 6,
    count: 4,
    text: 'ผลงานชิ้นนี้มีความเกี่ยวข้องกับระบบข้อมูลสำหรับการทำงานของคอมพิวเตอร์หรือไม่',
    options: [
      {
        text: 'ใช่',
        setState: { shape: false, patent: false, pettyPatent: false, copyrights: true },
        nextText: 9
      },
      {
        text: 'ไม่ใช่',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    type: 6,
    count: 5,
    text: 'ผลงานชิ้นนี้ มีลักษณะเป็นแบบใด',
    options: [
      {
        text: 'โปรแกรมหรือซอฟต์แวร์',
        setState: { shape: false, patent: false, pettyPatent: false, copyrights: true },
        nextText: 9
      },
      {
        text: 'โปรแกรมหรือซอฟต์แวร์ที่ควบคุมอุปกรณ์หรือเครื่องจักร',
        setState: { progress: 2 },
        nextText: 10
      },
      {
        text: 'โปรแกรมหรือซอฟต์แวร์ที่มีลักษณะเป็นขั้นตอนการทำงานของระบบ',
        setState: { progress: 2 },
        nextText: 10
      },
      {
        text: 'โปรแกรมหรือซอฟต์แวร์ที่มีลักษณะเป็นขั้นตอนการประมวลผล',
        setState: { progress: 2 },
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    type: 6,
    count: 6,
    text: 'ผลงานของคุณเป็นประเภท "ลิขสิทธิ์"',
    options: [
      {
        text: 'ตกลง',
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    type: 8,
    count: 1,
    text: 'ผลงานชิ้นนี้ เกิดขึ้นมาจากการต่อยอดหรือดัดแปลงมาจากผลงานของผู้อื่นหรือไม่',
    options: [
      {
        text: 'ใช่',
        nextText: 11
      },
      {
        text: 'ไม่ใช่',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    type: 8,
    count: 2,
    text: 'ผลงานชิ้นนี้ เคยเปิดเผยสาระสำคัญหรือรายละเอียดสาระสำคัญต่างๆของผลงานต่อสาธารณชนหรือไม่',
    options: [
      {
        text: 'เคย',
        nextText: 99
      },
      {
        text: 'ไม่เคย',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    type: 8,
    count: 3,
    text: 'ผลงานชิ้นนี้ สามารถนำไปใช้ประโยชน์ในทางอุตสาหกรรม เกษตรกรรม พาณิชยกรรม หรือหัตถกรรมได้',
    options: [
      {
        text: 'ใช่',
        nextText: 13
      },
      {
        text: 'ไม่ใช่',
        nextText: 99
      }
    ]
  },
  {
    id: 13,
    type: 8,
    count: 4,
    text: 'ผลงานชิ้นนี้ เคยได้รับสิทธิบัตรหรืออนุสิทธิบัตรแล้ว ไม่ว่าจะในหรือนอกประเทศ',
    options: [
      {
        text: 'ใช่',
        nextText: 99
      },
      {
        text: 'ไม่ใช่',
        nextText: 14
      }
    ]
  },
  {
    id: 14,
    type: 8,
    count: 5,
    text: 'ผลงานชิ้นนี้มีความเกี่ยวข้องกับกฎเกณฑ์และทฤษฎีทางวิทยาศาสตร์และคณิตศาสตร์ หรือไม่',
    options: [
      {
        text: 'ใช่',
        nextText: 99
      },
      {
        text: 'ไม่ใช่',
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    type: 8,
    count: 6,
    text: 'ผลงานชิ้นนี้มีความเกี่ยวข้องกับ คำวินิจฉัย บำบัด หรือรักษาโรคมนุษย์ หรือสัตว์ หรือไม่',
    options: [
      {
        text: 'ใช่',
        nextText: 99
      },
      {
        text: 'ไม่ใช่',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    type: 8,
    count: 7,
    text: 'ผลลงานชิ้นนี้ มีลักษณะเป็นแบบใด',
    options: [
      {
        text: 'มีความซับซ้อนไม่มาก ต่อยอดหรือดัดแปลงจากผลงานเดิมที่มีอยุ่เพียงเล็กน้อย',
        setState: { shape: false, patent: false, pettyPatent: true, copyrights: false },
        nextText: 18
      },
      {
        text: 'มีความซับซ้อน ไม่สามารถลอกเลียนแบบหรือเข้าใจในตัวผลงานได้โดยง่าย',
        setState: { shape: false, patent: true, pettyPatent: false, copyrights: false },
        nextText: 19
      }
    ]
  },
  {
    id: 18,
    type: 8,
    count: 8,
    text: 'ผลงานของคุณเป็นประเภท "อนุสิทธิบัตร"',
    options: [
      {
        text: 'ตกลง',
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    type: 8,
    count: 8,
    text: 'ผลงานของคุณเป็นประเภท "สิทธิบัตร"',
    options: [
      {
        text: 'ตกลง',
        nextText: -1
      }
    ]
  },
  {
    id: 20,
    type: 5,
    count: 1,
    text: 'ผลงานชิ้นนี้ มีลักษณะแตกต่างไปจากเดิมหรือไม่คล้ายกับลักษณะของผลงานที่มีอยู่อย่างชัดเจนใช่หรือไม่',
    options: [
      {
        text: 'ใช่',
        nextText: 21
      },
      {
        text: 'ไม่ใช่',
        nextText: 99
      }
    ]
  },
  {
    id: 21,
    type: 5,
    count: 2,
    text: 'ผลงานชิ้นนี้ สามารถนำไปใช้ประโยชน์ในทางอุตสาหกรรม เกษตรกรรม พาณิชยกรรม หรือหัตถกรรมได้',
    options: [
      {
        text: 'ใช่',
        nextText: 22
      },
      {
        text: 'ไม่ใช่',
        nextText: 99
      }
    ]
  },
  {
    id: 22,
    type: 5,
    count: 3,
    text: 'ผลงานชิ้นนี้ เคยเปิดเผยสาระสำคัญหรือรายละเอียดสาระสำคัญต่างๆของผลงานต่อสาธารณชนหรือไม่',
    options: [
      {
        text: 'เคย',
        nextText: 99
      },
      {
        text: 'ไม่เคย',
        nextText: 23
      }
    ]
  },
  {
    id: 23,
    type: 5,
    count: 4,
    text: 'ผลงานชิ้นนี้ เป็นแบบผลิตภัณฑ์ที่ถูกกำหนดโดยพระราชกฤษฎีกาหรือไม่',
    options: [
      {
        text: 'ใช่',
        nextText: 99
      },
      {
        text: 'ไม่ใช่',
        nextText: 29
      }
    ]
  },
  {
    id: 29,
    type: 5,
    count: 5,
    text: 'ผลงานชิ้นนี้ สามารถนำไปใช้ประโยชน์ในทางอุตสาหกรรม เกษตรกรรม พาณิชยกรรม หรือหัตถกรรมได้',
    options: [
      {
        text: 'ตกลง',
        nextText: -1
      }
    ]
  },
]

startQuiz()