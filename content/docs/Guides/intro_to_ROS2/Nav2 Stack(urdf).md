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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTM2O4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIG3GUGqi%2Fs7vjczy%2FWBdDkvj9Veb9JNjblmAO8SxbspGAiEAgjB8lK3tyn5epkWWDliCaLWGOplu8%2FkFeGr%2BYiA4dp8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bswytrwide8Q72UyrcA4f7FKW6UILGf%2FmJAXQnx6qFzZW6w9uWPh3c5DSoXZi9zsAvXbE54RwsHXYDtsiqSceC%2F2oGUORADj%2FcvYHHseUHGgSEWQdYwWiEBxpL2dCuZtxvO%2FwomhG043Am1ygtMumb2nRymRSEyiwzJnH1VQ%2FWNbD9qvhvZlMFlxTbSDEsSh92aZ6zkJkpYYhbcBIHKwE5wFXwtAZvx6swZ53jCNijYKSDU4g3P1%2FOUMN5%2FSDg6Wx6Itc6Y2x3xQ9UbYKmRIHa1R3XQVst7WAnBVVvOI0Uh6hHZuWM8v7Hg8DgrGe6vVDgmUpUQBXWy%2FrCXnLdoXv3QFw1BijHL%2FG3kbtB2F%2B7GaZy0B0DWZfaUei8kaiLshj3Zj5eepnUS%2FQF%2BbNGx6%2B6RMXeav7jaAj949pXP0MJWGbtcwYhoPOpi4eKEvOUDbKVPU0Or1QKntJPFqA8S9423RbCCYbI8exhaB5GnOchuEMzuVa%2BH4QJoif8Ar0hjMrsA8r1E8RXcy%2BHi7MxrHiCadX5s9hxssil0POesoaSlytP5za1Cn%2FSOqfJUDSxYZzw3UuJIthhfqVMWoJQBKkIz3HtbgbUIoZtfiJjNRoh5lLMs%2F29A4CV8s0Aa6QPXKvHEHOT1G2Sd6IlMIPx5b8GOqUB9Mse%2FX6JqsichrvioRqOhUa0zr%2F%2B8Lt1eABlKi%2FK9lR0E%2BFJm7KIyhFbSUPH8DcZBSM57WNoqv%2BtDlcEqwxp5BRxAn1yPnV3i8FpyNFUUrjYpFSY75dGmpc7njocpQn9ibvuuYBESWzyMXDBt7V551Hix8zrnRHOzpPfw45qr4XWu3IanEqD%2FqY%2FlOqobWQPF4BxSdTAlBmDlnx6F3WgPBMJWVu1&X-Amz-Signature=e2cb923180343a1df13598a96d42320a112a83e411c9104cf73294d91d915932&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTM2O4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIG3GUGqi%2Fs7vjczy%2FWBdDkvj9Veb9JNjblmAO8SxbspGAiEAgjB8lK3tyn5epkWWDliCaLWGOplu8%2FkFeGr%2BYiA4dp8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bswytrwide8Q72UyrcA4f7FKW6UILGf%2FmJAXQnx6qFzZW6w9uWPh3c5DSoXZi9zsAvXbE54RwsHXYDtsiqSceC%2F2oGUORADj%2FcvYHHseUHGgSEWQdYwWiEBxpL2dCuZtxvO%2FwomhG043Am1ygtMumb2nRymRSEyiwzJnH1VQ%2FWNbD9qvhvZlMFlxTbSDEsSh92aZ6zkJkpYYhbcBIHKwE5wFXwtAZvx6swZ53jCNijYKSDU4g3P1%2FOUMN5%2FSDg6Wx6Itc6Y2x3xQ9UbYKmRIHa1R3XQVst7WAnBVVvOI0Uh6hHZuWM8v7Hg8DgrGe6vVDgmUpUQBXWy%2FrCXnLdoXv3QFw1BijHL%2FG3kbtB2F%2B7GaZy0B0DWZfaUei8kaiLshj3Zj5eepnUS%2FQF%2BbNGx6%2B6RMXeav7jaAj949pXP0MJWGbtcwYhoPOpi4eKEvOUDbKVPU0Or1QKntJPFqA8S9423RbCCYbI8exhaB5GnOchuEMzuVa%2BH4QJoif8Ar0hjMrsA8r1E8RXcy%2BHi7MxrHiCadX5s9hxssil0POesoaSlytP5za1Cn%2FSOqfJUDSxYZzw3UuJIthhfqVMWoJQBKkIz3HtbgbUIoZtfiJjNRoh5lLMs%2F29A4CV8s0Aa6QPXKvHEHOT1G2Sd6IlMIPx5b8GOqUB9Mse%2FX6JqsichrvioRqOhUa0zr%2F%2B8Lt1eABlKi%2FK9lR0E%2BFJm7KIyhFbSUPH8DcZBSM57WNoqv%2BtDlcEqwxp5BRxAn1yPnV3i8FpyNFUUrjYpFSY75dGmpc7njocpQn9ibvuuYBESWzyMXDBt7V551Hix8zrnRHOzpPfw45qr4XWu3IanEqD%2FqY%2FlOqobWQPF4BxSdTAlBmDlnx6F3WgPBMJWVu1&X-Amz-Signature=8e60329607268e205b9360ca6ab55b44d0213ed099c1b2e6ad4a876dbdb90cf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTM2O4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIG3GUGqi%2Fs7vjczy%2FWBdDkvj9Veb9JNjblmAO8SxbspGAiEAgjB8lK3tyn5epkWWDliCaLWGOplu8%2FkFeGr%2BYiA4dp8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bswytrwide8Q72UyrcA4f7FKW6UILGf%2FmJAXQnx6qFzZW6w9uWPh3c5DSoXZi9zsAvXbE54RwsHXYDtsiqSceC%2F2oGUORADj%2FcvYHHseUHGgSEWQdYwWiEBxpL2dCuZtxvO%2FwomhG043Am1ygtMumb2nRymRSEyiwzJnH1VQ%2FWNbD9qvhvZlMFlxTbSDEsSh92aZ6zkJkpYYhbcBIHKwE5wFXwtAZvx6swZ53jCNijYKSDU4g3P1%2FOUMN5%2FSDg6Wx6Itc6Y2x3xQ9UbYKmRIHa1R3XQVst7WAnBVVvOI0Uh6hHZuWM8v7Hg8DgrGe6vVDgmUpUQBXWy%2FrCXnLdoXv3QFw1BijHL%2FG3kbtB2F%2B7GaZy0B0DWZfaUei8kaiLshj3Zj5eepnUS%2FQF%2BbNGx6%2B6RMXeav7jaAj949pXP0MJWGbtcwYhoPOpi4eKEvOUDbKVPU0Or1QKntJPFqA8S9423RbCCYbI8exhaB5GnOchuEMzuVa%2BH4QJoif8Ar0hjMrsA8r1E8RXcy%2BHi7MxrHiCadX5s9hxssil0POesoaSlytP5za1Cn%2FSOqfJUDSxYZzw3UuJIthhfqVMWoJQBKkIz3HtbgbUIoZtfiJjNRoh5lLMs%2F29A4CV8s0Aa6QPXKvHEHOT1G2Sd6IlMIPx5b8GOqUB9Mse%2FX6JqsichrvioRqOhUa0zr%2F%2B8Lt1eABlKi%2FK9lR0E%2BFJm7KIyhFbSUPH8DcZBSM57WNoqv%2BtDlcEqwxp5BRxAn1yPnV3i8FpyNFUUrjYpFSY75dGmpc7njocpQn9ibvuuYBESWzyMXDBt7V551Hix8zrnRHOzpPfw45qr4XWu3IanEqD%2FqY%2FlOqobWQPF4BxSdTAlBmDlnx6F3WgPBMJWVu1&X-Amz-Signature=096c940c23522381537c2e243fc3f2f3936288103464d908f7c8c6dd18c7fd95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTM2O4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIG3GUGqi%2Fs7vjczy%2FWBdDkvj9Veb9JNjblmAO8SxbspGAiEAgjB8lK3tyn5epkWWDliCaLWGOplu8%2FkFeGr%2BYiA4dp8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bswytrwide8Q72UyrcA4f7FKW6UILGf%2FmJAXQnx6qFzZW6w9uWPh3c5DSoXZi9zsAvXbE54RwsHXYDtsiqSceC%2F2oGUORADj%2FcvYHHseUHGgSEWQdYwWiEBxpL2dCuZtxvO%2FwomhG043Am1ygtMumb2nRymRSEyiwzJnH1VQ%2FWNbD9qvhvZlMFlxTbSDEsSh92aZ6zkJkpYYhbcBIHKwE5wFXwtAZvx6swZ53jCNijYKSDU4g3P1%2FOUMN5%2FSDg6Wx6Itc6Y2x3xQ9UbYKmRIHa1R3XQVst7WAnBVVvOI0Uh6hHZuWM8v7Hg8DgrGe6vVDgmUpUQBXWy%2FrCXnLdoXv3QFw1BijHL%2FG3kbtB2F%2B7GaZy0B0DWZfaUei8kaiLshj3Zj5eepnUS%2FQF%2BbNGx6%2B6RMXeav7jaAj949pXP0MJWGbtcwYhoPOpi4eKEvOUDbKVPU0Or1QKntJPFqA8S9423RbCCYbI8exhaB5GnOchuEMzuVa%2BH4QJoif8Ar0hjMrsA8r1E8RXcy%2BHi7MxrHiCadX5s9hxssil0POesoaSlytP5za1Cn%2FSOqfJUDSxYZzw3UuJIthhfqVMWoJQBKkIz3HtbgbUIoZtfiJjNRoh5lLMs%2F29A4CV8s0Aa6QPXKvHEHOT1G2Sd6IlMIPx5b8GOqUB9Mse%2FX6JqsichrvioRqOhUa0zr%2F%2B8Lt1eABlKi%2FK9lR0E%2BFJm7KIyhFbSUPH8DcZBSM57WNoqv%2BtDlcEqwxp5BRxAn1yPnV3i8FpyNFUUrjYpFSY75dGmpc7njocpQn9ibvuuYBESWzyMXDBt7V551Hix8zrnRHOzpPfw45qr4XWu3IanEqD%2FqY%2FlOqobWQPF4BxSdTAlBmDlnx6F3WgPBMJWVu1&X-Amz-Signature=bef25d9402e8dc237d4f8f3f4981e249367548eb0a1ce4a23a16ed2aaf90c171&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTM2O4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIG3GUGqi%2Fs7vjczy%2FWBdDkvj9Veb9JNjblmAO8SxbspGAiEAgjB8lK3tyn5epkWWDliCaLWGOplu8%2FkFeGr%2BYiA4dp8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bswytrwide8Q72UyrcA4f7FKW6UILGf%2FmJAXQnx6qFzZW6w9uWPh3c5DSoXZi9zsAvXbE54RwsHXYDtsiqSceC%2F2oGUORADj%2FcvYHHseUHGgSEWQdYwWiEBxpL2dCuZtxvO%2FwomhG043Am1ygtMumb2nRymRSEyiwzJnH1VQ%2FWNbD9qvhvZlMFlxTbSDEsSh92aZ6zkJkpYYhbcBIHKwE5wFXwtAZvx6swZ53jCNijYKSDU4g3P1%2FOUMN5%2FSDg6Wx6Itc6Y2x3xQ9UbYKmRIHa1R3XQVst7WAnBVVvOI0Uh6hHZuWM8v7Hg8DgrGe6vVDgmUpUQBXWy%2FrCXnLdoXv3QFw1BijHL%2FG3kbtB2F%2B7GaZy0B0DWZfaUei8kaiLshj3Zj5eepnUS%2FQF%2BbNGx6%2B6RMXeav7jaAj949pXP0MJWGbtcwYhoPOpi4eKEvOUDbKVPU0Or1QKntJPFqA8S9423RbCCYbI8exhaB5GnOchuEMzuVa%2BH4QJoif8Ar0hjMrsA8r1E8RXcy%2BHi7MxrHiCadX5s9hxssil0POesoaSlytP5za1Cn%2FSOqfJUDSxYZzw3UuJIthhfqVMWoJQBKkIz3HtbgbUIoZtfiJjNRoh5lLMs%2F29A4CV8s0Aa6QPXKvHEHOT1G2Sd6IlMIPx5b8GOqUB9Mse%2FX6JqsichrvioRqOhUa0zr%2F%2B8Lt1eABlKi%2FK9lR0E%2BFJm7KIyhFbSUPH8DcZBSM57WNoqv%2BtDlcEqwxp5BRxAn1yPnV3i8FpyNFUUrjYpFSY75dGmpc7njocpQn9ibvuuYBESWzyMXDBt7V551Hix8zrnRHOzpPfw45qr4XWu3IanEqD%2FqY%2FlOqobWQPF4BxSdTAlBmDlnx6F3WgPBMJWVu1&X-Amz-Signature=f7b25b19cf6480eb48361b22987a05c0d412d7a211aad48d3b13fb39077076bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTM2O4%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIG3GUGqi%2Fs7vjczy%2FWBdDkvj9Veb9JNjblmAO8SxbspGAiEAgjB8lK3tyn5epkWWDliCaLWGOplu8%2FkFeGr%2BYiA4dp8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Bswytrwide8Q72UyrcA4f7FKW6UILGf%2FmJAXQnx6qFzZW6w9uWPh3c5DSoXZi9zsAvXbE54RwsHXYDtsiqSceC%2F2oGUORADj%2FcvYHHseUHGgSEWQdYwWiEBxpL2dCuZtxvO%2FwomhG043Am1ygtMumb2nRymRSEyiwzJnH1VQ%2FWNbD9qvhvZlMFlxTbSDEsSh92aZ6zkJkpYYhbcBIHKwE5wFXwtAZvx6swZ53jCNijYKSDU4g3P1%2FOUMN5%2FSDg6Wx6Itc6Y2x3xQ9UbYKmRIHa1R3XQVst7WAnBVVvOI0Uh6hHZuWM8v7Hg8DgrGe6vVDgmUpUQBXWy%2FrCXnLdoXv3QFw1BijHL%2FG3kbtB2F%2B7GaZy0B0DWZfaUei8kaiLshj3Zj5eepnUS%2FQF%2BbNGx6%2B6RMXeav7jaAj949pXP0MJWGbtcwYhoPOpi4eKEvOUDbKVPU0Or1QKntJPFqA8S9423RbCCYbI8exhaB5GnOchuEMzuVa%2BH4QJoif8Ar0hjMrsA8r1E8RXcy%2BHi7MxrHiCadX5s9hxssil0POesoaSlytP5za1Cn%2FSOqfJUDSxYZzw3UuJIthhfqVMWoJQBKkIz3HtbgbUIoZtfiJjNRoh5lLMs%2F29A4CV8s0Aa6QPXKvHEHOT1G2Sd6IlMIPx5b8GOqUB9Mse%2FX6JqsichrvioRqOhUa0zr%2F%2B8Lt1eABlKi%2FK9lR0E%2BFJm7KIyhFbSUPH8DcZBSM57WNoqv%2BtDlcEqwxp5BRxAn1yPnV3i8FpyNFUUrjYpFSY75dGmpc7njocpQn9ibvuuYBESWzyMXDBt7V551Hix8zrnRHOzpPfw45qr4XWu3IanEqD%2FqY%2FlOqobWQPF4BxSdTAlBmDlnx6F3WgPBMJWVu1&X-Amz-Signature=1384249a94b73b8b260f5e7a8a1332e5b24218e9afb6939cf48505228d9f0b36&X-Amz-SignedHeaders=host&x-id=GetObject)
