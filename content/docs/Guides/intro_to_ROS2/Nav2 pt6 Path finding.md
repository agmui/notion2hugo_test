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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=b1c08e23bdd225b8b6b8f084bd51134421a8e493c653dba1fe4ac5d51baaaae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=fae73981e7ebc30ca6de79b83d576e605688c214f0b809fe96a711842068953c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=8356c98bbb47e817bf69374b68e30ee58475e43bbd7e16728dab03bf7cde91f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=0f4943af74763556ebabd731ce057a3c1644f66ec2b80782cccef3e73820d2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=9db6518b7d0f07b0264fb4d06cfb8d8ee5958f5494356167cd72df8841c3619a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=6e24b8267d6a373c366c146189443e734cc4e4eac5b3e0e9b51ad5e5f164c9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=7f3cc45627789fd0cd77f36a77a0dbdac310895b278d0370cfbfaec6a063f566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=5b86f7741fdcafa812e570d0b5b332bd3e075d8e75de547c684fa88f6c73fb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=8b3dd2bb26edadd5df52f40903b69be03263f33b4f9e04662bbf876968656880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=5ba42e0d2f23655eace007f5422c02af8efe695a9bca30bfd566bca6b142aa83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=3703a55d041421d9fdaa0e656bba701e43fe4e65bdd3049a883a233d6598b6ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=c3de0590a59ebbe8d210fdaf69fa210447f9f31b57f2c0a09b5977c1e78c7982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRQKF57%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCwOU2pTo25kZh0Y%2F0Pby7LGq8FVKVLLSt5vIkuKA6RVAIhAPV0l8fdH%2FGiqUxNjbDUFMND%2B48V%2F4QHSXLq9OcZ1MDDKv8DCGcQABoMNjM3NDIzMTgzODA1IgxmJLbT36FcY7uLpIQq3AMMsZqRkWKyO7BfAqWpTYjsoy8HXEuEhLbzghP07Q3EQohBjmOK%2BaLb1MAgOOywOZQvc2Yz69Jj7nMp%2BNkEjVfavgLT1H2snoQCzZb5Lu4GXe42iUrScvMDr5lC5BozxTdsj61U3mM5isvByuGt5FoInP02K8F%2Bj0%2FRVpx2PUHTKRnVj8fA5LISPEIeY8W4vNj%2FvJyL7KXOpE1Q8p9kVKJ0fatLB2ruAyNSDzYX%2Br8T05a5o9VerdLIDdOKJMEJpgOpshN2YTjvqizdjqUsH4yjWtZ7A5ql%2F72e46wn3joleCRC7fsHulzNMlRHS3jWs6XKbZSwwXlIsJg7KQCk%2B6fnRhnIV1Efx%2BM0DMAAFCcAg34sBHClN1h9TcDZmYHrNwiLufPBf84mY7PE3NC195uhYtncN8ZpLM4mVm35g1w89vE6OvYfv3ZV%2Fj2EDMx8yaIUVluXmJSvkb0xd6L5aRs3LfVofFo00d0ZK3HqRm2vXtiy19mTW0KdYv5oNDNWOfK2900RGww8nPIaRnXhPm8ZJ0njcaoqc5PIzzyksYaWvhLAQ2myGdwr9tGC3ZpuAsmcVeTWtvJw23K5GzAjdnmwDeeiETsXR7l2NoGjHNpz9wNaCPNi6H1u96%2F3ajDe1%2F7EBjqkAZmqxowQpSxnNqfb3%2B8Cwl7hKhArOkTxDWDHzirtWxZ7wumuAufgn8BsFybJg8xNkTa3D0eUWb8VefAClsEhWYuy75a1hHZMG8c9MoPfw5RPDO22L3P0SDC%2FPWGg8CMx6RbKHS43POTVvmIVOor6YfCm1cV5BSicOdtofk4h7jWilpDUKyoBXagTmSxNOWO%2Fd7xvLgE1Zv7RonuT%2B%2BIDST%2FCsFa2&X-Amz-Signature=eca3530257195c02402af45b77ad848f01d1ab8d17211c19c85548ebb6a98a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
