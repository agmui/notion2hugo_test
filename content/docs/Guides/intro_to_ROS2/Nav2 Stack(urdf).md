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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X3WVN4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIECXVLN8jYILImurg8JziHCbVDeUwIaanD4xU1PVEe2mAiBuVepSpfT1KIzK1sWK7nXR%2BPkDmBZSb2jZQP3nTVYDWSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx093IYoqqyC9WN9PKtwDHHQnoXWKy9ibrpWSYmI1n%2FrLAReQGreyrOaKvXiuz%2F3by5kkwNgTwf9Oj43k%2FylW57UXyqcTUiyb2mqDCg1Mdp7cp%2Fcgo5FwTtWeMpQ3VgsDtoKWiS6H8a7yGniBwjkR6cKZf%2Bed8YwUbPkIqD%2BNImEQOBpeGFurv%2FqhiW5UXW2LPwXkBfvU1MnsKg54phS9pVm1UJxwn%2F%2BH5AJ9eOzvy8x4N8ebCnzbyn1jUEmATvP%2BtoZRb2SCqFnKh8ym5TYyxJOy%2BsGpOE5ocBW0M6%2BChb0uNWfuDYytXsI56RdrZIPTfVsh0ZHHjrL%2BJ8mBvAoT57HQc%2FSk%2FSH8FvK8O0zt1LGUgNtZyT4O8%2BGZDV4Bxk4GUvjjoJjP1IW9as1g5AW%2BnxRU7WW81kUedlY5rg%2BwxGbvi4BUxaLrS8PtuBIkOIh3cyJL%2FmCRfit0%2FwqSQIO1LRRSmdS0rTvggLM2Xw6dtNUuzIfDfb%2BjwD1%2BlYrA022rkjP7edk6gV9qwWhq8jF14FCZIo5czrpx%2Bg6w5ymGctakBv86gm04fxzAgEekn2vw6tziyIsEJJ%2BkKOmEBaWSoOhg5NrqmUGBoZpMaQRWBY5c4zO0CMjrDyDH198w8GRDRv%2Bm8frn%2BC7J4BUwsKStvwY6pgE1bQamyg8FfyVNSscxwwTei2GoWrbNEBi6u83KMTSXWmu0AuWbmwplOTQsVk5aQi%2FeKt7YOyNSBjbvkErgyKl8ybA%2F3Vbc30nrHkcvOYcpkHsbHUgVOtx0pyp2FjZJBEuQghqetNxgDgasnlf2%2Bit23lF3j%2F5vrUFHCsC8m75Q4eB8tBLXGeIjMEv3dCVSykwdX%2FhSjmBIhX89O8IBsHUCr0wDnE4O&X-Amz-Signature=203b2c16a59ada86037f32b03f9e118ac27520cb8729244fecea0028cad09aff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X3WVN4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIECXVLN8jYILImurg8JziHCbVDeUwIaanD4xU1PVEe2mAiBuVepSpfT1KIzK1sWK7nXR%2BPkDmBZSb2jZQP3nTVYDWSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx093IYoqqyC9WN9PKtwDHHQnoXWKy9ibrpWSYmI1n%2FrLAReQGreyrOaKvXiuz%2F3by5kkwNgTwf9Oj43k%2FylW57UXyqcTUiyb2mqDCg1Mdp7cp%2Fcgo5FwTtWeMpQ3VgsDtoKWiS6H8a7yGniBwjkR6cKZf%2Bed8YwUbPkIqD%2BNImEQOBpeGFurv%2FqhiW5UXW2LPwXkBfvU1MnsKg54phS9pVm1UJxwn%2F%2BH5AJ9eOzvy8x4N8ebCnzbyn1jUEmATvP%2BtoZRb2SCqFnKh8ym5TYyxJOy%2BsGpOE5ocBW0M6%2BChb0uNWfuDYytXsI56RdrZIPTfVsh0ZHHjrL%2BJ8mBvAoT57HQc%2FSk%2FSH8FvK8O0zt1LGUgNtZyT4O8%2BGZDV4Bxk4GUvjjoJjP1IW9as1g5AW%2BnxRU7WW81kUedlY5rg%2BwxGbvi4BUxaLrS8PtuBIkOIh3cyJL%2FmCRfit0%2FwqSQIO1LRRSmdS0rTvggLM2Xw6dtNUuzIfDfb%2BjwD1%2BlYrA022rkjP7edk6gV9qwWhq8jF14FCZIo5czrpx%2Bg6w5ymGctakBv86gm04fxzAgEekn2vw6tziyIsEJJ%2BkKOmEBaWSoOhg5NrqmUGBoZpMaQRWBY5c4zO0CMjrDyDH198w8GRDRv%2Bm8frn%2BC7J4BUwsKStvwY6pgE1bQamyg8FfyVNSscxwwTei2GoWrbNEBi6u83KMTSXWmu0AuWbmwplOTQsVk5aQi%2FeKt7YOyNSBjbvkErgyKl8ybA%2F3Vbc30nrHkcvOYcpkHsbHUgVOtx0pyp2FjZJBEuQghqetNxgDgasnlf2%2Bit23lF3j%2F5vrUFHCsC8m75Q4eB8tBLXGeIjMEv3dCVSykwdX%2FhSjmBIhX89O8IBsHUCr0wDnE4O&X-Amz-Signature=4bc21fccf398d165d4254a1e8e219a851064e68db390334e3d222c0273bef612&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X3WVN4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIECXVLN8jYILImurg8JziHCbVDeUwIaanD4xU1PVEe2mAiBuVepSpfT1KIzK1sWK7nXR%2BPkDmBZSb2jZQP3nTVYDWSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx093IYoqqyC9WN9PKtwDHHQnoXWKy9ibrpWSYmI1n%2FrLAReQGreyrOaKvXiuz%2F3by5kkwNgTwf9Oj43k%2FylW57UXyqcTUiyb2mqDCg1Mdp7cp%2Fcgo5FwTtWeMpQ3VgsDtoKWiS6H8a7yGniBwjkR6cKZf%2Bed8YwUbPkIqD%2BNImEQOBpeGFurv%2FqhiW5UXW2LPwXkBfvU1MnsKg54phS9pVm1UJxwn%2F%2BH5AJ9eOzvy8x4N8ebCnzbyn1jUEmATvP%2BtoZRb2SCqFnKh8ym5TYyxJOy%2BsGpOE5ocBW0M6%2BChb0uNWfuDYytXsI56RdrZIPTfVsh0ZHHjrL%2BJ8mBvAoT57HQc%2FSk%2FSH8FvK8O0zt1LGUgNtZyT4O8%2BGZDV4Bxk4GUvjjoJjP1IW9as1g5AW%2BnxRU7WW81kUedlY5rg%2BwxGbvi4BUxaLrS8PtuBIkOIh3cyJL%2FmCRfit0%2FwqSQIO1LRRSmdS0rTvggLM2Xw6dtNUuzIfDfb%2BjwD1%2BlYrA022rkjP7edk6gV9qwWhq8jF14FCZIo5czrpx%2Bg6w5ymGctakBv86gm04fxzAgEekn2vw6tziyIsEJJ%2BkKOmEBaWSoOhg5NrqmUGBoZpMaQRWBY5c4zO0CMjrDyDH198w8GRDRv%2Bm8frn%2BC7J4BUwsKStvwY6pgE1bQamyg8FfyVNSscxwwTei2GoWrbNEBi6u83KMTSXWmu0AuWbmwplOTQsVk5aQi%2FeKt7YOyNSBjbvkErgyKl8ybA%2F3Vbc30nrHkcvOYcpkHsbHUgVOtx0pyp2FjZJBEuQghqetNxgDgasnlf2%2Bit23lF3j%2F5vrUFHCsC8m75Q4eB8tBLXGeIjMEv3dCVSykwdX%2FhSjmBIhX89O8IBsHUCr0wDnE4O&X-Amz-Signature=f15c73a683e22f088f9ab7861e70a75d1954c6b1969129bdd645c6e8fafb6012&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X3WVN4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIECXVLN8jYILImurg8JziHCbVDeUwIaanD4xU1PVEe2mAiBuVepSpfT1KIzK1sWK7nXR%2BPkDmBZSb2jZQP3nTVYDWSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx093IYoqqyC9WN9PKtwDHHQnoXWKy9ibrpWSYmI1n%2FrLAReQGreyrOaKvXiuz%2F3by5kkwNgTwf9Oj43k%2FylW57UXyqcTUiyb2mqDCg1Mdp7cp%2Fcgo5FwTtWeMpQ3VgsDtoKWiS6H8a7yGniBwjkR6cKZf%2Bed8YwUbPkIqD%2BNImEQOBpeGFurv%2FqhiW5UXW2LPwXkBfvU1MnsKg54phS9pVm1UJxwn%2F%2BH5AJ9eOzvy8x4N8ebCnzbyn1jUEmATvP%2BtoZRb2SCqFnKh8ym5TYyxJOy%2BsGpOE5ocBW0M6%2BChb0uNWfuDYytXsI56RdrZIPTfVsh0ZHHjrL%2BJ8mBvAoT57HQc%2FSk%2FSH8FvK8O0zt1LGUgNtZyT4O8%2BGZDV4Bxk4GUvjjoJjP1IW9as1g5AW%2BnxRU7WW81kUedlY5rg%2BwxGbvi4BUxaLrS8PtuBIkOIh3cyJL%2FmCRfit0%2FwqSQIO1LRRSmdS0rTvggLM2Xw6dtNUuzIfDfb%2BjwD1%2BlYrA022rkjP7edk6gV9qwWhq8jF14FCZIo5czrpx%2Bg6w5ymGctakBv86gm04fxzAgEekn2vw6tziyIsEJJ%2BkKOmEBaWSoOhg5NrqmUGBoZpMaQRWBY5c4zO0CMjrDyDH198w8GRDRv%2Bm8frn%2BC7J4BUwsKStvwY6pgE1bQamyg8FfyVNSscxwwTei2GoWrbNEBi6u83KMTSXWmu0AuWbmwplOTQsVk5aQi%2FeKt7YOyNSBjbvkErgyKl8ybA%2F3Vbc30nrHkcvOYcpkHsbHUgVOtx0pyp2FjZJBEuQghqetNxgDgasnlf2%2Bit23lF3j%2F5vrUFHCsC8m75Q4eB8tBLXGeIjMEv3dCVSykwdX%2FhSjmBIhX89O8IBsHUCr0wDnE4O&X-Amz-Signature=80d7951334e3895c7cedb9cd54bf99209c569b2c96c18ecc98e31171a649bb90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X3WVN4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIECXVLN8jYILImurg8JziHCbVDeUwIaanD4xU1PVEe2mAiBuVepSpfT1KIzK1sWK7nXR%2BPkDmBZSb2jZQP3nTVYDWSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx093IYoqqyC9WN9PKtwDHHQnoXWKy9ibrpWSYmI1n%2FrLAReQGreyrOaKvXiuz%2F3by5kkwNgTwf9Oj43k%2FylW57UXyqcTUiyb2mqDCg1Mdp7cp%2Fcgo5FwTtWeMpQ3VgsDtoKWiS6H8a7yGniBwjkR6cKZf%2Bed8YwUbPkIqD%2BNImEQOBpeGFurv%2FqhiW5UXW2LPwXkBfvU1MnsKg54phS9pVm1UJxwn%2F%2BH5AJ9eOzvy8x4N8ebCnzbyn1jUEmATvP%2BtoZRb2SCqFnKh8ym5TYyxJOy%2BsGpOE5ocBW0M6%2BChb0uNWfuDYytXsI56RdrZIPTfVsh0ZHHjrL%2BJ8mBvAoT57HQc%2FSk%2FSH8FvK8O0zt1LGUgNtZyT4O8%2BGZDV4Bxk4GUvjjoJjP1IW9as1g5AW%2BnxRU7WW81kUedlY5rg%2BwxGbvi4BUxaLrS8PtuBIkOIh3cyJL%2FmCRfit0%2FwqSQIO1LRRSmdS0rTvggLM2Xw6dtNUuzIfDfb%2BjwD1%2BlYrA022rkjP7edk6gV9qwWhq8jF14FCZIo5czrpx%2Bg6w5ymGctakBv86gm04fxzAgEekn2vw6tziyIsEJJ%2BkKOmEBaWSoOhg5NrqmUGBoZpMaQRWBY5c4zO0CMjrDyDH198w8GRDRv%2Bm8frn%2BC7J4BUwsKStvwY6pgE1bQamyg8FfyVNSscxwwTei2GoWrbNEBi6u83KMTSXWmu0AuWbmwplOTQsVk5aQi%2FeKt7YOyNSBjbvkErgyKl8ybA%2F3Vbc30nrHkcvOYcpkHsbHUgVOtx0pyp2FjZJBEuQghqetNxgDgasnlf2%2Bit23lF3j%2F5vrUFHCsC8m75Q4eB8tBLXGeIjMEv3dCVSykwdX%2FhSjmBIhX89O8IBsHUCr0wDnE4O&X-Amz-Signature=31c16f326ae75b13ca4e06756f0f9db5ecfd789d7d40438c11800cbd2dbb6e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X3WVN4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIECXVLN8jYILImurg8JziHCbVDeUwIaanD4xU1PVEe2mAiBuVepSpfT1KIzK1sWK7nXR%2BPkDmBZSb2jZQP3nTVYDWSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx093IYoqqyC9WN9PKtwDHHQnoXWKy9ibrpWSYmI1n%2FrLAReQGreyrOaKvXiuz%2F3by5kkwNgTwf9Oj43k%2FylW57UXyqcTUiyb2mqDCg1Mdp7cp%2Fcgo5FwTtWeMpQ3VgsDtoKWiS6H8a7yGniBwjkR6cKZf%2Bed8YwUbPkIqD%2BNImEQOBpeGFurv%2FqhiW5UXW2LPwXkBfvU1MnsKg54phS9pVm1UJxwn%2F%2BH5AJ9eOzvy8x4N8ebCnzbyn1jUEmATvP%2BtoZRb2SCqFnKh8ym5TYyxJOy%2BsGpOE5ocBW0M6%2BChb0uNWfuDYytXsI56RdrZIPTfVsh0ZHHjrL%2BJ8mBvAoT57HQc%2FSk%2FSH8FvK8O0zt1LGUgNtZyT4O8%2BGZDV4Bxk4GUvjjoJjP1IW9as1g5AW%2BnxRU7WW81kUedlY5rg%2BwxGbvi4BUxaLrS8PtuBIkOIh3cyJL%2FmCRfit0%2FwqSQIO1LRRSmdS0rTvggLM2Xw6dtNUuzIfDfb%2BjwD1%2BlYrA022rkjP7edk6gV9qwWhq8jF14FCZIo5czrpx%2Bg6w5ymGctakBv86gm04fxzAgEekn2vw6tziyIsEJJ%2BkKOmEBaWSoOhg5NrqmUGBoZpMaQRWBY5c4zO0CMjrDyDH198w8GRDRv%2Bm8frn%2BC7J4BUwsKStvwY6pgE1bQamyg8FfyVNSscxwwTei2GoWrbNEBi6u83KMTSXWmu0AuWbmwplOTQsVk5aQi%2FeKt7YOyNSBjbvkErgyKl8ybA%2F3Vbc30nrHkcvOYcpkHsbHUgVOtx0pyp2FjZJBEuQghqetNxgDgasnlf2%2Bit23lF3j%2F5vrUFHCsC8m75Q4eB8tBLXGeIjMEv3dCVSykwdX%2FhSjmBIhX89O8IBsHUCr0wDnE4O&X-Amz-Signature=b7bec0048326e0e10fc2d4bb5fc4124e6994a05e26466ad772057e384b3be7f3&X-Amz-SignedHeaders=host&x-id=GetObject)
