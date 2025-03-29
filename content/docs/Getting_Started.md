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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPLZMEH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDoP3VkM5xQVDkI%2BBOBjq0dv5eMcMiFAuz8%2BNwMeKaXUAiBpWRWqL5KOew4xcN7PKIG0%2BMp5m0mUGjUHhSzl6moJPCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjyJC%2FXBkmAE7riWcKtwDhrReKFqe8s%2BnlBFpc9vIi8Qs25EOL3trTMdLkzdP%2Fhn7e8JR%2BQyVTfO%2FEMbqXPvLLcrmrRna%2Fcw5G%2BFk%2B9Ks1lwPWxNJpxeR1fl3ysWClD0YisTb3XFGs9VoucuBujNPNUmk05fMRcXobvCmgxEoFsbt7xHPWaoX%2BSUI0XoIyk2WReX9q%2BmcQilWC%2ByICMSe11QqqdZtQrRSPz68Gf2lVmUYqsxBdTSPS6Q%2BRsACK6TYnqWOlWqvuG33Voq6NJtOZHvBAxNBoaHgeEeO3f9%2F6cHqdcfdEPO1oRHA6en6ldoVRm1qx529McCqPaVULxMKJ3QocwuzC4H5%2Fv2hggJRPpY2yjZ23D8APZTbM%2FbwhrEKmfENN3oweEzuj%2FWRLNj0xS94l%2FEi0HJxLoMuGHshKA3u3li9kYeo%2F88K1b5tWb63ctL1l5mEaIKDkh0mF8vK2TUsB7etoU690oIi5JvIBsUCNt08qyvcHxBDdoV%2BD9CMnMqJgtDY2Ehbz5HeJn0i2otUMg0LKWrjXcLCmCx%2BdRBpWmruL%2FLeD1nTg91KRUBkNhtB2fl65bL8Pck4jfB95fvA0Tba%2B8T6prgdoI6UjvMP3p1AVNk83LKPSbTGBQLe1GuymOa0rTUE4iQwzKqevwY6pgHjZibXf4LcO1SvLBbbvIaNnhHRVJ0Q0EADaz7Ngg%2BLgJhkDR4sVx0e4XmCk96tEvC204Km7R5hIT3hbiA%2BTT9EO4Dgt9PN2COkUMcBY8e5usDpHEnCAaXkw2iK4OmFe4XAM%2Bd3apAv1YdgD30QEglsZDk1PegtXB5sFT6fRphwNDfSy7OF7Amo1qwYst32wma1JHGZP9cd2qDJ6urHqjGlZpfkZuGV&X-Amz-Signature=9192148827ab0d414f1330a1d17169c4d9fcf714e276b0a1a04c0b6999e4465b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPLZMEH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDoP3VkM5xQVDkI%2BBOBjq0dv5eMcMiFAuz8%2BNwMeKaXUAiBpWRWqL5KOew4xcN7PKIG0%2BMp5m0mUGjUHhSzl6moJPCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjyJC%2FXBkmAE7riWcKtwDhrReKFqe8s%2BnlBFpc9vIi8Qs25EOL3trTMdLkzdP%2Fhn7e8JR%2BQyVTfO%2FEMbqXPvLLcrmrRna%2Fcw5G%2BFk%2B9Ks1lwPWxNJpxeR1fl3ysWClD0YisTb3XFGs9VoucuBujNPNUmk05fMRcXobvCmgxEoFsbt7xHPWaoX%2BSUI0XoIyk2WReX9q%2BmcQilWC%2ByICMSe11QqqdZtQrRSPz68Gf2lVmUYqsxBdTSPS6Q%2BRsACK6TYnqWOlWqvuG33Voq6NJtOZHvBAxNBoaHgeEeO3f9%2F6cHqdcfdEPO1oRHA6en6ldoVRm1qx529McCqPaVULxMKJ3QocwuzC4H5%2Fv2hggJRPpY2yjZ23D8APZTbM%2FbwhrEKmfENN3oweEzuj%2FWRLNj0xS94l%2FEi0HJxLoMuGHshKA3u3li9kYeo%2F88K1b5tWb63ctL1l5mEaIKDkh0mF8vK2TUsB7etoU690oIi5JvIBsUCNt08qyvcHxBDdoV%2BD9CMnMqJgtDY2Ehbz5HeJn0i2otUMg0LKWrjXcLCmCx%2BdRBpWmruL%2FLeD1nTg91KRUBkNhtB2fl65bL8Pck4jfB95fvA0Tba%2B8T6prgdoI6UjvMP3p1AVNk83LKPSbTGBQLe1GuymOa0rTUE4iQwzKqevwY6pgHjZibXf4LcO1SvLBbbvIaNnhHRVJ0Q0EADaz7Ngg%2BLgJhkDR4sVx0e4XmCk96tEvC204Km7R5hIT3hbiA%2BTT9EO4Dgt9PN2COkUMcBY8e5usDpHEnCAaXkw2iK4OmFe4XAM%2Bd3apAv1YdgD30QEglsZDk1PegtXB5sFT6fRphwNDfSy7OF7Amo1qwYst32wma1JHGZP9cd2qDJ6urHqjGlZpfkZuGV&X-Amz-Signature=4459bcab5d32a1002805a59eb7ebe0981530f6a730abdc1a0ffb097178317e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGP3KENU%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDMIaT2iJgsDmifv%2BsVH3rON1YiDReaR%2FMsEHj%2FeEGw2gIhAKNO3oGyCO872Ufz8KyCcVoatLL6dUJ%2BypqYaypwBUDeKv8DCHAQABoMNjM3NDIzMTgzODA1IgwHOariw5Uz9Df0Muoq3ANkVqslC3N0OylvnUx0EEQIYuuwTCES6IIoArGYHgk6FTRbmmWsopjUCfh0XIOFqYWsBOOJqA3G9VGp0%2B%2F2c6T2vZHiENEbjy8UOfUkEvMcwYCuqrMAnjB1wtN7yCp%2BweVOKw69g6kJyZj2uBoWoi%2FSDQ86z4jD%2F4uZPxzjTLdmy3wYz09J0fKxD0f%2F7Y1eVXzcnkWntQZjzg1kQgE04fY6bzZhbkpbxTJgOhXuJxK24xJat4A8YTXNYNOh6AXhr6pLl4Kez0PEKFhY9EB3KZ1f2Xz4Xw9Lbp1pCgrfwvG3aa%2Fs4XOhe5G9%2BZdMmRMl6x%2FOoR%2FT%2BpzIHEOs2zb0jgBR5hLnGvoD7U4gq8IFwzDb%2F84oEeADx2HMmVSDjetaYeeYSr9gQPr67rBTf8CRbKBzwBsmfS1JCABARzkHVKXpbO4QLLnlzL%2BBsrcRPQtT4n5eSQvD320ZLF%2BdSwCQdbFDtH%2BENQ1ucJuoiJnqCfw4EZ16jSDwViSOSGGLpOg3AAA2OtA2%2BtfEBguAsJfo42TAjmiY8VqsYXynz90DXnyfHHj43cxNymMLxhLoTaZVme6vC9bXxJweYmC9ytFPhuBYEfdsEWrehofEzEpSUGJ08tx%2B2pHeUErkEDb77zCgq56%2FBjqkAbZpshlUrTJmjl6NdhLHxhNVfzmyMKuUF8LMiBbjr003tC%2BbCv8GORe6oqy6qicuj1FVP9za9qLszO2z9FKrVzZs0McDfU6fqe%2Bzw3vLq0WPgShhXwibUss1QIl%2FTwraFq%2Fn0i494R8ILrlyAZbH4DggqDLEnbTB%2F6L9FhcZdP%2FNLye2sIQvBc0Jx7luTv%2F4xmDhaXvQUf0jwt2IUT6WVQAhXH8a&X-Amz-Signature=31d6b980242f470473cabc25dd3a9848c685d2df0dfec798d52dc4c42bec3778&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG3X64WL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCtEtpsy3S%2BD4dtuZt5hcERc8EsfrOJdPtqG2GOrtLd2QIgSSgEkLzo4cYBRsrEEWDJKXu6abmtPgEXGDWRotSMkuAq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLlaAdttTaF140QHKircA0yJ%2FNZ9WgYxKfi8jeWdTCPe7Nf2OQmjzq8ogj0D40pdnYlyiSHO%2FM6sXUQGVwuSCuS6T8ztNvBI2Kmid2nqBOTDRQOI%2FcQKaqe3lmodF3kJB8UNQm4WS6ing38iE1rPU8AG5E%2BQ0HIX%2F3P4mgS%2Fcosmb4hJ7%2FIWoTZtEYdpFg0yfkKJyjbGg4M1whxuD7uOQUP9zvdGoP61SHk8%2FzsgU8K65s0PaeLycia8NA5RnGqdTnGAS64tw%2FY%2Ff9c3bdTqiBFjUVBoIrssBxFVJhjOztV9yFRm9SdlK%2BvjK2aIvXLZYSGXhSVoM5zRtmQAhwV5nKciz5pbgmu164bHujl3%2BFtkLaoIYXfM5HYci4o4bPRfamTfRJHy%2F0vmljDOKqZ0X2gFYpFSjwcCIAHDvseOyjMh2lrV7dB3RY2mvbu9DMrx12VRRmUmvhbKHqz%2BCVfn1TwNaoQTk%2Fa6lCz7s3N3X726o6knyrwH54KrLuh%2FJYAvALFhYWIZDPg%2BlRNYRJeVzmhWFhv2Lj5WT%2BMsvVylYGfJN6mZ%2FAXZbB7mx%2FXGboBDA%2Fj%2ByN%2FrNVNhNeXGTvIrh%2BYT9k%2Fbyrc4gtUOw2te%2BG7Ah2Yp%2BzZxCmzf0affkGU7fI9DFlgkmHyxqHTuMJqrnr8GOqUBRlEdzfpiA3Xg9Vn1M9QHvNvAaTgQhIq5dH1VwLvqdKSlAdxOiO2zpbxDCsLX0yrHDAqFPTG2tH1jyILYYlz2SM96dyOqnN5rgDQlcLkMi0cuuQkSpCmgs1AJKSsHBGsZEQpJ4aR9vDoH4FjchGnmH0zlfJCpa31tIjX05iAFiYAoMbCFMk4tghWb6bMTaRHTN%2FucAYCxaHB1YGjOwihx4PaSKd2e&X-Amz-Signature=b6ab86ef21360ecd987f58ff5ec4e7a46be56dd17496ccad2f667211d0112ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PPLZMEH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIDoP3VkM5xQVDkI%2BBOBjq0dv5eMcMiFAuz8%2BNwMeKaXUAiBpWRWqL5KOew4xcN7PKIG0%2BMp5m0mUGjUHhSzl6moJPCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjyJC%2FXBkmAE7riWcKtwDhrReKFqe8s%2BnlBFpc9vIi8Qs25EOL3trTMdLkzdP%2Fhn7e8JR%2BQyVTfO%2FEMbqXPvLLcrmrRna%2Fcw5G%2BFk%2B9Ks1lwPWxNJpxeR1fl3ysWClD0YisTb3XFGs9VoucuBujNPNUmk05fMRcXobvCmgxEoFsbt7xHPWaoX%2BSUI0XoIyk2WReX9q%2BmcQilWC%2ByICMSe11QqqdZtQrRSPz68Gf2lVmUYqsxBdTSPS6Q%2BRsACK6TYnqWOlWqvuG33Voq6NJtOZHvBAxNBoaHgeEeO3f9%2F6cHqdcfdEPO1oRHA6en6ldoVRm1qx529McCqPaVULxMKJ3QocwuzC4H5%2Fv2hggJRPpY2yjZ23D8APZTbM%2FbwhrEKmfENN3oweEzuj%2FWRLNj0xS94l%2FEi0HJxLoMuGHshKA3u3li9kYeo%2F88K1b5tWb63ctL1l5mEaIKDkh0mF8vK2TUsB7etoU690oIi5JvIBsUCNt08qyvcHxBDdoV%2BD9CMnMqJgtDY2Ehbz5HeJn0i2otUMg0LKWrjXcLCmCx%2BdRBpWmruL%2FLeD1nTg91KRUBkNhtB2fl65bL8Pck4jfB95fvA0Tba%2B8T6prgdoI6UjvMP3p1AVNk83LKPSbTGBQLe1GuymOa0rTUE4iQwzKqevwY6pgHjZibXf4LcO1SvLBbbvIaNnhHRVJ0Q0EADaz7Ngg%2BLgJhkDR4sVx0e4XmCk96tEvC204Km7R5hIT3hbiA%2BTT9EO4Dgt9PN2COkUMcBY8e5usDpHEnCAaXkw2iK4OmFe4XAM%2Bd3apAv1YdgD30QEglsZDk1PegtXB5sFT6fRphwNDfSy7OF7Amo1qwYst32wma1JHGZP9cd2qDJ6urHqjGlZpfkZuGV&X-Amz-Signature=ea26c2b0addc22ec1af671b923ed1dea0ad2a88d2e521f5592d4f4f051f1d18a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
