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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVTWXID%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCTzOlLOnI%2F%2Fx4CZnoJZCunip%2BpTSTYjrpyNQPlEIiAIhALJ%2BQxhC00%2BS%2FibZubNuH2qWls9BisYRMnBfKHrelh0BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8qjj7H%2FbueW4UTSoq3AONvy5X5rgc64%2FVH1z5wPX3msdWHtSq3%2BdWhUGy%2FYTbBr7GFRGuyxT7gmPg8si1ivRYBhh%2FI2pVXOWoto9%2Bq9fN26kB7ilB5puH0JfrsRJe9PDSViRmuJRmF9QA8xYFzQNPccNRvrh0MbrzSGsndREZm4vi7m5YRsluBAR7c0BAlEh%2BB5g8NbAOclmFRLlTtp2pR8ixu7SXGiTvtRSLK%2B3srZOXqiIIrczaJtyEtajDfIjz1eSTiSHOEJfWZzXFGzy5mavBI3vQEDbchL%2F54ICokjI2hzxtUFD6wsHkyrWWh%2B1hZMHEzRFL1SOwOMh%2BAKdgxY0aXReEC6WMbeZYvfISKzPF3sFeFyUa4Jg4sD4f6ya1vj2L1varlk%2BbCMFR8wt2Rn0d%2BGPQ%2BAXH2KSRDHmj6JR8O0R94zJBJKTnDXw2G6mgbsUvNCaqBbOr4c3cduJeVHxzE%2BkpRFa%2BS7K5Awaf5gdR9JguZIFBJTT3gpKwIiXBk7uAHPKI%2BuwMqlc2HjhK%2FNKlyazsE4g0JF%2BAjNUzU85rAhuRUzkjrdE4wC6nlAu%2BKUpqrGUmfvVQVC6bgb4yTPhdSu%2Bi28VipEMZsSaJUSpvLlggXO2I6LdgGBLcF87e5j%2B4ACUinNMDTjD0j7XBBjqkAZ8WbFBvbZ%2Flrfatgz%2BlufILPbWbl%2FHdeLX3EaH3oL2%2FCNqNDU0dQOjelqfiXmaFlEnvRd81qRHh4Yaa68EEfW19k1aR8tWuv7hKRkf%2B12sYq2GwaOv2ii5mZNB2fA4DdydW%2Faby8p0swG8naBEfEJwlnBrePzAnX8HDiZ1X%2BprL1UqfsTWexzIWElre0QOgvsq8dJiIbagN6XMgMNgcX5T9ypaq&X-Amz-Signature=0764ee58a2646f73555c4859649a8066bf6b7af49ac3c11526e5aa273d5d55c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVTWXID%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCTzOlLOnI%2F%2Fx4CZnoJZCunip%2BpTSTYjrpyNQPlEIiAIhALJ%2BQxhC00%2BS%2FibZubNuH2qWls9BisYRMnBfKHrelh0BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8qjj7H%2FbueW4UTSoq3AONvy5X5rgc64%2FVH1z5wPX3msdWHtSq3%2BdWhUGy%2FYTbBr7GFRGuyxT7gmPg8si1ivRYBhh%2FI2pVXOWoto9%2Bq9fN26kB7ilB5puH0JfrsRJe9PDSViRmuJRmF9QA8xYFzQNPccNRvrh0MbrzSGsndREZm4vi7m5YRsluBAR7c0BAlEh%2BB5g8NbAOclmFRLlTtp2pR8ixu7SXGiTvtRSLK%2B3srZOXqiIIrczaJtyEtajDfIjz1eSTiSHOEJfWZzXFGzy5mavBI3vQEDbchL%2F54ICokjI2hzxtUFD6wsHkyrWWh%2B1hZMHEzRFL1SOwOMh%2BAKdgxY0aXReEC6WMbeZYvfISKzPF3sFeFyUa4Jg4sD4f6ya1vj2L1varlk%2BbCMFR8wt2Rn0d%2BGPQ%2BAXH2KSRDHmj6JR8O0R94zJBJKTnDXw2G6mgbsUvNCaqBbOr4c3cduJeVHxzE%2BkpRFa%2BS7K5Awaf5gdR9JguZIFBJTT3gpKwIiXBk7uAHPKI%2BuwMqlc2HjhK%2FNKlyazsE4g0JF%2BAjNUzU85rAhuRUzkjrdE4wC6nlAu%2BKUpqrGUmfvVQVC6bgb4yTPhdSu%2Bi28VipEMZsSaJUSpvLlggXO2I6LdgGBLcF87e5j%2B4ACUinNMDTjD0j7XBBjqkAZ8WbFBvbZ%2Flrfatgz%2BlufILPbWbl%2FHdeLX3EaH3oL2%2FCNqNDU0dQOjelqfiXmaFlEnvRd81qRHh4Yaa68EEfW19k1aR8tWuv7hKRkf%2B12sYq2GwaOv2ii5mZNB2fA4DdydW%2Faby8p0swG8naBEfEJwlnBrePzAnX8HDiZ1X%2BprL1UqfsTWexzIWElre0QOgvsq8dJiIbagN6XMgMNgcX5T9ypaq&X-Amz-Signature=bae8c38d86c86a3dacd5eac633c36c645b1f7e02278d9d184c436b5e7ff6bc0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVTWXID%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCTzOlLOnI%2F%2Fx4CZnoJZCunip%2BpTSTYjrpyNQPlEIiAIhALJ%2BQxhC00%2BS%2FibZubNuH2qWls9BisYRMnBfKHrelh0BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8qjj7H%2FbueW4UTSoq3AONvy5X5rgc64%2FVH1z5wPX3msdWHtSq3%2BdWhUGy%2FYTbBr7GFRGuyxT7gmPg8si1ivRYBhh%2FI2pVXOWoto9%2Bq9fN26kB7ilB5puH0JfrsRJe9PDSViRmuJRmF9QA8xYFzQNPccNRvrh0MbrzSGsndREZm4vi7m5YRsluBAR7c0BAlEh%2BB5g8NbAOclmFRLlTtp2pR8ixu7SXGiTvtRSLK%2B3srZOXqiIIrczaJtyEtajDfIjz1eSTiSHOEJfWZzXFGzy5mavBI3vQEDbchL%2F54ICokjI2hzxtUFD6wsHkyrWWh%2B1hZMHEzRFL1SOwOMh%2BAKdgxY0aXReEC6WMbeZYvfISKzPF3sFeFyUa4Jg4sD4f6ya1vj2L1varlk%2BbCMFR8wt2Rn0d%2BGPQ%2BAXH2KSRDHmj6JR8O0R94zJBJKTnDXw2G6mgbsUvNCaqBbOr4c3cduJeVHxzE%2BkpRFa%2BS7K5Awaf5gdR9JguZIFBJTT3gpKwIiXBk7uAHPKI%2BuwMqlc2HjhK%2FNKlyazsE4g0JF%2BAjNUzU85rAhuRUzkjrdE4wC6nlAu%2BKUpqrGUmfvVQVC6bgb4yTPhdSu%2Bi28VipEMZsSaJUSpvLlggXO2I6LdgGBLcF87e5j%2B4ACUinNMDTjD0j7XBBjqkAZ8WbFBvbZ%2Flrfatgz%2BlufILPbWbl%2FHdeLX3EaH3oL2%2FCNqNDU0dQOjelqfiXmaFlEnvRd81qRHh4Yaa68EEfW19k1aR8tWuv7hKRkf%2B12sYq2GwaOv2ii5mZNB2fA4DdydW%2Faby8p0swG8naBEfEJwlnBrePzAnX8HDiZ1X%2BprL1UqfsTWexzIWElre0QOgvsq8dJiIbagN6XMgMNgcX5T9ypaq&X-Amz-Signature=d863e5aedea6f06101e0470938ed0aea1eb45f13d518146c01b95620a9373df1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVTWXID%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCTzOlLOnI%2F%2Fx4CZnoJZCunip%2BpTSTYjrpyNQPlEIiAIhALJ%2BQxhC00%2BS%2FibZubNuH2qWls9BisYRMnBfKHrelh0BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8qjj7H%2FbueW4UTSoq3AONvy5X5rgc64%2FVH1z5wPX3msdWHtSq3%2BdWhUGy%2FYTbBr7GFRGuyxT7gmPg8si1ivRYBhh%2FI2pVXOWoto9%2Bq9fN26kB7ilB5puH0JfrsRJe9PDSViRmuJRmF9QA8xYFzQNPccNRvrh0MbrzSGsndREZm4vi7m5YRsluBAR7c0BAlEh%2BB5g8NbAOclmFRLlTtp2pR8ixu7SXGiTvtRSLK%2B3srZOXqiIIrczaJtyEtajDfIjz1eSTiSHOEJfWZzXFGzy5mavBI3vQEDbchL%2F54ICokjI2hzxtUFD6wsHkyrWWh%2B1hZMHEzRFL1SOwOMh%2BAKdgxY0aXReEC6WMbeZYvfISKzPF3sFeFyUa4Jg4sD4f6ya1vj2L1varlk%2BbCMFR8wt2Rn0d%2BGPQ%2BAXH2KSRDHmj6JR8O0R94zJBJKTnDXw2G6mgbsUvNCaqBbOr4c3cduJeVHxzE%2BkpRFa%2BS7K5Awaf5gdR9JguZIFBJTT3gpKwIiXBk7uAHPKI%2BuwMqlc2HjhK%2FNKlyazsE4g0JF%2BAjNUzU85rAhuRUzkjrdE4wC6nlAu%2BKUpqrGUmfvVQVC6bgb4yTPhdSu%2Bi28VipEMZsSaJUSpvLlggXO2I6LdgGBLcF87e5j%2B4ACUinNMDTjD0j7XBBjqkAZ8WbFBvbZ%2Flrfatgz%2BlufILPbWbl%2FHdeLX3EaH3oL2%2FCNqNDU0dQOjelqfiXmaFlEnvRd81qRHh4Yaa68EEfW19k1aR8tWuv7hKRkf%2B12sYq2GwaOv2ii5mZNB2fA4DdydW%2Faby8p0swG8naBEfEJwlnBrePzAnX8HDiZ1X%2BprL1UqfsTWexzIWElre0QOgvsq8dJiIbagN6XMgMNgcX5T9ypaq&X-Amz-Signature=f5e1c5266836640df9dd01702639235775b7e00af43b87d5316cbd47b64a429f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVTWXID%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCTzOlLOnI%2F%2Fx4CZnoJZCunip%2BpTSTYjrpyNQPlEIiAIhALJ%2BQxhC00%2BS%2FibZubNuH2qWls9BisYRMnBfKHrelh0BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8qjj7H%2FbueW4UTSoq3AONvy5X5rgc64%2FVH1z5wPX3msdWHtSq3%2BdWhUGy%2FYTbBr7GFRGuyxT7gmPg8si1ivRYBhh%2FI2pVXOWoto9%2Bq9fN26kB7ilB5puH0JfrsRJe9PDSViRmuJRmF9QA8xYFzQNPccNRvrh0MbrzSGsndREZm4vi7m5YRsluBAR7c0BAlEh%2BB5g8NbAOclmFRLlTtp2pR8ixu7SXGiTvtRSLK%2B3srZOXqiIIrczaJtyEtajDfIjz1eSTiSHOEJfWZzXFGzy5mavBI3vQEDbchL%2F54ICokjI2hzxtUFD6wsHkyrWWh%2B1hZMHEzRFL1SOwOMh%2BAKdgxY0aXReEC6WMbeZYvfISKzPF3sFeFyUa4Jg4sD4f6ya1vj2L1varlk%2BbCMFR8wt2Rn0d%2BGPQ%2BAXH2KSRDHmj6JR8O0R94zJBJKTnDXw2G6mgbsUvNCaqBbOr4c3cduJeVHxzE%2BkpRFa%2BS7K5Awaf5gdR9JguZIFBJTT3gpKwIiXBk7uAHPKI%2BuwMqlc2HjhK%2FNKlyazsE4g0JF%2BAjNUzU85rAhuRUzkjrdE4wC6nlAu%2BKUpqrGUmfvVQVC6bgb4yTPhdSu%2Bi28VipEMZsSaJUSpvLlggXO2I6LdgGBLcF87e5j%2B4ACUinNMDTjD0j7XBBjqkAZ8WbFBvbZ%2Flrfatgz%2BlufILPbWbl%2FHdeLX3EaH3oL2%2FCNqNDU0dQOjelqfiXmaFlEnvRd81qRHh4Yaa68EEfW19k1aR8tWuv7hKRkf%2B12sYq2GwaOv2ii5mZNB2fA4DdydW%2Faby8p0swG8naBEfEJwlnBrePzAnX8HDiZ1X%2BprL1UqfsTWexzIWElre0QOgvsq8dJiIbagN6XMgMNgcX5T9ypaq&X-Amz-Signature=876c48de1d270d0672b76da000dc9e5635e8379ac4f7922374a145e5b4e2cd4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNVTWXID%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T041308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXCTzOlLOnI%2F%2Fx4CZnoJZCunip%2BpTSTYjrpyNQPlEIiAIhALJ%2BQxhC00%2BS%2FibZubNuH2qWls9BisYRMnBfKHrelh0BKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8qjj7H%2FbueW4UTSoq3AONvy5X5rgc64%2FVH1z5wPX3msdWHtSq3%2BdWhUGy%2FYTbBr7GFRGuyxT7gmPg8si1ivRYBhh%2FI2pVXOWoto9%2Bq9fN26kB7ilB5puH0JfrsRJe9PDSViRmuJRmF9QA8xYFzQNPccNRvrh0MbrzSGsndREZm4vi7m5YRsluBAR7c0BAlEh%2BB5g8NbAOclmFRLlTtp2pR8ixu7SXGiTvtRSLK%2B3srZOXqiIIrczaJtyEtajDfIjz1eSTiSHOEJfWZzXFGzy5mavBI3vQEDbchL%2F54ICokjI2hzxtUFD6wsHkyrWWh%2B1hZMHEzRFL1SOwOMh%2BAKdgxY0aXReEC6WMbeZYvfISKzPF3sFeFyUa4Jg4sD4f6ya1vj2L1varlk%2BbCMFR8wt2Rn0d%2BGPQ%2BAXH2KSRDHmj6JR8O0R94zJBJKTnDXw2G6mgbsUvNCaqBbOr4c3cduJeVHxzE%2BkpRFa%2BS7K5Awaf5gdR9JguZIFBJTT3gpKwIiXBk7uAHPKI%2BuwMqlc2HjhK%2FNKlyazsE4g0JF%2BAjNUzU85rAhuRUzkjrdE4wC6nlAu%2BKUpqrGUmfvVQVC6bgb4yTPhdSu%2Bi28VipEMZsSaJUSpvLlggXO2I6LdgGBLcF87e5j%2B4ACUinNMDTjD0j7XBBjqkAZ8WbFBvbZ%2Flrfatgz%2BlufILPbWbl%2FHdeLX3EaH3oL2%2FCNqNDU0dQOjelqfiXmaFlEnvRd81qRHh4Yaa68EEfW19k1aR8tWuv7hKRkf%2B12sYq2GwaOv2ii5mZNB2fA4DdydW%2Faby8p0swG8naBEfEJwlnBrePzAnX8HDiZ1X%2BprL1UqfsTWexzIWElre0QOgvsq8dJiIbagN6XMgMNgcX5T9ypaq&X-Amz-Signature=9b38c6b42be0cb49f5acd647022cb45a623113e522d8081c495e254077eb6834&X-Amz-SignedHeaders=host&x-id=GetObject)
