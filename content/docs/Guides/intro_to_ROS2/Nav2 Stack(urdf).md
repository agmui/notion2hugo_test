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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ORBQQD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa1I%2BQVTxYer4AeRbljxMKCTskJjlaaeTvsoMBu73oIAiEAjZZi%2BzF6wQV36PDtq5iE2F4G3CimUd0IXfsyuB%2FWXPYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJbm5QD4Xs0dttZhyrcA8hhMvnymkSUzFrRhFY2YMILBEoD7RR7sAYkswZJMcoyJ0megITBPYfle6lO2Lj2Mrjf3yQtbB%2Fgxz5d%2B23BLsxWb%2B0GXsS5Og1gQdM%2BsgvDwQp%2BgbaMh3HSzSizKGi%2Fuh5wht%2Fq5fFDJOxhQIsjVpsxJ5NHiDiPtbDYk9IT2o3hKrrJCIl5yMBaXuvCGgLk7zCh0cBeevS2KskQI%2FQD%2FLyRncWJxNxJCjKZp5zFkSa5qW0OWLhaWXyV3SPaBlkHyX9HNu2vWHkOdTKBHk06Tbqq5HI51MaDnpyuSy6qc5bygPx0So2VnyG5Q1WCfOpWA77AH7U2duE7JQ3i3CcXM0kBPYb%2FsCTqi5LSjYlgNFuFRZQA0iAXWiMRqa2Jlj0sn3%2BWQfBZAa%2B0HkPx%2B5aU7BF0ADATSMa2Nj%2BxV7i2OMh2jFsrsJbZuwPgUCOhFcKmQ5xzW6i3S6AaFRk1ZqcX7ymW6WxH%2ByKNacwAG03xVsmX5NdDk3FHa0Pu%2Bv%2FoYbROcIEcmLGou4iiC2AOHK4pG1EwaWhDLwi4%2F24s6cD%2BC69ueg2Bx8xJRBu1ygF3u128xBtD%2F%2By021WgYVml%2Bb958xoC41W%2FmwLrwJ1gXExSMFtq6oKgSmQUILKwmmb0MImX9sAGOqUBxrG6T%2F9q3XvjckHdnOpZMCSTT2bjT844Zo8DhDlHgs%2BmaGFrQ7ukR1HHx4zPPdwnSPsIq3HNiiVe4Eh5dJ6dyubRm0I58PL6hwvcOeN%2FvKdBT1hOj3%2BTKb1UoYT0Qr%2Bzammgf45gcudux6v9OJc7iQpO8XZu1Czv1FyH7xrwNxXkyYvZdfR7ntsHyQ8ThjRndy7IWB9Y0xlPoAZiQo5DMOttf95W&X-Amz-Signature=d1f1bc6d2bf70627f6f653cbe0b3e18179a21276e552308de68228efee9f50f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ORBQQD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa1I%2BQVTxYer4AeRbljxMKCTskJjlaaeTvsoMBu73oIAiEAjZZi%2BzF6wQV36PDtq5iE2F4G3CimUd0IXfsyuB%2FWXPYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJbm5QD4Xs0dttZhyrcA8hhMvnymkSUzFrRhFY2YMILBEoD7RR7sAYkswZJMcoyJ0megITBPYfle6lO2Lj2Mrjf3yQtbB%2Fgxz5d%2B23BLsxWb%2B0GXsS5Og1gQdM%2BsgvDwQp%2BgbaMh3HSzSizKGi%2Fuh5wht%2Fq5fFDJOxhQIsjVpsxJ5NHiDiPtbDYk9IT2o3hKrrJCIl5yMBaXuvCGgLk7zCh0cBeevS2KskQI%2FQD%2FLyRncWJxNxJCjKZp5zFkSa5qW0OWLhaWXyV3SPaBlkHyX9HNu2vWHkOdTKBHk06Tbqq5HI51MaDnpyuSy6qc5bygPx0So2VnyG5Q1WCfOpWA77AH7U2duE7JQ3i3CcXM0kBPYb%2FsCTqi5LSjYlgNFuFRZQA0iAXWiMRqa2Jlj0sn3%2BWQfBZAa%2B0HkPx%2B5aU7BF0ADATSMa2Nj%2BxV7i2OMh2jFsrsJbZuwPgUCOhFcKmQ5xzW6i3S6AaFRk1ZqcX7ymW6WxH%2ByKNacwAG03xVsmX5NdDk3FHa0Pu%2Bv%2FoYbROcIEcmLGou4iiC2AOHK4pG1EwaWhDLwi4%2F24s6cD%2BC69ueg2Bx8xJRBu1ygF3u128xBtD%2F%2By021WgYVml%2Bb958xoC41W%2FmwLrwJ1gXExSMFtq6oKgSmQUILKwmmb0MImX9sAGOqUBxrG6T%2F9q3XvjckHdnOpZMCSTT2bjT844Zo8DhDlHgs%2BmaGFrQ7ukR1HHx4zPPdwnSPsIq3HNiiVe4Eh5dJ6dyubRm0I58PL6hwvcOeN%2FvKdBT1hOj3%2BTKb1UoYT0Qr%2Bzammgf45gcudux6v9OJc7iQpO8XZu1Czv1FyH7xrwNxXkyYvZdfR7ntsHyQ8ThjRndy7IWB9Y0xlPoAZiQo5DMOttf95W&X-Amz-Signature=d555e4d419d0b934bd8d85be157be30acc902f9b7461866c69ede93b52c48e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ORBQQD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa1I%2BQVTxYer4AeRbljxMKCTskJjlaaeTvsoMBu73oIAiEAjZZi%2BzF6wQV36PDtq5iE2F4G3CimUd0IXfsyuB%2FWXPYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJbm5QD4Xs0dttZhyrcA8hhMvnymkSUzFrRhFY2YMILBEoD7RR7sAYkswZJMcoyJ0megITBPYfle6lO2Lj2Mrjf3yQtbB%2Fgxz5d%2B23BLsxWb%2B0GXsS5Og1gQdM%2BsgvDwQp%2BgbaMh3HSzSizKGi%2Fuh5wht%2Fq5fFDJOxhQIsjVpsxJ5NHiDiPtbDYk9IT2o3hKrrJCIl5yMBaXuvCGgLk7zCh0cBeevS2KskQI%2FQD%2FLyRncWJxNxJCjKZp5zFkSa5qW0OWLhaWXyV3SPaBlkHyX9HNu2vWHkOdTKBHk06Tbqq5HI51MaDnpyuSy6qc5bygPx0So2VnyG5Q1WCfOpWA77AH7U2duE7JQ3i3CcXM0kBPYb%2FsCTqi5LSjYlgNFuFRZQA0iAXWiMRqa2Jlj0sn3%2BWQfBZAa%2B0HkPx%2B5aU7BF0ADATSMa2Nj%2BxV7i2OMh2jFsrsJbZuwPgUCOhFcKmQ5xzW6i3S6AaFRk1ZqcX7ymW6WxH%2ByKNacwAG03xVsmX5NdDk3FHa0Pu%2Bv%2FoYbROcIEcmLGou4iiC2AOHK4pG1EwaWhDLwi4%2F24s6cD%2BC69ueg2Bx8xJRBu1ygF3u128xBtD%2F%2By021WgYVml%2Bb958xoC41W%2FmwLrwJ1gXExSMFtq6oKgSmQUILKwmmb0MImX9sAGOqUBxrG6T%2F9q3XvjckHdnOpZMCSTT2bjT844Zo8DhDlHgs%2BmaGFrQ7ukR1HHx4zPPdwnSPsIq3HNiiVe4Eh5dJ6dyubRm0I58PL6hwvcOeN%2FvKdBT1hOj3%2BTKb1UoYT0Qr%2Bzammgf45gcudux6v9OJc7iQpO8XZu1Czv1FyH7xrwNxXkyYvZdfR7ntsHyQ8ThjRndy7IWB9Y0xlPoAZiQo5DMOttf95W&X-Amz-Signature=67a0083783b5a13770edcd43a2014ff0ff050b7b59a3b75b3e1c0fb1e50ecc0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ORBQQD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa1I%2BQVTxYer4AeRbljxMKCTskJjlaaeTvsoMBu73oIAiEAjZZi%2BzF6wQV36PDtq5iE2F4G3CimUd0IXfsyuB%2FWXPYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJbm5QD4Xs0dttZhyrcA8hhMvnymkSUzFrRhFY2YMILBEoD7RR7sAYkswZJMcoyJ0megITBPYfle6lO2Lj2Mrjf3yQtbB%2Fgxz5d%2B23BLsxWb%2B0GXsS5Og1gQdM%2BsgvDwQp%2BgbaMh3HSzSizKGi%2Fuh5wht%2Fq5fFDJOxhQIsjVpsxJ5NHiDiPtbDYk9IT2o3hKrrJCIl5yMBaXuvCGgLk7zCh0cBeevS2KskQI%2FQD%2FLyRncWJxNxJCjKZp5zFkSa5qW0OWLhaWXyV3SPaBlkHyX9HNu2vWHkOdTKBHk06Tbqq5HI51MaDnpyuSy6qc5bygPx0So2VnyG5Q1WCfOpWA77AH7U2duE7JQ3i3CcXM0kBPYb%2FsCTqi5LSjYlgNFuFRZQA0iAXWiMRqa2Jlj0sn3%2BWQfBZAa%2B0HkPx%2B5aU7BF0ADATSMa2Nj%2BxV7i2OMh2jFsrsJbZuwPgUCOhFcKmQ5xzW6i3S6AaFRk1ZqcX7ymW6WxH%2ByKNacwAG03xVsmX5NdDk3FHa0Pu%2Bv%2FoYbROcIEcmLGou4iiC2AOHK4pG1EwaWhDLwi4%2F24s6cD%2BC69ueg2Bx8xJRBu1ygF3u128xBtD%2F%2By021WgYVml%2Bb958xoC41W%2FmwLrwJ1gXExSMFtq6oKgSmQUILKwmmb0MImX9sAGOqUBxrG6T%2F9q3XvjckHdnOpZMCSTT2bjT844Zo8DhDlHgs%2BmaGFrQ7ukR1HHx4zPPdwnSPsIq3HNiiVe4Eh5dJ6dyubRm0I58PL6hwvcOeN%2FvKdBT1hOj3%2BTKb1UoYT0Qr%2Bzammgf45gcudux6v9OJc7iQpO8XZu1Czv1FyH7xrwNxXkyYvZdfR7ntsHyQ8ThjRndy7IWB9Y0xlPoAZiQo5DMOttf95W&X-Amz-Signature=7c03ab786c9285cd0e77a5350d03d1f82d32a95ecc25d4895dc7f96bbea51919&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ORBQQD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa1I%2BQVTxYer4AeRbljxMKCTskJjlaaeTvsoMBu73oIAiEAjZZi%2BzF6wQV36PDtq5iE2F4G3CimUd0IXfsyuB%2FWXPYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJbm5QD4Xs0dttZhyrcA8hhMvnymkSUzFrRhFY2YMILBEoD7RR7sAYkswZJMcoyJ0megITBPYfle6lO2Lj2Mrjf3yQtbB%2Fgxz5d%2B23BLsxWb%2B0GXsS5Og1gQdM%2BsgvDwQp%2BgbaMh3HSzSizKGi%2Fuh5wht%2Fq5fFDJOxhQIsjVpsxJ5NHiDiPtbDYk9IT2o3hKrrJCIl5yMBaXuvCGgLk7zCh0cBeevS2KskQI%2FQD%2FLyRncWJxNxJCjKZp5zFkSa5qW0OWLhaWXyV3SPaBlkHyX9HNu2vWHkOdTKBHk06Tbqq5HI51MaDnpyuSy6qc5bygPx0So2VnyG5Q1WCfOpWA77AH7U2duE7JQ3i3CcXM0kBPYb%2FsCTqi5LSjYlgNFuFRZQA0iAXWiMRqa2Jlj0sn3%2BWQfBZAa%2B0HkPx%2B5aU7BF0ADATSMa2Nj%2BxV7i2OMh2jFsrsJbZuwPgUCOhFcKmQ5xzW6i3S6AaFRk1ZqcX7ymW6WxH%2ByKNacwAG03xVsmX5NdDk3FHa0Pu%2Bv%2FoYbROcIEcmLGou4iiC2AOHK4pG1EwaWhDLwi4%2F24s6cD%2BC69ueg2Bx8xJRBu1ygF3u128xBtD%2F%2By021WgYVml%2Bb958xoC41W%2FmwLrwJ1gXExSMFtq6oKgSmQUILKwmmb0MImX9sAGOqUBxrG6T%2F9q3XvjckHdnOpZMCSTT2bjT844Zo8DhDlHgs%2BmaGFrQ7ukR1HHx4zPPdwnSPsIq3HNiiVe4Eh5dJ6dyubRm0I58PL6hwvcOeN%2FvKdBT1hOj3%2BTKb1UoYT0Qr%2Bzammgf45gcudux6v9OJc7iQpO8XZu1Czv1FyH7xrwNxXkyYvZdfR7ntsHyQ8ThjRndy7IWB9Y0xlPoAZiQo5DMOttf95W&X-Amz-Signature=852b110949180f155f6f929fd68e9182ac8ead053183aeb9dcfcdacedf60d877&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ORBQQD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAa1I%2BQVTxYer4AeRbljxMKCTskJjlaaeTvsoMBu73oIAiEAjZZi%2BzF6wQV36PDtq5iE2F4G3CimUd0IXfsyuB%2FWXPYqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJbm5QD4Xs0dttZhyrcA8hhMvnymkSUzFrRhFY2YMILBEoD7RR7sAYkswZJMcoyJ0megITBPYfle6lO2Lj2Mrjf3yQtbB%2Fgxz5d%2B23BLsxWb%2B0GXsS5Og1gQdM%2BsgvDwQp%2BgbaMh3HSzSizKGi%2Fuh5wht%2Fq5fFDJOxhQIsjVpsxJ5NHiDiPtbDYk9IT2o3hKrrJCIl5yMBaXuvCGgLk7zCh0cBeevS2KskQI%2FQD%2FLyRncWJxNxJCjKZp5zFkSa5qW0OWLhaWXyV3SPaBlkHyX9HNu2vWHkOdTKBHk06Tbqq5HI51MaDnpyuSy6qc5bygPx0So2VnyG5Q1WCfOpWA77AH7U2duE7JQ3i3CcXM0kBPYb%2FsCTqi5LSjYlgNFuFRZQA0iAXWiMRqa2Jlj0sn3%2BWQfBZAa%2B0HkPx%2B5aU7BF0ADATSMa2Nj%2BxV7i2OMh2jFsrsJbZuwPgUCOhFcKmQ5xzW6i3S6AaFRk1ZqcX7ymW6WxH%2ByKNacwAG03xVsmX5NdDk3FHa0Pu%2Bv%2FoYbROcIEcmLGou4iiC2AOHK4pG1EwaWhDLwi4%2F24s6cD%2BC69ueg2Bx8xJRBu1ygF3u128xBtD%2F%2By021WgYVml%2Bb958xoC41W%2FmwLrwJ1gXExSMFtq6oKgSmQUILKwmmb0MImX9sAGOqUBxrG6T%2F9q3XvjckHdnOpZMCSTT2bjT844Zo8DhDlHgs%2BmaGFrQ7ukR1HHx4zPPdwnSPsIq3HNiiVe4Eh5dJ6dyubRm0I58PL6hwvcOeN%2FvKdBT1hOj3%2BTKb1UoYT0Qr%2Bzammgf45gcudux6v9OJc7iQpO8XZu1Czv1FyH7xrwNxXkyYvZdfR7ntsHyQ8ThjRndy7IWB9Y0xlPoAZiQo5DMOttf95W&X-Amz-Signature=03151639475e7ca06a9b498a029b0a4b0404892c59f371158a6bc55945f90111&X-Amz-SignedHeaders=host&x-id=GetObject)
