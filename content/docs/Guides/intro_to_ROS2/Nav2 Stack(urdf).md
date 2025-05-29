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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKZT4ND%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6lJBOh54qww0fdAENDHlvOoA8xKo%2F2lXOqvyr385Q3AiEAmjWBBZ5EWzh5Qti0pYDLfF2SU6WV1Zx1ALqOgluPzJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzcEkgidEGaSxeUSCrcA4qTks8Ld6BHU0uGaaMQg56OjHFtngyl%2FEnIXNerqvfTVl1fM1kqH9%2FK3SzgkM2bjabsGDc%2FWfEY9BkBJ5VY84sV8%2FDybqQxnJevxWSPuDOZAsmYKMnoqf01DtPqwKm18ZNGErZpiat6mjSXs5XYruSgKFiVkXNDuNRJxSvDhPsqU6jZlnqSrY1HleBrl0GKpsTpcp0T0BoONiH79kpy%2BIyPWrwGiinTA4pLmnzoYFh%2FTWcLse8GL1C%2Fr2lvM0YHs%2FhLAZ8%2FJ8tSXzJaYFE4qLpVYAWsnDeVLYWFTUwhyyV3oN2OQu9YD20xt7LtanRPz47htreR2pr80UOZw9Ss7b52KmrwvWUIck5OvNA1HdwObiUtZhDG83A37YqAlwjAj3SdzFiT7ZaFa4pNhrrIcxVVy8Mdcjz19kbmCpoPZAao%2FrA31JePGr9aztIj%2FSXMjZsGtrmyyjxmoWf2yqrfQSmtpvtrpV6A7wHafT8EARKxMgbA5F6hMfUiWjeqw3npxCMO%2F3vrH%2Bp94VKdI0NpTr1o5isjOOZnHUJ0FgpQVW6eKebhEybWNutAuVG%2B8FQRysRB%2BDGz%2FDs1%2BOEXrz9zimVUAww6c48i%2BIH8e91K%2FbanfjIwKMPOSkaNSWwuMJKz4sEGOqUBBhMkPFOfB%2FKI6p73exYpXEmT0CuTf4YQTDMEAfi9tJyKnYibtVRyRNBWgRG8kwmgMxL57QD3C1F54QQCjjYtruelXcu4YV0KAIcYR2b1HxZ3OJ6BaAm7slvxgDH7wixAOvu6BLQ655lgbe0ndn3OFEdUXaa%2BitE59vBE3dOid8SjKmk5IibODeRRV3GrWr0xyx28XrhY19s4WfMOC%2FKjBynnD0il&X-Amz-Signature=87d6de0874d4bc63a4def9b4ed7145cbb2f6a62cfa7d927fe60a0f80c25fc74f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKZT4ND%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6lJBOh54qww0fdAENDHlvOoA8xKo%2F2lXOqvyr385Q3AiEAmjWBBZ5EWzh5Qti0pYDLfF2SU6WV1Zx1ALqOgluPzJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzcEkgidEGaSxeUSCrcA4qTks8Ld6BHU0uGaaMQg56OjHFtngyl%2FEnIXNerqvfTVl1fM1kqH9%2FK3SzgkM2bjabsGDc%2FWfEY9BkBJ5VY84sV8%2FDybqQxnJevxWSPuDOZAsmYKMnoqf01DtPqwKm18ZNGErZpiat6mjSXs5XYruSgKFiVkXNDuNRJxSvDhPsqU6jZlnqSrY1HleBrl0GKpsTpcp0T0BoONiH79kpy%2BIyPWrwGiinTA4pLmnzoYFh%2FTWcLse8GL1C%2Fr2lvM0YHs%2FhLAZ8%2FJ8tSXzJaYFE4qLpVYAWsnDeVLYWFTUwhyyV3oN2OQu9YD20xt7LtanRPz47htreR2pr80UOZw9Ss7b52KmrwvWUIck5OvNA1HdwObiUtZhDG83A37YqAlwjAj3SdzFiT7ZaFa4pNhrrIcxVVy8Mdcjz19kbmCpoPZAao%2FrA31JePGr9aztIj%2FSXMjZsGtrmyyjxmoWf2yqrfQSmtpvtrpV6A7wHafT8EARKxMgbA5F6hMfUiWjeqw3npxCMO%2F3vrH%2Bp94VKdI0NpTr1o5isjOOZnHUJ0FgpQVW6eKebhEybWNutAuVG%2B8FQRysRB%2BDGz%2FDs1%2BOEXrz9zimVUAww6c48i%2BIH8e91K%2FbanfjIwKMPOSkaNSWwuMJKz4sEGOqUBBhMkPFOfB%2FKI6p73exYpXEmT0CuTf4YQTDMEAfi9tJyKnYibtVRyRNBWgRG8kwmgMxL57QD3C1F54QQCjjYtruelXcu4YV0KAIcYR2b1HxZ3OJ6BaAm7slvxgDH7wixAOvu6BLQ655lgbe0ndn3OFEdUXaa%2BitE59vBE3dOid8SjKmk5IibODeRRV3GrWr0xyx28XrhY19s4WfMOC%2FKjBynnD0il&X-Amz-Signature=f059fa9fec98353642f36e9b6e13000b01e6298d9d50251efc93e93768d9926a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKZT4ND%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6lJBOh54qww0fdAENDHlvOoA8xKo%2F2lXOqvyr385Q3AiEAmjWBBZ5EWzh5Qti0pYDLfF2SU6WV1Zx1ALqOgluPzJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzcEkgidEGaSxeUSCrcA4qTks8Ld6BHU0uGaaMQg56OjHFtngyl%2FEnIXNerqvfTVl1fM1kqH9%2FK3SzgkM2bjabsGDc%2FWfEY9BkBJ5VY84sV8%2FDybqQxnJevxWSPuDOZAsmYKMnoqf01DtPqwKm18ZNGErZpiat6mjSXs5XYruSgKFiVkXNDuNRJxSvDhPsqU6jZlnqSrY1HleBrl0GKpsTpcp0T0BoONiH79kpy%2BIyPWrwGiinTA4pLmnzoYFh%2FTWcLse8GL1C%2Fr2lvM0YHs%2FhLAZ8%2FJ8tSXzJaYFE4qLpVYAWsnDeVLYWFTUwhyyV3oN2OQu9YD20xt7LtanRPz47htreR2pr80UOZw9Ss7b52KmrwvWUIck5OvNA1HdwObiUtZhDG83A37YqAlwjAj3SdzFiT7ZaFa4pNhrrIcxVVy8Mdcjz19kbmCpoPZAao%2FrA31JePGr9aztIj%2FSXMjZsGtrmyyjxmoWf2yqrfQSmtpvtrpV6A7wHafT8EARKxMgbA5F6hMfUiWjeqw3npxCMO%2F3vrH%2Bp94VKdI0NpTr1o5isjOOZnHUJ0FgpQVW6eKebhEybWNutAuVG%2B8FQRysRB%2BDGz%2FDs1%2BOEXrz9zimVUAww6c48i%2BIH8e91K%2FbanfjIwKMPOSkaNSWwuMJKz4sEGOqUBBhMkPFOfB%2FKI6p73exYpXEmT0CuTf4YQTDMEAfi9tJyKnYibtVRyRNBWgRG8kwmgMxL57QD3C1F54QQCjjYtruelXcu4YV0KAIcYR2b1HxZ3OJ6BaAm7slvxgDH7wixAOvu6BLQ655lgbe0ndn3OFEdUXaa%2BitE59vBE3dOid8SjKmk5IibODeRRV3GrWr0xyx28XrhY19s4WfMOC%2FKjBynnD0il&X-Amz-Signature=29560c4a8dc71bcef355105ffe0ef46307726e0369baacd6d9d9d37ae308f9b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKZT4ND%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6lJBOh54qww0fdAENDHlvOoA8xKo%2F2lXOqvyr385Q3AiEAmjWBBZ5EWzh5Qti0pYDLfF2SU6WV1Zx1ALqOgluPzJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzcEkgidEGaSxeUSCrcA4qTks8Ld6BHU0uGaaMQg56OjHFtngyl%2FEnIXNerqvfTVl1fM1kqH9%2FK3SzgkM2bjabsGDc%2FWfEY9BkBJ5VY84sV8%2FDybqQxnJevxWSPuDOZAsmYKMnoqf01DtPqwKm18ZNGErZpiat6mjSXs5XYruSgKFiVkXNDuNRJxSvDhPsqU6jZlnqSrY1HleBrl0GKpsTpcp0T0BoONiH79kpy%2BIyPWrwGiinTA4pLmnzoYFh%2FTWcLse8GL1C%2Fr2lvM0YHs%2FhLAZ8%2FJ8tSXzJaYFE4qLpVYAWsnDeVLYWFTUwhyyV3oN2OQu9YD20xt7LtanRPz47htreR2pr80UOZw9Ss7b52KmrwvWUIck5OvNA1HdwObiUtZhDG83A37YqAlwjAj3SdzFiT7ZaFa4pNhrrIcxVVy8Mdcjz19kbmCpoPZAao%2FrA31JePGr9aztIj%2FSXMjZsGtrmyyjxmoWf2yqrfQSmtpvtrpV6A7wHafT8EARKxMgbA5F6hMfUiWjeqw3npxCMO%2F3vrH%2Bp94VKdI0NpTr1o5isjOOZnHUJ0FgpQVW6eKebhEybWNutAuVG%2B8FQRysRB%2BDGz%2FDs1%2BOEXrz9zimVUAww6c48i%2BIH8e91K%2FbanfjIwKMPOSkaNSWwuMJKz4sEGOqUBBhMkPFOfB%2FKI6p73exYpXEmT0CuTf4YQTDMEAfi9tJyKnYibtVRyRNBWgRG8kwmgMxL57QD3C1F54QQCjjYtruelXcu4YV0KAIcYR2b1HxZ3OJ6BaAm7slvxgDH7wixAOvu6BLQ655lgbe0ndn3OFEdUXaa%2BitE59vBE3dOid8SjKmk5IibODeRRV3GrWr0xyx28XrhY19s4WfMOC%2FKjBynnD0il&X-Amz-Signature=9af3ea220cab66ad9dd586c85ddb31b87e911dae27601d70a46da0cc581adef3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKZT4ND%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6lJBOh54qww0fdAENDHlvOoA8xKo%2F2lXOqvyr385Q3AiEAmjWBBZ5EWzh5Qti0pYDLfF2SU6WV1Zx1ALqOgluPzJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzcEkgidEGaSxeUSCrcA4qTks8Ld6BHU0uGaaMQg56OjHFtngyl%2FEnIXNerqvfTVl1fM1kqH9%2FK3SzgkM2bjabsGDc%2FWfEY9BkBJ5VY84sV8%2FDybqQxnJevxWSPuDOZAsmYKMnoqf01DtPqwKm18ZNGErZpiat6mjSXs5XYruSgKFiVkXNDuNRJxSvDhPsqU6jZlnqSrY1HleBrl0GKpsTpcp0T0BoONiH79kpy%2BIyPWrwGiinTA4pLmnzoYFh%2FTWcLse8GL1C%2Fr2lvM0YHs%2FhLAZ8%2FJ8tSXzJaYFE4qLpVYAWsnDeVLYWFTUwhyyV3oN2OQu9YD20xt7LtanRPz47htreR2pr80UOZw9Ss7b52KmrwvWUIck5OvNA1HdwObiUtZhDG83A37YqAlwjAj3SdzFiT7ZaFa4pNhrrIcxVVy8Mdcjz19kbmCpoPZAao%2FrA31JePGr9aztIj%2FSXMjZsGtrmyyjxmoWf2yqrfQSmtpvtrpV6A7wHafT8EARKxMgbA5F6hMfUiWjeqw3npxCMO%2F3vrH%2Bp94VKdI0NpTr1o5isjOOZnHUJ0FgpQVW6eKebhEybWNutAuVG%2B8FQRysRB%2BDGz%2FDs1%2BOEXrz9zimVUAww6c48i%2BIH8e91K%2FbanfjIwKMPOSkaNSWwuMJKz4sEGOqUBBhMkPFOfB%2FKI6p73exYpXEmT0CuTf4YQTDMEAfi9tJyKnYibtVRyRNBWgRG8kwmgMxL57QD3C1F54QQCjjYtruelXcu4YV0KAIcYR2b1HxZ3OJ6BaAm7slvxgDH7wixAOvu6BLQ655lgbe0ndn3OFEdUXaa%2BitE59vBE3dOid8SjKmk5IibODeRRV3GrWr0xyx28XrhY19s4WfMOC%2FKjBynnD0il&X-Amz-Signature=ebbd5bcfee8a50f816f6fab61e84407dbca5c00058a11d4d4d5f04f5b182959d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLKZT4ND%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6lJBOh54qww0fdAENDHlvOoA8xKo%2F2lXOqvyr385Q3AiEAmjWBBZ5EWzh5Qti0pYDLfF2SU6WV1Zx1ALqOgluPzJEqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzcEkgidEGaSxeUSCrcA4qTks8Ld6BHU0uGaaMQg56OjHFtngyl%2FEnIXNerqvfTVl1fM1kqH9%2FK3SzgkM2bjabsGDc%2FWfEY9BkBJ5VY84sV8%2FDybqQxnJevxWSPuDOZAsmYKMnoqf01DtPqwKm18ZNGErZpiat6mjSXs5XYruSgKFiVkXNDuNRJxSvDhPsqU6jZlnqSrY1HleBrl0GKpsTpcp0T0BoONiH79kpy%2BIyPWrwGiinTA4pLmnzoYFh%2FTWcLse8GL1C%2Fr2lvM0YHs%2FhLAZ8%2FJ8tSXzJaYFE4qLpVYAWsnDeVLYWFTUwhyyV3oN2OQu9YD20xt7LtanRPz47htreR2pr80UOZw9Ss7b52KmrwvWUIck5OvNA1HdwObiUtZhDG83A37YqAlwjAj3SdzFiT7ZaFa4pNhrrIcxVVy8Mdcjz19kbmCpoPZAao%2FrA31JePGr9aztIj%2FSXMjZsGtrmyyjxmoWf2yqrfQSmtpvtrpV6A7wHafT8EARKxMgbA5F6hMfUiWjeqw3npxCMO%2F3vrH%2Bp94VKdI0NpTr1o5isjOOZnHUJ0FgpQVW6eKebhEybWNutAuVG%2B8FQRysRB%2BDGz%2FDs1%2BOEXrz9zimVUAww6c48i%2BIH8e91K%2FbanfjIwKMPOSkaNSWwuMJKz4sEGOqUBBhMkPFOfB%2FKI6p73exYpXEmT0CuTf4YQTDMEAfi9tJyKnYibtVRyRNBWgRG8kwmgMxL57QD3C1F54QQCjjYtruelXcu4YV0KAIcYR2b1HxZ3OJ6BaAm7slvxgDH7wixAOvu6BLQ655lgbe0ndn3OFEdUXaa%2BitE59vBE3dOid8SjKmk5IibODeRRV3GrWr0xyx28XrhY19s4WfMOC%2FKjBynnD0il&X-Amz-Signature=2d7444037bd433020d0646613492931ccfb13a6e3e06d4f25edb312c0d01c9dc&X-Amz-SignedHeaders=host&x-id=GetObject)
