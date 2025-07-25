---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRYEFBU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC1zwB8C%2FHjsTe%2FUwLE4gw%2F%2FojVR%2B%2FWh3KAbRsdhlgZZAiEArIdsSJLnB0R6IJi%2BCbEdS2iAV8CZpGr1X1CMG5f0bBcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHAT%2FFkGxAdv4y%2BiKCrcA%2Bm94MEvQeqTw1NzTZTPwe33x33ervmuc4UIfgyr2jmHkG7r1MT7QVyLvYGYgBGGo%2BVudO5hr3FqZk7TTYMwBbg5W%2FfEmfuTUqYJIYNg5miZyiWQn8PMmLIhwjG6trlPrshIvbjhTdRMgZPBxur4ZOOqtuyXuWUPMh3vXF%2Fr3ZRtQf9Zb5NwiL1Ar8keiUOUMrgNRvP0%2FUJ0vcrodJqQRMsND9xFo9j1R1MIseyaG5t5QoUeDQZCr7QKefSiGpZEh5%2BVOmEtGVnT7j5Gki3Yi0b8oZq3OZWVUFb3qe0dogMLjWMUFfkzp7haQVbzcHL6agMOxGT7zJpCOPY8jeqbow56rQ0DKcNCMxN0jMJguUnQQbCWVccXxl%2FEJl094TWDuhtRU6%2FBI%2FZyTmbd1xOi9%2BhIIAPHsc7F6EqO0q1oWKxkEcYJtW4SYlv9imDLcgINxwlVucJf3MozO6VQoL8s8%2FMzhvykNQ3Zz5a%2FWU0dVTExUqvehdzgp50azd43lwoa7VqXMen8SfrRWPq4s9p4T%2BCQ2Y%2BY3UU9J9kDiFN9zhfCCs65VD68dT3KCJpX7vZKrbgsHw0aWiqWxX9soZvXJtArieaDRNOPGL5ACOalxeek44BVLCq2yNfr%2FZgoMOGJi8QGOqUBHhZaYSnCAwNWiQc8ekoWrlEGe1GcONzcF5vtq7V%2BVhZg3z03cFs18OtdmMTrQ%2FKOgF7mQfAmseMqTL%2FmM7%2FoWN5BDfx6%2FsiRtI7%2FvxXB5G1j%2FKMGSZiWQzNeB4NVOL9ubljnbu%2Fhy%2BHCSwkJfDfqRnOl3W0sHliY4tSnKDyMbZcpspFPmxRr3RQxO9I%2B32o7QHhNLE0BTaSIVv1kk0lDWi8sWYmD&X-Amz-Signature=c12c10d5258b5600d82c1883a6135d58f577ffcb3a8cd97c45a505f988e1e1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRYEFBU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC1zwB8C%2FHjsTe%2FUwLE4gw%2F%2FojVR%2B%2FWh3KAbRsdhlgZZAiEArIdsSJLnB0R6IJi%2BCbEdS2iAV8CZpGr1X1CMG5f0bBcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHAT%2FFkGxAdv4y%2BiKCrcA%2Bm94MEvQeqTw1NzTZTPwe33x33ervmuc4UIfgyr2jmHkG7r1MT7QVyLvYGYgBGGo%2BVudO5hr3FqZk7TTYMwBbg5W%2FfEmfuTUqYJIYNg5miZyiWQn8PMmLIhwjG6trlPrshIvbjhTdRMgZPBxur4ZOOqtuyXuWUPMh3vXF%2Fr3ZRtQf9Zb5NwiL1Ar8keiUOUMrgNRvP0%2FUJ0vcrodJqQRMsND9xFo9j1R1MIseyaG5t5QoUeDQZCr7QKefSiGpZEh5%2BVOmEtGVnT7j5Gki3Yi0b8oZq3OZWVUFb3qe0dogMLjWMUFfkzp7haQVbzcHL6agMOxGT7zJpCOPY8jeqbow56rQ0DKcNCMxN0jMJguUnQQbCWVccXxl%2FEJl094TWDuhtRU6%2FBI%2FZyTmbd1xOi9%2BhIIAPHsc7F6EqO0q1oWKxkEcYJtW4SYlv9imDLcgINxwlVucJf3MozO6VQoL8s8%2FMzhvykNQ3Zz5a%2FWU0dVTExUqvehdzgp50azd43lwoa7VqXMen8SfrRWPq4s9p4T%2BCQ2Y%2BY3UU9J9kDiFN9zhfCCs65VD68dT3KCJpX7vZKrbgsHw0aWiqWxX9soZvXJtArieaDRNOPGL5ACOalxeek44BVLCq2yNfr%2FZgoMOGJi8QGOqUBHhZaYSnCAwNWiQc8ekoWrlEGe1GcONzcF5vtq7V%2BVhZg3z03cFs18OtdmMTrQ%2FKOgF7mQfAmseMqTL%2FmM7%2FoWN5BDfx6%2FsiRtI7%2FvxXB5G1j%2FKMGSZiWQzNeB4NVOL9ubljnbu%2Fhy%2BHCSwkJfDfqRnOl3W0sHliY4tSnKDyMbZcpspFPmxRr3RQxO9I%2B32o7QHhNLE0BTaSIVv1kk0lDWi8sWYmD&X-Amz-Signature=53f8efc0358d082d269393687b69019c903592d84d33b5a1b72d9e4b4bf4eff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRYEFBU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC1zwB8C%2FHjsTe%2FUwLE4gw%2F%2FojVR%2B%2FWh3KAbRsdhlgZZAiEArIdsSJLnB0R6IJi%2BCbEdS2iAV8CZpGr1X1CMG5f0bBcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHAT%2FFkGxAdv4y%2BiKCrcA%2Bm94MEvQeqTw1NzTZTPwe33x33ervmuc4UIfgyr2jmHkG7r1MT7QVyLvYGYgBGGo%2BVudO5hr3FqZk7TTYMwBbg5W%2FfEmfuTUqYJIYNg5miZyiWQn8PMmLIhwjG6trlPrshIvbjhTdRMgZPBxur4ZOOqtuyXuWUPMh3vXF%2Fr3ZRtQf9Zb5NwiL1Ar8keiUOUMrgNRvP0%2FUJ0vcrodJqQRMsND9xFo9j1R1MIseyaG5t5QoUeDQZCr7QKefSiGpZEh5%2BVOmEtGVnT7j5Gki3Yi0b8oZq3OZWVUFb3qe0dogMLjWMUFfkzp7haQVbzcHL6agMOxGT7zJpCOPY8jeqbow56rQ0DKcNCMxN0jMJguUnQQbCWVccXxl%2FEJl094TWDuhtRU6%2FBI%2FZyTmbd1xOi9%2BhIIAPHsc7F6EqO0q1oWKxkEcYJtW4SYlv9imDLcgINxwlVucJf3MozO6VQoL8s8%2FMzhvykNQ3Zz5a%2FWU0dVTExUqvehdzgp50azd43lwoa7VqXMen8SfrRWPq4s9p4T%2BCQ2Y%2BY3UU9J9kDiFN9zhfCCs65VD68dT3KCJpX7vZKrbgsHw0aWiqWxX9soZvXJtArieaDRNOPGL5ACOalxeek44BVLCq2yNfr%2FZgoMOGJi8QGOqUBHhZaYSnCAwNWiQc8ekoWrlEGe1GcONzcF5vtq7V%2BVhZg3z03cFs18OtdmMTrQ%2FKOgF7mQfAmseMqTL%2FmM7%2FoWN5BDfx6%2FsiRtI7%2FvxXB5G1j%2FKMGSZiWQzNeB4NVOL9ubljnbu%2Fhy%2BHCSwkJfDfqRnOl3W0sHliY4tSnKDyMbZcpspFPmxRr3RQxO9I%2B32o7QHhNLE0BTaSIVv1kk0lDWi8sWYmD&X-Amz-Signature=b35b518b192d02e0e4bc1641617753fd1a7ceb5f69073fd542b688308587ffe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRYEFBU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC1zwB8C%2FHjsTe%2FUwLE4gw%2F%2FojVR%2B%2FWh3KAbRsdhlgZZAiEArIdsSJLnB0R6IJi%2BCbEdS2iAV8CZpGr1X1CMG5f0bBcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHAT%2FFkGxAdv4y%2BiKCrcA%2Bm94MEvQeqTw1NzTZTPwe33x33ervmuc4UIfgyr2jmHkG7r1MT7QVyLvYGYgBGGo%2BVudO5hr3FqZk7TTYMwBbg5W%2FfEmfuTUqYJIYNg5miZyiWQn8PMmLIhwjG6trlPrshIvbjhTdRMgZPBxur4ZOOqtuyXuWUPMh3vXF%2Fr3ZRtQf9Zb5NwiL1Ar8keiUOUMrgNRvP0%2FUJ0vcrodJqQRMsND9xFo9j1R1MIseyaG5t5QoUeDQZCr7QKefSiGpZEh5%2BVOmEtGVnT7j5Gki3Yi0b8oZq3OZWVUFb3qe0dogMLjWMUFfkzp7haQVbzcHL6agMOxGT7zJpCOPY8jeqbow56rQ0DKcNCMxN0jMJguUnQQbCWVccXxl%2FEJl094TWDuhtRU6%2FBI%2FZyTmbd1xOi9%2BhIIAPHsc7F6EqO0q1oWKxkEcYJtW4SYlv9imDLcgINxwlVucJf3MozO6VQoL8s8%2FMzhvykNQ3Zz5a%2FWU0dVTExUqvehdzgp50azd43lwoa7VqXMen8SfrRWPq4s9p4T%2BCQ2Y%2BY3UU9J9kDiFN9zhfCCs65VD68dT3KCJpX7vZKrbgsHw0aWiqWxX9soZvXJtArieaDRNOPGL5ACOalxeek44BVLCq2yNfr%2FZgoMOGJi8QGOqUBHhZaYSnCAwNWiQc8ekoWrlEGe1GcONzcF5vtq7V%2BVhZg3z03cFs18OtdmMTrQ%2FKOgF7mQfAmseMqTL%2FmM7%2FoWN5BDfx6%2FsiRtI7%2FvxXB5G1j%2FKMGSZiWQzNeB4NVOL9ubljnbu%2Fhy%2BHCSwkJfDfqRnOl3W0sHliY4tSnKDyMbZcpspFPmxRr3RQxO9I%2B32o7QHhNLE0BTaSIVv1kk0lDWi8sWYmD&X-Amz-Signature=2154344ffe7cc7c009243ee6991912bd5a0344a5b92719bd2316b19cc50518b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRYEFBU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC1zwB8C%2FHjsTe%2FUwLE4gw%2F%2FojVR%2B%2FWh3KAbRsdhlgZZAiEArIdsSJLnB0R6IJi%2BCbEdS2iAV8CZpGr1X1CMG5f0bBcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHAT%2FFkGxAdv4y%2BiKCrcA%2Bm94MEvQeqTw1NzTZTPwe33x33ervmuc4UIfgyr2jmHkG7r1MT7QVyLvYGYgBGGo%2BVudO5hr3FqZk7TTYMwBbg5W%2FfEmfuTUqYJIYNg5miZyiWQn8PMmLIhwjG6trlPrshIvbjhTdRMgZPBxur4ZOOqtuyXuWUPMh3vXF%2Fr3ZRtQf9Zb5NwiL1Ar8keiUOUMrgNRvP0%2FUJ0vcrodJqQRMsND9xFo9j1R1MIseyaG5t5QoUeDQZCr7QKefSiGpZEh5%2BVOmEtGVnT7j5Gki3Yi0b8oZq3OZWVUFb3qe0dogMLjWMUFfkzp7haQVbzcHL6agMOxGT7zJpCOPY8jeqbow56rQ0DKcNCMxN0jMJguUnQQbCWVccXxl%2FEJl094TWDuhtRU6%2FBI%2FZyTmbd1xOi9%2BhIIAPHsc7F6EqO0q1oWKxkEcYJtW4SYlv9imDLcgINxwlVucJf3MozO6VQoL8s8%2FMzhvykNQ3Zz5a%2FWU0dVTExUqvehdzgp50azd43lwoa7VqXMen8SfrRWPq4s9p4T%2BCQ2Y%2BY3UU9J9kDiFN9zhfCCs65VD68dT3KCJpX7vZKrbgsHw0aWiqWxX9soZvXJtArieaDRNOPGL5ACOalxeek44BVLCq2yNfr%2FZgoMOGJi8QGOqUBHhZaYSnCAwNWiQc8ekoWrlEGe1GcONzcF5vtq7V%2BVhZg3z03cFs18OtdmMTrQ%2FKOgF7mQfAmseMqTL%2FmM7%2FoWN5BDfx6%2FsiRtI7%2FvxXB5G1j%2FKMGSZiWQzNeB4NVOL9ubljnbu%2Fhy%2BHCSwkJfDfqRnOl3W0sHliY4tSnKDyMbZcpspFPmxRr3RQxO9I%2B32o7QHhNLE0BTaSIVv1kk0lDWi8sWYmD&X-Amz-Signature=9000dac995b634bdd8cd710b97013345f9d2651fab167a415931445ccec8e82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLRYEFBU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIC1zwB8C%2FHjsTe%2FUwLE4gw%2F%2FojVR%2B%2FWh3KAbRsdhlgZZAiEArIdsSJLnB0R6IJi%2BCbEdS2iAV8CZpGr1X1CMG5f0bBcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDHAT%2FFkGxAdv4y%2BiKCrcA%2Bm94MEvQeqTw1NzTZTPwe33x33ervmuc4UIfgyr2jmHkG7r1MT7QVyLvYGYgBGGo%2BVudO5hr3FqZk7TTYMwBbg5W%2FfEmfuTUqYJIYNg5miZyiWQn8PMmLIhwjG6trlPrshIvbjhTdRMgZPBxur4ZOOqtuyXuWUPMh3vXF%2Fr3ZRtQf9Zb5NwiL1Ar8keiUOUMrgNRvP0%2FUJ0vcrodJqQRMsND9xFo9j1R1MIseyaG5t5QoUeDQZCr7QKefSiGpZEh5%2BVOmEtGVnT7j5Gki3Yi0b8oZq3OZWVUFb3qe0dogMLjWMUFfkzp7haQVbzcHL6agMOxGT7zJpCOPY8jeqbow56rQ0DKcNCMxN0jMJguUnQQbCWVccXxl%2FEJl094TWDuhtRU6%2FBI%2FZyTmbd1xOi9%2BhIIAPHsc7F6EqO0q1oWKxkEcYJtW4SYlv9imDLcgINxwlVucJf3MozO6VQoL8s8%2FMzhvykNQ3Zz5a%2FWU0dVTExUqvehdzgp50azd43lwoa7VqXMen8SfrRWPq4s9p4T%2BCQ2Y%2BY3UU9J9kDiFN9zhfCCs65VD68dT3KCJpX7vZKrbgsHw0aWiqWxX9soZvXJtArieaDRNOPGL5ACOalxeek44BVLCq2yNfr%2FZgoMOGJi8QGOqUBHhZaYSnCAwNWiQc8ekoWrlEGe1GcONzcF5vtq7V%2BVhZg3z03cFs18OtdmMTrQ%2FKOgF7mQfAmseMqTL%2FmM7%2FoWN5BDfx6%2FsiRtI7%2FvxXB5G1j%2FKMGSZiWQzNeB4NVOL9ubljnbu%2Fhy%2BHCSwkJfDfqRnOl3W0sHliY4tSnKDyMbZcpspFPmxRr3RQxO9I%2B32o7QHhNLE0BTaSIVv1kk0lDWi8sWYmD&X-Amz-Signature=1e4915031cdf71bfba5d1c7ffb9948d7008b04e4890f51a41aa39efd585cad2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
