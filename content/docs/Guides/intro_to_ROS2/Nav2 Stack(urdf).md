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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREUET7X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmP6XwtMl3e2VbZ5GV3h7fP6nAp6XnLOGqTXU2PV4BxQIgfUNnYO9bWwLV9v%2BZ5BstFXQU5Dh72WGmApo1FrvuU2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDL6Firyhk%2Bz04VNBgircAw%2BOl9zgJ5jSxJrsJzOAggNX%2Bo7MWNuTJx%2BjItXsivNYZUJIjZroDEVdaXGZWpWZlmVBakyiqdi1RI2xGpnqpTY%2FOIOfwuUh9PRl0kA6k26xBPqAtpkvVPS%2B%2Fgpk87jBRzyFGSCJQ2uGA5vD%2Fg4xky1TMLCwpOSAytbDeW7V%2FZ0mFaFFYln2aylUN0yMtX3HNlNGBN%2Fua87PZ2Ca6XEbHVPS6Aro1SV8EsPtHgNhyX4NLIml6vC7C15aKtFpLk2Gb7tATKYeqheT6yZ%2B7uoRU8ZCoX6dILMyA2znFdQnEbc84tOJrvXm340tkhJJTrrehxKQKTKMeiPEz3D5OEhr34G17lQ6pPpoEpsiLupeFxyluFTSsqpc8yZIu2DQ85rnFl%2FvEUnrKpLE%2BvvrIzzcBHmXrwvmnRNStgFBFZlcTfIvWLiu5DIpPG8URa9wy1yVoKXtaPkBiM0PSNmnCGGOM%2B3Y5w2ByEMrYYJufPuqgY7JvmWijcfNpPKW97CtnNQmZx%2Bec9Y56zZ3FWdjS52kkbWaQPmnDTDFG1Wyqc0rDSUkUgjqS5rSz1gzKAbcaE%2BTBojsVYP9HLqEl40rIxIFEE1X7E%2BalSDR1GeT9tuOiZtzqvRuZegZo787qoG3MMiSgMAGOqUBOwj0FPztSmNnGpvCKQLfVBNfXtUQaVQV9nYB0L8%2B6TDhewxOo%2FrL6yFLxcND5LdWCLZv9uUJypu%2Fh%2Fh2Ndp3wu4CvNQhIL5WzUt9QMoRKs2r7whzQT2AFAWSf4DzI6yQDypWPs1DR5f39e3VPpnM942XdbsyIqm6GyVu9W9Nn31lQBqeRe0pZgcI%2BnDcAUSnrXdj7%2FVDINN6HpuFGSbCHA%2FzPrd2&X-Amz-Signature=8525d62dc4df38d868a35912f0572e757a940c92ffc388e18bd82ac2c8a387f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREUET7X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmP6XwtMl3e2VbZ5GV3h7fP6nAp6XnLOGqTXU2PV4BxQIgfUNnYO9bWwLV9v%2BZ5BstFXQU5Dh72WGmApo1FrvuU2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDL6Firyhk%2Bz04VNBgircAw%2BOl9zgJ5jSxJrsJzOAggNX%2Bo7MWNuTJx%2BjItXsivNYZUJIjZroDEVdaXGZWpWZlmVBakyiqdi1RI2xGpnqpTY%2FOIOfwuUh9PRl0kA6k26xBPqAtpkvVPS%2B%2Fgpk87jBRzyFGSCJQ2uGA5vD%2Fg4xky1TMLCwpOSAytbDeW7V%2FZ0mFaFFYln2aylUN0yMtX3HNlNGBN%2Fua87PZ2Ca6XEbHVPS6Aro1SV8EsPtHgNhyX4NLIml6vC7C15aKtFpLk2Gb7tATKYeqheT6yZ%2B7uoRU8ZCoX6dILMyA2znFdQnEbc84tOJrvXm340tkhJJTrrehxKQKTKMeiPEz3D5OEhr34G17lQ6pPpoEpsiLupeFxyluFTSsqpc8yZIu2DQ85rnFl%2FvEUnrKpLE%2BvvrIzzcBHmXrwvmnRNStgFBFZlcTfIvWLiu5DIpPG8URa9wy1yVoKXtaPkBiM0PSNmnCGGOM%2B3Y5w2ByEMrYYJufPuqgY7JvmWijcfNpPKW97CtnNQmZx%2Bec9Y56zZ3FWdjS52kkbWaQPmnDTDFG1Wyqc0rDSUkUgjqS5rSz1gzKAbcaE%2BTBojsVYP9HLqEl40rIxIFEE1X7E%2BalSDR1GeT9tuOiZtzqvRuZegZo787qoG3MMiSgMAGOqUBOwj0FPztSmNnGpvCKQLfVBNfXtUQaVQV9nYB0L8%2B6TDhewxOo%2FrL6yFLxcND5LdWCLZv9uUJypu%2Fh%2Fh2Ndp3wu4CvNQhIL5WzUt9QMoRKs2r7whzQT2AFAWSf4DzI6yQDypWPs1DR5f39e3VPpnM942XdbsyIqm6GyVu9W9Nn31lQBqeRe0pZgcI%2BnDcAUSnrXdj7%2FVDINN6HpuFGSbCHA%2FzPrd2&X-Amz-Signature=a83e5fe6a99baf780285c14bb45b7ab57e1de2b441eb19e826024fded6edf283&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREUET7X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmP6XwtMl3e2VbZ5GV3h7fP6nAp6XnLOGqTXU2PV4BxQIgfUNnYO9bWwLV9v%2BZ5BstFXQU5Dh72WGmApo1FrvuU2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDL6Firyhk%2Bz04VNBgircAw%2BOl9zgJ5jSxJrsJzOAggNX%2Bo7MWNuTJx%2BjItXsivNYZUJIjZroDEVdaXGZWpWZlmVBakyiqdi1RI2xGpnqpTY%2FOIOfwuUh9PRl0kA6k26xBPqAtpkvVPS%2B%2Fgpk87jBRzyFGSCJQ2uGA5vD%2Fg4xky1TMLCwpOSAytbDeW7V%2FZ0mFaFFYln2aylUN0yMtX3HNlNGBN%2Fua87PZ2Ca6XEbHVPS6Aro1SV8EsPtHgNhyX4NLIml6vC7C15aKtFpLk2Gb7tATKYeqheT6yZ%2B7uoRU8ZCoX6dILMyA2znFdQnEbc84tOJrvXm340tkhJJTrrehxKQKTKMeiPEz3D5OEhr34G17lQ6pPpoEpsiLupeFxyluFTSsqpc8yZIu2DQ85rnFl%2FvEUnrKpLE%2BvvrIzzcBHmXrwvmnRNStgFBFZlcTfIvWLiu5DIpPG8URa9wy1yVoKXtaPkBiM0PSNmnCGGOM%2B3Y5w2ByEMrYYJufPuqgY7JvmWijcfNpPKW97CtnNQmZx%2Bec9Y56zZ3FWdjS52kkbWaQPmnDTDFG1Wyqc0rDSUkUgjqS5rSz1gzKAbcaE%2BTBojsVYP9HLqEl40rIxIFEE1X7E%2BalSDR1GeT9tuOiZtzqvRuZegZo787qoG3MMiSgMAGOqUBOwj0FPztSmNnGpvCKQLfVBNfXtUQaVQV9nYB0L8%2B6TDhewxOo%2FrL6yFLxcND5LdWCLZv9uUJypu%2Fh%2Fh2Ndp3wu4CvNQhIL5WzUt9QMoRKs2r7whzQT2AFAWSf4DzI6yQDypWPs1DR5f39e3VPpnM942XdbsyIqm6GyVu9W9Nn31lQBqeRe0pZgcI%2BnDcAUSnrXdj7%2FVDINN6HpuFGSbCHA%2FzPrd2&X-Amz-Signature=b2587463b614abfefb9988d155b793a9342bb120e4755e1d43542c7a1aa560e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREUET7X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmP6XwtMl3e2VbZ5GV3h7fP6nAp6XnLOGqTXU2PV4BxQIgfUNnYO9bWwLV9v%2BZ5BstFXQU5Dh72WGmApo1FrvuU2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDL6Firyhk%2Bz04VNBgircAw%2BOl9zgJ5jSxJrsJzOAggNX%2Bo7MWNuTJx%2BjItXsivNYZUJIjZroDEVdaXGZWpWZlmVBakyiqdi1RI2xGpnqpTY%2FOIOfwuUh9PRl0kA6k26xBPqAtpkvVPS%2B%2Fgpk87jBRzyFGSCJQ2uGA5vD%2Fg4xky1TMLCwpOSAytbDeW7V%2FZ0mFaFFYln2aylUN0yMtX3HNlNGBN%2Fua87PZ2Ca6XEbHVPS6Aro1SV8EsPtHgNhyX4NLIml6vC7C15aKtFpLk2Gb7tATKYeqheT6yZ%2B7uoRU8ZCoX6dILMyA2znFdQnEbc84tOJrvXm340tkhJJTrrehxKQKTKMeiPEz3D5OEhr34G17lQ6pPpoEpsiLupeFxyluFTSsqpc8yZIu2DQ85rnFl%2FvEUnrKpLE%2BvvrIzzcBHmXrwvmnRNStgFBFZlcTfIvWLiu5DIpPG8URa9wy1yVoKXtaPkBiM0PSNmnCGGOM%2B3Y5w2ByEMrYYJufPuqgY7JvmWijcfNpPKW97CtnNQmZx%2Bec9Y56zZ3FWdjS52kkbWaQPmnDTDFG1Wyqc0rDSUkUgjqS5rSz1gzKAbcaE%2BTBojsVYP9HLqEl40rIxIFEE1X7E%2BalSDR1GeT9tuOiZtzqvRuZegZo787qoG3MMiSgMAGOqUBOwj0FPztSmNnGpvCKQLfVBNfXtUQaVQV9nYB0L8%2B6TDhewxOo%2FrL6yFLxcND5LdWCLZv9uUJypu%2Fh%2Fh2Ndp3wu4CvNQhIL5WzUt9QMoRKs2r7whzQT2AFAWSf4DzI6yQDypWPs1DR5f39e3VPpnM942XdbsyIqm6GyVu9W9Nn31lQBqeRe0pZgcI%2BnDcAUSnrXdj7%2FVDINN6HpuFGSbCHA%2FzPrd2&X-Amz-Signature=7ec31d142193a8ffedfa97278d5c71299df5b124105976592dd0524cdeebefea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREUET7X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmP6XwtMl3e2VbZ5GV3h7fP6nAp6XnLOGqTXU2PV4BxQIgfUNnYO9bWwLV9v%2BZ5BstFXQU5Dh72WGmApo1FrvuU2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDL6Firyhk%2Bz04VNBgircAw%2BOl9zgJ5jSxJrsJzOAggNX%2Bo7MWNuTJx%2BjItXsivNYZUJIjZroDEVdaXGZWpWZlmVBakyiqdi1RI2xGpnqpTY%2FOIOfwuUh9PRl0kA6k26xBPqAtpkvVPS%2B%2Fgpk87jBRzyFGSCJQ2uGA5vD%2Fg4xky1TMLCwpOSAytbDeW7V%2FZ0mFaFFYln2aylUN0yMtX3HNlNGBN%2Fua87PZ2Ca6XEbHVPS6Aro1SV8EsPtHgNhyX4NLIml6vC7C15aKtFpLk2Gb7tATKYeqheT6yZ%2B7uoRU8ZCoX6dILMyA2znFdQnEbc84tOJrvXm340tkhJJTrrehxKQKTKMeiPEz3D5OEhr34G17lQ6pPpoEpsiLupeFxyluFTSsqpc8yZIu2DQ85rnFl%2FvEUnrKpLE%2BvvrIzzcBHmXrwvmnRNStgFBFZlcTfIvWLiu5DIpPG8URa9wy1yVoKXtaPkBiM0PSNmnCGGOM%2B3Y5w2ByEMrYYJufPuqgY7JvmWijcfNpPKW97CtnNQmZx%2Bec9Y56zZ3FWdjS52kkbWaQPmnDTDFG1Wyqc0rDSUkUgjqS5rSz1gzKAbcaE%2BTBojsVYP9HLqEl40rIxIFEE1X7E%2BalSDR1GeT9tuOiZtzqvRuZegZo787qoG3MMiSgMAGOqUBOwj0FPztSmNnGpvCKQLfVBNfXtUQaVQV9nYB0L8%2B6TDhewxOo%2FrL6yFLxcND5LdWCLZv9uUJypu%2Fh%2Fh2Ndp3wu4CvNQhIL5WzUt9QMoRKs2r7whzQT2AFAWSf4DzI6yQDypWPs1DR5f39e3VPpnM942XdbsyIqm6GyVu9W9Nn31lQBqeRe0pZgcI%2BnDcAUSnrXdj7%2FVDINN6HpuFGSbCHA%2FzPrd2&X-Amz-Signature=3a509fdafa1955004f091fd69a43fec08f3b1cde5982a5536a4f8306b423609b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RREUET7X%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmP6XwtMl3e2VbZ5GV3h7fP6nAp6XnLOGqTXU2PV4BxQIgfUNnYO9bWwLV9v%2BZ5BstFXQU5Dh72WGmApo1FrvuU2Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDL6Firyhk%2Bz04VNBgircAw%2BOl9zgJ5jSxJrsJzOAggNX%2Bo7MWNuTJx%2BjItXsivNYZUJIjZroDEVdaXGZWpWZlmVBakyiqdi1RI2xGpnqpTY%2FOIOfwuUh9PRl0kA6k26xBPqAtpkvVPS%2B%2Fgpk87jBRzyFGSCJQ2uGA5vD%2Fg4xky1TMLCwpOSAytbDeW7V%2FZ0mFaFFYln2aylUN0yMtX3HNlNGBN%2Fua87PZ2Ca6XEbHVPS6Aro1SV8EsPtHgNhyX4NLIml6vC7C15aKtFpLk2Gb7tATKYeqheT6yZ%2B7uoRU8ZCoX6dILMyA2znFdQnEbc84tOJrvXm340tkhJJTrrehxKQKTKMeiPEz3D5OEhr34G17lQ6pPpoEpsiLupeFxyluFTSsqpc8yZIu2DQ85rnFl%2FvEUnrKpLE%2BvvrIzzcBHmXrwvmnRNStgFBFZlcTfIvWLiu5DIpPG8URa9wy1yVoKXtaPkBiM0PSNmnCGGOM%2B3Y5w2ByEMrYYJufPuqgY7JvmWijcfNpPKW97CtnNQmZx%2Bec9Y56zZ3FWdjS52kkbWaQPmnDTDFG1Wyqc0rDSUkUgjqS5rSz1gzKAbcaE%2BTBojsVYP9HLqEl40rIxIFEE1X7E%2BalSDR1GeT9tuOiZtzqvRuZegZo787qoG3MMiSgMAGOqUBOwj0FPztSmNnGpvCKQLfVBNfXtUQaVQV9nYB0L8%2B6TDhewxOo%2FrL6yFLxcND5LdWCLZv9uUJypu%2Fh%2Fh2Ndp3wu4CvNQhIL5WzUt9QMoRKs2r7whzQT2AFAWSf4DzI6yQDypWPs1DR5f39e3VPpnM942XdbsyIqm6GyVu9W9Nn31lQBqeRe0pZgcI%2BnDcAUSnrXdj7%2FVDINN6HpuFGSbCHA%2FzPrd2&X-Amz-Signature=1b4f1093badb1a1ffaa43d50e1ac97e8d69605bc3d4cbd7253cb5ba90499451c&X-Amz-SignedHeaders=host&x-id=GetObject)
