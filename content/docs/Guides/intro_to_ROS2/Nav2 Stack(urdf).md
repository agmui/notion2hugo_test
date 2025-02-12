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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BV52P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYU3%2Bh9DbwmBz1kTGmvYlhbL8eGFhVoxCPvJKg7vF2nAIhAItYLBY1HfnDxq0dOooVSoGn0MljIMBpQr4f9NyQ%2BPQQKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1o%2FJh7MD%2Fw7YVfAq3AMJvHqESqJ8M1Sg5Adpk1CQgyD6wAn2O0H02qjntiEtjMw62X84rcuiHMdlPPqg0qhlupB4gKgy67%2BQRhzih8Iovkkc2K6c8TDty%2FRF50oLBQAK921RLxKgJZLoju9th7LKGUvGPKYaW%2FnRVlQzMA2ivId4spzSlv0N%2B0dPDAXGn2dvTLyKuou7JDHg7K7%2Frve8Hr2s0mQaDgqDGE4zHGn8TjF%2FDFR90McFxXqmbVAKeztxXgmkpBzzUOf%2FDctviTmb4jw5S7gZUOTRYrPeGyM9qitu2d569oC68EmtZKSzxEQjF%2FkH7ImP9uHxOa4PK2vjcLPwDY2K62UW72%2Fh%2BPsGkN5zkFvkL2ZFLbV0Nl2xiC1yiGKmknMDlDC5c1F%2B%2FXMXtUOpxwsUOceOPgAqAFENH2BUzA3JpJwb1LXJZ48lCABQPQs85flLCOnpt70cjKLhx6JImBrmSZfK%2BFvsKmj5S1cnbfumfsr3rcxPOFi2zwRXmX88%2BcawBWane5lIkGClftUOrkly6nbjxr%2BfiPo0Zt2WLgJ3IRDLCCEQrVz7VIA1NgEJSj50d21%2FWcmiaJ148ZUD%2BqIEHYlZYJ9b1RhToYwrXa6XeULC%2FCoiZnlUp83C4yiiQpSUjflWIDCahrG9BjqkAQ67fiuBatR4Onb7uGZC5AqSOq0gWLvUy7MY%2FDPfKZ3CSPvX6qcZYZeWmjbJHnfGM%2FwT1qZPh3aRjwnyz9stCb5ecBdnZo7%2Fz77fQhXz8g0nzfEBa75y9I4sUQ6SpNOK5P%2BjzDTNPsMTOYE8XTG%2FVYtYV6glgFnwpaI84fuu7PcpR5Mr1YXIsmz2K64DhQBpSc5uL3D15MA7yZ4ZFeavk2RVDVXb&X-Amz-Signature=5e67fdcbecd2c742ee9ce83a0aed869ed6347780c2f45b1e231b13e182ea64fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BV52P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYU3%2Bh9DbwmBz1kTGmvYlhbL8eGFhVoxCPvJKg7vF2nAIhAItYLBY1HfnDxq0dOooVSoGn0MljIMBpQr4f9NyQ%2BPQQKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1o%2FJh7MD%2Fw7YVfAq3AMJvHqESqJ8M1Sg5Adpk1CQgyD6wAn2O0H02qjntiEtjMw62X84rcuiHMdlPPqg0qhlupB4gKgy67%2BQRhzih8Iovkkc2K6c8TDty%2FRF50oLBQAK921RLxKgJZLoju9th7LKGUvGPKYaW%2FnRVlQzMA2ivId4spzSlv0N%2B0dPDAXGn2dvTLyKuou7JDHg7K7%2Frve8Hr2s0mQaDgqDGE4zHGn8TjF%2FDFR90McFxXqmbVAKeztxXgmkpBzzUOf%2FDctviTmb4jw5S7gZUOTRYrPeGyM9qitu2d569oC68EmtZKSzxEQjF%2FkH7ImP9uHxOa4PK2vjcLPwDY2K62UW72%2Fh%2BPsGkN5zkFvkL2ZFLbV0Nl2xiC1yiGKmknMDlDC5c1F%2B%2FXMXtUOpxwsUOceOPgAqAFENH2BUzA3JpJwb1LXJZ48lCABQPQs85flLCOnpt70cjKLhx6JImBrmSZfK%2BFvsKmj5S1cnbfumfsr3rcxPOFi2zwRXmX88%2BcawBWane5lIkGClftUOrkly6nbjxr%2BfiPo0Zt2WLgJ3IRDLCCEQrVz7VIA1NgEJSj50d21%2FWcmiaJ148ZUD%2BqIEHYlZYJ9b1RhToYwrXa6XeULC%2FCoiZnlUp83C4yiiQpSUjflWIDCahrG9BjqkAQ67fiuBatR4Onb7uGZC5AqSOq0gWLvUy7MY%2FDPfKZ3CSPvX6qcZYZeWmjbJHnfGM%2FwT1qZPh3aRjwnyz9stCb5ecBdnZo7%2Fz77fQhXz8g0nzfEBa75y9I4sUQ6SpNOK5P%2BjzDTNPsMTOYE8XTG%2FVYtYV6glgFnwpaI84fuu7PcpR5Mr1YXIsmz2K64DhQBpSc5uL3D15MA7yZ4ZFeavk2RVDVXb&X-Amz-Signature=5b27aa47b04a4eac5a2f7f9c46039a63491767109f598fcdc785f87a90308d18&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BV52P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYU3%2Bh9DbwmBz1kTGmvYlhbL8eGFhVoxCPvJKg7vF2nAIhAItYLBY1HfnDxq0dOooVSoGn0MljIMBpQr4f9NyQ%2BPQQKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1o%2FJh7MD%2Fw7YVfAq3AMJvHqESqJ8M1Sg5Adpk1CQgyD6wAn2O0H02qjntiEtjMw62X84rcuiHMdlPPqg0qhlupB4gKgy67%2BQRhzih8Iovkkc2K6c8TDty%2FRF50oLBQAK921RLxKgJZLoju9th7LKGUvGPKYaW%2FnRVlQzMA2ivId4spzSlv0N%2B0dPDAXGn2dvTLyKuou7JDHg7K7%2Frve8Hr2s0mQaDgqDGE4zHGn8TjF%2FDFR90McFxXqmbVAKeztxXgmkpBzzUOf%2FDctviTmb4jw5S7gZUOTRYrPeGyM9qitu2d569oC68EmtZKSzxEQjF%2FkH7ImP9uHxOa4PK2vjcLPwDY2K62UW72%2Fh%2BPsGkN5zkFvkL2ZFLbV0Nl2xiC1yiGKmknMDlDC5c1F%2B%2FXMXtUOpxwsUOceOPgAqAFENH2BUzA3JpJwb1LXJZ48lCABQPQs85flLCOnpt70cjKLhx6JImBrmSZfK%2BFvsKmj5S1cnbfumfsr3rcxPOFi2zwRXmX88%2BcawBWane5lIkGClftUOrkly6nbjxr%2BfiPo0Zt2WLgJ3IRDLCCEQrVz7VIA1NgEJSj50d21%2FWcmiaJ148ZUD%2BqIEHYlZYJ9b1RhToYwrXa6XeULC%2FCoiZnlUp83C4yiiQpSUjflWIDCahrG9BjqkAQ67fiuBatR4Onb7uGZC5AqSOq0gWLvUy7MY%2FDPfKZ3CSPvX6qcZYZeWmjbJHnfGM%2FwT1qZPh3aRjwnyz9stCb5ecBdnZo7%2Fz77fQhXz8g0nzfEBa75y9I4sUQ6SpNOK5P%2BjzDTNPsMTOYE8XTG%2FVYtYV6glgFnwpaI84fuu7PcpR5Mr1YXIsmz2K64DhQBpSc5uL3D15MA7yZ4ZFeavk2RVDVXb&X-Amz-Signature=4707b9257c67c6b7e33a3a5b46e18b6de9ceae27098e819d6bcebd7acee879d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BV52P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYU3%2Bh9DbwmBz1kTGmvYlhbL8eGFhVoxCPvJKg7vF2nAIhAItYLBY1HfnDxq0dOooVSoGn0MljIMBpQr4f9NyQ%2BPQQKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1o%2FJh7MD%2Fw7YVfAq3AMJvHqESqJ8M1Sg5Adpk1CQgyD6wAn2O0H02qjntiEtjMw62X84rcuiHMdlPPqg0qhlupB4gKgy67%2BQRhzih8Iovkkc2K6c8TDty%2FRF50oLBQAK921RLxKgJZLoju9th7LKGUvGPKYaW%2FnRVlQzMA2ivId4spzSlv0N%2B0dPDAXGn2dvTLyKuou7JDHg7K7%2Frve8Hr2s0mQaDgqDGE4zHGn8TjF%2FDFR90McFxXqmbVAKeztxXgmkpBzzUOf%2FDctviTmb4jw5S7gZUOTRYrPeGyM9qitu2d569oC68EmtZKSzxEQjF%2FkH7ImP9uHxOa4PK2vjcLPwDY2K62UW72%2Fh%2BPsGkN5zkFvkL2ZFLbV0Nl2xiC1yiGKmknMDlDC5c1F%2B%2FXMXtUOpxwsUOceOPgAqAFENH2BUzA3JpJwb1LXJZ48lCABQPQs85flLCOnpt70cjKLhx6JImBrmSZfK%2BFvsKmj5S1cnbfumfsr3rcxPOFi2zwRXmX88%2BcawBWane5lIkGClftUOrkly6nbjxr%2BfiPo0Zt2WLgJ3IRDLCCEQrVz7VIA1NgEJSj50d21%2FWcmiaJ148ZUD%2BqIEHYlZYJ9b1RhToYwrXa6XeULC%2FCoiZnlUp83C4yiiQpSUjflWIDCahrG9BjqkAQ67fiuBatR4Onb7uGZC5AqSOq0gWLvUy7MY%2FDPfKZ3CSPvX6qcZYZeWmjbJHnfGM%2FwT1qZPh3aRjwnyz9stCb5ecBdnZo7%2Fz77fQhXz8g0nzfEBa75y9I4sUQ6SpNOK5P%2BjzDTNPsMTOYE8XTG%2FVYtYV6glgFnwpaI84fuu7PcpR5Mr1YXIsmz2K64DhQBpSc5uL3D15MA7yZ4ZFeavk2RVDVXb&X-Amz-Signature=fc70ecea885d027bd2dc86157f34aa4a2e6c88b16dc8d608a6c97393e42ad3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BV52P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYU3%2Bh9DbwmBz1kTGmvYlhbL8eGFhVoxCPvJKg7vF2nAIhAItYLBY1HfnDxq0dOooVSoGn0MljIMBpQr4f9NyQ%2BPQQKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1o%2FJh7MD%2Fw7YVfAq3AMJvHqESqJ8M1Sg5Adpk1CQgyD6wAn2O0H02qjntiEtjMw62X84rcuiHMdlPPqg0qhlupB4gKgy67%2BQRhzih8Iovkkc2K6c8TDty%2FRF50oLBQAK921RLxKgJZLoju9th7LKGUvGPKYaW%2FnRVlQzMA2ivId4spzSlv0N%2B0dPDAXGn2dvTLyKuou7JDHg7K7%2Frve8Hr2s0mQaDgqDGE4zHGn8TjF%2FDFR90McFxXqmbVAKeztxXgmkpBzzUOf%2FDctviTmb4jw5S7gZUOTRYrPeGyM9qitu2d569oC68EmtZKSzxEQjF%2FkH7ImP9uHxOa4PK2vjcLPwDY2K62UW72%2Fh%2BPsGkN5zkFvkL2ZFLbV0Nl2xiC1yiGKmknMDlDC5c1F%2B%2FXMXtUOpxwsUOceOPgAqAFENH2BUzA3JpJwb1LXJZ48lCABQPQs85flLCOnpt70cjKLhx6JImBrmSZfK%2BFvsKmj5S1cnbfumfsr3rcxPOFi2zwRXmX88%2BcawBWane5lIkGClftUOrkly6nbjxr%2BfiPo0Zt2WLgJ3IRDLCCEQrVz7VIA1NgEJSj50d21%2FWcmiaJ148ZUD%2BqIEHYlZYJ9b1RhToYwrXa6XeULC%2FCoiZnlUp83C4yiiQpSUjflWIDCahrG9BjqkAQ67fiuBatR4Onb7uGZC5AqSOq0gWLvUy7MY%2FDPfKZ3CSPvX6qcZYZeWmjbJHnfGM%2FwT1qZPh3aRjwnyz9stCb5ecBdnZo7%2Fz77fQhXz8g0nzfEBa75y9I4sUQ6SpNOK5P%2BjzDTNPsMTOYE8XTG%2FVYtYV6glgFnwpaI84fuu7PcpR5Mr1YXIsmz2K64DhQBpSc5uL3D15MA7yZ4ZFeavk2RVDVXb&X-Amz-Signature=011470c0955f7e27d1a74852957b52bc681b348d5fafc1368a6a2bce70db0152&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BV52P%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYU3%2Bh9DbwmBz1kTGmvYlhbL8eGFhVoxCPvJKg7vF2nAIhAItYLBY1HfnDxq0dOooVSoGn0MljIMBpQr4f9NyQ%2BPQQKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO1o%2FJh7MD%2Fw7YVfAq3AMJvHqESqJ8M1Sg5Adpk1CQgyD6wAn2O0H02qjntiEtjMw62X84rcuiHMdlPPqg0qhlupB4gKgy67%2BQRhzih8Iovkkc2K6c8TDty%2FRF50oLBQAK921RLxKgJZLoju9th7LKGUvGPKYaW%2FnRVlQzMA2ivId4spzSlv0N%2B0dPDAXGn2dvTLyKuou7JDHg7K7%2Frve8Hr2s0mQaDgqDGE4zHGn8TjF%2FDFR90McFxXqmbVAKeztxXgmkpBzzUOf%2FDctviTmb4jw5S7gZUOTRYrPeGyM9qitu2d569oC68EmtZKSzxEQjF%2FkH7ImP9uHxOa4PK2vjcLPwDY2K62UW72%2Fh%2BPsGkN5zkFvkL2ZFLbV0Nl2xiC1yiGKmknMDlDC5c1F%2B%2FXMXtUOpxwsUOceOPgAqAFENH2BUzA3JpJwb1LXJZ48lCABQPQs85flLCOnpt70cjKLhx6JImBrmSZfK%2BFvsKmj5S1cnbfumfsr3rcxPOFi2zwRXmX88%2BcawBWane5lIkGClftUOrkly6nbjxr%2BfiPo0Zt2WLgJ3IRDLCCEQrVz7VIA1NgEJSj50d21%2FWcmiaJ148ZUD%2BqIEHYlZYJ9b1RhToYwrXa6XeULC%2FCoiZnlUp83C4yiiQpSUjflWIDCahrG9BjqkAQ67fiuBatR4Onb7uGZC5AqSOq0gWLvUy7MY%2FDPfKZ3CSPvX6qcZYZeWmjbJHnfGM%2FwT1qZPh3aRjwnyz9stCb5ecBdnZo7%2Fz77fQhXz8g0nzfEBa75y9I4sUQ6SpNOK5P%2BjzDTNPsMTOYE8XTG%2FVYtYV6glgFnwpaI84fuu7PcpR5Mr1YXIsmz2K64DhQBpSc5uL3D15MA7yZ4ZFeavk2RVDVXb&X-Amz-Signature=44962677a4d1e1b701639ffaa6a16ee89ed68a40e0881c1724309f5a40dbca34&X-Amz-SignedHeaders=host&x-id=GetObject)
