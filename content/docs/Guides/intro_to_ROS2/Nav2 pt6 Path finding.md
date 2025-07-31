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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=a7779264f5963e40179f5b85e4ddf674099b3c5b049c57152f7725e0675ea5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=db458adac8888ccd2fa922d565fad7198ee6cf1f3a32559bf38eeff35f5e318d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=0e558a2cf10dec0583fab98ebf63a61ab9bdcc3b1fa97dbe372ea853d02b6435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=665965a9110026710fcee98cde0261ee005141a54a915b3b27066925d36d06e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=59c23089b61d3120b27f43c9a97f233f6e2fcc25ea45d4592057d9a7cb50d537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=948d9291febbeb364980f025f4cca9f675d8a96cae557b0af960b1067817c853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=f22d43cafa14521d83f22241a4c86564c5f30f999037f9652468ac68994abb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=6e2f4aa3566ee2786a649ccf71432738d97e2d27473af5058b9f9633d9b77f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=5fd3091469013ab82796f261709abd6bf6f05e642d20ecd0cc7b063e45c22ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=713df86b2e12b1a32f2bfb235744b1ee883b5de9442730b72f1908a823b0d3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=5353db0bb1095f83f9e883c50ea77877b49a2d2846be8c5a24d2c9f6be9b429b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=ca4c11b87682cf98267844a1fe1f5158632e22ba1f0fb95a4e3679eedac7a0c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP2KNHHB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEace%2F8z6mF9tzM9mo4jXXVOCnd6UMAV0hBGcOKALlfwIhAPcgMsYe9u5S%2FqxonWT0Jw9w8WpLR9eac8ON9wGx0KfrKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiYWTBuOFw1GZn3Noq3APwl5PQ4R4efIfPBtzLfP%2BCZY8CBQmFPMBdFEsRWy47CZ2sYgYH6Qt21YDTOj%2F0HJDxLXTgnLhOAcXNSNV%2Brq2Qjrxt%2BHm7jSzThypEB6k4d9J4DO6ZnOrEBYKkifsQfrkfVqpv5Ci4bmO03MJMV1RX4qYg1fwtdTpyMhcvG1SDNohKDVChQT%2B7noBJpKCX1H8jpS9crfoLSO2WG75tUy7S57fn3iRHniEE%2FQos4KcRED6o1SeV11ycRXwXZeS2aiy9Tppfuf4sL7S1asgKN2GxobCiruQ9HEGYpeORyziQwTZMY2%2Fmg7%2F3HpfFpNY5CLouPPGjlYaAabPZ8BmPv%2Btnd7A6zOyITyJlhVh%2FbSlhEwm1z80XnSDd8IGsl%2BfEQrytviz32bJulB4MM07P5QmLnEAfBvbymy5YS1l9NflMVX8Nk2R2Z2uyRtgE1T3xNuHC7KjbgCqrvQceIis8aiRNWH3zllZS4H1uuyPDmNXimFCRVQqJIJUUbuYz0ViVgj%2BuLpN2oMhPtZ3ZazNB0qbLi8%2BHai1E5izisfn1chWVMBoIUAKmKcTnzFYWaZ%2Bj0Zt5IIsRgdy3cFjSeZgf6poyhqGJEE8PgVTxNx3LMk2XH5gJ%2BXFte4wYYhHBsTCX6q3EBjqkARTZ0MnDDmo6uZ0FoKsLY2ekOj1fGaAYMqUbtYOQm0gFF6XqkGSU6zK6QU1U30tab32es5n5RizXjKPP%2BvTSHwX5NVn5uR4yXFT4oF7Co9J%2BSNVgzE2CkPHX84IEU1b74G%2FL4JUj38sjwEnAu0nphsHmd8kzHPHjc1TOBsJ1KGT7waQE59UstWDaL6lFRyts2S6k1Dxi6r3xNGSPfR9rq1XRLHPt&X-Amz-Signature=3b2f82cfa8a6016348a45d834b0069f9a5dc5147a6adf44062dab7c71e9b7692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
