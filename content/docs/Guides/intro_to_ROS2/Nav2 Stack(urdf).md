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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOMSEK3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSbkJM3HhME2W3Ix%2B5HPEieqzusgh%2FZtFLU6wc8JabMQIhAMQKlANxqiiafeeSU6pry2GRE%2B5Fy28cFfFysymN0n3%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYV4wp6FkuU6gvbPMq3AOeckVB6i3QvNUCp0%2F2UF4DuecDV9t2r4O0tp8ZNX11ztDpi68USRIcLgAr%2FP6049OB9z6f8%2BkBkgjSCke4N75NqFxKPuIUK%2FFhcddQWsn8uyyiUpa0WybYwFn%2B%2F7rN22XUDtfKSVIjzv%2FdJgNO4gvsr%2BQDEP1Kr3jhDneySk2mfWKizDg6HAEz%2FVNU9mrRD3uPfn%2FeqEAdzWjnL70GofXKJH5Jr%2B%2BFKOubBFL%2F1vTPN5XdbH0wKJ%2F7iZU%2BkMVefPIXNJRYaFRdoBFokPohqofHMAqjFdjDjBivCnQ0KBtRAOAOjW5eF%2FtAP2Y2rdRxn1kYCD18IVUvvXCA6LRcdc7T%2BFydaQMjzIADHr1t5NO5OPqT1Pw1wL9IS54aLCJFzT8mybHrVyxioja1a%2FcEM6YVhjMJP41pBN31ZHcFi323K%2BKZYaz0I8az8stV%2BXxYlzpvuH7sbtHJUJ4hL0QNT817PEjjzykLmiK9giu5AxcPJ91lQu3N7ZaiFzK%2Bh18fg0qTjxWoegKhKxfwc4hclvJDLfzkizLamiWWEIxCb7z4BCAu9nvboA%2FfgosEcDKu77brg%2FU1DhJ7S7QqDwLWNv9fjkdvSVvta6KotHZjUZu39rRRcy3ZcqCmEnfPyzDnyLi%2FBjqkAYS7%2BELqnAOI7yb3ayi02vpz5ZvCMvT%2FEFsqXDpE%2BkynoJyLyqDFj2bJQ4WXn1YvCjaa8x0KCwKv2YKsB1VFymTYP0Vb5BVs4PwUK8WNGAcVn6A1sE9ocR0yPlJGmyWpnqeGnwm1cVUCPyHp%2Bfh0REyYEXOhYQcpTNO3wuMAzFiY7e39zaglEeczCgACnCkXIvCVysCux%2FW91kb%2F2YSwPdzlaNVB&X-Amz-Signature=e2c973d1b84922972e14c8946fc1a69ab219a8b57656f481282882a9c87440f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOMSEK3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSbkJM3HhME2W3Ix%2B5HPEieqzusgh%2FZtFLU6wc8JabMQIhAMQKlANxqiiafeeSU6pry2GRE%2B5Fy28cFfFysymN0n3%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYV4wp6FkuU6gvbPMq3AOeckVB6i3QvNUCp0%2F2UF4DuecDV9t2r4O0tp8ZNX11ztDpi68USRIcLgAr%2FP6049OB9z6f8%2BkBkgjSCke4N75NqFxKPuIUK%2FFhcddQWsn8uyyiUpa0WybYwFn%2B%2F7rN22XUDtfKSVIjzv%2FdJgNO4gvsr%2BQDEP1Kr3jhDneySk2mfWKizDg6HAEz%2FVNU9mrRD3uPfn%2FeqEAdzWjnL70GofXKJH5Jr%2B%2BFKOubBFL%2F1vTPN5XdbH0wKJ%2F7iZU%2BkMVefPIXNJRYaFRdoBFokPohqofHMAqjFdjDjBivCnQ0KBtRAOAOjW5eF%2FtAP2Y2rdRxn1kYCD18IVUvvXCA6LRcdc7T%2BFydaQMjzIADHr1t5NO5OPqT1Pw1wL9IS54aLCJFzT8mybHrVyxioja1a%2FcEM6YVhjMJP41pBN31ZHcFi323K%2BKZYaz0I8az8stV%2BXxYlzpvuH7sbtHJUJ4hL0QNT817PEjjzykLmiK9giu5AxcPJ91lQu3N7ZaiFzK%2Bh18fg0qTjxWoegKhKxfwc4hclvJDLfzkizLamiWWEIxCb7z4BCAu9nvboA%2FfgosEcDKu77brg%2FU1DhJ7S7QqDwLWNv9fjkdvSVvta6KotHZjUZu39rRRcy3ZcqCmEnfPyzDnyLi%2FBjqkAYS7%2BELqnAOI7yb3ayi02vpz5ZvCMvT%2FEFsqXDpE%2BkynoJyLyqDFj2bJQ4WXn1YvCjaa8x0KCwKv2YKsB1VFymTYP0Vb5BVs4PwUK8WNGAcVn6A1sE9ocR0yPlJGmyWpnqeGnwm1cVUCPyHp%2Bfh0REyYEXOhYQcpTNO3wuMAzFiY7e39zaglEeczCgACnCkXIvCVysCux%2FW91kb%2F2YSwPdzlaNVB&X-Amz-Signature=63fc5bf26e345b7c2ef67de7d8e5b3137f592c6aff1383659f60cf269ac0b738&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOMSEK3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSbkJM3HhME2W3Ix%2B5HPEieqzusgh%2FZtFLU6wc8JabMQIhAMQKlANxqiiafeeSU6pry2GRE%2B5Fy28cFfFysymN0n3%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYV4wp6FkuU6gvbPMq3AOeckVB6i3QvNUCp0%2F2UF4DuecDV9t2r4O0tp8ZNX11ztDpi68USRIcLgAr%2FP6049OB9z6f8%2BkBkgjSCke4N75NqFxKPuIUK%2FFhcddQWsn8uyyiUpa0WybYwFn%2B%2F7rN22XUDtfKSVIjzv%2FdJgNO4gvsr%2BQDEP1Kr3jhDneySk2mfWKizDg6HAEz%2FVNU9mrRD3uPfn%2FeqEAdzWjnL70GofXKJH5Jr%2B%2BFKOubBFL%2F1vTPN5XdbH0wKJ%2F7iZU%2BkMVefPIXNJRYaFRdoBFokPohqofHMAqjFdjDjBivCnQ0KBtRAOAOjW5eF%2FtAP2Y2rdRxn1kYCD18IVUvvXCA6LRcdc7T%2BFydaQMjzIADHr1t5NO5OPqT1Pw1wL9IS54aLCJFzT8mybHrVyxioja1a%2FcEM6YVhjMJP41pBN31ZHcFi323K%2BKZYaz0I8az8stV%2BXxYlzpvuH7sbtHJUJ4hL0QNT817PEjjzykLmiK9giu5AxcPJ91lQu3N7ZaiFzK%2Bh18fg0qTjxWoegKhKxfwc4hclvJDLfzkizLamiWWEIxCb7z4BCAu9nvboA%2FfgosEcDKu77brg%2FU1DhJ7S7QqDwLWNv9fjkdvSVvta6KotHZjUZu39rRRcy3ZcqCmEnfPyzDnyLi%2FBjqkAYS7%2BELqnAOI7yb3ayi02vpz5ZvCMvT%2FEFsqXDpE%2BkynoJyLyqDFj2bJQ4WXn1YvCjaa8x0KCwKv2YKsB1VFymTYP0Vb5BVs4PwUK8WNGAcVn6A1sE9ocR0yPlJGmyWpnqeGnwm1cVUCPyHp%2Bfh0REyYEXOhYQcpTNO3wuMAzFiY7e39zaglEeczCgACnCkXIvCVysCux%2FW91kb%2F2YSwPdzlaNVB&X-Amz-Signature=6e978cf5717a9283fa51dcab5cfbda8740dd0923c98ab2c7c7707acd72d139aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOMSEK3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSbkJM3HhME2W3Ix%2B5HPEieqzusgh%2FZtFLU6wc8JabMQIhAMQKlANxqiiafeeSU6pry2GRE%2B5Fy28cFfFysymN0n3%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYV4wp6FkuU6gvbPMq3AOeckVB6i3QvNUCp0%2F2UF4DuecDV9t2r4O0tp8ZNX11ztDpi68USRIcLgAr%2FP6049OB9z6f8%2BkBkgjSCke4N75NqFxKPuIUK%2FFhcddQWsn8uyyiUpa0WybYwFn%2B%2F7rN22XUDtfKSVIjzv%2FdJgNO4gvsr%2BQDEP1Kr3jhDneySk2mfWKizDg6HAEz%2FVNU9mrRD3uPfn%2FeqEAdzWjnL70GofXKJH5Jr%2B%2BFKOubBFL%2F1vTPN5XdbH0wKJ%2F7iZU%2BkMVefPIXNJRYaFRdoBFokPohqofHMAqjFdjDjBivCnQ0KBtRAOAOjW5eF%2FtAP2Y2rdRxn1kYCD18IVUvvXCA6LRcdc7T%2BFydaQMjzIADHr1t5NO5OPqT1Pw1wL9IS54aLCJFzT8mybHrVyxioja1a%2FcEM6YVhjMJP41pBN31ZHcFi323K%2BKZYaz0I8az8stV%2BXxYlzpvuH7sbtHJUJ4hL0QNT817PEjjzykLmiK9giu5AxcPJ91lQu3N7ZaiFzK%2Bh18fg0qTjxWoegKhKxfwc4hclvJDLfzkizLamiWWEIxCb7z4BCAu9nvboA%2FfgosEcDKu77brg%2FU1DhJ7S7QqDwLWNv9fjkdvSVvta6KotHZjUZu39rRRcy3ZcqCmEnfPyzDnyLi%2FBjqkAYS7%2BELqnAOI7yb3ayi02vpz5ZvCMvT%2FEFsqXDpE%2BkynoJyLyqDFj2bJQ4WXn1YvCjaa8x0KCwKv2YKsB1VFymTYP0Vb5BVs4PwUK8WNGAcVn6A1sE9ocR0yPlJGmyWpnqeGnwm1cVUCPyHp%2Bfh0REyYEXOhYQcpTNO3wuMAzFiY7e39zaglEeczCgACnCkXIvCVysCux%2FW91kb%2F2YSwPdzlaNVB&X-Amz-Signature=39ba53d2ade17a8f78a74a15dd6718c98f2f5fa93324910e3a78a6b4b0e83e78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOMSEK3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSbkJM3HhME2W3Ix%2B5HPEieqzusgh%2FZtFLU6wc8JabMQIhAMQKlANxqiiafeeSU6pry2GRE%2B5Fy28cFfFysymN0n3%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYV4wp6FkuU6gvbPMq3AOeckVB6i3QvNUCp0%2F2UF4DuecDV9t2r4O0tp8ZNX11ztDpi68USRIcLgAr%2FP6049OB9z6f8%2BkBkgjSCke4N75NqFxKPuIUK%2FFhcddQWsn8uyyiUpa0WybYwFn%2B%2F7rN22XUDtfKSVIjzv%2FdJgNO4gvsr%2BQDEP1Kr3jhDneySk2mfWKizDg6HAEz%2FVNU9mrRD3uPfn%2FeqEAdzWjnL70GofXKJH5Jr%2B%2BFKOubBFL%2F1vTPN5XdbH0wKJ%2F7iZU%2BkMVefPIXNJRYaFRdoBFokPohqofHMAqjFdjDjBivCnQ0KBtRAOAOjW5eF%2FtAP2Y2rdRxn1kYCD18IVUvvXCA6LRcdc7T%2BFydaQMjzIADHr1t5NO5OPqT1Pw1wL9IS54aLCJFzT8mybHrVyxioja1a%2FcEM6YVhjMJP41pBN31ZHcFi323K%2BKZYaz0I8az8stV%2BXxYlzpvuH7sbtHJUJ4hL0QNT817PEjjzykLmiK9giu5AxcPJ91lQu3N7ZaiFzK%2Bh18fg0qTjxWoegKhKxfwc4hclvJDLfzkizLamiWWEIxCb7z4BCAu9nvboA%2FfgosEcDKu77brg%2FU1DhJ7S7QqDwLWNv9fjkdvSVvta6KotHZjUZu39rRRcy3ZcqCmEnfPyzDnyLi%2FBjqkAYS7%2BELqnAOI7yb3ayi02vpz5ZvCMvT%2FEFsqXDpE%2BkynoJyLyqDFj2bJQ4WXn1YvCjaa8x0KCwKv2YKsB1VFymTYP0Vb5BVs4PwUK8WNGAcVn6A1sE9ocR0yPlJGmyWpnqeGnwm1cVUCPyHp%2Bfh0REyYEXOhYQcpTNO3wuMAzFiY7e39zaglEeczCgACnCkXIvCVysCux%2FW91kb%2F2YSwPdzlaNVB&X-Amz-Signature=eb50965637b89a19a1eab659cc7aa2a84d9b30ca0fe486742efa63e5eec8df7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUOMSEK3%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCSbkJM3HhME2W3Ix%2B5HPEieqzusgh%2FZtFLU6wc8JabMQIhAMQKlANxqiiafeeSU6pry2GRE%2B5Fy28cFfFysymN0n3%2BKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYV4wp6FkuU6gvbPMq3AOeckVB6i3QvNUCp0%2F2UF4DuecDV9t2r4O0tp8ZNX11ztDpi68USRIcLgAr%2FP6049OB9z6f8%2BkBkgjSCke4N75NqFxKPuIUK%2FFhcddQWsn8uyyiUpa0WybYwFn%2B%2F7rN22XUDtfKSVIjzv%2FdJgNO4gvsr%2BQDEP1Kr3jhDneySk2mfWKizDg6HAEz%2FVNU9mrRD3uPfn%2FeqEAdzWjnL70GofXKJH5Jr%2B%2BFKOubBFL%2F1vTPN5XdbH0wKJ%2F7iZU%2BkMVefPIXNJRYaFRdoBFokPohqofHMAqjFdjDjBivCnQ0KBtRAOAOjW5eF%2FtAP2Y2rdRxn1kYCD18IVUvvXCA6LRcdc7T%2BFydaQMjzIADHr1t5NO5OPqT1Pw1wL9IS54aLCJFzT8mybHrVyxioja1a%2FcEM6YVhjMJP41pBN31ZHcFi323K%2BKZYaz0I8az8stV%2BXxYlzpvuH7sbtHJUJ4hL0QNT817PEjjzykLmiK9giu5AxcPJ91lQu3N7ZaiFzK%2Bh18fg0qTjxWoegKhKxfwc4hclvJDLfzkizLamiWWEIxCb7z4BCAu9nvboA%2FfgosEcDKu77brg%2FU1DhJ7S7QqDwLWNv9fjkdvSVvta6KotHZjUZu39rRRcy3ZcqCmEnfPyzDnyLi%2FBjqkAYS7%2BELqnAOI7yb3ayi02vpz5ZvCMvT%2FEFsqXDpE%2BkynoJyLyqDFj2bJQ4WXn1YvCjaa8x0KCwKv2YKsB1VFymTYP0Vb5BVs4PwUK8WNGAcVn6A1sE9ocR0yPlJGmyWpnqeGnwm1cVUCPyHp%2Bfh0REyYEXOhYQcpTNO3wuMAzFiY7e39zaglEeczCgACnCkXIvCVysCux%2FW91kb%2F2YSwPdzlaNVB&X-Amz-Signature=210e1dde2b793eb9c5309bf1381db051d69278e2ff3c877ef3e17f9a76cd0ae0&X-Amz-SignedHeaders=host&x-id=GetObject)
