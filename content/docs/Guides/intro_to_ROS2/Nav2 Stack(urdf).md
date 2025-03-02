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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225TN7IL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEfKR4CgcCEbZBLojJKzI%2BlCwBXw%2Bz5DamNqum29mTR8AiEAjkyuPJOKJLUdP0RUQnFx4TIGsBn6eSIUiqfo7DWbdxYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi80LhprPpxLMy6yrcA9tpTo8tSGDfYbwEUscXm1E0qTaG1HSeA7%2Fpd7oPFK%2FrgxJWtzYUmSUoR1j9je8wChvI6aUP8w%2Bt%2B%2B63D4t41wIOYjNOA3S3O%2Fa0m4bhLpwUAuqHl%2Bm%2FUBJjSRO1l%2FOnLxj9Pmt0tAXlbp4wwjrVUF6s52gQFuLIRwG1cXW%2FcOnuU3dYFcTWX5%2FBN7mJS62tRnKo1x5iUYpIRssC9UzYCESrHuiCfUN%2FjCVexLHov4T7ifcBzkdQASBP5laSxbVsM0BfJnFDcCtTixOw7ivUce9LPjo39D7TgILSCcqf%2FwOZlG626Vbwy0EvqBwZVuehsiRYKSNWjZ0Fa%2Fv76u9%2BzGjV4lBzjMxnrlwWQH2vkpR7hzb%2BEfYL%2BGB%2B%2BcKrapIxDCF%2B3BpSoxEN6M%2BeW2u%2Bl5RoB%2ByvQiZ%2BIP%2FC8DSgSW%2FGALSg1jyqWxi6ZR1l9ZEfJEJSMCRa7YFFLxH8B9dAAJfQnhhDCtZTJuGEyEYRGWnG0d%2BoQFBzRvDB133MM2p0fNxYoVCsmIqkhoBimkPZUmJB0LiTfctdb9%2B5Kt5UtAyT5Aivi6%2B5qQar6jKew%2BQTIPslZxZP6fjjVJr0ZINIKMhRU2q4p2r%2FyNYoFPahJauY5UAploF6n%2BjnMPvKMN72jr4GOqUBFsR7473n1Yi7U5taqk5MCJI%2Bm%2BMktjL2IiKD3aYTsyfBBXVkTSSJ4zKZaz1rSlVJ9B3qlO1N8Cbhjx652LzUB%2B46EumAHJ66otwDu4dV24ymq5bXVc5eblyA%2FXTN5PmziOhlq3TQxV4l9PWUlN5lmvM5j4JkwpWeQ5Fao7egrmeDry0XXN8OwiVHs95lzBX3Y40UC2a%2Bhk2CS8pWOSPdR0L2yuSc&X-Amz-Signature=7882199c472467c0f944a64c25f400562fbfab6d68ba9898e659683b8b13a2b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225TN7IL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEfKR4CgcCEbZBLojJKzI%2BlCwBXw%2Bz5DamNqum29mTR8AiEAjkyuPJOKJLUdP0RUQnFx4TIGsBn6eSIUiqfo7DWbdxYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi80LhprPpxLMy6yrcA9tpTo8tSGDfYbwEUscXm1E0qTaG1HSeA7%2Fpd7oPFK%2FrgxJWtzYUmSUoR1j9je8wChvI6aUP8w%2Bt%2B%2B63D4t41wIOYjNOA3S3O%2Fa0m4bhLpwUAuqHl%2Bm%2FUBJjSRO1l%2FOnLxj9Pmt0tAXlbp4wwjrVUF6s52gQFuLIRwG1cXW%2FcOnuU3dYFcTWX5%2FBN7mJS62tRnKo1x5iUYpIRssC9UzYCESrHuiCfUN%2FjCVexLHov4T7ifcBzkdQASBP5laSxbVsM0BfJnFDcCtTixOw7ivUce9LPjo39D7TgILSCcqf%2FwOZlG626Vbwy0EvqBwZVuehsiRYKSNWjZ0Fa%2Fv76u9%2BzGjV4lBzjMxnrlwWQH2vkpR7hzb%2BEfYL%2BGB%2B%2BcKrapIxDCF%2B3BpSoxEN6M%2BeW2u%2Bl5RoB%2ByvQiZ%2BIP%2FC8DSgSW%2FGALSg1jyqWxi6ZR1l9ZEfJEJSMCRa7YFFLxH8B9dAAJfQnhhDCtZTJuGEyEYRGWnG0d%2BoQFBzRvDB133MM2p0fNxYoVCsmIqkhoBimkPZUmJB0LiTfctdb9%2B5Kt5UtAyT5Aivi6%2B5qQar6jKew%2BQTIPslZxZP6fjjVJr0ZINIKMhRU2q4p2r%2FyNYoFPahJauY5UAploF6n%2BjnMPvKMN72jr4GOqUBFsR7473n1Yi7U5taqk5MCJI%2Bm%2BMktjL2IiKD3aYTsyfBBXVkTSSJ4zKZaz1rSlVJ9B3qlO1N8Cbhjx652LzUB%2B46EumAHJ66otwDu4dV24ymq5bXVc5eblyA%2FXTN5PmziOhlq3TQxV4l9PWUlN5lmvM5j4JkwpWeQ5Fao7egrmeDry0XXN8OwiVHs95lzBX3Y40UC2a%2Bhk2CS8pWOSPdR0L2yuSc&X-Amz-Signature=eee730526aba54bce6d67129802e8f16f8f084323985eb8bf84c94a52801cf2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225TN7IL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEfKR4CgcCEbZBLojJKzI%2BlCwBXw%2Bz5DamNqum29mTR8AiEAjkyuPJOKJLUdP0RUQnFx4TIGsBn6eSIUiqfo7DWbdxYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi80LhprPpxLMy6yrcA9tpTo8tSGDfYbwEUscXm1E0qTaG1HSeA7%2Fpd7oPFK%2FrgxJWtzYUmSUoR1j9je8wChvI6aUP8w%2Bt%2B%2B63D4t41wIOYjNOA3S3O%2Fa0m4bhLpwUAuqHl%2Bm%2FUBJjSRO1l%2FOnLxj9Pmt0tAXlbp4wwjrVUF6s52gQFuLIRwG1cXW%2FcOnuU3dYFcTWX5%2FBN7mJS62tRnKo1x5iUYpIRssC9UzYCESrHuiCfUN%2FjCVexLHov4T7ifcBzkdQASBP5laSxbVsM0BfJnFDcCtTixOw7ivUce9LPjo39D7TgILSCcqf%2FwOZlG626Vbwy0EvqBwZVuehsiRYKSNWjZ0Fa%2Fv76u9%2BzGjV4lBzjMxnrlwWQH2vkpR7hzb%2BEfYL%2BGB%2B%2BcKrapIxDCF%2B3BpSoxEN6M%2BeW2u%2Bl5RoB%2ByvQiZ%2BIP%2FC8DSgSW%2FGALSg1jyqWxi6ZR1l9ZEfJEJSMCRa7YFFLxH8B9dAAJfQnhhDCtZTJuGEyEYRGWnG0d%2BoQFBzRvDB133MM2p0fNxYoVCsmIqkhoBimkPZUmJB0LiTfctdb9%2B5Kt5UtAyT5Aivi6%2B5qQar6jKew%2BQTIPslZxZP6fjjVJr0ZINIKMhRU2q4p2r%2FyNYoFPahJauY5UAploF6n%2BjnMPvKMN72jr4GOqUBFsR7473n1Yi7U5taqk5MCJI%2Bm%2BMktjL2IiKD3aYTsyfBBXVkTSSJ4zKZaz1rSlVJ9B3qlO1N8Cbhjx652LzUB%2B46EumAHJ66otwDu4dV24ymq5bXVc5eblyA%2FXTN5PmziOhlq3TQxV4l9PWUlN5lmvM5j4JkwpWeQ5Fao7egrmeDry0XXN8OwiVHs95lzBX3Y40UC2a%2Bhk2CS8pWOSPdR0L2yuSc&X-Amz-Signature=c7b6e2555554d6f3e6544ff1484200a9a0b87cbdc4f70389487385ba01fdcb33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225TN7IL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEfKR4CgcCEbZBLojJKzI%2BlCwBXw%2Bz5DamNqum29mTR8AiEAjkyuPJOKJLUdP0RUQnFx4TIGsBn6eSIUiqfo7DWbdxYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi80LhprPpxLMy6yrcA9tpTo8tSGDfYbwEUscXm1E0qTaG1HSeA7%2Fpd7oPFK%2FrgxJWtzYUmSUoR1j9je8wChvI6aUP8w%2Bt%2B%2B63D4t41wIOYjNOA3S3O%2Fa0m4bhLpwUAuqHl%2Bm%2FUBJjSRO1l%2FOnLxj9Pmt0tAXlbp4wwjrVUF6s52gQFuLIRwG1cXW%2FcOnuU3dYFcTWX5%2FBN7mJS62tRnKo1x5iUYpIRssC9UzYCESrHuiCfUN%2FjCVexLHov4T7ifcBzkdQASBP5laSxbVsM0BfJnFDcCtTixOw7ivUce9LPjo39D7TgILSCcqf%2FwOZlG626Vbwy0EvqBwZVuehsiRYKSNWjZ0Fa%2Fv76u9%2BzGjV4lBzjMxnrlwWQH2vkpR7hzb%2BEfYL%2BGB%2B%2BcKrapIxDCF%2B3BpSoxEN6M%2BeW2u%2Bl5RoB%2ByvQiZ%2BIP%2FC8DSgSW%2FGALSg1jyqWxi6ZR1l9ZEfJEJSMCRa7YFFLxH8B9dAAJfQnhhDCtZTJuGEyEYRGWnG0d%2BoQFBzRvDB133MM2p0fNxYoVCsmIqkhoBimkPZUmJB0LiTfctdb9%2B5Kt5UtAyT5Aivi6%2B5qQar6jKew%2BQTIPslZxZP6fjjVJr0ZINIKMhRU2q4p2r%2FyNYoFPahJauY5UAploF6n%2BjnMPvKMN72jr4GOqUBFsR7473n1Yi7U5taqk5MCJI%2Bm%2BMktjL2IiKD3aYTsyfBBXVkTSSJ4zKZaz1rSlVJ9B3qlO1N8Cbhjx652LzUB%2B46EumAHJ66otwDu4dV24ymq5bXVc5eblyA%2FXTN5PmziOhlq3TQxV4l9PWUlN5lmvM5j4JkwpWeQ5Fao7egrmeDry0XXN8OwiVHs95lzBX3Y40UC2a%2Bhk2CS8pWOSPdR0L2yuSc&X-Amz-Signature=f752adadc78c5c22dadddd0b6b8cacc4f435dcddaf12a1b170be495be2dbc5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225TN7IL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEfKR4CgcCEbZBLojJKzI%2BlCwBXw%2Bz5DamNqum29mTR8AiEAjkyuPJOKJLUdP0RUQnFx4TIGsBn6eSIUiqfo7DWbdxYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi80LhprPpxLMy6yrcA9tpTo8tSGDfYbwEUscXm1E0qTaG1HSeA7%2Fpd7oPFK%2FrgxJWtzYUmSUoR1j9je8wChvI6aUP8w%2Bt%2B%2B63D4t41wIOYjNOA3S3O%2Fa0m4bhLpwUAuqHl%2Bm%2FUBJjSRO1l%2FOnLxj9Pmt0tAXlbp4wwjrVUF6s52gQFuLIRwG1cXW%2FcOnuU3dYFcTWX5%2FBN7mJS62tRnKo1x5iUYpIRssC9UzYCESrHuiCfUN%2FjCVexLHov4T7ifcBzkdQASBP5laSxbVsM0BfJnFDcCtTixOw7ivUce9LPjo39D7TgILSCcqf%2FwOZlG626Vbwy0EvqBwZVuehsiRYKSNWjZ0Fa%2Fv76u9%2BzGjV4lBzjMxnrlwWQH2vkpR7hzb%2BEfYL%2BGB%2B%2BcKrapIxDCF%2B3BpSoxEN6M%2BeW2u%2Bl5RoB%2ByvQiZ%2BIP%2FC8DSgSW%2FGALSg1jyqWxi6ZR1l9ZEfJEJSMCRa7YFFLxH8B9dAAJfQnhhDCtZTJuGEyEYRGWnG0d%2BoQFBzRvDB133MM2p0fNxYoVCsmIqkhoBimkPZUmJB0LiTfctdb9%2B5Kt5UtAyT5Aivi6%2B5qQar6jKew%2BQTIPslZxZP6fjjVJr0ZINIKMhRU2q4p2r%2FyNYoFPahJauY5UAploF6n%2BjnMPvKMN72jr4GOqUBFsR7473n1Yi7U5taqk5MCJI%2Bm%2BMktjL2IiKD3aYTsyfBBXVkTSSJ4zKZaz1rSlVJ9B3qlO1N8Cbhjx652LzUB%2B46EumAHJ66otwDu4dV24ymq5bXVc5eblyA%2FXTN5PmziOhlq3TQxV4l9PWUlN5lmvM5j4JkwpWeQ5Fao7egrmeDry0XXN8OwiVHs95lzBX3Y40UC2a%2Bhk2CS8pWOSPdR0L2yuSc&X-Amz-Signature=6761f07759b0ffa331fba691508c785bcc1f2fc4030e4cb53c698d89c802c277&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225TN7IL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T040920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEfKR4CgcCEbZBLojJKzI%2BlCwBXw%2Bz5DamNqum29mTR8AiEAjkyuPJOKJLUdP0RUQnFx4TIGsBn6eSIUiqfo7DWbdxYqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImi80LhprPpxLMy6yrcA9tpTo8tSGDfYbwEUscXm1E0qTaG1HSeA7%2Fpd7oPFK%2FrgxJWtzYUmSUoR1j9je8wChvI6aUP8w%2Bt%2B%2B63D4t41wIOYjNOA3S3O%2Fa0m4bhLpwUAuqHl%2Bm%2FUBJjSRO1l%2FOnLxj9Pmt0tAXlbp4wwjrVUF6s52gQFuLIRwG1cXW%2FcOnuU3dYFcTWX5%2FBN7mJS62tRnKo1x5iUYpIRssC9UzYCESrHuiCfUN%2FjCVexLHov4T7ifcBzkdQASBP5laSxbVsM0BfJnFDcCtTixOw7ivUce9LPjo39D7TgILSCcqf%2FwOZlG626Vbwy0EvqBwZVuehsiRYKSNWjZ0Fa%2Fv76u9%2BzGjV4lBzjMxnrlwWQH2vkpR7hzb%2BEfYL%2BGB%2B%2BcKrapIxDCF%2B3BpSoxEN6M%2BeW2u%2Bl5RoB%2ByvQiZ%2BIP%2FC8DSgSW%2FGALSg1jyqWxi6ZR1l9ZEfJEJSMCRa7YFFLxH8B9dAAJfQnhhDCtZTJuGEyEYRGWnG0d%2BoQFBzRvDB133MM2p0fNxYoVCsmIqkhoBimkPZUmJB0LiTfctdb9%2B5Kt5UtAyT5Aivi6%2B5qQar6jKew%2BQTIPslZxZP6fjjVJr0ZINIKMhRU2q4p2r%2FyNYoFPahJauY5UAploF6n%2BjnMPvKMN72jr4GOqUBFsR7473n1Yi7U5taqk5MCJI%2Bm%2BMktjL2IiKD3aYTsyfBBXVkTSSJ4zKZaz1rSlVJ9B3qlO1N8Cbhjx652LzUB%2B46EumAHJ66otwDu4dV24ymq5bXVc5eblyA%2FXTN5PmziOhlq3TQxV4l9PWUlN5lmvM5j4JkwpWeQ5Fao7egrmeDry0XXN8OwiVHs95lzBX3Y40UC2a%2Bhk2CS8pWOSPdR0L2yuSc&X-Amz-Signature=dcb3bf0d633b8c732af068dc601cd805ede612c7bc6f8c0e567b169f9c5331af&X-Amz-SignedHeaders=host&x-id=GetObject)
