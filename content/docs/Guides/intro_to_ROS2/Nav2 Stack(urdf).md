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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDESNYYL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEFRtBJ5NCePEoirLET4PEa3NPV0xH89Xwp6iUQItZuAIhAItLERxqL0618mDlVWZEI7bYovtNvBIDmnHidRpY1f5VKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTN6MeglKzvmycldwq3AO0cNgsNf5Ycd3SMWVs2CtwHpbNdNyTM9sjFIpZd1Kap3ryfsObWEL7mAsF3SSlANyQfbIFMxA%2FH3B%2FIqik6Wy9n2U2bHH2P5550yPIBihl9LUnKEwJ1Zqxly1efs3rpoZREaJTlh06319cGPXFIysx0fs8ZlKjIgT5CxtR9H0v%2B9lFJSG9d9m8vixzN5%2FMarDfy9tckmMmjqin5EZQJHQrun5TNV0tthqoCPzLHgSVdgCbrmHRr2NKwAWizHTTtiTqPKwSGqbOdzoVpeA0GUZXTfizQ33ItUxtpMJ7gD%2BVLWxGRifNYb1jVZaJLoqTUktX1LG60mRwyLVVycwpMhQctwjj9STtYoYoIVxajGDfADZZSevHANVswv1FAkHm4ZmvggCjRhnymV50wm8yGqOkwA9rByXMsMIRIikB6g5gkFDQa26ORMC5fzbdmpkyxeKd4uTnmTBqacZZ63T9vZI%2FApEwy6pQc1XdfpYW3e4tMrJDsNrTg46WzyG11yfzs1x58dcR3z2rT5wlqSIxXSEpEGmTccN7fmAP6HiREOO4bIB%2BXVS%2BHmLF7s95xG%2FQIfjsHjoJbJb%2BgiFulISIGyKMBYXarKSSlibzJR5oL%2FjgZIM61G5FMsaTt7UIsTC92fPDBjqkAWm55FBIe66zUeL4YaA5B3S8UUirLEB9eSdSGfB0jzcxuK43CsGyO48gFP%2FlY9GAuO5Hp0hPc4%2BDPHjhY%2B%2FALI3XQizkrkfHOr72yEYjnc9lkcop%2BelM9FFQxhzz2wX6F8fd%2FdbYErvZk9NnM7AvMwsdi9Wt03BBb4nVz1uckSOZPrDEDiOEOT8XQdrsc%2BC9qc%2F0E9%2FVMjiC3qstl6EfPEtvZoWv&X-Amz-Signature=64e5bf535a1bedc8aa039f96ae7f718dc72bc3f41a9c3ba3947d426d9f826375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDESNYYL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEFRtBJ5NCePEoirLET4PEa3NPV0xH89Xwp6iUQItZuAIhAItLERxqL0618mDlVWZEI7bYovtNvBIDmnHidRpY1f5VKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTN6MeglKzvmycldwq3AO0cNgsNf5Ycd3SMWVs2CtwHpbNdNyTM9sjFIpZd1Kap3ryfsObWEL7mAsF3SSlANyQfbIFMxA%2FH3B%2FIqik6Wy9n2U2bHH2P5550yPIBihl9LUnKEwJ1Zqxly1efs3rpoZREaJTlh06319cGPXFIysx0fs8ZlKjIgT5CxtR9H0v%2B9lFJSG9d9m8vixzN5%2FMarDfy9tckmMmjqin5EZQJHQrun5TNV0tthqoCPzLHgSVdgCbrmHRr2NKwAWizHTTtiTqPKwSGqbOdzoVpeA0GUZXTfizQ33ItUxtpMJ7gD%2BVLWxGRifNYb1jVZaJLoqTUktX1LG60mRwyLVVycwpMhQctwjj9STtYoYoIVxajGDfADZZSevHANVswv1FAkHm4ZmvggCjRhnymV50wm8yGqOkwA9rByXMsMIRIikB6g5gkFDQa26ORMC5fzbdmpkyxeKd4uTnmTBqacZZ63T9vZI%2FApEwy6pQc1XdfpYW3e4tMrJDsNrTg46WzyG11yfzs1x58dcR3z2rT5wlqSIxXSEpEGmTccN7fmAP6HiREOO4bIB%2BXVS%2BHmLF7s95xG%2FQIfjsHjoJbJb%2BgiFulISIGyKMBYXarKSSlibzJR5oL%2FjgZIM61G5FMsaTt7UIsTC92fPDBjqkAWm55FBIe66zUeL4YaA5B3S8UUirLEB9eSdSGfB0jzcxuK43CsGyO48gFP%2FlY9GAuO5Hp0hPc4%2BDPHjhY%2B%2FALI3XQizkrkfHOr72yEYjnc9lkcop%2BelM9FFQxhzz2wX6F8fd%2FdbYErvZk9NnM7AvMwsdi9Wt03BBb4nVz1uckSOZPrDEDiOEOT8XQdrsc%2BC9qc%2F0E9%2FVMjiC3qstl6EfPEtvZoWv&X-Amz-Signature=c91ec095d45b1288a074aaf4ded54f1f773d8a28a3069b2cc3f17db80349631e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDESNYYL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEFRtBJ5NCePEoirLET4PEa3NPV0xH89Xwp6iUQItZuAIhAItLERxqL0618mDlVWZEI7bYovtNvBIDmnHidRpY1f5VKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTN6MeglKzvmycldwq3AO0cNgsNf5Ycd3SMWVs2CtwHpbNdNyTM9sjFIpZd1Kap3ryfsObWEL7mAsF3SSlANyQfbIFMxA%2FH3B%2FIqik6Wy9n2U2bHH2P5550yPIBihl9LUnKEwJ1Zqxly1efs3rpoZREaJTlh06319cGPXFIysx0fs8ZlKjIgT5CxtR9H0v%2B9lFJSG9d9m8vixzN5%2FMarDfy9tckmMmjqin5EZQJHQrun5TNV0tthqoCPzLHgSVdgCbrmHRr2NKwAWizHTTtiTqPKwSGqbOdzoVpeA0GUZXTfizQ33ItUxtpMJ7gD%2BVLWxGRifNYb1jVZaJLoqTUktX1LG60mRwyLVVycwpMhQctwjj9STtYoYoIVxajGDfADZZSevHANVswv1FAkHm4ZmvggCjRhnymV50wm8yGqOkwA9rByXMsMIRIikB6g5gkFDQa26ORMC5fzbdmpkyxeKd4uTnmTBqacZZ63T9vZI%2FApEwy6pQc1XdfpYW3e4tMrJDsNrTg46WzyG11yfzs1x58dcR3z2rT5wlqSIxXSEpEGmTccN7fmAP6HiREOO4bIB%2BXVS%2BHmLF7s95xG%2FQIfjsHjoJbJb%2BgiFulISIGyKMBYXarKSSlibzJR5oL%2FjgZIM61G5FMsaTt7UIsTC92fPDBjqkAWm55FBIe66zUeL4YaA5B3S8UUirLEB9eSdSGfB0jzcxuK43CsGyO48gFP%2FlY9GAuO5Hp0hPc4%2BDPHjhY%2B%2FALI3XQizkrkfHOr72yEYjnc9lkcop%2BelM9FFQxhzz2wX6F8fd%2FdbYErvZk9NnM7AvMwsdi9Wt03BBb4nVz1uckSOZPrDEDiOEOT8XQdrsc%2BC9qc%2F0E9%2FVMjiC3qstl6EfPEtvZoWv&X-Amz-Signature=f65325aaa11ef5ead465c97e2090af3d172d2fa91c01b336ae00fd68c4ce0c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDESNYYL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEFRtBJ5NCePEoirLET4PEa3NPV0xH89Xwp6iUQItZuAIhAItLERxqL0618mDlVWZEI7bYovtNvBIDmnHidRpY1f5VKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTN6MeglKzvmycldwq3AO0cNgsNf5Ycd3SMWVs2CtwHpbNdNyTM9sjFIpZd1Kap3ryfsObWEL7mAsF3SSlANyQfbIFMxA%2FH3B%2FIqik6Wy9n2U2bHH2P5550yPIBihl9LUnKEwJ1Zqxly1efs3rpoZREaJTlh06319cGPXFIysx0fs8ZlKjIgT5CxtR9H0v%2B9lFJSG9d9m8vixzN5%2FMarDfy9tckmMmjqin5EZQJHQrun5TNV0tthqoCPzLHgSVdgCbrmHRr2NKwAWizHTTtiTqPKwSGqbOdzoVpeA0GUZXTfizQ33ItUxtpMJ7gD%2BVLWxGRifNYb1jVZaJLoqTUktX1LG60mRwyLVVycwpMhQctwjj9STtYoYoIVxajGDfADZZSevHANVswv1FAkHm4ZmvggCjRhnymV50wm8yGqOkwA9rByXMsMIRIikB6g5gkFDQa26ORMC5fzbdmpkyxeKd4uTnmTBqacZZ63T9vZI%2FApEwy6pQc1XdfpYW3e4tMrJDsNrTg46WzyG11yfzs1x58dcR3z2rT5wlqSIxXSEpEGmTccN7fmAP6HiREOO4bIB%2BXVS%2BHmLF7s95xG%2FQIfjsHjoJbJb%2BgiFulISIGyKMBYXarKSSlibzJR5oL%2FjgZIM61G5FMsaTt7UIsTC92fPDBjqkAWm55FBIe66zUeL4YaA5B3S8UUirLEB9eSdSGfB0jzcxuK43CsGyO48gFP%2FlY9GAuO5Hp0hPc4%2BDPHjhY%2B%2FALI3XQizkrkfHOr72yEYjnc9lkcop%2BelM9FFQxhzz2wX6F8fd%2FdbYErvZk9NnM7AvMwsdi9Wt03BBb4nVz1uckSOZPrDEDiOEOT8XQdrsc%2BC9qc%2F0E9%2FVMjiC3qstl6EfPEtvZoWv&X-Amz-Signature=7efffcd130e097ff2ea3fd81f89a63ea70e20e488412cffa57e6e39ebff9fd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDESNYYL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEFRtBJ5NCePEoirLET4PEa3NPV0xH89Xwp6iUQItZuAIhAItLERxqL0618mDlVWZEI7bYovtNvBIDmnHidRpY1f5VKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTN6MeglKzvmycldwq3AO0cNgsNf5Ycd3SMWVs2CtwHpbNdNyTM9sjFIpZd1Kap3ryfsObWEL7mAsF3SSlANyQfbIFMxA%2FH3B%2FIqik6Wy9n2U2bHH2P5550yPIBihl9LUnKEwJ1Zqxly1efs3rpoZREaJTlh06319cGPXFIysx0fs8ZlKjIgT5CxtR9H0v%2B9lFJSG9d9m8vixzN5%2FMarDfy9tckmMmjqin5EZQJHQrun5TNV0tthqoCPzLHgSVdgCbrmHRr2NKwAWizHTTtiTqPKwSGqbOdzoVpeA0GUZXTfizQ33ItUxtpMJ7gD%2BVLWxGRifNYb1jVZaJLoqTUktX1LG60mRwyLVVycwpMhQctwjj9STtYoYoIVxajGDfADZZSevHANVswv1FAkHm4ZmvggCjRhnymV50wm8yGqOkwA9rByXMsMIRIikB6g5gkFDQa26ORMC5fzbdmpkyxeKd4uTnmTBqacZZ63T9vZI%2FApEwy6pQc1XdfpYW3e4tMrJDsNrTg46WzyG11yfzs1x58dcR3z2rT5wlqSIxXSEpEGmTccN7fmAP6HiREOO4bIB%2BXVS%2BHmLF7s95xG%2FQIfjsHjoJbJb%2BgiFulISIGyKMBYXarKSSlibzJR5oL%2FjgZIM61G5FMsaTt7UIsTC92fPDBjqkAWm55FBIe66zUeL4YaA5B3S8UUirLEB9eSdSGfB0jzcxuK43CsGyO48gFP%2FlY9GAuO5Hp0hPc4%2BDPHjhY%2B%2FALI3XQizkrkfHOr72yEYjnc9lkcop%2BelM9FFQxhzz2wX6F8fd%2FdbYErvZk9NnM7AvMwsdi9Wt03BBb4nVz1uckSOZPrDEDiOEOT8XQdrsc%2BC9qc%2F0E9%2FVMjiC3qstl6EfPEtvZoWv&X-Amz-Signature=7bcd0780d64c257bfc4934f2c6182d3f594a3b1725db5a59451fe7a04ec98169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDESNYYL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T150829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEFRtBJ5NCePEoirLET4PEa3NPV0xH89Xwp6iUQItZuAIhAItLERxqL0618mDlVWZEI7bYovtNvBIDmnHidRpY1f5VKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTN6MeglKzvmycldwq3AO0cNgsNf5Ycd3SMWVs2CtwHpbNdNyTM9sjFIpZd1Kap3ryfsObWEL7mAsF3SSlANyQfbIFMxA%2FH3B%2FIqik6Wy9n2U2bHH2P5550yPIBihl9LUnKEwJ1Zqxly1efs3rpoZREaJTlh06319cGPXFIysx0fs8ZlKjIgT5CxtR9H0v%2B9lFJSG9d9m8vixzN5%2FMarDfy9tckmMmjqin5EZQJHQrun5TNV0tthqoCPzLHgSVdgCbrmHRr2NKwAWizHTTtiTqPKwSGqbOdzoVpeA0GUZXTfizQ33ItUxtpMJ7gD%2BVLWxGRifNYb1jVZaJLoqTUktX1LG60mRwyLVVycwpMhQctwjj9STtYoYoIVxajGDfADZZSevHANVswv1FAkHm4ZmvggCjRhnymV50wm8yGqOkwA9rByXMsMIRIikB6g5gkFDQa26ORMC5fzbdmpkyxeKd4uTnmTBqacZZ63T9vZI%2FApEwy6pQc1XdfpYW3e4tMrJDsNrTg46WzyG11yfzs1x58dcR3z2rT5wlqSIxXSEpEGmTccN7fmAP6HiREOO4bIB%2BXVS%2BHmLF7s95xG%2FQIfjsHjoJbJb%2BgiFulISIGyKMBYXarKSSlibzJR5oL%2FjgZIM61G5FMsaTt7UIsTC92fPDBjqkAWm55FBIe66zUeL4YaA5B3S8UUirLEB9eSdSGfB0jzcxuK43CsGyO48gFP%2FlY9GAuO5Hp0hPc4%2BDPHjhY%2B%2FALI3XQizkrkfHOr72yEYjnc9lkcop%2BelM9FFQxhzz2wX6F8fd%2FdbYErvZk9NnM7AvMwsdi9Wt03BBb4nVz1uckSOZPrDEDiOEOT8XQdrsc%2BC9qc%2F0E9%2FVMjiC3qstl6EfPEtvZoWv&X-Amz-Signature=b7c0c424090b7a08cc97e382d68bbd26379b20789da715321e2d41b615060d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
