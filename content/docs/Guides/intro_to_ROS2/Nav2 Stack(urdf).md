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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNZV4WJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICayhl0qShoQJYLX%2Brskp7kFol1iOIQVj6ythnhOvqJPAiAkdnvWit2Wp15SdjJDVioK3aJif7Qzy1j56EmZ1Z0zayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9ThkugdrwwpxP7rKtwDI6vu8JvImkxBeu9RMWt9crSYi6w1hB16sRSMqxAp6784C5lDR7fpl9f%2FKE1gVTypEM%2B84Agu4X9kRJan6fx6UZHUgAPbSmUAdm4HTptaf9gJ1gF8%2FGW4PhiAh0bl5jP8lqZz0QrG5rkyCVx34NU9yGW5H51ADzVcbVz7oLtwm5naxR3PzSqVc5BjXi%2F5iTMtuTy6LPkuFDVaM5vSyKi9EcrWy%2BAdT7RhRHGP5nGf76MEw7HvHEdw2TU1%2BO8sh8g4obtcazQO5wewmh%2FwdEUrE5SwajFCa%2FlF7zjS43ODnVTcjXKRFPVNT%2F%2BeyIvWlIYmo0RdOM6H8%2BkLw0kum%2F8mDtq1FCQitu3uCabOqoak%2FY%2BsbwO4qnPmHUApzVg0R%2FWNEPlUbDLa%2Fkowk3hHbIXUDq%2FjfOrBzcBzyGsPRBZeHOSTil6xXxeQTVCSC9swZxP%2B1UCaoVhE5XkHgD7BoqeBXVA5C3KiQqnpPxxnsazh8LHSmzdzuiF39HM5ftiXjpy7RbvAm7OzVnJ7wNgLvaAgZ184MIG00BuQ9nJcZgK7uqxbj0xOYjQAhwFyzHxQ5HZUJ%2BbPyqEGRnPJoxRkVtqeF9b8FAmGHCj524UzuP6ofAhbtPZnCXFqAJpK8qcwpZWMvgY6pgFeoANev8Qlp99aIq%2FCWEhd9xKr4NRHJzU561%2FGjDsrrl4pARHSLUMP4a8AnipHVUZE9INOqWJZhP64A0L%2B5NE7xY3Um%2Fhj5ALgaC8yclboutZRoNzud0lxz%2FXPsU9gOVwrKIFk1hbxs85LbJd3Wyhcm8g%2FBdG8UKo%2BfWp1xERf3fDzs1QBSmuWWhhy6AFZySNJFyXpPhi6bLyUmGhNNgrw8DJp1J3R&X-Amz-Signature=1fe8c37d791c3554d43cea7533ee62ccbc49d62d4f361aaa7227e90af63f057d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNZV4WJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICayhl0qShoQJYLX%2Brskp7kFol1iOIQVj6ythnhOvqJPAiAkdnvWit2Wp15SdjJDVioK3aJif7Qzy1j56EmZ1Z0zayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9ThkugdrwwpxP7rKtwDI6vu8JvImkxBeu9RMWt9crSYi6w1hB16sRSMqxAp6784C5lDR7fpl9f%2FKE1gVTypEM%2B84Agu4X9kRJan6fx6UZHUgAPbSmUAdm4HTptaf9gJ1gF8%2FGW4PhiAh0bl5jP8lqZz0QrG5rkyCVx34NU9yGW5H51ADzVcbVz7oLtwm5naxR3PzSqVc5BjXi%2F5iTMtuTy6LPkuFDVaM5vSyKi9EcrWy%2BAdT7RhRHGP5nGf76MEw7HvHEdw2TU1%2BO8sh8g4obtcazQO5wewmh%2FwdEUrE5SwajFCa%2FlF7zjS43ODnVTcjXKRFPVNT%2F%2BeyIvWlIYmo0RdOM6H8%2BkLw0kum%2F8mDtq1FCQitu3uCabOqoak%2FY%2BsbwO4qnPmHUApzVg0R%2FWNEPlUbDLa%2Fkowk3hHbIXUDq%2FjfOrBzcBzyGsPRBZeHOSTil6xXxeQTVCSC9swZxP%2B1UCaoVhE5XkHgD7BoqeBXVA5C3KiQqnpPxxnsazh8LHSmzdzuiF39HM5ftiXjpy7RbvAm7OzVnJ7wNgLvaAgZ184MIG00BuQ9nJcZgK7uqxbj0xOYjQAhwFyzHxQ5HZUJ%2BbPyqEGRnPJoxRkVtqeF9b8FAmGHCj524UzuP6ofAhbtPZnCXFqAJpK8qcwpZWMvgY6pgFeoANev8Qlp99aIq%2FCWEhd9xKr4NRHJzU561%2FGjDsrrl4pARHSLUMP4a8AnipHVUZE9INOqWJZhP64A0L%2B5NE7xY3Um%2Fhj5ALgaC8yclboutZRoNzud0lxz%2FXPsU9gOVwrKIFk1hbxs85LbJd3Wyhcm8g%2FBdG8UKo%2BfWp1xERf3fDzs1QBSmuWWhhy6AFZySNJFyXpPhi6bLyUmGhNNgrw8DJp1J3R&X-Amz-Signature=28b27d0c9131584c1a4a94bb0ec2248e7413559be3615be3b9c6d296c7d72eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNZV4WJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICayhl0qShoQJYLX%2Brskp7kFol1iOIQVj6ythnhOvqJPAiAkdnvWit2Wp15SdjJDVioK3aJif7Qzy1j56EmZ1Z0zayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9ThkugdrwwpxP7rKtwDI6vu8JvImkxBeu9RMWt9crSYi6w1hB16sRSMqxAp6784C5lDR7fpl9f%2FKE1gVTypEM%2B84Agu4X9kRJan6fx6UZHUgAPbSmUAdm4HTptaf9gJ1gF8%2FGW4PhiAh0bl5jP8lqZz0QrG5rkyCVx34NU9yGW5H51ADzVcbVz7oLtwm5naxR3PzSqVc5BjXi%2F5iTMtuTy6LPkuFDVaM5vSyKi9EcrWy%2BAdT7RhRHGP5nGf76MEw7HvHEdw2TU1%2BO8sh8g4obtcazQO5wewmh%2FwdEUrE5SwajFCa%2FlF7zjS43ODnVTcjXKRFPVNT%2F%2BeyIvWlIYmo0RdOM6H8%2BkLw0kum%2F8mDtq1FCQitu3uCabOqoak%2FY%2BsbwO4qnPmHUApzVg0R%2FWNEPlUbDLa%2Fkowk3hHbIXUDq%2FjfOrBzcBzyGsPRBZeHOSTil6xXxeQTVCSC9swZxP%2B1UCaoVhE5XkHgD7BoqeBXVA5C3KiQqnpPxxnsazh8LHSmzdzuiF39HM5ftiXjpy7RbvAm7OzVnJ7wNgLvaAgZ184MIG00BuQ9nJcZgK7uqxbj0xOYjQAhwFyzHxQ5HZUJ%2BbPyqEGRnPJoxRkVtqeF9b8FAmGHCj524UzuP6ofAhbtPZnCXFqAJpK8qcwpZWMvgY6pgFeoANev8Qlp99aIq%2FCWEhd9xKr4NRHJzU561%2FGjDsrrl4pARHSLUMP4a8AnipHVUZE9INOqWJZhP64A0L%2B5NE7xY3Um%2Fhj5ALgaC8yclboutZRoNzud0lxz%2FXPsU9gOVwrKIFk1hbxs85LbJd3Wyhcm8g%2FBdG8UKo%2BfWp1xERf3fDzs1QBSmuWWhhy6AFZySNJFyXpPhi6bLyUmGhNNgrw8DJp1J3R&X-Amz-Signature=d824d67d36d274ec4164e3d1c2b1edea0e9945b067564175717736beb751c2f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNZV4WJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICayhl0qShoQJYLX%2Brskp7kFol1iOIQVj6ythnhOvqJPAiAkdnvWit2Wp15SdjJDVioK3aJif7Qzy1j56EmZ1Z0zayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9ThkugdrwwpxP7rKtwDI6vu8JvImkxBeu9RMWt9crSYi6w1hB16sRSMqxAp6784C5lDR7fpl9f%2FKE1gVTypEM%2B84Agu4X9kRJan6fx6UZHUgAPbSmUAdm4HTptaf9gJ1gF8%2FGW4PhiAh0bl5jP8lqZz0QrG5rkyCVx34NU9yGW5H51ADzVcbVz7oLtwm5naxR3PzSqVc5BjXi%2F5iTMtuTy6LPkuFDVaM5vSyKi9EcrWy%2BAdT7RhRHGP5nGf76MEw7HvHEdw2TU1%2BO8sh8g4obtcazQO5wewmh%2FwdEUrE5SwajFCa%2FlF7zjS43ODnVTcjXKRFPVNT%2F%2BeyIvWlIYmo0RdOM6H8%2BkLw0kum%2F8mDtq1FCQitu3uCabOqoak%2FY%2BsbwO4qnPmHUApzVg0R%2FWNEPlUbDLa%2Fkowk3hHbIXUDq%2FjfOrBzcBzyGsPRBZeHOSTil6xXxeQTVCSC9swZxP%2B1UCaoVhE5XkHgD7BoqeBXVA5C3KiQqnpPxxnsazh8LHSmzdzuiF39HM5ftiXjpy7RbvAm7OzVnJ7wNgLvaAgZ184MIG00BuQ9nJcZgK7uqxbj0xOYjQAhwFyzHxQ5HZUJ%2BbPyqEGRnPJoxRkVtqeF9b8FAmGHCj524UzuP6ofAhbtPZnCXFqAJpK8qcwpZWMvgY6pgFeoANev8Qlp99aIq%2FCWEhd9xKr4NRHJzU561%2FGjDsrrl4pARHSLUMP4a8AnipHVUZE9INOqWJZhP64A0L%2B5NE7xY3Um%2Fhj5ALgaC8yclboutZRoNzud0lxz%2FXPsU9gOVwrKIFk1hbxs85LbJd3Wyhcm8g%2FBdG8UKo%2BfWp1xERf3fDzs1QBSmuWWhhy6AFZySNJFyXpPhi6bLyUmGhNNgrw8DJp1J3R&X-Amz-Signature=5dccbfd7cbcb96ebcf0f569df0c1fb18c06ce1e7cb662d2e899b3a6718c93c95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNZV4WJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICayhl0qShoQJYLX%2Brskp7kFol1iOIQVj6ythnhOvqJPAiAkdnvWit2Wp15SdjJDVioK3aJif7Qzy1j56EmZ1Z0zayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9ThkugdrwwpxP7rKtwDI6vu8JvImkxBeu9RMWt9crSYi6w1hB16sRSMqxAp6784C5lDR7fpl9f%2FKE1gVTypEM%2B84Agu4X9kRJan6fx6UZHUgAPbSmUAdm4HTptaf9gJ1gF8%2FGW4PhiAh0bl5jP8lqZz0QrG5rkyCVx34NU9yGW5H51ADzVcbVz7oLtwm5naxR3PzSqVc5BjXi%2F5iTMtuTy6LPkuFDVaM5vSyKi9EcrWy%2BAdT7RhRHGP5nGf76MEw7HvHEdw2TU1%2BO8sh8g4obtcazQO5wewmh%2FwdEUrE5SwajFCa%2FlF7zjS43ODnVTcjXKRFPVNT%2F%2BeyIvWlIYmo0RdOM6H8%2BkLw0kum%2F8mDtq1FCQitu3uCabOqoak%2FY%2BsbwO4qnPmHUApzVg0R%2FWNEPlUbDLa%2Fkowk3hHbIXUDq%2FjfOrBzcBzyGsPRBZeHOSTil6xXxeQTVCSC9swZxP%2B1UCaoVhE5XkHgD7BoqeBXVA5C3KiQqnpPxxnsazh8LHSmzdzuiF39HM5ftiXjpy7RbvAm7OzVnJ7wNgLvaAgZ184MIG00BuQ9nJcZgK7uqxbj0xOYjQAhwFyzHxQ5HZUJ%2BbPyqEGRnPJoxRkVtqeF9b8FAmGHCj524UzuP6ofAhbtPZnCXFqAJpK8qcwpZWMvgY6pgFeoANev8Qlp99aIq%2FCWEhd9xKr4NRHJzU561%2FGjDsrrl4pARHSLUMP4a8AnipHVUZE9INOqWJZhP64A0L%2B5NE7xY3Um%2Fhj5ALgaC8yclboutZRoNzud0lxz%2FXPsU9gOVwrKIFk1hbxs85LbJd3Wyhcm8g%2FBdG8UKo%2BfWp1xERf3fDzs1QBSmuWWhhy6AFZySNJFyXpPhi6bLyUmGhNNgrw8DJp1J3R&X-Amz-Signature=8b4412eed5a34a9dd993c30a8fe800a09abf7c5abc8412be23b13b91bb91b9a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTNZV4WJ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICayhl0qShoQJYLX%2Brskp7kFol1iOIQVj6ythnhOvqJPAiAkdnvWit2Wp15SdjJDVioK3aJif7Qzy1j56EmZ1Z0zayqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9ThkugdrwwpxP7rKtwDI6vu8JvImkxBeu9RMWt9crSYi6w1hB16sRSMqxAp6784C5lDR7fpl9f%2FKE1gVTypEM%2B84Agu4X9kRJan6fx6UZHUgAPbSmUAdm4HTptaf9gJ1gF8%2FGW4PhiAh0bl5jP8lqZz0QrG5rkyCVx34NU9yGW5H51ADzVcbVz7oLtwm5naxR3PzSqVc5BjXi%2F5iTMtuTy6LPkuFDVaM5vSyKi9EcrWy%2BAdT7RhRHGP5nGf76MEw7HvHEdw2TU1%2BO8sh8g4obtcazQO5wewmh%2FwdEUrE5SwajFCa%2FlF7zjS43ODnVTcjXKRFPVNT%2F%2BeyIvWlIYmo0RdOM6H8%2BkLw0kum%2F8mDtq1FCQitu3uCabOqoak%2FY%2BsbwO4qnPmHUApzVg0R%2FWNEPlUbDLa%2Fkowk3hHbIXUDq%2FjfOrBzcBzyGsPRBZeHOSTil6xXxeQTVCSC9swZxP%2B1UCaoVhE5XkHgD7BoqeBXVA5C3KiQqnpPxxnsazh8LHSmzdzuiF39HM5ftiXjpy7RbvAm7OzVnJ7wNgLvaAgZ184MIG00BuQ9nJcZgK7uqxbj0xOYjQAhwFyzHxQ5HZUJ%2BbPyqEGRnPJoxRkVtqeF9b8FAmGHCj524UzuP6ofAhbtPZnCXFqAJpK8qcwpZWMvgY6pgFeoANev8Qlp99aIq%2FCWEhd9xKr4NRHJzU561%2FGjDsrrl4pARHSLUMP4a8AnipHVUZE9INOqWJZhP64A0L%2B5NE7xY3Um%2Fhj5ALgaC8yclboutZRoNzud0lxz%2FXPsU9gOVwrKIFk1hbxs85LbJd3Wyhcm8g%2FBdG8UKo%2BfWp1xERf3fDzs1QBSmuWWhhy6AFZySNJFyXpPhi6bLyUmGhNNgrw8DJp1J3R&X-Amz-Signature=6200ddbb0bcca3aeeeac25b21611a0fd7fd10773dceed3a2b53a878970cdf726&X-Amz-SignedHeaders=host&x-id=GetObject)
