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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUWVRC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Iryg7olG1FQrVdCqrj41qFq%2BjjmTVBKbCMXd%2F8UM7AiA8m%2FMcwLlAuVH%2Fu9Ms9VBGzkEfaonIzUGAbKEwozh3aiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUYxldOGPGDiAHcvfKtwDF1OfC2ZZN90RZc1pKM9zY30vAM5NcaQKR4Jt%2BuI8peyRab%2B7ZUr91O56VUm9jIhHvlQqBucesHgJPsZE7tjiN9x8SPTPytfNpg0Fs7wGdWu8Ywc2PDh8zQmkavXEkWZIaHjtlj1BmBef1hzGMLC%2FE3I5AR%2Bd%2BSxcseNmKnh0p3EfCL8T1gVckEVcyrVU5EpRtukpOcF6BexozrI0O4G9%2FQGZIkVPtsj6l3BN7YXL7vcpBxonZQwGJaL5ax7TRkv%2FKXZCL7jhLUdyjujZ86P7anfzj9lPbqskKlCVkWc4kViiOzP9PYN6hnM3EUE2m8Hg1zGXPMVvXJdNqzymh2EKRANXkrTPvDd%2F3M2X1SRsSmW9fRr%2FitwmYocmWnN1BKJRDqohV7XF%2F0YXNwHuZbuawhUsWTHl2G2G8kKpoZjONB3s0dImVeQ1QEiQAWBwca59KRppS7soxutKXul7pKIIPovifMatk8JF0RAVpyB5tOWCegkh8sFDPKCBXzKCEJmgY8cYB8lezTAJB1q5ix9eqPwhNiaUmh92Cpdo7y%2FVgo0YRXEO%2FBOQvLu96QGGCg9Vb33gl70bGdJU%2BlPcD6dT1ym3dMMF4rjyFXsvH%2F98BBHzqserwuRdUTEt0GMwsqCUvgY6pgGUSE%2FER6iwQ8FVRfsknRuu7%2BEryTBQBRgkTpAJ2Cm7F2zU89C9TCa7gGHIgxzQ5DFp0k3PUZAYhPdSQ%2BJntLDlC72FK41KohcQI5Fepzao4%2FRuSvJv8ZfDuZgIgR36vDfkwRNiY6haN9rkmx6%2B4ulN4NidtjF8I%2F0Fvu8MggjDFWpJ0g18gmx2xl67wJxN5rZkfM8tk%2BO8bueJ8Gjb6aohxg%2FogC%2B0&X-Amz-Signature=c5654d81b35f1805ca9bc5dacca2827576eb96c206fe410aa86dcb6a5dcad2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUWVRC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Iryg7olG1FQrVdCqrj41qFq%2BjjmTVBKbCMXd%2F8UM7AiA8m%2FMcwLlAuVH%2Fu9Ms9VBGzkEfaonIzUGAbKEwozh3aiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUYxldOGPGDiAHcvfKtwDF1OfC2ZZN90RZc1pKM9zY30vAM5NcaQKR4Jt%2BuI8peyRab%2B7ZUr91O56VUm9jIhHvlQqBucesHgJPsZE7tjiN9x8SPTPytfNpg0Fs7wGdWu8Ywc2PDh8zQmkavXEkWZIaHjtlj1BmBef1hzGMLC%2FE3I5AR%2Bd%2BSxcseNmKnh0p3EfCL8T1gVckEVcyrVU5EpRtukpOcF6BexozrI0O4G9%2FQGZIkVPtsj6l3BN7YXL7vcpBxonZQwGJaL5ax7TRkv%2FKXZCL7jhLUdyjujZ86P7anfzj9lPbqskKlCVkWc4kViiOzP9PYN6hnM3EUE2m8Hg1zGXPMVvXJdNqzymh2EKRANXkrTPvDd%2F3M2X1SRsSmW9fRr%2FitwmYocmWnN1BKJRDqohV7XF%2F0YXNwHuZbuawhUsWTHl2G2G8kKpoZjONB3s0dImVeQ1QEiQAWBwca59KRppS7soxutKXul7pKIIPovifMatk8JF0RAVpyB5tOWCegkh8sFDPKCBXzKCEJmgY8cYB8lezTAJB1q5ix9eqPwhNiaUmh92Cpdo7y%2FVgo0YRXEO%2FBOQvLu96QGGCg9Vb33gl70bGdJU%2BlPcD6dT1ym3dMMF4rjyFXsvH%2F98BBHzqserwuRdUTEt0GMwsqCUvgY6pgGUSE%2FER6iwQ8FVRfsknRuu7%2BEryTBQBRgkTpAJ2Cm7F2zU89C9TCa7gGHIgxzQ5DFp0k3PUZAYhPdSQ%2BJntLDlC72FK41KohcQI5Fepzao4%2FRuSvJv8ZfDuZgIgR36vDfkwRNiY6haN9rkmx6%2B4ulN4NidtjF8I%2F0Fvu8MggjDFWpJ0g18gmx2xl67wJxN5rZkfM8tk%2BO8bueJ8Gjb6aohxg%2FogC%2B0&X-Amz-Signature=be50bd68d0fbd98d525b26236e1a0f293d7839490144ff30579803812910871a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUWVRC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Iryg7olG1FQrVdCqrj41qFq%2BjjmTVBKbCMXd%2F8UM7AiA8m%2FMcwLlAuVH%2Fu9Ms9VBGzkEfaonIzUGAbKEwozh3aiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUYxldOGPGDiAHcvfKtwDF1OfC2ZZN90RZc1pKM9zY30vAM5NcaQKR4Jt%2BuI8peyRab%2B7ZUr91O56VUm9jIhHvlQqBucesHgJPsZE7tjiN9x8SPTPytfNpg0Fs7wGdWu8Ywc2PDh8zQmkavXEkWZIaHjtlj1BmBef1hzGMLC%2FE3I5AR%2Bd%2BSxcseNmKnh0p3EfCL8T1gVckEVcyrVU5EpRtukpOcF6BexozrI0O4G9%2FQGZIkVPtsj6l3BN7YXL7vcpBxonZQwGJaL5ax7TRkv%2FKXZCL7jhLUdyjujZ86P7anfzj9lPbqskKlCVkWc4kViiOzP9PYN6hnM3EUE2m8Hg1zGXPMVvXJdNqzymh2EKRANXkrTPvDd%2F3M2X1SRsSmW9fRr%2FitwmYocmWnN1BKJRDqohV7XF%2F0YXNwHuZbuawhUsWTHl2G2G8kKpoZjONB3s0dImVeQ1QEiQAWBwca59KRppS7soxutKXul7pKIIPovifMatk8JF0RAVpyB5tOWCegkh8sFDPKCBXzKCEJmgY8cYB8lezTAJB1q5ix9eqPwhNiaUmh92Cpdo7y%2FVgo0YRXEO%2FBOQvLu96QGGCg9Vb33gl70bGdJU%2BlPcD6dT1ym3dMMF4rjyFXsvH%2F98BBHzqserwuRdUTEt0GMwsqCUvgY6pgGUSE%2FER6iwQ8FVRfsknRuu7%2BEryTBQBRgkTpAJ2Cm7F2zU89C9TCa7gGHIgxzQ5DFp0k3PUZAYhPdSQ%2BJntLDlC72FK41KohcQI5Fepzao4%2FRuSvJv8ZfDuZgIgR36vDfkwRNiY6haN9rkmx6%2B4ulN4NidtjF8I%2F0Fvu8MggjDFWpJ0g18gmx2xl67wJxN5rZkfM8tk%2BO8bueJ8Gjb6aohxg%2FogC%2B0&X-Amz-Signature=6d64ca95e6c2b4828c43ba448d6760b178269e083055af144a046e5981fb782e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUWVRC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Iryg7olG1FQrVdCqrj41qFq%2BjjmTVBKbCMXd%2F8UM7AiA8m%2FMcwLlAuVH%2Fu9Ms9VBGzkEfaonIzUGAbKEwozh3aiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUYxldOGPGDiAHcvfKtwDF1OfC2ZZN90RZc1pKM9zY30vAM5NcaQKR4Jt%2BuI8peyRab%2B7ZUr91O56VUm9jIhHvlQqBucesHgJPsZE7tjiN9x8SPTPytfNpg0Fs7wGdWu8Ywc2PDh8zQmkavXEkWZIaHjtlj1BmBef1hzGMLC%2FE3I5AR%2Bd%2BSxcseNmKnh0p3EfCL8T1gVckEVcyrVU5EpRtukpOcF6BexozrI0O4G9%2FQGZIkVPtsj6l3BN7YXL7vcpBxonZQwGJaL5ax7TRkv%2FKXZCL7jhLUdyjujZ86P7anfzj9lPbqskKlCVkWc4kViiOzP9PYN6hnM3EUE2m8Hg1zGXPMVvXJdNqzymh2EKRANXkrTPvDd%2F3M2X1SRsSmW9fRr%2FitwmYocmWnN1BKJRDqohV7XF%2F0YXNwHuZbuawhUsWTHl2G2G8kKpoZjONB3s0dImVeQ1QEiQAWBwca59KRppS7soxutKXul7pKIIPovifMatk8JF0RAVpyB5tOWCegkh8sFDPKCBXzKCEJmgY8cYB8lezTAJB1q5ix9eqPwhNiaUmh92Cpdo7y%2FVgo0YRXEO%2FBOQvLu96QGGCg9Vb33gl70bGdJU%2BlPcD6dT1ym3dMMF4rjyFXsvH%2F98BBHzqserwuRdUTEt0GMwsqCUvgY6pgGUSE%2FER6iwQ8FVRfsknRuu7%2BEryTBQBRgkTpAJ2Cm7F2zU89C9TCa7gGHIgxzQ5DFp0k3PUZAYhPdSQ%2BJntLDlC72FK41KohcQI5Fepzao4%2FRuSvJv8ZfDuZgIgR36vDfkwRNiY6haN9rkmx6%2B4ulN4NidtjF8I%2F0Fvu8MggjDFWpJ0g18gmx2xl67wJxN5rZkfM8tk%2BO8bueJ8Gjb6aohxg%2FogC%2B0&X-Amz-Signature=abf9d7563d8bf5b82ced99c1d4dd8a3d0093035b2672bdc0c52525d5c03a4562&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUWVRC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Iryg7olG1FQrVdCqrj41qFq%2BjjmTVBKbCMXd%2F8UM7AiA8m%2FMcwLlAuVH%2Fu9Ms9VBGzkEfaonIzUGAbKEwozh3aiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUYxldOGPGDiAHcvfKtwDF1OfC2ZZN90RZc1pKM9zY30vAM5NcaQKR4Jt%2BuI8peyRab%2B7ZUr91O56VUm9jIhHvlQqBucesHgJPsZE7tjiN9x8SPTPytfNpg0Fs7wGdWu8Ywc2PDh8zQmkavXEkWZIaHjtlj1BmBef1hzGMLC%2FE3I5AR%2Bd%2BSxcseNmKnh0p3EfCL8T1gVckEVcyrVU5EpRtukpOcF6BexozrI0O4G9%2FQGZIkVPtsj6l3BN7YXL7vcpBxonZQwGJaL5ax7TRkv%2FKXZCL7jhLUdyjujZ86P7anfzj9lPbqskKlCVkWc4kViiOzP9PYN6hnM3EUE2m8Hg1zGXPMVvXJdNqzymh2EKRANXkrTPvDd%2F3M2X1SRsSmW9fRr%2FitwmYocmWnN1BKJRDqohV7XF%2F0YXNwHuZbuawhUsWTHl2G2G8kKpoZjONB3s0dImVeQ1QEiQAWBwca59KRppS7soxutKXul7pKIIPovifMatk8JF0RAVpyB5tOWCegkh8sFDPKCBXzKCEJmgY8cYB8lezTAJB1q5ix9eqPwhNiaUmh92Cpdo7y%2FVgo0YRXEO%2FBOQvLu96QGGCg9Vb33gl70bGdJU%2BlPcD6dT1ym3dMMF4rjyFXsvH%2F98BBHzqserwuRdUTEt0GMwsqCUvgY6pgGUSE%2FER6iwQ8FVRfsknRuu7%2BEryTBQBRgkTpAJ2Cm7F2zU89C9TCa7gGHIgxzQ5DFp0k3PUZAYhPdSQ%2BJntLDlC72FK41KohcQI5Fepzao4%2FRuSvJv8ZfDuZgIgR36vDfkwRNiY6haN9rkmx6%2B4ulN4NidtjF8I%2F0Fvu8MggjDFWpJ0g18gmx2xl67wJxN5rZkfM8tk%2BO8bueJ8Gjb6aohxg%2FogC%2B0&X-Amz-Signature=814fead6152e5c68aad2d3b9e239d68d8a359342c3382d43847eb2434af88c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674AUWVRC%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC2Iryg7olG1FQrVdCqrj41qFq%2BjjmTVBKbCMXd%2F8UM7AiA8m%2FMcwLlAuVH%2Fu9Ms9VBGzkEfaonIzUGAbKEwozh3aiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUYxldOGPGDiAHcvfKtwDF1OfC2ZZN90RZc1pKM9zY30vAM5NcaQKR4Jt%2BuI8peyRab%2B7ZUr91O56VUm9jIhHvlQqBucesHgJPsZE7tjiN9x8SPTPytfNpg0Fs7wGdWu8Ywc2PDh8zQmkavXEkWZIaHjtlj1BmBef1hzGMLC%2FE3I5AR%2Bd%2BSxcseNmKnh0p3EfCL8T1gVckEVcyrVU5EpRtukpOcF6BexozrI0O4G9%2FQGZIkVPtsj6l3BN7YXL7vcpBxonZQwGJaL5ax7TRkv%2FKXZCL7jhLUdyjujZ86P7anfzj9lPbqskKlCVkWc4kViiOzP9PYN6hnM3EUE2m8Hg1zGXPMVvXJdNqzymh2EKRANXkrTPvDd%2F3M2X1SRsSmW9fRr%2FitwmYocmWnN1BKJRDqohV7XF%2F0YXNwHuZbuawhUsWTHl2G2G8kKpoZjONB3s0dImVeQ1QEiQAWBwca59KRppS7soxutKXul7pKIIPovifMatk8JF0RAVpyB5tOWCegkh8sFDPKCBXzKCEJmgY8cYB8lezTAJB1q5ix9eqPwhNiaUmh92Cpdo7y%2FVgo0YRXEO%2FBOQvLu96QGGCg9Vb33gl70bGdJU%2BlPcD6dT1ym3dMMF4rjyFXsvH%2F98BBHzqserwuRdUTEt0GMwsqCUvgY6pgGUSE%2FER6iwQ8FVRfsknRuu7%2BEryTBQBRgkTpAJ2Cm7F2zU89C9TCa7gGHIgxzQ5DFp0k3PUZAYhPdSQ%2BJntLDlC72FK41KohcQI5Fepzao4%2FRuSvJv8ZfDuZgIgR36vDfkwRNiY6haN9rkmx6%2B4ulN4NidtjF8I%2F0Fvu8MggjDFWpJ0g18gmx2xl67wJxN5rZkfM8tk%2BO8bueJ8Gjb6aohxg%2FogC%2B0&X-Amz-Signature=b6a80f00181ffa9f7072de5b5fa59be0b07df5df016c64d1a6689c3864c80fae&X-Amz-SignedHeaders=host&x-id=GetObject)
