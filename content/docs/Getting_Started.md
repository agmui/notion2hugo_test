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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZBQ5TB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3VD2w3H9%2F6dao%2BUFgHuh1YvarpMHGRw6J5M9dHYCYaAiBOdYpfr8%2FOchO3XjE43TMyehNeTv%2FkkeViPAKW5o8jgSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyLzd74qtV1KFYEEKtwDPcnQvHMx3HBXHWTU%2Bzs4TTi6DvgBdOJWGNJeLVxLWDJhAhHb2QgxNUf3CTwN1E0EFJbd2XBVlQ5aXprH7LVLUdO2kA3MM3Yfxs9EUabHCEl%2BcyXhwuSGtLYN8bcxttWtdV%2B%2B2DRzzA9wkQ2lVdr93Ejpry5G%2FhGJlzsihHUTSOYa7bOSULAiiSiMQK9HeakK4nSi48yrl22rZ0nsW4d3IkfeoU9otUrsH8rpsRxnQ9I%2F8AAizuh4G8QD8WLSn%2FRBYeSTzXveqr6PzWYnm3flbtDDQCe8%2BqCGoURADjaOyrWAG0P%2BAa6GM5fsEYvs%2F6dcWGLWU2BzPH2ZrPzE3FdS99XJscGZQrMr91ix5pXvEGmOt%2Fu48FoHGj8m6%2FPr7wsveoE8Gnkck4QQGXUo317do2witFKsokvCP9vW69rHZ0BO4aYtaue%2Fyzr49OO70ZR%2F4BmOEKQe6JhBrTG4w3qHx%2B18Sg8msWmxen%2BGukYVaXVAfCF6pRTtvlFozBuM3YEvVuAYfSVOwpvoMDEbFAbgGA1YMqU4SkY6Va5fCCB%2FGu4zZMgrfJVtLO%2Bk4cBUyYMyqrEDnDPCpzYQC%2FhoERasI19VmjS2eaPhkKhzJsmLyzB%2BT1yTwqyfApqgbdsw1az3wAY6pgHMhMIxaVdUHEC%2B9p84S0%2B0Pjvo04AO7NHHirFb1BUlDdz%2BJTLzgnzackFHC3sbsHXDqUV1N0dnjxDDa68xVYIEOT0rOO%2FDr0ImV7sUeiAuGqk5rcAjYhWzfUIWiPx6o05LCgnRBHaTX0EbVHzu0EAIaCFxXxZ7LlHRLA5odAk0JCWuhmNOYz6rehK%2FzuV1d7xD2KRNwjSHyzmeOSP4ngiHnbSeAB9l&X-Amz-Signature=3688f29aac1ddc16181564f002187e084bc1844b8051b2b421f447212fe3467a&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZBQ5TB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3VD2w3H9%2F6dao%2BUFgHuh1YvarpMHGRw6J5M9dHYCYaAiBOdYpfr8%2FOchO3XjE43TMyehNeTv%2FkkeViPAKW5o8jgSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyLzd74qtV1KFYEEKtwDPcnQvHMx3HBXHWTU%2Bzs4TTi6DvgBdOJWGNJeLVxLWDJhAhHb2QgxNUf3CTwN1E0EFJbd2XBVlQ5aXprH7LVLUdO2kA3MM3Yfxs9EUabHCEl%2BcyXhwuSGtLYN8bcxttWtdV%2B%2B2DRzzA9wkQ2lVdr93Ejpry5G%2FhGJlzsihHUTSOYa7bOSULAiiSiMQK9HeakK4nSi48yrl22rZ0nsW4d3IkfeoU9otUrsH8rpsRxnQ9I%2F8AAizuh4G8QD8WLSn%2FRBYeSTzXveqr6PzWYnm3flbtDDQCe8%2BqCGoURADjaOyrWAG0P%2BAa6GM5fsEYvs%2F6dcWGLWU2BzPH2ZrPzE3FdS99XJscGZQrMr91ix5pXvEGmOt%2Fu48FoHGj8m6%2FPr7wsveoE8Gnkck4QQGXUo317do2witFKsokvCP9vW69rHZ0BO4aYtaue%2Fyzr49OO70ZR%2F4BmOEKQe6JhBrTG4w3qHx%2B18Sg8msWmxen%2BGukYVaXVAfCF6pRTtvlFozBuM3YEvVuAYfSVOwpvoMDEbFAbgGA1YMqU4SkY6Va5fCCB%2FGu4zZMgrfJVtLO%2Bk4cBUyYMyqrEDnDPCpzYQC%2FhoERasI19VmjS2eaPhkKhzJsmLyzB%2BT1yTwqyfApqgbdsw1az3wAY6pgHMhMIxaVdUHEC%2B9p84S0%2B0Pjvo04AO7NHHirFb1BUlDdz%2BJTLzgnzackFHC3sbsHXDqUV1N0dnjxDDa68xVYIEOT0rOO%2FDr0ImV7sUeiAuGqk5rcAjYhWzfUIWiPx6o05LCgnRBHaTX0EbVHzu0EAIaCFxXxZ7LlHRLA5odAk0JCWuhmNOYz6rehK%2FzuV1d7xD2KRNwjSHyzmeOSP4ngiHnbSeAB9l&X-Amz-Signature=0a621ff3977d0c40a296ec804008efe6facfdf1abe5ca943669fdaaa5e7f826b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZBQ5TB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3VD2w3H9%2F6dao%2BUFgHuh1YvarpMHGRw6J5M9dHYCYaAiBOdYpfr8%2FOchO3XjE43TMyehNeTv%2FkkeViPAKW5o8jgSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyLzd74qtV1KFYEEKtwDPcnQvHMx3HBXHWTU%2Bzs4TTi6DvgBdOJWGNJeLVxLWDJhAhHb2QgxNUf3CTwN1E0EFJbd2XBVlQ5aXprH7LVLUdO2kA3MM3Yfxs9EUabHCEl%2BcyXhwuSGtLYN8bcxttWtdV%2B%2B2DRzzA9wkQ2lVdr93Ejpry5G%2FhGJlzsihHUTSOYa7bOSULAiiSiMQK9HeakK4nSi48yrl22rZ0nsW4d3IkfeoU9otUrsH8rpsRxnQ9I%2F8AAizuh4G8QD8WLSn%2FRBYeSTzXveqr6PzWYnm3flbtDDQCe8%2BqCGoURADjaOyrWAG0P%2BAa6GM5fsEYvs%2F6dcWGLWU2BzPH2ZrPzE3FdS99XJscGZQrMr91ix5pXvEGmOt%2Fu48FoHGj8m6%2FPr7wsveoE8Gnkck4QQGXUo317do2witFKsokvCP9vW69rHZ0BO4aYtaue%2Fyzr49OO70ZR%2F4BmOEKQe6JhBrTG4w3qHx%2B18Sg8msWmxen%2BGukYVaXVAfCF6pRTtvlFozBuM3YEvVuAYfSVOwpvoMDEbFAbgGA1YMqU4SkY6Va5fCCB%2FGu4zZMgrfJVtLO%2Bk4cBUyYMyqrEDnDPCpzYQC%2FhoERasI19VmjS2eaPhkKhzJsmLyzB%2BT1yTwqyfApqgbdsw1az3wAY6pgHMhMIxaVdUHEC%2B9p84S0%2B0Pjvo04AO7NHHirFb1BUlDdz%2BJTLzgnzackFHC3sbsHXDqUV1N0dnjxDDa68xVYIEOT0rOO%2FDr0ImV7sUeiAuGqk5rcAjYhWzfUIWiPx6o05LCgnRBHaTX0EbVHzu0EAIaCFxXxZ7LlHRLA5odAk0JCWuhmNOYz6rehK%2FzuV1d7xD2KRNwjSHyzmeOSP4ngiHnbSeAB9l&X-Amz-Signature=243e2f93fed57f633c7690146ec5f7046ae55e017d80350a8f8ca377793500ac&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RL4NVIA%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBv4BJ%2F9jkcnoiZD%2FToj9%2FKn7AlUP3j0NAFt%2BIvYa8agIgaAXDdSh6Ydgt7ORtGd4yFcYnsRcy7GJZ5gCdeGv6lOYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9GZSicpqjG1BbyOircAzr3uKZzOWqCVDCdbUDAIvWGIUh5dF51fB8UMSbPRd%2Fg8qgaoN83hU%2FAdJD4c69WJb88xmYEAt0kJ6i5WyYFaqmA%2FdsOxtnXYWD4huTudqbJ58wJhutxn5foRYa%2BnkSlDMnVlOvx%2BM8VYz8rimZTPBlU7cNVi4LcKtL0M9P3gtk9r42ku6Wk3hfvk1LcfGyGgqo%2FXB%2FBU%2F8Ln5LtYkXSuNeu%2Fit2X3lEO4FEHuN6S438B67G9v86ujlXxthpkYqzobBt440NRbHnTuHZRN16Ly9b19%2BF6dO2hz20QWXbxSCQIKWMbphppKKrQ3WUasftn8pIFHi1utbfo8zUaPAgtHLlcuDACRw96oysx4aONTWtzBMZMk67PWEhQev%2F%2FQvpuTi54F0a407oKP89%2F6MNoGm2KtXiPzBe83CLPj390Lks8wrZpQenTRWiTA9CL0%2Feadic2T1D2mmDs28FSeFnFrSJa8lK5OSqs4E6On4EZQ7Sj1KrNsGiupHOC0huLQoPa54unyj%2Bwv6xwMrb37dojOOEeqGe8j5KHEFY0AUtngHzSASjfKpfRD%2Fnjza9fpgTwIj%2FNBbct8QBXgenZIMh7jEcJFMdZC3oPPv%2FB%2FccOeHiuJmRinvJi1M6tMJPMLet98AGOqUBf9%2FPGRKpjOZhm2yZpIS3wxzsvWFv7w8QEQCfBVoOz%2BoSZlhuj8t4OCiwFJqcRC%2BwxAvhi%2Fsk9g21szEG6zfNNR4CDm0gj7N1%2FKnY9KstV50p1CwD7zke%2F7VlBoZ8bLwhGxBMWOB6xq6HV2dULXSz5t00Q4zoDLNPL2vPG6NvQGeIeNydIjTWEdQM5c%2B9BjbjDB%2BYLlniT4Pi7zyi85B3baVigX4B&X-Amz-Signature=21d5202fef4184377238a975296d52f32038395853cfeabc0cd9569599d66725&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R463FEIX%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6DV6bPUsdx5Au8rQSN1Bi83UHPJBnLfXahhVaxD8vJgIhAM9%2Fe3i%2FncBpisrcH251kOKDX92GBdoQ5xeFSN2QwCyLKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7k7dQvohAypQJHqMq3AOSHgogugWgcZuXUbFCcgL9WJxPnbQp8sH0XTLNMRUFa5aV%2FqUEk0ouBTweTBkMP3Y9PxfBK8Teof%2FpH7eDqEavIJ4TEvByk0JMrFFgiuZb6Uzygy7s52lepcAqthVaMKkp7tX48dxHmfOzLqflWHwRP5wO8Jb1SlvMle9gJyWx97Wd5FRUAgivYkeobfqq4uVELKOY%2BKox560JEkwVPzkDqWF1ABGwH8rQwzqz5hXE4z0jeYIBwyE7uKPW%2FawrNt3USHFUgJwBTrjbirRCVsG1%2Fx89N1Cj50iyKIhEQgXuTsFx8FIRHP7Q2CbuUPifS8KqKMc3QyzvGG38Frj0t56WkQpSdPLK6zQ%2BDF69Nmxm8YOSsLySX%2Fh7Z5ITHQ4oNLx%2BKw4CAt7RWsjhFhtniLVkbac7ggqrzXScldwgpy7NRip7sh35b0sd%2FEcRXET2vt%2BTbVqA89e5U7em8XrdBBMeGj5v9AfyB8WlCZ04YftNh9UocaV95QHe%2BKk8%2BfeNZyc1j6wBYs0YRctTGhPpPlSya7pSZs42e%2F150ZeHDbIdvLQNprPl0PmLvxob0SybocPbaMomQAcgwpokVldEyMHvENqYLW0TBi68cp7H11fYXABs9y4NfWnnJqcKtDCVrPfABjqkAfr6Xnhab7%2BCz6jQdKCv%2BzWBAwo7YUshFNcgdjODdgGBvaKeFi7JMUti24XywjMjOu6Sh%2B%2FP%2FGAJG21kPih8v1%2BUGietH9Qjapfzgpzba4X0tQdCW3cyCwV5Hw912urRzoz9vXpnz5cn6nHonZaLIEBDK84gq885h03QskFifgFTbHXcZNx2rxCHC1HUHE1nAW%2F9Tm489qv3TpmpD1hcjskyVvdi&X-Amz-Signature=5282d76e09674b5ff7b5c57c25db582f08e6dfdd44d9bf03266d916f05004303&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZBQ5TB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3VD2w3H9%2F6dao%2BUFgHuh1YvarpMHGRw6J5M9dHYCYaAiBOdYpfr8%2FOchO3XjE43TMyehNeTv%2FkkeViPAKW5o8jgSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuyLzd74qtV1KFYEEKtwDPcnQvHMx3HBXHWTU%2Bzs4TTi6DvgBdOJWGNJeLVxLWDJhAhHb2QgxNUf3CTwN1E0EFJbd2XBVlQ5aXprH7LVLUdO2kA3MM3Yfxs9EUabHCEl%2BcyXhwuSGtLYN8bcxttWtdV%2B%2B2DRzzA9wkQ2lVdr93Ejpry5G%2FhGJlzsihHUTSOYa7bOSULAiiSiMQK9HeakK4nSi48yrl22rZ0nsW4d3IkfeoU9otUrsH8rpsRxnQ9I%2F8AAizuh4G8QD8WLSn%2FRBYeSTzXveqr6PzWYnm3flbtDDQCe8%2BqCGoURADjaOyrWAG0P%2BAa6GM5fsEYvs%2F6dcWGLWU2BzPH2ZrPzE3FdS99XJscGZQrMr91ix5pXvEGmOt%2Fu48FoHGj8m6%2FPr7wsveoE8Gnkck4QQGXUo317do2witFKsokvCP9vW69rHZ0BO4aYtaue%2Fyzr49OO70ZR%2F4BmOEKQe6JhBrTG4w3qHx%2B18Sg8msWmxen%2BGukYVaXVAfCF6pRTtvlFozBuM3YEvVuAYfSVOwpvoMDEbFAbgGA1YMqU4SkY6Va5fCCB%2FGu4zZMgrfJVtLO%2Bk4cBUyYMyqrEDnDPCpzYQC%2FhoERasI19VmjS2eaPhkKhzJsmLyzB%2BT1yTwqyfApqgbdsw1az3wAY6pgHMhMIxaVdUHEC%2B9p84S0%2B0Pjvo04AO7NHHirFb1BUlDdz%2BJTLzgnzackFHC3sbsHXDqUV1N0dnjxDDa68xVYIEOT0rOO%2FDr0ImV7sUeiAuGqk5rcAjYhWzfUIWiPx6o05LCgnRBHaTX0EbVHzu0EAIaCFxXxZ7LlHRLA5odAk0JCWuhmNOYz6rehK%2FzuV1d7xD2KRNwjSHyzmeOSP4ngiHnbSeAB9l&X-Amz-Signature=3ab89ebdf19e389113ba0ff9606fb72e90d738f4ad52771b558d74afae5d5f03&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
