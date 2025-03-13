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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUI66HIZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrUHYoINYQcZ3EfOdCQLihTD7okeKgxlz5LYE2snfG7AiA1TpDr7pa7BqFliZ0hvlj7qqKcBq%2FJQ6wWxnt9gg6B2CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5XC9PoKz73IeC0pKtwDEeOzThYcqa%2FNZ8MjYulRmwXBWOxwue3Z%2BbfSGM4s34rpd2I9d4fv2mlB8gwBSCGdFIrV9WZWUwtvdfzv%2FvzxUs4BsFicgeHl2CyVXMQYZBLA555tGXzPbDlQhxu6HHeRDZ2Fupqw6VaeCW7VcGZlIQs0uwTFdJs7cfxG7Bv4QikKuwE%2BxMsZMfcvsRrq%2FKdmCTo0gmsnm5h0aE1vi6CuijwWiz3rNajOFS%2BxdU9AJnhQ7pSsQUPZo3I%2BnjXkoZnkn7gG3Ph3QqxmTVY0wOPD9t76yHmLuC1bZpxMu702kz549ASgDHC9zXYaS7iZXpVq2A%2FYPtlIJKebvzun1W2r1rnpOChiIq0NWCwcDFIth1wFrnMWP5lawZ6QqcJKbwGuIlKhcoZSo96zKTpUaB4CGLVfdguHK%2BQ7ukaCQFkXQy2pbleSF3CI2S8WuSU%2FRq4%2F6g9G2MhXfXT7fUPMF%2BrLaBQN4yXdA4vPwzeNeK6tJQwobsJoQnr9ySnjMfhfI5NV3rlsQmDZmB1POaJw%2Bo%2FMP2rmFQVa89L2eZSfEpp6kWWwB8jPrM6qSg9qVmA4UhTm%2FfCA65EA9R4cwGGDq%2FKnIqrQ1iy4sA8UiU9q7bsqXoV%2BfUSt7Qts9XrE35Ew16PKvgY6pgENsTjnpoFcVMxKz%2BWxWJMcoKe32bqXUqipKYlBXs0m2wfxr%2BtiS7i3z0dx9qR32aGDAzU0FfAV7cEyrUSt8XxTgnFEp2dI8Cs5NJhBnB0%2FReO4EENs5C4JT01pPPl%2Fwm6uKv%2FOw4bmrLKMRrKp7A9YVNOuCi5iqduy%2Bp8UA%2FekVam03YX9c2YUb6pbxoexly5usYdmrvyIdRtgN48PoHyGgr0%2BO5v2&X-Amz-Signature=0a8458e658013df174a447c09d91cf6b79725925d42a68d6b5e0812b60f7981f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUI66HIZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrUHYoINYQcZ3EfOdCQLihTD7okeKgxlz5LYE2snfG7AiA1TpDr7pa7BqFliZ0hvlj7qqKcBq%2FJQ6wWxnt9gg6B2CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5XC9PoKz73IeC0pKtwDEeOzThYcqa%2FNZ8MjYulRmwXBWOxwue3Z%2BbfSGM4s34rpd2I9d4fv2mlB8gwBSCGdFIrV9WZWUwtvdfzv%2FvzxUs4BsFicgeHl2CyVXMQYZBLA555tGXzPbDlQhxu6HHeRDZ2Fupqw6VaeCW7VcGZlIQs0uwTFdJs7cfxG7Bv4QikKuwE%2BxMsZMfcvsRrq%2FKdmCTo0gmsnm5h0aE1vi6CuijwWiz3rNajOFS%2BxdU9AJnhQ7pSsQUPZo3I%2BnjXkoZnkn7gG3Ph3QqxmTVY0wOPD9t76yHmLuC1bZpxMu702kz549ASgDHC9zXYaS7iZXpVq2A%2FYPtlIJKebvzun1W2r1rnpOChiIq0NWCwcDFIth1wFrnMWP5lawZ6QqcJKbwGuIlKhcoZSo96zKTpUaB4CGLVfdguHK%2BQ7ukaCQFkXQy2pbleSF3CI2S8WuSU%2FRq4%2F6g9G2MhXfXT7fUPMF%2BrLaBQN4yXdA4vPwzeNeK6tJQwobsJoQnr9ySnjMfhfI5NV3rlsQmDZmB1POaJw%2Bo%2FMP2rmFQVa89L2eZSfEpp6kWWwB8jPrM6qSg9qVmA4UhTm%2FfCA65EA9R4cwGGDq%2FKnIqrQ1iy4sA8UiU9q7bsqXoV%2BfUSt7Qts9XrE35Ew16PKvgY6pgENsTjnpoFcVMxKz%2BWxWJMcoKe32bqXUqipKYlBXs0m2wfxr%2BtiS7i3z0dx9qR32aGDAzU0FfAV7cEyrUSt8XxTgnFEp2dI8Cs5NJhBnB0%2FReO4EENs5C4JT01pPPl%2Fwm6uKv%2FOw4bmrLKMRrKp7A9YVNOuCi5iqduy%2Bp8UA%2FekVam03YX9c2YUb6pbxoexly5usYdmrvyIdRtgN48PoHyGgr0%2BO5v2&X-Amz-Signature=143a81c35aae7bdffc7b5a3705c13138b69aa8cca2b701170a5952d63e760fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUI66HIZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrUHYoINYQcZ3EfOdCQLihTD7okeKgxlz5LYE2snfG7AiA1TpDr7pa7BqFliZ0hvlj7qqKcBq%2FJQ6wWxnt9gg6B2CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5XC9PoKz73IeC0pKtwDEeOzThYcqa%2FNZ8MjYulRmwXBWOxwue3Z%2BbfSGM4s34rpd2I9d4fv2mlB8gwBSCGdFIrV9WZWUwtvdfzv%2FvzxUs4BsFicgeHl2CyVXMQYZBLA555tGXzPbDlQhxu6HHeRDZ2Fupqw6VaeCW7VcGZlIQs0uwTFdJs7cfxG7Bv4QikKuwE%2BxMsZMfcvsRrq%2FKdmCTo0gmsnm5h0aE1vi6CuijwWiz3rNajOFS%2BxdU9AJnhQ7pSsQUPZo3I%2BnjXkoZnkn7gG3Ph3QqxmTVY0wOPD9t76yHmLuC1bZpxMu702kz549ASgDHC9zXYaS7iZXpVq2A%2FYPtlIJKebvzun1W2r1rnpOChiIq0NWCwcDFIth1wFrnMWP5lawZ6QqcJKbwGuIlKhcoZSo96zKTpUaB4CGLVfdguHK%2BQ7ukaCQFkXQy2pbleSF3CI2S8WuSU%2FRq4%2F6g9G2MhXfXT7fUPMF%2BrLaBQN4yXdA4vPwzeNeK6tJQwobsJoQnr9ySnjMfhfI5NV3rlsQmDZmB1POaJw%2Bo%2FMP2rmFQVa89L2eZSfEpp6kWWwB8jPrM6qSg9qVmA4UhTm%2FfCA65EA9R4cwGGDq%2FKnIqrQ1iy4sA8UiU9q7bsqXoV%2BfUSt7Qts9XrE35Ew16PKvgY6pgENsTjnpoFcVMxKz%2BWxWJMcoKe32bqXUqipKYlBXs0m2wfxr%2BtiS7i3z0dx9qR32aGDAzU0FfAV7cEyrUSt8XxTgnFEp2dI8Cs5NJhBnB0%2FReO4EENs5C4JT01pPPl%2Fwm6uKv%2FOw4bmrLKMRrKp7A9YVNOuCi5iqduy%2Bp8UA%2FekVam03YX9c2YUb6pbxoexly5usYdmrvyIdRtgN48PoHyGgr0%2BO5v2&X-Amz-Signature=7686ef7e5d21dc59904f860000572951554c20a72587e1df3e77636cd3e09f55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUI66HIZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrUHYoINYQcZ3EfOdCQLihTD7okeKgxlz5LYE2snfG7AiA1TpDr7pa7BqFliZ0hvlj7qqKcBq%2FJQ6wWxnt9gg6B2CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5XC9PoKz73IeC0pKtwDEeOzThYcqa%2FNZ8MjYulRmwXBWOxwue3Z%2BbfSGM4s34rpd2I9d4fv2mlB8gwBSCGdFIrV9WZWUwtvdfzv%2FvzxUs4BsFicgeHl2CyVXMQYZBLA555tGXzPbDlQhxu6HHeRDZ2Fupqw6VaeCW7VcGZlIQs0uwTFdJs7cfxG7Bv4QikKuwE%2BxMsZMfcvsRrq%2FKdmCTo0gmsnm5h0aE1vi6CuijwWiz3rNajOFS%2BxdU9AJnhQ7pSsQUPZo3I%2BnjXkoZnkn7gG3Ph3QqxmTVY0wOPD9t76yHmLuC1bZpxMu702kz549ASgDHC9zXYaS7iZXpVq2A%2FYPtlIJKebvzun1W2r1rnpOChiIq0NWCwcDFIth1wFrnMWP5lawZ6QqcJKbwGuIlKhcoZSo96zKTpUaB4CGLVfdguHK%2BQ7ukaCQFkXQy2pbleSF3CI2S8WuSU%2FRq4%2F6g9G2MhXfXT7fUPMF%2BrLaBQN4yXdA4vPwzeNeK6tJQwobsJoQnr9ySnjMfhfI5NV3rlsQmDZmB1POaJw%2Bo%2FMP2rmFQVa89L2eZSfEpp6kWWwB8jPrM6qSg9qVmA4UhTm%2FfCA65EA9R4cwGGDq%2FKnIqrQ1iy4sA8UiU9q7bsqXoV%2BfUSt7Qts9XrE35Ew16PKvgY6pgENsTjnpoFcVMxKz%2BWxWJMcoKe32bqXUqipKYlBXs0m2wfxr%2BtiS7i3z0dx9qR32aGDAzU0FfAV7cEyrUSt8XxTgnFEp2dI8Cs5NJhBnB0%2FReO4EENs5C4JT01pPPl%2Fwm6uKv%2FOw4bmrLKMRrKp7A9YVNOuCi5iqduy%2Bp8UA%2FekVam03YX9c2YUb6pbxoexly5usYdmrvyIdRtgN48PoHyGgr0%2BO5v2&X-Amz-Signature=5ee07ca1428b56915025811617ebf2c7f8f48988f4770ba0a0e7bf19a34b6727&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUI66HIZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrUHYoINYQcZ3EfOdCQLihTD7okeKgxlz5LYE2snfG7AiA1TpDr7pa7BqFliZ0hvlj7qqKcBq%2FJQ6wWxnt9gg6B2CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5XC9PoKz73IeC0pKtwDEeOzThYcqa%2FNZ8MjYulRmwXBWOxwue3Z%2BbfSGM4s34rpd2I9d4fv2mlB8gwBSCGdFIrV9WZWUwtvdfzv%2FvzxUs4BsFicgeHl2CyVXMQYZBLA555tGXzPbDlQhxu6HHeRDZ2Fupqw6VaeCW7VcGZlIQs0uwTFdJs7cfxG7Bv4QikKuwE%2BxMsZMfcvsRrq%2FKdmCTo0gmsnm5h0aE1vi6CuijwWiz3rNajOFS%2BxdU9AJnhQ7pSsQUPZo3I%2BnjXkoZnkn7gG3Ph3QqxmTVY0wOPD9t76yHmLuC1bZpxMu702kz549ASgDHC9zXYaS7iZXpVq2A%2FYPtlIJKebvzun1W2r1rnpOChiIq0NWCwcDFIth1wFrnMWP5lawZ6QqcJKbwGuIlKhcoZSo96zKTpUaB4CGLVfdguHK%2BQ7ukaCQFkXQy2pbleSF3CI2S8WuSU%2FRq4%2F6g9G2MhXfXT7fUPMF%2BrLaBQN4yXdA4vPwzeNeK6tJQwobsJoQnr9ySnjMfhfI5NV3rlsQmDZmB1POaJw%2Bo%2FMP2rmFQVa89L2eZSfEpp6kWWwB8jPrM6qSg9qVmA4UhTm%2FfCA65EA9R4cwGGDq%2FKnIqrQ1iy4sA8UiU9q7bsqXoV%2BfUSt7Qts9XrE35Ew16PKvgY6pgENsTjnpoFcVMxKz%2BWxWJMcoKe32bqXUqipKYlBXs0m2wfxr%2BtiS7i3z0dx9qR32aGDAzU0FfAV7cEyrUSt8XxTgnFEp2dI8Cs5NJhBnB0%2FReO4EENs5C4JT01pPPl%2Fwm6uKv%2FOw4bmrLKMRrKp7A9YVNOuCi5iqduy%2Bp8UA%2FekVam03YX9c2YUb6pbxoexly5usYdmrvyIdRtgN48PoHyGgr0%2BO5v2&X-Amz-Signature=aa3de32bcb7730372999beb6fe86c8261dc56cfa21164da04d61b8058c865b09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUI66HIZ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBrUHYoINYQcZ3EfOdCQLihTD7okeKgxlz5LYE2snfG7AiA1TpDr7pa7BqFliZ0hvlj7qqKcBq%2FJQ6wWxnt9gg6B2CqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5XC9PoKz73IeC0pKtwDEeOzThYcqa%2FNZ8MjYulRmwXBWOxwue3Z%2BbfSGM4s34rpd2I9d4fv2mlB8gwBSCGdFIrV9WZWUwtvdfzv%2FvzxUs4BsFicgeHl2CyVXMQYZBLA555tGXzPbDlQhxu6HHeRDZ2Fupqw6VaeCW7VcGZlIQs0uwTFdJs7cfxG7Bv4QikKuwE%2BxMsZMfcvsRrq%2FKdmCTo0gmsnm5h0aE1vi6CuijwWiz3rNajOFS%2BxdU9AJnhQ7pSsQUPZo3I%2BnjXkoZnkn7gG3Ph3QqxmTVY0wOPD9t76yHmLuC1bZpxMu702kz549ASgDHC9zXYaS7iZXpVq2A%2FYPtlIJKebvzun1W2r1rnpOChiIq0NWCwcDFIth1wFrnMWP5lawZ6QqcJKbwGuIlKhcoZSo96zKTpUaB4CGLVfdguHK%2BQ7ukaCQFkXQy2pbleSF3CI2S8WuSU%2FRq4%2F6g9G2MhXfXT7fUPMF%2BrLaBQN4yXdA4vPwzeNeK6tJQwobsJoQnr9ySnjMfhfI5NV3rlsQmDZmB1POaJw%2Bo%2FMP2rmFQVa89L2eZSfEpp6kWWwB8jPrM6qSg9qVmA4UhTm%2FfCA65EA9R4cwGGDq%2FKnIqrQ1iy4sA8UiU9q7bsqXoV%2BfUSt7Qts9XrE35Ew16PKvgY6pgENsTjnpoFcVMxKz%2BWxWJMcoKe32bqXUqipKYlBXs0m2wfxr%2BtiS7i3z0dx9qR32aGDAzU0FfAV7cEyrUSt8XxTgnFEp2dI8Cs5NJhBnB0%2FReO4EENs5C4JT01pPPl%2Fwm6uKv%2FOw4bmrLKMRrKp7A9YVNOuCi5iqduy%2Bp8UA%2FekVam03YX9c2YUb6pbxoexly5usYdmrvyIdRtgN48PoHyGgr0%2BO5v2&X-Amz-Signature=eb1309ee50a147937888be6e553f8c3145a50fdcbc079f14befdd34dfd360aee&X-Amz-SignedHeaders=host&x-id=GetObject)
