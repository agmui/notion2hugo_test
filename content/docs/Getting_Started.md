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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAH6U4KH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIB5NEmItsgvV3fLa9tLvtuIXmfdIUxGehag5kLwX9qJuAiB%2ByJOL%2Bej27mA2NImH55y3scKe9X53XIB%2F1yqupTiLXyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyqQhE0MEZrKxiIMKtwDyDNxYm4LkNbE%2Bi4fzkSKFZyowRj20DBoR0SHsMoVwUebjkh5z9f4mffTZ6hHnQ813TSvrtGs4GOPnHZlXchctDql7kfu1JHZk7CTFPFPr4ca5NCBGKgrGfhFgKuzEqJR2fa9o5NRwJKTIutnQRQJJ2yyVtXl2OaLg979MA1%2FdyVJtXB2podzUfh2CdD8qLT%2F1QtXmUfJI25y930FrBMAstbU9DhtB39cG8CLXSRhs4Li4P2VmmFrjVYfVlj%2BP0cidJAMSt%2Baj999eAObTOo717B8Zy%2FwhoGkqyulCFxp3n%2FO9wb1h6onH%2BTUtHLHmf7uD4pxHq9luKNKOV9DHmjEOWEPL4skP7qLFrOD4eyZ62a9L09JZfO7Z3YWKnhkvOwFqWoU4kPA6te2k1H9RbkLDQiIU8HaAygn8nqjluj3MUTnQcduAHKL1A39rP4FK0epOSJF%2BbZr6I%2FGwfdjxttmcMkWshNGSTo9CBF4DzaZSXiyXpkqs9lINgs73ZSEyOjZNutmaTrjiRg9UvXTyGCavnbF5sIqd5bKavC9b0xm4v%2BUJtsNqyjKFOd1Q17z%2B8RC78evPTSbp5PdORB3bfeZWk2N0LiXJcddN58q%2Bzrt%2BTdzlrXE2djZefXCUi0w7O77vgY6pgEuVvkxTFbpslgAJNtJcYcHVtT8LwsFNMK%2B5PJwmEnWJnnJ99%2BQ5sh5znjLcrRFfSnRDijlYQiMd1zjt3voCado5iIbHqtgcIIWtDcJcUdzxMPxF41Hm%2BneSIxY5riDAQ%2BR%2BUuU%2BSgOIYlQNZsceylGpEWR3dqdMeOynhKybR3BGHmd6HikuXtSoWBojjkT8sbUBJfassPqyhlKFqwT7xHLY7ikAcEe&X-Amz-Signature=cacc65ca86d947bc640a5337c9e4c2b1a3078e806d6db0d48b75141a2198e0f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAH6U4KH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIB5NEmItsgvV3fLa9tLvtuIXmfdIUxGehag5kLwX9qJuAiB%2ByJOL%2Bej27mA2NImH55y3scKe9X53XIB%2F1yqupTiLXyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyqQhE0MEZrKxiIMKtwDyDNxYm4LkNbE%2Bi4fzkSKFZyowRj20DBoR0SHsMoVwUebjkh5z9f4mffTZ6hHnQ813TSvrtGs4GOPnHZlXchctDql7kfu1JHZk7CTFPFPr4ca5NCBGKgrGfhFgKuzEqJR2fa9o5NRwJKTIutnQRQJJ2yyVtXl2OaLg979MA1%2FdyVJtXB2podzUfh2CdD8qLT%2F1QtXmUfJI25y930FrBMAstbU9DhtB39cG8CLXSRhs4Li4P2VmmFrjVYfVlj%2BP0cidJAMSt%2Baj999eAObTOo717B8Zy%2FwhoGkqyulCFxp3n%2FO9wb1h6onH%2BTUtHLHmf7uD4pxHq9luKNKOV9DHmjEOWEPL4skP7qLFrOD4eyZ62a9L09JZfO7Z3YWKnhkvOwFqWoU4kPA6te2k1H9RbkLDQiIU8HaAygn8nqjluj3MUTnQcduAHKL1A39rP4FK0epOSJF%2BbZr6I%2FGwfdjxttmcMkWshNGSTo9CBF4DzaZSXiyXpkqs9lINgs73ZSEyOjZNutmaTrjiRg9UvXTyGCavnbF5sIqd5bKavC9b0xm4v%2BUJtsNqyjKFOd1Q17z%2B8RC78evPTSbp5PdORB3bfeZWk2N0LiXJcddN58q%2Bzrt%2BTdzlrXE2djZefXCUi0w7O77vgY6pgEuVvkxTFbpslgAJNtJcYcHVtT8LwsFNMK%2B5PJwmEnWJnnJ99%2BQ5sh5znjLcrRFfSnRDijlYQiMd1zjt3voCado5iIbHqtgcIIWtDcJcUdzxMPxF41Hm%2BneSIxY5riDAQ%2BR%2BUuU%2BSgOIYlQNZsceylGpEWR3dqdMeOynhKybR3BGHmd6HikuXtSoWBojjkT8sbUBJfassPqyhlKFqwT7xHLY7ikAcEe&X-Amz-Signature=a1d9c73b229a7b6c2a508492e492b14aa6926d2e9756e0c6eec224f00467a8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3765CJQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDvCjt70K%2BMaWqYAaO2Dob38kJkIxy2Gpg%2BxOf8MI9YlAiA%2BNm5VqRh%2BqYFh5f5MCYnyyRDef1zQt1skRFgk1PGi8yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGtia4ibDTo0xqGvaKtwD5KsLjl5LkGDM7Fy4ohoAo7hhcI0kDqAhHZ3n0d02pbCcpadLM7gvTn535k%2FqCeaORBVZSQUMRWpWnMoww34gfH5dUTNCsYzrYgs2HhVE5lY7d6MgJ010i34SPA6t%2FuS8Ezbgjn4IjlL4p0j8Kyj5WG30k8%2BeqeZppGXdO42M4f50OkXHXk2YA%2FEYdQG8sKWaofyPeMPMXP4pfNZPQQwSCUfLTDFhjjPDrNwHdH6vQypAIMxUGPEP8wKNXA4abUrGFyW%2FsNdDPjXIWmHrpxDLn4%2B8UIDO9jrFXfyV%2Beoj2GkLvbOfSHw3m%2F7t%2FufsoZpbTjTioEzpRlAZ6ekBHihFUN%2BOff5kRguJ8IExihaBIyHV9gcmCVB1jKcZgTc8Hm464i1D2%2BX1QfVMy45VNUopONTIuAZcgnXc%2Fix4p%2B9m6HcN6xl7k7gWK%2FggSUbnW6ZZtuc7vgFtovUqhcVEbAbDcBnkR1q9Bb7ZOAF9w417vOTFbYYbC7uIf79frEbdXxYEkoDoNzyzmlZ%2FDPZ6kRuxCdVBaRdGNgSow7PzzBmsPDDT1Wx0BZe%2B738XFal4LXz3YXA20fKX4d2y9LewCiWYnxlLcxoCiOFFOVLwOzQEyUVuZ%2FguvGgrZJZjDcQwlu%2F7vgY6pgEIjRqJUCX8wwvuftf7ZJf3BBWXHNCWeqPsa8JaWgfNsYg%2B8jIntmYcZVshNUHIZbBQZ8VgyAS5U3YYbAvkTxrHQr12rkfLQyTE%2FSUzAOsPdkTC7p7FwVcMiH0qSHR7fZ4lGjPPkF9%2FmWDBlTNgAstFhHg%2BHjylz2klSwKIMlR87%2B46BoqAQq7ZDOeVhh1CM9j8TEqcNA0VUy1JCQSSKAr4KijLWLHf&X-Amz-Signature=7f83a81757b95487158743fd32324a7dcffb740ede267cf5925a21100846a8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HVFOW5Z%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDk%2BZP4WMHw10CT1CT7dmgNd3mBu6AJWAuy%2FtFrChOC4AIhAPxO%2F0CMzhx%2F3rGriBZFrWVqCeVTi4h4dtfjxq1oST8GKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjM9ijasEFXzRXj%2BMq3AO5fN2b%2FWu1RDgOFiZtGql0%2BiKXBGt%2Fr2NQyjeWcd2YLvMHICtwoDUqqIKkgLtDvP0CBwr55bSRqhVOG%2FSXY6rCY%2Fq%2BW9ECANIhbGyS1CFnAoyZyrxcWljw4Y6xscnXtTbw4aQFNRdWYOgMyGiHWihYEzdrFAB7IlURZxDCsFMfwUEuyhx40Xxet8zhHPSu1ukKe9k0KFrmtE8j91Lxwds3gPEO4yXbZMreliWNklWNpOmguDdORFTYmPQs86uc%2FgpH3MonZQ%2BhmW4d%2BW76BsUsulJQhiTNE9Q6ubX94sbGUu3ytC%2FjJL%2BLBqL0Y4qt6QAWjOJphOqVHji0SEaiyAX5gQh61xixFU%2FlEidHxvSwUb2qTIPIpRnMw2BxvTHsw5JMzr4TTrPuR2CoMBDjmTFzNhWKGIC1HOuJl8%2F4Zpz2e3JtOfwfGel3alHFyzsd%2BAuSQTIcQVYtKIvmeDv0O56R%2F%2FPVyTQQK67vZdLJbDYlqoSJx03eRnyN7mGC8TnlESLH930v%2Ba1qrjqAbifILKi4sBHdh0oJEuliCk80X9rtoDCF5P%2FHUItFSXVK8DJMK5f2uHPk4ienVbW1Cri3tq1v6qsrrX%2Fp0IH%2BACZSl1m50h1%2FVhy%2FqoAdHcJklzDt7%2Fu%2BBjqkAXxbH6gBWzrYsqUV5g4iFrNfpCKtJGa7do6ltsQ5MTDLR8P3qNWoUlgJGbOR%2B50XPMaOD3Sgi8Wia4xYa%2FD%2FSNzATcVZFJs%2BCOPuGLivO5POVH2op0aQWWAt1j03TzTseBxZX5u1CMLxZI8nmt1aEHYExEp2nzbXhrcYCFjvVyKaBIXZZo7lRDoLRTgkkZPZNiLlXJOMG%2BJomGZFfpS9b291t02Q&X-Amz-Signature=2b6a0235b19ae65ebe55e23ae2494650191c1bb9e95af4b245492cbafc696e34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAH6U4KH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIB5NEmItsgvV3fLa9tLvtuIXmfdIUxGehag5kLwX9qJuAiB%2ByJOL%2Bej27mA2NImH55y3scKe9X53XIB%2F1yqupTiLXyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyqQhE0MEZrKxiIMKtwDyDNxYm4LkNbE%2Bi4fzkSKFZyowRj20DBoR0SHsMoVwUebjkh5z9f4mffTZ6hHnQ813TSvrtGs4GOPnHZlXchctDql7kfu1JHZk7CTFPFPr4ca5NCBGKgrGfhFgKuzEqJR2fa9o5NRwJKTIutnQRQJJ2yyVtXl2OaLg979MA1%2FdyVJtXB2podzUfh2CdD8qLT%2F1QtXmUfJI25y930FrBMAstbU9DhtB39cG8CLXSRhs4Li4P2VmmFrjVYfVlj%2BP0cidJAMSt%2Baj999eAObTOo717B8Zy%2FwhoGkqyulCFxp3n%2FO9wb1h6onH%2BTUtHLHmf7uD4pxHq9luKNKOV9DHmjEOWEPL4skP7qLFrOD4eyZ62a9L09JZfO7Z3YWKnhkvOwFqWoU4kPA6te2k1H9RbkLDQiIU8HaAygn8nqjluj3MUTnQcduAHKL1A39rP4FK0epOSJF%2BbZr6I%2FGwfdjxttmcMkWshNGSTo9CBF4DzaZSXiyXpkqs9lINgs73ZSEyOjZNutmaTrjiRg9UvXTyGCavnbF5sIqd5bKavC9b0xm4v%2BUJtsNqyjKFOd1Q17z%2B8RC78evPTSbp5PdORB3bfeZWk2N0LiXJcddN58q%2Bzrt%2BTdzlrXE2djZefXCUi0w7O77vgY6pgEuVvkxTFbpslgAJNtJcYcHVtT8LwsFNMK%2B5PJwmEnWJnnJ99%2BQ5sh5znjLcrRFfSnRDijlYQiMd1zjt3voCado5iIbHqtgcIIWtDcJcUdzxMPxF41Hm%2BneSIxY5riDAQ%2BR%2BUuU%2BSgOIYlQNZsceylGpEWR3dqdMeOynhKybR3BGHmd6HikuXtSoWBojjkT8sbUBJfassPqyhlKFqwT7xHLY7ikAcEe&X-Amz-Signature=d4beab35d5e3cdbe4ff2dd8b53d81a2688942e7610c145569fde5992bf89e468&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
