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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCXYGBK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSSDab%2Fm64mH9p5IENh2G8UX838NhinYxFUcgwDLs%2FtwIhAImhMscd8FoWMdE5005XCpIup0vzcUtmDiLJt5Y8HMU%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3gRTWkRx9JQEQr9cq3APi8eVM1dDsRUMQBJDJZSaz3goq5vAEhGD1hHu6Fk8wbIvN%2BSO2ti%2F1Mcgvo7uQs%2BaPLjXdtBxGLYOw6HbJKL0MGJjXRsmlyPLWoiLhRkqCTImhmOQb5U2HYSqzDgPGdZBhxd%2Fpy5czOOI6wb3bTfArjIYgWFmz6tjkUeiqWIsoe2%2F7thuIENQwx9109tm2zCqhB4n%2Fiv4AuzetfAI5Y4yRL7HrLaPuiyroflx%2FTIze41mJ7wVJrZAVxtr8y%2BzlDjjoGlGqR55enkfEukDRGmdtHL2AGbHvm%2Bz05Lra7zmaopCMIjxgaxWZikHR8NfHCgMrMHaDJzYLwsS7g93GmIWrbApY32h2kzLNYdDC%2BzGKkUa%2Bx%2FaM%2Bxt5f1ZL8XlfABdhaXClW3coV6bt3oRkgXsaVzGkRdOaRp1hO5IlQb2eDUQEP3WvJ%2BhKTeGSaBax0idRVKzCae2iTLbQpGJafXy1kwO%2FH8SNn1%2BxkKd0Whl6Y7S8Gx0YGXYD5pTc2qi4ws8oog%2Fht4k0NWng9MP55jEpL%2F5XAzUjU0Lhcisw73XPB3vl5XgiG6GRavcp%2BnIfu8k7r7lt7aYCz6SmZPEdh6fSGKj2Nt7AnkRlH2XbgFj6CN%2Fy%2BLySipuCuZa56zCuj9TCBjqkAVKx0w3RZOfsvL44HwmcSv3Pq7QFbnTLyiAd2HMeOly714uhZdrevm0XYw18vwQ2bopHmeq8u134DJ73lOOkQ15M61j1C%2F5Y0y7mGBvYqAkuceFLCnf9moLnw%2BD%2BFlxg3mlmZLQhYyEr4idcz47Tzft6ds2ClrKOvWD%2BTi11CKholIurL3IN3kNC%2FK%2BuP923%2B8GdMX0LaEDH0%2BpYtOC421UEerAN&X-Amz-Signature=fda44e6b7918d9002d5ff86ee935166d59cf284ad184da9a042a2c93aa174fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCXYGBK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSSDab%2Fm64mH9p5IENh2G8UX838NhinYxFUcgwDLs%2FtwIhAImhMscd8FoWMdE5005XCpIup0vzcUtmDiLJt5Y8HMU%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3gRTWkRx9JQEQr9cq3APi8eVM1dDsRUMQBJDJZSaz3goq5vAEhGD1hHu6Fk8wbIvN%2BSO2ti%2F1Mcgvo7uQs%2BaPLjXdtBxGLYOw6HbJKL0MGJjXRsmlyPLWoiLhRkqCTImhmOQb5U2HYSqzDgPGdZBhxd%2Fpy5czOOI6wb3bTfArjIYgWFmz6tjkUeiqWIsoe2%2F7thuIENQwx9109tm2zCqhB4n%2Fiv4AuzetfAI5Y4yRL7HrLaPuiyroflx%2FTIze41mJ7wVJrZAVxtr8y%2BzlDjjoGlGqR55enkfEukDRGmdtHL2AGbHvm%2Bz05Lra7zmaopCMIjxgaxWZikHR8NfHCgMrMHaDJzYLwsS7g93GmIWrbApY32h2kzLNYdDC%2BzGKkUa%2Bx%2FaM%2Bxt5f1ZL8XlfABdhaXClW3coV6bt3oRkgXsaVzGkRdOaRp1hO5IlQb2eDUQEP3WvJ%2BhKTeGSaBax0idRVKzCae2iTLbQpGJafXy1kwO%2FH8SNn1%2BxkKd0Whl6Y7S8Gx0YGXYD5pTc2qi4ws8oog%2Fht4k0NWng9MP55jEpL%2F5XAzUjU0Lhcisw73XPB3vl5XgiG6GRavcp%2BnIfu8k7r7lt7aYCz6SmZPEdh6fSGKj2Nt7AnkRlH2XbgFj6CN%2Fy%2BLySipuCuZa56zCuj9TCBjqkAVKx0w3RZOfsvL44HwmcSv3Pq7QFbnTLyiAd2HMeOly714uhZdrevm0XYw18vwQ2bopHmeq8u134DJ73lOOkQ15M61j1C%2F5Y0y7mGBvYqAkuceFLCnf9moLnw%2BD%2BFlxg3mlmZLQhYyEr4idcz47Tzft6ds2ClrKOvWD%2BTi11CKholIurL3IN3kNC%2FK%2BuP923%2B8GdMX0LaEDH0%2BpYtOC421UEerAN&X-Amz-Signature=b2f3a9a17fc4182ec5adbd20bd41e2ef37981a4ff784174369fbc80f594546e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCXYGBK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSSDab%2Fm64mH9p5IENh2G8UX838NhinYxFUcgwDLs%2FtwIhAImhMscd8FoWMdE5005XCpIup0vzcUtmDiLJt5Y8HMU%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3gRTWkRx9JQEQr9cq3APi8eVM1dDsRUMQBJDJZSaz3goq5vAEhGD1hHu6Fk8wbIvN%2BSO2ti%2F1Mcgvo7uQs%2BaPLjXdtBxGLYOw6HbJKL0MGJjXRsmlyPLWoiLhRkqCTImhmOQb5U2HYSqzDgPGdZBhxd%2Fpy5czOOI6wb3bTfArjIYgWFmz6tjkUeiqWIsoe2%2F7thuIENQwx9109tm2zCqhB4n%2Fiv4AuzetfAI5Y4yRL7HrLaPuiyroflx%2FTIze41mJ7wVJrZAVxtr8y%2BzlDjjoGlGqR55enkfEukDRGmdtHL2AGbHvm%2Bz05Lra7zmaopCMIjxgaxWZikHR8NfHCgMrMHaDJzYLwsS7g93GmIWrbApY32h2kzLNYdDC%2BzGKkUa%2Bx%2FaM%2Bxt5f1ZL8XlfABdhaXClW3coV6bt3oRkgXsaVzGkRdOaRp1hO5IlQb2eDUQEP3WvJ%2BhKTeGSaBax0idRVKzCae2iTLbQpGJafXy1kwO%2FH8SNn1%2BxkKd0Whl6Y7S8Gx0YGXYD5pTc2qi4ws8oog%2Fht4k0NWng9MP55jEpL%2F5XAzUjU0Lhcisw73XPB3vl5XgiG6GRavcp%2BnIfu8k7r7lt7aYCz6SmZPEdh6fSGKj2Nt7AnkRlH2XbgFj6CN%2Fy%2BLySipuCuZa56zCuj9TCBjqkAVKx0w3RZOfsvL44HwmcSv3Pq7QFbnTLyiAd2HMeOly714uhZdrevm0XYw18vwQ2bopHmeq8u134DJ73lOOkQ15M61j1C%2F5Y0y7mGBvYqAkuceFLCnf9moLnw%2BD%2BFlxg3mlmZLQhYyEr4idcz47Tzft6ds2ClrKOvWD%2BTi11CKholIurL3IN3kNC%2FK%2BuP923%2B8GdMX0LaEDH0%2BpYtOC421UEerAN&X-Amz-Signature=beeffce94c6731b793337e86a524c65efaa74a72822100337c78fc68a2ca53b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCXYGBK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSSDab%2Fm64mH9p5IENh2G8UX838NhinYxFUcgwDLs%2FtwIhAImhMscd8FoWMdE5005XCpIup0vzcUtmDiLJt5Y8HMU%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3gRTWkRx9JQEQr9cq3APi8eVM1dDsRUMQBJDJZSaz3goq5vAEhGD1hHu6Fk8wbIvN%2BSO2ti%2F1Mcgvo7uQs%2BaPLjXdtBxGLYOw6HbJKL0MGJjXRsmlyPLWoiLhRkqCTImhmOQb5U2HYSqzDgPGdZBhxd%2Fpy5czOOI6wb3bTfArjIYgWFmz6tjkUeiqWIsoe2%2F7thuIENQwx9109tm2zCqhB4n%2Fiv4AuzetfAI5Y4yRL7HrLaPuiyroflx%2FTIze41mJ7wVJrZAVxtr8y%2BzlDjjoGlGqR55enkfEukDRGmdtHL2AGbHvm%2Bz05Lra7zmaopCMIjxgaxWZikHR8NfHCgMrMHaDJzYLwsS7g93GmIWrbApY32h2kzLNYdDC%2BzGKkUa%2Bx%2FaM%2Bxt5f1ZL8XlfABdhaXClW3coV6bt3oRkgXsaVzGkRdOaRp1hO5IlQb2eDUQEP3WvJ%2BhKTeGSaBax0idRVKzCae2iTLbQpGJafXy1kwO%2FH8SNn1%2BxkKd0Whl6Y7S8Gx0YGXYD5pTc2qi4ws8oog%2Fht4k0NWng9MP55jEpL%2F5XAzUjU0Lhcisw73XPB3vl5XgiG6GRavcp%2BnIfu8k7r7lt7aYCz6SmZPEdh6fSGKj2Nt7AnkRlH2XbgFj6CN%2Fy%2BLySipuCuZa56zCuj9TCBjqkAVKx0w3RZOfsvL44HwmcSv3Pq7QFbnTLyiAd2HMeOly714uhZdrevm0XYw18vwQ2bopHmeq8u134DJ73lOOkQ15M61j1C%2F5Y0y7mGBvYqAkuceFLCnf9moLnw%2BD%2BFlxg3mlmZLQhYyEr4idcz47Tzft6ds2ClrKOvWD%2BTi11CKholIurL3IN3kNC%2FK%2BuP923%2B8GdMX0LaEDH0%2BpYtOC421UEerAN&X-Amz-Signature=811466af34be00b0b03b5c06dea671053c37429ed49a58f7c26d12a0363372f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCXYGBK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSSDab%2Fm64mH9p5IENh2G8UX838NhinYxFUcgwDLs%2FtwIhAImhMscd8FoWMdE5005XCpIup0vzcUtmDiLJt5Y8HMU%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3gRTWkRx9JQEQr9cq3APi8eVM1dDsRUMQBJDJZSaz3goq5vAEhGD1hHu6Fk8wbIvN%2BSO2ti%2F1Mcgvo7uQs%2BaPLjXdtBxGLYOw6HbJKL0MGJjXRsmlyPLWoiLhRkqCTImhmOQb5U2HYSqzDgPGdZBhxd%2Fpy5czOOI6wb3bTfArjIYgWFmz6tjkUeiqWIsoe2%2F7thuIENQwx9109tm2zCqhB4n%2Fiv4AuzetfAI5Y4yRL7HrLaPuiyroflx%2FTIze41mJ7wVJrZAVxtr8y%2BzlDjjoGlGqR55enkfEukDRGmdtHL2AGbHvm%2Bz05Lra7zmaopCMIjxgaxWZikHR8NfHCgMrMHaDJzYLwsS7g93GmIWrbApY32h2kzLNYdDC%2BzGKkUa%2Bx%2FaM%2Bxt5f1ZL8XlfABdhaXClW3coV6bt3oRkgXsaVzGkRdOaRp1hO5IlQb2eDUQEP3WvJ%2BhKTeGSaBax0idRVKzCae2iTLbQpGJafXy1kwO%2FH8SNn1%2BxkKd0Whl6Y7S8Gx0YGXYD5pTc2qi4ws8oog%2Fht4k0NWng9MP55jEpL%2F5XAzUjU0Lhcisw73XPB3vl5XgiG6GRavcp%2BnIfu8k7r7lt7aYCz6SmZPEdh6fSGKj2Nt7AnkRlH2XbgFj6CN%2Fy%2BLySipuCuZa56zCuj9TCBjqkAVKx0w3RZOfsvL44HwmcSv3Pq7QFbnTLyiAd2HMeOly714uhZdrevm0XYw18vwQ2bopHmeq8u134DJ73lOOkQ15M61j1C%2F5Y0y7mGBvYqAkuceFLCnf9moLnw%2BD%2BFlxg3mlmZLQhYyEr4idcz47Tzft6ds2ClrKOvWD%2BTi11CKholIurL3IN3kNC%2FK%2BuP923%2B8GdMX0LaEDH0%2BpYtOC421UEerAN&X-Amz-Signature=5e48edd88de7b967ca880ec2e085e38adf5cc5bdea77cd0ad507b3680fd111c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCXYGBK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSSDab%2Fm64mH9p5IENh2G8UX838NhinYxFUcgwDLs%2FtwIhAImhMscd8FoWMdE5005XCpIup0vzcUtmDiLJt5Y8HMU%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3gRTWkRx9JQEQr9cq3APi8eVM1dDsRUMQBJDJZSaz3goq5vAEhGD1hHu6Fk8wbIvN%2BSO2ti%2F1Mcgvo7uQs%2BaPLjXdtBxGLYOw6HbJKL0MGJjXRsmlyPLWoiLhRkqCTImhmOQb5U2HYSqzDgPGdZBhxd%2Fpy5czOOI6wb3bTfArjIYgWFmz6tjkUeiqWIsoe2%2F7thuIENQwx9109tm2zCqhB4n%2Fiv4AuzetfAI5Y4yRL7HrLaPuiyroflx%2FTIze41mJ7wVJrZAVxtr8y%2BzlDjjoGlGqR55enkfEukDRGmdtHL2AGbHvm%2Bz05Lra7zmaopCMIjxgaxWZikHR8NfHCgMrMHaDJzYLwsS7g93GmIWrbApY32h2kzLNYdDC%2BzGKkUa%2Bx%2FaM%2Bxt5f1ZL8XlfABdhaXClW3coV6bt3oRkgXsaVzGkRdOaRp1hO5IlQb2eDUQEP3WvJ%2BhKTeGSaBax0idRVKzCae2iTLbQpGJafXy1kwO%2FH8SNn1%2BxkKd0Whl6Y7S8Gx0YGXYD5pTc2qi4ws8oog%2Fht4k0NWng9MP55jEpL%2F5XAzUjU0Lhcisw73XPB3vl5XgiG6GRavcp%2BnIfu8k7r7lt7aYCz6SmZPEdh6fSGKj2Nt7AnkRlH2XbgFj6CN%2Fy%2BLySipuCuZa56zCuj9TCBjqkAVKx0w3RZOfsvL44HwmcSv3Pq7QFbnTLyiAd2HMeOly714uhZdrevm0XYw18vwQ2bopHmeq8u134DJ73lOOkQ15M61j1C%2F5Y0y7mGBvYqAkuceFLCnf9moLnw%2BD%2BFlxg3mlmZLQhYyEr4idcz47Tzft6ds2ClrKOvWD%2BTi11CKholIurL3IN3kNC%2FK%2BuP923%2B8GdMX0LaEDH0%2BpYtOC421UEerAN&X-Amz-Signature=3f2fa00f9edf9f22a61044b7c8e4e4623911fdd5a444478b99cf34b39b887835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
