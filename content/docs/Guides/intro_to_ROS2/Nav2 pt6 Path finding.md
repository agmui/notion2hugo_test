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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=d86a96c046fcfe4fe0d38481a902c2934149d498efffa52a3261ca1d71858564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=ee4a53a5a9022dffef984c903694068387b0d35b71647182159823868f1fe20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=51d0b24f49ecfa51b5556a1a0947b5ef8b11d9d26ce665edf35013208b61fa34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=eacb69347ac820491ce6a39aeccf1e412c8653a201c8f6a72b6cb41564d26e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=c6e165bff4b3f512e1ab6dfb67a095307c3256c9fc384998d96d2f28e5bb09bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=b4e4d754c5ecd1ea08437fac0da9c3fc1d2a31ecad93f8261c4475f9bdffb2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=fc5cfa10acd14d2e1c61e8a969a950ebd12ea537b415fac2c4deb0cbd734369d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=c974146e09e1f051ac4139852615214a1a615ca311dd705ecd7f905b2e35b65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=8f973d8685803b32436c98b857698614e32c2b3d494cafb32f6ec6b38d015b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=35c8266d27bbe32c0c20987483eb45f1ba67dceb7bcc6b383fdc933f5e6b1f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=f2f7de15a68561c75087914a73f8f415bcff9bab88c14f167cd61597df5d7e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=5672c7840dcfdb7d8e2bb1f7f54e86075fe1e076e224b4cf77ba914b282d4d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQH7F4KS%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICh6JQ1dixBdKnvSOzHvPESXbTHGowNTaB%2Bu4Z6kvgd6AiEA9kKvC3p3Gzm03pHtTwhSkLCSYj2silnzkIuKMedAbI8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOBb5PTPicBX16t7OSrcA8gt%2BdJRHjk4EkhYFPjzvevQrp7%2FizDUM7TiCjrs%2F%2BO90KoS7zBMRU0qrPAdCR1ILBn%2BTOuSsqIJq9j3RNjIAnyB1McTEBYfdNjRqp5dquMYtT%2FDpH2CsoJpk7YYJ1A%2B%2BeS%2B1J2NXVTMTDPHpH0iyMbQYDgj5MvMGSUmjq2wc0pVIKslUhKv8qIEQQkGHmUDt8GJCuaPunMnkxeF2cg%2Fnr8PMEkzkjOygBZXoDWNmhWW8El%2Bn7ttoBEAA4sDBwGtGtuwMxABxRq1A%2F4aubwJCGHQwCkhndQSVS%2BvnOBWC1QSpi6n2czKApQvRefZaAWf0J73cjf1YTK4OxCYYOGszUN16W%2FRAF52Jj2tjvRXWi8c2vwRqnUfKUmGx%2FNRrxSxgbs32z4p47mEol%2BO%2FHpaykPaEsHYABmW1E3Ma8goD3wu5EXyMUgdI3tgdIYCaApyKvPCtoYuE6qIJJTC75qh%2FsQLeeh8rYmBME%2FDFiozoer56CmG%2FpBdd6G1xi%2Boo%2FpQcB9ANDiSULF%2BAaEF%2FLjD3m8mj3zCbqAjPrU95zWyn%2F4Hog%2F0dzqxCgFRIcSp7Z601LRMVCP%2F%2B0Apd9Msu4545jTUVeRrPOLMpKBlPkqT7ZnlADicJID%2BBiGaZ3BCMJfdjskGOqUBcak8I0J%2FlMSVQXRYIqA1MlFY%2B0Jg4eDR2YOOvkv8DVNtG%2BFeqK2cg5D7QSVJuU56QUmiQr5ViOwjzVbnY5dAdI7He0BiUlhbnw%2Bo9E7B4ep3l3vGVkETcuq4b%2FzzUxtUBZ42xRpxBNhfh%2FYmKgRJufgidQSmUK6WsI%2BiZ9ENpcVC0ORhTtvjeo8KszJkG46ISP%2B9oylJpPNto5cdWt8a7SgRyEG2&X-Amz-Signature=b2bc8b329122ff9a3f824b471d3105b96edaa7e507745b2a324a997fd22a074b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
