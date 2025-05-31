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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUK75S3C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpTu2KnsATBlcOMB6SX2wBMFQcNse9IFA2Okrc3NqMpgIgHw1ky7bpMOwGj6m8xrSTIYhXBTys1BtX3%2BTxLZPZqvYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOzvnPsXx0p4WBzGCrcA2yZ%2FzW8opgAPBJyf96EdO6YIR%2BdZDPg5zo8iba%2F1aP%2FZ7hqi6sEDqks5JmK7pS6Ut76gmnHt5odaQyhIqsYWtI3Zowo8lepjTk3R9ZoF9GIVJuq0bcGcbbv1z6yLIZLbrKSMjB%2BEARgvocdkLDYj3b%2F538wFJYTPg%2B1Y3Ku4fMCdndCJ0Wsd%2BBg6RTlSLree7xSlQBV9o9eRrf0sYMfqqkZ32joIcw8AOlvx4FWztUAj5Ir%2BaC0nS830Rwjp8GIoXIn8fCGdzYGyUnttw%2Fa%2F0dtHEJy7tl0JDdW64VWmK39cSF7qcGEGdl6SDQHOWie5swyZNOg3AltzPFAfYIz%2FBBpmsc1t3k6QSNCXffVHRJ2x0eYHX5iNawVnuqPJQJjTqeoR9%2BtxouO3vWEdmTnfsY6EJqdbo2IWvhe2dLs9J7IFxrAM9Uzv3peb3bgbQ4vLTubJa3dJMijfYxrqkTcToZUk3zYzKTkG6Z0xiqjp8NjCR5%2B018oyjasYbR1kyCk7ZXY5oC1L2GRFLvY2ve4iPQI2dY7%2FsHM08F5NLKXmbfI1hZpo1i7p6dWV4%2FJIujdyySrIIrCH0UjbOPHhY2Gjf7vrY0Nq5TZTnKD5%2FUVNUxQZz1EATEmDHNNKa8FMPb068EGOqUBlKV5OI6Eoi9044L6qGf6XAtlND0AtI8HRDLcgKw4Hsrj2xnFH%2FHX6VVxegYl%2F9ZNKb4t7m4jVUtAy%2FpHj2VAbP0HRMk0ZiQuRjPskeMLtgW7zsO5kZ2GwU9gwHnSx5N4aGW0yQeUE%2FTiza1jNsJP%2FxHXetVXTYK7HvRQyE1ahqn2NW8cEF%2Fw6vRigq%2BIZUsar6CdUulIa5LnBGrVgUY%2BdWUPJaTK&X-Amz-Signature=32d384d2a27a53f08054191570de3a261e5041bf20b5c88bc91c754fbc2a4f32&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUK75S3C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpTu2KnsATBlcOMB6SX2wBMFQcNse9IFA2Okrc3NqMpgIgHw1ky7bpMOwGj6m8xrSTIYhXBTys1BtX3%2BTxLZPZqvYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOzvnPsXx0p4WBzGCrcA2yZ%2FzW8opgAPBJyf96EdO6YIR%2BdZDPg5zo8iba%2F1aP%2FZ7hqi6sEDqks5JmK7pS6Ut76gmnHt5odaQyhIqsYWtI3Zowo8lepjTk3R9ZoF9GIVJuq0bcGcbbv1z6yLIZLbrKSMjB%2BEARgvocdkLDYj3b%2F538wFJYTPg%2B1Y3Ku4fMCdndCJ0Wsd%2BBg6RTlSLree7xSlQBV9o9eRrf0sYMfqqkZ32joIcw8AOlvx4FWztUAj5Ir%2BaC0nS830Rwjp8GIoXIn8fCGdzYGyUnttw%2Fa%2F0dtHEJy7tl0JDdW64VWmK39cSF7qcGEGdl6SDQHOWie5swyZNOg3AltzPFAfYIz%2FBBpmsc1t3k6QSNCXffVHRJ2x0eYHX5iNawVnuqPJQJjTqeoR9%2BtxouO3vWEdmTnfsY6EJqdbo2IWvhe2dLs9J7IFxrAM9Uzv3peb3bgbQ4vLTubJa3dJMijfYxrqkTcToZUk3zYzKTkG6Z0xiqjp8NjCR5%2B018oyjasYbR1kyCk7ZXY5oC1L2GRFLvY2ve4iPQI2dY7%2FsHM08F5NLKXmbfI1hZpo1i7p6dWV4%2FJIujdyySrIIrCH0UjbOPHhY2Gjf7vrY0Nq5TZTnKD5%2FUVNUxQZz1EATEmDHNNKa8FMPb068EGOqUBlKV5OI6Eoi9044L6qGf6XAtlND0AtI8HRDLcgKw4Hsrj2xnFH%2FHX6VVxegYl%2F9ZNKb4t7m4jVUtAy%2FpHj2VAbP0HRMk0ZiQuRjPskeMLtgW7zsO5kZ2GwU9gwHnSx5N4aGW0yQeUE%2FTiza1jNsJP%2FxHXetVXTYK7HvRQyE1ahqn2NW8cEF%2Fw6vRigq%2BIZUsar6CdUulIa5LnBGrVgUY%2BdWUPJaTK&X-Amz-Signature=ea9c88f5b97171cf58010ef3d073197bd180b0c588f42de2162e8a43d7addda4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUK75S3C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpTu2KnsATBlcOMB6SX2wBMFQcNse9IFA2Okrc3NqMpgIgHw1ky7bpMOwGj6m8xrSTIYhXBTys1BtX3%2BTxLZPZqvYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOzvnPsXx0p4WBzGCrcA2yZ%2FzW8opgAPBJyf96EdO6YIR%2BdZDPg5zo8iba%2F1aP%2FZ7hqi6sEDqks5JmK7pS6Ut76gmnHt5odaQyhIqsYWtI3Zowo8lepjTk3R9ZoF9GIVJuq0bcGcbbv1z6yLIZLbrKSMjB%2BEARgvocdkLDYj3b%2F538wFJYTPg%2B1Y3Ku4fMCdndCJ0Wsd%2BBg6RTlSLree7xSlQBV9o9eRrf0sYMfqqkZ32joIcw8AOlvx4FWztUAj5Ir%2BaC0nS830Rwjp8GIoXIn8fCGdzYGyUnttw%2Fa%2F0dtHEJy7tl0JDdW64VWmK39cSF7qcGEGdl6SDQHOWie5swyZNOg3AltzPFAfYIz%2FBBpmsc1t3k6QSNCXffVHRJ2x0eYHX5iNawVnuqPJQJjTqeoR9%2BtxouO3vWEdmTnfsY6EJqdbo2IWvhe2dLs9J7IFxrAM9Uzv3peb3bgbQ4vLTubJa3dJMijfYxrqkTcToZUk3zYzKTkG6Z0xiqjp8NjCR5%2B018oyjasYbR1kyCk7ZXY5oC1L2GRFLvY2ve4iPQI2dY7%2FsHM08F5NLKXmbfI1hZpo1i7p6dWV4%2FJIujdyySrIIrCH0UjbOPHhY2Gjf7vrY0Nq5TZTnKD5%2FUVNUxQZz1EATEmDHNNKa8FMPb068EGOqUBlKV5OI6Eoi9044L6qGf6XAtlND0AtI8HRDLcgKw4Hsrj2xnFH%2FHX6VVxegYl%2F9ZNKb4t7m4jVUtAy%2FpHj2VAbP0HRMk0ZiQuRjPskeMLtgW7zsO5kZ2GwU9gwHnSx5N4aGW0yQeUE%2FTiza1jNsJP%2FxHXetVXTYK7HvRQyE1ahqn2NW8cEF%2Fw6vRigq%2BIZUsar6CdUulIa5LnBGrVgUY%2BdWUPJaTK&X-Amz-Signature=b36f6496941e01ab4c78aa73b79e5a9e7cbef249dc76a87ba277c0e984b51456&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSQ63PIK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuERx%2BAgZOGJ2h825GKjPgZ3saFTcba3FJ3ICTcTNPZQIhAOkdvyuW8ymx7cqSFRFbk7pE7XbwS8CEjah%2F4vm36xYqKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4ijUr%2BSXK0%2BLFzYMq3AOrcIDM4rzKtU%2Fil9Nc7JKWWzHq0DG2Fyl0qhgY9%2BnMRKdYX5vOoOjsq%2F5dmUcbB38%2BiyRIRO4QGDKGAGCpxDvN5Y0Rpas37DWDtW9X%2Bgs62QlEL2DfgWEfzNfzsghsg0lldCwCCzgY46Sc7bNTgd6xi09V70%2F6vv3U7v3rTmJEPacBTXZEatmlCJLGzBCehSFRxQvFc%2F1rwFMNXopNjstAz%2BO2kQRilaX%2FLuue%2BdWewZeEeiHVtTjf3i61pLs6lzNSSUjW9uoFVdxLOctcJG%2BgD5%2Fp5S0Yu4jK7O6tqObGpWw2vtq9H5uMuV9wr%2Fhr5N30BGJvC2%2BL4I7VvzIE3ybS2sSMEa12VBlwKMQna3gHww71%2Fc7VtkLi3wg6T57EqOzt3mlnmpP4Isz5V0dHW0xxVSvtqIamXzNLQT3L1BveXztyy8gUscX%2BhAPXO4hi3meDKRwXRnUUXmuMgFXQwvAB%2B3f9Euwk2R2FAg%2Fs2Xer%2BmGbFXeweyuVx7sRInzBQTllXwa1FI9%2BfFRJlxZbFVYufjyeKJkk04XWrQsB3Y%2FUNBRBFFPcUe%2Bp%2FpGdj2aRyA17kOPegIVuPWg48Ip0XU6JJOeN0uXLVc7wgIokvCPjz3kj6aJ%2F9kcE2aLRdDCn1OzBBjqkAXZcO2WVVQlHwI30EolqExZ90Ng5bRFb%2F%2FY7bdJLBsDiJisMrqBIeLzCayrIKT2j750lDT4IYHGcIdo5fLvfCQ2O9JCVtG%2FqlPZ53OHofgGhMURNAjw%2BqwHdyI6yhr8umpEzN3MYfnPVeLYlR8iJPkTqSOwpD6fV52ClknG2C92TP%2BLB%2FoiFZfY5HoBqcS0hkGkEdggqwH8p0fUHsAvmgRoj%2F2I4&X-Amz-Signature=ee02e641835fa6235d09e7fc5860e2e13acf593f06d2f1fba1201eb7f9f213da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIIFIA7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06GHcn1iNdx1aGdqajiJMPPCGSH0d1bM%2BiNMF6c%2B7aQIgcr6kJqriXf8yosOK0oAvuDSpxTl8rPh01FzQTmaQy4wqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM14HX2x0GLuZEiTPyrcA9owq1FSeaM79k564o0bqadQRZGaihQaDYZgwR1y8Hd0KkCzRnFTgmIm01PcMxLGc17bvarSjishHS7gINOl%2FBa0hx3Y4j5RThlrJp9uSoPXY1R4%2BhUo%2BFCMJGPWvR%2FU9VzDtfE1fS8sp0UOwhKoKnam55N1radJBdx7xitTRDmJfaLVZ%2FlT7NnNEetNtDDD%2F%2FmyaNc7k49K8GRVfKtrApJbQmdXruozCabh6MeI4pMzxwG%2BZxmfsELaRWUiycTfVSAG%2FBCSWZYoLdT2Ya9P%2BUTwuIPQbjFvuN2u1GYX4t2pz914F4NsfsrRF7ja2dZxh0Y8tVIHOMTPDtlqOaAuLuIghdypi9GHt10ZP3qsBycP2WkAgzYe1U%2Fofg31QCPeZlHIw3ZkeLk2TUihBBLZA95aWuMjU6vq2yiiTzRkO5%2Bd1C37BWN%2F5buWO2Ntwo1%2FGv7v50TRPpIeOoSkc30MPHm818qel2FWCiesHYTk22KvqfPKhQ%2FAQ1WWxn%2B4WQZ001eHaGgNzvOBQjZRJistf2tPO1%2FOd2vtDJl%2B%2B%2FCCfTMM0autxGea78vd%2BreFSmIFsHmXsZfZE2KqAucAijMlmZdpimjafAFAbzE3M5vSHACjNc9NjSM7Oo9zOtz4MJf57MEGOqUBZ1Xz7Kcgm9sWRc9EjGW%2B2V4ZtgspwqJGMXPEhzdrseiBN6mw3TBSxdhQvF8T%2B004lN80YfNFrCqdyo087ucepa3h4bcWBat5wXa%2FwhN%2FkNjtyruJAcOenJIW3E6HagytSba6QtUidEoTgzSY%2BBy18JhPBVH9U6Qc%2Fahp43g8%2F3DGeUxcBP%2FuNagj4u1RIVGKZyA2z34L%2FXqG8xRJGpP26iJWbafi&X-Amz-Signature=4f7f7cb20310806a5f0476871d2168af0aa5c924a44b48e8c335f97a158a34c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUK75S3C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpTu2KnsATBlcOMB6SX2wBMFQcNse9IFA2Okrc3NqMpgIgHw1ky7bpMOwGj6m8xrSTIYhXBTys1BtX3%2BTxLZPZqvYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOzvnPsXx0p4WBzGCrcA2yZ%2FzW8opgAPBJyf96EdO6YIR%2BdZDPg5zo8iba%2F1aP%2FZ7hqi6sEDqks5JmK7pS6Ut76gmnHt5odaQyhIqsYWtI3Zowo8lepjTk3R9ZoF9GIVJuq0bcGcbbv1z6yLIZLbrKSMjB%2BEARgvocdkLDYj3b%2F538wFJYTPg%2B1Y3Ku4fMCdndCJ0Wsd%2BBg6RTlSLree7xSlQBV9o9eRrf0sYMfqqkZ32joIcw8AOlvx4FWztUAj5Ir%2BaC0nS830Rwjp8GIoXIn8fCGdzYGyUnttw%2Fa%2F0dtHEJy7tl0JDdW64VWmK39cSF7qcGEGdl6SDQHOWie5swyZNOg3AltzPFAfYIz%2FBBpmsc1t3k6QSNCXffVHRJ2x0eYHX5iNawVnuqPJQJjTqeoR9%2BtxouO3vWEdmTnfsY6EJqdbo2IWvhe2dLs9J7IFxrAM9Uzv3peb3bgbQ4vLTubJa3dJMijfYxrqkTcToZUk3zYzKTkG6Z0xiqjp8NjCR5%2B018oyjasYbR1kyCk7ZXY5oC1L2GRFLvY2ve4iPQI2dY7%2FsHM08F5NLKXmbfI1hZpo1i7p6dWV4%2FJIujdyySrIIrCH0UjbOPHhY2Gjf7vrY0Nq5TZTnKD5%2FUVNUxQZz1EATEmDHNNKa8FMPb068EGOqUBlKV5OI6Eoi9044L6qGf6XAtlND0AtI8HRDLcgKw4Hsrj2xnFH%2FHX6VVxegYl%2F9ZNKb4t7m4jVUtAy%2FpHj2VAbP0HRMk0ZiQuRjPskeMLtgW7zsO5kZ2GwU9gwHnSx5N4aGW0yQeUE%2FTiza1jNsJP%2FxHXetVXTYK7HvRQyE1ahqn2NW8cEF%2Fw6vRigq%2BIZUsar6CdUulIa5LnBGrVgUY%2BdWUPJaTK&X-Amz-Signature=58c27e429e929e5931674825773da30702e58a8882b4ee4e33ce06612eadde5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
