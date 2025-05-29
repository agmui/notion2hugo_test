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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZ5M2DQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtpOUp%2BuaTqiFNvGnODO9lsbebmRzUWZnjW8Agf1804AiBIrzk9ji%2FgdyeVgKpsBuf0S0MOFIYgmMs18QjpSIioXiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpArOoUetP%2FhQiXEMKtwDU8zTsRRhDHY9tKrUVjvvPU0nHZ2YJyeuh2DbrVZeeFsibk%2B6zEGUXCfNGJqUlINUta%2BWp2riLPwOg67lTS6GRL15KHqTJ1kr4encsA%2BTqN4GfDdCHpdqIMuVYl6%2FAmxx3jXj55UgB6IIjSE3vcPhj2F5d2vRF5Jx9fk44henm5ABhzliUzitKWdXRp7GD1OC5dwdXxk2lJ37FhotfHB07aPqEYnklB84a84HsMu8KTNCbE7skT9R9CaRFat2NNK0NUOS3Eb7%2BmFC5xdp8%2FpZTUxUPImnPb80GC2r37HFV7%2FseKXIbYO4v701%2BAKlPICMCqffncJmVi5GtOQIvQafrbSaQUENyMHDAs2Bi4ojz8zjm%2BV4fCY1Bdg8qV2MJlXsdA6l%2B0Xq8NiiV68w1MUP7GKrqInpeA6aUCc3BmI44pKTIruiG52v3lHxsif%2FvKIbdPkfKN6U5ulaRsjanAJE0zOmuIVb107xBaYqFTh4RdrOSv4uS%2BRYK0cbPHnRRt0zOeWbDw10TQC6E9wRzIpa6VC%2BBfnwigqQjCJ9T5O5775Vh0dS3w6e6bDJ7IQGuT8d8zTIxr0raWAk6%2B%2FilGbYhshlutA0u7At8VrxdrY%2FmDXXMObT2BDQD3YfJ28wvdvgwQY6pgHYAIvKGnx36tZl%2FV56srJRUvAozvY%2F4yx9lL6BXTLOtwzx9OMO%2BKTtFum644WnXDi17Mkyz44XpBUpipxAvnwFDZMYHNi8IQ2%2BEZUlg6%2BbNxENf4SUNzBgIV%2BduwXhkrX7j7nAq0GsXyW62k0LjnRBV6pZLSNAX%2FSjl%2FXrbtDUY3f2dg2oXF6yCtmx1MscTaEB5YOI%2BmwQWES6sUTZqX6oziDwAvkS&X-Amz-Signature=2ccb882a5f12075d92772574112dcdd47c13fd8be9b9b2ee580b0065f6cc2c68&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZ5M2DQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtpOUp%2BuaTqiFNvGnODO9lsbebmRzUWZnjW8Agf1804AiBIrzk9ji%2FgdyeVgKpsBuf0S0MOFIYgmMs18QjpSIioXiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpArOoUetP%2FhQiXEMKtwDU8zTsRRhDHY9tKrUVjvvPU0nHZ2YJyeuh2DbrVZeeFsibk%2B6zEGUXCfNGJqUlINUta%2BWp2riLPwOg67lTS6GRL15KHqTJ1kr4encsA%2BTqN4GfDdCHpdqIMuVYl6%2FAmxx3jXj55UgB6IIjSE3vcPhj2F5d2vRF5Jx9fk44henm5ABhzliUzitKWdXRp7GD1OC5dwdXxk2lJ37FhotfHB07aPqEYnklB84a84HsMu8KTNCbE7skT9R9CaRFat2NNK0NUOS3Eb7%2BmFC5xdp8%2FpZTUxUPImnPb80GC2r37HFV7%2FseKXIbYO4v701%2BAKlPICMCqffncJmVi5GtOQIvQafrbSaQUENyMHDAs2Bi4ojz8zjm%2BV4fCY1Bdg8qV2MJlXsdA6l%2B0Xq8NiiV68w1MUP7GKrqInpeA6aUCc3BmI44pKTIruiG52v3lHxsif%2FvKIbdPkfKN6U5ulaRsjanAJE0zOmuIVb107xBaYqFTh4RdrOSv4uS%2BRYK0cbPHnRRt0zOeWbDw10TQC6E9wRzIpa6VC%2BBfnwigqQjCJ9T5O5775Vh0dS3w6e6bDJ7IQGuT8d8zTIxr0raWAk6%2B%2FilGbYhshlutA0u7At8VrxdrY%2FmDXXMObT2BDQD3YfJ28wvdvgwQY6pgHYAIvKGnx36tZl%2FV56srJRUvAozvY%2F4yx9lL6BXTLOtwzx9OMO%2BKTtFum644WnXDi17Mkyz44XpBUpipxAvnwFDZMYHNi8IQ2%2BEZUlg6%2BbNxENf4SUNzBgIV%2BduwXhkrX7j7nAq0GsXyW62k0LjnRBV6pZLSNAX%2FSjl%2FXrbtDUY3f2dg2oXF6yCtmx1MscTaEB5YOI%2BmwQWES6sUTZqX6oziDwAvkS&X-Amz-Signature=668aa056dbfaa46b83653f4460e1d2728bd3a052580a2634faf6174024dd5985&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZ5M2DQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtpOUp%2BuaTqiFNvGnODO9lsbebmRzUWZnjW8Agf1804AiBIrzk9ji%2FgdyeVgKpsBuf0S0MOFIYgmMs18QjpSIioXiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpArOoUetP%2FhQiXEMKtwDU8zTsRRhDHY9tKrUVjvvPU0nHZ2YJyeuh2DbrVZeeFsibk%2B6zEGUXCfNGJqUlINUta%2BWp2riLPwOg67lTS6GRL15KHqTJ1kr4encsA%2BTqN4GfDdCHpdqIMuVYl6%2FAmxx3jXj55UgB6IIjSE3vcPhj2F5d2vRF5Jx9fk44henm5ABhzliUzitKWdXRp7GD1OC5dwdXxk2lJ37FhotfHB07aPqEYnklB84a84HsMu8KTNCbE7skT9R9CaRFat2NNK0NUOS3Eb7%2BmFC5xdp8%2FpZTUxUPImnPb80GC2r37HFV7%2FseKXIbYO4v701%2BAKlPICMCqffncJmVi5GtOQIvQafrbSaQUENyMHDAs2Bi4ojz8zjm%2BV4fCY1Bdg8qV2MJlXsdA6l%2B0Xq8NiiV68w1MUP7GKrqInpeA6aUCc3BmI44pKTIruiG52v3lHxsif%2FvKIbdPkfKN6U5ulaRsjanAJE0zOmuIVb107xBaYqFTh4RdrOSv4uS%2BRYK0cbPHnRRt0zOeWbDw10TQC6E9wRzIpa6VC%2BBfnwigqQjCJ9T5O5775Vh0dS3w6e6bDJ7IQGuT8d8zTIxr0raWAk6%2B%2FilGbYhshlutA0u7At8VrxdrY%2FmDXXMObT2BDQD3YfJ28wvdvgwQY6pgHYAIvKGnx36tZl%2FV56srJRUvAozvY%2F4yx9lL6BXTLOtwzx9OMO%2BKTtFum644WnXDi17Mkyz44XpBUpipxAvnwFDZMYHNi8IQ2%2BEZUlg6%2BbNxENf4SUNzBgIV%2BduwXhkrX7j7nAq0GsXyW62k0LjnRBV6pZLSNAX%2FSjl%2FXrbtDUY3f2dg2oXF6yCtmx1MscTaEB5YOI%2BmwQWES6sUTZqX6oziDwAvkS&X-Amz-Signature=488a151d3848c60ca11c6be9b52ee8eea6fdc465b93f0c065edb526cc5949182&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZ5M2DQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtpOUp%2BuaTqiFNvGnODO9lsbebmRzUWZnjW8Agf1804AiBIrzk9ji%2FgdyeVgKpsBuf0S0MOFIYgmMs18QjpSIioXiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpArOoUetP%2FhQiXEMKtwDU8zTsRRhDHY9tKrUVjvvPU0nHZ2YJyeuh2DbrVZeeFsibk%2B6zEGUXCfNGJqUlINUta%2BWp2riLPwOg67lTS6GRL15KHqTJ1kr4encsA%2BTqN4GfDdCHpdqIMuVYl6%2FAmxx3jXj55UgB6IIjSE3vcPhj2F5d2vRF5Jx9fk44henm5ABhzliUzitKWdXRp7GD1OC5dwdXxk2lJ37FhotfHB07aPqEYnklB84a84HsMu8KTNCbE7skT9R9CaRFat2NNK0NUOS3Eb7%2BmFC5xdp8%2FpZTUxUPImnPb80GC2r37HFV7%2FseKXIbYO4v701%2BAKlPICMCqffncJmVi5GtOQIvQafrbSaQUENyMHDAs2Bi4ojz8zjm%2BV4fCY1Bdg8qV2MJlXsdA6l%2B0Xq8NiiV68w1MUP7GKrqInpeA6aUCc3BmI44pKTIruiG52v3lHxsif%2FvKIbdPkfKN6U5ulaRsjanAJE0zOmuIVb107xBaYqFTh4RdrOSv4uS%2BRYK0cbPHnRRt0zOeWbDw10TQC6E9wRzIpa6VC%2BBfnwigqQjCJ9T5O5775Vh0dS3w6e6bDJ7IQGuT8d8zTIxr0raWAk6%2B%2FilGbYhshlutA0u7At8VrxdrY%2FmDXXMObT2BDQD3YfJ28wvdvgwQY6pgHYAIvKGnx36tZl%2FV56srJRUvAozvY%2F4yx9lL6BXTLOtwzx9OMO%2BKTtFum644WnXDi17Mkyz44XpBUpipxAvnwFDZMYHNi8IQ2%2BEZUlg6%2BbNxENf4SUNzBgIV%2BduwXhkrX7j7nAq0GsXyW62k0LjnRBV6pZLSNAX%2FSjl%2FXrbtDUY3f2dg2oXF6yCtmx1MscTaEB5YOI%2BmwQWES6sUTZqX6oziDwAvkS&X-Amz-Signature=d08bafc0f08a1332897b2d19e989523f069d9f5bd66f15fa78a4ce46239c29a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZ5M2DQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtpOUp%2BuaTqiFNvGnODO9lsbebmRzUWZnjW8Agf1804AiBIrzk9ji%2FgdyeVgKpsBuf0S0MOFIYgmMs18QjpSIioXiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpArOoUetP%2FhQiXEMKtwDU8zTsRRhDHY9tKrUVjvvPU0nHZ2YJyeuh2DbrVZeeFsibk%2B6zEGUXCfNGJqUlINUta%2BWp2riLPwOg67lTS6GRL15KHqTJ1kr4encsA%2BTqN4GfDdCHpdqIMuVYl6%2FAmxx3jXj55UgB6IIjSE3vcPhj2F5d2vRF5Jx9fk44henm5ABhzliUzitKWdXRp7GD1OC5dwdXxk2lJ37FhotfHB07aPqEYnklB84a84HsMu8KTNCbE7skT9R9CaRFat2NNK0NUOS3Eb7%2BmFC5xdp8%2FpZTUxUPImnPb80GC2r37HFV7%2FseKXIbYO4v701%2BAKlPICMCqffncJmVi5GtOQIvQafrbSaQUENyMHDAs2Bi4ojz8zjm%2BV4fCY1Bdg8qV2MJlXsdA6l%2B0Xq8NiiV68w1MUP7GKrqInpeA6aUCc3BmI44pKTIruiG52v3lHxsif%2FvKIbdPkfKN6U5ulaRsjanAJE0zOmuIVb107xBaYqFTh4RdrOSv4uS%2BRYK0cbPHnRRt0zOeWbDw10TQC6E9wRzIpa6VC%2BBfnwigqQjCJ9T5O5775Vh0dS3w6e6bDJ7IQGuT8d8zTIxr0raWAk6%2B%2FilGbYhshlutA0u7At8VrxdrY%2FmDXXMObT2BDQD3YfJ28wvdvgwQY6pgHYAIvKGnx36tZl%2FV56srJRUvAozvY%2F4yx9lL6BXTLOtwzx9OMO%2BKTtFum644WnXDi17Mkyz44XpBUpipxAvnwFDZMYHNi8IQ2%2BEZUlg6%2BbNxENf4SUNzBgIV%2BduwXhkrX7j7nAq0GsXyW62k0LjnRBV6pZLSNAX%2FSjl%2FXrbtDUY3f2dg2oXF6yCtmx1MscTaEB5YOI%2BmwQWES6sUTZqX6oziDwAvkS&X-Amz-Signature=480a6fbac1767e7d50caf62c8e3c4560e5de087dee0d336cbaddbf3e7828f5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMZ5M2DQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtpOUp%2BuaTqiFNvGnODO9lsbebmRzUWZnjW8Agf1804AiBIrzk9ji%2FgdyeVgKpsBuf0S0MOFIYgmMs18QjpSIioXiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpArOoUetP%2FhQiXEMKtwDU8zTsRRhDHY9tKrUVjvvPU0nHZ2YJyeuh2DbrVZeeFsibk%2B6zEGUXCfNGJqUlINUta%2BWp2riLPwOg67lTS6GRL15KHqTJ1kr4encsA%2BTqN4GfDdCHpdqIMuVYl6%2FAmxx3jXj55UgB6IIjSE3vcPhj2F5d2vRF5Jx9fk44henm5ABhzliUzitKWdXRp7GD1OC5dwdXxk2lJ37FhotfHB07aPqEYnklB84a84HsMu8KTNCbE7skT9R9CaRFat2NNK0NUOS3Eb7%2BmFC5xdp8%2FpZTUxUPImnPb80GC2r37HFV7%2FseKXIbYO4v701%2BAKlPICMCqffncJmVi5GtOQIvQafrbSaQUENyMHDAs2Bi4ojz8zjm%2BV4fCY1Bdg8qV2MJlXsdA6l%2B0Xq8NiiV68w1MUP7GKrqInpeA6aUCc3BmI44pKTIruiG52v3lHxsif%2FvKIbdPkfKN6U5ulaRsjanAJE0zOmuIVb107xBaYqFTh4RdrOSv4uS%2BRYK0cbPHnRRt0zOeWbDw10TQC6E9wRzIpa6VC%2BBfnwigqQjCJ9T5O5775Vh0dS3w6e6bDJ7IQGuT8d8zTIxr0raWAk6%2B%2FilGbYhshlutA0u7At8VrxdrY%2FmDXXMObT2BDQD3YfJ28wvdvgwQY6pgHYAIvKGnx36tZl%2FV56srJRUvAozvY%2F4yx9lL6BXTLOtwzx9OMO%2BKTtFum644WnXDi17Mkyz44XpBUpipxAvnwFDZMYHNi8IQ2%2BEZUlg6%2BbNxENf4SUNzBgIV%2BduwXhkrX7j7nAq0GsXyW62k0LjnRBV6pZLSNAX%2FSjl%2FXrbtDUY3f2dg2oXF6yCtmx1MscTaEB5YOI%2BmwQWES6sUTZqX6oziDwAvkS&X-Amz-Signature=43973c2b0994ebe8d5d5681f9301460b704ac941b1738678deba8a439393a8d4&X-Amz-SignedHeaders=host&x-id=GetObject)
