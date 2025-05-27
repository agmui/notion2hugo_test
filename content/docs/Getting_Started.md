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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALVV4YF%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7el6qK2pN%2FHufhfpVneTsGTKbsKetR3jLBQ36KAlQAIhAPz1IwCL0L8XWI9BTdGS%2FFtjbfI3h2ORe%2F1kfHo1McwmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzZ59A%2BBiyah%2BHLKHsq3AMKponWd0buvCqYroHm93pdcnz9Vf2iJeBwo8zuLu%2BM4XjcGVyg2IeNj4cFbxB3hYTBQZ6nkc7Kt18c46OWEu1XXNPkJNf9ftyD4ZamhiFM3HePFHPoDEqTJ77RrSHPmqbGbSXYCoGcCkPu5CzEyx9NJdyNlknHKVTAg4UFAMAABKCreh9LDj9lCukxD0j1B1m7IGXEhwVU9oMWKJAholB0X3BBRl8%2BkDxRtdkeYO9FISg0iTN%2By9cBdDHWRrXoOwhIIfNn5n5r%2FZX522tEC8xGznBd%2FZ8Gck%2BOH9j%2F86n2bKJrmtPlagnspcVav%2Fl5RuBGID73LBm43jdUFHxxrvUsX%2BPok9TP3Krajom2srB5KSm5YpAbzsuI6%2BJq4NdUb8jHBY3bI10BlimY6eVh9DezHnC2qK%2Bew76Eh6GTldH9H89kUu9lGYCoKWXQ0Ysagd8iEoenpTSTWJYKjUB%2BOMgAAcNlblO6R5CxHPK73BJwAZqv3lSN4XFQi6CGllZDbqUVfQwAK46nBV0XiyGoA%2FiZXzlO%2BI4xJmvXREnm6qof8I7iWALGQonB1BBUyNlx4jIVU0Koe4l2b7TjVDCtPXAKUjr8yUKpt6yBDxHDYvFcliReaf8RJ3IepyvrlDCe9NfBBjqkAXtq18BU8d0NfuySZZWLxzgM5t9%2FT33tmSdDM64WJSoiz5%2BSQEISFIsDsSIq%2Fi9eEtAFHP9QHU6oBzMqRu%2FAHbkkZ3r%2FBx4o%2BSNlQAhmU5b5Pbbw5unGaOTg2I%2FPFKuDQXEXFujiBU%2FjWJfCX1pHNG5y8%2B7IJcY4HpRVcCVnYNOtO22%2F2mb%2Fw%2BfKeYhionj%2FIKiT1NeQ%2Fh68E0NYQbZuL6rlOiEY&X-Amz-Signature=cb18109a847d89626db6f3bbc31854b1c70d06b49408d4f72008bb5c9ca53f52&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALVV4YF%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7el6qK2pN%2FHufhfpVneTsGTKbsKetR3jLBQ36KAlQAIhAPz1IwCL0L8XWI9BTdGS%2FFtjbfI3h2ORe%2F1kfHo1McwmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzZ59A%2BBiyah%2BHLKHsq3AMKponWd0buvCqYroHm93pdcnz9Vf2iJeBwo8zuLu%2BM4XjcGVyg2IeNj4cFbxB3hYTBQZ6nkc7Kt18c46OWEu1XXNPkJNf9ftyD4ZamhiFM3HePFHPoDEqTJ77RrSHPmqbGbSXYCoGcCkPu5CzEyx9NJdyNlknHKVTAg4UFAMAABKCreh9LDj9lCukxD0j1B1m7IGXEhwVU9oMWKJAholB0X3BBRl8%2BkDxRtdkeYO9FISg0iTN%2By9cBdDHWRrXoOwhIIfNn5n5r%2FZX522tEC8xGznBd%2FZ8Gck%2BOH9j%2F86n2bKJrmtPlagnspcVav%2Fl5RuBGID73LBm43jdUFHxxrvUsX%2BPok9TP3Krajom2srB5KSm5YpAbzsuI6%2BJq4NdUb8jHBY3bI10BlimY6eVh9DezHnC2qK%2Bew76Eh6GTldH9H89kUu9lGYCoKWXQ0Ysagd8iEoenpTSTWJYKjUB%2BOMgAAcNlblO6R5CxHPK73BJwAZqv3lSN4XFQi6CGllZDbqUVfQwAK46nBV0XiyGoA%2FiZXzlO%2BI4xJmvXREnm6qof8I7iWALGQonB1BBUyNlx4jIVU0Koe4l2b7TjVDCtPXAKUjr8yUKpt6yBDxHDYvFcliReaf8RJ3IepyvrlDCe9NfBBjqkAXtq18BU8d0NfuySZZWLxzgM5t9%2FT33tmSdDM64WJSoiz5%2BSQEISFIsDsSIq%2Fi9eEtAFHP9QHU6oBzMqRu%2FAHbkkZ3r%2FBx4o%2BSNlQAhmU5b5Pbbw5unGaOTg2I%2FPFKuDQXEXFujiBU%2FjWJfCX1pHNG5y8%2B7IJcY4HpRVcCVnYNOtO22%2F2mb%2Fw%2BfKeYhionj%2FIKiT1NeQ%2Fh68E0NYQbZuL6rlOiEY&X-Amz-Signature=e06e4362f5a50ad658b5d9aa85e49829c9f0df5185f88dc6767db81b2df20c01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALVV4YF%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7el6qK2pN%2FHufhfpVneTsGTKbsKetR3jLBQ36KAlQAIhAPz1IwCL0L8XWI9BTdGS%2FFtjbfI3h2ORe%2F1kfHo1McwmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzZ59A%2BBiyah%2BHLKHsq3AMKponWd0buvCqYroHm93pdcnz9Vf2iJeBwo8zuLu%2BM4XjcGVyg2IeNj4cFbxB3hYTBQZ6nkc7Kt18c46OWEu1XXNPkJNf9ftyD4ZamhiFM3HePFHPoDEqTJ77RrSHPmqbGbSXYCoGcCkPu5CzEyx9NJdyNlknHKVTAg4UFAMAABKCreh9LDj9lCukxD0j1B1m7IGXEhwVU9oMWKJAholB0X3BBRl8%2BkDxRtdkeYO9FISg0iTN%2By9cBdDHWRrXoOwhIIfNn5n5r%2FZX522tEC8xGznBd%2FZ8Gck%2BOH9j%2F86n2bKJrmtPlagnspcVav%2Fl5RuBGID73LBm43jdUFHxxrvUsX%2BPok9TP3Krajom2srB5KSm5YpAbzsuI6%2BJq4NdUb8jHBY3bI10BlimY6eVh9DezHnC2qK%2Bew76Eh6GTldH9H89kUu9lGYCoKWXQ0Ysagd8iEoenpTSTWJYKjUB%2BOMgAAcNlblO6R5CxHPK73BJwAZqv3lSN4XFQi6CGllZDbqUVfQwAK46nBV0XiyGoA%2FiZXzlO%2BI4xJmvXREnm6qof8I7iWALGQonB1BBUyNlx4jIVU0Koe4l2b7TjVDCtPXAKUjr8yUKpt6yBDxHDYvFcliReaf8RJ3IepyvrlDCe9NfBBjqkAXtq18BU8d0NfuySZZWLxzgM5t9%2FT33tmSdDM64WJSoiz5%2BSQEISFIsDsSIq%2Fi9eEtAFHP9QHU6oBzMqRu%2FAHbkkZ3r%2FBx4o%2BSNlQAhmU5b5Pbbw5unGaOTg2I%2FPFKuDQXEXFujiBU%2FjWJfCX1pHNG5y8%2B7IJcY4HpRVcCVnYNOtO22%2F2mb%2Fw%2BfKeYhionj%2FIKiT1NeQ%2Fh68E0NYQbZuL6rlOiEY&X-Amz-Signature=d96d97508c6ce57100d5242c7b1eebc90362bb5adf0fbeaf2a9f4c3368438f05&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSJI3W4%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHn0gONJZjEcY%2Bl8FKUT6WqJQtKaf8KI3jnWOMp%2Fv%2FXFAiEAsLZ6%2FbFrqzv7g5o4vtx8BHCx29eS288NMaDWOUOusR4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJp0jASwUsDP9PmgrCrcA0tuoFflIpwQ%2B8TagvI7xgw5xfCemPQeSrAbOTa87KwFZLMeO5N5afVTl2YJrCPgmSdRyJig0GEWL7c%2Bg5CCwUpwwqlSGBhUvi5FDEHy4boilDUsYh6q6BCEKcV2ZWPxqBlUzMFDLKumCiIFJ%2BHKzLNVgPRdrdb%2FFVIh9set65UkuxhTJlpHjJSw%2B%2BtYDVfexVjQCmbHFnzEWFcgGaFtBdzHbdNDXXEkRRklkfz7NbR2W0Nk%2FViiZ7LBS8YUnbs37PYpqF3%2Br7rTwz4ko2mEILv8UoDslm8rEnW%2Bzdo19SScdX4qt5gQUKIdYDPBT%2BlyQwCcyCU9F22Qw1%2FVu8%2B3nQ0VwgrJLZ4csXQzmfwnFmjhTWJAaWXEaAbsfl%2BD%2BBERMXGOQiehK0n7UmUB2jjv4cH06wlFKdRHzOYs6dBJliQ3VYawm3ARBUMYZ19LSCp8p%2BjTuLAPAk9GUxECKzvQ9WEiL456l8ynWqMUOD0lYbyxMklAiS4JA9WkrtZi4UXDpKocOI1utYnDVjlVGqkEb%2Ba8gCPkhTA100pBGrHrlCm02lu5nDRCAmGU4FDj0HGmc6k1n69%2FuyKS3QR73cFzGxl4V3QPx7PrvcyCSqgUbHiS8ogrqoupHmBks7M0MK%2Fk18EGOqUBDBbgDERVGK%2BYSZMm4Fhg0qinKcttqhDf1HnjLjtjj9fpPRQu%2BeKGNcMgCgeZ7r5Fys5xvcNtSMDinc18U0kEBQLswgsAM3u%2FUV3kiEmTdo48TE48G8KlQmfo19ufcGRP8ylaEMEZkmDhHdbQD2Zhy6cp%2BxZTShIv7LoxGBqqrbg8nlGZSZbyqi2WdbYuClVpCsYP0FjPQUJ4r85egacqP8Yq5fWk&X-Amz-Signature=822586d0e2352c016e911e4a3afa975e99d0e9d56f6795981093d1dbeb09b11d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHZ5ZO6%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxihF0%2BAvDNRSUxBucRj0JUdk10Rp1G%2FKXoc0%2Bp0S0wgIgBrAc%2FxNhHpeXbOWBgtKsPJHAjRqJu1vI5817%2B13FirEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLaawnxFJLtn%2BMlRhyrcA2PbaCcVEKVm0jnjrZpKIEHISto64DgCn0ahpv6znDeZEdAdp9jcXUbHoLMBHMzcRwGt9LTo5aaSbUKxI%2FXh8zcqmzn4qBI7jTs71aqJ0%2FlFMi3vxY%2B2erAO86m7koO6TnPc9GVL8JXYayrUgduOHV7SPFiGOWz%2BpqX6hRoG9EOEq90OYHs7mS6vaxz%2BxRmOpEdHHoWBuKUuYBYRydB1IiCQMA78LIlQsq%2FLo2kdCkRv3eFrnfnRckPboHldCu0CyectkiWd1deAM0OhN6xHxG6LE5kdCzGEqGJWWmBIjKfyVvUtSuUhY4Z1rpWuXOjtGdySaA62%2B9hGlFSwL8IKoq7RLrA2xjhOY4QSJk56hwnFPJpkVXAFb4m9xYeqy7c0NYLD4ouIBNaY%2FecywRq3QI3SKQm1C1%2F%2B2Q5%2Bltsth3%2FzpGk7vT8bOljWkfVVj%2BKjnF8QQ5IJOJWlwRV%2BG2yUS7NLu%2Bwzy4vxfUBQZkx2os0FlAjTmk%2BUJWAk4CLYQIlwjL4VCvEou6Ku5P%2FTsUWewSMyHJcaYge6BK522kltviq%2BVnhobLfupZzFX9PxBHqQ4%2Fjtq6xwhUVAtuCnp8k2E6AMTfSmoQf6BfdNl616lLsB3jfDXxV5srDVJUgUMIPk18EGOqUBVlG8Ntitz4F0va%2BOsXOdD1HzdwOG4IQgNo1yiUGl6b8wTsCLVMJ4PXhlbPGG60FVz2xt9veLMTuSOkXrppJ%2BiLlJbwInusK2HIpTIt%2F5MT6GTSiFjEHRdiDZmKijcANErXhuPNAZsoRKu4grOsZRaFySTJjl3hmkESk3TnQJRV%2FI5HJAtqRFrbtwNigIOBHq%2Bqm5QeIvreqSRtbySkbP1jzYCG1V&X-Amz-Signature=2213ec06538fb2650b3f3c38edddf711fc4eb3bd5ae565b3c42b83012547925b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ALVV4YF%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7el6qK2pN%2FHufhfpVneTsGTKbsKetR3jLBQ36KAlQAIhAPz1IwCL0L8XWI9BTdGS%2FFtjbfI3h2ORe%2F1kfHo1McwmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzZ59A%2BBiyah%2BHLKHsq3AMKponWd0buvCqYroHm93pdcnz9Vf2iJeBwo8zuLu%2BM4XjcGVyg2IeNj4cFbxB3hYTBQZ6nkc7Kt18c46OWEu1XXNPkJNf9ftyD4ZamhiFM3HePFHPoDEqTJ77RrSHPmqbGbSXYCoGcCkPu5CzEyx9NJdyNlknHKVTAg4UFAMAABKCreh9LDj9lCukxD0j1B1m7IGXEhwVU9oMWKJAholB0X3BBRl8%2BkDxRtdkeYO9FISg0iTN%2By9cBdDHWRrXoOwhIIfNn5n5r%2FZX522tEC8xGznBd%2FZ8Gck%2BOH9j%2F86n2bKJrmtPlagnspcVav%2Fl5RuBGID73LBm43jdUFHxxrvUsX%2BPok9TP3Krajom2srB5KSm5YpAbzsuI6%2BJq4NdUb8jHBY3bI10BlimY6eVh9DezHnC2qK%2Bew76Eh6GTldH9H89kUu9lGYCoKWXQ0Ysagd8iEoenpTSTWJYKjUB%2BOMgAAcNlblO6R5CxHPK73BJwAZqv3lSN4XFQi6CGllZDbqUVfQwAK46nBV0XiyGoA%2FiZXzlO%2BI4xJmvXREnm6qof8I7iWALGQonB1BBUyNlx4jIVU0Koe4l2b7TjVDCtPXAKUjr8yUKpt6yBDxHDYvFcliReaf8RJ3IepyvrlDCe9NfBBjqkAXtq18BU8d0NfuySZZWLxzgM5t9%2FT33tmSdDM64WJSoiz5%2BSQEISFIsDsSIq%2Fi9eEtAFHP9QHU6oBzMqRu%2FAHbkkZ3r%2FBx4o%2BSNlQAhmU5b5Pbbw5unGaOTg2I%2FPFKuDQXEXFujiBU%2FjWJfCX1pHNG5y8%2B7IJcY4HpRVcCVnYNOtO22%2F2mb%2Fw%2BfKeYhionj%2FIKiT1NeQ%2Fh68E0NYQbZuL6rlOiEY&X-Amz-Signature=bd2b52b393ec03e79b1e7e1fd2648cde2664b9b7b1d51bdd6e919bc9f4fb02c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
