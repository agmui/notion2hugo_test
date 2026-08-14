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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=0da3028674e7697acac6e0cc4787cb0cc1bc09f6079eef006608cdc33b687c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=e632c93faf5261009c1936fc6074afcd4d0cfd1c77f713bea8004056acc0165f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=d4a7200843eed36e29008a4044766f8a9391b60080fcd9c98cdf8e038850870f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=fcd8ce35081c29193f613d3198027f9b71f69fff0572d4afbef54a6cf2ca75ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=d86bd37b1bcf9353da4d3b74e93fc93a607bc4f049a772591576565e7bc7f95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=10155a0d3ce6b638ce81ccb10031c988e7b34641fd18329b419795ad2aa585f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=59b5188aa483e493630ebfe8217f0a9409a1043be421f4c039754e1a0ad0ae1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=75152c696a62ea1d3f39424605285f04f25c3768727ba45488cbf86ca2aab4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=a901fd41eab2bea82eaca7f720408e4e6a7c854276a9c3798927f6e9b84506e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=0681e5bcc2174c445d7d15c0aa89f8f02403cd1bffd45102ad881b02842ca082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=74b9c3b65a80f19c7ae08efe83bb6d28e01762f566d11a3f1c88834ea6f76dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=28b714bb04afe3d0c31119e4f872d3c36d1a98031cbae8933d07a38a416ee1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=ae735f6f09b92e25bfbb19ed35ffb3e5a723d78f82d2075b7b360bb02366c013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VINROFKM%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDi9hNkDpJAcc3tJIzfS5r%2FbXdpq%2Fy3iEWoZcsvQgFfngIgCZGsABqSf9aHJXW%2F1Mbrmng4ol%2BZVRIaWEbqiivK%2BNoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIJ43cI%2FQDNYpoLFSrcAxxH16I9NA7nQtO%2BL7Rw8Vms1j1%2BANOpMc9XovjBeTMYnE9mv5AzjFomhJEUa0uxAyGhShM5fv0q29MWTqEBKt8ix2FQ3kk56FhwIWS81hkqgAtfkHC6BCQ1lXvqioFijxDI3qehaPf3twTxBq2MzBXkIWD%2F0h9a%2FoRfjQ%2Fk%2BDXUiRfcLam6SLhnX0mItpn43wLB9KqCgP6y8urARLfRjmrbOCa34WfCectuM7a2ZPl6ZPEyDIcus%2Ff5AhDq4KU2D0ZNcs8kMCgwNIkYKm7N%2BRBxcZpEYLEqItTc%2B3WwyX17roqVFb6Lp9E%2FyIkH4qDN8kP6gMWQR%2FrBTU%2FEPBkusbUQ1sa%2Fpm59pmUFIFr0d3tvgwF%2FLPo12NvMeeFVcicSDFJBmpYyCBbvpCPKFftpGeo4sJ1P9ZQYhOZG79JVpGM9i8xYhsuSD58d0o4abHPdo00C6biObK4YKZaRm4Cq%2FzavEqHR5CIJCaKjqVR858rn%2BVWfNeaFHP9%2B5dcZtDz20gn3Qg8%2BxYMNK6a%2BhSHnwBJvt25xzc7SY9UpaXycRarcSCqRsjTuw7BY4OIgRdPtmeotIe3LF4TXow8b%2Fw0e%2BLA24r0SiOrS4%2BguFllNy5lC2Ke2iwn8xhtlX93NMJyy%2BdMGOqUBwYfPR3fsYmKmtt9GLcMtHN5V3%2FXqVR9p1U8SjHuZy4raWHkvrq93L8q8jjXtMnimTx6Bzqi9T1oI%2FyMw%2FGtHrphHyma7FqkRAR1bC6azX9q9hmWT70aJq5B2f%2BWNoHVfxR%2FiA1cPugoBQdVv5mxPYxA5CMxXuK9XzYBGrx3F1uHxhSPxTyry8%2FtQSWhyLYhg79g3gJBzo4E3s2CkpYfxPE9ZlebD&X-Amz-Signature=8fb3dfdd87d52ed04330d76eaa445f6406eea03db5baf6996110a4ba3bb84760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
