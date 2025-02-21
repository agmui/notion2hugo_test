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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNKGOVQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSY8iJmCz8ObnlQk3sAPT6F%2BgVQaLBzTIHkvWesW7bEAIgfZhfENhKVcsIwIK6pT86sDkMO0%2B8UH2I9%2FLL9kdmKLYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByJ7XHJRIeSqMxj4SrcA2whYjB5zkORb%2BooyJ60WWv7llRiQOc71XK4JidU8hdsWs9T3QaKoAPMuHu2E82t5s1eZHrjvPTS7oCWCEKQwVkb4D0EXi1PWeOzMWEBYF4UF2GAivN2o570BMuwtmO5soZCZ0eZGHvwIOwUwfr9iP8Z3kj9uGY1Qlit8Qe6Scd6vtdH3us2b1qYT6O9JlJv60XiEkJq5A7iLnuKBI4ZANYMWc2uIKB7wonZEJAcmjgSh5RaI6sAly7zvFJu04g2kB7IxUXNy1Nt3unjmCH8zfoepJMviqAXo5q512Zj8TXZ%2BVCZYz6IjfMQ0fa%2FWVwuxPCuTLz64WxlObmYJDWoyrQUZtogh%2F907iezMCzeWbWRLZJjOA7F39uKnSvrcZ2RCcNdIVSoGhythkXu6uZkeOm2ipnzQU%2BM%2Bp14Ykhm28Zya4QaL7osVPQ%2B%2BCgt9aekNwUNoirmp6cr6NtVeWPxnezEX4hs3GyqKFbjIvx4cLTDHitkPw8Ead1aFKGKF4UnUqsiU2xbhw1NV3aP6RwuoPxN5e3JSX0zJBS14oF5ldV6sgAEsXzRCu2tSCT5TR7qmFHbZu5H5nMG%2BLEcJrAfqqyTzdIB042dcnbblAx8pRuxiMvtX7NLiCI0le18MLSA470GOqUBXinUnLfBc4%2BHuosn8gO8WTAF8RkBS2aAMb4%2F%2BNjfye6NHnl48X053Ehpe8TaJdqyIhJ2GWP5W6BelbrdxorNAWVt77RR%2BzTA5w3l1ovAv7okO%2BRCxh7na%2FVZ1sP03xWot7maP8LmNgvpYDK4zUBTgUVLcZp%2Fv2l8Qnby0DCJycXSxOSsGIKcXtJtxAxEjASCm8LjvIGthzJ7g9zJ4jmI%2BIHhSRHk&X-Amz-Signature=d59644cdebaa5ece512d55091496421fb8a4946204b30887a60d7fb63a866f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNKGOVQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSY8iJmCz8ObnlQk3sAPT6F%2BgVQaLBzTIHkvWesW7bEAIgfZhfENhKVcsIwIK6pT86sDkMO0%2B8UH2I9%2FLL9kdmKLYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByJ7XHJRIeSqMxj4SrcA2whYjB5zkORb%2BooyJ60WWv7llRiQOc71XK4JidU8hdsWs9T3QaKoAPMuHu2E82t5s1eZHrjvPTS7oCWCEKQwVkb4D0EXi1PWeOzMWEBYF4UF2GAivN2o570BMuwtmO5soZCZ0eZGHvwIOwUwfr9iP8Z3kj9uGY1Qlit8Qe6Scd6vtdH3us2b1qYT6O9JlJv60XiEkJq5A7iLnuKBI4ZANYMWc2uIKB7wonZEJAcmjgSh5RaI6sAly7zvFJu04g2kB7IxUXNy1Nt3unjmCH8zfoepJMviqAXo5q512Zj8TXZ%2BVCZYz6IjfMQ0fa%2FWVwuxPCuTLz64WxlObmYJDWoyrQUZtogh%2F907iezMCzeWbWRLZJjOA7F39uKnSvrcZ2RCcNdIVSoGhythkXu6uZkeOm2ipnzQU%2BM%2Bp14Ykhm28Zya4QaL7osVPQ%2B%2BCgt9aekNwUNoirmp6cr6NtVeWPxnezEX4hs3GyqKFbjIvx4cLTDHitkPw8Ead1aFKGKF4UnUqsiU2xbhw1NV3aP6RwuoPxN5e3JSX0zJBS14oF5ldV6sgAEsXzRCu2tSCT5TR7qmFHbZu5H5nMG%2BLEcJrAfqqyTzdIB042dcnbblAx8pRuxiMvtX7NLiCI0le18MLSA470GOqUBXinUnLfBc4%2BHuosn8gO8WTAF8RkBS2aAMb4%2F%2BNjfye6NHnl48X053Ehpe8TaJdqyIhJ2GWP5W6BelbrdxorNAWVt77RR%2BzTA5w3l1ovAv7okO%2BRCxh7na%2FVZ1sP03xWot7maP8LmNgvpYDK4zUBTgUVLcZp%2Fv2l8Qnby0DCJycXSxOSsGIKcXtJtxAxEjASCm8LjvIGthzJ7g9zJ4jmI%2BIHhSRHk&X-Amz-Signature=6d451c1b3e306ab695ef1f6f1d6dba43d70fe2c294f8078765baffc54bf3554b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNKGOVQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSY8iJmCz8ObnlQk3sAPT6F%2BgVQaLBzTIHkvWesW7bEAIgfZhfENhKVcsIwIK6pT86sDkMO0%2B8UH2I9%2FLL9kdmKLYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByJ7XHJRIeSqMxj4SrcA2whYjB5zkORb%2BooyJ60WWv7llRiQOc71XK4JidU8hdsWs9T3QaKoAPMuHu2E82t5s1eZHrjvPTS7oCWCEKQwVkb4D0EXi1PWeOzMWEBYF4UF2GAivN2o570BMuwtmO5soZCZ0eZGHvwIOwUwfr9iP8Z3kj9uGY1Qlit8Qe6Scd6vtdH3us2b1qYT6O9JlJv60XiEkJq5A7iLnuKBI4ZANYMWc2uIKB7wonZEJAcmjgSh5RaI6sAly7zvFJu04g2kB7IxUXNy1Nt3unjmCH8zfoepJMviqAXo5q512Zj8TXZ%2BVCZYz6IjfMQ0fa%2FWVwuxPCuTLz64WxlObmYJDWoyrQUZtogh%2F907iezMCzeWbWRLZJjOA7F39uKnSvrcZ2RCcNdIVSoGhythkXu6uZkeOm2ipnzQU%2BM%2Bp14Ykhm28Zya4QaL7osVPQ%2B%2BCgt9aekNwUNoirmp6cr6NtVeWPxnezEX4hs3GyqKFbjIvx4cLTDHitkPw8Ead1aFKGKF4UnUqsiU2xbhw1NV3aP6RwuoPxN5e3JSX0zJBS14oF5ldV6sgAEsXzRCu2tSCT5TR7qmFHbZu5H5nMG%2BLEcJrAfqqyTzdIB042dcnbblAx8pRuxiMvtX7NLiCI0le18MLSA470GOqUBXinUnLfBc4%2BHuosn8gO8WTAF8RkBS2aAMb4%2F%2BNjfye6NHnl48X053Ehpe8TaJdqyIhJ2GWP5W6BelbrdxorNAWVt77RR%2BzTA5w3l1ovAv7okO%2BRCxh7na%2FVZ1sP03xWot7maP8LmNgvpYDK4zUBTgUVLcZp%2Fv2l8Qnby0DCJycXSxOSsGIKcXtJtxAxEjASCm8LjvIGthzJ7g9zJ4jmI%2BIHhSRHk&X-Amz-Signature=f536dc3f14735a90968c855ad178e4fba3f5afa057410efe5fcc7334c937b72a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNKGOVQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSY8iJmCz8ObnlQk3sAPT6F%2BgVQaLBzTIHkvWesW7bEAIgfZhfENhKVcsIwIK6pT86sDkMO0%2B8UH2I9%2FLL9kdmKLYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByJ7XHJRIeSqMxj4SrcA2whYjB5zkORb%2BooyJ60WWv7llRiQOc71XK4JidU8hdsWs9T3QaKoAPMuHu2E82t5s1eZHrjvPTS7oCWCEKQwVkb4D0EXi1PWeOzMWEBYF4UF2GAivN2o570BMuwtmO5soZCZ0eZGHvwIOwUwfr9iP8Z3kj9uGY1Qlit8Qe6Scd6vtdH3us2b1qYT6O9JlJv60XiEkJq5A7iLnuKBI4ZANYMWc2uIKB7wonZEJAcmjgSh5RaI6sAly7zvFJu04g2kB7IxUXNy1Nt3unjmCH8zfoepJMviqAXo5q512Zj8TXZ%2BVCZYz6IjfMQ0fa%2FWVwuxPCuTLz64WxlObmYJDWoyrQUZtogh%2F907iezMCzeWbWRLZJjOA7F39uKnSvrcZ2RCcNdIVSoGhythkXu6uZkeOm2ipnzQU%2BM%2Bp14Ykhm28Zya4QaL7osVPQ%2B%2BCgt9aekNwUNoirmp6cr6NtVeWPxnezEX4hs3GyqKFbjIvx4cLTDHitkPw8Ead1aFKGKF4UnUqsiU2xbhw1NV3aP6RwuoPxN5e3JSX0zJBS14oF5ldV6sgAEsXzRCu2tSCT5TR7qmFHbZu5H5nMG%2BLEcJrAfqqyTzdIB042dcnbblAx8pRuxiMvtX7NLiCI0le18MLSA470GOqUBXinUnLfBc4%2BHuosn8gO8WTAF8RkBS2aAMb4%2F%2BNjfye6NHnl48X053Ehpe8TaJdqyIhJ2GWP5W6BelbrdxorNAWVt77RR%2BzTA5w3l1ovAv7okO%2BRCxh7na%2FVZ1sP03xWot7maP8LmNgvpYDK4zUBTgUVLcZp%2Fv2l8Qnby0DCJycXSxOSsGIKcXtJtxAxEjASCm8LjvIGthzJ7g9zJ4jmI%2BIHhSRHk&X-Amz-Signature=f565fe6d3f0736f924deb8ac9d25feb456dc889712b88beb012d06c4e5d00b29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNKGOVQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSY8iJmCz8ObnlQk3sAPT6F%2BgVQaLBzTIHkvWesW7bEAIgfZhfENhKVcsIwIK6pT86sDkMO0%2B8UH2I9%2FLL9kdmKLYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByJ7XHJRIeSqMxj4SrcA2whYjB5zkORb%2BooyJ60WWv7llRiQOc71XK4JidU8hdsWs9T3QaKoAPMuHu2E82t5s1eZHrjvPTS7oCWCEKQwVkb4D0EXi1PWeOzMWEBYF4UF2GAivN2o570BMuwtmO5soZCZ0eZGHvwIOwUwfr9iP8Z3kj9uGY1Qlit8Qe6Scd6vtdH3us2b1qYT6O9JlJv60XiEkJq5A7iLnuKBI4ZANYMWc2uIKB7wonZEJAcmjgSh5RaI6sAly7zvFJu04g2kB7IxUXNy1Nt3unjmCH8zfoepJMviqAXo5q512Zj8TXZ%2BVCZYz6IjfMQ0fa%2FWVwuxPCuTLz64WxlObmYJDWoyrQUZtogh%2F907iezMCzeWbWRLZJjOA7F39uKnSvrcZ2RCcNdIVSoGhythkXu6uZkeOm2ipnzQU%2BM%2Bp14Ykhm28Zya4QaL7osVPQ%2B%2BCgt9aekNwUNoirmp6cr6NtVeWPxnezEX4hs3GyqKFbjIvx4cLTDHitkPw8Ead1aFKGKF4UnUqsiU2xbhw1NV3aP6RwuoPxN5e3JSX0zJBS14oF5ldV6sgAEsXzRCu2tSCT5TR7qmFHbZu5H5nMG%2BLEcJrAfqqyTzdIB042dcnbblAx8pRuxiMvtX7NLiCI0le18MLSA470GOqUBXinUnLfBc4%2BHuosn8gO8WTAF8RkBS2aAMb4%2F%2BNjfye6NHnl48X053Ehpe8TaJdqyIhJ2GWP5W6BelbrdxorNAWVt77RR%2BzTA5w3l1ovAv7okO%2BRCxh7na%2FVZ1sP03xWot7maP8LmNgvpYDK4zUBTgUVLcZp%2Fv2l8Qnby0DCJycXSxOSsGIKcXtJtxAxEjASCm8LjvIGthzJ7g9zJ4jmI%2BIHhSRHk&X-Amz-Signature=a770c8f2c36ddd5de13ff4752687722f43a879889da9d74cb919dd92670227b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GNKGOVQ%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSY8iJmCz8ObnlQk3sAPT6F%2BgVQaLBzTIHkvWesW7bEAIgfZhfENhKVcsIwIK6pT86sDkMO0%2B8UH2I9%2FLL9kdmKLYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDByJ7XHJRIeSqMxj4SrcA2whYjB5zkORb%2BooyJ60WWv7llRiQOc71XK4JidU8hdsWs9T3QaKoAPMuHu2E82t5s1eZHrjvPTS7oCWCEKQwVkb4D0EXi1PWeOzMWEBYF4UF2GAivN2o570BMuwtmO5soZCZ0eZGHvwIOwUwfr9iP8Z3kj9uGY1Qlit8Qe6Scd6vtdH3us2b1qYT6O9JlJv60XiEkJq5A7iLnuKBI4ZANYMWc2uIKB7wonZEJAcmjgSh5RaI6sAly7zvFJu04g2kB7IxUXNy1Nt3unjmCH8zfoepJMviqAXo5q512Zj8TXZ%2BVCZYz6IjfMQ0fa%2FWVwuxPCuTLz64WxlObmYJDWoyrQUZtogh%2F907iezMCzeWbWRLZJjOA7F39uKnSvrcZ2RCcNdIVSoGhythkXu6uZkeOm2ipnzQU%2BM%2Bp14Ykhm28Zya4QaL7osVPQ%2B%2BCgt9aekNwUNoirmp6cr6NtVeWPxnezEX4hs3GyqKFbjIvx4cLTDHitkPw8Ead1aFKGKF4UnUqsiU2xbhw1NV3aP6RwuoPxN5e3JSX0zJBS14oF5ldV6sgAEsXzRCu2tSCT5TR7qmFHbZu5H5nMG%2BLEcJrAfqqyTzdIB042dcnbblAx8pRuxiMvtX7NLiCI0le18MLSA470GOqUBXinUnLfBc4%2BHuosn8gO8WTAF8RkBS2aAMb4%2F%2BNjfye6NHnl48X053Ehpe8TaJdqyIhJ2GWP5W6BelbrdxorNAWVt77RR%2BzTA5w3l1ovAv7okO%2BRCxh7na%2FVZ1sP03xWot7maP8LmNgvpYDK4zUBTgUVLcZp%2Fv2l8Qnby0DCJycXSxOSsGIKcXtJtxAxEjASCm8LjvIGthzJ7g9zJ4jmI%2BIHhSRHk&X-Amz-Signature=3d7957832aa12c40112a32d1d99c7c9d2f6d01626a04accd8e243fdc280e1f97&X-Amz-SignedHeaders=host&x-id=GetObject)
