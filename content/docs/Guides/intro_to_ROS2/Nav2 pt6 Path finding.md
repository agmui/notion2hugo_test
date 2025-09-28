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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=8a501125942e169e9ff68e4147a46c5c293ce5382120023b83abd844595d557e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=3fc3c54e05818858055c4fb7e03e47a9975826c4f5fc390fcedf38f558bc0bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=d9750731a12bb42d293ab50bce91be7449f6b82a50e98401d215c029480650b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=96d2137063516c0fb720b8733122c45de7d1742977ae1fe8098a7f2d6eff84da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=eeb676927a4ebb615d1a9335b07c3985b70c7a6f019f23098ed57f378d54bc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=0da3301d6a0c51e1865de439cd63b1248bb41eb9f6b044bae83a700520912385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=04bc778db1e5df45e30397f97a532b8d2b5d3a74ffdd03e810a1e2cd50046405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=dd019e08e8f520ab7c8c0cbad6d37351aed9d200929f6c7a1211254ee892939a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=d4b2f1d4d5e44401ba156e708442606e8af3d3dd2a36ab3c5a910fa89db26154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=e4646738cbcb42116e112349069c04a48b94143e4c214943cb7dcbbff4136587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=156fecc29bc531e13f2a0bbe33041f779a7df02c81fce4440731e1627d65d95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=282f0668c0a6eb995999b86ce003345bafa4811f18c23e56f144cdff2a550eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTCKW5U%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIEUg4knfejMBAU0hWtMjuudb5Uti5N6R7wuR%2Bcz7Qg%2BCAiEAwvKW%2F0jTSQzAPYh0RbmoBXeL4rxqqRYAPM6FNPceoqAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoYKseWn7cmaZZtSyrcA27yE7%2Bb06m9%2FAxJ5k2uvaqtBzR27f3R6CTwctTU6mSynPYlUoD%2Fmh2b%2FG5Rvw1uknCsh%2Bh8ynkRGYgGRNUsIBH43c4aGYm%2FPtZN4wJcl0H6jgO%2BFyxzFR1fZmNcybnGTHlN6N7gTOJhEI2vkxTP12D5LedvFjFKuf160roraknBFBeEy81w6dBdI%2FqvkFa5Yxu5DghwKRxH0mziu%2FBle4oho2rtdxStdK3ZeGIfXeDaCb4Fu24kivYvSc098o7AftkOsbNC8SiebknCH9tZpo4BIH4FWAj2VnP4ai4A9ijzdiGEs7qcy5rX%2Bm%2FBrLjG%2FWGjltqZRteen1OwYML2OnAi2uqmA061uq5AIwXQ%2FqL08H9I1rMr3Itq3XRphFdz3VTkVySi2%2Fit6uXNyxmngYnZ7reNOxK1uH4LwCDp1yi0AsOrq85NBWXkUjAPhyfGv2IfYdSA1iNxCJT87EzJaV4aKQORmKAj3f6HSQL2PZm7p4LmZkonvxszS25%2BYDTGJZ%2BB1NYyaRuDdZiq7CmzlUMsoYTyqAkPKhe4%2Fm8GwxBlWuK%2F2QCus40WQQZsmjAG5gZn4oj1aJ%2FtJn%2BeNzqBlzVevsYyDZQeBMiOzAcbZD8ud1Gubdm6skHD6ewoMPO%2B4cYGOqUBEMOVIKufnTjOin8GiUYWBwJ74YCCqVdBa8DJwNbPhmC18Yc6CALbXnHXzu3ABVb03Gc3hx%2BAh%2F%2FapNoxEzLlmHDUSndOtj6F3sRTrtnSkb7xY%2BEXVY%2BCzXLA5HYit%2FVSWlTIhFNRLtssIHWntploh0AQfrFeEXq80jA%2FG4oXj3RhL3r3wkZShcV461P6fJf0UKFr%2FPTq75PBewE5xTi2wMGKcOXk&X-Amz-Signature=685e9915e56f3f093f6e64ce03a6df912f9c1e66a6d0556cdfa92074390599c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
