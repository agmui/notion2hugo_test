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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=8232781beb95cb51e74ebb0468261bdb5619ec7ad0f1df022e49448fd4d44d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=b4618fb634be8523c8cc0c0478090831acfd4dcaf8a67842b07263cefdb53260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=46fcc4b3edc70aa715d51e7a01298162be9e80260a6bb8a9636fe3d47ecf8c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=b8146c5fecaac7e8eda106b3a257b1d1df387b68d5b3592ba8b069633cfe8241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=ebbb549134a72d435c5d3a5e2082e9c77cc76390108f1eac19e13531b9b60965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=9548115bc87db89e8f7ed5c5239cba999ee2110ba8b75682ee0a5eb1764b23bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=bc7cda527b74ccd40ec5d9f4a73fefc8baed0da55a87de3341e092060838dd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=27f5808243bd7abaa025030cc809e8d4c8ce0c3d5b9c908b8792c76a63bc67f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=e01c9091d0b9f5d9e37ea7135fdcde0fa4bd104440b69ea75e7e5e965cc18d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=f7762af511430fda7780ee3a083adf343e43e025275255da2128af3ce95f535b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=a0359d029874d01bd585f3d4bdbd8ee4e15e168db9db643d28f89b61bc3785d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=7ed09ed4f091ae1574772343d5b31688bbde9e32b8b3246e928c1b7570602984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=5027bee164bf1156008b50f5b7c06a5f618ba25c4f62f7e24c8b99672012f918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQP44UZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtbJOFLmgGZwQ0Z2ZhtFJDi%2FriyethtCtgAkVmdFLASQIhAMZBwwH%2BoE8V4ZBwgFY%2B8ncBCOSViF%2BdLsjiJFMs3zPrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo8FO36RtzWEt%2B%2Bcgq3ANIDmrD0ZMBPRtYdwHogBCqvCHMPqh340LgnCNzndbh6O4S8wspcMtKFPlkaB9YmMS4U6GwB6M38KDdcn1WPpgJqjT4fObTxEq%2Bth%2BkwwRCfyzjGlFKRUFQ1AobrX7Hv8eTtDoCvk%2BwrE11ZZjPSIVP3%2BdueOxwwBt%2FXeZ8BXbWgvSid5kMEOCXy4vxOxDAG1Azr4Ek41B8%2B9KHkgwmGlATlYvhSz08ceEGrHh4T9TpoUAKrYdhyi5YEMNnOaXEbaN4KNSDaTow%2F9YrTbN4FxLS1NqWHPbdZ8ZRJfApWWbXnfBkHGIllqDXID1%2FV8tcL4cA8Q1%2BrS4dWfW3HS8DGqL2Awtknx9PbXw1nj3Ny2V85h8qjnnOqreJyS228pWXQqmRjWR4zyBexitgPvHJt%2FEnJNH08d0qgoM5BcZHtVFrH5ebVJwcvI1xaC8Zdp3Lom7%2F4U%2Bz0sUfe59HakZX106aio%2BY%2FFqVp7RyuPbkkWPK2fELzjtn7oJuu4wAO2I9aBhsHV8MSsLyMf%2BV2CCGjV10HXA4txsv1%2F2EB9sUyaVE1VzSUUMslElifHr6aF2UdteN6o3sHsJfBk8HZ8ULgArKTAOPrmjqSlo3IjODHjxm8Sl3DJzGwQy8sztjTTDU0ebEBjqkAVFAcokOQrw%2FI3yvqVFnvRsF038IwpY5ntMvj3ZB0JR7w%2B7aT2pcZ5s8ej5JA171JJNYnnzM3As6aJqw2BWojXyAqv23scY6WYkYvqLe0EohdyujYCTuTd60Dv63fnuBu9xGFQlS0y9HTSUIVhvVAElC22iTUwluUJSBbYF3A%2FiJ%2FBQamoTyLxspq09Snfeqy5I8OLAlQvLksyVfj52zn%2BMSVMwF&X-Amz-Signature=6745913f78256af0f140983292a3355540fc08809dff025194def7de5f50258e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
