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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2V24UC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFixD7t3S5wwV8Ir7PsTwr8AgyUjv1h3DmS9eabJbZN9AiB%2FLQ842PmAOvkAwzS0zsvneEu3lhSRBS44OoSbZNjezSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMA4Tz0yz%2FrB6Zt57KtwDZ96IQ%2BELlUO6tvbNmJNEaMpihTUP2P2ZkY6qUZan2W3Zm%2B7dSJA%2Frrsgkuw632MznKQZEnb%2Fllo3cE39CoCYUsM%2Fcdc%2FP5DEXe2R2f%2FmEseFno02XEdkvDYFf4GLZywelwQ6r%2F%2BX5ssHNtaKdCeUC8rnB3OGtREd4PFKYCSOlFC7ib0K0r%2F5ptbUXtoXQFbYeWUzk6Dv6IJbPMSZXky6X96hA8FyL61UDjRb99GScwLjdqYuhmuw4%2Be3GL30Jdca3Hru7qAwPAKbiQlpR7w4hhQrrXwrdzSTI7yrRxJEUmdQT3O7KpvNU7ksSwrXmucAIX%2F4d2HaEf33PzbPBikKsRmZJwfypvdjdps2QWMue9NfzFDJPXVrrYq6zE2UWjI6ScXKWb1qniCVoWo%2Bof7AD4b%2BblyhevKBZHNCgbAQmiD2t6cVAQzy3smC9pougMvGQAPDiOv5zTXL%2FrmwtZuKxWh1BUQOYNHBJBC4FQFKBWdNZcmE%2FgwbAhqGKgz6hyQinedKEy4g%2F5FR0F1JRQiVq0k5aprc9B8g8EF7FuAA9xXgygu2YYs4a10QCqvZOSi6olbe3UQb90tbG32PqEw%2B9%2BRMzZfhQctJ7X4bqWkH8GUNzGBBZFCXifxCoj0w0ebvvgY6pgGQ0aA0WwqRAHCmm2KSSSF78DxuvKn%2FGmEbUODvKh2yEpKLVoK5p%2BkKSMJambEJmrloWnzg5VdIiz0TKF1mxETG%2FbjoWrp6IB45m2qsdt6rq2yPouNVUmsOn1uGdL4hX9EuO4uggVEOveI7f4D580YfvVsG47kIaYhCRiNnIY7Bs2FhKmn99N%2Bs6OYoFhmKN1upfmZxMC0rCaIpf%2BjR%2BfjLzTq9692r&X-Amz-Signature=a63ec6aab332caaeb41b2de83c79f149e7088b7ac2f5a8dfdea2878ee67a2b22&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2V24UC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFixD7t3S5wwV8Ir7PsTwr8AgyUjv1h3DmS9eabJbZN9AiB%2FLQ842PmAOvkAwzS0zsvneEu3lhSRBS44OoSbZNjezSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMA4Tz0yz%2FrB6Zt57KtwDZ96IQ%2BELlUO6tvbNmJNEaMpihTUP2P2ZkY6qUZan2W3Zm%2B7dSJA%2Frrsgkuw632MznKQZEnb%2Fllo3cE39CoCYUsM%2Fcdc%2FP5DEXe2R2f%2FmEseFno02XEdkvDYFf4GLZywelwQ6r%2F%2BX5ssHNtaKdCeUC8rnB3OGtREd4PFKYCSOlFC7ib0K0r%2F5ptbUXtoXQFbYeWUzk6Dv6IJbPMSZXky6X96hA8FyL61UDjRb99GScwLjdqYuhmuw4%2Be3GL30Jdca3Hru7qAwPAKbiQlpR7w4hhQrrXwrdzSTI7yrRxJEUmdQT3O7KpvNU7ksSwrXmucAIX%2F4d2HaEf33PzbPBikKsRmZJwfypvdjdps2QWMue9NfzFDJPXVrrYq6zE2UWjI6ScXKWb1qniCVoWo%2Bof7AD4b%2BblyhevKBZHNCgbAQmiD2t6cVAQzy3smC9pougMvGQAPDiOv5zTXL%2FrmwtZuKxWh1BUQOYNHBJBC4FQFKBWdNZcmE%2FgwbAhqGKgz6hyQinedKEy4g%2F5FR0F1JRQiVq0k5aprc9B8g8EF7FuAA9xXgygu2YYs4a10QCqvZOSi6olbe3UQb90tbG32PqEw%2B9%2BRMzZfhQctJ7X4bqWkH8GUNzGBBZFCXifxCoj0w0ebvvgY6pgGQ0aA0WwqRAHCmm2KSSSF78DxuvKn%2FGmEbUODvKh2yEpKLVoK5p%2BkKSMJambEJmrloWnzg5VdIiz0TKF1mxETG%2FbjoWrp6IB45m2qsdt6rq2yPouNVUmsOn1uGdL4hX9EuO4uggVEOveI7f4D580YfvVsG47kIaYhCRiNnIY7Bs2FhKmn99N%2Bs6OYoFhmKN1upfmZxMC0rCaIpf%2BjR%2BfjLzTq9692r&X-Amz-Signature=7f13651b83383455aa04eb8db4843e35ea9e99a1651de8ca2e7517b3568f9c79&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2V24UC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFixD7t3S5wwV8Ir7PsTwr8AgyUjv1h3DmS9eabJbZN9AiB%2FLQ842PmAOvkAwzS0zsvneEu3lhSRBS44OoSbZNjezSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMA4Tz0yz%2FrB6Zt57KtwDZ96IQ%2BELlUO6tvbNmJNEaMpihTUP2P2ZkY6qUZan2W3Zm%2B7dSJA%2Frrsgkuw632MznKQZEnb%2Fllo3cE39CoCYUsM%2Fcdc%2FP5DEXe2R2f%2FmEseFno02XEdkvDYFf4GLZywelwQ6r%2F%2BX5ssHNtaKdCeUC8rnB3OGtREd4PFKYCSOlFC7ib0K0r%2F5ptbUXtoXQFbYeWUzk6Dv6IJbPMSZXky6X96hA8FyL61UDjRb99GScwLjdqYuhmuw4%2Be3GL30Jdca3Hru7qAwPAKbiQlpR7w4hhQrrXwrdzSTI7yrRxJEUmdQT3O7KpvNU7ksSwrXmucAIX%2F4d2HaEf33PzbPBikKsRmZJwfypvdjdps2QWMue9NfzFDJPXVrrYq6zE2UWjI6ScXKWb1qniCVoWo%2Bof7AD4b%2BblyhevKBZHNCgbAQmiD2t6cVAQzy3smC9pougMvGQAPDiOv5zTXL%2FrmwtZuKxWh1BUQOYNHBJBC4FQFKBWdNZcmE%2FgwbAhqGKgz6hyQinedKEy4g%2F5FR0F1JRQiVq0k5aprc9B8g8EF7FuAA9xXgygu2YYs4a10QCqvZOSi6olbe3UQb90tbG32PqEw%2B9%2BRMzZfhQctJ7X4bqWkH8GUNzGBBZFCXifxCoj0w0ebvvgY6pgGQ0aA0WwqRAHCmm2KSSSF78DxuvKn%2FGmEbUODvKh2yEpKLVoK5p%2BkKSMJambEJmrloWnzg5VdIiz0TKF1mxETG%2FbjoWrp6IB45m2qsdt6rq2yPouNVUmsOn1uGdL4hX9EuO4uggVEOveI7f4D580YfvVsG47kIaYhCRiNnIY7Bs2FhKmn99N%2Bs6OYoFhmKN1upfmZxMC0rCaIpf%2BjR%2BfjLzTq9692r&X-Amz-Signature=cd05cd8152b996d1a5b0a3dcebbfe944f8754d2b89c1c92727df2de25294574f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2V24UC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFixD7t3S5wwV8Ir7PsTwr8AgyUjv1h3DmS9eabJbZN9AiB%2FLQ842PmAOvkAwzS0zsvneEu3lhSRBS44OoSbZNjezSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMA4Tz0yz%2FrB6Zt57KtwDZ96IQ%2BELlUO6tvbNmJNEaMpihTUP2P2ZkY6qUZan2W3Zm%2B7dSJA%2Frrsgkuw632MznKQZEnb%2Fllo3cE39CoCYUsM%2Fcdc%2FP5DEXe2R2f%2FmEseFno02XEdkvDYFf4GLZywelwQ6r%2F%2BX5ssHNtaKdCeUC8rnB3OGtREd4PFKYCSOlFC7ib0K0r%2F5ptbUXtoXQFbYeWUzk6Dv6IJbPMSZXky6X96hA8FyL61UDjRb99GScwLjdqYuhmuw4%2Be3GL30Jdca3Hru7qAwPAKbiQlpR7w4hhQrrXwrdzSTI7yrRxJEUmdQT3O7KpvNU7ksSwrXmucAIX%2F4d2HaEf33PzbPBikKsRmZJwfypvdjdps2QWMue9NfzFDJPXVrrYq6zE2UWjI6ScXKWb1qniCVoWo%2Bof7AD4b%2BblyhevKBZHNCgbAQmiD2t6cVAQzy3smC9pougMvGQAPDiOv5zTXL%2FrmwtZuKxWh1BUQOYNHBJBC4FQFKBWdNZcmE%2FgwbAhqGKgz6hyQinedKEy4g%2F5FR0F1JRQiVq0k5aprc9B8g8EF7FuAA9xXgygu2YYs4a10QCqvZOSi6olbe3UQb90tbG32PqEw%2B9%2BRMzZfhQctJ7X4bqWkH8GUNzGBBZFCXifxCoj0w0ebvvgY6pgGQ0aA0WwqRAHCmm2KSSSF78DxuvKn%2FGmEbUODvKh2yEpKLVoK5p%2BkKSMJambEJmrloWnzg5VdIiz0TKF1mxETG%2FbjoWrp6IB45m2qsdt6rq2yPouNVUmsOn1uGdL4hX9EuO4uggVEOveI7f4D580YfvVsG47kIaYhCRiNnIY7Bs2FhKmn99N%2Bs6OYoFhmKN1upfmZxMC0rCaIpf%2BjR%2BfjLzTq9692r&X-Amz-Signature=dd61fa1c45a6ec053467de5ff131fc5512203046c9525c97560b33c075a693ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2V24UC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFixD7t3S5wwV8Ir7PsTwr8AgyUjv1h3DmS9eabJbZN9AiB%2FLQ842PmAOvkAwzS0zsvneEu3lhSRBS44OoSbZNjezSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMA4Tz0yz%2FrB6Zt57KtwDZ96IQ%2BELlUO6tvbNmJNEaMpihTUP2P2ZkY6qUZan2W3Zm%2B7dSJA%2Frrsgkuw632MznKQZEnb%2Fllo3cE39CoCYUsM%2Fcdc%2FP5DEXe2R2f%2FmEseFno02XEdkvDYFf4GLZywelwQ6r%2F%2BX5ssHNtaKdCeUC8rnB3OGtREd4PFKYCSOlFC7ib0K0r%2F5ptbUXtoXQFbYeWUzk6Dv6IJbPMSZXky6X96hA8FyL61UDjRb99GScwLjdqYuhmuw4%2Be3GL30Jdca3Hru7qAwPAKbiQlpR7w4hhQrrXwrdzSTI7yrRxJEUmdQT3O7KpvNU7ksSwrXmucAIX%2F4d2HaEf33PzbPBikKsRmZJwfypvdjdps2QWMue9NfzFDJPXVrrYq6zE2UWjI6ScXKWb1qniCVoWo%2Bof7AD4b%2BblyhevKBZHNCgbAQmiD2t6cVAQzy3smC9pougMvGQAPDiOv5zTXL%2FrmwtZuKxWh1BUQOYNHBJBC4FQFKBWdNZcmE%2FgwbAhqGKgz6hyQinedKEy4g%2F5FR0F1JRQiVq0k5aprc9B8g8EF7FuAA9xXgygu2YYs4a10QCqvZOSi6olbe3UQb90tbG32PqEw%2B9%2BRMzZfhQctJ7X4bqWkH8GUNzGBBZFCXifxCoj0w0ebvvgY6pgGQ0aA0WwqRAHCmm2KSSSF78DxuvKn%2FGmEbUODvKh2yEpKLVoK5p%2BkKSMJambEJmrloWnzg5VdIiz0TKF1mxETG%2FbjoWrp6IB45m2qsdt6rq2yPouNVUmsOn1uGdL4hX9EuO4uggVEOveI7f4D580YfvVsG47kIaYhCRiNnIY7Bs2FhKmn99N%2Bs6OYoFhmKN1upfmZxMC0rCaIpf%2BjR%2BfjLzTq9692r&X-Amz-Signature=5f410e8cb3de08abdbf3c114f973969371d709c743fded649c2cde69e00301f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2V24UC%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIFixD7t3S5wwV8Ir7PsTwr8AgyUjv1h3DmS9eabJbZN9AiB%2FLQ842PmAOvkAwzS0zsvneEu3lhSRBS44OoSbZNjezSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMA4Tz0yz%2FrB6Zt57KtwDZ96IQ%2BELlUO6tvbNmJNEaMpihTUP2P2ZkY6qUZan2W3Zm%2B7dSJA%2Frrsgkuw632MznKQZEnb%2Fllo3cE39CoCYUsM%2Fcdc%2FP5DEXe2R2f%2FmEseFno02XEdkvDYFf4GLZywelwQ6r%2F%2BX5ssHNtaKdCeUC8rnB3OGtREd4PFKYCSOlFC7ib0K0r%2F5ptbUXtoXQFbYeWUzk6Dv6IJbPMSZXky6X96hA8FyL61UDjRb99GScwLjdqYuhmuw4%2Be3GL30Jdca3Hru7qAwPAKbiQlpR7w4hhQrrXwrdzSTI7yrRxJEUmdQT3O7KpvNU7ksSwrXmucAIX%2F4d2HaEf33PzbPBikKsRmZJwfypvdjdps2QWMue9NfzFDJPXVrrYq6zE2UWjI6ScXKWb1qniCVoWo%2Bof7AD4b%2BblyhevKBZHNCgbAQmiD2t6cVAQzy3smC9pougMvGQAPDiOv5zTXL%2FrmwtZuKxWh1BUQOYNHBJBC4FQFKBWdNZcmE%2FgwbAhqGKgz6hyQinedKEy4g%2F5FR0F1JRQiVq0k5aprc9B8g8EF7FuAA9xXgygu2YYs4a10QCqvZOSi6olbe3UQb90tbG32PqEw%2B9%2BRMzZfhQctJ7X4bqWkH8GUNzGBBZFCXifxCoj0w0ebvvgY6pgGQ0aA0WwqRAHCmm2KSSSF78DxuvKn%2FGmEbUODvKh2yEpKLVoK5p%2BkKSMJambEJmrloWnzg5VdIiz0TKF1mxETG%2FbjoWrp6IB45m2qsdt6rq2yPouNVUmsOn1uGdL4hX9EuO4uggVEOveI7f4D580YfvVsG47kIaYhCRiNnIY7Bs2FhKmn99N%2Bs6OYoFhmKN1upfmZxMC0rCaIpf%2BjR%2BfjLzTq9692r&X-Amz-Signature=8f4a8644e8d592e3c0398e361df930b119105ac1be7dd3f82c462d19ed741eb8&X-Amz-SignedHeaders=host&x-id=GetObject)
