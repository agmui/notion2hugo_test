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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677V3L25V%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICW2S0DWq8qstrs0xQxIa%2BEKsOY249ltWx%2FFhUIN%2Blz6AiAbtlCAvN4N6HkAf4bzXYII2r8bd3%2BkXNswhjsrmSwy4CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpj%2BXxRnftbu0IIO8KtwDS8DXRs56V%2BlN%2F8ZfloCHm6Sg8X%2Bk8dTNMPLT1ULuVwU%2B4alyNLe%2F0Uz3GkXomXNJmQuxDnytLE8Rc%2Fuh1M2X64zJurzxV0WJc5Lg4wVfsg5har3h8eDr%2BvDT7WMHPhvebKV8ShJgiCdw1GEKYw0WkgJYM2wl1%2Fo%2FWUB3RY0sOpp8cv4dr20mJs3k6PWzA8r9K9cCKmmaz9fLglaMKmX6p6XL0Wz0cbCJoxUFkdgKVpJBgyzp9kmOjgK5xFaxvJ045UjyAhxRZP55w49j%2BKVQi1tRSdwjaFsgHE7V5RsBoPPE%2FZOs7VcsWL403EJiXPO9Chg3WQddsDwvoIoWGdYlbkVPkD59yamH4cAcOL7wHq6RkEXRoA7gI5EdsRMZ8t1O6ehPtQ%2BuWBGkZ2y4ZLGd3DqxlcZSmzBG1eknF%2BfrZHfsWUu7kC8cazwQySo1EMlZo63ufx9qoYgCFd3s4pDcT7yvTiFSpSIyojnBIiDq23TzQZQBKZ7F%2F5Iz5aSIE3Z6ulCraOFLZcmZ2LQTGJml%2FEnFPH7arUAvzG7%2FV7SQuYZXoIkN7gQt1CHjwLGL5V98ljankuAe3bbw%2F5tIVcMTS%2F6iBdHXY09UxcoDOob%2B2dEi%2B7ENweh90KZYdxUwqNjMwwY6pgHphzbFq%2BXe1lpwgRoPRBm9QraSTJRuu%2Bqy01hzkJaTKWbSDFUefdCPICespAt9J3FgnaB%2F6zX8WabF%2FFC8D0ouAjB1m4hr3XKJgR7J1EFJiddCdNdf%2F0e%2FlmIG2Ncp0ZZ2ZtxKYh4zDL38lnHXYVYGvwJ%2B7dYxiEytJLuNqmjHa11zIoRYYdierOcqrmNcTOHtiAHUBgSj7OkhPOIW7zIAEKhIzOL4&X-Amz-Signature=7349c58206010d6df5ad72103e896329da9f015c011725f193876a972392b251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677V3L25V%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICW2S0DWq8qstrs0xQxIa%2BEKsOY249ltWx%2FFhUIN%2Blz6AiAbtlCAvN4N6HkAf4bzXYII2r8bd3%2BkXNswhjsrmSwy4CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpj%2BXxRnftbu0IIO8KtwDS8DXRs56V%2BlN%2F8ZfloCHm6Sg8X%2Bk8dTNMPLT1ULuVwU%2B4alyNLe%2F0Uz3GkXomXNJmQuxDnytLE8Rc%2Fuh1M2X64zJurzxV0WJc5Lg4wVfsg5har3h8eDr%2BvDT7WMHPhvebKV8ShJgiCdw1GEKYw0WkgJYM2wl1%2Fo%2FWUB3RY0sOpp8cv4dr20mJs3k6PWzA8r9K9cCKmmaz9fLglaMKmX6p6XL0Wz0cbCJoxUFkdgKVpJBgyzp9kmOjgK5xFaxvJ045UjyAhxRZP55w49j%2BKVQi1tRSdwjaFsgHE7V5RsBoPPE%2FZOs7VcsWL403EJiXPO9Chg3WQddsDwvoIoWGdYlbkVPkD59yamH4cAcOL7wHq6RkEXRoA7gI5EdsRMZ8t1O6ehPtQ%2BuWBGkZ2y4ZLGd3DqxlcZSmzBG1eknF%2BfrZHfsWUu7kC8cazwQySo1EMlZo63ufx9qoYgCFd3s4pDcT7yvTiFSpSIyojnBIiDq23TzQZQBKZ7F%2F5Iz5aSIE3Z6ulCraOFLZcmZ2LQTGJml%2FEnFPH7arUAvzG7%2FV7SQuYZXoIkN7gQt1CHjwLGL5V98ljankuAe3bbw%2F5tIVcMTS%2F6iBdHXY09UxcoDOob%2B2dEi%2B7ENweh90KZYdxUwqNjMwwY6pgHphzbFq%2BXe1lpwgRoPRBm9QraSTJRuu%2Bqy01hzkJaTKWbSDFUefdCPICespAt9J3FgnaB%2F6zX8WabF%2FFC8D0ouAjB1m4hr3XKJgR7J1EFJiddCdNdf%2F0e%2FlmIG2Ncp0ZZ2ZtxKYh4zDL38lnHXYVYGvwJ%2B7dYxiEytJLuNqmjHa11zIoRYYdierOcqrmNcTOHtiAHUBgSj7OkhPOIW7zIAEKhIzOL4&X-Amz-Signature=5d1db5085db046867995efa1c3df21a4bc1852d7d3560c5fc39483f425eb5fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677V3L25V%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICW2S0DWq8qstrs0xQxIa%2BEKsOY249ltWx%2FFhUIN%2Blz6AiAbtlCAvN4N6HkAf4bzXYII2r8bd3%2BkXNswhjsrmSwy4CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpj%2BXxRnftbu0IIO8KtwDS8DXRs56V%2BlN%2F8ZfloCHm6Sg8X%2Bk8dTNMPLT1ULuVwU%2B4alyNLe%2F0Uz3GkXomXNJmQuxDnytLE8Rc%2Fuh1M2X64zJurzxV0WJc5Lg4wVfsg5har3h8eDr%2BvDT7WMHPhvebKV8ShJgiCdw1GEKYw0WkgJYM2wl1%2Fo%2FWUB3RY0sOpp8cv4dr20mJs3k6PWzA8r9K9cCKmmaz9fLglaMKmX6p6XL0Wz0cbCJoxUFkdgKVpJBgyzp9kmOjgK5xFaxvJ045UjyAhxRZP55w49j%2BKVQi1tRSdwjaFsgHE7V5RsBoPPE%2FZOs7VcsWL403EJiXPO9Chg3WQddsDwvoIoWGdYlbkVPkD59yamH4cAcOL7wHq6RkEXRoA7gI5EdsRMZ8t1O6ehPtQ%2BuWBGkZ2y4ZLGd3DqxlcZSmzBG1eknF%2BfrZHfsWUu7kC8cazwQySo1EMlZo63ufx9qoYgCFd3s4pDcT7yvTiFSpSIyojnBIiDq23TzQZQBKZ7F%2F5Iz5aSIE3Z6ulCraOFLZcmZ2LQTGJml%2FEnFPH7arUAvzG7%2FV7SQuYZXoIkN7gQt1CHjwLGL5V98ljankuAe3bbw%2F5tIVcMTS%2F6iBdHXY09UxcoDOob%2B2dEi%2B7ENweh90KZYdxUwqNjMwwY6pgHphzbFq%2BXe1lpwgRoPRBm9QraSTJRuu%2Bqy01hzkJaTKWbSDFUefdCPICespAt9J3FgnaB%2F6zX8WabF%2FFC8D0ouAjB1m4hr3XKJgR7J1EFJiddCdNdf%2F0e%2FlmIG2Ncp0ZZ2ZtxKYh4zDL38lnHXYVYGvwJ%2B7dYxiEytJLuNqmjHa11zIoRYYdierOcqrmNcTOHtiAHUBgSj7OkhPOIW7zIAEKhIzOL4&X-Amz-Signature=d437cae99107b099b312f42aa37412eee18b6f275f31791c11253ea2322bdd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677V3L25V%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICW2S0DWq8qstrs0xQxIa%2BEKsOY249ltWx%2FFhUIN%2Blz6AiAbtlCAvN4N6HkAf4bzXYII2r8bd3%2BkXNswhjsrmSwy4CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpj%2BXxRnftbu0IIO8KtwDS8DXRs56V%2BlN%2F8ZfloCHm6Sg8X%2Bk8dTNMPLT1ULuVwU%2B4alyNLe%2F0Uz3GkXomXNJmQuxDnytLE8Rc%2Fuh1M2X64zJurzxV0WJc5Lg4wVfsg5har3h8eDr%2BvDT7WMHPhvebKV8ShJgiCdw1GEKYw0WkgJYM2wl1%2Fo%2FWUB3RY0sOpp8cv4dr20mJs3k6PWzA8r9K9cCKmmaz9fLglaMKmX6p6XL0Wz0cbCJoxUFkdgKVpJBgyzp9kmOjgK5xFaxvJ045UjyAhxRZP55w49j%2BKVQi1tRSdwjaFsgHE7V5RsBoPPE%2FZOs7VcsWL403EJiXPO9Chg3WQddsDwvoIoWGdYlbkVPkD59yamH4cAcOL7wHq6RkEXRoA7gI5EdsRMZ8t1O6ehPtQ%2BuWBGkZ2y4ZLGd3DqxlcZSmzBG1eknF%2BfrZHfsWUu7kC8cazwQySo1EMlZo63ufx9qoYgCFd3s4pDcT7yvTiFSpSIyojnBIiDq23TzQZQBKZ7F%2F5Iz5aSIE3Z6ulCraOFLZcmZ2LQTGJml%2FEnFPH7arUAvzG7%2FV7SQuYZXoIkN7gQt1CHjwLGL5V98ljankuAe3bbw%2F5tIVcMTS%2F6iBdHXY09UxcoDOob%2B2dEi%2B7ENweh90KZYdxUwqNjMwwY6pgHphzbFq%2BXe1lpwgRoPRBm9QraSTJRuu%2Bqy01hzkJaTKWbSDFUefdCPICespAt9J3FgnaB%2F6zX8WabF%2FFC8D0ouAjB1m4hr3XKJgR7J1EFJiddCdNdf%2F0e%2FlmIG2Ncp0ZZ2ZtxKYh4zDL38lnHXYVYGvwJ%2B7dYxiEytJLuNqmjHa11zIoRYYdierOcqrmNcTOHtiAHUBgSj7OkhPOIW7zIAEKhIzOL4&X-Amz-Signature=0173c8c1614fd53c9056170aef4448d79eb33244cb50ca9c22584aaea85a1d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677V3L25V%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICW2S0DWq8qstrs0xQxIa%2BEKsOY249ltWx%2FFhUIN%2Blz6AiAbtlCAvN4N6HkAf4bzXYII2r8bd3%2BkXNswhjsrmSwy4CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpj%2BXxRnftbu0IIO8KtwDS8DXRs56V%2BlN%2F8ZfloCHm6Sg8X%2Bk8dTNMPLT1ULuVwU%2B4alyNLe%2F0Uz3GkXomXNJmQuxDnytLE8Rc%2Fuh1M2X64zJurzxV0WJc5Lg4wVfsg5har3h8eDr%2BvDT7WMHPhvebKV8ShJgiCdw1GEKYw0WkgJYM2wl1%2Fo%2FWUB3RY0sOpp8cv4dr20mJs3k6PWzA8r9K9cCKmmaz9fLglaMKmX6p6XL0Wz0cbCJoxUFkdgKVpJBgyzp9kmOjgK5xFaxvJ045UjyAhxRZP55w49j%2BKVQi1tRSdwjaFsgHE7V5RsBoPPE%2FZOs7VcsWL403EJiXPO9Chg3WQddsDwvoIoWGdYlbkVPkD59yamH4cAcOL7wHq6RkEXRoA7gI5EdsRMZ8t1O6ehPtQ%2BuWBGkZ2y4ZLGd3DqxlcZSmzBG1eknF%2BfrZHfsWUu7kC8cazwQySo1EMlZo63ufx9qoYgCFd3s4pDcT7yvTiFSpSIyojnBIiDq23TzQZQBKZ7F%2F5Iz5aSIE3Z6ulCraOFLZcmZ2LQTGJml%2FEnFPH7arUAvzG7%2FV7SQuYZXoIkN7gQt1CHjwLGL5V98ljankuAe3bbw%2F5tIVcMTS%2F6iBdHXY09UxcoDOob%2B2dEi%2B7ENweh90KZYdxUwqNjMwwY6pgHphzbFq%2BXe1lpwgRoPRBm9QraSTJRuu%2Bqy01hzkJaTKWbSDFUefdCPICespAt9J3FgnaB%2F6zX8WabF%2FFC8D0ouAjB1m4hr3XKJgR7J1EFJiddCdNdf%2F0e%2FlmIG2Ncp0ZZ2ZtxKYh4zDL38lnHXYVYGvwJ%2B7dYxiEytJLuNqmjHa11zIoRYYdierOcqrmNcTOHtiAHUBgSj7OkhPOIW7zIAEKhIzOL4&X-Amz-Signature=9f450e77ffb0c1067f3254670f04e7e145552259d541b2a3705c4712507baff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677V3L25V%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICW2S0DWq8qstrs0xQxIa%2BEKsOY249ltWx%2FFhUIN%2Blz6AiAbtlCAvN4N6HkAf4bzXYII2r8bd3%2BkXNswhjsrmSwy4CqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpj%2BXxRnftbu0IIO8KtwDS8DXRs56V%2BlN%2F8ZfloCHm6Sg8X%2Bk8dTNMPLT1ULuVwU%2B4alyNLe%2F0Uz3GkXomXNJmQuxDnytLE8Rc%2Fuh1M2X64zJurzxV0WJc5Lg4wVfsg5har3h8eDr%2BvDT7WMHPhvebKV8ShJgiCdw1GEKYw0WkgJYM2wl1%2Fo%2FWUB3RY0sOpp8cv4dr20mJs3k6PWzA8r9K9cCKmmaz9fLglaMKmX6p6XL0Wz0cbCJoxUFkdgKVpJBgyzp9kmOjgK5xFaxvJ045UjyAhxRZP55w49j%2BKVQi1tRSdwjaFsgHE7V5RsBoPPE%2FZOs7VcsWL403EJiXPO9Chg3WQddsDwvoIoWGdYlbkVPkD59yamH4cAcOL7wHq6RkEXRoA7gI5EdsRMZ8t1O6ehPtQ%2BuWBGkZ2y4ZLGd3DqxlcZSmzBG1eknF%2BfrZHfsWUu7kC8cazwQySo1EMlZo63ufx9qoYgCFd3s4pDcT7yvTiFSpSIyojnBIiDq23TzQZQBKZ7F%2F5Iz5aSIE3Z6ulCraOFLZcmZ2LQTGJml%2FEnFPH7arUAvzG7%2FV7SQuYZXoIkN7gQt1CHjwLGL5V98ljankuAe3bbw%2F5tIVcMTS%2F6iBdHXY09UxcoDOob%2B2dEi%2B7ENweh90KZYdxUwqNjMwwY6pgHphzbFq%2BXe1lpwgRoPRBm9QraSTJRuu%2Bqy01hzkJaTKWbSDFUefdCPICespAt9J3FgnaB%2F6zX8WabF%2FFC8D0ouAjB1m4hr3XKJgR7J1EFJiddCdNdf%2F0e%2FlmIG2Ncp0ZZ2ZtxKYh4zDL38lnHXYVYGvwJ%2B7dYxiEytJLuNqmjHa11zIoRYYdierOcqrmNcTOHtiAHUBgSj7OkhPOIW7zIAEKhIzOL4&X-Amz-Signature=70aebf0aaae309f35f81584f771456c3a81940bcfa08312f6d05ae040512f237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
