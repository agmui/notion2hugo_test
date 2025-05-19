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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJLGUMA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC731m6Uetu%2Fuyar9rv0HLUNtp5kE6qTugXt4OVT25MhAIhAM0HJKliG6VITqSOT63hovU3zN3ZJ3GMPVRS0IFqzKDmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmneByk87B%2Fnaufmkq3AM%2BaxAzkGaEjJu9E1kqkZYrljxzliWZ3l4qZ%2BPO0xu8ZzW%2FzyRzXSd885NskN%2BSmeu9InWgTjx3N3Mm1fcLxvbqk2eCGBekGPbXZdWJQs%2BEgTcm7Uraiu3iWldHZwdvEYfplhUMSzvx5Z2LjUy8VkvtY9bIJCaZrgZF9ONEeFZI%2FEyqQd9YrUo93HaRHy0HM%2BE6kMIPFHw7fspLibVMrmCjuLiFz7pYWMEzWnLh3VVMAOjw%2Bxq5dJyuDD7cLSVKiMhGv24iENn0bJvTjHRvtMiX0pLxgX2eZQ%2FQCGKnmYnq2Q60Vda9Y7kdBFozrlpuf7vJGLjE%2BzAy9OOHjZTVN9p83iD4UIj%2BkfcDyaq%2FG48ZMTWg2RE4QcvmrdUbt7NtESzCpuzd9QP8e6LA6mpV14ZYVFgtq7biWX%2F7HdqkRLrXyZeRKElfdxAQEY95f%2FxTV2TTTjD5hbHI6VN%2FXqzGeUxuiEUU0IhGr7FWhHd5j1OjnaKLcaIg275rHcEsUH46LMbCeExP2yxOuJ%2BSr8SW0t%2FSA55UOo680VXqC04xys9LhRcmroFU6X3oJ6ZKkT2FFvqAwA8f%2BsyH6IUN%2FiZygsqCC6ZY8ouvnbATMccuJCjTRwQiDbeD3Csftt7b8jDO7KnBBjqkAbGwJq6HTBqjvyy14jZGoOB8YDJ4t%2B%2BtIZPpFP8dNvXtzOoL4W4pRXkWb4REYl2abz1f6Nq4crx79jRn1Fku%2FcvxfzXLkqBZ56qh036jeFhYxlzRbKVnswYuF4e3K4hYysSoV7eTuvr%2Fbxaip%2FhPMzv0e9khhJ4NRn9iNDI36uLtjiTQ4RizM4Du%2FLPrElWEeI1foIn9wAZHPZGrsEhUWa5sZYkH&X-Amz-Signature=eec60485bb567bc6debf2165b94ff47e0a3adfc605ccf0f7712a6120d9d2a6a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJLGUMA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC731m6Uetu%2Fuyar9rv0HLUNtp5kE6qTugXt4OVT25MhAIhAM0HJKliG6VITqSOT63hovU3zN3ZJ3GMPVRS0IFqzKDmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmneByk87B%2Fnaufmkq3AM%2BaxAzkGaEjJu9E1kqkZYrljxzliWZ3l4qZ%2BPO0xu8ZzW%2FzyRzXSd885NskN%2BSmeu9InWgTjx3N3Mm1fcLxvbqk2eCGBekGPbXZdWJQs%2BEgTcm7Uraiu3iWldHZwdvEYfplhUMSzvx5Z2LjUy8VkvtY9bIJCaZrgZF9ONEeFZI%2FEyqQd9YrUo93HaRHy0HM%2BE6kMIPFHw7fspLibVMrmCjuLiFz7pYWMEzWnLh3VVMAOjw%2Bxq5dJyuDD7cLSVKiMhGv24iENn0bJvTjHRvtMiX0pLxgX2eZQ%2FQCGKnmYnq2Q60Vda9Y7kdBFozrlpuf7vJGLjE%2BzAy9OOHjZTVN9p83iD4UIj%2BkfcDyaq%2FG48ZMTWg2RE4QcvmrdUbt7NtESzCpuzd9QP8e6LA6mpV14ZYVFgtq7biWX%2F7HdqkRLrXyZeRKElfdxAQEY95f%2FxTV2TTTjD5hbHI6VN%2FXqzGeUxuiEUU0IhGr7FWhHd5j1OjnaKLcaIg275rHcEsUH46LMbCeExP2yxOuJ%2BSr8SW0t%2FSA55UOo680VXqC04xys9LhRcmroFU6X3oJ6ZKkT2FFvqAwA8f%2BsyH6IUN%2FiZygsqCC6ZY8ouvnbATMccuJCjTRwQiDbeD3Csftt7b8jDO7KnBBjqkAbGwJq6HTBqjvyy14jZGoOB8YDJ4t%2B%2BtIZPpFP8dNvXtzOoL4W4pRXkWb4REYl2abz1f6Nq4crx79jRn1Fku%2FcvxfzXLkqBZ56qh036jeFhYxlzRbKVnswYuF4e3K4hYysSoV7eTuvr%2Fbxaip%2FhPMzv0e9khhJ4NRn9iNDI36uLtjiTQ4RizM4Du%2FLPrElWEeI1foIn9wAZHPZGrsEhUWa5sZYkH&X-Amz-Signature=128d7ea0dadbc2a7c68d7ca785bc5313abae067c803db2ed77bec3e5e0c6d2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJLGUMA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC731m6Uetu%2Fuyar9rv0HLUNtp5kE6qTugXt4OVT25MhAIhAM0HJKliG6VITqSOT63hovU3zN3ZJ3GMPVRS0IFqzKDmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmneByk87B%2Fnaufmkq3AM%2BaxAzkGaEjJu9E1kqkZYrljxzliWZ3l4qZ%2BPO0xu8ZzW%2FzyRzXSd885NskN%2BSmeu9InWgTjx3N3Mm1fcLxvbqk2eCGBekGPbXZdWJQs%2BEgTcm7Uraiu3iWldHZwdvEYfplhUMSzvx5Z2LjUy8VkvtY9bIJCaZrgZF9ONEeFZI%2FEyqQd9YrUo93HaRHy0HM%2BE6kMIPFHw7fspLibVMrmCjuLiFz7pYWMEzWnLh3VVMAOjw%2Bxq5dJyuDD7cLSVKiMhGv24iENn0bJvTjHRvtMiX0pLxgX2eZQ%2FQCGKnmYnq2Q60Vda9Y7kdBFozrlpuf7vJGLjE%2BzAy9OOHjZTVN9p83iD4UIj%2BkfcDyaq%2FG48ZMTWg2RE4QcvmrdUbt7NtESzCpuzd9QP8e6LA6mpV14ZYVFgtq7biWX%2F7HdqkRLrXyZeRKElfdxAQEY95f%2FxTV2TTTjD5hbHI6VN%2FXqzGeUxuiEUU0IhGr7FWhHd5j1OjnaKLcaIg275rHcEsUH46LMbCeExP2yxOuJ%2BSr8SW0t%2FSA55UOo680VXqC04xys9LhRcmroFU6X3oJ6ZKkT2FFvqAwA8f%2BsyH6IUN%2FiZygsqCC6ZY8ouvnbATMccuJCjTRwQiDbeD3Csftt7b8jDO7KnBBjqkAbGwJq6HTBqjvyy14jZGoOB8YDJ4t%2B%2BtIZPpFP8dNvXtzOoL4W4pRXkWb4REYl2abz1f6Nq4crx79jRn1Fku%2FcvxfzXLkqBZ56qh036jeFhYxlzRbKVnswYuF4e3K4hYysSoV7eTuvr%2Fbxaip%2FhPMzv0e9khhJ4NRn9iNDI36uLtjiTQ4RizM4Du%2FLPrElWEeI1foIn9wAZHPZGrsEhUWa5sZYkH&X-Amz-Signature=4c9146cc9d4131c84b6ef1ccc03da0b1debab9d2f079b8858da93f6e9071e113&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJLGUMA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC731m6Uetu%2Fuyar9rv0HLUNtp5kE6qTugXt4OVT25MhAIhAM0HJKliG6VITqSOT63hovU3zN3ZJ3GMPVRS0IFqzKDmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmneByk87B%2Fnaufmkq3AM%2BaxAzkGaEjJu9E1kqkZYrljxzliWZ3l4qZ%2BPO0xu8ZzW%2FzyRzXSd885NskN%2BSmeu9InWgTjx3N3Mm1fcLxvbqk2eCGBekGPbXZdWJQs%2BEgTcm7Uraiu3iWldHZwdvEYfplhUMSzvx5Z2LjUy8VkvtY9bIJCaZrgZF9ONEeFZI%2FEyqQd9YrUo93HaRHy0HM%2BE6kMIPFHw7fspLibVMrmCjuLiFz7pYWMEzWnLh3VVMAOjw%2Bxq5dJyuDD7cLSVKiMhGv24iENn0bJvTjHRvtMiX0pLxgX2eZQ%2FQCGKnmYnq2Q60Vda9Y7kdBFozrlpuf7vJGLjE%2BzAy9OOHjZTVN9p83iD4UIj%2BkfcDyaq%2FG48ZMTWg2RE4QcvmrdUbt7NtESzCpuzd9QP8e6LA6mpV14ZYVFgtq7biWX%2F7HdqkRLrXyZeRKElfdxAQEY95f%2FxTV2TTTjD5hbHI6VN%2FXqzGeUxuiEUU0IhGr7FWhHd5j1OjnaKLcaIg275rHcEsUH46LMbCeExP2yxOuJ%2BSr8SW0t%2FSA55UOo680VXqC04xys9LhRcmroFU6X3oJ6ZKkT2FFvqAwA8f%2BsyH6IUN%2FiZygsqCC6ZY8ouvnbATMccuJCjTRwQiDbeD3Csftt7b8jDO7KnBBjqkAbGwJq6HTBqjvyy14jZGoOB8YDJ4t%2B%2BtIZPpFP8dNvXtzOoL4W4pRXkWb4REYl2abz1f6Nq4crx79jRn1Fku%2FcvxfzXLkqBZ56qh036jeFhYxlzRbKVnswYuF4e3K4hYysSoV7eTuvr%2Fbxaip%2FhPMzv0e9khhJ4NRn9iNDI36uLtjiTQ4RizM4Du%2FLPrElWEeI1foIn9wAZHPZGrsEhUWa5sZYkH&X-Amz-Signature=17a5e27e163fdaaedb568121ca7b8397217df1c08beaa1cf48e646a0195d23e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJLGUMA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC731m6Uetu%2Fuyar9rv0HLUNtp5kE6qTugXt4OVT25MhAIhAM0HJKliG6VITqSOT63hovU3zN3ZJ3GMPVRS0IFqzKDmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmneByk87B%2Fnaufmkq3AM%2BaxAzkGaEjJu9E1kqkZYrljxzliWZ3l4qZ%2BPO0xu8ZzW%2FzyRzXSd885NskN%2BSmeu9InWgTjx3N3Mm1fcLxvbqk2eCGBekGPbXZdWJQs%2BEgTcm7Uraiu3iWldHZwdvEYfplhUMSzvx5Z2LjUy8VkvtY9bIJCaZrgZF9ONEeFZI%2FEyqQd9YrUo93HaRHy0HM%2BE6kMIPFHw7fspLibVMrmCjuLiFz7pYWMEzWnLh3VVMAOjw%2Bxq5dJyuDD7cLSVKiMhGv24iENn0bJvTjHRvtMiX0pLxgX2eZQ%2FQCGKnmYnq2Q60Vda9Y7kdBFozrlpuf7vJGLjE%2BzAy9OOHjZTVN9p83iD4UIj%2BkfcDyaq%2FG48ZMTWg2RE4QcvmrdUbt7NtESzCpuzd9QP8e6LA6mpV14ZYVFgtq7biWX%2F7HdqkRLrXyZeRKElfdxAQEY95f%2FxTV2TTTjD5hbHI6VN%2FXqzGeUxuiEUU0IhGr7FWhHd5j1OjnaKLcaIg275rHcEsUH46LMbCeExP2yxOuJ%2BSr8SW0t%2FSA55UOo680VXqC04xys9LhRcmroFU6X3oJ6ZKkT2FFvqAwA8f%2BsyH6IUN%2FiZygsqCC6ZY8ouvnbATMccuJCjTRwQiDbeD3Csftt7b8jDO7KnBBjqkAbGwJq6HTBqjvyy14jZGoOB8YDJ4t%2B%2BtIZPpFP8dNvXtzOoL4W4pRXkWb4REYl2abz1f6Nq4crx79jRn1Fku%2FcvxfzXLkqBZ56qh036jeFhYxlzRbKVnswYuF4e3K4hYysSoV7eTuvr%2Fbxaip%2FhPMzv0e9khhJ4NRn9iNDI36uLtjiTQ4RizM4Du%2FLPrElWEeI1foIn9wAZHPZGrsEhUWa5sZYkH&X-Amz-Signature=a6b6971abba0510b648dcc2f111ae2f6c3b94ad2ceed19a369477aacc9990d14&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VJLGUMA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC731m6Uetu%2Fuyar9rv0HLUNtp5kE6qTugXt4OVT25MhAIhAM0HJKliG6VITqSOT63hovU3zN3ZJ3GMPVRS0IFqzKDmKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmneByk87B%2Fnaufmkq3AM%2BaxAzkGaEjJu9E1kqkZYrljxzliWZ3l4qZ%2BPO0xu8ZzW%2FzyRzXSd885NskN%2BSmeu9InWgTjx3N3Mm1fcLxvbqk2eCGBekGPbXZdWJQs%2BEgTcm7Uraiu3iWldHZwdvEYfplhUMSzvx5Z2LjUy8VkvtY9bIJCaZrgZF9ONEeFZI%2FEyqQd9YrUo93HaRHy0HM%2BE6kMIPFHw7fspLibVMrmCjuLiFz7pYWMEzWnLh3VVMAOjw%2Bxq5dJyuDD7cLSVKiMhGv24iENn0bJvTjHRvtMiX0pLxgX2eZQ%2FQCGKnmYnq2Q60Vda9Y7kdBFozrlpuf7vJGLjE%2BzAy9OOHjZTVN9p83iD4UIj%2BkfcDyaq%2FG48ZMTWg2RE4QcvmrdUbt7NtESzCpuzd9QP8e6LA6mpV14ZYVFgtq7biWX%2F7HdqkRLrXyZeRKElfdxAQEY95f%2FxTV2TTTjD5hbHI6VN%2FXqzGeUxuiEUU0IhGr7FWhHd5j1OjnaKLcaIg275rHcEsUH46LMbCeExP2yxOuJ%2BSr8SW0t%2FSA55UOo680VXqC04xys9LhRcmroFU6X3oJ6ZKkT2FFvqAwA8f%2BsyH6IUN%2FiZygsqCC6ZY8ouvnbATMccuJCjTRwQiDbeD3Csftt7b8jDO7KnBBjqkAbGwJq6HTBqjvyy14jZGoOB8YDJ4t%2B%2BtIZPpFP8dNvXtzOoL4W4pRXkWb4REYl2abz1f6Nq4crx79jRn1Fku%2FcvxfzXLkqBZ56qh036jeFhYxlzRbKVnswYuF4e3K4hYysSoV7eTuvr%2Fbxaip%2FhPMzv0e9khhJ4NRn9iNDI36uLtjiTQ4RizM4Du%2FLPrElWEeI1foIn9wAZHPZGrsEhUWa5sZYkH&X-Amz-Signature=d6ced10487e5ba6705e9dd59cf129f9de631ad38238337ee85b74f7d19677ac7&X-Amz-SignedHeaders=host&x-id=GetObject)
