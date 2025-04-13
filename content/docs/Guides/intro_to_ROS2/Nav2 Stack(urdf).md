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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QN5BZS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDNX2UsqX76HpSFkqo%2BxpgqUp1xbNt1uZ%2FZ3fsjPQ%2BpAwIgfZMxXkqpP6RYxMOOQoPaRaJ0Yumw3HY6dB3hsCo1QMIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcl7Q1W3AM60LpQ7CrcA6QDy2oE%2FbrhDK3Kfj7SSoVvzt7cc7%2Bg1a9RoYsQkdl%2BD2JaPVWom%2FqGL%2F5znjM61%2F3QLEJaU7DlRi2Am9sq6XBysOQAWKqSkohhv1LjWruRMLk3jw3glEt%2BXCp%2BDjKNtbia19CkR0nie0LKOFcecF3DDfFK0ONYKO%2BNW6CWkaigr2HLmxQvOxIMljjSJLZe4x5x7gCWnlBCozt9vuJIhD1Et9TVzJmzImB8eZoNdoTsp%2BdCJwuzn4yiGFWKDecU8eBH775sI5ukVERGQ6gOyzWHtXt7Ckd%2BnfVxTKbjiROEq%2B2qiTGhVo%2F2uS9rIxT%2FQMlTF4R0iNkK98FFYep3lakWW6m8LCq8MlgCkxZsp9sJ2UQgDkJHf1LjssZaT2m2E%2B6N3Syr%2F39QDgY%2FNPFHmrSRg2T9TtK9qKYcN05scejzIMW0%2B3Z2miPcX7pLLmRHeHMBxv7IdpUX5NOBXFAuzJTBeCi1n2hNO94U3c7ko0vIsXt0Nnsxc3KxNhE6XXZER7fEMeEdOlhoxyJeZbvxJoiUBnlN47A6B0zuiBeqQZ6Ept%2FjSIghOuW9FoFNgpdol2jmFklAukVqctK0VXOvcqi8R6wQjyV0ERqnzAerI%2BwQIR5XOGU%2B6ljaH7GCMNi97r8GOqUBMU2PbyO6pCH%2F7W55Vu63IwIsnP5UHhNEXA0QjATVVdWWkpFWZRbj35QeARG9hFrQ%2BE7APJ07DQZ9nYamZ0qX7CN49xAN8sldDKREJ92bYQCdggeNHzVIooEjl1%2FRmT%2B%2B4%2Ba5QtaMTjZFWvGjT7n2cLwHL%2B9eXKz0qR2J3Mt%2F2TlzugkAn8vKaCpJgpropigogE81wU8s5vNM7SkiXKESQyPcGpEs&X-Amz-Signature=983af73475165cfb55f978624bc8be7b9cfbefa74bceb8921da6aa34e6be3403&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QN5BZS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDNX2UsqX76HpSFkqo%2BxpgqUp1xbNt1uZ%2FZ3fsjPQ%2BpAwIgfZMxXkqpP6RYxMOOQoPaRaJ0Yumw3HY6dB3hsCo1QMIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcl7Q1W3AM60LpQ7CrcA6QDy2oE%2FbrhDK3Kfj7SSoVvzt7cc7%2Bg1a9RoYsQkdl%2BD2JaPVWom%2FqGL%2F5znjM61%2F3QLEJaU7DlRi2Am9sq6XBysOQAWKqSkohhv1LjWruRMLk3jw3glEt%2BXCp%2BDjKNtbia19CkR0nie0LKOFcecF3DDfFK0ONYKO%2BNW6CWkaigr2HLmxQvOxIMljjSJLZe4x5x7gCWnlBCozt9vuJIhD1Et9TVzJmzImB8eZoNdoTsp%2BdCJwuzn4yiGFWKDecU8eBH775sI5ukVERGQ6gOyzWHtXt7Ckd%2BnfVxTKbjiROEq%2B2qiTGhVo%2F2uS9rIxT%2FQMlTF4R0iNkK98FFYep3lakWW6m8LCq8MlgCkxZsp9sJ2UQgDkJHf1LjssZaT2m2E%2B6N3Syr%2F39QDgY%2FNPFHmrSRg2T9TtK9qKYcN05scejzIMW0%2B3Z2miPcX7pLLmRHeHMBxv7IdpUX5NOBXFAuzJTBeCi1n2hNO94U3c7ko0vIsXt0Nnsxc3KxNhE6XXZER7fEMeEdOlhoxyJeZbvxJoiUBnlN47A6B0zuiBeqQZ6Ept%2FjSIghOuW9FoFNgpdol2jmFklAukVqctK0VXOvcqi8R6wQjyV0ERqnzAerI%2BwQIR5XOGU%2B6ljaH7GCMNi97r8GOqUBMU2PbyO6pCH%2F7W55Vu63IwIsnP5UHhNEXA0QjATVVdWWkpFWZRbj35QeARG9hFrQ%2BE7APJ07DQZ9nYamZ0qX7CN49xAN8sldDKREJ92bYQCdggeNHzVIooEjl1%2FRmT%2B%2B4%2Ba5QtaMTjZFWvGjT7n2cLwHL%2B9eXKz0qR2J3Mt%2F2TlzugkAn8vKaCpJgpropigogE81wU8s5vNM7SkiXKESQyPcGpEs&X-Amz-Signature=b7380c07553ba0abe6a9e9fca4bf5e4743fc6d152eeced310d6ba7dd572e8a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QN5BZS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDNX2UsqX76HpSFkqo%2BxpgqUp1xbNt1uZ%2FZ3fsjPQ%2BpAwIgfZMxXkqpP6RYxMOOQoPaRaJ0Yumw3HY6dB3hsCo1QMIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcl7Q1W3AM60LpQ7CrcA6QDy2oE%2FbrhDK3Kfj7SSoVvzt7cc7%2Bg1a9RoYsQkdl%2BD2JaPVWom%2FqGL%2F5znjM61%2F3QLEJaU7DlRi2Am9sq6XBysOQAWKqSkohhv1LjWruRMLk3jw3glEt%2BXCp%2BDjKNtbia19CkR0nie0LKOFcecF3DDfFK0ONYKO%2BNW6CWkaigr2HLmxQvOxIMljjSJLZe4x5x7gCWnlBCozt9vuJIhD1Et9TVzJmzImB8eZoNdoTsp%2BdCJwuzn4yiGFWKDecU8eBH775sI5ukVERGQ6gOyzWHtXt7Ckd%2BnfVxTKbjiROEq%2B2qiTGhVo%2F2uS9rIxT%2FQMlTF4R0iNkK98FFYep3lakWW6m8LCq8MlgCkxZsp9sJ2UQgDkJHf1LjssZaT2m2E%2B6N3Syr%2F39QDgY%2FNPFHmrSRg2T9TtK9qKYcN05scejzIMW0%2B3Z2miPcX7pLLmRHeHMBxv7IdpUX5NOBXFAuzJTBeCi1n2hNO94U3c7ko0vIsXt0Nnsxc3KxNhE6XXZER7fEMeEdOlhoxyJeZbvxJoiUBnlN47A6B0zuiBeqQZ6Ept%2FjSIghOuW9FoFNgpdol2jmFklAukVqctK0VXOvcqi8R6wQjyV0ERqnzAerI%2BwQIR5XOGU%2B6ljaH7GCMNi97r8GOqUBMU2PbyO6pCH%2F7W55Vu63IwIsnP5UHhNEXA0QjATVVdWWkpFWZRbj35QeARG9hFrQ%2BE7APJ07DQZ9nYamZ0qX7CN49xAN8sldDKREJ92bYQCdggeNHzVIooEjl1%2FRmT%2B%2B4%2Ba5QtaMTjZFWvGjT7n2cLwHL%2B9eXKz0qR2J3Mt%2F2TlzugkAn8vKaCpJgpropigogE81wU8s5vNM7SkiXKESQyPcGpEs&X-Amz-Signature=3d50e8a6c88399364923216855202e32f62d48df905b40f712974c5e5e50cb85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QN5BZS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDNX2UsqX76HpSFkqo%2BxpgqUp1xbNt1uZ%2FZ3fsjPQ%2BpAwIgfZMxXkqpP6RYxMOOQoPaRaJ0Yumw3HY6dB3hsCo1QMIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcl7Q1W3AM60LpQ7CrcA6QDy2oE%2FbrhDK3Kfj7SSoVvzt7cc7%2Bg1a9RoYsQkdl%2BD2JaPVWom%2FqGL%2F5znjM61%2F3QLEJaU7DlRi2Am9sq6XBysOQAWKqSkohhv1LjWruRMLk3jw3glEt%2BXCp%2BDjKNtbia19CkR0nie0LKOFcecF3DDfFK0ONYKO%2BNW6CWkaigr2HLmxQvOxIMljjSJLZe4x5x7gCWnlBCozt9vuJIhD1Et9TVzJmzImB8eZoNdoTsp%2BdCJwuzn4yiGFWKDecU8eBH775sI5ukVERGQ6gOyzWHtXt7Ckd%2BnfVxTKbjiROEq%2B2qiTGhVo%2F2uS9rIxT%2FQMlTF4R0iNkK98FFYep3lakWW6m8LCq8MlgCkxZsp9sJ2UQgDkJHf1LjssZaT2m2E%2B6N3Syr%2F39QDgY%2FNPFHmrSRg2T9TtK9qKYcN05scejzIMW0%2B3Z2miPcX7pLLmRHeHMBxv7IdpUX5NOBXFAuzJTBeCi1n2hNO94U3c7ko0vIsXt0Nnsxc3KxNhE6XXZER7fEMeEdOlhoxyJeZbvxJoiUBnlN47A6B0zuiBeqQZ6Ept%2FjSIghOuW9FoFNgpdol2jmFklAukVqctK0VXOvcqi8R6wQjyV0ERqnzAerI%2BwQIR5XOGU%2B6ljaH7GCMNi97r8GOqUBMU2PbyO6pCH%2F7W55Vu63IwIsnP5UHhNEXA0QjATVVdWWkpFWZRbj35QeARG9hFrQ%2BE7APJ07DQZ9nYamZ0qX7CN49xAN8sldDKREJ92bYQCdggeNHzVIooEjl1%2FRmT%2B%2B4%2Ba5QtaMTjZFWvGjT7n2cLwHL%2B9eXKz0qR2J3Mt%2F2TlzugkAn8vKaCpJgpropigogE81wU8s5vNM7SkiXKESQyPcGpEs&X-Amz-Signature=ca450b901b70374da0ed59f740de04ccef685788bf65c29c483b232dc895fbae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QN5BZS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDNX2UsqX76HpSFkqo%2BxpgqUp1xbNt1uZ%2FZ3fsjPQ%2BpAwIgfZMxXkqpP6RYxMOOQoPaRaJ0Yumw3HY6dB3hsCo1QMIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcl7Q1W3AM60LpQ7CrcA6QDy2oE%2FbrhDK3Kfj7SSoVvzt7cc7%2Bg1a9RoYsQkdl%2BD2JaPVWom%2FqGL%2F5znjM61%2F3QLEJaU7DlRi2Am9sq6XBysOQAWKqSkohhv1LjWruRMLk3jw3glEt%2BXCp%2BDjKNtbia19CkR0nie0LKOFcecF3DDfFK0ONYKO%2BNW6CWkaigr2HLmxQvOxIMljjSJLZe4x5x7gCWnlBCozt9vuJIhD1Et9TVzJmzImB8eZoNdoTsp%2BdCJwuzn4yiGFWKDecU8eBH775sI5ukVERGQ6gOyzWHtXt7Ckd%2BnfVxTKbjiROEq%2B2qiTGhVo%2F2uS9rIxT%2FQMlTF4R0iNkK98FFYep3lakWW6m8LCq8MlgCkxZsp9sJ2UQgDkJHf1LjssZaT2m2E%2B6N3Syr%2F39QDgY%2FNPFHmrSRg2T9TtK9qKYcN05scejzIMW0%2B3Z2miPcX7pLLmRHeHMBxv7IdpUX5NOBXFAuzJTBeCi1n2hNO94U3c7ko0vIsXt0Nnsxc3KxNhE6XXZER7fEMeEdOlhoxyJeZbvxJoiUBnlN47A6B0zuiBeqQZ6Ept%2FjSIghOuW9FoFNgpdol2jmFklAukVqctK0VXOvcqi8R6wQjyV0ERqnzAerI%2BwQIR5XOGU%2B6ljaH7GCMNi97r8GOqUBMU2PbyO6pCH%2F7W55Vu63IwIsnP5UHhNEXA0QjATVVdWWkpFWZRbj35QeARG9hFrQ%2BE7APJ07DQZ9nYamZ0qX7CN49xAN8sldDKREJ92bYQCdggeNHzVIooEjl1%2FRmT%2B%2B4%2Ba5QtaMTjZFWvGjT7n2cLwHL%2B9eXKz0qR2J3Mt%2F2TlzugkAn8vKaCpJgpropigogE81wU8s5vNM7SkiXKESQyPcGpEs&X-Amz-Signature=32e0cd4ddc4ef426aa2752e19661890c4ac7e8e9af9e298da79398feb76ac7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656QN5BZS%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T170355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDNX2UsqX76HpSFkqo%2BxpgqUp1xbNt1uZ%2FZ3fsjPQ%2BpAwIgfZMxXkqpP6RYxMOOQoPaRaJ0Yumw3HY6dB3hsCo1QMIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcl7Q1W3AM60LpQ7CrcA6QDy2oE%2FbrhDK3Kfj7SSoVvzt7cc7%2Bg1a9RoYsQkdl%2BD2JaPVWom%2FqGL%2F5znjM61%2F3QLEJaU7DlRi2Am9sq6XBysOQAWKqSkohhv1LjWruRMLk3jw3glEt%2BXCp%2BDjKNtbia19CkR0nie0LKOFcecF3DDfFK0ONYKO%2BNW6CWkaigr2HLmxQvOxIMljjSJLZe4x5x7gCWnlBCozt9vuJIhD1Et9TVzJmzImB8eZoNdoTsp%2BdCJwuzn4yiGFWKDecU8eBH775sI5ukVERGQ6gOyzWHtXt7Ckd%2BnfVxTKbjiROEq%2B2qiTGhVo%2F2uS9rIxT%2FQMlTF4R0iNkK98FFYep3lakWW6m8LCq8MlgCkxZsp9sJ2UQgDkJHf1LjssZaT2m2E%2B6N3Syr%2F39QDgY%2FNPFHmrSRg2T9TtK9qKYcN05scejzIMW0%2B3Z2miPcX7pLLmRHeHMBxv7IdpUX5NOBXFAuzJTBeCi1n2hNO94U3c7ko0vIsXt0Nnsxc3KxNhE6XXZER7fEMeEdOlhoxyJeZbvxJoiUBnlN47A6B0zuiBeqQZ6Ept%2FjSIghOuW9FoFNgpdol2jmFklAukVqctK0VXOvcqi8R6wQjyV0ERqnzAerI%2BwQIR5XOGU%2B6ljaH7GCMNi97r8GOqUBMU2PbyO6pCH%2F7W55Vu63IwIsnP5UHhNEXA0QjATVVdWWkpFWZRbj35QeARG9hFrQ%2BE7APJ07DQZ9nYamZ0qX7CN49xAN8sldDKREJ92bYQCdggeNHzVIooEjl1%2FRmT%2B%2B4%2Ba5QtaMTjZFWvGjT7n2cLwHL%2B9eXKz0qR2J3Mt%2F2TlzugkAn8vKaCpJgpropigogE81wU8s5vNM7SkiXKESQyPcGpEs&X-Amz-Signature=e6bb3e01baf5020c942acdd8ff184f89088e0bf191750779a85d53da09fb6421&X-Amz-SignedHeaders=host&x-id=GetObject)
