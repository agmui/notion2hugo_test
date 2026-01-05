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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=28c875921aafefcb8636e2c3bfb81588e6fdc4420241401560986ce682ffc9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=7b6cebacf6e8bb0d37473520cb0d364343cb0afc9460f88b2bff986a061741ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=33b4ecf9c66dbf92129625e8959fec7541df260fb9a04390b8776ecd3614004f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=3745a83e25a3012c7ec31af1a285febadfc17301561c66e965336635894545c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=c0dc58388ff34087f9639eaeede7d6e3803c903400c530858f855af4a3ee617b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=532e0d23552611761c400ced432eec40704c5c8c915ff3967c9403088d0f7449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=9c6faa13cf463be204b09c15db7604edeaa74d0fbb984cac57a7681bd2738d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=52e6bf1c3cf5ae12c927bf0b393994bea256803fac603c3d9c4855d774233916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=5a62442bd623f98b98843136ec8317b47c26d44242500102b2fcb42b13daf999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=c6ba6c4388784a32950bdfbebf4882fdf7c1760ff16d6df8e3f9ee31fc5471a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=3b9df4920be8404408c16ab05d7bf0d2a2c45fb18c3d30dad548f6fc52ae8574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=7c75a6ee990da4ce9c65838c82b2f689c03a54b14b4a9284b7362c92ebbc5912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BG7C2GP%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDd%2FQMRAvkx4cK3lzwr6F3j5Azi5OUVZRj2KrhNyIdo2AIgMGPu9F9XcSBIDo0pISYXsClodMU7UWrF5BJHctvG%2Bzcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDL%2B8Vz0oapJ8Ks0mvircAzZOVYC5FQ4uMyKa4KJuOPWXDAzNFBh%2BgeBuar3VwPOd%2B4s1E2PU0DClZYaewhc%2BOlq%2Fd%2FL5iTyihymBmrwl74fiMbaxZqNFSMZMLjpBkPmGYCnLuQ5chMSLqdfd2x9J1WwS178SmRWwFZCpFDcX70FBgLKDYEd3mPZXme%2FYSJ9RUhkMBS3SmpEjHoIYGck7eYQgcShjd0P7uSU4d1U%2Fnsp5%2BNMyMymwUJPZLR8eJ3Kfd%2BBRKYYwj4pHHGTTMN4SNCfR639hO49s%2BZ0kkdBhO%2F0xfydJMFKjrcpF6Irz%2Bkn5bQhc86EGrKfzMJUxRj%2Bu8oKShpjavFVzI8BnKGIp2Gav3DMnZr2JGW%2BY1GmHtw%2BogfFUqe1gvg2EPkzu2JW5RoLOssEl%2BneIgSuDHJi9OJ3Go7GfJY7QmNLxNzksRuuFpbGNUngZh13qm5juKqluZOn%2Fw76mpqHu8htxIzNraLB33KaX8mMflcJ%2FWNU5%2Fn6t0EWH3MMBpqtrepDtA%2BA5fCjozAGGcJM7%2BXHgTN44POOdJMS2cJNRLr3RfzJw%2B4nDFYKyNGj3u%2BS2B%2FaZhVLHTK2%2BVdec3tCQpT1Ll6SR0aijqZnC%2BQHX6HMbQebwh9zpbu%2FEnB1W1e70O7jYMN2U68oGOqUBr56EUZwScHOJh05OXgRwIgYggr6u23sG%2B6pvUUfujGkMDOACN9cThdHW6KlpJqFN7r4LfI2qWTqS8Vs%2BNSARkq6ek2RVdV8Tpn9PF3KoXg6KVNlfjCNPOo8vQAaXjcCGhHQx3Xa1a4ORvDqrSNp73qytbUjIrcqqj53fHNvN%2ByUsWMzVURtYRqjPBAxzgRZtlo07hnc278qi0nc8e4sScYR%2B0TmA&X-Amz-Signature=521fe658241d2a422926da90d1ddafb8070539f72951b0877f3c5438ddcb234e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
