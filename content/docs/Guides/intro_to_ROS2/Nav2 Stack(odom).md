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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MM3YQL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0FUx%2FioKXJW067aZao%2B7Up7eIpU4pwKd3xgtWul%2FuwIgFJm6h0JowdjuCVC%2F1pLHjo6Wri7PLPtA0CdBDOXlsRkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSwt%2FihbpHhXmc8FSrcA4f2YxTN6Gary49RmxaOUx7EPc8%2BgpiVAKzEfbdenB1h4TNs5sPsDlrL15%2F5miEO%2BmQlCdWP6%2FtaT23S0V5TaFiHSh6ylc0kKYkuK6Y5oHbIn8OV2HjOQkI0IKIHaNV%2FGS6T2kb9VJ2vTCEPGzN5kxNWjUHlyeab1VF8XquabHNnYcas8FFDNfdHDJKg%2BoWDLBMf2mymSjZ6J7Zr2He%2B7ltcjh0FEpGNcKPBaNCmZhDjjztbZAFGNIJbUNvDTf9IMB95Rw6cmge4f%2FZZVCqBKY4y%2FRbT8p2auYMD9yfGRzJ1bCmKnbATI1ygbZye279cfR28G0oA8kU7LftpgmG4I4Oyx9JTvsqiibK6J63%2BVRcezK6kJ5uBItC4Gsf7wf4ts16uTrybk2lQrb1%2FHiRkD%2BsoxXHyPfj%2BmqVO72rvIKxnek7tmQ%2BJD5JCPlN6r2MhFoIkbDTW3Ovrg4%2FQa%2FavSmwHsIKB2gM954biZLaFNviVbHTfdw770b%2BlEUVSu7vyUrU9GRSUoXlYsCo4fKXygHZe8dnx57YaMhNuN1P9XJs3kdkBnvWAJqSxEq7oNow3x9D0BW1wfchtRJ2Hb2UxI3E7L2YTys1kOJ5i7iyfmT3Y9QRKWW3pfwTJaK7EMMGP%2FMAGOqUBLG5Gvi72JNk62Ivaj8oOxzxNYrDnNK9HIwtUiqenjcv1%2F%2BWQ1eqv1zLWCaTagZ9%2BBkL3pYliq9BlLV8g6PsGLDinHX%2B06ZKEFPg6TdyZFSgoD%2F%2FSnMWJj92LEX3%2BZ5idVRM8TJMaOcAWgNmDITkqZLGxE07tOdfh7k7U9imt3PruWXP7O6JcgMU9MlYqkR1no1MLB0U%2FBSLDFiG8eCOAkVuOh7Su&X-Amz-Signature=2b455bb58ebb6dd1779e6c423f0604a8f43da4a7896bc46d45ed54056d8575f1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MM3YQL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0FUx%2FioKXJW067aZao%2B7Up7eIpU4pwKd3xgtWul%2FuwIgFJm6h0JowdjuCVC%2F1pLHjo6Wri7PLPtA0CdBDOXlsRkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSwt%2FihbpHhXmc8FSrcA4f2YxTN6Gary49RmxaOUx7EPc8%2BgpiVAKzEfbdenB1h4TNs5sPsDlrL15%2F5miEO%2BmQlCdWP6%2FtaT23S0V5TaFiHSh6ylc0kKYkuK6Y5oHbIn8OV2HjOQkI0IKIHaNV%2FGS6T2kb9VJ2vTCEPGzN5kxNWjUHlyeab1VF8XquabHNnYcas8FFDNfdHDJKg%2BoWDLBMf2mymSjZ6J7Zr2He%2B7ltcjh0FEpGNcKPBaNCmZhDjjztbZAFGNIJbUNvDTf9IMB95Rw6cmge4f%2FZZVCqBKY4y%2FRbT8p2auYMD9yfGRzJ1bCmKnbATI1ygbZye279cfR28G0oA8kU7LftpgmG4I4Oyx9JTvsqiibK6J63%2BVRcezK6kJ5uBItC4Gsf7wf4ts16uTrybk2lQrb1%2FHiRkD%2BsoxXHyPfj%2BmqVO72rvIKxnek7tmQ%2BJD5JCPlN6r2MhFoIkbDTW3Ovrg4%2FQa%2FavSmwHsIKB2gM954biZLaFNviVbHTfdw770b%2BlEUVSu7vyUrU9GRSUoXlYsCo4fKXygHZe8dnx57YaMhNuN1P9XJs3kdkBnvWAJqSxEq7oNow3x9D0BW1wfchtRJ2Hb2UxI3E7L2YTys1kOJ5i7iyfmT3Y9QRKWW3pfwTJaK7EMMGP%2FMAGOqUBLG5Gvi72JNk62Ivaj8oOxzxNYrDnNK9HIwtUiqenjcv1%2F%2BWQ1eqv1zLWCaTagZ9%2BBkL3pYliq9BlLV8g6PsGLDinHX%2B06ZKEFPg6TdyZFSgoD%2F%2FSnMWJj92LEX3%2BZ5idVRM8TJMaOcAWgNmDITkqZLGxE07tOdfh7k7U9imt3PruWXP7O6JcgMU9MlYqkR1no1MLB0U%2FBSLDFiG8eCOAkVuOh7Su&X-Amz-Signature=3aba64d98acd7038a4dc01bed6d61e1949f55c3d6a8f6025b65cc2b8cc6c3ac6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MM3YQL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0FUx%2FioKXJW067aZao%2B7Up7eIpU4pwKd3xgtWul%2FuwIgFJm6h0JowdjuCVC%2F1pLHjo6Wri7PLPtA0CdBDOXlsRkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSwt%2FihbpHhXmc8FSrcA4f2YxTN6Gary49RmxaOUx7EPc8%2BgpiVAKzEfbdenB1h4TNs5sPsDlrL15%2F5miEO%2BmQlCdWP6%2FtaT23S0V5TaFiHSh6ylc0kKYkuK6Y5oHbIn8OV2HjOQkI0IKIHaNV%2FGS6T2kb9VJ2vTCEPGzN5kxNWjUHlyeab1VF8XquabHNnYcas8FFDNfdHDJKg%2BoWDLBMf2mymSjZ6J7Zr2He%2B7ltcjh0FEpGNcKPBaNCmZhDjjztbZAFGNIJbUNvDTf9IMB95Rw6cmge4f%2FZZVCqBKY4y%2FRbT8p2auYMD9yfGRzJ1bCmKnbATI1ygbZye279cfR28G0oA8kU7LftpgmG4I4Oyx9JTvsqiibK6J63%2BVRcezK6kJ5uBItC4Gsf7wf4ts16uTrybk2lQrb1%2FHiRkD%2BsoxXHyPfj%2BmqVO72rvIKxnek7tmQ%2BJD5JCPlN6r2MhFoIkbDTW3Ovrg4%2FQa%2FavSmwHsIKB2gM954biZLaFNviVbHTfdw770b%2BlEUVSu7vyUrU9GRSUoXlYsCo4fKXygHZe8dnx57YaMhNuN1P9XJs3kdkBnvWAJqSxEq7oNow3x9D0BW1wfchtRJ2Hb2UxI3E7L2YTys1kOJ5i7iyfmT3Y9QRKWW3pfwTJaK7EMMGP%2FMAGOqUBLG5Gvi72JNk62Ivaj8oOxzxNYrDnNK9HIwtUiqenjcv1%2F%2BWQ1eqv1zLWCaTagZ9%2BBkL3pYliq9BlLV8g6PsGLDinHX%2B06ZKEFPg6TdyZFSgoD%2F%2FSnMWJj92LEX3%2BZ5idVRM8TJMaOcAWgNmDITkqZLGxE07tOdfh7k7U9imt3PruWXP7O6JcgMU9MlYqkR1no1MLB0U%2FBSLDFiG8eCOAkVuOh7Su&X-Amz-Signature=0af56774492007fc8549c2c74bcca1501ccb11795d1e26835c5d085898d8eaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MM3YQL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0FUx%2FioKXJW067aZao%2B7Up7eIpU4pwKd3xgtWul%2FuwIgFJm6h0JowdjuCVC%2F1pLHjo6Wri7PLPtA0CdBDOXlsRkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSwt%2FihbpHhXmc8FSrcA4f2YxTN6Gary49RmxaOUx7EPc8%2BgpiVAKzEfbdenB1h4TNs5sPsDlrL15%2F5miEO%2BmQlCdWP6%2FtaT23S0V5TaFiHSh6ylc0kKYkuK6Y5oHbIn8OV2HjOQkI0IKIHaNV%2FGS6T2kb9VJ2vTCEPGzN5kxNWjUHlyeab1VF8XquabHNnYcas8FFDNfdHDJKg%2BoWDLBMf2mymSjZ6J7Zr2He%2B7ltcjh0FEpGNcKPBaNCmZhDjjztbZAFGNIJbUNvDTf9IMB95Rw6cmge4f%2FZZVCqBKY4y%2FRbT8p2auYMD9yfGRzJ1bCmKnbATI1ygbZye279cfR28G0oA8kU7LftpgmG4I4Oyx9JTvsqiibK6J63%2BVRcezK6kJ5uBItC4Gsf7wf4ts16uTrybk2lQrb1%2FHiRkD%2BsoxXHyPfj%2BmqVO72rvIKxnek7tmQ%2BJD5JCPlN6r2MhFoIkbDTW3Ovrg4%2FQa%2FavSmwHsIKB2gM954biZLaFNviVbHTfdw770b%2BlEUVSu7vyUrU9GRSUoXlYsCo4fKXygHZe8dnx57YaMhNuN1P9XJs3kdkBnvWAJqSxEq7oNow3x9D0BW1wfchtRJ2Hb2UxI3E7L2YTys1kOJ5i7iyfmT3Y9QRKWW3pfwTJaK7EMMGP%2FMAGOqUBLG5Gvi72JNk62Ivaj8oOxzxNYrDnNK9HIwtUiqenjcv1%2F%2BWQ1eqv1zLWCaTagZ9%2BBkL3pYliq9BlLV8g6PsGLDinHX%2B06ZKEFPg6TdyZFSgoD%2F%2FSnMWJj92LEX3%2BZ5idVRM8TJMaOcAWgNmDITkqZLGxE07tOdfh7k7U9imt3PruWXP7O6JcgMU9MlYqkR1no1MLB0U%2FBSLDFiG8eCOAkVuOh7Su&X-Amz-Signature=99602899e98c83ea329023b0f43c0bef58bfc511e011422237c74ab31036b858&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7MM3YQL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm0FUx%2FioKXJW067aZao%2B7Up7eIpU4pwKd3xgtWul%2FuwIgFJm6h0JowdjuCVC%2F1pLHjo6Wri7PLPtA0CdBDOXlsRkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSwt%2FihbpHhXmc8FSrcA4f2YxTN6Gary49RmxaOUx7EPc8%2BgpiVAKzEfbdenB1h4TNs5sPsDlrL15%2F5miEO%2BmQlCdWP6%2FtaT23S0V5TaFiHSh6ylc0kKYkuK6Y5oHbIn8OV2HjOQkI0IKIHaNV%2FGS6T2kb9VJ2vTCEPGzN5kxNWjUHlyeab1VF8XquabHNnYcas8FFDNfdHDJKg%2BoWDLBMf2mymSjZ6J7Zr2He%2B7ltcjh0FEpGNcKPBaNCmZhDjjztbZAFGNIJbUNvDTf9IMB95Rw6cmge4f%2FZZVCqBKY4y%2FRbT8p2auYMD9yfGRzJ1bCmKnbATI1ygbZye279cfR28G0oA8kU7LftpgmG4I4Oyx9JTvsqiibK6J63%2BVRcezK6kJ5uBItC4Gsf7wf4ts16uTrybk2lQrb1%2FHiRkD%2BsoxXHyPfj%2BmqVO72rvIKxnek7tmQ%2BJD5JCPlN6r2MhFoIkbDTW3Ovrg4%2FQa%2FavSmwHsIKB2gM954biZLaFNviVbHTfdw770b%2BlEUVSu7vyUrU9GRSUoXlYsCo4fKXygHZe8dnx57YaMhNuN1P9XJs3kdkBnvWAJqSxEq7oNow3x9D0BW1wfchtRJ2Hb2UxI3E7L2YTys1kOJ5i7iyfmT3Y9QRKWW3pfwTJaK7EMMGP%2FMAGOqUBLG5Gvi72JNk62Ivaj8oOxzxNYrDnNK9HIwtUiqenjcv1%2F%2BWQ1eqv1zLWCaTagZ9%2BBkL3pYliq9BlLV8g6PsGLDinHX%2B06ZKEFPg6TdyZFSgoD%2F%2FSnMWJj92LEX3%2BZ5idVRM8TJMaOcAWgNmDITkqZLGxE07tOdfh7k7U9imt3PruWXP7O6JcgMU9MlYqkR1no1MLB0U%2FBSLDFiG8eCOAkVuOh7Su&X-Amz-Signature=5f556446235b41f6acc5ff0318d8ae44478eeda8ce84c36125b646f659b526e1&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
