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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=99e6ad7d55307ef619bf52a3c647174239c1e57eccaa83836f4659c2d41fbe19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=4fc5ba4ddc0f510aefb72237c262b3bd66dc6394421a8025220eb93a45e1ee0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=5b3fb4fd4018936adef3172c8794828cded665c746aefb5797d792d114603d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=12cc59d428754cf9eebb737db8a1710df147f96cd54b132a9497cb484f075992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=f40590329a049fb4ad553c6170f3e878ff7262466288527f6a315e21f87e59a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=7ec49f9ac381f447c32e2ded7231394026d7da672cbc1220dbae475c827a27f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=f7a7872257902daf3f2551f81885c6fdc7622dff71e751ff2843df934b332dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=ce947ee2e2c4070ce346c6a00bb4794ec67cad1d9c56d73e0cc11057f58cabd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=8db76da4611c198dd36fd6711e76980b7ea85ed4318fd0ecdad732b6efaaac27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=9c945794624b4a454245ae68ec313e3721732b17c262b605f5f6c3e2b4837ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=2e1d6a348a2004de96abcaa91be2db56c012070149446e012f9c0fba4e1b0d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=4f82b75b2b469203df72097f220fc10369b0d989adb37364a5e82287bd6d3f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=b5d92abe6c89db91e8add9cc6d48c5f7d2b230b07cf22ad4cf0bdc77c3bc2f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J64QCP3%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIsR2t96s3IrBhhFSZ3p76qF0%2FvOCQLNJ3vzbrwonawIgI%2BDfeHHEeo7E1lNfnDes4y2vWeOmpT5Cidt3zi3WT%2F8qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU4V71rm9bsa7e%2B6CrcA8V0%2F1sMmo94vEFMzdIDgx6P%2BgSGgejvWDIgwt9XijFzhJhmH5lSvV94jKpFi4ErrZkleK0bXryrojOR2ROZVs5K5xBGvPBk1KOxdxi87r7TiUtzT1Meb8%2BpP8BZbyFGhPn34ZkCK3DTOg7kFo2SGQjzz%2FSK0Uaddgr3WClUVI9sRevyWbSublP6yzjeU%2B30kdzAcddJymkz9gfb06up7TA41y1X5FPUH4VPPqRXE4TEBaNLc0w8Fzb32i1khPXCW01%2F%2Fc0%2FHzyoM8mDa9eu60SDU8nsTp5aWVfcH6sio7%2BFqj2bhLtHRhkNr90FwMLJOuqgPM5rvue%2BAq1eOnIW6XhyL8NRWGXpRxqRqpVP%2FXTMqPeYKJ5Lre13TsSAlmi8UziLzMpSod78ACzARw4wLeo%2FBxEh8XJCSW9mwmKa2nBKP8sjg2M%2BOSJ3WGYtuj5Ry3isFia%2FeFsuYvcvXVJAMAK4WXKBCs%2BLZzmAOPB6inLgSuIXdVZgDJkJHbEO4t0gDkT7qVbFrrQM%2FPf9noWaRoF%2FSQ2SpFS5NFMeZ%2FfRJktNHPVXy2JEs7F2BwuoZw70cDhf%2BdeKmDHZP2c8p%2Bc51UOF8BFqP6bWrRs%2Fb3gGlE%2BjdTAV%2BWxKLllEQ7XWMMe2ssQGOqUBNT92Uq4w6T4%2Fqqj9kzB3WmjabB8TiQzWz7Wdm7xYR3WbPVZ2vEWDM7zbKx%2FOgN%2FK9VCOJlul9E8wumxam9RRS5A4t5skTm0H5r5dkjVFWO16Cwz%2Blwa3OGdUuer4yAlo3khfVp9%2B2tL%2B5tpRUoqbVYr1LTlY6QtKj5XPUcoXmjMgmDdno5Ej%2FAyBXD8AVjqXYNt%2BffjvN0znDhJbQECEZ3kE%2FXDp&X-Amz-Signature=70f010934d00ad8ac1e8bd0ac3ccb7a4ff6ef24b4777c15fda4c287a1865a7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
