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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKDK4QM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn9Ck61LYDdxZrDH2OpU67JH3SlY6GPA8vaC0aCfx6nAiEAv%2Bi8rkV7hscjosHdv0ZFtLWosk24Dp72kDyLC1Nk39UqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt03OIPFMzGZf7%2BfircA1ohsG9FitqXB3E4deediFBDS3BdvS%2FWsp6%2B3myqs6g4uYCkIi0FEW%2FUEKWh6m8X%2F31%2BbNeT26B%2FC6lmKkXD9DOWkdtEcNqNBSHuTEkjBKGPRw6X5k3xc3SwPuOI8iKCt9sMP2EVJQpFyNyaE9nZMoF%2Fvr1dj03Pl0t%2F9%2BP%2FdUW0Of7L9%2FeOdIv5dCvl748XBeGG2gZe7pnQ0hqCjOG0pJWzAe59dDh101ZIOaGVxhxNgS2rsm9FBJAqpNw258pIiCVdgQJUUavGA93Pnm%2B7Btgzy4NeGwrTn7nZdAeJIJPMOn5rwPp6RJwj0Z2c40j9PxCxcjF%2BgLeOGBED%2FmtUkrZFtlDwTNImn5SiMotf%2BsM0ihvy1PqbtB8h1Fs5E8qbXFh80Q8OektI7gSX8hKyKqJc21Iv6smForq9RGHmi1vJTYXpj6OvA8RFkiiP5ptAwkUFoJLG81GRRYYvyLS0yzoILDKI5pmZf3Pfrqw7KuovNnIz8SemdXIGqDSzsKPDwrmf5I%2FE%2FrBEf3LxtcUVLRkDRIlDBl0WjRb2HLQ0RFyQQAU5QoEfg%2BYqhQrH%2B%2BAkPBcpoVeBRmR3cQy6EzyNQTl3%2BE2crUjCiPeLsMkDg45J3sA1U1cLqMtpPOdFMNjLs8EGOqUBRvTDEXZ09npuLXLbuIje2YB8RBZwdefGnd3cZxRLmDxfnaS4j3MCJkbAn%2F9KdhNpugG%2BKLMjjucQCBXHI%2FWl%2B1PX7PtQAPlDW3ebvnp4aOyHmBxnBbJdU38GjFh18xZD6VN0VBDXvdLf%2BYfSG2AbVgbDIe0IP18%2FYnnBPTkbd0ME6Uw0WktnzH4vLjagt32wjHrxdCOfQVpTmeLg66r0rdryW%2FRu&X-Amz-Signature=30b9fccc26110753b7b0e47c47d73e06e38c5240949c13b4213729bc1fc3513f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKDK4QM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn9Ck61LYDdxZrDH2OpU67JH3SlY6GPA8vaC0aCfx6nAiEAv%2Bi8rkV7hscjosHdv0ZFtLWosk24Dp72kDyLC1Nk39UqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt03OIPFMzGZf7%2BfircA1ohsG9FitqXB3E4deediFBDS3BdvS%2FWsp6%2B3myqs6g4uYCkIi0FEW%2FUEKWh6m8X%2F31%2BbNeT26B%2FC6lmKkXD9DOWkdtEcNqNBSHuTEkjBKGPRw6X5k3xc3SwPuOI8iKCt9sMP2EVJQpFyNyaE9nZMoF%2Fvr1dj03Pl0t%2F9%2BP%2FdUW0Of7L9%2FeOdIv5dCvl748XBeGG2gZe7pnQ0hqCjOG0pJWzAe59dDh101ZIOaGVxhxNgS2rsm9FBJAqpNw258pIiCVdgQJUUavGA93Pnm%2B7Btgzy4NeGwrTn7nZdAeJIJPMOn5rwPp6RJwj0Z2c40j9PxCxcjF%2BgLeOGBED%2FmtUkrZFtlDwTNImn5SiMotf%2BsM0ihvy1PqbtB8h1Fs5E8qbXFh80Q8OektI7gSX8hKyKqJc21Iv6smForq9RGHmi1vJTYXpj6OvA8RFkiiP5ptAwkUFoJLG81GRRYYvyLS0yzoILDKI5pmZf3Pfrqw7KuovNnIz8SemdXIGqDSzsKPDwrmf5I%2FE%2FrBEf3LxtcUVLRkDRIlDBl0WjRb2HLQ0RFyQQAU5QoEfg%2BYqhQrH%2B%2BAkPBcpoVeBRmR3cQy6EzyNQTl3%2BE2crUjCiPeLsMkDg45J3sA1U1cLqMtpPOdFMNjLs8EGOqUBRvTDEXZ09npuLXLbuIje2YB8RBZwdefGnd3cZxRLmDxfnaS4j3MCJkbAn%2F9KdhNpugG%2BKLMjjucQCBXHI%2FWl%2B1PX7PtQAPlDW3ebvnp4aOyHmBxnBbJdU38GjFh18xZD6VN0VBDXvdLf%2BYfSG2AbVgbDIe0IP18%2FYnnBPTkbd0ME6Uw0WktnzH4vLjagt32wjHrxdCOfQVpTmeLg66r0rdryW%2FRu&X-Amz-Signature=a0e6d3a699fc3f9af11b59391fd8a5712d4de9853d328dea8bd1ecac8a1b04a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKDK4QM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn9Ck61LYDdxZrDH2OpU67JH3SlY6GPA8vaC0aCfx6nAiEAv%2Bi8rkV7hscjosHdv0ZFtLWosk24Dp72kDyLC1Nk39UqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt03OIPFMzGZf7%2BfircA1ohsG9FitqXB3E4deediFBDS3BdvS%2FWsp6%2B3myqs6g4uYCkIi0FEW%2FUEKWh6m8X%2F31%2BbNeT26B%2FC6lmKkXD9DOWkdtEcNqNBSHuTEkjBKGPRw6X5k3xc3SwPuOI8iKCt9sMP2EVJQpFyNyaE9nZMoF%2Fvr1dj03Pl0t%2F9%2BP%2FdUW0Of7L9%2FeOdIv5dCvl748XBeGG2gZe7pnQ0hqCjOG0pJWzAe59dDh101ZIOaGVxhxNgS2rsm9FBJAqpNw258pIiCVdgQJUUavGA93Pnm%2B7Btgzy4NeGwrTn7nZdAeJIJPMOn5rwPp6RJwj0Z2c40j9PxCxcjF%2BgLeOGBED%2FmtUkrZFtlDwTNImn5SiMotf%2BsM0ihvy1PqbtB8h1Fs5E8qbXFh80Q8OektI7gSX8hKyKqJc21Iv6smForq9RGHmi1vJTYXpj6OvA8RFkiiP5ptAwkUFoJLG81GRRYYvyLS0yzoILDKI5pmZf3Pfrqw7KuovNnIz8SemdXIGqDSzsKPDwrmf5I%2FE%2FrBEf3LxtcUVLRkDRIlDBl0WjRb2HLQ0RFyQQAU5QoEfg%2BYqhQrH%2B%2BAkPBcpoVeBRmR3cQy6EzyNQTl3%2BE2crUjCiPeLsMkDg45J3sA1U1cLqMtpPOdFMNjLs8EGOqUBRvTDEXZ09npuLXLbuIje2YB8RBZwdefGnd3cZxRLmDxfnaS4j3MCJkbAn%2F9KdhNpugG%2BKLMjjucQCBXHI%2FWl%2B1PX7PtQAPlDW3ebvnp4aOyHmBxnBbJdU38GjFh18xZD6VN0VBDXvdLf%2BYfSG2AbVgbDIe0IP18%2FYnnBPTkbd0ME6Uw0WktnzH4vLjagt32wjHrxdCOfQVpTmeLg66r0rdryW%2FRu&X-Amz-Signature=a1b71abac66cfdf9472c0d15e0a9a00b6cd533ca07450bdee4754f106f29bb52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKDK4QM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn9Ck61LYDdxZrDH2OpU67JH3SlY6GPA8vaC0aCfx6nAiEAv%2Bi8rkV7hscjosHdv0ZFtLWosk24Dp72kDyLC1Nk39UqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt03OIPFMzGZf7%2BfircA1ohsG9FitqXB3E4deediFBDS3BdvS%2FWsp6%2B3myqs6g4uYCkIi0FEW%2FUEKWh6m8X%2F31%2BbNeT26B%2FC6lmKkXD9DOWkdtEcNqNBSHuTEkjBKGPRw6X5k3xc3SwPuOI8iKCt9sMP2EVJQpFyNyaE9nZMoF%2Fvr1dj03Pl0t%2F9%2BP%2FdUW0Of7L9%2FeOdIv5dCvl748XBeGG2gZe7pnQ0hqCjOG0pJWzAe59dDh101ZIOaGVxhxNgS2rsm9FBJAqpNw258pIiCVdgQJUUavGA93Pnm%2B7Btgzy4NeGwrTn7nZdAeJIJPMOn5rwPp6RJwj0Z2c40j9PxCxcjF%2BgLeOGBED%2FmtUkrZFtlDwTNImn5SiMotf%2BsM0ihvy1PqbtB8h1Fs5E8qbXFh80Q8OektI7gSX8hKyKqJc21Iv6smForq9RGHmi1vJTYXpj6OvA8RFkiiP5ptAwkUFoJLG81GRRYYvyLS0yzoILDKI5pmZf3Pfrqw7KuovNnIz8SemdXIGqDSzsKPDwrmf5I%2FE%2FrBEf3LxtcUVLRkDRIlDBl0WjRb2HLQ0RFyQQAU5QoEfg%2BYqhQrH%2B%2BAkPBcpoVeBRmR3cQy6EzyNQTl3%2BE2crUjCiPeLsMkDg45J3sA1U1cLqMtpPOdFMNjLs8EGOqUBRvTDEXZ09npuLXLbuIje2YB8RBZwdefGnd3cZxRLmDxfnaS4j3MCJkbAn%2F9KdhNpugG%2BKLMjjucQCBXHI%2FWl%2B1PX7PtQAPlDW3ebvnp4aOyHmBxnBbJdU38GjFh18xZD6VN0VBDXvdLf%2BYfSG2AbVgbDIe0IP18%2FYnnBPTkbd0ME6Uw0WktnzH4vLjagt32wjHrxdCOfQVpTmeLg66r0rdryW%2FRu&X-Amz-Signature=80ee884163c325098db6458fc06a1ee45565e0e43c22de5854c57184a0cb616e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKDK4QM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn9Ck61LYDdxZrDH2OpU67JH3SlY6GPA8vaC0aCfx6nAiEAv%2Bi8rkV7hscjosHdv0ZFtLWosk24Dp72kDyLC1Nk39UqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt03OIPFMzGZf7%2BfircA1ohsG9FitqXB3E4deediFBDS3BdvS%2FWsp6%2B3myqs6g4uYCkIi0FEW%2FUEKWh6m8X%2F31%2BbNeT26B%2FC6lmKkXD9DOWkdtEcNqNBSHuTEkjBKGPRw6X5k3xc3SwPuOI8iKCt9sMP2EVJQpFyNyaE9nZMoF%2Fvr1dj03Pl0t%2F9%2BP%2FdUW0Of7L9%2FeOdIv5dCvl748XBeGG2gZe7pnQ0hqCjOG0pJWzAe59dDh101ZIOaGVxhxNgS2rsm9FBJAqpNw258pIiCVdgQJUUavGA93Pnm%2B7Btgzy4NeGwrTn7nZdAeJIJPMOn5rwPp6RJwj0Z2c40j9PxCxcjF%2BgLeOGBED%2FmtUkrZFtlDwTNImn5SiMotf%2BsM0ihvy1PqbtB8h1Fs5E8qbXFh80Q8OektI7gSX8hKyKqJc21Iv6smForq9RGHmi1vJTYXpj6OvA8RFkiiP5ptAwkUFoJLG81GRRYYvyLS0yzoILDKI5pmZf3Pfrqw7KuovNnIz8SemdXIGqDSzsKPDwrmf5I%2FE%2FrBEf3LxtcUVLRkDRIlDBl0WjRb2HLQ0RFyQQAU5QoEfg%2BYqhQrH%2B%2BAkPBcpoVeBRmR3cQy6EzyNQTl3%2BE2crUjCiPeLsMkDg45J3sA1U1cLqMtpPOdFMNjLs8EGOqUBRvTDEXZ09npuLXLbuIje2YB8RBZwdefGnd3cZxRLmDxfnaS4j3MCJkbAn%2F9KdhNpugG%2BKLMjjucQCBXHI%2FWl%2B1PX7PtQAPlDW3ebvnp4aOyHmBxnBbJdU38GjFh18xZD6VN0VBDXvdLf%2BYfSG2AbVgbDIe0IP18%2FYnnBPTkbd0ME6Uw0WktnzH4vLjagt32wjHrxdCOfQVpTmeLg66r0rdryW%2FRu&X-Amz-Signature=161f3292622f314cc4db107fb775ec2574028c0ddb13f8186a9028904042fb4b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSKDK4QM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T230835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBn9Ck61LYDdxZrDH2OpU67JH3SlY6GPA8vaC0aCfx6nAiEAv%2Bi8rkV7hscjosHdv0ZFtLWosk24Dp72kDyLC1Nk39UqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMt03OIPFMzGZf7%2BfircA1ohsG9FitqXB3E4deediFBDS3BdvS%2FWsp6%2B3myqs6g4uYCkIi0FEW%2FUEKWh6m8X%2F31%2BbNeT26B%2FC6lmKkXD9DOWkdtEcNqNBSHuTEkjBKGPRw6X5k3xc3SwPuOI8iKCt9sMP2EVJQpFyNyaE9nZMoF%2Fvr1dj03Pl0t%2F9%2BP%2FdUW0Of7L9%2FeOdIv5dCvl748XBeGG2gZe7pnQ0hqCjOG0pJWzAe59dDh101ZIOaGVxhxNgS2rsm9FBJAqpNw258pIiCVdgQJUUavGA93Pnm%2B7Btgzy4NeGwrTn7nZdAeJIJPMOn5rwPp6RJwj0Z2c40j9PxCxcjF%2BgLeOGBED%2FmtUkrZFtlDwTNImn5SiMotf%2BsM0ihvy1PqbtB8h1Fs5E8qbXFh80Q8OektI7gSX8hKyKqJc21Iv6smForq9RGHmi1vJTYXpj6OvA8RFkiiP5ptAwkUFoJLG81GRRYYvyLS0yzoILDKI5pmZf3Pfrqw7KuovNnIz8SemdXIGqDSzsKPDwrmf5I%2FE%2FrBEf3LxtcUVLRkDRIlDBl0WjRb2HLQ0RFyQQAU5QoEfg%2BYqhQrH%2B%2BAkPBcpoVeBRmR3cQy6EzyNQTl3%2BE2crUjCiPeLsMkDg45J3sA1U1cLqMtpPOdFMNjLs8EGOqUBRvTDEXZ09npuLXLbuIje2YB8RBZwdefGnd3cZxRLmDxfnaS4j3MCJkbAn%2F9KdhNpugG%2BKLMjjucQCBXHI%2FWl%2B1PX7PtQAPlDW3ebvnp4aOyHmBxnBbJdU38GjFh18xZD6VN0VBDXvdLf%2BYfSG2AbVgbDIe0IP18%2FYnnBPTkbd0ME6Uw0WktnzH4vLjagt32wjHrxdCOfQVpTmeLg66r0rdryW%2FRu&X-Amz-Signature=6b3ed3429889f823f9c3537df8f8fd857c04d0ac4ffe5cbf8bfd15fe093fb563&X-Amz-SignedHeaders=host&x-id=GetObject)
