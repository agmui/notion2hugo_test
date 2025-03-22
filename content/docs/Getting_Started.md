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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5WYSZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCeBEzMyuyOX%2BCjbM57bLZxfQf60grt1%2FkHn5QeGZO2BQIgTn6BUgB%2Fz5ObQNGZFBRQWeYKf7N%2FWzTQEvf70S0PrNsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwNaJtR7oaNcifugCrcA5ETTCrmgfx5OfY5aHEyBOUOXA5HhMiiDP%2FEzJ%2BEbrwlFLnsYL%2Bi%2BQ0eQp9ppHiPO5bAlFhEMyG%2FOt6Wkz72yu25AiS0R5djklUuCPVw9BC8tSeNMz905wWlKLJPNxTRNiDIstGRD4P5%2B77iqNHDBzCJqbgMmAcNtmO%2BLDd4iXpm6jiT0iKztcjl5LWGrDE75b27SigFfGIXRHd7SC5Q72ljh%2B0sLZEz2iZewXEUAvjju5CwtSgLiP4OF3uRmg4BAFQ8ZsZ5paiVGz8Pd6VaS3%2BhlFXVZzYJK0iQaLxAvBzOk2GFP5WhcJBaQaSvChP3S1ED7RUJRWOLid7SeNWg61uMNl2rthw9fHkzt9FK7FSSnHq0ZankXOApPUVaYVi7WgKlkvmulkQhOTr0hlrELf3WDgu%2F%2F7IuUIcfXNT7pvWEf9dTrBK57oMGibLMSuRf0nsVeUeHz3H6BtSF%2B4sdE0T8iftdo5xgAuemnnNUQYEHuyc%2BF8n4FWOe9718AaYMfxirki2R3Oh1%2BK5NHu7KKVTQzkdL1MLolk6td%2FVC%2F6584OoTZP56kdvgpVI%2FHHkNjXFLZmRExvB%2Bp81xR9%2BvaYEMvJ3yAfD5N7TMYlYGsr9moaL%2FaS%2Bh%2FxGIzVDPMJDo%2BL4GOqUB5TIdJJ1uiA1ZRsUs6Gdu87Gt5x5dL%2FqUwQKPMY2XwY2pP4Ho7Rr4ZjX7Dd5NRHLS7OTmawutL6uM1lZX7FyvnhpDdtuV%2Fdo9%2FXpxfK7FiliZlZrvhdDUn4yxQ%2F982XWHvNzyLJKFw2MR%2BQuYMri8cNzCANrZY6K4LaME6vQvJwmZckVi6Sh36YG6kXaDVDYbmu2kFR2rrPoZOKs%2BK8Kh%2FV9ZfpDT&X-Amz-Signature=85632a36591fd6200aab381ea4b610cef4b3d8ccf8b7fdbd6276d6b91f45ed80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5WYSZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCeBEzMyuyOX%2BCjbM57bLZxfQf60grt1%2FkHn5QeGZO2BQIgTn6BUgB%2Fz5ObQNGZFBRQWeYKf7N%2FWzTQEvf70S0PrNsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwNaJtR7oaNcifugCrcA5ETTCrmgfx5OfY5aHEyBOUOXA5HhMiiDP%2FEzJ%2BEbrwlFLnsYL%2Bi%2BQ0eQp9ppHiPO5bAlFhEMyG%2FOt6Wkz72yu25AiS0R5djklUuCPVw9BC8tSeNMz905wWlKLJPNxTRNiDIstGRD4P5%2B77iqNHDBzCJqbgMmAcNtmO%2BLDd4iXpm6jiT0iKztcjl5LWGrDE75b27SigFfGIXRHd7SC5Q72ljh%2B0sLZEz2iZewXEUAvjju5CwtSgLiP4OF3uRmg4BAFQ8ZsZ5paiVGz8Pd6VaS3%2BhlFXVZzYJK0iQaLxAvBzOk2GFP5WhcJBaQaSvChP3S1ED7RUJRWOLid7SeNWg61uMNl2rthw9fHkzt9FK7FSSnHq0ZankXOApPUVaYVi7WgKlkvmulkQhOTr0hlrELf3WDgu%2F%2F7IuUIcfXNT7pvWEf9dTrBK57oMGibLMSuRf0nsVeUeHz3H6BtSF%2B4sdE0T8iftdo5xgAuemnnNUQYEHuyc%2BF8n4FWOe9718AaYMfxirki2R3Oh1%2BK5NHu7KKVTQzkdL1MLolk6td%2FVC%2F6584OoTZP56kdvgpVI%2FHHkNjXFLZmRExvB%2Bp81xR9%2BvaYEMvJ3yAfD5N7TMYlYGsr9moaL%2FaS%2Bh%2FxGIzVDPMJDo%2BL4GOqUB5TIdJJ1uiA1ZRsUs6Gdu87Gt5x5dL%2FqUwQKPMY2XwY2pP4Ho7Rr4ZjX7Dd5NRHLS7OTmawutL6uM1lZX7FyvnhpDdtuV%2Fdo9%2FXpxfK7FiliZlZrvhdDUn4yxQ%2F982XWHvNzyLJKFw2MR%2BQuYMri8cNzCANrZY6K4LaME6vQvJwmZckVi6Sh36YG6kXaDVDYbmu2kFR2rrPoZOKs%2BK8Kh%2FV9ZfpDT&X-Amz-Signature=c1ef8bb650316d037fd38e2f1633c4e5d1adb2aa38fa052a4dc859db8d12fda5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQNI2YQV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIFTumgyPjaWnVFmYZQVVgGyxakI9L6R7aKfgaPeSrSbkAiBjhbg6N8jydZZrc%2Bt1UfxSGJdLA0dDSPZ16%2F%2FAuoUnLyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FTVo3zX6kFsPorfHKtwDcn1y0c1L%2FxEFX%2FIcGGnn46VwNLO3Gc1UOGJ%2B8PUGs5mjDhC5u60bjvqG8nyF8v0VUiVDECtbII6%2BvbT2GltbKppuG%2BlCcC70vgz8b9Obwc0MrOiVxEso2byNCn0WZPZm0gg%2F0yPD06q116Mz1m9eTCUYdmvYV%2Bm47U8hzvqmwLvPb8FrxEoqUe9kHAbhDgufvDsOoER9LCMK4EuWd9GYX0H5e%2B7O%2F1BxD2HmN1%2BsCKAa09h2lX%2F6x2%2B6%2FdMZgkJuvTNzvT92w7iSvNcwNMHcw3GlfUUbtkkka6ttVsYbCsNIUNXNO%2Brzn9HtaWjZyvQvz%2BcAkK1iYqOZBvD90ErOJWMN3LqCuHtlc6OXrmg%2FWl%2B4pZkDG0YbQNAP4VG2%2FBdhH%2BfTH31iA1sLKpiCBi46n%2BUEM17ptRrrtPfhgM%2BrlEjlV6uXVSIFFizYN5%2Bpza6P0i1qSmVaIwZe4P%2FMfJ3Cj%2FaBbL5VeaR4XA3HPW496GtKlZ8XPjmpFMLaGwYcPxF%2FSmbGITpTGMzn6%2FIbBZYGOEj1gUYYp2Fq%2FarSIxPt7dEPpCU9ENVwm9MMrXy3Tg8DD4lnr0N7XOxXSJh3IZEQOM7r9caKZfzI5MIZ6XYjv0L3d3jVoQgwwpbFbWMwh%2Bj4vgY6pgFWbfaL7%2F5rBh91xw%2FaDc6%2BJcdg8ndQM9oAKhhAdujIH9CL%2Fh616R3iD76j5JShtgOPuIx8DObXFqfA2zsRXp2CYUjmaIkfQAFSDD11nZAFOlyHsUTRD4NIP4NCsW9z%2Flk79lpsfx7xkWP4ZzYDo48a0Bh8HehJrRZZRVTtCJ%2FQAohsGmt%2Bww35LwedTR7kzMnbv3MivGQLAsNExJSDIDR1tKKQk%2BzN&X-Amz-Signature=f0c36e0640ac4d5b1b9a2fb1728e54d09c2b41ff79dad760881e53a36f4e8ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5H335E7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIF%2F6Q0vz6wLanzNgo6XW1oVCB%2B54KK9Me0SezkDtKwBJAiAYBeW4sBwkEwRjSI4x64G%2FUvc%2BcG3SmwCzpPzGNBC%2FxyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsViBti2%2Fx81Um5rlKtwDZxuo4pkSkkncSLIOibjycT686OGsnFsbFH3fPru%2BJ1q%2BENAHJbh1y8l2xlgwPAXSybqioFmqHE6q%2BHL8HvTbJPDfRFQIbFGjqxft%2Bc%2FU9GN05t268ekBk%2F1sPKc6%2FTdlpatUtCC9HBvTsv1RbwXjdEw9HF9HuFxtVRi0%2F0Fa4MctTfwFGTmRuCaHYfHICkq8ZJeWUoE6Ab6bZJC5CvL8ZCEJU%2FY2qMZj84X1z49deRjOUqBIoA6pMnEDssYPMNG3ngij7kr83DDyghHO0iY1I5XqRZZLj71QDqQH1fPPnWpHYmDfbyiTezt1Gm%2F9lH0%2FopXpiNr8DFUlrinb9yDNWR85snft6ALRwIIs9NpRPy8VxoUxbnJKyqxm%2FCRSMNiQFq7DDqNDeB1Zmmcbo5PtYTvAU1%2F5u5ZwW8WQa2niVfOPx6cN2L0Jk7haQGV97gVtNcs4SsfAxKn5KD98cutIC2OKMhuCpuiTGToRaNxbcUOkUZCH1LL4KHI7haZLwIcmKLTBifA6ugApSD0lCAvnX%2FZb9WbO2T7sZ7Oj9BYi%2BiDG5UbLYy9K%2BcfA9O6SsFCoGm6iykVXjaE3yJhJBTRkBZ1FA8saIau6h%2FgHz7YOBfDbLtBcKowXaS%2BRm0ww7%2Bf4vgY6pgHlf%2Fn%2FJKKGfcvd3IL9ViTXTJZIlT5Z4YE6CBZxMla3%2FPPn3MfTSYHy2EA0GGgY3jedKn526ILFcyCjiaREW1yRNlgQCw0IaSGtXIjnoU2Szsj04B8VFoYw09o9B3nPKJQdbDCsOifNZl2hTEgA7Lu7548eHAw6kn3FCcxrj2YV8BvICgyq3MTt2nwFQPnZTmWbCsGKwiaFW7Rs9k1MtW0Tuk2mo6UN&X-Amz-Signature=a110aa2c58823f701396ca64a8465107423e8471b301199ddcfbb3c699ea6171&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFG5WYSZ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T040922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQCeBEzMyuyOX%2BCjbM57bLZxfQf60grt1%2FkHn5QeGZO2BQIgTn6BUgB%2Fz5ObQNGZFBRQWeYKf7N%2FWzTQEvf70S0PrNsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwNaJtR7oaNcifugCrcA5ETTCrmgfx5OfY5aHEyBOUOXA5HhMiiDP%2FEzJ%2BEbrwlFLnsYL%2Bi%2BQ0eQp9ppHiPO5bAlFhEMyG%2FOt6Wkz72yu25AiS0R5djklUuCPVw9BC8tSeNMz905wWlKLJPNxTRNiDIstGRD4P5%2B77iqNHDBzCJqbgMmAcNtmO%2BLDd4iXpm6jiT0iKztcjl5LWGrDE75b27SigFfGIXRHd7SC5Q72ljh%2B0sLZEz2iZewXEUAvjju5CwtSgLiP4OF3uRmg4BAFQ8ZsZ5paiVGz8Pd6VaS3%2BhlFXVZzYJK0iQaLxAvBzOk2GFP5WhcJBaQaSvChP3S1ED7RUJRWOLid7SeNWg61uMNl2rthw9fHkzt9FK7FSSnHq0ZankXOApPUVaYVi7WgKlkvmulkQhOTr0hlrELf3WDgu%2F%2F7IuUIcfXNT7pvWEf9dTrBK57oMGibLMSuRf0nsVeUeHz3H6BtSF%2B4sdE0T8iftdo5xgAuemnnNUQYEHuyc%2BF8n4FWOe9718AaYMfxirki2R3Oh1%2BK5NHu7KKVTQzkdL1MLolk6td%2FVC%2F6584OoTZP56kdvgpVI%2FHHkNjXFLZmRExvB%2Bp81xR9%2BvaYEMvJ3yAfD5N7TMYlYGsr9moaL%2FaS%2Bh%2FxGIzVDPMJDo%2BL4GOqUB5TIdJJ1uiA1ZRsUs6Gdu87Gt5x5dL%2FqUwQKPMY2XwY2pP4Ho7Rr4ZjX7Dd5NRHLS7OTmawutL6uM1lZX7FyvnhpDdtuV%2Fdo9%2FXpxfK7FiliZlZrvhdDUn4yxQ%2F982XWHvNzyLJKFw2MR%2BQuYMri8cNzCANrZY6K4LaME6vQvJwmZckVi6Sh36YG6kXaDVDYbmu2kFR2rrPoZOKs%2BK8Kh%2FV9ZfpDT&X-Amz-Signature=06dfb8c02b22e4e299054642f68d938592438206415a4aa06099fb0f2783c258&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
