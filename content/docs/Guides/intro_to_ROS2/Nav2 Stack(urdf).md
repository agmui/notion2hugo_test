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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSDAFSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDXFq51TA83eCBzIrfx%2FID5zEjb4euswI%2FEuOFLqV%2FUAgIgDEjXmksfwIVxE3QMh4DLjSW4ibKw%2B71ZEisSxXcdOWwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUgL8n9RXtzhvfVPSrcA6TQawcPaz3qW9Y2tSYWsCfw9hxfdKGoxcvfJ1hStJK4BNBzzrVxwNhCZrCqXowegUNNXy5w36p4xvgDO%2BywAmYvgh1PaWSak4sA3M8fJsqcNKeGrczAOz2JZN7ObwnEPXdfhp4FeyXfws3PoKsFHct1TOb5auXofHiBk7YMVL%2FOY1mTQEkCh4YgGnXOlquhyrdjvQrfuaKWDQtt6nxFRvoJyH3v5LkhMYGGE5t%2BMXxbTaK0UVduuPOeT3hD1Fnzl1ngiVQLoVoHdtyFJcQS2woc1zdfukJfaOiD%2FaGz%2BYcUlwJFFx1QxZN8C%2FSTlpR%2FI2sHC4MOYQdfY7clNCg5Q7GFvTIEVQ86RIn4hFa6uzrQ71N5FXej1qTsXPCmRKOsfKw2%2FUrx%2FdWHYvwo29yWIj75%2FPoH5cnMtZTEM%2FgnV3seJ0oFpIYgFw1hqXiQwKUCSshA9E292fZWbyMUJ4%2FGy0YsX1Wlc%2FmPwnUyez9sG4ByUHGySKSJKtx27gvS4wtNG88is8eU39xXrifZq%2Bp8ePYGPiEYIwOzjmk9oAGgKivJ1I6hS00Ee%2B9qrgMMaCviAnC1jon1zmTxJcZBd%2FWOYDVt%2B376bMOPlSbSf4zbFRURaBxsUNQm42%2B0%2FJL1MOyzm70GOqUBec9GURfxHwpdEzTLzY6RJ5gv5zvVGwS3uFkid0ln7KwieYKcU00SIOabsyfIx0vQ8bolzkJKWr5osw6UtFD09O0QmAWus29cFwy4imrdVsH5UXuyDshpJiQCGox905yZRosjFb6N%2BASe576vJxd6oUx4a58KPxQKbGnXZE5IOZxdTtLS3x3DflxXmsP2CA%2BAt%2FLiHOHrHffvO%2FKuHT4PlNhp3LpM&X-Amz-Signature=d6f9536985bcc76dbbf41561ffaa65334593804b3806ce7c6f67b79e0a9c6b92&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSDAFSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDXFq51TA83eCBzIrfx%2FID5zEjb4euswI%2FEuOFLqV%2FUAgIgDEjXmksfwIVxE3QMh4DLjSW4ibKw%2B71ZEisSxXcdOWwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUgL8n9RXtzhvfVPSrcA6TQawcPaz3qW9Y2tSYWsCfw9hxfdKGoxcvfJ1hStJK4BNBzzrVxwNhCZrCqXowegUNNXy5w36p4xvgDO%2BywAmYvgh1PaWSak4sA3M8fJsqcNKeGrczAOz2JZN7ObwnEPXdfhp4FeyXfws3PoKsFHct1TOb5auXofHiBk7YMVL%2FOY1mTQEkCh4YgGnXOlquhyrdjvQrfuaKWDQtt6nxFRvoJyH3v5LkhMYGGE5t%2BMXxbTaK0UVduuPOeT3hD1Fnzl1ngiVQLoVoHdtyFJcQS2woc1zdfukJfaOiD%2FaGz%2BYcUlwJFFx1QxZN8C%2FSTlpR%2FI2sHC4MOYQdfY7clNCg5Q7GFvTIEVQ86RIn4hFa6uzrQ71N5FXej1qTsXPCmRKOsfKw2%2FUrx%2FdWHYvwo29yWIj75%2FPoH5cnMtZTEM%2FgnV3seJ0oFpIYgFw1hqXiQwKUCSshA9E292fZWbyMUJ4%2FGy0YsX1Wlc%2FmPwnUyez9sG4ByUHGySKSJKtx27gvS4wtNG88is8eU39xXrifZq%2Bp8ePYGPiEYIwOzjmk9oAGgKivJ1I6hS00Ee%2B9qrgMMaCviAnC1jon1zmTxJcZBd%2FWOYDVt%2B376bMOPlSbSf4zbFRURaBxsUNQm42%2B0%2FJL1MOyzm70GOqUBec9GURfxHwpdEzTLzY6RJ5gv5zvVGwS3uFkid0ln7KwieYKcU00SIOabsyfIx0vQ8bolzkJKWr5osw6UtFD09O0QmAWus29cFwy4imrdVsH5UXuyDshpJiQCGox905yZRosjFb6N%2BASe576vJxd6oUx4a58KPxQKbGnXZE5IOZxdTtLS3x3DflxXmsP2CA%2BAt%2FLiHOHrHffvO%2FKuHT4PlNhp3LpM&X-Amz-Signature=982e9a78f0422d0d0ef21ec47dfb9f72416619717d5986222068410e5c8873db&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSDAFSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDXFq51TA83eCBzIrfx%2FID5zEjb4euswI%2FEuOFLqV%2FUAgIgDEjXmksfwIVxE3QMh4DLjSW4ibKw%2B71ZEisSxXcdOWwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUgL8n9RXtzhvfVPSrcA6TQawcPaz3qW9Y2tSYWsCfw9hxfdKGoxcvfJ1hStJK4BNBzzrVxwNhCZrCqXowegUNNXy5w36p4xvgDO%2BywAmYvgh1PaWSak4sA3M8fJsqcNKeGrczAOz2JZN7ObwnEPXdfhp4FeyXfws3PoKsFHct1TOb5auXofHiBk7YMVL%2FOY1mTQEkCh4YgGnXOlquhyrdjvQrfuaKWDQtt6nxFRvoJyH3v5LkhMYGGE5t%2BMXxbTaK0UVduuPOeT3hD1Fnzl1ngiVQLoVoHdtyFJcQS2woc1zdfukJfaOiD%2FaGz%2BYcUlwJFFx1QxZN8C%2FSTlpR%2FI2sHC4MOYQdfY7clNCg5Q7GFvTIEVQ86RIn4hFa6uzrQ71N5FXej1qTsXPCmRKOsfKw2%2FUrx%2FdWHYvwo29yWIj75%2FPoH5cnMtZTEM%2FgnV3seJ0oFpIYgFw1hqXiQwKUCSshA9E292fZWbyMUJ4%2FGy0YsX1Wlc%2FmPwnUyez9sG4ByUHGySKSJKtx27gvS4wtNG88is8eU39xXrifZq%2Bp8ePYGPiEYIwOzjmk9oAGgKivJ1I6hS00Ee%2B9qrgMMaCviAnC1jon1zmTxJcZBd%2FWOYDVt%2B376bMOPlSbSf4zbFRURaBxsUNQm42%2B0%2FJL1MOyzm70GOqUBec9GURfxHwpdEzTLzY6RJ5gv5zvVGwS3uFkid0ln7KwieYKcU00SIOabsyfIx0vQ8bolzkJKWr5osw6UtFD09O0QmAWus29cFwy4imrdVsH5UXuyDshpJiQCGox905yZRosjFb6N%2BASe576vJxd6oUx4a58KPxQKbGnXZE5IOZxdTtLS3x3DflxXmsP2CA%2BAt%2FLiHOHrHffvO%2FKuHT4PlNhp3LpM&X-Amz-Signature=bdcf070de18c57ab04d8eb8728a5df7d2e4bd7ef5176dfab835f0b273d2d6a32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSDAFSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDXFq51TA83eCBzIrfx%2FID5zEjb4euswI%2FEuOFLqV%2FUAgIgDEjXmksfwIVxE3QMh4DLjSW4ibKw%2B71ZEisSxXcdOWwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUgL8n9RXtzhvfVPSrcA6TQawcPaz3qW9Y2tSYWsCfw9hxfdKGoxcvfJ1hStJK4BNBzzrVxwNhCZrCqXowegUNNXy5w36p4xvgDO%2BywAmYvgh1PaWSak4sA3M8fJsqcNKeGrczAOz2JZN7ObwnEPXdfhp4FeyXfws3PoKsFHct1TOb5auXofHiBk7YMVL%2FOY1mTQEkCh4YgGnXOlquhyrdjvQrfuaKWDQtt6nxFRvoJyH3v5LkhMYGGE5t%2BMXxbTaK0UVduuPOeT3hD1Fnzl1ngiVQLoVoHdtyFJcQS2woc1zdfukJfaOiD%2FaGz%2BYcUlwJFFx1QxZN8C%2FSTlpR%2FI2sHC4MOYQdfY7clNCg5Q7GFvTIEVQ86RIn4hFa6uzrQ71N5FXej1qTsXPCmRKOsfKw2%2FUrx%2FdWHYvwo29yWIj75%2FPoH5cnMtZTEM%2FgnV3seJ0oFpIYgFw1hqXiQwKUCSshA9E292fZWbyMUJ4%2FGy0YsX1Wlc%2FmPwnUyez9sG4ByUHGySKSJKtx27gvS4wtNG88is8eU39xXrifZq%2Bp8ePYGPiEYIwOzjmk9oAGgKivJ1I6hS00Ee%2B9qrgMMaCviAnC1jon1zmTxJcZBd%2FWOYDVt%2B376bMOPlSbSf4zbFRURaBxsUNQm42%2B0%2FJL1MOyzm70GOqUBec9GURfxHwpdEzTLzY6RJ5gv5zvVGwS3uFkid0ln7KwieYKcU00SIOabsyfIx0vQ8bolzkJKWr5osw6UtFD09O0QmAWus29cFwy4imrdVsH5UXuyDshpJiQCGox905yZRosjFb6N%2BASe576vJxd6oUx4a58KPxQKbGnXZE5IOZxdTtLS3x3DflxXmsP2CA%2BAt%2FLiHOHrHffvO%2FKuHT4PlNhp3LpM&X-Amz-Signature=614e669c7cacdfde85dfb6ca71310cdef419aef0416cdd24ddbe9fac43643880&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSDAFSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDXFq51TA83eCBzIrfx%2FID5zEjb4euswI%2FEuOFLqV%2FUAgIgDEjXmksfwIVxE3QMh4DLjSW4ibKw%2B71ZEisSxXcdOWwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUgL8n9RXtzhvfVPSrcA6TQawcPaz3qW9Y2tSYWsCfw9hxfdKGoxcvfJ1hStJK4BNBzzrVxwNhCZrCqXowegUNNXy5w36p4xvgDO%2BywAmYvgh1PaWSak4sA3M8fJsqcNKeGrczAOz2JZN7ObwnEPXdfhp4FeyXfws3PoKsFHct1TOb5auXofHiBk7YMVL%2FOY1mTQEkCh4YgGnXOlquhyrdjvQrfuaKWDQtt6nxFRvoJyH3v5LkhMYGGE5t%2BMXxbTaK0UVduuPOeT3hD1Fnzl1ngiVQLoVoHdtyFJcQS2woc1zdfukJfaOiD%2FaGz%2BYcUlwJFFx1QxZN8C%2FSTlpR%2FI2sHC4MOYQdfY7clNCg5Q7GFvTIEVQ86RIn4hFa6uzrQ71N5FXej1qTsXPCmRKOsfKw2%2FUrx%2FdWHYvwo29yWIj75%2FPoH5cnMtZTEM%2FgnV3seJ0oFpIYgFw1hqXiQwKUCSshA9E292fZWbyMUJ4%2FGy0YsX1Wlc%2FmPwnUyez9sG4ByUHGySKSJKtx27gvS4wtNG88is8eU39xXrifZq%2Bp8ePYGPiEYIwOzjmk9oAGgKivJ1I6hS00Ee%2B9qrgMMaCviAnC1jon1zmTxJcZBd%2FWOYDVt%2B376bMOPlSbSf4zbFRURaBxsUNQm42%2B0%2FJL1MOyzm70GOqUBec9GURfxHwpdEzTLzY6RJ5gv5zvVGwS3uFkid0ln7KwieYKcU00SIOabsyfIx0vQ8bolzkJKWr5osw6UtFD09O0QmAWus29cFwy4imrdVsH5UXuyDshpJiQCGox905yZRosjFb6N%2BASe576vJxd6oUx4a58KPxQKbGnXZE5IOZxdTtLS3x3DflxXmsP2CA%2BAt%2FLiHOHrHffvO%2FKuHT4PlNhp3LpM&X-Amz-Signature=7ffb480356ef7007ab55f041c2deb2cd125e0c8a6c6ee9edd0211129d5975108&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGSDAFSV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDXFq51TA83eCBzIrfx%2FID5zEjb4euswI%2FEuOFLqV%2FUAgIgDEjXmksfwIVxE3QMh4DLjSW4ibKw%2B71ZEisSxXcdOWwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUgL8n9RXtzhvfVPSrcA6TQawcPaz3qW9Y2tSYWsCfw9hxfdKGoxcvfJ1hStJK4BNBzzrVxwNhCZrCqXowegUNNXy5w36p4xvgDO%2BywAmYvgh1PaWSak4sA3M8fJsqcNKeGrczAOz2JZN7ObwnEPXdfhp4FeyXfws3PoKsFHct1TOb5auXofHiBk7YMVL%2FOY1mTQEkCh4YgGnXOlquhyrdjvQrfuaKWDQtt6nxFRvoJyH3v5LkhMYGGE5t%2BMXxbTaK0UVduuPOeT3hD1Fnzl1ngiVQLoVoHdtyFJcQS2woc1zdfukJfaOiD%2FaGz%2BYcUlwJFFx1QxZN8C%2FSTlpR%2FI2sHC4MOYQdfY7clNCg5Q7GFvTIEVQ86RIn4hFa6uzrQ71N5FXej1qTsXPCmRKOsfKw2%2FUrx%2FdWHYvwo29yWIj75%2FPoH5cnMtZTEM%2FgnV3seJ0oFpIYgFw1hqXiQwKUCSshA9E292fZWbyMUJ4%2FGy0YsX1Wlc%2FmPwnUyez9sG4ByUHGySKSJKtx27gvS4wtNG88is8eU39xXrifZq%2Bp8ePYGPiEYIwOzjmk9oAGgKivJ1I6hS00Ee%2B9qrgMMaCviAnC1jon1zmTxJcZBd%2FWOYDVt%2B376bMOPlSbSf4zbFRURaBxsUNQm42%2B0%2FJL1MOyzm70GOqUBec9GURfxHwpdEzTLzY6RJ5gv5zvVGwS3uFkid0ln7KwieYKcU00SIOabsyfIx0vQ8bolzkJKWr5osw6UtFD09O0QmAWus29cFwy4imrdVsH5UXuyDshpJiQCGox905yZRosjFb6N%2BASe576vJxd6oUx4a58KPxQKbGnXZE5IOZxdTtLS3x3DflxXmsP2CA%2BAt%2FLiHOHrHffvO%2FKuHT4PlNhp3LpM&X-Amz-Signature=af90ecbf8b5e0929647aa1c209830eb71fc2b2a98f88f5d867c353fd647d2f44&X-Amz-SignedHeaders=host&x-id=GetObject)
