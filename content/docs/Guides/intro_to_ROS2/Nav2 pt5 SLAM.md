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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=165008764fb3328975b2adb910747b1a5d31a6a6623b05208323f229a8d07dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=872e375a97d32eef42202cbd5a68fa72b2107ac5c748b630ac1166ad160ea421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=37d7eaa91cbd1567eb1d6dd12511da8e75b1f19cd5c5bcbec5fb2dd327ad193a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=9a71e6fc03365f9534f2250e167ca79070b5cdf23106732fa6b8c2c8317f4f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=aae70e6e9cd65f645296dc8ebcb9e994320ee7485417c5cc6d996088d7584203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=9da1dc9df687d346507910da20b1caa361a3a7bef5a5636f5506b8c5c2929be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=b219e65fba5a03fb63acd7dc7f82a556f3a06eab39130956da2c18e2046b61ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=ff54ea603e49fc00bb46c0f559faf3c0ceba459578a81b319755cdc969d7f119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=75c7d5c2423223c10b1b29d4ac66498abdc9f3cfe637eac755f2d71816f88642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=52ce56fcb1777c93c07787d8cb851b82107f989b3876a1a9f5c0365e8c3050cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=d7329989cbbcab0bd009cb886ca9ca44ff054fe5e5798f4001a010ac052a4aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=bd6906048d8a90eb312e5ac580e0a9d0a13001b891fb5baf75b615bea54d6022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=78c6368b15bddb23dc6d178e35ff413c27b56addd539bf9ad318990eea85aab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU7WUK2L%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9ZXugKVNmU96bAVOVqz60dc%2BtPQdChD1gsEv33Pd4zAiEAht3coXKfPzy76Ver6zXJ6vsaT3o24w%2BcKikj0vy9R0gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFzfJK%2FkqdzS%2FDzbeCrcAwwIC0KdZRdV1u18Ykd7uvQrPlSDPNF%2B%2F0iUAsrCRIfI13WAaeQS2t90LG2objvgdxxCVScpHxjvIHbcls4nIq61%2F7cd5C%2BBMoWJQfF2Jy0WSRshzSaQn4xYI1UEFEef1lRvclf10m13NdkDE2GLLzZ3su7JJCu0ms%2Fw2MDa%2FhwnoTke7oLE181KDWuqIEuxXCQnAXcr%2FEXuvf0yhXrjWS3RX3BfNioRNX5ZMjWH6p6PqaaC%2BnG6dDPDIgUxDFq7h8JDSJ71dNyKMIMIKUornRrskpQbsxQtOnofBYeU7TQG4eTa%2BhRAPJ%2BahFPQQeNfgisCAofCbg61qIYfxjAQ8knRySJq%2BDxdk6HTPsoMP%2BLUDv%2FDeGUH%2F4l3WQhdbuDhMfMqP6Nbn2NOgaLlMuwFgADBVIVmoW%2BYoLLtHdmdoxfMCt4AY9oNrO2sODHVPD7d1DW1JVujUSXojuU8hrByEWAwuiS042xd5DYgMDfEffQBegr2xrHNgLtBdaFnYVH2dk5V0aT0L6%2FzjZL3MgUilVCMytcSMpOoHmOU0EDr9lNcfifLqN8G%2F1ZlNabYQorvzqKdak7RIOUrQAshgmBNrNVT5vz4iRkXhgxD4C%2Fx2BiqrRqfagFXJdjByygCMIye8cQGOqUBHMtVPStDvf%2FlJk1QGEdesfZEnvU1NdFL6VW0tTjkyqeZmyC%2FwGOqk%2FUnGXcN0h5pud0xsEBo%2BJU%2Be5gVQ%2FKIftxJwSkG8vTwOEyydX9hQxkFm6isu%2BkvVraAvsxdavgG2oay12%2BMtL49nN3veXx2wpFWGxnt%2Boqqy8J2AiwZACAIZixMp4V6R2fnOg2iF7TGW8DLpTT1jLXOzsHiRIVCXbRLYPGB&X-Amz-Signature=eced1b391011703b7ec31ba4081742e3416d81cb6ddb1378736a9ced8eaee1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
