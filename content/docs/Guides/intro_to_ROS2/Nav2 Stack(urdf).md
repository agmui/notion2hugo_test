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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXPUDWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJM%2FLrQl1%2FC%2FMwFSIyoHjlA1SQUXIvpy2BLbh4t%2FPo3AiAEyrgsJcSrL%2F11mZcJ%2Fq5uVmBO4bd%2Bqca4uBom7OAwvyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPMdePMs8xoZzhpzKKtwD%2FBKCCXlBP6hG8YofAeorPUJGQT8%2BZqj%2FHJ4HDLaiAVkHNUzdOqlb4VbCRc7mzG8aVafo5WkgPo3Bj2UKvXmnsJ%2FiigeDCHYBWd03%2BbmMw1aE4s8VohyjEZYYr2nBX3K4Cpu10S%2F51%2FRi4Z0TQfvlT8XwxBumC6nwB50a7pa3TPczM77DvoWFr5tJXH79DSAFlTUBQw7ehZE9Z%2FU0SOjhBvOiANsleRLLNe2D7K%2FRDo2L5qMhO6ZaF3MvK72u5V1y4rytoYQi8GqHWk6hvDe9IL4MDq%2F6nM94UTxwx5Ait9doC%2B%2Bma2bbJPiciobTTcUOAVzDZTMkwgTaEJ1iHBW4ffYsQSsiGlkfOXMFM4kr0hRcCXHDh5bp0EOQzXlnz87uNBvZVwfD%2B7tcQ%2F53RG2gTp6V3k56spX5Sd1bDg8iOvOFaquvQcrYQheQg89nQc5ZcwyEInG4cipq0d2G7lxMAddBTn6A8NfepMrbTm1JMvUCDgaYNZHl6h8bYYj2zii%2BgmqmcQaFchMhvAqXEG%2B79Gtg%2B52%2BLI81GaxQkG9CRHLM8FsX7vHFXjYsjdKucRdfoWGMLfXYvWF%2BDuok%2BPYDQR%2FlJEHPTzV8aRchFBGlzvYZo8YKiUmx%2B8dcK0Yw5ZmdvgY6pgGoFm9EjX4sLDlrYob85KsL3y3xPUK7T2LcXCaPuhmeLvbGwH8aksKiM%2F%2FJtzCfAvbUXaLAEqwQPPkeOou1C0qopqpJc%2Flmbgvd4q%2FPrD8lWh9IoASkd5Em6Aao47k%2BrK%2FDMOucm4kDuz9w%2F7hwC4e4dgqhcSDvYlCuHbW8FRdUnja47ReShQb01P7BSEok95L%2F2mrts%2FvwzCrOTISur9jH7TMOWgsP&X-Amz-Signature=7f30b5e2ea4e0e4ec1d0dd3c880c1aa060bfd3422efaa6f3d0c65182f868b0e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXPUDWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJM%2FLrQl1%2FC%2FMwFSIyoHjlA1SQUXIvpy2BLbh4t%2FPo3AiAEyrgsJcSrL%2F11mZcJ%2Fq5uVmBO4bd%2Bqca4uBom7OAwvyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPMdePMs8xoZzhpzKKtwD%2FBKCCXlBP6hG8YofAeorPUJGQT8%2BZqj%2FHJ4HDLaiAVkHNUzdOqlb4VbCRc7mzG8aVafo5WkgPo3Bj2UKvXmnsJ%2FiigeDCHYBWd03%2BbmMw1aE4s8VohyjEZYYr2nBX3K4Cpu10S%2F51%2FRi4Z0TQfvlT8XwxBumC6nwB50a7pa3TPczM77DvoWFr5tJXH79DSAFlTUBQw7ehZE9Z%2FU0SOjhBvOiANsleRLLNe2D7K%2FRDo2L5qMhO6ZaF3MvK72u5V1y4rytoYQi8GqHWk6hvDe9IL4MDq%2F6nM94UTxwx5Ait9doC%2B%2Bma2bbJPiciobTTcUOAVzDZTMkwgTaEJ1iHBW4ffYsQSsiGlkfOXMFM4kr0hRcCXHDh5bp0EOQzXlnz87uNBvZVwfD%2B7tcQ%2F53RG2gTp6V3k56spX5Sd1bDg8iOvOFaquvQcrYQheQg89nQc5ZcwyEInG4cipq0d2G7lxMAddBTn6A8NfepMrbTm1JMvUCDgaYNZHl6h8bYYj2zii%2BgmqmcQaFchMhvAqXEG%2B79Gtg%2B52%2BLI81GaxQkG9CRHLM8FsX7vHFXjYsjdKucRdfoWGMLfXYvWF%2BDuok%2BPYDQR%2FlJEHPTzV8aRchFBGlzvYZo8YKiUmx%2B8dcK0Yw5ZmdvgY6pgGoFm9EjX4sLDlrYob85KsL3y3xPUK7T2LcXCaPuhmeLvbGwH8aksKiM%2F%2FJtzCfAvbUXaLAEqwQPPkeOou1C0qopqpJc%2Flmbgvd4q%2FPrD8lWh9IoASkd5Em6Aao47k%2BrK%2FDMOucm4kDuz9w%2F7hwC4e4dgqhcSDvYlCuHbW8FRdUnja47ReShQb01P7BSEok95L%2F2mrts%2FvwzCrOTISur9jH7TMOWgsP&X-Amz-Signature=461118f6f8c92050af32b0f52f84ab9000ed683b2113d17758cba658c9ce6adc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXPUDWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJM%2FLrQl1%2FC%2FMwFSIyoHjlA1SQUXIvpy2BLbh4t%2FPo3AiAEyrgsJcSrL%2F11mZcJ%2Fq5uVmBO4bd%2Bqca4uBom7OAwvyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPMdePMs8xoZzhpzKKtwD%2FBKCCXlBP6hG8YofAeorPUJGQT8%2BZqj%2FHJ4HDLaiAVkHNUzdOqlb4VbCRc7mzG8aVafo5WkgPo3Bj2UKvXmnsJ%2FiigeDCHYBWd03%2BbmMw1aE4s8VohyjEZYYr2nBX3K4Cpu10S%2F51%2FRi4Z0TQfvlT8XwxBumC6nwB50a7pa3TPczM77DvoWFr5tJXH79DSAFlTUBQw7ehZE9Z%2FU0SOjhBvOiANsleRLLNe2D7K%2FRDo2L5qMhO6ZaF3MvK72u5V1y4rytoYQi8GqHWk6hvDe9IL4MDq%2F6nM94UTxwx5Ait9doC%2B%2Bma2bbJPiciobTTcUOAVzDZTMkwgTaEJ1iHBW4ffYsQSsiGlkfOXMFM4kr0hRcCXHDh5bp0EOQzXlnz87uNBvZVwfD%2B7tcQ%2F53RG2gTp6V3k56spX5Sd1bDg8iOvOFaquvQcrYQheQg89nQc5ZcwyEInG4cipq0d2G7lxMAddBTn6A8NfepMrbTm1JMvUCDgaYNZHl6h8bYYj2zii%2BgmqmcQaFchMhvAqXEG%2B79Gtg%2B52%2BLI81GaxQkG9CRHLM8FsX7vHFXjYsjdKucRdfoWGMLfXYvWF%2BDuok%2BPYDQR%2FlJEHPTzV8aRchFBGlzvYZo8YKiUmx%2B8dcK0Yw5ZmdvgY6pgGoFm9EjX4sLDlrYob85KsL3y3xPUK7T2LcXCaPuhmeLvbGwH8aksKiM%2F%2FJtzCfAvbUXaLAEqwQPPkeOou1C0qopqpJc%2Flmbgvd4q%2FPrD8lWh9IoASkd5Em6Aao47k%2BrK%2FDMOucm4kDuz9w%2F7hwC4e4dgqhcSDvYlCuHbW8FRdUnja47ReShQb01P7BSEok95L%2F2mrts%2FvwzCrOTISur9jH7TMOWgsP&X-Amz-Signature=2ed717217b8beaf0bb5f3a79b5293e4a94fea1c2f17861585f89c87c310b9654&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXPUDWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJM%2FLrQl1%2FC%2FMwFSIyoHjlA1SQUXIvpy2BLbh4t%2FPo3AiAEyrgsJcSrL%2F11mZcJ%2Fq5uVmBO4bd%2Bqca4uBom7OAwvyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPMdePMs8xoZzhpzKKtwD%2FBKCCXlBP6hG8YofAeorPUJGQT8%2BZqj%2FHJ4HDLaiAVkHNUzdOqlb4VbCRc7mzG8aVafo5WkgPo3Bj2UKvXmnsJ%2FiigeDCHYBWd03%2BbmMw1aE4s8VohyjEZYYr2nBX3K4Cpu10S%2F51%2FRi4Z0TQfvlT8XwxBumC6nwB50a7pa3TPczM77DvoWFr5tJXH79DSAFlTUBQw7ehZE9Z%2FU0SOjhBvOiANsleRLLNe2D7K%2FRDo2L5qMhO6ZaF3MvK72u5V1y4rytoYQi8GqHWk6hvDe9IL4MDq%2F6nM94UTxwx5Ait9doC%2B%2Bma2bbJPiciobTTcUOAVzDZTMkwgTaEJ1iHBW4ffYsQSsiGlkfOXMFM4kr0hRcCXHDh5bp0EOQzXlnz87uNBvZVwfD%2B7tcQ%2F53RG2gTp6V3k56spX5Sd1bDg8iOvOFaquvQcrYQheQg89nQc5ZcwyEInG4cipq0d2G7lxMAddBTn6A8NfepMrbTm1JMvUCDgaYNZHl6h8bYYj2zii%2BgmqmcQaFchMhvAqXEG%2B79Gtg%2B52%2BLI81GaxQkG9CRHLM8FsX7vHFXjYsjdKucRdfoWGMLfXYvWF%2BDuok%2BPYDQR%2FlJEHPTzV8aRchFBGlzvYZo8YKiUmx%2B8dcK0Yw5ZmdvgY6pgGoFm9EjX4sLDlrYob85KsL3y3xPUK7T2LcXCaPuhmeLvbGwH8aksKiM%2F%2FJtzCfAvbUXaLAEqwQPPkeOou1C0qopqpJc%2Flmbgvd4q%2FPrD8lWh9IoASkd5Em6Aao47k%2BrK%2FDMOucm4kDuz9w%2F7hwC4e4dgqhcSDvYlCuHbW8FRdUnja47ReShQb01P7BSEok95L%2F2mrts%2FvwzCrOTISur9jH7TMOWgsP&X-Amz-Signature=dbfe31a25f917c761bc728e194d7f0122ccfb3d44ac2bc23f5cbb80958d27ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXPUDWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJM%2FLrQl1%2FC%2FMwFSIyoHjlA1SQUXIvpy2BLbh4t%2FPo3AiAEyrgsJcSrL%2F11mZcJ%2Fq5uVmBO4bd%2Bqca4uBom7OAwvyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPMdePMs8xoZzhpzKKtwD%2FBKCCXlBP6hG8YofAeorPUJGQT8%2BZqj%2FHJ4HDLaiAVkHNUzdOqlb4VbCRc7mzG8aVafo5WkgPo3Bj2UKvXmnsJ%2FiigeDCHYBWd03%2BbmMw1aE4s8VohyjEZYYr2nBX3K4Cpu10S%2F51%2FRi4Z0TQfvlT8XwxBumC6nwB50a7pa3TPczM77DvoWFr5tJXH79DSAFlTUBQw7ehZE9Z%2FU0SOjhBvOiANsleRLLNe2D7K%2FRDo2L5qMhO6ZaF3MvK72u5V1y4rytoYQi8GqHWk6hvDe9IL4MDq%2F6nM94UTxwx5Ait9doC%2B%2Bma2bbJPiciobTTcUOAVzDZTMkwgTaEJ1iHBW4ffYsQSsiGlkfOXMFM4kr0hRcCXHDh5bp0EOQzXlnz87uNBvZVwfD%2B7tcQ%2F53RG2gTp6V3k56spX5Sd1bDg8iOvOFaquvQcrYQheQg89nQc5ZcwyEInG4cipq0d2G7lxMAddBTn6A8NfepMrbTm1JMvUCDgaYNZHl6h8bYYj2zii%2BgmqmcQaFchMhvAqXEG%2B79Gtg%2B52%2BLI81GaxQkG9CRHLM8FsX7vHFXjYsjdKucRdfoWGMLfXYvWF%2BDuok%2BPYDQR%2FlJEHPTzV8aRchFBGlzvYZo8YKiUmx%2B8dcK0Yw5ZmdvgY6pgGoFm9EjX4sLDlrYob85KsL3y3xPUK7T2LcXCaPuhmeLvbGwH8aksKiM%2F%2FJtzCfAvbUXaLAEqwQPPkeOou1C0qopqpJc%2Flmbgvd4q%2FPrD8lWh9IoASkd5Em6Aao47k%2BrK%2FDMOucm4kDuz9w%2F7hwC4e4dgqhcSDvYlCuHbW8FRdUnja47ReShQb01P7BSEok95L%2F2mrts%2FvwzCrOTISur9jH7TMOWgsP&X-Amz-Signature=cb1fc484409b18923768289e6dcf8abc31bf70dbd305732c54bdc945ebdaba37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SXPUDWG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJM%2FLrQl1%2FC%2FMwFSIyoHjlA1SQUXIvpy2BLbh4t%2FPo3AiAEyrgsJcSrL%2F11mZcJ%2Fq5uVmBO4bd%2Bqca4uBom7OAwvyqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPMdePMs8xoZzhpzKKtwD%2FBKCCXlBP6hG8YofAeorPUJGQT8%2BZqj%2FHJ4HDLaiAVkHNUzdOqlb4VbCRc7mzG8aVafo5WkgPo3Bj2UKvXmnsJ%2FiigeDCHYBWd03%2BbmMw1aE4s8VohyjEZYYr2nBX3K4Cpu10S%2F51%2FRi4Z0TQfvlT8XwxBumC6nwB50a7pa3TPczM77DvoWFr5tJXH79DSAFlTUBQw7ehZE9Z%2FU0SOjhBvOiANsleRLLNe2D7K%2FRDo2L5qMhO6ZaF3MvK72u5V1y4rytoYQi8GqHWk6hvDe9IL4MDq%2F6nM94UTxwx5Ait9doC%2B%2Bma2bbJPiciobTTcUOAVzDZTMkwgTaEJ1iHBW4ffYsQSsiGlkfOXMFM4kr0hRcCXHDh5bp0EOQzXlnz87uNBvZVwfD%2B7tcQ%2F53RG2gTp6V3k56spX5Sd1bDg8iOvOFaquvQcrYQheQg89nQc5ZcwyEInG4cipq0d2G7lxMAddBTn6A8NfepMrbTm1JMvUCDgaYNZHl6h8bYYj2zii%2BgmqmcQaFchMhvAqXEG%2B79Gtg%2B52%2BLI81GaxQkG9CRHLM8FsX7vHFXjYsjdKucRdfoWGMLfXYvWF%2BDuok%2BPYDQR%2FlJEHPTzV8aRchFBGlzvYZo8YKiUmx%2B8dcK0Yw5ZmdvgY6pgGoFm9EjX4sLDlrYob85KsL3y3xPUK7T2LcXCaPuhmeLvbGwH8aksKiM%2F%2FJtzCfAvbUXaLAEqwQPPkeOou1C0qopqpJc%2Flmbgvd4q%2FPrD8lWh9IoASkd5Em6Aao47k%2BrK%2FDMOucm4kDuz9w%2F7hwC4e4dgqhcSDvYlCuHbW8FRdUnja47ReShQb01P7BSEok95L%2F2mrts%2FvwzCrOTISur9jH7TMOWgsP&X-Amz-Signature=765ab4b14ff81bafb1c226bc2bb41f4e3d8e7add9b7282c24680f10297bc9aad&X-Amz-SignedHeaders=host&x-id=GetObject)
