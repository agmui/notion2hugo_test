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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN6H6RE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6mzou8e6L4OFC9DrXkL87nIziCeoo4m6Np7ED0jbtWgIgb3xweSlwcICw1ughBcr80mgOujd9fno3sF9k3VFORDEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL76tyDW1WR9%2B%2FS2VircA1XOoqJrOgYIlfh7fTdbBzfY0Y8%2B07tKwKsLBKxokjos%2FxFjHGx4rT2mGo24tXXRl2xTu03VMEMMCrgB2c%2FpVh0NHOz8PkS6lZg48ObP73ggGBjh130%2BdApYfWhdIcTN3YyLbUCfQ%2FE5gTMNdpsmW0kH3WJ%2FhU%2Bzen6qzlam2ntI8LaBAfusip6ujuEl6dVS8Jp5A49iwGeZyoEoK7E9esbF5NVvwo9PNNFPwnEJznsyuaDWKrRc96j6Z8FAtoSxy6V6eOfjhRuaVIg5knTF9Ddk3RGEFFmUiBEP7o48gsHtASN5PmQR%2B8Q5VOffU3KBYmmiQmHYOqzuqsrsEKgDHztOU%2Bgp3ByKDL87whZdMJ5aDzY6vejisq2Wr3bKzjCaoJl32EjzcaemHXoZOLtHrg0hFerUq6x4zqYRP1A6x7%2ByZot9b7C3c5aIwIrrix1YJ0jDGKiahkWz9CHeuycsd6X6F%2BXlMdR7vvjijToSRi3G%2FK3tk8%2FbuY52ERy45aseoQcRqSzTDXvqkSAoNdgjA26BdFVh75BhUpqvTQ4et86%2Bm7YPeGq1L3t0%2BN0TTpbED2a1oZv%2FFVpCAwYL%2FRaYutfCgZtvIaaFcyS%2BMJkO93b%2FNYFWRt%2BfVM6lNQgRMJiGnb0GOqUBC%2BPb%2BBVARnj0y6WXTTMUuBGRUmbM7A8AzryyQHzZ%2FWTL1bd3jcpu0b32KFIzQKY4AoV10EFumHawN5tb30bkdWSGJ0ZpYTCMiJ0Jm1sX7%2FRk2mxholxSWKU2%2BO0BJ%2FGliID%2Bp51Ie8epI8ARGmuSBzUDmE8cm0JAX%2FUlJ20lZ3qTTFuI4PTyMU3qGRoTJLdugHCJFxXBMCxEQMi8SCDEAvYjZxCy&X-Amz-Signature=b7486a55007ddf7bc2ab4b9d4c080c8af2c39f4e09bed81c352d5ff2d84e8d68&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN6H6RE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6mzou8e6L4OFC9DrXkL87nIziCeoo4m6Np7ED0jbtWgIgb3xweSlwcICw1ughBcr80mgOujd9fno3sF9k3VFORDEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL76tyDW1WR9%2B%2FS2VircA1XOoqJrOgYIlfh7fTdbBzfY0Y8%2B07tKwKsLBKxokjos%2FxFjHGx4rT2mGo24tXXRl2xTu03VMEMMCrgB2c%2FpVh0NHOz8PkS6lZg48ObP73ggGBjh130%2BdApYfWhdIcTN3YyLbUCfQ%2FE5gTMNdpsmW0kH3WJ%2FhU%2Bzen6qzlam2ntI8LaBAfusip6ujuEl6dVS8Jp5A49iwGeZyoEoK7E9esbF5NVvwo9PNNFPwnEJznsyuaDWKrRc96j6Z8FAtoSxy6V6eOfjhRuaVIg5knTF9Ddk3RGEFFmUiBEP7o48gsHtASN5PmQR%2B8Q5VOffU3KBYmmiQmHYOqzuqsrsEKgDHztOU%2Bgp3ByKDL87whZdMJ5aDzY6vejisq2Wr3bKzjCaoJl32EjzcaemHXoZOLtHrg0hFerUq6x4zqYRP1A6x7%2ByZot9b7C3c5aIwIrrix1YJ0jDGKiahkWz9CHeuycsd6X6F%2BXlMdR7vvjijToSRi3G%2FK3tk8%2FbuY52ERy45aseoQcRqSzTDXvqkSAoNdgjA26BdFVh75BhUpqvTQ4et86%2Bm7YPeGq1L3t0%2BN0TTpbED2a1oZv%2FFVpCAwYL%2FRaYutfCgZtvIaaFcyS%2BMJkO93b%2FNYFWRt%2BfVM6lNQgRMJiGnb0GOqUBC%2BPb%2BBVARnj0y6WXTTMUuBGRUmbM7A8AzryyQHzZ%2FWTL1bd3jcpu0b32KFIzQKY4AoV10EFumHawN5tb30bkdWSGJ0ZpYTCMiJ0Jm1sX7%2FRk2mxholxSWKU2%2BO0BJ%2FGliID%2Bp51Ie8epI8ARGmuSBzUDmE8cm0JAX%2FUlJ20lZ3qTTFuI4PTyMU3qGRoTJLdugHCJFxXBMCxEQMi8SCDEAvYjZxCy&X-Amz-Signature=71e5a9c7d922ff6c6bfcdc2a46301d7bad9523a9742e4f890a085bd653f3d32c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN6H6RE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6mzou8e6L4OFC9DrXkL87nIziCeoo4m6Np7ED0jbtWgIgb3xweSlwcICw1ughBcr80mgOujd9fno3sF9k3VFORDEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL76tyDW1WR9%2B%2FS2VircA1XOoqJrOgYIlfh7fTdbBzfY0Y8%2B07tKwKsLBKxokjos%2FxFjHGx4rT2mGo24tXXRl2xTu03VMEMMCrgB2c%2FpVh0NHOz8PkS6lZg48ObP73ggGBjh130%2BdApYfWhdIcTN3YyLbUCfQ%2FE5gTMNdpsmW0kH3WJ%2FhU%2Bzen6qzlam2ntI8LaBAfusip6ujuEl6dVS8Jp5A49iwGeZyoEoK7E9esbF5NVvwo9PNNFPwnEJznsyuaDWKrRc96j6Z8FAtoSxy6V6eOfjhRuaVIg5knTF9Ddk3RGEFFmUiBEP7o48gsHtASN5PmQR%2B8Q5VOffU3KBYmmiQmHYOqzuqsrsEKgDHztOU%2Bgp3ByKDL87whZdMJ5aDzY6vejisq2Wr3bKzjCaoJl32EjzcaemHXoZOLtHrg0hFerUq6x4zqYRP1A6x7%2ByZot9b7C3c5aIwIrrix1YJ0jDGKiahkWz9CHeuycsd6X6F%2BXlMdR7vvjijToSRi3G%2FK3tk8%2FbuY52ERy45aseoQcRqSzTDXvqkSAoNdgjA26BdFVh75BhUpqvTQ4et86%2Bm7YPeGq1L3t0%2BN0TTpbED2a1oZv%2FFVpCAwYL%2FRaYutfCgZtvIaaFcyS%2BMJkO93b%2FNYFWRt%2BfVM6lNQgRMJiGnb0GOqUBC%2BPb%2BBVARnj0y6WXTTMUuBGRUmbM7A8AzryyQHzZ%2FWTL1bd3jcpu0b32KFIzQKY4AoV10EFumHawN5tb30bkdWSGJ0ZpYTCMiJ0Jm1sX7%2FRk2mxholxSWKU2%2BO0BJ%2FGliID%2Bp51Ie8epI8ARGmuSBzUDmE8cm0JAX%2FUlJ20lZ3qTTFuI4PTyMU3qGRoTJLdugHCJFxXBMCxEQMi8SCDEAvYjZxCy&X-Amz-Signature=64957e57794b15da282479be52a55512939744229407e2c55560c94fcaf523d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN6H6RE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6mzou8e6L4OFC9DrXkL87nIziCeoo4m6Np7ED0jbtWgIgb3xweSlwcICw1ughBcr80mgOujd9fno3sF9k3VFORDEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL76tyDW1WR9%2B%2FS2VircA1XOoqJrOgYIlfh7fTdbBzfY0Y8%2B07tKwKsLBKxokjos%2FxFjHGx4rT2mGo24tXXRl2xTu03VMEMMCrgB2c%2FpVh0NHOz8PkS6lZg48ObP73ggGBjh130%2BdApYfWhdIcTN3YyLbUCfQ%2FE5gTMNdpsmW0kH3WJ%2FhU%2Bzen6qzlam2ntI8LaBAfusip6ujuEl6dVS8Jp5A49iwGeZyoEoK7E9esbF5NVvwo9PNNFPwnEJznsyuaDWKrRc96j6Z8FAtoSxy6V6eOfjhRuaVIg5knTF9Ddk3RGEFFmUiBEP7o48gsHtASN5PmQR%2B8Q5VOffU3KBYmmiQmHYOqzuqsrsEKgDHztOU%2Bgp3ByKDL87whZdMJ5aDzY6vejisq2Wr3bKzjCaoJl32EjzcaemHXoZOLtHrg0hFerUq6x4zqYRP1A6x7%2ByZot9b7C3c5aIwIrrix1YJ0jDGKiahkWz9CHeuycsd6X6F%2BXlMdR7vvjijToSRi3G%2FK3tk8%2FbuY52ERy45aseoQcRqSzTDXvqkSAoNdgjA26BdFVh75BhUpqvTQ4et86%2Bm7YPeGq1L3t0%2BN0TTpbED2a1oZv%2FFVpCAwYL%2FRaYutfCgZtvIaaFcyS%2BMJkO93b%2FNYFWRt%2BfVM6lNQgRMJiGnb0GOqUBC%2BPb%2BBVARnj0y6WXTTMUuBGRUmbM7A8AzryyQHzZ%2FWTL1bd3jcpu0b32KFIzQKY4AoV10EFumHawN5tb30bkdWSGJ0ZpYTCMiJ0Jm1sX7%2FRk2mxholxSWKU2%2BO0BJ%2FGliID%2Bp51Ie8epI8ARGmuSBzUDmE8cm0JAX%2FUlJ20lZ3qTTFuI4PTyMU3qGRoTJLdugHCJFxXBMCxEQMi8SCDEAvYjZxCy&X-Amz-Signature=32af2f8ca6c5cb534b8e5209dec9d0e7316b89f42b810652bb76f4a1479df180&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN6H6RE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6mzou8e6L4OFC9DrXkL87nIziCeoo4m6Np7ED0jbtWgIgb3xweSlwcICw1ughBcr80mgOujd9fno3sF9k3VFORDEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL76tyDW1WR9%2B%2FS2VircA1XOoqJrOgYIlfh7fTdbBzfY0Y8%2B07tKwKsLBKxokjos%2FxFjHGx4rT2mGo24tXXRl2xTu03VMEMMCrgB2c%2FpVh0NHOz8PkS6lZg48ObP73ggGBjh130%2BdApYfWhdIcTN3YyLbUCfQ%2FE5gTMNdpsmW0kH3WJ%2FhU%2Bzen6qzlam2ntI8LaBAfusip6ujuEl6dVS8Jp5A49iwGeZyoEoK7E9esbF5NVvwo9PNNFPwnEJznsyuaDWKrRc96j6Z8FAtoSxy6V6eOfjhRuaVIg5knTF9Ddk3RGEFFmUiBEP7o48gsHtASN5PmQR%2B8Q5VOffU3KBYmmiQmHYOqzuqsrsEKgDHztOU%2Bgp3ByKDL87whZdMJ5aDzY6vejisq2Wr3bKzjCaoJl32EjzcaemHXoZOLtHrg0hFerUq6x4zqYRP1A6x7%2ByZot9b7C3c5aIwIrrix1YJ0jDGKiahkWz9CHeuycsd6X6F%2BXlMdR7vvjijToSRi3G%2FK3tk8%2FbuY52ERy45aseoQcRqSzTDXvqkSAoNdgjA26BdFVh75BhUpqvTQ4et86%2Bm7YPeGq1L3t0%2BN0TTpbED2a1oZv%2FFVpCAwYL%2FRaYutfCgZtvIaaFcyS%2BMJkO93b%2FNYFWRt%2BfVM6lNQgRMJiGnb0GOqUBC%2BPb%2BBVARnj0y6WXTTMUuBGRUmbM7A8AzryyQHzZ%2FWTL1bd3jcpu0b32KFIzQKY4AoV10EFumHawN5tb30bkdWSGJ0ZpYTCMiJ0Jm1sX7%2FRk2mxholxSWKU2%2BO0BJ%2FGliID%2Bp51Ie8epI8ARGmuSBzUDmE8cm0JAX%2FUlJ20lZ3qTTFuI4PTyMU3qGRoTJLdugHCJFxXBMCxEQMi8SCDEAvYjZxCy&X-Amz-Signature=c8b8aed07a7df5246c75b728af72bd78d30597c235953d0eca494e05e3c192fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SN6H6RE%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC6mzou8e6L4OFC9DrXkL87nIziCeoo4m6Np7ED0jbtWgIgb3xweSlwcICw1ughBcr80mgOujd9fno3sF9k3VFORDEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL76tyDW1WR9%2B%2FS2VircA1XOoqJrOgYIlfh7fTdbBzfY0Y8%2B07tKwKsLBKxokjos%2FxFjHGx4rT2mGo24tXXRl2xTu03VMEMMCrgB2c%2FpVh0NHOz8PkS6lZg48ObP73ggGBjh130%2BdApYfWhdIcTN3YyLbUCfQ%2FE5gTMNdpsmW0kH3WJ%2FhU%2Bzen6qzlam2ntI8LaBAfusip6ujuEl6dVS8Jp5A49iwGeZyoEoK7E9esbF5NVvwo9PNNFPwnEJznsyuaDWKrRc96j6Z8FAtoSxy6V6eOfjhRuaVIg5knTF9Ddk3RGEFFmUiBEP7o48gsHtASN5PmQR%2B8Q5VOffU3KBYmmiQmHYOqzuqsrsEKgDHztOU%2Bgp3ByKDL87whZdMJ5aDzY6vejisq2Wr3bKzjCaoJl32EjzcaemHXoZOLtHrg0hFerUq6x4zqYRP1A6x7%2ByZot9b7C3c5aIwIrrix1YJ0jDGKiahkWz9CHeuycsd6X6F%2BXlMdR7vvjijToSRi3G%2FK3tk8%2FbuY52ERy45aseoQcRqSzTDXvqkSAoNdgjA26BdFVh75BhUpqvTQ4et86%2Bm7YPeGq1L3t0%2BN0TTpbED2a1oZv%2FFVpCAwYL%2FRaYutfCgZtvIaaFcyS%2BMJkO93b%2FNYFWRt%2BfVM6lNQgRMJiGnb0GOqUBC%2BPb%2BBVARnj0y6WXTTMUuBGRUmbM7A8AzryyQHzZ%2FWTL1bd3jcpu0b32KFIzQKY4AoV10EFumHawN5tb30bkdWSGJ0ZpYTCMiJ0Jm1sX7%2FRk2mxholxSWKU2%2BO0BJ%2FGliID%2Bp51Ie8epI8ARGmuSBzUDmE8cm0JAX%2FUlJ20lZ3qTTFuI4PTyMU3qGRoTJLdugHCJFxXBMCxEQMi8SCDEAvYjZxCy&X-Amz-Signature=0add30f52577c2b8b6bd00e4af9989ab5f817c052daf3e0f7e9ec518073f3d5f&X-Amz-SignedHeaders=host&x-id=GetObject)
