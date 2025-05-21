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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATE7JT4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OTEbljwRSOhgTYyDPSnWAoNfwhdbDsATQv4G2o0ChAIhAKbXsZ0wCK5vM5RbU2ksPYk0AXAtTfFTywdhwR%2B37ygUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXgsSXPx3pZPAZBxsq3AP0iU%2BFTQimqK9E%2BvS0J%2FXBX56sQabNnm8k%2Bpt2KAbiwQmCIxibOMtpptNsMcmwOgIj0RgftyGKS%2BusTh0xJycPyP2BojXV%2B9Ir3oU%2BnnzBNsDLyoLGbQIqGdRdgS85M%2BwLHeJk%2B4r4cGNzNJrkIjD6GBhUxYw7QkCGc89kOmDe%2F1np8GjNV0sM9REP7OM4JdCKd72hkBudwIruebQ1VVTDuE4RHpQzwmpaO%2BjbG3iIoasDq0lAOXX4grQV2ijahgv%2FItyWo6cG145yCtVAXeM1v1BPuzB7APJrd4Vlgduq2ydDm4wS4Z%2BEBusRFmSysv4gN9Rpb7uAb8CmTCTVwRHR0GXPIZKzxB57i5pCy8UJGsaU%2B4ER3fbDci9B%2BJbQwFBSbfuWhcoIi3mQcQolyNrHol1bCqrGaTyc5qiFg9OZCy9036YA7MMIS93hxcyA8b0KAPZGbWCr%2FIfDCI4feuahpumieu2GtzkO5OBUtBD88tjaL4u1JqXJpRBddjKJAZrTh59R7HhPkAQosaWLS7ywr9YoPi98Ldg9bAuq7cDIWdBu2Q6GaQFlJjAKG6mtB8j1Y8BOrQQWzfD87HtF6G3ib8DbTGTk6UcDmFQRn9axPtz4x8jv7YDGIi%2FkgzDh7LXBBjqkAf9He3ZkMnpgY%2FsPsyz6uk%2BP1VE%2B%2BUtrdphH5X61WjwfrS7J7aPmXWJnA0MHM7jiFMcg%2Br7OIgFXAcZJS5GeDmEq6B8KxaVV%2BN0DNrJupXZvoGHcs2DKPudfaVyM9UkH1eSF4cOW%2BFY6g1cU%2Fw2c8gtzyupoS6NAfsOvcLh7RXY5eFEDLCTkdUYMCfcea9Lui2jccdClc2xQaUi7sODtwX62rKFE&X-Amz-Signature=d31b7d8bd567901345bb53064a0c2d353b9fea56ced2cbc399effe3b6b2014a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATE7JT4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OTEbljwRSOhgTYyDPSnWAoNfwhdbDsATQv4G2o0ChAIhAKbXsZ0wCK5vM5RbU2ksPYk0AXAtTfFTywdhwR%2B37ygUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXgsSXPx3pZPAZBxsq3AP0iU%2BFTQimqK9E%2BvS0J%2FXBX56sQabNnm8k%2Bpt2KAbiwQmCIxibOMtpptNsMcmwOgIj0RgftyGKS%2BusTh0xJycPyP2BojXV%2B9Ir3oU%2BnnzBNsDLyoLGbQIqGdRdgS85M%2BwLHeJk%2B4r4cGNzNJrkIjD6GBhUxYw7QkCGc89kOmDe%2F1np8GjNV0sM9REP7OM4JdCKd72hkBudwIruebQ1VVTDuE4RHpQzwmpaO%2BjbG3iIoasDq0lAOXX4grQV2ijahgv%2FItyWo6cG145yCtVAXeM1v1BPuzB7APJrd4Vlgduq2ydDm4wS4Z%2BEBusRFmSysv4gN9Rpb7uAb8CmTCTVwRHR0GXPIZKzxB57i5pCy8UJGsaU%2B4ER3fbDci9B%2BJbQwFBSbfuWhcoIi3mQcQolyNrHol1bCqrGaTyc5qiFg9OZCy9036YA7MMIS93hxcyA8b0KAPZGbWCr%2FIfDCI4feuahpumieu2GtzkO5OBUtBD88tjaL4u1JqXJpRBddjKJAZrTh59R7HhPkAQosaWLS7ywr9YoPi98Ldg9bAuq7cDIWdBu2Q6GaQFlJjAKG6mtB8j1Y8BOrQQWzfD87HtF6G3ib8DbTGTk6UcDmFQRn9axPtz4x8jv7YDGIi%2FkgzDh7LXBBjqkAf9He3ZkMnpgY%2FsPsyz6uk%2BP1VE%2B%2BUtrdphH5X61WjwfrS7J7aPmXWJnA0MHM7jiFMcg%2Br7OIgFXAcZJS5GeDmEq6B8KxaVV%2BN0DNrJupXZvoGHcs2DKPudfaVyM9UkH1eSF4cOW%2BFY6g1cU%2Fw2c8gtzyupoS6NAfsOvcLh7RXY5eFEDLCTkdUYMCfcea9Lui2jccdClc2xQaUi7sODtwX62rKFE&X-Amz-Signature=b11cddb73af8be71360f5a51f37c887d4866f2d775ef2a76c41bdb79db023201&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATE7JT4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OTEbljwRSOhgTYyDPSnWAoNfwhdbDsATQv4G2o0ChAIhAKbXsZ0wCK5vM5RbU2ksPYk0AXAtTfFTywdhwR%2B37ygUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXgsSXPx3pZPAZBxsq3AP0iU%2BFTQimqK9E%2BvS0J%2FXBX56sQabNnm8k%2Bpt2KAbiwQmCIxibOMtpptNsMcmwOgIj0RgftyGKS%2BusTh0xJycPyP2BojXV%2B9Ir3oU%2BnnzBNsDLyoLGbQIqGdRdgS85M%2BwLHeJk%2B4r4cGNzNJrkIjD6GBhUxYw7QkCGc89kOmDe%2F1np8GjNV0sM9REP7OM4JdCKd72hkBudwIruebQ1VVTDuE4RHpQzwmpaO%2BjbG3iIoasDq0lAOXX4grQV2ijahgv%2FItyWo6cG145yCtVAXeM1v1BPuzB7APJrd4Vlgduq2ydDm4wS4Z%2BEBusRFmSysv4gN9Rpb7uAb8CmTCTVwRHR0GXPIZKzxB57i5pCy8UJGsaU%2B4ER3fbDci9B%2BJbQwFBSbfuWhcoIi3mQcQolyNrHol1bCqrGaTyc5qiFg9OZCy9036YA7MMIS93hxcyA8b0KAPZGbWCr%2FIfDCI4feuahpumieu2GtzkO5OBUtBD88tjaL4u1JqXJpRBddjKJAZrTh59R7HhPkAQosaWLS7ywr9YoPi98Ldg9bAuq7cDIWdBu2Q6GaQFlJjAKG6mtB8j1Y8BOrQQWzfD87HtF6G3ib8DbTGTk6UcDmFQRn9axPtz4x8jv7YDGIi%2FkgzDh7LXBBjqkAf9He3ZkMnpgY%2FsPsyz6uk%2BP1VE%2B%2BUtrdphH5X61WjwfrS7J7aPmXWJnA0MHM7jiFMcg%2Br7OIgFXAcZJS5GeDmEq6B8KxaVV%2BN0DNrJupXZvoGHcs2DKPudfaVyM9UkH1eSF4cOW%2BFY6g1cU%2Fw2c8gtzyupoS6NAfsOvcLh7RXY5eFEDLCTkdUYMCfcea9Lui2jccdClc2xQaUi7sODtwX62rKFE&X-Amz-Signature=bc1dfe1ab45f31b833a975bb2f4f514f69728cb58ca234853dc426d1a6a21550&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATE7JT4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OTEbljwRSOhgTYyDPSnWAoNfwhdbDsATQv4G2o0ChAIhAKbXsZ0wCK5vM5RbU2ksPYk0AXAtTfFTywdhwR%2B37ygUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXgsSXPx3pZPAZBxsq3AP0iU%2BFTQimqK9E%2BvS0J%2FXBX56sQabNnm8k%2Bpt2KAbiwQmCIxibOMtpptNsMcmwOgIj0RgftyGKS%2BusTh0xJycPyP2BojXV%2B9Ir3oU%2BnnzBNsDLyoLGbQIqGdRdgS85M%2BwLHeJk%2B4r4cGNzNJrkIjD6GBhUxYw7QkCGc89kOmDe%2F1np8GjNV0sM9REP7OM4JdCKd72hkBudwIruebQ1VVTDuE4RHpQzwmpaO%2BjbG3iIoasDq0lAOXX4grQV2ijahgv%2FItyWo6cG145yCtVAXeM1v1BPuzB7APJrd4Vlgduq2ydDm4wS4Z%2BEBusRFmSysv4gN9Rpb7uAb8CmTCTVwRHR0GXPIZKzxB57i5pCy8UJGsaU%2B4ER3fbDci9B%2BJbQwFBSbfuWhcoIi3mQcQolyNrHol1bCqrGaTyc5qiFg9OZCy9036YA7MMIS93hxcyA8b0KAPZGbWCr%2FIfDCI4feuahpumieu2GtzkO5OBUtBD88tjaL4u1JqXJpRBddjKJAZrTh59R7HhPkAQosaWLS7ywr9YoPi98Ldg9bAuq7cDIWdBu2Q6GaQFlJjAKG6mtB8j1Y8BOrQQWzfD87HtF6G3ib8DbTGTk6UcDmFQRn9axPtz4x8jv7YDGIi%2FkgzDh7LXBBjqkAf9He3ZkMnpgY%2FsPsyz6uk%2BP1VE%2B%2BUtrdphH5X61WjwfrS7J7aPmXWJnA0MHM7jiFMcg%2Br7OIgFXAcZJS5GeDmEq6B8KxaVV%2BN0DNrJupXZvoGHcs2DKPudfaVyM9UkH1eSF4cOW%2BFY6g1cU%2Fw2c8gtzyupoS6NAfsOvcLh7RXY5eFEDLCTkdUYMCfcea9Lui2jccdClc2xQaUi7sODtwX62rKFE&X-Amz-Signature=0fb7d7feef47e822b94819fde56389077f415939f9866febd31bc1289d0eaf74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATE7JT4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OTEbljwRSOhgTYyDPSnWAoNfwhdbDsATQv4G2o0ChAIhAKbXsZ0wCK5vM5RbU2ksPYk0AXAtTfFTywdhwR%2B37ygUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXgsSXPx3pZPAZBxsq3AP0iU%2BFTQimqK9E%2BvS0J%2FXBX56sQabNnm8k%2Bpt2KAbiwQmCIxibOMtpptNsMcmwOgIj0RgftyGKS%2BusTh0xJycPyP2BojXV%2B9Ir3oU%2BnnzBNsDLyoLGbQIqGdRdgS85M%2BwLHeJk%2B4r4cGNzNJrkIjD6GBhUxYw7QkCGc89kOmDe%2F1np8GjNV0sM9REP7OM4JdCKd72hkBudwIruebQ1VVTDuE4RHpQzwmpaO%2BjbG3iIoasDq0lAOXX4grQV2ijahgv%2FItyWo6cG145yCtVAXeM1v1BPuzB7APJrd4Vlgduq2ydDm4wS4Z%2BEBusRFmSysv4gN9Rpb7uAb8CmTCTVwRHR0GXPIZKzxB57i5pCy8UJGsaU%2B4ER3fbDci9B%2BJbQwFBSbfuWhcoIi3mQcQolyNrHol1bCqrGaTyc5qiFg9OZCy9036YA7MMIS93hxcyA8b0KAPZGbWCr%2FIfDCI4feuahpumieu2GtzkO5OBUtBD88tjaL4u1JqXJpRBddjKJAZrTh59R7HhPkAQosaWLS7ywr9YoPi98Ldg9bAuq7cDIWdBu2Q6GaQFlJjAKG6mtB8j1Y8BOrQQWzfD87HtF6G3ib8DbTGTk6UcDmFQRn9axPtz4x8jv7YDGIi%2FkgzDh7LXBBjqkAf9He3ZkMnpgY%2FsPsyz6uk%2BP1VE%2B%2BUtrdphH5X61WjwfrS7J7aPmXWJnA0MHM7jiFMcg%2Br7OIgFXAcZJS5GeDmEq6B8KxaVV%2BN0DNrJupXZvoGHcs2DKPudfaVyM9UkH1eSF4cOW%2BFY6g1cU%2Fw2c8gtzyupoS6NAfsOvcLh7RXY5eFEDLCTkdUYMCfcea9Lui2jccdClc2xQaUi7sODtwX62rKFE&X-Amz-Signature=8d1624ec0b1f756c1082881f68da5019f636b4cec92512f1051c9bc4e7eeaf0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATE7JT4%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8OTEbljwRSOhgTYyDPSnWAoNfwhdbDsATQv4G2o0ChAIhAKbXsZ0wCK5vM5RbU2ksPYk0AXAtTfFTywdhwR%2B37ygUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXgsSXPx3pZPAZBxsq3AP0iU%2BFTQimqK9E%2BvS0J%2FXBX56sQabNnm8k%2Bpt2KAbiwQmCIxibOMtpptNsMcmwOgIj0RgftyGKS%2BusTh0xJycPyP2BojXV%2B9Ir3oU%2BnnzBNsDLyoLGbQIqGdRdgS85M%2BwLHeJk%2B4r4cGNzNJrkIjD6GBhUxYw7QkCGc89kOmDe%2F1np8GjNV0sM9REP7OM4JdCKd72hkBudwIruebQ1VVTDuE4RHpQzwmpaO%2BjbG3iIoasDq0lAOXX4grQV2ijahgv%2FItyWo6cG145yCtVAXeM1v1BPuzB7APJrd4Vlgduq2ydDm4wS4Z%2BEBusRFmSysv4gN9Rpb7uAb8CmTCTVwRHR0GXPIZKzxB57i5pCy8UJGsaU%2B4ER3fbDci9B%2BJbQwFBSbfuWhcoIi3mQcQolyNrHol1bCqrGaTyc5qiFg9OZCy9036YA7MMIS93hxcyA8b0KAPZGbWCr%2FIfDCI4feuahpumieu2GtzkO5OBUtBD88tjaL4u1JqXJpRBddjKJAZrTh59R7HhPkAQosaWLS7ywr9YoPi98Ldg9bAuq7cDIWdBu2Q6GaQFlJjAKG6mtB8j1Y8BOrQQWzfD87HtF6G3ib8DbTGTk6UcDmFQRn9axPtz4x8jv7YDGIi%2FkgzDh7LXBBjqkAf9He3ZkMnpgY%2FsPsyz6uk%2BP1VE%2B%2BUtrdphH5X61WjwfrS7J7aPmXWJnA0MHM7jiFMcg%2Br7OIgFXAcZJS5GeDmEq6B8KxaVV%2BN0DNrJupXZvoGHcs2DKPudfaVyM9UkH1eSF4cOW%2BFY6g1cU%2Fw2c8gtzyupoS6NAfsOvcLh7RXY5eFEDLCTkdUYMCfcea9Lui2jccdClc2xQaUi7sODtwX62rKFE&X-Amz-Signature=23e78a2f981f9c617011ca330b157657175ad8e125fd484881ef343e735b56ea&X-Amz-SignedHeaders=host&x-id=GetObject)
