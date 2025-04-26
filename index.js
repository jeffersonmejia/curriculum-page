const d = document,
  n = navigator,
  $listProgress = d.querySelectorAll('progress'),
  $listProgressText = d.querySelectorAll('.article-skills p'),
  $body = d.querySelector('body')

function typeValueProgress() {
  $listProgressText.forEach((p) => {
    $progressValue = p.querySelector('progress').value * 100
    $text = p.querySelector('small')
    $text.textContent = $progressValue + '%'
  })
}

function animateProgress() {
  $listProgress.forEach((progress) => {
    const value = progress.value
    progress.value = 0
    setTimeout(() => {
      progress.value = value
    }, 100)
  })
}

function copyEmail(icon) {
  let email = icon.parentElement.querySelector('span').textContent
  email = email.split(':')[1]
  navigator.clipboard.writeText(email)
  copySrcImage = icon.src
  src = icon.src.split('/')
  src.pop()
  src.push('pasted-icon.png')
  src = src.join('/')
  icon.src = src
  setTimeout(() => {
    icon.src = copySrcImage
  }, 2000)
}
function copyPhone(icon) {
  let phone = icon.parentElement.querySelector('span').textContent
  phone = phone.split(':')[1]
  navigator.clipboard.writeText(phone)
  copySrcImage = icon.src
  src = icon.src.split('/')
  src.pop()
  src.push('pasted-icon.png')
  src = src.join('/')
  icon.src = src
  setTimeout(() => {
    icon.src = copySrcImage
  }, 2000)
}

d.addEventListener('DOMContentLoaded', (e) => {
  typeValueProgress()
  animateProgress()
  $body.classList.toggle('body-hidden')
})

d.addEventListener('click', (e) => {
  if (e.target.matches('#email-copy')) {
    copyEmail(e.target)
  }
  if (e.target.matches('#phone-copy')) {
    copyPhone(e.target)
  }
})
