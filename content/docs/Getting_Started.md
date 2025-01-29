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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4QFKC5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqpHCN98bubNtmAem1LGtvFGngbsbjtLAvqRoY0Z3faAiEA3QmCbh90JbvaUAyND%2B6uN%2Fq7XXYbciKUN9Zlb8LUOVYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5WOpYg30oysmzEbircA%2F%2BCf9sOjeil%2BLJ2KR8CiqvTBDteLAXDv1aput8alhJtbF%2BXYoayYL1OQH22fR2o5fiSneYsRELtrdx9H6oUnhQhL9w5SueCAHrefbQG8qJ%2BWGmllxqwS3xqjqpxfvL%2BcqwYsWutAh7Wel6Kn%2BAcbVF6l1ZG1KgXGuvBbMZAzoLKhjiONBmuRxWrjkV5t2efHlEkWZeV1b6dFJm7ID6kjavNkCk5flwSwDcbNOefztkQRvOidQRa0UQsN7pgNZ11pZ%2FoM%2BhfLBl7KKja1UqYj1wvW8ALgJGxZuRhfaad52xAlgjaF4hWUTRVrLrQSvbLXpSTHL8YfCxUplInyErgWKoYq1IAbeDfb8%2F%2B4j0qboqoFY7VWQsn8p4p2Y%2FWhCz1%2Fi%2FcVk7ujNWo91NIiJH4eRF0rEmUJeQT2za%2BFURnHB8kjbJ3T4U81TcSJKMeitrftmjyHSdInAXIM8v8oSS7TUs4owDYek%2BRRO7byAQZcJi5YInzQGv2X5SXFgLa3hNkgC2PVT2y9y4hbMpssPfh48OH0h2F%2FDKQds2YrYF%2BG49LsS7UdG3feRyhD8RRcomSJSeR5dQfKzzfqNT1tge%2BUEAZ5cDrkAE9nrtAjNtWgC0FuL5GFh5jfygnnkc5MOrG6rwGOqUBdErbahz5olG0xFLGpq38RtuDy8U5W1GPMRZrVdtxa5rSXWy8lihVQF3WincxSG8iHS7Jy4wubpRQJ9bwCcXfUizb3%2FSkSKi%2Bg2rjX768DFNGb0fzNAhi4loRY8W4MtU1w8UPT9e%2BrOVTVNyxwf6p7PYtEN8IWG8Hv%2F%2B1%2BNTB6nz5HBrNFVpz6KNtFtF%2BL3TVTwIwkCccC%2BVe4y8Xm0gcUOmDVbss&X-Amz-Signature=1dfbdf0df5a707614bc1e82a920e0846b352712d4ba362fd2f26999d74c41fec&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4QFKC5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqpHCN98bubNtmAem1LGtvFGngbsbjtLAvqRoY0Z3faAiEA3QmCbh90JbvaUAyND%2B6uN%2Fq7XXYbciKUN9Zlb8LUOVYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5WOpYg30oysmzEbircA%2F%2BCf9sOjeil%2BLJ2KR8CiqvTBDteLAXDv1aput8alhJtbF%2BXYoayYL1OQH22fR2o5fiSneYsRELtrdx9H6oUnhQhL9w5SueCAHrefbQG8qJ%2BWGmllxqwS3xqjqpxfvL%2BcqwYsWutAh7Wel6Kn%2BAcbVF6l1ZG1KgXGuvBbMZAzoLKhjiONBmuRxWrjkV5t2efHlEkWZeV1b6dFJm7ID6kjavNkCk5flwSwDcbNOefztkQRvOidQRa0UQsN7pgNZ11pZ%2FoM%2BhfLBl7KKja1UqYj1wvW8ALgJGxZuRhfaad52xAlgjaF4hWUTRVrLrQSvbLXpSTHL8YfCxUplInyErgWKoYq1IAbeDfb8%2F%2B4j0qboqoFY7VWQsn8p4p2Y%2FWhCz1%2Fi%2FcVk7ujNWo91NIiJH4eRF0rEmUJeQT2za%2BFURnHB8kjbJ3T4U81TcSJKMeitrftmjyHSdInAXIM8v8oSS7TUs4owDYek%2BRRO7byAQZcJi5YInzQGv2X5SXFgLa3hNkgC2PVT2y9y4hbMpssPfh48OH0h2F%2FDKQds2YrYF%2BG49LsS7UdG3feRyhD8RRcomSJSeR5dQfKzzfqNT1tge%2BUEAZ5cDrkAE9nrtAjNtWgC0FuL5GFh5jfygnnkc5MOrG6rwGOqUBdErbahz5olG0xFLGpq38RtuDy8U5W1GPMRZrVdtxa5rSXWy8lihVQF3WincxSG8iHS7Jy4wubpRQJ9bwCcXfUizb3%2FSkSKi%2Bg2rjX768DFNGb0fzNAhi4loRY8W4MtU1w8UPT9e%2BrOVTVNyxwf6p7PYtEN8IWG8Hv%2F%2B1%2BNTB6nz5HBrNFVpz6KNtFtF%2BL3TVTwIwkCccC%2BVe4y8Xm0gcUOmDVbss&X-Amz-Signature=b5667eb466bb2e9066a0e04c5b0a1dc6f68d2352b0b9c23033294b95434f6c12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZAFHFM%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdqx13xoFMTnhFrnagU%2BQ1HZ79sUIVfdZspNY947R5hAiEAgbZa%2F3rxK9TFrD9jfuhsIN%2F9CwC5bD8wZaBQOrgg34sqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMlRJ7Hg9cvtv6UircA47b0ZYDYiv%2FdxYq%2BoDgo%2BsvjSxbd4yptJCkrUR8c3HGQhZKRU8Rdh4eGTrsXvqVIUQE23Y08%2BCzIYwhgl3BdrJq3qxcjuah58Fe4YeQ4V%2FtzzZ6nylFdTyDqTDROHWF7Xd7uFGGmpwmqYHituC0i5AEm%2Fwh4gJtOzBh6UMagoDyys28ECYwGTKpf2dH784tzV59AaYliXCu5CvwsacvNdLNulJFXvnS%2BLfJyYOFG7GtFCi7Ux6sjM%2BLvLoHpXXQZQOC1UUe9OtBt8NEIn1%2FSDqK4bJF0acJBEq1B%2F%2B29JRarKWqbArOHHE7%2Bk1ZwfRZqZY8lSLncxR06l%2B94ftNu9hVwtc15NF37JoTgQPuPDJGPFsB7uBXUtuWCFR%2FjfnxPMAORFzBuEXFI8v1sQWWXijaPzQ6Eak6XPkeaGshbZyFB8WWVFuW5usyCJDVkCpGpRk4surieeQbTFiWakzw6cwX17F3jsgLDYG2I%2FF6LQ7M4LXRwtbcpmKqJztd%2B58TcjIdtmg%2BFH3fC8ft2QXTRBP3pWQsGdd3lhNaPtiAJ8wHS4Oy1wnvyADFrHnm2kn%2FB19yoQ%2FXrtPaeM2XHHRLcmTBjFz4TjjIVuxcY2Lt4R%2Fg%2F%2FwFwtgBoI%2FJVqj9ML3F6rwGOqUBsSoOc0GZNBlIAe%2F4zAxpMdByKkp9%2FaCs3vnVJkicmJAVxZyWUzjf48E8Rw8yGeo%2FRyylj6oP5g27ppMB4GIHUaxzXDzCPVjcLMVd87NZ1Pec8jv00TrIb23bHXUjMHjGtGnGk2WdhD6%2BTIl%2FYSxdIx9EJZwNC1euzGySTJhvz%2FRw0%2FWMIJ087iIT4bhE2yyzaaA%2BOoK%2FjlS%2B6ovpU7NeR2KX7Gmk&X-Amz-Signature=5d23b041bf84301b9b72fb189d7709248f4ca8a89d82c43c005b8a34f82772ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWCIRNH%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5tVJetk%2BhgfTiMnmUhavIZmdGQ1%2B0CgfciCodNMAsSAiB2omUk98iJyRki9Oas4oXSAUd%2F9GU%2FaZ0xvtq4tL7ZfyqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnlQ7fOSPuaS417fDKtwDJw8bpQX0b027IJ6OYhNqFHcEU2KuBdkI%2F4YdiU9DxLe2VPPI%2F40yPU7eyz%2FwO1k2EGeqHlDkUddWz9j7EKzLxi8o%2BXM0HYn6J72EASgMp7yDsId2%2FYlZufKkz0Vw6Z%2FM0Xz2B5qoRjtCLgbYLgqD%2FpVlGsT0l9nHJtoKzsEcTXmugwic4agmDsCON0dmmsV%2FhqMDlLJyqjV1fk1KyBGjLyf5JKkJJ9Ua1ClF%2Fqbw93uxa%2B39jwhjvfMaaynw42BhAFJ%2FHlu2vxQ5KlHOnZri7AfJnX6h2C1hMo33dqy5Q1AgzWGB4HrYXasGUN5E%2F%2FzOz430zarrTI3eahcubjRbaMvzC5jX9%2FrwTp0jEVSAz2uZdd7rBSuyR72GheuToCi%2B7vBMh27nN3PByD62S5rdtfbDJWI%2BnOFJm%2Fz4dOW3zwjttECfOHgpQRaWf2hk0GuSUo4Bx%2BzJpirq33NBt%2FxcskGNnT%2BXzgjXL8JhXEsL5K0wgrgThj0Jy2TzsTTWwDARSnoRRzIw9FiYlH1mEhglk6TSBmvw7S2XB0Ylw4%2Bdm7L1fE86yf65uEpyV%2FtXixwAa%2F%2FSGFyirYHeXTKmnhmi%2F4OBK91TXbb3yR792kKw2IPaDzZ9gHSIKAR49JIw18XqvAY6pgFPqDvFyALDBdf6pLfD4gyniXQec3F3Hn%2Fe1IyQeVnDc4SR1VoZY2pa3YDY1Uy2nAqdaoG5HEZsLeH507%2B6ISLUg1tDDD%2FXCkuNtUCsNTRd47WTXLY6GhDWZNHKKfpW1k3U0TxRKtcrq49l01qTajaIT09UuAEg0Nr2u9IZqPAn700u2iTSC5gTvSvrxP20zrc3XBX4gQzNUslSJDqTyeAp432NszHc&X-Amz-Signature=bfc52d20119682782c425719268fc707d31908e1ac151669203cced371fdd7a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM4QFKC5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqpHCN98bubNtmAem1LGtvFGngbsbjtLAvqRoY0Z3faAiEA3QmCbh90JbvaUAyND%2B6uN%2Fq7XXYbciKUN9Zlb8LUOVYqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5WOpYg30oysmzEbircA%2F%2BCf9sOjeil%2BLJ2KR8CiqvTBDteLAXDv1aput8alhJtbF%2BXYoayYL1OQH22fR2o5fiSneYsRELtrdx9H6oUnhQhL9w5SueCAHrefbQG8qJ%2BWGmllxqwS3xqjqpxfvL%2BcqwYsWutAh7Wel6Kn%2BAcbVF6l1ZG1KgXGuvBbMZAzoLKhjiONBmuRxWrjkV5t2efHlEkWZeV1b6dFJm7ID6kjavNkCk5flwSwDcbNOefztkQRvOidQRa0UQsN7pgNZ11pZ%2FoM%2BhfLBl7KKja1UqYj1wvW8ALgJGxZuRhfaad52xAlgjaF4hWUTRVrLrQSvbLXpSTHL8YfCxUplInyErgWKoYq1IAbeDfb8%2F%2B4j0qboqoFY7VWQsn8p4p2Y%2FWhCz1%2Fi%2FcVk7ujNWo91NIiJH4eRF0rEmUJeQT2za%2BFURnHB8kjbJ3T4U81TcSJKMeitrftmjyHSdInAXIM8v8oSS7TUs4owDYek%2BRRO7byAQZcJi5YInzQGv2X5SXFgLa3hNkgC2PVT2y9y4hbMpssPfh48OH0h2F%2FDKQds2YrYF%2BG49LsS7UdG3feRyhD8RRcomSJSeR5dQfKzzfqNT1tge%2BUEAZ5cDrkAE9nrtAjNtWgC0FuL5GFh5jfygnnkc5MOrG6rwGOqUBdErbahz5olG0xFLGpq38RtuDy8U5W1GPMRZrVdtxa5rSXWy8lihVQF3WincxSG8iHS7Jy4wubpRQJ9bwCcXfUizb3%2FSkSKi%2Bg2rjX768DFNGb0fzNAhi4loRY8W4MtU1w8UPT9e%2BrOVTVNyxwf6p7PYtEN8IWG8Hv%2F%2B1%2BNTB6nz5HBrNFVpz6KNtFtF%2BL3TVTwIwkCccC%2BVe4y8Xm0gcUOmDVbss&X-Amz-Signature=7f0c9783d1be681618be71b2fe6bed6060b3a8d91c583d4d8a6f1083b3e3d985&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
