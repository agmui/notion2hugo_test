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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=8eb22fdbe5404d7a06cad3c463bcd6183ce6bdac02b782d48afd2995d6a338c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=e51a222ca29d1f80b1defacf06741448aae11e33aaa2ecc36f074299abb34f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=80cbb601eda0b52578c9695065a341b9e73558df3010cbf32b2d18dc1c27b56d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=a20b9799ca1f90ff770b495ac45ed9b5d25b9a491023239d93d4b71f5461a12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=9a63c58029066e1ac3c0f8af00d524cc1c54bf9d7c6d02de228d80ee15ebc812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=1b55563272b839914f8974e47667a1d72b828f12cbaf48f5b01761d01dea9038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=2cee9e047c78d6c7f47cba3736d90bb0d2a9e52fb3d3f06f4e910b51495c3a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=e2d565b3fef479080ad0aab012b4f795e9209e2290d3c4f4bae08a9bcbaa35e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=678e0777a58ffa738e0d6b6f317cdd6f16b55af8e841b905eaed33810a5f679f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=a2a2bddf4a7fe9e1a10a7c183cd263e6fa8fcd9ae468c4f77c3483a4c4f57c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=fc10f559d12048fc7466dc97af998923d9e52412dea75b7d2a379bba1a1aa768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=8ec8b347e3a48bd487b83689de66b758db8ff44ebb15d3ce3c8b0b392bd58b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLZZMUI%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQD3UFxvovMM%2FYb5RwN9D0nTw15IfOMFdNGQC9AocGS0lwIhAMSBTRoT2uRhb%2BZMb7cgyjTLBlL%2F7HT1d9SB8FlMlkR7KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztzFKbrGCAn2vj9AAq3ANyIiBh1MGsorIuTBAB%2FoSjQxcQc9FGeYyE79Ep3SW0FsgSU25Pf8PV0CQnddtjWfptD3JDDMq%2BXoWBvRqY5PauufBOGH9oWvTQp0%2BY2LmVpbGW3csDL9WjFP%2FvNBsbYg8mdWEZEBjCQwm6DTtmd%2FTXYKkbRwZRcsebrMullTU7cXbZvcZl4zFDg5MhkZaJ50o7OGKaF1yr%2BDqvAxmHXQChul0GI38otkH%2Bn7aSmLQZMB6ANPns5Jurxg6SpC0wx06%2F3Z3D9gHjdOf%2F1lqZnjrAV5%2FUdSV8rAI5U0FpqirqgMlgdlEhNHZgm36nU6ui5dREZu77emz8%2Bl%2FXEoJM%2BLxewoLqfJ1z5TQhNtfaWapmw4wk8jCcLB7F9qfMG6rSigcF2JoOIolsa%2Bgv9oTOVJZdzpRJKCkON8c9vnCqjQvCKDQNFMTDR7BJ6pAXFwhsqjt40K%2BgB%2F07oZG1IU1SC03J72GVPWyO6yOdx%2FKGz1sXa3WrTtiUm66VOHljsjJ57qz9YilxvuzrQmyzq8KOWaClz513OAUzCA9JdDuvrB5XoVFoYHkLXMpH4iAudKSKQJUcfVcgm2Sb2nZobtKZ%2BZG%2FXS%2FltzeS9a2m4L3H2p3eQhb%2BGYKJdl3bgIN%2BhzDb59zGBjqkAZFyExGy8Y7FI2B9MfTF1KHW32KLlRxNaN4sQEL2LcGZifxFe%2FQG8BiVOoicBMamC%2FNcSqpaxm76IBCS%2B8dFC7JeNVXu3qRrOKpCT91v71KxBzCRGoquu749csEqmsKP%2FKsPRepzjySIvsuWQJ556D%2FOPaEP4UxvdVu%2F1004uSI9Kn7bxwrqCWUJYPzBQI7%2BsiA3UrNh4jKpFr%2BfvVjw4GdMstzV&X-Amz-Signature=53c75763111de8c37b319507a96684bbd68fa8687039e49350f958fc68631266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
