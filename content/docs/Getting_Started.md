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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRDRFI3P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBvWVNQHkgMgPd9iWR4G7yieytp5TmURHLILVl%2Fbf9CsAiAzlp3s2ll82MBw%2FBZQi6puJsmu1n3u8lqGa8D2OujLiyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDDuAAWPK0LBkrg%2FCKtwDObbEW9phhXiTJB0WPCn8ubyMAIJopVR7Q0ta9Q05ttHDyADGy1MOFt3gtcBgkYbzFSZ9Tv2LPmECdJXs29l6f%2BbzEAlGrsXHl%2B%2BIfPjISixefbUzUdYZMetFq6QTNPwadA2y%2F9qoB41GkwHoy88jOaGMu7OG0qehNsrSJIAjs1KcSrlFhD6nSvfveSSE5yYNeqQf%2BtNmygid7Sn8vSfLmQZFhSPn6zspW8jEDIlm8%2BOGUpMtLhRrEQvOqfQ0b2li1cTFC8EGf1Gmp55it%2Bnodz19%2Fnzu4ZIB%2BVft7oEeWMQarwr6sqFTbmdj%2BEmAe6had2Qqev%2FsbRE2bvcRL3zP3uSeZ9NPalzVTmbHO8eobW4B8cJZSRZdffcTtvO6%2FQwaG5JfKtDZgHpt6fS38J%2BY5fMaf7Z08mqFfkR8tNjO4pQJIGoTLTtoQb8F%2Bd7pY%2F8KyJh86z9StrvT3C3ssByZF%2F4Mbp3xih%2BLRI01BDYjKp22chJEMLG3k3ytLckPqNWV5%2BR6bZ%2FLbRhUEpK0efsYEyPEggHJoHH%2B4dGE%2F59kQn07tySS8reyMrlZaDfSok9qhdzNd9rsVSTm0SguoFGCZUeHfQpbO6Ayf%2BR512PhbdUAI%2B6tLnl97fJWcyswmr3uvwY6pgG1md%2FkjDZrRpxzC0JalLhKzs%2FS5mTFIpOPeJzF0p5uNLbdILrGE2FvTOKbK1mEEpk6o7NOVcmJ42J41G9qBqqKvKKktIkR73bAyOgqqYdbfKlu7hwMyrBmOfhq5bNScMDUEjBdbaO2RYftG3nNz2PJeUiFiPtjvKTSSKCYou6IvlQseV%2BlDJz0uLkbnUpMNcsm%2BFSJf%2F%2BRTbvT2LzgR9Se%2FuVOfZZV&X-Amz-Signature=4c37406f25e564c6627568382c3125a29e2324154940f8221fffdc73cee9edb1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRDRFI3P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBvWVNQHkgMgPd9iWR4G7yieytp5TmURHLILVl%2Fbf9CsAiAzlp3s2ll82MBw%2FBZQi6puJsmu1n3u8lqGa8D2OujLiyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDDuAAWPK0LBkrg%2FCKtwDObbEW9phhXiTJB0WPCn8ubyMAIJopVR7Q0ta9Q05ttHDyADGy1MOFt3gtcBgkYbzFSZ9Tv2LPmECdJXs29l6f%2BbzEAlGrsXHl%2B%2BIfPjISixefbUzUdYZMetFq6QTNPwadA2y%2F9qoB41GkwHoy88jOaGMu7OG0qehNsrSJIAjs1KcSrlFhD6nSvfveSSE5yYNeqQf%2BtNmygid7Sn8vSfLmQZFhSPn6zspW8jEDIlm8%2BOGUpMtLhRrEQvOqfQ0b2li1cTFC8EGf1Gmp55it%2Bnodz19%2Fnzu4ZIB%2BVft7oEeWMQarwr6sqFTbmdj%2BEmAe6had2Qqev%2FsbRE2bvcRL3zP3uSeZ9NPalzVTmbHO8eobW4B8cJZSRZdffcTtvO6%2FQwaG5JfKtDZgHpt6fS38J%2BY5fMaf7Z08mqFfkR8tNjO4pQJIGoTLTtoQb8F%2Bd7pY%2F8KyJh86z9StrvT3C3ssByZF%2F4Mbp3xih%2BLRI01BDYjKp22chJEMLG3k3ytLckPqNWV5%2BR6bZ%2FLbRhUEpK0efsYEyPEggHJoHH%2B4dGE%2F59kQn07tySS8reyMrlZaDfSok9qhdzNd9rsVSTm0SguoFGCZUeHfQpbO6Ayf%2BR512PhbdUAI%2B6tLnl97fJWcyswmr3uvwY6pgG1md%2FkjDZrRpxzC0JalLhKzs%2FS5mTFIpOPeJzF0p5uNLbdILrGE2FvTOKbK1mEEpk6o7NOVcmJ42J41G9qBqqKvKKktIkR73bAyOgqqYdbfKlu7hwMyrBmOfhq5bNScMDUEjBdbaO2RYftG3nNz2PJeUiFiPtjvKTSSKCYou6IvlQseV%2BlDJz0uLkbnUpMNcsm%2BFSJf%2F%2BRTbvT2LzgR9Se%2FuVOfZZV&X-Amz-Signature=d14e929a1ba26aebc72ec490a7bcde1e59689938016b18ab8989d70c71cb6121&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DECLPT5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDSwi30XwsOiDS%2FOKFfdgBtXf1LfFo0SeZkegWFt2yrDAiA8INp5w3qnZZ6z%2Fvsy9F7BAGgm5qicO%2BkhATLP3eIdeSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfwarBK5FFfpK5SFDKtwDX3qFH%2B1OVhvdiYo78IBZiWXKR3rDMta1TlUPTOmouJ10xQ8wOrbWQG5eXoZx%2B4W%2FSE5sn2mp4S5SzGSjg%2BHKqaVHUVbxKlAJVtgiPvzS7ReGOpuAsQbfsKN7frBjW38cwJRrv3dQrrjDylHdsS9FAVfCyOqqBzeOCrNicQ3Kx4NCbjvSrYz16Iv2cRxgJ0QllH9R69dt1htVQMJbDNs%2FHuvGcgpzgGD5JKl5445RYTj4QNqjd%2FZCNTrPfzYQkosFdN8yYU1%2FnfxETmcCG9qWaOJvC1oARCt9PnU63NJb6aze%2BKAfIUT5gsCtO3KgH5yG8RuNe1%2BRlIXys4hnzgs7ienH3xNBLoyuVlOTID%2FbA4EgHmD%2B1fDsD0%2FlAFtZhXBN0j9VWlt0v6hte1bgvog15U9dlNcn3en26b5PaUd%2BmY2S4UfdWZsxeYrlOJuyeuNScVRCmrulYEDe5iE%2FH0FIgtEbjqcoqQ8p1V4FUxQvbRQdiXb3ChMr%2BE%2FONdtKeNRYA8V%2FzWyhP8nSbTAfGpEBXYwUL1EwHZeQ%2BWRHan9ELVaWjN8YpWNMYPdillW9BaG%2BYxmk84yZ8OX023dP99mtXNkpDdQrZox3Xx822uGxHa02DUsd%2FNV%2B08SBsZYwrL3uvwY6pgErU8neXVfvrZ7uI0gNgpHosWeT%2FpPGGrqpn56Tf0gcjKIMvlyPIecuuwNDmcPAozpthZwHp76yoaB8sTg1T%2FnEQTNPTFW7oD11jGQ%2BYXev6DImTdPF3VTSlExzakSt0ZogBfkMeXpBZ01GYKM0XV4PQWaBbqFsa5NzA2NKjIU%2B%2B8PWQuzghSlrEzhTV0n9LKFCmE4QwDCucHGgkGBEQlh0waquPkXi&X-Amz-Signature=67ecdb9cf027f6c81073a034e6cba42595a90434866c51b5bbeb7895eb6e5f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACFWFX3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDe8nCWABHEKvWpy6zJZQTp3THM4PUjK4W2kqj%2BaLktxQIgNggHnj89WocTm1zh9oykjfjchfSoHfAej4kAEMIq2tgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiyuIQcCY%2B39OFN8CrcA55NvCLxVKezgkZtSouosNO0gVjjHRHNXxI6BeNyXQTZR8kYNtYCHJRntbv69n4B9XKpJFWBIlMusKVVbYXVGpD8rD8tIbh2ha9DTdMdhdjxfIC7zEg3n0BaEMflVZxEgVX1IQgmEL3uriJg823MfKV1757qVjMj1i9MrWKJQwG2rx8wYEfrfQa1MD9s002wz6tjuoXxJIU8h0FW%2FuRqHPcJIq8Odl0NhLsl04Cn%2FdMg2dGqB6rHplSmEhLi5iSTCoQCYreQZF%2FuAXRO%2FvoRHCH1jGCea2v3PLMw7sIg5%2BNglxWhjq9SQ4fV4o8N6Ulk6jhj7VY36vsZ4cyqXT3KC8pvhesh%2BLHRKEnxvYIfFg5azt%2BkjDkEFXZtENDG5PZYON2scgfQ7GABVc1NEA3XaHGaJ37%2FKFmjJ8vC1kAOW13VOqaXfTV2Fm%2BqY4ymVn7nnSwJeUnOy0xbBK1S5VJZ3vbaaR4ZyJTOr%2BNCky39XrXI2vbPdT0eA5ihddgw1%2FQGr3P%2FHrqVyfkQEA0enUJgfwzWkur388sAPD%2BtF3Yvd%2BG9oDwOEk2OzbI8q7TsJiQCHsnK6WK8KaS8JfU%2BQEewHmaWfBaELhpe9vTjIoT%2Fbl%2B2Xcq3bhQ7T%2BCcPQxIMKu97r8GOqUBu0hX%2BRKAiaQH7RKAehEnker97BvL1NKx82p67EhN7slC7qP6KDzwC2osE3O%2BP%2Fg3jJi25Sxp2EsGJbzWdLrgwB6i9siZX9WqOPRnotBhUatosaprB7mSJ7tspr%2Bo9dkZW9XrOAnEN57QBTtFpfX77f6wu1trDPlS%2FwI7lWEFjgqSw2xru8ysrcZp9xnka9QN%2FbkpBxHN%2F0n07BFflRmub9B2H7vM&X-Amz-Signature=0c79bea412b772da5379953abb7f57f815d1672f598a5a4381effc2fc1e3b0eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRDRFI3P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIBvWVNQHkgMgPd9iWR4G7yieytp5TmURHLILVl%2Fbf9CsAiAzlp3s2ll82MBw%2FBZQi6puJsmu1n3u8lqGa8D2OujLiyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDDuAAWPK0LBkrg%2FCKtwDObbEW9phhXiTJB0WPCn8ubyMAIJopVR7Q0ta9Q05ttHDyADGy1MOFt3gtcBgkYbzFSZ9Tv2LPmECdJXs29l6f%2BbzEAlGrsXHl%2B%2BIfPjISixefbUzUdYZMetFq6QTNPwadA2y%2F9qoB41GkwHoy88jOaGMu7OG0qehNsrSJIAjs1KcSrlFhD6nSvfveSSE5yYNeqQf%2BtNmygid7Sn8vSfLmQZFhSPn6zspW8jEDIlm8%2BOGUpMtLhRrEQvOqfQ0b2li1cTFC8EGf1Gmp55it%2Bnodz19%2Fnzu4ZIB%2BVft7oEeWMQarwr6sqFTbmdj%2BEmAe6had2Qqev%2FsbRE2bvcRL3zP3uSeZ9NPalzVTmbHO8eobW4B8cJZSRZdffcTtvO6%2FQwaG5JfKtDZgHpt6fS38J%2BY5fMaf7Z08mqFfkR8tNjO4pQJIGoTLTtoQb8F%2Bd7pY%2F8KyJh86z9StrvT3C3ssByZF%2F4Mbp3xih%2BLRI01BDYjKp22chJEMLG3k3ytLckPqNWV5%2BR6bZ%2FLbRhUEpK0efsYEyPEggHJoHH%2B4dGE%2F59kQn07tySS8reyMrlZaDfSok9qhdzNd9rsVSTm0SguoFGCZUeHfQpbO6Ayf%2BR512PhbdUAI%2B6tLnl97fJWcyswmr3uvwY6pgG1md%2FkjDZrRpxzC0JalLhKzs%2FS5mTFIpOPeJzF0p5uNLbdILrGE2FvTOKbK1mEEpk6o7NOVcmJ42J41G9qBqqKvKKktIkR73bAyOgqqYdbfKlu7hwMyrBmOfhq5bNScMDUEjBdbaO2RYftG3nNz2PJeUiFiPtjvKTSSKCYou6IvlQseV%2BlDJz0uLkbnUpMNcsm%2BFSJf%2F%2BRTbvT2LzgR9Se%2FuVOfZZV&X-Amz-Signature=011155be5273514916cfa8e246899e1a70a596ee05e56fa569d063d65863e6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
