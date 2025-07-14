---
sys:
  pageId: "107da3bc-6297-80e7-8a39-c258b8d1dbf6"
  createdTime: "2024-09-20T17:54:00.000Z"
  lastEditedTime: "2025-01-26T18:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(odom).md"
title: "Nav2 Stack(odom)"
date: "2025-01-26T18:37:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

**official guide:** [https://docs.nav2.org/setup_guides/odom/setup_odom.html](https://docs.nav2.org/setup_guides/odom/setup_odom.html)

# TODO: add gazebo portion

# ROS2 control

```bash
sudo apt install ros-humble-ros2-control ros-humble-ros2-controllers ros-foxy-humble-ros2-control
sudo apt-get install libserialport-dev
```

Good resource that explains ROS2 control: [https://articulaandtedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

| control_node             |   |
| ------------------------ | - |
| robot_controller_spawner |   |
| joint_state_broadcaster  |   |

{{< /table >}}

# add to ros2 control to urdf 

# Add control setting file in config folder

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4OLR46%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHXfrhNdWOaJVrX13rbas6gd0QxeD0v13Z6RCZtptLe6AiEA2TjlXtUhknUNeGUbXV3Y2sv4EPG2MVuU3ipLhtmNIT4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDEsCBm0m4lxhoYAeSyrcAxfYkt4F%2FWAP9CGtE9FE9Sszvgr3RK%2FucHuFy7M0lXgUbUv%2B0RoG945dVigfI28BgqLAhkvzPOI2TFI5oclf0tVFcyE1xa1S2ht71IRqzfDKxa0H1n2q29lMCxXDIIRMnz838XQJK7H3yOpth6Cy4FOSDkFaRy1KpZLoVcA5SJDMM2LXffOwdxbMj%2BON%2F%2BrsmoxELy%2FcOJ%2B6KMIJV6PqhJQ0Fn9LFnPRxX6c0FotcfcKQuRmPR3VvQI4A9rIBlqYGGEEV9HuGIYBukO2XPvOuevrjuBiqHHNLN5LVe8PoJORxITV7H0DoeVLUOGMbVCxUUMqFcHdEBs%2BInwlP2pONNMmD8nFs2t9d%2FB73fD09z3Q%2FchAWPRhrdphSOby4Wb6n6aGK5QctU6AI9tdwK4f%2BUFYkoO0oZIIpLfjCfjnpb%2FGP%2Fzo8QDs3%2BsqPK3DW91%2FuSQsArg1ehOuKKrc6KtxFLtnEqtQ%2FbTCY%2BpX4R1uBX4zGokM%2FfboUaRk2%2Fqt4Spbh2Lusrkb7OG%2B3mTDSeVuT12o86hzuOs1sy7oLFY6owwczqxCdWhPFPQwMWorBIbph9%2FxnGxRDm9uwHOfkVPG7hPgcDWJwU7yug4nWYwzgM4p%2Ftao97w11JMgN6qnMJLM0cMGOqUB6s%2BCjK1Io9YFRrWBvHZ5sPAyV3JJzpcKpFXATd3VY%2F0vcG9NN%2F8YiR3NwEh5myR0ewzKftO41k8MBZm%2BGai0Qhqna8aJM7vfm5aTabzDvx2MFkUyHqhxgtgK3A8EL5xsZDDwY0TNZJ9BoV0t7wFLTUe9ez%2F5tA2wXxZAdAgb0k1JpEc1Zz%2BYtsj6K4pWBpRpz6tjAxqYZyi9kqgoC202tmfVlubt&X-Amz-Signature=26c38b52b09f09fa9af312bd90654ddc30620e42761c434c99db809585c01c9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4OLR46%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHXfrhNdWOaJVrX13rbas6gd0QxeD0v13Z6RCZtptLe6AiEA2TjlXtUhknUNeGUbXV3Y2sv4EPG2MVuU3ipLhtmNIT4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDEsCBm0m4lxhoYAeSyrcAxfYkt4F%2FWAP9CGtE9FE9Sszvgr3RK%2FucHuFy7M0lXgUbUv%2B0RoG945dVigfI28BgqLAhkvzPOI2TFI5oclf0tVFcyE1xa1S2ht71IRqzfDKxa0H1n2q29lMCxXDIIRMnz838XQJK7H3yOpth6Cy4FOSDkFaRy1KpZLoVcA5SJDMM2LXffOwdxbMj%2BON%2F%2BrsmoxELy%2FcOJ%2B6KMIJV6PqhJQ0Fn9LFnPRxX6c0FotcfcKQuRmPR3VvQI4A9rIBlqYGGEEV9HuGIYBukO2XPvOuevrjuBiqHHNLN5LVe8PoJORxITV7H0DoeVLUOGMbVCxUUMqFcHdEBs%2BInwlP2pONNMmD8nFs2t9d%2FB73fD09z3Q%2FchAWPRhrdphSOby4Wb6n6aGK5QctU6AI9tdwK4f%2BUFYkoO0oZIIpLfjCfjnpb%2FGP%2Fzo8QDs3%2BsqPK3DW91%2FuSQsArg1ehOuKKrc6KtxFLtnEqtQ%2FbTCY%2BpX4R1uBX4zGokM%2FfboUaRk2%2Fqt4Spbh2Lusrkb7OG%2B3mTDSeVuT12o86hzuOs1sy7oLFY6owwczqxCdWhPFPQwMWorBIbph9%2FxnGxRDm9uwHOfkVPG7hPgcDWJwU7yug4nWYwzgM4p%2Ftao97w11JMgN6qnMJLM0cMGOqUB6s%2BCjK1Io9YFRrWBvHZ5sPAyV3JJzpcKpFXATd3VY%2F0vcG9NN%2F8YiR3NwEh5myR0ewzKftO41k8MBZm%2BGai0Qhqna8aJM7vfm5aTabzDvx2MFkUyHqhxgtgK3A8EL5xsZDDwY0TNZJ9BoV0t7wFLTUe9ez%2F5tA2wXxZAdAgb0k1JpEc1Zz%2BYtsj6K4pWBpRpz6tjAxqYZyi9kqgoC202tmfVlubt&X-Amz-Signature=b003eb458b48007a127a7b5f5dcaa8aa77b184d79d09ead1535aa45179862082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# update setup.py and run

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_pkg'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
        (os.path.join('share', package_name, 'config'), glob('config/*.yaml*')),
    ],
```

# update display.launch.py file

TODO:

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')
    robot_controllers = os.path.join(pkg_share, "config/my_controllers.yaml")


    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        arguments=[default_model_path], #Add this line
        #parameters=[{'robot_description': Command(['xacro ', default_model_path])}],  #Remove this line
        #condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))  #Remove this line
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    control_node = launch_ros.actions.Node(
        package="controller_manager",
        executable="ros2_control_node",
        parameters=[
            {'robot_description': Command(['xacro ', default_model_path])}, #FIXME: this should not be here
            robot_controllers],
        output="both",
        remappings=[
            ("/diffbot_base_controller/cmd_vel", "/cmd_vel"),
        ]
    )
    robot_controller_spawner = launch_ros.actions.Node(
        package="controller_manager",
        executable="spawner",
        arguments=["diffbot_base_controller", "--param-file", robot_controllers],
    )

    # Delay start of joint_state_broadcaster after `robot_controller`
    # TODO(anyone): This is a workaround for flaky tests. Remove when fixed.
    delay_joint_state_broadcaster_after_robot_controller_spawner = RegisterEventHandler(
        event_handler=OnProcessExit(
            target_action=robot_controller_spawner,
            on_exit=[joint_state_broadcaster_spawner],
        )
    )
    # Delay rviz start after `joint_state_broadcaster`
    delay_rviz_after_joint_state_broadcaster_spawner = RegisterEventHandler(
        event_handler=OnProcessExit(
            target_action=joint_state_broadcaster_spawner,
            on_exit=[rviz_node],
        )
    )

    return launch.LaunchDescription([
        #launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
        #                                    description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        # joint_state_publisher_gui_node,
        robot_state_publisher_node,
        control_node,
        robot_controller_spawner,
        
                delay_joint_state_broadcaster_after_robot_controller_spawner,
        delay_rviz_after_joint_state_broadcaster_spawner,
        #rviz_node
    ])
```

---

if you have a pi pico and RPLidar then this part applies to you

# pi pico pkg

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4OLR46%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHXfrhNdWOaJVrX13rbas6gd0QxeD0v13Z6RCZtptLe6AiEA2TjlXtUhknUNeGUbXV3Y2sv4EPG2MVuU3ipLhtmNIT4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDEsCBm0m4lxhoYAeSyrcAxfYkt4F%2FWAP9CGtE9FE9Sszvgr3RK%2FucHuFy7M0lXgUbUv%2B0RoG945dVigfI28BgqLAhkvzPOI2TFI5oclf0tVFcyE1xa1S2ht71IRqzfDKxa0H1n2q29lMCxXDIIRMnz838XQJK7H3yOpth6Cy4FOSDkFaRy1KpZLoVcA5SJDMM2LXffOwdxbMj%2BON%2F%2BrsmoxELy%2FcOJ%2B6KMIJV6PqhJQ0Fn9LFnPRxX6c0FotcfcKQuRmPR3VvQI4A9rIBlqYGGEEV9HuGIYBukO2XPvOuevrjuBiqHHNLN5LVe8PoJORxITV7H0DoeVLUOGMbVCxUUMqFcHdEBs%2BInwlP2pONNMmD8nFs2t9d%2FB73fD09z3Q%2FchAWPRhrdphSOby4Wb6n6aGK5QctU6AI9tdwK4f%2BUFYkoO0oZIIpLfjCfjnpb%2FGP%2Fzo8QDs3%2BsqPK3DW91%2FuSQsArg1ehOuKKrc6KtxFLtnEqtQ%2FbTCY%2BpX4R1uBX4zGokM%2FfboUaRk2%2Fqt4Spbh2Lusrkb7OG%2B3mTDSeVuT12o86hzuOs1sy7oLFY6owwczqxCdWhPFPQwMWorBIbph9%2FxnGxRDm9uwHOfkVPG7hPgcDWJwU7yug4nWYwzgM4p%2Ftao97w11JMgN6qnMJLM0cMGOqUB6s%2BCjK1Io9YFRrWBvHZ5sPAyV3JJzpcKpFXATd3VY%2F0vcG9NN%2F8YiR3NwEh5myR0ewzKftO41k8MBZm%2BGai0Qhqna8aJM7vfm5aTabzDvx2MFkUyHqhxgtgK3A8EL5xsZDDwY0TNZJ9BoV0t7wFLTUe9ez%2F5tA2wXxZAdAgb0k1JpEc1Zz%2BYtsj6K4pWBpRpz6tjAxqYZyi9kqgoC202tmfVlubt&X-Amz-Signature=734d48c04d4e70eb72acaae8db77491ccb71d7baaed2d3ef0c89efa58eb8654e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4OLR46%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHXfrhNdWOaJVrX13rbas6gd0QxeD0v13Z6RCZtptLe6AiEA2TjlXtUhknUNeGUbXV3Y2sv4EPG2MVuU3ipLhtmNIT4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDEsCBm0m4lxhoYAeSyrcAxfYkt4F%2FWAP9CGtE9FE9Sszvgr3RK%2FucHuFy7M0lXgUbUv%2B0RoG945dVigfI28BgqLAhkvzPOI2TFI5oclf0tVFcyE1xa1S2ht71IRqzfDKxa0H1n2q29lMCxXDIIRMnz838XQJK7H3yOpth6Cy4FOSDkFaRy1KpZLoVcA5SJDMM2LXffOwdxbMj%2BON%2F%2BrsmoxELy%2FcOJ%2B6KMIJV6PqhJQ0Fn9LFnPRxX6c0FotcfcKQuRmPR3VvQI4A9rIBlqYGGEEV9HuGIYBukO2XPvOuevrjuBiqHHNLN5LVe8PoJORxITV7H0DoeVLUOGMbVCxUUMqFcHdEBs%2BInwlP2pONNMmD8nFs2t9d%2FB73fD09z3Q%2FchAWPRhrdphSOby4Wb6n6aGK5QctU6AI9tdwK4f%2BUFYkoO0oZIIpLfjCfjnpb%2FGP%2Fzo8QDs3%2BsqPK3DW91%2FuSQsArg1ehOuKKrc6KtxFLtnEqtQ%2FbTCY%2BpX4R1uBX4zGokM%2FfboUaRk2%2Fqt4Spbh2Lusrkb7OG%2B3mTDSeVuT12o86hzuOs1sy7oLFY6owwczqxCdWhPFPQwMWorBIbph9%2FxnGxRDm9uwHOfkVPG7hPgcDWJwU7yug4nWYwzgM4p%2Ftao97w11JMgN6qnMJLM0cMGOqUB6s%2BCjK1Io9YFRrWBvHZ5sPAyV3JJzpcKpFXATd3VY%2F0vcG9NN%2F8YiR3NwEh5myR0ewzKftO41k8MBZm%2BGai0Qhqna8aJM7vfm5aTabzDvx2MFkUyHqhxgtgK3A8EL5xsZDDwY0TNZJ9BoV0t7wFLTUe9ez%2F5tA2wXxZAdAgb0k1JpEc1Zz%2BYtsj6K4pWBpRpz6tjAxqYZyi9kqgoC202tmfVlubt&X-Amz-Signature=f783cad277c9a218b15bb05e72ea5d528e95d897b02ebce30ec98ba27c8283f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

Note: if your robot does not connect to your WSL go back to:

[link_to_page](49e52dd2-b25e-4523-b600-0dfc5bc9e9f2)

# lidar

## update the urdf

```xml
  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <mass value="0.125" />
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <cylinder radius="0.0508" length="0.055" />
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0" />
      <geometry>
        <cylinder radius="0.0508" length="0.055" />
      </geometry>
    </visual>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link" />
    <child link="lidar_link" />
    <origin xyz="0.0416 0 0.12" rpy="0 0 ${pi}" />
  </joint>

```

## update launch file

```python
    lidar_node = launch_ros.actions.Node(
        package='sllidar_ros2',
        executable='sllidar_node',
        name='sllidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0',
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',#'laser',
                     'inverted': False,
                     'angle_compensate': True,
                     'scan_mode': 'Boost'}],
        output='screen')

    return launch.LaunchDescription([
        #launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
        #                                    description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        # joint_state_publisher_gui_node,
        robot_state_publisher_node,

        control_node,
        robot_controller_spawner,

        lidar_node,

        delay_joint_state_broadcaster_after_robot_controller_spawner,
        delay_rviz_after_joint_state_broadcaster_spawner,
        # rviz_node
    ])
```

package link: [https://github.com/Slamtec/sllidar_ros2](https://github.com/Slamtec/sllidar_ros2)

run guide: [https://github.com/robopeak/rplidar_ros/wiki](https://github.com/robopeak/rplidar_ros/wiki)

```bash
sudo chmod 777 /dev/ttyUSB0
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF4OLR46%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHXfrhNdWOaJVrX13rbas6gd0QxeD0v13Z6RCZtptLe6AiEA2TjlXtUhknUNeGUbXV3Y2sv4EPG2MVuU3ipLhtmNIT4q%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDEsCBm0m4lxhoYAeSyrcAxfYkt4F%2FWAP9CGtE9FE9Sszvgr3RK%2FucHuFy7M0lXgUbUv%2B0RoG945dVigfI28BgqLAhkvzPOI2TFI5oclf0tVFcyE1xa1S2ht71IRqzfDKxa0H1n2q29lMCxXDIIRMnz838XQJK7H3yOpth6Cy4FOSDkFaRy1KpZLoVcA5SJDMM2LXffOwdxbMj%2BON%2F%2BrsmoxELy%2FcOJ%2B6KMIJV6PqhJQ0Fn9LFnPRxX6c0FotcfcKQuRmPR3VvQI4A9rIBlqYGGEEV9HuGIYBukO2XPvOuevrjuBiqHHNLN5LVe8PoJORxITV7H0DoeVLUOGMbVCxUUMqFcHdEBs%2BInwlP2pONNMmD8nFs2t9d%2FB73fD09z3Q%2FchAWPRhrdphSOby4Wb6n6aGK5QctU6AI9tdwK4f%2BUFYkoO0oZIIpLfjCfjnpb%2FGP%2Fzo8QDs3%2BsqPK3DW91%2FuSQsArg1ehOuKKrc6KtxFLtnEqtQ%2FbTCY%2BpX4R1uBX4zGokM%2FfboUaRk2%2Fqt4Spbh2Lusrkb7OG%2B3mTDSeVuT12o86hzuOs1sy7oLFY6owwczqxCdWhPFPQwMWorBIbph9%2FxnGxRDm9uwHOfkVPG7hPgcDWJwU7yug4nWYwzgM4p%2Ftao97w11JMgN6qnMJLM0cMGOqUB6s%2BCjK1Io9YFRrWBvHZ5sPAyV3JJzpcKpFXATd3VY%2F0vcG9NN%2F8YiR3NwEh5myR0ewzKftO41k8MBZm%2BGai0Qhqna8aJM7vfm5aTabzDvx2MFkUyHqhxgtgK3A8EL5xsZDDwY0TNZJ9BoV0t7wFLTUe9ez%2F5tA2wXxZAdAgb0k1JpEc1Zz%2BYtsj6K4pWBpRpz6tjAxqYZyi9kqgoC202tmfVlubt&X-Amz-Signature=73638d251c597f2548c420612c1aeea0b2303f96a88d766f27a4dbede0bb302c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
