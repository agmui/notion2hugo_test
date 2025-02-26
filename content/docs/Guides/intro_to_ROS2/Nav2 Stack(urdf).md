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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7N3GO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAwnlJeTL7EjyjaX19uWgcte%2FBh3uWNOChwxnRUeLlEpAiEAgYa7CDa5brR3LkCQORrzOIWV8Z31XBf3f25Yf5AldU8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFtABeVnppFAvMjLYSrcA8GwF05Mx1vymmPs08nj%2Bdx%2Fgi4PhhPsYestctSZqX4hAAFONyDXAWpNSOhUmkh6SIOZUhGx8AA6PCJINENv%2FDgZlAanb%2FgKr04oypQqWrvKclprmnH2dw%2FErxUEeCunzKwcA%2FvLqFHSFqe8TArMqE9gMhOKnlgW2q3tEEH3PCA%2B5hPvFTb97OAOjX1eUBT5viGHStyF%2B%2BwiashwKNRgg8t7ociGo8CgMnH7CayLFJYaeaEZYRHo6HLtY6K%2FCy1oBVIFGvtPWpJdCVzMEjkLgngM%2F4F%2B%2B3GlyrXD5Jd0vGDQRIAC35ywceD5U%2Fs%2F1Ka62gFdh%2BO2FPNWGanbK8iNBJI7oaLuvQZrlqLqAX5gI2uREp0KhRdp7WbYgirVNLEOhHkzxoxKoqoZjFaImQYSqXMPQqFRCUQKBcB%2BT%2FUOzSLO6vsxuKRYf3K2FQkfavCctpKCQkr7rNnxLxejcDKNP8MdMfRgaz3VTTmQ9%2FyqrebqOIWSCNsAbFZe6Xz7hZs%2F0u92ZwRLVQJKG%2BikkvfAEkeUXA%2B2Hc8EyWy8B0Kq16zFc7knrke8xrWJCcYsZpeq5eVhXH3Ty2ySimXAXVTwGfjOk5aSXyeaG8lAdueTckcs7xj6DgQU8oqdRDFEMMm9%2Bb0GOqUBgQFDZzCkFk7H62NB9j%2BVtGG574qGr8yMWhZsQJLmNH9BaVmBNmXPMop%2BJhVmJYEyQM6OaZu7MOE8DmQfdNO9ZuZLF6jotKJPvyHIfpBPdZ%2Fg9TXMm%2FR7HHn%2B8z4GdrR3E4R%2F6qLj76%2FKDRlCWlclOghoyABdKv6naQhe7%2FWC7IhrxZ8Ts667NM8Y0M8RRDXnVV4pc67VHk0Uuc2FfM2BKZXmfpSZ&X-Amz-Signature=4e2c0173b492d295a35fcc547e85488718316169376b31292ecc635390ca3e98&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7N3GO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAwnlJeTL7EjyjaX19uWgcte%2FBh3uWNOChwxnRUeLlEpAiEAgYa7CDa5brR3LkCQORrzOIWV8Z31XBf3f25Yf5AldU8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFtABeVnppFAvMjLYSrcA8GwF05Mx1vymmPs08nj%2Bdx%2Fgi4PhhPsYestctSZqX4hAAFONyDXAWpNSOhUmkh6SIOZUhGx8AA6PCJINENv%2FDgZlAanb%2FgKr04oypQqWrvKclprmnH2dw%2FErxUEeCunzKwcA%2FvLqFHSFqe8TArMqE9gMhOKnlgW2q3tEEH3PCA%2B5hPvFTb97OAOjX1eUBT5viGHStyF%2B%2BwiashwKNRgg8t7ociGo8CgMnH7CayLFJYaeaEZYRHo6HLtY6K%2FCy1oBVIFGvtPWpJdCVzMEjkLgngM%2F4F%2B%2B3GlyrXD5Jd0vGDQRIAC35ywceD5U%2Fs%2F1Ka62gFdh%2BO2FPNWGanbK8iNBJI7oaLuvQZrlqLqAX5gI2uREp0KhRdp7WbYgirVNLEOhHkzxoxKoqoZjFaImQYSqXMPQqFRCUQKBcB%2BT%2FUOzSLO6vsxuKRYf3K2FQkfavCctpKCQkr7rNnxLxejcDKNP8MdMfRgaz3VTTmQ9%2FyqrebqOIWSCNsAbFZe6Xz7hZs%2F0u92ZwRLVQJKG%2BikkvfAEkeUXA%2B2Hc8EyWy8B0Kq16zFc7knrke8xrWJCcYsZpeq5eVhXH3Ty2ySimXAXVTwGfjOk5aSXyeaG8lAdueTckcs7xj6DgQU8oqdRDFEMMm9%2Bb0GOqUBgQFDZzCkFk7H62NB9j%2BVtGG574qGr8yMWhZsQJLmNH9BaVmBNmXPMop%2BJhVmJYEyQM6OaZu7MOE8DmQfdNO9ZuZLF6jotKJPvyHIfpBPdZ%2Fg9TXMm%2FR7HHn%2B8z4GdrR3E4R%2F6qLj76%2FKDRlCWlclOghoyABdKv6naQhe7%2FWC7IhrxZ8Ts667NM8Y0M8RRDXnVV4pc67VHk0Uuc2FfM2BKZXmfpSZ&X-Amz-Signature=c23b2aae7f1442d6970b118aebc9b557b720fecde771364f733e0f37834e0803&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7N3GO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAwnlJeTL7EjyjaX19uWgcte%2FBh3uWNOChwxnRUeLlEpAiEAgYa7CDa5brR3LkCQORrzOIWV8Z31XBf3f25Yf5AldU8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFtABeVnppFAvMjLYSrcA8GwF05Mx1vymmPs08nj%2Bdx%2Fgi4PhhPsYestctSZqX4hAAFONyDXAWpNSOhUmkh6SIOZUhGx8AA6PCJINENv%2FDgZlAanb%2FgKr04oypQqWrvKclprmnH2dw%2FErxUEeCunzKwcA%2FvLqFHSFqe8TArMqE9gMhOKnlgW2q3tEEH3PCA%2B5hPvFTb97OAOjX1eUBT5viGHStyF%2B%2BwiashwKNRgg8t7ociGo8CgMnH7CayLFJYaeaEZYRHo6HLtY6K%2FCy1oBVIFGvtPWpJdCVzMEjkLgngM%2F4F%2B%2B3GlyrXD5Jd0vGDQRIAC35ywceD5U%2Fs%2F1Ka62gFdh%2BO2FPNWGanbK8iNBJI7oaLuvQZrlqLqAX5gI2uREp0KhRdp7WbYgirVNLEOhHkzxoxKoqoZjFaImQYSqXMPQqFRCUQKBcB%2BT%2FUOzSLO6vsxuKRYf3K2FQkfavCctpKCQkr7rNnxLxejcDKNP8MdMfRgaz3VTTmQ9%2FyqrebqOIWSCNsAbFZe6Xz7hZs%2F0u92ZwRLVQJKG%2BikkvfAEkeUXA%2B2Hc8EyWy8B0Kq16zFc7knrke8xrWJCcYsZpeq5eVhXH3Ty2ySimXAXVTwGfjOk5aSXyeaG8lAdueTckcs7xj6DgQU8oqdRDFEMMm9%2Bb0GOqUBgQFDZzCkFk7H62NB9j%2BVtGG574qGr8yMWhZsQJLmNH9BaVmBNmXPMop%2BJhVmJYEyQM6OaZu7MOE8DmQfdNO9ZuZLF6jotKJPvyHIfpBPdZ%2Fg9TXMm%2FR7HHn%2B8z4GdrR3E4R%2F6qLj76%2FKDRlCWlclOghoyABdKv6naQhe7%2FWC7IhrxZ8Ts667NM8Y0M8RRDXnVV4pc67VHk0Uuc2FfM2BKZXmfpSZ&X-Amz-Signature=6f5d93b52593ec50120a2e121084e6e5e69436c1046c1e0018ee70d7f501dd89&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7N3GO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAwnlJeTL7EjyjaX19uWgcte%2FBh3uWNOChwxnRUeLlEpAiEAgYa7CDa5brR3LkCQORrzOIWV8Z31XBf3f25Yf5AldU8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFtABeVnppFAvMjLYSrcA8GwF05Mx1vymmPs08nj%2Bdx%2Fgi4PhhPsYestctSZqX4hAAFONyDXAWpNSOhUmkh6SIOZUhGx8AA6PCJINENv%2FDgZlAanb%2FgKr04oypQqWrvKclprmnH2dw%2FErxUEeCunzKwcA%2FvLqFHSFqe8TArMqE9gMhOKnlgW2q3tEEH3PCA%2B5hPvFTb97OAOjX1eUBT5viGHStyF%2B%2BwiashwKNRgg8t7ociGo8CgMnH7CayLFJYaeaEZYRHo6HLtY6K%2FCy1oBVIFGvtPWpJdCVzMEjkLgngM%2F4F%2B%2B3GlyrXD5Jd0vGDQRIAC35ywceD5U%2Fs%2F1Ka62gFdh%2BO2FPNWGanbK8iNBJI7oaLuvQZrlqLqAX5gI2uREp0KhRdp7WbYgirVNLEOhHkzxoxKoqoZjFaImQYSqXMPQqFRCUQKBcB%2BT%2FUOzSLO6vsxuKRYf3K2FQkfavCctpKCQkr7rNnxLxejcDKNP8MdMfRgaz3VTTmQ9%2FyqrebqOIWSCNsAbFZe6Xz7hZs%2F0u92ZwRLVQJKG%2BikkvfAEkeUXA%2B2Hc8EyWy8B0Kq16zFc7knrke8xrWJCcYsZpeq5eVhXH3Ty2ySimXAXVTwGfjOk5aSXyeaG8lAdueTckcs7xj6DgQU8oqdRDFEMMm9%2Bb0GOqUBgQFDZzCkFk7H62NB9j%2BVtGG574qGr8yMWhZsQJLmNH9BaVmBNmXPMop%2BJhVmJYEyQM6OaZu7MOE8DmQfdNO9ZuZLF6jotKJPvyHIfpBPdZ%2Fg9TXMm%2FR7HHn%2B8z4GdrR3E4R%2F6qLj76%2FKDRlCWlclOghoyABdKv6naQhe7%2FWC7IhrxZ8Ts667NM8Y0M8RRDXnVV4pc67VHk0Uuc2FfM2BKZXmfpSZ&X-Amz-Signature=20d8514f68c7930aac9b7a5dc88cbe8643c3312b7aa3b5b7d1a50a7193893bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7N3GO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAwnlJeTL7EjyjaX19uWgcte%2FBh3uWNOChwxnRUeLlEpAiEAgYa7CDa5brR3LkCQORrzOIWV8Z31XBf3f25Yf5AldU8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFtABeVnppFAvMjLYSrcA8GwF05Mx1vymmPs08nj%2Bdx%2Fgi4PhhPsYestctSZqX4hAAFONyDXAWpNSOhUmkh6SIOZUhGx8AA6PCJINENv%2FDgZlAanb%2FgKr04oypQqWrvKclprmnH2dw%2FErxUEeCunzKwcA%2FvLqFHSFqe8TArMqE9gMhOKnlgW2q3tEEH3PCA%2B5hPvFTb97OAOjX1eUBT5viGHStyF%2B%2BwiashwKNRgg8t7ociGo8CgMnH7CayLFJYaeaEZYRHo6HLtY6K%2FCy1oBVIFGvtPWpJdCVzMEjkLgngM%2F4F%2B%2B3GlyrXD5Jd0vGDQRIAC35ywceD5U%2Fs%2F1Ka62gFdh%2BO2FPNWGanbK8iNBJI7oaLuvQZrlqLqAX5gI2uREp0KhRdp7WbYgirVNLEOhHkzxoxKoqoZjFaImQYSqXMPQqFRCUQKBcB%2BT%2FUOzSLO6vsxuKRYf3K2FQkfavCctpKCQkr7rNnxLxejcDKNP8MdMfRgaz3VTTmQ9%2FyqrebqOIWSCNsAbFZe6Xz7hZs%2F0u92ZwRLVQJKG%2BikkvfAEkeUXA%2B2Hc8EyWy8B0Kq16zFc7knrke8xrWJCcYsZpeq5eVhXH3Ty2ySimXAXVTwGfjOk5aSXyeaG8lAdueTckcs7xj6DgQU8oqdRDFEMMm9%2Bb0GOqUBgQFDZzCkFk7H62NB9j%2BVtGG574qGr8yMWhZsQJLmNH9BaVmBNmXPMop%2BJhVmJYEyQM6OaZu7MOE8DmQfdNO9ZuZLF6jotKJPvyHIfpBPdZ%2Fg9TXMm%2FR7HHn%2B8z4GdrR3E4R%2F6qLj76%2FKDRlCWlclOghoyABdKv6naQhe7%2FWC7IhrxZ8Ts667NM8Y0M8RRDXnVV4pc67VHk0Uuc2FfM2BKZXmfpSZ&X-Amz-Signature=8e4ac641c9909a11d9d27ae8c9777f91396c6018ba15bef9ddc947e70246b98e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IT7N3GO%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAwnlJeTL7EjyjaX19uWgcte%2FBh3uWNOChwxnRUeLlEpAiEAgYa7CDa5brR3LkCQORrzOIWV8Z31XBf3f25Yf5AldU8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDFtABeVnppFAvMjLYSrcA8GwF05Mx1vymmPs08nj%2Bdx%2Fgi4PhhPsYestctSZqX4hAAFONyDXAWpNSOhUmkh6SIOZUhGx8AA6PCJINENv%2FDgZlAanb%2FgKr04oypQqWrvKclprmnH2dw%2FErxUEeCunzKwcA%2FvLqFHSFqe8TArMqE9gMhOKnlgW2q3tEEH3PCA%2B5hPvFTb97OAOjX1eUBT5viGHStyF%2B%2BwiashwKNRgg8t7ociGo8CgMnH7CayLFJYaeaEZYRHo6HLtY6K%2FCy1oBVIFGvtPWpJdCVzMEjkLgngM%2F4F%2B%2B3GlyrXD5Jd0vGDQRIAC35ywceD5U%2Fs%2F1Ka62gFdh%2BO2FPNWGanbK8iNBJI7oaLuvQZrlqLqAX5gI2uREp0KhRdp7WbYgirVNLEOhHkzxoxKoqoZjFaImQYSqXMPQqFRCUQKBcB%2BT%2FUOzSLO6vsxuKRYf3K2FQkfavCctpKCQkr7rNnxLxejcDKNP8MdMfRgaz3VTTmQ9%2FyqrebqOIWSCNsAbFZe6Xz7hZs%2F0u92ZwRLVQJKG%2BikkvfAEkeUXA%2B2Hc8EyWy8B0Kq16zFc7knrke8xrWJCcYsZpeq5eVhXH3Ty2ySimXAXVTwGfjOk5aSXyeaG8lAdueTckcs7xj6DgQU8oqdRDFEMMm9%2Bb0GOqUBgQFDZzCkFk7H62NB9j%2BVtGG574qGr8yMWhZsQJLmNH9BaVmBNmXPMop%2BJhVmJYEyQM6OaZu7MOE8DmQfdNO9ZuZLF6jotKJPvyHIfpBPdZ%2Fg9TXMm%2FR7HHn%2B8z4GdrR3E4R%2F6qLj76%2FKDRlCWlclOghoyABdKv6naQhe7%2FWC7IhrxZ8Ts667NM8Y0M8RRDXnVV4pc67VHk0Uuc2FfM2BKZXmfpSZ&X-Amz-Signature=77f96a9b10d3e8152159847f41d1a1a397203d964d2513f5bb0ee678804ab87b&X-Amz-SignedHeaders=host&x-id=GetObject)
