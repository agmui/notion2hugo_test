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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCLEEMR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjL41zrL5BWjxDriDKuyefnO4KQdGy%2Fre5fdaf%2FKPGlAiEAujnIu5ido7%2Bvi8eJ1Tao%2F67ql80qjRVypMpcfLhJohEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyoOOYNNb9jrS8%2ByCrcA3lyjw2gWMvcIQAsjepORRWVH%2FS6fhVN5K72XZ39Moos4hBfhVdMuODLOf65ssnry8wlAa0Ddqwkn9O325crRwpfNHSyZoeRVn6XgqKWoE652lkUwXoJw1P6u%2BSK3w8ZqacBThMhgBbXP7hmnFy5DNh2ZfM%2FSSzTd%2F9%2B2JQNwTj0o%2FeCInUPwhkL9eA4N11EQ3eqMIOmAuX589PnaNeqJWEkDtYyOUGdgDP1FqFXg%2BtflQgA6d637rj1lbJShejh2IaFypaX%2FTamWDuGbStznIZ79fmZI6dpA0TkjD4bRg3pfCqQksU%2BC2GpbLiwkrJvUT7FihUkN3lScxDdXBZUyg1D9ZOsdex20cDD1z0orLbB7qJzLsoyFGmZgP4nOfIShz6wW9eCSDtc8N4mToc3U%2BmLipVkPMP7jbYLcUX3%2Bs82nSedjwPH7bwD37k5%2BVp1W2VLdJb3l41kJJvbObvHltyd0hcSXdsJ1cl61le1caX34iQMxjXBmLcStyQ4B6UPEK4bTbY1V76tr5b2OojVdFg%2BDBkk07EGTlwUVz4nV07oOy9HlToMYd9A729m64fAlIe9iLTeCZQpjb9l6H8tQV%2BeNL%2FSJNGtkSh0%2BAoUxr%2BddPYXtpb5FN9CqcW8MI%2Fs5L0GOqUBh5PiWLH8HwQRlC4xb3FQwXbogLArTQpqmx9ElAxmavSHcIKy7t4Jf46bs6pL5pU5pV%2BdvQpdH7t4xoy5k67Y9JZeSLTevcWXrxwAYGjEh4Q7EGc61LR8%2BD58siLrUp74j%2B2YVrHsHjPWjTwDQBT%2Fd12y4POilHc3sSoiGQ0yVJM79U2MgcmG5cy%2FKAMGTr%2B%2B%2BUPrK%2FgcNrL4PSssgErYE2W4DR%2Bq&X-Amz-Signature=4307aeaea5521e3f76b1e9f6db6317ea69f693ba70ba925f8351aa7381baac7e&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCLEEMR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjL41zrL5BWjxDriDKuyefnO4KQdGy%2Fre5fdaf%2FKPGlAiEAujnIu5ido7%2Bvi8eJ1Tao%2F67ql80qjRVypMpcfLhJohEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyoOOYNNb9jrS8%2ByCrcA3lyjw2gWMvcIQAsjepORRWVH%2FS6fhVN5K72XZ39Moos4hBfhVdMuODLOf65ssnry8wlAa0Ddqwkn9O325crRwpfNHSyZoeRVn6XgqKWoE652lkUwXoJw1P6u%2BSK3w8ZqacBThMhgBbXP7hmnFy5DNh2ZfM%2FSSzTd%2F9%2B2JQNwTj0o%2FeCInUPwhkL9eA4N11EQ3eqMIOmAuX589PnaNeqJWEkDtYyOUGdgDP1FqFXg%2BtflQgA6d637rj1lbJShejh2IaFypaX%2FTamWDuGbStznIZ79fmZI6dpA0TkjD4bRg3pfCqQksU%2BC2GpbLiwkrJvUT7FihUkN3lScxDdXBZUyg1D9ZOsdex20cDD1z0orLbB7qJzLsoyFGmZgP4nOfIShz6wW9eCSDtc8N4mToc3U%2BmLipVkPMP7jbYLcUX3%2Bs82nSedjwPH7bwD37k5%2BVp1W2VLdJb3l41kJJvbObvHltyd0hcSXdsJ1cl61le1caX34iQMxjXBmLcStyQ4B6UPEK4bTbY1V76tr5b2OojVdFg%2BDBkk07EGTlwUVz4nV07oOy9HlToMYd9A729m64fAlIe9iLTeCZQpjb9l6H8tQV%2BeNL%2FSJNGtkSh0%2BAoUxr%2BddPYXtpb5FN9CqcW8MI%2Fs5L0GOqUBh5PiWLH8HwQRlC4xb3FQwXbogLArTQpqmx9ElAxmavSHcIKy7t4Jf46bs6pL5pU5pV%2BdvQpdH7t4xoy5k67Y9JZeSLTevcWXrxwAYGjEh4Q7EGc61LR8%2BD58siLrUp74j%2B2YVrHsHjPWjTwDQBT%2Fd12y4POilHc3sSoiGQ0yVJM79U2MgcmG5cy%2FKAMGTr%2B%2B%2BUPrK%2FgcNrL4PSssgErYE2W4DR%2Bq&X-Amz-Signature=f703805a1f78f2a9cd29b1e4826e1d28d4dc602f8b8b4015c2d40f83a256fc41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZISN3YM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXvuWN4A2UG2ILGtYxYnCduBDbfDTdPd4Py4O6WlIFZAIhAJePtgOamLkLstdfHWuQvoEbt1W745cKTsSTaAldquzvKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOvVLhzU%2BWXtSxoCQq3AOyENHmRkBMXbiSyYnJ1jp8IYaWbXtOBFkVQY3oGiLgeXt%2FJByw1Y3B5IQjcfY0b0tswgrtgYAozvuWcgtvEJd92AF%2FoS6cuV6C%2Fh4BmnzhU2H87%2F7I7OuEHZ4BBU84SjYntgN05DnGzjRQgVWYSO3KZl%2BXp%2BOIG9GhxFuA336%2Bq7Y99IlIC%2BGXdPCCY5hjmoDw3MjeFNqwFkv%2BmUXEhsn0B0ag1sTqb2StlZRpWX2t18zZkd9774oZtevPKnyowrKtEIFYO2c%2ByxGnkhxANXkHRnGLkWdUwHeqEZJWxu802cYAOOIgfhRT67jsHL%2FCYML6YeBvZ%2FkP7fPfWBeFY%2BeVdo76CTuVc2skrxJcnW%2FFs5myv0Gt9Bvdhv%2BR5UKo5iMy1S6clc5GnXWtBjNEQfpmJJDtuaTFMV5tNRdnUabk6DvM%2B5aaRU11%2BvgwnLNDw3qXANEPQansEkJg5Mrtao0bWLruCNVEB5oCt9funV4pDbNdZWFutFMXjnvzWKtoJOnFr8dqzgVPm1VgNpAox3jJ7USg%2FC0IPASiGjwUkfUZ7nM9KydB%2Ffo1ps7UI%2FdGcvxRLVpVL2rSGanB32Fds%2FIdTwZy825J87OarKKd8bEninNiBhp64zN0wzBhyjCt7OS9BjqkAQYfJ%2BpJiokl8zQRABV%2BgPRhL69aEXcjF0W9P06alGALn8WdOSYs8G0JGgXeP7Sjo7Oy78BaQ5Rhue7gN5aNMZTrME5etKnwUPCof94Z8LIN%2FAG0KslHZVZOlnnJMfFAUOzHKmKwsiTEuh9CFyqXzcqqpA11HfnrjAOSAHR2Jig0ntRkxy2AM1LJJ43WtMxYA41o0eGPKR4Zs5J4pn796F7sa0d%2F&X-Amz-Signature=057e002c6ff97deaeac97a52eefa218ea3b6361a3a3b9d5a3fb3ffdde2ba4539&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMPSSLS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBb2vYhj0GMuRS0spuVGYAx2kfqD%2F%2BPxi8Yu5tShcLsgIgcuwILv7X0l6AAqZ1FPBFX3pmAcYybqSAB2PnsRLorqEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLGLGpZzK%2BWfNQ4lhyrcA3IpYTUF2ds74IeQsc8rkr9fq543i4E1YtAa9EMjvovI3SQmRVLn6PZQCwBu%2BKW3K4RBZS2fIjxQfwFq9a3yW89ZkxGe47oGi69TaQVUhStSYpD6gjsAv1p8us0ZFdZsHd9JjAsa9i%2BjikwDmMohtaL1PtYRP7j4dkp8curtpCViW3YVuHppCZ01vlXvmqV%2BY7%2BAxAZ2LbN41%2BUkPiZ2E9So1MEZocHaZFql7ePWEzam7%2BSEea7TnA%2FPWCqZwIs6I5%2FPBlGGzuiJ1cTlEkbBev84VAL%2Bak2d9thR9%2BQcZPRHPAgATpYIZTQ24aSBtc9lB3w79XVmp8uWpnK%2FPlpbgltxcja5gRIlbIRlTpznuld12P5zLiOpePMgTEmx%2FiK%2BGBzk1H1Eaox9TDkQgiPtx5oYNZ782nB38PTa7UsWCxG8jXqRN17%2B%2F669r%2B%2FUkJbZ5D1%2B4nw%2BO5ZMoZBGAJ%2BSbPUYgYdITfDTgR%2BAqPUwGnHpSg1UPfc6HirWrb%2BVArI4N4x65efHMX56NqUg0xn3iI7S5tA2S9myoBsi6rGg9pHZaJqqM%2FCe3gzBZh5yy9Li25UX%2FvXbb3UELzuWzxG3TDMoy%2FQR1y35Ojq3eAd1ycyRDbp3j8uN6segMrkxMJLs5L0GOqUBVu2WebfJoDuuebW2zW297qMSg%2BbY6wfFbe%2FpEdycTT2C6MOybYEYE6plnYp0O1y2Dbt04M%2F%2B2%2Fay%2F2liPvPz2uaK4Cyh0LR4zyyE7mBgVUWIvkywSyHG%2BKL%2BfStp9DLFwPI2deSL4jPNA3diPX%2F1TqZDZ0gyQNxeK4XktUygBUNHVgghnI%2FKFs2vj0yu6ziPXeXcixDSLJsWWCeD2UeOh7eDuUEp&X-Amz-Signature=760d3bc703b76c018d47ce821241612e416401fb9d5cbcae5079029c5a16a14a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZCLEEMR%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjL41zrL5BWjxDriDKuyefnO4KQdGy%2Fre5fdaf%2FKPGlAiEAujnIu5ido7%2Bvi8eJ1Tao%2F67ql80qjRVypMpcfLhJohEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyoOOYNNb9jrS8%2ByCrcA3lyjw2gWMvcIQAsjepORRWVH%2FS6fhVN5K72XZ39Moos4hBfhVdMuODLOf65ssnry8wlAa0Ddqwkn9O325crRwpfNHSyZoeRVn6XgqKWoE652lkUwXoJw1P6u%2BSK3w8ZqacBThMhgBbXP7hmnFy5DNh2ZfM%2FSSzTd%2F9%2B2JQNwTj0o%2FeCInUPwhkL9eA4N11EQ3eqMIOmAuX589PnaNeqJWEkDtYyOUGdgDP1FqFXg%2BtflQgA6d637rj1lbJShejh2IaFypaX%2FTamWDuGbStznIZ79fmZI6dpA0TkjD4bRg3pfCqQksU%2BC2GpbLiwkrJvUT7FihUkN3lScxDdXBZUyg1D9ZOsdex20cDD1z0orLbB7qJzLsoyFGmZgP4nOfIShz6wW9eCSDtc8N4mToc3U%2BmLipVkPMP7jbYLcUX3%2Bs82nSedjwPH7bwD37k5%2BVp1W2VLdJb3l41kJJvbObvHltyd0hcSXdsJ1cl61le1caX34iQMxjXBmLcStyQ4B6UPEK4bTbY1V76tr5b2OojVdFg%2BDBkk07EGTlwUVz4nV07oOy9HlToMYd9A729m64fAlIe9iLTeCZQpjb9l6H8tQV%2BeNL%2FSJNGtkSh0%2BAoUxr%2BddPYXtpb5FN9CqcW8MI%2Fs5L0GOqUBh5PiWLH8HwQRlC4xb3FQwXbogLArTQpqmx9ElAxmavSHcIKy7t4Jf46bs6pL5pU5pV%2BdvQpdH7t4xoy5k67Y9JZeSLTevcWXrxwAYGjEh4Q7EGc61LR8%2BD58siLrUp74j%2B2YVrHsHjPWjTwDQBT%2Fd12y4POilHc3sSoiGQ0yVJM79U2MgcmG5cy%2FKAMGTr%2B%2B%2BUPrK%2FgcNrL4PSssgErYE2W4DR%2Bq&X-Amz-Signature=e9447631f19161502cd59efd93d08d0a2dad29d6517af9aced422b8655ea3d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
