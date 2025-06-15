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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWZN5GY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCx8DoSSL9EqlscDwI0jxHa1alMnvOIKL13mXdXRc2%2FtAIgWcxR%2Bd7GLpIsKJqViA1lVkdJuhRqWgSinJKNQ0BiJvkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI8yXbeXGY5AQy9gYCrcA5GT%2FMDGT3YX6JIUHypBA9viIstSPrIghP264mZm5uB0qKyzDenKAYz3BEhXaiwwYIvpz5uwdKiwXR5mfRX4Ldobye5UoZU8TnhG6A2f4N1tepJ696CtdlswEXQ8BV2YM4FirqO6caxBTlaA79CcdDx%2BlKRG13mT%2Bd1tdLMsHm%2F2kQuIQW8PUUdTNZcmYcw%2F0JWR7%2F5RHgPtpnxM4fIgbkuPdQpfXIjmxg7kaTVqUpe47vSXJKLeWUDWAfebUe01jN8kpfIzm8XA5hB0%2FuEQGN9jCrHQrI%2B%2BgOQ54v9v%2F%2BoCJqZ%2B3Yi4jDBlg1KIZsYyqGwWRdSMZlfAaNguwPVB6ASAdoZmI7d0N9KygfaOwKxP8PdjSToY25OCrgB5fVC9l4KbsJ4jNxtfJNppdN9bSk0iDiqiA8f%2F%2BeE8MMHy29OknJUfQwA5g6%2BDjzVB9VR2pefrVhUj4mTlIQgYRCXvDaWgsSMvpWiMn892I5Yu5QvAdFWKtv0rJ4OQ7dWIKkQh2YbhLS%2FfzgxWzXyxjOK%2FnkCvKHSCuqRKRY7cmUaxrJvajJvH%2Bn%2FMtB8BzGBPkD6yGHsekEcQgr9z%2F0%2Fn6SK8%2FwiCudQV2Rqqdw%2F%2Bz5umvPIjKmGX6AimDHNW44WwMKrOvMIGOqUBC6Fx7d1HYsBJ0%2FviI4UxEQAz%2B3H8DBGOYMKSH192rypmpSZak4yFMwOaWP2rQ6BCTU74Az3F1c9Bgm94Mc0gMdUVl0pmjra8YrP8VtB31n5sTxDxVX6wg37wxELfLtaovczHEyvDmkPtAnJijLLiIgY3Geszn%2F45YGXwc0CRSpiQnbmKkdMu5%2BwpxQoknldQWeWGmNpMp45ArE8PHHFSfd5go1XE&X-Amz-Signature=9de0e5a0563ca05d000d0b076f62288f4a8aff4214eea9ef002f8f80dcc3d3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWZN5GY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCx8DoSSL9EqlscDwI0jxHa1alMnvOIKL13mXdXRc2%2FtAIgWcxR%2Bd7GLpIsKJqViA1lVkdJuhRqWgSinJKNQ0BiJvkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI8yXbeXGY5AQy9gYCrcA5GT%2FMDGT3YX6JIUHypBA9viIstSPrIghP264mZm5uB0qKyzDenKAYz3BEhXaiwwYIvpz5uwdKiwXR5mfRX4Ldobye5UoZU8TnhG6A2f4N1tepJ696CtdlswEXQ8BV2YM4FirqO6caxBTlaA79CcdDx%2BlKRG13mT%2Bd1tdLMsHm%2F2kQuIQW8PUUdTNZcmYcw%2F0JWR7%2F5RHgPtpnxM4fIgbkuPdQpfXIjmxg7kaTVqUpe47vSXJKLeWUDWAfebUe01jN8kpfIzm8XA5hB0%2FuEQGN9jCrHQrI%2B%2BgOQ54v9v%2F%2BoCJqZ%2B3Yi4jDBlg1KIZsYyqGwWRdSMZlfAaNguwPVB6ASAdoZmI7d0N9KygfaOwKxP8PdjSToY25OCrgB5fVC9l4KbsJ4jNxtfJNppdN9bSk0iDiqiA8f%2F%2BeE8MMHy29OknJUfQwA5g6%2BDjzVB9VR2pefrVhUj4mTlIQgYRCXvDaWgsSMvpWiMn892I5Yu5QvAdFWKtv0rJ4OQ7dWIKkQh2YbhLS%2FfzgxWzXyxjOK%2FnkCvKHSCuqRKRY7cmUaxrJvajJvH%2Bn%2FMtB8BzGBPkD6yGHsekEcQgr9z%2F0%2Fn6SK8%2FwiCudQV2Rqqdw%2F%2Bz5umvPIjKmGX6AimDHNW44WwMKrOvMIGOqUBC6Fx7d1HYsBJ0%2FviI4UxEQAz%2B3H8DBGOYMKSH192rypmpSZak4yFMwOaWP2rQ6BCTU74Az3F1c9Bgm94Mc0gMdUVl0pmjra8YrP8VtB31n5sTxDxVX6wg37wxELfLtaovczHEyvDmkPtAnJijLLiIgY3Geszn%2F45YGXwc0CRSpiQnbmKkdMu5%2BwpxQoknldQWeWGmNpMp45ArE8PHHFSfd5go1XE&X-Amz-Signature=d665c3deeb352809ba92f045d74432599287d0a7f60ad58898040a9a917bbdee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWZN5GY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCx8DoSSL9EqlscDwI0jxHa1alMnvOIKL13mXdXRc2%2FtAIgWcxR%2Bd7GLpIsKJqViA1lVkdJuhRqWgSinJKNQ0BiJvkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI8yXbeXGY5AQy9gYCrcA5GT%2FMDGT3YX6JIUHypBA9viIstSPrIghP264mZm5uB0qKyzDenKAYz3BEhXaiwwYIvpz5uwdKiwXR5mfRX4Ldobye5UoZU8TnhG6A2f4N1tepJ696CtdlswEXQ8BV2YM4FirqO6caxBTlaA79CcdDx%2BlKRG13mT%2Bd1tdLMsHm%2F2kQuIQW8PUUdTNZcmYcw%2F0JWR7%2F5RHgPtpnxM4fIgbkuPdQpfXIjmxg7kaTVqUpe47vSXJKLeWUDWAfebUe01jN8kpfIzm8XA5hB0%2FuEQGN9jCrHQrI%2B%2BgOQ54v9v%2F%2BoCJqZ%2B3Yi4jDBlg1KIZsYyqGwWRdSMZlfAaNguwPVB6ASAdoZmI7d0N9KygfaOwKxP8PdjSToY25OCrgB5fVC9l4KbsJ4jNxtfJNppdN9bSk0iDiqiA8f%2F%2BeE8MMHy29OknJUfQwA5g6%2BDjzVB9VR2pefrVhUj4mTlIQgYRCXvDaWgsSMvpWiMn892I5Yu5QvAdFWKtv0rJ4OQ7dWIKkQh2YbhLS%2FfzgxWzXyxjOK%2FnkCvKHSCuqRKRY7cmUaxrJvajJvH%2Bn%2FMtB8BzGBPkD6yGHsekEcQgr9z%2F0%2Fn6SK8%2FwiCudQV2Rqqdw%2F%2Bz5umvPIjKmGX6AimDHNW44WwMKrOvMIGOqUBC6Fx7d1HYsBJ0%2FviI4UxEQAz%2B3H8DBGOYMKSH192rypmpSZak4yFMwOaWP2rQ6BCTU74Az3F1c9Bgm94Mc0gMdUVl0pmjra8YrP8VtB31n5sTxDxVX6wg37wxELfLtaovczHEyvDmkPtAnJijLLiIgY3Geszn%2F45YGXwc0CRSpiQnbmKkdMu5%2BwpxQoknldQWeWGmNpMp45ArE8PHHFSfd5go1XE&X-Amz-Signature=097f9518b12164854b0c63844515fe62ad0633dcb40b7fbddfe5a924e2c93160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWZN5GY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCx8DoSSL9EqlscDwI0jxHa1alMnvOIKL13mXdXRc2%2FtAIgWcxR%2Bd7GLpIsKJqViA1lVkdJuhRqWgSinJKNQ0BiJvkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI8yXbeXGY5AQy9gYCrcA5GT%2FMDGT3YX6JIUHypBA9viIstSPrIghP264mZm5uB0qKyzDenKAYz3BEhXaiwwYIvpz5uwdKiwXR5mfRX4Ldobye5UoZU8TnhG6A2f4N1tepJ696CtdlswEXQ8BV2YM4FirqO6caxBTlaA79CcdDx%2BlKRG13mT%2Bd1tdLMsHm%2F2kQuIQW8PUUdTNZcmYcw%2F0JWR7%2F5RHgPtpnxM4fIgbkuPdQpfXIjmxg7kaTVqUpe47vSXJKLeWUDWAfebUe01jN8kpfIzm8XA5hB0%2FuEQGN9jCrHQrI%2B%2BgOQ54v9v%2F%2BoCJqZ%2B3Yi4jDBlg1KIZsYyqGwWRdSMZlfAaNguwPVB6ASAdoZmI7d0N9KygfaOwKxP8PdjSToY25OCrgB5fVC9l4KbsJ4jNxtfJNppdN9bSk0iDiqiA8f%2F%2BeE8MMHy29OknJUfQwA5g6%2BDjzVB9VR2pefrVhUj4mTlIQgYRCXvDaWgsSMvpWiMn892I5Yu5QvAdFWKtv0rJ4OQ7dWIKkQh2YbhLS%2FfzgxWzXyxjOK%2FnkCvKHSCuqRKRY7cmUaxrJvajJvH%2Bn%2FMtB8BzGBPkD6yGHsekEcQgr9z%2F0%2Fn6SK8%2FwiCudQV2Rqqdw%2F%2Bz5umvPIjKmGX6AimDHNW44WwMKrOvMIGOqUBC6Fx7d1HYsBJ0%2FviI4UxEQAz%2B3H8DBGOYMKSH192rypmpSZak4yFMwOaWP2rQ6BCTU74Az3F1c9Bgm94Mc0gMdUVl0pmjra8YrP8VtB31n5sTxDxVX6wg37wxELfLtaovczHEyvDmkPtAnJijLLiIgY3Geszn%2F45YGXwc0CRSpiQnbmKkdMu5%2BwpxQoknldQWeWGmNpMp45ArE8PHHFSfd5go1XE&X-Amz-Signature=b78340c93a7861cfe93758300eee16b0acb471ae98658c24d2c2cc35b15ba7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWZN5GY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCx8DoSSL9EqlscDwI0jxHa1alMnvOIKL13mXdXRc2%2FtAIgWcxR%2Bd7GLpIsKJqViA1lVkdJuhRqWgSinJKNQ0BiJvkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI8yXbeXGY5AQy9gYCrcA5GT%2FMDGT3YX6JIUHypBA9viIstSPrIghP264mZm5uB0qKyzDenKAYz3BEhXaiwwYIvpz5uwdKiwXR5mfRX4Ldobye5UoZU8TnhG6A2f4N1tepJ696CtdlswEXQ8BV2YM4FirqO6caxBTlaA79CcdDx%2BlKRG13mT%2Bd1tdLMsHm%2F2kQuIQW8PUUdTNZcmYcw%2F0JWR7%2F5RHgPtpnxM4fIgbkuPdQpfXIjmxg7kaTVqUpe47vSXJKLeWUDWAfebUe01jN8kpfIzm8XA5hB0%2FuEQGN9jCrHQrI%2B%2BgOQ54v9v%2F%2BoCJqZ%2B3Yi4jDBlg1KIZsYyqGwWRdSMZlfAaNguwPVB6ASAdoZmI7d0N9KygfaOwKxP8PdjSToY25OCrgB5fVC9l4KbsJ4jNxtfJNppdN9bSk0iDiqiA8f%2F%2BeE8MMHy29OknJUfQwA5g6%2BDjzVB9VR2pefrVhUj4mTlIQgYRCXvDaWgsSMvpWiMn892I5Yu5QvAdFWKtv0rJ4OQ7dWIKkQh2YbhLS%2FfzgxWzXyxjOK%2FnkCvKHSCuqRKRY7cmUaxrJvajJvH%2Bn%2FMtB8BzGBPkD6yGHsekEcQgr9z%2F0%2Fn6SK8%2FwiCudQV2Rqqdw%2F%2Bz5umvPIjKmGX6AimDHNW44WwMKrOvMIGOqUBC6Fx7d1HYsBJ0%2FviI4UxEQAz%2B3H8DBGOYMKSH192rypmpSZak4yFMwOaWP2rQ6BCTU74Az3F1c9Bgm94Mc0gMdUVl0pmjra8YrP8VtB31n5sTxDxVX6wg37wxELfLtaovczHEyvDmkPtAnJijLLiIgY3Geszn%2F45YGXwc0CRSpiQnbmKkdMu5%2BwpxQoknldQWeWGmNpMp45ArE8PHHFSfd5go1XE&X-Amz-Signature=837bb7938788808dd2d65167b46d079cdfad52be1dbac8f5f0e06743e1f56146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AWZN5GY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCx8DoSSL9EqlscDwI0jxHa1alMnvOIKL13mXdXRc2%2FtAIgWcxR%2Bd7GLpIsKJqViA1lVkdJuhRqWgSinJKNQ0BiJvkq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDI8yXbeXGY5AQy9gYCrcA5GT%2FMDGT3YX6JIUHypBA9viIstSPrIghP264mZm5uB0qKyzDenKAYz3BEhXaiwwYIvpz5uwdKiwXR5mfRX4Ldobye5UoZU8TnhG6A2f4N1tepJ696CtdlswEXQ8BV2YM4FirqO6caxBTlaA79CcdDx%2BlKRG13mT%2Bd1tdLMsHm%2F2kQuIQW8PUUdTNZcmYcw%2F0JWR7%2F5RHgPtpnxM4fIgbkuPdQpfXIjmxg7kaTVqUpe47vSXJKLeWUDWAfebUe01jN8kpfIzm8XA5hB0%2FuEQGN9jCrHQrI%2B%2BgOQ54v9v%2F%2BoCJqZ%2B3Yi4jDBlg1KIZsYyqGwWRdSMZlfAaNguwPVB6ASAdoZmI7d0N9KygfaOwKxP8PdjSToY25OCrgB5fVC9l4KbsJ4jNxtfJNppdN9bSk0iDiqiA8f%2F%2BeE8MMHy29OknJUfQwA5g6%2BDjzVB9VR2pefrVhUj4mTlIQgYRCXvDaWgsSMvpWiMn892I5Yu5QvAdFWKtv0rJ4OQ7dWIKkQh2YbhLS%2FfzgxWzXyxjOK%2FnkCvKHSCuqRKRY7cmUaxrJvajJvH%2Bn%2FMtB8BzGBPkD6yGHsekEcQgr9z%2F0%2Fn6SK8%2FwiCudQV2Rqqdw%2F%2Bz5umvPIjKmGX6AimDHNW44WwMKrOvMIGOqUBC6Fx7d1HYsBJ0%2FviI4UxEQAz%2B3H8DBGOYMKSH192rypmpSZak4yFMwOaWP2rQ6BCTU74Az3F1c9Bgm94Mc0gMdUVl0pmjra8YrP8VtB31n5sTxDxVX6wg37wxELfLtaovczHEyvDmkPtAnJijLLiIgY3Geszn%2F45YGXwc0CRSpiQnbmKkdMu5%2BwpxQoknldQWeWGmNpMp45ArE8PHHFSfd5go1XE&X-Amz-Signature=5ed14382d4242f96bc3e5a8e6dca6328e6a6f8a2eeffe348ac90f2476b43454a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
