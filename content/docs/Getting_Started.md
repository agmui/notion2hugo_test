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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OSB64B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDQaRbSnZsDmqvoRo%2BgxHxVrAQBi4q9L9PyHPN6ujH%2FDgIgSRVmocn9cFKOMTJRyoP74cZLb5OWYjT49e7q2S888vEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDG7ZmbBwHj1ikl7VPircA3hitU%2BslNiiu3GYI6k5c69plc1HQkHE0kguQ3lZxW%2Fava0cFfuRZwIVi9VCMyfDjMNLNnX5CHJCMUGIkQkF2UTk3uoO5o%2FWtk%2Bc6RYTZ2vdwhyukZzGW1eZY%2Fu%2F%2BocWaWaYX%2Fgg9J2Z79gjRz31uc1Qv8YP5aYJcrm3BPIiOmQVwpP2aRrMQ4qycBKju7616uBer4nFqh7sy4KpJB5EzqN4Mlg%2FXE5zRNvpbTBjaC7FD8%2FKgHB%2B6f6FVhzOlzHT2EY5HrSFZrJo%2Fqd3qVBj1XRzIeKgocZP73RV4WwB80QGUea3b93%2FbbR8CMIFrnqxWYrBfijgnAvICkAgdYdSRy0lRrG1GhzQpzuiMuxp1a89GyYlypNbasznZWj%2BmfRmILumOy8%2BF1CqOLi0uXsGcRqLOxaho%2BzT1z5eOEJnXtxknL6NeD64dHGVXyO2kjC4QWddfy1TJuaL1CqozIupNw15jmRfaemqBaLzUMPK8%2F3HYT%2Fr4vmsSY9i%2F%2B0ZOdl9tZz5GjvPE%2B0aI0oa5ADBuj2DHuN8M%2F0BR1VcSVQTzBztF9K8mVTlfBOuZi60VBD%2BTeyzQUcgzNlJ9YRNLhYHwNmBxsJ1v9s9vc65Y35v4E%2BrG2vSEA4RQ80M94qqMP%2BS3sMGOqUBobpdd6vdNIsHyeq6ChqAZeiwwa%2FVanJPgrE7%2BnZS0MUeOfP8B1KuepZ5ZbF9xX22f2m8h6EhR2%2F6VXMdYLKWD%2BDhm4otNohhrHrvBDXqqiynwFOnMyL7lkZj6MOJIvMbQyCmVvC1c%2FeJWNJPDVbyCEUJxzZI1fqflLa88mlrhPs0ApL8typyyYQJr9RRltYj1VGw9BULtONi9EboFIx7oOAB5cLI&X-Amz-Signature=9bd475f04c89fadacb2581e1bea77c709e6fa8a1910d9fc0370dbee4e6005f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OSB64B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDQaRbSnZsDmqvoRo%2BgxHxVrAQBi4q9L9PyHPN6ujH%2FDgIgSRVmocn9cFKOMTJRyoP74cZLb5OWYjT49e7q2S888vEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDG7ZmbBwHj1ikl7VPircA3hitU%2BslNiiu3GYI6k5c69plc1HQkHE0kguQ3lZxW%2Fava0cFfuRZwIVi9VCMyfDjMNLNnX5CHJCMUGIkQkF2UTk3uoO5o%2FWtk%2Bc6RYTZ2vdwhyukZzGW1eZY%2Fu%2F%2BocWaWaYX%2Fgg9J2Z79gjRz31uc1Qv8YP5aYJcrm3BPIiOmQVwpP2aRrMQ4qycBKju7616uBer4nFqh7sy4KpJB5EzqN4Mlg%2FXE5zRNvpbTBjaC7FD8%2FKgHB%2B6f6FVhzOlzHT2EY5HrSFZrJo%2Fqd3qVBj1XRzIeKgocZP73RV4WwB80QGUea3b93%2FbbR8CMIFrnqxWYrBfijgnAvICkAgdYdSRy0lRrG1GhzQpzuiMuxp1a89GyYlypNbasznZWj%2BmfRmILumOy8%2BF1CqOLi0uXsGcRqLOxaho%2BzT1z5eOEJnXtxknL6NeD64dHGVXyO2kjC4QWddfy1TJuaL1CqozIupNw15jmRfaemqBaLzUMPK8%2F3HYT%2Fr4vmsSY9i%2F%2B0ZOdl9tZz5GjvPE%2B0aI0oa5ADBuj2DHuN8M%2F0BR1VcSVQTzBztF9K8mVTlfBOuZi60VBD%2BTeyzQUcgzNlJ9YRNLhYHwNmBxsJ1v9s9vc65Y35v4E%2BrG2vSEA4RQ80M94qqMP%2BS3sMGOqUBobpdd6vdNIsHyeq6ChqAZeiwwa%2FVanJPgrE7%2BnZS0MUeOfP8B1KuepZ5ZbF9xX22f2m8h6EhR2%2F6VXMdYLKWD%2BDhm4otNohhrHrvBDXqqiynwFOnMyL7lkZj6MOJIvMbQyCmVvC1c%2FeJWNJPDVbyCEUJxzZI1fqflLa88mlrhPs0ApL8typyyYQJr9RRltYj1VGw9BULtONi9EboFIx7oOAB5cLI&X-Amz-Signature=ab96618bceb0194f4120c5f622232cb642a641302add5acd5b3ddb046e40105c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OSB64B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDQaRbSnZsDmqvoRo%2BgxHxVrAQBi4q9L9PyHPN6ujH%2FDgIgSRVmocn9cFKOMTJRyoP74cZLb5OWYjT49e7q2S888vEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDG7ZmbBwHj1ikl7VPircA3hitU%2BslNiiu3GYI6k5c69plc1HQkHE0kguQ3lZxW%2Fava0cFfuRZwIVi9VCMyfDjMNLNnX5CHJCMUGIkQkF2UTk3uoO5o%2FWtk%2Bc6RYTZ2vdwhyukZzGW1eZY%2Fu%2F%2BocWaWaYX%2Fgg9J2Z79gjRz31uc1Qv8YP5aYJcrm3BPIiOmQVwpP2aRrMQ4qycBKju7616uBer4nFqh7sy4KpJB5EzqN4Mlg%2FXE5zRNvpbTBjaC7FD8%2FKgHB%2B6f6FVhzOlzHT2EY5HrSFZrJo%2Fqd3qVBj1XRzIeKgocZP73RV4WwB80QGUea3b93%2FbbR8CMIFrnqxWYrBfijgnAvICkAgdYdSRy0lRrG1GhzQpzuiMuxp1a89GyYlypNbasznZWj%2BmfRmILumOy8%2BF1CqOLi0uXsGcRqLOxaho%2BzT1z5eOEJnXtxknL6NeD64dHGVXyO2kjC4QWddfy1TJuaL1CqozIupNw15jmRfaemqBaLzUMPK8%2F3HYT%2Fr4vmsSY9i%2F%2B0ZOdl9tZz5GjvPE%2B0aI0oa5ADBuj2DHuN8M%2F0BR1VcSVQTzBztF9K8mVTlfBOuZi60VBD%2BTeyzQUcgzNlJ9YRNLhYHwNmBxsJ1v9s9vc65Y35v4E%2BrG2vSEA4RQ80M94qqMP%2BS3sMGOqUBobpdd6vdNIsHyeq6ChqAZeiwwa%2FVanJPgrE7%2BnZS0MUeOfP8B1KuepZ5ZbF9xX22f2m8h6EhR2%2F6VXMdYLKWD%2BDhm4otNohhrHrvBDXqqiynwFOnMyL7lkZj6MOJIvMbQyCmVvC1c%2FeJWNJPDVbyCEUJxzZI1fqflLa88mlrhPs0ApL8typyyYQJr9RRltYj1VGw9BULtONi9EboFIx7oOAB5cLI&X-Amz-Signature=1299da335b711dca43d02ba91a9eb455234f244a5deb7b3473c5e34b3aef1ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P6WZWLZ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBNO7WEO121%2BjYEaK009BAWNHmFYMkRcEyf%2Fk77MlqVcAiEA3Da1Mom%2F7NA%2F0FLEkib%2BbDw4rVZKW3bu2Gnb8fa8S4sq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDk9TNBFMS%2FDrS%2BILCrcA1bIF0f8aMFWU%2FROXcEap%2Bq7ZLHAPtyVzUZT0tHAur%2FlGH7gJSeXbtn3UHthCCRWp760tD1rWtkM0%2BBnVvMbSSELxXVwtS0%2BMfkLBzMGbG6FFFWqo%2FHslXttGjMwALiV3A9U6tf8Dwyq2Gybuqy69xpS%2Fuv3hOcbZsfUTpZmnxjzP19m1halrRvyeaE3P0oWyIR56MYx5T7GF%2FN%2FO4INYcLJA6XC40h5sjsJK%2BvtYMljqkBYjK8OorT8xLPKlW03xrW5uZQ80otdBkEH%2FIKJja3%2BOHlxOKDPQ%2Fvpm7%2F7Wp1dAZ4D9ZoQMHVrPC31UmOSy6xXmtHL%2FHmsksFcgbwjIg24WXA9maZTOHTmyLRqEjlBp52s85NyJ4dChOJEef7w94Eme6loHnUblPJYlPEzsR6FkCC%2FN79DoDcN%2Ftp%2Bz83u6%2BsEDrGD5q1oRhRXjqoFStUKOb%2F1VSVevwIi0baLAJJqG8qhAgCldp3xrK28BgCF0OQ8w5BjDeXfR0J3P9RNlkd4XClHH%2FCYekRquJczinmNA%2F8NvVe8kj3PQzHJHDMrJIYhX3426uAZJONG6FhRAhg%2BSzEsMt7aNFyoAMr19E9FDnleuXU2KByjb29zNpCatvoOs5bc1gok%2B44mMNeT3sMGOqUBjJyzuBhDZTOG5tvw48rM7Qw4PM59cWUaFChwG05nVgBQ9zCTyqNLVFSwXFbtCkNuUnKuRjBVmz6ex55m%2B8lqyxeT4MP5r8u4CK4I4sWiaFQMg0R%2BFmZZkoY48q1Nl8mVAgxJMlbViUxqzkVE4qFWooCT3TgGdWSmdwqMgCkssZie2W%2FnNjWCbpDOX6EbOQz4ZA5TpvidCOb%2Buw08wdlKIxrVcWLE&X-Amz-Signature=8691846a347b5a07a080f1a2892115739265ab14ec6ac30709baceddadaad29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RDEF7RI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBRCz7GoSAQgKKLqNJJpvl%2Bj0t68gH0OKMCazWcGQbg%2BAiBZe9g1qs7am0f9uiPcz9FjHALoZl2lr%2B%2FCf292JLtGiir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMPtTUoFZCqBPsRcECKtwD3eHGMawtaLMaFKVZ6gL1qzrV7TwQ9ZvQMPYXjTlVEu9yqIPD4TmMRu9EKQLAOWQDviMyywXuDekXv1MdeJDf8ocZZpEkdFoY8wZCQ122IFn3%2FRp1Wxv6N7Wm5H3G%2B6P2Lo6Hp8lDOvmydTtEpjM3HcKB4auG9zJCQ%2Bcm7cOrikHunEonCOLPxkHDSw7ZZw5mwyOg4AIJ1xxz6MEdNUAt4eDG9BawjHX%2F1MXV%2FnfBMfgUyBMBx04XaRVJ6S17LiD1OhVP3o0%2Fs0Fc1BPYDzhMM%2F6Iqzsc3ZgsvBkFHkF1UNY3Rur8IQZTeusbJ0V7M9HhtpL19rTNIQUeQxJ9%2FCn8uPpTuUEzKg0PPw7n6H9VO8bLCPfytbG3%2F9NE1%2B0Rp5zm50r9DGjNh9s5terg%2BQfDLQlT79jE%2BDW6kw5Gm8ZULMonHrycPRwV4%2BVCFRuQcNy8jb1x16xegkR7ceIUCpMoClkSvkCaJ%2FtPdGeHj0acAUF3RVt2dNdmtpt6ZsgIB9tO9Zc55fnfvGXk4dC650mnAkaAYFcDuuyJEtwI1dLfG8%2FncdhyAxDUozRLLu9e0AxWkrZ3luAVcWpQ0%2FYpOCB91Ymcm%2BQiChGF3DqAJN78BmCgI6UNWewCXJ4CynEwvpPewwY6pgGFevD40h0Btf7L8KvNlZc6Y%2BJTIMEA%2Fbnjg1muJP7x5Z3Hzk5KL9hko%2ByX8uAdfrlbmeTs4wdTlopQ13FZdxJ8SzO5twSnep3rjrBmbRLEVnUsb4E4PE%2FvitI0Op7iks1J64UfdEhpNwKsRrr2vu9JzaCsX6cTHib9xDm5%2BCeuAQzYialmZaHFS8xuEs%2BwZD%2BlUsJTgHtPh%2BxhkSWYh3QiXlejQLM1&X-Amz-Signature=2995d7eb7ca0cd9e2f73b6df22acaa447fac579f3b15e75cf6f63ea1a8eb2497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OSB64B%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDQaRbSnZsDmqvoRo%2BgxHxVrAQBi4q9L9PyHPN6ujH%2FDgIgSRVmocn9cFKOMTJRyoP74cZLb5OWYjT49e7q2S888vEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDG7ZmbBwHj1ikl7VPircA3hitU%2BslNiiu3GYI6k5c69plc1HQkHE0kguQ3lZxW%2Fava0cFfuRZwIVi9VCMyfDjMNLNnX5CHJCMUGIkQkF2UTk3uoO5o%2FWtk%2Bc6RYTZ2vdwhyukZzGW1eZY%2Fu%2F%2BocWaWaYX%2Fgg9J2Z79gjRz31uc1Qv8YP5aYJcrm3BPIiOmQVwpP2aRrMQ4qycBKju7616uBer4nFqh7sy4KpJB5EzqN4Mlg%2FXE5zRNvpbTBjaC7FD8%2FKgHB%2B6f6FVhzOlzHT2EY5HrSFZrJo%2Fqd3qVBj1XRzIeKgocZP73RV4WwB80QGUea3b93%2FbbR8CMIFrnqxWYrBfijgnAvICkAgdYdSRy0lRrG1GhzQpzuiMuxp1a89GyYlypNbasznZWj%2BmfRmILumOy8%2BF1CqOLi0uXsGcRqLOxaho%2BzT1z5eOEJnXtxknL6NeD64dHGVXyO2kjC4QWddfy1TJuaL1CqozIupNw15jmRfaemqBaLzUMPK8%2F3HYT%2Fr4vmsSY9i%2F%2B0ZOdl9tZz5GjvPE%2B0aI0oa5ADBuj2DHuN8M%2F0BR1VcSVQTzBztF9K8mVTlfBOuZi60VBD%2BTeyzQUcgzNlJ9YRNLhYHwNmBxsJ1v9s9vc65Y35v4E%2BrG2vSEA4RQ80M94qqMP%2BS3sMGOqUBobpdd6vdNIsHyeq6ChqAZeiwwa%2FVanJPgrE7%2BnZS0MUeOfP8B1KuepZ5ZbF9xX22f2m8h6EhR2%2F6VXMdYLKWD%2BDhm4otNohhrHrvBDXqqiynwFOnMyL7lkZj6MOJIvMbQyCmVvC1c%2FeJWNJPDVbyCEUJxzZI1fqflLa88mlrhPs0ApL8typyyYQJr9RRltYj1VGw9BULtONi9EboFIx7oOAB5cLI&X-Amz-Signature=e23d10e4fab80a1b497d368e2ce93487cd3c0cfca539d41cfc16e706eb2f01be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
