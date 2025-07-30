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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C34SI3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMuRLG1%2Brp2TS5WOSLgd2sKb13cZGJbC%2B6GmsL8s66AgIhAPD%2F3NAMkjnmDEqgd9HAxJIDgOgunql4FZ4M8gQrNMOlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8ejzLpxvzgyN8x%2Fgq3AO0jYOvot6qbOSp6BrnEEvw0GYE42tiLbYhIKHn0GxZnNAdUfM%2F8tyB5OXfBrdzb13Sk2BQGiNqjA3Xc968T4xWuH12BKMylivqlx%2BK4lbI5OnkA69Jv3tW8PJQZwOwM0QjDHRqQKgOf94aTZaT%2FgU7kHCpmPyd4K8iufmTRbepu%2BhbuS%2BLjKjSypWXrD%2FYL2MwBISBoShUNptlb1uVwjNo6zQBoWFGG2I2lnDsoDUUEDyJysztw3PDWtCLKAjPUQdp9syFK9bk4yd9QhXlZ055oGZDVLp71LOOH94MC5JQLFejgeo23veCGNelqZvPFGK4OQGK9Bzgd%2BnNImaEXCQIpaUUplsFz9oe5NWWRgqiPlI588vtYvs9nYrqztWioXooFmye6t6U4OlRdUiq2SNyqDE%2F%2BFVdSOTVVi4I%2B1%2BojuTX3Oy1FutgBukzOM5mXz6zF62pzAO6Zy2ODfqYD0h67KDXCdj3a3PyYcat4NUItYQ2KvB6H9V%2BsElzRtLaOIbTO%2Fx%2B1ayyEMRI4A3IeAV96rXalaAFWLIQrmkNDARVkEN2COdmnjEMQXhrS5E4tLbZC9cMRLpddOkw1GoN53JWpn5eiP6Zm7RwU%2BviqpcWPiuLV5cVSJ2y0PcUXzCe8KfEBjqkAUBEWJjBlbPwrUHWeOtQiJxaa0erbziEawpXEtOpdkfaqvQpU6WwwGHgKnv9yJVHCrG1SFJatkwDSYq9%2F2EYKTuRL%2Fjltx9ek9x06uwzhhzZ0%2BmBCWZKSDG9wm7LTOfR6OAOpG%2FFXYfAOa06YTCu0czjH3aDWB%2BJ1iFHviyenOLGNO9p5b346uGGwthGJotjpKLgcymVai8pbivIcFgyWzVdzi4c&X-Amz-Signature=9fe5d22a5cedffcebef90f7a2f60d3a829afef89a37ecd5aec323aa7743038e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C34SI3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMuRLG1%2Brp2TS5WOSLgd2sKb13cZGJbC%2B6GmsL8s66AgIhAPD%2F3NAMkjnmDEqgd9HAxJIDgOgunql4FZ4M8gQrNMOlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8ejzLpxvzgyN8x%2Fgq3AO0jYOvot6qbOSp6BrnEEvw0GYE42tiLbYhIKHn0GxZnNAdUfM%2F8tyB5OXfBrdzb13Sk2BQGiNqjA3Xc968T4xWuH12BKMylivqlx%2BK4lbI5OnkA69Jv3tW8PJQZwOwM0QjDHRqQKgOf94aTZaT%2FgU7kHCpmPyd4K8iufmTRbepu%2BhbuS%2BLjKjSypWXrD%2FYL2MwBISBoShUNptlb1uVwjNo6zQBoWFGG2I2lnDsoDUUEDyJysztw3PDWtCLKAjPUQdp9syFK9bk4yd9QhXlZ055oGZDVLp71LOOH94MC5JQLFejgeo23veCGNelqZvPFGK4OQGK9Bzgd%2BnNImaEXCQIpaUUplsFz9oe5NWWRgqiPlI588vtYvs9nYrqztWioXooFmye6t6U4OlRdUiq2SNyqDE%2F%2BFVdSOTVVi4I%2B1%2BojuTX3Oy1FutgBukzOM5mXz6zF62pzAO6Zy2ODfqYD0h67KDXCdj3a3PyYcat4NUItYQ2KvB6H9V%2BsElzRtLaOIbTO%2Fx%2B1ayyEMRI4A3IeAV96rXalaAFWLIQrmkNDARVkEN2COdmnjEMQXhrS5E4tLbZC9cMRLpddOkw1GoN53JWpn5eiP6Zm7RwU%2BviqpcWPiuLV5cVSJ2y0PcUXzCe8KfEBjqkAUBEWJjBlbPwrUHWeOtQiJxaa0erbziEawpXEtOpdkfaqvQpU6WwwGHgKnv9yJVHCrG1SFJatkwDSYq9%2F2EYKTuRL%2Fjltx9ek9x06uwzhhzZ0%2BmBCWZKSDG9wm7LTOfR6OAOpG%2FFXYfAOa06YTCu0czjH3aDWB%2BJ1iFHviyenOLGNO9p5b346uGGwthGJotjpKLgcymVai8pbivIcFgyWzVdzi4c&X-Amz-Signature=e00fd184afd5ec52ee69f0877676a4c0addb342a64afa551779c7b55f7ab9c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C34SI3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMuRLG1%2Brp2TS5WOSLgd2sKb13cZGJbC%2B6GmsL8s66AgIhAPD%2F3NAMkjnmDEqgd9HAxJIDgOgunql4FZ4M8gQrNMOlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8ejzLpxvzgyN8x%2Fgq3AO0jYOvot6qbOSp6BrnEEvw0GYE42tiLbYhIKHn0GxZnNAdUfM%2F8tyB5OXfBrdzb13Sk2BQGiNqjA3Xc968T4xWuH12BKMylivqlx%2BK4lbI5OnkA69Jv3tW8PJQZwOwM0QjDHRqQKgOf94aTZaT%2FgU7kHCpmPyd4K8iufmTRbepu%2BhbuS%2BLjKjSypWXrD%2FYL2MwBISBoShUNptlb1uVwjNo6zQBoWFGG2I2lnDsoDUUEDyJysztw3PDWtCLKAjPUQdp9syFK9bk4yd9QhXlZ055oGZDVLp71LOOH94MC5JQLFejgeo23veCGNelqZvPFGK4OQGK9Bzgd%2BnNImaEXCQIpaUUplsFz9oe5NWWRgqiPlI588vtYvs9nYrqztWioXooFmye6t6U4OlRdUiq2SNyqDE%2F%2BFVdSOTVVi4I%2B1%2BojuTX3Oy1FutgBukzOM5mXz6zF62pzAO6Zy2ODfqYD0h67KDXCdj3a3PyYcat4NUItYQ2KvB6H9V%2BsElzRtLaOIbTO%2Fx%2B1ayyEMRI4A3IeAV96rXalaAFWLIQrmkNDARVkEN2COdmnjEMQXhrS5E4tLbZC9cMRLpddOkw1GoN53JWpn5eiP6Zm7RwU%2BviqpcWPiuLV5cVSJ2y0PcUXzCe8KfEBjqkAUBEWJjBlbPwrUHWeOtQiJxaa0erbziEawpXEtOpdkfaqvQpU6WwwGHgKnv9yJVHCrG1SFJatkwDSYq9%2F2EYKTuRL%2Fjltx9ek9x06uwzhhzZ0%2BmBCWZKSDG9wm7LTOfR6OAOpG%2FFXYfAOa06YTCu0czjH3aDWB%2BJ1iFHviyenOLGNO9p5b346uGGwthGJotjpKLgcymVai8pbivIcFgyWzVdzi4c&X-Amz-Signature=aa11bd2f51e04505ace1afc9fc9091066c4fe4fe82566120e220ea1cc6f9c4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L42J7TE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1QAkByD3qAaS%2BZXdYPU8GybGYLAFU80Gl4%2BbzOfqTfAiEA1Dxs8Ivm2mlK0eTI59ZQ8EYWysqbDsVdgmFQlzWyePYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIPiEqqn%2BYIWAW1DyrcAxycXOLY9UkCJ%2FCx7023CrU3v%2FqvLzxtX8Q%2Fw%2FLvwXRudrE2wDoAJsC9htKEE3lvMLwWK390iJ%2B6WMPRnbQChrDKwGW7WRh%2BMr%2BFmrrPi22tTTQ7gH7hz3Vdq5anL%2BWBJo%2BzmJwQ1NBOdEeJAZaf8LKrsQpATbLnTRd6yZNHz79pqOnsZ1n2ERJIdXH6TrudDMk%2B6T41hD6NU6ID6ADsuVfb9WUJk1jknrltqsQqNY3iWRVJ%2FI5NY4MHDmUHetwPE%2FVJcXb5RJ3zUWf4y2B07nmoazg6hD87gKO7NfB0S7EL8jgGLO20sQCjXUENEz5P5HbrleP6mOb1kV6y%2BexNiG%2BbQMgx9sYlDI5APyhuW%2FgoZm4e6V0fEEjrOZa3lPBJffymcRBsZlcV5wkTvksplpw4yXYkUX1f4EVWH5hnE%2BQlojtxwzKjogHCC7RX0StpkAw21UA5IUlQJzFX0rDNxnbxuV45oeZYJthEK4ZtqIZeUfX9n2vfe4ilfrSPpSquhrUi0Dl0jRh1Uzcs3ctg%2F9sfLVsuaBy%2BYZsAbN%2F2xCjHW8b4rY50RkZ2xSw66aCD%2FCXfKjrApKW%2BXSn92qYtw%2FNDzm1oguppkbVaG3Uv68AUhX6dWHo%2FeGnDSPMfMLXwp8QGOqUBYgxOVoJrn9BXnE%2BdizWJ2c4ApWpebKV2ZYKMR6AO5qPej8FJ9R22LouUML%2FkIkK9X%2F%2F09R9affD9AWQLWszhLof6OCNFRsQyDUaGffpjfP0amJ2fI1%2FLzqcmhyO%2BZ0RIh0Bt9iohDeTCdTDi6hWfLjIxov%2Bx4FWb5mj80diuKKZyyxRuNZx6ybCetJTqtziLjfc3cMk54kjGJwTbrJATSiWmM6qr&X-Amz-Signature=4fd31596b0eca69d2f1b9ab6a0d5a4099b28a1dd17136212d16817bb08e2cbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2TGOMJW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvB8%2F6XCeAdq8sEWncSyv%2BZoUJS3gOpFEh1I7JqmJASAIhAK55PLYowj513BiD%2BlYVxBj%2FmUTYbBq2GLcmvEygrZdgKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdtotreHpfJFqTrBUq3AMi9jqh0MtkaEL9RDqnR%2F%2FV4%2F%2BiZ8PYvnwU6czFctiPfG4qrSc2W6IZUqhLGvlXtp7%2FhdUR4TNAMXrVlvbA3cUp%2Fs5LnhkpM%2F2%2BhKCMvBtGLOcQCnfOV99fqSXAQoEFADL3CUhX%2F4cO8dc1k4%2FiX1czVTkLQt4rPTbltN7DDgnH%2FZmKg5KeEExSREt5h5T8tqotbp2IhBQbTuIe6ki3Y7lrIunQJsD8N3gDiCEER%2B8ca1X4D2gmZscIqi%2Fh5LHQyezWHj%2F24rXdJuDfJ17kllf9Nt9NJ18Zez8jqJkoGB7rHQmukSiig%2BO6ICk%2BM%2B2ffSrJJSzWvgpTjGOqZdwtQbUaVlG0k3a9z24HfsacjcnX1aiYvodIkHMU0wVXeRTc9qLUghZO6oYv5m3QgbSAIkFBKtxypTiIvjtNzX%2Bj94Fh38vSMq0x7jR6Lw3vgL2HszmsmSeXM2Po10eHbcP%2F4TgKNnbA9Kuivcm3xFg2XiizyJo4YrOfwgG13LfsRXnVLKv5URDRot%2B%2Fkz0Zg3B6FngMj0GpdSWYJ3LkwJcsHCR9cKHCHsKKF%2BGReH2gIIaxdqNBn9oWzibo2HsHcNIeE8EKe7hAvksn%2FXhsK%2B9eqEdfFqGkFmA0%2BPeDgBj2eDDq76fEBjqkAdBqJTqOQCPmugNGjHqTrHpYqzWXd4qlB2LmqJQGxdpN9XUTdzSjEQ4BjBKDY2ZuAlU6BVSt34Fw3InJOoxZYoEsX51ntk7YSyoUpjj%2BQI4wbqSQLuhsGyNVmt9vDT2C76U2yE4C27vkHNVdD23EaD4m3rInjuQj9zW7DGnb4AkcFtZU3cIJgQVYx55grXIcI5X9POGwukue5%2B%2F8QFW%2BttA6GrtY&X-Amz-Signature=74011564e8aeb0cb72659625ed1ad115d750d282fc1e09daa1a5c536e249f939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C34SI3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMuRLG1%2Brp2TS5WOSLgd2sKb13cZGJbC%2B6GmsL8s66AgIhAPD%2F3NAMkjnmDEqgd9HAxJIDgOgunql4FZ4M8gQrNMOlKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8ejzLpxvzgyN8x%2Fgq3AO0jYOvot6qbOSp6BrnEEvw0GYE42tiLbYhIKHn0GxZnNAdUfM%2F8tyB5OXfBrdzb13Sk2BQGiNqjA3Xc968T4xWuH12BKMylivqlx%2BK4lbI5OnkA69Jv3tW8PJQZwOwM0QjDHRqQKgOf94aTZaT%2FgU7kHCpmPyd4K8iufmTRbepu%2BhbuS%2BLjKjSypWXrD%2FYL2MwBISBoShUNptlb1uVwjNo6zQBoWFGG2I2lnDsoDUUEDyJysztw3PDWtCLKAjPUQdp9syFK9bk4yd9QhXlZ055oGZDVLp71LOOH94MC5JQLFejgeo23veCGNelqZvPFGK4OQGK9Bzgd%2BnNImaEXCQIpaUUplsFz9oe5NWWRgqiPlI588vtYvs9nYrqztWioXooFmye6t6U4OlRdUiq2SNyqDE%2F%2BFVdSOTVVi4I%2B1%2BojuTX3Oy1FutgBukzOM5mXz6zF62pzAO6Zy2ODfqYD0h67KDXCdj3a3PyYcat4NUItYQ2KvB6H9V%2BsElzRtLaOIbTO%2Fx%2B1ayyEMRI4A3IeAV96rXalaAFWLIQrmkNDARVkEN2COdmnjEMQXhrS5E4tLbZC9cMRLpddOkw1GoN53JWpn5eiP6Zm7RwU%2BviqpcWPiuLV5cVSJ2y0PcUXzCe8KfEBjqkAUBEWJjBlbPwrUHWeOtQiJxaa0erbziEawpXEtOpdkfaqvQpU6WwwGHgKnv9yJVHCrG1SFJatkwDSYq9%2F2EYKTuRL%2Fjltx9ek9x06uwzhhzZ0%2BmBCWZKSDG9wm7LTOfR6OAOpG%2FFXYfAOa06YTCu0czjH3aDWB%2BJ1iFHviyenOLGNO9p5b346uGGwthGJotjpKLgcymVai8pbivIcFgyWzVdzi4c&X-Amz-Signature=c3cd76b002ca115beb8779d0e90c2b5bbcf9b8664ae15d810061b1808ae9ce91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
