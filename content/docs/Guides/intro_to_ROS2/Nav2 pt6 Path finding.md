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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=a4f98442eb9791aa47c2c150962e98d23d50e56c60f0649a1f6bf7f77db465b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=ecfd103830acf1cca03968ae03cea3576b836133643fbf5a91fbc9f968415310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=ffd32db5f517306397a89a1dffa112f5eb42ae5a12fea9f7e454cdd595626aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=cefea74c397b02da6c6e9439012cf6ebcc85897f342b20fac0b9fa78d9c9bf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=7cc3c32bd9d29dfaf98f544155662423a21facd2f1140587976986392e7a75ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=564886a70e64080639b587f4125a7e45360640396881d1ec048e2bb68cdc8414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=060eb5b48ebc3d59b14e66529b5c9108ad4334dd679af515c9ffc7171280f661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=51dec089d980731da51abebf5afa5bffe77cd5b3288719f67b697738b26ee656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=d06c60384f8689257dda615941c2768e48274604e47adff9f4a9fb18d869d18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=339381ca44b926d365c7738e628a065b7180542754499aa8c78dc2780f0609ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=240c4d7e13c17c1f5502041afcec4bea2d57dd96dc4d66e48e36065b6dcf36b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=53bcbef9ed45a632f36dcc1c5ac2a16d8f91dda42aaeabc94fa379e2ad0313ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFDFWBDZ%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbMiCCRnrYrf36IyYIrJjQAH6kRi%2FZ%2FsdOBLIwn7525wIgWOObA8lK5k75e4CyGnl6DcAVJgEVg57JwUYa%2BZUzi%2B0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJnQpADSlRht9Do3fSrcA0TX70XrYeyc7rq5zjVX4KX0l%2Fs1BkQWN%2FkRiXnQ9mV5K%2Ff8w1FwzD8rI%2BSL5ADSe%2BNq5ww3KiYG41rx3WrfxmCpkKwT9Yd6RePXt3%2FTQcAWV%2BZKfeoEWLcvlCYZTCqhhHWfhNCA2G8Cl%2BeroFxe4rsuLamg3i5gxTfbeJUoEKq9Jtf4%2By5%2BJVY75Z3iuq4WbvfhZPJrNILvuQow2PRQitTL8T%2FdhSpvoP%2FVL3xtIm1PvCP9%2Bw0Fb4cmp2wdRcMeJzw5QQUdeDZ0eofwKvVnPU8MEp74kPS7Fua8VngwQGO%2F1YdLBLYy3wA4Loielc%2BLCgxO3eq7a8KHcjT1eZ0dCP45Z%2BGbfIxRVzc8hxy4t%2FL1JlXITQucgVdsjYFhUWQ766O8%2FwSTbd9d3YN6O9AqAJH%2B4oa6fl2uRtcvRJNrd2ze8OODQJwO6yJcQTVXAwNzosr6RwShVGDxUTi8ARLhAafmFB0y3Dj6MU9ynEntvmAd7OoBx1DFB%2F7Yuxs3miLaesrZnSjY9K9CMt2u5Ncp7sRmgh6Op42HEThsvqFkS%2F6dqGKMdvBXJ%2FfRRRes7sfLkZK4pkvkbrwDnRsIt14dHfM7rFX7fYYgpHIK3nGu39ln8wCp%2BpdkX75a%2FwkKMJGUwcoGOqUBGH0Ghbwg03NdfUXOO6EqmaQo7Z9GeTJe8FT8Jo7C1qB23C6287jvPevQCmnVv9cdBruVj6ejDRQlHtnCgnjYP3Ty50m8JV8lTqErjBazyxBLrh9egrXpZs5hnLnS59uh%2FKHx98Jph5%2FIyJWvWvI%2BjZl5TKh7rFD4NFhJxYcawIYmTcjkuwDPdqDwuObQ4C9qZR4uRPb58t5f73mjgMbzpedMq%2BJn&X-Amz-Signature=87e23b12f25ce396fec98729640efece10dc9934b223131c04afcf1092689f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
