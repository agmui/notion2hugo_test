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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCLRZFM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC0RB04bi15Tzt5DEE8skGLBC0D0bldrP%2Bm3cVvjGg%2F%2FAIgCCygdBHEGbOVksOjxHCFCxwqAjGvQzhddak1cqqS5jQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIEhwztChy2SkU3KkCrcA9Pr8mqjZ%2BvrZB%2Bc0%2BqGnXYDRNXPPfpqDAW16nK2SHLA9fcSrgaWl%2B%2FD2PVyM9Xd8ikMj2u22F0xIKGmGjK0gpAJ17dgxNHO7EPhPWNLTRWKn7FUj6skqY3JOwS0bdopzBEplyAbgaCYO532npry19smY4CQhAQ8E4CxOkpjPCaX%2BC0vjHZ17arhKm7txkeEyksOQigIPhO2NUfxL27YailLkJYpGNU23BRtW9PgZp3izkI5qOp0MtSonnL8xM31QCawkw0a2KHzUmfaJiOm8r%2FpgfLnFa5yDRc%2BHXaFEazPVgKSKmEHX27g8fpMfvIWwwY73Bg9ovwCUWkTfzpOPc0v3eBOQNE5yP1whc2Jflr2reTwcvqQpVkK3YCDH%2B8VDtc7smTDSfgXRj8pfEG3%2FPI3XlenORXpSa17cy2bFk3ArbTYmLuywVlQ7tDPzi4%2BFNhTH20LLzqFxhdOAy33UWoRBMpaaDNYf8qs1gqRenWXa3nD3Rt8rcfTztmJ4gSiW2ELWSHZUttMu4CQzFXgZsDSSZnv9iHtOYyWGp3601KyELnly37faVGheTK99vZu%2B2sa4m%2FYMaY5LaM0G9OG46MvP8fNa8OApkt3TLSLz6zHKsRMG9%2BLuR5cqWPKMNfrlsEGOqUBCYTWF4y78zuY2UnrMSdKvSo9XOglRZhfWs8CzuMtx%2Bfogu310kg9isEgmmvDRfKkCf3cMG%2BgzBS%2B%2Fa15I2fSzEi5kihRFIX0yYOBxIu4ZTFwEDGw6voHDDaKEjDjZ2sAXUjTWwrBFwSzsKmfmDY9%2FfUs6lJgV5nScEhfuxRWes29niPwtFXmmi3YU6sfrm3VqAfiR2cUtJgqs3JALYqDQPk1znPc&X-Amz-Signature=3e212a516e8bf16fc805d9585ce8efec778dff678f65c76947748572f24cc9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCLRZFM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC0RB04bi15Tzt5DEE8skGLBC0D0bldrP%2Bm3cVvjGg%2F%2FAIgCCygdBHEGbOVksOjxHCFCxwqAjGvQzhddak1cqqS5jQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIEhwztChy2SkU3KkCrcA9Pr8mqjZ%2BvrZB%2Bc0%2BqGnXYDRNXPPfpqDAW16nK2SHLA9fcSrgaWl%2B%2FD2PVyM9Xd8ikMj2u22F0xIKGmGjK0gpAJ17dgxNHO7EPhPWNLTRWKn7FUj6skqY3JOwS0bdopzBEplyAbgaCYO532npry19smY4CQhAQ8E4CxOkpjPCaX%2BC0vjHZ17arhKm7txkeEyksOQigIPhO2NUfxL27YailLkJYpGNU23BRtW9PgZp3izkI5qOp0MtSonnL8xM31QCawkw0a2KHzUmfaJiOm8r%2FpgfLnFa5yDRc%2BHXaFEazPVgKSKmEHX27g8fpMfvIWwwY73Bg9ovwCUWkTfzpOPc0v3eBOQNE5yP1whc2Jflr2reTwcvqQpVkK3YCDH%2B8VDtc7smTDSfgXRj8pfEG3%2FPI3XlenORXpSa17cy2bFk3ArbTYmLuywVlQ7tDPzi4%2BFNhTH20LLzqFxhdOAy33UWoRBMpaaDNYf8qs1gqRenWXa3nD3Rt8rcfTztmJ4gSiW2ELWSHZUttMu4CQzFXgZsDSSZnv9iHtOYyWGp3601KyELnly37faVGheTK99vZu%2B2sa4m%2FYMaY5LaM0G9OG46MvP8fNa8OApkt3TLSLz6zHKsRMG9%2BLuR5cqWPKMNfrlsEGOqUBCYTWF4y78zuY2UnrMSdKvSo9XOglRZhfWs8CzuMtx%2Bfogu310kg9isEgmmvDRfKkCf3cMG%2BgzBS%2B%2Fa15I2fSzEi5kihRFIX0yYOBxIu4ZTFwEDGw6voHDDaKEjDjZ2sAXUjTWwrBFwSzsKmfmDY9%2FfUs6lJgV5nScEhfuxRWes29niPwtFXmmi3YU6sfrm3VqAfiR2cUtJgqs3JALYqDQPk1znPc&X-Amz-Signature=f0e8443c510cb3e4045abfe1cb8fbe1f516431659ecd74c60ed16da5014eab62&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCLRZFM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC0RB04bi15Tzt5DEE8skGLBC0D0bldrP%2Bm3cVvjGg%2F%2FAIgCCygdBHEGbOVksOjxHCFCxwqAjGvQzhddak1cqqS5jQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIEhwztChy2SkU3KkCrcA9Pr8mqjZ%2BvrZB%2Bc0%2BqGnXYDRNXPPfpqDAW16nK2SHLA9fcSrgaWl%2B%2FD2PVyM9Xd8ikMj2u22F0xIKGmGjK0gpAJ17dgxNHO7EPhPWNLTRWKn7FUj6skqY3JOwS0bdopzBEplyAbgaCYO532npry19smY4CQhAQ8E4CxOkpjPCaX%2BC0vjHZ17arhKm7txkeEyksOQigIPhO2NUfxL27YailLkJYpGNU23BRtW9PgZp3izkI5qOp0MtSonnL8xM31QCawkw0a2KHzUmfaJiOm8r%2FpgfLnFa5yDRc%2BHXaFEazPVgKSKmEHX27g8fpMfvIWwwY73Bg9ovwCUWkTfzpOPc0v3eBOQNE5yP1whc2Jflr2reTwcvqQpVkK3YCDH%2B8VDtc7smTDSfgXRj8pfEG3%2FPI3XlenORXpSa17cy2bFk3ArbTYmLuywVlQ7tDPzi4%2BFNhTH20LLzqFxhdOAy33UWoRBMpaaDNYf8qs1gqRenWXa3nD3Rt8rcfTztmJ4gSiW2ELWSHZUttMu4CQzFXgZsDSSZnv9iHtOYyWGp3601KyELnly37faVGheTK99vZu%2B2sa4m%2FYMaY5LaM0G9OG46MvP8fNa8OApkt3TLSLz6zHKsRMG9%2BLuR5cqWPKMNfrlsEGOqUBCYTWF4y78zuY2UnrMSdKvSo9XOglRZhfWs8CzuMtx%2Bfogu310kg9isEgmmvDRfKkCf3cMG%2BgzBS%2B%2Fa15I2fSzEi5kihRFIX0yYOBxIu4ZTFwEDGw6voHDDaKEjDjZ2sAXUjTWwrBFwSzsKmfmDY9%2FfUs6lJgV5nScEhfuxRWes29niPwtFXmmi3YU6sfrm3VqAfiR2cUtJgqs3JALYqDQPk1znPc&X-Amz-Signature=7dd9ffc95acea791474891aa00965fce70ae2ac2153c5c1fc0575107a0e1bf4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCLRZFM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC0RB04bi15Tzt5DEE8skGLBC0D0bldrP%2Bm3cVvjGg%2F%2FAIgCCygdBHEGbOVksOjxHCFCxwqAjGvQzhddak1cqqS5jQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIEhwztChy2SkU3KkCrcA9Pr8mqjZ%2BvrZB%2Bc0%2BqGnXYDRNXPPfpqDAW16nK2SHLA9fcSrgaWl%2B%2FD2PVyM9Xd8ikMj2u22F0xIKGmGjK0gpAJ17dgxNHO7EPhPWNLTRWKn7FUj6skqY3JOwS0bdopzBEplyAbgaCYO532npry19smY4CQhAQ8E4CxOkpjPCaX%2BC0vjHZ17arhKm7txkeEyksOQigIPhO2NUfxL27YailLkJYpGNU23BRtW9PgZp3izkI5qOp0MtSonnL8xM31QCawkw0a2KHzUmfaJiOm8r%2FpgfLnFa5yDRc%2BHXaFEazPVgKSKmEHX27g8fpMfvIWwwY73Bg9ovwCUWkTfzpOPc0v3eBOQNE5yP1whc2Jflr2reTwcvqQpVkK3YCDH%2B8VDtc7smTDSfgXRj8pfEG3%2FPI3XlenORXpSa17cy2bFk3ArbTYmLuywVlQ7tDPzi4%2BFNhTH20LLzqFxhdOAy33UWoRBMpaaDNYf8qs1gqRenWXa3nD3Rt8rcfTztmJ4gSiW2ELWSHZUttMu4CQzFXgZsDSSZnv9iHtOYyWGp3601KyELnly37faVGheTK99vZu%2B2sa4m%2FYMaY5LaM0G9OG46MvP8fNa8OApkt3TLSLz6zHKsRMG9%2BLuR5cqWPKMNfrlsEGOqUBCYTWF4y78zuY2UnrMSdKvSo9XOglRZhfWs8CzuMtx%2Bfogu310kg9isEgmmvDRfKkCf3cMG%2BgzBS%2B%2Fa15I2fSzEi5kihRFIX0yYOBxIu4ZTFwEDGw6voHDDaKEjDjZ2sAXUjTWwrBFwSzsKmfmDY9%2FfUs6lJgV5nScEhfuxRWes29niPwtFXmmi3YU6sfrm3VqAfiR2cUtJgqs3JALYqDQPk1znPc&X-Amz-Signature=0579a4fbfad6816ca9ee32e0654e85459868654c5b48308cfd558dbe22157c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCLRZFM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC0RB04bi15Tzt5DEE8skGLBC0D0bldrP%2Bm3cVvjGg%2F%2FAIgCCygdBHEGbOVksOjxHCFCxwqAjGvQzhddak1cqqS5jQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIEhwztChy2SkU3KkCrcA9Pr8mqjZ%2BvrZB%2Bc0%2BqGnXYDRNXPPfpqDAW16nK2SHLA9fcSrgaWl%2B%2FD2PVyM9Xd8ikMj2u22F0xIKGmGjK0gpAJ17dgxNHO7EPhPWNLTRWKn7FUj6skqY3JOwS0bdopzBEplyAbgaCYO532npry19smY4CQhAQ8E4CxOkpjPCaX%2BC0vjHZ17arhKm7txkeEyksOQigIPhO2NUfxL27YailLkJYpGNU23BRtW9PgZp3izkI5qOp0MtSonnL8xM31QCawkw0a2KHzUmfaJiOm8r%2FpgfLnFa5yDRc%2BHXaFEazPVgKSKmEHX27g8fpMfvIWwwY73Bg9ovwCUWkTfzpOPc0v3eBOQNE5yP1whc2Jflr2reTwcvqQpVkK3YCDH%2B8VDtc7smTDSfgXRj8pfEG3%2FPI3XlenORXpSa17cy2bFk3ArbTYmLuywVlQ7tDPzi4%2BFNhTH20LLzqFxhdOAy33UWoRBMpaaDNYf8qs1gqRenWXa3nD3Rt8rcfTztmJ4gSiW2ELWSHZUttMu4CQzFXgZsDSSZnv9iHtOYyWGp3601KyELnly37faVGheTK99vZu%2B2sa4m%2FYMaY5LaM0G9OG46MvP8fNa8OApkt3TLSLz6zHKsRMG9%2BLuR5cqWPKMNfrlsEGOqUBCYTWF4y78zuY2UnrMSdKvSo9XOglRZhfWs8CzuMtx%2Bfogu310kg9isEgmmvDRfKkCf3cMG%2BgzBS%2B%2Fa15I2fSzEi5kihRFIX0yYOBxIu4ZTFwEDGw6voHDDaKEjDjZ2sAXUjTWwrBFwSzsKmfmDY9%2FfUs6lJgV5nScEhfuxRWes29niPwtFXmmi3YU6sfrm3VqAfiR2cUtJgqs3JALYqDQPk1znPc&X-Amz-Signature=67950643ea54f3fb6f679ce3f5410964b05a3e704255815aae5ea68d15d7650b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMCLRZFM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC0RB04bi15Tzt5DEE8skGLBC0D0bldrP%2Bm3cVvjGg%2F%2FAIgCCygdBHEGbOVksOjxHCFCxwqAjGvQzhddak1cqqS5jQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIEhwztChy2SkU3KkCrcA9Pr8mqjZ%2BvrZB%2Bc0%2BqGnXYDRNXPPfpqDAW16nK2SHLA9fcSrgaWl%2B%2FD2PVyM9Xd8ikMj2u22F0xIKGmGjK0gpAJ17dgxNHO7EPhPWNLTRWKn7FUj6skqY3JOwS0bdopzBEplyAbgaCYO532npry19smY4CQhAQ8E4CxOkpjPCaX%2BC0vjHZ17arhKm7txkeEyksOQigIPhO2NUfxL27YailLkJYpGNU23BRtW9PgZp3izkI5qOp0MtSonnL8xM31QCawkw0a2KHzUmfaJiOm8r%2FpgfLnFa5yDRc%2BHXaFEazPVgKSKmEHX27g8fpMfvIWwwY73Bg9ovwCUWkTfzpOPc0v3eBOQNE5yP1whc2Jflr2reTwcvqQpVkK3YCDH%2B8VDtc7smTDSfgXRj8pfEG3%2FPI3XlenORXpSa17cy2bFk3ArbTYmLuywVlQ7tDPzi4%2BFNhTH20LLzqFxhdOAy33UWoRBMpaaDNYf8qs1gqRenWXa3nD3Rt8rcfTztmJ4gSiW2ELWSHZUttMu4CQzFXgZsDSSZnv9iHtOYyWGp3601KyELnly37faVGheTK99vZu%2B2sa4m%2FYMaY5LaM0G9OG46MvP8fNa8OApkt3TLSLz6zHKsRMG9%2BLuR5cqWPKMNfrlsEGOqUBCYTWF4y78zuY2UnrMSdKvSo9XOglRZhfWs8CzuMtx%2Bfogu310kg9isEgmmvDRfKkCf3cMG%2BgzBS%2B%2Fa15I2fSzEi5kihRFIX0yYOBxIu4ZTFwEDGw6voHDDaKEjDjZ2sAXUjTWwrBFwSzsKmfmDY9%2FfUs6lJgV5nScEhfuxRWes29niPwtFXmmi3YU6sfrm3VqAfiR2cUtJgqs3JALYqDQPk1znPc&X-Amz-Signature=96cdf89733837bfd88a7dfce255dd5e7405a6d0ecc7df087c42403143d9244eb&X-Amz-SignedHeaders=host&x-id=GetObject)
