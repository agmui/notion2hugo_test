---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKYVWF2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGZWFQjuU4DZZta5zz8gDhJ9nqUONaseKKfurx0rT%2FzCAiBfKGKM6zgK%2FLKCBOecQmNu1gn%2FyzBnUIOL8mAGWZOD%2FSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqRfTIsuDLYRJXsuFKtwDZbOuiHPmFTtFc%2Fep8PubHOvytxAP3oTsM6IePhXnP87ujMf%2B%2FJvM2ZK%2Fv5jl8uECpvY5oEXrFkDQZZOIHPU7eE%2FO3A9PBaOWi96QQFIER9kOw7WgQn23E%2F4Ssh5e%2FNFSoQwIvHKZ5oMNGi6PUUcncbXHr2QqsngvHbAc53XZ18RT6IiePnEvKByAGjNJq25kqtUoGLEaKhUPe%2Fpgfz607uiMMf39sSlvkQihfOhU9Ant7MMSrnjwjTydAx3wsNn0syuVfSdPbyZNd4q%2BN9cnc3cLYnt46ACUllxUD6QFcoUlNn0mILxtb%2F%2Fh2bpl1vqYMJsIox5hn9XkKD6pxlm%2BIIqmP0w318mwmHEA7auvdkMwm8Q7opVRXOpInKXUzrG8pz0Bssq8zBwotHn4u1q2k1n15TMXFFo7NYtxcWjE2mac0mqBZGJhjff1Bxa80TJ4pC%2F7pdwm4u0YkVO%2BJRUWxKfFVz90bNn48vdRBAsSRUtlKx%2FZYMeFmlyXT6YkxGcG6J1sP1LzQ%2FZ2B0ILMCDe5QSllLiWpgsv4fHjGMtfgeyF3USoiz1lofssLOwjf0O%2Fv1g%2Fi58iIm1ShhRgX7QlTTCtFOwGQT8fgRIzIeTkrinc4XYrMtEa0v4a33ww6OjlvAY6pgGWwj4zADNQ%2BSVKxXeUAMDn6GcYrPmsco7Y0cww8AHv8F9fNAKO0offT3MpBf%2F1R6pHNBazWr4S5r6HDYYktXwi0%2FzwNy1yxKj82x2%2BOruthpxG3L8WBSxUp8ymf%2BrJHUySd3okVHwcjfwuvkPgw28FtS3OFWoidUr6B0otUXJ2mEk0YGh8xhr6Yr0Nsuego4x3rCnz3xRy62sIMFva3NLxdMWusAXg&X-Amz-Signature=fff0d7cc0ee0bb150e20a88a05abced674a624aa0842b76acc23f90ec9c398ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKYVWF2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGZWFQjuU4DZZta5zz8gDhJ9nqUONaseKKfurx0rT%2FzCAiBfKGKM6zgK%2FLKCBOecQmNu1gn%2FyzBnUIOL8mAGWZOD%2FSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqRfTIsuDLYRJXsuFKtwDZbOuiHPmFTtFc%2Fep8PubHOvytxAP3oTsM6IePhXnP87ujMf%2B%2FJvM2ZK%2Fv5jl8uECpvY5oEXrFkDQZZOIHPU7eE%2FO3A9PBaOWi96QQFIER9kOw7WgQn23E%2F4Ssh5e%2FNFSoQwIvHKZ5oMNGi6PUUcncbXHr2QqsngvHbAc53XZ18RT6IiePnEvKByAGjNJq25kqtUoGLEaKhUPe%2Fpgfz607uiMMf39sSlvkQihfOhU9Ant7MMSrnjwjTydAx3wsNn0syuVfSdPbyZNd4q%2BN9cnc3cLYnt46ACUllxUD6QFcoUlNn0mILxtb%2F%2Fh2bpl1vqYMJsIox5hn9XkKD6pxlm%2BIIqmP0w318mwmHEA7auvdkMwm8Q7opVRXOpInKXUzrG8pz0Bssq8zBwotHn4u1q2k1n15TMXFFo7NYtxcWjE2mac0mqBZGJhjff1Bxa80TJ4pC%2F7pdwm4u0YkVO%2BJRUWxKfFVz90bNn48vdRBAsSRUtlKx%2FZYMeFmlyXT6YkxGcG6J1sP1LzQ%2FZ2B0ILMCDe5QSllLiWpgsv4fHjGMtfgeyF3USoiz1lofssLOwjf0O%2Fv1g%2Fi58iIm1ShhRgX7QlTTCtFOwGQT8fgRIzIeTkrinc4XYrMtEa0v4a33ww6OjlvAY6pgGWwj4zADNQ%2BSVKxXeUAMDn6GcYrPmsco7Y0cww8AHv8F9fNAKO0offT3MpBf%2F1R6pHNBazWr4S5r6HDYYktXwi0%2FzwNy1yxKj82x2%2BOruthpxG3L8WBSxUp8ymf%2BrJHUySd3okVHwcjfwuvkPgw28FtS3OFWoidUr6B0otUXJ2mEk0YGh8xhr6Yr0Nsuego4x3rCnz3xRy62sIMFva3NLxdMWusAXg&X-Amz-Signature=04b3c9be4d677dfed78c974841f2253ef5891ff7cac7c5aeb3294a5c409cfbf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKYVWF2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGZWFQjuU4DZZta5zz8gDhJ9nqUONaseKKfurx0rT%2FzCAiBfKGKM6zgK%2FLKCBOecQmNu1gn%2FyzBnUIOL8mAGWZOD%2FSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqRfTIsuDLYRJXsuFKtwDZbOuiHPmFTtFc%2Fep8PubHOvytxAP3oTsM6IePhXnP87ujMf%2B%2FJvM2ZK%2Fv5jl8uECpvY5oEXrFkDQZZOIHPU7eE%2FO3A9PBaOWi96QQFIER9kOw7WgQn23E%2F4Ssh5e%2FNFSoQwIvHKZ5oMNGi6PUUcncbXHr2QqsngvHbAc53XZ18RT6IiePnEvKByAGjNJq25kqtUoGLEaKhUPe%2Fpgfz607uiMMf39sSlvkQihfOhU9Ant7MMSrnjwjTydAx3wsNn0syuVfSdPbyZNd4q%2BN9cnc3cLYnt46ACUllxUD6QFcoUlNn0mILxtb%2F%2Fh2bpl1vqYMJsIox5hn9XkKD6pxlm%2BIIqmP0w318mwmHEA7auvdkMwm8Q7opVRXOpInKXUzrG8pz0Bssq8zBwotHn4u1q2k1n15TMXFFo7NYtxcWjE2mac0mqBZGJhjff1Bxa80TJ4pC%2F7pdwm4u0YkVO%2BJRUWxKfFVz90bNn48vdRBAsSRUtlKx%2FZYMeFmlyXT6YkxGcG6J1sP1LzQ%2FZ2B0ILMCDe5QSllLiWpgsv4fHjGMtfgeyF3USoiz1lofssLOwjf0O%2Fv1g%2Fi58iIm1ShhRgX7QlTTCtFOwGQT8fgRIzIeTkrinc4XYrMtEa0v4a33ww6OjlvAY6pgGWwj4zADNQ%2BSVKxXeUAMDn6GcYrPmsco7Y0cww8AHv8F9fNAKO0offT3MpBf%2F1R6pHNBazWr4S5r6HDYYktXwi0%2FzwNy1yxKj82x2%2BOruthpxG3L8WBSxUp8ymf%2BrJHUySd3okVHwcjfwuvkPgw28FtS3OFWoidUr6B0otUXJ2mEk0YGh8xhr6Yr0Nsuego4x3rCnz3xRy62sIMFva3NLxdMWusAXg&X-Amz-Signature=726c99e17c4ae0eb983940e745c344223f20c0374dcfd72dc3889e6dca1e25b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKYVWF2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGZWFQjuU4DZZta5zz8gDhJ9nqUONaseKKfurx0rT%2FzCAiBfKGKM6zgK%2FLKCBOecQmNu1gn%2FyzBnUIOL8mAGWZOD%2FSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqRfTIsuDLYRJXsuFKtwDZbOuiHPmFTtFc%2Fep8PubHOvytxAP3oTsM6IePhXnP87ujMf%2B%2FJvM2ZK%2Fv5jl8uECpvY5oEXrFkDQZZOIHPU7eE%2FO3A9PBaOWi96QQFIER9kOw7WgQn23E%2F4Ssh5e%2FNFSoQwIvHKZ5oMNGi6PUUcncbXHr2QqsngvHbAc53XZ18RT6IiePnEvKByAGjNJq25kqtUoGLEaKhUPe%2Fpgfz607uiMMf39sSlvkQihfOhU9Ant7MMSrnjwjTydAx3wsNn0syuVfSdPbyZNd4q%2BN9cnc3cLYnt46ACUllxUD6QFcoUlNn0mILxtb%2F%2Fh2bpl1vqYMJsIox5hn9XkKD6pxlm%2BIIqmP0w318mwmHEA7auvdkMwm8Q7opVRXOpInKXUzrG8pz0Bssq8zBwotHn4u1q2k1n15TMXFFo7NYtxcWjE2mac0mqBZGJhjff1Bxa80TJ4pC%2F7pdwm4u0YkVO%2BJRUWxKfFVz90bNn48vdRBAsSRUtlKx%2FZYMeFmlyXT6YkxGcG6J1sP1LzQ%2FZ2B0ILMCDe5QSllLiWpgsv4fHjGMtfgeyF3USoiz1lofssLOwjf0O%2Fv1g%2Fi58iIm1ShhRgX7QlTTCtFOwGQT8fgRIzIeTkrinc4XYrMtEa0v4a33ww6OjlvAY6pgGWwj4zADNQ%2BSVKxXeUAMDn6GcYrPmsco7Y0cww8AHv8F9fNAKO0offT3MpBf%2F1R6pHNBazWr4S5r6HDYYktXwi0%2FzwNy1yxKj82x2%2BOruthpxG3L8WBSxUp8ymf%2BrJHUySd3okVHwcjfwuvkPgw28FtS3OFWoidUr6B0otUXJ2mEk0YGh8xhr6Yr0Nsuego4x3rCnz3xRy62sIMFva3NLxdMWusAXg&X-Amz-Signature=e5296dafdf6a5ae67dc21d396ea973e4252198f5a442fada9dbb1009c76957b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKYVWF2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGZWFQjuU4DZZta5zz8gDhJ9nqUONaseKKfurx0rT%2FzCAiBfKGKM6zgK%2FLKCBOecQmNu1gn%2FyzBnUIOL8mAGWZOD%2FSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqRfTIsuDLYRJXsuFKtwDZbOuiHPmFTtFc%2Fep8PubHOvytxAP3oTsM6IePhXnP87ujMf%2B%2FJvM2ZK%2Fv5jl8uECpvY5oEXrFkDQZZOIHPU7eE%2FO3A9PBaOWi96QQFIER9kOw7WgQn23E%2F4Ssh5e%2FNFSoQwIvHKZ5oMNGi6PUUcncbXHr2QqsngvHbAc53XZ18RT6IiePnEvKByAGjNJq25kqtUoGLEaKhUPe%2Fpgfz607uiMMf39sSlvkQihfOhU9Ant7MMSrnjwjTydAx3wsNn0syuVfSdPbyZNd4q%2BN9cnc3cLYnt46ACUllxUD6QFcoUlNn0mILxtb%2F%2Fh2bpl1vqYMJsIox5hn9XkKD6pxlm%2BIIqmP0w318mwmHEA7auvdkMwm8Q7opVRXOpInKXUzrG8pz0Bssq8zBwotHn4u1q2k1n15TMXFFo7NYtxcWjE2mac0mqBZGJhjff1Bxa80TJ4pC%2F7pdwm4u0YkVO%2BJRUWxKfFVz90bNn48vdRBAsSRUtlKx%2FZYMeFmlyXT6YkxGcG6J1sP1LzQ%2FZ2B0ILMCDe5QSllLiWpgsv4fHjGMtfgeyF3USoiz1lofssLOwjf0O%2Fv1g%2Fi58iIm1ShhRgX7QlTTCtFOwGQT8fgRIzIeTkrinc4XYrMtEa0v4a33ww6OjlvAY6pgGWwj4zADNQ%2BSVKxXeUAMDn6GcYrPmsco7Y0cww8AHv8F9fNAKO0offT3MpBf%2F1R6pHNBazWr4S5r6HDYYktXwi0%2FzwNy1yxKj82x2%2BOruthpxG3L8WBSxUp8ymf%2BrJHUySd3okVHwcjfwuvkPgw28FtS3OFWoidUr6B0otUXJ2mEk0YGh8xhr6Yr0Nsuego4x3rCnz3xRy62sIMFva3NLxdMWusAXg&X-Amz-Signature=b7cc5670c5af4af5e765882d6e19546e7d5cc1c6926d74c7e5967128b0d144c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUKYVWF2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGZWFQjuU4DZZta5zz8gDhJ9nqUONaseKKfurx0rT%2FzCAiBfKGKM6zgK%2FLKCBOecQmNu1gn%2FyzBnUIOL8mAGWZOD%2FSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqRfTIsuDLYRJXsuFKtwDZbOuiHPmFTtFc%2Fep8PubHOvytxAP3oTsM6IePhXnP87ujMf%2B%2FJvM2ZK%2Fv5jl8uECpvY5oEXrFkDQZZOIHPU7eE%2FO3A9PBaOWi96QQFIER9kOw7WgQn23E%2F4Ssh5e%2FNFSoQwIvHKZ5oMNGi6PUUcncbXHr2QqsngvHbAc53XZ18RT6IiePnEvKByAGjNJq25kqtUoGLEaKhUPe%2Fpgfz607uiMMf39sSlvkQihfOhU9Ant7MMSrnjwjTydAx3wsNn0syuVfSdPbyZNd4q%2BN9cnc3cLYnt46ACUllxUD6QFcoUlNn0mILxtb%2F%2Fh2bpl1vqYMJsIox5hn9XkKD6pxlm%2BIIqmP0w318mwmHEA7auvdkMwm8Q7opVRXOpInKXUzrG8pz0Bssq8zBwotHn4u1q2k1n15TMXFFo7NYtxcWjE2mac0mqBZGJhjff1Bxa80TJ4pC%2F7pdwm4u0YkVO%2BJRUWxKfFVz90bNn48vdRBAsSRUtlKx%2FZYMeFmlyXT6YkxGcG6J1sP1LzQ%2FZ2B0ILMCDe5QSllLiWpgsv4fHjGMtfgeyF3USoiz1lofssLOwjf0O%2Fv1g%2Fi58iIm1ShhRgX7QlTTCtFOwGQT8fgRIzIeTkrinc4XYrMtEa0v4a33ww6OjlvAY6pgGWwj4zADNQ%2BSVKxXeUAMDn6GcYrPmsco7Y0cww8AHv8F9fNAKO0offT3MpBf%2F1R6pHNBazWr4S5r6HDYYktXwi0%2FzwNy1yxKj82x2%2BOruthpxG3L8WBSxUp8ymf%2BrJHUySd3okVHwcjfwuvkPgw28FtS3OFWoidUr6B0otUXJ2mEk0YGh8xhr6Yr0Nsuego4x3rCnz3xRy62sIMFva3NLxdMWusAXg&X-Amz-Signature=8fc3b25c4f9ca9d9a64451e299a8ce28e43a3cfcfa235252848c68e2b757c465&X-Amz-SignedHeaders=host&x-id=GetObject)
