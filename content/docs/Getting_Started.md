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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3MQ6NA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLRU10OD0iTol2fKbvsCVfV2ndgZKBhzm9%2FmEsTgcosAiB5n7W1RK8POK0U05FW7cAD3JYsT59uzrIApGkOUxDSqCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0zzBGChPfLW1khSZKtwDiAeuicVmgxE6i4EWCVk4k%2FuK%2FtsJK81jqF2A%2F%2FeXJmg5jxJk2tMYOBGYV%2BktSZCQ9Zq%2BRDmLOG2ho0v8MzeZihrxKCusvtK%2BPEzeZQF5qg96c9yDqQXh1KcLSgMJjFg%2B8eiv0PZqR9noPiDdNswMA6eN%2BgYcCw5Yv0FykxkXFQ1bIvS%2Bysu%2F3WeYmkXYTLfbyeNYfstEWYNGIB96XAEesZ%2BnnuoMB%2F4tUZrABSRy1L%2FAxYF2%2BGv7w958YcTOQT%2BtT%2FI9rKLQKH3tIowEQ34YZCXdsHeKUmKdpGIWzdndVXI0svNCHhclW46npvGBVRI%2FsYBza4%2BPcKvyPErprc%2BpumFu0FQKrvGqUcm%2BZvM1u30547XDPfLq8keWk9oEbB%2FRTrkotE35Tgnwx1HIQ8vRzOOahWhmFq176UPVAU7%2FtB5KnRoFS8Mr8G7LKD4iWa2RW3ZnToej04DeNN0CX6sgJTNpW%2B3IqNPzs2fjCzrnwFLYotZOO5Q8ruMork7X6P%2FY3WMRsn4cs%2Bw8DsQzxHMDMKwI8J4%2BI5uK8FyC7hP6pYRIrKIrgwlR1uagiKBoUQVrIys55Qi932hqfnb%2F7abKrSeSOp%2F7%2BPGaI3SwA7Z0TgLXpqS%2Bcly8baJ7700wx5OxvQY6pgFdgGem4BfRVQmkAlgax8dS4LFwVvOCyzGstcxeaVnuBLtAdajubRgJauzJXaiDdgdT78MLyCdW5uL0VCN6YHW%2B6V1EexL7fcmbSHEM4FfnFubm2WtRM7yUc8syuMwN0HFebPjY5Qeel7rrd%2B8OTzzOaecWsziyFQ6UAKJXkxNleNIpVIin3CGRE3Nh4FNhcXr%2FUJvowAxwMMf5%2BYuhlDAvCzGNtLW8&X-Amz-Signature=f02b97c3322298c49bb1a373578bcb2bae9df0c02af6335884997e46549e3d13&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3MQ6NA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLRU10OD0iTol2fKbvsCVfV2ndgZKBhzm9%2FmEsTgcosAiB5n7W1RK8POK0U05FW7cAD3JYsT59uzrIApGkOUxDSqCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0zzBGChPfLW1khSZKtwDiAeuicVmgxE6i4EWCVk4k%2FuK%2FtsJK81jqF2A%2F%2FeXJmg5jxJk2tMYOBGYV%2BktSZCQ9Zq%2BRDmLOG2ho0v8MzeZihrxKCusvtK%2BPEzeZQF5qg96c9yDqQXh1KcLSgMJjFg%2B8eiv0PZqR9noPiDdNswMA6eN%2BgYcCw5Yv0FykxkXFQ1bIvS%2Bysu%2F3WeYmkXYTLfbyeNYfstEWYNGIB96XAEesZ%2BnnuoMB%2F4tUZrABSRy1L%2FAxYF2%2BGv7w958YcTOQT%2BtT%2FI9rKLQKH3tIowEQ34YZCXdsHeKUmKdpGIWzdndVXI0svNCHhclW46npvGBVRI%2FsYBza4%2BPcKvyPErprc%2BpumFu0FQKrvGqUcm%2BZvM1u30547XDPfLq8keWk9oEbB%2FRTrkotE35Tgnwx1HIQ8vRzOOahWhmFq176UPVAU7%2FtB5KnRoFS8Mr8G7LKD4iWa2RW3ZnToej04DeNN0CX6sgJTNpW%2B3IqNPzs2fjCzrnwFLYotZOO5Q8ruMork7X6P%2FY3WMRsn4cs%2Bw8DsQzxHMDMKwI8J4%2BI5uK8FyC7hP6pYRIrKIrgwlR1uagiKBoUQVrIys55Qi932hqfnb%2F7abKrSeSOp%2F7%2BPGaI3SwA7Z0TgLXpqS%2Bcly8baJ7700wx5OxvQY6pgFdgGem4BfRVQmkAlgax8dS4LFwVvOCyzGstcxeaVnuBLtAdajubRgJauzJXaiDdgdT78MLyCdW5uL0VCN6YHW%2B6V1EexL7fcmbSHEM4FfnFubm2WtRM7yUc8syuMwN0HFebPjY5Qeel7rrd%2B8OTzzOaecWsziyFQ6UAKJXkxNleNIpVIin3CGRE3Nh4FNhcXr%2FUJvowAxwMMf5%2BYuhlDAvCzGNtLW8&X-Amz-Signature=799a90b336db3782fa8519e1789c0c764a3a0493d431785a99148d9599d0f425&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ2MYHJE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz%2FjKt7LYKIUMnnooYmjfpjbDgkDIFwFcAcI1lgNi2rQIhAPnrREPd6lSai%2BLyiWw64eHEMfgisLEO5Ey9IK8vzOIWKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz144Lj%2FNeilEtxvMkq3AMw1SI9wdrtqCXv%2FGNd8mC4XGDoiIxux%2B5eSnLX99uNthUPWzuJmx6Z4sMXxSrMzdesmbIwm09WI4m8ZS36%2BfiSOgre0jsyRLi%2FNcCaQI1Uq1ZzamTGeVXqoh1Alu6ht4nmmM0%2FmNudaARLt3bRrw8%2F%2FUu1sT4CWBWaGVNKtPfvlzAJhs56v56feCRjwKCkjD6P2tniNjz%2Flh3UnMq0PDx1HHzT6GWnzYeHZBCPwKMJjaOXSR1o1I4m3y6KdeJIDU9UHWSTdTD9U7THJ0K9EnsSbqx2OwDetGcFcMTQ21JrSPfkX46zHrPml%2FyexdU0Ng3kO%2B6U0cg8BMY9gqu6q%2F6glGuyvhNCGCQJlJ2IOC6KuZ%2FJ8%2F1gELno%2FII1KQ%2FS2At%2F3EIy%2BgJx%2F4mf6r2EkapIAg0W9cR8qLcknxXNh6bghsW4QivpFPsB0kwxAPeQag2r%2FAP4XGpbcJ3nvI6bWAMiZV9g0vINZLYzjOR8uqKBkfspecqzVDIBpWFYnxPEKzfyXVZwEgE9ZPvCiWc5yWJb8GPLGUoywfJIos2TCYEIL2ewR0bnUDpiMFIwcocXv9PSLthjNDB6%2F51Xr9eHmmeKVSAMH%2B9QjSr68dnr30HMvW5lbqw4M23su0vFtzDJjrG9BjqkAQxgXHqgWMDvFgJ72nYj2%2Fx4pc0Tr8vI%2Bv4n9nQoQf0QxXwjHenuloq4IpDA%2F%2Fld03MHpswwEVDoHoVzoUHLP%2F7faBAZWMIsqJ9Ii1hsAleg2wIM6kyRr2JjFIJjhPfVqTn%2FjgYUeKceEhar5jSelimUtobJrTJXNV%2BbfT28zDyAtVBCrNO5OJJGn1GODSkMHYvls1Nsg9Q3p1dh50wARAn9SETt&X-Amz-Signature=3b5308687efc4dac58fa8ceb943d341d6e9707a95a7228a20ba522e4d66e70ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3R5YCYL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpLKK0swZWqjJfWf8He%2B0WQls4Kr7fbDOLH4sADACk1QIhAON1GAfPgqm7eTz%2BQKHQfQNd59wXrXDnC2fLgI3R%2FHIJKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwSGedehc5hI5pNI0q3AN6u4Rp%2Fm7XZaJ%2BtvpUqt41VO%2BBkRzTyMic5addHSxbSeNRREdpS3w8IKQsr9yzN7TNn69tGmlZWCHU9ANjG7IW267cI8%2BMTEwSHxJt5FEOPloYwhSIpSyB3LysJ9U2pAptoTcCgdU6naBzZoDMPInTA5xgLqImpynHC2Lw5JRRH4TSjcvPzX1B3QmIpW1CQONYKv9zA0Iku6aNmaiyrE3qFSiLVJPIeBGs%2FeyARCPXJnrB28LYNX%2FXzO1emhCYZFylmCrO1pS9zVh4fcHn8dNrjF6zkj641RAm8dfXSeOCencFh6vcl7v4BR7K7rio6qP3iohGkXg4cWFxEG9XJL0QFFU2SUwHCpi4ga7nM2QknA51FcZwBLIvdrEtt5KKpxBo4K4Mpiop%2FVuTaIJ04NnUFc%2FjTb0pLr%2B2hJeMRitdtFiln9RefHCN2KKydi5EvZGpjyhVjtpYmgYlwC8fCGtL5NQs3DeykAZDGmBzeCpNsJeyjn2SOqfdpJsjRdtie%2FBcThAawuO5uPzcrFVG56eeL5Q0DJOUUQn8VY7qiqfvFqOT5iaH0b0Ag4OfGs1hGxN%2BXvFB5qaOrt4T5JvI4RumScRMJ0VoJ%2BfOpV8GHUkpRNhcW28lMz%2F5%2FtIp4DCHkbG9BjqkAaVSBSkNvszy%2FQBo4HeVqaMsHLe7BnTVLxehyr6GbW%2FuWsPg74WX37YAMEqNR2TJFahMLyfpd9dxiy21nwF171aIflT4Eg%2BxkLyqAKSeyjQKHcrd6wfg0%2F8djO%2BR%2FMSC0Pu1BjysCUsrvmrGILRFIfFHl%2F5SbqT%2F6BJaZdOHce6PbPHD46CNerY1DzXcgHIhKIwiUS%2BhrSMFWPPuANOxhOWoJtHZ&X-Amz-Signature=baa660354d1121e7a8bb876abd56021c3093fea021aa1ee7023be74a12aa9df7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3MQ6NA%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLRU10OD0iTol2fKbvsCVfV2ndgZKBhzm9%2FmEsTgcosAiB5n7W1RK8POK0U05FW7cAD3JYsT59uzrIApGkOUxDSqCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0zzBGChPfLW1khSZKtwDiAeuicVmgxE6i4EWCVk4k%2FuK%2FtsJK81jqF2A%2F%2FeXJmg5jxJk2tMYOBGYV%2BktSZCQ9Zq%2BRDmLOG2ho0v8MzeZihrxKCusvtK%2BPEzeZQF5qg96c9yDqQXh1KcLSgMJjFg%2B8eiv0PZqR9noPiDdNswMA6eN%2BgYcCw5Yv0FykxkXFQ1bIvS%2Bysu%2F3WeYmkXYTLfbyeNYfstEWYNGIB96XAEesZ%2BnnuoMB%2F4tUZrABSRy1L%2FAxYF2%2BGv7w958YcTOQT%2BtT%2FI9rKLQKH3tIowEQ34YZCXdsHeKUmKdpGIWzdndVXI0svNCHhclW46npvGBVRI%2FsYBza4%2BPcKvyPErprc%2BpumFu0FQKrvGqUcm%2BZvM1u30547XDPfLq8keWk9oEbB%2FRTrkotE35Tgnwx1HIQ8vRzOOahWhmFq176UPVAU7%2FtB5KnRoFS8Mr8G7LKD4iWa2RW3ZnToej04DeNN0CX6sgJTNpW%2B3IqNPzs2fjCzrnwFLYotZOO5Q8ruMork7X6P%2FY3WMRsn4cs%2Bw8DsQzxHMDMKwI8J4%2BI5uK8FyC7hP6pYRIrKIrgwlR1uagiKBoUQVrIys55Qi932hqfnb%2F7abKrSeSOp%2F7%2BPGaI3SwA7Z0TgLXpqS%2Bcly8baJ7700wx5OxvQY6pgFdgGem4BfRVQmkAlgax8dS4LFwVvOCyzGstcxeaVnuBLtAdajubRgJauzJXaiDdgdT78MLyCdW5uL0VCN6YHW%2B6V1EexL7fcmbSHEM4FfnFubm2WtRM7yUc8syuMwN0HFebPjY5Qeel7rrd%2B8OTzzOaecWsziyFQ6UAKJXkxNleNIpVIin3CGRE3Nh4FNhcXr%2FUJvowAxwMMf5%2BYuhlDAvCzGNtLW8&X-Amz-Signature=ba4645171ef9a559055ffaeae00f7b70ff77c77cd3330fc76bb3af5b27b782c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
