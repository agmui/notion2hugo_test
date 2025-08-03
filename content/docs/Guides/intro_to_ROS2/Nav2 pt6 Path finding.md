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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=5c4f4586ba9b9ee0747f801944b96e5e821473db73858f60dee2ec39975c6b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=4d904c5ec8484a918704c90a6548f5b8c1b871aa8c983d6451f249850ba7517f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=3000ca815a32c755ef1cbe5dde28f1df1c67f15e213bd44e114599800c0b22f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=c3979cf6bd784c24b8fc718b4ac5969afb40f119065df25f6a88de4e0257fd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=3f84435ec1f8a5b74dd576bc7e6a2a50788fe1426a8abd4685b443282808f1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=14ac4bf559ff2c31eee2a8b6a70aeeea6742f3d66cb8ec46926dba94df10f6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=d76abf629732e0002236c8d526941c1d84a58d7174907877317311fb9d73dc91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=305a7c84fb543692c5a65b8ebc3765f2e4b318e15894cae71296739986b5a1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=377dc19c212961fdd41f7683117fc2e352b1d064f90b099505287103f372d6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=6e39433f1bd7d40b8d9881a8f9c18dfe377e73446f13b2ab8f5f628ca628c754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=718921ce5f8d38e4960832d3e6aac61ece722824451b22719337bdc742e2825a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=82bdad21d8d77cefca34ac848fc7238186e34674b7a25f992e64e4d41ba43ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ7GATX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAThF848UsPJrj44V32UIc7vKlZberTcFVAqn%2BsGHRUQIgaJpl7gNT6y%2FWNrDueUP2jI9YDaKz0eTlF%2FTUTclkAIgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDNAj5GbCOXo2hJtpFCrcAx2qqd8TqPDSqAiJl09clcTCcS1XtLUvkthlhRURRytD6bZPWExXcNNhA7zfWXWZBBx91h10HuG58IoWq124MNgu0nWCd3thBYYsM6SrcCyXRNARs1EfJLZPxyqWemPO5L0Py%2BI6U%2FRafQCM5quBChqWQbjWtXu16FUnLgKr2cK9wtc3Ce1KWJPu6Do3t51e4HngWy8Q2zB4FW7hmyrjgBe%2BwviKxyRZeYIaJbEetbrkoWe%2FzjczwR8wxAMYd7Jvbx8fvRU17fO3F9uQMH5wyRGoooOzj9MKyCqWLxSUJ1UvwSPCNnH45bzCHIcHnATQR9H6niPtCHJP6D2bxPK2bmxC8cHMX0eC%2Bt%2FqBgPZKUoVnec%2FIAQJ8Tb1FYoQmnWGpPZmifW07%2FlpEDWEItIV8NPejIwf7p5mBQ%2FdBopOVkFSVZ66mvE%2BR%2BFZfXSs2TBE%2FAM9HVBUHZJ7dlZ8C8NE5DfJParMHTE5xcN31CLVz290xnC%2BSL1CRJ2T6JU7sJ72jOz4NE7A6nj08SP6d9WZzOfhLHs%2FjLSy49%2F8lNVZyDZ1lJk82nGf%2F09azmzthXOFgqdA82HcLf8zDIqjK1jlU%2BCE3digP0vdv1Jy8%2B03OELZQjBR5LZ%2BZIrJbT%2FUMOWhu8QGOqUBxOxukziXU7xyqrlXM5%2BHFmlFKGuyCspZcf9rCKClqrfZr9HdJm3MZ1RgkWmAv%2F8kAmYVVBEbXHEmZPMSx5b8Xdnr%2BtSNX%2F2%2BHRYyebXZKjvcuEKr0RBPRf2%2B5HtfGJeaN1c4eSEywLOLELIpx0kV15PN%2FE4P0wxwhrWQ%2BuOiMG6vIXLLNMFVwonBsHpFPSUAqjfjWMnmNSwPDYqI1k6ttO6QqIWP&X-Amz-Signature=33e7f1686e2deaecb97025e4aa1c124fa100d38ba7dadcd5f13759e7908029df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
