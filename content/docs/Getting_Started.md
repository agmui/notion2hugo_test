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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JL7QIN%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCzEfreUzkoY02vW5D1%2FV534NYAb%2FS1BXHhfju4pTIKdwIgdGYZrK3PXhJmbeBOnp4VLiWppIWj%2BJNfhpqz%2BCMOgWIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGCp0hP31T3MEbRVwircA9CiZl44fJYs39BWiEv2yl11dGxSQ%2BFvkKOO9RIqjdDD6%2BAZe2YGt3OMwsDfQ7tHAbkDrEc3epg7QbUpmlFTOuxdWshEoi8xAt0pkjjhd2IeG1rjQiUe%2BEdmSfCe7LJMUOz%2BYjJppqPVZ9UsCw2juy9zXjYp50WDHGkZKPhKyJ8nnvgiVngMyjrkzub%2F%2F8adA%2BdcIusVXs%2FpIOgCc5H7eZC%2FruBlZvi3SpMu%2FVFbb%2FjT5A%2FwH6DF4i1vzqn2tjErZAhETh7Nh6gwRAayUGbEzdVwkCR5W8dxdfzL%2B8msKr0yKqwrpzI2GkJzFq5%2BBwai2uZaFHK44TKV2xJDsyqvuLFwKb5HMyaEDbNCgR8BuQuCFIe2Vv5J%2FFDieOd6DcKABJ85ZeynA%2Fh3LNB8AxRdRojX1ybtM0Zgs4ka%2BdnnBeLILuzC0az4ftlGaKYyvb8bXvG7pz0JiDo0G%2B8Q3q6nr%2BJPbb4HnVi20fnXP%2F0eAMTomu8ZLdj6e8VU6vMWyoGzC9HCUKbLvAAYNKRIHsdFbhPq6LRmaOLXdGJzJ3y0naAaQLuKwlKKnyuY5%2BYLHr%2FIeOlNkDXiiAeUPm6kIgoBh061X%2Fdh8HcNcvb19QkNRP4wMrzMkyAqQ%2BkBJilpMJnDysEGOqUBaVamZKXLdBLHm%2FWIAh3MnuZdXyEKh4PWsoQZw%2F3O%2FItQ7orLRqgXtlzGmuiGxticapn5EJ7p%2F1ll2wB5t8NqGwsVysCF%2BKMwTL5Ri8K%2BoepX45%2BSrByUWlDziXK885p7LbhXMERmD6LZoivF0TprIW9iM8APpkrN7vbD8dkmyzpuclashpmCqJbJrKPNW3p5h%2FGmbBBioHtQexfyFvc%2FM0%2BpwA2j&X-Amz-Signature=ae3cc53ca42816c1bd0695904a260e815d60d92446c4ac4f8ef88e561fea5a80&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JL7QIN%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCzEfreUzkoY02vW5D1%2FV534NYAb%2FS1BXHhfju4pTIKdwIgdGYZrK3PXhJmbeBOnp4VLiWppIWj%2BJNfhpqz%2BCMOgWIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGCp0hP31T3MEbRVwircA9CiZl44fJYs39BWiEv2yl11dGxSQ%2BFvkKOO9RIqjdDD6%2BAZe2YGt3OMwsDfQ7tHAbkDrEc3epg7QbUpmlFTOuxdWshEoi8xAt0pkjjhd2IeG1rjQiUe%2BEdmSfCe7LJMUOz%2BYjJppqPVZ9UsCw2juy9zXjYp50WDHGkZKPhKyJ8nnvgiVngMyjrkzub%2F%2F8adA%2BdcIusVXs%2FpIOgCc5H7eZC%2FruBlZvi3SpMu%2FVFbb%2FjT5A%2FwH6DF4i1vzqn2tjErZAhETh7Nh6gwRAayUGbEzdVwkCR5W8dxdfzL%2B8msKr0yKqwrpzI2GkJzFq5%2BBwai2uZaFHK44TKV2xJDsyqvuLFwKb5HMyaEDbNCgR8BuQuCFIe2Vv5J%2FFDieOd6DcKABJ85ZeynA%2Fh3LNB8AxRdRojX1ybtM0Zgs4ka%2BdnnBeLILuzC0az4ftlGaKYyvb8bXvG7pz0JiDo0G%2B8Q3q6nr%2BJPbb4HnVi20fnXP%2F0eAMTomu8ZLdj6e8VU6vMWyoGzC9HCUKbLvAAYNKRIHsdFbhPq6LRmaOLXdGJzJ3y0naAaQLuKwlKKnyuY5%2BYLHr%2FIeOlNkDXiiAeUPm6kIgoBh061X%2Fdh8HcNcvb19QkNRP4wMrzMkyAqQ%2BkBJilpMJnDysEGOqUBaVamZKXLdBLHm%2FWIAh3MnuZdXyEKh4PWsoQZw%2F3O%2FItQ7orLRqgXtlzGmuiGxticapn5EJ7p%2F1ll2wB5t8NqGwsVysCF%2BKMwTL5Ri8K%2BoepX45%2BSrByUWlDziXK885p7LbhXMERmD6LZoivF0TprIW9iM8APpkrN7vbD8dkmyzpuclashpmCqJbJrKPNW3p5h%2FGmbBBioHtQexfyFvc%2FM0%2BpwA2j&X-Amz-Signature=59ca6319056af4081cd382a1bdff540bb2a405e7284ad1a23c9c45159672c666&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JL7QIN%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCzEfreUzkoY02vW5D1%2FV534NYAb%2FS1BXHhfju4pTIKdwIgdGYZrK3PXhJmbeBOnp4VLiWppIWj%2BJNfhpqz%2BCMOgWIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGCp0hP31T3MEbRVwircA9CiZl44fJYs39BWiEv2yl11dGxSQ%2BFvkKOO9RIqjdDD6%2BAZe2YGt3OMwsDfQ7tHAbkDrEc3epg7QbUpmlFTOuxdWshEoi8xAt0pkjjhd2IeG1rjQiUe%2BEdmSfCe7LJMUOz%2BYjJppqPVZ9UsCw2juy9zXjYp50WDHGkZKPhKyJ8nnvgiVngMyjrkzub%2F%2F8adA%2BdcIusVXs%2FpIOgCc5H7eZC%2FruBlZvi3SpMu%2FVFbb%2FjT5A%2FwH6DF4i1vzqn2tjErZAhETh7Nh6gwRAayUGbEzdVwkCR5W8dxdfzL%2B8msKr0yKqwrpzI2GkJzFq5%2BBwai2uZaFHK44TKV2xJDsyqvuLFwKb5HMyaEDbNCgR8BuQuCFIe2Vv5J%2FFDieOd6DcKABJ85ZeynA%2Fh3LNB8AxRdRojX1ybtM0Zgs4ka%2BdnnBeLILuzC0az4ftlGaKYyvb8bXvG7pz0JiDo0G%2B8Q3q6nr%2BJPbb4HnVi20fnXP%2F0eAMTomu8ZLdj6e8VU6vMWyoGzC9HCUKbLvAAYNKRIHsdFbhPq6LRmaOLXdGJzJ3y0naAaQLuKwlKKnyuY5%2BYLHr%2FIeOlNkDXiiAeUPm6kIgoBh061X%2Fdh8HcNcvb19QkNRP4wMrzMkyAqQ%2BkBJilpMJnDysEGOqUBaVamZKXLdBLHm%2FWIAh3MnuZdXyEKh4PWsoQZw%2F3O%2FItQ7orLRqgXtlzGmuiGxticapn5EJ7p%2F1ll2wB5t8NqGwsVysCF%2BKMwTL5Ri8K%2BoepX45%2BSrByUWlDziXK885p7LbhXMERmD6LZoivF0TprIW9iM8APpkrN7vbD8dkmyzpuclashpmCqJbJrKPNW3p5h%2FGmbBBioHtQexfyFvc%2FM0%2BpwA2j&X-Amz-Signature=4e211056279ec5ae58155c1dcff323a6b4342203f55407660779fb0ed82568c3&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BVMQIBV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDgKfRk3PIRDE%2BIl8I8LrGyaBfDHZBLLjJEH3YXUPNFKQIgYUlovTg3Ou2gr%2B8%2B3OHlee7TvyUXp5tBTuZ7fIDnMjMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEuHHxebsCeM2rYJSCrcA72NPcmenrw6%2BSL4DxU%2FgWvfmmlKpZk8l4QsKlg7wzTzcc8Ez1zZBRrW4HJUEJxF43Y4DP%2BK2vTG3wvMO4%2FBc6wMq6f7q5IgIS2BAZuX%2FH4fjVLV95X8PVRuwIGtzAeNIAxg%2FhOr%2F4Ebu1jOKk65MXjTBBYD3apPfuBbQnMPPGDCKmyBpor4Y0AXMAZM1V7mOQwPoP91D7JJtOfwf%2Buga3FnFL920iWyqL%2B4r2lrMREPus5Galv3A4V%2FIgD0hre2lelmwC6um5XqbePwhB1wFS6eQaVbwaV57PRrzZc3qDdjAfFO5vf08r0WRHAUFcnsvlUXe9wkXj8O%2BRayCwCE7fiN9bJ0mK6HqX%2BlFy48wL0Hsr5Sq5yvujlQSE7FcBMX7Ey4vfGnd6fODCfkolKKR9l0bv%2BlgOIHiSxCSqvV3FH0nftHpwOK50EQuZW1NBo%2BMMEmoJq0PseYNKQdbxz6ZqqJOAswYhjT6Vkx8BT9gTCqOInhfJvLMVHtOP%2By%2FMB7S9Lz0Q22aVNJPltxhCvEyu3qyNr1Y82iC7wjnAyh9vJiCGg7pElrLRbnMjwl%2Fit7bxDHlSrnvQTOYNGHUPt8nwIQrqYN%2F9nWvdu9c20n4%2FKZ0RuzXiCRCcIdjWPQMOnfysEGOqUBAvO7NePxlteWFJ%2B7u%2Fwvrp1YRv5mByrWO%2Fhovw%2F%2FY%2FPzV6uBYX00%2BPKuXC3IlSCvxC30eKZRax8Soyu8qT5%2BTm8Xgy1m%2Fgxiqe%2F0vANS4l2BA21m%2B5olNOqPhDKlkmJHzB9z01rOWAIFSKd9VvjtVbO9bh3xUnxNwS6XT%2BTzeO%2B47%2FrkfffX%2F5hkg77%2BrKAJU1%2FU06LI6a0oPUERCseKgloReSmn&X-Amz-Signature=0f192420149293b1e33fd231948c20fb015a6de451113ae8acc73ccd21835d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBIDYPJ%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDNFKfYCehZlqnu2j5JpNUU3Dnkf0LlHqkkycevfnqDhAiEAmzx5VhXtvuCe8QPhPFaM9738dfdl%2B3pZQx7PfA3hSEIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMFVVpatNIeprWXh%2BircAzFSImDWOFPSqm6KaD8RHCOHznah2Y%2BzrZlsN4QNqvlh5%2BIFFFCM3r1VTEwQVppn0h2ZS9WIj2ybsl6H0obC13%2FJ4komVvnsjY4pR%2BcfLOzlGoxXAVqnRQY7E3UtygwbO%2Bu6xv%2Bed7Fl7CNQ0qKpzMnWod3NxbHxZKTiJWdWjUmJUGxjB%2FU4kV%2Ft6nD1gVXZZpnogFsicU1Ze6rcndobj2HThZY1z5FhNXyAFulXxTEK8dFh0i5zuGSqL8J%2B%2Bgjbzh60SU3dY3XnHakJDhB3AHdR%2FT8AjmjQquM%2BplV8Osd3M36o3jfSmwG9wNOfFtSLEiFFvjwPs0ycNjh36n0IN1U%2F0XYKxPDAJoJd%2FiPpjzi9X6LLFexpBRsjH20anJVA89FCIhRtMiOFOF5MSuc0M8zULTAbNlyaJQvg%2Fq0DAIXa6tzODsx4ZzxN2SZ1CAvogyZPv4iHS1nQMZ1p6ACBVZdLxbBhW%2FFulbUdW8LueUO6eHRXlD7TTX9Jkh8fGf5EXNyjgJ338wK2QC6%2F2XfnMIaoPFuwMcj4iGsdpEFYaQOHzqQBQFTPQhe6MAO8a0jtKUpJ%2FMNPARr48UQFRGU1u6ka0rZM8UO0WzNwztbc%2FomUiTBsUn%2BNjLxvSaUbMNqfy8EGOqUB9NHG5ccu8A2bE02PkeOBgsl5ieKeUdkJhFroUU5bNgLLe6wjP1DKmNztsZRN1r%2BlvrPZKHh288%2BhJWMex3%2FJZSRZ7FxMgu76dkohleryH%2FfCyFUFSDV09CCEHmiMzd4oAxRvCfzYvEj%2F82O4YtvKffafuaT%2B%2BPfoouxCugo%2BiQK5uusA1i5XH3I%2BVqp0MdUy44zdzGyoxZSePfMw5%2BsU%2BwCjfnwG&X-Amz-Signature=9b9b6e4d9693838eea1bb0d565f96a941443cfb872f5fe701fe0d51c58a4ada1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JL7QIN%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCzEfreUzkoY02vW5D1%2FV534NYAb%2FS1BXHhfju4pTIKdwIgdGYZrK3PXhJmbeBOnp4VLiWppIWj%2BJNfhpqz%2BCMOgWIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGCp0hP31T3MEbRVwircA9CiZl44fJYs39BWiEv2yl11dGxSQ%2BFvkKOO9RIqjdDD6%2BAZe2YGt3OMwsDfQ7tHAbkDrEc3epg7QbUpmlFTOuxdWshEoi8xAt0pkjjhd2IeG1rjQiUe%2BEdmSfCe7LJMUOz%2BYjJppqPVZ9UsCw2juy9zXjYp50WDHGkZKPhKyJ8nnvgiVngMyjrkzub%2F%2F8adA%2BdcIusVXs%2FpIOgCc5H7eZC%2FruBlZvi3SpMu%2FVFbb%2FjT5A%2FwH6DF4i1vzqn2tjErZAhETh7Nh6gwRAayUGbEzdVwkCR5W8dxdfzL%2B8msKr0yKqwrpzI2GkJzFq5%2BBwai2uZaFHK44TKV2xJDsyqvuLFwKb5HMyaEDbNCgR8BuQuCFIe2Vv5J%2FFDieOd6DcKABJ85ZeynA%2Fh3LNB8AxRdRojX1ybtM0Zgs4ka%2BdnnBeLILuzC0az4ftlGaKYyvb8bXvG7pz0JiDo0G%2B8Q3q6nr%2BJPbb4HnVi20fnXP%2F0eAMTomu8ZLdj6e8VU6vMWyoGzC9HCUKbLvAAYNKRIHsdFbhPq6LRmaOLXdGJzJ3y0naAaQLuKwlKKnyuY5%2BYLHr%2FIeOlNkDXiiAeUPm6kIgoBh061X%2Fdh8HcNcvb19QkNRP4wMrzMkyAqQ%2BkBJilpMJnDysEGOqUBaVamZKXLdBLHm%2FWIAh3MnuZdXyEKh4PWsoQZw%2F3O%2FItQ7orLRqgXtlzGmuiGxticapn5EJ7p%2F1ll2wB5t8NqGwsVysCF%2BKMwTL5Ri8K%2BoepX45%2BSrByUWlDziXK885p7LbhXMERmD6LZoivF0TprIW9iM8APpkrN7vbD8dkmyzpuclashpmCqJbJrKPNW3p5h%2FGmbBBioHtQexfyFvc%2FM0%2BpwA2j&X-Amz-Signature=34022f98f042f2f1a8694e110414f56be69643bcf5896d0380c2beacce6732eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
