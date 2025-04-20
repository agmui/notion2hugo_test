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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTRGDN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICODqRMM7%2B0dE2spUyXcq%2B%2FMZrwlz1foDRkHgcIYAzApAiAOZbYMuJRwvMA9RCBZV6LGkIQOa4kgRs0gG0iLByA2biqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKOVAor65canXhY2KtwDOwtyDyFMsN1W3Dpz3IBfoFM5DBXpke6r5ehFZDxOGWYXo6IXVOMtOMCIFHLo6Wd8kBNCdfe4OSgY%2BW%2FWX1Fy1rlGCg5zVoHNrOf5Yn0tAP%2Fa%2Fh0xZJMTdJEMa1usOHH2g6b2lxNW3m%2BG%2FXVeHK4iiyKDN3fHqtAIn1NztAkwXRnqx5YT2eh8nydCUy8PnkZi8vAgX6W2xbSfK6c7QyI%2FRaxTnlO28BBtBCNgaPnjvWQ%2FCaWcTuqWm8Hf8mbLGZbfQ5EYyCqZwX6CxpJR5955QlpX8ZEgyLsqPTXeqeJ66v%2BW%2Fd4CA%2BkwPW2%2F98fJ2LjM6YW3Vvju2W5V5%2FmCzrEy4biZ6Pud4hzKBFVrZQsaV3G6K6YDG3QDkkU2UKuwto0gHVwlQpfXRt9rbwM9TJaSKFQTgcrm1%2FqPa046f0nNWlEqszpD76rp1wYyJo94hf4BVTjjQrkqQ2C%2Biepe%2BlIAgiJmZp2TI5CzQeXnMzyKoe5xx19jO%2FmecHx8oiZpSJK28CL2d1uw%2BpjSNQFDqMAl6SINPniNGjifgfTMP1NwdzKGsUOt7Oj2A%2BndLh1fUg9Y5SWTgV8kbPlI3cEx4rIhlSQFZbHR4tjmNVAX5nWoiroE3NzSpgmxKFBhbCEw9aOSwAY6pgFek1clviSd3hzRbGkENn%2BvQNxPNzNEaJM5NZmjNzsba0%2Fxvr1P7ABtP1MoTfcIAUZEICrZL3JF2IXST%2FHdcUVvM7aQ4yli6J7NuvWjPdjInJgimG54CPInDu729pklg4HiJXYIAs3akLG3lHfqCRgCNQepN2P58a%2F7krWf7LGqr4NqgBbAizX%2FAX21kGkiqGvC2863JUy3Mgltn7mddsnZ8rzRtzoJ&X-Amz-Signature=e58427725b41cb6d7a7beab5b3a744710426a6af5ea7b9a0f4d1dc42b8e6b666&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTRGDN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICODqRMM7%2B0dE2spUyXcq%2B%2FMZrwlz1foDRkHgcIYAzApAiAOZbYMuJRwvMA9RCBZV6LGkIQOa4kgRs0gG0iLByA2biqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKOVAor65canXhY2KtwDOwtyDyFMsN1W3Dpz3IBfoFM5DBXpke6r5ehFZDxOGWYXo6IXVOMtOMCIFHLo6Wd8kBNCdfe4OSgY%2BW%2FWX1Fy1rlGCg5zVoHNrOf5Yn0tAP%2Fa%2Fh0xZJMTdJEMa1usOHH2g6b2lxNW3m%2BG%2FXVeHK4iiyKDN3fHqtAIn1NztAkwXRnqx5YT2eh8nydCUy8PnkZi8vAgX6W2xbSfK6c7QyI%2FRaxTnlO28BBtBCNgaPnjvWQ%2FCaWcTuqWm8Hf8mbLGZbfQ5EYyCqZwX6CxpJR5955QlpX8ZEgyLsqPTXeqeJ66v%2BW%2Fd4CA%2BkwPW2%2F98fJ2LjM6YW3Vvju2W5V5%2FmCzrEy4biZ6Pud4hzKBFVrZQsaV3G6K6YDG3QDkkU2UKuwto0gHVwlQpfXRt9rbwM9TJaSKFQTgcrm1%2FqPa046f0nNWlEqszpD76rp1wYyJo94hf4BVTjjQrkqQ2C%2Biepe%2BlIAgiJmZp2TI5CzQeXnMzyKoe5xx19jO%2FmecHx8oiZpSJK28CL2d1uw%2BpjSNQFDqMAl6SINPniNGjifgfTMP1NwdzKGsUOt7Oj2A%2BndLh1fUg9Y5SWTgV8kbPlI3cEx4rIhlSQFZbHR4tjmNVAX5nWoiroE3NzSpgmxKFBhbCEw9aOSwAY6pgFek1clviSd3hzRbGkENn%2BvQNxPNzNEaJM5NZmjNzsba0%2Fxvr1P7ABtP1MoTfcIAUZEICrZL3JF2IXST%2FHdcUVvM7aQ4yli6J7NuvWjPdjInJgimG54CPInDu729pklg4HiJXYIAs3akLG3lHfqCRgCNQepN2P58a%2F7krWf7LGqr4NqgBbAizX%2FAX21kGkiqGvC2863JUy3Mgltn7mddsnZ8rzRtzoJ&X-Amz-Signature=c02b4c087838a6efbede0e408b0ad6a94f42294897fdddfd8049f5dfcaf06ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTRGDN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICODqRMM7%2B0dE2spUyXcq%2B%2FMZrwlz1foDRkHgcIYAzApAiAOZbYMuJRwvMA9RCBZV6LGkIQOa4kgRs0gG0iLByA2biqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKOVAor65canXhY2KtwDOwtyDyFMsN1W3Dpz3IBfoFM5DBXpke6r5ehFZDxOGWYXo6IXVOMtOMCIFHLo6Wd8kBNCdfe4OSgY%2BW%2FWX1Fy1rlGCg5zVoHNrOf5Yn0tAP%2Fa%2Fh0xZJMTdJEMa1usOHH2g6b2lxNW3m%2BG%2FXVeHK4iiyKDN3fHqtAIn1NztAkwXRnqx5YT2eh8nydCUy8PnkZi8vAgX6W2xbSfK6c7QyI%2FRaxTnlO28BBtBCNgaPnjvWQ%2FCaWcTuqWm8Hf8mbLGZbfQ5EYyCqZwX6CxpJR5955QlpX8ZEgyLsqPTXeqeJ66v%2BW%2Fd4CA%2BkwPW2%2F98fJ2LjM6YW3Vvju2W5V5%2FmCzrEy4biZ6Pud4hzKBFVrZQsaV3G6K6YDG3QDkkU2UKuwto0gHVwlQpfXRt9rbwM9TJaSKFQTgcrm1%2FqPa046f0nNWlEqszpD76rp1wYyJo94hf4BVTjjQrkqQ2C%2Biepe%2BlIAgiJmZp2TI5CzQeXnMzyKoe5xx19jO%2FmecHx8oiZpSJK28CL2d1uw%2BpjSNQFDqMAl6SINPniNGjifgfTMP1NwdzKGsUOt7Oj2A%2BndLh1fUg9Y5SWTgV8kbPlI3cEx4rIhlSQFZbHR4tjmNVAX5nWoiroE3NzSpgmxKFBhbCEw9aOSwAY6pgFek1clviSd3hzRbGkENn%2BvQNxPNzNEaJM5NZmjNzsba0%2Fxvr1P7ABtP1MoTfcIAUZEICrZL3JF2IXST%2FHdcUVvM7aQ4yli6J7NuvWjPdjInJgimG54CPInDu729pklg4HiJXYIAs3akLG3lHfqCRgCNQepN2P58a%2F7krWf7LGqr4NqgBbAizX%2FAX21kGkiqGvC2863JUy3Mgltn7mddsnZ8rzRtzoJ&X-Amz-Signature=469d91a8e04c8ce55b0bf2615c76b83aaf87a6e95295b48085d2d497e8dbf0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTRGDN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICODqRMM7%2B0dE2spUyXcq%2B%2FMZrwlz1foDRkHgcIYAzApAiAOZbYMuJRwvMA9RCBZV6LGkIQOa4kgRs0gG0iLByA2biqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKOVAor65canXhY2KtwDOwtyDyFMsN1W3Dpz3IBfoFM5DBXpke6r5ehFZDxOGWYXo6IXVOMtOMCIFHLo6Wd8kBNCdfe4OSgY%2BW%2FWX1Fy1rlGCg5zVoHNrOf5Yn0tAP%2Fa%2Fh0xZJMTdJEMa1usOHH2g6b2lxNW3m%2BG%2FXVeHK4iiyKDN3fHqtAIn1NztAkwXRnqx5YT2eh8nydCUy8PnkZi8vAgX6W2xbSfK6c7QyI%2FRaxTnlO28BBtBCNgaPnjvWQ%2FCaWcTuqWm8Hf8mbLGZbfQ5EYyCqZwX6CxpJR5955QlpX8ZEgyLsqPTXeqeJ66v%2BW%2Fd4CA%2BkwPW2%2F98fJ2LjM6YW3Vvju2W5V5%2FmCzrEy4biZ6Pud4hzKBFVrZQsaV3G6K6YDG3QDkkU2UKuwto0gHVwlQpfXRt9rbwM9TJaSKFQTgcrm1%2FqPa046f0nNWlEqszpD76rp1wYyJo94hf4BVTjjQrkqQ2C%2Biepe%2BlIAgiJmZp2TI5CzQeXnMzyKoe5xx19jO%2FmecHx8oiZpSJK28CL2d1uw%2BpjSNQFDqMAl6SINPniNGjifgfTMP1NwdzKGsUOt7Oj2A%2BndLh1fUg9Y5SWTgV8kbPlI3cEx4rIhlSQFZbHR4tjmNVAX5nWoiroE3NzSpgmxKFBhbCEw9aOSwAY6pgFek1clviSd3hzRbGkENn%2BvQNxPNzNEaJM5NZmjNzsba0%2Fxvr1P7ABtP1MoTfcIAUZEICrZL3JF2IXST%2FHdcUVvM7aQ4yli6J7NuvWjPdjInJgimG54CPInDu729pklg4HiJXYIAs3akLG3lHfqCRgCNQepN2P58a%2F7krWf7LGqr4NqgBbAizX%2FAX21kGkiqGvC2863JUy3Mgltn7mddsnZ8rzRtzoJ&X-Amz-Signature=fd6c74e6c10399ba0805921e656a07b4d99195a029b8d8eeb1d54fd008f074ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTRGDN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICODqRMM7%2B0dE2spUyXcq%2B%2FMZrwlz1foDRkHgcIYAzApAiAOZbYMuJRwvMA9RCBZV6LGkIQOa4kgRs0gG0iLByA2biqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKOVAor65canXhY2KtwDOwtyDyFMsN1W3Dpz3IBfoFM5DBXpke6r5ehFZDxOGWYXo6IXVOMtOMCIFHLo6Wd8kBNCdfe4OSgY%2BW%2FWX1Fy1rlGCg5zVoHNrOf5Yn0tAP%2Fa%2Fh0xZJMTdJEMa1usOHH2g6b2lxNW3m%2BG%2FXVeHK4iiyKDN3fHqtAIn1NztAkwXRnqx5YT2eh8nydCUy8PnkZi8vAgX6W2xbSfK6c7QyI%2FRaxTnlO28BBtBCNgaPnjvWQ%2FCaWcTuqWm8Hf8mbLGZbfQ5EYyCqZwX6CxpJR5955QlpX8ZEgyLsqPTXeqeJ66v%2BW%2Fd4CA%2BkwPW2%2F98fJ2LjM6YW3Vvju2W5V5%2FmCzrEy4biZ6Pud4hzKBFVrZQsaV3G6K6YDG3QDkkU2UKuwto0gHVwlQpfXRt9rbwM9TJaSKFQTgcrm1%2FqPa046f0nNWlEqszpD76rp1wYyJo94hf4BVTjjQrkqQ2C%2Biepe%2BlIAgiJmZp2TI5CzQeXnMzyKoe5xx19jO%2FmecHx8oiZpSJK28CL2d1uw%2BpjSNQFDqMAl6SINPniNGjifgfTMP1NwdzKGsUOt7Oj2A%2BndLh1fUg9Y5SWTgV8kbPlI3cEx4rIhlSQFZbHR4tjmNVAX5nWoiroE3NzSpgmxKFBhbCEw9aOSwAY6pgFek1clviSd3hzRbGkENn%2BvQNxPNzNEaJM5NZmjNzsba0%2Fxvr1P7ABtP1MoTfcIAUZEICrZL3JF2IXST%2FHdcUVvM7aQ4yli6J7NuvWjPdjInJgimG54CPInDu729pklg4HiJXYIAs3akLG3lHfqCRgCNQepN2P58a%2F7krWf7LGqr4NqgBbAizX%2FAX21kGkiqGvC2863JUy3Mgltn7mddsnZ8rzRtzoJ&X-Amz-Signature=5c3beadcaa639af3af15113ac27ee6ac83e5e6287bf192f27512bb9282b0c3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTRGDN5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICODqRMM7%2B0dE2spUyXcq%2B%2FMZrwlz1foDRkHgcIYAzApAiAOZbYMuJRwvMA9RCBZV6LGkIQOa4kgRs0gG0iLByA2biqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKOVAor65canXhY2KtwDOwtyDyFMsN1W3Dpz3IBfoFM5DBXpke6r5ehFZDxOGWYXo6IXVOMtOMCIFHLo6Wd8kBNCdfe4OSgY%2BW%2FWX1Fy1rlGCg5zVoHNrOf5Yn0tAP%2Fa%2Fh0xZJMTdJEMa1usOHH2g6b2lxNW3m%2BG%2FXVeHK4iiyKDN3fHqtAIn1NztAkwXRnqx5YT2eh8nydCUy8PnkZi8vAgX6W2xbSfK6c7QyI%2FRaxTnlO28BBtBCNgaPnjvWQ%2FCaWcTuqWm8Hf8mbLGZbfQ5EYyCqZwX6CxpJR5955QlpX8ZEgyLsqPTXeqeJ66v%2BW%2Fd4CA%2BkwPW2%2F98fJ2LjM6YW3Vvju2W5V5%2FmCzrEy4biZ6Pud4hzKBFVrZQsaV3G6K6YDG3QDkkU2UKuwto0gHVwlQpfXRt9rbwM9TJaSKFQTgcrm1%2FqPa046f0nNWlEqszpD76rp1wYyJo94hf4BVTjjQrkqQ2C%2Biepe%2BlIAgiJmZp2TI5CzQeXnMzyKoe5xx19jO%2FmecHx8oiZpSJK28CL2d1uw%2BpjSNQFDqMAl6SINPniNGjifgfTMP1NwdzKGsUOt7Oj2A%2BndLh1fUg9Y5SWTgV8kbPlI3cEx4rIhlSQFZbHR4tjmNVAX5nWoiroE3NzSpgmxKFBhbCEw9aOSwAY6pgFek1clviSd3hzRbGkENn%2BvQNxPNzNEaJM5NZmjNzsba0%2Fxvr1P7ABtP1MoTfcIAUZEICrZL3JF2IXST%2FHdcUVvM7aQ4yli6J7NuvWjPdjInJgimG54CPInDu729pklg4HiJXYIAs3akLG3lHfqCRgCNQepN2P58a%2F7krWf7LGqr4NqgBbAizX%2FAX21kGkiqGvC2863JUy3Mgltn7mddsnZ8rzRtzoJ&X-Amz-Signature=8e04da2549a64f6a902f63f57586031a74babea02d602d6bead0a2c7ead9553c&X-Amz-SignedHeaders=host&x-id=GetObject)
