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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNP55%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyt185YQWBM00iKXDw9AQnL8ZEvWZFdZQLfGSCa89yvgIhAKFUnjyPN1nhUPYejzkoGX%2BHUyw8NWGDrcHzCVkz%2BgftKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqC%2Fpi8RNeLIdJjWsq3AOwQN%2BZc8eLoSl9Kd7onHPxOHTImW4DF%2FvwuGlzw3YCiKJTOYcBd0a7YGrxEv6vxzlaSRTkZOBd0hdrMds2PM2F8DMskG9llG%2BoT7DIn6uhrbbTuNEakYGoSEC2rNXiI8WVIyBI45JmcRLPFFJXaE4EFrV%2BnH%2BHV2WxV%2B%2FES4qOHt5%2FdH4qKahBDNDGH5UwnY7dx1luBdcnOeia0KK0AzUNOCR4evT9m3BC6CBup1WJBMIQ9SCVea1EVGLZsLL6rrAQ1pYaTjVDgiKqAoktjVPpaTiFLOuGGQh9AL%2BFrvFBVVqywL5jf828QxG3dCc8CPpPfaWgG3mS%2FBg8r3akGU6CEAcbR62O1n86CviwS9QLCUaFr5Onh1eUQ%2FZiSv%2BoO9xm35AfHxsqBShKq4hhGvdcqdeqggYyO2ZZ6D3%2FrVIEZZ4KRLbfmr%2FG3RdN0618E0QQZuJ4Y1ND0mTaiR0Jc2zfyAu9MAJmr8387g2LxplR2GouTUfqUnfy7W2iyBXbdIPp%2BQEmDQZI7XAMGgGhjWx2QpYa2ZoydA1BBIeWtFZ0MoIsHXU9Ghn3m%2FKQoVyxunJm4iLJ18orc4oLih%2ByKpHPoFHAuB3sMCJhdSuICWP%2FP2nqjQO3I5KDcM7gkjDPhvvABjqkASNNqGbM3TLeNPFrq8hnCYhl9tzi2xzuVlQmAeg31ZtN3%2BuwuOZiwhwTbumTEcjNzvkGVnxFKeMWHw%2FsnI7ov2e4u2L3ANXifVXrxjqJGs%2FGaEDWJWaslapqUZisomedkPX1Mm7%2BSynPHmwGAV32R6g%2FGXD5EX4Bj7FrkJQ1sEnMULynLXdbK44Vwqwkc1bJDMZSnNbUNIi97AidmL6Nnvg19d1n&X-Amz-Signature=0af5f9d2c588b7e78bf9167bf610ec743ac0aeb3c45a11ee1b7fb0393d67b25a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNP55%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyt185YQWBM00iKXDw9AQnL8ZEvWZFdZQLfGSCa89yvgIhAKFUnjyPN1nhUPYejzkoGX%2BHUyw8NWGDrcHzCVkz%2BgftKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqC%2Fpi8RNeLIdJjWsq3AOwQN%2BZc8eLoSl9Kd7onHPxOHTImW4DF%2FvwuGlzw3YCiKJTOYcBd0a7YGrxEv6vxzlaSRTkZOBd0hdrMds2PM2F8DMskG9llG%2BoT7DIn6uhrbbTuNEakYGoSEC2rNXiI8WVIyBI45JmcRLPFFJXaE4EFrV%2BnH%2BHV2WxV%2B%2FES4qOHt5%2FdH4qKahBDNDGH5UwnY7dx1luBdcnOeia0KK0AzUNOCR4evT9m3BC6CBup1WJBMIQ9SCVea1EVGLZsLL6rrAQ1pYaTjVDgiKqAoktjVPpaTiFLOuGGQh9AL%2BFrvFBVVqywL5jf828QxG3dCc8CPpPfaWgG3mS%2FBg8r3akGU6CEAcbR62O1n86CviwS9QLCUaFr5Onh1eUQ%2FZiSv%2BoO9xm35AfHxsqBShKq4hhGvdcqdeqggYyO2ZZ6D3%2FrVIEZZ4KRLbfmr%2FG3RdN0618E0QQZuJ4Y1ND0mTaiR0Jc2zfyAu9MAJmr8387g2LxplR2GouTUfqUnfy7W2iyBXbdIPp%2BQEmDQZI7XAMGgGhjWx2QpYa2ZoydA1BBIeWtFZ0MoIsHXU9Ghn3m%2FKQoVyxunJm4iLJ18orc4oLih%2ByKpHPoFHAuB3sMCJhdSuICWP%2FP2nqjQO3I5KDcM7gkjDPhvvABjqkASNNqGbM3TLeNPFrq8hnCYhl9tzi2xzuVlQmAeg31ZtN3%2BuwuOZiwhwTbumTEcjNzvkGVnxFKeMWHw%2FsnI7ov2e4u2L3ANXifVXrxjqJGs%2FGaEDWJWaslapqUZisomedkPX1Mm7%2BSynPHmwGAV32R6g%2FGXD5EX4Bj7FrkJQ1sEnMULynLXdbK44Vwqwkc1bJDMZSnNbUNIi97AidmL6Nnvg19d1n&X-Amz-Signature=9da215688d48e00cc6a0386fbe6d6225ac65973ae29425c13ca6e275664ede60&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNP55%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyt185YQWBM00iKXDw9AQnL8ZEvWZFdZQLfGSCa89yvgIhAKFUnjyPN1nhUPYejzkoGX%2BHUyw8NWGDrcHzCVkz%2BgftKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqC%2Fpi8RNeLIdJjWsq3AOwQN%2BZc8eLoSl9Kd7onHPxOHTImW4DF%2FvwuGlzw3YCiKJTOYcBd0a7YGrxEv6vxzlaSRTkZOBd0hdrMds2PM2F8DMskG9llG%2BoT7DIn6uhrbbTuNEakYGoSEC2rNXiI8WVIyBI45JmcRLPFFJXaE4EFrV%2BnH%2BHV2WxV%2B%2FES4qOHt5%2FdH4qKahBDNDGH5UwnY7dx1luBdcnOeia0KK0AzUNOCR4evT9m3BC6CBup1WJBMIQ9SCVea1EVGLZsLL6rrAQ1pYaTjVDgiKqAoktjVPpaTiFLOuGGQh9AL%2BFrvFBVVqywL5jf828QxG3dCc8CPpPfaWgG3mS%2FBg8r3akGU6CEAcbR62O1n86CviwS9QLCUaFr5Onh1eUQ%2FZiSv%2BoO9xm35AfHxsqBShKq4hhGvdcqdeqggYyO2ZZ6D3%2FrVIEZZ4KRLbfmr%2FG3RdN0618E0QQZuJ4Y1ND0mTaiR0Jc2zfyAu9MAJmr8387g2LxplR2GouTUfqUnfy7W2iyBXbdIPp%2BQEmDQZI7XAMGgGhjWx2QpYa2ZoydA1BBIeWtFZ0MoIsHXU9Ghn3m%2FKQoVyxunJm4iLJ18orc4oLih%2ByKpHPoFHAuB3sMCJhdSuICWP%2FP2nqjQO3I5KDcM7gkjDPhvvABjqkASNNqGbM3TLeNPFrq8hnCYhl9tzi2xzuVlQmAeg31ZtN3%2BuwuOZiwhwTbumTEcjNzvkGVnxFKeMWHw%2FsnI7ov2e4u2L3ANXifVXrxjqJGs%2FGaEDWJWaslapqUZisomedkPX1Mm7%2BSynPHmwGAV32R6g%2FGXD5EX4Bj7FrkJQ1sEnMULynLXdbK44Vwqwkc1bJDMZSnNbUNIi97AidmL6Nnvg19d1n&X-Amz-Signature=982fc9ef2b5a74ffb92559adfae58886cbc1b39ed0591f545264f8a23ad27c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNP55%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyt185YQWBM00iKXDw9AQnL8ZEvWZFdZQLfGSCa89yvgIhAKFUnjyPN1nhUPYejzkoGX%2BHUyw8NWGDrcHzCVkz%2BgftKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqC%2Fpi8RNeLIdJjWsq3AOwQN%2BZc8eLoSl9Kd7onHPxOHTImW4DF%2FvwuGlzw3YCiKJTOYcBd0a7YGrxEv6vxzlaSRTkZOBd0hdrMds2PM2F8DMskG9llG%2BoT7DIn6uhrbbTuNEakYGoSEC2rNXiI8WVIyBI45JmcRLPFFJXaE4EFrV%2BnH%2BHV2WxV%2B%2FES4qOHt5%2FdH4qKahBDNDGH5UwnY7dx1luBdcnOeia0KK0AzUNOCR4evT9m3BC6CBup1WJBMIQ9SCVea1EVGLZsLL6rrAQ1pYaTjVDgiKqAoktjVPpaTiFLOuGGQh9AL%2BFrvFBVVqywL5jf828QxG3dCc8CPpPfaWgG3mS%2FBg8r3akGU6CEAcbR62O1n86CviwS9QLCUaFr5Onh1eUQ%2FZiSv%2BoO9xm35AfHxsqBShKq4hhGvdcqdeqggYyO2ZZ6D3%2FrVIEZZ4KRLbfmr%2FG3RdN0618E0QQZuJ4Y1ND0mTaiR0Jc2zfyAu9MAJmr8387g2LxplR2GouTUfqUnfy7W2iyBXbdIPp%2BQEmDQZI7XAMGgGhjWx2QpYa2ZoydA1BBIeWtFZ0MoIsHXU9Ghn3m%2FKQoVyxunJm4iLJ18orc4oLih%2ByKpHPoFHAuB3sMCJhdSuICWP%2FP2nqjQO3I5KDcM7gkjDPhvvABjqkASNNqGbM3TLeNPFrq8hnCYhl9tzi2xzuVlQmAeg31ZtN3%2BuwuOZiwhwTbumTEcjNzvkGVnxFKeMWHw%2FsnI7ov2e4u2L3ANXifVXrxjqJGs%2FGaEDWJWaslapqUZisomedkPX1Mm7%2BSynPHmwGAV32R6g%2FGXD5EX4Bj7FrkJQ1sEnMULynLXdbK44Vwqwkc1bJDMZSnNbUNIi97AidmL6Nnvg19d1n&X-Amz-Signature=d22d930559f6d7a0115aa4c274df77b54cd14da84448ebd683a10e94261dd29c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNP55%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyt185YQWBM00iKXDw9AQnL8ZEvWZFdZQLfGSCa89yvgIhAKFUnjyPN1nhUPYejzkoGX%2BHUyw8NWGDrcHzCVkz%2BgftKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqC%2Fpi8RNeLIdJjWsq3AOwQN%2BZc8eLoSl9Kd7onHPxOHTImW4DF%2FvwuGlzw3YCiKJTOYcBd0a7YGrxEv6vxzlaSRTkZOBd0hdrMds2PM2F8DMskG9llG%2BoT7DIn6uhrbbTuNEakYGoSEC2rNXiI8WVIyBI45JmcRLPFFJXaE4EFrV%2BnH%2BHV2WxV%2B%2FES4qOHt5%2FdH4qKahBDNDGH5UwnY7dx1luBdcnOeia0KK0AzUNOCR4evT9m3BC6CBup1WJBMIQ9SCVea1EVGLZsLL6rrAQ1pYaTjVDgiKqAoktjVPpaTiFLOuGGQh9AL%2BFrvFBVVqywL5jf828QxG3dCc8CPpPfaWgG3mS%2FBg8r3akGU6CEAcbR62O1n86CviwS9QLCUaFr5Onh1eUQ%2FZiSv%2BoO9xm35AfHxsqBShKq4hhGvdcqdeqggYyO2ZZ6D3%2FrVIEZZ4KRLbfmr%2FG3RdN0618E0QQZuJ4Y1ND0mTaiR0Jc2zfyAu9MAJmr8387g2LxplR2GouTUfqUnfy7W2iyBXbdIPp%2BQEmDQZI7XAMGgGhjWx2QpYa2ZoydA1BBIeWtFZ0MoIsHXU9Ghn3m%2FKQoVyxunJm4iLJ18orc4oLih%2ByKpHPoFHAuB3sMCJhdSuICWP%2FP2nqjQO3I5KDcM7gkjDPhvvABjqkASNNqGbM3TLeNPFrq8hnCYhl9tzi2xzuVlQmAeg31ZtN3%2BuwuOZiwhwTbumTEcjNzvkGVnxFKeMWHw%2FsnI7ov2e4u2L3ANXifVXrxjqJGs%2FGaEDWJWaslapqUZisomedkPX1Mm7%2BSynPHmwGAV32R6g%2FGXD5EX4Bj7FrkJQ1sEnMULynLXdbK44Vwqwkc1bJDMZSnNbUNIi97AidmL6Nnvg19d1n&X-Amz-Signature=d2278d99e0d6c96a9fd01da57a9752dbb6aa5ace7fb0890aa97652d7aaf68ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILTNP55%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T032940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyt185YQWBM00iKXDw9AQnL8ZEvWZFdZQLfGSCa89yvgIhAKFUnjyPN1nhUPYejzkoGX%2BHUyw8NWGDrcHzCVkz%2BgftKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqC%2Fpi8RNeLIdJjWsq3AOwQN%2BZc8eLoSl9Kd7onHPxOHTImW4DF%2FvwuGlzw3YCiKJTOYcBd0a7YGrxEv6vxzlaSRTkZOBd0hdrMds2PM2F8DMskG9llG%2BoT7DIn6uhrbbTuNEakYGoSEC2rNXiI8WVIyBI45JmcRLPFFJXaE4EFrV%2BnH%2BHV2WxV%2B%2FES4qOHt5%2FdH4qKahBDNDGH5UwnY7dx1luBdcnOeia0KK0AzUNOCR4evT9m3BC6CBup1WJBMIQ9SCVea1EVGLZsLL6rrAQ1pYaTjVDgiKqAoktjVPpaTiFLOuGGQh9AL%2BFrvFBVVqywL5jf828QxG3dCc8CPpPfaWgG3mS%2FBg8r3akGU6CEAcbR62O1n86CviwS9QLCUaFr5Onh1eUQ%2FZiSv%2BoO9xm35AfHxsqBShKq4hhGvdcqdeqggYyO2ZZ6D3%2FrVIEZZ4KRLbfmr%2FG3RdN0618E0QQZuJ4Y1ND0mTaiR0Jc2zfyAu9MAJmr8387g2LxplR2GouTUfqUnfy7W2iyBXbdIPp%2BQEmDQZI7XAMGgGhjWx2QpYa2ZoydA1BBIeWtFZ0MoIsHXU9Ghn3m%2FKQoVyxunJm4iLJ18orc4oLih%2ByKpHPoFHAuB3sMCJhdSuICWP%2FP2nqjQO3I5KDcM7gkjDPhvvABjqkASNNqGbM3TLeNPFrq8hnCYhl9tzi2xzuVlQmAeg31ZtN3%2BuwuOZiwhwTbumTEcjNzvkGVnxFKeMWHw%2FsnI7ov2e4u2L3ANXifVXrxjqJGs%2FGaEDWJWaslapqUZisomedkPX1Mm7%2BSynPHmwGAV32R6g%2FGXD5EX4Bj7FrkJQ1sEnMULynLXdbK44Vwqwkc1bJDMZSnNbUNIi97AidmL6Nnvg19d1n&X-Amz-Signature=438e58140d473faa304857a0c2ad7155d3cf63324a39c7505ef770039228b447&X-Amz-SignedHeaders=host&x-id=GetObject)
