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

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYKRY6S%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCtAH%2FzksrK1K6tcOAKn8z%2FiO9KWY96ut%2Fz30HGm%2BBx6wIgJXl81%2B13sN3KwBPbJrBeSAH2Yzt787cRijx1Bz%2Fd6Mcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMEe%2F2aWvl0ZolIrFSrcA97VKAdimyr7LbA0QHtNwjJTAISDbvXUjb3n6FXZAeLEyuVcE4fw1gkcP5M723E3XFkZjKw0Ci6jBDPDDJXXi5f3IndGOhAKCW0aHfc1gLKpQfV9L9bmJP3qx9%2Bx6pjoQzGtQOz%2Ba9qUNlhke3KDbAXmasp5uaDYsG4H8ucmZWO%2Fo1vW0JgLJxi5BrfMXv824IPrqE%2B5yA87Hu4tNivqyTe2ih0fhTOeOKk8xrU1L35O%2FryeGLYoKxqisGL2lXsBVQ%2BTAzLnUiR%2B5xgqYxILNgKzF7AmDdOcbTbtd5DaLIMQxjgUU95b70tLzk8UoR0r7iqyf5x2i%2Bskf%2BurLfvq3TtfbbVKR3Qri3lUReige%2F7A7AaX7dpvWeZY%2BJhvK55lnUznXFr0qtBWB9JWsIuzYx0wgrCO7uE0%2FbJI3%2B0hxlbMRFlKMO6I0EoCtXvQtvzVIWvhamSZFjFZEnEq%2FByMPeeIqJ%2FRrNjMqr2xUiK0aMnYwDzFG0K0WaWaMQkplaRYQi9wy9YfitaHElyLUZN5LTCOo9lFyzzs89YfHAvnAhigYs8H0e3kih5s%2FWPDmxlblLWEJBjfLIX%2FvaNpQ2qBOZ32nmhtcDhzFYkmNykWuF2TW1r7Pinq3kttryNpMKDu4cMGOqUBZtwaZvQclqR8GYWLpEBBAfF6EtO1TpqXoiEi9Z1zIiMcBxBTYwNeMANX5aX%2FcO7%2F9Dz6Di5dbSNzNpCUYbd5mRJzKwx6AKt0xlU%2Fex57QBke1KGpMOZmWwfTdyM0NptNx7z2sPtokIbjB1Ry%2BuInARWx5CY9ltESUJdVVVEVe2ZVhmHWK7AHzAXTVb4kl%2BZ2ahQoNYlpat6ef8APVLY4EChOSjud&X-Amz-Signature=ce1aa9724d1eeec46711f0993d629d17e8d444fb6dbe7d1202aa7b9537414cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYKRY6S%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCtAH%2FzksrK1K6tcOAKn8z%2FiO9KWY96ut%2Fz30HGm%2BBx6wIgJXl81%2B13sN3KwBPbJrBeSAH2Yzt787cRijx1Bz%2Fd6Mcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMEe%2F2aWvl0ZolIrFSrcA97VKAdimyr7LbA0QHtNwjJTAISDbvXUjb3n6FXZAeLEyuVcE4fw1gkcP5M723E3XFkZjKw0Ci6jBDPDDJXXi5f3IndGOhAKCW0aHfc1gLKpQfV9L9bmJP3qx9%2Bx6pjoQzGtQOz%2Ba9qUNlhke3KDbAXmasp5uaDYsG4H8ucmZWO%2Fo1vW0JgLJxi5BrfMXv824IPrqE%2B5yA87Hu4tNivqyTe2ih0fhTOeOKk8xrU1L35O%2FryeGLYoKxqisGL2lXsBVQ%2BTAzLnUiR%2B5xgqYxILNgKzF7AmDdOcbTbtd5DaLIMQxjgUU95b70tLzk8UoR0r7iqyf5x2i%2Bskf%2BurLfvq3TtfbbVKR3Qri3lUReige%2F7A7AaX7dpvWeZY%2BJhvK55lnUznXFr0qtBWB9JWsIuzYx0wgrCO7uE0%2FbJI3%2B0hxlbMRFlKMO6I0EoCtXvQtvzVIWvhamSZFjFZEnEq%2FByMPeeIqJ%2FRrNjMqr2xUiK0aMnYwDzFG0K0WaWaMQkplaRYQi9wy9YfitaHElyLUZN5LTCOo9lFyzzs89YfHAvnAhigYs8H0e3kih5s%2FWPDmxlblLWEJBjfLIX%2FvaNpQ2qBOZ32nmhtcDhzFYkmNykWuF2TW1r7Pinq3kttryNpMKDu4cMGOqUBZtwaZvQclqR8GYWLpEBBAfF6EtO1TpqXoiEi9Z1zIiMcBxBTYwNeMANX5aX%2FcO7%2F9Dz6Di5dbSNzNpCUYbd5mRJzKwx6AKt0xlU%2Fex57QBke1KGpMOZmWwfTdyM0NptNx7z2sPtokIbjB1Ry%2BuInARWx5CY9ltESUJdVVVEVe2ZVhmHWK7AHzAXTVb4kl%2BZ2ahQoNYlpat6ef8APVLY4EChOSjud&X-Amz-Signature=5c4bea05e7e7fd105d174f60193a06fd31e68d6ee044c0621d4ec2950292ca2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYKRY6S%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCtAH%2FzksrK1K6tcOAKn8z%2FiO9KWY96ut%2Fz30HGm%2BBx6wIgJXl81%2B13sN3KwBPbJrBeSAH2Yzt787cRijx1Bz%2Fd6Mcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMEe%2F2aWvl0ZolIrFSrcA97VKAdimyr7LbA0QHtNwjJTAISDbvXUjb3n6FXZAeLEyuVcE4fw1gkcP5M723E3XFkZjKw0Ci6jBDPDDJXXi5f3IndGOhAKCW0aHfc1gLKpQfV9L9bmJP3qx9%2Bx6pjoQzGtQOz%2Ba9qUNlhke3KDbAXmasp5uaDYsG4H8ucmZWO%2Fo1vW0JgLJxi5BrfMXv824IPrqE%2B5yA87Hu4tNivqyTe2ih0fhTOeOKk8xrU1L35O%2FryeGLYoKxqisGL2lXsBVQ%2BTAzLnUiR%2B5xgqYxILNgKzF7AmDdOcbTbtd5DaLIMQxjgUU95b70tLzk8UoR0r7iqyf5x2i%2Bskf%2BurLfvq3TtfbbVKR3Qri3lUReige%2F7A7AaX7dpvWeZY%2BJhvK55lnUznXFr0qtBWB9JWsIuzYx0wgrCO7uE0%2FbJI3%2B0hxlbMRFlKMO6I0EoCtXvQtvzVIWvhamSZFjFZEnEq%2FByMPeeIqJ%2FRrNjMqr2xUiK0aMnYwDzFG0K0WaWaMQkplaRYQi9wy9YfitaHElyLUZN5LTCOo9lFyzzs89YfHAvnAhigYs8H0e3kih5s%2FWPDmxlblLWEJBjfLIX%2FvaNpQ2qBOZ32nmhtcDhzFYkmNykWuF2TW1r7Pinq3kttryNpMKDu4cMGOqUBZtwaZvQclqR8GYWLpEBBAfF6EtO1TpqXoiEi9Z1zIiMcBxBTYwNeMANX5aX%2FcO7%2F9Dz6Di5dbSNzNpCUYbd5mRJzKwx6AKt0xlU%2Fex57QBke1KGpMOZmWwfTdyM0NptNx7z2sPtokIbjB1Ry%2BuInARWx5CY9ltESUJdVVVEVe2ZVhmHWK7AHzAXTVb4kl%2BZ2ahQoNYlpat6ef8APVLY4EChOSjud&X-Amz-Signature=1c7ffe23feeb0d01a47e41a30e34a17a4fcf069c6f5951407753022a1171fc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGWFZ4FV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCdCN9Revsw7wT054WnnmCfTbvRPqFIJMLkDYc2TVZqIgIgexjt5ZW2GRuztUQkbeBco7%2FL5J3w8u5XE9Jhg1CMlqMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN%2BDiJvWDO6bgGlk%2BCrcA5sv5hrcKfiwLnemAGyaoKbS0vuZO0kf8w%2FzvRhGhBe%2FEMRdA9xkDg2oboT%2B%2FPVfWwc5KDfEWoqKb0YIbBZc1kOhQZYfUFObvh4RApdWy%2BMPzoEEpv4RoEM509NAgbHwlnf21C%2BYi9dA1DJOxgmZGwD%2B8ea3RyDC5CQ4zSFhb5IylpJkJ%2FQOX%2FJ30dIaO8dIzcaPGwQkoC78k5%2B3m8GzXEF%2Bhzov2RN%2BoF%2FYecNkcQiS%2FOHgGA6LvRiUXfob%2BVHlUJH9jTbn%2FzkGpKCTtl8gtc8Ja6XneKSd7CcxDpzQdp1qcbtTR8Wrr9NuF3KIhmaGsN2gZXZ3cDYxZclkW0eHC5UBC%2BXQppgSC2DLLE67IGzvuov8VxsYdRoWpiKfFmz4My7ChQ%2BR2Fn06W9Z9kimguitRMFOBuYdDm2mTo%2ByXaaAP466Xqgv3U58PFJCvpqnDv4xYBTVdEhHqujDHRWp4EGz%2FiCngeZ1WMcmPEwXApifXyTK0KBiG26EvT%2B4qas4M7jqwW5vubgi49cWBocx7mzVw6ZMUngA3zfg42t8NX4UQGfIux%2BlW6w%2F3W7j2%2B%2BfFidjFs1kGHgDPcWs6XsNjHOwGo%2BL0Cuc1et2f1RocJ5AcMbWOmFlkawNwvKPMJLu4cMGOqUBBu4ym9o6yKdEFIsmZopPk2CimOpO5UFpP4Td%2FIV%2BWJOI0r%2BCy12IKmVWWxJY91FGgVdzhDcgy7qsy%2B0vFL4aEHdptycsF9oauXUj0uGk4C82AaeaO5leLYo0MXcCJ7mC72K2a4f3FlCYWizuJWlZHkZD2sxhW8fU%2FUjtqe5gqsMsfiVro5mDXBS9fOQRCQCl%2FoD5vM1mSIXty4w4CXPRxVS2WN5e&X-Amz-Signature=8f0d36f84fd32e9ec75a68e928414643bc144b7195fabe27010aa0e8d1e728c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJPMX34A%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD%2FXEJC8RXom4cVouWGGQhmUciHTumCzfCATU6YqYl9nwIgcD57wD6bBS1t8hUr7OvJ7EulEJ%2BwuDd2ghzhO1Roi6Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJTY8w1wegbFWd2ssircAwcwMZilnz1AU9taz7qabSnwCZSFz8SX%2BRllLpETRpSIs4lqcPoJmqY7yppEsWklwR7UsMBBFRZRLy1DDjU%2FI0Lft6hI59ULv3OZcdZpgXHHd0lA5CUz42cS0faI%2FNi8DfYJuVRTMAdFsThU6Ps5YJHcQ9CLqFbPc0XLMatGBip06lzzqxb%2F2qXwlduDi2F1lUvpwAnYOOKxGYgOFdSCzo1ZDElxfAeI6%2BB6EiuZlluha%2FvZ2sZy58FaV%2BGK59TuRAIVnaD54hEX1A5jMIZMUf1PKDM%2Fj6GtOkDUfOFaxq%2F81%2Btxr3jkXn%2F4pfJa%2FKwWdiHg8ob%2BLIwKYvhUg9qclNBVKLw%2FGHhWieU8GeX6Ec5KFr2F2fQRAtyWC6EBS6%2FR5OmsJaqs8OQfslyUbUTh3ktbjgPaPwHp4XYKiJIvQmBdufJRkNttkDKh%2F704GEqOhZYjF2zSD18ReQOWnToGwW2aXoz87%2Be0bmcWRkuvbSW6qk%2Bk1KREuvhZE3fv%2FTPD1PcCWJmgeNC4ut7w2sJ%2BUYdnMNZfdBaiaX5GRz%2FZ3cC%2Fi8ET%2B1iwgxN%2Ftq6lvFDxMkkbR8Q3UX%2FxgTcLrcDH4SvOpMSZtuMEMiImH9GE6HfJAQnsvHYrrGAFXTzbMK%2Fu4cMGOqUBTcwLFrqjswcOb4gsn7W3kFwgbo5FkK1k7PyNZKiD9gZS%2FQJEw7KjgJTEKUm6WpN7ETa7bs5ZJ5pVVMYquNt5aReBs7Z2eS6IBB0IZpWvE8MihkqnnPFjrQay7nMpnoNwVzR22ew5U5twLdiNBkne0X%2B1TTB12O4fh1xuLnaxQKnEvflw3p%2BF%2FzKDGQV1WlpSoErF5mu0vPX5rLYgL8%2BHXKtlsyrZ&X-Amz-Signature=a27e578b96d139202ef0ab4259c9fc63132b21683ab086008a210899ecfab45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYKRY6S%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCtAH%2FzksrK1K6tcOAKn8z%2FiO9KWY96ut%2Fz30HGm%2BBx6wIgJXl81%2B13sN3KwBPbJrBeSAH2Yzt787cRijx1Bz%2Fd6Mcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMEe%2F2aWvl0ZolIrFSrcA97VKAdimyr7LbA0QHtNwjJTAISDbvXUjb3n6FXZAeLEyuVcE4fw1gkcP5M723E3XFkZjKw0Ci6jBDPDDJXXi5f3IndGOhAKCW0aHfc1gLKpQfV9L9bmJP3qx9%2Bx6pjoQzGtQOz%2Ba9qUNlhke3KDbAXmasp5uaDYsG4H8ucmZWO%2Fo1vW0JgLJxi5BrfMXv824IPrqE%2B5yA87Hu4tNivqyTe2ih0fhTOeOKk8xrU1L35O%2FryeGLYoKxqisGL2lXsBVQ%2BTAzLnUiR%2B5xgqYxILNgKzF7AmDdOcbTbtd5DaLIMQxjgUU95b70tLzk8UoR0r7iqyf5x2i%2Bskf%2BurLfvq3TtfbbVKR3Qri3lUReige%2F7A7AaX7dpvWeZY%2BJhvK55lnUznXFr0qtBWB9JWsIuzYx0wgrCO7uE0%2FbJI3%2B0hxlbMRFlKMO6I0EoCtXvQtvzVIWvhamSZFjFZEnEq%2FByMPeeIqJ%2FRrNjMqr2xUiK0aMnYwDzFG0K0WaWaMQkplaRYQi9wy9YfitaHElyLUZN5LTCOo9lFyzzs89YfHAvnAhigYs8H0e3kih5s%2FWPDmxlblLWEJBjfLIX%2FvaNpQ2qBOZ32nmhtcDhzFYkmNykWuF2TW1r7Pinq3kttryNpMKDu4cMGOqUBZtwaZvQclqR8GYWLpEBBAfF6EtO1TpqXoiEi9Z1zIiMcBxBTYwNeMANX5aX%2FcO7%2F9Dz6Di5dbSNzNpCUYbd5mRJzKwx6AKt0xlU%2Fex57QBke1KGpMOZmWwfTdyM0NptNx7z2sPtokIbjB1Ry%2BuInARWx5CY9ltESUJdVVVEVe2ZVhmHWK7AHzAXTVb4kl%2BZ2ahQoNYlpat6ef8APVLY4EChOSjud&X-Amz-Signature=5f8af44cdde2fc2c65597f1bfd1c303e079e6fc62f2eb8401f8fbac8abf71b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
