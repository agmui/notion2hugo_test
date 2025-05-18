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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAFGTJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRggmbdJbMDsLdN5rKQYfM9OY3nZj4fgvgKPL9lKsFGAiEA0RVNoWcMIvz158aDvwV4VMYt4ENlcJvP1aMoUSRT1q0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ4zBG1TX6MOfZaVXSrcA6G1TD1uxaSCpbv7J0%2B3j07n7YzPraXM7DdJ5rFmgVEEMHom3JyYxBP2lL%2Ba9FAXPAn4GvuJJSN9%2FQtLESrXr8NBMqay7kujyrXxPnzki39yr%2BydatSV3YeMkQ0iP8ZXRR7Dz3X9PjT30Hh4qVXdSx8YEa5ZpgDdUJtJ615%2F0HoIQlMOkqjyVpw1QFyqfd%2FvsV759eD2ciP%2BWzibKK7yDsOs7VFIk30kuvqU8LFw%2BMRQJ3Q9iSIVqUZIbe%2FKgtV%2F6W3RvElf1G2pPABvA1ncieYJB4ajJuCLweTcOymva%2FP%2Fq7GH%2FPbzPwwwMmcvzcuYyNL1UcYC1HUbem6Ya953l7fEnY1rfvVP3RlWMYaKJ29NmM9Q%2BH8cP8E24Drpe3Mz3URzc3DqN29Yf19xELPG%2F7tHqKQdrJruV3nekDSom%2FMxS97%2BwT%2BRKS%2Fi%2FBCJ0xCr5CGiWgoII%2B32Hr7gZ4pzLOW3LRMN4DiIwwsdLPqRHNp3Q%2BgMdgioH7hJ1YsewzxPFYl2TVEJz9KrvGN61MIHoQgLVMZTlzrk7C41lMTDNnnhMaAhxgjs2k2OvjJJYHoY9AeHuBEvAhVsPJn6%2BsEvC7yWrgs4bX%2ByzkRNCq%2BzG16bEyJh448lP2hfXn4yMPzppcEGOqUB3mFQGAFkBNO%2FUc9zaL5VwhqwhR7uVrCj5XeuESwUqH7tb6%2FOuFGLBusDKvIVSavEfVNOzvMMgFc19%2B9H01tpKVgU9JqKql7aC7ErLg17iruUfoV9mI3KCi90aSDYYGyGhglo%2BCSOdSlgly2BWnu65gJ%2BPUhkQ5V8UdsVBaCst7aBZt9jzgGBSnxTlI88KiodFZBVb0luhmsJlWk3drKmEJup6vlr&X-Amz-Signature=1298f919dbc96209846d881b4c862508ad8e0466fc32ef23f007e5e289831ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAFGTJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRggmbdJbMDsLdN5rKQYfM9OY3nZj4fgvgKPL9lKsFGAiEA0RVNoWcMIvz158aDvwV4VMYt4ENlcJvP1aMoUSRT1q0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ4zBG1TX6MOfZaVXSrcA6G1TD1uxaSCpbv7J0%2B3j07n7YzPraXM7DdJ5rFmgVEEMHom3JyYxBP2lL%2Ba9FAXPAn4GvuJJSN9%2FQtLESrXr8NBMqay7kujyrXxPnzki39yr%2BydatSV3YeMkQ0iP8ZXRR7Dz3X9PjT30Hh4qVXdSx8YEa5ZpgDdUJtJ615%2F0HoIQlMOkqjyVpw1QFyqfd%2FvsV759eD2ciP%2BWzibKK7yDsOs7VFIk30kuvqU8LFw%2BMRQJ3Q9iSIVqUZIbe%2FKgtV%2F6W3RvElf1G2pPABvA1ncieYJB4ajJuCLweTcOymva%2FP%2Fq7GH%2FPbzPwwwMmcvzcuYyNL1UcYC1HUbem6Ya953l7fEnY1rfvVP3RlWMYaKJ29NmM9Q%2BH8cP8E24Drpe3Mz3URzc3DqN29Yf19xELPG%2F7tHqKQdrJruV3nekDSom%2FMxS97%2BwT%2BRKS%2Fi%2FBCJ0xCr5CGiWgoII%2B32Hr7gZ4pzLOW3LRMN4DiIwwsdLPqRHNp3Q%2BgMdgioH7hJ1YsewzxPFYl2TVEJz9KrvGN61MIHoQgLVMZTlzrk7C41lMTDNnnhMaAhxgjs2k2OvjJJYHoY9AeHuBEvAhVsPJn6%2BsEvC7yWrgs4bX%2ByzkRNCq%2BzG16bEyJh448lP2hfXn4yMPzppcEGOqUB3mFQGAFkBNO%2FUc9zaL5VwhqwhR7uVrCj5XeuESwUqH7tb6%2FOuFGLBusDKvIVSavEfVNOzvMMgFc19%2B9H01tpKVgU9JqKql7aC7ErLg17iruUfoV9mI3KCi90aSDYYGyGhglo%2BCSOdSlgly2BWnu65gJ%2BPUhkQ5V8UdsVBaCst7aBZt9jzgGBSnxTlI88KiodFZBVb0luhmsJlWk3drKmEJup6vlr&X-Amz-Signature=94d675c36d4a13f33fdabb44e7faab1dc2293d0c4d615db97eb3f6e569ac740c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAFGTJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRggmbdJbMDsLdN5rKQYfM9OY3nZj4fgvgKPL9lKsFGAiEA0RVNoWcMIvz158aDvwV4VMYt4ENlcJvP1aMoUSRT1q0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ4zBG1TX6MOfZaVXSrcA6G1TD1uxaSCpbv7J0%2B3j07n7YzPraXM7DdJ5rFmgVEEMHom3JyYxBP2lL%2Ba9FAXPAn4GvuJJSN9%2FQtLESrXr8NBMqay7kujyrXxPnzki39yr%2BydatSV3YeMkQ0iP8ZXRR7Dz3X9PjT30Hh4qVXdSx8YEa5ZpgDdUJtJ615%2F0HoIQlMOkqjyVpw1QFyqfd%2FvsV759eD2ciP%2BWzibKK7yDsOs7VFIk30kuvqU8LFw%2BMRQJ3Q9iSIVqUZIbe%2FKgtV%2F6W3RvElf1G2pPABvA1ncieYJB4ajJuCLweTcOymva%2FP%2Fq7GH%2FPbzPwwwMmcvzcuYyNL1UcYC1HUbem6Ya953l7fEnY1rfvVP3RlWMYaKJ29NmM9Q%2BH8cP8E24Drpe3Mz3URzc3DqN29Yf19xELPG%2F7tHqKQdrJruV3nekDSom%2FMxS97%2BwT%2BRKS%2Fi%2FBCJ0xCr5CGiWgoII%2B32Hr7gZ4pzLOW3LRMN4DiIwwsdLPqRHNp3Q%2BgMdgioH7hJ1YsewzxPFYl2TVEJz9KrvGN61MIHoQgLVMZTlzrk7C41lMTDNnnhMaAhxgjs2k2OvjJJYHoY9AeHuBEvAhVsPJn6%2BsEvC7yWrgs4bX%2ByzkRNCq%2BzG16bEyJh448lP2hfXn4yMPzppcEGOqUB3mFQGAFkBNO%2FUc9zaL5VwhqwhR7uVrCj5XeuESwUqH7tb6%2FOuFGLBusDKvIVSavEfVNOzvMMgFc19%2B9H01tpKVgU9JqKql7aC7ErLg17iruUfoV9mI3KCi90aSDYYGyGhglo%2BCSOdSlgly2BWnu65gJ%2BPUhkQ5V8UdsVBaCst7aBZt9jzgGBSnxTlI88KiodFZBVb0luhmsJlWk3drKmEJup6vlr&X-Amz-Signature=e7b0d25a93655d81c2514b6160b24e64aec9cdaddf824baebcc8ab0880f56e30&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAFGTJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRggmbdJbMDsLdN5rKQYfM9OY3nZj4fgvgKPL9lKsFGAiEA0RVNoWcMIvz158aDvwV4VMYt4ENlcJvP1aMoUSRT1q0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ4zBG1TX6MOfZaVXSrcA6G1TD1uxaSCpbv7J0%2B3j07n7YzPraXM7DdJ5rFmgVEEMHom3JyYxBP2lL%2Ba9FAXPAn4GvuJJSN9%2FQtLESrXr8NBMqay7kujyrXxPnzki39yr%2BydatSV3YeMkQ0iP8ZXRR7Dz3X9PjT30Hh4qVXdSx8YEa5ZpgDdUJtJ615%2F0HoIQlMOkqjyVpw1QFyqfd%2FvsV759eD2ciP%2BWzibKK7yDsOs7VFIk30kuvqU8LFw%2BMRQJ3Q9iSIVqUZIbe%2FKgtV%2F6W3RvElf1G2pPABvA1ncieYJB4ajJuCLweTcOymva%2FP%2Fq7GH%2FPbzPwwwMmcvzcuYyNL1UcYC1HUbem6Ya953l7fEnY1rfvVP3RlWMYaKJ29NmM9Q%2BH8cP8E24Drpe3Mz3URzc3DqN29Yf19xELPG%2F7tHqKQdrJruV3nekDSom%2FMxS97%2BwT%2BRKS%2Fi%2FBCJ0xCr5CGiWgoII%2B32Hr7gZ4pzLOW3LRMN4DiIwwsdLPqRHNp3Q%2BgMdgioH7hJ1YsewzxPFYl2TVEJz9KrvGN61MIHoQgLVMZTlzrk7C41lMTDNnnhMaAhxgjs2k2OvjJJYHoY9AeHuBEvAhVsPJn6%2BsEvC7yWrgs4bX%2ByzkRNCq%2BzG16bEyJh448lP2hfXn4yMPzppcEGOqUB3mFQGAFkBNO%2FUc9zaL5VwhqwhR7uVrCj5XeuESwUqH7tb6%2FOuFGLBusDKvIVSavEfVNOzvMMgFc19%2B9H01tpKVgU9JqKql7aC7ErLg17iruUfoV9mI3KCi90aSDYYGyGhglo%2BCSOdSlgly2BWnu65gJ%2BPUhkQ5V8UdsVBaCst7aBZt9jzgGBSnxTlI88KiodFZBVb0luhmsJlWk3drKmEJup6vlr&X-Amz-Signature=30289b7876dc903a95a00d0047fd4033c1639b68ddc0979a2fc9f2e00851f35b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAFGTJF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRggmbdJbMDsLdN5rKQYfM9OY3nZj4fgvgKPL9lKsFGAiEA0RVNoWcMIvz158aDvwV4VMYt4ENlcJvP1aMoUSRT1q0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ4zBG1TX6MOfZaVXSrcA6G1TD1uxaSCpbv7J0%2B3j07n7YzPraXM7DdJ5rFmgVEEMHom3JyYxBP2lL%2Ba9FAXPAn4GvuJJSN9%2FQtLESrXr8NBMqay7kujyrXxPnzki39yr%2BydatSV3YeMkQ0iP8ZXRR7Dz3X9PjT30Hh4qVXdSx8YEa5ZpgDdUJtJ615%2F0HoIQlMOkqjyVpw1QFyqfd%2FvsV759eD2ciP%2BWzibKK7yDsOs7VFIk30kuvqU8LFw%2BMRQJ3Q9iSIVqUZIbe%2FKgtV%2F6W3RvElf1G2pPABvA1ncieYJB4ajJuCLweTcOymva%2FP%2Fq7GH%2FPbzPwwwMmcvzcuYyNL1UcYC1HUbem6Ya953l7fEnY1rfvVP3RlWMYaKJ29NmM9Q%2BH8cP8E24Drpe3Mz3URzc3DqN29Yf19xELPG%2F7tHqKQdrJruV3nekDSom%2FMxS97%2BwT%2BRKS%2Fi%2FBCJ0xCr5CGiWgoII%2B32Hr7gZ4pzLOW3LRMN4DiIwwsdLPqRHNp3Q%2BgMdgioH7hJ1YsewzxPFYl2TVEJz9KrvGN61MIHoQgLVMZTlzrk7C41lMTDNnnhMaAhxgjs2k2OvjJJYHoY9AeHuBEvAhVsPJn6%2BsEvC7yWrgs4bX%2ByzkRNCq%2BzG16bEyJh448lP2hfXn4yMPzppcEGOqUB3mFQGAFkBNO%2FUc9zaL5VwhqwhR7uVrCj5XeuESwUqH7tb6%2FOuFGLBusDKvIVSavEfVNOzvMMgFc19%2B9H01tpKVgU9JqKql7aC7ErLg17iruUfoV9mI3KCi90aSDYYGyGhglo%2BCSOdSlgly2BWnu65gJ%2BPUhkQ5V8UdsVBaCst7aBZt9jzgGBSnxTlI88KiodFZBVb0luhmsJlWk3drKmEJup6vlr&X-Amz-Signature=9d9ce7bde97b41592e23b0e6784756f73dc69a6faa9e2cfd59a5287f746da4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
