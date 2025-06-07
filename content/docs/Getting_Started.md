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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDWVKTK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn6j9IJdUlaI7exlEAnEJwKQCfDk7W%2BQb3Mr3H7g1j%2FAiEA7jI%2BWbMHgfrFvk8B4ozAbGwZqj5lR6TD21SJTLNGUgsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIS1IqfzdD1vkEqVayrcA47KTe9Q1Xq74IcrByaU02%2BicpoZqY0faFor7AX4pPohSbpKRUmaHAl5nhxPZ9FZl4uuj%2BtwvRduJbhT8GtlhuWkpyTW8KxdE2F0yQQmwijufyXDu6qme3m7awf1aln6KSGsckW%2FN45FxBv%2Fc8DcC5HS6Lm7zORt2SuQhQWhSUI2xG9PdACr0Lp1CxX1LkdEN7N7dDxlDukCtmdNRRFxcLWgzrFk07cwc%2BiA1taJAzB88JN%2F0n16jaDd2NkBfRdjzjSvJnQ5MDbhVw9%2FYCM6i581w%2FVSByqUTDSkgKiPc2qW7j5tPoOtlxnBIbfjjXB2E30FgaqRw7jIvdZyB9lGV55Vf%2FbxjkxyQlsz5EgDVxHvyq3%2B4jtZsdFA0h1o0d4ti4EX1PefLmn4jacytgYm59nMSIKzfovp4JppXhs5xuGZEte%2F5uICYwZ5w1SSWTRTwJUJzkv%2FBdQDGi%2Fp2jKKtzCijcepqvlX4jbn9VNNSheT60uvGtBrzdEFNv3HcbqUg9H%2BC08p5I7VtYFuVzMllWBQf4%2BZT4uAut7%2Fvaw5SBZ181f2IoqTxZ4YOWmLk%2FvbVt4nc9ebY8CmpG4QN89laSq1yZMF2yyoud3nWAg4%2BLbgc0o1tQbQLCwjANbjMIK4j8IGOqUBKUpmEYNjmso6m7eE2tjXGTYaUvzf8q1CfsDMJd0axuj4hwpPybaCpG3X8Yu3CAfmm7633vspLsfYOV7XCj33tqkU0sGq6PnWX6d7KxiI8ACdTjLjBv%2Fn9TJmlHw%2FnOFXGiP8z5uVWTLxiztIwj%2BdQTBWOWbn75%2BxZKOggGxdTOJGSeGvV3Yubb2vy%2B51dz%2B0gsQGiNp0lNWXA9SrQlHG58IxBZxb&X-Amz-Signature=b07731c41d428321587679f450aaae7693a073c973887dbd5b0974e4a5c171ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDWVKTK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn6j9IJdUlaI7exlEAnEJwKQCfDk7W%2BQb3Mr3H7g1j%2FAiEA7jI%2BWbMHgfrFvk8B4ozAbGwZqj5lR6TD21SJTLNGUgsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIS1IqfzdD1vkEqVayrcA47KTe9Q1Xq74IcrByaU02%2BicpoZqY0faFor7AX4pPohSbpKRUmaHAl5nhxPZ9FZl4uuj%2BtwvRduJbhT8GtlhuWkpyTW8KxdE2F0yQQmwijufyXDu6qme3m7awf1aln6KSGsckW%2FN45FxBv%2Fc8DcC5HS6Lm7zORt2SuQhQWhSUI2xG9PdACr0Lp1CxX1LkdEN7N7dDxlDukCtmdNRRFxcLWgzrFk07cwc%2BiA1taJAzB88JN%2F0n16jaDd2NkBfRdjzjSvJnQ5MDbhVw9%2FYCM6i581w%2FVSByqUTDSkgKiPc2qW7j5tPoOtlxnBIbfjjXB2E30FgaqRw7jIvdZyB9lGV55Vf%2FbxjkxyQlsz5EgDVxHvyq3%2B4jtZsdFA0h1o0d4ti4EX1PefLmn4jacytgYm59nMSIKzfovp4JppXhs5xuGZEte%2F5uICYwZ5w1SSWTRTwJUJzkv%2FBdQDGi%2Fp2jKKtzCijcepqvlX4jbn9VNNSheT60uvGtBrzdEFNv3HcbqUg9H%2BC08p5I7VtYFuVzMllWBQf4%2BZT4uAut7%2Fvaw5SBZ181f2IoqTxZ4YOWmLk%2FvbVt4nc9ebY8CmpG4QN89laSq1yZMF2yyoud3nWAg4%2BLbgc0o1tQbQLCwjANbjMIK4j8IGOqUBKUpmEYNjmso6m7eE2tjXGTYaUvzf8q1CfsDMJd0axuj4hwpPybaCpG3X8Yu3CAfmm7633vspLsfYOV7XCj33tqkU0sGq6PnWX6d7KxiI8ACdTjLjBv%2Fn9TJmlHw%2FnOFXGiP8z5uVWTLxiztIwj%2BdQTBWOWbn75%2BxZKOggGxdTOJGSeGvV3Yubb2vy%2B51dz%2B0gsQGiNp0lNWXA9SrQlHG58IxBZxb&X-Amz-Signature=eea8a02e97680e264f3110b0a4e38308b80ad79bfa4d0b02d69bc14dd3dc83cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDWVKTK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn6j9IJdUlaI7exlEAnEJwKQCfDk7W%2BQb3Mr3H7g1j%2FAiEA7jI%2BWbMHgfrFvk8B4ozAbGwZqj5lR6TD21SJTLNGUgsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIS1IqfzdD1vkEqVayrcA47KTe9Q1Xq74IcrByaU02%2BicpoZqY0faFor7AX4pPohSbpKRUmaHAl5nhxPZ9FZl4uuj%2BtwvRduJbhT8GtlhuWkpyTW8KxdE2F0yQQmwijufyXDu6qme3m7awf1aln6KSGsckW%2FN45FxBv%2Fc8DcC5HS6Lm7zORt2SuQhQWhSUI2xG9PdACr0Lp1CxX1LkdEN7N7dDxlDukCtmdNRRFxcLWgzrFk07cwc%2BiA1taJAzB88JN%2F0n16jaDd2NkBfRdjzjSvJnQ5MDbhVw9%2FYCM6i581w%2FVSByqUTDSkgKiPc2qW7j5tPoOtlxnBIbfjjXB2E30FgaqRw7jIvdZyB9lGV55Vf%2FbxjkxyQlsz5EgDVxHvyq3%2B4jtZsdFA0h1o0d4ti4EX1PefLmn4jacytgYm59nMSIKzfovp4JppXhs5xuGZEte%2F5uICYwZ5w1SSWTRTwJUJzkv%2FBdQDGi%2Fp2jKKtzCijcepqvlX4jbn9VNNSheT60uvGtBrzdEFNv3HcbqUg9H%2BC08p5I7VtYFuVzMllWBQf4%2BZT4uAut7%2Fvaw5SBZ181f2IoqTxZ4YOWmLk%2FvbVt4nc9ebY8CmpG4QN89laSq1yZMF2yyoud3nWAg4%2BLbgc0o1tQbQLCwjANbjMIK4j8IGOqUBKUpmEYNjmso6m7eE2tjXGTYaUvzf8q1CfsDMJd0axuj4hwpPybaCpG3X8Yu3CAfmm7633vspLsfYOV7XCj33tqkU0sGq6PnWX6d7KxiI8ACdTjLjBv%2Fn9TJmlHw%2FnOFXGiP8z5uVWTLxiztIwj%2BdQTBWOWbn75%2BxZKOggGxdTOJGSeGvV3Yubb2vy%2B51dz%2B0gsQGiNp0lNWXA9SrQlHG58IxBZxb&X-Amz-Signature=fcda2b696c9f13939a8a6ddd3e1b33510f03ea4cb17399f808f2da4b973c2dad&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDWMXCTB%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAFNWV%2B4%2FnM%2Bi0Yv%2BXSfYsI4%2F6XLluoXpGEFr6fgTRQIgZsv9w6GruptUtOv3iL9u%2BzIXMKzEGVUyB5x1uLbKeIsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEJeh2LOK2kxwLbjWSrcAzA%2B6sQU4FXS0UKcND0DmEYKmGhNKXX%2BKj45xVi6fMYoioRYAP%2Fcs6XojGxjxebl4V2rTRncYLe3UymBgS6BQky0NYoMfVCig9Ibwcwfpfa%2BbGX%2BqzXUbZ4n0kzFZDOZZcYDmJWn9xXsK38mpZdm8i4mDpvWDaAexUJuqclB4quL6K%2FTTVynLsaugqhSTfC35w%2Bx6ZizE6QbfGYlumLrisDTsKqe2ihZliGN9%2F9ZxYidq1ZO%2FEqMOUvVeF5UVk%2BtHgxC7w1%2F06M%2BriU%2BsJwHT5MqhU0odqdh9Hv%2FA1pZrKpbnwTUgt90BP4NeTeUcB6dkmqwsvhUxKZyEaUel0XlvVzxjlSvd3%2FFeHPrlmvWdmy9ewaKBKB48uxOXHCuMIS%2FeEjYikTjpuYsxKyJH1OYOiirp6mkP2%2Fknrk1vSZ5tJp7cY6yH66BLCK0J3lRuJ1yZIcu5k%2Bp%2FmpTaNMZwRpUe700G9OrQDJKFXIq1TJJVFyOg8UcJezjExOCLQ7belQt8FUDqiQGBc0ttBWP34Q4P1FiYRJMzPWJofowBOfQAm98RMfCS3w7%2BNpy5shn8WY%2BhMsuUc5n3XpmyvoXiYzm7GNL8v8kLf3BlqJjFeWUxpL%2FJGFYMS86i%2FF59Ia0MJe4j8IGOqUBCXUCKVLVXWa%2FVG6SPrL6IZ1F3ZeREae1Fz0OCu1VEbyi%2FnQpCENMlfbdZtGQvWgXZMDLpEeLhRq%2FUcZQyJSUuPYadP%2FMDVJOAUpjtdndY0zHBBMQHmJn%2FRhPYxZwXfZgyvCrBd7P7%2BjNgRq5WBFjayW%2FN9GQy2A0VGhWEee%2B1dGPzA%2FW8OvctcpT0MOKLOMM6gk1mD9pHWp2f13nI2Ws5EAVsDhU&X-Amz-Signature=d2af969a8f8e58de05b5505386349c69ec36a85e4071e1cc7b69c25c7f9f1e87&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U75SI2GX%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd2oRv5sXPhxg4%2B%2FvZwgTLo7UPNoNEZgLmAf5R0iZUvwIhAKwpZFsv4TZ4jwLIpLpiYwPNT7ifHvPtpXVw0H%2BRoB2vKv8DCHAQABoMNjM3NDIzMTgzODA1Igw%2FEKvDcy%2FURfZAbBkq3AMP%2BQVZTPdxetLJJ40QuU8zrvB2sZp7AsGChO9eNkCu9WdzYqqQRIcbpMv80WZ6mN4Y90k4XHt33vw%2FeXM%2FdQ4F%2Fxq1KAsCbNYpuV%2B%2Bkye8EEA9FlaNApXoE7mB0lawAxzk2VnYtR%2FNdAXq1gs6dJUaP9Ewy3Y%2FwMUdfWKd3kq2umnf89lXLRo1J00FraWNEe05%2B4ibLBngHhOy5PJqZ13QpT4hli%2FzEXFa8LUAOgIElpHKpLcpZG0EJzePIHU4KIfVbfiBFm3RcTVlVoDaZonS2Nt59ARM2Yfp7jd5JIsC41zYjrFL89z0%2BLq76ReuteI8o9M%2BEynm%2B%2BbKlCpiYl%2BygU%2BptW6WOjWR%2F8iEyYDeFMyE6qE55DkFxNR%2BxYVOo1O9xuIvp5vXPOViVOF6vmkJTVe1KWAD2au9DupgpWYfVrY4Nv%2FlRgwQqtPt1TyBfbw6QxJrRoEfYsWrj%2B23jK9HtG8P%2Fufo24Ms9wOwkkOX7e0B%2FFr0L%2FxKWp6mGB0OPNqpXshu%2BpUBbRrJ4RgGWa9i5CR8YIwM6wV23N4v6cN80fm0qheKCZdgMNHgwnPeapwsR0iahdOFwjV1EkpkTq6HQH%2F1%2FtiXkRnmzzK2YaTTd%2BVMRMbin1G37OBN2TDRt4%2FCBjqkAfrPsvU5kYndIYUR7KaAdyz1NMcEcDageiyEFDgop7jPRlaLLeOYqQIKSL5DStnUXV2xN20j61nUOzc%2F2HlI%2FB0P9BrE4DPuU1B9hH2ssMPMjUNPHU8BRRU%2FCxnMDyOYWmuRuFLV5t6V0Mg1IZP4RQyLCeL39AW2O%2FJDlxSpHNh3KLOwUZYWSh7HXCoJD2c3TgpW3vD3%2BRrO4nJME1lH5BTa8Ati&X-Amz-Signature=6579789a195d3a3b7f9046db1b2cfc0ea71ad4391f3968278653852db6315428&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFDWVKTK%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGn6j9IJdUlaI7exlEAnEJwKQCfDk7W%2BQb3Mr3H7g1j%2FAiEA7jI%2BWbMHgfrFvk8B4ozAbGwZqj5lR6TD21SJTLNGUgsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIS1IqfzdD1vkEqVayrcA47KTe9Q1Xq74IcrByaU02%2BicpoZqY0faFor7AX4pPohSbpKRUmaHAl5nhxPZ9FZl4uuj%2BtwvRduJbhT8GtlhuWkpyTW8KxdE2F0yQQmwijufyXDu6qme3m7awf1aln6KSGsckW%2FN45FxBv%2Fc8DcC5HS6Lm7zORt2SuQhQWhSUI2xG9PdACr0Lp1CxX1LkdEN7N7dDxlDukCtmdNRRFxcLWgzrFk07cwc%2BiA1taJAzB88JN%2F0n16jaDd2NkBfRdjzjSvJnQ5MDbhVw9%2FYCM6i581w%2FVSByqUTDSkgKiPc2qW7j5tPoOtlxnBIbfjjXB2E30FgaqRw7jIvdZyB9lGV55Vf%2FbxjkxyQlsz5EgDVxHvyq3%2B4jtZsdFA0h1o0d4ti4EX1PefLmn4jacytgYm59nMSIKzfovp4JppXhs5xuGZEte%2F5uICYwZ5w1SSWTRTwJUJzkv%2FBdQDGi%2Fp2jKKtzCijcepqvlX4jbn9VNNSheT60uvGtBrzdEFNv3HcbqUg9H%2BC08p5I7VtYFuVzMllWBQf4%2BZT4uAut7%2Fvaw5SBZ181f2IoqTxZ4YOWmLk%2FvbVt4nc9ebY8CmpG4QN89laSq1yZMF2yyoud3nWAg4%2BLbgc0o1tQbQLCwjANbjMIK4j8IGOqUBKUpmEYNjmso6m7eE2tjXGTYaUvzf8q1CfsDMJd0axuj4hwpPybaCpG3X8Yu3CAfmm7633vspLsfYOV7XCj33tqkU0sGq6PnWX6d7KxiI8ACdTjLjBv%2Fn9TJmlHw%2FnOFXGiP8z5uVWTLxiztIwj%2BdQTBWOWbn75%2BxZKOggGxdTOJGSeGvV3Yubb2vy%2B51dz%2B0gsQGiNp0lNWXA9SrQlHG58IxBZxb&X-Amz-Signature=d314ca0d9b5f843d9ce72f232fd97dad168dce5e4d2c03f96cfe90b94f704b83&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
