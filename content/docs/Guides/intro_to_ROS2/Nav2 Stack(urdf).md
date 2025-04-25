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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPRIPJF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrwbBR9Wey%2FzlP%2BXysUEfTCCTU7KWIeP%2FhV0bL7ec2AIgZaG5DQgpVxFHxa%2F3%2FEe6MvVzW2lVEB3Mb4wjEIdCEKEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDjIaGhKJ038LqXr9CrcAwrS8xD61XsK8B1AFx6yBLIBT2i9orMD6YJhnJ4N%2Be1GEzDHC%2Fxkg0x0KlAAwbrgRsh7hkLbbjXs6IlSW5QlWlEQiKbXu%2Fg8vZh36nF6HGPr52YTTz%2B31NEuZi%2BBAJxWhKPVnHDpsDPvnRigt3xdKNc5r%2FHYfoGqJnD4zXW%2FG3kpLdQwyUxcqyVM1baZg6eYGMHfE49tH4nDv6jtFjMPiw5TC8RVTI9fOMTrVeWwbwcowYD0DmxmE9PXELilJH%2BwVdPE3CDfWYpxhgxnxHPKWreTPcHmRD0BrT6p%2FvOHyeXO8E0T3%2BhxRc0FLjlj0tVET9Kdr4uzHVj9N%2FJj6PPMWVXXnpmN9fHKpVrziUtyw2N4kQgllbKFxPl5lSH89qd4GVVmNgcSINOnDDZXM0GcUslzTd4NYN5UgpWQAjnBQbKBp9JOonIrJg%2BA4ay9yvw4dt%2BZDWeBXUok2%2BRdOHKyZ%2FptilmAxlJZNoZkJ89aP4WqXpaZuf7eBiqeY2GfgKWV6%2F5jKYg%2FHNM7pez9AwbdE578SF217UeHOYaeN3SgL%2BMD2z0wvdQtGl9OtYNggm%2F7uyKZJsTEc5hHmhLAkkF4TWtlHD7TVhtLs%2Ff7RY3%2FHeVXRnoHmYKg15GjmHdvMJKHsMAGOqUB4G0vVmG5aKC14rAE7Beo6biv%2BJpYccFabg9GsFuI%2FnnwKvKh0iDLgHsk%2FFmSEmKnItiZuhDB3JnM2X9gPeShyINQPF9LZsXRxpXWsf5nPnUqS%2B29u586TVLcHJh3gt4O2vGxfCL%2Fm%2Fq0%2FdeSqolrGWQMAaNr8EnprzAru2ybfe0tnYuauSVOe0JMSORxM08Cs7duaHrZ4LaLWqUAfGP8bq9IFF%2FN&X-Amz-Signature=0d0771dbf71a3cf8e61dc02067e6a3147184de562768c97537a0afabe6b4d65d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPRIPJF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrwbBR9Wey%2FzlP%2BXysUEfTCCTU7KWIeP%2FhV0bL7ec2AIgZaG5DQgpVxFHxa%2F3%2FEe6MvVzW2lVEB3Mb4wjEIdCEKEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDjIaGhKJ038LqXr9CrcAwrS8xD61XsK8B1AFx6yBLIBT2i9orMD6YJhnJ4N%2Be1GEzDHC%2Fxkg0x0KlAAwbrgRsh7hkLbbjXs6IlSW5QlWlEQiKbXu%2Fg8vZh36nF6HGPr52YTTz%2B31NEuZi%2BBAJxWhKPVnHDpsDPvnRigt3xdKNc5r%2FHYfoGqJnD4zXW%2FG3kpLdQwyUxcqyVM1baZg6eYGMHfE49tH4nDv6jtFjMPiw5TC8RVTI9fOMTrVeWwbwcowYD0DmxmE9PXELilJH%2BwVdPE3CDfWYpxhgxnxHPKWreTPcHmRD0BrT6p%2FvOHyeXO8E0T3%2BhxRc0FLjlj0tVET9Kdr4uzHVj9N%2FJj6PPMWVXXnpmN9fHKpVrziUtyw2N4kQgllbKFxPl5lSH89qd4GVVmNgcSINOnDDZXM0GcUslzTd4NYN5UgpWQAjnBQbKBp9JOonIrJg%2BA4ay9yvw4dt%2BZDWeBXUok2%2BRdOHKyZ%2FptilmAxlJZNoZkJ89aP4WqXpaZuf7eBiqeY2GfgKWV6%2F5jKYg%2FHNM7pez9AwbdE578SF217UeHOYaeN3SgL%2BMD2z0wvdQtGl9OtYNggm%2F7uyKZJsTEc5hHmhLAkkF4TWtlHD7TVhtLs%2Ff7RY3%2FHeVXRnoHmYKg15GjmHdvMJKHsMAGOqUB4G0vVmG5aKC14rAE7Beo6biv%2BJpYccFabg9GsFuI%2FnnwKvKh0iDLgHsk%2FFmSEmKnItiZuhDB3JnM2X9gPeShyINQPF9LZsXRxpXWsf5nPnUqS%2B29u586TVLcHJh3gt4O2vGxfCL%2Fm%2Fq0%2FdeSqolrGWQMAaNr8EnprzAru2ybfe0tnYuauSVOe0JMSORxM08Cs7duaHrZ4LaLWqUAfGP8bq9IFF%2FN&X-Amz-Signature=90a9bcd3d2fd28b485d086c43fd9df7dd6ca4894cd7f0eabba22a99dac94e72f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPRIPJF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrwbBR9Wey%2FzlP%2BXysUEfTCCTU7KWIeP%2FhV0bL7ec2AIgZaG5DQgpVxFHxa%2F3%2FEe6MvVzW2lVEB3Mb4wjEIdCEKEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDjIaGhKJ038LqXr9CrcAwrS8xD61XsK8B1AFx6yBLIBT2i9orMD6YJhnJ4N%2Be1GEzDHC%2Fxkg0x0KlAAwbrgRsh7hkLbbjXs6IlSW5QlWlEQiKbXu%2Fg8vZh36nF6HGPr52YTTz%2B31NEuZi%2BBAJxWhKPVnHDpsDPvnRigt3xdKNc5r%2FHYfoGqJnD4zXW%2FG3kpLdQwyUxcqyVM1baZg6eYGMHfE49tH4nDv6jtFjMPiw5TC8RVTI9fOMTrVeWwbwcowYD0DmxmE9PXELilJH%2BwVdPE3CDfWYpxhgxnxHPKWreTPcHmRD0BrT6p%2FvOHyeXO8E0T3%2BhxRc0FLjlj0tVET9Kdr4uzHVj9N%2FJj6PPMWVXXnpmN9fHKpVrziUtyw2N4kQgllbKFxPl5lSH89qd4GVVmNgcSINOnDDZXM0GcUslzTd4NYN5UgpWQAjnBQbKBp9JOonIrJg%2BA4ay9yvw4dt%2BZDWeBXUok2%2BRdOHKyZ%2FptilmAxlJZNoZkJ89aP4WqXpaZuf7eBiqeY2GfgKWV6%2F5jKYg%2FHNM7pez9AwbdE578SF217UeHOYaeN3SgL%2BMD2z0wvdQtGl9OtYNggm%2F7uyKZJsTEc5hHmhLAkkF4TWtlHD7TVhtLs%2Ff7RY3%2FHeVXRnoHmYKg15GjmHdvMJKHsMAGOqUB4G0vVmG5aKC14rAE7Beo6biv%2BJpYccFabg9GsFuI%2FnnwKvKh0iDLgHsk%2FFmSEmKnItiZuhDB3JnM2X9gPeShyINQPF9LZsXRxpXWsf5nPnUqS%2B29u586TVLcHJh3gt4O2vGxfCL%2Fm%2Fq0%2FdeSqolrGWQMAaNr8EnprzAru2ybfe0tnYuauSVOe0JMSORxM08Cs7duaHrZ4LaLWqUAfGP8bq9IFF%2FN&X-Amz-Signature=b4dc1b1a8e3092426e653a3f282b75d803dfe3895fa9aa7b289a3ccb3eabf794&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPRIPJF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrwbBR9Wey%2FzlP%2BXysUEfTCCTU7KWIeP%2FhV0bL7ec2AIgZaG5DQgpVxFHxa%2F3%2FEe6MvVzW2lVEB3Mb4wjEIdCEKEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDjIaGhKJ038LqXr9CrcAwrS8xD61XsK8B1AFx6yBLIBT2i9orMD6YJhnJ4N%2Be1GEzDHC%2Fxkg0x0KlAAwbrgRsh7hkLbbjXs6IlSW5QlWlEQiKbXu%2Fg8vZh36nF6HGPr52YTTz%2B31NEuZi%2BBAJxWhKPVnHDpsDPvnRigt3xdKNc5r%2FHYfoGqJnD4zXW%2FG3kpLdQwyUxcqyVM1baZg6eYGMHfE49tH4nDv6jtFjMPiw5TC8RVTI9fOMTrVeWwbwcowYD0DmxmE9PXELilJH%2BwVdPE3CDfWYpxhgxnxHPKWreTPcHmRD0BrT6p%2FvOHyeXO8E0T3%2BhxRc0FLjlj0tVET9Kdr4uzHVj9N%2FJj6PPMWVXXnpmN9fHKpVrziUtyw2N4kQgllbKFxPl5lSH89qd4GVVmNgcSINOnDDZXM0GcUslzTd4NYN5UgpWQAjnBQbKBp9JOonIrJg%2BA4ay9yvw4dt%2BZDWeBXUok2%2BRdOHKyZ%2FptilmAxlJZNoZkJ89aP4WqXpaZuf7eBiqeY2GfgKWV6%2F5jKYg%2FHNM7pez9AwbdE578SF217UeHOYaeN3SgL%2BMD2z0wvdQtGl9OtYNggm%2F7uyKZJsTEc5hHmhLAkkF4TWtlHD7TVhtLs%2Ff7RY3%2FHeVXRnoHmYKg15GjmHdvMJKHsMAGOqUB4G0vVmG5aKC14rAE7Beo6biv%2BJpYccFabg9GsFuI%2FnnwKvKh0iDLgHsk%2FFmSEmKnItiZuhDB3JnM2X9gPeShyINQPF9LZsXRxpXWsf5nPnUqS%2B29u586TVLcHJh3gt4O2vGxfCL%2Fm%2Fq0%2FdeSqolrGWQMAaNr8EnprzAru2ybfe0tnYuauSVOe0JMSORxM08Cs7duaHrZ4LaLWqUAfGP8bq9IFF%2FN&X-Amz-Signature=ebb6ddf4c9a8f5001c8ab6c5e52b73e7d99ab7fc08370a6ffbdfa0d025cd4ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPRIPJF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrwbBR9Wey%2FzlP%2BXysUEfTCCTU7KWIeP%2FhV0bL7ec2AIgZaG5DQgpVxFHxa%2F3%2FEe6MvVzW2lVEB3Mb4wjEIdCEKEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDjIaGhKJ038LqXr9CrcAwrS8xD61XsK8B1AFx6yBLIBT2i9orMD6YJhnJ4N%2Be1GEzDHC%2Fxkg0x0KlAAwbrgRsh7hkLbbjXs6IlSW5QlWlEQiKbXu%2Fg8vZh36nF6HGPr52YTTz%2B31NEuZi%2BBAJxWhKPVnHDpsDPvnRigt3xdKNc5r%2FHYfoGqJnD4zXW%2FG3kpLdQwyUxcqyVM1baZg6eYGMHfE49tH4nDv6jtFjMPiw5TC8RVTI9fOMTrVeWwbwcowYD0DmxmE9PXELilJH%2BwVdPE3CDfWYpxhgxnxHPKWreTPcHmRD0BrT6p%2FvOHyeXO8E0T3%2BhxRc0FLjlj0tVET9Kdr4uzHVj9N%2FJj6PPMWVXXnpmN9fHKpVrziUtyw2N4kQgllbKFxPl5lSH89qd4GVVmNgcSINOnDDZXM0GcUslzTd4NYN5UgpWQAjnBQbKBp9JOonIrJg%2BA4ay9yvw4dt%2BZDWeBXUok2%2BRdOHKyZ%2FptilmAxlJZNoZkJ89aP4WqXpaZuf7eBiqeY2GfgKWV6%2F5jKYg%2FHNM7pez9AwbdE578SF217UeHOYaeN3SgL%2BMD2z0wvdQtGl9OtYNggm%2F7uyKZJsTEc5hHmhLAkkF4TWtlHD7TVhtLs%2Ff7RY3%2FHeVXRnoHmYKg15GjmHdvMJKHsMAGOqUB4G0vVmG5aKC14rAE7Beo6biv%2BJpYccFabg9GsFuI%2FnnwKvKh0iDLgHsk%2FFmSEmKnItiZuhDB3JnM2X9gPeShyINQPF9LZsXRxpXWsf5nPnUqS%2B29u586TVLcHJh3gt4O2vGxfCL%2Fm%2Fq0%2FdeSqolrGWQMAaNr8EnprzAru2ybfe0tnYuauSVOe0JMSORxM08Cs7duaHrZ4LaLWqUAfGP8bq9IFF%2FN&X-Amz-Signature=8346f505c6e764db365f5f1757390e599fb15e88d24700a1a070cfe6b31facde&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIPRIPJF%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrwbBR9Wey%2FzlP%2BXysUEfTCCTU7KWIeP%2FhV0bL7ec2AIgZaG5DQgpVxFHxa%2F3%2FEe6MvVzW2lVEB3Mb4wjEIdCEKEq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDjIaGhKJ038LqXr9CrcAwrS8xD61XsK8B1AFx6yBLIBT2i9orMD6YJhnJ4N%2Be1GEzDHC%2Fxkg0x0KlAAwbrgRsh7hkLbbjXs6IlSW5QlWlEQiKbXu%2Fg8vZh36nF6HGPr52YTTz%2B31NEuZi%2BBAJxWhKPVnHDpsDPvnRigt3xdKNc5r%2FHYfoGqJnD4zXW%2FG3kpLdQwyUxcqyVM1baZg6eYGMHfE49tH4nDv6jtFjMPiw5TC8RVTI9fOMTrVeWwbwcowYD0DmxmE9PXELilJH%2BwVdPE3CDfWYpxhgxnxHPKWreTPcHmRD0BrT6p%2FvOHyeXO8E0T3%2BhxRc0FLjlj0tVET9Kdr4uzHVj9N%2FJj6PPMWVXXnpmN9fHKpVrziUtyw2N4kQgllbKFxPl5lSH89qd4GVVmNgcSINOnDDZXM0GcUslzTd4NYN5UgpWQAjnBQbKBp9JOonIrJg%2BA4ay9yvw4dt%2BZDWeBXUok2%2BRdOHKyZ%2FptilmAxlJZNoZkJ89aP4WqXpaZuf7eBiqeY2GfgKWV6%2F5jKYg%2FHNM7pez9AwbdE578SF217UeHOYaeN3SgL%2BMD2z0wvdQtGl9OtYNggm%2F7uyKZJsTEc5hHmhLAkkF4TWtlHD7TVhtLs%2Ff7RY3%2FHeVXRnoHmYKg15GjmHdvMJKHsMAGOqUB4G0vVmG5aKC14rAE7Beo6biv%2BJpYccFabg9GsFuI%2FnnwKvKh0iDLgHsk%2FFmSEmKnItiZuhDB3JnM2X9gPeShyINQPF9LZsXRxpXWsf5nPnUqS%2B29u586TVLcHJh3gt4O2vGxfCL%2Fm%2Fq0%2FdeSqolrGWQMAaNr8EnprzAru2ybfe0tnYuauSVOe0JMSORxM08Cs7duaHrZ4LaLWqUAfGP8bq9IFF%2FN&X-Amz-Signature=1e9ebe237293f1cb1623982feacb59dba3a3ab5960dc38e435eec6f7cd32a260&X-Amz-SignedHeaders=host&x-id=GetObject)
