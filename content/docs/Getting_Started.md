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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3B6IQHJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB0qKFVJz%2FPcwDNdFOaRMLi55N9Gt5%2BLh9oMMAsNurqxAiEAlUUyy7vdcebbyGjLLh4uNk8z3%2FdI3GRvfou3L9XAGYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6Y9j0lDduzMPqshSrcA%2FVYRQndEQqC1bS7YA91aFuGYLC4Icp6pXyAR0zA1cjsRBzhwQSn5k2dVdtlvd0KPmD%2BLZ0edQybQCgYPAT%2FPo6%2FEDQJrF0GXtt3VFv5lOM8Qx1i6OxD61bzjTNFKAAxjUrcpK7MQLqA1z%2F%2F%2Brlvc52DoCnR7N%2BRAqWE74YGoiFS%2FyLWjYZZ0RkPlNwuRvBvEcrRtnrNztvOkP1bO7Xmr%2Fjrro1SnWuC3GjXftF3x9SezFYGLoGhY1uE5jUYOrCHpxoP5XP4OQ%2BWANm2TQnjV1a7JQ%2FfXZQMQdiRoWopS0S%2BCTQ5IWCxKyT4hfh6NiZn7ELRd%2FAuyJHwPeqtLPe7t%2BGcHzWpQEniJSSCS%2FxTI4KeEXskI1omNk5FeFSkLbQguEy37pr9QjW4V0icgco4F1kA8HZXIGFy6CmBopmM8R11RS%2BZDLwbCqcZcOh6%2FDd%2BLw6tlrN7o7RSf%2Be3m3MOGq1PzoPdhs0wQJmFtAKBn4n7Kre6nrXl%2Fxr2dwRfok0nbCo8hFRiVuU8Cp0TgQtP9fPYoCxpWQ0p6TklsALuZeu95SCvQNKR61SKIUW1uW6qEaJPDheOPn7LhZzzpGKKqjeZfKy8e8rrNLcjy9tnrv5Wbl8Pr7j7LkCs%2B9k6MOC078EGOqUBWe9QdEWQ1Lqr9rO8SFMQb0S4itlCQsiOwKNYl45LdaIQHRatv1%2FktjKX0xfNs70Rj2h6JjlYFa6wLspvBS8IvoDtOp8qSge%2B0tiFJ0SO8hHfvnn0hQXetQvttIm4%2FHpqwi4icZZ7crgbYq69IuF2KG1sd00Or3itnbjHw9qDJAB9i3PdJH4XN5MEqIlWS9z876njtizQnwUKJLXwMTfJ15M9dUxi&X-Amz-Signature=59418393921bd23f5a687739fde677e06f6defa7f77c1beb6b4c36a8af4c7198&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3B6IQHJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB0qKFVJz%2FPcwDNdFOaRMLi55N9Gt5%2BLh9oMMAsNurqxAiEAlUUyy7vdcebbyGjLLh4uNk8z3%2FdI3GRvfou3L9XAGYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6Y9j0lDduzMPqshSrcA%2FVYRQndEQqC1bS7YA91aFuGYLC4Icp6pXyAR0zA1cjsRBzhwQSn5k2dVdtlvd0KPmD%2BLZ0edQybQCgYPAT%2FPo6%2FEDQJrF0GXtt3VFv5lOM8Qx1i6OxD61bzjTNFKAAxjUrcpK7MQLqA1z%2F%2F%2Brlvc52DoCnR7N%2BRAqWE74YGoiFS%2FyLWjYZZ0RkPlNwuRvBvEcrRtnrNztvOkP1bO7Xmr%2Fjrro1SnWuC3GjXftF3x9SezFYGLoGhY1uE5jUYOrCHpxoP5XP4OQ%2BWANm2TQnjV1a7JQ%2FfXZQMQdiRoWopS0S%2BCTQ5IWCxKyT4hfh6NiZn7ELRd%2FAuyJHwPeqtLPe7t%2BGcHzWpQEniJSSCS%2FxTI4KeEXskI1omNk5FeFSkLbQguEy37pr9QjW4V0icgco4F1kA8HZXIGFy6CmBopmM8R11RS%2BZDLwbCqcZcOh6%2FDd%2BLw6tlrN7o7RSf%2Be3m3MOGq1PzoPdhs0wQJmFtAKBn4n7Kre6nrXl%2Fxr2dwRfok0nbCo8hFRiVuU8Cp0TgQtP9fPYoCxpWQ0p6TklsALuZeu95SCvQNKR61SKIUW1uW6qEaJPDheOPn7LhZzzpGKKqjeZfKy8e8rrNLcjy9tnrv5Wbl8Pr7j7LkCs%2B9k6MOC078EGOqUBWe9QdEWQ1Lqr9rO8SFMQb0S4itlCQsiOwKNYl45LdaIQHRatv1%2FktjKX0xfNs70Rj2h6JjlYFa6wLspvBS8IvoDtOp8qSge%2B0tiFJ0SO8hHfvnn0hQXetQvttIm4%2FHpqwi4icZZ7crgbYq69IuF2KG1sd00Or3itnbjHw9qDJAB9i3PdJH4XN5MEqIlWS9z876njtizQnwUKJLXwMTfJ15M9dUxi&X-Amz-Signature=184029a0613ac965a2e9fab8c57eecf785b088a51ca439766469e19539988ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3B6IQHJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB0qKFVJz%2FPcwDNdFOaRMLi55N9Gt5%2BLh9oMMAsNurqxAiEAlUUyy7vdcebbyGjLLh4uNk8z3%2FdI3GRvfou3L9XAGYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6Y9j0lDduzMPqshSrcA%2FVYRQndEQqC1bS7YA91aFuGYLC4Icp6pXyAR0zA1cjsRBzhwQSn5k2dVdtlvd0KPmD%2BLZ0edQybQCgYPAT%2FPo6%2FEDQJrF0GXtt3VFv5lOM8Qx1i6OxD61bzjTNFKAAxjUrcpK7MQLqA1z%2F%2F%2Brlvc52DoCnR7N%2BRAqWE74YGoiFS%2FyLWjYZZ0RkPlNwuRvBvEcrRtnrNztvOkP1bO7Xmr%2Fjrro1SnWuC3GjXftF3x9SezFYGLoGhY1uE5jUYOrCHpxoP5XP4OQ%2BWANm2TQnjV1a7JQ%2FfXZQMQdiRoWopS0S%2BCTQ5IWCxKyT4hfh6NiZn7ELRd%2FAuyJHwPeqtLPe7t%2BGcHzWpQEniJSSCS%2FxTI4KeEXskI1omNk5FeFSkLbQguEy37pr9QjW4V0icgco4F1kA8HZXIGFy6CmBopmM8R11RS%2BZDLwbCqcZcOh6%2FDd%2BLw6tlrN7o7RSf%2Be3m3MOGq1PzoPdhs0wQJmFtAKBn4n7Kre6nrXl%2Fxr2dwRfok0nbCo8hFRiVuU8Cp0TgQtP9fPYoCxpWQ0p6TklsALuZeu95SCvQNKR61SKIUW1uW6qEaJPDheOPn7LhZzzpGKKqjeZfKy8e8rrNLcjy9tnrv5Wbl8Pr7j7LkCs%2B9k6MOC078EGOqUBWe9QdEWQ1Lqr9rO8SFMQb0S4itlCQsiOwKNYl45LdaIQHRatv1%2FktjKX0xfNs70Rj2h6JjlYFa6wLspvBS8IvoDtOp8qSge%2B0tiFJ0SO8hHfvnn0hQXetQvttIm4%2FHpqwi4icZZ7crgbYq69IuF2KG1sd00Or3itnbjHw9qDJAB9i3PdJH4XN5MEqIlWS9z876njtizQnwUKJLXwMTfJ15M9dUxi&X-Amz-Signature=44dc84cd97a54df77a2b86db51d3c67cf9e23796fa93e95ddbf932e6f97afbb9&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFA46KU%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIF0E3fpp25q3OMbWD%2Bd%2Fjbep8ehlkYHnTLYoSAc8xQBWAiEA40Is0HsFyaN6i86irmAiI6Es3UhKR%2FyGk5O5lnHCu3UqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDVx51b8IPj6GvgRCrcAzzo%2BdOIJGcx60nMo5hW8%2FIgK%2BfNy4YYUe9JNCyeGqC%2FgjSt40qHVYHZ0s5vGCLm9Cz%2B8CPiKXEo6ZTSdzqI7vCu2wKjEwNEMe34TZxLKBE4T6ZC3Cr5FNnEM5FEFDbSJM1FRL4GT47gx5j65ruT8GcBFpPz01wWifuARxI8l3dW8st07ClcxO6GqVEh%2FWOwL9rsH7%2BUcIWt3wSBn%2FMFlOj9AoEH3eVnIEVasaHrp1%2BQMPa2RZ1l8CDHgMa2Bx2r3dA8W4rWw5po1ovLBDoZNjxUz93mcbMMgfPxrA8dd6CKwwCyPxdAHjw%2BPm3AkDaeeqPmOaaVeDb291DMGMBeRyym8VqEOsj4tMqq9oAH6M751Wp9IIXbPAc5hj9zEl8TbuEbjdRlL1ri7DvdG5dNlAR%2BDQm%2BiJ14P%2Fuot%2BF25PdCdtTuZLrQ%2FDJzbUSrPE%2FcXRVzs4j5CQ3kEYYXj6jYNxHpF4rELH9yhBn%2FdUGOvnCyQtyvvu7F8KCqGkbdHa0ml3P%2Fg8Ih0DyL2xiYalzRpSNovZQCwI7u3y8jQe69EaGraPRkZmsQ1KHNpAIAhe%2B6QTvXSgK%2BoqMLV7PbfPsfgROMMaO1WNeiRAi3qRTKh6Cx49nn5anU7M7IapXbMIDT78EGOqUBtAsfHZcGRCZGHfxv3JOdW%2BsZwSja4cHW9L7%2F1eaJisFSSMw5OvhmOwiQnGXG4Bo7vt6gImqj6uWVNSwO0%2BpOultHLmRNexfT8eRO0mejtc0ZYiTxsZ2LW9fMbLq%2FQ9LPn9oomswhKAbNEViEwBIO4jnHaAWllL%2FyNyD9kogBNreS%2B%2FuZMH7kSjyhcsXSESYGiZ6v9Lckj0PYr0sRrbJq4XplrKCP&X-Amz-Signature=3cb64c5fc9f68e0d4c1c9c75e68050243e2c578adbb7dad2a20ea3c686f7d210&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XILDSODB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFO%2FBwfFX7QP%2BZWFbTZZBJul0KLGyPp4c3ZFeKbCz3kIAiA9Pao3%2By92N1E%2Fi0vcdL5rWX2boeQBgRGvhHh6xvxiUSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpS8TuMQRQAsz8z26KtwDF0MACzuqzyW2e7FcAw0MwRZP7UmhMiW15YypH8NtXfngEgGOKeFPjAxSVUPTYsRhNAdg2IxhQhsu1%2FNjslwaVq%2FuwodREu7pwtCnL33xGc42k5Uu1OtuW%2FBpken5ZNTwcSThNwQ20xJaCxur8GnNx6POxKbYEESGcBr5AqfRz0z0Vg%2Bo1ABiQ5z%2F0kz82NSY4M9tvv5cVxqgtjusKYRLNvDFYmp3EoU5lIKpfpIChH7wAA6zbyI8ZTre5v4lOBXETycjsgNThIgTKjTSavFva9PJcYOsynMgNjhdyorjHgpJi3TNfhyb6HgzkwmiEdaeYvDVwNBKlt0%2BSv4Yxn6XLuzRDhml5YnzNG3bLTanmn8JH4IvuQoNOlctfmnsRX%2FeUeVWO5OGr0xKLc%2Bz7iO1dn%2F0gEtoTa%2F97QU1LqT%2FVnAeLczAWS2WAlZfG7DYLBbdhEW2C4qBo8hNVtEdrcJocAxKWQLRuJ4%2FdeWWj2ddPaAKudPI5zV602PcO7y%2BUg1Sy5FnjD35oI3Y%2FBXOhF6LafXjqff2I74zxYhtqiHMvXgv4hAw2jqeClQgeJhsu0i5fKvk3kXoUFnuV1q3K9vYgST4sicxirMw6DJa%2BqZYP49FqP9UWtmloTVnCp0wyI3wwQY6pgF62%2BhFHJNhre9dJiogryJhbzMJUGjPqoEf0etu9%2FMzFiCnHQV1yIm8NH%2FZ5i8hoUiHrfFyr6Jfo7MfaNxgBkjic%2FDyfaH0p3DxZPgJy%2BfhAialRLHsTOmis9tTPXb9ezog01OTDOgIvXwP%2BkLVIwn7TmWiqLxiVmKTcBft%2FIE8NsXQCi2oryr5akBErhCeydt%2ByWCZmCkbexIj%2FszzDX7F3kGUKINg&X-Amz-Signature=ff75579b4ed18ed5f0e8851ba1462a75a2439a7ecd1bfeeb43f4c5ec25a31866&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3B6IQHJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB0qKFVJz%2FPcwDNdFOaRMLi55N9Gt5%2BLh9oMMAsNurqxAiEAlUUyy7vdcebbyGjLLh4uNk8z3%2FdI3GRvfou3L9XAGYEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6Y9j0lDduzMPqshSrcA%2FVYRQndEQqC1bS7YA91aFuGYLC4Icp6pXyAR0zA1cjsRBzhwQSn5k2dVdtlvd0KPmD%2BLZ0edQybQCgYPAT%2FPo6%2FEDQJrF0GXtt3VFv5lOM8Qx1i6OxD61bzjTNFKAAxjUrcpK7MQLqA1z%2F%2F%2Brlvc52DoCnR7N%2BRAqWE74YGoiFS%2FyLWjYZZ0RkPlNwuRvBvEcrRtnrNztvOkP1bO7Xmr%2Fjrro1SnWuC3GjXftF3x9SezFYGLoGhY1uE5jUYOrCHpxoP5XP4OQ%2BWANm2TQnjV1a7JQ%2FfXZQMQdiRoWopS0S%2BCTQ5IWCxKyT4hfh6NiZn7ELRd%2FAuyJHwPeqtLPe7t%2BGcHzWpQEniJSSCS%2FxTI4KeEXskI1omNk5FeFSkLbQguEy37pr9QjW4V0icgco4F1kA8HZXIGFy6CmBopmM8R11RS%2BZDLwbCqcZcOh6%2FDd%2BLw6tlrN7o7RSf%2Be3m3MOGq1PzoPdhs0wQJmFtAKBn4n7Kre6nrXl%2Fxr2dwRfok0nbCo8hFRiVuU8Cp0TgQtP9fPYoCxpWQ0p6TklsALuZeu95SCvQNKR61SKIUW1uW6qEaJPDheOPn7LhZzzpGKKqjeZfKy8e8rrNLcjy9tnrv5Wbl8Pr7j7LkCs%2B9k6MOC078EGOqUBWe9QdEWQ1Lqr9rO8SFMQb0S4itlCQsiOwKNYl45LdaIQHRatv1%2FktjKX0xfNs70Rj2h6JjlYFa6wLspvBS8IvoDtOp8qSge%2B0tiFJ0SO8hHfvnn0hQXetQvttIm4%2FHpqwi4icZZ7crgbYq69IuF2KG1sd00Or3itnbjHw9qDJAB9i3PdJH4XN5MEqIlWS9z876njtizQnwUKJLXwMTfJ15M9dUxi&X-Amz-Signature=64b1970864c2769a94d07505efcc98c62d142ef0807888956b16c1992067391e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
