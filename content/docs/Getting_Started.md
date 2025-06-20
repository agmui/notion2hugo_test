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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLK43ZC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ296BBgXADmhYH%2Bts%2BdlJ4DMKGTnfO7g%2FNLcjHbyziAiEAuMnBONaU8z3DnS2XDVsXJnfiwzvxL6GMwklvOMZ2CMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrzluneT347I7xNzircA8RjvA40tw9eQlBaDB64otDPRHUJ%2F%2BwYO6JCNPKrBOD4%2BN48q9mA9P4YYRr8wQmy%2BeUVymhXTp0R275yQwHKVUYEttElb%2FbiTNHdqvwFMIkj3UPV%2FnNpJGuPlkhoPfil5zbNdjk18YpTN8l9bcvo8PN7I3zaoMQwdH9D4Z0cNzGGcZRFTy4STw8b4I7eaqAnYjZeUiB7vObFpdsJbV8eQvhxSsdqUkQT5KxWk%2FcMt6L4wdscJ%2B4MsW1pTKijWhjSdtWbUjb5WHGbEtMMhbGzPVFtqjg%2BcMa%2FoyNalQJ%2F2yRKr7C5KNmYohbiuwOQJNKavA0xNxPKRJ9r0eUOhqPVTs3MxQMcpcYp5VEDqVb5i8lmTtcISz%2FU%2B1j6FfHpMH4bv%2Fhx3hq%2FiELazHeyybqQmfPd11cOL28hFftDjI8BO2QzVtN2a%2BXfs2%2F14accRtBDHwogo4lxF%2FWzSwnEI1dHS3hzcTBqp9mQuFMsX302gGMTnYblAq3KQzINYIU2qm%2FLK6yKxtzYsn2mq8kZLd2N0QA0ec3xqKDywSwqe5qafMwlvU%2B%2FsY5cmWjNPhb7k0kbqnIoNcx43LruyT7%2Btlyx9BAiw2dVsX8heTM%2B6PtI3lf2e44ggQ3iTOHt5%2B1%2BMIak1cIGOqUBxtkbjBh6xhlGhWrIHQOpZZF4hr2Y9vEgxBtU3a8CW73cKWLUUZi6px1RiwktCZ4AnM5S5grLZ%2FRYGV78IBfk6%2FeyemgJB4RyrkUZIx59%2Bdch7UrexWgb9cSjwz9xPKGcN4Utzx0CDQzq09CdK%2FHpgATXCjVlIM3RWE5Sv9V9g3sC684xYXYWDIQsgLTNMmO4m05k2yn43JJ7HS7a2mmb%2Bph6lMGA&X-Amz-Signature=075faa2f7d587e36ef588dff0fe40d3cbb302939c945502cebbf6adb1316ca36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLK43ZC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ296BBgXADmhYH%2Bts%2BdlJ4DMKGTnfO7g%2FNLcjHbyziAiEAuMnBONaU8z3DnS2XDVsXJnfiwzvxL6GMwklvOMZ2CMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrzluneT347I7xNzircA8RjvA40tw9eQlBaDB64otDPRHUJ%2F%2BwYO6JCNPKrBOD4%2BN48q9mA9P4YYRr8wQmy%2BeUVymhXTp0R275yQwHKVUYEttElb%2FbiTNHdqvwFMIkj3UPV%2FnNpJGuPlkhoPfil5zbNdjk18YpTN8l9bcvo8PN7I3zaoMQwdH9D4Z0cNzGGcZRFTy4STw8b4I7eaqAnYjZeUiB7vObFpdsJbV8eQvhxSsdqUkQT5KxWk%2FcMt6L4wdscJ%2B4MsW1pTKijWhjSdtWbUjb5WHGbEtMMhbGzPVFtqjg%2BcMa%2FoyNalQJ%2F2yRKr7C5KNmYohbiuwOQJNKavA0xNxPKRJ9r0eUOhqPVTs3MxQMcpcYp5VEDqVb5i8lmTtcISz%2FU%2B1j6FfHpMH4bv%2Fhx3hq%2FiELazHeyybqQmfPd11cOL28hFftDjI8BO2QzVtN2a%2BXfs2%2F14accRtBDHwogo4lxF%2FWzSwnEI1dHS3hzcTBqp9mQuFMsX302gGMTnYblAq3KQzINYIU2qm%2FLK6yKxtzYsn2mq8kZLd2N0QA0ec3xqKDywSwqe5qafMwlvU%2B%2FsY5cmWjNPhb7k0kbqnIoNcx43LruyT7%2Btlyx9BAiw2dVsX8heTM%2B6PtI3lf2e44ggQ3iTOHt5%2B1%2BMIak1cIGOqUBxtkbjBh6xhlGhWrIHQOpZZF4hr2Y9vEgxBtU3a8CW73cKWLUUZi6px1RiwktCZ4AnM5S5grLZ%2FRYGV78IBfk6%2FeyemgJB4RyrkUZIx59%2Bdch7UrexWgb9cSjwz9xPKGcN4Utzx0CDQzq09CdK%2FHpgATXCjVlIM3RWE5Sv9V9g3sC684xYXYWDIQsgLTNMmO4m05k2yn43JJ7HS7a2mmb%2Bph6lMGA&X-Amz-Signature=42e3f479606183e763e1a22637db0ad3b12ee9f63060a5f5fdf585702d9d31cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLK43ZC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ296BBgXADmhYH%2Bts%2BdlJ4DMKGTnfO7g%2FNLcjHbyziAiEAuMnBONaU8z3DnS2XDVsXJnfiwzvxL6GMwklvOMZ2CMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrzluneT347I7xNzircA8RjvA40tw9eQlBaDB64otDPRHUJ%2F%2BwYO6JCNPKrBOD4%2BN48q9mA9P4YYRr8wQmy%2BeUVymhXTp0R275yQwHKVUYEttElb%2FbiTNHdqvwFMIkj3UPV%2FnNpJGuPlkhoPfil5zbNdjk18YpTN8l9bcvo8PN7I3zaoMQwdH9D4Z0cNzGGcZRFTy4STw8b4I7eaqAnYjZeUiB7vObFpdsJbV8eQvhxSsdqUkQT5KxWk%2FcMt6L4wdscJ%2B4MsW1pTKijWhjSdtWbUjb5WHGbEtMMhbGzPVFtqjg%2BcMa%2FoyNalQJ%2F2yRKr7C5KNmYohbiuwOQJNKavA0xNxPKRJ9r0eUOhqPVTs3MxQMcpcYp5VEDqVb5i8lmTtcISz%2FU%2B1j6FfHpMH4bv%2Fhx3hq%2FiELazHeyybqQmfPd11cOL28hFftDjI8BO2QzVtN2a%2BXfs2%2F14accRtBDHwogo4lxF%2FWzSwnEI1dHS3hzcTBqp9mQuFMsX302gGMTnYblAq3KQzINYIU2qm%2FLK6yKxtzYsn2mq8kZLd2N0QA0ec3xqKDywSwqe5qafMwlvU%2B%2FsY5cmWjNPhb7k0kbqnIoNcx43LruyT7%2Btlyx9BAiw2dVsX8heTM%2B6PtI3lf2e44ggQ3iTOHt5%2B1%2BMIak1cIGOqUBxtkbjBh6xhlGhWrIHQOpZZF4hr2Y9vEgxBtU3a8CW73cKWLUUZi6px1RiwktCZ4AnM5S5grLZ%2FRYGV78IBfk6%2FeyemgJB4RyrkUZIx59%2Bdch7UrexWgb9cSjwz9xPKGcN4Utzx0CDQzq09CdK%2FHpgATXCjVlIM3RWE5Sv9V9g3sC684xYXYWDIQsgLTNMmO4m05k2yn43JJ7HS7a2mmb%2Bph6lMGA&X-Amz-Signature=e3786da61d390c20d3cb8e3e087d8cada9d6b23c8b72bed8ce93b91f8e645660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4YOIKT%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD50CuQ2VR%2FK7%2Fl7W7akOMo50S52mxxsdEwrc%2FhAPQEBQIhAJPLqnTgcqRO0a1o6HuLA839JnQicdZdv682POzHhS0pKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCPzXwOJJKRNNZqpcq3AOFxYyg8eufnfGEOZfkBGnnqxuhAFZEuXwQULq2pqx23Qv2PH9Cvor0Gdk0RHKfZ%2BLVEVYCdgsgGLY3Ftdrxgh2Lu1ZYhU%2FC579zHXH%2BBaffGTiq4HjjiYJDD5pZPpQLvFCjAmJZGpjO%2BrnTEE4Fply6cD%2FxFGarbW5wLel2cRbpLxgZzlXjWAKzc0sbldlQ7habKwzi6R4Xxr1GvFw59fYmrHcbdg7eephxIWaaQrVXOYvcv99w63dU2%2FqJUKjDXcsGjNaYWs3SjYVawsHbxKk41IxSCd0OXTps3IGQI2uSQE6NYsNeAfGa%2Fiu3yuzd0s9v0Z6qT8YPaHIkt%2FHCRoWW6C%2FdfaQ7B8BPyDObRJkzMFK7AIsXrKJxoV6neNq4uK94PunP8FnfGcNBvJyK6mWM1MTIKyaZtfQCu3%2B2Vpv9281BdIHyGvGHAa3QoSPorN8gFOCeqA02Yt36WYp85hEMLPau%2BN2Grd6hE3svF8VJvYwv2JeEW%2BXjnavpO5I0u99TjPnIfV5x67ioXz%2BBGkCZe66EiEiNyHcHjtSuKNWUebZl%2BnYf6uDUBxVhjkcOYCAu6Z8eDKqTdK5sMnEYimP1svNI8dQulrFm6KxhqKlwINs4SEilotFJA%2BndzDAuNXCBjqkATCiFUYC2aj1WaCO0B9MO6VW7tC%2BRyIFuCULfPq5KpX7hHwEjaG%2BEpzVYLt95wLKp79tecKHEmlfKGCDYyaIugAk5bgwRCPbOLcxH1MOyK5ju6vIGNVrG1l3IoyaGLegplWqAGPdTav65pasz33HcLL554COHWxU1tMIxOxJvglOnpY81M%2Ft0u0fW%2F5g5vktGiq6Smuawihv2iSle3MlRsRJ%2FOjX&X-Amz-Signature=dc4842ec83dbce1f9131049af9fc3bd2843b780f374f2388958ac745bf90863f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P6RFU6X%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDorpHdm%2B%2F6%2F7e4A8AONR%2Fiuy7najorGFXXpVmsGfI1CQIhAJMzCo7cTKxYRudn2xZcj3EsWFYA27HPEzVCs%2FIq2J4qKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxwzq8EdEGSy7vt2O8q3AMhr%2BrS9MT3gUz8tB0ujqVtP9sJ9xoM4BqECra6cMwIsuGPJhTaC8xRkJWgL%2BQg0k3RXz9eZUtaL%2F%2BaxEdWr83OtY4jF6T%2F%2FExcW%2Ba9BiDPILUu12yNZQyu%2B7ZZ29%2FcmKPJz%2B2%2Bxtbl%2BPab3mhSxUAgILLx0II9MgOj4voXl1IbJ5cFJk4tO7lqOWxvKL35YVOZH172fz0muGakUmYQ8O3JOPYEr3S0RRG3eOhJ0SzFIyJ6pdUfpejGf9QUBxJu1wDvmrJve5M%2Bt2fmsVH%2FU10MpJIf5%2FJ0JhA%2F7ucUIAyTXNLUkKBVMLpDZEjx6hPzDJXOf6qRq6Y7Nzk2XlgG0PBqN1%2BAyszs3csoLoO5r8d8hlpy37GJKDO1b2geVYkwkcolFB%2Fly7tcrzyuUTKFTwEnOTdWq9LlafMYUcXpCnwJDsyqV3CKQqeKnNPl8PoL%2BFaDf1bbF8oIcw7pQj%2BMt0VTcTuNA5nuRFBo8L75LU5A1dRU%2Bt92%2Fm9KgWS8dGHSUe%2Fj4FOxYPBVlFW29kM%2Bl0iDVk0Mpl%2FWdfOaBAQxO6PIaJACdX2yFQEwJpC2%2BdjPH9h9CFlZu8eh1lj9EphQ8e0I%2BvBVDXhYi5fiJFwkuWJw2LvF569Tpi1t5qmmNDDO2NXCBjqkAcVVg7CPRaXTRZK5dRYmjix0R6Ka5c15FKpcYSNUHLLCvcw0FLXf3RlS9bWOz%2BpBQdaErB9jmgWCQoNL4BIMQxy%2BMsCNeQLtZIV%2B2vZRyovVNFITIAHjKgAYbrsz%2FfdiFZ91uGEG%2BNSMuDnN0TkMC2gt%2BwyQhXUBwq7%2FUKoQMz859bdMI%2F0yK4tcGgl9CvaAS0b5Vz%2FUEKkFzlux8YwfcCXztLou&X-Amz-Signature=5e1689c9560267996326be987bc858c4719ec1e103dad9dc4f253485827ba0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLK43ZC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJ296BBgXADmhYH%2Bts%2BdlJ4DMKGTnfO7g%2FNLcjHbyziAiEAuMnBONaU8z3DnS2XDVsXJnfiwzvxL6GMwklvOMZ2CMMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrzluneT347I7xNzircA8RjvA40tw9eQlBaDB64otDPRHUJ%2F%2BwYO6JCNPKrBOD4%2BN48q9mA9P4YYRr8wQmy%2BeUVymhXTp0R275yQwHKVUYEttElb%2FbiTNHdqvwFMIkj3UPV%2FnNpJGuPlkhoPfil5zbNdjk18YpTN8l9bcvo8PN7I3zaoMQwdH9D4Z0cNzGGcZRFTy4STw8b4I7eaqAnYjZeUiB7vObFpdsJbV8eQvhxSsdqUkQT5KxWk%2FcMt6L4wdscJ%2B4MsW1pTKijWhjSdtWbUjb5WHGbEtMMhbGzPVFtqjg%2BcMa%2FoyNalQJ%2F2yRKr7C5KNmYohbiuwOQJNKavA0xNxPKRJ9r0eUOhqPVTs3MxQMcpcYp5VEDqVb5i8lmTtcISz%2FU%2B1j6FfHpMH4bv%2Fhx3hq%2FiELazHeyybqQmfPd11cOL28hFftDjI8BO2QzVtN2a%2BXfs2%2F14accRtBDHwogo4lxF%2FWzSwnEI1dHS3hzcTBqp9mQuFMsX302gGMTnYblAq3KQzINYIU2qm%2FLK6yKxtzYsn2mq8kZLd2N0QA0ec3xqKDywSwqe5qafMwlvU%2B%2FsY5cmWjNPhb7k0kbqnIoNcx43LruyT7%2Btlyx9BAiw2dVsX8heTM%2B6PtI3lf2e44ggQ3iTOHt5%2B1%2BMIak1cIGOqUBxtkbjBh6xhlGhWrIHQOpZZF4hr2Y9vEgxBtU3a8CW73cKWLUUZi6px1RiwktCZ4AnM5S5grLZ%2FRYGV78IBfk6%2FeyemgJB4RyrkUZIx59%2Bdch7UrexWgb9cSjwz9xPKGcN4Utzx0CDQzq09CdK%2FHpgATXCjVlIM3RWE5Sv9V9g3sC684xYXYWDIQsgLTNMmO4m05k2yn43JJ7HS7a2mmb%2Bph6lMGA&X-Amz-Signature=e8a90a0c08c24063f9c1c797319334452761d832c0253804a27438b6b71f241d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
