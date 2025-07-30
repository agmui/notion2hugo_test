---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=c52392e6dd43fa715cdbc80f13d7f26c90cba688ca8268c884e3dd306d645d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=686ef9d6acd683f6b211df3a3d98414be48e41c3be49d8565b0ddc5a5a0826ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=10974ad451e1ee239e81963bf0cec9285edc6922789a8565875306f696c2a63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=8690d3715c4d864a38b1f18c5735608667c7f287f5bb28e7a8461ff7e64527ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=efcc16709e7d899b92077cfe5738f8d1c4898efe376ba6389977fac143b9624b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=33a7bf7a8053b368fb9c370963ad3383158ef81eedda47f0da7dafcb1afcd8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=16e1f1130169fd6c7d96c0711cbe34ad08c409c1598ce6f4f497741b8945e25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=5756a3a849e05f26b5ce5770ea5765efb3610395c6d1b4798e33d775d6a71adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=1ba9076e05e27e01c0cb0605b75bbe85f7c4b1c8c7eb56b34d7c3875947e2782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=524a43d0fa73f2651ef7ec861b304c388aee26676f1bbd158ab46736bd8dc00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=55d0103a3cf9c02e81287bf50101c8a004f7615476ccf9507eaf62d83a5ee5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=4412a1622409422627859255e90fab96505654ddc7e1834c4b4bd2803ced561e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WFKNGKF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T231007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDxnZk%2FHpw3CL1SQG1ZlkbcoCfx9xQnVBjfTcFC8TN4GgIfMGOLmQQmn1S7wLsf1IPI%2Bbs1PLUxElLW%2Bylg0R28LyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXWdRl8YTFDCsFMsmKtwDOgW4y2YKyVkb%2B8MYfwZToGCT08RPbr6e0y3g1nM7Wdqgt7hoQBoSM1uO1%2FVDPaxnjXth09MfFAeV9Bs1S4rAHVzBS0Nv%2FD0d5u0SH9KTWCq9OauiIQZO1QnxRQ4EdCkE2Q0IXQf%2FTEYLv7n7kbp0ftGBnRKWB0LXzbWLCKbwJS14bBA456l%2FDWHqpWngOSGts%2FkhZTwpWEZ3NP6I93XF%2BbsqRD8fIA11nPEStE4oNrrVxedsGAJ%2FA2TuyshIHZ67h7ExsH4xv8KF4%2F%2F1%2FIgwwlHSSHjaBstF3GKMKiDqYBzLHwAu6X76LXzGWERCjCBRMcmn%2FDLK1TFPLNCEaI81eq4AyNK6AwHyWlSg6O1%2FjcW5T72%2F%2B9QWoOGEYaXUPgFMCUJm3n63zq44U6%2F55Kq9Oz34cIgOqQXMfuvePBZJr%2BekMKWenlruysJfkIMrQhASopSvvv7PzQKw4WT7ldzTpy%2F8aUCvfGyhRs5WVIPj%2BOFoDaqSRzz2Qr%2FT0keZ3jjK0UIjsQDZ81ehHMwdxGCzopJr2Ygu5IHwbfiUdwpRAblMCROWR2Jw5RtgeWIwmVWdXPqm6QwZaK5d7XXsjFWc3UHR2%2B5aLPRVZY2T1rKz6guduy5BRzdqhqAhIfcw3qKqxAY6pgF9ktbLJ%2BfysZWhAK7QE%2FAg4EY9DvkhpPj7DH1%2BJ7NJ2nOLiz8NMD1RsIGi%2FfcRMU0a%2Bm2%2FlaL%2F8Y5JzfEoJlLXwDh8hRfxZcXd10dfTvbooFELMJsyaYnZF2sqG9xsu7AL2eZDI7nlNcMWfsUWjzFgEHfRUcRtsw04ntjm97dziDfc5AbCQXu3ZYk4oBVKkTz%2BzDaxrPhY1Y8gbecMdE10uq4WibLo&X-Amz-Signature=4d918442fd34edf8cb385697620b081f7fc5ff0393e16c0759b0c2a95e5f41f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
