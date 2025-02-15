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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNRZDDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIB312BWu7bp1vX0lYVF5y9ZAa04onvybvJRn0rdGQZWOAiAPEt5HVN2Z7SWp%2FJH6e2NgXFBgAySdzegHd%2FIIHeT8jCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCv0wHEONhCJQJ1ewKtwDuiVZeH%2BYa31myh49eOitJnDVV2zR75GMJXtpmtZHACJ5AY%2B7Yhisev%2FSnbdTdgOGIlJ38z9FC0XUGXJNzl8VBGKSJl7NUGnXs96zB5w7a%2BLOyUAsrgGhB8NZPpSCWgkKdqT8J2E72SZnIuRPQgqVfIPl3d5ICvJrScWeuW%2BkNQ%2F0qVLpUiDDY%2FkLAPTCusRsYqWzdshSi12kv7V%2BrMArjEc3iUtiGn0DRUyK9Rzu%2BrDYPTgF5XdFiNju0uBPceg0DOXG7ejGm6poX5nyL1B1y0kcEKOCl8KQR9MSF3DkA2q70BEbuzO76SiUikhe7Z93dl9II07%2BTfwljl8dY2lGF3dfikejOgyDBVfZDaKIbxnOHPsCJG9GpdJ6HNDXPDruSvk3XG3P6OoSwVg4r3xHFG96IQLVG1EQJCz%2FeRN3YuOGchQUcFkm6sqxNugIHT67pgdaAz1LjjYrUhcCbaj7MXX50iE4eHBadnOdnsdyZ%2FY1v2Kjz1gdk6gnO2jI4KlHxzgFU36xDjmxCp%2FIWM0vXtbE%2F6gPePCKW8xBm1LN9EsXKhCmu4JZY9BWhJSGABnPAIl6v8dCCiYK4QBORh0AdPR0ffTArWGHV91DWFp06Ure2KBbWEF5RWcdEL8wzcfCvQY6pgH1tMYI6AlOtOqW9bXdoIdCaei5pXgSFE081z3KouJxAK8wCs8oeZpmK0rsTPpW%2FON2l9ebd3Sud%2FAAm5s5vk0CpvxbXsCtMcmM1bZEEXONAhOEX4MOLG3Ci51dC%2FvRAhNAx6F1sPN4TQDeemRvyjhmmAKceM1LudbNIEoikzGA7OF7jgXScYfbHuLCSNbww7CJaKOfgjIyvbGZOThmpxWJpMp%2Few%2Bh&X-Amz-Signature=7c7a2c8bf6311206fab3549eed879a250abdd6edfc73520744e5826ce6baae43&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNRZDDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIB312BWu7bp1vX0lYVF5y9ZAa04onvybvJRn0rdGQZWOAiAPEt5HVN2Z7SWp%2FJH6e2NgXFBgAySdzegHd%2FIIHeT8jCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCv0wHEONhCJQJ1ewKtwDuiVZeH%2BYa31myh49eOitJnDVV2zR75GMJXtpmtZHACJ5AY%2B7Yhisev%2FSnbdTdgOGIlJ38z9FC0XUGXJNzl8VBGKSJl7NUGnXs96zB5w7a%2BLOyUAsrgGhB8NZPpSCWgkKdqT8J2E72SZnIuRPQgqVfIPl3d5ICvJrScWeuW%2BkNQ%2F0qVLpUiDDY%2FkLAPTCusRsYqWzdshSi12kv7V%2BrMArjEc3iUtiGn0DRUyK9Rzu%2BrDYPTgF5XdFiNju0uBPceg0DOXG7ejGm6poX5nyL1B1y0kcEKOCl8KQR9MSF3DkA2q70BEbuzO76SiUikhe7Z93dl9II07%2BTfwljl8dY2lGF3dfikejOgyDBVfZDaKIbxnOHPsCJG9GpdJ6HNDXPDruSvk3XG3P6OoSwVg4r3xHFG96IQLVG1EQJCz%2FeRN3YuOGchQUcFkm6sqxNugIHT67pgdaAz1LjjYrUhcCbaj7MXX50iE4eHBadnOdnsdyZ%2FY1v2Kjz1gdk6gnO2jI4KlHxzgFU36xDjmxCp%2FIWM0vXtbE%2F6gPePCKW8xBm1LN9EsXKhCmu4JZY9BWhJSGABnPAIl6v8dCCiYK4QBORh0AdPR0ffTArWGHV91DWFp06Ure2KBbWEF5RWcdEL8wzcfCvQY6pgH1tMYI6AlOtOqW9bXdoIdCaei5pXgSFE081z3KouJxAK8wCs8oeZpmK0rsTPpW%2FON2l9ebd3Sud%2FAAm5s5vk0CpvxbXsCtMcmM1bZEEXONAhOEX4MOLG3Ci51dC%2FvRAhNAx6F1sPN4TQDeemRvyjhmmAKceM1LudbNIEoikzGA7OF7jgXScYfbHuLCSNbww7CJaKOfgjIyvbGZOThmpxWJpMp%2Few%2Bh&X-Amz-Signature=5d1958f56aaf9a85095485fd76a4cf026e6bcb48eb7f74aa329d326757faeda5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNRZDDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIB312BWu7bp1vX0lYVF5y9ZAa04onvybvJRn0rdGQZWOAiAPEt5HVN2Z7SWp%2FJH6e2NgXFBgAySdzegHd%2FIIHeT8jCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCv0wHEONhCJQJ1ewKtwDuiVZeH%2BYa31myh49eOitJnDVV2zR75GMJXtpmtZHACJ5AY%2B7Yhisev%2FSnbdTdgOGIlJ38z9FC0XUGXJNzl8VBGKSJl7NUGnXs96zB5w7a%2BLOyUAsrgGhB8NZPpSCWgkKdqT8J2E72SZnIuRPQgqVfIPl3d5ICvJrScWeuW%2BkNQ%2F0qVLpUiDDY%2FkLAPTCusRsYqWzdshSi12kv7V%2BrMArjEc3iUtiGn0DRUyK9Rzu%2BrDYPTgF5XdFiNju0uBPceg0DOXG7ejGm6poX5nyL1B1y0kcEKOCl8KQR9MSF3DkA2q70BEbuzO76SiUikhe7Z93dl9II07%2BTfwljl8dY2lGF3dfikejOgyDBVfZDaKIbxnOHPsCJG9GpdJ6HNDXPDruSvk3XG3P6OoSwVg4r3xHFG96IQLVG1EQJCz%2FeRN3YuOGchQUcFkm6sqxNugIHT67pgdaAz1LjjYrUhcCbaj7MXX50iE4eHBadnOdnsdyZ%2FY1v2Kjz1gdk6gnO2jI4KlHxzgFU36xDjmxCp%2FIWM0vXtbE%2F6gPePCKW8xBm1LN9EsXKhCmu4JZY9BWhJSGABnPAIl6v8dCCiYK4QBORh0AdPR0ffTArWGHV91DWFp06Ure2KBbWEF5RWcdEL8wzcfCvQY6pgH1tMYI6AlOtOqW9bXdoIdCaei5pXgSFE081z3KouJxAK8wCs8oeZpmK0rsTPpW%2FON2l9ebd3Sud%2FAAm5s5vk0CpvxbXsCtMcmM1bZEEXONAhOEX4MOLG3Ci51dC%2FvRAhNAx6F1sPN4TQDeemRvyjhmmAKceM1LudbNIEoikzGA7OF7jgXScYfbHuLCSNbww7CJaKOfgjIyvbGZOThmpxWJpMp%2Few%2Bh&X-Amz-Signature=64cca310bbd31dab393fe1c60316b11764f947ec31b0fd0b7c30c15f3c6850f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNRZDDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIB312BWu7bp1vX0lYVF5y9ZAa04onvybvJRn0rdGQZWOAiAPEt5HVN2Z7SWp%2FJH6e2NgXFBgAySdzegHd%2FIIHeT8jCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCv0wHEONhCJQJ1ewKtwDuiVZeH%2BYa31myh49eOitJnDVV2zR75GMJXtpmtZHACJ5AY%2B7Yhisev%2FSnbdTdgOGIlJ38z9FC0XUGXJNzl8VBGKSJl7NUGnXs96zB5w7a%2BLOyUAsrgGhB8NZPpSCWgkKdqT8J2E72SZnIuRPQgqVfIPl3d5ICvJrScWeuW%2BkNQ%2F0qVLpUiDDY%2FkLAPTCusRsYqWzdshSi12kv7V%2BrMArjEc3iUtiGn0DRUyK9Rzu%2BrDYPTgF5XdFiNju0uBPceg0DOXG7ejGm6poX5nyL1B1y0kcEKOCl8KQR9MSF3DkA2q70BEbuzO76SiUikhe7Z93dl9II07%2BTfwljl8dY2lGF3dfikejOgyDBVfZDaKIbxnOHPsCJG9GpdJ6HNDXPDruSvk3XG3P6OoSwVg4r3xHFG96IQLVG1EQJCz%2FeRN3YuOGchQUcFkm6sqxNugIHT67pgdaAz1LjjYrUhcCbaj7MXX50iE4eHBadnOdnsdyZ%2FY1v2Kjz1gdk6gnO2jI4KlHxzgFU36xDjmxCp%2FIWM0vXtbE%2F6gPePCKW8xBm1LN9EsXKhCmu4JZY9BWhJSGABnPAIl6v8dCCiYK4QBORh0AdPR0ffTArWGHV91DWFp06Ure2KBbWEF5RWcdEL8wzcfCvQY6pgH1tMYI6AlOtOqW9bXdoIdCaei5pXgSFE081z3KouJxAK8wCs8oeZpmK0rsTPpW%2FON2l9ebd3Sud%2FAAm5s5vk0CpvxbXsCtMcmM1bZEEXONAhOEX4MOLG3Ci51dC%2FvRAhNAx6F1sPN4TQDeemRvyjhmmAKceM1LudbNIEoikzGA7OF7jgXScYfbHuLCSNbww7CJaKOfgjIyvbGZOThmpxWJpMp%2Few%2Bh&X-Amz-Signature=fb356755b6a3f883ef9d2693047ad85ea572c09d1c9196670599b4c4a1a113d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNRZDDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIB312BWu7bp1vX0lYVF5y9ZAa04onvybvJRn0rdGQZWOAiAPEt5HVN2Z7SWp%2FJH6e2NgXFBgAySdzegHd%2FIIHeT8jCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCv0wHEONhCJQJ1ewKtwDuiVZeH%2BYa31myh49eOitJnDVV2zR75GMJXtpmtZHACJ5AY%2B7Yhisev%2FSnbdTdgOGIlJ38z9FC0XUGXJNzl8VBGKSJl7NUGnXs96zB5w7a%2BLOyUAsrgGhB8NZPpSCWgkKdqT8J2E72SZnIuRPQgqVfIPl3d5ICvJrScWeuW%2BkNQ%2F0qVLpUiDDY%2FkLAPTCusRsYqWzdshSi12kv7V%2BrMArjEc3iUtiGn0DRUyK9Rzu%2BrDYPTgF5XdFiNju0uBPceg0DOXG7ejGm6poX5nyL1B1y0kcEKOCl8KQR9MSF3DkA2q70BEbuzO76SiUikhe7Z93dl9II07%2BTfwljl8dY2lGF3dfikejOgyDBVfZDaKIbxnOHPsCJG9GpdJ6HNDXPDruSvk3XG3P6OoSwVg4r3xHFG96IQLVG1EQJCz%2FeRN3YuOGchQUcFkm6sqxNugIHT67pgdaAz1LjjYrUhcCbaj7MXX50iE4eHBadnOdnsdyZ%2FY1v2Kjz1gdk6gnO2jI4KlHxzgFU36xDjmxCp%2FIWM0vXtbE%2F6gPePCKW8xBm1LN9EsXKhCmu4JZY9BWhJSGABnPAIl6v8dCCiYK4QBORh0AdPR0ffTArWGHV91DWFp06Ure2KBbWEF5RWcdEL8wzcfCvQY6pgH1tMYI6AlOtOqW9bXdoIdCaei5pXgSFE081z3KouJxAK8wCs8oeZpmK0rsTPpW%2FON2l9ebd3Sud%2FAAm5s5vk0CpvxbXsCtMcmM1bZEEXONAhOEX4MOLG3Ci51dC%2FvRAhNAx6F1sPN4TQDeemRvyjhmmAKceM1LudbNIEoikzGA7OF7jgXScYfbHuLCSNbww7CJaKOfgjIyvbGZOThmpxWJpMp%2Few%2Bh&X-Amz-Signature=66d9dab2929aac107b470d3bb1b78bef5668463822377f17b2fbeb6adfb24e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNRZDDI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIB312BWu7bp1vX0lYVF5y9ZAa04onvybvJRn0rdGQZWOAiAPEt5HVN2Z7SWp%2FJH6e2NgXFBgAySdzegHd%2FIIHeT8jCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMCv0wHEONhCJQJ1ewKtwDuiVZeH%2BYa31myh49eOitJnDVV2zR75GMJXtpmtZHACJ5AY%2B7Yhisev%2FSnbdTdgOGIlJ38z9FC0XUGXJNzl8VBGKSJl7NUGnXs96zB5w7a%2BLOyUAsrgGhB8NZPpSCWgkKdqT8J2E72SZnIuRPQgqVfIPl3d5ICvJrScWeuW%2BkNQ%2F0qVLpUiDDY%2FkLAPTCusRsYqWzdshSi12kv7V%2BrMArjEc3iUtiGn0DRUyK9Rzu%2BrDYPTgF5XdFiNju0uBPceg0DOXG7ejGm6poX5nyL1B1y0kcEKOCl8KQR9MSF3DkA2q70BEbuzO76SiUikhe7Z93dl9II07%2BTfwljl8dY2lGF3dfikejOgyDBVfZDaKIbxnOHPsCJG9GpdJ6HNDXPDruSvk3XG3P6OoSwVg4r3xHFG96IQLVG1EQJCz%2FeRN3YuOGchQUcFkm6sqxNugIHT67pgdaAz1LjjYrUhcCbaj7MXX50iE4eHBadnOdnsdyZ%2FY1v2Kjz1gdk6gnO2jI4KlHxzgFU36xDjmxCp%2FIWM0vXtbE%2F6gPePCKW8xBm1LN9EsXKhCmu4JZY9BWhJSGABnPAIl6v8dCCiYK4QBORh0AdPR0ffTArWGHV91DWFp06Ure2KBbWEF5RWcdEL8wzcfCvQY6pgH1tMYI6AlOtOqW9bXdoIdCaei5pXgSFE081z3KouJxAK8wCs8oeZpmK0rsTPpW%2FON2l9ebd3Sud%2FAAm5s5vk0CpvxbXsCtMcmM1bZEEXONAhOEX4MOLG3Ci51dC%2FvRAhNAx6F1sPN4TQDeemRvyjhmmAKceM1LudbNIEoikzGA7OF7jgXScYfbHuLCSNbww7CJaKOfgjIyvbGZOThmpxWJpMp%2Few%2Bh&X-Amz-Signature=c458741110065e8f3c54adc1e0bde95e67d96f6cd5beee7647642c076e7f9440&X-Amz-SignedHeaders=host&x-id=GetObject)
