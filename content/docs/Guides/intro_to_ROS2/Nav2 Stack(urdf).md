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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ASTOIT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClFOQ83VcsU%2FpAm5RhSpKpQYr4ZhLtBQ27jqVWFtpuAiB7BQcZv5glwjpEbpWuqi2r1lOnqjB%2F42LKl6FW%2BiS%2BhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJk7iIhmxUzciHwA5KtwDJXGTq55WTCV6kVxq8y8iO6RPXCuFCc1iFISdxbym9EW%2FychQYmqT%2BYOK4Eu4KMxL8r1Eqc5RJHyGIWmnFNm5CAYN9Oyv87DV4l63xUhvsyLwbyhFb5CzoZHsUC9amLlIJuNIM%2FvjKLyzAb%2BE%2B3o3klYdxv6io2LiW3kxPypSRx%2F%2By64ROuyAntvzLEEvnn6OW8lRrUMClIuEzbf%2B2OzBdjCVatJd1Hux45ibdE99lkw5R1foOhDna4PJjt5ErMoUqmUKB89glx9t8fGRhFf8MNTONKOrhbqI7uY1PnFGcDpResdRni1wDaeyG3PHkvIZeke9kCwDt4kRr8KMTB9C9JNcMaepyXoUDIvY941Zq318KIGIvAaPqJ6dyO9EnFH%2FlsEisWVPo6gV8L3omlIQ63z6Ig5hEtBwHxYsfPLw2epwUX2XB9cFGap8uGg6Z0RgzNzRHCj8NulIch1eAqiCp2EWFiAaL6CEYFK%2Bz6E5Nkoyf9Q6qEqiqJoBQWSuBsLtWpOLc6OiingR8CLOadTlbTY25cHZNlLfybd1zciCXphURyoF4mCMGt0L3PlXOB14FnLmn4HAGXsxmJ07hAAWWC2mrO4TbPxmt0otUDUAL9TeSUnHTu5f44j8Y4Yw2%2BSKwAY6pgH3bddpNrpy9dE%2BcuIxKeK6AfngmiwXDDNUlcufM5tMJvqhKhu3Xl0nFgI52T6Z4ez7cT3XwBYjf01zVo%2BurQnVQajcYyK7%2F1xaZgkeDyyudGrmnNPlR4wvFQYM3vk2P4CS8lKXFXEVA8A8cerD2osd7A2ooE1%2FrYx0az5AVjIcneboEqWtW%2FHi29SVgrIrg5uzXxQTFymwF6cUOusLp66NFB8SorWA&X-Amz-Signature=4f1f9a724ac43ed502984b05f42e9f612456a30a630f90f8255c18d1dd500283&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ASTOIT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClFOQ83VcsU%2FpAm5RhSpKpQYr4ZhLtBQ27jqVWFtpuAiB7BQcZv5glwjpEbpWuqi2r1lOnqjB%2F42LKl6FW%2BiS%2BhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJk7iIhmxUzciHwA5KtwDJXGTq55WTCV6kVxq8y8iO6RPXCuFCc1iFISdxbym9EW%2FychQYmqT%2BYOK4Eu4KMxL8r1Eqc5RJHyGIWmnFNm5CAYN9Oyv87DV4l63xUhvsyLwbyhFb5CzoZHsUC9amLlIJuNIM%2FvjKLyzAb%2BE%2B3o3klYdxv6io2LiW3kxPypSRx%2F%2By64ROuyAntvzLEEvnn6OW8lRrUMClIuEzbf%2B2OzBdjCVatJd1Hux45ibdE99lkw5R1foOhDna4PJjt5ErMoUqmUKB89glx9t8fGRhFf8MNTONKOrhbqI7uY1PnFGcDpResdRni1wDaeyG3PHkvIZeke9kCwDt4kRr8KMTB9C9JNcMaepyXoUDIvY941Zq318KIGIvAaPqJ6dyO9EnFH%2FlsEisWVPo6gV8L3omlIQ63z6Ig5hEtBwHxYsfPLw2epwUX2XB9cFGap8uGg6Z0RgzNzRHCj8NulIch1eAqiCp2EWFiAaL6CEYFK%2Bz6E5Nkoyf9Q6qEqiqJoBQWSuBsLtWpOLc6OiingR8CLOadTlbTY25cHZNlLfybd1zciCXphURyoF4mCMGt0L3PlXOB14FnLmn4HAGXsxmJ07hAAWWC2mrO4TbPxmt0otUDUAL9TeSUnHTu5f44j8Y4Yw2%2BSKwAY6pgH3bddpNrpy9dE%2BcuIxKeK6AfngmiwXDDNUlcufM5tMJvqhKhu3Xl0nFgI52T6Z4ez7cT3XwBYjf01zVo%2BurQnVQajcYyK7%2F1xaZgkeDyyudGrmnNPlR4wvFQYM3vk2P4CS8lKXFXEVA8A8cerD2osd7A2ooE1%2FrYx0az5AVjIcneboEqWtW%2FHi29SVgrIrg5uzXxQTFymwF6cUOusLp66NFB8SorWA&X-Amz-Signature=2293d927001053513ed90d3710cbdaec41b87d93513770d856a24ff4a6a5fc10&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ASTOIT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClFOQ83VcsU%2FpAm5RhSpKpQYr4ZhLtBQ27jqVWFtpuAiB7BQcZv5glwjpEbpWuqi2r1lOnqjB%2F42LKl6FW%2BiS%2BhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJk7iIhmxUzciHwA5KtwDJXGTq55WTCV6kVxq8y8iO6RPXCuFCc1iFISdxbym9EW%2FychQYmqT%2BYOK4Eu4KMxL8r1Eqc5RJHyGIWmnFNm5CAYN9Oyv87DV4l63xUhvsyLwbyhFb5CzoZHsUC9amLlIJuNIM%2FvjKLyzAb%2BE%2B3o3klYdxv6io2LiW3kxPypSRx%2F%2By64ROuyAntvzLEEvnn6OW8lRrUMClIuEzbf%2B2OzBdjCVatJd1Hux45ibdE99lkw5R1foOhDna4PJjt5ErMoUqmUKB89glx9t8fGRhFf8MNTONKOrhbqI7uY1PnFGcDpResdRni1wDaeyG3PHkvIZeke9kCwDt4kRr8KMTB9C9JNcMaepyXoUDIvY941Zq318KIGIvAaPqJ6dyO9EnFH%2FlsEisWVPo6gV8L3omlIQ63z6Ig5hEtBwHxYsfPLw2epwUX2XB9cFGap8uGg6Z0RgzNzRHCj8NulIch1eAqiCp2EWFiAaL6CEYFK%2Bz6E5Nkoyf9Q6qEqiqJoBQWSuBsLtWpOLc6OiingR8CLOadTlbTY25cHZNlLfybd1zciCXphURyoF4mCMGt0L3PlXOB14FnLmn4HAGXsxmJ07hAAWWC2mrO4TbPxmt0otUDUAL9TeSUnHTu5f44j8Y4Yw2%2BSKwAY6pgH3bddpNrpy9dE%2BcuIxKeK6AfngmiwXDDNUlcufM5tMJvqhKhu3Xl0nFgI52T6Z4ez7cT3XwBYjf01zVo%2BurQnVQajcYyK7%2F1xaZgkeDyyudGrmnNPlR4wvFQYM3vk2P4CS8lKXFXEVA8A8cerD2osd7A2ooE1%2FrYx0az5AVjIcneboEqWtW%2FHi29SVgrIrg5uzXxQTFymwF6cUOusLp66NFB8SorWA&X-Amz-Signature=7b0bca0ec58badc17ee37338c58229298ac4443f21f02927ed8f8feb5b42ce54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ASTOIT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClFOQ83VcsU%2FpAm5RhSpKpQYr4ZhLtBQ27jqVWFtpuAiB7BQcZv5glwjpEbpWuqi2r1lOnqjB%2F42LKl6FW%2BiS%2BhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJk7iIhmxUzciHwA5KtwDJXGTq55WTCV6kVxq8y8iO6RPXCuFCc1iFISdxbym9EW%2FychQYmqT%2BYOK4Eu4KMxL8r1Eqc5RJHyGIWmnFNm5CAYN9Oyv87DV4l63xUhvsyLwbyhFb5CzoZHsUC9amLlIJuNIM%2FvjKLyzAb%2BE%2B3o3klYdxv6io2LiW3kxPypSRx%2F%2By64ROuyAntvzLEEvnn6OW8lRrUMClIuEzbf%2B2OzBdjCVatJd1Hux45ibdE99lkw5R1foOhDna4PJjt5ErMoUqmUKB89glx9t8fGRhFf8MNTONKOrhbqI7uY1PnFGcDpResdRni1wDaeyG3PHkvIZeke9kCwDt4kRr8KMTB9C9JNcMaepyXoUDIvY941Zq318KIGIvAaPqJ6dyO9EnFH%2FlsEisWVPo6gV8L3omlIQ63z6Ig5hEtBwHxYsfPLw2epwUX2XB9cFGap8uGg6Z0RgzNzRHCj8NulIch1eAqiCp2EWFiAaL6CEYFK%2Bz6E5Nkoyf9Q6qEqiqJoBQWSuBsLtWpOLc6OiingR8CLOadTlbTY25cHZNlLfybd1zciCXphURyoF4mCMGt0L3PlXOB14FnLmn4HAGXsxmJ07hAAWWC2mrO4TbPxmt0otUDUAL9TeSUnHTu5f44j8Y4Yw2%2BSKwAY6pgH3bddpNrpy9dE%2BcuIxKeK6AfngmiwXDDNUlcufM5tMJvqhKhu3Xl0nFgI52T6Z4ez7cT3XwBYjf01zVo%2BurQnVQajcYyK7%2F1xaZgkeDyyudGrmnNPlR4wvFQYM3vk2P4CS8lKXFXEVA8A8cerD2osd7A2ooE1%2FrYx0az5AVjIcneboEqWtW%2FHi29SVgrIrg5uzXxQTFymwF6cUOusLp66NFB8SorWA&X-Amz-Signature=44b09c830f814df6d4fae5ea0c05a065d6615ab16f8cfa3099e3171fc494737a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ASTOIT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClFOQ83VcsU%2FpAm5RhSpKpQYr4ZhLtBQ27jqVWFtpuAiB7BQcZv5glwjpEbpWuqi2r1lOnqjB%2F42LKl6FW%2BiS%2BhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJk7iIhmxUzciHwA5KtwDJXGTq55WTCV6kVxq8y8iO6RPXCuFCc1iFISdxbym9EW%2FychQYmqT%2BYOK4Eu4KMxL8r1Eqc5RJHyGIWmnFNm5CAYN9Oyv87DV4l63xUhvsyLwbyhFb5CzoZHsUC9amLlIJuNIM%2FvjKLyzAb%2BE%2B3o3klYdxv6io2LiW3kxPypSRx%2F%2By64ROuyAntvzLEEvnn6OW8lRrUMClIuEzbf%2B2OzBdjCVatJd1Hux45ibdE99lkw5R1foOhDna4PJjt5ErMoUqmUKB89glx9t8fGRhFf8MNTONKOrhbqI7uY1PnFGcDpResdRni1wDaeyG3PHkvIZeke9kCwDt4kRr8KMTB9C9JNcMaepyXoUDIvY941Zq318KIGIvAaPqJ6dyO9EnFH%2FlsEisWVPo6gV8L3omlIQ63z6Ig5hEtBwHxYsfPLw2epwUX2XB9cFGap8uGg6Z0RgzNzRHCj8NulIch1eAqiCp2EWFiAaL6CEYFK%2Bz6E5Nkoyf9Q6qEqiqJoBQWSuBsLtWpOLc6OiingR8CLOadTlbTY25cHZNlLfybd1zciCXphURyoF4mCMGt0L3PlXOB14FnLmn4HAGXsxmJ07hAAWWC2mrO4TbPxmt0otUDUAL9TeSUnHTu5f44j8Y4Yw2%2BSKwAY6pgH3bddpNrpy9dE%2BcuIxKeK6AfngmiwXDDNUlcufM5tMJvqhKhu3Xl0nFgI52T6Z4ez7cT3XwBYjf01zVo%2BurQnVQajcYyK7%2F1xaZgkeDyyudGrmnNPlR4wvFQYM3vk2P4CS8lKXFXEVA8A8cerD2osd7A2ooE1%2FrYx0az5AVjIcneboEqWtW%2FHi29SVgrIrg5uzXxQTFymwF6cUOusLp66NFB8SorWA&X-Amz-Signature=ae4140cd1e81c5ea41a9f9773f7e67e732230bc41733160c8745107112a1b3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3ASTOIT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBClFOQ83VcsU%2FpAm5RhSpKpQYr4ZhLtBQ27jqVWFtpuAiB7BQcZv5glwjpEbpWuqi2r1lOnqjB%2F42LKl6FW%2BiS%2BhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJk7iIhmxUzciHwA5KtwDJXGTq55WTCV6kVxq8y8iO6RPXCuFCc1iFISdxbym9EW%2FychQYmqT%2BYOK4Eu4KMxL8r1Eqc5RJHyGIWmnFNm5CAYN9Oyv87DV4l63xUhvsyLwbyhFb5CzoZHsUC9amLlIJuNIM%2FvjKLyzAb%2BE%2B3o3klYdxv6io2LiW3kxPypSRx%2F%2By64ROuyAntvzLEEvnn6OW8lRrUMClIuEzbf%2B2OzBdjCVatJd1Hux45ibdE99lkw5R1foOhDna4PJjt5ErMoUqmUKB89glx9t8fGRhFf8MNTONKOrhbqI7uY1PnFGcDpResdRni1wDaeyG3PHkvIZeke9kCwDt4kRr8KMTB9C9JNcMaepyXoUDIvY941Zq318KIGIvAaPqJ6dyO9EnFH%2FlsEisWVPo6gV8L3omlIQ63z6Ig5hEtBwHxYsfPLw2epwUX2XB9cFGap8uGg6Z0RgzNzRHCj8NulIch1eAqiCp2EWFiAaL6CEYFK%2Bz6E5Nkoyf9Q6qEqiqJoBQWSuBsLtWpOLc6OiingR8CLOadTlbTY25cHZNlLfybd1zciCXphURyoF4mCMGt0L3PlXOB14FnLmn4HAGXsxmJ07hAAWWC2mrO4TbPxmt0otUDUAL9TeSUnHTu5f44j8Y4Yw2%2BSKwAY6pgH3bddpNrpy9dE%2BcuIxKeK6AfngmiwXDDNUlcufM5tMJvqhKhu3Xl0nFgI52T6Z4ez7cT3XwBYjf01zVo%2BurQnVQajcYyK7%2F1xaZgkeDyyudGrmnNPlR4wvFQYM3vk2P4CS8lKXFXEVA8A8cerD2osd7A2ooE1%2FrYx0az5AVjIcneboEqWtW%2FHi29SVgrIrg5uzXxQTFymwF6cUOusLp66NFB8SorWA&X-Amz-Signature=5e090ad0482fba47e63991e5711007cdc801bbe7d132c482258a3c33a4dfde13&X-Amz-SignedHeaders=host&x-id=GetObject)
