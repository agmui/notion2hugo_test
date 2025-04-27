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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5BLZVL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKRQTm9OM%2FH9tPdx1NGyi0ncD4W1gpOqNSWdGUae3HeAiEAkOrjtUdj4vr0dP%2F7O9g7ZKxCoVkAvNYnpTaFR81b%2FSgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGxpLxJSxB9%2FvAj9LircA7MQdyAub2oI5gzTx%2FJ7k3AhnsPcYE5VfFFzQ9S8HPgztGHHh9AO8GuFdl8oZyY9f28t2TK942fLDRkd2qASpZ9aii23FkronkTCzQ5fiOkh6XWhur2HegvISjfBBtGSdX6gGHPRQOfch3nD062lB6h3ws%2FK3PtCiBHtsuFBYHmQF6u6j%2B%2BRWOAxztpDAc0YFWOFzwR6L4y0W0Yyi69ujvNTRqmKAb91COiinzLgUSDldxiJJZVwi9uoVG8LxCw9lC4PAsPbGXp0%2Fp50FPOMORCvdz0%2FfpJwKkFKEgk2UxjPuK1deBfeQJHur6M6z28v%2Fg1tNUa3HfJItcmQtaBplHFy7h0%2BuOWQQGtrE%2BiLTuzRiuFM91Yjn0bIJlmbPOUz8FeWsP48DW11sBAYL%2B1tygx8kEhwXiSg%2B%2FyE6EUafC1pG784DR1YPztiJ%2BKqdLHZHtvdaJTqAphfbbOPyZNBmv%2F4zokHbNu3gk%2F3ZICAbR3s1hnF6wxEFZ9zBsNFVk56autI8KRNm0GHENOHSkezEc0dWLGhcYczIpWY21S8RVy2QybAJMZ9mTonVvj3%2B%2F%2FnXylqydo2AXe8sqC3vKc9A9fMIVUXmML3Rb2rF06mxFV%2F49q3iCR23z6lJ1KKMJDttsAGOqUBvbsqCEObUjVDiQoBG1EA7LbjNUIdpneOrVD5QKNTf80o7araT5Esqp3y2dEYbfwVrhfxHcmDUs1AusRbkmCpxb9YXyFQOVHyr2LK86yQUbTSU%2BQ%2BOrbtjD6%2BYvWz9Bsx6Pne6ummlJHpTRjn5M1y5xSwL1ar9PcTe7zUsA2IE0dNtw4kiDBqMJyMi8%2BRsXCT8Nug1y8lZi0NFfg51GTyhpDV4Oql&X-Amz-Signature=dd4564494d64020f0c94581a174a8733eb4f84fc428bdcfb4b0baa88913f293a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5BLZVL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKRQTm9OM%2FH9tPdx1NGyi0ncD4W1gpOqNSWdGUae3HeAiEAkOrjtUdj4vr0dP%2F7O9g7ZKxCoVkAvNYnpTaFR81b%2FSgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGxpLxJSxB9%2FvAj9LircA7MQdyAub2oI5gzTx%2FJ7k3AhnsPcYE5VfFFzQ9S8HPgztGHHh9AO8GuFdl8oZyY9f28t2TK942fLDRkd2qASpZ9aii23FkronkTCzQ5fiOkh6XWhur2HegvISjfBBtGSdX6gGHPRQOfch3nD062lB6h3ws%2FK3PtCiBHtsuFBYHmQF6u6j%2B%2BRWOAxztpDAc0YFWOFzwR6L4y0W0Yyi69ujvNTRqmKAb91COiinzLgUSDldxiJJZVwi9uoVG8LxCw9lC4PAsPbGXp0%2Fp50FPOMORCvdz0%2FfpJwKkFKEgk2UxjPuK1deBfeQJHur6M6z28v%2Fg1tNUa3HfJItcmQtaBplHFy7h0%2BuOWQQGtrE%2BiLTuzRiuFM91Yjn0bIJlmbPOUz8FeWsP48DW11sBAYL%2B1tygx8kEhwXiSg%2B%2FyE6EUafC1pG784DR1YPztiJ%2BKqdLHZHtvdaJTqAphfbbOPyZNBmv%2F4zokHbNu3gk%2F3ZICAbR3s1hnF6wxEFZ9zBsNFVk56autI8KRNm0GHENOHSkezEc0dWLGhcYczIpWY21S8RVy2QybAJMZ9mTonVvj3%2B%2F%2FnXylqydo2AXe8sqC3vKc9A9fMIVUXmML3Rb2rF06mxFV%2F49q3iCR23z6lJ1KKMJDttsAGOqUBvbsqCEObUjVDiQoBG1EA7LbjNUIdpneOrVD5QKNTf80o7araT5Esqp3y2dEYbfwVrhfxHcmDUs1AusRbkmCpxb9YXyFQOVHyr2LK86yQUbTSU%2BQ%2BOrbtjD6%2BYvWz9Bsx6Pne6ummlJHpTRjn5M1y5xSwL1ar9PcTe7zUsA2IE0dNtw4kiDBqMJyMi8%2BRsXCT8Nug1y8lZi0NFfg51GTyhpDV4Oql&X-Amz-Signature=54ac108a46b3a6bbae8e63b33f6052f0415e85ecc61919bed83775d546715abe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5BLZVL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKRQTm9OM%2FH9tPdx1NGyi0ncD4W1gpOqNSWdGUae3HeAiEAkOrjtUdj4vr0dP%2F7O9g7ZKxCoVkAvNYnpTaFR81b%2FSgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGxpLxJSxB9%2FvAj9LircA7MQdyAub2oI5gzTx%2FJ7k3AhnsPcYE5VfFFzQ9S8HPgztGHHh9AO8GuFdl8oZyY9f28t2TK942fLDRkd2qASpZ9aii23FkronkTCzQ5fiOkh6XWhur2HegvISjfBBtGSdX6gGHPRQOfch3nD062lB6h3ws%2FK3PtCiBHtsuFBYHmQF6u6j%2B%2BRWOAxztpDAc0YFWOFzwR6L4y0W0Yyi69ujvNTRqmKAb91COiinzLgUSDldxiJJZVwi9uoVG8LxCw9lC4PAsPbGXp0%2Fp50FPOMORCvdz0%2FfpJwKkFKEgk2UxjPuK1deBfeQJHur6M6z28v%2Fg1tNUa3HfJItcmQtaBplHFy7h0%2BuOWQQGtrE%2BiLTuzRiuFM91Yjn0bIJlmbPOUz8FeWsP48DW11sBAYL%2B1tygx8kEhwXiSg%2B%2FyE6EUafC1pG784DR1YPztiJ%2BKqdLHZHtvdaJTqAphfbbOPyZNBmv%2F4zokHbNu3gk%2F3ZICAbR3s1hnF6wxEFZ9zBsNFVk56autI8KRNm0GHENOHSkezEc0dWLGhcYczIpWY21S8RVy2QybAJMZ9mTonVvj3%2B%2F%2FnXylqydo2AXe8sqC3vKc9A9fMIVUXmML3Rb2rF06mxFV%2F49q3iCR23z6lJ1KKMJDttsAGOqUBvbsqCEObUjVDiQoBG1EA7LbjNUIdpneOrVD5QKNTf80o7araT5Esqp3y2dEYbfwVrhfxHcmDUs1AusRbkmCpxb9YXyFQOVHyr2LK86yQUbTSU%2BQ%2BOrbtjD6%2BYvWz9Bsx6Pne6ummlJHpTRjn5M1y5xSwL1ar9PcTe7zUsA2IE0dNtw4kiDBqMJyMi8%2BRsXCT8Nug1y8lZi0NFfg51GTyhpDV4Oql&X-Amz-Signature=0906928e19080851e0fce5fcb73d79a62f50511406b7887df9ee3dd0272bf729&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5BLZVL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKRQTm9OM%2FH9tPdx1NGyi0ncD4W1gpOqNSWdGUae3HeAiEAkOrjtUdj4vr0dP%2F7O9g7ZKxCoVkAvNYnpTaFR81b%2FSgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGxpLxJSxB9%2FvAj9LircA7MQdyAub2oI5gzTx%2FJ7k3AhnsPcYE5VfFFzQ9S8HPgztGHHh9AO8GuFdl8oZyY9f28t2TK942fLDRkd2qASpZ9aii23FkronkTCzQ5fiOkh6XWhur2HegvISjfBBtGSdX6gGHPRQOfch3nD062lB6h3ws%2FK3PtCiBHtsuFBYHmQF6u6j%2B%2BRWOAxztpDAc0YFWOFzwR6L4y0W0Yyi69ujvNTRqmKAb91COiinzLgUSDldxiJJZVwi9uoVG8LxCw9lC4PAsPbGXp0%2Fp50FPOMORCvdz0%2FfpJwKkFKEgk2UxjPuK1deBfeQJHur6M6z28v%2Fg1tNUa3HfJItcmQtaBplHFy7h0%2BuOWQQGtrE%2BiLTuzRiuFM91Yjn0bIJlmbPOUz8FeWsP48DW11sBAYL%2B1tygx8kEhwXiSg%2B%2FyE6EUafC1pG784DR1YPztiJ%2BKqdLHZHtvdaJTqAphfbbOPyZNBmv%2F4zokHbNu3gk%2F3ZICAbR3s1hnF6wxEFZ9zBsNFVk56autI8KRNm0GHENOHSkezEc0dWLGhcYczIpWY21S8RVy2QybAJMZ9mTonVvj3%2B%2F%2FnXylqydo2AXe8sqC3vKc9A9fMIVUXmML3Rb2rF06mxFV%2F49q3iCR23z6lJ1KKMJDttsAGOqUBvbsqCEObUjVDiQoBG1EA7LbjNUIdpneOrVD5QKNTf80o7araT5Esqp3y2dEYbfwVrhfxHcmDUs1AusRbkmCpxb9YXyFQOVHyr2LK86yQUbTSU%2BQ%2BOrbtjD6%2BYvWz9Bsx6Pne6ummlJHpTRjn5M1y5xSwL1ar9PcTe7zUsA2IE0dNtw4kiDBqMJyMi8%2BRsXCT8Nug1y8lZi0NFfg51GTyhpDV4Oql&X-Amz-Signature=b847234679c6b6962356d2aaf1ecd305a8789c61aaa94b9be9b024c7e15b6fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5BLZVL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKRQTm9OM%2FH9tPdx1NGyi0ncD4W1gpOqNSWdGUae3HeAiEAkOrjtUdj4vr0dP%2F7O9g7ZKxCoVkAvNYnpTaFR81b%2FSgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGxpLxJSxB9%2FvAj9LircA7MQdyAub2oI5gzTx%2FJ7k3AhnsPcYE5VfFFzQ9S8HPgztGHHh9AO8GuFdl8oZyY9f28t2TK942fLDRkd2qASpZ9aii23FkronkTCzQ5fiOkh6XWhur2HegvISjfBBtGSdX6gGHPRQOfch3nD062lB6h3ws%2FK3PtCiBHtsuFBYHmQF6u6j%2B%2BRWOAxztpDAc0YFWOFzwR6L4y0W0Yyi69ujvNTRqmKAb91COiinzLgUSDldxiJJZVwi9uoVG8LxCw9lC4PAsPbGXp0%2Fp50FPOMORCvdz0%2FfpJwKkFKEgk2UxjPuK1deBfeQJHur6M6z28v%2Fg1tNUa3HfJItcmQtaBplHFy7h0%2BuOWQQGtrE%2BiLTuzRiuFM91Yjn0bIJlmbPOUz8FeWsP48DW11sBAYL%2B1tygx8kEhwXiSg%2B%2FyE6EUafC1pG784DR1YPztiJ%2BKqdLHZHtvdaJTqAphfbbOPyZNBmv%2F4zokHbNu3gk%2F3ZICAbR3s1hnF6wxEFZ9zBsNFVk56autI8KRNm0GHENOHSkezEc0dWLGhcYczIpWY21S8RVy2QybAJMZ9mTonVvj3%2B%2F%2FnXylqydo2AXe8sqC3vKc9A9fMIVUXmML3Rb2rF06mxFV%2F49q3iCR23z6lJ1KKMJDttsAGOqUBvbsqCEObUjVDiQoBG1EA7LbjNUIdpneOrVD5QKNTf80o7araT5Esqp3y2dEYbfwVrhfxHcmDUs1AusRbkmCpxb9YXyFQOVHyr2LK86yQUbTSU%2BQ%2BOrbtjD6%2BYvWz9Bsx6Pne6ummlJHpTRjn5M1y5xSwL1ar9PcTe7zUsA2IE0dNtw4kiDBqMJyMi8%2BRsXCT8Nug1y8lZi0NFfg51GTyhpDV4Oql&X-Amz-Signature=c8c8400e02819884d8fa994bf18a41372866c4bfb1a67aef8fcdf8671567d9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX5BLZVL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKRQTm9OM%2FH9tPdx1NGyi0ncD4W1gpOqNSWdGUae3HeAiEAkOrjtUdj4vr0dP%2F7O9g7ZKxCoVkAvNYnpTaFR81b%2FSgq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDGxpLxJSxB9%2FvAj9LircA7MQdyAub2oI5gzTx%2FJ7k3AhnsPcYE5VfFFzQ9S8HPgztGHHh9AO8GuFdl8oZyY9f28t2TK942fLDRkd2qASpZ9aii23FkronkTCzQ5fiOkh6XWhur2HegvISjfBBtGSdX6gGHPRQOfch3nD062lB6h3ws%2FK3PtCiBHtsuFBYHmQF6u6j%2B%2BRWOAxztpDAc0YFWOFzwR6L4y0W0Yyi69ujvNTRqmKAb91COiinzLgUSDldxiJJZVwi9uoVG8LxCw9lC4PAsPbGXp0%2Fp50FPOMORCvdz0%2FfpJwKkFKEgk2UxjPuK1deBfeQJHur6M6z28v%2Fg1tNUa3HfJItcmQtaBplHFy7h0%2BuOWQQGtrE%2BiLTuzRiuFM91Yjn0bIJlmbPOUz8FeWsP48DW11sBAYL%2B1tygx8kEhwXiSg%2B%2FyE6EUafC1pG784DR1YPztiJ%2BKqdLHZHtvdaJTqAphfbbOPyZNBmv%2F4zokHbNu3gk%2F3ZICAbR3s1hnF6wxEFZ9zBsNFVk56autI8KRNm0GHENOHSkezEc0dWLGhcYczIpWY21S8RVy2QybAJMZ9mTonVvj3%2B%2F%2FnXylqydo2AXe8sqC3vKc9A9fMIVUXmML3Rb2rF06mxFV%2F49q3iCR23z6lJ1KKMJDttsAGOqUBvbsqCEObUjVDiQoBG1EA7LbjNUIdpneOrVD5QKNTf80o7araT5Esqp3y2dEYbfwVrhfxHcmDUs1AusRbkmCpxb9YXyFQOVHyr2LK86yQUbTSU%2BQ%2BOrbtjD6%2BYvWz9Bsx6Pne6ummlJHpTRjn5M1y5xSwL1ar9PcTe7zUsA2IE0dNtw4kiDBqMJyMi8%2BRsXCT8Nug1y8lZi0NFfg51GTyhpDV4Oql&X-Amz-Signature=c430b3ddb70ae1627eecfef97f3b9c0b61b9e3f037fc74895b2b73e246d82ee0&X-Amz-SignedHeaders=host&x-id=GetObject)
