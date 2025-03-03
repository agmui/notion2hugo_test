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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDDC4AA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvfg6Va8Sl2iDOCtxbxHSI5jzkmJwZZNLZKy%2BO34V4EQIhAMewL2Xn9ockMEL25e1AUEOApAjWhvnsv3Uz2w1CjmnXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmH3IGkl%2FdJxct7Iq3APy692AC3QeAF54HrWPezbE0aQwBU2vvIZhgNG%2Bhw9CByeqYoG8dTRD2BoYG8wcXTJsgTOnggSn9iRnp7w1mmQecf77zNY9K%2B0BpjRYV3KDol%2BkKfmGW0EH1WX5mBQPEpub3uGBoK81kbgNsgIRMeJhBLq9fjcP5iSW2h%2BhZZfCr7zKDhjMLXFYSafOo5KpA3ZmlPcLLvbBb1x%2Bq8VNKIq5h8Hu3pdT2Dn9YDplmfBOXIzaPNJAdIFZX2OB2aHPsf50enuZQ0WkoiC8Q4sfyUYuHr%2BqBuLt14mL3c%2BFnFJXa3ZgI927SPz58Q1zg0s5P75H5wneunkJEyHHafBwgRimhTZE9tTedZgLVwQFo26oDr%2F%2Bhm3fMabDPQYJBnZuiw8h1ATeJiy6Hs5%2BUO8IZJQ4sH69erEzRt8Qaw5T%2Bg3fyS%2F8H07uxblHuqZbc3gUkvldckTbV7Ge38NiKFHHv%2Fl9pm00PXH%2FUigOjMN1Ya5XaDMz7C08FBpOVEf0hX4BZyVFfl6Qyb%2BfqSznQftgtH%2Fm6jtGf4yazT8KwXyGszQAt6Zu%2F01RcdLjCnmOkTvnJiuQZroV4wBYrvnWVDEWHXhz5AOBUALve6YyRoBIcPLKV0Eo91heUND%2FEWG1SjD9yZO%2BBjqkAVCAtLciny%2FfMo3RAYVwUR3B6WJN%2FT0bKGYzSbCqc7%2FN%2FU%2BPWkbn%2B%2BkuEKFtT37Fc72A5R6dpFM1hedMPkAXqj5MkfsHmqyg4qhlpoYGN8Znr7pW22%2BScKpU1kpkIyes4rDRVP2wpnTwvU8CUfXyVLtuE7WlMAelcLKio7OCAQapdvxFulqBv2tcvIy495%2BkKtGDA6LKgrh33DtrieXADbmZi4Pz&X-Amz-Signature=5f30ee45c86d17c02da953efad413206e103272a3b9b24450cfe2b8b72fa871e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDDC4AA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvfg6Va8Sl2iDOCtxbxHSI5jzkmJwZZNLZKy%2BO34V4EQIhAMewL2Xn9ockMEL25e1AUEOApAjWhvnsv3Uz2w1CjmnXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmH3IGkl%2FdJxct7Iq3APy692AC3QeAF54HrWPezbE0aQwBU2vvIZhgNG%2Bhw9CByeqYoG8dTRD2BoYG8wcXTJsgTOnggSn9iRnp7w1mmQecf77zNY9K%2B0BpjRYV3KDol%2BkKfmGW0EH1WX5mBQPEpub3uGBoK81kbgNsgIRMeJhBLq9fjcP5iSW2h%2BhZZfCr7zKDhjMLXFYSafOo5KpA3ZmlPcLLvbBb1x%2Bq8VNKIq5h8Hu3pdT2Dn9YDplmfBOXIzaPNJAdIFZX2OB2aHPsf50enuZQ0WkoiC8Q4sfyUYuHr%2BqBuLt14mL3c%2BFnFJXa3ZgI927SPz58Q1zg0s5P75H5wneunkJEyHHafBwgRimhTZE9tTedZgLVwQFo26oDr%2F%2Bhm3fMabDPQYJBnZuiw8h1ATeJiy6Hs5%2BUO8IZJQ4sH69erEzRt8Qaw5T%2Bg3fyS%2F8H07uxblHuqZbc3gUkvldckTbV7Ge38NiKFHHv%2Fl9pm00PXH%2FUigOjMN1Ya5XaDMz7C08FBpOVEf0hX4BZyVFfl6Qyb%2BfqSznQftgtH%2Fm6jtGf4yazT8KwXyGszQAt6Zu%2F01RcdLjCnmOkTvnJiuQZroV4wBYrvnWVDEWHXhz5AOBUALve6YyRoBIcPLKV0Eo91heUND%2FEWG1SjD9yZO%2BBjqkAVCAtLciny%2FfMo3RAYVwUR3B6WJN%2FT0bKGYzSbCqc7%2FN%2FU%2BPWkbn%2B%2BkuEKFtT37Fc72A5R6dpFM1hedMPkAXqj5MkfsHmqyg4qhlpoYGN8Znr7pW22%2BScKpU1kpkIyes4rDRVP2wpnTwvU8CUfXyVLtuE7WlMAelcLKio7OCAQapdvxFulqBv2tcvIy495%2BkKtGDA6LKgrh33DtrieXADbmZi4Pz&X-Amz-Signature=947459a6160867f44424d405ab8dc6a99c4ff36ba1da2f6303f8e37ff8705dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDDC4AA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvfg6Va8Sl2iDOCtxbxHSI5jzkmJwZZNLZKy%2BO34V4EQIhAMewL2Xn9ockMEL25e1AUEOApAjWhvnsv3Uz2w1CjmnXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmH3IGkl%2FdJxct7Iq3APy692AC3QeAF54HrWPezbE0aQwBU2vvIZhgNG%2Bhw9CByeqYoG8dTRD2BoYG8wcXTJsgTOnggSn9iRnp7w1mmQecf77zNY9K%2B0BpjRYV3KDol%2BkKfmGW0EH1WX5mBQPEpub3uGBoK81kbgNsgIRMeJhBLq9fjcP5iSW2h%2BhZZfCr7zKDhjMLXFYSafOo5KpA3ZmlPcLLvbBb1x%2Bq8VNKIq5h8Hu3pdT2Dn9YDplmfBOXIzaPNJAdIFZX2OB2aHPsf50enuZQ0WkoiC8Q4sfyUYuHr%2BqBuLt14mL3c%2BFnFJXa3ZgI927SPz58Q1zg0s5P75H5wneunkJEyHHafBwgRimhTZE9tTedZgLVwQFo26oDr%2F%2Bhm3fMabDPQYJBnZuiw8h1ATeJiy6Hs5%2BUO8IZJQ4sH69erEzRt8Qaw5T%2Bg3fyS%2F8H07uxblHuqZbc3gUkvldckTbV7Ge38NiKFHHv%2Fl9pm00PXH%2FUigOjMN1Ya5XaDMz7C08FBpOVEf0hX4BZyVFfl6Qyb%2BfqSznQftgtH%2Fm6jtGf4yazT8KwXyGszQAt6Zu%2F01RcdLjCnmOkTvnJiuQZroV4wBYrvnWVDEWHXhz5AOBUALve6YyRoBIcPLKV0Eo91heUND%2FEWG1SjD9yZO%2BBjqkAVCAtLciny%2FfMo3RAYVwUR3B6WJN%2FT0bKGYzSbCqc7%2FN%2FU%2BPWkbn%2B%2BkuEKFtT37Fc72A5R6dpFM1hedMPkAXqj5MkfsHmqyg4qhlpoYGN8Znr7pW22%2BScKpU1kpkIyes4rDRVP2wpnTwvU8CUfXyVLtuE7WlMAelcLKio7OCAQapdvxFulqBv2tcvIy495%2BkKtGDA6LKgrh33DtrieXADbmZi4Pz&X-Amz-Signature=d8480476406aaad10dd3f87290e01c7d0007ba52fbf1e4e32790d7899d3a51f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDDC4AA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvfg6Va8Sl2iDOCtxbxHSI5jzkmJwZZNLZKy%2BO34V4EQIhAMewL2Xn9ockMEL25e1AUEOApAjWhvnsv3Uz2w1CjmnXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmH3IGkl%2FdJxct7Iq3APy692AC3QeAF54HrWPezbE0aQwBU2vvIZhgNG%2Bhw9CByeqYoG8dTRD2BoYG8wcXTJsgTOnggSn9iRnp7w1mmQecf77zNY9K%2B0BpjRYV3KDol%2BkKfmGW0EH1WX5mBQPEpub3uGBoK81kbgNsgIRMeJhBLq9fjcP5iSW2h%2BhZZfCr7zKDhjMLXFYSafOo5KpA3ZmlPcLLvbBb1x%2Bq8VNKIq5h8Hu3pdT2Dn9YDplmfBOXIzaPNJAdIFZX2OB2aHPsf50enuZQ0WkoiC8Q4sfyUYuHr%2BqBuLt14mL3c%2BFnFJXa3ZgI927SPz58Q1zg0s5P75H5wneunkJEyHHafBwgRimhTZE9tTedZgLVwQFo26oDr%2F%2Bhm3fMabDPQYJBnZuiw8h1ATeJiy6Hs5%2BUO8IZJQ4sH69erEzRt8Qaw5T%2Bg3fyS%2F8H07uxblHuqZbc3gUkvldckTbV7Ge38NiKFHHv%2Fl9pm00PXH%2FUigOjMN1Ya5XaDMz7C08FBpOVEf0hX4BZyVFfl6Qyb%2BfqSznQftgtH%2Fm6jtGf4yazT8KwXyGszQAt6Zu%2F01RcdLjCnmOkTvnJiuQZroV4wBYrvnWVDEWHXhz5AOBUALve6YyRoBIcPLKV0Eo91heUND%2FEWG1SjD9yZO%2BBjqkAVCAtLciny%2FfMo3RAYVwUR3B6WJN%2FT0bKGYzSbCqc7%2FN%2FU%2BPWkbn%2B%2BkuEKFtT37Fc72A5R6dpFM1hedMPkAXqj5MkfsHmqyg4qhlpoYGN8Znr7pW22%2BScKpU1kpkIyes4rDRVP2wpnTwvU8CUfXyVLtuE7WlMAelcLKio7OCAQapdvxFulqBv2tcvIy495%2BkKtGDA6LKgrh33DtrieXADbmZi4Pz&X-Amz-Signature=75c8648e87cd38f7999f2e5d140c0e9e2ffb500b61bdde28b6f884e45b77ed63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDDC4AA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvfg6Va8Sl2iDOCtxbxHSI5jzkmJwZZNLZKy%2BO34V4EQIhAMewL2Xn9ockMEL25e1AUEOApAjWhvnsv3Uz2w1CjmnXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmH3IGkl%2FdJxct7Iq3APy692AC3QeAF54HrWPezbE0aQwBU2vvIZhgNG%2Bhw9CByeqYoG8dTRD2BoYG8wcXTJsgTOnggSn9iRnp7w1mmQecf77zNY9K%2B0BpjRYV3KDol%2BkKfmGW0EH1WX5mBQPEpub3uGBoK81kbgNsgIRMeJhBLq9fjcP5iSW2h%2BhZZfCr7zKDhjMLXFYSafOo5KpA3ZmlPcLLvbBb1x%2Bq8VNKIq5h8Hu3pdT2Dn9YDplmfBOXIzaPNJAdIFZX2OB2aHPsf50enuZQ0WkoiC8Q4sfyUYuHr%2BqBuLt14mL3c%2BFnFJXa3ZgI927SPz58Q1zg0s5P75H5wneunkJEyHHafBwgRimhTZE9tTedZgLVwQFo26oDr%2F%2Bhm3fMabDPQYJBnZuiw8h1ATeJiy6Hs5%2BUO8IZJQ4sH69erEzRt8Qaw5T%2Bg3fyS%2F8H07uxblHuqZbc3gUkvldckTbV7Ge38NiKFHHv%2Fl9pm00PXH%2FUigOjMN1Ya5XaDMz7C08FBpOVEf0hX4BZyVFfl6Qyb%2BfqSznQftgtH%2Fm6jtGf4yazT8KwXyGszQAt6Zu%2F01RcdLjCnmOkTvnJiuQZroV4wBYrvnWVDEWHXhz5AOBUALve6YyRoBIcPLKV0Eo91heUND%2FEWG1SjD9yZO%2BBjqkAVCAtLciny%2FfMo3RAYVwUR3B6WJN%2FT0bKGYzSbCqc7%2FN%2FU%2BPWkbn%2B%2BkuEKFtT37Fc72A5R6dpFM1hedMPkAXqj5MkfsHmqyg4qhlpoYGN8Znr7pW22%2BScKpU1kpkIyes4rDRVP2wpnTwvU8CUfXyVLtuE7WlMAelcLKio7OCAQapdvxFulqBv2tcvIy495%2BkKtGDA6LKgrh33DtrieXADbmZi4Pz&X-Amz-Signature=a3cc5d94175bdcd6a79b4085f7142d681afd9ef77f3448e0da835ab8a2e1eff2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDDC4AA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvfg6Va8Sl2iDOCtxbxHSI5jzkmJwZZNLZKy%2BO34V4EQIhAMewL2Xn9ockMEL25e1AUEOApAjWhvnsv3Uz2w1CjmnXKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcmH3IGkl%2FdJxct7Iq3APy692AC3QeAF54HrWPezbE0aQwBU2vvIZhgNG%2Bhw9CByeqYoG8dTRD2BoYG8wcXTJsgTOnggSn9iRnp7w1mmQecf77zNY9K%2B0BpjRYV3KDol%2BkKfmGW0EH1WX5mBQPEpub3uGBoK81kbgNsgIRMeJhBLq9fjcP5iSW2h%2BhZZfCr7zKDhjMLXFYSafOo5KpA3ZmlPcLLvbBb1x%2Bq8VNKIq5h8Hu3pdT2Dn9YDplmfBOXIzaPNJAdIFZX2OB2aHPsf50enuZQ0WkoiC8Q4sfyUYuHr%2BqBuLt14mL3c%2BFnFJXa3ZgI927SPz58Q1zg0s5P75H5wneunkJEyHHafBwgRimhTZE9tTedZgLVwQFo26oDr%2F%2Bhm3fMabDPQYJBnZuiw8h1ATeJiy6Hs5%2BUO8IZJQ4sH69erEzRt8Qaw5T%2Bg3fyS%2F8H07uxblHuqZbc3gUkvldckTbV7Ge38NiKFHHv%2Fl9pm00PXH%2FUigOjMN1Ya5XaDMz7C08FBpOVEf0hX4BZyVFfl6Qyb%2BfqSznQftgtH%2Fm6jtGf4yazT8KwXyGszQAt6Zu%2F01RcdLjCnmOkTvnJiuQZroV4wBYrvnWVDEWHXhz5AOBUALve6YyRoBIcPLKV0Eo91heUND%2FEWG1SjD9yZO%2BBjqkAVCAtLciny%2FfMo3RAYVwUR3B6WJN%2FT0bKGYzSbCqc7%2FN%2FU%2BPWkbn%2B%2BkuEKFtT37Fc72A5R6dpFM1hedMPkAXqj5MkfsHmqyg4qhlpoYGN8Znr7pW22%2BScKpU1kpkIyes4rDRVP2wpnTwvU8CUfXyVLtuE7WlMAelcLKio7OCAQapdvxFulqBv2tcvIy495%2BkKtGDA6LKgrh33DtrieXADbmZi4Pz&X-Amz-Signature=835a862f407f248386bf7c461de80562b541c0579b565f4f9daeed157889b7db&X-Amz-SignedHeaders=host&x-id=GetObject)
