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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLJJAXO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC18dFN%2BpPjkVf2%2Fxj1EXMGrcVgcOOC%2B776DOlYYfXzxgIhAMp4pIO3f7eQrWr9Sqfl56GWGa51S7aKqrXgrpM9nwHcKv8DCDQQABoMNjM3NDIzMTgzODA1Igycmb%2B9q%2B00T%2Bv541cq3APqHS0WstVowhqqy7Dk8JQDOqXijU0VC%2FbFcIOu%2ByehbSSy7wDJC4lNBlWBn4GOJRED0XoRSJ%2BkEWHy86Rfhqe%2Bj3yZswuOhW8pVLRpZtG2WCspsMykTHSzgp8AxihWC4w%2Bw5vhzmm8nUD%2BZ9gfckWVg7pP%2FZzQnoLDuzTnyPxXWEynEPs9HFQLQmkldk1dinbjD2PGGobvPkeTbYh%2BtMliDGzy6Z75oeQZA1BlKrdWJq2HhIwWChFbC5Pq0FS%2F0PEB1W%2BDhYeFJacyeGU1o7VNrTdxnKLoamZORl7H%2BvwI%2FM6TzJdrtSkriv8gwTdKGEKyitq5nKBR14DfGnImkReFxAffLdvPw7YgTi%2BRHDXrUFv%2BiPmxAu73WYrT788WKg4yZBzGCVF9zC55Jv3QkNIY637MQe%2BdJsQaStl3vlRPEExQ78PTRsdvMGQFUMLH1moT06YjXZBnpczpezJx%2BKn%2Fuk%2BTS97JvPwtt4vow%2FCgnN5xJkozZOCcrqL7Aovxu1pTH4QjWmfP9psUUGck1SDBiihgX7vNfUS2dT5nZJIcMqyxqhuCFrZEwZ%2FjzQLg0yHALfvkooJhtWgf%2FwCHJpUsBSxrCtoXJUXeJJ%2B%2Fbq13wwy7t0QT4XgsexNKATDz1fq%2FBjqkAR9XpQDoJKUi%2BsDeTxmRTXCkJO66xpPx0wwA8%2F%2For93JZ7e8pfbPgDvga4pTH5rJgmjRnnYZP%2FX5zP9rRmmEs3Hv3mHuuyMqz56n6e3j8z%2Bbx5zxs9tiFe3ZbICU7SzN7H7hVJihnJQZB8brepzgvsPQhSP3EOZlsQ9dqQumCtOE6xER9dpafFlLPR55O2%2Fq0yug7CwgTIT0i4NlCKUQEYF4diHB&X-Amz-Signature=07d968032470e9b8a22dce17665189e141af40dfb87152900012dd9324c92d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLJJAXO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC18dFN%2BpPjkVf2%2Fxj1EXMGrcVgcOOC%2B776DOlYYfXzxgIhAMp4pIO3f7eQrWr9Sqfl56GWGa51S7aKqrXgrpM9nwHcKv8DCDQQABoMNjM3NDIzMTgzODA1Igycmb%2B9q%2B00T%2Bv541cq3APqHS0WstVowhqqy7Dk8JQDOqXijU0VC%2FbFcIOu%2ByehbSSy7wDJC4lNBlWBn4GOJRED0XoRSJ%2BkEWHy86Rfhqe%2Bj3yZswuOhW8pVLRpZtG2WCspsMykTHSzgp8AxihWC4w%2Bw5vhzmm8nUD%2BZ9gfckWVg7pP%2FZzQnoLDuzTnyPxXWEynEPs9HFQLQmkldk1dinbjD2PGGobvPkeTbYh%2BtMliDGzy6Z75oeQZA1BlKrdWJq2HhIwWChFbC5Pq0FS%2F0PEB1W%2BDhYeFJacyeGU1o7VNrTdxnKLoamZORl7H%2BvwI%2FM6TzJdrtSkriv8gwTdKGEKyitq5nKBR14DfGnImkReFxAffLdvPw7YgTi%2BRHDXrUFv%2BiPmxAu73WYrT788WKg4yZBzGCVF9zC55Jv3QkNIY637MQe%2BdJsQaStl3vlRPEExQ78PTRsdvMGQFUMLH1moT06YjXZBnpczpezJx%2BKn%2Fuk%2BTS97JvPwtt4vow%2FCgnN5xJkozZOCcrqL7Aovxu1pTH4QjWmfP9psUUGck1SDBiihgX7vNfUS2dT5nZJIcMqyxqhuCFrZEwZ%2FjzQLg0yHALfvkooJhtWgf%2FwCHJpUsBSxrCtoXJUXeJJ%2B%2Fbq13wwy7t0QT4XgsexNKATDz1fq%2FBjqkAR9XpQDoJKUi%2BsDeTxmRTXCkJO66xpPx0wwA8%2F%2For93JZ7e8pfbPgDvga4pTH5rJgmjRnnYZP%2FX5zP9rRmmEs3Hv3mHuuyMqz56n6e3j8z%2Bbx5zxs9tiFe3ZbICU7SzN7H7hVJihnJQZB8brepzgvsPQhSP3EOZlsQ9dqQumCtOE6xER9dpafFlLPR55O2%2Fq0yug7CwgTIT0i4NlCKUQEYF4diHB&X-Amz-Signature=3fbafa74a29f71d75b0418463ee014f49cbc1dceca20eb12286d0428c2d10cae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FYL7A4S%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm%2BZzneAAKGKQDZb5fRyaEZJLrmKjkMbiqBngk7xElowIhAJwo3en0cQf1Y0WGWK6UugwmllGf6WCBcwXs2bmtd2alKv8DCDQQABoMNjM3NDIzMTgzODA1IgxtMpQdGdpZZd9oIRcq3AOulR6qhE55RloN3q4ntyRS1pUZyyoZSIFWAZWu7NuH5B3kszbAKAHxeNhPHjwQCHnSskg1lCENHmLu6tXU0S4iaT2yXzbFy33UlS0fAKuvD1RvAfNIUAlBvLdvSzQpmBwVdG18hgqCJ5l5AXyeZVBIA0TH0TJAnyhID%2BGyE%2BVmER4L0LtklPHOCcYNxh%2BGRrQSl2%2BXldoIigNtxLah0z%2FY7iKJvoav1ROnyUlEO6ht0iu6A4xlYC1Hd0as9kLZjew6mUyvKW5%2FNaFvctqvqx%2BckMEJumyr6eQUCbe9Y7oB5CdDxfll0SbaGxOfpWUPSEXNr1SQ7kDiMCknKgbE0Lhhin%2B6seAd8XmaoT%2FOL8VRdsHWbf2PdTgYN%2FjfPZTS9mtjxCdSJwN7Wqk4Dn%2B3ykNXSvP0D8DEzlQoAMNycrUCrrfrQhNMeISIN2lwrUiFVpFAA1zCadiWOxPdZEl9xnu4HN5gJMHCQnFbLpMZCMYGd1sqYbMbuoyJh39jxTkh1WLRQFuwUfeiRQAB7%2BT4KdSDsEXB%2B9kpgxsDwQoVfdiYw6cVNmn%2FSDqIujM%2B6I0TIXU165LKrqhLn3UXnoM0bKat%2BwAIzydS8ra3o%2FVjOXz9ZKcANGS0qIQwkJm%2BcDCR1vq%2FBjqkAc8s%2B5p7VmX87zWZ956uLHu%2BlK3la3QWEVqdf%2BM7AdezipVtaCiRisKFIvssYkHX2yzRntk4VF%2BO%2BDO1Z0lODaOydfk7KOpTxtX3Xjt%2BodYbyGnmXYT7Du%2FMppmHbS72AVd9Poq%2FTC4nHl8IXKJSmmOYpEqQCTHMxpeJVmzQmb7QroL%2BDqhal45o9Ee1H9VUoXjRPd1L8b%2FnMAHqR%2F3sND7lRCpb&X-Amz-Signature=6b706238813a3e471cb53b712f4ee64e8ab87d7ea8bbe2711f2819f81a4f6431&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSBW6FI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvL%2FwQNT3xHAYno6NCuCZvXqYCHb8LUKR7YEi0tUym%2FQIhALJ1WIslK6pwBAYmvcxralxLtfnlGc5F93b02fd6Z2qsKv8DCDQQABoMNjM3NDIzMTgzODA1Igxiik0wvYGRuNms%2FpQq3ANnUgzZYZWMHHgxC6w%2BAcLnp1JEoZoFqoHDwDXOIoKUS8%2FiHsc46kUINy%2FejpJbCcC6bVtrhXl0qnhRiCGBp81Vi8xvWB3sEKFacFVrB5VCTSJbniIceQ095gywwP4y5V%2BPTRYiYOFSXPm%2BVxNmIW0yPzqHdzcjduOehuuq8R%2BhbgvGbufwuVRL8L%2F4vXbsGvERAeM0oplIVjR0gEqs72Y2iNoGsJJjGWjZlejbe25LPuUtBxkQfMOQ%2BeYZVnSVh5Gd1Pqm4Oeq3lKENiy%2Bv5LQwYBw9q08XDp4cfOvFp6f2wjUS93okxElPpdv18UsfxpTB1onlfMAXxRFK7wgFVlvqgFEufkgCpFU4dtkFLp9GKiqXK1hSwbIVskNob2bAaETna1zWeSFiehqV3%2BVK6h5kvl9VDNv1Ued7NL3fxBG4vzxWQGDujB0KVXsZlhmJhdEre6wHx1midYGzwzq%2BCay%2BeEQVoaNp%2FzBlCqlVtAjqh%2BRJQsXP7%2FvCDkPUJQ9HhcN56G77CfWnobD6p%2FjgcqLNZ9eDZH414JjU0ZOpjumGOn4dvKWwuXG0XW9%2BaCmqGI2Ycdgg2%2B63jHJJlLcPiGKl0sSqfYeIps5NKe4FJKlsSI946imwfEubBQX%2BTCv1vq%2FBjqkAR9k7CjqdMe2nuaYZy9Hx%2BOArv2VleeHTqsHJWwu7XxxV6XXyMkgYOCIbk0ZZpO3YSKAEBlkkI%2Bt8KkftV%2Fj8%2BE8vpHDtaHLtSL5Gp9MVmkXgiYESIJ1qAW%2FMZDGvt1ZOd7ZjVXjAE0S5Uyr7i79VadCE0ZwH9Fl4UoAXO5SgyFchqjgV6YYdnKj2Hlh%2FzxaOlzwtZzokvweA%2BITvfMw4HYqgrRr&X-Amz-Signature=9f0a68ff003ce8e792719dcd3bce1c9721875fcc78c77cdf30c40a1e7d3ff652&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TLJJAXO%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC18dFN%2BpPjkVf2%2Fxj1EXMGrcVgcOOC%2B776DOlYYfXzxgIhAMp4pIO3f7eQrWr9Sqfl56GWGa51S7aKqrXgrpM9nwHcKv8DCDQQABoMNjM3NDIzMTgzODA1Igycmb%2B9q%2B00T%2Bv541cq3APqHS0WstVowhqqy7Dk8JQDOqXijU0VC%2FbFcIOu%2ByehbSSy7wDJC4lNBlWBn4GOJRED0XoRSJ%2BkEWHy86Rfhqe%2Bj3yZswuOhW8pVLRpZtG2WCspsMykTHSzgp8AxihWC4w%2Bw5vhzmm8nUD%2BZ9gfckWVg7pP%2FZzQnoLDuzTnyPxXWEynEPs9HFQLQmkldk1dinbjD2PGGobvPkeTbYh%2BtMliDGzy6Z75oeQZA1BlKrdWJq2HhIwWChFbC5Pq0FS%2F0PEB1W%2BDhYeFJacyeGU1o7VNrTdxnKLoamZORl7H%2BvwI%2FM6TzJdrtSkriv8gwTdKGEKyitq5nKBR14DfGnImkReFxAffLdvPw7YgTi%2BRHDXrUFv%2BiPmxAu73WYrT788WKg4yZBzGCVF9zC55Jv3QkNIY637MQe%2BdJsQaStl3vlRPEExQ78PTRsdvMGQFUMLH1moT06YjXZBnpczpezJx%2BKn%2Fuk%2BTS97JvPwtt4vow%2FCgnN5xJkozZOCcrqL7Aovxu1pTH4QjWmfP9psUUGck1SDBiihgX7vNfUS2dT5nZJIcMqyxqhuCFrZEwZ%2FjzQLg0yHALfvkooJhtWgf%2FwCHJpUsBSxrCtoXJUXeJJ%2B%2Fbq13wwy7t0QT4XgsexNKATDz1fq%2FBjqkAR9XpQDoJKUi%2BsDeTxmRTXCkJO66xpPx0wwA8%2F%2For93JZ7e8pfbPgDvga4pTH5rJgmjRnnYZP%2FX5zP9rRmmEs3Hv3mHuuyMqz56n6e3j8z%2Bbx5zxs9tiFe3ZbICU7SzN7H7hVJihnJQZB8brepzgvsPQhSP3EOZlsQ9dqQumCtOE6xER9dpafFlLPR55O2%2Fq0yug7CwgTIT0i4NlCKUQEYF4diHB&X-Amz-Signature=590420b6ce80ddb02489a578bda3762919467846095b2fc1e709d6412f5e8a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
