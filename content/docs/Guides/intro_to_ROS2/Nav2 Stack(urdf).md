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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQQN62E%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8n0uK82kbUpZja2QEICMdCF8kLudYEEjNxIRjfVi14AIgWxB0%2Bae2B3MQzh7UpVX%2BwOP9dpw98BpJZh8Pg6lnU8kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbs2xe4NuuMNjrqMircA6vlG8ATz8AXrSghYiftynxqqWd%2BHzxN9hQbuWRFDctw%2BueNhgPJL%2FsN6NUs9lVf3eIMNHk6yN5msCmvGrB7QAEAcpMG9xwsmhxGoxqcsnH2e4II%2FpXUVedAqr7fdwMy6ezj7My5EzVTPh1Wd2wAfqnGK4SlitanDy0UD%2F4%2BG5QFivNNHKgPhCO%2FDdDt4gkUZVkKoje2mnvitm1VQBrKPQl0lZCWgBFMlGnH2cpKE1zQflci1B8vq%2BdiwZs5TxOE55CWEPu3uv%2F2RKN%2FjmcX8eWVbY5Iy8RwyOi2haFArT2Mg5XlZk7fZXR8h0dd%2FHM7qrvhtTi7IIfI6KArVbUq%2BEzU3q5DBAZ3PSClDC5Tc4GHyUogU8X2NYL4GCTxRtL1cETQ%2FmL5eG8dB1jJwOZR1t3OLrNnqyVWzsystVVxi584Gvwr%2FKSkVpCGGpsSGLRnfq64qBRNBcuQLLK09TK2Ty8uirEm8eA59iFleNR4ZkOwqvUFBIfXByuzrxB2SHgX%2BrYcCheOfTl1SumHszQUxNv9T%2BNvKPGIy44Gb6Vdtmgvjdd3xRHCHaNBp5VwimKxaaGde%2BMowzYk9r31vFn%2BKDe2Thq3X17FVzZLCU91NlNTpXQiSijE7z1cQ8nvMMXSnL4GOqUBxBToLAdYuaen1IsV3V7SbzdXTk5gjRxgsewFQG%2FAM%2F4GtRW%2BBB%2BObPfXWvNeKB2ytcMcO9Vv7zPIxr51byBycHgh%2Bt%2FeezGyM1%2FhEr9cXjFs2E94QXHpO2bVOMQcyj5kBfO86NdzfBkScoWt%2FX%2FQXZG7Fj1iKvVz2CA2wm2TqqN7MeSCVk%2FB8HHz98pVN%2FRAousY08hkDh8k69%2BfwzoDTW%2FCQRPr&X-Amz-Signature=6812576f03786956b2c8212779de6f4276705fec5f8a885124027181f57e2f0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQQN62E%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8n0uK82kbUpZja2QEICMdCF8kLudYEEjNxIRjfVi14AIgWxB0%2Bae2B3MQzh7UpVX%2BwOP9dpw98BpJZh8Pg6lnU8kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbs2xe4NuuMNjrqMircA6vlG8ATz8AXrSghYiftynxqqWd%2BHzxN9hQbuWRFDctw%2BueNhgPJL%2FsN6NUs9lVf3eIMNHk6yN5msCmvGrB7QAEAcpMG9xwsmhxGoxqcsnH2e4II%2FpXUVedAqr7fdwMy6ezj7My5EzVTPh1Wd2wAfqnGK4SlitanDy0UD%2F4%2BG5QFivNNHKgPhCO%2FDdDt4gkUZVkKoje2mnvitm1VQBrKPQl0lZCWgBFMlGnH2cpKE1zQflci1B8vq%2BdiwZs5TxOE55CWEPu3uv%2F2RKN%2FjmcX8eWVbY5Iy8RwyOi2haFArT2Mg5XlZk7fZXR8h0dd%2FHM7qrvhtTi7IIfI6KArVbUq%2BEzU3q5DBAZ3PSClDC5Tc4GHyUogU8X2NYL4GCTxRtL1cETQ%2FmL5eG8dB1jJwOZR1t3OLrNnqyVWzsystVVxi584Gvwr%2FKSkVpCGGpsSGLRnfq64qBRNBcuQLLK09TK2Ty8uirEm8eA59iFleNR4ZkOwqvUFBIfXByuzrxB2SHgX%2BrYcCheOfTl1SumHszQUxNv9T%2BNvKPGIy44Gb6Vdtmgvjdd3xRHCHaNBp5VwimKxaaGde%2BMowzYk9r31vFn%2BKDe2Thq3X17FVzZLCU91NlNTpXQiSijE7z1cQ8nvMMXSnL4GOqUBxBToLAdYuaen1IsV3V7SbzdXTk5gjRxgsewFQG%2FAM%2F4GtRW%2BBB%2BObPfXWvNeKB2ytcMcO9Vv7zPIxr51byBycHgh%2Bt%2FeezGyM1%2FhEr9cXjFs2E94QXHpO2bVOMQcyj5kBfO86NdzfBkScoWt%2FX%2FQXZG7Fj1iKvVz2CA2wm2TqqN7MeSCVk%2FB8HHz98pVN%2FRAousY08hkDh8k69%2BfwzoDTW%2FCQRPr&X-Amz-Signature=852a634701d34d0a68e53071772c2582d5cbf137eb224cf64bbe9c54b4b4b11f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQQN62E%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8n0uK82kbUpZja2QEICMdCF8kLudYEEjNxIRjfVi14AIgWxB0%2Bae2B3MQzh7UpVX%2BwOP9dpw98BpJZh8Pg6lnU8kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbs2xe4NuuMNjrqMircA6vlG8ATz8AXrSghYiftynxqqWd%2BHzxN9hQbuWRFDctw%2BueNhgPJL%2FsN6NUs9lVf3eIMNHk6yN5msCmvGrB7QAEAcpMG9xwsmhxGoxqcsnH2e4II%2FpXUVedAqr7fdwMy6ezj7My5EzVTPh1Wd2wAfqnGK4SlitanDy0UD%2F4%2BG5QFivNNHKgPhCO%2FDdDt4gkUZVkKoje2mnvitm1VQBrKPQl0lZCWgBFMlGnH2cpKE1zQflci1B8vq%2BdiwZs5TxOE55CWEPu3uv%2F2RKN%2FjmcX8eWVbY5Iy8RwyOi2haFArT2Mg5XlZk7fZXR8h0dd%2FHM7qrvhtTi7IIfI6KArVbUq%2BEzU3q5DBAZ3PSClDC5Tc4GHyUogU8X2NYL4GCTxRtL1cETQ%2FmL5eG8dB1jJwOZR1t3OLrNnqyVWzsystVVxi584Gvwr%2FKSkVpCGGpsSGLRnfq64qBRNBcuQLLK09TK2Ty8uirEm8eA59iFleNR4ZkOwqvUFBIfXByuzrxB2SHgX%2BrYcCheOfTl1SumHszQUxNv9T%2BNvKPGIy44Gb6Vdtmgvjdd3xRHCHaNBp5VwimKxaaGde%2BMowzYk9r31vFn%2BKDe2Thq3X17FVzZLCU91NlNTpXQiSijE7z1cQ8nvMMXSnL4GOqUBxBToLAdYuaen1IsV3V7SbzdXTk5gjRxgsewFQG%2FAM%2F4GtRW%2BBB%2BObPfXWvNeKB2ytcMcO9Vv7zPIxr51byBycHgh%2Bt%2FeezGyM1%2FhEr9cXjFs2E94QXHpO2bVOMQcyj5kBfO86NdzfBkScoWt%2FX%2FQXZG7Fj1iKvVz2CA2wm2TqqN7MeSCVk%2FB8HHz98pVN%2FRAousY08hkDh8k69%2BfwzoDTW%2FCQRPr&X-Amz-Signature=6c54d6cd80cd82deba9da9af8f41882d1115f04fb2a374fc9afa6a577d89027c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQQN62E%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8n0uK82kbUpZja2QEICMdCF8kLudYEEjNxIRjfVi14AIgWxB0%2Bae2B3MQzh7UpVX%2BwOP9dpw98BpJZh8Pg6lnU8kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbs2xe4NuuMNjrqMircA6vlG8ATz8AXrSghYiftynxqqWd%2BHzxN9hQbuWRFDctw%2BueNhgPJL%2FsN6NUs9lVf3eIMNHk6yN5msCmvGrB7QAEAcpMG9xwsmhxGoxqcsnH2e4II%2FpXUVedAqr7fdwMy6ezj7My5EzVTPh1Wd2wAfqnGK4SlitanDy0UD%2F4%2BG5QFivNNHKgPhCO%2FDdDt4gkUZVkKoje2mnvitm1VQBrKPQl0lZCWgBFMlGnH2cpKE1zQflci1B8vq%2BdiwZs5TxOE55CWEPu3uv%2F2RKN%2FjmcX8eWVbY5Iy8RwyOi2haFArT2Mg5XlZk7fZXR8h0dd%2FHM7qrvhtTi7IIfI6KArVbUq%2BEzU3q5DBAZ3PSClDC5Tc4GHyUogU8X2NYL4GCTxRtL1cETQ%2FmL5eG8dB1jJwOZR1t3OLrNnqyVWzsystVVxi584Gvwr%2FKSkVpCGGpsSGLRnfq64qBRNBcuQLLK09TK2Ty8uirEm8eA59iFleNR4ZkOwqvUFBIfXByuzrxB2SHgX%2BrYcCheOfTl1SumHszQUxNv9T%2BNvKPGIy44Gb6Vdtmgvjdd3xRHCHaNBp5VwimKxaaGde%2BMowzYk9r31vFn%2BKDe2Thq3X17FVzZLCU91NlNTpXQiSijE7z1cQ8nvMMXSnL4GOqUBxBToLAdYuaen1IsV3V7SbzdXTk5gjRxgsewFQG%2FAM%2F4GtRW%2BBB%2BObPfXWvNeKB2ytcMcO9Vv7zPIxr51byBycHgh%2Bt%2FeezGyM1%2FhEr9cXjFs2E94QXHpO2bVOMQcyj5kBfO86NdzfBkScoWt%2FX%2FQXZG7Fj1iKvVz2CA2wm2TqqN7MeSCVk%2FB8HHz98pVN%2FRAousY08hkDh8k69%2BfwzoDTW%2FCQRPr&X-Amz-Signature=4ad1098978a2e61c962289b98933f9039cc641ffc50fdcd88094f20ab796d0be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQQN62E%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8n0uK82kbUpZja2QEICMdCF8kLudYEEjNxIRjfVi14AIgWxB0%2Bae2B3MQzh7UpVX%2BwOP9dpw98BpJZh8Pg6lnU8kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbs2xe4NuuMNjrqMircA6vlG8ATz8AXrSghYiftynxqqWd%2BHzxN9hQbuWRFDctw%2BueNhgPJL%2FsN6NUs9lVf3eIMNHk6yN5msCmvGrB7QAEAcpMG9xwsmhxGoxqcsnH2e4II%2FpXUVedAqr7fdwMy6ezj7My5EzVTPh1Wd2wAfqnGK4SlitanDy0UD%2F4%2BG5QFivNNHKgPhCO%2FDdDt4gkUZVkKoje2mnvitm1VQBrKPQl0lZCWgBFMlGnH2cpKE1zQflci1B8vq%2BdiwZs5TxOE55CWEPu3uv%2F2RKN%2FjmcX8eWVbY5Iy8RwyOi2haFArT2Mg5XlZk7fZXR8h0dd%2FHM7qrvhtTi7IIfI6KArVbUq%2BEzU3q5DBAZ3PSClDC5Tc4GHyUogU8X2NYL4GCTxRtL1cETQ%2FmL5eG8dB1jJwOZR1t3OLrNnqyVWzsystVVxi584Gvwr%2FKSkVpCGGpsSGLRnfq64qBRNBcuQLLK09TK2Ty8uirEm8eA59iFleNR4ZkOwqvUFBIfXByuzrxB2SHgX%2BrYcCheOfTl1SumHszQUxNv9T%2BNvKPGIy44Gb6Vdtmgvjdd3xRHCHaNBp5VwimKxaaGde%2BMowzYk9r31vFn%2BKDe2Thq3X17FVzZLCU91NlNTpXQiSijE7z1cQ8nvMMXSnL4GOqUBxBToLAdYuaen1IsV3V7SbzdXTk5gjRxgsewFQG%2FAM%2F4GtRW%2BBB%2BObPfXWvNeKB2ytcMcO9Vv7zPIxr51byBycHgh%2Bt%2FeezGyM1%2FhEr9cXjFs2E94QXHpO2bVOMQcyj5kBfO86NdzfBkScoWt%2FX%2FQXZG7Fj1iKvVz2CA2wm2TqqN7MeSCVk%2FB8HHz98pVN%2FRAousY08hkDh8k69%2BfwzoDTW%2FCQRPr&X-Amz-Signature=6f4f9575285f5a77031557f147e965a4bea9fdd9eb57d2a11829578f97ec8993&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQQN62E%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8n0uK82kbUpZja2QEICMdCF8kLudYEEjNxIRjfVi14AIgWxB0%2Bae2B3MQzh7UpVX%2BwOP9dpw98BpJZh8Pg6lnU8kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbs2xe4NuuMNjrqMircA6vlG8ATz8AXrSghYiftynxqqWd%2BHzxN9hQbuWRFDctw%2BueNhgPJL%2FsN6NUs9lVf3eIMNHk6yN5msCmvGrB7QAEAcpMG9xwsmhxGoxqcsnH2e4II%2FpXUVedAqr7fdwMy6ezj7My5EzVTPh1Wd2wAfqnGK4SlitanDy0UD%2F4%2BG5QFivNNHKgPhCO%2FDdDt4gkUZVkKoje2mnvitm1VQBrKPQl0lZCWgBFMlGnH2cpKE1zQflci1B8vq%2BdiwZs5TxOE55CWEPu3uv%2F2RKN%2FjmcX8eWVbY5Iy8RwyOi2haFArT2Mg5XlZk7fZXR8h0dd%2FHM7qrvhtTi7IIfI6KArVbUq%2BEzU3q5DBAZ3PSClDC5Tc4GHyUogU8X2NYL4GCTxRtL1cETQ%2FmL5eG8dB1jJwOZR1t3OLrNnqyVWzsystVVxi584Gvwr%2FKSkVpCGGpsSGLRnfq64qBRNBcuQLLK09TK2Ty8uirEm8eA59iFleNR4ZkOwqvUFBIfXByuzrxB2SHgX%2BrYcCheOfTl1SumHszQUxNv9T%2BNvKPGIy44Gb6Vdtmgvjdd3xRHCHaNBp5VwimKxaaGde%2BMowzYk9r31vFn%2BKDe2Thq3X17FVzZLCU91NlNTpXQiSijE7z1cQ8nvMMXSnL4GOqUBxBToLAdYuaen1IsV3V7SbzdXTk5gjRxgsewFQG%2FAM%2F4GtRW%2BBB%2BObPfXWvNeKB2ytcMcO9Vv7zPIxr51byBycHgh%2Bt%2FeezGyM1%2FhEr9cXjFs2E94QXHpO2bVOMQcyj5kBfO86NdzfBkScoWt%2FX%2FQXZG7Fj1iKvVz2CA2wm2TqqN7MeSCVk%2FB8HHz98pVN%2FRAousY08hkDh8k69%2BfwzoDTW%2FCQRPr&X-Amz-Signature=80c5a7a329f8dfaaf9b09d2653562852f9b972c7b8e5369bf48c62cc672a2e6d&X-Amz-SignedHeaders=host&x-id=GetObject)
