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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675H6SVX7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH0qCeC%2FaXWGXP0q61N%2Fjm3ors0SioiTqX6Ebpw16rdZAiAL%2F9hwwjzr41GDXyJj%2BIifX9QpfQFqJdP0DbgcEb8CBir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1922%2Bntw8dfXTrj3KtwDgbIGXBF%2BPtUgNgYgOLsNfWb3pOnpxX7lzZv4UKCsrOZgAuHGDwaIppq3oFtZwZRPruzn5%2FV2Hcn6NJxiU%2F8PyxXNII6KvO9AD0bKkpieQV9lfK%2FzHz6ysPLISbaf2z8NFuhCwoTXv4pZskKhxHgbG%2BLK6DnjJt2GDU3gllTKACNmSFQV3kgp4VuvjBEJzNTbmJ39Drtu3rgG1dr1OKEZpzUZKNdY5FpX6%2BTTAGBvGtFxEURwtpNozAbk2RUWtfrH1yOplivAKYOyjQ68esOu7uan%2BBlSQSa6clpfN8rtCmlQIyHadG92YlUybxuT%2BKn%2Fc2fHJzpWFRsiUtRNb1APOZQ4HmcJtRtcNHYWdfA0gGbmwMyFNi8aXqYiw5c5BjT6j7DdLJ5tpkseHzmFlhV2gnEVpvszGiD1z4LmkGoX31%2BLijcrbhxI9cT00MX2eK0Pw60GloEBWdTmLNhGjIq4LPR1YvIee7UjkBHDWpgb5OV9h%2FHJ4bBJjPZH1NlHu1d%2BFXEAsRGj1CGHViMkaqnlTxExtnpiqtI79GL4LlBip4n2ediggq5jm5JuNzVtjes6hLNO%2BQIWOoQw%2BOazNnAf%2FOdq8D%2FIVrVfC2tvh%2FwU4rPmWf8ZEqjE5c0s2HIw39jsvgY6pgGKByD8Ipb2%2FiI9NwPIoReEmlEYqw3LfjSyhpRKK3Lq1H%2BTfnaloYS6Lx2c3NpdYN%2FmLo8MA1FdanE2d97ZdxqfXiv2yaLhPd1AaGfexQhHVED5a%2Fy1rlnPlwZlmJpY99JRC2NXw0%2BWIud158mhdI5Nu6LFJQBPIsiCAMEKdCRV%2BBgj%2FDdGDJnJpAwzTkZToGf75e2GwxjfOKFjSI4CkOcF3lx41%2B79&X-Amz-Signature=b58b8b5d448167afa5699ed102975cd3f7aa9376090c85cd0be57c1644ac6d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675H6SVX7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH0qCeC%2FaXWGXP0q61N%2Fjm3ors0SioiTqX6Ebpw16rdZAiAL%2F9hwwjzr41GDXyJj%2BIifX9QpfQFqJdP0DbgcEb8CBir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1922%2Bntw8dfXTrj3KtwDgbIGXBF%2BPtUgNgYgOLsNfWb3pOnpxX7lzZv4UKCsrOZgAuHGDwaIppq3oFtZwZRPruzn5%2FV2Hcn6NJxiU%2F8PyxXNII6KvO9AD0bKkpieQV9lfK%2FzHz6ysPLISbaf2z8NFuhCwoTXv4pZskKhxHgbG%2BLK6DnjJt2GDU3gllTKACNmSFQV3kgp4VuvjBEJzNTbmJ39Drtu3rgG1dr1OKEZpzUZKNdY5FpX6%2BTTAGBvGtFxEURwtpNozAbk2RUWtfrH1yOplivAKYOyjQ68esOu7uan%2BBlSQSa6clpfN8rtCmlQIyHadG92YlUybxuT%2BKn%2Fc2fHJzpWFRsiUtRNb1APOZQ4HmcJtRtcNHYWdfA0gGbmwMyFNi8aXqYiw5c5BjT6j7DdLJ5tpkseHzmFlhV2gnEVpvszGiD1z4LmkGoX31%2BLijcrbhxI9cT00MX2eK0Pw60GloEBWdTmLNhGjIq4LPR1YvIee7UjkBHDWpgb5OV9h%2FHJ4bBJjPZH1NlHu1d%2BFXEAsRGj1CGHViMkaqnlTxExtnpiqtI79GL4LlBip4n2ediggq5jm5JuNzVtjes6hLNO%2BQIWOoQw%2BOazNnAf%2FOdq8D%2FIVrVfC2tvh%2FwU4rPmWf8ZEqjE5c0s2HIw39jsvgY6pgGKByD8Ipb2%2FiI9NwPIoReEmlEYqw3LfjSyhpRKK3Lq1H%2BTfnaloYS6Lx2c3NpdYN%2FmLo8MA1FdanE2d97ZdxqfXiv2yaLhPd1AaGfexQhHVED5a%2Fy1rlnPlwZlmJpY99JRC2NXw0%2BWIud158mhdI5Nu6LFJQBPIsiCAMEKdCRV%2BBgj%2FDdGDJnJpAwzTkZToGf75e2GwxjfOKFjSI4CkOcF3lx41%2B79&X-Amz-Signature=8b477c59052126db1465527e0f8cf027f1ed6355822be2f6b3ac0dc9b0f74297&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675H6SVX7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH0qCeC%2FaXWGXP0q61N%2Fjm3ors0SioiTqX6Ebpw16rdZAiAL%2F9hwwjzr41GDXyJj%2BIifX9QpfQFqJdP0DbgcEb8CBir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1922%2Bntw8dfXTrj3KtwDgbIGXBF%2BPtUgNgYgOLsNfWb3pOnpxX7lzZv4UKCsrOZgAuHGDwaIppq3oFtZwZRPruzn5%2FV2Hcn6NJxiU%2F8PyxXNII6KvO9AD0bKkpieQV9lfK%2FzHz6ysPLISbaf2z8NFuhCwoTXv4pZskKhxHgbG%2BLK6DnjJt2GDU3gllTKACNmSFQV3kgp4VuvjBEJzNTbmJ39Drtu3rgG1dr1OKEZpzUZKNdY5FpX6%2BTTAGBvGtFxEURwtpNozAbk2RUWtfrH1yOplivAKYOyjQ68esOu7uan%2BBlSQSa6clpfN8rtCmlQIyHadG92YlUybxuT%2BKn%2Fc2fHJzpWFRsiUtRNb1APOZQ4HmcJtRtcNHYWdfA0gGbmwMyFNi8aXqYiw5c5BjT6j7DdLJ5tpkseHzmFlhV2gnEVpvszGiD1z4LmkGoX31%2BLijcrbhxI9cT00MX2eK0Pw60GloEBWdTmLNhGjIq4LPR1YvIee7UjkBHDWpgb5OV9h%2FHJ4bBJjPZH1NlHu1d%2BFXEAsRGj1CGHViMkaqnlTxExtnpiqtI79GL4LlBip4n2ediggq5jm5JuNzVtjes6hLNO%2BQIWOoQw%2BOazNnAf%2FOdq8D%2FIVrVfC2tvh%2FwU4rPmWf8ZEqjE5c0s2HIw39jsvgY6pgGKByD8Ipb2%2FiI9NwPIoReEmlEYqw3LfjSyhpRKK3Lq1H%2BTfnaloYS6Lx2c3NpdYN%2FmLo8MA1FdanE2d97ZdxqfXiv2yaLhPd1AaGfexQhHVED5a%2Fy1rlnPlwZlmJpY99JRC2NXw0%2BWIud158mhdI5Nu6LFJQBPIsiCAMEKdCRV%2BBgj%2FDdGDJnJpAwzTkZToGf75e2GwxjfOKFjSI4CkOcF3lx41%2B79&X-Amz-Signature=26e843f415cb2494f733d789b0f7228e01f187234fa2b3fb020a8a5424727cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675H6SVX7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH0qCeC%2FaXWGXP0q61N%2Fjm3ors0SioiTqX6Ebpw16rdZAiAL%2F9hwwjzr41GDXyJj%2BIifX9QpfQFqJdP0DbgcEb8CBir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1922%2Bntw8dfXTrj3KtwDgbIGXBF%2BPtUgNgYgOLsNfWb3pOnpxX7lzZv4UKCsrOZgAuHGDwaIppq3oFtZwZRPruzn5%2FV2Hcn6NJxiU%2F8PyxXNII6KvO9AD0bKkpieQV9lfK%2FzHz6ysPLISbaf2z8NFuhCwoTXv4pZskKhxHgbG%2BLK6DnjJt2GDU3gllTKACNmSFQV3kgp4VuvjBEJzNTbmJ39Drtu3rgG1dr1OKEZpzUZKNdY5FpX6%2BTTAGBvGtFxEURwtpNozAbk2RUWtfrH1yOplivAKYOyjQ68esOu7uan%2BBlSQSa6clpfN8rtCmlQIyHadG92YlUybxuT%2BKn%2Fc2fHJzpWFRsiUtRNb1APOZQ4HmcJtRtcNHYWdfA0gGbmwMyFNi8aXqYiw5c5BjT6j7DdLJ5tpkseHzmFlhV2gnEVpvszGiD1z4LmkGoX31%2BLijcrbhxI9cT00MX2eK0Pw60GloEBWdTmLNhGjIq4LPR1YvIee7UjkBHDWpgb5OV9h%2FHJ4bBJjPZH1NlHu1d%2BFXEAsRGj1CGHViMkaqnlTxExtnpiqtI79GL4LlBip4n2ediggq5jm5JuNzVtjes6hLNO%2BQIWOoQw%2BOazNnAf%2FOdq8D%2FIVrVfC2tvh%2FwU4rPmWf8ZEqjE5c0s2HIw39jsvgY6pgGKByD8Ipb2%2FiI9NwPIoReEmlEYqw3LfjSyhpRKK3Lq1H%2BTfnaloYS6Lx2c3NpdYN%2FmLo8MA1FdanE2d97ZdxqfXiv2yaLhPd1AaGfexQhHVED5a%2Fy1rlnPlwZlmJpY99JRC2NXw0%2BWIud158mhdI5Nu6LFJQBPIsiCAMEKdCRV%2BBgj%2FDdGDJnJpAwzTkZToGf75e2GwxjfOKFjSI4CkOcF3lx41%2B79&X-Amz-Signature=4340f595b4a0eebb715d45815765acebb144d3428019c0e1e06a8bc00b59434f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675H6SVX7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH0qCeC%2FaXWGXP0q61N%2Fjm3ors0SioiTqX6Ebpw16rdZAiAL%2F9hwwjzr41GDXyJj%2BIifX9QpfQFqJdP0DbgcEb8CBir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1922%2Bntw8dfXTrj3KtwDgbIGXBF%2BPtUgNgYgOLsNfWb3pOnpxX7lzZv4UKCsrOZgAuHGDwaIppq3oFtZwZRPruzn5%2FV2Hcn6NJxiU%2F8PyxXNII6KvO9AD0bKkpieQV9lfK%2FzHz6ysPLISbaf2z8NFuhCwoTXv4pZskKhxHgbG%2BLK6DnjJt2GDU3gllTKACNmSFQV3kgp4VuvjBEJzNTbmJ39Drtu3rgG1dr1OKEZpzUZKNdY5FpX6%2BTTAGBvGtFxEURwtpNozAbk2RUWtfrH1yOplivAKYOyjQ68esOu7uan%2BBlSQSa6clpfN8rtCmlQIyHadG92YlUybxuT%2BKn%2Fc2fHJzpWFRsiUtRNb1APOZQ4HmcJtRtcNHYWdfA0gGbmwMyFNi8aXqYiw5c5BjT6j7DdLJ5tpkseHzmFlhV2gnEVpvszGiD1z4LmkGoX31%2BLijcrbhxI9cT00MX2eK0Pw60GloEBWdTmLNhGjIq4LPR1YvIee7UjkBHDWpgb5OV9h%2FHJ4bBJjPZH1NlHu1d%2BFXEAsRGj1CGHViMkaqnlTxExtnpiqtI79GL4LlBip4n2ediggq5jm5JuNzVtjes6hLNO%2BQIWOoQw%2BOazNnAf%2FOdq8D%2FIVrVfC2tvh%2FwU4rPmWf8ZEqjE5c0s2HIw39jsvgY6pgGKByD8Ipb2%2FiI9NwPIoReEmlEYqw3LfjSyhpRKK3Lq1H%2BTfnaloYS6Lx2c3NpdYN%2FmLo8MA1FdanE2d97ZdxqfXiv2yaLhPd1AaGfexQhHVED5a%2Fy1rlnPlwZlmJpY99JRC2NXw0%2BWIud158mhdI5Nu6LFJQBPIsiCAMEKdCRV%2BBgj%2FDdGDJnJpAwzTkZToGf75e2GwxjfOKFjSI4CkOcF3lx41%2B79&X-Amz-Signature=0dfee181977db1a5c3b5aa0b02e76f9fc8a2fbd64ecf76c13a27ad2cb65a3ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675H6SVX7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIH0qCeC%2FaXWGXP0q61N%2Fjm3ors0SioiTqX6Ebpw16rdZAiAL%2F9hwwjzr41GDXyJj%2BIifX9QpfQFqJdP0DbgcEb8CBir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1922%2Bntw8dfXTrj3KtwDgbIGXBF%2BPtUgNgYgOLsNfWb3pOnpxX7lzZv4UKCsrOZgAuHGDwaIppq3oFtZwZRPruzn5%2FV2Hcn6NJxiU%2F8PyxXNII6KvO9AD0bKkpieQV9lfK%2FzHz6ysPLISbaf2z8NFuhCwoTXv4pZskKhxHgbG%2BLK6DnjJt2GDU3gllTKACNmSFQV3kgp4VuvjBEJzNTbmJ39Drtu3rgG1dr1OKEZpzUZKNdY5FpX6%2BTTAGBvGtFxEURwtpNozAbk2RUWtfrH1yOplivAKYOyjQ68esOu7uan%2BBlSQSa6clpfN8rtCmlQIyHadG92YlUybxuT%2BKn%2Fc2fHJzpWFRsiUtRNb1APOZQ4HmcJtRtcNHYWdfA0gGbmwMyFNi8aXqYiw5c5BjT6j7DdLJ5tpkseHzmFlhV2gnEVpvszGiD1z4LmkGoX31%2BLijcrbhxI9cT00MX2eK0Pw60GloEBWdTmLNhGjIq4LPR1YvIee7UjkBHDWpgb5OV9h%2FHJ4bBJjPZH1NlHu1d%2BFXEAsRGj1CGHViMkaqnlTxExtnpiqtI79GL4LlBip4n2ediggq5jm5JuNzVtjes6hLNO%2BQIWOoQw%2BOazNnAf%2FOdq8D%2FIVrVfC2tvh%2FwU4rPmWf8ZEqjE5c0s2HIw39jsvgY6pgGKByD8Ipb2%2FiI9NwPIoReEmlEYqw3LfjSyhpRKK3Lq1H%2BTfnaloYS6Lx2c3NpdYN%2FmLo8MA1FdanE2d97ZdxqfXiv2yaLhPd1AaGfexQhHVED5a%2Fy1rlnPlwZlmJpY99JRC2NXw0%2BWIud158mhdI5Nu6LFJQBPIsiCAMEKdCRV%2BBgj%2FDdGDJnJpAwzTkZToGf75e2GwxjfOKFjSI4CkOcF3lx41%2B79&X-Amz-Signature=03ce959c57c2d7e4d0d9efde436dcb3b74452b2f45d109daf34472e6c8563f3b&X-Amz-SignedHeaders=host&x-id=GetObject)
