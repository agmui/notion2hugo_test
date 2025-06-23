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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=4cffae793ea99d99c4029fcce86739d13c3c3cc5043922d3335d8ffebf2effea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=3858e886f4de86554ebb34aefee6cc79a0b80e09e582c4cd010e5964d92d3aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=2cdc02cfc8e9aa06a9cbf56317bb8543c56f0fd6feac09a231e4037a9349bf67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=8a0ac2246ef946ceb593340ce080c26204a3c7d1fbac47ad30627e3e29eaa147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=c4ab56371f7351049b37fb53e655b6dc16cf4cf87d00208ee7fd6314af393daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFQR2CW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIHZMb7Oip0wFagWI1KYXYVgTycIPo2S3lhseYcZBfwGYAiEA6DHDfm83eJlONuLW5W09mPLzK1nirnU71yr5Mzjcry8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbxF93P0riFJAiE4SrcA3xBboncBeh29Ou%2F1xbNoV0QJqsfcQ0MMzhwKwiu%2BliPxxfzBttzRLeosZTMVO7TNp1%2FMfr4glCjEKhRFHt%2B%2BjshNMb3V6%2FWuwZt20k7dupyPDaQJQvd1izRNEvsUpnuoXbXZWYsyRreMhdI7S0IFkdYUQy1YuIxiw1h4URiOih7k%2Bp8us1C3K%2BMfe54HEBaVAT9oqK2pjVk9vZboTHM0r4Ak3jEMfv1VP4pyXf3WVI1pEMQyKWi4aDM89KxybJBseOgCkfpfCFo8KnveupFR3mnm4ocTtg6o%2Fc0kSaK1RYRwXldfHx9UXZlqiukBmuDzKOeBPc%2BFBqPWBmH62%2BGR5eLib%2BCg1DyAZv3zKXV%2BZD9m5RU38FoxdX3htp2TMWF8LiQ%2BFVSegioc12HWmkqUWSx8vOcfR51znd3wgcaCrWo1h9oLBETvRm5sh%2BKPvCQZEFPPXIqSrdMVAzW%2B4PhcNI3U4ZHBJq0ybHik1BnOv1JMWYsvigMwEU0WvyRI4gsN1tYLQSL64IrBlc%2FFfoKdmlk8fYLHfsP2WkhQLIXYJnheJaHB9NogMWzmLz07knOBUEuuAOrSJcjaUL8KRNWX0yS8d%2BqPF0Y%2F07GY8EzPT%2Bo7%2B535f7Wv1jZe1eRMK%2Bw48IGOqUBo%2B5aTDPm4VJxmuMzlSTCmIiNw19OJ%2FKPfCQeme0k1XR%2Bb3HP6sjMHTnETIPZ6R0YDvqRpGHZJ7%2BQx5xu34LT%2F%2FJT3EqFrZhLu51biLLcnbzzvH7cVwvIo8iEjeXVSAgybXywjZ5bgVnluQTBcz8ZoaIb%2FCf4YhyhB1gOiYYiKw49j4M4o7WKcBm3jsTLEO8ymWTMno0HQGtuPq9T73Iv%2BVGfZKin&X-Amz-Signature=5b142d97eeda36032e43508f63ef34e81d526bab462dd64e5fa69f96a1737d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
