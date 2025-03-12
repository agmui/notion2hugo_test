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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJUPWSY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC%2BXnOMl6A3%2Fz2TB9NjTtN8tpd%2FpmPgQ4fXszzh9mH1sQIhAJO1tYxcnaSpKQmjSL7SaM%2FjXW3rzNjY1pew5Il6SXpIKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1gzS9jR1dIs%2BCOUQq3AMEDe4fhnbMh6mFZz69SiC1BXlPd%2BmJ1ZVCq4VN%2FEZFCActLO5WuvV0q5OauJtwRR%2FGvxbBqpn0IA%2FO%2BAnaqHIbicscI4qVYz43p%2F3iZne5CLa5x%2FY6vV9qQp2%2FfOnQbyhfngYzExqCz279MjwQDltiAgJ5t64UTGH3uwS28UTSYUCdG%2BZMriU9sKWBlzAk2rxQ1n1JQnn72ddGPFa4g7QWhurTrZRaDZaLrbetM2nyFLkW4CfpGNzDP5wssiKF7cnIGbj5pm2HwYCsbgKLKcJUNkgiWiFwfKDXAMP9eWXh4fnFyy6zBfCMjvJ2MLXSqDeZtMqbd0jTm9%2FRZkJ9aBNvauwP%2BZTX1mymCsETQC8VV1OgqhtECFvq4tk7nr8ZF6cBUG4u4xg58biVk0fYuCCwoe%2FLRLsslrBE2k0lwnCKzdsfP8MJSiOArdUkDuD9K5om8ZWL%2FYGcNL7QLjSFmzYaGbRGZHx%2Bjq9bYwYgdPMnOYIbSKp4m1llYgg1YnZKr89Ecw0BZsowJmVhjrUNsJAIBmGzQdyV6M50AmjpPmDdFnqoBdC05JAAjaAu3IPiptVEzThEc5OhtW%2FmBFBPixlZYqWsLCYzPey4wduEWhzMvFP313RMQbop0HPoaDD3nsa%2BBjqkAbldYn0KSZlbNswrVCNEBX30Aj4B%2B7%2FGGcADU%2BOt8%2BMSjoOaQ9X2JaW%2F8uFdl4KZI0sCJ5xZ525UH6PZoVDmbA1y3ZZ9cfdq5jqN6cPkG5tvfpV52g%2FTaMbF1BzWoLpGS94thaGUtCTwV17%2BbKVTKx201eIE7t6Lrkx3xseDFJaoR8hBvrG0nhswcRqdfvmQ1RgEEV9kVzflyTQxnQT99ID98%2FJY&X-Amz-Signature=27c3dd3403cd2d72b693bdd7a33d2bc3bdd7d7e568050a34c051e092f37bb099&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJUPWSY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC%2BXnOMl6A3%2Fz2TB9NjTtN8tpd%2FpmPgQ4fXszzh9mH1sQIhAJO1tYxcnaSpKQmjSL7SaM%2FjXW3rzNjY1pew5Il6SXpIKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1gzS9jR1dIs%2BCOUQq3AMEDe4fhnbMh6mFZz69SiC1BXlPd%2BmJ1ZVCq4VN%2FEZFCActLO5WuvV0q5OauJtwRR%2FGvxbBqpn0IA%2FO%2BAnaqHIbicscI4qVYz43p%2F3iZne5CLa5x%2FY6vV9qQp2%2FfOnQbyhfngYzExqCz279MjwQDltiAgJ5t64UTGH3uwS28UTSYUCdG%2BZMriU9sKWBlzAk2rxQ1n1JQnn72ddGPFa4g7QWhurTrZRaDZaLrbetM2nyFLkW4CfpGNzDP5wssiKF7cnIGbj5pm2HwYCsbgKLKcJUNkgiWiFwfKDXAMP9eWXh4fnFyy6zBfCMjvJ2MLXSqDeZtMqbd0jTm9%2FRZkJ9aBNvauwP%2BZTX1mymCsETQC8VV1OgqhtECFvq4tk7nr8ZF6cBUG4u4xg58biVk0fYuCCwoe%2FLRLsslrBE2k0lwnCKzdsfP8MJSiOArdUkDuD9K5om8ZWL%2FYGcNL7QLjSFmzYaGbRGZHx%2Bjq9bYwYgdPMnOYIbSKp4m1llYgg1YnZKr89Ecw0BZsowJmVhjrUNsJAIBmGzQdyV6M50AmjpPmDdFnqoBdC05JAAjaAu3IPiptVEzThEc5OhtW%2FmBFBPixlZYqWsLCYzPey4wduEWhzMvFP313RMQbop0HPoaDD3nsa%2BBjqkAbldYn0KSZlbNswrVCNEBX30Aj4B%2B7%2FGGcADU%2BOt8%2BMSjoOaQ9X2JaW%2F8uFdl4KZI0sCJ5xZ525UH6PZoVDmbA1y3ZZ9cfdq5jqN6cPkG5tvfpV52g%2FTaMbF1BzWoLpGS94thaGUtCTwV17%2BbKVTKx201eIE7t6Lrkx3xseDFJaoR8hBvrG0nhswcRqdfvmQ1RgEEV9kVzflyTQxnQT99ID98%2FJY&X-Amz-Signature=8bedc6e96e7bba4315631cf886cc76a1d3f27f145ca3e7ca857391e4a20f58a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJUPWSY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC%2BXnOMl6A3%2Fz2TB9NjTtN8tpd%2FpmPgQ4fXszzh9mH1sQIhAJO1tYxcnaSpKQmjSL7SaM%2FjXW3rzNjY1pew5Il6SXpIKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1gzS9jR1dIs%2BCOUQq3AMEDe4fhnbMh6mFZz69SiC1BXlPd%2BmJ1ZVCq4VN%2FEZFCActLO5WuvV0q5OauJtwRR%2FGvxbBqpn0IA%2FO%2BAnaqHIbicscI4qVYz43p%2F3iZne5CLa5x%2FY6vV9qQp2%2FfOnQbyhfngYzExqCz279MjwQDltiAgJ5t64UTGH3uwS28UTSYUCdG%2BZMriU9sKWBlzAk2rxQ1n1JQnn72ddGPFa4g7QWhurTrZRaDZaLrbetM2nyFLkW4CfpGNzDP5wssiKF7cnIGbj5pm2HwYCsbgKLKcJUNkgiWiFwfKDXAMP9eWXh4fnFyy6zBfCMjvJ2MLXSqDeZtMqbd0jTm9%2FRZkJ9aBNvauwP%2BZTX1mymCsETQC8VV1OgqhtECFvq4tk7nr8ZF6cBUG4u4xg58biVk0fYuCCwoe%2FLRLsslrBE2k0lwnCKzdsfP8MJSiOArdUkDuD9K5om8ZWL%2FYGcNL7QLjSFmzYaGbRGZHx%2Bjq9bYwYgdPMnOYIbSKp4m1llYgg1YnZKr89Ecw0BZsowJmVhjrUNsJAIBmGzQdyV6M50AmjpPmDdFnqoBdC05JAAjaAu3IPiptVEzThEc5OhtW%2FmBFBPixlZYqWsLCYzPey4wduEWhzMvFP313RMQbop0HPoaDD3nsa%2BBjqkAbldYn0KSZlbNswrVCNEBX30Aj4B%2B7%2FGGcADU%2BOt8%2BMSjoOaQ9X2JaW%2F8uFdl4KZI0sCJ5xZ525UH6PZoVDmbA1y3ZZ9cfdq5jqN6cPkG5tvfpV52g%2FTaMbF1BzWoLpGS94thaGUtCTwV17%2BbKVTKx201eIE7t6Lrkx3xseDFJaoR8hBvrG0nhswcRqdfvmQ1RgEEV9kVzflyTQxnQT99ID98%2FJY&X-Amz-Signature=ba111bbc9ce85fc8e64b566db1833b6b5835ee52437bca0109489bbb1fa22913&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJUPWSY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC%2BXnOMl6A3%2Fz2TB9NjTtN8tpd%2FpmPgQ4fXszzh9mH1sQIhAJO1tYxcnaSpKQmjSL7SaM%2FjXW3rzNjY1pew5Il6SXpIKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1gzS9jR1dIs%2BCOUQq3AMEDe4fhnbMh6mFZz69SiC1BXlPd%2BmJ1ZVCq4VN%2FEZFCActLO5WuvV0q5OauJtwRR%2FGvxbBqpn0IA%2FO%2BAnaqHIbicscI4qVYz43p%2F3iZne5CLa5x%2FY6vV9qQp2%2FfOnQbyhfngYzExqCz279MjwQDltiAgJ5t64UTGH3uwS28UTSYUCdG%2BZMriU9sKWBlzAk2rxQ1n1JQnn72ddGPFa4g7QWhurTrZRaDZaLrbetM2nyFLkW4CfpGNzDP5wssiKF7cnIGbj5pm2HwYCsbgKLKcJUNkgiWiFwfKDXAMP9eWXh4fnFyy6zBfCMjvJ2MLXSqDeZtMqbd0jTm9%2FRZkJ9aBNvauwP%2BZTX1mymCsETQC8VV1OgqhtECFvq4tk7nr8ZF6cBUG4u4xg58biVk0fYuCCwoe%2FLRLsslrBE2k0lwnCKzdsfP8MJSiOArdUkDuD9K5om8ZWL%2FYGcNL7QLjSFmzYaGbRGZHx%2Bjq9bYwYgdPMnOYIbSKp4m1llYgg1YnZKr89Ecw0BZsowJmVhjrUNsJAIBmGzQdyV6M50AmjpPmDdFnqoBdC05JAAjaAu3IPiptVEzThEc5OhtW%2FmBFBPixlZYqWsLCYzPey4wduEWhzMvFP313RMQbop0HPoaDD3nsa%2BBjqkAbldYn0KSZlbNswrVCNEBX30Aj4B%2B7%2FGGcADU%2BOt8%2BMSjoOaQ9X2JaW%2F8uFdl4KZI0sCJ5xZ525UH6PZoVDmbA1y3ZZ9cfdq5jqN6cPkG5tvfpV52g%2FTaMbF1BzWoLpGS94thaGUtCTwV17%2BbKVTKx201eIE7t6Lrkx3xseDFJaoR8hBvrG0nhswcRqdfvmQ1RgEEV9kVzflyTQxnQT99ID98%2FJY&X-Amz-Signature=ea65e13ba20e89f5a9cfea03fb3c815fa4eab6722fb00addb6cb7ef1d07611ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJUPWSY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC%2BXnOMl6A3%2Fz2TB9NjTtN8tpd%2FpmPgQ4fXszzh9mH1sQIhAJO1tYxcnaSpKQmjSL7SaM%2FjXW3rzNjY1pew5Il6SXpIKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1gzS9jR1dIs%2BCOUQq3AMEDe4fhnbMh6mFZz69SiC1BXlPd%2BmJ1ZVCq4VN%2FEZFCActLO5WuvV0q5OauJtwRR%2FGvxbBqpn0IA%2FO%2BAnaqHIbicscI4qVYz43p%2F3iZne5CLa5x%2FY6vV9qQp2%2FfOnQbyhfngYzExqCz279MjwQDltiAgJ5t64UTGH3uwS28UTSYUCdG%2BZMriU9sKWBlzAk2rxQ1n1JQnn72ddGPFa4g7QWhurTrZRaDZaLrbetM2nyFLkW4CfpGNzDP5wssiKF7cnIGbj5pm2HwYCsbgKLKcJUNkgiWiFwfKDXAMP9eWXh4fnFyy6zBfCMjvJ2MLXSqDeZtMqbd0jTm9%2FRZkJ9aBNvauwP%2BZTX1mymCsETQC8VV1OgqhtECFvq4tk7nr8ZF6cBUG4u4xg58biVk0fYuCCwoe%2FLRLsslrBE2k0lwnCKzdsfP8MJSiOArdUkDuD9K5om8ZWL%2FYGcNL7QLjSFmzYaGbRGZHx%2Bjq9bYwYgdPMnOYIbSKp4m1llYgg1YnZKr89Ecw0BZsowJmVhjrUNsJAIBmGzQdyV6M50AmjpPmDdFnqoBdC05JAAjaAu3IPiptVEzThEc5OhtW%2FmBFBPixlZYqWsLCYzPey4wduEWhzMvFP313RMQbop0HPoaDD3nsa%2BBjqkAbldYn0KSZlbNswrVCNEBX30Aj4B%2B7%2FGGcADU%2BOt8%2BMSjoOaQ9X2JaW%2F8uFdl4KZI0sCJ5xZ525UH6PZoVDmbA1y3ZZ9cfdq5jqN6cPkG5tvfpV52g%2FTaMbF1BzWoLpGS94thaGUtCTwV17%2BbKVTKx201eIE7t6Lrkx3xseDFJaoR8hBvrG0nhswcRqdfvmQ1RgEEV9kVzflyTQxnQT99ID98%2FJY&X-Amz-Signature=1810071ad6f0348465a6ed065b275b563b0f0d734466edcfe9f202e3210fc8af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BJUPWSY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T141855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC%2BXnOMl6A3%2Fz2TB9NjTtN8tpd%2FpmPgQ4fXszzh9mH1sQIhAJO1tYxcnaSpKQmjSL7SaM%2FjXW3rzNjY1pew5Il6SXpIKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1gzS9jR1dIs%2BCOUQq3AMEDe4fhnbMh6mFZz69SiC1BXlPd%2BmJ1ZVCq4VN%2FEZFCActLO5WuvV0q5OauJtwRR%2FGvxbBqpn0IA%2FO%2BAnaqHIbicscI4qVYz43p%2F3iZne5CLa5x%2FY6vV9qQp2%2FfOnQbyhfngYzExqCz279MjwQDltiAgJ5t64UTGH3uwS28UTSYUCdG%2BZMriU9sKWBlzAk2rxQ1n1JQnn72ddGPFa4g7QWhurTrZRaDZaLrbetM2nyFLkW4CfpGNzDP5wssiKF7cnIGbj5pm2HwYCsbgKLKcJUNkgiWiFwfKDXAMP9eWXh4fnFyy6zBfCMjvJ2MLXSqDeZtMqbd0jTm9%2FRZkJ9aBNvauwP%2BZTX1mymCsETQC8VV1OgqhtECFvq4tk7nr8ZF6cBUG4u4xg58biVk0fYuCCwoe%2FLRLsslrBE2k0lwnCKzdsfP8MJSiOArdUkDuD9K5om8ZWL%2FYGcNL7QLjSFmzYaGbRGZHx%2Bjq9bYwYgdPMnOYIbSKp4m1llYgg1YnZKr89Ecw0BZsowJmVhjrUNsJAIBmGzQdyV6M50AmjpPmDdFnqoBdC05JAAjaAu3IPiptVEzThEc5OhtW%2FmBFBPixlZYqWsLCYzPey4wduEWhzMvFP313RMQbop0HPoaDD3nsa%2BBjqkAbldYn0KSZlbNswrVCNEBX30Aj4B%2B7%2FGGcADU%2BOt8%2BMSjoOaQ9X2JaW%2F8uFdl4KZI0sCJ5xZ525UH6PZoVDmbA1y3ZZ9cfdq5jqN6cPkG5tvfpV52g%2FTaMbF1BzWoLpGS94thaGUtCTwV17%2BbKVTKx201eIE7t6Lrkx3xseDFJaoR8hBvrG0nhswcRqdfvmQ1RgEEV9kVzflyTQxnQT99ID98%2FJY&X-Amz-Signature=b5596ac445fd1d4ae7dd59e162b236eeb08da9c147642dfe1e757a8e5d760dd9&X-Amz-SignedHeaders=host&x-id=GetObject)
