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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=9843092fccd0f8ffff73922a4e341f6d74cc0acab465226eb4cb179d7aff7643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=84365cc4b3c898108d037d9c689e35910318ddc699142c8eb67152f1ed64a3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=ac1f2a58735f76b958101d644a80284ada12e4cd8e837da2de8f685f4b1c2f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=e00e869d328b272c78f8e797fa1f39ec6e464f6883f86c23927ac2a18e500943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=a552d0110018687157a4c495bc74985ef8689a17523f2f772ec937c13a6f8d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=9710034aaa58daa5bca8f6e3e1f0e9f9da99828786c6108daa657dddcb66d42a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=c87b0508513dd474595e713ecf7b93a314b87c71906f2654209dbbd161d7d007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=cd9627b090d2d0a3ec25bdff83a17beaa4e2239f7dafcab5998a1a2eb1c4af65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=77924bb4ab9860c0bb3d950ddf89a02e46ecc5834ad1e117b2a36873b66522ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=055114324722d40239ef72f0c7760eb7ff30ccd1e10952d8a27b3d5bf90c6fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=f19aff3378563694f749a251e6df9a2ca0a9514c5703ac1c1968e98080b35608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=e2b21ddb267c4fb3b030d5605163e67f20f1e3e3054fbf738c7c159cff3217f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GS64IIY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCoZTEB0EirME0AwwQj93BkeQJiUSM3CaIitUMn6kVtuwIhAO7jZKgG%2B9z3%2Fmu8r8cZWfdF0hg0a8oWOudiNZee2byyKv8DCGYQABoMNjM3NDIzMTgzODA1Igxb6qvBgNidnBYoQCgq3ANDhDKRzscW9HOer3w9LkMOxBtqmkRAMONryAFJKf36j7lqqLrtGmI8kEpiZVpxa4iarzxFxYxhxoUdjle3tFCcy8rBfCM%2FoS5YYEaaeD1dhuhwNEM1NSTCBxgelzn8nNLovTIWz789qto1lgNHnnaK1US3scJq2lGs6Bg4zbeVx0yxVDQrHjfJTVmqMB7ftdvutlYu1BwvtOVH0N4HXZ2Psf5MjhY1a1OoIERySLfT6wsmjHgN8uiy1EM8ZBuacOh4XIw8NGL8zFRsAGy3nqnGU0RGGOVRVm8T4FhxjpWW7ABQfNm2DC5NS4YBwqGsZsEvizEV6LgwDUc5OvYHwazrby72glFhbCo%2FjKxDdrLjqWk%2FiSQSNwbGem4TQ7qcpvYyQocQ3a7tWRB2%2F3qFqhL%2BaqaPlZPa5U2zEc3%2FUeMzl%2BRMuWjCDm%2FTDiKfHZ96pDURMovzmsAF%2FGqYsOoeD6XkrTr5KPVXvdD1PUA9izlGRbbtRuhsFHeWPLvTjCt5F91UnKkJcMBTtkcmiSx4bVyxg0wubhpzDUiLQ8071F%2Bx3JoF5S7XxpWuwajsA5CKn%2B23ifEtQUNcE7P%2BUndkcR227Wf%2B2TvWFNhHi%2BmqAVj8DoLJTZ14RNh7KYzcQTCP4snEBjqkAbyzhCOcDp6tLix46Lo31t6RGKLGLORVL5DaoVNtO6GmcHUhnjQDBjBk4XjFsNHg%2F33keTmt3Qf9Id1KyK4cg1O2hVVjiGmPgSoHN10Vqrc7DWbOydSdlilLOAul76NDPzEgrUEvVoPcPKMMXjvglXyka%2Fuj9b33QVL6tHPLGkfTOU%2FOf9pc1dbO4ntDx%2B2tloj9ml1ItbajOuVGrtG4lQORZOKE&X-Amz-Signature=d2d0041b407ce9b385d8dd64d1bf47bdc3cc77b9847afdddb414be8d79d0f1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
