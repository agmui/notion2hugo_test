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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGYUVRD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqikJeKNn4HrAkceJaj5Le9aoG7R6I0M4qEKYaXRCLAIgbSP1k3waTLhOOP4fsRHoUOyE4TJf01Ey0XBe9f2orlYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInxCDIibc0tGj6VdCrcA865lYQBS8l%2FIWEK%2BHUpns6x3GGSI7jMwOIJ78OS1mRckLlB1gJ%2BSHzeM91lX8tGksYv2tS%2BFa3EWSmUZH7IMtwZyaqM%2B6j9NnruW6u2aFGcsh1wCJRQoKgnDFbV5pd6qIed2NHU6Ov%2FoqMRYERAmcHFkJXXgewwTKBJDXAE48%2Bn0B%2Bfts5X25hjS43JXiQW%2Bu3V%2FRdUS%2FlNTuXAd5dmvXE2b1ySqDKtjHHWte46%2FVzQnGJNNSpKWgZ4GM6k7RPSw%2FyoeiKDLDy80AGHaHAqk6T0zGU5A98f8RaljbyXnUSUsywB%2B1wejCUD4pYA%2BAq8R7LroQB%2FO9g94QTuNN13BQS7LYyZsETcYYtvcZSZjf7GCfXuXjRsoVaUXdfEqy0IIDOh3CGzKvWlriMx4fAOoMjqdgWLK5fsfgcJ9x5TaNyP%2B%2BgA5xKTIeY%2FUlRcZhGbyZH%2FZPQIG67SZw7YqVodj%2Be4q%2FSGW0WKIAXBT%2BL4Jcyzw4GgNM1%2B6UFAXmk2IKuc%2Be%2BxKdI9R09NnaIaVAPz%2B2YTlW7klBnJCbpjvanYmbRBYthjx12z9XSsjUURPKFhdWtKH9Xp6N8Z43wHvf6pN2rlMkAbFeRem7TX7QdnLRzzKNINDs1PPKTlnFJ6MNaeqL0GOqUB1j404uD014wQfy%2FIX%2Bgy9TMPtI%2FlAje8I92JGlYsCJYdZSe6myQ5TE2ouIYv5SMuUtpW4385NN3kvisBOd0ZXkR0OcezqXMx4Jj7Pybg8FZRAHG6q0UE5o1ZUNsXe2JpnWI3wjoSBoMXaLJ%2FuvOfgAJX80eGv1iBRj0wZoLYDG%2FGNa%2BrzRRB5nkvCJqX7%2BXwpIhTzfk0xlfina7mmVZoDIjdc600&X-Amz-Signature=09f60281492e0f511984383f9a17e07ec38d15f8629687986ee03b9f1dae2f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGYUVRD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqikJeKNn4HrAkceJaj5Le9aoG7R6I0M4qEKYaXRCLAIgbSP1k3waTLhOOP4fsRHoUOyE4TJf01Ey0XBe9f2orlYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInxCDIibc0tGj6VdCrcA865lYQBS8l%2FIWEK%2BHUpns6x3GGSI7jMwOIJ78OS1mRckLlB1gJ%2BSHzeM91lX8tGksYv2tS%2BFa3EWSmUZH7IMtwZyaqM%2B6j9NnruW6u2aFGcsh1wCJRQoKgnDFbV5pd6qIed2NHU6Ov%2FoqMRYERAmcHFkJXXgewwTKBJDXAE48%2Bn0B%2Bfts5X25hjS43JXiQW%2Bu3V%2FRdUS%2FlNTuXAd5dmvXE2b1ySqDKtjHHWte46%2FVzQnGJNNSpKWgZ4GM6k7RPSw%2FyoeiKDLDy80AGHaHAqk6T0zGU5A98f8RaljbyXnUSUsywB%2B1wejCUD4pYA%2BAq8R7LroQB%2FO9g94QTuNN13BQS7LYyZsETcYYtvcZSZjf7GCfXuXjRsoVaUXdfEqy0IIDOh3CGzKvWlriMx4fAOoMjqdgWLK5fsfgcJ9x5TaNyP%2B%2BgA5xKTIeY%2FUlRcZhGbyZH%2FZPQIG67SZw7YqVodj%2Be4q%2FSGW0WKIAXBT%2BL4Jcyzw4GgNM1%2B6UFAXmk2IKuc%2Be%2BxKdI9R09NnaIaVAPz%2B2YTlW7klBnJCbpjvanYmbRBYthjx12z9XSsjUURPKFhdWtKH9Xp6N8Z43wHvf6pN2rlMkAbFeRem7TX7QdnLRzzKNINDs1PPKTlnFJ6MNaeqL0GOqUB1j404uD014wQfy%2FIX%2Bgy9TMPtI%2FlAje8I92JGlYsCJYdZSe6myQ5TE2ouIYv5SMuUtpW4385NN3kvisBOd0ZXkR0OcezqXMx4Jj7Pybg8FZRAHG6q0UE5o1ZUNsXe2JpnWI3wjoSBoMXaLJ%2FuvOfgAJX80eGv1iBRj0wZoLYDG%2FGNa%2BrzRRB5nkvCJqX7%2BXwpIhTzfk0xlfina7mmVZoDIjdc600&X-Amz-Signature=7b951fc0ec8c14c86d6dbf75d4827df92aed64ea1c26de8d26af1e2177b2ca4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGYUVRD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqikJeKNn4HrAkceJaj5Le9aoG7R6I0M4qEKYaXRCLAIgbSP1k3waTLhOOP4fsRHoUOyE4TJf01Ey0XBe9f2orlYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInxCDIibc0tGj6VdCrcA865lYQBS8l%2FIWEK%2BHUpns6x3GGSI7jMwOIJ78OS1mRckLlB1gJ%2BSHzeM91lX8tGksYv2tS%2BFa3EWSmUZH7IMtwZyaqM%2B6j9NnruW6u2aFGcsh1wCJRQoKgnDFbV5pd6qIed2NHU6Ov%2FoqMRYERAmcHFkJXXgewwTKBJDXAE48%2Bn0B%2Bfts5X25hjS43JXiQW%2Bu3V%2FRdUS%2FlNTuXAd5dmvXE2b1ySqDKtjHHWte46%2FVzQnGJNNSpKWgZ4GM6k7RPSw%2FyoeiKDLDy80AGHaHAqk6T0zGU5A98f8RaljbyXnUSUsywB%2B1wejCUD4pYA%2BAq8R7LroQB%2FO9g94QTuNN13BQS7LYyZsETcYYtvcZSZjf7GCfXuXjRsoVaUXdfEqy0IIDOh3CGzKvWlriMx4fAOoMjqdgWLK5fsfgcJ9x5TaNyP%2B%2BgA5xKTIeY%2FUlRcZhGbyZH%2FZPQIG67SZw7YqVodj%2Be4q%2FSGW0WKIAXBT%2BL4Jcyzw4GgNM1%2B6UFAXmk2IKuc%2Be%2BxKdI9R09NnaIaVAPz%2B2YTlW7klBnJCbpjvanYmbRBYthjx12z9XSsjUURPKFhdWtKH9Xp6N8Z43wHvf6pN2rlMkAbFeRem7TX7QdnLRzzKNINDs1PPKTlnFJ6MNaeqL0GOqUB1j404uD014wQfy%2FIX%2Bgy9TMPtI%2FlAje8I92JGlYsCJYdZSe6myQ5TE2ouIYv5SMuUtpW4385NN3kvisBOd0ZXkR0OcezqXMx4Jj7Pybg8FZRAHG6q0UE5o1ZUNsXe2JpnWI3wjoSBoMXaLJ%2FuvOfgAJX80eGv1iBRj0wZoLYDG%2FGNa%2BrzRRB5nkvCJqX7%2BXwpIhTzfk0xlfina7mmVZoDIjdc600&X-Amz-Signature=70b48a8750be7ebb73322eec9ec04ad1508a2f5a79f0fa41a558e3bdeb9fd7c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGYUVRD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqikJeKNn4HrAkceJaj5Le9aoG7R6I0M4qEKYaXRCLAIgbSP1k3waTLhOOP4fsRHoUOyE4TJf01Ey0XBe9f2orlYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInxCDIibc0tGj6VdCrcA865lYQBS8l%2FIWEK%2BHUpns6x3GGSI7jMwOIJ78OS1mRckLlB1gJ%2BSHzeM91lX8tGksYv2tS%2BFa3EWSmUZH7IMtwZyaqM%2B6j9NnruW6u2aFGcsh1wCJRQoKgnDFbV5pd6qIed2NHU6Ov%2FoqMRYERAmcHFkJXXgewwTKBJDXAE48%2Bn0B%2Bfts5X25hjS43JXiQW%2Bu3V%2FRdUS%2FlNTuXAd5dmvXE2b1ySqDKtjHHWte46%2FVzQnGJNNSpKWgZ4GM6k7RPSw%2FyoeiKDLDy80AGHaHAqk6T0zGU5A98f8RaljbyXnUSUsywB%2B1wejCUD4pYA%2BAq8R7LroQB%2FO9g94QTuNN13BQS7LYyZsETcYYtvcZSZjf7GCfXuXjRsoVaUXdfEqy0IIDOh3CGzKvWlriMx4fAOoMjqdgWLK5fsfgcJ9x5TaNyP%2B%2BgA5xKTIeY%2FUlRcZhGbyZH%2FZPQIG67SZw7YqVodj%2Be4q%2FSGW0WKIAXBT%2BL4Jcyzw4GgNM1%2B6UFAXmk2IKuc%2Be%2BxKdI9R09NnaIaVAPz%2B2YTlW7klBnJCbpjvanYmbRBYthjx12z9XSsjUURPKFhdWtKH9Xp6N8Z43wHvf6pN2rlMkAbFeRem7TX7QdnLRzzKNINDs1PPKTlnFJ6MNaeqL0GOqUB1j404uD014wQfy%2FIX%2Bgy9TMPtI%2FlAje8I92JGlYsCJYdZSe6myQ5TE2ouIYv5SMuUtpW4385NN3kvisBOd0ZXkR0OcezqXMx4Jj7Pybg8FZRAHG6q0UE5o1ZUNsXe2JpnWI3wjoSBoMXaLJ%2FuvOfgAJX80eGv1iBRj0wZoLYDG%2FGNa%2BrzRRB5nkvCJqX7%2BXwpIhTzfk0xlfina7mmVZoDIjdc600&X-Amz-Signature=f10a186fd411f8a5841a09c8dfa81a17b690fe60f171976183b90799bb97657a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGYUVRD%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTqikJeKNn4HrAkceJaj5Le9aoG7R6I0M4qEKYaXRCLAIgbSP1k3waTLhOOP4fsRHoUOyE4TJf01Ey0XBe9f2orlYqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInxCDIibc0tGj6VdCrcA865lYQBS8l%2FIWEK%2BHUpns6x3GGSI7jMwOIJ78OS1mRckLlB1gJ%2BSHzeM91lX8tGksYv2tS%2BFa3EWSmUZH7IMtwZyaqM%2B6j9NnruW6u2aFGcsh1wCJRQoKgnDFbV5pd6qIed2NHU6Ov%2FoqMRYERAmcHFkJXXgewwTKBJDXAE48%2Bn0B%2Bfts5X25hjS43JXiQW%2Bu3V%2FRdUS%2FlNTuXAd5dmvXE2b1ySqDKtjHHWte46%2FVzQnGJNNSpKWgZ4GM6k7RPSw%2FyoeiKDLDy80AGHaHAqk6T0zGU5A98f8RaljbyXnUSUsywB%2B1wejCUD4pYA%2BAq8R7LroQB%2FO9g94QTuNN13BQS7LYyZsETcYYtvcZSZjf7GCfXuXjRsoVaUXdfEqy0IIDOh3CGzKvWlriMx4fAOoMjqdgWLK5fsfgcJ9x5TaNyP%2B%2BgA5xKTIeY%2FUlRcZhGbyZH%2FZPQIG67SZw7YqVodj%2Be4q%2FSGW0WKIAXBT%2BL4Jcyzw4GgNM1%2B6UFAXmk2IKuc%2Be%2BxKdI9R09NnaIaVAPz%2B2YTlW7klBnJCbpjvanYmbRBYthjx12z9XSsjUURPKFhdWtKH9Xp6N8Z43wHvf6pN2rlMkAbFeRem7TX7QdnLRzzKNINDs1PPKTlnFJ6MNaeqL0GOqUB1j404uD014wQfy%2FIX%2Bgy9TMPtI%2FlAje8I92JGlYsCJYdZSe6myQ5TE2ouIYv5SMuUtpW4385NN3kvisBOd0ZXkR0OcezqXMx4Jj7Pybg8FZRAHG6q0UE5o1ZUNsXe2JpnWI3wjoSBoMXaLJ%2FuvOfgAJX80eGv1iBRj0wZoLYDG%2FGNa%2BrzRRB5nkvCJqX7%2BXwpIhTzfk0xlfina7mmVZoDIjdc600&X-Amz-Signature=46217d164be1d60690547b71f52c4578db53f69dcd7fb2503bbd0eb60fcd796c&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
