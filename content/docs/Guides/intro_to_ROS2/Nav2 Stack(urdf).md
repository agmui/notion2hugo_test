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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W565VWOQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDndIak18nyuO4w%2BplrQdF3QatlzX15uAA6jmC1MVhUSwIgKJBsPjMtoXdrAhSQ4HUuuBkQaEyE6dL9p07FPA89P3Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1MFDOAmmD53wOiwyrcAwBe96C%2FaQ35W5veAbkz7HgNnVKOJCjb7MexVTjcT6juf063RxxGFhPk9K7p%2F8wFNqx9XZJSmvOjEkhyqrjzby67nPcoRSW9XggC3PstLZ8kFM7zinzwZ9203xPzZAfh2ENU4gqJBpv9HrApUpqWVeJITF%2FWYFFP2Jr20EK4%2FwlXi7dW5mdZpK71fYEWQ%2BSCDYMNeADC%2Bw5wjLxkjOoN0LeCTuG9eIBKQNEP8DnEXPDkYXV6VicMuNml1wrOCCf5J6eokm6V2BHtAYvAk10cpMrjWrh5OumWpxxzA6wWA6h%2BeI7c1zwz5u%2B9h5oAr8lJKvZdxrqQinPzk8xLckSFPqewr5hflctCRJiqPgz2pfPKnV2pGMURblb%2Baba69VveljOrYWaBcJ2IbPQeATJ5Hwib0ornitTfyt5%2FsJmPBtYYUzL%2B9Y9wFTBZzdjsvbvTbQm8ew3OU8yYX1T0hYR6BdTuX8OcZjV4hRDEwggi42sEBarxbEl633oVtsiV99Bu%2FcH6KgfYhhNCG4T4QO9kTIP7lgcOvHzjZtBArFAu6b6oTko4bNWACnP0Kax%2FpTMse%2BDTLE7oQY3VooVldKYhBxKFvXhj%2BOkEyQqx32SoyGLsLTiFUtFoF0Jv8G3vMIX5vL0GOqUB8hjMrfE%2F8YYeEIwx1S5RW%2Be5h6bze2ruj3i7gZeeazpgnoWgAh9Vg%2FFFdwrXYCfvO8VaLtIkWlgE1EAhr7Gvi6KMVHfJNu%2Bg3RRgjOetmjPBSMtsvvruLLhwRG6CdNnUzpu036E1pqLL0tBNV%2BSpBmZJK9Rn0ZgkDkXXsN3gcbzYUyR4lgJW8h6ZFB1qkDkyM1Ijkw2zSgIFIHzoqXuEbqE%2F7S6u&X-Amz-Signature=7e3d54eba5beecd0e1fbd25574d3aab3f9053d2506635b4b20158ccb7595a049&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W565VWOQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDndIak18nyuO4w%2BplrQdF3QatlzX15uAA6jmC1MVhUSwIgKJBsPjMtoXdrAhSQ4HUuuBkQaEyE6dL9p07FPA89P3Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1MFDOAmmD53wOiwyrcAwBe96C%2FaQ35W5veAbkz7HgNnVKOJCjb7MexVTjcT6juf063RxxGFhPk9K7p%2F8wFNqx9XZJSmvOjEkhyqrjzby67nPcoRSW9XggC3PstLZ8kFM7zinzwZ9203xPzZAfh2ENU4gqJBpv9HrApUpqWVeJITF%2FWYFFP2Jr20EK4%2FwlXi7dW5mdZpK71fYEWQ%2BSCDYMNeADC%2Bw5wjLxkjOoN0LeCTuG9eIBKQNEP8DnEXPDkYXV6VicMuNml1wrOCCf5J6eokm6V2BHtAYvAk10cpMrjWrh5OumWpxxzA6wWA6h%2BeI7c1zwz5u%2B9h5oAr8lJKvZdxrqQinPzk8xLckSFPqewr5hflctCRJiqPgz2pfPKnV2pGMURblb%2Baba69VveljOrYWaBcJ2IbPQeATJ5Hwib0ornitTfyt5%2FsJmPBtYYUzL%2B9Y9wFTBZzdjsvbvTbQm8ew3OU8yYX1T0hYR6BdTuX8OcZjV4hRDEwggi42sEBarxbEl633oVtsiV99Bu%2FcH6KgfYhhNCG4T4QO9kTIP7lgcOvHzjZtBArFAu6b6oTko4bNWACnP0Kax%2FpTMse%2BDTLE7oQY3VooVldKYhBxKFvXhj%2BOkEyQqx32SoyGLsLTiFUtFoF0Jv8G3vMIX5vL0GOqUB8hjMrfE%2F8YYeEIwx1S5RW%2Be5h6bze2ruj3i7gZeeazpgnoWgAh9Vg%2FFFdwrXYCfvO8VaLtIkWlgE1EAhr7Gvi6KMVHfJNu%2Bg3RRgjOetmjPBSMtsvvruLLhwRG6CdNnUzpu036E1pqLL0tBNV%2BSpBmZJK9Rn0ZgkDkXXsN3gcbzYUyR4lgJW8h6ZFB1qkDkyM1Ijkw2zSgIFIHzoqXuEbqE%2F7S6u&X-Amz-Signature=247dcb8132786e4f56f9da891f8ad0395f794d0274ad22d752d4632b37611a87&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W565VWOQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDndIak18nyuO4w%2BplrQdF3QatlzX15uAA6jmC1MVhUSwIgKJBsPjMtoXdrAhSQ4HUuuBkQaEyE6dL9p07FPA89P3Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1MFDOAmmD53wOiwyrcAwBe96C%2FaQ35W5veAbkz7HgNnVKOJCjb7MexVTjcT6juf063RxxGFhPk9K7p%2F8wFNqx9XZJSmvOjEkhyqrjzby67nPcoRSW9XggC3PstLZ8kFM7zinzwZ9203xPzZAfh2ENU4gqJBpv9HrApUpqWVeJITF%2FWYFFP2Jr20EK4%2FwlXi7dW5mdZpK71fYEWQ%2BSCDYMNeADC%2Bw5wjLxkjOoN0LeCTuG9eIBKQNEP8DnEXPDkYXV6VicMuNml1wrOCCf5J6eokm6V2BHtAYvAk10cpMrjWrh5OumWpxxzA6wWA6h%2BeI7c1zwz5u%2B9h5oAr8lJKvZdxrqQinPzk8xLckSFPqewr5hflctCRJiqPgz2pfPKnV2pGMURblb%2Baba69VveljOrYWaBcJ2IbPQeATJ5Hwib0ornitTfyt5%2FsJmPBtYYUzL%2B9Y9wFTBZzdjsvbvTbQm8ew3OU8yYX1T0hYR6BdTuX8OcZjV4hRDEwggi42sEBarxbEl633oVtsiV99Bu%2FcH6KgfYhhNCG4T4QO9kTIP7lgcOvHzjZtBArFAu6b6oTko4bNWACnP0Kax%2FpTMse%2BDTLE7oQY3VooVldKYhBxKFvXhj%2BOkEyQqx32SoyGLsLTiFUtFoF0Jv8G3vMIX5vL0GOqUB8hjMrfE%2F8YYeEIwx1S5RW%2Be5h6bze2ruj3i7gZeeazpgnoWgAh9Vg%2FFFdwrXYCfvO8VaLtIkWlgE1EAhr7Gvi6KMVHfJNu%2Bg3RRgjOetmjPBSMtsvvruLLhwRG6CdNnUzpu036E1pqLL0tBNV%2BSpBmZJK9Rn0ZgkDkXXsN3gcbzYUyR4lgJW8h6ZFB1qkDkyM1Ijkw2zSgIFIHzoqXuEbqE%2F7S6u&X-Amz-Signature=6130bac4a442863a83ffd5fc52132f911ecf71d9218dbfe5db5aa2bafac6440b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W565VWOQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDndIak18nyuO4w%2BplrQdF3QatlzX15uAA6jmC1MVhUSwIgKJBsPjMtoXdrAhSQ4HUuuBkQaEyE6dL9p07FPA89P3Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1MFDOAmmD53wOiwyrcAwBe96C%2FaQ35W5veAbkz7HgNnVKOJCjb7MexVTjcT6juf063RxxGFhPk9K7p%2F8wFNqx9XZJSmvOjEkhyqrjzby67nPcoRSW9XggC3PstLZ8kFM7zinzwZ9203xPzZAfh2ENU4gqJBpv9HrApUpqWVeJITF%2FWYFFP2Jr20EK4%2FwlXi7dW5mdZpK71fYEWQ%2BSCDYMNeADC%2Bw5wjLxkjOoN0LeCTuG9eIBKQNEP8DnEXPDkYXV6VicMuNml1wrOCCf5J6eokm6V2BHtAYvAk10cpMrjWrh5OumWpxxzA6wWA6h%2BeI7c1zwz5u%2B9h5oAr8lJKvZdxrqQinPzk8xLckSFPqewr5hflctCRJiqPgz2pfPKnV2pGMURblb%2Baba69VveljOrYWaBcJ2IbPQeATJ5Hwib0ornitTfyt5%2FsJmPBtYYUzL%2B9Y9wFTBZzdjsvbvTbQm8ew3OU8yYX1T0hYR6BdTuX8OcZjV4hRDEwggi42sEBarxbEl633oVtsiV99Bu%2FcH6KgfYhhNCG4T4QO9kTIP7lgcOvHzjZtBArFAu6b6oTko4bNWACnP0Kax%2FpTMse%2BDTLE7oQY3VooVldKYhBxKFvXhj%2BOkEyQqx32SoyGLsLTiFUtFoF0Jv8G3vMIX5vL0GOqUB8hjMrfE%2F8YYeEIwx1S5RW%2Be5h6bze2ruj3i7gZeeazpgnoWgAh9Vg%2FFFdwrXYCfvO8VaLtIkWlgE1EAhr7Gvi6KMVHfJNu%2Bg3RRgjOetmjPBSMtsvvruLLhwRG6CdNnUzpu036E1pqLL0tBNV%2BSpBmZJK9Rn0ZgkDkXXsN3gcbzYUyR4lgJW8h6ZFB1qkDkyM1Ijkw2zSgIFIHzoqXuEbqE%2F7S6u&X-Amz-Signature=6e64ee57ee493b82901b9b512cf69ceb304acd5221cac167faa42f9a107f5e36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W565VWOQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDndIak18nyuO4w%2BplrQdF3QatlzX15uAA6jmC1MVhUSwIgKJBsPjMtoXdrAhSQ4HUuuBkQaEyE6dL9p07FPA89P3Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1MFDOAmmD53wOiwyrcAwBe96C%2FaQ35W5veAbkz7HgNnVKOJCjb7MexVTjcT6juf063RxxGFhPk9K7p%2F8wFNqx9XZJSmvOjEkhyqrjzby67nPcoRSW9XggC3PstLZ8kFM7zinzwZ9203xPzZAfh2ENU4gqJBpv9HrApUpqWVeJITF%2FWYFFP2Jr20EK4%2FwlXi7dW5mdZpK71fYEWQ%2BSCDYMNeADC%2Bw5wjLxkjOoN0LeCTuG9eIBKQNEP8DnEXPDkYXV6VicMuNml1wrOCCf5J6eokm6V2BHtAYvAk10cpMrjWrh5OumWpxxzA6wWA6h%2BeI7c1zwz5u%2B9h5oAr8lJKvZdxrqQinPzk8xLckSFPqewr5hflctCRJiqPgz2pfPKnV2pGMURblb%2Baba69VveljOrYWaBcJ2IbPQeATJ5Hwib0ornitTfyt5%2FsJmPBtYYUzL%2B9Y9wFTBZzdjsvbvTbQm8ew3OU8yYX1T0hYR6BdTuX8OcZjV4hRDEwggi42sEBarxbEl633oVtsiV99Bu%2FcH6KgfYhhNCG4T4QO9kTIP7lgcOvHzjZtBArFAu6b6oTko4bNWACnP0Kax%2FpTMse%2BDTLE7oQY3VooVldKYhBxKFvXhj%2BOkEyQqx32SoyGLsLTiFUtFoF0Jv8G3vMIX5vL0GOqUB8hjMrfE%2F8YYeEIwx1S5RW%2Be5h6bze2ruj3i7gZeeazpgnoWgAh9Vg%2FFFdwrXYCfvO8VaLtIkWlgE1EAhr7Gvi6KMVHfJNu%2Bg3RRgjOetmjPBSMtsvvruLLhwRG6CdNnUzpu036E1pqLL0tBNV%2BSpBmZJK9Rn0ZgkDkXXsN3gcbzYUyR4lgJW8h6ZFB1qkDkyM1Ijkw2zSgIFIHzoqXuEbqE%2F7S6u&X-Amz-Signature=53bb7a428be3c8be22c842bffc9ca8361cffa7b9720888a0da2cb349742105d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W565VWOQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDndIak18nyuO4w%2BplrQdF3QatlzX15uAA6jmC1MVhUSwIgKJBsPjMtoXdrAhSQ4HUuuBkQaEyE6dL9p07FPA89P3Iq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDH1MFDOAmmD53wOiwyrcAwBe96C%2FaQ35W5veAbkz7HgNnVKOJCjb7MexVTjcT6juf063RxxGFhPk9K7p%2F8wFNqx9XZJSmvOjEkhyqrjzby67nPcoRSW9XggC3PstLZ8kFM7zinzwZ9203xPzZAfh2ENU4gqJBpv9HrApUpqWVeJITF%2FWYFFP2Jr20EK4%2FwlXi7dW5mdZpK71fYEWQ%2BSCDYMNeADC%2Bw5wjLxkjOoN0LeCTuG9eIBKQNEP8DnEXPDkYXV6VicMuNml1wrOCCf5J6eokm6V2BHtAYvAk10cpMrjWrh5OumWpxxzA6wWA6h%2BeI7c1zwz5u%2B9h5oAr8lJKvZdxrqQinPzk8xLckSFPqewr5hflctCRJiqPgz2pfPKnV2pGMURblb%2Baba69VveljOrYWaBcJ2IbPQeATJ5Hwib0ornitTfyt5%2FsJmPBtYYUzL%2B9Y9wFTBZzdjsvbvTbQm8ew3OU8yYX1T0hYR6BdTuX8OcZjV4hRDEwggi42sEBarxbEl633oVtsiV99Bu%2FcH6KgfYhhNCG4T4QO9kTIP7lgcOvHzjZtBArFAu6b6oTko4bNWACnP0Kax%2FpTMse%2BDTLE7oQY3VooVldKYhBxKFvXhj%2BOkEyQqx32SoyGLsLTiFUtFoF0Jv8G3vMIX5vL0GOqUB8hjMrfE%2F8YYeEIwx1S5RW%2Be5h6bze2ruj3i7gZeeazpgnoWgAh9Vg%2FFFdwrXYCfvO8VaLtIkWlgE1EAhr7Gvi6KMVHfJNu%2Bg3RRgjOetmjPBSMtsvvruLLhwRG6CdNnUzpu036E1pqLL0tBNV%2BSpBmZJK9Rn0ZgkDkXXsN3gcbzYUyR4lgJW8h6ZFB1qkDkyM1Ijkw2zSgIFIHzoqXuEbqE%2F7S6u&X-Amz-Signature=db41083bff4402901d537d3aefe20b98297546ddefa23342e405896e93858f66&X-Amz-SignedHeaders=host&x-id=GetObject)
