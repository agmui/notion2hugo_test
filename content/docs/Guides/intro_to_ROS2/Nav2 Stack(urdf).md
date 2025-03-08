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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P65ERYX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBHgj9iigT2%2BLIbgaXMF1JiIVKsiZ4Xe4gR1yvpxT%2BWfAiA9E10GkkdeJHDh05qbaU2S4KyBMyrq5MdGV81mb6fGLir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQy1aWaK4Bv3kFVReKtwD7wMCh%2BmEnWcIq0lNeTR7w2F4s1%2BnMYGeOiRx3H4ntC18Gb1MbvaFP2VWeh3SsQZDbQSdEs%2FAg0eNFU%2FrNi3nRC80GbeDEyKX2LswLOKvb%2BE%2FOra5Wh7dm4Kz%2F3Ps39qK86x9cP1HmImDUIjADAES%2FPECG1DNrxCfrSPINgmtWlnLVeatjlXrK4sAoU9EWEZkPoTHmdGZD6Pj8Cv1wRS5LNFma8Z5o7KA%2FBBsIJ1fDOrjLSunMEIPtQI7rgHKMAB4GeKot956FAlkANCa3NlotSn8UBHUHLHZifbMv6qJsjN%2FLQ6o9rSAPjoxOPQYk2Jph8aeGE8Xl8%2B%2Fj1WiIUKpKCkqqGPcnAUdI76IL8UyjBIB6QBvuTNMoL0aTVyWNIMez0fGKehSdByneQ98RFw7S3CwkkrgC1Vn3OzqJjycSwKPot8GL9i8QNMfE8NQMzEsCLf%2Fb%2Fxqigkk0eKfI7shAEyClywwt1pXHLMKOLV61WKzb%2F6Qi3cDvNoyzliZrAJErQJpQh%2FJljn9VmbhMXWHas45BPbdsSOwVsyAhE9K3bU%2BQBKVqeFkpj4WRzonklVFe7UGnQ%2B%2Bb%2FKIcuIUd5HaZ8qhgzuVQm2MMY6tJPVIWuMqbANLAqo2dZP4md8w3YKyvgY6pgGu7Lphp%2FS61VMxrrG1sGllxpes2P8YAFOJYDge%2FXgxBvOzuXvepxskacraqYIDrthAHmFxLPSGqInz60zRG1EOeXVlSULmaLAf872jdT%2FZdzolSVBggDzqbm4Ms73y1gVP2tEExqkKvH3IQKO9t%2FJE0t%2F1ctYwkGeuNFtyWF95MP8rxxgDBvKnfK6BOWX9uiKzFYXzB6AxoXCybgfRFUQc%2Bat%2FgF1X&X-Amz-Signature=d9b0b759fac3e7379fc8b9861bbfd4b60a117b36f4275d3d6807797b87e29b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P65ERYX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBHgj9iigT2%2BLIbgaXMF1JiIVKsiZ4Xe4gR1yvpxT%2BWfAiA9E10GkkdeJHDh05qbaU2S4KyBMyrq5MdGV81mb6fGLir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQy1aWaK4Bv3kFVReKtwD7wMCh%2BmEnWcIq0lNeTR7w2F4s1%2BnMYGeOiRx3H4ntC18Gb1MbvaFP2VWeh3SsQZDbQSdEs%2FAg0eNFU%2FrNi3nRC80GbeDEyKX2LswLOKvb%2BE%2FOra5Wh7dm4Kz%2F3Ps39qK86x9cP1HmImDUIjADAES%2FPECG1DNrxCfrSPINgmtWlnLVeatjlXrK4sAoU9EWEZkPoTHmdGZD6Pj8Cv1wRS5LNFma8Z5o7KA%2FBBsIJ1fDOrjLSunMEIPtQI7rgHKMAB4GeKot956FAlkANCa3NlotSn8UBHUHLHZifbMv6qJsjN%2FLQ6o9rSAPjoxOPQYk2Jph8aeGE8Xl8%2B%2Fj1WiIUKpKCkqqGPcnAUdI76IL8UyjBIB6QBvuTNMoL0aTVyWNIMez0fGKehSdByneQ98RFw7S3CwkkrgC1Vn3OzqJjycSwKPot8GL9i8QNMfE8NQMzEsCLf%2Fb%2Fxqigkk0eKfI7shAEyClywwt1pXHLMKOLV61WKzb%2F6Qi3cDvNoyzliZrAJErQJpQh%2FJljn9VmbhMXWHas45BPbdsSOwVsyAhE9K3bU%2BQBKVqeFkpj4WRzonklVFe7UGnQ%2B%2Bb%2FKIcuIUd5HaZ8qhgzuVQm2MMY6tJPVIWuMqbANLAqo2dZP4md8w3YKyvgY6pgGu7Lphp%2FS61VMxrrG1sGllxpes2P8YAFOJYDge%2FXgxBvOzuXvepxskacraqYIDrthAHmFxLPSGqInz60zRG1EOeXVlSULmaLAf872jdT%2FZdzolSVBggDzqbm4Ms73y1gVP2tEExqkKvH3IQKO9t%2FJE0t%2F1ctYwkGeuNFtyWF95MP8rxxgDBvKnfK6BOWX9uiKzFYXzB6AxoXCybgfRFUQc%2Bat%2FgF1X&X-Amz-Signature=2719923bc3e692118304cd46f12e9145d30a1afc3c4f8f9579c54e50a744d0a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P65ERYX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBHgj9iigT2%2BLIbgaXMF1JiIVKsiZ4Xe4gR1yvpxT%2BWfAiA9E10GkkdeJHDh05qbaU2S4KyBMyrq5MdGV81mb6fGLir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQy1aWaK4Bv3kFVReKtwD7wMCh%2BmEnWcIq0lNeTR7w2F4s1%2BnMYGeOiRx3H4ntC18Gb1MbvaFP2VWeh3SsQZDbQSdEs%2FAg0eNFU%2FrNi3nRC80GbeDEyKX2LswLOKvb%2BE%2FOra5Wh7dm4Kz%2F3Ps39qK86x9cP1HmImDUIjADAES%2FPECG1DNrxCfrSPINgmtWlnLVeatjlXrK4sAoU9EWEZkPoTHmdGZD6Pj8Cv1wRS5LNFma8Z5o7KA%2FBBsIJ1fDOrjLSunMEIPtQI7rgHKMAB4GeKot956FAlkANCa3NlotSn8UBHUHLHZifbMv6qJsjN%2FLQ6o9rSAPjoxOPQYk2Jph8aeGE8Xl8%2B%2Fj1WiIUKpKCkqqGPcnAUdI76IL8UyjBIB6QBvuTNMoL0aTVyWNIMez0fGKehSdByneQ98RFw7S3CwkkrgC1Vn3OzqJjycSwKPot8GL9i8QNMfE8NQMzEsCLf%2Fb%2Fxqigkk0eKfI7shAEyClywwt1pXHLMKOLV61WKzb%2F6Qi3cDvNoyzliZrAJErQJpQh%2FJljn9VmbhMXWHas45BPbdsSOwVsyAhE9K3bU%2BQBKVqeFkpj4WRzonklVFe7UGnQ%2B%2Bb%2FKIcuIUd5HaZ8qhgzuVQm2MMY6tJPVIWuMqbANLAqo2dZP4md8w3YKyvgY6pgGu7Lphp%2FS61VMxrrG1sGllxpes2P8YAFOJYDge%2FXgxBvOzuXvepxskacraqYIDrthAHmFxLPSGqInz60zRG1EOeXVlSULmaLAf872jdT%2FZdzolSVBggDzqbm4Ms73y1gVP2tEExqkKvH3IQKO9t%2FJE0t%2F1ctYwkGeuNFtyWF95MP8rxxgDBvKnfK6BOWX9uiKzFYXzB6AxoXCybgfRFUQc%2Bat%2FgF1X&X-Amz-Signature=99bdfd92e48ef7e2f86d7a0edd3b388165e83c2cf5251631f77f6332e8bb0502&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P65ERYX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBHgj9iigT2%2BLIbgaXMF1JiIVKsiZ4Xe4gR1yvpxT%2BWfAiA9E10GkkdeJHDh05qbaU2S4KyBMyrq5MdGV81mb6fGLir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQy1aWaK4Bv3kFVReKtwD7wMCh%2BmEnWcIq0lNeTR7w2F4s1%2BnMYGeOiRx3H4ntC18Gb1MbvaFP2VWeh3SsQZDbQSdEs%2FAg0eNFU%2FrNi3nRC80GbeDEyKX2LswLOKvb%2BE%2FOra5Wh7dm4Kz%2F3Ps39qK86x9cP1HmImDUIjADAES%2FPECG1DNrxCfrSPINgmtWlnLVeatjlXrK4sAoU9EWEZkPoTHmdGZD6Pj8Cv1wRS5LNFma8Z5o7KA%2FBBsIJ1fDOrjLSunMEIPtQI7rgHKMAB4GeKot956FAlkANCa3NlotSn8UBHUHLHZifbMv6qJsjN%2FLQ6o9rSAPjoxOPQYk2Jph8aeGE8Xl8%2B%2Fj1WiIUKpKCkqqGPcnAUdI76IL8UyjBIB6QBvuTNMoL0aTVyWNIMez0fGKehSdByneQ98RFw7S3CwkkrgC1Vn3OzqJjycSwKPot8GL9i8QNMfE8NQMzEsCLf%2Fb%2Fxqigkk0eKfI7shAEyClywwt1pXHLMKOLV61WKzb%2F6Qi3cDvNoyzliZrAJErQJpQh%2FJljn9VmbhMXWHas45BPbdsSOwVsyAhE9K3bU%2BQBKVqeFkpj4WRzonklVFe7UGnQ%2B%2Bb%2FKIcuIUd5HaZ8qhgzuVQm2MMY6tJPVIWuMqbANLAqo2dZP4md8w3YKyvgY6pgGu7Lphp%2FS61VMxrrG1sGllxpes2P8YAFOJYDge%2FXgxBvOzuXvepxskacraqYIDrthAHmFxLPSGqInz60zRG1EOeXVlSULmaLAf872jdT%2FZdzolSVBggDzqbm4Ms73y1gVP2tEExqkKvH3IQKO9t%2FJE0t%2F1ctYwkGeuNFtyWF95MP8rxxgDBvKnfK6BOWX9uiKzFYXzB6AxoXCybgfRFUQc%2Bat%2FgF1X&X-Amz-Signature=464d6740813afa6c8035cf2e3d12f984bd9b88cd1c5ebe260da1e158159209af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P65ERYX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBHgj9iigT2%2BLIbgaXMF1JiIVKsiZ4Xe4gR1yvpxT%2BWfAiA9E10GkkdeJHDh05qbaU2S4KyBMyrq5MdGV81mb6fGLir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQy1aWaK4Bv3kFVReKtwD7wMCh%2BmEnWcIq0lNeTR7w2F4s1%2BnMYGeOiRx3H4ntC18Gb1MbvaFP2VWeh3SsQZDbQSdEs%2FAg0eNFU%2FrNi3nRC80GbeDEyKX2LswLOKvb%2BE%2FOra5Wh7dm4Kz%2F3Ps39qK86x9cP1HmImDUIjADAES%2FPECG1DNrxCfrSPINgmtWlnLVeatjlXrK4sAoU9EWEZkPoTHmdGZD6Pj8Cv1wRS5LNFma8Z5o7KA%2FBBsIJ1fDOrjLSunMEIPtQI7rgHKMAB4GeKot956FAlkANCa3NlotSn8UBHUHLHZifbMv6qJsjN%2FLQ6o9rSAPjoxOPQYk2Jph8aeGE8Xl8%2B%2Fj1WiIUKpKCkqqGPcnAUdI76IL8UyjBIB6QBvuTNMoL0aTVyWNIMez0fGKehSdByneQ98RFw7S3CwkkrgC1Vn3OzqJjycSwKPot8GL9i8QNMfE8NQMzEsCLf%2Fb%2Fxqigkk0eKfI7shAEyClywwt1pXHLMKOLV61WKzb%2F6Qi3cDvNoyzliZrAJErQJpQh%2FJljn9VmbhMXWHas45BPbdsSOwVsyAhE9K3bU%2BQBKVqeFkpj4WRzonklVFe7UGnQ%2B%2Bb%2FKIcuIUd5HaZ8qhgzuVQm2MMY6tJPVIWuMqbANLAqo2dZP4md8w3YKyvgY6pgGu7Lphp%2FS61VMxrrG1sGllxpes2P8YAFOJYDge%2FXgxBvOzuXvepxskacraqYIDrthAHmFxLPSGqInz60zRG1EOeXVlSULmaLAf872jdT%2FZdzolSVBggDzqbm4Ms73y1gVP2tEExqkKvH3IQKO9t%2FJE0t%2F1ctYwkGeuNFtyWF95MP8rxxgDBvKnfK6BOWX9uiKzFYXzB6AxoXCybgfRFUQc%2Bat%2FgF1X&X-Amz-Signature=55446ab2a79637dfa8c8564278d931a4d95685300e31f0527880d3bc18b7b4a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P65ERYX%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBHgj9iigT2%2BLIbgaXMF1JiIVKsiZ4Xe4gR1yvpxT%2BWfAiA9E10GkkdeJHDh05qbaU2S4KyBMyrq5MdGV81mb6fGLir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQy1aWaK4Bv3kFVReKtwD7wMCh%2BmEnWcIq0lNeTR7w2F4s1%2BnMYGeOiRx3H4ntC18Gb1MbvaFP2VWeh3SsQZDbQSdEs%2FAg0eNFU%2FrNi3nRC80GbeDEyKX2LswLOKvb%2BE%2FOra5Wh7dm4Kz%2F3Ps39qK86x9cP1HmImDUIjADAES%2FPECG1DNrxCfrSPINgmtWlnLVeatjlXrK4sAoU9EWEZkPoTHmdGZD6Pj8Cv1wRS5LNFma8Z5o7KA%2FBBsIJ1fDOrjLSunMEIPtQI7rgHKMAB4GeKot956FAlkANCa3NlotSn8UBHUHLHZifbMv6qJsjN%2FLQ6o9rSAPjoxOPQYk2Jph8aeGE8Xl8%2B%2Fj1WiIUKpKCkqqGPcnAUdI76IL8UyjBIB6QBvuTNMoL0aTVyWNIMez0fGKehSdByneQ98RFw7S3CwkkrgC1Vn3OzqJjycSwKPot8GL9i8QNMfE8NQMzEsCLf%2Fb%2Fxqigkk0eKfI7shAEyClywwt1pXHLMKOLV61WKzb%2F6Qi3cDvNoyzliZrAJErQJpQh%2FJljn9VmbhMXWHas45BPbdsSOwVsyAhE9K3bU%2BQBKVqeFkpj4WRzonklVFe7UGnQ%2B%2Bb%2FKIcuIUd5HaZ8qhgzuVQm2MMY6tJPVIWuMqbANLAqo2dZP4md8w3YKyvgY6pgGu7Lphp%2FS61VMxrrG1sGllxpes2P8YAFOJYDge%2FXgxBvOzuXvepxskacraqYIDrthAHmFxLPSGqInz60zRG1EOeXVlSULmaLAf872jdT%2FZdzolSVBggDzqbm4Ms73y1gVP2tEExqkKvH3IQKO9t%2FJE0t%2F1ctYwkGeuNFtyWF95MP8rxxgDBvKnfK6BOWX9uiKzFYXzB6AxoXCybgfRFUQc%2Bat%2FgF1X&X-Amz-Signature=a35b4239def34002c2ca4f65dc26fe0c4fe3d192e974c083d5052f8c67fc8a5a&X-Amz-SignedHeaders=host&x-id=GetObject)
