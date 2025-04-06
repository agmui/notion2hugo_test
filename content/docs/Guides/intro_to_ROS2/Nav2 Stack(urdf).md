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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T34GXHT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPjceXBEbcoGv%2FnP72VmFwGKNc%2BxpyErLQmEbXFrhStAiBmm13nCI46hOqm%2BpoHWA1Qic3GkIkLccV0dTJDPUqeMSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMUhQywJ%2FdV7D7fBInKtwDRXEi6KwAntO%2BJ8mhVrmbLK%2FehvUG0STTxK5FzxgguADIeyP%2FAD7EcheEq64wIGbklU5moYyJ9tb8XhpcSYsAykP5ReodT%2FiYDl4%2FME%2FNjDWfXf76U2QHPwa%2BDnNd4KKoxfpOf9JoLyXrjSuASLVwZlpq8VzwsJrg4niFt4K9EkQNZ0J2wTsv7eEKwCU6omNFfWQlyd7VLMLa9TZPzvoS1KCzZuXjiTTM29SKAmcD8qi%2Frp35hFdMIWiQPrnOQtbrjA%2FZ8BSAh1V7VlfNBoP0JJGAPY7iAIHgsq%2Bh2PQGCO10sVArIXi5Js0QEEPIRZi3Y%2BiDtdkyk1hTBDNo%2FS3LViLzP1pQAT6H6pCdqNF%2FIsYjcSEWP9drBdWrEc9QhHkqig2TxJkxKP2rWyJqmFICMvO%2B8zlA%2Fq5a7r16J3pyftXmyipZlW6%2BDiZi1U%2F90xz1VIGEiMOAAXwvmRYwZdZ9MM6WBVyBqeFlafoF5jwBEbmg40pjlCD6mVwqqubGLIZPoijRggYZbhDTg1bMh1jVTHutxzXKgbPnNKYyT%2BC2jF9Cs8FU%2B8KyibrJtcEODSEQD67qki14fWtKyUlimig5cO6yUwdYnB9SvTbmfI%2BC2YH2KQkf0bHsoS9T3Xkw%2FqHKvwY6pgE0RU394ZHUAVlIqJtRQw1PlzHWTx%2BR6aQFWdqKIeMBTOq2u4PLYYKs5QbQeFxKyOJfbiqskIWewMhgIiDE2TVSGSn930fmQpKLpK%2BgO%2BH6lvwd%2Fm3VF6M6SMk5gG7K1JPuUAI5vze5HtbNezTbARx4pirWjqBVf3qRrLgpN7ZhoTAKsWaduO389BWzcEVjuGitBATkut%2FVaR3KCOCxvx8Ecgh%2BBGG6&X-Amz-Signature=a754900a52070cc69600425d9759569f65966519e59390558b0cb48cd693957b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T34GXHT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPjceXBEbcoGv%2FnP72VmFwGKNc%2BxpyErLQmEbXFrhStAiBmm13nCI46hOqm%2BpoHWA1Qic3GkIkLccV0dTJDPUqeMSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMUhQywJ%2FdV7D7fBInKtwDRXEi6KwAntO%2BJ8mhVrmbLK%2FehvUG0STTxK5FzxgguADIeyP%2FAD7EcheEq64wIGbklU5moYyJ9tb8XhpcSYsAykP5ReodT%2FiYDl4%2FME%2FNjDWfXf76U2QHPwa%2BDnNd4KKoxfpOf9JoLyXrjSuASLVwZlpq8VzwsJrg4niFt4K9EkQNZ0J2wTsv7eEKwCU6omNFfWQlyd7VLMLa9TZPzvoS1KCzZuXjiTTM29SKAmcD8qi%2Frp35hFdMIWiQPrnOQtbrjA%2FZ8BSAh1V7VlfNBoP0JJGAPY7iAIHgsq%2Bh2PQGCO10sVArIXi5Js0QEEPIRZi3Y%2BiDtdkyk1hTBDNo%2FS3LViLzP1pQAT6H6pCdqNF%2FIsYjcSEWP9drBdWrEc9QhHkqig2TxJkxKP2rWyJqmFICMvO%2B8zlA%2Fq5a7r16J3pyftXmyipZlW6%2BDiZi1U%2F90xz1VIGEiMOAAXwvmRYwZdZ9MM6WBVyBqeFlafoF5jwBEbmg40pjlCD6mVwqqubGLIZPoijRggYZbhDTg1bMh1jVTHutxzXKgbPnNKYyT%2BC2jF9Cs8FU%2B8KyibrJtcEODSEQD67qki14fWtKyUlimig5cO6yUwdYnB9SvTbmfI%2BC2YH2KQkf0bHsoS9T3Xkw%2FqHKvwY6pgE0RU394ZHUAVlIqJtRQw1PlzHWTx%2BR6aQFWdqKIeMBTOq2u4PLYYKs5QbQeFxKyOJfbiqskIWewMhgIiDE2TVSGSn930fmQpKLpK%2BgO%2BH6lvwd%2Fm3VF6M6SMk5gG7K1JPuUAI5vze5HtbNezTbARx4pirWjqBVf3qRrLgpN7ZhoTAKsWaduO389BWzcEVjuGitBATkut%2FVaR3KCOCxvx8Ecgh%2BBGG6&X-Amz-Signature=bcbf1944c99b8dc6b71a3792315e126c7aa03f5b7945fbe0a35c3dc49e649540&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T34GXHT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPjceXBEbcoGv%2FnP72VmFwGKNc%2BxpyErLQmEbXFrhStAiBmm13nCI46hOqm%2BpoHWA1Qic3GkIkLccV0dTJDPUqeMSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMUhQywJ%2FdV7D7fBInKtwDRXEi6KwAntO%2BJ8mhVrmbLK%2FehvUG0STTxK5FzxgguADIeyP%2FAD7EcheEq64wIGbklU5moYyJ9tb8XhpcSYsAykP5ReodT%2FiYDl4%2FME%2FNjDWfXf76U2QHPwa%2BDnNd4KKoxfpOf9JoLyXrjSuASLVwZlpq8VzwsJrg4niFt4K9EkQNZ0J2wTsv7eEKwCU6omNFfWQlyd7VLMLa9TZPzvoS1KCzZuXjiTTM29SKAmcD8qi%2Frp35hFdMIWiQPrnOQtbrjA%2FZ8BSAh1V7VlfNBoP0JJGAPY7iAIHgsq%2Bh2PQGCO10sVArIXi5Js0QEEPIRZi3Y%2BiDtdkyk1hTBDNo%2FS3LViLzP1pQAT6H6pCdqNF%2FIsYjcSEWP9drBdWrEc9QhHkqig2TxJkxKP2rWyJqmFICMvO%2B8zlA%2Fq5a7r16J3pyftXmyipZlW6%2BDiZi1U%2F90xz1VIGEiMOAAXwvmRYwZdZ9MM6WBVyBqeFlafoF5jwBEbmg40pjlCD6mVwqqubGLIZPoijRggYZbhDTg1bMh1jVTHutxzXKgbPnNKYyT%2BC2jF9Cs8FU%2B8KyibrJtcEODSEQD67qki14fWtKyUlimig5cO6yUwdYnB9SvTbmfI%2BC2YH2KQkf0bHsoS9T3Xkw%2FqHKvwY6pgE0RU394ZHUAVlIqJtRQw1PlzHWTx%2BR6aQFWdqKIeMBTOq2u4PLYYKs5QbQeFxKyOJfbiqskIWewMhgIiDE2TVSGSn930fmQpKLpK%2BgO%2BH6lvwd%2Fm3VF6M6SMk5gG7K1JPuUAI5vze5HtbNezTbARx4pirWjqBVf3qRrLgpN7ZhoTAKsWaduO389BWzcEVjuGitBATkut%2FVaR3KCOCxvx8Ecgh%2BBGG6&X-Amz-Signature=9bb82f73864d8e153583e31db893a589c8ed69ba7f792ad03c99857b8ff1acc6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T34GXHT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPjceXBEbcoGv%2FnP72VmFwGKNc%2BxpyErLQmEbXFrhStAiBmm13nCI46hOqm%2BpoHWA1Qic3GkIkLccV0dTJDPUqeMSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMUhQywJ%2FdV7D7fBInKtwDRXEi6KwAntO%2BJ8mhVrmbLK%2FehvUG0STTxK5FzxgguADIeyP%2FAD7EcheEq64wIGbklU5moYyJ9tb8XhpcSYsAykP5ReodT%2FiYDl4%2FME%2FNjDWfXf76U2QHPwa%2BDnNd4KKoxfpOf9JoLyXrjSuASLVwZlpq8VzwsJrg4niFt4K9EkQNZ0J2wTsv7eEKwCU6omNFfWQlyd7VLMLa9TZPzvoS1KCzZuXjiTTM29SKAmcD8qi%2Frp35hFdMIWiQPrnOQtbrjA%2FZ8BSAh1V7VlfNBoP0JJGAPY7iAIHgsq%2Bh2PQGCO10sVArIXi5Js0QEEPIRZi3Y%2BiDtdkyk1hTBDNo%2FS3LViLzP1pQAT6H6pCdqNF%2FIsYjcSEWP9drBdWrEc9QhHkqig2TxJkxKP2rWyJqmFICMvO%2B8zlA%2Fq5a7r16J3pyftXmyipZlW6%2BDiZi1U%2F90xz1VIGEiMOAAXwvmRYwZdZ9MM6WBVyBqeFlafoF5jwBEbmg40pjlCD6mVwqqubGLIZPoijRggYZbhDTg1bMh1jVTHutxzXKgbPnNKYyT%2BC2jF9Cs8FU%2B8KyibrJtcEODSEQD67qki14fWtKyUlimig5cO6yUwdYnB9SvTbmfI%2BC2YH2KQkf0bHsoS9T3Xkw%2FqHKvwY6pgE0RU394ZHUAVlIqJtRQw1PlzHWTx%2BR6aQFWdqKIeMBTOq2u4PLYYKs5QbQeFxKyOJfbiqskIWewMhgIiDE2TVSGSn930fmQpKLpK%2BgO%2BH6lvwd%2Fm3VF6M6SMk5gG7K1JPuUAI5vze5HtbNezTbARx4pirWjqBVf3qRrLgpN7ZhoTAKsWaduO389BWzcEVjuGitBATkut%2FVaR3KCOCxvx8Ecgh%2BBGG6&X-Amz-Signature=b555bff94f5b5120c0c13dac8fc6c8f2e3fcf3d28efdbb18a42a3b77662b00ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T34GXHT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPjceXBEbcoGv%2FnP72VmFwGKNc%2BxpyErLQmEbXFrhStAiBmm13nCI46hOqm%2BpoHWA1Qic3GkIkLccV0dTJDPUqeMSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMUhQywJ%2FdV7D7fBInKtwDRXEi6KwAntO%2BJ8mhVrmbLK%2FehvUG0STTxK5FzxgguADIeyP%2FAD7EcheEq64wIGbklU5moYyJ9tb8XhpcSYsAykP5ReodT%2FiYDl4%2FME%2FNjDWfXf76U2QHPwa%2BDnNd4KKoxfpOf9JoLyXrjSuASLVwZlpq8VzwsJrg4niFt4K9EkQNZ0J2wTsv7eEKwCU6omNFfWQlyd7VLMLa9TZPzvoS1KCzZuXjiTTM29SKAmcD8qi%2Frp35hFdMIWiQPrnOQtbrjA%2FZ8BSAh1V7VlfNBoP0JJGAPY7iAIHgsq%2Bh2PQGCO10sVArIXi5Js0QEEPIRZi3Y%2BiDtdkyk1hTBDNo%2FS3LViLzP1pQAT6H6pCdqNF%2FIsYjcSEWP9drBdWrEc9QhHkqig2TxJkxKP2rWyJqmFICMvO%2B8zlA%2Fq5a7r16J3pyftXmyipZlW6%2BDiZi1U%2F90xz1VIGEiMOAAXwvmRYwZdZ9MM6WBVyBqeFlafoF5jwBEbmg40pjlCD6mVwqqubGLIZPoijRggYZbhDTg1bMh1jVTHutxzXKgbPnNKYyT%2BC2jF9Cs8FU%2B8KyibrJtcEODSEQD67qki14fWtKyUlimig5cO6yUwdYnB9SvTbmfI%2BC2YH2KQkf0bHsoS9T3Xkw%2FqHKvwY6pgE0RU394ZHUAVlIqJtRQw1PlzHWTx%2BR6aQFWdqKIeMBTOq2u4PLYYKs5QbQeFxKyOJfbiqskIWewMhgIiDE2TVSGSn930fmQpKLpK%2BgO%2BH6lvwd%2Fm3VF6M6SMk5gG7K1JPuUAI5vze5HtbNezTbARx4pirWjqBVf3qRrLgpN7ZhoTAKsWaduO389BWzcEVjuGitBATkut%2FVaR3KCOCxvx8Ecgh%2BBGG6&X-Amz-Signature=cfb8f45229f0b2e5b933dc0893bc4060ad69ba41471e058f9ace0cd7fc3015ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T34GXHT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPjceXBEbcoGv%2FnP72VmFwGKNc%2BxpyErLQmEbXFrhStAiBmm13nCI46hOqm%2BpoHWA1Qic3GkIkLccV0dTJDPUqeMSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMUhQywJ%2FdV7D7fBInKtwDRXEi6KwAntO%2BJ8mhVrmbLK%2FehvUG0STTxK5FzxgguADIeyP%2FAD7EcheEq64wIGbklU5moYyJ9tb8XhpcSYsAykP5ReodT%2FiYDl4%2FME%2FNjDWfXf76U2QHPwa%2BDnNd4KKoxfpOf9JoLyXrjSuASLVwZlpq8VzwsJrg4niFt4K9EkQNZ0J2wTsv7eEKwCU6omNFfWQlyd7VLMLa9TZPzvoS1KCzZuXjiTTM29SKAmcD8qi%2Frp35hFdMIWiQPrnOQtbrjA%2FZ8BSAh1V7VlfNBoP0JJGAPY7iAIHgsq%2Bh2PQGCO10sVArIXi5Js0QEEPIRZi3Y%2BiDtdkyk1hTBDNo%2FS3LViLzP1pQAT6H6pCdqNF%2FIsYjcSEWP9drBdWrEc9QhHkqig2TxJkxKP2rWyJqmFICMvO%2B8zlA%2Fq5a7r16J3pyftXmyipZlW6%2BDiZi1U%2F90xz1VIGEiMOAAXwvmRYwZdZ9MM6WBVyBqeFlafoF5jwBEbmg40pjlCD6mVwqqubGLIZPoijRggYZbhDTg1bMh1jVTHutxzXKgbPnNKYyT%2BC2jF9Cs8FU%2B8KyibrJtcEODSEQD67qki14fWtKyUlimig5cO6yUwdYnB9SvTbmfI%2BC2YH2KQkf0bHsoS9T3Xkw%2FqHKvwY6pgE0RU394ZHUAVlIqJtRQw1PlzHWTx%2BR6aQFWdqKIeMBTOq2u4PLYYKs5QbQeFxKyOJfbiqskIWewMhgIiDE2TVSGSn930fmQpKLpK%2BgO%2BH6lvwd%2Fm3VF6M6SMk5gG7K1JPuUAI5vze5HtbNezTbARx4pirWjqBVf3qRrLgpN7ZhoTAKsWaduO389BWzcEVjuGitBATkut%2FVaR3KCOCxvx8Ecgh%2BBGG6&X-Amz-Signature=6072326151e29661a5bb719009bae8ae60ac4072f89553128d21f7f189baf576&X-Amz-SignedHeaders=host&x-id=GetObject)
