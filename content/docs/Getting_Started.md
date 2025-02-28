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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7A2ONJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD0UMyqiP3QbUbSl44f6lNHN3lJbk8qj8vEZhdFpkdU1QIhAPmtcd6HXG4qUu%2FB1d06JbCekSs76%2F8YOIKwisQwFx2bKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDcFd%2FLX%2BGw%2F39L8Mq3AM8k30DxUsSaRVFrjBZoI8RI2O7Gvg5zkGzaK8MZWpVQ0RGbGvfk%2BwU613pag6YZt8fAh%2BkBoMJyNbmqRgnvdf%2BO9nTosAmTFmdF2tJ495xL5tsQhH4pgCSXBHH1VuXw6%2FIRkhwTAVmbdsFePQFPGf%2Bo%2BcLiwvpAbtkvvs00lljE8OmZt23XWPThri8bxvI1IjH6ITnxZEtw%2FZdmOF%2BQl6pqhGzocs341f0kR%2F5ZwqUrtaxMhgB48h2aGnTmQn0O9cmvgsd%2Fr5r%2FLBpZ7TXcJ%2FBl3DZATW%2FlRfbSQPRNQrrMo%2BDuZFAx3U9kdj4siJRAitDRhvFxr0dnGQmEUaTLPvtoprNmGFNzloLtc8gu3jRDw424IL51Y%2FKWp1BzRBc%2FoQmVPmJKGuKtt2g8%2BxDMj%2BeJX7%2FVOud7RW6w%2F91pDK9K2jvTXXk%2BVbJdQb3zLoPO2z0EeXDqA2mhg%2FV5h2OveHDHP3hXCcKG%2Bmxh3Ggan2OT2HFj5hFy5UIWHJ34x4ig%2B2q2cOlamh%2BN5iZuTJILUx%2F60%2BLnpqmT0glH0rz%2B2aVmHqJXz4JiKYoYnI7HBeNS7T40UiUjyY5GbZ5PFtfwAqsR9J9B18Zs5J42btRrZGbJFpfnw%2FTAXW%2F5rnjPjDCi4i%2BBjqkAXecGWWmQD2vyCRD8WlmatsMTR11VjgOVGwG8h5E5J2MJSfQ%2BRnwoWYNubXVbGUTa43AgauLXgznBOTkBI9biY561xwr3DIdMmHi6xy8WxWzc3B5nCHW%2FKxifiUBkyKMx9sGytovGYhyCOmRuSf6x13aDf7HPHk7Uv1RAw4d5APUAqDco%2FRBkgndSz2owIEDBFLK98Pcud7FkirpSiOo4Ovs7Af3&X-Amz-Signature=478e8097d250d31bc1ca1ca1c505a1af0a0ebcccd1e1bc1ebfedf4a56407ebb0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7A2ONJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD0UMyqiP3QbUbSl44f6lNHN3lJbk8qj8vEZhdFpkdU1QIhAPmtcd6HXG4qUu%2FB1d06JbCekSs76%2F8YOIKwisQwFx2bKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDcFd%2FLX%2BGw%2F39L8Mq3AM8k30DxUsSaRVFrjBZoI8RI2O7Gvg5zkGzaK8MZWpVQ0RGbGvfk%2BwU613pag6YZt8fAh%2BkBoMJyNbmqRgnvdf%2BO9nTosAmTFmdF2tJ495xL5tsQhH4pgCSXBHH1VuXw6%2FIRkhwTAVmbdsFePQFPGf%2Bo%2BcLiwvpAbtkvvs00lljE8OmZt23XWPThri8bxvI1IjH6ITnxZEtw%2FZdmOF%2BQl6pqhGzocs341f0kR%2F5ZwqUrtaxMhgB48h2aGnTmQn0O9cmvgsd%2Fr5r%2FLBpZ7TXcJ%2FBl3DZATW%2FlRfbSQPRNQrrMo%2BDuZFAx3U9kdj4siJRAitDRhvFxr0dnGQmEUaTLPvtoprNmGFNzloLtc8gu3jRDw424IL51Y%2FKWp1BzRBc%2FoQmVPmJKGuKtt2g8%2BxDMj%2BeJX7%2FVOud7RW6w%2F91pDK9K2jvTXXk%2BVbJdQb3zLoPO2z0EeXDqA2mhg%2FV5h2OveHDHP3hXCcKG%2Bmxh3Ggan2OT2HFj5hFy5UIWHJ34x4ig%2B2q2cOlamh%2BN5iZuTJILUx%2F60%2BLnpqmT0glH0rz%2B2aVmHqJXz4JiKYoYnI7HBeNS7T40UiUjyY5GbZ5PFtfwAqsR9J9B18Zs5J42btRrZGbJFpfnw%2FTAXW%2F5rnjPjDCi4i%2BBjqkAXecGWWmQD2vyCRD8WlmatsMTR11VjgOVGwG8h5E5J2MJSfQ%2BRnwoWYNubXVbGUTa43AgauLXgznBOTkBI9biY561xwr3DIdMmHi6xy8WxWzc3B5nCHW%2FKxifiUBkyKMx9sGytovGYhyCOmRuSf6x13aDf7HPHk7Uv1RAw4d5APUAqDco%2FRBkgndSz2owIEDBFLK98Pcud7FkirpSiOo4Ovs7Af3&X-Amz-Signature=e0597191bc65f69fc2b6805b248ef7e1c9f02b3dab9f2aa521fe273a8cc23010&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKVJPCM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGQ%2Fih0ytcqWiMDxN3ifaQjZQoj53i71MzjpytgjCxr1AiEAlj3JrFXbPZ2Kxc9UwUlhh8YhPJjmvcTQ9IRUGdVd3b8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXhHr9QmGvjbEY8QircA7RuCjRyGvPHfnBxThT%2BxMv0%2BoQN%2FD0FKpVqwcTaiDQEdMG9EICLpINLZvFOh3Cg9AAsO5TGTCcfGEAj8axjM%2FKEN%2BOGz7JcqUE4gsm5fbYW9u06fJ1CyX%2Fi9sUrL5JEwnHOO3tlE7FPkNVur2YyjwHTVqXpQzdKm1W1vW3wyCA5tNka2K3J1tB6k0iwgKlZCnwiqrTTHXkDO61NCFI7k7OPAA6s0txhwzAexlqe1%2B4UCYu%2FUEIkNP8Mh45IjMkJqa7GLySn1zcHHV2sJVyHyPEE8vIznO9uH%2FpTofxVC0200A%2BnlOKfuXxLN6jAPNFF09cgGHItWpIAl64MKysbtMLovJ%2F0FHUdS3C%2BcInf207DwEVjwTGyFZRwhCyHxOI%2FIrs20AvK5swRB5u4874h1c2TPW7Z5PYefJ%2FEtcpYe3dgK3A%2FQpbbRRcMdHMYcWXBbyMJvNVv3GaH1pQ%2BNkdjXj76l0aCiRSGzNRSWidf%2Fcm9rMQjz1wgbrNyXg7290%2F5WrmuKolAqso4kWY7TxZ1HJ5dbZVl1vfhhKQYXsjlpJ%2FqJfF1XrJONkM4fE333AiWyENk4LK%2FNfR41ZPT5wtGBIUmDloy2vvoxaFT85VFSnWOhX8NR%2BLJzwrfl9hfMOaLiL4GOqUBbT7%2Bzdyth4m70OByzvaL26JRbhsVDh0S5EIUN9ppKM5OuY9nrZJGST2YxPYpR%2FTbDB%2FIAq1OXzYeH9U5TJ91jI3NIZ7Y7mY8aih%2Fw05Z2mSZWtVnXdUDijdfS5Zhuse0Fo8uGthdmyQ8aqVotZNEmRRDcWPFaBmtRMV%2BFFO3VFlCUImwjVSpWz0BwXH0bZDb9OGRFb27K2lgyax17Q7yKQKB65yj&X-Amz-Signature=912da3acc7f64907c034899c79615478b0edbc73aab962ef10d163b6224ce20a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X32J75N%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGC1%2BRuR5wec7pVF6aHOQXxlBkt2pWY1DrkI%2FeUk7YqJAiEA%2FX47pp5%2BEBGildbBciOAjkE9Mn%2BtmrDJEX%2Fq3qM5Z2sqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuFpvkU%2BvNc1l%2BV%2BircA59B2hsojf4vUmJmhZ%2BvdYjLRn94TqrckTuZtN1MRQa9mXsJ14e1aL%2FQq9x9jC4ymIgTJD32yFmX7a%2FpgS%2BjZad%2FtE1CBmRzXowC4MLNGYj%2F%2FqRf1e6e3BW8tsjWdPG6UHOAxAqZIhdbOrnXwe7bZs7nsFdGdi7UjWvfM4JhvferqgidammLcqJKXjJ3qvza1eua1F5yTwEhhjpgR2OtANodeF3YSP0DsYjYbqMSbnoIFh9fB1cmlZ6uHjNsJ33GAsIGeh0egskkTpa55HbhUY4BIMeV2Aw2aT0rQsFlrtXbO9yzW92FO3xcT12%2F5O7f%2FBNx9LD5B6exnDQ9kM5j0pKHDBGbBxJn%2B7%2Fh60BkEe%2FuTO%2FGbDs%2FlzQ9LDVTucX1wQbcezxDImgug%2BoTbeHZoVBnSuvCfnKRroTBSkQQQHci1rJsMEOB4y7aYwmqCJCOX9Ua87cMNRTfDQOaVORGlqV%2Bkhu7YrWpY1yscfH2suRjDhE6pL9PdE5NMCB0yKyFShXUkbouDxyNMtkKJ7VZydl7l3TnxZPVCrmGTmHRqfBnkgjSv2amVCFSXYBAPOeUPkZeaqMuHBXfBb2oJUZ2YuUsSKjQcn9IDuXtqLaF%2Bieia2CH5cIcaLfklTGAMPCLiL4GOqUBxRJ1qwz7KqhC%2BlNtUvJ%2Bj9PTTnWCLaO9PLXdDpvunSTw%2BoQMiFPiiWhJmPalik60S5FOPIue3m2frrhxjLrH6Uvh0qCryznKUFU8jGmxTnk1lNKe%2BHbqSUbkSZxNDkikT%2FKT8V3rWGS8bNpj%2BedePj6F9teOVxh8Ao0NR0qA2MoBBm2%2BGKOdkekB%2ByBgemAuWL8PeR5SoW817Q%2BzqEvlfx7yDMyv&X-Amz-Signature=842428d21163ab67937c1a9877f6201797b6a37b8ff4b6b7de8325a01d119852&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH7A2ONJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD0UMyqiP3QbUbSl44f6lNHN3lJbk8qj8vEZhdFpkdU1QIhAPmtcd6HXG4qUu%2FB1d06JbCekSs76%2F8YOIKwisQwFx2bKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDcFd%2FLX%2BGw%2F39L8Mq3AM8k30DxUsSaRVFrjBZoI8RI2O7Gvg5zkGzaK8MZWpVQ0RGbGvfk%2BwU613pag6YZt8fAh%2BkBoMJyNbmqRgnvdf%2BO9nTosAmTFmdF2tJ495xL5tsQhH4pgCSXBHH1VuXw6%2FIRkhwTAVmbdsFePQFPGf%2Bo%2BcLiwvpAbtkvvs00lljE8OmZt23XWPThri8bxvI1IjH6ITnxZEtw%2FZdmOF%2BQl6pqhGzocs341f0kR%2F5ZwqUrtaxMhgB48h2aGnTmQn0O9cmvgsd%2Fr5r%2FLBpZ7TXcJ%2FBl3DZATW%2FlRfbSQPRNQrrMo%2BDuZFAx3U9kdj4siJRAitDRhvFxr0dnGQmEUaTLPvtoprNmGFNzloLtc8gu3jRDw424IL51Y%2FKWp1BzRBc%2FoQmVPmJKGuKtt2g8%2BxDMj%2BeJX7%2FVOud7RW6w%2F91pDK9K2jvTXXk%2BVbJdQb3zLoPO2z0EeXDqA2mhg%2FV5h2OveHDHP3hXCcKG%2Bmxh3Ggan2OT2HFj5hFy5UIWHJ34x4ig%2B2q2cOlamh%2BN5iZuTJILUx%2F60%2BLnpqmT0glH0rz%2B2aVmHqJXz4JiKYoYnI7HBeNS7T40UiUjyY5GbZ5PFtfwAqsR9J9B18Zs5J42btRrZGbJFpfnw%2FTAXW%2F5rnjPjDCi4i%2BBjqkAXecGWWmQD2vyCRD8WlmatsMTR11VjgOVGwG8h5E5J2MJSfQ%2BRnwoWYNubXVbGUTa43AgauLXgznBOTkBI9biY561xwr3DIdMmHi6xy8WxWzc3B5nCHW%2FKxifiUBkyKMx9sGytovGYhyCOmRuSf6x13aDf7HPHk7Uv1RAw4d5APUAqDco%2FRBkgndSz2owIEDBFLK98Pcud7FkirpSiOo4Ovs7Af3&X-Amz-Signature=5e95edf08e3b480148c0d7611e94bf6a27287f148d2e862ee0036c3416d75ace&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
