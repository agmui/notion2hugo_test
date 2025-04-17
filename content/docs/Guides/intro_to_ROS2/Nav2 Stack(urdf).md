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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SIG53O2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71pjxz%2BATs7%2BfqcGL1nZZFiZaWqeD%2FsAKEOr2Qr8XNAIhAL8Gu%2FM5UA9HuqZC%2FWROk%2F6vjBt3T9ZjPyTgsjYkNVVoKv8DCFsQABoMNjM3NDIzMTgzODA1Igxj7tOAwNQvu%2BAvWAUq3APYcAfS1CU2PwsmDNrtNC6LU9H5JMGDl7Gj0A3cPWT2sdZbLLtN3TdrC240hv%2BRO3o5ACnIHXJONaZJCyWlclpIOKQkUIngPqqlP78g2Oi4vUK8R4eqYaDhHU3WD38JLbkHLEvmp63f6yldu3dfNxhVdqk0Bsq7SRBiY%2FmY6VyUzWjFuL%2B%2Bzp4v8D%2Boy8VEkdD%2BNUjtzdGSycR7zdLXw%2B3iD7Li0do%2FxKkbsT37rUnzSZ5EXx2q9rk%2BIYSm1dFm1ditvqc1Mrlwplt%2BL8%2FqJ9N6FWUC%2Bbof7id3zMuKGg4YRIj01DZD2g7yXe3Of8oxbJvItvQceMlJA4IASZY3NHkRpd%2FgSmsvYbldkdObCJfmD9yCMuE5uOie9msvboqZlwVA%2BU4SFwV%2BFCxr7P%2Fm4ytX99OZfUZK6eDlZ67TEpP6TYTtrwcuifBrf8c0ALk5g64PYGWvgPRZjzlLalUytcOQeUf4tzyFuqAHcmlYASZWll3WT0rHC4lS535AI12Wm2cla3pp1NiibK50cdYDCTUNStL9fDVdTwNANIOeJ49PSFNm0KCGSBnp6mRydaaT72YO%2FYZQFx0H%2F8hfKszCz5o4zlxvqRWDmJI7la3d76HNdLKMp0m8bzu8wZeJWTCvlYPABjqkAWBtbTh%2Fq1PjGm%2F55h5prxn04d%2F5hkIgilP30ANh0w6dPTwdmTZuQWgcCFU3coDAGNU43LloXVnfziTX6m54X7A1Xb7GnSNaxwFDUqjFQBPrvOpJMiUSP1yLphzXkdNii2sLMGwMdD2HEpvZvC941jhz2mnzXlG%2Bc%2Bq3Af2NJkHgtjegCO7RbkI%2FBsAbHxceKreR%2BIea2C9bI2aqXOFgvYo9pXIf&X-Amz-Signature=579e82c79f36444b0201c584f7caafef4e947779b7542c4166af92f53a36e62d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SIG53O2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71pjxz%2BATs7%2BfqcGL1nZZFiZaWqeD%2FsAKEOr2Qr8XNAIhAL8Gu%2FM5UA9HuqZC%2FWROk%2F6vjBt3T9ZjPyTgsjYkNVVoKv8DCFsQABoMNjM3NDIzMTgzODA1Igxj7tOAwNQvu%2BAvWAUq3APYcAfS1CU2PwsmDNrtNC6LU9H5JMGDl7Gj0A3cPWT2sdZbLLtN3TdrC240hv%2BRO3o5ACnIHXJONaZJCyWlclpIOKQkUIngPqqlP78g2Oi4vUK8R4eqYaDhHU3WD38JLbkHLEvmp63f6yldu3dfNxhVdqk0Bsq7SRBiY%2FmY6VyUzWjFuL%2B%2Bzp4v8D%2Boy8VEkdD%2BNUjtzdGSycR7zdLXw%2B3iD7Li0do%2FxKkbsT37rUnzSZ5EXx2q9rk%2BIYSm1dFm1ditvqc1Mrlwplt%2BL8%2FqJ9N6FWUC%2Bbof7id3zMuKGg4YRIj01DZD2g7yXe3Of8oxbJvItvQceMlJA4IASZY3NHkRpd%2FgSmsvYbldkdObCJfmD9yCMuE5uOie9msvboqZlwVA%2BU4SFwV%2BFCxr7P%2Fm4ytX99OZfUZK6eDlZ67TEpP6TYTtrwcuifBrf8c0ALk5g64PYGWvgPRZjzlLalUytcOQeUf4tzyFuqAHcmlYASZWll3WT0rHC4lS535AI12Wm2cla3pp1NiibK50cdYDCTUNStL9fDVdTwNANIOeJ49PSFNm0KCGSBnp6mRydaaT72YO%2FYZQFx0H%2F8hfKszCz5o4zlxvqRWDmJI7la3d76HNdLKMp0m8bzu8wZeJWTCvlYPABjqkAWBtbTh%2Fq1PjGm%2F55h5prxn04d%2F5hkIgilP30ANh0w6dPTwdmTZuQWgcCFU3coDAGNU43LloXVnfziTX6m54X7A1Xb7GnSNaxwFDUqjFQBPrvOpJMiUSP1yLphzXkdNii2sLMGwMdD2HEpvZvC941jhz2mnzXlG%2Bc%2Bq3Af2NJkHgtjegCO7RbkI%2FBsAbHxceKreR%2BIea2C9bI2aqXOFgvYo9pXIf&X-Amz-Signature=995d6f522fa88cebfc22905879a25ce04ece668125487a1822b14087dac8652b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SIG53O2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71pjxz%2BATs7%2BfqcGL1nZZFiZaWqeD%2FsAKEOr2Qr8XNAIhAL8Gu%2FM5UA9HuqZC%2FWROk%2F6vjBt3T9ZjPyTgsjYkNVVoKv8DCFsQABoMNjM3NDIzMTgzODA1Igxj7tOAwNQvu%2BAvWAUq3APYcAfS1CU2PwsmDNrtNC6LU9H5JMGDl7Gj0A3cPWT2sdZbLLtN3TdrC240hv%2BRO3o5ACnIHXJONaZJCyWlclpIOKQkUIngPqqlP78g2Oi4vUK8R4eqYaDhHU3WD38JLbkHLEvmp63f6yldu3dfNxhVdqk0Bsq7SRBiY%2FmY6VyUzWjFuL%2B%2Bzp4v8D%2Boy8VEkdD%2BNUjtzdGSycR7zdLXw%2B3iD7Li0do%2FxKkbsT37rUnzSZ5EXx2q9rk%2BIYSm1dFm1ditvqc1Mrlwplt%2BL8%2FqJ9N6FWUC%2Bbof7id3zMuKGg4YRIj01DZD2g7yXe3Of8oxbJvItvQceMlJA4IASZY3NHkRpd%2FgSmsvYbldkdObCJfmD9yCMuE5uOie9msvboqZlwVA%2BU4SFwV%2BFCxr7P%2Fm4ytX99OZfUZK6eDlZ67TEpP6TYTtrwcuifBrf8c0ALk5g64PYGWvgPRZjzlLalUytcOQeUf4tzyFuqAHcmlYASZWll3WT0rHC4lS535AI12Wm2cla3pp1NiibK50cdYDCTUNStL9fDVdTwNANIOeJ49PSFNm0KCGSBnp6mRydaaT72YO%2FYZQFx0H%2F8hfKszCz5o4zlxvqRWDmJI7la3d76HNdLKMp0m8bzu8wZeJWTCvlYPABjqkAWBtbTh%2Fq1PjGm%2F55h5prxn04d%2F5hkIgilP30ANh0w6dPTwdmTZuQWgcCFU3coDAGNU43LloXVnfziTX6m54X7A1Xb7GnSNaxwFDUqjFQBPrvOpJMiUSP1yLphzXkdNii2sLMGwMdD2HEpvZvC941jhz2mnzXlG%2Bc%2Bq3Af2NJkHgtjegCO7RbkI%2FBsAbHxceKreR%2BIea2C9bI2aqXOFgvYo9pXIf&X-Amz-Signature=cbac513f17f48088db5d7ca6537d97896d370bd143c0dc90e1455620ed215d16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SIG53O2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71pjxz%2BATs7%2BfqcGL1nZZFiZaWqeD%2FsAKEOr2Qr8XNAIhAL8Gu%2FM5UA9HuqZC%2FWROk%2F6vjBt3T9ZjPyTgsjYkNVVoKv8DCFsQABoMNjM3NDIzMTgzODA1Igxj7tOAwNQvu%2BAvWAUq3APYcAfS1CU2PwsmDNrtNC6LU9H5JMGDl7Gj0A3cPWT2sdZbLLtN3TdrC240hv%2BRO3o5ACnIHXJONaZJCyWlclpIOKQkUIngPqqlP78g2Oi4vUK8R4eqYaDhHU3WD38JLbkHLEvmp63f6yldu3dfNxhVdqk0Bsq7SRBiY%2FmY6VyUzWjFuL%2B%2Bzp4v8D%2Boy8VEkdD%2BNUjtzdGSycR7zdLXw%2B3iD7Li0do%2FxKkbsT37rUnzSZ5EXx2q9rk%2BIYSm1dFm1ditvqc1Mrlwplt%2BL8%2FqJ9N6FWUC%2Bbof7id3zMuKGg4YRIj01DZD2g7yXe3Of8oxbJvItvQceMlJA4IASZY3NHkRpd%2FgSmsvYbldkdObCJfmD9yCMuE5uOie9msvboqZlwVA%2BU4SFwV%2BFCxr7P%2Fm4ytX99OZfUZK6eDlZ67TEpP6TYTtrwcuifBrf8c0ALk5g64PYGWvgPRZjzlLalUytcOQeUf4tzyFuqAHcmlYASZWll3WT0rHC4lS535AI12Wm2cla3pp1NiibK50cdYDCTUNStL9fDVdTwNANIOeJ49PSFNm0KCGSBnp6mRydaaT72YO%2FYZQFx0H%2F8hfKszCz5o4zlxvqRWDmJI7la3d76HNdLKMp0m8bzu8wZeJWTCvlYPABjqkAWBtbTh%2Fq1PjGm%2F55h5prxn04d%2F5hkIgilP30ANh0w6dPTwdmTZuQWgcCFU3coDAGNU43LloXVnfziTX6m54X7A1Xb7GnSNaxwFDUqjFQBPrvOpJMiUSP1yLphzXkdNii2sLMGwMdD2HEpvZvC941jhz2mnzXlG%2Bc%2Bq3Af2NJkHgtjegCO7RbkI%2FBsAbHxceKreR%2BIea2C9bI2aqXOFgvYo9pXIf&X-Amz-Signature=bf3a653d443f6c6a5edb79ab78448f32745d4b13ea56b82c4d5cfd73f334b3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SIG53O2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71pjxz%2BATs7%2BfqcGL1nZZFiZaWqeD%2FsAKEOr2Qr8XNAIhAL8Gu%2FM5UA9HuqZC%2FWROk%2F6vjBt3T9ZjPyTgsjYkNVVoKv8DCFsQABoMNjM3NDIzMTgzODA1Igxj7tOAwNQvu%2BAvWAUq3APYcAfS1CU2PwsmDNrtNC6LU9H5JMGDl7Gj0A3cPWT2sdZbLLtN3TdrC240hv%2BRO3o5ACnIHXJONaZJCyWlclpIOKQkUIngPqqlP78g2Oi4vUK8R4eqYaDhHU3WD38JLbkHLEvmp63f6yldu3dfNxhVdqk0Bsq7SRBiY%2FmY6VyUzWjFuL%2B%2Bzp4v8D%2Boy8VEkdD%2BNUjtzdGSycR7zdLXw%2B3iD7Li0do%2FxKkbsT37rUnzSZ5EXx2q9rk%2BIYSm1dFm1ditvqc1Mrlwplt%2BL8%2FqJ9N6FWUC%2Bbof7id3zMuKGg4YRIj01DZD2g7yXe3Of8oxbJvItvQceMlJA4IASZY3NHkRpd%2FgSmsvYbldkdObCJfmD9yCMuE5uOie9msvboqZlwVA%2BU4SFwV%2BFCxr7P%2Fm4ytX99OZfUZK6eDlZ67TEpP6TYTtrwcuifBrf8c0ALk5g64PYGWvgPRZjzlLalUytcOQeUf4tzyFuqAHcmlYASZWll3WT0rHC4lS535AI12Wm2cla3pp1NiibK50cdYDCTUNStL9fDVdTwNANIOeJ49PSFNm0KCGSBnp6mRydaaT72YO%2FYZQFx0H%2F8hfKszCz5o4zlxvqRWDmJI7la3d76HNdLKMp0m8bzu8wZeJWTCvlYPABjqkAWBtbTh%2Fq1PjGm%2F55h5prxn04d%2F5hkIgilP30ANh0w6dPTwdmTZuQWgcCFU3coDAGNU43LloXVnfziTX6m54X7A1Xb7GnSNaxwFDUqjFQBPrvOpJMiUSP1yLphzXkdNii2sLMGwMdD2HEpvZvC941jhz2mnzXlG%2Bc%2Bq3Af2NJkHgtjegCO7RbkI%2FBsAbHxceKreR%2BIea2C9bI2aqXOFgvYo9pXIf&X-Amz-Signature=ddf32582734d07e1c85c0388c241df0bcd8677dd623a3729fddc6bc2804862a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SIG53O2%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T100937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC71pjxz%2BATs7%2BfqcGL1nZZFiZaWqeD%2FsAKEOr2Qr8XNAIhAL8Gu%2FM5UA9HuqZC%2FWROk%2F6vjBt3T9ZjPyTgsjYkNVVoKv8DCFsQABoMNjM3NDIzMTgzODA1Igxj7tOAwNQvu%2BAvWAUq3APYcAfS1CU2PwsmDNrtNC6LU9H5JMGDl7Gj0A3cPWT2sdZbLLtN3TdrC240hv%2BRO3o5ACnIHXJONaZJCyWlclpIOKQkUIngPqqlP78g2Oi4vUK8R4eqYaDhHU3WD38JLbkHLEvmp63f6yldu3dfNxhVdqk0Bsq7SRBiY%2FmY6VyUzWjFuL%2B%2Bzp4v8D%2Boy8VEkdD%2BNUjtzdGSycR7zdLXw%2B3iD7Li0do%2FxKkbsT37rUnzSZ5EXx2q9rk%2BIYSm1dFm1ditvqc1Mrlwplt%2BL8%2FqJ9N6FWUC%2Bbof7id3zMuKGg4YRIj01DZD2g7yXe3Of8oxbJvItvQceMlJA4IASZY3NHkRpd%2FgSmsvYbldkdObCJfmD9yCMuE5uOie9msvboqZlwVA%2BU4SFwV%2BFCxr7P%2Fm4ytX99OZfUZK6eDlZ67TEpP6TYTtrwcuifBrf8c0ALk5g64PYGWvgPRZjzlLalUytcOQeUf4tzyFuqAHcmlYASZWll3WT0rHC4lS535AI12Wm2cla3pp1NiibK50cdYDCTUNStL9fDVdTwNANIOeJ49PSFNm0KCGSBnp6mRydaaT72YO%2FYZQFx0H%2F8hfKszCz5o4zlxvqRWDmJI7la3d76HNdLKMp0m8bzu8wZeJWTCvlYPABjqkAWBtbTh%2Fq1PjGm%2F55h5prxn04d%2F5hkIgilP30ANh0w6dPTwdmTZuQWgcCFU3coDAGNU43LloXVnfziTX6m54X7A1Xb7GnSNaxwFDUqjFQBPrvOpJMiUSP1yLphzXkdNii2sLMGwMdD2HEpvZvC941jhz2mnzXlG%2Bc%2Bq3Af2NJkHgtjegCO7RbkI%2FBsAbHxceKreR%2BIea2C9bI2aqXOFgvYo9pXIf&X-Amz-Signature=ce0f074f87077ca31e5174f619db2c6d26ea18c8e99c9abbc474c33cfe707475&X-Amz-SignedHeaders=host&x-id=GetObject)
