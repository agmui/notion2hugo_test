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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TN5JVH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQpt%2FNM%2F6Mkhfia2pJlKjlTCdLR9NQfx5hsw7o867pUAIgQsTdYbw0lY4A8V65Svub4xuIlKbdxFRWTHAzWxDi8Dkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLnjCcuZ4Iu44w8vPCrcA4juNGhRgeBe1KyVcix5CLD17EAilMvES0q4JKox0QWhFuTIzb1MXtsyUK%2FUhrX4y4g9BY%2Fdokhhh2lg5eoR646LUow0KcaVJB7lHd%2F%2FBq5LhnV5WC5I16dQOa2aeQoxwtA2NnjTzZmbZyQ9JoMm%2FisHK8LYfxQtCCIDI0n6nL3rwfxo5rFPF3D4opMpEYrgMWPtGYpNJ%2BKfjO9wjNJmC4Z3dY0M%2Fls%2BdjPGodlZf8jl%2BigRxp6PRm5s%2FQ1R7Z85%2Fw%2FG1u9X41XpOZBpMRnxP4m6TS%2FeFZltZwpCHxnurYOPNqj%2Fpo2XNGaEX2zLO2jhlXi2Y2cNvlJipgsqiyrpyjpYV2a%2FMtqNKhBwHm9cdFfJRuD9gYpIar2pcFKOVqs5%2B%2F3vxOT%2FdzBd2MZY%2FRh9jttnGQnhN%2BEDYz1hxLfx0SkIYK%2FJ7Dm75NrlPrsRoGbO0huL1g90IcuXnvnYHMUE%2BMgSgw3UDt843MejuUecpycKFIqMvJj2JiJT532BDFaU718BY6t9lKVkZjdI%2FatoyDJ0Gy0QLeehXxceMPxt6pXlwtXpGH2RxDu5LTd5373B6BB3Vb1ZCM7e9M%2FD0Q9s55PSjXpYNsrO1HUKYX2Z73PSvFD%2BAf64B1HJsqZlMNeHq74GOqUBwadn5XhWF%2BlcvlsCLKXbF6%2BPvBpu9rYDh5kTh8u6HQgv4LmEAN%2BqiStSr1zACwb9gUvjXFv6ovJgo6VYmYxs1tNLl3T%2Fit4D24FFIGrOBh7B1dYSJrUczHwGouSZRDLcWG6ec71SSYvW3zz%2BziZPOm1JOUvwa%2FRaYgflAqPeEob80FY0VDF30e07eHXJY4kuxRGYjEiOBi0wj7Eud%2BpPEmLsQ6c1&X-Amz-Signature=7201f858879fc5948c300e50552074e4b29b6e945b2f58a2d94f56f0dff7b35d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TN5JVH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQpt%2FNM%2F6Mkhfia2pJlKjlTCdLR9NQfx5hsw7o867pUAIgQsTdYbw0lY4A8V65Svub4xuIlKbdxFRWTHAzWxDi8Dkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLnjCcuZ4Iu44w8vPCrcA4juNGhRgeBe1KyVcix5CLD17EAilMvES0q4JKox0QWhFuTIzb1MXtsyUK%2FUhrX4y4g9BY%2Fdokhhh2lg5eoR646LUow0KcaVJB7lHd%2F%2FBq5LhnV5WC5I16dQOa2aeQoxwtA2NnjTzZmbZyQ9JoMm%2FisHK8LYfxQtCCIDI0n6nL3rwfxo5rFPF3D4opMpEYrgMWPtGYpNJ%2BKfjO9wjNJmC4Z3dY0M%2Fls%2BdjPGodlZf8jl%2BigRxp6PRm5s%2FQ1R7Z85%2Fw%2FG1u9X41XpOZBpMRnxP4m6TS%2FeFZltZwpCHxnurYOPNqj%2Fpo2XNGaEX2zLO2jhlXi2Y2cNvlJipgsqiyrpyjpYV2a%2FMtqNKhBwHm9cdFfJRuD9gYpIar2pcFKOVqs5%2B%2F3vxOT%2FdzBd2MZY%2FRh9jttnGQnhN%2BEDYz1hxLfx0SkIYK%2FJ7Dm75NrlPrsRoGbO0huL1g90IcuXnvnYHMUE%2BMgSgw3UDt843MejuUecpycKFIqMvJj2JiJT532BDFaU718BY6t9lKVkZjdI%2FatoyDJ0Gy0QLeehXxceMPxt6pXlwtXpGH2RxDu5LTd5373B6BB3Vb1ZCM7e9M%2FD0Q9s55PSjXpYNsrO1HUKYX2Z73PSvFD%2BAf64B1HJsqZlMNeHq74GOqUBwadn5XhWF%2BlcvlsCLKXbF6%2BPvBpu9rYDh5kTh8u6HQgv4LmEAN%2BqiStSr1zACwb9gUvjXFv6ovJgo6VYmYxs1tNLl3T%2Fit4D24FFIGrOBh7B1dYSJrUczHwGouSZRDLcWG6ec71SSYvW3zz%2BziZPOm1JOUvwa%2FRaYgflAqPeEob80FY0VDF30e07eHXJY4kuxRGYjEiOBi0wj7Eud%2BpPEmLsQ6c1&X-Amz-Signature=713f1e4b1eafc241ab10422bdf101d7d853bf78274d050aafe9bec29f5f97b41&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TN5JVH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQpt%2FNM%2F6Mkhfia2pJlKjlTCdLR9NQfx5hsw7o867pUAIgQsTdYbw0lY4A8V65Svub4xuIlKbdxFRWTHAzWxDi8Dkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLnjCcuZ4Iu44w8vPCrcA4juNGhRgeBe1KyVcix5CLD17EAilMvES0q4JKox0QWhFuTIzb1MXtsyUK%2FUhrX4y4g9BY%2Fdokhhh2lg5eoR646LUow0KcaVJB7lHd%2F%2FBq5LhnV5WC5I16dQOa2aeQoxwtA2NnjTzZmbZyQ9JoMm%2FisHK8LYfxQtCCIDI0n6nL3rwfxo5rFPF3D4opMpEYrgMWPtGYpNJ%2BKfjO9wjNJmC4Z3dY0M%2Fls%2BdjPGodlZf8jl%2BigRxp6PRm5s%2FQ1R7Z85%2Fw%2FG1u9X41XpOZBpMRnxP4m6TS%2FeFZltZwpCHxnurYOPNqj%2Fpo2XNGaEX2zLO2jhlXi2Y2cNvlJipgsqiyrpyjpYV2a%2FMtqNKhBwHm9cdFfJRuD9gYpIar2pcFKOVqs5%2B%2F3vxOT%2FdzBd2MZY%2FRh9jttnGQnhN%2BEDYz1hxLfx0SkIYK%2FJ7Dm75NrlPrsRoGbO0huL1g90IcuXnvnYHMUE%2BMgSgw3UDt843MejuUecpycKFIqMvJj2JiJT532BDFaU718BY6t9lKVkZjdI%2FatoyDJ0Gy0QLeehXxceMPxt6pXlwtXpGH2RxDu5LTd5373B6BB3Vb1ZCM7e9M%2FD0Q9s55PSjXpYNsrO1HUKYX2Z73PSvFD%2BAf64B1HJsqZlMNeHq74GOqUBwadn5XhWF%2BlcvlsCLKXbF6%2BPvBpu9rYDh5kTh8u6HQgv4LmEAN%2BqiStSr1zACwb9gUvjXFv6ovJgo6VYmYxs1tNLl3T%2Fit4D24FFIGrOBh7B1dYSJrUczHwGouSZRDLcWG6ec71SSYvW3zz%2BziZPOm1JOUvwa%2FRaYgflAqPeEob80FY0VDF30e07eHXJY4kuxRGYjEiOBi0wj7Eud%2BpPEmLsQ6c1&X-Amz-Signature=86756740c3f003765c26ca07efd4fe58e170da6ba8fb527c724ca8e878a1e0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TN5JVH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQpt%2FNM%2F6Mkhfia2pJlKjlTCdLR9NQfx5hsw7o867pUAIgQsTdYbw0lY4A8V65Svub4xuIlKbdxFRWTHAzWxDi8Dkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLnjCcuZ4Iu44w8vPCrcA4juNGhRgeBe1KyVcix5CLD17EAilMvES0q4JKox0QWhFuTIzb1MXtsyUK%2FUhrX4y4g9BY%2Fdokhhh2lg5eoR646LUow0KcaVJB7lHd%2F%2FBq5LhnV5WC5I16dQOa2aeQoxwtA2NnjTzZmbZyQ9JoMm%2FisHK8LYfxQtCCIDI0n6nL3rwfxo5rFPF3D4opMpEYrgMWPtGYpNJ%2BKfjO9wjNJmC4Z3dY0M%2Fls%2BdjPGodlZf8jl%2BigRxp6PRm5s%2FQ1R7Z85%2Fw%2FG1u9X41XpOZBpMRnxP4m6TS%2FeFZltZwpCHxnurYOPNqj%2Fpo2XNGaEX2zLO2jhlXi2Y2cNvlJipgsqiyrpyjpYV2a%2FMtqNKhBwHm9cdFfJRuD9gYpIar2pcFKOVqs5%2B%2F3vxOT%2FdzBd2MZY%2FRh9jttnGQnhN%2BEDYz1hxLfx0SkIYK%2FJ7Dm75NrlPrsRoGbO0huL1g90IcuXnvnYHMUE%2BMgSgw3UDt843MejuUecpycKFIqMvJj2JiJT532BDFaU718BY6t9lKVkZjdI%2FatoyDJ0Gy0QLeehXxceMPxt6pXlwtXpGH2RxDu5LTd5373B6BB3Vb1ZCM7e9M%2FD0Q9s55PSjXpYNsrO1HUKYX2Z73PSvFD%2BAf64B1HJsqZlMNeHq74GOqUBwadn5XhWF%2BlcvlsCLKXbF6%2BPvBpu9rYDh5kTh8u6HQgv4LmEAN%2BqiStSr1zACwb9gUvjXFv6ovJgo6VYmYxs1tNLl3T%2Fit4D24FFIGrOBh7B1dYSJrUczHwGouSZRDLcWG6ec71SSYvW3zz%2BziZPOm1JOUvwa%2FRaYgflAqPeEob80FY0VDF30e07eHXJY4kuxRGYjEiOBi0wj7Eud%2BpPEmLsQ6c1&X-Amz-Signature=79c6dc63d9d885e0ec5243a060405256c0754ed7ee790bf5f972065c81763d41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TN5JVH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQpt%2FNM%2F6Mkhfia2pJlKjlTCdLR9NQfx5hsw7o867pUAIgQsTdYbw0lY4A8V65Svub4xuIlKbdxFRWTHAzWxDi8Dkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLnjCcuZ4Iu44w8vPCrcA4juNGhRgeBe1KyVcix5CLD17EAilMvES0q4JKox0QWhFuTIzb1MXtsyUK%2FUhrX4y4g9BY%2Fdokhhh2lg5eoR646LUow0KcaVJB7lHd%2F%2FBq5LhnV5WC5I16dQOa2aeQoxwtA2NnjTzZmbZyQ9JoMm%2FisHK8LYfxQtCCIDI0n6nL3rwfxo5rFPF3D4opMpEYrgMWPtGYpNJ%2BKfjO9wjNJmC4Z3dY0M%2Fls%2BdjPGodlZf8jl%2BigRxp6PRm5s%2FQ1R7Z85%2Fw%2FG1u9X41XpOZBpMRnxP4m6TS%2FeFZltZwpCHxnurYOPNqj%2Fpo2XNGaEX2zLO2jhlXi2Y2cNvlJipgsqiyrpyjpYV2a%2FMtqNKhBwHm9cdFfJRuD9gYpIar2pcFKOVqs5%2B%2F3vxOT%2FdzBd2MZY%2FRh9jttnGQnhN%2BEDYz1hxLfx0SkIYK%2FJ7Dm75NrlPrsRoGbO0huL1g90IcuXnvnYHMUE%2BMgSgw3UDt843MejuUecpycKFIqMvJj2JiJT532BDFaU718BY6t9lKVkZjdI%2FatoyDJ0Gy0QLeehXxceMPxt6pXlwtXpGH2RxDu5LTd5373B6BB3Vb1ZCM7e9M%2FD0Q9s55PSjXpYNsrO1HUKYX2Z73PSvFD%2BAf64B1HJsqZlMNeHq74GOqUBwadn5XhWF%2BlcvlsCLKXbF6%2BPvBpu9rYDh5kTh8u6HQgv4LmEAN%2BqiStSr1zACwb9gUvjXFv6ovJgo6VYmYxs1tNLl3T%2Fit4D24FFIGrOBh7B1dYSJrUczHwGouSZRDLcWG6ec71SSYvW3zz%2BziZPOm1JOUvwa%2FRaYgflAqPeEob80FY0VDF30e07eHXJY4kuxRGYjEiOBi0wj7Eud%2BpPEmLsQ6c1&X-Amz-Signature=20b0dacef43a29feb4c3c217a1abce9ae1a4a16ffa21a1e37d7ac411e921a8de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TN5JVH%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQpt%2FNM%2F6Mkhfia2pJlKjlTCdLR9NQfx5hsw7o867pUAIgQsTdYbw0lY4A8V65Svub4xuIlKbdxFRWTHAzWxDi8Dkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLnjCcuZ4Iu44w8vPCrcA4juNGhRgeBe1KyVcix5CLD17EAilMvES0q4JKox0QWhFuTIzb1MXtsyUK%2FUhrX4y4g9BY%2Fdokhhh2lg5eoR646LUow0KcaVJB7lHd%2F%2FBq5LhnV5WC5I16dQOa2aeQoxwtA2NnjTzZmbZyQ9JoMm%2FisHK8LYfxQtCCIDI0n6nL3rwfxo5rFPF3D4opMpEYrgMWPtGYpNJ%2BKfjO9wjNJmC4Z3dY0M%2Fls%2BdjPGodlZf8jl%2BigRxp6PRm5s%2FQ1R7Z85%2Fw%2FG1u9X41XpOZBpMRnxP4m6TS%2FeFZltZwpCHxnurYOPNqj%2Fpo2XNGaEX2zLO2jhlXi2Y2cNvlJipgsqiyrpyjpYV2a%2FMtqNKhBwHm9cdFfJRuD9gYpIar2pcFKOVqs5%2B%2F3vxOT%2FdzBd2MZY%2FRh9jttnGQnhN%2BEDYz1hxLfx0SkIYK%2FJ7Dm75NrlPrsRoGbO0huL1g90IcuXnvnYHMUE%2BMgSgw3UDt843MejuUecpycKFIqMvJj2JiJT532BDFaU718BY6t9lKVkZjdI%2FatoyDJ0Gy0QLeehXxceMPxt6pXlwtXpGH2RxDu5LTd5373B6BB3Vb1ZCM7e9M%2FD0Q9s55PSjXpYNsrO1HUKYX2Z73PSvFD%2BAf64B1HJsqZlMNeHq74GOqUBwadn5XhWF%2BlcvlsCLKXbF6%2BPvBpu9rYDh5kTh8u6HQgv4LmEAN%2BqiStSr1zACwb9gUvjXFv6ovJgo6VYmYxs1tNLl3T%2Fit4D24FFIGrOBh7B1dYSJrUczHwGouSZRDLcWG6ec71SSYvW3zz%2BziZPOm1JOUvwa%2FRaYgflAqPeEob80FY0VDF30e07eHXJY4kuxRGYjEiOBi0wj7Eud%2BpPEmLsQ6c1&X-Amz-Signature=9fb1f6da7d94d786be27741406d17de80f5cea7d4e8cda2dccc5b252c0aba3fc&X-Amz-SignedHeaders=host&x-id=GetObject)
