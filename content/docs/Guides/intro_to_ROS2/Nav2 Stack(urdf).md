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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWSWECDA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzM5X1%2FYAAr3iko8Y%2FMx6U6tQSO%2BeWRfFA3Z5ghabg%2FAiBI5UIzcjbzsx1QKH9Czphdwi%2Fb5k0j4y1RTbIA5KWSiSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrdzqTDMr2pQQmp%2BIKtwDI4enQGJuwu4%2BGTgZvipA4iClG0fYypGP487r%2BkAI8LNQoV2YcOZdGZG0ini2pW%2F2sTm0lWRbpY2rewSqwb%2FjrhLH5pr4Fs5BfVuhL%2FMIbciPHuCjv9m8kK8glf0RwXOyO9ZI04ZiajOWXbH9EB7VNtGTMr0Vt37tbMUp8XuJYK0ief6lNvmGK8ZTESAi%2B6abnhul2uaRE5XK0U21BIdD0ZDz91KiAtV74OXkzjpH7oJ%2FQI0nPFj5BN%2FD0MP9Ds4N6pxXMYiJRQWDo9alAGfPCLC58cnsF025246pqT47ed%2BQGeDAhVmiCVefySERDbFO0AKugRsvalaw7VJrde4TVQZX2TV8LYZTIKYKWNv6KjKH9B8lrkttPgzcC7vzfldAf3gN8ZL5wIJIR0mXGdNOM%2FkSDjNWwFSpOuWlh0J8cg0u%2Bhlfuh0quvqzkWwZ5csa6K2WsU57zoR0%2FrQoAx8xG2GyGpyOiqi0%2B4iqfxTkFFx4%2BP82XVIDMXpTtpuqav9mPvPQ%2B0V6zUgyK%2Bgg9a5CA9Q31B8QpY2SKAccyi1zAXWEVSARlpNS42oLDpIxoKaHxfxWs1Xy9a8Ciw1fq3AMA0DDzVaQSa9eH3fQKaC9QQWxaFqnd3tBufuXiD8w0KbFwgY6pgGsWcyG9qX22ZDyf0DIkX5EJNxmMS0anJfv%2FoVzKzkth8c7S1lh1rJPyZAp4wBvjvT48MGOoqgkz2b000vxnnHmZKUdIa5PQB10zy8OXhdFO0aCZEAcHFlWtceTTkL1e9dYSzHVKHzRjVhxwArSkgIjrFLfHrcHjOJc8t1ijPzkSJ4I9hKCgNNvmEKBS9htdtXmOgd5MTHgBaRPnjoBMG8saK3v4IsR&X-Amz-Signature=a78242ec0eaa3cdb4e4fcb2f221143d356481baa9e901a6ec0663fc9a1d65f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWSWECDA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzM5X1%2FYAAr3iko8Y%2FMx6U6tQSO%2BeWRfFA3Z5ghabg%2FAiBI5UIzcjbzsx1QKH9Czphdwi%2Fb5k0j4y1RTbIA5KWSiSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrdzqTDMr2pQQmp%2BIKtwDI4enQGJuwu4%2BGTgZvipA4iClG0fYypGP487r%2BkAI8LNQoV2YcOZdGZG0ini2pW%2F2sTm0lWRbpY2rewSqwb%2FjrhLH5pr4Fs5BfVuhL%2FMIbciPHuCjv9m8kK8glf0RwXOyO9ZI04ZiajOWXbH9EB7VNtGTMr0Vt37tbMUp8XuJYK0ief6lNvmGK8ZTESAi%2B6abnhul2uaRE5XK0U21BIdD0ZDz91KiAtV74OXkzjpH7oJ%2FQI0nPFj5BN%2FD0MP9Ds4N6pxXMYiJRQWDo9alAGfPCLC58cnsF025246pqT47ed%2BQGeDAhVmiCVefySERDbFO0AKugRsvalaw7VJrde4TVQZX2TV8LYZTIKYKWNv6KjKH9B8lrkttPgzcC7vzfldAf3gN8ZL5wIJIR0mXGdNOM%2FkSDjNWwFSpOuWlh0J8cg0u%2Bhlfuh0quvqzkWwZ5csa6K2WsU57zoR0%2FrQoAx8xG2GyGpyOiqi0%2B4iqfxTkFFx4%2BP82XVIDMXpTtpuqav9mPvPQ%2B0V6zUgyK%2Bgg9a5CA9Q31B8QpY2SKAccyi1zAXWEVSARlpNS42oLDpIxoKaHxfxWs1Xy9a8Ciw1fq3AMA0DDzVaQSa9eH3fQKaC9QQWxaFqnd3tBufuXiD8w0KbFwgY6pgGsWcyG9qX22ZDyf0DIkX5EJNxmMS0anJfv%2FoVzKzkth8c7S1lh1rJPyZAp4wBvjvT48MGOoqgkz2b000vxnnHmZKUdIa5PQB10zy8OXhdFO0aCZEAcHFlWtceTTkL1e9dYSzHVKHzRjVhxwArSkgIjrFLfHrcHjOJc8t1ijPzkSJ4I9hKCgNNvmEKBS9htdtXmOgd5MTHgBaRPnjoBMG8saK3v4IsR&X-Amz-Signature=882ab80dccb7afc9ec5cbf749fa75e7c811db814557564bfda405559fe6e5923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWSWECDA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzM5X1%2FYAAr3iko8Y%2FMx6U6tQSO%2BeWRfFA3Z5ghabg%2FAiBI5UIzcjbzsx1QKH9Czphdwi%2Fb5k0j4y1RTbIA5KWSiSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrdzqTDMr2pQQmp%2BIKtwDI4enQGJuwu4%2BGTgZvipA4iClG0fYypGP487r%2BkAI8LNQoV2YcOZdGZG0ini2pW%2F2sTm0lWRbpY2rewSqwb%2FjrhLH5pr4Fs5BfVuhL%2FMIbciPHuCjv9m8kK8glf0RwXOyO9ZI04ZiajOWXbH9EB7VNtGTMr0Vt37tbMUp8XuJYK0ief6lNvmGK8ZTESAi%2B6abnhul2uaRE5XK0U21BIdD0ZDz91KiAtV74OXkzjpH7oJ%2FQI0nPFj5BN%2FD0MP9Ds4N6pxXMYiJRQWDo9alAGfPCLC58cnsF025246pqT47ed%2BQGeDAhVmiCVefySERDbFO0AKugRsvalaw7VJrde4TVQZX2TV8LYZTIKYKWNv6KjKH9B8lrkttPgzcC7vzfldAf3gN8ZL5wIJIR0mXGdNOM%2FkSDjNWwFSpOuWlh0J8cg0u%2Bhlfuh0quvqzkWwZ5csa6K2WsU57zoR0%2FrQoAx8xG2GyGpyOiqi0%2B4iqfxTkFFx4%2BP82XVIDMXpTtpuqav9mPvPQ%2B0V6zUgyK%2Bgg9a5CA9Q31B8QpY2SKAccyi1zAXWEVSARlpNS42oLDpIxoKaHxfxWs1Xy9a8Ciw1fq3AMA0DDzVaQSa9eH3fQKaC9QQWxaFqnd3tBufuXiD8w0KbFwgY6pgGsWcyG9qX22ZDyf0DIkX5EJNxmMS0anJfv%2FoVzKzkth8c7S1lh1rJPyZAp4wBvjvT48MGOoqgkz2b000vxnnHmZKUdIa5PQB10zy8OXhdFO0aCZEAcHFlWtceTTkL1e9dYSzHVKHzRjVhxwArSkgIjrFLfHrcHjOJc8t1ijPzkSJ4I9hKCgNNvmEKBS9htdtXmOgd5MTHgBaRPnjoBMG8saK3v4IsR&X-Amz-Signature=403c7ad6d765194a07a26a185e7562d86fc4b20a90c9d88ad6aaa3660f485631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWSWECDA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzM5X1%2FYAAr3iko8Y%2FMx6U6tQSO%2BeWRfFA3Z5ghabg%2FAiBI5UIzcjbzsx1QKH9Czphdwi%2Fb5k0j4y1RTbIA5KWSiSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrdzqTDMr2pQQmp%2BIKtwDI4enQGJuwu4%2BGTgZvipA4iClG0fYypGP487r%2BkAI8LNQoV2YcOZdGZG0ini2pW%2F2sTm0lWRbpY2rewSqwb%2FjrhLH5pr4Fs5BfVuhL%2FMIbciPHuCjv9m8kK8glf0RwXOyO9ZI04ZiajOWXbH9EB7VNtGTMr0Vt37tbMUp8XuJYK0ief6lNvmGK8ZTESAi%2B6abnhul2uaRE5XK0U21BIdD0ZDz91KiAtV74OXkzjpH7oJ%2FQI0nPFj5BN%2FD0MP9Ds4N6pxXMYiJRQWDo9alAGfPCLC58cnsF025246pqT47ed%2BQGeDAhVmiCVefySERDbFO0AKugRsvalaw7VJrde4TVQZX2TV8LYZTIKYKWNv6KjKH9B8lrkttPgzcC7vzfldAf3gN8ZL5wIJIR0mXGdNOM%2FkSDjNWwFSpOuWlh0J8cg0u%2Bhlfuh0quvqzkWwZ5csa6K2WsU57zoR0%2FrQoAx8xG2GyGpyOiqi0%2B4iqfxTkFFx4%2BP82XVIDMXpTtpuqav9mPvPQ%2B0V6zUgyK%2Bgg9a5CA9Q31B8QpY2SKAccyi1zAXWEVSARlpNS42oLDpIxoKaHxfxWs1Xy9a8Ciw1fq3AMA0DDzVaQSa9eH3fQKaC9QQWxaFqnd3tBufuXiD8w0KbFwgY6pgGsWcyG9qX22ZDyf0DIkX5EJNxmMS0anJfv%2FoVzKzkth8c7S1lh1rJPyZAp4wBvjvT48MGOoqgkz2b000vxnnHmZKUdIa5PQB10zy8OXhdFO0aCZEAcHFlWtceTTkL1e9dYSzHVKHzRjVhxwArSkgIjrFLfHrcHjOJc8t1ijPzkSJ4I9hKCgNNvmEKBS9htdtXmOgd5MTHgBaRPnjoBMG8saK3v4IsR&X-Amz-Signature=ca93f8d7919725507e0ef948826c5f076248230ad56f7df68757f96315b6da1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWSWECDA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzM5X1%2FYAAr3iko8Y%2FMx6U6tQSO%2BeWRfFA3Z5ghabg%2FAiBI5UIzcjbzsx1QKH9Czphdwi%2Fb5k0j4y1RTbIA5KWSiSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrdzqTDMr2pQQmp%2BIKtwDI4enQGJuwu4%2BGTgZvipA4iClG0fYypGP487r%2BkAI8LNQoV2YcOZdGZG0ini2pW%2F2sTm0lWRbpY2rewSqwb%2FjrhLH5pr4Fs5BfVuhL%2FMIbciPHuCjv9m8kK8glf0RwXOyO9ZI04ZiajOWXbH9EB7VNtGTMr0Vt37tbMUp8XuJYK0ief6lNvmGK8ZTESAi%2B6abnhul2uaRE5XK0U21BIdD0ZDz91KiAtV74OXkzjpH7oJ%2FQI0nPFj5BN%2FD0MP9Ds4N6pxXMYiJRQWDo9alAGfPCLC58cnsF025246pqT47ed%2BQGeDAhVmiCVefySERDbFO0AKugRsvalaw7VJrde4TVQZX2TV8LYZTIKYKWNv6KjKH9B8lrkttPgzcC7vzfldAf3gN8ZL5wIJIR0mXGdNOM%2FkSDjNWwFSpOuWlh0J8cg0u%2Bhlfuh0quvqzkWwZ5csa6K2WsU57zoR0%2FrQoAx8xG2GyGpyOiqi0%2B4iqfxTkFFx4%2BP82XVIDMXpTtpuqav9mPvPQ%2B0V6zUgyK%2Bgg9a5CA9Q31B8QpY2SKAccyi1zAXWEVSARlpNS42oLDpIxoKaHxfxWs1Xy9a8Ciw1fq3AMA0DDzVaQSa9eH3fQKaC9QQWxaFqnd3tBufuXiD8w0KbFwgY6pgGsWcyG9qX22ZDyf0DIkX5EJNxmMS0anJfv%2FoVzKzkth8c7S1lh1rJPyZAp4wBvjvT48MGOoqgkz2b000vxnnHmZKUdIa5PQB10zy8OXhdFO0aCZEAcHFlWtceTTkL1e9dYSzHVKHzRjVhxwArSkgIjrFLfHrcHjOJc8t1ijPzkSJ4I9hKCgNNvmEKBS9htdtXmOgd5MTHgBaRPnjoBMG8saK3v4IsR&X-Amz-Signature=c18085c1fb6fc96f53eb712ea4fd54019765c4f56916f14e70e2a63683ff042a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWSWECDA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzM5X1%2FYAAr3iko8Y%2FMx6U6tQSO%2BeWRfFA3Z5ghabg%2FAiBI5UIzcjbzsx1QKH9Czphdwi%2Fb5k0j4y1RTbIA5KWSiSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMrdzqTDMr2pQQmp%2BIKtwDI4enQGJuwu4%2BGTgZvipA4iClG0fYypGP487r%2BkAI8LNQoV2YcOZdGZG0ini2pW%2F2sTm0lWRbpY2rewSqwb%2FjrhLH5pr4Fs5BfVuhL%2FMIbciPHuCjv9m8kK8glf0RwXOyO9ZI04ZiajOWXbH9EB7VNtGTMr0Vt37tbMUp8XuJYK0ief6lNvmGK8ZTESAi%2B6abnhul2uaRE5XK0U21BIdD0ZDz91KiAtV74OXkzjpH7oJ%2FQI0nPFj5BN%2FD0MP9Ds4N6pxXMYiJRQWDo9alAGfPCLC58cnsF025246pqT47ed%2BQGeDAhVmiCVefySERDbFO0AKugRsvalaw7VJrde4TVQZX2TV8LYZTIKYKWNv6KjKH9B8lrkttPgzcC7vzfldAf3gN8ZL5wIJIR0mXGdNOM%2FkSDjNWwFSpOuWlh0J8cg0u%2Bhlfuh0quvqzkWwZ5csa6K2WsU57zoR0%2FrQoAx8xG2GyGpyOiqi0%2B4iqfxTkFFx4%2BP82XVIDMXpTtpuqav9mPvPQ%2B0V6zUgyK%2Bgg9a5CA9Q31B8QpY2SKAccyi1zAXWEVSARlpNS42oLDpIxoKaHxfxWs1Xy9a8Ciw1fq3AMA0DDzVaQSa9eH3fQKaC9QQWxaFqnd3tBufuXiD8w0KbFwgY6pgGsWcyG9qX22ZDyf0DIkX5EJNxmMS0anJfv%2FoVzKzkth8c7S1lh1rJPyZAp4wBvjvT48MGOoqgkz2b000vxnnHmZKUdIa5PQB10zy8OXhdFO0aCZEAcHFlWtceTTkL1e9dYSzHVKHzRjVhxwArSkgIjrFLfHrcHjOJc8t1ijPzkSJ4I9hKCgNNvmEKBS9htdtXmOgd5MTHgBaRPnjoBMG8saK3v4IsR&X-Amz-Signature=ed3f52fc76b5a674cd93f8de1d102c4c0b5ac44e0010ab1532256dde1f4e1c6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
