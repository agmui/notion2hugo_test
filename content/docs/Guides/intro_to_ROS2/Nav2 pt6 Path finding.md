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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=9002c8cb0539b5712b96e21316daa6e2a79cc478f08165c059404b50ba1188e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=16bc5faa09b81c8819ffe4d9357fbb5eadaeb1b443cb0f96753927ed327096f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=91310c4e7f8602e5cbe02d2e3026a7f1ab558b8bf29febe3ca3e65e327b1cbc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=79fbd21ab1564b913ffa7e2f8f9493a42113c6087eb32179b6913c95ec67b171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=7132378e6fe827707e0e3e947a0dbbd78f902a87411013a9ad566d85a55ff506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=1ddc047232cd4e736706942072b1f475ec601c44dde32bc24a81ed740634bd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=dad6e857400ab0862922007765e88e7a9a55f90c8174e28dd84f3c8049e1325a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=ba9253786b6e98b3387db1fd118db4a83dd310f6fc78a5b131eaf4d970779d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=e0e29f948f94f1038abd9a51a6df618ec3e8f8a89e471cc48d5c8598ce39176d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=905205d7970567515f8ff261d8218be0389df539ec45939f95d126f701c0b8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=533c0b38df272d69e566f30baf3f2709d5d6a8d432c0b18c09f509a02087e88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=3b41b242f5c2dd64c981079aed1a89f70090006a22ec5b4adadf48b365482790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676ZZGVX7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T190857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFYNY%2B8IlTqc13%2FXG8ZmpKl314KYD9t8qO%2FmuEP9H1miAiBIN4e8BPXD41o3I%2BQaSCNmKSTlvmvqdQUM0A%2BTnUDaTyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJsgYLJSyDfWtMNaDKtwDuXT6Ozl6lRs5I9sBcYXlyQDiZMAW7kQ0xatN7cd%2FT9VOK49kSMBYivDa%2B3p2XK3gtnqlGAlxDorC2wd7RWkgeHXUAhDi0Cc2jNFIqDZ2%2BpVCTYzG8B%2FOh16LX0qhHv03byKczNK%2FfcECUUZOuOZYIlS3MqSdDw9Bjp4NiDRwAhjosNDc4LTUorbwSH8MpcwlPEiaecz4T9lGTIvrtMikGdTWwbq%2FN8aBr6L2aqMvI%2Fipbb7xJ%2FQEh2HXsErr0qpB23okciBv3lG1UXE9MiOQSKt%2BvMCoibcBMiqk67XXYPU1K2Ze5fB9aTJUSiCyuoowxODM6UJf3ZAsywNHGBagIo1%2B4wyoEj7jWvRtPCB0vYyJc8p1CPvI1gV2N4lJySvGH7yNu1tk6e45bcPWaPVZnHfDofEKnrZTbC2Ayuopo0qB2kl9gzVuHM1ZV%2BY010i9i%2BuVhHLwp5pwLLh2J%2FvNRnRRmysAVC%2F6hp58Doxvps%2Bv7WshpKRxbaMC39Bo6lpVfUf0QnCZKmOiia65rcLubM62dLT7GQhcUiI91EsK%2FeSZvkUkidZAWxqoFd6BhpgB35LgikOJYtzCvqqXmFKbL2faHPIAXpe5AfHDhtHWPLbcIQYnBYgO%2F2swZG0wg5PZxAY6pgGLYwyK65vA7NYtbKLGT2AyHD6FTml5P2cSIhcpPYV8AqZr%2Fl%2FrLP0ItXsdTwE7g6kTnzIYL8zmQNd09XRSKp0qnvnNLUaStwd5osoqwVIVZJWbT1kVrGnLwVDF6hSaGuRrrj7Rb28VCJ46KeMfFQ90nk4u1OpOAgHrLPEM7UT4VKI%2Fz8UMLXAHJof1D4fdx%2BKv7xLgBObcOX7PDTzzT%2FQBl8Sx3kpe&X-Amz-Signature=dc70a32ce345b13ad46265c8334ea7299109d76fd4a3bbf0a2ece027fc60b339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
