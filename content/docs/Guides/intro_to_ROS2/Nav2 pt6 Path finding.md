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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=46ce6f77862ebd1ea12ff95ceaec26c26341f3b848ce7459c5c809f54fc2c5ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=a8c3baf5d1a5dfd7a15b107ae21ede05b5a33dedcbf8d754cadfdb965567a7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=fc33fa92f68c74ef6fb75453bbdafe2164bb7a8fd00ad178c19a114c100570fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=44c17cb6d391f9d9045e698d30f061a7ee61c07b52421e8406f18139db7b6345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=1be8da65bf2c94dc397a0c645f11696bfc7b521b3a8e7d4650e4df95ae66754f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=1577d8b486d7bb01def03aa6e9823fa1bfb4ce65478c6a12f2bd0c38672fba7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=3f6ebc8441db94f387243342e6a0eb63dbe563f66ec945b50e75775aaccffba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=095a116d76d9ca012ebaf77957887c7a3459f586b6645004cf54020c5bad33d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=0f238046776b8cbaeb3f09d6c7239d1e23a977710a4ebf74dbc805ce7f051c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=fd558fc595e110bd093c59d9fea3700f33480bafc3172c7257de75a320eff342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=6ff4a67c836436cfb587683bf22f9b9876866ddbf634b48848ddc0ccd995954b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=2b295fcc39f7bcaede7bc324206355d4e902132e80b3c9231838dabfab326dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGPFFLN%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCy7TzXgArPseU6rYprLtg7pdNdpCVa%2BSLk3yKIODN00wIhAKbG6PWxXG3k1jG2H1J%2BhcEzHTWlE1U2Koz0bj3JHu7HKv8DCDoQABoMNjM3NDIzMTgzODA1Igzr9ihzZtLHu1tGfPQq3ANswJ9prnD%2BB2vudPux3VJqsphUME43AKMw25bFqXG%2FajU%2B94mUAGoPOCGRyUgX7uvh1GZF3gqAxMgo6v7XuTGVq%2Bx1XZAF0gQQL0BOi7r0ykih%2FpS%2Bc22yZfbPwqVZLQs2%2Bo%2FPre8H3xVzWuDnrCnL%2F4Z7cd3Qo5bpCmr3XM9xbKw9%2BmnQ5u4uWeDuP1Xqipio0VEuhxw4VR%2BFPj96fZUy3AxBPBlNj39FWklSBWHT62110qPBbRHaZtHf6uq1OaN%2F2y8wR%2Fau3IjTLH6VJcze9xTf2cr6TK%2FdbgpjsWBEqZISNXu9Ie3ChF9pXmxh4FpozqdGzTIc0J1SEtwqayi7lDCskY%2BnxtX%2BJsC7Nr2SKn72LaWvR0sLgYSTL0hLyq2ix5BFp%2Brk%2BVeHrNswrF2qGpLSfa6YDgF6BGqrVm%2F%2F1J2sRgEVNvTbPq2pLes7W%2Bi4J1mrMShAij6kUjSdO%2BNXVPuunv9smebaA%2BFIlBkp%2F5uFo2uGaT471CRKPTaUOF6Ld6XRnCbFHmEB1KT21yvYysjJ4JqwgkkH%2FPtCv5oxPxCg%2BTsVSLH4DxOEpOQ6E2VjgWBk7d9hONJJTihMZWMBk62YaYZwhX69%2FznqKRZsLelqwhBk74JuJ5r33DD755rIBjqkAWH0NSQSH58fFqMMBU1o%2FFIWkCtDixvG73yuanJ1AxZGLBS9e9Rrtl0qRKn8nh5arl%2FXbaJLrnB1TnT3sODChdjufJqfziB08njYe822RHmGmjydAt6maFmK2%2Bd%2B7Xglr8x4h4TA1RHuWYdLMgCtO0d72EYo3bL55yn5Nt5iMvNUlEcfocsPixZveQVG2txHcz2OWpULBPrTMROYM1%2Bp7QH6PCQp&X-Amz-Signature=c7cc4abb3bb502509259d02352b2aa50abb561fb0ce8917c122f2237d2d5f59b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
