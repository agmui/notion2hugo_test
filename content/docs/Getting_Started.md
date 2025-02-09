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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXT7Y7K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqi1LePpVys2rpPv4J%2FTlcoRFLWgAeywMgTelbpoRKQAiEAv9zDm1NDUXVPWbUwuD0rIcaMjz%2FfAIIEi%2BaBTy4ozFcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPlwpvHvTRR91ul1yrcAx8jQHiQI7o2zwRFBNWxqrVihlGDE9DKb9IdhUO9t%2B3LYBnGfakHJTi%2BaZXdYAmXa1k8udlKlQ1qS3My7bFf8fWmjyR8EW7AdR4KJY25TfX6ozBkqEC%2FsAUofp6bYVvCqnIdHwCZb2HZsg032D3WlZeIDMAyXVZa4ZhZLKoB8NYlMHZV3JqL44iSEcRVbeaTW57XS4feQH0IbPKg1qVDSdBq2nhpimt71jRgy2qRMS%2FBkmJJ1XoGky1L%2BfFw1Hc7zt2rlamdH2lRd9x6EHBtwpVnUCq%2Fz5knVt%2FNRUi0PAx1JR8lRu%2BeGhD6bxmrL6jHl8cZ%2FOoqZ60YulRqoj0Lv2dOP6mvTTRSYkyQCgmWVfI8z9iNlTSbN5N4W9NtiafO3h6uPY1W7sR%2BxrKmkQPDC14X8HI7KSwz%2Fac06Vtw7iK13s6TUzpSGV04succONE57vg5vZn9Y04X6dSdInjttDfYkhUuiZMqEp2HoOnJ6KqoSGtiHrscOrJt7i5Bxdq%2FR9wDWItgZvUb2sLpydPNyqjFeUwaL2zsZ6QLbLUYJ5%2BSW6frEgbNnVflYuQSb1RLQjxEphZ3tHuTs73joACf5KL6mzZoEwZu8Ml5Q8JPRF8xdY7JN%2FJoYgEO4hZlMNfjob0GOqUBhjc0V62hiEg%2Fk924IiXUbj9KdVsx0KP26WCVBqyn6JdhNXyfAyhwb%2F9oaiQbWk7NFYwewtd69QL75%2FpnHowWOOS6hqJCn1rfNR4iinyteVkqR0HQT%2BmGD8W6j3DElIPWtsbelUaMIbty9YumDGqfBq6Kxvg2t8uRaNES%2BTB6R9rHLW2N4FITnZ4i43UcJnoukY601V%2BBNNzA8vPRqGcqh8KUHxsn&X-Amz-Signature=a3ac9c166c31cdeb3d9003dda1009b6b5063df3e690a0acf7385690d669685ce&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXT7Y7K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqi1LePpVys2rpPv4J%2FTlcoRFLWgAeywMgTelbpoRKQAiEAv9zDm1NDUXVPWbUwuD0rIcaMjz%2FfAIIEi%2BaBTy4ozFcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPlwpvHvTRR91ul1yrcAx8jQHiQI7o2zwRFBNWxqrVihlGDE9DKb9IdhUO9t%2B3LYBnGfakHJTi%2BaZXdYAmXa1k8udlKlQ1qS3My7bFf8fWmjyR8EW7AdR4KJY25TfX6ozBkqEC%2FsAUofp6bYVvCqnIdHwCZb2HZsg032D3WlZeIDMAyXVZa4ZhZLKoB8NYlMHZV3JqL44iSEcRVbeaTW57XS4feQH0IbPKg1qVDSdBq2nhpimt71jRgy2qRMS%2FBkmJJ1XoGky1L%2BfFw1Hc7zt2rlamdH2lRd9x6EHBtwpVnUCq%2Fz5knVt%2FNRUi0PAx1JR8lRu%2BeGhD6bxmrL6jHl8cZ%2FOoqZ60YulRqoj0Lv2dOP6mvTTRSYkyQCgmWVfI8z9iNlTSbN5N4W9NtiafO3h6uPY1W7sR%2BxrKmkQPDC14X8HI7KSwz%2Fac06Vtw7iK13s6TUzpSGV04succONE57vg5vZn9Y04X6dSdInjttDfYkhUuiZMqEp2HoOnJ6KqoSGtiHrscOrJt7i5Bxdq%2FR9wDWItgZvUb2sLpydPNyqjFeUwaL2zsZ6QLbLUYJ5%2BSW6frEgbNnVflYuQSb1RLQjxEphZ3tHuTs73joACf5KL6mzZoEwZu8Ml5Q8JPRF8xdY7JN%2FJoYgEO4hZlMNfjob0GOqUBhjc0V62hiEg%2Fk924IiXUbj9KdVsx0KP26WCVBqyn6JdhNXyfAyhwb%2F9oaiQbWk7NFYwewtd69QL75%2FpnHowWOOS6hqJCn1rfNR4iinyteVkqR0HQT%2BmGD8W6j3DElIPWtsbelUaMIbty9YumDGqfBq6Kxvg2t8uRaNES%2BTB6R9rHLW2N4FITnZ4i43UcJnoukY601V%2BBNNzA8vPRqGcqh8KUHxsn&X-Amz-Signature=ddbbded9bc422b34fd6908221948a11abe345fa6cbd05c5ae1b815496cba886a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDNCD7S%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhwjUKKyPLlqS147SvWNAWD2Wl518xkoz1JiO3BMBHWAiAezvXCSrBoAwM4i3qMK8JrF816o%2FVotdGt9wWEDknVjSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7Q3QE%2BQS4pH3KQ1KtwDAmNpp4%2FQoJ1CKWr3Otji%2F3YOj%2BYoSVK%2Fd4b3LbtGqIbAEeuknOSbPsC2JQVyn1MzrciFc57rpKPLSh35BLbDlom7RY4xD8jSCWQNhWK5mgKH25wdgiQbweM9VIV6iWTdigz74MDLekYGx%2BgPQVtpnzkIwP03F5dtUwDstdthPns5dudsogUnmKuBlR4eZzaAHi7A7vw70JgOtF0RNxc6RkgpYxLsM5m1N23%2BuD9UuDYUGyq%2BZ30a8H0kHA8NuS7wLItoPCINLXM7E7Ahv5cJVeRgenIvhFyWIo3R7grdPQ1az5rwFcliOj3V%2FgNrAHFn4LLOrWNnAib0i2wWWYXvclZOA4Ziubmp1wVngSjhSbTbL4Z88P18DKQBVFj2%2BusvHUeYxmp3vmfIkGRia36tnEME6H8b4KfBVg9h5oP1rN7mwR%2BjIn04IBufxJFPkRLSla9UzrEfIcukGSQLtTjMApM3%2BsNOeCu2RhOrpD2JpM0b3xpiJTO7VBvKxInMOyT5u505mc3rkqCgFWExRTgUMxnj00%2FeMRxc%2Fze8B4igGK9O6Yxpl%2Bap6GfXOcacKODewfEbmYGXJ1viGRy5DzQ0iUWn0fSpqK3mifa6QNNr8i4kjYwMH8oeB5ZzyvYw6OOhvQY6pgHXx0aIYrgl2HDP2RZOGVlulP67lnfKUfGzrsEgfOIMbC2GbDXAlbHrGteAyKYZUrP%2B3ZqoJiQqBvB5rRtKWX%2BQlKd4SSsKChPK%2B2C9LXc%2FXrG0dd07yXxDwxtLpgFZoczxFe311Z57ip9WY8GUbkk9IJxy8KM60A28k%2F97yNLP5lWYmJarcnGyDXy7PfHJGIBreawKaqTSGj90BnUiwtD9FWyrid5N&X-Amz-Signature=297794f026031e75af7f72885fb9c6ed1e63fbdde4d2854e5b1492ad70af7d43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466455L2EDD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcFZcX36nNPrTnZe1gXJzOajII02MbYP5It9RIr4V9AgIgVgkMjdHbO8NweSowePgvHaP7Ij32Fx4x%2FWxfowBaHb0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBqwgEgu7hKq2%2B97NCrcA1O0mEwOqtDngyEjuudOeCesrGhZUbT7tYe9yArX8mRUpBy0tJAv7cQ5ABN58I7ZQzuwrVByq8dzA4hHlSqIaN8k9tD%2F%2FHrkC%2BufmjdZ0iFcibz8jkfibS5aAJ0YrnkDC14tNyfgA6YRXab6r2HZ%2BGAlm8v59sOpef296IcUtRzeA3FF1PugAAEXlHw0lUwBdOVO8VdvtxSN1rPbs4wQTY55jfh26BNCo8T0kcKzNvvtbABK9GK5ukHc%2BokF93TDgh0Yv%2F2%2Blc9c%2BKUq4FYqLTdAFPYxmKrUEWYfhWrhxqzgRqG%2FNnFtVY6XgUmQCtEq9exEopIQ5dQmDvjCdddQzCyeYsKFK8gBoSKIIL03lAY0Jn25h5ZbnlV2N%2FLn3mLtjEP%2BvTKL4c8jP4US4iwkAL3Kh9Ykd2DtvBuH%2F2Rumwu%2B%2BOp9q2QvZZM7f3tSyqW49sysZtAZq73b8dx2oRj1PiyLQqApO4Cj0pIpecXIhUEZEHr0XWt3%2FmQhDqkWlmiyybvs54QZZ555ELZLLaqip%2BrHo%2Byy6c%2FVOTaLoamZsUqTRmSsK2iSRKTyYzdGNOG8WUQkdFlF5lh4Mbc5d5BASbeGIUGiuCq0mBXFbWik3sIJK4LgLZ1QnT9j%2FNhwMNrjob0GOqUBJLmwe%2FbwK%2BjpXDb4py0WSvYppsQ1Zieq8og43e0vPbVSfelK9mYI%2BVWND5vtPcnaalLZeTLeGaW%2BvrXaye5fdLTrITky1f64id96uuKJyZJuVH0ErQSY76VcxZcDCoKbuA7nlWXWVCFJIOcfBJePuAnCyTbHbpx%2F3E4oXznsWwMGTj3z05VJLn7VyNupm3XKhXsKXbnunxgKbg%2FxegsYQxT%2FIjLK&X-Amz-Signature=1476e469bf4c051954a45fb7ad9b73dd29d74ff92a30974eff5ec930a0c2c9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXT7Y7K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqi1LePpVys2rpPv4J%2FTlcoRFLWgAeywMgTelbpoRKQAiEAv9zDm1NDUXVPWbUwuD0rIcaMjz%2FfAIIEi%2BaBTy4ozFcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPlwpvHvTRR91ul1yrcAx8jQHiQI7o2zwRFBNWxqrVihlGDE9DKb9IdhUO9t%2B3LYBnGfakHJTi%2BaZXdYAmXa1k8udlKlQ1qS3My7bFf8fWmjyR8EW7AdR4KJY25TfX6ozBkqEC%2FsAUofp6bYVvCqnIdHwCZb2HZsg032D3WlZeIDMAyXVZa4ZhZLKoB8NYlMHZV3JqL44iSEcRVbeaTW57XS4feQH0IbPKg1qVDSdBq2nhpimt71jRgy2qRMS%2FBkmJJ1XoGky1L%2BfFw1Hc7zt2rlamdH2lRd9x6EHBtwpVnUCq%2Fz5knVt%2FNRUi0PAx1JR8lRu%2BeGhD6bxmrL6jHl8cZ%2FOoqZ60YulRqoj0Lv2dOP6mvTTRSYkyQCgmWVfI8z9iNlTSbN5N4W9NtiafO3h6uPY1W7sR%2BxrKmkQPDC14X8HI7KSwz%2Fac06Vtw7iK13s6TUzpSGV04succONE57vg5vZn9Y04X6dSdInjttDfYkhUuiZMqEp2HoOnJ6KqoSGtiHrscOrJt7i5Bxdq%2FR9wDWItgZvUb2sLpydPNyqjFeUwaL2zsZ6QLbLUYJ5%2BSW6frEgbNnVflYuQSb1RLQjxEphZ3tHuTs73joACf5KL6mzZoEwZu8Ml5Q8JPRF8xdY7JN%2FJoYgEO4hZlMNfjob0GOqUBhjc0V62hiEg%2Fk924IiXUbj9KdVsx0KP26WCVBqyn6JdhNXyfAyhwb%2F9oaiQbWk7NFYwewtd69QL75%2FpnHowWOOS6hqJCn1rfNR4iinyteVkqR0HQT%2BmGD8W6j3DElIPWtsbelUaMIbty9YumDGqfBq6Kxvg2t8uRaNES%2BTB6R9rHLW2N4FITnZ4i43UcJnoukY601V%2BBNNzA8vPRqGcqh8KUHxsn&X-Amz-Signature=77dfa68b08071c53ae2b72abb8e3c9dd3a119ad54d370e34f8172ff3deabeac9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
