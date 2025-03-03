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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPWDRJR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDET6Pyd94wmXYLEpDLUfJFDHNsWzPTHPYeqT%2FrYK8xSgIgBhlQwpNiZreNUE8O5yzr8Tk7clxV5Z95321FAdeBwqEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqTUyWsX3BNyJxdYSrcAze5jyDupz%2B4%2Ba0Nl0gFlo9atgIBFfUoe1XzEaR4EBgDAOtkbujoJsgh8vY%2B%2BpzETkqofIi7ayHRMclFOatVICxq9hbu2Daiu6xtosz3LjMXlNo9891U9gMJVAsatne6EQ%2F3foOuMqR3dg030GJu3TuO0GEztqwu4AThe1d2x7CZeBc0BQ8MnAX%2FDKLYJ12CQWEDVVKUEfeGiQqPpxdd3Pg5fFcvWnEhyiF2MHwJaa15ykSjrNgh0wxyp6JnlyWumfvVVLSFfhgs1zXLY1cG%2B7DGrAI8T4TNqDum2Vr%2BjrR%2FqalTp5XxxCM9s1IGHU7j%2BSGMAJB2g6vLxTz2%2FYcXNLtMZE2TOgxalGSnAYWevJeG8ka65X6LnIrzIodw5%2FCMCxxyfMUfX92iHZmQ0kFoKxDaup7pj%2F3AyUuoNChIWcL9W3L0aE%2FsLWiCGt4pOe1qu5lz6qrs3nTzgskhAYiXG2lDHBZdAWNhlEsicf1sGBVHtjnLWOxm22kYbOQpsMkJ3hJX%2FQ91vBkeWvthHjJoRcqDP9DdFPZomEIv0EHfsH4vm7xGZB00Zc5865NJIZfTFdAEVDTJA%2FoddR3chJn8tZ2hAuD0mf6fH03QUUB%2B5mHqUZkkpEbck1GY1%2BKEMJPbl74GOqUByCLYv8reRcZopKSnE2tGuwA%2B6msARJMiom7bp48z%2FopDXx%2F6O0Ji%2F5gIxiHO6wKh5%2BVcvHhMYijM7K%2BuHkDj58gcbFaNjKRlMgXVVZuaJbkpRBq8B7rYoZvclE0SXyGzKrvcjNhayqGB2lMiS%2FivPPdGuO3WyaXpL1OojRteOWNSWWaYaDo9qYkddQviUGIb8b1ts6LscTVo553IsDuYwdFJ0pIQ&X-Amz-Signature=62570fc1b57d1e5e48a0a42c9ff70799f9f5872bf6c26d68a4623c58f8a07d9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPWDRJR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDET6Pyd94wmXYLEpDLUfJFDHNsWzPTHPYeqT%2FrYK8xSgIgBhlQwpNiZreNUE8O5yzr8Tk7clxV5Z95321FAdeBwqEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqTUyWsX3BNyJxdYSrcAze5jyDupz%2B4%2Ba0Nl0gFlo9atgIBFfUoe1XzEaR4EBgDAOtkbujoJsgh8vY%2B%2BpzETkqofIi7ayHRMclFOatVICxq9hbu2Daiu6xtosz3LjMXlNo9891U9gMJVAsatne6EQ%2F3foOuMqR3dg030GJu3TuO0GEztqwu4AThe1d2x7CZeBc0BQ8MnAX%2FDKLYJ12CQWEDVVKUEfeGiQqPpxdd3Pg5fFcvWnEhyiF2MHwJaa15ykSjrNgh0wxyp6JnlyWumfvVVLSFfhgs1zXLY1cG%2B7DGrAI8T4TNqDum2Vr%2BjrR%2FqalTp5XxxCM9s1IGHU7j%2BSGMAJB2g6vLxTz2%2FYcXNLtMZE2TOgxalGSnAYWevJeG8ka65X6LnIrzIodw5%2FCMCxxyfMUfX92iHZmQ0kFoKxDaup7pj%2F3AyUuoNChIWcL9W3L0aE%2FsLWiCGt4pOe1qu5lz6qrs3nTzgskhAYiXG2lDHBZdAWNhlEsicf1sGBVHtjnLWOxm22kYbOQpsMkJ3hJX%2FQ91vBkeWvthHjJoRcqDP9DdFPZomEIv0EHfsH4vm7xGZB00Zc5865NJIZfTFdAEVDTJA%2FoddR3chJn8tZ2hAuD0mf6fH03QUUB%2B5mHqUZkkpEbck1GY1%2BKEMJPbl74GOqUByCLYv8reRcZopKSnE2tGuwA%2B6msARJMiom7bp48z%2FopDXx%2F6O0Ji%2F5gIxiHO6wKh5%2BVcvHhMYijM7K%2BuHkDj58gcbFaNjKRlMgXVVZuaJbkpRBq8B7rYoZvclE0SXyGzKrvcjNhayqGB2lMiS%2FivPPdGuO3WyaXpL1OojRteOWNSWWaYaDo9qYkddQviUGIb8b1ts6LscTVo553IsDuYwdFJ0pIQ&X-Amz-Signature=985dd618027baf3dfaa215b097ab9519dfe1cf64e4440b2d383174827e4996c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPWDRJR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDET6Pyd94wmXYLEpDLUfJFDHNsWzPTHPYeqT%2FrYK8xSgIgBhlQwpNiZreNUE8O5yzr8Tk7clxV5Z95321FAdeBwqEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqTUyWsX3BNyJxdYSrcAze5jyDupz%2B4%2Ba0Nl0gFlo9atgIBFfUoe1XzEaR4EBgDAOtkbujoJsgh8vY%2B%2BpzETkqofIi7ayHRMclFOatVICxq9hbu2Daiu6xtosz3LjMXlNo9891U9gMJVAsatne6EQ%2F3foOuMqR3dg030GJu3TuO0GEztqwu4AThe1d2x7CZeBc0BQ8MnAX%2FDKLYJ12CQWEDVVKUEfeGiQqPpxdd3Pg5fFcvWnEhyiF2MHwJaa15ykSjrNgh0wxyp6JnlyWumfvVVLSFfhgs1zXLY1cG%2B7DGrAI8T4TNqDum2Vr%2BjrR%2FqalTp5XxxCM9s1IGHU7j%2BSGMAJB2g6vLxTz2%2FYcXNLtMZE2TOgxalGSnAYWevJeG8ka65X6LnIrzIodw5%2FCMCxxyfMUfX92iHZmQ0kFoKxDaup7pj%2F3AyUuoNChIWcL9W3L0aE%2FsLWiCGt4pOe1qu5lz6qrs3nTzgskhAYiXG2lDHBZdAWNhlEsicf1sGBVHtjnLWOxm22kYbOQpsMkJ3hJX%2FQ91vBkeWvthHjJoRcqDP9DdFPZomEIv0EHfsH4vm7xGZB00Zc5865NJIZfTFdAEVDTJA%2FoddR3chJn8tZ2hAuD0mf6fH03QUUB%2B5mHqUZkkpEbck1GY1%2BKEMJPbl74GOqUByCLYv8reRcZopKSnE2tGuwA%2B6msARJMiom7bp48z%2FopDXx%2F6O0Ji%2F5gIxiHO6wKh5%2BVcvHhMYijM7K%2BuHkDj58gcbFaNjKRlMgXVVZuaJbkpRBq8B7rYoZvclE0SXyGzKrvcjNhayqGB2lMiS%2FivPPdGuO3WyaXpL1OojRteOWNSWWaYaDo9qYkddQviUGIb8b1ts6LscTVo553IsDuYwdFJ0pIQ&X-Amz-Signature=35edef72219cac97d0282abb9f6fe84bc16fdba0104e0a399dda4bb4fd375c41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPWDRJR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDET6Pyd94wmXYLEpDLUfJFDHNsWzPTHPYeqT%2FrYK8xSgIgBhlQwpNiZreNUE8O5yzr8Tk7clxV5Z95321FAdeBwqEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqTUyWsX3BNyJxdYSrcAze5jyDupz%2B4%2Ba0Nl0gFlo9atgIBFfUoe1XzEaR4EBgDAOtkbujoJsgh8vY%2B%2BpzETkqofIi7ayHRMclFOatVICxq9hbu2Daiu6xtosz3LjMXlNo9891U9gMJVAsatne6EQ%2F3foOuMqR3dg030GJu3TuO0GEztqwu4AThe1d2x7CZeBc0BQ8MnAX%2FDKLYJ12CQWEDVVKUEfeGiQqPpxdd3Pg5fFcvWnEhyiF2MHwJaa15ykSjrNgh0wxyp6JnlyWumfvVVLSFfhgs1zXLY1cG%2B7DGrAI8T4TNqDum2Vr%2BjrR%2FqalTp5XxxCM9s1IGHU7j%2BSGMAJB2g6vLxTz2%2FYcXNLtMZE2TOgxalGSnAYWevJeG8ka65X6LnIrzIodw5%2FCMCxxyfMUfX92iHZmQ0kFoKxDaup7pj%2F3AyUuoNChIWcL9W3L0aE%2FsLWiCGt4pOe1qu5lz6qrs3nTzgskhAYiXG2lDHBZdAWNhlEsicf1sGBVHtjnLWOxm22kYbOQpsMkJ3hJX%2FQ91vBkeWvthHjJoRcqDP9DdFPZomEIv0EHfsH4vm7xGZB00Zc5865NJIZfTFdAEVDTJA%2FoddR3chJn8tZ2hAuD0mf6fH03QUUB%2B5mHqUZkkpEbck1GY1%2BKEMJPbl74GOqUByCLYv8reRcZopKSnE2tGuwA%2B6msARJMiom7bp48z%2FopDXx%2F6O0Ji%2F5gIxiHO6wKh5%2BVcvHhMYijM7K%2BuHkDj58gcbFaNjKRlMgXVVZuaJbkpRBq8B7rYoZvclE0SXyGzKrvcjNhayqGB2lMiS%2FivPPdGuO3WyaXpL1OojRteOWNSWWaYaDo9qYkddQviUGIb8b1ts6LscTVo553IsDuYwdFJ0pIQ&X-Amz-Signature=1a521d7aa3f2dd988ddcc7c64acd5bace17cc9097066e3fa19efa69cd5d4fc49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPWDRJR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDET6Pyd94wmXYLEpDLUfJFDHNsWzPTHPYeqT%2FrYK8xSgIgBhlQwpNiZreNUE8O5yzr8Tk7clxV5Z95321FAdeBwqEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqTUyWsX3BNyJxdYSrcAze5jyDupz%2B4%2Ba0Nl0gFlo9atgIBFfUoe1XzEaR4EBgDAOtkbujoJsgh8vY%2B%2BpzETkqofIi7ayHRMclFOatVICxq9hbu2Daiu6xtosz3LjMXlNo9891U9gMJVAsatne6EQ%2F3foOuMqR3dg030GJu3TuO0GEztqwu4AThe1d2x7CZeBc0BQ8MnAX%2FDKLYJ12CQWEDVVKUEfeGiQqPpxdd3Pg5fFcvWnEhyiF2MHwJaa15ykSjrNgh0wxyp6JnlyWumfvVVLSFfhgs1zXLY1cG%2B7DGrAI8T4TNqDum2Vr%2BjrR%2FqalTp5XxxCM9s1IGHU7j%2BSGMAJB2g6vLxTz2%2FYcXNLtMZE2TOgxalGSnAYWevJeG8ka65X6LnIrzIodw5%2FCMCxxyfMUfX92iHZmQ0kFoKxDaup7pj%2F3AyUuoNChIWcL9W3L0aE%2FsLWiCGt4pOe1qu5lz6qrs3nTzgskhAYiXG2lDHBZdAWNhlEsicf1sGBVHtjnLWOxm22kYbOQpsMkJ3hJX%2FQ91vBkeWvthHjJoRcqDP9DdFPZomEIv0EHfsH4vm7xGZB00Zc5865NJIZfTFdAEVDTJA%2FoddR3chJn8tZ2hAuD0mf6fH03QUUB%2B5mHqUZkkpEbck1GY1%2BKEMJPbl74GOqUByCLYv8reRcZopKSnE2tGuwA%2B6msARJMiom7bp48z%2FopDXx%2F6O0Ji%2F5gIxiHO6wKh5%2BVcvHhMYijM7K%2BuHkDj58gcbFaNjKRlMgXVVZuaJbkpRBq8B7rYoZvclE0SXyGzKrvcjNhayqGB2lMiS%2FivPPdGuO3WyaXpL1OojRteOWNSWWaYaDo9qYkddQviUGIb8b1ts6LscTVo553IsDuYwdFJ0pIQ&X-Amz-Signature=cf2a602186620858747ef9e4d8238217713408600f2ef0a99a1916fe6e9f16de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DPWDRJR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDET6Pyd94wmXYLEpDLUfJFDHNsWzPTHPYeqT%2FrYK8xSgIgBhlQwpNiZreNUE8O5yzr8Tk7clxV5Z95321FAdeBwqEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqTUyWsX3BNyJxdYSrcAze5jyDupz%2B4%2Ba0Nl0gFlo9atgIBFfUoe1XzEaR4EBgDAOtkbujoJsgh8vY%2B%2BpzETkqofIi7ayHRMclFOatVICxq9hbu2Daiu6xtosz3LjMXlNo9891U9gMJVAsatne6EQ%2F3foOuMqR3dg030GJu3TuO0GEztqwu4AThe1d2x7CZeBc0BQ8MnAX%2FDKLYJ12CQWEDVVKUEfeGiQqPpxdd3Pg5fFcvWnEhyiF2MHwJaa15ykSjrNgh0wxyp6JnlyWumfvVVLSFfhgs1zXLY1cG%2B7DGrAI8T4TNqDum2Vr%2BjrR%2FqalTp5XxxCM9s1IGHU7j%2BSGMAJB2g6vLxTz2%2FYcXNLtMZE2TOgxalGSnAYWevJeG8ka65X6LnIrzIodw5%2FCMCxxyfMUfX92iHZmQ0kFoKxDaup7pj%2F3AyUuoNChIWcL9W3L0aE%2FsLWiCGt4pOe1qu5lz6qrs3nTzgskhAYiXG2lDHBZdAWNhlEsicf1sGBVHtjnLWOxm22kYbOQpsMkJ3hJX%2FQ91vBkeWvthHjJoRcqDP9DdFPZomEIv0EHfsH4vm7xGZB00Zc5865NJIZfTFdAEVDTJA%2FoddR3chJn8tZ2hAuD0mf6fH03QUUB%2B5mHqUZkkpEbck1GY1%2BKEMJPbl74GOqUByCLYv8reRcZopKSnE2tGuwA%2B6msARJMiom7bp48z%2FopDXx%2F6O0Ji%2F5gIxiHO6wKh5%2BVcvHhMYijM7K%2BuHkDj58gcbFaNjKRlMgXVVZuaJbkpRBq8B7rYoZvclE0SXyGzKrvcjNhayqGB2lMiS%2FivPPdGuO3WyaXpL1OojRteOWNSWWaYaDo9qYkddQviUGIb8b1ts6LscTVo553IsDuYwdFJ0pIQ&X-Amz-Signature=1be3f428e151aa1faa89119c5dae6a736cba38a19e01f6b826c9538e7165d9a2&X-Amz-SignedHeaders=host&x-id=GetObject)
