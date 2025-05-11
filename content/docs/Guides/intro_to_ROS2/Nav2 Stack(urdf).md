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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYJS2CF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFEHvVg538%2Fxr2tBtKDlHC92WqSapKcx6xGm105YBbaZAiEA%2B72AECdsccAvKFv2ohg%2BStSUvMLP4dz1aBu6xo%2BMYu8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbRpVRzN1o5C6BJIyrcA2EdmEw4tqV2ltRFQgr0zvduBgsUBDYgrDxz8o6i3ZtqbVJJQdRBX7qVMztdDPy%2FfmuIc35%2FiQmdTgq5W5if1%2FP4%2BEWG%2FvlEH0vfQOlqdH49L2OJeG2ZTkpNG4IGqvFfA1hWeHDHjreD6Rndp88p0JmNL3NowAr400JU0%2BFb%2BXbs52Jx%2F%2Bjv0xrmab8lDLFWUavWXuTG0JPBj8vNc0mnKpOufkQgFI9vrajqYDO6PGS0ooTajxdgOLYAuqI5m1zARQoLgo8joMHIprac9hI3Hap2I3StVe5sds%2FlsRpvCc%2Bv%2FqckxArd0ul6The%2Fe6oWtxaEmeSpVKFZYj6ESnnGnXA9nP0UWHxxLB31Ps%2BiUZX5%2FEmRYuK%2FHAq0A0nL7rTyYLOG%2BjVJO%2F0dIojc5KbS1ZZCJ1lM0LH4EPN7iFXGKyXGpXr7Lpx%2Bk39ZnIbpJfgZKA1OSCe1Xy7tV7Om1ly0cCAHpol4jAQ3UWGpxTg1wjVwdRkPPwxEik%2BB%2BbKd39iIA59kGM2VsW4NWRz59374nYOklX8p5%2FI4Vwu1pCMMjV88%2FpUHahEbG9PGgKBKlrQCajGF%2BMZRSFXnKyem2oFcne%2B6vyi2hKPIstYYzTePPOTtCm4d61QLZbt4PdV1MNm5gcEGOqUBuEX8Qid85lZ%2B1LgrC%2BQXIxII9d7ZQAr1RcWnDu8zPg%2BS8fAT40Isz3kT1UnaCzWetksY%2FvTll4Xz0JzGVH87npU7WDL0AKeju1ldCBXifA6MdIa8XOwn8%2Boka%2FT%2FZ4Lg7tyN%2BlnnwMFwImFRBygEQJVdCggonYWh3vV5ks6LvO5TqJPaZ836Euq7vqtAoNstXlSj1iBRaDpCHvz%2FzmQo5581lY80&X-Amz-Signature=2727d3377dc59493192e974c3a3fadd7709aaafc85937b37e667c0623c5e64fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYJS2CF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFEHvVg538%2Fxr2tBtKDlHC92WqSapKcx6xGm105YBbaZAiEA%2B72AECdsccAvKFv2ohg%2BStSUvMLP4dz1aBu6xo%2BMYu8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbRpVRzN1o5C6BJIyrcA2EdmEw4tqV2ltRFQgr0zvduBgsUBDYgrDxz8o6i3ZtqbVJJQdRBX7qVMztdDPy%2FfmuIc35%2FiQmdTgq5W5if1%2FP4%2BEWG%2FvlEH0vfQOlqdH49L2OJeG2ZTkpNG4IGqvFfA1hWeHDHjreD6Rndp88p0JmNL3NowAr400JU0%2BFb%2BXbs52Jx%2F%2Bjv0xrmab8lDLFWUavWXuTG0JPBj8vNc0mnKpOufkQgFI9vrajqYDO6PGS0ooTajxdgOLYAuqI5m1zARQoLgo8joMHIprac9hI3Hap2I3StVe5sds%2FlsRpvCc%2Bv%2FqckxArd0ul6The%2Fe6oWtxaEmeSpVKFZYj6ESnnGnXA9nP0UWHxxLB31Ps%2BiUZX5%2FEmRYuK%2FHAq0A0nL7rTyYLOG%2BjVJO%2F0dIojc5KbS1ZZCJ1lM0LH4EPN7iFXGKyXGpXr7Lpx%2Bk39ZnIbpJfgZKA1OSCe1Xy7tV7Om1ly0cCAHpol4jAQ3UWGpxTg1wjVwdRkPPwxEik%2BB%2BbKd39iIA59kGM2VsW4NWRz59374nYOklX8p5%2FI4Vwu1pCMMjV88%2FpUHahEbG9PGgKBKlrQCajGF%2BMZRSFXnKyem2oFcne%2B6vyi2hKPIstYYzTePPOTtCm4d61QLZbt4PdV1MNm5gcEGOqUBuEX8Qid85lZ%2B1LgrC%2BQXIxII9d7ZQAr1RcWnDu8zPg%2BS8fAT40Isz3kT1UnaCzWetksY%2FvTll4Xz0JzGVH87npU7WDL0AKeju1ldCBXifA6MdIa8XOwn8%2Boka%2FT%2FZ4Lg7tyN%2BlnnwMFwImFRBygEQJVdCggonYWh3vV5ks6LvO5TqJPaZ836Euq7vqtAoNstXlSj1iBRaDpCHvz%2FzmQo5581lY80&X-Amz-Signature=5bee6d88c6fc57e84ecd4fa0d0945c9573809a6241b2422ce2597c23c15ffb74&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYJS2CF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFEHvVg538%2Fxr2tBtKDlHC92WqSapKcx6xGm105YBbaZAiEA%2B72AECdsccAvKFv2ohg%2BStSUvMLP4dz1aBu6xo%2BMYu8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbRpVRzN1o5C6BJIyrcA2EdmEw4tqV2ltRFQgr0zvduBgsUBDYgrDxz8o6i3ZtqbVJJQdRBX7qVMztdDPy%2FfmuIc35%2FiQmdTgq5W5if1%2FP4%2BEWG%2FvlEH0vfQOlqdH49L2OJeG2ZTkpNG4IGqvFfA1hWeHDHjreD6Rndp88p0JmNL3NowAr400JU0%2BFb%2BXbs52Jx%2F%2Bjv0xrmab8lDLFWUavWXuTG0JPBj8vNc0mnKpOufkQgFI9vrajqYDO6PGS0ooTajxdgOLYAuqI5m1zARQoLgo8joMHIprac9hI3Hap2I3StVe5sds%2FlsRpvCc%2Bv%2FqckxArd0ul6The%2Fe6oWtxaEmeSpVKFZYj6ESnnGnXA9nP0UWHxxLB31Ps%2BiUZX5%2FEmRYuK%2FHAq0A0nL7rTyYLOG%2BjVJO%2F0dIojc5KbS1ZZCJ1lM0LH4EPN7iFXGKyXGpXr7Lpx%2Bk39ZnIbpJfgZKA1OSCe1Xy7tV7Om1ly0cCAHpol4jAQ3UWGpxTg1wjVwdRkPPwxEik%2BB%2BbKd39iIA59kGM2VsW4NWRz59374nYOklX8p5%2FI4Vwu1pCMMjV88%2FpUHahEbG9PGgKBKlrQCajGF%2BMZRSFXnKyem2oFcne%2B6vyi2hKPIstYYzTePPOTtCm4d61QLZbt4PdV1MNm5gcEGOqUBuEX8Qid85lZ%2B1LgrC%2BQXIxII9d7ZQAr1RcWnDu8zPg%2BS8fAT40Isz3kT1UnaCzWetksY%2FvTll4Xz0JzGVH87npU7WDL0AKeju1ldCBXifA6MdIa8XOwn8%2Boka%2FT%2FZ4Lg7tyN%2BlnnwMFwImFRBygEQJVdCggonYWh3vV5ks6LvO5TqJPaZ836Euq7vqtAoNstXlSj1iBRaDpCHvz%2FzmQo5581lY80&X-Amz-Signature=e70e135392b8f6ca5a86be25c7a945cfc0087d0a14245a9e062829d5db08c480&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYJS2CF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFEHvVg538%2Fxr2tBtKDlHC92WqSapKcx6xGm105YBbaZAiEA%2B72AECdsccAvKFv2ohg%2BStSUvMLP4dz1aBu6xo%2BMYu8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbRpVRzN1o5C6BJIyrcA2EdmEw4tqV2ltRFQgr0zvduBgsUBDYgrDxz8o6i3ZtqbVJJQdRBX7qVMztdDPy%2FfmuIc35%2FiQmdTgq5W5if1%2FP4%2BEWG%2FvlEH0vfQOlqdH49L2OJeG2ZTkpNG4IGqvFfA1hWeHDHjreD6Rndp88p0JmNL3NowAr400JU0%2BFb%2BXbs52Jx%2F%2Bjv0xrmab8lDLFWUavWXuTG0JPBj8vNc0mnKpOufkQgFI9vrajqYDO6PGS0ooTajxdgOLYAuqI5m1zARQoLgo8joMHIprac9hI3Hap2I3StVe5sds%2FlsRpvCc%2Bv%2FqckxArd0ul6The%2Fe6oWtxaEmeSpVKFZYj6ESnnGnXA9nP0UWHxxLB31Ps%2BiUZX5%2FEmRYuK%2FHAq0A0nL7rTyYLOG%2BjVJO%2F0dIojc5KbS1ZZCJ1lM0LH4EPN7iFXGKyXGpXr7Lpx%2Bk39ZnIbpJfgZKA1OSCe1Xy7tV7Om1ly0cCAHpol4jAQ3UWGpxTg1wjVwdRkPPwxEik%2BB%2BbKd39iIA59kGM2VsW4NWRz59374nYOklX8p5%2FI4Vwu1pCMMjV88%2FpUHahEbG9PGgKBKlrQCajGF%2BMZRSFXnKyem2oFcne%2B6vyi2hKPIstYYzTePPOTtCm4d61QLZbt4PdV1MNm5gcEGOqUBuEX8Qid85lZ%2B1LgrC%2BQXIxII9d7ZQAr1RcWnDu8zPg%2BS8fAT40Isz3kT1UnaCzWetksY%2FvTll4Xz0JzGVH87npU7WDL0AKeju1ldCBXifA6MdIa8XOwn8%2Boka%2FT%2FZ4Lg7tyN%2BlnnwMFwImFRBygEQJVdCggonYWh3vV5ks6LvO5TqJPaZ836Euq7vqtAoNstXlSj1iBRaDpCHvz%2FzmQo5581lY80&X-Amz-Signature=0e3cf2b404d310c555c0bfd3daf68efaff467f4c9f27d9759a1dccf318b46537&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYJS2CF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFEHvVg538%2Fxr2tBtKDlHC92WqSapKcx6xGm105YBbaZAiEA%2B72AECdsccAvKFv2ohg%2BStSUvMLP4dz1aBu6xo%2BMYu8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbRpVRzN1o5C6BJIyrcA2EdmEw4tqV2ltRFQgr0zvduBgsUBDYgrDxz8o6i3ZtqbVJJQdRBX7qVMztdDPy%2FfmuIc35%2FiQmdTgq5W5if1%2FP4%2BEWG%2FvlEH0vfQOlqdH49L2OJeG2ZTkpNG4IGqvFfA1hWeHDHjreD6Rndp88p0JmNL3NowAr400JU0%2BFb%2BXbs52Jx%2F%2Bjv0xrmab8lDLFWUavWXuTG0JPBj8vNc0mnKpOufkQgFI9vrajqYDO6PGS0ooTajxdgOLYAuqI5m1zARQoLgo8joMHIprac9hI3Hap2I3StVe5sds%2FlsRpvCc%2Bv%2FqckxArd0ul6The%2Fe6oWtxaEmeSpVKFZYj6ESnnGnXA9nP0UWHxxLB31Ps%2BiUZX5%2FEmRYuK%2FHAq0A0nL7rTyYLOG%2BjVJO%2F0dIojc5KbS1ZZCJ1lM0LH4EPN7iFXGKyXGpXr7Lpx%2Bk39ZnIbpJfgZKA1OSCe1Xy7tV7Om1ly0cCAHpol4jAQ3UWGpxTg1wjVwdRkPPwxEik%2BB%2BbKd39iIA59kGM2VsW4NWRz59374nYOklX8p5%2FI4Vwu1pCMMjV88%2FpUHahEbG9PGgKBKlrQCajGF%2BMZRSFXnKyem2oFcne%2B6vyi2hKPIstYYzTePPOTtCm4d61QLZbt4PdV1MNm5gcEGOqUBuEX8Qid85lZ%2B1LgrC%2BQXIxII9d7ZQAr1RcWnDu8zPg%2BS8fAT40Isz3kT1UnaCzWetksY%2FvTll4Xz0JzGVH87npU7WDL0AKeju1ldCBXifA6MdIa8XOwn8%2Boka%2FT%2FZ4Lg7tyN%2BlnnwMFwImFRBygEQJVdCggonYWh3vV5ks6LvO5TqJPaZ836Euq7vqtAoNstXlSj1iBRaDpCHvz%2FzmQo5581lY80&X-Amz-Signature=afa68ffa981994dbf44122840d058c19bc45db1c9746c7f91c1437a2869569b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TYJS2CF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFEHvVg538%2Fxr2tBtKDlHC92WqSapKcx6xGm105YBbaZAiEA%2B72AECdsccAvKFv2ohg%2BStSUvMLP4dz1aBu6xo%2BMYu8qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbRpVRzN1o5C6BJIyrcA2EdmEw4tqV2ltRFQgr0zvduBgsUBDYgrDxz8o6i3ZtqbVJJQdRBX7qVMztdDPy%2FfmuIc35%2FiQmdTgq5W5if1%2FP4%2BEWG%2FvlEH0vfQOlqdH49L2OJeG2ZTkpNG4IGqvFfA1hWeHDHjreD6Rndp88p0JmNL3NowAr400JU0%2BFb%2BXbs52Jx%2F%2Bjv0xrmab8lDLFWUavWXuTG0JPBj8vNc0mnKpOufkQgFI9vrajqYDO6PGS0ooTajxdgOLYAuqI5m1zARQoLgo8joMHIprac9hI3Hap2I3StVe5sds%2FlsRpvCc%2Bv%2FqckxArd0ul6The%2Fe6oWtxaEmeSpVKFZYj6ESnnGnXA9nP0UWHxxLB31Ps%2BiUZX5%2FEmRYuK%2FHAq0A0nL7rTyYLOG%2BjVJO%2F0dIojc5KbS1ZZCJ1lM0LH4EPN7iFXGKyXGpXr7Lpx%2Bk39ZnIbpJfgZKA1OSCe1Xy7tV7Om1ly0cCAHpol4jAQ3UWGpxTg1wjVwdRkPPwxEik%2BB%2BbKd39iIA59kGM2VsW4NWRz59374nYOklX8p5%2FI4Vwu1pCMMjV88%2FpUHahEbG9PGgKBKlrQCajGF%2BMZRSFXnKyem2oFcne%2B6vyi2hKPIstYYzTePPOTtCm4d61QLZbt4PdV1MNm5gcEGOqUBuEX8Qid85lZ%2B1LgrC%2BQXIxII9d7ZQAr1RcWnDu8zPg%2BS8fAT40Isz3kT1UnaCzWetksY%2FvTll4Xz0JzGVH87npU7WDL0AKeju1ldCBXifA6MdIa8XOwn8%2Boka%2FT%2FZ4Lg7tyN%2BlnnwMFwImFRBygEQJVdCggonYWh3vV5ks6LvO5TqJPaZ836Euq7vqtAoNstXlSj1iBRaDpCHvz%2FzmQo5581lY80&X-Amz-Signature=1d497d4a180cc2bdeca7779d2d6884b55e626e0aea5fc9fd220da1715f23028f&X-Amz-SignedHeaders=host&x-id=GetObject)
