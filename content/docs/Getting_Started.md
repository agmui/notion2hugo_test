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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJOBTA2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgZEHavOaYvksfCweEjvWNV5ScpNHpo6794xLQtjMo0AiAKm2zQiM0xeBIOoorSJoWuyB2bktvkacMfHaG0iuJPuSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIZrljJahhwCSh%2BJQKtwDBYD%2FBLTc0ICitPcXKomxeAPoa9bVpEIsdj9N4eJoDs5CE%2Bcj34jt5XbjcTxqxktQqyvxEgCj42uCzhCb%2FR0UDPqF26EsJXkWAiDpL2ATc8Vh%2B1z5XzBIvSYO98F9XRni3qVmzKSb9dtMZ7e9O6NgsxY5%2FslB%2BsYnZZF6j%2FIQnyrersxf57apCVMcL8DXVKq3BPhZElvDQQJxeAPm4HpkcMDWH1LwQmEgO%2F3XInanVva59Qo536U2iMqlhToId2bjTPC4bWhBWQPoPj3BEamuhoZrJod%2BWGhzwzfHuK4%2BkEEAO465zgYT5VZOnYtirCJ0TYigr0%2FsM3LYpNA3uklu7%2Ff%2Fd4%2FQm94RhCYd52YGdvtD9EnGhMbUo2tOUoqb%2Fz%2F%2FMwo%2FKo08uMnjGi3oU%2B2LImr5rM92sdRQgNsKH6tq9q%2BQOlW9lU7lkEpYNSwbXAFxxbXCOdSSZ2T6NfPCdz8jhnTqXH29auM1MCsdI2aijYn6P2OghE1IR9NIp%2Fovmj1B3QDU1jB4lL2ebEVK8W%2Bh%2F4Xf%2BQ50PiCprv5ou7eU1Li1G36YMuibAe%2FNm6QA4aKsZbmMJEPlgtBgtCj9a1VIoS9MomqwaM7tPS4Kn%2BG3QvuMNgsjFGXItuNnCYcwiMuvwQY6pgFRstcUeOe40LP6qlsO%2B2I5CSRZjq5jekPFVcJdxyPd3uY%2Bdx%2B1IiUpAwFuYC9YWHTIt0%2Fqn3UkE6fUB5lkdndmRXjuaDjSqtkIxyuzHHJiAm7UPLxgcl%2FLseX8HhFJ99SoxwQkgwSJhFrflYPIE7nwP4Dfi%2FTqHgDW2nvVQfL3OuXvyGpyhOlEqj6y3nb5CO9w1OYicTQqNLFx4z9oZ1Y7UDQIhYbq&X-Amz-Signature=020c2f53d6a513e1e158553c1704adce6f2d369d974cb66775069e3e6898c5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJOBTA2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgZEHavOaYvksfCweEjvWNV5ScpNHpo6794xLQtjMo0AiAKm2zQiM0xeBIOoorSJoWuyB2bktvkacMfHaG0iuJPuSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIZrljJahhwCSh%2BJQKtwDBYD%2FBLTc0ICitPcXKomxeAPoa9bVpEIsdj9N4eJoDs5CE%2Bcj34jt5XbjcTxqxktQqyvxEgCj42uCzhCb%2FR0UDPqF26EsJXkWAiDpL2ATc8Vh%2B1z5XzBIvSYO98F9XRni3qVmzKSb9dtMZ7e9O6NgsxY5%2FslB%2BsYnZZF6j%2FIQnyrersxf57apCVMcL8DXVKq3BPhZElvDQQJxeAPm4HpkcMDWH1LwQmEgO%2F3XInanVva59Qo536U2iMqlhToId2bjTPC4bWhBWQPoPj3BEamuhoZrJod%2BWGhzwzfHuK4%2BkEEAO465zgYT5VZOnYtirCJ0TYigr0%2FsM3LYpNA3uklu7%2Ff%2Fd4%2FQm94RhCYd52YGdvtD9EnGhMbUo2tOUoqb%2Fz%2F%2FMwo%2FKo08uMnjGi3oU%2B2LImr5rM92sdRQgNsKH6tq9q%2BQOlW9lU7lkEpYNSwbXAFxxbXCOdSSZ2T6NfPCdz8jhnTqXH29auM1MCsdI2aijYn6P2OghE1IR9NIp%2Fovmj1B3QDU1jB4lL2ebEVK8W%2Bh%2F4Xf%2BQ50PiCprv5ou7eU1Li1G36YMuibAe%2FNm6QA4aKsZbmMJEPlgtBgtCj9a1VIoS9MomqwaM7tPS4Kn%2BG3QvuMNgsjFGXItuNnCYcwiMuvwQY6pgFRstcUeOe40LP6qlsO%2B2I5CSRZjq5jekPFVcJdxyPd3uY%2Bdx%2B1IiUpAwFuYC9YWHTIt0%2Fqn3UkE6fUB5lkdndmRXjuaDjSqtkIxyuzHHJiAm7UPLxgcl%2FLseX8HhFJ99SoxwQkgwSJhFrflYPIE7nwP4Dfi%2FTqHgDW2nvVQfL3OuXvyGpyhOlEqj6y3nb5CO9w1OYicTQqNLFx4z9oZ1Y7UDQIhYbq&X-Amz-Signature=89d026f4837d2ec800e390b5bfb20889e453b7028dbd5cdebbc18d21887bc789&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJOBTA2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgZEHavOaYvksfCweEjvWNV5ScpNHpo6794xLQtjMo0AiAKm2zQiM0xeBIOoorSJoWuyB2bktvkacMfHaG0iuJPuSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIZrljJahhwCSh%2BJQKtwDBYD%2FBLTc0ICitPcXKomxeAPoa9bVpEIsdj9N4eJoDs5CE%2Bcj34jt5XbjcTxqxktQqyvxEgCj42uCzhCb%2FR0UDPqF26EsJXkWAiDpL2ATc8Vh%2B1z5XzBIvSYO98F9XRni3qVmzKSb9dtMZ7e9O6NgsxY5%2FslB%2BsYnZZF6j%2FIQnyrersxf57apCVMcL8DXVKq3BPhZElvDQQJxeAPm4HpkcMDWH1LwQmEgO%2F3XInanVva59Qo536U2iMqlhToId2bjTPC4bWhBWQPoPj3BEamuhoZrJod%2BWGhzwzfHuK4%2BkEEAO465zgYT5VZOnYtirCJ0TYigr0%2FsM3LYpNA3uklu7%2Ff%2Fd4%2FQm94RhCYd52YGdvtD9EnGhMbUo2tOUoqb%2Fz%2F%2FMwo%2FKo08uMnjGi3oU%2B2LImr5rM92sdRQgNsKH6tq9q%2BQOlW9lU7lkEpYNSwbXAFxxbXCOdSSZ2T6NfPCdz8jhnTqXH29auM1MCsdI2aijYn6P2OghE1IR9NIp%2Fovmj1B3QDU1jB4lL2ebEVK8W%2Bh%2F4Xf%2BQ50PiCprv5ou7eU1Li1G36YMuibAe%2FNm6QA4aKsZbmMJEPlgtBgtCj9a1VIoS9MomqwaM7tPS4Kn%2BG3QvuMNgsjFGXItuNnCYcwiMuvwQY6pgFRstcUeOe40LP6qlsO%2B2I5CSRZjq5jekPFVcJdxyPd3uY%2Bdx%2B1IiUpAwFuYC9YWHTIt0%2Fqn3UkE6fUB5lkdndmRXjuaDjSqtkIxyuzHHJiAm7UPLxgcl%2FLseX8HhFJ99SoxwQkgwSJhFrflYPIE7nwP4Dfi%2FTqHgDW2nvVQfL3OuXvyGpyhOlEqj6y3nb5CO9w1OYicTQqNLFx4z9oZ1Y7UDQIhYbq&X-Amz-Signature=06bdac0abb5a0e9f8417bdbb866cfa2454c6bd15f251f4efed84b0fc3d203b18&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRWO732R%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDpdC3MtBsxpEooO0AmhJMj3q1S5HkPxYUq9SRBrDv7YAiAsU3FLOY3nmCy5cDTLcR%2BMS7x0Yq7dkGETksn5Y9wISCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPaCDSWC8eufwtd9pKtwDFi2SxHb9mQkQxHIVkHjqkgkD9iwxdtfBGvGYNyYWa8j84h6Zft703Ai3ftftNkiucqVkSb9R6ybNU%2FpyYjzWhBpSLvk%2BMFp3s%2BEVsWMfCDqedqyn9xSsvRN1Y11OjSZqvqZcZLg%2B26r1u3DvjUW2OqfAChnn55pEzhcgFYPz4Kkh3YlhNGGAlA7jkA97Q%2FZ8JTQaWM%2FIViO3xuFNe8sNFxtWgoiK17ZT9mP3RK7x2XPuXm3vJCJp4kSEjyomKRswFEbmrAIp2Cw7%2B3SIHDuFmLHvbIcjC7J9%2FaBIFJgWBN5JEmE28%2F4lJhjIU0naZ6orzPfhjUWgut%2F9wttsVWTIddvb6bVAm9NvKm%2BXxErPy%2BBZq%2BbB1nvfgL4kEXe3AhotYaS28rU0BN3f4OhfZSFmflrd877iLsPw0ptfvpCcUzqAHX6zzNQzHvQJtvKLx0QURuMOyqRhBy9%2FEXXX%2BPjm0X7NK72WKrQYf9xdumyxl1WllHp6CG6RUMCSXnki%2FPJ8eDT6Qx%2B%2Bejqt5kdh6Po2Y3QiJ7uaGUC%2BCD31v4f%2FRtBdkrIo3qYiIvAO75yG6573LNMYZxydZ5w%2BLTNi8o2t%2FRUtF%2FraDXZsbh0AgDW0MpEIynSxfoLHPvDAu9Qw5suvwQY6pgHlucwkU4iHWG9SFK2U8PdGpDAzUf%2Ba%2BZuzpUrAuhvm%2BGXTV4GhhRwc06z5QoAwacCAlt%2BXj8bdElcmf0Ac%2BxxBt3RQWbN2rfRwKrIr3Nbf9bqIQmfGcLvjyRBFWXzLX3iw2WS9q1K%2FkYKd%2FR2ft8rJ5u3E3AhrL7Q6ILgzvviHIbfJDMqH6AKrA2NUebZhw2ZIq1lS1%2BvcVnWBGo%2BCNPbAVqCI%2BJLy&X-Amz-Signature=3fdd8117e11f3c52f9e6d2b1feff144242b63e36e28ee1324487d927b7e8381c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCTN5RS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDir%2BJGAhmztdWrwvBTi6F2Jk49YLQBSUWh1va76YQKaAIgXB4HqsIKUGD7tbExVR7iIBtBCG8%2FiDSh54lokU3Py5wqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDObC3ljxYAVYPlm%2BCSrcA5h6NQ1A2vVpa4EYAy%2FuJyzPFvhrKlmbn6MgNgTnvMb%2BSNMGIrTSb%2FAXjJvk%2FoV1MdJJEB1bDtWZJyuTZrEGJ3FpEtqjSvgjMp3jKM4YpKlOeDpHDyrg7k8hF9FZLY8m1czB8uv85kyGowFN%2Bl4GHVTYl1Nx1JT1lAzP%2B%2FETzOdAlUGzOHLCq00gkcwbabJRCXYixiVrLCanYR1qbAJloGNWerOTklVd%2B4k8k4unkAX0JhNRwEIF3OtoxknFnW1TjJ0R3WYxd2IZINM9q%2FRGy9I7WPmXifRqa1JdSGrV2okoxmhH0MKavfrS0d7QDFij1sFtDUd7Fei8r6sTN5LZvnreS%2BryLX6cdkR0Ee2N1bbJsN8cTvHZtE1vPS8AxviCRXOx6goB3PCD3GF9JBh6oRbXaeL2pQfdNGd6aTS7S%2FaUau%2FsAEZQtltmMLs%2FAYjdlqxEBwr8lrWgNo4LaooUvk5sSP7LsZo7PuILoNfFbfOVA2VaZj%2FQxfEI25pYPNQjZpvvimkqSg3xjVJj1iLkV0qRh3CtMVAwJsV%2F7u6pF30jqWOLesRiaRvsDYw0ilBDirqZFZ1R%2FkDGY3xEIwuYPwM%2FPoywaiH64K5H%2Fv%2Fy%2BrOeBaLdzM1iRr1t7lAtMIHLr8EGOqUB53jI2OHv4%2FmRbaOOVcLDOb20BtuP4XZ93bbc0OaBFGJ%2Fa9k5Z6XZMzDYyw2WgsMzRb7hqmROknwHkHpwfcR1aTe2UsY7YilybVkBBl6By3hdU9hh%2Baf8q3uXPhcZrrKYeLY%2B40dFxX1iUzvXr3ua886H1rFU2uRpYJavCAz3eB1PytyKcDln7jKqmwg01IVo8%2BwfZMwgiQA4qfHK0s7ATolAtbmi&X-Amz-Signature=dc87b5f35ba7901c499db2c5df5e0d05b5f74862444abbc9d3e3f0659fc70cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJOBTA2X%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgZEHavOaYvksfCweEjvWNV5ScpNHpo6794xLQtjMo0AiAKm2zQiM0xeBIOoorSJoWuyB2bktvkacMfHaG0iuJPuSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIZrljJahhwCSh%2BJQKtwDBYD%2FBLTc0ICitPcXKomxeAPoa9bVpEIsdj9N4eJoDs5CE%2Bcj34jt5XbjcTxqxktQqyvxEgCj42uCzhCb%2FR0UDPqF26EsJXkWAiDpL2ATc8Vh%2B1z5XzBIvSYO98F9XRni3qVmzKSb9dtMZ7e9O6NgsxY5%2FslB%2BsYnZZF6j%2FIQnyrersxf57apCVMcL8DXVKq3BPhZElvDQQJxeAPm4HpkcMDWH1LwQmEgO%2F3XInanVva59Qo536U2iMqlhToId2bjTPC4bWhBWQPoPj3BEamuhoZrJod%2BWGhzwzfHuK4%2BkEEAO465zgYT5VZOnYtirCJ0TYigr0%2FsM3LYpNA3uklu7%2Ff%2Fd4%2FQm94RhCYd52YGdvtD9EnGhMbUo2tOUoqb%2Fz%2F%2FMwo%2FKo08uMnjGi3oU%2B2LImr5rM92sdRQgNsKH6tq9q%2BQOlW9lU7lkEpYNSwbXAFxxbXCOdSSZ2T6NfPCdz8jhnTqXH29auM1MCsdI2aijYn6P2OghE1IR9NIp%2Fovmj1B3QDU1jB4lL2ebEVK8W%2Bh%2F4Xf%2BQ50PiCprv5ou7eU1Li1G36YMuibAe%2FNm6QA4aKsZbmMJEPlgtBgtCj9a1VIoS9MomqwaM7tPS4Kn%2BG3QvuMNgsjFGXItuNnCYcwiMuvwQY6pgFRstcUeOe40LP6qlsO%2B2I5CSRZjq5jekPFVcJdxyPd3uY%2Bdx%2B1IiUpAwFuYC9YWHTIt0%2Fqn3UkE6fUB5lkdndmRXjuaDjSqtkIxyuzHHJiAm7UPLxgcl%2FLseX8HhFJ99SoxwQkgwSJhFrflYPIE7nwP4Dfi%2FTqHgDW2nvVQfL3OuXvyGpyhOlEqj6y3nb5CO9w1OYicTQqNLFx4z9oZ1Y7UDQIhYbq&X-Amz-Signature=e5c131e5c210a05cbe0cc520bd88a75d456101f916f75d96fc1790cd13bb73eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
