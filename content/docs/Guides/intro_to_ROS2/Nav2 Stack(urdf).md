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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOTKDFW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFVuMOlCUU0bv4d%2FhNYZtpUMjkbqbF4uQclTpWFKBnMAiBSBGnM3wgIDnFIp1U5txsSoKoX68a%2FGIgXPmW8Ri0LmyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80mi1DDPAaayz0elKtwDPU4TqXLfa1N8c2u8WN4zvwSV6NXRBecSdZBM1Yxwv4Sm0AEa5xJSjwUAPEl1e%2BLGH3bzJDsowUzOne96WXPqe3wySHp2fRb8amBsKrs1WUVOwJcFKDYAiROS%2B7ZKS3%2BWkn0styTSislaV4k9XrxXWKG%2Fyo8tv0hXrH9zP5L9U0q8c3CDmzd7NqWw85IEEs%2B4qjBF9ExIRsTqmgnBBpVFxoaNR2cnfNnbi00EIZvaHIuKK9LnmpX7nezZWRyLimQFkR%2Fe%2B8nENgv7ySD9AAdErZT36TlRe6%2F6R4bkrIewQ0VpEnBsycWov8Wf9lRm3D68gJctM9bp6UQu4rz21MdBSQU4cyWbRRhu6vLQA6wNJ8dfHVR3ZOASvQFkTrL4Cc7wVtzBEjINZaVHtmp78yjBCX8idqtO0l3XiCwyC92SQvqubRNno%2BQe0CFFxqkzWdoP1ZJhzLOk2oW2AJ8xrJmtDj10Z7UUeP5pjS%2B%2B6dPOZhMmB1bytuXAOR02tddcwCN4IxtYIOurmvF%2B92sfQ%2BPq9qkdQAUUyW6UlPx9cUFbXA8o%2FbNARCUQH9M0Ub4UMFvWdtFttd1%2Bn6oT59Hy4cAz5FGL6tlO%2B8erkoP%2FmBKIzamFSh02LQP7XVw%2BHVgw%2FcOQwwY6pgEBqivlI9ZiuMRK9Duj5sp7XsgmijhhCaqgFWeR8O0GqFCDWlDmIgnkDMoiLrGyQtxSVyqWXJM%2FtFQfFY1mhbC8GwvVKA%2F4xD53FXgWaJCX%2BbvGGFuKzFhldSTLEJm2iaY5s1zCPkqmjjNNzRHBDYzaTloDGIgQ8wye4UHaw0G0YBJTNSE%2FJ4PHg6aeIO2mntT5knDbR2xwemwBjy2HNywE%2BZnbuxHR&X-Amz-Signature=9f02ad5f6a5b3e04b73b7427da042908262c824f49ad8c9dcf3743c48cbbd97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOTKDFW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFVuMOlCUU0bv4d%2FhNYZtpUMjkbqbF4uQclTpWFKBnMAiBSBGnM3wgIDnFIp1U5txsSoKoX68a%2FGIgXPmW8Ri0LmyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80mi1DDPAaayz0elKtwDPU4TqXLfa1N8c2u8WN4zvwSV6NXRBecSdZBM1Yxwv4Sm0AEa5xJSjwUAPEl1e%2BLGH3bzJDsowUzOne96WXPqe3wySHp2fRb8amBsKrs1WUVOwJcFKDYAiROS%2B7ZKS3%2BWkn0styTSislaV4k9XrxXWKG%2Fyo8tv0hXrH9zP5L9U0q8c3CDmzd7NqWw85IEEs%2B4qjBF9ExIRsTqmgnBBpVFxoaNR2cnfNnbi00EIZvaHIuKK9LnmpX7nezZWRyLimQFkR%2Fe%2B8nENgv7ySD9AAdErZT36TlRe6%2F6R4bkrIewQ0VpEnBsycWov8Wf9lRm3D68gJctM9bp6UQu4rz21MdBSQU4cyWbRRhu6vLQA6wNJ8dfHVR3ZOASvQFkTrL4Cc7wVtzBEjINZaVHtmp78yjBCX8idqtO0l3XiCwyC92SQvqubRNno%2BQe0CFFxqkzWdoP1ZJhzLOk2oW2AJ8xrJmtDj10Z7UUeP5pjS%2B%2B6dPOZhMmB1bytuXAOR02tddcwCN4IxtYIOurmvF%2B92sfQ%2BPq9qkdQAUUyW6UlPx9cUFbXA8o%2FbNARCUQH9M0Ub4UMFvWdtFttd1%2Bn6oT59Hy4cAz5FGL6tlO%2B8erkoP%2FmBKIzamFSh02LQP7XVw%2BHVgw%2FcOQwwY6pgEBqivlI9ZiuMRK9Duj5sp7XsgmijhhCaqgFWeR8O0GqFCDWlDmIgnkDMoiLrGyQtxSVyqWXJM%2FtFQfFY1mhbC8GwvVKA%2F4xD53FXgWaJCX%2BbvGGFuKzFhldSTLEJm2iaY5s1zCPkqmjjNNzRHBDYzaTloDGIgQ8wye4UHaw0G0YBJTNSE%2FJ4PHg6aeIO2mntT5knDbR2xwemwBjy2HNywE%2BZnbuxHR&X-Amz-Signature=5985e1d94f591535e713b95ce8e1aecdb045a98c5a57e549934b827a0082ec87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOTKDFW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFVuMOlCUU0bv4d%2FhNYZtpUMjkbqbF4uQclTpWFKBnMAiBSBGnM3wgIDnFIp1U5txsSoKoX68a%2FGIgXPmW8Ri0LmyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80mi1DDPAaayz0elKtwDPU4TqXLfa1N8c2u8WN4zvwSV6NXRBecSdZBM1Yxwv4Sm0AEa5xJSjwUAPEl1e%2BLGH3bzJDsowUzOne96WXPqe3wySHp2fRb8amBsKrs1WUVOwJcFKDYAiROS%2B7ZKS3%2BWkn0styTSislaV4k9XrxXWKG%2Fyo8tv0hXrH9zP5L9U0q8c3CDmzd7NqWw85IEEs%2B4qjBF9ExIRsTqmgnBBpVFxoaNR2cnfNnbi00EIZvaHIuKK9LnmpX7nezZWRyLimQFkR%2Fe%2B8nENgv7ySD9AAdErZT36TlRe6%2F6R4bkrIewQ0VpEnBsycWov8Wf9lRm3D68gJctM9bp6UQu4rz21MdBSQU4cyWbRRhu6vLQA6wNJ8dfHVR3ZOASvQFkTrL4Cc7wVtzBEjINZaVHtmp78yjBCX8idqtO0l3XiCwyC92SQvqubRNno%2BQe0CFFxqkzWdoP1ZJhzLOk2oW2AJ8xrJmtDj10Z7UUeP5pjS%2B%2B6dPOZhMmB1bytuXAOR02tddcwCN4IxtYIOurmvF%2B92sfQ%2BPq9qkdQAUUyW6UlPx9cUFbXA8o%2FbNARCUQH9M0Ub4UMFvWdtFttd1%2Bn6oT59Hy4cAz5FGL6tlO%2B8erkoP%2FmBKIzamFSh02LQP7XVw%2BHVgw%2FcOQwwY6pgEBqivlI9ZiuMRK9Duj5sp7XsgmijhhCaqgFWeR8O0GqFCDWlDmIgnkDMoiLrGyQtxSVyqWXJM%2FtFQfFY1mhbC8GwvVKA%2F4xD53FXgWaJCX%2BbvGGFuKzFhldSTLEJm2iaY5s1zCPkqmjjNNzRHBDYzaTloDGIgQ8wye4UHaw0G0YBJTNSE%2FJ4PHg6aeIO2mntT5knDbR2xwemwBjy2HNywE%2BZnbuxHR&X-Amz-Signature=d8c90fd6f4e706856407efb61137720524debab4a3193171ab31304e04c6fb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOTKDFW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFVuMOlCUU0bv4d%2FhNYZtpUMjkbqbF4uQclTpWFKBnMAiBSBGnM3wgIDnFIp1U5txsSoKoX68a%2FGIgXPmW8Ri0LmyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80mi1DDPAaayz0elKtwDPU4TqXLfa1N8c2u8WN4zvwSV6NXRBecSdZBM1Yxwv4Sm0AEa5xJSjwUAPEl1e%2BLGH3bzJDsowUzOne96WXPqe3wySHp2fRb8amBsKrs1WUVOwJcFKDYAiROS%2B7ZKS3%2BWkn0styTSislaV4k9XrxXWKG%2Fyo8tv0hXrH9zP5L9U0q8c3CDmzd7NqWw85IEEs%2B4qjBF9ExIRsTqmgnBBpVFxoaNR2cnfNnbi00EIZvaHIuKK9LnmpX7nezZWRyLimQFkR%2Fe%2B8nENgv7ySD9AAdErZT36TlRe6%2F6R4bkrIewQ0VpEnBsycWov8Wf9lRm3D68gJctM9bp6UQu4rz21MdBSQU4cyWbRRhu6vLQA6wNJ8dfHVR3ZOASvQFkTrL4Cc7wVtzBEjINZaVHtmp78yjBCX8idqtO0l3XiCwyC92SQvqubRNno%2BQe0CFFxqkzWdoP1ZJhzLOk2oW2AJ8xrJmtDj10Z7UUeP5pjS%2B%2B6dPOZhMmB1bytuXAOR02tddcwCN4IxtYIOurmvF%2B92sfQ%2BPq9qkdQAUUyW6UlPx9cUFbXA8o%2FbNARCUQH9M0Ub4UMFvWdtFttd1%2Bn6oT59Hy4cAz5FGL6tlO%2B8erkoP%2FmBKIzamFSh02LQP7XVw%2BHVgw%2FcOQwwY6pgEBqivlI9ZiuMRK9Duj5sp7XsgmijhhCaqgFWeR8O0GqFCDWlDmIgnkDMoiLrGyQtxSVyqWXJM%2FtFQfFY1mhbC8GwvVKA%2F4xD53FXgWaJCX%2BbvGGFuKzFhldSTLEJm2iaY5s1zCPkqmjjNNzRHBDYzaTloDGIgQ8wye4UHaw0G0YBJTNSE%2FJ4PHg6aeIO2mntT5knDbR2xwemwBjy2HNywE%2BZnbuxHR&X-Amz-Signature=d96827ca355d637b07727a3845c89b8bdad6f410e64cb6d1a15c94c00a669933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOTKDFW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFVuMOlCUU0bv4d%2FhNYZtpUMjkbqbF4uQclTpWFKBnMAiBSBGnM3wgIDnFIp1U5txsSoKoX68a%2FGIgXPmW8Ri0LmyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80mi1DDPAaayz0elKtwDPU4TqXLfa1N8c2u8WN4zvwSV6NXRBecSdZBM1Yxwv4Sm0AEa5xJSjwUAPEl1e%2BLGH3bzJDsowUzOne96WXPqe3wySHp2fRb8amBsKrs1WUVOwJcFKDYAiROS%2B7ZKS3%2BWkn0styTSislaV4k9XrxXWKG%2Fyo8tv0hXrH9zP5L9U0q8c3CDmzd7NqWw85IEEs%2B4qjBF9ExIRsTqmgnBBpVFxoaNR2cnfNnbi00EIZvaHIuKK9LnmpX7nezZWRyLimQFkR%2Fe%2B8nENgv7ySD9AAdErZT36TlRe6%2F6R4bkrIewQ0VpEnBsycWov8Wf9lRm3D68gJctM9bp6UQu4rz21MdBSQU4cyWbRRhu6vLQA6wNJ8dfHVR3ZOASvQFkTrL4Cc7wVtzBEjINZaVHtmp78yjBCX8idqtO0l3XiCwyC92SQvqubRNno%2BQe0CFFxqkzWdoP1ZJhzLOk2oW2AJ8xrJmtDj10Z7UUeP5pjS%2B%2B6dPOZhMmB1bytuXAOR02tddcwCN4IxtYIOurmvF%2B92sfQ%2BPq9qkdQAUUyW6UlPx9cUFbXA8o%2FbNARCUQH9M0Ub4UMFvWdtFttd1%2Bn6oT59Hy4cAz5FGL6tlO%2B8erkoP%2FmBKIzamFSh02LQP7XVw%2BHVgw%2FcOQwwY6pgEBqivlI9ZiuMRK9Duj5sp7XsgmijhhCaqgFWeR8O0GqFCDWlDmIgnkDMoiLrGyQtxSVyqWXJM%2FtFQfFY1mhbC8GwvVKA%2F4xD53FXgWaJCX%2BbvGGFuKzFhldSTLEJm2iaY5s1zCPkqmjjNNzRHBDYzaTloDGIgQ8wye4UHaw0G0YBJTNSE%2FJ4PHg6aeIO2mntT5knDbR2xwemwBjy2HNywE%2BZnbuxHR&X-Amz-Signature=52b75a0b3bbf743d8b6c7cce8f74df3ab7698d5cb7df675537d6c32c41a93f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOTKDFW%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFVuMOlCUU0bv4d%2FhNYZtpUMjkbqbF4uQclTpWFKBnMAiBSBGnM3wgIDnFIp1U5txsSoKoX68a%2FGIgXPmW8Ri0LmyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM80mi1DDPAaayz0elKtwDPU4TqXLfa1N8c2u8WN4zvwSV6NXRBecSdZBM1Yxwv4Sm0AEa5xJSjwUAPEl1e%2BLGH3bzJDsowUzOne96WXPqe3wySHp2fRb8amBsKrs1WUVOwJcFKDYAiROS%2B7ZKS3%2BWkn0styTSislaV4k9XrxXWKG%2Fyo8tv0hXrH9zP5L9U0q8c3CDmzd7NqWw85IEEs%2B4qjBF9ExIRsTqmgnBBpVFxoaNR2cnfNnbi00EIZvaHIuKK9LnmpX7nezZWRyLimQFkR%2Fe%2B8nENgv7ySD9AAdErZT36TlRe6%2F6R4bkrIewQ0VpEnBsycWov8Wf9lRm3D68gJctM9bp6UQu4rz21MdBSQU4cyWbRRhu6vLQA6wNJ8dfHVR3ZOASvQFkTrL4Cc7wVtzBEjINZaVHtmp78yjBCX8idqtO0l3XiCwyC92SQvqubRNno%2BQe0CFFxqkzWdoP1ZJhzLOk2oW2AJ8xrJmtDj10Z7UUeP5pjS%2B%2B6dPOZhMmB1bytuXAOR02tddcwCN4IxtYIOurmvF%2B92sfQ%2BPq9qkdQAUUyW6UlPx9cUFbXA8o%2FbNARCUQH9M0Ub4UMFvWdtFttd1%2Bn6oT59Hy4cAz5FGL6tlO%2B8erkoP%2FmBKIzamFSh02LQP7XVw%2BHVgw%2FcOQwwY6pgEBqivlI9ZiuMRK9Duj5sp7XsgmijhhCaqgFWeR8O0GqFCDWlDmIgnkDMoiLrGyQtxSVyqWXJM%2FtFQfFY1mhbC8GwvVKA%2F4xD53FXgWaJCX%2BbvGGFuKzFhldSTLEJm2iaY5s1zCPkqmjjNNzRHBDYzaTloDGIgQ8wye4UHaw0G0YBJTNSE%2FJ4PHg6aeIO2mntT5knDbR2xwemwBjy2HNywE%2BZnbuxHR&X-Amz-Signature=2802698e315ee5bf296a9c0988d407ccf8845bcd699cf5c33ec15843fb61b933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
