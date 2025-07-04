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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYDA5VV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEUu4JVoHOXE6ncJUyYBw7i7OvbS8WpBJ%2FCOpVZCZA8SAiEA1FGn%2Bo%2FsyA1s2AMMC%2FfYdz6XMUyasaYVKaPhmmAifUMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGQBDEqQHjvqgBZDMyrcA0lpTWZ9W6Nn%2Fyyv1OT1Gms7vDayXXKwJ2wThaF5%2BOX3%2F6eTwf1LDhZfZDThIlqgagWa5P70%2BUGjCr6fgfmkcXIM37566DdWLjC9H4Srm5Si9eojInUevtbtI2Wm3qu2hjn6D4GpV3FQavk1lUEDZu%2BD2AAAY%2Fv5eJlbjahRibmwOnlOo4qZDAmhBKUhu3%2FXEubuhGj0ekbkaZAGUIWQXa4pRZS6FfyJf2224rnwqMD2P75G9x%2Ba2Y9m7BY4uPkGfl%2B4PKOxGrSKAj8ZKfVywcV6TvyexTEuAo%2BvKnwsqsX7uirdrv1FpgGz19WWh88DVZqNwPTl6Uq77NpVChx50ISzPMuAsLkkkStmu8bAZAS6ulPMgpOyePwTAZYF4%2Fm3p0nphvZINg1eVjvjwyFP78a563OOMWdKsKgXmg4uqXS4OF18EpwZTwl4L4c3kBANwARlh8hL8C7JROPnF49SWEm3IAIFoRTmtiSqESutQNYiS%2FdfehyeX64FglCTXIc7HvTL%2Fv6F1oTetIesVdhh9ivvzOsmFRG2cY%2FUUxRLMn7zKHXAy8TKji892XQMAZ3pgbyO%2BMNNBjdwCcC7S6ycb8UXKOjj8FYBe0IwOIFYgxXZ6AmBa%2FPLNyzVWDQjMNm3nMMGOqUBlfSdOvoxRN%2F08xxZSSB8k29SYYkyHe0PyU%2BtADS%2FYb51GXVU%2BfrKe9QQFVORZAeVg6QM6YB2zICHjQaN8H58%2FNZy5LpPY3Q%2FQhq4X5T1trcy7rwVltTN5jSCOoQ8aS3ox5qeqhTalL08LnkGUw%2Fi3GzdQOjQGhmri%2BjSuNv0Y2hRmIWQsxJjK%2FUhPzr1sSal3EyDp2KkkqPUvfXC1TskeMpCK69n&X-Amz-Signature=1bea29f12c52cf590db0dfdc629c2aed91019c33d11a6b1b35b219d7db7d9a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYDA5VV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEUu4JVoHOXE6ncJUyYBw7i7OvbS8WpBJ%2FCOpVZCZA8SAiEA1FGn%2Bo%2FsyA1s2AMMC%2FfYdz6XMUyasaYVKaPhmmAifUMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGQBDEqQHjvqgBZDMyrcA0lpTWZ9W6Nn%2Fyyv1OT1Gms7vDayXXKwJ2wThaF5%2BOX3%2F6eTwf1LDhZfZDThIlqgagWa5P70%2BUGjCr6fgfmkcXIM37566DdWLjC9H4Srm5Si9eojInUevtbtI2Wm3qu2hjn6D4GpV3FQavk1lUEDZu%2BD2AAAY%2Fv5eJlbjahRibmwOnlOo4qZDAmhBKUhu3%2FXEubuhGj0ekbkaZAGUIWQXa4pRZS6FfyJf2224rnwqMD2P75G9x%2Ba2Y9m7BY4uPkGfl%2B4PKOxGrSKAj8ZKfVywcV6TvyexTEuAo%2BvKnwsqsX7uirdrv1FpgGz19WWh88DVZqNwPTl6Uq77NpVChx50ISzPMuAsLkkkStmu8bAZAS6ulPMgpOyePwTAZYF4%2Fm3p0nphvZINg1eVjvjwyFP78a563OOMWdKsKgXmg4uqXS4OF18EpwZTwl4L4c3kBANwARlh8hL8C7JROPnF49SWEm3IAIFoRTmtiSqESutQNYiS%2FdfehyeX64FglCTXIc7HvTL%2Fv6F1oTetIesVdhh9ivvzOsmFRG2cY%2FUUxRLMn7zKHXAy8TKji892XQMAZ3pgbyO%2BMNNBjdwCcC7S6ycb8UXKOjj8FYBe0IwOIFYgxXZ6AmBa%2FPLNyzVWDQjMNm3nMMGOqUBlfSdOvoxRN%2F08xxZSSB8k29SYYkyHe0PyU%2BtADS%2FYb51GXVU%2BfrKe9QQFVORZAeVg6QM6YB2zICHjQaN8H58%2FNZy5LpPY3Q%2FQhq4X5T1trcy7rwVltTN5jSCOoQ8aS3ox5qeqhTalL08LnkGUw%2Fi3GzdQOjQGhmri%2BjSuNv0Y2hRmIWQsxJjK%2FUhPzr1sSal3EyDp2KkkqPUvfXC1TskeMpCK69n&X-Amz-Signature=efd760654b8d6ae92c4b8748fc02c40a937e5115fa7944e79a732829cfd07bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYDA5VV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEUu4JVoHOXE6ncJUyYBw7i7OvbS8WpBJ%2FCOpVZCZA8SAiEA1FGn%2Bo%2FsyA1s2AMMC%2FfYdz6XMUyasaYVKaPhmmAifUMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGQBDEqQHjvqgBZDMyrcA0lpTWZ9W6Nn%2Fyyv1OT1Gms7vDayXXKwJ2wThaF5%2BOX3%2F6eTwf1LDhZfZDThIlqgagWa5P70%2BUGjCr6fgfmkcXIM37566DdWLjC9H4Srm5Si9eojInUevtbtI2Wm3qu2hjn6D4GpV3FQavk1lUEDZu%2BD2AAAY%2Fv5eJlbjahRibmwOnlOo4qZDAmhBKUhu3%2FXEubuhGj0ekbkaZAGUIWQXa4pRZS6FfyJf2224rnwqMD2P75G9x%2Ba2Y9m7BY4uPkGfl%2B4PKOxGrSKAj8ZKfVywcV6TvyexTEuAo%2BvKnwsqsX7uirdrv1FpgGz19WWh88DVZqNwPTl6Uq77NpVChx50ISzPMuAsLkkkStmu8bAZAS6ulPMgpOyePwTAZYF4%2Fm3p0nphvZINg1eVjvjwyFP78a563OOMWdKsKgXmg4uqXS4OF18EpwZTwl4L4c3kBANwARlh8hL8C7JROPnF49SWEm3IAIFoRTmtiSqESutQNYiS%2FdfehyeX64FglCTXIc7HvTL%2Fv6F1oTetIesVdhh9ivvzOsmFRG2cY%2FUUxRLMn7zKHXAy8TKji892XQMAZ3pgbyO%2BMNNBjdwCcC7S6ycb8UXKOjj8FYBe0IwOIFYgxXZ6AmBa%2FPLNyzVWDQjMNm3nMMGOqUBlfSdOvoxRN%2F08xxZSSB8k29SYYkyHe0PyU%2BtADS%2FYb51GXVU%2BfrKe9QQFVORZAeVg6QM6YB2zICHjQaN8H58%2FNZy5LpPY3Q%2FQhq4X5T1trcy7rwVltTN5jSCOoQ8aS3ox5qeqhTalL08LnkGUw%2Fi3GzdQOjQGhmri%2BjSuNv0Y2hRmIWQsxJjK%2FUhPzr1sSal3EyDp2KkkqPUvfXC1TskeMpCK69n&X-Amz-Signature=2d81f8c6ca08ab89bd3f709cec78829e1de76b57ce08ff793bb8007b42f9a571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLB4OD2K%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICDmY3LprGGaBhV4bUJMtSacz8%2FmKqpiGaPzqo%2B%2F3EpjAiEAiSa13UQ6aWzrz4B%2BiHTP7KOKeGN0hDJQz7hEhV6ZqkQq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDC9x8v1HgXiTOkLZHircA%2F0AMjz2uzC1ZcLFH0upUujg31gO%2FKNAoMSVhQkvrbNIJRtXgiXO%2BCcdU2KXPgy8HmiI1eJdD%2FiNtjSdyYPGP68Pg%2Ft8YONxr1w0n%2B%2FhDeM%2BUFY9l3Qf5dj2a7uG76kaftSkVDl3kCwnFS0c2eH1oWdrn7Me8qSKfU1DPsypfBIykXi9Z0ZM%2FH7U0LFVcBUJiUOOFtuFmxRLs6GotWcJkGnxgFISKmNruIb1MqjovlHoUJKDbASUF7crfENxUwDODC2V7kwj3hdXqiOpNlw9tjwsTTILv5lrEsFODFi421vI00ZirPlGzVKDBZKqHavQhF91IJpwHge8qULtuBhyP6GabYk29mnSNoI%2BaNeMSLh7%2BfhgwgMah9%2BJMpgEMsrWkumzQhQg%2BxMnnr1PrGFSNM2V1UkeOPwiKthd4aSqkAHlaQlg6xbtvxktKiqEmk%2BBn3Fr94pfNLkVmlkDZ0ENwmHgnjIalk6gObJCsx4cWsZmJ7v0n9peWtzu2aMQcvRJfAfDgpafJmu4RSF9YsZj2gbz1qoZSPRjgIyuvbcrxGDT6jb1B%2F%2BqTC7IEHQp%2FXq%2BE3ixvfAZDBOaBmFTSgKWe%2FpL2c8TlP05uDNQ7V1SfjOrOrifd8GyXc1Yy%2BYeMNi2nMMGOqUB3smmcVz83dsQaEB4cyY6woIUJC%2B5xXxSdiuLHGORKiWVeR1TUo%2BZWxU3aYNsaYXcUV6v6PfvnpXTXiTO%2FqpsLfOW3ksfzHBOtqfoAn7obCjS6Zf%2Fjh8gBihWlAfaW8wmTasNYEMfn8w9CM9hm5D4H%2FzIRr0FbQTrbaE6Y72ySbTJCOD8rQpALR0NU0Dbyf8q7wQwe930FrDlW2QDatsixXzXpy%2B%2F&X-Amz-Signature=2d0271656ba139446a26c85337f5cb6c4fb3f8ed67334fdf0a5e442ba88da4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZH363F%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDbMli929UXax3bgV%2FV6UJnwa7Ly%2FM4HJd1SG41%2FFioYQIhAOGsopXk%2Fq09l%2Bu8gQUR69uOOwbbU%2FzAI%2FCmkUA1QzyRKv8DCCEQABoMNjM3NDIzMTgzODA1IgxWHFaCwFQPcjcw17gq3ANLZiXUsmERsJ6S5jrbumfjBRsGDPXz1FdISwmG%2Fpmv5F78Ql0np6tOyhUQTOs0IdVPGP46Was8OYQbxrwiv1pOPkTT%2Fp7StjPJC%2Bk6%2FEg%2FqQOEir9w5d%2BG%2Bl4t51lkERp2mfjM2KKMC0fLDua1Fj3jpgIG4pX2J5eVNIPoUjG8a0oWK9NySESMDi4ATkCoVvHAtYQK1G71N31RQgpQ%2FPsEaxqmV5Mixzd%2F7KhJC3ooWdxoqTn43o4mdfZRs8Oy76G1ZJVRRrjxqMMXjVty2HGsIWlFoyBpMInQtgKYHsv3x19frZ2TtXzE8OGXKiMcL0KzX%2BaTAwlcBKx1Nj%2Br4mfIyNvyYfZxe6UOmzvkTk0%2FxGTw0cLK4YQpPw%2ByWiQf1FmYPfT02z2PDt9GHkgpgNKm581QeWXY%2FB7FFkI7MZ4Vxa1OptAuzr1boU0adD1IFeFGbId4gwb0TW3%2FBX7Fh3Tsc5CCMY3Ype1mCDDMEEXwuW%2B4g7Kb5ul7wwaon7gIO0V9GiTkafi%2BUb61oM8xd7spuxIAwFNh5vkf42RrMRVUCOPRZp3NcRSeTw5jwP8984Ila0ErLGbcdS8WZhuzh5y01eHCFtgoMHsfyqUXLa16ux2AMNrzA6Lc1nDcMTDPt5zDBjqkAX0PNsGuBf3JepEWFJSShuj6eJscI12JCS4%2BoG1YjpJYOZuqY5Un5g5abcvja1zWd55wTDnTX2ks5%2BsAgV%2FM7gdJtrSd9%2B3dLlxEyxG%2BDO5UqDYc1moryoImY7FdJTopK9DySFvx7eK2gLKwAiNbMonyDALPHZ%2BKpgeKDFK%2Fz8M4BAOXDqDDfaDP9rUF6%2FVgqzR6Kc0wGprvMJ02uK53v5417MxR&X-Amz-Signature=9522fcb5ca5afd4c0d38a4b1343aaf7cb82cc68391798020fc5c2758e722f133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYDA5VV%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIEUu4JVoHOXE6ncJUyYBw7i7OvbS8WpBJ%2FCOpVZCZA8SAiEA1FGn%2Bo%2FsyA1s2AMMC%2FfYdz6XMUyasaYVKaPhmmAifUMq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGQBDEqQHjvqgBZDMyrcA0lpTWZ9W6Nn%2Fyyv1OT1Gms7vDayXXKwJ2wThaF5%2BOX3%2F6eTwf1LDhZfZDThIlqgagWa5P70%2BUGjCr6fgfmkcXIM37566DdWLjC9H4Srm5Si9eojInUevtbtI2Wm3qu2hjn6D4GpV3FQavk1lUEDZu%2BD2AAAY%2Fv5eJlbjahRibmwOnlOo4qZDAmhBKUhu3%2FXEubuhGj0ekbkaZAGUIWQXa4pRZS6FfyJf2224rnwqMD2P75G9x%2Ba2Y9m7BY4uPkGfl%2B4PKOxGrSKAj8ZKfVywcV6TvyexTEuAo%2BvKnwsqsX7uirdrv1FpgGz19WWh88DVZqNwPTl6Uq77NpVChx50ISzPMuAsLkkkStmu8bAZAS6ulPMgpOyePwTAZYF4%2Fm3p0nphvZINg1eVjvjwyFP78a563OOMWdKsKgXmg4uqXS4OF18EpwZTwl4L4c3kBANwARlh8hL8C7JROPnF49SWEm3IAIFoRTmtiSqESutQNYiS%2FdfehyeX64FglCTXIc7HvTL%2Fv6F1oTetIesVdhh9ivvzOsmFRG2cY%2FUUxRLMn7zKHXAy8TKji892XQMAZ3pgbyO%2BMNNBjdwCcC7S6ycb8UXKOjj8FYBe0IwOIFYgxXZ6AmBa%2FPLNyzVWDQjMNm3nMMGOqUBlfSdOvoxRN%2F08xxZSSB8k29SYYkyHe0PyU%2BtADS%2FYb51GXVU%2BfrKe9QQFVORZAeVg6QM6YB2zICHjQaN8H58%2FNZy5LpPY3Q%2FQhq4X5T1trcy7rwVltTN5jSCOoQ8aS3ox5qeqhTalL08LnkGUw%2Fi3GzdQOjQGhmri%2BjSuNv0Y2hRmIWQsxJjK%2FUhPzr1sSal3EyDp2KkkqPUvfXC1TskeMpCK69n&X-Amz-Signature=456076d60ba2ff5850db5ea8d3d7f76d007aa53b0446f9533387c5d3c0a23092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
