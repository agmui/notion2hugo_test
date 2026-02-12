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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=7bb8f79fb7241b89a4d6cbc2ee01da5df849c322cdd1cecb292d4306a58631da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=83dee660e97f16c4bef356480c498dda2c351d390bbcf7828ebbe162beeb0b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=e8d7ae7fd1e0582352538a966128cd83da4ff710c95d53d6dd296a15833688d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=e7ffe338e74bbcf68af425bc3cb599af9c426b5261a74fa2e4b046fe617c866b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=94a77ac7dd0779ec94abf1ae3e25f2977ce548d187a370fe55e09de1d1165f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=4fcbfaab2ac1648075460fef223614d3d2c6d6b3efe3a8cb34e349a775c54204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=39324a75da2fbdd60641d558d2fa25773c3599c528b4580fcbf04a35b7654ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=7d22eea8644fa262ed9fdc7991b7f129dec9c7539b9286e28f59e6906ee9aa98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=54910e98055512d987adc5c4aace107c0d5d7c2bb8335a87748f6836b88c0f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=7f57efea0f1a063409e5e7db181d0644eaf60a467e4528a905aa5e57387d0750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=042a604b83e050315b3b3ef4105cf277d61df5abf700369481cb0aead8238e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=189201bcf0307ec1fddfa3580b3822fe2976ae576d4148d260ff4b622b8390cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IPAPZST%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDc2HFsI%2FspjL1zLMLU1G%2FO3Q%2FfKwAIa5EXme5vDYO7pAiB%2BTYYthvQ7GwffBsRM%2B6Fn02CCI9imi9PbtQHRtZQIsyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNk%2BNIybY00NWnChcKtwD4RfG4biFRIijfhWKcKmksYlYevdQQ00QkyhVtEeGzAubxIyTq%2FN0WRcialxKyxHfShrbEIcllUaxwCJlMxZOWrw3IRgQmk%2BW683TgmHK%2Fi13mRv9pyddCXeoiSxLc5cAZMZ%2F8Dx%2BkicKbGbBqWHTFNnbwlp9VPBszT6tOBK0fNAwr41QRf7I4z1d3WmEyz72852Hgg6b1dzNeclgq9klMaDgzEKr%2BZv5Lpf4CgUJLRC0jvkjjkfBoXkCoRjHzXWMZ%2FzY0rSA4wSPB9rWavjKxM0R7OOp6eXevXiztiwiG16VFL4GVXR9S5PC%2B0%2BFv05BvbQzEwW5bvB0tH5UBONqF1Ee9%2BKeqcreuclsO9yW%2BDNJE2vJASlaHpdWKxiB2FY4ZHJJonJUdqksOhM%2BaiQIEjc3ttvD8NUrMuUYWojBi02AnYjpRjpITPdlTnlcaVIhxFXaks6Pqt%2FRA5grelsmvUn07vOqbXu2f1JgoOMHsODEFRQO9X8UYVyYLimtC4rUjsuAb96PiiIP1SliyPB8uj8NjTj0XH53f0qnn86cSapgH1zaqieMiykEqqPqzE5pp2m%2FLyKFJo38zO5cgzu8qDy9D7qXuot6DI4UB4YmtCJD6oo%2BcdaWT%2FR3gLMwoci0zAY6pgFYLUGJ%2BvGjJBAUHQs08imKgmvaPMXVZxGOPl7n%2BhEng0hK%2F9yQYm%2FdM7HPqEmhb60jNmvboSyT7i8S%2BmnOt29jTFSf0o1%2FpTBDXf0xX6pu%2BTm%2F3xk4bmA3IqpuNafQXjOkAjOXUR2E86QyD2We35o64dIxegENd9DPMfZPM4jy1noig5ZwyHR6RJzsignNutvfTh83Kl6SJ9jyJmF9avJA9bdrjMo0&X-Amz-Signature=b676869d4c866c0f6865a9f99ee37c1916385d63271b6ba358b462d7e95d0c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
