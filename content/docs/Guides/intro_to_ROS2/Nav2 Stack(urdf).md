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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJSKJU7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDEuyxS9YxMbLSaTQ1hA3nahPrApZPVKwcUML5nAilHRwIhAO9C3kO6yJ0j%2BezT8q7EAVoKIjmodaA7GsVhVHxeDtEfKv8DCFkQABoMNjM3NDIzMTgzODA1Igwa0xKii8iW2GZG2L8q3API2wjuP6U7ESJ8a4D7lELxF5N0tJd5ctdxlYXO9MNDFCYdt78dRsyPrjJ1v0a5RkzZjQKTI1FnKeYAY1hjYO0qdrUVQLwSYxvRa1IeVSvFFPiItg4aE6midmPrnAlRbZAstC34J9jcOs24VwhSCqDjzER1ZgYyW0SSG4xUqIjPWYaRn1tMZ%2B%2FLDU7mgwRIOBMV2lSkfhaTUdseuSCacIeqPOoas5zKrS7LGdYXtlkjtqvP53ExLxkE3XaArwgiA3w%2F8BvixubDNY2dtuUguch8N8aEXzkcHZ0GfTrdmc1bq4HhcVvPKIxbe%2FU%2BbD66ypf68qo4jYsTjB4Piu5%2Fox6gO7KwqY8HYCBfRhtwq%2FgFMwO1BHzSSLzIKPKKRPYKPMxcBXtQXjWk2IoPmQPoNf%2FuzKOGAJD6MfqYWRk9jgne35jSIoucK6CdKL9mr%2FibxScJgYsXA4LiXFDfpFdAW0nXJeSxG7EGGJ9DNS2Il%2B8knajRgcHrBLBK2uOn6%2FvJaG4Gbp%2FdN0YjcBGHNUDVA2ZTPSSBIcLFqMQWZXh1DBgr0u9lx6hNZ80%2B5VvKDm4Q2VIc3kNVkSnoZa%2B4K80QPQwRtfY%2BEvP1Gpi6DRxKaz2MRQjBhFds4jsljahApjDS%2Bq%2B%2BBjqkAW9uaDYlUavYbH7z%2Bd167UBRZoyYxgctCYBcheHlu9n2nZVIB0E3qRFW2uqtwiYCtq0B%2Bm1s1VtmL1iEQhgsIk%2F717lddfrB7XagojvPZMx1e80oWZNr0wFL2mGCHAL5a9zEi4U1B%2Fuy2dgGrOGkMn00gMkowtH5BMPPYbGUcONLuhxvRnlOiA%2FGlQJxfmuQ8Q6%2FfiRC8LtCCR3TvojrMK7IC9T1&X-Amz-Signature=05e88b68f2efa02a2da492b9d84d01c104a49f385f466e09cc795339242b6ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJSKJU7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDEuyxS9YxMbLSaTQ1hA3nahPrApZPVKwcUML5nAilHRwIhAO9C3kO6yJ0j%2BezT8q7EAVoKIjmodaA7GsVhVHxeDtEfKv8DCFkQABoMNjM3NDIzMTgzODA1Igwa0xKii8iW2GZG2L8q3API2wjuP6U7ESJ8a4D7lELxF5N0tJd5ctdxlYXO9MNDFCYdt78dRsyPrjJ1v0a5RkzZjQKTI1FnKeYAY1hjYO0qdrUVQLwSYxvRa1IeVSvFFPiItg4aE6midmPrnAlRbZAstC34J9jcOs24VwhSCqDjzER1ZgYyW0SSG4xUqIjPWYaRn1tMZ%2B%2FLDU7mgwRIOBMV2lSkfhaTUdseuSCacIeqPOoas5zKrS7LGdYXtlkjtqvP53ExLxkE3XaArwgiA3w%2F8BvixubDNY2dtuUguch8N8aEXzkcHZ0GfTrdmc1bq4HhcVvPKIxbe%2FU%2BbD66ypf68qo4jYsTjB4Piu5%2Fox6gO7KwqY8HYCBfRhtwq%2FgFMwO1BHzSSLzIKPKKRPYKPMxcBXtQXjWk2IoPmQPoNf%2FuzKOGAJD6MfqYWRk9jgne35jSIoucK6CdKL9mr%2FibxScJgYsXA4LiXFDfpFdAW0nXJeSxG7EGGJ9DNS2Il%2B8knajRgcHrBLBK2uOn6%2FvJaG4Gbp%2FdN0YjcBGHNUDVA2ZTPSSBIcLFqMQWZXh1DBgr0u9lx6hNZ80%2B5VvKDm4Q2VIc3kNVkSnoZa%2B4K80QPQwRtfY%2BEvP1Gpi6DRxKaz2MRQjBhFds4jsljahApjDS%2Bq%2B%2BBjqkAW9uaDYlUavYbH7z%2Bd167UBRZoyYxgctCYBcheHlu9n2nZVIB0E3qRFW2uqtwiYCtq0B%2Bm1s1VtmL1iEQhgsIk%2F717lddfrB7XagojvPZMx1e80oWZNr0wFL2mGCHAL5a9zEi4U1B%2Fuy2dgGrOGkMn00gMkowtH5BMPPYbGUcONLuhxvRnlOiA%2FGlQJxfmuQ8Q6%2FfiRC8LtCCR3TvojrMK7IC9T1&X-Amz-Signature=69f55b7043db03441c9c81c27031ebc6051fa02eb6603a7a9d7c9b2dd7dd889e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJSKJU7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDEuyxS9YxMbLSaTQ1hA3nahPrApZPVKwcUML5nAilHRwIhAO9C3kO6yJ0j%2BezT8q7EAVoKIjmodaA7GsVhVHxeDtEfKv8DCFkQABoMNjM3NDIzMTgzODA1Igwa0xKii8iW2GZG2L8q3API2wjuP6U7ESJ8a4D7lELxF5N0tJd5ctdxlYXO9MNDFCYdt78dRsyPrjJ1v0a5RkzZjQKTI1FnKeYAY1hjYO0qdrUVQLwSYxvRa1IeVSvFFPiItg4aE6midmPrnAlRbZAstC34J9jcOs24VwhSCqDjzER1ZgYyW0SSG4xUqIjPWYaRn1tMZ%2B%2FLDU7mgwRIOBMV2lSkfhaTUdseuSCacIeqPOoas5zKrS7LGdYXtlkjtqvP53ExLxkE3XaArwgiA3w%2F8BvixubDNY2dtuUguch8N8aEXzkcHZ0GfTrdmc1bq4HhcVvPKIxbe%2FU%2BbD66ypf68qo4jYsTjB4Piu5%2Fox6gO7KwqY8HYCBfRhtwq%2FgFMwO1BHzSSLzIKPKKRPYKPMxcBXtQXjWk2IoPmQPoNf%2FuzKOGAJD6MfqYWRk9jgne35jSIoucK6CdKL9mr%2FibxScJgYsXA4LiXFDfpFdAW0nXJeSxG7EGGJ9DNS2Il%2B8knajRgcHrBLBK2uOn6%2FvJaG4Gbp%2FdN0YjcBGHNUDVA2ZTPSSBIcLFqMQWZXh1DBgr0u9lx6hNZ80%2B5VvKDm4Q2VIc3kNVkSnoZa%2B4K80QPQwRtfY%2BEvP1Gpi6DRxKaz2MRQjBhFds4jsljahApjDS%2Bq%2B%2BBjqkAW9uaDYlUavYbH7z%2Bd167UBRZoyYxgctCYBcheHlu9n2nZVIB0E3qRFW2uqtwiYCtq0B%2Bm1s1VtmL1iEQhgsIk%2F717lddfrB7XagojvPZMx1e80oWZNr0wFL2mGCHAL5a9zEi4U1B%2Fuy2dgGrOGkMn00gMkowtH5BMPPYbGUcONLuhxvRnlOiA%2FGlQJxfmuQ8Q6%2FfiRC8LtCCR3TvojrMK7IC9T1&X-Amz-Signature=94ace067ee5de6f2b1f3d2789d582f6be4cb5ea559999c05894b098b6f63b051&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJSKJU7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDEuyxS9YxMbLSaTQ1hA3nahPrApZPVKwcUML5nAilHRwIhAO9C3kO6yJ0j%2BezT8q7EAVoKIjmodaA7GsVhVHxeDtEfKv8DCFkQABoMNjM3NDIzMTgzODA1Igwa0xKii8iW2GZG2L8q3API2wjuP6U7ESJ8a4D7lELxF5N0tJd5ctdxlYXO9MNDFCYdt78dRsyPrjJ1v0a5RkzZjQKTI1FnKeYAY1hjYO0qdrUVQLwSYxvRa1IeVSvFFPiItg4aE6midmPrnAlRbZAstC34J9jcOs24VwhSCqDjzER1ZgYyW0SSG4xUqIjPWYaRn1tMZ%2B%2FLDU7mgwRIOBMV2lSkfhaTUdseuSCacIeqPOoas5zKrS7LGdYXtlkjtqvP53ExLxkE3XaArwgiA3w%2F8BvixubDNY2dtuUguch8N8aEXzkcHZ0GfTrdmc1bq4HhcVvPKIxbe%2FU%2BbD66ypf68qo4jYsTjB4Piu5%2Fox6gO7KwqY8HYCBfRhtwq%2FgFMwO1BHzSSLzIKPKKRPYKPMxcBXtQXjWk2IoPmQPoNf%2FuzKOGAJD6MfqYWRk9jgne35jSIoucK6CdKL9mr%2FibxScJgYsXA4LiXFDfpFdAW0nXJeSxG7EGGJ9DNS2Il%2B8knajRgcHrBLBK2uOn6%2FvJaG4Gbp%2FdN0YjcBGHNUDVA2ZTPSSBIcLFqMQWZXh1DBgr0u9lx6hNZ80%2B5VvKDm4Q2VIc3kNVkSnoZa%2B4K80QPQwRtfY%2BEvP1Gpi6DRxKaz2MRQjBhFds4jsljahApjDS%2Bq%2B%2BBjqkAW9uaDYlUavYbH7z%2Bd167UBRZoyYxgctCYBcheHlu9n2nZVIB0E3qRFW2uqtwiYCtq0B%2Bm1s1VtmL1iEQhgsIk%2F717lddfrB7XagojvPZMx1e80oWZNr0wFL2mGCHAL5a9zEi4U1B%2Fuy2dgGrOGkMn00gMkowtH5BMPPYbGUcONLuhxvRnlOiA%2FGlQJxfmuQ8Q6%2FfiRC8LtCCR3TvojrMK7IC9T1&X-Amz-Signature=5b81641cb67ac623a1896e7c235b76ab1420c4dc89a45159aee6893e528e9ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJSKJU7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDEuyxS9YxMbLSaTQ1hA3nahPrApZPVKwcUML5nAilHRwIhAO9C3kO6yJ0j%2BezT8q7EAVoKIjmodaA7GsVhVHxeDtEfKv8DCFkQABoMNjM3NDIzMTgzODA1Igwa0xKii8iW2GZG2L8q3API2wjuP6U7ESJ8a4D7lELxF5N0tJd5ctdxlYXO9MNDFCYdt78dRsyPrjJ1v0a5RkzZjQKTI1FnKeYAY1hjYO0qdrUVQLwSYxvRa1IeVSvFFPiItg4aE6midmPrnAlRbZAstC34J9jcOs24VwhSCqDjzER1ZgYyW0SSG4xUqIjPWYaRn1tMZ%2B%2FLDU7mgwRIOBMV2lSkfhaTUdseuSCacIeqPOoas5zKrS7LGdYXtlkjtqvP53ExLxkE3XaArwgiA3w%2F8BvixubDNY2dtuUguch8N8aEXzkcHZ0GfTrdmc1bq4HhcVvPKIxbe%2FU%2BbD66ypf68qo4jYsTjB4Piu5%2Fox6gO7KwqY8HYCBfRhtwq%2FgFMwO1BHzSSLzIKPKKRPYKPMxcBXtQXjWk2IoPmQPoNf%2FuzKOGAJD6MfqYWRk9jgne35jSIoucK6CdKL9mr%2FibxScJgYsXA4LiXFDfpFdAW0nXJeSxG7EGGJ9DNS2Il%2B8knajRgcHrBLBK2uOn6%2FvJaG4Gbp%2FdN0YjcBGHNUDVA2ZTPSSBIcLFqMQWZXh1DBgr0u9lx6hNZ80%2B5VvKDm4Q2VIc3kNVkSnoZa%2B4K80QPQwRtfY%2BEvP1Gpi6DRxKaz2MRQjBhFds4jsljahApjDS%2Bq%2B%2BBjqkAW9uaDYlUavYbH7z%2Bd167UBRZoyYxgctCYBcheHlu9n2nZVIB0E3qRFW2uqtwiYCtq0B%2Bm1s1VtmL1iEQhgsIk%2F717lddfrB7XagojvPZMx1e80oWZNr0wFL2mGCHAL5a9zEi4U1B%2Fuy2dgGrOGkMn00gMkowtH5BMPPYbGUcONLuhxvRnlOiA%2FGlQJxfmuQ8Q6%2FfiRC8LtCCR3TvojrMK7IC9T1&X-Amz-Signature=8912a8020bdd6ad4f1318dcb038c99f4b59f730d02a44bc053b0744a4f69f983&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJSKJU7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T121022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDEuyxS9YxMbLSaTQ1hA3nahPrApZPVKwcUML5nAilHRwIhAO9C3kO6yJ0j%2BezT8q7EAVoKIjmodaA7GsVhVHxeDtEfKv8DCFkQABoMNjM3NDIzMTgzODA1Igwa0xKii8iW2GZG2L8q3API2wjuP6U7ESJ8a4D7lELxF5N0tJd5ctdxlYXO9MNDFCYdt78dRsyPrjJ1v0a5RkzZjQKTI1FnKeYAY1hjYO0qdrUVQLwSYxvRa1IeVSvFFPiItg4aE6midmPrnAlRbZAstC34J9jcOs24VwhSCqDjzER1ZgYyW0SSG4xUqIjPWYaRn1tMZ%2B%2FLDU7mgwRIOBMV2lSkfhaTUdseuSCacIeqPOoas5zKrS7LGdYXtlkjtqvP53ExLxkE3XaArwgiA3w%2F8BvixubDNY2dtuUguch8N8aEXzkcHZ0GfTrdmc1bq4HhcVvPKIxbe%2FU%2BbD66ypf68qo4jYsTjB4Piu5%2Fox6gO7KwqY8HYCBfRhtwq%2FgFMwO1BHzSSLzIKPKKRPYKPMxcBXtQXjWk2IoPmQPoNf%2FuzKOGAJD6MfqYWRk9jgne35jSIoucK6CdKL9mr%2FibxScJgYsXA4LiXFDfpFdAW0nXJeSxG7EGGJ9DNS2Il%2B8knajRgcHrBLBK2uOn6%2FvJaG4Gbp%2FdN0YjcBGHNUDVA2ZTPSSBIcLFqMQWZXh1DBgr0u9lx6hNZ80%2B5VvKDm4Q2VIc3kNVkSnoZa%2B4K80QPQwRtfY%2BEvP1Gpi6DRxKaz2MRQjBhFds4jsljahApjDS%2Bq%2B%2BBjqkAW9uaDYlUavYbH7z%2Bd167UBRZoyYxgctCYBcheHlu9n2nZVIB0E3qRFW2uqtwiYCtq0B%2Bm1s1VtmL1iEQhgsIk%2F717lddfrB7XagojvPZMx1e80oWZNr0wFL2mGCHAL5a9zEi4U1B%2Fuy2dgGrOGkMn00gMkowtH5BMPPYbGUcONLuhxvRnlOiA%2FGlQJxfmuQ8Q6%2FfiRC8LtCCR3TvojrMK7IC9T1&X-Amz-Signature=25ac91c8f76a332fb08af034feb537346de6590b06db1d14cc204893e35d0300&X-Amz-SignedHeaders=host&x-id=GetObject)
