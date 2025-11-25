---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=06725b6cfbb231f86a05f98572e0d158427e01941ecae9a7ca74a99be4da42d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}


#### Outputs:

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=16ef30e15189409d99fac5220a122f4989aff1450a6aa896a69e7993b248dcfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=fb79e52cb6c060f7db5f28f42e61d3c927f3bc940a5bc97d827b67f292c8c3e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=7b2c1f8b496c9156e29bde06d289f2711a22b3d8429b47779064b8e115c4001e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=2111813aa6b3a1358e1c8ee72bf0df83e9487498f82beac284b6b6d7bd3167f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=215a1ca881d66db8609f5b9f24300aa6c206038020c0e2e1502920079996b6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=2ca2b23c13e298662899399a5d59543a432569dc4a438797cc8f090db8d05596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=9b8e00509a909ea78b69571d9a74cd45667e660083a9f8555bd053e6246c0376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=736475819f828fffe294bc4c105391be6ebf5766807f1d68dfa820e264d757e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=1a49c87663311f003be5f5df07dfa2abad489e67bd40ee689cfc496ac593e82a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=bba1073df17e2a75afafe1d7906a9118238c5130a76c052685801ae84fbffa3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=b13a5e0883b37b0af7832872a5a4c46cc6f1a54d5eb763a96553af2227b07a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3I2J4C%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGzKbfCax3zbaSnGcmqSD0UcJgszyao%2BYGyPgPva6XKAiBiuIr6v7%2BBYcRGUTXcemEmvr%2BtvGu4qhXJVxGA%2FzgLuyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSVYJKIAvB%2F5B3%2FkGKtwDLqH3xNKSyHp8FEu9VCgAJHTm1IbXgSV4GETF30UCe3eR%2FUcx3ERWq3wXyKc6SbJhQ6zfUcPiP9BBV3Zt%2Bf81gWiw%2BA3D7PXrfE%2Bpw7dhBbAX%2FcRBEWA47VyiP%2Bh8KK0Cr84tczmv0hcqzAPjZy2gPVyo0Km9bczXqluPxHm5gbffoQOQv%2B88HRDRF3dpKSK6dX6Ev%2BaQ1Y%2FIjVDvTxKv3ZqiWI6tgI0yxUPplfvywZK%2BET85en1wvXOV2bs947ZiSkcxx6dPaxtrX51GRHI693uJSqqO4YTlAU4o9AKb%2FMeft%2B%2BqMTF7UAQddTxct%2BnHO7h%2F7u0RQCH0UMX19GDMO7jsAREcC9BDPnpLynHy1PWytZ1gpinvcvYxjmn8R%2FQIyovez%2Bd3%2BzM1FuFLoV5QwBbqS959TG2Tpz8VUoF%2FVgouCYRQv4boZh3L8i2jU%2BkgX4qz74oB6wU7rHL7ZCJZZKPy0mRpTjPCMVcTqpv5553nPnVYTiUevMHc4IUVNkBRM2OF2NEO3tVz7q9B%2B8wc31P8qCS%2F%2FIZ59szgBsku6X2S%2Bl3ItJiQeFDr5IC1qbBB9Ph%2BppetyUx1A2uC3FVEF49YIvTm8JhN4AekV%2BQyAeeNGSxZCtDszZpWQpMwpcuTyQY6pgEDHHv8FwTwcMMF3CNBqOB%2BKQP5UOceyaKtV935Y5kdDfOIgdrsA3CukyNOTu0K1RriWiP1LTB8njW2uT0z%2FXAtVK8scUhumpsmWioE%2FKx2cCnr38du%2BYSej9kUgImwALhZKUqqVsYoSynyBU9TQ4H8UKJ3BSK58rKqNM309gSdhhETCSXUaZ5dtmtZerLx6gSEFd1TrggDjEScxD%2B4zgeBLacfxuZ9&X-Amz-Signature=d72a7ebd4e2d6f569aa6bac71a91da44e85590cb9ba92e50ee1c5918d39db210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
