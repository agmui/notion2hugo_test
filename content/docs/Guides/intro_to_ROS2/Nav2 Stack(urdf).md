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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CPLFCS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICF5GUBS38gKCjI6FMaq2ceH42%2Fw5Pxr%2BfvgPW6slJx3AiEA38exOErfwHmH0Z8TvTjUODhO6%2FZr7wML2txSb0qwAy0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIlP6qLmGMWGKg29XCrcA72iLOV3rI%2FWcpUzqANBDFn7yr88HnpAyOX0V8JPgNCGFKRUNYgMcbK70wGbiCzu9VDApqEC4sK4fShWBrTVYx6K7%2Ff5%2BpBrtKDLVVi1R%2BCQ231mYRBSCSGnSLxx%2FR%2Bld5AcA52tKyPMLztDCXIbfCmpTGBiO03guN0QczP5kutIPJbvcAei0ebt9fimIEiXE%2FdPmggyC0CyHUcvNqPWm%2F3ojYNnZSVxoUmyUvqKdvFiya1vVt%2FCXozwQsIDRV4jbiiPpju%2BywsgGh6zV4XX8A43wb1F7F46eftLof0Xq%2BW8cMM1Ov4ZfnP%2FEVyk9IVh1DKyO9fXHEV2%2F%2B897v8%2FsQbZSTdgy5tx%2BTod2aByY5Pu11OZYIp0XwndH9imrPENO1b3a%2FwKVU6B%2FLtFBbDCMbEyNzp%2BG6tNo6WZW0%2Fz5fawW3klVlN2SBG%2BnwwwsfIturJTwRHgdJ79ItpD1xN7e24VLgwsTTHEUiUerAtR3vPb92E4I3lW47d0UiBnG%2BrCJZtKV2NqA9LO%2FXHKB2HnHttGgOKvsgby%2Byf4GE%2Fmzjd2R23OjaAopg3YSnUogoLlaoAsaaFFpz3nDSE4%2Fza%2F4fsiu%2BqAPkQplFIxcjsTpCiJ6fKUpMWjigltRaNvMNG86L4GOqUBz9YqTDmWpvaqlUFYhuKuZOOIHD9uMGpu68MKiug9%2F83lYrnTMzq%2BaYSYRCE5LF6hTFAut66uWhUDQbiMKgL%2F5Mx4kDQVWyXDyWHk5fsz9GvUQsSptUFb%2FAVWPt8XxweD%2BeZ2lM%2FfrkA0%2FzoISFc%2Ba62qU52FmWtv5OpZixH0hCYnmvhMj6%2FxU1wFkKjePkIPcF%2BcC5sWp1PA%2FT%2B0dAuC2mnxE0wp&X-Amz-Signature=ae019e73d34286117a523f3bb6e4ddae0d59478fb1b4be36e637033cc384ba7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CPLFCS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICF5GUBS38gKCjI6FMaq2ceH42%2Fw5Pxr%2BfvgPW6slJx3AiEA38exOErfwHmH0Z8TvTjUODhO6%2FZr7wML2txSb0qwAy0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIlP6qLmGMWGKg29XCrcA72iLOV3rI%2FWcpUzqANBDFn7yr88HnpAyOX0V8JPgNCGFKRUNYgMcbK70wGbiCzu9VDApqEC4sK4fShWBrTVYx6K7%2Ff5%2BpBrtKDLVVi1R%2BCQ231mYRBSCSGnSLxx%2FR%2Bld5AcA52tKyPMLztDCXIbfCmpTGBiO03guN0QczP5kutIPJbvcAei0ebt9fimIEiXE%2FdPmggyC0CyHUcvNqPWm%2F3ojYNnZSVxoUmyUvqKdvFiya1vVt%2FCXozwQsIDRV4jbiiPpju%2BywsgGh6zV4XX8A43wb1F7F46eftLof0Xq%2BW8cMM1Ov4ZfnP%2FEVyk9IVh1DKyO9fXHEV2%2F%2B897v8%2FsQbZSTdgy5tx%2BTod2aByY5Pu11OZYIp0XwndH9imrPENO1b3a%2FwKVU6B%2FLtFBbDCMbEyNzp%2BG6tNo6WZW0%2Fz5fawW3klVlN2SBG%2BnwwwsfIturJTwRHgdJ79ItpD1xN7e24VLgwsTTHEUiUerAtR3vPb92E4I3lW47d0UiBnG%2BrCJZtKV2NqA9LO%2FXHKB2HnHttGgOKvsgby%2Byf4GE%2Fmzjd2R23OjaAopg3YSnUogoLlaoAsaaFFpz3nDSE4%2Fza%2F4fsiu%2BqAPkQplFIxcjsTpCiJ6fKUpMWjigltRaNvMNG86L4GOqUBz9YqTDmWpvaqlUFYhuKuZOOIHD9uMGpu68MKiug9%2F83lYrnTMzq%2BaYSYRCE5LF6hTFAut66uWhUDQbiMKgL%2F5Mx4kDQVWyXDyWHk5fsz9GvUQsSptUFb%2FAVWPt8XxweD%2BeZ2lM%2FfrkA0%2FzoISFc%2Ba62qU52FmWtv5OpZixH0hCYnmvhMj6%2FxU1wFkKjePkIPcF%2BcC5sWp1PA%2FT%2B0dAuC2mnxE0wp&X-Amz-Signature=351e10ea7289e2902e4f925821ce41f582b0c6fe1513a7f70eab9ce6cfa4030c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CPLFCS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICF5GUBS38gKCjI6FMaq2ceH42%2Fw5Pxr%2BfvgPW6slJx3AiEA38exOErfwHmH0Z8TvTjUODhO6%2FZr7wML2txSb0qwAy0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIlP6qLmGMWGKg29XCrcA72iLOV3rI%2FWcpUzqANBDFn7yr88HnpAyOX0V8JPgNCGFKRUNYgMcbK70wGbiCzu9VDApqEC4sK4fShWBrTVYx6K7%2Ff5%2BpBrtKDLVVi1R%2BCQ231mYRBSCSGnSLxx%2FR%2Bld5AcA52tKyPMLztDCXIbfCmpTGBiO03guN0QczP5kutIPJbvcAei0ebt9fimIEiXE%2FdPmggyC0CyHUcvNqPWm%2F3ojYNnZSVxoUmyUvqKdvFiya1vVt%2FCXozwQsIDRV4jbiiPpju%2BywsgGh6zV4XX8A43wb1F7F46eftLof0Xq%2BW8cMM1Ov4ZfnP%2FEVyk9IVh1DKyO9fXHEV2%2F%2B897v8%2FsQbZSTdgy5tx%2BTod2aByY5Pu11OZYIp0XwndH9imrPENO1b3a%2FwKVU6B%2FLtFBbDCMbEyNzp%2BG6tNo6WZW0%2Fz5fawW3klVlN2SBG%2BnwwwsfIturJTwRHgdJ79ItpD1xN7e24VLgwsTTHEUiUerAtR3vPb92E4I3lW47d0UiBnG%2BrCJZtKV2NqA9LO%2FXHKB2HnHttGgOKvsgby%2Byf4GE%2Fmzjd2R23OjaAopg3YSnUogoLlaoAsaaFFpz3nDSE4%2Fza%2F4fsiu%2BqAPkQplFIxcjsTpCiJ6fKUpMWjigltRaNvMNG86L4GOqUBz9YqTDmWpvaqlUFYhuKuZOOIHD9uMGpu68MKiug9%2F83lYrnTMzq%2BaYSYRCE5LF6hTFAut66uWhUDQbiMKgL%2F5Mx4kDQVWyXDyWHk5fsz9GvUQsSptUFb%2FAVWPt8XxweD%2BeZ2lM%2FfrkA0%2FzoISFc%2Ba62qU52FmWtv5OpZixH0hCYnmvhMj6%2FxU1wFkKjePkIPcF%2BcC5sWp1PA%2FT%2B0dAuC2mnxE0wp&X-Amz-Signature=54b46adb087f3078ff77f18517a4eed5da21fdf847cd991e381b17a2f34e42bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CPLFCS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICF5GUBS38gKCjI6FMaq2ceH42%2Fw5Pxr%2BfvgPW6slJx3AiEA38exOErfwHmH0Z8TvTjUODhO6%2FZr7wML2txSb0qwAy0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIlP6qLmGMWGKg29XCrcA72iLOV3rI%2FWcpUzqANBDFn7yr88HnpAyOX0V8JPgNCGFKRUNYgMcbK70wGbiCzu9VDApqEC4sK4fShWBrTVYx6K7%2Ff5%2BpBrtKDLVVi1R%2BCQ231mYRBSCSGnSLxx%2FR%2Bld5AcA52tKyPMLztDCXIbfCmpTGBiO03guN0QczP5kutIPJbvcAei0ebt9fimIEiXE%2FdPmggyC0CyHUcvNqPWm%2F3ojYNnZSVxoUmyUvqKdvFiya1vVt%2FCXozwQsIDRV4jbiiPpju%2BywsgGh6zV4XX8A43wb1F7F46eftLof0Xq%2BW8cMM1Ov4ZfnP%2FEVyk9IVh1DKyO9fXHEV2%2F%2B897v8%2FsQbZSTdgy5tx%2BTod2aByY5Pu11OZYIp0XwndH9imrPENO1b3a%2FwKVU6B%2FLtFBbDCMbEyNzp%2BG6tNo6WZW0%2Fz5fawW3klVlN2SBG%2BnwwwsfIturJTwRHgdJ79ItpD1xN7e24VLgwsTTHEUiUerAtR3vPb92E4I3lW47d0UiBnG%2BrCJZtKV2NqA9LO%2FXHKB2HnHttGgOKvsgby%2Byf4GE%2Fmzjd2R23OjaAopg3YSnUogoLlaoAsaaFFpz3nDSE4%2Fza%2F4fsiu%2BqAPkQplFIxcjsTpCiJ6fKUpMWjigltRaNvMNG86L4GOqUBz9YqTDmWpvaqlUFYhuKuZOOIHD9uMGpu68MKiug9%2F83lYrnTMzq%2BaYSYRCE5LF6hTFAut66uWhUDQbiMKgL%2F5Mx4kDQVWyXDyWHk5fsz9GvUQsSptUFb%2FAVWPt8XxweD%2BeZ2lM%2FfrkA0%2FzoISFc%2Ba62qU52FmWtv5OpZixH0hCYnmvhMj6%2FxU1wFkKjePkIPcF%2BcC5sWp1PA%2FT%2B0dAuC2mnxE0wp&X-Amz-Signature=7c3366f48953f7341c2935ceaa3f0603902a970a4ba72eb93232b4df3b8b301f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CPLFCS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICF5GUBS38gKCjI6FMaq2ceH42%2Fw5Pxr%2BfvgPW6slJx3AiEA38exOErfwHmH0Z8TvTjUODhO6%2FZr7wML2txSb0qwAy0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIlP6qLmGMWGKg29XCrcA72iLOV3rI%2FWcpUzqANBDFn7yr88HnpAyOX0V8JPgNCGFKRUNYgMcbK70wGbiCzu9VDApqEC4sK4fShWBrTVYx6K7%2Ff5%2BpBrtKDLVVi1R%2BCQ231mYRBSCSGnSLxx%2FR%2Bld5AcA52tKyPMLztDCXIbfCmpTGBiO03guN0QczP5kutIPJbvcAei0ebt9fimIEiXE%2FdPmggyC0CyHUcvNqPWm%2F3ojYNnZSVxoUmyUvqKdvFiya1vVt%2FCXozwQsIDRV4jbiiPpju%2BywsgGh6zV4XX8A43wb1F7F46eftLof0Xq%2BW8cMM1Ov4ZfnP%2FEVyk9IVh1DKyO9fXHEV2%2F%2B897v8%2FsQbZSTdgy5tx%2BTod2aByY5Pu11OZYIp0XwndH9imrPENO1b3a%2FwKVU6B%2FLtFBbDCMbEyNzp%2BG6tNo6WZW0%2Fz5fawW3klVlN2SBG%2BnwwwsfIturJTwRHgdJ79ItpD1xN7e24VLgwsTTHEUiUerAtR3vPb92E4I3lW47d0UiBnG%2BrCJZtKV2NqA9LO%2FXHKB2HnHttGgOKvsgby%2Byf4GE%2Fmzjd2R23OjaAopg3YSnUogoLlaoAsaaFFpz3nDSE4%2Fza%2F4fsiu%2BqAPkQplFIxcjsTpCiJ6fKUpMWjigltRaNvMNG86L4GOqUBz9YqTDmWpvaqlUFYhuKuZOOIHD9uMGpu68MKiug9%2F83lYrnTMzq%2BaYSYRCE5LF6hTFAut66uWhUDQbiMKgL%2F5Mx4kDQVWyXDyWHk5fsz9GvUQsSptUFb%2FAVWPt8XxweD%2BeZ2lM%2FfrkA0%2FzoISFc%2Ba62qU52FmWtv5OpZixH0hCYnmvhMj6%2FxU1wFkKjePkIPcF%2BcC5sWp1PA%2FT%2B0dAuC2mnxE0wp&X-Amz-Signature=6d51645ee4152f4fa10703383258e506fa1d7e2b60ecd82258d33cab3914d8a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674CPLFCS%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICF5GUBS38gKCjI6FMaq2ceH42%2Fw5Pxr%2BfvgPW6slJx3AiEA38exOErfwHmH0Z8TvTjUODhO6%2FZr7wML2txSb0qwAy0q%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDIlP6qLmGMWGKg29XCrcA72iLOV3rI%2FWcpUzqANBDFn7yr88HnpAyOX0V8JPgNCGFKRUNYgMcbK70wGbiCzu9VDApqEC4sK4fShWBrTVYx6K7%2Ff5%2BpBrtKDLVVi1R%2BCQ231mYRBSCSGnSLxx%2FR%2Bld5AcA52tKyPMLztDCXIbfCmpTGBiO03guN0QczP5kutIPJbvcAei0ebt9fimIEiXE%2FdPmggyC0CyHUcvNqPWm%2F3ojYNnZSVxoUmyUvqKdvFiya1vVt%2FCXozwQsIDRV4jbiiPpju%2BywsgGh6zV4XX8A43wb1F7F46eftLof0Xq%2BW8cMM1Ov4ZfnP%2FEVyk9IVh1DKyO9fXHEV2%2F%2B897v8%2FsQbZSTdgy5tx%2BTod2aByY5Pu11OZYIp0XwndH9imrPENO1b3a%2FwKVU6B%2FLtFBbDCMbEyNzp%2BG6tNo6WZW0%2Fz5fawW3klVlN2SBG%2BnwwwsfIturJTwRHgdJ79ItpD1xN7e24VLgwsTTHEUiUerAtR3vPb92E4I3lW47d0UiBnG%2BrCJZtKV2NqA9LO%2FXHKB2HnHttGgOKvsgby%2Byf4GE%2Fmzjd2R23OjaAopg3YSnUogoLlaoAsaaFFpz3nDSE4%2Fza%2F4fsiu%2BqAPkQplFIxcjsTpCiJ6fKUpMWjigltRaNvMNG86L4GOqUBz9YqTDmWpvaqlUFYhuKuZOOIHD9uMGpu68MKiug9%2F83lYrnTMzq%2BaYSYRCE5LF6hTFAut66uWhUDQbiMKgL%2F5Mx4kDQVWyXDyWHk5fsz9GvUQsSptUFb%2FAVWPt8XxweD%2BeZ2lM%2FfrkA0%2FzoISFc%2Ba62qU52FmWtv5OpZixH0hCYnmvhMj6%2FxU1wFkKjePkIPcF%2BcC5sWp1PA%2FT%2B0dAuC2mnxE0wp&X-Amz-Signature=a2f0886f02ca91ba1beca3aafec12e3684a004887039377f846beb0187539cd3&X-Amz-SignedHeaders=host&x-id=GetObject)
