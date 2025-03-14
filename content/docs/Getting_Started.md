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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6QLUNB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF%2B284rhD5pgMSZM%2BlaQ3Y5I%2FrzcFHWMoc8TYJwcrHFwIgbneNLW%2F7JkrAJCH%2BaXD%2FPxnfWAJIXcnORubpyEAg0%2BoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdpZyz3wdvRr%2FKxbSrcA0EIQyyu7pQW8gRZN%2B0a3HZ1EHG0oqKvEPluMwDXWt%2BBAmaNMiox%2F0WGNqvqXfysl6b3ewjdnqGkpFekBi%2FA9P1P6kOGgmgsKGfnConZPN2M00u%2F36bIzbi5GB0pjU0eeBdVBlDCcleLA5rfr7W%2BvwitFoY6Fdef7KmrfGOnmTtPc061fvrP9cR%2FSqHvYFslPsoOjjOvX5VzC6dHxQkL%2Fg3Bh17pfYWsb6EMnKW0e85A06qDcgGlAmPYKAJuaLifh2ibWQLDK88293%2F4ZInWWaeLhQD3aXr351wukvDNoZFAbZpeqGP8sfli2lwdGM4PfjVtQemOFqwI3mX7pPfddQoZtRayti%2FUVFPfmi%2BJvEQwQ05B7qjWvjdlPspYj5etMdKuCI8xEk%2BezTrmkS7eLANx9fS%2FL8Shuy40fuVkiWTwke98ajoV%2BZZmwLtr%2FtO3D4AZ5VpQNEi3QhHxkPpoo0qqh%2BQMsBdo0sjYyslyfFB7HwO4RbddQgE%2BaboI1zWjWs8M45PYfcU%2FTAti2RZeAhGIm6CEtju4wQlt%2BfgifbtGq4DGhaQWz5hKdTFZM5JRJT%2Br1th%2Fo50htVxjk0toopTqde%2B5FQXrPIf6%2BnBTaC92IBVdPfipwSndidZ1MPqOzr4GOqUBpnExp6dtueIJUSGUhlff5s1luV9pdyu%2FCwO%2FSXp5RVJmWPPpaydw7aK%2FTOyUvD4KV%2F9GMURXjTRXzplopNhRifNFKr%2BzuMdD51IptL7BTi5IGPpNlLMJSNK7Pu44Q4ZstfMolWFSZqvbHBACI4FhlUUMUd6GtSHtkOo%2Bi3DXLVi2Xr47%2FxSBNWHxUiiMIVRQfIb4J0NOhYAtfjl81ujj1dIOBzLE&X-Amz-Signature=39f68d2af9c00a81b092f5d834999a36ccefe6f9782e8caa82e2f1edfa0ca105&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6QLUNB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF%2B284rhD5pgMSZM%2BlaQ3Y5I%2FrzcFHWMoc8TYJwcrHFwIgbneNLW%2F7JkrAJCH%2BaXD%2FPxnfWAJIXcnORubpyEAg0%2BoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdpZyz3wdvRr%2FKxbSrcA0EIQyyu7pQW8gRZN%2B0a3HZ1EHG0oqKvEPluMwDXWt%2BBAmaNMiox%2F0WGNqvqXfysl6b3ewjdnqGkpFekBi%2FA9P1P6kOGgmgsKGfnConZPN2M00u%2F36bIzbi5GB0pjU0eeBdVBlDCcleLA5rfr7W%2BvwitFoY6Fdef7KmrfGOnmTtPc061fvrP9cR%2FSqHvYFslPsoOjjOvX5VzC6dHxQkL%2Fg3Bh17pfYWsb6EMnKW0e85A06qDcgGlAmPYKAJuaLifh2ibWQLDK88293%2F4ZInWWaeLhQD3aXr351wukvDNoZFAbZpeqGP8sfli2lwdGM4PfjVtQemOFqwI3mX7pPfddQoZtRayti%2FUVFPfmi%2BJvEQwQ05B7qjWvjdlPspYj5etMdKuCI8xEk%2BezTrmkS7eLANx9fS%2FL8Shuy40fuVkiWTwke98ajoV%2BZZmwLtr%2FtO3D4AZ5VpQNEi3QhHxkPpoo0qqh%2BQMsBdo0sjYyslyfFB7HwO4RbddQgE%2BaboI1zWjWs8M45PYfcU%2FTAti2RZeAhGIm6CEtju4wQlt%2BfgifbtGq4DGhaQWz5hKdTFZM5JRJT%2Br1th%2Fo50htVxjk0toopTqde%2B5FQXrPIf6%2BnBTaC92IBVdPfipwSndidZ1MPqOzr4GOqUBpnExp6dtueIJUSGUhlff5s1luV9pdyu%2FCwO%2FSXp5RVJmWPPpaydw7aK%2FTOyUvD4KV%2F9GMURXjTRXzplopNhRifNFKr%2BzuMdD51IptL7BTi5IGPpNlLMJSNK7Pu44Q4ZstfMolWFSZqvbHBACI4FhlUUMUd6GtSHtkOo%2Bi3DXLVi2Xr47%2FxSBNWHxUiiMIVRQfIb4J0NOhYAtfjl81ujj1dIOBzLE&X-Amz-Signature=fd6b0088db4d819c45046d8aae5aa45cdc99ed36219a1759464c1c65a783666a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IONFMHL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLPwBNd0E0iFlE60dcYn%2FJS%2BZtxFjW8%2Br%2F2nhhfBtRpQIge4Ra1R%2F9SJQv8uga3oanr89HAXe17Cc%2BTfkIZEEi5OcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFzCfi9qyelrmlY%2BircAxFbC8K5XEBVQxx2A03zgWryZKhnMq3lG0d1C4GVh1FMKOFKGzy8Dow1hmNiHMXTRQKBf2WFMHrAYxDmA%2FJNtHnetu5kF0pv5bJ%2BAyGzLWOHv3j5KlxqXORn6Z0vzoDla7%2FNSJE5CHdFaZhUm1EMok5rvRUvFzYJJdF3Kd5ldsn4MOW9DMKfVIROUN9iw9keRRyGsSs%2FYIpfEFWNeoqYjfdsx2BI8mA4a7QOet0I1lxZZbDOuHtwDxvDdhQgTifUrnh3fenUz1T%2B5k72Jl4Y4APJpDZgEO1GpIVSW7rOGX3xay2V7UJq6vhn0qOKA%2B2%2BGq32KAOzjX%2FOHJZRuKcq1g48oXaFmlK5mhyiGHnzU0ghbfxHCB7CHgBF8%2FkqxiE8Md7VEwn6gEryTnBh4c7FdqlrgTu9nDWc3TiGcCyI4rbylNMuQ39MFhF0lV7P7NO8c6uhddoqzVhDXfNbGuR8lKO1up%2BKuJ20Bq9ZO8PQcqlFFD7rckM%2F13M6Q5T51vKcUNkTTIdnzsElJ2VOl1Dywvq0dJFhHA%2FkywtkTED7%2BAAp434T910%2FlY2m%2BEEzUXGYE9JmowOAO3pizS6FE%2BaOX4ny1%2B3nqL%2FEaVvuW0t7VOHQLVRG%2BJBY73HmrBzfMIaOzr4GOqUBnzE3g4BiSxLakKNGm%2F839%2BGqeWKz%2F1mP%2BbSUN9SgpwhTgXCgu%2B4TlrKijtSkE6cVoRTbFiooCNkVqOWxQUB0HglE5I12qRIwuMagfT2DNbBCrpGfOxI2%2Bv6Tbnvw7vfJIfDdf9i%2BKUc3vBjQS1OJonbraZcMTQkWcFSpklIbt6g0g0glyATNoibupAhQrvDEmh2bnpxLuu6eqjCNWX9oNnDWd57h&X-Amz-Signature=a9fd955389b7b5be6c7e8e7194be7ab3d61a22baff9ff63830d07cd4863e63ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWCS5NX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3F3FJufttc65xa0iuJiAELxYRSKLsWXrjuA7kNPv2eQIhAKay3%2BrYtGTSU7l6USDJ0M6qk6sbRlC1mG227zt2EOBiKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytc%2FBZhmcKnPT0NYkq3AOfnUfm0vEessaKcolxBKKeKYsxZoPkRcsO7KkMhFEjjVj5Ug1MSeAb%2BDjcpgluCX%2BIW%2FD7jE5ifJkG9r8MdUMFH0whfdBlZiZ5FkHRpgBHCv01SKpF%2FuFZKDt7FrL4MEkToOnf8ddO7oAhfFMuyp%2BVKNamMkGrVHDZeRarhfkZs2F1Hc%2F6Tc%2FWkRppFIVOTn2%2B%2B2qfwTj4iwa3n8X86lbMASJN1P2B8o%2FB350fqSv%2BtICXv6BC%2F7%2BoJruD2R4A29lV6%2B1KemYd8Tre03ANqr4%2BCE8Ndl7FfsCyXhPSUI24NCR%2BGCJiPw9XCiTvvZZUn0CX%2BKKK93R9DX%2BojKGj6XRVZCPk3mRKbnjDVLiEaqrCIH9y7I7JXRMhSbo%2Fvp2%2BPi4Be90d0a6trzkoDjr2DQkmHHlWhBlPmJKxHhIQctS1YTP%2BolWnU0qDj3RCEr%2ByYnicfBSgfpRWAz%2BUzgPId4BQiUkEfhq7%2F9nv7ji6qM%2B3CdY2p6jJeYOlo1STHZRs8vmgkkqYD1ZUf8g%2F%2FsWLE4PznZJjeIzAshA1UgVtMw6H%2FKj%2F6XMNp8RpK30jDboQTJhypnMFKk7%2BFClOSu34kimYozUlR%2BAIPNtfoUg66T3OGAq9OUFSJLrjXa2YBzCQjs6%2BBjqkASEN3zI0PkDg9Kv5bpdH707x1JLWdT5ER%2BToGbZNPcGY8zI%2F2MN%2F3t0r06q8Mevqg3IEgc%2BC7uUOES0KN7zo2lyRytG3az4Bee3RX9OmC5m5QMiU0yhLmQCCtEW%2F7%2BPrAtUnH%2FMMpTHHZvVMP5GElApoxCThy%2FXZiOXNgVpRdDw06NCTlDiBevYmJQvx%2BEg1klBfM6bmnvjHvpV04AEmDIhJdcrU&X-Amz-Signature=069efd7eafc7eba773a5be0dd89b383dad0aa4069c5b607ce51b665853456694&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI6QLUNB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF%2B284rhD5pgMSZM%2BlaQ3Y5I%2FrzcFHWMoc8TYJwcrHFwIgbneNLW%2F7JkrAJCH%2BaXD%2FPxnfWAJIXcnORubpyEAg0%2BoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdpZyz3wdvRr%2FKxbSrcA0EIQyyu7pQW8gRZN%2B0a3HZ1EHG0oqKvEPluMwDXWt%2BBAmaNMiox%2F0WGNqvqXfysl6b3ewjdnqGkpFekBi%2FA9P1P6kOGgmgsKGfnConZPN2M00u%2F36bIzbi5GB0pjU0eeBdVBlDCcleLA5rfr7W%2BvwitFoY6Fdef7KmrfGOnmTtPc061fvrP9cR%2FSqHvYFslPsoOjjOvX5VzC6dHxQkL%2Fg3Bh17pfYWsb6EMnKW0e85A06qDcgGlAmPYKAJuaLifh2ibWQLDK88293%2F4ZInWWaeLhQD3aXr351wukvDNoZFAbZpeqGP8sfli2lwdGM4PfjVtQemOFqwI3mX7pPfddQoZtRayti%2FUVFPfmi%2BJvEQwQ05B7qjWvjdlPspYj5etMdKuCI8xEk%2BezTrmkS7eLANx9fS%2FL8Shuy40fuVkiWTwke98ajoV%2BZZmwLtr%2FtO3D4AZ5VpQNEi3QhHxkPpoo0qqh%2BQMsBdo0sjYyslyfFB7HwO4RbddQgE%2BaboI1zWjWs8M45PYfcU%2FTAti2RZeAhGIm6CEtju4wQlt%2BfgifbtGq4DGhaQWz5hKdTFZM5JRJT%2Br1th%2Fo50htVxjk0toopTqde%2B5FQXrPIf6%2BnBTaC92IBVdPfipwSndidZ1MPqOzr4GOqUBpnExp6dtueIJUSGUhlff5s1luV9pdyu%2FCwO%2FSXp5RVJmWPPpaydw7aK%2FTOyUvD4KV%2F9GMURXjTRXzplopNhRifNFKr%2BzuMdD51IptL7BTi5IGPpNlLMJSNK7Pu44Q4ZstfMolWFSZqvbHBACI4FhlUUMUd6GtSHtkOo%2Bi3DXLVi2Xr47%2FxSBNWHxUiiMIVRQfIb4J0NOhYAtfjl81ujj1dIOBzLE&X-Amz-Signature=0e880eb053053ff3ee997d77ca3f9d10cf3f6e28c332ca1063bb543cd2da4dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
