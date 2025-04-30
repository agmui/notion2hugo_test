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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35NEJGG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCsvw3IGwzXZkeddtCBInxLKJ01bGkFORYBjVd5Meuc%2FAIgQVrA8%2FMdQrCkEHKYxOgVhbhExdPM0AC5b%2BZwYaFHhwYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIZC23G8G3MCMvpYSrcA9mYfxoR0TfH1yI8vQgcR0rLSpCv3qj%2FHp6kKjJrKegwQ7B8Y53ltoF2VCAIOBNny1j4TYgBClJXAgOSCQYlWL5jT9e6Ur3sZgp2e0t2yQ%2Bg0uPYydzlNV8r%2FHk5pE5mgEIFg%2Fb83bZh0N3fY5UyVoLJWG56ToYT310OayuQEEeUpDCyTilXzaSSSG8RN%2FmRs0Nin34CsiXETylYX0VPRt9Nv6R7L0%2FFM9nbYSdtDMtET0cI0bNiModCcKX9nEBT9QcKWHcb%2BvJaZxlw3TyNZIeay%2BkqiL6X0BH%2B3XuDdLezOQd0f0zPqk%2FWrwURpjgZUZ4%2B6T7qqQ4ro8Nj1DR4N8E4tA7LOHHZaWx3gNJs%2FwY84o%2B7S%2FiYk%2Fzwc8b11ox6SaXVbW3ioUPhuqv1YUYRl5MtEkR6ufZ9NMokqrvCqKnap1wDISiem0RAa6ijiW7WB00Wg6emNHgFRCJSPY4fbVdsXFBJzlq6Z7T42LYd4uGxs6SG1R3UYqKyg7w8NcqwU7toqBbV%2Bg7Vc%2BLPJCTRudxNlfKmydEzbD6kLm4ipSQgjr9TwHGJmpOf0kSdyf3lNaMitFgZH3tfleYen0fSjGFZbGLExMkJXpXi%2BuRAgEaMvEA5n%2BoVSymrToKYMKGXx8AGOqUBPkBfSAW6kVvdFwg%2FBLTChUCSJ0V3TLy6Wiy345%2FTK6HZlBAXEmIzZ1H%2FESY9BwFH2ylSyC8bc2UBLDILVM%2BI2D5ngR%2FkOgtQlfKaZF3rp7CTMHAZpLnWLcvKfRmr0v1FSEktmCgiedg5Z%2B4a0DF9GtHiMapjnO4EnX3kMfpUADRnFbYMd6r8iIZTeHnNBEeHxgVzBhYd%2B%2Fw%2BUff9FTEYoSLGFZW9&X-Amz-Signature=a4ac0977212cffb811058ef7370cea2d0c01dd197f45ca7396a0c34799ff801f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35NEJGG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCsvw3IGwzXZkeddtCBInxLKJ01bGkFORYBjVd5Meuc%2FAIgQVrA8%2FMdQrCkEHKYxOgVhbhExdPM0AC5b%2BZwYaFHhwYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIZC23G8G3MCMvpYSrcA9mYfxoR0TfH1yI8vQgcR0rLSpCv3qj%2FHp6kKjJrKegwQ7B8Y53ltoF2VCAIOBNny1j4TYgBClJXAgOSCQYlWL5jT9e6Ur3sZgp2e0t2yQ%2Bg0uPYydzlNV8r%2FHk5pE5mgEIFg%2Fb83bZh0N3fY5UyVoLJWG56ToYT310OayuQEEeUpDCyTilXzaSSSG8RN%2FmRs0Nin34CsiXETylYX0VPRt9Nv6R7L0%2FFM9nbYSdtDMtET0cI0bNiModCcKX9nEBT9QcKWHcb%2BvJaZxlw3TyNZIeay%2BkqiL6X0BH%2B3XuDdLezOQd0f0zPqk%2FWrwURpjgZUZ4%2B6T7qqQ4ro8Nj1DR4N8E4tA7LOHHZaWx3gNJs%2FwY84o%2B7S%2FiYk%2Fzwc8b11ox6SaXVbW3ioUPhuqv1YUYRl5MtEkR6ufZ9NMokqrvCqKnap1wDISiem0RAa6ijiW7WB00Wg6emNHgFRCJSPY4fbVdsXFBJzlq6Z7T42LYd4uGxs6SG1R3UYqKyg7w8NcqwU7toqBbV%2Bg7Vc%2BLPJCTRudxNlfKmydEzbD6kLm4ipSQgjr9TwHGJmpOf0kSdyf3lNaMitFgZH3tfleYen0fSjGFZbGLExMkJXpXi%2BuRAgEaMvEA5n%2BoVSymrToKYMKGXx8AGOqUBPkBfSAW6kVvdFwg%2FBLTChUCSJ0V3TLy6Wiy345%2FTK6HZlBAXEmIzZ1H%2FESY9BwFH2ylSyC8bc2UBLDILVM%2BI2D5ngR%2FkOgtQlfKaZF3rp7CTMHAZpLnWLcvKfRmr0v1FSEktmCgiedg5Z%2B4a0DF9GtHiMapjnO4EnX3kMfpUADRnFbYMd6r8iIZTeHnNBEeHxgVzBhYd%2B%2Fw%2BUff9FTEYoSLGFZW9&X-Amz-Signature=0f576cb314d49710ea86be3dc73c813d6730a9b5bb2f6c4e6717a687734deae2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35NEJGG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCsvw3IGwzXZkeddtCBInxLKJ01bGkFORYBjVd5Meuc%2FAIgQVrA8%2FMdQrCkEHKYxOgVhbhExdPM0AC5b%2BZwYaFHhwYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIZC23G8G3MCMvpYSrcA9mYfxoR0TfH1yI8vQgcR0rLSpCv3qj%2FHp6kKjJrKegwQ7B8Y53ltoF2VCAIOBNny1j4TYgBClJXAgOSCQYlWL5jT9e6Ur3sZgp2e0t2yQ%2Bg0uPYydzlNV8r%2FHk5pE5mgEIFg%2Fb83bZh0N3fY5UyVoLJWG56ToYT310OayuQEEeUpDCyTilXzaSSSG8RN%2FmRs0Nin34CsiXETylYX0VPRt9Nv6R7L0%2FFM9nbYSdtDMtET0cI0bNiModCcKX9nEBT9QcKWHcb%2BvJaZxlw3TyNZIeay%2BkqiL6X0BH%2B3XuDdLezOQd0f0zPqk%2FWrwURpjgZUZ4%2B6T7qqQ4ro8Nj1DR4N8E4tA7LOHHZaWx3gNJs%2FwY84o%2B7S%2FiYk%2Fzwc8b11ox6SaXVbW3ioUPhuqv1YUYRl5MtEkR6ufZ9NMokqrvCqKnap1wDISiem0RAa6ijiW7WB00Wg6emNHgFRCJSPY4fbVdsXFBJzlq6Z7T42LYd4uGxs6SG1R3UYqKyg7w8NcqwU7toqBbV%2Bg7Vc%2BLPJCTRudxNlfKmydEzbD6kLm4ipSQgjr9TwHGJmpOf0kSdyf3lNaMitFgZH3tfleYen0fSjGFZbGLExMkJXpXi%2BuRAgEaMvEA5n%2BoVSymrToKYMKGXx8AGOqUBPkBfSAW6kVvdFwg%2FBLTChUCSJ0V3TLy6Wiy345%2FTK6HZlBAXEmIzZ1H%2FESY9BwFH2ylSyC8bc2UBLDILVM%2BI2D5ngR%2FkOgtQlfKaZF3rp7CTMHAZpLnWLcvKfRmr0v1FSEktmCgiedg5Z%2B4a0DF9GtHiMapjnO4EnX3kMfpUADRnFbYMd6r8iIZTeHnNBEeHxgVzBhYd%2B%2Fw%2BUff9FTEYoSLGFZW9&X-Amz-Signature=05bbce666e1c86a7e99e5c121d491b120c9744818cf51ce8a23620a003465b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35NEJGG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCsvw3IGwzXZkeddtCBInxLKJ01bGkFORYBjVd5Meuc%2FAIgQVrA8%2FMdQrCkEHKYxOgVhbhExdPM0AC5b%2BZwYaFHhwYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIZC23G8G3MCMvpYSrcA9mYfxoR0TfH1yI8vQgcR0rLSpCv3qj%2FHp6kKjJrKegwQ7B8Y53ltoF2VCAIOBNny1j4TYgBClJXAgOSCQYlWL5jT9e6Ur3sZgp2e0t2yQ%2Bg0uPYydzlNV8r%2FHk5pE5mgEIFg%2Fb83bZh0N3fY5UyVoLJWG56ToYT310OayuQEEeUpDCyTilXzaSSSG8RN%2FmRs0Nin34CsiXETylYX0VPRt9Nv6R7L0%2FFM9nbYSdtDMtET0cI0bNiModCcKX9nEBT9QcKWHcb%2BvJaZxlw3TyNZIeay%2BkqiL6X0BH%2B3XuDdLezOQd0f0zPqk%2FWrwURpjgZUZ4%2B6T7qqQ4ro8Nj1DR4N8E4tA7LOHHZaWx3gNJs%2FwY84o%2B7S%2FiYk%2Fzwc8b11ox6SaXVbW3ioUPhuqv1YUYRl5MtEkR6ufZ9NMokqrvCqKnap1wDISiem0RAa6ijiW7WB00Wg6emNHgFRCJSPY4fbVdsXFBJzlq6Z7T42LYd4uGxs6SG1R3UYqKyg7w8NcqwU7toqBbV%2Bg7Vc%2BLPJCTRudxNlfKmydEzbD6kLm4ipSQgjr9TwHGJmpOf0kSdyf3lNaMitFgZH3tfleYen0fSjGFZbGLExMkJXpXi%2BuRAgEaMvEA5n%2BoVSymrToKYMKGXx8AGOqUBPkBfSAW6kVvdFwg%2FBLTChUCSJ0V3TLy6Wiy345%2FTK6HZlBAXEmIzZ1H%2FESY9BwFH2ylSyC8bc2UBLDILVM%2BI2D5ngR%2FkOgtQlfKaZF3rp7CTMHAZpLnWLcvKfRmr0v1FSEktmCgiedg5Z%2B4a0DF9GtHiMapjnO4EnX3kMfpUADRnFbYMd6r8iIZTeHnNBEeHxgVzBhYd%2B%2Fw%2BUff9FTEYoSLGFZW9&X-Amz-Signature=7b443c2f09ee221bcd37f5530f660116be6c99a04a73dc515dc9edd00c40822c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35NEJGG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCsvw3IGwzXZkeddtCBInxLKJ01bGkFORYBjVd5Meuc%2FAIgQVrA8%2FMdQrCkEHKYxOgVhbhExdPM0AC5b%2BZwYaFHhwYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIZC23G8G3MCMvpYSrcA9mYfxoR0TfH1yI8vQgcR0rLSpCv3qj%2FHp6kKjJrKegwQ7B8Y53ltoF2VCAIOBNny1j4TYgBClJXAgOSCQYlWL5jT9e6Ur3sZgp2e0t2yQ%2Bg0uPYydzlNV8r%2FHk5pE5mgEIFg%2Fb83bZh0N3fY5UyVoLJWG56ToYT310OayuQEEeUpDCyTilXzaSSSG8RN%2FmRs0Nin34CsiXETylYX0VPRt9Nv6R7L0%2FFM9nbYSdtDMtET0cI0bNiModCcKX9nEBT9QcKWHcb%2BvJaZxlw3TyNZIeay%2BkqiL6X0BH%2B3XuDdLezOQd0f0zPqk%2FWrwURpjgZUZ4%2B6T7qqQ4ro8Nj1DR4N8E4tA7LOHHZaWx3gNJs%2FwY84o%2B7S%2FiYk%2Fzwc8b11ox6SaXVbW3ioUPhuqv1YUYRl5MtEkR6ufZ9NMokqrvCqKnap1wDISiem0RAa6ijiW7WB00Wg6emNHgFRCJSPY4fbVdsXFBJzlq6Z7T42LYd4uGxs6SG1R3UYqKyg7w8NcqwU7toqBbV%2Bg7Vc%2BLPJCTRudxNlfKmydEzbD6kLm4ipSQgjr9TwHGJmpOf0kSdyf3lNaMitFgZH3tfleYen0fSjGFZbGLExMkJXpXi%2BuRAgEaMvEA5n%2BoVSymrToKYMKGXx8AGOqUBPkBfSAW6kVvdFwg%2FBLTChUCSJ0V3TLy6Wiy345%2FTK6HZlBAXEmIzZ1H%2FESY9BwFH2ylSyC8bc2UBLDILVM%2BI2D5ngR%2FkOgtQlfKaZF3rp7CTMHAZpLnWLcvKfRmr0v1FSEktmCgiedg5Z%2B4a0DF9GtHiMapjnO4EnX3kMfpUADRnFbYMd6r8iIZTeHnNBEeHxgVzBhYd%2B%2Fw%2BUff9FTEYoSLGFZW9&X-Amz-Signature=e6d01bd039914b7386a55e2067706fa380e5e8463e9772fe3eab84b22cbe3da8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q35NEJGG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCsvw3IGwzXZkeddtCBInxLKJ01bGkFORYBjVd5Meuc%2FAIgQVrA8%2FMdQrCkEHKYxOgVhbhExdPM0AC5b%2BZwYaFHhwYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIZC23G8G3MCMvpYSrcA9mYfxoR0TfH1yI8vQgcR0rLSpCv3qj%2FHp6kKjJrKegwQ7B8Y53ltoF2VCAIOBNny1j4TYgBClJXAgOSCQYlWL5jT9e6Ur3sZgp2e0t2yQ%2Bg0uPYydzlNV8r%2FHk5pE5mgEIFg%2Fb83bZh0N3fY5UyVoLJWG56ToYT310OayuQEEeUpDCyTilXzaSSSG8RN%2FmRs0Nin34CsiXETylYX0VPRt9Nv6R7L0%2FFM9nbYSdtDMtET0cI0bNiModCcKX9nEBT9QcKWHcb%2BvJaZxlw3TyNZIeay%2BkqiL6X0BH%2B3XuDdLezOQd0f0zPqk%2FWrwURpjgZUZ4%2B6T7qqQ4ro8Nj1DR4N8E4tA7LOHHZaWx3gNJs%2FwY84o%2B7S%2FiYk%2Fzwc8b11ox6SaXVbW3ioUPhuqv1YUYRl5MtEkR6ufZ9NMokqrvCqKnap1wDISiem0RAa6ijiW7WB00Wg6emNHgFRCJSPY4fbVdsXFBJzlq6Z7T42LYd4uGxs6SG1R3UYqKyg7w8NcqwU7toqBbV%2Bg7Vc%2BLPJCTRudxNlfKmydEzbD6kLm4ipSQgjr9TwHGJmpOf0kSdyf3lNaMitFgZH3tfleYen0fSjGFZbGLExMkJXpXi%2BuRAgEaMvEA5n%2BoVSymrToKYMKGXx8AGOqUBPkBfSAW6kVvdFwg%2FBLTChUCSJ0V3TLy6Wiy345%2FTK6HZlBAXEmIzZ1H%2FESY9BwFH2ylSyC8bc2UBLDILVM%2BI2D5ngR%2FkOgtQlfKaZF3rp7CTMHAZpLnWLcvKfRmr0v1FSEktmCgiedg5Z%2B4a0DF9GtHiMapjnO4EnX3kMfpUADRnFbYMd6r8iIZTeHnNBEeHxgVzBhYd%2B%2Fw%2BUff9FTEYoSLGFZW9&X-Amz-Signature=07da21d8002abdfa28f5a136038d9fb6c47f9205d8cc12102e3e493a24910c43&X-Amz-SignedHeaders=host&x-id=GetObject)
