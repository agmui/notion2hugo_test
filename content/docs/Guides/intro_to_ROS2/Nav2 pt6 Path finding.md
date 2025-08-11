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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=542d216d90a1778902672e9266cd44450983e70a4cd7504b9eb1355328624360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=a047e6278e7d143554ccd758ae5ffd2e8862b3b2f9e26b16d47600d9b9a46553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=6b521a6b16991d387d198ff005b3b3ffd4044af73b91ec3d84e4ec2854086f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=2ccec5dce5aa2fcbbd8f9bd90d93299bbc7bb6e2e0b57d4cd2586142f081e58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=a0b0ee69c25ecf84710b8440d0960c79c385de9f5ba9457f7254e5dc46cf4fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=3db89283d0c45489a32da0195c3a23751c03a0aa93ca3aacaa0539a2c778edb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=97a5f12567476628b7430842609977a40378f9e155a26eb24a2103b67154987c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=acdd599854032a2ae4079236a1b93bcb955cefa0c4ebdb96f6ce43bc6e3b3079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=607d6e02729cdbe27d320435cba3859590c82c1356c445a0f3c1305f9d45c0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=bcc2b0256a0303e3d111845379130d99649b9afd23647dc13116f2784e61ef0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=cca10f90d646836fffa89c321f413558ddb93466b870bc2c6d2f0228adc8b6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=665ed67aab4794a5e5502f3f77d6cce6394c8fea614a7056e8d86f5a81395332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BEKIMWC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7K1H9d4bCcNc3yQlO6PUyB546Nx4urWRl9cnlby5pvAiEAzs7nXd5euggc%2BWUgXd0su38OvOBR262CuiyBYCyH3%2FEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuE4LTLnwFxdWvkZircA1W6fBDe0QFkW11Hff%2FCrpmywxBBiAsLnBOadW%2FOw7YB9L7CDKMb9JPhUPYkGrwHBZLLZTbkR8IzcaCnm41lDnTNlpECWTk5kP0PnAZKHaWCF%2Fqvhk%2FhRCO7BltN6UEqfeD9T4jSAFitau3xpYzhSGIQS27kLevj%2FRVfnVpnj1ZE%2FAKWEr9OHhtDD2WXIi%2FXdTlDBQsCIOxgzj2bxaIJIwVkejatLOH4Wt59mZm8dLnyMT4l9m4u7RfJncL7YhhNnTJUml0eJrfqQlIeNv9ym7Z5L2LKZFAq0EdFHvScJmHWZ5WHmV7s3qiAhlD34XMcLcrZPnYwahBhCkBXfhJk7wlCXuaJJ1DOgjGlN%2BWGmj9sMbHS1dsJ%2FoR70kpxn%2FcILZtsN5PYMwpwrA8RXczGVx4gBYiU%2FNstp1iRMzWS5OG7VD3A9CZmyZlvkwl1OfHOQmpguYrxgK%2Fjab8evdP190jkbZGhe%2BcJ8hEyNLCa4zxI%2FAYvvlkfrGUe4dzlct9y0rz775Rc97Mni04WX9kOWqXm7YZDFRlVT5jBrojEho4eLgSd3WqruMQkwcUTZ9MzEtWFyrbDReXuOa3Ev%2FxvB5dIv7At9yGIQqR7x5YkUn9vmaWPUWVco%2FvLwS6LMPWh6MQGOqUBy8rPtC7OMRZwZoRgjFjmL9%2Bus12bdf2uQlGQNuxYG3YHIQ5y5T0bg8iV1FSZZvcSIcxtl5HcnCMuu1WMhWc4KJzpcovUDhWB37Y2GD5zD7EWreg3KFVoKnw4XTJh1XZoP51NZcWQnfd8%2BE0MAd1SdTuil9RgfADXpYZ4EJ%2BpB%2FlU4jSKG1F6vmaDrR9P26ZuizxeBxjdnRaljV7pSV%2FtSDlBahIm&X-Amz-Signature=27eace83a8b1efce681286138f6d431351b0deb6e03f72d50d755997a9689262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
