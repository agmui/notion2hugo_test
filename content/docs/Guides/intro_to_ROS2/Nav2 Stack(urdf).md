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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WYUG64%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGrXk3jQuFn%2BKHFHK%2F2lQaYibYxrCb%2FWkKViIOrB76CNAiA%2FJbQ%2BWihN%2FjWGM5vrSGFm04wlsydl9jBXXeDd4p2rlCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSflgHEXymjxRaW2MKtwDXjX8MYJISeWxfoy2ktsCEKNyiuqBt%2FAYN6TeBsbi8vw0ApMFJ9hACDbULfbZGf6zEnVUFMqmSDzFOgZxcQ7h%2BP73DBzXAnDZ%2BFYZgtyWZcg%2FMnBG6zSdMMUKHhnhpy13JqwZJRjSxygFAaLrG063hdQMbfXPyD0vkb6zTkD6LzN%2BaiJ3u7Kb1a%2B28iZRqjZO2iuaAuu9kqfosRb4Asp3zYD6pwErYzW46w6xTdrgnSHa82n7eb%2Be2W3aGu%2F2YX66rwWqzw6b5Nwr9AlXxVdJ3Rcp%2FGyL1teXpDRFkIQJkGNqOgJnN%2FTijjsansBTtLGIINwdkMKyW3OWcStTtt9A%2B0hR7AyZAQqFL1rJpuY0fCcY8TlZnqkEgBaGZ2xewHtXNcb2YIHwBmwdxfsx%2Bbsym8016Rjjzi5g03CQ9r61clHXukT%2F7bsWJrsVKo%2FQHTCH%2BVV%2FjYf3c8P2dAWdVCFCjYFz56F%2FfoFXFjODBj%2BG3b8k9FiKA2s29IguPJYdAG30ldAnjxcQmbdwRsV%2BRiSdIyLmetwpXcAY4%2BfQzHvBRLYDrHWb%2FQkQI1vbPbQOOkNHtQ3xnIGlaz51pAT4T2iLSaI3syX01WCLZ4PKhvtVnXupLN39t5UGAn38n6kw9aXwvgY6pgHGxKiBKVrYbSm%2BFG6mBvBM4oI%2B9X6bm0cqk83UIOjFdwZixLJ7ntUB5AGTDSZC8s6O4VJQOgcVkCxgswxvwB1sdRGMrgzOxJM0Xx1ydvrtazieaGGywBkyTz9bAnMl%2FtENjQ6UUfm0nApf6SIe%2F%2FYx1%2FVjteYZ2T374ymjVDRwVsfXNHrRBhzm2ehJUeqJV%2B0%2F8sCpDfBnToB%2BdxprHjCccVOGEspd&X-Amz-Signature=214cb104c22ef27b0e1d8acca686b4e2a3211f2e6937840149f7d924c317f20b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WYUG64%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGrXk3jQuFn%2BKHFHK%2F2lQaYibYxrCb%2FWkKViIOrB76CNAiA%2FJbQ%2BWihN%2FjWGM5vrSGFm04wlsydl9jBXXeDd4p2rlCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSflgHEXymjxRaW2MKtwDXjX8MYJISeWxfoy2ktsCEKNyiuqBt%2FAYN6TeBsbi8vw0ApMFJ9hACDbULfbZGf6zEnVUFMqmSDzFOgZxcQ7h%2BP73DBzXAnDZ%2BFYZgtyWZcg%2FMnBG6zSdMMUKHhnhpy13JqwZJRjSxygFAaLrG063hdQMbfXPyD0vkb6zTkD6LzN%2BaiJ3u7Kb1a%2B28iZRqjZO2iuaAuu9kqfosRb4Asp3zYD6pwErYzW46w6xTdrgnSHa82n7eb%2Be2W3aGu%2F2YX66rwWqzw6b5Nwr9AlXxVdJ3Rcp%2FGyL1teXpDRFkIQJkGNqOgJnN%2FTijjsansBTtLGIINwdkMKyW3OWcStTtt9A%2B0hR7AyZAQqFL1rJpuY0fCcY8TlZnqkEgBaGZ2xewHtXNcb2YIHwBmwdxfsx%2Bbsym8016Rjjzi5g03CQ9r61clHXukT%2F7bsWJrsVKo%2FQHTCH%2BVV%2FjYf3c8P2dAWdVCFCjYFz56F%2FfoFXFjODBj%2BG3b8k9FiKA2s29IguPJYdAG30ldAnjxcQmbdwRsV%2BRiSdIyLmetwpXcAY4%2BfQzHvBRLYDrHWb%2FQkQI1vbPbQOOkNHtQ3xnIGlaz51pAT4T2iLSaI3syX01WCLZ4PKhvtVnXupLN39t5UGAn38n6kw9aXwvgY6pgHGxKiBKVrYbSm%2BFG6mBvBM4oI%2B9X6bm0cqk83UIOjFdwZixLJ7ntUB5AGTDSZC8s6O4VJQOgcVkCxgswxvwB1sdRGMrgzOxJM0Xx1ydvrtazieaGGywBkyTz9bAnMl%2FtENjQ6UUfm0nApf6SIe%2F%2FYx1%2FVjteYZ2T374ymjVDRwVsfXNHrRBhzm2ehJUeqJV%2B0%2F8sCpDfBnToB%2BdxprHjCccVOGEspd&X-Amz-Signature=a25ad661b56f47cfc5a406cd53fb831f69d72b436149a861963e2bf9b2263a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WYUG64%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGrXk3jQuFn%2BKHFHK%2F2lQaYibYxrCb%2FWkKViIOrB76CNAiA%2FJbQ%2BWihN%2FjWGM5vrSGFm04wlsydl9jBXXeDd4p2rlCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSflgHEXymjxRaW2MKtwDXjX8MYJISeWxfoy2ktsCEKNyiuqBt%2FAYN6TeBsbi8vw0ApMFJ9hACDbULfbZGf6zEnVUFMqmSDzFOgZxcQ7h%2BP73DBzXAnDZ%2BFYZgtyWZcg%2FMnBG6zSdMMUKHhnhpy13JqwZJRjSxygFAaLrG063hdQMbfXPyD0vkb6zTkD6LzN%2BaiJ3u7Kb1a%2B28iZRqjZO2iuaAuu9kqfosRb4Asp3zYD6pwErYzW46w6xTdrgnSHa82n7eb%2Be2W3aGu%2F2YX66rwWqzw6b5Nwr9AlXxVdJ3Rcp%2FGyL1teXpDRFkIQJkGNqOgJnN%2FTijjsansBTtLGIINwdkMKyW3OWcStTtt9A%2B0hR7AyZAQqFL1rJpuY0fCcY8TlZnqkEgBaGZ2xewHtXNcb2YIHwBmwdxfsx%2Bbsym8016Rjjzi5g03CQ9r61clHXukT%2F7bsWJrsVKo%2FQHTCH%2BVV%2FjYf3c8P2dAWdVCFCjYFz56F%2FfoFXFjODBj%2BG3b8k9FiKA2s29IguPJYdAG30ldAnjxcQmbdwRsV%2BRiSdIyLmetwpXcAY4%2BfQzHvBRLYDrHWb%2FQkQI1vbPbQOOkNHtQ3xnIGlaz51pAT4T2iLSaI3syX01WCLZ4PKhvtVnXupLN39t5UGAn38n6kw9aXwvgY6pgHGxKiBKVrYbSm%2BFG6mBvBM4oI%2B9X6bm0cqk83UIOjFdwZixLJ7ntUB5AGTDSZC8s6O4VJQOgcVkCxgswxvwB1sdRGMrgzOxJM0Xx1ydvrtazieaGGywBkyTz9bAnMl%2FtENjQ6UUfm0nApf6SIe%2F%2FYx1%2FVjteYZ2T374ymjVDRwVsfXNHrRBhzm2ehJUeqJV%2B0%2F8sCpDfBnToB%2BdxprHjCccVOGEspd&X-Amz-Signature=3ba1d671ffe6b62faa3596067e16625a0fdf81c676bb02e1202660477dc2d6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WYUG64%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGrXk3jQuFn%2BKHFHK%2F2lQaYibYxrCb%2FWkKViIOrB76CNAiA%2FJbQ%2BWihN%2FjWGM5vrSGFm04wlsydl9jBXXeDd4p2rlCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSflgHEXymjxRaW2MKtwDXjX8MYJISeWxfoy2ktsCEKNyiuqBt%2FAYN6TeBsbi8vw0ApMFJ9hACDbULfbZGf6zEnVUFMqmSDzFOgZxcQ7h%2BP73DBzXAnDZ%2BFYZgtyWZcg%2FMnBG6zSdMMUKHhnhpy13JqwZJRjSxygFAaLrG063hdQMbfXPyD0vkb6zTkD6LzN%2BaiJ3u7Kb1a%2B28iZRqjZO2iuaAuu9kqfosRb4Asp3zYD6pwErYzW46w6xTdrgnSHa82n7eb%2Be2W3aGu%2F2YX66rwWqzw6b5Nwr9AlXxVdJ3Rcp%2FGyL1teXpDRFkIQJkGNqOgJnN%2FTijjsansBTtLGIINwdkMKyW3OWcStTtt9A%2B0hR7AyZAQqFL1rJpuY0fCcY8TlZnqkEgBaGZ2xewHtXNcb2YIHwBmwdxfsx%2Bbsym8016Rjjzi5g03CQ9r61clHXukT%2F7bsWJrsVKo%2FQHTCH%2BVV%2FjYf3c8P2dAWdVCFCjYFz56F%2FfoFXFjODBj%2BG3b8k9FiKA2s29IguPJYdAG30ldAnjxcQmbdwRsV%2BRiSdIyLmetwpXcAY4%2BfQzHvBRLYDrHWb%2FQkQI1vbPbQOOkNHtQ3xnIGlaz51pAT4T2iLSaI3syX01WCLZ4PKhvtVnXupLN39t5UGAn38n6kw9aXwvgY6pgHGxKiBKVrYbSm%2BFG6mBvBM4oI%2B9X6bm0cqk83UIOjFdwZixLJ7ntUB5AGTDSZC8s6O4VJQOgcVkCxgswxvwB1sdRGMrgzOxJM0Xx1ydvrtazieaGGywBkyTz9bAnMl%2FtENjQ6UUfm0nApf6SIe%2F%2FYx1%2FVjteYZ2T374ymjVDRwVsfXNHrRBhzm2ehJUeqJV%2B0%2F8sCpDfBnToB%2BdxprHjCccVOGEspd&X-Amz-Signature=9a989a8f90d68b87c4c96bb51fc569d29806fc0d1f7ed60202844370705a4b56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WYUG64%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGrXk3jQuFn%2BKHFHK%2F2lQaYibYxrCb%2FWkKViIOrB76CNAiA%2FJbQ%2BWihN%2FjWGM5vrSGFm04wlsydl9jBXXeDd4p2rlCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSflgHEXymjxRaW2MKtwDXjX8MYJISeWxfoy2ktsCEKNyiuqBt%2FAYN6TeBsbi8vw0ApMFJ9hACDbULfbZGf6zEnVUFMqmSDzFOgZxcQ7h%2BP73DBzXAnDZ%2BFYZgtyWZcg%2FMnBG6zSdMMUKHhnhpy13JqwZJRjSxygFAaLrG063hdQMbfXPyD0vkb6zTkD6LzN%2BaiJ3u7Kb1a%2B28iZRqjZO2iuaAuu9kqfosRb4Asp3zYD6pwErYzW46w6xTdrgnSHa82n7eb%2Be2W3aGu%2F2YX66rwWqzw6b5Nwr9AlXxVdJ3Rcp%2FGyL1teXpDRFkIQJkGNqOgJnN%2FTijjsansBTtLGIINwdkMKyW3OWcStTtt9A%2B0hR7AyZAQqFL1rJpuY0fCcY8TlZnqkEgBaGZ2xewHtXNcb2YIHwBmwdxfsx%2Bbsym8016Rjjzi5g03CQ9r61clHXukT%2F7bsWJrsVKo%2FQHTCH%2BVV%2FjYf3c8P2dAWdVCFCjYFz56F%2FfoFXFjODBj%2BG3b8k9FiKA2s29IguPJYdAG30ldAnjxcQmbdwRsV%2BRiSdIyLmetwpXcAY4%2BfQzHvBRLYDrHWb%2FQkQI1vbPbQOOkNHtQ3xnIGlaz51pAT4T2iLSaI3syX01WCLZ4PKhvtVnXupLN39t5UGAn38n6kw9aXwvgY6pgHGxKiBKVrYbSm%2BFG6mBvBM4oI%2B9X6bm0cqk83UIOjFdwZixLJ7ntUB5AGTDSZC8s6O4VJQOgcVkCxgswxvwB1sdRGMrgzOxJM0Xx1ydvrtazieaGGywBkyTz9bAnMl%2FtENjQ6UUfm0nApf6SIe%2F%2FYx1%2FVjteYZ2T374ymjVDRwVsfXNHrRBhzm2ehJUeqJV%2B0%2F8sCpDfBnToB%2BdxprHjCccVOGEspd&X-Amz-Signature=620367533c90620ae9a6325bf1b6b52c5b751fc797c1210050875e747d18aec8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624WYUG64%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIGrXk3jQuFn%2BKHFHK%2F2lQaYibYxrCb%2FWkKViIOrB76CNAiA%2FJbQ%2BWihN%2FjWGM5vrSGFm04wlsydl9jBXXeDd4p2rlCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSflgHEXymjxRaW2MKtwDXjX8MYJISeWxfoy2ktsCEKNyiuqBt%2FAYN6TeBsbi8vw0ApMFJ9hACDbULfbZGf6zEnVUFMqmSDzFOgZxcQ7h%2BP73DBzXAnDZ%2BFYZgtyWZcg%2FMnBG6zSdMMUKHhnhpy13JqwZJRjSxygFAaLrG063hdQMbfXPyD0vkb6zTkD6LzN%2BaiJ3u7Kb1a%2B28iZRqjZO2iuaAuu9kqfosRb4Asp3zYD6pwErYzW46w6xTdrgnSHa82n7eb%2Be2W3aGu%2F2YX66rwWqzw6b5Nwr9AlXxVdJ3Rcp%2FGyL1teXpDRFkIQJkGNqOgJnN%2FTijjsansBTtLGIINwdkMKyW3OWcStTtt9A%2B0hR7AyZAQqFL1rJpuY0fCcY8TlZnqkEgBaGZ2xewHtXNcb2YIHwBmwdxfsx%2Bbsym8016Rjjzi5g03CQ9r61clHXukT%2F7bsWJrsVKo%2FQHTCH%2BVV%2FjYf3c8P2dAWdVCFCjYFz56F%2FfoFXFjODBj%2BG3b8k9FiKA2s29IguPJYdAG30ldAnjxcQmbdwRsV%2BRiSdIyLmetwpXcAY4%2BfQzHvBRLYDrHWb%2FQkQI1vbPbQOOkNHtQ3xnIGlaz51pAT4T2iLSaI3syX01WCLZ4PKhvtVnXupLN39t5UGAn38n6kw9aXwvgY6pgHGxKiBKVrYbSm%2BFG6mBvBM4oI%2B9X6bm0cqk83UIOjFdwZixLJ7ntUB5AGTDSZC8s6O4VJQOgcVkCxgswxvwB1sdRGMrgzOxJM0Xx1ydvrtazieaGGywBkyTz9bAnMl%2FtENjQ6UUfm0nApf6SIe%2F%2FYx1%2FVjteYZ2T374ymjVDRwVsfXNHrRBhzm2ehJUeqJV%2B0%2F8sCpDfBnToB%2BdxprHjCccVOGEspd&X-Amz-Signature=509d6f47c9c227ac3842738a595b13d20eeaeab8a1565779ad9e2a8ecbdb8887&X-Amz-SignedHeaders=host&x-id=GetObject)
