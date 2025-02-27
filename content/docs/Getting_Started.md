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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREECD2T%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDJ%2By0tEyDNBZNDYkD1cXWUZnABErM2pVvwXnAn%2BBTkrAIgP7WA%2BkAzjV%2FEMte%2BdQ3y%2BYB96tHO83S6XHdXtTepPYQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEiUi3q3Q206Um3%2FrSrcA1gAJU%2F53oFyFT6A2llzmjZx232wf5oTlgtWxsEDkgA%2B4DZHOsW2JeLOqDsHQ5Ll5bL3HGyOsgPgI0AsJzyfBXTwYKZARkGwVWVAAQxBqiCrZjTzFMtxgpWm0W%2FkYxHikB20om7Fx5KGVui84Jj3cqbwx2A4sQnAYJVBkJzNtexFWhWMG2ENdAFSEBL1NtezLXpdCayxzTDE5pQ3am%2BFLqO%2Fnr0zivVnZFrFXH1dLoFBa%2FJbjyu%2Bn6tAltjKEmUGwhEtR0zA1yqYq9gq7LG8%2BU8MHRfwtC5XK79Oly%2BwxYr0Mr0Ii4N3SLIizmP2IMxCV33zUOh5v9OoOJCL8IUNEFpETQvgpyFPLIorgMtwN2xdwSNjEgsXHpFBU3kcyDkNxpD7T2Mf2k2kOAdIwdS4wPyOjklfd6Q3c%2FL3tbs1yZqSPGH1y2FxWWvnnTeO3uSVsGKMkf12aMwT%2F2E6ljKkdVJIOLJsfwFJpHy4Pzgpf%2Bg9OScOSMNmbJAhi4U1w9uzpkwnYCRj0lW2j1kAuYd5iW6XDrPnBf2aJNHd6cRK5qJlJa%2B%2B9QE7IOeA%2FNqNs1TvRgBgw%2F3hp6G4KQCk0MEmvts38EPDLPcm%2B7TYvTVz6imyDRFxF%2Bzzv4ShFZYrMKP2%2Fr0GOqUBx71ztuHrzsQZH8QIq1Fp1ftWNdshpcnGmyCrDYUWFhbgGNPcJQSWU01FtNim4PBpuH5Jf8Q1VCrkwrGiMR9AF2Gh8k2lbr6q6kw2MYHyLyBNz4wwjERtF5EeclPcepHc%2B%2F5ZJvMn1mz39j1sPdxndsVcTC2COAuPm%2FbRWPZ65%2FZU7MC4CqfSbXlExnuDX3155EJCFWUCwTvz6bgyrNVnfOWpTeqx&X-Amz-Signature=6f9873ee9a4d1a51e0f34934e6ea6acd1ffee859fd881678d929ea0cef610d54&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREECD2T%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDJ%2By0tEyDNBZNDYkD1cXWUZnABErM2pVvwXnAn%2BBTkrAIgP7WA%2BkAzjV%2FEMte%2BdQ3y%2BYB96tHO83S6XHdXtTepPYQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEiUi3q3Q206Um3%2FrSrcA1gAJU%2F53oFyFT6A2llzmjZx232wf5oTlgtWxsEDkgA%2B4DZHOsW2JeLOqDsHQ5Ll5bL3HGyOsgPgI0AsJzyfBXTwYKZARkGwVWVAAQxBqiCrZjTzFMtxgpWm0W%2FkYxHikB20om7Fx5KGVui84Jj3cqbwx2A4sQnAYJVBkJzNtexFWhWMG2ENdAFSEBL1NtezLXpdCayxzTDE5pQ3am%2BFLqO%2Fnr0zivVnZFrFXH1dLoFBa%2FJbjyu%2Bn6tAltjKEmUGwhEtR0zA1yqYq9gq7LG8%2BU8MHRfwtC5XK79Oly%2BwxYr0Mr0Ii4N3SLIizmP2IMxCV33zUOh5v9OoOJCL8IUNEFpETQvgpyFPLIorgMtwN2xdwSNjEgsXHpFBU3kcyDkNxpD7T2Mf2k2kOAdIwdS4wPyOjklfd6Q3c%2FL3tbs1yZqSPGH1y2FxWWvnnTeO3uSVsGKMkf12aMwT%2F2E6ljKkdVJIOLJsfwFJpHy4Pzgpf%2Bg9OScOSMNmbJAhi4U1w9uzpkwnYCRj0lW2j1kAuYd5iW6XDrPnBf2aJNHd6cRK5qJlJa%2B%2B9QE7IOeA%2FNqNs1TvRgBgw%2F3hp6G4KQCk0MEmvts38EPDLPcm%2B7TYvTVz6imyDRFxF%2Bzzv4ShFZYrMKP2%2Fr0GOqUBx71ztuHrzsQZH8QIq1Fp1ftWNdshpcnGmyCrDYUWFhbgGNPcJQSWU01FtNim4PBpuH5Jf8Q1VCrkwrGiMR9AF2Gh8k2lbr6q6kw2MYHyLyBNz4wwjERtF5EeclPcepHc%2B%2F5ZJvMn1mz39j1sPdxndsVcTC2COAuPm%2FbRWPZ65%2FZU7MC4CqfSbXlExnuDX3155EJCFWUCwTvz6bgyrNVnfOWpTeqx&X-Amz-Signature=b9e2e80be299f363fa42c472fc08e195a0509fd5f3c08c55a34d583c305d5173&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQSKX27%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDnUVF5pnokQM6vyWwKg6Dv8fxIgrc67NC27WErWQljJQIgYK9kzwWfO0iicXVfL%2BSP%2BzCshrrfJMYlyaIFWhuKF3gq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDHnwAnBqx2jTIM9cVSrcA%2FRmohiNvDWlSg%2B4VDAtKNXXpgWX6srJdJtOoTqI%2FTx4L6F1u1xdWm5aYft8ZZc%2ByWCaoCkW1S%2FcL8zXHULVFJU7kPhWwS%2FiPcYE5iW5YO9jtHefkHAEMAI4duTS1aE7%2Bgo0x6I4jlQ9V2v89xRDkeYA28txgKL14uHFV1wkfjWNC2AGFhdiOIAmyJnbWdIiAI7JnVSK16SeROaZcqYsIkf%2BAUvf6L0ovByaFyWUqEMhVu4arFHka3HCW0akwHK6N8muZOICWcTHvCD6mtqvtATYzepitKumPdxFamMcnrrVj7aJG1ePSdluoKFhP%2FimMkafSFNThEI5rufv128NCGqBLOAC7hmOvDFoEFBOkkNrUIPrTyPk8KQFFProVf9UFuiR%2F7eeabU8SfCpIG%2BctbsgP5VNNz%2B85d9RHyVCjw1CFrlKIbFZd3XFMMGQOQ1GHB89R6mwE%2F2NzTaiABtDh0b6FEVibZ%2BwvQTEuSw6aAw9zE6XMU7g5Q45HfNXbL3wZw218LX8u6woru3obddkB0116QE5mmWiP65b4rNlSAatOwn2A63aW6I1MeOKQ%2FRypQ1R9AR6qVZBPFnBL3qvo3RJUHKI34Ds12gd64YQ52F8q%2F9hNwAB3n8IDTw8MKz2%2Fr0GOqUB2TA5sdTQ6ZmXoNP3ufOJ5sLUuPC%2BCVpAOWdGxjlyvN%2BKjPXhBQvzTruROrd%2FNES%2FyeZGi5C6cm2Js22Nx%2FGjKM9fdJJ3OwhAqEIkIsOUqefddWDKNUPYBvGIy69c0vQKwj8IUl4Iy94O4irkKeibdIcW6pUP0pDN%2F3pTTW2cu0lvMcFztqkIduiHayDrjWpijch2KxtnQRd2aV9jAXKKulQ2%2FKRr&X-Amz-Signature=3722d07f9f2939ac71d1e5ce854b534b12241e228c5a8d4232d1ef202edde9fe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCVWTKF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGztmKW1ZsdpXafLVl9zfM43suVsGZ30%2Bl4VIjgQfMzcAiBDdRjB4qa%2BX9rOmAZSIvy9FycJcHJ1Y5S5gVVsKdNzCCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMx9z5Z%2FjTFLxnHbRTKtwDzk53Ki9vZ%2FXjp9ubLYRj2FvZpqw05uN39JCCvAkO%2B4FQaANVyNWaZHzvnzW4nNsjBj0VWdpW1VmEGvFtzh%2BvCQNKfeFBVXf02wDDVoKk%2Bm4p5acB841CtZvNy4lrtDJ8qZe58iI%2B%2B8COZ0ThWfSO%2BtWMcE1Qb7J8TLX7a%2BM5ZmlBOd%2FjfJC%2F9sTTnRb1pxh1C8XQ9%2FQ9HPQ4PEBO287vOII6TJ%2FD0SEay2IWhlqIKkFEmP718eezL2tg52Qg1ZNNOEnt4nEnHDVStL%2Fa72RUK8qbEIoN7se7%2BFJz3ONmx4KWH8GIo4Ijc5b%2BuOc1yEn%2Bnn54BUyJbHH5KuLR%2ByIQghaRDu8JgTk8kQIW5up622WAY%2BwIFSuPxhGUXhoa1zdPuof6iyEF%2BeAhvSSwuVovtc1aVw2%2FAs5NLg0hgyttxRoDT9AFbiiOI65qiQaR5Mj156Ih7bU4fGFjT33HWgU7jA%2FnbGUukrKudHUVvghx%2BtEb9P5SnBRY%2B3m7B700VqbyGLe%2FnuIZxxG%2FzRDT33fBaA0vXJfu3T6ArW1tptrIj5M%2BGj05dWrL3G4AhBZ9VBtLiSt7vC172BxYKIihF%2BuDXKOLbAYEACn0%2Fo2QFMdeeYb0VRBWY%2BQ75f1gpQMw6fb%2BvQY6pgHLnsNplziKkAyEcNW0KRoEOVOEFPL%2FpnhADHilXkN2xOh2Y5ljWuGhi%2BaoabvX3g6zuZCKsNrVI9s7Z6ZvCwnPvT%2Bdx%2F4ZREh0aTwltxJgeIXGxYBT%2Fc78yU69S274PW7uzH98d90RX1sMNFYvKvemT2Mm6Lz%2FBHnuIlidiigq55sjd94WuPip5%2BQzCZxOyGHLzJFHOSyHpkdqLqyaOiaJY42tLE5s&X-Amz-Signature=fe7d6031d3653303cebae05ac07e05f1a692146d1b878ada1a76ddc830aa2266&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREECD2T%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T021307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDJ%2By0tEyDNBZNDYkD1cXWUZnABErM2pVvwXnAn%2BBTkrAIgP7WA%2BkAzjV%2FEMte%2BdQ3y%2BYB96tHO83S6XHdXtTepPYQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDEiUi3q3Q206Um3%2FrSrcA1gAJU%2F53oFyFT6A2llzmjZx232wf5oTlgtWxsEDkgA%2B4DZHOsW2JeLOqDsHQ5Ll5bL3HGyOsgPgI0AsJzyfBXTwYKZARkGwVWVAAQxBqiCrZjTzFMtxgpWm0W%2FkYxHikB20om7Fx5KGVui84Jj3cqbwx2A4sQnAYJVBkJzNtexFWhWMG2ENdAFSEBL1NtezLXpdCayxzTDE5pQ3am%2BFLqO%2Fnr0zivVnZFrFXH1dLoFBa%2FJbjyu%2Bn6tAltjKEmUGwhEtR0zA1yqYq9gq7LG8%2BU8MHRfwtC5XK79Oly%2BwxYr0Mr0Ii4N3SLIizmP2IMxCV33zUOh5v9OoOJCL8IUNEFpETQvgpyFPLIorgMtwN2xdwSNjEgsXHpFBU3kcyDkNxpD7T2Mf2k2kOAdIwdS4wPyOjklfd6Q3c%2FL3tbs1yZqSPGH1y2FxWWvnnTeO3uSVsGKMkf12aMwT%2F2E6ljKkdVJIOLJsfwFJpHy4Pzgpf%2Bg9OScOSMNmbJAhi4U1w9uzpkwnYCRj0lW2j1kAuYd5iW6XDrPnBf2aJNHd6cRK5qJlJa%2B%2B9QE7IOeA%2FNqNs1TvRgBgw%2F3hp6G4KQCk0MEmvts38EPDLPcm%2B7TYvTVz6imyDRFxF%2Bzzv4ShFZYrMKP2%2Fr0GOqUBx71ztuHrzsQZH8QIq1Fp1ftWNdshpcnGmyCrDYUWFhbgGNPcJQSWU01FtNim4PBpuH5Jf8Q1VCrkwrGiMR9AF2Gh8k2lbr6q6kw2MYHyLyBNz4wwjERtF5EeclPcepHc%2B%2F5ZJvMn1mz39j1sPdxndsVcTC2COAuPm%2FbRWPZ65%2FZU7MC4CqfSbXlExnuDX3155EJCFWUCwTvz6bgyrNVnfOWpTeqx&X-Amz-Signature=bb1c27399da4b67fb0bfbb5dc8ab74b8eacb22d0deea9ea4a0484780e1a7873f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
