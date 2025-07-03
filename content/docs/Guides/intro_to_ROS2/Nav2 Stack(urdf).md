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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YG6MUVM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC5tlclg7vC7nlTsq06psRGTlUdg%2Fi5ASE9vod5bx6bxwIhAMboMEcunw99%2BExwJhn3pYjAKTo4NVSP8%2BSM6iwVwEmUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B5o2i9%2BpFRLYV24Iq3APMS1k9B%2FtqQgd7ndkFQaFUS96Sak%2BYXu9MuKiPVZQeDJWt6A5VG8PyOx1GYMOTL6YU0g13akUj1BTmhzPA7IQOHlZ7rjJAhG02KwiPvt8rZNjtjuNkfRpsUQgV9DEFyRv7Eo%2BuFCvH2%2FlpYqaHLkWY5R4O4qOCNnnPp197a2ItQSDg%2FDNQSJP%2FoPMvulUiKc%2Fib9IHPEjA1vMP0rosmwV41dWu1dUrV7We000864Tr3Xnjz45PInbvirdlAcCegPpbdyYJL15Mwp8hE%2FCaO7k31ZvL9zbk1J%2FnZWYyFC6BGXsLKa6BsKIhRXFBoxlrbguubaosX91CkOQuqe7Qx9hTmBSXleJmz0Y8c57T%2FriikquXET3F6JBpM0OTxtjdEwBV%2FQ4%2FcutdTucde9KUbFELVUaMXdDMjUPSIm01vzMSJCwP65IFM4Lsvp%2F3VQq9BdZ0KxGCHRCg%2FDStPL%2FwcNg3K3CqHsFyzqYsbpEwY86fz4STZEvhet2gg3eCUkWZ9r%2B75A%2FVAVp8oH6n%2B8wCRBhaQknSvf5p03%2BveohazjriTO2NxGX%2BEHfOEoj6vnNKdQcMd0JD9yaIuiDLe0y7i63YIjcLWE3N%2BmEIiqgoA%2Bh11Ylga%2FlLTdMhxf0pYTC8sJjDBjqkAbjDmBS09VP%2BBMyOPlIHr%2F8%2F9QpNfugt4hI2A8DtJWsYEF4Vz7N6ow6Gbi4Pvgg7kj1ZKE7m%2BATmyfl7oE3Wfn7N5Z0NFwy8iD6qkatOpM43tI8e7%2BZ%2B5GlucDqUjEwyqXqA0CACgQiuymxOh3yv9bTwjqbJdNF6Svx%2Fnc1iQpKnvdSwNgnkI7nzqX9UYyuC2MxzVsZPDKUnphVLfgPvUY9rHmlj&X-Amz-Signature=1491403062c491ba4fd7311410b4adfada545e45dd33f32850c2dcc96cbb76c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YG6MUVM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC5tlclg7vC7nlTsq06psRGTlUdg%2Fi5ASE9vod5bx6bxwIhAMboMEcunw99%2BExwJhn3pYjAKTo4NVSP8%2BSM6iwVwEmUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B5o2i9%2BpFRLYV24Iq3APMS1k9B%2FtqQgd7ndkFQaFUS96Sak%2BYXu9MuKiPVZQeDJWt6A5VG8PyOx1GYMOTL6YU0g13akUj1BTmhzPA7IQOHlZ7rjJAhG02KwiPvt8rZNjtjuNkfRpsUQgV9DEFyRv7Eo%2BuFCvH2%2FlpYqaHLkWY5R4O4qOCNnnPp197a2ItQSDg%2FDNQSJP%2FoPMvulUiKc%2Fib9IHPEjA1vMP0rosmwV41dWu1dUrV7We000864Tr3Xnjz45PInbvirdlAcCegPpbdyYJL15Mwp8hE%2FCaO7k31ZvL9zbk1J%2FnZWYyFC6BGXsLKa6BsKIhRXFBoxlrbguubaosX91CkOQuqe7Qx9hTmBSXleJmz0Y8c57T%2FriikquXET3F6JBpM0OTxtjdEwBV%2FQ4%2FcutdTucde9KUbFELVUaMXdDMjUPSIm01vzMSJCwP65IFM4Lsvp%2F3VQq9BdZ0KxGCHRCg%2FDStPL%2FwcNg3K3CqHsFyzqYsbpEwY86fz4STZEvhet2gg3eCUkWZ9r%2B75A%2FVAVp8oH6n%2B8wCRBhaQknSvf5p03%2BveohazjriTO2NxGX%2BEHfOEoj6vnNKdQcMd0JD9yaIuiDLe0y7i63YIjcLWE3N%2BmEIiqgoA%2Bh11Ylga%2FlLTdMhxf0pYTC8sJjDBjqkAbjDmBS09VP%2BBMyOPlIHr%2F8%2F9QpNfugt4hI2A8DtJWsYEF4Vz7N6ow6Gbi4Pvgg7kj1ZKE7m%2BATmyfl7oE3Wfn7N5Z0NFwy8iD6qkatOpM43tI8e7%2BZ%2B5GlucDqUjEwyqXqA0CACgQiuymxOh3yv9bTwjqbJdNF6Svx%2Fnc1iQpKnvdSwNgnkI7nzqX9UYyuC2MxzVsZPDKUnphVLfgPvUY9rHmlj&X-Amz-Signature=cd183e104af64f9679795d56ceeacedb21305622275dab70ac64f2ffad8e34f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YG6MUVM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC5tlclg7vC7nlTsq06psRGTlUdg%2Fi5ASE9vod5bx6bxwIhAMboMEcunw99%2BExwJhn3pYjAKTo4NVSP8%2BSM6iwVwEmUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B5o2i9%2BpFRLYV24Iq3APMS1k9B%2FtqQgd7ndkFQaFUS96Sak%2BYXu9MuKiPVZQeDJWt6A5VG8PyOx1GYMOTL6YU0g13akUj1BTmhzPA7IQOHlZ7rjJAhG02KwiPvt8rZNjtjuNkfRpsUQgV9DEFyRv7Eo%2BuFCvH2%2FlpYqaHLkWY5R4O4qOCNnnPp197a2ItQSDg%2FDNQSJP%2FoPMvulUiKc%2Fib9IHPEjA1vMP0rosmwV41dWu1dUrV7We000864Tr3Xnjz45PInbvirdlAcCegPpbdyYJL15Mwp8hE%2FCaO7k31ZvL9zbk1J%2FnZWYyFC6BGXsLKa6BsKIhRXFBoxlrbguubaosX91CkOQuqe7Qx9hTmBSXleJmz0Y8c57T%2FriikquXET3F6JBpM0OTxtjdEwBV%2FQ4%2FcutdTucde9KUbFELVUaMXdDMjUPSIm01vzMSJCwP65IFM4Lsvp%2F3VQq9BdZ0KxGCHRCg%2FDStPL%2FwcNg3K3CqHsFyzqYsbpEwY86fz4STZEvhet2gg3eCUkWZ9r%2B75A%2FVAVp8oH6n%2B8wCRBhaQknSvf5p03%2BveohazjriTO2NxGX%2BEHfOEoj6vnNKdQcMd0JD9yaIuiDLe0y7i63YIjcLWE3N%2BmEIiqgoA%2Bh11Ylga%2FlLTdMhxf0pYTC8sJjDBjqkAbjDmBS09VP%2BBMyOPlIHr%2F8%2F9QpNfugt4hI2A8DtJWsYEF4Vz7N6ow6Gbi4Pvgg7kj1ZKE7m%2BATmyfl7oE3Wfn7N5Z0NFwy8iD6qkatOpM43tI8e7%2BZ%2B5GlucDqUjEwyqXqA0CACgQiuymxOh3yv9bTwjqbJdNF6Svx%2Fnc1iQpKnvdSwNgnkI7nzqX9UYyuC2MxzVsZPDKUnphVLfgPvUY9rHmlj&X-Amz-Signature=98dfa5781c2da9248c0060c2257b02002ffe904bc8c2cf3d7aa1a1e27f8a4f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YG6MUVM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC5tlclg7vC7nlTsq06psRGTlUdg%2Fi5ASE9vod5bx6bxwIhAMboMEcunw99%2BExwJhn3pYjAKTo4NVSP8%2BSM6iwVwEmUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B5o2i9%2BpFRLYV24Iq3APMS1k9B%2FtqQgd7ndkFQaFUS96Sak%2BYXu9MuKiPVZQeDJWt6A5VG8PyOx1GYMOTL6YU0g13akUj1BTmhzPA7IQOHlZ7rjJAhG02KwiPvt8rZNjtjuNkfRpsUQgV9DEFyRv7Eo%2BuFCvH2%2FlpYqaHLkWY5R4O4qOCNnnPp197a2ItQSDg%2FDNQSJP%2FoPMvulUiKc%2Fib9IHPEjA1vMP0rosmwV41dWu1dUrV7We000864Tr3Xnjz45PInbvirdlAcCegPpbdyYJL15Mwp8hE%2FCaO7k31ZvL9zbk1J%2FnZWYyFC6BGXsLKa6BsKIhRXFBoxlrbguubaosX91CkOQuqe7Qx9hTmBSXleJmz0Y8c57T%2FriikquXET3F6JBpM0OTxtjdEwBV%2FQ4%2FcutdTucde9KUbFELVUaMXdDMjUPSIm01vzMSJCwP65IFM4Lsvp%2F3VQq9BdZ0KxGCHRCg%2FDStPL%2FwcNg3K3CqHsFyzqYsbpEwY86fz4STZEvhet2gg3eCUkWZ9r%2B75A%2FVAVp8oH6n%2B8wCRBhaQknSvf5p03%2BveohazjriTO2NxGX%2BEHfOEoj6vnNKdQcMd0JD9yaIuiDLe0y7i63YIjcLWE3N%2BmEIiqgoA%2Bh11Ylga%2FlLTdMhxf0pYTC8sJjDBjqkAbjDmBS09VP%2BBMyOPlIHr%2F8%2F9QpNfugt4hI2A8DtJWsYEF4Vz7N6ow6Gbi4Pvgg7kj1ZKE7m%2BATmyfl7oE3Wfn7N5Z0NFwy8iD6qkatOpM43tI8e7%2BZ%2B5GlucDqUjEwyqXqA0CACgQiuymxOh3yv9bTwjqbJdNF6Svx%2Fnc1iQpKnvdSwNgnkI7nzqX9UYyuC2MxzVsZPDKUnphVLfgPvUY9rHmlj&X-Amz-Signature=ca946bddcc4b28a5a9303edd6e7c397ae6b5988b82a6837e1745c6aa4170be48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YG6MUVM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC5tlclg7vC7nlTsq06psRGTlUdg%2Fi5ASE9vod5bx6bxwIhAMboMEcunw99%2BExwJhn3pYjAKTo4NVSP8%2BSM6iwVwEmUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B5o2i9%2BpFRLYV24Iq3APMS1k9B%2FtqQgd7ndkFQaFUS96Sak%2BYXu9MuKiPVZQeDJWt6A5VG8PyOx1GYMOTL6YU0g13akUj1BTmhzPA7IQOHlZ7rjJAhG02KwiPvt8rZNjtjuNkfRpsUQgV9DEFyRv7Eo%2BuFCvH2%2FlpYqaHLkWY5R4O4qOCNnnPp197a2ItQSDg%2FDNQSJP%2FoPMvulUiKc%2Fib9IHPEjA1vMP0rosmwV41dWu1dUrV7We000864Tr3Xnjz45PInbvirdlAcCegPpbdyYJL15Mwp8hE%2FCaO7k31ZvL9zbk1J%2FnZWYyFC6BGXsLKa6BsKIhRXFBoxlrbguubaosX91CkOQuqe7Qx9hTmBSXleJmz0Y8c57T%2FriikquXET3F6JBpM0OTxtjdEwBV%2FQ4%2FcutdTucde9KUbFELVUaMXdDMjUPSIm01vzMSJCwP65IFM4Lsvp%2F3VQq9BdZ0KxGCHRCg%2FDStPL%2FwcNg3K3CqHsFyzqYsbpEwY86fz4STZEvhet2gg3eCUkWZ9r%2B75A%2FVAVp8oH6n%2B8wCRBhaQknSvf5p03%2BveohazjriTO2NxGX%2BEHfOEoj6vnNKdQcMd0JD9yaIuiDLe0y7i63YIjcLWE3N%2BmEIiqgoA%2Bh11Ylga%2FlLTdMhxf0pYTC8sJjDBjqkAbjDmBS09VP%2BBMyOPlIHr%2F8%2F9QpNfugt4hI2A8DtJWsYEF4Vz7N6ow6Gbi4Pvgg7kj1ZKE7m%2BATmyfl7oE3Wfn7N5Z0NFwy8iD6qkatOpM43tI8e7%2BZ%2B5GlucDqUjEwyqXqA0CACgQiuymxOh3yv9bTwjqbJdNF6Svx%2Fnc1iQpKnvdSwNgnkI7nzqX9UYyuC2MxzVsZPDKUnphVLfgPvUY9rHmlj&X-Amz-Signature=f9c556426c55d5addc97d814c17318b4224c164fb7ccef6e38b8eb7533ef8465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YG6MUVM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQC5tlclg7vC7nlTsq06psRGTlUdg%2Fi5ASE9vod5bx6bxwIhAMboMEcunw99%2BExwJhn3pYjAKTo4NVSP8%2BSM6iwVwEmUKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B5o2i9%2BpFRLYV24Iq3APMS1k9B%2FtqQgd7ndkFQaFUS96Sak%2BYXu9MuKiPVZQeDJWt6A5VG8PyOx1GYMOTL6YU0g13akUj1BTmhzPA7IQOHlZ7rjJAhG02KwiPvt8rZNjtjuNkfRpsUQgV9DEFyRv7Eo%2BuFCvH2%2FlpYqaHLkWY5R4O4qOCNnnPp197a2ItQSDg%2FDNQSJP%2FoPMvulUiKc%2Fib9IHPEjA1vMP0rosmwV41dWu1dUrV7We000864Tr3Xnjz45PInbvirdlAcCegPpbdyYJL15Mwp8hE%2FCaO7k31ZvL9zbk1J%2FnZWYyFC6BGXsLKa6BsKIhRXFBoxlrbguubaosX91CkOQuqe7Qx9hTmBSXleJmz0Y8c57T%2FriikquXET3F6JBpM0OTxtjdEwBV%2FQ4%2FcutdTucde9KUbFELVUaMXdDMjUPSIm01vzMSJCwP65IFM4Lsvp%2F3VQq9BdZ0KxGCHRCg%2FDStPL%2FwcNg3K3CqHsFyzqYsbpEwY86fz4STZEvhet2gg3eCUkWZ9r%2B75A%2FVAVp8oH6n%2B8wCRBhaQknSvf5p03%2BveohazjriTO2NxGX%2BEHfOEoj6vnNKdQcMd0JD9yaIuiDLe0y7i63YIjcLWE3N%2BmEIiqgoA%2Bh11Ylga%2FlLTdMhxf0pYTC8sJjDBjqkAbjDmBS09VP%2BBMyOPlIHr%2F8%2F9QpNfugt4hI2A8DtJWsYEF4Vz7N6ow6Gbi4Pvgg7kj1ZKE7m%2BATmyfl7oE3Wfn7N5Z0NFwy8iD6qkatOpM43tI8e7%2BZ%2B5GlucDqUjEwyqXqA0CACgQiuymxOh3yv9bTwjqbJdNF6Svx%2Fnc1iQpKnvdSwNgnkI7nzqX9UYyuC2MxzVsZPDKUnphVLfgPvUY9rHmlj&X-Amz-Signature=ea3d2f1a32d410e717e3b65e0ee0884d45e9e4447e34567f685dfd663f302f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
