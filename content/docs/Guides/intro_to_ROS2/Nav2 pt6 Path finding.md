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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=7096125a7358fa5ddb0014b3cc469746f317601f0cb23a2225fe3ad3e87a5258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=aea2de72b2918bd3758285e2c2154331cd56abdf0a8653cec764447b304ae770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=41073845a09bf48f92dd1028b8c0766b886448e3d3968984790d07d0b1927aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=e32fd1ba5a56fe238e2fb98316aec981ef9f65c4c419da5cfe7066e0cfca8057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=42f42abcfea22c936d9b497c157259aa1609ca78a3b0a07ce795ccfcbfa9b940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=4db8c651a6698e2bfbf9d4267ed28ce536c3aa8edc307f5e9bebf61c7e53f6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=7186210440edfa36db146e39a5faa9bc5014c39217d1de33cb7deeff12d6b56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=0cd6eff21c8cb3d5ba17b0e1a3995f66c8191cf710a5d23a49a90513c9338230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=d9cad93f49071062edd27ac83350e75d423c6662a5c19f92fc298be624f6ef4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=ae7800f0eaf5582b494a6fb20902a6943757bf8ce170502e3472563ecf056f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=0183d49f687040cf79938c573940781ba8396e0c05aaf3b4b83b8bcf85cb9b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=44890c1abd1449d57230f4c9056bc6f8e35dc0078e0333e5d078fdd1eb9c72cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4MGA2NQ%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQmdPKcuRxOijy5B%2FkWCKRslteDgMNfjYkqzKvZmWg1AiEAp9UCKTmGTi3v3dKKUgnrw%2BM3ilgU22vY9pU7MHaWom8q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FlfB6xB5wYoS%2BPaSrcA7pMBP2lYfyxl%2FO4Yi8hUSF85e8QRzLLZE7AxaKzGBgvbq%2FSjS9LURTlW2nURU3Pz8WvRrCJ3w8yLziTLzv%2FDJuEUsPn2XysDEnunzX4QOM7it%2BPNu%2Fp6rgzTKBF84LLxv%2BY1S9UfcZndNZ%2BF2beLTxbDghkaslGwHjnk2NuXUSMlsVi3DOzahhV0qn%2B48TouGU4Wh4VlOGyQVHbj3jL56bOs4lTi4x43E4dJzPHTo2duH9axBtzqseiNhAtZLANEYFrvYiYckDD%2BnWwZNY%2B%2BmxQnSPuJCb5FJ70TJi3wvwPWI1x%2B%2BT7oLK8eV6IGCdyr7epI9r9DK%2B25DUrFVVt6yTOOjFOrgD7yiU%2F975g1nxqOO5W5byaISszUpoY72ziwtmvHNTpy8Ut379QUJ55pI5lYG9pH0Tb2iqxyZpLtME0lRzJtw6qLs0GhRt094KcdJilEAoslbKv4vzgWpUF63MVyFjiUuXRnhIspA4atYEJVfxbW8cqyu7Wo4pe7GBBNNHiJqJ69xEDS7KD5AGYVUczQnSfaxaw%2FIglqNcwyBsG%2F7CBejq2Owdtb1nBfsVCqP7DZ2vnKu6tDVpsn7mJfLJQhtV8wofX4PRlE0Nin36ySyQH9BtITUIs5wVDMIGvjs0GOqUBQ7Ui3KXDMPm9KHuhqml1ZCY2KI78sDiHjTzYGzeRsVqFN8SZOw%2ByqJ%2Fyf6y1pcUUlFn1hpQZQRCdzGZgbQwG0NYwQhkzerD5YeJaFoW9tfkM2VIHIvOfRx7yQ7vMV8HDKhlxY654XgcSYq09j%2FxfezjnLXdduovD7IBAnbMvtYxAgwV9expndsBs1X68SKRv2WBztsJe%2BIkzeuJspJq0HnWSqne1&X-Amz-Signature=dc300c0251a5f1f7baeb726cd520a8bc6bf415b96621e32a751e2ea1ef1dd576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
