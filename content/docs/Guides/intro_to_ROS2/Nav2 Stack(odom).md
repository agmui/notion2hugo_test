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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HLRBV2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWznxBJN4pdi1FF4dm7y7xNGZlNU%2B%2FnQjEN8fXAM%2FD5AiEAgOAB4gym2CacYwyjz1LZYCnPL3QosrCFp%2BDXUtcQ6XYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0vLYHkvZvGhYSICircAwUtFYrXTY25GXsQkBstukz4hK37gzYIG%2FQCd5qrKfad%2Bi1MxVMgTxkJ8i681xMOgnjDRMyXA6aQLU%2FYltk8mOX9Qtv3VVyeklMSSM6wChXgut5NadgiiqBzCVBxqbzlYgdArQme3kkkCUBk6KcdO3Fs66nIhQniHqYYeX%2FCrld0ae7PnkU4qnCRjAhdbYHKkDnHuz%2B1m2Rd%2FUI51p2BBtThpk9Z50YEVkEjbtWsyjoZxwxzfsZOo1jWaxDW9a0Ppy392naDgz1hblP87ZC9t2e6iTD2nGg6t4SanHzpsGqoszg8tSpGEFWMW7c%2BIGNMXC8KFCI3mmM7yx7kGwI%2Bj3xzy3Ka8YJg7uxPMNlVXReIriStu52Ss38pkvOXFq6mQSOdquDwtbmgKHOUhM%2BG1B08EuKFrXL7jyiKNF3GmddzpgTFtoCfeG3jjloHl8Spsczu%2FnZ261n6IXoJlPbAA97h4OUKoWIbc6S5YHvXvY4gN90qZsYjAGjVthTIidCTCOHOmXmnDiiQPJLJ7JVIW%2Be37udf7hJRxCfRjCc02RKKUrodC%2BgLKDKpeBZYOZam9tzpFGQVqncYbReB4O5HYDmGoylz6quwlsDCMhohMEWtKeO%2BCtRB3yppCxTjML63rL0GOqUBjeGYo6Jzo1OmqrLCjobFYa0k7SpH0AeG1H5ofuLv054F9L7awCtAvO5jBnLuDD4eqB67G3HoufeUACuZhnotwA0Ifqj7XsiT%2BsIqY0CoIP4%2FocODc6Y9cZNl67bjhJS7NYiAEP6npOdnZPCwi%2BzEw8bJVAL%2BUHFyBzncOw8KqMdbQ8jPtuq%2Fl056NhKqO9s7YF%2B8S5CyrMsF%2Fvx9Bs0MsSJY1zUQ&X-Amz-Signature=4c34fd7f255a80ffeaf9081b6fe72e830cd373d790d0bff8a96fcc02208a9803&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HLRBV2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWznxBJN4pdi1FF4dm7y7xNGZlNU%2B%2FnQjEN8fXAM%2FD5AiEAgOAB4gym2CacYwyjz1LZYCnPL3QosrCFp%2BDXUtcQ6XYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0vLYHkvZvGhYSICircAwUtFYrXTY25GXsQkBstukz4hK37gzYIG%2FQCd5qrKfad%2Bi1MxVMgTxkJ8i681xMOgnjDRMyXA6aQLU%2FYltk8mOX9Qtv3VVyeklMSSM6wChXgut5NadgiiqBzCVBxqbzlYgdArQme3kkkCUBk6KcdO3Fs66nIhQniHqYYeX%2FCrld0ae7PnkU4qnCRjAhdbYHKkDnHuz%2B1m2Rd%2FUI51p2BBtThpk9Z50YEVkEjbtWsyjoZxwxzfsZOo1jWaxDW9a0Ppy392naDgz1hblP87ZC9t2e6iTD2nGg6t4SanHzpsGqoszg8tSpGEFWMW7c%2BIGNMXC8KFCI3mmM7yx7kGwI%2Bj3xzy3Ka8YJg7uxPMNlVXReIriStu52Ss38pkvOXFq6mQSOdquDwtbmgKHOUhM%2BG1B08EuKFrXL7jyiKNF3GmddzpgTFtoCfeG3jjloHl8Spsczu%2FnZ261n6IXoJlPbAA97h4OUKoWIbc6S5YHvXvY4gN90qZsYjAGjVthTIidCTCOHOmXmnDiiQPJLJ7JVIW%2Be37udf7hJRxCfRjCc02RKKUrodC%2BgLKDKpeBZYOZam9tzpFGQVqncYbReB4O5HYDmGoylz6quwlsDCMhohMEWtKeO%2BCtRB3yppCxTjML63rL0GOqUBjeGYo6Jzo1OmqrLCjobFYa0k7SpH0AeG1H5ofuLv054F9L7awCtAvO5jBnLuDD4eqB67G3HoufeUACuZhnotwA0Ifqj7XsiT%2BsIqY0CoIP4%2FocODc6Y9cZNl67bjhJS7NYiAEP6npOdnZPCwi%2BzEw8bJVAL%2BUHFyBzncOw8KqMdbQ8jPtuq%2Fl056NhKqO9s7YF%2B8S5CyrMsF%2Fvx9Bs0MsSJY1zUQ&X-Amz-Signature=b8a8451879e9b340e045a52c812fb5be12bdba82cd8177e81d76fe63b545277b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HLRBV2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWznxBJN4pdi1FF4dm7y7xNGZlNU%2B%2FnQjEN8fXAM%2FD5AiEAgOAB4gym2CacYwyjz1LZYCnPL3QosrCFp%2BDXUtcQ6XYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0vLYHkvZvGhYSICircAwUtFYrXTY25GXsQkBstukz4hK37gzYIG%2FQCd5qrKfad%2Bi1MxVMgTxkJ8i681xMOgnjDRMyXA6aQLU%2FYltk8mOX9Qtv3VVyeklMSSM6wChXgut5NadgiiqBzCVBxqbzlYgdArQme3kkkCUBk6KcdO3Fs66nIhQniHqYYeX%2FCrld0ae7PnkU4qnCRjAhdbYHKkDnHuz%2B1m2Rd%2FUI51p2BBtThpk9Z50YEVkEjbtWsyjoZxwxzfsZOo1jWaxDW9a0Ppy392naDgz1hblP87ZC9t2e6iTD2nGg6t4SanHzpsGqoszg8tSpGEFWMW7c%2BIGNMXC8KFCI3mmM7yx7kGwI%2Bj3xzy3Ka8YJg7uxPMNlVXReIriStu52Ss38pkvOXFq6mQSOdquDwtbmgKHOUhM%2BG1B08EuKFrXL7jyiKNF3GmddzpgTFtoCfeG3jjloHl8Spsczu%2FnZ261n6IXoJlPbAA97h4OUKoWIbc6S5YHvXvY4gN90qZsYjAGjVthTIidCTCOHOmXmnDiiQPJLJ7JVIW%2Be37udf7hJRxCfRjCc02RKKUrodC%2BgLKDKpeBZYOZam9tzpFGQVqncYbReB4O5HYDmGoylz6quwlsDCMhohMEWtKeO%2BCtRB3yppCxTjML63rL0GOqUBjeGYo6Jzo1OmqrLCjobFYa0k7SpH0AeG1H5ofuLv054F9L7awCtAvO5jBnLuDD4eqB67G3HoufeUACuZhnotwA0Ifqj7XsiT%2BsIqY0CoIP4%2FocODc6Y9cZNl67bjhJS7NYiAEP6npOdnZPCwi%2BzEw8bJVAL%2BUHFyBzncOw8KqMdbQ8jPtuq%2Fl056NhKqO9s7YF%2B8S5CyrMsF%2Fvx9Bs0MsSJY1zUQ&X-Amz-Signature=94d877df7115f9e33ab4d6fed4a6f71668d1037007aff9ebd39d28f7338226bd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HLRBV2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWznxBJN4pdi1FF4dm7y7xNGZlNU%2B%2FnQjEN8fXAM%2FD5AiEAgOAB4gym2CacYwyjz1LZYCnPL3QosrCFp%2BDXUtcQ6XYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0vLYHkvZvGhYSICircAwUtFYrXTY25GXsQkBstukz4hK37gzYIG%2FQCd5qrKfad%2Bi1MxVMgTxkJ8i681xMOgnjDRMyXA6aQLU%2FYltk8mOX9Qtv3VVyeklMSSM6wChXgut5NadgiiqBzCVBxqbzlYgdArQme3kkkCUBk6KcdO3Fs66nIhQniHqYYeX%2FCrld0ae7PnkU4qnCRjAhdbYHKkDnHuz%2B1m2Rd%2FUI51p2BBtThpk9Z50YEVkEjbtWsyjoZxwxzfsZOo1jWaxDW9a0Ppy392naDgz1hblP87ZC9t2e6iTD2nGg6t4SanHzpsGqoszg8tSpGEFWMW7c%2BIGNMXC8KFCI3mmM7yx7kGwI%2Bj3xzy3Ka8YJg7uxPMNlVXReIriStu52Ss38pkvOXFq6mQSOdquDwtbmgKHOUhM%2BG1B08EuKFrXL7jyiKNF3GmddzpgTFtoCfeG3jjloHl8Spsczu%2FnZ261n6IXoJlPbAA97h4OUKoWIbc6S5YHvXvY4gN90qZsYjAGjVthTIidCTCOHOmXmnDiiQPJLJ7JVIW%2Be37udf7hJRxCfRjCc02RKKUrodC%2BgLKDKpeBZYOZam9tzpFGQVqncYbReB4O5HYDmGoylz6quwlsDCMhohMEWtKeO%2BCtRB3yppCxTjML63rL0GOqUBjeGYo6Jzo1OmqrLCjobFYa0k7SpH0AeG1H5ofuLv054F9L7awCtAvO5jBnLuDD4eqB67G3HoufeUACuZhnotwA0Ifqj7XsiT%2BsIqY0CoIP4%2FocODc6Y9cZNl67bjhJS7NYiAEP6npOdnZPCwi%2BzEw8bJVAL%2BUHFyBzncOw8KqMdbQ8jPtuq%2Fl056NhKqO9s7YF%2B8S5CyrMsF%2Fvx9Bs0MsSJY1zUQ&X-Amz-Signature=68d8d15b321f5220dbc7c213be5d96839103107862af15af3f58a1e7eac09250&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3HLRBV2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWznxBJN4pdi1FF4dm7y7xNGZlNU%2B%2FnQjEN8fXAM%2FD5AiEAgOAB4gym2CacYwyjz1LZYCnPL3QosrCFp%2BDXUtcQ6XYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0vLYHkvZvGhYSICircAwUtFYrXTY25GXsQkBstukz4hK37gzYIG%2FQCd5qrKfad%2Bi1MxVMgTxkJ8i681xMOgnjDRMyXA6aQLU%2FYltk8mOX9Qtv3VVyeklMSSM6wChXgut5NadgiiqBzCVBxqbzlYgdArQme3kkkCUBk6KcdO3Fs66nIhQniHqYYeX%2FCrld0ae7PnkU4qnCRjAhdbYHKkDnHuz%2B1m2Rd%2FUI51p2BBtThpk9Z50YEVkEjbtWsyjoZxwxzfsZOo1jWaxDW9a0Ppy392naDgz1hblP87ZC9t2e6iTD2nGg6t4SanHzpsGqoszg8tSpGEFWMW7c%2BIGNMXC8KFCI3mmM7yx7kGwI%2Bj3xzy3Ka8YJg7uxPMNlVXReIriStu52Ss38pkvOXFq6mQSOdquDwtbmgKHOUhM%2BG1B08EuKFrXL7jyiKNF3GmddzpgTFtoCfeG3jjloHl8Spsczu%2FnZ261n6IXoJlPbAA97h4OUKoWIbc6S5YHvXvY4gN90qZsYjAGjVthTIidCTCOHOmXmnDiiQPJLJ7JVIW%2Be37udf7hJRxCfRjCc02RKKUrodC%2BgLKDKpeBZYOZam9tzpFGQVqncYbReB4O5HYDmGoylz6quwlsDCMhohMEWtKeO%2BCtRB3yppCxTjML63rL0GOqUBjeGYo6Jzo1OmqrLCjobFYa0k7SpH0AeG1H5ofuLv054F9L7awCtAvO5jBnLuDD4eqB67G3HoufeUACuZhnotwA0Ifqj7XsiT%2BsIqY0CoIP4%2FocODc6Y9cZNl67bjhJS7NYiAEP6npOdnZPCwi%2BzEw8bJVAL%2BUHFyBzncOw8KqMdbQ8jPtuq%2Fl056NhKqO9s7YF%2B8S5CyrMsF%2Fvx9Bs0MsSJY1zUQ&X-Amz-Signature=a39d363fc5eb0a4212f49393d92c903bc30da0a045263e3de56a7afe7c7b8d21&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
