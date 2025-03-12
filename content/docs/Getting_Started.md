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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YAFMXY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH8FjN3LlWaOH1tNqYTj4hgD4DHx5ndsqe2DtCHY9BJaAiAxEBvVoMKaMFd6gKdqqxXiWGdsEAUwm7QOrfwz%2BEbOxyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlHjEQq%2BQNmqyLzGgKtwDwZL6u2%2FFfqzJE%2Btl0mJArw%2BqVTFOr63laeQiJKga8sjsc06UE4zz9EmbONk7pduBL%2FaSxDKCKn02hmu1SkzyXmjAPD9pf1%2Bf1aJNyQTX%2FxwGeOHMY%2Ft%2B51L%2F5aU4AWcMKpYfY0u9aFGJETnv%2FMuxfPdL0ki90BfjQZdSZmupAgjrxd%2FSk3FKEc1VHPhNY%2BkZ7nUXS1oxrefGaIPSlUbIu3NIweRFmoj2twe9TmmAdFry%2FgILj7j13Wh5ubC6DFnS24qIuBjF5SLtrgDA98KXnZU6XISXSvgOz1iwHlHL1w5q27eYsZj8BQr1agOrgMrkXO6q7szDJf%2BdibExYsBxD336Ne9lr7DK8uNz13jNjyDFyUoGKUs%2BU6BbuxzwcASQqhN57qgOP%2BrMfCea5R8qgr8DebVwFdkX%2B9wapWYtaM6%2FNTttME0YisKFqoGiLOsNl%2FFkBCO2BYkVwcslR9diuXp1MIOs18h5kfHrOBcNcqvtmTeeHriNpwDNt9Cst3sycZZwzfJ9fqKyR1e01wrs0H7kMVVfiWLiSPfkWXjYknR8FDqFeGPmUicIT%2BajkwRHTojVvBXvufhf2dXzDZ3%2B4%2FMw0Nk0Rwh2IFyNoyLUMZytfQ%2FTASpt0UdAR5swoMTHvgY6pgF%2Fih0F7R66ZuuQDNnmfZGeo8oOq%2FbPQbU%2FhKW2cFQRUG%2Bp1X5c2IGM%2BlGt%2Bv0BWln5Uc4yAnsuPUax9xQr96gv2cVJ%2FG8fiyyDV8ZNVhx2r4b4SEveTk85w7jmTY5%2FWX%2BRRON76%2BUT%2FokUM%2BJIpHODIUoco5hN5vKhcwAmZZFNfc1FaSMR3XZ8uT3vk%2BtbDLFGOigFGh6sSBwDQn34NO2y6LqTX3pZ&X-Amz-Signature=f18e6b30cfd177565b478553900abfc733ab00812783f4877a288853ef3e09a7&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YAFMXY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH8FjN3LlWaOH1tNqYTj4hgD4DHx5ndsqe2DtCHY9BJaAiAxEBvVoMKaMFd6gKdqqxXiWGdsEAUwm7QOrfwz%2BEbOxyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlHjEQq%2BQNmqyLzGgKtwDwZL6u2%2FFfqzJE%2Btl0mJArw%2BqVTFOr63laeQiJKga8sjsc06UE4zz9EmbONk7pduBL%2FaSxDKCKn02hmu1SkzyXmjAPD9pf1%2Bf1aJNyQTX%2FxwGeOHMY%2Ft%2B51L%2F5aU4AWcMKpYfY0u9aFGJETnv%2FMuxfPdL0ki90BfjQZdSZmupAgjrxd%2FSk3FKEc1VHPhNY%2BkZ7nUXS1oxrefGaIPSlUbIu3NIweRFmoj2twe9TmmAdFry%2FgILj7j13Wh5ubC6DFnS24qIuBjF5SLtrgDA98KXnZU6XISXSvgOz1iwHlHL1w5q27eYsZj8BQr1agOrgMrkXO6q7szDJf%2BdibExYsBxD336Ne9lr7DK8uNz13jNjyDFyUoGKUs%2BU6BbuxzwcASQqhN57qgOP%2BrMfCea5R8qgr8DebVwFdkX%2B9wapWYtaM6%2FNTttME0YisKFqoGiLOsNl%2FFkBCO2BYkVwcslR9diuXp1MIOs18h5kfHrOBcNcqvtmTeeHriNpwDNt9Cst3sycZZwzfJ9fqKyR1e01wrs0H7kMVVfiWLiSPfkWXjYknR8FDqFeGPmUicIT%2BajkwRHTojVvBXvufhf2dXzDZ3%2B4%2FMw0Nk0Rwh2IFyNoyLUMZytfQ%2FTASpt0UdAR5swoMTHvgY6pgF%2Fih0F7R66ZuuQDNnmfZGeo8oOq%2FbPQbU%2FhKW2cFQRUG%2Bp1X5c2IGM%2BlGt%2Bv0BWln5Uc4yAnsuPUax9xQr96gv2cVJ%2FG8fiyyDV8ZNVhx2r4b4SEveTk85w7jmTY5%2FWX%2BRRON76%2BUT%2FokUM%2BJIpHODIUoco5hN5vKhcwAmZZFNfc1FaSMR3XZ8uT3vk%2BtbDLFGOigFGh6sSBwDQn34NO2y6LqTX3pZ&X-Amz-Signature=3370162a2d61343e7ba18fd1a2f8a3812ea6a1ce94f7b6c4d5bac0e1a4c829e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AG6KKJV%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCICvnEkdjRDuTeBxwjzX4NcwnFf9DnoZsz4cpSoy4cZjJAiEA4qU56MjLORiXMTpqlexabxH4OAgWmHT6EC8%2BAc1Pxj4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNof02SaEP%2Bb7P4J8yrcA1PtUmJaxx2w3aFxWD9J%2BrbDbVdZpUQTGLEhBlZrufXWQc8QBWLymk8NmZ746v1v98obbvx2Emi6Fv%2FsoeHpylKqrqI4JcRa0TtDXM2cYbZtH5PGh3oRdpEgNyeN3g3KFO30b3QF2e4ct8qyQVg45gu3YHefu%2FyadMaAgFmxM8MWRkJ%2FN0z1H1KybrbBIHL%2F%2F18gwBFfxGp3w4rGeY%2FB8ic81Ndn4XZ3tLZ9I7W27rJTJj%2BX5ncTD8spRC8y3YmUkJOW1v867ms6hiYbdofR8x7qrd7l3j0zidISxnq1euAnV1%2FMzRTiAT3fhH0NQd5VFaoruEV6XEknRAW2OITUYTXptkRG%2BYLR8JMzRpZble6AoN50%2Bq%2FUtFfVCKfmVI9apKdT8HqLoBVBIZJ4OoP0hvNjSLAy0Kk0oe0xq56AN4zIoavhbtnqAqCyylWUlGaJirV5xpl0COxxT%2FqstiB%2Fd4Dqq90WFL%2Fe6dcWwip155mYr7Fwu2PA0HujcN20ysGL4n1oRv%2BAfLcnWOnPlQiPAdyZASPQm7%2B45Bbyai7N6SfT3EJJw2uAiEuBlWPg7eJJjaTBSYf2a8xwZFWJMrq5Y1DZrImomUYKxtxSOHMsrtJDPAHNYakYrmrRH1rDMPTDx74GOqUB5r7%2FQYIshA9FDkh5JNfYR6ZX100C%2FwmI9Np4Pxrotpno8TxZgVjzRjHN%2BM9i6wQcRiuFddvXKCx9l45lY6Adtg8QV4RbWnNTF29WDjpHSFo0X6KSOMJWh2UagGbRku%2FpA%2F%2BEjSAsebcLUSe9rXSvKltBWdevuWP4o74nCuYaoxNrfHgYSYFGWPPe43ecFe5y5dSqBG4SOBV%2BBh6f8bws9GUUwGNE&X-Amz-Signature=c86f5d4ee702aeabe1edb57ae19b136cf97af79dd829489023d8384b1a75bd77&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVUVXKZM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQD2zyyESCIliUwp0onLeP%2BZFhGfQ8OpQB7ia1Clrl1TRAIhAN1f2T0A6KnZRS7y%2Bfj%2Fz5LbxV4aBER%2FOk2TmxKrZjAKKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqLvJzzpmu5OCAYPIq3APiuUGs5KF%2Bc0cnxJwPPp65l6RZHzfuq4dVMFMdZLtRMypiYrX%2FYoLtmKjA9iKP8MD%2BD2ujjRhDYWWNUjj4DYhDETss8knV%2BEBTQOsuCdyrZcNXsy%2BDHlm6Z9wd0dIaiippGh%2BWAHQrK4Rq1nojvfIRSzcf20U9MMBeSbrz%2FG%2FIwPlOgc2SNY83bUsR6PEKENS4k7heO2qwEww%2BD7YmlNw8JE%2BEvWOuBSVnfqwj05%2BZrhTBLrkCT02ZFJtrtV0iWb%2FPhDwrMqx8oRHwDbbEKxo1ZgI2RT7zHEZGlOTj7zxnBQVbQvRQX2ScPO6lP0%2BfAd73U0%2Fd23AN3c%2BpAvysNnmlGdtgUyA5pO1ZXWhaL%2FQTV0N4vqkbtczEGwoYm3DuNkAwQKfYJNVWw00U4k5usfGf7XL7IJCu5COFdpx6Q90CKwjImsHy1fnQ2fknlCl87jq2KPJrvhI8FJqnk3Ag9JoP%2BRZluKnhCLlH%2FdHVyXP0t9wfO96vAgQOZE29j%2F3qh%2FA8nzXk6i2BVb9xnL19am1RuY6FMtgEgbkeWok3NMpK4X4zgJtlufT569L69mgfSnjwmTxVQmG%2FA8NjaV0IdOT7Bx7kpfmPnzZbT3xCqO9D%2FVl9pNgAh0ymiaedJzCX0Me%2BBjqkASGup27XTAlIrbt6xNurRlz3r7DOJIFieNZ79E7ogQoudkNgfpMOCe1VrWSiK%2FIxuDoh9DbnOB8pyx5GdeR9cTkVn61r3jTjxbPQ9dJR9eIgEHWTZuKTov9Yl0%2BfSTwNBqEOu1xiIm4VYkxC0a5lEmBgz7IfJ5kF%2B%2Bvwl9sbtrKSV3ZPzNBObNRdNd8eIqmX4M5xHutzrK9A6ftHPDzan2WQC21P&X-Amz-Signature=ff9e870640d8533e7efb7412b8a0844a07dbc392344299791779bc4bf72ba45b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YAFMXY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIH8FjN3LlWaOH1tNqYTj4hgD4DHx5ndsqe2DtCHY9BJaAiAxEBvVoMKaMFd6gKdqqxXiWGdsEAUwm7QOrfwz%2BEbOxyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlHjEQq%2BQNmqyLzGgKtwDwZL6u2%2FFfqzJE%2Btl0mJArw%2BqVTFOr63laeQiJKga8sjsc06UE4zz9EmbONk7pduBL%2FaSxDKCKn02hmu1SkzyXmjAPD9pf1%2Bf1aJNyQTX%2FxwGeOHMY%2Ft%2B51L%2F5aU4AWcMKpYfY0u9aFGJETnv%2FMuxfPdL0ki90BfjQZdSZmupAgjrxd%2FSk3FKEc1VHPhNY%2BkZ7nUXS1oxrefGaIPSlUbIu3NIweRFmoj2twe9TmmAdFry%2FgILj7j13Wh5ubC6DFnS24qIuBjF5SLtrgDA98KXnZU6XISXSvgOz1iwHlHL1w5q27eYsZj8BQr1agOrgMrkXO6q7szDJf%2BdibExYsBxD336Ne9lr7DK8uNz13jNjyDFyUoGKUs%2BU6BbuxzwcASQqhN57qgOP%2BrMfCea5R8qgr8DebVwFdkX%2B9wapWYtaM6%2FNTttME0YisKFqoGiLOsNl%2FFkBCO2BYkVwcslR9diuXp1MIOs18h5kfHrOBcNcqvtmTeeHriNpwDNt9Cst3sycZZwzfJ9fqKyR1e01wrs0H7kMVVfiWLiSPfkWXjYknR8FDqFeGPmUicIT%2BajkwRHTojVvBXvufhf2dXzDZ3%2B4%2FMw0Nk0Rwh2IFyNoyLUMZytfQ%2FTASpt0UdAR5swoMTHvgY6pgF%2Fih0F7R66ZuuQDNnmfZGeo8oOq%2FbPQbU%2FhKW2cFQRUG%2Bp1X5c2IGM%2BlGt%2Bv0BWln5Uc4yAnsuPUax9xQr96gv2cVJ%2FG8fiyyDV8ZNVhx2r4b4SEveTk85w7jmTY5%2FWX%2BRRON76%2BUT%2FokUM%2BJIpHODIUoco5hN5vKhcwAmZZFNfc1FaSMR3XZ8uT3vk%2BtbDLFGOigFGh6sSBwDQn34NO2y6LqTX3pZ&X-Amz-Signature=9dcfb5375d3b8aa533bc4d84595fc0daae2593297612bfc92b6127c458c1294f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
