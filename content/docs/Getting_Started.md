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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMFJNF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB43rMwo4i0dQuKlE%2BVqnc33HYjGecRicrteZYw06h0EAiB6ArrdD7k60LMjUoxBbtw2Uc%2BGCMn3IaI3XHc3LPTQ%2BCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMfjObRH4sJWedx5wzKtwDWdCMNPqMFnZFy887%2B%2Fp8d%2BjWEKp%2FkCjU9TQMAC4PVMcN0YursGV2cJKUZVhaJ00CPB5gcgOV76S%2BnIMyz5PhJfFWCbcsZDHI8lohaJvRVFERvX9gtVvr0%2FPHobkP%2BpnlGqirHFtURDrSNWRAeFMWbTF7HAURHbkWLSXurdX%2B36Y6x%2F%2FXRLieREVSiiqYNDGzqQ7nncGtf%2Fofs0GdmP%2Fx5A%2BiI1iB9L8eAVoUfw4hQ%2BwwQRI%2BkkPAUwLwLK%2F7aDLvAEs4UIjUXq%2FgtSjei5z1IvoXZFNLZELQppcBqFRcywBmsGgopdZN%2Fo876oEsC3sOQOJilmjgnPASkZa0g7bhzlokbU3XVWVz%2FLvmKwu6blKYOVRVOf3FS3cLgLSjC2YbNeNbMbPBfXvLej%2B0nDu4m84npBkGUiUDlXBZHrwqEt2Zh%2FYfTOipufx1bsEW%2F08hOsft1oNHR9X2LA%2Br75cExJUjKNjRDHzEu1L6mCq9yqUyhIMLleLU9i1FHZXz9wB075KRupQ6hEVNN9WtRqq2b5Wm934sEW%2FPCLxLDJov6A9t4%2Ff01k71MVmaCXY2zwZH7VL%2F1a7mvyGUPlxRbHBIr326OKA2yjFH3X2fBCyIi%2BThWb8UfFLHNMeKc5ow1f3FvQY6pgH2s384EEYeAdfcJu%2BuKQmIsG%2BpBpvVCdxI6nyytjbLAxItupkpZhjC4FG8EY%2BKl73ACMNvkWbuDUc0vNRBOyqNixFC2IRCi64BpI8rzjRa%2FEzzvWzuiEjfMBiBGTRR89nddkAtwqJ1l6cPtC0xcETXg57rhpdz38pddZ%2Bz4dqsRvrfq45VD4j9IQ9oAhNYmqqPJ90CrvV01TpdyAX73dpPu49jGNju&X-Amz-Signature=19dceeda65fbc364b6060ec60dd7612a85a8ae58a5f60cd0fb477e11c414dd0d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMFJNF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB43rMwo4i0dQuKlE%2BVqnc33HYjGecRicrteZYw06h0EAiB6ArrdD7k60LMjUoxBbtw2Uc%2BGCMn3IaI3XHc3LPTQ%2BCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMfjObRH4sJWedx5wzKtwDWdCMNPqMFnZFy887%2B%2Fp8d%2BjWEKp%2FkCjU9TQMAC4PVMcN0YursGV2cJKUZVhaJ00CPB5gcgOV76S%2BnIMyz5PhJfFWCbcsZDHI8lohaJvRVFERvX9gtVvr0%2FPHobkP%2BpnlGqirHFtURDrSNWRAeFMWbTF7HAURHbkWLSXurdX%2B36Y6x%2F%2FXRLieREVSiiqYNDGzqQ7nncGtf%2Fofs0GdmP%2Fx5A%2BiI1iB9L8eAVoUfw4hQ%2BwwQRI%2BkkPAUwLwLK%2F7aDLvAEs4UIjUXq%2FgtSjei5z1IvoXZFNLZELQppcBqFRcywBmsGgopdZN%2Fo876oEsC3sOQOJilmjgnPASkZa0g7bhzlokbU3XVWVz%2FLvmKwu6blKYOVRVOf3FS3cLgLSjC2YbNeNbMbPBfXvLej%2B0nDu4m84npBkGUiUDlXBZHrwqEt2Zh%2FYfTOipufx1bsEW%2F08hOsft1oNHR9X2LA%2Br75cExJUjKNjRDHzEu1L6mCq9yqUyhIMLleLU9i1FHZXz9wB075KRupQ6hEVNN9WtRqq2b5Wm934sEW%2FPCLxLDJov6A9t4%2Ff01k71MVmaCXY2zwZH7VL%2F1a7mvyGUPlxRbHBIr326OKA2yjFH3X2fBCyIi%2BThWb8UfFLHNMeKc5ow1f3FvQY6pgH2s384EEYeAdfcJu%2BuKQmIsG%2BpBpvVCdxI6nyytjbLAxItupkpZhjC4FG8EY%2BKl73ACMNvkWbuDUc0vNRBOyqNixFC2IRCi64BpI8rzjRa%2FEzzvWzuiEjfMBiBGTRR89nddkAtwqJ1l6cPtC0xcETXg57rhpdz38pddZ%2Bz4dqsRvrfq45VD4j9IQ9oAhNYmqqPJ90CrvV01TpdyAX73dpPu49jGNju&X-Amz-Signature=2fa7924346985f12e98ee8a5229c1de4027cbb9941d8ffbec05b05fde4469e13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DFUPH7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBk5vEqyD1BW7X%2FdFC4JiyfSbTrp0Z0nj%2FLyfY%2FHZ1vTAiEA54S38H8hAeGm4cVO1tPjj9NhoBoLAPIQg6FATrHsRUEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDPTKFML46CNTTONmIyrcA7bMcGdxOisF9md%2FEBzILXG1knCDpiUCtXGEFhzgUkouPIhKiqZWTkD9BZ2ATbhxGgTwfl3OgJo7JrCaDvrnGOO3TZhXHAXpS03gkIZjlnqeqkour7yVHWfUx5OAwYEQBqG240ZDRxhFzDPsPfX5WwvI6upoLf8YyI%2FAybh7VYL6s%2FkyEoLNVkPrZC8pRoOmNiI2F6MRZa3f6DAp65m2cZKQe6wTdqyX1UBNTCbV99nfrRJH5XgkZiJ%2FzypUD7u5VsNHQoWLEkpKa9a4dP3Cmf8%2BNp6%2B9B7zeDl%2BAe2bL1x8rLXQPBilpoXaPj4GXBFsKnUK%2BXkO4ZoLK8Sm8bBWK24XugiAVPiCRgoXBpcw9to74z89CNV1RWDJmR7wP0xOtndsr32wK0KP7BoxiJ1IFx3luAKkGpHMU6iR1Lsh3C%2FbkxFgzYZ3rhl01hA8fCzq0FXmytg1iWc9hOyUPAMsVnMoDHW4pWxOS1hPxsgW%2Fv1JfgessrogCsE9JAUX428x6bCXPf%2Fj%2FfHJeHPjSO1iqbgIeEvbYXlT%2Fh3j4MvDvHhMW3OGpJSe1Xm1zYWs94Y3%2Fe9fEJWWt%2F87yad62p2FlsZ4Lt%2FOzWpAoYiE%2BCc5eudkzptt5rDnDCh%2Bc1PdMNX9xb0GOqUBuDTpVLhv3cGD8QVxLhpOunU84FVwn7X0%2BySpe9oSWu2S8FSrZfonvfTM%2Fzet%2Bi95RX3w7KVAeCVez1pW3cwQUAZ8%2FdzL21ypoyQlbpON%2BhfCo5tJLjkRFxJWbsJQDFUKIa0klWRejS%2FjBBvdjV1TDtOJ8ctie6nPupENnR5tNQIS%2BzzCv1PnFtVqrEEzfi4ACGZWYL8s3sx268U82vUYM4zH%2FWNm&X-Amz-Signature=2b9df28c12ef55bf24e33d49a1c881d25d363f7b56631eba879d27b54d90e509&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUAH45P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHwKaHh7aoevkreoMtHS9yWSDvmdC8gqnX9SsUSqVQfSAiEAhnSXBrt96SsC%2BCUo0NHQRi2UJ4Sf%2FxTM2%2BygB9Jr%2BCkq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLBH2I5ParUB%2F5XgYircA4hXM4bKviA5xoXwiN2NxPMrPawoPn1ychDECRrYVgLxSWdfK2jep8kFUwmUNnjps3WnjEUZ88vEDHo5rdtybbfNJkg7wDTkuZW%2BZ2djp3He6Ev%2BY4ewKlmbKWzJ9EvL4ENWB%2FHtO6TGh5R3ck3IxzetdDv%2BiCu0AQ5QbdEQ23pwo1bC15f%2FPINRJIBE7yQglGs1LV3pTcM2rDa3C76XURXdR94PRE8ZVSMsTHK0sUG8zT%2FlPfl1SpBbwWx%2BisFKriN8X%2Bm0IrJbAOsY5Pv6ZT8Oqam9XUf4dfH2SBo2Eie5PqE02egJcCKQHtMb18wKH8SpFk8iOWSqD0TxhxaLpupAXOsx8StiUFkrBQ22waQtJ8VuE0ixYScd6WZLU3WqmiM%2BQv81cV%2FG34ljC3mwXwiXCLQeUnTS%2FYEifZ93PPtexGT04EuS8BucaWbi3uGq91UN37zjXXBbSROu%2BRqRhxsAn7K6aWR4zK3K%2FLprjb2lRlGouvW5ueDRnhAeRNfbcMjxOyEzCH9kFrCPzocCxRaI0G2QoMSTW%2BOfk5gGuVZwF6VZnDuTeVE6VJut%2FztmrYhcaJhdRosz2uL6qR98SHyu382bmTP8CpFNPKYuHlUMFhihxRK2h4GGFOvsMMH9xb0GOqUBsGQy3qYmMqA%2FCc6EFK1Iru9snu%2Bgdq1BkuZthFirPXaCwm8KmSvOoj%2BExhwfnSVO006lc3cOueCTDOIfzXvg8Ua6EaA1AZ8QvE1KPNPojto53fAM91KIyZesg%2F3Dg4m07HVPnT%2Bhep4K0G7si%2BcXT4GFW4I%2FhErzFNsrc4UJzZZRCze9KGQrKXmY0gt3qpku7TZlSX9NYUShBwMy8CN2YLrFBb8N&X-Amz-Signature=5bb38d9a0f254709b30601f50264bb8168387c977cc89a98718b371dda888382&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KOMFJNF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T060923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB43rMwo4i0dQuKlE%2BVqnc33HYjGecRicrteZYw06h0EAiB6ArrdD7k60LMjUoxBbtw2Uc%2BGCMn3IaI3XHc3LPTQ%2BCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMfjObRH4sJWedx5wzKtwDWdCMNPqMFnZFy887%2B%2Fp8d%2BjWEKp%2FkCjU9TQMAC4PVMcN0YursGV2cJKUZVhaJ00CPB5gcgOV76S%2BnIMyz5PhJfFWCbcsZDHI8lohaJvRVFERvX9gtVvr0%2FPHobkP%2BpnlGqirHFtURDrSNWRAeFMWbTF7HAURHbkWLSXurdX%2B36Y6x%2F%2FXRLieREVSiiqYNDGzqQ7nncGtf%2Fofs0GdmP%2Fx5A%2BiI1iB9L8eAVoUfw4hQ%2BwwQRI%2BkkPAUwLwLK%2F7aDLvAEs4UIjUXq%2FgtSjei5z1IvoXZFNLZELQppcBqFRcywBmsGgopdZN%2Fo876oEsC3sOQOJilmjgnPASkZa0g7bhzlokbU3XVWVz%2FLvmKwu6blKYOVRVOf3FS3cLgLSjC2YbNeNbMbPBfXvLej%2B0nDu4m84npBkGUiUDlXBZHrwqEt2Zh%2FYfTOipufx1bsEW%2F08hOsft1oNHR9X2LA%2Br75cExJUjKNjRDHzEu1L6mCq9yqUyhIMLleLU9i1FHZXz9wB075KRupQ6hEVNN9WtRqq2b5Wm934sEW%2FPCLxLDJov6A9t4%2Ff01k71MVmaCXY2zwZH7VL%2F1a7mvyGUPlxRbHBIr326OKA2yjFH3X2fBCyIi%2BThWb8UfFLHNMeKc5ow1f3FvQY6pgH2s384EEYeAdfcJu%2BuKQmIsG%2BpBpvVCdxI6nyytjbLAxItupkpZhjC4FG8EY%2BKl73ACMNvkWbuDUc0vNRBOyqNixFC2IRCi64BpI8rzjRa%2FEzzvWzuiEjfMBiBGTRR89nddkAtwqJ1l6cPtC0xcETXg57rhpdz38pddZ%2Bz4dqsRvrfq45VD4j9IQ9oAhNYmqqPJ90CrvV01TpdyAX73dpPu49jGNju&X-Amz-Signature=3daa100f9270308679d22bfa50da76ac13ee967fd75ee5962e2f8913b0b6f8c5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
