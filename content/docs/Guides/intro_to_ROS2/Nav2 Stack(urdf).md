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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDTKYS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATpj%2FfjAugx6udlZpIaNJOIwD%2B3FU%2FKuszGAA%2FHwVqwAiEAmatdXaLZi0kxnehyhSLdVR1nFHP1PtOFW8234MonFEEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDx56t%2FUA2iyEmC0gCrcA%2FphxUm9kxU2lm0eRZ5T3TVGdJNjBrffkgU6vWvTpwG4fPC93hmRIRzQWcit2SXnFWLsZmNhGN9Q35a%2Fwv%2FCVF9de06PsswSFixWtOU2dE4CgRBkda3C1kRmbUKaOtVI%2BnRpV6y%2BOniaP7V8XzxW4nigl%2B4fXJPznqPozFYZpx377BbQJOHlZnIOlY7XggB1U8%2B9QOlpMoAHOqkZ4CTk9dmNPn9RReDyWDgDCNDsO1VLJPhHsKItOcBUuIarpdATCpeMRg3iR%2BRQMkGKQD%2By%2FpJYDZ8WOILnYLyh%2BsNK7MBwDk2tTspEMErvp5ijmh%2B48R8Il2Oc7CSLT%2BkYjJbJUALiLlVPmDBaaX6ZVWA6LLEq8uskyOocPDAYYa4go3JYanVAgrS9mRrqvK5wfl%2FyTToKdrcjC78x0R28nIKAEb5RHhXLjUkApOZAlv47QDMbFDY7E63Mr18gCz5IvUCouXBZ68%2BAnmsPA8UVS1Evv0iTLS9xdESVW14%2FaMy7B2hIf1aPvIf3daomAHSxWprOr%2FC66%2BGeu7roXCJh3st8diJCvLGeyU3LtdN0WGKAzaAH9nAzSPHJMCHPnkcHEWFnspmCO4Rx6%2FGHrnnfysI9GT6JoAj03glspQJI96pmMIPw%2B78GOqUBKasniWTWKl%2B7LphxboaJTJyuQwcQOKZAQBBGFD%2BZEjeoU2HBRTJs2Emofl%2BPdjrbc22HrDUCFejpakaV1JPyhp%2FCVzQJgf9sKeVZpP1r68wpqoPLS77y9p36A4HCxD60kt0TeUha8p9b7DNdikV58z4ocVAdMcZUQPZMcxf5OEALBJ0M%2BwLsQ3inUZVLdZfb1HQw4iCg4kCof8Bh8OxIAi3No8GG&X-Amz-Signature=9abdaf32728812d01dfe6b249a4abe141e01972b0d143b50dff3dd1213ec7a92&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDTKYS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATpj%2FfjAugx6udlZpIaNJOIwD%2B3FU%2FKuszGAA%2FHwVqwAiEAmatdXaLZi0kxnehyhSLdVR1nFHP1PtOFW8234MonFEEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDx56t%2FUA2iyEmC0gCrcA%2FphxUm9kxU2lm0eRZ5T3TVGdJNjBrffkgU6vWvTpwG4fPC93hmRIRzQWcit2SXnFWLsZmNhGN9Q35a%2Fwv%2FCVF9de06PsswSFixWtOU2dE4CgRBkda3C1kRmbUKaOtVI%2BnRpV6y%2BOniaP7V8XzxW4nigl%2B4fXJPznqPozFYZpx377BbQJOHlZnIOlY7XggB1U8%2B9QOlpMoAHOqkZ4CTk9dmNPn9RReDyWDgDCNDsO1VLJPhHsKItOcBUuIarpdATCpeMRg3iR%2BRQMkGKQD%2By%2FpJYDZ8WOILnYLyh%2BsNK7MBwDk2tTspEMErvp5ijmh%2B48R8Il2Oc7CSLT%2BkYjJbJUALiLlVPmDBaaX6ZVWA6LLEq8uskyOocPDAYYa4go3JYanVAgrS9mRrqvK5wfl%2FyTToKdrcjC78x0R28nIKAEb5RHhXLjUkApOZAlv47QDMbFDY7E63Mr18gCz5IvUCouXBZ68%2BAnmsPA8UVS1Evv0iTLS9xdESVW14%2FaMy7B2hIf1aPvIf3daomAHSxWprOr%2FC66%2BGeu7roXCJh3st8diJCvLGeyU3LtdN0WGKAzaAH9nAzSPHJMCHPnkcHEWFnspmCO4Rx6%2FGHrnnfysI9GT6JoAj03glspQJI96pmMIPw%2B78GOqUBKasniWTWKl%2B7LphxboaJTJyuQwcQOKZAQBBGFD%2BZEjeoU2HBRTJs2Emofl%2BPdjrbc22HrDUCFejpakaV1JPyhp%2FCVzQJgf9sKeVZpP1r68wpqoPLS77y9p36A4HCxD60kt0TeUha8p9b7DNdikV58z4ocVAdMcZUQPZMcxf5OEALBJ0M%2BwLsQ3inUZVLdZfb1HQw4iCg4kCof8Bh8OxIAi3No8GG&X-Amz-Signature=cb6f8d6eced2f1c6a190ee2ccae445b5188dfc6707a2a2fc4931b358b586e3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDTKYS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATpj%2FfjAugx6udlZpIaNJOIwD%2B3FU%2FKuszGAA%2FHwVqwAiEAmatdXaLZi0kxnehyhSLdVR1nFHP1PtOFW8234MonFEEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDx56t%2FUA2iyEmC0gCrcA%2FphxUm9kxU2lm0eRZ5T3TVGdJNjBrffkgU6vWvTpwG4fPC93hmRIRzQWcit2SXnFWLsZmNhGN9Q35a%2Fwv%2FCVF9de06PsswSFixWtOU2dE4CgRBkda3C1kRmbUKaOtVI%2BnRpV6y%2BOniaP7V8XzxW4nigl%2B4fXJPznqPozFYZpx377BbQJOHlZnIOlY7XggB1U8%2B9QOlpMoAHOqkZ4CTk9dmNPn9RReDyWDgDCNDsO1VLJPhHsKItOcBUuIarpdATCpeMRg3iR%2BRQMkGKQD%2By%2FpJYDZ8WOILnYLyh%2BsNK7MBwDk2tTspEMErvp5ijmh%2B48R8Il2Oc7CSLT%2BkYjJbJUALiLlVPmDBaaX6ZVWA6LLEq8uskyOocPDAYYa4go3JYanVAgrS9mRrqvK5wfl%2FyTToKdrcjC78x0R28nIKAEb5RHhXLjUkApOZAlv47QDMbFDY7E63Mr18gCz5IvUCouXBZ68%2BAnmsPA8UVS1Evv0iTLS9xdESVW14%2FaMy7B2hIf1aPvIf3daomAHSxWprOr%2FC66%2BGeu7roXCJh3st8diJCvLGeyU3LtdN0WGKAzaAH9nAzSPHJMCHPnkcHEWFnspmCO4Rx6%2FGHrnnfysI9GT6JoAj03glspQJI96pmMIPw%2B78GOqUBKasniWTWKl%2B7LphxboaJTJyuQwcQOKZAQBBGFD%2BZEjeoU2HBRTJs2Emofl%2BPdjrbc22HrDUCFejpakaV1JPyhp%2FCVzQJgf9sKeVZpP1r68wpqoPLS77y9p36A4HCxD60kt0TeUha8p9b7DNdikV58z4ocVAdMcZUQPZMcxf5OEALBJ0M%2BwLsQ3inUZVLdZfb1HQw4iCg4kCof8Bh8OxIAi3No8GG&X-Amz-Signature=743554a44ad1c7e93a21953b0482eff704e52a3fc36480f4662439adc73d3e57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDTKYS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATpj%2FfjAugx6udlZpIaNJOIwD%2B3FU%2FKuszGAA%2FHwVqwAiEAmatdXaLZi0kxnehyhSLdVR1nFHP1PtOFW8234MonFEEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDx56t%2FUA2iyEmC0gCrcA%2FphxUm9kxU2lm0eRZ5T3TVGdJNjBrffkgU6vWvTpwG4fPC93hmRIRzQWcit2SXnFWLsZmNhGN9Q35a%2Fwv%2FCVF9de06PsswSFixWtOU2dE4CgRBkda3C1kRmbUKaOtVI%2BnRpV6y%2BOniaP7V8XzxW4nigl%2B4fXJPznqPozFYZpx377BbQJOHlZnIOlY7XggB1U8%2B9QOlpMoAHOqkZ4CTk9dmNPn9RReDyWDgDCNDsO1VLJPhHsKItOcBUuIarpdATCpeMRg3iR%2BRQMkGKQD%2By%2FpJYDZ8WOILnYLyh%2BsNK7MBwDk2tTspEMErvp5ijmh%2B48R8Il2Oc7CSLT%2BkYjJbJUALiLlVPmDBaaX6ZVWA6LLEq8uskyOocPDAYYa4go3JYanVAgrS9mRrqvK5wfl%2FyTToKdrcjC78x0R28nIKAEb5RHhXLjUkApOZAlv47QDMbFDY7E63Mr18gCz5IvUCouXBZ68%2BAnmsPA8UVS1Evv0iTLS9xdESVW14%2FaMy7B2hIf1aPvIf3daomAHSxWprOr%2FC66%2BGeu7roXCJh3st8diJCvLGeyU3LtdN0WGKAzaAH9nAzSPHJMCHPnkcHEWFnspmCO4Rx6%2FGHrnnfysI9GT6JoAj03glspQJI96pmMIPw%2B78GOqUBKasniWTWKl%2B7LphxboaJTJyuQwcQOKZAQBBGFD%2BZEjeoU2HBRTJs2Emofl%2BPdjrbc22HrDUCFejpakaV1JPyhp%2FCVzQJgf9sKeVZpP1r68wpqoPLS77y9p36A4HCxD60kt0TeUha8p9b7DNdikV58z4ocVAdMcZUQPZMcxf5OEALBJ0M%2BwLsQ3inUZVLdZfb1HQw4iCg4kCof8Bh8OxIAi3No8GG&X-Amz-Signature=c022a1fdb20bc23fbb1b0901df1de7a7e07b9644a6068d7f504e97a20ea055ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDTKYS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATpj%2FfjAugx6udlZpIaNJOIwD%2B3FU%2FKuszGAA%2FHwVqwAiEAmatdXaLZi0kxnehyhSLdVR1nFHP1PtOFW8234MonFEEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDx56t%2FUA2iyEmC0gCrcA%2FphxUm9kxU2lm0eRZ5T3TVGdJNjBrffkgU6vWvTpwG4fPC93hmRIRzQWcit2SXnFWLsZmNhGN9Q35a%2Fwv%2FCVF9de06PsswSFixWtOU2dE4CgRBkda3C1kRmbUKaOtVI%2BnRpV6y%2BOniaP7V8XzxW4nigl%2B4fXJPznqPozFYZpx377BbQJOHlZnIOlY7XggB1U8%2B9QOlpMoAHOqkZ4CTk9dmNPn9RReDyWDgDCNDsO1VLJPhHsKItOcBUuIarpdATCpeMRg3iR%2BRQMkGKQD%2By%2FpJYDZ8WOILnYLyh%2BsNK7MBwDk2tTspEMErvp5ijmh%2B48R8Il2Oc7CSLT%2BkYjJbJUALiLlVPmDBaaX6ZVWA6LLEq8uskyOocPDAYYa4go3JYanVAgrS9mRrqvK5wfl%2FyTToKdrcjC78x0R28nIKAEb5RHhXLjUkApOZAlv47QDMbFDY7E63Mr18gCz5IvUCouXBZ68%2BAnmsPA8UVS1Evv0iTLS9xdESVW14%2FaMy7B2hIf1aPvIf3daomAHSxWprOr%2FC66%2BGeu7roXCJh3st8diJCvLGeyU3LtdN0WGKAzaAH9nAzSPHJMCHPnkcHEWFnspmCO4Rx6%2FGHrnnfysI9GT6JoAj03glspQJI96pmMIPw%2B78GOqUBKasniWTWKl%2B7LphxboaJTJyuQwcQOKZAQBBGFD%2BZEjeoU2HBRTJs2Emofl%2BPdjrbc22HrDUCFejpakaV1JPyhp%2FCVzQJgf9sKeVZpP1r68wpqoPLS77y9p36A4HCxD60kt0TeUha8p9b7DNdikV58z4ocVAdMcZUQPZMcxf5OEALBJ0M%2BwLsQ3inUZVLdZfb1HQw4iCg4kCof8Bh8OxIAi3No8GG&X-Amz-Signature=d6b57568c0c7c627ced6308f5e8f3f103923694848b939e06a6fe76acc5eb200&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKDTKYS7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATpj%2FfjAugx6udlZpIaNJOIwD%2B3FU%2FKuszGAA%2FHwVqwAiEAmatdXaLZi0kxnehyhSLdVR1nFHP1PtOFW8234MonFEEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDx56t%2FUA2iyEmC0gCrcA%2FphxUm9kxU2lm0eRZ5T3TVGdJNjBrffkgU6vWvTpwG4fPC93hmRIRzQWcit2SXnFWLsZmNhGN9Q35a%2Fwv%2FCVF9de06PsswSFixWtOU2dE4CgRBkda3C1kRmbUKaOtVI%2BnRpV6y%2BOniaP7V8XzxW4nigl%2B4fXJPznqPozFYZpx377BbQJOHlZnIOlY7XggB1U8%2B9QOlpMoAHOqkZ4CTk9dmNPn9RReDyWDgDCNDsO1VLJPhHsKItOcBUuIarpdATCpeMRg3iR%2BRQMkGKQD%2By%2FpJYDZ8WOILnYLyh%2BsNK7MBwDk2tTspEMErvp5ijmh%2B48R8Il2Oc7CSLT%2BkYjJbJUALiLlVPmDBaaX6ZVWA6LLEq8uskyOocPDAYYa4go3JYanVAgrS9mRrqvK5wfl%2FyTToKdrcjC78x0R28nIKAEb5RHhXLjUkApOZAlv47QDMbFDY7E63Mr18gCz5IvUCouXBZ68%2BAnmsPA8UVS1Evv0iTLS9xdESVW14%2FaMy7B2hIf1aPvIf3daomAHSxWprOr%2FC66%2BGeu7roXCJh3st8diJCvLGeyU3LtdN0WGKAzaAH9nAzSPHJMCHPnkcHEWFnspmCO4Rx6%2FGHrnnfysI9GT6JoAj03glspQJI96pmMIPw%2B78GOqUBKasniWTWKl%2B7LphxboaJTJyuQwcQOKZAQBBGFD%2BZEjeoU2HBRTJs2Emofl%2BPdjrbc22HrDUCFejpakaV1JPyhp%2FCVzQJgf9sKeVZpP1r68wpqoPLS77y9p36A4HCxD60kt0TeUha8p9b7DNdikV58z4ocVAdMcZUQPZMcxf5OEALBJ0M%2BwLsQ3inUZVLdZfb1HQw4iCg4kCof8Bh8OxIAi3No8GG&X-Amz-Signature=7c235d492969efef6b38f3d7d9a5fe46a2683797d125c5bafd4ef17a6eb5dcb7&X-Amz-SignedHeaders=host&x-id=GetObject)
