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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=a36eebe10acd6dec4ea5156cebc62b7c67df4725a85e2952f12e89d72e81c852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=0b22e338cf4dea122af4bfad078458bbbaa5f757ce26a350e74dc0718a170ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=b94ac5b07b437315b93d1b4cc9ecd40c80d2ab653918fa19afaa3bcea478174f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=1cd34a845745b92624c59c44ed54296a4ad9164f9af4589414325b3b4674bd61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=454b90bf795dcb8eae65b21700aacf5159e14bfdfb81850f14481ee312c71184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=180c45c926a48a058f497ca1a61b5136c3261bf077aa13e7868bc02314298f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=e15ba53a81fdcb6324165079c6988667f12a81e1d99315e6c5ecf38df3333450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=9d38061f4480f508be12598323fab322a43e43d1b9f1fb37f26ffa81d1fb205d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=d2ae2cefa82c1e3fa1803da64c8d5f09ed1c7c1df0b0356ee92ff9bbbeccabf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=5dbe3ad0ec6041c54e873901e5e1999c3118d451525669cc696b8a1ad3cd5eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=9c0bfe79562f64599b6e92089f7676a981861f4e71431f6f2306d0e80481a22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=6f022c234518e3f484cd95f7ab9ed0ecc27f25476347e4390c2bd76e9abbedfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAHYR437%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGWguORSkJWGGy4QGCl0iA7deT3Re1%2BGSAOgOcJPibg8AiB6Qt0xCx8wq6gxR0ezSpQmoWnr%2BXiITAMV1tgBAD9neSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKHINpGae6yhhjF2MKtwD98vxhgrCKYnQtb8ZlrdoCjirwW%2BPDcbi607S8RvW8Jq7wplKluiXulG8pt%2BfdX3nRVQEmf19COUGNTjo%2B0qK5S5Z4FStIAjDEBCZ4r4IJCRLb0H9RafepxG9vkQ9RUOGwP6xy4YQ2lVIDbQegyvaPxpZrnoyvfvZFWhht6yAe56m2yYcV9KYY%2BORkFANOU%2B1sbB%2BXzRa%2BJRXE5QFjgx%2FS0e4nJ5Y1EfuekEsDk5RN%2FH%2F68GxzH2wYByY5BZ8I6DGIotqK3d%2B5zKOKHx6C0oJejbPhqbbufGrQiK5QjNmeF9sXTf4aVMlxQR1xwi1Gde4OA0WRK5V4UJSrse39JTpVg58uLacj2H70Gq%2BKzKpUltyXY8W6ytviltQd5I3OVeP6eyYszswylwO3v3EQbmI%2BR5jQWnHsoBhr440K1BScvYaU2wj8SJmTzs2dmnAT6udsC6F7RCpbcXu2u3Jur3GYkVAdzj%2BhMdZSSqoEN6kf4hhQFkbo9pdOKKB%2BAKCFKsB1I8joQWxtwAB1rPvGAYC%2BPIC%2F3j8oBHy0os%2Ftk4UxRedZCDp7wb3PWU4oWag6NHNuvlJKZPeogvp3XU8RXjTN%2FPjhnS7bB%2B7Sr34zS3OAxj4vbz6eMEd9zmsPuUwyI%2FWxwY6pgFL4PznEy4ZgGFQPG2OXULL%2FpIBE3af8%2FtnSfQM%2Fndp68qVRhFH0GJj8C%2FO3GzliYGMlDgcX3a4kxqpmvue0pTPCdEBwSUq3gHSRZ0lSzf6Jl2ljvt1GwUcTv50Ws0E6cHhFhzjF0Ay6dTD9rEZ8tt7JM8ChFIhVzzbRBexgGzJzoCopy7A%2FDLlKSR111dMTVIEA6jC%2BbhdKh0dyJbuoGsqWWxQF92l&X-Amz-Signature=16232ecdc3121c8d5a8581bed830fc52025c54d8dfdb39a48c2265da44feb765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
