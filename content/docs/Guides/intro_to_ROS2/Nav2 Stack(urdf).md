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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL2R5H4H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCH1vP%2BsSi6CCaoyepBliqItXqLQzYukodkcJAi%2F%2BGdQUCIQDtyTcvzOAUVjE3qBHfQOrqnPsxZoUzfYFqVpAJPZ6AKCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaIIaiwhiAy5h6ujKtwDdtpAoU0obkkIF1%2FK%2BV9I1UVJ2%2Bnz8gSUW0OUml0O7mCywgG7jS%2FD99QDoX7r9%2BRv%2BFZEOrJj2N9XzkI5yo3Jw%2FmVHro9k6KUZgv1bDCwSJcRsfhh4vBYyK9CAgE3pYW2dnaGrf0YzGg5UdgRyfKkSVDXBK4N9BceuAMMMGvtjPJXEHXowCzfu2L2Vr5UoaPDm%2BBXFVFUjXqIAY74tDCbFcZII8xnWPG24z1gx7R2xZVSvH8FCzS6fuqZPi0KhInNB%2Fm2RqciOFLQchMoPh0ezffqlq2t9h0l50XEr87kc55mgUlrjtbEAVLgBzzsNB1u0O3JB2hPtD8TXW1IMCPjfm3qcLWC2nBBeiLafiD4a6VGGmZf%2FUyK%2BHkpi5riwVZ11ykXnT6RLcGZFaxUYNtlRBzolaX7K7lU8MsYY6%2FT017BrJVEttJw4SdH1PucgIO7lbZswt9UdGlQrDPgLy%2FWAeI4nmCuFeCXlDdlG5Iw%2F17oZm5ncpXoIhD8UWrqchrgNB%2B9RUT9mZXgr4H%2BlQyJbL678ZFloS%2BPZnV1Q8mHj1gT8YLHx1rTpJGOy8jIceGbiNz11NUGjjFBfC3jmrO2zmtopcDPA3yJXGGs4U0lRbpM2aefakhKw4vjUrQwtsrAvgY6pgFrqju83iCENzniCJJY4SsIq4HFea%2FUEgEvuvIpogLGi9Fh2UOjpwib%2FYf5quMmvb%2B6cg5dV1xrLGopaWcMMSMhI7UesPq1uh1NxD0vE0tNGqQZG%2FTiGntCtalc825lMiRYFjOz%2Fw81DK0qFHAAO0lB7x9kTpdB8ce6%2Be4NB8Y00aDZxDzYPX%2FO3Ojp4sS%2FpukzeahTJ6CIpBprs4RG1PQPRlein7sF&X-Amz-Signature=39224efd3af84778348e46b16adcbf872b98abfe15bd153fd6f157ff4885d81a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL2R5H4H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCH1vP%2BsSi6CCaoyepBliqItXqLQzYukodkcJAi%2F%2BGdQUCIQDtyTcvzOAUVjE3qBHfQOrqnPsxZoUzfYFqVpAJPZ6AKCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaIIaiwhiAy5h6ujKtwDdtpAoU0obkkIF1%2FK%2BV9I1UVJ2%2Bnz8gSUW0OUml0O7mCywgG7jS%2FD99QDoX7r9%2BRv%2BFZEOrJj2N9XzkI5yo3Jw%2FmVHro9k6KUZgv1bDCwSJcRsfhh4vBYyK9CAgE3pYW2dnaGrf0YzGg5UdgRyfKkSVDXBK4N9BceuAMMMGvtjPJXEHXowCzfu2L2Vr5UoaPDm%2BBXFVFUjXqIAY74tDCbFcZII8xnWPG24z1gx7R2xZVSvH8FCzS6fuqZPi0KhInNB%2Fm2RqciOFLQchMoPh0ezffqlq2t9h0l50XEr87kc55mgUlrjtbEAVLgBzzsNB1u0O3JB2hPtD8TXW1IMCPjfm3qcLWC2nBBeiLafiD4a6VGGmZf%2FUyK%2BHkpi5riwVZ11ykXnT6RLcGZFaxUYNtlRBzolaX7K7lU8MsYY6%2FT017BrJVEttJw4SdH1PucgIO7lbZswt9UdGlQrDPgLy%2FWAeI4nmCuFeCXlDdlG5Iw%2F17oZm5ncpXoIhD8UWrqchrgNB%2B9RUT9mZXgr4H%2BlQyJbL678ZFloS%2BPZnV1Q8mHj1gT8YLHx1rTpJGOy8jIceGbiNz11NUGjjFBfC3jmrO2zmtopcDPA3yJXGGs4U0lRbpM2aefakhKw4vjUrQwtsrAvgY6pgFrqju83iCENzniCJJY4SsIq4HFea%2FUEgEvuvIpogLGi9Fh2UOjpwib%2FYf5quMmvb%2B6cg5dV1xrLGopaWcMMSMhI7UesPq1uh1NxD0vE0tNGqQZG%2FTiGntCtalc825lMiRYFjOz%2Fw81DK0qFHAAO0lB7x9kTpdB8ce6%2Be4NB8Y00aDZxDzYPX%2FO3Ojp4sS%2FpukzeahTJ6CIpBprs4RG1PQPRlein7sF&X-Amz-Signature=3ddb2c6418737b8b0a2bc5b8a86bc25d955bdf5c157290de8cad58d870e1bdda&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL2R5H4H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCH1vP%2BsSi6CCaoyepBliqItXqLQzYukodkcJAi%2F%2BGdQUCIQDtyTcvzOAUVjE3qBHfQOrqnPsxZoUzfYFqVpAJPZ6AKCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaIIaiwhiAy5h6ujKtwDdtpAoU0obkkIF1%2FK%2BV9I1UVJ2%2Bnz8gSUW0OUml0O7mCywgG7jS%2FD99QDoX7r9%2BRv%2BFZEOrJj2N9XzkI5yo3Jw%2FmVHro9k6KUZgv1bDCwSJcRsfhh4vBYyK9CAgE3pYW2dnaGrf0YzGg5UdgRyfKkSVDXBK4N9BceuAMMMGvtjPJXEHXowCzfu2L2Vr5UoaPDm%2BBXFVFUjXqIAY74tDCbFcZII8xnWPG24z1gx7R2xZVSvH8FCzS6fuqZPi0KhInNB%2Fm2RqciOFLQchMoPh0ezffqlq2t9h0l50XEr87kc55mgUlrjtbEAVLgBzzsNB1u0O3JB2hPtD8TXW1IMCPjfm3qcLWC2nBBeiLafiD4a6VGGmZf%2FUyK%2BHkpi5riwVZ11ykXnT6RLcGZFaxUYNtlRBzolaX7K7lU8MsYY6%2FT017BrJVEttJw4SdH1PucgIO7lbZswt9UdGlQrDPgLy%2FWAeI4nmCuFeCXlDdlG5Iw%2F17oZm5ncpXoIhD8UWrqchrgNB%2B9RUT9mZXgr4H%2BlQyJbL678ZFloS%2BPZnV1Q8mHj1gT8YLHx1rTpJGOy8jIceGbiNz11NUGjjFBfC3jmrO2zmtopcDPA3yJXGGs4U0lRbpM2aefakhKw4vjUrQwtsrAvgY6pgFrqju83iCENzniCJJY4SsIq4HFea%2FUEgEvuvIpogLGi9Fh2UOjpwib%2FYf5quMmvb%2B6cg5dV1xrLGopaWcMMSMhI7UesPq1uh1NxD0vE0tNGqQZG%2FTiGntCtalc825lMiRYFjOz%2Fw81DK0qFHAAO0lB7x9kTpdB8ce6%2Be4NB8Y00aDZxDzYPX%2FO3Ojp4sS%2FpukzeahTJ6CIpBprs4RG1PQPRlein7sF&X-Amz-Signature=0f5755ea56a4d439e00ef8185b12a22cc1a93c57b916b70e2d34a4f348157081&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL2R5H4H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCH1vP%2BsSi6CCaoyepBliqItXqLQzYukodkcJAi%2F%2BGdQUCIQDtyTcvzOAUVjE3qBHfQOrqnPsxZoUzfYFqVpAJPZ6AKCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaIIaiwhiAy5h6ujKtwDdtpAoU0obkkIF1%2FK%2BV9I1UVJ2%2Bnz8gSUW0OUml0O7mCywgG7jS%2FD99QDoX7r9%2BRv%2BFZEOrJj2N9XzkI5yo3Jw%2FmVHro9k6KUZgv1bDCwSJcRsfhh4vBYyK9CAgE3pYW2dnaGrf0YzGg5UdgRyfKkSVDXBK4N9BceuAMMMGvtjPJXEHXowCzfu2L2Vr5UoaPDm%2BBXFVFUjXqIAY74tDCbFcZII8xnWPG24z1gx7R2xZVSvH8FCzS6fuqZPi0KhInNB%2Fm2RqciOFLQchMoPh0ezffqlq2t9h0l50XEr87kc55mgUlrjtbEAVLgBzzsNB1u0O3JB2hPtD8TXW1IMCPjfm3qcLWC2nBBeiLafiD4a6VGGmZf%2FUyK%2BHkpi5riwVZ11ykXnT6RLcGZFaxUYNtlRBzolaX7K7lU8MsYY6%2FT017BrJVEttJw4SdH1PucgIO7lbZswt9UdGlQrDPgLy%2FWAeI4nmCuFeCXlDdlG5Iw%2F17oZm5ncpXoIhD8UWrqchrgNB%2B9RUT9mZXgr4H%2BlQyJbL678ZFloS%2BPZnV1Q8mHj1gT8YLHx1rTpJGOy8jIceGbiNz11NUGjjFBfC3jmrO2zmtopcDPA3yJXGGs4U0lRbpM2aefakhKw4vjUrQwtsrAvgY6pgFrqju83iCENzniCJJY4SsIq4HFea%2FUEgEvuvIpogLGi9Fh2UOjpwib%2FYf5quMmvb%2B6cg5dV1xrLGopaWcMMSMhI7UesPq1uh1NxD0vE0tNGqQZG%2FTiGntCtalc825lMiRYFjOz%2Fw81DK0qFHAAO0lB7x9kTpdB8ce6%2Be4NB8Y00aDZxDzYPX%2FO3Ojp4sS%2FpukzeahTJ6CIpBprs4RG1PQPRlein7sF&X-Amz-Signature=a471d28b925e566b4c9b33a69cc9357ddea23141c0a312284c990ac8f404679d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL2R5H4H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCH1vP%2BsSi6CCaoyepBliqItXqLQzYukodkcJAi%2F%2BGdQUCIQDtyTcvzOAUVjE3qBHfQOrqnPsxZoUzfYFqVpAJPZ6AKCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaIIaiwhiAy5h6ujKtwDdtpAoU0obkkIF1%2FK%2BV9I1UVJ2%2Bnz8gSUW0OUml0O7mCywgG7jS%2FD99QDoX7r9%2BRv%2BFZEOrJj2N9XzkI5yo3Jw%2FmVHro9k6KUZgv1bDCwSJcRsfhh4vBYyK9CAgE3pYW2dnaGrf0YzGg5UdgRyfKkSVDXBK4N9BceuAMMMGvtjPJXEHXowCzfu2L2Vr5UoaPDm%2BBXFVFUjXqIAY74tDCbFcZII8xnWPG24z1gx7R2xZVSvH8FCzS6fuqZPi0KhInNB%2Fm2RqciOFLQchMoPh0ezffqlq2t9h0l50XEr87kc55mgUlrjtbEAVLgBzzsNB1u0O3JB2hPtD8TXW1IMCPjfm3qcLWC2nBBeiLafiD4a6VGGmZf%2FUyK%2BHkpi5riwVZ11ykXnT6RLcGZFaxUYNtlRBzolaX7K7lU8MsYY6%2FT017BrJVEttJw4SdH1PucgIO7lbZswt9UdGlQrDPgLy%2FWAeI4nmCuFeCXlDdlG5Iw%2F17oZm5ncpXoIhD8UWrqchrgNB%2B9RUT9mZXgr4H%2BlQyJbL678ZFloS%2BPZnV1Q8mHj1gT8YLHx1rTpJGOy8jIceGbiNz11NUGjjFBfC3jmrO2zmtopcDPA3yJXGGs4U0lRbpM2aefakhKw4vjUrQwtsrAvgY6pgFrqju83iCENzniCJJY4SsIq4HFea%2FUEgEvuvIpogLGi9Fh2UOjpwib%2FYf5quMmvb%2B6cg5dV1xrLGopaWcMMSMhI7UesPq1uh1NxD0vE0tNGqQZG%2FTiGntCtalc825lMiRYFjOz%2Fw81DK0qFHAAO0lB7x9kTpdB8ce6%2Be4NB8Y00aDZxDzYPX%2FO3Ojp4sS%2FpukzeahTJ6CIpBprs4RG1PQPRlein7sF&X-Amz-Signature=c7abfa6c057e361ee8c0226a27d7e84e8440756685e52ca654216d745b2de1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL2R5H4H%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCH1vP%2BsSi6CCaoyepBliqItXqLQzYukodkcJAi%2F%2BGdQUCIQDtyTcvzOAUVjE3qBHfQOrqnPsxZoUzfYFqVpAJPZ6AKCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaIIaiwhiAy5h6ujKtwDdtpAoU0obkkIF1%2FK%2BV9I1UVJ2%2Bnz8gSUW0OUml0O7mCywgG7jS%2FD99QDoX7r9%2BRv%2BFZEOrJj2N9XzkI5yo3Jw%2FmVHro9k6KUZgv1bDCwSJcRsfhh4vBYyK9CAgE3pYW2dnaGrf0YzGg5UdgRyfKkSVDXBK4N9BceuAMMMGvtjPJXEHXowCzfu2L2Vr5UoaPDm%2BBXFVFUjXqIAY74tDCbFcZII8xnWPG24z1gx7R2xZVSvH8FCzS6fuqZPi0KhInNB%2Fm2RqciOFLQchMoPh0ezffqlq2t9h0l50XEr87kc55mgUlrjtbEAVLgBzzsNB1u0O3JB2hPtD8TXW1IMCPjfm3qcLWC2nBBeiLafiD4a6VGGmZf%2FUyK%2BHkpi5riwVZ11ykXnT6RLcGZFaxUYNtlRBzolaX7K7lU8MsYY6%2FT017BrJVEttJw4SdH1PucgIO7lbZswt9UdGlQrDPgLy%2FWAeI4nmCuFeCXlDdlG5Iw%2F17oZm5ncpXoIhD8UWrqchrgNB%2B9RUT9mZXgr4H%2BlQyJbL678ZFloS%2BPZnV1Q8mHj1gT8YLHx1rTpJGOy8jIceGbiNz11NUGjjFBfC3jmrO2zmtopcDPA3yJXGGs4U0lRbpM2aefakhKw4vjUrQwtsrAvgY6pgFrqju83iCENzniCJJY4SsIq4HFea%2FUEgEvuvIpogLGi9Fh2UOjpwib%2FYf5quMmvb%2B6cg5dV1xrLGopaWcMMSMhI7UesPq1uh1NxD0vE0tNGqQZG%2FTiGntCtalc825lMiRYFjOz%2Fw81DK0qFHAAO0lB7x9kTpdB8ce6%2Be4NB8Y00aDZxDzYPX%2FO3Ojp4sS%2FpukzeahTJ6CIpBprs4RG1PQPRlein7sF&X-Amz-Signature=0d0b61e7ea3fa17dff4956ca93d0e3411045e5996a2c2ea7095eee1629b91f31&X-Amz-SignedHeaders=host&x-id=GetObject)
