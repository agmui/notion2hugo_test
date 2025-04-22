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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWFG7JM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEugZUZXGE7xMTiMg0czEkQehm0JNXI2GQfByR6%2FFHiGAiEAxHA9gdLmadoQEw2lR%2Fn3MuU3C1aSUZhGiF%2F0U21yqzwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJxcwJoHnUMPbE8ircA1I3VGP5LjKP80PuP%2BW7I3GJpDU45VPBcFWhh7Zytscboe1mFyo0V5vlFYqiKArz2IIRQmLqeZbeYERBRvL4A0cYp1qx%2BQV2CzbKnXdwfqIXQIH%2FtnnhOKH0ygwjdHb4NX9wxsjpb7s%2BeM%2BJ9gZ%2BWx7Ury%2FAlsNCOLW0Knc3vpnGqgR0j1n0qKQ%2F4WWp7KDSwt8ngjoEeKTTIYcvGv8ow3GHGoZM6R%2ByBFfPkLoQ2g%2BMwTOSh5F%2F%2BaMgTbutVP6PPjGUASdihRKQ20Q2yRsvmblIk4YadvnyGDNgYUSGdtMws%2FVcVsJCxYEebGqjEI5MsxCw2ccMZSAB5qodcnGhStnLGfk8fV8tOaFCHXycCuHY9UalaojUscTZZv4yWt27wWuiDeAjgN3m1Zb5bQnXajj5VDLhQI4nKYHqURx2JJ5%2FNFdKBsiDQOrbZ%2F0nM87j8JnjtGR9ybHy0iSQ%2FZxP8CF4V8IVvGofZ%2F1dE8aP0tYVkmFSpi5YZrYC0vKsm%2B2%2BnSqwfRZDNtWrdXtjco8TpQQ%2BY7sBXZxvinKEQ08Fri9sm9qGOdpP8nCTghmFKaidWvju5zaDPjPMMsh9Q6ZzZI5M4sq%2BxcOCrYN9aAPCrIeNaKADz7vyaWyWXpfSMOrfnsAGOqUBARZ6bw2vhRZceEY9HLy2stnwv0dd2u6knFuHKVibREf8Tjxg9isPoShz7hZ5Cvca6esgqSSEDc2FOrYaYFuKtBlQF43bFGi2gNZSoWWeHqFOz8ef5FJxhW2d7JnV2h3KFYAW%2FK4XFmX4ycrAxR%2FupEKsFkwdeTPNFfZeYCEEkPoCzKiYaL9Oc2dpuFcBraJVKALDhWUE%2FNtU7TJdMc7yc3%2BAbyI7&X-Amz-Signature=d9627cb163682c58f00654aea3b5dd5abacc333d61a9b9a3e67a1453f704a9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWFG7JM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEugZUZXGE7xMTiMg0czEkQehm0JNXI2GQfByR6%2FFHiGAiEAxHA9gdLmadoQEw2lR%2Fn3MuU3C1aSUZhGiF%2F0U21yqzwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJxcwJoHnUMPbE8ircA1I3VGP5LjKP80PuP%2BW7I3GJpDU45VPBcFWhh7Zytscboe1mFyo0V5vlFYqiKArz2IIRQmLqeZbeYERBRvL4A0cYp1qx%2BQV2CzbKnXdwfqIXQIH%2FtnnhOKH0ygwjdHb4NX9wxsjpb7s%2BeM%2BJ9gZ%2BWx7Ury%2FAlsNCOLW0Knc3vpnGqgR0j1n0qKQ%2F4WWp7KDSwt8ngjoEeKTTIYcvGv8ow3GHGoZM6R%2ByBFfPkLoQ2g%2BMwTOSh5F%2F%2BaMgTbutVP6PPjGUASdihRKQ20Q2yRsvmblIk4YadvnyGDNgYUSGdtMws%2FVcVsJCxYEebGqjEI5MsxCw2ccMZSAB5qodcnGhStnLGfk8fV8tOaFCHXycCuHY9UalaojUscTZZv4yWt27wWuiDeAjgN3m1Zb5bQnXajj5VDLhQI4nKYHqURx2JJ5%2FNFdKBsiDQOrbZ%2F0nM87j8JnjtGR9ybHy0iSQ%2FZxP8CF4V8IVvGofZ%2F1dE8aP0tYVkmFSpi5YZrYC0vKsm%2B2%2BnSqwfRZDNtWrdXtjco8TpQQ%2BY7sBXZxvinKEQ08Fri9sm9qGOdpP8nCTghmFKaidWvju5zaDPjPMMsh9Q6ZzZI5M4sq%2BxcOCrYN9aAPCrIeNaKADz7vyaWyWXpfSMOrfnsAGOqUBARZ6bw2vhRZceEY9HLy2stnwv0dd2u6knFuHKVibREf8Tjxg9isPoShz7hZ5Cvca6esgqSSEDc2FOrYaYFuKtBlQF43bFGi2gNZSoWWeHqFOz8ef5FJxhW2d7JnV2h3KFYAW%2FK4XFmX4ycrAxR%2FupEKsFkwdeTPNFfZeYCEEkPoCzKiYaL9Oc2dpuFcBraJVKALDhWUE%2FNtU7TJdMc7yc3%2BAbyI7&X-Amz-Signature=3dd8980b044a62ec6def4f2ad9060ffbc06ef1f448c0591289f70bb36d9792aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWFG7JM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEugZUZXGE7xMTiMg0czEkQehm0JNXI2GQfByR6%2FFHiGAiEAxHA9gdLmadoQEw2lR%2Fn3MuU3C1aSUZhGiF%2F0U21yqzwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJxcwJoHnUMPbE8ircA1I3VGP5LjKP80PuP%2BW7I3GJpDU45VPBcFWhh7Zytscboe1mFyo0V5vlFYqiKArz2IIRQmLqeZbeYERBRvL4A0cYp1qx%2BQV2CzbKnXdwfqIXQIH%2FtnnhOKH0ygwjdHb4NX9wxsjpb7s%2BeM%2BJ9gZ%2BWx7Ury%2FAlsNCOLW0Knc3vpnGqgR0j1n0qKQ%2F4WWp7KDSwt8ngjoEeKTTIYcvGv8ow3GHGoZM6R%2ByBFfPkLoQ2g%2BMwTOSh5F%2F%2BaMgTbutVP6PPjGUASdihRKQ20Q2yRsvmblIk4YadvnyGDNgYUSGdtMws%2FVcVsJCxYEebGqjEI5MsxCw2ccMZSAB5qodcnGhStnLGfk8fV8tOaFCHXycCuHY9UalaojUscTZZv4yWt27wWuiDeAjgN3m1Zb5bQnXajj5VDLhQI4nKYHqURx2JJ5%2FNFdKBsiDQOrbZ%2F0nM87j8JnjtGR9ybHy0iSQ%2FZxP8CF4V8IVvGofZ%2F1dE8aP0tYVkmFSpi5YZrYC0vKsm%2B2%2BnSqwfRZDNtWrdXtjco8TpQQ%2BY7sBXZxvinKEQ08Fri9sm9qGOdpP8nCTghmFKaidWvju5zaDPjPMMsh9Q6ZzZI5M4sq%2BxcOCrYN9aAPCrIeNaKADz7vyaWyWXpfSMOrfnsAGOqUBARZ6bw2vhRZceEY9HLy2stnwv0dd2u6knFuHKVibREf8Tjxg9isPoShz7hZ5Cvca6esgqSSEDc2FOrYaYFuKtBlQF43bFGi2gNZSoWWeHqFOz8ef5FJxhW2d7JnV2h3KFYAW%2FK4XFmX4ycrAxR%2FupEKsFkwdeTPNFfZeYCEEkPoCzKiYaL9Oc2dpuFcBraJVKALDhWUE%2FNtU7TJdMc7yc3%2BAbyI7&X-Amz-Signature=13839b2b3897a6337ff5704ab82865fe27691c2fcce158c20b8b5c38f7b5385d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWFG7JM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEugZUZXGE7xMTiMg0czEkQehm0JNXI2GQfByR6%2FFHiGAiEAxHA9gdLmadoQEw2lR%2Fn3MuU3C1aSUZhGiF%2F0U21yqzwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJxcwJoHnUMPbE8ircA1I3VGP5LjKP80PuP%2BW7I3GJpDU45VPBcFWhh7Zytscboe1mFyo0V5vlFYqiKArz2IIRQmLqeZbeYERBRvL4A0cYp1qx%2BQV2CzbKnXdwfqIXQIH%2FtnnhOKH0ygwjdHb4NX9wxsjpb7s%2BeM%2BJ9gZ%2BWx7Ury%2FAlsNCOLW0Knc3vpnGqgR0j1n0qKQ%2F4WWp7KDSwt8ngjoEeKTTIYcvGv8ow3GHGoZM6R%2ByBFfPkLoQ2g%2BMwTOSh5F%2F%2BaMgTbutVP6PPjGUASdihRKQ20Q2yRsvmblIk4YadvnyGDNgYUSGdtMws%2FVcVsJCxYEebGqjEI5MsxCw2ccMZSAB5qodcnGhStnLGfk8fV8tOaFCHXycCuHY9UalaojUscTZZv4yWt27wWuiDeAjgN3m1Zb5bQnXajj5VDLhQI4nKYHqURx2JJ5%2FNFdKBsiDQOrbZ%2F0nM87j8JnjtGR9ybHy0iSQ%2FZxP8CF4V8IVvGofZ%2F1dE8aP0tYVkmFSpi5YZrYC0vKsm%2B2%2BnSqwfRZDNtWrdXtjco8TpQQ%2BY7sBXZxvinKEQ08Fri9sm9qGOdpP8nCTghmFKaidWvju5zaDPjPMMsh9Q6ZzZI5M4sq%2BxcOCrYN9aAPCrIeNaKADz7vyaWyWXpfSMOrfnsAGOqUBARZ6bw2vhRZceEY9HLy2stnwv0dd2u6knFuHKVibREf8Tjxg9isPoShz7hZ5Cvca6esgqSSEDc2FOrYaYFuKtBlQF43bFGi2gNZSoWWeHqFOz8ef5FJxhW2d7JnV2h3KFYAW%2FK4XFmX4ycrAxR%2FupEKsFkwdeTPNFfZeYCEEkPoCzKiYaL9Oc2dpuFcBraJVKALDhWUE%2FNtU7TJdMc7yc3%2BAbyI7&X-Amz-Signature=c62149eb168c1e5efd0d12cc9ec2adfb11b47582e79e858467303035448ce97f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWFG7JM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEugZUZXGE7xMTiMg0czEkQehm0JNXI2GQfByR6%2FFHiGAiEAxHA9gdLmadoQEw2lR%2Fn3MuU3C1aSUZhGiF%2F0U21yqzwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJxcwJoHnUMPbE8ircA1I3VGP5LjKP80PuP%2BW7I3GJpDU45VPBcFWhh7Zytscboe1mFyo0V5vlFYqiKArz2IIRQmLqeZbeYERBRvL4A0cYp1qx%2BQV2CzbKnXdwfqIXQIH%2FtnnhOKH0ygwjdHb4NX9wxsjpb7s%2BeM%2BJ9gZ%2BWx7Ury%2FAlsNCOLW0Knc3vpnGqgR0j1n0qKQ%2F4WWp7KDSwt8ngjoEeKTTIYcvGv8ow3GHGoZM6R%2ByBFfPkLoQ2g%2BMwTOSh5F%2F%2BaMgTbutVP6PPjGUASdihRKQ20Q2yRsvmblIk4YadvnyGDNgYUSGdtMws%2FVcVsJCxYEebGqjEI5MsxCw2ccMZSAB5qodcnGhStnLGfk8fV8tOaFCHXycCuHY9UalaojUscTZZv4yWt27wWuiDeAjgN3m1Zb5bQnXajj5VDLhQI4nKYHqURx2JJ5%2FNFdKBsiDQOrbZ%2F0nM87j8JnjtGR9ybHy0iSQ%2FZxP8CF4V8IVvGofZ%2F1dE8aP0tYVkmFSpi5YZrYC0vKsm%2B2%2BnSqwfRZDNtWrdXtjco8TpQQ%2BY7sBXZxvinKEQ08Fri9sm9qGOdpP8nCTghmFKaidWvju5zaDPjPMMsh9Q6ZzZI5M4sq%2BxcOCrYN9aAPCrIeNaKADz7vyaWyWXpfSMOrfnsAGOqUBARZ6bw2vhRZceEY9HLy2stnwv0dd2u6knFuHKVibREf8Tjxg9isPoShz7hZ5Cvca6esgqSSEDc2FOrYaYFuKtBlQF43bFGi2gNZSoWWeHqFOz8ef5FJxhW2d7JnV2h3KFYAW%2FK4XFmX4ycrAxR%2FupEKsFkwdeTPNFfZeYCEEkPoCzKiYaL9Oc2dpuFcBraJVKALDhWUE%2FNtU7TJdMc7yc3%2BAbyI7&X-Amz-Signature=8868a9b015f1f13fab48c3a9fffb4a7141eb2074b6ec6adc297de25603b1a1fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWFG7JM%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIEugZUZXGE7xMTiMg0czEkQehm0JNXI2GQfByR6%2FFHiGAiEAxHA9gdLmadoQEw2lR%2Fn3MuU3C1aSUZhGiF%2F0U21yqzwqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCXJxcwJoHnUMPbE8ircA1I3VGP5LjKP80PuP%2BW7I3GJpDU45VPBcFWhh7Zytscboe1mFyo0V5vlFYqiKArz2IIRQmLqeZbeYERBRvL4A0cYp1qx%2BQV2CzbKnXdwfqIXQIH%2FtnnhOKH0ygwjdHb4NX9wxsjpb7s%2BeM%2BJ9gZ%2BWx7Ury%2FAlsNCOLW0Knc3vpnGqgR0j1n0qKQ%2F4WWp7KDSwt8ngjoEeKTTIYcvGv8ow3GHGoZM6R%2ByBFfPkLoQ2g%2BMwTOSh5F%2F%2BaMgTbutVP6PPjGUASdihRKQ20Q2yRsvmblIk4YadvnyGDNgYUSGdtMws%2FVcVsJCxYEebGqjEI5MsxCw2ccMZSAB5qodcnGhStnLGfk8fV8tOaFCHXycCuHY9UalaojUscTZZv4yWt27wWuiDeAjgN3m1Zb5bQnXajj5VDLhQI4nKYHqURx2JJ5%2FNFdKBsiDQOrbZ%2F0nM87j8JnjtGR9ybHy0iSQ%2FZxP8CF4V8IVvGofZ%2F1dE8aP0tYVkmFSpi5YZrYC0vKsm%2B2%2BnSqwfRZDNtWrdXtjco8TpQQ%2BY7sBXZxvinKEQ08Fri9sm9qGOdpP8nCTghmFKaidWvju5zaDPjPMMsh9Q6ZzZI5M4sq%2BxcOCrYN9aAPCrIeNaKADz7vyaWyWXpfSMOrfnsAGOqUBARZ6bw2vhRZceEY9HLy2stnwv0dd2u6knFuHKVibREf8Tjxg9isPoShz7hZ5Cvca6esgqSSEDc2FOrYaYFuKtBlQF43bFGi2gNZSoWWeHqFOz8ef5FJxhW2d7JnV2h3KFYAW%2FK4XFmX4ycrAxR%2FupEKsFkwdeTPNFfZeYCEEkPoCzKiYaL9Oc2dpuFcBraJVKALDhWUE%2FNtU7TJdMc7yc3%2BAbyI7&X-Amz-Signature=8478ee8a8bd7f65432f82d724356b230f763fdc54954f9e034abf03b860f5f3a&X-Amz-SignedHeaders=host&x-id=GetObject)
