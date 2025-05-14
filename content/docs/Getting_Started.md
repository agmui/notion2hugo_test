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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQQR77C%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDFuFoy2WWaQLOD%2FO6P%2B8CFrv%2BiUtw9kLkOK9N%2BdsDhGAiEA2AFm3hxybMuUMO5auqqvojJtm3QK%2FO%2FVotN8MR9zP6sqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJqleu9D%2BDCqnzETyrcA8JWNng13TmMxdU6a3VaWHtG%2FYpQV4RdrN5iwzAl3rCJNbP3aG4lVHBcejYmdPF1yO%2FwMtYTpn23j59WAj9E8fncyfEcyZfuNxSPdpLaMk795Dd9Jftiqurt9hY%2BFeUxh4vW5dmB5iMyNZKSrwlNvCfjhzGxmegFJR0nWpf9bC1rqayhCU0TvnJgrTk7NdY%2FtqOjAyTnj5P8vJbUOy95%2FGnRFH%2Fq4MR3z3PivK7ZOdqBlRiFF6D2K6X%2BShoTT0kLwOB6j1ZMvquDxQrZxo92RN032jdpv%2FSJx7sXw%2BWi0jy84%2BL8jdJ6kQ9edQ%2BA%2FFnb03OP2xcsnBhStE7yWYSrF0AYEartgdn8N9N8md%2BDialtTG1KA1TXZzkSJ8u4z26nkIfuau7CG3%2Bu7tqKu1V%2BeFAURTi9M%2FZt3A1fzK1VZbCTO8VWru90JAu7Ae2XSzbTW9rcYpj7m%2BpXmycX0Wa94NKl5dDkzT1p%2BtAhzm7c89Q9YTfzxrTqqhm7vs72qDHX2x%2BBP09m3YT1APez03oSPdswwZzhklAz%2B2tOelspcIocwUxka6Lg1gnwd9F7IY78EH2ZnVBsa1bQZKt%2BYKOpfT3hDvTKlbdNo3GzINvZLUtkXalCG%2FK8x2TriNV7MIm%2Fj8EGOqUBGIxm0y0jb%2BVUfYCYh6TXNfvtWR2Bi12zaMreX1krlLFWrXTyLnGO12NFhpsgzvyKYT6fkXgdMrdBx2uZRbGwIBc467%2BGScx069WIA3Wd0rQrab11jL%2FQMlnp%2F2wKjRgxgQONCyQmtCOKuVVmN3SXuVEqu4xS%2ByNJibKD3ApohJhSu1NErSdba792nGSDvhZ4woqIEFx3V9xe77a0kDkpTwKxkHvN&X-Amz-Signature=29ca4b1e3e8852d435cad9cc8c9ab17923d55aafe390296593a4304dc0c711aa&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQQR77C%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDFuFoy2WWaQLOD%2FO6P%2B8CFrv%2BiUtw9kLkOK9N%2BdsDhGAiEA2AFm3hxybMuUMO5auqqvojJtm3QK%2FO%2FVotN8MR9zP6sqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJqleu9D%2BDCqnzETyrcA8JWNng13TmMxdU6a3VaWHtG%2FYpQV4RdrN5iwzAl3rCJNbP3aG4lVHBcejYmdPF1yO%2FwMtYTpn23j59WAj9E8fncyfEcyZfuNxSPdpLaMk795Dd9Jftiqurt9hY%2BFeUxh4vW5dmB5iMyNZKSrwlNvCfjhzGxmegFJR0nWpf9bC1rqayhCU0TvnJgrTk7NdY%2FtqOjAyTnj5P8vJbUOy95%2FGnRFH%2Fq4MR3z3PivK7ZOdqBlRiFF6D2K6X%2BShoTT0kLwOB6j1ZMvquDxQrZxo92RN032jdpv%2FSJx7sXw%2BWi0jy84%2BL8jdJ6kQ9edQ%2BA%2FFnb03OP2xcsnBhStE7yWYSrF0AYEartgdn8N9N8md%2BDialtTG1KA1TXZzkSJ8u4z26nkIfuau7CG3%2Bu7tqKu1V%2BeFAURTi9M%2FZt3A1fzK1VZbCTO8VWru90JAu7Ae2XSzbTW9rcYpj7m%2BpXmycX0Wa94NKl5dDkzT1p%2BtAhzm7c89Q9YTfzxrTqqhm7vs72qDHX2x%2BBP09m3YT1APez03oSPdswwZzhklAz%2B2tOelspcIocwUxka6Lg1gnwd9F7IY78EH2ZnVBsa1bQZKt%2BYKOpfT3hDvTKlbdNo3GzINvZLUtkXalCG%2FK8x2TriNV7MIm%2Fj8EGOqUBGIxm0y0jb%2BVUfYCYh6TXNfvtWR2Bi12zaMreX1krlLFWrXTyLnGO12NFhpsgzvyKYT6fkXgdMrdBx2uZRbGwIBc467%2BGScx069WIA3Wd0rQrab11jL%2FQMlnp%2F2wKjRgxgQONCyQmtCOKuVVmN3SXuVEqu4xS%2ByNJibKD3ApohJhSu1NErSdba792nGSDvhZ4woqIEFx3V9xe77a0kDkpTwKxkHvN&X-Amz-Signature=e24bb18f24e43e4cfdb6384d9cf4fee57e7384d080e15b3192ee707db36f2be3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQQR77C%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDFuFoy2WWaQLOD%2FO6P%2B8CFrv%2BiUtw9kLkOK9N%2BdsDhGAiEA2AFm3hxybMuUMO5auqqvojJtm3QK%2FO%2FVotN8MR9zP6sqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJqleu9D%2BDCqnzETyrcA8JWNng13TmMxdU6a3VaWHtG%2FYpQV4RdrN5iwzAl3rCJNbP3aG4lVHBcejYmdPF1yO%2FwMtYTpn23j59WAj9E8fncyfEcyZfuNxSPdpLaMk795Dd9Jftiqurt9hY%2BFeUxh4vW5dmB5iMyNZKSrwlNvCfjhzGxmegFJR0nWpf9bC1rqayhCU0TvnJgrTk7NdY%2FtqOjAyTnj5P8vJbUOy95%2FGnRFH%2Fq4MR3z3PivK7ZOdqBlRiFF6D2K6X%2BShoTT0kLwOB6j1ZMvquDxQrZxo92RN032jdpv%2FSJx7sXw%2BWi0jy84%2BL8jdJ6kQ9edQ%2BA%2FFnb03OP2xcsnBhStE7yWYSrF0AYEartgdn8N9N8md%2BDialtTG1KA1TXZzkSJ8u4z26nkIfuau7CG3%2Bu7tqKu1V%2BeFAURTi9M%2FZt3A1fzK1VZbCTO8VWru90JAu7Ae2XSzbTW9rcYpj7m%2BpXmycX0Wa94NKl5dDkzT1p%2BtAhzm7c89Q9YTfzxrTqqhm7vs72qDHX2x%2BBP09m3YT1APez03oSPdswwZzhklAz%2B2tOelspcIocwUxka6Lg1gnwd9F7IY78EH2ZnVBsa1bQZKt%2BYKOpfT3hDvTKlbdNo3GzINvZLUtkXalCG%2FK8x2TriNV7MIm%2Fj8EGOqUBGIxm0y0jb%2BVUfYCYh6TXNfvtWR2Bi12zaMreX1krlLFWrXTyLnGO12NFhpsgzvyKYT6fkXgdMrdBx2uZRbGwIBc467%2BGScx069WIA3Wd0rQrab11jL%2FQMlnp%2F2wKjRgxgQONCyQmtCOKuVVmN3SXuVEqu4xS%2ByNJibKD3ApohJhSu1NErSdba792nGSDvhZ4woqIEFx3V9xe77a0kDkpTwKxkHvN&X-Amz-Signature=10a35757e63f2524960d8b28b269268749ef14818c2f89320dff5f4596d381c7&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4IS3A3Z%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDc4Nr%2BbNjF%2BOieA3dEXkupCKCobJRvIERvd2AQdGA3yAiEA6mJDSDTK%2BKKAddWPUAUC9YXelpXLevS%2BRgyQqaCPowcqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLVG3A%2F9xgGpnqkjUircA%2BVoTozYED75tOur54Otb7w1%2Bh3mZq3Tqooz3ShlkV%2B%2Bzhx7VeYwsircpvhHxnzSslWIo9hLeMsXckIUVv739od2LRMQV74bP4P6x0l8%2Bv5zRGxsCWvAL1BSS%2B1%2F8vfZe2qxwYot%2F8g%2BWWy5Cp%2FOWMV8HuvedvGB5t1GiAX%2B5iJlsT%2FGzF7zVyLdCbEwdLr55qqGC%2BJd2aTbSnQZxr8eepDcInT4T6wVGSR8RBRpK2OJkz626M99WQ9l1aSwo38foqYf3Hnk0e8yKvYePChW5qj4SvN4f7Toj%2FEePNQWGZbLnSviF2ETT3%2B%2F6RvwLwNWsiyZVjOUfOOcon7Bzok8q95u0UDXPBJxGtQK3ljAeW2FhloqMJ9uY%2FddYTfiWS41fhi64rOmcMNebYoEj8NLocSE77J5ZsSIAHtxABqN8OE5lx4CHy%2B9Qbmgj3fePYGKRZO1l66G%2BZvA%2FgrgphG3r4%2B2p1bHfDmkdEp3ef%2B9jbv68MPRyTHwzmq59xMaUhLo5vW3Ge%2FJwaYUSL7wdIRusj9JLOI1FL%2BxBU43BTp28sZObLi88d10pzO8X026QqAGtGkbkooCU8LhVQ9nB%2B5%2B9UR9Z3obq46bAsumazAGAsH92zgTZYpU1AAK6TV8MLW%2Bj8EGOqUBvz%2FD52IUuP9LS4%2B%2BBkUbri0u5Xo2t9aemlK6xZfMAGNNWkYrdT%2F%2FVB1XwU0MKNl7YHc1hfzFW5KcHy0pLDfDzxxayVILCXUbsWsWfdwlgdL0C4jTJmidc9x1oVj3vsmA%2Fwu%2F4CHpwp4DHZi1eOYqzXoMo7MjMhKvA%2B2rD%2Bzcz94VvXHOJvfLyv66LxS%2FhJpUvuKqgiVlETyE0cjLJNyFW7P%2FDP05&X-Amz-Signature=6b16eca2e5852b78f048fb4d93e211f4c275b2b0d5cd84119ef3cda9d61a2169&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IMQRIXN%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIEJLIbcEtGq6AHcYt%2BUX5cYZ%2Fo8QwOIGvyMcpiaoAP32AiAet2wNnF5S0OvBH%2F95unI4GuKDc0Gm12Joqy9l7UhNGyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqEA3r5S5aKxxMXTtKtwDAlCnftkke1JLn41H8kfrslTBIGkDtqaUMpuSgyt5WQ3TaoI7YL2qW2xwWkML0s7U9NH%2BtOKpotVeDe84lvSyQ0uHh%2FPH0t36n8lM%2BqC2Os9KcRJO9GkFSgvIAay1Ipjku%2Ft8w04AxMZR7Bx0H849EYjndODpdcaEgY1jifRmKIKofQER4JJUj3DwlCllblVPBgMjoi0jWfDJY6s4Nvyu5nE4TjoFWI1Kq8NuB9el1qieabK%2FwQ9%2BECEq36jyKscIS7%2FIjb5PTFaub9uUQ2Swpy1R1G5DBxvLiQd73kC9g6ElEDVOx6yeASso501tgkEu3P3MGD1yr1DnnX8OQF6IzsxCtbTxFKBfRBQpDE1AazF6FyEcGvvJry%2BIMoP%2Bl%2BHDJuUdKccs138inHI1iWcjxLEpaGjOYuJqxjtEpovht2anJSR3vBwfdVwU9tAWgaBy1Df6a3%2FiNTgcmTUhqI%2FMiJauRmCmC%2BqYTEBXxe2vVCjDCvtA6wCidwPLQWpqYm4a3mOFL3mzD2sadtBJdxqyuMIzSAnymNbRJGyEpSwC4kmCLlOd6Qk7vsDBo3iVBwzUAl%2FGk7ix%2FWqQgbFtyJCLW9Sa2bvBJA6VWu9U5FdOWvctVrpGcyi4aVmU%2F08wir6PwQY6pgEjlUHdRE7WWkKpWpy2siVbXCH1ZE%2BR05pu%2Fk5wH8YEgdW27UU3l2ysYmTTmEEovNnK2YQdsMjdQqrEu7%2Bm7k7U9w%2FgAQTdzPEN5JXrQPf1Y9V4qWA0le01152e1pSCQ1Rx4PUmjCrp%2Fvnn6dZO04GmeePdQj6Un98hg1Tovmq50ryDCmk2sqpWQxj2oO9WnU2t4Oe8LsjAWhCC0%2Ffd6GiluncO7Ay1&X-Amz-Signature=060ac95e44e8e3f277e622ba0b4616c88df35af53c09e42ab4afe155c6cda95d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VQQR77C%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIDFuFoy2WWaQLOD%2FO6P%2B8CFrv%2BiUtw9kLkOK9N%2BdsDhGAiEA2AFm3hxybMuUMO5auqqvojJtm3QK%2FO%2FVotN8MR9zP6sqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJqleu9D%2BDCqnzETyrcA8JWNng13TmMxdU6a3VaWHtG%2FYpQV4RdrN5iwzAl3rCJNbP3aG4lVHBcejYmdPF1yO%2FwMtYTpn23j59WAj9E8fncyfEcyZfuNxSPdpLaMk795Dd9Jftiqurt9hY%2BFeUxh4vW5dmB5iMyNZKSrwlNvCfjhzGxmegFJR0nWpf9bC1rqayhCU0TvnJgrTk7NdY%2FtqOjAyTnj5P8vJbUOy95%2FGnRFH%2Fq4MR3z3PivK7ZOdqBlRiFF6D2K6X%2BShoTT0kLwOB6j1ZMvquDxQrZxo92RN032jdpv%2FSJx7sXw%2BWi0jy84%2BL8jdJ6kQ9edQ%2BA%2FFnb03OP2xcsnBhStE7yWYSrF0AYEartgdn8N9N8md%2BDialtTG1KA1TXZzkSJ8u4z26nkIfuau7CG3%2Bu7tqKu1V%2BeFAURTi9M%2FZt3A1fzK1VZbCTO8VWru90JAu7Ae2XSzbTW9rcYpj7m%2BpXmycX0Wa94NKl5dDkzT1p%2BtAhzm7c89Q9YTfzxrTqqhm7vs72qDHX2x%2BBP09m3YT1APez03oSPdswwZzhklAz%2B2tOelspcIocwUxka6Lg1gnwd9F7IY78EH2ZnVBsa1bQZKt%2BYKOpfT3hDvTKlbdNo3GzINvZLUtkXalCG%2FK8x2TriNV7MIm%2Fj8EGOqUBGIxm0y0jb%2BVUfYCYh6TXNfvtWR2Bi12zaMreX1krlLFWrXTyLnGO12NFhpsgzvyKYT6fkXgdMrdBx2uZRbGwIBc467%2BGScx069WIA3Wd0rQrab11jL%2FQMlnp%2F2wKjRgxgQONCyQmtCOKuVVmN3SXuVEqu4xS%2ByNJibKD3ApohJhSu1NErSdba792nGSDvhZ4woqIEFx3V9xe77a0kDkpTwKxkHvN&X-Amz-Signature=51ac8dcd30a4a63b5d3a0541b0ee73f1a9264ab98f766ab0182ea2f7fa05c5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
