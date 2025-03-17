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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTI3STQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCikYT8W6xPSiuVCRwWn8ZRQMG5VMxKH442zTXiOmF%2BlwIhAP7u1EBYE9zrXdDPiLnIYjwZtcO%2FAQCLmd407xlctJmmKv8DCEYQABoMNjM3NDIzMTgzODA1IgzX4ripEKq5E9n%2F9IYq3AOxINQO0WcdKs9NvrCgYfe7mVJqX9aDNz22giBA3xAQJlNYXvA7grRoXpj%2FNs8d4upTNVPpUHqyLccUoLZpJpoK1Gxi%2BsR5JuF5WDwkzU%2BUiEkbmwFtjRNIDO1bQ%2F6NS0MyDSQwaD7r%2FYKH52JgAUf%2FLq3Mr5huL2YvdYMQVL%2BWBbUEw648obBC3p52GsRRCaDACNdiSyr8ZPZ%2B%2BRrPxJ%2FVAV8yKo9xmWxKEsm2Y4Yx8mH34AHUbgDlHSCj%2FMvu4IsQdnLypECoYsrD%2By9Ky4%2Bhjqvic4%2Fe2dwXfyHEc12ArkovLMiLnZNwkwivSV6HdQCd9C2%2F%2FvBEpashtjvO0zBixUREMV%2FUzhJROIPikYVpBsw1qSUL%2B4IlhIajexxAOh21iOW7qT0UTdBggSH9JOcQZxxEO5NMmsO6wNjXq6iEtGxFLEFfx8ZyMZAO0nOSR3oJVYGbGG2G1rT9HcXJZQyKwkV14DqX3EoTePeomlSLYkwKga8GKOt%2FJdc4iU%2BY66k2SfIonSiqTde6TuYvzOhd95rngASErl7T2fC60rTNTWX%2B4Iqr9Gq65OQwmlye0Ggqdrlzfjg%2BS3317%2B6QBXisUTOHvREmXDzlFNIr3MnNkxzpdGsTLyWpv%2B40DTCCq%2BC%2BBjqkAZU9YxeiO8I%2FbBr6V1D7RWyDQf8A3%2FXcepAdeGch5t%2B2cChiJ5NQiT9HMWbSrtbkUD1f7nQ6k7quJVZL%2F4l1lUwVdE1W5lTd2Age44nd1UiqkzRu6zF1YeFcDCe6NXHOBtU%2F7SRuLeYNfcEtI%2Fw49%2FaqQQzCtsFsib8lXs3kAFNTbWktJaFQJQnNUzYommoA9BZZKLwbf3dpcUbPJfB8iE35Gto2&X-Amz-Signature=1c19b2c5739bee7ec0f2670383bd958e4490344408917d5f91b055e65b063302&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTI3STQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCikYT8W6xPSiuVCRwWn8ZRQMG5VMxKH442zTXiOmF%2BlwIhAP7u1EBYE9zrXdDPiLnIYjwZtcO%2FAQCLmd407xlctJmmKv8DCEYQABoMNjM3NDIzMTgzODA1IgzX4ripEKq5E9n%2F9IYq3AOxINQO0WcdKs9NvrCgYfe7mVJqX9aDNz22giBA3xAQJlNYXvA7grRoXpj%2FNs8d4upTNVPpUHqyLccUoLZpJpoK1Gxi%2BsR5JuF5WDwkzU%2BUiEkbmwFtjRNIDO1bQ%2F6NS0MyDSQwaD7r%2FYKH52JgAUf%2FLq3Mr5huL2YvdYMQVL%2BWBbUEw648obBC3p52GsRRCaDACNdiSyr8ZPZ%2B%2BRrPxJ%2FVAV8yKo9xmWxKEsm2Y4Yx8mH34AHUbgDlHSCj%2FMvu4IsQdnLypECoYsrD%2By9Ky4%2Bhjqvic4%2Fe2dwXfyHEc12ArkovLMiLnZNwkwivSV6HdQCd9C2%2F%2FvBEpashtjvO0zBixUREMV%2FUzhJROIPikYVpBsw1qSUL%2B4IlhIajexxAOh21iOW7qT0UTdBggSH9JOcQZxxEO5NMmsO6wNjXq6iEtGxFLEFfx8ZyMZAO0nOSR3oJVYGbGG2G1rT9HcXJZQyKwkV14DqX3EoTePeomlSLYkwKga8GKOt%2FJdc4iU%2BY66k2SfIonSiqTde6TuYvzOhd95rngASErl7T2fC60rTNTWX%2B4Iqr9Gq65OQwmlye0Ggqdrlzfjg%2BS3317%2B6QBXisUTOHvREmXDzlFNIr3MnNkxzpdGsTLyWpv%2B40DTCCq%2BC%2BBjqkAZU9YxeiO8I%2FbBr6V1D7RWyDQf8A3%2FXcepAdeGch5t%2B2cChiJ5NQiT9HMWbSrtbkUD1f7nQ6k7quJVZL%2F4l1lUwVdE1W5lTd2Age44nd1UiqkzRu6zF1YeFcDCe6NXHOBtU%2F7SRuLeYNfcEtI%2Fw49%2FaqQQzCtsFsib8lXs3kAFNTbWktJaFQJQnNUzYommoA9BZZKLwbf3dpcUbPJfB8iE35Gto2&X-Amz-Signature=b7cdd0d5f25ceab6dec03adee5f92e1d471edf02239f6f436f7b117523d0e7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTI3STQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCikYT8W6xPSiuVCRwWn8ZRQMG5VMxKH442zTXiOmF%2BlwIhAP7u1EBYE9zrXdDPiLnIYjwZtcO%2FAQCLmd407xlctJmmKv8DCEYQABoMNjM3NDIzMTgzODA1IgzX4ripEKq5E9n%2F9IYq3AOxINQO0WcdKs9NvrCgYfe7mVJqX9aDNz22giBA3xAQJlNYXvA7grRoXpj%2FNs8d4upTNVPpUHqyLccUoLZpJpoK1Gxi%2BsR5JuF5WDwkzU%2BUiEkbmwFtjRNIDO1bQ%2F6NS0MyDSQwaD7r%2FYKH52JgAUf%2FLq3Mr5huL2YvdYMQVL%2BWBbUEw648obBC3p52GsRRCaDACNdiSyr8ZPZ%2B%2BRrPxJ%2FVAV8yKo9xmWxKEsm2Y4Yx8mH34AHUbgDlHSCj%2FMvu4IsQdnLypECoYsrD%2By9Ky4%2Bhjqvic4%2Fe2dwXfyHEc12ArkovLMiLnZNwkwivSV6HdQCd9C2%2F%2FvBEpashtjvO0zBixUREMV%2FUzhJROIPikYVpBsw1qSUL%2B4IlhIajexxAOh21iOW7qT0UTdBggSH9JOcQZxxEO5NMmsO6wNjXq6iEtGxFLEFfx8ZyMZAO0nOSR3oJVYGbGG2G1rT9HcXJZQyKwkV14DqX3EoTePeomlSLYkwKga8GKOt%2FJdc4iU%2BY66k2SfIonSiqTde6TuYvzOhd95rngASErl7T2fC60rTNTWX%2B4Iqr9Gq65OQwmlye0Ggqdrlzfjg%2BS3317%2B6QBXisUTOHvREmXDzlFNIr3MnNkxzpdGsTLyWpv%2B40DTCCq%2BC%2BBjqkAZU9YxeiO8I%2FbBr6V1D7RWyDQf8A3%2FXcepAdeGch5t%2B2cChiJ5NQiT9HMWbSrtbkUD1f7nQ6k7quJVZL%2F4l1lUwVdE1W5lTd2Age44nd1UiqkzRu6zF1YeFcDCe6NXHOBtU%2F7SRuLeYNfcEtI%2Fw49%2FaqQQzCtsFsib8lXs3kAFNTbWktJaFQJQnNUzYommoA9BZZKLwbf3dpcUbPJfB8iE35Gto2&X-Amz-Signature=58700c8177729fb0a8277a6ae3b936b547d89309352d9592093c78a2c5741443&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTI3STQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCikYT8W6xPSiuVCRwWn8ZRQMG5VMxKH442zTXiOmF%2BlwIhAP7u1EBYE9zrXdDPiLnIYjwZtcO%2FAQCLmd407xlctJmmKv8DCEYQABoMNjM3NDIzMTgzODA1IgzX4ripEKq5E9n%2F9IYq3AOxINQO0WcdKs9NvrCgYfe7mVJqX9aDNz22giBA3xAQJlNYXvA7grRoXpj%2FNs8d4upTNVPpUHqyLccUoLZpJpoK1Gxi%2BsR5JuF5WDwkzU%2BUiEkbmwFtjRNIDO1bQ%2F6NS0MyDSQwaD7r%2FYKH52JgAUf%2FLq3Mr5huL2YvdYMQVL%2BWBbUEw648obBC3p52GsRRCaDACNdiSyr8ZPZ%2B%2BRrPxJ%2FVAV8yKo9xmWxKEsm2Y4Yx8mH34AHUbgDlHSCj%2FMvu4IsQdnLypECoYsrD%2By9Ky4%2Bhjqvic4%2Fe2dwXfyHEc12ArkovLMiLnZNwkwivSV6HdQCd9C2%2F%2FvBEpashtjvO0zBixUREMV%2FUzhJROIPikYVpBsw1qSUL%2B4IlhIajexxAOh21iOW7qT0UTdBggSH9JOcQZxxEO5NMmsO6wNjXq6iEtGxFLEFfx8ZyMZAO0nOSR3oJVYGbGG2G1rT9HcXJZQyKwkV14DqX3EoTePeomlSLYkwKga8GKOt%2FJdc4iU%2BY66k2SfIonSiqTde6TuYvzOhd95rngASErl7T2fC60rTNTWX%2B4Iqr9Gq65OQwmlye0Ggqdrlzfjg%2BS3317%2B6QBXisUTOHvREmXDzlFNIr3MnNkxzpdGsTLyWpv%2B40DTCCq%2BC%2BBjqkAZU9YxeiO8I%2FbBr6V1D7RWyDQf8A3%2FXcepAdeGch5t%2B2cChiJ5NQiT9HMWbSrtbkUD1f7nQ6k7quJVZL%2F4l1lUwVdE1W5lTd2Age44nd1UiqkzRu6zF1YeFcDCe6NXHOBtU%2F7SRuLeYNfcEtI%2Fw49%2FaqQQzCtsFsib8lXs3kAFNTbWktJaFQJQnNUzYommoA9BZZKLwbf3dpcUbPJfB8iE35Gto2&X-Amz-Signature=eda3356187664df092299f71f36c997971d4705c928aac02b7275553165a443c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTI3STQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCikYT8W6xPSiuVCRwWn8ZRQMG5VMxKH442zTXiOmF%2BlwIhAP7u1EBYE9zrXdDPiLnIYjwZtcO%2FAQCLmd407xlctJmmKv8DCEYQABoMNjM3NDIzMTgzODA1IgzX4ripEKq5E9n%2F9IYq3AOxINQO0WcdKs9NvrCgYfe7mVJqX9aDNz22giBA3xAQJlNYXvA7grRoXpj%2FNs8d4upTNVPpUHqyLccUoLZpJpoK1Gxi%2BsR5JuF5WDwkzU%2BUiEkbmwFtjRNIDO1bQ%2F6NS0MyDSQwaD7r%2FYKH52JgAUf%2FLq3Mr5huL2YvdYMQVL%2BWBbUEw648obBC3p52GsRRCaDACNdiSyr8ZPZ%2B%2BRrPxJ%2FVAV8yKo9xmWxKEsm2Y4Yx8mH34AHUbgDlHSCj%2FMvu4IsQdnLypECoYsrD%2By9Ky4%2Bhjqvic4%2Fe2dwXfyHEc12ArkovLMiLnZNwkwivSV6HdQCd9C2%2F%2FvBEpashtjvO0zBixUREMV%2FUzhJROIPikYVpBsw1qSUL%2B4IlhIajexxAOh21iOW7qT0UTdBggSH9JOcQZxxEO5NMmsO6wNjXq6iEtGxFLEFfx8ZyMZAO0nOSR3oJVYGbGG2G1rT9HcXJZQyKwkV14DqX3EoTePeomlSLYkwKga8GKOt%2FJdc4iU%2BY66k2SfIonSiqTde6TuYvzOhd95rngASErl7T2fC60rTNTWX%2B4Iqr9Gq65OQwmlye0Ggqdrlzfjg%2BS3317%2B6QBXisUTOHvREmXDzlFNIr3MnNkxzpdGsTLyWpv%2B40DTCCq%2BC%2BBjqkAZU9YxeiO8I%2FbBr6V1D7RWyDQf8A3%2FXcepAdeGch5t%2B2cChiJ5NQiT9HMWbSrtbkUD1f7nQ6k7quJVZL%2F4l1lUwVdE1W5lTd2Age44nd1UiqkzRu6zF1YeFcDCe6NXHOBtU%2F7SRuLeYNfcEtI%2Fw49%2FaqQQzCtsFsib8lXs3kAFNTbWktJaFQJQnNUzYommoA9BZZKLwbf3dpcUbPJfB8iE35Gto2&X-Amz-Signature=2188bfdb83b91e8d98980e8c97c00892b863139491acd48c7b68c83e079a4675&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTI3STQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCikYT8W6xPSiuVCRwWn8ZRQMG5VMxKH442zTXiOmF%2BlwIhAP7u1EBYE9zrXdDPiLnIYjwZtcO%2FAQCLmd407xlctJmmKv8DCEYQABoMNjM3NDIzMTgzODA1IgzX4ripEKq5E9n%2F9IYq3AOxINQO0WcdKs9NvrCgYfe7mVJqX9aDNz22giBA3xAQJlNYXvA7grRoXpj%2FNs8d4upTNVPpUHqyLccUoLZpJpoK1Gxi%2BsR5JuF5WDwkzU%2BUiEkbmwFtjRNIDO1bQ%2F6NS0MyDSQwaD7r%2FYKH52JgAUf%2FLq3Mr5huL2YvdYMQVL%2BWBbUEw648obBC3p52GsRRCaDACNdiSyr8ZPZ%2B%2BRrPxJ%2FVAV8yKo9xmWxKEsm2Y4Yx8mH34AHUbgDlHSCj%2FMvu4IsQdnLypECoYsrD%2By9Ky4%2Bhjqvic4%2Fe2dwXfyHEc12ArkovLMiLnZNwkwivSV6HdQCd9C2%2F%2FvBEpashtjvO0zBixUREMV%2FUzhJROIPikYVpBsw1qSUL%2B4IlhIajexxAOh21iOW7qT0UTdBggSH9JOcQZxxEO5NMmsO6wNjXq6iEtGxFLEFfx8ZyMZAO0nOSR3oJVYGbGG2G1rT9HcXJZQyKwkV14DqX3EoTePeomlSLYkwKga8GKOt%2FJdc4iU%2BY66k2SfIonSiqTde6TuYvzOhd95rngASErl7T2fC60rTNTWX%2B4Iqr9Gq65OQwmlye0Ggqdrlzfjg%2BS3317%2B6QBXisUTOHvREmXDzlFNIr3MnNkxzpdGsTLyWpv%2B40DTCCq%2BC%2BBjqkAZU9YxeiO8I%2FbBr6V1D7RWyDQf8A3%2FXcepAdeGch5t%2B2cChiJ5NQiT9HMWbSrtbkUD1f7nQ6k7quJVZL%2F4l1lUwVdE1W5lTd2Age44nd1UiqkzRu6zF1YeFcDCe6NXHOBtU%2F7SRuLeYNfcEtI%2Fw49%2FaqQQzCtsFsib8lXs3kAFNTbWktJaFQJQnNUzYommoA9BZZKLwbf3dpcUbPJfB8iE35Gto2&X-Amz-Signature=a1c9c9d22cc90499bf4b7a6d7b8adef6f79c2b51ca2a2f6d2054203348b4de79&X-Amz-SignedHeaders=host&x-id=GetObject)
