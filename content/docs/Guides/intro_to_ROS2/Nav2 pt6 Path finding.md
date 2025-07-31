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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=e01b99543cebea43e43418abe0d5536536977a412859f00330bc502a47c92bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=675d1acc37c5645c10a85d321dcdea52c51de21df383244e555d3215822488ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=d0eb11d008eb1398870bced5a949ab9904337986eb083a771ee3cfff93b6a1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=4b82f9c02bf85a83a00f6d55f1ac4eb8a1d8b7d1cdfdc45a61f5564911a580c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=c73b0a1f08d594d1c468183f74caf5bff40391ae8b387f45896b897163014c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=18420b5fb51946e017beec24b53dc2ffb90be93d1000559cdc9c4012c8a808e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=0195854f7e3c5d9b2acfc0f9e211b940ada8f1d742352ae1d3ea092cb1f46b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=86d4ceaa0d42c74d6f9c11925b0004581f4186566701ae8f2c1be66943275d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=521e57826b09549ae42bf7a9c9419537a92ac3a6a831865559237a6c1067bb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=f338cac80544a8c050f5da5268e05af7da32d9b8453f40f263bf821f53bc3aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=0e016fc039624988a39556c41360a50e4fd985b3df356efc25956c44f1cf992f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=f3e225f7271eb287f44a748aec237b29071ffc69fc50a9c96e6e898aa15f5969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCVUDBH%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP3jQR%2Fb5BENaIEAJq3KNFI26jjMpNhNHfuEeOp80%2BAAIhAM9eW%2FCtwR%2FxgGTEFiNASrKE0oP%2FMTlYKrtMOAovatt7KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCLNakvWhek64mnEcq3AN%2B0pkn5SPAFxrl2FqQgEOTh7oKNcmuEnnJboPaDVKeUmOJjnSAUYRSP9v%2BpGxrBZLo7y8MhRiA3k61kSvz%2BCjlFz1THCJkP1yuKIZpGFPBZueweFYs2s0XsY7h5wDWE55VVmFvTR2ZB1MsbaNKh1fkE25lzXVLv6AYX6ehPerp0Wf2dmcxdgoGLi%2BMHwTuojT2m%2F%2BLXSXgkiFTVXWUuscoUVxbZ0rC0p1o8ns4hi0UepXXQQtDr%2F6joSSZowkBxus%2FmF4PV932tKWQyq0QiSUiLdvPzLaudBaTmg7lEPkAoepW6B%2BSkupagLXp5jJxVloWQdDvfTYyGXEtYLOhL8jmEofPRmsuBkN6dpLbN4%2F46lg%2Fa0THpeD1w7mn%2FOwVEckKe4%2FulZkrsse5ug2y16vATbpr34GAnshfcSr5dg0YH78gAFWe%2FqOUeMOSrbCXAjZ2nWDFQ07OBHd3fwB8Qch6Ca49zY8I3gwCwRUIPSuWHq%2BFa2GOr68wSKRDv40iae391%2BB%2BLSEuzlhsOv8pAxEjuZ%2BhFWIgpU7L7SsWCjEird%2BLmvlcjlZSqVBVezoaTWaV0wb9lO2YJycTAA8HB4N1ZqDzxaWJM8%2Bxz%2F1KIpGrxykQuR0cC0h9CG2NujDPxa3EBjqkAcvH%2FM2%2FCuwvAYtb9Ydsf3XJrnx%2FppUdpz9FF34AS3FhwDx%2B%2Fb0DemG30POcMV9cVCj37IqbcE%2BoFAikeZ6gpVyWRxZDHDjUz%2FRm2E4s1WpDfTfka6i2DgwAmmcw976Rjycg0RN0p51eEtHMPajQMPIUKXVaFo1Npdpwa6497wVQkCHL%2BHu8sF5XBwUd9fNVhGVXcEtMf0QRM0HVoJlipBr6oH4f&X-Amz-Signature=689600930fd43209ca51bec92e7918e90445050f58146f02caf5ad5bc8907713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
