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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK6MC6F%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm9%2BxE3%2Bg1BrjGGqMSD1GdL4xDc4JEAWxSydKv7I8PEAiEAoieceDsP3swl9U%2FITihnpg2l02j%2B6MBDya5ddmEgwEAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpYJHALdOPu33aRqSrcA4IFF2J6VboT5OgyqGhHsVpLsdM6zeZIshdIjKLe8dSlAtgDvwqvnKWiq2zeYpMXz3cOhIfI2UjMFoPsV2iSY0kAjp8NUP8DOiTly%2Fm1BHPomENmXqfL4IQoqJKYSOu5z%2B63z9Hz53PWleMXfqfTbealwW7ulvhF6uXiYmSdFNsOBpNWobG756PyjbwgirtM8jzc6Ak1UeU7iUtkIDJhq8yvhmyz58djdu9C3MfRs6jJ14GxZlxt4ut%2F%2FtcwdcfGH5zbakJLvxV5J0kddHBDNBEOJ1ZgCJUutrzUvLz4HKsuRLypOSh9AEpmBSzPFxrti%2BGdWZlQ0rTZm4Kzd%2FLGf03qAdEuvjDNy28BrNh0ELzGnTDCjDs%2F3nsAsnxK1xddRLCqJp4eog9Cq7o7YPLRKWPM%2BONB2Bv%2BpM3fwuyh9LSSxrzBvyW%2FhaTpP7Tv0t2Uej1ndTzkX%2FDYDWq%2Biuw0x0wfXc8siuc1MAtl0b1bxouU0Fe00DPtFl%2Fjb85ycVKVKjvB3hKnXAaofwoF0cxpW%2FJka%2Ff2xzEfmQ3Nx9yjryUIkn8kp9mk%2BY%2BAwJdn6yQdjfl0oGYzZWvfZK2V4FPWQrjBauogGielCcxdgekPZdJRoSHUFLvcXx10IX1hML3pwcMGOqUBvr2NZREdrU6lTFQ0muJiapxj77O90mc%2BYgm21Cbui0sESizCSAe4mJ4xJFsaWmrumI0HTESnJHm2tyqHollol3tn8ThtEbykQel0MeM3%2BiwqUU1yGxitc3ANkK0FD6cTpcPoAwFmghqPK1EEhmfhoEyzl%2BCfnzBJynIC%2FxxHMUxQwSN%2FihNiTGYeYv6LPImLfnTGGrNkaYFRT02HzVsMOCRHxTqE&X-Amz-Signature=b8968c7aafbee42fe5d55515f5b3d4989331bc88ecce4188224be854ab3140af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK6MC6F%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm9%2BxE3%2Bg1BrjGGqMSD1GdL4xDc4JEAWxSydKv7I8PEAiEAoieceDsP3swl9U%2FITihnpg2l02j%2B6MBDya5ddmEgwEAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpYJHALdOPu33aRqSrcA4IFF2J6VboT5OgyqGhHsVpLsdM6zeZIshdIjKLe8dSlAtgDvwqvnKWiq2zeYpMXz3cOhIfI2UjMFoPsV2iSY0kAjp8NUP8DOiTly%2Fm1BHPomENmXqfL4IQoqJKYSOu5z%2B63z9Hz53PWleMXfqfTbealwW7ulvhF6uXiYmSdFNsOBpNWobG756PyjbwgirtM8jzc6Ak1UeU7iUtkIDJhq8yvhmyz58djdu9C3MfRs6jJ14GxZlxt4ut%2F%2FtcwdcfGH5zbakJLvxV5J0kddHBDNBEOJ1ZgCJUutrzUvLz4HKsuRLypOSh9AEpmBSzPFxrti%2BGdWZlQ0rTZm4Kzd%2FLGf03qAdEuvjDNy28BrNh0ELzGnTDCjDs%2F3nsAsnxK1xddRLCqJp4eog9Cq7o7YPLRKWPM%2BONB2Bv%2BpM3fwuyh9LSSxrzBvyW%2FhaTpP7Tv0t2Uej1ndTzkX%2FDYDWq%2Biuw0x0wfXc8siuc1MAtl0b1bxouU0Fe00DPtFl%2Fjb85ycVKVKjvB3hKnXAaofwoF0cxpW%2FJka%2Ff2xzEfmQ3Nx9yjryUIkn8kp9mk%2BY%2BAwJdn6yQdjfl0oGYzZWvfZK2V4FPWQrjBauogGielCcxdgekPZdJRoSHUFLvcXx10IX1hML3pwcMGOqUBvr2NZREdrU6lTFQ0muJiapxj77O90mc%2BYgm21Cbui0sESizCSAe4mJ4xJFsaWmrumI0HTESnJHm2tyqHollol3tn8ThtEbykQel0MeM3%2BiwqUU1yGxitc3ANkK0FD6cTpcPoAwFmghqPK1EEhmfhoEyzl%2BCfnzBJynIC%2FxxHMUxQwSN%2FihNiTGYeYv6LPImLfnTGGrNkaYFRT02HzVsMOCRHxTqE&X-Amz-Signature=5459001def7098f267d4450adfd4bebf214d78522543455bbe8002e300754560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK6MC6F%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm9%2BxE3%2Bg1BrjGGqMSD1GdL4xDc4JEAWxSydKv7I8PEAiEAoieceDsP3swl9U%2FITihnpg2l02j%2B6MBDya5ddmEgwEAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpYJHALdOPu33aRqSrcA4IFF2J6VboT5OgyqGhHsVpLsdM6zeZIshdIjKLe8dSlAtgDvwqvnKWiq2zeYpMXz3cOhIfI2UjMFoPsV2iSY0kAjp8NUP8DOiTly%2Fm1BHPomENmXqfL4IQoqJKYSOu5z%2B63z9Hz53PWleMXfqfTbealwW7ulvhF6uXiYmSdFNsOBpNWobG756PyjbwgirtM8jzc6Ak1UeU7iUtkIDJhq8yvhmyz58djdu9C3MfRs6jJ14GxZlxt4ut%2F%2FtcwdcfGH5zbakJLvxV5J0kddHBDNBEOJ1ZgCJUutrzUvLz4HKsuRLypOSh9AEpmBSzPFxrti%2BGdWZlQ0rTZm4Kzd%2FLGf03qAdEuvjDNy28BrNh0ELzGnTDCjDs%2F3nsAsnxK1xddRLCqJp4eog9Cq7o7YPLRKWPM%2BONB2Bv%2BpM3fwuyh9LSSxrzBvyW%2FhaTpP7Tv0t2Uej1ndTzkX%2FDYDWq%2Biuw0x0wfXc8siuc1MAtl0b1bxouU0Fe00DPtFl%2Fjb85ycVKVKjvB3hKnXAaofwoF0cxpW%2FJka%2Ff2xzEfmQ3Nx9yjryUIkn8kp9mk%2BY%2BAwJdn6yQdjfl0oGYzZWvfZK2V4FPWQrjBauogGielCcxdgekPZdJRoSHUFLvcXx10IX1hML3pwcMGOqUBvr2NZREdrU6lTFQ0muJiapxj77O90mc%2BYgm21Cbui0sESizCSAe4mJ4xJFsaWmrumI0HTESnJHm2tyqHollol3tn8ThtEbykQel0MeM3%2BiwqUU1yGxitc3ANkK0FD6cTpcPoAwFmghqPK1EEhmfhoEyzl%2BCfnzBJynIC%2FxxHMUxQwSN%2FihNiTGYeYv6LPImLfnTGGrNkaYFRT02HzVsMOCRHxTqE&X-Amz-Signature=edb7906f110f05e536c98706706bb73b3d0662db03236ac063558dc8c36b9667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK6MC6F%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm9%2BxE3%2Bg1BrjGGqMSD1GdL4xDc4JEAWxSydKv7I8PEAiEAoieceDsP3swl9U%2FITihnpg2l02j%2B6MBDya5ddmEgwEAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpYJHALdOPu33aRqSrcA4IFF2J6VboT5OgyqGhHsVpLsdM6zeZIshdIjKLe8dSlAtgDvwqvnKWiq2zeYpMXz3cOhIfI2UjMFoPsV2iSY0kAjp8NUP8DOiTly%2Fm1BHPomENmXqfL4IQoqJKYSOu5z%2B63z9Hz53PWleMXfqfTbealwW7ulvhF6uXiYmSdFNsOBpNWobG756PyjbwgirtM8jzc6Ak1UeU7iUtkIDJhq8yvhmyz58djdu9C3MfRs6jJ14GxZlxt4ut%2F%2FtcwdcfGH5zbakJLvxV5J0kddHBDNBEOJ1ZgCJUutrzUvLz4HKsuRLypOSh9AEpmBSzPFxrti%2BGdWZlQ0rTZm4Kzd%2FLGf03qAdEuvjDNy28BrNh0ELzGnTDCjDs%2F3nsAsnxK1xddRLCqJp4eog9Cq7o7YPLRKWPM%2BONB2Bv%2BpM3fwuyh9LSSxrzBvyW%2FhaTpP7Tv0t2Uej1ndTzkX%2FDYDWq%2Biuw0x0wfXc8siuc1MAtl0b1bxouU0Fe00DPtFl%2Fjb85ycVKVKjvB3hKnXAaofwoF0cxpW%2FJka%2Ff2xzEfmQ3Nx9yjryUIkn8kp9mk%2BY%2BAwJdn6yQdjfl0oGYzZWvfZK2V4FPWQrjBauogGielCcxdgekPZdJRoSHUFLvcXx10IX1hML3pwcMGOqUBvr2NZREdrU6lTFQ0muJiapxj77O90mc%2BYgm21Cbui0sESizCSAe4mJ4xJFsaWmrumI0HTESnJHm2tyqHollol3tn8ThtEbykQel0MeM3%2BiwqUU1yGxitc3ANkK0FD6cTpcPoAwFmghqPK1EEhmfhoEyzl%2BCfnzBJynIC%2FxxHMUxQwSN%2FihNiTGYeYv6LPImLfnTGGrNkaYFRT02HzVsMOCRHxTqE&X-Amz-Signature=1cf0f4a8261645fc090daa4580c846d9b46a1846548c6d86832115aa14b1e9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK6MC6F%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm9%2BxE3%2Bg1BrjGGqMSD1GdL4xDc4JEAWxSydKv7I8PEAiEAoieceDsP3swl9U%2FITihnpg2l02j%2B6MBDya5ddmEgwEAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpYJHALdOPu33aRqSrcA4IFF2J6VboT5OgyqGhHsVpLsdM6zeZIshdIjKLe8dSlAtgDvwqvnKWiq2zeYpMXz3cOhIfI2UjMFoPsV2iSY0kAjp8NUP8DOiTly%2Fm1BHPomENmXqfL4IQoqJKYSOu5z%2B63z9Hz53PWleMXfqfTbealwW7ulvhF6uXiYmSdFNsOBpNWobG756PyjbwgirtM8jzc6Ak1UeU7iUtkIDJhq8yvhmyz58djdu9C3MfRs6jJ14GxZlxt4ut%2F%2FtcwdcfGH5zbakJLvxV5J0kddHBDNBEOJ1ZgCJUutrzUvLz4HKsuRLypOSh9AEpmBSzPFxrti%2BGdWZlQ0rTZm4Kzd%2FLGf03qAdEuvjDNy28BrNh0ELzGnTDCjDs%2F3nsAsnxK1xddRLCqJp4eog9Cq7o7YPLRKWPM%2BONB2Bv%2BpM3fwuyh9LSSxrzBvyW%2FhaTpP7Tv0t2Uej1ndTzkX%2FDYDWq%2Biuw0x0wfXc8siuc1MAtl0b1bxouU0Fe00DPtFl%2Fjb85ycVKVKjvB3hKnXAaofwoF0cxpW%2FJka%2Ff2xzEfmQ3Nx9yjryUIkn8kp9mk%2BY%2BAwJdn6yQdjfl0oGYzZWvfZK2V4FPWQrjBauogGielCcxdgekPZdJRoSHUFLvcXx10IX1hML3pwcMGOqUBvr2NZREdrU6lTFQ0muJiapxj77O90mc%2BYgm21Cbui0sESizCSAe4mJ4xJFsaWmrumI0HTESnJHm2tyqHollol3tn8ThtEbykQel0MeM3%2BiwqUU1yGxitc3ANkK0FD6cTpcPoAwFmghqPK1EEhmfhoEyzl%2BCfnzBJynIC%2FxxHMUxQwSN%2FihNiTGYeYv6LPImLfnTGGrNkaYFRT02HzVsMOCRHxTqE&X-Amz-Signature=0e4540823d69619979ef635ea9437350dfa4468da8f7d1404d9ff4727e168972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK6MC6F%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDm9%2BxE3%2Bg1BrjGGqMSD1GdL4xDc4JEAWxSydKv7I8PEAiEAoieceDsP3swl9U%2FITihnpg2l02j%2B6MBDya5ddmEgwEAqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpYJHALdOPu33aRqSrcA4IFF2J6VboT5OgyqGhHsVpLsdM6zeZIshdIjKLe8dSlAtgDvwqvnKWiq2zeYpMXz3cOhIfI2UjMFoPsV2iSY0kAjp8NUP8DOiTly%2Fm1BHPomENmXqfL4IQoqJKYSOu5z%2B63z9Hz53PWleMXfqfTbealwW7ulvhF6uXiYmSdFNsOBpNWobG756PyjbwgirtM8jzc6Ak1UeU7iUtkIDJhq8yvhmyz58djdu9C3MfRs6jJ14GxZlxt4ut%2F%2FtcwdcfGH5zbakJLvxV5J0kddHBDNBEOJ1ZgCJUutrzUvLz4HKsuRLypOSh9AEpmBSzPFxrti%2BGdWZlQ0rTZm4Kzd%2FLGf03qAdEuvjDNy28BrNh0ELzGnTDCjDs%2F3nsAsnxK1xddRLCqJp4eog9Cq7o7YPLRKWPM%2BONB2Bv%2BpM3fwuyh9LSSxrzBvyW%2FhaTpP7Tv0t2Uej1ndTzkX%2FDYDWq%2Biuw0x0wfXc8siuc1MAtl0b1bxouU0Fe00DPtFl%2Fjb85ycVKVKjvB3hKnXAaofwoF0cxpW%2FJka%2Ff2xzEfmQ3Nx9yjryUIkn8kp9mk%2BY%2BAwJdn6yQdjfl0oGYzZWvfZK2V4FPWQrjBauogGielCcxdgekPZdJRoSHUFLvcXx10IX1hML3pwcMGOqUBvr2NZREdrU6lTFQ0muJiapxj77O90mc%2BYgm21Cbui0sESizCSAe4mJ4xJFsaWmrumI0HTESnJHm2tyqHollol3tn8ThtEbykQel0MeM3%2BiwqUU1yGxitc3ANkK0FD6cTpcPoAwFmghqPK1EEhmfhoEyzl%2BCfnzBJynIC%2FxxHMUxQwSN%2FihNiTGYeYv6LPImLfnTGGrNkaYFRT02HzVsMOCRHxTqE&X-Amz-Signature=081e8f698642a952f1ecf23080443bae2d1bd428a1a3566b4acd3a921d265eb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
