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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=61f9fdbb4bb05ff302c3e9ad17d756e8cc4e67753c344ef09185525a42024f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=4e4cc0dfeed1269a993ec1ac23d86a6b0136f66aa0e33a3179e410e9d88855b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=3f53c7d8ef37326819028f813030dab8d573afff2ac448a03e9686aa2f8f94e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=2464e36dd9dcfd3fb0128ad86f88168ace8b005a1ca50ed90bdd7dc434f43e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=d5f768234679b9aa55128a91a7cbd8acd9df0628ef903d5574220e87ef7d9b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=12bbf5f5cb01ba313d56cf6d0a74b48ac2027a68d9ff8cd8b8b384e9b4bc0bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=bb19a45ab869cb46436633d5b22ff5786c45defa14dbce7e8354de6785dc8244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=0943a6d42cb1bf2fc864c72f37d2a8db8e0095a53d558efd417f2a6f41e4caff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=3cadd8d82ddbbcdb09fc44bde32d5707f18a38a7de5c4b465d5220d73d73df7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=b921eae4fff3e323557bba9b5661583cc6ff24a8681607c62168e8bf2012c8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=25d2897ad835fb898bb81dac333ddbae6b676532f87cbc945fea7fb7c63da2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=fdb0b3e368e5fab4d51b92c0f4eb394e333a0b5481afb9760fbb05c4a50a310d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG5EW42%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDdCrHK%2BvnNPyxTYppYHNaLG9yQ3FfTAXzfbens8FAvAgIhAMrbWvjMEGbkwo806rfGgwMIQAOPPiahyYxeBLSu8UKZKv8DCFMQABoMNjM3NDIzMTgzODA1IgyIaYoDxm%2FCuXb7a2Qq3ANzCyI5SsdQv0OzzKuhnh7iA3c5YDKOmskI5lzAK5Zr2z%2BdxJdJa0QwTNMUQv6bxiEnoEQMLfT7avM5BZWwZgzJ%2BpQpONWwlAAFc7uZ7o5LUMVJjXLjNGI93VQqfZibu%2BFTIVFbreN8y0jwEW4BWcD30ZAW0chTJAoinT1j94yifoFfXg3B9eYgC8x1roMM4HsH4yYivQqoT604dp%2FrAXv7VFobDbO2EfvgZgvBIYHDSu6tTkDygprKjc6drWd29DlySE0Magv09tnlW4tUs4810ghcSli7%2BXvqcjEzsioJjyLvcRYk7i6G4h5uxLQVLlIVuwUysMPVfdoc1UwEBATkTTvEg2FnE3e2QXzJAJWsjtE2FlWtbGHsD7myeDZ1LwbJLMNY1osshqakVzfgGzOVMGJddpryg%2FiOqG%2Fq7cjB1zHYjHgNqu08HmFG0Mzjq0qCcRQRr3GCYFstLmQeSgCkN0rmN0%2FK4VCoxjLlGrcDgUW1EpU954hDIHJDilGDCKQZIQYdhRcJi5I8aFNrnSVcBNj5e90AYUvWYJSpsvNiRdFhOnjia%2ByNVoUiHG7lWQrFUpzz6BMLPW8TSHWQookBOOZHlJZpK98mrcwn%2BzxsPmQ3ytWVtaZGBISsJTD4ovrEBjqkAQKLCKWu9s0bxaWicyvqdURv%2BCOxvLSup%2FU4Mo6dolY38jHSgGxXf5WIqJFFjhXbQvlD0iFuPY94ujpVHyZUp3Wvzqc0EB4wZI%2BqAhfwolSJeV19BFuc9CLNY%2Bje6YvXbZIE92xERGOe104%2FymGoMMZCMPAxEoojZnYmu%2BVNC2dm%2FyMtp01Wrb50%2FqOnkhMbVt9cw6J%2B3NU30mq7BzvCoa0BGhGU&X-Amz-Signature=87b666701a26c15e02b4cc834c46c2572f590239e0d9d2e9ce47ccc8e73561e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
