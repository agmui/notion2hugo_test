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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7YNQXB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6%2FQbgjQNpNhRZOkBeEgqhRmxOMaBCuKvrA8dCp60gQIgIZbZDvmL0%2BQK0lbdGRxZysZ26J6e8X4UBu4hYwOz6NYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO%2FnyhR6e2WWydgQUSrcA9G2atz6HanlU957KITz7IYFd0RQcUd3qNnqnTB6vYPkTopwUcRkQGTQYRG7OPBJIKPP%2BZQCSKfx7inH6Np%2BOPk8czggjTwKZcfuyMTwKVIOmHndZ93RoqpUMS9Jn95nQunzgXr5Y1DPXy9fv2QPXawPcYx9eGEz0UBuDaXTS6SzD4AlDMlnx4CgrSXwtGtGV0dAvPXB%2BhPv4Bkwro4sXOkYnkwta224g8kBju%2BevjMjb6fPIJ%2BxxSa7SqaU8jbc1Udp9vnmUN4QZHzLGF9AU502v8XJVqpWGNB%2FqkqSzlAglCOxYwXKEAW%2BZzz1QmOMP3NhqOUt%2BTmvQtu2AnSqcrRmpP9BjV9ONLKeGCUCWzBjwEeNUFOxesIU55ftxL18F3bJXcFKr1p7Op5Us4fNDWfcZCwchyjbQ5kp0pjWj%2BidUOsB7Cggqw55sDB%2BSRvKhlCOYoxU7E9Y1jKjpPt2zpc78CDiUiKXO7Mg46u8%2FuXb2b5gv3pI2RMPtHmSvxjiI0Shgsl%2BDrYxaa7GgsCySMqycz7M8xshDCf5qPhMHPP%2F7j%2BX0bayxqnZUX%2Fch3wYvBuQdkooOQX%2BY0T2f0xU1MD3BVmIz9dys3N9kYt%2FbNJoHCcqaT0Si4re%2BfrWMMfGgMAGOqUBL9X0J3SMNS0c6TnHexxapc6kfzDrNLalnlU37YbcJ%2B7D5ER1jsekjCvC3yb5W0bymRbqg5TIzWlJcnOJYeOhSwgD8nx7Ko0UFvEGz%2FOEAnwAlsPb6wfoav4LPZz5zsd2jPMQ0YtRyw5%2BLRFYCmzMwvELzXAVGJ%2BQkglGJeEtu2XKN5B0bHjyxvsnABGqAKtn3YpTru3OH9Ulc7cATILE3hSh6Y70&X-Amz-Signature=e54c3de202e62359a9d599198d781077749f1a5690e45bfb0935fa5bdf152005&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7YNQXB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6%2FQbgjQNpNhRZOkBeEgqhRmxOMaBCuKvrA8dCp60gQIgIZbZDvmL0%2BQK0lbdGRxZysZ26J6e8X4UBu4hYwOz6NYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO%2FnyhR6e2WWydgQUSrcA9G2atz6HanlU957KITz7IYFd0RQcUd3qNnqnTB6vYPkTopwUcRkQGTQYRG7OPBJIKPP%2BZQCSKfx7inH6Np%2BOPk8czggjTwKZcfuyMTwKVIOmHndZ93RoqpUMS9Jn95nQunzgXr5Y1DPXy9fv2QPXawPcYx9eGEz0UBuDaXTS6SzD4AlDMlnx4CgrSXwtGtGV0dAvPXB%2BhPv4Bkwro4sXOkYnkwta224g8kBju%2BevjMjb6fPIJ%2BxxSa7SqaU8jbc1Udp9vnmUN4QZHzLGF9AU502v8XJVqpWGNB%2FqkqSzlAglCOxYwXKEAW%2BZzz1QmOMP3NhqOUt%2BTmvQtu2AnSqcrRmpP9BjV9ONLKeGCUCWzBjwEeNUFOxesIU55ftxL18F3bJXcFKr1p7Op5Us4fNDWfcZCwchyjbQ5kp0pjWj%2BidUOsB7Cggqw55sDB%2BSRvKhlCOYoxU7E9Y1jKjpPt2zpc78CDiUiKXO7Mg46u8%2FuXb2b5gv3pI2RMPtHmSvxjiI0Shgsl%2BDrYxaa7GgsCySMqycz7M8xshDCf5qPhMHPP%2F7j%2BX0bayxqnZUX%2Fch3wYvBuQdkooOQX%2BY0T2f0xU1MD3BVmIz9dys3N9kYt%2FbNJoHCcqaT0Si4re%2BfrWMMfGgMAGOqUBL9X0J3SMNS0c6TnHexxapc6kfzDrNLalnlU37YbcJ%2B7D5ER1jsekjCvC3yb5W0bymRbqg5TIzWlJcnOJYeOhSwgD8nx7Ko0UFvEGz%2FOEAnwAlsPb6wfoav4LPZz5zsd2jPMQ0YtRyw5%2BLRFYCmzMwvELzXAVGJ%2BQkglGJeEtu2XKN5B0bHjyxvsnABGqAKtn3YpTru3OH9Ulc7cATILE3hSh6Y70&X-Amz-Signature=f82be7067b3bbe3c2cbf04fef89cd11c84b357e62668ea1e6b73635a57d264a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7YNQXB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6%2FQbgjQNpNhRZOkBeEgqhRmxOMaBCuKvrA8dCp60gQIgIZbZDvmL0%2BQK0lbdGRxZysZ26J6e8X4UBu4hYwOz6NYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO%2FnyhR6e2WWydgQUSrcA9G2atz6HanlU957KITz7IYFd0RQcUd3qNnqnTB6vYPkTopwUcRkQGTQYRG7OPBJIKPP%2BZQCSKfx7inH6Np%2BOPk8czggjTwKZcfuyMTwKVIOmHndZ93RoqpUMS9Jn95nQunzgXr5Y1DPXy9fv2QPXawPcYx9eGEz0UBuDaXTS6SzD4AlDMlnx4CgrSXwtGtGV0dAvPXB%2BhPv4Bkwro4sXOkYnkwta224g8kBju%2BevjMjb6fPIJ%2BxxSa7SqaU8jbc1Udp9vnmUN4QZHzLGF9AU502v8XJVqpWGNB%2FqkqSzlAglCOxYwXKEAW%2BZzz1QmOMP3NhqOUt%2BTmvQtu2AnSqcrRmpP9BjV9ONLKeGCUCWzBjwEeNUFOxesIU55ftxL18F3bJXcFKr1p7Op5Us4fNDWfcZCwchyjbQ5kp0pjWj%2BidUOsB7Cggqw55sDB%2BSRvKhlCOYoxU7E9Y1jKjpPt2zpc78CDiUiKXO7Mg46u8%2FuXb2b5gv3pI2RMPtHmSvxjiI0Shgsl%2BDrYxaa7GgsCySMqycz7M8xshDCf5qPhMHPP%2F7j%2BX0bayxqnZUX%2Fch3wYvBuQdkooOQX%2BY0T2f0xU1MD3BVmIz9dys3N9kYt%2FbNJoHCcqaT0Si4re%2BfrWMMfGgMAGOqUBL9X0J3SMNS0c6TnHexxapc6kfzDrNLalnlU37YbcJ%2B7D5ER1jsekjCvC3yb5W0bymRbqg5TIzWlJcnOJYeOhSwgD8nx7Ko0UFvEGz%2FOEAnwAlsPb6wfoav4LPZz5zsd2jPMQ0YtRyw5%2BLRFYCmzMwvELzXAVGJ%2BQkglGJeEtu2XKN5B0bHjyxvsnABGqAKtn3YpTru3OH9Ulc7cATILE3hSh6Y70&X-Amz-Signature=9b25e01e289c196f334d345f9eea71137ded4e163532167a739171cfac006d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7YNQXB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6%2FQbgjQNpNhRZOkBeEgqhRmxOMaBCuKvrA8dCp60gQIgIZbZDvmL0%2BQK0lbdGRxZysZ26J6e8X4UBu4hYwOz6NYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO%2FnyhR6e2WWydgQUSrcA9G2atz6HanlU957KITz7IYFd0RQcUd3qNnqnTB6vYPkTopwUcRkQGTQYRG7OPBJIKPP%2BZQCSKfx7inH6Np%2BOPk8czggjTwKZcfuyMTwKVIOmHndZ93RoqpUMS9Jn95nQunzgXr5Y1DPXy9fv2QPXawPcYx9eGEz0UBuDaXTS6SzD4AlDMlnx4CgrSXwtGtGV0dAvPXB%2BhPv4Bkwro4sXOkYnkwta224g8kBju%2BevjMjb6fPIJ%2BxxSa7SqaU8jbc1Udp9vnmUN4QZHzLGF9AU502v8XJVqpWGNB%2FqkqSzlAglCOxYwXKEAW%2BZzz1QmOMP3NhqOUt%2BTmvQtu2AnSqcrRmpP9BjV9ONLKeGCUCWzBjwEeNUFOxesIU55ftxL18F3bJXcFKr1p7Op5Us4fNDWfcZCwchyjbQ5kp0pjWj%2BidUOsB7Cggqw55sDB%2BSRvKhlCOYoxU7E9Y1jKjpPt2zpc78CDiUiKXO7Mg46u8%2FuXb2b5gv3pI2RMPtHmSvxjiI0Shgsl%2BDrYxaa7GgsCySMqycz7M8xshDCf5qPhMHPP%2F7j%2BX0bayxqnZUX%2Fch3wYvBuQdkooOQX%2BY0T2f0xU1MD3BVmIz9dys3N9kYt%2FbNJoHCcqaT0Si4re%2BfrWMMfGgMAGOqUBL9X0J3SMNS0c6TnHexxapc6kfzDrNLalnlU37YbcJ%2B7D5ER1jsekjCvC3yb5W0bymRbqg5TIzWlJcnOJYeOhSwgD8nx7Ko0UFvEGz%2FOEAnwAlsPb6wfoav4LPZz5zsd2jPMQ0YtRyw5%2BLRFYCmzMwvELzXAVGJ%2BQkglGJeEtu2XKN5B0bHjyxvsnABGqAKtn3YpTru3OH9Ulc7cATILE3hSh6Y70&X-Amz-Signature=84b264f116d371f467ec0f0720afcd7c1f41e168805d0c70888d2dfecf158b8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7YNQXB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6%2FQbgjQNpNhRZOkBeEgqhRmxOMaBCuKvrA8dCp60gQIgIZbZDvmL0%2BQK0lbdGRxZysZ26J6e8X4UBu4hYwOz6NYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO%2FnyhR6e2WWydgQUSrcA9G2atz6HanlU957KITz7IYFd0RQcUd3qNnqnTB6vYPkTopwUcRkQGTQYRG7OPBJIKPP%2BZQCSKfx7inH6Np%2BOPk8czggjTwKZcfuyMTwKVIOmHndZ93RoqpUMS9Jn95nQunzgXr5Y1DPXy9fv2QPXawPcYx9eGEz0UBuDaXTS6SzD4AlDMlnx4CgrSXwtGtGV0dAvPXB%2BhPv4Bkwro4sXOkYnkwta224g8kBju%2BevjMjb6fPIJ%2BxxSa7SqaU8jbc1Udp9vnmUN4QZHzLGF9AU502v8XJVqpWGNB%2FqkqSzlAglCOxYwXKEAW%2BZzz1QmOMP3NhqOUt%2BTmvQtu2AnSqcrRmpP9BjV9ONLKeGCUCWzBjwEeNUFOxesIU55ftxL18F3bJXcFKr1p7Op5Us4fNDWfcZCwchyjbQ5kp0pjWj%2BidUOsB7Cggqw55sDB%2BSRvKhlCOYoxU7E9Y1jKjpPt2zpc78CDiUiKXO7Mg46u8%2FuXb2b5gv3pI2RMPtHmSvxjiI0Shgsl%2BDrYxaa7GgsCySMqycz7M8xshDCf5qPhMHPP%2F7j%2BX0bayxqnZUX%2Fch3wYvBuQdkooOQX%2BY0T2f0xU1MD3BVmIz9dys3N9kYt%2FbNJoHCcqaT0Si4re%2BfrWMMfGgMAGOqUBL9X0J3SMNS0c6TnHexxapc6kfzDrNLalnlU37YbcJ%2B7D5ER1jsekjCvC3yb5W0bymRbqg5TIzWlJcnOJYeOhSwgD8nx7Ko0UFvEGz%2FOEAnwAlsPb6wfoav4LPZz5zsd2jPMQ0YtRyw5%2BLRFYCmzMwvELzXAVGJ%2BQkglGJeEtu2XKN5B0bHjyxvsnABGqAKtn3YpTru3OH9Ulc7cATILE3hSh6Y70&X-Amz-Signature=f1b7930100ccff4b4fb6acde52d80d4a25da754be4347d8e40cbc8fd9e27435e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT7YNQXB%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx6%2FQbgjQNpNhRZOkBeEgqhRmxOMaBCuKvrA8dCp60gQIgIZbZDvmL0%2BQK0lbdGRxZysZ26J6e8X4UBu4hYwOz6NYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO%2FnyhR6e2WWydgQUSrcA9G2atz6HanlU957KITz7IYFd0RQcUd3qNnqnTB6vYPkTopwUcRkQGTQYRG7OPBJIKPP%2BZQCSKfx7inH6Np%2BOPk8czggjTwKZcfuyMTwKVIOmHndZ93RoqpUMS9Jn95nQunzgXr5Y1DPXy9fv2QPXawPcYx9eGEz0UBuDaXTS6SzD4AlDMlnx4CgrSXwtGtGV0dAvPXB%2BhPv4Bkwro4sXOkYnkwta224g8kBju%2BevjMjb6fPIJ%2BxxSa7SqaU8jbc1Udp9vnmUN4QZHzLGF9AU502v8XJVqpWGNB%2FqkqSzlAglCOxYwXKEAW%2BZzz1QmOMP3NhqOUt%2BTmvQtu2AnSqcrRmpP9BjV9ONLKeGCUCWzBjwEeNUFOxesIU55ftxL18F3bJXcFKr1p7Op5Us4fNDWfcZCwchyjbQ5kp0pjWj%2BidUOsB7Cggqw55sDB%2BSRvKhlCOYoxU7E9Y1jKjpPt2zpc78CDiUiKXO7Mg46u8%2FuXb2b5gv3pI2RMPtHmSvxjiI0Shgsl%2BDrYxaa7GgsCySMqycz7M8xshDCf5qPhMHPP%2F7j%2BX0bayxqnZUX%2Fch3wYvBuQdkooOQX%2BY0T2f0xU1MD3BVmIz9dys3N9kYt%2FbNJoHCcqaT0Si4re%2BfrWMMfGgMAGOqUBL9X0J3SMNS0c6TnHexxapc6kfzDrNLalnlU37YbcJ%2B7D5ER1jsekjCvC3yb5W0bymRbqg5TIzWlJcnOJYeOhSwgD8nx7Ko0UFvEGz%2FOEAnwAlsPb6wfoav4LPZz5zsd2jPMQ0YtRyw5%2BLRFYCmzMwvELzXAVGJ%2BQkglGJeEtu2XKN5B0bHjyxvsnABGqAKtn3YpTru3OH9Ulc7cATILE3hSh6Y70&X-Amz-Signature=896e65ec001c61bb610420f3d978b1114b32b6b13ee570a85eb229fb70059804&X-Amz-SignedHeaders=host&x-id=GetObject)
