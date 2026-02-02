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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=d82b249b2b4561b21ca0500affd43c4caab271eb2e9236082d60b6bf16b16718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=133be1a8c01a504311a8a2c76e1acef3a80a1600a63157a6b40bfe7cfd721fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=e02bc3d6bdc79d72bb9552af07d7f649842a3ceeebd6cdb346ea88ca5cc93eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=cf154657b89d10a07bd1542949186835c4ff3e42563b7aa29cc11178458ef326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=0e2a52d1dc1bb43176dafb38b8a987ecb891bbf6d94d2fa2745bae3f88340707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=46137f263023f482f7cd96e61081264171f174e23a527bd0f0411b15084ab7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=b1563ccb66a308c7718757ad982028c578e732e404dd736b397e9165bf9df0d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=bc1e0c408cb3dd3872f5d373f781c00eb1f3dca70daf5f0bc39e03df0c60176d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=cccb4a6e0547b0cfabc31bc9feffb1ef432fc68e07a3431b66216034e30eb78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=87c515155f7a146edcba1b1f4b2ffd848fa48701802a965b05972a296375f250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=30e6f0d5bc3eb6aec098abd1290a61ac542cc7c4f4de833e6e56e82c908d0b52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=77e313bb24853940eeabed44dc5701f579a9916137acb1c3304769aab5df071a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=5601f301de79e09fac035cfbee902070363656e16660551e175192072b699d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y4WDOR%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCqw7Sf%2BPfwlMjLLx63Xbiuc2cYh9SPYUURKN%2BN25vwTgIgbOn%2B3ox9oL79%2Fmwl%2FWFBdsc1NxQgm240qLKBSPwzREkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWIEWDxHNJNKVSStyrcAzzM48PY64EiqMHvYP0Z3lFFg%2FQUNIHiYBb7OWs%2BkJbDJxPfYhhU6r%2BQxBretSISPlWMwg4frzCCL5V8WgdKMtCArgfS3jRF0kgUXA36WUinV0HIlkPxoVlQJAp7US8JgB3ygqvm0kwwc%2BIpNenzQkUY3TmWcoosUe9Ksc0VDGqF%2Bw%2FxqFq2Mj0VkRFiX6d2l5xek30HL2rQfdPPBVPbQBQtyE01XOrX12%2BLWoOnhSeC3cAcpqe3h4qLQ5Gz1J1XQ0wZOLJISWFI5BAzete541qfW8ee9U3MVYfg6EtgnzoB1iazkVl8CeO8fEFwnYt9OoXYx559SUKlDwCD60QQnvu60RcoSN%2B2srFGBuc79fMzIL1%2Ftm%2FBiOBDagHqY1YmJmcR3K88qYnKFwONMPLe53FU0hpkDhz7i2cR6S%2BJqTRPqf9p6sACBBpgcE0Aw34q0%2FtS5%2Bp2CG%2BUCTvWJgVoHXI5utJHPOBNt%2Bq8hrgy1N7ldvZNLhhteq3xsQ4e6o8cOiC4gMuIuDHArJ1s3WeAB1CX71FE84gayg%2FlQAetnnefcOYZBCAkfbqdX4F7uMjpCFxbvCzecR26bVlAunsWE2VWoLkh1ZoGJ9zqMDxNTjp8du6UHjVlZpHFnbqmMIeIgMwGOqUBGf%2Be4fB5%2BOeHlhfIBgmwmttSVjPWf5HCyD%2Bi5rWKcQQZEKsk%2FW24fF1BVLsu5K2yZyQczgKxP4pglwYjJpi5dyitfkkoBS7c6ROrOVv%2BLKTpH6XhQ6zGiQKci82u9ac0eSndV0pY8dNSEvZ7zJIcbSkdAgUmL%2Fou2yTAiNibwng%2FODOkMQaaAxG94UjPBySr2LET44FdBbZMpwBqPMtJ%2FDMxe6eS&X-Amz-Signature=9ece29e691d8fb75ef31b5badd083ec604a82aa779125f73438ef156039de722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
