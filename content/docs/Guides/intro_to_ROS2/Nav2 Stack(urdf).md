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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DH3I3E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDohwsv98OvLz3OQJCCqG%2FXEpn5x0nnAHwaaldh9ssnVwIhAOyX8Pl7yhPpughq4%2FB8S1kgE7wgKo6oumBnntXPngeDKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhi2lfRyTd9bYbwNkq3AOuX%2FHLlZ5p5%2FzjScFcNsbHIiX%2B4sEJKPEo74Iie4OSXZkKD8W0TjJV9DtbNJsoiL7vvDgr5YY2SKxWG%2BSxC5WwJABAeqqhwcL8Gjym9Z71sWbM4rGG%2FrR%2BSGJwT3r%2F2iK81%2BQVppAl28tI2I2qhVrgA71opF0Q6K7GYJ4Jh7fe5zU58p8xozyQF7ldSVEo40q1NlAJx5sidgj%2FVHZh7nfalcbtF4MXxriO9X3AGrzYQmCS%2FX9WAhRTJocBTv5euS2k%2FQYYY%2BSyr1%2FvEZ9C%2FZVGbDbNGeeln2i3E9aB5tF986R57KK1TaXIwQrxaCisC9if5PDC0W%2Fp5i%2F23CrDWhDXQXWWVErbTUmIXiC7gjkVUIFSUMHw1dd2Q11ho7XHkXuQWKM6pZvMYFTv2dOZr2NNldkNcMHEsos9A3ADVpwo4eM7YBp7Gom7ACwfGJ1XRp02C2DEOsCnFtD9nLa%2F6new8sV8OzX5aXuu%2FGSUKSn4HnRIDS3CQ1rdAh32o%2BRmuubRfnBWNziw0CcwdVqrWm7oGHYJAn6ky4DBKBLIsLeGTCJCFed1yUN8G0JzNi9d2udo%2BwZVtnmU1oHGt%2F9jH7G%2BKfORSz8F1Ww8uuC8S8gmFWjRvwGIQaM%2FahhcKzC356bCBjqkAef5d1sESNCcf6%2FJirGELLflJOPIOY%2BnsQ1isrnI0qNf7NAr5B0TXncBEoGL7B9%2Fm6Kayl%2FXu%2Fxkt3NDQYmpQxQQMotZKLQ8JevjsmIE%2BHoOB%2FUC7blRb7vJWO4qAevHxVEn99QJKkZxzywvF6%2FWVgdaPIrgnnhmUpeC5xibgRSoYrBNx7uFe5W%2B4WPUB8bwn9KrKieENsAwBGjvO7ebHnSJMeRl&X-Amz-Signature=b05f4f721f19546b6454491a53f6f7aa8f133d025527c9afaadb4b13a781777a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DH3I3E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDohwsv98OvLz3OQJCCqG%2FXEpn5x0nnAHwaaldh9ssnVwIhAOyX8Pl7yhPpughq4%2FB8S1kgE7wgKo6oumBnntXPngeDKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhi2lfRyTd9bYbwNkq3AOuX%2FHLlZ5p5%2FzjScFcNsbHIiX%2B4sEJKPEo74Iie4OSXZkKD8W0TjJV9DtbNJsoiL7vvDgr5YY2SKxWG%2BSxC5WwJABAeqqhwcL8Gjym9Z71sWbM4rGG%2FrR%2BSGJwT3r%2F2iK81%2BQVppAl28tI2I2qhVrgA71opF0Q6K7GYJ4Jh7fe5zU58p8xozyQF7ldSVEo40q1NlAJx5sidgj%2FVHZh7nfalcbtF4MXxriO9X3AGrzYQmCS%2FX9WAhRTJocBTv5euS2k%2FQYYY%2BSyr1%2FvEZ9C%2FZVGbDbNGeeln2i3E9aB5tF986R57KK1TaXIwQrxaCisC9if5PDC0W%2Fp5i%2F23CrDWhDXQXWWVErbTUmIXiC7gjkVUIFSUMHw1dd2Q11ho7XHkXuQWKM6pZvMYFTv2dOZr2NNldkNcMHEsos9A3ADVpwo4eM7YBp7Gom7ACwfGJ1XRp02C2DEOsCnFtD9nLa%2F6new8sV8OzX5aXuu%2FGSUKSn4HnRIDS3CQ1rdAh32o%2BRmuubRfnBWNziw0CcwdVqrWm7oGHYJAn6ky4DBKBLIsLeGTCJCFed1yUN8G0JzNi9d2udo%2BwZVtnmU1oHGt%2F9jH7G%2BKfORSz8F1Ww8uuC8S8gmFWjRvwGIQaM%2FahhcKzC356bCBjqkAef5d1sESNCcf6%2FJirGELLflJOPIOY%2BnsQ1isrnI0qNf7NAr5B0TXncBEoGL7B9%2Fm6Kayl%2FXu%2Fxkt3NDQYmpQxQQMotZKLQ8JevjsmIE%2BHoOB%2FUC7blRb7vJWO4qAevHxVEn99QJKkZxzywvF6%2FWVgdaPIrgnnhmUpeC5xibgRSoYrBNx7uFe5W%2B4WPUB8bwn9KrKieENsAwBGjvO7ebHnSJMeRl&X-Amz-Signature=23f5622354807b2b8bf5958ccfc99f67a68a31083511ce7610321a6988c8771a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DH3I3E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDohwsv98OvLz3OQJCCqG%2FXEpn5x0nnAHwaaldh9ssnVwIhAOyX8Pl7yhPpughq4%2FB8S1kgE7wgKo6oumBnntXPngeDKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhi2lfRyTd9bYbwNkq3AOuX%2FHLlZ5p5%2FzjScFcNsbHIiX%2B4sEJKPEo74Iie4OSXZkKD8W0TjJV9DtbNJsoiL7vvDgr5YY2SKxWG%2BSxC5WwJABAeqqhwcL8Gjym9Z71sWbM4rGG%2FrR%2BSGJwT3r%2F2iK81%2BQVppAl28tI2I2qhVrgA71opF0Q6K7GYJ4Jh7fe5zU58p8xozyQF7ldSVEo40q1NlAJx5sidgj%2FVHZh7nfalcbtF4MXxriO9X3AGrzYQmCS%2FX9WAhRTJocBTv5euS2k%2FQYYY%2BSyr1%2FvEZ9C%2FZVGbDbNGeeln2i3E9aB5tF986R57KK1TaXIwQrxaCisC9if5PDC0W%2Fp5i%2F23CrDWhDXQXWWVErbTUmIXiC7gjkVUIFSUMHw1dd2Q11ho7XHkXuQWKM6pZvMYFTv2dOZr2NNldkNcMHEsos9A3ADVpwo4eM7YBp7Gom7ACwfGJ1XRp02C2DEOsCnFtD9nLa%2F6new8sV8OzX5aXuu%2FGSUKSn4HnRIDS3CQ1rdAh32o%2BRmuubRfnBWNziw0CcwdVqrWm7oGHYJAn6ky4DBKBLIsLeGTCJCFed1yUN8G0JzNi9d2udo%2BwZVtnmU1oHGt%2F9jH7G%2BKfORSz8F1Ww8uuC8S8gmFWjRvwGIQaM%2FahhcKzC356bCBjqkAef5d1sESNCcf6%2FJirGELLflJOPIOY%2BnsQ1isrnI0qNf7NAr5B0TXncBEoGL7B9%2Fm6Kayl%2FXu%2Fxkt3NDQYmpQxQQMotZKLQ8JevjsmIE%2BHoOB%2FUC7blRb7vJWO4qAevHxVEn99QJKkZxzywvF6%2FWVgdaPIrgnnhmUpeC5xibgRSoYrBNx7uFe5W%2B4WPUB8bwn9KrKieENsAwBGjvO7ebHnSJMeRl&X-Amz-Signature=0805cbc265540c978eac78c583eb6cf136ca7db378e1bfa3cc12a5c12b668ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DH3I3E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDohwsv98OvLz3OQJCCqG%2FXEpn5x0nnAHwaaldh9ssnVwIhAOyX8Pl7yhPpughq4%2FB8S1kgE7wgKo6oumBnntXPngeDKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhi2lfRyTd9bYbwNkq3AOuX%2FHLlZ5p5%2FzjScFcNsbHIiX%2B4sEJKPEo74Iie4OSXZkKD8W0TjJV9DtbNJsoiL7vvDgr5YY2SKxWG%2BSxC5WwJABAeqqhwcL8Gjym9Z71sWbM4rGG%2FrR%2BSGJwT3r%2F2iK81%2BQVppAl28tI2I2qhVrgA71opF0Q6K7GYJ4Jh7fe5zU58p8xozyQF7ldSVEo40q1NlAJx5sidgj%2FVHZh7nfalcbtF4MXxriO9X3AGrzYQmCS%2FX9WAhRTJocBTv5euS2k%2FQYYY%2BSyr1%2FvEZ9C%2FZVGbDbNGeeln2i3E9aB5tF986R57KK1TaXIwQrxaCisC9if5PDC0W%2Fp5i%2F23CrDWhDXQXWWVErbTUmIXiC7gjkVUIFSUMHw1dd2Q11ho7XHkXuQWKM6pZvMYFTv2dOZr2NNldkNcMHEsos9A3ADVpwo4eM7YBp7Gom7ACwfGJ1XRp02C2DEOsCnFtD9nLa%2F6new8sV8OzX5aXuu%2FGSUKSn4HnRIDS3CQ1rdAh32o%2BRmuubRfnBWNziw0CcwdVqrWm7oGHYJAn6ky4DBKBLIsLeGTCJCFed1yUN8G0JzNi9d2udo%2BwZVtnmU1oHGt%2F9jH7G%2BKfORSz8F1Ww8uuC8S8gmFWjRvwGIQaM%2FahhcKzC356bCBjqkAef5d1sESNCcf6%2FJirGELLflJOPIOY%2BnsQ1isrnI0qNf7NAr5B0TXncBEoGL7B9%2Fm6Kayl%2FXu%2Fxkt3NDQYmpQxQQMotZKLQ8JevjsmIE%2BHoOB%2FUC7blRb7vJWO4qAevHxVEn99QJKkZxzywvF6%2FWVgdaPIrgnnhmUpeC5xibgRSoYrBNx7uFe5W%2B4WPUB8bwn9KrKieENsAwBGjvO7ebHnSJMeRl&X-Amz-Signature=76fbc082d201159c8ee795ae2a262f05bfc152d0299c540483674be000c68143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DH3I3E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDohwsv98OvLz3OQJCCqG%2FXEpn5x0nnAHwaaldh9ssnVwIhAOyX8Pl7yhPpughq4%2FB8S1kgE7wgKo6oumBnntXPngeDKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhi2lfRyTd9bYbwNkq3AOuX%2FHLlZ5p5%2FzjScFcNsbHIiX%2B4sEJKPEo74Iie4OSXZkKD8W0TjJV9DtbNJsoiL7vvDgr5YY2SKxWG%2BSxC5WwJABAeqqhwcL8Gjym9Z71sWbM4rGG%2FrR%2BSGJwT3r%2F2iK81%2BQVppAl28tI2I2qhVrgA71opF0Q6K7GYJ4Jh7fe5zU58p8xozyQF7ldSVEo40q1NlAJx5sidgj%2FVHZh7nfalcbtF4MXxriO9X3AGrzYQmCS%2FX9WAhRTJocBTv5euS2k%2FQYYY%2BSyr1%2FvEZ9C%2FZVGbDbNGeeln2i3E9aB5tF986R57KK1TaXIwQrxaCisC9if5PDC0W%2Fp5i%2F23CrDWhDXQXWWVErbTUmIXiC7gjkVUIFSUMHw1dd2Q11ho7XHkXuQWKM6pZvMYFTv2dOZr2NNldkNcMHEsos9A3ADVpwo4eM7YBp7Gom7ACwfGJ1XRp02C2DEOsCnFtD9nLa%2F6new8sV8OzX5aXuu%2FGSUKSn4HnRIDS3CQ1rdAh32o%2BRmuubRfnBWNziw0CcwdVqrWm7oGHYJAn6ky4DBKBLIsLeGTCJCFed1yUN8G0JzNi9d2udo%2BwZVtnmU1oHGt%2F9jH7G%2BKfORSz8F1Ww8uuC8S8gmFWjRvwGIQaM%2FahhcKzC356bCBjqkAef5d1sESNCcf6%2FJirGELLflJOPIOY%2BnsQ1isrnI0qNf7NAr5B0TXncBEoGL7B9%2Fm6Kayl%2FXu%2Fxkt3NDQYmpQxQQMotZKLQ8JevjsmIE%2BHoOB%2FUC7blRb7vJWO4qAevHxVEn99QJKkZxzywvF6%2FWVgdaPIrgnnhmUpeC5xibgRSoYrBNx7uFe5W%2B4WPUB8bwn9KrKieENsAwBGjvO7ebHnSJMeRl&X-Amz-Signature=27a9ed8bda878d6e18e11fe8f5c864585c931a9410d3c1f0b812403d849bd0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DH3I3E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDohwsv98OvLz3OQJCCqG%2FXEpn5x0nnAHwaaldh9ssnVwIhAOyX8Pl7yhPpughq4%2FB8S1kgE7wgKo6oumBnntXPngeDKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhi2lfRyTd9bYbwNkq3AOuX%2FHLlZ5p5%2FzjScFcNsbHIiX%2B4sEJKPEo74Iie4OSXZkKD8W0TjJV9DtbNJsoiL7vvDgr5YY2SKxWG%2BSxC5WwJABAeqqhwcL8Gjym9Z71sWbM4rGG%2FrR%2BSGJwT3r%2F2iK81%2BQVppAl28tI2I2qhVrgA71opF0Q6K7GYJ4Jh7fe5zU58p8xozyQF7ldSVEo40q1NlAJx5sidgj%2FVHZh7nfalcbtF4MXxriO9X3AGrzYQmCS%2FX9WAhRTJocBTv5euS2k%2FQYYY%2BSyr1%2FvEZ9C%2FZVGbDbNGeeln2i3E9aB5tF986R57KK1TaXIwQrxaCisC9if5PDC0W%2Fp5i%2F23CrDWhDXQXWWVErbTUmIXiC7gjkVUIFSUMHw1dd2Q11ho7XHkXuQWKM6pZvMYFTv2dOZr2NNldkNcMHEsos9A3ADVpwo4eM7YBp7Gom7ACwfGJ1XRp02C2DEOsCnFtD9nLa%2F6new8sV8OzX5aXuu%2FGSUKSn4HnRIDS3CQ1rdAh32o%2BRmuubRfnBWNziw0CcwdVqrWm7oGHYJAn6ky4DBKBLIsLeGTCJCFed1yUN8G0JzNi9d2udo%2BwZVtnmU1oHGt%2F9jH7G%2BKfORSz8F1Ww8uuC8S8gmFWjRvwGIQaM%2FahhcKzC356bCBjqkAef5d1sESNCcf6%2FJirGELLflJOPIOY%2BnsQ1isrnI0qNf7NAr5B0TXncBEoGL7B9%2Fm6Kayl%2FXu%2Fxkt3NDQYmpQxQQMotZKLQ8JevjsmIE%2BHoOB%2FUC7blRb7vJWO4qAevHxVEn99QJKkZxzywvF6%2FWVgdaPIrgnnhmUpeC5xibgRSoYrBNx7uFe5W%2B4WPUB8bwn9KrKieENsAwBGjvO7ebHnSJMeRl&X-Amz-Signature=79e0d430d6433066c9a7968efbf3ac10c1b48183cb6801be59ccf300adfea682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
