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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVSHHA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBSNuLldsIWY55XRqpqBLjIDxx0fbnGTHI1%2FjICMI3fAAiEAuewDts1dsPWhSuUYMNb0aNCGLvreduvS4SFZ1tzlCKgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJBc1SUocZUvEynUuircAyWGQED%2BZf54OHNvsBtNhJfvkh3UkNeWPECXHG94kIAfdxo1ZMt%2Bn52U0V9uHxWlICbuKI5q%2F5qFy1TNUiqbfXziH4bO59IZ0MPzk1Ws%2BRG0v0ws0C1bHmcKr1tAkvjO8QjR9qGs90iyIIjaJGJnn2TlrqOn%2FxYza%2BBTDjUP3gRmsnnyPIreeU3JWI6gMKqhzZER4xL8LJkVEVCnF9GvVw1YVvhJXm8FNv%2BJT28jtipiesjQScVp1TCvJUeBz2Qx9S58p9%2BsIL1ThXtMA44dG02PJxc5knLZX098zonYrLMa2Jh6ZRifTqZJrdgYe5gl6xofop%2BU%2FwMhCKL6%2BHPL2KvYcL1LWGnt5U%2FhX%2Bp2IcOQiMrSSRVH2KxP2JtUenDHYNmTUU1F%2F%2BCO2zv2%2FHasUEvdfbgksGqkmXrjBxg9g%2B0uGclPGgsW3VlqoAUmhwtFRaGP6sMWWxojMg0%2FKjQUbhcqFmqGoHwc5eny86qBZ0F59dDoKOBsbDwIkKXVPA1ntZeY2FRSwuDF%2BF36NXIGLcWs6ZxqiyxgMh63nlq%2B7cwu6%2FasoBz01RsdzGSrR2gNnJm21yvAZvIcG%2BWiHg7wl320aHDOWE5qOUXTQtSyMu8mBlLW%2FHOOorZF4cqCMIGlyb0GOqUBWbul9dgea5NsjgROZIFJ5aCBifk6s1vYcD3WLbFOA7pz02eju0Kgwpn7Ag29zbBfwsPxbD3PXjSssVXBkRbXO8kekVz%2FMuwCoI4xiMkfTxeg3zAsQ6wIZvoI7smkBPeRhBVKO5bkvvRqqFluGf6TYAL7Hg5106NWsQrYNU%2BlFAyAM21gKXgqAlbNGulOzaJB66cXj8lkE9MmHbSTW1JTM4DJO2P7&X-Amz-Signature=6d9120d4fcb9db80363435c63e76a45d0cf2289464cf44f3e4c3d70e2a42d9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVSHHA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBSNuLldsIWY55XRqpqBLjIDxx0fbnGTHI1%2FjICMI3fAAiEAuewDts1dsPWhSuUYMNb0aNCGLvreduvS4SFZ1tzlCKgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJBc1SUocZUvEynUuircAyWGQED%2BZf54OHNvsBtNhJfvkh3UkNeWPECXHG94kIAfdxo1ZMt%2Bn52U0V9uHxWlICbuKI5q%2F5qFy1TNUiqbfXziH4bO59IZ0MPzk1Ws%2BRG0v0ws0C1bHmcKr1tAkvjO8QjR9qGs90iyIIjaJGJnn2TlrqOn%2FxYza%2BBTDjUP3gRmsnnyPIreeU3JWI6gMKqhzZER4xL8LJkVEVCnF9GvVw1YVvhJXm8FNv%2BJT28jtipiesjQScVp1TCvJUeBz2Qx9S58p9%2BsIL1ThXtMA44dG02PJxc5knLZX098zonYrLMa2Jh6ZRifTqZJrdgYe5gl6xofop%2BU%2FwMhCKL6%2BHPL2KvYcL1LWGnt5U%2FhX%2Bp2IcOQiMrSSRVH2KxP2JtUenDHYNmTUU1F%2F%2BCO2zv2%2FHasUEvdfbgksGqkmXrjBxg9g%2B0uGclPGgsW3VlqoAUmhwtFRaGP6sMWWxojMg0%2FKjQUbhcqFmqGoHwc5eny86qBZ0F59dDoKOBsbDwIkKXVPA1ntZeY2FRSwuDF%2BF36NXIGLcWs6ZxqiyxgMh63nlq%2B7cwu6%2FasoBz01RsdzGSrR2gNnJm21yvAZvIcG%2BWiHg7wl320aHDOWE5qOUXTQtSyMu8mBlLW%2FHOOorZF4cqCMIGlyb0GOqUBWbul9dgea5NsjgROZIFJ5aCBifk6s1vYcD3WLbFOA7pz02eju0Kgwpn7Ag29zbBfwsPxbD3PXjSssVXBkRbXO8kekVz%2FMuwCoI4xiMkfTxeg3zAsQ6wIZvoI7smkBPeRhBVKO5bkvvRqqFluGf6TYAL7Hg5106NWsQrYNU%2BlFAyAM21gKXgqAlbNGulOzaJB66cXj8lkE9MmHbSTW1JTM4DJO2P7&X-Amz-Signature=4088b85f139a6389b80b0b903c27ab9e715506a15c36ff1632b2963973e6b654&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVSHHA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBSNuLldsIWY55XRqpqBLjIDxx0fbnGTHI1%2FjICMI3fAAiEAuewDts1dsPWhSuUYMNb0aNCGLvreduvS4SFZ1tzlCKgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJBc1SUocZUvEynUuircAyWGQED%2BZf54OHNvsBtNhJfvkh3UkNeWPECXHG94kIAfdxo1ZMt%2Bn52U0V9uHxWlICbuKI5q%2F5qFy1TNUiqbfXziH4bO59IZ0MPzk1Ws%2BRG0v0ws0C1bHmcKr1tAkvjO8QjR9qGs90iyIIjaJGJnn2TlrqOn%2FxYza%2BBTDjUP3gRmsnnyPIreeU3JWI6gMKqhzZER4xL8LJkVEVCnF9GvVw1YVvhJXm8FNv%2BJT28jtipiesjQScVp1TCvJUeBz2Qx9S58p9%2BsIL1ThXtMA44dG02PJxc5knLZX098zonYrLMa2Jh6ZRifTqZJrdgYe5gl6xofop%2BU%2FwMhCKL6%2BHPL2KvYcL1LWGnt5U%2FhX%2Bp2IcOQiMrSSRVH2KxP2JtUenDHYNmTUU1F%2F%2BCO2zv2%2FHasUEvdfbgksGqkmXrjBxg9g%2B0uGclPGgsW3VlqoAUmhwtFRaGP6sMWWxojMg0%2FKjQUbhcqFmqGoHwc5eny86qBZ0F59dDoKOBsbDwIkKXVPA1ntZeY2FRSwuDF%2BF36NXIGLcWs6ZxqiyxgMh63nlq%2B7cwu6%2FasoBz01RsdzGSrR2gNnJm21yvAZvIcG%2BWiHg7wl320aHDOWE5qOUXTQtSyMu8mBlLW%2FHOOorZF4cqCMIGlyb0GOqUBWbul9dgea5NsjgROZIFJ5aCBifk6s1vYcD3WLbFOA7pz02eju0Kgwpn7Ag29zbBfwsPxbD3PXjSssVXBkRbXO8kekVz%2FMuwCoI4xiMkfTxeg3zAsQ6wIZvoI7smkBPeRhBVKO5bkvvRqqFluGf6TYAL7Hg5106NWsQrYNU%2BlFAyAM21gKXgqAlbNGulOzaJB66cXj8lkE9MmHbSTW1JTM4DJO2P7&X-Amz-Signature=52e3198f8382111b4172941a11f2328d294db504be650ad00c5f99d9abac90ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVSHHA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBSNuLldsIWY55XRqpqBLjIDxx0fbnGTHI1%2FjICMI3fAAiEAuewDts1dsPWhSuUYMNb0aNCGLvreduvS4SFZ1tzlCKgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJBc1SUocZUvEynUuircAyWGQED%2BZf54OHNvsBtNhJfvkh3UkNeWPECXHG94kIAfdxo1ZMt%2Bn52U0V9uHxWlICbuKI5q%2F5qFy1TNUiqbfXziH4bO59IZ0MPzk1Ws%2BRG0v0ws0C1bHmcKr1tAkvjO8QjR9qGs90iyIIjaJGJnn2TlrqOn%2FxYza%2BBTDjUP3gRmsnnyPIreeU3JWI6gMKqhzZER4xL8LJkVEVCnF9GvVw1YVvhJXm8FNv%2BJT28jtipiesjQScVp1TCvJUeBz2Qx9S58p9%2BsIL1ThXtMA44dG02PJxc5knLZX098zonYrLMa2Jh6ZRifTqZJrdgYe5gl6xofop%2BU%2FwMhCKL6%2BHPL2KvYcL1LWGnt5U%2FhX%2Bp2IcOQiMrSSRVH2KxP2JtUenDHYNmTUU1F%2F%2BCO2zv2%2FHasUEvdfbgksGqkmXrjBxg9g%2B0uGclPGgsW3VlqoAUmhwtFRaGP6sMWWxojMg0%2FKjQUbhcqFmqGoHwc5eny86qBZ0F59dDoKOBsbDwIkKXVPA1ntZeY2FRSwuDF%2BF36NXIGLcWs6ZxqiyxgMh63nlq%2B7cwu6%2FasoBz01RsdzGSrR2gNnJm21yvAZvIcG%2BWiHg7wl320aHDOWE5qOUXTQtSyMu8mBlLW%2FHOOorZF4cqCMIGlyb0GOqUBWbul9dgea5NsjgROZIFJ5aCBifk6s1vYcD3WLbFOA7pz02eju0Kgwpn7Ag29zbBfwsPxbD3PXjSssVXBkRbXO8kekVz%2FMuwCoI4xiMkfTxeg3zAsQ6wIZvoI7smkBPeRhBVKO5bkvvRqqFluGf6TYAL7Hg5106NWsQrYNU%2BlFAyAM21gKXgqAlbNGulOzaJB66cXj8lkE9MmHbSTW1JTM4DJO2P7&X-Amz-Signature=1b228617d5ae4e8c749f6ad88fc1c0f84ec1d0b8051af55824e8e849e573cc64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVSHHA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBSNuLldsIWY55XRqpqBLjIDxx0fbnGTHI1%2FjICMI3fAAiEAuewDts1dsPWhSuUYMNb0aNCGLvreduvS4SFZ1tzlCKgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJBc1SUocZUvEynUuircAyWGQED%2BZf54OHNvsBtNhJfvkh3UkNeWPECXHG94kIAfdxo1ZMt%2Bn52U0V9uHxWlICbuKI5q%2F5qFy1TNUiqbfXziH4bO59IZ0MPzk1Ws%2BRG0v0ws0C1bHmcKr1tAkvjO8QjR9qGs90iyIIjaJGJnn2TlrqOn%2FxYza%2BBTDjUP3gRmsnnyPIreeU3JWI6gMKqhzZER4xL8LJkVEVCnF9GvVw1YVvhJXm8FNv%2BJT28jtipiesjQScVp1TCvJUeBz2Qx9S58p9%2BsIL1ThXtMA44dG02PJxc5knLZX098zonYrLMa2Jh6ZRifTqZJrdgYe5gl6xofop%2BU%2FwMhCKL6%2BHPL2KvYcL1LWGnt5U%2FhX%2Bp2IcOQiMrSSRVH2KxP2JtUenDHYNmTUU1F%2F%2BCO2zv2%2FHasUEvdfbgksGqkmXrjBxg9g%2B0uGclPGgsW3VlqoAUmhwtFRaGP6sMWWxojMg0%2FKjQUbhcqFmqGoHwc5eny86qBZ0F59dDoKOBsbDwIkKXVPA1ntZeY2FRSwuDF%2BF36NXIGLcWs6ZxqiyxgMh63nlq%2B7cwu6%2FasoBz01RsdzGSrR2gNnJm21yvAZvIcG%2BWiHg7wl320aHDOWE5qOUXTQtSyMu8mBlLW%2FHOOorZF4cqCMIGlyb0GOqUBWbul9dgea5NsjgROZIFJ5aCBifk6s1vYcD3WLbFOA7pz02eju0Kgwpn7Ag29zbBfwsPxbD3PXjSssVXBkRbXO8kekVz%2FMuwCoI4xiMkfTxeg3zAsQ6wIZvoI7smkBPeRhBVKO5bkvvRqqFluGf6TYAL7Hg5106NWsQrYNU%2BlFAyAM21gKXgqAlbNGulOzaJB66cXj8lkE9MmHbSTW1JTM4DJO2P7&X-Amz-Signature=0157f69be3ec360d9d3f42dbfbf4347b3f2bec108bc8a81ab9f0c7ffb5e777d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYVSHHA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T220259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIBSNuLldsIWY55XRqpqBLjIDxx0fbnGTHI1%2FjICMI3fAAiEAuewDts1dsPWhSuUYMNb0aNCGLvreduvS4SFZ1tzlCKgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJBc1SUocZUvEynUuircAyWGQED%2BZf54OHNvsBtNhJfvkh3UkNeWPECXHG94kIAfdxo1ZMt%2Bn52U0V9uHxWlICbuKI5q%2F5qFy1TNUiqbfXziH4bO59IZ0MPzk1Ws%2BRG0v0ws0C1bHmcKr1tAkvjO8QjR9qGs90iyIIjaJGJnn2TlrqOn%2FxYza%2BBTDjUP3gRmsnnyPIreeU3JWI6gMKqhzZER4xL8LJkVEVCnF9GvVw1YVvhJXm8FNv%2BJT28jtipiesjQScVp1TCvJUeBz2Qx9S58p9%2BsIL1ThXtMA44dG02PJxc5knLZX098zonYrLMa2Jh6ZRifTqZJrdgYe5gl6xofop%2BU%2FwMhCKL6%2BHPL2KvYcL1LWGnt5U%2FhX%2Bp2IcOQiMrSSRVH2KxP2JtUenDHYNmTUU1F%2F%2BCO2zv2%2FHasUEvdfbgksGqkmXrjBxg9g%2B0uGclPGgsW3VlqoAUmhwtFRaGP6sMWWxojMg0%2FKjQUbhcqFmqGoHwc5eny86qBZ0F59dDoKOBsbDwIkKXVPA1ntZeY2FRSwuDF%2BF36NXIGLcWs6ZxqiyxgMh63nlq%2B7cwu6%2FasoBz01RsdzGSrR2gNnJm21yvAZvIcG%2BWiHg7wl320aHDOWE5qOUXTQtSyMu8mBlLW%2FHOOorZF4cqCMIGlyb0GOqUBWbul9dgea5NsjgROZIFJ5aCBifk6s1vYcD3WLbFOA7pz02eju0Kgwpn7Ag29zbBfwsPxbD3PXjSssVXBkRbXO8kekVz%2FMuwCoI4xiMkfTxeg3zAsQ6wIZvoI7smkBPeRhBVKO5bkvvRqqFluGf6TYAL7Hg5106NWsQrYNU%2BlFAyAM21gKXgqAlbNGulOzaJB66cXj8lkE9MmHbSTW1JTM4DJO2P7&X-Amz-Signature=46f019195f0796f1b0baac1625967e86a4617fdca60d1f656a4647c869bfe51b&X-Amz-SignedHeaders=host&x-id=GetObject)
