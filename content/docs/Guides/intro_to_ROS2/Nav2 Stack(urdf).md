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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEFIQV7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBkjo6qFYsgUeWP8wOzBhD3sMTc3tFeYW%2Fx7gXe7GeN3AiALL8wm%2BkgyEStuQBw6bRLuMHiKPBgtu%2B%2BbeuQZanVoIir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFAP1JAmDxCinknt6KtwDzLwSe8%2FBfHIvBKHYTT8E6gQ3vP3w9yVs6rlFAAlePSJAmAzA4KxoTLcfc%2BmBkYauZl6cN7lACzogjB5Ga5iI10%2BUdG3FxAAd1abOEQexwCyuPZaDiLgViZVWySOgOe63rsS%2F1r5euCqEpUcNSYnC1Rhlr0GEWXl5T1EA15LKYfwZ1byvffZe51k%2FM1LXNnOVjpJXViJyd5zb8tB6v3gRwIbh1vWbmBcA4zwsCHwyIFHGkFKudUjY1kxcV7v36BuZpyEKg9lHr8cJHFJrghPMtPnbyW0kxUvlsh%2FheAxfz6f7YCqvwogrUsu26FoUW6cQfq0ovZr2nqWSoYw5m98O9LVCgX7k%2FbR3yhVORwBqOG2H%2BG4KQPdkDlb6G16pgRbgxl3Wg%2BNXxtHVRKMEiywtBTKfMCEIgLv23zFD5PJmx4VPfamE2KemvYQhp%2BoMsrKJJyJng67h600lJMTrgT5zPXvNgl91rs0mm%2BEUWZ9wuXa33lWTSVymjjwP%2BCx8zfb2ibvoEE7vhIX925HfF1Z2Tk3sNewUWEzUzwqtgwE264hCQzv%2Bz34xz39KpJcV71wGr9yBCKx6gSaoaKu2dJwU3BO%2F9hnhGoYjVMWqGk8UWiPCACuFvQ8shG7SAZUwhrzrvgY6pgEyPSGLel3saIU9m%2FF%2BknfbG7IqjUFO%2Bh6qVOjObkwSSmiJ7TpCiqJX8uFMprSJRQKKUxQ2OXTWIEjEzlS8WuzEjs%2Fz4w51ENcDh7WCPclZbvldgGfKbR%2FkJenXRCFN3UN%2BWOkAZHsxf4OcLl%2F7HZemOQz6t9wel%2F3Z4NDFqqMsDipByoU6dymvjpvljqOFkufBT89r4qEbL8yS73e5NYkt30g%2FAme8&X-Amz-Signature=62926c6259b87355a4ffd4caca4ab8ecaae3ae507a4aefdab1b6a95776c27135&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEFIQV7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBkjo6qFYsgUeWP8wOzBhD3sMTc3tFeYW%2Fx7gXe7GeN3AiALL8wm%2BkgyEStuQBw6bRLuMHiKPBgtu%2B%2BbeuQZanVoIir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFAP1JAmDxCinknt6KtwDzLwSe8%2FBfHIvBKHYTT8E6gQ3vP3w9yVs6rlFAAlePSJAmAzA4KxoTLcfc%2BmBkYauZl6cN7lACzogjB5Ga5iI10%2BUdG3FxAAd1abOEQexwCyuPZaDiLgViZVWySOgOe63rsS%2F1r5euCqEpUcNSYnC1Rhlr0GEWXl5T1EA15LKYfwZ1byvffZe51k%2FM1LXNnOVjpJXViJyd5zb8tB6v3gRwIbh1vWbmBcA4zwsCHwyIFHGkFKudUjY1kxcV7v36BuZpyEKg9lHr8cJHFJrghPMtPnbyW0kxUvlsh%2FheAxfz6f7YCqvwogrUsu26FoUW6cQfq0ovZr2nqWSoYw5m98O9LVCgX7k%2FbR3yhVORwBqOG2H%2BG4KQPdkDlb6G16pgRbgxl3Wg%2BNXxtHVRKMEiywtBTKfMCEIgLv23zFD5PJmx4VPfamE2KemvYQhp%2BoMsrKJJyJng67h600lJMTrgT5zPXvNgl91rs0mm%2BEUWZ9wuXa33lWTSVymjjwP%2BCx8zfb2ibvoEE7vhIX925HfF1Z2Tk3sNewUWEzUzwqtgwE264hCQzv%2Bz34xz39KpJcV71wGr9yBCKx6gSaoaKu2dJwU3BO%2F9hnhGoYjVMWqGk8UWiPCACuFvQ8shG7SAZUwhrzrvgY6pgEyPSGLel3saIU9m%2FF%2BknfbG7IqjUFO%2Bh6qVOjObkwSSmiJ7TpCiqJX8uFMprSJRQKKUxQ2OXTWIEjEzlS8WuzEjs%2Fz4w51ENcDh7WCPclZbvldgGfKbR%2FkJenXRCFN3UN%2BWOkAZHsxf4OcLl%2F7HZemOQz6t9wel%2F3Z4NDFqqMsDipByoU6dymvjpvljqOFkufBT89r4qEbL8yS73e5NYkt30g%2FAme8&X-Amz-Signature=1fff4be860640d78ecdee8c5ba62501a7d867216fee665092ce1c710d330b8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEFIQV7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBkjo6qFYsgUeWP8wOzBhD3sMTc3tFeYW%2Fx7gXe7GeN3AiALL8wm%2BkgyEStuQBw6bRLuMHiKPBgtu%2B%2BbeuQZanVoIir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFAP1JAmDxCinknt6KtwDzLwSe8%2FBfHIvBKHYTT8E6gQ3vP3w9yVs6rlFAAlePSJAmAzA4KxoTLcfc%2BmBkYauZl6cN7lACzogjB5Ga5iI10%2BUdG3FxAAd1abOEQexwCyuPZaDiLgViZVWySOgOe63rsS%2F1r5euCqEpUcNSYnC1Rhlr0GEWXl5T1EA15LKYfwZ1byvffZe51k%2FM1LXNnOVjpJXViJyd5zb8tB6v3gRwIbh1vWbmBcA4zwsCHwyIFHGkFKudUjY1kxcV7v36BuZpyEKg9lHr8cJHFJrghPMtPnbyW0kxUvlsh%2FheAxfz6f7YCqvwogrUsu26FoUW6cQfq0ovZr2nqWSoYw5m98O9LVCgX7k%2FbR3yhVORwBqOG2H%2BG4KQPdkDlb6G16pgRbgxl3Wg%2BNXxtHVRKMEiywtBTKfMCEIgLv23zFD5PJmx4VPfamE2KemvYQhp%2BoMsrKJJyJng67h600lJMTrgT5zPXvNgl91rs0mm%2BEUWZ9wuXa33lWTSVymjjwP%2BCx8zfb2ibvoEE7vhIX925HfF1Z2Tk3sNewUWEzUzwqtgwE264hCQzv%2Bz34xz39KpJcV71wGr9yBCKx6gSaoaKu2dJwU3BO%2F9hnhGoYjVMWqGk8UWiPCACuFvQ8shG7SAZUwhrzrvgY6pgEyPSGLel3saIU9m%2FF%2BknfbG7IqjUFO%2Bh6qVOjObkwSSmiJ7TpCiqJX8uFMprSJRQKKUxQ2OXTWIEjEzlS8WuzEjs%2Fz4w51ENcDh7WCPclZbvldgGfKbR%2FkJenXRCFN3UN%2BWOkAZHsxf4OcLl%2F7HZemOQz6t9wel%2F3Z4NDFqqMsDipByoU6dymvjpvljqOFkufBT89r4qEbL8yS73e5NYkt30g%2FAme8&X-Amz-Signature=b7c7039ecdddb961c17f32b760b51567111a6ac0109d3d69d947a67c4fee4466&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEFIQV7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBkjo6qFYsgUeWP8wOzBhD3sMTc3tFeYW%2Fx7gXe7GeN3AiALL8wm%2BkgyEStuQBw6bRLuMHiKPBgtu%2B%2BbeuQZanVoIir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFAP1JAmDxCinknt6KtwDzLwSe8%2FBfHIvBKHYTT8E6gQ3vP3w9yVs6rlFAAlePSJAmAzA4KxoTLcfc%2BmBkYauZl6cN7lACzogjB5Ga5iI10%2BUdG3FxAAd1abOEQexwCyuPZaDiLgViZVWySOgOe63rsS%2F1r5euCqEpUcNSYnC1Rhlr0GEWXl5T1EA15LKYfwZ1byvffZe51k%2FM1LXNnOVjpJXViJyd5zb8tB6v3gRwIbh1vWbmBcA4zwsCHwyIFHGkFKudUjY1kxcV7v36BuZpyEKg9lHr8cJHFJrghPMtPnbyW0kxUvlsh%2FheAxfz6f7YCqvwogrUsu26FoUW6cQfq0ovZr2nqWSoYw5m98O9LVCgX7k%2FbR3yhVORwBqOG2H%2BG4KQPdkDlb6G16pgRbgxl3Wg%2BNXxtHVRKMEiywtBTKfMCEIgLv23zFD5PJmx4VPfamE2KemvYQhp%2BoMsrKJJyJng67h600lJMTrgT5zPXvNgl91rs0mm%2BEUWZ9wuXa33lWTSVymjjwP%2BCx8zfb2ibvoEE7vhIX925HfF1Z2Tk3sNewUWEzUzwqtgwE264hCQzv%2Bz34xz39KpJcV71wGr9yBCKx6gSaoaKu2dJwU3BO%2F9hnhGoYjVMWqGk8UWiPCACuFvQ8shG7SAZUwhrzrvgY6pgEyPSGLel3saIU9m%2FF%2BknfbG7IqjUFO%2Bh6qVOjObkwSSmiJ7TpCiqJX8uFMprSJRQKKUxQ2OXTWIEjEzlS8WuzEjs%2Fz4w51ENcDh7WCPclZbvldgGfKbR%2FkJenXRCFN3UN%2BWOkAZHsxf4OcLl%2F7HZemOQz6t9wel%2F3Z4NDFqqMsDipByoU6dymvjpvljqOFkufBT89r4qEbL8yS73e5NYkt30g%2FAme8&X-Amz-Signature=63125dc99b51648b926d83ba3df880b9cef8d2ebb7ab541786fbc9f011e0ab75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEFIQV7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBkjo6qFYsgUeWP8wOzBhD3sMTc3tFeYW%2Fx7gXe7GeN3AiALL8wm%2BkgyEStuQBw6bRLuMHiKPBgtu%2B%2BbeuQZanVoIir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFAP1JAmDxCinknt6KtwDzLwSe8%2FBfHIvBKHYTT8E6gQ3vP3w9yVs6rlFAAlePSJAmAzA4KxoTLcfc%2BmBkYauZl6cN7lACzogjB5Ga5iI10%2BUdG3FxAAd1abOEQexwCyuPZaDiLgViZVWySOgOe63rsS%2F1r5euCqEpUcNSYnC1Rhlr0GEWXl5T1EA15LKYfwZ1byvffZe51k%2FM1LXNnOVjpJXViJyd5zb8tB6v3gRwIbh1vWbmBcA4zwsCHwyIFHGkFKudUjY1kxcV7v36BuZpyEKg9lHr8cJHFJrghPMtPnbyW0kxUvlsh%2FheAxfz6f7YCqvwogrUsu26FoUW6cQfq0ovZr2nqWSoYw5m98O9LVCgX7k%2FbR3yhVORwBqOG2H%2BG4KQPdkDlb6G16pgRbgxl3Wg%2BNXxtHVRKMEiywtBTKfMCEIgLv23zFD5PJmx4VPfamE2KemvYQhp%2BoMsrKJJyJng67h600lJMTrgT5zPXvNgl91rs0mm%2BEUWZ9wuXa33lWTSVymjjwP%2BCx8zfb2ibvoEE7vhIX925HfF1Z2Tk3sNewUWEzUzwqtgwE264hCQzv%2Bz34xz39KpJcV71wGr9yBCKx6gSaoaKu2dJwU3BO%2F9hnhGoYjVMWqGk8UWiPCACuFvQ8shG7SAZUwhrzrvgY6pgEyPSGLel3saIU9m%2FF%2BknfbG7IqjUFO%2Bh6qVOjObkwSSmiJ7TpCiqJX8uFMprSJRQKKUxQ2OXTWIEjEzlS8WuzEjs%2Fz4w51ENcDh7WCPclZbvldgGfKbR%2FkJenXRCFN3UN%2BWOkAZHsxf4OcLl%2F7HZemOQz6t9wel%2F3Z4NDFqqMsDipByoU6dymvjpvljqOFkufBT89r4qEbL8yS73e5NYkt30g%2FAme8&X-Amz-Signature=0c16954be90d5884672396738a9120ddbc21b463cdb921efa37589167ab6f759&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FEFIQV7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIBkjo6qFYsgUeWP8wOzBhD3sMTc3tFeYW%2Fx7gXe7GeN3AiALL8wm%2BkgyEStuQBw6bRLuMHiKPBgtu%2B%2BbeuQZanVoIir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMFAP1JAmDxCinknt6KtwDzLwSe8%2FBfHIvBKHYTT8E6gQ3vP3w9yVs6rlFAAlePSJAmAzA4KxoTLcfc%2BmBkYauZl6cN7lACzogjB5Ga5iI10%2BUdG3FxAAd1abOEQexwCyuPZaDiLgViZVWySOgOe63rsS%2F1r5euCqEpUcNSYnC1Rhlr0GEWXl5T1EA15LKYfwZ1byvffZe51k%2FM1LXNnOVjpJXViJyd5zb8tB6v3gRwIbh1vWbmBcA4zwsCHwyIFHGkFKudUjY1kxcV7v36BuZpyEKg9lHr8cJHFJrghPMtPnbyW0kxUvlsh%2FheAxfz6f7YCqvwogrUsu26FoUW6cQfq0ovZr2nqWSoYw5m98O9LVCgX7k%2FbR3yhVORwBqOG2H%2BG4KQPdkDlb6G16pgRbgxl3Wg%2BNXxtHVRKMEiywtBTKfMCEIgLv23zFD5PJmx4VPfamE2KemvYQhp%2BoMsrKJJyJng67h600lJMTrgT5zPXvNgl91rs0mm%2BEUWZ9wuXa33lWTSVymjjwP%2BCx8zfb2ibvoEE7vhIX925HfF1Z2Tk3sNewUWEzUzwqtgwE264hCQzv%2Bz34xz39KpJcV71wGr9yBCKx6gSaoaKu2dJwU3BO%2F9hnhGoYjVMWqGk8UWiPCACuFvQ8shG7SAZUwhrzrvgY6pgEyPSGLel3saIU9m%2FF%2BknfbG7IqjUFO%2Bh6qVOjObkwSSmiJ7TpCiqJX8uFMprSJRQKKUxQ2OXTWIEjEzlS8WuzEjs%2Fz4w51ENcDh7WCPclZbvldgGfKbR%2FkJenXRCFN3UN%2BWOkAZHsxf4OcLl%2F7HZemOQz6t9wel%2F3Z4NDFqqMsDipByoU6dymvjpvljqOFkufBT89r4qEbL8yS73e5NYkt30g%2FAme8&X-Amz-Signature=00c66f9f99ad68aef3aa0cda33234c3be28e5fe3d8b8cfe3589bbf8ae8d7100b&X-Amz-SignedHeaders=host&x-id=GetObject)
