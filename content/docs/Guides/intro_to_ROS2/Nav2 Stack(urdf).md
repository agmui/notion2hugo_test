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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEYVLATI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzF%2B8At5DL%2FcB1mSRbZdauuWniykqeBCBvG9xFhWsVgIhANJB9051ZC7WFYwwxlK%2B31lCDm1s9Wfgm7s%2FGDhwBTegKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLko57iIQdeOAgecMq3APFwcr%2B0BuP2ELzJztKnZ1dABxuSf8ORRlbzuvff1QB9T5LNaoJAfeCBEo1CwQsecgw6kMTcjsvU1i%2BuHEYETyNE8LMlDzS9OOhA4XDcf2ViHbyaM4GoGBkQw2df80D4%2FMQbQEcEGEWnJdCj0yShVDZkqc0sg%2FC%2F3M%2FSE%2F1sR8QjJBi5MF7rews139GarQKAOZcD180TKRuki4bBVNBR3TF3S3JpbyGezbAeKc0dG0SF0CXw27xZPUe222o0ZUdecjggshZ4bNtkrDGmTWjp93%2FTkZbQffNnvqxJgp%2Bx2VwCSNlI6ZE3qMroyNjTlQLHrmIY19DL2Efhc0ovBLliVD0Bnul51DVM1h4jLJjRl8yUgbsaso63s68lPlitg5Pi7%2BzB%2BUcht0W0ULzrRLmeQEXuLdocafq8YcuZ4%2FsX7iNX6jb4Y%2Fy9fpAMc2YW9eQSafew2bS%2FNUwj9usl9prcRwv489nOqEF1C6q9KxoAU0Toje1OB0hjjbF%2BhUM2RI7%2F1G52blxzaO76Joa7IgjaXdnAg0u%2FDDRZGSJ6ufY9H0XZpp92p8tqEo7H9er%2FZfiKGErNmrpvxH6pkn%2BCOWn3ToLX3JC76bYo2sSLvUvBRE4SIJKU3lOL678QVgPNTDe7N%2B%2BBjqkAXT%2FPGYALczLlQRGeehRQ0cBAvUFJWuVAg3ZDC%2F1FnXf%2Bxr7QH%2F%2BDrawgHDc5HzGuzm6NgXwH5a74uMPm4ASm8XYyGnB7NAkUs8561FzenVPRF0THatEmgbs6ISD7U%2BYApQCt5hLAItisIx%2F4tgBhuLDFlIDWUWrSAz6LqtZshiz0ExFs0KYJfKd%2FZtbmddPIBAamqA1cnnkMYYXXl0enLJ01bgk&X-Amz-Signature=bfcd576f8c97c24bb3d65ea3a7c25315193a1b5a73144bd744cd711dffc33d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEYVLATI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzF%2B8At5DL%2FcB1mSRbZdauuWniykqeBCBvG9xFhWsVgIhANJB9051ZC7WFYwwxlK%2B31lCDm1s9Wfgm7s%2FGDhwBTegKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLko57iIQdeOAgecMq3APFwcr%2B0BuP2ELzJztKnZ1dABxuSf8ORRlbzuvff1QB9T5LNaoJAfeCBEo1CwQsecgw6kMTcjsvU1i%2BuHEYETyNE8LMlDzS9OOhA4XDcf2ViHbyaM4GoGBkQw2df80D4%2FMQbQEcEGEWnJdCj0yShVDZkqc0sg%2FC%2F3M%2FSE%2F1sR8QjJBi5MF7rews139GarQKAOZcD180TKRuki4bBVNBR3TF3S3JpbyGezbAeKc0dG0SF0CXw27xZPUe222o0ZUdecjggshZ4bNtkrDGmTWjp93%2FTkZbQffNnvqxJgp%2Bx2VwCSNlI6ZE3qMroyNjTlQLHrmIY19DL2Efhc0ovBLliVD0Bnul51DVM1h4jLJjRl8yUgbsaso63s68lPlitg5Pi7%2BzB%2BUcht0W0ULzrRLmeQEXuLdocafq8YcuZ4%2FsX7iNX6jb4Y%2Fy9fpAMc2YW9eQSafew2bS%2FNUwj9usl9prcRwv489nOqEF1C6q9KxoAU0Toje1OB0hjjbF%2BhUM2RI7%2F1G52blxzaO76Joa7IgjaXdnAg0u%2FDDRZGSJ6ufY9H0XZpp92p8tqEo7H9er%2FZfiKGErNmrpvxH6pkn%2BCOWn3ToLX3JC76bYo2sSLvUvBRE4SIJKU3lOL678QVgPNTDe7N%2B%2BBjqkAXT%2FPGYALczLlQRGeehRQ0cBAvUFJWuVAg3ZDC%2F1FnXf%2Bxr7QH%2F%2BDrawgHDc5HzGuzm6NgXwH5a74uMPm4ASm8XYyGnB7NAkUs8561FzenVPRF0THatEmgbs6ISD7U%2BYApQCt5hLAItisIx%2F4tgBhuLDFlIDWUWrSAz6LqtZshiz0ExFs0KYJfKd%2FZtbmddPIBAamqA1cnnkMYYXXl0enLJ01bgk&X-Amz-Signature=0e631e2ee5c4ecae24cb778aa31b79f410052be7992f8317f6a0e08aedd7391c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEYVLATI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzF%2B8At5DL%2FcB1mSRbZdauuWniykqeBCBvG9xFhWsVgIhANJB9051ZC7WFYwwxlK%2B31lCDm1s9Wfgm7s%2FGDhwBTegKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLko57iIQdeOAgecMq3APFwcr%2B0BuP2ELzJztKnZ1dABxuSf8ORRlbzuvff1QB9T5LNaoJAfeCBEo1CwQsecgw6kMTcjsvU1i%2BuHEYETyNE8LMlDzS9OOhA4XDcf2ViHbyaM4GoGBkQw2df80D4%2FMQbQEcEGEWnJdCj0yShVDZkqc0sg%2FC%2F3M%2FSE%2F1sR8QjJBi5MF7rews139GarQKAOZcD180TKRuki4bBVNBR3TF3S3JpbyGezbAeKc0dG0SF0CXw27xZPUe222o0ZUdecjggshZ4bNtkrDGmTWjp93%2FTkZbQffNnvqxJgp%2Bx2VwCSNlI6ZE3qMroyNjTlQLHrmIY19DL2Efhc0ovBLliVD0Bnul51DVM1h4jLJjRl8yUgbsaso63s68lPlitg5Pi7%2BzB%2BUcht0W0ULzrRLmeQEXuLdocafq8YcuZ4%2FsX7iNX6jb4Y%2Fy9fpAMc2YW9eQSafew2bS%2FNUwj9usl9prcRwv489nOqEF1C6q9KxoAU0Toje1OB0hjjbF%2BhUM2RI7%2F1G52blxzaO76Joa7IgjaXdnAg0u%2FDDRZGSJ6ufY9H0XZpp92p8tqEo7H9er%2FZfiKGErNmrpvxH6pkn%2BCOWn3ToLX3JC76bYo2sSLvUvBRE4SIJKU3lOL678QVgPNTDe7N%2B%2BBjqkAXT%2FPGYALczLlQRGeehRQ0cBAvUFJWuVAg3ZDC%2F1FnXf%2Bxr7QH%2F%2BDrawgHDc5HzGuzm6NgXwH5a74uMPm4ASm8XYyGnB7NAkUs8561FzenVPRF0THatEmgbs6ISD7U%2BYApQCt5hLAItisIx%2F4tgBhuLDFlIDWUWrSAz6LqtZshiz0ExFs0KYJfKd%2FZtbmddPIBAamqA1cnnkMYYXXl0enLJ01bgk&X-Amz-Signature=eaf0b183c2cc4d68c5935157e431ab31c91cd587f19e4e35d48be6f3313a3078&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEYVLATI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzF%2B8At5DL%2FcB1mSRbZdauuWniykqeBCBvG9xFhWsVgIhANJB9051ZC7WFYwwxlK%2B31lCDm1s9Wfgm7s%2FGDhwBTegKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLko57iIQdeOAgecMq3APFwcr%2B0BuP2ELzJztKnZ1dABxuSf8ORRlbzuvff1QB9T5LNaoJAfeCBEo1CwQsecgw6kMTcjsvU1i%2BuHEYETyNE8LMlDzS9OOhA4XDcf2ViHbyaM4GoGBkQw2df80D4%2FMQbQEcEGEWnJdCj0yShVDZkqc0sg%2FC%2F3M%2FSE%2F1sR8QjJBi5MF7rews139GarQKAOZcD180TKRuki4bBVNBR3TF3S3JpbyGezbAeKc0dG0SF0CXw27xZPUe222o0ZUdecjggshZ4bNtkrDGmTWjp93%2FTkZbQffNnvqxJgp%2Bx2VwCSNlI6ZE3qMroyNjTlQLHrmIY19DL2Efhc0ovBLliVD0Bnul51DVM1h4jLJjRl8yUgbsaso63s68lPlitg5Pi7%2BzB%2BUcht0W0ULzrRLmeQEXuLdocafq8YcuZ4%2FsX7iNX6jb4Y%2Fy9fpAMc2YW9eQSafew2bS%2FNUwj9usl9prcRwv489nOqEF1C6q9KxoAU0Toje1OB0hjjbF%2BhUM2RI7%2F1G52blxzaO76Joa7IgjaXdnAg0u%2FDDRZGSJ6ufY9H0XZpp92p8tqEo7H9er%2FZfiKGErNmrpvxH6pkn%2BCOWn3ToLX3JC76bYo2sSLvUvBRE4SIJKU3lOL678QVgPNTDe7N%2B%2BBjqkAXT%2FPGYALczLlQRGeehRQ0cBAvUFJWuVAg3ZDC%2F1FnXf%2Bxr7QH%2F%2BDrawgHDc5HzGuzm6NgXwH5a74uMPm4ASm8XYyGnB7NAkUs8561FzenVPRF0THatEmgbs6ISD7U%2BYApQCt5hLAItisIx%2F4tgBhuLDFlIDWUWrSAz6LqtZshiz0ExFs0KYJfKd%2FZtbmddPIBAamqA1cnnkMYYXXl0enLJ01bgk&X-Amz-Signature=38ae3442120dcf391ba97248bd5320be59a534e3590dc9d1d3412d855e808637&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEYVLATI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzF%2B8At5DL%2FcB1mSRbZdauuWniykqeBCBvG9xFhWsVgIhANJB9051ZC7WFYwwxlK%2B31lCDm1s9Wfgm7s%2FGDhwBTegKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLko57iIQdeOAgecMq3APFwcr%2B0BuP2ELzJztKnZ1dABxuSf8ORRlbzuvff1QB9T5LNaoJAfeCBEo1CwQsecgw6kMTcjsvU1i%2BuHEYETyNE8LMlDzS9OOhA4XDcf2ViHbyaM4GoGBkQw2df80D4%2FMQbQEcEGEWnJdCj0yShVDZkqc0sg%2FC%2F3M%2FSE%2F1sR8QjJBi5MF7rews139GarQKAOZcD180TKRuki4bBVNBR3TF3S3JpbyGezbAeKc0dG0SF0CXw27xZPUe222o0ZUdecjggshZ4bNtkrDGmTWjp93%2FTkZbQffNnvqxJgp%2Bx2VwCSNlI6ZE3qMroyNjTlQLHrmIY19DL2Efhc0ovBLliVD0Bnul51DVM1h4jLJjRl8yUgbsaso63s68lPlitg5Pi7%2BzB%2BUcht0W0ULzrRLmeQEXuLdocafq8YcuZ4%2FsX7iNX6jb4Y%2Fy9fpAMc2YW9eQSafew2bS%2FNUwj9usl9prcRwv489nOqEF1C6q9KxoAU0Toje1OB0hjjbF%2BhUM2RI7%2F1G52blxzaO76Joa7IgjaXdnAg0u%2FDDRZGSJ6ufY9H0XZpp92p8tqEo7H9er%2FZfiKGErNmrpvxH6pkn%2BCOWn3ToLX3JC76bYo2sSLvUvBRE4SIJKU3lOL678QVgPNTDe7N%2B%2BBjqkAXT%2FPGYALczLlQRGeehRQ0cBAvUFJWuVAg3ZDC%2F1FnXf%2Bxr7QH%2F%2BDrawgHDc5HzGuzm6NgXwH5a74uMPm4ASm8XYyGnB7NAkUs8561FzenVPRF0THatEmgbs6ISD7U%2BYApQCt5hLAItisIx%2F4tgBhuLDFlIDWUWrSAz6LqtZshiz0ExFs0KYJfKd%2FZtbmddPIBAamqA1cnnkMYYXXl0enLJ01bgk&X-Amz-Signature=cdf813d52706aaa5d3fe51209c0a46efd306fddbbee08e7fa1f179faba48f271&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEYVLATI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhzF%2B8At5DL%2FcB1mSRbZdauuWniykqeBCBvG9xFhWsVgIhANJB9051ZC7WFYwwxlK%2B31lCDm1s9Wfgm7s%2FGDhwBTegKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLko57iIQdeOAgecMq3APFwcr%2B0BuP2ELzJztKnZ1dABxuSf8ORRlbzuvff1QB9T5LNaoJAfeCBEo1CwQsecgw6kMTcjsvU1i%2BuHEYETyNE8LMlDzS9OOhA4XDcf2ViHbyaM4GoGBkQw2df80D4%2FMQbQEcEGEWnJdCj0yShVDZkqc0sg%2FC%2F3M%2FSE%2F1sR8QjJBi5MF7rews139GarQKAOZcD180TKRuki4bBVNBR3TF3S3JpbyGezbAeKc0dG0SF0CXw27xZPUe222o0ZUdecjggshZ4bNtkrDGmTWjp93%2FTkZbQffNnvqxJgp%2Bx2VwCSNlI6ZE3qMroyNjTlQLHrmIY19DL2Efhc0ovBLliVD0Bnul51DVM1h4jLJjRl8yUgbsaso63s68lPlitg5Pi7%2BzB%2BUcht0W0ULzrRLmeQEXuLdocafq8YcuZ4%2FsX7iNX6jb4Y%2Fy9fpAMc2YW9eQSafew2bS%2FNUwj9usl9prcRwv489nOqEF1C6q9KxoAU0Toje1OB0hjjbF%2BhUM2RI7%2F1G52blxzaO76Joa7IgjaXdnAg0u%2FDDRZGSJ6ufY9H0XZpp92p8tqEo7H9er%2FZfiKGErNmrpvxH6pkn%2BCOWn3ToLX3JC76bYo2sSLvUvBRE4SIJKU3lOL678QVgPNTDe7N%2B%2BBjqkAXT%2FPGYALczLlQRGeehRQ0cBAvUFJWuVAg3ZDC%2F1FnXf%2Bxr7QH%2F%2BDrawgHDc5HzGuzm6NgXwH5a74uMPm4ASm8XYyGnB7NAkUs8561FzenVPRF0THatEmgbs6ISD7U%2BYApQCt5hLAItisIx%2F4tgBhuLDFlIDWUWrSAz6LqtZshiz0ExFs0KYJfKd%2FZtbmddPIBAamqA1cnnkMYYXXl0enLJ01bgk&X-Amz-Signature=407f48235f4cacafd00b582842ffb3374e2d2f1fd6fa96ff87e3b20f1e5a4172&X-Amz-SignedHeaders=host&x-id=GetObject)
