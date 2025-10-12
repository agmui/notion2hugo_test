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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=038ad8f69581b2914ba75430e5c986279e9bc714450b7bad56395e22495999c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=c7ba89d01401c8eee55adc9edf35c57dc0a2057ba1d1742d08caa9a54a0b3159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=90bc63f42c028cfaceffb09587e260263da4f740843ff072262892024e1ac268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=bf60b0358278c13833dd8b43ea8582f7e3a2345a40d1861050e8fef226500f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=8cb83843c0ae510c09bbc7306e9194e33152040f89d3dc2ce4f70edeb0d4f0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=4d4d250fe680b9347a60cbc16e0f7403224e44d670e61d56d45f9668478bf7b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=0aa1d3a8d14f9d3bccbe7728b29fa749cbde12f1215a97750931b0f478d8e5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=1cf050d7dfcce216d5628e4be65e0631cbedab819f87d9b6520b97fc2e470450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=70ddd888d13ab34e367f6c14f0995de5b955f7a9df8c3e6d967466185f061fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=2bd758469f11aafa61ccfed51764be849fa9a24330d9b9bce70a25560e5c9580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=f060a4b21ea3e6a6774cbf7091b363d9eca32cefbd6fda8c6a47a18ed3242323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=2b60c9499e4e8ef2a98ace6b531a8f4cfb51a1947735273de20e21c1e9b0f48e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR76DBTU%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCqbvBv%2FMVH2fqplj1bxtw610wQVKQlQwOwM5VfeFBmowIhAP8paPGcKeAeCPgNcjVaGk8pXeDxwjVJolMmQHHqxqq0Kv8DCCAQABoMNjM3NDIzMTgzODA1IgzYQXXkotK5U8CFCIgq3AONL7Pc4KZrzgYyrNHtl1Lr3vR5KREPys1ZiK4c7BZNFE226ux409hMaPy3DAiVpRt6UKOo8oIIGd6RhGA16f2f6VyqebtKO9b2ymkQgGaRG3M0D%2FNpw2gYRjRL0dDcddV9HJvtIjUZkrHDLos%2BC6YLkXr7B%2FQruQhPkpjyHU9Rvs7nMTnY4X8EyQoA5pwLHJUkS5nAq7Ue301fchY%2BuMtJ5p1e5904YVcee6z1xdauML5fu0JrDNQ9GokiQbYdDT9yZCzHEzgrW%2BKJdj94smZrgSJxxMTSXdRjFneyNKImlLLlBwDmtdXqSn%2FG%2F4oXO15X79%2Bvwc3gGYCouMcMSV%2BhwPeYGKs35OHZOUMtoID6rYLq8aiTEsg3Yuag61CBVjqlr1w5fF6amflAE%2FFIfikm%2BSBVufWqbXBzitAPGvrpmS9Qo9vplwd5jCT40wD4VkmMqkusGRVWew%2FeCk%2FxiuylwEMUMVFQG5YATywOdcDJ7Qeq%2BrNScdhbCjjmXuaOOVwkfcRS5t9In2SJurl92WZNOkCIc20CMobZW%2FYbZfErIj%2FH6A2qOAornlMO2kjp1lccHOpKGsPfmuhN8rj5Ax8zpe365tjxJgGVAR6ZDLoSCLIDvb6XI%2FpQAMXerTCPuavHBjqkASyWPHEwHm5SDWIpttpKaW3hVPwNL3sY8Jvxf8F0yCs9VL2R9S7V4Je0NOC1kNnRqziRK%2FW7hzK5WbQubxFKQeiXrzVTXwL5dQ6xlI6C3pV%2BVYSsfFUA3vskfkqeYiemTTsdMnhkgwuo7ElSyWnjg41clKBVlQYYRqYOzUEZmGdSrIrQDmECW65H5d%2BuJiXbOqFeIDMVEknFKxaE7NJk4R6trSam&X-Amz-Signature=a8c0765674e5724c742cc4b9dabba48008d34d32db1b02a34704aaaaefacd801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
