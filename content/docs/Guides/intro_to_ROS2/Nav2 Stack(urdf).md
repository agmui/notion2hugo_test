---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGM7VA3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCc2Z66UKuF0p5FdTo2xcb5pb4T%2FX8XMjrKkqweGTt6sgIhAIGeiWld17lVuY1P8jI5dz%2FZwPqskd6vGbaXaHdDKtwVKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6f%2F1sJOPBRatTlFkq3AOnhma3pgh7Zo3ftW9ccEv0k%2FK2tyYtPvhmVay3Dh%2BBl1JtVSSU2ABJPtz5lmzetEWTO6jGdRrzYpcmYIsfmgV%2FIrg61z50p%2F3pper3VBnqtUE2MfY7KyRAIAWkxwXbqAp5XPbUMwiXi6E1QXxyzZA%2F6XEca0k0QshB4K8cViu9tP1908OWnBHPI5BlhdeV640Uk0A%2FU2ne%2Fkf3J%2Fc%2FALtd%2FO20VzLG%2FtIL0NAo23Rb6bz7oRb3R5hnFVMEZvO9puJ9n5HglhEsfVvyv99e15Zegpk0qPLWabntbMCJPvRnsKE6E2zwmMSHG90QaQxswyTWAzGpnDVwLLWbvMpWml8ePynOeKp9kMJ2XJAUTggZeHOoIRjp2I2KBg5Zig%2B81dzOIsZLHOZSzocs5fGGYiPanc5yh2FL3zNCSXnUvsjKV%2F9S6WUlrDWoNV2ncZM1JosDeQQ4E7Gqy5B2scjSCZBPvPIXNgM8fauBFPsZcq6wfhIy%2BVa%2FIeGZmaDM7iuJNat4CuXIHQCddRJAtwg4sHHJt%2F7kKA8P9QE7%2FqgGl%2Brp8Ugg%2BfBSYLtKB1rUu6S8uk5p%2Ff%2F%2B3yowYVA1wkZMu2%2FhZJNcg7SCel8cyb2W1dhYEiyzmGUmxKHcCVy%2FtTCPsYa%2BBjqkAWd3AASp88YfmLP4ZZx7wpIZ5RhtBwnU%2FoipjW094HxrdfEo6sccQuNSTiNuTYXjFf%2B3%2Fgsw0m9TjGA6bQzz90MHGH%2Bb%2Bh9EPgH9AfgUbWpQA14sbL%2FVuprtSqbTSfLqfz4bc7bZJcwd2hBRPlYgNVef1TFYKfK9Y0QOS5Sp8vY7F9fun%2FQIg%2BOvKPSsoWbA08%2FkA0WUYeCQRzaA%2F%2FuhiEGAtYx3&X-Amz-Signature=3820828cf14a3c71685a0c57bb36b54191246b420ffea2c25fc2c72f73faa7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGM7VA3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCc2Z66UKuF0p5FdTo2xcb5pb4T%2FX8XMjrKkqweGTt6sgIhAIGeiWld17lVuY1P8jI5dz%2FZwPqskd6vGbaXaHdDKtwVKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6f%2F1sJOPBRatTlFkq3AOnhma3pgh7Zo3ftW9ccEv0k%2FK2tyYtPvhmVay3Dh%2BBl1JtVSSU2ABJPtz5lmzetEWTO6jGdRrzYpcmYIsfmgV%2FIrg61z50p%2F3pper3VBnqtUE2MfY7KyRAIAWkxwXbqAp5XPbUMwiXi6E1QXxyzZA%2F6XEca0k0QshB4K8cViu9tP1908OWnBHPI5BlhdeV640Uk0A%2FU2ne%2Fkf3J%2Fc%2FALtd%2FO20VzLG%2FtIL0NAo23Rb6bz7oRb3R5hnFVMEZvO9puJ9n5HglhEsfVvyv99e15Zegpk0qPLWabntbMCJPvRnsKE6E2zwmMSHG90QaQxswyTWAzGpnDVwLLWbvMpWml8ePynOeKp9kMJ2XJAUTggZeHOoIRjp2I2KBg5Zig%2B81dzOIsZLHOZSzocs5fGGYiPanc5yh2FL3zNCSXnUvsjKV%2F9S6WUlrDWoNV2ncZM1JosDeQQ4E7Gqy5B2scjSCZBPvPIXNgM8fauBFPsZcq6wfhIy%2BVa%2FIeGZmaDM7iuJNat4CuXIHQCddRJAtwg4sHHJt%2F7kKA8P9QE7%2FqgGl%2Brp8Ugg%2BfBSYLtKB1rUu6S8uk5p%2Ff%2F%2B3yowYVA1wkZMu2%2FhZJNcg7SCel8cyb2W1dhYEiyzmGUmxKHcCVy%2FtTCPsYa%2BBjqkAWd3AASp88YfmLP4ZZx7wpIZ5RhtBwnU%2FoipjW094HxrdfEo6sccQuNSTiNuTYXjFf%2B3%2Fgsw0m9TjGA6bQzz90MHGH%2Bb%2Bh9EPgH9AfgUbWpQA14sbL%2FVuprtSqbTSfLqfz4bc7bZJcwd2hBRPlYgNVef1TFYKfK9Y0QOS5Sp8vY7F9fun%2FQIg%2BOvKPSsoWbA08%2FkA0WUYeCQRzaA%2F%2FuhiEGAtYx3&X-Amz-Signature=9e318d3f6b026b59ba95c37f53013d8d17c8183042b1a40c0d7e330df05c0a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGM7VA3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCc2Z66UKuF0p5FdTo2xcb5pb4T%2FX8XMjrKkqweGTt6sgIhAIGeiWld17lVuY1P8jI5dz%2FZwPqskd6vGbaXaHdDKtwVKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6f%2F1sJOPBRatTlFkq3AOnhma3pgh7Zo3ftW9ccEv0k%2FK2tyYtPvhmVay3Dh%2BBl1JtVSSU2ABJPtz5lmzetEWTO6jGdRrzYpcmYIsfmgV%2FIrg61z50p%2F3pper3VBnqtUE2MfY7KyRAIAWkxwXbqAp5XPbUMwiXi6E1QXxyzZA%2F6XEca0k0QshB4K8cViu9tP1908OWnBHPI5BlhdeV640Uk0A%2FU2ne%2Fkf3J%2Fc%2FALtd%2FO20VzLG%2FtIL0NAo23Rb6bz7oRb3R5hnFVMEZvO9puJ9n5HglhEsfVvyv99e15Zegpk0qPLWabntbMCJPvRnsKE6E2zwmMSHG90QaQxswyTWAzGpnDVwLLWbvMpWml8ePynOeKp9kMJ2XJAUTggZeHOoIRjp2I2KBg5Zig%2B81dzOIsZLHOZSzocs5fGGYiPanc5yh2FL3zNCSXnUvsjKV%2F9S6WUlrDWoNV2ncZM1JosDeQQ4E7Gqy5B2scjSCZBPvPIXNgM8fauBFPsZcq6wfhIy%2BVa%2FIeGZmaDM7iuJNat4CuXIHQCddRJAtwg4sHHJt%2F7kKA8P9QE7%2FqgGl%2Brp8Ugg%2BfBSYLtKB1rUu6S8uk5p%2Ff%2F%2B3yowYVA1wkZMu2%2FhZJNcg7SCel8cyb2W1dhYEiyzmGUmxKHcCVy%2FtTCPsYa%2BBjqkAWd3AASp88YfmLP4ZZx7wpIZ5RhtBwnU%2FoipjW094HxrdfEo6sccQuNSTiNuTYXjFf%2B3%2Fgsw0m9TjGA6bQzz90MHGH%2Bb%2Bh9EPgH9AfgUbWpQA14sbL%2FVuprtSqbTSfLqfz4bc7bZJcwd2hBRPlYgNVef1TFYKfK9Y0QOS5Sp8vY7F9fun%2FQIg%2BOvKPSsoWbA08%2FkA0WUYeCQRzaA%2F%2FuhiEGAtYx3&X-Amz-Signature=ce979b7c10216bbd8a7b3fbb02ece0d5c42800344c3616172119a4ee319b0a70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGM7VA3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCc2Z66UKuF0p5FdTo2xcb5pb4T%2FX8XMjrKkqweGTt6sgIhAIGeiWld17lVuY1P8jI5dz%2FZwPqskd6vGbaXaHdDKtwVKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6f%2F1sJOPBRatTlFkq3AOnhma3pgh7Zo3ftW9ccEv0k%2FK2tyYtPvhmVay3Dh%2BBl1JtVSSU2ABJPtz5lmzetEWTO6jGdRrzYpcmYIsfmgV%2FIrg61z50p%2F3pper3VBnqtUE2MfY7KyRAIAWkxwXbqAp5XPbUMwiXi6E1QXxyzZA%2F6XEca0k0QshB4K8cViu9tP1908OWnBHPI5BlhdeV640Uk0A%2FU2ne%2Fkf3J%2Fc%2FALtd%2FO20VzLG%2FtIL0NAo23Rb6bz7oRb3R5hnFVMEZvO9puJ9n5HglhEsfVvyv99e15Zegpk0qPLWabntbMCJPvRnsKE6E2zwmMSHG90QaQxswyTWAzGpnDVwLLWbvMpWml8ePynOeKp9kMJ2XJAUTggZeHOoIRjp2I2KBg5Zig%2B81dzOIsZLHOZSzocs5fGGYiPanc5yh2FL3zNCSXnUvsjKV%2F9S6WUlrDWoNV2ncZM1JosDeQQ4E7Gqy5B2scjSCZBPvPIXNgM8fauBFPsZcq6wfhIy%2BVa%2FIeGZmaDM7iuJNat4CuXIHQCddRJAtwg4sHHJt%2F7kKA8P9QE7%2FqgGl%2Brp8Ugg%2BfBSYLtKB1rUu6S8uk5p%2Ff%2F%2B3yowYVA1wkZMu2%2FhZJNcg7SCel8cyb2W1dhYEiyzmGUmxKHcCVy%2FtTCPsYa%2BBjqkAWd3AASp88YfmLP4ZZx7wpIZ5RhtBwnU%2FoipjW094HxrdfEo6sccQuNSTiNuTYXjFf%2B3%2Fgsw0m9TjGA6bQzz90MHGH%2Bb%2Bh9EPgH9AfgUbWpQA14sbL%2FVuprtSqbTSfLqfz4bc7bZJcwd2hBRPlYgNVef1TFYKfK9Y0QOS5Sp8vY7F9fun%2FQIg%2BOvKPSsoWbA08%2FkA0WUYeCQRzaA%2F%2FuhiEGAtYx3&X-Amz-Signature=6da86a18858eebb7698cd91d61ccc5f322cbe27f8c064349129ecbe31368beb1&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
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

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

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
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGM7VA3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCc2Z66UKuF0p5FdTo2xcb5pb4T%2FX8XMjrKkqweGTt6sgIhAIGeiWld17lVuY1P8jI5dz%2FZwPqskd6vGbaXaHdDKtwVKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6f%2F1sJOPBRatTlFkq3AOnhma3pgh7Zo3ftW9ccEv0k%2FK2tyYtPvhmVay3Dh%2BBl1JtVSSU2ABJPtz5lmzetEWTO6jGdRrzYpcmYIsfmgV%2FIrg61z50p%2F3pper3VBnqtUE2MfY7KyRAIAWkxwXbqAp5XPbUMwiXi6E1QXxyzZA%2F6XEca0k0QshB4K8cViu9tP1908OWnBHPI5BlhdeV640Uk0A%2FU2ne%2Fkf3J%2Fc%2FALtd%2FO20VzLG%2FtIL0NAo23Rb6bz7oRb3R5hnFVMEZvO9puJ9n5HglhEsfVvyv99e15Zegpk0qPLWabntbMCJPvRnsKE6E2zwmMSHG90QaQxswyTWAzGpnDVwLLWbvMpWml8ePynOeKp9kMJ2XJAUTggZeHOoIRjp2I2KBg5Zig%2B81dzOIsZLHOZSzocs5fGGYiPanc5yh2FL3zNCSXnUvsjKV%2F9S6WUlrDWoNV2ncZM1JosDeQQ4E7Gqy5B2scjSCZBPvPIXNgM8fauBFPsZcq6wfhIy%2BVa%2FIeGZmaDM7iuJNat4CuXIHQCddRJAtwg4sHHJt%2F7kKA8P9QE7%2FqgGl%2Brp8Ugg%2BfBSYLtKB1rUu6S8uk5p%2Ff%2F%2B3yowYVA1wkZMu2%2FhZJNcg7SCel8cyb2W1dhYEiyzmGUmxKHcCVy%2FtTCPsYa%2BBjqkAWd3AASp88YfmLP4ZZx7wpIZ5RhtBwnU%2FoipjW094HxrdfEo6sccQuNSTiNuTYXjFf%2B3%2Fgsw0m9TjGA6bQzz90MHGH%2Bb%2Bh9EPgH9AfgUbWpQA14sbL%2FVuprtSqbTSfLqfz4bc7bZJcwd2hBRPlYgNVef1TFYKfK9Y0QOS5Sp8vY7F9fun%2FQIg%2BOvKPSsoWbA08%2FkA0WUYeCQRzaA%2F%2FuhiEGAtYx3&X-Amz-Signature=073d445af2c553774d626c4c11d5c5617ae36100f68a3f53d1002e755fd4ea21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JGM7VA3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCc2Z66UKuF0p5FdTo2xcb5pb4T%2FX8XMjrKkqweGTt6sgIhAIGeiWld17lVuY1P8jI5dz%2FZwPqskd6vGbaXaHdDKtwVKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6f%2F1sJOPBRatTlFkq3AOnhma3pgh7Zo3ftW9ccEv0k%2FK2tyYtPvhmVay3Dh%2BBl1JtVSSU2ABJPtz5lmzetEWTO6jGdRrzYpcmYIsfmgV%2FIrg61z50p%2F3pper3VBnqtUE2MfY7KyRAIAWkxwXbqAp5XPbUMwiXi6E1QXxyzZA%2F6XEca0k0QshB4K8cViu9tP1908OWnBHPI5BlhdeV640Uk0A%2FU2ne%2Fkf3J%2Fc%2FALtd%2FO20VzLG%2FtIL0NAo23Rb6bz7oRb3R5hnFVMEZvO9puJ9n5HglhEsfVvyv99e15Zegpk0qPLWabntbMCJPvRnsKE6E2zwmMSHG90QaQxswyTWAzGpnDVwLLWbvMpWml8ePynOeKp9kMJ2XJAUTggZeHOoIRjp2I2KBg5Zig%2B81dzOIsZLHOZSzocs5fGGYiPanc5yh2FL3zNCSXnUvsjKV%2F9S6WUlrDWoNV2ncZM1JosDeQQ4E7Gqy5B2scjSCZBPvPIXNgM8fauBFPsZcq6wfhIy%2BVa%2FIeGZmaDM7iuJNat4CuXIHQCddRJAtwg4sHHJt%2F7kKA8P9QE7%2FqgGl%2Brp8Ugg%2BfBSYLtKB1rUu6S8uk5p%2Ff%2F%2B3yowYVA1wkZMu2%2FhZJNcg7SCel8cyb2W1dhYEiyzmGUmxKHcCVy%2FtTCPsYa%2BBjqkAWd3AASp88YfmLP4ZZx7wpIZ5RhtBwnU%2FoipjW094HxrdfEo6sccQuNSTiNuTYXjFf%2B3%2Fgsw0m9TjGA6bQzz90MHGH%2Bb%2Bh9EPgH9AfgUbWpQA14sbL%2FVuprtSqbTSfLqfz4bc7bZJcwd2hBRPlYgNVef1TFYKfK9Y0QOS5Sp8vY7F9fun%2FQIg%2BOvKPSsoWbA08%2FkA0WUYeCQRzaA%2F%2FuhiEGAtYx3&X-Amz-Signature=14faf85503f788cd19b90782067a2ffa41a4fb6c5929d9341f4be53269f2dcfc&X-Amz-SignedHeaders=host&x-id=GetObject)
