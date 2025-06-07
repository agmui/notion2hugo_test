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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVIKPDI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3ku8%2BrWgsHrrJAe%2BtB2FgWsGJ8koBAtQ1OOelkcl82AiApuStyZESSNr0ZD4jm9nr0shVrXpWR60aKyhxoirkp2Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2%2B%2BS91PLmltB0gSMKtwDE5pEevxQd2nDWhG6SidQi2oDjXPfb1temvhUonzY%2FruzmGNjmrvwLh401tFIRSvLp69PwBi7iMNpsxSndiRrZ5KD46R7gR2T6dtjWA2I7FQ%2FqnRjbMKPrPKP1U%2Fh0uvGvxQeDP%2BNqsLQSAhJPFdV%2B4gZyoHbckFg%2B9mPcxVVnHe02ztGYbJ91jyHQ3RWyQkqeEBZnIbkQHH5AzX%2FB0ZJzeS2Cr1e3n9cPXdNp%2BZX3MQdTYdgmrnJ95H1PttzQJw5FS6u1ETbo8RQZ1pC5Aw3jouF4Vs8lW2NV%2BaJsbin%2B2Y7JkHDLrWC77%2F1ot5oUVboJloclg86UCqxxNpacWCt2K0LAg7q8PIW3bvnqbDuf6p6R8g2P5XXGgk8vqdabGaPoN9j0IuNQKDy7sD9svxyh3Qm9g0R4ARveXlZo%2FXQHLTStoKVPbpkWT6q6jP0aYAtqgqS2GRla%2FdSNu89tXhpvD36bmcq8%2F243QQcYtlyc8DRUTknVSNzuy%2Fck%2Fq8imD41blrY1TipCR0nrgHFzb6VXb%2BE3hTlxCWjdNC%2BLuYPkiChiHahozsuncKCe7O%2FbBem9sQl%2FpMUyzD7yFyo3Mv9ZKK%2BZudLan9j6rXaFwthPeXDOgzvhY6%2Fs5mnpAwxcCOwgY6pgGTesAvDDvh0HdNwSC1SRNaUq2W6QMOXmS7ogrW%2FdXuyEFH6w0Z5xZAOuF0IxjARTRHNuK2vFpptVKqnpPXM%2BEkbqvW5bHK%2B1xvByTdUHdBZMQ59HYevhLRmoEaxafsO6jQJSsQK04NjZ9ePsjWMtDPoxIYjAAJPZay37qcvuYf95sCys3g8mQZvxh5aWR%2FLseH4HNHPIHux5Ak2e2TeGqsiSu8M%2Fyx&X-Amz-Signature=ed1328b2a865572498a2ca07da7227514940441493dbdb92dddd47a804f54a22&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVIKPDI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3ku8%2BrWgsHrrJAe%2BtB2FgWsGJ8koBAtQ1OOelkcl82AiApuStyZESSNr0ZD4jm9nr0shVrXpWR60aKyhxoirkp2Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2%2B%2BS91PLmltB0gSMKtwDE5pEevxQd2nDWhG6SidQi2oDjXPfb1temvhUonzY%2FruzmGNjmrvwLh401tFIRSvLp69PwBi7iMNpsxSndiRrZ5KD46R7gR2T6dtjWA2I7FQ%2FqnRjbMKPrPKP1U%2Fh0uvGvxQeDP%2BNqsLQSAhJPFdV%2B4gZyoHbckFg%2B9mPcxVVnHe02ztGYbJ91jyHQ3RWyQkqeEBZnIbkQHH5AzX%2FB0ZJzeS2Cr1e3n9cPXdNp%2BZX3MQdTYdgmrnJ95H1PttzQJw5FS6u1ETbo8RQZ1pC5Aw3jouF4Vs8lW2NV%2BaJsbin%2B2Y7JkHDLrWC77%2F1ot5oUVboJloclg86UCqxxNpacWCt2K0LAg7q8PIW3bvnqbDuf6p6R8g2P5XXGgk8vqdabGaPoN9j0IuNQKDy7sD9svxyh3Qm9g0R4ARveXlZo%2FXQHLTStoKVPbpkWT6q6jP0aYAtqgqS2GRla%2FdSNu89tXhpvD36bmcq8%2F243QQcYtlyc8DRUTknVSNzuy%2Fck%2Fq8imD41blrY1TipCR0nrgHFzb6VXb%2BE3hTlxCWjdNC%2BLuYPkiChiHahozsuncKCe7O%2FbBem9sQl%2FpMUyzD7yFyo3Mv9ZKK%2BZudLan9j6rXaFwthPeXDOgzvhY6%2Fs5mnpAwxcCOwgY6pgGTesAvDDvh0HdNwSC1SRNaUq2W6QMOXmS7ogrW%2FdXuyEFH6w0Z5xZAOuF0IxjARTRHNuK2vFpptVKqnpPXM%2BEkbqvW5bHK%2B1xvByTdUHdBZMQ59HYevhLRmoEaxafsO6jQJSsQK04NjZ9ePsjWMtDPoxIYjAAJPZay37qcvuYf95sCys3g8mQZvxh5aWR%2FLseH4HNHPIHux5Ak2e2TeGqsiSu8M%2Fyx&X-Amz-Signature=bbf63ce413f88af8cad1f62262e54f1f8a354279c68cadbdb6854ac6d0f82627&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVIKPDI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3ku8%2BrWgsHrrJAe%2BtB2FgWsGJ8koBAtQ1OOelkcl82AiApuStyZESSNr0ZD4jm9nr0shVrXpWR60aKyhxoirkp2Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2%2B%2BS91PLmltB0gSMKtwDE5pEevxQd2nDWhG6SidQi2oDjXPfb1temvhUonzY%2FruzmGNjmrvwLh401tFIRSvLp69PwBi7iMNpsxSndiRrZ5KD46R7gR2T6dtjWA2I7FQ%2FqnRjbMKPrPKP1U%2Fh0uvGvxQeDP%2BNqsLQSAhJPFdV%2B4gZyoHbckFg%2B9mPcxVVnHe02ztGYbJ91jyHQ3RWyQkqeEBZnIbkQHH5AzX%2FB0ZJzeS2Cr1e3n9cPXdNp%2BZX3MQdTYdgmrnJ95H1PttzQJw5FS6u1ETbo8RQZ1pC5Aw3jouF4Vs8lW2NV%2BaJsbin%2B2Y7JkHDLrWC77%2F1ot5oUVboJloclg86UCqxxNpacWCt2K0LAg7q8PIW3bvnqbDuf6p6R8g2P5XXGgk8vqdabGaPoN9j0IuNQKDy7sD9svxyh3Qm9g0R4ARveXlZo%2FXQHLTStoKVPbpkWT6q6jP0aYAtqgqS2GRla%2FdSNu89tXhpvD36bmcq8%2F243QQcYtlyc8DRUTknVSNzuy%2Fck%2Fq8imD41blrY1TipCR0nrgHFzb6VXb%2BE3hTlxCWjdNC%2BLuYPkiChiHahozsuncKCe7O%2FbBem9sQl%2FpMUyzD7yFyo3Mv9ZKK%2BZudLan9j6rXaFwthPeXDOgzvhY6%2Fs5mnpAwxcCOwgY6pgGTesAvDDvh0HdNwSC1SRNaUq2W6QMOXmS7ogrW%2FdXuyEFH6w0Z5xZAOuF0IxjARTRHNuK2vFpptVKqnpPXM%2BEkbqvW5bHK%2B1xvByTdUHdBZMQ59HYevhLRmoEaxafsO6jQJSsQK04NjZ9ePsjWMtDPoxIYjAAJPZay37qcvuYf95sCys3g8mQZvxh5aWR%2FLseH4HNHPIHux5Ak2e2TeGqsiSu8M%2Fyx&X-Amz-Signature=ce241791331aaa13993fb558baf8c3118c8080ebbcca477a8cbb2610d306652a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVIKPDI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3ku8%2BrWgsHrrJAe%2BtB2FgWsGJ8koBAtQ1OOelkcl82AiApuStyZESSNr0ZD4jm9nr0shVrXpWR60aKyhxoirkp2Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2%2B%2BS91PLmltB0gSMKtwDE5pEevxQd2nDWhG6SidQi2oDjXPfb1temvhUonzY%2FruzmGNjmrvwLh401tFIRSvLp69PwBi7iMNpsxSndiRrZ5KD46R7gR2T6dtjWA2I7FQ%2FqnRjbMKPrPKP1U%2Fh0uvGvxQeDP%2BNqsLQSAhJPFdV%2B4gZyoHbckFg%2B9mPcxVVnHe02ztGYbJ91jyHQ3RWyQkqeEBZnIbkQHH5AzX%2FB0ZJzeS2Cr1e3n9cPXdNp%2BZX3MQdTYdgmrnJ95H1PttzQJw5FS6u1ETbo8RQZ1pC5Aw3jouF4Vs8lW2NV%2BaJsbin%2B2Y7JkHDLrWC77%2F1ot5oUVboJloclg86UCqxxNpacWCt2K0LAg7q8PIW3bvnqbDuf6p6R8g2P5XXGgk8vqdabGaPoN9j0IuNQKDy7sD9svxyh3Qm9g0R4ARveXlZo%2FXQHLTStoKVPbpkWT6q6jP0aYAtqgqS2GRla%2FdSNu89tXhpvD36bmcq8%2F243QQcYtlyc8DRUTknVSNzuy%2Fck%2Fq8imD41blrY1TipCR0nrgHFzb6VXb%2BE3hTlxCWjdNC%2BLuYPkiChiHahozsuncKCe7O%2FbBem9sQl%2FpMUyzD7yFyo3Mv9ZKK%2BZudLan9j6rXaFwthPeXDOgzvhY6%2Fs5mnpAwxcCOwgY6pgGTesAvDDvh0HdNwSC1SRNaUq2W6QMOXmS7ogrW%2FdXuyEFH6w0Z5xZAOuF0IxjARTRHNuK2vFpptVKqnpPXM%2BEkbqvW5bHK%2B1xvByTdUHdBZMQ59HYevhLRmoEaxafsO6jQJSsQK04NjZ9ePsjWMtDPoxIYjAAJPZay37qcvuYf95sCys3g8mQZvxh5aWR%2FLseH4HNHPIHux5Ak2e2TeGqsiSu8M%2Fyx&X-Amz-Signature=9c03f47723e45dde5ca2f014694fe424e553c6bd624cf396b8809cf3bd570274&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVIKPDI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3ku8%2BrWgsHrrJAe%2BtB2FgWsGJ8koBAtQ1OOelkcl82AiApuStyZESSNr0ZD4jm9nr0shVrXpWR60aKyhxoirkp2Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2%2B%2BS91PLmltB0gSMKtwDE5pEevxQd2nDWhG6SidQi2oDjXPfb1temvhUonzY%2FruzmGNjmrvwLh401tFIRSvLp69PwBi7iMNpsxSndiRrZ5KD46R7gR2T6dtjWA2I7FQ%2FqnRjbMKPrPKP1U%2Fh0uvGvxQeDP%2BNqsLQSAhJPFdV%2B4gZyoHbckFg%2B9mPcxVVnHe02ztGYbJ91jyHQ3RWyQkqeEBZnIbkQHH5AzX%2FB0ZJzeS2Cr1e3n9cPXdNp%2BZX3MQdTYdgmrnJ95H1PttzQJw5FS6u1ETbo8RQZ1pC5Aw3jouF4Vs8lW2NV%2BaJsbin%2B2Y7JkHDLrWC77%2F1ot5oUVboJloclg86UCqxxNpacWCt2K0LAg7q8PIW3bvnqbDuf6p6R8g2P5XXGgk8vqdabGaPoN9j0IuNQKDy7sD9svxyh3Qm9g0R4ARveXlZo%2FXQHLTStoKVPbpkWT6q6jP0aYAtqgqS2GRla%2FdSNu89tXhpvD36bmcq8%2F243QQcYtlyc8DRUTknVSNzuy%2Fck%2Fq8imD41blrY1TipCR0nrgHFzb6VXb%2BE3hTlxCWjdNC%2BLuYPkiChiHahozsuncKCe7O%2FbBem9sQl%2FpMUyzD7yFyo3Mv9ZKK%2BZudLan9j6rXaFwthPeXDOgzvhY6%2Fs5mnpAwxcCOwgY6pgGTesAvDDvh0HdNwSC1SRNaUq2W6QMOXmS7ogrW%2FdXuyEFH6w0Z5xZAOuF0IxjARTRHNuK2vFpptVKqnpPXM%2BEkbqvW5bHK%2B1xvByTdUHdBZMQ59HYevhLRmoEaxafsO6jQJSsQK04NjZ9ePsjWMtDPoxIYjAAJPZay37qcvuYf95sCys3g8mQZvxh5aWR%2FLseH4HNHPIHux5Ak2e2TeGqsiSu8M%2Fyx&X-Amz-Signature=06b571e3cce1a9a2dfee9479abbcdcafe4be6c1cffebd1262c829ed46f456c38&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVIKPDI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3ku8%2BrWgsHrrJAe%2BtB2FgWsGJ8koBAtQ1OOelkcl82AiApuStyZESSNr0ZD4jm9nr0shVrXpWR60aKyhxoirkp2Cr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM2%2B%2BS91PLmltB0gSMKtwDE5pEevxQd2nDWhG6SidQi2oDjXPfb1temvhUonzY%2FruzmGNjmrvwLh401tFIRSvLp69PwBi7iMNpsxSndiRrZ5KD46R7gR2T6dtjWA2I7FQ%2FqnRjbMKPrPKP1U%2Fh0uvGvxQeDP%2BNqsLQSAhJPFdV%2B4gZyoHbckFg%2B9mPcxVVnHe02ztGYbJ91jyHQ3RWyQkqeEBZnIbkQHH5AzX%2FB0ZJzeS2Cr1e3n9cPXdNp%2BZX3MQdTYdgmrnJ95H1PttzQJw5FS6u1ETbo8RQZ1pC5Aw3jouF4Vs8lW2NV%2BaJsbin%2B2Y7JkHDLrWC77%2F1ot5oUVboJloclg86UCqxxNpacWCt2K0LAg7q8PIW3bvnqbDuf6p6R8g2P5XXGgk8vqdabGaPoN9j0IuNQKDy7sD9svxyh3Qm9g0R4ARveXlZo%2FXQHLTStoKVPbpkWT6q6jP0aYAtqgqS2GRla%2FdSNu89tXhpvD36bmcq8%2F243QQcYtlyc8DRUTknVSNzuy%2Fck%2Fq8imD41blrY1TipCR0nrgHFzb6VXb%2BE3hTlxCWjdNC%2BLuYPkiChiHahozsuncKCe7O%2FbBem9sQl%2FpMUyzD7yFyo3Mv9ZKK%2BZudLan9j6rXaFwthPeXDOgzvhY6%2Fs5mnpAwxcCOwgY6pgGTesAvDDvh0HdNwSC1SRNaUq2W6QMOXmS7ogrW%2FdXuyEFH6w0Z5xZAOuF0IxjARTRHNuK2vFpptVKqnpPXM%2BEkbqvW5bHK%2B1xvByTdUHdBZMQ59HYevhLRmoEaxafsO6jQJSsQK04NjZ9ePsjWMtDPoxIYjAAJPZay37qcvuYf95sCys3g8mQZvxh5aWR%2FLseH4HNHPIHux5Ak2e2TeGqsiSu8M%2Fyx&X-Amz-Signature=31a1e434dbfdf909dd5f52d66425659056ab020615d65ae25d1f9b54b4a0d466&X-Amz-SignedHeaders=host&x-id=GetObject)
