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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NIC5XC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAODj0aY%2FAYLmFdoURfIrIM8DNwNMVqqVe%2FquYqUUg%2BzAiAvB7ebJs3LSVFgJ%2Fw4cXngTqDQYOH4izqyHuGxq%2BBEoiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzbKiUpI1D49rg6ZyKtwDAPtW150QdYOvtaR2Ohx4gffte3WHGnCWM3p1M8JwzQeWYwtCpH%2FYnvvO50T9CdTqD06IxQPfaz4EQXnNCXM2Gs70iflfRme%2BBS5ssoqccX1Qws%2BE7dlp9XdmoIs0WETjs3u7Bkg%2Ba7IjHnFdos0xdK7qnRMsAVWZerFhzhgOWirAquJuKXohAn02lLJrwSL2uZdxkY11KgzBleLZE5CHL4W6wdXP2fvCavYRZkZVcS4Vndtb3qGN5Fcc66gL43mADIM4hr0pps6IqA2tfPbc1HsK%2FbdqrEyix56mORfK7axQnFBvsSo2FX4dn4nCxoIkFNaQA2uWLokWChQdZQRLhqc8VtPps6OWcvCoD4b47DWJJ7jGz2frSqVviPL2DLa2CksrC%2FqeMyZPgmcmaR9p5ST65u00TCjLVpeRVBztcQdJCTC7xTIuqIWl3%2FfPdZyQjo%2BdKVrL2v5OVu6mTTDAUxCv5UFq7I1%2BqxcQgDgB78QnJ28WFZPmqBe%2FIOZnO58dAKv%2BLBAaICJl9rAoeVMk%2BmWBu6TV%2BlsXInmhdfxFzzaa2cZtwe8verW6nV6bflWKcbC1SFr3fzKXPRfRxcgXJE9JPdyNIdqhAxm2vHN0kizHjrywDVjHpSVdjf4wyvacvgY6pgH8xOMluUuGsFCwMNY6Z3xxp6euhWsHmC2%2Fjt5UkFZC%2BUTzZdpeYBzrVyeGfGpehirItxj%2Fh2sOORooMVeC%2FJisDjmpcEP5c2r25WygPmycmFRWbrfByM1SKlv4RKOCM3jyg6aJk%2BZiELRXSBKiQrsWqJ%2FfQAN4hQjUYfxsdM37qxMl5Vqxbyg4yxvMe6l3IZk4T%2BmVpAyArG8ZCGl%2BAlAMktbSXXF9&X-Amz-Signature=4af165676b4d1a0684b066df6aa492c5c40de933b8e3f69117a64d6b74dc3d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NIC5XC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAODj0aY%2FAYLmFdoURfIrIM8DNwNMVqqVe%2FquYqUUg%2BzAiAvB7ebJs3LSVFgJ%2Fw4cXngTqDQYOH4izqyHuGxq%2BBEoiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzbKiUpI1D49rg6ZyKtwDAPtW150QdYOvtaR2Ohx4gffte3WHGnCWM3p1M8JwzQeWYwtCpH%2FYnvvO50T9CdTqD06IxQPfaz4EQXnNCXM2Gs70iflfRme%2BBS5ssoqccX1Qws%2BE7dlp9XdmoIs0WETjs3u7Bkg%2Ba7IjHnFdos0xdK7qnRMsAVWZerFhzhgOWirAquJuKXohAn02lLJrwSL2uZdxkY11KgzBleLZE5CHL4W6wdXP2fvCavYRZkZVcS4Vndtb3qGN5Fcc66gL43mADIM4hr0pps6IqA2tfPbc1HsK%2FbdqrEyix56mORfK7axQnFBvsSo2FX4dn4nCxoIkFNaQA2uWLokWChQdZQRLhqc8VtPps6OWcvCoD4b47DWJJ7jGz2frSqVviPL2DLa2CksrC%2FqeMyZPgmcmaR9p5ST65u00TCjLVpeRVBztcQdJCTC7xTIuqIWl3%2FfPdZyQjo%2BdKVrL2v5OVu6mTTDAUxCv5UFq7I1%2BqxcQgDgB78QnJ28WFZPmqBe%2FIOZnO58dAKv%2BLBAaICJl9rAoeVMk%2BmWBu6TV%2BlsXInmhdfxFzzaa2cZtwe8verW6nV6bflWKcbC1SFr3fzKXPRfRxcgXJE9JPdyNIdqhAxm2vHN0kizHjrywDVjHpSVdjf4wyvacvgY6pgH8xOMluUuGsFCwMNY6Z3xxp6euhWsHmC2%2Fjt5UkFZC%2BUTzZdpeYBzrVyeGfGpehirItxj%2Fh2sOORooMVeC%2FJisDjmpcEP5c2r25WygPmycmFRWbrfByM1SKlv4RKOCM3jyg6aJk%2BZiELRXSBKiQrsWqJ%2FfQAN4hQjUYfxsdM37qxMl5Vqxbyg4yxvMe6l3IZk4T%2BmVpAyArG8ZCGl%2BAlAMktbSXXF9&X-Amz-Signature=4730d49ca4978819b2e4de5319814d4f02cac4471f03aec7f6d64bb256bee862&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NIC5XC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAODj0aY%2FAYLmFdoURfIrIM8DNwNMVqqVe%2FquYqUUg%2BzAiAvB7ebJs3LSVFgJ%2Fw4cXngTqDQYOH4izqyHuGxq%2BBEoiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzbKiUpI1D49rg6ZyKtwDAPtW150QdYOvtaR2Ohx4gffte3WHGnCWM3p1M8JwzQeWYwtCpH%2FYnvvO50T9CdTqD06IxQPfaz4EQXnNCXM2Gs70iflfRme%2BBS5ssoqccX1Qws%2BE7dlp9XdmoIs0WETjs3u7Bkg%2Ba7IjHnFdos0xdK7qnRMsAVWZerFhzhgOWirAquJuKXohAn02lLJrwSL2uZdxkY11KgzBleLZE5CHL4W6wdXP2fvCavYRZkZVcS4Vndtb3qGN5Fcc66gL43mADIM4hr0pps6IqA2tfPbc1HsK%2FbdqrEyix56mORfK7axQnFBvsSo2FX4dn4nCxoIkFNaQA2uWLokWChQdZQRLhqc8VtPps6OWcvCoD4b47DWJJ7jGz2frSqVviPL2DLa2CksrC%2FqeMyZPgmcmaR9p5ST65u00TCjLVpeRVBztcQdJCTC7xTIuqIWl3%2FfPdZyQjo%2BdKVrL2v5OVu6mTTDAUxCv5UFq7I1%2BqxcQgDgB78QnJ28WFZPmqBe%2FIOZnO58dAKv%2BLBAaICJl9rAoeVMk%2BmWBu6TV%2BlsXInmhdfxFzzaa2cZtwe8verW6nV6bflWKcbC1SFr3fzKXPRfRxcgXJE9JPdyNIdqhAxm2vHN0kizHjrywDVjHpSVdjf4wyvacvgY6pgH8xOMluUuGsFCwMNY6Z3xxp6euhWsHmC2%2Fjt5UkFZC%2BUTzZdpeYBzrVyeGfGpehirItxj%2Fh2sOORooMVeC%2FJisDjmpcEP5c2r25WygPmycmFRWbrfByM1SKlv4RKOCM3jyg6aJk%2BZiELRXSBKiQrsWqJ%2FfQAN4hQjUYfxsdM37qxMl5Vqxbyg4yxvMe6l3IZk4T%2BmVpAyArG8ZCGl%2BAlAMktbSXXF9&X-Amz-Signature=5234da8c526cad5e13255bc2a4f38c7c1532fa579d80a0b5c9d0ccf1f97405a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NIC5XC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAODj0aY%2FAYLmFdoURfIrIM8DNwNMVqqVe%2FquYqUUg%2BzAiAvB7ebJs3LSVFgJ%2Fw4cXngTqDQYOH4izqyHuGxq%2BBEoiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzbKiUpI1D49rg6ZyKtwDAPtW150QdYOvtaR2Ohx4gffte3WHGnCWM3p1M8JwzQeWYwtCpH%2FYnvvO50T9CdTqD06IxQPfaz4EQXnNCXM2Gs70iflfRme%2BBS5ssoqccX1Qws%2BE7dlp9XdmoIs0WETjs3u7Bkg%2Ba7IjHnFdos0xdK7qnRMsAVWZerFhzhgOWirAquJuKXohAn02lLJrwSL2uZdxkY11KgzBleLZE5CHL4W6wdXP2fvCavYRZkZVcS4Vndtb3qGN5Fcc66gL43mADIM4hr0pps6IqA2tfPbc1HsK%2FbdqrEyix56mORfK7axQnFBvsSo2FX4dn4nCxoIkFNaQA2uWLokWChQdZQRLhqc8VtPps6OWcvCoD4b47DWJJ7jGz2frSqVviPL2DLa2CksrC%2FqeMyZPgmcmaR9p5ST65u00TCjLVpeRVBztcQdJCTC7xTIuqIWl3%2FfPdZyQjo%2BdKVrL2v5OVu6mTTDAUxCv5UFq7I1%2BqxcQgDgB78QnJ28WFZPmqBe%2FIOZnO58dAKv%2BLBAaICJl9rAoeVMk%2BmWBu6TV%2BlsXInmhdfxFzzaa2cZtwe8verW6nV6bflWKcbC1SFr3fzKXPRfRxcgXJE9JPdyNIdqhAxm2vHN0kizHjrywDVjHpSVdjf4wyvacvgY6pgH8xOMluUuGsFCwMNY6Z3xxp6euhWsHmC2%2Fjt5UkFZC%2BUTzZdpeYBzrVyeGfGpehirItxj%2Fh2sOORooMVeC%2FJisDjmpcEP5c2r25WygPmycmFRWbrfByM1SKlv4RKOCM3jyg6aJk%2BZiELRXSBKiQrsWqJ%2FfQAN4hQjUYfxsdM37qxMl5Vqxbyg4yxvMe6l3IZk4T%2BmVpAyArG8ZCGl%2BAlAMktbSXXF9&X-Amz-Signature=3dbacaa0efde90369005267eac105de3391e4349fdacc0355887bfeafb800789&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NIC5XC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAODj0aY%2FAYLmFdoURfIrIM8DNwNMVqqVe%2FquYqUUg%2BzAiAvB7ebJs3LSVFgJ%2Fw4cXngTqDQYOH4izqyHuGxq%2BBEoiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzbKiUpI1D49rg6ZyKtwDAPtW150QdYOvtaR2Ohx4gffte3WHGnCWM3p1M8JwzQeWYwtCpH%2FYnvvO50T9CdTqD06IxQPfaz4EQXnNCXM2Gs70iflfRme%2BBS5ssoqccX1Qws%2BE7dlp9XdmoIs0WETjs3u7Bkg%2Ba7IjHnFdos0xdK7qnRMsAVWZerFhzhgOWirAquJuKXohAn02lLJrwSL2uZdxkY11KgzBleLZE5CHL4W6wdXP2fvCavYRZkZVcS4Vndtb3qGN5Fcc66gL43mADIM4hr0pps6IqA2tfPbc1HsK%2FbdqrEyix56mORfK7axQnFBvsSo2FX4dn4nCxoIkFNaQA2uWLokWChQdZQRLhqc8VtPps6OWcvCoD4b47DWJJ7jGz2frSqVviPL2DLa2CksrC%2FqeMyZPgmcmaR9p5ST65u00TCjLVpeRVBztcQdJCTC7xTIuqIWl3%2FfPdZyQjo%2BdKVrL2v5OVu6mTTDAUxCv5UFq7I1%2BqxcQgDgB78QnJ28WFZPmqBe%2FIOZnO58dAKv%2BLBAaICJl9rAoeVMk%2BmWBu6TV%2BlsXInmhdfxFzzaa2cZtwe8verW6nV6bflWKcbC1SFr3fzKXPRfRxcgXJE9JPdyNIdqhAxm2vHN0kizHjrywDVjHpSVdjf4wyvacvgY6pgH8xOMluUuGsFCwMNY6Z3xxp6euhWsHmC2%2Fjt5UkFZC%2BUTzZdpeYBzrVyeGfGpehirItxj%2Fh2sOORooMVeC%2FJisDjmpcEP5c2r25WygPmycmFRWbrfByM1SKlv4RKOCM3jyg6aJk%2BZiELRXSBKiQrsWqJ%2FfQAN4hQjUYfxsdM37qxMl5Vqxbyg4yxvMe6l3IZk4T%2BmVpAyArG8ZCGl%2BAlAMktbSXXF9&X-Amz-Signature=0ee9a2c4fde433e7aa8a3a55d6b8c4eed145cddb150687493e000a4f9c469c96&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644NIC5XC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAODj0aY%2FAYLmFdoURfIrIM8DNwNMVqqVe%2FquYqUUg%2BzAiAvB7ebJs3LSVFgJ%2Fw4cXngTqDQYOH4izqyHuGxq%2BBEoiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzbKiUpI1D49rg6ZyKtwDAPtW150QdYOvtaR2Ohx4gffte3WHGnCWM3p1M8JwzQeWYwtCpH%2FYnvvO50T9CdTqD06IxQPfaz4EQXnNCXM2Gs70iflfRme%2BBS5ssoqccX1Qws%2BE7dlp9XdmoIs0WETjs3u7Bkg%2Ba7IjHnFdos0xdK7qnRMsAVWZerFhzhgOWirAquJuKXohAn02lLJrwSL2uZdxkY11KgzBleLZE5CHL4W6wdXP2fvCavYRZkZVcS4Vndtb3qGN5Fcc66gL43mADIM4hr0pps6IqA2tfPbc1HsK%2FbdqrEyix56mORfK7axQnFBvsSo2FX4dn4nCxoIkFNaQA2uWLokWChQdZQRLhqc8VtPps6OWcvCoD4b47DWJJ7jGz2frSqVviPL2DLa2CksrC%2FqeMyZPgmcmaR9p5ST65u00TCjLVpeRVBztcQdJCTC7xTIuqIWl3%2FfPdZyQjo%2BdKVrL2v5OVu6mTTDAUxCv5UFq7I1%2BqxcQgDgB78QnJ28WFZPmqBe%2FIOZnO58dAKv%2BLBAaICJl9rAoeVMk%2BmWBu6TV%2BlsXInmhdfxFzzaa2cZtwe8verW6nV6bflWKcbC1SFr3fzKXPRfRxcgXJE9JPdyNIdqhAxm2vHN0kizHjrywDVjHpSVdjf4wyvacvgY6pgH8xOMluUuGsFCwMNY6Z3xxp6euhWsHmC2%2Fjt5UkFZC%2BUTzZdpeYBzrVyeGfGpehirItxj%2Fh2sOORooMVeC%2FJisDjmpcEP5c2r25WygPmycmFRWbrfByM1SKlv4RKOCM3jyg6aJk%2BZiELRXSBKiQrsWqJ%2FfQAN4hQjUYfxsdM37qxMl5Vqxbyg4yxvMe6l3IZk4T%2BmVpAyArG8ZCGl%2BAlAMktbSXXF9&X-Amz-Signature=81d03863f7d61271ec5ee0f9a3c6f24520a26c95e6e37bd51a72386eae655967&X-Amz-SignedHeaders=host&x-id=GetObject)
