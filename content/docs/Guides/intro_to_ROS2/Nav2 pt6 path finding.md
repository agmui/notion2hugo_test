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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6XPCOG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIARAsY3Mt5D4zjRsMiKlOsfvUdmC0Iyb5IWmvAPxEZVaAiA9%2FOLx1gVDPMwlSk%2BYqHrmy8xE%2BNDJ%2Fn%2FtR%2BccMs9azCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UQz1fk126hRFIpkKtwDJOmEvpW9Y9Df2dBSz3cEezU7ifxKpAU3XP0zuvNZo1x6LlHzYY4x94J%2FYjstGLNkmA9RDQGkmqqloR0aQXSQ%2FxDony%2BIIwGSb88tkbKJBe6l47RTEOhKMDfs3g8YLYKMk2Vfy1vM%2B%2BLpUqqHXlD9Obaj2HMHY5TvuYXpaM5BHiZ8RyuCfE%2Fqp9q4p8bCjoaj6Pl%2FAFnCM%2Bokk3xaEj1cXEuYbVBE%2Foj80FWpXWshjdtLRJIB1yz5OcpjLWU4vv7iMA%2Fv4z9dPRgimh%2FEpFWp%2BDyBUqA7hdLV3Xu5bPZdKUBpu9abHsrzf7Py%2FU%2FdG6T2goN9CWMriPLxlfNXjYZWecOCErjH5yrWcOukrf6ZkT38011dOJtTZFXf%2FKiwOXrqumKgl368IKLFi30g3yGiIXtP1MtoKgUzeIxzgHGke5LswffhDhZAbNhWMaRvi22Aob2MNxiCNcCaoAockU4LKV%2B8NeUTUVVHFjdQKy6QzXFqiyosPsFghggIBhUkbJnCei%2F1NDRq0sqyHaD7AJIzgIquNG7dZHcpbcoM3jOGIx6YQZI%2BqROxyvgb%2B0iiN%2BAvKUOTkZrVQkBZCP5mvNERnvA9lkWjYjKoWsqofY8TeKhzl%2BxPIi2QQZ0XtZAwkbSdxAY6pgFcylQbq3DnG7jl7a1MX4KUhEfbnsPpYJR9WDCozJIsfVHRmeHjysfINSW5R%2BJ%2B0xKt5kRxWoaTTvaos1npKvAFJq7VUS1ZpOKhr5GdU6yapLUfvVMAA0ZtITxii28fUTpacpKYL2R6SRpv4g0hSxZFdL6cZ243qP4Ap%2BbtYPqql0OB8LyKQsqWzMCL31p2zZxnOvC5xzsxSUDL5AQOfF6SKXetft0s&X-Amz-Signature=9c9e499cd6ab9b1a1d529295d0bb4621f9bdb971d7373d97506e64489a847774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6XPCOG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIARAsY3Mt5D4zjRsMiKlOsfvUdmC0Iyb5IWmvAPxEZVaAiA9%2FOLx1gVDPMwlSk%2BYqHrmy8xE%2BNDJ%2Fn%2FtR%2BccMs9azCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UQz1fk126hRFIpkKtwDJOmEvpW9Y9Df2dBSz3cEezU7ifxKpAU3XP0zuvNZo1x6LlHzYY4x94J%2FYjstGLNkmA9RDQGkmqqloR0aQXSQ%2FxDony%2BIIwGSb88tkbKJBe6l47RTEOhKMDfs3g8YLYKMk2Vfy1vM%2B%2BLpUqqHXlD9Obaj2HMHY5TvuYXpaM5BHiZ8RyuCfE%2Fqp9q4p8bCjoaj6Pl%2FAFnCM%2Bokk3xaEj1cXEuYbVBE%2Foj80FWpXWshjdtLRJIB1yz5OcpjLWU4vv7iMA%2Fv4z9dPRgimh%2FEpFWp%2BDyBUqA7hdLV3Xu5bPZdKUBpu9abHsrzf7Py%2FU%2FdG6T2goN9CWMriPLxlfNXjYZWecOCErjH5yrWcOukrf6ZkT38011dOJtTZFXf%2FKiwOXrqumKgl368IKLFi30g3yGiIXtP1MtoKgUzeIxzgHGke5LswffhDhZAbNhWMaRvi22Aob2MNxiCNcCaoAockU4LKV%2B8NeUTUVVHFjdQKy6QzXFqiyosPsFghggIBhUkbJnCei%2F1NDRq0sqyHaD7AJIzgIquNG7dZHcpbcoM3jOGIx6YQZI%2BqROxyvgb%2B0iiN%2BAvKUOTkZrVQkBZCP5mvNERnvA9lkWjYjKoWsqofY8TeKhzl%2BxPIi2QQZ0XtZAwkbSdxAY6pgFcylQbq3DnG7jl7a1MX4KUhEfbnsPpYJR9WDCozJIsfVHRmeHjysfINSW5R%2BJ%2B0xKt5kRxWoaTTvaos1npKvAFJq7VUS1ZpOKhr5GdU6yapLUfvVMAA0ZtITxii28fUTpacpKYL2R6SRpv4g0hSxZFdL6cZ243qP4Ap%2BbtYPqql0OB8LyKQsqWzMCL31p2zZxnOvC5xzsxSUDL5AQOfF6SKXetft0s&X-Amz-Signature=2189643b320f4cbc052e5888e9ce0f4533198998b499070d22a59508cc6d46e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6XPCOG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIARAsY3Mt5D4zjRsMiKlOsfvUdmC0Iyb5IWmvAPxEZVaAiA9%2FOLx1gVDPMwlSk%2BYqHrmy8xE%2BNDJ%2Fn%2FtR%2BccMs9azCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UQz1fk126hRFIpkKtwDJOmEvpW9Y9Df2dBSz3cEezU7ifxKpAU3XP0zuvNZo1x6LlHzYY4x94J%2FYjstGLNkmA9RDQGkmqqloR0aQXSQ%2FxDony%2BIIwGSb88tkbKJBe6l47RTEOhKMDfs3g8YLYKMk2Vfy1vM%2B%2BLpUqqHXlD9Obaj2HMHY5TvuYXpaM5BHiZ8RyuCfE%2Fqp9q4p8bCjoaj6Pl%2FAFnCM%2Bokk3xaEj1cXEuYbVBE%2Foj80FWpXWshjdtLRJIB1yz5OcpjLWU4vv7iMA%2Fv4z9dPRgimh%2FEpFWp%2BDyBUqA7hdLV3Xu5bPZdKUBpu9abHsrzf7Py%2FU%2FdG6T2goN9CWMriPLxlfNXjYZWecOCErjH5yrWcOukrf6ZkT38011dOJtTZFXf%2FKiwOXrqumKgl368IKLFi30g3yGiIXtP1MtoKgUzeIxzgHGke5LswffhDhZAbNhWMaRvi22Aob2MNxiCNcCaoAockU4LKV%2B8NeUTUVVHFjdQKy6QzXFqiyosPsFghggIBhUkbJnCei%2F1NDRq0sqyHaD7AJIzgIquNG7dZHcpbcoM3jOGIx6YQZI%2BqROxyvgb%2B0iiN%2BAvKUOTkZrVQkBZCP5mvNERnvA9lkWjYjKoWsqofY8TeKhzl%2BxPIi2QQZ0XtZAwkbSdxAY6pgFcylQbq3DnG7jl7a1MX4KUhEfbnsPpYJR9WDCozJIsfVHRmeHjysfINSW5R%2BJ%2B0xKt5kRxWoaTTvaos1npKvAFJq7VUS1ZpOKhr5GdU6yapLUfvVMAA0ZtITxii28fUTpacpKYL2R6SRpv4g0hSxZFdL6cZ243qP4Ap%2BbtYPqql0OB8LyKQsqWzMCL31p2zZxnOvC5xzsxSUDL5AQOfF6SKXetft0s&X-Amz-Signature=150bf56acec71f9f7ab34d717aaf3a0ff4e7907e762a7402e647747117bd70b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6XPCOG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIARAsY3Mt5D4zjRsMiKlOsfvUdmC0Iyb5IWmvAPxEZVaAiA9%2FOLx1gVDPMwlSk%2BYqHrmy8xE%2BNDJ%2Fn%2FtR%2BccMs9azCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UQz1fk126hRFIpkKtwDJOmEvpW9Y9Df2dBSz3cEezU7ifxKpAU3XP0zuvNZo1x6LlHzYY4x94J%2FYjstGLNkmA9RDQGkmqqloR0aQXSQ%2FxDony%2BIIwGSb88tkbKJBe6l47RTEOhKMDfs3g8YLYKMk2Vfy1vM%2B%2BLpUqqHXlD9Obaj2HMHY5TvuYXpaM5BHiZ8RyuCfE%2Fqp9q4p8bCjoaj6Pl%2FAFnCM%2Bokk3xaEj1cXEuYbVBE%2Foj80FWpXWshjdtLRJIB1yz5OcpjLWU4vv7iMA%2Fv4z9dPRgimh%2FEpFWp%2BDyBUqA7hdLV3Xu5bPZdKUBpu9abHsrzf7Py%2FU%2FdG6T2goN9CWMriPLxlfNXjYZWecOCErjH5yrWcOukrf6ZkT38011dOJtTZFXf%2FKiwOXrqumKgl368IKLFi30g3yGiIXtP1MtoKgUzeIxzgHGke5LswffhDhZAbNhWMaRvi22Aob2MNxiCNcCaoAockU4LKV%2B8NeUTUVVHFjdQKy6QzXFqiyosPsFghggIBhUkbJnCei%2F1NDRq0sqyHaD7AJIzgIquNG7dZHcpbcoM3jOGIx6YQZI%2BqROxyvgb%2B0iiN%2BAvKUOTkZrVQkBZCP5mvNERnvA9lkWjYjKoWsqofY8TeKhzl%2BxPIi2QQZ0XtZAwkbSdxAY6pgFcylQbq3DnG7jl7a1MX4KUhEfbnsPpYJR9WDCozJIsfVHRmeHjysfINSW5R%2BJ%2B0xKt5kRxWoaTTvaos1npKvAFJq7VUS1ZpOKhr5GdU6yapLUfvVMAA0ZtITxii28fUTpacpKYL2R6SRpv4g0hSxZFdL6cZ243qP4Ap%2BbtYPqql0OB8LyKQsqWzMCL31p2zZxnOvC5xzsxSUDL5AQOfF6SKXetft0s&X-Amz-Signature=c15662f356c6842a0aa1455a3bed9dac3ea86e29e99bab41359b2ddb8b673daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6XPCOG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIARAsY3Mt5D4zjRsMiKlOsfvUdmC0Iyb5IWmvAPxEZVaAiA9%2FOLx1gVDPMwlSk%2BYqHrmy8xE%2BNDJ%2Fn%2FtR%2BccMs9azCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UQz1fk126hRFIpkKtwDJOmEvpW9Y9Df2dBSz3cEezU7ifxKpAU3XP0zuvNZo1x6LlHzYY4x94J%2FYjstGLNkmA9RDQGkmqqloR0aQXSQ%2FxDony%2BIIwGSb88tkbKJBe6l47RTEOhKMDfs3g8YLYKMk2Vfy1vM%2B%2BLpUqqHXlD9Obaj2HMHY5TvuYXpaM5BHiZ8RyuCfE%2Fqp9q4p8bCjoaj6Pl%2FAFnCM%2Bokk3xaEj1cXEuYbVBE%2Foj80FWpXWshjdtLRJIB1yz5OcpjLWU4vv7iMA%2Fv4z9dPRgimh%2FEpFWp%2BDyBUqA7hdLV3Xu5bPZdKUBpu9abHsrzf7Py%2FU%2FdG6T2goN9CWMriPLxlfNXjYZWecOCErjH5yrWcOukrf6ZkT38011dOJtTZFXf%2FKiwOXrqumKgl368IKLFi30g3yGiIXtP1MtoKgUzeIxzgHGke5LswffhDhZAbNhWMaRvi22Aob2MNxiCNcCaoAockU4LKV%2B8NeUTUVVHFjdQKy6QzXFqiyosPsFghggIBhUkbJnCei%2F1NDRq0sqyHaD7AJIzgIquNG7dZHcpbcoM3jOGIx6YQZI%2BqROxyvgb%2B0iiN%2BAvKUOTkZrVQkBZCP5mvNERnvA9lkWjYjKoWsqofY8TeKhzl%2BxPIi2QQZ0XtZAwkbSdxAY6pgFcylQbq3DnG7jl7a1MX4KUhEfbnsPpYJR9WDCozJIsfVHRmeHjysfINSW5R%2BJ%2B0xKt5kRxWoaTTvaos1npKvAFJq7VUS1ZpOKhr5GdU6yapLUfvVMAA0ZtITxii28fUTpacpKYL2R6SRpv4g0hSxZFdL6cZ243qP4Ap%2BbtYPqql0OB8LyKQsqWzMCL31p2zZxnOvC5xzsxSUDL5AQOfF6SKXetft0s&X-Amz-Signature=ee8ee5af297a10a4d60a0edf0105223076293edf0da3ca2214fc243187b6f9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6XPCOG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIARAsY3Mt5D4zjRsMiKlOsfvUdmC0Iyb5IWmvAPxEZVaAiA9%2FOLx1gVDPMwlSk%2BYqHrmy8xE%2BNDJ%2Fn%2FtR%2BccMs9azCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UQz1fk126hRFIpkKtwDJOmEvpW9Y9Df2dBSz3cEezU7ifxKpAU3XP0zuvNZo1x6LlHzYY4x94J%2FYjstGLNkmA9RDQGkmqqloR0aQXSQ%2FxDony%2BIIwGSb88tkbKJBe6l47RTEOhKMDfs3g8YLYKMk2Vfy1vM%2B%2BLpUqqHXlD9Obaj2HMHY5TvuYXpaM5BHiZ8RyuCfE%2Fqp9q4p8bCjoaj6Pl%2FAFnCM%2Bokk3xaEj1cXEuYbVBE%2Foj80FWpXWshjdtLRJIB1yz5OcpjLWU4vv7iMA%2Fv4z9dPRgimh%2FEpFWp%2BDyBUqA7hdLV3Xu5bPZdKUBpu9abHsrzf7Py%2FU%2FdG6T2goN9CWMriPLxlfNXjYZWecOCErjH5yrWcOukrf6ZkT38011dOJtTZFXf%2FKiwOXrqumKgl368IKLFi30g3yGiIXtP1MtoKgUzeIxzgHGke5LswffhDhZAbNhWMaRvi22Aob2MNxiCNcCaoAockU4LKV%2B8NeUTUVVHFjdQKy6QzXFqiyosPsFghggIBhUkbJnCei%2F1NDRq0sqyHaD7AJIzgIquNG7dZHcpbcoM3jOGIx6YQZI%2BqROxyvgb%2B0iiN%2BAvKUOTkZrVQkBZCP5mvNERnvA9lkWjYjKoWsqofY8TeKhzl%2BxPIi2QQZ0XtZAwkbSdxAY6pgFcylQbq3DnG7jl7a1MX4KUhEfbnsPpYJR9WDCozJIsfVHRmeHjysfINSW5R%2BJ%2B0xKt5kRxWoaTTvaos1npKvAFJq7VUS1ZpOKhr5GdU6yapLUfvVMAA0ZtITxii28fUTpacpKYL2R6SRpv4g0hSxZFdL6cZ243qP4Ap%2BbtYPqql0OB8LyKQsqWzMCL31p2zZxnOvC5xzsxSUDL5AQOfF6SKXetft0s&X-Amz-Signature=d3e29f0b6fcd7cfd78b64d4f54a6b2cb19d54af09976c9c4cf819d79ade6cad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
