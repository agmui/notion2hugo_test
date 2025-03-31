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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2WHTA7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFCwvV8VngN8MlR%2BKICzlimRhd%2BSMLLBC70OFLkFmSuZAiEA2vnoJyxrUWMRiCGcpbU5kC3q5dXYzlBkkXelyn9KFRgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF2vQhxCpLxJELzvSrcAzdG0neoAgkzIxfAyxFZWR9tFKn%2FPYiV6bNIGUV0zUlvedcuIDi9qjRVfnC0DFSI0Ky5gvhmb%2FItU4e%2FHjoHhsMIKMJiEPd5CXqqWL%2BUc72xS%2FtBiYlRswxc9RDO451X1LI36z4%2BDc%2BwWGrKCD9jxUuesxDJZTmU6pYexT1b8g3KaxDUfCl29DjxRedGjqW2Lii2khPHsJ7G%2Fda0hM2SIThJrGIkOesSZrY5b2JeTj6cqEXij5RZvbhpGximeFqwlI5Xp7mlVYFeCUpYFhNYjBMA4Nceks8t0wsnJ9zfxY%2FB1TQxIy515SBkjvFRkqAM%2F%2Fdd01Gusq8dHs3TdRkrgyyYU7qqJKOVMBWDrtVsI8mWvtwL1ztpWz31eBi%2BAsweLhP4aZwHdwUqgc5CzX7MgT6tpmcvwxSfbDObLZQr%2Bi%2FCybPDRzcw0bG8094%2FdfGA%2F42KQCKK1S0ok019nCNLapG9%2FKZX3BP9uTmXH7%2BUb5MDtlyCeetK2H78%2FS2v0Nhpe6OVtXojJu42WCOkgLjgIGbINvYN88%2BXvPTm4LF5x3H1UCs0TpVXK79sC5oNCZ4ZlUJwy3yVMde6PPd0eJvgLI30MEKj0rtjTGYPN%2F%2F5fFLWqHBLJseuko94g5AMMKrmqb8GOqUB8%2ByB4tMmkDRCMIWE%2F6ll%2FrYwNUN6Y1dvwNcux1uWSyY2WdlR07JcjmJPU5r8fr2vNJ4i3LFjMdTunf%2BrK8eGL5d0biWoHts1H7eXJndJQgciYgWV0i%2Bjx1NrsNja0RC1fN6MbonMyc8Lz5LpYvC%2B32sIpHlD%2B1%2BUzV%2FSVfMZRQggLXPoUV2yxruvjbjbp%2BwxV62obwJ0%2By5dj8%2Bj9d2RT4KpKqtU&X-Amz-Signature=48f6ecd791761e89b1190f8bab52aa545de306a1be4bdd159b6bfd6e5da8bdf1&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2WHTA7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFCwvV8VngN8MlR%2BKICzlimRhd%2BSMLLBC70OFLkFmSuZAiEA2vnoJyxrUWMRiCGcpbU5kC3q5dXYzlBkkXelyn9KFRgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF2vQhxCpLxJELzvSrcAzdG0neoAgkzIxfAyxFZWR9tFKn%2FPYiV6bNIGUV0zUlvedcuIDi9qjRVfnC0DFSI0Ky5gvhmb%2FItU4e%2FHjoHhsMIKMJiEPd5CXqqWL%2BUc72xS%2FtBiYlRswxc9RDO451X1LI36z4%2BDc%2BwWGrKCD9jxUuesxDJZTmU6pYexT1b8g3KaxDUfCl29DjxRedGjqW2Lii2khPHsJ7G%2Fda0hM2SIThJrGIkOesSZrY5b2JeTj6cqEXij5RZvbhpGximeFqwlI5Xp7mlVYFeCUpYFhNYjBMA4Nceks8t0wsnJ9zfxY%2FB1TQxIy515SBkjvFRkqAM%2F%2Fdd01Gusq8dHs3TdRkrgyyYU7qqJKOVMBWDrtVsI8mWvtwL1ztpWz31eBi%2BAsweLhP4aZwHdwUqgc5CzX7MgT6tpmcvwxSfbDObLZQr%2Bi%2FCybPDRzcw0bG8094%2FdfGA%2F42KQCKK1S0ok019nCNLapG9%2FKZX3BP9uTmXH7%2BUb5MDtlyCeetK2H78%2FS2v0Nhpe6OVtXojJu42WCOkgLjgIGbINvYN88%2BXvPTm4LF5x3H1UCs0TpVXK79sC5oNCZ4ZlUJwy3yVMde6PPd0eJvgLI30MEKj0rtjTGYPN%2F%2F5fFLWqHBLJseuko94g5AMMKrmqb8GOqUB8%2ByB4tMmkDRCMIWE%2F6ll%2FrYwNUN6Y1dvwNcux1uWSyY2WdlR07JcjmJPU5r8fr2vNJ4i3LFjMdTunf%2BrK8eGL5d0biWoHts1H7eXJndJQgciYgWV0i%2Bjx1NrsNja0RC1fN6MbonMyc8Lz5LpYvC%2B32sIpHlD%2B1%2BUzV%2FSVfMZRQggLXPoUV2yxruvjbjbp%2BwxV62obwJ0%2By5dj8%2Bj9d2RT4KpKqtU&X-Amz-Signature=392d56858ec6ccceee0e32857fcf4de321d4ea36c54d31e57838b47a9c94e5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKEMVFGN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGH9Lzqf%2F040KAJ%2BRr9V%2BipUIByNQvz3QVpA8jawV7WaAiEAy7nHUJyenBZKDQk6rFRJaMy%2B1LGybKv6%2BJSLOcsn1CAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnYaXu%2BLTczULRvlircA%2BIZhkAvNxynq8HGSEay1%2BsVdsR11MMDG3WUTA1Q3MAxJB28wrGr9bVdkhKQi8IWN0CIvMexrkCGWKnIXKkjQGXzunjjnMVngn2WTfyKE4y5hfE9H12egg%2BMM59PEiqrn%2FUuBIDWyxiCySANWYamX8AoWVT%2B5D%2FylrjLS5L7gXafZPtmikLBQ8bKXD9zoDdq2e%2Fgh%2FwM0PPUrWKmHNftXKk5dkZjMFo4F8BLo1FljBzSVpkkQJ45ngAWagfOSa27%2BIVh2tywiveuP%2BJpbgKJvSvztw1vsYJlsY7eOvfbvNIZHVyWpLjy1j%2Bd8%2FgqnNyV7Xfmo8p%2FNkm6ob%2BQtw4FDrX0X2FDETw4S%2Bh6IAxeWHYrm9StWfPJqzvor8rTQB5ce%2BcHufoBeVoXwpc2y5P7mGf%2BJ8leqh0kG%2BdnnZt1pQei8fstgj%2BEcZjQhAOxF%2ByAhhdoptWVHEGVNZ6mBpuQhv4QNDQZTaXlm1Nb7pwnHhyUhYZMjY7ILIj5nSStziZxbOQZhcJOzPnRvVlOI%2BWtahsJuXAEpW4ZuTovcp2s%2FLjpcg6MBh%2BPCb5gzurOaumy98ZEHdfHDH1tb%2BL4%2BYUiQvkEAMt%2B8PFwhGR5Wv1bSsHzUzNrh8B6uWMHFK4bMJbmqb8GOqUBm6ubZraK3VOJCrDrCvELq6XLOMEB6mAJjWESE5BXwmUGZ6BXgtZ1EfSLEqzB6mgWPOw1bMmh6baDHiuKDR55rIzbL51mzln7iPx9RWFwKdWz2yJ6nDTw6hhrso2%2BD12wMXkOFYyCWKH7dFWgH4KCA4xwh50YER6xx4Akp1TdHbi5eZMnVH%2BPKlo6HAdEylNGnh7YM3I%2F6%2FOU6NxL5SHY%2Fqf9s0fN&X-Amz-Signature=61c5f8ab85e91137aad1514891c225684098e124f0576907317c1942bef28981&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCV2257L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICGq09xNxuyZP4BsPdYSrN73Agfq9lqfEcAQ1GW493ShAiA2T7Rw5XW%2FLR%2FqrkH0XN7u0mJI3CPNbyU85TnmLMoTfCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRy103LtfHzJVUal2KtwD4Z1cOMtG1KI%2BHUF5gbBAVzRG8w8Jw1AYMgBxYrpuQw7Y%2BCFYPhT7Lx%2B30y7favAqPV3C%2FJHo7GnE%2BWr36rr8HvfVD%2Fqr%2BjBHDiWHN59pTAxyw8eGKL0k0qwPUXuGX%2FybVFgFUnzf8EsLPsC8OprEtbAyg6kb2%2BAwDH9wS9by7Ikx176Md6l9YCMwsHyP5NIu0V7Kt4miXv24fQpFAd34Hosh%2BCnzcSyRpoRb9SJu%2Fp0AqTbOW7vrvoAa6f1EGxvOfh5p76RxOEwyLLcdoZTHIHyEZwnk9wtgG26U%2FuK4iKIJjmZS8MX3z8sXMbCub5ySmMOVuC8X%2FTw8bFQEdAA588M7H3kL7L9SLMCx6QdAfJjckdkDkpLLCKIzlRqGMFQOY9Mqny2KCjpFZKLX5cu3uF0JuqMjJ1bJJGLYMlGuzSlE0zfCmQkNiHRZxH9tO1%2FQm6elhMuconYN4lYy4Mg28LkG5vzqG45%2B1kHFC86IZs4zX0eeAiLmWxMHkvfMIBbYiSJqZPVgVQ3%2B83vrSrl2yKo7JS%2FcLad2Ndjkcs4oRX%2FP13QoUSbGYp5273mba%2Bdk2tmcXCK06MNSKBIbByF62CTWJ6NlnRJRPpNxdyoqBEld5QgclgKnM%2FZ2JCUwi%2BapvwY6pgGP2%2B7QXU%2BboqZNZwoHloUS5UU3bk2N010LLQO2veKMZFh2TD8Tjno0KNtExDlmst65tOQbg4AQeSD%2BE%2BxLO67Nnzvl4qwKdnehDsZW17cqObHhlLLNcfa8joFsooJN1SzeTIN4wcLi1IePncKH4pQGfwr%2BSnfRSbS4U%2BqTwLiW%2FqM2zrCF2IvTRYaDHK7Hp43cBf2i9ReJdKoxVB%2Fun7dcjfkm9dPE&X-Amz-Signature=39b41d85fd7aca988f3b3cadcbcdfcc5b83ad4e557f26d1b29a387ae98163f77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2WHTA7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFCwvV8VngN8MlR%2BKICzlimRhd%2BSMLLBC70OFLkFmSuZAiEA2vnoJyxrUWMRiCGcpbU5kC3q5dXYzlBkkXelyn9KFRgqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF2vQhxCpLxJELzvSrcAzdG0neoAgkzIxfAyxFZWR9tFKn%2FPYiV6bNIGUV0zUlvedcuIDi9qjRVfnC0DFSI0Ky5gvhmb%2FItU4e%2FHjoHhsMIKMJiEPd5CXqqWL%2BUc72xS%2FtBiYlRswxc9RDO451X1LI36z4%2BDc%2BwWGrKCD9jxUuesxDJZTmU6pYexT1b8g3KaxDUfCl29DjxRedGjqW2Lii2khPHsJ7G%2Fda0hM2SIThJrGIkOesSZrY5b2JeTj6cqEXij5RZvbhpGximeFqwlI5Xp7mlVYFeCUpYFhNYjBMA4Nceks8t0wsnJ9zfxY%2FB1TQxIy515SBkjvFRkqAM%2F%2Fdd01Gusq8dHs3TdRkrgyyYU7qqJKOVMBWDrtVsI8mWvtwL1ztpWz31eBi%2BAsweLhP4aZwHdwUqgc5CzX7MgT6tpmcvwxSfbDObLZQr%2Bi%2FCybPDRzcw0bG8094%2FdfGA%2F42KQCKK1S0ok019nCNLapG9%2FKZX3BP9uTmXH7%2BUb5MDtlyCeetK2H78%2FS2v0Nhpe6OVtXojJu42WCOkgLjgIGbINvYN88%2BXvPTm4LF5x3H1UCs0TpVXK79sC5oNCZ4ZlUJwy3yVMde6PPd0eJvgLI30MEKj0rtjTGYPN%2F%2F5fFLWqHBLJseuko94g5AMMKrmqb8GOqUB8%2ByB4tMmkDRCMIWE%2F6ll%2FrYwNUN6Y1dvwNcux1uWSyY2WdlR07JcjmJPU5r8fr2vNJ4i3LFjMdTunf%2BrK8eGL5d0biWoHts1H7eXJndJQgciYgWV0i%2Bjx1NrsNja0RC1fN6MbonMyc8Lz5LpYvC%2B32sIpHlD%2B1%2BUzV%2FSVfMZRQggLXPoUV2yxruvjbjbp%2BwxV62obwJ0%2By5dj8%2Bj9d2RT4KpKqtU&X-Amz-Signature=e472430093457ca12948bde677822370795859af17c1284594886e25f45bfbeb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
