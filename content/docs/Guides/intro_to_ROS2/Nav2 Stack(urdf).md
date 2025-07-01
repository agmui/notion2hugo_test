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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGMPHOP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNE0vVAAvV7q8dohkDBc6Y5KrgQe82NzJE1BF1P%2BL2QIhALKZdtrC3N3J9liHBdeRPIyZbZ0Jnv7ELbLm4eT9Gp5TKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1FUx1FF0y%2F26LEIYq3AOhQr76nv0VF2ZL9lGGHaPMbdM%2BEHilpaDyJ5%2FZewvVlcTubj8T%2BQLNFEI%2Fv2lr5QMCJ%2Bjl0atU4pliVTXvxu6V9VBFcvWq8LWklI3wjqC3HpOai6wJxc0LepBfvLsWrVQg4iNvpAJ2BcrC4fD5x9vvK75xuHYvgq%2F5juDQj0JJb8T444G531D6DoMAYehdTBXrLyqZV7B9gwF6mh5mo7x9X1sfYf8jG5wKOoo6rhSek7adZk8SzBuif88vsQmsjypC%2Fowl5E4OzuUhV31d%2Fq4HcrByDcwjX3hG0nkrSoHWy7o5rPLNW3M0ZIBH3f7rVM4Ovp1ovmynMUSB52BaQnr2F2vV7A0MGIp5MQg3Sy%2BPNwsOGlQG2qS7%2FEtcp1j8gWvGz2YokAF6HSyLf92DQ5PpKgIVkWJQvj8hMT775FDESkX6fLjdXUdKEBT7CIHeVgo4dDnJgIsbIeuUpn4LFtRZlhKesDNOsEIkQiu%2Fl65rqi7ucld2JS2TGJWbnDvQVVHp43qYnaPRkqbtEHRECt4cbYtoPkAkq%2BQgTh%2FDDBaFn22EXEMQN%2B89UvFgUxJVMVoaRRUiVDtKl%2BJ0c6LRge0tNCLqF8a6HY6IeJnIuxXCmWfdexj99ebBOqOB9TDth5DDBjqkAVusjjA5y84Rgt64LqBMkHwOhF8Igui96QSKv3NfvTJ3Ex9LsQ32uwvNiSF356F08CnCji0AesrQKLFL2YS2ClRaJHcn0O9GyJstPh8cz5ybjtm6XvJO9%2B%2BNnnL6%2BAPb%2Bvwq%2Bb7DKYPv%2BJsU3%2FvzjS2SWBS4Ni5shElOQFIgq0%2F%2FQRQS%2BZElZXG3OrOvWmVy6rgIHB65vktw5svtpl9rSOgiitCl&X-Amz-Signature=798b639e8cb91a89fee570171060c45554756d3208c9176f7bad0c37f7aba3ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGMPHOP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNE0vVAAvV7q8dohkDBc6Y5KrgQe82NzJE1BF1P%2BL2QIhALKZdtrC3N3J9liHBdeRPIyZbZ0Jnv7ELbLm4eT9Gp5TKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1FUx1FF0y%2F26LEIYq3AOhQr76nv0VF2ZL9lGGHaPMbdM%2BEHilpaDyJ5%2FZewvVlcTubj8T%2BQLNFEI%2Fv2lr5QMCJ%2Bjl0atU4pliVTXvxu6V9VBFcvWq8LWklI3wjqC3HpOai6wJxc0LepBfvLsWrVQg4iNvpAJ2BcrC4fD5x9vvK75xuHYvgq%2F5juDQj0JJb8T444G531D6DoMAYehdTBXrLyqZV7B9gwF6mh5mo7x9X1sfYf8jG5wKOoo6rhSek7adZk8SzBuif88vsQmsjypC%2Fowl5E4OzuUhV31d%2Fq4HcrByDcwjX3hG0nkrSoHWy7o5rPLNW3M0ZIBH3f7rVM4Ovp1ovmynMUSB52BaQnr2F2vV7A0MGIp5MQg3Sy%2BPNwsOGlQG2qS7%2FEtcp1j8gWvGz2YokAF6HSyLf92DQ5PpKgIVkWJQvj8hMT775FDESkX6fLjdXUdKEBT7CIHeVgo4dDnJgIsbIeuUpn4LFtRZlhKesDNOsEIkQiu%2Fl65rqi7ucld2JS2TGJWbnDvQVVHp43qYnaPRkqbtEHRECt4cbYtoPkAkq%2BQgTh%2FDDBaFn22EXEMQN%2B89UvFgUxJVMVoaRRUiVDtKl%2BJ0c6LRge0tNCLqF8a6HY6IeJnIuxXCmWfdexj99ebBOqOB9TDth5DDBjqkAVusjjA5y84Rgt64LqBMkHwOhF8Igui96QSKv3NfvTJ3Ex9LsQ32uwvNiSF356F08CnCji0AesrQKLFL2YS2ClRaJHcn0O9GyJstPh8cz5ybjtm6XvJO9%2B%2BNnnL6%2BAPb%2Bvwq%2Bb7DKYPv%2BJsU3%2FvzjS2SWBS4Ni5shElOQFIgq0%2F%2FQRQS%2BZElZXG3OrOvWmVy6rgIHB65vktw5svtpl9rSOgiitCl&X-Amz-Signature=60869957e52f2862ea84556d24e79d3b0b8a258ef9de872ed8afd284a8f02c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGMPHOP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNE0vVAAvV7q8dohkDBc6Y5KrgQe82NzJE1BF1P%2BL2QIhALKZdtrC3N3J9liHBdeRPIyZbZ0Jnv7ELbLm4eT9Gp5TKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1FUx1FF0y%2F26LEIYq3AOhQr76nv0VF2ZL9lGGHaPMbdM%2BEHilpaDyJ5%2FZewvVlcTubj8T%2BQLNFEI%2Fv2lr5QMCJ%2Bjl0atU4pliVTXvxu6V9VBFcvWq8LWklI3wjqC3HpOai6wJxc0LepBfvLsWrVQg4iNvpAJ2BcrC4fD5x9vvK75xuHYvgq%2F5juDQj0JJb8T444G531D6DoMAYehdTBXrLyqZV7B9gwF6mh5mo7x9X1sfYf8jG5wKOoo6rhSek7adZk8SzBuif88vsQmsjypC%2Fowl5E4OzuUhV31d%2Fq4HcrByDcwjX3hG0nkrSoHWy7o5rPLNW3M0ZIBH3f7rVM4Ovp1ovmynMUSB52BaQnr2F2vV7A0MGIp5MQg3Sy%2BPNwsOGlQG2qS7%2FEtcp1j8gWvGz2YokAF6HSyLf92DQ5PpKgIVkWJQvj8hMT775FDESkX6fLjdXUdKEBT7CIHeVgo4dDnJgIsbIeuUpn4LFtRZlhKesDNOsEIkQiu%2Fl65rqi7ucld2JS2TGJWbnDvQVVHp43qYnaPRkqbtEHRECt4cbYtoPkAkq%2BQgTh%2FDDBaFn22EXEMQN%2B89UvFgUxJVMVoaRRUiVDtKl%2BJ0c6LRge0tNCLqF8a6HY6IeJnIuxXCmWfdexj99ebBOqOB9TDth5DDBjqkAVusjjA5y84Rgt64LqBMkHwOhF8Igui96QSKv3NfvTJ3Ex9LsQ32uwvNiSF356F08CnCji0AesrQKLFL2YS2ClRaJHcn0O9GyJstPh8cz5ybjtm6XvJO9%2B%2BNnnL6%2BAPb%2Bvwq%2Bb7DKYPv%2BJsU3%2FvzjS2SWBS4Ni5shElOQFIgq0%2F%2FQRQS%2BZElZXG3OrOvWmVy6rgIHB65vktw5svtpl9rSOgiitCl&X-Amz-Signature=f563671812440b128df686e96901ed9dcbddcbb68c9f98a194df3e317ec2228c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGMPHOP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNE0vVAAvV7q8dohkDBc6Y5KrgQe82NzJE1BF1P%2BL2QIhALKZdtrC3N3J9liHBdeRPIyZbZ0Jnv7ELbLm4eT9Gp5TKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1FUx1FF0y%2F26LEIYq3AOhQr76nv0VF2ZL9lGGHaPMbdM%2BEHilpaDyJ5%2FZewvVlcTubj8T%2BQLNFEI%2Fv2lr5QMCJ%2Bjl0atU4pliVTXvxu6V9VBFcvWq8LWklI3wjqC3HpOai6wJxc0LepBfvLsWrVQg4iNvpAJ2BcrC4fD5x9vvK75xuHYvgq%2F5juDQj0JJb8T444G531D6DoMAYehdTBXrLyqZV7B9gwF6mh5mo7x9X1sfYf8jG5wKOoo6rhSek7adZk8SzBuif88vsQmsjypC%2Fowl5E4OzuUhV31d%2Fq4HcrByDcwjX3hG0nkrSoHWy7o5rPLNW3M0ZIBH3f7rVM4Ovp1ovmynMUSB52BaQnr2F2vV7A0MGIp5MQg3Sy%2BPNwsOGlQG2qS7%2FEtcp1j8gWvGz2YokAF6HSyLf92DQ5PpKgIVkWJQvj8hMT775FDESkX6fLjdXUdKEBT7CIHeVgo4dDnJgIsbIeuUpn4LFtRZlhKesDNOsEIkQiu%2Fl65rqi7ucld2JS2TGJWbnDvQVVHp43qYnaPRkqbtEHRECt4cbYtoPkAkq%2BQgTh%2FDDBaFn22EXEMQN%2B89UvFgUxJVMVoaRRUiVDtKl%2BJ0c6LRge0tNCLqF8a6HY6IeJnIuxXCmWfdexj99ebBOqOB9TDth5DDBjqkAVusjjA5y84Rgt64LqBMkHwOhF8Igui96QSKv3NfvTJ3Ex9LsQ32uwvNiSF356F08CnCji0AesrQKLFL2YS2ClRaJHcn0O9GyJstPh8cz5ybjtm6XvJO9%2B%2BNnnL6%2BAPb%2Bvwq%2Bb7DKYPv%2BJsU3%2FvzjS2SWBS4Ni5shElOQFIgq0%2F%2FQRQS%2BZElZXG3OrOvWmVy6rgIHB65vktw5svtpl9rSOgiitCl&X-Amz-Signature=be0cd0a4222b3a95f84f2abe1ca58f731d58aacfb5afc9c3651251b30e748f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGMPHOP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNE0vVAAvV7q8dohkDBc6Y5KrgQe82NzJE1BF1P%2BL2QIhALKZdtrC3N3J9liHBdeRPIyZbZ0Jnv7ELbLm4eT9Gp5TKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1FUx1FF0y%2F26LEIYq3AOhQr76nv0VF2ZL9lGGHaPMbdM%2BEHilpaDyJ5%2FZewvVlcTubj8T%2BQLNFEI%2Fv2lr5QMCJ%2Bjl0atU4pliVTXvxu6V9VBFcvWq8LWklI3wjqC3HpOai6wJxc0LepBfvLsWrVQg4iNvpAJ2BcrC4fD5x9vvK75xuHYvgq%2F5juDQj0JJb8T444G531D6DoMAYehdTBXrLyqZV7B9gwF6mh5mo7x9X1sfYf8jG5wKOoo6rhSek7adZk8SzBuif88vsQmsjypC%2Fowl5E4OzuUhV31d%2Fq4HcrByDcwjX3hG0nkrSoHWy7o5rPLNW3M0ZIBH3f7rVM4Ovp1ovmynMUSB52BaQnr2F2vV7A0MGIp5MQg3Sy%2BPNwsOGlQG2qS7%2FEtcp1j8gWvGz2YokAF6HSyLf92DQ5PpKgIVkWJQvj8hMT775FDESkX6fLjdXUdKEBT7CIHeVgo4dDnJgIsbIeuUpn4LFtRZlhKesDNOsEIkQiu%2Fl65rqi7ucld2JS2TGJWbnDvQVVHp43qYnaPRkqbtEHRECt4cbYtoPkAkq%2BQgTh%2FDDBaFn22EXEMQN%2B89UvFgUxJVMVoaRRUiVDtKl%2BJ0c6LRge0tNCLqF8a6HY6IeJnIuxXCmWfdexj99ebBOqOB9TDth5DDBjqkAVusjjA5y84Rgt64LqBMkHwOhF8Igui96QSKv3NfvTJ3Ex9LsQ32uwvNiSF356F08CnCji0AesrQKLFL2YS2ClRaJHcn0O9GyJstPh8cz5ybjtm6XvJO9%2B%2BNnnL6%2BAPb%2Bvwq%2Bb7DKYPv%2BJsU3%2FvzjS2SWBS4Ni5shElOQFIgq0%2F%2FQRQS%2BZElZXG3OrOvWmVy6rgIHB65vktw5svtpl9rSOgiitCl&X-Amz-Signature=aa60d5933234180662b18e66579c50fd97ec4d64f67c2a2f1cbb62cdae40e074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGMPHOP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvNE0vVAAvV7q8dohkDBc6Y5KrgQe82NzJE1BF1P%2BL2QIhALKZdtrC3N3J9liHBdeRPIyZbZ0Jnv7ELbLm4eT9Gp5TKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1FUx1FF0y%2F26LEIYq3AOhQr76nv0VF2ZL9lGGHaPMbdM%2BEHilpaDyJ5%2FZewvVlcTubj8T%2BQLNFEI%2Fv2lr5QMCJ%2Bjl0atU4pliVTXvxu6V9VBFcvWq8LWklI3wjqC3HpOai6wJxc0LepBfvLsWrVQg4iNvpAJ2BcrC4fD5x9vvK75xuHYvgq%2F5juDQj0JJb8T444G531D6DoMAYehdTBXrLyqZV7B9gwF6mh5mo7x9X1sfYf8jG5wKOoo6rhSek7adZk8SzBuif88vsQmsjypC%2Fowl5E4OzuUhV31d%2Fq4HcrByDcwjX3hG0nkrSoHWy7o5rPLNW3M0ZIBH3f7rVM4Ovp1ovmynMUSB52BaQnr2F2vV7A0MGIp5MQg3Sy%2BPNwsOGlQG2qS7%2FEtcp1j8gWvGz2YokAF6HSyLf92DQ5PpKgIVkWJQvj8hMT775FDESkX6fLjdXUdKEBT7CIHeVgo4dDnJgIsbIeuUpn4LFtRZlhKesDNOsEIkQiu%2Fl65rqi7ucld2JS2TGJWbnDvQVVHp43qYnaPRkqbtEHRECt4cbYtoPkAkq%2BQgTh%2FDDBaFn22EXEMQN%2B89UvFgUxJVMVoaRRUiVDtKl%2BJ0c6LRge0tNCLqF8a6HY6IeJnIuxXCmWfdexj99ebBOqOB9TDth5DDBjqkAVusjjA5y84Rgt64LqBMkHwOhF8Igui96QSKv3NfvTJ3Ex9LsQ32uwvNiSF356F08CnCji0AesrQKLFL2YS2ClRaJHcn0O9GyJstPh8cz5ybjtm6XvJO9%2B%2BNnnL6%2BAPb%2Bvwq%2Bb7DKYPv%2BJsU3%2FvzjS2SWBS4Ni5shElOQFIgq0%2F%2FQRQS%2BZElZXG3OrOvWmVy6rgIHB65vktw5svtpl9rSOgiitCl&X-Amz-Signature=28b58db897770f8d449d924ad2c50182b72d52ab84cf525e54c38fa912c38968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
