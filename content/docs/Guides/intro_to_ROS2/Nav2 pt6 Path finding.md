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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=0ec5ed3ec34b5732c1f6260eb319f16fec419560c6c055a8c4340d7ace2559fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=ff5dac3f03de5406b77d02665f0ad9d83c8251065ed032968ac07b470ca75b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=655e6b2e78d7868f2024b7341112f106bdfa3fb0e84ee45be10fe0d2697536c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=34688c5a72f0fb3ba9cc7ff29ba4048a78b2dc08490de4cfb4564832a2cde88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=36aded090464196c6a8efd97b5394e0d435ae5c62c56a53e8d5b3d3a7f1b890c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=898e14ef61b8ee3d3d77fce710db72edd1fec7cc47e714ce233011e7252a5893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=67294e04486a999adb1cf62b2274f4333471062ef40aa037c61e56dd46b39780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=0fd95b89dcc46f2e4dfd8638b2d528c85b41e1005e9e1d51c2aab6d0a480261f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=85ea8c4895ab86da13b4dcb1dc7d91701ab5402d6bb42a2af6547a690b4b44ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=31c6c2450cdd0eff3dc7360ada44803b3ff773a558f03905aa751160270734dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=8b9575546788cd02d52cbfb7b228a04a305a64a33f178707d4e9d81b67f4f1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=eba207e16965634024b05e45e231de94c7fcbbb3659b6241b22752a84d6cdc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICQLCYA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKZpXpaomZgBU%2F1449J9aAndOm3mQhlVLTSq7dYVXXNAIhAN4AQsRUcY3asiodahFhzX%2FNggEup0i031F2shxTY%2FshKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Br%2B98j4NGAym7pAUq3APrl%2Brqm3y0SG8CcKp%2BBk6CblV3Py4FEvtJoHH13Lt69ePDeWZEoFbzVXYx6hcXf0s4bNcHASTKCqt%2F9mdUfac01GXbdDX6KbIkXOij68iGQ3eDN2aJJS6sm6NILGcldoQtyEnkyIdmXWh%2BDTimfL4m%2BcbxRG94Ee9uJleV3fBCwkb%2FB9P1us%2FNQ0hARz7o8L%2Bsvx3Eebu3tkK0InlFjZq4L9YdwbMRWqQOppDxQ2TfvVE%2BW%2BOhGXg8xDNgOz9IS0sY7WxjNQelCU4hfqdQugWayWM1Sx9BkBE9qOOq9pEPaMhtMknPqFI%2F8S%2BzM3ny3eMDVNAD7NNX2runSkocqRdAzlpN6oOeiZFEuS5JqDDEuiGtk%2FGDUIVnX7O5u1FHi4kJ4XnvV0UszNP6cgtoYAheaz6QbZlheKUEh9N8WW5ve9O244XYaDIVdGVCjV3IEKoSwBH7EbnedOXxn8GoqKvhLYMGOzBhdrJHGMj8pY%2FZ5s7V6L5h51oomabzIUoKUlHhuzTaUwu9bHRaGO9%2Fy5E3MtpMBU%2FtEGW4uOkgGmjT2Cmo28LjSuUCIk9vjeGLX6UoJL3n23dmu6JWTnHIlY9xxMuXBkvDSbm3LKZ46haHum2l2h2gx0T6I5U5wDC9q%2BbEBjqkASBeydXekk%2FRpvH7XbNnxJCqCBs3A5DlCt%2FDKPi6%2F4PKaUQcSEytgJxCyCfrRKWfgpTMNUP7e75j7o25FxWI%2FCdrF8ccTBmVjNaPcB1sUBhOaMpY8L%2FXk87m95uiEhY7BEEffKM1045j8fGACVFUZDte2CgPfRCjIebxhlEPr%2BPmkPvAWjre4OySYZ7Qstet6WTLmX%2FL2xlvWsdxP9jctynIs1%2B4&X-Amz-Signature=63418a26ccb9104a5586bbd7e6f2038b4516b6061df9e679736841fa1fb3615d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
