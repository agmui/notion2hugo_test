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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJOIKHO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDOEV5%2FKbzuW2edxY%2FMUSqlMjHrSUsGxDH2jjRHrvT7wAIgSHGYtIpbjxPLN4zilRVZldPi4M7wr1g%2BmAo5geggIPcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGC8PGUblT2hxRRUtyrcA9206L8SwrjNGAj5zwGI8gicj6%2BShaeZ3h3cctsfw1%2FcUxD%2FnBalyDovH3OJvgNU5HEPoHHzrqRjziK%2B8SzqiErtcuhi6eoQitzoqI0zz1D0FQd7BlhE08YVVeEsZ2ZWToMfG4YLDAukxVWRYWKTj3DhcivrSoy9mWMjyNnzmBI8PVmn9iqGcMuMTFTiFz8flm%2BSrrGbSXtVX1pSxtqV4Mob0yIH5xjH6gUVWhXbnEXRaajrzQLJxdy9qzFp9EaY6S6SHK5zhOW8zIuJ49CbY5FcGJq6cfoAdfxdEznUvCgmDbf7fp09Jwtvu9a1qlao0kcXdDAg7n5W4RFd%2F36NtI9mqdMpUnR79vbnRMx972A%2B5EAmf4Fxd8dw30zRd8h9pZfGTRa3YyxVKjfwfxUzJuFQ3JZ85GGAxm2guwB2eMuEgrRxbPP4RPMst%2FEJFAf8NpAT9M8g0P21sgA39grAnuEbm3Ft3dfzddkN5IcTkMMXXsL374bKp8Emn7EJB6MTIqB7%2B6eaPObBnjl9EbQQXYGhldrdpi4LrECrradrOGXNM7YSe%2BvgCV6Hc7Vy%2FF3ZNFCALh%2B5C2H7a2qD5bFLMceFiFVDgNLvP%2FtkCC%2FU7HYrC25CekFJp8jE4D3TMMnqvL0GOqUB1%2FQCjzRgTGV5Moa2liOjnl%2FcqV40z2764Xinbh%2Bh5qvuL07daOZ0RZt9kUXlTUxngzPla80CISEwcfUgcWIMSSi5zbLasHocMdllA%2FV1c6Mi7GYYf91x4vbZGKJcfKl7296yg5uZw0ktgP5X1YiMfXKYpMajhxYCJKGOAYOV4e%2BODnXXNvi1WQFK1nZ57uw1EJu0wmbh2Wa4cjxofZNo1i3UjX0B&X-Amz-Signature=00a69ce905dd7800b4f3cf6d81b6cc64938064f24aff9435a624bbc32a5ac39d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJOIKHO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDOEV5%2FKbzuW2edxY%2FMUSqlMjHrSUsGxDH2jjRHrvT7wAIgSHGYtIpbjxPLN4zilRVZldPi4M7wr1g%2BmAo5geggIPcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGC8PGUblT2hxRRUtyrcA9206L8SwrjNGAj5zwGI8gicj6%2BShaeZ3h3cctsfw1%2FcUxD%2FnBalyDovH3OJvgNU5HEPoHHzrqRjziK%2B8SzqiErtcuhi6eoQitzoqI0zz1D0FQd7BlhE08YVVeEsZ2ZWToMfG4YLDAukxVWRYWKTj3DhcivrSoy9mWMjyNnzmBI8PVmn9iqGcMuMTFTiFz8flm%2BSrrGbSXtVX1pSxtqV4Mob0yIH5xjH6gUVWhXbnEXRaajrzQLJxdy9qzFp9EaY6S6SHK5zhOW8zIuJ49CbY5FcGJq6cfoAdfxdEznUvCgmDbf7fp09Jwtvu9a1qlao0kcXdDAg7n5W4RFd%2F36NtI9mqdMpUnR79vbnRMx972A%2B5EAmf4Fxd8dw30zRd8h9pZfGTRa3YyxVKjfwfxUzJuFQ3JZ85GGAxm2guwB2eMuEgrRxbPP4RPMst%2FEJFAf8NpAT9M8g0P21sgA39grAnuEbm3Ft3dfzddkN5IcTkMMXXsL374bKp8Emn7EJB6MTIqB7%2B6eaPObBnjl9EbQQXYGhldrdpi4LrECrradrOGXNM7YSe%2BvgCV6Hc7Vy%2FF3ZNFCALh%2B5C2H7a2qD5bFLMceFiFVDgNLvP%2FtkCC%2FU7HYrC25CekFJp8jE4D3TMMnqvL0GOqUB1%2FQCjzRgTGV5Moa2liOjnl%2FcqV40z2764Xinbh%2Bh5qvuL07daOZ0RZt9kUXlTUxngzPla80CISEwcfUgcWIMSSi5zbLasHocMdllA%2FV1c6Mi7GYYf91x4vbZGKJcfKl7296yg5uZw0ktgP5X1YiMfXKYpMajhxYCJKGOAYOV4e%2BODnXXNvi1WQFK1nZ57uw1EJu0wmbh2Wa4cjxofZNo1i3UjX0B&X-Amz-Signature=9f4ac2cbdb080809189edcdfb97600296048528380cf2bee33b296d1cffd570c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKSTPHV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIF3scL3lH9w7Fv9mYnO%2FrySMHMHxyCKRKAivFelJQ0hnAiBQ15VgS5Ds1in3fowYHEb1OdwdumoG2aaXiJwPSNuE3ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMTfzovmF01nGGkY9oKtwDX6398xcUKuQm5PEBHmB%2FuFJkdPeqIj1Y2vctZjSsk2nclOxTGaUg9159PzHdV80Cl%2Fb%2BG2t1D0a1N%2B%2B3AuNuZ4JWmSVjyahZj4AxTSNEAvifuK%2BtrMXccebjTxGl026r976UvHduM9lniXxjUVO01lPzqrWChN18vQPe%2BisyT7OqwknCattaP0FrNLF6DsfzbBFtrfvWPCSZ6i06KR%2BpYSrLYLgwKS0AKNO5z7QX%2BbXNTxVaZK0%2FEKVsTBRFSjGz3PJlcxpIpNsAzcXiUKlDV4pQFlbXsrfmrE48sCIaJQcxdveqfj9psY1h%2BTuuBm0xbJjcgO5LdeJIlo93cMMW6Xr8HsKlrHJn5Ms0OoSm%2FI0lNdxo6u52G4r5Q1FgUGxI05TKyEqGR7znaoINaE5ysbekW93qNHIUmOW%2BTjBFViRm8WVBiSjm2xAxgjQE4rRaN0AslKotHYS0%2B%2Bq5AIcUQxSMRUCJxktgV4tiTop9mDixGG6CHFMSecijLKXctxWJq%2FFFQR00zHPd3wTR6fJPi%2B77KG7aJmJhVVogMz715b%2FsJ31BTe7rDOIj2hxKqk%2BlugNE0QqFqgon5IcJ2K3Vesz%2B0P28K%2ByiMQHgw0Ccm2%2Fj%2BYoWcJnlraP7Lwsw6uq8vQY6pgEdvwxfZZQNgh34uPL2DW%2B3GqwacwC%2FSpvvse2WX%2B5%2BSd4Pel9OP7EbHJH7orV2QS47Qs8ROO6rPKmFLXFbbFOMUYhMgkG1fCFtri5BzmW%2BL7lw140DeOpUVpNVmAkd88dDe77Yd3i0WJdkvl%2FHwciJ08uNDHF5Ldi2%2BZ4%2FuYoi3IF%2Bw2AIJZyHXNllRoXoYK0PiJ1VF9TLKI6vr0PQpgFQ6oi%2F26w4&X-Amz-Signature=6749f8388ca2f44906ca0f744b3bed2c907f99f53f5b8fe500ea34bd0508c277&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULFM5DB%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCJZ4pe8xvSDqI%2FRvG5N5Rm%2BD1ujJRi4key3WmfTPpCHgIgCOQYmD8If5uijFUbzfQiw58aa6r6DNWh6eM1E9Hb6dAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHUw%2F3Cfp5l9SUxpvircA0URNmxd%2Beh40nwj64L5s1yTN7aCmFNXrjKqr28LsV1SgGXcx%2F9UWQCu7BH8hHyh8OX9TXSe7piRL3kIIfftk1Q7VvNRfRj6pHfjxViKRARGke6x0Icf2gvR1mzEjpxSV5s3vx4fDTIqlUfgkt5uf%2FitnvIRVDMRbAgUR%2FO6kgO40%2BByB9h9D%2FQeAeXZkZ2y%2FJ2Tl%2FKLNmawHhKHzOC9fWnMv%2BDD76yEnYlvESEzgM6i8Enxk4KUDAOI2YAJADHBJ5JgF%2BzelPvDFWWnokd6zgnumaPusaDr4BfA1XdcL96BbOZH6qZq5JE%2F0GSsR25WE2kN%2FsSMP9hDf9tO%2FpZqyv3i9YNCnCF6jZ6V8RHCHpEPSd9QTUqIwTgXxfVpDCr%2FIEX87XewDKie6rNFBi2fVjl01tHCh3a%2Bwar2r93k2W4Ra8urAwheVAK7zwzhU7WamOuBMEnO%2B%2FGpe46nTqB4VHd6u5KJX4v1%2Bmcxt7x39jm6hg8HUmPssDcetPGG6b6vZdHC6UaBqr%2Fs52xhvEep3n1gp15d%2F3ijST9jdF7u2eXX%2Bbkirbd63pfKNjYlGfn51UONrYFmPYqLqb9Uy6cFPT3la9bz7eoBx81q20c%2F%2BBDeQZcTl3vm0J6otTiNMPvqvL0GOqUBjdYAJUvfLR8iUxEz8SvE9zqB1rGa7Bi23elK0irdCtaHj26an393XIPr0eScGbcPoE5t2RR1VZ%2F0cTqfyO79o%2FZIopESBxIorcgLB%2F6PJ2BFWmfD85gPfjmKwBgEypwAYSxnFA9KXOcQCYT%2BjWtGU6SqLjQAUFsUJWEhSiTUghho5xMEKWq37JIVfq5PrBOmCocsVm6ObKCagv5GlczByvDznZB%2F&X-Amz-Signature=eb21c4ea3bf68290e19146114acdadca8a886afd8a2f09545fd15da05241b969&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJOIKHO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDOEV5%2FKbzuW2edxY%2FMUSqlMjHrSUsGxDH2jjRHrvT7wAIgSHGYtIpbjxPLN4zilRVZldPi4M7wr1g%2BmAo5geggIPcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGC8PGUblT2hxRRUtyrcA9206L8SwrjNGAj5zwGI8gicj6%2BShaeZ3h3cctsfw1%2FcUxD%2FnBalyDovH3OJvgNU5HEPoHHzrqRjziK%2B8SzqiErtcuhi6eoQitzoqI0zz1D0FQd7BlhE08YVVeEsZ2ZWToMfG4YLDAukxVWRYWKTj3DhcivrSoy9mWMjyNnzmBI8PVmn9iqGcMuMTFTiFz8flm%2BSrrGbSXtVX1pSxtqV4Mob0yIH5xjH6gUVWhXbnEXRaajrzQLJxdy9qzFp9EaY6S6SHK5zhOW8zIuJ49CbY5FcGJq6cfoAdfxdEznUvCgmDbf7fp09Jwtvu9a1qlao0kcXdDAg7n5W4RFd%2F36NtI9mqdMpUnR79vbnRMx972A%2B5EAmf4Fxd8dw30zRd8h9pZfGTRa3YyxVKjfwfxUzJuFQ3JZ85GGAxm2guwB2eMuEgrRxbPP4RPMst%2FEJFAf8NpAT9M8g0P21sgA39grAnuEbm3Ft3dfzddkN5IcTkMMXXsL374bKp8Emn7EJB6MTIqB7%2B6eaPObBnjl9EbQQXYGhldrdpi4LrECrradrOGXNM7YSe%2BvgCV6Hc7Vy%2FF3ZNFCALh%2B5C2H7a2qD5bFLMceFiFVDgNLvP%2FtkCC%2FU7HYrC25CekFJp8jE4D3TMMnqvL0GOqUB1%2FQCjzRgTGV5Moa2liOjnl%2FcqV40z2764Xinbh%2Bh5qvuL07daOZ0RZt9kUXlTUxngzPla80CISEwcfUgcWIMSSi5zbLasHocMdllA%2FV1c6Mi7GYYf91x4vbZGKJcfKl7296yg5uZw0ktgP5X1YiMfXKYpMajhxYCJKGOAYOV4e%2BODnXXNvi1WQFK1nZ57uw1EJu0wmbh2Wa4cjxofZNo1i3UjX0B&X-Amz-Signature=c27a5feef6242f15a2e8b641e76e052770c039257cafa41bbe5a052ee62bebff&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
