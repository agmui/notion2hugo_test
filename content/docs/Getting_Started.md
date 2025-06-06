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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6Q4DFT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGD%2F71Ew%2BRKUlibqqW5SxUF%2B5S5VwfxAJ0EDnXSa2JXCAiARSm%2FbZ3LsdTSORGX5M5RtkOTVGdTEPU5nuNUJs6BCaSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIML08euQdcszn5f%2BxvKtwD9sCKaXNunnIcCc2jvs9lhA620WX%2FPikQcTDwmiL4oJKjjrrMgznuuKETuV6x87b7GE2Puh8PwsHrcK7miUhLYNwjnzM5iYqXmb2qVpz9ZrbtQbVh%2F2IDoix6WBwcgeASNA7g45Wu%2Fh3i100Ki7kowmwdN0qAlV6qYnNI0EopKa7d4DNhMxgq0CDH2k5CDdPqyg4D8gHauy61nxWbx9IuiyUnMapYRPo6xkOYKP%2Bjxvau6xOfy7gtWwTt2khEVozEZ9V54b9bmOYNzb%2BWCkw9WyeI388q2bo4Bj2GZZLOrAIRRciWxmVnw8e1c99bTva10r7OgCLeeCx%2BwvT8r0NpMoHQ2bJNKOiZLvx4kFztL2ZRcbQEkFPj7ZJDNYXjFTimZb6pZ%2F%2F%2B0xv0rZ%2BKjsx8ITouUPzmRvrSO1oUuw%2BTboQjrcaNXOlat2O4%2BRc7IiFpuHfoeJRgBLOsLNzDcq3T8YAXca1GZzszCS3GtCSZkSTAWO2XAOoHHu7OZasByMd7%2FWdRz76SCyzEMvIwO5%2BTxJZPnXR1qoHm%2F7Ds2GRcJt9%2FyIJRMaM1PYwWwRRYpZO%2FpeFoJzqGvdchm63yJ%2Bu%2BoZ5QRjUBavqtQxM27hkeZaeXSOOkjCXumYle83MwlrSIwgY6pgFsFNganKnrEBFqIKlLR9BWT%2FmVXnpI5JpGqXBFn382uC9Q7CAC%2F0oGtET2GA8DgUsRPT3tC4jl%2B6HrA4HRVun%2F%2FgHPXzA6aSoHX7R7XD2H4tN7WM%2F5bkc7ctCFonMYi4RZC6JUcXwX2CQpvOrYjG7mokPYWkYORNurwJTGlrkLuCvptB3m%2FWpT8rQLLz0DjRb%2B7OJHru4j8O2lBuyYWRkX8y1FCXfl&X-Amz-Signature=60efb404357b798ab9caaf48cc0426fd612d06207fee3b793c86ce190ebf25fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6Q4DFT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGD%2F71Ew%2BRKUlibqqW5SxUF%2B5S5VwfxAJ0EDnXSa2JXCAiARSm%2FbZ3LsdTSORGX5M5RtkOTVGdTEPU5nuNUJs6BCaSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIML08euQdcszn5f%2BxvKtwD9sCKaXNunnIcCc2jvs9lhA620WX%2FPikQcTDwmiL4oJKjjrrMgznuuKETuV6x87b7GE2Puh8PwsHrcK7miUhLYNwjnzM5iYqXmb2qVpz9ZrbtQbVh%2F2IDoix6WBwcgeASNA7g45Wu%2Fh3i100Ki7kowmwdN0qAlV6qYnNI0EopKa7d4DNhMxgq0CDH2k5CDdPqyg4D8gHauy61nxWbx9IuiyUnMapYRPo6xkOYKP%2Bjxvau6xOfy7gtWwTt2khEVozEZ9V54b9bmOYNzb%2BWCkw9WyeI388q2bo4Bj2GZZLOrAIRRciWxmVnw8e1c99bTva10r7OgCLeeCx%2BwvT8r0NpMoHQ2bJNKOiZLvx4kFztL2ZRcbQEkFPj7ZJDNYXjFTimZb6pZ%2F%2F%2B0xv0rZ%2BKjsx8ITouUPzmRvrSO1oUuw%2BTboQjrcaNXOlat2O4%2BRc7IiFpuHfoeJRgBLOsLNzDcq3T8YAXca1GZzszCS3GtCSZkSTAWO2XAOoHHu7OZasByMd7%2FWdRz76SCyzEMvIwO5%2BTxJZPnXR1qoHm%2F7Ds2GRcJt9%2FyIJRMaM1PYwWwRRYpZO%2FpeFoJzqGvdchm63yJ%2Bu%2BoZ5QRjUBavqtQxM27hkeZaeXSOOkjCXumYle83MwlrSIwgY6pgFsFNganKnrEBFqIKlLR9BWT%2FmVXnpI5JpGqXBFn382uC9Q7CAC%2F0oGtET2GA8DgUsRPT3tC4jl%2B6HrA4HRVun%2F%2FgHPXzA6aSoHX7R7XD2H4tN7WM%2F5bkc7ctCFonMYi4RZC6JUcXwX2CQpvOrYjG7mokPYWkYORNurwJTGlrkLuCvptB3m%2FWpT8rQLLz0DjRb%2B7OJHru4j8O2lBuyYWRkX8y1FCXfl&X-Amz-Signature=73f483c14a20955ef746f3fc4648a58d3a5544b31291ccdd3b298c9a2a7db9be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6Q4DFT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGD%2F71Ew%2BRKUlibqqW5SxUF%2B5S5VwfxAJ0EDnXSa2JXCAiARSm%2FbZ3LsdTSORGX5M5RtkOTVGdTEPU5nuNUJs6BCaSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIML08euQdcszn5f%2BxvKtwD9sCKaXNunnIcCc2jvs9lhA620WX%2FPikQcTDwmiL4oJKjjrrMgznuuKETuV6x87b7GE2Puh8PwsHrcK7miUhLYNwjnzM5iYqXmb2qVpz9ZrbtQbVh%2F2IDoix6WBwcgeASNA7g45Wu%2Fh3i100Ki7kowmwdN0qAlV6qYnNI0EopKa7d4DNhMxgq0CDH2k5CDdPqyg4D8gHauy61nxWbx9IuiyUnMapYRPo6xkOYKP%2Bjxvau6xOfy7gtWwTt2khEVozEZ9V54b9bmOYNzb%2BWCkw9WyeI388q2bo4Bj2GZZLOrAIRRciWxmVnw8e1c99bTva10r7OgCLeeCx%2BwvT8r0NpMoHQ2bJNKOiZLvx4kFztL2ZRcbQEkFPj7ZJDNYXjFTimZb6pZ%2F%2F%2B0xv0rZ%2BKjsx8ITouUPzmRvrSO1oUuw%2BTboQjrcaNXOlat2O4%2BRc7IiFpuHfoeJRgBLOsLNzDcq3T8YAXca1GZzszCS3GtCSZkSTAWO2XAOoHHu7OZasByMd7%2FWdRz76SCyzEMvIwO5%2BTxJZPnXR1qoHm%2F7Ds2GRcJt9%2FyIJRMaM1PYwWwRRYpZO%2FpeFoJzqGvdchm63yJ%2Bu%2BoZ5QRjUBavqtQxM27hkeZaeXSOOkjCXumYle83MwlrSIwgY6pgFsFNganKnrEBFqIKlLR9BWT%2FmVXnpI5JpGqXBFn382uC9Q7CAC%2F0oGtET2GA8DgUsRPT3tC4jl%2B6HrA4HRVun%2F%2FgHPXzA6aSoHX7R7XD2H4tN7WM%2F5bkc7ctCFonMYi4RZC6JUcXwX2CQpvOrYjG7mokPYWkYORNurwJTGlrkLuCvptB3m%2FWpT8rQLLz0DjRb%2B7OJHru4j8O2lBuyYWRkX8y1FCXfl&X-Amz-Signature=8bad2e4f748ffedc5285c60a5597c202efb5e985a22afa8c9ca677761a525328&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBJGAEI%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC78y2aRqp58556RKawwmWDjlhOUcZNLqWHq1Do7yZDjAIhANpXYUOLcgR%2Bcan2g2VyWcrr%2FcI0quYi%2FL1awkjZ4%2BrmKv8DCEwQABoMNjM3NDIzMTgzODA1Igw1mL80OrupgqLs8uMq3AM3TCmnWK8X2ZNfetrgxNrTx6tGYrfi5bwkyggj7vZ6f0w6LsZFIbBz475FoNmeO0QbFFTiQkxSM6Vb9y6PmaAhbgrQr9AVGX6GXcsKzjt627%2FUdflADv0DrTy0GG0uVxChGRPIgGegVSG9a0UECyQ%2BhTyQQvPViwtdUnDPJFKmP00GPuyqS3IeYirHIVxcGmxNKNd0vkLbJgvLUSutPGmAmKdSI1LtuUH5tNnyP%2FbK7dJSl%2FsDOCkQPgE9r7PCsuXe%2BScG5tGBRRHnXn4xL0VQ6ZTY3HZAOUKxrtkDaFZgLdXuXV68KC7Nizmu45SQSXfrkB1aZGvGXABC4Y1vPmnmQgvCngbK3iZfnMEJGYZcaCGB6eCAvvlZmF8aqNwPW9ldrcgiP5wLOLhhX5f5ZZH2uV6FGW18zCIXPmpPL8Emz7EkBg9HUdvxMH%2BGRxu8Fy9%2FlLh8b2QslrR23V3TvAICwUyEL%2FdmLkeLfyDUZ4sA7HTN1u2%2FNxHunxZScflsM00xk%2BwtsG5tifJDVrncd7%2BRVTFXemiIwdIFBIgmMxYcmehFAxfH2rPN%2FUXOqVR2VDvv95gfSBLCdoqs6UV7Ru%2FT23yicx2VjqIR8ukWl%2F5TsrZAkRfKIMG9VkIQ8TCW2IfCBjqkAa2Aqj2Y8d0TRVA8EpsQVQNo9wTOs3hi42Lnf2GDcycP6BfUkXwO3ZV1u9SdTKQNXcZZwRIkx16yahlZcPRAdJzZstYDdqFHBFKx5SVFYzmYcQMzpJJzbwKStcXFChiBrZsMUwxypgs8O%2BzpNqA0zrFu0pc4A8Jj0rwI9onRUe8lv17uK5Wxegco5R70VY2u9st4F30KWIlG1e4DF73spd41NKXf&X-Amz-Signature=0cf08a5a250486d263b92eb24026e94865cbc9d60dfa1f4b49165d0bbf68c6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GC35XOK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICS9Nrjw%2BUCnsyY%2BmBd%2FbG6ahD91fthknEfAQmXYozk2AiEA4ccChS4q6sPr5UjP%2FQBMNN9aTLaZ%2FTGhv%2BCwezQmbLoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAJDzp0R8m%2BFRkJYDircA5Qwl8KlGBYsCP8dxC63VT4P%2BmpQwb1%2FuYNiKme3wJsiLcTNZu6PgdsIcKSEWvp0iXWtK4bvst9JTL4bj%2FuBtSawOTX0UGiCNziPtbFZmoOo%2BDbH0tMoxzsP1%2FuWCqg8DH5iP1%2FwPq7xmb5WyatnsU3%2BvQC7x2LVfRGOKx%2Fgml7vVAEF3drKhPe1PGojKYkxF%2FTGSFZJBEYF%2BFdMHubrw%2BPCoi1mn%2FEGrkWXVFrUZzAUeru%2F72bl%2FDj1TlMSthGVJXhicdKPMAnQ979QrWDWwA3gaNVyw16D5jBAD313jUfaYfpVcEuz1pyNZkMYJPMTMWkOYZLPeRiV3D1UeBaRjJOAYOoxXSbQya9OFx%2FLlMNQ9Ab1cu20tWxgN%2BEUSFZ5YHqdv7pQo7xqlCxPsLPY9TxTyliugWQC6o8V0xJ8juobfOw0BovqW%2Fl%2FasFhKPbPxO5QabKXPCqK0IbXSxA%2FC646dv2%2FauK4Tj%2F2suOPCzzVkyNtaD1HjqlyUMO43RmjRxTHXSqm00XH8a6FGjogl0i%2FhsU%2BQADn3g6fhnmz87GTQUZbAHmm%2BJXAwiDGsKbTkEirUm7pITgyrSLZJjgOonR%2F7m5Y27wHBuJEmPG%2BTCgZmL%2B0zPwymy9X9rIXMMaziMIGOqUBOX0XzidMHi2DmZTz5CKVyivZGhcple5UccKWfF2HBK2x%2B%2BSxNsI%2FPf8mF%2FP6mylRuciuztD67n1iEZnOeJChENE%2Fht4lQjT763FzR7f1c0Yw4dLMFyvOVYv%2Bmd3ipbFftRUtGpDQ1CLwqGGdxuQ3ejI2vpFrP30uT0NHhl%2F1MDnqiAlpbX6mEcfwh36h1QUUc%2Bm%2F6vVAa0rJbi7ofhgayawmlPit&X-Amz-Signature=66ab33bf86076a71c5ce69f084e79d636883a5594a0612d7c328026b921dcf2a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH6Q4DFT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGD%2F71Ew%2BRKUlibqqW5SxUF%2B5S5VwfxAJ0EDnXSa2JXCAiARSm%2FbZ3LsdTSORGX5M5RtkOTVGdTEPU5nuNUJs6BCaSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIML08euQdcszn5f%2BxvKtwD9sCKaXNunnIcCc2jvs9lhA620WX%2FPikQcTDwmiL4oJKjjrrMgznuuKETuV6x87b7GE2Puh8PwsHrcK7miUhLYNwjnzM5iYqXmb2qVpz9ZrbtQbVh%2F2IDoix6WBwcgeASNA7g45Wu%2Fh3i100Ki7kowmwdN0qAlV6qYnNI0EopKa7d4DNhMxgq0CDH2k5CDdPqyg4D8gHauy61nxWbx9IuiyUnMapYRPo6xkOYKP%2Bjxvau6xOfy7gtWwTt2khEVozEZ9V54b9bmOYNzb%2BWCkw9WyeI388q2bo4Bj2GZZLOrAIRRciWxmVnw8e1c99bTva10r7OgCLeeCx%2BwvT8r0NpMoHQ2bJNKOiZLvx4kFztL2ZRcbQEkFPj7ZJDNYXjFTimZb6pZ%2F%2F%2B0xv0rZ%2BKjsx8ITouUPzmRvrSO1oUuw%2BTboQjrcaNXOlat2O4%2BRc7IiFpuHfoeJRgBLOsLNzDcq3T8YAXca1GZzszCS3GtCSZkSTAWO2XAOoHHu7OZasByMd7%2FWdRz76SCyzEMvIwO5%2BTxJZPnXR1qoHm%2F7Ds2GRcJt9%2FyIJRMaM1PYwWwRRYpZO%2FpeFoJzqGvdchm63yJ%2Bu%2BoZ5QRjUBavqtQxM27hkeZaeXSOOkjCXumYle83MwlrSIwgY6pgFsFNganKnrEBFqIKlLR9BWT%2FmVXnpI5JpGqXBFn382uC9Q7CAC%2F0oGtET2GA8DgUsRPT3tC4jl%2B6HrA4HRVun%2F%2FgHPXzA6aSoHX7R7XD2H4tN7WM%2F5bkc7ctCFonMYi4RZC6JUcXwX2CQpvOrYjG7mokPYWkYORNurwJTGlrkLuCvptB3m%2FWpT8rQLLz0DjRb%2B7OJHru4j8O2lBuyYWRkX8y1FCXfl&X-Amz-Signature=560f8098f763bdc503a86aa56b7bcf2ecc7f8c27d11caa59d8482d19c1c62832&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
