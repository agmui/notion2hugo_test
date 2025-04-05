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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URBIDIIW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWTsTcgvYRCifG7g9OYbNq1MX1aPAYV6QXl6SsO6KyMQIgbEqOjXMpHmmVihV%2Bsar9dIPTuzqUIvicrMH6m%2FbrDHUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEJX0DEoSTd6ByY3eyrcA5qn8zlJIE2noJW9u1z%2Bgzh4Vv8IptjLuewgWm6S8Ltb4wigk%2BL9AG%2B%2BWyxlrcryhZeoLGRmLOgPoKoAmZiy0Hr8eXKMqaoMzF5tC4ca%2Bv9cxI65qKJd%2BFVV4%2BgFWO0zuhWYh6LypzoITvXtJTmyUvoqGcEoFI9xF1Ik2sOBsgr1inFtnWPeI7P2S5F4VD8%2B9W2BdTJSxc9xVcmJg37aCCUVPB0bfbtxY0hmYK%2FXlK6%2BLpfc1rTyvWRY%2FZmgBhJx9s5cIfEaDQFSFNknEJoaX97NdoehnjiUaMWWHIItSIFCXhDn7mCFw3yrK5DCfDbFKjtqXcYGTeSDbKLZLbSjeXW3AvypTMDbDd80fBwOVExohmwcVKI24KyzGBmJqOTTdNNK%2Fyyq3FIi2V18vYffS4Uua%2BRP8mI06ItpBzYZccVmovSWJdqj6XM2XADpOnoa5f27DoTTX1aVsHmQvobHNxDO6VYgxR8l5OAzEh%2BR81pUS7LmeD1zivZRANQU3VhwUtJfBlRxGjDTCOqTmHibvrekHYtfc7%2BCNy0aWYoS8d1Av8iAXIv86efj3aAGrjnN%2Fo%2FE7o1y%2BbZTwuq3QX5cbuSEq%2Bu1uWhYj8Xb1il53%2FAsz0aO4EKDInPNBsKLMN69wr8GOqUB18nfJKYkNmMq1L2duaYFS5iCJL09htXyxL1KQTt2QvHheIVkl0qEt3R5WwEE3iFzf3uuuTmrrQ5tRIgOC8I5LbIYg9KV1xtZ3cWNkVgEGDGYIBUPyTe3rbvUnz3WN7ki5vYWAf5Xi9P51IkxYCh7%2F4jWOLisBOE1LRbx6TaSsnmZBZP7YfXAhUCtj6FRNmYY55kMyvz7fMetDiznfy5sp%2BBXYdbY&X-Amz-Signature=200d99bdabe29e453a19d46efde12c89163d41c534c6cf179dcf3cd9c5c28322&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URBIDIIW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWTsTcgvYRCifG7g9OYbNq1MX1aPAYV6QXl6SsO6KyMQIgbEqOjXMpHmmVihV%2Bsar9dIPTuzqUIvicrMH6m%2FbrDHUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEJX0DEoSTd6ByY3eyrcA5qn8zlJIE2noJW9u1z%2Bgzh4Vv8IptjLuewgWm6S8Ltb4wigk%2BL9AG%2B%2BWyxlrcryhZeoLGRmLOgPoKoAmZiy0Hr8eXKMqaoMzF5tC4ca%2Bv9cxI65qKJd%2BFVV4%2BgFWO0zuhWYh6LypzoITvXtJTmyUvoqGcEoFI9xF1Ik2sOBsgr1inFtnWPeI7P2S5F4VD8%2B9W2BdTJSxc9xVcmJg37aCCUVPB0bfbtxY0hmYK%2FXlK6%2BLpfc1rTyvWRY%2FZmgBhJx9s5cIfEaDQFSFNknEJoaX97NdoehnjiUaMWWHIItSIFCXhDn7mCFw3yrK5DCfDbFKjtqXcYGTeSDbKLZLbSjeXW3AvypTMDbDd80fBwOVExohmwcVKI24KyzGBmJqOTTdNNK%2Fyyq3FIi2V18vYffS4Uua%2BRP8mI06ItpBzYZccVmovSWJdqj6XM2XADpOnoa5f27DoTTX1aVsHmQvobHNxDO6VYgxR8l5OAzEh%2BR81pUS7LmeD1zivZRANQU3VhwUtJfBlRxGjDTCOqTmHibvrekHYtfc7%2BCNy0aWYoS8d1Av8iAXIv86efj3aAGrjnN%2Fo%2FE7o1y%2BbZTwuq3QX5cbuSEq%2Bu1uWhYj8Xb1il53%2FAsz0aO4EKDInPNBsKLMN69wr8GOqUB18nfJKYkNmMq1L2duaYFS5iCJL09htXyxL1KQTt2QvHheIVkl0qEt3R5WwEE3iFzf3uuuTmrrQ5tRIgOC8I5LbIYg9KV1xtZ3cWNkVgEGDGYIBUPyTe3rbvUnz3WN7ki5vYWAf5Xi9P51IkxYCh7%2F4jWOLisBOE1LRbx6TaSsnmZBZP7YfXAhUCtj6FRNmYY55kMyvz7fMetDiznfy5sp%2BBXYdbY&X-Amz-Signature=07b7a3441beed5b4fb8adad79aedcd9ac03e25b7802bbdbafcb8cfaa2d07d259&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URBIDIIW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWTsTcgvYRCifG7g9OYbNq1MX1aPAYV6QXl6SsO6KyMQIgbEqOjXMpHmmVihV%2Bsar9dIPTuzqUIvicrMH6m%2FbrDHUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEJX0DEoSTd6ByY3eyrcA5qn8zlJIE2noJW9u1z%2Bgzh4Vv8IptjLuewgWm6S8Ltb4wigk%2BL9AG%2B%2BWyxlrcryhZeoLGRmLOgPoKoAmZiy0Hr8eXKMqaoMzF5tC4ca%2Bv9cxI65qKJd%2BFVV4%2BgFWO0zuhWYh6LypzoITvXtJTmyUvoqGcEoFI9xF1Ik2sOBsgr1inFtnWPeI7P2S5F4VD8%2B9W2BdTJSxc9xVcmJg37aCCUVPB0bfbtxY0hmYK%2FXlK6%2BLpfc1rTyvWRY%2FZmgBhJx9s5cIfEaDQFSFNknEJoaX97NdoehnjiUaMWWHIItSIFCXhDn7mCFw3yrK5DCfDbFKjtqXcYGTeSDbKLZLbSjeXW3AvypTMDbDd80fBwOVExohmwcVKI24KyzGBmJqOTTdNNK%2Fyyq3FIi2V18vYffS4Uua%2BRP8mI06ItpBzYZccVmovSWJdqj6XM2XADpOnoa5f27DoTTX1aVsHmQvobHNxDO6VYgxR8l5OAzEh%2BR81pUS7LmeD1zivZRANQU3VhwUtJfBlRxGjDTCOqTmHibvrekHYtfc7%2BCNy0aWYoS8d1Av8iAXIv86efj3aAGrjnN%2Fo%2FE7o1y%2BbZTwuq3QX5cbuSEq%2Bu1uWhYj8Xb1il53%2FAsz0aO4EKDInPNBsKLMN69wr8GOqUB18nfJKYkNmMq1L2duaYFS5iCJL09htXyxL1KQTt2QvHheIVkl0qEt3R5WwEE3iFzf3uuuTmrrQ5tRIgOC8I5LbIYg9KV1xtZ3cWNkVgEGDGYIBUPyTe3rbvUnz3WN7ki5vYWAf5Xi9P51IkxYCh7%2F4jWOLisBOE1LRbx6TaSsnmZBZP7YfXAhUCtj6FRNmYY55kMyvz7fMetDiznfy5sp%2BBXYdbY&X-Amz-Signature=e30e4f454c81741ae676b1c70471d9ebb44b52a1004cea8cb55158a8d2a6b413&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URBIDIIW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWTsTcgvYRCifG7g9OYbNq1MX1aPAYV6QXl6SsO6KyMQIgbEqOjXMpHmmVihV%2Bsar9dIPTuzqUIvicrMH6m%2FbrDHUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEJX0DEoSTd6ByY3eyrcA5qn8zlJIE2noJW9u1z%2Bgzh4Vv8IptjLuewgWm6S8Ltb4wigk%2BL9AG%2B%2BWyxlrcryhZeoLGRmLOgPoKoAmZiy0Hr8eXKMqaoMzF5tC4ca%2Bv9cxI65qKJd%2BFVV4%2BgFWO0zuhWYh6LypzoITvXtJTmyUvoqGcEoFI9xF1Ik2sOBsgr1inFtnWPeI7P2S5F4VD8%2B9W2BdTJSxc9xVcmJg37aCCUVPB0bfbtxY0hmYK%2FXlK6%2BLpfc1rTyvWRY%2FZmgBhJx9s5cIfEaDQFSFNknEJoaX97NdoehnjiUaMWWHIItSIFCXhDn7mCFw3yrK5DCfDbFKjtqXcYGTeSDbKLZLbSjeXW3AvypTMDbDd80fBwOVExohmwcVKI24KyzGBmJqOTTdNNK%2Fyyq3FIi2V18vYffS4Uua%2BRP8mI06ItpBzYZccVmovSWJdqj6XM2XADpOnoa5f27DoTTX1aVsHmQvobHNxDO6VYgxR8l5OAzEh%2BR81pUS7LmeD1zivZRANQU3VhwUtJfBlRxGjDTCOqTmHibvrekHYtfc7%2BCNy0aWYoS8d1Av8iAXIv86efj3aAGrjnN%2Fo%2FE7o1y%2BbZTwuq3QX5cbuSEq%2Bu1uWhYj8Xb1il53%2FAsz0aO4EKDInPNBsKLMN69wr8GOqUB18nfJKYkNmMq1L2duaYFS5iCJL09htXyxL1KQTt2QvHheIVkl0qEt3R5WwEE3iFzf3uuuTmrrQ5tRIgOC8I5LbIYg9KV1xtZ3cWNkVgEGDGYIBUPyTe3rbvUnz3WN7ki5vYWAf5Xi9P51IkxYCh7%2F4jWOLisBOE1LRbx6TaSsnmZBZP7YfXAhUCtj6FRNmYY55kMyvz7fMetDiznfy5sp%2BBXYdbY&X-Amz-Signature=ac635b594d8af9e4a36e922a8a6edd5e394ffa522ed71fc0b4e5277a38a45508&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URBIDIIW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWTsTcgvYRCifG7g9OYbNq1MX1aPAYV6QXl6SsO6KyMQIgbEqOjXMpHmmVihV%2Bsar9dIPTuzqUIvicrMH6m%2FbrDHUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEJX0DEoSTd6ByY3eyrcA5qn8zlJIE2noJW9u1z%2Bgzh4Vv8IptjLuewgWm6S8Ltb4wigk%2BL9AG%2B%2BWyxlrcryhZeoLGRmLOgPoKoAmZiy0Hr8eXKMqaoMzF5tC4ca%2Bv9cxI65qKJd%2BFVV4%2BgFWO0zuhWYh6LypzoITvXtJTmyUvoqGcEoFI9xF1Ik2sOBsgr1inFtnWPeI7P2S5F4VD8%2B9W2BdTJSxc9xVcmJg37aCCUVPB0bfbtxY0hmYK%2FXlK6%2BLpfc1rTyvWRY%2FZmgBhJx9s5cIfEaDQFSFNknEJoaX97NdoehnjiUaMWWHIItSIFCXhDn7mCFw3yrK5DCfDbFKjtqXcYGTeSDbKLZLbSjeXW3AvypTMDbDd80fBwOVExohmwcVKI24KyzGBmJqOTTdNNK%2Fyyq3FIi2V18vYffS4Uua%2BRP8mI06ItpBzYZccVmovSWJdqj6XM2XADpOnoa5f27DoTTX1aVsHmQvobHNxDO6VYgxR8l5OAzEh%2BR81pUS7LmeD1zivZRANQU3VhwUtJfBlRxGjDTCOqTmHibvrekHYtfc7%2BCNy0aWYoS8d1Av8iAXIv86efj3aAGrjnN%2Fo%2FE7o1y%2BbZTwuq3QX5cbuSEq%2Bu1uWhYj8Xb1il53%2FAsz0aO4EKDInPNBsKLMN69wr8GOqUB18nfJKYkNmMq1L2duaYFS5iCJL09htXyxL1KQTt2QvHheIVkl0qEt3R5WwEE3iFzf3uuuTmrrQ5tRIgOC8I5LbIYg9KV1xtZ3cWNkVgEGDGYIBUPyTe3rbvUnz3WN7ki5vYWAf5Xi9P51IkxYCh7%2F4jWOLisBOE1LRbx6TaSsnmZBZP7YfXAhUCtj6FRNmYY55kMyvz7fMetDiznfy5sp%2BBXYdbY&X-Amz-Signature=ed35bc0423709e8e98ef458f504174caf93ab219d8ed6f59946d58a8b5d2c4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URBIDIIW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWTsTcgvYRCifG7g9OYbNq1MX1aPAYV6QXl6SsO6KyMQIgbEqOjXMpHmmVihV%2Bsar9dIPTuzqUIvicrMH6m%2FbrDHUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEJX0DEoSTd6ByY3eyrcA5qn8zlJIE2noJW9u1z%2Bgzh4Vv8IptjLuewgWm6S8Ltb4wigk%2BL9AG%2B%2BWyxlrcryhZeoLGRmLOgPoKoAmZiy0Hr8eXKMqaoMzF5tC4ca%2Bv9cxI65qKJd%2BFVV4%2BgFWO0zuhWYh6LypzoITvXtJTmyUvoqGcEoFI9xF1Ik2sOBsgr1inFtnWPeI7P2S5F4VD8%2B9W2BdTJSxc9xVcmJg37aCCUVPB0bfbtxY0hmYK%2FXlK6%2BLpfc1rTyvWRY%2FZmgBhJx9s5cIfEaDQFSFNknEJoaX97NdoehnjiUaMWWHIItSIFCXhDn7mCFw3yrK5DCfDbFKjtqXcYGTeSDbKLZLbSjeXW3AvypTMDbDd80fBwOVExohmwcVKI24KyzGBmJqOTTdNNK%2Fyyq3FIi2V18vYffS4Uua%2BRP8mI06ItpBzYZccVmovSWJdqj6XM2XADpOnoa5f27DoTTX1aVsHmQvobHNxDO6VYgxR8l5OAzEh%2BR81pUS7LmeD1zivZRANQU3VhwUtJfBlRxGjDTCOqTmHibvrekHYtfc7%2BCNy0aWYoS8d1Av8iAXIv86efj3aAGrjnN%2Fo%2FE7o1y%2BbZTwuq3QX5cbuSEq%2Bu1uWhYj8Xb1il53%2FAsz0aO4EKDInPNBsKLMN69wr8GOqUB18nfJKYkNmMq1L2duaYFS5iCJL09htXyxL1KQTt2QvHheIVkl0qEt3R5WwEE3iFzf3uuuTmrrQ5tRIgOC8I5LbIYg9KV1xtZ3cWNkVgEGDGYIBUPyTe3rbvUnz3WN7ki5vYWAf5Xi9P51IkxYCh7%2F4jWOLisBOE1LRbx6TaSsnmZBZP7YfXAhUCtj6FRNmYY55kMyvz7fMetDiznfy5sp%2BBXYdbY&X-Amz-Signature=fe0f5a38f9423d369c31331c5b27007158bf937944ad1f3f55ddb8064cd2b0e8&X-Amz-SignedHeaders=host&x-id=GetObject)
