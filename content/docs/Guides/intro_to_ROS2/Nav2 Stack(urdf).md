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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYO6PL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXdtBFzEjTc0l4kfTKMi6nLVu17bu7ALjKGPFRKxpXQIhANLDnfdJZpEEFqt71tCcVZVkAewh%2BZcMZb7brVlske%2BDKv8DCDIQABoMNjM3NDIzMTgzODA1IgzJ8lNPi7ZGvYqOpmIq3AO%2F%2FHVdZGq4z%2B6zEQAM%2BlBjti7aFrumt8JJI1FzHgEhhVVt1KzOJO6apnplHgCEsa31jVrAjCXFtiDLhRNkpG4D2qPzZ6%2BllSRrVScYuw%2FRWP86vSE9jyJ3iq6TeAg%2FmMl84LR0zl%2BE%2FdePpQn1DpM26yXBLUiQ3%2FeNSd5OlIVxL83T%2BlPSZPGI0Noj2uWhTsyPZfHfEkYsEf8EMlqdOX3QwsMSOXbY%2BKz7j7P9nmgp2D4EN1L1pgv1w4Fqj4IROTTY8M2qFD3rLxg2q0Dm3lyclfqezF%2BIlUZkUWFYa%2FyTIVfaQaStRkG02uoWTE3xM8Fa1Mix9l6hI9T06HBhXb7O8bx649f7D49mn%2FeUtgCioJezDPxIXPzSoETQ8fZn7Vofi9IHAbEwRutMUM7p5MOffVMovfNRFiUkaNAhmlqbQuWgsodmqOsR%2B3LQNkGO%2Fv3MIRKDzfkXxeDKjCINRAPvv7wHHTxUvQAURc3NhFDhOtNo2g6ZVheSQ6CkhwRDhOODFa0wZFwvlrpm70B9qglvag%2BeMzzP0lLOvK2xek%2BrHgwL66nGnWNazHNe9kNs0hfP%2Bfh7aI0GM3pO4qix0kByqWg84yTq9Vh99QAGXgjWRwJwZhllUEGezm26UzDWx8W%2FBjqkAWpBCG1StrgT9IIviFTdPs3KRZr35Zzg9ADE%2BmaLSgDcu8G7yfZlRP1%2BJ8AZiBjoylmonfMNXLhxIrZ6kcOmkqpyxvnGKig%2F6iw8h%2Bzvr9pgr2OZAAnGouAEyfH1DSBu0hrD%2BP0oXQCE6s6D1WAwLSW1fLnqcAMfIOgvBeY8C2lrMIomRRPPWtuJFClHyWrZjPXJiXF1MhSwZvMH5OWSy1EpbOvG&X-Amz-Signature=9d7985790bfc6365c6af088b0966521cbd005aee28ece2140969b17ca2b7d03d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYO6PL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXdtBFzEjTc0l4kfTKMi6nLVu17bu7ALjKGPFRKxpXQIhANLDnfdJZpEEFqt71tCcVZVkAewh%2BZcMZb7brVlske%2BDKv8DCDIQABoMNjM3NDIzMTgzODA1IgzJ8lNPi7ZGvYqOpmIq3AO%2F%2FHVdZGq4z%2B6zEQAM%2BlBjti7aFrumt8JJI1FzHgEhhVVt1KzOJO6apnplHgCEsa31jVrAjCXFtiDLhRNkpG4D2qPzZ6%2BllSRrVScYuw%2FRWP86vSE9jyJ3iq6TeAg%2FmMl84LR0zl%2BE%2FdePpQn1DpM26yXBLUiQ3%2FeNSd5OlIVxL83T%2BlPSZPGI0Noj2uWhTsyPZfHfEkYsEf8EMlqdOX3QwsMSOXbY%2BKz7j7P9nmgp2D4EN1L1pgv1w4Fqj4IROTTY8M2qFD3rLxg2q0Dm3lyclfqezF%2BIlUZkUWFYa%2FyTIVfaQaStRkG02uoWTE3xM8Fa1Mix9l6hI9T06HBhXb7O8bx649f7D49mn%2FeUtgCioJezDPxIXPzSoETQ8fZn7Vofi9IHAbEwRutMUM7p5MOffVMovfNRFiUkaNAhmlqbQuWgsodmqOsR%2B3LQNkGO%2Fv3MIRKDzfkXxeDKjCINRAPvv7wHHTxUvQAURc3NhFDhOtNo2g6ZVheSQ6CkhwRDhOODFa0wZFwvlrpm70B9qglvag%2BeMzzP0lLOvK2xek%2BrHgwL66nGnWNazHNe9kNs0hfP%2Bfh7aI0GM3pO4qix0kByqWg84yTq9Vh99QAGXgjWRwJwZhllUEGezm26UzDWx8W%2FBjqkAWpBCG1StrgT9IIviFTdPs3KRZr35Zzg9ADE%2BmaLSgDcu8G7yfZlRP1%2BJ8AZiBjoylmonfMNXLhxIrZ6kcOmkqpyxvnGKig%2F6iw8h%2Bzvr9pgr2OZAAnGouAEyfH1DSBu0hrD%2BP0oXQCE6s6D1WAwLSW1fLnqcAMfIOgvBeY8C2lrMIomRRPPWtuJFClHyWrZjPXJiXF1MhSwZvMH5OWSy1EpbOvG&X-Amz-Signature=287e955ca3f514c268917d4486389efec869c3e8c6549e05b3a22450c6169646&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYO6PL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXdtBFzEjTc0l4kfTKMi6nLVu17bu7ALjKGPFRKxpXQIhANLDnfdJZpEEFqt71tCcVZVkAewh%2BZcMZb7brVlske%2BDKv8DCDIQABoMNjM3NDIzMTgzODA1IgzJ8lNPi7ZGvYqOpmIq3AO%2F%2FHVdZGq4z%2B6zEQAM%2BlBjti7aFrumt8JJI1FzHgEhhVVt1KzOJO6apnplHgCEsa31jVrAjCXFtiDLhRNkpG4D2qPzZ6%2BllSRrVScYuw%2FRWP86vSE9jyJ3iq6TeAg%2FmMl84LR0zl%2BE%2FdePpQn1DpM26yXBLUiQ3%2FeNSd5OlIVxL83T%2BlPSZPGI0Noj2uWhTsyPZfHfEkYsEf8EMlqdOX3QwsMSOXbY%2BKz7j7P9nmgp2D4EN1L1pgv1w4Fqj4IROTTY8M2qFD3rLxg2q0Dm3lyclfqezF%2BIlUZkUWFYa%2FyTIVfaQaStRkG02uoWTE3xM8Fa1Mix9l6hI9T06HBhXb7O8bx649f7D49mn%2FeUtgCioJezDPxIXPzSoETQ8fZn7Vofi9IHAbEwRutMUM7p5MOffVMovfNRFiUkaNAhmlqbQuWgsodmqOsR%2B3LQNkGO%2Fv3MIRKDzfkXxeDKjCINRAPvv7wHHTxUvQAURc3NhFDhOtNo2g6ZVheSQ6CkhwRDhOODFa0wZFwvlrpm70B9qglvag%2BeMzzP0lLOvK2xek%2BrHgwL66nGnWNazHNe9kNs0hfP%2Bfh7aI0GM3pO4qix0kByqWg84yTq9Vh99QAGXgjWRwJwZhllUEGezm26UzDWx8W%2FBjqkAWpBCG1StrgT9IIviFTdPs3KRZr35Zzg9ADE%2BmaLSgDcu8G7yfZlRP1%2BJ8AZiBjoylmonfMNXLhxIrZ6kcOmkqpyxvnGKig%2F6iw8h%2Bzvr9pgr2OZAAnGouAEyfH1DSBu0hrD%2BP0oXQCE6s6D1WAwLSW1fLnqcAMfIOgvBeY8C2lrMIomRRPPWtuJFClHyWrZjPXJiXF1MhSwZvMH5OWSy1EpbOvG&X-Amz-Signature=0683f8a758f92c9b13c131baf2cd1a1900d25cb7feef6de275a6c6ab53d84e20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYO6PL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXdtBFzEjTc0l4kfTKMi6nLVu17bu7ALjKGPFRKxpXQIhANLDnfdJZpEEFqt71tCcVZVkAewh%2BZcMZb7brVlske%2BDKv8DCDIQABoMNjM3NDIzMTgzODA1IgzJ8lNPi7ZGvYqOpmIq3AO%2F%2FHVdZGq4z%2B6zEQAM%2BlBjti7aFrumt8JJI1FzHgEhhVVt1KzOJO6apnplHgCEsa31jVrAjCXFtiDLhRNkpG4D2qPzZ6%2BllSRrVScYuw%2FRWP86vSE9jyJ3iq6TeAg%2FmMl84LR0zl%2BE%2FdePpQn1DpM26yXBLUiQ3%2FeNSd5OlIVxL83T%2BlPSZPGI0Noj2uWhTsyPZfHfEkYsEf8EMlqdOX3QwsMSOXbY%2BKz7j7P9nmgp2D4EN1L1pgv1w4Fqj4IROTTY8M2qFD3rLxg2q0Dm3lyclfqezF%2BIlUZkUWFYa%2FyTIVfaQaStRkG02uoWTE3xM8Fa1Mix9l6hI9T06HBhXb7O8bx649f7D49mn%2FeUtgCioJezDPxIXPzSoETQ8fZn7Vofi9IHAbEwRutMUM7p5MOffVMovfNRFiUkaNAhmlqbQuWgsodmqOsR%2B3LQNkGO%2Fv3MIRKDzfkXxeDKjCINRAPvv7wHHTxUvQAURc3NhFDhOtNo2g6ZVheSQ6CkhwRDhOODFa0wZFwvlrpm70B9qglvag%2BeMzzP0lLOvK2xek%2BrHgwL66nGnWNazHNe9kNs0hfP%2Bfh7aI0GM3pO4qix0kByqWg84yTq9Vh99QAGXgjWRwJwZhllUEGezm26UzDWx8W%2FBjqkAWpBCG1StrgT9IIviFTdPs3KRZr35Zzg9ADE%2BmaLSgDcu8G7yfZlRP1%2BJ8AZiBjoylmonfMNXLhxIrZ6kcOmkqpyxvnGKig%2F6iw8h%2Bzvr9pgr2OZAAnGouAEyfH1DSBu0hrD%2BP0oXQCE6s6D1WAwLSW1fLnqcAMfIOgvBeY8C2lrMIomRRPPWtuJFClHyWrZjPXJiXF1MhSwZvMH5OWSy1EpbOvG&X-Amz-Signature=9d05b22abb5ef2faf190e50d92b5ffe4ccc1356b1b33d6a59fe1ab348968c729&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYO6PL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXdtBFzEjTc0l4kfTKMi6nLVu17bu7ALjKGPFRKxpXQIhANLDnfdJZpEEFqt71tCcVZVkAewh%2BZcMZb7brVlske%2BDKv8DCDIQABoMNjM3NDIzMTgzODA1IgzJ8lNPi7ZGvYqOpmIq3AO%2F%2FHVdZGq4z%2B6zEQAM%2BlBjti7aFrumt8JJI1FzHgEhhVVt1KzOJO6apnplHgCEsa31jVrAjCXFtiDLhRNkpG4D2qPzZ6%2BllSRrVScYuw%2FRWP86vSE9jyJ3iq6TeAg%2FmMl84LR0zl%2BE%2FdePpQn1DpM26yXBLUiQ3%2FeNSd5OlIVxL83T%2BlPSZPGI0Noj2uWhTsyPZfHfEkYsEf8EMlqdOX3QwsMSOXbY%2BKz7j7P9nmgp2D4EN1L1pgv1w4Fqj4IROTTY8M2qFD3rLxg2q0Dm3lyclfqezF%2BIlUZkUWFYa%2FyTIVfaQaStRkG02uoWTE3xM8Fa1Mix9l6hI9T06HBhXb7O8bx649f7D49mn%2FeUtgCioJezDPxIXPzSoETQ8fZn7Vofi9IHAbEwRutMUM7p5MOffVMovfNRFiUkaNAhmlqbQuWgsodmqOsR%2B3LQNkGO%2Fv3MIRKDzfkXxeDKjCINRAPvv7wHHTxUvQAURc3NhFDhOtNo2g6ZVheSQ6CkhwRDhOODFa0wZFwvlrpm70B9qglvag%2BeMzzP0lLOvK2xek%2BrHgwL66nGnWNazHNe9kNs0hfP%2Bfh7aI0GM3pO4qix0kByqWg84yTq9Vh99QAGXgjWRwJwZhllUEGezm26UzDWx8W%2FBjqkAWpBCG1StrgT9IIviFTdPs3KRZr35Zzg9ADE%2BmaLSgDcu8G7yfZlRP1%2BJ8AZiBjoylmonfMNXLhxIrZ6kcOmkqpyxvnGKig%2F6iw8h%2Bzvr9pgr2OZAAnGouAEyfH1DSBu0hrD%2BP0oXQCE6s6D1WAwLSW1fLnqcAMfIOgvBeY8C2lrMIomRRPPWtuJFClHyWrZjPXJiXF1MhSwZvMH5OWSy1EpbOvG&X-Amz-Signature=fd7c09c1dd890de52a8d011d1d3e9bf29e4eecba1826ee0270e30b7cef1621b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPRYO6PL%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWXdtBFzEjTc0l4kfTKMi6nLVu17bu7ALjKGPFRKxpXQIhANLDnfdJZpEEFqt71tCcVZVkAewh%2BZcMZb7brVlske%2BDKv8DCDIQABoMNjM3NDIzMTgzODA1IgzJ8lNPi7ZGvYqOpmIq3AO%2F%2FHVdZGq4z%2B6zEQAM%2BlBjti7aFrumt8JJI1FzHgEhhVVt1KzOJO6apnplHgCEsa31jVrAjCXFtiDLhRNkpG4D2qPzZ6%2BllSRrVScYuw%2FRWP86vSE9jyJ3iq6TeAg%2FmMl84LR0zl%2BE%2FdePpQn1DpM26yXBLUiQ3%2FeNSd5OlIVxL83T%2BlPSZPGI0Noj2uWhTsyPZfHfEkYsEf8EMlqdOX3QwsMSOXbY%2BKz7j7P9nmgp2D4EN1L1pgv1w4Fqj4IROTTY8M2qFD3rLxg2q0Dm3lyclfqezF%2BIlUZkUWFYa%2FyTIVfaQaStRkG02uoWTE3xM8Fa1Mix9l6hI9T06HBhXb7O8bx649f7D49mn%2FeUtgCioJezDPxIXPzSoETQ8fZn7Vofi9IHAbEwRutMUM7p5MOffVMovfNRFiUkaNAhmlqbQuWgsodmqOsR%2B3LQNkGO%2Fv3MIRKDzfkXxeDKjCINRAPvv7wHHTxUvQAURc3NhFDhOtNo2g6ZVheSQ6CkhwRDhOODFa0wZFwvlrpm70B9qglvag%2BeMzzP0lLOvK2xek%2BrHgwL66nGnWNazHNe9kNs0hfP%2Bfh7aI0GM3pO4qix0kByqWg84yTq9Vh99QAGXgjWRwJwZhllUEGezm26UzDWx8W%2FBjqkAWpBCG1StrgT9IIviFTdPs3KRZr35Zzg9ADE%2BmaLSgDcu8G7yfZlRP1%2BJ8AZiBjoylmonfMNXLhxIrZ6kcOmkqpyxvnGKig%2F6iw8h%2Bzvr9pgr2OZAAnGouAEyfH1DSBu0hrD%2BP0oXQCE6s6D1WAwLSW1fLnqcAMfIOgvBeY8C2lrMIomRRPPWtuJFClHyWrZjPXJiXF1MhSwZvMH5OWSy1EpbOvG&X-Amz-Signature=d4cdbd17cf04bf1596a72e209abd83522c8c0599d8e94d69025b2291e612ea1a&X-Amz-SignedHeaders=host&x-id=GetObject)
