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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAYOVWP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJV6VjQTPjRZgDt7LvSdzF9W%2FPVfsOHW%2FLI3EMdtCtBAiAGdzaBOKESAS76l%2FNONwGPjZiF63YujOgTwcS%2FKA1cNCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW38XiU8gbYJ5SEggKtwDXxE9ernhDmwQH9%2BI3PceYGeWBbTOqpccXWmwF%2F2ZDYu7uN2lYy1f7qXhA4rSswtXaI1Xuzh1xwj6kLtRh6A2XZF274Xgo26FZDbYpyAem7XRtnqVBS0WIljcMmgbTq3j5oO41xRBD260%2FoWpse2jFn2XlkvFRZXqEiZAZ7LV2Pydm60LnTdrWrpsdyRpNivZB6y5xY3vk173OXdGBJS1o%2FslalpN5x8Wkp38QyXfRQIUMNUT2K7nR4z83dUFvDdn3Ub5MBlUBOaYm4V6yo%2FOf%2FOPhQ6gXTv9eBABALGenc65WQCKA1AtUAxtoaJI6FTelPaL7fqVpXwGNPYievNXI%2BiD7%2BghC3tKFxLhQACd5C1obKe0p7IwoZRhfNrUaFLLc12t0hsSo9x6R99oO8ZRgAaD4H8pwIBReVE2AgXYbdmk3mHc%2BC6sFBtG0t8UlGXTf02PxY1HHRoc4VxOw54Nor%2Brv4SDfa2znH5DDNwTFmUH9pB0ejtpCmuGM6dveJbWIi8XExkUkUzVvYOsqRR7ds0dcVEXuovAyHYGgDFCG3YdflXrEog00frU1%2Fa6nzcWRVErayGL3hxTz%2FM3ozz4BV4w7A6aCqE1HFTcBvE8sTxCj90x7wzxNhJX3vswk4irwQY6pgFxPzQLEjfwwXWVobU02W%2FPcJAoTPUQ1LmFd6I20xbLqMWm6hw3A%2BvTEjuVgiLMFsJiygwpBMKVoRsMmsw7ZSZCjePLrPLq6bZXBUZ37T90ok9FKkT4EDAylBseRhOL0EXvJI7RG2fzYyOwv6hdq9j6pYKmu3J20BVXueaXtOKH17pPAlVSux23iZXAkT0JV1bVBYSra7ylmev0UqY2tNZsgJzaAD%2F4&X-Amz-Signature=8d4404980dd356235de16ad0e8404f035d80ae5b1ec05351b9188bc1535e0cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAYOVWP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJV6VjQTPjRZgDt7LvSdzF9W%2FPVfsOHW%2FLI3EMdtCtBAiAGdzaBOKESAS76l%2FNONwGPjZiF63YujOgTwcS%2FKA1cNCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW38XiU8gbYJ5SEggKtwDXxE9ernhDmwQH9%2BI3PceYGeWBbTOqpccXWmwF%2F2ZDYu7uN2lYy1f7qXhA4rSswtXaI1Xuzh1xwj6kLtRh6A2XZF274Xgo26FZDbYpyAem7XRtnqVBS0WIljcMmgbTq3j5oO41xRBD260%2FoWpse2jFn2XlkvFRZXqEiZAZ7LV2Pydm60LnTdrWrpsdyRpNivZB6y5xY3vk173OXdGBJS1o%2FslalpN5x8Wkp38QyXfRQIUMNUT2K7nR4z83dUFvDdn3Ub5MBlUBOaYm4V6yo%2FOf%2FOPhQ6gXTv9eBABALGenc65WQCKA1AtUAxtoaJI6FTelPaL7fqVpXwGNPYievNXI%2BiD7%2BghC3tKFxLhQACd5C1obKe0p7IwoZRhfNrUaFLLc12t0hsSo9x6R99oO8ZRgAaD4H8pwIBReVE2AgXYbdmk3mHc%2BC6sFBtG0t8UlGXTf02PxY1HHRoc4VxOw54Nor%2Brv4SDfa2znH5DDNwTFmUH9pB0ejtpCmuGM6dveJbWIi8XExkUkUzVvYOsqRR7ds0dcVEXuovAyHYGgDFCG3YdflXrEog00frU1%2Fa6nzcWRVErayGL3hxTz%2FM3ozz4BV4w7A6aCqE1HFTcBvE8sTxCj90x7wzxNhJX3vswk4irwQY6pgFxPzQLEjfwwXWVobU02W%2FPcJAoTPUQ1LmFd6I20xbLqMWm6hw3A%2BvTEjuVgiLMFsJiygwpBMKVoRsMmsw7ZSZCjePLrPLq6bZXBUZ37T90ok9FKkT4EDAylBseRhOL0EXvJI7RG2fzYyOwv6hdq9j6pYKmu3J20BVXueaXtOKH17pPAlVSux23iZXAkT0JV1bVBYSra7ylmev0UqY2tNZsgJzaAD%2F4&X-Amz-Signature=a4d76dd847734667c393fc951dc3ed0ab37b657ee70e7f48103ae75237f66e98&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAYOVWP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJV6VjQTPjRZgDt7LvSdzF9W%2FPVfsOHW%2FLI3EMdtCtBAiAGdzaBOKESAS76l%2FNONwGPjZiF63YujOgTwcS%2FKA1cNCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW38XiU8gbYJ5SEggKtwDXxE9ernhDmwQH9%2BI3PceYGeWBbTOqpccXWmwF%2F2ZDYu7uN2lYy1f7qXhA4rSswtXaI1Xuzh1xwj6kLtRh6A2XZF274Xgo26FZDbYpyAem7XRtnqVBS0WIljcMmgbTq3j5oO41xRBD260%2FoWpse2jFn2XlkvFRZXqEiZAZ7LV2Pydm60LnTdrWrpsdyRpNivZB6y5xY3vk173OXdGBJS1o%2FslalpN5x8Wkp38QyXfRQIUMNUT2K7nR4z83dUFvDdn3Ub5MBlUBOaYm4V6yo%2FOf%2FOPhQ6gXTv9eBABALGenc65WQCKA1AtUAxtoaJI6FTelPaL7fqVpXwGNPYievNXI%2BiD7%2BghC3tKFxLhQACd5C1obKe0p7IwoZRhfNrUaFLLc12t0hsSo9x6R99oO8ZRgAaD4H8pwIBReVE2AgXYbdmk3mHc%2BC6sFBtG0t8UlGXTf02PxY1HHRoc4VxOw54Nor%2Brv4SDfa2znH5DDNwTFmUH9pB0ejtpCmuGM6dveJbWIi8XExkUkUzVvYOsqRR7ds0dcVEXuovAyHYGgDFCG3YdflXrEog00frU1%2Fa6nzcWRVErayGL3hxTz%2FM3ozz4BV4w7A6aCqE1HFTcBvE8sTxCj90x7wzxNhJX3vswk4irwQY6pgFxPzQLEjfwwXWVobU02W%2FPcJAoTPUQ1LmFd6I20xbLqMWm6hw3A%2BvTEjuVgiLMFsJiygwpBMKVoRsMmsw7ZSZCjePLrPLq6bZXBUZ37T90ok9FKkT4EDAylBseRhOL0EXvJI7RG2fzYyOwv6hdq9j6pYKmu3J20BVXueaXtOKH17pPAlVSux23iZXAkT0JV1bVBYSra7ylmev0UqY2tNZsgJzaAD%2F4&X-Amz-Signature=a92cadf9a17d2628b5fdd645c3eeef2facdff5a31f92700226273e55e1953d80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAYOVWP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJV6VjQTPjRZgDt7LvSdzF9W%2FPVfsOHW%2FLI3EMdtCtBAiAGdzaBOKESAS76l%2FNONwGPjZiF63YujOgTwcS%2FKA1cNCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW38XiU8gbYJ5SEggKtwDXxE9ernhDmwQH9%2BI3PceYGeWBbTOqpccXWmwF%2F2ZDYu7uN2lYy1f7qXhA4rSswtXaI1Xuzh1xwj6kLtRh6A2XZF274Xgo26FZDbYpyAem7XRtnqVBS0WIljcMmgbTq3j5oO41xRBD260%2FoWpse2jFn2XlkvFRZXqEiZAZ7LV2Pydm60LnTdrWrpsdyRpNivZB6y5xY3vk173OXdGBJS1o%2FslalpN5x8Wkp38QyXfRQIUMNUT2K7nR4z83dUFvDdn3Ub5MBlUBOaYm4V6yo%2FOf%2FOPhQ6gXTv9eBABALGenc65WQCKA1AtUAxtoaJI6FTelPaL7fqVpXwGNPYievNXI%2BiD7%2BghC3tKFxLhQACd5C1obKe0p7IwoZRhfNrUaFLLc12t0hsSo9x6R99oO8ZRgAaD4H8pwIBReVE2AgXYbdmk3mHc%2BC6sFBtG0t8UlGXTf02PxY1HHRoc4VxOw54Nor%2Brv4SDfa2znH5DDNwTFmUH9pB0ejtpCmuGM6dveJbWIi8XExkUkUzVvYOsqRR7ds0dcVEXuovAyHYGgDFCG3YdflXrEog00frU1%2Fa6nzcWRVErayGL3hxTz%2FM3ozz4BV4w7A6aCqE1HFTcBvE8sTxCj90x7wzxNhJX3vswk4irwQY6pgFxPzQLEjfwwXWVobU02W%2FPcJAoTPUQ1LmFd6I20xbLqMWm6hw3A%2BvTEjuVgiLMFsJiygwpBMKVoRsMmsw7ZSZCjePLrPLq6bZXBUZ37T90ok9FKkT4EDAylBseRhOL0EXvJI7RG2fzYyOwv6hdq9j6pYKmu3J20BVXueaXtOKH17pPAlVSux23iZXAkT0JV1bVBYSra7ylmev0UqY2tNZsgJzaAD%2F4&X-Amz-Signature=6bdfd49a3086b57154b0082f0a3d39c0b48c633a926c9c7b9d036dc3b68b660c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAYOVWP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJV6VjQTPjRZgDt7LvSdzF9W%2FPVfsOHW%2FLI3EMdtCtBAiAGdzaBOKESAS76l%2FNONwGPjZiF63YujOgTwcS%2FKA1cNCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW38XiU8gbYJ5SEggKtwDXxE9ernhDmwQH9%2BI3PceYGeWBbTOqpccXWmwF%2F2ZDYu7uN2lYy1f7qXhA4rSswtXaI1Xuzh1xwj6kLtRh6A2XZF274Xgo26FZDbYpyAem7XRtnqVBS0WIljcMmgbTq3j5oO41xRBD260%2FoWpse2jFn2XlkvFRZXqEiZAZ7LV2Pydm60LnTdrWrpsdyRpNivZB6y5xY3vk173OXdGBJS1o%2FslalpN5x8Wkp38QyXfRQIUMNUT2K7nR4z83dUFvDdn3Ub5MBlUBOaYm4V6yo%2FOf%2FOPhQ6gXTv9eBABALGenc65WQCKA1AtUAxtoaJI6FTelPaL7fqVpXwGNPYievNXI%2BiD7%2BghC3tKFxLhQACd5C1obKe0p7IwoZRhfNrUaFLLc12t0hsSo9x6R99oO8ZRgAaD4H8pwIBReVE2AgXYbdmk3mHc%2BC6sFBtG0t8UlGXTf02PxY1HHRoc4VxOw54Nor%2Brv4SDfa2znH5DDNwTFmUH9pB0ejtpCmuGM6dveJbWIi8XExkUkUzVvYOsqRR7ds0dcVEXuovAyHYGgDFCG3YdflXrEog00frU1%2Fa6nzcWRVErayGL3hxTz%2FM3ozz4BV4w7A6aCqE1HFTcBvE8sTxCj90x7wzxNhJX3vswk4irwQY6pgFxPzQLEjfwwXWVobU02W%2FPcJAoTPUQ1LmFd6I20xbLqMWm6hw3A%2BvTEjuVgiLMFsJiygwpBMKVoRsMmsw7ZSZCjePLrPLq6bZXBUZ37T90ok9FKkT4EDAylBseRhOL0EXvJI7RG2fzYyOwv6hdq9j6pYKmu3J20BVXueaXtOKH17pPAlVSux23iZXAkT0JV1bVBYSra7ylmev0UqY2tNZsgJzaAD%2F4&X-Amz-Signature=909162151b1a93ea6985c3b90ca85dba3ceab446fad4e823144fdd6e8f924f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TAYOVWP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJV6VjQTPjRZgDt7LvSdzF9W%2FPVfsOHW%2FLI3EMdtCtBAiAGdzaBOKESAS76l%2FNONwGPjZiF63YujOgTwcS%2FKA1cNCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW38XiU8gbYJ5SEggKtwDXxE9ernhDmwQH9%2BI3PceYGeWBbTOqpccXWmwF%2F2ZDYu7uN2lYy1f7qXhA4rSswtXaI1Xuzh1xwj6kLtRh6A2XZF274Xgo26FZDbYpyAem7XRtnqVBS0WIljcMmgbTq3j5oO41xRBD260%2FoWpse2jFn2XlkvFRZXqEiZAZ7LV2Pydm60LnTdrWrpsdyRpNivZB6y5xY3vk173OXdGBJS1o%2FslalpN5x8Wkp38QyXfRQIUMNUT2K7nR4z83dUFvDdn3Ub5MBlUBOaYm4V6yo%2FOf%2FOPhQ6gXTv9eBABALGenc65WQCKA1AtUAxtoaJI6FTelPaL7fqVpXwGNPYievNXI%2BiD7%2BghC3tKFxLhQACd5C1obKe0p7IwoZRhfNrUaFLLc12t0hsSo9x6R99oO8ZRgAaD4H8pwIBReVE2AgXYbdmk3mHc%2BC6sFBtG0t8UlGXTf02PxY1HHRoc4VxOw54Nor%2Brv4SDfa2znH5DDNwTFmUH9pB0ejtpCmuGM6dveJbWIi8XExkUkUzVvYOsqRR7ds0dcVEXuovAyHYGgDFCG3YdflXrEog00frU1%2Fa6nzcWRVErayGL3hxTz%2FM3ozz4BV4w7A6aCqE1HFTcBvE8sTxCj90x7wzxNhJX3vswk4irwQY6pgFxPzQLEjfwwXWVobU02W%2FPcJAoTPUQ1LmFd6I20xbLqMWm6hw3A%2BvTEjuVgiLMFsJiygwpBMKVoRsMmsw7ZSZCjePLrPLq6bZXBUZ37T90ok9FKkT4EDAylBseRhOL0EXvJI7RG2fzYyOwv6hdq9j6pYKmu3J20BVXueaXtOKH17pPAlVSux23iZXAkT0JV1bVBYSra7ylmev0UqY2tNZsgJzaAD%2F4&X-Amz-Signature=12c9ddec9a4671fe8cebf748859c38ce6d911c524e74e06dcf54be1682291b81&X-Amz-SignedHeaders=host&x-id=GetObject)
