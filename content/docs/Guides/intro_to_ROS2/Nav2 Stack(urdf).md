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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6I4HK6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7KvivJkiVAgSraql%2FOT1KQD2dugdCIwpw8UjMS5e0VAiBYmpQc2KC6r7G40GIdRDlcwbneQTqLWGjSUaAMe3S8yCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3zfa5gtEbYtRZdzKKtwD9kcku9qEB9BbBquAQZcQEIzWGGm4WBCwLAsWtEpSFvb2gattzFgecF%2B6l4e15a9npMgiMQN5HexH1y7eOLdhxDTH%2BqWvCjcLSYHgyg61joIC6JsGHdSHtlbR3k%2FHE%2FV%2FKYY2vziTslWNpe39Q3%2BuJcMmFVoH0VbM169hUK%2FbnOWZA9L6Fo7G%2B1M0sjJEddjcrEmPynB1F47MSxbmQzcRVkFKXJ%2FBvcRvg57VXsJvQF4H8SccMte6IVj145ymZK0cA%2FHzRrzst1i2d16k7iY5UVtnZoiNg4x%2B8JTU0nGTUekm70BwzUgXc%2F784jrY%2FemdhdkDZ9oNV2OQPx%2BT2yx4AMLQsDNFicyQEV3nlTwrjCTJDqUW6ETsvRojSNfLXu%2F%2FP6PxPTP%2B4OOA1xIcQfdmheTo2vgkXUtec623XIPU88bnXmo3G5T8qpjrvg4aTrWgi6cdx%2FzbQw8Z%2FIXsPsBp20igOpWfy%2B27X7Ugl%2FXHMJRyz2hN%2Bfkg3E%2BcKhBZDMXHnHQQ7kmJ6wuPXQrNqqU92Mv3y6YesHVQFSAcyzq%2BOvhzfUfCiZOGOv8LgEsLcc2OQICkyq%2B9zOQ2JkNWURHrNo2D%2FRNnnYctXu6b8hAOC0oGoRscNxSZFrde4aIw4LTpvQY6pgHJV9B9XL1LbUwxUitOX%2FfbhUMbKT5JFqnFYCuKcrYrhns8d%2BtoRyKtpCwz8Uqd%2F2Jog2CgfYnlt3lB2NIIvuxKYHflaE2CqKT7WXp%2FINaH5ffgcDuRmU3SnRKNFTtAex1vNaM9W2TTYf3wKHoxvy4l6PlTX9IKQUhQ6cqUHXXgftFB406dfWhSgjs1OeHfcBpXX2eO%2FjScKdxauVcalZ2ylPf7Q5Pr&X-Amz-Signature=7646aa21b06194e8cd2fc59e24fa1b70e4e1a5a63815dd74d1464f8117acc6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6I4HK6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7KvivJkiVAgSraql%2FOT1KQD2dugdCIwpw8UjMS5e0VAiBYmpQc2KC6r7G40GIdRDlcwbneQTqLWGjSUaAMe3S8yCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3zfa5gtEbYtRZdzKKtwD9kcku9qEB9BbBquAQZcQEIzWGGm4WBCwLAsWtEpSFvb2gattzFgecF%2B6l4e15a9npMgiMQN5HexH1y7eOLdhxDTH%2BqWvCjcLSYHgyg61joIC6JsGHdSHtlbR3k%2FHE%2FV%2FKYY2vziTslWNpe39Q3%2BuJcMmFVoH0VbM169hUK%2FbnOWZA9L6Fo7G%2B1M0sjJEddjcrEmPynB1F47MSxbmQzcRVkFKXJ%2FBvcRvg57VXsJvQF4H8SccMte6IVj145ymZK0cA%2FHzRrzst1i2d16k7iY5UVtnZoiNg4x%2B8JTU0nGTUekm70BwzUgXc%2F784jrY%2FemdhdkDZ9oNV2OQPx%2BT2yx4AMLQsDNFicyQEV3nlTwrjCTJDqUW6ETsvRojSNfLXu%2F%2FP6PxPTP%2B4OOA1xIcQfdmheTo2vgkXUtec623XIPU88bnXmo3G5T8qpjrvg4aTrWgi6cdx%2FzbQw8Z%2FIXsPsBp20igOpWfy%2B27X7Ugl%2FXHMJRyz2hN%2Bfkg3E%2BcKhBZDMXHnHQQ7kmJ6wuPXQrNqqU92Mv3y6YesHVQFSAcyzq%2BOvhzfUfCiZOGOv8LgEsLcc2OQICkyq%2B9zOQ2JkNWURHrNo2D%2FRNnnYctXu6b8hAOC0oGoRscNxSZFrde4aIw4LTpvQY6pgHJV9B9XL1LbUwxUitOX%2FfbhUMbKT5JFqnFYCuKcrYrhns8d%2BtoRyKtpCwz8Uqd%2F2Jog2CgfYnlt3lB2NIIvuxKYHflaE2CqKT7WXp%2FINaH5ffgcDuRmU3SnRKNFTtAex1vNaM9W2TTYf3wKHoxvy4l6PlTX9IKQUhQ6cqUHXXgftFB406dfWhSgjs1OeHfcBpXX2eO%2FjScKdxauVcalZ2ylPf7Q5Pr&X-Amz-Signature=1a104b56972b3dedf5742e4f83bdfc774b388ef163765326410ee668c56e9dda&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6I4HK6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7KvivJkiVAgSraql%2FOT1KQD2dugdCIwpw8UjMS5e0VAiBYmpQc2KC6r7G40GIdRDlcwbneQTqLWGjSUaAMe3S8yCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3zfa5gtEbYtRZdzKKtwD9kcku9qEB9BbBquAQZcQEIzWGGm4WBCwLAsWtEpSFvb2gattzFgecF%2B6l4e15a9npMgiMQN5HexH1y7eOLdhxDTH%2BqWvCjcLSYHgyg61joIC6JsGHdSHtlbR3k%2FHE%2FV%2FKYY2vziTslWNpe39Q3%2BuJcMmFVoH0VbM169hUK%2FbnOWZA9L6Fo7G%2B1M0sjJEddjcrEmPynB1F47MSxbmQzcRVkFKXJ%2FBvcRvg57VXsJvQF4H8SccMte6IVj145ymZK0cA%2FHzRrzst1i2d16k7iY5UVtnZoiNg4x%2B8JTU0nGTUekm70BwzUgXc%2F784jrY%2FemdhdkDZ9oNV2OQPx%2BT2yx4AMLQsDNFicyQEV3nlTwrjCTJDqUW6ETsvRojSNfLXu%2F%2FP6PxPTP%2B4OOA1xIcQfdmheTo2vgkXUtec623XIPU88bnXmo3G5T8qpjrvg4aTrWgi6cdx%2FzbQw8Z%2FIXsPsBp20igOpWfy%2B27X7Ugl%2FXHMJRyz2hN%2Bfkg3E%2BcKhBZDMXHnHQQ7kmJ6wuPXQrNqqU92Mv3y6YesHVQFSAcyzq%2BOvhzfUfCiZOGOv8LgEsLcc2OQICkyq%2B9zOQ2JkNWURHrNo2D%2FRNnnYctXu6b8hAOC0oGoRscNxSZFrde4aIw4LTpvQY6pgHJV9B9XL1LbUwxUitOX%2FfbhUMbKT5JFqnFYCuKcrYrhns8d%2BtoRyKtpCwz8Uqd%2F2Jog2CgfYnlt3lB2NIIvuxKYHflaE2CqKT7WXp%2FINaH5ffgcDuRmU3SnRKNFTtAex1vNaM9W2TTYf3wKHoxvy4l6PlTX9IKQUhQ6cqUHXXgftFB406dfWhSgjs1OeHfcBpXX2eO%2FjScKdxauVcalZ2ylPf7Q5Pr&X-Amz-Signature=5fb3d12b1facaeea633585c6c8d866220fef88c7d780c78ba5b945e5b0de0db3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6I4HK6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7KvivJkiVAgSraql%2FOT1KQD2dugdCIwpw8UjMS5e0VAiBYmpQc2KC6r7G40GIdRDlcwbneQTqLWGjSUaAMe3S8yCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3zfa5gtEbYtRZdzKKtwD9kcku9qEB9BbBquAQZcQEIzWGGm4WBCwLAsWtEpSFvb2gattzFgecF%2B6l4e15a9npMgiMQN5HexH1y7eOLdhxDTH%2BqWvCjcLSYHgyg61joIC6JsGHdSHtlbR3k%2FHE%2FV%2FKYY2vziTslWNpe39Q3%2BuJcMmFVoH0VbM169hUK%2FbnOWZA9L6Fo7G%2B1M0sjJEddjcrEmPynB1F47MSxbmQzcRVkFKXJ%2FBvcRvg57VXsJvQF4H8SccMte6IVj145ymZK0cA%2FHzRrzst1i2d16k7iY5UVtnZoiNg4x%2B8JTU0nGTUekm70BwzUgXc%2F784jrY%2FemdhdkDZ9oNV2OQPx%2BT2yx4AMLQsDNFicyQEV3nlTwrjCTJDqUW6ETsvRojSNfLXu%2F%2FP6PxPTP%2B4OOA1xIcQfdmheTo2vgkXUtec623XIPU88bnXmo3G5T8qpjrvg4aTrWgi6cdx%2FzbQw8Z%2FIXsPsBp20igOpWfy%2B27X7Ugl%2FXHMJRyz2hN%2Bfkg3E%2BcKhBZDMXHnHQQ7kmJ6wuPXQrNqqU92Mv3y6YesHVQFSAcyzq%2BOvhzfUfCiZOGOv8LgEsLcc2OQICkyq%2B9zOQ2JkNWURHrNo2D%2FRNnnYctXu6b8hAOC0oGoRscNxSZFrde4aIw4LTpvQY6pgHJV9B9XL1LbUwxUitOX%2FfbhUMbKT5JFqnFYCuKcrYrhns8d%2BtoRyKtpCwz8Uqd%2F2Jog2CgfYnlt3lB2NIIvuxKYHflaE2CqKT7WXp%2FINaH5ffgcDuRmU3SnRKNFTtAex1vNaM9W2TTYf3wKHoxvy4l6PlTX9IKQUhQ6cqUHXXgftFB406dfWhSgjs1OeHfcBpXX2eO%2FjScKdxauVcalZ2ylPf7Q5Pr&X-Amz-Signature=085278e31128d5aba690e71cb5f5a739690d5ecb66e0d764d964a8059b436883&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6I4HK6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7KvivJkiVAgSraql%2FOT1KQD2dugdCIwpw8UjMS5e0VAiBYmpQc2KC6r7G40GIdRDlcwbneQTqLWGjSUaAMe3S8yCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3zfa5gtEbYtRZdzKKtwD9kcku9qEB9BbBquAQZcQEIzWGGm4WBCwLAsWtEpSFvb2gattzFgecF%2B6l4e15a9npMgiMQN5HexH1y7eOLdhxDTH%2BqWvCjcLSYHgyg61joIC6JsGHdSHtlbR3k%2FHE%2FV%2FKYY2vziTslWNpe39Q3%2BuJcMmFVoH0VbM169hUK%2FbnOWZA9L6Fo7G%2B1M0sjJEddjcrEmPynB1F47MSxbmQzcRVkFKXJ%2FBvcRvg57VXsJvQF4H8SccMte6IVj145ymZK0cA%2FHzRrzst1i2d16k7iY5UVtnZoiNg4x%2B8JTU0nGTUekm70BwzUgXc%2F784jrY%2FemdhdkDZ9oNV2OQPx%2BT2yx4AMLQsDNFicyQEV3nlTwrjCTJDqUW6ETsvRojSNfLXu%2F%2FP6PxPTP%2B4OOA1xIcQfdmheTo2vgkXUtec623XIPU88bnXmo3G5T8qpjrvg4aTrWgi6cdx%2FzbQw8Z%2FIXsPsBp20igOpWfy%2B27X7Ugl%2FXHMJRyz2hN%2Bfkg3E%2BcKhBZDMXHnHQQ7kmJ6wuPXQrNqqU92Mv3y6YesHVQFSAcyzq%2BOvhzfUfCiZOGOv8LgEsLcc2OQICkyq%2B9zOQ2JkNWURHrNo2D%2FRNnnYctXu6b8hAOC0oGoRscNxSZFrde4aIw4LTpvQY6pgHJV9B9XL1LbUwxUitOX%2FfbhUMbKT5JFqnFYCuKcrYrhns8d%2BtoRyKtpCwz8Uqd%2F2Jog2CgfYnlt3lB2NIIvuxKYHflaE2CqKT7WXp%2FINaH5ffgcDuRmU3SnRKNFTtAex1vNaM9W2TTYf3wKHoxvy4l6PlTX9IKQUhQ6cqUHXXgftFB406dfWhSgjs1OeHfcBpXX2eO%2FjScKdxauVcalZ2ylPf7Q5Pr&X-Amz-Signature=b0fe4b6109faff83fbf45d04eeda2e0332d307812cfe0b7b40c85eeeff1100ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6I4HK6%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7KvivJkiVAgSraql%2FOT1KQD2dugdCIwpw8UjMS5e0VAiBYmpQc2KC6r7G40GIdRDlcwbneQTqLWGjSUaAMe3S8yCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3zfa5gtEbYtRZdzKKtwD9kcku9qEB9BbBquAQZcQEIzWGGm4WBCwLAsWtEpSFvb2gattzFgecF%2B6l4e15a9npMgiMQN5HexH1y7eOLdhxDTH%2BqWvCjcLSYHgyg61joIC6JsGHdSHtlbR3k%2FHE%2FV%2FKYY2vziTslWNpe39Q3%2BuJcMmFVoH0VbM169hUK%2FbnOWZA9L6Fo7G%2B1M0sjJEddjcrEmPynB1F47MSxbmQzcRVkFKXJ%2FBvcRvg57VXsJvQF4H8SccMte6IVj145ymZK0cA%2FHzRrzst1i2d16k7iY5UVtnZoiNg4x%2B8JTU0nGTUekm70BwzUgXc%2F784jrY%2FemdhdkDZ9oNV2OQPx%2BT2yx4AMLQsDNFicyQEV3nlTwrjCTJDqUW6ETsvRojSNfLXu%2F%2FP6PxPTP%2B4OOA1xIcQfdmheTo2vgkXUtec623XIPU88bnXmo3G5T8qpjrvg4aTrWgi6cdx%2FzbQw8Z%2FIXsPsBp20igOpWfy%2B27X7Ugl%2FXHMJRyz2hN%2Bfkg3E%2BcKhBZDMXHnHQQ7kmJ6wuPXQrNqqU92Mv3y6YesHVQFSAcyzq%2BOvhzfUfCiZOGOv8LgEsLcc2OQICkyq%2B9zOQ2JkNWURHrNo2D%2FRNnnYctXu6b8hAOC0oGoRscNxSZFrde4aIw4LTpvQY6pgHJV9B9XL1LbUwxUitOX%2FfbhUMbKT5JFqnFYCuKcrYrhns8d%2BtoRyKtpCwz8Uqd%2F2Jog2CgfYnlt3lB2NIIvuxKYHflaE2CqKT7WXp%2FINaH5ffgcDuRmU3SnRKNFTtAex1vNaM9W2TTYf3wKHoxvy4l6PlTX9IKQUhQ6cqUHXXgftFB406dfWhSgjs1OeHfcBpXX2eO%2FjScKdxauVcalZ2ylPf7Q5Pr&X-Amz-Signature=049e4eb215db39c293fdb530e4f22a3cb0e528cbbb9d9e0359fbf72472e9f67d&X-Amz-SignedHeaders=host&x-id=GetObject)
