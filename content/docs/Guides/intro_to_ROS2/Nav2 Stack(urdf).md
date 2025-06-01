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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7QBZPE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC%2FoVWvBw92ROrY357kW9X3l5pfX7ZhyhyQiGiAYWlJ9AIgCLNCTrQkBi%2FjGuzntpN7QI4zLC%2FLF1v4oE9u2nXePl4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEvvHAMocL3crvIuSrcAzkFD3g0K1cCi7AwbVwtH21MwkDjdfuuIhTRMNEbIn34mUQprXccxhZARoRF%2F%2BDZRlVfJQnP6ubmJcfpji9%2BwbdShzQGcL9IfZ4xs5pF7Q%2FQxhvGYl18wcR9gA5j0UGkMFwOfKIDmmmHcEMBYilro%2B0tTGsuVP%2BzmGBs3kzbJhTWEMXT4H2Q%2Fzjd0%2Bucu76mRO5ZlnZ5lNobau%2BP7eEbWo7LdM9szSo26LQ507mkgypad%2Fguy0Xy49WwFU5PzUflNjJrh3w1gq82BIMiXVj5bFaT90Y1Xc%2Bi6yn2xVsY0ExiQJzu%2B3WGSM%2Ff3e0AcWBsXgBticwA5Q6e8bfCxcqb4PCd527iYQllQGl0RodgTEYLN6ZHe1ZbxvcIGR5tPkH3P7TwAHM%2BavcL%2B7HH1gD0oviyDl3UKYk%2BhDOnwn8aoq14GdvmFnC0xV5vTaVW7S3FoyDhlA46d6iJpw%2F0H1tWeXlp18s0xG72NdWjpCEIunlq%2B0AfnbDetsGzJr4dZzo8PtV4%2BpV9xkpAQfyAFIhXj7kRTJwG4ELcaXcov5Np2AtRZ1V3dVG5HMBDzUAKOJsPg2OS5R0MYaKWLInIRP0oHKquDEEVuJ0Dy4Xs10kP%2BWQh0Wo0C6HIu%2BITnd96MNS878EGOqUB7zjhmFGmUOjT%2FCtfuI1SLsh6W3A%2BDJelLgm6SdVoz3%2FwHo8Na2t5SWKDD1Ysno5Hsl7GowNH4IWVW%2BI1X3QSJDWRF5z%2FlTLfLEkE8bgeDiOgoXBSJlA2RWMhKS6uAHE3G0WwksWOvW0IAclmk3pTXZzUzl4O%2FqEtQabImxEPQsD%2BMcdPaCw9qx44DxdEAanfNXovXlizSYrDWJBhArueleABxaH5&X-Amz-Signature=470c39627bd8c00274737f97a48bca368b2d0f27a7b12f6f3d0db8ba46dba9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7QBZPE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC%2FoVWvBw92ROrY357kW9X3l5pfX7ZhyhyQiGiAYWlJ9AIgCLNCTrQkBi%2FjGuzntpN7QI4zLC%2FLF1v4oE9u2nXePl4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEvvHAMocL3crvIuSrcAzkFD3g0K1cCi7AwbVwtH21MwkDjdfuuIhTRMNEbIn34mUQprXccxhZARoRF%2F%2BDZRlVfJQnP6ubmJcfpji9%2BwbdShzQGcL9IfZ4xs5pF7Q%2FQxhvGYl18wcR9gA5j0UGkMFwOfKIDmmmHcEMBYilro%2B0tTGsuVP%2BzmGBs3kzbJhTWEMXT4H2Q%2Fzjd0%2Bucu76mRO5ZlnZ5lNobau%2BP7eEbWo7LdM9szSo26LQ507mkgypad%2Fguy0Xy49WwFU5PzUflNjJrh3w1gq82BIMiXVj5bFaT90Y1Xc%2Bi6yn2xVsY0ExiQJzu%2B3WGSM%2Ff3e0AcWBsXgBticwA5Q6e8bfCxcqb4PCd527iYQllQGl0RodgTEYLN6ZHe1ZbxvcIGR5tPkH3P7TwAHM%2BavcL%2B7HH1gD0oviyDl3UKYk%2BhDOnwn8aoq14GdvmFnC0xV5vTaVW7S3FoyDhlA46d6iJpw%2F0H1tWeXlp18s0xG72NdWjpCEIunlq%2B0AfnbDetsGzJr4dZzo8PtV4%2BpV9xkpAQfyAFIhXj7kRTJwG4ELcaXcov5Np2AtRZ1V3dVG5HMBDzUAKOJsPg2OS5R0MYaKWLInIRP0oHKquDEEVuJ0Dy4Xs10kP%2BWQh0Wo0C6HIu%2BITnd96MNS878EGOqUB7zjhmFGmUOjT%2FCtfuI1SLsh6W3A%2BDJelLgm6SdVoz3%2FwHo8Na2t5SWKDD1Ysno5Hsl7GowNH4IWVW%2BI1X3QSJDWRF5z%2FlTLfLEkE8bgeDiOgoXBSJlA2RWMhKS6uAHE3G0WwksWOvW0IAclmk3pTXZzUzl4O%2FqEtQabImxEPQsD%2BMcdPaCw9qx44DxdEAanfNXovXlizSYrDWJBhArueleABxaH5&X-Amz-Signature=5adeaf7812e8293b922cf79c1a7e17e3a6b71fea4e3dbe70e904b8cf74bf8e16&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7QBZPE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC%2FoVWvBw92ROrY357kW9X3l5pfX7ZhyhyQiGiAYWlJ9AIgCLNCTrQkBi%2FjGuzntpN7QI4zLC%2FLF1v4oE9u2nXePl4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEvvHAMocL3crvIuSrcAzkFD3g0K1cCi7AwbVwtH21MwkDjdfuuIhTRMNEbIn34mUQprXccxhZARoRF%2F%2BDZRlVfJQnP6ubmJcfpji9%2BwbdShzQGcL9IfZ4xs5pF7Q%2FQxhvGYl18wcR9gA5j0UGkMFwOfKIDmmmHcEMBYilro%2B0tTGsuVP%2BzmGBs3kzbJhTWEMXT4H2Q%2Fzjd0%2Bucu76mRO5ZlnZ5lNobau%2BP7eEbWo7LdM9szSo26LQ507mkgypad%2Fguy0Xy49WwFU5PzUflNjJrh3w1gq82BIMiXVj5bFaT90Y1Xc%2Bi6yn2xVsY0ExiQJzu%2B3WGSM%2Ff3e0AcWBsXgBticwA5Q6e8bfCxcqb4PCd527iYQllQGl0RodgTEYLN6ZHe1ZbxvcIGR5tPkH3P7TwAHM%2BavcL%2B7HH1gD0oviyDl3UKYk%2BhDOnwn8aoq14GdvmFnC0xV5vTaVW7S3FoyDhlA46d6iJpw%2F0H1tWeXlp18s0xG72NdWjpCEIunlq%2B0AfnbDetsGzJr4dZzo8PtV4%2BpV9xkpAQfyAFIhXj7kRTJwG4ELcaXcov5Np2AtRZ1V3dVG5HMBDzUAKOJsPg2OS5R0MYaKWLInIRP0oHKquDEEVuJ0Dy4Xs10kP%2BWQh0Wo0C6HIu%2BITnd96MNS878EGOqUB7zjhmFGmUOjT%2FCtfuI1SLsh6W3A%2BDJelLgm6SdVoz3%2FwHo8Na2t5SWKDD1Ysno5Hsl7GowNH4IWVW%2BI1X3QSJDWRF5z%2FlTLfLEkE8bgeDiOgoXBSJlA2RWMhKS6uAHE3G0WwksWOvW0IAclmk3pTXZzUzl4O%2FqEtQabImxEPQsD%2BMcdPaCw9qx44DxdEAanfNXovXlizSYrDWJBhArueleABxaH5&X-Amz-Signature=658ad788e5e8ecef2948c9828cebd3d515cb1fea31f1b7c8aabad5c71c90172d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7QBZPE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC%2FoVWvBw92ROrY357kW9X3l5pfX7ZhyhyQiGiAYWlJ9AIgCLNCTrQkBi%2FjGuzntpN7QI4zLC%2FLF1v4oE9u2nXePl4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEvvHAMocL3crvIuSrcAzkFD3g0K1cCi7AwbVwtH21MwkDjdfuuIhTRMNEbIn34mUQprXccxhZARoRF%2F%2BDZRlVfJQnP6ubmJcfpji9%2BwbdShzQGcL9IfZ4xs5pF7Q%2FQxhvGYl18wcR9gA5j0UGkMFwOfKIDmmmHcEMBYilro%2B0tTGsuVP%2BzmGBs3kzbJhTWEMXT4H2Q%2Fzjd0%2Bucu76mRO5ZlnZ5lNobau%2BP7eEbWo7LdM9szSo26LQ507mkgypad%2Fguy0Xy49WwFU5PzUflNjJrh3w1gq82BIMiXVj5bFaT90Y1Xc%2Bi6yn2xVsY0ExiQJzu%2B3WGSM%2Ff3e0AcWBsXgBticwA5Q6e8bfCxcqb4PCd527iYQllQGl0RodgTEYLN6ZHe1ZbxvcIGR5tPkH3P7TwAHM%2BavcL%2B7HH1gD0oviyDl3UKYk%2BhDOnwn8aoq14GdvmFnC0xV5vTaVW7S3FoyDhlA46d6iJpw%2F0H1tWeXlp18s0xG72NdWjpCEIunlq%2B0AfnbDetsGzJr4dZzo8PtV4%2BpV9xkpAQfyAFIhXj7kRTJwG4ELcaXcov5Np2AtRZ1V3dVG5HMBDzUAKOJsPg2OS5R0MYaKWLInIRP0oHKquDEEVuJ0Dy4Xs10kP%2BWQh0Wo0C6HIu%2BITnd96MNS878EGOqUB7zjhmFGmUOjT%2FCtfuI1SLsh6W3A%2BDJelLgm6SdVoz3%2FwHo8Na2t5SWKDD1Ysno5Hsl7GowNH4IWVW%2BI1X3QSJDWRF5z%2FlTLfLEkE8bgeDiOgoXBSJlA2RWMhKS6uAHE3G0WwksWOvW0IAclmk3pTXZzUzl4O%2FqEtQabImxEPQsD%2BMcdPaCw9qx44DxdEAanfNXovXlizSYrDWJBhArueleABxaH5&X-Amz-Signature=ebaa4c1c61afe557b9778b109dbacab3af3ed58320fafae55c90608ef4fedda8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7QBZPE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC%2FoVWvBw92ROrY357kW9X3l5pfX7ZhyhyQiGiAYWlJ9AIgCLNCTrQkBi%2FjGuzntpN7QI4zLC%2FLF1v4oE9u2nXePl4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEvvHAMocL3crvIuSrcAzkFD3g0K1cCi7AwbVwtH21MwkDjdfuuIhTRMNEbIn34mUQprXccxhZARoRF%2F%2BDZRlVfJQnP6ubmJcfpji9%2BwbdShzQGcL9IfZ4xs5pF7Q%2FQxhvGYl18wcR9gA5j0UGkMFwOfKIDmmmHcEMBYilro%2B0tTGsuVP%2BzmGBs3kzbJhTWEMXT4H2Q%2Fzjd0%2Bucu76mRO5ZlnZ5lNobau%2BP7eEbWo7LdM9szSo26LQ507mkgypad%2Fguy0Xy49WwFU5PzUflNjJrh3w1gq82BIMiXVj5bFaT90Y1Xc%2Bi6yn2xVsY0ExiQJzu%2B3WGSM%2Ff3e0AcWBsXgBticwA5Q6e8bfCxcqb4PCd527iYQllQGl0RodgTEYLN6ZHe1ZbxvcIGR5tPkH3P7TwAHM%2BavcL%2B7HH1gD0oviyDl3UKYk%2BhDOnwn8aoq14GdvmFnC0xV5vTaVW7S3FoyDhlA46d6iJpw%2F0H1tWeXlp18s0xG72NdWjpCEIunlq%2B0AfnbDetsGzJr4dZzo8PtV4%2BpV9xkpAQfyAFIhXj7kRTJwG4ELcaXcov5Np2AtRZ1V3dVG5HMBDzUAKOJsPg2OS5R0MYaKWLInIRP0oHKquDEEVuJ0Dy4Xs10kP%2BWQh0Wo0C6HIu%2BITnd96MNS878EGOqUB7zjhmFGmUOjT%2FCtfuI1SLsh6W3A%2BDJelLgm6SdVoz3%2FwHo8Na2t5SWKDD1Ysno5Hsl7GowNH4IWVW%2BI1X3QSJDWRF5z%2FlTLfLEkE8bgeDiOgoXBSJlA2RWMhKS6uAHE3G0WwksWOvW0IAclmk3pTXZzUzl4O%2FqEtQabImxEPQsD%2BMcdPaCw9qx44DxdEAanfNXovXlizSYrDWJBhArueleABxaH5&X-Amz-Signature=5a325834f2d7e1fb9d145451ae2a8772db3c73ae7768753af924fb9362a584e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ7QBZPE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC%2FoVWvBw92ROrY357kW9X3l5pfX7ZhyhyQiGiAYWlJ9AIgCLNCTrQkBi%2FjGuzntpN7QI4zLC%2FLF1v4oE9u2nXePl4qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEvvHAMocL3crvIuSrcAzkFD3g0K1cCi7AwbVwtH21MwkDjdfuuIhTRMNEbIn34mUQprXccxhZARoRF%2F%2BDZRlVfJQnP6ubmJcfpji9%2BwbdShzQGcL9IfZ4xs5pF7Q%2FQxhvGYl18wcR9gA5j0UGkMFwOfKIDmmmHcEMBYilro%2B0tTGsuVP%2BzmGBs3kzbJhTWEMXT4H2Q%2Fzjd0%2Bucu76mRO5ZlnZ5lNobau%2BP7eEbWo7LdM9szSo26LQ507mkgypad%2Fguy0Xy49WwFU5PzUflNjJrh3w1gq82BIMiXVj5bFaT90Y1Xc%2Bi6yn2xVsY0ExiQJzu%2B3WGSM%2Ff3e0AcWBsXgBticwA5Q6e8bfCxcqb4PCd527iYQllQGl0RodgTEYLN6ZHe1ZbxvcIGR5tPkH3P7TwAHM%2BavcL%2B7HH1gD0oviyDl3UKYk%2BhDOnwn8aoq14GdvmFnC0xV5vTaVW7S3FoyDhlA46d6iJpw%2F0H1tWeXlp18s0xG72NdWjpCEIunlq%2B0AfnbDetsGzJr4dZzo8PtV4%2BpV9xkpAQfyAFIhXj7kRTJwG4ELcaXcov5Np2AtRZ1V3dVG5HMBDzUAKOJsPg2OS5R0MYaKWLInIRP0oHKquDEEVuJ0Dy4Xs10kP%2BWQh0Wo0C6HIu%2BITnd96MNS878EGOqUB7zjhmFGmUOjT%2FCtfuI1SLsh6W3A%2BDJelLgm6SdVoz3%2FwHo8Na2t5SWKDD1Ysno5Hsl7GowNH4IWVW%2BI1X3QSJDWRF5z%2FlTLfLEkE8bgeDiOgoXBSJlA2RWMhKS6uAHE3G0WwksWOvW0IAclmk3pTXZzUzl4O%2FqEtQabImxEPQsD%2BMcdPaCw9qx44DxdEAanfNXovXlizSYrDWJBhArueleABxaH5&X-Amz-Signature=4018b3413513f9542912ba0250efad86c0f9cc86a19be32cd530a8ef0a4f7971&X-Amz-SignedHeaders=host&x-id=GetObject)
