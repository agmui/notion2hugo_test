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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B6JPIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTukFfaa6bxtV7I2wgw0gOi7Cx96kpXhSG%2ByhHZhjCVAIgEt3yfyS30muQbhih38EJ7kXw8Ds6Of5VOMyGAQK2wQ8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEMQ55aHNT09WlwciSrcA9H6j0OgUiCpqTlN8Xcu%2BBW4436sCUPxFIt10ITAk9hgH%2BVC7kUEbgOK5Nw2vXtpmSK5T03J2McuJWFMc7WhkqPYHmW9TkwI%2BQ8BEsM6oBCPzYCMPINDctRyzWE3w6MuocxggElNmSCz8%2FxTI0Mav%2F%2BmwCYGVST3O%2BSm4aLLqbqqJi2%2BB8J2t9NLx65VkFPykrdIzklqdfYoKJkaJ86mETdN7M8y%2BH8ZmCm5jIk1deXNShUULSZJsn6%2BtVlLUg3rydfFe%2FhI8PjLJo6pJv2CCnWlinxoR4%2FLQGtQdjrRU%2FWfBlEP8juOUu7xANwrou6WG7ktp0F5iNv%2FMK%2FkGULfsFcRZcDBWZg0U35Ek7gpzT82wCwl9jBcBqWFNLwg16ayOvWCwzXtHN54WK%2BFKnc9wClpOZosrjBVwcEkhD3SGYHBlf%2B8Balybx7a8OhliCYQ3Hx5s0%2BWq4Tss7BquIpylx4QGlUTldlUec5Yf4E6%2Bit0OY14EIqwtxQh6gShCz5Drn%2B6U%2F%2Fh3VtzOi1BU16ubN9MPy25M%2Fn5bOwXwGEitMskOW%2BnLQZQup1nhQzejFnfLfHC03ZFoWsiTk6GLxWoogc7WOT0QANirW%2BapB2HPFrxpBemqrHTAwQLzvIfMPX2kL8GOqUB%2FZyu1Q54JOJlKwZcI6jhmLE9ralvVNJbCCpWZFnFgwAP3VF0S6IKKAd8wUGmihDtgX8Nong1Y%2BvKfSAI52oesHbPNamSR18vpuZtjAvmT06IC8%2B%2BjVaPp27D28VfvnbqLONUAGNDVZBUXZgaHPVy1d1%2B%2FQ8u%2BcChxgdDIgOhNaUikFij9ilAaCJCSyq1EReQydCPXwbBuuM96V%2BJmW1AsnuLQl4L&X-Amz-Signature=337c40d4354768ecfd9bd87b70a14e1ec9f090584f7f329bfa26b43ee5767f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B6JPIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTukFfaa6bxtV7I2wgw0gOi7Cx96kpXhSG%2ByhHZhjCVAIgEt3yfyS30muQbhih38EJ7kXw8Ds6Of5VOMyGAQK2wQ8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEMQ55aHNT09WlwciSrcA9H6j0OgUiCpqTlN8Xcu%2BBW4436sCUPxFIt10ITAk9hgH%2BVC7kUEbgOK5Nw2vXtpmSK5T03J2McuJWFMc7WhkqPYHmW9TkwI%2BQ8BEsM6oBCPzYCMPINDctRyzWE3w6MuocxggElNmSCz8%2FxTI0Mav%2F%2BmwCYGVST3O%2BSm4aLLqbqqJi2%2BB8J2t9NLx65VkFPykrdIzklqdfYoKJkaJ86mETdN7M8y%2BH8ZmCm5jIk1deXNShUULSZJsn6%2BtVlLUg3rydfFe%2FhI8PjLJo6pJv2CCnWlinxoR4%2FLQGtQdjrRU%2FWfBlEP8juOUu7xANwrou6WG7ktp0F5iNv%2FMK%2FkGULfsFcRZcDBWZg0U35Ek7gpzT82wCwl9jBcBqWFNLwg16ayOvWCwzXtHN54WK%2BFKnc9wClpOZosrjBVwcEkhD3SGYHBlf%2B8Balybx7a8OhliCYQ3Hx5s0%2BWq4Tss7BquIpylx4QGlUTldlUec5Yf4E6%2Bit0OY14EIqwtxQh6gShCz5Drn%2B6U%2F%2Fh3VtzOi1BU16ubN9MPy25M%2Fn5bOwXwGEitMskOW%2BnLQZQup1nhQzejFnfLfHC03ZFoWsiTk6GLxWoogc7WOT0QANirW%2BapB2HPFrxpBemqrHTAwQLzvIfMPX2kL8GOqUB%2FZyu1Q54JOJlKwZcI6jhmLE9ralvVNJbCCpWZFnFgwAP3VF0S6IKKAd8wUGmihDtgX8Nong1Y%2BvKfSAI52oesHbPNamSR18vpuZtjAvmT06IC8%2B%2BjVaPp27D28VfvnbqLONUAGNDVZBUXZgaHPVy1d1%2B%2FQ8u%2BcChxgdDIgOhNaUikFij9ilAaCJCSyq1EReQydCPXwbBuuM96V%2BJmW1AsnuLQl4L&X-Amz-Signature=9fdd36f6e346f381ee7687a11794c0f7bacc052e2fa0943d91b56d3a5070ac20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRRSZ72O%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrIfih1HFhqh6CHY5ii182%2FNzCvVF%2BHcyjLEzPhO%2BLeAiBEXuPlNnfJ6jepzh%2Be1GLZDbKy0rdmUxN%2BMw2cDMfFfCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMDAK8I%2FPGfkIR%2FC%2FEKtwDEqvfE9X5o7QR5i%2BBiHxGLt7%2BCP1R6NTccJLz%2FB4qcF7cbqiEUYpZvIH6q3JrTolHgB83V20cKetieBDK4Q3M0jVg%2FuCgSjS3MTyEh2X3HVXI09dkNCT0uXU9WYr9Nd%2FTEbYQYS4EzklUuPqnHRQIb0qCe%2BclT1j16QZqBiRuhX7PBYg78EWpIRCU7UewwU2PGx68%2F%2BGZnz6FNX5Ma7Mt1LfYG7Ua6Bk%2B%2BBfoxDG1YAmK90RTZUFUDNC6WfRy7DiCfp86LYumh7je2RmJe%2BoeCIb6VZ8Tlj6F4TR9DZX7ck2k2FTAsgUSzjb2QDg%2Fmz9q%2BIagErmlub8r4Gb72fN5GHOMDrk8%2FQN3KKB40auaQ%2BavHgcHx9wuZ2wfJmV1uie5SPZ4zuwMGLjW3nqjLGNZ2US4IQjMJ8m4CeQUnTJN23Of3JuBse6oDteCPvlKizRZB5yhKt9mN1Q%2BGXdQ%2BcXvc0YuLG5ZR031YDwGo5z0tAuuiyWQlHKbx1MFnRj1d5s7o%2BPQ95EJDH8%2Fka54qNCUunfy08JYKBcjFHE0%2FMri%2F9Ms0Dc6ZahCNdZdY5J5y3AVKFIjcBxVLc44V9MZOOzbiPSth9DK0YVp2snhvmHnQxr6K4ObtQiaZlSbjk0wsfaQvwY6pgF%2FBCvw0oZpqRa8ngkT0mm%2Fpg0ZHZ40AHjtu3vs9WUD3BTkPU98vKtjVhfocaOGXqruyTrlv%2Fx%2FwkWtIR7Xxe8550It5urB%2FATH4B0qGIYrerB%2Bn0bipyf%2BKxky22tnkc3vVXcjbdBjmk6ujWJxxNHdNPbpnTW4jdF9cMwLLnRivOHSmQK%2BlK03UL32jkGcdeNqepIFuMculok4dhgI2vxrPtmFFMDI&X-Amz-Signature=e93beaaf35f3a990c6010bfb8446d4039dbff728c1a2b700b884e6e86d7cded1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJGBON2G%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHvcinmaTbWwiCtXlP%2Fhn7i%2BxtAxJkcvBc1%2FtnKj1wpAiB86y%2FHpoOETz%2B5iL636naCzyPpOdaSltb3UkaZLLAlACr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMQexvbxBTjgyZgoFxKtwDV50VOKQHMCRWM0L3amzypYGh6h0Pv%2BUIWdMXHre5gb7WBTk%2BSzaO2r%2BBKjtfNA%2Be3E7rOZ%2BwVPFJilYd8%2FwCixjdnnMJLnL1Anv%2B%2B6vV2ukS8BkDXkUDpHw4oJxLuCbju2RkGMOiPbXlGV0359Kz0gRfQ0YrPt2Vk4bpB9UAi69mC3qR%2Ff12mutcKYjCjrv4shQzykd9Eg6zVAECiXGZMEjogb3txBf15XEVkFXLUsQzVYR66iwkjiMC6aROtXdjxmPAjEgG%2BpjfMgNPVesD5XjKVArbQ8uP9tcECGj3X4jgpryQzwoerVUSAU%2FuRvI3EpEkkFo8ujvPd1KbLkn382pmeFpvRSe%2FNdF6xyOUtyzMklsFZSlIFlXj8ZsktpKxQqPhJJLul24rRK%2F1vNqrgpV%2BUG1dJsm5k9UYPYYQ9MUcdVxEfhwh3LdqEEUTC%2BPeyF4Uw49YVmWF8qXiXi9SPIEERsPugDj%2Bwz22li8rHeOGHNdoFNvhI1VxZOXmaYTdqU5Y8wlcXnWPgJE%2Fo%2BO36es0k%2BHwv8XpGGq5k%2BBvYdU210RU5aLm6z7AbBUynNFzDniagFmFlMAH%2FluwjkpTkNel0TlrSGa%2FalA4LeJLem8crFZ3vIdQnE3esWow4vaQvwY6pgH2tLPtGQt2bMiDIybDMgux6Etl%2BaPa18vsQ451%2BW1SsveRWkM33P9T3RaTVYMorujehkMFyeXhTgd4LLRQ0YJWgE1FGUgUYEDxVr%2BVBQf%2F9fRTi9MotkkLRT4LPJEnsSPESy9NtDJ%2BFpVeoCrj1pN%2Bb8eAtuQTXix1989XNVWauUgUkrkmYYQdHqDaqQLduTeqAIm0QndlDnxCaGJiaPGttjFSyf8E&X-Amz-Signature=f3646d133383b1d8ff92beb0d5559bef15f5578ab559dfd9eaf911926dd46149&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B6JPIO%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTukFfaa6bxtV7I2wgw0gOi7Cx96kpXhSG%2ByhHZhjCVAIgEt3yfyS30muQbhih38EJ7kXw8Ds6Of5VOMyGAQK2wQ8q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEMQ55aHNT09WlwciSrcA9H6j0OgUiCpqTlN8Xcu%2BBW4436sCUPxFIt10ITAk9hgH%2BVC7kUEbgOK5Nw2vXtpmSK5T03J2McuJWFMc7WhkqPYHmW9TkwI%2BQ8BEsM6oBCPzYCMPINDctRyzWE3w6MuocxggElNmSCz8%2FxTI0Mav%2F%2BmwCYGVST3O%2BSm4aLLqbqqJi2%2BB8J2t9NLx65VkFPykrdIzklqdfYoKJkaJ86mETdN7M8y%2BH8ZmCm5jIk1deXNShUULSZJsn6%2BtVlLUg3rydfFe%2FhI8PjLJo6pJv2CCnWlinxoR4%2FLQGtQdjrRU%2FWfBlEP8juOUu7xANwrou6WG7ktp0F5iNv%2FMK%2FkGULfsFcRZcDBWZg0U35Ek7gpzT82wCwl9jBcBqWFNLwg16ayOvWCwzXtHN54WK%2BFKnc9wClpOZosrjBVwcEkhD3SGYHBlf%2B8Balybx7a8OhliCYQ3Hx5s0%2BWq4Tss7BquIpylx4QGlUTldlUec5Yf4E6%2Bit0OY14EIqwtxQh6gShCz5Drn%2B6U%2F%2Fh3VtzOi1BU16ubN9MPy25M%2Fn5bOwXwGEitMskOW%2BnLQZQup1nhQzejFnfLfHC03ZFoWsiTk6GLxWoogc7WOT0QANirW%2BapB2HPFrxpBemqrHTAwQLzvIfMPX2kL8GOqUB%2FZyu1Q54JOJlKwZcI6jhmLE9ralvVNJbCCpWZFnFgwAP3VF0S6IKKAd8wUGmihDtgX8Nong1Y%2BvKfSAI52oesHbPNamSR18vpuZtjAvmT06IC8%2B%2BjVaPp27D28VfvnbqLONUAGNDVZBUXZgaHPVy1d1%2B%2FQ8u%2BcChxgdDIgOhNaUikFij9ilAaCJCSyq1EReQydCPXwbBuuM96V%2BJmW1AsnuLQl4L&X-Amz-Signature=753de08555e3cabe5e9eed46a69c72615ed150449f58dcde5db2c38b49c9af7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
