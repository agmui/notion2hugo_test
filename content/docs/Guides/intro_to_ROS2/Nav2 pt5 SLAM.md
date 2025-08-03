---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=5c781d2929a86acd654026e91e823067732b840085de63ab5d192c8934a60f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=6b5464b15fc834b2ca9a2eaa99781e7d51b5455a73695e5c8c12049b833824a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=e3fb03e494a2f5ec73070870b6930dd133c637a021e06f603b14df1f743cb689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=0d7c4b70191675670674cdc7efb22ed26be3c2797748de3bca2d21758ae471b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=8d4129a87f594ecbc0c052caffafd7d92ba7d75686dd24fea86f10a9246d9f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=1c5865d14519c40c572a1a8647fb59c9b81e17a894e330225c7e0dc4f88a6f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=ddceff1b0b034856382870bbe70fe06c46e45320b53212d1d9ce0ec06e56991c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=00c71d8f162a5ed5aa25b57730d4082fbf01267d3d918d161f7d761ac3e78fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=b7c915173fe3f4abeb22fccd2e43d26bee3c4e8766e3f02c1de224e61dc19ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=9d0ecec08d8111eac3e287c7f1598887dbd29cf64386d5d118886d6d2c389aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=453d33a0d1abc18a4cf3c7f58afad16b169fa24913f31f025e365a887bcfd064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=7338a43d79f0ec630c76f37131de42cb560223d6dc64366e27de82891246a6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=8493ac03a851fc2944c261c5dd199141b9172c29c940a46a38d66a9355ad40c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5O475D6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvFxlDMvrs2jdHOZei6UsyS0lqsnKF66Lw%2FVoCIhkH4AiEA8mWGhzmOHVqOqpu7iitbNBzuDAOr6BEnfb4lIPCKQ%2FIq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDC46WKCSbWHUPcWyQyrcA5%2F%2BBybXcdMifngNCGXc0dGujlMA5nsp1U78hyvLvFx7wws8XPHJVMY%2Bg4utggeGbe4VNnN9Tqrhf7%2B%2BRG2ymXuGHGmr6EErSwIkvrw8FIQoP2k5E5uQXcXP8AVx65BLouV%2BH187G6zAXXpC%2FqjipjzKfxW46C6AOYSoM%2BEDM457PNbZu38w%2F4eNBPbAnrXdN8mm2BpBlcPTSyrr3ITYdsXJEVFCcCGeLQya3%2BMROJ4Q3AsP6FVc3m%2FlD%2FJ7YtX7h0%2BjQVBow6SNUHrfxPBv%2FILs4wYHW4U%2B4NulJsp6Ymk%2BUPVWfskNdFIS7Ed5DhzNNaGAq5Kac0%2FaEiFFEECZqH42NDj%2FEQqpMFVVejBn0L4CYyGWggymop7Dp6kmFC3%2FXBoUAhKEwlPD3bSHIhtYaWEJfpbWtHdQUJRaK5UCHWF6sF5RfFNj7X6OOsSfAPXJ9EZnTTD0Gv3mPxHMUJ3w5lj9dDA481or7YFin2RJMenGFIqytT2EHe%2BOhxERxY8XYsVWy4NAHuYa15%2Fjm43ZsXcY%2BVZGqgYY4hwmpkGgKmHftItA4U6iR5uWhLhRwIRVqFR1rkWB%2BcJz9A0yv2eP3BbcbVW0i8LyTQ9TxxKD9C85F5iBxc6eOdSuWZ6FMOvRvcQGOqUBk6LUPuydCPLUEP7MLfWoFp1LJY4aPZXyQa5DH59LZIIIq%2Fpb%2FyOTEqjwDPu0hIPEPhkKH4kRgdmSQ3gIbUSMGNK4kGBlENkL2LNu6B8VwSRITEDgZV46ATGpkQyyNsuaitQYM5dIQGgINyqNrhA578PTCJHX4A2PZLkBoUpXW5mp6JVcJlDAq3zxFmftPeXL0mus6EyX0o3UEwMHUj%2BjsLCPP96r&X-Amz-Signature=819cdc5f38077cc2bdea6934122e45b58502d78946396b1c7600f41d27f78e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
