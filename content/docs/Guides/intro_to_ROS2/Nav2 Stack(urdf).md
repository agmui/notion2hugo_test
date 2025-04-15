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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMVN52P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgn2lx8m%2BqZ2rIaf%2F8OF7dg03jO7SrGl2ZuYVxg%2BaviAiB0ubIFSkRYXDPID4QGp4xtANj440vfe%2FuPCiagyPOVtCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD26fHet8gh9znl%2B4KtwD9xqCBEJ6vPLSowG135ePa0DCrz0UNt1AM00DBqPwHexISQNSf32ljuwjmyZkyVUYud1zGmRZ15p%2Ben4rMlhKr90dfaOfAqMFJqTf70As6qP%2FK2sFy81ZgA4TCF78B6jQSTcvUgOvHgOrchwcXNmU6tBPwSosBLRgwAZAtwbzI191iM1ScNAgBrtYMEj1Eu55dvnsJy9OwF0V0j2DA8UO2ycy%2FdlC2v%2FInolbdInFpiru6FObM2YsdUYGO5Em1QIxxTeNcDln0oH1Gs38vV0v0XJ3BtvfrtSwABjtQ4nr%2BxI0X648%2Bq0%2F2HEkYML3OjxPvSu6ik5wVt4ISySxRZvVAv9%2BTDntPCO5I0mR1VBPxZHOQOZcPv9hqaSZAJkl9olQL5w4bJdY6fCccr0JOlqabXGJvRc%2Fxd%2BmKvbLM7IeToWs3ytQTzrSKNAmHnS2LY3%2BNpZnI4eeB9IUcITf5XoaE8eF9imJm6Elt0staDIEo4RmXp9gzDOpDS8kUjZmQe%2FrUrVzoO%2FIQ0WMvN3s8BJibQUYtKLELkU40Ux3S6%2FKAfEMwDZcrkEZ474jOotFHph6t%2BxrN3uiysI45ey7MYgCSIFUOpS%2B3IIrP%2FJFmfFfyXsk94BZHQpAGdQ0GOww%2F7X4vwY6pgGl93Ts1pf4ms9akz1WlseK2xvNGdob%2B90fg2mlRKlZnko6CO4Ab2m19b8hqyv9oP39qrcksx8JVKc4h2I33hgHQ7yxVQ1aEPun0cVr4H9IF7d%2BSn%2FpXMNDrT60sqlEoh29m08k89XFWR2NcJZkxBa%2BeBPGUuwby5FqNVmxB0qpUNgtC%2BiB7RYIlMvA8SNzLnnbmQLqtiQe%2BEt62UoVEwYpckUVNXvE&X-Amz-Signature=2527d018f7b700eeffa56dc74f7af266b60b1894612a037029b85789e72cad3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMVN52P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgn2lx8m%2BqZ2rIaf%2F8OF7dg03jO7SrGl2ZuYVxg%2BaviAiB0ubIFSkRYXDPID4QGp4xtANj440vfe%2FuPCiagyPOVtCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD26fHet8gh9znl%2B4KtwD9xqCBEJ6vPLSowG135ePa0DCrz0UNt1AM00DBqPwHexISQNSf32ljuwjmyZkyVUYud1zGmRZ15p%2Ben4rMlhKr90dfaOfAqMFJqTf70As6qP%2FK2sFy81ZgA4TCF78B6jQSTcvUgOvHgOrchwcXNmU6tBPwSosBLRgwAZAtwbzI191iM1ScNAgBrtYMEj1Eu55dvnsJy9OwF0V0j2DA8UO2ycy%2FdlC2v%2FInolbdInFpiru6FObM2YsdUYGO5Em1QIxxTeNcDln0oH1Gs38vV0v0XJ3BtvfrtSwABjtQ4nr%2BxI0X648%2Bq0%2F2HEkYML3OjxPvSu6ik5wVt4ISySxRZvVAv9%2BTDntPCO5I0mR1VBPxZHOQOZcPv9hqaSZAJkl9olQL5w4bJdY6fCccr0JOlqabXGJvRc%2Fxd%2BmKvbLM7IeToWs3ytQTzrSKNAmHnS2LY3%2BNpZnI4eeB9IUcITf5XoaE8eF9imJm6Elt0staDIEo4RmXp9gzDOpDS8kUjZmQe%2FrUrVzoO%2FIQ0WMvN3s8BJibQUYtKLELkU40Ux3S6%2FKAfEMwDZcrkEZ474jOotFHph6t%2BxrN3uiysI45ey7MYgCSIFUOpS%2B3IIrP%2FJFmfFfyXsk94BZHQpAGdQ0GOww%2F7X4vwY6pgGl93Ts1pf4ms9akz1WlseK2xvNGdob%2B90fg2mlRKlZnko6CO4Ab2m19b8hqyv9oP39qrcksx8JVKc4h2I33hgHQ7yxVQ1aEPun0cVr4H9IF7d%2BSn%2FpXMNDrT60sqlEoh29m08k89XFWR2NcJZkxBa%2BeBPGUuwby5FqNVmxB0qpUNgtC%2BiB7RYIlMvA8SNzLnnbmQLqtiQe%2BEt62UoVEwYpckUVNXvE&X-Amz-Signature=24d75a7dbec2fffba7f4606fa10734c58aa844bcc8c861ecd63d2004a450ab3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMVN52P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgn2lx8m%2BqZ2rIaf%2F8OF7dg03jO7SrGl2ZuYVxg%2BaviAiB0ubIFSkRYXDPID4QGp4xtANj440vfe%2FuPCiagyPOVtCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD26fHet8gh9znl%2B4KtwD9xqCBEJ6vPLSowG135ePa0DCrz0UNt1AM00DBqPwHexISQNSf32ljuwjmyZkyVUYud1zGmRZ15p%2Ben4rMlhKr90dfaOfAqMFJqTf70As6qP%2FK2sFy81ZgA4TCF78B6jQSTcvUgOvHgOrchwcXNmU6tBPwSosBLRgwAZAtwbzI191iM1ScNAgBrtYMEj1Eu55dvnsJy9OwF0V0j2DA8UO2ycy%2FdlC2v%2FInolbdInFpiru6FObM2YsdUYGO5Em1QIxxTeNcDln0oH1Gs38vV0v0XJ3BtvfrtSwABjtQ4nr%2BxI0X648%2Bq0%2F2HEkYML3OjxPvSu6ik5wVt4ISySxRZvVAv9%2BTDntPCO5I0mR1VBPxZHOQOZcPv9hqaSZAJkl9olQL5w4bJdY6fCccr0JOlqabXGJvRc%2Fxd%2BmKvbLM7IeToWs3ytQTzrSKNAmHnS2LY3%2BNpZnI4eeB9IUcITf5XoaE8eF9imJm6Elt0staDIEo4RmXp9gzDOpDS8kUjZmQe%2FrUrVzoO%2FIQ0WMvN3s8BJibQUYtKLELkU40Ux3S6%2FKAfEMwDZcrkEZ474jOotFHph6t%2BxrN3uiysI45ey7MYgCSIFUOpS%2B3IIrP%2FJFmfFfyXsk94BZHQpAGdQ0GOww%2F7X4vwY6pgGl93Ts1pf4ms9akz1WlseK2xvNGdob%2B90fg2mlRKlZnko6CO4Ab2m19b8hqyv9oP39qrcksx8JVKc4h2I33hgHQ7yxVQ1aEPun0cVr4H9IF7d%2BSn%2FpXMNDrT60sqlEoh29m08k89XFWR2NcJZkxBa%2BeBPGUuwby5FqNVmxB0qpUNgtC%2BiB7RYIlMvA8SNzLnnbmQLqtiQe%2BEt62UoVEwYpckUVNXvE&X-Amz-Signature=112c67dce143476ba1e7b137e6d1a850726086461bcc680b6143a596850b07d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMVN52P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgn2lx8m%2BqZ2rIaf%2F8OF7dg03jO7SrGl2ZuYVxg%2BaviAiB0ubIFSkRYXDPID4QGp4xtANj440vfe%2FuPCiagyPOVtCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD26fHet8gh9znl%2B4KtwD9xqCBEJ6vPLSowG135ePa0DCrz0UNt1AM00DBqPwHexISQNSf32ljuwjmyZkyVUYud1zGmRZ15p%2Ben4rMlhKr90dfaOfAqMFJqTf70As6qP%2FK2sFy81ZgA4TCF78B6jQSTcvUgOvHgOrchwcXNmU6tBPwSosBLRgwAZAtwbzI191iM1ScNAgBrtYMEj1Eu55dvnsJy9OwF0V0j2DA8UO2ycy%2FdlC2v%2FInolbdInFpiru6FObM2YsdUYGO5Em1QIxxTeNcDln0oH1Gs38vV0v0XJ3BtvfrtSwABjtQ4nr%2BxI0X648%2Bq0%2F2HEkYML3OjxPvSu6ik5wVt4ISySxRZvVAv9%2BTDntPCO5I0mR1VBPxZHOQOZcPv9hqaSZAJkl9olQL5w4bJdY6fCccr0JOlqabXGJvRc%2Fxd%2BmKvbLM7IeToWs3ytQTzrSKNAmHnS2LY3%2BNpZnI4eeB9IUcITf5XoaE8eF9imJm6Elt0staDIEo4RmXp9gzDOpDS8kUjZmQe%2FrUrVzoO%2FIQ0WMvN3s8BJibQUYtKLELkU40Ux3S6%2FKAfEMwDZcrkEZ474jOotFHph6t%2BxrN3uiysI45ey7MYgCSIFUOpS%2B3IIrP%2FJFmfFfyXsk94BZHQpAGdQ0GOww%2F7X4vwY6pgGl93Ts1pf4ms9akz1WlseK2xvNGdob%2B90fg2mlRKlZnko6CO4Ab2m19b8hqyv9oP39qrcksx8JVKc4h2I33hgHQ7yxVQ1aEPun0cVr4H9IF7d%2BSn%2FpXMNDrT60sqlEoh29m08k89XFWR2NcJZkxBa%2BeBPGUuwby5FqNVmxB0qpUNgtC%2BiB7RYIlMvA8SNzLnnbmQLqtiQe%2BEt62UoVEwYpckUVNXvE&X-Amz-Signature=875ae7d405eec030a909e2c3315b712b7208892ba75098e7befeccf0d707771e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMVN52P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgn2lx8m%2BqZ2rIaf%2F8OF7dg03jO7SrGl2ZuYVxg%2BaviAiB0ubIFSkRYXDPID4QGp4xtANj440vfe%2FuPCiagyPOVtCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD26fHet8gh9znl%2B4KtwD9xqCBEJ6vPLSowG135ePa0DCrz0UNt1AM00DBqPwHexISQNSf32ljuwjmyZkyVUYud1zGmRZ15p%2Ben4rMlhKr90dfaOfAqMFJqTf70As6qP%2FK2sFy81ZgA4TCF78B6jQSTcvUgOvHgOrchwcXNmU6tBPwSosBLRgwAZAtwbzI191iM1ScNAgBrtYMEj1Eu55dvnsJy9OwF0V0j2DA8UO2ycy%2FdlC2v%2FInolbdInFpiru6FObM2YsdUYGO5Em1QIxxTeNcDln0oH1Gs38vV0v0XJ3BtvfrtSwABjtQ4nr%2BxI0X648%2Bq0%2F2HEkYML3OjxPvSu6ik5wVt4ISySxRZvVAv9%2BTDntPCO5I0mR1VBPxZHOQOZcPv9hqaSZAJkl9olQL5w4bJdY6fCccr0JOlqabXGJvRc%2Fxd%2BmKvbLM7IeToWs3ytQTzrSKNAmHnS2LY3%2BNpZnI4eeB9IUcITf5XoaE8eF9imJm6Elt0staDIEo4RmXp9gzDOpDS8kUjZmQe%2FrUrVzoO%2FIQ0WMvN3s8BJibQUYtKLELkU40Ux3S6%2FKAfEMwDZcrkEZ474jOotFHph6t%2BxrN3uiysI45ey7MYgCSIFUOpS%2B3IIrP%2FJFmfFfyXsk94BZHQpAGdQ0GOww%2F7X4vwY6pgGl93Ts1pf4ms9akz1WlseK2xvNGdob%2B90fg2mlRKlZnko6CO4Ab2m19b8hqyv9oP39qrcksx8JVKc4h2I33hgHQ7yxVQ1aEPun0cVr4H9IF7d%2BSn%2FpXMNDrT60sqlEoh29m08k89XFWR2NcJZkxBa%2BeBPGUuwby5FqNVmxB0qpUNgtC%2BiB7RYIlMvA8SNzLnnbmQLqtiQe%2BEt62UoVEwYpckUVNXvE&X-Amz-Signature=40c731a2772ae3961220549077b3af23136fc067a1f95f6e3bc20d36bbe10b93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LMVN52P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgn2lx8m%2BqZ2rIaf%2F8OF7dg03jO7SrGl2ZuYVxg%2BaviAiB0ubIFSkRYXDPID4QGp4xtANj440vfe%2FuPCiagyPOVtCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMD26fHet8gh9znl%2B4KtwD9xqCBEJ6vPLSowG135ePa0DCrz0UNt1AM00DBqPwHexISQNSf32ljuwjmyZkyVUYud1zGmRZ15p%2Ben4rMlhKr90dfaOfAqMFJqTf70As6qP%2FK2sFy81ZgA4TCF78B6jQSTcvUgOvHgOrchwcXNmU6tBPwSosBLRgwAZAtwbzI191iM1ScNAgBrtYMEj1Eu55dvnsJy9OwF0V0j2DA8UO2ycy%2FdlC2v%2FInolbdInFpiru6FObM2YsdUYGO5Em1QIxxTeNcDln0oH1Gs38vV0v0XJ3BtvfrtSwABjtQ4nr%2BxI0X648%2Bq0%2F2HEkYML3OjxPvSu6ik5wVt4ISySxRZvVAv9%2BTDntPCO5I0mR1VBPxZHOQOZcPv9hqaSZAJkl9olQL5w4bJdY6fCccr0JOlqabXGJvRc%2Fxd%2BmKvbLM7IeToWs3ytQTzrSKNAmHnS2LY3%2BNpZnI4eeB9IUcITf5XoaE8eF9imJm6Elt0staDIEo4RmXp9gzDOpDS8kUjZmQe%2FrUrVzoO%2FIQ0WMvN3s8BJibQUYtKLELkU40Ux3S6%2FKAfEMwDZcrkEZ474jOotFHph6t%2BxrN3uiysI45ey7MYgCSIFUOpS%2B3IIrP%2FJFmfFfyXsk94BZHQpAGdQ0GOww%2F7X4vwY6pgGl93Ts1pf4ms9akz1WlseK2xvNGdob%2B90fg2mlRKlZnko6CO4Ab2m19b8hqyv9oP39qrcksx8JVKc4h2I33hgHQ7yxVQ1aEPun0cVr4H9IF7d%2BSn%2FpXMNDrT60sqlEoh29m08k89XFWR2NcJZkxBa%2BeBPGUuwby5FqNVmxB0qpUNgtC%2BiB7RYIlMvA8SNzLnnbmQLqtiQe%2BEt62UoVEwYpckUVNXvE&X-Amz-Signature=b62d203e7dee6613046ecc18556dc13f4cfd6a612e94fa63e26242a65596d44a&X-Amz-SignedHeaders=host&x-id=GetObject)
