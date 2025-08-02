---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=5d36325368dc873e73b6d5c6dc3c4e489bb217b4fc328016d95bd275de068321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=a475bd12489907e5e91ab63113c9e365e23cecdbce5956201ebc3439e36115aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=778c99bd4c273a1a700a34bb0c3c29b41e2ceac5eba4f2f2888ec94806984bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=a20b428df7d90d62317c4c0ebe7ac8c87b247eedede0f5274b0482f204790232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=b6913c2a15a3ebf2fd02a799f493d885e169e83532538ddd37012061dceed50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=d440326df86bfc694ceecd748fb28aaeb2d182946cace2f54d802e9f71f6016d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=b4d6a9e2367777a08f90d616f615f5f9d01c5b9d1acc07a4d9b72ad11d27ed24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=b1e8fe13ea4223b5e5139e95e8457db7a6b104d2c96d7332ed658a8ff1ef2dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=d5e83d365e420efa85126a470e19dd3847a1ddc8f30c93a507ee34cfbe3cefd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=5634c3d1b00d13ab26c642598d93078d2c25dae324d2ae9d820e9614207ba9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=e2c7dad82badae2dfff179bc496f3a6128e39945a577fab21848fd523599412d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=54594a32a26dffe9a4d6c5479ff4d5bce78a44c99e1be33664a539df8044d13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=ff1fc3be00d26bd9a855e2c3cd4586c9d1748a3dea4f606a6d10e32b1bf7b4a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNBVMBZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDASqQvsvKhnFmUcvJ4r0edapA5GdIRifDVpyorkfwixwIhAKODVlejPjFlDhlpdGS9Un06Z9zaR1Joix02gSz9DZf2KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8LIQ8pvTZhRiDlF0q3AMTW3d96hvmF5NwEhn6dBylB5Y59Zhy1TtqSyx2SrsFGO01utEtLfgev%2FMsnsVy53YoepMRy9E36qr2PgAPHTC8fspgo5WF0KSjtNvToMKBuMl7hNjVKQdkgdqKM0TIZRZVd3%2FPlg6tGpCLtKI7PELburFpy7HezKn3wKWuxBCQYqMZTEveCccn88eR7%2FfwfofiVI95CYkKODXFRM2XhKojFQ2%2F5goTLzmCw1LuBbEf41xAYNC%2F8dXeypVEZ6GgmMK7FGo6jYRLacC8a5PABP0loym%2F2PVFgDn2YcCjB%2BzHyaPU%2BSOFQys4afv0IZi4a2pX6X%2BYU0KVKjV7XvD86uJLLZI0XMGpC7aehCnkhEV%2Bz88CdXOSw91L32jtJnroJB%2BSeHM2n3SeB2%2FYcqWO7u%2Bwm%2FPv4dEfhNLyB44W2i%2BqOg2U8mNgPO5MqMhidmE0ms78K%2Bff7MWe94QGPaQp%2FPCv5MqG7fzE2U6XRGATLUbuQgJal31z1wQTkjXs8Yb9c2hit2VyJJfpGzNYky%2BeLr6uyZ1%2F96Vwve45%2BZ%2F8x0kAqFdfkMNLSH85nBPvUGArmX1RFxgAtWObUm0odycsiS5mftzi%2BFwtyAwGf6Fzz2Jj1RIKLKvjR%2F86LG%2BI2DDryrbEBjqkAXQlRfDIBYT9ypl7DDWugvsERWTAVpXA%2B3XeHp%2Fl0frYrNfwMyCO6ng4%2BxPFU3LlQI69cZLhqYXDq9iOhLPcnX1V8itPyGlUJtUliqb3HjwTAw9WKX6DQyQR2lwLsyLh95W5DbjsEy7LX0MeGVfQFND%2FdG874vGf6GvhDZTEec6q7gTY%2FIqbknxJm1gmnbppSRbcyj%2FP8GRFz8yD7UgjRzUB01Bz&X-Amz-Signature=e0c96e4ffc5c32c06080f2fdd699eff2d899022c10656f0fd1e01b7d3b1236d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
