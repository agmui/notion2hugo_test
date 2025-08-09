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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=edd2ff54af964d45d911e54a6771798e2d3f75c77e99f6516b465723033eda20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=810ac295f9188258f107e5ab37f4cf14d356810d32eb21f6d0628f9333a2c393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=93d949b5a4f40d6c03fda09e8e72d435e7ee45cdd9154ffc59baf24988b9b0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=0fdfdb2ed82d6dfee406bbf2cd0b05a3534d77e18512e7099f9079b68a113ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=5ebca6104cd69a7a70295cad474d92ee41c36786ca150a90659d109c09e0fa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=80aa0d10c20e7627e0cb2b3803d6da518dac98573ef48efbcb1d439998b73879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=afac81d4724022cccef12b0f61aa10b9b650b9991e7902b1916309daa6694ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=2f9896db5b7c64263a9dc0d1a6cea957c53787b51562368beafd22e7ebdd565b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=06f411d1d692027a864cfc7632b23e7991ae8a59bb3f6d1436e4a361927e8dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=f3f0eca0c31080a666ea578b2c641fb1fd702f14c5af74399c748dd8ab0323b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=e198b15450bb745b1539b68c65da26e216818f442e0a8a345b3e449175dce81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=8d16960c5f0ea7fb17fded4f575e5044646678e583957808bf79d34097e04b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=aa1748c33a2dd61113ad0369d75e3901ff2a5f8404b624817064a42aa6ebcc92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGF35343%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD8PlNO4Hg4jAOtzwqkZz2do4R8FYWwGJM15zBFT1xUOgIgJrDb0ZH7LypEQhj8jAP%2BBZlUnys7uEwhwsZvp1NPOM4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8fQ3qSnC0r1eJOJyrcA99J29wZ1LTR2y02u86I3w7oUVLFQ6i5mz2x8flzGo1jOL1vXCrU9Kg3IM7rwKgrQSolL5Vdh9Hvm0mnA8M8kynZ%2BjK9iqkhQZoXDHOiP%2By6L8jVzNReYtYFtDtYPPj9Nbu3Mw3ERlAaKTfgBqTLFohhMWp%2FthJHPzlc96rbIyIiO35SpKLCWpvfYrYJgKEF%2BJBJBA4p083jmegPNN6kC9RUe7m2WOEpE1Eamfxf8KaZeAoXSbi1Nbmb3gzKHdikiUkvYtUlaUReFhipRRKP%2F2PesCuSlhzpAbLvgnJtRWQdP%2BKXeW8bU9prc4y%2F9UvNPtg5XopaL8%2Bxby3VNdh3vGzBflc9kscHp9y%2Byu1enKGGxh9tB8%2F7hI0IiF37a0rJWh4TxB277x9QDpMkdHF4L6Az7c1F0lyhDLK0LKA5%2FfraFDmUhHwiYLDsUM2iBqUl5ayUiK3ufNSMo07vSpnwV0Qh8yftj8dpPE1nUZqE4YxgH%2FZy1oe1Fp%2FlqjOQa1%2Fv5cmqYc7icwH2Su%2BypL0ziJsOVZNw1ygps9XMox%2FcPND5vujNIzr%2F6LuYz%2BsrBdzM2MaFCHu4G5WDBOExU95egugXDUO4ysDgU6va9zKdjqoWmEPmqG58TlgTfmLTMPHE28QGOqUBYsESB75UmkmeKGEEK3VF1EscXfIina2uMRAfRvcXJ96nS%2BnIZrVjjzoYTEI5DGZdGkQPww6iytan%2BhsOV3qtoWFDc8BKIo3pusV%2FEgUgU7zT6i0ZelbmbCihVweekQLxfvoSw6cEO7JqrvTAiDwAAa99HBN29y%2FamZ3i8H5dH6KObz8JxiQ1BUm9BwkT1QEV2HS1xHSlPGBTg8WsoN%2FkZ%2F0cuXVb&X-Amz-Signature=e906bde71d292831e8ca7ad1ee450fa07970542b496a27e3008667465506353d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
