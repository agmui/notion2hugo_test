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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B22LM3P%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjXw0f3agbN2DjKPoqdpGBE6e%2Fh85QhcvYAI5hvFNtwIhALR%2Bb%2BdbFBpXtD69LwIe%2FfKL02v7HSLUstL6M35iNf0ZKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYSde3%2BGBa4sRIrn4q3ANlvXT7%2FBEEJan%2FN3XiYQY2P384taY%2Fkm3oxDQqUQ1l3UcaSnBAffEOFdAydYq6UXRxN09Mu3%2FyaLH2bWSJcFqqc9Ope1Kppw5p5dQFHklKhfbNRhbWOv%2B3GQPouQJx2dRlu743u5twr3h9Bqg4C5nvXtg8ds1Z61Wi8wXf3XN8BrfgfI5Ke7XtN3oLXx3aOFLkFSZOcjm5Jz4wUtWKtF1dYWU%2FUnA66tJVn%2B6SBoFD5r4iR%2BrboE9TYiToU7koJmj0z0hoAcV6%2FV6t3XsDdUrox7E0oc%2B0yOcA25ni8%2BKuAqDdQAEAzDrnON5oV5D7lE3%2BQeIPRRBw%2B6cqYTRm6H4El%2Bt2izNBx1ei7MEEzRkMy5PSybKhx%2BehGAiW7rnzKJikfxQzwSfk5DRLx6xxOTlL9j7qycGN%2B4Mk0ddOWaVZfpvBPwloZr8I04w3%2BUGObXVj9QGKMG3IkE3mj8YkglpdP3R9IcgcHSMcVBuXrW8X%2BUHaSspkVGOFtaZkR1UgSj01dwMMCgCXB36x%2FeQHDSEtKzTgmFEX3fAZ8dt8vN3CAQSEYp5msfMiS0JbrepW6LE3mn9YS3K%2F6LnsOztgPAVxqPjnm%2BQq90X1seaO9fMGXoMKXfkvVr4W2JbARjDJj6S9BjqkAfbwgdMbVq2qt1QtXyIMaSLoxIRCannfoIHvEhLZZk6DjDmDWr5BpcURN3bhvV7KoccO5aZtAeayVsxg2g01gnvW0NNtsqHe551Aa%2F4gR65ybAZOPxrcmp5Om6I7xlaM8SH5lrS%2B31kaVhpznkoX5X%2FotEYvEsgc7ud2ro52vvdrqBKDkmH2XwUCdMvKYofomktgcZnFKj6pTJ9s0SGTRX6MXmzR&X-Amz-Signature=dbf680197de3ff97428b15b5cf841dcdcd4128814372cb18e76f56281195c3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B22LM3P%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjXw0f3agbN2DjKPoqdpGBE6e%2Fh85QhcvYAI5hvFNtwIhALR%2Bb%2BdbFBpXtD69LwIe%2FfKL02v7HSLUstL6M35iNf0ZKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYSde3%2BGBa4sRIrn4q3ANlvXT7%2FBEEJan%2FN3XiYQY2P384taY%2Fkm3oxDQqUQ1l3UcaSnBAffEOFdAydYq6UXRxN09Mu3%2FyaLH2bWSJcFqqc9Ope1Kppw5p5dQFHklKhfbNRhbWOv%2B3GQPouQJx2dRlu743u5twr3h9Bqg4C5nvXtg8ds1Z61Wi8wXf3XN8BrfgfI5Ke7XtN3oLXx3aOFLkFSZOcjm5Jz4wUtWKtF1dYWU%2FUnA66tJVn%2B6SBoFD5r4iR%2BrboE9TYiToU7koJmj0z0hoAcV6%2FV6t3XsDdUrox7E0oc%2B0yOcA25ni8%2BKuAqDdQAEAzDrnON5oV5D7lE3%2BQeIPRRBw%2B6cqYTRm6H4El%2Bt2izNBx1ei7MEEzRkMy5PSybKhx%2BehGAiW7rnzKJikfxQzwSfk5DRLx6xxOTlL9j7qycGN%2B4Mk0ddOWaVZfpvBPwloZr8I04w3%2BUGObXVj9QGKMG3IkE3mj8YkglpdP3R9IcgcHSMcVBuXrW8X%2BUHaSspkVGOFtaZkR1UgSj01dwMMCgCXB36x%2FeQHDSEtKzTgmFEX3fAZ8dt8vN3CAQSEYp5msfMiS0JbrepW6LE3mn9YS3K%2F6LnsOztgPAVxqPjnm%2BQq90X1seaO9fMGXoMKXfkvVr4W2JbARjDJj6S9BjqkAfbwgdMbVq2qt1QtXyIMaSLoxIRCannfoIHvEhLZZk6DjDmDWr5BpcURN3bhvV7KoccO5aZtAeayVsxg2g01gnvW0NNtsqHe551Aa%2F4gR65ybAZOPxrcmp5Om6I7xlaM8SH5lrS%2B31kaVhpznkoX5X%2FotEYvEsgc7ud2ro52vvdrqBKDkmH2XwUCdMvKYofomktgcZnFKj6pTJ9s0SGTRX6MXmzR&X-Amz-Signature=4cb232b79cf36e9b67c0d4a4498b9b8bde8960661a1715d977abaf19faa9ccd4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE36UHSP%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4rTcaJVNN2he3g9G%2Fjwj5gNyBQHVtArXxcsPL8sIJCAiAcuhtrq2qxVWBTo0R5p68nMz3A96idVE60RW9OkiUtaCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG8d9ISInNRp12LcaKtwDM5PN%2BRR4ggtzHl5Up8Tgtl1zE7PwzRAmuBBu3jdOuKny5ot%2BnwR5iy4Y5EdhOhIQQwoihJOCe8KeY%2Fg5pXAZlQ4XTsTvC9%2BHx7VTLFxIfsTPsBwN2IBFukj%2Fz%2FnSah1DEi9YXiGxhmYj3vqiuo5URzrAoOe%2F0%2Bj49NpVUDxhq5Q2Pe98DAqZt0smY44e48ZnFaUXAyeeOe2QXrwE7TvLeiSa1Mt94jeMtuSTQGjzh7AriUDmn8GeJu0U911dNK2hcEIlDNgZP1olJnT5kHj8EeFVX5UTcfvDiGGKyKNO7cKRHxISMyHr1rSbiaHWXp%2Fxaux6QoaVreNK3cf368rOBVGn3Kl9yDSDRWglmGia%2FMDbj%2FiJIy9qv5%2B5zI3HAnf5y8huZr7urTWJYQmo9DTI8rP73GC7f5KP%2FKo2ca2zOrJaU5b84W4xUYyJpsbrLeMCep0CAnTjkdiI6t3CCm6TeKcwJ16O6qshp7p9nyB5CuHOYP6NTvb1mo7y3WgIJ5L92Fx6CpiBumAWeS%2BDRTtR8sof%2BW%2BfzwuLUehgc8Yz3uFGh%2B4yXvP8Q%2BDLK2ymrWpxJHo1xJRzlSQqxVkj%2F2zxPcp2XI%2BMJTVX1rfVpWjBRkpcdD0TqTWSDzifZewwkpCkvQY6pgEWAXXEYMs7t%2FYZj8FLIIAlt5wdxekQ0DYpO8qXiOeANQ1P97RwrxoqwdESxvDnDNc9anilFV3lHpu8zRw99Bf61cGnCM8M2sKu7SiRI%2FQ32qZdDfvafcDtsM0xr%2FM4wZnQdAYF9izkFmrlNf%2BZ8S5%2Bvf%2BRxpJ9GZa9%2Fn8%2FzNFXH6JTM8beeiF5DktwZbWBInxWr82aAUup0H5SnDqFJIqWxj%2FKdtzd&X-Amz-Signature=359b4aaef34c8ae0c42c2dd565fb332f0b57ed7e1d35039afcdf47beba246336&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL4STNN6%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAguFcUzK8kpEYoVjQde9VWupzKz0K1MEyVsBG3FMNdhAiEAphSc6HBAdGjf%2B66ONLjHh%2FLfthvbrCm2GKj0mRXjHlwqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ4n73DYh76ppMdmCrcA76O4odoqPHACA%2BjFi1%2BxEdJg6B%2Basgr06VBr1OTFGUfjLqKSzKKxSewxFjMX0ZOXpY43V0GYEHBqlDphgJzCnk8qL%2FjUYsZJE3hbI6XkcTkcfEXM%2FDc9FUosL2qmxDgAeXDhgLDsP2fZV5R2GyOe4VkW9SukjKAwhxee8LiTiGbCsBA5tN83OC6lLSGUEt3qC8A0%2Fls4p1C2jrYO%2B6NTXWYwxpDP7Co02p%2FDTFVvBn%2BsrxC2Sng2DLAUFGskMpVnYVjYaeBlwyfS2ra8jHk2hVunZ5hsRvPpBc71CsQYckkMbQRO6XX8gMCwuwdhyHcqlFFDbGOOiMUP%2B5F8ETTULREPkJyMepvY%2B0codiGox%2F7nmqi01dPSCYBfdt6nOr6lqW984DIxo27%2F3n2eijs8CO9at%2FEpf5bMjUnxmpaMAg6KTH7STZDF5MmKNJT0cqhBdO66Nw7Z40Q0doCkT6F5rnnyFJi7gGEke3dLmNsgvoFE9TM1J2FfzSpJXhCSa5TNGUQFw6J2ZLGb8HSNBhThpmiMBZrFmRBu3avMg8C86Fibi8Fj61MXFiY1uHfc0h59wfkPgDdWXYrgFP%2BO8o0FgOpT5%2B78aOEJNuvsnSdZ0j8oKHZPhW49LbFtffIMPSPpL0GOqUBC1Lu%2F5ARVG9fgON54uBX%2BLjyfCtWhTxJIAPm9RZEJSTRue9FTnOXfUs%2Fj%2BbPkgK8KUIiHrYbl9WlPVAjPPh1KxxC9VEqmA5q%2BmCbMl1Oi%2B8tUMh6utMNyPY%2BS83yAz0bpev1A1DuykLlfzpCIMfC4DCNM3OTBEWqk0G8%2FHxcp2zY7MnbJKbryB9M2k3Thb4vgWNwUk%2FYhcPvkF3i1WPGk%2Bd5QHpC&X-Amz-Signature=2f6a45416356c35f9a384df22a5600214691de56d87b34538d9954761ff4f39e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B22LM3P%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNjXw0f3agbN2DjKPoqdpGBE6e%2Fh85QhcvYAI5hvFNtwIhALR%2Bb%2BdbFBpXtD69LwIe%2FfKL02v7HSLUstL6M35iNf0ZKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYSde3%2BGBa4sRIrn4q3ANlvXT7%2FBEEJan%2FN3XiYQY2P384taY%2Fkm3oxDQqUQ1l3UcaSnBAffEOFdAydYq6UXRxN09Mu3%2FyaLH2bWSJcFqqc9Ope1Kppw5p5dQFHklKhfbNRhbWOv%2B3GQPouQJx2dRlu743u5twr3h9Bqg4C5nvXtg8ds1Z61Wi8wXf3XN8BrfgfI5Ke7XtN3oLXx3aOFLkFSZOcjm5Jz4wUtWKtF1dYWU%2FUnA66tJVn%2B6SBoFD5r4iR%2BrboE9TYiToU7koJmj0z0hoAcV6%2FV6t3XsDdUrox7E0oc%2B0yOcA25ni8%2BKuAqDdQAEAzDrnON5oV5D7lE3%2BQeIPRRBw%2B6cqYTRm6H4El%2Bt2izNBx1ei7MEEzRkMy5PSybKhx%2BehGAiW7rnzKJikfxQzwSfk5DRLx6xxOTlL9j7qycGN%2B4Mk0ddOWaVZfpvBPwloZr8I04w3%2BUGObXVj9QGKMG3IkE3mj8YkglpdP3R9IcgcHSMcVBuXrW8X%2BUHaSspkVGOFtaZkR1UgSj01dwMMCgCXB36x%2FeQHDSEtKzTgmFEX3fAZ8dt8vN3CAQSEYp5msfMiS0JbrepW6LE3mn9YS3K%2F6LnsOztgPAVxqPjnm%2BQq90X1seaO9fMGXoMKXfkvVr4W2JbARjDJj6S9BjqkAfbwgdMbVq2qt1QtXyIMaSLoxIRCannfoIHvEhLZZk6DjDmDWr5BpcURN3bhvV7KoccO5aZtAeayVsxg2g01gnvW0NNtsqHe551Aa%2F4gR65ybAZOPxrcmp5Om6I7xlaM8SH5lrS%2B31kaVhpznkoX5X%2FotEYvEsgc7ud2ro52vvdrqBKDkmH2XwUCdMvKYofomktgcZnFKj6pTJ9s0SGTRX6MXmzR&X-Amz-Signature=fed46139a7ddfa1a3bd776aff217783cada2d4ccd81c1ba9f0993fb4df5a0cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
