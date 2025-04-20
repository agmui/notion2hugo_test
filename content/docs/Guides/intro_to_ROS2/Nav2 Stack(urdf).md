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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWDPYZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIFOSnb0Tz5Cv7KceeUnCrHJfZry9cZhqMUYxJm%2BpxLyQAiBWG20xYOlsqyHx8dc3RZrUB%2BJeyUzPlCOdd19eGIf9BSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfVHiJrnKXpj2EB%2BKtwD8zBLu7w0iAetpq815EHTh6vaGMQOBGU01JMHAXx7lFJKL%2FKtLp71tg%2FGNss4E%2BvKwNQh5RcT7CSKPwSnH2FitlPIJizE5ekd4ea9yTs7zVegwMrANarUmXbS8ojkglK1TwZgY%2FykkGLlQPjGs%2BNKFmZoB7ESMHNKrewNYXkW8rJKwtOUU5StUxCrq9b8rbjqphT3goQwzfRQGIWsNTyEZSM6Ad1p6CqziLpPC%2Fz6d0o6bwJ6woksREHBu76xRa6mX9nvPld4npXWU05443oY%2FcL9jMk6Fls4eJtlB9k8h2jM8AXCxCpqgna4uLNNsISKvMfLuoZz%2Fc%2F6vLrn7xXj4KfBHeckB5Qoq6OSQKqonKlDfRp6OzKnEb5V%2BqEPWObRHCqmP8J1EHxmtXbhPfS8WTOxe7V534eAx%2BxOXbuLUOP%2BD4s%2FmEVSeaj6YR90zxirOKaDZKwJXFcW0OYMxsNreHO%2FJetyQff%2FsWo8lrZm8ozkFcwxj5uhrKl%2BwyUD1vrx07wJORup64v8YDXuQQTNcnm4R4mnkiSTuqEBTMzzhJXRpqi9k2P341sQu94m0qtiMsbbQmaGFzLGA57H67uMnZV8e%2BxA3Ob22Hbagv63khACJ4f9ORbbx7SyKPkw6NqVwAY6pgFhTphoGqLumIZiCJy5r61e1b5AxsAzNH9%2BDq7XSyKCqztJmzo%2FzOb5dIEPispGoYOwU3onfUWWZg6thKR7W8bgFTfTzNg%2BC3v%2BPrMJq85Bl%2FlRNFrTPvuOs6p91O2OC78hGv%2BgP4AiGSIzUejRALg12Fg%2BCvQ%2FMGth9VdpzI0%2Bo32SW3nISqMZkEkyFhJUiphxIJpRvUcUsHO0%2B%2BY8SWUugBdaaBfo&X-Amz-Signature=da183d007de1be1894e7ad4161a76d8f4b9e5ed7b8083f4a41438439425b4b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWDPYZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIFOSnb0Tz5Cv7KceeUnCrHJfZry9cZhqMUYxJm%2BpxLyQAiBWG20xYOlsqyHx8dc3RZrUB%2BJeyUzPlCOdd19eGIf9BSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfVHiJrnKXpj2EB%2BKtwD8zBLu7w0iAetpq815EHTh6vaGMQOBGU01JMHAXx7lFJKL%2FKtLp71tg%2FGNss4E%2BvKwNQh5RcT7CSKPwSnH2FitlPIJizE5ekd4ea9yTs7zVegwMrANarUmXbS8ojkglK1TwZgY%2FykkGLlQPjGs%2BNKFmZoB7ESMHNKrewNYXkW8rJKwtOUU5StUxCrq9b8rbjqphT3goQwzfRQGIWsNTyEZSM6Ad1p6CqziLpPC%2Fz6d0o6bwJ6woksREHBu76xRa6mX9nvPld4npXWU05443oY%2FcL9jMk6Fls4eJtlB9k8h2jM8AXCxCpqgna4uLNNsISKvMfLuoZz%2Fc%2F6vLrn7xXj4KfBHeckB5Qoq6OSQKqonKlDfRp6OzKnEb5V%2BqEPWObRHCqmP8J1EHxmtXbhPfS8WTOxe7V534eAx%2BxOXbuLUOP%2BD4s%2FmEVSeaj6YR90zxirOKaDZKwJXFcW0OYMxsNreHO%2FJetyQff%2FsWo8lrZm8ozkFcwxj5uhrKl%2BwyUD1vrx07wJORup64v8YDXuQQTNcnm4R4mnkiSTuqEBTMzzhJXRpqi9k2P341sQu94m0qtiMsbbQmaGFzLGA57H67uMnZV8e%2BxA3Ob22Hbagv63khACJ4f9ORbbx7SyKPkw6NqVwAY6pgFhTphoGqLumIZiCJy5r61e1b5AxsAzNH9%2BDq7XSyKCqztJmzo%2FzOb5dIEPispGoYOwU3onfUWWZg6thKR7W8bgFTfTzNg%2BC3v%2BPrMJq85Bl%2FlRNFrTPvuOs6p91O2OC78hGv%2BgP4AiGSIzUejRALg12Fg%2BCvQ%2FMGth9VdpzI0%2Bo32SW3nISqMZkEkyFhJUiphxIJpRvUcUsHO0%2B%2BY8SWUugBdaaBfo&X-Amz-Signature=e786972fd57a6330e616075881c9f3446b6ecb90c511a9f73effd23271ea5d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWDPYZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIFOSnb0Tz5Cv7KceeUnCrHJfZry9cZhqMUYxJm%2BpxLyQAiBWG20xYOlsqyHx8dc3RZrUB%2BJeyUzPlCOdd19eGIf9BSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfVHiJrnKXpj2EB%2BKtwD8zBLu7w0iAetpq815EHTh6vaGMQOBGU01JMHAXx7lFJKL%2FKtLp71tg%2FGNss4E%2BvKwNQh5RcT7CSKPwSnH2FitlPIJizE5ekd4ea9yTs7zVegwMrANarUmXbS8ojkglK1TwZgY%2FykkGLlQPjGs%2BNKFmZoB7ESMHNKrewNYXkW8rJKwtOUU5StUxCrq9b8rbjqphT3goQwzfRQGIWsNTyEZSM6Ad1p6CqziLpPC%2Fz6d0o6bwJ6woksREHBu76xRa6mX9nvPld4npXWU05443oY%2FcL9jMk6Fls4eJtlB9k8h2jM8AXCxCpqgna4uLNNsISKvMfLuoZz%2Fc%2F6vLrn7xXj4KfBHeckB5Qoq6OSQKqonKlDfRp6OzKnEb5V%2BqEPWObRHCqmP8J1EHxmtXbhPfS8WTOxe7V534eAx%2BxOXbuLUOP%2BD4s%2FmEVSeaj6YR90zxirOKaDZKwJXFcW0OYMxsNreHO%2FJetyQff%2FsWo8lrZm8ozkFcwxj5uhrKl%2BwyUD1vrx07wJORup64v8YDXuQQTNcnm4R4mnkiSTuqEBTMzzhJXRpqi9k2P341sQu94m0qtiMsbbQmaGFzLGA57H67uMnZV8e%2BxA3Ob22Hbagv63khACJ4f9ORbbx7SyKPkw6NqVwAY6pgFhTphoGqLumIZiCJy5r61e1b5AxsAzNH9%2BDq7XSyKCqztJmzo%2FzOb5dIEPispGoYOwU3onfUWWZg6thKR7W8bgFTfTzNg%2BC3v%2BPrMJq85Bl%2FlRNFrTPvuOs6p91O2OC78hGv%2BgP4AiGSIzUejRALg12Fg%2BCvQ%2FMGth9VdpzI0%2Bo32SW3nISqMZkEkyFhJUiphxIJpRvUcUsHO0%2B%2BY8SWUugBdaaBfo&X-Amz-Signature=2b6f3a8d4fb3c4d7296adf3a198096cdac22a073c6b71684fc6cbf1873da13d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWDPYZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIFOSnb0Tz5Cv7KceeUnCrHJfZry9cZhqMUYxJm%2BpxLyQAiBWG20xYOlsqyHx8dc3RZrUB%2BJeyUzPlCOdd19eGIf9BSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfVHiJrnKXpj2EB%2BKtwD8zBLu7w0iAetpq815EHTh6vaGMQOBGU01JMHAXx7lFJKL%2FKtLp71tg%2FGNss4E%2BvKwNQh5RcT7CSKPwSnH2FitlPIJizE5ekd4ea9yTs7zVegwMrANarUmXbS8ojkglK1TwZgY%2FykkGLlQPjGs%2BNKFmZoB7ESMHNKrewNYXkW8rJKwtOUU5StUxCrq9b8rbjqphT3goQwzfRQGIWsNTyEZSM6Ad1p6CqziLpPC%2Fz6d0o6bwJ6woksREHBu76xRa6mX9nvPld4npXWU05443oY%2FcL9jMk6Fls4eJtlB9k8h2jM8AXCxCpqgna4uLNNsISKvMfLuoZz%2Fc%2F6vLrn7xXj4KfBHeckB5Qoq6OSQKqonKlDfRp6OzKnEb5V%2BqEPWObRHCqmP8J1EHxmtXbhPfS8WTOxe7V534eAx%2BxOXbuLUOP%2BD4s%2FmEVSeaj6YR90zxirOKaDZKwJXFcW0OYMxsNreHO%2FJetyQff%2FsWo8lrZm8ozkFcwxj5uhrKl%2BwyUD1vrx07wJORup64v8YDXuQQTNcnm4R4mnkiSTuqEBTMzzhJXRpqi9k2P341sQu94m0qtiMsbbQmaGFzLGA57H67uMnZV8e%2BxA3Ob22Hbagv63khACJ4f9ORbbx7SyKPkw6NqVwAY6pgFhTphoGqLumIZiCJy5r61e1b5AxsAzNH9%2BDq7XSyKCqztJmzo%2FzOb5dIEPispGoYOwU3onfUWWZg6thKR7W8bgFTfTzNg%2BC3v%2BPrMJq85Bl%2FlRNFrTPvuOs6p91O2OC78hGv%2BgP4AiGSIzUejRALg12Fg%2BCvQ%2FMGth9VdpzI0%2Bo32SW3nISqMZkEkyFhJUiphxIJpRvUcUsHO0%2B%2BY8SWUugBdaaBfo&X-Amz-Signature=836d80e9979697a0a2988b69d872a22220b3af9544a26ac5e39c617bf2b761ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWDPYZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIFOSnb0Tz5Cv7KceeUnCrHJfZry9cZhqMUYxJm%2BpxLyQAiBWG20xYOlsqyHx8dc3RZrUB%2BJeyUzPlCOdd19eGIf9BSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfVHiJrnKXpj2EB%2BKtwD8zBLu7w0iAetpq815EHTh6vaGMQOBGU01JMHAXx7lFJKL%2FKtLp71tg%2FGNss4E%2BvKwNQh5RcT7CSKPwSnH2FitlPIJizE5ekd4ea9yTs7zVegwMrANarUmXbS8ojkglK1TwZgY%2FykkGLlQPjGs%2BNKFmZoB7ESMHNKrewNYXkW8rJKwtOUU5StUxCrq9b8rbjqphT3goQwzfRQGIWsNTyEZSM6Ad1p6CqziLpPC%2Fz6d0o6bwJ6woksREHBu76xRa6mX9nvPld4npXWU05443oY%2FcL9jMk6Fls4eJtlB9k8h2jM8AXCxCpqgna4uLNNsISKvMfLuoZz%2Fc%2F6vLrn7xXj4KfBHeckB5Qoq6OSQKqonKlDfRp6OzKnEb5V%2BqEPWObRHCqmP8J1EHxmtXbhPfS8WTOxe7V534eAx%2BxOXbuLUOP%2BD4s%2FmEVSeaj6YR90zxirOKaDZKwJXFcW0OYMxsNreHO%2FJetyQff%2FsWo8lrZm8ozkFcwxj5uhrKl%2BwyUD1vrx07wJORup64v8YDXuQQTNcnm4R4mnkiSTuqEBTMzzhJXRpqi9k2P341sQu94m0qtiMsbbQmaGFzLGA57H67uMnZV8e%2BxA3Ob22Hbagv63khACJ4f9ORbbx7SyKPkw6NqVwAY6pgFhTphoGqLumIZiCJy5r61e1b5AxsAzNH9%2BDq7XSyKCqztJmzo%2FzOb5dIEPispGoYOwU3onfUWWZg6thKR7W8bgFTfTzNg%2BC3v%2BPrMJq85Bl%2FlRNFrTPvuOs6p91O2OC78hGv%2BgP4AiGSIzUejRALg12Fg%2BCvQ%2FMGth9VdpzI0%2Bo32SW3nISqMZkEkyFhJUiphxIJpRvUcUsHO0%2B%2BY8SWUugBdaaBfo&X-Amz-Signature=ee4d6f7f13882fb097b86eb2072300e2c274be55f93d9d54627432791db29a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WWDPYZB%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIFOSnb0Tz5Cv7KceeUnCrHJfZry9cZhqMUYxJm%2BpxLyQAiBWG20xYOlsqyHx8dc3RZrUB%2BJeyUzPlCOdd19eGIf9BSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPfVHiJrnKXpj2EB%2BKtwD8zBLu7w0iAetpq815EHTh6vaGMQOBGU01JMHAXx7lFJKL%2FKtLp71tg%2FGNss4E%2BvKwNQh5RcT7CSKPwSnH2FitlPIJizE5ekd4ea9yTs7zVegwMrANarUmXbS8ojkglK1TwZgY%2FykkGLlQPjGs%2BNKFmZoB7ESMHNKrewNYXkW8rJKwtOUU5StUxCrq9b8rbjqphT3goQwzfRQGIWsNTyEZSM6Ad1p6CqziLpPC%2Fz6d0o6bwJ6woksREHBu76xRa6mX9nvPld4npXWU05443oY%2FcL9jMk6Fls4eJtlB9k8h2jM8AXCxCpqgna4uLNNsISKvMfLuoZz%2Fc%2F6vLrn7xXj4KfBHeckB5Qoq6OSQKqonKlDfRp6OzKnEb5V%2BqEPWObRHCqmP8J1EHxmtXbhPfS8WTOxe7V534eAx%2BxOXbuLUOP%2BD4s%2FmEVSeaj6YR90zxirOKaDZKwJXFcW0OYMxsNreHO%2FJetyQff%2FsWo8lrZm8ozkFcwxj5uhrKl%2BwyUD1vrx07wJORup64v8YDXuQQTNcnm4R4mnkiSTuqEBTMzzhJXRpqi9k2P341sQu94m0qtiMsbbQmaGFzLGA57H67uMnZV8e%2BxA3Ob22Hbagv63khACJ4f9ORbbx7SyKPkw6NqVwAY6pgFhTphoGqLumIZiCJy5r61e1b5AxsAzNH9%2BDq7XSyKCqztJmzo%2FzOb5dIEPispGoYOwU3onfUWWZg6thKR7W8bgFTfTzNg%2BC3v%2BPrMJq85Bl%2FlRNFrTPvuOs6p91O2OC78hGv%2BgP4AiGSIzUejRALg12Fg%2BCvQ%2FMGth9VdpzI0%2Bo32SW3nISqMZkEkyFhJUiphxIJpRvUcUsHO0%2B%2BY8SWUugBdaaBfo&X-Amz-Signature=de87a9fb92cfa828ab69b52b48db2f59effdaf51a73e8539ed54c2d8e1f8c4c7&X-Amz-SignedHeaders=host&x-id=GetObject)
