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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YC5Y5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHMRbzJA7KkPuh51zvhK6YkFJPPdZknmBEOi6iOx%2BhBgAiEA2ou8pZB8mWLCH9EJTGTHFrLRN4d4X7DP18DM4gnhEisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkLUMf63iBYAnK7GCrcA2A4olQYQbTUJhNK1wFHPb3f8NnYsOvpOup4O2YqmVmsYN8pC3%2Bu8i4AuyuJussMDae0D4cNovl5r7LzSAqnz7D4tmWKK%2BhusKGctqFOCZFv9P%2B5lIa5bvOWE2rwEFHCe8XFg7On1CVlFzljGC1IxF5wkB3dVuDAiig8o4zCkBo427wIYvN36IJhExKM09KJsl8StxLWg8k0bipPYDlzFN%2BVnysnFI5LWWyodduNveYQA8d%2BHvkCtSBQzngkDHoOL7S3P4K0X3RBSFAoE2Fw02Q6xtQAA9YVBWlGNz%2BtPhDdEoNsHZtgSlv913NvV18wRsFlUQNA9TP4Wj%2FlPf3LhQEfugvMqQ0N5SY20h5dJl0fxIH2HOmJOA88LMxdGoE%2Fh%2BGL%2FV0FWjDzplLlsfskcWeIrgq7zMyGOszB6OmQNmLB4vuVQjze2D60Z%2BrtLpa%2F1%2BjKn0FC7wak2Bq1EvWzwRca%2FVM4h8Qo%2FPsISfDx5RtgMK%2FkmDcyjByDsGwpZtwMuxRNso5hdolqmn5mTOhd0T0SDopWjibVP9N2iIL0wimzgVxcQyM%2B%2Fmi0%2BKllTOH2QP0zybhSjRcN8OUEr34lVWvjNWdPhbI22J5tfqQHexu6w1hJNQvnKH2OOYjtMJGH8r4GOqUBHvaPGPVBmZkwYQ5aP3%2B2MMfvrhBP4tXwHnLcyhfMPS%2F015IDVRKaDp06XSTf0y%2FSS%2Bp%2Bm6uqlPprQIZ4xsdh7ZF%2FfbtyN5%2FsnXGLBjFvykQ9ejOqP9SadmWgg1XKNRBmmc72pYmFENW6pEAVNW7LGCUY4SLiw3GdbG%2Ff9w%2BySl6aH3YkE%2BjQ03QUaWse1X0C0BZaGJdRtT8T9VI9U05CkQuIP5MD&X-Amz-Signature=7dedab923e777524897ce946a9c30969498c6da68791c4e9b4f738e8129f8409&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YC5Y5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHMRbzJA7KkPuh51zvhK6YkFJPPdZknmBEOi6iOx%2BhBgAiEA2ou8pZB8mWLCH9EJTGTHFrLRN4d4X7DP18DM4gnhEisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkLUMf63iBYAnK7GCrcA2A4olQYQbTUJhNK1wFHPb3f8NnYsOvpOup4O2YqmVmsYN8pC3%2Bu8i4AuyuJussMDae0D4cNovl5r7LzSAqnz7D4tmWKK%2BhusKGctqFOCZFv9P%2B5lIa5bvOWE2rwEFHCe8XFg7On1CVlFzljGC1IxF5wkB3dVuDAiig8o4zCkBo427wIYvN36IJhExKM09KJsl8StxLWg8k0bipPYDlzFN%2BVnysnFI5LWWyodduNveYQA8d%2BHvkCtSBQzngkDHoOL7S3P4K0X3RBSFAoE2Fw02Q6xtQAA9YVBWlGNz%2BtPhDdEoNsHZtgSlv913NvV18wRsFlUQNA9TP4Wj%2FlPf3LhQEfugvMqQ0N5SY20h5dJl0fxIH2HOmJOA88LMxdGoE%2Fh%2BGL%2FV0FWjDzplLlsfskcWeIrgq7zMyGOszB6OmQNmLB4vuVQjze2D60Z%2BrtLpa%2F1%2BjKn0FC7wak2Bq1EvWzwRca%2FVM4h8Qo%2FPsISfDx5RtgMK%2FkmDcyjByDsGwpZtwMuxRNso5hdolqmn5mTOhd0T0SDopWjibVP9N2iIL0wimzgVxcQyM%2B%2Fmi0%2BKllTOH2QP0zybhSjRcN8OUEr34lVWvjNWdPhbI22J5tfqQHexu6w1hJNQvnKH2OOYjtMJGH8r4GOqUBHvaPGPVBmZkwYQ5aP3%2B2MMfvrhBP4tXwHnLcyhfMPS%2F015IDVRKaDp06XSTf0y%2FSS%2Bp%2Bm6uqlPprQIZ4xsdh7ZF%2FfbtyN5%2FsnXGLBjFvykQ9ejOqP9SadmWgg1XKNRBmmc72pYmFENW6pEAVNW7LGCUY4SLiw3GdbG%2Ff9w%2BySl6aH3YkE%2BjQ03QUaWse1X0C0BZaGJdRtT8T9VI9U05CkQuIP5MD&X-Amz-Signature=a93b4ac4b3c027f26065bcde6d4c7c6de601a9bfc79dd3ee9b2d36ca7f8ab181&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRS2FONT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC2inufdBhOIVipF0sgL3R9pfxIS0B2p1Z9YI9Ti%2BkcsQIgXeMJtO%2BNU9MUAzSnGE57jLqEuwrkcu%2BMJkF2HwgWTGgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZyUHIC23X6dZyprCrcA7EtP9Mw9z1mjO1AXuKny1NtxX0eXxXlIO8oZ4WRpXUB3iCtzrT6OtYXZkKsv6JWJjYpAv%2FZfzhs%2FS2%2FjX0AkFF7uBWr8wfDoc0m64Q3YZ%2Bj8Q0pt4b3WZqQPI0BfeKsglTPNu6no1VG%2Fd5pTy%2FJ5XvBpV5qqFUAMWRQntWRvkFotpZ%2BWV3GBACTqnrxmSBb7%2FOieHDNoHqRJhvaFjdmbnOK0YZNiNGnL3u6W5XN4fWlwL%2F5KV9bBZWSCE1DNSzraJflwwNJPEIqlDwYnP4d6J%2B9i1ibU5623aX4r8iDWgMp2S196ndpQLFI3eSIt7TozHdBY26i9b876VNA0lT66seJeUXiflfcHuGLu%2FIkSbb1gQHvC9SPbiFzrGZjYqEmu%2FEV50MF4TNU%2FZnYRvtEN2KFOmfQr3b8RhxosGFXI0V8NWCaBFYyIoxqyW%2F14ScrbHlNe0WANYxNUd4vPs9j3vecGF0KW%2Fboyrymn1emDnIZKtaQ6wIVcYeA%2B%2BS%2Fruy4yhopfg7EplVeeb8EhnORRlppWsrKnU%2FUTwyMKgAtQUcU4KE02%2BmZGTCXvxQwBgubEKRUCWR%2BNWod59qeBBXbAplVq%2BztdQ2DNdwSugo71KG4i7wJxj9SWxSLYWeBMMCG8r4GOqUBeVD5buXcPmuDHmsY%2FpqR3yDqCFGFWqezsY%2F2p7AnoT2fgsWn7bWDVCJNIp2u8J5riQA8uj077TjPaGj%2BHpRxc0aWSGJ9nbFZuRgIXm9GywS8YvyeZWXNefnGWryKpwaex3oAnHUtpuns%2Fz2hgQgzn7IxyQSL0FRLcU9rZFfuOWh4FwdGuA7inc4Ui9nDNvSbC1oT0MqPl7VnoQROJAhVhZMoAarK&X-Amz-Signature=5f790ff13093eade9294b8faacd28b24c8ed9d49df6b840a2a5d18a8dd410a7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BX3R6L%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIF0rVkQHR%2F2mt1mXCGt8AeY4OXRlnTN%2FBWg93i%2FbpDnAAiA5vr8FOQh6fQNl0rQJmLhsSbXLfsyFDn1CHYkD%2BfKFtyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhMKTb320ntn3qbofKtwDXHuO85NkX0C5jrdrDW1wxTYgUTGl6Z%2BaSPb1AxKIidK%2FkKO6KNgobHC2js7151cV3oHZ7xU7XVmasMTkFbXOcf4BJPKAi%2BFEvqUaUmcIJtGqN51UmUi4QrcsZvJLZQHY%2Bemi3gF7U%2B6mrO1dkrMFFElM50wOVHJ9lNyJ6XEZppylElAOdTQ%2FCvhb%2FOCsqCYTWwYPuk94J%2B2d%2F7QMZqp8sxdyerVoy3JQYmGmDu6PFHMiG1s0tdFCzm7njP5eusBVeHIiBwiPbVpPnsZ%2BKO7GjQLKxNb0bcRVuSHPyuh9Xs4x6NDikC2bX6LzsFXD3yzxQ8m9LXe1RjyWcoHeXVeeuL3EdPLOVHgVbgZZrTPy%2BoediqADa%2FWzcLtvyLQRDXf5vO2xsXcyiatEppPiFWanEAwI%2BhkObEJfv3bxNuLxrfWHnZ6rlg9FbvH%2BaU%2BXqrTl11xsehOxU3R2BAICE2Z8cTtxrqsHwvI85xdwLog0bOskKKVtP3umLnJolDyuyutEcjzKPvC0JbPKrZ%2FEZKsz4G33kk4NFWLqhG7n3oh4ea8Bv%2B%2BUhkoPIB3mZFtb5EMvELld%2F2gQpVZuQOr3yHbd7m7buoNrGtcNMQAZHOHZvfeBqyvIbMNLpChsmLAw6IbyvgY6pgGItGpDVsX0%2BkFmZgKHcI%2Fp94xx079PUITXKmYZqt%2FMXGQ4oz3C2bWDWpVJipCrp8yYeSTEKz1KRF8VUGNk7aTE8IpgOSl%2Fg%2F%2FvUISoQcCJwAr8zpd9qA8l4e51wI5utqT0QALRD%2FG%2BeSgq3iuaBDgXHc892F2kCGgNdzuWkU6QNSaMiLSgcDy30OtlDr4ZXJVPL6FkVPNZNshQuaA1h3pGswkmp26k&X-Amz-Signature=17fbb1cf066795624b76d83533918bb5919dbcf6b6a6c603e0d3ee375efcdf93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52YC5Y5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHMRbzJA7KkPuh51zvhK6YkFJPPdZknmBEOi6iOx%2BhBgAiEA2ou8pZB8mWLCH9EJTGTHFrLRN4d4X7DP18DM4gnhEisqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkLUMf63iBYAnK7GCrcA2A4olQYQbTUJhNK1wFHPb3f8NnYsOvpOup4O2YqmVmsYN8pC3%2Bu8i4AuyuJussMDae0D4cNovl5r7LzSAqnz7D4tmWKK%2BhusKGctqFOCZFv9P%2B5lIa5bvOWE2rwEFHCe8XFg7On1CVlFzljGC1IxF5wkB3dVuDAiig8o4zCkBo427wIYvN36IJhExKM09KJsl8StxLWg8k0bipPYDlzFN%2BVnysnFI5LWWyodduNveYQA8d%2BHvkCtSBQzngkDHoOL7S3P4K0X3RBSFAoE2Fw02Q6xtQAA9YVBWlGNz%2BtPhDdEoNsHZtgSlv913NvV18wRsFlUQNA9TP4Wj%2FlPf3LhQEfugvMqQ0N5SY20h5dJl0fxIH2HOmJOA88LMxdGoE%2Fh%2BGL%2FV0FWjDzplLlsfskcWeIrgq7zMyGOszB6OmQNmLB4vuVQjze2D60Z%2BrtLpa%2F1%2BjKn0FC7wak2Bq1EvWzwRca%2FVM4h8Qo%2FPsISfDx5RtgMK%2FkmDcyjByDsGwpZtwMuxRNso5hdolqmn5mTOhd0T0SDopWjibVP9N2iIL0wimzgVxcQyM%2B%2Fmi0%2BKllTOH2QP0zybhSjRcN8OUEr34lVWvjNWdPhbI22J5tfqQHexu6w1hJNQvnKH2OOYjtMJGH8r4GOqUBHvaPGPVBmZkwYQ5aP3%2B2MMfvrhBP4tXwHnLcyhfMPS%2F015IDVRKaDp06XSTf0y%2FSS%2Bp%2Bm6uqlPprQIZ4xsdh7ZF%2FfbtyN5%2FsnXGLBjFvykQ9ejOqP9SadmWgg1XKNRBmmc72pYmFENW6pEAVNW7LGCUY4SLiw3GdbG%2Ff9w%2BySl6aH3YkE%2BjQ03QUaWse1X0C0BZaGJdRtT8T9VI9U05CkQuIP5MD&X-Amz-Signature=9fd645e0872a163f4a32600ebca1bc03ab2219b90214dcbf6dac969039edd1be&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
