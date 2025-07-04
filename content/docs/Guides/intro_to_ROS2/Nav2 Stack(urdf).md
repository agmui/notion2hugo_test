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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG2LVK2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGso33yBx9K00PE3%2FInsBFG6uxnb%2B7i21dA8bycw8moeAiAYat2VPXsvNpQrzaBNbg%2FTaqR0GhQUEg1F4eQ71OeZoCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8nfvBf2%2FVQf8B8mmKtwD8m0pCGBIghcMUdeQW1NEuDUFTZTrGviSS7wrc1TwHa4QYkkEEQBQXjNMrj4lPLEE2C%2B9URllC61%2Bvd0QaonJglfkHHuW2s%2BzA9iJsC5kyJVUFH6d6r4oiWqDyG54SGeUZmhncE9R4i%2Bz7xyL46m%2F7Bp4TIu%2BhrRtxpx41cms0N%2BPGsDENEShzPMFBRjOc%2BTYdl%2FJo7qe9zxrnfUXOEb9sqDSfw22Gow%2FvtgGnbiOhwpAYs8icrTKKLN6F%2FLxR1XCG10q6lHHXCc97MMaheWF9biFpBH7pll3zuKYmNFrTxgKq1m8xXFV1%2BDjAb8KhqGCfBUNJkerQclezaxg4VdruuQqFtc5yBOHzI9FOSUEIfpZg%2FZ45%2FYBEC1yuxIbyOTd74lsjOS2KHgHbbybpdX0VcQcfzVeH0gTad10L3QGkTEAOajiEQ%2FvGH3BN757PfiYOP8eKuEaX93AtJiNz8cmm170dpa%2F4Tuer9Z%2BTIAG4qTvkydiw8sKYmCD5KvxQOCagGG4epDCyJ2DKzJmjA0f87UCGvXkIc6N%2FJ1%2BoffqqR1GW8HOmGZCrvoUuc0GDre2bTxi1GXgIYGeqKLvP%2FmkoEX0sYKRp3DnXDFiH%2Fb1Zzt%2BA9Wb4lNjmsn2gv0w7I2dwwY6pgH5maWmPARJ2lmFfT1lQCBEKpgR2oRpTMnnl%2FT63DYIciqR%2F7jzZUNS75O9yXdLtPae7oROQQedk96vhdXWOuOeJEKds8W%2FUq77BIVEIgoyJmnESxSCqTPkpps%2FqAfLS%2F6eEiLY31NayaRXRWuNhlOqtxCyCAdXfakdw7bifVK3R0OA0A0tEijChwH%2B7HdP27m68ftcKdamxzeIdi6loPzZLOK%2BuZ20&X-Amz-Signature=4008b5383615de34f1772a869a3d338bed0b455b9825ce17afadf347e4f4ec5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG2LVK2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGso33yBx9K00PE3%2FInsBFG6uxnb%2B7i21dA8bycw8moeAiAYat2VPXsvNpQrzaBNbg%2FTaqR0GhQUEg1F4eQ71OeZoCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8nfvBf2%2FVQf8B8mmKtwD8m0pCGBIghcMUdeQW1NEuDUFTZTrGviSS7wrc1TwHa4QYkkEEQBQXjNMrj4lPLEE2C%2B9URllC61%2Bvd0QaonJglfkHHuW2s%2BzA9iJsC5kyJVUFH6d6r4oiWqDyG54SGeUZmhncE9R4i%2Bz7xyL46m%2F7Bp4TIu%2BhrRtxpx41cms0N%2BPGsDENEShzPMFBRjOc%2BTYdl%2FJo7qe9zxrnfUXOEb9sqDSfw22Gow%2FvtgGnbiOhwpAYs8icrTKKLN6F%2FLxR1XCG10q6lHHXCc97MMaheWF9biFpBH7pll3zuKYmNFrTxgKq1m8xXFV1%2BDjAb8KhqGCfBUNJkerQclezaxg4VdruuQqFtc5yBOHzI9FOSUEIfpZg%2FZ45%2FYBEC1yuxIbyOTd74lsjOS2KHgHbbybpdX0VcQcfzVeH0gTad10L3QGkTEAOajiEQ%2FvGH3BN757PfiYOP8eKuEaX93AtJiNz8cmm170dpa%2F4Tuer9Z%2BTIAG4qTvkydiw8sKYmCD5KvxQOCagGG4epDCyJ2DKzJmjA0f87UCGvXkIc6N%2FJ1%2BoffqqR1GW8HOmGZCrvoUuc0GDre2bTxi1GXgIYGeqKLvP%2FmkoEX0sYKRp3DnXDFiH%2Fb1Zzt%2BA9Wb4lNjmsn2gv0w7I2dwwY6pgH5maWmPARJ2lmFfT1lQCBEKpgR2oRpTMnnl%2FT63DYIciqR%2F7jzZUNS75O9yXdLtPae7oROQQedk96vhdXWOuOeJEKds8W%2FUq77BIVEIgoyJmnESxSCqTPkpps%2FqAfLS%2F6eEiLY31NayaRXRWuNhlOqtxCyCAdXfakdw7bifVK3R0OA0A0tEijChwH%2B7HdP27m68ftcKdamxzeIdi6loPzZLOK%2BuZ20&X-Amz-Signature=f631b52222752a9a981f15e55dcf9206a7aff2401bd3c0af3a2f4737ba7f06d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG2LVK2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGso33yBx9K00PE3%2FInsBFG6uxnb%2B7i21dA8bycw8moeAiAYat2VPXsvNpQrzaBNbg%2FTaqR0GhQUEg1F4eQ71OeZoCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8nfvBf2%2FVQf8B8mmKtwD8m0pCGBIghcMUdeQW1NEuDUFTZTrGviSS7wrc1TwHa4QYkkEEQBQXjNMrj4lPLEE2C%2B9URllC61%2Bvd0QaonJglfkHHuW2s%2BzA9iJsC5kyJVUFH6d6r4oiWqDyG54SGeUZmhncE9R4i%2Bz7xyL46m%2F7Bp4TIu%2BhrRtxpx41cms0N%2BPGsDENEShzPMFBRjOc%2BTYdl%2FJo7qe9zxrnfUXOEb9sqDSfw22Gow%2FvtgGnbiOhwpAYs8icrTKKLN6F%2FLxR1XCG10q6lHHXCc97MMaheWF9biFpBH7pll3zuKYmNFrTxgKq1m8xXFV1%2BDjAb8KhqGCfBUNJkerQclezaxg4VdruuQqFtc5yBOHzI9FOSUEIfpZg%2FZ45%2FYBEC1yuxIbyOTd74lsjOS2KHgHbbybpdX0VcQcfzVeH0gTad10L3QGkTEAOajiEQ%2FvGH3BN757PfiYOP8eKuEaX93AtJiNz8cmm170dpa%2F4Tuer9Z%2BTIAG4qTvkydiw8sKYmCD5KvxQOCagGG4epDCyJ2DKzJmjA0f87UCGvXkIc6N%2FJ1%2BoffqqR1GW8HOmGZCrvoUuc0GDre2bTxi1GXgIYGeqKLvP%2FmkoEX0sYKRp3DnXDFiH%2Fb1Zzt%2BA9Wb4lNjmsn2gv0w7I2dwwY6pgH5maWmPARJ2lmFfT1lQCBEKpgR2oRpTMnnl%2FT63DYIciqR%2F7jzZUNS75O9yXdLtPae7oROQQedk96vhdXWOuOeJEKds8W%2FUq77BIVEIgoyJmnESxSCqTPkpps%2FqAfLS%2F6eEiLY31NayaRXRWuNhlOqtxCyCAdXfakdw7bifVK3R0OA0A0tEijChwH%2B7HdP27m68ftcKdamxzeIdi6loPzZLOK%2BuZ20&X-Amz-Signature=e6fb50af4215d1da7f31b52384181302102168a9a7873fb5eea1b416a5f53414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG2LVK2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGso33yBx9K00PE3%2FInsBFG6uxnb%2B7i21dA8bycw8moeAiAYat2VPXsvNpQrzaBNbg%2FTaqR0GhQUEg1F4eQ71OeZoCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8nfvBf2%2FVQf8B8mmKtwD8m0pCGBIghcMUdeQW1NEuDUFTZTrGviSS7wrc1TwHa4QYkkEEQBQXjNMrj4lPLEE2C%2B9URllC61%2Bvd0QaonJglfkHHuW2s%2BzA9iJsC5kyJVUFH6d6r4oiWqDyG54SGeUZmhncE9R4i%2Bz7xyL46m%2F7Bp4TIu%2BhrRtxpx41cms0N%2BPGsDENEShzPMFBRjOc%2BTYdl%2FJo7qe9zxrnfUXOEb9sqDSfw22Gow%2FvtgGnbiOhwpAYs8icrTKKLN6F%2FLxR1XCG10q6lHHXCc97MMaheWF9biFpBH7pll3zuKYmNFrTxgKq1m8xXFV1%2BDjAb8KhqGCfBUNJkerQclezaxg4VdruuQqFtc5yBOHzI9FOSUEIfpZg%2FZ45%2FYBEC1yuxIbyOTd74lsjOS2KHgHbbybpdX0VcQcfzVeH0gTad10L3QGkTEAOajiEQ%2FvGH3BN757PfiYOP8eKuEaX93AtJiNz8cmm170dpa%2F4Tuer9Z%2BTIAG4qTvkydiw8sKYmCD5KvxQOCagGG4epDCyJ2DKzJmjA0f87UCGvXkIc6N%2FJ1%2BoffqqR1GW8HOmGZCrvoUuc0GDre2bTxi1GXgIYGeqKLvP%2FmkoEX0sYKRp3DnXDFiH%2Fb1Zzt%2BA9Wb4lNjmsn2gv0w7I2dwwY6pgH5maWmPARJ2lmFfT1lQCBEKpgR2oRpTMnnl%2FT63DYIciqR%2F7jzZUNS75O9yXdLtPae7oROQQedk96vhdXWOuOeJEKds8W%2FUq77BIVEIgoyJmnESxSCqTPkpps%2FqAfLS%2F6eEiLY31NayaRXRWuNhlOqtxCyCAdXfakdw7bifVK3R0OA0A0tEijChwH%2B7HdP27m68ftcKdamxzeIdi6loPzZLOK%2BuZ20&X-Amz-Signature=82abd12efe4d4ad0c94b75fbe6bbd6198f708b3011cb043e282f447dc7c38720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG2LVK2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGso33yBx9K00PE3%2FInsBFG6uxnb%2B7i21dA8bycw8moeAiAYat2VPXsvNpQrzaBNbg%2FTaqR0GhQUEg1F4eQ71OeZoCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8nfvBf2%2FVQf8B8mmKtwD8m0pCGBIghcMUdeQW1NEuDUFTZTrGviSS7wrc1TwHa4QYkkEEQBQXjNMrj4lPLEE2C%2B9URllC61%2Bvd0QaonJglfkHHuW2s%2BzA9iJsC5kyJVUFH6d6r4oiWqDyG54SGeUZmhncE9R4i%2Bz7xyL46m%2F7Bp4TIu%2BhrRtxpx41cms0N%2BPGsDENEShzPMFBRjOc%2BTYdl%2FJo7qe9zxrnfUXOEb9sqDSfw22Gow%2FvtgGnbiOhwpAYs8icrTKKLN6F%2FLxR1XCG10q6lHHXCc97MMaheWF9biFpBH7pll3zuKYmNFrTxgKq1m8xXFV1%2BDjAb8KhqGCfBUNJkerQclezaxg4VdruuQqFtc5yBOHzI9FOSUEIfpZg%2FZ45%2FYBEC1yuxIbyOTd74lsjOS2KHgHbbybpdX0VcQcfzVeH0gTad10L3QGkTEAOajiEQ%2FvGH3BN757PfiYOP8eKuEaX93AtJiNz8cmm170dpa%2F4Tuer9Z%2BTIAG4qTvkydiw8sKYmCD5KvxQOCagGG4epDCyJ2DKzJmjA0f87UCGvXkIc6N%2FJ1%2BoffqqR1GW8HOmGZCrvoUuc0GDre2bTxi1GXgIYGeqKLvP%2FmkoEX0sYKRp3DnXDFiH%2Fb1Zzt%2BA9Wb4lNjmsn2gv0w7I2dwwY6pgH5maWmPARJ2lmFfT1lQCBEKpgR2oRpTMnnl%2FT63DYIciqR%2F7jzZUNS75O9yXdLtPae7oROQQedk96vhdXWOuOeJEKds8W%2FUq77BIVEIgoyJmnESxSCqTPkpps%2FqAfLS%2F6eEiLY31NayaRXRWuNhlOqtxCyCAdXfakdw7bifVK3R0OA0A0tEijChwH%2B7HdP27m68ftcKdamxzeIdi6loPzZLOK%2BuZ20&X-Amz-Signature=80e169d7b88b7dd9798470f3c193a7a59086bbf893950e9b353377f97f4e0b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG2LVK2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIGso33yBx9K00PE3%2FInsBFG6uxnb%2B7i21dA8bycw8moeAiAYat2VPXsvNpQrzaBNbg%2FTaqR0GhQUEg1F4eQ71OeZoCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM8nfvBf2%2FVQf8B8mmKtwD8m0pCGBIghcMUdeQW1NEuDUFTZTrGviSS7wrc1TwHa4QYkkEEQBQXjNMrj4lPLEE2C%2B9URllC61%2Bvd0QaonJglfkHHuW2s%2BzA9iJsC5kyJVUFH6d6r4oiWqDyG54SGeUZmhncE9R4i%2Bz7xyL46m%2F7Bp4TIu%2BhrRtxpx41cms0N%2BPGsDENEShzPMFBRjOc%2BTYdl%2FJo7qe9zxrnfUXOEb9sqDSfw22Gow%2FvtgGnbiOhwpAYs8icrTKKLN6F%2FLxR1XCG10q6lHHXCc97MMaheWF9biFpBH7pll3zuKYmNFrTxgKq1m8xXFV1%2BDjAb8KhqGCfBUNJkerQclezaxg4VdruuQqFtc5yBOHzI9FOSUEIfpZg%2FZ45%2FYBEC1yuxIbyOTd74lsjOS2KHgHbbybpdX0VcQcfzVeH0gTad10L3QGkTEAOajiEQ%2FvGH3BN757PfiYOP8eKuEaX93AtJiNz8cmm170dpa%2F4Tuer9Z%2BTIAG4qTvkydiw8sKYmCD5KvxQOCagGG4epDCyJ2DKzJmjA0f87UCGvXkIc6N%2FJ1%2BoffqqR1GW8HOmGZCrvoUuc0GDre2bTxi1GXgIYGeqKLvP%2FmkoEX0sYKRp3DnXDFiH%2Fb1Zzt%2BA9Wb4lNjmsn2gv0w7I2dwwY6pgH5maWmPARJ2lmFfT1lQCBEKpgR2oRpTMnnl%2FT63DYIciqR%2F7jzZUNS75O9yXdLtPae7oROQQedk96vhdXWOuOeJEKds8W%2FUq77BIVEIgoyJmnESxSCqTPkpps%2FqAfLS%2F6eEiLY31NayaRXRWuNhlOqtxCyCAdXfakdw7bifVK3R0OA0A0tEijChwH%2B7HdP27m68ftcKdamxzeIdi6loPzZLOK%2BuZ20&X-Amz-Signature=eabffecca9d24c99dd7d16fa14f86020e8ea656b25ed7137e6b077d8ba2c60fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
