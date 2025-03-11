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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPHZXMI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIArraojuiWz7kDMEcWMsyVEybRhndXT9mXO%2BZMhqoa0gAiA3EQCQine6pTHrc%2BhQ%2FFG3wYxWawBFHG3tdfPc4%2FbVsyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTVw%2FUAKiF1lQ%2FjXKtwD0G8xrPSkWwficzAo5GORRjyUs3JGNaFTQX5Ys%2FwV2Ir2nimutCMfeqPEBOnOAeENsuRF1PY5SKpAcKOaoOr0G3H8WMKThFDFmJ3PJYgw2TVJRRLkBuk8EwjxBXMJpuNjnrQ0ozPmGx6yivNuoqIaSnmN2PcCQOd5kvZApELHbrCIHEpyOaepo2KpR%2BPdjkpF917NKkkJFxWV%2B4SpRA6mQSkbB2abTf8ziMEdXnu1gSQdC5LVp21qgOXd%2BXrTOC%2FMfCwqnNU9r9X%2Fgdauu2Y6hFRN%2BOvHL6Ma%2Fxy2FAYP2msDeuMV1RTdqeuvZ54gFQRl5z%2Fj8xIvP0P3yX9gPP5jnaB6v4zL%2F1%2BU2KzrXTE9IxF1waRa9XsKbpsVxBMFGZTvz9Q0DvkC8rbrBeMj4RS2ZwO77KY79pmmbxcslh9nNhayCNQVeBLwYekgzPIpgNOycGV7Ur3%2BP85T0A4AYNergoPgvQpUMR6hpfQKapnoDK2uPfLYl2QHOlXKsMOqX6NwxOj8kkvRjp2rzdS52uqvEpr623%2F73yMZkUvxh1QPJorFMNkbtX4lKg0Lgl%2B5q1OMS3f3GuLldLmqC7l8M6FZCadBiUHemshSgRNbJW96WRx1dvvyYD6sjxDyiacwv4%2B%2FvgY6pgFsOOGjIW0QqFdliUk3tE4TaVi3St8sFYwqFBr1DzG%2FvygeayoiI1B6C3Umr3bBUIbiyyxkJqjOXXfZm2h4TTOw%2F6BXvesWSXBBRW7i9Bf8dptPSSB8GqnO3SAtU6h6nVk9twJHszVTIpTrYtagtJg8496nKZt5WL6ldG2h%2BJPiPXwkdqSQhuyKO05jOXA52eZceuq42nlZWz0PEFRAJnH8HU5xkxHm&X-Amz-Signature=8eaaa376c0fe8764b3469e57e715dcdc0647ddcc43c45f39778aa31d6b762f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPHZXMI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIArraojuiWz7kDMEcWMsyVEybRhndXT9mXO%2BZMhqoa0gAiA3EQCQine6pTHrc%2BhQ%2FFG3wYxWawBFHG3tdfPc4%2FbVsyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTVw%2FUAKiF1lQ%2FjXKtwD0G8xrPSkWwficzAo5GORRjyUs3JGNaFTQX5Ys%2FwV2Ir2nimutCMfeqPEBOnOAeENsuRF1PY5SKpAcKOaoOr0G3H8WMKThFDFmJ3PJYgw2TVJRRLkBuk8EwjxBXMJpuNjnrQ0ozPmGx6yivNuoqIaSnmN2PcCQOd5kvZApELHbrCIHEpyOaepo2KpR%2BPdjkpF917NKkkJFxWV%2B4SpRA6mQSkbB2abTf8ziMEdXnu1gSQdC5LVp21qgOXd%2BXrTOC%2FMfCwqnNU9r9X%2Fgdauu2Y6hFRN%2BOvHL6Ma%2Fxy2FAYP2msDeuMV1RTdqeuvZ54gFQRl5z%2Fj8xIvP0P3yX9gPP5jnaB6v4zL%2F1%2BU2KzrXTE9IxF1waRa9XsKbpsVxBMFGZTvz9Q0DvkC8rbrBeMj4RS2ZwO77KY79pmmbxcslh9nNhayCNQVeBLwYekgzPIpgNOycGV7Ur3%2BP85T0A4AYNergoPgvQpUMR6hpfQKapnoDK2uPfLYl2QHOlXKsMOqX6NwxOj8kkvRjp2rzdS52uqvEpr623%2F73yMZkUvxh1QPJorFMNkbtX4lKg0Lgl%2B5q1OMS3f3GuLldLmqC7l8M6FZCadBiUHemshSgRNbJW96WRx1dvvyYD6sjxDyiacwv4%2B%2FvgY6pgFsOOGjIW0QqFdliUk3tE4TaVi3St8sFYwqFBr1DzG%2FvygeayoiI1B6C3Umr3bBUIbiyyxkJqjOXXfZm2h4TTOw%2F6BXvesWSXBBRW7i9Bf8dptPSSB8GqnO3SAtU6h6nVk9twJHszVTIpTrYtagtJg8496nKZt5WL6ldG2h%2BJPiPXwkdqSQhuyKO05jOXA52eZceuq42nlZWz0PEFRAJnH8HU5xkxHm&X-Amz-Signature=f45081cc42ba213014fd8e0917d98f323ff07340ad8d09753b47d68faba59575&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5JG3FGG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIBs%2BKxjlN8O3aDQIPE8RF9DNqOhYra1UJjxWZZ9sWI9XAiBlc%2FyW3%2FMXO%2BvciY1O7762W8NklWPQbrpKyW6bsgjCBCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwLDcP0cKkmxM6oPOKtwD%2FdriEbQhS87cvUWEQTaXjo%2FTftfNtl5khlDFkB5qyIRdlsqeKmiOdd6WkrmcEV9wQtnWvqT82GxdqVQlyN8wwH0lJKLxckfe78MVfN5jMgJRMOPooFOm8at%2Bd8PLD%2FUm5IlpGXGJ2ukeFjdmH63cIHyy%2FtmddNqxthiG%2BwUt%2B5bsbCcBRjCTvmkuqX8og8ChorGNy61BZgPPF47G%2FYAhLEcwMLORZsxfWJxXEqksihWcQlFn5ai0lDq8RGNPoxd8BxuUwIk7ZCJ013oe0JDpSrJoJnStw5lAwvpYjB6R%2F888tOgDKt2DvK%2B7YP08xN84uOshW5xAQx%2B2WM3EfgLBp%2FLW9VtGIQ%2BewBfcz7%2FVw4RQDlqqBxk9ARJj1xKaVWR8y%2B4kzWgw%2BVjzy6Hp4GH%2FH41%2Bv1RxpV93MK9CeCBqatLJwFiPcpBhLCiH9tMa50%2BdadpnNBa%2FdK9yA%2Fm5HX7WEwJ%2BcoJwhwSwuIWYOFoLJnnRW6KmNmIvO%2BasiHHa9yyBkW6Xc2nOv6F4Z2pXxP5StcYYt9EmoUOdUludtzeJs%2FZl2SWSrLHPGsTMzDFNUfLv%2Bq590kctXdTrAUOCYQNq%2Biq2fqdV1MutsnTR%2BnxQUpP6Mam4AABKfL9UpIIwz46%2FvgY6pgGmgJN6cUp95LcstCYgEpvM04yPZE31GZsSQpr0ai25rbkGSHhzFvUQBW0O0Ctm0pIdYkHueL%2FY66sd3UqXDzL3AFM3k%2FqsYJCCk2LX%2FIMUrOmIv8g%2BhfYXI62CU6KYzMjJt35yk7HGnD%2BJELGj2nULw3HHeHaXQK7cYP6OpL%2BYlldTwTegjh4ZQecMi4xzL0cR3UN9tvAFuN%2F0CAQTB%2ByQBSjEI5bz&X-Amz-Signature=c0c364c3ddd1a1f32698834a1460af75fa9e5a69244db96360bd5d7f2c66d81a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF5ZVZ3U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD1Z%2BEIQ0%2Fnu%2F2cPhtNLlmVdPx33OnluVUSgHclbu6tdgIhAO%2FLVlFn5Gz5K%2FF42QJTiBBr5BjRvGyBs1jECHRqOZoyKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxez8YRgFEdbczOXq8q3AOAeAYN%2BTtUxte%2FKyLq6KGf4G5G4cxZZaFy%2BoeRkD4JhKbpTVACWxldmpd2uBAQJV3Z8IYbf2mJnXiuY%2FlNwQLhveM%2FiMyFvTSRJ27LWzEsD6XJWi%2FM0BvvK3EkOgG9HfNUVH%2Bn6n73JSnf%2BR%2BNvo83JrajxtT8soDYrH0zgb1hD3yDxcOOevrzU6mNF2a36P1bPcWk1w3L7B8lAwyvAHPQNCFI4rOG7L8lxrvgfy09fzBf5R%2FO1jpmZUeLXfaEY4uUZ%2FwDNjFdvV4HJCgYGXoAtYyVdO1TAbZ%2Bmy2%2FcnEQdxZ8tNF4zX1N%2FrwuTyhAib1GqYH1eAdhYrpyxdtOAvcqLSkVDCReRG0rL3bsAV7ymHAi0Jh0Vda%2Fb0eEtWrtrDqCMvh8HJNGGz3N6Io%2Bj1H3NutS6PfIc2X0AhYxJrsNiNvYOjEQuwWg7Kl5pImHI8%2FaUbrOWxq4Bm4Y9XGKE7wpnCxrK5LkhTlf7430LvBZagu7eGEXRrGkPAJ5HzM5zMuHGyy430vNzgfaFbgpy5NFdQc%2FbCuK0J4BFP%2Bzjd9Ttz995FqAzPq%2FOMjSaNEHJwVrfGBVgEvC63nKDectyOSidasqrh6vv%2BCnZgTDFU%2BXyY81T7Tkv3HME8WpQTDHjr%2B%2BBjqkAaM4jiKYXvnTmH2C47FqXOev9gy1hCJ6VsCpunrbDEcKMGFanwfiNFj0Tsey2WKq8NRyQ2U25jtyqK41ymebD0pv9lVxhoAMfgGVT871TEjW%2Fe64c80ekCmVcht93%2B2MrDzVfCEiPLDDYSDA3fNIhY9cUbTbHuY8ZI12l%2FhgbM1DJaccBEz4Ss8ZKdDdu0fK0ylPXXdYhSsRruT6Ib2b6ytJgtgF&X-Amz-Signature=3c00b1c1af56c55dfeb39ce7f693033b84ebb989f475b59ab1f8901673448416&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BPHZXMI%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIArraojuiWz7kDMEcWMsyVEybRhndXT9mXO%2BZMhqoa0gAiA3EQCQine6pTHrc%2BhQ%2FFG3wYxWawBFHG3tdfPc4%2FbVsyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWTVw%2FUAKiF1lQ%2FjXKtwD0G8xrPSkWwficzAo5GORRjyUs3JGNaFTQX5Ys%2FwV2Ir2nimutCMfeqPEBOnOAeENsuRF1PY5SKpAcKOaoOr0G3H8WMKThFDFmJ3PJYgw2TVJRRLkBuk8EwjxBXMJpuNjnrQ0ozPmGx6yivNuoqIaSnmN2PcCQOd5kvZApELHbrCIHEpyOaepo2KpR%2BPdjkpF917NKkkJFxWV%2B4SpRA6mQSkbB2abTf8ziMEdXnu1gSQdC5LVp21qgOXd%2BXrTOC%2FMfCwqnNU9r9X%2Fgdauu2Y6hFRN%2BOvHL6Ma%2Fxy2FAYP2msDeuMV1RTdqeuvZ54gFQRl5z%2Fj8xIvP0P3yX9gPP5jnaB6v4zL%2F1%2BU2KzrXTE9IxF1waRa9XsKbpsVxBMFGZTvz9Q0DvkC8rbrBeMj4RS2ZwO77KY79pmmbxcslh9nNhayCNQVeBLwYekgzPIpgNOycGV7Ur3%2BP85T0A4AYNergoPgvQpUMR6hpfQKapnoDK2uPfLYl2QHOlXKsMOqX6NwxOj8kkvRjp2rzdS52uqvEpr623%2F73yMZkUvxh1QPJorFMNkbtX4lKg0Lgl%2B5q1OMS3f3GuLldLmqC7l8M6FZCadBiUHemshSgRNbJW96WRx1dvvyYD6sjxDyiacwv4%2B%2FvgY6pgFsOOGjIW0QqFdliUk3tE4TaVi3St8sFYwqFBr1DzG%2FvygeayoiI1B6C3Umr3bBUIbiyyxkJqjOXXfZm2h4TTOw%2F6BXvesWSXBBRW7i9Bf8dptPSSB8GqnO3SAtU6h6nVk9twJHszVTIpTrYtagtJg8496nKZt5WL6ldG2h%2BJPiPXwkdqSQhuyKO05jOXA52eZceuq42nlZWz0PEFRAJnH8HU5xkxHm&X-Amz-Signature=2903dc5d016c729060b8196d17e91c1e7684d1e57fd957eeb9e782c52039dcd5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
