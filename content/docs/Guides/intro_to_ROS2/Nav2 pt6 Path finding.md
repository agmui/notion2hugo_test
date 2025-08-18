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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=f6be0b850853e33ea496a88f6a54a2943b097021c489552fac315d0dfb586519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=89693eb0b9091a90fa417fa071407e902122e8c3e945709834cc0fbf7f43dacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=3654605edc8588d27830970062de49ba3195b3b0f9e6bc3ea3d29ebee0477d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=c4dfee270a50e9893af94ab40ac5c02d2a752d6b73c43b8d109aa058a002b3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=72ccf19bfd6e189277c9b16c9167a040be2595984052ee4f4815014d1a1c9592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=096b8c7adf1b370d24b4d3e705871b52a289613d2d6511de4f16098764b74bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=e7e7fe7a51eafdd48443da7ce5d6345424dea5d5460be9a6a076d79b4e13e143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=ee32d91e5a287fa814521f58d185315ca78c79ec1a51c96675ee92e039c5e7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=e15d43080e0bf5d3179d20a633c18d3a5eac1c4a07552f0b77510c282de3cea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=21395795736f6306108eaec8802cc42a0a4fd6fbb44836729a65c28d1f5db499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=561fd61b9111cc1b3a3a2a294200f39835cfd0d28a978f9af9a26dba9d11bc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=acfa2dd34d9bc8affa48467023cdba6ece8f305f268b0dc588fcd5d34e9995ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY5JIJ4L%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCuzUQI7HY8WfjNP1Ly0hb4MCHD5i7LQBfKNILAaUdVmwIhAIz8dU4R9DIad%2FQrrMX9GSZZxp4q8ScjTa41qesRw0%2BLKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuhLjcekp8Lp7ebt8q3AOxhhboq00gd9nVeVUlKV7JVTt6IZGjR6duijB2LpSOXapssZ0KXCWxsRp7iE4arEJFZwU1qSlnsw%2FgfJsnRr6ssNrM3DfT%2FNs4UDLp8YxsZjB0AX8kfQ5UQc75MtKbmbn4ciimVT6JFL8pTEWiOPUthtonakrsbKyuUXwO%2F4ugAX7i2NLdVUgvvtpAfFODi40XguKaGyOHcH8q4YixceC97XIpaS%2FhKLNVDZZDZqCAQ0kYeD%2FUrw0%2BG1cBIKl26OA5M1vhV%2BJUP7FDzJV8JubS1hmYs%2FrbDg1gyga3d0CnePNJQ%2FIAVJNFI46DywiWOnFVfF8f7QtUZDfuOkI7uPyUQmxjvVt96ir2lAeBJQxyHVueqxdyTParZkp3B2x4usbEDVWScskEU3oB4AH%2Bby%2F9nKoKgByqcOQhUjIaxjudsGT86PaKjGzDd4yXKIJxtZ8LcFx7DUt2uR%2Bq7e5yp%2B%2BePK0zYjNQoqdBpQIW4P3%2Bf%2Fk6qxXls7NrfPchi8L1X3aCqumZL%2BHFls07OQOiH6JzvTQMWijFkYTU0k2ZCYSk2HflcWU9hvsczg%2BJmRapaaqiLMzkAt54xh93F91%2B2YuBBpp7OlHK62N81pdylw4nK1xBzKWIkCDKdwGNBDDv64nFBjqkAUgG1jFeOx%2BX76s4hSvZ2zVhSVWJn110%2FWJly%2F%2BrIe0WjQhC1LxdF14BuUOwQIhL8I%2BTv5ANOifH1kcKBniuv7gpuRZW93hoOQz2sd9j3td1qsAVnerqIBGtc3mvOWPw77HFDwUn6Yucvfwc3tKuqwDuc%2Fot%2BUQrDJOck8LVxuqM2OZZPs4GG7Fx%2BSQYD4bln16KfWtKXTtihkD9AeoDnXbsNoHn&X-Amz-Signature=d9d3b1bfd90fc65560ccff4a93a784b014a4260dea4653e06a679c21882f54b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
