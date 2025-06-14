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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UVFDHNR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDc1qtkmA9T%2FOiYi%2FhZimieCSTt2byJCFfdFoQcm4GetQIgSdnRBz7SKouM8LWqL2JlSnnXR8FZdKMXTqKIURdGykAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDE7Pga0iWCoeKJ%2FTzircAy5lWCp6Gd6OsfNRXwT89YURpQdugWmD8CL6bLZRJMY5hd4%2B32yLyeFJTQQgu48aa4GGCo2lpee3X5TWuvt6hZQmDatkQHK%2Fe8esgLHklXZ7DAc6Ivdtpltriv27gIWGKdnny%2BqWsh1MMVGpm%2FM4gukgsLoucfbd8A1ozp1kIfJ97FwzuABpk07N8Jg6QInEQcR268OgKeAwPH%2FwN3eFErCTR8hQqFSxRKvWdlc1OoE2gVoDVSjUXp7Pw5VWbZyjlwdoVHNK6iXXtW5LuEJpYj8KqHYWu8sOfFrE6%2BSPb6PIabP%2FYqLLGazwXEtcAsWrPhc2aTqHcym3wxMD0Qj4lPRA%2FyZOekYNBYlmr2lZDc8QC0j56V14sN%2FD4ZfhcXx6%2BY86%2BqYT7t80%2Fv%2ByrUjNkW1s4JmBEnecULvwfxNfqvrLBn3XXI4SKH2SmlHLjlLTovpndOdbniHDFIeLZL9aVwS7VrHHtDxvXzfpy3T1cHb3odKQkOBN5iH8yRptgIfMJwBKGO5IBn50vrs42tgHXVZbIFR7hmyV7Jw3pvIppNpnA9TX%2FPoe06ITjiy9hlSfsUTsD%2FbrOCi7qUYNP4Tf3wR%2BBy5yc4Rru1hxiWYdlBqFSdZ6L3OPyMqpbUUeMPjBtcIGOqUBlLuWopYY7CETqaS8RT2BjLdDxKi0qt7y1lbYxUVSRiLD43lXb7MAnztg66bs8CfjmiUtDOgMhhuiKDPqBrJBFBywtQBAiqBowFi0dv1VxdY2aQrZK1%2Bucf6NMyLo9zBlSdVwOhXrst9tzfZ9TMHdkkLYa3VL5rrRt14jkZos7YT1c25B1uIhjUKqd6GCr%2FDx9nd%2Fy2%2F7OwjrpG98LWQYiCPvg6hC&X-Amz-Signature=0c6940f98396a8d04de3ca7fd684e8b30f164c54d07b9f6ee9af87443e074577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UVFDHNR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDc1qtkmA9T%2FOiYi%2FhZimieCSTt2byJCFfdFoQcm4GetQIgSdnRBz7SKouM8LWqL2JlSnnXR8FZdKMXTqKIURdGykAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDE7Pga0iWCoeKJ%2FTzircAy5lWCp6Gd6OsfNRXwT89YURpQdugWmD8CL6bLZRJMY5hd4%2B32yLyeFJTQQgu48aa4GGCo2lpee3X5TWuvt6hZQmDatkQHK%2Fe8esgLHklXZ7DAc6Ivdtpltriv27gIWGKdnny%2BqWsh1MMVGpm%2FM4gukgsLoucfbd8A1ozp1kIfJ97FwzuABpk07N8Jg6QInEQcR268OgKeAwPH%2FwN3eFErCTR8hQqFSxRKvWdlc1OoE2gVoDVSjUXp7Pw5VWbZyjlwdoVHNK6iXXtW5LuEJpYj8KqHYWu8sOfFrE6%2BSPb6PIabP%2FYqLLGazwXEtcAsWrPhc2aTqHcym3wxMD0Qj4lPRA%2FyZOekYNBYlmr2lZDc8QC0j56V14sN%2FD4ZfhcXx6%2BY86%2BqYT7t80%2Fv%2ByrUjNkW1s4JmBEnecULvwfxNfqvrLBn3XXI4SKH2SmlHLjlLTovpndOdbniHDFIeLZL9aVwS7VrHHtDxvXzfpy3T1cHb3odKQkOBN5iH8yRptgIfMJwBKGO5IBn50vrs42tgHXVZbIFR7hmyV7Jw3pvIppNpnA9TX%2FPoe06ITjiy9hlSfsUTsD%2FbrOCi7qUYNP4Tf3wR%2BBy5yc4Rru1hxiWYdlBqFSdZ6L3OPyMqpbUUeMPjBtcIGOqUBlLuWopYY7CETqaS8RT2BjLdDxKi0qt7y1lbYxUVSRiLD43lXb7MAnztg66bs8CfjmiUtDOgMhhuiKDPqBrJBFBywtQBAiqBowFi0dv1VxdY2aQrZK1%2Bucf6NMyLo9zBlSdVwOhXrst9tzfZ9TMHdkkLYa3VL5rrRt14jkZos7YT1c25B1uIhjUKqd6GCr%2FDx9nd%2Fy2%2F7OwjrpG98LWQYiCPvg6hC&X-Amz-Signature=ed513d4c86bcc7e50eafad0fe060e071e449ac1cb64188c8434bc0992675d688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UVFDHNR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDc1qtkmA9T%2FOiYi%2FhZimieCSTt2byJCFfdFoQcm4GetQIgSdnRBz7SKouM8LWqL2JlSnnXR8FZdKMXTqKIURdGykAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDE7Pga0iWCoeKJ%2FTzircAy5lWCp6Gd6OsfNRXwT89YURpQdugWmD8CL6bLZRJMY5hd4%2B32yLyeFJTQQgu48aa4GGCo2lpee3X5TWuvt6hZQmDatkQHK%2Fe8esgLHklXZ7DAc6Ivdtpltriv27gIWGKdnny%2BqWsh1MMVGpm%2FM4gukgsLoucfbd8A1ozp1kIfJ97FwzuABpk07N8Jg6QInEQcR268OgKeAwPH%2FwN3eFErCTR8hQqFSxRKvWdlc1OoE2gVoDVSjUXp7Pw5VWbZyjlwdoVHNK6iXXtW5LuEJpYj8KqHYWu8sOfFrE6%2BSPb6PIabP%2FYqLLGazwXEtcAsWrPhc2aTqHcym3wxMD0Qj4lPRA%2FyZOekYNBYlmr2lZDc8QC0j56V14sN%2FD4ZfhcXx6%2BY86%2BqYT7t80%2Fv%2ByrUjNkW1s4JmBEnecULvwfxNfqvrLBn3XXI4SKH2SmlHLjlLTovpndOdbniHDFIeLZL9aVwS7VrHHtDxvXzfpy3T1cHb3odKQkOBN5iH8yRptgIfMJwBKGO5IBn50vrs42tgHXVZbIFR7hmyV7Jw3pvIppNpnA9TX%2FPoe06ITjiy9hlSfsUTsD%2FbrOCi7qUYNP4Tf3wR%2BBy5yc4Rru1hxiWYdlBqFSdZ6L3OPyMqpbUUeMPjBtcIGOqUBlLuWopYY7CETqaS8RT2BjLdDxKi0qt7y1lbYxUVSRiLD43lXb7MAnztg66bs8CfjmiUtDOgMhhuiKDPqBrJBFBywtQBAiqBowFi0dv1VxdY2aQrZK1%2Bucf6NMyLo9zBlSdVwOhXrst9tzfZ9TMHdkkLYa3VL5rrRt14jkZos7YT1c25B1uIhjUKqd6GCr%2FDx9nd%2Fy2%2F7OwjrpG98LWQYiCPvg6hC&X-Amz-Signature=5aa9e92a15a561eea4165fd78773b22441ddba2bbdad94592e96972d77a80c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNUVXFZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFf1vVdiZVAeWFrl988DI0Kv68dFS%2BanmBhzaasKyyDyAiEA7mUBrGUvTlXeyXQkFV4iOYOAl5fmRvNk7muHnUMybX0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCT6b50BnlJMlx7yaircA3O0nRuouACF1aco23NQoTpfQgMZ9jRi5zAqPonlSJByY8q%2F0f75RacjDHXgIUHsbQ%2BaTP%2FTfs6Y5nTZxkmdBFRVM3nIXVD35NlUxX5BpFBb1yuZImehBH8I5ZMuhSe0%2BT8bE9sCdyPzcocP65p7GTTjH5GWDmmJ5uUBphj%2FClpkoIDyvYJ11G35eZhf%2BtbfWbrOYAA8HJvp5XczD2XtbGqj5QL7baze5qnarWzmlbHz3nG5V0OFhqz4USuSnwECDLypjwlfqIAYpRJxw36V%2BDrz2VyyoHJnWHknCWyLigxMj6QdEmv7pXSb9L4%2BmTBUQfvaQfPSZlRIe4xClESk0ZfNOxHj0q7Ck8vMtey1pQIV%2BuVefucC2lo1yAca2Ge1QPVJfB7RaGN6pFyFdaCcIyoCaXd3vmDvM4ClzViMM5jSnS1twB6H7JGZmsLyYj1lZdjXRTEfUHVriEQT%2Fp4fXVZL%2FW0Py8fWRhAvC1yIDgmlYNz1TyWCpcotkAjRrYJta1sdFKUabLuv1vP8E7vT81GDoRF2HhpxlUQpZof%2FiP%2BnTm0Fo5kopb4P43yq%2FbRbVR6NrfrjU9sVs49XdUwkPq1CiOypN84ydhpgRGosS5lLvRy3AVyxXsrm3B92MJPBtcIGOqUB%2FHw1UVGp92ivSdjw5KWIQQfunbqd6EPhUIpJiNpv79sppiPvCd4PCmM%2BowsirSMUa0BUCcxgvpWwyf14Wky%2FAmH%2F4dsc8foxw6TIiw%2Ftp3WfM3S6unVYdmO30blToLiHqoJOEJ8Mx9AzN1ew5YvF%2FamF4kjO%2B7SQ9FnIefDAMq%2B37kVV4QXZ%2Bq6hxZrbh5auJIbsnPV2FC0StLdFqA3J4Kt%2B5Gd8&X-Amz-Signature=ceab312316b6fad2a1fcc2a68e212d19d8515cf6c474bb6957f65fe5d33379f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UPBHVHL%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQC4%2FvsPeiRAzXDIW%2Fxt9mBSGlNdtLRGBeKU5%2FUso2atAQIhALJICjbKcjkCESwn8noJc2FIl9DPmUKN7sNmYLpslBpKKv8DCC0QABoMNjM3NDIzMTgzODA1IgxPn4OxvyEpTHjUIzkq3ANDQqqq%2BRZTDJlvehKUjSGSjnCrLAROui6Z7wlALOLiCuLoNZFkKseXSZG1Ul79WcBigQzrhLwgjkv3WhilDFQTYEMJnUGyvkRB5L4JVFjJnZrToqyVHaWZOkrVCnNDHOyhO1Jnx3sCXhvrPdCAvpfOaYnLbPTpmzLKVF4NwQSB0G9MpqRikFW4V2%2F4HR4DGjumsHjafCzOXz7d%2B30q8zfSH%2BEn2dmup6bTBuMFlwdxmieapF4BOzemW959FLyh2H3i%2ByBM5CetBcGhfU3AqK6kcEiPbHgZsKQpFBqxt9V68diOgyIFhHOCzVWs625IZf4R7YM3VMn2MB7pre6m316jlpndl3RhHbmfxoHuN8j1726MkjOdduWsPCBGWJws0fcfkGQHmaHdX7th7A3%2BnQkkU6JKuOfi8gcIXhuXCKKPDhBxAkVyspj7XkvJo4uQOkKex4A0IppVfqM05TdfOS4kwCNE1HCCXQ7jSSDiMQ3CeqypsG57BIgORrgu2XB6WzAxzBAXWX5rOlePr7TbgRpMUwrGGrNNF1tbEqIjGXdFQQk7PKrItMstKXwZPPgdgyvrYm1OPxKn4jJsvEhz3g3mNyDwslmiMdZKWxZWXNuKvDhf6axQkN9JgwvkQTDQwbXCBjqkAXbMcGHDx4%2BH4deOB%2F5ytfXAGmSHdcpPN55TS7f1fyclXIZzFaUQU9Tlm0xNGLhxAe4posWSEZhaXwH1CHHVrGBYFpXO6xXBs1wkbulFW7QpugZcccB6bvJmPZjocmwKbl4kj%2Fk6Wkcflg56zpa7f0d0k%2F82x7jO4cj78QdgIzoGy4Iyiw2EScXBBejh8GEQX0h9HouFuPub3dWMdv4Ki23ursc2&X-Amz-Signature=f030c1b44180eca2c3ee66024a8e0c512ef699c352beb1e2a48bc013eddaaa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UVFDHNR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDc1qtkmA9T%2FOiYi%2FhZimieCSTt2byJCFfdFoQcm4GetQIgSdnRBz7SKouM8LWqL2JlSnnXR8FZdKMXTqKIURdGykAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDE7Pga0iWCoeKJ%2FTzircAy5lWCp6Gd6OsfNRXwT89YURpQdugWmD8CL6bLZRJMY5hd4%2B32yLyeFJTQQgu48aa4GGCo2lpee3X5TWuvt6hZQmDatkQHK%2Fe8esgLHklXZ7DAc6Ivdtpltriv27gIWGKdnny%2BqWsh1MMVGpm%2FM4gukgsLoucfbd8A1ozp1kIfJ97FwzuABpk07N8Jg6QInEQcR268OgKeAwPH%2FwN3eFErCTR8hQqFSxRKvWdlc1OoE2gVoDVSjUXp7Pw5VWbZyjlwdoVHNK6iXXtW5LuEJpYj8KqHYWu8sOfFrE6%2BSPb6PIabP%2FYqLLGazwXEtcAsWrPhc2aTqHcym3wxMD0Qj4lPRA%2FyZOekYNBYlmr2lZDc8QC0j56V14sN%2FD4ZfhcXx6%2BY86%2BqYT7t80%2Fv%2ByrUjNkW1s4JmBEnecULvwfxNfqvrLBn3XXI4SKH2SmlHLjlLTovpndOdbniHDFIeLZL9aVwS7VrHHtDxvXzfpy3T1cHb3odKQkOBN5iH8yRptgIfMJwBKGO5IBn50vrs42tgHXVZbIFR7hmyV7Jw3pvIppNpnA9TX%2FPoe06ITjiy9hlSfsUTsD%2FbrOCi7qUYNP4Tf3wR%2BBy5yc4Rru1hxiWYdlBqFSdZ6L3OPyMqpbUUeMPjBtcIGOqUBlLuWopYY7CETqaS8RT2BjLdDxKi0qt7y1lbYxUVSRiLD43lXb7MAnztg66bs8CfjmiUtDOgMhhuiKDPqBrJBFBywtQBAiqBowFi0dv1VxdY2aQrZK1%2Bucf6NMyLo9zBlSdVwOhXrst9tzfZ9TMHdkkLYa3VL5rrRt14jkZos7YT1c25B1uIhjUKqd6GCr%2FDx9nd%2Fy2%2F7OwjrpG98LWQYiCPvg6hC&X-Amz-Signature=4ffb6ec75e442aefd1df71fcad8d945b50af8f4952ca129a3b92f019e99eb86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
