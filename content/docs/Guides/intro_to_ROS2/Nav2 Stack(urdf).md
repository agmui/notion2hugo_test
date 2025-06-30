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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWXTMCW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjPoHiuZu%2FK3qxiEuUj7ZU%2FpfQpuJe3u9%2BQvqZCZNAiEAxUh%2Bv2iV%2BUUEMoe1Z4hIWtSBxWWBNqJxpXQUyiXIyWUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq7HIdWKGBRoObVkyrcAwgZ9hajZfUXUzEsSaKFspR4iydr%2Bku3CFOLYK1XoSN5CoRyl9xoynC55Sz%2F8k73kGE%2B28k6qFisKj%2B5mafdqS0gdSyreE9txODeF4UQVsn4oJQ%2FQUqiGnnSE%2BZF%2BIeADgYWZikDOdWkwCZAluPYRXZkLYZ6Zdxa3iDojICS1CkwbYq%2BnNfUXTXvhIYDfhmX34f%2FTqBhBqY4hYu4EzeT1BfitpfyPwNU7irOp3p4cmidVpY4B1IZt7v9fuu%2BItr0rgSTTdzi2DCGTSJJ%2FYrDeeAgX5p1rwcR92XylbQm1TmymKQ12BehXOYo1lmjyQUogrEjOvEIsCHm1QhULuOn%2BlzdOAcO250rn4sgnMGbJPeU4lnerP3OlR%2BDQc%2FZ%2FSulMEZMFtZawWe5mj3y7mlebL97pq8hACMQRI6LZQQLiQnEGKfToHQvjiryX3IWqerRYr%2B00onnwALkcBmDAk%2Fl2PZt5GrJpaIIr0vnxMsvVjIdTLFAN1vKHUg2%2FhmLYCKW18e4QFWSHNbEsmELT%2BUdr22A6ndDTugEH3PcXrDE%2B8WmimhCjHOSf3uhRU3EovAuE0MooW1j30%2FB7Jp51qmbyZ6Snhaz4MOqOUf5Sk6vO8TqKb7x2iGcSi3xsqmWMLmiicMGOqUBMTNM3SpVzuohRzzHSX%2F3X1vnXP0fa%2F3Md9Abjx0bU977pFPBPFNP6VMqEOXzT76lmdgtp%2BwkZpme1ycMRRMXmsmJndmZq4HrgGrZ4j4YMYWmspKWYSYL8izCnDd8meresG45%2FQ9dz3SJ%2FcUZ3aV%2BKgp2s9pX%2BjWPmOaQY3cLtQcuiQVwan7N8TVEpmUm3YX4v5vfBc%2Bx8uWlMApdq0BSgdZeQceR&X-Amz-Signature=2dcc92e7301d877352dafb7fcac3f424412e3050eb5f4eff8629ad67288c8927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWXTMCW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjPoHiuZu%2FK3qxiEuUj7ZU%2FpfQpuJe3u9%2BQvqZCZNAiEAxUh%2Bv2iV%2BUUEMoe1Z4hIWtSBxWWBNqJxpXQUyiXIyWUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq7HIdWKGBRoObVkyrcAwgZ9hajZfUXUzEsSaKFspR4iydr%2Bku3CFOLYK1XoSN5CoRyl9xoynC55Sz%2F8k73kGE%2B28k6qFisKj%2B5mafdqS0gdSyreE9txODeF4UQVsn4oJQ%2FQUqiGnnSE%2BZF%2BIeADgYWZikDOdWkwCZAluPYRXZkLYZ6Zdxa3iDojICS1CkwbYq%2BnNfUXTXvhIYDfhmX34f%2FTqBhBqY4hYu4EzeT1BfitpfyPwNU7irOp3p4cmidVpY4B1IZt7v9fuu%2BItr0rgSTTdzi2DCGTSJJ%2FYrDeeAgX5p1rwcR92XylbQm1TmymKQ12BehXOYo1lmjyQUogrEjOvEIsCHm1QhULuOn%2BlzdOAcO250rn4sgnMGbJPeU4lnerP3OlR%2BDQc%2FZ%2FSulMEZMFtZawWe5mj3y7mlebL97pq8hACMQRI6LZQQLiQnEGKfToHQvjiryX3IWqerRYr%2B00onnwALkcBmDAk%2Fl2PZt5GrJpaIIr0vnxMsvVjIdTLFAN1vKHUg2%2FhmLYCKW18e4QFWSHNbEsmELT%2BUdr22A6ndDTugEH3PcXrDE%2B8WmimhCjHOSf3uhRU3EovAuE0MooW1j30%2FB7Jp51qmbyZ6Snhaz4MOqOUf5Sk6vO8TqKb7x2iGcSi3xsqmWMLmiicMGOqUBMTNM3SpVzuohRzzHSX%2F3X1vnXP0fa%2F3Md9Abjx0bU977pFPBPFNP6VMqEOXzT76lmdgtp%2BwkZpme1ycMRRMXmsmJndmZq4HrgGrZ4j4YMYWmspKWYSYL8izCnDd8meresG45%2FQ9dz3SJ%2FcUZ3aV%2BKgp2s9pX%2BjWPmOaQY3cLtQcuiQVwan7N8TVEpmUm3YX4v5vfBc%2Bx8uWlMApdq0BSgdZeQceR&X-Amz-Signature=a8c0b692df31174ab478ebe54d16b80912dd7343d7ba0cc9baf0a099a723cdd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWXTMCW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjPoHiuZu%2FK3qxiEuUj7ZU%2FpfQpuJe3u9%2BQvqZCZNAiEAxUh%2Bv2iV%2BUUEMoe1Z4hIWtSBxWWBNqJxpXQUyiXIyWUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq7HIdWKGBRoObVkyrcAwgZ9hajZfUXUzEsSaKFspR4iydr%2Bku3CFOLYK1XoSN5CoRyl9xoynC55Sz%2F8k73kGE%2B28k6qFisKj%2B5mafdqS0gdSyreE9txODeF4UQVsn4oJQ%2FQUqiGnnSE%2BZF%2BIeADgYWZikDOdWkwCZAluPYRXZkLYZ6Zdxa3iDojICS1CkwbYq%2BnNfUXTXvhIYDfhmX34f%2FTqBhBqY4hYu4EzeT1BfitpfyPwNU7irOp3p4cmidVpY4B1IZt7v9fuu%2BItr0rgSTTdzi2DCGTSJJ%2FYrDeeAgX5p1rwcR92XylbQm1TmymKQ12BehXOYo1lmjyQUogrEjOvEIsCHm1QhULuOn%2BlzdOAcO250rn4sgnMGbJPeU4lnerP3OlR%2BDQc%2FZ%2FSulMEZMFtZawWe5mj3y7mlebL97pq8hACMQRI6LZQQLiQnEGKfToHQvjiryX3IWqerRYr%2B00onnwALkcBmDAk%2Fl2PZt5GrJpaIIr0vnxMsvVjIdTLFAN1vKHUg2%2FhmLYCKW18e4QFWSHNbEsmELT%2BUdr22A6ndDTugEH3PcXrDE%2B8WmimhCjHOSf3uhRU3EovAuE0MooW1j30%2FB7Jp51qmbyZ6Snhaz4MOqOUf5Sk6vO8TqKb7x2iGcSi3xsqmWMLmiicMGOqUBMTNM3SpVzuohRzzHSX%2F3X1vnXP0fa%2F3Md9Abjx0bU977pFPBPFNP6VMqEOXzT76lmdgtp%2BwkZpme1ycMRRMXmsmJndmZq4HrgGrZ4j4YMYWmspKWYSYL8izCnDd8meresG45%2FQ9dz3SJ%2FcUZ3aV%2BKgp2s9pX%2BjWPmOaQY3cLtQcuiQVwan7N8TVEpmUm3YX4v5vfBc%2Bx8uWlMApdq0BSgdZeQceR&X-Amz-Signature=f3dde4a3164328302d4f041928f077a7cef0275e903dac1a01cd41b53814bab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWXTMCW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjPoHiuZu%2FK3qxiEuUj7ZU%2FpfQpuJe3u9%2BQvqZCZNAiEAxUh%2Bv2iV%2BUUEMoe1Z4hIWtSBxWWBNqJxpXQUyiXIyWUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq7HIdWKGBRoObVkyrcAwgZ9hajZfUXUzEsSaKFspR4iydr%2Bku3CFOLYK1XoSN5CoRyl9xoynC55Sz%2F8k73kGE%2B28k6qFisKj%2B5mafdqS0gdSyreE9txODeF4UQVsn4oJQ%2FQUqiGnnSE%2BZF%2BIeADgYWZikDOdWkwCZAluPYRXZkLYZ6Zdxa3iDojICS1CkwbYq%2BnNfUXTXvhIYDfhmX34f%2FTqBhBqY4hYu4EzeT1BfitpfyPwNU7irOp3p4cmidVpY4B1IZt7v9fuu%2BItr0rgSTTdzi2DCGTSJJ%2FYrDeeAgX5p1rwcR92XylbQm1TmymKQ12BehXOYo1lmjyQUogrEjOvEIsCHm1QhULuOn%2BlzdOAcO250rn4sgnMGbJPeU4lnerP3OlR%2BDQc%2FZ%2FSulMEZMFtZawWe5mj3y7mlebL97pq8hACMQRI6LZQQLiQnEGKfToHQvjiryX3IWqerRYr%2B00onnwALkcBmDAk%2Fl2PZt5GrJpaIIr0vnxMsvVjIdTLFAN1vKHUg2%2FhmLYCKW18e4QFWSHNbEsmELT%2BUdr22A6ndDTugEH3PcXrDE%2B8WmimhCjHOSf3uhRU3EovAuE0MooW1j30%2FB7Jp51qmbyZ6Snhaz4MOqOUf5Sk6vO8TqKb7x2iGcSi3xsqmWMLmiicMGOqUBMTNM3SpVzuohRzzHSX%2F3X1vnXP0fa%2F3Md9Abjx0bU977pFPBPFNP6VMqEOXzT76lmdgtp%2BwkZpme1ycMRRMXmsmJndmZq4HrgGrZ4j4YMYWmspKWYSYL8izCnDd8meresG45%2FQ9dz3SJ%2FcUZ3aV%2BKgp2s9pX%2BjWPmOaQY3cLtQcuiQVwan7N8TVEpmUm3YX4v5vfBc%2Bx8uWlMApdq0BSgdZeQceR&X-Amz-Signature=7aba6f2e84f39f3abfeddc1035d5982c3cdd12c172f79279ede8164089d8c0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWXTMCW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjPoHiuZu%2FK3qxiEuUj7ZU%2FpfQpuJe3u9%2BQvqZCZNAiEAxUh%2Bv2iV%2BUUEMoe1Z4hIWtSBxWWBNqJxpXQUyiXIyWUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq7HIdWKGBRoObVkyrcAwgZ9hajZfUXUzEsSaKFspR4iydr%2Bku3CFOLYK1XoSN5CoRyl9xoynC55Sz%2F8k73kGE%2B28k6qFisKj%2B5mafdqS0gdSyreE9txODeF4UQVsn4oJQ%2FQUqiGnnSE%2BZF%2BIeADgYWZikDOdWkwCZAluPYRXZkLYZ6Zdxa3iDojICS1CkwbYq%2BnNfUXTXvhIYDfhmX34f%2FTqBhBqY4hYu4EzeT1BfitpfyPwNU7irOp3p4cmidVpY4B1IZt7v9fuu%2BItr0rgSTTdzi2DCGTSJJ%2FYrDeeAgX5p1rwcR92XylbQm1TmymKQ12BehXOYo1lmjyQUogrEjOvEIsCHm1QhULuOn%2BlzdOAcO250rn4sgnMGbJPeU4lnerP3OlR%2BDQc%2FZ%2FSulMEZMFtZawWe5mj3y7mlebL97pq8hACMQRI6LZQQLiQnEGKfToHQvjiryX3IWqerRYr%2B00onnwALkcBmDAk%2Fl2PZt5GrJpaIIr0vnxMsvVjIdTLFAN1vKHUg2%2FhmLYCKW18e4QFWSHNbEsmELT%2BUdr22A6ndDTugEH3PcXrDE%2B8WmimhCjHOSf3uhRU3EovAuE0MooW1j30%2FB7Jp51qmbyZ6Snhaz4MOqOUf5Sk6vO8TqKb7x2iGcSi3xsqmWMLmiicMGOqUBMTNM3SpVzuohRzzHSX%2F3X1vnXP0fa%2F3Md9Abjx0bU977pFPBPFNP6VMqEOXzT76lmdgtp%2BwkZpme1ycMRRMXmsmJndmZq4HrgGrZ4j4YMYWmspKWYSYL8izCnDd8meresG45%2FQ9dz3SJ%2FcUZ3aV%2BKgp2s9pX%2BjWPmOaQY3cLtQcuiQVwan7N8TVEpmUm3YX4v5vfBc%2Bx8uWlMApdq0BSgdZeQceR&X-Amz-Signature=5a88b30c834a9b30111fafc19b7cea5b6395b1194b0f2bf3b421a19616a11031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUWXTMCW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjPoHiuZu%2FK3qxiEuUj7ZU%2FpfQpuJe3u9%2BQvqZCZNAiEAxUh%2Bv2iV%2BUUEMoe1Z4hIWtSBxWWBNqJxpXQUyiXIyWUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNq7HIdWKGBRoObVkyrcAwgZ9hajZfUXUzEsSaKFspR4iydr%2Bku3CFOLYK1XoSN5CoRyl9xoynC55Sz%2F8k73kGE%2B28k6qFisKj%2B5mafdqS0gdSyreE9txODeF4UQVsn4oJQ%2FQUqiGnnSE%2BZF%2BIeADgYWZikDOdWkwCZAluPYRXZkLYZ6Zdxa3iDojICS1CkwbYq%2BnNfUXTXvhIYDfhmX34f%2FTqBhBqY4hYu4EzeT1BfitpfyPwNU7irOp3p4cmidVpY4B1IZt7v9fuu%2BItr0rgSTTdzi2DCGTSJJ%2FYrDeeAgX5p1rwcR92XylbQm1TmymKQ12BehXOYo1lmjyQUogrEjOvEIsCHm1QhULuOn%2BlzdOAcO250rn4sgnMGbJPeU4lnerP3OlR%2BDQc%2FZ%2FSulMEZMFtZawWe5mj3y7mlebL97pq8hACMQRI6LZQQLiQnEGKfToHQvjiryX3IWqerRYr%2B00onnwALkcBmDAk%2Fl2PZt5GrJpaIIr0vnxMsvVjIdTLFAN1vKHUg2%2FhmLYCKW18e4QFWSHNbEsmELT%2BUdr22A6ndDTugEH3PcXrDE%2B8WmimhCjHOSf3uhRU3EovAuE0MooW1j30%2FB7Jp51qmbyZ6Snhaz4MOqOUf5Sk6vO8TqKb7x2iGcSi3xsqmWMLmiicMGOqUBMTNM3SpVzuohRzzHSX%2F3X1vnXP0fa%2F3Md9Abjx0bU977pFPBPFNP6VMqEOXzT76lmdgtp%2BwkZpme1ycMRRMXmsmJndmZq4HrgGrZ4j4YMYWmspKWYSYL8izCnDd8meresG45%2FQ9dz3SJ%2FcUZ3aV%2BKgp2s9pX%2BjWPmOaQY3cLtQcuiQVwan7N8TVEpmUm3YX4v5vfBc%2Bx8uWlMApdq0BSgdZeQceR&X-Amz-Signature=9d500ffe25bc3a29c6a6ccc72b1c55eb5e2020f4d3461ff60c89ccbde27ff23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
