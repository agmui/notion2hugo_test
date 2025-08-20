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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=871f865f9b6937ab0cb008220cead2f51b1b5e6fb59300839fd0076bcf1b394a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=183a058f832abaee86c729f0958d2cfc639391083926a081a6eeb920d776ca88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=a005c97edd62e123cf0a440cde994cd6c556b931a8f4505458ba769f71271d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=88dfa8cec7623909c101a0641f81c78a8b4cdc5148f302f834922bf7ab3067ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=2e1c88fd0ebb6f2f199643d9f9ab9d098f8986d301b3ece7b8cb118ae6395102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=c766db7004adf767116a2da17e92cffa98c1dcab4fe4003541b115c68c341807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=d3da21dea8015a5545d0afe029ec3e703b1cc8127f24bc71562d3b560b4857c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=89ed065d3f1db75be535ec22f2b05272936dedfa82a16f10723cb784c39da030&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=34d7ed61909ef24287cb9498c3e403ab929bee0069315d81d16d981eb3fbb236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=08436ed53c4b98b23bd2d208f78c3879d4ced1ec69fb5e2332f2cb87c4ae1912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=ace7a50aabe911c3c849d481ea12f0dbfc9edecc1ca276ad6be8c0293369d385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=e2a9ac83333d172d1b0fc2cab248f17c2db1b95ef1f15d57d68859a3b49bd066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5TJ5ABC%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOIyLRuj5LRgxmvBLCLc6MgNw%2BMpZ73m78fVMRhb4S4QIhAPZaOgTEj%2FfuHxqRAWo6KWh3ABGsIQAhWMWYjYYt0Hs5KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1jnT92Tnm2abAwCgq3ANhYEgSacUt%2FAzqtvrbabLh1WZNKPDYIJVHTq70CUV1M94OYYeqWSdmxy%2FrkQIYocVbdJucuFjj05bswThRvksBVrwbPzabeuoMJdl43w%2Fe7urnQnhZWvfgNgHu3bqNg%2FlfpyVPzDNy10GX%2F2wRG2%2F%2FBA%2FZqXMPQ7l0H16q7an3czOyQ3az66HBSirhhAQTgzGgn%2Fcn%2Bf44sPmsPjzsWdXrON6GdHs8O3JA%2BLH7MrYwEdKpGUSiy9SK3LeDwQI%2F6H0y5zcVKOZAleVD9X2k8yVENy%2F3hil2CxiZNsRl1lCVrkgX0bfld9sAk4eCraWSkkvGEyapBThtUXf%2Fb9cR9oSNO5hn0OJd3V0COYtuj6nbUvEQBGOcexgz1CxN8wKOPqRJzYlX0R4LoUw70d495NTUHPvV9KQ9bgH03Xkpcs0rTAst57GUc3dCWHxEsPk%2FKu7iffOb0DCkEWfTU0zbqD%2FWsiPp5Z1ZR1IZYrplEmBPqz5K4HznfIXeliM3k8RNaswkm6IDHthltgVJWS5l%2FS7IFm9v6wABbHjDedBAOdk%2FOECF9G2Qg2LTcOBa1upJEt6P8zRmA6c94Z%2FsDnlZM1c4AkP7Zt%2Fpqv98vc%2BQKng9zFL8BdlcWp1HK4%2Fg0TC6ppbFBjqkAZFGQoKIz7WeHGvf42wpygM39JU%2BC8QDjJJRg51sA9PXU6C0exS2ikuvzZopg8ukvhgti0AE%2FYxS2wuGKWZ7441wNrqTIAJxt045ZSNoVJ5b8%2F53U4CwkAC0NFrj4sR%2F8rMSqz249dqU2Kok%2B1ENTybt3RlTovnj8J2hhsd1HM394J4vhjhwI6SNxINhv5oovNiomLUI6Wwod1hroGGnTDp9zEbZ&X-Amz-Signature=780963c391833207d6f8c7c152feed192a011c0b8b1af96e723bed46a01ed0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
