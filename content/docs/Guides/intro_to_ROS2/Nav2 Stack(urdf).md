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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP34KQVJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCY95PiYdBPFVGSUTy5O9%2Bm8G5O06nmTfpZyQPYseo2YQIgaZvJFNZVq0tA17j%2B3%2FelyHwvhO5gml%2F1NbTlLdptd%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHpblmIB8tSbKfCSrcA%2BizXQsIcN6eD%2BWsne5n1XNk7DG9TNfTL5FPVe7ttp6aHWDrjHn55UwiXaZUhI88eQQps1Xl2U35n3%2BtzFUV7kFOeQj7Hfn6Diz5ahW9hHs35adcU3tQrX4Haq3%2B1SAQtucB9ztACM1tOe5pxSaRIuuW3yv%2Bw14L1juJrYdeMt9cMookSjGIAhfwXt9fpFAOQVT3ISb32%2B1WgOYQ6EIiHLb1fXkXe3rxm28%2F9Y2Kfrx6pZsW%2Bah7Bfjf46ac2c9Wjf2XslYzTOIDyfLXTENZvQkf5jfY%2BvWAvHdxJT6BCbxdijq5v9KT8f8VO945lUlRjpFLUuGmj226JXuzaSnodskhw49TVpusgzEmQSePgOgY7LEhPHDLyHqtSky8RLM1%2BG%2BL6gPLQpqFkRP4UjxDxpApLHSNimA6iL6XTBbaWzyWCgnpKRdRf6z3vGqlh%2BDiOoUvqV%2BzhogVxUJgubuANHBdLQ1Vg2gZwitlwyjL17SODoLO7gkctAvnDvkCyssCmwn1KusdX5uxzxskBLLTycYXjNJ2PvC5cX0ccGACqfe89%2B8hPEje57Y8WvlSyzgvjv3DE484QqfD6pOMUDeqztNg23bJajIltxwrhcDCg%2BNd0Vr8dVpQTAUJiXRaMPbP6MMGOqUB0v3FAXzEvDHgTAlCnnVrIlaThGHBEwAVLhExOWC3tuYtOJrzYhpGQv82EA2NvLSJ7%2BdhL9DcPNscPtIJIRBRA29tnHyBBVUh6ZYMq8JvEgjno%2FRXN%2FA07jBP0Y0%2F3Drizt82sTp%2FL%2BNePp8lQU7gGqiLFZcvYiISPwsiacfEG8kH%2BB2QSEE3hRGkLe8MIfRxXEvGFcARLXd4cBPS4%2FGXHpWdHL2%2F&X-Amz-Signature=a092299489861f2f8fc7913cafc76e477325fa258a9fa1e17f55960121ac0486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP34KQVJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCY95PiYdBPFVGSUTy5O9%2Bm8G5O06nmTfpZyQPYseo2YQIgaZvJFNZVq0tA17j%2B3%2FelyHwvhO5gml%2F1NbTlLdptd%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHpblmIB8tSbKfCSrcA%2BizXQsIcN6eD%2BWsne5n1XNk7DG9TNfTL5FPVe7ttp6aHWDrjHn55UwiXaZUhI88eQQps1Xl2U35n3%2BtzFUV7kFOeQj7Hfn6Diz5ahW9hHs35adcU3tQrX4Haq3%2B1SAQtucB9ztACM1tOe5pxSaRIuuW3yv%2Bw14L1juJrYdeMt9cMookSjGIAhfwXt9fpFAOQVT3ISb32%2B1WgOYQ6EIiHLb1fXkXe3rxm28%2F9Y2Kfrx6pZsW%2Bah7Bfjf46ac2c9Wjf2XslYzTOIDyfLXTENZvQkf5jfY%2BvWAvHdxJT6BCbxdijq5v9KT8f8VO945lUlRjpFLUuGmj226JXuzaSnodskhw49TVpusgzEmQSePgOgY7LEhPHDLyHqtSky8RLM1%2BG%2BL6gPLQpqFkRP4UjxDxpApLHSNimA6iL6XTBbaWzyWCgnpKRdRf6z3vGqlh%2BDiOoUvqV%2BzhogVxUJgubuANHBdLQ1Vg2gZwitlwyjL17SODoLO7gkctAvnDvkCyssCmwn1KusdX5uxzxskBLLTycYXjNJ2PvC5cX0ccGACqfe89%2B8hPEje57Y8WvlSyzgvjv3DE484QqfD6pOMUDeqztNg23bJajIltxwrhcDCg%2BNd0Vr8dVpQTAUJiXRaMPbP6MMGOqUB0v3FAXzEvDHgTAlCnnVrIlaThGHBEwAVLhExOWC3tuYtOJrzYhpGQv82EA2NvLSJ7%2BdhL9DcPNscPtIJIRBRA29tnHyBBVUh6ZYMq8JvEgjno%2FRXN%2FA07jBP0Y0%2F3Drizt82sTp%2FL%2BNePp8lQU7gGqiLFZcvYiISPwsiacfEG8kH%2BB2QSEE3hRGkLe8MIfRxXEvGFcARLXd4cBPS4%2FGXHpWdHL2%2F&X-Amz-Signature=6261e5a50e632005fe7f2dbb35992fb18ca63db6eff1b6c0dd3a2669f31c3085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP34KQVJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCY95PiYdBPFVGSUTy5O9%2Bm8G5O06nmTfpZyQPYseo2YQIgaZvJFNZVq0tA17j%2B3%2FelyHwvhO5gml%2F1NbTlLdptd%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHpblmIB8tSbKfCSrcA%2BizXQsIcN6eD%2BWsne5n1XNk7DG9TNfTL5FPVe7ttp6aHWDrjHn55UwiXaZUhI88eQQps1Xl2U35n3%2BtzFUV7kFOeQj7Hfn6Diz5ahW9hHs35adcU3tQrX4Haq3%2B1SAQtucB9ztACM1tOe5pxSaRIuuW3yv%2Bw14L1juJrYdeMt9cMookSjGIAhfwXt9fpFAOQVT3ISb32%2B1WgOYQ6EIiHLb1fXkXe3rxm28%2F9Y2Kfrx6pZsW%2Bah7Bfjf46ac2c9Wjf2XslYzTOIDyfLXTENZvQkf5jfY%2BvWAvHdxJT6BCbxdijq5v9KT8f8VO945lUlRjpFLUuGmj226JXuzaSnodskhw49TVpusgzEmQSePgOgY7LEhPHDLyHqtSky8RLM1%2BG%2BL6gPLQpqFkRP4UjxDxpApLHSNimA6iL6XTBbaWzyWCgnpKRdRf6z3vGqlh%2BDiOoUvqV%2BzhogVxUJgubuANHBdLQ1Vg2gZwitlwyjL17SODoLO7gkctAvnDvkCyssCmwn1KusdX5uxzxskBLLTycYXjNJ2PvC5cX0ccGACqfe89%2B8hPEje57Y8WvlSyzgvjv3DE484QqfD6pOMUDeqztNg23bJajIltxwrhcDCg%2BNd0Vr8dVpQTAUJiXRaMPbP6MMGOqUB0v3FAXzEvDHgTAlCnnVrIlaThGHBEwAVLhExOWC3tuYtOJrzYhpGQv82EA2NvLSJ7%2BdhL9DcPNscPtIJIRBRA29tnHyBBVUh6ZYMq8JvEgjno%2FRXN%2FA07jBP0Y0%2F3Drizt82sTp%2FL%2BNePp8lQU7gGqiLFZcvYiISPwsiacfEG8kH%2BB2QSEE3hRGkLe8MIfRxXEvGFcARLXd4cBPS4%2FGXHpWdHL2%2F&X-Amz-Signature=d2409477adf714dba3946a760ae228e65f5e522c56b7cef58feb22d4bbb32bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP34KQVJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCY95PiYdBPFVGSUTy5O9%2Bm8G5O06nmTfpZyQPYseo2YQIgaZvJFNZVq0tA17j%2B3%2FelyHwvhO5gml%2F1NbTlLdptd%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHpblmIB8tSbKfCSrcA%2BizXQsIcN6eD%2BWsne5n1XNk7DG9TNfTL5FPVe7ttp6aHWDrjHn55UwiXaZUhI88eQQps1Xl2U35n3%2BtzFUV7kFOeQj7Hfn6Diz5ahW9hHs35adcU3tQrX4Haq3%2B1SAQtucB9ztACM1tOe5pxSaRIuuW3yv%2Bw14L1juJrYdeMt9cMookSjGIAhfwXt9fpFAOQVT3ISb32%2B1WgOYQ6EIiHLb1fXkXe3rxm28%2F9Y2Kfrx6pZsW%2Bah7Bfjf46ac2c9Wjf2XslYzTOIDyfLXTENZvQkf5jfY%2BvWAvHdxJT6BCbxdijq5v9KT8f8VO945lUlRjpFLUuGmj226JXuzaSnodskhw49TVpusgzEmQSePgOgY7LEhPHDLyHqtSky8RLM1%2BG%2BL6gPLQpqFkRP4UjxDxpApLHSNimA6iL6XTBbaWzyWCgnpKRdRf6z3vGqlh%2BDiOoUvqV%2BzhogVxUJgubuANHBdLQ1Vg2gZwitlwyjL17SODoLO7gkctAvnDvkCyssCmwn1KusdX5uxzxskBLLTycYXjNJ2PvC5cX0ccGACqfe89%2B8hPEje57Y8WvlSyzgvjv3DE484QqfD6pOMUDeqztNg23bJajIltxwrhcDCg%2BNd0Vr8dVpQTAUJiXRaMPbP6MMGOqUB0v3FAXzEvDHgTAlCnnVrIlaThGHBEwAVLhExOWC3tuYtOJrzYhpGQv82EA2NvLSJ7%2BdhL9DcPNscPtIJIRBRA29tnHyBBVUh6ZYMq8JvEgjno%2FRXN%2FA07jBP0Y0%2F3Drizt82sTp%2FL%2BNePp8lQU7gGqiLFZcvYiISPwsiacfEG8kH%2BB2QSEE3hRGkLe8MIfRxXEvGFcARLXd4cBPS4%2FGXHpWdHL2%2F&X-Amz-Signature=088789e1c60d5ecd135238198e2fe4ce1a685a7c14dfc842694200994371d26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP34KQVJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCY95PiYdBPFVGSUTy5O9%2Bm8G5O06nmTfpZyQPYseo2YQIgaZvJFNZVq0tA17j%2B3%2FelyHwvhO5gml%2F1NbTlLdptd%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHpblmIB8tSbKfCSrcA%2BizXQsIcN6eD%2BWsne5n1XNk7DG9TNfTL5FPVe7ttp6aHWDrjHn55UwiXaZUhI88eQQps1Xl2U35n3%2BtzFUV7kFOeQj7Hfn6Diz5ahW9hHs35adcU3tQrX4Haq3%2B1SAQtucB9ztACM1tOe5pxSaRIuuW3yv%2Bw14L1juJrYdeMt9cMookSjGIAhfwXt9fpFAOQVT3ISb32%2B1WgOYQ6EIiHLb1fXkXe3rxm28%2F9Y2Kfrx6pZsW%2Bah7Bfjf46ac2c9Wjf2XslYzTOIDyfLXTENZvQkf5jfY%2BvWAvHdxJT6BCbxdijq5v9KT8f8VO945lUlRjpFLUuGmj226JXuzaSnodskhw49TVpusgzEmQSePgOgY7LEhPHDLyHqtSky8RLM1%2BG%2BL6gPLQpqFkRP4UjxDxpApLHSNimA6iL6XTBbaWzyWCgnpKRdRf6z3vGqlh%2BDiOoUvqV%2BzhogVxUJgubuANHBdLQ1Vg2gZwitlwyjL17SODoLO7gkctAvnDvkCyssCmwn1KusdX5uxzxskBLLTycYXjNJ2PvC5cX0ccGACqfe89%2B8hPEje57Y8WvlSyzgvjv3DE484QqfD6pOMUDeqztNg23bJajIltxwrhcDCg%2BNd0Vr8dVpQTAUJiXRaMPbP6MMGOqUB0v3FAXzEvDHgTAlCnnVrIlaThGHBEwAVLhExOWC3tuYtOJrzYhpGQv82EA2NvLSJ7%2BdhL9DcPNscPtIJIRBRA29tnHyBBVUh6ZYMq8JvEgjno%2FRXN%2FA07jBP0Y0%2F3Drizt82sTp%2FL%2BNePp8lQU7gGqiLFZcvYiISPwsiacfEG8kH%2BB2QSEE3hRGkLe8MIfRxXEvGFcARLXd4cBPS4%2FGXHpWdHL2%2F&X-Amz-Signature=87409ca47f676098548a986302dfa7607ab4c2e718f073173a2b3f976470ea33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP34KQVJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCY95PiYdBPFVGSUTy5O9%2Bm8G5O06nmTfpZyQPYseo2YQIgaZvJFNZVq0tA17j%2B3%2FelyHwvhO5gml%2F1NbTlLdptd%2FcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAHpblmIB8tSbKfCSrcA%2BizXQsIcN6eD%2BWsne5n1XNk7DG9TNfTL5FPVe7ttp6aHWDrjHn55UwiXaZUhI88eQQps1Xl2U35n3%2BtzFUV7kFOeQj7Hfn6Diz5ahW9hHs35adcU3tQrX4Haq3%2B1SAQtucB9ztACM1tOe5pxSaRIuuW3yv%2Bw14L1juJrYdeMt9cMookSjGIAhfwXt9fpFAOQVT3ISb32%2B1WgOYQ6EIiHLb1fXkXe3rxm28%2F9Y2Kfrx6pZsW%2Bah7Bfjf46ac2c9Wjf2XslYzTOIDyfLXTENZvQkf5jfY%2BvWAvHdxJT6BCbxdijq5v9KT8f8VO945lUlRjpFLUuGmj226JXuzaSnodskhw49TVpusgzEmQSePgOgY7LEhPHDLyHqtSky8RLM1%2BG%2BL6gPLQpqFkRP4UjxDxpApLHSNimA6iL6XTBbaWzyWCgnpKRdRf6z3vGqlh%2BDiOoUvqV%2BzhogVxUJgubuANHBdLQ1Vg2gZwitlwyjL17SODoLO7gkctAvnDvkCyssCmwn1KusdX5uxzxskBLLTycYXjNJ2PvC5cX0ccGACqfe89%2B8hPEje57Y8WvlSyzgvjv3DE484QqfD6pOMUDeqztNg23bJajIltxwrhcDCg%2BNd0Vr8dVpQTAUJiXRaMPbP6MMGOqUB0v3FAXzEvDHgTAlCnnVrIlaThGHBEwAVLhExOWC3tuYtOJrzYhpGQv82EA2NvLSJ7%2BdhL9DcPNscPtIJIRBRA29tnHyBBVUh6ZYMq8JvEgjno%2FRXN%2FA07jBP0Y0%2F3Drizt82sTp%2FL%2BNePp8lQU7gGqiLFZcvYiISPwsiacfEG8kH%2BB2QSEE3hRGkLe8MIfRxXEvGFcARLXd4cBPS4%2FGXHpWdHL2%2F&X-Amz-Signature=af7b37bdea3a8bb525c200da06e2782819bb3d29e652b7eff904d71f3b4bc54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
