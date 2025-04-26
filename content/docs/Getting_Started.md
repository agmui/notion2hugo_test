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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666625ZTZT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXJtRtwfDmPEnfqesqMWV1r29QGMyYuciHqf3XLQV8OgIgCVdI%2BBvCTabf%2BOAqNskE7b0Uj2DBFVp76Vy1boyjgNAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKA6a0Co9CqqJt99ZircA1DJbpqsjmXiBIH5uyP%2BfeRIOycEkCdJ0ctfEUSSCZpHOAOfLyTq26b2Tf8%2F01GYV26ejcOBSHkfbq8Sl5dSgGFi8OE4Og9ECcVGS7xfCdmNMtRr1W3NvarfAMEoonbOez3TIYZmZnq82AFfjHJroq1PpsfFwWLeiH7MJkEwK53BBzcHjqOrdWms%2BRaOZyppzUkpKYt7aATcXQG5TItxwsmBtRW71jRgk1CEK6M7xa%2FL21fm5ZYKBbRYjod08sWHdYHgDD%2F9N4ofjjSAApU3EmTiUbyaIkLKEJewNl5vQq1Bvjf3GdU3wqtUdJL%2BeCjziDdX5fC85u4pmYiQf918TWgE3KCYCyCN8Tb5yrBTEpMhjKMPskhlqtpemM%2Bc2BMzboCEevzYO7%2BRLa92%2F14P6pu3oWAe9McomLatwDgYr0lz0etPWI5IzvVhzsFGTssQQSU5vCxlMOpjkZw7z63RALP6oEe8swdf0ill5N%2BIfaDthB%2F43DBpDQfuaU0bj%2FLfqS01bT%2FQPFlmVw13iToZ0LlPwpFr7YIo%2FXxv2fzZl4JuFysnDONXXS4fGTgjyeEqlJ0%2BdfIWw2N%2FRBi9zuBRHYAyB7Dh6QPJtjORBLiTRI8vm5zFT7kOi2AJbnijMKT2tMAGOqUBFZBzYr1gzB%2F37sbzv2GxmCZRzTU8ePmOXcpm8Fl38WnAhhzTAK9FBedGrQWt7IE837qT9oxSPq%2BXyzA2uFl8cwIl47sfUkcyVBeyhRZpRZlpXtG6hNBi20unCIM%2BgZ%2BoGzhMR%2FAAFLAYpAY1XF5f1q%2BtZz0DWu68%2F4RKE25SBVmo0Rik%2BA9RaqaEN90%2F5mcKmWcjhR14R6qXzq4H6Pn8xkPzIfjj&X-Amz-Signature=79c946852e83673f414dee0fc72de0d223a4c957529dfef65e2e56595c155de9&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666625ZTZT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXJtRtwfDmPEnfqesqMWV1r29QGMyYuciHqf3XLQV8OgIgCVdI%2BBvCTabf%2BOAqNskE7b0Uj2DBFVp76Vy1boyjgNAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKA6a0Co9CqqJt99ZircA1DJbpqsjmXiBIH5uyP%2BfeRIOycEkCdJ0ctfEUSSCZpHOAOfLyTq26b2Tf8%2F01GYV26ejcOBSHkfbq8Sl5dSgGFi8OE4Og9ECcVGS7xfCdmNMtRr1W3NvarfAMEoonbOez3TIYZmZnq82AFfjHJroq1PpsfFwWLeiH7MJkEwK53BBzcHjqOrdWms%2BRaOZyppzUkpKYt7aATcXQG5TItxwsmBtRW71jRgk1CEK6M7xa%2FL21fm5ZYKBbRYjod08sWHdYHgDD%2F9N4ofjjSAApU3EmTiUbyaIkLKEJewNl5vQq1Bvjf3GdU3wqtUdJL%2BeCjziDdX5fC85u4pmYiQf918TWgE3KCYCyCN8Tb5yrBTEpMhjKMPskhlqtpemM%2Bc2BMzboCEevzYO7%2BRLa92%2F14P6pu3oWAe9McomLatwDgYr0lz0etPWI5IzvVhzsFGTssQQSU5vCxlMOpjkZw7z63RALP6oEe8swdf0ill5N%2BIfaDthB%2F43DBpDQfuaU0bj%2FLfqS01bT%2FQPFlmVw13iToZ0LlPwpFr7YIo%2FXxv2fzZl4JuFysnDONXXS4fGTgjyeEqlJ0%2BdfIWw2N%2FRBi9zuBRHYAyB7Dh6QPJtjORBLiTRI8vm5zFT7kOi2AJbnijMKT2tMAGOqUBFZBzYr1gzB%2F37sbzv2GxmCZRzTU8ePmOXcpm8Fl38WnAhhzTAK9FBedGrQWt7IE837qT9oxSPq%2BXyzA2uFl8cwIl47sfUkcyVBeyhRZpRZlpXtG6hNBi20unCIM%2BgZ%2BoGzhMR%2FAAFLAYpAY1XF5f1q%2BtZz0DWu68%2F4RKE25SBVmo0Rik%2BA9RaqaEN90%2F5mcKmWcjhR14R6qXzq4H6Pn8xkPzIfjj&X-Amz-Signature=d5054989c473acc34033fc5e6306faf8ebcb0fed7416b06262beaae018eb1420&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RN3C3RW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoeaMjFhvwJm9JUHAiFCwIGxcauiQOmXwdm4JTng7n2AiA%2FRMm0lGRmTjFgijzzIvTe3mRnUYuc2LjIu%2FSZLxHwCir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMjU65botouH6yEs3dKtwDEeCFgEDPre1R3ftqP97g0%2FJPctFkimonhqDBImotbvvw73id6JipdRqloj0lu2XIqfd1nyyGMTOinJLXmb52xGA6kvRZaDPdWL6A3%2B9PzQ3K5VZRO9%2Bu1w7rp86o%2FkfwzRioeFuuUww4MY9Yr9kqrlR9Eb4JLJLv3rqK%2FvG%2BsU0Q9y9KjUqJFd23nMCGDHIZJvb0OIk2A%2BXJpeqkc8UnNl9PSIhoARdGgPS0GZPW9kheHNlbXADY734OvVbz89X55mWzW%2F6rwLk%2FMQxgAYU5zZTHiWbca6ZujyO%2FmIWmnfoakERnBMhsOaMPZD0SN1n%2BsCun%2Br7Nu63sLQztCxHqaVjB5x7Ue8sOv4Aearjhpg1VwF4tORHvlBRfXh41AsdJStq8huzMtmttDZqm%2BAhU3FAuUfU4rwz%2FoP%2F%2Fy4a3ls41091THJ992H%2BC3bJDFFHcUEDSwB9jWR5rY4Z%2FZ%2FfjN1o4uPzJXv77TBPq4cxrTtKAZUSUTNSP6gHcMa70uhX%2FjU6h65TYL0FR%2FoMWEPN8gtjuO5r%2FaoY03UtXIsYxiZYTJlJdJOyp1Y%2BDdikC5aqb%2BuU38lvWOAr3sg7T7VrBPVUxF8u%2B8n2p9DRK2%2FNNamNRFTY74bfujzLyQUgw2N20wAY6pgFPDFW7e47qWdjrmZ22H68dOPiVYDqVALAyZ9WWE0skh0GBqP2uxVs1a%2FoaWTFjrPz3etfeR67BPBP1E12FV102r%2Fpiov1zm1L0%2FfkTi5BHWqqs40dzfsWNCWKOLQk7Z7bTHmBTDTNoTcrn8nQr3HcIKsOZgd701IhZ2nKXy%2BpiG5qlAc8kDJh2Sohlp%2B5L3Fz4TX2LWhxOf4h6qqvlQ%2BC1a5KgVIjZ&X-Amz-Signature=2e6d8d32f3e37a37b90ca1414323f9280d3ac3debe89e5b232a4c386c1e60f28&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALJRBJ6%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB92ej8hWNJrE3CkyAHqj%2FhdT5BjdLCAycQRv5v5nY61AiEAzwnMY3hhRnW2HlCnVzSK%2BjRF8dB3Gi0%2FoA1xpChPxwIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEWPzWFLzB2Wexe3NSrcAyOyduKJjtnaTxKZQhHAX75mYxtOUg8vdaMt%2FXE6PiP4QknchPGO7rcZnI4r4Awcke7SRcZf1tgDqGOU%2FFj8igjuxO8f5MJHeAcqS5mTkF4nX4Ge6USVX5Fbfre0rJBLO0grZUFlfsz%2BFc6BYhfBqyIAX%2BYQqyDeSS2LXKdSixHODpKWFst2IlFonAh2IhelCtbcM7%2FvOKrVP66WOrYLOVh50q%2BJWMaZbFAuVX3Llx8peUNh5o9lcBx1WW0WYtICTV3vltmt%2FroXAQFUJE04PGc4h%2F899Hp%2FPGcsZfF6%2BqmnI7Ll%2BFlZUMPf9QjZD0DGtOavxDxuufMvykVdHhlqBc39tEuFxGPjs5YRpr2e2iyuLrE4%2Bc7ZC1D1ZSAA7Wvrdj4Jc6ku45mBO3GaDg7lQNBhcbDUoL3mP8fwlk8LFRd6QvCUO0N18Zq%2FJef4%2F2vcGepYz3nbPWgcxF9Wdz%2B19a0Qs%2BbUq5Dtjzb2Lvi7hHwJAWwn473iB2WXGkCyvVg7vfwMcmrMGwAPEXtVoyMWDyzUbm%2B0c8zFilIegAEFurGBucH1NHYIucTEjJF%2BmstNBBpNKlW2%2B4mhdzQWBFLnc%2B54hu8gJ8stTvHMDbTR%2FKFkXdvnpZ2aAx3HROnjMOfdtMAGOqUBgUknyGzNzdZW8qI2%2FvZTfkRUWRiFvTAaSYvxnNVhLu1JWK5nSwbUK0XvKLW4WHAmHf6Al30zFKu%2Fnc3M33QndQBXxAtfOky7WlDnE4w6zNw7tdIdLGXUoaDMnG%2BDgpgUwfwzNwmdd%2FEQmqqGxX8vnfsxZKE945qM2BpkS8YXnlHvK0YmoHren75sN3BOJcyc04CZU%2B1FWG3MLW3qP4Jz%2F0Bm%2BYBW&X-Amz-Signature=dcd4743961eb11e442e8ba0db11d30cd3e2db3d3ea7792809bc6b971b11bc476&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666625ZTZT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T210448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXJtRtwfDmPEnfqesqMWV1r29QGMyYuciHqf3XLQV8OgIgCVdI%2BBvCTabf%2BOAqNskE7b0Uj2DBFVp76Vy1boyjgNAq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDKA6a0Co9CqqJt99ZircA1DJbpqsjmXiBIH5uyP%2BfeRIOycEkCdJ0ctfEUSSCZpHOAOfLyTq26b2Tf8%2F01GYV26ejcOBSHkfbq8Sl5dSgGFi8OE4Og9ECcVGS7xfCdmNMtRr1W3NvarfAMEoonbOez3TIYZmZnq82AFfjHJroq1PpsfFwWLeiH7MJkEwK53BBzcHjqOrdWms%2BRaOZyppzUkpKYt7aATcXQG5TItxwsmBtRW71jRgk1CEK6M7xa%2FL21fm5ZYKBbRYjod08sWHdYHgDD%2F9N4ofjjSAApU3EmTiUbyaIkLKEJewNl5vQq1Bvjf3GdU3wqtUdJL%2BeCjziDdX5fC85u4pmYiQf918TWgE3KCYCyCN8Tb5yrBTEpMhjKMPskhlqtpemM%2Bc2BMzboCEevzYO7%2BRLa92%2F14P6pu3oWAe9McomLatwDgYr0lz0etPWI5IzvVhzsFGTssQQSU5vCxlMOpjkZw7z63RALP6oEe8swdf0ill5N%2BIfaDthB%2F43DBpDQfuaU0bj%2FLfqS01bT%2FQPFlmVw13iToZ0LlPwpFr7YIo%2FXxv2fzZl4JuFysnDONXXS4fGTgjyeEqlJ0%2BdfIWw2N%2FRBi9zuBRHYAyB7Dh6QPJtjORBLiTRI8vm5zFT7kOi2AJbnijMKT2tMAGOqUBFZBzYr1gzB%2F37sbzv2GxmCZRzTU8ePmOXcpm8Fl38WnAhhzTAK9FBedGrQWt7IE837qT9oxSPq%2BXyzA2uFl8cwIl47sfUkcyVBeyhRZpRZlpXtG6hNBi20unCIM%2BgZ%2BoGzhMR%2FAAFLAYpAY1XF5f1q%2BtZz0DWu68%2F4RKE25SBVmo0Rik%2BA9RaqaEN90%2F5mcKmWcjhR14R6qXzq4H6Pn8xkPzIfjj&X-Amz-Signature=7a85c9fa1db90acbf48b37ce91b573e2792fe1c9b29be2bee4bfa78794f2e06c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
