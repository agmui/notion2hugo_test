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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3JSKUZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bc2O1yIl%2B%2Bj7T0U0pJtNOTvXRhVE%2Ff6BAQjgDp7zyKgIgQNxW5tYgH4bAlw4iKRzne66eTSBFMOY5Mocntel%2B9xYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnruCRd2H87eDSLxircA9NXaTV8twCyjAX6JB6uYDvXixBtuAYrGbrzYYX7oHhBrD8hK9dr3C3OF2Y%2B4xPzkl9vWO6%2BWzsVDJ9mY7tuiYevTgnNaM4nHRfySfgkKHk9OJJSlgmiv95rxnZvGLDX9%2BdevejBPYAUfW%2BSCrqdRKXnu%2BZzwvQCvVamwevI%2BIomYTLbMl%2ByZcT91pExGUglgybX45Cg15rgUFeV%2BHnPdEIzRRcMNVthfYpKjFS3rmkUNSOJ%2F60h%2BjQOdPRdsrD3zFJMfYyVKS3WXka8k%2F3YspUH9BUYqUT4bNVcmvWq5qZFUmordYZlM64toQv2%2BMaiSs6V6m5IdRstSJtxYEaKrF%2FSNNAXdJKUA0g2yCkTABCcPbWDIYY%2F1hhW0A6BcR914aMJeYCSSSWcrZAw7YQPULJXkyxMtT%2Blu8CrCmtmVNlWAaKUrfI3IkaNTSjMCXYJTg6syaJ9qGAYmK72lRYxA2KVBWumer1mzsi9zzLE%2BZKp6P2euHYvyjtgUznXv9eDV9pChOh8KAi%2FtInvmolb8nhsjCEnHIpgq3o8FZyMLeC6kjy%2BSqV3CFYKeC4tQFifU6tCzoLGVNYXMoY0VNgQ6IXzJeH8FXSA%2F6kYNk2pDsGHzCS5flYowIErzUz1MOOpvcMGOqUBIIcp9J4De2iIc5oFoqC9HAUOa5snVUOvRfgnFQQBri2Qv72LsHRnUD%2FJht6n0bJ2YRapVOUQTZ14PioDIAXpXAxoXbFzch%2BsiiZMYDlCbKpuRNul6sZq1nDpoaL9YcTghxPdZ8LJRCQW9eqSHLxiSLPHG938VjxBKoJpky0t9jHD5XgsbvcyJXcP%2FO4D1HjqllRRGqGsgicxjW%2FsU6Xe4gW7N0HK&X-Amz-Signature=7a35384faefb428640695eb25ffceeda789f31d3d431fd99eb887bf92d6b8831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3JSKUZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bc2O1yIl%2B%2Bj7T0U0pJtNOTvXRhVE%2Ff6BAQjgDp7zyKgIgQNxW5tYgH4bAlw4iKRzne66eTSBFMOY5Mocntel%2B9xYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnruCRd2H87eDSLxircA9NXaTV8twCyjAX6JB6uYDvXixBtuAYrGbrzYYX7oHhBrD8hK9dr3C3OF2Y%2B4xPzkl9vWO6%2BWzsVDJ9mY7tuiYevTgnNaM4nHRfySfgkKHk9OJJSlgmiv95rxnZvGLDX9%2BdevejBPYAUfW%2BSCrqdRKXnu%2BZzwvQCvVamwevI%2BIomYTLbMl%2ByZcT91pExGUglgybX45Cg15rgUFeV%2BHnPdEIzRRcMNVthfYpKjFS3rmkUNSOJ%2F60h%2BjQOdPRdsrD3zFJMfYyVKS3WXka8k%2F3YspUH9BUYqUT4bNVcmvWq5qZFUmordYZlM64toQv2%2BMaiSs6V6m5IdRstSJtxYEaKrF%2FSNNAXdJKUA0g2yCkTABCcPbWDIYY%2F1hhW0A6BcR914aMJeYCSSSWcrZAw7YQPULJXkyxMtT%2Blu8CrCmtmVNlWAaKUrfI3IkaNTSjMCXYJTg6syaJ9qGAYmK72lRYxA2KVBWumer1mzsi9zzLE%2BZKp6P2euHYvyjtgUznXv9eDV9pChOh8KAi%2FtInvmolb8nhsjCEnHIpgq3o8FZyMLeC6kjy%2BSqV3CFYKeC4tQFifU6tCzoLGVNYXMoY0VNgQ6IXzJeH8FXSA%2F6kYNk2pDsGHzCS5flYowIErzUz1MOOpvcMGOqUBIIcp9J4De2iIc5oFoqC9HAUOa5snVUOvRfgnFQQBri2Qv72LsHRnUD%2FJht6n0bJ2YRapVOUQTZ14PioDIAXpXAxoXbFzch%2BsiiZMYDlCbKpuRNul6sZq1nDpoaL9YcTghxPdZ8LJRCQW9eqSHLxiSLPHG938VjxBKoJpky0t9jHD5XgsbvcyJXcP%2FO4D1HjqllRRGqGsgicxjW%2FsU6Xe4gW7N0HK&X-Amz-Signature=047b4b9f2e42f5c190bc2d675484a193c51bda733d0d25c9272f1274b7d88420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3JSKUZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bc2O1yIl%2B%2Bj7T0U0pJtNOTvXRhVE%2Ff6BAQjgDp7zyKgIgQNxW5tYgH4bAlw4iKRzne66eTSBFMOY5Mocntel%2B9xYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnruCRd2H87eDSLxircA9NXaTV8twCyjAX6JB6uYDvXixBtuAYrGbrzYYX7oHhBrD8hK9dr3C3OF2Y%2B4xPzkl9vWO6%2BWzsVDJ9mY7tuiYevTgnNaM4nHRfySfgkKHk9OJJSlgmiv95rxnZvGLDX9%2BdevejBPYAUfW%2BSCrqdRKXnu%2BZzwvQCvVamwevI%2BIomYTLbMl%2ByZcT91pExGUglgybX45Cg15rgUFeV%2BHnPdEIzRRcMNVthfYpKjFS3rmkUNSOJ%2F60h%2BjQOdPRdsrD3zFJMfYyVKS3WXka8k%2F3YspUH9BUYqUT4bNVcmvWq5qZFUmordYZlM64toQv2%2BMaiSs6V6m5IdRstSJtxYEaKrF%2FSNNAXdJKUA0g2yCkTABCcPbWDIYY%2F1hhW0A6BcR914aMJeYCSSSWcrZAw7YQPULJXkyxMtT%2Blu8CrCmtmVNlWAaKUrfI3IkaNTSjMCXYJTg6syaJ9qGAYmK72lRYxA2KVBWumer1mzsi9zzLE%2BZKp6P2euHYvyjtgUznXv9eDV9pChOh8KAi%2FtInvmolb8nhsjCEnHIpgq3o8FZyMLeC6kjy%2BSqV3CFYKeC4tQFifU6tCzoLGVNYXMoY0VNgQ6IXzJeH8FXSA%2F6kYNk2pDsGHzCS5flYowIErzUz1MOOpvcMGOqUBIIcp9J4De2iIc5oFoqC9HAUOa5snVUOvRfgnFQQBri2Qv72LsHRnUD%2FJht6n0bJ2YRapVOUQTZ14PioDIAXpXAxoXbFzch%2BsiiZMYDlCbKpuRNul6sZq1nDpoaL9YcTghxPdZ8LJRCQW9eqSHLxiSLPHG938VjxBKoJpky0t9jHD5XgsbvcyJXcP%2FO4D1HjqllRRGqGsgicxjW%2FsU6Xe4gW7N0HK&X-Amz-Signature=326583cc9e8057acc80da0edc28ba8c1849105f2c36faba9bdff2b71fab5957f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466664RJR5H%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt7UJOQRF0bp7bt6qT3i%2FcC9bTOO0LxbhwRZYIXqqfNwIgPTGFTGo2gd7bhkvuw0WOfRr%2B6FM8AYFKrfA2Byk5xmgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY2IxNpaLyVAC2HFSrcA9ynPiwEUQjvTOeN8i2K%2F7hxUW%2FYAPdh1PojnpLNWPKPkm42L4Jy6gdM3uKz7O6N6lCXkVoV1OQ9G64EL%2B7h%2FZYVAt5Q%2FIZM9LJfq9Bc5gzM7yx4OrjQe%2BPqFJ66jU6aNz0hFjpv%2BkptSTDFgIMeAFDy3NWycjs5P%2BWmW9v3MuKPOxrHeQi5bqkjI6Zo4PHuvxhiRnzg25ihD5i36jHOu8Q1U9qa%2Fd5egyV5DqH9mi37j62iTycr0mEmATAu0USHTpJP85Iw1hOzN3F0yJlMTzaQKnbZ%2BifyKNvM7xta20Nzz3LL6ch8p1QOJeDnDiziz5j%2BFnmconvmTZbcuW96XX6Sqq86iMq3eNi2snfglP3UXyteSAGMvxE%2FYI%2BdVG7giVzZt4e7gm3tkUE2sKHeh9c6n%2BJ8eY3szA7AebkIkPwHO7zNO9W3vUrD5x1R50WdgWmSVh5l8DQNC%2F82ZQT%2BthJvk2FxfZfJT542fXlpjRlK3uPoUvp%2B171pTm1BbR4tguLaFFo4dij0EvP7%2F%2BSeKsuYMuGdzOi3sdoVifmvuoIWB0pMMsY280DNxuS%2FmVWax6O8BzRP8LBSiouN0zGkoGManPUUYSEX6lfelhTpQKffB8%2BvSkkXyOgnqMXrMJupvcMGOqUBaNor6y4D3k4ZEXAJz2bModFfXmMqCR873wfXKmkihDVPWu4%2BaiK8PwOAh7xJFkPwR4PataYwM8imnYadStSyOjv8cyFL%2FPw4ch19cZz2i3cIUhsVAJKcIz7A9Mk2tr%2F14%2F9vHEpxqsy7D8oe0GEuWareHdf9siCvdko0zfEbyNP87aF5wTvIMpAu6jqrtMQydK%2BHjCte5b4%2B7%2BR2U1BVMEqa8xO%2B&X-Amz-Signature=7a10220bfaf4b779875536ce411566c768a4b5c2609f8cbb54fbfd31116fb7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7IV53KM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgta6PsYfmqDT61ZJTRUxnGN1uTOeNg1AZnpXXZuDcOgIgFes35Q2RL5idkbZ0XlTwCIAJ%2FYfn2o7XKxsEapsSlt8qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOE22RfGJyqFjz79CrcA6Ilb%2FS%2BCmRMxhT1UBVsWz%2FFKv1CpjF4oIQL5gj6SDqQSRAkxpzVBxckS0wZ1Fh0mC3vtpxfoR8gD9te4kTcEHJZ99P6HoNu56znXogqReLc3R7BwTHBjIhUb3rqGcMTkWMXyADe1JjpLUNYjh%2BKaO2%2BKwID95pjgrIlfGNURQqbBGfnpcpdtbe6vgw%2FHHDevC%2FIEarVBnGadoDZ%2Fj6oMCC6z394WTYqTXPw1Tr1IZNhwGZhOJuPqkG0Ltm%2Fl6l%2FyzIISwGOQyExbMi8HoC4ynU0GqLZ9CrPqIt7rJOaxOTbM7O0NnjqZus%2Fc%2BvRTysIPBaU6Fqhj8skU0jzpQXp6Kk1BmVEsLqLVQhrOBVc24pP54VhqKcmt6sAocG3nZ4NgOu5XFleg93lLr06FanZgiTlQUWNc1RL5TlVbfdEeO9sCpOyFZUPDSJ8BwlirTHSWSdex%2F%2FpCVWTWvxjYT%2FgUdCvzIjaGbeWqdKIb7X2pp2bd0sLTp6cpiyAjWRui3fQiU0iMdA4axd63E%2Fr3W1mp0V2uCmkm4XwH5NDZ9T0KMmk8DIqDP9fPEEh%2BJpVHaTqJss9gDRfsLOD94Nq15JOjKxlH17C5Qflq%2B420SZlIvAfeEH0aNxVsvPIez0pMMSpvcMGOqUBw5c8tglBLUk8y8JQpupw1c%2B0%2FGhHok%2FTMnhPnNSJCYnb5d%2BOLHXb5ga9CguqmxeDtY0JgXHp1U5T3iDW8dycbEjnCYeXTEXpT2UuoIlVkk%2BQ6EYoDuhKN4HrDno9o78Jo8fGC029l6iGV46AGtJig6XYD3IFmEtxsm0uSM%2F8BMEMo%2BowvR5dSrFuVo9m9%2BP0T8wJAB0XO1zolKsYAiACZe4lr7JM&X-Amz-Signature=9f76167a1cdef7a7f43e697d59323c98fda3540712e73c7913729e8e854e807e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3JSKUZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bc2O1yIl%2B%2Bj7T0U0pJtNOTvXRhVE%2Ff6BAQjgDp7zyKgIgQNxW5tYgH4bAlw4iKRzne66eTSBFMOY5Mocntel%2B9xYqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnruCRd2H87eDSLxircA9NXaTV8twCyjAX6JB6uYDvXixBtuAYrGbrzYYX7oHhBrD8hK9dr3C3OF2Y%2B4xPzkl9vWO6%2BWzsVDJ9mY7tuiYevTgnNaM4nHRfySfgkKHk9OJJSlgmiv95rxnZvGLDX9%2BdevejBPYAUfW%2BSCrqdRKXnu%2BZzwvQCvVamwevI%2BIomYTLbMl%2ByZcT91pExGUglgybX45Cg15rgUFeV%2BHnPdEIzRRcMNVthfYpKjFS3rmkUNSOJ%2F60h%2BjQOdPRdsrD3zFJMfYyVKS3WXka8k%2F3YspUH9BUYqUT4bNVcmvWq5qZFUmordYZlM64toQv2%2BMaiSs6V6m5IdRstSJtxYEaKrF%2FSNNAXdJKUA0g2yCkTABCcPbWDIYY%2F1hhW0A6BcR914aMJeYCSSSWcrZAw7YQPULJXkyxMtT%2Blu8CrCmtmVNlWAaKUrfI3IkaNTSjMCXYJTg6syaJ9qGAYmK72lRYxA2KVBWumer1mzsi9zzLE%2BZKp6P2euHYvyjtgUznXv9eDV9pChOh8KAi%2FtInvmolb8nhsjCEnHIpgq3o8FZyMLeC6kjy%2BSqV3CFYKeC4tQFifU6tCzoLGVNYXMoY0VNgQ6IXzJeH8FXSA%2F6kYNk2pDsGHzCS5flYowIErzUz1MOOpvcMGOqUBIIcp9J4De2iIc5oFoqC9HAUOa5snVUOvRfgnFQQBri2Qv72LsHRnUD%2FJht6n0bJ2YRapVOUQTZ14PioDIAXpXAxoXbFzch%2BsiiZMYDlCbKpuRNul6sZq1nDpoaL9YcTghxPdZ8LJRCQW9eqSHLxiSLPHG938VjxBKoJpky0t9jHD5XgsbvcyJXcP%2FO4D1HjqllRRGqGsgicxjW%2FsU6Xe4gW7N0HK&X-Amz-Signature=540476bec3664888eb980605a071184508b53e457442b6512452a478b7d6aec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
