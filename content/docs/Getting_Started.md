---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3YH2ZU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD0iKKYpVox%2BCttTtGSVt2k3sf2Bp746wb%2B3JjcnqTG7QIhAKwD9ueNcjCmj3DwC8M9ytQgF%2FPmC1JQZEp1vr3Fg%2FIlKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgveJGcfmEWwpiDPYq3AMFXP8u7vUMqZV0i%2F0QaDtHlavnc5pH0rgkcblDq0M318TZq0K0rXMLqB2V9CmNngL4VYmmSofy34oZgrTd%2F9aZZDPzW2Nggf2SE%2FytmX%2FxD2Ees%2FlHbeiCRXFsftQHT0%2F8CL4Q%2BW%2B%2FPkMBemEl7%2FKXzUMeCQ%2F%2F7n3qKxw%2F0T78kEbOYExyFk8eFQwMJRXyKXUuJDv7D1pIWNVFQfZOKNlErJgLvlF7UrBqurO6JbwhisgEyFRTiIUF3J08BjFpW9HQTsdS3o04rue57TcErtAmxYYXvviIYsQlhpIp8K%2BypZWp8r6f3ULFRbCefJftiQKzH52DBpOOW7T3oZ2%2BIG0kxsvoN8oUMUUBT8ifgf3TS8tXtGuJS59TRGKdHGVq%2BYVhvM1KJsf3RKjOoJXWVdTjUWEvqU7nwmYAlB2q%2F6XQ4v5FVnE3HSbe4XDeStk0Uo4WhSAH6SZYarntkiEq5AhWNokHyc1q33YYp8I1Cx3wmqqkvIhvTyFSlE9l%2B50jeCDJS%2FXrhpNTVmYEIJXtw6GFGgQ4D8pqX2hP32v7q3hehaJXZ7ejhlzqeEIdxyfbtsUvDVo2RufZshZNj%2FJ6JFSSDA3ZB%2BAtds1DoY%2FLn8Yy2AClu2%2BMOE7rqC3qUDDw2q7CBjqkAaY7f%2Bf4Km4u5QhSWPgCKoU0eugVb80HbhaaMDzMN%2FNn1UOIjKOF3g2uycdFVZiZt0x5%2BAHFp7EgkBFwLC%2BJ0%2FWuSwACLOok9vS78g5hvNNwfyAKPSg7uVtBbVhHMnlv%2BWbGEOxTuJncE51ju9MfQ8SPnjbxqspnmRFKiKl6AzdXAAmj8%2F046wdqfE9XVRUUk8rww2%2BmuKI2dqEgJXib1J8uxIlO&X-Amz-Signature=ef42be1eadb7c04c09c2940082b254e58556e7a0386cfca042c12319d90f977e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3YH2ZU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD0iKKYpVox%2BCttTtGSVt2k3sf2Bp746wb%2B3JjcnqTG7QIhAKwD9ueNcjCmj3DwC8M9ytQgF%2FPmC1JQZEp1vr3Fg%2FIlKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgveJGcfmEWwpiDPYq3AMFXP8u7vUMqZV0i%2F0QaDtHlavnc5pH0rgkcblDq0M318TZq0K0rXMLqB2V9CmNngL4VYmmSofy34oZgrTd%2F9aZZDPzW2Nggf2SE%2FytmX%2FxD2Ees%2FlHbeiCRXFsftQHT0%2F8CL4Q%2BW%2B%2FPkMBemEl7%2FKXzUMeCQ%2F%2F7n3qKxw%2F0T78kEbOYExyFk8eFQwMJRXyKXUuJDv7D1pIWNVFQfZOKNlErJgLvlF7UrBqurO6JbwhisgEyFRTiIUF3J08BjFpW9HQTsdS3o04rue57TcErtAmxYYXvviIYsQlhpIp8K%2BypZWp8r6f3ULFRbCefJftiQKzH52DBpOOW7T3oZ2%2BIG0kxsvoN8oUMUUBT8ifgf3TS8tXtGuJS59TRGKdHGVq%2BYVhvM1KJsf3RKjOoJXWVdTjUWEvqU7nwmYAlB2q%2F6XQ4v5FVnE3HSbe4XDeStk0Uo4WhSAH6SZYarntkiEq5AhWNokHyc1q33YYp8I1Cx3wmqqkvIhvTyFSlE9l%2B50jeCDJS%2FXrhpNTVmYEIJXtw6GFGgQ4D8pqX2hP32v7q3hehaJXZ7ejhlzqeEIdxyfbtsUvDVo2RufZshZNj%2FJ6JFSSDA3ZB%2BAtds1DoY%2FLn8Yy2AClu2%2BMOE7rqC3qUDDw2q7CBjqkAaY7f%2Bf4Km4u5QhSWPgCKoU0eugVb80HbhaaMDzMN%2FNn1UOIjKOF3g2uycdFVZiZt0x5%2BAHFp7EgkBFwLC%2BJ0%2FWuSwACLOok9vS78g5hvNNwfyAKPSg7uVtBbVhHMnlv%2BWbGEOxTuJncE51ju9MfQ8SPnjbxqspnmRFKiKl6AzdXAAmj8%2F046wdqfE9XVRUUk8rww2%2BmuKI2dqEgJXib1J8uxIlO&X-Amz-Signature=94bb175214136c6864b4d61696cafc125a40e131b98a62ca0db300a9247c202e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3YH2ZU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD0iKKYpVox%2BCttTtGSVt2k3sf2Bp746wb%2B3JjcnqTG7QIhAKwD9ueNcjCmj3DwC8M9ytQgF%2FPmC1JQZEp1vr3Fg%2FIlKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgveJGcfmEWwpiDPYq3AMFXP8u7vUMqZV0i%2F0QaDtHlavnc5pH0rgkcblDq0M318TZq0K0rXMLqB2V9CmNngL4VYmmSofy34oZgrTd%2F9aZZDPzW2Nggf2SE%2FytmX%2FxD2Ees%2FlHbeiCRXFsftQHT0%2F8CL4Q%2BW%2B%2FPkMBemEl7%2FKXzUMeCQ%2F%2F7n3qKxw%2F0T78kEbOYExyFk8eFQwMJRXyKXUuJDv7D1pIWNVFQfZOKNlErJgLvlF7UrBqurO6JbwhisgEyFRTiIUF3J08BjFpW9HQTsdS3o04rue57TcErtAmxYYXvviIYsQlhpIp8K%2BypZWp8r6f3ULFRbCefJftiQKzH52DBpOOW7T3oZ2%2BIG0kxsvoN8oUMUUBT8ifgf3TS8tXtGuJS59TRGKdHGVq%2BYVhvM1KJsf3RKjOoJXWVdTjUWEvqU7nwmYAlB2q%2F6XQ4v5FVnE3HSbe4XDeStk0Uo4WhSAH6SZYarntkiEq5AhWNokHyc1q33YYp8I1Cx3wmqqkvIhvTyFSlE9l%2B50jeCDJS%2FXrhpNTVmYEIJXtw6GFGgQ4D8pqX2hP32v7q3hehaJXZ7ejhlzqeEIdxyfbtsUvDVo2RufZshZNj%2FJ6JFSSDA3ZB%2BAtds1DoY%2FLn8Yy2AClu2%2BMOE7rqC3qUDDw2q7CBjqkAaY7f%2Bf4Km4u5QhSWPgCKoU0eugVb80HbhaaMDzMN%2FNn1UOIjKOF3g2uycdFVZiZt0x5%2BAHFp7EgkBFwLC%2BJ0%2FWuSwACLOok9vS78g5hvNNwfyAKPSg7uVtBbVhHMnlv%2BWbGEOxTuJncE51ju9MfQ8SPnjbxqspnmRFKiKl6AzdXAAmj8%2F046wdqfE9XVRUUk8rww2%2BmuKI2dqEgJXib1J8uxIlO&X-Amz-Signature=aadbb4791097eb664790e58238239097ecee1c8c320e58f04ec85200062c6493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZJ4I4R%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC7N%2Bkm4%2FKlma%2FK5F61zAimt979KD7dQjduwOghtqoJ5gIhAPBaA2tRi6%2FmqEqfXaDFtCI3OmoZAOKt23UBWTmfozDqKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwibBnhy564q7gmWaEq3AOBZkLCD4R9O%2FL33vt%2FN2nnBJm7m6dPLjS9zOj2v9676JE3%2FOKJWjUgVA3bjW0ZuGO4E6nkUcz2u5iPIvptGP%2FwHyJRGXFR5%2FGYExCi7apyA9jkz6k1n5OjvHV8O1L3Al5p0tG9tZAJzusm3CRJ5WPbmAN6HT6po2iuz9kYXb5oAsx6Tqkinlxd2%2FQyeL2lI0WSbln5apWClYEQMNrwCBCD6CT6SSV4%2BPo9qM51pS7eZyCAdDw8EfZ%2Fkc33CYa2pJHtos2tf6hMuPjwcXoYS3gugPvIx2unQPLli4amPpGL%2BH2xIEwYKdBj8NZfbO5nXgynCbHBJ5Syw5rDGA5pUfN0m1YICmsGBvGQopp%2FYYLTOLknGq1PSa%2BtTicCDhUYRzXdaRNC1DAAR5AK5LshjNA8o5KRhlNxFNl8XXIHaxxeQw%2BfkXKKBT13aM%2F6rqMOniPlWqMVLpEhhz%2BfVrU9C29WWV98NW%2FpADmPosTgNYOIgWUC1zFak4%2FErKHKLvwUyjHFtjxIKqal57O9jfHyaETVPJfa8jz99DQWqDUDfaG7YXH7dMnoLfFj1GAkX6yXKtIxkMtZeMgY11jRI4mE%2BcMRmr6i0LLP%2BwlZrjZyAp%2FYus3De3JQOMR2hlQnFDDa0a7CBjqkAZKhp9swgb5JM8q3d5YGkBXTOTrddEOZPYnUoz78AN0R16dx8krJTUiymRFrb%2BDDRgWSzQTSXpjvD4gGzXdfTcdG089TXflvqNp93E6NFYuDAI65aOMv1h50ni1LVehvEVZM63sf0Sn5ZcaprtdsW1X2zxnz3NXhfNkJm8tFzm5DjRGHA2bvmTEUki10gCvOdDetTxoBnwJvrtEAXGsJR3MANlFq&X-Amz-Signature=a0e15ef8502418dc7e5e104f426fe0d872003ee4138610422a6e2df5b267001a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WUFALL6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCICw1bmTMJvoxzhq4bjv%2BcXfAPqxrdXFUYYnryqhb3TB1AiAClQ5pmSBoS3q1%2BnAOkZQZwbN%2FCOEdhm2IgbYofLUgyCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJaBDywRdjc4vvj8KtwDI9HBdcuumnar5W3VjM%2F7igXw5m6nqMXF4vICXNuk%2FEYI7l41XIPcTNixqpu87cYUHNNOGK43uUxmNiIjkJwHAOpMEvEkq9axM8WXIcqEczo0hxqF%2BGRWSnPhPY5uch51EhGSYhrrmQEnDuZe8cGnQ5EXoisSchT8E8aN%2BAUd84OoK9RythOZPvCuN7%2BXlZUgbu6mtUQ8rfqA62IMnL2ac5MH71%2FmfUbj8zKhlkcENbmtk4Ss2%2BSsTqiNFYZwib9Fvye4vdYfQh1AdU9ujOtUtu7paxRGkx8NsvheNWjfR3q%2FLT%2FKjT1Quj83TdOAtFKvtJH%2F9GHFl4YOGN1n2ymGLszsaaIhIw7JqYyUsefTBLr7XlfEVO%2Fw16TM3HLgCo%2FTS75qCpVtAa0XNbg3ipfH58Ah0FspQu%2BOUvpa26biL4paICahOtWBFaX9xqDM59ukkvANvHeYROT9FzhWYj%2FBAQ1KWIm%2FJk76fGZS2qppNRZwrx1nRECfGJ30BDNv6yRmkJoB4SSuauLeCFA6F3WrWMPI2NGk42rETEulXY0PEwNoYyE45ddicw8lFb9fF1%2BGhrNT2Tsw%2F70j%2BRGqayivSyQPqx6r7m7Or8TV1r7NubwrX7Hgfz2LZF0EqsMw98euwgY6pgER9Kl1%2FJUhwzsTbE4XU7M%2FYC6tH92rfGuXoRvrcKSAFu%2FketGpszQ%2FjY4w6SUQiE4BuH1G7TFHHwv0MavMAGnmdFrP1bbtVc%2F9ADZym5txkUIylw%2FRjW77mZNgo1jqF06HfwtSLkX52PLcxuIoCW2buIFrnSu8dfULBiMxQWDkkQt5IiGzMQByQgo%2FednHZ%2B2RObUJX57QkF6btDz%2BXjbEZIeO%2FdpE&X-Amz-Signature=863157960d0ceb48fdd318a45524c76efaccbb4a0a78750ead69af833ade1b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3YH2ZU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD0iKKYpVox%2BCttTtGSVt2k3sf2Bp746wb%2B3JjcnqTG7QIhAKwD9ueNcjCmj3DwC8M9ytQgF%2FPmC1JQZEp1vr3Fg%2FIlKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgveJGcfmEWwpiDPYq3AMFXP8u7vUMqZV0i%2F0QaDtHlavnc5pH0rgkcblDq0M318TZq0K0rXMLqB2V9CmNngL4VYmmSofy34oZgrTd%2F9aZZDPzW2Nggf2SE%2FytmX%2FxD2Ees%2FlHbeiCRXFsftQHT0%2F8CL4Q%2BW%2B%2FPkMBemEl7%2FKXzUMeCQ%2F%2F7n3qKxw%2F0T78kEbOYExyFk8eFQwMJRXyKXUuJDv7D1pIWNVFQfZOKNlErJgLvlF7UrBqurO6JbwhisgEyFRTiIUF3J08BjFpW9HQTsdS3o04rue57TcErtAmxYYXvviIYsQlhpIp8K%2BypZWp8r6f3ULFRbCefJftiQKzH52DBpOOW7T3oZ2%2BIG0kxsvoN8oUMUUBT8ifgf3TS8tXtGuJS59TRGKdHGVq%2BYVhvM1KJsf3RKjOoJXWVdTjUWEvqU7nwmYAlB2q%2F6XQ4v5FVnE3HSbe4XDeStk0Uo4WhSAH6SZYarntkiEq5AhWNokHyc1q33YYp8I1Cx3wmqqkvIhvTyFSlE9l%2B50jeCDJS%2FXrhpNTVmYEIJXtw6GFGgQ4D8pqX2hP32v7q3hehaJXZ7ejhlzqeEIdxyfbtsUvDVo2RufZshZNj%2FJ6JFSSDA3ZB%2BAtds1DoY%2FLn8Yy2AClu2%2BMOE7rqC3qUDDw2q7CBjqkAaY7f%2Bf4Km4u5QhSWPgCKoU0eugVb80HbhaaMDzMN%2FNn1UOIjKOF3g2uycdFVZiZt0x5%2BAHFp7EgkBFwLC%2BJ0%2FWuSwACLOok9vS78g5hvNNwfyAKPSg7uVtBbVhHMnlv%2BWbGEOxTuJncE51ju9MfQ8SPnjbxqspnmRFKiKl6AzdXAAmj8%2F046wdqfE9XVRUUk8rww2%2BmuKI2dqEgJXib1J8uxIlO&X-Amz-Signature=9323d24f71b41f5c550101ef2267692041f30eecd94ad10f6021107b58ac211c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
