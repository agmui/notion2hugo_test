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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJKCCKXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPutysjMt7mWLHv9sAiCFlHquBDuqPJaMihgIRSMTpQIhALMy52iXQrxh4Jri7AvvdDXg2x41MlvXAyKPyYteQr9NKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2S8XWbICJ9VBitNsq3AOszSHEjkhAtK0Yp1ehZpkw1hRBR%2FUH43A%2Fh4YaxWpLOiqohuEctNQ%2FrvdlZQ4%2B3VU4mIo1wkDaHwEgYYk37LX41BJww%2Byf3zLAe4VkTio0ORrq%2BrcN6gxobGm0g1Zuj%2FGfgh84iCltjCLV8p79FJXeZVpa%2FvorTEEMb35ybLsmErojjBIEukABGRreHC6Ua69EHWng6oL17JEPCbxFHyEiXJTHtRS%2FSoD8IbeiywmgdzURMSW3Z9XcZfrBnhjhVJqgiepFkJRLgdRUZKdhLDm1aCa%2FcPcgw37f0BEk9zChLNWyNCB7yj%2FWW%2BHMEbYcBZyIk%2F3llWv3bywxFD2q%2BAMhO%2Fj84GUE6ihfN5Gakyc5R6ZiovLrndrJZ%2Fzmr65Q7J1LNZRvBh2ilwI65An2gZuH%2F4LoKZeYWL3b32k5kQCbc5g%2Fjeaz%2FjtKc%2F0R7yhctY23%2BrEHCz8OXGmjsx6ZfL3eA8i1QXM%2F9tASkOAhR2pdIkFRMziTuM7gAhthYgZjPmFsWuYxW%2BCR3vYGEqnYx49h866daNDQZrc1H%2BYP4hElci9OBLeH5S31cpj5tf%2Bh7z%2BjCo36XQ%2FjrC0nPtRUh3DxBS5k8qlfMbLPv6RaXq2WOA0%2Bd%2FcgWUeRSZtbdDCLyau9BjqkAXo3xBf2RsdxPJYUO0LaaJ%2BmEyGrZhRPeKpLznQQfh32lNEnuHhcd3ZQ%2Fcj6MnYWG%2FXt%2BxHP9jlzIraw33FfPaJNY5eJ5s5SJkC1HZHyoUCLjSH%2FqoX3xVT9slQ8S9LpUW%2F50DYxXsrwcsxvjdFoRus%2F%2BxMKdKMBZs6K7h9SD9TKZ4lBmksUqWgtTm6F3d652tXr1GdewVKYugq8Rm5qdNQIAypi&X-Amz-Signature=426aed2f5031ca24b4409e7e6c36797bd23e57137f1d90c651e25591c15f5d30&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJKCCKXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPutysjMt7mWLHv9sAiCFlHquBDuqPJaMihgIRSMTpQIhALMy52iXQrxh4Jri7AvvdDXg2x41MlvXAyKPyYteQr9NKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2S8XWbICJ9VBitNsq3AOszSHEjkhAtK0Yp1ehZpkw1hRBR%2FUH43A%2Fh4YaxWpLOiqohuEctNQ%2FrvdlZQ4%2B3VU4mIo1wkDaHwEgYYk37LX41BJww%2Byf3zLAe4VkTio0ORrq%2BrcN6gxobGm0g1Zuj%2FGfgh84iCltjCLV8p79FJXeZVpa%2FvorTEEMb35ybLsmErojjBIEukABGRreHC6Ua69EHWng6oL17JEPCbxFHyEiXJTHtRS%2FSoD8IbeiywmgdzURMSW3Z9XcZfrBnhjhVJqgiepFkJRLgdRUZKdhLDm1aCa%2FcPcgw37f0BEk9zChLNWyNCB7yj%2FWW%2BHMEbYcBZyIk%2F3llWv3bywxFD2q%2BAMhO%2Fj84GUE6ihfN5Gakyc5R6ZiovLrndrJZ%2Fzmr65Q7J1LNZRvBh2ilwI65An2gZuH%2F4LoKZeYWL3b32k5kQCbc5g%2Fjeaz%2FjtKc%2F0R7yhctY23%2BrEHCz8OXGmjsx6ZfL3eA8i1QXM%2F9tASkOAhR2pdIkFRMziTuM7gAhthYgZjPmFsWuYxW%2BCR3vYGEqnYx49h866daNDQZrc1H%2BYP4hElci9OBLeH5S31cpj5tf%2Bh7z%2BjCo36XQ%2FjrC0nPtRUh3DxBS5k8qlfMbLPv6RaXq2WOA0%2Bd%2FcgWUeRSZtbdDCLyau9BjqkAXo3xBf2RsdxPJYUO0LaaJ%2BmEyGrZhRPeKpLznQQfh32lNEnuHhcd3ZQ%2Fcj6MnYWG%2FXt%2BxHP9jlzIraw33FfPaJNY5eJ5s5SJkC1HZHyoUCLjSH%2FqoX3xVT9slQ8S9LpUW%2F50DYxXsrwcsxvjdFoRus%2F%2BxMKdKMBZs6K7h9SD9TKZ4lBmksUqWgtTm6F3d652tXr1GdewVKYugq8Rm5qdNQIAypi&X-Amz-Signature=211243a5eec40fff068caa7991e3d2269e35a1151a13c51fe460977360cc60ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJKCCKXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPutysjMt7mWLHv9sAiCFlHquBDuqPJaMihgIRSMTpQIhALMy52iXQrxh4Jri7AvvdDXg2x41MlvXAyKPyYteQr9NKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2S8XWbICJ9VBitNsq3AOszSHEjkhAtK0Yp1ehZpkw1hRBR%2FUH43A%2Fh4YaxWpLOiqohuEctNQ%2FrvdlZQ4%2B3VU4mIo1wkDaHwEgYYk37LX41BJww%2Byf3zLAe4VkTio0ORrq%2BrcN6gxobGm0g1Zuj%2FGfgh84iCltjCLV8p79FJXeZVpa%2FvorTEEMb35ybLsmErojjBIEukABGRreHC6Ua69EHWng6oL17JEPCbxFHyEiXJTHtRS%2FSoD8IbeiywmgdzURMSW3Z9XcZfrBnhjhVJqgiepFkJRLgdRUZKdhLDm1aCa%2FcPcgw37f0BEk9zChLNWyNCB7yj%2FWW%2BHMEbYcBZyIk%2F3llWv3bywxFD2q%2BAMhO%2Fj84GUE6ihfN5Gakyc5R6ZiovLrndrJZ%2Fzmr65Q7J1LNZRvBh2ilwI65An2gZuH%2F4LoKZeYWL3b32k5kQCbc5g%2Fjeaz%2FjtKc%2F0R7yhctY23%2BrEHCz8OXGmjsx6ZfL3eA8i1QXM%2F9tASkOAhR2pdIkFRMziTuM7gAhthYgZjPmFsWuYxW%2BCR3vYGEqnYx49h866daNDQZrc1H%2BYP4hElci9OBLeH5S31cpj5tf%2Bh7z%2BjCo36XQ%2FjrC0nPtRUh3DxBS5k8qlfMbLPv6RaXq2WOA0%2Bd%2FcgWUeRSZtbdDCLyau9BjqkAXo3xBf2RsdxPJYUO0LaaJ%2BmEyGrZhRPeKpLznQQfh32lNEnuHhcd3ZQ%2Fcj6MnYWG%2FXt%2BxHP9jlzIraw33FfPaJNY5eJ5s5SJkC1HZHyoUCLjSH%2FqoX3xVT9slQ8S9LpUW%2F50DYxXsrwcsxvjdFoRus%2F%2BxMKdKMBZs6K7h9SD9TKZ4lBmksUqWgtTm6F3d652tXr1GdewVKYugq8Rm5qdNQIAypi&X-Amz-Signature=257236a34412e3b4072e1b23509e697611764055bc72a17f38fd67c813ff0c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJKCCKXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPutysjMt7mWLHv9sAiCFlHquBDuqPJaMihgIRSMTpQIhALMy52iXQrxh4Jri7AvvdDXg2x41MlvXAyKPyYteQr9NKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2S8XWbICJ9VBitNsq3AOszSHEjkhAtK0Yp1ehZpkw1hRBR%2FUH43A%2Fh4YaxWpLOiqohuEctNQ%2FrvdlZQ4%2B3VU4mIo1wkDaHwEgYYk37LX41BJww%2Byf3zLAe4VkTio0ORrq%2BrcN6gxobGm0g1Zuj%2FGfgh84iCltjCLV8p79FJXeZVpa%2FvorTEEMb35ybLsmErojjBIEukABGRreHC6Ua69EHWng6oL17JEPCbxFHyEiXJTHtRS%2FSoD8IbeiywmgdzURMSW3Z9XcZfrBnhjhVJqgiepFkJRLgdRUZKdhLDm1aCa%2FcPcgw37f0BEk9zChLNWyNCB7yj%2FWW%2BHMEbYcBZyIk%2F3llWv3bywxFD2q%2BAMhO%2Fj84GUE6ihfN5Gakyc5R6ZiovLrndrJZ%2Fzmr65Q7J1LNZRvBh2ilwI65An2gZuH%2F4LoKZeYWL3b32k5kQCbc5g%2Fjeaz%2FjtKc%2F0R7yhctY23%2BrEHCz8OXGmjsx6ZfL3eA8i1QXM%2F9tASkOAhR2pdIkFRMziTuM7gAhthYgZjPmFsWuYxW%2BCR3vYGEqnYx49h866daNDQZrc1H%2BYP4hElci9OBLeH5S31cpj5tf%2Bh7z%2BjCo36XQ%2FjrC0nPtRUh3DxBS5k8qlfMbLPv6RaXq2WOA0%2Bd%2FcgWUeRSZtbdDCLyau9BjqkAXo3xBf2RsdxPJYUO0LaaJ%2BmEyGrZhRPeKpLznQQfh32lNEnuHhcd3ZQ%2Fcj6MnYWG%2FXt%2BxHP9jlzIraw33FfPaJNY5eJ5s5SJkC1HZHyoUCLjSH%2FqoX3xVT9slQ8S9LpUW%2F50DYxXsrwcsxvjdFoRus%2F%2BxMKdKMBZs6K7h9SD9TKZ4lBmksUqWgtTm6F3d652tXr1GdewVKYugq8Rm5qdNQIAypi&X-Amz-Signature=7acb8862ff3e30c9fe85e1a642c75ccccdd722763adbc3cad0f477206403e9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJKCCKXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPutysjMt7mWLHv9sAiCFlHquBDuqPJaMihgIRSMTpQIhALMy52iXQrxh4Jri7AvvdDXg2x41MlvXAyKPyYteQr9NKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2S8XWbICJ9VBitNsq3AOszSHEjkhAtK0Yp1ehZpkw1hRBR%2FUH43A%2Fh4YaxWpLOiqohuEctNQ%2FrvdlZQ4%2B3VU4mIo1wkDaHwEgYYk37LX41BJww%2Byf3zLAe4VkTio0ORrq%2BrcN6gxobGm0g1Zuj%2FGfgh84iCltjCLV8p79FJXeZVpa%2FvorTEEMb35ybLsmErojjBIEukABGRreHC6Ua69EHWng6oL17JEPCbxFHyEiXJTHtRS%2FSoD8IbeiywmgdzURMSW3Z9XcZfrBnhjhVJqgiepFkJRLgdRUZKdhLDm1aCa%2FcPcgw37f0BEk9zChLNWyNCB7yj%2FWW%2BHMEbYcBZyIk%2F3llWv3bywxFD2q%2BAMhO%2Fj84GUE6ihfN5Gakyc5R6ZiovLrndrJZ%2Fzmr65Q7J1LNZRvBh2ilwI65An2gZuH%2F4LoKZeYWL3b32k5kQCbc5g%2Fjeaz%2FjtKc%2F0R7yhctY23%2BrEHCz8OXGmjsx6ZfL3eA8i1QXM%2F9tASkOAhR2pdIkFRMziTuM7gAhthYgZjPmFsWuYxW%2BCR3vYGEqnYx49h866daNDQZrc1H%2BYP4hElci9OBLeH5S31cpj5tf%2Bh7z%2BjCo36XQ%2FjrC0nPtRUh3DxBS5k8qlfMbLPv6RaXq2WOA0%2Bd%2FcgWUeRSZtbdDCLyau9BjqkAXo3xBf2RsdxPJYUO0LaaJ%2BmEyGrZhRPeKpLznQQfh32lNEnuHhcd3ZQ%2Fcj6MnYWG%2FXt%2BxHP9jlzIraw33FfPaJNY5eJ5s5SJkC1HZHyoUCLjSH%2FqoX3xVT9slQ8S9LpUW%2F50DYxXsrwcsxvjdFoRus%2F%2BxMKdKMBZs6K7h9SD9TKZ4lBmksUqWgtTm6F3d652tXr1GdewVKYugq8Rm5qdNQIAypi&X-Amz-Signature=beb9bc84ff11fcc729d9dc872b7789ad002e7c6ede8dba3e784960015eab5f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJKCCKXF%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzPutysjMt7mWLHv9sAiCFlHquBDuqPJaMihgIRSMTpQIhALMy52iXQrxh4Jri7AvvdDXg2x41MlvXAyKPyYteQr9NKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2S8XWbICJ9VBitNsq3AOszSHEjkhAtK0Yp1ehZpkw1hRBR%2FUH43A%2Fh4YaxWpLOiqohuEctNQ%2FrvdlZQ4%2B3VU4mIo1wkDaHwEgYYk37LX41BJww%2Byf3zLAe4VkTio0ORrq%2BrcN6gxobGm0g1Zuj%2FGfgh84iCltjCLV8p79FJXeZVpa%2FvorTEEMb35ybLsmErojjBIEukABGRreHC6Ua69EHWng6oL17JEPCbxFHyEiXJTHtRS%2FSoD8IbeiywmgdzURMSW3Z9XcZfrBnhjhVJqgiepFkJRLgdRUZKdhLDm1aCa%2FcPcgw37f0BEk9zChLNWyNCB7yj%2FWW%2BHMEbYcBZyIk%2F3llWv3bywxFD2q%2BAMhO%2Fj84GUE6ihfN5Gakyc5R6ZiovLrndrJZ%2Fzmr65Q7J1LNZRvBh2ilwI65An2gZuH%2F4LoKZeYWL3b32k5kQCbc5g%2Fjeaz%2FjtKc%2F0R7yhctY23%2BrEHCz8OXGmjsx6ZfL3eA8i1QXM%2F9tASkOAhR2pdIkFRMziTuM7gAhthYgZjPmFsWuYxW%2BCR3vYGEqnYx49h866daNDQZrc1H%2BYP4hElci9OBLeH5S31cpj5tf%2Bh7z%2BjCo36XQ%2FjrC0nPtRUh3DxBS5k8qlfMbLPv6RaXq2WOA0%2Bd%2FcgWUeRSZtbdDCLyau9BjqkAXo3xBf2RsdxPJYUO0LaaJ%2BmEyGrZhRPeKpLznQQfh32lNEnuHhcd3ZQ%2Fcj6MnYWG%2FXt%2BxHP9jlzIraw33FfPaJNY5eJ5s5SJkC1HZHyoUCLjSH%2FqoX3xVT9slQ8S9LpUW%2F50DYxXsrwcsxvjdFoRus%2F%2BxMKdKMBZs6K7h9SD9TKZ4lBmksUqWgtTm6F3d652tXr1GdewVKYugq8Rm5qdNQIAypi&X-Amz-Signature=e79f57c360e120af53618b59b6bc062e7672cd539dfb5fcc36c2390426d874f3&X-Amz-SignedHeaders=host&x-id=GetObject)
