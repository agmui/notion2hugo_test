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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NOATEE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLa24LPZy2De%2BXu0G99hhjezCpt0oNEo9d%2FxYwcXQ8IAiEA0RDzpoOEdY2a5QxxwGfJYZ%2F7kwENqKBM0nvwKC%2BziF4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqn5oKvYqWvfx2ZrCrcAwnnJIKBfRoqNiibA4YOAhMZji8n7uMPG%2B9wB1Sw9H69qJN6NK2E7qwyzXZ%2FS2IGc0FsQxsQUM8uCPEZKB8MvfnbTQj6w%2BJYpCnWxeqIy6mbRGUmUuATYN2sdNcUCLQC0oPrd6CzqQoZqGpUF9dyddGWa9rR3ESoU9jRhqfKmOguPk290yKLeOkkunBWqDnH8zVd0k3k3NkdWZWDcPnvXzziLWeUtgRYHSDp9SAbZ3qs%2BNCEfX4a4ROC1yMBUznrgH%2FP%2BVUwX5Br2lKzAWvfuC%2B0B9APLkh6tbSKpYlBfissR2lmlqLSGK9ec2csFjSRZPxSezfRBJM4U4yDqporAccYCIjl5GCb9FqDNg10CeRjvLG%2BXJYytl8VaIQjSba%2BR0WPaR6jnX7VVGleQGelru2Fit2yl4LHdjIgwNA9pZ3a%2B6JPdyT3M6fQiMN%2FzXlWBxiq%2B5alSkPgzEFCHRaklrN829ZsrNufbwqfoZKaMFeZ9szjbf%2Fan4Z29l4P77UANg6WBoIbJABP0xyeUJIJ7yZEzgxVuUmL79e%2FQDQQI6I7WGrzRjo9lZ0kT5YHoRbapDazsaf7XvPr9HxeGeAkp1bXjECnPoFwlsvqX5BRZ9VneV6JSg3ZpVdjYi4rMJDZmL4GOqUB5b9bwtdTC0LOQit43sby%2FCsrVG2x0c14lY2Tzo2EXboI3hIYuHllWRFTcqodq9QmvgICEyxatY0xfHaeZbkLGzHMmuhLk11nWWqReK16y4SeM3VQAvJwlSEoYSnKp6XC0hB4QPXiafu54BQVqa3gyPv4A%2FnwgOvtNs4I%2FUbSK5UGFQFLZPxk5GZGDD5OHoIyCMkdjMaohry7YP9gd8nZJwtyZ71b&X-Amz-Signature=6aad6a11a7ade4054509203a5b047afb6b59e5df2e11cbd3a996217ed7435abc&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NOATEE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLa24LPZy2De%2BXu0G99hhjezCpt0oNEo9d%2FxYwcXQ8IAiEA0RDzpoOEdY2a5QxxwGfJYZ%2F7kwENqKBM0nvwKC%2BziF4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqn5oKvYqWvfx2ZrCrcAwnnJIKBfRoqNiibA4YOAhMZji8n7uMPG%2B9wB1Sw9H69qJN6NK2E7qwyzXZ%2FS2IGc0FsQxsQUM8uCPEZKB8MvfnbTQj6w%2BJYpCnWxeqIy6mbRGUmUuATYN2sdNcUCLQC0oPrd6CzqQoZqGpUF9dyddGWa9rR3ESoU9jRhqfKmOguPk290yKLeOkkunBWqDnH8zVd0k3k3NkdWZWDcPnvXzziLWeUtgRYHSDp9SAbZ3qs%2BNCEfX4a4ROC1yMBUznrgH%2FP%2BVUwX5Br2lKzAWvfuC%2B0B9APLkh6tbSKpYlBfissR2lmlqLSGK9ec2csFjSRZPxSezfRBJM4U4yDqporAccYCIjl5GCb9FqDNg10CeRjvLG%2BXJYytl8VaIQjSba%2BR0WPaR6jnX7VVGleQGelru2Fit2yl4LHdjIgwNA9pZ3a%2B6JPdyT3M6fQiMN%2FzXlWBxiq%2B5alSkPgzEFCHRaklrN829ZsrNufbwqfoZKaMFeZ9szjbf%2Fan4Z29l4P77UANg6WBoIbJABP0xyeUJIJ7yZEzgxVuUmL79e%2FQDQQI6I7WGrzRjo9lZ0kT5YHoRbapDazsaf7XvPr9HxeGeAkp1bXjECnPoFwlsvqX5BRZ9VneV6JSg3ZpVdjYi4rMJDZmL4GOqUB5b9bwtdTC0LOQit43sby%2FCsrVG2x0c14lY2Tzo2EXboI3hIYuHllWRFTcqodq9QmvgICEyxatY0xfHaeZbkLGzHMmuhLk11nWWqReK16y4SeM3VQAvJwlSEoYSnKp6XC0hB4QPXiafu54BQVqa3gyPv4A%2FnwgOvtNs4I%2FUbSK5UGFQFLZPxk5GZGDD5OHoIyCMkdjMaohry7YP9gd8nZJwtyZ71b&X-Amz-Signature=618ae7091f59325bd44eccac630f60b1c805e7fc073efc4145b01b814205bce6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTWLLPNS%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHQWoYaEyxAlKDNZt4esdpaPE%2F8hom3XLy7MQDodfT6AIgfSdNNKXVD7jCqB4DEGBXeiMsTsq5NlW4%2BHn0ht7dhjkqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5jOp7ZU8726HtTNCrcAwuA9nTXxofpJTIrGGZW%2FcZSaWmNBuLbjmzfNgRmrV%2BI5p02g%2BMvK6cxthLNi23GeksokdDxUumcPJTbhG7O8zM6ohLBpUS6HR%2Ff79m8YMMZ%2BLY8TrcdxlhFdswYX4VCmq0jmlAj3wDClq%2Bcy6C1rXyZrDJDbkTm8pIKjjDtFvMNbuHi%2Bp3SJKkEeg%2BeklWdD16lclrzewNRqnw85cjPsA9u3l5DCoUvwEjREEteNmx5j8TI5fH%2F0b2AnkVl5bi6RXgPmi1qehWwx57RC%2BRI0lMTUZfinPbLQmQMy%2FKQvQ9K0EDFwL3MNKurcrcqc%2BXTwVcQtZHD3Zd9Fz0RFvsD3iNQ3D5doKuPBCeGAhMN5X7BYC39SJxfAx%2BKF%2B8VsUODboY8AZ1j607B2Rnbz9nOPukdpz%2Bx0BmD7ozPnwE5MQ7Zv4LrJvnsbdr%2FtEn2L8vd2WlIsvEiuJ0UVld2SuMbodtSuXnwCUygFNDwswpWgtBcuF7YC5%2Fnm70csj5aAc19z7dlxD1nZE8NrL3MFnYRmD66fAgajEWDFrs6wzc4eKx0IidXLBoKUavRTd56OsnoK2DX%2BLWbujDqLYDiSWGdzviAy%2B%2BSnnj3r%2Fvjz72KzNglEqKhwlUcMliRRW1pMOzZmL4GOqUB5YKHOYzEgkQVmV110po817nPY9heuBov%2BI4IgC6btlskPtYfvQuG7dtrK0pJ3TkLHIBqYZgYGb5DVLy3fudERx7%2FRR5Fn1Lju5PXWSs6BlZxnFGsvhcdXVX%2F%2B9csjXOSPOZXRhdLUpCCEE9lg4LuxHeroAnDSvISUlwb%2FizaLrQJ9zPey7%2FNZRxZo0fNM3J%2BzOtxhNAHHK2Qfqp9MgfJdS8qPxYp&X-Amz-Signature=80e2099b13c41cdc66643a1244b7de5c04a33ad30893606e900e2d1a6fc98f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKOTMZU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDctR%2FiHUJX9r3xry1fIMlD00%2FuXmE65H2bb0J6IvAfSwIhAMP03dncCWyPKq1RXBQTgzb%2BPon7KgmlYC7RAxjS3AGvKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpiRe4%2BOA9E27Y8wq3AMNBhtRliGnq%2BWTe1Vko4tPUHI9hCq0pyrQdCKs7urngejWL%2FMPI7B1ze%2BFVRg3uf%2B4LTmVpyi3eePkDpYqXFzy%2BLgFHMgOkQjr%2Bc%2Fo%2Bhk2gE%2BTEPNJT55onQme%2Fr99Osrf5WFRjUAcMTcDCMztBRCEzGAwLimeE2XbG02JOewxGc5MUdGITLGvXD8DG5EgFwfTTAgy4suD%2FYf4cw4ZgAVXqvsTHpM7pbqp3Eb82G7rrjiXoHm946nyh80PrKmCff6yvlb%2Bfxz%2F6HK%2FuBQi1TRu%2F7OemNA7nMSnbDl6ktyIFAO6FqvFHcqdJRJMwNNaZzVOsgzVnh5QPq0FGdbk%2BuJdLdpb%2FRI%2B5tkh7BlV5UzzDrKDVuDj4FoN2EN%2BFDIr5ivMLdnW4do7qxckMkJW4HxR5jaWxHANUd7bMFyTK1PrIJM7P1EIXUmvQqtAdHh8ZkJco%2BePES6UjBGRuKhwbvSKuI6uwR92DcquIUN6UQVpVe62%2B4l47eqkyhO3Jri8mnCBxxFbVdPLqGdm8%2BfJAHUlN5WiJIAkDgtz6sborRAIMqOujVzxsDnwZSixVEBSa%2B11G6n7J%2FIU0NPbDcusIVXd%2FTrJDZ9A79cglS08dneOs3jZQ%2FGcOZO07ky8VDC92Zi%2BBjqkAdd%2BhEz88xjStZecBV5WIU%2BT6npk4dE%2BKXZEvk8jb4cYY6mtI4W%2FUZIZhOyr2%2FpaxJ0tVq6mKiQz8ljpJBaml8OZk6k0mrtPMBCINAZCo9QEFnj9HvWj5p0TMxBsDxYBXwyg2ApodRhY55pQfcFong%2FvWiqGt17U3B7vAZR3FDNI5lxOCuG%2FKBf%2BVqwFppxxn5DmvTyLSWQqd2UpxINWpR9R88rb&X-Amz-Signature=b9afeaf1d081c7f13bd627593ca7e16f80566bf3d1cffe8fd7a2e488f4c336fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NOATEE%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLa24LPZy2De%2BXu0G99hhjezCpt0oNEo9d%2FxYwcXQ8IAiEA0RDzpoOEdY2a5QxxwGfJYZ%2F7kwENqKBM0nvwKC%2BziF4qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqn5oKvYqWvfx2ZrCrcAwnnJIKBfRoqNiibA4YOAhMZji8n7uMPG%2B9wB1Sw9H69qJN6NK2E7qwyzXZ%2FS2IGc0FsQxsQUM8uCPEZKB8MvfnbTQj6w%2BJYpCnWxeqIy6mbRGUmUuATYN2sdNcUCLQC0oPrd6CzqQoZqGpUF9dyddGWa9rR3ESoU9jRhqfKmOguPk290yKLeOkkunBWqDnH8zVd0k3k3NkdWZWDcPnvXzziLWeUtgRYHSDp9SAbZ3qs%2BNCEfX4a4ROC1yMBUznrgH%2FP%2BVUwX5Br2lKzAWvfuC%2B0B9APLkh6tbSKpYlBfissR2lmlqLSGK9ec2csFjSRZPxSezfRBJM4U4yDqporAccYCIjl5GCb9FqDNg10CeRjvLG%2BXJYytl8VaIQjSba%2BR0WPaR6jnX7VVGleQGelru2Fit2yl4LHdjIgwNA9pZ3a%2B6JPdyT3M6fQiMN%2FzXlWBxiq%2B5alSkPgzEFCHRaklrN829ZsrNufbwqfoZKaMFeZ9szjbf%2Fan4Z29l4P77UANg6WBoIbJABP0xyeUJIJ7yZEzgxVuUmL79e%2FQDQQI6I7WGrzRjo9lZ0kT5YHoRbapDazsaf7XvPr9HxeGeAkp1bXjECnPoFwlsvqX5BRZ9VneV6JSg3ZpVdjYi4rMJDZmL4GOqUB5b9bwtdTC0LOQit43sby%2FCsrVG2x0c14lY2Tzo2EXboI3hIYuHllWRFTcqodq9QmvgICEyxatY0xfHaeZbkLGzHMmuhLk11nWWqReK16y4SeM3VQAvJwlSEoYSnKp6XC0hB4QPXiafu54BQVqa3gyPv4A%2FnwgOvtNs4I%2FUbSK5UGFQFLZPxk5GZGDD5OHoIyCMkdjMaohry7YP9gd8nZJwtyZ71b&X-Amz-Signature=ff62544ada0ed1ebdd82684b83ecf9d9e3c14b90115f09b9229fb63df50604ad&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
