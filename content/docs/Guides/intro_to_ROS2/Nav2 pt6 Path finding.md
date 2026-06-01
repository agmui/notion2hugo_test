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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=c257c32c2acf20567c89c2f153a45950e77e2741cce0c2a9d712922adef00feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=5fa1156fead852fd47ba1e88bbb2696675299a7f4483881fb6476572b7c06b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=cc7a574e62be9823ba8dac55d64b98980ac71191af866242d4f6d95eb50f2d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=4c592a85fd220d1040b34dd2ec567ab3553f96eb6353fc5a8f0eab26efeb27ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=7f73163d9c2dc73506fd4fee14a80de77b04ba78de75277617249a6c16a30487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=cdf9d44dcca9a71986cb018d12397d4c4392d6c5902af0977d163b537a7de8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=c6ef4df0630d0ece38dace2d909b61534af0be528d1f1db01d2071ea4aacf12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=5be79e1d9a24eef8bf7a33947f7155d7bfea49abaa0b07366dc9f3680a361b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=6cd3821f2b8e805dfa61b0e74a769c8d16402a8b6ec9dd5cdb1272689c369328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=da3ec58f41c5dc8308e76c2455a30a9dfbc1fcc6ac59ad80e7e3920ddc67fdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=9719f3c5f15de6a3bd8efc058a10829d548f6688809d77702a7c6ae328e05182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=239381650b868e28f09491da75473c368981b186ef372b32d7b7270f25f3066c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQLHJB4%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCDFc7bXBT%2FGGp13kqzd3o9ylMEWOK6YbGXpWchrXaXPAIgCQrpwVWFkeSIfo8QbTrs0ddvviphiAh6j%2F%2BAWC6Q17wq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDAcnNDb15AgNhOBe9ircA9H8DmbO%2FB82jo%2FOPEg70ocFoKG9U6jPFv%2B%2FAYqhg5gMPxLSrQOj%2FUQoA0OK4hbCuf22IfUa6AQg8eP7cP%2BN1W2itAP9n9pwA9HJkc4NlXttTtSv0it1wPHxp3AYD9DhPHUW46LP5lVjFucwRd8p5ChbHWwph8WQd34CHJIy2pdb8T0I0n0EJHOhyn6v27MVY3L44he87%2BMBli2V%2FXIPUjtsZSTFgMuIUhrtZpv2aIENkb0LepvRzpwOUIs4lhFh3ij9XUBkMYHtt04DIsEGaRV26XtgaKpfIS%2FeFirzV614oAJa8wWTqkQNMNxHk%2BWMgVrWjUFtwcWRAYBC2zBlDfQ2QjPIzJR8%2FDx0vAxN%2B%2F%2Bs9%2BzAODm%2Func51T6BehNgVm5mRp49dMK2ApwOrUDMT9HoXuP3uKlidgQzBU4ZBCOgWVUZNqXboXtlv0IxT9qbUuZP0bufRTPjOU2vcZCFqK7BW3dxK%2BjGCn0HhEKSwwxg5UevZsGWLEJ86P%2FyTe5P8sHgCL83BDAiAtEsfoelm7TeLRMx2zDkArB99xlQd9ew4RymH9ZRRqjg3MC3BXnH34Vr2GKa5bZCn4bDU7%2BNrEVUjQrrnJy9ATKRH1sshPVZnMCqPbNL%2BWw%2BVyKuMPSl89AGOqUBFx3qLhUpi5dH5845VGUpxpoRLLN8dLteX4WMIUH7PxJnG9x7YqyLnqhPz2%2BMy6UuqJinzZ6Zm3F%2B4OvHPg6DnTRqniaWmt1oJjmXCYYxuIb%2F2yI6VgMsD%2FZejCoerip35QXe4qAuTwGQ%2BWis%2FHvBfv3q3y3rjUvcbL%2Bh3FEbR3FfvQi4fX1EZc%2FAmYC8SxKoUaMwtk0m0qQHFa0%2B0S0aJB8rzGJL&X-Amz-Signature=ea5f837e6cfb7d5190484361d7a5a1ad5bc10a85d478c5f77a5f485a6959e800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
