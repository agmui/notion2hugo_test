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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLGGHYP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEbafNSavAiRKPNAelK4cT4fMCZOPfKcRI7SWosX9TAIhAIQ2asnIJBPzReTmX8nqFGBMvQaLxQ31uosCux8bxsKOKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDHi%2FPiwiYRmjpt3gq3APntfhTU3iOyHzTx%2FHkmoPzkWl3N%2B6l19YOheQWFQn0P%2FK2TcSkD9tif6ir8jdcPECFPJPB0NI52y8%2FtL3y4svr2QA6iEljDkE1ZK07%2BgAUWXGmQP0CTXSlcQ%2Bob4SOJI3FbN5gLr5RAHs5Gew7x0M4VgrTP1xdLqzosqCEFQZRO%2F%2BizJ8dk%2B4w7%2BVJAfTWnNJZ6xKIbH%2B7ddXt0Lw5kVvdmOJblz09Jsj53JQUQn8EtHPh5oiFhaDQMMAz28NXaMzNyC1LzhSK2WPMe65Rk9kW0Bg4QUQtQeT3w5%2BU%2BeSfV1MmpG%2FeYyTRqx2FrEnDnEsG3UEqMaqbgQ2ABx3cvocPFXkKUpDynFN9F0B8T5pKM0kS06dVbJ%2FAnBxDdxR5K%2Bk0PSSZy78iB6rc8PkCC6Srk6X2RDIe%2Bqthz9XUMq9KpvKTfjYXDFz2X7p1sw3FLVbIAjTtH%2FmjOkValtkSC1Y6nAsVUmdIoO47FSWHl7C2U7xWHdZaCLp0mRYFR%2B6rh3ASH%2BP29xKMwsOuhs9MfdQWUjzny5AwcFXr4vf3EKm57Swxzb4PCQJF3dRmQssXTdRnKPSzayZVjZUNosb85bCm9B6NfPy%2FT6HX%2FC59Sg1D4afOe7cQWz4Miu%2FcmDCVq%2FLDBjqkAUYKxJYMQT9R6hQqGepOTK9Lsps6LTzamX9Wto6CjMzFdnxih9sVsNw%2BKvza2ZZWzCzEZzDsQDJ94VmNETI6i5R%2FNkmT0OShXmKnBpCb9r1Wvictlu76EMRvpP8MT9bAutQYoDbIWY4ZVQJ7y%2BX4PctNfNeczK5d0myYCptx9ZGAEoV1mn9A68AFc0LP4FY9mBz11yeVHoDL9TWpnnHJDeKCGJQO&X-Amz-Signature=50732d7c2e99cef8045c680e3754420f92def9468d9650472a71889d4ff51f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLGGHYP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEbafNSavAiRKPNAelK4cT4fMCZOPfKcRI7SWosX9TAIhAIQ2asnIJBPzReTmX8nqFGBMvQaLxQ31uosCux8bxsKOKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDHi%2FPiwiYRmjpt3gq3APntfhTU3iOyHzTx%2FHkmoPzkWl3N%2B6l19YOheQWFQn0P%2FK2TcSkD9tif6ir8jdcPECFPJPB0NI52y8%2FtL3y4svr2QA6iEljDkE1ZK07%2BgAUWXGmQP0CTXSlcQ%2Bob4SOJI3FbN5gLr5RAHs5Gew7x0M4VgrTP1xdLqzosqCEFQZRO%2F%2BizJ8dk%2B4w7%2BVJAfTWnNJZ6xKIbH%2B7ddXt0Lw5kVvdmOJblz09Jsj53JQUQn8EtHPh5oiFhaDQMMAz28NXaMzNyC1LzhSK2WPMe65Rk9kW0Bg4QUQtQeT3w5%2BU%2BeSfV1MmpG%2FeYyTRqx2FrEnDnEsG3UEqMaqbgQ2ABx3cvocPFXkKUpDynFN9F0B8T5pKM0kS06dVbJ%2FAnBxDdxR5K%2Bk0PSSZy78iB6rc8PkCC6Srk6X2RDIe%2Bqthz9XUMq9KpvKTfjYXDFz2X7p1sw3FLVbIAjTtH%2FmjOkValtkSC1Y6nAsVUmdIoO47FSWHl7C2U7xWHdZaCLp0mRYFR%2B6rh3ASH%2BP29xKMwsOuhs9MfdQWUjzny5AwcFXr4vf3EKm57Swxzb4PCQJF3dRmQssXTdRnKPSzayZVjZUNosb85bCm9B6NfPy%2FT6HX%2FC59Sg1D4afOe7cQWz4Miu%2FcmDCVq%2FLDBjqkAUYKxJYMQT9R6hQqGepOTK9Lsps6LTzamX9Wto6CjMzFdnxih9sVsNw%2BKvza2ZZWzCzEZzDsQDJ94VmNETI6i5R%2FNkmT0OShXmKnBpCb9r1Wvictlu76EMRvpP8MT9bAutQYoDbIWY4ZVQJ7y%2BX4PctNfNeczK5d0myYCptx9ZGAEoV1mn9A68AFc0LP4FY9mBz11yeVHoDL9TWpnnHJDeKCGJQO&X-Amz-Signature=3bad60f7d2776b3d35ac1a6d9a58f8d33a5a9c6ec506d05e0c5861786d6fcf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLGGHYP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEbafNSavAiRKPNAelK4cT4fMCZOPfKcRI7SWosX9TAIhAIQ2asnIJBPzReTmX8nqFGBMvQaLxQ31uosCux8bxsKOKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDHi%2FPiwiYRmjpt3gq3APntfhTU3iOyHzTx%2FHkmoPzkWl3N%2B6l19YOheQWFQn0P%2FK2TcSkD9tif6ir8jdcPECFPJPB0NI52y8%2FtL3y4svr2QA6iEljDkE1ZK07%2BgAUWXGmQP0CTXSlcQ%2Bob4SOJI3FbN5gLr5RAHs5Gew7x0M4VgrTP1xdLqzosqCEFQZRO%2F%2BizJ8dk%2B4w7%2BVJAfTWnNJZ6xKIbH%2B7ddXt0Lw5kVvdmOJblz09Jsj53JQUQn8EtHPh5oiFhaDQMMAz28NXaMzNyC1LzhSK2WPMe65Rk9kW0Bg4QUQtQeT3w5%2BU%2BeSfV1MmpG%2FeYyTRqx2FrEnDnEsG3UEqMaqbgQ2ABx3cvocPFXkKUpDynFN9F0B8T5pKM0kS06dVbJ%2FAnBxDdxR5K%2Bk0PSSZy78iB6rc8PkCC6Srk6X2RDIe%2Bqthz9XUMq9KpvKTfjYXDFz2X7p1sw3FLVbIAjTtH%2FmjOkValtkSC1Y6nAsVUmdIoO47FSWHl7C2U7xWHdZaCLp0mRYFR%2B6rh3ASH%2BP29xKMwsOuhs9MfdQWUjzny5AwcFXr4vf3EKm57Swxzb4PCQJF3dRmQssXTdRnKPSzayZVjZUNosb85bCm9B6NfPy%2FT6HX%2FC59Sg1D4afOe7cQWz4Miu%2FcmDCVq%2FLDBjqkAUYKxJYMQT9R6hQqGepOTK9Lsps6LTzamX9Wto6CjMzFdnxih9sVsNw%2BKvza2ZZWzCzEZzDsQDJ94VmNETI6i5R%2FNkmT0OShXmKnBpCb9r1Wvictlu76EMRvpP8MT9bAutQYoDbIWY4ZVQJ7y%2BX4PctNfNeczK5d0myYCptx9ZGAEoV1mn9A68AFc0LP4FY9mBz11yeVHoDL9TWpnnHJDeKCGJQO&X-Amz-Signature=7e04ddc454c5fb3cadb6202b3a4c27d3c93baa642478f8bacf091dfe89fda155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLGGHYP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEbafNSavAiRKPNAelK4cT4fMCZOPfKcRI7SWosX9TAIhAIQ2asnIJBPzReTmX8nqFGBMvQaLxQ31uosCux8bxsKOKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDHi%2FPiwiYRmjpt3gq3APntfhTU3iOyHzTx%2FHkmoPzkWl3N%2B6l19YOheQWFQn0P%2FK2TcSkD9tif6ir8jdcPECFPJPB0NI52y8%2FtL3y4svr2QA6iEljDkE1ZK07%2BgAUWXGmQP0CTXSlcQ%2Bob4SOJI3FbN5gLr5RAHs5Gew7x0M4VgrTP1xdLqzosqCEFQZRO%2F%2BizJ8dk%2B4w7%2BVJAfTWnNJZ6xKIbH%2B7ddXt0Lw5kVvdmOJblz09Jsj53JQUQn8EtHPh5oiFhaDQMMAz28NXaMzNyC1LzhSK2WPMe65Rk9kW0Bg4QUQtQeT3w5%2BU%2BeSfV1MmpG%2FeYyTRqx2FrEnDnEsG3UEqMaqbgQ2ABx3cvocPFXkKUpDynFN9F0B8T5pKM0kS06dVbJ%2FAnBxDdxR5K%2Bk0PSSZy78iB6rc8PkCC6Srk6X2RDIe%2Bqthz9XUMq9KpvKTfjYXDFz2X7p1sw3FLVbIAjTtH%2FmjOkValtkSC1Y6nAsVUmdIoO47FSWHl7C2U7xWHdZaCLp0mRYFR%2B6rh3ASH%2BP29xKMwsOuhs9MfdQWUjzny5AwcFXr4vf3EKm57Swxzb4PCQJF3dRmQssXTdRnKPSzayZVjZUNosb85bCm9B6NfPy%2FT6HX%2FC59Sg1D4afOe7cQWz4Miu%2FcmDCVq%2FLDBjqkAUYKxJYMQT9R6hQqGepOTK9Lsps6LTzamX9Wto6CjMzFdnxih9sVsNw%2BKvza2ZZWzCzEZzDsQDJ94VmNETI6i5R%2FNkmT0OShXmKnBpCb9r1Wvictlu76EMRvpP8MT9bAutQYoDbIWY4ZVQJ7y%2BX4PctNfNeczK5d0myYCptx9ZGAEoV1mn9A68AFc0LP4FY9mBz11yeVHoDL9TWpnnHJDeKCGJQO&X-Amz-Signature=df191eb13ab48eafd264e25edc93053980133492926fa83833972bec5edf0798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLGGHYP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEbafNSavAiRKPNAelK4cT4fMCZOPfKcRI7SWosX9TAIhAIQ2asnIJBPzReTmX8nqFGBMvQaLxQ31uosCux8bxsKOKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDHi%2FPiwiYRmjpt3gq3APntfhTU3iOyHzTx%2FHkmoPzkWl3N%2B6l19YOheQWFQn0P%2FK2TcSkD9tif6ir8jdcPECFPJPB0NI52y8%2FtL3y4svr2QA6iEljDkE1ZK07%2BgAUWXGmQP0CTXSlcQ%2Bob4SOJI3FbN5gLr5RAHs5Gew7x0M4VgrTP1xdLqzosqCEFQZRO%2F%2BizJ8dk%2B4w7%2BVJAfTWnNJZ6xKIbH%2B7ddXt0Lw5kVvdmOJblz09Jsj53JQUQn8EtHPh5oiFhaDQMMAz28NXaMzNyC1LzhSK2WPMe65Rk9kW0Bg4QUQtQeT3w5%2BU%2BeSfV1MmpG%2FeYyTRqx2FrEnDnEsG3UEqMaqbgQ2ABx3cvocPFXkKUpDynFN9F0B8T5pKM0kS06dVbJ%2FAnBxDdxR5K%2Bk0PSSZy78iB6rc8PkCC6Srk6X2RDIe%2Bqthz9XUMq9KpvKTfjYXDFz2X7p1sw3FLVbIAjTtH%2FmjOkValtkSC1Y6nAsVUmdIoO47FSWHl7C2U7xWHdZaCLp0mRYFR%2B6rh3ASH%2BP29xKMwsOuhs9MfdQWUjzny5AwcFXr4vf3EKm57Swxzb4PCQJF3dRmQssXTdRnKPSzayZVjZUNosb85bCm9B6NfPy%2FT6HX%2FC59Sg1D4afOe7cQWz4Miu%2FcmDCVq%2FLDBjqkAUYKxJYMQT9R6hQqGepOTK9Lsps6LTzamX9Wto6CjMzFdnxih9sVsNw%2BKvza2ZZWzCzEZzDsQDJ94VmNETI6i5R%2FNkmT0OShXmKnBpCb9r1Wvictlu76EMRvpP8MT9bAutQYoDbIWY4ZVQJ7y%2BX4PctNfNeczK5d0myYCptx9ZGAEoV1mn9A68AFc0LP4FY9mBz11yeVHoDL9TWpnnHJDeKCGJQO&X-Amz-Signature=fe915cbf1fb543027aaeae6413cae6ed18841fcc5ceff8ee17a5927364195aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSLGGHYP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoEbafNSavAiRKPNAelK4cT4fMCZOPfKcRI7SWosX9TAIhAIQ2asnIJBPzReTmX8nqFGBMvQaLxQ31uosCux8bxsKOKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDHi%2FPiwiYRmjpt3gq3APntfhTU3iOyHzTx%2FHkmoPzkWl3N%2B6l19YOheQWFQn0P%2FK2TcSkD9tif6ir8jdcPECFPJPB0NI52y8%2FtL3y4svr2QA6iEljDkE1ZK07%2BgAUWXGmQP0CTXSlcQ%2Bob4SOJI3FbN5gLr5RAHs5Gew7x0M4VgrTP1xdLqzosqCEFQZRO%2F%2BizJ8dk%2B4w7%2BVJAfTWnNJZ6xKIbH%2B7ddXt0Lw5kVvdmOJblz09Jsj53JQUQn8EtHPh5oiFhaDQMMAz28NXaMzNyC1LzhSK2WPMe65Rk9kW0Bg4QUQtQeT3w5%2BU%2BeSfV1MmpG%2FeYyTRqx2FrEnDnEsG3UEqMaqbgQ2ABx3cvocPFXkKUpDynFN9F0B8T5pKM0kS06dVbJ%2FAnBxDdxR5K%2Bk0PSSZy78iB6rc8PkCC6Srk6X2RDIe%2Bqthz9XUMq9KpvKTfjYXDFz2X7p1sw3FLVbIAjTtH%2FmjOkValtkSC1Y6nAsVUmdIoO47FSWHl7C2U7xWHdZaCLp0mRYFR%2B6rh3ASH%2BP29xKMwsOuhs9MfdQWUjzny5AwcFXr4vf3EKm57Swxzb4PCQJF3dRmQssXTdRnKPSzayZVjZUNosb85bCm9B6NfPy%2FT6HX%2FC59Sg1D4afOe7cQWz4Miu%2FcmDCVq%2FLDBjqkAUYKxJYMQT9R6hQqGepOTK9Lsps6LTzamX9Wto6CjMzFdnxih9sVsNw%2BKvza2ZZWzCzEZzDsQDJ94VmNETI6i5R%2FNkmT0OShXmKnBpCb9r1Wvictlu76EMRvpP8MT9bAutQYoDbIWY4ZVQJ7y%2BX4PctNfNeczK5d0myYCptx9ZGAEoV1mn9A68AFc0LP4FY9mBz11yeVHoDL9TWpnnHJDeKCGJQO&X-Amz-Signature=a11f0ff858bb8654fe8bfe7efc8a908bc3c30d0f7109a734164cf3ed184f50dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
