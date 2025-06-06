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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXOEU74%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQv2b7O0aWuMNZASU%2B%2Bog0hJ9vRItX4FKaKivep9QOCAiB7Ayu7sLvUpG97aA6E841V8N%2BaORI4bMrdHPjiInwlaSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMbWT7CPoMaKUJWqnHKtwD%2BeC05O47iQpOEaYkoCJ6r8tcnIr9tT8Vi13KUP2U0oHChMIkTkohox%2FAZN3NT7ORnRhq4pbU0IiJPlz9UwYjEA52D9f1eoyVpXL52JNLbI9WOg0uhE0zLmUnTaEt9ElVi9f%2Fp2P890LKN5BwpDQWhNO6shtbCcu97RxrTTg7bxTshzzpKrIJ6HHkfZUhQVu%2BA21lh3sQ84FXmwNMDd4qtrm2eVFhutuCJLD9d6Gyz12ZT569i9A14e68SFPMKWlrQTNvv77VxXcXeaRTpW5K7bZJ%2BNEfuq5vUaYbH9K2BWvCJEqO0RUGgox1i3fQJsKL1RTovKZx7YqKVlm5nHCOk%2FhlG%2FMpra7le1sWc3XrzDN4moGoYw8moJpQMtRzqq5JESg%2BFTwyvg4sHeraUGzr9HL6i0kN7HPxmJ4975TFhs%2BLJ5haaMHMrW7GT34laAfGKq%2FPIPNH0WZmtt%2B1uX1z%2F9BEED%2FiL%2BItZg99oN5NmfHmZiXjGkVtZjCekgyXtHql9g8oc3YKJbWr4oDqHiApnYubDg%2FmwDJEZBdhtyD1CTckVwzRhZRvKBDS2LKjKXOGc3JF6IezU2TVCWjqbCo8oaWEhNHsduSrJ8wWKZBTcAAxGIyKEXn1EuLGxwIwqr2LwgY6pgHUbK68KrLEYoj8K59Vi9izKKKns2gaM9xb%2F9Qmk6znayrlxk%2BDywAUAh%2FiB3yjwnwzBX9n%2BNdCr2U4po%2B46uFQUrO4cBnNpIvL80frHvofcCAG2bfQxAZmFohRPmBSICcpZZBW7oA5F2vQE7%2FOXJz7Pa4%2F4qaLwmmahM0sde9rAIEh6zBIRZhzwl61n7erHtkKwljGpwr5ec9OXfALljNeIV42NLJd&X-Amz-Signature=0bf93fec8578c4caaa041eaf8788a0874704a80236f9b281a3c21e63ca971b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXOEU74%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQv2b7O0aWuMNZASU%2B%2Bog0hJ9vRItX4FKaKivep9QOCAiB7Ayu7sLvUpG97aA6E841V8N%2BaORI4bMrdHPjiInwlaSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMbWT7CPoMaKUJWqnHKtwD%2BeC05O47iQpOEaYkoCJ6r8tcnIr9tT8Vi13KUP2U0oHChMIkTkohox%2FAZN3NT7ORnRhq4pbU0IiJPlz9UwYjEA52D9f1eoyVpXL52JNLbI9WOg0uhE0zLmUnTaEt9ElVi9f%2Fp2P890LKN5BwpDQWhNO6shtbCcu97RxrTTg7bxTshzzpKrIJ6HHkfZUhQVu%2BA21lh3sQ84FXmwNMDd4qtrm2eVFhutuCJLD9d6Gyz12ZT569i9A14e68SFPMKWlrQTNvv77VxXcXeaRTpW5K7bZJ%2BNEfuq5vUaYbH9K2BWvCJEqO0RUGgox1i3fQJsKL1RTovKZx7YqKVlm5nHCOk%2FhlG%2FMpra7le1sWc3XrzDN4moGoYw8moJpQMtRzqq5JESg%2BFTwyvg4sHeraUGzr9HL6i0kN7HPxmJ4975TFhs%2BLJ5haaMHMrW7GT34laAfGKq%2FPIPNH0WZmtt%2B1uX1z%2F9BEED%2FiL%2BItZg99oN5NmfHmZiXjGkVtZjCekgyXtHql9g8oc3YKJbWr4oDqHiApnYubDg%2FmwDJEZBdhtyD1CTckVwzRhZRvKBDS2LKjKXOGc3JF6IezU2TVCWjqbCo8oaWEhNHsduSrJ8wWKZBTcAAxGIyKEXn1EuLGxwIwqr2LwgY6pgHUbK68KrLEYoj8K59Vi9izKKKns2gaM9xb%2F9Qmk6znayrlxk%2BDywAUAh%2FiB3yjwnwzBX9n%2BNdCr2U4po%2B46uFQUrO4cBnNpIvL80frHvofcCAG2bfQxAZmFohRPmBSICcpZZBW7oA5F2vQE7%2FOXJz7Pa4%2F4qaLwmmahM0sde9rAIEh6zBIRZhzwl61n7erHtkKwljGpwr5ec9OXfALljNeIV42NLJd&X-Amz-Signature=985c67c12f9476b2f393dd148e10c650ecfec9096ba512514de41d726b8abcc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXOEU74%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQv2b7O0aWuMNZASU%2B%2Bog0hJ9vRItX4FKaKivep9QOCAiB7Ayu7sLvUpG97aA6E841V8N%2BaORI4bMrdHPjiInwlaSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMbWT7CPoMaKUJWqnHKtwD%2BeC05O47iQpOEaYkoCJ6r8tcnIr9tT8Vi13KUP2U0oHChMIkTkohox%2FAZN3NT7ORnRhq4pbU0IiJPlz9UwYjEA52D9f1eoyVpXL52JNLbI9WOg0uhE0zLmUnTaEt9ElVi9f%2Fp2P890LKN5BwpDQWhNO6shtbCcu97RxrTTg7bxTshzzpKrIJ6HHkfZUhQVu%2BA21lh3sQ84FXmwNMDd4qtrm2eVFhutuCJLD9d6Gyz12ZT569i9A14e68SFPMKWlrQTNvv77VxXcXeaRTpW5K7bZJ%2BNEfuq5vUaYbH9K2BWvCJEqO0RUGgox1i3fQJsKL1RTovKZx7YqKVlm5nHCOk%2FhlG%2FMpra7le1sWc3XrzDN4moGoYw8moJpQMtRzqq5JESg%2BFTwyvg4sHeraUGzr9HL6i0kN7HPxmJ4975TFhs%2BLJ5haaMHMrW7GT34laAfGKq%2FPIPNH0WZmtt%2B1uX1z%2F9BEED%2FiL%2BItZg99oN5NmfHmZiXjGkVtZjCekgyXtHql9g8oc3YKJbWr4oDqHiApnYubDg%2FmwDJEZBdhtyD1CTckVwzRhZRvKBDS2LKjKXOGc3JF6IezU2TVCWjqbCo8oaWEhNHsduSrJ8wWKZBTcAAxGIyKEXn1EuLGxwIwqr2LwgY6pgHUbK68KrLEYoj8K59Vi9izKKKns2gaM9xb%2F9Qmk6znayrlxk%2BDywAUAh%2FiB3yjwnwzBX9n%2BNdCr2U4po%2B46uFQUrO4cBnNpIvL80frHvofcCAG2bfQxAZmFohRPmBSICcpZZBW7oA5F2vQE7%2FOXJz7Pa4%2F4qaLwmmahM0sde9rAIEh6zBIRZhzwl61n7erHtkKwljGpwr5ec9OXfALljNeIV42NLJd&X-Amz-Signature=8ba803cc7f6cec0962480657a9041c7117db3328306aff805f6ce1c1886e31af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXOEU74%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQv2b7O0aWuMNZASU%2B%2Bog0hJ9vRItX4FKaKivep9QOCAiB7Ayu7sLvUpG97aA6E841V8N%2BaORI4bMrdHPjiInwlaSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMbWT7CPoMaKUJWqnHKtwD%2BeC05O47iQpOEaYkoCJ6r8tcnIr9tT8Vi13KUP2U0oHChMIkTkohox%2FAZN3NT7ORnRhq4pbU0IiJPlz9UwYjEA52D9f1eoyVpXL52JNLbI9WOg0uhE0zLmUnTaEt9ElVi9f%2Fp2P890LKN5BwpDQWhNO6shtbCcu97RxrTTg7bxTshzzpKrIJ6HHkfZUhQVu%2BA21lh3sQ84FXmwNMDd4qtrm2eVFhutuCJLD9d6Gyz12ZT569i9A14e68SFPMKWlrQTNvv77VxXcXeaRTpW5K7bZJ%2BNEfuq5vUaYbH9K2BWvCJEqO0RUGgox1i3fQJsKL1RTovKZx7YqKVlm5nHCOk%2FhlG%2FMpra7le1sWc3XrzDN4moGoYw8moJpQMtRzqq5JESg%2BFTwyvg4sHeraUGzr9HL6i0kN7HPxmJ4975TFhs%2BLJ5haaMHMrW7GT34laAfGKq%2FPIPNH0WZmtt%2B1uX1z%2F9BEED%2FiL%2BItZg99oN5NmfHmZiXjGkVtZjCekgyXtHql9g8oc3YKJbWr4oDqHiApnYubDg%2FmwDJEZBdhtyD1CTckVwzRhZRvKBDS2LKjKXOGc3JF6IezU2TVCWjqbCo8oaWEhNHsduSrJ8wWKZBTcAAxGIyKEXn1EuLGxwIwqr2LwgY6pgHUbK68KrLEYoj8K59Vi9izKKKns2gaM9xb%2F9Qmk6znayrlxk%2BDywAUAh%2FiB3yjwnwzBX9n%2BNdCr2U4po%2B46uFQUrO4cBnNpIvL80frHvofcCAG2bfQxAZmFohRPmBSICcpZZBW7oA5F2vQE7%2FOXJz7Pa4%2F4qaLwmmahM0sde9rAIEh6zBIRZhzwl61n7erHtkKwljGpwr5ec9OXfALljNeIV42NLJd&X-Amz-Signature=604726de013d565f9975bc6253e5d459a55053cf1707c9de5764184534d74c39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXOEU74%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQv2b7O0aWuMNZASU%2B%2Bog0hJ9vRItX4FKaKivep9QOCAiB7Ayu7sLvUpG97aA6E841V8N%2BaORI4bMrdHPjiInwlaSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMbWT7CPoMaKUJWqnHKtwD%2BeC05O47iQpOEaYkoCJ6r8tcnIr9tT8Vi13KUP2U0oHChMIkTkohox%2FAZN3NT7ORnRhq4pbU0IiJPlz9UwYjEA52D9f1eoyVpXL52JNLbI9WOg0uhE0zLmUnTaEt9ElVi9f%2Fp2P890LKN5BwpDQWhNO6shtbCcu97RxrTTg7bxTshzzpKrIJ6HHkfZUhQVu%2BA21lh3sQ84FXmwNMDd4qtrm2eVFhutuCJLD9d6Gyz12ZT569i9A14e68SFPMKWlrQTNvv77VxXcXeaRTpW5K7bZJ%2BNEfuq5vUaYbH9K2BWvCJEqO0RUGgox1i3fQJsKL1RTovKZx7YqKVlm5nHCOk%2FhlG%2FMpra7le1sWc3XrzDN4moGoYw8moJpQMtRzqq5JESg%2BFTwyvg4sHeraUGzr9HL6i0kN7HPxmJ4975TFhs%2BLJ5haaMHMrW7GT34laAfGKq%2FPIPNH0WZmtt%2B1uX1z%2F9BEED%2FiL%2BItZg99oN5NmfHmZiXjGkVtZjCekgyXtHql9g8oc3YKJbWr4oDqHiApnYubDg%2FmwDJEZBdhtyD1CTckVwzRhZRvKBDS2LKjKXOGc3JF6IezU2TVCWjqbCo8oaWEhNHsduSrJ8wWKZBTcAAxGIyKEXn1EuLGxwIwqr2LwgY6pgHUbK68KrLEYoj8K59Vi9izKKKns2gaM9xb%2F9Qmk6znayrlxk%2BDywAUAh%2FiB3yjwnwzBX9n%2BNdCr2U4po%2B46uFQUrO4cBnNpIvL80frHvofcCAG2bfQxAZmFohRPmBSICcpZZBW7oA5F2vQE7%2FOXJz7Pa4%2F4qaLwmmahM0sde9rAIEh6zBIRZhzwl61n7erHtkKwljGpwr5ec9OXfALljNeIV42NLJd&X-Amz-Signature=bce62df0475ec1d33e571e7165956ae6ef7d0a81fc4a02327a35105a7fa5cc35&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNXOEU74%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQv2b7O0aWuMNZASU%2B%2Bog0hJ9vRItX4FKaKivep9QOCAiB7Ayu7sLvUpG97aA6E841V8N%2BaORI4bMrdHPjiInwlaSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMbWT7CPoMaKUJWqnHKtwD%2BeC05O47iQpOEaYkoCJ6r8tcnIr9tT8Vi13KUP2U0oHChMIkTkohox%2FAZN3NT7ORnRhq4pbU0IiJPlz9UwYjEA52D9f1eoyVpXL52JNLbI9WOg0uhE0zLmUnTaEt9ElVi9f%2Fp2P890LKN5BwpDQWhNO6shtbCcu97RxrTTg7bxTshzzpKrIJ6HHkfZUhQVu%2BA21lh3sQ84FXmwNMDd4qtrm2eVFhutuCJLD9d6Gyz12ZT569i9A14e68SFPMKWlrQTNvv77VxXcXeaRTpW5K7bZJ%2BNEfuq5vUaYbH9K2BWvCJEqO0RUGgox1i3fQJsKL1RTovKZx7YqKVlm5nHCOk%2FhlG%2FMpra7le1sWc3XrzDN4moGoYw8moJpQMtRzqq5JESg%2BFTwyvg4sHeraUGzr9HL6i0kN7HPxmJ4975TFhs%2BLJ5haaMHMrW7GT34laAfGKq%2FPIPNH0WZmtt%2B1uX1z%2F9BEED%2FiL%2BItZg99oN5NmfHmZiXjGkVtZjCekgyXtHql9g8oc3YKJbWr4oDqHiApnYubDg%2FmwDJEZBdhtyD1CTckVwzRhZRvKBDS2LKjKXOGc3JF6IezU2TVCWjqbCo8oaWEhNHsduSrJ8wWKZBTcAAxGIyKEXn1EuLGxwIwqr2LwgY6pgHUbK68KrLEYoj8K59Vi9izKKKns2gaM9xb%2F9Qmk6znayrlxk%2BDywAUAh%2FiB3yjwnwzBX9n%2BNdCr2U4po%2B46uFQUrO4cBnNpIvL80frHvofcCAG2bfQxAZmFohRPmBSICcpZZBW7oA5F2vQE7%2FOXJz7Pa4%2F4qaLwmmahM0sde9rAIEh6zBIRZhzwl61n7erHtkKwljGpwr5ec9OXfALljNeIV42NLJd&X-Amz-Signature=54bbb07f93b5d89867bef39f2e59cf9835c7833538a1109209f5e0f880025e67&X-Amz-SignedHeaders=host&x-id=GetObject)
