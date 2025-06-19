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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWRSRVR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4yEF1j7IggbBKVBRJMix5uU6oP0Pjb13WjBfvTm9FGwIhAKvZEAZnYuXvm%2FosRmG%2FyQl1UxYmi7kUYbcvES0E6ITbKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOE3oxWcvjkkVXMssq3AOKm%2FgAy3EwKP4bSqWPtoIw7VjX16EVWl1uvcSOQ2QECOPtx5kl51k0VkwWhiHtRN4bKXdAv5hr7X%2BWYpGWkkuFzDD1S8I383HgOdz31fGjSvVlITzEdabSNhIxAlRKloH0MOmDrw7WjIkixUq10e5UBmQNjnVcb%2BbDSHwkRb8uO54OCyK09o7ynJ12gD5AEukZTrtDz8SzHzFTqUPatJ2aurf4WLVTiGJ%2BwjkXk29CaopY06MtOaXjrbQwYa31wTNPL9xT56verdhUyF1MTft3yvPTxr4qzwv0inxH%2Bdfqtg5eooQelD0gQ30vOKDQGgTJ90tHHOJmdD9jcTQTLyiFyAPg6vzl7%2BE8s2UluIHkLnu%2BwBiSMfHnuyqxbnGL7BoNwq8W0Cf%2F5BBtSADjWieLP7QtZByNmdzRaKqz%2BOPkQ3A2bcRbvlbMTxzmiS8aUGF6i%2Bzu9hLRWNQTPOjz%2FUQWM7rlBF3GKZmHLO84lfUuTwnBtKo5ZxkT7cvzcnhpRr8OkMgOO6XFZ4SRIiOZRAJS6c9rGHB3jvsTr700xNskGgjb1NexMsFFhEdDlAKJmsG3rxIuIXHK32%2BNSEjSJY5CZUzfHVaiOSBGrzZ4HJ8V5C5886euCKFEqoosRTCgttHCBjqkAY5HFU5w9S6o7y9mOqpU7ATvRBb9rliTdNy0LEHU33XeSlvZJoOhrBZSCnTa566vLtHtjzCBxikm%2Btmi8kkdqvRsB93MaXf8oGqbU9VBgfa9XsVGGZsD79WUP18jwYktWUJ32%2Fw0xgdQWFSmi8P8upBC0NwYgp4gF1IlGhsUfJgZoZCSRNOCL7KCs3yC2ieYkNpSPnWf6wHISLS773kO8I5eDLLI&X-Amz-Signature=39464ae41c64de037389df5432cfebfd186534f607518f1afe67f160367c06c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWRSRVR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4yEF1j7IggbBKVBRJMix5uU6oP0Pjb13WjBfvTm9FGwIhAKvZEAZnYuXvm%2FosRmG%2FyQl1UxYmi7kUYbcvES0E6ITbKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOE3oxWcvjkkVXMssq3AOKm%2FgAy3EwKP4bSqWPtoIw7VjX16EVWl1uvcSOQ2QECOPtx5kl51k0VkwWhiHtRN4bKXdAv5hr7X%2BWYpGWkkuFzDD1S8I383HgOdz31fGjSvVlITzEdabSNhIxAlRKloH0MOmDrw7WjIkixUq10e5UBmQNjnVcb%2BbDSHwkRb8uO54OCyK09o7ynJ12gD5AEukZTrtDz8SzHzFTqUPatJ2aurf4WLVTiGJ%2BwjkXk29CaopY06MtOaXjrbQwYa31wTNPL9xT56verdhUyF1MTft3yvPTxr4qzwv0inxH%2Bdfqtg5eooQelD0gQ30vOKDQGgTJ90tHHOJmdD9jcTQTLyiFyAPg6vzl7%2BE8s2UluIHkLnu%2BwBiSMfHnuyqxbnGL7BoNwq8W0Cf%2F5BBtSADjWieLP7QtZByNmdzRaKqz%2BOPkQ3A2bcRbvlbMTxzmiS8aUGF6i%2Bzu9hLRWNQTPOjz%2FUQWM7rlBF3GKZmHLO84lfUuTwnBtKo5ZxkT7cvzcnhpRr8OkMgOO6XFZ4SRIiOZRAJS6c9rGHB3jvsTr700xNskGgjb1NexMsFFhEdDlAKJmsG3rxIuIXHK32%2BNSEjSJY5CZUzfHVaiOSBGrzZ4HJ8V5C5886euCKFEqoosRTCgttHCBjqkAY5HFU5w9S6o7y9mOqpU7ATvRBb9rliTdNy0LEHU33XeSlvZJoOhrBZSCnTa566vLtHtjzCBxikm%2Btmi8kkdqvRsB93MaXf8oGqbU9VBgfa9XsVGGZsD79WUP18jwYktWUJ32%2Fw0xgdQWFSmi8P8upBC0NwYgp4gF1IlGhsUfJgZoZCSRNOCL7KCs3yC2ieYkNpSPnWf6wHISLS773kO8I5eDLLI&X-Amz-Signature=8784fe7db9fb511e1f34e5a6ae44f28612f7b6511f019da9b248dddd7310e8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWRSRVR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4yEF1j7IggbBKVBRJMix5uU6oP0Pjb13WjBfvTm9FGwIhAKvZEAZnYuXvm%2FosRmG%2FyQl1UxYmi7kUYbcvES0E6ITbKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOE3oxWcvjkkVXMssq3AOKm%2FgAy3EwKP4bSqWPtoIw7VjX16EVWl1uvcSOQ2QECOPtx5kl51k0VkwWhiHtRN4bKXdAv5hr7X%2BWYpGWkkuFzDD1S8I383HgOdz31fGjSvVlITzEdabSNhIxAlRKloH0MOmDrw7WjIkixUq10e5UBmQNjnVcb%2BbDSHwkRb8uO54OCyK09o7ynJ12gD5AEukZTrtDz8SzHzFTqUPatJ2aurf4WLVTiGJ%2BwjkXk29CaopY06MtOaXjrbQwYa31wTNPL9xT56verdhUyF1MTft3yvPTxr4qzwv0inxH%2Bdfqtg5eooQelD0gQ30vOKDQGgTJ90tHHOJmdD9jcTQTLyiFyAPg6vzl7%2BE8s2UluIHkLnu%2BwBiSMfHnuyqxbnGL7BoNwq8W0Cf%2F5BBtSADjWieLP7QtZByNmdzRaKqz%2BOPkQ3A2bcRbvlbMTxzmiS8aUGF6i%2Bzu9hLRWNQTPOjz%2FUQWM7rlBF3GKZmHLO84lfUuTwnBtKo5ZxkT7cvzcnhpRr8OkMgOO6XFZ4SRIiOZRAJS6c9rGHB3jvsTr700xNskGgjb1NexMsFFhEdDlAKJmsG3rxIuIXHK32%2BNSEjSJY5CZUzfHVaiOSBGrzZ4HJ8V5C5886euCKFEqoosRTCgttHCBjqkAY5HFU5w9S6o7y9mOqpU7ATvRBb9rliTdNy0LEHU33XeSlvZJoOhrBZSCnTa566vLtHtjzCBxikm%2Btmi8kkdqvRsB93MaXf8oGqbU9VBgfa9XsVGGZsD79WUP18jwYktWUJ32%2Fw0xgdQWFSmi8P8upBC0NwYgp4gF1IlGhsUfJgZoZCSRNOCL7KCs3yC2ieYkNpSPnWf6wHISLS773kO8I5eDLLI&X-Amz-Signature=5194b44e964ff89043521a6961a0e14c6865b6a6aeb7f6508cfaa7b268c244c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWRSRVR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4yEF1j7IggbBKVBRJMix5uU6oP0Pjb13WjBfvTm9FGwIhAKvZEAZnYuXvm%2FosRmG%2FyQl1UxYmi7kUYbcvES0E6ITbKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOE3oxWcvjkkVXMssq3AOKm%2FgAy3EwKP4bSqWPtoIw7VjX16EVWl1uvcSOQ2QECOPtx5kl51k0VkwWhiHtRN4bKXdAv5hr7X%2BWYpGWkkuFzDD1S8I383HgOdz31fGjSvVlITzEdabSNhIxAlRKloH0MOmDrw7WjIkixUq10e5UBmQNjnVcb%2BbDSHwkRb8uO54OCyK09o7ynJ12gD5AEukZTrtDz8SzHzFTqUPatJ2aurf4WLVTiGJ%2BwjkXk29CaopY06MtOaXjrbQwYa31wTNPL9xT56verdhUyF1MTft3yvPTxr4qzwv0inxH%2Bdfqtg5eooQelD0gQ30vOKDQGgTJ90tHHOJmdD9jcTQTLyiFyAPg6vzl7%2BE8s2UluIHkLnu%2BwBiSMfHnuyqxbnGL7BoNwq8W0Cf%2F5BBtSADjWieLP7QtZByNmdzRaKqz%2BOPkQ3A2bcRbvlbMTxzmiS8aUGF6i%2Bzu9hLRWNQTPOjz%2FUQWM7rlBF3GKZmHLO84lfUuTwnBtKo5ZxkT7cvzcnhpRr8OkMgOO6XFZ4SRIiOZRAJS6c9rGHB3jvsTr700xNskGgjb1NexMsFFhEdDlAKJmsG3rxIuIXHK32%2BNSEjSJY5CZUzfHVaiOSBGrzZ4HJ8V5C5886euCKFEqoosRTCgttHCBjqkAY5HFU5w9S6o7y9mOqpU7ATvRBb9rliTdNy0LEHU33XeSlvZJoOhrBZSCnTa566vLtHtjzCBxikm%2Btmi8kkdqvRsB93MaXf8oGqbU9VBgfa9XsVGGZsD79WUP18jwYktWUJ32%2Fw0xgdQWFSmi8P8upBC0NwYgp4gF1IlGhsUfJgZoZCSRNOCL7KCs3yC2ieYkNpSPnWf6wHISLS773kO8I5eDLLI&X-Amz-Signature=02218cb5ebd2b4daabf91c10328e8ce4d233fad0152582192ec7c5fcd13faa11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWRSRVR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4yEF1j7IggbBKVBRJMix5uU6oP0Pjb13WjBfvTm9FGwIhAKvZEAZnYuXvm%2FosRmG%2FyQl1UxYmi7kUYbcvES0E6ITbKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOE3oxWcvjkkVXMssq3AOKm%2FgAy3EwKP4bSqWPtoIw7VjX16EVWl1uvcSOQ2QECOPtx5kl51k0VkwWhiHtRN4bKXdAv5hr7X%2BWYpGWkkuFzDD1S8I383HgOdz31fGjSvVlITzEdabSNhIxAlRKloH0MOmDrw7WjIkixUq10e5UBmQNjnVcb%2BbDSHwkRb8uO54OCyK09o7ynJ12gD5AEukZTrtDz8SzHzFTqUPatJ2aurf4WLVTiGJ%2BwjkXk29CaopY06MtOaXjrbQwYa31wTNPL9xT56verdhUyF1MTft3yvPTxr4qzwv0inxH%2Bdfqtg5eooQelD0gQ30vOKDQGgTJ90tHHOJmdD9jcTQTLyiFyAPg6vzl7%2BE8s2UluIHkLnu%2BwBiSMfHnuyqxbnGL7BoNwq8W0Cf%2F5BBtSADjWieLP7QtZByNmdzRaKqz%2BOPkQ3A2bcRbvlbMTxzmiS8aUGF6i%2Bzu9hLRWNQTPOjz%2FUQWM7rlBF3GKZmHLO84lfUuTwnBtKo5ZxkT7cvzcnhpRr8OkMgOO6XFZ4SRIiOZRAJS6c9rGHB3jvsTr700xNskGgjb1NexMsFFhEdDlAKJmsG3rxIuIXHK32%2BNSEjSJY5CZUzfHVaiOSBGrzZ4HJ8V5C5886euCKFEqoosRTCgttHCBjqkAY5HFU5w9S6o7y9mOqpU7ATvRBb9rliTdNy0LEHU33XeSlvZJoOhrBZSCnTa566vLtHtjzCBxikm%2Btmi8kkdqvRsB93MaXf8oGqbU9VBgfa9XsVGGZsD79WUP18jwYktWUJ32%2Fw0xgdQWFSmi8P8upBC0NwYgp4gF1IlGhsUfJgZoZCSRNOCL7KCs3yC2ieYkNpSPnWf6wHISLS773kO8I5eDLLI&X-Amz-Signature=3fb3edc36b139c51e6e4f041f19f03ca058415fadd682e36c2b43674024971d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSWRSRVR%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4yEF1j7IggbBKVBRJMix5uU6oP0Pjb13WjBfvTm9FGwIhAKvZEAZnYuXvm%2FosRmG%2FyQl1UxYmi7kUYbcvES0E6ITbKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOE3oxWcvjkkVXMssq3AOKm%2FgAy3EwKP4bSqWPtoIw7VjX16EVWl1uvcSOQ2QECOPtx5kl51k0VkwWhiHtRN4bKXdAv5hr7X%2BWYpGWkkuFzDD1S8I383HgOdz31fGjSvVlITzEdabSNhIxAlRKloH0MOmDrw7WjIkixUq10e5UBmQNjnVcb%2BbDSHwkRb8uO54OCyK09o7ynJ12gD5AEukZTrtDz8SzHzFTqUPatJ2aurf4WLVTiGJ%2BwjkXk29CaopY06MtOaXjrbQwYa31wTNPL9xT56verdhUyF1MTft3yvPTxr4qzwv0inxH%2Bdfqtg5eooQelD0gQ30vOKDQGgTJ90tHHOJmdD9jcTQTLyiFyAPg6vzl7%2BE8s2UluIHkLnu%2BwBiSMfHnuyqxbnGL7BoNwq8W0Cf%2F5BBtSADjWieLP7QtZByNmdzRaKqz%2BOPkQ3A2bcRbvlbMTxzmiS8aUGF6i%2Bzu9hLRWNQTPOjz%2FUQWM7rlBF3GKZmHLO84lfUuTwnBtKo5ZxkT7cvzcnhpRr8OkMgOO6XFZ4SRIiOZRAJS6c9rGHB3jvsTr700xNskGgjb1NexMsFFhEdDlAKJmsG3rxIuIXHK32%2BNSEjSJY5CZUzfHVaiOSBGrzZ4HJ8V5C5886euCKFEqoosRTCgttHCBjqkAY5HFU5w9S6o7y9mOqpU7ATvRBb9rliTdNy0LEHU33XeSlvZJoOhrBZSCnTa566vLtHtjzCBxikm%2Btmi8kkdqvRsB93MaXf8oGqbU9VBgfa9XsVGGZsD79WUP18jwYktWUJ32%2Fw0xgdQWFSmi8P8upBC0NwYgp4gF1IlGhsUfJgZoZCSRNOCL7KCs3yC2ieYkNpSPnWf6wHISLS773kO8I5eDLLI&X-Amz-Signature=365e7ab9a56c382e524056b2374358776a630c8c07b07e5caf38d6b338f203ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
