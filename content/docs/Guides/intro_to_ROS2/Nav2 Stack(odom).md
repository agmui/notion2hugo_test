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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQQKL5H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCT%2FNAtXC4C5NLKDRO9PeQWb8SmKEZiCSFPFC31X%2FPQEgIgGQPk%2FHqS6qEktByUj1kGdEOnTLkDnJxrpCa2kJLlrHQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ%2BlKbnqNEnN7ysJrSrcAx8WOxm5NP8oPsRtcBOFuVH5YxT6y7B82ccpgemzSNtLROAIh%2BTeFMi0zP%2Fuhwiblq7IaLvWX1mR9XdnZT%2BaQwdbQESY0FJpSZ%2BvpRx2HZHQ4tsY8ZtgR%2BkomdxmcjxLUVjX8hLJbRhD6hLZkR2lf8DXKj2emRPe4v2FOww1tbWVD8P0y4xeLDctbSgw7EZbZxTHP5OOIy6t8xAWet9uWWfDjR%2FGsvwYS%2Ft4bnEXHMtLmWACcoa8akNZYr9RKkvXwxoxNXmoYlCsDezgUBYFzZLjYO%2Fsxw%2FeQrL0arllqCFw3SPLczOylXAq3sa4Y3bdWqEtXWWmFRUOT6ifzRusQoIFm0Tw6%2FOxPjlOFUP2PHA2f2CH2eSurUmu9TtpJiCWlJ6hgca17UlDecjj37ptfXfcQ42q%2Bt%2FIQnsXx%2FwIWQ04FIPTwykndUcrnMoOZCyT8JVLCzUZSYMnS%2BHbpxxcTTLh80j%2BXIraOe0zr9EAd2g%2BwBxzcHWtNiosRCmjAclYR%2BnIwdHvrP4Eh1QHtwGAvY8ukRgOubO9YZPtLYeTyHvzmacojvoeAKST%2Fig6mrv4boQeCTc5%2BX4bnTC08rsT7OCe3tgKDhJA0sXHHL0TrKCxrTB1dG0fE4lpclhdMJaJosMGOqUBOEfwPO3dvhL%2FkWmVp%2BmV8VvWt%2FCILWQrw0mlPRQEI8HRmGavxAA8XOAFX%2FBCVD4GTQZYm9qqAdfcMUE%2FgcmsKX97ROrIo5SQPU7edZdEuWZAmYslFnJ8Yg56Qmgu%2B%2BRp7EQOvff%2B7SGV%2Bjj%2FvBoXb3ob2PcAF7UfILx98qdgi1sUL%2B6ASMg8AapJCjCWC5hisw3EzdsPL13Ov9ooqMbRB%2BvnNMYu&X-Amz-Signature=cd9bc45dde624890443d0d3c1f61c54eb0f7b64e15443340dbc7f33e4ff7252e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQQKL5H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCT%2FNAtXC4C5NLKDRO9PeQWb8SmKEZiCSFPFC31X%2FPQEgIgGQPk%2FHqS6qEktByUj1kGdEOnTLkDnJxrpCa2kJLlrHQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ%2BlKbnqNEnN7ysJrSrcAx8WOxm5NP8oPsRtcBOFuVH5YxT6y7B82ccpgemzSNtLROAIh%2BTeFMi0zP%2Fuhwiblq7IaLvWX1mR9XdnZT%2BaQwdbQESY0FJpSZ%2BvpRx2HZHQ4tsY8ZtgR%2BkomdxmcjxLUVjX8hLJbRhD6hLZkR2lf8DXKj2emRPe4v2FOww1tbWVD8P0y4xeLDctbSgw7EZbZxTHP5OOIy6t8xAWet9uWWfDjR%2FGsvwYS%2Ft4bnEXHMtLmWACcoa8akNZYr9RKkvXwxoxNXmoYlCsDezgUBYFzZLjYO%2Fsxw%2FeQrL0arllqCFw3SPLczOylXAq3sa4Y3bdWqEtXWWmFRUOT6ifzRusQoIFm0Tw6%2FOxPjlOFUP2PHA2f2CH2eSurUmu9TtpJiCWlJ6hgca17UlDecjj37ptfXfcQ42q%2Bt%2FIQnsXx%2FwIWQ04FIPTwykndUcrnMoOZCyT8JVLCzUZSYMnS%2BHbpxxcTTLh80j%2BXIraOe0zr9EAd2g%2BwBxzcHWtNiosRCmjAclYR%2BnIwdHvrP4Eh1QHtwGAvY8ukRgOubO9YZPtLYeTyHvzmacojvoeAKST%2Fig6mrv4boQeCTc5%2BX4bnTC08rsT7OCe3tgKDhJA0sXHHL0TrKCxrTB1dG0fE4lpclhdMJaJosMGOqUBOEfwPO3dvhL%2FkWmVp%2BmV8VvWt%2FCILWQrw0mlPRQEI8HRmGavxAA8XOAFX%2FBCVD4GTQZYm9qqAdfcMUE%2FgcmsKX97ROrIo5SQPU7edZdEuWZAmYslFnJ8Yg56Qmgu%2B%2BRp7EQOvff%2B7SGV%2Bjj%2FvBoXb3ob2PcAF7UfILx98qdgi1sUL%2B6ASMg8AapJCjCWC5hisw3EzdsPL13Ov9ooqMbRB%2BvnNMYu&X-Amz-Signature=0ea7186567ccaf21c9ba575e1fb0d868a61d6adb0b67e53824406f50cb3e8ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQQKL5H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCT%2FNAtXC4C5NLKDRO9PeQWb8SmKEZiCSFPFC31X%2FPQEgIgGQPk%2FHqS6qEktByUj1kGdEOnTLkDnJxrpCa2kJLlrHQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ%2BlKbnqNEnN7ysJrSrcAx8WOxm5NP8oPsRtcBOFuVH5YxT6y7B82ccpgemzSNtLROAIh%2BTeFMi0zP%2Fuhwiblq7IaLvWX1mR9XdnZT%2BaQwdbQESY0FJpSZ%2BvpRx2HZHQ4tsY8ZtgR%2BkomdxmcjxLUVjX8hLJbRhD6hLZkR2lf8DXKj2emRPe4v2FOww1tbWVD8P0y4xeLDctbSgw7EZbZxTHP5OOIy6t8xAWet9uWWfDjR%2FGsvwYS%2Ft4bnEXHMtLmWACcoa8akNZYr9RKkvXwxoxNXmoYlCsDezgUBYFzZLjYO%2Fsxw%2FeQrL0arllqCFw3SPLczOylXAq3sa4Y3bdWqEtXWWmFRUOT6ifzRusQoIFm0Tw6%2FOxPjlOFUP2PHA2f2CH2eSurUmu9TtpJiCWlJ6hgca17UlDecjj37ptfXfcQ42q%2Bt%2FIQnsXx%2FwIWQ04FIPTwykndUcrnMoOZCyT8JVLCzUZSYMnS%2BHbpxxcTTLh80j%2BXIraOe0zr9EAd2g%2BwBxzcHWtNiosRCmjAclYR%2BnIwdHvrP4Eh1QHtwGAvY8ukRgOubO9YZPtLYeTyHvzmacojvoeAKST%2Fig6mrv4boQeCTc5%2BX4bnTC08rsT7OCe3tgKDhJA0sXHHL0TrKCxrTB1dG0fE4lpclhdMJaJosMGOqUBOEfwPO3dvhL%2FkWmVp%2BmV8VvWt%2FCILWQrw0mlPRQEI8HRmGavxAA8XOAFX%2FBCVD4GTQZYm9qqAdfcMUE%2FgcmsKX97ROrIo5SQPU7edZdEuWZAmYslFnJ8Yg56Qmgu%2B%2BRp7EQOvff%2B7SGV%2Bjj%2FvBoXb3ob2PcAF7UfILx98qdgi1sUL%2B6ASMg8AapJCjCWC5hisw3EzdsPL13Ov9ooqMbRB%2BvnNMYu&X-Amz-Signature=71d375e833d68446b1f1b865bbebbad59090d3ec5c9d866010b5714ae9895fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQQKL5H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCT%2FNAtXC4C5NLKDRO9PeQWb8SmKEZiCSFPFC31X%2FPQEgIgGQPk%2FHqS6qEktByUj1kGdEOnTLkDnJxrpCa2kJLlrHQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ%2BlKbnqNEnN7ysJrSrcAx8WOxm5NP8oPsRtcBOFuVH5YxT6y7B82ccpgemzSNtLROAIh%2BTeFMi0zP%2Fuhwiblq7IaLvWX1mR9XdnZT%2BaQwdbQESY0FJpSZ%2BvpRx2HZHQ4tsY8ZtgR%2BkomdxmcjxLUVjX8hLJbRhD6hLZkR2lf8DXKj2emRPe4v2FOww1tbWVD8P0y4xeLDctbSgw7EZbZxTHP5OOIy6t8xAWet9uWWfDjR%2FGsvwYS%2Ft4bnEXHMtLmWACcoa8akNZYr9RKkvXwxoxNXmoYlCsDezgUBYFzZLjYO%2Fsxw%2FeQrL0arllqCFw3SPLczOylXAq3sa4Y3bdWqEtXWWmFRUOT6ifzRusQoIFm0Tw6%2FOxPjlOFUP2PHA2f2CH2eSurUmu9TtpJiCWlJ6hgca17UlDecjj37ptfXfcQ42q%2Bt%2FIQnsXx%2FwIWQ04FIPTwykndUcrnMoOZCyT8JVLCzUZSYMnS%2BHbpxxcTTLh80j%2BXIraOe0zr9EAd2g%2BwBxzcHWtNiosRCmjAclYR%2BnIwdHvrP4Eh1QHtwGAvY8ukRgOubO9YZPtLYeTyHvzmacojvoeAKST%2Fig6mrv4boQeCTc5%2BX4bnTC08rsT7OCe3tgKDhJA0sXHHL0TrKCxrTB1dG0fE4lpclhdMJaJosMGOqUBOEfwPO3dvhL%2FkWmVp%2BmV8VvWt%2FCILWQrw0mlPRQEI8HRmGavxAA8XOAFX%2FBCVD4GTQZYm9qqAdfcMUE%2FgcmsKX97ROrIo5SQPU7edZdEuWZAmYslFnJ8Yg56Qmgu%2B%2BRp7EQOvff%2B7SGV%2Bjj%2FvBoXb3ob2PcAF7UfILx98qdgi1sUL%2B6ASMg8AapJCjCWC5hisw3EzdsPL13Ov9ooqMbRB%2BvnNMYu&X-Amz-Signature=123a934fbda2af66b524eafb8c35d0840dedd81f6ac6f68be5059cfad749db08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQQKL5H%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCT%2FNAtXC4C5NLKDRO9PeQWb8SmKEZiCSFPFC31X%2FPQEgIgGQPk%2FHqS6qEktByUj1kGdEOnTLkDnJxrpCa2kJLlrHQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ%2BlKbnqNEnN7ysJrSrcAx8WOxm5NP8oPsRtcBOFuVH5YxT6y7B82ccpgemzSNtLROAIh%2BTeFMi0zP%2Fuhwiblq7IaLvWX1mR9XdnZT%2BaQwdbQESY0FJpSZ%2BvpRx2HZHQ4tsY8ZtgR%2BkomdxmcjxLUVjX8hLJbRhD6hLZkR2lf8DXKj2emRPe4v2FOww1tbWVD8P0y4xeLDctbSgw7EZbZxTHP5OOIy6t8xAWet9uWWfDjR%2FGsvwYS%2Ft4bnEXHMtLmWACcoa8akNZYr9RKkvXwxoxNXmoYlCsDezgUBYFzZLjYO%2Fsxw%2FeQrL0arllqCFw3SPLczOylXAq3sa4Y3bdWqEtXWWmFRUOT6ifzRusQoIFm0Tw6%2FOxPjlOFUP2PHA2f2CH2eSurUmu9TtpJiCWlJ6hgca17UlDecjj37ptfXfcQ42q%2Bt%2FIQnsXx%2FwIWQ04FIPTwykndUcrnMoOZCyT8JVLCzUZSYMnS%2BHbpxxcTTLh80j%2BXIraOe0zr9EAd2g%2BwBxzcHWtNiosRCmjAclYR%2BnIwdHvrP4Eh1QHtwGAvY8ukRgOubO9YZPtLYeTyHvzmacojvoeAKST%2Fig6mrv4boQeCTc5%2BX4bnTC08rsT7OCe3tgKDhJA0sXHHL0TrKCxrTB1dG0fE4lpclhdMJaJosMGOqUBOEfwPO3dvhL%2FkWmVp%2BmV8VvWt%2FCILWQrw0mlPRQEI8HRmGavxAA8XOAFX%2FBCVD4GTQZYm9qqAdfcMUE%2FgcmsKX97ROrIo5SQPU7edZdEuWZAmYslFnJ8Yg56Qmgu%2B%2BRp7EQOvff%2B7SGV%2Bjj%2FvBoXb3ob2PcAF7UfILx98qdgi1sUL%2B6ASMg8AapJCjCWC5hisw3EzdsPL13Ov9ooqMbRB%2BvnNMYu&X-Amz-Signature=89131bc0a20ce8465f88b94942d80bb4fac10c5f07af4a45c065d74b7e558b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
