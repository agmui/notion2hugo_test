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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5QRU6F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEvECW6I5KgbVlVntrNb9VHOX1xDQ8USyJcLxs42fIkEAiEA%2FGeiTAqkePjl3M2rgnn8QqMZIu2k86VsKfo0w21SYUIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE2jbhOXhr4a4HRmMyrcAwEhOGibtmX0edL5Wk7MomSk7TCKKysDysGpQ25gu99jlBLrZe6IuBFr24779tMIOgJS80LML%2FnINj5Fwhtdrf36jck8M5aKmdta4oBkUdv0ZUgquML6mtlVpCei%2B1rP%2FKzvpDSRMSTcMxO5HVA6Kde7P0DVtTRntxZOLTSgtKrMIIq8kjfIaAV%2FtXrQ7PNSqgxQIeBmgHaNSxZstrrpOuHESUVbpQJDfKwEF3OUPLHWplEutkFoHju3mS6jVvr7enMkK%2BFHZP%2Fj6EaEfnBhNa3ThDWEXILPCtpNsQSUF5Tyq0DgH6dlYMfzUkaQ6j%2BqLdYGvpcmvP7%2BQrlmeb789y2SsZj7d3d%2FW0iCjxnBtwAm2d0Pu7P3ZNX60QAZztxQIAq3IGfOkDdWGxkV6fmMOf6FKDALXyswx3ywcGJwUh%2BhLP%2Bh2lNlM4T9fuOzVKAu8i1nY2sdIhAJdwcMzqskfKZyfUE1aih9s%2BdWs4bJkUKjgXPGZBeNc6GXehaNljQPEKkrxBjJ%2BBg7HIIA31GndgiMnBwSIY5uTustDSQTizya0CgosxU94TU48VkLvcf6fhRCc22yCFrqmDKrdpcLxof3c7N2J9kUPI0ALwtSL%2FKO8r9lP9iBIjtUJWP5MJjZ7L4GOqUBGcp4hRmqDruasYw%2FSaJX1%2BnODf0Z9aEKR%2FHqufXGy%2BJVqXkACNIx1z7g%2B8u90NGzsKmmjEsOvQU%2BIru9kWf1GwmF9J%2BoUEnkw%2FNuq53cdsfoxmdKhm%2BPjWiHkZnh6Z9DLJ35TFgToOrT3dddlaIqzpeKRSl%2BQH6mWJ5NjRDhqha24jeWO5VmIrFvcaZZSa13T2rl%2Fw1qXvgnQxOPtVxP9qlFpGWk&X-Amz-Signature=de7b26457f940ef243e8e4bb7d0ec73a169eaa1e03a7f622d827d12f0fa858b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5QRU6F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEvECW6I5KgbVlVntrNb9VHOX1xDQ8USyJcLxs42fIkEAiEA%2FGeiTAqkePjl3M2rgnn8QqMZIu2k86VsKfo0w21SYUIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE2jbhOXhr4a4HRmMyrcAwEhOGibtmX0edL5Wk7MomSk7TCKKysDysGpQ25gu99jlBLrZe6IuBFr24779tMIOgJS80LML%2FnINj5Fwhtdrf36jck8M5aKmdta4oBkUdv0ZUgquML6mtlVpCei%2B1rP%2FKzvpDSRMSTcMxO5HVA6Kde7P0DVtTRntxZOLTSgtKrMIIq8kjfIaAV%2FtXrQ7PNSqgxQIeBmgHaNSxZstrrpOuHESUVbpQJDfKwEF3OUPLHWplEutkFoHju3mS6jVvr7enMkK%2BFHZP%2Fj6EaEfnBhNa3ThDWEXILPCtpNsQSUF5Tyq0DgH6dlYMfzUkaQ6j%2BqLdYGvpcmvP7%2BQrlmeb789y2SsZj7d3d%2FW0iCjxnBtwAm2d0Pu7P3ZNX60QAZztxQIAq3IGfOkDdWGxkV6fmMOf6FKDALXyswx3ywcGJwUh%2BhLP%2Bh2lNlM4T9fuOzVKAu8i1nY2sdIhAJdwcMzqskfKZyfUE1aih9s%2BdWs4bJkUKjgXPGZBeNc6GXehaNljQPEKkrxBjJ%2BBg7HIIA31GndgiMnBwSIY5uTustDSQTizya0CgosxU94TU48VkLvcf6fhRCc22yCFrqmDKrdpcLxof3c7N2J9kUPI0ALwtSL%2FKO8r9lP9iBIjtUJWP5MJjZ7L4GOqUBGcp4hRmqDruasYw%2FSaJX1%2BnODf0Z9aEKR%2FHqufXGy%2BJVqXkACNIx1z7g%2B8u90NGzsKmmjEsOvQU%2BIru9kWf1GwmF9J%2BoUEnkw%2FNuq53cdsfoxmdKhm%2BPjWiHkZnh6Z9DLJ35TFgToOrT3dddlaIqzpeKRSl%2BQH6mWJ5NjRDhqha24jeWO5VmIrFvcaZZSa13T2rl%2Fw1qXvgnQxOPtVxP9qlFpGWk&X-Amz-Signature=0db66cdd5852de94bb5700a2e34a879bf81340c60052258107b3759a1848266e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5QRU6F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEvECW6I5KgbVlVntrNb9VHOX1xDQ8USyJcLxs42fIkEAiEA%2FGeiTAqkePjl3M2rgnn8QqMZIu2k86VsKfo0w21SYUIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE2jbhOXhr4a4HRmMyrcAwEhOGibtmX0edL5Wk7MomSk7TCKKysDysGpQ25gu99jlBLrZe6IuBFr24779tMIOgJS80LML%2FnINj5Fwhtdrf36jck8M5aKmdta4oBkUdv0ZUgquML6mtlVpCei%2B1rP%2FKzvpDSRMSTcMxO5HVA6Kde7P0DVtTRntxZOLTSgtKrMIIq8kjfIaAV%2FtXrQ7PNSqgxQIeBmgHaNSxZstrrpOuHESUVbpQJDfKwEF3OUPLHWplEutkFoHju3mS6jVvr7enMkK%2BFHZP%2Fj6EaEfnBhNa3ThDWEXILPCtpNsQSUF5Tyq0DgH6dlYMfzUkaQ6j%2BqLdYGvpcmvP7%2BQrlmeb789y2SsZj7d3d%2FW0iCjxnBtwAm2d0Pu7P3ZNX60QAZztxQIAq3IGfOkDdWGxkV6fmMOf6FKDALXyswx3ywcGJwUh%2BhLP%2Bh2lNlM4T9fuOzVKAu8i1nY2sdIhAJdwcMzqskfKZyfUE1aih9s%2BdWs4bJkUKjgXPGZBeNc6GXehaNljQPEKkrxBjJ%2BBg7HIIA31GndgiMnBwSIY5uTustDSQTizya0CgosxU94TU48VkLvcf6fhRCc22yCFrqmDKrdpcLxof3c7N2J9kUPI0ALwtSL%2FKO8r9lP9iBIjtUJWP5MJjZ7L4GOqUBGcp4hRmqDruasYw%2FSaJX1%2BnODf0Z9aEKR%2FHqufXGy%2BJVqXkACNIx1z7g%2B8u90NGzsKmmjEsOvQU%2BIru9kWf1GwmF9J%2BoUEnkw%2FNuq53cdsfoxmdKhm%2BPjWiHkZnh6Z9DLJ35TFgToOrT3dddlaIqzpeKRSl%2BQH6mWJ5NjRDhqha24jeWO5VmIrFvcaZZSa13T2rl%2Fw1qXvgnQxOPtVxP9qlFpGWk&X-Amz-Signature=7eb9ad74a57d6a67ec569261e9c3338dbb61f7ab2b6ff915e728c2d58e65fb8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5QRU6F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEvECW6I5KgbVlVntrNb9VHOX1xDQ8USyJcLxs42fIkEAiEA%2FGeiTAqkePjl3M2rgnn8QqMZIu2k86VsKfo0w21SYUIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE2jbhOXhr4a4HRmMyrcAwEhOGibtmX0edL5Wk7MomSk7TCKKysDysGpQ25gu99jlBLrZe6IuBFr24779tMIOgJS80LML%2FnINj5Fwhtdrf36jck8M5aKmdta4oBkUdv0ZUgquML6mtlVpCei%2B1rP%2FKzvpDSRMSTcMxO5HVA6Kde7P0DVtTRntxZOLTSgtKrMIIq8kjfIaAV%2FtXrQ7PNSqgxQIeBmgHaNSxZstrrpOuHESUVbpQJDfKwEF3OUPLHWplEutkFoHju3mS6jVvr7enMkK%2BFHZP%2Fj6EaEfnBhNa3ThDWEXILPCtpNsQSUF5Tyq0DgH6dlYMfzUkaQ6j%2BqLdYGvpcmvP7%2BQrlmeb789y2SsZj7d3d%2FW0iCjxnBtwAm2d0Pu7P3ZNX60QAZztxQIAq3IGfOkDdWGxkV6fmMOf6FKDALXyswx3ywcGJwUh%2BhLP%2Bh2lNlM4T9fuOzVKAu8i1nY2sdIhAJdwcMzqskfKZyfUE1aih9s%2BdWs4bJkUKjgXPGZBeNc6GXehaNljQPEKkrxBjJ%2BBg7HIIA31GndgiMnBwSIY5uTustDSQTizya0CgosxU94TU48VkLvcf6fhRCc22yCFrqmDKrdpcLxof3c7N2J9kUPI0ALwtSL%2FKO8r9lP9iBIjtUJWP5MJjZ7L4GOqUBGcp4hRmqDruasYw%2FSaJX1%2BnODf0Z9aEKR%2FHqufXGy%2BJVqXkACNIx1z7g%2B8u90NGzsKmmjEsOvQU%2BIru9kWf1GwmF9J%2BoUEnkw%2FNuq53cdsfoxmdKhm%2BPjWiHkZnh6Z9DLJ35TFgToOrT3dddlaIqzpeKRSl%2BQH6mWJ5NjRDhqha24jeWO5VmIrFvcaZZSa13T2rl%2Fw1qXvgnQxOPtVxP9qlFpGWk&X-Amz-Signature=8150c03b4d29c9c1b2cb25dd27c5129f9cb6509c07b1a5f2171e65d0776d6645&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5QRU6F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEvECW6I5KgbVlVntrNb9VHOX1xDQ8USyJcLxs42fIkEAiEA%2FGeiTAqkePjl3M2rgnn8QqMZIu2k86VsKfo0w21SYUIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE2jbhOXhr4a4HRmMyrcAwEhOGibtmX0edL5Wk7MomSk7TCKKysDysGpQ25gu99jlBLrZe6IuBFr24779tMIOgJS80LML%2FnINj5Fwhtdrf36jck8M5aKmdta4oBkUdv0ZUgquML6mtlVpCei%2B1rP%2FKzvpDSRMSTcMxO5HVA6Kde7P0DVtTRntxZOLTSgtKrMIIq8kjfIaAV%2FtXrQ7PNSqgxQIeBmgHaNSxZstrrpOuHESUVbpQJDfKwEF3OUPLHWplEutkFoHju3mS6jVvr7enMkK%2BFHZP%2Fj6EaEfnBhNa3ThDWEXILPCtpNsQSUF5Tyq0DgH6dlYMfzUkaQ6j%2BqLdYGvpcmvP7%2BQrlmeb789y2SsZj7d3d%2FW0iCjxnBtwAm2d0Pu7P3ZNX60QAZztxQIAq3IGfOkDdWGxkV6fmMOf6FKDALXyswx3ywcGJwUh%2BhLP%2Bh2lNlM4T9fuOzVKAu8i1nY2sdIhAJdwcMzqskfKZyfUE1aih9s%2BdWs4bJkUKjgXPGZBeNc6GXehaNljQPEKkrxBjJ%2BBg7HIIA31GndgiMnBwSIY5uTustDSQTizya0CgosxU94TU48VkLvcf6fhRCc22yCFrqmDKrdpcLxof3c7N2J9kUPI0ALwtSL%2FKO8r9lP9iBIjtUJWP5MJjZ7L4GOqUBGcp4hRmqDruasYw%2FSaJX1%2BnODf0Z9aEKR%2FHqufXGy%2BJVqXkACNIx1z7g%2B8u90NGzsKmmjEsOvQU%2BIru9kWf1GwmF9J%2BoUEnkw%2FNuq53cdsfoxmdKhm%2BPjWiHkZnh6Z9DLJ35TFgToOrT3dddlaIqzpeKRSl%2BQH6mWJ5NjRDhqha24jeWO5VmIrFvcaZZSa13T2rl%2Fw1qXvgnQxOPtVxP9qlFpGWk&X-Amz-Signature=bf5d2ded74e475ccf3854eff485baabf2c0837db55133e956b20a677dd08f7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5QRU6F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEvECW6I5KgbVlVntrNb9VHOX1xDQ8USyJcLxs42fIkEAiEA%2FGeiTAqkePjl3M2rgnn8QqMZIu2k86VsKfo0w21SYUIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE2jbhOXhr4a4HRmMyrcAwEhOGibtmX0edL5Wk7MomSk7TCKKysDysGpQ25gu99jlBLrZe6IuBFr24779tMIOgJS80LML%2FnINj5Fwhtdrf36jck8M5aKmdta4oBkUdv0ZUgquML6mtlVpCei%2B1rP%2FKzvpDSRMSTcMxO5HVA6Kde7P0DVtTRntxZOLTSgtKrMIIq8kjfIaAV%2FtXrQ7PNSqgxQIeBmgHaNSxZstrrpOuHESUVbpQJDfKwEF3OUPLHWplEutkFoHju3mS6jVvr7enMkK%2BFHZP%2Fj6EaEfnBhNa3ThDWEXILPCtpNsQSUF5Tyq0DgH6dlYMfzUkaQ6j%2BqLdYGvpcmvP7%2BQrlmeb789y2SsZj7d3d%2FW0iCjxnBtwAm2d0Pu7P3ZNX60QAZztxQIAq3IGfOkDdWGxkV6fmMOf6FKDALXyswx3ywcGJwUh%2BhLP%2Bh2lNlM4T9fuOzVKAu8i1nY2sdIhAJdwcMzqskfKZyfUE1aih9s%2BdWs4bJkUKjgXPGZBeNc6GXehaNljQPEKkrxBjJ%2BBg7HIIA31GndgiMnBwSIY5uTustDSQTizya0CgosxU94TU48VkLvcf6fhRCc22yCFrqmDKrdpcLxof3c7N2J9kUPI0ALwtSL%2FKO8r9lP9iBIjtUJWP5MJjZ7L4GOqUBGcp4hRmqDruasYw%2FSaJX1%2BnODf0Z9aEKR%2FHqufXGy%2BJVqXkACNIx1z7g%2B8u90NGzsKmmjEsOvQU%2BIru9kWf1GwmF9J%2BoUEnkw%2FNuq53cdsfoxmdKhm%2BPjWiHkZnh6Z9DLJ35TFgToOrT3dddlaIqzpeKRSl%2BQH6mWJ5NjRDhqha24jeWO5VmIrFvcaZZSa13T2rl%2Fw1qXvgnQxOPtVxP9qlFpGWk&X-Amz-Signature=41858226143ecd844e4e1e172fb86e30a9ac9aedcc28db0ecbc5b47b5bb63e02&X-Amz-SignedHeaders=host&x-id=GetObject)
