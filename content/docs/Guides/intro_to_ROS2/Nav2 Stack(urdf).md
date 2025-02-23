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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAMFE2Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuK0Ers2SbIUFaeHp1CsydpmsXf4RjMx6CNhpEmOAMaAiBS2oUzjh3Mk5xf3zS%2BzH8WZVvvDJwsWwXm%2B68pAUivEyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8xLG7u3V9hrIfrtOKtwDm27od9UjlrpRLYSEG2iMMemeYIXcvRebQira7hLX24bLJZyNJluvnx%2BkEpEJhLlxPbkBLNuMXYWrS0dwq9AccWplBNcaKCpE6B5SZWi5NvDXeEeLZfjKhsQDvOQKvTZnv%2BV2W0z25FoVjsOvl8sjd6HolA9D47YnHlVQauEKn1QMYn5vdtAoUEtqlL5xIFCEfTY3u%2F1DHgI6Zbmwb5mkORdWBVUr2uwQOjyyIZdm4VfuGu0TCLHBWZ32clE9%2FFIH5dEn9npv%2BVY3PSQCkivnuwH1AZe7kal11VNErbGAZPcuM10dEII%2Fhn9gaUO1x01YAYiyhxH97zGadhmozp0%2F1P%2BUzLoZ%2BTsUGIyFAJ0wfmcBcYzPV7JyvAllXrb5SlFOpAYIxAX33t2qX8aTZ%2BDDtmE1Z8j9CvHwRbZSQGV%2Bg9%2BKOzTYIBKW7BA5rshzv6X0RyGb37lLkt6i%2BsE3i5suKtvDmk%2FjkcNv28ALitkHeV4RtEEHpk2DKhzs4g8%2BAzkqphtsuujEixwMoMVPA2qIXua0s1fZNSnXiaEMcF13RVW3l%2BdN%2FyTM%2Fb4W6fQPfnX%2BbGa6SCjWYCQfOOR7NDlKk6ZVVJoIkr9ICXtBD24D1u2%2FZ%2BifML5aRs7cSzsw2sPqvQY6pgFLsN8b8GeuvZDL5vrvhUhitCYCBzdYYN%2BF29Y8RRlcTiTuj9LB4uj%2B2xBmJb7wRo6cDsBSWEg9mVeX5aJeNhjiz9NybWkswS4ec1WiVOn64x2nT7d%2BGASQ7AqmSW5iOiRGIn4fYIwnfMyddSWiFxs8%2B6pW%2FTKAmOBwIfuV%2BCaAPZxKZOuSPMDBNitceqSvegsWRZSeHcaHAwtlukrcBC0mwIAr9qkg&X-Amz-Signature=3a7ab10416e21d69c25629cbf77379182ff39cf58c988f4ce94980a506f957b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAMFE2Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuK0Ers2SbIUFaeHp1CsydpmsXf4RjMx6CNhpEmOAMaAiBS2oUzjh3Mk5xf3zS%2BzH8WZVvvDJwsWwXm%2B68pAUivEyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8xLG7u3V9hrIfrtOKtwDm27od9UjlrpRLYSEG2iMMemeYIXcvRebQira7hLX24bLJZyNJluvnx%2BkEpEJhLlxPbkBLNuMXYWrS0dwq9AccWplBNcaKCpE6B5SZWi5NvDXeEeLZfjKhsQDvOQKvTZnv%2BV2W0z25FoVjsOvl8sjd6HolA9D47YnHlVQauEKn1QMYn5vdtAoUEtqlL5xIFCEfTY3u%2F1DHgI6Zbmwb5mkORdWBVUr2uwQOjyyIZdm4VfuGu0TCLHBWZ32clE9%2FFIH5dEn9npv%2BVY3PSQCkivnuwH1AZe7kal11VNErbGAZPcuM10dEII%2Fhn9gaUO1x01YAYiyhxH97zGadhmozp0%2F1P%2BUzLoZ%2BTsUGIyFAJ0wfmcBcYzPV7JyvAllXrb5SlFOpAYIxAX33t2qX8aTZ%2BDDtmE1Z8j9CvHwRbZSQGV%2Bg9%2BKOzTYIBKW7BA5rshzv6X0RyGb37lLkt6i%2BsE3i5suKtvDmk%2FjkcNv28ALitkHeV4RtEEHpk2DKhzs4g8%2BAzkqphtsuujEixwMoMVPA2qIXua0s1fZNSnXiaEMcF13RVW3l%2BdN%2FyTM%2Fb4W6fQPfnX%2BbGa6SCjWYCQfOOR7NDlKk6ZVVJoIkr9ICXtBD24D1u2%2FZ%2BifML5aRs7cSzsw2sPqvQY6pgFLsN8b8GeuvZDL5vrvhUhitCYCBzdYYN%2BF29Y8RRlcTiTuj9LB4uj%2B2xBmJb7wRo6cDsBSWEg9mVeX5aJeNhjiz9NybWkswS4ec1WiVOn64x2nT7d%2BGASQ7AqmSW5iOiRGIn4fYIwnfMyddSWiFxs8%2B6pW%2FTKAmOBwIfuV%2BCaAPZxKZOuSPMDBNitceqSvegsWRZSeHcaHAwtlukrcBC0mwIAr9qkg&X-Amz-Signature=b26e6c6439c88738457764198dbf4654a6ade418e06eb10ffe925c917f30f5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAMFE2Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuK0Ers2SbIUFaeHp1CsydpmsXf4RjMx6CNhpEmOAMaAiBS2oUzjh3Mk5xf3zS%2BzH8WZVvvDJwsWwXm%2B68pAUivEyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8xLG7u3V9hrIfrtOKtwDm27od9UjlrpRLYSEG2iMMemeYIXcvRebQira7hLX24bLJZyNJluvnx%2BkEpEJhLlxPbkBLNuMXYWrS0dwq9AccWplBNcaKCpE6B5SZWi5NvDXeEeLZfjKhsQDvOQKvTZnv%2BV2W0z25FoVjsOvl8sjd6HolA9D47YnHlVQauEKn1QMYn5vdtAoUEtqlL5xIFCEfTY3u%2F1DHgI6Zbmwb5mkORdWBVUr2uwQOjyyIZdm4VfuGu0TCLHBWZ32clE9%2FFIH5dEn9npv%2BVY3PSQCkivnuwH1AZe7kal11VNErbGAZPcuM10dEII%2Fhn9gaUO1x01YAYiyhxH97zGadhmozp0%2F1P%2BUzLoZ%2BTsUGIyFAJ0wfmcBcYzPV7JyvAllXrb5SlFOpAYIxAX33t2qX8aTZ%2BDDtmE1Z8j9CvHwRbZSQGV%2Bg9%2BKOzTYIBKW7BA5rshzv6X0RyGb37lLkt6i%2BsE3i5suKtvDmk%2FjkcNv28ALitkHeV4RtEEHpk2DKhzs4g8%2BAzkqphtsuujEixwMoMVPA2qIXua0s1fZNSnXiaEMcF13RVW3l%2BdN%2FyTM%2Fb4W6fQPfnX%2BbGa6SCjWYCQfOOR7NDlKk6ZVVJoIkr9ICXtBD24D1u2%2FZ%2BifML5aRs7cSzsw2sPqvQY6pgFLsN8b8GeuvZDL5vrvhUhitCYCBzdYYN%2BF29Y8RRlcTiTuj9LB4uj%2B2xBmJb7wRo6cDsBSWEg9mVeX5aJeNhjiz9NybWkswS4ec1WiVOn64x2nT7d%2BGASQ7AqmSW5iOiRGIn4fYIwnfMyddSWiFxs8%2B6pW%2FTKAmOBwIfuV%2BCaAPZxKZOuSPMDBNitceqSvegsWRZSeHcaHAwtlukrcBC0mwIAr9qkg&X-Amz-Signature=0435fbe634109e6c38fe6cbe5b3375250ee455f84832a86d5a21c00b7a1b6561&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAMFE2Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuK0Ers2SbIUFaeHp1CsydpmsXf4RjMx6CNhpEmOAMaAiBS2oUzjh3Mk5xf3zS%2BzH8WZVvvDJwsWwXm%2B68pAUivEyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8xLG7u3V9hrIfrtOKtwDm27od9UjlrpRLYSEG2iMMemeYIXcvRebQira7hLX24bLJZyNJluvnx%2BkEpEJhLlxPbkBLNuMXYWrS0dwq9AccWplBNcaKCpE6B5SZWi5NvDXeEeLZfjKhsQDvOQKvTZnv%2BV2W0z25FoVjsOvl8sjd6HolA9D47YnHlVQauEKn1QMYn5vdtAoUEtqlL5xIFCEfTY3u%2F1DHgI6Zbmwb5mkORdWBVUr2uwQOjyyIZdm4VfuGu0TCLHBWZ32clE9%2FFIH5dEn9npv%2BVY3PSQCkivnuwH1AZe7kal11VNErbGAZPcuM10dEII%2Fhn9gaUO1x01YAYiyhxH97zGadhmozp0%2F1P%2BUzLoZ%2BTsUGIyFAJ0wfmcBcYzPV7JyvAllXrb5SlFOpAYIxAX33t2qX8aTZ%2BDDtmE1Z8j9CvHwRbZSQGV%2Bg9%2BKOzTYIBKW7BA5rshzv6X0RyGb37lLkt6i%2BsE3i5suKtvDmk%2FjkcNv28ALitkHeV4RtEEHpk2DKhzs4g8%2BAzkqphtsuujEixwMoMVPA2qIXua0s1fZNSnXiaEMcF13RVW3l%2BdN%2FyTM%2Fb4W6fQPfnX%2BbGa6SCjWYCQfOOR7NDlKk6ZVVJoIkr9ICXtBD24D1u2%2FZ%2BifML5aRs7cSzsw2sPqvQY6pgFLsN8b8GeuvZDL5vrvhUhitCYCBzdYYN%2BF29Y8RRlcTiTuj9LB4uj%2B2xBmJb7wRo6cDsBSWEg9mVeX5aJeNhjiz9NybWkswS4ec1WiVOn64x2nT7d%2BGASQ7AqmSW5iOiRGIn4fYIwnfMyddSWiFxs8%2B6pW%2FTKAmOBwIfuV%2BCaAPZxKZOuSPMDBNitceqSvegsWRZSeHcaHAwtlukrcBC0mwIAr9qkg&X-Amz-Signature=a47edcd0fcf84681d798fbcef33083d81447f509fa5bde717e2d1584e0fceacd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAMFE2Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuK0Ers2SbIUFaeHp1CsydpmsXf4RjMx6CNhpEmOAMaAiBS2oUzjh3Mk5xf3zS%2BzH8WZVvvDJwsWwXm%2B68pAUivEyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8xLG7u3V9hrIfrtOKtwDm27od9UjlrpRLYSEG2iMMemeYIXcvRebQira7hLX24bLJZyNJluvnx%2BkEpEJhLlxPbkBLNuMXYWrS0dwq9AccWplBNcaKCpE6B5SZWi5NvDXeEeLZfjKhsQDvOQKvTZnv%2BV2W0z25FoVjsOvl8sjd6HolA9D47YnHlVQauEKn1QMYn5vdtAoUEtqlL5xIFCEfTY3u%2F1DHgI6Zbmwb5mkORdWBVUr2uwQOjyyIZdm4VfuGu0TCLHBWZ32clE9%2FFIH5dEn9npv%2BVY3PSQCkivnuwH1AZe7kal11VNErbGAZPcuM10dEII%2Fhn9gaUO1x01YAYiyhxH97zGadhmozp0%2F1P%2BUzLoZ%2BTsUGIyFAJ0wfmcBcYzPV7JyvAllXrb5SlFOpAYIxAX33t2qX8aTZ%2BDDtmE1Z8j9CvHwRbZSQGV%2Bg9%2BKOzTYIBKW7BA5rshzv6X0RyGb37lLkt6i%2BsE3i5suKtvDmk%2FjkcNv28ALitkHeV4RtEEHpk2DKhzs4g8%2BAzkqphtsuujEixwMoMVPA2qIXua0s1fZNSnXiaEMcF13RVW3l%2BdN%2FyTM%2Fb4W6fQPfnX%2BbGa6SCjWYCQfOOR7NDlKk6ZVVJoIkr9ICXtBD24D1u2%2FZ%2BifML5aRs7cSzsw2sPqvQY6pgFLsN8b8GeuvZDL5vrvhUhitCYCBzdYYN%2BF29Y8RRlcTiTuj9LB4uj%2B2xBmJb7wRo6cDsBSWEg9mVeX5aJeNhjiz9NybWkswS4ec1WiVOn64x2nT7d%2BGASQ7AqmSW5iOiRGIn4fYIwnfMyddSWiFxs8%2B6pW%2FTKAmOBwIfuV%2BCaAPZxKZOuSPMDBNitceqSvegsWRZSeHcaHAwtlukrcBC0mwIAr9qkg&X-Amz-Signature=6ebbaa9affa10bc31f9d32eb87959c33a557eab3730ec76aacb217e36efacd44&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAMFE2Y%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuK0Ers2SbIUFaeHp1CsydpmsXf4RjMx6CNhpEmOAMaAiBS2oUzjh3Mk5xf3zS%2BzH8WZVvvDJwsWwXm%2B68pAUivEyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8xLG7u3V9hrIfrtOKtwDm27od9UjlrpRLYSEG2iMMemeYIXcvRebQira7hLX24bLJZyNJluvnx%2BkEpEJhLlxPbkBLNuMXYWrS0dwq9AccWplBNcaKCpE6B5SZWi5NvDXeEeLZfjKhsQDvOQKvTZnv%2BV2W0z25FoVjsOvl8sjd6HolA9D47YnHlVQauEKn1QMYn5vdtAoUEtqlL5xIFCEfTY3u%2F1DHgI6Zbmwb5mkORdWBVUr2uwQOjyyIZdm4VfuGu0TCLHBWZ32clE9%2FFIH5dEn9npv%2BVY3PSQCkivnuwH1AZe7kal11VNErbGAZPcuM10dEII%2Fhn9gaUO1x01YAYiyhxH97zGadhmozp0%2F1P%2BUzLoZ%2BTsUGIyFAJ0wfmcBcYzPV7JyvAllXrb5SlFOpAYIxAX33t2qX8aTZ%2BDDtmE1Z8j9CvHwRbZSQGV%2Bg9%2BKOzTYIBKW7BA5rshzv6X0RyGb37lLkt6i%2BsE3i5suKtvDmk%2FjkcNv28ALitkHeV4RtEEHpk2DKhzs4g8%2BAzkqphtsuujEixwMoMVPA2qIXua0s1fZNSnXiaEMcF13RVW3l%2BdN%2FyTM%2Fb4W6fQPfnX%2BbGa6SCjWYCQfOOR7NDlKk6ZVVJoIkr9ICXtBD24D1u2%2FZ%2BifML5aRs7cSzsw2sPqvQY6pgFLsN8b8GeuvZDL5vrvhUhitCYCBzdYYN%2BF29Y8RRlcTiTuj9LB4uj%2B2xBmJb7wRo6cDsBSWEg9mVeX5aJeNhjiz9NybWkswS4ec1WiVOn64x2nT7d%2BGASQ7AqmSW5iOiRGIn4fYIwnfMyddSWiFxs8%2B6pW%2FTKAmOBwIfuV%2BCaAPZxKZOuSPMDBNitceqSvegsWRZSeHcaHAwtlukrcBC0mwIAr9qkg&X-Amz-Signature=49f3ecfda4c3f53dbbada63bc699c3dec7e526029aef42364d12336cc9b9d6f1&X-Amz-SignedHeaders=host&x-id=GetObject)
