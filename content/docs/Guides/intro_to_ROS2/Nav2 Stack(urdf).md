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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25QBYVE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlkpeJG2flarsymzrtOuFyAvZxNTMis2DnNIkT5RYAgIhAPV86lJb0HTs%2B8njHG7x9BxtwZky7Qaumhy1cOPZ1pCPKv8DCGMQABoMNjM3NDIzMTgzODA1Igz7gFHY%2Fwusx8vVzBsq3AMgirz4cWELy3C9cTCp7HgKl9DLNWpYzT%2BpUCMN1lM5zTv3G1Ij8tVgMqnbiGWjRkh%2FJzY%2FjSc9XqhibSDcdP5PqI%2FrGG2jkQZRbWyw%2BKYrgm4dgGTHqLE28PZTRtuZ7ahGCLVUON9QACT4ljA%2B4Enb02THuAXEpRu1ozvWsw4TqDEaWuKU4X2AbKJc%2B4%2BLmVALtpaLA4fk5uu4CsUqKTHW%2BrDnRRedAgt7cn3mbJVhBzEzaD7JuM6GEitzejJSVBDxh%2FEABKYriwXTsiLLr4gKU9VMDFXWOtCnYja%2B03Rm2T3gtr%2BU62v8PmUdPMiRjf1Xi9Z85k62Y%2F%2BXXZL2H2OcVL80QLzx4v1dtVPkY4fiCr%2BGblOqf8Y25IpbWBULkv7oc5teVG3yMUObc3KU3Giif6tpd6BJIrgtXegRDv3KjjNKiDjUf3mLimqDhltToPxWoDKHMe3zbU8W3Rdan1UxAy4n520StbRY7y5jAV22PYjYzxgzRpj5%2FhTjq2PImQ%2Fcgyh%2B%2F%2FklKGpbx5EfDSiSH3JRVeV7FyAY7luK%2F00pmbua1ahp29k34Us3XS0w6JM%2BcmDpL9Ow68Oa3W%2FrAHq6Qlt9dTPfX108gy7vq7srwPI%2BsHzr9IIGQSHIfzD%2Bv5u%2FBjqkAY7qI0MIMaRq5UDBe9rDTl0S2A%2BwIItjECKZWZiEmP2xJNyM4aOVbT9ItRTXKJp8FsFQODgC8kdKSt90p27k7fxMFX7AVuE70I974Ss7M3waEkUBasg4HevWKzXR75IA7C25KhRYfnFeJ0cOtPCVPrUWv4%2B56KJU621Tn4OFDX2ixpHGfig5sZxiicRYxBADHa7J%2F31hqaVuwtn99FarOUM48mwi&X-Amz-Signature=7a04f2ceced19f24d6808d067a87daac0a65cf418234306c43fe057a451c71f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25QBYVE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlkpeJG2flarsymzrtOuFyAvZxNTMis2DnNIkT5RYAgIhAPV86lJb0HTs%2B8njHG7x9BxtwZky7Qaumhy1cOPZ1pCPKv8DCGMQABoMNjM3NDIzMTgzODA1Igz7gFHY%2Fwusx8vVzBsq3AMgirz4cWELy3C9cTCp7HgKl9DLNWpYzT%2BpUCMN1lM5zTv3G1Ij8tVgMqnbiGWjRkh%2FJzY%2FjSc9XqhibSDcdP5PqI%2FrGG2jkQZRbWyw%2BKYrgm4dgGTHqLE28PZTRtuZ7ahGCLVUON9QACT4ljA%2B4Enb02THuAXEpRu1ozvWsw4TqDEaWuKU4X2AbKJc%2B4%2BLmVALtpaLA4fk5uu4CsUqKTHW%2BrDnRRedAgt7cn3mbJVhBzEzaD7JuM6GEitzejJSVBDxh%2FEABKYriwXTsiLLr4gKU9VMDFXWOtCnYja%2B03Rm2T3gtr%2BU62v8PmUdPMiRjf1Xi9Z85k62Y%2F%2BXXZL2H2OcVL80QLzx4v1dtVPkY4fiCr%2BGblOqf8Y25IpbWBULkv7oc5teVG3yMUObc3KU3Giif6tpd6BJIrgtXegRDv3KjjNKiDjUf3mLimqDhltToPxWoDKHMe3zbU8W3Rdan1UxAy4n520StbRY7y5jAV22PYjYzxgzRpj5%2FhTjq2PImQ%2Fcgyh%2B%2F%2FklKGpbx5EfDSiSH3JRVeV7FyAY7luK%2F00pmbua1ahp29k34Us3XS0w6JM%2BcmDpL9Ow68Oa3W%2FrAHq6Qlt9dTPfX108gy7vq7srwPI%2BsHzr9IIGQSHIfzD%2Bv5u%2FBjqkAY7qI0MIMaRq5UDBe9rDTl0S2A%2BwIItjECKZWZiEmP2xJNyM4aOVbT9ItRTXKJp8FsFQODgC8kdKSt90p27k7fxMFX7AVuE70I974Ss7M3waEkUBasg4HevWKzXR75IA7C25KhRYfnFeJ0cOtPCVPrUWv4%2B56KJU621Tn4OFDX2ixpHGfig5sZxiicRYxBADHa7J%2F31hqaVuwtn99FarOUM48mwi&X-Amz-Signature=12c96fe93eb8452d9f16aa87c3eb9a9ce9e7c5a05124aff976fe3ce0e69d597d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25QBYVE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlkpeJG2flarsymzrtOuFyAvZxNTMis2DnNIkT5RYAgIhAPV86lJb0HTs%2B8njHG7x9BxtwZky7Qaumhy1cOPZ1pCPKv8DCGMQABoMNjM3NDIzMTgzODA1Igz7gFHY%2Fwusx8vVzBsq3AMgirz4cWELy3C9cTCp7HgKl9DLNWpYzT%2BpUCMN1lM5zTv3G1Ij8tVgMqnbiGWjRkh%2FJzY%2FjSc9XqhibSDcdP5PqI%2FrGG2jkQZRbWyw%2BKYrgm4dgGTHqLE28PZTRtuZ7ahGCLVUON9QACT4ljA%2B4Enb02THuAXEpRu1ozvWsw4TqDEaWuKU4X2AbKJc%2B4%2BLmVALtpaLA4fk5uu4CsUqKTHW%2BrDnRRedAgt7cn3mbJVhBzEzaD7JuM6GEitzejJSVBDxh%2FEABKYriwXTsiLLr4gKU9VMDFXWOtCnYja%2B03Rm2T3gtr%2BU62v8PmUdPMiRjf1Xi9Z85k62Y%2F%2BXXZL2H2OcVL80QLzx4v1dtVPkY4fiCr%2BGblOqf8Y25IpbWBULkv7oc5teVG3yMUObc3KU3Giif6tpd6BJIrgtXegRDv3KjjNKiDjUf3mLimqDhltToPxWoDKHMe3zbU8W3Rdan1UxAy4n520StbRY7y5jAV22PYjYzxgzRpj5%2FhTjq2PImQ%2Fcgyh%2B%2F%2FklKGpbx5EfDSiSH3JRVeV7FyAY7luK%2F00pmbua1ahp29k34Us3XS0w6JM%2BcmDpL9Ow68Oa3W%2FrAHq6Qlt9dTPfX108gy7vq7srwPI%2BsHzr9IIGQSHIfzD%2Bv5u%2FBjqkAY7qI0MIMaRq5UDBe9rDTl0S2A%2BwIItjECKZWZiEmP2xJNyM4aOVbT9ItRTXKJp8FsFQODgC8kdKSt90p27k7fxMFX7AVuE70I974Ss7M3waEkUBasg4HevWKzXR75IA7C25KhRYfnFeJ0cOtPCVPrUWv4%2B56KJU621Tn4OFDX2ixpHGfig5sZxiicRYxBADHa7J%2F31hqaVuwtn99FarOUM48mwi&X-Amz-Signature=1e884cc83c35f484e48c9eaa4d8a13a1c7a82f9c4a429fa346ea4eac8b003937&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25QBYVE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlkpeJG2flarsymzrtOuFyAvZxNTMis2DnNIkT5RYAgIhAPV86lJb0HTs%2B8njHG7x9BxtwZky7Qaumhy1cOPZ1pCPKv8DCGMQABoMNjM3NDIzMTgzODA1Igz7gFHY%2Fwusx8vVzBsq3AMgirz4cWELy3C9cTCp7HgKl9DLNWpYzT%2BpUCMN1lM5zTv3G1Ij8tVgMqnbiGWjRkh%2FJzY%2FjSc9XqhibSDcdP5PqI%2FrGG2jkQZRbWyw%2BKYrgm4dgGTHqLE28PZTRtuZ7ahGCLVUON9QACT4ljA%2B4Enb02THuAXEpRu1ozvWsw4TqDEaWuKU4X2AbKJc%2B4%2BLmVALtpaLA4fk5uu4CsUqKTHW%2BrDnRRedAgt7cn3mbJVhBzEzaD7JuM6GEitzejJSVBDxh%2FEABKYriwXTsiLLr4gKU9VMDFXWOtCnYja%2B03Rm2T3gtr%2BU62v8PmUdPMiRjf1Xi9Z85k62Y%2F%2BXXZL2H2OcVL80QLzx4v1dtVPkY4fiCr%2BGblOqf8Y25IpbWBULkv7oc5teVG3yMUObc3KU3Giif6tpd6BJIrgtXegRDv3KjjNKiDjUf3mLimqDhltToPxWoDKHMe3zbU8W3Rdan1UxAy4n520StbRY7y5jAV22PYjYzxgzRpj5%2FhTjq2PImQ%2Fcgyh%2B%2F%2FklKGpbx5EfDSiSH3JRVeV7FyAY7luK%2F00pmbua1ahp29k34Us3XS0w6JM%2BcmDpL9Ow68Oa3W%2FrAHq6Qlt9dTPfX108gy7vq7srwPI%2BsHzr9IIGQSHIfzD%2Bv5u%2FBjqkAY7qI0MIMaRq5UDBe9rDTl0S2A%2BwIItjECKZWZiEmP2xJNyM4aOVbT9ItRTXKJp8FsFQODgC8kdKSt90p27k7fxMFX7AVuE70I974Ss7M3waEkUBasg4HevWKzXR75IA7C25KhRYfnFeJ0cOtPCVPrUWv4%2B56KJU621Tn4OFDX2ixpHGfig5sZxiicRYxBADHa7J%2F31hqaVuwtn99FarOUM48mwi&X-Amz-Signature=9cc6b7c70e1b0f174cd162c0e72dfb7ca27f47f1da5a43cde9bfa9bc0bed2b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25QBYVE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlkpeJG2flarsymzrtOuFyAvZxNTMis2DnNIkT5RYAgIhAPV86lJb0HTs%2B8njHG7x9BxtwZky7Qaumhy1cOPZ1pCPKv8DCGMQABoMNjM3NDIzMTgzODA1Igz7gFHY%2Fwusx8vVzBsq3AMgirz4cWELy3C9cTCp7HgKl9DLNWpYzT%2BpUCMN1lM5zTv3G1Ij8tVgMqnbiGWjRkh%2FJzY%2FjSc9XqhibSDcdP5PqI%2FrGG2jkQZRbWyw%2BKYrgm4dgGTHqLE28PZTRtuZ7ahGCLVUON9QACT4ljA%2B4Enb02THuAXEpRu1ozvWsw4TqDEaWuKU4X2AbKJc%2B4%2BLmVALtpaLA4fk5uu4CsUqKTHW%2BrDnRRedAgt7cn3mbJVhBzEzaD7JuM6GEitzejJSVBDxh%2FEABKYriwXTsiLLr4gKU9VMDFXWOtCnYja%2B03Rm2T3gtr%2BU62v8PmUdPMiRjf1Xi9Z85k62Y%2F%2BXXZL2H2OcVL80QLzx4v1dtVPkY4fiCr%2BGblOqf8Y25IpbWBULkv7oc5teVG3yMUObc3KU3Giif6tpd6BJIrgtXegRDv3KjjNKiDjUf3mLimqDhltToPxWoDKHMe3zbU8W3Rdan1UxAy4n520StbRY7y5jAV22PYjYzxgzRpj5%2FhTjq2PImQ%2Fcgyh%2B%2F%2FklKGpbx5EfDSiSH3JRVeV7FyAY7luK%2F00pmbua1ahp29k34Us3XS0w6JM%2BcmDpL9Ow68Oa3W%2FrAHq6Qlt9dTPfX108gy7vq7srwPI%2BsHzr9IIGQSHIfzD%2Bv5u%2FBjqkAY7qI0MIMaRq5UDBe9rDTl0S2A%2BwIItjECKZWZiEmP2xJNyM4aOVbT9ItRTXKJp8FsFQODgC8kdKSt90p27k7fxMFX7AVuE70I974Ss7M3waEkUBasg4HevWKzXR75IA7C25KhRYfnFeJ0cOtPCVPrUWv4%2B56KJU621Tn4OFDX2ixpHGfig5sZxiicRYxBADHa7J%2F31hqaVuwtn99FarOUM48mwi&X-Amz-Signature=5ed0c293dde394c49d1212e521f7f44825fb87eab58877c6a86bddee9df4d3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25QBYVE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FlkpeJG2flarsymzrtOuFyAvZxNTMis2DnNIkT5RYAgIhAPV86lJb0HTs%2B8njHG7x9BxtwZky7Qaumhy1cOPZ1pCPKv8DCGMQABoMNjM3NDIzMTgzODA1Igz7gFHY%2Fwusx8vVzBsq3AMgirz4cWELy3C9cTCp7HgKl9DLNWpYzT%2BpUCMN1lM5zTv3G1Ij8tVgMqnbiGWjRkh%2FJzY%2FjSc9XqhibSDcdP5PqI%2FrGG2jkQZRbWyw%2BKYrgm4dgGTHqLE28PZTRtuZ7ahGCLVUON9QACT4ljA%2B4Enb02THuAXEpRu1ozvWsw4TqDEaWuKU4X2AbKJc%2B4%2BLmVALtpaLA4fk5uu4CsUqKTHW%2BrDnRRedAgt7cn3mbJVhBzEzaD7JuM6GEitzejJSVBDxh%2FEABKYriwXTsiLLr4gKU9VMDFXWOtCnYja%2B03Rm2T3gtr%2BU62v8PmUdPMiRjf1Xi9Z85k62Y%2F%2BXXZL2H2OcVL80QLzx4v1dtVPkY4fiCr%2BGblOqf8Y25IpbWBULkv7oc5teVG3yMUObc3KU3Giif6tpd6BJIrgtXegRDv3KjjNKiDjUf3mLimqDhltToPxWoDKHMe3zbU8W3Rdan1UxAy4n520StbRY7y5jAV22PYjYzxgzRpj5%2FhTjq2PImQ%2Fcgyh%2B%2F%2FklKGpbx5EfDSiSH3JRVeV7FyAY7luK%2F00pmbua1ahp29k34Us3XS0w6JM%2BcmDpL9Ow68Oa3W%2FrAHq6Qlt9dTPfX108gy7vq7srwPI%2BsHzr9IIGQSHIfzD%2Bv5u%2FBjqkAY7qI0MIMaRq5UDBe9rDTl0S2A%2BwIItjECKZWZiEmP2xJNyM4aOVbT9ItRTXKJp8FsFQODgC8kdKSt90p27k7fxMFX7AVuE70I974Ss7M3waEkUBasg4HevWKzXR75IA7C25KhRYfnFeJ0cOtPCVPrUWv4%2B56KJU621Tn4OFDX2ixpHGfig5sZxiicRYxBADHa7J%2F31hqaVuwtn99FarOUM48mwi&X-Amz-Signature=eadbb6fac3fc5b5f8d50bda455ac769a36c028da38e3a3fa7e5fd9cc4c6c1677&X-Amz-SignedHeaders=host&x-id=GetObject)
