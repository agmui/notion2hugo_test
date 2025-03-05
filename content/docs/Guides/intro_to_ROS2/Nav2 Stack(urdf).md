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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF5MAESN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BF3SRN6vFlYZpQQPtjq8adiWJIxwMAP%2FMbAwlQavNsAiEA8JbteaSXjxAAOEpBBHSiCQ3v6sPRjO0k6NbyB7JmFNYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHQO8TurrHWYhPbZOyrcA90jPEYZDFE4qFipqzBQn6ri%2F09ZI60zSlolewaZE9ppgQ7Pwz4a2JxlNUkoi05aN4Gp3BUia0r5V9nPJCM0xA5tlnkaEsTzY%2FIm6HzwJFXQI1MUOo0fVh5kne%2Bbcq8NhOejvFT84ioD%2FQLGmfF3bc4bo3dLGwujZxwHmLII9xd4Fa5JNIbyuj8ihCW0vOPvp8tdGvyEEO56fwmZ8h8xz6XxcwQZzcQkpXtK4KKsNu%2BWsxMqjJ%2F4sK2DdsrbBQrxzGG7LIfOfsT4p6vMFwv7bCgtkSkKJG1YkQAFSfr%2F73x4IeQ7YCnr1ESiP8FUItc5Demtt0xr8QTx%2F3%2Blico6GKKgLp%2F4GcBw%2FFlyFhF8Is6VkEQ6H5ZW8X4qiW2xhYGfMiHNAvl7PW9ITSyYQ2M7y%2B6%2F0f2HUqgIQMRCJ6C2TOBz285a045KU5YqgAe4UPtkuv9wUyfJcB3qWvbQOBcJ3wPLPukf4TPYjv8Wpk9yfS0%2F%2B9v8GtmQM99d2cI4o4ntqF8fHmg%2BuHScqhsMdcTCMaFIShvX0LRkgTkIFEVmcc%2FDTOrXNWlIS0mPNp8dDlPcGaSr84JcgVaxuFptroy1G2ZMpTLK2gWj0NaIt%2FVcg2Bhv7oYu%2FaDYsvkHtruMI3hor4GOqUBIHEzzDGcHSTFYTjNIz27it7c6Ezrs7fe3SAr3%2Bp4MmwwHDTp%2B1DkLSSLj9tHRkQ43awr2G5JFp7t%2F2Mkqrb0aVMmDBhNuHSsjcniuIPXpRh7fjKLHL%2BTKsQLTZNqSTdbNhiD8Jmr12ypXJtmnAmZBosV47R32flJ9EKcMWgeWdj5Gq2Z9BV8h%2BlUIN5grKnvPmJ%2BwQxyVMwVx%2BEPw1HKPMOKvE3W&X-Amz-Signature=7651690f5a782b095109f344e70b311394a60ae704e25c89764ab4b51b7eab0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF5MAESN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BF3SRN6vFlYZpQQPtjq8adiWJIxwMAP%2FMbAwlQavNsAiEA8JbteaSXjxAAOEpBBHSiCQ3v6sPRjO0k6NbyB7JmFNYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHQO8TurrHWYhPbZOyrcA90jPEYZDFE4qFipqzBQn6ri%2F09ZI60zSlolewaZE9ppgQ7Pwz4a2JxlNUkoi05aN4Gp3BUia0r5V9nPJCM0xA5tlnkaEsTzY%2FIm6HzwJFXQI1MUOo0fVh5kne%2Bbcq8NhOejvFT84ioD%2FQLGmfF3bc4bo3dLGwujZxwHmLII9xd4Fa5JNIbyuj8ihCW0vOPvp8tdGvyEEO56fwmZ8h8xz6XxcwQZzcQkpXtK4KKsNu%2BWsxMqjJ%2F4sK2DdsrbBQrxzGG7LIfOfsT4p6vMFwv7bCgtkSkKJG1YkQAFSfr%2F73x4IeQ7YCnr1ESiP8FUItc5Demtt0xr8QTx%2F3%2Blico6GKKgLp%2F4GcBw%2FFlyFhF8Is6VkEQ6H5ZW8X4qiW2xhYGfMiHNAvl7PW9ITSyYQ2M7y%2B6%2F0f2HUqgIQMRCJ6C2TOBz285a045KU5YqgAe4UPtkuv9wUyfJcB3qWvbQOBcJ3wPLPukf4TPYjv8Wpk9yfS0%2F%2B9v8GtmQM99d2cI4o4ntqF8fHmg%2BuHScqhsMdcTCMaFIShvX0LRkgTkIFEVmcc%2FDTOrXNWlIS0mPNp8dDlPcGaSr84JcgVaxuFptroy1G2ZMpTLK2gWj0NaIt%2FVcg2Bhv7oYu%2FaDYsvkHtruMI3hor4GOqUBIHEzzDGcHSTFYTjNIz27it7c6Ezrs7fe3SAr3%2Bp4MmwwHDTp%2B1DkLSSLj9tHRkQ43awr2G5JFp7t%2F2Mkqrb0aVMmDBhNuHSsjcniuIPXpRh7fjKLHL%2BTKsQLTZNqSTdbNhiD8Jmr12ypXJtmnAmZBosV47R32flJ9EKcMWgeWdj5Gq2Z9BV8h%2BlUIN5grKnvPmJ%2BwQxyVMwVx%2BEPw1HKPMOKvE3W&X-Amz-Signature=856344fb166c4b7f1bb19d963d930dbbd0d5005871bbe4a211429430e4a75330&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF5MAESN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BF3SRN6vFlYZpQQPtjq8adiWJIxwMAP%2FMbAwlQavNsAiEA8JbteaSXjxAAOEpBBHSiCQ3v6sPRjO0k6NbyB7JmFNYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHQO8TurrHWYhPbZOyrcA90jPEYZDFE4qFipqzBQn6ri%2F09ZI60zSlolewaZE9ppgQ7Pwz4a2JxlNUkoi05aN4Gp3BUia0r5V9nPJCM0xA5tlnkaEsTzY%2FIm6HzwJFXQI1MUOo0fVh5kne%2Bbcq8NhOejvFT84ioD%2FQLGmfF3bc4bo3dLGwujZxwHmLII9xd4Fa5JNIbyuj8ihCW0vOPvp8tdGvyEEO56fwmZ8h8xz6XxcwQZzcQkpXtK4KKsNu%2BWsxMqjJ%2F4sK2DdsrbBQrxzGG7LIfOfsT4p6vMFwv7bCgtkSkKJG1YkQAFSfr%2F73x4IeQ7YCnr1ESiP8FUItc5Demtt0xr8QTx%2F3%2Blico6GKKgLp%2F4GcBw%2FFlyFhF8Is6VkEQ6H5ZW8X4qiW2xhYGfMiHNAvl7PW9ITSyYQ2M7y%2B6%2F0f2HUqgIQMRCJ6C2TOBz285a045KU5YqgAe4UPtkuv9wUyfJcB3qWvbQOBcJ3wPLPukf4TPYjv8Wpk9yfS0%2F%2B9v8GtmQM99d2cI4o4ntqF8fHmg%2BuHScqhsMdcTCMaFIShvX0LRkgTkIFEVmcc%2FDTOrXNWlIS0mPNp8dDlPcGaSr84JcgVaxuFptroy1G2ZMpTLK2gWj0NaIt%2FVcg2Bhv7oYu%2FaDYsvkHtruMI3hor4GOqUBIHEzzDGcHSTFYTjNIz27it7c6Ezrs7fe3SAr3%2Bp4MmwwHDTp%2B1DkLSSLj9tHRkQ43awr2G5JFp7t%2F2Mkqrb0aVMmDBhNuHSsjcniuIPXpRh7fjKLHL%2BTKsQLTZNqSTdbNhiD8Jmr12ypXJtmnAmZBosV47R32flJ9EKcMWgeWdj5Gq2Z9BV8h%2BlUIN5grKnvPmJ%2BwQxyVMwVx%2BEPw1HKPMOKvE3W&X-Amz-Signature=7422ddbf3b4d7f5a4cf036878d0bdadda75a21b4be5785942c2bd5430820eb55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF5MAESN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BF3SRN6vFlYZpQQPtjq8adiWJIxwMAP%2FMbAwlQavNsAiEA8JbteaSXjxAAOEpBBHSiCQ3v6sPRjO0k6NbyB7JmFNYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHQO8TurrHWYhPbZOyrcA90jPEYZDFE4qFipqzBQn6ri%2F09ZI60zSlolewaZE9ppgQ7Pwz4a2JxlNUkoi05aN4Gp3BUia0r5V9nPJCM0xA5tlnkaEsTzY%2FIm6HzwJFXQI1MUOo0fVh5kne%2Bbcq8NhOejvFT84ioD%2FQLGmfF3bc4bo3dLGwujZxwHmLII9xd4Fa5JNIbyuj8ihCW0vOPvp8tdGvyEEO56fwmZ8h8xz6XxcwQZzcQkpXtK4KKsNu%2BWsxMqjJ%2F4sK2DdsrbBQrxzGG7LIfOfsT4p6vMFwv7bCgtkSkKJG1YkQAFSfr%2F73x4IeQ7YCnr1ESiP8FUItc5Demtt0xr8QTx%2F3%2Blico6GKKgLp%2F4GcBw%2FFlyFhF8Is6VkEQ6H5ZW8X4qiW2xhYGfMiHNAvl7PW9ITSyYQ2M7y%2B6%2F0f2HUqgIQMRCJ6C2TOBz285a045KU5YqgAe4UPtkuv9wUyfJcB3qWvbQOBcJ3wPLPukf4TPYjv8Wpk9yfS0%2F%2B9v8GtmQM99d2cI4o4ntqF8fHmg%2BuHScqhsMdcTCMaFIShvX0LRkgTkIFEVmcc%2FDTOrXNWlIS0mPNp8dDlPcGaSr84JcgVaxuFptroy1G2ZMpTLK2gWj0NaIt%2FVcg2Bhv7oYu%2FaDYsvkHtruMI3hor4GOqUBIHEzzDGcHSTFYTjNIz27it7c6Ezrs7fe3SAr3%2Bp4MmwwHDTp%2B1DkLSSLj9tHRkQ43awr2G5JFp7t%2F2Mkqrb0aVMmDBhNuHSsjcniuIPXpRh7fjKLHL%2BTKsQLTZNqSTdbNhiD8Jmr12ypXJtmnAmZBosV47R32flJ9EKcMWgeWdj5Gq2Z9BV8h%2BlUIN5grKnvPmJ%2BwQxyVMwVx%2BEPw1HKPMOKvE3W&X-Amz-Signature=4bb6bde71f33fe75b23c581c7d8c32d2ae2635bb39b9be20d5d8dc22f94848e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF5MAESN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BF3SRN6vFlYZpQQPtjq8adiWJIxwMAP%2FMbAwlQavNsAiEA8JbteaSXjxAAOEpBBHSiCQ3v6sPRjO0k6NbyB7JmFNYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHQO8TurrHWYhPbZOyrcA90jPEYZDFE4qFipqzBQn6ri%2F09ZI60zSlolewaZE9ppgQ7Pwz4a2JxlNUkoi05aN4Gp3BUia0r5V9nPJCM0xA5tlnkaEsTzY%2FIm6HzwJFXQI1MUOo0fVh5kne%2Bbcq8NhOejvFT84ioD%2FQLGmfF3bc4bo3dLGwujZxwHmLII9xd4Fa5JNIbyuj8ihCW0vOPvp8tdGvyEEO56fwmZ8h8xz6XxcwQZzcQkpXtK4KKsNu%2BWsxMqjJ%2F4sK2DdsrbBQrxzGG7LIfOfsT4p6vMFwv7bCgtkSkKJG1YkQAFSfr%2F73x4IeQ7YCnr1ESiP8FUItc5Demtt0xr8QTx%2F3%2Blico6GKKgLp%2F4GcBw%2FFlyFhF8Is6VkEQ6H5ZW8X4qiW2xhYGfMiHNAvl7PW9ITSyYQ2M7y%2B6%2F0f2HUqgIQMRCJ6C2TOBz285a045KU5YqgAe4UPtkuv9wUyfJcB3qWvbQOBcJ3wPLPukf4TPYjv8Wpk9yfS0%2F%2B9v8GtmQM99d2cI4o4ntqF8fHmg%2BuHScqhsMdcTCMaFIShvX0LRkgTkIFEVmcc%2FDTOrXNWlIS0mPNp8dDlPcGaSr84JcgVaxuFptroy1G2ZMpTLK2gWj0NaIt%2FVcg2Bhv7oYu%2FaDYsvkHtruMI3hor4GOqUBIHEzzDGcHSTFYTjNIz27it7c6Ezrs7fe3SAr3%2Bp4MmwwHDTp%2B1DkLSSLj9tHRkQ43awr2G5JFp7t%2F2Mkqrb0aVMmDBhNuHSsjcniuIPXpRh7fjKLHL%2BTKsQLTZNqSTdbNhiD8Jmr12ypXJtmnAmZBosV47R32flJ9EKcMWgeWdj5Gq2Z9BV8h%2BlUIN5grKnvPmJ%2BwQxyVMwVx%2BEPw1HKPMOKvE3W&X-Amz-Signature=5263d08fafbb44445774ba59ca3067f2c9922e815cb8b5f1df5d013618b0932b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF5MAESN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BF3SRN6vFlYZpQQPtjq8adiWJIxwMAP%2FMbAwlQavNsAiEA8JbteaSXjxAAOEpBBHSiCQ3v6sPRjO0k6NbyB7JmFNYq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDHQO8TurrHWYhPbZOyrcA90jPEYZDFE4qFipqzBQn6ri%2F09ZI60zSlolewaZE9ppgQ7Pwz4a2JxlNUkoi05aN4Gp3BUia0r5V9nPJCM0xA5tlnkaEsTzY%2FIm6HzwJFXQI1MUOo0fVh5kne%2Bbcq8NhOejvFT84ioD%2FQLGmfF3bc4bo3dLGwujZxwHmLII9xd4Fa5JNIbyuj8ihCW0vOPvp8tdGvyEEO56fwmZ8h8xz6XxcwQZzcQkpXtK4KKsNu%2BWsxMqjJ%2F4sK2DdsrbBQrxzGG7LIfOfsT4p6vMFwv7bCgtkSkKJG1YkQAFSfr%2F73x4IeQ7YCnr1ESiP8FUItc5Demtt0xr8QTx%2F3%2Blico6GKKgLp%2F4GcBw%2FFlyFhF8Is6VkEQ6H5ZW8X4qiW2xhYGfMiHNAvl7PW9ITSyYQ2M7y%2B6%2F0f2HUqgIQMRCJ6C2TOBz285a045KU5YqgAe4UPtkuv9wUyfJcB3qWvbQOBcJ3wPLPukf4TPYjv8Wpk9yfS0%2F%2B9v8GtmQM99d2cI4o4ntqF8fHmg%2BuHScqhsMdcTCMaFIShvX0LRkgTkIFEVmcc%2FDTOrXNWlIS0mPNp8dDlPcGaSr84JcgVaxuFptroy1G2ZMpTLK2gWj0NaIt%2FVcg2Bhv7oYu%2FaDYsvkHtruMI3hor4GOqUBIHEzzDGcHSTFYTjNIz27it7c6Ezrs7fe3SAr3%2Bp4MmwwHDTp%2B1DkLSSLj9tHRkQ43awr2G5JFp7t%2F2Mkqrb0aVMmDBhNuHSsjcniuIPXpRh7fjKLHL%2BTKsQLTZNqSTdbNhiD8Jmr12ypXJtmnAmZBosV47R32flJ9EKcMWgeWdj5Gq2Z9BV8h%2BlUIN5grKnvPmJ%2BwQxyVMwVx%2BEPw1HKPMOKvE3W&X-Amz-Signature=4079facb62d535cfba4d5b04fc1ba0e0876ed9f6bd1d869d54475ff0ad7b2bf9&X-Amz-SignedHeaders=host&x-id=GetObject)
