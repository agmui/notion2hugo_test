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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2HI3V2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEOL1HGusQQwFrx9EKEBVriSiVxjkSZbpfShypBR4G%2FAiBhaxT5LNxiU8KW38WgluyojvUInAq%2B6G4SxUdDmKS9uSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8eO3H%2FXnIA0x15dzKtwDMGCmlXax3IAy%2BiKoFvI8VuBvKJaGBlaBniyJphvgYPffGG1a2xBkE4zZ%2BX0X80wFp2T0F%2FGp1qLR5VbmUjscxPtUu9GEGZFFQjmdEVHE%2BFvgjGA0dyUeHplEB%2FV4fTg0dHvBZ1ZLZm6QADF4MqbvK2hj4XQ%2Fd7pHEuuVEb5MxgbMIn8z1IThoQa6%2BghFsR4NGkJKTGivmNKhSmPTA9krLs22vYsrkyGucP%2FBJHyNjrymkN70PTrGOyKkfXbY5VmyH4Js6NLl9oJXGzXD7xb0FvlWPTPGM6rKNIeHjjcTW5XgerZW9Dc2l%2BLERetNKicdASdtOGGAjVo8%2BhX5p9cGyaK9nbXC0jN0gCX88qlSkI12UEmezr92X3AhInTMgRcQJzu6DjpomDe21Qv%2B%2B%2Fn6ZDtSeqd95QJpIInVB2FvQjdvX3KpciLm638l0WKbLirm6pMCKGpwkQMJM1xWrBm0UzeGbTSOddRjV1tljcBBu7vHC3ajvm6%2FiuyWvCUFlmvy4FnQuDtRrgzEt4Aa35m%2FPFF%2F3wA9RtoB3zfQ8tFrZYeBNxa%2BCbTYCCOIikVqChgMOp10RHa0fsAtWpSi2Cc5U33XOo1d55wENuBhKWECVrulHlTaxHgvSjVrtWowiPjcwQY6pgGBu8tPhqziPvppNxHOZ0Ez5MK1dZCPtpNy505MyK0PWJsNSBXqthF0OC4%2Bn9Az0qcIJxtZoz1Q3umSnr6CSXpMZk8SwngD98IDOFP4M%2BRf3jfzeD72mZoVjPiAR9YOujWePxkNLzEQdO4UbM7ZXtCp9MyQb4RK2Y5cqlCFTATbki2QTDjBoANT2g3e7n0QQj%2FyRTb8YtKHL2q01nuP7WCs3upK1yFJ&X-Amz-Signature=98fe5bf368bee3a12b8b4a03992ef958c677c43c636361a5a0519044e19a2713&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2HI3V2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEOL1HGusQQwFrx9EKEBVriSiVxjkSZbpfShypBR4G%2FAiBhaxT5LNxiU8KW38WgluyojvUInAq%2B6G4SxUdDmKS9uSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8eO3H%2FXnIA0x15dzKtwDMGCmlXax3IAy%2BiKoFvI8VuBvKJaGBlaBniyJphvgYPffGG1a2xBkE4zZ%2BX0X80wFp2T0F%2FGp1qLR5VbmUjscxPtUu9GEGZFFQjmdEVHE%2BFvgjGA0dyUeHplEB%2FV4fTg0dHvBZ1ZLZm6QADF4MqbvK2hj4XQ%2Fd7pHEuuVEb5MxgbMIn8z1IThoQa6%2BghFsR4NGkJKTGivmNKhSmPTA9krLs22vYsrkyGucP%2FBJHyNjrymkN70PTrGOyKkfXbY5VmyH4Js6NLl9oJXGzXD7xb0FvlWPTPGM6rKNIeHjjcTW5XgerZW9Dc2l%2BLERetNKicdASdtOGGAjVo8%2BhX5p9cGyaK9nbXC0jN0gCX88qlSkI12UEmezr92X3AhInTMgRcQJzu6DjpomDe21Qv%2B%2B%2Fn6ZDtSeqd95QJpIInVB2FvQjdvX3KpciLm638l0WKbLirm6pMCKGpwkQMJM1xWrBm0UzeGbTSOddRjV1tljcBBu7vHC3ajvm6%2FiuyWvCUFlmvy4FnQuDtRrgzEt4Aa35m%2FPFF%2F3wA9RtoB3zfQ8tFrZYeBNxa%2BCbTYCCOIikVqChgMOp10RHa0fsAtWpSi2Cc5U33XOo1d55wENuBhKWECVrulHlTaxHgvSjVrtWowiPjcwQY6pgGBu8tPhqziPvppNxHOZ0Ez5MK1dZCPtpNy505MyK0PWJsNSBXqthF0OC4%2Bn9Az0qcIJxtZoz1Q3umSnr6CSXpMZk8SwngD98IDOFP4M%2BRf3jfzeD72mZoVjPiAR9YOujWePxkNLzEQdO4UbM7ZXtCp9MyQb4RK2Y5cqlCFTATbki2QTDjBoANT2g3e7n0QQj%2FyRTb8YtKHL2q01nuP7WCs3upK1yFJ&X-Amz-Signature=962d01a652d2d20dea07b222300a6f8d97101a5b0e4565342315e2ef16d4847a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2HI3V2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEOL1HGusQQwFrx9EKEBVriSiVxjkSZbpfShypBR4G%2FAiBhaxT5LNxiU8KW38WgluyojvUInAq%2B6G4SxUdDmKS9uSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8eO3H%2FXnIA0x15dzKtwDMGCmlXax3IAy%2BiKoFvI8VuBvKJaGBlaBniyJphvgYPffGG1a2xBkE4zZ%2BX0X80wFp2T0F%2FGp1qLR5VbmUjscxPtUu9GEGZFFQjmdEVHE%2BFvgjGA0dyUeHplEB%2FV4fTg0dHvBZ1ZLZm6QADF4MqbvK2hj4XQ%2Fd7pHEuuVEb5MxgbMIn8z1IThoQa6%2BghFsR4NGkJKTGivmNKhSmPTA9krLs22vYsrkyGucP%2FBJHyNjrymkN70PTrGOyKkfXbY5VmyH4Js6NLl9oJXGzXD7xb0FvlWPTPGM6rKNIeHjjcTW5XgerZW9Dc2l%2BLERetNKicdASdtOGGAjVo8%2BhX5p9cGyaK9nbXC0jN0gCX88qlSkI12UEmezr92X3AhInTMgRcQJzu6DjpomDe21Qv%2B%2B%2Fn6ZDtSeqd95QJpIInVB2FvQjdvX3KpciLm638l0WKbLirm6pMCKGpwkQMJM1xWrBm0UzeGbTSOddRjV1tljcBBu7vHC3ajvm6%2FiuyWvCUFlmvy4FnQuDtRrgzEt4Aa35m%2FPFF%2F3wA9RtoB3zfQ8tFrZYeBNxa%2BCbTYCCOIikVqChgMOp10RHa0fsAtWpSi2Cc5U33XOo1d55wENuBhKWECVrulHlTaxHgvSjVrtWowiPjcwQY6pgGBu8tPhqziPvppNxHOZ0Ez5MK1dZCPtpNy505MyK0PWJsNSBXqthF0OC4%2Bn9Az0qcIJxtZoz1Q3umSnr6CSXpMZk8SwngD98IDOFP4M%2BRf3jfzeD72mZoVjPiAR9YOujWePxkNLzEQdO4UbM7ZXtCp9MyQb4RK2Y5cqlCFTATbki2QTDjBoANT2g3e7n0QQj%2FyRTb8YtKHL2q01nuP7WCs3upK1yFJ&X-Amz-Signature=6710ad55ec96eeaf38cccd7fbf764a9f7005876a13f84c80e2e51f807ea7cc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7F7JA4X%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEO5k7c7fa97Ce6ecZFmD7OPNVI4JRsrUVhm4wQDQtFgIhAI6q9lpClr57j0gHgGfKnyTuZqZ2HNzOfp%2FCjpT4DZRYKv8DCHoQABoMNjM3NDIzMTgzODA1Igx8S6IdSXObjFXdQw4q3AOcS9G3109MOXXUdeI5Mfsx7ulZp0beyrfvL4tOxi2AKdU3QX1c2%2BsAP6VMxkYFWii%2B35t7GUd8cBFPlPVFYrwqle7hF3IqqiysdeC5zX4GlCyVzRT7igC%2B%2FLNslgJWtlvYM8m0%2BFwtNTW3W7ZrgTxeRG5qKXvFVbVksagYSSl7nxApOxV68L%2BOQ2%2FOTAyVgbO4RRnWUeAZEcLEOn%2BvJ5XLCMRWM9w8Wa9Msz7Vu81Efb3QiOTckbxg%2BJODsSiHA9WPvRVITBqXcpF0LJ4AXXKjzboITMzQrWNpEuBR5uLI4tR3NP8zpILPdD%2F%2FaPtDg3U%2BreuK6IzPMhjm%2FXjAoMBAI8DoATvA6qc8xnJxXxnfT2zwToskqKPE92NfJ0meh28guDE%2FDCjQElyg8i2zRwDkzTXFabAePSMHxjh36X334N52D1n%2FIgPzX0fTSKKoXiYkMYufxSj7ccvI1GiyuaU6y4rn7MVplzK5hqQEVr9Py%2B%2BQW3AFAZMvqq%2FD409e2vxR3TXxei6opjPTabV7PPq20MKoo4rSeoU%2BvpCiYthLyLjEqLYyFB5h7b%2BU72j53m3MjyZMGoH312HrOiayckMz2ykJ3Wk9bQNMZ9UvbaxW5wEKu6tnDDkYIGwGCTCk%2BNzBBjqkAU3EXRwbwSMQb1a34LhEeLERTkw3RKRQhR2CLCG%2BlCJ7qxDK%2FkyscVut632e9a5dhaImwo7%2BwaDBQQJkiTlmUbCB6xjozRWqtGgJkasCtdHb7%2FRZU72gITuHBtwVu2d%2BNArHu3fVul0lzsfEJ%2BQQTPIzIMDR39a2MsfTcAPh17vij%2FOPbeROfwwuTV5ks3EaneVoBajSFyeGm0%2BgLSV5VzW%2F%2FRGu&X-Amz-Signature=63d4d0ebc54ddce439127dbe5c7651e3bbcb6d8f5ac24c85fad900d1c400f0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3YYRSY%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApGylafJG0mhgYziiGgG5wkXjqbXp6Nn3hoJH41IC8AIhAOU6g%2FypL9EObcSXH5jHhQSkgbUPd5TeHIlvahJo0A9pKv8DCHoQABoMNjM3NDIzMTgzODA1IgzLwdnwRQtTqdgxLNkq3ANZXIu6M3SsMN6xQy0FHilWe3%2BwlsUw2%2FgM4Yl4PZaEkXl2t8DLplS6DNccsRE9y%2FOWr7Jws8S%2F%2FntRFODc0Z%2FfxpAnB66z6pWEm9xOBfaDH5FdXnZ51kNQMUJ4KDtypN2QKWQt18e9571Bl3bkWcuw%2FaAC%2FfnxaCOP6%2B4BZ1pNHTBXxGDk62ol2IduwAlvOowOxOayYQ4%2BfXb98MpsUT1nisd2i%2F7IRkZhrdT%2BDnPZDGG0z1bGLYK%2FWNIGAGzsQbNHK%2BbDSAMvbuHT2sSDZNkJntZwzAxboP8bA7sDuLpZ4U%2BG6QJM8dgg8eooGX4626Zy9en5vGM9xP%2FB8FygNRIkU0wpaFRrkzDu78c0XuT5%2BGgH5bxHVThisMCorTRg7gPq6Ba5B5sM%2BMemxn1j8hGHHx4OkuUO51R6hEgKZ4F82twY0YWJFnFAC6uRXz0HPFjg2ZbD68v3eSXvoMlQCecAeH%2FU4by5aP2J3YyP3Cf4%2BBPhk9k2hge0HtOEwFk7IVQjcEyZfxfk2GXQQZd0WWLU4btUVxBlsG6o%2B2CAckPO3eK0XnLWWVq9U1bNf%2BFX63hyB1nA16pesNJ4wKTD3kcCAUz2t%2BTel5NSgA4xoqWJis3YpAZCMfutPJyPyDCZ%2BNzBBjqkAUpzayJ8bQvOUQrThzjCVukZTvoKVqerAnCdvm2z2OSCR%2BnZaSJWJ%2BmpAo5%2FEK%2Fp8Iuc59PKdZq0sF9gFTH0hq2PovnQUNn6Pj9OaeQ7%2BktqTCWPLoXnxpP1PsHLYJeJThk7LKnGQZNnD8taHKyth9HXvdBDQDHK1FcVDlAMel8KTkTHfp785q4UU2yG0Znkcw1T7L3eqhNtlt1BkPfnI7UEWMCT&X-Amz-Signature=11c585eba14373cc5618edd9c631be006134e6745ea5e610acc513245cae8c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD2HI3V2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEOL1HGusQQwFrx9EKEBVriSiVxjkSZbpfShypBR4G%2FAiBhaxT5LNxiU8KW38WgluyojvUInAq%2B6G4SxUdDmKS9uSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM8eO3H%2FXnIA0x15dzKtwDMGCmlXax3IAy%2BiKoFvI8VuBvKJaGBlaBniyJphvgYPffGG1a2xBkE4zZ%2BX0X80wFp2T0F%2FGp1qLR5VbmUjscxPtUu9GEGZFFQjmdEVHE%2BFvgjGA0dyUeHplEB%2FV4fTg0dHvBZ1ZLZm6QADF4MqbvK2hj4XQ%2Fd7pHEuuVEb5MxgbMIn8z1IThoQa6%2BghFsR4NGkJKTGivmNKhSmPTA9krLs22vYsrkyGucP%2FBJHyNjrymkN70PTrGOyKkfXbY5VmyH4Js6NLl9oJXGzXD7xb0FvlWPTPGM6rKNIeHjjcTW5XgerZW9Dc2l%2BLERetNKicdASdtOGGAjVo8%2BhX5p9cGyaK9nbXC0jN0gCX88qlSkI12UEmezr92X3AhInTMgRcQJzu6DjpomDe21Qv%2B%2B%2Fn6ZDtSeqd95QJpIInVB2FvQjdvX3KpciLm638l0WKbLirm6pMCKGpwkQMJM1xWrBm0UzeGbTSOddRjV1tljcBBu7vHC3ajvm6%2FiuyWvCUFlmvy4FnQuDtRrgzEt4Aa35m%2FPFF%2F3wA9RtoB3zfQ8tFrZYeBNxa%2BCbTYCCOIikVqChgMOp10RHa0fsAtWpSi2Cc5U33XOo1d55wENuBhKWECVrulHlTaxHgvSjVrtWowiPjcwQY6pgGBu8tPhqziPvppNxHOZ0Ez5MK1dZCPtpNy505MyK0PWJsNSBXqthF0OC4%2Bn9Az0qcIJxtZoz1Q3umSnr6CSXpMZk8SwngD98IDOFP4M%2BRf3jfzeD72mZoVjPiAR9YOujWePxkNLzEQdO4UbM7ZXtCp9MyQb4RK2Y5cqlCFTATbki2QTDjBoANT2g3e7n0QQj%2FyRTb8YtKHL2q01nuP7WCs3upK1yFJ&X-Amz-Signature=ab2ee4389807fe6ead8ceff5b4727c70073630cd7ad8f2eb11068aac238d9497&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
