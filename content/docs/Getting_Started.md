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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSLRX7S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJcQW%2FS07%2FmMHupIVAyAamhdRkuepb4whB7kc8JPUQhAIhAOjO0P9GtF%2FN%2FVjnuGsIGGaKYF6qtJ7Nm9X5Sjy9AMDTKv8DCFAQABoMNjM3NDIzMTgzODA1IgwshoVpZx15mNDTeCwq3AMpl1AkAlVNRpKgDJ2QMH9OdYyxvDD0sEzXstzdqztDTwi5826Beg3tqwgOhmIcRTwAkmGcoUYt1vUCZnVNvaWMFVKH3116HhyyUJqGOj%2BNzTHH0jnbmZQmgaY%2FoiCbet28r%2BrmCiUOPUibMzcejFTWSxpm7z1DZQFwLvrTM3h0DQ0QIndEXmJ2%2BFTa%2Bz7ym5uYhp%2BesDhvgw6vMAQxUT6xJZFQdGq0YpMp5CMg2328P%2F%2BX32arNgNy4%2FuOAmN5dUmae2%2Fp2FbRQxiZ490mvgRr2nDeB1JxqwL11e47zcZRbk4iqZ2uvcjVIPIh5ggT3BizfhAzcXnuEcgwXXW8G4ZWxF5SNuDygnaP8No91A6cLUm%2B2lNFNeTwBW6z2FPU7%2BLDDe8PjwUBREQvMCmV2v6GDj4rjGu5PFRGQSzscidf6swe22InIj7Rf9YGGQfVA4N0qPkWgz3yGHNP78ZOFX8FPBq%2Byic0d%2BRZCE%2F2WSTTL1uI7wF0cYe0Wk4Ob4UVJ26QASOds88t9vvTKSAjUp3b8BqxEnc%2BrflZVVifBMvjdWoVrKVYAQk9tmnsHYdR5CUJZuWqQfVOv5k4vOoB86WvLvRE2NxRyhHBgeT%2B93Zufgyk%2BJ6iH%2FvJsXuOSjC4v7XABjqkAbKqvg062dtR30Yz0GqYVFYbSgg8fQT%2BS2LuO%2BhgjRp2vokzISa4jpP3L96R35Qa7SPHzfUaCspAjdKtpeDDOJaR073uFW0C6GqfqlCz4SJOzUOznGlc1hQsUDnRD5Ea9uClMwM729n3qZPDygn4Wg%2BjeKJC6CR2fEhB7ZfZr8%2FUNnZFB4Zrpm0u7X4Mg00KI2KXcllqlgrrLu7aMwYxDqgPOgoH&X-Amz-Signature=7216babaf90371d0ee605864507d4ed3e9c233ef027472b5af9ee4efb76e11a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSLRX7S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJcQW%2FS07%2FmMHupIVAyAamhdRkuepb4whB7kc8JPUQhAIhAOjO0P9GtF%2FN%2FVjnuGsIGGaKYF6qtJ7Nm9X5Sjy9AMDTKv8DCFAQABoMNjM3NDIzMTgzODA1IgwshoVpZx15mNDTeCwq3AMpl1AkAlVNRpKgDJ2QMH9OdYyxvDD0sEzXstzdqztDTwi5826Beg3tqwgOhmIcRTwAkmGcoUYt1vUCZnVNvaWMFVKH3116HhyyUJqGOj%2BNzTHH0jnbmZQmgaY%2FoiCbet28r%2BrmCiUOPUibMzcejFTWSxpm7z1DZQFwLvrTM3h0DQ0QIndEXmJ2%2BFTa%2Bz7ym5uYhp%2BesDhvgw6vMAQxUT6xJZFQdGq0YpMp5CMg2328P%2F%2BX32arNgNy4%2FuOAmN5dUmae2%2Fp2FbRQxiZ490mvgRr2nDeB1JxqwL11e47zcZRbk4iqZ2uvcjVIPIh5ggT3BizfhAzcXnuEcgwXXW8G4ZWxF5SNuDygnaP8No91A6cLUm%2B2lNFNeTwBW6z2FPU7%2BLDDe8PjwUBREQvMCmV2v6GDj4rjGu5PFRGQSzscidf6swe22InIj7Rf9YGGQfVA4N0qPkWgz3yGHNP78ZOFX8FPBq%2Byic0d%2BRZCE%2F2WSTTL1uI7wF0cYe0Wk4Ob4UVJ26QASOds88t9vvTKSAjUp3b8BqxEnc%2BrflZVVifBMvjdWoVrKVYAQk9tmnsHYdR5CUJZuWqQfVOv5k4vOoB86WvLvRE2NxRyhHBgeT%2B93Zufgyk%2BJ6iH%2FvJsXuOSjC4v7XABjqkAbKqvg062dtR30Yz0GqYVFYbSgg8fQT%2BS2LuO%2BhgjRp2vokzISa4jpP3L96R35Qa7SPHzfUaCspAjdKtpeDDOJaR073uFW0C6GqfqlCz4SJOzUOznGlc1hQsUDnRD5Ea9uClMwM729n3qZPDygn4Wg%2BjeKJC6CR2fEhB7ZfZr8%2FUNnZFB4Zrpm0u7X4Mg00KI2KXcllqlgrrLu7aMwYxDqgPOgoH&X-Amz-Signature=3a34692e7de548aab5b139241445a1fe05af28d8dbfb518b7f72791c683853ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQG4VET%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDox4KZ36yWZZYuEjZnJSvrYdbAZs4zGSyQvjVD0vP8lQIgMtCrpXtb836i%2FP8PfsM9XW%2F6XMfRplQge33%2FAe0IG7Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPa7GW9EGcm7L3DfECrcA0aQkzFSMGUIxxhUra5fOeu6kPebYX7evFGwWDuyqbzu6TxqpA4KfAdp2rB48tSyOSNa7tUvCUH424VAO62bz1oHyb8vkVd9tgOF%2BPY0%2BKIvOc2%2BSyevBKT7zeCA%2FiUYfVoE4vtCuXrlwO%2FFN4Vf8%2BfAebgzlpOnqjsZ7FZ2pI4u2Tl3spsC%2FkzQEBm%2Bp%2BgnQYlgRYKGAWIklBQWSUwlb7p9VIZubOmdo5IveYSvZV3wLcbQUsMgpG1LFPu9ft0Gw2cAhAzZqkmND1Nju2J8Bk5qrh0ZVqA9RQxLPGzhTQ8fDAcWAzmnGmsUZn9n1f%2BAr74m53DUXCKtgDKO3Ub6xKZvpBct6tc66sEBjy4lVUNb%2FuOTKVrOJCGojPiwz8iuPiRAdQwuE9Px9BPXDqIAa8SCunz46i07935W1pGNtlQl%2FaDF1KErOfk7Cufny2z0e0hakFfMWAHoPZRueHjWCxVLg9C0mXmfu9s7Fw8fP4lrTNFeQ7zCDvdXOYn9gLMcicBvKu0uAYB%2Fp2wtli2jxDDBWagTZ7PIwEzOnWe8I3EaItzz%2BHMZaSsUI4aztbo8oh7D4qRxj3ciRfcnUN1nvYr%2Fk%2BmiPgzRd%2FS74ug5VZuDRdOecdaadY6TP0hzMLu%2FtcAGOqUBcdEvv%2B1s7EwRoGqgy6Hc83ZVp18ycQRcM99A6%2F2wxd5YZVQHpk6CO2XvyQMbuSt5cRQvbanEtl6jgVoTPoFKqp3X1jF%2FDvAENsmFnjKQGkDknX7SkysEcxYrtP2Nvde632CEKOAWhSE2l%2BJuRbSwvBlV%2BcADAB5miN8%2F5NgVl9EpxA7wfwOoPUjmtndeztMEBTKTC5wCgvERh55UTAOSuKlY%2Bnmq&X-Amz-Signature=910692849a409abd96e5947a7f44049c4d17e0f13a28bef36753677b8b0728d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDREJPAU%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5NskVVI3CANcsIfVb5anj1nhKOMEtLGFYCfERPL8bNAIhAMK7CTk5Eu4zp9JFz1m4j9Vbs0074Dpn4hONxjR%2Fi7mWKv8DCFAQABoMNjM3NDIzMTgzODA1IgzdOAyMQrwjJhHzWW8q3AMIPGG7UHpXIQssm%2B95jrQG8h%2FlcDO9QdgCz%2FGQZbCfmEOWnREx%2Bo3T7Sb8ap%2FErFhfWMUZ52HufvbJb2ALvlh6ptElaCGsCYZeEwsJ50BIu7z36l9jTXVc9I8AQQpJTH3yy0WDS2%2F9E8dQGQ5sor2WoQ40C5SMYN2lfesJWomqARb%2BVVU3DI8TwoaDBKh3RZ0%2FYz53xU6ay5SjjTM4%2BuZDD8UB89ajBXgKgduhmGW6EswOb3Qsxqjzrdi0p5A4Fltu7QKCDvYqM5IAbBMpiEst17rag22lwMUYfL1vbZnLyMrdqVJ1ayGpTGLXjj24rXgEq6St4tNv4n%2BzqtGEla2L8I2bV%2FhNJWk6KQaUnbK%2Fk7F6FNtEQpYVVmPBDIsF18M65rtMyqgW8UFnn22Akxld6dF3wzwG6rUTkElnnf63EkOBdSYKLVtYZU2ot5G0qlEaI7l4Sblexwy4okT6kWK5%2BhczH64B3Fl8aawNSCKQ5wWQPDa96nmeP5PtDg5jDItmnP6g%2F7NZpZmadkFdaZqPLVOT43%2FnyM5ju9NwrpomqBO8hLmj7okJxEfzy%2FSj33u103YJw5K4fahQqsOSftoBBi382HzkQAQaOelGvs%2BeVEiIYwI8mDcfHQq4TTDhv7XABjqkAftpm92BKV4p%2F638j63Gn33adDHytDo%2Bkgh4m9LVdLwvWJxSQAwQcZmkDxI4dlLv%2Bo0wh6d17F63ozvLjZx%2BRZDap5CTz4okzLqMpSdK%2FDblwJD%2FGCBLnykjciRbaBIXlAvDKdCook42lOcvxTgTitl3v6DY7rhLiidv%2FqL5aOv3XGjMb4ZDWE03EDiIblTK%2FBQm%2B%2FOZ9ltXCo1%2FvhUAFqnLTC7f&X-Amz-Signature=9fb8e6e4f38175ab9260c318cb348a378454114aa4fe62d98695934606bca055&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSLRX7S%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJcQW%2FS07%2FmMHupIVAyAamhdRkuepb4whB7kc8JPUQhAIhAOjO0P9GtF%2FN%2FVjnuGsIGGaKYF6qtJ7Nm9X5Sjy9AMDTKv8DCFAQABoMNjM3NDIzMTgzODA1IgwshoVpZx15mNDTeCwq3AMpl1AkAlVNRpKgDJ2QMH9OdYyxvDD0sEzXstzdqztDTwi5826Beg3tqwgOhmIcRTwAkmGcoUYt1vUCZnVNvaWMFVKH3116HhyyUJqGOj%2BNzTHH0jnbmZQmgaY%2FoiCbet28r%2BrmCiUOPUibMzcejFTWSxpm7z1DZQFwLvrTM3h0DQ0QIndEXmJ2%2BFTa%2Bz7ym5uYhp%2BesDhvgw6vMAQxUT6xJZFQdGq0YpMp5CMg2328P%2F%2BX32arNgNy4%2FuOAmN5dUmae2%2Fp2FbRQxiZ490mvgRr2nDeB1JxqwL11e47zcZRbk4iqZ2uvcjVIPIh5ggT3BizfhAzcXnuEcgwXXW8G4ZWxF5SNuDygnaP8No91A6cLUm%2B2lNFNeTwBW6z2FPU7%2BLDDe8PjwUBREQvMCmV2v6GDj4rjGu5PFRGQSzscidf6swe22InIj7Rf9YGGQfVA4N0qPkWgz3yGHNP78ZOFX8FPBq%2Byic0d%2BRZCE%2F2WSTTL1uI7wF0cYe0Wk4Ob4UVJ26QASOds88t9vvTKSAjUp3b8BqxEnc%2BrflZVVifBMvjdWoVrKVYAQk9tmnsHYdR5CUJZuWqQfVOv5k4vOoB86WvLvRE2NxRyhHBgeT%2B93Zufgyk%2BJ6iH%2FvJsXuOSjC4v7XABjqkAbKqvg062dtR30Yz0GqYVFYbSgg8fQT%2BS2LuO%2BhgjRp2vokzISa4jpP3L96R35Qa7SPHzfUaCspAjdKtpeDDOJaR073uFW0C6GqfqlCz4SJOzUOznGlc1hQsUDnRD5Ea9uClMwM729n3qZPDygn4Wg%2BjeKJC6CR2fEhB7ZfZr8%2FUNnZFB4Zrpm0u7X4Mg00KI2KXcllqlgrrLu7aMwYxDqgPOgoH&X-Amz-Signature=5864bd5fe9774a4e7197ac5b470d6a62467c60b29085879f3802bde5b8d7f0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
