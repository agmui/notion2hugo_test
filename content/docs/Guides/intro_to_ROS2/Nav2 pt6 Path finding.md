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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=1bd99c069049d21eebac5d4c4bf49db425f2bb408d2035623bf03bc7429eb686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=a556ce1f08a0159f761bf34f01355c3b7702d4fae60d700be7c8c7c69e1ed22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=c1c890afb201326df1a3c77711baa9ea7f808954385e24546007939842bea9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=8302e4de27e0f9ac0dc11f8cb53f5fd4aa09b4ee39f436543ccd1262dafd3179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=90f802632fcc41c6bf221687ab0f06dfe28bcc94b38df90c3923a921c7284ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=98225febbfa0c8d9680575441f5f636e47dad55530c2228cfd505851e626180d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=2dd07b6c0ca278b6b0a450665e7be0685b1ab4749367027493f544834a544f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=cbccd1d32a03774c2d7488336c27910fcad009f00d7c4bb8ee3851f89c6000e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=c3bd8be6872e672501cabbb893623294c147fb615b59a131cc43d5a712736f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=ccff8205e0a23ad17a33af0f0e88335d3fd664fdb4391e7e4e6a546b3b32f813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=490e61d7c057070dd50676f5b541fd4888ad05bf850a546900f17caa54e47487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=fc71de34e78e815ba93d8a6b43ec32e07fffd68bfab866fd2e725836eca9b7c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXB6ES3I%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T191110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHClO7qMWI45wBAGvu%2Bi9vrXKMTnc2IHpAdSzz7MNcrDAiEApF1j6KyLoc4OlfK1Ksh0Xu2utMr6oI6CW%2FftGpGhtEIqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxVy2ihvjaqYtSCuSrcA7x78geDjsa2cHknxaPajsU8xRG5E5NElZZykDZBP3wocw%2FiltI0khwVTOliL76lfx%2FiPaqMu3dySnZZ2PSjhdUJJHlaYQuIJyLbli41qoOu4j%2F8vbBbpnqUCFO%2F5UpfWC9HRtvQ%2FA%2F9DhnnxynFn%2B3bsl0chP2qcd1awGBZ%2FFJSZDWZMPaqd95BptgD1TzWz8zxFOa1BRRz2CoA7joRRJeErBwWH0EeLaVV94FQC0GdDGL6dJY8vns06V3%2F5D9Iq5Ak4%2FxaQgOSVqxBLQedEEMGlHAXcin6%2BDl0%2B79E6JEPs18a2l4sYQCmP1496dSc0jsHIfpWcQT25JTjLlA9xAumEwRrtCU6aKg6AYG4UeIs30FR2w4jEF2ompJZwZnk67rTOzLUK8%2BREsylnk%2BxzmJlmXmA67xcHU7lUIWS1mZUt4NljMW5yL%2FuEIcNEtL9VPlaag3RVaTHGTdsgv0MVkIXWmAbMlOshi%2FLIGMTpDEPzLHvAL7U3n0FwJZZHgb1EAOBAEpLyJ6ofRzMmc2txWAdy4A3jA6WRHdd3bXC2GzqnS8zGt44SApw4nYb%2BDi3mH0X8L2f%2Bqd10R3xyXAwb3%2FVE9uuQdT%2FBEPUczGlZOjsPr%2B9lliJT7m%2FohEiMLqhtMQGOqUB2AbPDj%2F18OrR6KkWOuM9VOSBF%2BDlWe0oqLOfrakjy22xk1micPNNU%2Bk8vyl7jMiE82DbDXGBca%2BDYJgea1OpCVteqy%2BpIpWBNtaexlVJnIaMrZI1Fgd2UCmGBgr%2Fs74D126%2BxeS%2FmlnhBlcJerRLvgjGvHU3z7lnb79Rqm1LZBBfCb%2BYag3zYqeGYw8ER3iCLudkIPKRvERoZDrTJ8pBP1J6sicE&X-Amz-Signature=36f32f96426dc2612b2afb631eebc3bda2a7f15c52bb8f08458811036f3943a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
