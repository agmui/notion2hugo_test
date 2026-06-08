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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=efb9f79e31bf71b37098b75a489de3e4b6a8faa148c2ef9c7faba3ddec5f8f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=120c1ae6ef9e49a8cb94bc7b4e957534a3f1e29bf00947c5838364fc24f6c17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=e7051713f35bf118944c60f5ef7075ddf16925ffe04087f1831b4d5b744c09ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=638def451b1081c0d9e1cc82b6a066bd4f407ca7e9cedd689c460b15357ca536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=19ebda9350a0655b59f2032a4251c0cb4352484ce9719ab09362184e2769663a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=c657ffddb273e0aa7ae795fbd79784153c13cdf37ebe937946485a246dfc87d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=b708cf464ef6999abaa63b6e444d0a9a79a2adb948a5d2bae6d43634b70cea0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=88ddd13b4cfb76a55231287bfbe61a24393c24ea5e01abed6f459fb33396e927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=9cb5d34eaa6b9aec8b318f4c9f3ebb48af7787edb695f5b1cf1ab5fce80a1954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=082f66e8dfc81ac22230d53c0eba591808f9d56fa161d55ef419a26ade2b86f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=29876c28b25106c51e1d0253defc1e639e65341f47eaba98fab1a66c68821dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=818a4c85ca72ac3e546277c4adf417682e0456d3ffb609e2c3b8ed2ffbf1c1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635PBJCFS%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T040323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnlZr0UJKNcJcAAg%2Bi%2BexsQJg5SPi%2FyZEn2j0LirZPWAiBpPBwTS42gtcfOJwWCIZRClDQZeTRDeEwpH%2FxpDaMI4iqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtsiKZEhou1ur4sNKtwDzRNlXY%2FIWl6yNMw0r5lJp6Y6w%2Fxj%2BrBNWbT5qFY0JOaznXRQlpNnBitMSzJtk%2B6JHH4OaczPUYVmREerQeOcS9%2FEsEDRaovke8SbPKsayXcrInCJyV5Q4V1nj%2B4AjLPCOcvcHAV4rO%2Fj2Lh6PgJdBNh0Ne8kGgVbG8tckgogYIfZgJOUeHEAC6HwswNKdY5zpD9b0j5MQNedb%2FtGcYe9Nf4X3Fl4i9bzE0ISb%2B464%2BPFOjlw12M5MYmAyKT339T1WGteKVw%2FQqjuPSTkmf4pJF5vLea7ZWDgEfMMNFYyeiYWR6Jdc66jt1klk34SkAWOwSKi3xS4SjuqIa51ahsFg8JHFcJS7r9gCV0oU3qgqLrwbLbxwg5GJUSzXXV9YJgbvHaOhJ%2BZHhRSUsXTWUepYG9Aob1ezFdEKEb%2FIuWASwplJbzX%2BVQIl0QiRKIDxmCiTQlg8u7GG%2B29o8iCvWD9bUp%2F4XfCnVBO%2FD5pB%2FCVtOKWFuPbg62%2BQ9FCd9nuubAoUIfjkznWXTtyU4mIY3LXA3VgpQqV8QaQkaQtfhuCN%2F3LbRS9GRq%2Bdy6RNUsp9H0RqTHuaqiVDT2rl5Nkv7ssmRexzMW8EvPqgrAbLRONUg6mDa9vMJZNfYJB8nswlMCY0QY6pgFxj6KAozn6fxsF7o3xXn0OUb06hM1bbkn0GcsUhjjEAS%2Bkl9fgzy10cFPZRTzQM7tNVnfWuSBp9HU2IqIfqmqgzOnQBJfu0EAtC2kUxm%2BR1svEmQsa4FWEHYRAioWy7fR3Z8o1B3F6roU9UTIUaoE4fec%2FpfgyHtyrH8b2ApJSlfhkDaMLmjmFhuZwEsbe9TVrU8iqgac%2FKuLt8SOrGNZwRMWhhX9r&X-Amz-Signature=78e403d02b35d5609a3f2f5e44d5a8a558112f9323755038f45a11f4a96e4e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
