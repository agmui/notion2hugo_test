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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX56O7YE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FpGO7NoiIAxWiuDBtfNb1lpbU1vFZfRxiuUBSCA%2F6NAiEAziqp4%2BVA9d0BRMwSILIq8iGBOSvgqe6timH8Ta71gssqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN09QMGJ5rkOwbmLSrcA7WqF6ftdIGMfPyTYZ%2BPIz4H551%2BPfRjm58jaxDuQWuoVd1R%2F3Msti2ixg9CTqre5vb7Cn%2Bnsh4NflpIxlsITLns0edzvNJqr6h0AlHNXy3x%2FoaPVJq0W5t9cKTpqBslqkcZpenVTGVWF16rwg0jNQspIM7%2FdxPciJurcoPsa%2BRHxQJ7xq2lKxoBuxXqEpaMV9TjiPGlVaHh8cjVk8G4dn4WwlRFma5a%2FmAQX9GeMTPaCsckyLWODab9sfEx9yW4ml5sI2sG8zmUXLmUBqWXRDa%2FyzcSU3%2BDH9myroZyfdFoDEbde3PHfImFP5IBePwLkcNmw8YVHz9brbWNwFryfn8HydZqwMWncZfS6y1ypdEFQ0sOO8G0LJjlCTX6Wu36NxymOVtUIMkK%2FzxKNUqEiflOElP0QB%2Bn%2FFavjWU0BiokkgLFyXgWiakYNBhXoPUTspNqL7wgQLMlRbfHfulfQHfwl9CqOxgYgW%2FM3XwcFxWAf4vzB6HjEzmZK4UUKEPjIXwmJxl0oIah6wFTWX1yJLGV64lSnMB0UV6BWOJwVSOcjT05PoVSWa2%2Fy6vIMzI6F4%2BI2N2ZiObBh%2B1ny4IntOE0phB8tZsbbs7flJ%2FQJNowT%2F52gAjtMkC%2BOmZsMN20zL4GOqUBgmbU55TXwDwa68NJp87w7hP%2BsjF5CyEKInh%2Bi7FFAX7svPa%2BulxwVeyqpmte5848U4%2B%2FINjVvIi3OW0uYTk2JPiU5CClBBmqSF1P5BsnTjko20F5gdjCR0Ibd5UUrwnp%2FnLg2RbWXGwTaq73ddT3ZGOGe%2FThjIHWTBAGeimOlL5oyjQrz9tuWYRQxAdhIWIgx2XT1IzBi9ukuko01CgyYIZ%2BSNg%2F&X-Amz-Signature=7d0cfb174fd6bf6fd1042ac670419ee8992ed2cbe8ed7ae15a4e01579edffed0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX56O7YE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FpGO7NoiIAxWiuDBtfNb1lpbU1vFZfRxiuUBSCA%2F6NAiEAziqp4%2BVA9d0BRMwSILIq8iGBOSvgqe6timH8Ta71gssqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN09QMGJ5rkOwbmLSrcA7WqF6ftdIGMfPyTYZ%2BPIz4H551%2BPfRjm58jaxDuQWuoVd1R%2F3Msti2ixg9CTqre5vb7Cn%2Bnsh4NflpIxlsITLns0edzvNJqr6h0AlHNXy3x%2FoaPVJq0W5t9cKTpqBslqkcZpenVTGVWF16rwg0jNQspIM7%2FdxPciJurcoPsa%2BRHxQJ7xq2lKxoBuxXqEpaMV9TjiPGlVaHh8cjVk8G4dn4WwlRFma5a%2FmAQX9GeMTPaCsckyLWODab9sfEx9yW4ml5sI2sG8zmUXLmUBqWXRDa%2FyzcSU3%2BDH9myroZyfdFoDEbde3PHfImFP5IBePwLkcNmw8YVHz9brbWNwFryfn8HydZqwMWncZfS6y1ypdEFQ0sOO8G0LJjlCTX6Wu36NxymOVtUIMkK%2FzxKNUqEiflOElP0QB%2Bn%2FFavjWU0BiokkgLFyXgWiakYNBhXoPUTspNqL7wgQLMlRbfHfulfQHfwl9CqOxgYgW%2FM3XwcFxWAf4vzB6HjEzmZK4UUKEPjIXwmJxl0oIah6wFTWX1yJLGV64lSnMB0UV6BWOJwVSOcjT05PoVSWa2%2Fy6vIMzI6F4%2BI2N2ZiObBh%2B1ny4IntOE0phB8tZsbbs7flJ%2FQJNowT%2F52gAjtMkC%2BOmZsMN20zL4GOqUBgmbU55TXwDwa68NJp87w7hP%2BsjF5CyEKInh%2Bi7FFAX7svPa%2BulxwVeyqpmte5848U4%2B%2FINjVvIi3OW0uYTk2JPiU5CClBBmqSF1P5BsnTjko20F5gdjCR0Ibd5UUrwnp%2FnLg2RbWXGwTaq73ddT3ZGOGe%2FThjIHWTBAGeimOlL5oyjQrz9tuWYRQxAdhIWIgx2XT1IzBi9ukuko01CgyYIZ%2BSNg%2F&X-Amz-Signature=9c7670759c83aee25f815f245b4cf91ee16c85438f36e35baca318930d929e80&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX56O7YE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FpGO7NoiIAxWiuDBtfNb1lpbU1vFZfRxiuUBSCA%2F6NAiEAziqp4%2BVA9d0BRMwSILIq8iGBOSvgqe6timH8Ta71gssqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN09QMGJ5rkOwbmLSrcA7WqF6ftdIGMfPyTYZ%2BPIz4H551%2BPfRjm58jaxDuQWuoVd1R%2F3Msti2ixg9CTqre5vb7Cn%2Bnsh4NflpIxlsITLns0edzvNJqr6h0AlHNXy3x%2FoaPVJq0W5t9cKTpqBslqkcZpenVTGVWF16rwg0jNQspIM7%2FdxPciJurcoPsa%2BRHxQJ7xq2lKxoBuxXqEpaMV9TjiPGlVaHh8cjVk8G4dn4WwlRFma5a%2FmAQX9GeMTPaCsckyLWODab9sfEx9yW4ml5sI2sG8zmUXLmUBqWXRDa%2FyzcSU3%2BDH9myroZyfdFoDEbde3PHfImFP5IBePwLkcNmw8YVHz9brbWNwFryfn8HydZqwMWncZfS6y1ypdEFQ0sOO8G0LJjlCTX6Wu36NxymOVtUIMkK%2FzxKNUqEiflOElP0QB%2Bn%2FFavjWU0BiokkgLFyXgWiakYNBhXoPUTspNqL7wgQLMlRbfHfulfQHfwl9CqOxgYgW%2FM3XwcFxWAf4vzB6HjEzmZK4UUKEPjIXwmJxl0oIah6wFTWX1yJLGV64lSnMB0UV6BWOJwVSOcjT05PoVSWa2%2Fy6vIMzI6F4%2BI2N2ZiObBh%2B1ny4IntOE0phB8tZsbbs7flJ%2FQJNowT%2F52gAjtMkC%2BOmZsMN20zL4GOqUBgmbU55TXwDwa68NJp87w7hP%2BsjF5CyEKInh%2Bi7FFAX7svPa%2BulxwVeyqpmte5848U4%2B%2FINjVvIi3OW0uYTk2JPiU5CClBBmqSF1P5BsnTjko20F5gdjCR0Ibd5UUrwnp%2FnLg2RbWXGwTaq73ddT3ZGOGe%2FThjIHWTBAGeimOlL5oyjQrz9tuWYRQxAdhIWIgx2XT1IzBi9ukuko01CgyYIZ%2BSNg%2F&X-Amz-Signature=3fcc238850cea4c65972bd2892de8f8be1e4dbec6744d29e5883a38180608535&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX56O7YE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FpGO7NoiIAxWiuDBtfNb1lpbU1vFZfRxiuUBSCA%2F6NAiEAziqp4%2BVA9d0BRMwSILIq8iGBOSvgqe6timH8Ta71gssqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN09QMGJ5rkOwbmLSrcA7WqF6ftdIGMfPyTYZ%2BPIz4H551%2BPfRjm58jaxDuQWuoVd1R%2F3Msti2ixg9CTqre5vb7Cn%2Bnsh4NflpIxlsITLns0edzvNJqr6h0AlHNXy3x%2FoaPVJq0W5t9cKTpqBslqkcZpenVTGVWF16rwg0jNQspIM7%2FdxPciJurcoPsa%2BRHxQJ7xq2lKxoBuxXqEpaMV9TjiPGlVaHh8cjVk8G4dn4WwlRFma5a%2FmAQX9GeMTPaCsckyLWODab9sfEx9yW4ml5sI2sG8zmUXLmUBqWXRDa%2FyzcSU3%2BDH9myroZyfdFoDEbde3PHfImFP5IBePwLkcNmw8YVHz9brbWNwFryfn8HydZqwMWncZfS6y1ypdEFQ0sOO8G0LJjlCTX6Wu36NxymOVtUIMkK%2FzxKNUqEiflOElP0QB%2Bn%2FFavjWU0BiokkgLFyXgWiakYNBhXoPUTspNqL7wgQLMlRbfHfulfQHfwl9CqOxgYgW%2FM3XwcFxWAf4vzB6HjEzmZK4UUKEPjIXwmJxl0oIah6wFTWX1yJLGV64lSnMB0UV6BWOJwVSOcjT05PoVSWa2%2Fy6vIMzI6F4%2BI2N2ZiObBh%2B1ny4IntOE0phB8tZsbbs7flJ%2FQJNowT%2F52gAjtMkC%2BOmZsMN20zL4GOqUBgmbU55TXwDwa68NJp87w7hP%2BsjF5CyEKInh%2Bi7FFAX7svPa%2BulxwVeyqpmte5848U4%2B%2FINjVvIi3OW0uYTk2JPiU5CClBBmqSF1P5BsnTjko20F5gdjCR0Ibd5UUrwnp%2FnLg2RbWXGwTaq73ddT3ZGOGe%2FThjIHWTBAGeimOlL5oyjQrz9tuWYRQxAdhIWIgx2XT1IzBi9ukuko01CgyYIZ%2BSNg%2F&X-Amz-Signature=3147d0fcf7defe97ba1a701411796ae29e4858fe677cea8641230254f2138cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX56O7YE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FpGO7NoiIAxWiuDBtfNb1lpbU1vFZfRxiuUBSCA%2F6NAiEAziqp4%2BVA9d0BRMwSILIq8iGBOSvgqe6timH8Ta71gssqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN09QMGJ5rkOwbmLSrcA7WqF6ftdIGMfPyTYZ%2BPIz4H551%2BPfRjm58jaxDuQWuoVd1R%2F3Msti2ixg9CTqre5vb7Cn%2Bnsh4NflpIxlsITLns0edzvNJqr6h0AlHNXy3x%2FoaPVJq0W5t9cKTpqBslqkcZpenVTGVWF16rwg0jNQspIM7%2FdxPciJurcoPsa%2BRHxQJ7xq2lKxoBuxXqEpaMV9TjiPGlVaHh8cjVk8G4dn4WwlRFma5a%2FmAQX9GeMTPaCsckyLWODab9sfEx9yW4ml5sI2sG8zmUXLmUBqWXRDa%2FyzcSU3%2BDH9myroZyfdFoDEbde3PHfImFP5IBePwLkcNmw8YVHz9brbWNwFryfn8HydZqwMWncZfS6y1ypdEFQ0sOO8G0LJjlCTX6Wu36NxymOVtUIMkK%2FzxKNUqEiflOElP0QB%2Bn%2FFavjWU0BiokkgLFyXgWiakYNBhXoPUTspNqL7wgQLMlRbfHfulfQHfwl9CqOxgYgW%2FM3XwcFxWAf4vzB6HjEzmZK4UUKEPjIXwmJxl0oIah6wFTWX1yJLGV64lSnMB0UV6BWOJwVSOcjT05PoVSWa2%2Fy6vIMzI6F4%2BI2N2ZiObBh%2B1ny4IntOE0phB8tZsbbs7flJ%2FQJNowT%2F52gAjtMkC%2BOmZsMN20zL4GOqUBgmbU55TXwDwa68NJp87w7hP%2BsjF5CyEKInh%2Bi7FFAX7svPa%2BulxwVeyqpmte5848U4%2B%2FINjVvIi3OW0uYTk2JPiU5CClBBmqSF1P5BsnTjko20F5gdjCR0Ibd5UUrwnp%2FnLg2RbWXGwTaq73ddT3ZGOGe%2FThjIHWTBAGeimOlL5oyjQrz9tuWYRQxAdhIWIgx2XT1IzBi9ukuko01CgyYIZ%2BSNg%2F&X-Amz-Signature=afaa9ec7973f19193d4c026c1b3572dae3b8c3c5d8c373ec2865ac1bac8349b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX56O7YE%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FpGO7NoiIAxWiuDBtfNb1lpbU1vFZfRxiuUBSCA%2F6NAiEAziqp4%2BVA9d0BRMwSILIq8iGBOSvgqe6timH8Ta71gssqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN09QMGJ5rkOwbmLSrcA7WqF6ftdIGMfPyTYZ%2BPIz4H551%2BPfRjm58jaxDuQWuoVd1R%2F3Msti2ixg9CTqre5vb7Cn%2Bnsh4NflpIxlsITLns0edzvNJqr6h0AlHNXy3x%2FoaPVJq0W5t9cKTpqBslqkcZpenVTGVWF16rwg0jNQspIM7%2FdxPciJurcoPsa%2BRHxQJ7xq2lKxoBuxXqEpaMV9TjiPGlVaHh8cjVk8G4dn4WwlRFma5a%2FmAQX9GeMTPaCsckyLWODab9sfEx9yW4ml5sI2sG8zmUXLmUBqWXRDa%2FyzcSU3%2BDH9myroZyfdFoDEbde3PHfImFP5IBePwLkcNmw8YVHz9brbWNwFryfn8HydZqwMWncZfS6y1ypdEFQ0sOO8G0LJjlCTX6Wu36NxymOVtUIMkK%2FzxKNUqEiflOElP0QB%2Bn%2FFavjWU0BiokkgLFyXgWiakYNBhXoPUTspNqL7wgQLMlRbfHfulfQHfwl9CqOxgYgW%2FM3XwcFxWAf4vzB6HjEzmZK4UUKEPjIXwmJxl0oIah6wFTWX1yJLGV64lSnMB0UV6BWOJwVSOcjT05PoVSWa2%2Fy6vIMzI6F4%2BI2N2ZiObBh%2B1ny4IntOE0phB8tZsbbs7flJ%2FQJNowT%2F52gAjtMkC%2BOmZsMN20zL4GOqUBgmbU55TXwDwa68NJp87w7hP%2BsjF5CyEKInh%2Bi7FFAX7svPa%2BulxwVeyqpmte5848U4%2B%2FINjVvIi3OW0uYTk2JPiU5CClBBmqSF1P5BsnTjko20F5gdjCR0Ibd5UUrwnp%2FnLg2RbWXGwTaq73ddT3ZGOGe%2FThjIHWTBAGeimOlL5oyjQrz9tuWYRQxAdhIWIgx2XT1IzBi9ukuko01CgyYIZ%2BSNg%2F&X-Amz-Signature=4bf18330c5e7575ca99aeb30983adecdc6f282f1182191c19af8fcbb21bf8049&X-Amz-SignedHeaders=host&x-id=GetObject)
