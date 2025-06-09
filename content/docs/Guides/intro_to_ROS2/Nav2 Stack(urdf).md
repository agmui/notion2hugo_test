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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOSAH7M5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0LCAHNSsrKkU5pwj%2BYZ2edGUQcxrSVT0pmxrEPpMsdAiAESFC8EQMTH50dV3VBLMV0EpR327tf3qDpI68wpxJhACqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyHfXyf4AeqWyCSmKtwDiXHddIP7bp5QPhS%2Feg%2FJlb0P7zW%2BUiTBzApEeleExf2plxnwrp29N8kunSuq7d4z8q5Nu0BWKLtquU7qQJcmTRYVAmj0%2FTbDG1K9cTBc4VvGeFHrgclj5Vjc3PBqSf0vQ85wvuZXppfPCB8OoDEwSuK1A2y%2F8MXnFYZQeTSbf%2FfJJLHFrdBWN999ZEkCmyvurW%2FUiAT3FHXuncpD5oFbIYB0a4lah4cg3kWLjq1L6G0l55KynpHKGo1zUqTKTujh9BerCpQ4yEeAqi26rsNudBCFapPR10Z3AcBEw3LEYBKuptWGB3gSaDKLJcrekIh0qP44RlPL2KMx5lglCyoAMI2IRgBe033aM9zBnpfmNU%2BuLIzl2JuAq9QAZJGOPNyaJfFEyLtz%2BMqqcgAKUbYWuzZX5BnyGgKUtm4GfXEpHfUxI%2F3Ks6RZ7EK9MilQa6QnXJ%2BhiGC20z%2B2YwBz%2BCsELCDR0ckd014LGtXZ9dEk489HLzBndnhegf1GaZoTaOmGj1iojXbSpUq8hhfFYqDrTlTrAAk6PzlVG0UFS%2BfnILIt9KtZT7Efwo%2BeQZhLw2jshP4dxlESbP6%2FTBb6sFMnSXHumh17E7G1qIoHfAESTCLwG008gHJ3lkwXdaMwj5acwgY6pgFgbuaDbhiZQFhh4Zpq2B5mTEgjiwSBNaKuIly9HUr5DgUADtjk5AvzletwCswJ2IvaQ2Jlr19GG6B%2BjjJ%2BvU8g4qMJAP6nm%2BpPuZPRVvNr2rh6Kdm%2BFn39gRjaN2jMw4olc%2B4j4tD1I08vz9%2FJW8ealOs93jGQMnAa%2BNB2hss9H0mG8ZLkjeCvWXBQFYHDwixG5WcPZlSRWCXDzvBA1s1B%2BJ2LaElb&X-Amz-Signature=aeab00ac55bd7d81685eda653ac323be80086ac185f066743b4866c6d8a2c75e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOSAH7M5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0LCAHNSsrKkU5pwj%2BYZ2edGUQcxrSVT0pmxrEPpMsdAiAESFC8EQMTH50dV3VBLMV0EpR327tf3qDpI68wpxJhACqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyHfXyf4AeqWyCSmKtwDiXHddIP7bp5QPhS%2Feg%2FJlb0P7zW%2BUiTBzApEeleExf2plxnwrp29N8kunSuq7d4z8q5Nu0BWKLtquU7qQJcmTRYVAmj0%2FTbDG1K9cTBc4VvGeFHrgclj5Vjc3PBqSf0vQ85wvuZXppfPCB8OoDEwSuK1A2y%2F8MXnFYZQeTSbf%2FfJJLHFrdBWN999ZEkCmyvurW%2FUiAT3FHXuncpD5oFbIYB0a4lah4cg3kWLjq1L6G0l55KynpHKGo1zUqTKTujh9BerCpQ4yEeAqi26rsNudBCFapPR10Z3AcBEw3LEYBKuptWGB3gSaDKLJcrekIh0qP44RlPL2KMx5lglCyoAMI2IRgBe033aM9zBnpfmNU%2BuLIzl2JuAq9QAZJGOPNyaJfFEyLtz%2BMqqcgAKUbYWuzZX5BnyGgKUtm4GfXEpHfUxI%2F3Ks6RZ7EK9MilQa6QnXJ%2BhiGC20z%2B2YwBz%2BCsELCDR0ckd014LGtXZ9dEk489HLzBndnhegf1GaZoTaOmGj1iojXbSpUq8hhfFYqDrTlTrAAk6PzlVG0UFS%2BfnILIt9KtZT7Efwo%2BeQZhLw2jshP4dxlESbP6%2FTBb6sFMnSXHumh17E7G1qIoHfAESTCLwG008gHJ3lkwXdaMwj5acwgY6pgFgbuaDbhiZQFhh4Zpq2B5mTEgjiwSBNaKuIly9HUr5DgUADtjk5AvzletwCswJ2IvaQ2Jlr19GG6B%2BjjJ%2BvU8g4qMJAP6nm%2BpPuZPRVvNr2rh6Kdm%2BFn39gRjaN2jMw4olc%2B4j4tD1I08vz9%2FJW8ealOs93jGQMnAa%2BNB2hss9H0mG8ZLkjeCvWXBQFYHDwixG5WcPZlSRWCXDzvBA1s1B%2BJ2LaElb&X-Amz-Signature=391e2a7522ef5173d8f158b467e4993047137aa70669296d5913539ee3058edc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOSAH7M5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0LCAHNSsrKkU5pwj%2BYZ2edGUQcxrSVT0pmxrEPpMsdAiAESFC8EQMTH50dV3VBLMV0EpR327tf3qDpI68wpxJhACqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyHfXyf4AeqWyCSmKtwDiXHddIP7bp5QPhS%2Feg%2FJlb0P7zW%2BUiTBzApEeleExf2plxnwrp29N8kunSuq7d4z8q5Nu0BWKLtquU7qQJcmTRYVAmj0%2FTbDG1K9cTBc4VvGeFHrgclj5Vjc3PBqSf0vQ85wvuZXppfPCB8OoDEwSuK1A2y%2F8MXnFYZQeTSbf%2FfJJLHFrdBWN999ZEkCmyvurW%2FUiAT3FHXuncpD5oFbIYB0a4lah4cg3kWLjq1L6G0l55KynpHKGo1zUqTKTujh9BerCpQ4yEeAqi26rsNudBCFapPR10Z3AcBEw3LEYBKuptWGB3gSaDKLJcrekIh0qP44RlPL2KMx5lglCyoAMI2IRgBe033aM9zBnpfmNU%2BuLIzl2JuAq9QAZJGOPNyaJfFEyLtz%2BMqqcgAKUbYWuzZX5BnyGgKUtm4GfXEpHfUxI%2F3Ks6RZ7EK9MilQa6QnXJ%2BhiGC20z%2B2YwBz%2BCsELCDR0ckd014LGtXZ9dEk489HLzBndnhegf1GaZoTaOmGj1iojXbSpUq8hhfFYqDrTlTrAAk6PzlVG0UFS%2BfnILIt9KtZT7Efwo%2BeQZhLw2jshP4dxlESbP6%2FTBb6sFMnSXHumh17E7G1qIoHfAESTCLwG008gHJ3lkwXdaMwj5acwgY6pgFgbuaDbhiZQFhh4Zpq2B5mTEgjiwSBNaKuIly9HUr5DgUADtjk5AvzletwCswJ2IvaQ2Jlr19GG6B%2BjjJ%2BvU8g4qMJAP6nm%2BpPuZPRVvNr2rh6Kdm%2BFn39gRjaN2jMw4olc%2B4j4tD1I08vz9%2FJW8ealOs93jGQMnAa%2BNB2hss9H0mG8ZLkjeCvWXBQFYHDwixG5WcPZlSRWCXDzvBA1s1B%2BJ2LaElb&X-Amz-Signature=27b4d76437efcb08c9e13acda69ff8558c8e6bca5d2111f476308ab71e85403e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOSAH7M5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0LCAHNSsrKkU5pwj%2BYZ2edGUQcxrSVT0pmxrEPpMsdAiAESFC8EQMTH50dV3VBLMV0EpR327tf3qDpI68wpxJhACqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyHfXyf4AeqWyCSmKtwDiXHddIP7bp5QPhS%2Feg%2FJlb0P7zW%2BUiTBzApEeleExf2plxnwrp29N8kunSuq7d4z8q5Nu0BWKLtquU7qQJcmTRYVAmj0%2FTbDG1K9cTBc4VvGeFHrgclj5Vjc3PBqSf0vQ85wvuZXppfPCB8OoDEwSuK1A2y%2F8MXnFYZQeTSbf%2FfJJLHFrdBWN999ZEkCmyvurW%2FUiAT3FHXuncpD5oFbIYB0a4lah4cg3kWLjq1L6G0l55KynpHKGo1zUqTKTujh9BerCpQ4yEeAqi26rsNudBCFapPR10Z3AcBEw3LEYBKuptWGB3gSaDKLJcrekIh0qP44RlPL2KMx5lglCyoAMI2IRgBe033aM9zBnpfmNU%2BuLIzl2JuAq9QAZJGOPNyaJfFEyLtz%2BMqqcgAKUbYWuzZX5BnyGgKUtm4GfXEpHfUxI%2F3Ks6RZ7EK9MilQa6QnXJ%2BhiGC20z%2B2YwBz%2BCsELCDR0ckd014LGtXZ9dEk489HLzBndnhegf1GaZoTaOmGj1iojXbSpUq8hhfFYqDrTlTrAAk6PzlVG0UFS%2BfnILIt9KtZT7Efwo%2BeQZhLw2jshP4dxlESbP6%2FTBb6sFMnSXHumh17E7G1qIoHfAESTCLwG008gHJ3lkwXdaMwj5acwgY6pgFgbuaDbhiZQFhh4Zpq2B5mTEgjiwSBNaKuIly9HUr5DgUADtjk5AvzletwCswJ2IvaQ2Jlr19GG6B%2BjjJ%2BvU8g4qMJAP6nm%2BpPuZPRVvNr2rh6Kdm%2BFn39gRjaN2jMw4olc%2B4j4tD1I08vz9%2FJW8ealOs93jGQMnAa%2BNB2hss9H0mG8ZLkjeCvWXBQFYHDwixG5WcPZlSRWCXDzvBA1s1B%2BJ2LaElb&X-Amz-Signature=a34b6df6552ab0d8ccdd04cddde653b9532e21f09f7b2c58801f1622f0fa2cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOSAH7M5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0LCAHNSsrKkU5pwj%2BYZ2edGUQcxrSVT0pmxrEPpMsdAiAESFC8EQMTH50dV3VBLMV0EpR327tf3qDpI68wpxJhACqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyHfXyf4AeqWyCSmKtwDiXHddIP7bp5QPhS%2Feg%2FJlb0P7zW%2BUiTBzApEeleExf2plxnwrp29N8kunSuq7d4z8q5Nu0BWKLtquU7qQJcmTRYVAmj0%2FTbDG1K9cTBc4VvGeFHrgclj5Vjc3PBqSf0vQ85wvuZXppfPCB8OoDEwSuK1A2y%2F8MXnFYZQeTSbf%2FfJJLHFrdBWN999ZEkCmyvurW%2FUiAT3FHXuncpD5oFbIYB0a4lah4cg3kWLjq1L6G0l55KynpHKGo1zUqTKTujh9BerCpQ4yEeAqi26rsNudBCFapPR10Z3AcBEw3LEYBKuptWGB3gSaDKLJcrekIh0qP44RlPL2KMx5lglCyoAMI2IRgBe033aM9zBnpfmNU%2BuLIzl2JuAq9QAZJGOPNyaJfFEyLtz%2BMqqcgAKUbYWuzZX5BnyGgKUtm4GfXEpHfUxI%2F3Ks6RZ7EK9MilQa6QnXJ%2BhiGC20z%2B2YwBz%2BCsELCDR0ckd014LGtXZ9dEk489HLzBndnhegf1GaZoTaOmGj1iojXbSpUq8hhfFYqDrTlTrAAk6PzlVG0UFS%2BfnILIt9KtZT7Efwo%2BeQZhLw2jshP4dxlESbP6%2FTBb6sFMnSXHumh17E7G1qIoHfAESTCLwG008gHJ3lkwXdaMwj5acwgY6pgFgbuaDbhiZQFhh4Zpq2B5mTEgjiwSBNaKuIly9HUr5DgUADtjk5AvzletwCswJ2IvaQ2Jlr19GG6B%2BjjJ%2BvU8g4qMJAP6nm%2BpPuZPRVvNr2rh6Kdm%2BFn39gRjaN2jMw4olc%2B4j4tD1I08vz9%2FJW8ealOs93jGQMnAa%2BNB2hss9H0mG8ZLkjeCvWXBQFYHDwixG5WcPZlSRWCXDzvBA1s1B%2BJ2LaElb&X-Amz-Signature=436164300c74a6348df90ec2b5ef2ac684f2fed0ee1779a44a96b64217ee637d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOSAH7M5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0LCAHNSsrKkU5pwj%2BYZ2edGUQcxrSVT0pmxrEPpMsdAiAESFC8EQMTH50dV3VBLMV0EpR327tf3qDpI68wpxJhACqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyHfXyf4AeqWyCSmKtwDiXHddIP7bp5QPhS%2Feg%2FJlb0P7zW%2BUiTBzApEeleExf2plxnwrp29N8kunSuq7d4z8q5Nu0BWKLtquU7qQJcmTRYVAmj0%2FTbDG1K9cTBc4VvGeFHrgclj5Vjc3PBqSf0vQ85wvuZXppfPCB8OoDEwSuK1A2y%2F8MXnFYZQeTSbf%2FfJJLHFrdBWN999ZEkCmyvurW%2FUiAT3FHXuncpD5oFbIYB0a4lah4cg3kWLjq1L6G0l55KynpHKGo1zUqTKTujh9BerCpQ4yEeAqi26rsNudBCFapPR10Z3AcBEw3LEYBKuptWGB3gSaDKLJcrekIh0qP44RlPL2KMx5lglCyoAMI2IRgBe033aM9zBnpfmNU%2BuLIzl2JuAq9QAZJGOPNyaJfFEyLtz%2BMqqcgAKUbYWuzZX5BnyGgKUtm4GfXEpHfUxI%2F3Ks6RZ7EK9MilQa6QnXJ%2BhiGC20z%2B2YwBz%2BCsELCDR0ckd014LGtXZ9dEk489HLzBndnhegf1GaZoTaOmGj1iojXbSpUq8hhfFYqDrTlTrAAk6PzlVG0UFS%2BfnILIt9KtZT7Efwo%2BeQZhLw2jshP4dxlESbP6%2FTBb6sFMnSXHumh17E7G1qIoHfAESTCLwG008gHJ3lkwXdaMwj5acwgY6pgFgbuaDbhiZQFhh4Zpq2B5mTEgjiwSBNaKuIly9HUr5DgUADtjk5AvzletwCswJ2IvaQ2Jlr19GG6B%2BjjJ%2BvU8g4qMJAP6nm%2BpPuZPRVvNr2rh6Kdm%2BFn39gRjaN2jMw4olc%2B4j4tD1I08vz9%2FJW8ealOs93jGQMnAa%2BNB2hss9H0mG8ZLkjeCvWXBQFYHDwixG5WcPZlSRWCXDzvBA1s1B%2BJ2LaElb&X-Amz-Signature=9dfae3260fda3281ff1ad3c71706b14b2e521d9a208d1b1c8886d0e4b7abe3f8&X-Amz-SignedHeaders=host&x-id=GetObject)
