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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWHISXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD7fH0HabJeoNrnk0BFOz7tW6OKnBAKzhkWeOZH2wBMeAIhAOpBY5SO9hNYj31OXN7KXqux%2B8%2FZxNw2MBoAMJyF23KmKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXUTmbx%2BtF864P7Mq3AMEHHYpr2mpH%2BDMaIA3q4IxxxT4mQKGy5JILYPF1YUTRrZekhurWGuC%2Fkjf%2BAce7UDgu1GVDJz8tWoKwptld1tx7oFXuo0WxC3oEmfRvcYQmueefQr%2FdRgfqXmzLm6XguLQZYr2Z3wKhTDZfdo2H1FNyhhsoek8vNSChM3EieR%2F9uhywK3BGuvRmRBLnr5ILzkXbli7L2Uvyk%2BjOwq0fV1KrJs7A%2FAXWFJ2v4p2JStRisdZp5tMIWz0dT2IC5nvQt27CcD5t%2BEkgOCXbBe1DfIDLd8RYtt46t2P5CZNPDG7sfMHyyuf5jwo2uPT46Heq6n5LFtWt6bvSHAwzp4qHGr5OwiXU1YFgzfxk%2FW%2FiwBOWdWtfjHZhWhFQUd5TY4AMDIsw%2BtyT4IlFgFSR57lt9nMKaiiHQR7nXHyLqvAC%2BGYd5KpGmvxG1VXtzkZKtp%2FFNBNDcW9wmEJEgdVPvvEd5V488lqnQM%2BWbO%2BdhOyoK8NMERlVHlpCtEBtAKWAIrG10XYo%2Bb8u73Aqp%2BpJVm%2B163tSdz697Rx%2BUMlmC7R0BMg1lNLBW7ggsd7Y4OBjzEaL%2FdWp2trat7j3yIs0yFosFYYjmMrOMLb0cNEv46NZbnTGqdmZQuRT7%2FTYW9jcjDhpOa%2FBjqkAdhHPqut0JlYrR4GM2IgRegCR2bWflhRKMGnPnfJlteyOinWigcP%2Fs22pc1iH%2BhnfBfH9BDhvkbQUxO0jpmYAotcMu4pjWlVpoRMxlTU0WJ0vG71PEtHiCKrEYCikn6xq8UBKOkuu5qESbMiijBs80JpE3NYz9p4c%2F5ZtFZCdVaDjk6GLxcB%2BCY%2BB5VpBfVssTSBnE6sam1dH8Wgs92bcleTHsqd&X-Amz-Signature=6427c1b953ed3f80b7e4fbe629ccc583ce5dc8e16279a67d604804cea4a92388&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWHISXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD7fH0HabJeoNrnk0BFOz7tW6OKnBAKzhkWeOZH2wBMeAIhAOpBY5SO9hNYj31OXN7KXqux%2B8%2FZxNw2MBoAMJyF23KmKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXUTmbx%2BtF864P7Mq3AMEHHYpr2mpH%2BDMaIA3q4IxxxT4mQKGy5JILYPF1YUTRrZekhurWGuC%2Fkjf%2BAce7UDgu1GVDJz8tWoKwptld1tx7oFXuo0WxC3oEmfRvcYQmueefQr%2FdRgfqXmzLm6XguLQZYr2Z3wKhTDZfdo2H1FNyhhsoek8vNSChM3EieR%2F9uhywK3BGuvRmRBLnr5ILzkXbli7L2Uvyk%2BjOwq0fV1KrJs7A%2FAXWFJ2v4p2JStRisdZp5tMIWz0dT2IC5nvQt27CcD5t%2BEkgOCXbBe1DfIDLd8RYtt46t2P5CZNPDG7sfMHyyuf5jwo2uPT46Heq6n5LFtWt6bvSHAwzp4qHGr5OwiXU1YFgzfxk%2FW%2FiwBOWdWtfjHZhWhFQUd5TY4AMDIsw%2BtyT4IlFgFSR57lt9nMKaiiHQR7nXHyLqvAC%2BGYd5KpGmvxG1VXtzkZKtp%2FFNBNDcW9wmEJEgdVPvvEd5V488lqnQM%2BWbO%2BdhOyoK8NMERlVHlpCtEBtAKWAIrG10XYo%2Bb8u73Aqp%2BpJVm%2B163tSdz697Rx%2BUMlmC7R0BMg1lNLBW7ggsd7Y4OBjzEaL%2FdWp2trat7j3yIs0yFosFYYjmMrOMLb0cNEv46NZbnTGqdmZQuRT7%2FTYW9jcjDhpOa%2FBjqkAdhHPqut0JlYrR4GM2IgRegCR2bWflhRKMGnPnfJlteyOinWigcP%2Fs22pc1iH%2BhnfBfH9BDhvkbQUxO0jpmYAotcMu4pjWlVpoRMxlTU0WJ0vG71PEtHiCKrEYCikn6xq8UBKOkuu5qESbMiijBs80JpE3NYz9p4c%2F5ZtFZCdVaDjk6GLxcB%2BCY%2BB5VpBfVssTSBnE6sam1dH8Wgs92bcleTHsqd&X-Amz-Signature=eb613e0d3b91801534ef0b12af2e923d92d7c7058c9d651394205edc65055e17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R4E4IOF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDukfh9u8ndx%2Bs69NbVbhhDxxzm9cnc%2Bxm4rQ8EFeH9mQIhAIp80gq%2BiV5iRWdj%2FQUIIIE3I0%2F8xIHzluisKRWGAP82KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx787Nu3xhWH4IkpHEq3AOXKkNoqLhzBRiqPJ9DCiwkDHsM64ZmNeYK5yX1ncAurFcMO3kfPkjyQnwiyFchubVdvJPQDHoTIzxXO1T3RWkKR9Sk8CvL8DfLUhF1VBSClQF6PaLrg82nAaowjqnUsjyydXcyPrgyt39F5%2FoYw91P66LA0LLXmeM8hE%2FuJPyUXKDf2Yz42szKztrF6Qq4RKoFemziQFftx%2FzQtDFXX1F9VtrBgabQrLvdlVWKAqadCma2jy62k%2BFJqw0C%2BVFg9ysXr%2BvVC81PbFSkC%2BCXkpFiCMzlAbPZUquViccjQmFzbPoY2yclMK3he8gbsy4fusLQnPsVDiPEXX7GIPS0ehdvVdv0rlOw%2B2Auhqr6YoNVdRghXzmgF%2BcsDIsK3zj%2FA9ZE%2BPOZDfjlRdrLkbJC8Ll3ITdpFTnAsTFKKY9pCZuV%2BtsIYH7cxCgE031nfQhCbFBZIjVGXLTNlr%2BMJ%2FhjyVe%2F6hdG1wFKtUg21nGEYXEx1Y1ASSdo5K5tNIQtN8k1udfHaiHyPWzfsJ3fpTJ4fc4499aGOvaF1Nxcfv0JAjX9UEavJuYz%2BlnnLWLymJ6fdYn8wKZ8r%2F85aozB78QeA8HsqIeR6FXTEbwVKWzwyvfCO3nzkW6RIFOdVbiCVDChpOa%2FBjqkAQt6Nh3rWiIua0whKQKhdK0iixRJZ52MMds2Sf0K%2FH9hWc3JEjrEWPBZgQYFEtCeHIlNHCIKEHr9AkhXUP1xReDxUWDJ0p15SBjZ%2F9%2FPmJDfk6lVcwmL3gTl%2FnwaqLNQyS8O4qogh4PYtEbVLyZL7MLTzWwUhapJLv84r02W8BaXgH%2F89w9%2FbmKaYqa0dDUtjsKKhsktUS%2BRpXv%2BJfh%2B5dyl8vzO&X-Amz-Signature=1ee11201b750de41f6c36887aeb8a1c532e6acf3cdc0922194017b50e322ecdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JF7VO27%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCtOkpJVtrlfB7K0GzqgPNn9nvWZZE6hjEFYD%2Bz4LdqQwIhALFAa2MSvUyZI7i7PgiUclOd2dp5v%2BMD2rL8oGKtkohIKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzr17s7XYkEVZqBKZoq3AMVe9at0p%2FZcpdHD%2FP2s8i4HMMIZZW5p8BsKO9uH%2FUvPjs46vndAHIBazKuMZvOLZLbQuwnV9gONJnCR4yB47DAmE%2Bu5Y3e1yzmOelZGT6A8x3LAe99HweZPax8Z2qOivxQKrMTTJsJ9WUMKe7Ud90iZ2xHF9TFLI3yOmy9%2FSt9rCLofa3srbJNfze%2FBzo3afK5HMkmkosq1%2F%2BNgSjHWsoONeTKU0PBkJA8u0G3sN1zG40tCc%2B3DfNBsAzpfNCQ3NI6tl90oKIvrX8o996kvKvs%2B1SmwoYSsfYOxe904owgDPSK20FpzlrAN59ffBPmWj5%2FPsQ8p6P%2FXgWnapG8ih2qQQBoR7RfPQM1JxBUV3HDp3JhYu3otx2aeS4A0twSQ%2FgqODKw%2FBZx74MfiNgrQB%2FLZd43kxag2jfkg7qrKfE3EEmhueuBjh0eV%2FUyLFp3ANh07qV6FTS95bZPtcR967%2FXVIR4ZcNKpnw78QfZvz9iveE%2BFSL7uiJgLditGha0xSdXsydENsEdZNdIy1Sxq3kjS2%2FGPzTFIYU7b%2FquZxCegumbesW3pm6HR8yovsuFQ4agZoM0Rc4Av%2Bq1VGeG6Mc7h%2FZjpRxMS3Y5CDcaLfa7p%2BzTFvDLHcpqyDoJCTDfpOa%2FBjqkAQGaBnywhkQkwWTTjs2nkiblPrNVLeie9VRDzAT0NGWGptUcbTmykxC7Cdq5McUYvmaXLNAY2vJ8l3Jc0YBtMxUFkfJIbMIkkvw9qpY6D312raPo3O5N4l1a37pE7STIcysCuP4DvqyrswR9wDQtz30BCgmGk7I%2FFauiLBuEs4lHowgETkMOwbtPGZVT6uaSc3NR6ZFnc0%2BAcJwmLZKqB3HXPxLg&X-Amz-Signature=501c0bc9e0fd04b44bd233dabe398cbb3d03f632a008b90baf41d301ea1b291d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBWHISXE%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD7fH0HabJeoNrnk0BFOz7tW6OKnBAKzhkWeOZH2wBMeAIhAOpBY5SO9hNYj31OXN7KXqux%2B8%2FZxNw2MBoAMJyF23KmKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDXUTmbx%2BtF864P7Mq3AMEHHYpr2mpH%2BDMaIA3q4IxxxT4mQKGy5JILYPF1YUTRrZekhurWGuC%2Fkjf%2BAce7UDgu1GVDJz8tWoKwptld1tx7oFXuo0WxC3oEmfRvcYQmueefQr%2FdRgfqXmzLm6XguLQZYr2Z3wKhTDZfdo2H1FNyhhsoek8vNSChM3EieR%2F9uhywK3BGuvRmRBLnr5ILzkXbli7L2Uvyk%2BjOwq0fV1KrJs7A%2FAXWFJ2v4p2JStRisdZp5tMIWz0dT2IC5nvQt27CcD5t%2BEkgOCXbBe1DfIDLd8RYtt46t2P5CZNPDG7sfMHyyuf5jwo2uPT46Heq6n5LFtWt6bvSHAwzp4qHGr5OwiXU1YFgzfxk%2FW%2FiwBOWdWtfjHZhWhFQUd5TY4AMDIsw%2BtyT4IlFgFSR57lt9nMKaiiHQR7nXHyLqvAC%2BGYd5KpGmvxG1VXtzkZKtp%2FFNBNDcW9wmEJEgdVPvvEd5V488lqnQM%2BWbO%2BdhOyoK8NMERlVHlpCtEBtAKWAIrG10XYo%2Bb8u73Aqp%2BpJVm%2B163tSdz697Rx%2BUMlmC7R0BMg1lNLBW7ggsd7Y4OBjzEaL%2FdWp2trat7j3yIs0yFosFYYjmMrOMLb0cNEv46NZbnTGqdmZQuRT7%2FTYW9jcjDhpOa%2FBjqkAdhHPqut0JlYrR4GM2IgRegCR2bWflhRKMGnPnfJlteyOinWigcP%2Fs22pc1iH%2BhnfBfH9BDhvkbQUxO0jpmYAotcMu4pjWlVpoRMxlTU0WJ0vG71PEtHiCKrEYCikn6xq8UBKOkuu5qESbMiijBs80JpE3NYz9p4c%2F5ZtFZCdVaDjk6GLxcB%2BCY%2BB5VpBfVssTSBnE6sam1dH8Wgs92bcleTHsqd&X-Amz-Signature=871f710351c79a7b0e940e9ca7240916f0f9fe54220e0ae0ce5687a01c222a10&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
