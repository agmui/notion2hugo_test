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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAGWWAV6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2Fs5weTTCz2MpWZmzuQHXpe4wqypnS3PH66%2Bz8PbFtQIhAPJRGAKTe9tyAzdCboCULld11oLAI8oKC81wSwaNAK5iKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTqLXXp90Ya1QDrIq3AN2E9ENXOc7wbb9l5Ou3dfWsXkpTAtThw6UxWHWEKCkWDCVidIK945m4F%2FpQCSeu8N04IMngomfRFjVEkkP%2FeLpjvPAg2nAF7mutwKJJQU0THTQ7QuiMGGlqZcJa9pKPp3TF6%2FrutmDxA5AtohXu8KRQz23KIZgfLkxxA2T%2BEj%2B1bFsePoUWzMmkfVK7lEqBKwtjcFnpvUFuKI%2Fu5Es5Me7I276MsjZTDUOqvpgC7ZqCJG%2Blkv8ui5WK4zbRLl1%2BtVMLOGvDNgC5G%2BycqdCKQ4Q4aN9pRKdnWqmzUGdWdMJL5TpWIF75BKwMe57nImohcQnKLyUh66G8fMa2aizGSAkZqRjxLNg3NBR1wIN1hXYMxh7g4ASoUC7AwEDO6mio5qxn9aowLi7gwmoQdIfonoUPHFdy5UHvLd5slZLI5kA0wxeKHtwV2O4XmuSQtXSp9j%2B9wUoemArLIdUMWbj0SR5obBriYgsE33FnR0Yv4L07csgk4S%2FtaU4vhzzJZFahh70I3Apn1gVipnH%2BcDs8uwi9s%2BCsmLQfARNOkaxq9pWewIaXhpk%2F69Hz%2BTKEduh0MyfYenlWs4JQKgHI8JzoGhRlZ4foqY99xv9gPPVTsUSnQsZW4hjL%2FHMsXtOlTCqs%2BrBBjqkAUlN4cY1TaKODTTFy0YjN3pQKLvc%2BumYbRwkku2sygf33H2J2S6iaT32H7TFNRQgS5EcFxGYNY4Q4MdDcnYiAqyaADDx8%2FnBAKGWJj2WbnSKPArmDgxf4%2F2MBr2RXW%2FCkTadU62SyA5vthnqowGpjC5oAn1Pq497MWcC6o4HmBV9qx1h6jYybjh6gFo%2F05684ONlthZ1PZ4cLcswAeNEwe5C1kqW&X-Amz-Signature=1ee2d51dbba881c2ca90cf045a23ecc7dafb1889fc7ae7399560fb6bd495b957&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAGWWAV6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2Fs5weTTCz2MpWZmzuQHXpe4wqypnS3PH66%2Bz8PbFtQIhAPJRGAKTe9tyAzdCboCULld11oLAI8oKC81wSwaNAK5iKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTqLXXp90Ya1QDrIq3AN2E9ENXOc7wbb9l5Ou3dfWsXkpTAtThw6UxWHWEKCkWDCVidIK945m4F%2FpQCSeu8N04IMngomfRFjVEkkP%2FeLpjvPAg2nAF7mutwKJJQU0THTQ7QuiMGGlqZcJa9pKPp3TF6%2FrutmDxA5AtohXu8KRQz23KIZgfLkxxA2T%2BEj%2B1bFsePoUWzMmkfVK7lEqBKwtjcFnpvUFuKI%2Fu5Es5Me7I276MsjZTDUOqvpgC7ZqCJG%2Blkv8ui5WK4zbRLl1%2BtVMLOGvDNgC5G%2BycqdCKQ4Q4aN9pRKdnWqmzUGdWdMJL5TpWIF75BKwMe57nImohcQnKLyUh66G8fMa2aizGSAkZqRjxLNg3NBR1wIN1hXYMxh7g4ASoUC7AwEDO6mio5qxn9aowLi7gwmoQdIfonoUPHFdy5UHvLd5slZLI5kA0wxeKHtwV2O4XmuSQtXSp9j%2B9wUoemArLIdUMWbj0SR5obBriYgsE33FnR0Yv4L07csgk4S%2FtaU4vhzzJZFahh70I3Apn1gVipnH%2BcDs8uwi9s%2BCsmLQfARNOkaxq9pWewIaXhpk%2F69Hz%2BTKEduh0MyfYenlWs4JQKgHI8JzoGhRlZ4foqY99xv9gPPVTsUSnQsZW4hjL%2FHMsXtOlTCqs%2BrBBjqkAUlN4cY1TaKODTTFy0YjN3pQKLvc%2BumYbRwkku2sygf33H2J2S6iaT32H7TFNRQgS5EcFxGYNY4Q4MdDcnYiAqyaADDx8%2FnBAKGWJj2WbnSKPArmDgxf4%2F2MBr2RXW%2FCkTadU62SyA5vthnqowGpjC5oAn1Pq497MWcC6o4HmBV9qx1h6jYybjh6gFo%2F05684ONlthZ1PZ4cLcswAeNEwe5C1kqW&X-Amz-Signature=8f5f89c65ef2ea01ac197ab02d41398acd994deb1c5d82c2e7eea7e3cf9166de&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAGWWAV6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2Fs5weTTCz2MpWZmzuQHXpe4wqypnS3PH66%2Bz8PbFtQIhAPJRGAKTe9tyAzdCboCULld11oLAI8oKC81wSwaNAK5iKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTqLXXp90Ya1QDrIq3AN2E9ENXOc7wbb9l5Ou3dfWsXkpTAtThw6UxWHWEKCkWDCVidIK945m4F%2FpQCSeu8N04IMngomfRFjVEkkP%2FeLpjvPAg2nAF7mutwKJJQU0THTQ7QuiMGGlqZcJa9pKPp3TF6%2FrutmDxA5AtohXu8KRQz23KIZgfLkxxA2T%2BEj%2B1bFsePoUWzMmkfVK7lEqBKwtjcFnpvUFuKI%2Fu5Es5Me7I276MsjZTDUOqvpgC7ZqCJG%2Blkv8ui5WK4zbRLl1%2BtVMLOGvDNgC5G%2BycqdCKQ4Q4aN9pRKdnWqmzUGdWdMJL5TpWIF75BKwMe57nImohcQnKLyUh66G8fMa2aizGSAkZqRjxLNg3NBR1wIN1hXYMxh7g4ASoUC7AwEDO6mio5qxn9aowLi7gwmoQdIfonoUPHFdy5UHvLd5slZLI5kA0wxeKHtwV2O4XmuSQtXSp9j%2B9wUoemArLIdUMWbj0SR5obBriYgsE33FnR0Yv4L07csgk4S%2FtaU4vhzzJZFahh70I3Apn1gVipnH%2BcDs8uwi9s%2BCsmLQfARNOkaxq9pWewIaXhpk%2F69Hz%2BTKEduh0MyfYenlWs4JQKgHI8JzoGhRlZ4foqY99xv9gPPVTsUSnQsZW4hjL%2FHMsXtOlTCqs%2BrBBjqkAUlN4cY1TaKODTTFy0YjN3pQKLvc%2BumYbRwkku2sygf33H2J2S6iaT32H7TFNRQgS5EcFxGYNY4Q4MdDcnYiAqyaADDx8%2FnBAKGWJj2WbnSKPArmDgxf4%2F2MBr2RXW%2FCkTadU62SyA5vthnqowGpjC5oAn1Pq497MWcC6o4HmBV9qx1h6jYybjh6gFo%2F05684ONlthZ1PZ4cLcswAeNEwe5C1kqW&X-Amz-Signature=44e4b504276e48df6921c5401c1031c5e062a7382b6f44a50aeaa813b07f810c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAGWWAV6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2Fs5weTTCz2MpWZmzuQHXpe4wqypnS3PH66%2Bz8PbFtQIhAPJRGAKTe9tyAzdCboCULld11oLAI8oKC81wSwaNAK5iKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTqLXXp90Ya1QDrIq3AN2E9ENXOc7wbb9l5Ou3dfWsXkpTAtThw6UxWHWEKCkWDCVidIK945m4F%2FpQCSeu8N04IMngomfRFjVEkkP%2FeLpjvPAg2nAF7mutwKJJQU0THTQ7QuiMGGlqZcJa9pKPp3TF6%2FrutmDxA5AtohXu8KRQz23KIZgfLkxxA2T%2BEj%2B1bFsePoUWzMmkfVK7lEqBKwtjcFnpvUFuKI%2Fu5Es5Me7I276MsjZTDUOqvpgC7ZqCJG%2Blkv8ui5WK4zbRLl1%2BtVMLOGvDNgC5G%2BycqdCKQ4Q4aN9pRKdnWqmzUGdWdMJL5TpWIF75BKwMe57nImohcQnKLyUh66G8fMa2aizGSAkZqRjxLNg3NBR1wIN1hXYMxh7g4ASoUC7AwEDO6mio5qxn9aowLi7gwmoQdIfonoUPHFdy5UHvLd5slZLI5kA0wxeKHtwV2O4XmuSQtXSp9j%2B9wUoemArLIdUMWbj0SR5obBriYgsE33FnR0Yv4L07csgk4S%2FtaU4vhzzJZFahh70I3Apn1gVipnH%2BcDs8uwi9s%2BCsmLQfARNOkaxq9pWewIaXhpk%2F69Hz%2BTKEduh0MyfYenlWs4JQKgHI8JzoGhRlZ4foqY99xv9gPPVTsUSnQsZW4hjL%2FHMsXtOlTCqs%2BrBBjqkAUlN4cY1TaKODTTFy0YjN3pQKLvc%2BumYbRwkku2sygf33H2J2S6iaT32H7TFNRQgS5EcFxGYNY4Q4MdDcnYiAqyaADDx8%2FnBAKGWJj2WbnSKPArmDgxf4%2F2MBr2RXW%2FCkTadU62SyA5vthnqowGpjC5oAn1Pq497MWcC6o4HmBV9qx1h6jYybjh6gFo%2F05684ONlthZ1PZ4cLcswAeNEwe5C1kqW&X-Amz-Signature=dafba572feb95b45a9782985d6d6504b64b670261849c8ea9eb696f50f3470fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAGWWAV6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2Fs5weTTCz2MpWZmzuQHXpe4wqypnS3PH66%2Bz8PbFtQIhAPJRGAKTe9tyAzdCboCULld11oLAI8oKC81wSwaNAK5iKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTqLXXp90Ya1QDrIq3AN2E9ENXOc7wbb9l5Ou3dfWsXkpTAtThw6UxWHWEKCkWDCVidIK945m4F%2FpQCSeu8N04IMngomfRFjVEkkP%2FeLpjvPAg2nAF7mutwKJJQU0THTQ7QuiMGGlqZcJa9pKPp3TF6%2FrutmDxA5AtohXu8KRQz23KIZgfLkxxA2T%2BEj%2B1bFsePoUWzMmkfVK7lEqBKwtjcFnpvUFuKI%2Fu5Es5Me7I276MsjZTDUOqvpgC7ZqCJG%2Blkv8ui5WK4zbRLl1%2BtVMLOGvDNgC5G%2BycqdCKQ4Q4aN9pRKdnWqmzUGdWdMJL5TpWIF75BKwMe57nImohcQnKLyUh66G8fMa2aizGSAkZqRjxLNg3NBR1wIN1hXYMxh7g4ASoUC7AwEDO6mio5qxn9aowLi7gwmoQdIfonoUPHFdy5UHvLd5slZLI5kA0wxeKHtwV2O4XmuSQtXSp9j%2B9wUoemArLIdUMWbj0SR5obBriYgsE33FnR0Yv4L07csgk4S%2FtaU4vhzzJZFahh70I3Apn1gVipnH%2BcDs8uwi9s%2BCsmLQfARNOkaxq9pWewIaXhpk%2F69Hz%2BTKEduh0MyfYenlWs4JQKgHI8JzoGhRlZ4foqY99xv9gPPVTsUSnQsZW4hjL%2FHMsXtOlTCqs%2BrBBjqkAUlN4cY1TaKODTTFy0YjN3pQKLvc%2BumYbRwkku2sygf33H2J2S6iaT32H7TFNRQgS5EcFxGYNY4Q4MdDcnYiAqyaADDx8%2FnBAKGWJj2WbnSKPArmDgxf4%2F2MBr2RXW%2FCkTadU62SyA5vthnqowGpjC5oAn1Pq497MWcC6o4HmBV9qx1h6jYybjh6gFo%2F05684ONlthZ1PZ4cLcswAeNEwe5C1kqW&X-Amz-Signature=8572384741da039eb504cf1aae4b9912ad1809e3b1d73b1843b0e2b5e9091287&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAGWWAV6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2Fs5weTTCz2MpWZmzuQHXpe4wqypnS3PH66%2Bz8PbFtQIhAPJRGAKTe9tyAzdCboCULld11oLAI8oKC81wSwaNAK5iKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTqLXXp90Ya1QDrIq3AN2E9ENXOc7wbb9l5Ou3dfWsXkpTAtThw6UxWHWEKCkWDCVidIK945m4F%2FpQCSeu8N04IMngomfRFjVEkkP%2FeLpjvPAg2nAF7mutwKJJQU0THTQ7QuiMGGlqZcJa9pKPp3TF6%2FrutmDxA5AtohXu8KRQz23KIZgfLkxxA2T%2BEj%2B1bFsePoUWzMmkfVK7lEqBKwtjcFnpvUFuKI%2Fu5Es5Me7I276MsjZTDUOqvpgC7ZqCJG%2Blkv8ui5WK4zbRLl1%2BtVMLOGvDNgC5G%2BycqdCKQ4Q4aN9pRKdnWqmzUGdWdMJL5TpWIF75BKwMe57nImohcQnKLyUh66G8fMa2aizGSAkZqRjxLNg3NBR1wIN1hXYMxh7g4ASoUC7AwEDO6mio5qxn9aowLi7gwmoQdIfonoUPHFdy5UHvLd5slZLI5kA0wxeKHtwV2O4XmuSQtXSp9j%2B9wUoemArLIdUMWbj0SR5obBriYgsE33FnR0Yv4L07csgk4S%2FtaU4vhzzJZFahh70I3Apn1gVipnH%2BcDs8uwi9s%2BCsmLQfARNOkaxq9pWewIaXhpk%2F69Hz%2BTKEduh0MyfYenlWs4JQKgHI8JzoGhRlZ4foqY99xv9gPPVTsUSnQsZW4hjL%2FHMsXtOlTCqs%2BrBBjqkAUlN4cY1TaKODTTFy0YjN3pQKLvc%2BumYbRwkku2sygf33H2J2S6iaT32H7TFNRQgS5EcFxGYNY4Q4MdDcnYiAqyaADDx8%2FnBAKGWJj2WbnSKPArmDgxf4%2F2MBr2RXW%2FCkTadU62SyA5vthnqowGpjC5oAn1Pq497MWcC6o4HmBV9qx1h6jYybjh6gFo%2F05684ONlthZ1PZ4cLcswAeNEwe5C1kqW&X-Amz-Signature=7cad9e3f6c3176594c80f0a42491dac7bdb33694cb528038f854ef0ac1b255f2&X-Amz-SignedHeaders=host&x-id=GetObject)
