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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZKOXRD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCID2DC96uaqPAsvtQJhjF2cyTIFyhvzUiDPukdR2ezZFzAiBTnaZTfOcLrTJb7q3GYYJoneDz81%2FvxRTxYG5kAVngRSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgTUIN%2FvIeKtFv6HYKtwDbAeTyk2PgfD6QKCHGaeh9h2CGzv21XSbcLQr654cReJfS7Hg2DkWe%2Byf2JmCOdtWOt%2BPU3%2BFV7yaLk9MYo7QuOJ4PI39ALcIcZsjB5z5yaOuW9aYwrBEyW6KWO6V8tu0s34ek%2B6b39zQ0KNenfoLogznLtsa4HUk93XyfTpIrLcb0qvlzPUaKDJrM7KrolVP8lx9qMrc92a8cF1uxtThFOsyS3jCmCd%2F3awiA6Za5uv44mXCcc00RYlLIBCzZbTU1Skhe5JFunMvROCwm3fljbLNDlKN4iNRspSFQ71tEfx%2FoXjJ4wBL1%2FyzCoQE4kmphPrswTwaLzWdIUnyZltNVQZswm%2BceLJbryjl1Hax7nuvuz%2FL1OlDv1F1KurAM5Nh%2BEzGyC9%2F7IYSXV%2FJGEjlPkWQSE1fEvovP9RnsD5%2BJuY4OoqX9D2P8t7D0Iy10EKQ%2BCW6JHmphonaWIs%2FgOoHaOHI%2BVxo1vsoq7Yj4zQz6JFjIyHOazhWMCqVIV9t6yRk8rdNjlDT0wjqHkO1OT97Wskd2pQHNT%2FJDs5ByiZ0u2REyITuY0WGV1026TBRAe1gA2wzqb9KRlsYrLzgvfSMAb2dwn5WHranAPDHvQcqp7mUs8xALGz2Yhbo1ssw3YuAvgY6pgG8ca%2BR1gj1Xj6ztt%2F47BdVtytS9QrvElyTL9Q6EGMV%2B%2FNCzukxHheGsGimgW4LBmtVJlIoOEv1KeydoG3XG%2FLGDuVlqlPx%2F9cq2qazzW1slz%2Bm9JMomMZPfUr8%2FZQfY%2FpO0eESdhfaJ6802sS4maL8C29Xais5dW2%2FhfVHaUT9DXk3pS%2FcSv3jRoYzpK5tunBA%2BvRiYquyTj2%2FLriTb57jq11mbnyY&X-Amz-Signature=bdd76e8078294b569fe0647497def898ddccf34e1d8c6a64180e311665280bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZKOXRD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCID2DC96uaqPAsvtQJhjF2cyTIFyhvzUiDPukdR2ezZFzAiBTnaZTfOcLrTJb7q3GYYJoneDz81%2FvxRTxYG5kAVngRSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgTUIN%2FvIeKtFv6HYKtwDbAeTyk2PgfD6QKCHGaeh9h2CGzv21XSbcLQr654cReJfS7Hg2DkWe%2Byf2JmCOdtWOt%2BPU3%2BFV7yaLk9MYo7QuOJ4PI39ALcIcZsjB5z5yaOuW9aYwrBEyW6KWO6V8tu0s34ek%2B6b39zQ0KNenfoLogznLtsa4HUk93XyfTpIrLcb0qvlzPUaKDJrM7KrolVP8lx9qMrc92a8cF1uxtThFOsyS3jCmCd%2F3awiA6Za5uv44mXCcc00RYlLIBCzZbTU1Skhe5JFunMvROCwm3fljbLNDlKN4iNRspSFQ71tEfx%2FoXjJ4wBL1%2FyzCoQE4kmphPrswTwaLzWdIUnyZltNVQZswm%2BceLJbryjl1Hax7nuvuz%2FL1OlDv1F1KurAM5Nh%2BEzGyC9%2F7IYSXV%2FJGEjlPkWQSE1fEvovP9RnsD5%2BJuY4OoqX9D2P8t7D0Iy10EKQ%2BCW6JHmphonaWIs%2FgOoHaOHI%2BVxo1vsoq7Yj4zQz6JFjIyHOazhWMCqVIV9t6yRk8rdNjlDT0wjqHkO1OT97Wskd2pQHNT%2FJDs5ByiZ0u2REyITuY0WGV1026TBRAe1gA2wzqb9KRlsYrLzgvfSMAb2dwn5WHranAPDHvQcqp7mUs8xALGz2Yhbo1ssw3YuAvgY6pgG8ca%2BR1gj1Xj6ztt%2F47BdVtytS9QrvElyTL9Q6EGMV%2B%2FNCzukxHheGsGimgW4LBmtVJlIoOEv1KeydoG3XG%2FLGDuVlqlPx%2F9cq2qazzW1slz%2Bm9JMomMZPfUr8%2FZQfY%2FpO0eESdhfaJ6802sS4maL8C29Xais5dW2%2FhfVHaUT9DXk3pS%2FcSv3jRoYzpK5tunBA%2BvRiYquyTj2%2FLriTb57jq11mbnyY&X-Amz-Signature=183370bc28ade0050d9312afd16e08c60981523b325c8350150df4f18dcbf2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZKOXRD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCID2DC96uaqPAsvtQJhjF2cyTIFyhvzUiDPukdR2ezZFzAiBTnaZTfOcLrTJb7q3GYYJoneDz81%2FvxRTxYG5kAVngRSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgTUIN%2FvIeKtFv6HYKtwDbAeTyk2PgfD6QKCHGaeh9h2CGzv21XSbcLQr654cReJfS7Hg2DkWe%2Byf2JmCOdtWOt%2BPU3%2BFV7yaLk9MYo7QuOJ4PI39ALcIcZsjB5z5yaOuW9aYwrBEyW6KWO6V8tu0s34ek%2B6b39zQ0KNenfoLogznLtsa4HUk93XyfTpIrLcb0qvlzPUaKDJrM7KrolVP8lx9qMrc92a8cF1uxtThFOsyS3jCmCd%2F3awiA6Za5uv44mXCcc00RYlLIBCzZbTU1Skhe5JFunMvROCwm3fljbLNDlKN4iNRspSFQ71tEfx%2FoXjJ4wBL1%2FyzCoQE4kmphPrswTwaLzWdIUnyZltNVQZswm%2BceLJbryjl1Hax7nuvuz%2FL1OlDv1F1KurAM5Nh%2BEzGyC9%2F7IYSXV%2FJGEjlPkWQSE1fEvovP9RnsD5%2BJuY4OoqX9D2P8t7D0Iy10EKQ%2BCW6JHmphonaWIs%2FgOoHaOHI%2BVxo1vsoq7Yj4zQz6JFjIyHOazhWMCqVIV9t6yRk8rdNjlDT0wjqHkO1OT97Wskd2pQHNT%2FJDs5ByiZ0u2REyITuY0WGV1026TBRAe1gA2wzqb9KRlsYrLzgvfSMAb2dwn5WHranAPDHvQcqp7mUs8xALGz2Yhbo1ssw3YuAvgY6pgG8ca%2BR1gj1Xj6ztt%2F47BdVtytS9QrvElyTL9Q6EGMV%2B%2FNCzukxHheGsGimgW4LBmtVJlIoOEv1KeydoG3XG%2FLGDuVlqlPx%2F9cq2qazzW1slz%2Bm9JMomMZPfUr8%2FZQfY%2FpO0eESdhfaJ6802sS4maL8C29Xais5dW2%2FhfVHaUT9DXk3pS%2FcSv3jRoYzpK5tunBA%2BvRiYquyTj2%2FLriTb57jq11mbnyY&X-Amz-Signature=cc985a4ec3ee8619fbb2b53e618090565960ef440c4f692d3961f6a3f781b286&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZKOXRD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCID2DC96uaqPAsvtQJhjF2cyTIFyhvzUiDPukdR2ezZFzAiBTnaZTfOcLrTJb7q3GYYJoneDz81%2FvxRTxYG5kAVngRSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgTUIN%2FvIeKtFv6HYKtwDbAeTyk2PgfD6QKCHGaeh9h2CGzv21XSbcLQr654cReJfS7Hg2DkWe%2Byf2JmCOdtWOt%2BPU3%2BFV7yaLk9MYo7QuOJ4PI39ALcIcZsjB5z5yaOuW9aYwrBEyW6KWO6V8tu0s34ek%2B6b39zQ0KNenfoLogznLtsa4HUk93XyfTpIrLcb0qvlzPUaKDJrM7KrolVP8lx9qMrc92a8cF1uxtThFOsyS3jCmCd%2F3awiA6Za5uv44mXCcc00RYlLIBCzZbTU1Skhe5JFunMvROCwm3fljbLNDlKN4iNRspSFQ71tEfx%2FoXjJ4wBL1%2FyzCoQE4kmphPrswTwaLzWdIUnyZltNVQZswm%2BceLJbryjl1Hax7nuvuz%2FL1OlDv1F1KurAM5Nh%2BEzGyC9%2F7IYSXV%2FJGEjlPkWQSE1fEvovP9RnsD5%2BJuY4OoqX9D2P8t7D0Iy10EKQ%2BCW6JHmphonaWIs%2FgOoHaOHI%2BVxo1vsoq7Yj4zQz6JFjIyHOazhWMCqVIV9t6yRk8rdNjlDT0wjqHkO1OT97Wskd2pQHNT%2FJDs5ByiZ0u2REyITuY0WGV1026TBRAe1gA2wzqb9KRlsYrLzgvfSMAb2dwn5WHranAPDHvQcqp7mUs8xALGz2Yhbo1ssw3YuAvgY6pgG8ca%2BR1gj1Xj6ztt%2F47BdVtytS9QrvElyTL9Q6EGMV%2B%2FNCzukxHheGsGimgW4LBmtVJlIoOEv1KeydoG3XG%2FLGDuVlqlPx%2F9cq2qazzW1slz%2Bm9JMomMZPfUr8%2FZQfY%2FpO0eESdhfaJ6802sS4maL8C29Xais5dW2%2FhfVHaUT9DXk3pS%2FcSv3jRoYzpK5tunBA%2BvRiYquyTj2%2FLriTb57jq11mbnyY&X-Amz-Signature=8bf44e32835b10a0cc43185457ca98cdc21bdddb707dd8ffd8fb0332f6c84541&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZKOXRD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCID2DC96uaqPAsvtQJhjF2cyTIFyhvzUiDPukdR2ezZFzAiBTnaZTfOcLrTJb7q3GYYJoneDz81%2FvxRTxYG5kAVngRSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgTUIN%2FvIeKtFv6HYKtwDbAeTyk2PgfD6QKCHGaeh9h2CGzv21XSbcLQr654cReJfS7Hg2DkWe%2Byf2JmCOdtWOt%2BPU3%2BFV7yaLk9MYo7QuOJ4PI39ALcIcZsjB5z5yaOuW9aYwrBEyW6KWO6V8tu0s34ek%2B6b39zQ0KNenfoLogznLtsa4HUk93XyfTpIrLcb0qvlzPUaKDJrM7KrolVP8lx9qMrc92a8cF1uxtThFOsyS3jCmCd%2F3awiA6Za5uv44mXCcc00RYlLIBCzZbTU1Skhe5JFunMvROCwm3fljbLNDlKN4iNRspSFQ71tEfx%2FoXjJ4wBL1%2FyzCoQE4kmphPrswTwaLzWdIUnyZltNVQZswm%2BceLJbryjl1Hax7nuvuz%2FL1OlDv1F1KurAM5Nh%2BEzGyC9%2F7IYSXV%2FJGEjlPkWQSE1fEvovP9RnsD5%2BJuY4OoqX9D2P8t7D0Iy10EKQ%2BCW6JHmphonaWIs%2FgOoHaOHI%2BVxo1vsoq7Yj4zQz6JFjIyHOazhWMCqVIV9t6yRk8rdNjlDT0wjqHkO1OT97Wskd2pQHNT%2FJDs5ByiZ0u2REyITuY0WGV1026TBRAe1gA2wzqb9KRlsYrLzgvfSMAb2dwn5WHranAPDHvQcqp7mUs8xALGz2Yhbo1ssw3YuAvgY6pgG8ca%2BR1gj1Xj6ztt%2F47BdVtytS9QrvElyTL9Q6EGMV%2B%2FNCzukxHheGsGimgW4LBmtVJlIoOEv1KeydoG3XG%2FLGDuVlqlPx%2F9cq2qazzW1slz%2Bm9JMomMZPfUr8%2FZQfY%2FpO0eESdhfaJ6802sS4maL8C29Xais5dW2%2FhfVHaUT9DXk3pS%2FcSv3jRoYzpK5tunBA%2BvRiYquyTj2%2FLriTb57jq11mbnyY&X-Amz-Signature=04507c6ea90d198008faa00c5b4d48946d8c6ab0b99c7c3accfaa7a7a891f420&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZKOXRD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCID2DC96uaqPAsvtQJhjF2cyTIFyhvzUiDPukdR2ezZFzAiBTnaZTfOcLrTJb7q3GYYJoneDz81%2FvxRTxYG5kAVngRSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMgTUIN%2FvIeKtFv6HYKtwDbAeTyk2PgfD6QKCHGaeh9h2CGzv21XSbcLQr654cReJfS7Hg2DkWe%2Byf2JmCOdtWOt%2BPU3%2BFV7yaLk9MYo7QuOJ4PI39ALcIcZsjB5z5yaOuW9aYwrBEyW6KWO6V8tu0s34ek%2B6b39zQ0KNenfoLogznLtsa4HUk93XyfTpIrLcb0qvlzPUaKDJrM7KrolVP8lx9qMrc92a8cF1uxtThFOsyS3jCmCd%2F3awiA6Za5uv44mXCcc00RYlLIBCzZbTU1Skhe5JFunMvROCwm3fljbLNDlKN4iNRspSFQ71tEfx%2FoXjJ4wBL1%2FyzCoQE4kmphPrswTwaLzWdIUnyZltNVQZswm%2BceLJbryjl1Hax7nuvuz%2FL1OlDv1F1KurAM5Nh%2BEzGyC9%2F7IYSXV%2FJGEjlPkWQSE1fEvovP9RnsD5%2BJuY4OoqX9D2P8t7D0Iy10EKQ%2BCW6JHmphonaWIs%2FgOoHaOHI%2BVxo1vsoq7Yj4zQz6JFjIyHOazhWMCqVIV9t6yRk8rdNjlDT0wjqHkO1OT97Wskd2pQHNT%2FJDs5ByiZ0u2REyITuY0WGV1026TBRAe1gA2wzqb9KRlsYrLzgvfSMAb2dwn5WHranAPDHvQcqp7mUs8xALGz2Yhbo1ssw3YuAvgY6pgG8ca%2BR1gj1Xj6ztt%2F47BdVtytS9QrvElyTL9Q6EGMV%2B%2FNCzukxHheGsGimgW4LBmtVJlIoOEv1KeydoG3XG%2FLGDuVlqlPx%2F9cq2qazzW1slz%2Bm9JMomMZPfUr8%2FZQfY%2FpO0eESdhfaJ6802sS4maL8C29Xais5dW2%2FhfVHaUT9DXk3pS%2FcSv3jRoYzpK5tunBA%2BvRiYquyTj2%2FLriTb57jq11mbnyY&X-Amz-Signature=166e0b11723743b73648bf07e206049b5b257be16237ed92f28ef299871853e8&X-Amz-SignedHeaders=host&x-id=GetObject)
