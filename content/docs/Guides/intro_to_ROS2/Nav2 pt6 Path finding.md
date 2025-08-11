---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=a01ad696c0028b90ded70cb208a4c05f76f7630e9342911c601f8f936408ce2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=bb47f7a4b9bc0a75c5f08b1904da281b5c749be090e5e74a72dd0d3db1c7e7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=828e1ea03a746d13bf590802130a469eb5158b109db8e4a1cd273f8a4fed76e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=ebcab79c9b0814c836391b7b6037fd17e402690bd007d6080b3d10c1a295f8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=10b607cb7bcea4b6827eca2719489cdd49e7b263968654a05d211f2dd6710fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=28d08afcbf3120db0919453f8aa794045046f973c096a6aa63a56eb280e7c03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=1786f27a7123db615b6cd610930875faf0e86c7bc6f2d66363a84eeb65b17b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=065ab35b5c8af1d2d236eaf78c746165b9bec3fce50a4f7e9cf8c4b60412bcec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=3b84097b2aedd05239e6146552b861a91137a3c97bea7ab85bf8fd9c590f9c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=ca34ae3a611cd5e10c94aa38c62f39ede7a7da96ba118242fcf506d201be6a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=8d91798c1323029186ab619ee57c988c248b914e941a86d2d103aa5b4d6b62ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=e7a1d192904006bbbcf4499700054ec01a24bd81b7a983d3b68b127b57697919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBE47RF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGvsKIpBw5r3ouGrY1kafL51EU%2BpTjjI%2FRSBuQq2UghAiEA8G%2B875Ud9BJ6vpPlQMaVkYE0FvHieBEr9schsg5SSAoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDkANKqoYq1TAfXuSrcA57wGb0ZPh%2BsSTEMfV%2F6FeN07ulnOJLMrH9OkS8GYaHJfkbL%2BXzbL05pdSYEvFVo2eYLZurAUc7NnBpiVwCULDgEljKRncDzb7uK3habeHvb2z87eYZlEwTpmk2WzYZa29AD3dxNZObajH6lQKt2q%2F9JL4jj6nLBtvQS9jrCgSSqP7cYRktp14zhmW1sibBWjoUCWkwrShRZ49il8oLLGD0f5rLc8gStdgHKBbss%2FeYaDjSIxdCxVTSbOVc251VuaL4uoQ1RTJ8zc1IfvhEVXdGNb0X%2F0tzS61IE0U7hVvOSJ3W8JGI4mSrB%2FXaj4eUwIBtAeyzmNB%2FQyiqA3Orcas37%2Fc0tZE%2Bkey5j87gAnHwnIqvs233cvxUs2zblX4WX4BRRkbVwuTQx5J8%2BsEXwgeLl6vGh20OeFx93JTucBl%2FtOnCoCfXQDA4hKL9GHpfzKQwOWi0rDp5F4mvVzWe6JIQHR6P9TSHoYLdscVCFYkhL%2BQrUbp6bLXmfevRGECEOAFXqKvMiDddIFUKJ2qBoaeOe0sXiNiTRKvz%2F%2FSi8Eet8DSsr%2BDqhBqQkuZz0rasHpz87vJewI2jhKbdRPa3ZvqJCzbXD%2FomCIcpJ25S6pN1AKVJ1EUB%2FuXWyzc2%2BMKD35cQGOqUBzR0lKzpv4mXNKJnkYUHR3eCP%2Fhdg%2FxaCveXdCNOPFxSgbZaVDPv4uEBvoB7bRAG1JaT3MHikjhT8V%2Fy3%2BUcqIBZcn0XwOeXPWFXqyYtAwX89AirJ%2BJPOpV%2B6uEVEP%2Fe1VC8euKMdUXnuEx53FifYefNDvLmTA7jySGOmjBtKEK2YFt5DYEISCfmWjcseVpIUDHialgVXvGaUlAgdDPQrvVL0Y153&X-Amz-Signature=b5cd59bc6928d73b7c45c6ed9cd8948bb53df2f4aba83b02a0a4991bc2972c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
