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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZBL3SQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrq4fYv%2BlSknkmfZlEFdwhscpfRYUHAiFY6MxXDU%2BgWQIhAL9eFzIW4yWsEj3u5mTlA0wmXyEsJ2UyJopXBxegyjtyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6QK3ORK%2FiODEcCdwq3AOT1wdQDOkQybFzFnSZYRLRzGSGfa392J3p3KZJLPXl3YHj2tmcxtBXapbNruJB7mVc02%2FzMNaTvCqZSz%2FPF3e7%2BHi7Y3zfDW7NvuPoR3F7Y2z%2Bhgix8WanuOjH%2Fp2Zn33dHtvHureToq4033khaiyQq%2FdQowJd5Oz92DYPIclQBQ9m24z51OSgINqnqVVHoLAmangIujxAM94IfPnEhEaUHBot80PdHnageUzO%2FpMmNI%2FhsfI2X%2B6SGWko%2B%2FAZIII8TrvfXaO3MWL7q39XLP48FXQp61JjQL5cuvQLSRWiVoDaydoM6dwoLuuPuHp%2FUhJ%2BT94TIUmZB7iOO7DyIE5HzFfCwcBPDD8rr7BMG2Sf6YDPbG95R2WdVHY0Bv%2BQzmmTQyotqT9nbJPqaUzEtOV0hoar6lZ5Z1YxvJ8a0zmcMA3VQPcZZB3CQ3VTal5GhY3gSSXerhMBink%2BwyZAM7Ps8LA3ALA89r%2BkJXVZ%2FoQswQpgJWtE7UqdtlR%2BOckBIt%2FduygEFcbHIuX91QSfxTZG0CYoQdhvkd1XzrEtpxWL0CZ8h6YyNms0UDF1TnvUHypcrr3jrMT944zvljMLgdO9zVpd032hInjvvuCLiKAr9r0aXIGQjLzpQsG0kTCal5W%2BBjqkAVnE2Kb558dVWW1Vn60jFUxOGizkfThFGTL95gUsn%2BQxD27icvFnf0ZcjlQvP3B5vFpAtTnwFcWF%2FAlV2JP94%2FeihYzdt8zn1lFIZjrh7VSEbl3mIlpEY9Tvc67JdYGWW7aeyJTlug3NhLrh8O9WI9H%2B6WQVNG6ST0YZZfs5%2BfY4xFcoLjscjbaol0rIWm9iM8sT8BdKJ6Z9Is4C9OhiUrfojgHl&X-Amz-Signature=24ee3f6c28caf5e60049e5b472f5bf7b5fc5a7a54fb93d03565c0988e856696d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZBL3SQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrq4fYv%2BlSknkmfZlEFdwhscpfRYUHAiFY6MxXDU%2BgWQIhAL9eFzIW4yWsEj3u5mTlA0wmXyEsJ2UyJopXBxegyjtyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6QK3ORK%2FiODEcCdwq3AOT1wdQDOkQybFzFnSZYRLRzGSGfa392J3p3KZJLPXl3YHj2tmcxtBXapbNruJB7mVc02%2FzMNaTvCqZSz%2FPF3e7%2BHi7Y3zfDW7NvuPoR3F7Y2z%2Bhgix8WanuOjH%2Fp2Zn33dHtvHureToq4033khaiyQq%2FdQowJd5Oz92DYPIclQBQ9m24z51OSgINqnqVVHoLAmangIujxAM94IfPnEhEaUHBot80PdHnageUzO%2FpMmNI%2FhsfI2X%2B6SGWko%2B%2FAZIII8TrvfXaO3MWL7q39XLP48FXQp61JjQL5cuvQLSRWiVoDaydoM6dwoLuuPuHp%2FUhJ%2BT94TIUmZB7iOO7DyIE5HzFfCwcBPDD8rr7BMG2Sf6YDPbG95R2WdVHY0Bv%2BQzmmTQyotqT9nbJPqaUzEtOV0hoar6lZ5Z1YxvJ8a0zmcMA3VQPcZZB3CQ3VTal5GhY3gSSXerhMBink%2BwyZAM7Ps8LA3ALA89r%2BkJXVZ%2FoQswQpgJWtE7UqdtlR%2BOckBIt%2FduygEFcbHIuX91QSfxTZG0CYoQdhvkd1XzrEtpxWL0CZ8h6YyNms0UDF1TnvUHypcrr3jrMT944zvljMLgdO9zVpd032hInjvvuCLiKAr9r0aXIGQjLzpQsG0kTCal5W%2BBjqkAVnE2Kb558dVWW1Vn60jFUxOGizkfThFGTL95gUsn%2BQxD27icvFnf0ZcjlQvP3B5vFpAtTnwFcWF%2FAlV2JP94%2FeihYzdt8zn1lFIZjrh7VSEbl3mIlpEY9Tvc67JdYGWW7aeyJTlug3NhLrh8O9WI9H%2B6WQVNG6ST0YZZfs5%2BfY4xFcoLjscjbaol0rIWm9iM8sT8BdKJ6Z9Is4C9OhiUrfojgHl&X-Amz-Signature=eb74b29abf32b5e94383b155bbedb8d74607d6525001a29c5fb109ffd3c44cd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NH2M7XV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7nMoG%2F0AWOUof0gs4TCRQl9ZH%2F39eA0PR9xiRaCTsMAiA06nEZ9%2FHa%2BXc%2FPE171JxxMsUDgbN6REQGsQ6j2wTExSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq4dJdUHbHC6nibH9KtwD3CAC%2BfUGQuvRY3X5bP7L%2Bc%2B%2BDZ83ggGdg6cyXjnixyidXu5ttWBsKjVDLzyqfl1s4ZgFxLhb8kORyO9uIpHc2l78fyNJXoRh6o6MUvSjlq3H5aMZ1HiNRZZw0AYFi5jh1vLE3%2BUJ6di%2BbJJHcBbmCU74DkN0NfAI8JjKnCobfr%2FYizetcFGtSQa86ZKnSuHDhkHP3R6Gjo%2BjjOAhx3uaiTIyqJfeCYktDNIrEiJIEaQcRR8aFrDIdN7UtDkK%2FeJ%2BO10%2FwPqYSGQjSFs4IvUsausUKno5sHTT5wDDaTCb0L8MbLzswF0ZjllI7Qm9lWsWp4%2FtgsCWxzPuAdickLk0zFeBd7nQdAaD8%2ByGejRjYhVhWpX0LMiSKqpG0BmTAm3YOdUVIS7NMcccy8y0fs3PPlTdc6BLF8ZKeNE%2F6o%2FGvjjPyhskdwtdRdtQKVbwD%2BFR1e0HdhMwTBdH2FlzNWuocXFO8k%2FQNrimYf3Tm3IT85UrRzf7Qn5%2FSbqHZEPWndRx6808veDGMFzsCU6dzo2b3Jbc%2FklU5aUy1coWOUixoRWCD8UQFYD62c%2FW4n10mCOcIqynMP%2Fd4moqTGwlM9OHBDEXcHPt%2B%2FpEcNwxocsGjwVD3bXilTu8i4YLBGww6ZaVvgY6pgHMKxA5KA7dqNkj3rRlSSvZPqq2HDPKWynGYqYJtjwRJjRkY0H0hJ46Qyl7wOo91T7OHnRGPyI4YOdHnuFHOPhqPnhJMk8hHYeaVXT%2Bv%2F0G0W3UHy5OKuQA4uTNrdVetmLp8e4rWBocyiLFNsGSxkMEYcKIuxYQSdCVkfN%2Btk4sxI3uPNYIMCNk22teyGYRIh60yR8RjMd3iI%2FkALLDytko3UjZsd4C&X-Amz-Signature=bb543fac178d4d76169b44a96e4ca7b80b17299fb044240ce418e3b15b044d06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466264AZMSZ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWmBJl6a70gNRL65luALI%2BLrh1uR0ZL2dbFtynqID31QIgQawZp6Q40lS2zk4sEtDypbGtF2fK%2FBNcXG68LAhBGw0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnwMgqdlncB3T7hZSrcA55j%2BVSCogOH0w%2Bdy%2FkObMjx6tNdfrpe5gt4mGCTbVE%2FWpRmKixYBPdEnd5Z%2FNR67eRPRIuw%2Br3nktS7CNP2ft3%2B%2BO34sq4QFDHoDshgnshqcJ3FskQd1fQ2%2Bxuef3GbC8vSTYr4rMdQ5lO%2Bts65ckSOiDFyjFo0TAgkcl2wnobMQmJzzJBGgNyCtao3NK4lPbpz1EnJ95nhKZ939u7e%2BqMjqoA7nTUV0D4iwwsLkWEjC%2FNSVuvMpU4wEjCIX%2B0yp1v41SaNOou55vSu8NL7fkl%2BfwImGRTa5nOkWwbJp32D1uy1qJoybkGCCJZju4xYJMbZcsSqHiNXVt6x0qBBY%2BPvC7NGoRIO3LsNAd6%2FyosPkQ2Etl1Bp%2FHUFMtRhruYkF2SmHl1xyvKgDi1idT6r1GHeMllo%2BbL7nm2cGdOJie42baWRvbtBwc5Z4P7eJsY9uhC4FjRBcywlQX5G7JB2L1YXyRPfSSM9WfNQEeXI3Sn1YYgOmEhdsKijbOukyPocZu%2Bj%2FZYytk%2Bf3CE58Lt7%2BSNa94qpf4HZyVHKgnaNQOEiQ5zT7NTkNkLUDTk4m3HhHlEgAGhKDcwotBeMBuvqLVa%2BDcVPdOGy%2FQGoJcM%2F4RYJ4R3eJFXgHO4vAhxMLiWlb4GOqUBvBdjc7Hg9H6%2BnuZO2K6sPHH6RxNU1Qc3xg%2FX70b%2Ff5UaAv815tpcZV5JB60ynd%2F%2FUKd6wpjaqAvxyYdXZ84fF%2BeNhL%2F7NkxM%2BevwLpw8O%2FUNtEi8UuvqFWtLZ8yXCWS2de1f1fIFtkU5NxHLScHnVNtNakGQ%2F0X3oqsk1QsUAhFUCVy1mgmHzz%2Be8xiW3lgAWKCMzmG8U%2FqCDmQv7kCqGJjxipuw&X-Amz-Signature=ac337792c6c08231874e94ae0fab19ea3ff4a3b5a5bf0790c081aeadfbd42256&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZBL3SQ%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrq4fYv%2BlSknkmfZlEFdwhscpfRYUHAiFY6MxXDU%2BgWQIhAL9eFzIW4yWsEj3u5mTlA0wmXyEsJ2UyJopXBxegyjtyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6QK3ORK%2FiODEcCdwq3AOT1wdQDOkQybFzFnSZYRLRzGSGfa392J3p3KZJLPXl3YHj2tmcxtBXapbNruJB7mVc02%2FzMNaTvCqZSz%2FPF3e7%2BHi7Y3zfDW7NvuPoR3F7Y2z%2Bhgix8WanuOjH%2Fp2Zn33dHtvHureToq4033khaiyQq%2FdQowJd5Oz92DYPIclQBQ9m24z51OSgINqnqVVHoLAmangIujxAM94IfPnEhEaUHBot80PdHnageUzO%2FpMmNI%2FhsfI2X%2B6SGWko%2B%2FAZIII8TrvfXaO3MWL7q39XLP48FXQp61JjQL5cuvQLSRWiVoDaydoM6dwoLuuPuHp%2FUhJ%2BT94TIUmZB7iOO7DyIE5HzFfCwcBPDD8rr7BMG2Sf6YDPbG95R2WdVHY0Bv%2BQzmmTQyotqT9nbJPqaUzEtOV0hoar6lZ5Z1YxvJ8a0zmcMA3VQPcZZB3CQ3VTal5GhY3gSSXerhMBink%2BwyZAM7Ps8LA3ALA89r%2BkJXVZ%2FoQswQpgJWtE7UqdtlR%2BOckBIt%2FduygEFcbHIuX91QSfxTZG0CYoQdhvkd1XzrEtpxWL0CZ8h6YyNms0UDF1TnvUHypcrr3jrMT944zvljMLgdO9zVpd032hInjvvuCLiKAr9r0aXIGQjLzpQsG0kTCal5W%2BBjqkAVnE2Kb558dVWW1Vn60jFUxOGizkfThFGTL95gUsn%2BQxD27icvFnf0ZcjlQvP3B5vFpAtTnwFcWF%2FAlV2JP94%2FeihYzdt8zn1lFIZjrh7VSEbl3mIlpEY9Tvc67JdYGWW7aeyJTlug3NhLrh8O9WI9H%2B6WQVNG6ST0YZZfs5%2BfY4xFcoLjscjbaol0rIWm9iM8sT8BdKJ6Z9Is4C9OhiUrfojgHl&X-Amz-Signature=f82ce101b67ed1a0440833e64a5ace28c05df537d67d2c830d37af0a845b24b1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
