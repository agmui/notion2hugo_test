---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGX3YS5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeKRt6hpagjb1QLXPkRzAnDsETsXZMu7qjqM4gpKO0gAiEA5M1cKTnGyXYGQcBA8DbALaLD2MLSQbTLnzp7oGB16KAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn1WYZR7hCGEnVmTCrcA6%2BJKgEpTo3a92BlHeYXfo%2FQ0zR6H5vb%2BQpdLTqm2cRnDb2dHb8ZMsUmy5DCSIH2EtCfRCm0%2FWJZZ%2FBZUGLHJCt%2BdRxueYv5snCti3WvYi%2FNaiaD8zD13fCAGmwpwKGqjKDwePadDuHpeqoKqQMagwM03bPbUPAWCALWjcdTIPPJZ1ikOVh3L0UMOH%2BXAbTc54gg0TCcRWfNe9UD%2FQMkYE2cttifo8IPf0EL5I07bRQAhODqjAoXL8BXO%2BSxnNj3II5fwdF342KRZ8H2ZodmCEHlFAtiCWGz0x5MUN70TXsZeeRCJ41aSRdOIYL%2Bgj%2Bj8dzPTE3X4IM8GLgfseDuASyn9eQ%2F4yqGONbLKvJ9g42kSbNOt43fCfldGlCckJbWGVdP%2FXDbFOi8%2FMS31wU6Ck8Nl7SkYcHSlTJ4HzD1ncm3rzWFoJRLmv7vhxzQgR%2FAx3DoI%2BxlgKdz6KP7oqp%2B5vmzaNve%2BC4NMLqUcaVyAaLPYc72pWrsTfnvEn4FMOuRy2rQAeIqyloveSxTAmiq6%2FptnEvaabq3FE2G4qm0QgTd5jRFk61lxjVDW3CrVJiJRz6LXV9P40sZk%2F4%2BNmVimxXGkc0f%2FNpfYrjgJNg3fUY%2FpFtW4xUJX3UFg54dMJ2xlMIGOqUBGehkI55WMA0PFJ84Ohr0qcAx9%2FMifX3OQ06lX%2BT0LBnd0nAb3RjpOiEzVVNx082WRGLkbPhR7laaNjXJOlnCAeM%2BP0hpFtg7SjvI4N72wkdIMeTGctrkwBZas%2F0eHtWi4FBICcqN4NAsmYN74%2BN1ZP0j%2BoOIqYwJNMiPivy2ViQRp3nMM3q5uBPxPP3RwcP6H1XJeQTzF3zQa0TQdrKs8VrWfSL%2B&X-Amz-Signature=b3ca25169199324ffd404b5a298549e60a5fb62dc492342d42217be2c3cbe2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGX3YS5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeKRt6hpagjb1QLXPkRzAnDsETsXZMu7qjqM4gpKO0gAiEA5M1cKTnGyXYGQcBA8DbALaLD2MLSQbTLnzp7oGB16KAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn1WYZR7hCGEnVmTCrcA6%2BJKgEpTo3a92BlHeYXfo%2FQ0zR6H5vb%2BQpdLTqm2cRnDb2dHb8ZMsUmy5DCSIH2EtCfRCm0%2FWJZZ%2FBZUGLHJCt%2BdRxueYv5snCti3WvYi%2FNaiaD8zD13fCAGmwpwKGqjKDwePadDuHpeqoKqQMagwM03bPbUPAWCALWjcdTIPPJZ1ikOVh3L0UMOH%2BXAbTc54gg0TCcRWfNe9UD%2FQMkYE2cttifo8IPf0EL5I07bRQAhODqjAoXL8BXO%2BSxnNj3II5fwdF342KRZ8H2ZodmCEHlFAtiCWGz0x5MUN70TXsZeeRCJ41aSRdOIYL%2Bgj%2Bj8dzPTE3X4IM8GLgfseDuASyn9eQ%2F4yqGONbLKvJ9g42kSbNOt43fCfldGlCckJbWGVdP%2FXDbFOi8%2FMS31wU6Ck8Nl7SkYcHSlTJ4HzD1ncm3rzWFoJRLmv7vhxzQgR%2FAx3DoI%2BxlgKdz6KP7oqp%2B5vmzaNve%2BC4NMLqUcaVyAaLPYc72pWrsTfnvEn4FMOuRy2rQAeIqyloveSxTAmiq6%2FptnEvaabq3FE2G4qm0QgTd5jRFk61lxjVDW3CrVJiJRz6LXV9P40sZk%2F4%2BNmVimxXGkc0f%2FNpfYrjgJNg3fUY%2FpFtW4xUJX3UFg54dMJ2xlMIGOqUBGehkI55WMA0PFJ84Ohr0qcAx9%2FMifX3OQ06lX%2BT0LBnd0nAb3RjpOiEzVVNx082WRGLkbPhR7laaNjXJOlnCAeM%2BP0hpFtg7SjvI4N72wkdIMeTGctrkwBZas%2F0eHtWi4FBICcqN4NAsmYN74%2BN1ZP0j%2BoOIqYwJNMiPivy2ViQRp3nMM3q5uBPxPP3RwcP6H1XJeQTzF3zQa0TQdrKs8VrWfSL%2B&X-Amz-Signature=551346f1b280ed3e617bcb120b10179f06ad63731d4cd145cc8e47575834380f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGX3YS5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeKRt6hpagjb1QLXPkRzAnDsETsXZMu7qjqM4gpKO0gAiEA5M1cKTnGyXYGQcBA8DbALaLD2MLSQbTLnzp7oGB16KAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn1WYZR7hCGEnVmTCrcA6%2BJKgEpTo3a92BlHeYXfo%2FQ0zR6H5vb%2BQpdLTqm2cRnDb2dHb8ZMsUmy5DCSIH2EtCfRCm0%2FWJZZ%2FBZUGLHJCt%2BdRxueYv5snCti3WvYi%2FNaiaD8zD13fCAGmwpwKGqjKDwePadDuHpeqoKqQMagwM03bPbUPAWCALWjcdTIPPJZ1ikOVh3L0UMOH%2BXAbTc54gg0TCcRWfNe9UD%2FQMkYE2cttifo8IPf0EL5I07bRQAhODqjAoXL8BXO%2BSxnNj3II5fwdF342KRZ8H2ZodmCEHlFAtiCWGz0x5MUN70TXsZeeRCJ41aSRdOIYL%2Bgj%2Bj8dzPTE3X4IM8GLgfseDuASyn9eQ%2F4yqGONbLKvJ9g42kSbNOt43fCfldGlCckJbWGVdP%2FXDbFOi8%2FMS31wU6Ck8Nl7SkYcHSlTJ4HzD1ncm3rzWFoJRLmv7vhxzQgR%2FAx3DoI%2BxlgKdz6KP7oqp%2B5vmzaNve%2BC4NMLqUcaVyAaLPYc72pWrsTfnvEn4FMOuRy2rQAeIqyloveSxTAmiq6%2FptnEvaabq3FE2G4qm0QgTd5jRFk61lxjVDW3CrVJiJRz6LXV9P40sZk%2F4%2BNmVimxXGkc0f%2FNpfYrjgJNg3fUY%2FpFtW4xUJX3UFg54dMJ2xlMIGOqUBGehkI55WMA0PFJ84Ohr0qcAx9%2FMifX3OQ06lX%2BT0LBnd0nAb3RjpOiEzVVNx082WRGLkbPhR7laaNjXJOlnCAeM%2BP0hpFtg7SjvI4N72wkdIMeTGctrkwBZas%2F0eHtWi4FBICcqN4NAsmYN74%2BN1ZP0j%2BoOIqYwJNMiPivy2ViQRp3nMM3q5uBPxPP3RwcP6H1XJeQTzF3zQa0TQdrKs8VrWfSL%2B&X-Amz-Signature=a603430a1684c7447aaed5b35cf3a3bd542bf9128660007b6b9646c2a32fa614&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGRQ5RH2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuvifyC%2FTvDNEpCBE9%2FYcabPI%2B4gZHxKq8uWEOwAXJ8AIhALsNiOjPLFaezQRprN3OrDrGw8AyMzqHiYJKTtIlZ0%2BvKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEX8QSczurFy8Unacq3APZeEz%2B92CGCRgSsKOITgiARnnWcSI%2BtZXkXghTAlwzibJ96LVLkiRnWqzkv%2Fq8z2SXAhOnn41lUsbLEC%2F2D3652lYRQc1UnMFdRsAsmzl%2FNdhtMhLipocw9OftTseuSXxPlWQPv8nfGQooAaqfzcE%2FoubUfrYImpcxSn1Hw5H89pjQONuVsm5%2FzLVIkIMLIw1wp7WOJdIZalMNG4J2lzYP5MTB6F%2FHwjLtC9rHQ8rf%2FS%2BqlQDssRddKzuuWsLjRHs0WWY2n5PDIjUeaff6lQpY56NjJ4FnRm1Rl0hNkZie9b1zxuWvxnI2w%2Fcg2witcN6rODaw5NFEVkqDuIyGKBr8%2Bk0jQYNGXAUulu%2BsLPwNP6UgLetdxANxs9h8JSZhGNDM0LetBQhNr72j4JLlbSY0JpxMMpD9rvyA255VueHoz6oo2Ho6CSqFQSVBSmbSLz9Mly0W6%2FFsuAoVaYKuhOSnvaQaEi4IbMZES5xJznKn%2FGzj1kJMIW2nJG9z9EjluHhNd7QA%2F2OkamVE4mh9G2Ag9WMQqlZ0fOanE5%2BdskOxayPGgsQqaMpha37ivrLnwEC%2FMAWoW4kFshYNM%2FkshmeauMaxIqwrKh%2FCJOKzGNpew9O66GRrH6XutVD1SjCHsZTCBjqkAbLGCPAH0Bno3QOnqSTK8Z%2B6PHUc93rL9EazgcfUDnRzd3rOxASlx1LZ82sXT6Yaiq4CAXJUawWxXbsCSbYMgPfQlzXG6%2B3LaRtC2lprxWrJ%2FG2UQkdVWz2AppwAQl1C884fxhQVgvJrAftru46EsE0Yj2UvEK%2FOQ567tY9xgUwzSdK4G1jxfGw3oho0aIL5XZ89VkIevgxOihn%2FOne96u8j8ypz&X-Amz-Signature=8c4adf2ded4cd43c931ef81cabcc08b43875f6d54e3ad2ef555507b5e9f79251&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBGOANY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDBbxLTX71MIQPnSTqPxT750N0lgqv0%2BMemwoODKBQTgIgPm7WAQeN9V7KoEa81ylR%2B0cI%2B8rwvDAzNXKlfjRioOIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FePZaXYWn9uXzeFCrcAz6HnOOH7NFDnSn%2FZ11wsO3rqaO%2BAvB1jWpCbkczabcRKePQ95jS8jkDDbu9mNxQDgu1JiGqJemRdZGFV5wa2X6oaskf8FRAU4l%2BS8BFNyyEynG6oXW6gvA7yZAkIo9yfxFBoPAMnXnWjhXuh4p%2FhcKbsiQut20NTrBtTKU7fQD0ugmANf0l3KywfcZ5UklU84gg9DPXAYlOubRDG3Q%2BmcHCSi13s5oq0UQVzhP2lFd6IFMWdw51iPvWRimoAjohwWc8YpYaZjVEEbR24jPM9Cevk7700qpXnSo1Mi26ZK4Skc%2B%2B8XfU3ibjxn62glfPjI%2Bqubh%2B3nV8c3fhCOSbSzXRzw%2BgP11BqBwjZ7ZNzDwG7ThbaDm%2F2N10j%2BPMQbcTg9ym4Ox1BPbycJmxba3FIp3VcNeXtUxJYvNkZ5kdfdYZczPRgFjgYHMIC%2BTsE48YsbNAtye3SzJApUPLpda72nTzZjPRT1ddajdcb%2BKDhHFQgeb1FkJd9ETd%2B13Bb6XM1Uwt62yAfHnX1gSAk%2FCFVhOU7K9MgJ0PzrbtVIvIo6BOQCHGt6wUmJfeRXUiKQn1PBVczLaeENglwWGOTOG8E9N6t8StFBp9%2FjX2wXHGX6WC2iSLIG2nGwLzYTlIMNmwlMIGOqUBisYkjm6mnO%2BNcOysX3%2Ba0R03glSHMEc87H6jj7yc4w8eP9kEVXYqm8VbCNcENcfrAjGrdLXf%2B%2B%2FUAfrRRZjb3FBkHkjizEpEJkE7B6%2BvK%2B1ewzqc6xfIeX3Y8To2bFo%2B1Tr2uxd%2FeWrSHGE4huiOlsk4RjtQBeaX%2B2MBWQQoyK2PVR4kfRvL2Os4%2FeaVnJ8qA4X5rOeTCzh1q2mIoXJJw%2BXoKM3U&X-Amz-Signature=3a1c51f92d24f2aa6333675146613dbd8e8c6798cc40e0d28d49e0b7289b0e48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGX3YS5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeKRt6hpagjb1QLXPkRzAnDsETsXZMu7qjqM4gpKO0gAiEA5M1cKTnGyXYGQcBA8DbALaLD2MLSQbTLnzp7oGB16KAqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHn1WYZR7hCGEnVmTCrcA6%2BJKgEpTo3a92BlHeYXfo%2FQ0zR6H5vb%2BQpdLTqm2cRnDb2dHb8ZMsUmy5DCSIH2EtCfRCm0%2FWJZZ%2FBZUGLHJCt%2BdRxueYv5snCti3WvYi%2FNaiaD8zD13fCAGmwpwKGqjKDwePadDuHpeqoKqQMagwM03bPbUPAWCALWjcdTIPPJZ1ikOVh3L0UMOH%2BXAbTc54gg0TCcRWfNe9UD%2FQMkYE2cttifo8IPf0EL5I07bRQAhODqjAoXL8BXO%2BSxnNj3II5fwdF342KRZ8H2ZodmCEHlFAtiCWGz0x5MUN70TXsZeeRCJ41aSRdOIYL%2Bgj%2Bj8dzPTE3X4IM8GLgfseDuASyn9eQ%2F4yqGONbLKvJ9g42kSbNOt43fCfldGlCckJbWGVdP%2FXDbFOi8%2FMS31wU6Ck8Nl7SkYcHSlTJ4HzD1ncm3rzWFoJRLmv7vhxzQgR%2FAx3DoI%2BxlgKdz6KP7oqp%2B5vmzaNve%2BC4NMLqUcaVyAaLPYc72pWrsTfnvEn4FMOuRy2rQAeIqyloveSxTAmiq6%2FptnEvaabq3FE2G4qm0QgTd5jRFk61lxjVDW3CrVJiJRz6LXV9P40sZk%2F4%2BNmVimxXGkc0f%2FNpfYrjgJNg3fUY%2FpFtW4xUJX3UFg54dMJ2xlMIGOqUBGehkI55WMA0PFJ84Ohr0qcAx9%2FMifX3OQ06lX%2BT0LBnd0nAb3RjpOiEzVVNx082WRGLkbPhR7laaNjXJOlnCAeM%2BP0hpFtg7SjvI4N72wkdIMeTGctrkwBZas%2F0eHtWi4FBICcqN4NAsmYN74%2BN1ZP0j%2BoOIqYwJNMiPivy2ViQRp3nMM3q5uBPxPP3RwcP6H1XJeQTzF3zQa0TQdrKs8VrWfSL%2B&X-Amz-Signature=0da27e79a35d68c84a810aaef1568bb3df1a0e77bc97a29a5a183088ed7e6dde&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
