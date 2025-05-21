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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6TGOFE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGb1VuarDlIEuhH%2FKzsNlsX0knLw0TtlrMOEa68n7VSDAiBwp1jxJ58SjQDPd67Y7x4ATrL5vx3elPavWX2BVcvAFCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0HvfB5lvd7wnIVLKtwD9Mj2JtTVQUAsUPDoKwUhBxjsxDEzQl4WLf1QExov2VE%2F0vfpgHhiNEb48cJYbZ7%2BmnXTUGBDx7ZiY0GOxTE0h1LCVpi2skIiVRuZKuN49s6Izgtn0EhlOoMUosdEEADPRaNNRTzX%2BZqSvJTVbywN%2BYO4QJ%2BGvDHwEgkyTi1aSrMAOEyBSYKPYzJ7dChsxUegNVIrsMBrYURSLmClSY2hkomr1j2J4SzDYW%2BkIWzCMnfJUPPfv7JPEZYdwStqMoaaG9e8Giy0J%2Beg4of18MZtpsT6dIz1CSp4xvWCOq9ilsF0g8GJfcr%2F8TQco%2BBLEtE0O5tzVoEuiVBLtSpVlYAxltm8Zz07B25GEBCaiQ%2FY6MlI%2FZ6AjRa8zMXRNd9dsNGMC489J2l9oXYdC%2BlPa9lRNSTTVyWPh7Ad92%2FoKmMBm0gD7c%2BMYbp44OVWm0BLZxE6GyWmEKnFKS6sw5VFKv5M56y3byzON1fWUWf3Ty4NHTtVZgtdCFv2I6xaGl7s06bMv6MN4nywekwDnn0hCw6gSefcKmGBOwWgtJxEnJv%2BH1F1AizMtyeETyTq4nEY8m2utf7vQpeHONwy7zr%2B3RbgbbK9wCpEqLUSPDfZZniIRU%2BW2soZqe9wB1uxvRAwjoe5wQY6pgGXtb3iDFL9Gxy19eNJS562aLmeTDQ%2BXh1shqwiinCJk5A%2Bxj3aoBCSSS98ip1w9KGJr%2BEcL1M61ekKIE6Oyb5%2FiE4j%2BhFAINHBlFA2GmMnvVeXQRIuEWySd55oesfkZ8%2FfvM31VMv7CHQaJdw5820YvxkSs94buauBV3qdZOvWyUhdou%2B8cov4v1na0dBeaeSzMYe0pTL5UoWXUESacSbp5fzTWelz&X-Amz-Signature=e6a99641911f6f78cf094410bd0355d3840da0fd01d6534c0e520128df465acc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6TGOFE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGb1VuarDlIEuhH%2FKzsNlsX0knLw0TtlrMOEa68n7VSDAiBwp1jxJ58SjQDPd67Y7x4ATrL5vx3elPavWX2BVcvAFCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0HvfB5lvd7wnIVLKtwD9Mj2JtTVQUAsUPDoKwUhBxjsxDEzQl4WLf1QExov2VE%2F0vfpgHhiNEb48cJYbZ7%2BmnXTUGBDx7ZiY0GOxTE0h1LCVpi2skIiVRuZKuN49s6Izgtn0EhlOoMUosdEEADPRaNNRTzX%2BZqSvJTVbywN%2BYO4QJ%2BGvDHwEgkyTi1aSrMAOEyBSYKPYzJ7dChsxUegNVIrsMBrYURSLmClSY2hkomr1j2J4SzDYW%2BkIWzCMnfJUPPfv7JPEZYdwStqMoaaG9e8Giy0J%2Beg4of18MZtpsT6dIz1CSp4xvWCOq9ilsF0g8GJfcr%2F8TQco%2BBLEtE0O5tzVoEuiVBLtSpVlYAxltm8Zz07B25GEBCaiQ%2FY6MlI%2FZ6AjRa8zMXRNd9dsNGMC489J2l9oXYdC%2BlPa9lRNSTTVyWPh7Ad92%2FoKmMBm0gD7c%2BMYbp44OVWm0BLZxE6GyWmEKnFKS6sw5VFKv5M56y3byzON1fWUWf3Ty4NHTtVZgtdCFv2I6xaGl7s06bMv6MN4nywekwDnn0hCw6gSefcKmGBOwWgtJxEnJv%2BH1F1AizMtyeETyTq4nEY8m2utf7vQpeHONwy7zr%2B3RbgbbK9wCpEqLUSPDfZZniIRU%2BW2soZqe9wB1uxvRAwjoe5wQY6pgGXtb3iDFL9Gxy19eNJS562aLmeTDQ%2BXh1shqwiinCJk5A%2Bxj3aoBCSSS98ip1w9KGJr%2BEcL1M61ekKIE6Oyb5%2FiE4j%2BhFAINHBlFA2GmMnvVeXQRIuEWySd55oesfkZ8%2FfvM31VMv7CHQaJdw5820YvxkSs94buauBV3qdZOvWyUhdou%2B8cov4v1na0dBeaeSzMYe0pTL5UoWXUESacSbp5fzTWelz&X-Amz-Signature=20652618c16b0aa1173d04099666600c75b518c8bd813acf22e03a43badb3047&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6TGOFE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGb1VuarDlIEuhH%2FKzsNlsX0knLw0TtlrMOEa68n7VSDAiBwp1jxJ58SjQDPd67Y7x4ATrL5vx3elPavWX2BVcvAFCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0HvfB5lvd7wnIVLKtwD9Mj2JtTVQUAsUPDoKwUhBxjsxDEzQl4WLf1QExov2VE%2F0vfpgHhiNEb48cJYbZ7%2BmnXTUGBDx7ZiY0GOxTE0h1LCVpi2skIiVRuZKuN49s6Izgtn0EhlOoMUosdEEADPRaNNRTzX%2BZqSvJTVbywN%2BYO4QJ%2BGvDHwEgkyTi1aSrMAOEyBSYKPYzJ7dChsxUegNVIrsMBrYURSLmClSY2hkomr1j2J4SzDYW%2BkIWzCMnfJUPPfv7JPEZYdwStqMoaaG9e8Giy0J%2Beg4of18MZtpsT6dIz1CSp4xvWCOq9ilsF0g8GJfcr%2F8TQco%2BBLEtE0O5tzVoEuiVBLtSpVlYAxltm8Zz07B25GEBCaiQ%2FY6MlI%2FZ6AjRa8zMXRNd9dsNGMC489J2l9oXYdC%2BlPa9lRNSTTVyWPh7Ad92%2FoKmMBm0gD7c%2BMYbp44OVWm0BLZxE6GyWmEKnFKS6sw5VFKv5M56y3byzON1fWUWf3Ty4NHTtVZgtdCFv2I6xaGl7s06bMv6MN4nywekwDnn0hCw6gSefcKmGBOwWgtJxEnJv%2BH1F1AizMtyeETyTq4nEY8m2utf7vQpeHONwy7zr%2B3RbgbbK9wCpEqLUSPDfZZniIRU%2BW2soZqe9wB1uxvRAwjoe5wQY6pgGXtb3iDFL9Gxy19eNJS562aLmeTDQ%2BXh1shqwiinCJk5A%2Bxj3aoBCSSS98ip1w9KGJr%2BEcL1M61ekKIE6Oyb5%2FiE4j%2BhFAINHBlFA2GmMnvVeXQRIuEWySd55oesfkZ8%2FfvM31VMv7CHQaJdw5820YvxkSs94buauBV3qdZOvWyUhdou%2B8cov4v1na0dBeaeSzMYe0pTL5UoWXUESacSbp5fzTWelz&X-Amz-Signature=68a62b9c6204fb82dd50b326e68667a455340c7e79cf95613b3ea4842c6e4ca8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6TGOFE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGb1VuarDlIEuhH%2FKzsNlsX0knLw0TtlrMOEa68n7VSDAiBwp1jxJ58SjQDPd67Y7x4ATrL5vx3elPavWX2BVcvAFCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0HvfB5lvd7wnIVLKtwD9Mj2JtTVQUAsUPDoKwUhBxjsxDEzQl4WLf1QExov2VE%2F0vfpgHhiNEb48cJYbZ7%2BmnXTUGBDx7ZiY0GOxTE0h1LCVpi2skIiVRuZKuN49s6Izgtn0EhlOoMUosdEEADPRaNNRTzX%2BZqSvJTVbywN%2BYO4QJ%2BGvDHwEgkyTi1aSrMAOEyBSYKPYzJ7dChsxUegNVIrsMBrYURSLmClSY2hkomr1j2J4SzDYW%2BkIWzCMnfJUPPfv7JPEZYdwStqMoaaG9e8Giy0J%2Beg4of18MZtpsT6dIz1CSp4xvWCOq9ilsF0g8GJfcr%2F8TQco%2BBLEtE0O5tzVoEuiVBLtSpVlYAxltm8Zz07B25GEBCaiQ%2FY6MlI%2FZ6AjRa8zMXRNd9dsNGMC489J2l9oXYdC%2BlPa9lRNSTTVyWPh7Ad92%2FoKmMBm0gD7c%2BMYbp44OVWm0BLZxE6GyWmEKnFKS6sw5VFKv5M56y3byzON1fWUWf3Ty4NHTtVZgtdCFv2I6xaGl7s06bMv6MN4nywekwDnn0hCw6gSefcKmGBOwWgtJxEnJv%2BH1F1AizMtyeETyTq4nEY8m2utf7vQpeHONwy7zr%2B3RbgbbK9wCpEqLUSPDfZZniIRU%2BW2soZqe9wB1uxvRAwjoe5wQY6pgGXtb3iDFL9Gxy19eNJS562aLmeTDQ%2BXh1shqwiinCJk5A%2Bxj3aoBCSSS98ip1w9KGJr%2BEcL1M61ekKIE6Oyb5%2FiE4j%2BhFAINHBlFA2GmMnvVeXQRIuEWySd55oesfkZ8%2FfvM31VMv7CHQaJdw5820YvxkSs94buauBV3qdZOvWyUhdou%2B8cov4v1na0dBeaeSzMYe0pTL5UoWXUESacSbp5fzTWelz&X-Amz-Signature=d41acae50e8ab389116680d5f152b8ae33cc8b8fbc2b8a2fc8a30f09f16694fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6TGOFE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGb1VuarDlIEuhH%2FKzsNlsX0knLw0TtlrMOEa68n7VSDAiBwp1jxJ58SjQDPd67Y7x4ATrL5vx3elPavWX2BVcvAFCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0HvfB5lvd7wnIVLKtwD9Mj2JtTVQUAsUPDoKwUhBxjsxDEzQl4WLf1QExov2VE%2F0vfpgHhiNEb48cJYbZ7%2BmnXTUGBDx7ZiY0GOxTE0h1LCVpi2skIiVRuZKuN49s6Izgtn0EhlOoMUosdEEADPRaNNRTzX%2BZqSvJTVbywN%2BYO4QJ%2BGvDHwEgkyTi1aSrMAOEyBSYKPYzJ7dChsxUegNVIrsMBrYURSLmClSY2hkomr1j2J4SzDYW%2BkIWzCMnfJUPPfv7JPEZYdwStqMoaaG9e8Giy0J%2Beg4of18MZtpsT6dIz1CSp4xvWCOq9ilsF0g8GJfcr%2F8TQco%2BBLEtE0O5tzVoEuiVBLtSpVlYAxltm8Zz07B25GEBCaiQ%2FY6MlI%2FZ6AjRa8zMXRNd9dsNGMC489J2l9oXYdC%2BlPa9lRNSTTVyWPh7Ad92%2FoKmMBm0gD7c%2BMYbp44OVWm0BLZxE6GyWmEKnFKS6sw5VFKv5M56y3byzON1fWUWf3Ty4NHTtVZgtdCFv2I6xaGl7s06bMv6MN4nywekwDnn0hCw6gSefcKmGBOwWgtJxEnJv%2BH1F1AizMtyeETyTq4nEY8m2utf7vQpeHONwy7zr%2B3RbgbbK9wCpEqLUSPDfZZniIRU%2BW2soZqe9wB1uxvRAwjoe5wQY6pgGXtb3iDFL9Gxy19eNJS562aLmeTDQ%2BXh1shqwiinCJk5A%2Bxj3aoBCSSS98ip1w9KGJr%2BEcL1M61ekKIE6Oyb5%2FiE4j%2BhFAINHBlFA2GmMnvVeXQRIuEWySd55oesfkZ8%2FfvM31VMv7CHQaJdw5820YvxkSs94buauBV3qdZOvWyUhdou%2B8cov4v1na0dBeaeSzMYe0pTL5UoWXUESacSbp5fzTWelz&X-Amz-Signature=9512b2e4c6a27b2cbd68d17a1e1624e9f206a808381945935ed67fbcef338352&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF6TGOFE%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGb1VuarDlIEuhH%2FKzsNlsX0knLw0TtlrMOEa68n7VSDAiBwp1jxJ58SjQDPd67Y7x4ATrL5vx3elPavWX2BVcvAFCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK0HvfB5lvd7wnIVLKtwD9Mj2JtTVQUAsUPDoKwUhBxjsxDEzQl4WLf1QExov2VE%2F0vfpgHhiNEb48cJYbZ7%2BmnXTUGBDx7ZiY0GOxTE0h1LCVpi2skIiVRuZKuN49s6Izgtn0EhlOoMUosdEEADPRaNNRTzX%2BZqSvJTVbywN%2BYO4QJ%2BGvDHwEgkyTi1aSrMAOEyBSYKPYzJ7dChsxUegNVIrsMBrYURSLmClSY2hkomr1j2J4SzDYW%2BkIWzCMnfJUPPfv7JPEZYdwStqMoaaG9e8Giy0J%2Beg4of18MZtpsT6dIz1CSp4xvWCOq9ilsF0g8GJfcr%2F8TQco%2BBLEtE0O5tzVoEuiVBLtSpVlYAxltm8Zz07B25GEBCaiQ%2FY6MlI%2FZ6AjRa8zMXRNd9dsNGMC489J2l9oXYdC%2BlPa9lRNSTTVyWPh7Ad92%2FoKmMBm0gD7c%2BMYbp44OVWm0BLZxE6GyWmEKnFKS6sw5VFKv5M56y3byzON1fWUWf3Ty4NHTtVZgtdCFv2I6xaGl7s06bMv6MN4nywekwDnn0hCw6gSefcKmGBOwWgtJxEnJv%2BH1F1AizMtyeETyTq4nEY8m2utf7vQpeHONwy7zr%2B3RbgbbK9wCpEqLUSPDfZZniIRU%2BW2soZqe9wB1uxvRAwjoe5wQY6pgGXtb3iDFL9Gxy19eNJS562aLmeTDQ%2BXh1shqwiinCJk5A%2Bxj3aoBCSSS98ip1w9KGJr%2BEcL1M61ekKIE6Oyb5%2FiE4j%2BhFAINHBlFA2GmMnvVeXQRIuEWySd55oesfkZ8%2FfvM31VMv7CHQaJdw5820YvxkSs94buauBV3qdZOvWyUhdou%2B8cov4v1na0dBeaeSzMYe0pTL5UoWXUESacSbp5fzTWelz&X-Amz-Signature=1f9dfd4c589455750109b3d5eb9891e2249dd39e45133b9cadae8f30bca4ff07&X-Amz-SignedHeaders=host&x-id=GetObject)
