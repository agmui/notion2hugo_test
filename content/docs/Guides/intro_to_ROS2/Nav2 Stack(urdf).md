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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KSJX7O%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIET0xe16%2BMBD405fID30SnYh%2Bq00pmgszE4ysX1cYco1AiBil2%2FCKtDCxmakl6RWqUq3FmzF1sbaMG1NIwZ7FkcSaCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3NIaPSf%2B4RzIxj9eKtwDqm9Dow6j0TEcKCHzh5cvH%2BGfpI8UjWYK227WX3uE850ZHKY%2BRwKCODieHdPUZERaziygi7s5JzVYX%2BUUxKs3TmMu%2BuIAbhZyoFQIaA2m0ZAYCgebFG%2F4UruJ9bsrM9ES5LFQqRZxe1q%2F3%2B2mX4Ihk%2Bq7XaXEepZK3U%2FJpu5eCSta99TguGP7NSqUBJBagFL1GcZ8mQvGTv6KjNoH%2FIkS6NXpOTLq%2BQahG1Y25eNeTfr8AVQWFZVOFzV3yCcyeA02%2F1kGqnZRXpJdvoQMsUVexGlLnXqQ%2BTbD6HnbBc8UnXjK58CGr6SDYXBmTLpjaPq5nxtjqO5qII%2FDIKN7sfIsz0Q9unQjdyPKu8bDXWBQDlrIcw75e3e%2BtPXB3ipXyNZpX5Sb4jXB8U0liNDbxIWrF4tS2szJumIlPrSf8NS6sAL5FWrXhnv%2FtcsNAFTyHVRIt9fiZ8ntL5qVtgoTjn2b5t55iklVASfsicNvOh6yzPnjcLtyqWhvCRzQuqRrAioJ3snmAgOJuXDlaBYxxN2asUpAO1B2Om1lKWjMo8tUyOgdYtK4bloAghVkATyno4pOFsVv2lLGF01jBnNF7wFL6Yzw7jVcKqOl%2F7qb3eL86ZSTFqv%2Fcq1vU7apjPIwgIn%2FwQY6pgGrkm0FuI%2BRZQrIpTiVnBpDpX4m0EiMef3THRtfJubPO0IFm%2Flniow0bnJTSU0b8Yo8v4k6VmSJnhmI1wMC%2FotE1i7eYxuqGbZESHkCOKCTUTSjo7eL7XLB8eVLUbazaksl3hksNIexupWbsEv1Rnr63oOihewvpLqjHHewBEKw3JtHOOza0leTIcbtJcb4X0jhlag3wz8xexnsNqRvcvw2daAFeYGB&X-Amz-Signature=ca82b52eeb7dcd46a83335bab9de378d3bc77de58851261dfb0e672208e2851a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KSJX7O%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIET0xe16%2BMBD405fID30SnYh%2Bq00pmgszE4ysX1cYco1AiBil2%2FCKtDCxmakl6RWqUq3FmzF1sbaMG1NIwZ7FkcSaCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3NIaPSf%2B4RzIxj9eKtwDqm9Dow6j0TEcKCHzh5cvH%2BGfpI8UjWYK227WX3uE850ZHKY%2BRwKCODieHdPUZERaziygi7s5JzVYX%2BUUxKs3TmMu%2BuIAbhZyoFQIaA2m0ZAYCgebFG%2F4UruJ9bsrM9ES5LFQqRZxe1q%2F3%2B2mX4Ihk%2Bq7XaXEepZK3U%2FJpu5eCSta99TguGP7NSqUBJBagFL1GcZ8mQvGTv6KjNoH%2FIkS6NXpOTLq%2BQahG1Y25eNeTfr8AVQWFZVOFzV3yCcyeA02%2F1kGqnZRXpJdvoQMsUVexGlLnXqQ%2BTbD6HnbBc8UnXjK58CGr6SDYXBmTLpjaPq5nxtjqO5qII%2FDIKN7sfIsz0Q9unQjdyPKu8bDXWBQDlrIcw75e3e%2BtPXB3ipXyNZpX5Sb4jXB8U0liNDbxIWrF4tS2szJumIlPrSf8NS6sAL5FWrXhnv%2FtcsNAFTyHVRIt9fiZ8ntL5qVtgoTjn2b5t55iklVASfsicNvOh6yzPnjcLtyqWhvCRzQuqRrAioJ3snmAgOJuXDlaBYxxN2asUpAO1B2Om1lKWjMo8tUyOgdYtK4bloAghVkATyno4pOFsVv2lLGF01jBnNF7wFL6Yzw7jVcKqOl%2F7qb3eL86ZSTFqv%2Fcq1vU7apjPIwgIn%2FwQY6pgGrkm0FuI%2BRZQrIpTiVnBpDpX4m0EiMef3THRtfJubPO0IFm%2Flniow0bnJTSU0b8Yo8v4k6VmSJnhmI1wMC%2FotE1i7eYxuqGbZESHkCOKCTUTSjo7eL7XLB8eVLUbazaksl3hksNIexupWbsEv1Rnr63oOihewvpLqjHHewBEKw3JtHOOza0leTIcbtJcb4X0jhlag3wz8xexnsNqRvcvw2daAFeYGB&X-Amz-Signature=432af713f67705c90c1f8bdd408cafdb57c15972a0a47530c116e56f419c2dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KSJX7O%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIET0xe16%2BMBD405fID30SnYh%2Bq00pmgszE4ysX1cYco1AiBil2%2FCKtDCxmakl6RWqUq3FmzF1sbaMG1NIwZ7FkcSaCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3NIaPSf%2B4RzIxj9eKtwDqm9Dow6j0TEcKCHzh5cvH%2BGfpI8UjWYK227WX3uE850ZHKY%2BRwKCODieHdPUZERaziygi7s5JzVYX%2BUUxKs3TmMu%2BuIAbhZyoFQIaA2m0ZAYCgebFG%2F4UruJ9bsrM9ES5LFQqRZxe1q%2F3%2B2mX4Ihk%2Bq7XaXEepZK3U%2FJpu5eCSta99TguGP7NSqUBJBagFL1GcZ8mQvGTv6KjNoH%2FIkS6NXpOTLq%2BQahG1Y25eNeTfr8AVQWFZVOFzV3yCcyeA02%2F1kGqnZRXpJdvoQMsUVexGlLnXqQ%2BTbD6HnbBc8UnXjK58CGr6SDYXBmTLpjaPq5nxtjqO5qII%2FDIKN7sfIsz0Q9unQjdyPKu8bDXWBQDlrIcw75e3e%2BtPXB3ipXyNZpX5Sb4jXB8U0liNDbxIWrF4tS2szJumIlPrSf8NS6sAL5FWrXhnv%2FtcsNAFTyHVRIt9fiZ8ntL5qVtgoTjn2b5t55iklVASfsicNvOh6yzPnjcLtyqWhvCRzQuqRrAioJ3snmAgOJuXDlaBYxxN2asUpAO1B2Om1lKWjMo8tUyOgdYtK4bloAghVkATyno4pOFsVv2lLGF01jBnNF7wFL6Yzw7jVcKqOl%2F7qb3eL86ZSTFqv%2Fcq1vU7apjPIwgIn%2FwQY6pgGrkm0FuI%2BRZQrIpTiVnBpDpX4m0EiMef3THRtfJubPO0IFm%2Flniow0bnJTSU0b8Yo8v4k6VmSJnhmI1wMC%2FotE1i7eYxuqGbZESHkCOKCTUTSjo7eL7XLB8eVLUbazaksl3hksNIexupWbsEv1Rnr63oOihewvpLqjHHewBEKw3JtHOOza0leTIcbtJcb4X0jhlag3wz8xexnsNqRvcvw2daAFeYGB&X-Amz-Signature=10e9f67aac03cf7666a6b48931d8b6f5eff7199b0ee2ef38b67c843a2394bca4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KSJX7O%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIET0xe16%2BMBD405fID30SnYh%2Bq00pmgszE4ysX1cYco1AiBil2%2FCKtDCxmakl6RWqUq3FmzF1sbaMG1NIwZ7FkcSaCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3NIaPSf%2B4RzIxj9eKtwDqm9Dow6j0TEcKCHzh5cvH%2BGfpI8UjWYK227WX3uE850ZHKY%2BRwKCODieHdPUZERaziygi7s5JzVYX%2BUUxKs3TmMu%2BuIAbhZyoFQIaA2m0ZAYCgebFG%2F4UruJ9bsrM9ES5LFQqRZxe1q%2F3%2B2mX4Ihk%2Bq7XaXEepZK3U%2FJpu5eCSta99TguGP7NSqUBJBagFL1GcZ8mQvGTv6KjNoH%2FIkS6NXpOTLq%2BQahG1Y25eNeTfr8AVQWFZVOFzV3yCcyeA02%2F1kGqnZRXpJdvoQMsUVexGlLnXqQ%2BTbD6HnbBc8UnXjK58CGr6SDYXBmTLpjaPq5nxtjqO5qII%2FDIKN7sfIsz0Q9unQjdyPKu8bDXWBQDlrIcw75e3e%2BtPXB3ipXyNZpX5Sb4jXB8U0liNDbxIWrF4tS2szJumIlPrSf8NS6sAL5FWrXhnv%2FtcsNAFTyHVRIt9fiZ8ntL5qVtgoTjn2b5t55iklVASfsicNvOh6yzPnjcLtyqWhvCRzQuqRrAioJ3snmAgOJuXDlaBYxxN2asUpAO1B2Om1lKWjMo8tUyOgdYtK4bloAghVkATyno4pOFsVv2lLGF01jBnNF7wFL6Yzw7jVcKqOl%2F7qb3eL86ZSTFqv%2Fcq1vU7apjPIwgIn%2FwQY6pgGrkm0FuI%2BRZQrIpTiVnBpDpX4m0EiMef3THRtfJubPO0IFm%2Flniow0bnJTSU0b8Yo8v4k6VmSJnhmI1wMC%2FotE1i7eYxuqGbZESHkCOKCTUTSjo7eL7XLB8eVLUbazaksl3hksNIexupWbsEv1Rnr63oOihewvpLqjHHewBEKw3JtHOOza0leTIcbtJcb4X0jhlag3wz8xexnsNqRvcvw2daAFeYGB&X-Amz-Signature=4b00c2d8755e2a1ca34d3be1fc41029224db39970828b7cef62ce2f8671829a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KSJX7O%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIET0xe16%2BMBD405fID30SnYh%2Bq00pmgszE4ysX1cYco1AiBil2%2FCKtDCxmakl6RWqUq3FmzF1sbaMG1NIwZ7FkcSaCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3NIaPSf%2B4RzIxj9eKtwDqm9Dow6j0TEcKCHzh5cvH%2BGfpI8UjWYK227WX3uE850ZHKY%2BRwKCODieHdPUZERaziygi7s5JzVYX%2BUUxKs3TmMu%2BuIAbhZyoFQIaA2m0ZAYCgebFG%2F4UruJ9bsrM9ES5LFQqRZxe1q%2F3%2B2mX4Ihk%2Bq7XaXEepZK3U%2FJpu5eCSta99TguGP7NSqUBJBagFL1GcZ8mQvGTv6KjNoH%2FIkS6NXpOTLq%2BQahG1Y25eNeTfr8AVQWFZVOFzV3yCcyeA02%2F1kGqnZRXpJdvoQMsUVexGlLnXqQ%2BTbD6HnbBc8UnXjK58CGr6SDYXBmTLpjaPq5nxtjqO5qII%2FDIKN7sfIsz0Q9unQjdyPKu8bDXWBQDlrIcw75e3e%2BtPXB3ipXyNZpX5Sb4jXB8U0liNDbxIWrF4tS2szJumIlPrSf8NS6sAL5FWrXhnv%2FtcsNAFTyHVRIt9fiZ8ntL5qVtgoTjn2b5t55iklVASfsicNvOh6yzPnjcLtyqWhvCRzQuqRrAioJ3snmAgOJuXDlaBYxxN2asUpAO1B2Om1lKWjMo8tUyOgdYtK4bloAghVkATyno4pOFsVv2lLGF01jBnNF7wFL6Yzw7jVcKqOl%2F7qb3eL86ZSTFqv%2Fcq1vU7apjPIwgIn%2FwQY6pgGrkm0FuI%2BRZQrIpTiVnBpDpX4m0EiMef3THRtfJubPO0IFm%2Flniow0bnJTSU0b8Yo8v4k6VmSJnhmI1wMC%2FotE1i7eYxuqGbZESHkCOKCTUTSjo7eL7XLB8eVLUbazaksl3hksNIexupWbsEv1Rnr63oOihewvpLqjHHewBEKw3JtHOOza0leTIcbtJcb4X0jhlag3wz8xexnsNqRvcvw2daAFeYGB&X-Amz-Signature=bca56ab29e5c70500536a184ae76ecd53288e147b4d1e08a8364ad18ecda509d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KSJX7O%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIET0xe16%2BMBD405fID30SnYh%2Bq00pmgszE4ysX1cYco1AiBil2%2FCKtDCxmakl6RWqUq3FmzF1sbaMG1NIwZ7FkcSaCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM3NIaPSf%2B4RzIxj9eKtwDqm9Dow6j0TEcKCHzh5cvH%2BGfpI8UjWYK227WX3uE850ZHKY%2BRwKCODieHdPUZERaziygi7s5JzVYX%2BUUxKs3TmMu%2BuIAbhZyoFQIaA2m0ZAYCgebFG%2F4UruJ9bsrM9ES5LFQqRZxe1q%2F3%2B2mX4Ihk%2Bq7XaXEepZK3U%2FJpu5eCSta99TguGP7NSqUBJBagFL1GcZ8mQvGTv6KjNoH%2FIkS6NXpOTLq%2BQahG1Y25eNeTfr8AVQWFZVOFzV3yCcyeA02%2F1kGqnZRXpJdvoQMsUVexGlLnXqQ%2BTbD6HnbBc8UnXjK58CGr6SDYXBmTLpjaPq5nxtjqO5qII%2FDIKN7sfIsz0Q9unQjdyPKu8bDXWBQDlrIcw75e3e%2BtPXB3ipXyNZpX5Sb4jXB8U0liNDbxIWrF4tS2szJumIlPrSf8NS6sAL5FWrXhnv%2FtcsNAFTyHVRIt9fiZ8ntL5qVtgoTjn2b5t55iklVASfsicNvOh6yzPnjcLtyqWhvCRzQuqRrAioJ3snmAgOJuXDlaBYxxN2asUpAO1B2Om1lKWjMo8tUyOgdYtK4bloAghVkATyno4pOFsVv2lLGF01jBnNF7wFL6Yzw7jVcKqOl%2F7qb3eL86ZSTFqv%2Fcq1vU7apjPIwgIn%2FwQY6pgGrkm0FuI%2BRZQrIpTiVnBpDpX4m0EiMef3THRtfJubPO0IFm%2Flniow0bnJTSU0b8Yo8v4k6VmSJnhmI1wMC%2FotE1i7eYxuqGbZESHkCOKCTUTSjo7eL7XLB8eVLUbazaksl3hksNIexupWbsEv1Rnr63oOihewvpLqjHHewBEKw3JtHOOza0leTIcbtJcb4X0jhlag3wz8xexnsNqRvcvw2daAFeYGB&X-Amz-Signature=707581a0d982edfd5ec2c1ebed19e748e18ddf5f82eb1b359c1b3d0237de7e11&X-Amz-SignedHeaders=host&x-id=GetObject)
