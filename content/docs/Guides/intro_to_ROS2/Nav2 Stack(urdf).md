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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ILQSAH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCRTnYi8DxZ%2B7dLIIeWCWRYL2eA%2BfRPd%2BvG1A%2FFcc3g4AIgJINlL8pluDN0VN2nkv%2FlsGriqa6KOYpjoP53Qh92hRgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1PmzNBZ1c8hq4SZircAwgZnFDjBSrzcwS6aFkXKYMw7FG%2FBZhAYTG4VdhJ9WyXUzvP%2FI3%2BkOwyuodjCAp2P%2Bp1CyXhShPhCAOUPERFTQkU5L%2BI899qDdMyrit%2BNugpz6EanUnJn96nYkq3IH6%2FSTx40wz%2BLm3ccI35EjdtUszq01DZn9H3WP7tC%2Bg845hBbOaVXN1chgab1x%2B3kd%2FYRFDojF5KjPtoiyT2k5P%2BxhKOw%2F0Tg4zsMSwjPNZy84JurYnDfyrUEHQalJBjwkbPofne8UkSCV3o5ny9eWA58lotYNX0LJNgfpWhWXwoJoC1WUm6%2Fyn8rde8q9yO2T8RgfGvlonnRv7MHzQh3OdPYsXZL%2BFQp4%2FRQAWTS1%2FpemiMtc0CkkTxv4%2BVc%2FvnJjZZuFEjgB0hGrCkFN7gCqs8%2B9aSr20XpACjLiKx9BaVtg4lSH1FLFDK20CGVSrq9pOWL%2FrdPCq8vI2QTBLSqHWQ%2BnbZAv3U8nj3pc823Iq9D5tKkvchAOh9IAmO%2BiXn6TGqv0qBurlgsUxM7xVO9lQNz8RyBQpwlCAdBJxpoHrQbGvyCyfrGTGhOHs99LT%2Fq9X8Zl7EBIbc%2FG5eFP11wL0Vxxn3%2F4Sq4AUMvpQQdPxv4WQpIxdYoRI2bKtKfrlxMI71ycAGOqUBW5CoLClGKYkN3WIsmDyI5aqJcRv%2Bfyom1F1GHBvV9O1l45oLWuUThVoEqmdtsVN4yQM3aRq%2B%2Fq0QaEq5qVm5wcnN2Ed%2BYye3xjEfPC%2Fq5pjDBuCulRsqPHYmKAYXuzWzn07hb0wUVZsPhJxVuH2SxakMkCja%2FKDB7HbGmQj8Fj50EGR4LEVvQ4XtnEX89eXhJQCgBWc5hcPLRmH%2FhaGJQe0lnklA&X-Amz-Signature=8dc9ecee6ad566065b702616e27ec0f6c52be915a38c979c559c909778adca28&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ILQSAH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCRTnYi8DxZ%2B7dLIIeWCWRYL2eA%2BfRPd%2BvG1A%2FFcc3g4AIgJINlL8pluDN0VN2nkv%2FlsGriqa6KOYpjoP53Qh92hRgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1PmzNBZ1c8hq4SZircAwgZnFDjBSrzcwS6aFkXKYMw7FG%2FBZhAYTG4VdhJ9WyXUzvP%2FI3%2BkOwyuodjCAp2P%2Bp1CyXhShPhCAOUPERFTQkU5L%2BI899qDdMyrit%2BNugpz6EanUnJn96nYkq3IH6%2FSTx40wz%2BLm3ccI35EjdtUszq01DZn9H3WP7tC%2Bg845hBbOaVXN1chgab1x%2B3kd%2FYRFDojF5KjPtoiyT2k5P%2BxhKOw%2F0Tg4zsMSwjPNZy84JurYnDfyrUEHQalJBjwkbPofne8UkSCV3o5ny9eWA58lotYNX0LJNgfpWhWXwoJoC1WUm6%2Fyn8rde8q9yO2T8RgfGvlonnRv7MHzQh3OdPYsXZL%2BFQp4%2FRQAWTS1%2FpemiMtc0CkkTxv4%2BVc%2FvnJjZZuFEjgB0hGrCkFN7gCqs8%2B9aSr20XpACjLiKx9BaVtg4lSH1FLFDK20CGVSrq9pOWL%2FrdPCq8vI2QTBLSqHWQ%2BnbZAv3U8nj3pc823Iq9D5tKkvchAOh9IAmO%2BiXn6TGqv0qBurlgsUxM7xVO9lQNz8RyBQpwlCAdBJxpoHrQbGvyCyfrGTGhOHs99LT%2Fq9X8Zl7EBIbc%2FG5eFP11wL0Vxxn3%2F4Sq4AUMvpQQdPxv4WQpIxdYoRI2bKtKfrlxMI71ycAGOqUBW5CoLClGKYkN3WIsmDyI5aqJcRv%2Bfyom1F1GHBvV9O1l45oLWuUThVoEqmdtsVN4yQM3aRq%2B%2Fq0QaEq5qVm5wcnN2Ed%2BYye3xjEfPC%2Fq5pjDBuCulRsqPHYmKAYXuzWzn07hb0wUVZsPhJxVuH2SxakMkCja%2FKDB7HbGmQj8Fj50EGR4LEVvQ4XtnEX89eXhJQCgBWc5hcPLRmH%2FhaGJQe0lnklA&X-Amz-Signature=95fb9038eccadb133ea0b5cb7cda16d01de302e81471cc350ba626b029133ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ILQSAH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCRTnYi8DxZ%2B7dLIIeWCWRYL2eA%2BfRPd%2BvG1A%2FFcc3g4AIgJINlL8pluDN0VN2nkv%2FlsGriqa6KOYpjoP53Qh92hRgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1PmzNBZ1c8hq4SZircAwgZnFDjBSrzcwS6aFkXKYMw7FG%2FBZhAYTG4VdhJ9WyXUzvP%2FI3%2BkOwyuodjCAp2P%2Bp1CyXhShPhCAOUPERFTQkU5L%2BI899qDdMyrit%2BNugpz6EanUnJn96nYkq3IH6%2FSTx40wz%2BLm3ccI35EjdtUszq01DZn9H3WP7tC%2Bg845hBbOaVXN1chgab1x%2B3kd%2FYRFDojF5KjPtoiyT2k5P%2BxhKOw%2F0Tg4zsMSwjPNZy84JurYnDfyrUEHQalJBjwkbPofne8UkSCV3o5ny9eWA58lotYNX0LJNgfpWhWXwoJoC1WUm6%2Fyn8rde8q9yO2T8RgfGvlonnRv7MHzQh3OdPYsXZL%2BFQp4%2FRQAWTS1%2FpemiMtc0CkkTxv4%2BVc%2FvnJjZZuFEjgB0hGrCkFN7gCqs8%2B9aSr20XpACjLiKx9BaVtg4lSH1FLFDK20CGVSrq9pOWL%2FrdPCq8vI2QTBLSqHWQ%2BnbZAv3U8nj3pc823Iq9D5tKkvchAOh9IAmO%2BiXn6TGqv0qBurlgsUxM7xVO9lQNz8RyBQpwlCAdBJxpoHrQbGvyCyfrGTGhOHs99LT%2Fq9X8Zl7EBIbc%2FG5eFP11wL0Vxxn3%2F4Sq4AUMvpQQdPxv4WQpIxdYoRI2bKtKfrlxMI71ycAGOqUBW5CoLClGKYkN3WIsmDyI5aqJcRv%2Bfyom1F1GHBvV9O1l45oLWuUThVoEqmdtsVN4yQM3aRq%2B%2Fq0QaEq5qVm5wcnN2Ed%2BYye3xjEfPC%2Fq5pjDBuCulRsqPHYmKAYXuzWzn07hb0wUVZsPhJxVuH2SxakMkCja%2FKDB7HbGmQj8Fj50EGR4LEVvQ4XtnEX89eXhJQCgBWc5hcPLRmH%2FhaGJQe0lnklA&X-Amz-Signature=5e4d1e4fa580f7fc912f125ee9c01c8f08b262525fffb946ecd57768e8f1a1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ILQSAH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCRTnYi8DxZ%2B7dLIIeWCWRYL2eA%2BfRPd%2BvG1A%2FFcc3g4AIgJINlL8pluDN0VN2nkv%2FlsGriqa6KOYpjoP53Qh92hRgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1PmzNBZ1c8hq4SZircAwgZnFDjBSrzcwS6aFkXKYMw7FG%2FBZhAYTG4VdhJ9WyXUzvP%2FI3%2BkOwyuodjCAp2P%2Bp1CyXhShPhCAOUPERFTQkU5L%2BI899qDdMyrit%2BNugpz6EanUnJn96nYkq3IH6%2FSTx40wz%2BLm3ccI35EjdtUszq01DZn9H3WP7tC%2Bg845hBbOaVXN1chgab1x%2B3kd%2FYRFDojF5KjPtoiyT2k5P%2BxhKOw%2F0Tg4zsMSwjPNZy84JurYnDfyrUEHQalJBjwkbPofne8UkSCV3o5ny9eWA58lotYNX0LJNgfpWhWXwoJoC1WUm6%2Fyn8rde8q9yO2T8RgfGvlonnRv7MHzQh3OdPYsXZL%2BFQp4%2FRQAWTS1%2FpemiMtc0CkkTxv4%2BVc%2FvnJjZZuFEjgB0hGrCkFN7gCqs8%2B9aSr20XpACjLiKx9BaVtg4lSH1FLFDK20CGVSrq9pOWL%2FrdPCq8vI2QTBLSqHWQ%2BnbZAv3U8nj3pc823Iq9D5tKkvchAOh9IAmO%2BiXn6TGqv0qBurlgsUxM7xVO9lQNz8RyBQpwlCAdBJxpoHrQbGvyCyfrGTGhOHs99LT%2Fq9X8Zl7EBIbc%2FG5eFP11wL0Vxxn3%2F4Sq4AUMvpQQdPxv4WQpIxdYoRI2bKtKfrlxMI71ycAGOqUBW5CoLClGKYkN3WIsmDyI5aqJcRv%2Bfyom1F1GHBvV9O1l45oLWuUThVoEqmdtsVN4yQM3aRq%2B%2Fq0QaEq5qVm5wcnN2Ed%2BYye3xjEfPC%2Fq5pjDBuCulRsqPHYmKAYXuzWzn07hb0wUVZsPhJxVuH2SxakMkCja%2FKDB7HbGmQj8Fj50EGR4LEVvQ4XtnEX89eXhJQCgBWc5hcPLRmH%2FhaGJQe0lnklA&X-Amz-Signature=36b858367d9758a6b7dbd23291166b90de00234f36a8648ada4bbeedad1a20e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ILQSAH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCRTnYi8DxZ%2B7dLIIeWCWRYL2eA%2BfRPd%2BvG1A%2FFcc3g4AIgJINlL8pluDN0VN2nkv%2FlsGriqa6KOYpjoP53Qh92hRgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1PmzNBZ1c8hq4SZircAwgZnFDjBSrzcwS6aFkXKYMw7FG%2FBZhAYTG4VdhJ9WyXUzvP%2FI3%2BkOwyuodjCAp2P%2Bp1CyXhShPhCAOUPERFTQkU5L%2BI899qDdMyrit%2BNugpz6EanUnJn96nYkq3IH6%2FSTx40wz%2BLm3ccI35EjdtUszq01DZn9H3WP7tC%2Bg845hBbOaVXN1chgab1x%2B3kd%2FYRFDojF5KjPtoiyT2k5P%2BxhKOw%2F0Tg4zsMSwjPNZy84JurYnDfyrUEHQalJBjwkbPofne8UkSCV3o5ny9eWA58lotYNX0LJNgfpWhWXwoJoC1WUm6%2Fyn8rde8q9yO2T8RgfGvlonnRv7MHzQh3OdPYsXZL%2BFQp4%2FRQAWTS1%2FpemiMtc0CkkTxv4%2BVc%2FvnJjZZuFEjgB0hGrCkFN7gCqs8%2B9aSr20XpACjLiKx9BaVtg4lSH1FLFDK20CGVSrq9pOWL%2FrdPCq8vI2QTBLSqHWQ%2BnbZAv3U8nj3pc823Iq9D5tKkvchAOh9IAmO%2BiXn6TGqv0qBurlgsUxM7xVO9lQNz8RyBQpwlCAdBJxpoHrQbGvyCyfrGTGhOHs99LT%2Fq9X8Zl7EBIbc%2FG5eFP11wL0Vxxn3%2F4Sq4AUMvpQQdPxv4WQpIxdYoRI2bKtKfrlxMI71ycAGOqUBW5CoLClGKYkN3WIsmDyI5aqJcRv%2Bfyom1F1GHBvV9O1l45oLWuUThVoEqmdtsVN4yQM3aRq%2B%2Fq0QaEq5qVm5wcnN2Ed%2BYye3xjEfPC%2Fq5pjDBuCulRsqPHYmKAYXuzWzn07hb0wUVZsPhJxVuH2SxakMkCja%2FKDB7HbGmQj8Fj50EGR4LEVvQ4XtnEX89eXhJQCgBWc5hcPLRmH%2FhaGJQe0lnklA&X-Amz-Signature=faa32116ff8e146c0a8251ee6e82231db8eccccf5369b79cda6f555f208c847b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ILQSAH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCRTnYi8DxZ%2B7dLIIeWCWRYL2eA%2BfRPd%2BvG1A%2FFcc3g4AIgJINlL8pluDN0VN2nkv%2FlsGriqa6KOYpjoP53Qh92hRgqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1PmzNBZ1c8hq4SZircAwgZnFDjBSrzcwS6aFkXKYMw7FG%2FBZhAYTG4VdhJ9WyXUzvP%2FI3%2BkOwyuodjCAp2P%2Bp1CyXhShPhCAOUPERFTQkU5L%2BI899qDdMyrit%2BNugpz6EanUnJn96nYkq3IH6%2FSTx40wz%2BLm3ccI35EjdtUszq01DZn9H3WP7tC%2Bg845hBbOaVXN1chgab1x%2B3kd%2FYRFDojF5KjPtoiyT2k5P%2BxhKOw%2F0Tg4zsMSwjPNZy84JurYnDfyrUEHQalJBjwkbPofne8UkSCV3o5ny9eWA58lotYNX0LJNgfpWhWXwoJoC1WUm6%2Fyn8rde8q9yO2T8RgfGvlonnRv7MHzQh3OdPYsXZL%2BFQp4%2FRQAWTS1%2FpemiMtc0CkkTxv4%2BVc%2FvnJjZZuFEjgB0hGrCkFN7gCqs8%2B9aSr20XpACjLiKx9BaVtg4lSH1FLFDK20CGVSrq9pOWL%2FrdPCq8vI2QTBLSqHWQ%2BnbZAv3U8nj3pc823Iq9D5tKkvchAOh9IAmO%2BiXn6TGqv0qBurlgsUxM7xVO9lQNz8RyBQpwlCAdBJxpoHrQbGvyCyfrGTGhOHs99LT%2Fq9X8Zl7EBIbc%2FG5eFP11wL0Vxxn3%2F4Sq4AUMvpQQdPxv4WQpIxdYoRI2bKtKfrlxMI71ycAGOqUBW5CoLClGKYkN3WIsmDyI5aqJcRv%2Bfyom1F1GHBvV9O1l45oLWuUThVoEqmdtsVN4yQM3aRq%2B%2Fq0QaEq5qVm5wcnN2Ed%2BYye3xjEfPC%2Fq5pjDBuCulRsqPHYmKAYXuzWzn07hb0wUVZsPhJxVuH2SxakMkCja%2FKDB7HbGmQj8Fj50EGR4LEVvQ4XtnEX89eXhJQCgBWc5hcPLRmH%2FhaGJQe0lnklA&X-Amz-Signature=08081bf6a7aa53c4a7db082c3e1cbab13de39454a28236066b76505a69fe48b0&X-Amz-SignedHeaders=host&x-id=GetObject)
