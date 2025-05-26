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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I73B56A%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFr8lnYnjvr8Ow2UF6lmE%2BsfnVUdaQXzraLiKRUEPHbAIhAOvsGZBzS4RhCdZmpn1WC3kQ%2FPF0KB9TXmXkDhHu2r0CKv8DCEcQABoMNjM3NDIzMTgzODA1IgyKEqQU%2BKcjXjww1xcq3AOAVGZM3BMKqZ9veXr%2BXI3o%2B%2FkukA5CIgKwVFhnWtrxCHW4G2fUNmtKIZw1Whd9%2BDlvBOUdWoNPToICeZwFjb1MGz1CHhNUSKWa1x4ZS%2BqvBIzWlmjMuHxaYRRdt1oek9TQxU6r6fafKTsDc5gYiXGKM8GU6CpVAwlVQMunkZjT7CuFAyNaWvhLpEQEWA6ZEHC90ei%2F8lkBuYmfBW8jcOlAnk8%2B%2Fug3HSTVkSjvyWL0EEuK8SYy4mrL5LuzB0q9RNGiqJnlLayzbh2R0Om5xq3SckTxCzVOAMf7Ik28IiTAqL1y8nlUsN1UGouPXC8sCRjy%2FS96x31MASKQhsZ18Z3cYcPC8NYGCQhQcdzyz4qECfKhVs55RLw6adQcfqIfQDRHllNCG4bjf9jTo7CKjPQOcQI1yIft7GnJx0QBEfQor%2BZ%2BRmRv1iR32z00fU4oS%2BsfowzAF17SibWsFu06Yblg0mZDx17NjHH3N9RM8kPp36aXYyfcnHsfchKX1WPJd2uS70hTXzSS1T1r1GR3qGpFO%2FSzL5RwEMV3eqLySA1wlTCQibJ9t%2FgbvLrykeYBqcZaEao2cJNq2qAmftTFVeuJXvwIHE0U0MedTKqA3d%2Ft%2FzXUWdjYiwOE9GA%2BezCS5tHBBjqkAWcwS%2FqFhypsjQJAF%2B7oHPMD%2F%2BGofVtoQweGTt9eONDCLuLReo%2FIQqPyz%2B1ojNMXdBnS9SFOGoHxIiRHC%2BtdLl%2BUAtTnRL6UgsCeEfUvZA8lEKdX3PcuCpM056s5spx8CCKfRmuSM2v%2BnPbS8R2RgMh3efkecV44fuxVALriP8m1sfg%2F868Fm5WGhICH50bUS6PqhJ4LvGOkMx%2Bx0cXqkthpz8Br&X-Amz-Signature=cc4d6ba32129972a1661098cb1c59a09c0e6e9ec9740cf17d6f8df485e3b1e98&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I73B56A%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFr8lnYnjvr8Ow2UF6lmE%2BsfnVUdaQXzraLiKRUEPHbAIhAOvsGZBzS4RhCdZmpn1WC3kQ%2FPF0KB9TXmXkDhHu2r0CKv8DCEcQABoMNjM3NDIzMTgzODA1IgyKEqQU%2BKcjXjww1xcq3AOAVGZM3BMKqZ9veXr%2BXI3o%2B%2FkukA5CIgKwVFhnWtrxCHW4G2fUNmtKIZw1Whd9%2BDlvBOUdWoNPToICeZwFjb1MGz1CHhNUSKWa1x4ZS%2BqvBIzWlmjMuHxaYRRdt1oek9TQxU6r6fafKTsDc5gYiXGKM8GU6CpVAwlVQMunkZjT7CuFAyNaWvhLpEQEWA6ZEHC90ei%2F8lkBuYmfBW8jcOlAnk8%2B%2Fug3HSTVkSjvyWL0EEuK8SYy4mrL5LuzB0q9RNGiqJnlLayzbh2R0Om5xq3SckTxCzVOAMf7Ik28IiTAqL1y8nlUsN1UGouPXC8sCRjy%2FS96x31MASKQhsZ18Z3cYcPC8NYGCQhQcdzyz4qECfKhVs55RLw6adQcfqIfQDRHllNCG4bjf9jTo7CKjPQOcQI1yIft7GnJx0QBEfQor%2BZ%2BRmRv1iR32z00fU4oS%2BsfowzAF17SibWsFu06Yblg0mZDx17NjHH3N9RM8kPp36aXYyfcnHsfchKX1WPJd2uS70hTXzSS1T1r1GR3qGpFO%2FSzL5RwEMV3eqLySA1wlTCQibJ9t%2FgbvLrykeYBqcZaEao2cJNq2qAmftTFVeuJXvwIHE0U0MedTKqA3d%2Ft%2FzXUWdjYiwOE9GA%2BezCS5tHBBjqkAWcwS%2FqFhypsjQJAF%2B7oHPMD%2F%2BGofVtoQweGTt9eONDCLuLReo%2FIQqPyz%2B1ojNMXdBnS9SFOGoHxIiRHC%2BtdLl%2BUAtTnRL6UgsCeEfUvZA8lEKdX3PcuCpM056s5spx8CCKfRmuSM2v%2BnPbS8R2RgMh3efkecV44fuxVALriP8m1sfg%2F868Fm5WGhICH50bUS6PqhJ4LvGOkMx%2Bx0cXqkthpz8Br&X-Amz-Signature=a9acd207d689724638a84f8766a6de197da2e794b4138748118d0fa03b935439&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I73B56A%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFr8lnYnjvr8Ow2UF6lmE%2BsfnVUdaQXzraLiKRUEPHbAIhAOvsGZBzS4RhCdZmpn1WC3kQ%2FPF0KB9TXmXkDhHu2r0CKv8DCEcQABoMNjM3NDIzMTgzODA1IgyKEqQU%2BKcjXjww1xcq3AOAVGZM3BMKqZ9veXr%2BXI3o%2B%2FkukA5CIgKwVFhnWtrxCHW4G2fUNmtKIZw1Whd9%2BDlvBOUdWoNPToICeZwFjb1MGz1CHhNUSKWa1x4ZS%2BqvBIzWlmjMuHxaYRRdt1oek9TQxU6r6fafKTsDc5gYiXGKM8GU6CpVAwlVQMunkZjT7CuFAyNaWvhLpEQEWA6ZEHC90ei%2F8lkBuYmfBW8jcOlAnk8%2B%2Fug3HSTVkSjvyWL0EEuK8SYy4mrL5LuzB0q9RNGiqJnlLayzbh2R0Om5xq3SckTxCzVOAMf7Ik28IiTAqL1y8nlUsN1UGouPXC8sCRjy%2FS96x31MASKQhsZ18Z3cYcPC8NYGCQhQcdzyz4qECfKhVs55RLw6adQcfqIfQDRHllNCG4bjf9jTo7CKjPQOcQI1yIft7GnJx0QBEfQor%2BZ%2BRmRv1iR32z00fU4oS%2BsfowzAF17SibWsFu06Yblg0mZDx17NjHH3N9RM8kPp36aXYyfcnHsfchKX1WPJd2uS70hTXzSS1T1r1GR3qGpFO%2FSzL5RwEMV3eqLySA1wlTCQibJ9t%2FgbvLrykeYBqcZaEao2cJNq2qAmftTFVeuJXvwIHE0U0MedTKqA3d%2Ft%2FzXUWdjYiwOE9GA%2BezCS5tHBBjqkAWcwS%2FqFhypsjQJAF%2B7oHPMD%2F%2BGofVtoQweGTt9eONDCLuLReo%2FIQqPyz%2B1ojNMXdBnS9SFOGoHxIiRHC%2BtdLl%2BUAtTnRL6UgsCeEfUvZA8lEKdX3PcuCpM056s5spx8CCKfRmuSM2v%2BnPbS8R2RgMh3efkecV44fuxVALriP8m1sfg%2F868Fm5WGhICH50bUS6PqhJ4LvGOkMx%2Bx0cXqkthpz8Br&X-Amz-Signature=7a5d7ef91cfc42be5caa0b48175b8631a231cb340a9af6d853087254fc375047&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I73B56A%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFr8lnYnjvr8Ow2UF6lmE%2BsfnVUdaQXzraLiKRUEPHbAIhAOvsGZBzS4RhCdZmpn1WC3kQ%2FPF0KB9TXmXkDhHu2r0CKv8DCEcQABoMNjM3NDIzMTgzODA1IgyKEqQU%2BKcjXjww1xcq3AOAVGZM3BMKqZ9veXr%2BXI3o%2B%2FkukA5CIgKwVFhnWtrxCHW4G2fUNmtKIZw1Whd9%2BDlvBOUdWoNPToICeZwFjb1MGz1CHhNUSKWa1x4ZS%2BqvBIzWlmjMuHxaYRRdt1oek9TQxU6r6fafKTsDc5gYiXGKM8GU6CpVAwlVQMunkZjT7CuFAyNaWvhLpEQEWA6ZEHC90ei%2F8lkBuYmfBW8jcOlAnk8%2B%2Fug3HSTVkSjvyWL0EEuK8SYy4mrL5LuzB0q9RNGiqJnlLayzbh2R0Om5xq3SckTxCzVOAMf7Ik28IiTAqL1y8nlUsN1UGouPXC8sCRjy%2FS96x31MASKQhsZ18Z3cYcPC8NYGCQhQcdzyz4qECfKhVs55RLw6adQcfqIfQDRHllNCG4bjf9jTo7CKjPQOcQI1yIft7GnJx0QBEfQor%2BZ%2BRmRv1iR32z00fU4oS%2BsfowzAF17SibWsFu06Yblg0mZDx17NjHH3N9RM8kPp36aXYyfcnHsfchKX1WPJd2uS70hTXzSS1T1r1GR3qGpFO%2FSzL5RwEMV3eqLySA1wlTCQibJ9t%2FgbvLrykeYBqcZaEao2cJNq2qAmftTFVeuJXvwIHE0U0MedTKqA3d%2Ft%2FzXUWdjYiwOE9GA%2BezCS5tHBBjqkAWcwS%2FqFhypsjQJAF%2B7oHPMD%2F%2BGofVtoQweGTt9eONDCLuLReo%2FIQqPyz%2B1ojNMXdBnS9SFOGoHxIiRHC%2BtdLl%2BUAtTnRL6UgsCeEfUvZA8lEKdX3PcuCpM056s5spx8CCKfRmuSM2v%2BnPbS8R2RgMh3efkecV44fuxVALriP8m1sfg%2F868Fm5WGhICH50bUS6PqhJ4LvGOkMx%2Bx0cXqkthpz8Br&X-Amz-Signature=384a1b26b764d32329fb3290432a990429a83f8a59fe7832dd58c6e75824b45a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I73B56A%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFr8lnYnjvr8Ow2UF6lmE%2BsfnVUdaQXzraLiKRUEPHbAIhAOvsGZBzS4RhCdZmpn1WC3kQ%2FPF0KB9TXmXkDhHu2r0CKv8DCEcQABoMNjM3NDIzMTgzODA1IgyKEqQU%2BKcjXjww1xcq3AOAVGZM3BMKqZ9veXr%2BXI3o%2B%2FkukA5CIgKwVFhnWtrxCHW4G2fUNmtKIZw1Whd9%2BDlvBOUdWoNPToICeZwFjb1MGz1CHhNUSKWa1x4ZS%2BqvBIzWlmjMuHxaYRRdt1oek9TQxU6r6fafKTsDc5gYiXGKM8GU6CpVAwlVQMunkZjT7CuFAyNaWvhLpEQEWA6ZEHC90ei%2F8lkBuYmfBW8jcOlAnk8%2B%2Fug3HSTVkSjvyWL0EEuK8SYy4mrL5LuzB0q9RNGiqJnlLayzbh2R0Om5xq3SckTxCzVOAMf7Ik28IiTAqL1y8nlUsN1UGouPXC8sCRjy%2FS96x31MASKQhsZ18Z3cYcPC8NYGCQhQcdzyz4qECfKhVs55RLw6adQcfqIfQDRHllNCG4bjf9jTo7CKjPQOcQI1yIft7GnJx0QBEfQor%2BZ%2BRmRv1iR32z00fU4oS%2BsfowzAF17SibWsFu06Yblg0mZDx17NjHH3N9RM8kPp36aXYyfcnHsfchKX1WPJd2uS70hTXzSS1T1r1GR3qGpFO%2FSzL5RwEMV3eqLySA1wlTCQibJ9t%2FgbvLrykeYBqcZaEao2cJNq2qAmftTFVeuJXvwIHE0U0MedTKqA3d%2Ft%2FzXUWdjYiwOE9GA%2BezCS5tHBBjqkAWcwS%2FqFhypsjQJAF%2B7oHPMD%2F%2BGofVtoQweGTt9eONDCLuLReo%2FIQqPyz%2B1ojNMXdBnS9SFOGoHxIiRHC%2BtdLl%2BUAtTnRL6UgsCeEfUvZA8lEKdX3PcuCpM056s5spx8CCKfRmuSM2v%2BnPbS8R2RgMh3efkecV44fuxVALriP8m1sfg%2F868Fm5WGhICH50bUS6PqhJ4LvGOkMx%2Bx0cXqkthpz8Br&X-Amz-Signature=b22700a18c9ad674c264c6d982b579c3ed696d2a129ab6130e9faeee7178b2da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I73B56A%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCFr8lnYnjvr8Ow2UF6lmE%2BsfnVUdaQXzraLiKRUEPHbAIhAOvsGZBzS4RhCdZmpn1WC3kQ%2FPF0KB9TXmXkDhHu2r0CKv8DCEcQABoMNjM3NDIzMTgzODA1IgyKEqQU%2BKcjXjww1xcq3AOAVGZM3BMKqZ9veXr%2BXI3o%2B%2FkukA5CIgKwVFhnWtrxCHW4G2fUNmtKIZw1Whd9%2BDlvBOUdWoNPToICeZwFjb1MGz1CHhNUSKWa1x4ZS%2BqvBIzWlmjMuHxaYRRdt1oek9TQxU6r6fafKTsDc5gYiXGKM8GU6CpVAwlVQMunkZjT7CuFAyNaWvhLpEQEWA6ZEHC90ei%2F8lkBuYmfBW8jcOlAnk8%2B%2Fug3HSTVkSjvyWL0EEuK8SYy4mrL5LuzB0q9RNGiqJnlLayzbh2R0Om5xq3SckTxCzVOAMf7Ik28IiTAqL1y8nlUsN1UGouPXC8sCRjy%2FS96x31MASKQhsZ18Z3cYcPC8NYGCQhQcdzyz4qECfKhVs55RLw6adQcfqIfQDRHllNCG4bjf9jTo7CKjPQOcQI1yIft7GnJx0QBEfQor%2BZ%2BRmRv1iR32z00fU4oS%2BsfowzAF17SibWsFu06Yblg0mZDx17NjHH3N9RM8kPp36aXYyfcnHsfchKX1WPJd2uS70hTXzSS1T1r1GR3qGpFO%2FSzL5RwEMV3eqLySA1wlTCQibJ9t%2FgbvLrykeYBqcZaEao2cJNq2qAmftTFVeuJXvwIHE0U0MedTKqA3d%2Ft%2FzXUWdjYiwOE9GA%2BezCS5tHBBjqkAWcwS%2FqFhypsjQJAF%2B7oHPMD%2F%2BGofVtoQweGTt9eONDCLuLReo%2FIQqPyz%2B1ojNMXdBnS9SFOGoHxIiRHC%2BtdLl%2BUAtTnRL6UgsCeEfUvZA8lEKdX3PcuCpM056s5spx8CCKfRmuSM2v%2BnPbS8R2RgMh3efkecV44fuxVALriP8m1sfg%2F868Fm5WGhICH50bUS6PqhJ4LvGOkMx%2Bx0cXqkthpz8Br&X-Amz-Signature=771bf993a9804f829dfbd55746b095586697a29f28b3a16da834d2fa3a28ca15&X-Amz-SignedHeaders=host&x-id=GetObject)
