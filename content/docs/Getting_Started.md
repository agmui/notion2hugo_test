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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOPGNXU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBrcw23iOLg1c0NWqZ2J2aeGrew454W6RR9z2NxYt%2FfAiAV3uE%2FkvjfUbSGR8o9M0QgHbp1q0m2disRABQWYZoFGCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCiKUraZh2fjMpQb1KtwDUTOzm0a5MCQeQjVlTYTJikk%2F8IGrtiWxy2%2FAC9gkA%2BIbCxdIMMGsnPfJPmtHzOoiGzxMm%2FNJ%2BPzMli6WknZtGq%2Fu3K1XsBeDAenXAJWXKOC%2BsP%2F2P27OY2DPoCYy3%2BNVBdl0zzk3w%2BnUDHN%2FaFwszeJ%2FTQQf1mxdl1mIMMX17pKPRP49K5m0CDKSsYCYt6ydFfc%2FAP5jSZ283qpWueLoXs4BPD8TzAw5rGzOx%2Bjw0M5U946chWDx%2Fs708El3bsJDb24RFvGyXSjd07dra4fylznoyC7ZQaL7cPuAjxZwtzJOHEO%2Bb1ayvzW4h8cFtaBVryv1dpeNSP2fi%2Fj%2B9%2BvoNOTJDFk8TOkx%2B9PudQicWcsi4ax3WC0xVpXEeIes%2BDnFk%2B4LpiiiZyv8MwdkNKHNeDRw2auld2fvVujAk57HGNRFdz5ImY490n0SZGWRExW%2BAK%2F3FoN0lN11VvqS7ffrFm2Vnsz3VbfEewLy8M3zB8rEjhobnCPGCuK4W8eyyt9Ybe71hSwzkYP2K63RKR2w5guyojyltGhKWg7luFCz%2Fczzw454L%2FMWW9sJJrBTYdODg5HTcUp8jBFuy%2B6Ty3jZqDE5cMj0PHOYAfg6rC%2BWT39uNRSXQBlBWPl6tSEwroT1wwY6pgGxmWbgA%2FhrfERWmT4JYs44rZpAPfDJhrIl6SK1FXH692NxfJOc7naRJkLv38FX1N4FV4mwpcUG8NzKzZei%2BVJNlM6CYIComRrkGmucQPL%2FiJTkKzbXt%2FDwGJ5RYkeBFkrLP6wDo514BLdnK4mWdsU0gGKk3sYCcwQyhbmVEr7QN7JNcSxFA7NuQwiCn14vaKmcYxE6Brh%2Bajj%2Bl3LeM1SZ8vEes9FT&X-Amz-Signature=14082a15082bf08e5fe78fcf94f2b855565856ff34e65d22337032b1984b81a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOPGNXU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBrcw23iOLg1c0NWqZ2J2aeGrew454W6RR9z2NxYt%2FfAiAV3uE%2FkvjfUbSGR8o9M0QgHbp1q0m2disRABQWYZoFGCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCiKUraZh2fjMpQb1KtwDUTOzm0a5MCQeQjVlTYTJikk%2F8IGrtiWxy2%2FAC9gkA%2BIbCxdIMMGsnPfJPmtHzOoiGzxMm%2FNJ%2BPzMli6WknZtGq%2Fu3K1XsBeDAenXAJWXKOC%2BsP%2F2P27OY2DPoCYy3%2BNVBdl0zzk3w%2BnUDHN%2FaFwszeJ%2FTQQf1mxdl1mIMMX17pKPRP49K5m0CDKSsYCYt6ydFfc%2FAP5jSZ283qpWueLoXs4BPD8TzAw5rGzOx%2Bjw0M5U946chWDx%2Fs708El3bsJDb24RFvGyXSjd07dra4fylznoyC7ZQaL7cPuAjxZwtzJOHEO%2Bb1ayvzW4h8cFtaBVryv1dpeNSP2fi%2Fj%2B9%2BvoNOTJDFk8TOkx%2B9PudQicWcsi4ax3WC0xVpXEeIes%2BDnFk%2B4LpiiiZyv8MwdkNKHNeDRw2auld2fvVujAk57HGNRFdz5ImY490n0SZGWRExW%2BAK%2F3FoN0lN11VvqS7ffrFm2Vnsz3VbfEewLy8M3zB8rEjhobnCPGCuK4W8eyyt9Ybe71hSwzkYP2K63RKR2w5guyojyltGhKWg7luFCz%2Fczzw454L%2FMWW9sJJrBTYdODg5HTcUp8jBFuy%2B6Ty3jZqDE5cMj0PHOYAfg6rC%2BWT39uNRSXQBlBWPl6tSEwroT1wwY6pgGxmWbgA%2FhrfERWmT4JYs44rZpAPfDJhrIl6SK1FXH692NxfJOc7naRJkLv38FX1N4FV4mwpcUG8NzKzZei%2BVJNlM6CYIComRrkGmucQPL%2FiJTkKzbXt%2FDwGJ5RYkeBFkrLP6wDo514BLdnK4mWdsU0gGKk3sYCcwQyhbmVEr7QN7JNcSxFA7NuQwiCn14vaKmcYxE6Brh%2Bajj%2Bl3LeM1SZ8vEes9FT&X-Amz-Signature=cdef148697b0b78294c9c081db577136f318d488052696054e2cbc7a55049dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOPGNXU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBrcw23iOLg1c0NWqZ2J2aeGrew454W6RR9z2NxYt%2FfAiAV3uE%2FkvjfUbSGR8o9M0QgHbp1q0m2disRABQWYZoFGCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCiKUraZh2fjMpQb1KtwDUTOzm0a5MCQeQjVlTYTJikk%2F8IGrtiWxy2%2FAC9gkA%2BIbCxdIMMGsnPfJPmtHzOoiGzxMm%2FNJ%2BPzMli6WknZtGq%2Fu3K1XsBeDAenXAJWXKOC%2BsP%2F2P27OY2DPoCYy3%2BNVBdl0zzk3w%2BnUDHN%2FaFwszeJ%2FTQQf1mxdl1mIMMX17pKPRP49K5m0CDKSsYCYt6ydFfc%2FAP5jSZ283qpWueLoXs4BPD8TzAw5rGzOx%2Bjw0M5U946chWDx%2Fs708El3bsJDb24RFvGyXSjd07dra4fylznoyC7ZQaL7cPuAjxZwtzJOHEO%2Bb1ayvzW4h8cFtaBVryv1dpeNSP2fi%2Fj%2B9%2BvoNOTJDFk8TOkx%2B9PudQicWcsi4ax3WC0xVpXEeIes%2BDnFk%2B4LpiiiZyv8MwdkNKHNeDRw2auld2fvVujAk57HGNRFdz5ImY490n0SZGWRExW%2BAK%2F3FoN0lN11VvqS7ffrFm2Vnsz3VbfEewLy8M3zB8rEjhobnCPGCuK4W8eyyt9Ybe71hSwzkYP2K63RKR2w5guyojyltGhKWg7luFCz%2Fczzw454L%2FMWW9sJJrBTYdODg5HTcUp8jBFuy%2B6Ty3jZqDE5cMj0PHOYAfg6rC%2BWT39uNRSXQBlBWPl6tSEwroT1wwY6pgGxmWbgA%2FhrfERWmT4JYs44rZpAPfDJhrIl6SK1FXH692NxfJOc7naRJkLv38FX1N4FV4mwpcUG8NzKzZei%2BVJNlM6CYIComRrkGmucQPL%2FiJTkKzbXt%2FDwGJ5RYkeBFkrLP6wDo514BLdnK4mWdsU0gGKk3sYCcwQyhbmVEr7QN7JNcSxFA7NuQwiCn14vaKmcYxE6Brh%2Bajj%2Bl3LeM1SZ8vEes9FT&X-Amz-Signature=2ce91cb66891d40ec69094ebd1b833d885c71aded168fbfff2f97ebbcc8287c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6XB52L%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoIlLFoDOkFZE7Y8b0Wes0AyVVai0MNdkPmih0r9%2F5WwIhAKweyakmKhn%2BTrqq8CB1XtQBo9dhYOIJXihRZCckG6hRKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1p7%2B5a9eFMGsOGsgq3AO%2FqzgMeU03zkcwwAdId0sl972Ft%2FgvaYPqkAB6FGxsZZRhXXowHdBLcjsqmEZ6tTJhYUQ34RYq67SAiygiMZ7pMvj58ZCHqr%2Fk3ZbcbxIbixJcscwnPlERnKAk3jMCPX0bByIzdqW%2F9CdS3X%2FcIsY8YyKmjWYmQnwSCjwXrbsimzFbpC%2BSaE7jD3l2HvWiSTKu2pkJcAmP%2FZALzSVwHHxr5PEOabUFjBtNaDugGZSCPsKMjE7A5RR4u08tbDi9dk1%2B2K8XCZswEVzSmVfijHCXxDx73Py88WEwSfwnFlYf3swHHuRVDfuXlssr9drwwrwrLPcFxB3yt2CP7DZx%2BCCeEKuY9GZgZ%2BoKR7O6DFDTSThR%2Bl2NWS%2Bvlz1nOiTnPX%2FJfdZ7BgxZi%2BUpUDshAKzysZ9h7UZ2NE5kkDlIMAbyBTCZygyagcjEE2EOBKXAbFb44X4NjWFuOVljIB%2BAeXJEXMXUjDg5eL25gjFjIO2wYKS9UUTHS2GiiZrM9kc6zQ%2FpsmmuwHzyNTP556NpzqyciLLdo5e4C36NKeS7w5q3cso%2FpUnzNtj3rMRldSsSrCPragYtAJCZGsvAgUny53f6y6PVAlFFULQq9OfVXi8slGiQbFS4vOIc23lXrTDM%2BPTDBjqkAdk%2BK2B0SPy3qADHastZB%2Bs80ubtOECWdDs8rfhk40C4jDGu8K7ZxtYNoPSlkv7GN4sfvKy2YjjVcFo%2Br9QZ87jst0dkC1UM%2B1rEOz9FMfqsZtzq30bielJa61%2BTfpgflM88asHqvo%2FD2zlPDu0x%2BF%2BdK%2FdRkc%2Bvve8JXQ%2FR7MUW40qqZoFxPu2BFH0C4f2%2FpM%2BaGluYeialZnsGGfK7LazPxS5p&X-Amz-Signature=565dcc5813feef1112696bd12edf506e897c0e1425f91cb9cbdd1ab85813d4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVOH7QDK%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbTbB6kI3anXFsj8x4nMMjVrW4Fs7%2BSidEIMNEE1ixegIhALCn3TXCsl0IMbzgvbVenoQd69kEBzkjE1X5FIvRy%2FXHKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVJvbCHSo7Qvxel1Mq3ANfFrlp4sER5yo9j8DME9vbe%2BPkH63X6GDw8ziUgL9cK0ILPQ3R4%2F4jbo9qcdeZYrcm7%2B6y3txFOfDuxWqWSPXBjzjGcVmF8l6IUwa2G2N8DwO4%2F%2F2LOorXF6qhAzSjzCa2HNkkPwjFqKcNBTYFfwvGJ4ufjmZmwjZZiO6%2FaGcWtGNXYo5oHsJh9BPTeee5fGgUSFFO3ZQq9Mvn2SvQRI%2FOgaQ%2FnLVbfREjh7YtpShzPnSYXWVadqEuUPlRjw75bZs1Y1%2B8dQNnI7%2BXSCgcpwLbl%2FrcSAJqylGCvlVbK7BI0nYDEAZg%2B57hb4jOBo90JUnFLezSI0%2FCZhJ2crTSmRzRZCDNeRMzrDayWuPRW7PDLPiQAvUS4jQoMuUMDuc3UxHcoxwxMZ3KB9zECvN1IOitH2BZQLd6mrFrg3rJKxU9ddXjO4LEcAjQIj1vrUsNaq1gtJMhaAAZOw50fMI6RVW47Cwyr%2BNHhDcKOCfH9X1vzX%2FEzI9kDYyrf8qkvCzEyyesvZpVkudrwovRXHPzci0uIVkn3qXJjtsN9IRvOmH1ZvpjCxDeNSYDnI%2FpXSOJqlrBjZyfRignuYZejTRDS81gR1cEpv8RhZdunrydPKGvwhoT4E64xVEYjP69%2BjDQ%2FfTDBjqkARPfdKTJ2KaB5LuqhLmhKOzrlL4j9KbuLdFVWCmWmE7YPd95E0D%2BPyo2V22Dutqd34U%2BMFJxbdrRzZdzaMCflWX5TYA6jPjtEMNJ2wkjNhrQ5ff35FZkF27HuY%2F%2BjttzFF3HA9wgmiBqfcuopNOklAnAWeLWLEmpLC4ENz6qPMVxlZGch0I%2Bsfi2Go0oZwmUDAboI%2B57Z81k4vDDgq0bEIUA2hk9&X-Amz-Signature=b5aa1b1c0f47e1ec38831c343d413deee75919ce242c6b75bc7c5f6e6596cacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOPGNXU%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBrcw23iOLg1c0NWqZ2J2aeGrew454W6RR9z2NxYt%2FfAiAV3uE%2FkvjfUbSGR8o9M0QgHbp1q0m2disRABQWYZoFGCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCiKUraZh2fjMpQb1KtwDUTOzm0a5MCQeQjVlTYTJikk%2F8IGrtiWxy2%2FAC9gkA%2BIbCxdIMMGsnPfJPmtHzOoiGzxMm%2FNJ%2BPzMli6WknZtGq%2Fu3K1XsBeDAenXAJWXKOC%2BsP%2F2P27OY2DPoCYy3%2BNVBdl0zzk3w%2BnUDHN%2FaFwszeJ%2FTQQf1mxdl1mIMMX17pKPRP49K5m0CDKSsYCYt6ydFfc%2FAP5jSZ283qpWueLoXs4BPD8TzAw5rGzOx%2Bjw0M5U946chWDx%2Fs708El3bsJDb24RFvGyXSjd07dra4fylznoyC7ZQaL7cPuAjxZwtzJOHEO%2Bb1ayvzW4h8cFtaBVryv1dpeNSP2fi%2Fj%2B9%2BvoNOTJDFk8TOkx%2B9PudQicWcsi4ax3WC0xVpXEeIes%2BDnFk%2B4LpiiiZyv8MwdkNKHNeDRw2auld2fvVujAk57HGNRFdz5ImY490n0SZGWRExW%2BAK%2F3FoN0lN11VvqS7ffrFm2Vnsz3VbfEewLy8M3zB8rEjhobnCPGCuK4W8eyyt9Ybe71hSwzkYP2K63RKR2w5guyojyltGhKWg7luFCz%2Fczzw454L%2FMWW9sJJrBTYdODg5HTcUp8jBFuy%2B6Ty3jZqDE5cMj0PHOYAfg6rC%2BWT39uNRSXQBlBWPl6tSEwroT1wwY6pgGxmWbgA%2FhrfERWmT4JYs44rZpAPfDJhrIl6SK1FXH692NxfJOc7naRJkLv38FX1N4FV4mwpcUG8NzKzZei%2BVJNlM6CYIComRrkGmucQPL%2FiJTkKzbXt%2FDwGJ5RYkeBFkrLP6wDo514BLdnK4mWdsU0gGKk3sYCcwQyhbmVEr7QN7JNcSxFA7NuQwiCn14vaKmcYxE6Brh%2Bajj%2Bl3LeM1SZ8vEes9FT&X-Amz-Signature=975ed4ca08ece341ee22fa19794732cbb0660242bb97fc7aa4623e9c3452a101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
