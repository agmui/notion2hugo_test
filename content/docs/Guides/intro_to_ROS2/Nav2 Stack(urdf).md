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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GJ5V45%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RoRzviR1BBVNJ%2FKMtTKo%2FMoUsJTAAOcXkd5bHtJjCQIhAL4mZiKPd2y2gyD7N7igKuSJYktoz0T%2BohdFymdGJ6QaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxcyNMHNvXfueb7Fsq3ANlS8WlGdVoVSuhfV6Yf4mhfKoebuVhGEuht1y6mdvlsYQ9z1euYr4M2RR6OIXPvfQzlz7F29upc2iQBgiVJap0sx22qCaXkAMMkUOrunMzw2nGnhkFSTEGgSBtBCnUGvna6rZc9WhlaizUlD9n5qzQu672sBSy4%2BLxOW22QXs9XUmBv0IldDH6Td2lXvwoDAWOGpIjQkMq1pfS0soCwC7DKV0viWLfLuacFEHW2MJ0ut9Q0%2FptWrORkg9F4zzK7H7O5mshyaPFS6JJZQ3LWcAezTb4hGlJ63fWGydKUh1gg%2BPByXAV2CQ0Qlwvl%2Be6%2FYYgC53EDJiR69gUaoMnrylZEXFFmbwamIP96A8YTqWaXtAGtabisQdt5DY9Q%2FFGfPJ4%2B5ztIVJZIs0b30qVp%2BbigoFsLF9owtWKI%2BPPj4vUATAKq93wBJoTyrRJhj%2FPP%2B%2BLbNNLTA7J3Mj70iF3exfSSlOCxsA%2FihQ2DUY9RCGkqojJccVBORWK9t7eVcR6uHT5vhu3w2ZBTAjMUu7RyreFCzeyYVx4rKQZmRaBzy%2FLGGmvRLpn4TQFQ9CPVsb3QYgPHazIF1muf4PJNj7UJ21y4yRu7bs8KglB2hC3L8QaH6hP2uNa6DL79BWtyDCrppXCBjqkAQ20DhbAOmpXbO%2FF8BvckSoWeJxXaa8SiS6vgAqWg8WPZB7dUFyjzaM3g08w6EaYSXcJjRsXsyxL52%2BwhaqkTS%2FUPLbiSu%2Bm4bk9Nu7lxS6%2BH8VWZIiHA%2Bv1xMf%2FmBo02mtYXmsMrTrAD0t0FfsiquMVJXtFiC38z9niyCGq7kcBTL5IB0PDcEXNS2CvQi4Y2k40qFwqg1TEbC7rPcbMM21JrR%2Bm&X-Amz-Signature=69bad66a3b6edf5ac268d76fe21c2c05d1f4bd697973d9e7ced91b4624b355be&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GJ5V45%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RoRzviR1BBVNJ%2FKMtTKo%2FMoUsJTAAOcXkd5bHtJjCQIhAL4mZiKPd2y2gyD7N7igKuSJYktoz0T%2BohdFymdGJ6QaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxcyNMHNvXfueb7Fsq3ANlS8WlGdVoVSuhfV6Yf4mhfKoebuVhGEuht1y6mdvlsYQ9z1euYr4M2RR6OIXPvfQzlz7F29upc2iQBgiVJap0sx22qCaXkAMMkUOrunMzw2nGnhkFSTEGgSBtBCnUGvna6rZc9WhlaizUlD9n5qzQu672sBSy4%2BLxOW22QXs9XUmBv0IldDH6Td2lXvwoDAWOGpIjQkMq1pfS0soCwC7DKV0viWLfLuacFEHW2MJ0ut9Q0%2FptWrORkg9F4zzK7H7O5mshyaPFS6JJZQ3LWcAezTb4hGlJ63fWGydKUh1gg%2BPByXAV2CQ0Qlwvl%2Be6%2FYYgC53EDJiR69gUaoMnrylZEXFFmbwamIP96A8YTqWaXtAGtabisQdt5DY9Q%2FFGfPJ4%2B5ztIVJZIs0b30qVp%2BbigoFsLF9owtWKI%2BPPj4vUATAKq93wBJoTyrRJhj%2FPP%2B%2BLbNNLTA7J3Mj70iF3exfSSlOCxsA%2FihQ2DUY9RCGkqojJccVBORWK9t7eVcR6uHT5vhu3w2ZBTAjMUu7RyreFCzeyYVx4rKQZmRaBzy%2FLGGmvRLpn4TQFQ9CPVsb3QYgPHazIF1muf4PJNj7UJ21y4yRu7bs8KglB2hC3L8QaH6hP2uNa6DL79BWtyDCrppXCBjqkAQ20DhbAOmpXbO%2FF8BvckSoWeJxXaa8SiS6vgAqWg8WPZB7dUFyjzaM3g08w6EaYSXcJjRsXsyxL52%2BwhaqkTS%2FUPLbiSu%2Bm4bk9Nu7lxS6%2BH8VWZIiHA%2Bv1xMf%2FmBo02mtYXmsMrTrAD0t0FfsiquMVJXtFiC38z9niyCGq7kcBTL5IB0PDcEXNS2CvQi4Y2k40qFwqg1TEbC7rPcbMM21JrR%2Bm&X-Amz-Signature=d17381b7777f690f421c1f0d880138e676fc00073fd71f5c14279d7c345ba00b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GJ5V45%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RoRzviR1BBVNJ%2FKMtTKo%2FMoUsJTAAOcXkd5bHtJjCQIhAL4mZiKPd2y2gyD7N7igKuSJYktoz0T%2BohdFymdGJ6QaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxcyNMHNvXfueb7Fsq3ANlS8WlGdVoVSuhfV6Yf4mhfKoebuVhGEuht1y6mdvlsYQ9z1euYr4M2RR6OIXPvfQzlz7F29upc2iQBgiVJap0sx22qCaXkAMMkUOrunMzw2nGnhkFSTEGgSBtBCnUGvna6rZc9WhlaizUlD9n5qzQu672sBSy4%2BLxOW22QXs9XUmBv0IldDH6Td2lXvwoDAWOGpIjQkMq1pfS0soCwC7DKV0viWLfLuacFEHW2MJ0ut9Q0%2FptWrORkg9F4zzK7H7O5mshyaPFS6JJZQ3LWcAezTb4hGlJ63fWGydKUh1gg%2BPByXAV2CQ0Qlwvl%2Be6%2FYYgC53EDJiR69gUaoMnrylZEXFFmbwamIP96A8YTqWaXtAGtabisQdt5DY9Q%2FFGfPJ4%2B5ztIVJZIs0b30qVp%2BbigoFsLF9owtWKI%2BPPj4vUATAKq93wBJoTyrRJhj%2FPP%2B%2BLbNNLTA7J3Mj70iF3exfSSlOCxsA%2FihQ2DUY9RCGkqojJccVBORWK9t7eVcR6uHT5vhu3w2ZBTAjMUu7RyreFCzeyYVx4rKQZmRaBzy%2FLGGmvRLpn4TQFQ9CPVsb3QYgPHazIF1muf4PJNj7UJ21y4yRu7bs8KglB2hC3L8QaH6hP2uNa6DL79BWtyDCrppXCBjqkAQ20DhbAOmpXbO%2FF8BvckSoWeJxXaa8SiS6vgAqWg8WPZB7dUFyjzaM3g08w6EaYSXcJjRsXsyxL52%2BwhaqkTS%2FUPLbiSu%2Bm4bk9Nu7lxS6%2BH8VWZIiHA%2Bv1xMf%2FmBo02mtYXmsMrTrAD0t0FfsiquMVJXtFiC38z9niyCGq7kcBTL5IB0PDcEXNS2CvQi4Y2k40qFwqg1TEbC7rPcbMM21JrR%2Bm&X-Amz-Signature=a77e93eaffd49bb8d14837b44e6c9b24a1b5a8114a0887e3273faf559fa41678&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GJ5V45%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RoRzviR1BBVNJ%2FKMtTKo%2FMoUsJTAAOcXkd5bHtJjCQIhAL4mZiKPd2y2gyD7N7igKuSJYktoz0T%2BohdFymdGJ6QaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxcyNMHNvXfueb7Fsq3ANlS8WlGdVoVSuhfV6Yf4mhfKoebuVhGEuht1y6mdvlsYQ9z1euYr4M2RR6OIXPvfQzlz7F29upc2iQBgiVJap0sx22qCaXkAMMkUOrunMzw2nGnhkFSTEGgSBtBCnUGvna6rZc9WhlaizUlD9n5qzQu672sBSy4%2BLxOW22QXs9XUmBv0IldDH6Td2lXvwoDAWOGpIjQkMq1pfS0soCwC7DKV0viWLfLuacFEHW2MJ0ut9Q0%2FptWrORkg9F4zzK7H7O5mshyaPFS6JJZQ3LWcAezTb4hGlJ63fWGydKUh1gg%2BPByXAV2CQ0Qlwvl%2Be6%2FYYgC53EDJiR69gUaoMnrylZEXFFmbwamIP96A8YTqWaXtAGtabisQdt5DY9Q%2FFGfPJ4%2B5ztIVJZIs0b30qVp%2BbigoFsLF9owtWKI%2BPPj4vUATAKq93wBJoTyrRJhj%2FPP%2B%2BLbNNLTA7J3Mj70iF3exfSSlOCxsA%2FihQ2DUY9RCGkqojJccVBORWK9t7eVcR6uHT5vhu3w2ZBTAjMUu7RyreFCzeyYVx4rKQZmRaBzy%2FLGGmvRLpn4TQFQ9CPVsb3QYgPHazIF1muf4PJNj7UJ21y4yRu7bs8KglB2hC3L8QaH6hP2uNa6DL79BWtyDCrppXCBjqkAQ20DhbAOmpXbO%2FF8BvckSoWeJxXaa8SiS6vgAqWg8WPZB7dUFyjzaM3g08w6EaYSXcJjRsXsyxL52%2BwhaqkTS%2FUPLbiSu%2Bm4bk9Nu7lxS6%2BH8VWZIiHA%2Bv1xMf%2FmBo02mtYXmsMrTrAD0t0FfsiquMVJXtFiC38z9niyCGq7kcBTL5IB0PDcEXNS2CvQi4Y2k40qFwqg1TEbC7rPcbMM21JrR%2Bm&X-Amz-Signature=fa41259be30ad5f44ec47608e00d13ee683138d7d0249af1ec3728621ef97da0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GJ5V45%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RoRzviR1BBVNJ%2FKMtTKo%2FMoUsJTAAOcXkd5bHtJjCQIhAL4mZiKPd2y2gyD7N7igKuSJYktoz0T%2BohdFymdGJ6QaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxcyNMHNvXfueb7Fsq3ANlS8WlGdVoVSuhfV6Yf4mhfKoebuVhGEuht1y6mdvlsYQ9z1euYr4M2RR6OIXPvfQzlz7F29upc2iQBgiVJap0sx22qCaXkAMMkUOrunMzw2nGnhkFSTEGgSBtBCnUGvna6rZc9WhlaizUlD9n5qzQu672sBSy4%2BLxOW22QXs9XUmBv0IldDH6Td2lXvwoDAWOGpIjQkMq1pfS0soCwC7DKV0viWLfLuacFEHW2MJ0ut9Q0%2FptWrORkg9F4zzK7H7O5mshyaPFS6JJZQ3LWcAezTb4hGlJ63fWGydKUh1gg%2BPByXAV2CQ0Qlwvl%2Be6%2FYYgC53EDJiR69gUaoMnrylZEXFFmbwamIP96A8YTqWaXtAGtabisQdt5DY9Q%2FFGfPJ4%2B5ztIVJZIs0b30qVp%2BbigoFsLF9owtWKI%2BPPj4vUATAKq93wBJoTyrRJhj%2FPP%2B%2BLbNNLTA7J3Mj70iF3exfSSlOCxsA%2FihQ2DUY9RCGkqojJccVBORWK9t7eVcR6uHT5vhu3w2ZBTAjMUu7RyreFCzeyYVx4rKQZmRaBzy%2FLGGmvRLpn4TQFQ9CPVsb3QYgPHazIF1muf4PJNj7UJ21y4yRu7bs8KglB2hC3L8QaH6hP2uNa6DL79BWtyDCrppXCBjqkAQ20DhbAOmpXbO%2FF8BvckSoWeJxXaa8SiS6vgAqWg8WPZB7dUFyjzaM3g08w6EaYSXcJjRsXsyxL52%2BwhaqkTS%2FUPLbiSu%2Bm4bk9Nu7lxS6%2BH8VWZIiHA%2Bv1xMf%2FmBo02mtYXmsMrTrAD0t0FfsiquMVJXtFiC38z9niyCGq7kcBTL5IB0PDcEXNS2CvQi4Y2k40qFwqg1TEbC7rPcbMM21JrR%2Bm&X-Amz-Signature=30e66a23d1b03a9f7c7f006a2104bab797bdc0d024f9f7ba3b9972de651dacd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GJ5V45%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8RoRzviR1BBVNJ%2FKMtTKo%2FMoUsJTAAOcXkd5bHtJjCQIhAL4mZiKPd2y2gyD7N7igKuSJYktoz0T%2BohdFymdGJ6QaKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxcyNMHNvXfueb7Fsq3ANlS8WlGdVoVSuhfV6Yf4mhfKoebuVhGEuht1y6mdvlsYQ9z1euYr4M2RR6OIXPvfQzlz7F29upc2iQBgiVJap0sx22qCaXkAMMkUOrunMzw2nGnhkFSTEGgSBtBCnUGvna6rZc9WhlaizUlD9n5qzQu672sBSy4%2BLxOW22QXs9XUmBv0IldDH6Td2lXvwoDAWOGpIjQkMq1pfS0soCwC7DKV0viWLfLuacFEHW2MJ0ut9Q0%2FptWrORkg9F4zzK7H7O5mshyaPFS6JJZQ3LWcAezTb4hGlJ63fWGydKUh1gg%2BPByXAV2CQ0Qlwvl%2Be6%2FYYgC53EDJiR69gUaoMnrylZEXFFmbwamIP96A8YTqWaXtAGtabisQdt5DY9Q%2FFGfPJ4%2B5ztIVJZIs0b30qVp%2BbigoFsLF9owtWKI%2BPPj4vUATAKq93wBJoTyrRJhj%2FPP%2B%2BLbNNLTA7J3Mj70iF3exfSSlOCxsA%2FihQ2DUY9RCGkqojJccVBORWK9t7eVcR6uHT5vhu3w2ZBTAjMUu7RyreFCzeyYVx4rKQZmRaBzy%2FLGGmvRLpn4TQFQ9CPVsb3QYgPHazIF1muf4PJNj7UJ21y4yRu7bs8KglB2hC3L8QaH6hP2uNa6DL79BWtyDCrppXCBjqkAQ20DhbAOmpXbO%2FF8BvckSoWeJxXaa8SiS6vgAqWg8WPZB7dUFyjzaM3g08w6EaYSXcJjRsXsyxL52%2BwhaqkTS%2FUPLbiSu%2Bm4bk9Nu7lxS6%2BH8VWZIiHA%2Bv1xMf%2FmBo02mtYXmsMrTrAD0t0FfsiquMVJXtFiC38z9niyCGq7kcBTL5IB0PDcEXNS2CvQi4Y2k40qFwqg1TEbC7rPcbMM21JrR%2Bm&X-Amz-Signature=3579ff0edb390f294370fdf5135f159f429706da668f0e1998253d5ba26fa57f&X-Amz-SignedHeaders=host&x-id=GetObject)
