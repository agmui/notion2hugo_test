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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7GRQ4P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCCmDS%2BeUZMAcRIZR5T5yhLqWDXo9a%2Bbmo%2FucTkGOHGBQIgBCW9PsSJXtCm0WtShSIYXqphQ3IM7efEY5gl32EqavYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLcq1a43eMMT4IIY0SrcA7Ghzji3SARGNrsUTaUmG58F9Tv3AnRTVaUYjMvWTOiXmmr8GvZm9OZEVeUIfU1AQ7SL1Ax9PPfS4kQobPyiQJ1EuLIxUOE27Oq4ymamDmoZINEG9AB5pxhUbvGT%2F8sy9di%2F76MTPn1VJAqOA9Y5NfuV1zYirfKA48LKOOh7shwPBiayB8%2FK0zxpbU2rDHjFHBvnWDjk2aYxNxBIfbanZbKa4ONAUFG1Cpjrg%2FN9CK0hafMbsmB6aKMW2SQg4ZOAKdfpbaqFho7NYjrtYEw548SHiMmb%2F%2BCFY2E%2Fc%2FJVS38da8%2FL1%2BsiZpPdxOfO%2B1zbXq%2FbkAWr%2B7wuXmvHlFFyvL6TlQFdaHzPxXD1qbDzJfTrRxl11bUpuv5VcVfBApbRjXLMHDeT3HtelFOTsv0%2FPLzQoG95G1YTh8Jzvt4BtIUMi8SIHaRuMBOy4QT%2B6p2rrwwolcwNdgZ8y277XJjMtT1SAzOsbto%2Bn5RWaw1JviWpqUxmSLqofwCDj3PVyHC8X3L6NcFuQPhIbiXTwXwkAMNWVGDbhQE6Y3JJ8bkYS7pqaIA9d%2FrpV01ThDd6Fl6%2FFuPrKP7E47kQppwzpos3WdWikEfyVbFgNww46VUa6xzW7scJP%2BQUZsUnXcO7MMX9xb0GOqUBPZnh8Wj%2FgNLLhgObSvRVxVs7rKrD7%2Bsc4DuCX4%2FYcGzFA5qZEqP0%2BPkcNeB7a%2BGCuE32rxCC4ZbCtHUOJSx8wPuanJtYfy%2FoL4KAKHqmWNjpclc1TXNNa%2B2Ay7AtFxUX16%2FyfL9zA90SQnoN%2F25bGUMxL%2B7irTwH%2FzPXs%2FFqKJbP4ifNgfgigDQ4LmkCrk%2F2NfQjiOPTy309oqYlgItZL%2FwKOr8t&X-Amz-Signature=e637cfdda7b1818be2bd11dbb27ff900fecf82e77990195c42ce46a87fa470db&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7GRQ4P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCCmDS%2BeUZMAcRIZR5T5yhLqWDXo9a%2Bbmo%2FucTkGOHGBQIgBCW9PsSJXtCm0WtShSIYXqphQ3IM7efEY5gl32EqavYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLcq1a43eMMT4IIY0SrcA7Ghzji3SARGNrsUTaUmG58F9Tv3AnRTVaUYjMvWTOiXmmr8GvZm9OZEVeUIfU1AQ7SL1Ax9PPfS4kQobPyiQJ1EuLIxUOE27Oq4ymamDmoZINEG9AB5pxhUbvGT%2F8sy9di%2F76MTPn1VJAqOA9Y5NfuV1zYirfKA48LKOOh7shwPBiayB8%2FK0zxpbU2rDHjFHBvnWDjk2aYxNxBIfbanZbKa4ONAUFG1Cpjrg%2FN9CK0hafMbsmB6aKMW2SQg4ZOAKdfpbaqFho7NYjrtYEw548SHiMmb%2F%2BCFY2E%2Fc%2FJVS38da8%2FL1%2BsiZpPdxOfO%2B1zbXq%2FbkAWr%2B7wuXmvHlFFyvL6TlQFdaHzPxXD1qbDzJfTrRxl11bUpuv5VcVfBApbRjXLMHDeT3HtelFOTsv0%2FPLzQoG95G1YTh8Jzvt4BtIUMi8SIHaRuMBOy4QT%2B6p2rrwwolcwNdgZ8y277XJjMtT1SAzOsbto%2Bn5RWaw1JviWpqUxmSLqofwCDj3PVyHC8X3L6NcFuQPhIbiXTwXwkAMNWVGDbhQE6Y3JJ8bkYS7pqaIA9d%2FrpV01ThDd6Fl6%2FFuPrKP7E47kQppwzpos3WdWikEfyVbFgNww46VUa6xzW7scJP%2BQUZsUnXcO7MMX9xb0GOqUBPZnh8Wj%2FgNLLhgObSvRVxVs7rKrD7%2Bsc4DuCX4%2FYcGzFA5qZEqP0%2BPkcNeB7a%2BGCuE32rxCC4ZbCtHUOJSx8wPuanJtYfy%2FoL4KAKHqmWNjpclc1TXNNa%2B2Ay7AtFxUX16%2FyfL9zA90SQnoN%2F25bGUMxL%2B7irTwH%2FzPXs%2FFqKJbP4ifNgfgigDQ4LmkCrk%2F2NfQjiOPTy309oqYlgItZL%2FwKOr8t&X-Amz-Signature=595e17704bc9008f8c77dce032ea2ee6bf77cc427d558e54b63abb615b3b3b24&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7GRQ4P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCCmDS%2BeUZMAcRIZR5T5yhLqWDXo9a%2Bbmo%2FucTkGOHGBQIgBCW9PsSJXtCm0WtShSIYXqphQ3IM7efEY5gl32EqavYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLcq1a43eMMT4IIY0SrcA7Ghzji3SARGNrsUTaUmG58F9Tv3AnRTVaUYjMvWTOiXmmr8GvZm9OZEVeUIfU1AQ7SL1Ax9PPfS4kQobPyiQJ1EuLIxUOE27Oq4ymamDmoZINEG9AB5pxhUbvGT%2F8sy9di%2F76MTPn1VJAqOA9Y5NfuV1zYirfKA48LKOOh7shwPBiayB8%2FK0zxpbU2rDHjFHBvnWDjk2aYxNxBIfbanZbKa4ONAUFG1Cpjrg%2FN9CK0hafMbsmB6aKMW2SQg4ZOAKdfpbaqFho7NYjrtYEw548SHiMmb%2F%2BCFY2E%2Fc%2FJVS38da8%2FL1%2BsiZpPdxOfO%2B1zbXq%2FbkAWr%2B7wuXmvHlFFyvL6TlQFdaHzPxXD1qbDzJfTrRxl11bUpuv5VcVfBApbRjXLMHDeT3HtelFOTsv0%2FPLzQoG95G1YTh8Jzvt4BtIUMi8SIHaRuMBOy4QT%2B6p2rrwwolcwNdgZ8y277XJjMtT1SAzOsbto%2Bn5RWaw1JviWpqUxmSLqofwCDj3PVyHC8X3L6NcFuQPhIbiXTwXwkAMNWVGDbhQE6Y3JJ8bkYS7pqaIA9d%2FrpV01ThDd6Fl6%2FFuPrKP7E47kQppwzpos3WdWikEfyVbFgNww46VUa6xzW7scJP%2BQUZsUnXcO7MMX9xb0GOqUBPZnh8Wj%2FgNLLhgObSvRVxVs7rKrD7%2Bsc4DuCX4%2FYcGzFA5qZEqP0%2BPkcNeB7a%2BGCuE32rxCC4ZbCtHUOJSx8wPuanJtYfy%2FoL4KAKHqmWNjpclc1TXNNa%2B2Ay7AtFxUX16%2FyfL9zA90SQnoN%2F25bGUMxL%2B7irTwH%2FzPXs%2FFqKJbP4ifNgfgigDQ4LmkCrk%2F2NfQjiOPTy309oqYlgItZL%2FwKOr8t&X-Amz-Signature=bad9d8575483008ab7f055e8b96e3a784dd5e2b76cd953b7a5a25c7cec7ccd95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7GRQ4P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCCmDS%2BeUZMAcRIZR5T5yhLqWDXo9a%2Bbmo%2FucTkGOHGBQIgBCW9PsSJXtCm0WtShSIYXqphQ3IM7efEY5gl32EqavYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLcq1a43eMMT4IIY0SrcA7Ghzji3SARGNrsUTaUmG58F9Tv3AnRTVaUYjMvWTOiXmmr8GvZm9OZEVeUIfU1AQ7SL1Ax9PPfS4kQobPyiQJ1EuLIxUOE27Oq4ymamDmoZINEG9AB5pxhUbvGT%2F8sy9di%2F76MTPn1VJAqOA9Y5NfuV1zYirfKA48LKOOh7shwPBiayB8%2FK0zxpbU2rDHjFHBvnWDjk2aYxNxBIfbanZbKa4ONAUFG1Cpjrg%2FN9CK0hafMbsmB6aKMW2SQg4ZOAKdfpbaqFho7NYjrtYEw548SHiMmb%2F%2BCFY2E%2Fc%2FJVS38da8%2FL1%2BsiZpPdxOfO%2B1zbXq%2FbkAWr%2B7wuXmvHlFFyvL6TlQFdaHzPxXD1qbDzJfTrRxl11bUpuv5VcVfBApbRjXLMHDeT3HtelFOTsv0%2FPLzQoG95G1YTh8Jzvt4BtIUMi8SIHaRuMBOy4QT%2B6p2rrwwolcwNdgZ8y277XJjMtT1SAzOsbto%2Bn5RWaw1JviWpqUxmSLqofwCDj3PVyHC8X3L6NcFuQPhIbiXTwXwkAMNWVGDbhQE6Y3JJ8bkYS7pqaIA9d%2FrpV01ThDd6Fl6%2FFuPrKP7E47kQppwzpos3WdWikEfyVbFgNww46VUa6xzW7scJP%2BQUZsUnXcO7MMX9xb0GOqUBPZnh8Wj%2FgNLLhgObSvRVxVs7rKrD7%2Bsc4DuCX4%2FYcGzFA5qZEqP0%2BPkcNeB7a%2BGCuE32rxCC4ZbCtHUOJSx8wPuanJtYfy%2FoL4KAKHqmWNjpclc1TXNNa%2B2Ay7AtFxUX16%2FyfL9zA90SQnoN%2F25bGUMxL%2B7irTwH%2FzPXs%2FFqKJbP4ifNgfgigDQ4LmkCrk%2F2NfQjiOPTy309oqYlgItZL%2FwKOr8t&X-Amz-Signature=a962b0c2efa3ab0d19fcedaa2014698478b0c350f6d3f46fe4ef083400661f56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7GRQ4P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCCmDS%2BeUZMAcRIZR5T5yhLqWDXo9a%2Bbmo%2FucTkGOHGBQIgBCW9PsSJXtCm0WtShSIYXqphQ3IM7efEY5gl32EqavYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLcq1a43eMMT4IIY0SrcA7Ghzji3SARGNrsUTaUmG58F9Tv3AnRTVaUYjMvWTOiXmmr8GvZm9OZEVeUIfU1AQ7SL1Ax9PPfS4kQobPyiQJ1EuLIxUOE27Oq4ymamDmoZINEG9AB5pxhUbvGT%2F8sy9di%2F76MTPn1VJAqOA9Y5NfuV1zYirfKA48LKOOh7shwPBiayB8%2FK0zxpbU2rDHjFHBvnWDjk2aYxNxBIfbanZbKa4ONAUFG1Cpjrg%2FN9CK0hafMbsmB6aKMW2SQg4ZOAKdfpbaqFho7NYjrtYEw548SHiMmb%2F%2BCFY2E%2Fc%2FJVS38da8%2FL1%2BsiZpPdxOfO%2B1zbXq%2FbkAWr%2B7wuXmvHlFFyvL6TlQFdaHzPxXD1qbDzJfTrRxl11bUpuv5VcVfBApbRjXLMHDeT3HtelFOTsv0%2FPLzQoG95G1YTh8Jzvt4BtIUMi8SIHaRuMBOy4QT%2B6p2rrwwolcwNdgZ8y277XJjMtT1SAzOsbto%2Bn5RWaw1JviWpqUxmSLqofwCDj3PVyHC8X3L6NcFuQPhIbiXTwXwkAMNWVGDbhQE6Y3JJ8bkYS7pqaIA9d%2FrpV01ThDd6Fl6%2FFuPrKP7E47kQppwzpos3WdWikEfyVbFgNww46VUa6xzW7scJP%2BQUZsUnXcO7MMX9xb0GOqUBPZnh8Wj%2FgNLLhgObSvRVxVs7rKrD7%2Bsc4DuCX4%2FYcGzFA5qZEqP0%2BPkcNeB7a%2BGCuE32rxCC4ZbCtHUOJSx8wPuanJtYfy%2FoL4KAKHqmWNjpclc1TXNNa%2B2Ay7AtFxUX16%2FyfL9zA90SQnoN%2F25bGUMxL%2B7irTwH%2FzPXs%2FFqKJbP4ifNgfgigDQ4LmkCrk%2F2NfQjiOPTy309oqYlgItZL%2FwKOr8t&X-Amz-Signature=8ba1bc49c8782eeab538643a7a53ff7386967076bfe24d24f9f7a7c9b392acb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7GRQ4P%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCCmDS%2BeUZMAcRIZR5T5yhLqWDXo9a%2Bbmo%2FucTkGOHGBQIgBCW9PsSJXtCm0WtShSIYXqphQ3IM7efEY5gl32EqavYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLcq1a43eMMT4IIY0SrcA7Ghzji3SARGNrsUTaUmG58F9Tv3AnRTVaUYjMvWTOiXmmr8GvZm9OZEVeUIfU1AQ7SL1Ax9PPfS4kQobPyiQJ1EuLIxUOE27Oq4ymamDmoZINEG9AB5pxhUbvGT%2F8sy9di%2F76MTPn1VJAqOA9Y5NfuV1zYirfKA48LKOOh7shwPBiayB8%2FK0zxpbU2rDHjFHBvnWDjk2aYxNxBIfbanZbKa4ONAUFG1Cpjrg%2FN9CK0hafMbsmB6aKMW2SQg4ZOAKdfpbaqFho7NYjrtYEw548SHiMmb%2F%2BCFY2E%2Fc%2FJVS38da8%2FL1%2BsiZpPdxOfO%2B1zbXq%2FbkAWr%2B7wuXmvHlFFyvL6TlQFdaHzPxXD1qbDzJfTrRxl11bUpuv5VcVfBApbRjXLMHDeT3HtelFOTsv0%2FPLzQoG95G1YTh8Jzvt4BtIUMi8SIHaRuMBOy4QT%2B6p2rrwwolcwNdgZ8y277XJjMtT1SAzOsbto%2Bn5RWaw1JviWpqUxmSLqofwCDj3PVyHC8X3L6NcFuQPhIbiXTwXwkAMNWVGDbhQE6Y3JJ8bkYS7pqaIA9d%2FrpV01ThDd6Fl6%2FFuPrKP7E47kQppwzpos3WdWikEfyVbFgNww46VUa6xzW7scJP%2BQUZsUnXcO7MMX9xb0GOqUBPZnh8Wj%2FgNLLhgObSvRVxVs7rKrD7%2Bsc4DuCX4%2FYcGzFA5qZEqP0%2BPkcNeB7a%2BGCuE32rxCC4ZbCtHUOJSx8wPuanJtYfy%2FoL4KAKHqmWNjpclc1TXNNa%2B2Ay7AtFxUX16%2FyfL9zA90SQnoN%2F25bGUMxL%2B7irTwH%2FzPXs%2FFqKJbP4ifNgfgigDQ4LmkCrk%2F2NfQjiOPTy309oqYlgItZL%2FwKOr8t&X-Amz-Signature=0af166c75026c7ee50617b1af0cc45431774cdfac9f20e1e4204cc08ccc7af67&X-Amz-SignedHeaders=host&x-id=GetObject)
