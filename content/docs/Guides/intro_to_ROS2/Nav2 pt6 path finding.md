---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:36:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:36:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRJVY7A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHA7hr4tnYIIAcBLVdsM1uztCEc6uAeK1%2BJEntM4CdH5AiEAzlai5I0aGfX82MsvnPjjLuRw8ul9%2BFgh9zjen6pFBr0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKURKJUFoisOzfyIDircAxElqZi86rfHmA3SnrnfPweTJnoLk0Kptg2QP%2BxmgqswJdGP0TqH2Pn6PhP%2FmVgqiHE%2FBltcIJnq1wFxd5%2FuCbHUIFCGMMHoMLr2sd4Zbd6qKVMB06BBILCxaVxTYyDtEusscoird18WRvEJI%2FaFbVqPRyJB0HjcAj26A%2F98ghDslmUxpz1aKg0XHkwRnxD5uLh7w%2B4F0iC0d22fHzrQP1Mqe7%2BB5%2FPj8Xb24HcE2UkUEyWDiZ6FibjZUc8x%2FyuNZMiqlPrgx0%2FktHRsOEqxknporb73U9Z%2FvPjxwhnazUsbFuWT7TNGS26Rh9EoXPU01uDoWb0pd99SxXCig%2BcDGkRcGOGI%2FJSAXszrTnxCUs6Jfh7GHGA84qjKeMzsoNwvgTbwQe%2FBMhz%2Bj4NRyTEA5BrTzgjhpDJ2Fsgk0Nj6XwMgpt%2FuMfvCSKu1XIOJ8ge9Nimnt1GULV7RFQQiCpPZNS27Msz9bUtvLkqJLmChhKm46c%2BxTFWKU3MbLxVsmGYAfjkO8mfQu%2Fhv3IpWg58kGMbG%2F7POEj2fWBSptDragCOPIoKXtuz%2BWMp4HAOo2OsoyQi8XAR6DMkE2rXJ2gu80Zjn8Vp2ARVt15elqRhzBvXH2bjeAXmhDhpryZhDMMXXisQGOqUB6NFpPDHJoUXNnj1JlmHPG1qeAEGXvCamZL4x2giOqY5fMkIbflZkg0wfATRpKpUfzbM3q3wFERCCEv96uke5VGMCvUb%2FrhVemilsmGagAbICzBJ4XHuv1MRszjiNS92DfuQ1W3h7K46b6fkP20zrtAYwIPXkVCIh4Td467%2FpfuYe2vGb%2FfIuJdmoBN1jjE8bBHExtB821eDqgzF3R7bivn7CqxE7&X-Amz-Signature=43108c9ade47ee152c0634e51e8afdb7ed0c88182b2ba0de8deed41fde82be45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRJVY7A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHA7hr4tnYIIAcBLVdsM1uztCEc6uAeK1%2BJEntM4CdH5AiEAzlai5I0aGfX82MsvnPjjLuRw8ul9%2BFgh9zjen6pFBr0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKURKJUFoisOzfyIDircAxElqZi86rfHmA3SnrnfPweTJnoLk0Kptg2QP%2BxmgqswJdGP0TqH2Pn6PhP%2FmVgqiHE%2FBltcIJnq1wFxd5%2FuCbHUIFCGMMHoMLr2sd4Zbd6qKVMB06BBILCxaVxTYyDtEusscoird18WRvEJI%2FaFbVqPRyJB0HjcAj26A%2F98ghDslmUxpz1aKg0XHkwRnxD5uLh7w%2B4F0iC0d22fHzrQP1Mqe7%2BB5%2FPj8Xb24HcE2UkUEyWDiZ6FibjZUc8x%2FyuNZMiqlPrgx0%2FktHRsOEqxknporb73U9Z%2FvPjxwhnazUsbFuWT7TNGS26Rh9EoXPU01uDoWb0pd99SxXCig%2BcDGkRcGOGI%2FJSAXszrTnxCUs6Jfh7GHGA84qjKeMzsoNwvgTbwQe%2FBMhz%2Bj4NRyTEA5BrTzgjhpDJ2Fsgk0Nj6XwMgpt%2FuMfvCSKu1XIOJ8ge9Nimnt1GULV7RFQQiCpPZNS27Msz9bUtvLkqJLmChhKm46c%2BxTFWKU3MbLxVsmGYAfjkO8mfQu%2Fhv3IpWg58kGMbG%2F7POEj2fWBSptDragCOPIoKXtuz%2BWMp4HAOo2OsoyQi8XAR6DMkE2rXJ2gu80Zjn8Vp2ARVt15elqRhzBvXH2bjeAXmhDhpryZhDMMXXisQGOqUB6NFpPDHJoUXNnj1JlmHPG1qeAEGXvCamZL4x2giOqY5fMkIbflZkg0wfATRpKpUfzbM3q3wFERCCEv96uke5VGMCvUb%2FrhVemilsmGagAbICzBJ4XHuv1MRszjiNS92DfuQ1W3h7K46b6fkP20zrtAYwIPXkVCIh4Td467%2FpfuYe2vGb%2FfIuJdmoBN1jjE8bBHExtB821eDqgzF3R7bivn7CqxE7&X-Amz-Signature=07d319957e7c5945cfba7b7cf5a4e554f7cadab132eda5da857cda487a8926ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRJVY7A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHA7hr4tnYIIAcBLVdsM1uztCEc6uAeK1%2BJEntM4CdH5AiEAzlai5I0aGfX82MsvnPjjLuRw8ul9%2BFgh9zjen6pFBr0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKURKJUFoisOzfyIDircAxElqZi86rfHmA3SnrnfPweTJnoLk0Kptg2QP%2BxmgqswJdGP0TqH2Pn6PhP%2FmVgqiHE%2FBltcIJnq1wFxd5%2FuCbHUIFCGMMHoMLr2sd4Zbd6qKVMB06BBILCxaVxTYyDtEusscoird18WRvEJI%2FaFbVqPRyJB0HjcAj26A%2F98ghDslmUxpz1aKg0XHkwRnxD5uLh7w%2B4F0iC0d22fHzrQP1Mqe7%2BB5%2FPj8Xb24HcE2UkUEyWDiZ6FibjZUc8x%2FyuNZMiqlPrgx0%2FktHRsOEqxknporb73U9Z%2FvPjxwhnazUsbFuWT7TNGS26Rh9EoXPU01uDoWb0pd99SxXCig%2BcDGkRcGOGI%2FJSAXszrTnxCUs6Jfh7GHGA84qjKeMzsoNwvgTbwQe%2FBMhz%2Bj4NRyTEA5BrTzgjhpDJ2Fsgk0Nj6XwMgpt%2FuMfvCSKu1XIOJ8ge9Nimnt1GULV7RFQQiCpPZNS27Msz9bUtvLkqJLmChhKm46c%2BxTFWKU3MbLxVsmGYAfjkO8mfQu%2Fhv3IpWg58kGMbG%2F7POEj2fWBSptDragCOPIoKXtuz%2BWMp4HAOo2OsoyQi8XAR6DMkE2rXJ2gu80Zjn8Vp2ARVt15elqRhzBvXH2bjeAXmhDhpryZhDMMXXisQGOqUB6NFpPDHJoUXNnj1JlmHPG1qeAEGXvCamZL4x2giOqY5fMkIbflZkg0wfATRpKpUfzbM3q3wFERCCEv96uke5VGMCvUb%2FrhVemilsmGagAbICzBJ4XHuv1MRszjiNS92DfuQ1W3h7K46b6fkP20zrtAYwIPXkVCIh4Td467%2FpfuYe2vGb%2FfIuJdmoBN1jjE8bBHExtB821eDqgzF3R7bivn7CqxE7&X-Amz-Signature=a542224697565a6decf151459665202c3b17114791fe75b700fb683ab45d8c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRJVY7A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHA7hr4tnYIIAcBLVdsM1uztCEc6uAeK1%2BJEntM4CdH5AiEAzlai5I0aGfX82MsvnPjjLuRw8ul9%2BFgh9zjen6pFBr0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKURKJUFoisOzfyIDircAxElqZi86rfHmA3SnrnfPweTJnoLk0Kptg2QP%2BxmgqswJdGP0TqH2Pn6PhP%2FmVgqiHE%2FBltcIJnq1wFxd5%2FuCbHUIFCGMMHoMLr2sd4Zbd6qKVMB06BBILCxaVxTYyDtEusscoird18WRvEJI%2FaFbVqPRyJB0HjcAj26A%2F98ghDslmUxpz1aKg0XHkwRnxD5uLh7w%2B4F0iC0d22fHzrQP1Mqe7%2BB5%2FPj8Xb24HcE2UkUEyWDiZ6FibjZUc8x%2FyuNZMiqlPrgx0%2FktHRsOEqxknporb73U9Z%2FvPjxwhnazUsbFuWT7TNGS26Rh9EoXPU01uDoWb0pd99SxXCig%2BcDGkRcGOGI%2FJSAXszrTnxCUs6Jfh7GHGA84qjKeMzsoNwvgTbwQe%2FBMhz%2Bj4NRyTEA5BrTzgjhpDJ2Fsgk0Nj6XwMgpt%2FuMfvCSKu1XIOJ8ge9Nimnt1GULV7RFQQiCpPZNS27Msz9bUtvLkqJLmChhKm46c%2BxTFWKU3MbLxVsmGYAfjkO8mfQu%2Fhv3IpWg58kGMbG%2F7POEj2fWBSptDragCOPIoKXtuz%2BWMp4HAOo2OsoyQi8XAR6DMkE2rXJ2gu80Zjn8Vp2ARVt15elqRhzBvXH2bjeAXmhDhpryZhDMMXXisQGOqUB6NFpPDHJoUXNnj1JlmHPG1qeAEGXvCamZL4x2giOqY5fMkIbflZkg0wfATRpKpUfzbM3q3wFERCCEv96uke5VGMCvUb%2FrhVemilsmGagAbICzBJ4XHuv1MRszjiNS92DfuQ1W3h7K46b6fkP20zrtAYwIPXkVCIh4Td467%2FpfuYe2vGb%2FfIuJdmoBN1jjE8bBHExtB821eDqgzF3R7bivn7CqxE7&X-Amz-Signature=45d6e988d802546e1603461130f6a91a85cf35011f6eb7141dd9abd2b7aa144a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRJVY7A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHA7hr4tnYIIAcBLVdsM1uztCEc6uAeK1%2BJEntM4CdH5AiEAzlai5I0aGfX82MsvnPjjLuRw8ul9%2BFgh9zjen6pFBr0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKURKJUFoisOzfyIDircAxElqZi86rfHmA3SnrnfPweTJnoLk0Kptg2QP%2BxmgqswJdGP0TqH2Pn6PhP%2FmVgqiHE%2FBltcIJnq1wFxd5%2FuCbHUIFCGMMHoMLr2sd4Zbd6qKVMB06BBILCxaVxTYyDtEusscoird18WRvEJI%2FaFbVqPRyJB0HjcAj26A%2F98ghDslmUxpz1aKg0XHkwRnxD5uLh7w%2B4F0iC0d22fHzrQP1Mqe7%2BB5%2FPj8Xb24HcE2UkUEyWDiZ6FibjZUc8x%2FyuNZMiqlPrgx0%2FktHRsOEqxknporb73U9Z%2FvPjxwhnazUsbFuWT7TNGS26Rh9EoXPU01uDoWb0pd99SxXCig%2BcDGkRcGOGI%2FJSAXszrTnxCUs6Jfh7GHGA84qjKeMzsoNwvgTbwQe%2FBMhz%2Bj4NRyTEA5BrTzgjhpDJ2Fsgk0Nj6XwMgpt%2FuMfvCSKu1XIOJ8ge9Nimnt1GULV7RFQQiCpPZNS27Msz9bUtvLkqJLmChhKm46c%2BxTFWKU3MbLxVsmGYAfjkO8mfQu%2Fhv3IpWg58kGMbG%2F7POEj2fWBSptDragCOPIoKXtuz%2BWMp4HAOo2OsoyQi8XAR6DMkE2rXJ2gu80Zjn8Vp2ARVt15elqRhzBvXH2bjeAXmhDhpryZhDMMXXisQGOqUB6NFpPDHJoUXNnj1JlmHPG1qeAEGXvCamZL4x2giOqY5fMkIbflZkg0wfATRpKpUfzbM3q3wFERCCEv96uke5VGMCvUb%2FrhVemilsmGagAbICzBJ4XHuv1MRszjiNS92DfuQ1W3h7K46b6fkP20zrtAYwIPXkVCIh4Td467%2FpfuYe2vGb%2FfIuJdmoBN1jjE8bBHExtB821eDqgzF3R7bivn7CqxE7&X-Amz-Signature=003eb68fd77d1b286d52ae3dda9e8040b1246a73f30ac041b07e2c0131ce2f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRJVY7A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHA7hr4tnYIIAcBLVdsM1uztCEc6uAeK1%2BJEntM4CdH5AiEAzlai5I0aGfX82MsvnPjjLuRw8ul9%2BFgh9zjen6pFBr0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKURKJUFoisOzfyIDircAxElqZi86rfHmA3SnrnfPweTJnoLk0Kptg2QP%2BxmgqswJdGP0TqH2Pn6PhP%2FmVgqiHE%2FBltcIJnq1wFxd5%2FuCbHUIFCGMMHoMLr2sd4Zbd6qKVMB06BBILCxaVxTYyDtEusscoird18WRvEJI%2FaFbVqPRyJB0HjcAj26A%2F98ghDslmUxpz1aKg0XHkwRnxD5uLh7w%2B4F0iC0d22fHzrQP1Mqe7%2BB5%2FPj8Xb24HcE2UkUEyWDiZ6FibjZUc8x%2FyuNZMiqlPrgx0%2FktHRsOEqxknporb73U9Z%2FvPjxwhnazUsbFuWT7TNGS26Rh9EoXPU01uDoWb0pd99SxXCig%2BcDGkRcGOGI%2FJSAXszrTnxCUs6Jfh7GHGA84qjKeMzsoNwvgTbwQe%2FBMhz%2Bj4NRyTEA5BrTzgjhpDJ2Fsgk0Nj6XwMgpt%2FuMfvCSKu1XIOJ8ge9Nimnt1GULV7RFQQiCpPZNS27Msz9bUtvLkqJLmChhKm46c%2BxTFWKU3MbLxVsmGYAfjkO8mfQu%2Fhv3IpWg58kGMbG%2F7POEj2fWBSptDragCOPIoKXtuz%2BWMp4HAOo2OsoyQi8XAR6DMkE2rXJ2gu80Zjn8Vp2ARVt15elqRhzBvXH2bjeAXmhDhpryZhDMMXXisQGOqUB6NFpPDHJoUXNnj1JlmHPG1qeAEGXvCamZL4x2giOqY5fMkIbflZkg0wfATRpKpUfzbM3q3wFERCCEv96uke5VGMCvUb%2FrhVemilsmGagAbICzBJ4XHuv1MRszjiNS92DfuQ1W3h7K46b6fkP20zrtAYwIPXkVCIh4Td467%2FpfuYe2vGb%2FfIuJdmoBN1jjE8bBHExtB821eDqgzF3R7bivn7CqxE7&X-Amz-Signature=c2dbcce149118432cab6e3822807668d6426c5d485801948cbc93fd15b40885b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
