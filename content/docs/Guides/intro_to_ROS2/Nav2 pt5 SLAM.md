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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=28cc3b2687ba30e2adb55a5fafe79ea67cbfcf20a1110a924d7ab1ac64d39191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=1f21f71e8c650cf993ace6e40ca9036456222cc8e506676a420ea2479ac82b51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=116e9217ee2ebf092af5572fa007cd34d6df26d0070bd0daf243f88b5fe62d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=55b37b4c25c0292c8c69f169b5c737d2701b19d9545e37cc25d13487759d48a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=7eb7d2c6c9f3644769c6b7b5f53e0079e0d57392dab0d58b6b9f36ec4c8bc7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=28204e3d83bc0a57d07f3a11f210983b3123a4ca171f8fb5a11a17cc90cbd38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=60acca7e09fa3e6fb82a5e8bdf758b1b2adad6118ec2f9453e57adc4eaf3b234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=342ecb1bd13aa6ac543a412690c2a51801bd05bc2c18affa47139122567faad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=a0d99869ea2c89ed3a88ae7a12b4d1455ae641659e2273103c3bcc0c333664f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=20618c8d4d015b318bce07d87bb64d8fb4294d506e06f86238777ed9900b4b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=7251fa51950cd8df977a872e91e42290cc4ca8f8d5ae9703d098afec8abc768d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=a30d1f67195727e506d47ce25245ed0077c3e55c1d4c161cb6292b728c7ec71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=80e740285f126ebda17f5bd4a6cfd55f65f86a7695f256199e03b6609da63c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBRFAMB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T151032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXyNiP%2FXtAkFxBn5Ow9ss7rfqSQOn2lUmMJnzfR35ezAiEA9AAx2bn6AurATZxk3%2F%2Fc5G1HVYhDyNh8alPB177U0a0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbxL2DqlF1h8OtoISrcAzp4xj93IMO1EZGsswYAYGEYFOpbxoZ2kbfLrH5gG0FNnY1LGPxaepuJkuhYclyrdtrFoww29ETCS%2FOPVGjYm1JZLu%2FBFJpvOuGXslFbFEpFWvo4%2BA8S9%2Fce6yqeFOcEvD4zE3LeBzoPFbzhi5Gwn1RKzox9xuXHVceLz5Ygk4TUGZB99d4EJ4TF6QykntySmMukdkOgbTMa1jULO8u1F8QDsoHGbOvRtrqaVd3Yc4Oeqib6yBhnqrCFBcJqTNCikyb0EZPst1SgamBRHgln9u1lXwp64gbijO21njahJIQFRj8nigg%2FsVyDLzzzECw8Xu0wV56%2F2mlxzJ8CHhCptRHv8FlLcf6%2BBzutV0mYY5q92gmPUrRjeMhVmxJ%2FPvBLDFqYZTGqatiaUUGS4iVuYEbVzpgb2J8Ej24jbxw9mJLUWDEs%2BLe3j4G3cDM%2BMFMgI2XZaBuR%2FMcdQqIHe8b5cXEgCMedJ8st2XthYvvMajKOoXqbfBIzoqTjH9eqcDpSKh9txfk5KFXPpLkJZNy6u2X1J%2FkEMJzK8MoBGboAUpHp28FCud8VZfRTNUclSp9T0qPxw4TS2RWD4d9KjGqWlzdQcPjy1M6EVnb8wdEipjc7DyO%2BWHD7aIRyVt46MN2iqMQGOqUBEuo4v70ZbIk8fKIdwZBL1NkCoSYIj5laDX9vzP7vLKYbXVkaiQzGdCTxEdxpKPptR08LP2e3%2FiCdS3rLI8U70mcjEfH5Lz8seiu68UxkZjxLL%2BzhsimHacleHipDoTGqd3RWP6UVqjSBWwrqGGqr70LU0WgjKy6sNPxROBf9jxzkuU7SDtGLNDGH1eulKTnQOQibQttC08mSVZ7zk7PlzEq1MbBn&X-Amz-Signature=2425228ce7ecfe3628ac638898392cbf7891e31d3ffaeceed39aaa26db3bd1ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
