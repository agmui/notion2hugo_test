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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZFPZZI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDnCD4%2Bkz24Rf%2FRaHUpFOkANSgzpdXHNvh0ZuA3Sg4JrQIgOvdWoQel4fTy2d1wy%2Brj2%2FrXtHooJiejuZmlYZ0%2FvrEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTT7M2rFMylMKvYDircA%2Fum9X6VTALKSkGs91agoS4a4CaoTPgtP0NmpQOo5e326WqkoVwXFjKGSS%2BoB%2Bh9l43r7pXMrfagdpWxNgmUnrxu9sS1%2Fhx2wxrk%2Ffp2BcghtcQxriATgViZS0gkzdQ505Q0ePOV7QveFaZ0wV%2F0o19pPMxNVKmpURKTAl3KLBrELL06P%2BznULb8vYJ0e4XARtI5EYD2mvdOwJpfS8wFmklkcNXeWdrkEdIs99fCdwU7%2Byc9c7jjUyJJkwz%2BZFS%2F2Xa7q87EwizPThxgrxjFrHascyAHW1sFyQo%2FJAKlrCpK16fpLqrO%2FYtQ8Sx48x9Zm4cc343lESIS6MXzCkkG2OhvfcwCww8uJV6ELVMCjKtFonNFWypNNdFhM6aCSY8PoWPFIzT8XkHoS5%2FA1BmUD%2F80F7jTRknNmcom5UG9TtBZF8uKINVJvkfCY7DfFSbji6v2nFeHrL21vpoO68ju1AHwoZXRx9BjH3KmFUDuf9mdT%2FSyXIdxW42DSkkrlpcq78YmjhLhMydvxZfh6D39whvsIJ20xr3eAH8zGUj9a3n1EEd4vF6x75IB2vmYKG6n8zCMdzT8B4XolzAOjFJV2uENTZiFRgQJ%2BBQnkd9JgNgPoefdM208Q3A7ZzPZMM%2Fns78GOqUBKtk9CnIGuO4T1oUUjuT2PqJFxN9c2lUEh9UJBStG4gBg%2FuLpSJOo1SgucuIu1DbPa51Lwo3KgWs7YbYSzi0pusy02t%2FsXxEjV0khCTHtSfzWFX9YD4%2BQNVWfVzcFWGjehGcqCVgPKwlkILRTHWuWMUCtbJEJyzRHY%2BFG7bD%2BA0lLrVI1S9gCPljrwXf5JebAGIbEDb%2Ftojnl6GMgPF6dTlFsLVPq&X-Amz-Signature=746d3e846e98ee652eab68a162be424d1f09f47d28d69d67007b091fae407abe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZFPZZI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDnCD4%2Bkz24Rf%2FRaHUpFOkANSgzpdXHNvh0ZuA3Sg4JrQIgOvdWoQel4fTy2d1wy%2Brj2%2FrXtHooJiejuZmlYZ0%2FvrEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTT7M2rFMylMKvYDircA%2Fum9X6VTALKSkGs91agoS4a4CaoTPgtP0NmpQOo5e326WqkoVwXFjKGSS%2BoB%2Bh9l43r7pXMrfagdpWxNgmUnrxu9sS1%2Fhx2wxrk%2Ffp2BcghtcQxriATgViZS0gkzdQ505Q0ePOV7QveFaZ0wV%2F0o19pPMxNVKmpURKTAl3KLBrELL06P%2BznULb8vYJ0e4XARtI5EYD2mvdOwJpfS8wFmklkcNXeWdrkEdIs99fCdwU7%2Byc9c7jjUyJJkwz%2BZFS%2F2Xa7q87EwizPThxgrxjFrHascyAHW1sFyQo%2FJAKlrCpK16fpLqrO%2FYtQ8Sx48x9Zm4cc343lESIS6MXzCkkG2OhvfcwCww8uJV6ELVMCjKtFonNFWypNNdFhM6aCSY8PoWPFIzT8XkHoS5%2FA1BmUD%2F80F7jTRknNmcom5UG9TtBZF8uKINVJvkfCY7DfFSbji6v2nFeHrL21vpoO68ju1AHwoZXRx9BjH3KmFUDuf9mdT%2FSyXIdxW42DSkkrlpcq78YmjhLhMydvxZfh6D39whvsIJ20xr3eAH8zGUj9a3n1EEd4vF6x75IB2vmYKG6n8zCMdzT8B4XolzAOjFJV2uENTZiFRgQJ%2BBQnkd9JgNgPoefdM208Q3A7ZzPZMM%2Fns78GOqUBKtk9CnIGuO4T1oUUjuT2PqJFxN9c2lUEh9UJBStG4gBg%2FuLpSJOo1SgucuIu1DbPa51Lwo3KgWs7YbYSzi0pusy02t%2FsXxEjV0khCTHtSfzWFX9YD4%2BQNVWfVzcFWGjehGcqCVgPKwlkILRTHWuWMUCtbJEJyzRHY%2BFG7bD%2BA0lLrVI1S9gCPljrwXf5JebAGIbEDb%2Ftojnl6GMgPF6dTlFsLVPq&X-Amz-Signature=dcf2bea4686fd30bc55282fc6860a93e7912e069e3acb782d98fd0288dcdd5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZFPZZI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDnCD4%2Bkz24Rf%2FRaHUpFOkANSgzpdXHNvh0ZuA3Sg4JrQIgOvdWoQel4fTy2d1wy%2Brj2%2FrXtHooJiejuZmlYZ0%2FvrEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTT7M2rFMylMKvYDircA%2Fum9X6VTALKSkGs91agoS4a4CaoTPgtP0NmpQOo5e326WqkoVwXFjKGSS%2BoB%2Bh9l43r7pXMrfagdpWxNgmUnrxu9sS1%2Fhx2wxrk%2Ffp2BcghtcQxriATgViZS0gkzdQ505Q0ePOV7QveFaZ0wV%2F0o19pPMxNVKmpURKTAl3KLBrELL06P%2BznULb8vYJ0e4XARtI5EYD2mvdOwJpfS8wFmklkcNXeWdrkEdIs99fCdwU7%2Byc9c7jjUyJJkwz%2BZFS%2F2Xa7q87EwizPThxgrxjFrHascyAHW1sFyQo%2FJAKlrCpK16fpLqrO%2FYtQ8Sx48x9Zm4cc343lESIS6MXzCkkG2OhvfcwCww8uJV6ELVMCjKtFonNFWypNNdFhM6aCSY8PoWPFIzT8XkHoS5%2FA1BmUD%2F80F7jTRknNmcom5UG9TtBZF8uKINVJvkfCY7DfFSbji6v2nFeHrL21vpoO68ju1AHwoZXRx9BjH3KmFUDuf9mdT%2FSyXIdxW42DSkkrlpcq78YmjhLhMydvxZfh6D39whvsIJ20xr3eAH8zGUj9a3n1EEd4vF6x75IB2vmYKG6n8zCMdzT8B4XolzAOjFJV2uENTZiFRgQJ%2BBQnkd9JgNgPoefdM208Q3A7ZzPZMM%2Fns78GOqUBKtk9CnIGuO4T1oUUjuT2PqJFxN9c2lUEh9UJBStG4gBg%2FuLpSJOo1SgucuIu1DbPa51Lwo3KgWs7YbYSzi0pusy02t%2FsXxEjV0khCTHtSfzWFX9YD4%2BQNVWfVzcFWGjehGcqCVgPKwlkILRTHWuWMUCtbJEJyzRHY%2BFG7bD%2BA0lLrVI1S9gCPljrwXf5JebAGIbEDb%2Ftojnl6GMgPF6dTlFsLVPq&X-Amz-Signature=6216aeb0ace57720d95efc558172a612aaa79e6bd616ff1063bd1d61de5bf215&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZFPZZI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDnCD4%2Bkz24Rf%2FRaHUpFOkANSgzpdXHNvh0ZuA3Sg4JrQIgOvdWoQel4fTy2d1wy%2Brj2%2FrXtHooJiejuZmlYZ0%2FvrEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTT7M2rFMylMKvYDircA%2Fum9X6VTALKSkGs91agoS4a4CaoTPgtP0NmpQOo5e326WqkoVwXFjKGSS%2BoB%2Bh9l43r7pXMrfagdpWxNgmUnrxu9sS1%2Fhx2wxrk%2Ffp2BcghtcQxriATgViZS0gkzdQ505Q0ePOV7QveFaZ0wV%2F0o19pPMxNVKmpURKTAl3KLBrELL06P%2BznULb8vYJ0e4XARtI5EYD2mvdOwJpfS8wFmklkcNXeWdrkEdIs99fCdwU7%2Byc9c7jjUyJJkwz%2BZFS%2F2Xa7q87EwizPThxgrxjFrHascyAHW1sFyQo%2FJAKlrCpK16fpLqrO%2FYtQ8Sx48x9Zm4cc343lESIS6MXzCkkG2OhvfcwCww8uJV6ELVMCjKtFonNFWypNNdFhM6aCSY8PoWPFIzT8XkHoS5%2FA1BmUD%2F80F7jTRknNmcom5UG9TtBZF8uKINVJvkfCY7DfFSbji6v2nFeHrL21vpoO68ju1AHwoZXRx9BjH3KmFUDuf9mdT%2FSyXIdxW42DSkkrlpcq78YmjhLhMydvxZfh6D39whvsIJ20xr3eAH8zGUj9a3n1EEd4vF6x75IB2vmYKG6n8zCMdzT8B4XolzAOjFJV2uENTZiFRgQJ%2BBQnkd9JgNgPoefdM208Q3A7ZzPZMM%2Fns78GOqUBKtk9CnIGuO4T1oUUjuT2PqJFxN9c2lUEh9UJBStG4gBg%2FuLpSJOo1SgucuIu1DbPa51Lwo3KgWs7YbYSzi0pusy02t%2FsXxEjV0khCTHtSfzWFX9YD4%2BQNVWfVzcFWGjehGcqCVgPKwlkILRTHWuWMUCtbJEJyzRHY%2BFG7bD%2BA0lLrVI1S9gCPljrwXf5JebAGIbEDb%2Ftojnl6GMgPF6dTlFsLVPq&X-Amz-Signature=dcf424b270fde87e1ec671cf4dd531c260cee4b11697b56832358e7cb57fccbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZFPZZI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDnCD4%2Bkz24Rf%2FRaHUpFOkANSgzpdXHNvh0ZuA3Sg4JrQIgOvdWoQel4fTy2d1wy%2Brj2%2FrXtHooJiejuZmlYZ0%2FvrEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTT7M2rFMylMKvYDircA%2Fum9X6VTALKSkGs91agoS4a4CaoTPgtP0NmpQOo5e326WqkoVwXFjKGSS%2BoB%2Bh9l43r7pXMrfagdpWxNgmUnrxu9sS1%2Fhx2wxrk%2Ffp2BcghtcQxriATgViZS0gkzdQ505Q0ePOV7QveFaZ0wV%2F0o19pPMxNVKmpURKTAl3KLBrELL06P%2BznULb8vYJ0e4XARtI5EYD2mvdOwJpfS8wFmklkcNXeWdrkEdIs99fCdwU7%2Byc9c7jjUyJJkwz%2BZFS%2F2Xa7q87EwizPThxgrxjFrHascyAHW1sFyQo%2FJAKlrCpK16fpLqrO%2FYtQ8Sx48x9Zm4cc343lESIS6MXzCkkG2OhvfcwCww8uJV6ELVMCjKtFonNFWypNNdFhM6aCSY8PoWPFIzT8XkHoS5%2FA1BmUD%2F80F7jTRknNmcom5UG9TtBZF8uKINVJvkfCY7DfFSbji6v2nFeHrL21vpoO68ju1AHwoZXRx9BjH3KmFUDuf9mdT%2FSyXIdxW42DSkkrlpcq78YmjhLhMydvxZfh6D39whvsIJ20xr3eAH8zGUj9a3n1EEd4vF6x75IB2vmYKG6n8zCMdzT8B4XolzAOjFJV2uENTZiFRgQJ%2BBQnkd9JgNgPoefdM208Q3A7ZzPZMM%2Fns78GOqUBKtk9CnIGuO4T1oUUjuT2PqJFxN9c2lUEh9UJBStG4gBg%2FuLpSJOo1SgucuIu1DbPa51Lwo3KgWs7YbYSzi0pusy02t%2FsXxEjV0khCTHtSfzWFX9YD4%2BQNVWfVzcFWGjehGcqCVgPKwlkILRTHWuWMUCtbJEJyzRHY%2BFG7bD%2BA0lLrVI1S9gCPljrwXf5JebAGIbEDb%2Ftojnl6GMgPF6dTlFsLVPq&X-Amz-Signature=02b998a8c10704daa337b7f94a5448ad18b903bcbd667292ff642f8a82b12f34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZFPZZI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDnCD4%2Bkz24Rf%2FRaHUpFOkANSgzpdXHNvh0ZuA3Sg4JrQIgOvdWoQel4fTy2d1wy%2Brj2%2FrXtHooJiejuZmlYZ0%2FvrEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTT7M2rFMylMKvYDircA%2Fum9X6VTALKSkGs91agoS4a4CaoTPgtP0NmpQOo5e326WqkoVwXFjKGSS%2BoB%2Bh9l43r7pXMrfagdpWxNgmUnrxu9sS1%2Fhx2wxrk%2Ffp2BcghtcQxriATgViZS0gkzdQ505Q0ePOV7QveFaZ0wV%2F0o19pPMxNVKmpURKTAl3KLBrELL06P%2BznULb8vYJ0e4XARtI5EYD2mvdOwJpfS8wFmklkcNXeWdrkEdIs99fCdwU7%2Byc9c7jjUyJJkwz%2BZFS%2F2Xa7q87EwizPThxgrxjFrHascyAHW1sFyQo%2FJAKlrCpK16fpLqrO%2FYtQ8Sx48x9Zm4cc343lESIS6MXzCkkG2OhvfcwCww8uJV6ELVMCjKtFonNFWypNNdFhM6aCSY8PoWPFIzT8XkHoS5%2FA1BmUD%2F80F7jTRknNmcom5UG9TtBZF8uKINVJvkfCY7DfFSbji6v2nFeHrL21vpoO68ju1AHwoZXRx9BjH3KmFUDuf9mdT%2FSyXIdxW42DSkkrlpcq78YmjhLhMydvxZfh6D39whvsIJ20xr3eAH8zGUj9a3n1EEd4vF6x75IB2vmYKG6n8zCMdzT8B4XolzAOjFJV2uENTZiFRgQJ%2BBQnkd9JgNgPoefdM208Q3A7ZzPZMM%2Fns78GOqUBKtk9CnIGuO4T1oUUjuT2PqJFxN9c2lUEh9UJBStG4gBg%2FuLpSJOo1SgucuIu1DbPa51Lwo3KgWs7YbYSzi0pusy02t%2FsXxEjV0khCTHtSfzWFX9YD4%2BQNVWfVzcFWGjehGcqCVgPKwlkILRTHWuWMUCtbJEJyzRHY%2BFG7bD%2BA0lLrVI1S9gCPljrwXf5JebAGIbEDb%2Ftojnl6GMgPF6dTlFsLVPq&X-Amz-Signature=4fa6d4ebbcff7ec8a8ab89fb6e0bb2bd5843481a8231cbde1e7162c67c1aefbb&X-Amz-SignedHeaders=host&x-id=GetObject)
