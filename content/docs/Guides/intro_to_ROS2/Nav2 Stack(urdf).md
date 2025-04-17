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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTT6YSS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDK%2F6jUCNMz%2BKi2lFqDcMKCKStRgA36d7EGSyyghL%2B%2B6wIfeYfrX%2BFXYYzs4tQABEvmHyz3IVrBMZZbcuxmjwDpdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtNeZi0KEvVBC%2FWntKtwDzqdgmt%2FORrNs6N1G6IkqfzGY6vpF6WokXsnRucTwmpEhTlHKjnKS7ilADg004iyXtw5iAgkTlUaJdZR%2FDTQgK4BVGVELOoCUwukWuzd%2Fh5dJcEPB0uKKhKvaAYZ9l2DsnD5iujOghluYfr56vCtwacVvp9fuc%2F41qL62fVYSyFzC%2B40Fd9N3Gc5sLEtWwgfg%2B0lCfNa0fWX4Zi2BAMhTbPQTpSAbc6Gm04SNYnfTZGu3yGn62VPmadil7Lm0Tr5%2B1lATSjxgFMUalHeR2Zmbj3%2BtmkRa457QaSg%2B0NBsVky1QWVpM5fP1R7TeaP76mwrXLW9nm%2FcooQ5CRf3%2FRcqXWvx98PQmzY%2BTp9WRniURq%2BVNC9cEq0Vil%2FIoRcnDrgAzL0RcelHNcdYUsXOhCYi%2Bq%2FbE93NIsbJxaGvjszun0gnfsCMNKE%2Fwbm%2FUKvhjwA%2F0p4NHIyLLYYaQ8yqyJnOwX7BmLT%2BxVoNegXNggYfHrImrkGGdom99%2BbGna1F6KKknqkElJ5nS5WCQcr03xjWbdbnpt8RUCdDX9rOkoaWqzWxEbLimUD7o53mACun9XLHjOLQX04KB6TshAo0SahlpuqiOPbXldn%2FEPRwtC%2FaiJP6XC68G%2FcucxZVckYw%2Fa%2BEwAY6pgHzvvgoE%2Fs3HBxhrFono%2BhnWrl6QdX3uE46asmjaj8m6bVVfYVE0SlbDd4Jcqfso%2Fm4oo6G5tdhgUYxZuQX4VQHTeKQPbLAVLwJYlzV1F2vXpEFMvdKWZUccN2qeoQVj7QOLuvmaa7MskipPHAI%2BidtXNlzFZPM3OMyFIF0xrMzntOVjv%2BMr6zDopGlOJW%2B1n8ZX1YnHWyt%2BsZ%2FeNVgY%2B1L9Slg1dRC&X-Amz-Signature=6326d19bb631027490282913786c6ee7ae4e0bda05207196900ad2ac924fad1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTT6YSS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDK%2F6jUCNMz%2BKi2lFqDcMKCKStRgA36d7EGSyyghL%2B%2B6wIfeYfrX%2BFXYYzs4tQABEvmHyz3IVrBMZZbcuxmjwDpdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtNeZi0KEvVBC%2FWntKtwDzqdgmt%2FORrNs6N1G6IkqfzGY6vpF6WokXsnRucTwmpEhTlHKjnKS7ilADg004iyXtw5iAgkTlUaJdZR%2FDTQgK4BVGVELOoCUwukWuzd%2Fh5dJcEPB0uKKhKvaAYZ9l2DsnD5iujOghluYfr56vCtwacVvp9fuc%2F41qL62fVYSyFzC%2B40Fd9N3Gc5sLEtWwgfg%2B0lCfNa0fWX4Zi2BAMhTbPQTpSAbc6Gm04SNYnfTZGu3yGn62VPmadil7Lm0Tr5%2B1lATSjxgFMUalHeR2Zmbj3%2BtmkRa457QaSg%2B0NBsVky1QWVpM5fP1R7TeaP76mwrXLW9nm%2FcooQ5CRf3%2FRcqXWvx98PQmzY%2BTp9WRniURq%2BVNC9cEq0Vil%2FIoRcnDrgAzL0RcelHNcdYUsXOhCYi%2Bq%2FbE93NIsbJxaGvjszun0gnfsCMNKE%2Fwbm%2FUKvhjwA%2F0p4NHIyLLYYaQ8yqyJnOwX7BmLT%2BxVoNegXNggYfHrImrkGGdom99%2BbGna1F6KKknqkElJ5nS5WCQcr03xjWbdbnpt8RUCdDX9rOkoaWqzWxEbLimUD7o53mACun9XLHjOLQX04KB6TshAo0SahlpuqiOPbXldn%2FEPRwtC%2FaiJP6XC68G%2FcucxZVckYw%2Fa%2BEwAY6pgHzvvgoE%2Fs3HBxhrFono%2BhnWrl6QdX3uE46asmjaj8m6bVVfYVE0SlbDd4Jcqfso%2Fm4oo6G5tdhgUYxZuQX4VQHTeKQPbLAVLwJYlzV1F2vXpEFMvdKWZUccN2qeoQVj7QOLuvmaa7MskipPHAI%2BidtXNlzFZPM3OMyFIF0xrMzntOVjv%2BMr6zDopGlOJW%2B1n8ZX1YnHWyt%2BsZ%2FeNVgY%2B1L9Slg1dRC&X-Amz-Signature=fc939ceb370c3d035e34644088459daa6537b5f0883389994a2e5737f1d0651e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTT6YSS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDK%2F6jUCNMz%2BKi2lFqDcMKCKStRgA36d7EGSyyghL%2B%2B6wIfeYfrX%2BFXYYzs4tQABEvmHyz3IVrBMZZbcuxmjwDpdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtNeZi0KEvVBC%2FWntKtwDzqdgmt%2FORrNs6N1G6IkqfzGY6vpF6WokXsnRucTwmpEhTlHKjnKS7ilADg004iyXtw5iAgkTlUaJdZR%2FDTQgK4BVGVELOoCUwukWuzd%2Fh5dJcEPB0uKKhKvaAYZ9l2DsnD5iujOghluYfr56vCtwacVvp9fuc%2F41qL62fVYSyFzC%2B40Fd9N3Gc5sLEtWwgfg%2B0lCfNa0fWX4Zi2BAMhTbPQTpSAbc6Gm04SNYnfTZGu3yGn62VPmadil7Lm0Tr5%2B1lATSjxgFMUalHeR2Zmbj3%2BtmkRa457QaSg%2B0NBsVky1QWVpM5fP1R7TeaP76mwrXLW9nm%2FcooQ5CRf3%2FRcqXWvx98PQmzY%2BTp9WRniURq%2BVNC9cEq0Vil%2FIoRcnDrgAzL0RcelHNcdYUsXOhCYi%2Bq%2FbE93NIsbJxaGvjszun0gnfsCMNKE%2Fwbm%2FUKvhjwA%2F0p4NHIyLLYYaQ8yqyJnOwX7BmLT%2BxVoNegXNggYfHrImrkGGdom99%2BbGna1F6KKknqkElJ5nS5WCQcr03xjWbdbnpt8RUCdDX9rOkoaWqzWxEbLimUD7o53mACun9XLHjOLQX04KB6TshAo0SahlpuqiOPbXldn%2FEPRwtC%2FaiJP6XC68G%2FcucxZVckYw%2Fa%2BEwAY6pgHzvvgoE%2Fs3HBxhrFono%2BhnWrl6QdX3uE46asmjaj8m6bVVfYVE0SlbDd4Jcqfso%2Fm4oo6G5tdhgUYxZuQX4VQHTeKQPbLAVLwJYlzV1F2vXpEFMvdKWZUccN2qeoQVj7QOLuvmaa7MskipPHAI%2BidtXNlzFZPM3OMyFIF0xrMzntOVjv%2BMr6zDopGlOJW%2B1n8ZX1YnHWyt%2BsZ%2FeNVgY%2B1L9Slg1dRC&X-Amz-Signature=6fe3af000dbaece2455c948d189a0b59ccd88c30de1865911e7c2cd46a795570&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTT6YSS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDK%2F6jUCNMz%2BKi2lFqDcMKCKStRgA36d7EGSyyghL%2B%2B6wIfeYfrX%2BFXYYzs4tQABEvmHyz3IVrBMZZbcuxmjwDpdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtNeZi0KEvVBC%2FWntKtwDzqdgmt%2FORrNs6N1G6IkqfzGY6vpF6WokXsnRucTwmpEhTlHKjnKS7ilADg004iyXtw5iAgkTlUaJdZR%2FDTQgK4BVGVELOoCUwukWuzd%2Fh5dJcEPB0uKKhKvaAYZ9l2DsnD5iujOghluYfr56vCtwacVvp9fuc%2F41qL62fVYSyFzC%2B40Fd9N3Gc5sLEtWwgfg%2B0lCfNa0fWX4Zi2BAMhTbPQTpSAbc6Gm04SNYnfTZGu3yGn62VPmadil7Lm0Tr5%2B1lATSjxgFMUalHeR2Zmbj3%2BtmkRa457QaSg%2B0NBsVky1QWVpM5fP1R7TeaP76mwrXLW9nm%2FcooQ5CRf3%2FRcqXWvx98PQmzY%2BTp9WRniURq%2BVNC9cEq0Vil%2FIoRcnDrgAzL0RcelHNcdYUsXOhCYi%2Bq%2FbE93NIsbJxaGvjszun0gnfsCMNKE%2Fwbm%2FUKvhjwA%2F0p4NHIyLLYYaQ8yqyJnOwX7BmLT%2BxVoNegXNggYfHrImrkGGdom99%2BbGna1F6KKknqkElJ5nS5WCQcr03xjWbdbnpt8RUCdDX9rOkoaWqzWxEbLimUD7o53mACun9XLHjOLQX04KB6TshAo0SahlpuqiOPbXldn%2FEPRwtC%2FaiJP6XC68G%2FcucxZVckYw%2Fa%2BEwAY6pgHzvvgoE%2Fs3HBxhrFono%2BhnWrl6QdX3uE46asmjaj8m6bVVfYVE0SlbDd4Jcqfso%2Fm4oo6G5tdhgUYxZuQX4VQHTeKQPbLAVLwJYlzV1F2vXpEFMvdKWZUccN2qeoQVj7QOLuvmaa7MskipPHAI%2BidtXNlzFZPM3OMyFIF0xrMzntOVjv%2BMr6zDopGlOJW%2B1n8ZX1YnHWyt%2BsZ%2FeNVgY%2B1L9Slg1dRC&X-Amz-Signature=ad88acdca2f3517e53bca45fea187de1e3320608462bfd97b6896a015fc68186&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTT6YSS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDK%2F6jUCNMz%2BKi2lFqDcMKCKStRgA36d7EGSyyghL%2B%2B6wIfeYfrX%2BFXYYzs4tQABEvmHyz3IVrBMZZbcuxmjwDpdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtNeZi0KEvVBC%2FWntKtwDzqdgmt%2FORrNs6N1G6IkqfzGY6vpF6WokXsnRucTwmpEhTlHKjnKS7ilADg004iyXtw5iAgkTlUaJdZR%2FDTQgK4BVGVELOoCUwukWuzd%2Fh5dJcEPB0uKKhKvaAYZ9l2DsnD5iujOghluYfr56vCtwacVvp9fuc%2F41qL62fVYSyFzC%2B40Fd9N3Gc5sLEtWwgfg%2B0lCfNa0fWX4Zi2BAMhTbPQTpSAbc6Gm04SNYnfTZGu3yGn62VPmadil7Lm0Tr5%2B1lATSjxgFMUalHeR2Zmbj3%2BtmkRa457QaSg%2B0NBsVky1QWVpM5fP1R7TeaP76mwrXLW9nm%2FcooQ5CRf3%2FRcqXWvx98PQmzY%2BTp9WRniURq%2BVNC9cEq0Vil%2FIoRcnDrgAzL0RcelHNcdYUsXOhCYi%2Bq%2FbE93NIsbJxaGvjszun0gnfsCMNKE%2Fwbm%2FUKvhjwA%2F0p4NHIyLLYYaQ8yqyJnOwX7BmLT%2BxVoNegXNggYfHrImrkGGdom99%2BbGna1F6KKknqkElJ5nS5WCQcr03xjWbdbnpt8RUCdDX9rOkoaWqzWxEbLimUD7o53mACun9XLHjOLQX04KB6TshAo0SahlpuqiOPbXldn%2FEPRwtC%2FaiJP6XC68G%2FcucxZVckYw%2Fa%2BEwAY6pgHzvvgoE%2Fs3HBxhrFono%2BhnWrl6QdX3uE46asmjaj8m6bVVfYVE0SlbDd4Jcqfso%2Fm4oo6G5tdhgUYxZuQX4VQHTeKQPbLAVLwJYlzV1F2vXpEFMvdKWZUccN2qeoQVj7QOLuvmaa7MskipPHAI%2BidtXNlzFZPM3OMyFIF0xrMzntOVjv%2BMr6zDopGlOJW%2B1n8ZX1YnHWyt%2BsZ%2FeNVgY%2B1L9Slg1dRC&X-Amz-Signature=8543a0af6f8f76a165dd2df3eba33855a8cbf8825fb351456a70146615bdc17b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTT6YSS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDK%2F6jUCNMz%2BKi2lFqDcMKCKStRgA36d7EGSyyghL%2B%2B6wIfeYfrX%2BFXYYzs4tQABEvmHyz3IVrBMZZbcuxmjwDpdSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMtNeZi0KEvVBC%2FWntKtwDzqdgmt%2FORrNs6N1G6IkqfzGY6vpF6WokXsnRucTwmpEhTlHKjnKS7ilADg004iyXtw5iAgkTlUaJdZR%2FDTQgK4BVGVELOoCUwukWuzd%2Fh5dJcEPB0uKKhKvaAYZ9l2DsnD5iujOghluYfr56vCtwacVvp9fuc%2F41qL62fVYSyFzC%2B40Fd9N3Gc5sLEtWwgfg%2B0lCfNa0fWX4Zi2BAMhTbPQTpSAbc6Gm04SNYnfTZGu3yGn62VPmadil7Lm0Tr5%2B1lATSjxgFMUalHeR2Zmbj3%2BtmkRa457QaSg%2B0NBsVky1QWVpM5fP1R7TeaP76mwrXLW9nm%2FcooQ5CRf3%2FRcqXWvx98PQmzY%2BTp9WRniURq%2BVNC9cEq0Vil%2FIoRcnDrgAzL0RcelHNcdYUsXOhCYi%2Bq%2FbE93NIsbJxaGvjszun0gnfsCMNKE%2Fwbm%2FUKvhjwA%2F0p4NHIyLLYYaQ8yqyJnOwX7BmLT%2BxVoNegXNggYfHrImrkGGdom99%2BbGna1F6KKknqkElJ5nS5WCQcr03xjWbdbnpt8RUCdDX9rOkoaWqzWxEbLimUD7o53mACun9XLHjOLQX04KB6TshAo0SahlpuqiOPbXldn%2FEPRwtC%2FaiJP6XC68G%2FcucxZVckYw%2Fa%2BEwAY6pgHzvvgoE%2Fs3HBxhrFono%2BhnWrl6QdX3uE46asmjaj8m6bVVfYVE0SlbDd4Jcqfso%2Fm4oo6G5tdhgUYxZuQX4VQHTeKQPbLAVLwJYlzV1F2vXpEFMvdKWZUccN2qeoQVj7QOLuvmaa7MskipPHAI%2BidtXNlzFZPM3OMyFIF0xrMzntOVjv%2BMr6zDopGlOJW%2B1n8ZX1YnHWyt%2BsZ%2FeNVgY%2B1L9Slg1dRC&X-Amz-Signature=26c134c9c4e2ad035f3f18b5022f21c093bcfe5eccd9d3a656fc9bef6128ea1d&X-Amz-SignedHeaders=host&x-id=GetObject)
