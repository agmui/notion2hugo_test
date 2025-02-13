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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTYJGWB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2BC0uBQ4DCtSlSOoBHK93QB%2FdBket4QJxoRdICL3wOgIhALDsElb8ClKu1b%2FOvIAavUBdenaVFNBo7RuBfqjhgsJsKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAhWFWhI4ZPlqHVZAq3AO8AlzC16%2FkItwWsELYTBr0Zh8pK31Ukfj6J91D%2FazqmU0tvBRX72fXY%2Fsii7Etil8uzZLpOnuUEFx8BM2ffMARBum4%2F%2FAxxfAJ2IE%2B%2BeNbw0ZUNPkCvzEKmO0WHSPxj3Aj3xcF%2Fu%2FDF9OH%2FI78DdxjmFhvlkutZiMcMffXthy%2B9N1e%2F5Fq1qo3C0oaDGOeOSKDy5tbnm1tm7e4p%2BO7cH%2FJzKPm4lzkQ%2BFWlb88SYwvrFTqa34Xr%2BX66igqVu2br%2F7jDBW5ZjgQVvs4vOipkbKwJjeYLuOfMqfbMewYx2hBglNLEuy09%2FpqrCdsnOBl8nrdO5JXV%2FCKWC70fSz8oOm5enMZ4R0fOEAAoH4Z%2BQzFTS7wfGPRqRzuNpq3UE2zSH1btj2%2FfKJ1i%2BzFYt10J0mqKNGkMqWdvydIW0ArNSjoZS1Rnm07TnxolosSjbmZ2TH1wWRWMuaYrRnkbl0lUeYkRLxVtcEZCSrRQQ07WLSclNFXRWck0LC6xl7j0kxytdrMUNjIxYvi2UtIXGuHfLNveLDi2rg0YOVl7DJGh8AJVLsAfqkur%2BrCbeepbrw1h6NSQElKhrSR%2FMLwCLIATAVrP60%2BJ75UqeDU%2Bm2J5Sg3W8LlHGZzSJWBz%2FZ%2BNDDVmLW9BjqkASbVVqzTD1QPbKT8g2Q%2Ffl%2BGxyslZyCb4xs%2BSjP54nN95gxKcJ0Cds4oe%2B8RhvtN9JJu91DuaAGb7%2FJSfCbY%2B2%2FHs%2FWXetsy6LafRrmgJ34Tk50hM%2B6vc1kA%2FGsnZ7XJgNBBTpaizQoGHUSMw%2BE6V0H%2FarUr1eHjamNGvgSjaB5Q3dBYv9SpEhlcpxsVNtxl9M4cfEeY5W%2BB6k4s3HlWmRvfvhoQ&X-Amz-Signature=2e10564b76a7199d624a9b8a35cb4534e2bc251ac0976f26045f5b4f256d3524&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTYJGWB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2BC0uBQ4DCtSlSOoBHK93QB%2FdBket4QJxoRdICL3wOgIhALDsElb8ClKu1b%2FOvIAavUBdenaVFNBo7RuBfqjhgsJsKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAhWFWhI4ZPlqHVZAq3AO8AlzC16%2FkItwWsELYTBr0Zh8pK31Ukfj6J91D%2FazqmU0tvBRX72fXY%2Fsii7Etil8uzZLpOnuUEFx8BM2ffMARBum4%2F%2FAxxfAJ2IE%2B%2BeNbw0ZUNPkCvzEKmO0WHSPxj3Aj3xcF%2Fu%2FDF9OH%2FI78DdxjmFhvlkutZiMcMffXthy%2B9N1e%2F5Fq1qo3C0oaDGOeOSKDy5tbnm1tm7e4p%2BO7cH%2FJzKPm4lzkQ%2BFWlb88SYwvrFTqa34Xr%2BX66igqVu2br%2F7jDBW5ZjgQVvs4vOipkbKwJjeYLuOfMqfbMewYx2hBglNLEuy09%2FpqrCdsnOBl8nrdO5JXV%2FCKWC70fSz8oOm5enMZ4R0fOEAAoH4Z%2BQzFTS7wfGPRqRzuNpq3UE2zSH1btj2%2FfKJ1i%2BzFYt10J0mqKNGkMqWdvydIW0ArNSjoZS1Rnm07TnxolosSjbmZ2TH1wWRWMuaYrRnkbl0lUeYkRLxVtcEZCSrRQQ07WLSclNFXRWck0LC6xl7j0kxytdrMUNjIxYvi2UtIXGuHfLNveLDi2rg0YOVl7DJGh8AJVLsAfqkur%2BrCbeepbrw1h6NSQElKhrSR%2FMLwCLIATAVrP60%2BJ75UqeDU%2Bm2J5Sg3W8LlHGZzSJWBz%2FZ%2BNDDVmLW9BjqkASbVVqzTD1QPbKT8g2Q%2Ffl%2BGxyslZyCb4xs%2BSjP54nN95gxKcJ0Cds4oe%2B8RhvtN9JJu91DuaAGb7%2FJSfCbY%2B2%2FHs%2FWXetsy6LafRrmgJ34Tk50hM%2B6vc1kA%2FGsnZ7XJgNBBTpaizQoGHUSMw%2BE6V0H%2FarUr1eHjamNGvgSjaB5Q3dBYv9SpEhlcpxsVNtxl9M4cfEeY5W%2BB6k4s3HlWmRvfvhoQ&X-Amz-Signature=d523b7e08cb083b67ab595c932a6b4938280b28d4817ba40b59e60376bed362a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTYJGWB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2BC0uBQ4DCtSlSOoBHK93QB%2FdBket4QJxoRdICL3wOgIhALDsElb8ClKu1b%2FOvIAavUBdenaVFNBo7RuBfqjhgsJsKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAhWFWhI4ZPlqHVZAq3AO8AlzC16%2FkItwWsELYTBr0Zh8pK31Ukfj6J91D%2FazqmU0tvBRX72fXY%2Fsii7Etil8uzZLpOnuUEFx8BM2ffMARBum4%2F%2FAxxfAJ2IE%2B%2BeNbw0ZUNPkCvzEKmO0WHSPxj3Aj3xcF%2Fu%2FDF9OH%2FI78DdxjmFhvlkutZiMcMffXthy%2B9N1e%2F5Fq1qo3C0oaDGOeOSKDy5tbnm1tm7e4p%2BO7cH%2FJzKPm4lzkQ%2BFWlb88SYwvrFTqa34Xr%2BX66igqVu2br%2F7jDBW5ZjgQVvs4vOipkbKwJjeYLuOfMqfbMewYx2hBglNLEuy09%2FpqrCdsnOBl8nrdO5JXV%2FCKWC70fSz8oOm5enMZ4R0fOEAAoH4Z%2BQzFTS7wfGPRqRzuNpq3UE2zSH1btj2%2FfKJ1i%2BzFYt10J0mqKNGkMqWdvydIW0ArNSjoZS1Rnm07TnxolosSjbmZ2TH1wWRWMuaYrRnkbl0lUeYkRLxVtcEZCSrRQQ07WLSclNFXRWck0LC6xl7j0kxytdrMUNjIxYvi2UtIXGuHfLNveLDi2rg0YOVl7DJGh8AJVLsAfqkur%2BrCbeepbrw1h6NSQElKhrSR%2FMLwCLIATAVrP60%2BJ75UqeDU%2Bm2J5Sg3W8LlHGZzSJWBz%2FZ%2BNDDVmLW9BjqkASbVVqzTD1QPbKT8g2Q%2Ffl%2BGxyslZyCb4xs%2BSjP54nN95gxKcJ0Cds4oe%2B8RhvtN9JJu91DuaAGb7%2FJSfCbY%2B2%2FHs%2FWXetsy6LafRrmgJ34Tk50hM%2B6vc1kA%2FGsnZ7XJgNBBTpaizQoGHUSMw%2BE6V0H%2FarUr1eHjamNGvgSjaB5Q3dBYv9SpEhlcpxsVNtxl9M4cfEeY5W%2BB6k4s3HlWmRvfvhoQ&X-Amz-Signature=09bb3ec363006d22c87324a48a3e1f130bd30dccf9b8a6a389824c036e730f73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTYJGWB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2BC0uBQ4DCtSlSOoBHK93QB%2FdBket4QJxoRdICL3wOgIhALDsElb8ClKu1b%2FOvIAavUBdenaVFNBo7RuBfqjhgsJsKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAhWFWhI4ZPlqHVZAq3AO8AlzC16%2FkItwWsELYTBr0Zh8pK31Ukfj6J91D%2FazqmU0tvBRX72fXY%2Fsii7Etil8uzZLpOnuUEFx8BM2ffMARBum4%2F%2FAxxfAJ2IE%2B%2BeNbw0ZUNPkCvzEKmO0WHSPxj3Aj3xcF%2Fu%2FDF9OH%2FI78DdxjmFhvlkutZiMcMffXthy%2B9N1e%2F5Fq1qo3C0oaDGOeOSKDy5tbnm1tm7e4p%2BO7cH%2FJzKPm4lzkQ%2BFWlb88SYwvrFTqa34Xr%2BX66igqVu2br%2F7jDBW5ZjgQVvs4vOipkbKwJjeYLuOfMqfbMewYx2hBglNLEuy09%2FpqrCdsnOBl8nrdO5JXV%2FCKWC70fSz8oOm5enMZ4R0fOEAAoH4Z%2BQzFTS7wfGPRqRzuNpq3UE2zSH1btj2%2FfKJ1i%2BzFYt10J0mqKNGkMqWdvydIW0ArNSjoZS1Rnm07TnxolosSjbmZ2TH1wWRWMuaYrRnkbl0lUeYkRLxVtcEZCSrRQQ07WLSclNFXRWck0LC6xl7j0kxytdrMUNjIxYvi2UtIXGuHfLNveLDi2rg0YOVl7DJGh8AJVLsAfqkur%2BrCbeepbrw1h6NSQElKhrSR%2FMLwCLIATAVrP60%2BJ75UqeDU%2Bm2J5Sg3W8LlHGZzSJWBz%2FZ%2BNDDVmLW9BjqkASbVVqzTD1QPbKT8g2Q%2Ffl%2BGxyslZyCb4xs%2BSjP54nN95gxKcJ0Cds4oe%2B8RhvtN9JJu91DuaAGb7%2FJSfCbY%2B2%2FHs%2FWXetsy6LafRrmgJ34Tk50hM%2B6vc1kA%2FGsnZ7XJgNBBTpaizQoGHUSMw%2BE6V0H%2FarUr1eHjamNGvgSjaB5Q3dBYv9SpEhlcpxsVNtxl9M4cfEeY5W%2BB6k4s3HlWmRvfvhoQ&X-Amz-Signature=b643960b2d18f515396828519ec7f76ddee0d70964962a0f6013bcd95afc4bec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTYJGWB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2BC0uBQ4DCtSlSOoBHK93QB%2FdBket4QJxoRdICL3wOgIhALDsElb8ClKu1b%2FOvIAavUBdenaVFNBo7RuBfqjhgsJsKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAhWFWhI4ZPlqHVZAq3AO8AlzC16%2FkItwWsELYTBr0Zh8pK31Ukfj6J91D%2FazqmU0tvBRX72fXY%2Fsii7Etil8uzZLpOnuUEFx8BM2ffMARBum4%2F%2FAxxfAJ2IE%2B%2BeNbw0ZUNPkCvzEKmO0WHSPxj3Aj3xcF%2Fu%2FDF9OH%2FI78DdxjmFhvlkutZiMcMffXthy%2B9N1e%2F5Fq1qo3C0oaDGOeOSKDy5tbnm1tm7e4p%2BO7cH%2FJzKPm4lzkQ%2BFWlb88SYwvrFTqa34Xr%2BX66igqVu2br%2F7jDBW5ZjgQVvs4vOipkbKwJjeYLuOfMqfbMewYx2hBglNLEuy09%2FpqrCdsnOBl8nrdO5JXV%2FCKWC70fSz8oOm5enMZ4R0fOEAAoH4Z%2BQzFTS7wfGPRqRzuNpq3UE2zSH1btj2%2FfKJ1i%2BzFYt10J0mqKNGkMqWdvydIW0ArNSjoZS1Rnm07TnxolosSjbmZ2TH1wWRWMuaYrRnkbl0lUeYkRLxVtcEZCSrRQQ07WLSclNFXRWck0LC6xl7j0kxytdrMUNjIxYvi2UtIXGuHfLNveLDi2rg0YOVl7DJGh8AJVLsAfqkur%2BrCbeepbrw1h6NSQElKhrSR%2FMLwCLIATAVrP60%2BJ75UqeDU%2Bm2J5Sg3W8LlHGZzSJWBz%2FZ%2BNDDVmLW9BjqkASbVVqzTD1QPbKT8g2Q%2Ffl%2BGxyslZyCb4xs%2BSjP54nN95gxKcJ0Cds4oe%2B8RhvtN9JJu91DuaAGb7%2FJSfCbY%2B2%2FHs%2FWXetsy6LafRrmgJ34Tk50hM%2B6vc1kA%2FGsnZ7XJgNBBTpaizQoGHUSMw%2BE6V0H%2FarUr1eHjamNGvgSjaB5Q3dBYv9SpEhlcpxsVNtxl9M4cfEeY5W%2BB6k4s3HlWmRvfvhoQ&X-Amz-Signature=3bbabb29480e00d322e0c1a85e8e50e1312daf3991150f60eceed08b9652a8a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTYJGWB%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs%2BC0uBQ4DCtSlSOoBHK93QB%2FdBket4QJxoRdICL3wOgIhALDsElb8ClKu1b%2FOvIAavUBdenaVFNBo7RuBfqjhgsJsKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAhWFWhI4ZPlqHVZAq3AO8AlzC16%2FkItwWsELYTBr0Zh8pK31Ukfj6J91D%2FazqmU0tvBRX72fXY%2Fsii7Etil8uzZLpOnuUEFx8BM2ffMARBum4%2F%2FAxxfAJ2IE%2B%2BeNbw0ZUNPkCvzEKmO0WHSPxj3Aj3xcF%2Fu%2FDF9OH%2FI78DdxjmFhvlkutZiMcMffXthy%2B9N1e%2F5Fq1qo3C0oaDGOeOSKDy5tbnm1tm7e4p%2BO7cH%2FJzKPm4lzkQ%2BFWlb88SYwvrFTqa34Xr%2BX66igqVu2br%2F7jDBW5ZjgQVvs4vOipkbKwJjeYLuOfMqfbMewYx2hBglNLEuy09%2FpqrCdsnOBl8nrdO5JXV%2FCKWC70fSz8oOm5enMZ4R0fOEAAoH4Z%2BQzFTS7wfGPRqRzuNpq3UE2zSH1btj2%2FfKJ1i%2BzFYt10J0mqKNGkMqWdvydIW0ArNSjoZS1Rnm07TnxolosSjbmZ2TH1wWRWMuaYrRnkbl0lUeYkRLxVtcEZCSrRQQ07WLSclNFXRWck0LC6xl7j0kxytdrMUNjIxYvi2UtIXGuHfLNveLDi2rg0YOVl7DJGh8AJVLsAfqkur%2BrCbeepbrw1h6NSQElKhrSR%2FMLwCLIATAVrP60%2BJ75UqeDU%2Bm2J5Sg3W8LlHGZzSJWBz%2FZ%2BNDDVmLW9BjqkASbVVqzTD1QPbKT8g2Q%2Ffl%2BGxyslZyCb4xs%2BSjP54nN95gxKcJ0Cds4oe%2B8RhvtN9JJu91DuaAGb7%2FJSfCbY%2B2%2FHs%2FWXetsy6LafRrmgJ34Tk50hM%2B6vc1kA%2FGsnZ7XJgNBBTpaizQoGHUSMw%2BE6V0H%2FarUr1eHjamNGvgSjaB5Q3dBYv9SpEhlcpxsVNtxl9M4cfEeY5W%2BB6k4s3HlWmRvfvhoQ&X-Amz-Signature=a22d5679018152cc82c96a8355179deb4ae90ce4dfabc21101d3f7afc4c72c8c&X-Amz-SignedHeaders=host&x-id=GetObject)
