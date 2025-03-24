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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2GTV5P%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUCDdeSzBc3GoONAR%2BdnH1cV9OHwhl8q0AA9oWdj0O5AiEA%2BZ5KNZ9M0pGOBkckMvKaLCGXZGJPbBt%2FFuP7MBi8XRMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO4b8Y9R0dRLvRkWCrcAyvYbZPeoMzeZttVBNDh5Vx2eiY1IqEY23lyi7qNmYD508keNw5L9kxF%2BXxq9wjmgiwcCgoqrD61jdiVnJy82meHZ3OSC24ID5FLz0aJku99kFxmi6JYon%2FM4UC5Lb5pDJquiFut6FtCm%2FkUFiIlIsgYr7My%2FIoTmuMNeEWL9YvhGjj%2FPycZ25EKkhjNPkNf8MiL%2BzNH29YXiM%2BnIFHLoirQNG0I0MWPCBQ4k%2BdOCFH6uPdWrM511EUOkde1yNHTI1VstoxClEivU07iYQnu4CeBa7g1jUHRaNpe9w863O5E%2FO2WmKiwBjr0FIc6hGLTnEjI48fIjCen06oFXMx4XhmPKRXn26XKr0zRv452V9obQ3vNAH1VKnTFBmnwcRtHGgRHSELSlGC60Tpz03MNuhN8S9K%2Bs1XnQ4x3nQGKFHk%2Bg03CYBXYICk7tD5LhsJsoZQ4SuLhYR5WYUWbKNPUKOjGQ%2FcZk%2F6buTJ9MGa25MG7dqP39WDD5w38EQqR%2F5CUWxZezMATtgk6z8GgRPpRaWql7p0Z%2Fq2NQpNG3rBAPJl%2FJnWsTfR7b4LDIdcOjEBh1HfP6n9VGDvp%2Br%2BYiB9OOzR20y8PwvQDS8dh%2BdUGtKyFLkuWNR%2FGMNrfxdxLMM79hb8GOqUB4cDGxx2knYriAjh8EBmPrrOoIzRRerlutx%2BpNmlrEMk0kRUOZA%2BX7K3EpoL%2BPghAkW1kbc%2B%2BV5%2Bh8W7bWY73li85hiVVAcqubwXsdGb8Dpbejrzi3kGMnKDuFd9Xo0679HxEmiwt7SFIElFu09XaYPIlaXjsOdVEeGZPLSYhumBgo1gchpxiuy3JdjqtwyII4GRGRg2%2FIw5hmPmczcbiDQ3Pomrm&X-Amz-Signature=9d142ac3f68fd7ea4e98f03d294f99cffaee2e8dca51e359173410f596166112&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2GTV5P%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUCDdeSzBc3GoONAR%2BdnH1cV9OHwhl8q0AA9oWdj0O5AiEA%2BZ5KNZ9M0pGOBkckMvKaLCGXZGJPbBt%2FFuP7MBi8XRMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO4b8Y9R0dRLvRkWCrcAyvYbZPeoMzeZttVBNDh5Vx2eiY1IqEY23lyi7qNmYD508keNw5L9kxF%2BXxq9wjmgiwcCgoqrD61jdiVnJy82meHZ3OSC24ID5FLz0aJku99kFxmi6JYon%2FM4UC5Lb5pDJquiFut6FtCm%2FkUFiIlIsgYr7My%2FIoTmuMNeEWL9YvhGjj%2FPycZ25EKkhjNPkNf8MiL%2BzNH29YXiM%2BnIFHLoirQNG0I0MWPCBQ4k%2BdOCFH6uPdWrM511EUOkde1yNHTI1VstoxClEivU07iYQnu4CeBa7g1jUHRaNpe9w863O5E%2FO2WmKiwBjr0FIc6hGLTnEjI48fIjCen06oFXMx4XhmPKRXn26XKr0zRv452V9obQ3vNAH1VKnTFBmnwcRtHGgRHSELSlGC60Tpz03MNuhN8S9K%2Bs1XnQ4x3nQGKFHk%2Bg03CYBXYICk7tD5LhsJsoZQ4SuLhYR5WYUWbKNPUKOjGQ%2FcZk%2F6buTJ9MGa25MG7dqP39WDD5w38EQqR%2F5CUWxZezMATtgk6z8GgRPpRaWql7p0Z%2Fq2NQpNG3rBAPJl%2FJnWsTfR7b4LDIdcOjEBh1HfP6n9VGDvp%2Br%2BYiB9OOzR20y8PwvQDS8dh%2BdUGtKyFLkuWNR%2FGMNrfxdxLMM79hb8GOqUB4cDGxx2knYriAjh8EBmPrrOoIzRRerlutx%2BpNmlrEMk0kRUOZA%2BX7K3EpoL%2BPghAkW1kbc%2B%2BV5%2Bh8W7bWY73li85hiVVAcqubwXsdGb8Dpbejrzi3kGMnKDuFd9Xo0679HxEmiwt7SFIElFu09XaYPIlaXjsOdVEeGZPLSYhumBgo1gchpxiuy3JdjqtwyII4GRGRg2%2FIw5hmPmczcbiDQ3Pomrm&X-Amz-Signature=5d0902b7699034c838c1d64cf7b7b343be5acea0d9c915d3162002ca42037973&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2GTV5P%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUCDdeSzBc3GoONAR%2BdnH1cV9OHwhl8q0AA9oWdj0O5AiEA%2BZ5KNZ9M0pGOBkckMvKaLCGXZGJPbBt%2FFuP7MBi8XRMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO4b8Y9R0dRLvRkWCrcAyvYbZPeoMzeZttVBNDh5Vx2eiY1IqEY23lyi7qNmYD508keNw5L9kxF%2BXxq9wjmgiwcCgoqrD61jdiVnJy82meHZ3OSC24ID5FLz0aJku99kFxmi6JYon%2FM4UC5Lb5pDJquiFut6FtCm%2FkUFiIlIsgYr7My%2FIoTmuMNeEWL9YvhGjj%2FPycZ25EKkhjNPkNf8MiL%2BzNH29YXiM%2BnIFHLoirQNG0I0MWPCBQ4k%2BdOCFH6uPdWrM511EUOkde1yNHTI1VstoxClEivU07iYQnu4CeBa7g1jUHRaNpe9w863O5E%2FO2WmKiwBjr0FIc6hGLTnEjI48fIjCen06oFXMx4XhmPKRXn26XKr0zRv452V9obQ3vNAH1VKnTFBmnwcRtHGgRHSELSlGC60Tpz03MNuhN8S9K%2Bs1XnQ4x3nQGKFHk%2Bg03CYBXYICk7tD5LhsJsoZQ4SuLhYR5WYUWbKNPUKOjGQ%2FcZk%2F6buTJ9MGa25MG7dqP39WDD5w38EQqR%2F5CUWxZezMATtgk6z8GgRPpRaWql7p0Z%2Fq2NQpNG3rBAPJl%2FJnWsTfR7b4LDIdcOjEBh1HfP6n9VGDvp%2Br%2BYiB9OOzR20y8PwvQDS8dh%2BdUGtKyFLkuWNR%2FGMNrfxdxLMM79hb8GOqUB4cDGxx2knYriAjh8EBmPrrOoIzRRerlutx%2BpNmlrEMk0kRUOZA%2BX7K3EpoL%2BPghAkW1kbc%2B%2BV5%2Bh8W7bWY73li85hiVVAcqubwXsdGb8Dpbejrzi3kGMnKDuFd9Xo0679HxEmiwt7SFIElFu09XaYPIlaXjsOdVEeGZPLSYhumBgo1gchpxiuy3JdjqtwyII4GRGRg2%2FIw5hmPmczcbiDQ3Pomrm&X-Amz-Signature=8aa5d19227d238fc721d0d5518fd398a6430d3d7f271701f662d31ad9abd54c9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2GTV5P%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUCDdeSzBc3GoONAR%2BdnH1cV9OHwhl8q0AA9oWdj0O5AiEA%2BZ5KNZ9M0pGOBkckMvKaLCGXZGJPbBt%2FFuP7MBi8XRMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO4b8Y9R0dRLvRkWCrcAyvYbZPeoMzeZttVBNDh5Vx2eiY1IqEY23lyi7qNmYD508keNw5L9kxF%2BXxq9wjmgiwcCgoqrD61jdiVnJy82meHZ3OSC24ID5FLz0aJku99kFxmi6JYon%2FM4UC5Lb5pDJquiFut6FtCm%2FkUFiIlIsgYr7My%2FIoTmuMNeEWL9YvhGjj%2FPycZ25EKkhjNPkNf8MiL%2BzNH29YXiM%2BnIFHLoirQNG0I0MWPCBQ4k%2BdOCFH6uPdWrM511EUOkde1yNHTI1VstoxClEivU07iYQnu4CeBa7g1jUHRaNpe9w863O5E%2FO2WmKiwBjr0FIc6hGLTnEjI48fIjCen06oFXMx4XhmPKRXn26XKr0zRv452V9obQ3vNAH1VKnTFBmnwcRtHGgRHSELSlGC60Tpz03MNuhN8S9K%2Bs1XnQ4x3nQGKFHk%2Bg03CYBXYICk7tD5LhsJsoZQ4SuLhYR5WYUWbKNPUKOjGQ%2FcZk%2F6buTJ9MGa25MG7dqP39WDD5w38EQqR%2F5CUWxZezMATtgk6z8GgRPpRaWql7p0Z%2Fq2NQpNG3rBAPJl%2FJnWsTfR7b4LDIdcOjEBh1HfP6n9VGDvp%2Br%2BYiB9OOzR20y8PwvQDS8dh%2BdUGtKyFLkuWNR%2FGMNrfxdxLMM79hb8GOqUB4cDGxx2knYriAjh8EBmPrrOoIzRRerlutx%2BpNmlrEMk0kRUOZA%2BX7K3EpoL%2BPghAkW1kbc%2B%2BV5%2Bh8W7bWY73li85hiVVAcqubwXsdGb8Dpbejrzi3kGMnKDuFd9Xo0679HxEmiwt7SFIElFu09XaYPIlaXjsOdVEeGZPLSYhumBgo1gchpxiuy3JdjqtwyII4GRGRg2%2FIw5hmPmczcbiDQ3Pomrm&X-Amz-Signature=ab08d8f818a0c303b9ffc338d052f2e9ae4cd0d5b7720fa5e6fd97c0d40acef4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Y2GTV5P%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUCDdeSzBc3GoONAR%2BdnH1cV9OHwhl8q0AA9oWdj0O5AiEA%2BZ5KNZ9M0pGOBkckMvKaLCGXZGJPbBt%2FFuP7MBi8XRMqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHO4b8Y9R0dRLvRkWCrcAyvYbZPeoMzeZttVBNDh5Vx2eiY1IqEY23lyi7qNmYD508keNw5L9kxF%2BXxq9wjmgiwcCgoqrD61jdiVnJy82meHZ3OSC24ID5FLz0aJku99kFxmi6JYon%2FM4UC5Lb5pDJquiFut6FtCm%2FkUFiIlIsgYr7My%2FIoTmuMNeEWL9YvhGjj%2FPycZ25EKkhjNPkNf8MiL%2BzNH29YXiM%2BnIFHLoirQNG0I0MWPCBQ4k%2BdOCFH6uPdWrM511EUOkde1yNHTI1VstoxClEivU07iYQnu4CeBa7g1jUHRaNpe9w863O5E%2FO2WmKiwBjr0FIc6hGLTnEjI48fIjCen06oFXMx4XhmPKRXn26XKr0zRv452V9obQ3vNAH1VKnTFBmnwcRtHGgRHSELSlGC60Tpz03MNuhN8S9K%2Bs1XnQ4x3nQGKFHk%2Bg03CYBXYICk7tD5LhsJsoZQ4SuLhYR5WYUWbKNPUKOjGQ%2FcZk%2F6buTJ9MGa25MG7dqP39WDD5w38EQqR%2F5CUWxZezMATtgk6z8GgRPpRaWql7p0Z%2Fq2NQpNG3rBAPJl%2FJnWsTfR7b4LDIdcOjEBh1HfP6n9VGDvp%2Br%2BYiB9OOzR20y8PwvQDS8dh%2BdUGtKyFLkuWNR%2FGMNrfxdxLMM79hb8GOqUB4cDGxx2knYriAjh8EBmPrrOoIzRRerlutx%2BpNmlrEMk0kRUOZA%2BX7K3EpoL%2BPghAkW1kbc%2B%2BV5%2Bh8W7bWY73li85hiVVAcqubwXsdGb8Dpbejrzi3kGMnKDuFd9Xo0679HxEmiwt7SFIElFu09XaYPIlaXjsOdVEeGZPLSYhumBgo1gchpxiuy3JdjqtwyII4GRGRg2%2FIw5hmPmczcbiDQ3Pomrm&X-Amz-Signature=cfacb96dad9154581db3bfcf1976d9de9c6bd3ee891c17c33652bce292f29010&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
