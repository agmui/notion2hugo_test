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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635USHPAU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFV9kPkd5W3yUSUSgrTKt2Wbr20cAILw4GouMfblIILQAiB3dJMUNFKphC%2B0fZEIwoaHyCzw9XLfGdSWuYwt4tqgiCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmtChtJ5NS6U1JeuKtwDFa0yxXM%2FXm0OxuuLPBe7%2FPrAFyJUkkWLSokGBp4xdDygPJTFDKEScnlb0lor6HJYXZfzdxbpTfFPQIo0Ogh0FC0zUwyuzT%2Bqqje8Qm3u2EWn0LMiYtGOJg8uSJWDBS0KOPM%2Fvd3xtOQj5BWBdZvEtpRWYfJ7GEsxpUdns0P9OPIf7%2F6vhfknkm3%2B9aI1xyEeNalk2oAzzWnoSHqKnGlbPJwcG4gq1x0Pif%2FVAOXhjwAhWq6xRxe5gdrqkyBA733hntz%2Bn6VSKcU2WW2KUf8LRSQIkc7yfB3SRTlFUgSFOwIG2KzRfQvHpRgVZ6X09L4wP0XCxbdlDFE%2FuDNLOupWwsD4muuUpTNKPqULoxEEQt4dGjlmjxcPMHn9FTzbrd30ayZHORXzKntPIHjLDtmCiKpD0grNCwtiaq7Iba8qIZobS%2F8wdkgCgYcd%2FO9qRURrsQ8HgP8cUkZdm%2FvuJXd3ALg9RqqhUK3DvkoukxxMZk0SKBXid%2BSjb1WJKaEc6s6D7asC6%2BesYhqknSY7Sapi5yfJwdaDhM181HCMMOBWUDj9ev3JlisNjMvvF3z0pVwaIUe6CzbgpVIF3cE1r%2BtfS8qnAwHSO81QXlZG6biI5tlKRAqnNrt9AiYVVsUw%2B7iBwQY6pgFp4wb%2F7NaVJgabhX0VPQh03McQsSYmSXCmdVat%2BXfyTwK7I%2BHd%2FwqG8TANa2IzK8wUuSdCHhVRVULKZGJjoBwQMFr19aerwkTc2GduwGr%2FC20HoiMH0etJ2VnWDC8TJkOA17a6%2Fy6LnxZimRCcEHJ80gETTVGPJM4aj1Ncs7L%2Bd51XoCgYdqbBhR9QXBegtVDOL0C2f9d%2F7Rvrt9czL62B24rtO6Kg&X-Amz-Signature=dad2b8076d5aba4a6fc6c88752e93498fe42c43d2b6efcb199fd0425c803eaa7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635USHPAU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFV9kPkd5W3yUSUSgrTKt2Wbr20cAILw4GouMfblIILQAiB3dJMUNFKphC%2B0fZEIwoaHyCzw9XLfGdSWuYwt4tqgiCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmtChtJ5NS6U1JeuKtwDFa0yxXM%2FXm0OxuuLPBe7%2FPrAFyJUkkWLSokGBp4xdDygPJTFDKEScnlb0lor6HJYXZfzdxbpTfFPQIo0Ogh0FC0zUwyuzT%2Bqqje8Qm3u2EWn0LMiYtGOJg8uSJWDBS0KOPM%2Fvd3xtOQj5BWBdZvEtpRWYfJ7GEsxpUdns0P9OPIf7%2F6vhfknkm3%2B9aI1xyEeNalk2oAzzWnoSHqKnGlbPJwcG4gq1x0Pif%2FVAOXhjwAhWq6xRxe5gdrqkyBA733hntz%2Bn6VSKcU2WW2KUf8LRSQIkc7yfB3SRTlFUgSFOwIG2KzRfQvHpRgVZ6X09L4wP0XCxbdlDFE%2FuDNLOupWwsD4muuUpTNKPqULoxEEQt4dGjlmjxcPMHn9FTzbrd30ayZHORXzKntPIHjLDtmCiKpD0grNCwtiaq7Iba8qIZobS%2F8wdkgCgYcd%2FO9qRURrsQ8HgP8cUkZdm%2FvuJXd3ALg9RqqhUK3DvkoukxxMZk0SKBXid%2BSjb1WJKaEc6s6D7asC6%2BesYhqknSY7Sapi5yfJwdaDhM181HCMMOBWUDj9ev3JlisNjMvvF3z0pVwaIUe6CzbgpVIF3cE1r%2BtfS8qnAwHSO81QXlZG6biI5tlKRAqnNrt9AiYVVsUw%2B7iBwQY6pgFp4wb%2F7NaVJgabhX0VPQh03McQsSYmSXCmdVat%2BXfyTwK7I%2BHd%2FwqG8TANa2IzK8wUuSdCHhVRVULKZGJjoBwQMFr19aerwkTc2GduwGr%2FC20HoiMH0etJ2VnWDC8TJkOA17a6%2Fy6LnxZimRCcEHJ80gETTVGPJM4aj1Ncs7L%2Bd51XoCgYdqbBhR9QXBegtVDOL0C2f9d%2F7Rvrt9czL62B24rtO6Kg&X-Amz-Signature=01372ed9e0eb2e4a14e2281d40c554d46f79fea7bf994f52f747c511a429b50a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635USHPAU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFV9kPkd5W3yUSUSgrTKt2Wbr20cAILw4GouMfblIILQAiB3dJMUNFKphC%2B0fZEIwoaHyCzw9XLfGdSWuYwt4tqgiCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmtChtJ5NS6U1JeuKtwDFa0yxXM%2FXm0OxuuLPBe7%2FPrAFyJUkkWLSokGBp4xdDygPJTFDKEScnlb0lor6HJYXZfzdxbpTfFPQIo0Ogh0FC0zUwyuzT%2Bqqje8Qm3u2EWn0LMiYtGOJg8uSJWDBS0KOPM%2Fvd3xtOQj5BWBdZvEtpRWYfJ7GEsxpUdns0P9OPIf7%2F6vhfknkm3%2B9aI1xyEeNalk2oAzzWnoSHqKnGlbPJwcG4gq1x0Pif%2FVAOXhjwAhWq6xRxe5gdrqkyBA733hntz%2Bn6VSKcU2WW2KUf8LRSQIkc7yfB3SRTlFUgSFOwIG2KzRfQvHpRgVZ6X09L4wP0XCxbdlDFE%2FuDNLOupWwsD4muuUpTNKPqULoxEEQt4dGjlmjxcPMHn9FTzbrd30ayZHORXzKntPIHjLDtmCiKpD0grNCwtiaq7Iba8qIZobS%2F8wdkgCgYcd%2FO9qRURrsQ8HgP8cUkZdm%2FvuJXd3ALg9RqqhUK3DvkoukxxMZk0SKBXid%2BSjb1WJKaEc6s6D7asC6%2BesYhqknSY7Sapi5yfJwdaDhM181HCMMOBWUDj9ev3JlisNjMvvF3z0pVwaIUe6CzbgpVIF3cE1r%2BtfS8qnAwHSO81QXlZG6biI5tlKRAqnNrt9AiYVVsUw%2B7iBwQY6pgFp4wb%2F7NaVJgabhX0VPQh03McQsSYmSXCmdVat%2BXfyTwK7I%2BHd%2FwqG8TANa2IzK8wUuSdCHhVRVULKZGJjoBwQMFr19aerwkTc2GduwGr%2FC20HoiMH0etJ2VnWDC8TJkOA17a6%2Fy6LnxZimRCcEHJ80gETTVGPJM4aj1Ncs7L%2Bd51XoCgYdqbBhR9QXBegtVDOL0C2f9d%2F7Rvrt9czL62B24rtO6Kg&X-Amz-Signature=9a57efa4baaa26d961556c93cb23e64b0428d1b10acca287975e761358117afe&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNCMBVQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDKhgS1RRhHduPEZn0AWPbZdJj7loG2h4qnvsVXgScdRAIgcgSFN%2FDZcHWEY1Q2p4orvJ0r3JGXCZBsv8vRlCjVNb0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZeytzlVmIUCzQ4eyrcA%2BpwBuKAKWPnL2RvARLf9A%2FJnBq81rRt1E20NHYQmDS2bTSkPtu9DT9QppuU9qvaj4nmyV803wmZBkij5Ej%2BCV9NMaYH0XonWHQa7Y%2ByVyqPA4ymDLrCjl8iK%2BobbI4hmW1IiAxfp8S79gaKFawxog097EUl4wWU053wiECHhRW0%2Bqpqwx7Zq0haOU7uClbXgcq9wQxBb4eqfVZisj4KDyVaA6wZoi4fgv7ZIc%2BkjeDcqj9cYO5E7s60D5E58fB54cnQ8B3M%2FH0a%2BNxx5chtYoQBE99yKO2ZZw6XyVHvMBb8ZPWd5%2Ffnhxy4wIQ7gpoJxzsvYQGc8x4aiS6KWDP6yLXc1T83gsYBr1qnN08lPP8unnHGKJDECDEPB5EXrh58rds95hy4q5TiZlrSMQnglu260CU6vSjZgj%2BE8%2BsrsKXkx6dQa30pKWIG5%2FVIGNDP3kWV1CCjlINtvjdj%2BX8PvVM15Pd3G3l7l7kiNSJb%2F22TCZbdWyiJSCorFLlAbczeJMSnxK7Z2g8KaZR7mQOhZjyBjPXDiGmnBtk2aGhhxfB%2F04NqPpr3uHS%2FZlNLuCpz6%2Bs%2BbAxeLkSVyGW8EV3ly704x6h7Vxw%2FE65qqZEqxzRBkFNKqVLU9fCQT0%2FPMKS5gcEGOqUBj2fD%2BSs07nUsc6SUwU%2FGa8kNWj4gt41QlnZe0slfBvS7m9JwF0796e4NCSGeIrxBw%2BkryLfssBLdXsWVk%2Bphq%2BadF%2FIWAhv7JNYoFdJPrLXiMn0GqrJd8fAlxorojy7QaUfSR1idLLTvs0qnNUKYCwHBw5vEsFzWMtof9ZM%2BZET1aey5ugplvcuU%2FMMMPytw619BrOW7hPBZo1fLWqBjG4xYjj80&X-Amz-Signature=1952bd373b1767d33495ce7d380bd485244d48659a3c96f3acf54b5e3c3a3b11&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXFASG3F%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIAHEKJIWSydVDPq1l212zNmLgma4eF7Kzmb2nOZjHxDtAiEAotJSLFR1iGeP6bAjwY5kM01rDg486RntTRQWLuM0x%2BAqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnadoMOfzcoat8vLircA0%2BOY9H%2FP%2B4K6roteV241ggLWIFmAmwPlk8%2F8hrdNBqJanqKIAJWmdg7F75hxVHy2NqBRuZAWq9cJjWjMu1%2F8cNpqwCIjWxgYd%2BrKZ3e5Zam9Xl0EqNEwmZ5d5j%2Bjxhn0SibAHZOPZ2mSZZZpM6Z0ZerIATcFbVLeh18kGD9L9GMKrTBcVIxOfAukgM86a%2F59p4FHA4DjSTt11q0bGxaLqNJQSsOBlAeTRyrkvYgGYI7Sp2r7NYvnXhL4yIZjGYaNRot6cBVf%2FSIOMfpAxKx48%2FCdTji0NWf%2FwtBkPShdXqJziuTcgXL%2F4dRK%2B1xWqPxdyHYqETaA379Xyy4e5BJaSuujIsCRBfXhf7%2FNezcEKV80iI0mMVL6W8YvryDowWaytS%2FWp4spIMBut8EMn2O2ENi%2BIuRBXXP%2B8CPc%2F3kPmC8PVIVtdZGDe10dHjpznbv6pSj1HGUNJg6Vl013lnkUp1HoOwnQorqulBEKSbo3nCMMLt7MMKEBtvUSYVTAhk06rcT2oZXikbKDZe%2BlFDH559Gvye5B3nvJSf1ceOlXkse%2BcT1lt%2FAATWnbEwYkGU8oduIUu3yCnQCFVzGgJCdZdkyFXc0MYGsghxg45yD%2BglYXilil9iafocAN%2BPiMOu4gcEGOqUBR0jjlo1QuH8ESeShCCadRt7J%2FePr%2BaCsbxZDiVd5Cdp4DuhgkYOGyZ%2BBLg8NB9nB1Mud3AvfR2EklSory3nsK08myDCFfJr%2ByNPgtOdaraUdck63sEwGPStAIA%2B8T82EOrOADYeYgYLK5ZYbTofFguFL5itdrktXMsBAJpAGdI4qmhka9vOuacrrrMyZqVU%2BgBlrR5FA7WcPxodkZy8xQjCKw3Ek&X-Amz-Signature=b571a1ab180416b987d97ca3f9787116665a4fb153631ed843dd0541b1720bda&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635USHPAU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFV9kPkd5W3yUSUSgrTKt2Wbr20cAILw4GouMfblIILQAiB3dJMUNFKphC%2B0fZEIwoaHyCzw9XLfGdSWuYwt4tqgiCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgmtChtJ5NS6U1JeuKtwDFa0yxXM%2FXm0OxuuLPBe7%2FPrAFyJUkkWLSokGBp4xdDygPJTFDKEScnlb0lor6HJYXZfzdxbpTfFPQIo0Ogh0FC0zUwyuzT%2Bqqje8Qm3u2EWn0LMiYtGOJg8uSJWDBS0KOPM%2Fvd3xtOQj5BWBdZvEtpRWYfJ7GEsxpUdns0P9OPIf7%2F6vhfknkm3%2B9aI1xyEeNalk2oAzzWnoSHqKnGlbPJwcG4gq1x0Pif%2FVAOXhjwAhWq6xRxe5gdrqkyBA733hntz%2Bn6VSKcU2WW2KUf8LRSQIkc7yfB3SRTlFUgSFOwIG2KzRfQvHpRgVZ6X09L4wP0XCxbdlDFE%2FuDNLOupWwsD4muuUpTNKPqULoxEEQt4dGjlmjxcPMHn9FTzbrd30ayZHORXzKntPIHjLDtmCiKpD0grNCwtiaq7Iba8qIZobS%2F8wdkgCgYcd%2FO9qRURrsQ8HgP8cUkZdm%2FvuJXd3ALg9RqqhUK3DvkoukxxMZk0SKBXid%2BSjb1WJKaEc6s6D7asC6%2BesYhqknSY7Sapi5yfJwdaDhM181HCMMOBWUDj9ev3JlisNjMvvF3z0pVwaIUe6CzbgpVIF3cE1r%2BtfS8qnAwHSO81QXlZG6biI5tlKRAqnNrt9AiYVVsUw%2B7iBwQY6pgFp4wb%2F7NaVJgabhX0VPQh03McQsSYmSXCmdVat%2BXfyTwK7I%2BHd%2FwqG8TANa2IzK8wUuSdCHhVRVULKZGJjoBwQMFr19aerwkTc2GduwGr%2FC20HoiMH0etJ2VnWDC8TJkOA17a6%2Fy6LnxZimRCcEHJ80gETTVGPJM4aj1Ncs7L%2Bd51XoCgYdqbBhR9QXBegtVDOL0C2f9d%2F7Rvrt9czL62B24rtO6Kg&X-Amz-Signature=2bc1057d718ae6016912ac4a8786bf079eaadb93312af554f09b0179b4933a07&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
