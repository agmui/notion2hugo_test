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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=3b98a13937f4fcb8629f7321f468f4874160ea9cb7aff87f55230a748b25249f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=934b7d066843bb3d0e61d8359f47e34a2a0351c2f6d412ca5ecc03265e131109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=963517725074ea2c515217e90a6524e10500101b380f898a61ce4252bf33e5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=6b018b42586f068a16a0e4aab29b00dd6622079b5ca5b958ae1a3e4521a26c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=d1fea71922c892c40940ee5938958d095b9b3ddb900a959f87d5e1228ec0e3b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=cb52ea4cd597ad5ccb8765fdcf15e322c42461beaf2e148e88a7bd42f04386d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=2c858c056a624ccb26f58d47a6c8648664c7f31b29ab08c87460b7e65e59c3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=675ab9a9dd5a3784eebb0202b4caff1b26e44ad6f47faf5ff60efb34dc9c6607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=5a57f7db083dcf1d2d64c414a2483741788fe1f2ed4497ea58b0c873cd183e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=44be89ece2715cc0ebd83e7e5d77244c9265a1270d86ffe1bf0c134273f4a50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=ec2e93b1c7e5719141baf9b9d4b5802a9c31ac6baa21afeb63a70dcc0d7ff6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=e29205946bb53b5470f3d9c5f7413c2d190e82de20595893b488ad704ba5edd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ2UNTN4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC0lYxMUkap2BAKS%2FIRpHpeQvN4xOCBhm72eA3KJw5AGAIgH8Yl04Sx2tSNMB0OUngVLwSb9Q03SdnahN%2BWmkOjXjkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDE9LLf1oC%2BTokJDaTSrcA6C1mUNZgW0fuKPGRyOAtMsvNbD5h%2BXCVaKV3xcQ5Sg7AwMM47v0dusG8PAlGqrD2fAHLbjdFVa3jdPsqnLVtIErD4lOKIiYodxYyQzA6YXNeUrVo80X77%2BPRbli9Zs%2FJFJ4gflGjC0x9sqzfC3sBi4n0EDYS36DNBUbm6H%2BTEhd%2BS59mKADfd%2BmG%2BSTSZD4ExTpvqX55eN0R8%2BWRDL5a8QmfjktudNj7%2Fdewpw3p51Sp7WI2qSp0thqSwUsi57eY2HCSDfZcSBbPAUmLEX%2FCaPzHDKQmtaTVPGAMJgykYrVWAmxowkdJEiqwDXkwpmgNoaFC9uC2SYWymyubr9Ipypd5WujM0WxTsMEhwujmnUYRZS3rDUhr1%2FK8vBIUbIvUcoUABSVuIsIzA3h1aoVHlr5DwnULCinf4e6D7IpazGY%2FHx9K1jQtftLAYqLTIGihbPOb3pcNmAIJg4tcxQWZBfN4VFWrsJr8X9Y7PQT%2FnK1yltvJoTRTRH7%2BD5STRDbLJiZTPbV477KSkBFf9%2FuqZ4sx2P8WGq%2FVQs2dS32H0a8oJRmXmZf6UsDVcRi8vhQ6n10DE6SLbUfFKm7%2FMOUFYLZo100sj7zcgmp%2FFpX%2FYICily1BJRje2sCjbp8MMGsx8QGOqUBJHkCNCsxJqoI9wKYzMYlOaLoTnmy99un3U89NaWDJwzQK8XMmZ6gVG%2F4lhEW%2Bxf6dxzaNdaiXy1RDIUg3F6ujxyRtgnBcRbHn6xBX5bNf0dfdm7HT1qISBXmqFBC5rkvVqpDcFjFSNItqfbWxBiLgm972u%2FOLifJyX%2BnBnpIDJY3uDd%2F0LT90SszMqF1ee4IBh5OD8U0LWuWVYpPyv5k%2FbZa9Sns&X-Amz-Signature=3a32a0dbd968e52645b83ab8e3d0c0c177f03fa45d0be81b5f5c341a21300144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
