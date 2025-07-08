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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGLV5U7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZY2BCtQS0fCKBnX25FSsAHirH2lFBdFcPsfiyKCBmYAiEA1jEZ7V6qwgFWSJoqiT1Id%2FORzWeK8Go8jJxSQChhOLUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY5gEqbBhLc7gjMeircAxI5GHiGaA%2B1IN6tUR14PvTVTv5LVxr0D8qHFz1Rpb9Hb5PAEJ%2Bueg3WFgbVqSSCmvl8oTTKqmJy4HknQa0jkkuOZqUZH5ZiSpqU3IAccCXuo17S7DX%2BGlIN0dIY7QUI4fn7SNWAHek2OaPtwE%2F1ish3pYTF31lqApeiE9tyevzemalng3bUHafTdjP3uzkwfjqVRlfCm2e48lUW%2FEVET3JaEC83En4PZb1LrSW3tp%2BrQU68qV%2F6bhFxTi5l8jwoDe8Ag2MnzAUD5zgI7NbGmDxJIg8BdTyZ%2BS25HT6TC9D9eAI8e%2FAOmHAea7jQ%2B0XFFpO%2B86toRLNuQumEBy3jDidEvUwH9o5US2hMqJiCtiCCDtR9sK8ua7N9AZD86qh5pDBaqysyKBQj4o5YC42%2Fs3BNQBS%2FfC%2B2cX3BvfO6lNPeQCEkizYKqP9m02ibRMyvZU8yiZaRfNHYc8IPd4hocHgi8%2BoHEvgZNTRnGbWe4%2B%2ButFTlH3F3k7ZSqHCRySS3BLWQhOP5TpZyVi56q57%2FU%2F9ex8AezAtphe8JVc%2Bjf6cw8iQwybJHU2uUyfOslbS1eyMGgcCIeKEnTv4a4rApQ55ahfW7Gep3DpDyR%2BwA8NyK3DJjR%2BGdR3BowofRMIGEtsMGOqUBVegAK3266MiGj56BKz4YKcllz%2Bgl1NA5pBLpYrBflLt%2BnFk6pUvVhhwD5TIB9QpVP16PMvcRvBONA3VXCandVBtEXDMoaJpQ58excKK9%2FXtZaxPBwbdqFqlFABdheHFk0j%2FXWfbD5sbgYiYokWvMydDEQ7Mt4zHZ1HpYcv684gS7RAxEx9rUMHe%2BfMZu9kia5X%2FzdEQykEEUr3GLvB%2F4s7Yoa3yI&X-Amz-Signature=7146bae5d72eaa0f4d89f332368e6bf513a9436d4bb8679f6d5386916b27964e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGLV5U7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZY2BCtQS0fCKBnX25FSsAHirH2lFBdFcPsfiyKCBmYAiEA1jEZ7V6qwgFWSJoqiT1Id%2FORzWeK8Go8jJxSQChhOLUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY5gEqbBhLc7gjMeircAxI5GHiGaA%2B1IN6tUR14PvTVTv5LVxr0D8qHFz1Rpb9Hb5PAEJ%2Bueg3WFgbVqSSCmvl8oTTKqmJy4HknQa0jkkuOZqUZH5ZiSpqU3IAccCXuo17S7DX%2BGlIN0dIY7QUI4fn7SNWAHek2OaPtwE%2F1ish3pYTF31lqApeiE9tyevzemalng3bUHafTdjP3uzkwfjqVRlfCm2e48lUW%2FEVET3JaEC83En4PZb1LrSW3tp%2BrQU68qV%2F6bhFxTi5l8jwoDe8Ag2MnzAUD5zgI7NbGmDxJIg8BdTyZ%2BS25HT6TC9D9eAI8e%2FAOmHAea7jQ%2B0XFFpO%2B86toRLNuQumEBy3jDidEvUwH9o5US2hMqJiCtiCCDtR9sK8ua7N9AZD86qh5pDBaqysyKBQj4o5YC42%2Fs3BNQBS%2FfC%2B2cX3BvfO6lNPeQCEkizYKqP9m02ibRMyvZU8yiZaRfNHYc8IPd4hocHgi8%2BoHEvgZNTRnGbWe4%2B%2ButFTlH3F3k7ZSqHCRySS3BLWQhOP5TpZyVi56q57%2FU%2F9ex8AezAtphe8JVc%2Bjf6cw8iQwybJHU2uUyfOslbS1eyMGgcCIeKEnTv4a4rApQ55ahfW7Gep3DpDyR%2BwA8NyK3DJjR%2BGdR3BowofRMIGEtsMGOqUBVegAK3266MiGj56BKz4YKcllz%2Bgl1NA5pBLpYrBflLt%2BnFk6pUvVhhwD5TIB9QpVP16PMvcRvBONA3VXCandVBtEXDMoaJpQ58excKK9%2FXtZaxPBwbdqFqlFABdheHFk0j%2FXWfbD5sbgYiYokWvMydDEQ7Mt4zHZ1HpYcv684gS7RAxEx9rUMHe%2BfMZu9kia5X%2FzdEQykEEUr3GLvB%2F4s7Yoa3yI&X-Amz-Signature=870599679dd081ac0b01c8c755f1b8a8c56393ba802b8e7badf73fd53163ce56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGLV5U7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZY2BCtQS0fCKBnX25FSsAHirH2lFBdFcPsfiyKCBmYAiEA1jEZ7V6qwgFWSJoqiT1Id%2FORzWeK8Go8jJxSQChhOLUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY5gEqbBhLc7gjMeircAxI5GHiGaA%2B1IN6tUR14PvTVTv5LVxr0D8qHFz1Rpb9Hb5PAEJ%2Bueg3WFgbVqSSCmvl8oTTKqmJy4HknQa0jkkuOZqUZH5ZiSpqU3IAccCXuo17S7DX%2BGlIN0dIY7QUI4fn7SNWAHek2OaPtwE%2F1ish3pYTF31lqApeiE9tyevzemalng3bUHafTdjP3uzkwfjqVRlfCm2e48lUW%2FEVET3JaEC83En4PZb1LrSW3tp%2BrQU68qV%2F6bhFxTi5l8jwoDe8Ag2MnzAUD5zgI7NbGmDxJIg8BdTyZ%2BS25HT6TC9D9eAI8e%2FAOmHAea7jQ%2B0XFFpO%2B86toRLNuQumEBy3jDidEvUwH9o5US2hMqJiCtiCCDtR9sK8ua7N9AZD86qh5pDBaqysyKBQj4o5YC42%2Fs3BNQBS%2FfC%2B2cX3BvfO6lNPeQCEkizYKqP9m02ibRMyvZU8yiZaRfNHYc8IPd4hocHgi8%2BoHEvgZNTRnGbWe4%2B%2ButFTlH3F3k7ZSqHCRySS3BLWQhOP5TpZyVi56q57%2FU%2F9ex8AezAtphe8JVc%2Bjf6cw8iQwybJHU2uUyfOslbS1eyMGgcCIeKEnTv4a4rApQ55ahfW7Gep3DpDyR%2BwA8NyK3DJjR%2BGdR3BowofRMIGEtsMGOqUBVegAK3266MiGj56BKz4YKcllz%2Bgl1NA5pBLpYrBflLt%2BnFk6pUvVhhwD5TIB9QpVP16PMvcRvBONA3VXCandVBtEXDMoaJpQ58excKK9%2FXtZaxPBwbdqFqlFABdheHFk0j%2FXWfbD5sbgYiYokWvMydDEQ7Mt4zHZ1HpYcv684gS7RAxEx9rUMHe%2BfMZu9kia5X%2FzdEQykEEUr3GLvB%2F4s7Yoa3yI&X-Amz-Signature=f020202f96b972a17dfb81a83f589176bf826bab5d53c269a261c5f9abc12d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGLV5U7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZY2BCtQS0fCKBnX25FSsAHirH2lFBdFcPsfiyKCBmYAiEA1jEZ7V6qwgFWSJoqiT1Id%2FORzWeK8Go8jJxSQChhOLUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY5gEqbBhLc7gjMeircAxI5GHiGaA%2B1IN6tUR14PvTVTv5LVxr0D8qHFz1Rpb9Hb5PAEJ%2Bueg3WFgbVqSSCmvl8oTTKqmJy4HknQa0jkkuOZqUZH5ZiSpqU3IAccCXuo17S7DX%2BGlIN0dIY7QUI4fn7SNWAHek2OaPtwE%2F1ish3pYTF31lqApeiE9tyevzemalng3bUHafTdjP3uzkwfjqVRlfCm2e48lUW%2FEVET3JaEC83En4PZb1LrSW3tp%2BrQU68qV%2F6bhFxTi5l8jwoDe8Ag2MnzAUD5zgI7NbGmDxJIg8BdTyZ%2BS25HT6TC9D9eAI8e%2FAOmHAea7jQ%2B0XFFpO%2B86toRLNuQumEBy3jDidEvUwH9o5US2hMqJiCtiCCDtR9sK8ua7N9AZD86qh5pDBaqysyKBQj4o5YC42%2Fs3BNQBS%2FfC%2B2cX3BvfO6lNPeQCEkizYKqP9m02ibRMyvZU8yiZaRfNHYc8IPd4hocHgi8%2BoHEvgZNTRnGbWe4%2B%2ButFTlH3F3k7ZSqHCRySS3BLWQhOP5TpZyVi56q57%2FU%2F9ex8AezAtphe8JVc%2Bjf6cw8iQwybJHU2uUyfOslbS1eyMGgcCIeKEnTv4a4rApQ55ahfW7Gep3DpDyR%2BwA8NyK3DJjR%2BGdR3BowofRMIGEtsMGOqUBVegAK3266MiGj56BKz4YKcllz%2Bgl1NA5pBLpYrBflLt%2BnFk6pUvVhhwD5TIB9QpVP16PMvcRvBONA3VXCandVBtEXDMoaJpQ58excKK9%2FXtZaxPBwbdqFqlFABdheHFk0j%2FXWfbD5sbgYiYokWvMydDEQ7Mt4zHZ1HpYcv684gS7RAxEx9rUMHe%2BfMZu9kia5X%2FzdEQykEEUr3GLvB%2F4s7Yoa3yI&X-Amz-Signature=7f0795d031cecdd0c286826931792041e57d67f5599869b96bf263f6357df32b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGLV5U7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZY2BCtQS0fCKBnX25FSsAHirH2lFBdFcPsfiyKCBmYAiEA1jEZ7V6qwgFWSJoqiT1Id%2FORzWeK8Go8jJxSQChhOLUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY5gEqbBhLc7gjMeircAxI5GHiGaA%2B1IN6tUR14PvTVTv5LVxr0D8qHFz1Rpb9Hb5PAEJ%2Bueg3WFgbVqSSCmvl8oTTKqmJy4HknQa0jkkuOZqUZH5ZiSpqU3IAccCXuo17S7DX%2BGlIN0dIY7QUI4fn7SNWAHek2OaPtwE%2F1ish3pYTF31lqApeiE9tyevzemalng3bUHafTdjP3uzkwfjqVRlfCm2e48lUW%2FEVET3JaEC83En4PZb1LrSW3tp%2BrQU68qV%2F6bhFxTi5l8jwoDe8Ag2MnzAUD5zgI7NbGmDxJIg8BdTyZ%2BS25HT6TC9D9eAI8e%2FAOmHAea7jQ%2B0XFFpO%2B86toRLNuQumEBy3jDidEvUwH9o5US2hMqJiCtiCCDtR9sK8ua7N9AZD86qh5pDBaqysyKBQj4o5YC42%2Fs3BNQBS%2FfC%2B2cX3BvfO6lNPeQCEkizYKqP9m02ibRMyvZU8yiZaRfNHYc8IPd4hocHgi8%2BoHEvgZNTRnGbWe4%2B%2ButFTlH3F3k7ZSqHCRySS3BLWQhOP5TpZyVi56q57%2FU%2F9ex8AezAtphe8JVc%2Bjf6cw8iQwybJHU2uUyfOslbS1eyMGgcCIeKEnTv4a4rApQ55ahfW7Gep3DpDyR%2BwA8NyK3DJjR%2BGdR3BowofRMIGEtsMGOqUBVegAK3266MiGj56BKz4YKcllz%2Bgl1NA5pBLpYrBflLt%2BnFk6pUvVhhwD5TIB9QpVP16PMvcRvBONA3VXCandVBtEXDMoaJpQ58excKK9%2FXtZaxPBwbdqFqlFABdheHFk0j%2FXWfbD5sbgYiYokWvMydDEQ7Mt4zHZ1HpYcv684gS7RAxEx9rUMHe%2BfMZu9kia5X%2FzdEQykEEUr3GLvB%2F4s7Yoa3yI&X-Amz-Signature=33552cc2f4642016c11934b084f9abc74765111bfd24ad957030ab721ac9f6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGLV5U7%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZY2BCtQS0fCKBnX25FSsAHirH2lFBdFcPsfiyKCBmYAiEA1jEZ7V6qwgFWSJoqiT1Id%2FORzWeK8Go8jJxSQChhOLUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOY5gEqbBhLc7gjMeircAxI5GHiGaA%2B1IN6tUR14PvTVTv5LVxr0D8qHFz1Rpb9Hb5PAEJ%2Bueg3WFgbVqSSCmvl8oTTKqmJy4HknQa0jkkuOZqUZH5ZiSpqU3IAccCXuo17S7DX%2BGlIN0dIY7QUI4fn7SNWAHek2OaPtwE%2F1ish3pYTF31lqApeiE9tyevzemalng3bUHafTdjP3uzkwfjqVRlfCm2e48lUW%2FEVET3JaEC83En4PZb1LrSW3tp%2BrQU68qV%2F6bhFxTi5l8jwoDe8Ag2MnzAUD5zgI7NbGmDxJIg8BdTyZ%2BS25HT6TC9D9eAI8e%2FAOmHAea7jQ%2B0XFFpO%2B86toRLNuQumEBy3jDidEvUwH9o5US2hMqJiCtiCCDtR9sK8ua7N9AZD86qh5pDBaqysyKBQj4o5YC42%2Fs3BNQBS%2FfC%2B2cX3BvfO6lNPeQCEkizYKqP9m02ibRMyvZU8yiZaRfNHYc8IPd4hocHgi8%2BoHEvgZNTRnGbWe4%2B%2ButFTlH3F3k7ZSqHCRySS3BLWQhOP5TpZyVi56q57%2FU%2F9ex8AezAtphe8JVc%2Bjf6cw8iQwybJHU2uUyfOslbS1eyMGgcCIeKEnTv4a4rApQ55ahfW7Gep3DpDyR%2BwA8NyK3DJjR%2BGdR3BowofRMIGEtsMGOqUBVegAK3266MiGj56BKz4YKcllz%2Bgl1NA5pBLpYrBflLt%2BnFk6pUvVhhwD5TIB9QpVP16PMvcRvBONA3VXCandVBtEXDMoaJpQ58excKK9%2FXtZaxPBwbdqFqlFABdheHFk0j%2FXWfbD5sbgYiYokWvMydDEQ7Mt4zHZ1HpYcv684gS7RAxEx9rUMHe%2BfMZu9kia5X%2FzdEQykEEUr3GLvB%2F4s7Yoa3yI&X-Amz-Signature=2f7bf9842503615483a1f8b3dbdfc97ce76c3cccf0d37e02a9a0d4b8bb38d937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
