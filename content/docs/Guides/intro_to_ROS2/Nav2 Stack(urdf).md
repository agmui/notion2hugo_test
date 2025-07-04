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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNPZF7W%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEZE%2BWwDnfoSjHd2b8f2YODd9QhF2n0aLIorFTO%2F0%2F6bAiEAnQMvnXYiCmC2T9fSDUHDpVVTa89BZiSkXv42C1CRhFYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGvRbuU290%2Bc8dsMeyrcA3iMzlV9g36RUll%2FlBrz6MFF85mwnX70hXtsouihnliOAjKz2vip%2Fv1ouLpzMHmdbv%2B9Lf%2Bw6gUi0zXr84q1AAZFqjVet6OOhz9%2FP7aYLumArFVuMEyTjn51fUHp52KGayKLWbuQTQ0ZEZSR5mwmuatZ568h8H%2FdqsDT%2FBlUn7gbeiQG7TIdLeEquXF69s6xh8mVuv52l6sRZm8THCgLLMCl1PZx8M5d16UgO%2BCJPuyJqpcCzczLCfUuarlo%2Byg%2Fu9bhNuVR4Z94ujn%2BmsW%2Ff72FDYN2Q1pGo2nWaOMtnwamRnAHVTFDiT4aQDQp8muJy9F1K4pfsvJc8tbFSQkBjtoyiD33b7LMxJXcIy8Huv0KD0tZdXjbVoO5%2FZntpM2lun4oRnRU%2B3arXtSW%2BbZijTp0tXJKoZEcqDV6ZKN6lc7zgZErCPACrxCjg16h933zAoxZbWkuGGMo3GHo2mCvGB9wTxpIfFLqYf3YKo5yNFFN2ZRjmfjzaPLMy5zTraEvtY2vytkLZYfvbY80BZe5FyIAbao51T39xioJh40LinGUM7PXUrlIBIslzmpsJGIv1m1ZtjF7zzjlfa0h8a1hn%2FjLUCFqDlH00yorx%2FeLqE%2BkHtXP0g2DQTnRMND1MN2bn8MGOqUBy6EvPszMSpdIq1JiCcCf9E3%2FnAMhbtc9UthlJl7tSuojWFsEyphoq8rSzq7bOjmuTUmK%2ByVWdj%2F1WFzhSS08pw11NfeLNiBVWmF9B4hwwqDL06W38OyqHm%2FKioxJaQkSJ%2FwfBENIl7fd7NGS587Wgp0%2FgBPPbyayYEfon5TTEKsM1G1mIPxiTrjtULxeNQJaDDQD1VA1YKpN7rkClJ5jyME3SUIJ&X-Amz-Signature=08b628b0b70acd791f8a27f09d81bccd6ad11de08eeb46169af94a27e857a493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNPZF7W%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEZE%2BWwDnfoSjHd2b8f2YODd9QhF2n0aLIorFTO%2F0%2F6bAiEAnQMvnXYiCmC2T9fSDUHDpVVTa89BZiSkXv42C1CRhFYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGvRbuU290%2Bc8dsMeyrcA3iMzlV9g36RUll%2FlBrz6MFF85mwnX70hXtsouihnliOAjKz2vip%2Fv1ouLpzMHmdbv%2B9Lf%2Bw6gUi0zXr84q1AAZFqjVet6OOhz9%2FP7aYLumArFVuMEyTjn51fUHp52KGayKLWbuQTQ0ZEZSR5mwmuatZ568h8H%2FdqsDT%2FBlUn7gbeiQG7TIdLeEquXF69s6xh8mVuv52l6sRZm8THCgLLMCl1PZx8M5d16UgO%2BCJPuyJqpcCzczLCfUuarlo%2Byg%2Fu9bhNuVR4Z94ujn%2BmsW%2Ff72FDYN2Q1pGo2nWaOMtnwamRnAHVTFDiT4aQDQp8muJy9F1K4pfsvJc8tbFSQkBjtoyiD33b7LMxJXcIy8Huv0KD0tZdXjbVoO5%2FZntpM2lun4oRnRU%2B3arXtSW%2BbZijTp0tXJKoZEcqDV6ZKN6lc7zgZErCPACrxCjg16h933zAoxZbWkuGGMo3GHo2mCvGB9wTxpIfFLqYf3YKo5yNFFN2ZRjmfjzaPLMy5zTraEvtY2vytkLZYfvbY80BZe5FyIAbao51T39xioJh40LinGUM7PXUrlIBIslzmpsJGIv1m1ZtjF7zzjlfa0h8a1hn%2FjLUCFqDlH00yorx%2FeLqE%2BkHtXP0g2DQTnRMND1MN2bn8MGOqUBy6EvPszMSpdIq1JiCcCf9E3%2FnAMhbtc9UthlJl7tSuojWFsEyphoq8rSzq7bOjmuTUmK%2ByVWdj%2F1WFzhSS08pw11NfeLNiBVWmF9B4hwwqDL06W38OyqHm%2FKioxJaQkSJ%2FwfBENIl7fd7NGS587Wgp0%2FgBPPbyayYEfon5TTEKsM1G1mIPxiTrjtULxeNQJaDDQD1VA1YKpN7rkClJ5jyME3SUIJ&X-Amz-Signature=9bc46e968d95c4226c8d81e3012cc01d9e14fda5baeb1f71c4af9a12b7a66cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNPZF7W%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEZE%2BWwDnfoSjHd2b8f2YODd9QhF2n0aLIorFTO%2F0%2F6bAiEAnQMvnXYiCmC2T9fSDUHDpVVTa89BZiSkXv42C1CRhFYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGvRbuU290%2Bc8dsMeyrcA3iMzlV9g36RUll%2FlBrz6MFF85mwnX70hXtsouihnliOAjKz2vip%2Fv1ouLpzMHmdbv%2B9Lf%2Bw6gUi0zXr84q1AAZFqjVet6OOhz9%2FP7aYLumArFVuMEyTjn51fUHp52KGayKLWbuQTQ0ZEZSR5mwmuatZ568h8H%2FdqsDT%2FBlUn7gbeiQG7TIdLeEquXF69s6xh8mVuv52l6sRZm8THCgLLMCl1PZx8M5d16UgO%2BCJPuyJqpcCzczLCfUuarlo%2Byg%2Fu9bhNuVR4Z94ujn%2BmsW%2Ff72FDYN2Q1pGo2nWaOMtnwamRnAHVTFDiT4aQDQp8muJy9F1K4pfsvJc8tbFSQkBjtoyiD33b7LMxJXcIy8Huv0KD0tZdXjbVoO5%2FZntpM2lun4oRnRU%2B3arXtSW%2BbZijTp0tXJKoZEcqDV6ZKN6lc7zgZErCPACrxCjg16h933zAoxZbWkuGGMo3GHo2mCvGB9wTxpIfFLqYf3YKo5yNFFN2ZRjmfjzaPLMy5zTraEvtY2vytkLZYfvbY80BZe5FyIAbao51T39xioJh40LinGUM7PXUrlIBIslzmpsJGIv1m1ZtjF7zzjlfa0h8a1hn%2FjLUCFqDlH00yorx%2FeLqE%2BkHtXP0g2DQTnRMND1MN2bn8MGOqUBy6EvPszMSpdIq1JiCcCf9E3%2FnAMhbtc9UthlJl7tSuojWFsEyphoq8rSzq7bOjmuTUmK%2ByVWdj%2F1WFzhSS08pw11NfeLNiBVWmF9B4hwwqDL06W38OyqHm%2FKioxJaQkSJ%2FwfBENIl7fd7NGS587Wgp0%2FgBPPbyayYEfon5TTEKsM1G1mIPxiTrjtULxeNQJaDDQD1VA1YKpN7rkClJ5jyME3SUIJ&X-Amz-Signature=943757b38deefa35f86aa5671cec6ca752b5f2a77d6285d69ecc1d9a32fca677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNPZF7W%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEZE%2BWwDnfoSjHd2b8f2YODd9QhF2n0aLIorFTO%2F0%2F6bAiEAnQMvnXYiCmC2T9fSDUHDpVVTa89BZiSkXv42C1CRhFYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGvRbuU290%2Bc8dsMeyrcA3iMzlV9g36RUll%2FlBrz6MFF85mwnX70hXtsouihnliOAjKz2vip%2Fv1ouLpzMHmdbv%2B9Lf%2Bw6gUi0zXr84q1AAZFqjVet6OOhz9%2FP7aYLumArFVuMEyTjn51fUHp52KGayKLWbuQTQ0ZEZSR5mwmuatZ568h8H%2FdqsDT%2FBlUn7gbeiQG7TIdLeEquXF69s6xh8mVuv52l6sRZm8THCgLLMCl1PZx8M5d16UgO%2BCJPuyJqpcCzczLCfUuarlo%2Byg%2Fu9bhNuVR4Z94ujn%2BmsW%2Ff72FDYN2Q1pGo2nWaOMtnwamRnAHVTFDiT4aQDQp8muJy9F1K4pfsvJc8tbFSQkBjtoyiD33b7LMxJXcIy8Huv0KD0tZdXjbVoO5%2FZntpM2lun4oRnRU%2B3arXtSW%2BbZijTp0tXJKoZEcqDV6ZKN6lc7zgZErCPACrxCjg16h933zAoxZbWkuGGMo3GHo2mCvGB9wTxpIfFLqYf3YKo5yNFFN2ZRjmfjzaPLMy5zTraEvtY2vytkLZYfvbY80BZe5FyIAbao51T39xioJh40LinGUM7PXUrlIBIslzmpsJGIv1m1ZtjF7zzjlfa0h8a1hn%2FjLUCFqDlH00yorx%2FeLqE%2BkHtXP0g2DQTnRMND1MN2bn8MGOqUBy6EvPszMSpdIq1JiCcCf9E3%2FnAMhbtc9UthlJl7tSuojWFsEyphoq8rSzq7bOjmuTUmK%2ByVWdj%2F1WFzhSS08pw11NfeLNiBVWmF9B4hwwqDL06W38OyqHm%2FKioxJaQkSJ%2FwfBENIl7fd7NGS587Wgp0%2FgBPPbyayYEfon5TTEKsM1G1mIPxiTrjtULxeNQJaDDQD1VA1YKpN7rkClJ5jyME3SUIJ&X-Amz-Signature=d74f62a466739521ab93b89728e17731bdcbe5754400b1626ebb326854a15a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNPZF7W%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEZE%2BWwDnfoSjHd2b8f2YODd9QhF2n0aLIorFTO%2F0%2F6bAiEAnQMvnXYiCmC2T9fSDUHDpVVTa89BZiSkXv42C1CRhFYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGvRbuU290%2Bc8dsMeyrcA3iMzlV9g36RUll%2FlBrz6MFF85mwnX70hXtsouihnliOAjKz2vip%2Fv1ouLpzMHmdbv%2B9Lf%2Bw6gUi0zXr84q1AAZFqjVet6OOhz9%2FP7aYLumArFVuMEyTjn51fUHp52KGayKLWbuQTQ0ZEZSR5mwmuatZ568h8H%2FdqsDT%2FBlUn7gbeiQG7TIdLeEquXF69s6xh8mVuv52l6sRZm8THCgLLMCl1PZx8M5d16UgO%2BCJPuyJqpcCzczLCfUuarlo%2Byg%2Fu9bhNuVR4Z94ujn%2BmsW%2Ff72FDYN2Q1pGo2nWaOMtnwamRnAHVTFDiT4aQDQp8muJy9F1K4pfsvJc8tbFSQkBjtoyiD33b7LMxJXcIy8Huv0KD0tZdXjbVoO5%2FZntpM2lun4oRnRU%2B3arXtSW%2BbZijTp0tXJKoZEcqDV6ZKN6lc7zgZErCPACrxCjg16h933zAoxZbWkuGGMo3GHo2mCvGB9wTxpIfFLqYf3YKo5yNFFN2ZRjmfjzaPLMy5zTraEvtY2vytkLZYfvbY80BZe5FyIAbao51T39xioJh40LinGUM7PXUrlIBIslzmpsJGIv1m1ZtjF7zzjlfa0h8a1hn%2FjLUCFqDlH00yorx%2FeLqE%2BkHtXP0g2DQTnRMND1MN2bn8MGOqUBy6EvPszMSpdIq1JiCcCf9E3%2FnAMhbtc9UthlJl7tSuojWFsEyphoq8rSzq7bOjmuTUmK%2ByVWdj%2F1WFzhSS08pw11NfeLNiBVWmF9B4hwwqDL06W38OyqHm%2FKioxJaQkSJ%2FwfBENIl7fd7NGS587Wgp0%2FgBPPbyayYEfon5TTEKsM1G1mIPxiTrjtULxeNQJaDDQD1VA1YKpN7rkClJ5jyME3SUIJ&X-Amz-Signature=3ea78818e034e618e04757f15f2bec77a9b5b26b755c5bc1a93e856fa07b2175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNPZF7W%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEZE%2BWwDnfoSjHd2b8f2YODd9QhF2n0aLIorFTO%2F0%2F6bAiEAnQMvnXYiCmC2T9fSDUHDpVVTa89BZiSkXv42C1CRhFYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDGvRbuU290%2Bc8dsMeyrcA3iMzlV9g36RUll%2FlBrz6MFF85mwnX70hXtsouihnliOAjKz2vip%2Fv1ouLpzMHmdbv%2B9Lf%2Bw6gUi0zXr84q1AAZFqjVet6OOhz9%2FP7aYLumArFVuMEyTjn51fUHp52KGayKLWbuQTQ0ZEZSR5mwmuatZ568h8H%2FdqsDT%2FBlUn7gbeiQG7TIdLeEquXF69s6xh8mVuv52l6sRZm8THCgLLMCl1PZx8M5d16UgO%2BCJPuyJqpcCzczLCfUuarlo%2Byg%2Fu9bhNuVR4Z94ujn%2BmsW%2Ff72FDYN2Q1pGo2nWaOMtnwamRnAHVTFDiT4aQDQp8muJy9F1K4pfsvJc8tbFSQkBjtoyiD33b7LMxJXcIy8Huv0KD0tZdXjbVoO5%2FZntpM2lun4oRnRU%2B3arXtSW%2BbZijTp0tXJKoZEcqDV6ZKN6lc7zgZErCPACrxCjg16h933zAoxZbWkuGGMo3GHo2mCvGB9wTxpIfFLqYf3YKo5yNFFN2ZRjmfjzaPLMy5zTraEvtY2vytkLZYfvbY80BZe5FyIAbao51T39xioJh40LinGUM7PXUrlIBIslzmpsJGIv1m1ZtjF7zzjlfa0h8a1hn%2FjLUCFqDlH00yorx%2FeLqE%2BkHtXP0g2DQTnRMND1MN2bn8MGOqUBy6EvPszMSpdIq1JiCcCf9E3%2FnAMhbtc9UthlJl7tSuojWFsEyphoq8rSzq7bOjmuTUmK%2ByVWdj%2F1WFzhSS08pw11NfeLNiBVWmF9B4hwwqDL06W38OyqHm%2FKioxJaQkSJ%2FwfBENIl7fd7NGS587Wgp0%2FgBPPbyayYEfon5TTEKsM1G1mIPxiTrjtULxeNQJaDDQD1VA1YKpN7rkClJ5jyME3SUIJ&X-Amz-Signature=f3b25c1b2e0ccddd32d9529738ad9bc1ba6df1613228e76ee27c496ccf0ad52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
