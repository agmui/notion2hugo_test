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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ2XCBY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrdBLZ%2F0LzCXejY2JFS0cCQe7Psf5cZZFHR47%2BLQghjwIhAMcZh95J77UgrpWR8O25D2LUT77iyo0cT90sgYp1vYviKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya1WmhViI514WAWxwq3APESR6vRAuH4WZcUT0uqlA%2FF1x6wpdbD4%2F1eaOLTq6koAf0B1ehOnjGjz1FD3LOIQUTQG20f3c3ci%2FuuWVgd2cK9rpKedOiYqna5VseLbCLST%2BGkhSlesHYHVoAQtt1av0Uxg0VmFlWw9KfR9rzY0YPZ8Be03AFL2N%2BFDU6%2B1dvNs33NRhc86j1EDPL9jEsSTNkTURwCWYe6RtakJJG2yLiAL48yjVsL5MvjkekHzVh3I4FdDrsXEzWOxG8VU3%2BhuhVeRITFbb06MR389VzLLPTSd0pmtp83NYoBs6j6pDkfI7cUaMH%2Fpw8vDOQSfCvAWsz2%2Fy2vtX9CT8Z6CmpPZdJ0zz0O%2F5Od58Punpbu4jV3YbMkh3dk5rLnD5Zul8caNzdkZJMiSM0nTNSC%2FAhb0RsI3wUtgp29HK6qhavCb1Qq9BCibS%2F7vq8DdNmk9imm7EVZwf%2BINWdDUinyT74avOrqR3gfhVLWb%2F7tXFvQtaeKEU0ZYLpr29QhG7irz26DFVLHVyRbtqE27P31noqLjYBM%2FJZz96GxyZncCKx8rqQePtg%2BWu9e2mvrvpLUWQ6B%2BgXHCmmxYkpKTiReUbO6cKoh0BnRsNPbx6z7kCHpqEidgCddjmkAbLvesAOwTDmsJTCBjqkAbMzBGwKnn5dtVtMX1r6pEBPUY69DPf0%2BSGN09gY6yYfmlynUfbrsAZToJbwp3uIFuh7I17M%2F%2BMhH8qQrQOybMNbKOqpnqJzG8OKvauIOKjM3WqczPH9Ymduv4zvHnSdQfGegIzYKk9ST7YHWEuI6TUjoyCmfvc8RbcejrSMVcSTWoc75W8xnXiSHoTtQn4lpl9RkRNxFUeAVcCDoxt1aCSQNP7h&X-Amz-Signature=823e7e1c4212991b914dfcf05cc7697327fd583788677bc51f023b7103f90869&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ2XCBY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrdBLZ%2F0LzCXejY2JFS0cCQe7Psf5cZZFHR47%2BLQghjwIhAMcZh95J77UgrpWR8O25D2LUT77iyo0cT90sgYp1vYviKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya1WmhViI514WAWxwq3APESR6vRAuH4WZcUT0uqlA%2FF1x6wpdbD4%2F1eaOLTq6koAf0B1ehOnjGjz1FD3LOIQUTQG20f3c3ci%2FuuWVgd2cK9rpKedOiYqna5VseLbCLST%2BGkhSlesHYHVoAQtt1av0Uxg0VmFlWw9KfR9rzY0YPZ8Be03AFL2N%2BFDU6%2B1dvNs33NRhc86j1EDPL9jEsSTNkTURwCWYe6RtakJJG2yLiAL48yjVsL5MvjkekHzVh3I4FdDrsXEzWOxG8VU3%2BhuhVeRITFbb06MR389VzLLPTSd0pmtp83NYoBs6j6pDkfI7cUaMH%2Fpw8vDOQSfCvAWsz2%2Fy2vtX9CT8Z6CmpPZdJ0zz0O%2F5Od58Punpbu4jV3YbMkh3dk5rLnD5Zul8caNzdkZJMiSM0nTNSC%2FAhb0RsI3wUtgp29HK6qhavCb1Qq9BCibS%2F7vq8DdNmk9imm7EVZwf%2BINWdDUinyT74avOrqR3gfhVLWb%2F7tXFvQtaeKEU0ZYLpr29QhG7irz26DFVLHVyRbtqE27P31noqLjYBM%2FJZz96GxyZncCKx8rqQePtg%2BWu9e2mvrvpLUWQ6B%2BgXHCmmxYkpKTiReUbO6cKoh0BnRsNPbx6z7kCHpqEidgCddjmkAbLvesAOwTDmsJTCBjqkAbMzBGwKnn5dtVtMX1r6pEBPUY69DPf0%2BSGN09gY6yYfmlynUfbrsAZToJbwp3uIFuh7I17M%2F%2BMhH8qQrQOybMNbKOqpnqJzG8OKvauIOKjM3WqczPH9Ymduv4zvHnSdQfGegIzYKk9ST7YHWEuI6TUjoyCmfvc8RbcejrSMVcSTWoc75W8xnXiSHoTtQn4lpl9RkRNxFUeAVcCDoxt1aCSQNP7h&X-Amz-Signature=72bd94f2b28cbb50e02091467189dd52546e62ba8c4dac012c29b1c91cfd2021&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ2XCBY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrdBLZ%2F0LzCXejY2JFS0cCQe7Psf5cZZFHR47%2BLQghjwIhAMcZh95J77UgrpWR8O25D2LUT77iyo0cT90sgYp1vYviKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya1WmhViI514WAWxwq3APESR6vRAuH4WZcUT0uqlA%2FF1x6wpdbD4%2F1eaOLTq6koAf0B1ehOnjGjz1FD3LOIQUTQG20f3c3ci%2FuuWVgd2cK9rpKedOiYqna5VseLbCLST%2BGkhSlesHYHVoAQtt1av0Uxg0VmFlWw9KfR9rzY0YPZ8Be03AFL2N%2BFDU6%2B1dvNs33NRhc86j1EDPL9jEsSTNkTURwCWYe6RtakJJG2yLiAL48yjVsL5MvjkekHzVh3I4FdDrsXEzWOxG8VU3%2BhuhVeRITFbb06MR389VzLLPTSd0pmtp83NYoBs6j6pDkfI7cUaMH%2Fpw8vDOQSfCvAWsz2%2Fy2vtX9CT8Z6CmpPZdJ0zz0O%2F5Od58Punpbu4jV3YbMkh3dk5rLnD5Zul8caNzdkZJMiSM0nTNSC%2FAhb0RsI3wUtgp29HK6qhavCb1Qq9BCibS%2F7vq8DdNmk9imm7EVZwf%2BINWdDUinyT74avOrqR3gfhVLWb%2F7tXFvQtaeKEU0ZYLpr29QhG7irz26DFVLHVyRbtqE27P31noqLjYBM%2FJZz96GxyZncCKx8rqQePtg%2BWu9e2mvrvpLUWQ6B%2BgXHCmmxYkpKTiReUbO6cKoh0BnRsNPbx6z7kCHpqEidgCddjmkAbLvesAOwTDmsJTCBjqkAbMzBGwKnn5dtVtMX1r6pEBPUY69DPf0%2BSGN09gY6yYfmlynUfbrsAZToJbwp3uIFuh7I17M%2F%2BMhH8qQrQOybMNbKOqpnqJzG8OKvauIOKjM3WqczPH9Ymduv4zvHnSdQfGegIzYKk9ST7YHWEuI6TUjoyCmfvc8RbcejrSMVcSTWoc75W8xnXiSHoTtQn4lpl9RkRNxFUeAVcCDoxt1aCSQNP7h&X-Amz-Signature=4f3366a2bb2423c9bfe4512ae1123c3a17d91789d64ea3b04adf1e33970e6762&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQBPPUG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCftA2SxwhYq9Ni7exhNv5jMi%2FgcbIeUuSOhdJIARLicAIgEmNaDf%2BB8cZcb3MlmKl%2B%2FR12D872oyvm0hgzP2eOqS0qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfQ1ab%2FtjOvY6xccyrcA1N9ZXtRj%2F%2Ff3TYYtRV7I18JKn%2Ba9dn6VOiULpQ%2FUU%2B1C1vB3mtF8ne0VVsJg54%2BJ33%2FkCRay%2Fyx97ylHd69I2fpa3tuZU5Y%2BclR7SHM2jIh1vG9MmB4Hw3CWqEMCtpWd32bZPF4MWvx6pKvz8%2FNO0KjUu3a8M39ORzfmnI%2F6LLlT6XM8u3C9UUvl3PA8fu%2FSK9CenuzZ1BKf%2FJKIW3BV6GeyOb3LzOdAJhT4rn7h4ckWbADOWYhaAAmsOiIY3Wvllq%2Bh2UA9wLfIH9OZRQI%2BXAcSaVRZlBzIB5zy6ZLMY5CL60r2f%2BMHy7xfMgVxsay%2F0khM5VNQmN8VbfcvbhCBxYUVbSOzxYVSyEz9zfQZwHYvYPefAps5VZr7W2tt6cFe24JwnSJq%2BBlfv2Yz2DkvTN%2BrM0kZYvbguxv%2Bzib5QxHTioHNenl1fy0Kf9T66Dv5xLmq4bnThGswYPKu4PgEVvm8Vu0k15tymFEaeBIesMxjedL8JR1%2FEeH5cjqQtwFJFGVbzsyuDOF0XEkVpGXU1rEmiVcMVp6njpJ5CkFX%2BPSq0KIsuSgOiWYqTXZpLYVVxx3n7gD4KbYGE0xMQ7xJx2v6LOcTeSH2U6MjAJdoBDJ8hbp2ytN8By2K3dWMOuwlMIGOqUBjqttU%2BLpDrvchfCOZsvMDwQ7u41wzHn5dOf164u4K6%2F82owwNlRN5d8Mg5NFh5csRpOD8BviDpH3yM0Dcevnfr0QYexhVOcpm2d2ZyD8avLV3IW8G5P7CHN8ZkYguywXUrZ4pG36MoQLi80UZw%2Frzw1DxHhDNvtfSe%2FK0vsvoYrGTOiNLUrtBp%2FCfg4TGiJhjYCXuagjfqFCCHVydjbej3De98Ye&X-Amz-Signature=a017438cc4f44a304c16c694886c3c01cf8bb47b83306984cdc50b62503c6840&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4VVGCU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA3pKksEfNuCWe1AKcAWyImMVOkhwOBzw0RRh945GhI%2BAiEA2WoLQSMmh12q46MSeL85QJJKvzuuPG5gaZi90eES8tQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5Uw4ppu%2FMGlz8RRyrcA36I3JCuuZtNvvTVXlQ2cMbE25vn08Eve0ft%2FzJ22B1wkEAa4oh2Lx%2FTaIiGLkgECeaNnd8QEMim%2BHWXjSkdUpJXB5Ye3jW0Ea7yiMbLAiD5AGdnIKNxNKgwl0C6%2BZ0Tu0VWne0zU4k2KrBRv%2FdokspdT%2FHAkgKlV5nqAI5j1iT34xb%2BhHVwrtlAYANTwE3WtzQXYqBT1QbWJcNq86Eh1SD0zy35rTl5DJkvcToDqhl65pPomKuzgmOIQRF9SKgSjfylJ%2FFC3Mt4QAJsVjZXRnvnpmWMAtfX23Gbks9o7hOcPoXuxY3SmSIHF0I%2FmgB9uKoKptwb4OBIYjA8IXvwtF1E23SLa7JO%2BI65zDpiX3Zzcn5qnBSy55n1mlcx2qtzcrbS0yGF2LpDp9e1D59xXQft3fkI9dH2AOxooYDj4GDZz4fWYCaG0X37v9efI%2FzGADTzlQznMwT9cBrg1oXcPIhX%2FbXxMtKZvnV0tYMDRQnW67Q3RbKvVoOZJlljHiq2k8bNPPrSglAp3oS4p63M2hUlH%2F1kDeedUnTSY%2B8zet%2Bwrt7JBiZnroyu0X45hwCIfS9MxAknPboEi2xRpru3EA270XlCC3RC%2FsmO42kaBctKB69x48tW%2BI2lIFY%2FMN6ylMIGOqUBq5aaNDNbjzpRXZr13ZMxZcbyarSSwSnl33Bo99rs6RpcZxHj5XfWkknKlvKgR1aMJclfnh9c3VfkvKTjrgD7%2FJ45wsFpjJFHWQ8D3sfH4GoI6dq1q%2BxTBQ4QB56IU%2FTxKdL4nu7M0qw89nR4FaLEXBbEnzLCSXsFRdKwIha3dFZECjJHv5JgWrD0vDU4%2FJjmjLZ47lY51%2B4vlOHmPsVxt9v9rOnJ&X-Amz-Signature=0180ce555c6b19f3874ad7cfc237a9ee19305ae4eb823de0a1f50672227ae600&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ2XCBY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrdBLZ%2F0LzCXejY2JFS0cCQe7Psf5cZZFHR47%2BLQghjwIhAMcZh95J77UgrpWR8O25D2LUT77iyo0cT90sgYp1vYviKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya1WmhViI514WAWxwq3APESR6vRAuH4WZcUT0uqlA%2FF1x6wpdbD4%2F1eaOLTq6koAf0B1ehOnjGjz1FD3LOIQUTQG20f3c3ci%2FuuWVgd2cK9rpKedOiYqna5VseLbCLST%2BGkhSlesHYHVoAQtt1av0Uxg0VmFlWw9KfR9rzY0YPZ8Be03AFL2N%2BFDU6%2B1dvNs33NRhc86j1EDPL9jEsSTNkTURwCWYe6RtakJJG2yLiAL48yjVsL5MvjkekHzVh3I4FdDrsXEzWOxG8VU3%2BhuhVeRITFbb06MR389VzLLPTSd0pmtp83NYoBs6j6pDkfI7cUaMH%2Fpw8vDOQSfCvAWsz2%2Fy2vtX9CT8Z6CmpPZdJ0zz0O%2F5Od58Punpbu4jV3YbMkh3dk5rLnD5Zul8caNzdkZJMiSM0nTNSC%2FAhb0RsI3wUtgp29HK6qhavCb1Qq9BCibS%2F7vq8DdNmk9imm7EVZwf%2BINWdDUinyT74avOrqR3gfhVLWb%2F7tXFvQtaeKEU0ZYLpr29QhG7irz26DFVLHVyRbtqE27P31noqLjYBM%2FJZz96GxyZncCKx8rqQePtg%2BWu9e2mvrvpLUWQ6B%2BgXHCmmxYkpKTiReUbO6cKoh0BnRsNPbx6z7kCHpqEidgCddjmkAbLvesAOwTDmsJTCBjqkAbMzBGwKnn5dtVtMX1r6pEBPUY69DPf0%2BSGN09gY6yYfmlynUfbrsAZToJbwp3uIFuh7I17M%2F%2BMhH8qQrQOybMNbKOqpnqJzG8OKvauIOKjM3WqczPH9Ymduv4zvHnSdQfGegIzYKk9ST7YHWEuI6TUjoyCmfvc8RbcejrSMVcSTWoc75W8xnXiSHoTtQn4lpl9RkRNxFUeAVcCDoxt1aCSQNP7h&X-Amz-Signature=862ef1efa63039451726faf8f074954a9c73636ec4136e7d8adee9f1dafd24a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
