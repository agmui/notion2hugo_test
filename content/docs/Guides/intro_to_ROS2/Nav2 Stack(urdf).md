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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHOQBFU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26CbiO%2Bgu4fYhuQnDHsmnfNaoyNFv5JAIa2U8mSrB5QIhAOx4uJRlYKhEeBz38p%2BtjyFaiyUer6rR5wKtGWxYu0fLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC9m656ulw2AbDqo0q3AMT8GJH6y0h6h6PCJIdyP47XgE%2By9R9UXZz9sE6G6cJnJiieCGODGU5n5dKoJuIJc7ShnT9cmPW8YwyRyVFzgC11%2F4OTbY1wCe%2FUFCRn%2BtGH%2B885E0cjj8ml%2B6HIsSxi3Zd2SaiM6lFIGb7ImvlO6%2FwhtZvh6Bm%2B19VBoxSpNiSEHMAaBhbzLgNnjFbCYZ%2FujJ7GMsicM2079mH3wh2rzFRHP1VB2P97gJBxFBS23A281YC7Xo3peIWKXbs0t9l0TTgEYGlCdOugZw0LZMU8G5PSQAPO3t8r4D2VGpwmK90sUNsXxbWQxutFEwB%2F7NcUO0BHbhYw%2BRkV5VIOQDZT2MQO7%2Fn4VQCDEJH8ZWOz%2BALDwaJE5Imdl4GGW28n4jr1d%2BiLsrg896ewBRdBSo%2BpVrl6xEIFZr8dnYVYNcxwZZitR2GpHr3O5PHoO4fQaeDAbZxacyKw04IznhEHxKIHsFaxdn21JWPKdvWapHVl15IpExbT4rKrTkBdfQt1sQ8jCSQoPT2pfIx3k3PdOGkUOKJywEWZ%2BzXsA0iXwKUavonn48V8%2BsViCBK5vIVG3CdU8QM%2BafwRyZ0E5xnXCSeboyU09OJHJYnaOG9e0u8as4evPsbB0%2Fge9Kn0w8igTCInpvCBjqkATIDVrJ4dhH%2FIGDQNbKywtd4wX%2BL2Sk3knHOxh71l2ZyEf0NFdZi%2FFW%2BX8uieZ38ziPcuiZ5QKsX%2BDRC3m96koOYxdD24OxvC4V5JxRs7WjPvLSja%2Bx7CGJB9sz4IkxhdgKmKmKRibC2myCwRy2XF3GaTeuqNZGRk7U9nxB%2FD0JHDrXIQESfgVPMi012dsE6bY7l8CiLNBjO7Uc9Dk6MWCn3wrI4&X-Amz-Signature=0b0aec0dda6141c3ed871749f9673e9bb77dad537eeeeec1843a0881a31f599d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHOQBFU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26CbiO%2Bgu4fYhuQnDHsmnfNaoyNFv5JAIa2U8mSrB5QIhAOx4uJRlYKhEeBz38p%2BtjyFaiyUer6rR5wKtGWxYu0fLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC9m656ulw2AbDqo0q3AMT8GJH6y0h6h6PCJIdyP47XgE%2By9R9UXZz9sE6G6cJnJiieCGODGU5n5dKoJuIJc7ShnT9cmPW8YwyRyVFzgC11%2F4OTbY1wCe%2FUFCRn%2BtGH%2B885E0cjj8ml%2B6HIsSxi3Zd2SaiM6lFIGb7ImvlO6%2FwhtZvh6Bm%2B19VBoxSpNiSEHMAaBhbzLgNnjFbCYZ%2FujJ7GMsicM2079mH3wh2rzFRHP1VB2P97gJBxFBS23A281YC7Xo3peIWKXbs0t9l0TTgEYGlCdOugZw0LZMU8G5PSQAPO3t8r4D2VGpwmK90sUNsXxbWQxutFEwB%2F7NcUO0BHbhYw%2BRkV5VIOQDZT2MQO7%2Fn4VQCDEJH8ZWOz%2BALDwaJE5Imdl4GGW28n4jr1d%2BiLsrg896ewBRdBSo%2BpVrl6xEIFZr8dnYVYNcxwZZitR2GpHr3O5PHoO4fQaeDAbZxacyKw04IznhEHxKIHsFaxdn21JWPKdvWapHVl15IpExbT4rKrTkBdfQt1sQ8jCSQoPT2pfIx3k3PdOGkUOKJywEWZ%2BzXsA0iXwKUavonn48V8%2BsViCBK5vIVG3CdU8QM%2BafwRyZ0E5xnXCSeboyU09OJHJYnaOG9e0u8as4evPsbB0%2Fge9Kn0w8igTCInpvCBjqkATIDVrJ4dhH%2FIGDQNbKywtd4wX%2BL2Sk3knHOxh71l2ZyEf0NFdZi%2FFW%2BX8uieZ38ziPcuiZ5QKsX%2BDRC3m96koOYxdD24OxvC4V5JxRs7WjPvLSja%2Bx7CGJB9sz4IkxhdgKmKmKRibC2myCwRy2XF3GaTeuqNZGRk7U9nxB%2FD0JHDrXIQESfgVPMi012dsE6bY7l8CiLNBjO7Uc9Dk6MWCn3wrI4&X-Amz-Signature=6eb6294a7f5d645d08eb4f7176ed56a1eea3912bd8304ef54fc7444b3da995d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHOQBFU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26CbiO%2Bgu4fYhuQnDHsmnfNaoyNFv5JAIa2U8mSrB5QIhAOx4uJRlYKhEeBz38p%2BtjyFaiyUer6rR5wKtGWxYu0fLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC9m656ulw2AbDqo0q3AMT8GJH6y0h6h6PCJIdyP47XgE%2By9R9UXZz9sE6G6cJnJiieCGODGU5n5dKoJuIJc7ShnT9cmPW8YwyRyVFzgC11%2F4OTbY1wCe%2FUFCRn%2BtGH%2B885E0cjj8ml%2B6HIsSxi3Zd2SaiM6lFIGb7ImvlO6%2FwhtZvh6Bm%2B19VBoxSpNiSEHMAaBhbzLgNnjFbCYZ%2FujJ7GMsicM2079mH3wh2rzFRHP1VB2P97gJBxFBS23A281YC7Xo3peIWKXbs0t9l0TTgEYGlCdOugZw0LZMU8G5PSQAPO3t8r4D2VGpwmK90sUNsXxbWQxutFEwB%2F7NcUO0BHbhYw%2BRkV5VIOQDZT2MQO7%2Fn4VQCDEJH8ZWOz%2BALDwaJE5Imdl4GGW28n4jr1d%2BiLsrg896ewBRdBSo%2BpVrl6xEIFZr8dnYVYNcxwZZitR2GpHr3O5PHoO4fQaeDAbZxacyKw04IznhEHxKIHsFaxdn21JWPKdvWapHVl15IpExbT4rKrTkBdfQt1sQ8jCSQoPT2pfIx3k3PdOGkUOKJywEWZ%2BzXsA0iXwKUavonn48V8%2BsViCBK5vIVG3CdU8QM%2BafwRyZ0E5xnXCSeboyU09OJHJYnaOG9e0u8as4evPsbB0%2Fge9Kn0w8igTCInpvCBjqkATIDVrJ4dhH%2FIGDQNbKywtd4wX%2BL2Sk3knHOxh71l2ZyEf0NFdZi%2FFW%2BX8uieZ38ziPcuiZ5QKsX%2BDRC3m96koOYxdD24OxvC4V5JxRs7WjPvLSja%2Bx7CGJB9sz4IkxhdgKmKmKRibC2myCwRy2XF3GaTeuqNZGRk7U9nxB%2FD0JHDrXIQESfgVPMi012dsE6bY7l8CiLNBjO7Uc9Dk6MWCn3wrI4&X-Amz-Signature=298ae44aba744b95f3af82282f5192995a0b286e6550193f73e0d6c19b8d894a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHOQBFU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26CbiO%2Bgu4fYhuQnDHsmnfNaoyNFv5JAIa2U8mSrB5QIhAOx4uJRlYKhEeBz38p%2BtjyFaiyUer6rR5wKtGWxYu0fLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC9m656ulw2AbDqo0q3AMT8GJH6y0h6h6PCJIdyP47XgE%2By9R9UXZz9sE6G6cJnJiieCGODGU5n5dKoJuIJc7ShnT9cmPW8YwyRyVFzgC11%2F4OTbY1wCe%2FUFCRn%2BtGH%2B885E0cjj8ml%2B6HIsSxi3Zd2SaiM6lFIGb7ImvlO6%2FwhtZvh6Bm%2B19VBoxSpNiSEHMAaBhbzLgNnjFbCYZ%2FujJ7GMsicM2079mH3wh2rzFRHP1VB2P97gJBxFBS23A281YC7Xo3peIWKXbs0t9l0TTgEYGlCdOugZw0LZMU8G5PSQAPO3t8r4D2VGpwmK90sUNsXxbWQxutFEwB%2F7NcUO0BHbhYw%2BRkV5VIOQDZT2MQO7%2Fn4VQCDEJH8ZWOz%2BALDwaJE5Imdl4GGW28n4jr1d%2BiLsrg896ewBRdBSo%2BpVrl6xEIFZr8dnYVYNcxwZZitR2GpHr3O5PHoO4fQaeDAbZxacyKw04IznhEHxKIHsFaxdn21JWPKdvWapHVl15IpExbT4rKrTkBdfQt1sQ8jCSQoPT2pfIx3k3PdOGkUOKJywEWZ%2BzXsA0iXwKUavonn48V8%2BsViCBK5vIVG3CdU8QM%2BafwRyZ0E5xnXCSeboyU09OJHJYnaOG9e0u8as4evPsbB0%2Fge9Kn0w8igTCInpvCBjqkATIDVrJ4dhH%2FIGDQNbKywtd4wX%2BL2Sk3knHOxh71l2ZyEf0NFdZi%2FFW%2BX8uieZ38ziPcuiZ5QKsX%2BDRC3m96koOYxdD24OxvC4V5JxRs7WjPvLSja%2Bx7CGJB9sz4IkxhdgKmKmKRibC2myCwRy2XF3GaTeuqNZGRk7U9nxB%2FD0JHDrXIQESfgVPMi012dsE6bY7l8CiLNBjO7Uc9Dk6MWCn3wrI4&X-Amz-Signature=3763913690a60edb9984877e8a0fccae78768a232ba23406afaa863018f9df46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHOQBFU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26CbiO%2Bgu4fYhuQnDHsmnfNaoyNFv5JAIa2U8mSrB5QIhAOx4uJRlYKhEeBz38p%2BtjyFaiyUer6rR5wKtGWxYu0fLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC9m656ulw2AbDqo0q3AMT8GJH6y0h6h6PCJIdyP47XgE%2By9R9UXZz9sE6G6cJnJiieCGODGU5n5dKoJuIJc7ShnT9cmPW8YwyRyVFzgC11%2F4OTbY1wCe%2FUFCRn%2BtGH%2B885E0cjj8ml%2B6HIsSxi3Zd2SaiM6lFIGb7ImvlO6%2FwhtZvh6Bm%2B19VBoxSpNiSEHMAaBhbzLgNnjFbCYZ%2FujJ7GMsicM2079mH3wh2rzFRHP1VB2P97gJBxFBS23A281YC7Xo3peIWKXbs0t9l0TTgEYGlCdOugZw0LZMU8G5PSQAPO3t8r4D2VGpwmK90sUNsXxbWQxutFEwB%2F7NcUO0BHbhYw%2BRkV5VIOQDZT2MQO7%2Fn4VQCDEJH8ZWOz%2BALDwaJE5Imdl4GGW28n4jr1d%2BiLsrg896ewBRdBSo%2BpVrl6xEIFZr8dnYVYNcxwZZitR2GpHr3O5PHoO4fQaeDAbZxacyKw04IznhEHxKIHsFaxdn21JWPKdvWapHVl15IpExbT4rKrTkBdfQt1sQ8jCSQoPT2pfIx3k3PdOGkUOKJywEWZ%2BzXsA0iXwKUavonn48V8%2BsViCBK5vIVG3CdU8QM%2BafwRyZ0E5xnXCSeboyU09OJHJYnaOG9e0u8as4evPsbB0%2Fge9Kn0w8igTCInpvCBjqkATIDVrJ4dhH%2FIGDQNbKywtd4wX%2BL2Sk3knHOxh71l2ZyEf0NFdZi%2FFW%2BX8uieZ38ziPcuiZ5QKsX%2BDRC3m96koOYxdD24OxvC4V5JxRs7WjPvLSja%2Bx7CGJB9sz4IkxhdgKmKmKRibC2myCwRy2XF3GaTeuqNZGRk7U9nxB%2FD0JHDrXIQESfgVPMi012dsE6bY7l8CiLNBjO7Uc9Dk6MWCn3wrI4&X-Amz-Signature=5045b9d7799fa2fea146edaa965813c148910168e751cd54833a36c237fd9aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBHOQBFU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD26CbiO%2Bgu4fYhuQnDHsmnfNaoyNFv5JAIa2U8mSrB5QIhAOx4uJRlYKhEeBz38p%2BtjyFaiyUer6rR5wKtGWxYu0fLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC9m656ulw2AbDqo0q3AMT8GJH6y0h6h6PCJIdyP47XgE%2By9R9UXZz9sE6G6cJnJiieCGODGU5n5dKoJuIJc7ShnT9cmPW8YwyRyVFzgC11%2F4OTbY1wCe%2FUFCRn%2BtGH%2B885E0cjj8ml%2B6HIsSxi3Zd2SaiM6lFIGb7ImvlO6%2FwhtZvh6Bm%2B19VBoxSpNiSEHMAaBhbzLgNnjFbCYZ%2FujJ7GMsicM2079mH3wh2rzFRHP1VB2P97gJBxFBS23A281YC7Xo3peIWKXbs0t9l0TTgEYGlCdOugZw0LZMU8G5PSQAPO3t8r4D2VGpwmK90sUNsXxbWQxutFEwB%2F7NcUO0BHbhYw%2BRkV5VIOQDZT2MQO7%2Fn4VQCDEJH8ZWOz%2BALDwaJE5Imdl4GGW28n4jr1d%2BiLsrg896ewBRdBSo%2BpVrl6xEIFZr8dnYVYNcxwZZitR2GpHr3O5PHoO4fQaeDAbZxacyKw04IznhEHxKIHsFaxdn21JWPKdvWapHVl15IpExbT4rKrTkBdfQt1sQ8jCSQoPT2pfIx3k3PdOGkUOKJywEWZ%2BzXsA0iXwKUavonn48V8%2BsViCBK5vIVG3CdU8QM%2BafwRyZ0E5xnXCSeboyU09OJHJYnaOG9e0u8as4evPsbB0%2Fge9Kn0w8igTCInpvCBjqkATIDVrJ4dhH%2FIGDQNbKywtd4wX%2BL2Sk3knHOxh71l2ZyEf0NFdZi%2FFW%2BX8uieZ38ziPcuiZ5QKsX%2BDRC3m96koOYxdD24OxvC4V5JxRs7WjPvLSja%2Bx7CGJB9sz4IkxhdgKmKmKRibC2myCwRy2XF3GaTeuqNZGRk7U9nxB%2FD0JHDrXIQESfgVPMi012dsE6bY7l8CiLNBjO7Uc9Dk6MWCn3wrI4&X-Amz-Signature=2ee676a027471c3d115c9eab51df8ab75a969fdec5d973d26a25f43e1cb1abd4&X-Amz-SignedHeaders=host&x-id=GetObject)
