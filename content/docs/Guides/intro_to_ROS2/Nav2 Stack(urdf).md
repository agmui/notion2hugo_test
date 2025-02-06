---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37D2Y7O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIANT2SyvsD4L3vZ048Axb5BVbY3blU6CCV8idtjbdbDBAiEA6PfMfZDbMnVhrtPGNrDgHaO6CWeYevce%2FSxfmZCCXT8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGhp80Cg4luDtjuguyrcA8CxTut286cYnF2dwot3E1qNbeQsjcRpmdZtUkpcWoryi%2BblX6pvq8VaLAh7qTGCOctj%2Fuvl600IA6HM12Ut5lS4Jdeq3qdhNj%2BNZccBGfbanpYmbiQgOEyNE7Pi%2FpK8yahVoQsI%2BRhlGvKP6EWHf5jAi6bgHOHZoizOa5HPOJGhukTlf%2F7gY%2FEzxkcKy9aHHMsBqsjs3WoVRZcECkefPNqxJXIFhBWsWxNjyx2SLhkIVRt5%2Bk8Rt3CtdYBQPW84%2B8PXuAtu5Z8n4sqH8%2FzY28NY2wsQk5TpNikrFk1Xliv92AsHBGMVRAUIlKoG3ecS5neyBLf3k9CY0fk%2FN140IvJSWRh2Rz5es1x1vmoksVtlj%2F6uNenEL6%2FDhFldjgTpg67b4iKImxFFMVvyxSvhqRohWFn8yGEH059rIjXNUPZZb%2FE07EPSs8gZ%2BOUcysqKyrulS03POrdMCO3aYbUTCPVRIa3Pi%2BdxGgCCQ3995dT%2F%2FbhLsbeJIS4J%2FKqvKN94kIX%2BZSB3oXZVLT51nLgcuejRBlz19R0aeQ8ofmaU3sDLjAIMDs2hKF9uAIkB9qdxBJMvG%2Bn5No3PO4dPZRMjVn9eqJ1yUDPkcQu%2BoULlWfwNprHD9bEc0lRPoiTcMIPtj70GOqUBD3bmoKU6hTUwoYuCFl8LrInsj0fvszGDRwBgwSzgpBd%2B6jFD9h%2FKIBkSzDJfwGg4IZ78zYuh2YmtDPecWLIyZXumt0ud7QQ0Tm5O2W89uBAWPxh1Gjr35t8P3pIaVK8eSNcItnnpe1zkkUFTpm0cgkxKOJe%2Bpfk5LeS%2FKWiZfiZozHKslvK6XQpaTpRCAtzUEGF6Rx2d%2FJvUaDb2zywyb9iWwYXv&X-Amz-Signature=1b76a687532b4a3b1cba50cd06213faf8dd80d601830952bb4d812033c8e6caa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37D2Y7O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIANT2SyvsD4L3vZ048Axb5BVbY3blU6CCV8idtjbdbDBAiEA6PfMfZDbMnVhrtPGNrDgHaO6CWeYevce%2FSxfmZCCXT8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGhp80Cg4luDtjuguyrcA8CxTut286cYnF2dwot3E1qNbeQsjcRpmdZtUkpcWoryi%2BblX6pvq8VaLAh7qTGCOctj%2Fuvl600IA6HM12Ut5lS4Jdeq3qdhNj%2BNZccBGfbanpYmbiQgOEyNE7Pi%2FpK8yahVoQsI%2BRhlGvKP6EWHf5jAi6bgHOHZoizOa5HPOJGhukTlf%2F7gY%2FEzxkcKy9aHHMsBqsjs3WoVRZcECkefPNqxJXIFhBWsWxNjyx2SLhkIVRt5%2Bk8Rt3CtdYBQPW84%2B8PXuAtu5Z8n4sqH8%2FzY28NY2wsQk5TpNikrFk1Xliv92AsHBGMVRAUIlKoG3ecS5neyBLf3k9CY0fk%2FN140IvJSWRh2Rz5es1x1vmoksVtlj%2F6uNenEL6%2FDhFldjgTpg67b4iKImxFFMVvyxSvhqRohWFn8yGEH059rIjXNUPZZb%2FE07EPSs8gZ%2BOUcysqKyrulS03POrdMCO3aYbUTCPVRIa3Pi%2BdxGgCCQ3995dT%2F%2FbhLsbeJIS4J%2FKqvKN94kIX%2BZSB3oXZVLT51nLgcuejRBlz19R0aeQ8ofmaU3sDLjAIMDs2hKF9uAIkB9qdxBJMvG%2Bn5No3PO4dPZRMjVn9eqJ1yUDPkcQu%2BoULlWfwNprHD9bEc0lRPoiTcMIPtj70GOqUBD3bmoKU6hTUwoYuCFl8LrInsj0fvszGDRwBgwSzgpBd%2B6jFD9h%2FKIBkSzDJfwGg4IZ78zYuh2YmtDPecWLIyZXumt0ud7QQ0Tm5O2W89uBAWPxh1Gjr35t8P3pIaVK8eSNcItnnpe1zkkUFTpm0cgkxKOJe%2Bpfk5LeS%2FKWiZfiZozHKslvK6XQpaTpRCAtzUEGF6Rx2d%2FJvUaDb2zywyb9iWwYXv&X-Amz-Signature=2f3cf0b0b27f59e06b73a65cd3d60f7b468208b4121746bc9c4142adc9b4f651&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37D2Y7O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIANT2SyvsD4L3vZ048Axb5BVbY3blU6CCV8idtjbdbDBAiEA6PfMfZDbMnVhrtPGNrDgHaO6CWeYevce%2FSxfmZCCXT8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGhp80Cg4luDtjuguyrcA8CxTut286cYnF2dwot3E1qNbeQsjcRpmdZtUkpcWoryi%2BblX6pvq8VaLAh7qTGCOctj%2Fuvl600IA6HM12Ut5lS4Jdeq3qdhNj%2BNZccBGfbanpYmbiQgOEyNE7Pi%2FpK8yahVoQsI%2BRhlGvKP6EWHf5jAi6bgHOHZoizOa5HPOJGhukTlf%2F7gY%2FEzxkcKy9aHHMsBqsjs3WoVRZcECkefPNqxJXIFhBWsWxNjyx2SLhkIVRt5%2Bk8Rt3CtdYBQPW84%2B8PXuAtu5Z8n4sqH8%2FzY28NY2wsQk5TpNikrFk1Xliv92AsHBGMVRAUIlKoG3ecS5neyBLf3k9CY0fk%2FN140IvJSWRh2Rz5es1x1vmoksVtlj%2F6uNenEL6%2FDhFldjgTpg67b4iKImxFFMVvyxSvhqRohWFn8yGEH059rIjXNUPZZb%2FE07EPSs8gZ%2BOUcysqKyrulS03POrdMCO3aYbUTCPVRIa3Pi%2BdxGgCCQ3995dT%2F%2FbhLsbeJIS4J%2FKqvKN94kIX%2BZSB3oXZVLT51nLgcuejRBlz19R0aeQ8ofmaU3sDLjAIMDs2hKF9uAIkB9qdxBJMvG%2Bn5No3PO4dPZRMjVn9eqJ1yUDPkcQu%2BoULlWfwNprHD9bEc0lRPoiTcMIPtj70GOqUBD3bmoKU6hTUwoYuCFl8LrInsj0fvszGDRwBgwSzgpBd%2B6jFD9h%2FKIBkSzDJfwGg4IZ78zYuh2YmtDPecWLIyZXumt0ud7QQ0Tm5O2W89uBAWPxh1Gjr35t8P3pIaVK8eSNcItnnpe1zkkUFTpm0cgkxKOJe%2Bpfk5LeS%2FKWiZfiZozHKslvK6XQpaTpRCAtzUEGF6Rx2d%2FJvUaDb2zywyb9iWwYXv&X-Amz-Signature=928c48c034ac882af3b665e41f760b4e22ed9cb1a541a3272b5812e681becbbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37D2Y7O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIANT2SyvsD4L3vZ048Axb5BVbY3blU6CCV8idtjbdbDBAiEA6PfMfZDbMnVhrtPGNrDgHaO6CWeYevce%2FSxfmZCCXT8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGhp80Cg4luDtjuguyrcA8CxTut286cYnF2dwot3E1qNbeQsjcRpmdZtUkpcWoryi%2BblX6pvq8VaLAh7qTGCOctj%2Fuvl600IA6HM12Ut5lS4Jdeq3qdhNj%2BNZccBGfbanpYmbiQgOEyNE7Pi%2FpK8yahVoQsI%2BRhlGvKP6EWHf5jAi6bgHOHZoizOa5HPOJGhukTlf%2F7gY%2FEzxkcKy9aHHMsBqsjs3WoVRZcECkefPNqxJXIFhBWsWxNjyx2SLhkIVRt5%2Bk8Rt3CtdYBQPW84%2B8PXuAtu5Z8n4sqH8%2FzY28NY2wsQk5TpNikrFk1Xliv92AsHBGMVRAUIlKoG3ecS5neyBLf3k9CY0fk%2FN140IvJSWRh2Rz5es1x1vmoksVtlj%2F6uNenEL6%2FDhFldjgTpg67b4iKImxFFMVvyxSvhqRohWFn8yGEH059rIjXNUPZZb%2FE07EPSs8gZ%2BOUcysqKyrulS03POrdMCO3aYbUTCPVRIa3Pi%2BdxGgCCQ3995dT%2F%2FbhLsbeJIS4J%2FKqvKN94kIX%2BZSB3oXZVLT51nLgcuejRBlz19R0aeQ8ofmaU3sDLjAIMDs2hKF9uAIkB9qdxBJMvG%2Bn5No3PO4dPZRMjVn9eqJ1yUDPkcQu%2BoULlWfwNprHD9bEc0lRPoiTcMIPtj70GOqUBD3bmoKU6hTUwoYuCFl8LrInsj0fvszGDRwBgwSzgpBd%2B6jFD9h%2FKIBkSzDJfwGg4IZ78zYuh2YmtDPecWLIyZXumt0ud7QQ0Tm5O2W89uBAWPxh1Gjr35t8P3pIaVK8eSNcItnnpe1zkkUFTpm0cgkxKOJe%2Bpfk5LeS%2FKWiZfiZozHKslvK6XQpaTpRCAtzUEGF6Rx2d%2FJvUaDb2zywyb9iWwYXv&X-Amz-Signature=2e2dd0e8944a5d7ee197b73f1ec543c1e5c64365eacd37d3ac860401684492fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37D2Y7O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIANT2SyvsD4L3vZ048Axb5BVbY3blU6CCV8idtjbdbDBAiEA6PfMfZDbMnVhrtPGNrDgHaO6CWeYevce%2FSxfmZCCXT8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGhp80Cg4luDtjuguyrcA8CxTut286cYnF2dwot3E1qNbeQsjcRpmdZtUkpcWoryi%2BblX6pvq8VaLAh7qTGCOctj%2Fuvl600IA6HM12Ut5lS4Jdeq3qdhNj%2BNZccBGfbanpYmbiQgOEyNE7Pi%2FpK8yahVoQsI%2BRhlGvKP6EWHf5jAi6bgHOHZoizOa5HPOJGhukTlf%2F7gY%2FEzxkcKy9aHHMsBqsjs3WoVRZcECkefPNqxJXIFhBWsWxNjyx2SLhkIVRt5%2Bk8Rt3CtdYBQPW84%2B8PXuAtu5Z8n4sqH8%2FzY28NY2wsQk5TpNikrFk1Xliv92AsHBGMVRAUIlKoG3ecS5neyBLf3k9CY0fk%2FN140IvJSWRh2Rz5es1x1vmoksVtlj%2F6uNenEL6%2FDhFldjgTpg67b4iKImxFFMVvyxSvhqRohWFn8yGEH059rIjXNUPZZb%2FE07EPSs8gZ%2BOUcysqKyrulS03POrdMCO3aYbUTCPVRIa3Pi%2BdxGgCCQ3995dT%2F%2FbhLsbeJIS4J%2FKqvKN94kIX%2BZSB3oXZVLT51nLgcuejRBlz19R0aeQ8ofmaU3sDLjAIMDs2hKF9uAIkB9qdxBJMvG%2Bn5No3PO4dPZRMjVn9eqJ1yUDPkcQu%2BoULlWfwNprHD9bEc0lRPoiTcMIPtj70GOqUBD3bmoKU6hTUwoYuCFl8LrInsj0fvszGDRwBgwSzgpBd%2B6jFD9h%2FKIBkSzDJfwGg4IZ78zYuh2YmtDPecWLIyZXumt0ud7QQ0Tm5O2W89uBAWPxh1Gjr35t8P3pIaVK8eSNcItnnpe1zkkUFTpm0cgkxKOJe%2Bpfk5LeS%2FKWiZfiZozHKslvK6XQpaTpRCAtzUEGF6Rx2d%2FJvUaDb2zywyb9iWwYXv&X-Amz-Signature=12c9785ef309fb530edefd8b37c1d2ffef4ed678f1dbce8e22b06d059b4c04e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R37D2Y7O%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIANT2SyvsD4L3vZ048Axb5BVbY3blU6CCV8idtjbdbDBAiEA6PfMfZDbMnVhrtPGNrDgHaO6CWeYevce%2FSxfmZCCXT8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGhp80Cg4luDtjuguyrcA8CxTut286cYnF2dwot3E1qNbeQsjcRpmdZtUkpcWoryi%2BblX6pvq8VaLAh7qTGCOctj%2Fuvl600IA6HM12Ut5lS4Jdeq3qdhNj%2BNZccBGfbanpYmbiQgOEyNE7Pi%2FpK8yahVoQsI%2BRhlGvKP6EWHf5jAi6bgHOHZoizOa5HPOJGhukTlf%2F7gY%2FEzxkcKy9aHHMsBqsjs3WoVRZcECkefPNqxJXIFhBWsWxNjyx2SLhkIVRt5%2Bk8Rt3CtdYBQPW84%2B8PXuAtu5Z8n4sqH8%2FzY28NY2wsQk5TpNikrFk1Xliv92AsHBGMVRAUIlKoG3ecS5neyBLf3k9CY0fk%2FN140IvJSWRh2Rz5es1x1vmoksVtlj%2F6uNenEL6%2FDhFldjgTpg67b4iKImxFFMVvyxSvhqRohWFn8yGEH059rIjXNUPZZb%2FE07EPSs8gZ%2BOUcysqKyrulS03POrdMCO3aYbUTCPVRIa3Pi%2BdxGgCCQ3995dT%2F%2FbhLsbeJIS4J%2FKqvKN94kIX%2BZSB3oXZVLT51nLgcuejRBlz19R0aeQ8ofmaU3sDLjAIMDs2hKF9uAIkB9qdxBJMvG%2Bn5No3PO4dPZRMjVn9eqJ1yUDPkcQu%2BoULlWfwNprHD9bEc0lRPoiTcMIPtj70GOqUBD3bmoKU6hTUwoYuCFl8LrInsj0fvszGDRwBgwSzgpBd%2B6jFD9h%2FKIBkSzDJfwGg4IZ78zYuh2YmtDPecWLIyZXumt0ud7QQ0Tm5O2W89uBAWPxh1Gjr35t8P3pIaVK8eSNcItnnpe1zkkUFTpm0cgkxKOJe%2Bpfk5LeS%2FKWiZfiZozHKslvK6XQpaTpRCAtzUEGF6Rx2d%2FJvUaDb2zywyb9iWwYXv&X-Amz-Signature=673f5f7927ff86e22036a5328ca7b5b92390eaae36662966096afd0cf1b8f04b&X-Amz-SignedHeaders=host&x-id=GetObject)
