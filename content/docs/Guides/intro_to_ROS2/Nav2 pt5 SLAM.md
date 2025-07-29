---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T01:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T01:30:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=f0c5dc0567a00f508abe7841a3f919ca854858fb85da4d235a3a50fabae8e94f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=a4c9cc8e1981908042a99b06933028e3bb2764a15df0598f593ec24626a63524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=fe1388c84a201537f57860fd430003bcca85c512431aeea683ed30c93f5c16a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=8738ba0da05e759aba33a00dcfe0e67c4fdcfaf2cf31acea5e6b46d680bb09bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=92344e2fc967231811d5a6912b989a01ffe985d883053b08b7b32cd078799b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=92b95b68fbbcb468382662bb639e80ac5759690bb588184aa7d44758b9a96d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=d5a4ad6dbe13d29d11d8239ce86f444be86fbea1422dbed82b4d910fc152ba8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=ae7ea595c208a8f25f735e6b17fbe243644b3ff14c568d7eec41cd786a38a156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=c0278432ce71d271594d12f0c593b6f294552d92a93c2326f960d40585d53320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=d562f461cc0bf59b74d4124d840b866a374b3386b3c22f9e5fedb84a2e1a29a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=620e2563add835382aefb8ca604464c54da1b7ef4d46d9295915b19fc9a26e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=208d467ff770578deb56280427ff59566bc95b971562c2dd53038fbf91d4e688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4OWGNZ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFQcKeAmBeNeVwXfLA1zQf6VzWPRAq0Mgt%2FRPf4ZdkPQAiAoPftCdIhOjH6BLPmtwodpD2qk0dMAW3RWhpg%2BBYMbXyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVsP8FwsSqir7MVf3KtwDpb2VRvZuaK%2FIpGmnzUOLT2Gs5R1z0cSb375op5TPLYENdxhtnltY3MdhQG75%2Bre%2F9W6V%2F7awHzW%2Bjb7O%2B2vcMckiR%2Fyh%2BRdkRp3rzMi5rcfsaEUs0V8xFb3Rtfu0pM60b%2BU33NLq%2FlQ5px9GPGOuJgzZHW8F3ehHQrhvQbOSH1IK2Mn0CLd09DAGSikSR%2Fghpk2unUsg5AnB7%2BxJmzu0H15k4UJ1KW1adFcFhxctySQxLA2XIfRBu0M%2F6qxHRHhCbb5HV5bvF2jCCLukoSaToRWVNFykPhADow4kR729LXnh4FGb9SSi5gcHkrxosmfsxNqHtjPiUE1aRMHN1VxpYVB%2FkBCpCj36Iy4koayl8usrnj24EU%2F53E%2FX5lwe7i4MvWlXgw0zuvD8KVy9qigrcC1Zf7adQ83ljZeEApOb8r77PcLUzXp%2FfbVVONbb64ClCvSD%2Fcj0%2BC5%2B1ByprR1LylKCo0f5e%2F1tN%2Fo6DGTGqte3M%2F2ADsgWb2BJYxw27xpc2Ah3CisulgaofYoFkfzfZEHCVhT0PpUmCXd%2Fa%2B1D0p6XaqkgCgaI7QMJnT75GVuPv71kvD2MqrpbK9gxA599fCi60VK%2FQJC8z%2Ffw3Ljajft7VwDMCc36Z9fpEckw75ijxAY6pgEe2lvM%2FhpJM1L4J5qpLoZk6%2BwO4%2BUArKKH2UJxHtqw2EeDbMl9Qx7ICUtIpg0AC4XduZ8uRmvmnBNawGulZsXd6bapnU5OUpRG75i%2FuK9BYyiv2QEqtXPN5Qtcmx2IUUM948zQUVz1ff7ma7HODVCuvLTifHv0GkT8ebj%2BDHoASNqfjx7Ak7VrAYZzCcYEC59tLXwSfgMA%2BjfLSigQzoOmS%2FiMsW0h&X-Amz-Signature=d6104560c9a7677682dd20ee6e364c88c8524c82e32a03c01901cbbcfef39f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
