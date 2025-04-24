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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCAJNNS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD3GB4J1KAuuw3QOSAanbrG%2BxvUQU%2FJ2r4Cvk%2Bh26wZXwIhAJ5e7ux9RiByNfbTmkJfe2HWfT%2FJQ%2BbIIChDc9G2aPqAKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf5MGOwnXX90IX3Lkq3AMnRfwq0Jww4iR09oD%2FOjiJZoPtzUfO%2FRZrJHOIkf3UCkSUo0Q1mZoloy3F3r%2BgkGucmE0yqaOpEdknL80g9OkN%2FjVlEUON4AKrJJglqwEBk2%2BARAi%2F%2FH0Tewlt5OdBN3Ee2ilBI60wPn8uCzh2n1ETsYd8h3Fd4ws521cnxpfofqcF8Nt6MeOiV70KsFURFUkKgZwu%2B8AYqCHUM8E7gGqTytPYJMkUcNS1J9%2BU6L6ddjMinkxLGToLTU6gaybMPNiB1VK4k0PnEwpMYKWhZRy0xS5TCmbabDHe9XEJcHQ6c3F2Y5Gri%2Bw0iCMpm2znqE3WLLloswDlVggSCs8s5vD1DObH2xNHIMkOvqwF7RpxkdT39crQDTiuGuW2W80PDTpSvwTNwWseQCdn6C88rw1FnAPpF8uBWgj%2FHJRiQv30i3P2HlSNrqmpUM8LcBFk1x95gfAjgeqUKW%2BoC29p3coKtqYlE%2FlVlo%2BQq%2F6hLXQEQN7tth%2BXYTKMves3ZnHYvdLWTfWlLe71bIT1OAMdjhdXum2R6itnZorscYLesA3SkeoEqCM%2Fxub0rZO69D7%2Bs7Vth5kIMR1xPiGiSPMKPyqe9JOedrvHV2XO%2F%2FZdEV5Q9EFWykgAaEhgn1l9kDD0mafABjqkAafhQhUS7LDxld7ygCn3Fu1Nc7by9vf5CpylT%2BNiqGcl78QyetAq%2BuJmhH1UrpAxHfkVNMHQTxkIBashnONkKyyAy0nMEHyO2nWm2maHeiC3ul9rlhy3iMVZWkaDJg1ao%2BYwWgnj%2FFnYFJLcKAARTQ91WZ2VoNj7WJZVBX%2Bs75ckQ9ob6d2Re6eKww9oduSw%2BKJxcSCkDX48J5srR9AjvSqtlE2G&X-Amz-Signature=a44c63c4129ae80f88e9d22726ec27b078dc28f42a018b2bb521d6ee82c12da2&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCAJNNS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD3GB4J1KAuuw3QOSAanbrG%2BxvUQU%2FJ2r4Cvk%2Bh26wZXwIhAJ5e7ux9RiByNfbTmkJfe2HWfT%2FJQ%2BbIIChDc9G2aPqAKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf5MGOwnXX90IX3Lkq3AMnRfwq0Jww4iR09oD%2FOjiJZoPtzUfO%2FRZrJHOIkf3UCkSUo0Q1mZoloy3F3r%2BgkGucmE0yqaOpEdknL80g9OkN%2FjVlEUON4AKrJJglqwEBk2%2BARAi%2F%2FH0Tewlt5OdBN3Ee2ilBI60wPn8uCzh2n1ETsYd8h3Fd4ws521cnxpfofqcF8Nt6MeOiV70KsFURFUkKgZwu%2B8AYqCHUM8E7gGqTytPYJMkUcNS1J9%2BU6L6ddjMinkxLGToLTU6gaybMPNiB1VK4k0PnEwpMYKWhZRy0xS5TCmbabDHe9XEJcHQ6c3F2Y5Gri%2Bw0iCMpm2znqE3WLLloswDlVggSCs8s5vD1DObH2xNHIMkOvqwF7RpxkdT39crQDTiuGuW2W80PDTpSvwTNwWseQCdn6C88rw1FnAPpF8uBWgj%2FHJRiQv30i3P2HlSNrqmpUM8LcBFk1x95gfAjgeqUKW%2BoC29p3coKtqYlE%2FlVlo%2BQq%2F6hLXQEQN7tth%2BXYTKMves3ZnHYvdLWTfWlLe71bIT1OAMdjhdXum2R6itnZorscYLesA3SkeoEqCM%2Fxub0rZO69D7%2Bs7Vth5kIMR1xPiGiSPMKPyqe9JOedrvHV2XO%2F%2FZdEV5Q9EFWykgAaEhgn1l9kDD0mafABjqkAafhQhUS7LDxld7ygCn3Fu1Nc7by9vf5CpylT%2BNiqGcl78QyetAq%2BuJmhH1UrpAxHfkVNMHQTxkIBashnONkKyyAy0nMEHyO2nWm2maHeiC3ul9rlhy3iMVZWkaDJg1ao%2BYwWgnj%2FFnYFJLcKAARTQ91WZ2VoNj7WJZVBX%2Bs75ckQ9ob6d2Re6eKww9oduSw%2BKJxcSCkDX48J5srR9AjvSqtlE2G&X-Amz-Signature=46b146957caa12bfb5954f260e281d55de00ab278ab2a6bd650c51839934f7d9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QMMOQL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDtFkBf72dbw%2BJl0UR7aUWkOkFtECwVY3sUBt5iVGkkJQIhANvg7IoKTXDxWSSl%2Ff5xlCknqptff63m0ggMNDVmoI3PKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFBmz8jcpgLkX5PhAq3AN43%2B808rDkKfH0U%2FBRKHQJdugvc58uOYJewG9L9dll7CMgAjWmiTzxEas3xgYMHJUj%2BkFzD%2Fx5T7p1m6Jq%2FsvUCABh4LR4caE%2FmElq3YdUcJG9QcD8wgzrp2rJqkk5c%2FBDYgKufAZY4CQNGPVWa5ZK7MPTEU5hPtif%2FK9F9MhPC4c188u4WB7BkKyDTgdUdLd%2Fckv9RyBNQ4K26dVF9ftjamcRXmUR1O5DMeQhEz10wl4Lkb0ea%2FJ4JXY0XJzTDYFhQ7UhIPsTLuD4zkLKd8kR2MWchWA87QZqD3CiZk0r4E37qPqTh4cS4Z%2BgAdeNPd35dGz38H4mW26lS3htzikpuPt9HNpBLbQCCx5Fuo9LLEv9hvbqenIWx52yy5QosFngaFZWeopE588Tl%2BZ2cx1NFjOUobDCElt8GzRgNreDeoR%2Fx6UWF8fx40VzLjopzh%2Fh8ngBVGdIT89I4XB1OXNpk8XSzHWZG2mlapzjNCLEEERlDWwnVl1E9ZtUbss4IxM6W0Dk5SoNR%2FRx7jmFY%2B0vdCf7WhDFA7Zf%2FPBiLR4LXd%2BeNKebDZziMxhXTajwSGSrFXVABhDzj8asP8Xx5hSxbLfhazlIVSq8DR982N7vIlqWAqWA%2F1kzMFTCWzDtmafABjqkAWRcl%2Fpj%2Bhvw3ihN0MrUJs%2BvHHbI8su1IzMg5RvpGzMXIHSZklJ%2BaIB%2FNyhJksxKxx2ZcWSPtymSj5lJJe2k7ArJ0WQhJul%2B85vRjsHNr9ip08HqbcukJo0PBSdKPSESmlF8tbAogJfVgmCKrOEKq%2FaawCPtZ5QY6KTVwJWFiJmOTV53%2BNoqBeWve2IjVlZ64Mhy0OrOTy%2FTLUWBeXqm4pLKsqfU&X-Amz-Signature=6df530e8d5867129ae4600fae792705cf7866b07f957f67a4313cff0c4808be2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AT27SKH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCHbM9DFtab6zIFuX%2Fr4MbYkIFw3Y73Ho8BXWf4wQ%2B3ngIhANG5jzSPPOh0kvJoG%2B9AnLxqUac5NYuPWaXbOt58Ha2qKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrv8se%2FXoOjbTlD0cq3ANDRX%2F9bNk4qGNxN6sBoLIgKePvqfzNUapJaztudi48JjinDwqsW9Gznse5NwJuDLQfYz0l7%2B8d6j2gmTe7tIPcOTU4hdPpgyyKjHDADDogdQGW4HENvpkhMkmi2CIZolnx%2Fq%2FlEFrLUrzLLWgDvSR2rzSDQEYH4L3JTENr%2FyYocBucUtXdYYLChkrasIKJJTEKUjZQvaWoFpHRNOd9DxMahrXoBGrHQUURBXigSU0e97xDLH4IVaJoQ4ui92S8vJjGL1QNZab2xXboF%2BENhTNMJ3kWJ1abZT8vZngqm9x1He%2F2%2BAOIuNLyVbt8cSLv6v9bwMhXOBJ3%2FUDZqMA%2FIjothu%2FydyjBSdEI%2B4V97mMNyWKj2qjmQwp5CM5vylt5fcowMgGqo%2FTQpxOJipZL8N0BuFzrqyfHTl5HcsSL8U45AgZiLDFwcrvq7kMg8nYNXm4UokknReHD8MFec8vohEdggkaVAx%2FLhO%2BZ72%2BtWo6ko1GpWFsXiUstQUGykPNFbDrc%2B0LVGIJ6oqH4M0Q5VbGhTbrNGK6714NgLSm08Bjwf%2FBvdZ9c4MAWfPX%2F6HDci9nL4HnayFezn37mhNZ3oYLIADJSePSZD2sI46JhpEBRBeWW6REeigmiGHYLcDCZmqfABjqkAWjsl%2Blg4dU7n932842LwvcT3JmnmII0aS4gTHcNwPjtWoRw1LJQq5KV0kr3Sk6MuRxxTmEdfs5Hoo2cPxRShPiHgyLQJTh1ZVoQ9N2P6jzO3zzjRxsw9OluK2wtlZbM6PFFXvpJ4V2L7Eld0TXi7ArPp17eMSRw0eK%2FIfal5e57wnUkHsT7b3ECiddCW7TUm508fUwHSJPDoMCu7XdPM9qpdHNG&X-Amz-Signature=b10910d7afb6b8736805a288e2578a45429ed85595c10ed6869558f7f470b545&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCAJNNS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD3GB4J1KAuuw3QOSAanbrG%2BxvUQU%2FJ2r4Cvk%2Bh26wZXwIhAJ5e7ux9RiByNfbTmkJfe2HWfT%2FJQ%2BbIIChDc9G2aPqAKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf5MGOwnXX90IX3Lkq3AMnRfwq0Jww4iR09oD%2FOjiJZoPtzUfO%2FRZrJHOIkf3UCkSUo0Q1mZoloy3F3r%2BgkGucmE0yqaOpEdknL80g9OkN%2FjVlEUON4AKrJJglqwEBk2%2BARAi%2F%2FH0Tewlt5OdBN3Ee2ilBI60wPn8uCzh2n1ETsYd8h3Fd4ws521cnxpfofqcF8Nt6MeOiV70KsFURFUkKgZwu%2B8AYqCHUM8E7gGqTytPYJMkUcNS1J9%2BU6L6ddjMinkxLGToLTU6gaybMPNiB1VK4k0PnEwpMYKWhZRy0xS5TCmbabDHe9XEJcHQ6c3F2Y5Gri%2Bw0iCMpm2znqE3WLLloswDlVggSCs8s5vD1DObH2xNHIMkOvqwF7RpxkdT39crQDTiuGuW2W80PDTpSvwTNwWseQCdn6C88rw1FnAPpF8uBWgj%2FHJRiQv30i3P2HlSNrqmpUM8LcBFk1x95gfAjgeqUKW%2BoC29p3coKtqYlE%2FlVlo%2BQq%2F6hLXQEQN7tth%2BXYTKMves3ZnHYvdLWTfWlLe71bIT1OAMdjhdXum2R6itnZorscYLesA3SkeoEqCM%2Fxub0rZO69D7%2Bs7Vth5kIMR1xPiGiSPMKPyqe9JOedrvHV2XO%2F%2FZdEV5Q9EFWykgAaEhgn1l9kDD0mafABjqkAafhQhUS7LDxld7ygCn3Fu1Nc7by9vf5CpylT%2BNiqGcl78QyetAq%2BuJmhH1UrpAxHfkVNMHQTxkIBashnONkKyyAy0nMEHyO2nWm2maHeiC3ul9rlhy3iMVZWkaDJg1ao%2BYwWgnj%2FFnYFJLcKAARTQ91WZ2VoNj7WJZVBX%2Bs75ckQ9ob6d2Re6eKww9oduSw%2BKJxcSCkDX48J5srR9AjvSqtlE2G&X-Amz-Signature=c812da87368024aa15d5d8003b0fb6530ab0143bb9f0b09a149edd7960f27c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
