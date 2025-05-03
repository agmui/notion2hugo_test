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

[my_controllers.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/da95d5e0-f008-4e3a-a1cd-0c740c8ff277/my_controllers.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJS3GCWS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCt%2FeUe6klfBojxA9i1kQZdYpkACgLxbefzMFQrubUh%2BAIgIUVdgNGOIJT5GgMOqpqkkTsv0NA%2Fu7QtbkOYfifjKQoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDC%2BecXTygb4p%2B43ircA1l0dZ%2F2pJmLmDikiUVO4fBrIZuvOmbDRdvo0%2BoGPWvxMk7EBbD77xumtnUwP99wc97DoK8bPpfuRHFfc2dEcr0PFAYLqpnEOtoaMpFBUm6UGJmRhgMDkcFJ9iwKVJr5e%2FpNU0guB9iAiMadGiY1E6El36ya2pVBCBPR0VOErsX%2B2mDCfoSIBM42c2pQpg8QjWTFqEsfZuwzXHRvIzvIm4MDAoQIFBUxC1PVbCnIHBsQwTEMfOZvNQQCWK22cr2yF%2Fs%2Fibg8fYm24xQBaI7oNoLTuzzT2qCtlsTKdDUU7xVBDprKr011U3Asn%2B3K9liKMfNDN6IgjwWpXCFWB1%2BqAmvhwKI5f8304qJpMQHrbVCr8R%2BvtjxGzgDT3elD4MfanOF8nz5jX4pSpj2PSALT67hXWlhtIvJz7lf%2FySSjx%2B7tFFLZi435pECQEZfml3V5b5xpoAVLdQQfCdaGrOJSwEbVCIMq2WUt55SM9GET92AcgS8IBke0FrH1AmfVtUSFyqeDLvAR6NkRKzNvLM6vUIJg2KrXEyhu02angPGQjIMpcVMZbsXiPaW%2BjlSLUQ5T3HFAs6I%2BA4%2B5O6qZ8Up2qQun9IR2xUB1%2FpaGv5o98niKkDrXg8uLrYhzv0XhMPOq2cAGOqUBhKLYC6lVP9CsWuqgEZv2eIAz1y3mbTsLC1i6wDwOmyLlaHP30EGBH2e%2B0dgBJqeeFi%2FsoZBxTat4Q9Vr%2Bfn%2BvEmW6tI87mgxwnfEkl4MF9sayKHL6wecRAYIbz0adpWBbeflp5%2B33WnZJv0thkD32yHR%2BXdrC216Q2MIyedX5ovhlKy6eucgs%2FUJgKwzAR5FDybM9oCqzm24DEJUgFiae1RnPAgT&X-Amz-Signature=7b69f6226150d2f8ac270d9361114fe5ee651e946dbacbcb423132da36f7540f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d485e912-a5f4-482e-92e8-9708c840dd30/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJS3GCWS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCt%2FeUe6klfBojxA9i1kQZdYpkACgLxbefzMFQrubUh%2BAIgIUVdgNGOIJT5GgMOqpqkkTsv0NA%2Fu7QtbkOYfifjKQoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDC%2BecXTygb4p%2B43ircA1l0dZ%2F2pJmLmDikiUVO4fBrIZuvOmbDRdvo0%2BoGPWvxMk7EBbD77xumtnUwP99wc97DoK8bPpfuRHFfc2dEcr0PFAYLqpnEOtoaMpFBUm6UGJmRhgMDkcFJ9iwKVJr5e%2FpNU0guB9iAiMadGiY1E6El36ya2pVBCBPR0VOErsX%2B2mDCfoSIBM42c2pQpg8QjWTFqEsfZuwzXHRvIzvIm4MDAoQIFBUxC1PVbCnIHBsQwTEMfOZvNQQCWK22cr2yF%2Fs%2Fibg8fYm24xQBaI7oNoLTuzzT2qCtlsTKdDUU7xVBDprKr011U3Asn%2B3K9liKMfNDN6IgjwWpXCFWB1%2BqAmvhwKI5f8304qJpMQHrbVCr8R%2BvtjxGzgDT3elD4MfanOF8nz5jX4pSpj2PSALT67hXWlhtIvJz7lf%2FySSjx%2B7tFFLZi435pECQEZfml3V5b5xpoAVLdQQfCdaGrOJSwEbVCIMq2WUt55SM9GET92AcgS8IBke0FrH1AmfVtUSFyqeDLvAR6NkRKzNvLM6vUIJg2KrXEyhu02angPGQjIMpcVMZbsXiPaW%2BjlSLUQ5T3HFAs6I%2BA4%2B5O6qZ8Up2qQun9IR2xUB1%2FpaGv5o98niKkDrXg8uLrYhzv0XhMPOq2cAGOqUBhKLYC6lVP9CsWuqgEZv2eIAz1y3mbTsLC1i6wDwOmyLlaHP30EGBH2e%2B0dgBJqeeFi%2FsoZBxTat4Q9Vr%2Bfn%2BvEmW6tI87mgxwnfEkl4MF9sayKHL6wecRAYIbz0adpWBbeflp5%2B33WnZJv0thkD32yHR%2BXdrC216Q2MIyedX5ovhlKy6eucgs%2FUJgKwzAR5FDybM9oCqzm24DEJUgFiae1RnPAgT&X-Amz-Signature=956e72c2236891ba8168d3dfa73d636deb8e46323e6faf9322173f7526208ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

[pi_pico_diff_pkg.zip](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dba3c655-6db9-45f0-8b39-79ba373101c4/pi_pico_diff_pkg.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJS3GCWS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCt%2FeUe6klfBojxA9i1kQZdYpkACgLxbefzMFQrubUh%2BAIgIUVdgNGOIJT5GgMOqpqkkTsv0NA%2Fu7QtbkOYfifjKQoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDC%2BecXTygb4p%2B43ircA1l0dZ%2F2pJmLmDikiUVO4fBrIZuvOmbDRdvo0%2BoGPWvxMk7EBbD77xumtnUwP99wc97DoK8bPpfuRHFfc2dEcr0PFAYLqpnEOtoaMpFBUm6UGJmRhgMDkcFJ9iwKVJr5e%2FpNU0guB9iAiMadGiY1E6El36ya2pVBCBPR0VOErsX%2B2mDCfoSIBM42c2pQpg8QjWTFqEsfZuwzXHRvIzvIm4MDAoQIFBUxC1PVbCnIHBsQwTEMfOZvNQQCWK22cr2yF%2Fs%2Fibg8fYm24xQBaI7oNoLTuzzT2qCtlsTKdDUU7xVBDprKr011U3Asn%2B3K9liKMfNDN6IgjwWpXCFWB1%2BqAmvhwKI5f8304qJpMQHrbVCr8R%2BvtjxGzgDT3elD4MfanOF8nz5jX4pSpj2PSALT67hXWlhtIvJz7lf%2FySSjx%2B7tFFLZi435pECQEZfml3V5b5xpoAVLdQQfCdaGrOJSwEbVCIMq2WUt55SM9GET92AcgS8IBke0FrH1AmfVtUSFyqeDLvAR6NkRKzNvLM6vUIJg2KrXEyhu02angPGQjIMpcVMZbsXiPaW%2BjlSLUQ5T3HFAs6I%2BA4%2B5O6qZ8Up2qQun9IR2xUB1%2FpaGv5o98niKkDrXg8uLrYhzv0XhMPOq2cAGOqUBhKLYC6lVP9CsWuqgEZv2eIAz1y3mbTsLC1i6wDwOmyLlaHP30EGBH2e%2B0dgBJqeeFi%2FsoZBxTat4Q9Vr%2Bfn%2BvEmW6tI87mgxwnfEkl4MF9sayKHL6wecRAYIbz0adpWBbeflp5%2B33WnZJv0thkD32yHR%2BXdrC216Q2MIyedX5ovhlKy6eucgs%2FUJgKwzAR5FDybM9oCqzm24DEJUgFiae1RnPAgT&X-Amz-Signature=857041636e28f944bf4c2a5201f667bdd3f7dace881415ab6990adc00bfae842&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/acb6a1eb-87f5-4c84-bd8c-52a5ef6d85e1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJS3GCWS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCt%2FeUe6klfBojxA9i1kQZdYpkACgLxbefzMFQrubUh%2BAIgIUVdgNGOIJT5GgMOqpqkkTsv0NA%2Fu7QtbkOYfifjKQoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDC%2BecXTygb4p%2B43ircA1l0dZ%2F2pJmLmDikiUVO4fBrIZuvOmbDRdvo0%2BoGPWvxMk7EBbD77xumtnUwP99wc97DoK8bPpfuRHFfc2dEcr0PFAYLqpnEOtoaMpFBUm6UGJmRhgMDkcFJ9iwKVJr5e%2FpNU0guB9iAiMadGiY1E6El36ya2pVBCBPR0VOErsX%2B2mDCfoSIBM42c2pQpg8QjWTFqEsfZuwzXHRvIzvIm4MDAoQIFBUxC1PVbCnIHBsQwTEMfOZvNQQCWK22cr2yF%2Fs%2Fibg8fYm24xQBaI7oNoLTuzzT2qCtlsTKdDUU7xVBDprKr011U3Asn%2B3K9liKMfNDN6IgjwWpXCFWB1%2BqAmvhwKI5f8304qJpMQHrbVCr8R%2BvtjxGzgDT3elD4MfanOF8nz5jX4pSpj2PSALT67hXWlhtIvJz7lf%2FySSjx%2B7tFFLZi435pECQEZfml3V5b5xpoAVLdQQfCdaGrOJSwEbVCIMq2WUt55SM9GET92AcgS8IBke0FrH1AmfVtUSFyqeDLvAR6NkRKzNvLM6vUIJg2KrXEyhu02angPGQjIMpcVMZbsXiPaW%2BjlSLUQ5T3HFAs6I%2BA4%2B5O6qZ8Up2qQun9IR2xUB1%2FpaGv5o98niKkDrXg8uLrYhzv0XhMPOq2cAGOqUBhKLYC6lVP9CsWuqgEZv2eIAz1y3mbTsLC1i6wDwOmyLlaHP30EGBH2e%2B0dgBJqeeFi%2FsoZBxTat4Q9Vr%2Bfn%2BvEmW6tI87mgxwnfEkl4MF9sayKHL6wecRAYIbz0adpWBbeflp5%2B33WnZJv0thkD32yHR%2BXdrC216Q2MIyedX5ovhlKy6eucgs%2FUJgKwzAR5FDybM9oCqzm24DEJUgFiae1RnPAgT&X-Amz-Signature=093d2f31017c88497ae745b6e907b631f5d606527a83baa3a179c413bda3b5c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ff7c6a9e-0cea-4dbf-bc3e-00dfebfaaf7a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJS3GCWS%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCt%2FeUe6klfBojxA9i1kQZdYpkACgLxbefzMFQrubUh%2BAIgIUVdgNGOIJT5GgMOqpqkkTsv0NA%2Fu7QtbkOYfifjKQoqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDC%2BecXTygb4p%2B43ircA1l0dZ%2F2pJmLmDikiUVO4fBrIZuvOmbDRdvo0%2BoGPWvxMk7EBbD77xumtnUwP99wc97DoK8bPpfuRHFfc2dEcr0PFAYLqpnEOtoaMpFBUm6UGJmRhgMDkcFJ9iwKVJr5e%2FpNU0guB9iAiMadGiY1E6El36ya2pVBCBPR0VOErsX%2B2mDCfoSIBM42c2pQpg8QjWTFqEsfZuwzXHRvIzvIm4MDAoQIFBUxC1PVbCnIHBsQwTEMfOZvNQQCWK22cr2yF%2Fs%2Fibg8fYm24xQBaI7oNoLTuzzT2qCtlsTKdDUU7xVBDprKr011U3Asn%2B3K9liKMfNDN6IgjwWpXCFWB1%2BqAmvhwKI5f8304qJpMQHrbVCr8R%2BvtjxGzgDT3elD4MfanOF8nz5jX4pSpj2PSALT67hXWlhtIvJz7lf%2FySSjx%2B7tFFLZi435pECQEZfml3V5b5xpoAVLdQQfCdaGrOJSwEbVCIMq2WUt55SM9GET92AcgS8IBke0FrH1AmfVtUSFyqeDLvAR6NkRKzNvLM6vUIJg2KrXEyhu02angPGQjIMpcVMZbsXiPaW%2BjlSLUQ5T3HFAs6I%2BA4%2B5O6qZ8Up2qQun9IR2xUB1%2FpaGv5o98niKkDrXg8uLrYhzv0XhMPOq2cAGOqUBhKLYC6lVP9CsWuqgEZv2eIAz1y3mbTsLC1i6wDwOmyLlaHP30EGBH2e%2B0dgBJqeeFi%2FsoZBxTat4Q9Vr%2Bfn%2BvEmW6tI87mgxwnfEkl4MF9sayKHL6wecRAYIbz0adpWBbeflp5%2B33WnZJv0thkD32yHR%2BXdrC216Q2MIyedX5ovhlKy6eucgs%2FUJgKwzAR5FDybM9oCqzm24DEJUgFiae1RnPAgT&X-Amz-Signature=4844185f4709be6d943ac25c52257f699083f8e985216a2eb57b5bb961b5feb2&X-Amz-SignedHeaders=host&x-id=GetObject)

to debug run:

```bash
ros2 launch sllidar_ros2 view_sllidar_a1_launch.py
```
