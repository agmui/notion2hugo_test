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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFJXFH6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCro7LUA%2FjBFTHXn1KbzBMZ0MNmn8hb7NKIyiGTbySGkgIhAImH5SIaQZcNbDKg8JLmqo1vJWT%2BHSBsQFzp1yU6JmRoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZLgP4RAgxNFXMq5wq3APtkxxP97orwlfXvAekUICk%2FHgXRJnwuk0BHCGeoboEcNxSH0HJmMynvnRSpLeOGWpQuXTvRhag%2F5dUNkdHghRHFdFcweswQ%2BnutaWKPS%2FIFBgmEDf3%2BUyiecIiVmqia7BEVPv7TCdt8Sr5nwl8R1oJyk9%2FEWnZXIEZG47lXWVs%2F%2F4jvURoj1DolYv2wJ6rGkPh27TCS%2FHsJalMwMuzUjew0ZeSjKI3PRa0%2B5Aq8Q%2FbHAceUgOgXI0kNnWLpkbrHhSXEj1rAle2w5HFdbbR86QKLSxcKU4ZAVaGRWhV%2Bg%2B7sNLpW04fHDi1VDHK%2FJq7LXOqx6YFi8cb3fSK%2BdGn5Cm5jRGu57j81S6mys1wBeuMg0vR4KPBZ36Wpt3KeKJEo0RWs3vqlKA3WQdSFXV7Da0HZg6W8B8qJMqFf2zfERP%2BPkmLWG8yTQXTkFuBihbpXdDX51VfopiyqJypGMfLCSSG8%2FxSutbciZcrGndFm7smzgUUUUVvLNVqdvKMfbmY%2F%2F0Tma3Him8HPZ9Sbkvx4iG2gtKs3cygUJsx3f2vqj2fxr%2Bn3zlKcOvOpy7O9zEMUIJZgs9pLuuEvihXnTjZZQqYD6QdleG7Tz2Py4J2sJzv%2FMOQAOXh%2ByX5egOpSzCB%2F9C9BjqkAe2AGk%2FCZKnL39WPn711c%2B18Ag3nZcrRN4XbAPpKTqruzGtShQXtqb8biTVahcCgUdtQYaVajD6fWqTf1GFFIZQyLxuOGhTkKm8eOR10TrPR3u18U%2BjIv2Qmaef%2BYqVHILk%2BYkBFpLEP7UkIZtzuYo8fME9QIEBb1Waar4jaHAKyQKH0jC32WjXbtKyzEYg79X2329TivGYXoKS3DuVEd3V0MsHq&X-Amz-Signature=b87acb9d835aaf0c936b6161feb1c159947c74b7c40df12e3dc597b9b43fa4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFJXFH6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCro7LUA%2FjBFTHXn1KbzBMZ0MNmn8hb7NKIyiGTbySGkgIhAImH5SIaQZcNbDKg8JLmqo1vJWT%2BHSBsQFzp1yU6JmRoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZLgP4RAgxNFXMq5wq3APtkxxP97orwlfXvAekUICk%2FHgXRJnwuk0BHCGeoboEcNxSH0HJmMynvnRSpLeOGWpQuXTvRhag%2F5dUNkdHghRHFdFcweswQ%2BnutaWKPS%2FIFBgmEDf3%2BUyiecIiVmqia7BEVPv7TCdt8Sr5nwl8R1oJyk9%2FEWnZXIEZG47lXWVs%2F%2F4jvURoj1DolYv2wJ6rGkPh27TCS%2FHsJalMwMuzUjew0ZeSjKI3PRa0%2B5Aq8Q%2FbHAceUgOgXI0kNnWLpkbrHhSXEj1rAle2w5HFdbbR86QKLSxcKU4ZAVaGRWhV%2Bg%2B7sNLpW04fHDi1VDHK%2FJq7LXOqx6YFi8cb3fSK%2BdGn5Cm5jRGu57j81S6mys1wBeuMg0vR4KPBZ36Wpt3KeKJEo0RWs3vqlKA3WQdSFXV7Da0HZg6W8B8qJMqFf2zfERP%2BPkmLWG8yTQXTkFuBihbpXdDX51VfopiyqJypGMfLCSSG8%2FxSutbciZcrGndFm7smzgUUUUVvLNVqdvKMfbmY%2F%2F0Tma3Him8HPZ9Sbkvx4iG2gtKs3cygUJsx3f2vqj2fxr%2Bn3zlKcOvOpy7O9zEMUIJZgs9pLuuEvihXnTjZZQqYD6QdleG7Tz2Py4J2sJzv%2FMOQAOXh%2ByX5egOpSzCB%2F9C9BjqkAe2AGk%2FCZKnL39WPn711c%2B18Ag3nZcrRN4XbAPpKTqruzGtShQXtqb8biTVahcCgUdtQYaVajD6fWqTf1GFFIZQyLxuOGhTkKm8eOR10TrPR3u18U%2BjIv2Qmaef%2BYqVHILk%2BYkBFpLEP7UkIZtzuYo8fME9QIEBb1Waar4jaHAKyQKH0jC32WjXbtKyzEYg79X2329TivGYXoKS3DuVEd3V0MsHq&X-Amz-Signature=f01c65d634051127a6a200a4a8726a86d5110cfee8f2ca47ac31fdaa72373da9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFJXFH6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCro7LUA%2FjBFTHXn1KbzBMZ0MNmn8hb7NKIyiGTbySGkgIhAImH5SIaQZcNbDKg8JLmqo1vJWT%2BHSBsQFzp1yU6JmRoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZLgP4RAgxNFXMq5wq3APtkxxP97orwlfXvAekUICk%2FHgXRJnwuk0BHCGeoboEcNxSH0HJmMynvnRSpLeOGWpQuXTvRhag%2F5dUNkdHghRHFdFcweswQ%2BnutaWKPS%2FIFBgmEDf3%2BUyiecIiVmqia7BEVPv7TCdt8Sr5nwl8R1oJyk9%2FEWnZXIEZG47lXWVs%2F%2F4jvURoj1DolYv2wJ6rGkPh27TCS%2FHsJalMwMuzUjew0ZeSjKI3PRa0%2B5Aq8Q%2FbHAceUgOgXI0kNnWLpkbrHhSXEj1rAle2w5HFdbbR86QKLSxcKU4ZAVaGRWhV%2Bg%2B7sNLpW04fHDi1VDHK%2FJq7LXOqx6YFi8cb3fSK%2BdGn5Cm5jRGu57j81S6mys1wBeuMg0vR4KPBZ36Wpt3KeKJEo0RWs3vqlKA3WQdSFXV7Da0HZg6W8B8qJMqFf2zfERP%2BPkmLWG8yTQXTkFuBihbpXdDX51VfopiyqJypGMfLCSSG8%2FxSutbciZcrGndFm7smzgUUUUVvLNVqdvKMfbmY%2F%2F0Tma3Him8HPZ9Sbkvx4iG2gtKs3cygUJsx3f2vqj2fxr%2Bn3zlKcOvOpy7O9zEMUIJZgs9pLuuEvihXnTjZZQqYD6QdleG7Tz2Py4J2sJzv%2FMOQAOXh%2ByX5egOpSzCB%2F9C9BjqkAe2AGk%2FCZKnL39WPn711c%2B18Ag3nZcrRN4XbAPpKTqruzGtShQXtqb8biTVahcCgUdtQYaVajD6fWqTf1GFFIZQyLxuOGhTkKm8eOR10TrPR3u18U%2BjIv2Qmaef%2BYqVHILk%2BYkBFpLEP7UkIZtzuYo8fME9QIEBb1Waar4jaHAKyQKH0jC32WjXbtKyzEYg79X2329TivGYXoKS3DuVEd3V0MsHq&X-Amz-Signature=58390cf8964ea190103b10929a5711ea99dc8176198b933b4d86ecc93f8af318&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFJXFH6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCro7LUA%2FjBFTHXn1KbzBMZ0MNmn8hb7NKIyiGTbySGkgIhAImH5SIaQZcNbDKg8JLmqo1vJWT%2BHSBsQFzp1yU6JmRoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZLgP4RAgxNFXMq5wq3APtkxxP97orwlfXvAekUICk%2FHgXRJnwuk0BHCGeoboEcNxSH0HJmMynvnRSpLeOGWpQuXTvRhag%2F5dUNkdHghRHFdFcweswQ%2BnutaWKPS%2FIFBgmEDf3%2BUyiecIiVmqia7BEVPv7TCdt8Sr5nwl8R1oJyk9%2FEWnZXIEZG47lXWVs%2F%2F4jvURoj1DolYv2wJ6rGkPh27TCS%2FHsJalMwMuzUjew0ZeSjKI3PRa0%2B5Aq8Q%2FbHAceUgOgXI0kNnWLpkbrHhSXEj1rAle2w5HFdbbR86QKLSxcKU4ZAVaGRWhV%2Bg%2B7sNLpW04fHDi1VDHK%2FJq7LXOqx6YFi8cb3fSK%2BdGn5Cm5jRGu57j81S6mys1wBeuMg0vR4KPBZ36Wpt3KeKJEo0RWs3vqlKA3WQdSFXV7Da0HZg6W8B8qJMqFf2zfERP%2BPkmLWG8yTQXTkFuBihbpXdDX51VfopiyqJypGMfLCSSG8%2FxSutbciZcrGndFm7smzgUUUUVvLNVqdvKMfbmY%2F%2F0Tma3Him8HPZ9Sbkvx4iG2gtKs3cygUJsx3f2vqj2fxr%2Bn3zlKcOvOpy7O9zEMUIJZgs9pLuuEvihXnTjZZQqYD6QdleG7Tz2Py4J2sJzv%2FMOQAOXh%2ByX5egOpSzCB%2F9C9BjqkAe2AGk%2FCZKnL39WPn711c%2B18Ag3nZcrRN4XbAPpKTqruzGtShQXtqb8biTVahcCgUdtQYaVajD6fWqTf1GFFIZQyLxuOGhTkKm8eOR10TrPR3u18U%2BjIv2Qmaef%2BYqVHILk%2BYkBFpLEP7UkIZtzuYo8fME9QIEBb1Waar4jaHAKyQKH0jC32WjXbtKyzEYg79X2329TivGYXoKS3DuVEd3V0MsHq&X-Amz-Signature=dcc5f6cf11978d6997fb4a40a271814d21b5459de5424cc313172b5d9d2b9557&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFJXFH6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCro7LUA%2FjBFTHXn1KbzBMZ0MNmn8hb7NKIyiGTbySGkgIhAImH5SIaQZcNbDKg8JLmqo1vJWT%2BHSBsQFzp1yU6JmRoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZLgP4RAgxNFXMq5wq3APtkxxP97orwlfXvAekUICk%2FHgXRJnwuk0BHCGeoboEcNxSH0HJmMynvnRSpLeOGWpQuXTvRhag%2F5dUNkdHghRHFdFcweswQ%2BnutaWKPS%2FIFBgmEDf3%2BUyiecIiVmqia7BEVPv7TCdt8Sr5nwl8R1oJyk9%2FEWnZXIEZG47lXWVs%2F%2F4jvURoj1DolYv2wJ6rGkPh27TCS%2FHsJalMwMuzUjew0ZeSjKI3PRa0%2B5Aq8Q%2FbHAceUgOgXI0kNnWLpkbrHhSXEj1rAle2w5HFdbbR86QKLSxcKU4ZAVaGRWhV%2Bg%2B7sNLpW04fHDi1VDHK%2FJq7LXOqx6YFi8cb3fSK%2BdGn5Cm5jRGu57j81S6mys1wBeuMg0vR4KPBZ36Wpt3KeKJEo0RWs3vqlKA3WQdSFXV7Da0HZg6W8B8qJMqFf2zfERP%2BPkmLWG8yTQXTkFuBihbpXdDX51VfopiyqJypGMfLCSSG8%2FxSutbciZcrGndFm7smzgUUUUVvLNVqdvKMfbmY%2F%2F0Tma3Him8HPZ9Sbkvx4iG2gtKs3cygUJsx3f2vqj2fxr%2Bn3zlKcOvOpy7O9zEMUIJZgs9pLuuEvihXnTjZZQqYD6QdleG7Tz2Py4J2sJzv%2FMOQAOXh%2ByX5egOpSzCB%2F9C9BjqkAe2AGk%2FCZKnL39WPn711c%2B18Ag3nZcrRN4XbAPpKTqruzGtShQXtqb8biTVahcCgUdtQYaVajD6fWqTf1GFFIZQyLxuOGhTkKm8eOR10TrPR3u18U%2BjIv2Qmaef%2BYqVHILk%2BYkBFpLEP7UkIZtzuYo8fME9QIEBb1Waar4jaHAKyQKH0jC32WjXbtKyzEYg79X2329TivGYXoKS3DuVEd3V0MsHq&X-Amz-Signature=b4ee0d23e0ff9e1438a9ad7545f8fbbb0eecfb9b693376b112179dfd0959fd02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOFJXFH6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCro7LUA%2FjBFTHXn1KbzBMZ0MNmn8hb7NKIyiGTbySGkgIhAImH5SIaQZcNbDKg8JLmqo1vJWT%2BHSBsQFzp1yU6JmRoKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZLgP4RAgxNFXMq5wq3APtkxxP97orwlfXvAekUICk%2FHgXRJnwuk0BHCGeoboEcNxSH0HJmMynvnRSpLeOGWpQuXTvRhag%2F5dUNkdHghRHFdFcweswQ%2BnutaWKPS%2FIFBgmEDf3%2BUyiecIiVmqia7BEVPv7TCdt8Sr5nwl8R1oJyk9%2FEWnZXIEZG47lXWVs%2F%2F4jvURoj1DolYv2wJ6rGkPh27TCS%2FHsJalMwMuzUjew0ZeSjKI3PRa0%2B5Aq8Q%2FbHAceUgOgXI0kNnWLpkbrHhSXEj1rAle2w5HFdbbR86QKLSxcKU4ZAVaGRWhV%2Bg%2B7sNLpW04fHDi1VDHK%2FJq7LXOqx6YFi8cb3fSK%2BdGn5Cm5jRGu57j81S6mys1wBeuMg0vR4KPBZ36Wpt3KeKJEo0RWs3vqlKA3WQdSFXV7Da0HZg6W8B8qJMqFf2zfERP%2BPkmLWG8yTQXTkFuBihbpXdDX51VfopiyqJypGMfLCSSG8%2FxSutbciZcrGndFm7smzgUUUUVvLNVqdvKMfbmY%2F%2F0Tma3Him8HPZ9Sbkvx4iG2gtKs3cygUJsx3f2vqj2fxr%2Bn3zlKcOvOpy7O9zEMUIJZgs9pLuuEvihXnTjZZQqYD6QdleG7Tz2Py4J2sJzv%2FMOQAOXh%2ByX5egOpSzCB%2F9C9BjqkAe2AGk%2FCZKnL39WPn711c%2B18Ag3nZcrRN4XbAPpKTqruzGtShQXtqb8biTVahcCgUdtQYaVajD6fWqTf1GFFIZQyLxuOGhTkKm8eOR10TrPR3u18U%2BjIv2Qmaef%2BYqVHILk%2BYkBFpLEP7UkIZtzuYo8fME9QIEBb1Waar4jaHAKyQKH0jC32WjXbtKyzEYg79X2329TivGYXoKS3DuVEd3V0MsHq&X-Amz-Signature=9fac649307812045219f79a7f8566f5a06e9f3a64d3f9fea73e7f5ed2fc66e01&X-Amz-SignedHeaders=host&x-id=GetObject)
