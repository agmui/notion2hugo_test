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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=5bebe895534a10ba53f62a6b6109521eb9ff3e7f9b0b367b0064e677658fd85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=b2c9e31e1028344757128546d0d03d044680157aa0112507348288d5db629276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=5582a1f8caa7fc92decca581336db312d4162ba46fed980bec736c0bf040776d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=6019b68ae251eb36d41da2306bba9ad97448297d1743f56aefefdc84ad189bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=7323da2da878c7335c58a32052af78fe524c4663c666b74714395ab1f330b5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=7dccd69f2e1c596fa9630e9d55b934d1cf61204f5935df384683030e7e03cd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=004d7af8e39e68af5a17ac856454fd05c64e9e45a73c19e30f0bda6a38871ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=4c27ccff5224ec4b4b5a579dcf8583d3d523d0100aa481b0d7d2a19067fcf2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=acd58c554f2cd7b09ffa35f76bd31bd96646c072317669e26c158bcefa09cdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=4ec168374f258b8a5f12532ea3fefa1a15a849df7c9c6d2f5a2a50802204d36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=2669dc76c765c520f9d673a64cc9d7e275eb5c25fe3647133996ab3231384726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=793546622d2654a268434c50e83abb149854479b0774efa7dbbc5e1024cf301f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=ae92decfa52e2eb9d9878a7367f6a346130020ea4226c8b12fe406dc6db2e02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X6RWFNP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCB9P1%2B30hDMwJRd4EqezL0RLr0hgFJqQEvABoRk22rOgIhAKgbd3KxyNJTnrvguT0JKx9JTOtEeBwJaVhHJldwzHazKv8DCHcQABoMNjM3NDIzMTgzODA1Igyq6Bg3D7ArH4kg6jYq3ANN6IFlNcDW8b4w%2BdU7DB9h2BTEFAiu0qjZwtqXM4yM1wQEK3qX7fHVaZKLt4BH5o7WN91mU7YSjo3LUZmqpAcRP3dhqZYsU2dxNRlGrs58s9MIeVdt7IRbXsU69VqXyuqq%2BRdb8JrPywotTO8x1GfHGLgR6v8DmPjN2ojJZ6Cw339zrpxlSboDgTQL54WsSanBZKccsiIvTXknpuZcI7zKFLMcgQm2gTvtaTPxqhEqDos9a02b3GgKAEcAJZ%2F7kBpZjzEFb83AWpG1W0Ay92vH1ea%2FBsgXlWpRZJmA13aASQtllanvfl2ikIJQYihW1PbHoDemA64iysJcWZUntrbdg4Q%2ByWn9gJE83kN75S7ty4xEf%2F9qr0RB17%2FM%2F3aUqbRM%2FqFAhSXPsj0fPzcgsxBb9cTPNx%2F36bzBf3XOwswGI%2BePF8YatskE4XVTAbLZ74Bp5GGzydgFRsOahpTb77narxqay9lQkcmoQrCiqIE3D2be%2B%2FOXSU6cT5DAZX9JYzV0v2fZCRJoejNKE3Yqb5tu6lFtfyUCmy9x%2F9XncF%2ByzyhxK7TuqXzuSy7yWcG8w%2FO4f9GJErnRcBfmFn64CijT0YzO985%2FVZaIc2NQKwWL0JNd4IJFkxJmT0MAJDCAmYLFBjqkAQLeufNRdQOUPQ6RlamxLyVn3Fdf0XP3h2GWiCY98mpGmM2asBlkLV54pKoTFguM1B2YiGUryJf%2BGJ%2BggUihpmLPx7A1E%2FvwaIrmAzvHdvCboJg2ouDPYcu85tCAPRIZYHJ%2B5p9jXqkQATPKDOeOVFjKEP%2BVsjKdWfzHWRq0Y3GAVrW%2Bwhwu8CyRNuex8uI9ZXnfUMul7sCuk0a95ZuGhkk1z5k2&X-Amz-Signature=023bc49b4bad92b06fed46dcec7ca20e893c5981796a7184b834e1fa4f2db485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
