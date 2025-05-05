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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDU3JG2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0EbzWM9By%2FawxGLrhaUWzG2S0MH1Imu21Fw1yDkmPgIgfJDxbfm9gox6lKzcqAUVd0ONSAyAljH42so5PUY6i%2Bgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ%2BjuSuIMpZ1kr3uBSrcA3VYBiZ81oMCBD9GKOeufX1Q%2BmLl3LzpDJ%2FhI9g9iG0d61jikZpMNw894DS5I6rvbLE5T4S%2Fgx51Ysg%2Fjt6Bx6E6u7om%2BvnlxM%2F7BAzNRsAL8ornG8sVwRrk55IWRRZR9m%2BYL%2FwJ%2B%2BqHhRjbcrXVwepeYbxTmrRFFbQf4EugUXVaEpurJkw15fMnGpcWeB4aIyATrKsTRh07lKPBnAlfiB2F0%2B15qKwGu7417Jtd0PBFJdg0utm1HeFXENz1puk8anzJQPDjPShU4HR0dOMllpOD9I74ZcftN2azmCTUrCgkO%2B2JADyDjaeb9vuiNB9i0K%2FnxEaD%2FB1UbPqI2r8QT2SYlMY1d5fXLXEYR7EXdo1QJWpTLFGrA5zTZXV%2BU6r6V7%2Fd1JBb4Zy6Nap%2FbzH1%2BDUW2e9QNqaYNzxBRV5seH1UjwTHjOD1tcEHcWzT3Wuj9wvpBcT0KlTCYywDkikd5UhvFIDiCix93Dr07s%2FXm8wvbuA4mOc5tjjDycIquFhcD%2FYvpHg09%2BFcyML8m9rLMYZ3Cau2KSM9uT4Qsd1whYfUMLlOjWa7SmmnLCpWLhggGc0G8tTzEw6FxcZp1X5HjYF3ylIZGhIDnZORd63VS%2F2Te%2F2AZy6Iatrlf0qVMIyx48AGOqUBXUyrH%2BEqR%2F66KUUMtIcI0ZYFhkeN9sZdSScEHm1aoeOeRcEEkie%2FcmS%2B7ai3yukozpDzvimGCfUJlxwwwdxZeReC4jgfBWNIZsfQyGpeh3Fl90cF1ghR%2BxzvTmZCKEh3ZBUobK0dFT8rPcuOv8QY6sRS1NaOBlgHo%2BZj%2F%2BtMuprd2KB%2B6jhIVN6MUv%2FssL3W6ObBlwWEGo1V7UmP6ufu0Fqkup%2BO&X-Amz-Signature=ec574cc0827b3ecaedf1530204bc407322fa6e2232c09742f902715637308aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDU3JG2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0EbzWM9By%2FawxGLrhaUWzG2S0MH1Imu21Fw1yDkmPgIgfJDxbfm9gox6lKzcqAUVd0ONSAyAljH42so5PUY6i%2Bgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ%2BjuSuIMpZ1kr3uBSrcA3VYBiZ81oMCBD9GKOeufX1Q%2BmLl3LzpDJ%2FhI9g9iG0d61jikZpMNw894DS5I6rvbLE5T4S%2Fgx51Ysg%2Fjt6Bx6E6u7om%2BvnlxM%2F7BAzNRsAL8ornG8sVwRrk55IWRRZR9m%2BYL%2FwJ%2B%2BqHhRjbcrXVwepeYbxTmrRFFbQf4EugUXVaEpurJkw15fMnGpcWeB4aIyATrKsTRh07lKPBnAlfiB2F0%2B15qKwGu7417Jtd0PBFJdg0utm1HeFXENz1puk8anzJQPDjPShU4HR0dOMllpOD9I74ZcftN2azmCTUrCgkO%2B2JADyDjaeb9vuiNB9i0K%2FnxEaD%2FB1UbPqI2r8QT2SYlMY1d5fXLXEYR7EXdo1QJWpTLFGrA5zTZXV%2BU6r6V7%2Fd1JBb4Zy6Nap%2FbzH1%2BDUW2e9QNqaYNzxBRV5seH1UjwTHjOD1tcEHcWzT3Wuj9wvpBcT0KlTCYywDkikd5UhvFIDiCix93Dr07s%2FXm8wvbuA4mOc5tjjDycIquFhcD%2FYvpHg09%2BFcyML8m9rLMYZ3Cau2KSM9uT4Qsd1whYfUMLlOjWa7SmmnLCpWLhggGc0G8tTzEw6FxcZp1X5HjYF3ylIZGhIDnZORd63VS%2F2Te%2F2AZy6Iatrlf0qVMIyx48AGOqUBXUyrH%2BEqR%2F66KUUMtIcI0ZYFhkeN9sZdSScEHm1aoeOeRcEEkie%2FcmS%2B7ai3yukozpDzvimGCfUJlxwwwdxZeReC4jgfBWNIZsfQyGpeh3Fl90cF1ghR%2BxzvTmZCKEh3ZBUobK0dFT8rPcuOv8QY6sRS1NaOBlgHo%2BZj%2F%2BtMuprd2KB%2B6jhIVN6MUv%2FssL3W6ObBlwWEGo1V7UmP6ufu0Fqkup%2BO&X-Amz-Signature=f7da50db3604ff4332822ddc6b8fbaf12e7cdc56518bc1af3f9a73433c3b4ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDU3JG2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0EbzWM9By%2FawxGLrhaUWzG2S0MH1Imu21Fw1yDkmPgIgfJDxbfm9gox6lKzcqAUVd0ONSAyAljH42so5PUY6i%2Bgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ%2BjuSuIMpZ1kr3uBSrcA3VYBiZ81oMCBD9GKOeufX1Q%2BmLl3LzpDJ%2FhI9g9iG0d61jikZpMNw894DS5I6rvbLE5T4S%2Fgx51Ysg%2Fjt6Bx6E6u7om%2BvnlxM%2F7BAzNRsAL8ornG8sVwRrk55IWRRZR9m%2BYL%2FwJ%2B%2BqHhRjbcrXVwepeYbxTmrRFFbQf4EugUXVaEpurJkw15fMnGpcWeB4aIyATrKsTRh07lKPBnAlfiB2F0%2B15qKwGu7417Jtd0PBFJdg0utm1HeFXENz1puk8anzJQPDjPShU4HR0dOMllpOD9I74ZcftN2azmCTUrCgkO%2B2JADyDjaeb9vuiNB9i0K%2FnxEaD%2FB1UbPqI2r8QT2SYlMY1d5fXLXEYR7EXdo1QJWpTLFGrA5zTZXV%2BU6r6V7%2Fd1JBb4Zy6Nap%2FbzH1%2BDUW2e9QNqaYNzxBRV5seH1UjwTHjOD1tcEHcWzT3Wuj9wvpBcT0KlTCYywDkikd5UhvFIDiCix93Dr07s%2FXm8wvbuA4mOc5tjjDycIquFhcD%2FYvpHg09%2BFcyML8m9rLMYZ3Cau2KSM9uT4Qsd1whYfUMLlOjWa7SmmnLCpWLhggGc0G8tTzEw6FxcZp1X5HjYF3ylIZGhIDnZORd63VS%2F2Te%2F2AZy6Iatrlf0qVMIyx48AGOqUBXUyrH%2BEqR%2F66KUUMtIcI0ZYFhkeN9sZdSScEHm1aoeOeRcEEkie%2FcmS%2B7ai3yukozpDzvimGCfUJlxwwwdxZeReC4jgfBWNIZsfQyGpeh3Fl90cF1ghR%2BxzvTmZCKEh3ZBUobK0dFT8rPcuOv8QY6sRS1NaOBlgHo%2BZj%2F%2BtMuprd2KB%2B6jhIVN6MUv%2FssL3W6ObBlwWEGo1V7UmP6ufu0Fqkup%2BO&X-Amz-Signature=aeb0ae6630ac845cd1c6023c6952912043095679659d829e984073ae175baf71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDU3JG2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0EbzWM9By%2FawxGLrhaUWzG2S0MH1Imu21Fw1yDkmPgIgfJDxbfm9gox6lKzcqAUVd0ONSAyAljH42so5PUY6i%2Bgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ%2BjuSuIMpZ1kr3uBSrcA3VYBiZ81oMCBD9GKOeufX1Q%2BmLl3LzpDJ%2FhI9g9iG0d61jikZpMNw894DS5I6rvbLE5T4S%2Fgx51Ysg%2Fjt6Bx6E6u7om%2BvnlxM%2F7BAzNRsAL8ornG8sVwRrk55IWRRZR9m%2BYL%2FwJ%2B%2BqHhRjbcrXVwepeYbxTmrRFFbQf4EugUXVaEpurJkw15fMnGpcWeB4aIyATrKsTRh07lKPBnAlfiB2F0%2B15qKwGu7417Jtd0PBFJdg0utm1HeFXENz1puk8anzJQPDjPShU4HR0dOMllpOD9I74ZcftN2azmCTUrCgkO%2B2JADyDjaeb9vuiNB9i0K%2FnxEaD%2FB1UbPqI2r8QT2SYlMY1d5fXLXEYR7EXdo1QJWpTLFGrA5zTZXV%2BU6r6V7%2Fd1JBb4Zy6Nap%2FbzH1%2BDUW2e9QNqaYNzxBRV5seH1UjwTHjOD1tcEHcWzT3Wuj9wvpBcT0KlTCYywDkikd5UhvFIDiCix93Dr07s%2FXm8wvbuA4mOc5tjjDycIquFhcD%2FYvpHg09%2BFcyML8m9rLMYZ3Cau2KSM9uT4Qsd1whYfUMLlOjWa7SmmnLCpWLhggGc0G8tTzEw6FxcZp1X5HjYF3ylIZGhIDnZORd63VS%2F2Te%2F2AZy6Iatrlf0qVMIyx48AGOqUBXUyrH%2BEqR%2F66KUUMtIcI0ZYFhkeN9sZdSScEHm1aoeOeRcEEkie%2FcmS%2B7ai3yukozpDzvimGCfUJlxwwwdxZeReC4jgfBWNIZsfQyGpeh3Fl90cF1ghR%2BxzvTmZCKEh3ZBUobK0dFT8rPcuOv8QY6sRS1NaOBlgHo%2BZj%2F%2BtMuprd2KB%2B6jhIVN6MUv%2FssL3W6ObBlwWEGo1V7UmP6ufu0Fqkup%2BO&X-Amz-Signature=dc9d2f4b270bdcd89ca8c3199b7d4d84aed00e8d1fca2fda27284776739247e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDU3JG2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0EbzWM9By%2FawxGLrhaUWzG2S0MH1Imu21Fw1yDkmPgIgfJDxbfm9gox6lKzcqAUVd0ONSAyAljH42so5PUY6i%2Bgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ%2BjuSuIMpZ1kr3uBSrcA3VYBiZ81oMCBD9GKOeufX1Q%2BmLl3LzpDJ%2FhI9g9iG0d61jikZpMNw894DS5I6rvbLE5T4S%2Fgx51Ysg%2Fjt6Bx6E6u7om%2BvnlxM%2F7BAzNRsAL8ornG8sVwRrk55IWRRZR9m%2BYL%2FwJ%2B%2BqHhRjbcrXVwepeYbxTmrRFFbQf4EugUXVaEpurJkw15fMnGpcWeB4aIyATrKsTRh07lKPBnAlfiB2F0%2B15qKwGu7417Jtd0PBFJdg0utm1HeFXENz1puk8anzJQPDjPShU4HR0dOMllpOD9I74ZcftN2azmCTUrCgkO%2B2JADyDjaeb9vuiNB9i0K%2FnxEaD%2FB1UbPqI2r8QT2SYlMY1d5fXLXEYR7EXdo1QJWpTLFGrA5zTZXV%2BU6r6V7%2Fd1JBb4Zy6Nap%2FbzH1%2BDUW2e9QNqaYNzxBRV5seH1UjwTHjOD1tcEHcWzT3Wuj9wvpBcT0KlTCYywDkikd5UhvFIDiCix93Dr07s%2FXm8wvbuA4mOc5tjjDycIquFhcD%2FYvpHg09%2BFcyML8m9rLMYZ3Cau2KSM9uT4Qsd1whYfUMLlOjWa7SmmnLCpWLhggGc0G8tTzEw6FxcZp1X5HjYF3ylIZGhIDnZORd63VS%2F2Te%2F2AZy6Iatrlf0qVMIyx48AGOqUBXUyrH%2BEqR%2F66KUUMtIcI0ZYFhkeN9sZdSScEHm1aoeOeRcEEkie%2FcmS%2B7ai3yukozpDzvimGCfUJlxwwwdxZeReC4jgfBWNIZsfQyGpeh3Fl90cF1ghR%2BxzvTmZCKEh3ZBUobK0dFT8rPcuOv8QY6sRS1NaOBlgHo%2BZj%2F%2BtMuprd2KB%2B6jhIVN6MUv%2FssL3W6ObBlwWEGo1V7UmP6ufu0Fqkup%2BO&X-Amz-Signature=d0de4fa406909422836fd2f4d66297054b2d95398ef62c85a4de8c554557fd7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JDU3JG2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj0EbzWM9By%2FawxGLrhaUWzG2S0MH1Imu21Fw1yDkmPgIgfJDxbfm9gox6lKzcqAUVd0ONSAyAljH42so5PUY6i%2Bgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ%2BjuSuIMpZ1kr3uBSrcA3VYBiZ81oMCBD9GKOeufX1Q%2BmLl3LzpDJ%2FhI9g9iG0d61jikZpMNw894DS5I6rvbLE5T4S%2Fgx51Ysg%2Fjt6Bx6E6u7om%2BvnlxM%2F7BAzNRsAL8ornG8sVwRrk55IWRRZR9m%2BYL%2FwJ%2B%2BqHhRjbcrXVwepeYbxTmrRFFbQf4EugUXVaEpurJkw15fMnGpcWeB4aIyATrKsTRh07lKPBnAlfiB2F0%2B15qKwGu7417Jtd0PBFJdg0utm1HeFXENz1puk8anzJQPDjPShU4HR0dOMllpOD9I74ZcftN2azmCTUrCgkO%2B2JADyDjaeb9vuiNB9i0K%2FnxEaD%2FB1UbPqI2r8QT2SYlMY1d5fXLXEYR7EXdo1QJWpTLFGrA5zTZXV%2BU6r6V7%2Fd1JBb4Zy6Nap%2FbzH1%2BDUW2e9QNqaYNzxBRV5seH1UjwTHjOD1tcEHcWzT3Wuj9wvpBcT0KlTCYywDkikd5UhvFIDiCix93Dr07s%2FXm8wvbuA4mOc5tjjDycIquFhcD%2FYvpHg09%2BFcyML8m9rLMYZ3Cau2KSM9uT4Qsd1whYfUMLlOjWa7SmmnLCpWLhggGc0G8tTzEw6FxcZp1X5HjYF3ylIZGhIDnZORd63VS%2F2Te%2F2AZy6Iatrlf0qVMIyx48AGOqUBXUyrH%2BEqR%2F66KUUMtIcI0ZYFhkeN9sZdSScEHm1aoeOeRcEEkie%2FcmS%2B7ai3yukozpDzvimGCfUJlxwwwdxZeReC4jgfBWNIZsfQyGpeh3Fl90cF1ghR%2BxzvTmZCKEh3ZBUobK0dFT8rPcuOv8QY6sRS1NaOBlgHo%2BZj%2F%2BtMuprd2KB%2B6jhIVN6MUv%2FssL3W6ObBlwWEGo1V7UmP6ufu0Fqkup%2BO&X-Amz-Signature=7976e3e3b70f3381f41cc8f84aa41ae8c3291de2b3114bebc6aaa302f0b02ae4&X-Amz-SignedHeaders=host&x-id=GetObject)
