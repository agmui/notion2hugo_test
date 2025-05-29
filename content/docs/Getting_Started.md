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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ACIM7K6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRr4ULaMgR1t%2FIX986afx5dP1QxxzwNj4KUtJPaROPzAiEA6eiiM4hWLTL9%2Bqoanh1usWkV%2F9js%2BMz2W0TDa%2FdbPMYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9APGsb%2BKoebslHjircAytTmkwt3LrP3q5XD68PU3aepznjnlu1O40SLOdwgkG3CJkV0GJjvLISphIoXPmWrzZAm5ru%2FF6P%2BGPdzbL%2FFnPbyCX8ZHtwCtkFjt0QGeus12TrrZECHOyBL%2Bb5oE6mymRJ3U7YOM1L5WL0Ka0AzcGrmgiz2Ui41Tj4OQYJBhqll8pPMMqO5lfa7gmH9kOUj6FRggKbzvzC8%2Bt%2F%2Ba4j1udOpg8d4rjpgAN6lngs%2BF43%2FGiRVeUWXRdVIiaN8zbZeXszJywkqjIRZUj84kJ10ixgw5GIEixhjbtGJCYh8o2%2B0RVox81aj3brv0P%2Bnqw%2FU7D5H1czrtYuECD5H%2FaToUmxKEk4Dbit67Gbf812Y%2BH2McZMrRupQCgT2rVGnnU%2FqtphCN4HbBBVEyWubT7G25u%2BdCBDZGn6guS%2B8CsA8cmeDcmJ2U9ottN2zeUEu6Eg8EFWV1Oni6jHHQDI8PXsBW88fZEJbHh7R8bGTUSRdYgX7Wo6expV2FZREhVPAJ8JK2iqzvgTHYPGqxCoMyOy%2FC1tTwIMTeS14n2DB49rR5ze3055aXIjP%2BS86b7uHQZMpXSqeDg4AVHOy3bwhLOCsoKI0gDs17r1zEHVnd5ZF%2FYnnarlpEWU0cs5ujIAMI6y4cEGOqUBCHTxLPAxG5%2FH%2FLDmr34lvfyL9whWJsJxIfiRFg9sORkUaE%2F%2B65TuxmNeIPHq2EVAdOLoRdW5IjyzRmlG2d74e4nw9hoR6PtlOsKmQKCTkhmi4tFvaeRnePLihRTq5Yu1oZjSHkgoxJPDWUxn0F0mNHuSBlq%2Bk9XkQ3amFw07p8neGTzRenfGkf3trGYF6hynzMxVWwOLAd01PSwPwtVNDuBvzwau&X-Amz-Signature=371d9a35a10d5de981af4afb9d13a4cc530832e45c77cd0332c33ad3c90e980d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ACIM7K6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRr4ULaMgR1t%2FIX986afx5dP1QxxzwNj4KUtJPaROPzAiEA6eiiM4hWLTL9%2Bqoanh1usWkV%2F9js%2BMz2W0TDa%2FdbPMYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9APGsb%2BKoebslHjircAytTmkwt3LrP3q5XD68PU3aepznjnlu1O40SLOdwgkG3CJkV0GJjvLISphIoXPmWrzZAm5ru%2FF6P%2BGPdzbL%2FFnPbyCX8ZHtwCtkFjt0QGeus12TrrZECHOyBL%2Bb5oE6mymRJ3U7YOM1L5WL0Ka0AzcGrmgiz2Ui41Tj4OQYJBhqll8pPMMqO5lfa7gmH9kOUj6FRggKbzvzC8%2Bt%2F%2Ba4j1udOpg8d4rjpgAN6lngs%2BF43%2FGiRVeUWXRdVIiaN8zbZeXszJywkqjIRZUj84kJ10ixgw5GIEixhjbtGJCYh8o2%2B0RVox81aj3brv0P%2Bnqw%2FU7D5H1czrtYuECD5H%2FaToUmxKEk4Dbit67Gbf812Y%2BH2McZMrRupQCgT2rVGnnU%2FqtphCN4HbBBVEyWubT7G25u%2BdCBDZGn6guS%2B8CsA8cmeDcmJ2U9ottN2zeUEu6Eg8EFWV1Oni6jHHQDI8PXsBW88fZEJbHh7R8bGTUSRdYgX7Wo6expV2FZREhVPAJ8JK2iqzvgTHYPGqxCoMyOy%2FC1tTwIMTeS14n2DB49rR5ze3055aXIjP%2BS86b7uHQZMpXSqeDg4AVHOy3bwhLOCsoKI0gDs17r1zEHVnd5ZF%2FYnnarlpEWU0cs5ujIAMI6y4cEGOqUBCHTxLPAxG5%2FH%2FLDmr34lvfyL9whWJsJxIfiRFg9sORkUaE%2F%2B65TuxmNeIPHq2EVAdOLoRdW5IjyzRmlG2d74e4nw9hoR6PtlOsKmQKCTkhmi4tFvaeRnePLihRTq5Yu1oZjSHkgoxJPDWUxn0F0mNHuSBlq%2Bk9XkQ3amFw07p8neGTzRenfGkf3trGYF6hynzMxVWwOLAd01PSwPwtVNDuBvzwau&X-Amz-Signature=e0f00ef088d5251471547dc624efc4c3d1fa8dfae9c230250232f7f39d1e3675&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ACIM7K6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRr4ULaMgR1t%2FIX986afx5dP1QxxzwNj4KUtJPaROPzAiEA6eiiM4hWLTL9%2Bqoanh1usWkV%2F9js%2BMz2W0TDa%2FdbPMYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9APGsb%2BKoebslHjircAytTmkwt3LrP3q5XD68PU3aepznjnlu1O40SLOdwgkG3CJkV0GJjvLISphIoXPmWrzZAm5ru%2FF6P%2BGPdzbL%2FFnPbyCX8ZHtwCtkFjt0QGeus12TrrZECHOyBL%2Bb5oE6mymRJ3U7YOM1L5WL0Ka0AzcGrmgiz2Ui41Tj4OQYJBhqll8pPMMqO5lfa7gmH9kOUj6FRggKbzvzC8%2Bt%2F%2Ba4j1udOpg8d4rjpgAN6lngs%2BF43%2FGiRVeUWXRdVIiaN8zbZeXszJywkqjIRZUj84kJ10ixgw5GIEixhjbtGJCYh8o2%2B0RVox81aj3brv0P%2Bnqw%2FU7D5H1czrtYuECD5H%2FaToUmxKEk4Dbit67Gbf812Y%2BH2McZMrRupQCgT2rVGnnU%2FqtphCN4HbBBVEyWubT7G25u%2BdCBDZGn6guS%2B8CsA8cmeDcmJ2U9ottN2zeUEu6Eg8EFWV1Oni6jHHQDI8PXsBW88fZEJbHh7R8bGTUSRdYgX7Wo6expV2FZREhVPAJ8JK2iqzvgTHYPGqxCoMyOy%2FC1tTwIMTeS14n2DB49rR5ze3055aXIjP%2BS86b7uHQZMpXSqeDg4AVHOy3bwhLOCsoKI0gDs17r1zEHVnd5ZF%2FYnnarlpEWU0cs5ujIAMI6y4cEGOqUBCHTxLPAxG5%2FH%2FLDmr34lvfyL9whWJsJxIfiRFg9sORkUaE%2F%2B65TuxmNeIPHq2EVAdOLoRdW5IjyzRmlG2d74e4nw9hoR6PtlOsKmQKCTkhmi4tFvaeRnePLihRTq5Yu1oZjSHkgoxJPDWUxn0F0mNHuSBlq%2Bk9XkQ3amFw07p8neGTzRenfGkf3trGYF6hynzMxVWwOLAd01PSwPwtVNDuBvzwau&X-Amz-Signature=2ad1c5b257585a52fd1fc1a45a0a3dfd8d3635c9f97c35d49a837b4c5c55eff4&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB5A7Z3K%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfgFKPXuL4F4z5e0CZmGGaDcbAWkRPz7M1hDFmTnovsAiEAw2lwT33y3tYBJfh6b0sRq%2FcdYI0d3x7CPDdZjzVgTOcqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxN8TjZpbzM2eSOiyrcAwWI%2FgLAc9tyMB1EEC6h8qIKRb5jKNYqNX0DmePP0qzriIO%2Bw3%2BScFujIGz1ZbGWlw4RQz3FTtXhlBmMxxYHgqbR3AVP%2F5AzUcSilttZ48QzFTj%2B8eGePI%2FVPmsuPNJ%2BpgpcyYwHjowe3tJ%2BiZ7IbeOBR%2B%2Fi2u1C82qCpeFrjQuMPzuhehFXAX9wv4nBp5FIh8imtRReOKn6G7ljy9CD3pH%2FXNt3jPdsAYDnaPhUiGPByu%2BiEX3elHgRDkXLhvXSM3yQnSO7iMZpqL1iujAxoM3xnwpbgkb6%2FXULg6QN6bpRIO0dYQvttpibUQRff2WL6gmGC5ro8EHVOav9G%2BsItnlRvSJ6gZsYqyYsDANXEN0Vl%2BY7iGDdlmkKJnWKVLVaww5UIdRtJqZ6x1RNhy2iy5YwthsWLa6HS9CvTUvv4W3aJp%2FMqqWKOsgVbHLB8kRvNEL3xqbl4ER1Rx2g9DqojwItVS8S9WvN%2BLrDw2Cx7JDGO7jmDKufBi7QiEGk32ChL0Ngstay9MaSdizCcZAILRQA4Xjlyuog6b096JKBRyaSWOkLDVwk71b8NOYCk6flkvWRaMO68DDWZXbhN3llA1q%2F8fy3h3Ug%2F0tGguKbYPkd0LISgMwoCX1HB3rXMJ6y4cEGOqUBhVMAZ5f41GnVIEsTLgNgpZVIAQTC6288NQfnAxRKeiU7bkzzsQYuEhlsI8XiCriso2JEKPvThssP6wnM17jCYZzo1hkCLQWfzoN%2BvpyC4dJZTQX%2BBCnFQwKc4MuQBFLV9nB6edjjYHh9kFIftPc2jwb588%2F4O8WWBQ1V8uUiZL2esvcwr%2F%2BBGAuTZ1Dv40BgQ7NcOK6co08HkQmUN8EjlXq%2FsS11&X-Amz-Signature=68c793af93a0aee1ccc0d22f4f94cd1073fd6315e6bc0d4321071bab18cbf72e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L7TL64R%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsA4oEogJK0iwTXbVFlsh%2FlMc3wHCWGwMeimjsTfN5nAIhAKUBnjghMw9exQwFfZpRKpqO7R%2FdqSsaZ6cynKYkMwg8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI%2Ft%2FEd%2BFgmUC15jAq3AOiPTIzvH7Ah3clkUfX4epgxdf7auB5vpIrpeTO4oFmYgaaPnP84KG3EioBg63vEKcc3GhV%2B4ZURnscN%2F6R6aH%2F53E96VhHLnqKRYPEgc8bgx3ONgruxpd9rzrp07TDy9wDwS7hUNe%2FiwgnPn8f%2B%2BAeZ4497r5jzwRP48M50HMNe5FQq8UzaUTRgdRRlvhtLqRycsX17RFDYQcZbV4%2BkniRQNKsSPC5jRHdyPGqgxxj8Uw0X1aI7Pq0n6E4X8ajnlKYYhzjKCtpIffyHnm344G%2B1cUN3WhukJm8CC3jJc0X3GwWEbr0t9HRLIVMpbPkDuiGdXuEtXpg%2FYew0PJY61enuAa3EseOc50mQOovFNQh0Ydw3EBRJ8Z0pn3nfInJyZTRpalsuRdEpVKFyFBoq2CorbI8stU2vUnkDGNRJPnFPUIfH6qFCIevvODmq8u2K7SS9sTbsf0pdbwXRz3O4Y4mjjQ4fS3bpW5iNxNKUxhGc%2B7EabbOwn1JHhVyO%2BvQqYaxCOC8UAGT30xCJdz48zXjOWkFw38suXgDyvIJMmwTd6ywX9N7PwyDd47mBRKCMDTYFDyaxpk4%2BqO0WLghDQMy6ThTqT3paUIuk9lCoFU3A36q67zN6QK60lVxYjCpsuHBBjqkAYR3qtTkbeIloK30X5DswDi%2FvxmZ%2FdFjvBubEEOCzMorvo5K3QY1SQ2njSJTA5Yd18jJ5O5VssdXq%2FOSbi4q%2FW%2B7Bg8WpvNwJJYH4znW93P40V6Ari3YTtDL7ZdmWUmK%2FKGCY4somA%2BNbQwp9jr6pBVhXAyq7yoYS0yQDH38HtgYm%2BGB4XBMYdiXN31mqcOr%2FtongiGkpUPKaXA05Y6ptFG4ks9Q&X-Amz-Signature=f36e8ead47898239c608c8704f34ebfc0d269cc8d2dba9dabed29dadbea3dd55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ACIM7K6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRr4ULaMgR1t%2FIX986afx5dP1QxxzwNj4KUtJPaROPzAiEA6eiiM4hWLTL9%2Bqoanh1usWkV%2F9js%2BMz2W0TDa%2FdbPMYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9APGsb%2BKoebslHjircAytTmkwt3LrP3q5XD68PU3aepznjnlu1O40SLOdwgkG3CJkV0GJjvLISphIoXPmWrzZAm5ru%2FF6P%2BGPdzbL%2FFnPbyCX8ZHtwCtkFjt0QGeus12TrrZECHOyBL%2Bb5oE6mymRJ3U7YOM1L5WL0Ka0AzcGrmgiz2Ui41Tj4OQYJBhqll8pPMMqO5lfa7gmH9kOUj6FRggKbzvzC8%2Bt%2F%2Ba4j1udOpg8d4rjpgAN6lngs%2BF43%2FGiRVeUWXRdVIiaN8zbZeXszJywkqjIRZUj84kJ10ixgw5GIEixhjbtGJCYh8o2%2B0RVox81aj3brv0P%2Bnqw%2FU7D5H1czrtYuECD5H%2FaToUmxKEk4Dbit67Gbf812Y%2BH2McZMrRupQCgT2rVGnnU%2FqtphCN4HbBBVEyWubT7G25u%2BdCBDZGn6guS%2B8CsA8cmeDcmJ2U9ottN2zeUEu6Eg8EFWV1Oni6jHHQDI8PXsBW88fZEJbHh7R8bGTUSRdYgX7Wo6expV2FZREhVPAJ8JK2iqzvgTHYPGqxCoMyOy%2FC1tTwIMTeS14n2DB49rR5ze3055aXIjP%2BS86b7uHQZMpXSqeDg4AVHOy3bwhLOCsoKI0gDs17r1zEHVnd5ZF%2FYnnarlpEWU0cs5ujIAMI6y4cEGOqUBCHTxLPAxG5%2FH%2FLDmr34lvfyL9whWJsJxIfiRFg9sORkUaE%2F%2B65TuxmNeIPHq2EVAdOLoRdW5IjyzRmlG2d74e4nw9hoR6PtlOsKmQKCTkhmi4tFvaeRnePLihRTq5Yu1oZjSHkgoxJPDWUxn0F0mNHuSBlq%2Bk9XkQ3amFw07p8neGTzRenfGkf3trGYF6hynzMxVWwOLAd01PSwPwtVNDuBvzwau&X-Amz-Signature=98b76ef41871a28706c24a33a168e2c4ad998816d9dcf9947c0b00ebc00459e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
