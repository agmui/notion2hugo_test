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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNK3VYE5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAImSwTSwkDrqQ23kkCmsb6T8n0eaxl6XOX97D50Rf8AIgO4vHm2zAfY3xo%2FxCY4KPUrBwTf8kvI3IWM%2B1RElTmO0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9Hlp5TwBtIb%2FE9FyrcA%2BX33%2FqvkVuOsHjc1JssHVM%2BLSG490UH42ILPsf%2B8DvlXnoQg3nrcodPGBNfC7oP%2Bz%2BShV0T0ThOAY1BsFP%2FHlXpDjXtBW%2FvvyZTmsJFMX8kweUXOiDeap%2FEKYepiuFy6lwnQ6QcZYAWnOTFyWXtAMGmzpXha6awQiWfAMmzfwwOUCQCyNSBMwf9PYJFuDeyKa5Tl3ZgGpTTcaZDrS26mFqblAoeT9aDjpp5Vhd2MdRzAolDZo1ZRSGIlpDaBQCDXHJHRwRgG4LbtfhkEnMauzDvBawO1uRcqPrMzDgU%2FFfQleNqFKuPuZGNjzFBVoPoMLZcdaWLPrSm86rWaIRVITKSR90nT4doxHDWKyZr7lh2YodOIz%2BqyGX5v4ZW1e9iWDQDanbXwiRuHspPs5wgwzkj3SYEh3wCXDJ%2BwZS3Uq063DkRiIeMPdp9ZwVhPnYsn6Ek8A%2Be9m9W6ocaykFxL%2FGaEKMUGpIqKBAF6LlZrGBAMUg11dk1WIH8vMCdq2tXWQxoayVqMj%2Bp3TQk03tlgyuS%2FFoVWFZoqfWVlGKqMYJwvJ1hek9AzgULHp%2FfEqcXZmyJeR6lpfl%2FTVd4wnZLCys0cuWXyPUE1dEgWwUyx0Ph8h3iFFUqv6yNTRu%2BMNy%2BoL0GOqUBkLnMmii03PT1JOEY0ozwTf9b4W8yZY70EgTFBSzls0aQObsGPb%2BkA%2Fy6gzqVZ5HJc18U3IuZpLNdiMPY0yqmLcAH5mEdXwGUnvyvfb5LWCFDNeSdmnTwIoEWAIRh83MzQ1Yr2RE%2FkDoX%2F9l%2FZ0GpdsupIKg7I8tn%2B0hICos9tB%2FxOQ%2FIqkHN5FgkqUxXbkUX0vtnxvrhQRal5OtE94A0uZiQoJRG&X-Amz-Signature=d9dff3c7a209a6389f66728ddc9c98ecd4199527baf64d945fdf18e69ad225b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNK3VYE5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAImSwTSwkDrqQ23kkCmsb6T8n0eaxl6XOX97D50Rf8AIgO4vHm2zAfY3xo%2FxCY4KPUrBwTf8kvI3IWM%2B1RElTmO0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9Hlp5TwBtIb%2FE9FyrcA%2BX33%2FqvkVuOsHjc1JssHVM%2BLSG490UH42ILPsf%2B8DvlXnoQg3nrcodPGBNfC7oP%2Bz%2BShV0T0ThOAY1BsFP%2FHlXpDjXtBW%2FvvyZTmsJFMX8kweUXOiDeap%2FEKYepiuFy6lwnQ6QcZYAWnOTFyWXtAMGmzpXha6awQiWfAMmzfwwOUCQCyNSBMwf9PYJFuDeyKa5Tl3ZgGpTTcaZDrS26mFqblAoeT9aDjpp5Vhd2MdRzAolDZo1ZRSGIlpDaBQCDXHJHRwRgG4LbtfhkEnMauzDvBawO1uRcqPrMzDgU%2FFfQleNqFKuPuZGNjzFBVoPoMLZcdaWLPrSm86rWaIRVITKSR90nT4doxHDWKyZr7lh2YodOIz%2BqyGX5v4ZW1e9iWDQDanbXwiRuHspPs5wgwzkj3SYEh3wCXDJ%2BwZS3Uq063DkRiIeMPdp9ZwVhPnYsn6Ek8A%2Be9m9W6ocaykFxL%2FGaEKMUGpIqKBAF6LlZrGBAMUg11dk1WIH8vMCdq2tXWQxoayVqMj%2Bp3TQk03tlgyuS%2FFoVWFZoqfWVlGKqMYJwvJ1hek9AzgULHp%2FfEqcXZmyJeR6lpfl%2FTVd4wnZLCys0cuWXyPUE1dEgWwUyx0Ph8h3iFFUqv6yNTRu%2BMNy%2BoL0GOqUBkLnMmii03PT1JOEY0ozwTf9b4W8yZY70EgTFBSzls0aQObsGPb%2BkA%2Fy6gzqVZ5HJc18U3IuZpLNdiMPY0yqmLcAH5mEdXwGUnvyvfb5LWCFDNeSdmnTwIoEWAIRh83MzQ1Yr2RE%2FkDoX%2F9l%2FZ0GpdsupIKg7I8tn%2B0hICos9tB%2FxOQ%2FIqkHN5FgkqUxXbkUX0vtnxvrhQRal5OtE94A0uZiQoJRG&X-Amz-Signature=cc664c38e71aa7de5f8474e0fd5954883e8606cdb222a78d0edaaa79ebdb8491&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FMTXMG3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9hB6FOQo%2FMfuvqME4384Yy4M03Di2qdTf4dHw9cAIwAiAC%2Bon3AVuO68JzYz1DYQyYNhBdfrj0L2GG6SF5RfbuMyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Zu63QMeHBdtyMM6KtwDZMUFsfgDf76%2FcVAhJCF9PGbA8z57mgavSz3WeD7m8ou%2FB0ou9rGsQZvP7P%2Fr6hlVTEcRYiswWfINEHpnHZeB4yQl4j8WPM0WjSUbDAdIIuODEQN4%2BtLwoZrDGMW6sE%2FR4E%2BrFMES4Z9Ir2116locgQ7wyEGtwN%2FyRBweKbxwS7lMNgQomWR5JuU%2F007SeiROJuJIjoYdIFUZoV66Alz%2FZBeqMEyvhi8z9nbC2YspliyGvv5%2Fce2bEYjNAhMKz%2FskBRMTlO140e0x4UVeb6jbzRQYb7ll1uNCc7BfJ1CMD%2FMYCaaell2rdqqz2sST16qRuxc4ZXOouDDvEMRlx5laq%2BsthJsVedssNBdsjnTAJPzDio58iEMVt%2Fq2bRO9%2BHzYILums5cRGYmUm2iUO2SkBUNg90O0gbrLpTD0Bgge49SvjlLJvxtt%2FfoLQPY4ARW3FAcMfOAcw9eXbmwbl4HqoWHKUCeCb5yjKIDxDvM0v35k0SzELFKgHipS8tYc5U4wT59oUKqNLMn404%2BCauC1p1p5Co7L36ohKjhWo6xD5J3E0QBV5JJHZdqO9qE8Po6GoLY3ggmoxDUYktsehRMMtrJ3u3I%2FsebDS7As5RqsSJyA2Rub3ecCYzL1BSwwyb6gvQY6pgHJ%2BNzQcN6DQ7GyeilKm1HIwdvBXYihSboQhS%2FiWXSSudY8JmcXOcmj7PY0jXk8cEb4zCTGa9luL0Ekt0JOTL05P9wsNeEa4ZczSL9Ysqg39BBFwMaWk1gCrnk0UtD7n%2Fo6Ir5NVlZ7tab98saypRYrWrp4%2FsXAthk9IG9M5Ht%2Fd%2BNC70NJHts5ulHcwW7yGMFZplrfpzgLE5ufQv2%2FPFh2otjoQj3H&X-Amz-Signature=601aebaa65111cceae7b717cfe365477978e0d236267fade8d1e39063be9efc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TSYOKKB%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO9EZVHP3pBmLqpHVpwanCHMH%2Fq6N3jbqrtuxLQGrX5wIhAKzqaw6UP1xf1bHTLf46eJir0zthe8Vg8ieZZuRTWMvzKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FZmojiDj6ncaIfzAq3ANGjflBZzM9tYjsvQIBQDvlLeAn6ul1MjUT5ymu7oSdkoIOP1pN%2BvnBbRDBjEKKs78DmKjWLbXcSEImUKzGHCzy%2BSOBSxYzcP%2Fkkv2BG06po9r5t24Nesk5DMoo8ZHXonWgFWZiNEzVP26U8%2FEEZpJFrh1v5G%2F%2F00kr2l7vpvOB8rV7EuKPyZqk5OZZqMNQhIFZHq74G2VKRQnyIZ%2BU2MEeFU5yGbZdkEi%2FJDg9HoN18VQ3ywVLTzImD2Yu31Eh17amiOuU%2BV7kYTQyHubNYNAm20IFDqbkJOf7HYJdaquNtSQNuLO%2Bz1jO086fuUQ3aH96JZubgnaSIjkRDABIS7gqr2GNy6D%2FwtbSJThDBiraTIVOOgFwK%2FusDEQg0Gdx%2FbIqeBveVlq82wWcTC4g3QYqyg41WuaNzUEom1%2FYch2LbOK3IQVdtqZZ1N1mDHcopIMrXM9hv1P78fEnjIGlkGrT8tZ2sLCLZ4RJq8DUhITjk9o2ADXJuAHMaeUd8xvjl77MRpUmTHUlbnCQWiLV%2BD6smjSpWC%2Fy9ba9tj0wM95%2FeANW9xm66fe1gaxDxNZD5dfz1T8ak74ET%2FQ2ket7rdVtpHTwZdARG%2FA9hRZ0eXgbcH2mmgxzOPiiHYUlrDC6v6C9BjqkAZTRg7T8qQK4F%2B63MTLWVfoqrtDtlA5aj4zNA4%2B1fqIJ09Nsax3Qhn7sh38iXZrb%2B%2BPIgzr%2F%2BeMEtd2Kgb6m3a3VAn48kNzvykQmYHbXpDQzXEkbFweAjgEkoqR5fhh%2BPohE%2B36XERzw7dXKfrCkVspDe8QRlpK54oCXXSWRRjPw7EYIOD%2Fgeaq0KA3g0dte%2BftXiZy73zheIfKmxMwT3yWpjkAV&X-Amz-Signature=72109f476c58ede2af2d198888e66a7b58f8fcaeba10f61305e93b5e836b52a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNK3VYE5%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T040838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAImSwTSwkDrqQ23kkCmsb6T8n0eaxl6XOX97D50Rf8AIgO4vHm2zAfY3xo%2FxCY4KPUrBwTf8kvI3IWM%2B1RElTmO0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9Hlp5TwBtIb%2FE9FyrcA%2BX33%2FqvkVuOsHjc1JssHVM%2BLSG490UH42ILPsf%2B8DvlXnoQg3nrcodPGBNfC7oP%2Bz%2BShV0T0ThOAY1BsFP%2FHlXpDjXtBW%2FvvyZTmsJFMX8kweUXOiDeap%2FEKYepiuFy6lwnQ6QcZYAWnOTFyWXtAMGmzpXha6awQiWfAMmzfwwOUCQCyNSBMwf9PYJFuDeyKa5Tl3ZgGpTTcaZDrS26mFqblAoeT9aDjpp5Vhd2MdRzAolDZo1ZRSGIlpDaBQCDXHJHRwRgG4LbtfhkEnMauzDvBawO1uRcqPrMzDgU%2FFfQleNqFKuPuZGNjzFBVoPoMLZcdaWLPrSm86rWaIRVITKSR90nT4doxHDWKyZr7lh2YodOIz%2BqyGX5v4ZW1e9iWDQDanbXwiRuHspPs5wgwzkj3SYEh3wCXDJ%2BwZS3Uq063DkRiIeMPdp9ZwVhPnYsn6Ek8A%2Be9m9W6ocaykFxL%2FGaEKMUGpIqKBAF6LlZrGBAMUg11dk1WIH8vMCdq2tXWQxoayVqMj%2Bp3TQk03tlgyuS%2FFoVWFZoqfWVlGKqMYJwvJ1hek9AzgULHp%2FfEqcXZmyJeR6lpfl%2FTVd4wnZLCys0cuWXyPUE1dEgWwUyx0Ph8h3iFFUqv6yNTRu%2BMNy%2BoL0GOqUBkLnMmii03PT1JOEY0ozwTf9b4W8yZY70EgTFBSzls0aQObsGPb%2BkA%2Fy6gzqVZ5HJc18U3IuZpLNdiMPY0yqmLcAH5mEdXwGUnvyvfb5LWCFDNeSdmnTwIoEWAIRh83MzQ1Yr2RE%2FkDoX%2F9l%2FZ0GpdsupIKg7I8tn%2B0hICos9tB%2FxOQ%2FIqkHN5FgkqUxXbkUX0vtnxvrhQRal5OtE94A0uZiQoJRG&X-Amz-Signature=73b1dfff5e29196f919baae0b42ec2a4a467c3a0a3857d7f5e8ce25136ff03bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
