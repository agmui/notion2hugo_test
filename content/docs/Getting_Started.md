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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TWT452%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2F2eIc8O5a%2FXSLr2zHJAS2juB0VmFdtdUe9Q%2FK%2FhwPAIgOxUp4sq%2FLv3AWXbNGm671GwbpNZxCMORhxG2i9XBN28qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjmlBIvr8w%2BHd2nqCrcA0hyR964MOe6xC3HxqgvklZXe%2BcSVDNQr8naauhUUG3wRMiN6DOjBZr72rRSvRFgT%2BIaEZa9QPRf%2BcZYKME0X7cQCjpkuoWLiy%2BjCaMhO1J9qzD%2Bw2P8Uxw7UNNaMIVjQRfxgwqdt63bQcZmM9v2YO1daxiHmqfpZOA7EgSh%2F4ZMutbPvGc2bHBijFluwtOm5wQhlQQ5kd%2F%2FkLifkpSy3FQozq6cUelMi3SUbyH%2FAFZEQr1fni2uX26ZzOIh3PKQlMT4jwmtKmjLH%2FQLSBu%2BoOZEDvOT73DogNjpq%2FXgoQDJe4jf2cUtBeAEsxmPEMuyxNCPQcbdVPmED2SR23aWuJldFis7RzfMnEH7zOburj4InIyAyzPu0TgprrVj3t9HH7kBn9QU2Tiy9SWg59cDe2XQFgY%2FYa1fNwAX3moyOq0yEAbSOHVqUnmr8U1VQun1hGXVloqQ8MA%2BvUYU6E7HrHicgq8Lohcy832sgkrpy8pR4kzhzhcnUBf43AK0ntbG4fZylGvodNJeowPPAWd9B57dOG0BlG5vtD2AkgIE0CZZ4GePbV7g4FT%2F4RsZ1Tz9JxJYpWIIOz8t99mXzHesCZu1y9WP2brhD1jxPKKA2XRSyA5ZYcbYP9ZuCPQ6MMXd09QGOqUBiYOnPRF0yowBIWj%2FAZsenF8JBUqfarP2tuvWkgUwcVNXFeicG1mK1BJ1Z43NkgP63BoVpOmtNsGPaJQTIC5Wr82IjyRd3cGDhAxL2%2Fzm9Ggh2i6RGuR%2FGvEyPNRiB5VIau1aheo4JqMN%2BYPGbGez3sJxwzLMDZfxSThP7Pcey6PrfvsexbYiSP8EuCeSWXfrdgRzYenhKKIW%2Bh54Iiw99bwGIfjF&X-Amz-Signature=9b61f79dbfe2ce6b125ebc2d02732189e126ee4f319cdf91f72a240491128480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TWT452%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2F2eIc8O5a%2FXSLr2zHJAS2juB0VmFdtdUe9Q%2FK%2FhwPAIgOxUp4sq%2FLv3AWXbNGm671GwbpNZxCMORhxG2i9XBN28qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjmlBIvr8w%2BHd2nqCrcA0hyR964MOe6xC3HxqgvklZXe%2BcSVDNQr8naauhUUG3wRMiN6DOjBZr72rRSvRFgT%2BIaEZa9QPRf%2BcZYKME0X7cQCjpkuoWLiy%2BjCaMhO1J9qzD%2Bw2P8Uxw7UNNaMIVjQRfxgwqdt63bQcZmM9v2YO1daxiHmqfpZOA7EgSh%2F4ZMutbPvGc2bHBijFluwtOm5wQhlQQ5kd%2F%2FkLifkpSy3FQozq6cUelMi3SUbyH%2FAFZEQr1fni2uX26ZzOIh3PKQlMT4jwmtKmjLH%2FQLSBu%2BoOZEDvOT73DogNjpq%2FXgoQDJe4jf2cUtBeAEsxmPEMuyxNCPQcbdVPmED2SR23aWuJldFis7RzfMnEH7zOburj4InIyAyzPu0TgprrVj3t9HH7kBn9QU2Tiy9SWg59cDe2XQFgY%2FYa1fNwAX3moyOq0yEAbSOHVqUnmr8U1VQun1hGXVloqQ8MA%2BvUYU6E7HrHicgq8Lohcy832sgkrpy8pR4kzhzhcnUBf43AK0ntbG4fZylGvodNJeowPPAWd9B57dOG0BlG5vtD2AkgIE0CZZ4GePbV7g4FT%2F4RsZ1Tz9JxJYpWIIOz8t99mXzHesCZu1y9WP2brhD1jxPKKA2XRSyA5ZYcbYP9ZuCPQ6MMXd09QGOqUBiYOnPRF0yowBIWj%2FAZsenF8JBUqfarP2tuvWkgUwcVNXFeicG1mK1BJ1Z43NkgP63BoVpOmtNsGPaJQTIC5Wr82IjyRd3cGDhAxL2%2Fzm9Ggh2i6RGuR%2FGvEyPNRiB5VIau1aheo4JqMN%2BYPGbGez3sJxwzLMDZfxSThP7Pcey6PrfvsexbYiSP8EuCeSWXfrdgRzYenhKKIW%2Bh54Iiw99bwGIfjF&X-Amz-Signature=43795fbeae2516a989ed50aba133577ff6b403c20ca543563ae8e6d9bd04d50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TWT452%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2F2eIc8O5a%2FXSLr2zHJAS2juB0VmFdtdUe9Q%2FK%2FhwPAIgOxUp4sq%2FLv3AWXbNGm671GwbpNZxCMORhxG2i9XBN28qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjmlBIvr8w%2BHd2nqCrcA0hyR964MOe6xC3HxqgvklZXe%2BcSVDNQr8naauhUUG3wRMiN6DOjBZr72rRSvRFgT%2BIaEZa9QPRf%2BcZYKME0X7cQCjpkuoWLiy%2BjCaMhO1J9qzD%2Bw2P8Uxw7UNNaMIVjQRfxgwqdt63bQcZmM9v2YO1daxiHmqfpZOA7EgSh%2F4ZMutbPvGc2bHBijFluwtOm5wQhlQQ5kd%2F%2FkLifkpSy3FQozq6cUelMi3SUbyH%2FAFZEQr1fni2uX26ZzOIh3PKQlMT4jwmtKmjLH%2FQLSBu%2BoOZEDvOT73DogNjpq%2FXgoQDJe4jf2cUtBeAEsxmPEMuyxNCPQcbdVPmED2SR23aWuJldFis7RzfMnEH7zOburj4InIyAyzPu0TgprrVj3t9HH7kBn9QU2Tiy9SWg59cDe2XQFgY%2FYa1fNwAX3moyOq0yEAbSOHVqUnmr8U1VQun1hGXVloqQ8MA%2BvUYU6E7HrHicgq8Lohcy832sgkrpy8pR4kzhzhcnUBf43AK0ntbG4fZylGvodNJeowPPAWd9B57dOG0BlG5vtD2AkgIE0CZZ4GePbV7g4FT%2F4RsZ1Tz9JxJYpWIIOz8t99mXzHesCZu1y9WP2brhD1jxPKKA2XRSyA5ZYcbYP9ZuCPQ6MMXd09QGOqUBiYOnPRF0yowBIWj%2FAZsenF8JBUqfarP2tuvWkgUwcVNXFeicG1mK1BJ1Z43NkgP63BoVpOmtNsGPaJQTIC5Wr82IjyRd3cGDhAxL2%2Fzm9Ggh2i6RGuR%2FGvEyPNRiB5VIau1aheo4JqMN%2BYPGbGez3sJxwzLMDZfxSThP7Pcey6PrfvsexbYiSP8EuCeSWXfrdgRzYenhKKIW%2Bh54Iiw99bwGIfjF&X-Amz-Signature=18b56971af3fc740adcf3a0ee66be4d592545142672cac616cccc5d6c4bd0599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY6ATRSQ%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJudDaX3hfJTtQV0ATwNnHiVqgh4jta4dAmSDk8j3Z0AiEAz452CcWuqGa07R70OuFbbti%2F8%2Bep9jw04VbxlsxM2igqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzLpkO3M9jBY5uflCrcAxh8ta%2BX%2B9gNMvmIgMUf8yaHVxkf0pptaBDbrT4Jbode2UuwEGdBhG4ipiyIjdyHPwQbBiJntWK8U3e2Wa74ADrn1L7vkuNm4v6Gskn25nrPVwbVDzAQ9frfbfA%2FFQXOHU8%2FdP8EBoulUn7YrEMxZdrk4tOz31KAS4RTtghD%2F0s6RPphJPb0TyFVV9MHHGt376ypO7KQR8JIOEV7fvasmU70d%2BCzTvu%2BHZHB9fQDAGvu5ZzqMrWpZBnxL2RmQGYclwmJ%2FQ79ISrZ6syf3eBFKEAWj7feT%2FyDCQl%2FX5P32QwnJ1TuAbxjTXc6DrmabbdBCWe9C5BSB6v5SBtVTNUKkQcgd7eavJqI0VcRgUynSfP5mqWuh2RWT8fw0cLRx4a%2BABJrzoe47hQAtoRjDd8HdEgK4Iz6sxp5XybeiSHxFXEJUM7gbcBVmhNRFJcXvDBWwLpNv5%2BMLYzrT0%2FUmd8tBSgTJOaMHcVrXW363RTthSsGbW4MEkK9SNOphgezgd6ydHpFO1ytFdMTEDB8JKUE1Hw8V8Wa5LGKvblxEV00BAYHF2Z%2FZ2MxmivY7qQQ0l%2FqdET7sDTMl8ChjB1HAXgk58d3%2FTPbEEZcjGO7s0rKfapJafNHaeBuU9aKIsdWMKTd09QGOqUB0KivhCaM9khc91EF0WdEfOWGdmZEe7u0FDI3dHEpXMCZq2drMS5kwY7FIsNM0byj5CiKzFmoz3lzJOqN4eFu4BkfvZkGmHNbBSYNbqhLKgcLcbrBVYEa4CBRk%2Bib76mP7q7Wf%2FkikuZcnQ5Fb%2F9Y2GRwDLPRTLG%2FBLyapC9RdPulb2gp6Axz12lp85zS%2FtDFS09hecPiHOuQ9BBmw3Ixt0imFH5D&X-Amz-Signature=8007d45d2f877ff5f8fe96855fed25bfa7d1fb7004cfa2c4a840df490d4fa254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J333MJE%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTUmc8y9rLgNxznTJhnu8d4WCibGfMBps3sD5wc5NOXAiA0tX51siAUxHRq8Mo%2B%2BVFA6PN1YD18MYnBUdqO3dMi8yqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbcWTN%2FsIM7UiF7mJKtwDuwUKVQGdW574SOo%2FOUtUEfWFuoCQXaZMOME7J4Nsg0RAKzRHjQqa6xwxlU09ly4zXFrJj%2FgdUhLzHdvJ4nZmBBFUs7pHRuj5tFMXCeUGttnVdNYNt%2B440lKJ6cnvzFSi6RdSQR%2BODDX9pAP0KrLHD5LIapU6iQRr%2B08K7VDEYLke5kEEnVfVoeswiTuiTlpnxc%2B5pTbWWkstEch98QM2x2ED4JN2Gmgo3IUnuScSfbadxshxReNMuWzDo265FY917q1qQr2ZBOe3n8I3FBv6BDXOB7TV%2BNTljY4SD9MPbzq%2FZXyGFCNTHsEWCvTd8kMpxLoYOZjupK02fBrtX4SEOe7o8ag6TM8OzXS8y0AF%2BDslCC5Du472%2FBdBG3TNIRc3sg6uw2FjyHTgNkZrJXxmmMLdFaHR9cFp2H645piQm96CwV7y74blPwRaVrFo074vJ%2FPRYTKdynGC9kRw%2FVybThxj7gjVWqpoYTN5dGi7GodqGElby2QxH9cJ5%2FKaRTCFTAuSEzAI99rSKpxrvUAaNy%2BMTW0PivAx%2BomBIjP3ENMaD%2BmtAwaCwfwWPl6KQvpcCdqW%2FC81xD7%2BlunMeiWkrTYPhCE4W0ASRyAyLAu20HVogGgcsgSvtEGhcQEwp93T1AY6pgFusisYDCs77t%2B2w2k4NTZNV5uixBUyiHm5VN0ROR1tW37L6V7Ke9v8wCsFMXHGZT0zSuKQzrvtia1Jkj01VvWZi2t9JFoEUWRqrXGZBQ2Vv2wiii9FmFdDyAlnYJGZEqXY%2FONCt88nKbV8yc%2FfxJdmLCkxYki2WRseEEbR%2FDeAISmySfiuKBLbT3TJaRLQshoVqrX6eHdnAQALKkIN8VRz6c7%2FVeEU&X-Amz-Signature=b52b7d98516ff65f4170b3e02474b5678e3e47b31621e78affab077e7642f40e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667TWT452%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT%2F2eIc8O5a%2FXSLr2zHJAS2juB0VmFdtdUe9Q%2FK%2FhwPAIgOxUp4sq%2FLv3AWXbNGm671GwbpNZxCMORhxG2i9XBN28qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjmlBIvr8w%2BHd2nqCrcA0hyR964MOe6xC3HxqgvklZXe%2BcSVDNQr8naauhUUG3wRMiN6DOjBZr72rRSvRFgT%2BIaEZa9QPRf%2BcZYKME0X7cQCjpkuoWLiy%2BjCaMhO1J9qzD%2Bw2P8Uxw7UNNaMIVjQRfxgwqdt63bQcZmM9v2YO1daxiHmqfpZOA7EgSh%2F4ZMutbPvGc2bHBijFluwtOm5wQhlQQ5kd%2F%2FkLifkpSy3FQozq6cUelMi3SUbyH%2FAFZEQr1fni2uX26ZzOIh3PKQlMT4jwmtKmjLH%2FQLSBu%2BoOZEDvOT73DogNjpq%2FXgoQDJe4jf2cUtBeAEsxmPEMuyxNCPQcbdVPmED2SR23aWuJldFis7RzfMnEH7zOburj4InIyAyzPu0TgprrVj3t9HH7kBn9QU2Tiy9SWg59cDe2XQFgY%2FYa1fNwAX3moyOq0yEAbSOHVqUnmr8U1VQun1hGXVloqQ8MA%2BvUYU6E7HrHicgq8Lohcy832sgkrpy8pR4kzhzhcnUBf43AK0ntbG4fZylGvodNJeowPPAWd9B57dOG0BlG5vtD2AkgIE0CZZ4GePbV7g4FT%2F4RsZ1Tz9JxJYpWIIOz8t99mXzHesCZu1y9WP2brhD1jxPKKA2XRSyA5ZYcbYP9ZuCPQ6MMXd09QGOqUBiYOnPRF0yowBIWj%2FAZsenF8JBUqfarP2tuvWkgUwcVNXFeicG1mK1BJ1Z43NkgP63BoVpOmtNsGPaJQTIC5Wr82IjyRd3cGDhAxL2%2Fzm9Ggh2i6RGuR%2FGvEyPNRiB5VIau1aheo4JqMN%2BYPGbGez3sJxwzLMDZfxSThP7Pcey6PrfvsexbYiSP8EuCeSWXfrdgRzYenhKKIW%2Bh54Iiw99bwGIfjF&X-Amz-Signature=845a70aba44df1f6002241eba6ee8244ac9e15a2a6a20d20fd5bb4c23b700059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
