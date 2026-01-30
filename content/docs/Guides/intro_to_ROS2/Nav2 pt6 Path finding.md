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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=f1f1261030a144d0f0f709d0e428df1899fd815e7b794d8c5ffa29ed23bfb7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=d7babc5f8de26ed181c94bf110ea7829978a34389a16269804d66b9aa4323a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=3c03d6504289977ec5045dc2cc8861c0d96eaa0159343557421558d8a32e7bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=c376dcb0220e6fbfa9b968b89002d65c0d036cf07e989f6bb46b6c084bb159db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=99f396f8d18d197a9f87726684443a3738b4acb1b2eb6de90389c91ed1715d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=94e7d4e88f7d51674686c6467c1aea94a9ecb4b5b7ef2af82af0193c3a18fdad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=f426bece54edb59e890a02233570b160e1c8757e78b86b087345387fd2234d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=8c7522b7b485674217cfdfaae2deeec6199f1b0acf246bdc6572b4ffb2a4a923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=ebb108869f60a8201c99a2540de6e3ddb280a2b1ce3854672a48e117eb61194b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=5b13e9cb7dff92735c2ac3d457aab3b5239c72abbd05be652facb4fe8fbe6c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=d394eb2e7b4aa9cc630894ecd9f71827ea7e18ebfd73cfefcc1388e7ba5f7196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=e41e8432e884068bd34e424112716bd5038fb48a23376fc121b7ca9e38e6c7d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662USFO73B%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBuVJoWNwpE5chUpRzCxtPdZF7dHJjG8CLnBi9QTI2osAiBOk7HCC8NmexsrSSmyiFAS7rF9EzZbAk0J6hjPfYlLwyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjon6GuLARREPH10VKtwDSJD3XS%2BQ5AoxeRad%2BxKWLF%2Bz7oLVCKYWs3ko7zbsGp9fmQEOPU%2FVU4vu%2BbswSMI8pDphRqjUa8rmWf6ExcarMJuc%2Feufn8oe2AmMZukR5zY30JtL0bzBIKH9PAD5ZHg2r2T3Rqne%2FeC6%2B3nmNdrz%2BU4qeRpxMAghe%2Ft3tmeWiGTCdcALh4LH3gRz8OVWCB3VIoF8bjaOvndjDhCk71RjCxMSFBUnO2QF%2BWmu04piOHgXJnnt%2BKHFWtNT80uqTHNozTH66yVfap2ng1WgP5jj5WxWYvDZWJnDDUBqAjE6fxMEHe16pDGPybXfzhTTvp34gzw0%2B4lVXnsbHJf4M%2BiS4QWEqqaoA56W%2Bl5PULWB5lV%2Fw%2FMD8zdhpw4gr9TjEoAToX%2FXBt%2BvcQXCRFmaH4hsA2Foh1DZH12ufpFSeOQWhFQhpWIoQW2sDPALWHYoxXdHdmsT544mCNutdRgN1S9ugLJkGhUVuRbRf4ZbcwuW8L%2BQYe7CzU4eNfM2ulK15tCXyEN5Ru7fbZnuJZ6kVCL1mwnN3ulAQX2czEgKcS8%2BjmtG4CrTXvWbIL5xssL%2FhyQEv3uGXgkfYku5HO0bGQ%2BB%2FU4tuukXqZf3AsBT%2BAx0N81SdU9C1o8NCIQLDC4w44HwywY6pgEha1I%2B7U8rhuIIw5GChkFZU%2B8LBm8%2FWHRv%2F5oV3Ydp8RNtxa3a0pzrGNGAk6wdx1Jo%2BYkY8pyjNtFq3ZUciqjIbGL5Ox9r24gJoC%2BYVGLzfh%2FDK5JID2Dg618GorgBJiQmozCJdmdSbV0frdndUDo9QDVcLJlmNDAumWL8fXlZ0rP7EKfO3PBXGKh4YMfTyFpJmoTf8NfGyMtRburGfvLxbU8TZB9j&X-Amz-Signature=adf046cf758618fa1ef695bd20eafa3d76c40213d91291361b1613f0340e6d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
