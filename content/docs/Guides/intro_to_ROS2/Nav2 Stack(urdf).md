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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X444E47%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7jnYiZAqwXwGinuK4kJgmMNkSGGHDl5hMpHYJLcb1QIhAPqJ5knnkaeribUceyye0iShoRSH6UhR9ei9jVpD0gTKKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8B8xhAzUBBqWmoocq3AMJbneU2n56utlJIiF6%2F2xC7rrJIJ%2BR397EmHtUAyG8JNJfCqIWneeTmaT0RXtcDprmo9%2FqkzMjhKM4YJzos8MkEK1De2CetMufCgt8bUsgXHDwKDlnEj4v9%2BIfqeB0mQH1KdJL5Zzf4JlOMXE1y6n0DJvI4ys%2FBclp8EsQ%2B%2BbLjHMEo%2BJMJsYn2LoJGTyiXe4fMe%2Bu7Cu3kUdgeUwW9tUbdaPxDH3A3ayEAty%2BojbK7BhRRfVe1Sde%2BNqimnVHzKBC4GWYUuHyUExf5YqdITPTBZoRqLcQRELkUneayJrmGLeztDU7%2FC6NkeNwsSbJGHEphVrwXbOsmUPxEdouR3Lw7p8uow2x624ekrceHA5156gMLVpzroEtlFC3v4XT0PLnANWlj6rBecR3Q%2BbRv1k0h%2F9GvIRl1VSyA4DcFj1AROcOOhMUr2Up4APzJwZK3170MzEVF%2BL0K7yxr0G%2F36Ci4WE%2BgWaDd8tCWEstyYppEvR0TvFcnJ8Yxgr3F02RWgIrZm68NgrZiJAnm6mCt352Uy4npPYtGr%2B%2F9GmPxovv5Wz2gXK1%2Byx8mlMXTljlPr2PmQYO5xSdkYj0ApL6GRcjNQN5vA%2BlYtu88h4OU9oM%2Fa51TcXUhSkLUscILDCji8LABjqkAUR5Km9enIMgFY5mE7j5CD39SJsxLFPslnkDeJo7q6KvFOhuL4K18%2BC%2FUsDZJ8PTykQecDop8lxpPS1PWlfBN%2B30hktNrDLBMQhnBHjQo8E4o6ymmDctAmgW9k8w%2BrLqs67oVw1t1QkrZHHVNdR7yuCNYWxDwnvGTLnbFzsIsakEJDc2Spirf%2BL60F96s1u2%2B4tM8H3m3QW7A8JvcZCFZ9E%2FFdXS&X-Amz-Signature=2b3634488fe596f371608993f3a922ec0197b647fa30ef57b0b44900fea623dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X444E47%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7jnYiZAqwXwGinuK4kJgmMNkSGGHDl5hMpHYJLcb1QIhAPqJ5knnkaeribUceyye0iShoRSH6UhR9ei9jVpD0gTKKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8B8xhAzUBBqWmoocq3AMJbneU2n56utlJIiF6%2F2xC7rrJIJ%2BR397EmHtUAyG8JNJfCqIWneeTmaT0RXtcDprmo9%2FqkzMjhKM4YJzos8MkEK1De2CetMufCgt8bUsgXHDwKDlnEj4v9%2BIfqeB0mQH1KdJL5Zzf4JlOMXE1y6n0DJvI4ys%2FBclp8EsQ%2B%2BbLjHMEo%2BJMJsYn2LoJGTyiXe4fMe%2Bu7Cu3kUdgeUwW9tUbdaPxDH3A3ayEAty%2BojbK7BhRRfVe1Sde%2BNqimnVHzKBC4GWYUuHyUExf5YqdITPTBZoRqLcQRELkUneayJrmGLeztDU7%2FC6NkeNwsSbJGHEphVrwXbOsmUPxEdouR3Lw7p8uow2x624ekrceHA5156gMLVpzroEtlFC3v4XT0PLnANWlj6rBecR3Q%2BbRv1k0h%2F9GvIRl1VSyA4DcFj1AROcOOhMUr2Up4APzJwZK3170MzEVF%2BL0K7yxr0G%2F36Ci4WE%2BgWaDd8tCWEstyYppEvR0TvFcnJ8Yxgr3F02RWgIrZm68NgrZiJAnm6mCt352Uy4npPYtGr%2B%2F9GmPxovv5Wz2gXK1%2Byx8mlMXTljlPr2PmQYO5xSdkYj0ApL6GRcjNQN5vA%2BlYtu88h4OU9oM%2Fa51TcXUhSkLUscILDCji8LABjqkAUR5Km9enIMgFY5mE7j5CD39SJsxLFPslnkDeJo7q6KvFOhuL4K18%2BC%2FUsDZJ8PTykQecDop8lxpPS1PWlfBN%2B30hktNrDLBMQhnBHjQo8E4o6ymmDctAmgW9k8w%2BrLqs67oVw1t1QkrZHHVNdR7yuCNYWxDwnvGTLnbFzsIsakEJDc2Spirf%2BL60F96s1u2%2B4tM8H3m3QW7A8JvcZCFZ9E%2FFdXS&X-Amz-Signature=5bd0825e332f296a2f10fd118b3ac0d1081183cacfd1b4c5d5d94daa215d04b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X444E47%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7jnYiZAqwXwGinuK4kJgmMNkSGGHDl5hMpHYJLcb1QIhAPqJ5knnkaeribUceyye0iShoRSH6UhR9ei9jVpD0gTKKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8B8xhAzUBBqWmoocq3AMJbneU2n56utlJIiF6%2F2xC7rrJIJ%2BR397EmHtUAyG8JNJfCqIWneeTmaT0RXtcDprmo9%2FqkzMjhKM4YJzos8MkEK1De2CetMufCgt8bUsgXHDwKDlnEj4v9%2BIfqeB0mQH1KdJL5Zzf4JlOMXE1y6n0DJvI4ys%2FBclp8EsQ%2B%2BbLjHMEo%2BJMJsYn2LoJGTyiXe4fMe%2Bu7Cu3kUdgeUwW9tUbdaPxDH3A3ayEAty%2BojbK7BhRRfVe1Sde%2BNqimnVHzKBC4GWYUuHyUExf5YqdITPTBZoRqLcQRELkUneayJrmGLeztDU7%2FC6NkeNwsSbJGHEphVrwXbOsmUPxEdouR3Lw7p8uow2x624ekrceHA5156gMLVpzroEtlFC3v4XT0PLnANWlj6rBecR3Q%2BbRv1k0h%2F9GvIRl1VSyA4DcFj1AROcOOhMUr2Up4APzJwZK3170MzEVF%2BL0K7yxr0G%2F36Ci4WE%2BgWaDd8tCWEstyYppEvR0TvFcnJ8Yxgr3F02RWgIrZm68NgrZiJAnm6mCt352Uy4npPYtGr%2B%2F9GmPxovv5Wz2gXK1%2Byx8mlMXTljlPr2PmQYO5xSdkYj0ApL6GRcjNQN5vA%2BlYtu88h4OU9oM%2Fa51TcXUhSkLUscILDCji8LABjqkAUR5Km9enIMgFY5mE7j5CD39SJsxLFPslnkDeJo7q6KvFOhuL4K18%2BC%2FUsDZJ8PTykQecDop8lxpPS1PWlfBN%2B30hktNrDLBMQhnBHjQo8E4o6ymmDctAmgW9k8w%2BrLqs67oVw1t1QkrZHHVNdR7yuCNYWxDwnvGTLnbFzsIsakEJDc2Spirf%2BL60F96s1u2%2B4tM8H3m3QW7A8JvcZCFZ9E%2FFdXS&X-Amz-Signature=7647c1269632e52140aaee279872cc35fb5d11fa844ca937ec25d1fa14b73781&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X444E47%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7jnYiZAqwXwGinuK4kJgmMNkSGGHDl5hMpHYJLcb1QIhAPqJ5knnkaeribUceyye0iShoRSH6UhR9ei9jVpD0gTKKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8B8xhAzUBBqWmoocq3AMJbneU2n56utlJIiF6%2F2xC7rrJIJ%2BR397EmHtUAyG8JNJfCqIWneeTmaT0RXtcDprmo9%2FqkzMjhKM4YJzos8MkEK1De2CetMufCgt8bUsgXHDwKDlnEj4v9%2BIfqeB0mQH1KdJL5Zzf4JlOMXE1y6n0DJvI4ys%2FBclp8EsQ%2B%2BbLjHMEo%2BJMJsYn2LoJGTyiXe4fMe%2Bu7Cu3kUdgeUwW9tUbdaPxDH3A3ayEAty%2BojbK7BhRRfVe1Sde%2BNqimnVHzKBC4GWYUuHyUExf5YqdITPTBZoRqLcQRELkUneayJrmGLeztDU7%2FC6NkeNwsSbJGHEphVrwXbOsmUPxEdouR3Lw7p8uow2x624ekrceHA5156gMLVpzroEtlFC3v4XT0PLnANWlj6rBecR3Q%2BbRv1k0h%2F9GvIRl1VSyA4DcFj1AROcOOhMUr2Up4APzJwZK3170MzEVF%2BL0K7yxr0G%2F36Ci4WE%2BgWaDd8tCWEstyYppEvR0TvFcnJ8Yxgr3F02RWgIrZm68NgrZiJAnm6mCt352Uy4npPYtGr%2B%2F9GmPxovv5Wz2gXK1%2Byx8mlMXTljlPr2PmQYO5xSdkYj0ApL6GRcjNQN5vA%2BlYtu88h4OU9oM%2Fa51TcXUhSkLUscILDCji8LABjqkAUR5Km9enIMgFY5mE7j5CD39SJsxLFPslnkDeJo7q6KvFOhuL4K18%2BC%2FUsDZJ8PTykQecDop8lxpPS1PWlfBN%2B30hktNrDLBMQhnBHjQo8E4o6ymmDctAmgW9k8w%2BrLqs67oVw1t1QkrZHHVNdR7yuCNYWxDwnvGTLnbFzsIsakEJDc2Spirf%2BL60F96s1u2%2B4tM8H3m3QW7A8JvcZCFZ9E%2FFdXS&X-Amz-Signature=f60a6f26336b4f809a4a561634643eddcbb84cc9dc30b9c245799ea41132529a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X444E47%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7jnYiZAqwXwGinuK4kJgmMNkSGGHDl5hMpHYJLcb1QIhAPqJ5knnkaeribUceyye0iShoRSH6UhR9ei9jVpD0gTKKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8B8xhAzUBBqWmoocq3AMJbneU2n56utlJIiF6%2F2xC7rrJIJ%2BR397EmHtUAyG8JNJfCqIWneeTmaT0RXtcDprmo9%2FqkzMjhKM4YJzos8MkEK1De2CetMufCgt8bUsgXHDwKDlnEj4v9%2BIfqeB0mQH1KdJL5Zzf4JlOMXE1y6n0DJvI4ys%2FBclp8EsQ%2B%2BbLjHMEo%2BJMJsYn2LoJGTyiXe4fMe%2Bu7Cu3kUdgeUwW9tUbdaPxDH3A3ayEAty%2BojbK7BhRRfVe1Sde%2BNqimnVHzKBC4GWYUuHyUExf5YqdITPTBZoRqLcQRELkUneayJrmGLeztDU7%2FC6NkeNwsSbJGHEphVrwXbOsmUPxEdouR3Lw7p8uow2x624ekrceHA5156gMLVpzroEtlFC3v4XT0PLnANWlj6rBecR3Q%2BbRv1k0h%2F9GvIRl1VSyA4DcFj1AROcOOhMUr2Up4APzJwZK3170MzEVF%2BL0K7yxr0G%2F36Ci4WE%2BgWaDd8tCWEstyYppEvR0TvFcnJ8Yxgr3F02RWgIrZm68NgrZiJAnm6mCt352Uy4npPYtGr%2B%2F9GmPxovv5Wz2gXK1%2Byx8mlMXTljlPr2PmQYO5xSdkYj0ApL6GRcjNQN5vA%2BlYtu88h4OU9oM%2Fa51TcXUhSkLUscILDCji8LABjqkAUR5Km9enIMgFY5mE7j5CD39SJsxLFPslnkDeJo7q6KvFOhuL4K18%2BC%2FUsDZJ8PTykQecDop8lxpPS1PWlfBN%2B30hktNrDLBMQhnBHjQo8E4o6ymmDctAmgW9k8w%2BrLqs67oVw1t1QkrZHHVNdR7yuCNYWxDwnvGTLnbFzsIsakEJDc2Spirf%2BL60F96s1u2%2B4tM8H3m3QW7A8JvcZCFZ9E%2FFdXS&X-Amz-Signature=ba83c098432006e09cfebc56dc08c2458305b66b306e1df2dff12b96f1c09358&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X444E47%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T081328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ7jnYiZAqwXwGinuK4kJgmMNkSGGHDl5hMpHYJLcb1QIhAPqJ5knnkaeribUceyye0iShoRSH6UhR9ei9jVpD0gTKKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8B8xhAzUBBqWmoocq3AMJbneU2n56utlJIiF6%2F2xC7rrJIJ%2BR397EmHtUAyG8JNJfCqIWneeTmaT0RXtcDprmo9%2FqkzMjhKM4YJzos8MkEK1De2CetMufCgt8bUsgXHDwKDlnEj4v9%2BIfqeB0mQH1KdJL5Zzf4JlOMXE1y6n0DJvI4ys%2FBclp8EsQ%2B%2BbLjHMEo%2BJMJsYn2LoJGTyiXe4fMe%2Bu7Cu3kUdgeUwW9tUbdaPxDH3A3ayEAty%2BojbK7BhRRfVe1Sde%2BNqimnVHzKBC4GWYUuHyUExf5YqdITPTBZoRqLcQRELkUneayJrmGLeztDU7%2FC6NkeNwsSbJGHEphVrwXbOsmUPxEdouR3Lw7p8uow2x624ekrceHA5156gMLVpzroEtlFC3v4XT0PLnANWlj6rBecR3Q%2BbRv1k0h%2F9GvIRl1VSyA4DcFj1AROcOOhMUr2Up4APzJwZK3170MzEVF%2BL0K7yxr0G%2F36Ci4WE%2BgWaDd8tCWEstyYppEvR0TvFcnJ8Yxgr3F02RWgIrZm68NgrZiJAnm6mCt352Uy4npPYtGr%2B%2F9GmPxovv5Wz2gXK1%2Byx8mlMXTljlPr2PmQYO5xSdkYj0ApL6GRcjNQN5vA%2BlYtu88h4OU9oM%2Fa51TcXUhSkLUscILDCji8LABjqkAUR5Km9enIMgFY5mE7j5CD39SJsxLFPslnkDeJo7q6KvFOhuL4K18%2BC%2FUsDZJ8PTykQecDop8lxpPS1PWlfBN%2B30hktNrDLBMQhnBHjQo8E4o6ymmDctAmgW9k8w%2BrLqs67oVw1t1QkrZHHVNdR7yuCNYWxDwnvGTLnbFzsIsakEJDc2Spirf%2BL60F96s1u2%2B4tM8H3m3QW7A8JvcZCFZ9E%2FFdXS&X-Amz-Signature=287feba8a673ad86fc69c390e98f7ae2b2143eaef0e984ee5b447c436cebe61a&X-Amz-SignedHeaders=host&x-id=GetObject)
