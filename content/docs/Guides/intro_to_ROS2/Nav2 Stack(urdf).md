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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG762FZQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHN2wrkPueUdDBQPZi9FXAAG59bV%2BHNH6F28MSLzK9AiEAwB2W%2FI8aVAlepM8XBLnrnTvNikfvD682jSpF%2B9jytjwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNuiNdNUTDYk9u1JdCrcA5pT9Vfirys90lApmqihT%2Fbp9INvCbI2ZledYqN8gb3g7d%2B9pPKvofO6rjin%2FymU0OonXU1p%2ByygkaZZTF3V64YDH2pj2BRGYndP%2Bw9Mx8FqM%2FxjSO5PK0NGsjoSwhlDmkK3fiSR5ZlCIg%2F6Igp%2F9fvC3eoJT4i%2FP%2F2pYmTEwyKVliUqDF3XJRwqzqpkt%2FFE%2FXW%2BDZ8D0fyvo6A1dr3Sm7YQsFwrLzfRulo7552BtiiBWdrt5owFIZe5mhQ5rr6cg%2FN5suIcORFbCslG4Ns2lm3g4wkdD4DV6c8ZZVdajhlWWIkWYQGFwEw%2BV11hN3ry8U1FS3YYxDpQLE0SvEHBFYxdQpn7rdFJkGn5bplhomhBl4FayxstjeNsKJTqA4mDZrHeGsVebu2flBvsyR1VdArLTJvgB6tdpDORHLt14C0jMW8LAIX8qjwx7IAfOViYdUhd50cgN2qXXvNsf%2F09NjDOt5Gg1xLKom%2F5kI41NiMHwv%2Fv%2BgTc1HQh7KOaUEgoXYNqld6AmzsCcB22TBOO5sEMWTbFuODOaAFYiytTyfadaeui0soY6oeTjLRF17JTahVpEMFPFTRSi6IW6s7%2BKuoIH%2BbLEK8lFBNVzhqHJBbG9JXgD2EGoStUjcd5MMrSzb8GOqUBmqv2x6W07RbBS%2FwXYzgCvnU4XRMMnqNLkMlvnctJGy%2BnTZBLoLWyA3A0%2FHN5wJ9FSS92uolYQXlCvQLEKG0Ak9TpD3w%2FFNoPsjIFAx7kiWDsBE6mYQrGnwPWF8L%2FIMaGvuO4ayKoi2BD5GPdf9390sQ%2FcIDtcgHekLjJ6ljwuzhIgQ8RjQxN0UgZOlOAmBWyi4zhmcqYKcvUzcs%2FyxCgkG%2F3proK&X-Amz-Signature=ced8d005be0bc7ec4468a63f81c0a9f063cf84b5b17cca9e8eb1ff618efc792d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG762FZQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHN2wrkPueUdDBQPZi9FXAAG59bV%2BHNH6F28MSLzK9AiEAwB2W%2FI8aVAlepM8XBLnrnTvNikfvD682jSpF%2B9jytjwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNuiNdNUTDYk9u1JdCrcA5pT9Vfirys90lApmqihT%2Fbp9INvCbI2ZledYqN8gb3g7d%2B9pPKvofO6rjin%2FymU0OonXU1p%2ByygkaZZTF3V64YDH2pj2BRGYndP%2Bw9Mx8FqM%2FxjSO5PK0NGsjoSwhlDmkK3fiSR5ZlCIg%2F6Igp%2F9fvC3eoJT4i%2FP%2F2pYmTEwyKVliUqDF3XJRwqzqpkt%2FFE%2FXW%2BDZ8D0fyvo6A1dr3Sm7YQsFwrLzfRulo7552BtiiBWdrt5owFIZe5mhQ5rr6cg%2FN5suIcORFbCslG4Ns2lm3g4wkdD4DV6c8ZZVdajhlWWIkWYQGFwEw%2BV11hN3ry8U1FS3YYxDpQLE0SvEHBFYxdQpn7rdFJkGn5bplhomhBl4FayxstjeNsKJTqA4mDZrHeGsVebu2flBvsyR1VdArLTJvgB6tdpDORHLt14C0jMW8LAIX8qjwx7IAfOViYdUhd50cgN2qXXvNsf%2F09NjDOt5Gg1xLKom%2F5kI41NiMHwv%2Fv%2BgTc1HQh7KOaUEgoXYNqld6AmzsCcB22TBOO5sEMWTbFuODOaAFYiytTyfadaeui0soY6oeTjLRF17JTahVpEMFPFTRSi6IW6s7%2BKuoIH%2BbLEK8lFBNVzhqHJBbG9JXgD2EGoStUjcd5MMrSzb8GOqUBmqv2x6W07RbBS%2FwXYzgCvnU4XRMMnqNLkMlvnctJGy%2BnTZBLoLWyA3A0%2FHN5wJ9FSS92uolYQXlCvQLEKG0Ak9TpD3w%2FFNoPsjIFAx7kiWDsBE6mYQrGnwPWF8L%2FIMaGvuO4ayKoi2BD5GPdf9390sQ%2FcIDtcgHekLjJ6ljwuzhIgQ8RjQxN0UgZOlOAmBWyi4zhmcqYKcvUzcs%2FyxCgkG%2F3proK&X-Amz-Signature=0d448fac9a93330a5a4bb2d239cd41a9ef2a1fc241bd02a3091ee8c9b49ac8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG762FZQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHN2wrkPueUdDBQPZi9FXAAG59bV%2BHNH6F28MSLzK9AiEAwB2W%2FI8aVAlepM8XBLnrnTvNikfvD682jSpF%2B9jytjwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNuiNdNUTDYk9u1JdCrcA5pT9Vfirys90lApmqihT%2Fbp9INvCbI2ZledYqN8gb3g7d%2B9pPKvofO6rjin%2FymU0OonXU1p%2ByygkaZZTF3V64YDH2pj2BRGYndP%2Bw9Mx8FqM%2FxjSO5PK0NGsjoSwhlDmkK3fiSR5ZlCIg%2F6Igp%2F9fvC3eoJT4i%2FP%2F2pYmTEwyKVliUqDF3XJRwqzqpkt%2FFE%2FXW%2BDZ8D0fyvo6A1dr3Sm7YQsFwrLzfRulo7552BtiiBWdrt5owFIZe5mhQ5rr6cg%2FN5suIcORFbCslG4Ns2lm3g4wkdD4DV6c8ZZVdajhlWWIkWYQGFwEw%2BV11hN3ry8U1FS3YYxDpQLE0SvEHBFYxdQpn7rdFJkGn5bplhomhBl4FayxstjeNsKJTqA4mDZrHeGsVebu2flBvsyR1VdArLTJvgB6tdpDORHLt14C0jMW8LAIX8qjwx7IAfOViYdUhd50cgN2qXXvNsf%2F09NjDOt5Gg1xLKom%2F5kI41NiMHwv%2Fv%2BgTc1HQh7KOaUEgoXYNqld6AmzsCcB22TBOO5sEMWTbFuODOaAFYiytTyfadaeui0soY6oeTjLRF17JTahVpEMFPFTRSi6IW6s7%2BKuoIH%2BbLEK8lFBNVzhqHJBbG9JXgD2EGoStUjcd5MMrSzb8GOqUBmqv2x6W07RbBS%2FwXYzgCvnU4XRMMnqNLkMlvnctJGy%2BnTZBLoLWyA3A0%2FHN5wJ9FSS92uolYQXlCvQLEKG0Ak9TpD3w%2FFNoPsjIFAx7kiWDsBE6mYQrGnwPWF8L%2FIMaGvuO4ayKoi2BD5GPdf9390sQ%2FcIDtcgHekLjJ6ljwuzhIgQ8RjQxN0UgZOlOAmBWyi4zhmcqYKcvUzcs%2FyxCgkG%2F3proK&X-Amz-Signature=533c8d8d6559db7df679e0ed72fa5cfb62ca8dcfd02c5ea7b878e4fab72f2137&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG762FZQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHN2wrkPueUdDBQPZi9FXAAG59bV%2BHNH6F28MSLzK9AiEAwB2W%2FI8aVAlepM8XBLnrnTvNikfvD682jSpF%2B9jytjwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNuiNdNUTDYk9u1JdCrcA5pT9Vfirys90lApmqihT%2Fbp9INvCbI2ZledYqN8gb3g7d%2B9pPKvofO6rjin%2FymU0OonXU1p%2ByygkaZZTF3V64YDH2pj2BRGYndP%2Bw9Mx8FqM%2FxjSO5PK0NGsjoSwhlDmkK3fiSR5ZlCIg%2F6Igp%2F9fvC3eoJT4i%2FP%2F2pYmTEwyKVliUqDF3XJRwqzqpkt%2FFE%2FXW%2BDZ8D0fyvo6A1dr3Sm7YQsFwrLzfRulo7552BtiiBWdrt5owFIZe5mhQ5rr6cg%2FN5suIcORFbCslG4Ns2lm3g4wkdD4DV6c8ZZVdajhlWWIkWYQGFwEw%2BV11hN3ry8U1FS3YYxDpQLE0SvEHBFYxdQpn7rdFJkGn5bplhomhBl4FayxstjeNsKJTqA4mDZrHeGsVebu2flBvsyR1VdArLTJvgB6tdpDORHLt14C0jMW8LAIX8qjwx7IAfOViYdUhd50cgN2qXXvNsf%2F09NjDOt5Gg1xLKom%2F5kI41NiMHwv%2Fv%2BgTc1HQh7KOaUEgoXYNqld6AmzsCcB22TBOO5sEMWTbFuODOaAFYiytTyfadaeui0soY6oeTjLRF17JTahVpEMFPFTRSi6IW6s7%2BKuoIH%2BbLEK8lFBNVzhqHJBbG9JXgD2EGoStUjcd5MMrSzb8GOqUBmqv2x6W07RbBS%2FwXYzgCvnU4XRMMnqNLkMlvnctJGy%2BnTZBLoLWyA3A0%2FHN5wJ9FSS92uolYQXlCvQLEKG0Ak9TpD3w%2FFNoPsjIFAx7kiWDsBE6mYQrGnwPWF8L%2FIMaGvuO4ayKoi2BD5GPdf9390sQ%2FcIDtcgHekLjJ6ljwuzhIgQ8RjQxN0UgZOlOAmBWyi4zhmcqYKcvUzcs%2FyxCgkG%2F3proK&X-Amz-Signature=56342257d97c2df8e593f7beaebae4d1e16e3a763e142e6a73549f57aafe2027&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG762FZQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHN2wrkPueUdDBQPZi9FXAAG59bV%2BHNH6F28MSLzK9AiEAwB2W%2FI8aVAlepM8XBLnrnTvNikfvD682jSpF%2B9jytjwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNuiNdNUTDYk9u1JdCrcA5pT9Vfirys90lApmqihT%2Fbp9INvCbI2ZledYqN8gb3g7d%2B9pPKvofO6rjin%2FymU0OonXU1p%2ByygkaZZTF3V64YDH2pj2BRGYndP%2Bw9Mx8FqM%2FxjSO5PK0NGsjoSwhlDmkK3fiSR5ZlCIg%2F6Igp%2F9fvC3eoJT4i%2FP%2F2pYmTEwyKVliUqDF3XJRwqzqpkt%2FFE%2FXW%2BDZ8D0fyvo6A1dr3Sm7YQsFwrLzfRulo7552BtiiBWdrt5owFIZe5mhQ5rr6cg%2FN5suIcORFbCslG4Ns2lm3g4wkdD4DV6c8ZZVdajhlWWIkWYQGFwEw%2BV11hN3ry8U1FS3YYxDpQLE0SvEHBFYxdQpn7rdFJkGn5bplhomhBl4FayxstjeNsKJTqA4mDZrHeGsVebu2flBvsyR1VdArLTJvgB6tdpDORHLt14C0jMW8LAIX8qjwx7IAfOViYdUhd50cgN2qXXvNsf%2F09NjDOt5Gg1xLKom%2F5kI41NiMHwv%2Fv%2BgTc1HQh7KOaUEgoXYNqld6AmzsCcB22TBOO5sEMWTbFuODOaAFYiytTyfadaeui0soY6oeTjLRF17JTahVpEMFPFTRSi6IW6s7%2BKuoIH%2BbLEK8lFBNVzhqHJBbG9JXgD2EGoStUjcd5MMrSzb8GOqUBmqv2x6W07RbBS%2FwXYzgCvnU4XRMMnqNLkMlvnctJGy%2BnTZBLoLWyA3A0%2FHN5wJ9FSS92uolYQXlCvQLEKG0Ak9TpD3w%2FFNoPsjIFAx7kiWDsBE6mYQrGnwPWF8L%2FIMaGvuO4ayKoi2BD5GPdf9390sQ%2FcIDtcgHekLjJ6ljwuzhIgQ8RjQxN0UgZOlOAmBWyi4zhmcqYKcvUzcs%2FyxCgkG%2F3proK&X-Amz-Signature=f8a98a280832b9a2dbd56c6c1e38944c00aa121cb06d17f8ca3c6a1f9551893d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG762FZQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHN2wrkPueUdDBQPZi9FXAAG59bV%2BHNH6F28MSLzK9AiEAwB2W%2FI8aVAlepM8XBLnrnTvNikfvD682jSpF%2B9jytjwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNuiNdNUTDYk9u1JdCrcA5pT9Vfirys90lApmqihT%2Fbp9INvCbI2ZledYqN8gb3g7d%2B9pPKvofO6rjin%2FymU0OonXU1p%2ByygkaZZTF3V64YDH2pj2BRGYndP%2Bw9Mx8FqM%2FxjSO5PK0NGsjoSwhlDmkK3fiSR5ZlCIg%2F6Igp%2F9fvC3eoJT4i%2FP%2F2pYmTEwyKVliUqDF3XJRwqzqpkt%2FFE%2FXW%2BDZ8D0fyvo6A1dr3Sm7YQsFwrLzfRulo7552BtiiBWdrt5owFIZe5mhQ5rr6cg%2FN5suIcORFbCslG4Ns2lm3g4wkdD4DV6c8ZZVdajhlWWIkWYQGFwEw%2BV11hN3ry8U1FS3YYxDpQLE0SvEHBFYxdQpn7rdFJkGn5bplhomhBl4FayxstjeNsKJTqA4mDZrHeGsVebu2flBvsyR1VdArLTJvgB6tdpDORHLt14C0jMW8LAIX8qjwx7IAfOViYdUhd50cgN2qXXvNsf%2F09NjDOt5Gg1xLKom%2F5kI41NiMHwv%2Fv%2BgTc1HQh7KOaUEgoXYNqld6AmzsCcB22TBOO5sEMWTbFuODOaAFYiytTyfadaeui0soY6oeTjLRF17JTahVpEMFPFTRSi6IW6s7%2BKuoIH%2BbLEK8lFBNVzhqHJBbG9JXgD2EGoStUjcd5MMrSzb8GOqUBmqv2x6W07RbBS%2FwXYzgCvnU4XRMMnqNLkMlvnctJGy%2BnTZBLoLWyA3A0%2FHN5wJ9FSS92uolYQXlCvQLEKG0Ak9TpD3w%2FFNoPsjIFAx7kiWDsBE6mYQrGnwPWF8L%2FIMaGvuO4ayKoi2BD5GPdf9390sQ%2FcIDtcgHekLjJ6ljwuzhIgQ8RjQxN0UgZOlOAmBWyi4zhmcqYKcvUzcs%2FyxCgkG%2F3proK&X-Amz-Signature=dad29923e1d79d05200733ce514239c6a15a93ab56bc49c3701a5fffeb700b48&X-Amz-SignedHeaders=host&x-id=GetObject)
