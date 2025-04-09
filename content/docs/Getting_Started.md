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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP57AK4S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxfWXU5Clv9i8GeFFP3nDnl8k1eoZjPNAgzU%2B90A1wEAiEAkm4%2Fj%2B0nN9Kv0FB364yrkFdaqXkxR2Hu3dKqAvs32yoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnWG2Kn4P%2BUrP2wmCrcA2VdfMdCEGGO2sJ6ZwaBMuwytsEklRVC8o3XRPx%2BqMQVBDG8RxTcepC59sfv7I8%2FZ1YKUxradWSl2jiGbd1VTd6%2FpDIWTt549%2Fl55qcdR7r%2BKojNLc3AVXq0z7q0w7zbpKclbmFW5CWwp%2FwGDbG89Cez8TmJYLhO1dzpL5%2B95ayHJkGhUEqN6WUEamcjEfX5Xuce6ZA9LVkeArR2NTRUKc%2B3e9zUoY947fIFY5Vjjl06rmmfmi3sb3ECwwyS8C66WXLPgQYrf7mGiQXRdWFT28rzPNtgkLf1Aeyyv0%2FZihUJvpMrMzL6FRiGZ4lD7dxkTlFPX9QDFQNRzLrvMK77AS3jw9r7N8mFebeJwBiNLB77VZK3zA1K4IYt%2Fl56aWNlUdeKUr5SNSYbzpprLp0KIaTMUUccNx9oGAEeO%2BQcyNaR7MwUtVT0pOCF7HbDRlJ3QpXqP8exrSYfe%2F9LM6PCoinXKMZlhPBZkS0K6nItIkTSJiMrIWXck4UZjWJ7v08vSnksp%2FKgwPUA95GrA6bu3aAB5HJ8MtBjudJXN4GRahaYoVG10%2BLbSCXoFPBth6BQgoSLXCQmoNqYFHJXdxgMpf8Jqfp3LuK5MTkAxfzQl9pDyubIjPTXsYuGcMUVML7W178GOqUBlSNVqeeH67TLwE1CTpLDAlyhqoTXGF3eJumeU38JLb4o2qS2g%2BbdjnMngKfyEAPkNRsP%2B0rNKGFNvKBR2EulV1odLosY1iQ9diQ%2Bvycx5%2FNTVei5WqJXVb5FN0aAc7yBzynV1syoyypvrRF%2FRvb%2B2WUdLyuHW%2FF6aA0ElU%2BzPSeiY8Mw7b2A%2Fu0lMM%2FYZ%2Fdand7snEDNLZSnBZk%2FbUumWzXMVoN9&X-Amz-Signature=378ad983ebb1c667bbbed50b9b27faefb3ce3294fbaf15b2006371f243650392&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP57AK4S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxfWXU5Clv9i8GeFFP3nDnl8k1eoZjPNAgzU%2B90A1wEAiEAkm4%2Fj%2B0nN9Kv0FB364yrkFdaqXkxR2Hu3dKqAvs32yoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnWG2Kn4P%2BUrP2wmCrcA2VdfMdCEGGO2sJ6ZwaBMuwytsEklRVC8o3XRPx%2BqMQVBDG8RxTcepC59sfv7I8%2FZ1YKUxradWSl2jiGbd1VTd6%2FpDIWTt549%2Fl55qcdR7r%2BKojNLc3AVXq0z7q0w7zbpKclbmFW5CWwp%2FwGDbG89Cez8TmJYLhO1dzpL5%2B95ayHJkGhUEqN6WUEamcjEfX5Xuce6ZA9LVkeArR2NTRUKc%2B3e9zUoY947fIFY5Vjjl06rmmfmi3sb3ECwwyS8C66WXLPgQYrf7mGiQXRdWFT28rzPNtgkLf1Aeyyv0%2FZihUJvpMrMzL6FRiGZ4lD7dxkTlFPX9QDFQNRzLrvMK77AS3jw9r7N8mFebeJwBiNLB77VZK3zA1K4IYt%2Fl56aWNlUdeKUr5SNSYbzpprLp0KIaTMUUccNx9oGAEeO%2BQcyNaR7MwUtVT0pOCF7HbDRlJ3QpXqP8exrSYfe%2F9LM6PCoinXKMZlhPBZkS0K6nItIkTSJiMrIWXck4UZjWJ7v08vSnksp%2FKgwPUA95GrA6bu3aAB5HJ8MtBjudJXN4GRahaYoVG10%2BLbSCXoFPBth6BQgoSLXCQmoNqYFHJXdxgMpf8Jqfp3LuK5MTkAxfzQl9pDyubIjPTXsYuGcMUVML7W178GOqUBlSNVqeeH67TLwE1CTpLDAlyhqoTXGF3eJumeU38JLb4o2qS2g%2BbdjnMngKfyEAPkNRsP%2B0rNKGFNvKBR2EulV1odLosY1iQ9diQ%2Bvycx5%2FNTVei5WqJXVb5FN0aAc7yBzynV1syoyypvrRF%2FRvb%2B2WUdLyuHW%2FF6aA0ElU%2BzPSeiY8Mw7b2A%2Fu0lMM%2FYZ%2Fdand7snEDNLZSnBZk%2FbUumWzXMVoN9&X-Amz-Signature=ffde68916ddbe72f71b21d818e68e15641cb90e21eee463a04377c50eca294f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCDPIP56%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFRZwZcTUtIQ2P915tvcmHPGVl%2F9cBt2Rg6T2GKxzi%2BKAiEAv3dSDIUMrqzzJRHq7G2ZKq4Dp9Yiiaryk1lMhJzlhawqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEn4qb%2BHyVNd85kICrcA%2FqmAPd7ZnmEIHwutbxwDWYXfqbFndzJm%2BacRzXYLGVWqhotL%2Fo%2F1lzWwG%2FiVIJ2UlbufSMrg4lDNMzRfEZNTdeA9q3E%2Bbl70ePmca14Cqb0DMi9TxXDRMOh%2BE77P7sLWqaPFRxAnoalCNYNsOCWBpcmX3XVU3LBqd6OdxtPlcNk6SH%2FScvxrTMyhZlsaem%2FLFdnNhWXXjCvX7M6IMB1Ka8nqLHjbMe008Et8RrxQkfMtR5qimLFK5t7S9wO2qPyM1gOdMv5sF4EfnVc6NMtZWsV1UpuTFpFn88Iktik093AU8%2BmT9oTArsQHjw6Zo%2BtQHSxv4g62dJImIeABB%2Bja7byHEpVYFj6waUuIs7XraVZj8Jm4Y4xLPB60DbqLiGpyFAXyxPbfzZlEV7mVl4YADRJgzWyBks6jkGrRbSAoOEtczbm9UY%2BHdem%2Bt%2FwNwWUr%2Boc17qQKYJYGg9rJvIKGN%2BMZH5bmjF1R3sB9TO0H64VpZNeRCDoqtg4ZcL9YEi98GlV6Qxo6zzD%2BLVRfCp56Ofwd83XmnJYcUE6kRRxYTa1BmhoPlaagUZaMmtle8%2F8T7M%2B%2B%2BR1o90ihJgUAb363ByNiUq6UvrcLxidZ9pB7tQlzXNdGLGhBS8LknaIMMPW178GOqUB6%2F8ynQKPTAXIQW%2BW2IwwGdYv3Pc%2Bralhu0n%2B0f90NPInVll3c4rcHxg6rjxDiXFp%2BKWpkmCAUslaCanpS0D4sbAvTXHp5Ymfl6B2afEshEsuaGXW3BR7AofPRG5SB5Z8zIcenJzSOcY56Ef14LqizdyOpC5bCgu42Yeuap0c6Nz4789KHMH2paQMFj05dxLCxJP3uPP5DfJLMIQOBk7LB9jGlGN3&X-Amz-Signature=9e41e40d50eefae152ce0acfca1e31ad55ba59955b6dbd13d4f486d8f7fb6bd7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZKONPFA%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDMetxpBCMspkNKQnc%2BLWVEXyjZYmRk12KsFm%2F69mZfQwIhAJY0ozU2WntXWsthFib%2FLLjGg4jDO20FkwvvRRBKs1PfKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEPpj3Wvxbrhk3k1Iq3ANtx1XI80%2BSqtJ6GvUmRAnd%2FxVPbQ0zmy3qaEwaR%2FQdQdbSlAQYjd9vUMwk9IeSNCOHIih78gK2WBGKl784iBfZb1WYdbwSRCcICdPUfGLACIR2ysoirJmQUQ3eVnu1Olrr2h%2Fl9TaQisZeagoEWa35BY7%2FYZqQO%2BR7hngGl6nJ%2FVq1gYKtX6Uc3LYnkJbV54jFj%2FcOOkU01%2FE3j%2ByZWjLRQSWEj3kmrBZcbHAMIsgH2F92rvoJaQQH15vhbDRK3Ls9QBmXMxiKHZwDSMfr4zQSghyrohjIDQYB41Lj2dox4m67SrZWjibr%2Bt8QXU1GLqKMwbaHHm1O%2BilpB1CpHSW%2FkFGKcCyqENqimiFI1gn3VX7MRuHED6mYxavXOG7Tra7hlhl02KWNrxF1xNeMx%2Fhhyg4uLHlYlNJRo9iJ94bdTAfNIT2KVYSgTRign%2BohzCaFkjU1%2BJJ%2BddmwM%2FU6BG6gdUUd3ifbG1yChZXX9dMVvFdcTW35JHVw4EJa8m5dXISLEa3wK%2BsUvPVvF4UlX7Gl54V90KngO9y%2BGuDzc3F7ztWUZ1vpNaQ4bVkjxfywA3QofEHS8kRiXS%2Bz3do8CUyWZYF3td2nKpok2fJPQ18gCYd6ZJS1M6o1tG6iaDD61te%2FBjqkAdX6BWtuZfO%2B%2Bg1Aks75VaI9%2FNkIWMylx8wvzVP51DhaWAs8B1aORZspsFYByrJlvnhs9VhAmc3RSKp%2BmKPvA%2BiT0W4MN72pQznNEfPYYPRi6EziMLLVp1ePqk1T7BzMeps2w1w8DOvjCDdK%2BoCwxRhIebS6Zy00UvkNxbX1OpkBrsni%2BoMTDET7CQimuiFdO2u9f6%2Fk5E2Y1TC0tfQa0zqghYUE&X-Amz-Signature=759c7d54cf86d852d74a50252d0fae9c9b4177c141d1d8f9ce07679195e82358&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP57AK4S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxfWXU5Clv9i8GeFFP3nDnl8k1eoZjPNAgzU%2B90A1wEAiEAkm4%2Fj%2B0nN9Kv0FB364yrkFdaqXkxR2Hu3dKqAvs32yoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnWG2Kn4P%2BUrP2wmCrcA2VdfMdCEGGO2sJ6ZwaBMuwytsEklRVC8o3XRPx%2BqMQVBDG8RxTcepC59sfv7I8%2FZ1YKUxradWSl2jiGbd1VTd6%2FpDIWTt549%2Fl55qcdR7r%2BKojNLc3AVXq0z7q0w7zbpKclbmFW5CWwp%2FwGDbG89Cez8TmJYLhO1dzpL5%2B95ayHJkGhUEqN6WUEamcjEfX5Xuce6ZA9LVkeArR2NTRUKc%2B3e9zUoY947fIFY5Vjjl06rmmfmi3sb3ECwwyS8C66WXLPgQYrf7mGiQXRdWFT28rzPNtgkLf1Aeyyv0%2FZihUJvpMrMzL6FRiGZ4lD7dxkTlFPX9QDFQNRzLrvMK77AS3jw9r7N8mFebeJwBiNLB77VZK3zA1K4IYt%2Fl56aWNlUdeKUr5SNSYbzpprLp0KIaTMUUccNx9oGAEeO%2BQcyNaR7MwUtVT0pOCF7HbDRlJ3QpXqP8exrSYfe%2F9LM6PCoinXKMZlhPBZkS0K6nItIkTSJiMrIWXck4UZjWJ7v08vSnksp%2FKgwPUA95GrA6bu3aAB5HJ8MtBjudJXN4GRahaYoVG10%2BLbSCXoFPBth6BQgoSLXCQmoNqYFHJXdxgMpf8Jqfp3LuK5MTkAxfzQl9pDyubIjPTXsYuGcMUVML7W178GOqUBlSNVqeeH67TLwE1CTpLDAlyhqoTXGF3eJumeU38JLb4o2qS2g%2BbdjnMngKfyEAPkNRsP%2B0rNKGFNvKBR2EulV1odLosY1iQ9diQ%2Bvycx5%2FNTVei5WqJXVb5FN0aAc7yBzynV1syoyypvrRF%2FRvb%2B2WUdLyuHW%2FF6aA0ElU%2BzPSeiY8Mw7b2A%2Fu0lMM%2FYZ%2Fdand7snEDNLZSnBZk%2FbUumWzXMVoN9&X-Amz-Signature=1e69040918bcffbaf2c45bee73b3b2f817707b67383835914252a0391e761a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
