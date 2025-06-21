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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPCLEPJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhPeP67X%2F8MctEZUhWw4utsB4dWGBnKatKCeKv%2FGmSwIgDKVeeG3ICn7S%2FZ9YSQw4Oh1zNkU1%2BVHsxTWIhbE4338qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjwRUZxwjV6IVuXXSrcA4SKofbBE%2FEIUDR%2BSl6MtMSIBDhC7tP1on%2BAtKO8XL8062UOx3KjFbr0iVGbtRfTKXinKOt1LFnVT1lr7Y5snebbSIyigIXXTDMP2QpLtktgGuWD79k5K7rtc8Qq1uwyhTWly5rK1nqmXdPFV2x2Zqz3mu9pe%2BDLLI1fUBA1vfFGJM2z8t0Tce1dHfUhwDuNK4CorddcOBUz%2BzNwcmOtH13iw3VQNhZwlvigh8txMfxEPGlSfLRBDUIsugstn6Zvx46uqmXOPOHFqvOxJfj%2FPHSHmgUzdc8L%2BxTHOwSFm1QRiitRHImZTnUGEc6MsWuw4nEM%2F7k4la%2Bl5r0UcNcTgcwcrSai0fYddD6ZGAm6FwjspSYiRowG2b%2BJCRZOImAT7eApwQ%2FhWCwTZMN1NOYGoiUyUDnJHIii%2F%2BO7n%2Bd2UVoEbJHfuCPlxzMwm9JF5eF40u6%2FIV18Xz%2F3v5%2BVXAOBao2eqRCniCbmx0ZUGcX2uiJ1Cb4V%2B%2BgNee4kzlkcIBMRinV0El8EGM317tiaDxQSTacznYTjJ%2BnMAF4T8bTVXCfv3BhgtwOyb%2BxVmDNbG3Db4v28XM3Oi5rPCX44qYFddsvU4XsCy0eehSmxF6NaL5SDS2IHK0PPj%2FsRik6cMNmv2MIGOqUB80F0%2BVbYWJ%2FPz3VUxKPo%2FF0u6vQTjekux4bTuD%2BjKkhDOjz9yvY4Arc0kiHikiGAPq%2FMksVZh0DxFmBBag6j3DwY72TYTbbmZ3znUwJhWwjTzffw8%2BN9pJmP1q9W%2F0hiJub0eG1%2Fv1Mf09UhQkEEhopLStBfiQ7l%2FyiIQaRuWnjv7kUh6b6VadriLkL6gw5ByoWcvsSrfhMQagE9qE52C%2BeCnO7I&X-Amz-Signature=0395ed59d8cf75298dcc47e06653947ba4569326756f40c7bfe77ac8ac9ebbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPCLEPJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhPeP67X%2F8MctEZUhWw4utsB4dWGBnKatKCeKv%2FGmSwIgDKVeeG3ICn7S%2FZ9YSQw4Oh1zNkU1%2BVHsxTWIhbE4338qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjwRUZxwjV6IVuXXSrcA4SKofbBE%2FEIUDR%2BSl6MtMSIBDhC7tP1on%2BAtKO8XL8062UOx3KjFbr0iVGbtRfTKXinKOt1LFnVT1lr7Y5snebbSIyigIXXTDMP2QpLtktgGuWD79k5K7rtc8Qq1uwyhTWly5rK1nqmXdPFV2x2Zqz3mu9pe%2BDLLI1fUBA1vfFGJM2z8t0Tce1dHfUhwDuNK4CorddcOBUz%2BzNwcmOtH13iw3VQNhZwlvigh8txMfxEPGlSfLRBDUIsugstn6Zvx46uqmXOPOHFqvOxJfj%2FPHSHmgUzdc8L%2BxTHOwSFm1QRiitRHImZTnUGEc6MsWuw4nEM%2F7k4la%2Bl5r0UcNcTgcwcrSai0fYddD6ZGAm6FwjspSYiRowG2b%2BJCRZOImAT7eApwQ%2FhWCwTZMN1NOYGoiUyUDnJHIii%2F%2BO7n%2Bd2UVoEbJHfuCPlxzMwm9JF5eF40u6%2FIV18Xz%2F3v5%2BVXAOBao2eqRCniCbmx0ZUGcX2uiJ1Cb4V%2B%2BgNee4kzlkcIBMRinV0El8EGM317tiaDxQSTacznYTjJ%2BnMAF4T8bTVXCfv3BhgtwOyb%2BxVmDNbG3Db4v28XM3Oi5rPCX44qYFddsvU4XsCy0eehSmxF6NaL5SDS2IHK0PPj%2FsRik6cMNmv2MIGOqUB80F0%2BVbYWJ%2FPz3VUxKPo%2FF0u6vQTjekux4bTuD%2BjKkhDOjz9yvY4Arc0kiHikiGAPq%2FMksVZh0DxFmBBag6j3DwY72TYTbbmZ3znUwJhWwjTzffw8%2BN9pJmP1q9W%2F0hiJub0eG1%2Fv1Mf09UhQkEEhopLStBfiQ7l%2FyiIQaRuWnjv7kUh6b6VadriLkL6gw5ByoWcvsSrfhMQagE9qE52C%2BeCnO7I&X-Amz-Signature=c29aef06f1f556fd3d64432c8b97ed80b96685064ce3ec10a493af2587de791f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPCLEPJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhPeP67X%2F8MctEZUhWw4utsB4dWGBnKatKCeKv%2FGmSwIgDKVeeG3ICn7S%2FZ9YSQw4Oh1zNkU1%2BVHsxTWIhbE4338qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjwRUZxwjV6IVuXXSrcA4SKofbBE%2FEIUDR%2BSl6MtMSIBDhC7tP1on%2BAtKO8XL8062UOx3KjFbr0iVGbtRfTKXinKOt1LFnVT1lr7Y5snebbSIyigIXXTDMP2QpLtktgGuWD79k5K7rtc8Qq1uwyhTWly5rK1nqmXdPFV2x2Zqz3mu9pe%2BDLLI1fUBA1vfFGJM2z8t0Tce1dHfUhwDuNK4CorddcOBUz%2BzNwcmOtH13iw3VQNhZwlvigh8txMfxEPGlSfLRBDUIsugstn6Zvx46uqmXOPOHFqvOxJfj%2FPHSHmgUzdc8L%2BxTHOwSFm1QRiitRHImZTnUGEc6MsWuw4nEM%2F7k4la%2Bl5r0UcNcTgcwcrSai0fYddD6ZGAm6FwjspSYiRowG2b%2BJCRZOImAT7eApwQ%2FhWCwTZMN1NOYGoiUyUDnJHIii%2F%2BO7n%2Bd2UVoEbJHfuCPlxzMwm9JF5eF40u6%2FIV18Xz%2F3v5%2BVXAOBao2eqRCniCbmx0ZUGcX2uiJ1Cb4V%2B%2BgNee4kzlkcIBMRinV0El8EGM317tiaDxQSTacznYTjJ%2BnMAF4T8bTVXCfv3BhgtwOyb%2BxVmDNbG3Db4v28XM3Oi5rPCX44qYFddsvU4XsCy0eehSmxF6NaL5SDS2IHK0PPj%2FsRik6cMNmv2MIGOqUB80F0%2BVbYWJ%2FPz3VUxKPo%2FF0u6vQTjekux4bTuD%2BjKkhDOjz9yvY4Arc0kiHikiGAPq%2FMksVZh0DxFmBBag6j3DwY72TYTbbmZ3znUwJhWwjTzffw8%2BN9pJmP1q9W%2F0hiJub0eG1%2Fv1Mf09UhQkEEhopLStBfiQ7l%2FyiIQaRuWnjv7kUh6b6VadriLkL6gw5ByoWcvsSrfhMQagE9qE52C%2BeCnO7I&X-Amz-Signature=5038887f3977896a00445aa8b5d32521183c24e6199ae8f50e1f3c88512a0eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPCLEPJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhPeP67X%2F8MctEZUhWw4utsB4dWGBnKatKCeKv%2FGmSwIgDKVeeG3ICn7S%2FZ9YSQw4Oh1zNkU1%2BVHsxTWIhbE4338qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjwRUZxwjV6IVuXXSrcA4SKofbBE%2FEIUDR%2BSl6MtMSIBDhC7tP1on%2BAtKO8XL8062UOx3KjFbr0iVGbtRfTKXinKOt1LFnVT1lr7Y5snebbSIyigIXXTDMP2QpLtktgGuWD79k5K7rtc8Qq1uwyhTWly5rK1nqmXdPFV2x2Zqz3mu9pe%2BDLLI1fUBA1vfFGJM2z8t0Tce1dHfUhwDuNK4CorddcOBUz%2BzNwcmOtH13iw3VQNhZwlvigh8txMfxEPGlSfLRBDUIsugstn6Zvx46uqmXOPOHFqvOxJfj%2FPHSHmgUzdc8L%2BxTHOwSFm1QRiitRHImZTnUGEc6MsWuw4nEM%2F7k4la%2Bl5r0UcNcTgcwcrSai0fYddD6ZGAm6FwjspSYiRowG2b%2BJCRZOImAT7eApwQ%2FhWCwTZMN1NOYGoiUyUDnJHIii%2F%2BO7n%2Bd2UVoEbJHfuCPlxzMwm9JF5eF40u6%2FIV18Xz%2F3v5%2BVXAOBao2eqRCniCbmx0ZUGcX2uiJ1Cb4V%2B%2BgNee4kzlkcIBMRinV0El8EGM317tiaDxQSTacznYTjJ%2BnMAF4T8bTVXCfv3BhgtwOyb%2BxVmDNbG3Db4v28XM3Oi5rPCX44qYFddsvU4XsCy0eehSmxF6NaL5SDS2IHK0PPj%2FsRik6cMNmv2MIGOqUB80F0%2BVbYWJ%2FPz3VUxKPo%2FF0u6vQTjekux4bTuD%2BjKkhDOjz9yvY4Arc0kiHikiGAPq%2FMksVZh0DxFmBBag6j3DwY72TYTbbmZ3znUwJhWwjTzffw8%2BN9pJmP1q9W%2F0hiJub0eG1%2Fv1Mf09UhQkEEhopLStBfiQ7l%2FyiIQaRuWnjv7kUh6b6VadriLkL6gw5ByoWcvsSrfhMQagE9qE52C%2BeCnO7I&X-Amz-Signature=e06cb9b6c6fa4a4fc501594754d6c75a296f20362f8ad95cec22b4404f9ddb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPCLEPJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhPeP67X%2F8MctEZUhWw4utsB4dWGBnKatKCeKv%2FGmSwIgDKVeeG3ICn7S%2FZ9YSQw4Oh1zNkU1%2BVHsxTWIhbE4338qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjwRUZxwjV6IVuXXSrcA4SKofbBE%2FEIUDR%2BSl6MtMSIBDhC7tP1on%2BAtKO8XL8062UOx3KjFbr0iVGbtRfTKXinKOt1LFnVT1lr7Y5snebbSIyigIXXTDMP2QpLtktgGuWD79k5K7rtc8Qq1uwyhTWly5rK1nqmXdPFV2x2Zqz3mu9pe%2BDLLI1fUBA1vfFGJM2z8t0Tce1dHfUhwDuNK4CorddcOBUz%2BzNwcmOtH13iw3VQNhZwlvigh8txMfxEPGlSfLRBDUIsugstn6Zvx46uqmXOPOHFqvOxJfj%2FPHSHmgUzdc8L%2BxTHOwSFm1QRiitRHImZTnUGEc6MsWuw4nEM%2F7k4la%2Bl5r0UcNcTgcwcrSai0fYddD6ZGAm6FwjspSYiRowG2b%2BJCRZOImAT7eApwQ%2FhWCwTZMN1NOYGoiUyUDnJHIii%2F%2BO7n%2Bd2UVoEbJHfuCPlxzMwm9JF5eF40u6%2FIV18Xz%2F3v5%2BVXAOBao2eqRCniCbmx0ZUGcX2uiJ1Cb4V%2B%2BgNee4kzlkcIBMRinV0El8EGM317tiaDxQSTacznYTjJ%2BnMAF4T8bTVXCfv3BhgtwOyb%2BxVmDNbG3Db4v28XM3Oi5rPCX44qYFddsvU4XsCy0eehSmxF6NaL5SDS2IHK0PPj%2FsRik6cMNmv2MIGOqUB80F0%2BVbYWJ%2FPz3VUxKPo%2FF0u6vQTjekux4bTuD%2BjKkhDOjz9yvY4Arc0kiHikiGAPq%2FMksVZh0DxFmBBag6j3DwY72TYTbbmZ3znUwJhWwjTzffw8%2BN9pJmP1q9W%2F0hiJub0eG1%2Fv1Mf09UhQkEEhopLStBfiQ7l%2FyiIQaRuWnjv7kUh6b6VadriLkL6gw5ByoWcvsSrfhMQagE9qE52C%2BeCnO7I&X-Amz-Signature=6f0b9dc8662919894b52734d5f295473e325c834e9e783ddcceb1b18b71348b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SPCLEPJ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwhPeP67X%2F8MctEZUhWw4utsB4dWGBnKatKCeKv%2FGmSwIgDKVeeG3ICn7S%2FZ9YSQw4Oh1zNkU1%2BVHsxTWIhbE4338qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjwRUZxwjV6IVuXXSrcA4SKofbBE%2FEIUDR%2BSl6MtMSIBDhC7tP1on%2BAtKO8XL8062UOx3KjFbr0iVGbtRfTKXinKOt1LFnVT1lr7Y5snebbSIyigIXXTDMP2QpLtktgGuWD79k5K7rtc8Qq1uwyhTWly5rK1nqmXdPFV2x2Zqz3mu9pe%2BDLLI1fUBA1vfFGJM2z8t0Tce1dHfUhwDuNK4CorddcOBUz%2BzNwcmOtH13iw3VQNhZwlvigh8txMfxEPGlSfLRBDUIsugstn6Zvx46uqmXOPOHFqvOxJfj%2FPHSHmgUzdc8L%2BxTHOwSFm1QRiitRHImZTnUGEc6MsWuw4nEM%2F7k4la%2Bl5r0UcNcTgcwcrSai0fYddD6ZGAm6FwjspSYiRowG2b%2BJCRZOImAT7eApwQ%2FhWCwTZMN1NOYGoiUyUDnJHIii%2F%2BO7n%2Bd2UVoEbJHfuCPlxzMwm9JF5eF40u6%2FIV18Xz%2F3v5%2BVXAOBao2eqRCniCbmx0ZUGcX2uiJ1Cb4V%2B%2BgNee4kzlkcIBMRinV0El8EGM317tiaDxQSTacznYTjJ%2BnMAF4T8bTVXCfv3BhgtwOyb%2BxVmDNbG3Db4v28XM3Oi5rPCX44qYFddsvU4XsCy0eehSmxF6NaL5SDS2IHK0PPj%2FsRik6cMNmv2MIGOqUB80F0%2BVbYWJ%2FPz3VUxKPo%2FF0u6vQTjekux4bTuD%2BjKkhDOjz9yvY4Arc0kiHikiGAPq%2FMksVZh0DxFmBBag6j3DwY72TYTbbmZ3znUwJhWwjTzffw8%2BN9pJmP1q9W%2F0hiJub0eG1%2Fv1Mf09UhQkEEhopLStBfiQ7l%2FyiIQaRuWnjv7kUh6b6VadriLkL6gw5ByoWcvsSrfhMQagE9qE52C%2BeCnO7I&X-Amz-Signature=ab07a25c2ab600340617b720fc76ad8eee8b62758b0c12ec0bc350c3f7a1d627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
