---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=37a2d68670d86c71533c4a46eb0daa5f9bda2101a94267a7ccc514719faad33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=31430acffc56ef6a3437191fbc7bd4d4dbb6b2c7d572e6bb0b453fb95adebf56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=9d586ccf68fa55248186b4b2434eda328a0271dce0902ffb3c5121ab2567c80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=9ed63a54d7b63b48ffaf0d5840c76eb65edb8e456f6b1c72429ea8dced67074a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=029afe604e73cf71c3cd20b458f5250da79a3c2acdd38eef07853d76fd93cfe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=0aa9c34992045f546cbccf5c62fdcd312971f69a7ca9d97a759da68e1bf69064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=d9fd966418b54e825593a81ee5da31f5760bbb42450e5e3d41daeb6f1ebc3639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=b4ba6d6597f29396bbdd0f2bde7bdc6f601f4ca23325593365d0ac4bea8c7c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=4145352b8286fee4e6415ae7953f0f5e59f9d6c898f7a8b90181f3f7a9b2e180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=49f0bec2508a48caa15859b4ae356ffd9eddc4f0232c376634b258560da90339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=f09bff7f311fbf21b1be2254a7cc15925b9ad2576121c395c15f5ebb356cc061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=2a7fb69df62bc513546b323bd7c393a753e2273df3ee4030e72814e09b91aba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICMWIFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEUk3sUCT%2BZpIB7eVK6%2Frdgqyp%2FLe18aSx7mVsLMYnswIhAKKqM%2F6G2ffeZQBIMxoN%2B04le5747llBESyRBwIm%2Bi16Kv8DCBAQABoMNjM3NDIzMTgzODA1IgysM29GBCjffuqyR5oq3AOTA6r4DUDVLmFVYVuvkeE1KSvqaoN3QaO3MwCNeyrBmbAKjHZ%2FGdxIXyYvglw0gerGKpXww3qZNo4FoyLQp5W22osU1aTo4Aq5OVXOpJCIvGfzd6BfSHJV1s0jnSawqndTlBGHawQjJml%2BeWe3BHoXMAOhoakG7xth4lHWgj%2FgMx4%2BMzp2F%2FCfzJ8FzzEnzl%2BBP%2BwxQ2WCXsNRy0FRf3BRf2PnRjOhAhhSEIlTMOkG5KfoA97cEzfh5GuZd9URiZKm8dcioHc1TTtQwnx3uqIj9voYl81ZDfuxb6Isi1Y9GeXVelcALnbHOTybJxvhgSip4xX1lvf5wvMwo5WIYQ8hXgaYH3hPr4bgTAJTW5qRMgsA7PB%2FqH7OAzJTQdbr5%2FiSfXEWpq36ervFW%2FTf074TY6c%2F3xaRkQK39S%2BO%2FJv93iiN8EZ%2Bq8PDAln%2B%2FsiNAN7mWdRfo4vRricbUNrBfgvllXjOhC35ylheVyGgxSWCTTt23ho3Y64R%2BzEHg1noWmJiBAO8qruuS4yBiZ14DVmN8z6D6dmhxwUMQDXD%2BTu9z36UesPJsaKvOlPjVsLb5ug1iZYND52cbBE2yzJ2d5jD2LQsVQsEyn5kO9UrqVBDNhaw7c6uRsaq72R%2BpzCL8LbEBjqkAaJvYcXDbFvJ2unctnwUy6gISMxociLFqDT6NmLpHeOogO81YlbN8KhJwg88exF4YBVOCA%2BuXScM6xJAa1Bi4PjHvBHda56AOijuB140DJJKHjCxjlnA1m096aWqViodnywwwoYsAsfiHVe5Bn4XBXPQhunpTf8AjQrUQ0hBYjbtbOlkIKfOcAN0bktg1bP6Dd9peasDbMczDV9emeEsKfMVC7TE&X-Amz-Signature=e901e73c78b4eb8db22d6b35cef32b5d96b29ff39ec6fa2762587b04572bf88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
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

# Nav2 settings

TODO: change footprint?
