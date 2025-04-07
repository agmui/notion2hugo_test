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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CSYTQO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAyQ8%2F7NanE9jUg6zmsRrCIelzryHs%2BJn1YpKoi6tptAiBhNibrJtloqS%2FHb2%2FCfLI%2BrbEaNiCXWB4d3XvsB9gLZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM0GiAJfWs0ODtbziDKtwDWGI3uannEIgI514wpCp8Q2oVT7UObFzjDd2v57oTwh9y7CSjwfhOVFdlKcEtxaTh7fvVl1lrKqGCtTONgpHWDSiy1ZRO4HaHCM%2FcuWsmEvOxmOYoU3%2BAWwAmce5OL64ODrImcE30pfVuynymuJpf4xaVFWOznCraX%2BAoDGFevuxvMMW2JfA8OkwdxIOA3NQyykSxBaQp8rWSDfkX65R%2F3tu3I86MyksxzaPwvWDZalUMm2IX9wts0ejsSGtyuuCoziISiRQKeQPFjgUGtPnmvyXdXGrwt7yuFeWoN3MpHQszHxllAcWAoJly5KPTDQFyEBya%2BGECi4%2BuIv8dml5kk6SBE0%2FMzzUyq3T9fdt%2Fsjh4iCAF71H0uGcG0KJTc8AelwQYoAUUECjXLEWfNy8pPg90XxytxKMSausUQCHPyrD%2FjL9agQq1PPQoBgUzgaF5gMUJP5yBPcHL6pjvZSo4dNaTfI8GeM%2BNC%2F3Qe02MRX6JTXh7nXp1DGGE8D6e9NsoM0KeU59zhV3ajp4%2Beer5NbYzsTl7KNozX%2BMST8k%2BbXsVE0O2pyKFsXj6lDuUmxF83oWqTOZTcJ4Nx5P0eoWPoUTpgaHBUF80rmTqxeky4U8Noqh8IT5TzshzZ6EwurXMvwY6pgFcraOeLm5D%2Fo52Yu%2BimWaZXQf%2BN2Iv%2BMsNoQexMbcZXnEcAeHVxl6sKFDEn2a39J%2FarVWIvgIaG88GnQ2WyUz230%2FrVrvjpXEz%2FlfdWJHJm%2F3P5IvOsLEsx3KDCtB0bJAiXVQ%2F%2Fafg6VfU88zZLLt9aITpEV7iyIHAbkf9ROC6a3gNxHvkrMz2xTi3Fof9%2BFes4am%2BDEyZK%2B0hhzG68ULFFuggWyNm&X-Amz-Signature=889f4cca400252d84e1b176a77baa954f45cc772faf4c09b7ae7d3bd8f290fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CSYTQO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAyQ8%2F7NanE9jUg6zmsRrCIelzryHs%2BJn1YpKoi6tptAiBhNibrJtloqS%2FHb2%2FCfLI%2BrbEaNiCXWB4d3XvsB9gLZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM0GiAJfWs0ODtbziDKtwDWGI3uannEIgI514wpCp8Q2oVT7UObFzjDd2v57oTwh9y7CSjwfhOVFdlKcEtxaTh7fvVl1lrKqGCtTONgpHWDSiy1ZRO4HaHCM%2FcuWsmEvOxmOYoU3%2BAWwAmce5OL64ODrImcE30pfVuynymuJpf4xaVFWOznCraX%2BAoDGFevuxvMMW2JfA8OkwdxIOA3NQyykSxBaQp8rWSDfkX65R%2F3tu3I86MyksxzaPwvWDZalUMm2IX9wts0ejsSGtyuuCoziISiRQKeQPFjgUGtPnmvyXdXGrwt7yuFeWoN3MpHQszHxllAcWAoJly5KPTDQFyEBya%2BGECi4%2BuIv8dml5kk6SBE0%2FMzzUyq3T9fdt%2Fsjh4iCAF71H0uGcG0KJTc8AelwQYoAUUECjXLEWfNy8pPg90XxytxKMSausUQCHPyrD%2FjL9agQq1PPQoBgUzgaF5gMUJP5yBPcHL6pjvZSo4dNaTfI8GeM%2BNC%2F3Qe02MRX6JTXh7nXp1DGGE8D6e9NsoM0KeU59zhV3ajp4%2Beer5NbYzsTl7KNozX%2BMST8k%2BbXsVE0O2pyKFsXj6lDuUmxF83oWqTOZTcJ4Nx5P0eoWPoUTpgaHBUF80rmTqxeky4U8Noqh8IT5TzshzZ6EwurXMvwY6pgFcraOeLm5D%2Fo52Yu%2BimWaZXQf%2BN2Iv%2BMsNoQexMbcZXnEcAeHVxl6sKFDEn2a39J%2FarVWIvgIaG88GnQ2WyUz230%2FrVrvjpXEz%2FlfdWJHJm%2F3P5IvOsLEsx3KDCtB0bJAiXVQ%2F%2Fafg6VfU88zZLLt9aITpEV7iyIHAbkf9ROC6a3gNxHvkrMz2xTi3Fof9%2BFes4am%2BDEyZK%2B0hhzG68ULFFuggWyNm&X-Amz-Signature=3b5e191c2a06f346cc0d9a4c0aaaf479adbc7af0ba55a6057473fd2c40b8d58d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CSYTQO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAyQ8%2F7NanE9jUg6zmsRrCIelzryHs%2BJn1YpKoi6tptAiBhNibrJtloqS%2FHb2%2FCfLI%2BrbEaNiCXWB4d3XvsB9gLZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM0GiAJfWs0ODtbziDKtwDWGI3uannEIgI514wpCp8Q2oVT7UObFzjDd2v57oTwh9y7CSjwfhOVFdlKcEtxaTh7fvVl1lrKqGCtTONgpHWDSiy1ZRO4HaHCM%2FcuWsmEvOxmOYoU3%2BAWwAmce5OL64ODrImcE30pfVuynymuJpf4xaVFWOznCraX%2BAoDGFevuxvMMW2JfA8OkwdxIOA3NQyykSxBaQp8rWSDfkX65R%2F3tu3I86MyksxzaPwvWDZalUMm2IX9wts0ejsSGtyuuCoziISiRQKeQPFjgUGtPnmvyXdXGrwt7yuFeWoN3MpHQszHxllAcWAoJly5KPTDQFyEBya%2BGECi4%2BuIv8dml5kk6SBE0%2FMzzUyq3T9fdt%2Fsjh4iCAF71H0uGcG0KJTc8AelwQYoAUUECjXLEWfNy8pPg90XxytxKMSausUQCHPyrD%2FjL9agQq1PPQoBgUzgaF5gMUJP5yBPcHL6pjvZSo4dNaTfI8GeM%2BNC%2F3Qe02MRX6JTXh7nXp1DGGE8D6e9NsoM0KeU59zhV3ajp4%2Beer5NbYzsTl7KNozX%2BMST8k%2BbXsVE0O2pyKFsXj6lDuUmxF83oWqTOZTcJ4Nx5P0eoWPoUTpgaHBUF80rmTqxeky4U8Noqh8IT5TzshzZ6EwurXMvwY6pgFcraOeLm5D%2Fo52Yu%2BimWaZXQf%2BN2Iv%2BMsNoQexMbcZXnEcAeHVxl6sKFDEn2a39J%2FarVWIvgIaG88GnQ2WyUz230%2FrVrvjpXEz%2FlfdWJHJm%2F3P5IvOsLEsx3KDCtB0bJAiXVQ%2F%2Fafg6VfU88zZLLt9aITpEV7iyIHAbkf9ROC6a3gNxHvkrMz2xTi3Fof9%2BFes4am%2BDEyZK%2B0hhzG68ULFFuggWyNm&X-Amz-Signature=fa5ef26d50268a33f3b2e8385a9c5f86bfc2ab81a0dc20daa84625952109828b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CSYTQO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAyQ8%2F7NanE9jUg6zmsRrCIelzryHs%2BJn1YpKoi6tptAiBhNibrJtloqS%2FHb2%2FCfLI%2BrbEaNiCXWB4d3XvsB9gLZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM0GiAJfWs0ODtbziDKtwDWGI3uannEIgI514wpCp8Q2oVT7UObFzjDd2v57oTwh9y7CSjwfhOVFdlKcEtxaTh7fvVl1lrKqGCtTONgpHWDSiy1ZRO4HaHCM%2FcuWsmEvOxmOYoU3%2BAWwAmce5OL64ODrImcE30pfVuynymuJpf4xaVFWOznCraX%2BAoDGFevuxvMMW2JfA8OkwdxIOA3NQyykSxBaQp8rWSDfkX65R%2F3tu3I86MyksxzaPwvWDZalUMm2IX9wts0ejsSGtyuuCoziISiRQKeQPFjgUGtPnmvyXdXGrwt7yuFeWoN3MpHQszHxllAcWAoJly5KPTDQFyEBya%2BGECi4%2BuIv8dml5kk6SBE0%2FMzzUyq3T9fdt%2Fsjh4iCAF71H0uGcG0KJTc8AelwQYoAUUECjXLEWfNy8pPg90XxytxKMSausUQCHPyrD%2FjL9agQq1PPQoBgUzgaF5gMUJP5yBPcHL6pjvZSo4dNaTfI8GeM%2BNC%2F3Qe02MRX6JTXh7nXp1DGGE8D6e9NsoM0KeU59zhV3ajp4%2Beer5NbYzsTl7KNozX%2BMST8k%2BbXsVE0O2pyKFsXj6lDuUmxF83oWqTOZTcJ4Nx5P0eoWPoUTpgaHBUF80rmTqxeky4U8Noqh8IT5TzshzZ6EwurXMvwY6pgFcraOeLm5D%2Fo52Yu%2BimWaZXQf%2BN2Iv%2BMsNoQexMbcZXnEcAeHVxl6sKFDEn2a39J%2FarVWIvgIaG88GnQ2WyUz230%2FrVrvjpXEz%2FlfdWJHJm%2F3P5IvOsLEsx3KDCtB0bJAiXVQ%2F%2Fafg6VfU88zZLLt9aITpEV7iyIHAbkf9ROC6a3gNxHvkrMz2xTi3Fof9%2BFes4am%2BDEyZK%2B0hhzG68ULFFuggWyNm&X-Amz-Signature=f3d1d3696b80b4dca7e3528fe33e5b245ce73f918a94167196f1a06b48d799f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CSYTQO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAyQ8%2F7NanE9jUg6zmsRrCIelzryHs%2BJn1YpKoi6tptAiBhNibrJtloqS%2FHb2%2FCfLI%2BrbEaNiCXWB4d3XvsB9gLZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM0GiAJfWs0ODtbziDKtwDWGI3uannEIgI514wpCp8Q2oVT7UObFzjDd2v57oTwh9y7CSjwfhOVFdlKcEtxaTh7fvVl1lrKqGCtTONgpHWDSiy1ZRO4HaHCM%2FcuWsmEvOxmOYoU3%2BAWwAmce5OL64ODrImcE30pfVuynymuJpf4xaVFWOznCraX%2BAoDGFevuxvMMW2JfA8OkwdxIOA3NQyykSxBaQp8rWSDfkX65R%2F3tu3I86MyksxzaPwvWDZalUMm2IX9wts0ejsSGtyuuCoziISiRQKeQPFjgUGtPnmvyXdXGrwt7yuFeWoN3MpHQszHxllAcWAoJly5KPTDQFyEBya%2BGECi4%2BuIv8dml5kk6SBE0%2FMzzUyq3T9fdt%2Fsjh4iCAF71H0uGcG0KJTc8AelwQYoAUUECjXLEWfNy8pPg90XxytxKMSausUQCHPyrD%2FjL9agQq1PPQoBgUzgaF5gMUJP5yBPcHL6pjvZSo4dNaTfI8GeM%2BNC%2F3Qe02MRX6JTXh7nXp1DGGE8D6e9NsoM0KeU59zhV3ajp4%2Beer5NbYzsTl7KNozX%2BMST8k%2BbXsVE0O2pyKFsXj6lDuUmxF83oWqTOZTcJ4Nx5P0eoWPoUTpgaHBUF80rmTqxeky4U8Noqh8IT5TzshzZ6EwurXMvwY6pgFcraOeLm5D%2Fo52Yu%2BimWaZXQf%2BN2Iv%2BMsNoQexMbcZXnEcAeHVxl6sKFDEn2a39J%2FarVWIvgIaG88GnQ2WyUz230%2FrVrvjpXEz%2FlfdWJHJm%2F3P5IvOsLEsx3KDCtB0bJAiXVQ%2F%2Fafg6VfU88zZLLt9aITpEV7iyIHAbkf9ROC6a3gNxHvkrMz2xTi3Fof9%2BFes4am%2BDEyZK%2B0hhzG68ULFFuggWyNm&X-Amz-Signature=b1a7fc9d6a89977b40b4017fec8107d43bda1bfa77747b048c46c68530bc8991&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6CSYTQO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAyQ8%2F7NanE9jUg6zmsRrCIelzryHs%2BJn1YpKoi6tptAiBhNibrJtloqS%2FHb2%2FCfLI%2BrbEaNiCXWB4d3XvsB9gLZyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM0GiAJfWs0ODtbziDKtwDWGI3uannEIgI514wpCp8Q2oVT7UObFzjDd2v57oTwh9y7CSjwfhOVFdlKcEtxaTh7fvVl1lrKqGCtTONgpHWDSiy1ZRO4HaHCM%2FcuWsmEvOxmOYoU3%2BAWwAmce5OL64ODrImcE30pfVuynymuJpf4xaVFWOznCraX%2BAoDGFevuxvMMW2JfA8OkwdxIOA3NQyykSxBaQp8rWSDfkX65R%2F3tu3I86MyksxzaPwvWDZalUMm2IX9wts0ejsSGtyuuCoziISiRQKeQPFjgUGtPnmvyXdXGrwt7yuFeWoN3MpHQszHxllAcWAoJly5KPTDQFyEBya%2BGECi4%2BuIv8dml5kk6SBE0%2FMzzUyq3T9fdt%2Fsjh4iCAF71H0uGcG0KJTc8AelwQYoAUUECjXLEWfNy8pPg90XxytxKMSausUQCHPyrD%2FjL9agQq1PPQoBgUzgaF5gMUJP5yBPcHL6pjvZSo4dNaTfI8GeM%2BNC%2F3Qe02MRX6JTXh7nXp1DGGE8D6e9NsoM0KeU59zhV3ajp4%2Beer5NbYzsTl7KNozX%2BMST8k%2BbXsVE0O2pyKFsXj6lDuUmxF83oWqTOZTcJ4Nx5P0eoWPoUTpgaHBUF80rmTqxeky4U8Noqh8IT5TzshzZ6EwurXMvwY6pgFcraOeLm5D%2Fo52Yu%2BimWaZXQf%2BN2Iv%2BMsNoQexMbcZXnEcAeHVxl6sKFDEn2a39J%2FarVWIvgIaG88GnQ2WyUz230%2FrVrvjpXEz%2FlfdWJHJm%2F3P5IvOsLEsx3KDCtB0bJAiXVQ%2F%2Fafg6VfU88zZLLt9aITpEV7iyIHAbkf9ROC6a3gNxHvkrMz2xTi3Fof9%2BFes4am%2BDEyZK%2B0hhzG68ULFFuggWyNm&X-Amz-Signature=0d397b57e19dfe8bbcd424f7cc33f81a617f42076df480089ebe381bb0ee188d&X-Amz-SignedHeaders=host&x-id=GetObject)
