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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRABOAOT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCincePRDsNfd7g2GXpCYbB67yEAPfSIp4gcRA1uIkZigIgI3CMXJcad5y0VvD%2BOr0WRk%2FX7vxh6OilchfsYd36Ntoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDATYDzVDME76YwIipCrcA7yPTSzkAOg26Ha%2Bcx2RC77BqfpFEaMPNjre%2BUgUKvqd3LgGgr1WBOx0bzWgrnQzPQN1kna1TS%2F%2BkLGEDLJgf26MgPTF9AQBz8xKLAqJevSNu49aOAKElLSG5K3lg%2Frqa9sN7aGqrtrzQrJcEjL%2F6nlb8xiGlmn8xx%2BCfK9JP0mgbdODjN3aDlUI0W2GERVL5ElYa%2BjiiiOPQ31bDih%2Far69Cccrt7ePxhLvgDwOejLqkMYas%2FaNOyaxQwSZJTzAqTKfx6EB6me%2BjlnTSq1gLwZ1bihao1EFLtkvCUiFpjN6VeMIo%2FTPbqtbQQGXItzQdql%2BXEUFfOUKlw%2BrHRxBw8e%2FJfcRcwbuuscxSzh7ChLNuxuzXfgI33Qrh0qr%2FV5zDtAXQZwMgrRoTi3gtwjb0lfUXqJhx5dGUVXJC8aDprumK4xPVyD4s2EIjEdCy7n7Bp9AErkcyHICDvNLGKeKfVv0VGzQg5WEzSM9zK6%2FL1gNPnkTGy%2FwzBZgxw%2BrSTHSuVOqqb71Pdb3kbTR5XgbKFbpc2F7h6WIq6w9K2tvvXyIIDggJ50BdA5P3Fru1gJ3vTqYH9BEww8HEgPS1aNFduKfELTN8BEcSRQ8NKUFlXZwESwWgZRDAmsd%2FROJMO%2B9nsMGOqUBvi81cm%2Ff4k1AHuRn4WTXYaDRiK%2FhzAuoQ8XmpsDmbNiLZjy%2FML2LHOxyScBuMNceSGH2P%2FSMt6ja99P%2BhX%2BxxwWy%2FTvWIBIwxB52I4ExZ0vp60j3suJyvqdSnW2xzdd4EeACq%2FK7b%2FdPmoOVRPU2J7dl60u9pEwejJJTRvxoQIrWwWhiaaXqr%2Bd9fvz1mVCRepeMdWR5v9BtqYDf9soE7kCWMkOz&X-Amz-Signature=4a281877df12b23cc994feb5a2337fc3cf730e53a1db7b4470c4a29cbf130a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRABOAOT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCincePRDsNfd7g2GXpCYbB67yEAPfSIp4gcRA1uIkZigIgI3CMXJcad5y0VvD%2BOr0WRk%2FX7vxh6OilchfsYd36Ntoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDATYDzVDME76YwIipCrcA7yPTSzkAOg26Ha%2Bcx2RC77BqfpFEaMPNjre%2BUgUKvqd3LgGgr1WBOx0bzWgrnQzPQN1kna1TS%2F%2BkLGEDLJgf26MgPTF9AQBz8xKLAqJevSNu49aOAKElLSG5K3lg%2Frqa9sN7aGqrtrzQrJcEjL%2F6nlb8xiGlmn8xx%2BCfK9JP0mgbdODjN3aDlUI0W2GERVL5ElYa%2BjiiiOPQ31bDih%2Far69Cccrt7ePxhLvgDwOejLqkMYas%2FaNOyaxQwSZJTzAqTKfx6EB6me%2BjlnTSq1gLwZ1bihao1EFLtkvCUiFpjN6VeMIo%2FTPbqtbQQGXItzQdql%2BXEUFfOUKlw%2BrHRxBw8e%2FJfcRcwbuuscxSzh7ChLNuxuzXfgI33Qrh0qr%2FV5zDtAXQZwMgrRoTi3gtwjb0lfUXqJhx5dGUVXJC8aDprumK4xPVyD4s2EIjEdCy7n7Bp9AErkcyHICDvNLGKeKfVv0VGzQg5WEzSM9zK6%2FL1gNPnkTGy%2FwzBZgxw%2BrSTHSuVOqqb71Pdb3kbTR5XgbKFbpc2F7h6WIq6w9K2tvvXyIIDggJ50BdA5P3Fru1gJ3vTqYH9BEww8HEgPS1aNFduKfELTN8BEcSRQ8NKUFlXZwESwWgZRDAmsd%2FROJMO%2B9nsMGOqUBvi81cm%2Ff4k1AHuRn4WTXYaDRiK%2FhzAuoQ8XmpsDmbNiLZjy%2FML2LHOxyScBuMNceSGH2P%2FSMt6ja99P%2BhX%2BxxwWy%2FTvWIBIwxB52I4ExZ0vp60j3suJyvqdSnW2xzdd4EeACq%2FK7b%2FdPmoOVRPU2J7dl60u9pEwejJJTRvxoQIrWwWhiaaXqr%2Bd9fvz1mVCRepeMdWR5v9BtqYDf9soE7kCWMkOz&X-Amz-Signature=54348cc882c738730654e43c23c6e1c20e0f8fe1b3ed344c7f61b3361438050c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRABOAOT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCincePRDsNfd7g2GXpCYbB67yEAPfSIp4gcRA1uIkZigIgI3CMXJcad5y0VvD%2BOr0WRk%2FX7vxh6OilchfsYd36Ntoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDATYDzVDME76YwIipCrcA7yPTSzkAOg26Ha%2Bcx2RC77BqfpFEaMPNjre%2BUgUKvqd3LgGgr1WBOx0bzWgrnQzPQN1kna1TS%2F%2BkLGEDLJgf26MgPTF9AQBz8xKLAqJevSNu49aOAKElLSG5K3lg%2Frqa9sN7aGqrtrzQrJcEjL%2F6nlb8xiGlmn8xx%2BCfK9JP0mgbdODjN3aDlUI0W2GERVL5ElYa%2BjiiiOPQ31bDih%2Far69Cccrt7ePxhLvgDwOejLqkMYas%2FaNOyaxQwSZJTzAqTKfx6EB6me%2BjlnTSq1gLwZ1bihao1EFLtkvCUiFpjN6VeMIo%2FTPbqtbQQGXItzQdql%2BXEUFfOUKlw%2BrHRxBw8e%2FJfcRcwbuuscxSzh7ChLNuxuzXfgI33Qrh0qr%2FV5zDtAXQZwMgrRoTi3gtwjb0lfUXqJhx5dGUVXJC8aDprumK4xPVyD4s2EIjEdCy7n7Bp9AErkcyHICDvNLGKeKfVv0VGzQg5WEzSM9zK6%2FL1gNPnkTGy%2FwzBZgxw%2BrSTHSuVOqqb71Pdb3kbTR5XgbKFbpc2F7h6WIq6w9K2tvvXyIIDggJ50BdA5P3Fru1gJ3vTqYH9BEww8HEgPS1aNFduKfELTN8BEcSRQ8NKUFlXZwESwWgZRDAmsd%2FROJMO%2B9nsMGOqUBvi81cm%2Ff4k1AHuRn4WTXYaDRiK%2FhzAuoQ8XmpsDmbNiLZjy%2FML2LHOxyScBuMNceSGH2P%2FSMt6ja99P%2BhX%2BxxwWy%2FTvWIBIwxB52I4ExZ0vp60j3suJyvqdSnW2xzdd4EeACq%2FK7b%2FdPmoOVRPU2J7dl60u9pEwejJJTRvxoQIrWwWhiaaXqr%2Bd9fvz1mVCRepeMdWR5v9BtqYDf9soE7kCWMkOz&X-Amz-Signature=dc9f01194ad27d2ea81de9563be51fffdbf7626f2ffbfa5a0faf1df8b3784cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRABOAOT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCincePRDsNfd7g2GXpCYbB67yEAPfSIp4gcRA1uIkZigIgI3CMXJcad5y0VvD%2BOr0WRk%2FX7vxh6OilchfsYd36Ntoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDATYDzVDME76YwIipCrcA7yPTSzkAOg26Ha%2Bcx2RC77BqfpFEaMPNjre%2BUgUKvqd3LgGgr1WBOx0bzWgrnQzPQN1kna1TS%2F%2BkLGEDLJgf26MgPTF9AQBz8xKLAqJevSNu49aOAKElLSG5K3lg%2Frqa9sN7aGqrtrzQrJcEjL%2F6nlb8xiGlmn8xx%2BCfK9JP0mgbdODjN3aDlUI0W2GERVL5ElYa%2BjiiiOPQ31bDih%2Far69Cccrt7ePxhLvgDwOejLqkMYas%2FaNOyaxQwSZJTzAqTKfx6EB6me%2BjlnTSq1gLwZ1bihao1EFLtkvCUiFpjN6VeMIo%2FTPbqtbQQGXItzQdql%2BXEUFfOUKlw%2BrHRxBw8e%2FJfcRcwbuuscxSzh7ChLNuxuzXfgI33Qrh0qr%2FV5zDtAXQZwMgrRoTi3gtwjb0lfUXqJhx5dGUVXJC8aDprumK4xPVyD4s2EIjEdCy7n7Bp9AErkcyHICDvNLGKeKfVv0VGzQg5WEzSM9zK6%2FL1gNPnkTGy%2FwzBZgxw%2BrSTHSuVOqqb71Pdb3kbTR5XgbKFbpc2F7h6WIq6w9K2tvvXyIIDggJ50BdA5P3Fru1gJ3vTqYH9BEww8HEgPS1aNFduKfELTN8BEcSRQ8NKUFlXZwESwWgZRDAmsd%2FROJMO%2B9nsMGOqUBvi81cm%2Ff4k1AHuRn4WTXYaDRiK%2FhzAuoQ8XmpsDmbNiLZjy%2FML2LHOxyScBuMNceSGH2P%2FSMt6ja99P%2BhX%2BxxwWy%2FTvWIBIwxB52I4ExZ0vp60j3suJyvqdSnW2xzdd4EeACq%2FK7b%2FdPmoOVRPU2J7dl60u9pEwejJJTRvxoQIrWwWhiaaXqr%2Bd9fvz1mVCRepeMdWR5v9BtqYDf9soE7kCWMkOz&X-Amz-Signature=638ab95be5167bcbf4e1fb350c3388d3209bd37c71b85413802d408d6f71ef24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRABOAOT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCincePRDsNfd7g2GXpCYbB67yEAPfSIp4gcRA1uIkZigIgI3CMXJcad5y0VvD%2BOr0WRk%2FX7vxh6OilchfsYd36Ntoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDATYDzVDME76YwIipCrcA7yPTSzkAOg26Ha%2Bcx2RC77BqfpFEaMPNjre%2BUgUKvqd3LgGgr1WBOx0bzWgrnQzPQN1kna1TS%2F%2BkLGEDLJgf26MgPTF9AQBz8xKLAqJevSNu49aOAKElLSG5K3lg%2Frqa9sN7aGqrtrzQrJcEjL%2F6nlb8xiGlmn8xx%2BCfK9JP0mgbdODjN3aDlUI0W2GERVL5ElYa%2BjiiiOPQ31bDih%2Far69Cccrt7ePxhLvgDwOejLqkMYas%2FaNOyaxQwSZJTzAqTKfx6EB6me%2BjlnTSq1gLwZ1bihao1EFLtkvCUiFpjN6VeMIo%2FTPbqtbQQGXItzQdql%2BXEUFfOUKlw%2BrHRxBw8e%2FJfcRcwbuuscxSzh7ChLNuxuzXfgI33Qrh0qr%2FV5zDtAXQZwMgrRoTi3gtwjb0lfUXqJhx5dGUVXJC8aDprumK4xPVyD4s2EIjEdCy7n7Bp9AErkcyHICDvNLGKeKfVv0VGzQg5WEzSM9zK6%2FL1gNPnkTGy%2FwzBZgxw%2BrSTHSuVOqqb71Pdb3kbTR5XgbKFbpc2F7h6WIq6w9K2tvvXyIIDggJ50BdA5P3Fru1gJ3vTqYH9BEww8HEgPS1aNFduKfELTN8BEcSRQ8NKUFlXZwESwWgZRDAmsd%2FROJMO%2B9nsMGOqUBvi81cm%2Ff4k1AHuRn4WTXYaDRiK%2FhzAuoQ8XmpsDmbNiLZjy%2FML2LHOxyScBuMNceSGH2P%2FSMt6ja99P%2BhX%2BxxwWy%2FTvWIBIwxB52I4ExZ0vp60j3suJyvqdSnW2xzdd4EeACq%2FK7b%2FdPmoOVRPU2J7dl60u9pEwejJJTRvxoQIrWwWhiaaXqr%2Bd9fvz1mVCRepeMdWR5v9BtqYDf9soE7kCWMkOz&X-Amz-Signature=4572a2af7b6b7161ce656b78a213ebc3b0fadc2796e98c1b004c9ba4fdd7ab6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRABOAOT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCincePRDsNfd7g2GXpCYbB67yEAPfSIp4gcRA1uIkZigIgI3CMXJcad5y0VvD%2BOr0WRk%2FX7vxh6OilchfsYd36Ntoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDATYDzVDME76YwIipCrcA7yPTSzkAOg26Ha%2Bcx2RC77BqfpFEaMPNjre%2BUgUKvqd3LgGgr1WBOx0bzWgrnQzPQN1kna1TS%2F%2BkLGEDLJgf26MgPTF9AQBz8xKLAqJevSNu49aOAKElLSG5K3lg%2Frqa9sN7aGqrtrzQrJcEjL%2F6nlb8xiGlmn8xx%2BCfK9JP0mgbdODjN3aDlUI0W2GERVL5ElYa%2BjiiiOPQ31bDih%2Far69Cccrt7ePxhLvgDwOejLqkMYas%2FaNOyaxQwSZJTzAqTKfx6EB6me%2BjlnTSq1gLwZ1bihao1EFLtkvCUiFpjN6VeMIo%2FTPbqtbQQGXItzQdql%2BXEUFfOUKlw%2BrHRxBw8e%2FJfcRcwbuuscxSzh7ChLNuxuzXfgI33Qrh0qr%2FV5zDtAXQZwMgrRoTi3gtwjb0lfUXqJhx5dGUVXJC8aDprumK4xPVyD4s2EIjEdCy7n7Bp9AErkcyHICDvNLGKeKfVv0VGzQg5WEzSM9zK6%2FL1gNPnkTGy%2FwzBZgxw%2BrSTHSuVOqqb71Pdb3kbTR5XgbKFbpc2F7h6WIq6w9K2tvvXyIIDggJ50BdA5P3Fru1gJ3vTqYH9BEww8HEgPS1aNFduKfELTN8BEcSRQ8NKUFlXZwESwWgZRDAmsd%2FROJMO%2B9nsMGOqUBvi81cm%2Ff4k1AHuRn4WTXYaDRiK%2FhzAuoQ8XmpsDmbNiLZjy%2FML2LHOxyScBuMNceSGH2P%2FSMt6ja99P%2BhX%2BxxwWy%2FTvWIBIwxB52I4ExZ0vp60j3suJyvqdSnW2xzdd4EeACq%2FK7b%2FdPmoOVRPU2J7dl60u9pEwejJJTRvxoQIrWwWhiaaXqr%2Bd9fvz1mVCRepeMdWR5v9BtqYDf9soE7kCWMkOz&X-Amz-Signature=01505aaff011ff21e46be0f366ac5f0c9cdcc3fd2f6993f2d9f50229a91760cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
