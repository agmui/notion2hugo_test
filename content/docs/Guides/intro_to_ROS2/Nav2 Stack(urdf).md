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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJM7CKCM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMwHdV4cKosxXUKl1IEf4IpKMl3EQtsasqYkCN2oqDcgIgQaz294qtUb8hPm3wd5O9RgaOIrvsDNYtL%2B9c3Eu9hfwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCPnsXESr5ZKnI9hOSrcAyq91kURDxbiWZF6Rw1y2kpogPocDffZKVOFpqTzZ%2FAXSSv%2Bc%2Bifyv0YJuevuQ8GB%2Bcu%2Bu0SnZ5R5REIFaDQ9A86WecOsP%2Bdn3KJPB%2BCjOORq2l06pqpltF%2FelGZXP2W6Hnn2ivteBz0p7v1k0%2BYkDfY5iXnIFlM4dBiB3jYARn%2FOOP4I2KeHgDVTyB1yrWAYVBYu2GHFrMSDiEu99%2FwHaBhOBkbDdtQ8TTq0WQxpCT%2BJYkGLEzqQWWOkCd2miCiP%2FsSGwTARWsfpKnAop5Nb1nCVNMFZe3EyXukRtSfNoOHF%2FOP9ow9xX5JQsM8FTLV9Dv7tSZyb7TPJdMCQ3iLO9sY7JSS20wQnQe3Am2JR3Tme2D2Ytms4pIGGbgV4p%2F8NH0qZkM8vorDLXsF70iqS6GzPIQ6qhuGggvWcn%2F1X59uRvGcc5J86CIqurDNCgAAEFgaWK5UZvCEGqK9Q%2BzrOpQhOSARzvrIf62f2FO8lOjFy6nS3ebfd6cMPN66lM72ENye0Wt1wbXb60lKMonitzB1BaJnCBBOc9vYG0Opo9TqZgiJl5SyYzSfaq%2BtSEXPJyCJjC9HLhJ21jfMPT3jv%2BnDgT21wMY6KzhvOjfgaOorAn%2BR6UG2OjhVeZw%2BMMid274GOqUB%2BwCWeXdODkbIgrVmP03jIFT32s98vwb60X%2FlOJdDSZPSL9U61oVCXJpOYYkusX6dWDUt2ub2n2tjwl6RULyoDCAoChKmhFhwVt11pqiU8MM4JA7K4vbh2%2FJ0zITICVuW8Rydk%2FAD%2BAcfqXw2rhOFk%2Bc%2B83Vrs%2BI88sWU6Juctvm49VPJhlGAI4P32egmrj8%2Fjijj7sZwjia7j30r6Hr63moyDc15&X-Amz-Signature=3e426e6390e4e3105ace093793029df0258025eaa2fd5ef1a236361bfcf08f76&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJM7CKCM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMwHdV4cKosxXUKl1IEf4IpKMl3EQtsasqYkCN2oqDcgIgQaz294qtUb8hPm3wd5O9RgaOIrvsDNYtL%2B9c3Eu9hfwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCPnsXESr5ZKnI9hOSrcAyq91kURDxbiWZF6Rw1y2kpogPocDffZKVOFpqTzZ%2FAXSSv%2Bc%2Bifyv0YJuevuQ8GB%2Bcu%2Bu0SnZ5R5REIFaDQ9A86WecOsP%2Bdn3KJPB%2BCjOORq2l06pqpltF%2FelGZXP2W6Hnn2ivteBz0p7v1k0%2BYkDfY5iXnIFlM4dBiB3jYARn%2FOOP4I2KeHgDVTyB1yrWAYVBYu2GHFrMSDiEu99%2FwHaBhOBkbDdtQ8TTq0WQxpCT%2BJYkGLEzqQWWOkCd2miCiP%2FsSGwTARWsfpKnAop5Nb1nCVNMFZe3EyXukRtSfNoOHF%2FOP9ow9xX5JQsM8FTLV9Dv7tSZyb7TPJdMCQ3iLO9sY7JSS20wQnQe3Am2JR3Tme2D2Ytms4pIGGbgV4p%2F8NH0qZkM8vorDLXsF70iqS6GzPIQ6qhuGggvWcn%2F1X59uRvGcc5J86CIqurDNCgAAEFgaWK5UZvCEGqK9Q%2BzrOpQhOSARzvrIf62f2FO8lOjFy6nS3ebfd6cMPN66lM72ENye0Wt1wbXb60lKMonitzB1BaJnCBBOc9vYG0Opo9TqZgiJl5SyYzSfaq%2BtSEXPJyCJjC9HLhJ21jfMPT3jv%2BnDgT21wMY6KzhvOjfgaOorAn%2BR6UG2OjhVeZw%2BMMid274GOqUB%2BwCWeXdODkbIgrVmP03jIFT32s98vwb60X%2FlOJdDSZPSL9U61oVCXJpOYYkusX6dWDUt2ub2n2tjwl6RULyoDCAoChKmhFhwVt11pqiU8MM4JA7K4vbh2%2FJ0zITICVuW8Rydk%2FAD%2BAcfqXw2rhOFk%2Bc%2B83Vrs%2BI88sWU6Juctvm49VPJhlGAI4P32egmrj8%2Fjijj7sZwjia7j30r6Hr63moyDc15&X-Amz-Signature=8d9dc785f269c765de44de149986b61460c3c214b30028120ea5c02a93ab0fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJM7CKCM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMwHdV4cKosxXUKl1IEf4IpKMl3EQtsasqYkCN2oqDcgIgQaz294qtUb8hPm3wd5O9RgaOIrvsDNYtL%2B9c3Eu9hfwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCPnsXESr5ZKnI9hOSrcAyq91kURDxbiWZF6Rw1y2kpogPocDffZKVOFpqTzZ%2FAXSSv%2Bc%2Bifyv0YJuevuQ8GB%2Bcu%2Bu0SnZ5R5REIFaDQ9A86WecOsP%2Bdn3KJPB%2BCjOORq2l06pqpltF%2FelGZXP2W6Hnn2ivteBz0p7v1k0%2BYkDfY5iXnIFlM4dBiB3jYARn%2FOOP4I2KeHgDVTyB1yrWAYVBYu2GHFrMSDiEu99%2FwHaBhOBkbDdtQ8TTq0WQxpCT%2BJYkGLEzqQWWOkCd2miCiP%2FsSGwTARWsfpKnAop5Nb1nCVNMFZe3EyXukRtSfNoOHF%2FOP9ow9xX5JQsM8FTLV9Dv7tSZyb7TPJdMCQ3iLO9sY7JSS20wQnQe3Am2JR3Tme2D2Ytms4pIGGbgV4p%2F8NH0qZkM8vorDLXsF70iqS6GzPIQ6qhuGggvWcn%2F1X59uRvGcc5J86CIqurDNCgAAEFgaWK5UZvCEGqK9Q%2BzrOpQhOSARzvrIf62f2FO8lOjFy6nS3ebfd6cMPN66lM72ENye0Wt1wbXb60lKMonitzB1BaJnCBBOc9vYG0Opo9TqZgiJl5SyYzSfaq%2BtSEXPJyCJjC9HLhJ21jfMPT3jv%2BnDgT21wMY6KzhvOjfgaOorAn%2BR6UG2OjhVeZw%2BMMid274GOqUB%2BwCWeXdODkbIgrVmP03jIFT32s98vwb60X%2FlOJdDSZPSL9U61oVCXJpOYYkusX6dWDUt2ub2n2tjwl6RULyoDCAoChKmhFhwVt11pqiU8MM4JA7K4vbh2%2FJ0zITICVuW8Rydk%2FAD%2BAcfqXw2rhOFk%2Bc%2B83Vrs%2BI88sWU6Juctvm49VPJhlGAI4P32egmrj8%2Fjijj7sZwjia7j30r6Hr63moyDc15&X-Amz-Signature=3fa60d942effa119733a376d7e12cfb99bcb4d1ca2e93334b664915d2f5efa01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJM7CKCM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMwHdV4cKosxXUKl1IEf4IpKMl3EQtsasqYkCN2oqDcgIgQaz294qtUb8hPm3wd5O9RgaOIrvsDNYtL%2B9c3Eu9hfwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCPnsXESr5ZKnI9hOSrcAyq91kURDxbiWZF6Rw1y2kpogPocDffZKVOFpqTzZ%2FAXSSv%2Bc%2Bifyv0YJuevuQ8GB%2Bcu%2Bu0SnZ5R5REIFaDQ9A86WecOsP%2Bdn3KJPB%2BCjOORq2l06pqpltF%2FelGZXP2W6Hnn2ivteBz0p7v1k0%2BYkDfY5iXnIFlM4dBiB3jYARn%2FOOP4I2KeHgDVTyB1yrWAYVBYu2GHFrMSDiEu99%2FwHaBhOBkbDdtQ8TTq0WQxpCT%2BJYkGLEzqQWWOkCd2miCiP%2FsSGwTARWsfpKnAop5Nb1nCVNMFZe3EyXukRtSfNoOHF%2FOP9ow9xX5JQsM8FTLV9Dv7tSZyb7TPJdMCQ3iLO9sY7JSS20wQnQe3Am2JR3Tme2D2Ytms4pIGGbgV4p%2F8NH0qZkM8vorDLXsF70iqS6GzPIQ6qhuGggvWcn%2F1X59uRvGcc5J86CIqurDNCgAAEFgaWK5UZvCEGqK9Q%2BzrOpQhOSARzvrIf62f2FO8lOjFy6nS3ebfd6cMPN66lM72ENye0Wt1wbXb60lKMonitzB1BaJnCBBOc9vYG0Opo9TqZgiJl5SyYzSfaq%2BtSEXPJyCJjC9HLhJ21jfMPT3jv%2BnDgT21wMY6KzhvOjfgaOorAn%2BR6UG2OjhVeZw%2BMMid274GOqUB%2BwCWeXdODkbIgrVmP03jIFT32s98vwb60X%2FlOJdDSZPSL9U61oVCXJpOYYkusX6dWDUt2ub2n2tjwl6RULyoDCAoChKmhFhwVt11pqiU8MM4JA7K4vbh2%2FJ0zITICVuW8Rydk%2FAD%2BAcfqXw2rhOFk%2Bc%2B83Vrs%2BI88sWU6Juctvm49VPJhlGAI4P32egmrj8%2Fjijj7sZwjia7j30r6Hr63moyDc15&X-Amz-Signature=e84b29c303bd3a542eae1031720a1cdf9a60a3afc553e8c7dfc466c67f1664aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJM7CKCM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMwHdV4cKosxXUKl1IEf4IpKMl3EQtsasqYkCN2oqDcgIgQaz294qtUb8hPm3wd5O9RgaOIrvsDNYtL%2B9c3Eu9hfwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCPnsXESr5ZKnI9hOSrcAyq91kURDxbiWZF6Rw1y2kpogPocDffZKVOFpqTzZ%2FAXSSv%2Bc%2Bifyv0YJuevuQ8GB%2Bcu%2Bu0SnZ5R5REIFaDQ9A86WecOsP%2Bdn3KJPB%2BCjOORq2l06pqpltF%2FelGZXP2W6Hnn2ivteBz0p7v1k0%2BYkDfY5iXnIFlM4dBiB3jYARn%2FOOP4I2KeHgDVTyB1yrWAYVBYu2GHFrMSDiEu99%2FwHaBhOBkbDdtQ8TTq0WQxpCT%2BJYkGLEzqQWWOkCd2miCiP%2FsSGwTARWsfpKnAop5Nb1nCVNMFZe3EyXukRtSfNoOHF%2FOP9ow9xX5JQsM8FTLV9Dv7tSZyb7TPJdMCQ3iLO9sY7JSS20wQnQe3Am2JR3Tme2D2Ytms4pIGGbgV4p%2F8NH0qZkM8vorDLXsF70iqS6GzPIQ6qhuGggvWcn%2F1X59uRvGcc5J86CIqurDNCgAAEFgaWK5UZvCEGqK9Q%2BzrOpQhOSARzvrIf62f2FO8lOjFy6nS3ebfd6cMPN66lM72ENye0Wt1wbXb60lKMonitzB1BaJnCBBOc9vYG0Opo9TqZgiJl5SyYzSfaq%2BtSEXPJyCJjC9HLhJ21jfMPT3jv%2BnDgT21wMY6KzhvOjfgaOorAn%2BR6UG2OjhVeZw%2BMMid274GOqUB%2BwCWeXdODkbIgrVmP03jIFT32s98vwb60X%2FlOJdDSZPSL9U61oVCXJpOYYkusX6dWDUt2ub2n2tjwl6RULyoDCAoChKmhFhwVt11pqiU8MM4JA7K4vbh2%2FJ0zITICVuW8Rydk%2FAD%2BAcfqXw2rhOFk%2Bc%2B83Vrs%2BI88sWU6Juctvm49VPJhlGAI4P32egmrj8%2Fjijj7sZwjia7j30r6Hr63moyDc15&X-Amz-Signature=71427c8c5a8f53cbe86c5bd3dec6b77497a2a3491cdcbb13fc5c24eb15d91a08&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJM7CKCM%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMwHdV4cKosxXUKl1IEf4IpKMl3EQtsasqYkCN2oqDcgIgQaz294qtUb8hPm3wd5O9RgaOIrvsDNYtL%2B9c3Eu9hfwq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCPnsXESr5ZKnI9hOSrcAyq91kURDxbiWZF6Rw1y2kpogPocDffZKVOFpqTzZ%2FAXSSv%2Bc%2Bifyv0YJuevuQ8GB%2Bcu%2Bu0SnZ5R5REIFaDQ9A86WecOsP%2Bdn3KJPB%2BCjOORq2l06pqpltF%2FelGZXP2W6Hnn2ivteBz0p7v1k0%2BYkDfY5iXnIFlM4dBiB3jYARn%2FOOP4I2KeHgDVTyB1yrWAYVBYu2GHFrMSDiEu99%2FwHaBhOBkbDdtQ8TTq0WQxpCT%2BJYkGLEzqQWWOkCd2miCiP%2FsSGwTARWsfpKnAop5Nb1nCVNMFZe3EyXukRtSfNoOHF%2FOP9ow9xX5JQsM8FTLV9Dv7tSZyb7TPJdMCQ3iLO9sY7JSS20wQnQe3Am2JR3Tme2D2Ytms4pIGGbgV4p%2F8NH0qZkM8vorDLXsF70iqS6GzPIQ6qhuGggvWcn%2F1X59uRvGcc5J86CIqurDNCgAAEFgaWK5UZvCEGqK9Q%2BzrOpQhOSARzvrIf62f2FO8lOjFy6nS3ebfd6cMPN66lM72ENye0Wt1wbXb60lKMonitzB1BaJnCBBOc9vYG0Opo9TqZgiJl5SyYzSfaq%2BtSEXPJyCJjC9HLhJ21jfMPT3jv%2BnDgT21wMY6KzhvOjfgaOorAn%2BR6UG2OjhVeZw%2BMMid274GOqUB%2BwCWeXdODkbIgrVmP03jIFT32s98vwb60X%2FlOJdDSZPSL9U61oVCXJpOYYkusX6dWDUt2ub2n2tjwl6RULyoDCAoChKmhFhwVt11pqiU8MM4JA7K4vbh2%2FJ0zITICVuW8Rydk%2FAD%2BAcfqXw2rhOFk%2Bc%2B83Vrs%2BI88sWU6Juctvm49VPJhlGAI4P32egmrj8%2Fjijj7sZwjia7j30r6Hr63moyDc15&X-Amz-Signature=355ced1dc1988e80d01e2345103d6667d19a5d8b5c48679b1cc19183a111a054&X-Amz-SignedHeaders=host&x-id=GetObject)
