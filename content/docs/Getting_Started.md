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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPWK55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDiVyYzAw5zejI2VdXUJAxKjEvPlKNdnFGhuxNrpr9XbQIgdi3duK4oHABzRH8secTTnen%2FCpRv9QKqve5rh6tXoXUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKq%2B55ARKxSmSFYcyircAxHFeYyJS3n8xvqBtA84IwuaR7CV7KFdaOxbNN0uhwlsqp86%2BZiflgAj2d4DiRGaAw8nSfQEHatYWU1V%2FY54vLE2a6lzqTvdDMtZFtS%2FAZT0q1b9i8788TKCS9jhc5qOVHN%2B0SfLFG7V8N6pcic7TXiIi2w9vY8XUBuf%2BnbQyRaQcJu9IMyg39w7oFqjMuo3fQsVYBoAwqwsIxgVBbuI0iSf65nZPs3sI8530faT3ccKFTh6DCfo%2BZVmMaJp74uSdQmc7j1%2BWUtkZpi8aqhq7sVPXFj5Ci%2B39vPylzkdcylWABvhLX9ec9n8ltVNIbr2i%2FJWxSztR3K7rVpcbYtABAfZ6f%2B05bIoQK%2BzLmSaoS7PD9bcXltyQRj9TqIX7o41EoJRSaZST9bvLnUgxMHPmN73ffpHLpZDiiAbHLH3x04%2Fr1ZKp7HK9ULPVDH%2FrknKC08y3mMEG%2BXs9RPbkni5Kjw2kmFvXvsalSzfr468S4txUkRWx3G8789MsmYJtaGWSYCMWBQfU%2FtYPm%2BR1DQzmbGw8cDNObL9Ks9cgktd0YgW%2BkXRNqU5%2BHXB1NMsidL24cANw5g1uHn6wsZI7Iy2KbilBJdfLtY8cH5NtkncsT1GLDeTUcKvDCKEeB%2FFMLiT18QGOqUB7vG0OYj7hV5W9we9bfDDcMmL2KfjBjNptCN3mBnnzKE60wW2hK%2FxSbrRcBYtjjtRULHWile3x%2BXtz%2Bpp1YAuGHiJeOn0y0sEWLrKueJB79H7D2la6oZhPwVhg5fCeumT3KgBEXjVE0HnQJz02b7M3sdg4XzKE7hK3BMyWsPMuFIimhVx0CBTon6gJDzBSEqzsqA6okMaGmvJypn8fkcPSs5U6zIQ&X-Amz-Signature=8c0143bc91c1410cc35721dee9b38bae0dad92ee087b8bb214c1a0f69fbba1d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPWK55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDiVyYzAw5zejI2VdXUJAxKjEvPlKNdnFGhuxNrpr9XbQIgdi3duK4oHABzRH8secTTnen%2FCpRv9QKqve5rh6tXoXUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKq%2B55ARKxSmSFYcyircAxHFeYyJS3n8xvqBtA84IwuaR7CV7KFdaOxbNN0uhwlsqp86%2BZiflgAj2d4DiRGaAw8nSfQEHatYWU1V%2FY54vLE2a6lzqTvdDMtZFtS%2FAZT0q1b9i8788TKCS9jhc5qOVHN%2B0SfLFG7V8N6pcic7TXiIi2w9vY8XUBuf%2BnbQyRaQcJu9IMyg39w7oFqjMuo3fQsVYBoAwqwsIxgVBbuI0iSf65nZPs3sI8530faT3ccKFTh6DCfo%2BZVmMaJp74uSdQmc7j1%2BWUtkZpi8aqhq7sVPXFj5Ci%2B39vPylzkdcylWABvhLX9ec9n8ltVNIbr2i%2FJWxSztR3K7rVpcbYtABAfZ6f%2B05bIoQK%2BzLmSaoS7PD9bcXltyQRj9TqIX7o41EoJRSaZST9bvLnUgxMHPmN73ffpHLpZDiiAbHLH3x04%2Fr1ZKp7HK9ULPVDH%2FrknKC08y3mMEG%2BXs9RPbkni5Kjw2kmFvXvsalSzfr468S4txUkRWx3G8789MsmYJtaGWSYCMWBQfU%2FtYPm%2BR1DQzmbGw8cDNObL9Ks9cgktd0YgW%2BkXRNqU5%2BHXB1NMsidL24cANw5g1uHn6wsZI7Iy2KbilBJdfLtY8cH5NtkncsT1GLDeTUcKvDCKEeB%2FFMLiT18QGOqUB7vG0OYj7hV5W9we9bfDDcMmL2KfjBjNptCN3mBnnzKE60wW2hK%2FxSbrRcBYtjjtRULHWile3x%2BXtz%2Bpp1YAuGHiJeOn0y0sEWLrKueJB79H7D2la6oZhPwVhg5fCeumT3KgBEXjVE0HnQJz02b7M3sdg4XzKE7hK3BMyWsPMuFIimhVx0CBTon6gJDzBSEqzsqA6okMaGmvJypn8fkcPSs5U6zIQ&X-Amz-Signature=165bf753460137f806a7916d35e4b2af8f5d13f163b11fe8ce5e975a44ddfc3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPWK55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDiVyYzAw5zejI2VdXUJAxKjEvPlKNdnFGhuxNrpr9XbQIgdi3duK4oHABzRH8secTTnen%2FCpRv9QKqve5rh6tXoXUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKq%2B55ARKxSmSFYcyircAxHFeYyJS3n8xvqBtA84IwuaR7CV7KFdaOxbNN0uhwlsqp86%2BZiflgAj2d4DiRGaAw8nSfQEHatYWU1V%2FY54vLE2a6lzqTvdDMtZFtS%2FAZT0q1b9i8788TKCS9jhc5qOVHN%2B0SfLFG7V8N6pcic7TXiIi2w9vY8XUBuf%2BnbQyRaQcJu9IMyg39w7oFqjMuo3fQsVYBoAwqwsIxgVBbuI0iSf65nZPs3sI8530faT3ccKFTh6DCfo%2BZVmMaJp74uSdQmc7j1%2BWUtkZpi8aqhq7sVPXFj5Ci%2B39vPylzkdcylWABvhLX9ec9n8ltVNIbr2i%2FJWxSztR3K7rVpcbYtABAfZ6f%2B05bIoQK%2BzLmSaoS7PD9bcXltyQRj9TqIX7o41EoJRSaZST9bvLnUgxMHPmN73ffpHLpZDiiAbHLH3x04%2Fr1ZKp7HK9ULPVDH%2FrknKC08y3mMEG%2BXs9RPbkni5Kjw2kmFvXvsalSzfr468S4txUkRWx3G8789MsmYJtaGWSYCMWBQfU%2FtYPm%2BR1DQzmbGw8cDNObL9Ks9cgktd0YgW%2BkXRNqU5%2BHXB1NMsidL24cANw5g1uHn6wsZI7Iy2KbilBJdfLtY8cH5NtkncsT1GLDeTUcKvDCKEeB%2FFMLiT18QGOqUB7vG0OYj7hV5W9we9bfDDcMmL2KfjBjNptCN3mBnnzKE60wW2hK%2FxSbrRcBYtjjtRULHWile3x%2BXtz%2Bpp1YAuGHiJeOn0y0sEWLrKueJB79H7D2la6oZhPwVhg5fCeumT3KgBEXjVE0HnQJz02b7M3sdg4XzKE7hK3BMyWsPMuFIimhVx0CBTon6gJDzBSEqzsqA6okMaGmvJypn8fkcPSs5U6zIQ&X-Amz-Signature=af3d8bade3c22e387e8b7397a9ece1799bb418da72b2fd2b4b6079042625c5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUW2MH7L%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDwWA4Ux2%2BttXX0A3vbiGxK%2BHHGwIK5sAQV6MvUUg9mcgIhAIUKyKAJWo8R4d4F78V3XjqNnq%2FYBZzLUUyQhC7P2JnUKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0nw4RncJ0I%2FIlBqgq3APdw73bzo8MOZxGyFxbD2Xko9uA3Eppp5XwsU%2Far1Qh7Y6Plw95t3fhL5FkTzXKltV5vfPAAVVx%2FVMxNsujHgDobTy3n%2FmbWUxQ9tmTsjKv3kgazXsLwaY9se2wwIWHzRXsQMvxkcrlmaVKLCbpJkCTHNif462OrpVmrTAcPP7DPUUTOxn8I8zbwYro3S0MEM5pcBkba%2BlilOZBNSe%2BPQ4WtdA31lv%2FZjykZ1krClf5Yygl2hPWpBzj0UYiVpGskpL519x3nTxAvznmSYjB1PHTuPNkJV0cXcPPUz%2FAEmxLNuCMeWvqoSFRjsJHu586iQZAco7S5Kn%2Bi3mbLW3sOs33TrTlBwiijlNLlUhujiTWsXDqUazW1P78B8Yy2k42lleLVhMXtkGIkNi9JNk9geBdoWngynpDA%2BenSosErXf%2FZPCXwZNkbv%2BlN6GFKdmWnHqbVKtTu%2BK9RN8APoZLB%2FBWy1QXH%2FCvStE%2Fa%2FdG89tADUCSLKWRlbIBgno3%2FpmMkN2JONhvp3A20%2B4YixINAkDdwQg6VfFSEMl7yB%2B1Yf93akD9txrsjzBbsjlirl%2FEctpY58%2Buac8m%2F3kGLgFS%2BeeMa%2B%2FgwmYYIo1e8wrn49gumdqH9vE4%2FYMG2I%2BB5DD%2BktfEBjqkAeQNbQnGuVWNnyhAJ050oeV%2Fcb12lhFM6mSe55w7mPswOUfqhMXJ0MSXxIibN0L99gklmID5SwQeyC7cZDgSJ9JNJnecVA5JP4Pq6Gfi504TdA%2BpPMV34q%2Fc4DVhM8NpN0OfnExSJtiHpIz9CeiVvGQwlTFQDSrVV4GkXp74jPCrYGEsFlVWDqGW39AUQ5I9zE80iOXHF8e7e2cB1ecAwxphEK7n&X-Amz-Signature=4a07d500a62dcdad392c7ba08f8bcf064fdc94ffc2fdd623e0c657d29327c250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6GKQIX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIGADjWFXxYKIvEreM%2BCr7Td5JBhfKFDoLCOYB93EqJWrAiBU7pUm3itjyVGcZm4G%2FD9bKzym52pe5dn1c%2FT2bgEphiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnYNp0bK0DIR6vPR9KtwDeEhOuQa8kI535INiIsNE4Be7gTcv137YB8ztPIdBkm07t67XfNjyv1gjGw7kNVj80BdtOkCEwupcjzHcdLftwUkA7oNioOLaiCnLPUowCbhrUVfy62Hye8qNzzvZLsZ%2Fo7qizfchyGCPZ6rykxZPfXJOO93J7XqeR1nlP2RpL3bvn6KASVhMkslpdF3h0bzBX5YEDAbMl1gSIT16LSlwZn%2BKZhaWgo6BbWhqCVZka7f5fd4TR9MYW%2BKRnvav8adL1v2kM8hrGdZSSyJAWsYPneuq2uXnMSwXQRqiGeXRygZ6hJHb5Ib99C1LZSIRJNdm2BhYMYMGccgGIxRHqtg2r98x1V61U%2B73oZflcgYJF5Kx%2BIqFFAnI8NGVVCX7n%2F3%2Bbt6yXi8e8EC8pCUhZYOR1psLgGHEX4mSFDbOhzf0Xn36LCn8kpoIygMiuURvE1iKl2ngldoBavui83944vz6ejj0OGd0nXnBC%2BU%2BsBDVEEDoWD2MikrnmShOtN3W4SplurpXgwEH1UFDlCDi%2FdjdW6t%2FRB4WHvSVzYIlHwzwvthqfUmguO2%2Fk8OAaPq2GkgUVyg1IMjbMNciD%2FvOTfh4sQEbsvgUEqjddZ1d9kjalapkPeUASPuil3HCH6ow15PXxAY6pgHCz2WbLsZbjoBTH6Se0%2BwT8K1GkQxWpTwk9fH51edl1R%2FyAy%2BXEi%2B2DWizgVp4s9G2yv7y0B5x2RKZxtt1BZpqgHb6EFNJIXs6dfjC%2BVLsiZUVvx%2BogEMhyUP6Ia0w%2BhlqgkwZOeJftvfVyFtppnnqiJgfCltTjsHBS7Z6dpKQMWfM8IQti70CQpSpoUj84GSokinEtgZOqWKlOvWgWV%2FxCTLeYfJD&X-Amz-Signature=157c3d954fcfa2f4e245595e012077ee42c44ae27e4c4019f137790b435ddc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EHPWK55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDiVyYzAw5zejI2VdXUJAxKjEvPlKNdnFGhuxNrpr9XbQIgdi3duK4oHABzRH8secTTnen%2FCpRv9QKqve5rh6tXoXUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKq%2B55ARKxSmSFYcyircAxHFeYyJS3n8xvqBtA84IwuaR7CV7KFdaOxbNN0uhwlsqp86%2BZiflgAj2d4DiRGaAw8nSfQEHatYWU1V%2FY54vLE2a6lzqTvdDMtZFtS%2FAZT0q1b9i8788TKCS9jhc5qOVHN%2B0SfLFG7V8N6pcic7TXiIi2w9vY8XUBuf%2BnbQyRaQcJu9IMyg39w7oFqjMuo3fQsVYBoAwqwsIxgVBbuI0iSf65nZPs3sI8530faT3ccKFTh6DCfo%2BZVmMaJp74uSdQmc7j1%2BWUtkZpi8aqhq7sVPXFj5Ci%2B39vPylzkdcylWABvhLX9ec9n8ltVNIbr2i%2FJWxSztR3K7rVpcbYtABAfZ6f%2B05bIoQK%2BzLmSaoS7PD9bcXltyQRj9TqIX7o41EoJRSaZST9bvLnUgxMHPmN73ffpHLpZDiiAbHLH3x04%2Fr1ZKp7HK9ULPVDH%2FrknKC08y3mMEG%2BXs9RPbkni5Kjw2kmFvXvsalSzfr468S4txUkRWx3G8789MsmYJtaGWSYCMWBQfU%2FtYPm%2BR1DQzmbGw8cDNObL9Ks9cgktd0YgW%2BkXRNqU5%2BHXB1NMsidL24cANw5g1uHn6wsZI7Iy2KbilBJdfLtY8cH5NtkncsT1GLDeTUcKvDCKEeB%2FFMLiT18QGOqUB7vG0OYj7hV5W9we9bfDDcMmL2KfjBjNptCN3mBnnzKE60wW2hK%2FxSbrRcBYtjjtRULHWile3x%2BXtz%2Bpp1YAuGHiJeOn0y0sEWLrKueJB79H7D2la6oZhPwVhg5fCeumT3KgBEXjVE0HnQJz02b7M3sdg4XzKE7hK3BMyWsPMuFIimhVx0CBTon6gJDzBSEqzsqA6okMaGmvJypn8fkcPSs5U6zIQ&X-Amz-Signature=4e3ae029409fc374cb93712952d087f9369e846a910b70a484aee32287be5673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
