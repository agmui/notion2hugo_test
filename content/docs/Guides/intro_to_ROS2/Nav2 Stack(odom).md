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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWIKNKN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQClHTyrTAc%2BZFLS9LfAuPyPStMiYVaXVvO5ejwN4EpRBAIgb5Eu5C45bxPkWQmo4BqkoOxCELI9PppMhQKi8hY3Y0wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F4dGt7p%2B%2BDtl%2B9YSrcA9pmLHM3p140NUaelb%2BiWFDWmFKhMSvrYXQFL0u3f7W4kEU4q%2BwWFYOj%2BPNCjGJVM2I70%2BfWMAlaH1eqTdfswP7FvFy51FMONegY1hoN09ptE2MVncEXUZq6mzZJ9OLZUfavzlNah16j%2BB5pswtuG0UxSsnsGIZi2Q%2FmR3EOFe4qGnXF%2FcijUY3de%2B39yJB0TwRl5UbIxPvZFpsyNNUkCZ0tbcuFA83%2Fqu7E7jpCXv4sEPIO4GPm9XqjSGNsfskiDMi55y4qHyR%2BY%2FmJCLl2Y8syPuMwV3riMueZ11zcxCYaw2q5GrP0c3W1zx9TQnKIWfOZs9EYmgGVhZqGknSfAjFx%2B6BbSJLnqjU575B5hulAdHyh7YTUc2t3fJ4VvKy%2FeXPV7WzyUgYNv2oq6DBnY%2Bd%2BtThmakzi5zn84UpXIuqwtHXNifS1%2FJWvhhFec%2FE4p%2BUR7z3dECy%2B76eSFGILb6D7xIawopOILSKBOVJLAiePHZbVvyA2vWU7wmzYiu6T2B1fioL%2BeChVTw84nJlH6OJVEOO4o9IhSUmXBiym%2BsdeqXrGzlU1G5zgmzEbBq3obIR1%2FlV6vEklKU0ksXIIXnXguejA0W0epn1kTN053sSvfeJEz5lIfZJomtd%2FMPKA8sEGOqUB9il5MORW5f0948a1ne4dQmJzqWUk8TOGXV4VHROX7tUMRWXTyi4BI3KA32Sj23pvGFSu23wkvm6OtTRkEalzMBqgwmvZkrimmIRiXftmGd9t2ChmBmqRnI0R5kODvR8%2FgQi9fLTjhPZPrmQhiSZzR82j66inBqxG85tmbBwtcxOalOx13quKcmdoKt7J9MLlRWUcFzUqxqhz4HERd8kHXnrLLcvJ&X-Amz-Signature=66d9f01df602e0b4e8b66dc12d0e6703e7393772f2eca1ddc042be73ee40b9a4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWIKNKN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQClHTyrTAc%2BZFLS9LfAuPyPStMiYVaXVvO5ejwN4EpRBAIgb5Eu5C45bxPkWQmo4BqkoOxCELI9PppMhQKi8hY3Y0wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F4dGt7p%2B%2BDtl%2B9YSrcA9pmLHM3p140NUaelb%2BiWFDWmFKhMSvrYXQFL0u3f7W4kEU4q%2BwWFYOj%2BPNCjGJVM2I70%2BfWMAlaH1eqTdfswP7FvFy51FMONegY1hoN09ptE2MVncEXUZq6mzZJ9OLZUfavzlNah16j%2BB5pswtuG0UxSsnsGIZi2Q%2FmR3EOFe4qGnXF%2FcijUY3de%2B39yJB0TwRl5UbIxPvZFpsyNNUkCZ0tbcuFA83%2Fqu7E7jpCXv4sEPIO4GPm9XqjSGNsfskiDMi55y4qHyR%2BY%2FmJCLl2Y8syPuMwV3riMueZ11zcxCYaw2q5GrP0c3W1zx9TQnKIWfOZs9EYmgGVhZqGknSfAjFx%2B6BbSJLnqjU575B5hulAdHyh7YTUc2t3fJ4VvKy%2FeXPV7WzyUgYNv2oq6DBnY%2Bd%2BtThmakzi5zn84UpXIuqwtHXNifS1%2FJWvhhFec%2FE4p%2BUR7z3dECy%2B76eSFGILb6D7xIawopOILSKBOVJLAiePHZbVvyA2vWU7wmzYiu6T2B1fioL%2BeChVTw84nJlH6OJVEOO4o9IhSUmXBiym%2BsdeqXrGzlU1G5zgmzEbBq3obIR1%2FlV6vEklKU0ksXIIXnXguejA0W0epn1kTN053sSvfeJEz5lIfZJomtd%2FMPKA8sEGOqUB9il5MORW5f0948a1ne4dQmJzqWUk8TOGXV4VHROX7tUMRWXTyi4BI3KA32Sj23pvGFSu23wkvm6OtTRkEalzMBqgwmvZkrimmIRiXftmGd9t2ChmBmqRnI0R5kODvR8%2FgQi9fLTjhPZPrmQhiSZzR82j66inBqxG85tmbBwtcxOalOx13quKcmdoKt7J9MLlRWUcFzUqxqhz4HERd8kHXnrLLcvJ&X-Amz-Signature=2274230b11ba5350fe6466a4b599d9c125c1003de3ad7ac7082a64a3f7062d00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWIKNKN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQClHTyrTAc%2BZFLS9LfAuPyPStMiYVaXVvO5ejwN4EpRBAIgb5Eu5C45bxPkWQmo4BqkoOxCELI9PppMhQKi8hY3Y0wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F4dGt7p%2B%2BDtl%2B9YSrcA9pmLHM3p140NUaelb%2BiWFDWmFKhMSvrYXQFL0u3f7W4kEU4q%2BwWFYOj%2BPNCjGJVM2I70%2BfWMAlaH1eqTdfswP7FvFy51FMONegY1hoN09ptE2MVncEXUZq6mzZJ9OLZUfavzlNah16j%2BB5pswtuG0UxSsnsGIZi2Q%2FmR3EOFe4qGnXF%2FcijUY3de%2B39yJB0TwRl5UbIxPvZFpsyNNUkCZ0tbcuFA83%2Fqu7E7jpCXv4sEPIO4GPm9XqjSGNsfskiDMi55y4qHyR%2BY%2FmJCLl2Y8syPuMwV3riMueZ11zcxCYaw2q5GrP0c3W1zx9TQnKIWfOZs9EYmgGVhZqGknSfAjFx%2B6BbSJLnqjU575B5hulAdHyh7YTUc2t3fJ4VvKy%2FeXPV7WzyUgYNv2oq6DBnY%2Bd%2BtThmakzi5zn84UpXIuqwtHXNifS1%2FJWvhhFec%2FE4p%2BUR7z3dECy%2B76eSFGILb6D7xIawopOILSKBOVJLAiePHZbVvyA2vWU7wmzYiu6T2B1fioL%2BeChVTw84nJlH6OJVEOO4o9IhSUmXBiym%2BsdeqXrGzlU1G5zgmzEbBq3obIR1%2FlV6vEklKU0ksXIIXnXguejA0W0epn1kTN053sSvfeJEz5lIfZJomtd%2FMPKA8sEGOqUB9il5MORW5f0948a1ne4dQmJzqWUk8TOGXV4VHROX7tUMRWXTyi4BI3KA32Sj23pvGFSu23wkvm6OtTRkEalzMBqgwmvZkrimmIRiXftmGd9t2ChmBmqRnI0R5kODvR8%2FgQi9fLTjhPZPrmQhiSZzR82j66inBqxG85tmbBwtcxOalOx13quKcmdoKt7J9MLlRWUcFzUqxqhz4HERd8kHXnrLLcvJ&X-Amz-Signature=72ca94c0bc626fcea5326b53692b4fc8ab27a14c32a7671baada09530d58bb91&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWIKNKN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQClHTyrTAc%2BZFLS9LfAuPyPStMiYVaXVvO5ejwN4EpRBAIgb5Eu5C45bxPkWQmo4BqkoOxCELI9PppMhQKi8hY3Y0wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F4dGt7p%2B%2BDtl%2B9YSrcA9pmLHM3p140NUaelb%2BiWFDWmFKhMSvrYXQFL0u3f7W4kEU4q%2BwWFYOj%2BPNCjGJVM2I70%2BfWMAlaH1eqTdfswP7FvFy51FMONegY1hoN09ptE2MVncEXUZq6mzZJ9OLZUfavzlNah16j%2BB5pswtuG0UxSsnsGIZi2Q%2FmR3EOFe4qGnXF%2FcijUY3de%2B39yJB0TwRl5UbIxPvZFpsyNNUkCZ0tbcuFA83%2Fqu7E7jpCXv4sEPIO4GPm9XqjSGNsfskiDMi55y4qHyR%2BY%2FmJCLl2Y8syPuMwV3riMueZ11zcxCYaw2q5GrP0c3W1zx9TQnKIWfOZs9EYmgGVhZqGknSfAjFx%2B6BbSJLnqjU575B5hulAdHyh7YTUc2t3fJ4VvKy%2FeXPV7WzyUgYNv2oq6DBnY%2Bd%2BtThmakzi5zn84UpXIuqwtHXNifS1%2FJWvhhFec%2FE4p%2BUR7z3dECy%2B76eSFGILb6D7xIawopOILSKBOVJLAiePHZbVvyA2vWU7wmzYiu6T2B1fioL%2BeChVTw84nJlH6OJVEOO4o9IhSUmXBiym%2BsdeqXrGzlU1G5zgmzEbBq3obIR1%2FlV6vEklKU0ksXIIXnXguejA0W0epn1kTN053sSvfeJEz5lIfZJomtd%2FMPKA8sEGOqUB9il5MORW5f0948a1ne4dQmJzqWUk8TOGXV4VHROX7tUMRWXTyi4BI3KA32Sj23pvGFSu23wkvm6OtTRkEalzMBqgwmvZkrimmIRiXftmGd9t2ChmBmqRnI0R5kODvR8%2FgQi9fLTjhPZPrmQhiSZzR82j66inBqxG85tmbBwtcxOalOx13quKcmdoKt7J9MLlRWUcFzUqxqhz4HERd8kHXnrLLcvJ&X-Amz-Signature=267d683678d5344a066007b886ecfc94dae40c606361950e8c178b7f0c8c8a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IWIKNKN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQClHTyrTAc%2BZFLS9LfAuPyPStMiYVaXVvO5ejwN4EpRBAIgb5Eu5C45bxPkWQmo4BqkoOxCELI9PppMhQKi8hY3Y0wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2F4dGt7p%2B%2BDtl%2B9YSrcA9pmLHM3p140NUaelb%2BiWFDWmFKhMSvrYXQFL0u3f7W4kEU4q%2BwWFYOj%2BPNCjGJVM2I70%2BfWMAlaH1eqTdfswP7FvFy51FMONegY1hoN09ptE2MVncEXUZq6mzZJ9OLZUfavzlNah16j%2BB5pswtuG0UxSsnsGIZi2Q%2FmR3EOFe4qGnXF%2FcijUY3de%2B39yJB0TwRl5UbIxPvZFpsyNNUkCZ0tbcuFA83%2Fqu7E7jpCXv4sEPIO4GPm9XqjSGNsfskiDMi55y4qHyR%2BY%2FmJCLl2Y8syPuMwV3riMueZ11zcxCYaw2q5GrP0c3W1zx9TQnKIWfOZs9EYmgGVhZqGknSfAjFx%2B6BbSJLnqjU575B5hulAdHyh7YTUc2t3fJ4VvKy%2FeXPV7WzyUgYNv2oq6DBnY%2Bd%2BtThmakzi5zn84UpXIuqwtHXNifS1%2FJWvhhFec%2FE4p%2BUR7z3dECy%2B76eSFGILb6D7xIawopOILSKBOVJLAiePHZbVvyA2vWU7wmzYiu6T2B1fioL%2BeChVTw84nJlH6OJVEOO4o9IhSUmXBiym%2BsdeqXrGzlU1G5zgmzEbBq3obIR1%2FlV6vEklKU0ksXIIXnXguejA0W0epn1kTN053sSvfeJEz5lIfZJomtd%2FMPKA8sEGOqUB9il5MORW5f0948a1ne4dQmJzqWUk8TOGXV4VHROX7tUMRWXTyi4BI3KA32Sj23pvGFSu23wkvm6OtTRkEalzMBqgwmvZkrimmIRiXftmGd9t2ChmBmqRnI0R5kODvR8%2FgQi9fLTjhPZPrmQhiSZzR82j66inBqxG85tmbBwtcxOalOx13quKcmdoKt7J9MLlRWUcFzUqxqhz4HERd8kHXnrLLcvJ&X-Amz-Signature=cf2d2d42ba30960e029d162dae6c40a0a9b4ad76a3c87f665a1c3756dcd81545&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
