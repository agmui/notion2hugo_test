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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD42AMR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOyGEwuIteH2SOW%2FP2KBuMcN4vs6VUEF6QeNv9mABg%2FgIgIhoocMPb%2BRbKLw0DTvwQzxK40%2FaA9x%2BN4bUViv05pDcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJZx4kPrOkm691PDACrcAwsPT%2FE%2BdJUgVdYZVxRPguiQwar2gBTAdoJw8zdZhNk6VhXXabOcR9IymU6zcSs9cqYYQcfPz48VPgpdfIMJt4FW2B645JaVwxBhrnoqHmkzprH4mWTOdwbSmH8priXBQZrucW5n1aCGbnTT0tTVbfjdGjrUnOPygbRyazoY7s1%2B1T0g6xwrSf21mYTxEbwCwELr8zqGNf%2Fj2phLOeNnPpfUYdnih%2FVEpR1cBruv9wtfseFMLr9iVgQeKHnEESilX%2FI7KT3eImaLUmAv6bAHVkztDIOwCia6NRDJkflcnOUKn3sTH70yCQCW5v3F%2F8zp4U4QE%2FgmTDlIpnCk09cx3lfHfk8hpjRJv6KuFh4hZusLi%2BWJuG8oFN2KHG%2BBPJcmnb5lkujcZ6WkjcXCl2IA6RcvObHaM7yz4JI6VkbBZJQCvKGquIXPJFSjzailoAsJd3I0GsNafL3f%2BLne9eeG1mQhsrWLFxDUJq1p50m%2BbjmclcmsLcqbWlgIjUkjBESryOPH1C8PDhoD8D8KRpFMvXqJUa45gP41bElR6KPEYbR5rexW2mtBgfDWVjwaZrFRcPus%2Fs%2ByVtLIlTPcP8f0BoK0FBcj0Axg2Zpg4jSYfb0s1OSVYv9PUa1R5bh%2BMK%2B6zr8GOqUBMEBHp6X%2Bf5tGabsBg%2BB4TOxTjLSom1y8leU2akOzoOutLTpfo28iyGuJKWEi7b5geP7quNhje%2BUZy%2FjleQnVyAMQV7PGrEZZMf%2BELVMACss7J9D%2FKlxFOAyx4Zq5%2FKHVDEiw3MVOUO5oaJz44KWT8WFmFZLrW99LeJn%2Fz2ocfXHHPSPAvAJrZkNpCtnzQQRtk1HQrDi1b0sXQlrwSimXnzD5Is3s&X-Amz-Signature=a826afdafd4e6544eec840ce1fe40c5cd9ba0acec60684cb2532a671c1eaec8d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD42AMR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOyGEwuIteH2SOW%2FP2KBuMcN4vs6VUEF6QeNv9mABg%2FgIgIhoocMPb%2BRbKLw0DTvwQzxK40%2FaA9x%2BN4bUViv05pDcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJZx4kPrOkm691PDACrcAwsPT%2FE%2BdJUgVdYZVxRPguiQwar2gBTAdoJw8zdZhNk6VhXXabOcR9IymU6zcSs9cqYYQcfPz48VPgpdfIMJt4FW2B645JaVwxBhrnoqHmkzprH4mWTOdwbSmH8priXBQZrucW5n1aCGbnTT0tTVbfjdGjrUnOPygbRyazoY7s1%2B1T0g6xwrSf21mYTxEbwCwELr8zqGNf%2Fj2phLOeNnPpfUYdnih%2FVEpR1cBruv9wtfseFMLr9iVgQeKHnEESilX%2FI7KT3eImaLUmAv6bAHVkztDIOwCia6NRDJkflcnOUKn3sTH70yCQCW5v3F%2F8zp4U4QE%2FgmTDlIpnCk09cx3lfHfk8hpjRJv6KuFh4hZusLi%2BWJuG8oFN2KHG%2BBPJcmnb5lkujcZ6WkjcXCl2IA6RcvObHaM7yz4JI6VkbBZJQCvKGquIXPJFSjzailoAsJd3I0GsNafL3f%2BLne9eeG1mQhsrWLFxDUJq1p50m%2BbjmclcmsLcqbWlgIjUkjBESryOPH1C8PDhoD8D8KRpFMvXqJUa45gP41bElR6KPEYbR5rexW2mtBgfDWVjwaZrFRcPus%2Fs%2ByVtLIlTPcP8f0BoK0FBcj0Axg2Zpg4jSYfb0s1OSVYv9PUa1R5bh%2BMK%2B6zr8GOqUBMEBHp6X%2Bf5tGabsBg%2BB4TOxTjLSom1y8leU2akOzoOutLTpfo28iyGuJKWEi7b5geP7quNhje%2BUZy%2FjleQnVyAMQV7PGrEZZMf%2BELVMACss7J9D%2FKlxFOAyx4Zq5%2FKHVDEiw3MVOUO5oaJz44KWT8WFmFZLrW99LeJn%2Fz2ocfXHHPSPAvAJrZkNpCtnzQQRtk1HQrDi1b0sXQlrwSimXnzD5Is3s&X-Amz-Signature=579233b15f9ce1091114f9da6680657618d8b9043eb835d5a30c436bd5d974aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677YV4V3Y%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUuFOnPqQ16OWxhehc8o2PeW4zbA7CAaPZY4RqeRwINAiBjaIzMZmGVvpn8eJh0irSz8oByDoEOB914gxHmiRvVhir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMF%2B6Z12fB026VuTLSKtwD5SLx13gZWkhJedFgNp%2FrfmyygfZFpom4dmoHPQSTvthu1FoDVENNgfoxMkAsqlRS6UcASertHRwTyKcjb2VhXgc8AYe7lP8XhyYx%2BCLl7MVZbPgjoq3bDBjbWNc7IPEcn%2FWkVqacm81OCb1JrSU0Qe2mXeON6KiPNWa%2F4JcQwpwfwyC4XRnTAOSkHTXAiem5SGYm7TgiID0BQYYxKanZrNpJMbREiIN5VVlcFRvdKA6hNAbuHQnA5XAtrYOEyQy0otzOwyh2PA0hp0FcjQjAOoV1cyoY7J10D4%2FtXMXL6dJcplgBTvpQiamK69f%2FtghlFfH9eUUYGDdoip4ZyJojBLHFe%2F4k%2Bzfv%2Fj2lcWFUx9h89T3RFIzmA7YyPfTu4WkoDfgWaZQL5YW18Zo4CdCD0%2BK84fDYN%2FFEVsCPFeh8T0jYuGdEAot8bLPtbayxYVvP97fsMsf7uzo8Sc%2FRGJXwVFiCvMD9lLav3WdI2Jcc42ps9eYQQfNdNeeBeq10gXSceWGCVS0xgV%2Fgphuk6ClrefGuu68TpTf95yYS9gkOsR5Vh7Qy6zqkGm0aUsMzOHPqHFXhOg2s2sEJggyz2GCbVaoDVuDDMOlxkWwX%2BhHN%2BtICsGF4HGvkYLo9MRQwrrrOvwY6pgEg%2FuF1n9m%2BldUB74CBZNDQqXRQXGnXYbT4s5vJV3jus6I2oZ7E0%2B7KaBjC1E%2B%2BqHSvzdFU%2BsQRdWUw3pO3c0xfKYMVEcajPLSY4AC62w%2FG%2FcPoW3BfSMWXalbyEaVV%2Fekp9Zw3fNXBH66m422WFTclFbeqTSkwjT6wXuTh9vwM%2FBeZKcM5zbWQSwOo%2F87zL3fdNUyKErq7inveFMeFFae6uxDE2h1Z&X-Amz-Signature=150bd737c434e6f93f859ec9f0851cce038119aa9bec6b02ad5d2f52b53d2fba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGKYSZE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfcfHXGgY0xSNoHnWazaPG9Kj3BJJH03KJ%2F30Ew5dDqQIhALTRZSavMvrlqYeFjgozlgpROrQNalXtDiHI5Maa%2FMS5Kv8DCFsQABoMNjM3NDIzMTgzODA1IgxlZRjuoK%2FCIKgDqF4q3AMHtLbdjkWQE2Ow4HjxY0KbbznkQkSc5HCc6lxXwmXWxpm%2FgRMBvCIKaECmiWgPvHJz%2FOC4Hd9rCf5bs0oCyeiovh8iBIeJgMU0UvMHAhHixBx3cSDYGgRJf4V1%2BjixzSq2dBKP8T4PuYx6RWBawPaABXe83afztbFGCp6rBU4C10%2B7f9GZN5CI5vaLUSdEVUnLs95GHk9dnXn6i%2FkVEwtlBywYOZaQLAnscoGphKFBXey%2F6T1jovohDzQ9laYPqosTUTyv06zZhYoof93PDpAzq7WnkfDFOFTWcNjkHgsG0Bwq3ypiwZC3VthQ9GF8LB9ALDl7MGJbC4uSv4N04P1RlWReYXdqwudRZwNpR8nOr2CYL5W90Ve5DEYjoZDrzAqCc%2Bwzn1TDDTVTTWbrwuxzbMBvreJAU%2FPQXl6V0S1QX%2F7qJK5pHti28KPAVXDwCExOww7AD5bjFI95H0oORgGhKJg3DWhpSPzCVfeS9kc097vPkI6PGGi6jdq96uFpXg5pVym0noP8ErhTFZZElrT83MW7kiT%2F8QByygm4pagM4LTRfh%2F3ii1Ae4rx%2FFJ0G40abcQoOG%2FvZr1YcX3BSyEv8Zv49GFsl%2FmTFn58btrRN2qjoihN6A%2BryliDhzDAus6%2FBjqkASNms89dqKBqUfqPwMplzK%2B0Wlg59udss0mpa%2F73%2FMK%2B7heXHhXpN1VESYcI4M6iB5hthJjhZfrOfTJBgfkgQPgLrOpTCiRozvV8FejI9vvtOkTkE6cuhEZHpGU7iOM0i7zGXStrEPuLesHQGvgJdd3mCeE62NI03ermwE8qbYIDkGCsy5QA7U79q9pn9e5Aso9PlzeKdVvssj%2FoQM3G6XyHHYwr&X-Amz-Signature=c129c4df56fd23853903d03dd258601abba097f1a8dc244acbccadbd5d6bf882&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD42AMR%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOyGEwuIteH2SOW%2FP2KBuMcN4vs6VUEF6QeNv9mABg%2FgIgIhoocMPb%2BRbKLw0DTvwQzxK40%2FaA9x%2BN4bUViv05pDcq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJZx4kPrOkm691PDACrcAwsPT%2FE%2BdJUgVdYZVxRPguiQwar2gBTAdoJw8zdZhNk6VhXXabOcR9IymU6zcSs9cqYYQcfPz48VPgpdfIMJt4FW2B645JaVwxBhrnoqHmkzprH4mWTOdwbSmH8priXBQZrucW5n1aCGbnTT0tTVbfjdGjrUnOPygbRyazoY7s1%2B1T0g6xwrSf21mYTxEbwCwELr8zqGNf%2Fj2phLOeNnPpfUYdnih%2FVEpR1cBruv9wtfseFMLr9iVgQeKHnEESilX%2FI7KT3eImaLUmAv6bAHVkztDIOwCia6NRDJkflcnOUKn3sTH70yCQCW5v3F%2F8zp4U4QE%2FgmTDlIpnCk09cx3lfHfk8hpjRJv6KuFh4hZusLi%2BWJuG8oFN2KHG%2BBPJcmnb5lkujcZ6WkjcXCl2IA6RcvObHaM7yz4JI6VkbBZJQCvKGquIXPJFSjzailoAsJd3I0GsNafL3f%2BLne9eeG1mQhsrWLFxDUJq1p50m%2BbjmclcmsLcqbWlgIjUkjBESryOPH1C8PDhoD8D8KRpFMvXqJUa45gP41bElR6KPEYbR5rexW2mtBgfDWVjwaZrFRcPus%2Fs%2ByVtLIlTPcP8f0BoK0FBcj0Axg2Zpg4jSYfb0s1OSVYv9PUa1R5bh%2BMK%2B6zr8GOqUBMEBHp6X%2Bf5tGabsBg%2BB4TOxTjLSom1y8leU2akOzoOutLTpfo28iyGuJKWEi7b5geP7quNhje%2BUZy%2FjleQnVyAMQV7PGrEZZMf%2BELVMACss7J9D%2FKlxFOAyx4Zq5%2FKHVDEiw3MVOUO5oaJz44KWT8WFmFZLrW99LeJn%2Fz2ocfXHHPSPAvAJrZkNpCtnzQQRtk1HQrDi1b0sXQlrwSimXnzD5Is3s&X-Amz-Signature=1d7c26c0a73bfcd8b535454ea675b90ddeec4f5f2da3b72be7418d7d47370ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
