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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYOL5X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCPm6CBb%2Bpav9NWpYNMBIHddVqWws7sTTqtqa%2BB7vjg7wIgeqKz8iNDW4cUUIfY6MdfNEYnc%2FOjZsO1vGtjuE6T0FMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0KzK%2FfDX6XWh%2FWlircAy7pmYWooFv1Go4iaX79pn0jponuRe%2F1gsvI8Tx56Le1jK9dmh1vpSPSYTxIJkHcoW3oULZQ62UaqaWuexteHDoi0mNYLthTfZUCeUne2xaDjfrtlg2hR9wvf%2Fbmgna2%2BPmRmKVD%2BTXzFgiCw9DTaGSyfX03F1FIhILaK7PFFD9lloCNiokq%2BD18zqNMWVQx0k1t8dSVYGKejEKzq%2B7K8R4G32iEooKX3D1owu4Ud0QOlQhDkkFoR%2FWeeo8mZpl6ibJ7NAooUCcqwyWtzfRF4e5M3l%2FasmREtTsmtewgeAEFJ9fI8t2nlrlVvDNb5MwhwSgwNCpsweztmH5HLNCYbI5NQFgEP3utE%2BOdErS7DrSKYrsDzff14lkCWjtfNWkmXqSjwRclApFzQzX%2FW0CTyD%2F9a1B6J01ALUjlK5AXSnfmsla55JURlR%2FGkTLDHne8%2FsdaNBRaQRmwm1MIsJy4sbsxe68yIx4HpoL0v7%2BZoyziiVLS6HAFde4odFBNaYy4qThZRACnmwowQwLigrDu%2BPAfQ91i%2Bj88nhg%2FGTZcuYyVotE6ZaPc4RNRD0n1Fm6%2F74M6Vyl1rpwWnXKIE4EM%2BpAoILz0v7czUhkGocusRlq8XcgJT9sBG3FbgE8WMOaN1sAGOqUBivi0%2BhJUOQSQQbUE7lm8XHw9sqpi2FD3u4yOeGMTl15lnrxUFRFC%2B2bLqsIZPha0hu6aMIhMBqbGGrDV%2FPCZl7pxC5tbNp4C5i6IIBKANWld6wvhlhoBKHZKx5PKMnvCq4a0SVIAb1k%2BefztE93GSMWmLg9vbmBJwDL3Lr4Wh%2BOzGpVv6Zi2tGfm0bfXIXJJo7Gt6Sf3jxW4LwKfgR%2FxqNRwm3CP&X-Amz-Signature=045931db0814aa5bb44d00f125f370621dc337dc2d440e36427a62e9fc330a79&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYOL5X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCPm6CBb%2Bpav9NWpYNMBIHddVqWws7sTTqtqa%2BB7vjg7wIgeqKz8iNDW4cUUIfY6MdfNEYnc%2FOjZsO1vGtjuE6T0FMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0KzK%2FfDX6XWh%2FWlircAy7pmYWooFv1Go4iaX79pn0jponuRe%2F1gsvI8Tx56Le1jK9dmh1vpSPSYTxIJkHcoW3oULZQ62UaqaWuexteHDoi0mNYLthTfZUCeUne2xaDjfrtlg2hR9wvf%2Fbmgna2%2BPmRmKVD%2BTXzFgiCw9DTaGSyfX03F1FIhILaK7PFFD9lloCNiokq%2BD18zqNMWVQx0k1t8dSVYGKejEKzq%2B7K8R4G32iEooKX3D1owu4Ud0QOlQhDkkFoR%2FWeeo8mZpl6ibJ7NAooUCcqwyWtzfRF4e5M3l%2FasmREtTsmtewgeAEFJ9fI8t2nlrlVvDNb5MwhwSgwNCpsweztmH5HLNCYbI5NQFgEP3utE%2BOdErS7DrSKYrsDzff14lkCWjtfNWkmXqSjwRclApFzQzX%2FW0CTyD%2F9a1B6J01ALUjlK5AXSnfmsla55JURlR%2FGkTLDHne8%2FsdaNBRaQRmwm1MIsJy4sbsxe68yIx4HpoL0v7%2BZoyziiVLS6HAFde4odFBNaYy4qThZRACnmwowQwLigrDu%2BPAfQ91i%2Bj88nhg%2FGTZcuYyVotE6ZaPc4RNRD0n1Fm6%2F74M6Vyl1rpwWnXKIE4EM%2BpAoILz0v7czUhkGocusRlq8XcgJT9sBG3FbgE8WMOaN1sAGOqUBivi0%2BhJUOQSQQbUE7lm8XHw9sqpi2FD3u4yOeGMTl15lnrxUFRFC%2B2bLqsIZPha0hu6aMIhMBqbGGrDV%2FPCZl7pxC5tbNp4C5i6IIBKANWld6wvhlhoBKHZKx5PKMnvCq4a0SVIAb1k%2BefztE93GSMWmLg9vbmBJwDL3Lr4Wh%2BOzGpVv6Zi2tGfm0bfXIXJJo7Gt6Sf3jxW4LwKfgR%2FxqNRwm3CP&X-Amz-Signature=edaa432020b300d47d278ad9ef57cdf6a01186337a966195fd5edaceea1f3b30&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYOL5X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCPm6CBb%2Bpav9NWpYNMBIHddVqWws7sTTqtqa%2BB7vjg7wIgeqKz8iNDW4cUUIfY6MdfNEYnc%2FOjZsO1vGtjuE6T0FMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0KzK%2FfDX6XWh%2FWlircAy7pmYWooFv1Go4iaX79pn0jponuRe%2F1gsvI8Tx56Le1jK9dmh1vpSPSYTxIJkHcoW3oULZQ62UaqaWuexteHDoi0mNYLthTfZUCeUne2xaDjfrtlg2hR9wvf%2Fbmgna2%2BPmRmKVD%2BTXzFgiCw9DTaGSyfX03F1FIhILaK7PFFD9lloCNiokq%2BD18zqNMWVQx0k1t8dSVYGKejEKzq%2B7K8R4G32iEooKX3D1owu4Ud0QOlQhDkkFoR%2FWeeo8mZpl6ibJ7NAooUCcqwyWtzfRF4e5M3l%2FasmREtTsmtewgeAEFJ9fI8t2nlrlVvDNb5MwhwSgwNCpsweztmH5HLNCYbI5NQFgEP3utE%2BOdErS7DrSKYrsDzff14lkCWjtfNWkmXqSjwRclApFzQzX%2FW0CTyD%2F9a1B6J01ALUjlK5AXSnfmsla55JURlR%2FGkTLDHne8%2FsdaNBRaQRmwm1MIsJy4sbsxe68yIx4HpoL0v7%2BZoyziiVLS6HAFde4odFBNaYy4qThZRACnmwowQwLigrDu%2BPAfQ91i%2Bj88nhg%2FGTZcuYyVotE6ZaPc4RNRD0n1Fm6%2F74M6Vyl1rpwWnXKIE4EM%2BpAoILz0v7czUhkGocusRlq8XcgJT9sBG3FbgE8WMOaN1sAGOqUBivi0%2BhJUOQSQQbUE7lm8XHw9sqpi2FD3u4yOeGMTl15lnrxUFRFC%2B2bLqsIZPha0hu6aMIhMBqbGGrDV%2FPCZl7pxC5tbNp4C5i6IIBKANWld6wvhlhoBKHZKx5PKMnvCq4a0SVIAb1k%2BefztE93GSMWmLg9vbmBJwDL3Lr4Wh%2BOzGpVv6Zi2tGfm0bfXIXJJo7Gt6Sf3jxW4LwKfgR%2FxqNRwm3CP&X-Amz-Signature=04b9dea5388f07407d847f90f90ae3ce18d7baf08f0ad30aa0b8f47f463bb085&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYOL5X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCPm6CBb%2Bpav9NWpYNMBIHddVqWws7sTTqtqa%2BB7vjg7wIgeqKz8iNDW4cUUIfY6MdfNEYnc%2FOjZsO1vGtjuE6T0FMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0KzK%2FfDX6XWh%2FWlircAy7pmYWooFv1Go4iaX79pn0jponuRe%2F1gsvI8Tx56Le1jK9dmh1vpSPSYTxIJkHcoW3oULZQ62UaqaWuexteHDoi0mNYLthTfZUCeUne2xaDjfrtlg2hR9wvf%2Fbmgna2%2BPmRmKVD%2BTXzFgiCw9DTaGSyfX03F1FIhILaK7PFFD9lloCNiokq%2BD18zqNMWVQx0k1t8dSVYGKejEKzq%2B7K8R4G32iEooKX3D1owu4Ud0QOlQhDkkFoR%2FWeeo8mZpl6ibJ7NAooUCcqwyWtzfRF4e5M3l%2FasmREtTsmtewgeAEFJ9fI8t2nlrlVvDNb5MwhwSgwNCpsweztmH5HLNCYbI5NQFgEP3utE%2BOdErS7DrSKYrsDzff14lkCWjtfNWkmXqSjwRclApFzQzX%2FW0CTyD%2F9a1B6J01ALUjlK5AXSnfmsla55JURlR%2FGkTLDHne8%2FsdaNBRaQRmwm1MIsJy4sbsxe68yIx4HpoL0v7%2BZoyziiVLS6HAFde4odFBNaYy4qThZRACnmwowQwLigrDu%2BPAfQ91i%2Bj88nhg%2FGTZcuYyVotE6ZaPc4RNRD0n1Fm6%2F74M6Vyl1rpwWnXKIE4EM%2BpAoILz0v7czUhkGocusRlq8XcgJT9sBG3FbgE8WMOaN1sAGOqUBivi0%2BhJUOQSQQbUE7lm8XHw9sqpi2FD3u4yOeGMTl15lnrxUFRFC%2B2bLqsIZPha0hu6aMIhMBqbGGrDV%2FPCZl7pxC5tbNp4C5i6IIBKANWld6wvhlhoBKHZKx5PKMnvCq4a0SVIAb1k%2BefztE93GSMWmLg9vbmBJwDL3Lr4Wh%2BOzGpVv6Zi2tGfm0bfXIXJJo7Gt6Sf3jxW4LwKfgR%2FxqNRwm3CP&X-Amz-Signature=67b869edab45f6a0a76ef61f013d7dc3b733d4920992c990d6864792fcd51f36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYOL5X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCPm6CBb%2Bpav9NWpYNMBIHddVqWws7sTTqtqa%2BB7vjg7wIgeqKz8iNDW4cUUIfY6MdfNEYnc%2FOjZsO1vGtjuE6T0FMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0KzK%2FfDX6XWh%2FWlircAy7pmYWooFv1Go4iaX79pn0jponuRe%2F1gsvI8Tx56Le1jK9dmh1vpSPSYTxIJkHcoW3oULZQ62UaqaWuexteHDoi0mNYLthTfZUCeUne2xaDjfrtlg2hR9wvf%2Fbmgna2%2BPmRmKVD%2BTXzFgiCw9DTaGSyfX03F1FIhILaK7PFFD9lloCNiokq%2BD18zqNMWVQx0k1t8dSVYGKejEKzq%2B7K8R4G32iEooKX3D1owu4Ud0QOlQhDkkFoR%2FWeeo8mZpl6ibJ7NAooUCcqwyWtzfRF4e5M3l%2FasmREtTsmtewgeAEFJ9fI8t2nlrlVvDNb5MwhwSgwNCpsweztmH5HLNCYbI5NQFgEP3utE%2BOdErS7DrSKYrsDzff14lkCWjtfNWkmXqSjwRclApFzQzX%2FW0CTyD%2F9a1B6J01ALUjlK5AXSnfmsla55JURlR%2FGkTLDHne8%2FsdaNBRaQRmwm1MIsJy4sbsxe68yIx4HpoL0v7%2BZoyziiVLS6HAFde4odFBNaYy4qThZRACnmwowQwLigrDu%2BPAfQ91i%2Bj88nhg%2FGTZcuYyVotE6ZaPc4RNRD0n1Fm6%2F74M6Vyl1rpwWnXKIE4EM%2BpAoILz0v7czUhkGocusRlq8XcgJT9sBG3FbgE8WMOaN1sAGOqUBivi0%2BhJUOQSQQbUE7lm8XHw9sqpi2FD3u4yOeGMTl15lnrxUFRFC%2B2bLqsIZPha0hu6aMIhMBqbGGrDV%2FPCZl7pxC5tbNp4C5i6IIBKANWld6wvhlhoBKHZKx5PKMnvCq4a0SVIAb1k%2BefztE93GSMWmLg9vbmBJwDL3Lr4Wh%2BOzGpVv6Zi2tGfm0bfXIXJJo7Gt6Sf3jxW4LwKfgR%2FxqNRwm3CP&X-Amz-Signature=94adc0db691ebbe22bfa94e8f6860ea73d88560027816b95d5b6b2f6dad3182c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVYOL5X%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T050838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCPm6CBb%2Bpav9NWpYNMBIHddVqWws7sTTqtqa%2BB7vjg7wIgeqKz8iNDW4cUUIfY6MdfNEYnc%2FOjZsO1vGtjuE6T0FMqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0KzK%2FfDX6XWh%2FWlircAy7pmYWooFv1Go4iaX79pn0jponuRe%2F1gsvI8Tx56Le1jK9dmh1vpSPSYTxIJkHcoW3oULZQ62UaqaWuexteHDoi0mNYLthTfZUCeUne2xaDjfrtlg2hR9wvf%2Fbmgna2%2BPmRmKVD%2BTXzFgiCw9DTaGSyfX03F1FIhILaK7PFFD9lloCNiokq%2BD18zqNMWVQx0k1t8dSVYGKejEKzq%2B7K8R4G32iEooKX3D1owu4Ud0QOlQhDkkFoR%2FWeeo8mZpl6ibJ7NAooUCcqwyWtzfRF4e5M3l%2FasmREtTsmtewgeAEFJ9fI8t2nlrlVvDNb5MwhwSgwNCpsweztmH5HLNCYbI5NQFgEP3utE%2BOdErS7DrSKYrsDzff14lkCWjtfNWkmXqSjwRclApFzQzX%2FW0CTyD%2F9a1B6J01ALUjlK5AXSnfmsla55JURlR%2FGkTLDHne8%2FsdaNBRaQRmwm1MIsJy4sbsxe68yIx4HpoL0v7%2BZoyziiVLS6HAFde4odFBNaYy4qThZRACnmwowQwLigrDu%2BPAfQ91i%2Bj88nhg%2FGTZcuYyVotE6ZaPc4RNRD0n1Fm6%2F74M6Vyl1rpwWnXKIE4EM%2BpAoILz0v7czUhkGocusRlq8XcgJT9sBG3FbgE8WMOaN1sAGOqUBivi0%2BhJUOQSQQbUE7lm8XHw9sqpi2FD3u4yOeGMTl15lnrxUFRFC%2B2bLqsIZPha0hu6aMIhMBqbGGrDV%2FPCZl7pxC5tbNp4C5i6IIBKANWld6wvhlhoBKHZKx5PKMnvCq4a0SVIAb1k%2BefztE93GSMWmLg9vbmBJwDL3Lr4Wh%2BOzGpVv6Zi2tGfm0bfXIXJJo7Gt6Sf3jxW4LwKfgR%2FxqNRwm3CP&X-Amz-Signature=afcada6eaec3730786ef67ce62c9bd336825e8a2d26968832ed3d700ff9a2cec&X-Amz-SignedHeaders=host&x-id=GetObject)
