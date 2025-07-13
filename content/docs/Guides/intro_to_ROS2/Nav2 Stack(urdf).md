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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHY2FVD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwf1WDrD2w5lRtejDMeD72A0OC66l1z%2B0XhuYQnJg2rAiEA9YRjoK%2FLCgnKzKAAeedgunwOHad%2BxAwLMGaTYbehumUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHaDMElbwYdaH5khnSrcA7u7mYQsuBNFSP0KU1ppDLgX60JJ0tT6vhM2I7WyFeWbCVTezYGC4oGkEb8kD8gRj1xDWIncqU9Lrmb7u%2BeGIJaJENgMp1NN4cLwrXUc9KRj4iafT%2FQoZcKynflIabUl9mxXMoRH7aCNDv6AyToHhk4dkiQvuISkI7%2FMVWkSdnaG69lohfBvwTpLAn4FRgGG%2FCz4S0QgaJwxOpSVe8zNNWUTJsAJ5g3ITE4MXUFgsk%2BeWWISUi9RFK%2Fz2XelMIrq6%2FUeiGnzpjyl8dwVGHelq9mwIFgYfgYws5H21X7RtAfWBnAgqfHmgAgQAC6b9ovViQBh1MHvUA1QxMJKwWR2EHXGVI08iYG06EBUP6PG8oxW6yzsL3eiWQUTNjE5nCwMmMsQE8YIKO2D41oH0adCjbA1QzJ7P22KjQkwYrfTA5zaaUru0b0R9u%2Bp%2F0kHSpn%2FoUjyfmSMeFy2HO51QW7o5QBEoEd5bLZNaM7WfLdugXHmzgrOyXzIQgdC6mv5G9mxeynaCBYqX6o1Ljxb%2FuyVFlYLqYaifRwDlqhD0qHMf0vc5%2Bk%2F0h2jGU1ij9SQu4Onb%2BJIYe4v6OrIqEdEXt6hONzf9hV8qxPRyj7lfmB5hVrXjZX%2FcBjCSUyiFb2wMPnAzsMGOqUBEcpkjOUZwD4zpCtsbRTLpwlJoTLggcXRP4OIWJyLYjoHnKdzaN3Zb1Ql0pWCey8%2FtL18FEJre9kjluxunIv1uQOrSe%2FiGbWPTiuhSbBJnuQtguWOuRCPfU7n7lXB6QSiYPMkMlIygISlRC3r1d6htxS6LordkJi0Ydr9ghhmKKaDR9q2BmmdJq2bLqH%2FbUx%2F5My1jGLctz5o1PZ%2BOMlqHYMkm27s&X-Amz-Signature=d935d476d7e9a7dedc167c5420576315c4dc4640e062cdb225562b53a67caea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHY2FVD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwf1WDrD2w5lRtejDMeD72A0OC66l1z%2B0XhuYQnJg2rAiEA9YRjoK%2FLCgnKzKAAeedgunwOHad%2BxAwLMGaTYbehumUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHaDMElbwYdaH5khnSrcA7u7mYQsuBNFSP0KU1ppDLgX60JJ0tT6vhM2I7WyFeWbCVTezYGC4oGkEb8kD8gRj1xDWIncqU9Lrmb7u%2BeGIJaJENgMp1NN4cLwrXUc9KRj4iafT%2FQoZcKynflIabUl9mxXMoRH7aCNDv6AyToHhk4dkiQvuISkI7%2FMVWkSdnaG69lohfBvwTpLAn4FRgGG%2FCz4S0QgaJwxOpSVe8zNNWUTJsAJ5g3ITE4MXUFgsk%2BeWWISUi9RFK%2Fz2XelMIrq6%2FUeiGnzpjyl8dwVGHelq9mwIFgYfgYws5H21X7RtAfWBnAgqfHmgAgQAC6b9ovViQBh1MHvUA1QxMJKwWR2EHXGVI08iYG06EBUP6PG8oxW6yzsL3eiWQUTNjE5nCwMmMsQE8YIKO2D41oH0adCjbA1QzJ7P22KjQkwYrfTA5zaaUru0b0R9u%2Bp%2F0kHSpn%2FoUjyfmSMeFy2HO51QW7o5QBEoEd5bLZNaM7WfLdugXHmzgrOyXzIQgdC6mv5G9mxeynaCBYqX6o1Ljxb%2FuyVFlYLqYaifRwDlqhD0qHMf0vc5%2Bk%2F0h2jGU1ij9SQu4Onb%2BJIYe4v6OrIqEdEXt6hONzf9hV8qxPRyj7lfmB5hVrXjZX%2FcBjCSUyiFb2wMPnAzsMGOqUBEcpkjOUZwD4zpCtsbRTLpwlJoTLggcXRP4OIWJyLYjoHnKdzaN3Zb1Ql0pWCey8%2FtL18FEJre9kjluxunIv1uQOrSe%2FiGbWPTiuhSbBJnuQtguWOuRCPfU7n7lXB6QSiYPMkMlIygISlRC3r1d6htxS6LordkJi0Ydr9ghhmKKaDR9q2BmmdJq2bLqH%2FbUx%2F5My1jGLctz5o1PZ%2BOMlqHYMkm27s&X-Amz-Signature=b418b1c81eec3fcf747cc94bc70759a246d571ca6c916e49955b9773f20eff1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHY2FVD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwf1WDrD2w5lRtejDMeD72A0OC66l1z%2B0XhuYQnJg2rAiEA9YRjoK%2FLCgnKzKAAeedgunwOHad%2BxAwLMGaTYbehumUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHaDMElbwYdaH5khnSrcA7u7mYQsuBNFSP0KU1ppDLgX60JJ0tT6vhM2I7WyFeWbCVTezYGC4oGkEb8kD8gRj1xDWIncqU9Lrmb7u%2BeGIJaJENgMp1NN4cLwrXUc9KRj4iafT%2FQoZcKynflIabUl9mxXMoRH7aCNDv6AyToHhk4dkiQvuISkI7%2FMVWkSdnaG69lohfBvwTpLAn4FRgGG%2FCz4S0QgaJwxOpSVe8zNNWUTJsAJ5g3ITE4MXUFgsk%2BeWWISUi9RFK%2Fz2XelMIrq6%2FUeiGnzpjyl8dwVGHelq9mwIFgYfgYws5H21X7RtAfWBnAgqfHmgAgQAC6b9ovViQBh1MHvUA1QxMJKwWR2EHXGVI08iYG06EBUP6PG8oxW6yzsL3eiWQUTNjE5nCwMmMsQE8YIKO2D41oH0adCjbA1QzJ7P22KjQkwYrfTA5zaaUru0b0R9u%2Bp%2F0kHSpn%2FoUjyfmSMeFy2HO51QW7o5QBEoEd5bLZNaM7WfLdugXHmzgrOyXzIQgdC6mv5G9mxeynaCBYqX6o1Ljxb%2FuyVFlYLqYaifRwDlqhD0qHMf0vc5%2Bk%2F0h2jGU1ij9SQu4Onb%2BJIYe4v6OrIqEdEXt6hONzf9hV8qxPRyj7lfmB5hVrXjZX%2FcBjCSUyiFb2wMPnAzsMGOqUBEcpkjOUZwD4zpCtsbRTLpwlJoTLggcXRP4OIWJyLYjoHnKdzaN3Zb1Ql0pWCey8%2FtL18FEJre9kjluxunIv1uQOrSe%2FiGbWPTiuhSbBJnuQtguWOuRCPfU7n7lXB6QSiYPMkMlIygISlRC3r1d6htxS6LordkJi0Ydr9ghhmKKaDR9q2BmmdJq2bLqH%2FbUx%2F5My1jGLctz5o1PZ%2BOMlqHYMkm27s&X-Amz-Signature=6c8fd5af1f5a6aa2ef194fecd9c4059c67b6081cef2469327abb365701eb2ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHY2FVD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwf1WDrD2w5lRtejDMeD72A0OC66l1z%2B0XhuYQnJg2rAiEA9YRjoK%2FLCgnKzKAAeedgunwOHad%2BxAwLMGaTYbehumUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHaDMElbwYdaH5khnSrcA7u7mYQsuBNFSP0KU1ppDLgX60JJ0tT6vhM2I7WyFeWbCVTezYGC4oGkEb8kD8gRj1xDWIncqU9Lrmb7u%2BeGIJaJENgMp1NN4cLwrXUc9KRj4iafT%2FQoZcKynflIabUl9mxXMoRH7aCNDv6AyToHhk4dkiQvuISkI7%2FMVWkSdnaG69lohfBvwTpLAn4FRgGG%2FCz4S0QgaJwxOpSVe8zNNWUTJsAJ5g3ITE4MXUFgsk%2BeWWISUi9RFK%2Fz2XelMIrq6%2FUeiGnzpjyl8dwVGHelq9mwIFgYfgYws5H21X7RtAfWBnAgqfHmgAgQAC6b9ovViQBh1MHvUA1QxMJKwWR2EHXGVI08iYG06EBUP6PG8oxW6yzsL3eiWQUTNjE5nCwMmMsQE8YIKO2D41oH0adCjbA1QzJ7P22KjQkwYrfTA5zaaUru0b0R9u%2Bp%2F0kHSpn%2FoUjyfmSMeFy2HO51QW7o5QBEoEd5bLZNaM7WfLdugXHmzgrOyXzIQgdC6mv5G9mxeynaCBYqX6o1Ljxb%2FuyVFlYLqYaifRwDlqhD0qHMf0vc5%2Bk%2F0h2jGU1ij9SQu4Onb%2BJIYe4v6OrIqEdEXt6hONzf9hV8qxPRyj7lfmB5hVrXjZX%2FcBjCSUyiFb2wMPnAzsMGOqUBEcpkjOUZwD4zpCtsbRTLpwlJoTLggcXRP4OIWJyLYjoHnKdzaN3Zb1Ql0pWCey8%2FtL18FEJre9kjluxunIv1uQOrSe%2FiGbWPTiuhSbBJnuQtguWOuRCPfU7n7lXB6QSiYPMkMlIygISlRC3r1d6htxS6LordkJi0Ydr9ghhmKKaDR9q2BmmdJq2bLqH%2FbUx%2F5My1jGLctz5o1PZ%2BOMlqHYMkm27s&X-Amz-Signature=8e1edd24acd3f8b4b7f7660834ad212b5ea3b691fd4a5999e87901222cc2a6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHY2FVD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwf1WDrD2w5lRtejDMeD72A0OC66l1z%2B0XhuYQnJg2rAiEA9YRjoK%2FLCgnKzKAAeedgunwOHad%2BxAwLMGaTYbehumUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHaDMElbwYdaH5khnSrcA7u7mYQsuBNFSP0KU1ppDLgX60JJ0tT6vhM2I7WyFeWbCVTezYGC4oGkEb8kD8gRj1xDWIncqU9Lrmb7u%2BeGIJaJENgMp1NN4cLwrXUc9KRj4iafT%2FQoZcKynflIabUl9mxXMoRH7aCNDv6AyToHhk4dkiQvuISkI7%2FMVWkSdnaG69lohfBvwTpLAn4FRgGG%2FCz4S0QgaJwxOpSVe8zNNWUTJsAJ5g3ITE4MXUFgsk%2BeWWISUi9RFK%2Fz2XelMIrq6%2FUeiGnzpjyl8dwVGHelq9mwIFgYfgYws5H21X7RtAfWBnAgqfHmgAgQAC6b9ovViQBh1MHvUA1QxMJKwWR2EHXGVI08iYG06EBUP6PG8oxW6yzsL3eiWQUTNjE5nCwMmMsQE8YIKO2D41oH0adCjbA1QzJ7P22KjQkwYrfTA5zaaUru0b0R9u%2Bp%2F0kHSpn%2FoUjyfmSMeFy2HO51QW7o5QBEoEd5bLZNaM7WfLdugXHmzgrOyXzIQgdC6mv5G9mxeynaCBYqX6o1Ljxb%2FuyVFlYLqYaifRwDlqhD0qHMf0vc5%2Bk%2F0h2jGU1ij9SQu4Onb%2BJIYe4v6OrIqEdEXt6hONzf9hV8qxPRyj7lfmB5hVrXjZX%2FcBjCSUyiFb2wMPnAzsMGOqUBEcpkjOUZwD4zpCtsbRTLpwlJoTLggcXRP4OIWJyLYjoHnKdzaN3Zb1Ql0pWCey8%2FtL18FEJre9kjluxunIv1uQOrSe%2FiGbWPTiuhSbBJnuQtguWOuRCPfU7n7lXB6QSiYPMkMlIygISlRC3r1d6htxS6LordkJi0Ydr9ghhmKKaDR9q2BmmdJq2bLqH%2FbUx%2F5My1jGLctz5o1PZ%2BOMlqHYMkm27s&X-Amz-Signature=3d5795e1ea052863674ce13b6f55758dd7ee54f662da00ee4a80d63c981e8126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMHY2FVD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwf1WDrD2w5lRtejDMeD72A0OC66l1z%2B0XhuYQnJg2rAiEA9YRjoK%2FLCgnKzKAAeedgunwOHad%2BxAwLMGaTYbehumUq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHaDMElbwYdaH5khnSrcA7u7mYQsuBNFSP0KU1ppDLgX60JJ0tT6vhM2I7WyFeWbCVTezYGC4oGkEb8kD8gRj1xDWIncqU9Lrmb7u%2BeGIJaJENgMp1NN4cLwrXUc9KRj4iafT%2FQoZcKynflIabUl9mxXMoRH7aCNDv6AyToHhk4dkiQvuISkI7%2FMVWkSdnaG69lohfBvwTpLAn4FRgGG%2FCz4S0QgaJwxOpSVe8zNNWUTJsAJ5g3ITE4MXUFgsk%2BeWWISUi9RFK%2Fz2XelMIrq6%2FUeiGnzpjyl8dwVGHelq9mwIFgYfgYws5H21X7RtAfWBnAgqfHmgAgQAC6b9ovViQBh1MHvUA1QxMJKwWR2EHXGVI08iYG06EBUP6PG8oxW6yzsL3eiWQUTNjE5nCwMmMsQE8YIKO2D41oH0adCjbA1QzJ7P22KjQkwYrfTA5zaaUru0b0R9u%2Bp%2F0kHSpn%2FoUjyfmSMeFy2HO51QW7o5QBEoEd5bLZNaM7WfLdugXHmzgrOyXzIQgdC6mv5G9mxeynaCBYqX6o1Ljxb%2FuyVFlYLqYaifRwDlqhD0qHMf0vc5%2Bk%2F0h2jGU1ij9SQu4Onb%2BJIYe4v6OrIqEdEXt6hONzf9hV8qxPRyj7lfmB5hVrXjZX%2FcBjCSUyiFb2wMPnAzsMGOqUBEcpkjOUZwD4zpCtsbRTLpwlJoTLggcXRP4OIWJyLYjoHnKdzaN3Zb1Ql0pWCey8%2FtL18FEJre9kjluxunIv1uQOrSe%2FiGbWPTiuhSbBJnuQtguWOuRCPfU7n7lXB6QSiYPMkMlIygISlRC3r1d6htxS6LordkJi0Ydr9ghhmKKaDR9q2BmmdJq2bLqH%2FbUx%2F5My1jGLctz5o1PZ%2BOMlqHYMkm27s&X-Amz-Signature=5257993f68b2f7e5162fdc9dc41a38073eaea938da09936d7da1e61f373c891b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
