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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTOFWFJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCAhiHpiHz6qbx9PnsaLMBK1KNTcRek38isjeXuQmUXBQIgNQF3yXhM8kUpzlzlZZcz49r%2BPz8WjuadJHL%2Bjj1t0wgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKfJDs8XpuPvzd2ZEyrcA1Jr0joBQN1wyd02UKBMlo8WfnANG0OW6o8fv4%2FYNAA4A0l7%2F7a45YYi7EGX2bFUAqToIarZ2Qi7lbuclqcpFfhUkQcxRpEQi%2FxgfvU6WHKhmSn6UBLpRdyN7KAqGDIaSTqoEtpORWFaLMevkaS%2Fhc%2FRqtEr8KSMWuWslPnYCKPtsv2bbinRzBJIr%2B9GXuB2W60%2BHXTMoonK0Jcu9iSlM05AJqTt47ULpAU2m9fOuZ%2BGshWhxp%2FAKBSNJuXbmrXZvKUn2Mn8m9L1NqNXoJikCYbpjLEMZYalNVC1WyRFaYL3fRR5xYjGQpdu96n1OgcDXz%2B7uqsw8gKPc58XtW3gw4QA0EatmNzbyHiQTvuvFSaofi0Z%2FtyRgenOEl8ZQ2lDST%2BGbhsVK4U23QljUI9yhsbsJDIQfUF7QqQFE7OZdeqvRZn5PxxUgkJBtesSB4wY%2BN%2BGgdTC7bR%2Fv1tPsSnJD%2BOG5FxuYRm4ttg%2BmFSO%2FZ0Y1Sg9FFT8QaMl4jN6UYnyqBxdO5vzyevb0BoqLoneT8DmGQR0tut57jvlveF96LTi2v08SUZeRm7IpXVLPJKA0G8o4KMxTegQIzIB9CIR%2BvgFWX8HEvthwGNvxzpTBgQRmNKqfkVGgKirRA0aMPT%2BoMsGOqUBltJDKuQIAJk0A8eUFKsFlCEZ8xbdrv0RQWk6%2BHfT45QoCXqrjbmcUsZ%2BO7EbRysasDtSkKugkPRQ8omPwQoP4Vg8i5w3CLPRW8bAvVEdmauH2OMM5QgKzfxrL0zQhBmAxQ5It96u7FStqTc%2FGw41%2BpZr02O8Dp8EZ69SLdS4Pw8Nuq5fCxnToMZNlv2Czo9LVskzENUR%2B%2BawD%2FBwNBGqNXi28m6o&X-Amz-Signature=c97786b492338e8adec180fbd600095865029b43ef7ce5dfdd59ab9dfd9f4e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTOFWFJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCAhiHpiHz6qbx9PnsaLMBK1KNTcRek38isjeXuQmUXBQIgNQF3yXhM8kUpzlzlZZcz49r%2BPz8WjuadJHL%2Bjj1t0wgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKfJDs8XpuPvzd2ZEyrcA1Jr0joBQN1wyd02UKBMlo8WfnANG0OW6o8fv4%2FYNAA4A0l7%2F7a45YYi7EGX2bFUAqToIarZ2Qi7lbuclqcpFfhUkQcxRpEQi%2FxgfvU6WHKhmSn6UBLpRdyN7KAqGDIaSTqoEtpORWFaLMevkaS%2Fhc%2FRqtEr8KSMWuWslPnYCKPtsv2bbinRzBJIr%2B9GXuB2W60%2BHXTMoonK0Jcu9iSlM05AJqTt47ULpAU2m9fOuZ%2BGshWhxp%2FAKBSNJuXbmrXZvKUn2Mn8m9L1NqNXoJikCYbpjLEMZYalNVC1WyRFaYL3fRR5xYjGQpdu96n1OgcDXz%2B7uqsw8gKPc58XtW3gw4QA0EatmNzbyHiQTvuvFSaofi0Z%2FtyRgenOEl8ZQ2lDST%2BGbhsVK4U23QljUI9yhsbsJDIQfUF7QqQFE7OZdeqvRZn5PxxUgkJBtesSB4wY%2BN%2BGgdTC7bR%2Fv1tPsSnJD%2BOG5FxuYRm4ttg%2BmFSO%2FZ0Y1Sg9FFT8QaMl4jN6UYnyqBxdO5vzyevb0BoqLoneT8DmGQR0tut57jvlveF96LTi2v08SUZeRm7IpXVLPJKA0G8o4KMxTegQIzIB9CIR%2BvgFWX8HEvthwGNvxzpTBgQRmNKqfkVGgKirRA0aMPT%2BoMsGOqUBltJDKuQIAJk0A8eUFKsFlCEZ8xbdrv0RQWk6%2BHfT45QoCXqrjbmcUsZ%2BO7EbRysasDtSkKugkPRQ8omPwQoP4Vg8i5w3CLPRW8bAvVEdmauH2OMM5QgKzfxrL0zQhBmAxQ5It96u7FStqTc%2FGw41%2BpZr02O8Dp8EZ69SLdS4Pw8Nuq5fCxnToMZNlv2Czo9LVskzENUR%2B%2BawD%2FBwNBGqNXi28m6o&X-Amz-Signature=7cfc016fe294ef2902642253b7ef5358b4ae3e5b0ae13be0ac4d4d831d8a1759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTOFWFJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCAhiHpiHz6qbx9PnsaLMBK1KNTcRek38isjeXuQmUXBQIgNQF3yXhM8kUpzlzlZZcz49r%2BPz8WjuadJHL%2Bjj1t0wgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKfJDs8XpuPvzd2ZEyrcA1Jr0joBQN1wyd02UKBMlo8WfnANG0OW6o8fv4%2FYNAA4A0l7%2F7a45YYi7EGX2bFUAqToIarZ2Qi7lbuclqcpFfhUkQcxRpEQi%2FxgfvU6WHKhmSn6UBLpRdyN7KAqGDIaSTqoEtpORWFaLMevkaS%2Fhc%2FRqtEr8KSMWuWslPnYCKPtsv2bbinRzBJIr%2B9GXuB2W60%2BHXTMoonK0Jcu9iSlM05AJqTt47ULpAU2m9fOuZ%2BGshWhxp%2FAKBSNJuXbmrXZvKUn2Mn8m9L1NqNXoJikCYbpjLEMZYalNVC1WyRFaYL3fRR5xYjGQpdu96n1OgcDXz%2B7uqsw8gKPc58XtW3gw4QA0EatmNzbyHiQTvuvFSaofi0Z%2FtyRgenOEl8ZQ2lDST%2BGbhsVK4U23QljUI9yhsbsJDIQfUF7QqQFE7OZdeqvRZn5PxxUgkJBtesSB4wY%2BN%2BGgdTC7bR%2Fv1tPsSnJD%2BOG5FxuYRm4ttg%2BmFSO%2FZ0Y1Sg9FFT8QaMl4jN6UYnyqBxdO5vzyevb0BoqLoneT8DmGQR0tut57jvlveF96LTi2v08SUZeRm7IpXVLPJKA0G8o4KMxTegQIzIB9CIR%2BvgFWX8HEvthwGNvxzpTBgQRmNKqfkVGgKirRA0aMPT%2BoMsGOqUBltJDKuQIAJk0A8eUFKsFlCEZ8xbdrv0RQWk6%2BHfT45QoCXqrjbmcUsZ%2BO7EbRysasDtSkKugkPRQ8omPwQoP4Vg8i5w3CLPRW8bAvVEdmauH2OMM5QgKzfxrL0zQhBmAxQ5It96u7FStqTc%2FGw41%2BpZr02O8Dp8EZ69SLdS4Pw8Nuq5fCxnToMZNlv2Czo9LVskzENUR%2B%2BawD%2FBwNBGqNXi28m6o&X-Amz-Signature=1099ed4302087d6bc921a1cbc18818bc3aae48fb6ad47689d5c0763b73bf64c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VPOSFU%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD8O2srLhr0u2QltB2x8%2BuJBlzHkcZIZt3KqVD4T8oq2wIhAKPCYDMQ3Jb5jS7irfnssI%2Bf7G0xeTTbupT5ZqoIhPr%2BKv8DCCoQABoMNjM3NDIzMTgzODA1IgyV8NdXbLYLMvpA8nQq3AO2R70XDRm1N79QDztsUM9Aw82oYJjgSXJmWdmAHyA8yNjopWYPeGXhsKRHQwoml5Y4%2BmgLX81kO69VUqr5rEg%2BmdvxGZL7fdebWfdeOKobAWkmPC9t5lFLOfH%2FOZKrQ2E4mwFDmpZGrcfANN%2Bxm%2Fmwyr0rJo8BPUr%2FG9fP73U13IW77IKbOvzbw7e9WYoGxdSSAF9vGNzZUnqeTVtX2vgix7qCA0uy3%2BmDZFQypXwAE6KsP0cFD28hff6F%2Blt88C%2FB3tIhK6aNvaCxKFLdgYdIKCCU3GaiEyLug8kDRTHLHlhNYTTDLxJerMRUbQEZ%2B%2F7Gdlq8UyBdbx%2BwaDHGGb6pDe0bnTla65MLWrJR5ou1LoymPhHcU1rFYapHPVYTpVjaScf4S1aZq0XV8dOQNXlYm5fzACxp3B4z1HFan1xsYMYqI%2B7qJI22MsvZ30RoQvXQE6DwhFsOqp0wwuv7UNAnYUmK5tcr%2BDPh8pPvjkUZwiPgY4sJlY5ZicSRw%2BdXiJBxXFr8Dcl9c09Ib%2BmNfUplhff4623x8jfqlG%2FFhjG10ztj7VzyzJdRpNQKrDxJw77wEFk6StzYLfOVC9cYnwBta3fv%2BRoTXWOGXjJvzWA3Z0yC3HK1lzcrm%2BraOzDJgKHLBjqkAZweprCDlQf1hvBC2FcPBE%2Bi4C5nDDfKXWuvvXTg3TPHBGJLm%2BNngjNk1iyeAFLXeRJhM8yNErquJrfuSygMZhoLpGrbl7rMFVpA7xYbC7urjbYp7JkUEpj9shDe6j6%2Bw7z6tz9s87p4ebhFFtSxyYrzEfl%2FCXbGOoN1dANh0VMUdf3aXAdbYhd%2FpSO%2BALFJtijoI9ALYBs25gpmMdD2xxo6S2NM&X-Amz-Signature=c99fce98030c756fa766be7a39064bc832a3dea69b93ef5a9e3911a3517b6104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=18c20fde5949c5c43667ae7dc068fe55714e6475d38845d53325b01b116a4f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWTOFWFJ%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCAhiHpiHz6qbx9PnsaLMBK1KNTcRek38isjeXuQmUXBQIgNQF3yXhM8kUpzlzlZZcz49r%2BPz8WjuadJHL%2Bjj1t0wgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKfJDs8XpuPvzd2ZEyrcA1Jr0joBQN1wyd02UKBMlo8WfnANG0OW6o8fv4%2FYNAA4A0l7%2F7a45YYi7EGX2bFUAqToIarZ2Qi7lbuclqcpFfhUkQcxRpEQi%2FxgfvU6WHKhmSn6UBLpRdyN7KAqGDIaSTqoEtpORWFaLMevkaS%2Fhc%2FRqtEr8KSMWuWslPnYCKPtsv2bbinRzBJIr%2B9GXuB2W60%2BHXTMoonK0Jcu9iSlM05AJqTt47ULpAU2m9fOuZ%2BGshWhxp%2FAKBSNJuXbmrXZvKUn2Mn8m9L1NqNXoJikCYbpjLEMZYalNVC1WyRFaYL3fRR5xYjGQpdu96n1OgcDXz%2B7uqsw8gKPc58XtW3gw4QA0EatmNzbyHiQTvuvFSaofi0Z%2FtyRgenOEl8ZQ2lDST%2BGbhsVK4U23QljUI9yhsbsJDIQfUF7QqQFE7OZdeqvRZn5PxxUgkJBtesSB4wY%2BN%2BGgdTC7bR%2Fv1tPsSnJD%2BOG5FxuYRm4ttg%2BmFSO%2FZ0Y1Sg9FFT8QaMl4jN6UYnyqBxdO5vzyevb0BoqLoneT8DmGQR0tut57jvlveF96LTi2v08SUZeRm7IpXVLPJKA0G8o4KMxTegQIzIB9CIR%2BvgFWX8HEvthwGNvxzpTBgQRmNKqfkVGgKirRA0aMPT%2BoMsGOqUBltJDKuQIAJk0A8eUFKsFlCEZ8xbdrv0RQWk6%2BHfT45QoCXqrjbmcUsZ%2BO7EbRysasDtSkKugkPRQ8omPwQoP4Vg8i5w3CLPRW8bAvVEdmauH2OMM5QgKzfxrL0zQhBmAxQ5It96u7FStqTc%2FGw41%2BpZr02O8Dp8EZ69SLdS4Pw8Nuq5fCxnToMZNlv2Czo9LVskzENUR%2B%2BawD%2FBwNBGqNXi28m6o&X-Amz-Signature=b6061ef9163f598240367cfea42532650a9eee36c5ede498384d053cca3b8488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
