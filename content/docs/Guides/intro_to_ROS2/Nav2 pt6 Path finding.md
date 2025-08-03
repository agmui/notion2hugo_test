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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=1e2b9d290d31ade420c0ccd184f0f7555002dec71afa3ec78b6108574eaddd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=7f352d0361646a19972c2ad879cbfec452a700a849ebac0d425696991ed35d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=1a1794cb0e796a0aa0696c83aa0730b859ab848c2c91916313221b87093f24e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=a64be73942411deac2803e90f970f58ea2ea01e9bd4aaf643a4aed056850d29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=fa4bcc391979fd5f742a5e83fb4a487d8fadd45875a7bc67b90c020bd6b0214a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=5f6a3199e8360dcad614a78816aa03472f98c86a9d7a6df43074e9f0e299de39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=5f0208e720d63410e70e87b3a9a40a09108b57fa1bb8ddd958cdcadf751ccbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=e662cd270ed8dae6a8c43f359cd83803157940691de97538a5a59a1020827db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=2e206c7354e44f1232be7425a2c812219e68335f56cdd1626c31c43e633ad8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=02b38cf4df6fdb328f57b1c825cdaeb13577df4bb1fad235cf9d4acff822149b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=74afc00f00bc54d006dfb7b165f7d46be87c909ded33d44ba80c0f6c53b1bfc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=017649aece5313b05875e96f10622b0c486536f04cabe2f813e88d1df6452369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252KSQ2D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExMqvuSb8G67uPm6jf4umZxPX3FuIB1FTHg3GGSIPVMAiEAhRCNf9Jcg38sxXyhKAhWq3acS7CtJx1ctViKTCKswtYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGnSoRAsarHGzDmI9yrcA8A9WweDzI6WoEIT99mqnHesovguYvneW2R%2FbhszyqY8dPAi4YtSQajOBLpR4SqRrnuxpkRcL1xum%2B45vHsAj3TB09nCTE5xR0cJW8r4ryesrN6lUI1K%2BT%2Fu1tujAhJReoFATJNGfJVneM7huQXWnHqAY%2FPvddzVaqq88odx4RCf6jjFWNWC00baanT0J9QLLnGzzFA05Pm3xtwhX1DDla9%2Be3GGiNs7jQnyJWHX3wWBr%2FWSah0Q8OFFW447wpwbYUIozHwsip6wYSJzMcbRfH411KJW67yB%2BeyvN%2Bn7amK%2F9v5CF09d23ObkKriNgqsIolBfFluYbIvMqDQyyKObeyK60B%2BawDA9ijKLlLL2NLmkLK7zjRSD2fJXJdjy8neRAvFENrXJU1mnbdqO8v7JCUtjrjLFjTK2USaa76ztlWXj5y9YDoP6hJhvplWp7BFpYpDTmFv9HCeYBeNhy2whQbiyc76hmOoBkCCfbE5w0gccPz19yPRFXJqkLPD%2FE4RwNDsOjnnZHUfjPz%2BfKve5layNN9Bvo%2FCYQelTDwxE%2FlVgyAOeRi7FVGTrt5SCSQc04%2BI2dwD0KCmES7I0TP4wCdxMhLiiow2HMpKhvxyCoub1h2BgwHmy6LrN4TBMMOiu8QGOqUBzqFUZOeJ3QpU2S%2FSTP%2B8h26DQFykZd7fu3sLOcN7YZ9lah5tcF67PZH2xtQLT932kJ7Sf299I%2F0pH%2BLpTWoPHbayKYe2XFLueAPPLJLIKwbEvdAF%2FZMjJ5PZqngnw5XFf69YtQLvMYB3hVZKhv0%2BApZusS0VwpiWJUzyBt6DITDrN5qH0OUFZw%2FBO32PSPNcU5poO6kyj9paFjhoKuu4%2F0a1j6vW&X-Amz-Signature=a541b0fd45523023401470036da475dd028f577d6976a776f5b59c114f7ed349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
