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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666L26OQM%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtPSsd6Yo0Jk9e4qJrCKdyDRRl7lXvkIZBw6ya%2ByNjxAiEA7GzLKR7USOFupeZN02Pd8DaDCNAHVlCWNwKHSUvLODIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNGn4oL%2B1cEBOzFDSrcA35fPzI6liLizAwaN7ecyvUuOdWieeU7Qpgh%2B7%2FiT0Ci4blbX%2FuFdTGF%2BrJ0XNwxSnVnxdfQR502wlPN4Q6AKdAm2oA97WTdpuuQjngbgVyx3fvDF%2B3I6BcNa2j%2F6YsDgzlvlJ%2Fay%2B9q0kC2a35ZoKsbwJaKc2DD2rXsFvJ1bw0ilotxcYDi1KcwRtCgPL7QoTtxBzJtByTTUB9vf%2F%2BSFX4VHmXsL2Os1HAoJ2bjE%2FLhwlKnn30QOKbvrujV3E5hufNCZgnw2sT0P5a0aVQO8fCI%2FdfygG8LRZ1Qg4hqs%2BlIGNLCua%2BIZPCSm49lxnku5nodAak9QnBA%2B%2BCZ73zlz9TiYEOeZ%2FhM1JLq7%2B1qADuVDvPR7FpoRmjXJVxh43RmIc6JjMTSN2nzFOXZG%2BcwbHPhvc8NPJdKlRmGJ7YRLBpPBrhjbW4p7RbIr0lXv9o3lMFNgqIi%2FgGmAIu5ltFDNzXSGRZjMGX69GZpMXVO4%2BHqBeceel54Wwa3t7x%2B%2Be0rJMaJGX3KJbcQZ1B1cMklHiJfmaxhsNisRg%2FulAOxLGPHSbYm2Tt93LpzXh2kKt6RSCeJmhklIq%2Bz20s5J7N%2B%2BIPQkxhwdiazOTMLuG1g7ZOQHV4lmh4JzG77oL6pMMr69LwGOqUBKMOY2am0%2B5YjpX7qjNYPqQEVQHJ%2BFqvYdJAB5rQ4eCG3pP81hrAqPPcXSzbfrzE8A7omuShXCvDGSQZmHH86GQUfXjewTXBspiSPHFvYi7GaicdNc2e380DHaslVWvXU61VB1SY6%2ByIw8Cev3eiA%2FvFkzpYO68nF%2Ba2Tb2Haew9Cp5ojNP%2FnPhffS2iqEXl7UBmukcZhnsaf%2By5plFlTmhXoPU6B&X-Amz-Signature=8d5c36927fd6fef6b8a4fb204aff06e2186b9cad90543c4f1a2bc72e4b6cd00f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666L26OQM%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtPSsd6Yo0Jk9e4qJrCKdyDRRl7lXvkIZBw6ya%2ByNjxAiEA7GzLKR7USOFupeZN02Pd8DaDCNAHVlCWNwKHSUvLODIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNGn4oL%2B1cEBOzFDSrcA35fPzI6liLizAwaN7ecyvUuOdWieeU7Qpgh%2B7%2FiT0Ci4blbX%2FuFdTGF%2BrJ0XNwxSnVnxdfQR502wlPN4Q6AKdAm2oA97WTdpuuQjngbgVyx3fvDF%2B3I6BcNa2j%2F6YsDgzlvlJ%2Fay%2B9q0kC2a35ZoKsbwJaKc2DD2rXsFvJ1bw0ilotxcYDi1KcwRtCgPL7QoTtxBzJtByTTUB9vf%2F%2BSFX4VHmXsL2Os1HAoJ2bjE%2FLhwlKnn30QOKbvrujV3E5hufNCZgnw2sT0P5a0aVQO8fCI%2FdfygG8LRZ1Qg4hqs%2BlIGNLCua%2BIZPCSm49lxnku5nodAak9QnBA%2B%2BCZ73zlz9TiYEOeZ%2FhM1JLq7%2B1qADuVDvPR7FpoRmjXJVxh43RmIc6JjMTSN2nzFOXZG%2BcwbHPhvc8NPJdKlRmGJ7YRLBpPBrhjbW4p7RbIr0lXv9o3lMFNgqIi%2FgGmAIu5ltFDNzXSGRZjMGX69GZpMXVO4%2BHqBeceel54Wwa3t7x%2B%2Be0rJMaJGX3KJbcQZ1B1cMklHiJfmaxhsNisRg%2FulAOxLGPHSbYm2Tt93LpzXh2kKt6RSCeJmhklIq%2Bz20s5J7N%2B%2BIPQkxhwdiazOTMLuG1g7ZOQHV4lmh4JzG77oL6pMMr69LwGOqUBKMOY2am0%2B5YjpX7qjNYPqQEVQHJ%2BFqvYdJAB5rQ4eCG3pP81hrAqPPcXSzbfrzE8A7omuShXCvDGSQZmHH86GQUfXjewTXBspiSPHFvYi7GaicdNc2e380DHaslVWvXU61VB1SY6%2ByIw8Cev3eiA%2FvFkzpYO68nF%2Ba2Tb2Haew9Cp5ojNP%2FnPhffS2iqEXl7UBmukcZhnsaf%2By5plFlTmhXoPU6B&X-Amz-Signature=a55ba39de5a35b4fb137b56e481af86b59b2645cbe536b7197f880f124a6d9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653BLLQRG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcbBSVSoSSzXM0niMEtQ3HBsBAEvAXKWS1LLyAA0JCkAiEAgl1IstXdumwlqNMcGt3rN5iFB0IGRFVKhCK%2FrZ9Vk1wqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdzXX02iKBK0oNSjSrcA0Rh8S7tEHAN7mgET3SGYSJBk1mpNAlj17Auksak7iI0QoHXCUGPpvcPyXobtzWrGImwCoFGPQdqbzhe6wQ5SaMTCzq%2Bc2aYhj3navXTXNLAvFBBC92IEIqh9LjyPblK%2F6FuheqX%2FBiGNFia9dL3pdO7VQzEBjMTmfF%2BvZQn4lQl9qmIIm2gb0LDKhcVdrBtj5BoOBRpjRwd81962YskAQN2Kc%2FiD4imeIaJGeg%2BPcFINMRzdVquPPClbZQ5IkEZuXayOYJC0icvt0KyxT502oNOt3Q%2BdN2ogtL6ysSfgnQwV5CR0TYyMnWyvjOwTo59waMnsnVaC%2FY6jCpDuW5pBKlp732Fji3vHWAuQWoRsAtdQf6qTUG7YD46Lx18hLrXKNhEpc8gm5N4S3Dx1auiXqcRuBWzxwKaLjSZsKHbKkTgn%2Bpad8KXh%2F47OPAZVP13UX7uthSvIndPv7SCg8a%2F3wLPKKl5VVHkIdjc6U8VB3CcuOL5fVhGBi6PkIsyoXWVuEy63iN1ldFbRCrLVzlJeXOZhSQGeq8VwCfVHJ5XoDcC50AQzgrcRxY%2FhfzkG1kIwVDh9aZNJhLDznersgzcfy8WHkEvVvMMg3fOEdY7x%2FZsgqEkUixA9ohv8kB1MM369LwGOqUBqkhQcQAE2gWjf%2BOCbqKtUuYCtZyj%2BlDmVI7USci2cdlNGVebHJsPEZOkZH4yhVuyIVwUYsY4RXol0Ga1tI%2Fc8Qr%2FlNNn8p41C3PeY8E1BtlcGGMln5RW4w%2BMZbgIW%2Bh9hrsO7wYSuYkrmgobDBgQtYw12ia5jAUl8ylsXwInXOjzybrQXPiMd9kD5LP5VAh0LB%2BKWd%2B3Wwy8Gm5LL3zuQ5aZg6At&X-Amz-Signature=f334d4ea56f721f14b43999e3c5f7cf06b94dc5091a0048f46750969e082e6ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HXYHLF%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUIQk1WY3mg4ZZ59Kt2BHyP%2BN8Fnk9HMEF0B4tLaRGTAiEAvudF3QWrtX1dZUOSu4YqpU%2B6aB%2Bg45O32V45%2F5%2FPtG0qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoxuPRKTEErWHW1gCrcA3NP0313AZMtbZ56mkxR1uxpGuTKdIMtwxNd0mR6CdqBifMIXXXHBfW2vXCMyUGEu3%2BEBxzDgJnyuzIuk922GwiogUcL5LJp%2BL7SUNOSEfy8n1sNgY3Fl2kx8qgfPZIgWMM8aMVrCkLeSLvZrmmv2HAQhQY11ediY0hQPhFzya0fWcejQLg6XBwAmMG7%2FJennhFxZ%2B%2B7SCG0YjCSDUSKx7ylKlAAC2UehnAB14qU3MIF3LLqkZ%2BT702Fd5QD1NRXJWQXWfD8GiknlxOUEYRp0f%2FIUn5RAIvLkKuvVm%2FILS0x9ECPpBO6TuVgXsh2FY2VjJLp8Ly5wJp8bQL6VaI6Io94IT1qcR97Dov%2Bf%2Fx16vcOQErX%2FoSJ69dfCMf24mP3zISA3ofwzPLJbv2IeS3nt0Apb%2FnlEEvnFFTq%2BCUfQjPUW83qZb6pqQGI9cQn8Tujqp76YzbHHYarW8RN9shipbjskbhd%2Fm6QC1R0C3YygvsIBwA75QlYIoqgg4nlqYxHMHsnbM6o2MnlE4LHFkuPwmOsoSpwpbZwWVDEGRXzhYlbg88LBVBVApR9BS3AsE%2F1dXa%2FFLr5T92gfdh9p4xX%2FiPgNOGqPpcXO4t6TtR8pudP7%2BOflI9O3eGDluv3MLT69LwGOqUBQhOh9AerAlSXzzCFHgzabxN%2BilpkUcz4zGBBmc4BU3R7fQAZEVTJHy0vouX%2FBgr1%2B7QHB7ywM6x%2BBbHAVeo%2B6saR%2FCklrmZAkp5LM74O60wOdfgK%2F1OO6bvd%2FqKpBx0ELUG5oxXF5lWzvf1dNSb8mUv%2B04knfO5NcR%2F3OLKe76A%2FyuIaDBnvIC3A1LfoRI1vemZbkTuR%2BRYHXk571rvh8GBjSIkn&X-Amz-Signature=a8f1643bcda30582315a779b2410fd89c56fcbffa3f968725ae04145550aaded&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666L26OQM%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtPSsd6Yo0Jk9e4qJrCKdyDRRl7lXvkIZBw6ya%2ByNjxAiEA7GzLKR7USOFupeZN02Pd8DaDCNAHVlCWNwKHSUvLODIqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNGn4oL%2B1cEBOzFDSrcA35fPzI6liLizAwaN7ecyvUuOdWieeU7Qpgh%2B7%2FiT0Ci4blbX%2FuFdTGF%2BrJ0XNwxSnVnxdfQR502wlPN4Q6AKdAm2oA97WTdpuuQjngbgVyx3fvDF%2B3I6BcNa2j%2F6YsDgzlvlJ%2Fay%2B9q0kC2a35ZoKsbwJaKc2DD2rXsFvJ1bw0ilotxcYDi1KcwRtCgPL7QoTtxBzJtByTTUB9vf%2F%2BSFX4VHmXsL2Os1HAoJ2bjE%2FLhwlKnn30QOKbvrujV3E5hufNCZgnw2sT0P5a0aVQO8fCI%2FdfygG8LRZ1Qg4hqs%2BlIGNLCua%2BIZPCSm49lxnku5nodAak9QnBA%2B%2BCZ73zlz9TiYEOeZ%2FhM1JLq7%2B1qADuVDvPR7FpoRmjXJVxh43RmIc6JjMTSN2nzFOXZG%2BcwbHPhvc8NPJdKlRmGJ7YRLBpPBrhjbW4p7RbIr0lXv9o3lMFNgqIi%2FgGmAIu5ltFDNzXSGRZjMGX69GZpMXVO4%2BHqBeceel54Wwa3t7x%2B%2Be0rJMaJGX3KJbcQZ1B1cMklHiJfmaxhsNisRg%2FulAOxLGPHSbYm2Tt93LpzXh2kKt6RSCeJmhklIq%2Bz20s5J7N%2B%2BIPQkxhwdiazOTMLuG1g7ZOQHV4lmh4JzG77oL6pMMr69LwGOqUBKMOY2am0%2B5YjpX7qjNYPqQEVQHJ%2BFqvYdJAB5rQ4eCG3pP81hrAqPPcXSzbfrzE8A7omuShXCvDGSQZmHH86GQUfXjewTXBspiSPHFvYi7GaicdNc2e380DHaslVWvXU61VB1SY6%2ByIw8Cev3eiA%2FvFkzpYO68nF%2Ba2Tb2Haew9Cp5ojNP%2FnPhffS2iqEXl7UBmukcZhnsaf%2By5plFlTmhXoPU6B&X-Amz-Signature=c641b39673b100990cf131bbbae1333d8a38360f259db3fa8cec0cfd19e67371&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
