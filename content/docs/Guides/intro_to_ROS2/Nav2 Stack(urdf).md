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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT36TDHX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2FZspV9GTS%2BXWQ%2BvLvpqYvBJOox0FU3WVeL5et9KMFFAIgdbHpo%2FFhcxATQqnfIxxN%2BNRYFbQk5193IvuZly6RgPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO0Y1XWHGGGZ0OxIwircAxiaVNOMnQ6oS%2FawXtrxPfim44Tr0jSj8lEhMtwsPuc3KoRr4DyAF1ei%2FelJvgkTeIjPvVAlxKuLmNcExzOaIt0WTnc3SBTmU27nyj0mkyVj3900ow0%2FKXdGmcWwuUZjO2e8Uo0m3bS9WkHOomHfRgS4VMfjFHzZMEj%2BsZE2I%2FHqTaAThj9%2BwZG8vdMJpF85hCy5e%2BdHivhQfzwG3L4ripOWaSk0RuSkGieN22y540sIjV6qxyCD8jjde31fTtMRwhX3VUNvkMBz61SiyE1E0aLUQwCbP2iSuXfuI0szaZJWGJ58bSwYwr5FleBHp05Zwvme8NtwcVhR8nGNkR8xgkZ6KDCFf2VLEP9WHPqD%2FexyQIvvO%2BNi%2BPrL%2BA9mzTWs3qim1MNqHwG%2Bz8H0ULmSGIuLb%2FZwUfewFbR1%2FeKCsvqAiBRQlW1jHF3oZgc9yQ%2BPUy7iJkIgY2ZG2kH%2FPiLCfkHlJCG1UOCCsoT4ZXOTsL2Jl89uzxfSTTD%2Fc6mVPANyxpuGVfpnuLKHuSjSDsQhDCalGiO7mWUyULdf1YMU%2FZrvQ9rajSaId2o7lG2Z1kI2OezskKLgfEPieJkpryfkUU1BdvMnmpgEEqH35prvQ%2FzbhHdVTWQ7XD46RDAZMK2J88IGOqUBa8%2BXFiBTVTOJBAMB8J1TnKscy7TPaucbzNu1msmxbf1VOg2%2Fd2FhMVZb6tvq%2BEHTmD5wcnVDk7zV9igVFdHKC%2FOYqhQAC5UFxFNwgoAHynxNUV7xWaH2gYNyIk1mliLxGYYRE3eOkQC9QPWdfhuHoXRTaWymMOiLarRvgLSNuuP0tvy%2F92boky0nCBnGFBb18vUumP5COVT3YngGZ7PH4YSWLlNo&X-Amz-Signature=8140b38f6a60b5bf37bb9781dd5418af9d2185d27b5edf32491223ff12336b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT36TDHX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2FZspV9GTS%2BXWQ%2BvLvpqYvBJOox0FU3WVeL5et9KMFFAIgdbHpo%2FFhcxATQqnfIxxN%2BNRYFbQk5193IvuZly6RgPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO0Y1XWHGGGZ0OxIwircAxiaVNOMnQ6oS%2FawXtrxPfim44Tr0jSj8lEhMtwsPuc3KoRr4DyAF1ei%2FelJvgkTeIjPvVAlxKuLmNcExzOaIt0WTnc3SBTmU27nyj0mkyVj3900ow0%2FKXdGmcWwuUZjO2e8Uo0m3bS9WkHOomHfRgS4VMfjFHzZMEj%2BsZE2I%2FHqTaAThj9%2BwZG8vdMJpF85hCy5e%2BdHivhQfzwG3L4ripOWaSk0RuSkGieN22y540sIjV6qxyCD8jjde31fTtMRwhX3VUNvkMBz61SiyE1E0aLUQwCbP2iSuXfuI0szaZJWGJ58bSwYwr5FleBHp05Zwvme8NtwcVhR8nGNkR8xgkZ6KDCFf2VLEP9WHPqD%2FexyQIvvO%2BNi%2BPrL%2BA9mzTWs3qim1MNqHwG%2Bz8H0ULmSGIuLb%2FZwUfewFbR1%2FeKCsvqAiBRQlW1jHF3oZgc9yQ%2BPUy7iJkIgY2ZG2kH%2FPiLCfkHlJCG1UOCCsoT4ZXOTsL2Jl89uzxfSTTD%2Fc6mVPANyxpuGVfpnuLKHuSjSDsQhDCalGiO7mWUyULdf1YMU%2FZrvQ9rajSaId2o7lG2Z1kI2OezskKLgfEPieJkpryfkUU1BdvMnmpgEEqH35prvQ%2FzbhHdVTWQ7XD46RDAZMK2J88IGOqUBa8%2BXFiBTVTOJBAMB8J1TnKscy7TPaucbzNu1msmxbf1VOg2%2Fd2FhMVZb6tvq%2BEHTmD5wcnVDk7zV9igVFdHKC%2FOYqhQAC5UFxFNwgoAHynxNUV7xWaH2gYNyIk1mliLxGYYRE3eOkQC9QPWdfhuHoXRTaWymMOiLarRvgLSNuuP0tvy%2F92boky0nCBnGFBb18vUumP5COVT3YngGZ7PH4YSWLlNo&X-Amz-Signature=65ffa1e34ba82c36f030d7143ea078f41e36ba093039719ec6204ca79f0590e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT36TDHX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2FZspV9GTS%2BXWQ%2BvLvpqYvBJOox0FU3WVeL5et9KMFFAIgdbHpo%2FFhcxATQqnfIxxN%2BNRYFbQk5193IvuZly6RgPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO0Y1XWHGGGZ0OxIwircAxiaVNOMnQ6oS%2FawXtrxPfim44Tr0jSj8lEhMtwsPuc3KoRr4DyAF1ei%2FelJvgkTeIjPvVAlxKuLmNcExzOaIt0WTnc3SBTmU27nyj0mkyVj3900ow0%2FKXdGmcWwuUZjO2e8Uo0m3bS9WkHOomHfRgS4VMfjFHzZMEj%2BsZE2I%2FHqTaAThj9%2BwZG8vdMJpF85hCy5e%2BdHivhQfzwG3L4ripOWaSk0RuSkGieN22y540sIjV6qxyCD8jjde31fTtMRwhX3VUNvkMBz61SiyE1E0aLUQwCbP2iSuXfuI0szaZJWGJ58bSwYwr5FleBHp05Zwvme8NtwcVhR8nGNkR8xgkZ6KDCFf2VLEP9WHPqD%2FexyQIvvO%2BNi%2BPrL%2BA9mzTWs3qim1MNqHwG%2Bz8H0ULmSGIuLb%2FZwUfewFbR1%2FeKCsvqAiBRQlW1jHF3oZgc9yQ%2BPUy7iJkIgY2ZG2kH%2FPiLCfkHlJCG1UOCCsoT4ZXOTsL2Jl89uzxfSTTD%2Fc6mVPANyxpuGVfpnuLKHuSjSDsQhDCalGiO7mWUyULdf1YMU%2FZrvQ9rajSaId2o7lG2Z1kI2OezskKLgfEPieJkpryfkUU1BdvMnmpgEEqH35prvQ%2FzbhHdVTWQ7XD46RDAZMK2J88IGOqUBa8%2BXFiBTVTOJBAMB8J1TnKscy7TPaucbzNu1msmxbf1VOg2%2Fd2FhMVZb6tvq%2BEHTmD5wcnVDk7zV9igVFdHKC%2FOYqhQAC5UFxFNwgoAHynxNUV7xWaH2gYNyIk1mliLxGYYRE3eOkQC9QPWdfhuHoXRTaWymMOiLarRvgLSNuuP0tvy%2F92boky0nCBnGFBb18vUumP5COVT3YngGZ7PH4YSWLlNo&X-Amz-Signature=cfa5a916afa495ee79763dccd83c05c525559510b40b7d7a9935dce6b4cd2c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT36TDHX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2FZspV9GTS%2BXWQ%2BvLvpqYvBJOox0FU3WVeL5et9KMFFAIgdbHpo%2FFhcxATQqnfIxxN%2BNRYFbQk5193IvuZly6RgPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO0Y1XWHGGGZ0OxIwircAxiaVNOMnQ6oS%2FawXtrxPfim44Tr0jSj8lEhMtwsPuc3KoRr4DyAF1ei%2FelJvgkTeIjPvVAlxKuLmNcExzOaIt0WTnc3SBTmU27nyj0mkyVj3900ow0%2FKXdGmcWwuUZjO2e8Uo0m3bS9WkHOomHfRgS4VMfjFHzZMEj%2BsZE2I%2FHqTaAThj9%2BwZG8vdMJpF85hCy5e%2BdHivhQfzwG3L4ripOWaSk0RuSkGieN22y540sIjV6qxyCD8jjde31fTtMRwhX3VUNvkMBz61SiyE1E0aLUQwCbP2iSuXfuI0szaZJWGJ58bSwYwr5FleBHp05Zwvme8NtwcVhR8nGNkR8xgkZ6KDCFf2VLEP9WHPqD%2FexyQIvvO%2BNi%2BPrL%2BA9mzTWs3qim1MNqHwG%2Bz8H0ULmSGIuLb%2FZwUfewFbR1%2FeKCsvqAiBRQlW1jHF3oZgc9yQ%2BPUy7iJkIgY2ZG2kH%2FPiLCfkHlJCG1UOCCsoT4ZXOTsL2Jl89uzxfSTTD%2Fc6mVPANyxpuGVfpnuLKHuSjSDsQhDCalGiO7mWUyULdf1YMU%2FZrvQ9rajSaId2o7lG2Z1kI2OezskKLgfEPieJkpryfkUU1BdvMnmpgEEqH35prvQ%2FzbhHdVTWQ7XD46RDAZMK2J88IGOqUBa8%2BXFiBTVTOJBAMB8J1TnKscy7TPaucbzNu1msmxbf1VOg2%2Fd2FhMVZb6tvq%2BEHTmD5wcnVDk7zV9igVFdHKC%2FOYqhQAC5UFxFNwgoAHynxNUV7xWaH2gYNyIk1mliLxGYYRE3eOkQC9QPWdfhuHoXRTaWymMOiLarRvgLSNuuP0tvy%2F92boky0nCBnGFBb18vUumP5COVT3YngGZ7PH4YSWLlNo&X-Amz-Signature=87663292deda18bcecc7b2c9d30f2f5faaefc5b47e2a948664ee5933f39157b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT36TDHX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2FZspV9GTS%2BXWQ%2BvLvpqYvBJOox0FU3WVeL5et9KMFFAIgdbHpo%2FFhcxATQqnfIxxN%2BNRYFbQk5193IvuZly6RgPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO0Y1XWHGGGZ0OxIwircAxiaVNOMnQ6oS%2FawXtrxPfim44Tr0jSj8lEhMtwsPuc3KoRr4DyAF1ei%2FelJvgkTeIjPvVAlxKuLmNcExzOaIt0WTnc3SBTmU27nyj0mkyVj3900ow0%2FKXdGmcWwuUZjO2e8Uo0m3bS9WkHOomHfRgS4VMfjFHzZMEj%2BsZE2I%2FHqTaAThj9%2BwZG8vdMJpF85hCy5e%2BdHivhQfzwG3L4ripOWaSk0RuSkGieN22y540sIjV6qxyCD8jjde31fTtMRwhX3VUNvkMBz61SiyE1E0aLUQwCbP2iSuXfuI0szaZJWGJ58bSwYwr5FleBHp05Zwvme8NtwcVhR8nGNkR8xgkZ6KDCFf2VLEP9WHPqD%2FexyQIvvO%2BNi%2BPrL%2BA9mzTWs3qim1MNqHwG%2Bz8H0ULmSGIuLb%2FZwUfewFbR1%2FeKCsvqAiBRQlW1jHF3oZgc9yQ%2BPUy7iJkIgY2ZG2kH%2FPiLCfkHlJCG1UOCCsoT4ZXOTsL2Jl89uzxfSTTD%2Fc6mVPANyxpuGVfpnuLKHuSjSDsQhDCalGiO7mWUyULdf1YMU%2FZrvQ9rajSaId2o7lG2Z1kI2OezskKLgfEPieJkpryfkUU1BdvMnmpgEEqH35prvQ%2FzbhHdVTWQ7XD46RDAZMK2J88IGOqUBa8%2BXFiBTVTOJBAMB8J1TnKscy7TPaucbzNu1msmxbf1VOg2%2Fd2FhMVZb6tvq%2BEHTmD5wcnVDk7zV9igVFdHKC%2FOYqhQAC5UFxFNwgoAHynxNUV7xWaH2gYNyIk1mliLxGYYRE3eOkQC9QPWdfhuHoXRTaWymMOiLarRvgLSNuuP0tvy%2F92boky0nCBnGFBb18vUumP5COVT3YngGZ7PH4YSWLlNo&X-Amz-Signature=085a6a0cd757b51f9acf70e9d8e0d63371aef9ebbbd72b1ae673743bf7584109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT36TDHX%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQD%2FZspV9GTS%2BXWQ%2BvLvpqYvBJOox0FU3WVeL5et9KMFFAIgdbHpo%2FFhcxATQqnfIxxN%2BNRYFbQk5193IvuZly6RgPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO0Y1XWHGGGZ0OxIwircAxiaVNOMnQ6oS%2FawXtrxPfim44Tr0jSj8lEhMtwsPuc3KoRr4DyAF1ei%2FelJvgkTeIjPvVAlxKuLmNcExzOaIt0WTnc3SBTmU27nyj0mkyVj3900ow0%2FKXdGmcWwuUZjO2e8Uo0m3bS9WkHOomHfRgS4VMfjFHzZMEj%2BsZE2I%2FHqTaAThj9%2BwZG8vdMJpF85hCy5e%2BdHivhQfzwG3L4ripOWaSk0RuSkGieN22y540sIjV6qxyCD8jjde31fTtMRwhX3VUNvkMBz61SiyE1E0aLUQwCbP2iSuXfuI0szaZJWGJ58bSwYwr5FleBHp05Zwvme8NtwcVhR8nGNkR8xgkZ6KDCFf2VLEP9WHPqD%2FexyQIvvO%2BNi%2BPrL%2BA9mzTWs3qim1MNqHwG%2Bz8H0ULmSGIuLb%2FZwUfewFbR1%2FeKCsvqAiBRQlW1jHF3oZgc9yQ%2BPUy7iJkIgY2ZG2kH%2FPiLCfkHlJCG1UOCCsoT4ZXOTsL2Jl89uzxfSTTD%2Fc6mVPANyxpuGVfpnuLKHuSjSDsQhDCalGiO7mWUyULdf1YMU%2FZrvQ9rajSaId2o7lG2Z1kI2OezskKLgfEPieJkpryfkUU1BdvMnmpgEEqH35prvQ%2FzbhHdVTWQ7XD46RDAZMK2J88IGOqUBa8%2BXFiBTVTOJBAMB8J1TnKscy7TPaucbzNu1msmxbf1VOg2%2Fd2FhMVZb6tvq%2BEHTmD5wcnVDk7zV9igVFdHKC%2FOYqhQAC5UFxFNwgoAHynxNUV7xWaH2gYNyIk1mliLxGYYRE3eOkQC9QPWdfhuHoXRTaWymMOiLarRvgLSNuuP0tvy%2F92boky0nCBnGFBb18vUumP5COVT3YngGZ7PH4YSWLlNo&X-Amz-Signature=ff1869023c2df5c95b3b913a43fd0afc042cd37d7814c398c8b19b07523be286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
