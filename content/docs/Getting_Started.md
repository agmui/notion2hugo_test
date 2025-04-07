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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGBIWTH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqoJdq6oMugGjo9SNhcFrx2ALGCxWiX3nemTLVbAM5XQIgNGKJmxkrnqQwWx4KSg7I2ETIT9PedH%2BlxF%2F12aH1kDYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNn7R7JO4zLZPyZldSrcAwTLg%2BDlsIc7mjV0s8%2FvDmK1KvA5FMk7Zi0uT72eLhgJ1E2H7s8R35vdf0uttEZNDzfi72nz4JNBcub12q2TEMYL9tawEgcrLkFYh%2FlNJaDoVJF4tE1LHlpIpa0LA%2BUUiSadI71gG%2Bfq51RKZW2P2t9166NBShM9w%2BwsaJTkPRX2to67w%2FplBZTSvSmlNJxzf8fj0fMtmoEfUiNUwlIzfmdemxpJ1UoSm56Yw3t1iZ%2F7YOpbnW9k0IqVlWJgSI0nMxj2FlODU%2BKqzPjKyVni5QT0nIIvX2CgFoLQHCI%2BtO9CYYkZNl%2BRW84m0KIkZqNWrI4OKVQVyKTGp2quqdo3CSqnoNCDc9ODO67m6e62CN5D6q9Yd73%2FMdbpPNO1EsflHloZyYImEGyAgtQz7nU5l8Djpq9Rp%2Bqf6MCK4SkbVjce6CpSX%2B0nDy6ZLDmOkNqG13ZqvbpQNjQqEIshREUEBicD1dU523GeMc2ZI1Vx6Y2v3%2B42ONOFXPyWtRlfrJ38D7FEK8nIftcu3fykPLDfdlfjUQcrjPlHD2S6wCxbacpCjW7TqmyGdm5jTcITj4d56iu9LDHvzOkqUcX0ieNTnZbG42788k%2B6lczA30KH6FP7FyO5s%2BYkY6pbsi6PMMCI0L8GOqUBwrryGRPFhK1NRSkBQhV5tUbDDfToutYjVHL3FWzkwT5i8GJKo4J7UwJIsms1k%2FsSCNoj%2BLRNm9GESAc5SJnu%2F4HfWnMsPO%2FiOAmnvGv8w2%2Fmox8Uk4ozcz9NbffCUFQyLXq%2BiRK1QVVEM1nPwbAAVmjrRu0VwAGxR9pqlX7YOz27CccG1KlIoHMKabpUU%2BdZGLtjkJGMRK3JIebyK06vBumpUZBX&X-Amz-Signature=23d63553eb852cacc05b108c4c97c01aaebf95c1836956b01113e12d50be4504&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGBIWTH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqoJdq6oMugGjo9SNhcFrx2ALGCxWiX3nemTLVbAM5XQIgNGKJmxkrnqQwWx4KSg7I2ETIT9PedH%2BlxF%2F12aH1kDYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNn7R7JO4zLZPyZldSrcAwTLg%2BDlsIc7mjV0s8%2FvDmK1KvA5FMk7Zi0uT72eLhgJ1E2H7s8R35vdf0uttEZNDzfi72nz4JNBcub12q2TEMYL9tawEgcrLkFYh%2FlNJaDoVJF4tE1LHlpIpa0LA%2BUUiSadI71gG%2Bfq51RKZW2P2t9166NBShM9w%2BwsaJTkPRX2to67w%2FplBZTSvSmlNJxzf8fj0fMtmoEfUiNUwlIzfmdemxpJ1UoSm56Yw3t1iZ%2F7YOpbnW9k0IqVlWJgSI0nMxj2FlODU%2BKqzPjKyVni5QT0nIIvX2CgFoLQHCI%2BtO9CYYkZNl%2BRW84m0KIkZqNWrI4OKVQVyKTGp2quqdo3CSqnoNCDc9ODO67m6e62CN5D6q9Yd73%2FMdbpPNO1EsflHloZyYImEGyAgtQz7nU5l8Djpq9Rp%2Bqf6MCK4SkbVjce6CpSX%2B0nDy6ZLDmOkNqG13ZqvbpQNjQqEIshREUEBicD1dU523GeMc2ZI1Vx6Y2v3%2B42ONOFXPyWtRlfrJ38D7FEK8nIftcu3fykPLDfdlfjUQcrjPlHD2S6wCxbacpCjW7TqmyGdm5jTcITj4d56iu9LDHvzOkqUcX0ieNTnZbG42788k%2B6lczA30KH6FP7FyO5s%2BYkY6pbsi6PMMCI0L8GOqUBwrryGRPFhK1NRSkBQhV5tUbDDfToutYjVHL3FWzkwT5i8GJKo4J7UwJIsms1k%2FsSCNoj%2BLRNm9GESAc5SJnu%2F4HfWnMsPO%2FiOAmnvGv8w2%2Fmox8Uk4ozcz9NbffCUFQyLXq%2BiRK1QVVEM1nPwbAAVmjrRu0VwAGxR9pqlX7YOz27CccG1KlIoHMKabpUU%2BdZGLtjkJGMRK3JIebyK06vBumpUZBX&X-Amz-Signature=68ffef408e222bdbede3b7996fa54838a33c5b523548c474c7a20037361e5acc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOL4B52%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG74ouKOpsp9S4QlVcf%2FJIl799rDFgTCAsQbQ%2FT3C6M4AiBsDHb6iRN5apDnnGjAtyPykHLOmzt%2FX4D6xgmTDmmDuir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMc4dmKR1%2FcT4Z9B1BKtwDXf7DB1EWp2XVkgrUi52RR1ftbMxBF0ozcnddzjEK3ockAXkRd1cBSipAmd2ubB1trhcgkbIgpursTtq06Q2cfse4BYSCzVoJAyB0kKerrGtqU69ehn3WElvhySq%2BsFfygpKqxvtf1nw%2Ff7zXW2R75GT3zshjT1sZAJymjCjJCY%2BQYq3ICpDt3b6D1fovDHyiuN34dQG%2Fl4j4FeL9Vcmn4FczdZlxYybWKaxmc5r7GMtdkn1vrz5oSWXQIVuvsZIJzmrc8XvabvPavioHOJ8QOvmEMY3ZNut8VQ36hI2NwwoS92CoepXXsT0aSX%2B4tZ3Rr%2Fl3RdJCdkySBIUlObmWKvIWUzuxsi0oq9MsxTAeldby6zGDs%2BFVLhbjcA1Uv1BzQf65Ev8cky1Sz2deepd4CjAEDGMvENn%2BcR4lLsgWBPtyJKtxGj3ktI70JScRjQ4mgoTVLqq%2F4g3gHg6ax8vacLcDEPqwhV2nsDvQTG%2FIgNyOhGErl6S71B2HlYzVU9dnN9p0g4IT1ayjtWSAVUpq7xLspWmXemODkAtg77JIX6tlbG%2BHBdpTXOd6RtcvJaSu4C5HWwRi2oNqCqIN%2BgbPwvPwiJMA7ISiiKPkzFxI9w%2BxOajwq9p2f%2F1QNxwwiInQvwY6pgFnUqQ2%2FC6QrtcDd1RFzob%2BEbG%2Fg5y5lMFpcSJIT6SbkAzPTFBAdrKZ2yZ9RBuUNsv4%2FZOe6g5X0SclRtS3sS0J3xOPy4GxrhNy6OoxjGMoRJqZNMSS21Nwex70C8%2FqCqoK4bFmef6vWHUjlR1jjXoQuUXFlkh3%2FqLeAFMTJOPDauUvLjl82uac%2FJcMBu83jSMRtnZuOvvD08aKJbuSPnJAycx1bNZM&X-Amz-Signature=842bb21c5d711ba90a3fd7d39eb039ae367094e40d690073df38a259844b7556&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDTW3YE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDctRX8JBJWhp9Nhp3zG6RE%2FM62XAvrX89UPpYWz%2Ba3AiEA865YfXc9cbudEnwNX7P6sIHCkkMO1%2Bktd2uWpglajIoq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHyFa5o62aJC%2F0AdGyrcA4Mcm4AxT5tZLmiOKCrBBARNIterSHMKCTHkxdENf6qDe2ODyMebi%2BCm7bcgjMAMlNVq2gtNvpMwYGNKQv5rp6N%2BB4gElUhHe%2FffUZxr%2BkZlNXr1GiC9swC16CTgZu3SmVNVPcw6YtQOHh%2Fv%2BnD1ni4rg%2FZv2rukW%2FTmE03byfUmrgQ69bMT78tFX%2ByDpn2aIZ17f%2F3bRyEbSgKI8asug5m5gktycCdlkkBuVzZH25SyxeK0UwnSkaN7RH0MPu9pEBFOETOg2vA9%2BLk%2BCjCYY4cGkWsxtqokqpN%2BOe%2FeIUatrshb8j6RkzpOrSgd4q40cdwM41uaEmBupSD9F%2Fb9kC6%2F7NoN6j7sHqftP4MhcSTGU8DOLfp65zXYGD5eAF51HdJJukL8ckyZMZTQ6Z9qI7a6S2JMgQZxRWQKg6ZDy3NMFJtTR5ViXTxOaHs2swYHDfskOnJ1EUgB2Hk2VOF%2FFkk7FNZKZjIscTqQTpv%2Bssf9QB28VBVa5pt7NUXfpiYWFdMXBTo%2Fx9w0Tbi0I8VWX8hjcjH3cK04bW06vaug%2BwzbMZo21o1CjVmPSUYGNuf27s8tGMQUf47IIWm8wDavt5I8zsxvTvobMUZcE83pT2MAdh9rau4XL4VbMt%2BaMLyI0L8GOqUBM7EzNxwPDj8erpVePCcUchUBogX4izmYmGUDLhmFmtle00vlD1q%2FAIDM08H42bw%2FGR%2BV6PtPZf42UgpGIxarbylG9w5wlF800nRss1Xo4cLl%2F%2FQ8pJ32zrjQ%2Ftc61ChkayNb0LuQTr4OhIRoORagieZjRMsRkA734w9MkUNtUYngjI2mVNSQZm6SZ0Imdb8iHLqRLIy0aHMSx%2FkZALySlLwF80sE&X-Amz-Signature=4142c9647c1142b6a45ed0258c1585c948246fab754d58d55da7447c2defc5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MGBIWTH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqoJdq6oMugGjo9SNhcFrx2ALGCxWiX3nemTLVbAM5XQIgNGKJmxkrnqQwWx4KSg7I2ETIT9PedH%2BlxF%2F12aH1kDYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNn7R7JO4zLZPyZldSrcAwTLg%2BDlsIc7mjV0s8%2FvDmK1KvA5FMk7Zi0uT72eLhgJ1E2H7s8R35vdf0uttEZNDzfi72nz4JNBcub12q2TEMYL9tawEgcrLkFYh%2FlNJaDoVJF4tE1LHlpIpa0LA%2BUUiSadI71gG%2Bfq51RKZW2P2t9166NBShM9w%2BwsaJTkPRX2to67w%2FplBZTSvSmlNJxzf8fj0fMtmoEfUiNUwlIzfmdemxpJ1UoSm56Yw3t1iZ%2F7YOpbnW9k0IqVlWJgSI0nMxj2FlODU%2BKqzPjKyVni5QT0nIIvX2CgFoLQHCI%2BtO9CYYkZNl%2BRW84m0KIkZqNWrI4OKVQVyKTGp2quqdo3CSqnoNCDc9ODO67m6e62CN5D6q9Yd73%2FMdbpPNO1EsflHloZyYImEGyAgtQz7nU5l8Djpq9Rp%2Bqf6MCK4SkbVjce6CpSX%2B0nDy6ZLDmOkNqG13ZqvbpQNjQqEIshREUEBicD1dU523GeMc2ZI1Vx6Y2v3%2B42ONOFXPyWtRlfrJ38D7FEK8nIftcu3fykPLDfdlfjUQcrjPlHD2S6wCxbacpCjW7TqmyGdm5jTcITj4d56iu9LDHvzOkqUcX0ieNTnZbG42788k%2B6lczA30KH6FP7FyO5s%2BYkY6pbsi6PMMCI0L8GOqUBwrryGRPFhK1NRSkBQhV5tUbDDfToutYjVHL3FWzkwT5i8GJKo4J7UwJIsms1k%2FsSCNoj%2BLRNm9GESAc5SJnu%2F4HfWnMsPO%2FiOAmnvGv8w2%2Fmox8Uk4ozcz9NbffCUFQyLXq%2BiRK1QVVEM1nPwbAAVmjrRu0VwAGxR9pqlX7YOz27CccG1KlIoHMKabpUU%2BdZGLtjkJGMRK3JIebyK06vBumpUZBX&X-Amz-Signature=364c60f4696aa50070d333e560d9dcb0ae3a4e555a2f462b16fd0dce4ba9c613&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
