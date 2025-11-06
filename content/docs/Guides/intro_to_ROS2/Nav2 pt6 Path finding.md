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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=5735dcabaa1389ae97cb74ff9ed1522b49c65c5926cf2b76f817b20a19cd4d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=35fb18e9b21a8ee865bae34cce086de13e28c9e7d2a357b7044bc08445e4ecaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=20ba7010bc0351d4f2d08a92bf6b1bdf1608ed73ca3d750f35734a3b3aaa1ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=bf3a9c90c96bb987b0e436a43cf5bfeccf62d642a0ca077acddcbc4217e5636a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=4b00a5d9d5778fea3f96e41b7c382bfc4387e7b0f86797d5259552eec2c541e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=defd9ca2526bb012dd81f1697329fe8c6daa879b84092f5034a4fa44f3833cbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=17395cb475f7704e0d4f8b7d4d85a16645a5276d1b328ac9d12fb58d276d199e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=92c249344519350df1353b3a808c9ddd946aa4aa5541a743afa82d52d3759e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=23fbaf3d3c2c8973709f6f679d0e62e2d8e367b232e6f907f5d50d39bffb24cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=dbc2d357fd3100e7f91948a67b840a59c0b6a0cef300ed33b831f4cc7075b1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=b0301a96931e8f68273926226cbbba1770ed516b8f9024fa59740291f01df8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=9ca8fd72ee84466445aa160451dbb2be691caa71c31e1dff4ecad22f6a5d71b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3MC3EV%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9xOjrR3IXcOZylrJbDWDPjwcQgyrILyXwHKKYmUi%2FPAIgWkG0bbUbjZu5KVIr0xMZm%2BAi%2FacNCLbsaZuOHn%2BfTscqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAqILsi5WC6YglFr4SrcAzf5Q7otJ9%2BySxZs9U6zFXi5p6rolGRW4R0AqWZC7T82cMU8ljdfMz7wDutTCe%2F%2FP0nyx6LY%2F5No8lnVwvOYyquibVbV8ZxON430hev4nQyEmFbzrN9wZKwvqBR%2FsnLGdVrAGQFY2Y8%2BOHkM%2B%2F4ZB%2BconKb6fOB9pCqnOv%2FvDDYDB6P2XyPJZRjbazZTNdbWaHhyy9HM3BjrhvfdITJ57waiFsCLBqMJ%2FYhNr6yMI70HjAT3SCFijGnZQ3UMMDGtIlJqxycyVOadxhW5heFYuf4KljPm5TQ7WbL2UJkYVOEsWFKKLsZiN64BlMoOy6sdAK7KgMIZU%2FhdYBaKUZlm06%2BbTZ%2BsdsS8D6e0xGOH0PktdkerWaIWMPKVV0sQeDKgbaHLIMaTk6HSBxdWBnnws5bP26Py9HFmUV0wFchEij8l0NTOSKmDLOPjoAfMfZwmAz2sm1s7gQaQORxm2u127WfwCnndCrH0Iy6iysF3IYJCmIiThhoeMgA3l%2BD1ThhwXkyNADDH2F5HDs16qdDEQCdCsMOPn8unWf5y5ssTuP678ASZHq1rvzwEkvX3XG51z%2FQfZnvQJv%2BVgyYncU6caWe5scKNFHTp16iZK67A6pRhpO7vbk88akkU6zpvMMXwr8gGOqUBPq73pTyDZdpWBGJXiicr9J9w90x5kK5VZo6m8mIZnntUazSj9yzrjKSOa7Q2Rlo3Ln5a%2FykzjQy4JmfKyHO89Bl9h5D%2B4qURj57Ue1T3GSoBLLbb2rBzo%2BTrp8UoTrXSka0vdqF93hV0gLinjnsaZ9OtHZGFw6k4tbFfYVC%2FLq6h01q1%2F0FDo1folIjBPx4GKq0vBRGslhKGbpWtes19wroyyAAw&X-Amz-Signature=4d8059e08da896533fe5e8be711f445072c8a6948954be0621415ff247891964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
