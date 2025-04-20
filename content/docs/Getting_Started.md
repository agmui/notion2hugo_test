---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2024-09-15T21:40:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2024-09-15T21:40:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5FWEBB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDHBQ9XeH2tkBCqI3XbcrPamZr5LxHg5TfTNYY749HznAiAwouFVh46mrvRVmnCVtF%2BCq2Q7QeZWxGq%2F8n3GGyEGxSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFYmup4qOhhVKNWyKtwDkkOVQdWV925hu3Z5a0GB%2Fkn6eWrDbnLz9TdkoBKBQTAzZfAkFcisQjFw1t1GECjMFFetnSkEaaINR1miQ5dcO3dDk8dV5MEBhtyOLm6tqBfpHkf8GrIrRm5UhhvkMR0pZCAumjRIWYiyfdP4wS8v44%2FI%2ByVJIsDDregR8AsJdUCIjhZUyj4dLdIl1lFo2wmCRIFeZ8fNZlhqqb%2B5Gg8oX6jrPGYrnmgjzyCI%2BXDnHXRQxYxHEY6Re%2BIYdZNptYmCd%2Br078%2FEQDlHOW%2B4aamz4PKdc%2FW9ssapMEqs7uhaM%2FVLIOi0kOff6xvRmDzBj9REnmIjjfX5uRpLlTRf%2FPhrvkAY4vvSswNJKYtfdIRpUMdUhqfMsrldIfUcL03DT5cfF3IbZrClM0Pd4sq0zUfXGH3QvqrdMLYDlgkStFBslcxioEZznQowvPPNJ9Zl0%2B4%2FZ5F1%2FDEw8wt92oqBUppwJbzoQQT4amIoa82XdaMLdBA58e1la59BsNZTsQFDSX9VVa1SaxOBMSnFiOdcGKBqWP3nfwxD%2F4k7%2BdWlupJ5Et4T4oVS9yMg9CwJoQc5ycwkdnl%2B%2FdpVvmqQbNsEr778q2UQdDPVP%2Bg%2F9vew01Xf9eHV2mmADklDkw2l3Qcwq6SSwAY6pgEHypDGJr%2F4KhAXKTHzdGEQnhlC8p8cTkV2TPalzDCBLjkBgU6B28oM0%2FGrn%2F4J5%2FL236wF3HEPh4CWS1kI4G%2FPixSJjBSDe1xjb1SjYf1GdFjXHzLg3qmrW%2F8%2FtnZTv9ORor77alssHME22OGdq8f5oqfm6w5aHWw6hiWPJ55B9lo6FoyUmxzFwaliv2Kt2gp4lR4aihRiKD7Chv9NmuG3rDdLVVnJ&X-Amz-Signature=939c66587b01542a664cb62a0cc1f2e64cb00fafd6aafcda7aea5b8b1187b92d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5FWEBB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDHBQ9XeH2tkBCqI3XbcrPamZr5LxHg5TfTNYY749HznAiAwouFVh46mrvRVmnCVtF%2BCq2Q7QeZWxGq%2F8n3GGyEGxSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFYmup4qOhhVKNWyKtwDkkOVQdWV925hu3Z5a0GB%2Fkn6eWrDbnLz9TdkoBKBQTAzZfAkFcisQjFw1t1GECjMFFetnSkEaaINR1miQ5dcO3dDk8dV5MEBhtyOLm6tqBfpHkf8GrIrRm5UhhvkMR0pZCAumjRIWYiyfdP4wS8v44%2FI%2ByVJIsDDregR8AsJdUCIjhZUyj4dLdIl1lFo2wmCRIFeZ8fNZlhqqb%2B5Gg8oX6jrPGYrnmgjzyCI%2BXDnHXRQxYxHEY6Re%2BIYdZNptYmCd%2Br078%2FEQDlHOW%2B4aamz4PKdc%2FW9ssapMEqs7uhaM%2FVLIOi0kOff6xvRmDzBj9REnmIjjfX5uRpLlTRf%2FPhrvkAY4vvSswNJKYtfdIRpUMdUhqfMsrldIfUcL03DT5cfF3IbZrClM0Pd4sq0zUfXGH3QvqrdMLYDlgkStFBslcxioEZznQowvPPNJ9Zl0%2B4%2FZ5F1%2FDEw8wt92oqBUppwJbzoQQT4amIoa82XdaMLdBA58e1la59BsNZTsQFDSX9VVa1SaxOBMSnFiOdcGKBqWP3nfwxD%2F4k7%2BdWlupJ5Et4T4oVS9yMg9CwJoQc5ycwkdnl%2B%2FdpVvmqQbNsEr778q2UQdDPVP%2Bg%2F9vew01Xf9eHV2mmADklDkw2l3Qcwq6SSwAY6pgEHypDGJr%2F4KhAXKTHzdGEQnhlC8p8cTkV2TPalzDCBLjkBgU6B28oM0%2FGrn%2F4J5%2FL236wF3HEPh4CWS1kI4G%2FPixSJjBSDe1xjb1SjYf1GdFjXHzLg3qmrW%2F8%2FtnZTv9ORor77alssHME22OGdq8f5oqfm6w5aHWw6hiWPJ55B9lo6FoyUmxzFwaliv2Kt2gp4lR4aihRiKD7Chv9NmuG3rDdLVVnJ&X-Amz-Signature=5b1c34f6be15391df8429f4eef88f6ab7aae5c5bf85bcc578d163be734d992e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCIXKLOC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCA56PYlBsYP6jZ%2FFDsnDbfQO50T%2BueuOH7taQTI3WIOAIhAO%2BOlgXdG6gJEm1Fbte%2BcgaQ0NT%2F2E6%2FQ78iJf0Rn7ibKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHQnfyK3EYQ8M%2FM8oq3AOvBePO4v%2B%2Fs8%2FcoRSxYGsp8xbpe96ToQLoEHOhOFPxsKxN7%2FtpzUVGnDE%2BbK6Z9cVVqFnVD4bQL5IaWpZGU2nQiJBaR1VGFp2lYN0wmZhMDN4zEPHaIBh2ma29RgLCU9p0EPIaxzo6aFeNpCJl6h2HvMrpKsuxCN7unVeFwwaPGdHG1WsG8bUAbz48H56mmiMQucbq2ytsBuRbZTGAgmvNFSgn4OkxR39PuH%2B5Di0e8vjiOVo%2B3OsESRWcszeeSgl9rWwhQjQgn7utY36%2Fwg4SBRRyxYFu998SwUN33i0kn2KmwQE5d4A3wspuHUcN3RpuEyRkekzYoTrBt28Gq5WybRmNFbdV1pb957X09W4BypWKOyfQJrkYAjAWuNB0OOgpaXJOzP0N3WeDYnldBCYHScXUCq1jdGbNJw7GOKhY9zAeai64UZdkuqqJgIpbDUeIy%2Be3GgjJ9CWUtkPmF7WELY9zyMcjqv2%2B0Z0ynBXGAFkLs3R%2FEHt9f0ke7jI8EPrSbRxJ9FTy6cN1trX9umrQkxCpROmdhxXDT4Ag5XztyJdsRv8ZyxpWHf3fR8Kx6IrC0YBSpcPZhwug4TfNoWb8F6s%2F%2FJ36wLnZL0rCLBxCy%2FCKwnlUWTK8mAX62TCUpJLABjqkAQUAroM0ODWhqb%2B9zMquivzaXW67KqxzLWAcnh9BSlyXlwyJKdHPF9xxTMt1alWX17gJ7PIEotlqMJBfriLzvfY2dqXswUBV2fFQXbJ71lrp3rB2ACU3FVd8R6ZQplH%2BSHFXjClx7mYQVnmSoxMCZPDjjXJziU7aqgKsv6%2FP3uRonnsycrZCwAfBc9Gcua8IchsjOAq7eYgUcPqpYSYd8XNhgDmI&X-Amz-Signature=165a4c4f328ee7a8fea1a3a366a992e5339f6a681006ee2830dc665745c483e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LMASYUD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIAP63qaAtyz63KbQWWSOqo9K4%2BaZnyPwqBD%2B3%2BkkA0ojAiB9XlNcZUedpoK5auQdXeZ5njDBh%2BM6Ph%2F8FfPD3FVz5CqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN032eMxl8L01HCBoKtwDLKAv081Ju%2Bhwtfw6U3cqb9sTkqE9ZREBg%2FFJC%2FCt9JZRsxElHOM7llxUIfI9ymcxu37K6mchdvYWv51JgCAPf51BNnpFfzA5yM9kR%2FKC6Izu08X5ex0b9O51afFY2GKd8scYMjvenLW4t3fPv%2FWM58xEy4gUiXHn%2B69cVYw3VZIe2FVnrqNKdBiyMuCPgUF0OCcsoByH75xrVROmDYQ9%2FFQilHcJng4xu%2BWxhNnkbaWSOAHyAmiYu4gcbTh4Dz2Th%2BYjQtIPBEMhUAb0wTfJ9i3K9TX2FguBDcXr2DSm5LJ8bsFgUscdFOve08%2B50y9jYVtKxMQvYw7%2FMZAKmALNKY%2FL56bB8IzhdsUEzBqoXkGfbutZxwwvKsLizga7H6qRu4M6ePAh%2FtTBVhX8HJ6MWLeS7xIxqDznCJvCsfSn1tyletsr%2FfeV5AmRfvcVdn1khZq%2BjlR6MxvlNdlgIMjHmHolTiBzV1C%2B1RCGz9JGtMZtKDLAyY1O58C9tKVcZV%2FV0nvcqpq3FTRKxbo7vr1KQShXcLebqvIkSgMm%2BbZDbUZdG2%2FLgOs6sfxI0ZSRTEkaJ7y68t%2FAoZwwflGSIDxgWgY0F3zLwwhTzOA2AuV5NRBrBQo5taQfVaxVzxAwuaSSwAY6pgG39rICrUEoVJN81mYOTg70rzA3HbttG9HDOX2HOe1Ks46%2FbvNXhMHpPrIh%2FDBVR6elUU45gw3S6yBDYaIJPcS4AfpsgoQytlO0IKIkFA%2F%2B7dbxf2jeAztTQwve5f%2FepkdGo2ly3tG2dq%2FrEvQlWACTS5yrQesqtk3nOMe18uiYrDl8R5KaQpnabSP0F0Js8wu2%2FJvh4P1uN8N4nslh1RE7a18JB3CY&X-Amz-Signature=a3c77bc375a3788d4a54034a1f732769b9aedd977bdc7c0818d290beece292f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO5FWEBB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDHBQ9XeH2tkBCqI3XbcrPamZr5LxHg5TfTNYY749HznAiAwouFVh46mrvRVmnCVtF%2BCq2Q7QeZWxGq%2F8n3GGyEGxSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFYmup4qOhhVKNWyKtwDkkOVQdWV925hu3Z5a0GB%2Fkn6eWrDbnLz9TdkoBKBQTAzZfAkFcisQjFw1t1GECjMFFetnSkEaaINR1miQ5dcO3dDk8dV5MEBhtyOLm6tqBfpHkf8GrIrRm5UhhvkMR0pZCAumjRIWYiyfdP4wS8v44%2FI%2ByVJIsDDregR8AsJdUCIjhZUyj4dLdIl1lFo2wmCRIFeZ8fNZlhqqb%2B5Gg8oX6jrPGYrnmgjzyCI%2BXDnHXRQxYxHEY6Re%2BIYdZNptYmCd%2Br078%2FEQDlHOW%2B4aamz4PKdc%2FW9ssapMEqs7uhaM%2FVLIOi0kOff6xvRmDzBj9REnmIjjfX5uRpLlTRf%2FPhrvkAY4vvSswNJKYtfdIRpUMdUhqfMsrldIfUcL03DT5cfF3IbZrClM0Pd4sq0zUfXGH3QvqrdMLYDlgkStFBslcxioEZznQowvPPNJ9Zl0%2B4%2FZ5F1%2FDEw8wt92oqBUppwJbzoQQT4amIoa82XdaMLdBA58e1la59BsNZTsQFDSX9VVa1SaxOBMSnFiOdcGKBqWP3nfwxD%2F4k7%2BdWlupJ5Et4T4oVS9yMg9CwJoQc5ycwkdnl%2B%2FdpVvmqQbNsEr778q2UQdDPVP%2Bg%2F9vew01Xf9eHV2mmADklDkw2l3Qcwq6SSwAY6pgEHypDGJr%2F4KhAXKTHzdGEQnhlC8p8cTkV2TPalzDCBLjkBgU6B28oM0%2FGrn%2F4J5%2FL236wF3HEPh4CWS1kI4G%2FPixSJjBSDe1xjb1SjYf1GdFjXHzLg3qmrW%2F8%2FtnZTv9ORor77alssHME22OGdq8f5oqfm6w5aHWw6hiWPJ55B9lo6FoyUmxzFwaliv2Kt2gp4lR4aihRiKD7Chv9NmuG3rDdLVVnJ&X-Amz-Signature=d9aa5f1b7675b4ed7c23e770fe4b3a179b4984986e95aae66c766fec94b57515&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
