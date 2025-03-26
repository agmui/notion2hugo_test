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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMKQZIY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2na492z1hnCffZzOJCIH4NCuQtIcj%2BCQtpOQT%2FJEKDAiEAknmI3f7n8c84ujG7HHqnCNjAs%2F75SIZ%2BqdRwCH7Za68q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAMkdr9Q3yMMELX5RircA%2FlJS4mFK7l2SRR7PvE6ClPKB9dkkU3qFgvPrDZlW%2FsJtiGbXEtcQnRE91EgjkEmLoZ5K5%2F73mxQ8Q2n6BWO2xVHG%2Fg2Pz9wSzYEHFe12bM1J039x62QIe5ix2dPMdW2tDqNU2gpji%2FUjwhiJ%2BtSiAsOyC7%2BhRbMNerkRiULmZ%2BTpM5LsuDaTSjmZWezxDf3s1rrnpVKuaBfiahVYdbp8sOa3F%2B062Q7Rea4cB2JR7r7iS2R5fa2DWlin0A6Kjyujt%2FTD%2FC2nfQOKZeBeAF3f1%2BHCcoCpRNyAF1Mdk7bin8Pnrv34nLAOYe7UMhZXsJm%2B0rRmOVAN0zRx3u5cUkIC8DgntuXotipTxhZBznVRBRp%2BgOhrpEZD7Sj02ENFvalFXqSrSs2IOaOwx6oVkQx5sc3ooejfkVvAFhid71BbkpW7qg6YQwJU85Kt7yYcXz7IRKPYcSlRIBfUtoQqaC0RXVZHYl%2BNniW4zfABl6giIahGIfn%2FDMvPXIlqkXZp5OacToL24Q%2F%2Fpe6eIlBgKHPpofruOrtxL8NUJtCWTDCD6ds1uOh8O3EWCY8XPLHtBXid%2BtzMQb2NwNLNe7Mah4kE%2FTYKF7doN7leS3p5g4jhIqHo5rCELUe3h8V8IovMNiujr8GOqUB6G%2Bydwnwq5u8P5IiD6YmzSDzubger3zakjDfk3Nw2AJ6l8C8UmKxXuLG2P8z9XVIgJbH98Vq9nAy%2BCp7a32dvjkqPv7RFUoxGHWUkYrnhaT5eGMp5Mi3UjnEwA6Vg4NORLE5nPHEK%2BTYUN14QXAV4U5Xx3cqOoRhbU6u5aWQQQrIp8N2f%2Fqj5UKkk2hFu4mi6DQzcc5ZY5W1x6XS%2B3xui4nbmhBm&X-Amz-Signature=ba1fe24edd07b4ca5363a48b7586b9d6e17d8c5c09c61560267a7b2792706395&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMKQZIY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2na492z1hnCffZzOJCIH4NCuQtIcj%2BCQtpOQT%2FJEKDAiEAknmI3f7n8c84ujG7HHqnCNjAs%2F75SIZ%2BqdRwCH7Za68q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAMkdr9Q3yMMELX5RircA%2FlJS4mFK7l2SRR7PvE6ClPKB9dkkU3qFgvPrDZlW%2FsJtiGbXEtcQnRE91EgjkEmLoZ5K5%2F73mxQ8Q2n6BWO2xVHG%2Fg2Pz9wSzYEHFe12bM1J039x62QIe5ix2dPMdW2tDqNU2gpji%2FUjwhiJ%2BtSiAsOyC7%2BhRbMNerkRiULmZ%2BTpM5LsuDaTSjmZWezxDf3s1rrnpVKuaBfiahVYdbp8sOa3F%2B062Q7Rea4cB2JR7r7iS2R5fa2DWlin0A6Kjyujt%2FTD%2FC2nfQOKZeBeAF3f1%2BHCcoCpRNyAF1Mdk7bin8Pnrv34nLAOYe7UMhZXsJm%2B0rRmOVAN0zRx3u5cUkIC8DgntuXotipTxhZBznVRBRp%2BgOhrpEZD7Sj02ENFvalFXqSrSs2IOaOwx6oVkQx5sc3ooejfkVvAFhid71BbkpW7qg6YQwJU85Kt7yYcXz7IRKPYcSlRIBfUtoQqaC0RXVZHYl%2BNniW4zfABl6giIahGIfn%2FDMvPXIlqkXZp5OacToL24Q%2F%2Fpe6eIlBgKHPpofruOrtxL8NUJtCWTDCD6ds1uOh8O3EWCY8XPLHtBXid%2BtzMQb2NwNLNe7Mah4kE%2FTYKF7doN7leS3p5g4jhIqHo5rCELUe3h8V8IovMNiujr8GOqUB6G%2Bydwnwq5u8P5IiD6YmzSDzubger3zakjDfk3Nw2AJ6l8C8UmKxXuLG2P8z9XVIgJbH98Vq9nAy%2BCp7a32dvjkqPv7RFUoxGHWUkYrnhaT5eGMp5Mi3UjnEwA6Vg4NORLE5nPHEK%2BTYUN14QXAV4U5Xx3cqOoRhbU6u5aWQQQrIp8N2f%2Fqj5UKkk2hFu4mi6DQzcc5ZY5W1x6XS%2B3xui4nbmhBm&X-Amz-Signature=99868b50e3d3162a92a6b7114f085b287628b8e684763cec3e22f612357f87e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMKQZIY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2na492z1hnCffZzOJCIH4NCuQtIcj%2BCQtpOQT%2FJEKDAiEAknmI3f7n8c84ujG7HHqnCNjAs%2F75SIZ%2BqdRwCH7Za68q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAMkdr9Q3yMMELX5RircA%2FlJS4mFK7l2SRR7PvE6ClPKB9dkkU3qFgvPrDZlW%2FsJtiGbXEtcQnRE91EgjkEmLoZ5K5%2F73mxQ8Q2n6BWO2xVHG%2Fg2Pz9wSzYEHFe12bM1J039x62QIe5ix2dPMdW2tDqNU2gpji%2FUjwhiJ%2BtSiAsOyC7%2BhRbMNerkRiULmZ%2BTpM5LsuDaTSjmZWezxDf3s1rrnpVKuaBfiahVYdbp8sOa3F%2B062Q7Rea4cB2JR7r7iS2R5fa2DWlin0A6Kjyujt%2FTD%2FC2nfQOKZeBeAF3f1%2BHCcoCpRNyAF1Mdk7bin8Pnrv34nLAOYe7UMhZXsJm%2B0rRmOVAN0zRx3u5cUkIC8DgntuXotipTxhZBznVRBRp%2BgOhrpEZD7Sj02ENFvalFXqSrSs2IOaOwx6oVkQx5sc3ooejfkVvAFhid71BbkpW7qg6YQwJU85Kt7yYcXz7IRKPYcSlRIBfUtoQqaC0RXVZHYl%2BNniW4zfABl6giIahGIfn%2FDMvPXIlqkXZp5OacToL24Q%2F%2Fpe6eIlBgKHPpofruOrtxL8NUJtCWTDCD6ds1uOh8O3EWCY8XPLHtBXid%2BtzMQb2NwNLNe7Mah4kE%2FTYKF7doN7leS3p5g4jhIqHo5rCELUe3h8V8IovMNiujr8GOqUB6G%2Bydwnwq5u8P5IiD6YmzSDzubger3zakjDfk3Nw2AJ6l8C8UmKxXuLG2P8z9XVIgJbH98Vq9nAy%2BCp7a32dvjkqPv7RFUoxGHWUkYrnhaT5eGMp5Mi3UjnEwA6Vg4NORLE5nPHEK%2BTYUN14QXAV4U5Xx3cqOoRhbU6u5aWQQQrIp8N2f%2Fqj5UKkk2hFu4mi6DQzcc5ZY5W1x6XS%2B3xui4nbmhBm&X-Amz-Signature=d1c3c7954038f40fd329dad828617af56aea3bac2e7efee2cc734aa2af2e6ede&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMKQZIY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2na492z1hnCffZzOJCIH4NCuQtIcj%2BCQtpOQT%2FJEKDAiEAknmI3f7n8c84ujG7HHqnCNjAs%2F75SIZ%2BqdRwCH7Za68q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAMkdr9Q3yMMELX5RircA%2FlJS4mFK7l2SRR7PvE6ClPKB9dkkU3qFgvPrDZlW%2FsJtiGbXEtcQnRE91EgjkEmLoZ5K5%2F73mxQ8Q2n6BWO2xVHG%2Fg2Pz9wSzYEHFe12bM1J039x62QIe5ix2dPMdW2tDqNU2gpji%2FUjwhiJ%2BtSiAsOyC7%2BhRbMNerkRiULmZ%2BTpM5LsuDaTSjmZWezxDf3s1rrnpVKuaBfiahVYdbp8sOa3F%2B062Q7Rea4cB2JR7r7iS2R5fa2DWlin0A6Kjyujt%2FTD%2FC2nfQOKZeBeAF3f1%2BHCcoCpRNyAF1Mdk7bin8Pnrv34nLAOYe7UMhZXsJm%2B0rRmOVAN0zRx3u5cUkIC8DgntuXotipTxhZBznVRBRp%2BgOhrpEZD7Sj02ENFvalFXqSrSs2IOaOwx6oVkQx5sc3ooejfkVvAFhid71BbkpW7qg6YQwJU85Kt7yYcXz7IRKPYcSlRIBfUtoQqaC0RXVZHYl%2BNniW4zfABl6giIahGIfn%2FDMvPXIlqkXZp5OacToL24Q%2F%2Fpe6eIlBgKHPpofruOrtxL8NUJtCWTDCD6ds1uOh8O3EWCY8XPLHtBXid%2BtzMQb2NwNLNe7Mah4kE%2FTYKF7doN7leS3p5g4jhIqHo5rCELUe3h8V8IovMNiujr8GOqUB6G%2Bydwnwq5u8P5IiD6YmzSDzubger3zakjDfk3Nw2AJ6l8C8UmKxXuLG2P8z9XVIgJbH98Vq9nAy%2BCp7a32dvjkqPv7RFUoxGHWUkYrnhaT5eGMp5Mi3UjnEwA6Vg4NORLE5nPHEK%2BTYUN14QXAV4U5Xx3cqOoRhbU6u5aWQQQrIp8N2f%2Fqj5UKkk2hFu4mi6DQzcc5ZY5W1x6XS%2B3xui4nbmhBm&X-Amz-Signature=a45e378144a27d3e314140cda69a2257b23899dea0c65bbe73137b8aad1db09e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMKQZIY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2na492z1hnCffZzOJCIH4NCuQtIcj%2BCQtpOQT%2FJEKDAiEAknmI3f7n8c84ujG7HHqnCNjAs%2F75SIZ%2BqdRwCH7Za68q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAMkdr9Q3yMMELX5RircA%2FlJS4mFK7l2SRR7PvE6ClPKB9dkkU3qFgvPrDZlW%2FsJtiGbXEtcQnRE91EgjkEmLoZ5K5%2F73mxQ8Q2n6BWO2xVHG%2Fg2Pz9wSzYEHFe12bM1J039x62QIe5ix2dPMdW2tDqNU2gpji%2FUjwhiJ%2BtSiAsOyC7%2BhRbMNerkRiULmZ%2BTpM5LsuDaTSjmZWezxDf3s1rrnpVKuaBfiahVYdbp8sOa3F%2B062Q7Rea4cB2JR7r7iS2R5fa2DWlin0A6Kjyujt%2FTD%2FC2nfQOKZeBeAF3f1%2BHCcoCpRNyAF1Mdk7bin8Pnrv34nLAOYe7UMhZXsJm%2B0rRmOVAN0zRx3u5cUkIC8DgntuXotipTxhZBznVRBRp%2BgOhrpEZD7Sj02ENFvalFXqSrSs2IOaOwx6oVkQx5sc3ooejfkVvAFhid71BbkpW7qg6YQwJU85Kt7yYcXz7IRKPYcSlRIBfUtoQqaC0RXVZHYl%2BNniW4zfABl6giIahGIfn%2FDMvPXIlqkXZp5OacToL24Q%2F%2Fpe6eIlBgKHPpofruOrtxL8NUJtCWTDCD6ds1uOh8O3EWCY8XPLHtBXid%2BtzMQb2NwNLNe7Mah4kE%2FTYKF7doN7leS3p5g4jhIqHo5rCELUe3h8V8IovMNiujr8GOqUB6G%2Bydwnwq5u8P5IiD6YmzSDzubger3zakjDfk3Nw2AJ6l8C8UmKxXuLG2P8z9XVIgJbH98Vq9nAy%2BCp7a32dvjkqPv7RFUoxGHWUkYrnhaT5eGMp5Mi3UjnEwA6Vg4NORLE5nPHEK%2BTYUN14QXAV4U5Xx3cqOoRhbU6u5aWQQQrIp8N2f%2Fqj5UKkk2hFu4mi6DQzcc5ZY5W1x6XS%2B3xui4nbmhBm&X-Amz-Signature=31af3d387d7159ab9e710248aef2aae415cae670d06631b627cf7763745ea51d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZMKQZIY%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2na492z1hnCffZzOJCIH4NCuQtIcj%2BCQtpOQT%2FJEKDAiEAknmI3f7n8c84ujG7HHqnCNjAs%2F75SIZ%2BqdRwCH7Za68q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDAMkdr9Q3yMMELX5RircA%2FlJS4mFK7l2SRR7PvE6ClPKB9dkkU3qFgvPrDZlW%2FsJtiGbXEtcQnRE91EgjkEmLoZ5K5%2F73mxQ8Q2n6BWO2xVHG%2Fg2Pz9wSzYEHFe12bM1J039x62QIe5ix2dPMdW2tDqNU2gpji%2FUjwhiJ%2BtSiAsOyC7%2BhRbMNerkRiULmZ%2BTpM5LsuDaTSjmZWezxDf3s1rrnpVKuaBfiahVYdbp8sOa3F%2B062Q7Rea4cB2JR7r7iS2R5fa2DWlin0A6Kjyujt%2FTD%2FC2nfQOKZeBeAF3f1%2BHCcoCpRNyAF1Mdk7bin8Pnrv34nLAOYe7UMhZXsJm%2B0rRmOVAN0zRx3u5cUkIC8DgntuXotipTxhZBznVRBRp%2BgOhrpEZD7Sj02ENFvalFXqSrSs2IOaOwx6oVkQx5sc3ooejfkVvAFhid71BbkpW7qg6YQwJU85Kt7yYcXz7IRKPYcSlRIBfUtoQqaC0RXVZHYl%2BNniW4zfABl6giIahGIfn%2FDMvPXIlqkXZp5OacToL24Q%2F%2Fpe6eIlBgKHPpofruOrtxL8NUJtCWTDCD6ds1uOh8O3EWCY8XPLHtBXid%2BtzMQb2NwNLNe7Mah4kE%2FTYKF7doN7leS3p5g4jhIqHo5rCELUe3h8V8IovMNiujr8GOqUB6G%2Bydwnwq5u8P5IiD6YmzSDzubger3zakjDfk3Nw2AJ6l8C8UmKxXuLG2P8z9XVIgJbH98Vq9nAy%2BCp7a32dvjkqPv7RFUoxGHWUkYrnhaT5eGMp5Mi3UjnEwA6Vg4NORLE5nPHEK%2BTYUN14QXAV4U5Xx3cqOoRhbU6u5aWQQQrIp8N2f%2Fqj5UKkk2hFu4mi6DQzcc5ZY5W1x6XS%2B3xui4nbmhBm&X-Amz-Signature=42dd70028cffabaf9ce314a6bfa5145f18847b4e3e07b6ecaa4ce1a4cb3b37bf&X-Amz-SignedHeaders=host&x-id=GetObject)
