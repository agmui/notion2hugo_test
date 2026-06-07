---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-08-20T08:32:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-08-20T08:32:00.000Z"
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

[intro_to_CV](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_cv/cv_setup/)

## ROS guide:

[intro_to_ROS2](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/getting-started-with-ros2/)

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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5TE6SC%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYfAhesMtgNeZL8ilp2jtfDvs4J6H73luCkOz%2FQRMxXAiAMGFsMSzn%2BbR165n%2F%2FLrHmQgbxOn34oFVZuf%2BKL%2BE3jCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg57CKHqNmzevSIXnKtwDXVAfCHVIA6PAY0VIj6lTWEAgqzOp15UT6%2BCYScGXFXdtaMCsZh%2B64xLWRCAeHYw3%2BWksYcSS04lxcbgPafqySpiYIOJrE7qxESersMAqBqFe%2BQiidqSwW7RzKmXGFzSjFdFTxS%2BXHKw%2Fe1LDbY9vxJrhCJQJqcMwYFU%2Fc7pv%2Fgim2F5KrsKpIouDprypmzk1o2NOjHO3CynO4uXnBmfpPjl%2FlESdBopQ6ey%2FBcWazmIV6kpsAJJ3oTan66%2F9BKk0rn6pxG198n69x1OlyjEXGR%2BcMgIbEeuhM4T2DT75YR1VW6tu8mvdsCRzldbCVywzkZ5KXtT%2FdIKeWHXmTfoqsRMsuwOwDs2WTdIfeZeKrk0SrnWJ6DTDdgGQ8XwPbu472vVtvHmm%2BHxUUs1A3lw6mPst7ivNtcHSZkp%2BsIt8xRPXEu7Z50Ma92EJVPZJnZsp%2BPGc3B5VZpq72FqAyYO0jRKpjUOv%2FDL4xyJbr8zzjUS82MIVkKuq%2FJBWqnswVPQeHWzVSiK%2FWodvp6gR0fAzskcCwMLDpG%2Flb2kGXeuGm%2BVBfUHFZ9k7ExTetjLbYHFXzyTa4Mnmw%2FXWhQdW6TeaO2tqhWITqAYBFc0wmocxZuxCG3cpGNOQv%2BwWjVkw%2FdCT0QY6pgHHql4%2FKyIwuNg8pYOwo3YBsWgwJ0Vf27%2BvW3mxfBWJSBE0zbHC%2F2nA6e%2BQSDQLtFahSLx0NSw704RbXv0377Q38oGlAiYX7iWaNYi43qGQBVC9ahhxJbMH%2BrBDLGG6FWeoV%2FfRGg4z7OmbsGS4glgmd9gK5IG4j4OShg9eYoOtt307GXC2ICaTY6dGKQ61KWZidGog45gltRfEZdrQaZisOJ7TaLJ6&X-Amz-Signature=c78542ddd8a5b5773be433eda844312f8de004009de79b26075f4d0b08cd2b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5TE6SC%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYfAhesMtgNeZL8ilp2jtfDvs4J6H73luCkOz%2FQRMxXAiAMGFsMSzn%2BbR165n%2F%2FLrHmQgbxOn34oFVZuf%2BKL%2BE3jCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg57CKHqNmzevSIXnKtwDXVAfCHVIA6PAY0VIj6lTWEAgqzOp15UT6%2BCYScGXFXdtaMCsZh%2B64xLWRCAeHYw3%2BWksYcSS04lxcbgPafqySpiYIOJrE7qxESersMAqBqFe%2BQiidqSwW7RzKmXGFzSjFdFTxS%2BXHKw%2Fe1LDbY9vxJrhCJQJqcMwYFU%2Fc7pv%2Fgim2F5KrsKpIouDprypmzk1o2NOjHO3CynO4uXnBmfpPjl%2FlESdBopQ6ey%2FBcWazmIV6kpsAJJ3oTan66%2F9BKk0rn6pxG198n69x1OlyjEXGR%2BcMgIbEeuhM4T2DT75YR1VW6tu8mvdsCRzldbCVywzkZ5KXtT%2FdIKeWHXmTfoqsRMsuwOwDs2WTdIfeZeKrk0SrnWJ6DTDdgGQ8XwPbu472vVtvHmm%2BHxUUs1A3lw6mPst7ivNtcHSZkp%2BsIt8xRPXEu7Z50Ma92EJVPZJnZsp%2BPGc3B5VZpq72FqAyYO0jRKpjUOv%2FDL4xyJbr8zzjUS82MIVkKuq%2FJBWqnswVPQeHWzVSiK%2FWodvp6gR0fAzskcCwMLDpG%2Flb2kGXeuGm%2BVBfUHFZ9k7ExTetjLbYHFXzyTa4Mnmw%2FXWhQdW6TeaO2tqhWITqAYBFc0wmocxZuxCG3cpGNOQv%2BwWjVkw%2FdCT0QY6pgHHql4%2FKyIwuNg8pYOwo3YBsWgwJ0Vf27%2BvW3mxfBWJSBE0zbHC%2F2nA6e%2BQSDQLtFahSLx0NSw704RbXv0377Q38oGlAiYX7iWaNYi43qGQBVC9ahhxJbMH%2BrBDLGG6FWeoV%2FfRGg4z7OmbsGS4glgmd9gK5IG4j4OShg9eYoOtt307GXC2ICaTY6dGKQ61KWZidGog45gltRfEZdrQaZisOJ7TaLJ6&X-Amz-Signature=da36ddf0818fec9cdf62a6aa3986e9e6c9971125cb83daf9341d863672072464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5TE6SC%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYfAhesMtgNeZL8ilp2jtfDvs4J6H73luCkOz%2FQRMxXAiAMGFsMSzn%2BbR165n%2F%2FLrHmQgbxOn34oFVZuf%2BKL%2BE3jCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg57CKHqNmzevSIXnKtwDXVAfCHVIA6PAY0VIj6lTWEAgqzOp15UT6%2BCYScGXFXdtaMCsZh%2B64xLWRCAeHYw3%2BWksYcSS04lxcbgPafqySpiYIOJrE7qxESersMAqBqFe%2BQiidqSwW7RzKmXGFzSjFdFTxS%2BXHKw%2Fe1LDbY9vxJrhCJQJqcMwYFU%2Fc7pv%2Fgim2F5KrsKpIouDprypmzk1o2NOjHO3CynO4uXnBmfpPjl%2FlESdBopQ6ey%2FBcWazmIV6kpsAJJ3oTan66%2F9BKk0rn6pxG198n69x1OlyjEXGR%2BcMgIbEeuhM4T2DT75YR1VW6tu8mvdsCRzldbCVywzkZ5KXtT%2FdIKeWHXmTfoqsRMsuwOwDs2WTdIfeZeKrk0SrnWJ6DTDdgGQ8XwPbu472vVtvHmm%2BHxUUs1A3lw6mPst7ivNtcHSZkp%2BsIt8xRPXEu7Z50Ma92EJVPZJnZsp%2BPGc3B5VZpq72FqAyYO0jRKpjUOv%2FDL4xyJbr8zzjUS82MIVkKuq%2FJBWqnswVPQeHWzVSiK%2FWodvp6gR0fAzskcCwMLDpG%2Flb2kGXeuGm%2BVBfUHFZ9k7ExTetjLbYHFXzyTa4Mnmw%2FXWhQdW6TeaO2tqhWITqAYBFc0wmocxZuxCG3cpGNOQv%2BwWjVkw%2FdCT0QY6pgHHql4%2FKyIwuNg8pYOwo3YBsWgwJ0Vf27%2BvW3mxfBWJSBE0zbHC%2F2nA6e%2BQSDQLtFahSLx0NSw704RbXv0377Q38oGlAiYX7iWaNYi43qGQBVC9ahhxJbMH%2BrBDLGG6FWeoV%2FfRGg4z7OmbsGS4glgmd9gK5IG4j4OShg9eYoOtt307GXC2ICaTY6dGKQ61KWZidGog45gltRfEZdrQaZisOJ7TaLJ6&X-Amz-Signature=cb7afac19b0b0de6b56b8d8e414697e04622721e984f52dd283263339baa04cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZQJ7BN%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRMuOwjWVWwZPttwt%2BEKYDy0Q9%2Bd3wEXJ2HuJcpcegGAiBRnZeW4VHsSY%2BI98mB4NjuN65UeziNRJVN8dL%2FO4gtmSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN3c9%2BNNOZDUCTIJRKtwDPukT%2BwUgbCoOvJSj%2F%2Bmal7blRR8gvvmJPjrxNqyqBCNIT0W01A3TqR%2FmcBKkTwkwcVW%2FxQ0UDfCvs%2B6RzEfXSqga69o43o%2B0VV%2Fa%2FdSw7FS4ceLfMeeXOYcDGAhIcTQMwNe6U7R5mSEupj%2FwkO0mxKV5gLZMJZ%2F3Xx3xuRwjqjx1us7ERp8cT1R8%2Fk1FfvGfyVmHipFdLMssdlmF1I6Fzw45b3Z90MgYIVxUrRxFAuLbt%2F9CyV9%2BpZOIN2meHK%2F151Pu%2Be9wV0Tk1mAI34Sh5D4aOPLRa1ofOifjkhvBgG31mFDQEUl0qiiBqIhxxpltpvPobzhNiDtiVjuuKN3g7YB7rjE14vtFkUaTtNsqgpcK7sEVHgvEKrWnZ2gOcBHzadsBzuVoNkX63owHERH4q8bGROEfLo8ARF4AAO6l4OB0bKh6W3jB4uNw87dY4ZBlzCUFENdNrYw0gc56Ote2NmWNURmC8FnNdcXT%2FpcCYkoqJModDNyk6N8he4UHHsFVZ1NPx6gKvVLXB3E5VPjSCCpf7KgGv0a4HQSj7LMVdl8UyShWASAPwVQ41eyvfGta%2BNwde07Bu0svYAWlbjIgllUWV9umM3RrG1He52rHU0Dr5bXSsvPqaLzSqIww29GT0QY6pgH%2FtjteYqM5%2BltaTia71FngvuY9VFAjuWFZgLK5Eduq2Zvo4l5Hw8LpyVhQLS9ZJcxEVd5M%2FAoqb7uzJXC9B5zmcmKHp7hBUOEES8Jggk0SXpJcmr8tkj2dvXjSnE2EEPI4JEuQoNhdxhLHQnv%2F%2FLf4choMytvewYFTo%2BdSFS6L7gbqYNu7PCHgP7OyjVQOg7mvb72GQEV96WFL2SblZn5RHxovBzhm&X-Amz-Signature=65bb9cffe673d23b9d5b0dc59c42a6f3845ed3b9d74a84cca58a747ec346c28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYCOY74U%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLkEi1OMKyq9IGsC69qa7%2BayI5zn480i0cwXQIS4ElnQIhAJP9GMfOaHpiFPqiPY1FCpdjWK%2B%2F%2FtGz4YqftVokHVUhKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgzt5ajR2EkIxoKCQq3APuztm3tQMnTGzw6M8v%2BX%2FXnMYtPXdvNqlR9tdLc%2BozD9JBYlrxzyfwNps%2BZ7AMzyy%2BJXTRNSLRvwlROBb6a5Dxfvh3ef7mVSTjjNTyO5iiV6oMv7ZJtAvpWxv2GDt4CgkuG2XQ4uLV6YWMjLTjnLGlPMuMyR6dz1aYOdzHuC6bFck4u7iOAIXsxwoHbbvsz6JrWp6k7XZk1Eop%2FmT2qdnjyKec98bOPwRYSgOgLHmDpcT6jQeVGuQkjuv4fjSg%2BNQ%2Bt20xmgEwAv0umhRAILb51Q%2BpDFBKxjrKbdHcN2n3DW%2Bp72i6MxrnBoUmRVhGqbdgg0fbNlABftcqUhuAa2Ll9YPWAa0%2FjXhAHytWiXDKj2iRLbSs3VqDZziVCCajY970GoI0BCsRng8xX6mv7aqgcSKhuHAIHwFJodW4sf8G3aU3pQ4fysuX9jxXIR0oqQ%2FYdTHuVpkMClowTPreikOA3tdFtdF25RH8S5g8grUSmkLGUeQHfu3GXeCwPsgC0q5tueLBMc766oxfFWPwtQKpsuceXQJat3521Z5M4OzdKdBGt%2BMFds9bGHUrBH5meRt4%2FfHrgosLwrA%2B4A0st%2BdSIhpOGYQ6LCJBqKsl8lIzRZETykrFA6exTFm14zCx0pPRBjqkAVlgEYZ7YGjaCzmPwQFum6MICzGeaGcVF8KQk1wD5avyiQg4POs0aB8VSMSDOP8KV2BG5kA6dQy%2FyyAu72WUY0529%2BVNiFX1%2BkmrTV0U%2BXdGlT37gSTeVelCF5Lq%2BsSrjyGeCbNNVSecvCjxC%2BMUcSysSxef%2BQZ%2BhrFIK6YjGlHHRuZ4lHso6czZOZb46h2YcjtyPi84qqfJDyNZE4pYYcs%2BsZBd&X-Amz-Signature=35fa600a8801df2acf505e62d1ef963872762b83ed3466ad8c1d55c8597c4ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5TE6SC%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYfAhesMtgNeZL8ilp2jtfDvs4J6H73luCkOz%2FQRMxXAiAMGFsMSzn%2BbR165n%2F%2FLrHmQgbxOn34oFVZuf%2BKL%2BE3jCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg57CKHqNmzevSIXnKtwDXVAfCHVIA6PAY0VIj6lTWEAgqzOp15UT6%2BCYScGXFXdtaMCsZh%2B64xLWRCAeHYw3%2BWksYcSS04lxcbgPafqySpiYIOJrE7qxESersMAqBqFe%2BQiidqSwW7RzKmXGFzSjFdFTxS%2BXHKw%2Fe1LDbY9vxJrhCJQJqcMwYFU%2Fc7pv%2Fgim2F5KrsKpIouDprypmzk1o2NOjHO3CynO4uXnBmfpPjl%2FlESdBopQ6ey%2FBcWazmIV6kpsAJJ3oTan66%2F9BKk0rn6pxG198n69x1OlyjEXGR%2BcMgIbEeuhM4T2DT75YR1VW6tu8mvdsCRzldbCVywzkZ5KXtT%2FdIKeWHXmTfoqsRMsuwOwDs2WTdIfeZeKrk0SrnWJ6DTDdgGQ8XwPbu472vVtvHmm%2BHxUUs1A3lw6mPst7ivNtcHSZkp%2BsIt8xRPXEu7Z50Ma92EJVPZJnZsp%2BPGc3B5VZpq72FqAyYO0jRKpjUOv%2FDL4xyJbr8zzjUS82MIVkKuq%2FJBWqnswVPQeHWzVSiK%2FWodvp6gR0fAzskcCwMLDpG%2Flb2kGXeuGm%2BVBfUHFZ9k7ExTetjLbYHFXzyTa4Mnmw%2FXWhQdW6TeaO2tqhWITqAYBFc0wmocxZuxCG3cpGNOQv%2BwWjVkw%2FdCT0QY6pgHHql4%2FKyIwuNg8pYOwo3YBsWgwJ0Vf27%2BvW3mxfBWJSBE0zbHC%2F2nA6e%2BQSDQLtFahSLx0NSw704RbXv0377Q38oGlAiYX7iWaNYi43qGQBVC9ahhxJbMH%2BrBDLGG6FWeoV%2FfRGg4z7OmbsGS4glgmd9gK5IG4j4OShg9eYoOtt307GXC2ICaTY6dGKQ61KWZidGog45gltRfEZdrQaZisOJ7TaLJ6&X-Amz-Signature=ce8088d57dde7fadf0cf7b42c51d9f348693d4dd2d703aca13781416e5d356ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
