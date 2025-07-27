---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=715f0a2d237780f5f8a4901a52773527ee4ce2f7d1606b700535ac02ecb30c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=c4fc0163e92cdfb37e0259f82274754cc14fd3db6c9fade7d051ead002ed6be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=5905dbcebcdc8bf2bd6f20b7af1a573b6b13646369fe47fbc0db1843a9b5486c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=20eb1ef3a929f8d579362a2b54a6bd5a68468f4e86c5416e7eb30e96fd809a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=cd7a710aedab1d1c4959fdfb87743710fa2e3e131376864319b3b4a105698681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=5fc598a732d01090fa03bea7bc99e0e884a530a1fb3a23d5b8f8b43e21a0807c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=837f1843ad79ff42836c15bf97a76c20dbc56c28a45d1f30d9c22d1a10f7221d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=06239b47e0828beea127ff31bff539986e880c9e0658751d49280c965e77cf63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIVDEKB2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDqSTCjAad%2FcI2%2BW5z9PV%2BZlNHwZPfBibgeGw08XrcvfAiAJAyOHRa8KsJkDaKx0n1yLZbI60%2FOlncEfgmDgEXeHqir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMw6U7GQcYMCa8ctDDKtwDO7Al8T9Xs7MWyymgsoW4ftTAVLtdJfQtbJDSbOVaVHe2pZ9vinOVYgi8puFOcpsBT2rnJbjSRy2tRFlTVocWh65uLFnei1RvhIP0nzWtX5x1IKAU3eiZsVKEKxIB9q%2FiPzZNxCNLQzNZbXMaI17%2FLDVTnutmukmycJ%2BxNhQdPisPSv4jhsKWotyt02muYJ%2FoxzzVBkrf2SFDYxRGLvzjPkzM8IvBcwzAFdZfxwvnOerRh8fW8p6hCYsLXTgCbereKHD9gIb87LqnKZvf1BU9OI3OJGTCrW%2BLXi0zUv1FmMdRCb1V0Js185R2xNVJ%2FxaE7PywwqxOD%2F8uIJ47S0xIoqQzKYGoaCrOAtZ0UiXjWjzBxmB5kEZF2t5vxzLW4qKu50K27Obk1M9VxIPH39reHcz9VIPNrUYmTQ1RGOjIaY%2BXaf4IZv0RvGKgWIyWmw9dPQgY2PAJNCg521J2gNZfWv383OcQV%2B3WOzxZDQsH%2FdnzEfpDZVaeb%2Fx0RkCNrdtyjv3vyQJnjlz%2B38yFIuc44KO4Bre04X%2F7j0EL%2FHJu%2B4%2FwnATEHDFiA6AXNEjYkbIx%2BrsxoHPAPy4I9BlNNOQyeaDTs3Qfr1vcoYzrsHu8FpwuioGm6VRpEeFq%2B2Yw%2BfeYxAY6pgGAZtMG4x572973Q3JchATeT7F9WEymtoMpfsdysyscRAznX5BD5hh3DPsedDyBe92ZCFXTfkY%2FlKQlbA6fWCxaahhntEtiJ8mEmq3vTMNCiPJ7j4wdkPUX9OA6foOhTwiFi2HIrIqV%2FWYourO1vwBW4t336zpX0Oh%2FcAi5RHGLoybDdjzIdMB0%2BJDiiA9sxXS1Pg3pJ%2F8Dxy98H9UCtsjiW0mh%2BKyb&X-Amz-Signature=264d9581ee25f620ceed161b7f6031a87452d33e1bf3abd0f2cc93a9d6a6f710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
