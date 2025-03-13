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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBLI5F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzrNz7Nam6lKQgenw8A1vj2687YHvSsRKLzzRkT2cIeAiEAsqkCKZ94n359rkm2R0TOaGRi6iJl5Uv9tsSWv76R9iIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmhQNvassky0LtF1CrcAxymArtQRwptfSNaWx42Ge%2BubTwu0cnAgENSJseR%2BrbxLNeOcrooODiWNgitkVw2ovCPDLzUTaelDHLVjcOVaZmP6qzZg3Q1%2BQcJ%2BUsYxtHKuiAEiZAdVwZUguMPYRFFMr6%2FYAWGSAcEvbYLKliyVk2cLUWI9C22HA0LfiO5McGTHpzeEkKRoT4H7JI0CF291jOTw4sSdaIRhPTLhFAF62%2F1aypQn2RZvyalDyuc%2FHHumm9wtRZ0Egf6A1U1Jq%2F87UKS%2FpYyPDJGgAQJ9A5EqLm%2FHu0kgB%2F2epA8nIkPm08ssXta75fIhdzFFNHLbQtAXYOdvXj6ufDVxl2l0TazF5em8NNGB9spVwjuouh7O9cK%2F5zA2qWs%2BmTsD9tDM8DvDLkHZGP%2BsYUrRXx%2BzCztPfPgodnQkQIFiWCdBg4txsxLmQ%2F%2BD1jO3vj1mrVfS5q38QU%2BTqVfCAfzhxwTNInYRU8SbMqrdKgD4icr5113yFT4sKL0EwuKb9jNiyTOoQ2zq2wF%2BuIuqM63GR2BWkqQFynSYax4c6HmXSaHX29HdesBtoQD6J9PeM8Ki7npMA4CPdk8Nr5hhLWQTMZtbAgVYmsZD1VdsyQiySvBX1lHidzb9WwJYHq1ZhI7ChBFMMrgyL4GOqUB0XXsvxTdejwuSxAh2PTRzUQSYkjcGk%2BtUw1IeuYI%2Fq9TEI6LBXQtVhclCfHULdG7nXYb8s%2BKo5rG23opRPAFVAYcfPVIuYErSBqDvQAv7D9nu4cauqFn9WIhBCuJH%2BfLAKmIBshslEFJQLzfrwiEkVf3Z0kRe46ze9BLsDB1pwILbXLKp9SQ%2FHu5xTfZvVxOcqZH5I8%2FX9JYIetTYwP15RvzECSU&X-Amz-Signature=0bb63641cc5bdf02fc1d776ccc3587bee3a9c5732815c3bd2243cd2b0db5e2bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBLI5F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzrNz7Nam6lKQgenw8A1vj2687YHvSsRKLzzRkT2cIeAiEAsqkCKZ94n359rkm2R0TOaGRi6iJl5Uv9tsSWv76R9iIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmhQNvassky0LtF1CrcAxymArtQRwptfSNaWx42Ge%2BubTwu0cnAgENSJseR%2BrbxLNeOcrooODiWNgitkVw2ovCPDLzUTaelDHLVjcOVaZmP6qzZg3Q1%2BQcJ%2BUsYxtHKuiAEiZAdVwZUguMPYRFFMr6%2FYAWGSAcEvbYLKliyVk2cLUWI9C22HA0LfiO5McGTHpzeEkKRoT4H7JI0CF291jOTw4sSdaIRhPTLhFAF62%2F1aypQn2RZvyalDyuc%2FHHumm9wtRZ0Egf6A1U1Jq%2F87UKS%2FpYyPDJGgAQJ9A5EqLm%2FHu0kgB%2F2epA8nIkPm08ssXta75fIhdzFFNHLbQtAXYOdvXj6ufDVxl2l0TazF5em8NNGB9spVwjuouh7O9cK%2F5zA2qWs%2BmTsD9tDM8DvDLkHZGP%2BsYUrRXx%2BzCztPfPgodnQkQIFiWCdBg4txsxLmQ%2F%2BD1jO3vj1mrVfS5q38QU%2BTqVfCAfzhxwTNInYRU8SbMqrdKgD4icr5113yFT4sKL0EwuKb9jNiyTOoQ2zq2wF%2BuIuqM63GR2BWkqQFynSYax4c6HmXSaHX29HdesBtoQD6J9PeM8Ki7npMA4CPdk8Nr5hhLWQTMZtbAgVYmsZD1VdsyQiySvBX1lHidzb9WwJYHq1ZhI7ChBFMMrgyL4GOqUB0XXsvxTdejwuSxAh2PTRzUQSYkjcGk%2BtUw1IeuYI%2Fq9TEI6LBXQtVhclCfHULdG7nXYb8s%2BKo5rG23opRPAFVAYcfPVIuYErSBqDvQAv7D9nu4cauqFn9WIhBCuJH%2BfLAKmIBshslEFJQLzfrwiEkVf3Z0kRe46ze9BLsDB1pwILbXLKp9SQ%2FHu5xTfZvVxOcqZH5I8%2FX9JYIetTYwP15RvzECSU&X-Amz-Signature=9571d1b7022061e4f1c5f0c9c3d2d0227a4ff96c8fb221c7415c478c5413e4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBLI5F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzrNz7Nam6lKQgenw8A1vj2687YHvSsRKLzzRkT2cIeAiEAsqkCKZ94n359rkm2R0TOaGRi6iJl5Uv9tsSWv76R9iIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmhQNvassky0LtF1CrcAxymArtQRwptfSNaWx42Ge%2BubTwu0cnAgENSJseR%2BrbxLNeOcrooODiWNgitkVw2ovCPDLzUTaelDHLVjcOVaZmP6qzZg3Q1%2BQcJ%2BUsYxtHKuiAEiZAdVwZUguMPYRFFMr6%2FYAWGSAcEvbYLKliyVk2cLUWI9C22HA0LfiO5McGTHpzeEkKRoT4H7JI0CF291jOTw4sSdaIRhPTLhFAF62%2F1aypQn2RZvyalDyuc%2FHHumm9wtRZ0Egf6A1U1Jq%2F87UKS%2FpYyPDJGgAQJ9A5EqLm%2FHu0kgB%2F2epA8nIkPm08ssXta75fIhdzFFNHLbQtAXYOdvXj6ufDVxl2l0TazF5em8NNGB9spVwjuouh7O9cK%2F5zA2qWs%2BmTsD9tDM8DvDLkHZGP%2BsYUrRXx%2BzCztPfPgodnQkQIFiWCdBg4txsxLmQ%2F%2BD1jO3vj1mrVfS5q38QU%2BTqVfCAfzhxwTNInYRU8SbMqrdKgD4icr5113yFT4sKL0EwuKb9jNiyTOoQ2zq2wF%2BuIuqM63GR2BWkqQFynSYax4c6HmXSaHX29HdesBtoQD6J9PeM8Ki7npMA4CPdk8Nr5hhLWQTMZtbAgVYmsZD1VdsyQiySvBX1lHidzb9WwJYHq1ZhI7ChBFMMrgyL4GOqUB0XXsvxTdejwuSxAh2PTRzUQSYkjcGk%2BtUw1IeuYI%2Fq9TEI6LBXQtVhclCfHULdG7nXYb8s%2BKo5rG23opRPAFVAYcfPVIuYErSBqDvQAv7D9nu4cauqFn9WIhBCuJH%2BfLAKmIBshslEFJQLzfrwiEkVf3Z0kRe46ze9BLsDB1pwILbXLKp9SQ%2FHu5xTfZvVxOcqZH5I8%2FX9JYIetTYwP15RvzECSU&X-Amz-Signature=295e48a7f321053ae8e2997529add7ca36ebb29783481ce825035fc3ab271f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBLI5F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzrNz7Nam6lKQgenw8A1vj2687YHvSsRKLzzRkT2cIeAiEAsqkCKZ94n359rkm2R0TOaGRi6iJl5Uv9tsSWv76R9iIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmhQNvassky0LtF1CrcAxymArtQRwptfSNaWx42Ge%2BubTwu0cnAgENSJseR%2BrbxLNeOcrooODiWNgitkVw2ovCPDLzUTaelDHLVjcOVaZmP6qzZg3Q1%2BQcJ%2BUsYxtHKuiAEiZAdVwZUguMPYRFFMr6%2FYAWGSAcEvbYLKliyVk2cLUWI9C22HA0LfiO5McGTHpzeEkKRoT4H7JI0CF291jOTw4sSdaIRhPTLhFAF62%2F1aypQn2RZvyalDyuc%2FHHumm9wtRZ0Egf6A1U1Jq%2F87UKS%2FpYyPDJGgAQJ9A5EqLm%2FHu0kgB%2F2epA8nIkPm08ssXta75fIhdzFFNHLbQtAXYOdvXj6ufDVxl2l0TazF5em8NNGB9spVwjuouh7O9cK%2F5zA2qWs%2BmTsD9tDM8DvDLkHZGP%2BsYUrRXx%2BzCztPfPgodnQkQIFiWCdBg4txsxLmQ%2F%2BD1jO3vj1mrVfS5q38QU%2BTqVfCAfzhxwTNInYRU8SbMqrdKgD4icr5113yFT4sKL0EwuKb9jNiyTOoQ2zq2wF%2BuIuqM63GR2BWkqQFynSYax4c6HmXSaHX29HdesBtoQD6J9PeM8Ki7npMA4CPdk8Nr5hhLWQTMZtbAgVYmsZD1VdsyQiySvBX1lHidzb9WwJYHq1ZhI7ChBFMMrgyL4GOqUB0XXsvxTdejwuSxAh2PTRzUQSYkjcGk%2BtUw1IeuYI%2Fq9TEI6LBXQtVhclCfHULdG7nXYb8s%2BKo5rG23opRPAFVAYcfPVIuYErSBqDvQAv7D9nu4cauqFn9WIhBCuJH%2BfLAKmIBshslEFJQLzfrwiEkVf3Z0kRe46ze9BLsDB1pwILbXLKp9SQ%2FHu5xTfZvVxOcqZH5I8%2FX9JYIetTYwP15RvzECSU&X-Amz-Signature=ada5a117ecb6be3068c492f1717aad17047737cee5e9d6a40ec118316e13f6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBLI5F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzrNz7Nam6lKQgenw8A1vj2687YHvSsRKLzzRkT2cIeAiEAsqkCKZ94n359rkm2R0TOaGRi6iJl5Uv9tsSWv76R9iIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmhQNvassky0LtF1CrcAxymArtQRwptfSNaWx42Ge%2BubTwu0cnAgENSJseR%2BrbxLNeOcrooODiWNgitkVw2ovCPDLzUTaelDHLVjcOVaZmP6qzZg3Q1%2BQcJ%2BUsYxtHKuiAEiZAdVwZUguMPYRFFMr6%2FYAWGSAcEvbYLKliyVk2cLUWI9C22HA0LfiO5McGTHpzeEkKRoT4H7JI0CF291jOTw4sSdaIRhPTLhFAF62%2F1aypQn2RZvyalDyuc%2FHHumm9wtRZ0Egf6A1U1Jq%2F87UKS%2FpYyPDJGgAQJ9A5EqLm%2FHu0kgB%2F2epA8nIkPm08ssXta75fIhdzFFNHLbQtAXYOdvXj6ufDVxl2l0TazF5em8NNGB9spVwjuouh7O9cK%2F5zA2qWs%2BmTsD9tDM8DvDLkHZGP%2BsYUrRXx%2BzCztPfPgodnQkQIFiWCdBg4txsxLmQ%2F%2BD1jO3vj1mrVfS5q38QU%2BTqVfCAfzhxwTNInYRU8SbMqrdKgD4icr5113yFT4sKL0EwuKb9jNiyTOoQ2zq2wF%2BuIuqM63GR2BWkqQFynSYax4c6HmXSaHX29HdesBtoQD6J9PeM8Ki7npMA4CPdk8Nr5hhLWQTMZtbAgVYmsZD1VdsyQiySvBX1lHidzb9WwJYHq1ZhI7ChBFMMrgyL4GOqUB0XXsvxTdejwuSxAh2PTRzUQSYkjcGk%2BtUw1IeuYI%2Fq9TEI6LBXQtVhclCfHULdG7nXYb8s%2BKo5rG23opRPAFVAYcfPVIuYErSBqDvQAv7D9nu4cauqFn9WIhBCuJH%2BfLAKmIBshslEFJQLzfrwiEkVf3Z0kRe46ze9BLsDB1pwILbXLKp9SQ%2FHu5xTfZvVxOcqZH5I8%2FX9JYIetTYwP15RvzECSU&X-Amz-Signature=879ec56dd8dd6cabadd330efeea46ed7b3e582f6bcf246e4aa8d94e2ac8e43b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXNBLI5F%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzrNz7Nam6lKQgenw8A1vj2687YHvSsRKLzzRkT2cIeAiEAsqkCKZ94n359rkm2R0TOaGRi6iJl5Uv9tsSWv76R9iIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmhQNvassky0LtF1CrcAxymArtQRwptfSNaWx42Ge%2BubTwu0cnAgENSJseR%2BrbxLNeOcrooODiWNgitkVw2ovCPDLzUTaelDHLVjcOVaZmP6qzZg3Q1%2BQcJ%2BUsYxtHKuiAEiZAdVwZUguMPYRFFMr6%2FYAWGSAcEvbYLKliyVk2cLUWI9C22HA0LfiO5McGTHpzeEkKRoT4H7JI0CF291jOTw4sSdaIRhPTLhFAF62%2F1aypQn2RZvyalDyuc%2FHHumm9wtRZ0Egf6A1U1Jq%2F87UKS%2FpYyPDJGgAQJ9A5EqLm%2FHu0kgB%2F2epA8nIkPm08ssXta75fIhdzFFNHLbQtAXYOdvXj6ufDVxl2l0TazF5em8NNGB9spVwjuouh7O9cK%2F5zA2qWs%2BmTsD9tDM8DvDLkHZGP%2BsYUrRXx%2BzCztPfPgodnQkQIFiWCdBg4txsxLmQ%2F%2BD1jO3vj1mrVfS5q38QU%2BTqVfCAfzhxwTNInYRU8SbMqrdKgD4icr5113yFT4sKL0EwuKb9jNiyTOoQ2zq2wF%2BuIuqM63GR2BWkqQFynSYax4c6HmXSaHX29HdesBtoQD6J9PeM8Ki7npMA4CPdk8Nr5hhLWQTMZtbAgVYmsZD1VdsyQiySvBX1lHidzb9WwJYHq1ZhI7ChBFMMrgyL4GOqUB0XXsvxTdejwuSxAh2PTRzUQSYkjcGk%2BtUw1IeuYI%2Fq9TEI6LBXQtVhclCfHULdG7nXYb8s%2BKo5rG23opRPAFVAYcfPVIuYErSBqDvQAv7D9nu4cauqFn9WIhBCuJH%2BfLAKmIBshslEFJQLzfrwiEkVf3Z0kRe46ze9BLsDB1pwILbXLKp9SQ%2FHu5xTfZvVxOcqZH5I8%2FX9JYIetTYwP15RvzECSU&X-Amz-Signature=edb79e28c9dc77c84645578ab6e74e9a6831671a9b09fd8aef15300b2a00fce5&X-Amz-SignedHeaders=host&x-id=GetObject)
