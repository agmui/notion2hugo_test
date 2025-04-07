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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNE63PE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnbaFmj2cBXP3nB%2FLq8FPnd4vK4F1kGoeq4iDMeDHaCAiA6a9YzI1VfLnTqg92WqB3GYjP2gHuXkEcGx9BwXqSLHCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzyJQT3rGvs7tfNhRKtwD9TXgfiDVjNjRTh6USsIlQ4XDhWp6HaLr5WNhEL%2ByXJ91R%2F%2Bdltw9l3IVbyekjdgh4ezpc38spXQvMgAOvXcfbLsF2RCunyQrTfJFy14i16%2BcBzBfYIzHJ%2F4aKKISqVqF8ttc%2FaoscaT%2FilxDsvrOBMnKAISxkNu9I61Ope8qYM%2Bf4kqr5cqBzQ7ZuIeVuyEcaOLLVCBErB0s4CrUbQ5wm82LuPNpiiA2Q2P17myuoxFp68DfqDclUByT39JuaWlbKEaqmelh39o%2Br%2F6wALH4TkIwmDiGm2gR3T8RMef8Xb3fk6KAiKGcWh%2FdCHAx89%2FnMKKht44j0srbNgAPwQCJ0PPLSZ8g6t4azUpEtLl2dmyBJCMBWdy5CcZpCAnfNbh023SrnVZsnsp9ll3Kaj4HkfFyX3DAKvBhiLaq7NqzORlDtmFMAWknPtfKAeFi%2Bj1ZL6HmRHGxjW%2FUp9UeuzI%2BAlixcSylNaM35RsV2QIeQuEDgqGcOYUg3A0MQ5%2FaNzm4G9dXP6buJDTwLyR28xSFimL0fKjNet3HV1bsVMlCYyGWVp9wx0yQ7%2BAtncPhoL9wE00837o4yyrqYXVYyGlcsmETqkktWcAUFFBINsFc7QVOEIeHZG9plXPcSDgw2aPQvwY6pgEiND4SuiAnPDesuGrxwUNMuQhf%2Fwg2Sbx3ufr0hzpCCjKdQlSFhAaaAEkH4QNBhiuR4JG9GlebfY1NPRWer0Kbquxhgr4GSz3AwdR6a4ikhgpeRFtjU9vwnVLKabCHClObkL4Yb3GAKS3V7fGZPt%2FrYjLfQQabMU9tJLhwjkEz1A4HUe688mAIbiK8kCyaaFOtrdDes8H%2ByiRUcQuTY60KwFoGpKkh&X-Amz-Signature=fc3bd9f6b2d09469a340c2ed8aa0a39b51576134b54c3c370b3c6d0111affb89&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNE63PE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnbaFmj2cBXP3nB%2FLq8FPnd4vK4F1kGoeq4iDMeDHaCAiA6a9YzI1VfLnTqg92WqB3GYjP2gHuXkEcGx9BwXqSLHCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzyJQT3rGvs7tfNhRKtwD9TXgfiDVjNjRTh6USsIlQ4XDhWp6HaLr5WNhEL%2ByXJ91R%2F%2Bdltw9l3IVbyekjdgh4ezpc38spXQvMgAOvXcfbLsF2RCunyQrTfJFy14i16%2BcBzBfYIzHJ%2F4aKKISqVqF8ttc%2FaoscaT%2FilxDsvrOBMnKAISxkNu9I61Ope8qYM%2Bf4kqr5cqBzQ7ZuIeVuyEcaOLLVCBErB0s4CrUbQ5wm82LuPNpiiA2Q2P17myuoxFp68DfqDclUByT39JuaWlbKEaqmelh39o%2Br%2F6wALH4TkIwmDiGm2gR3T8RMef8Xb3fk6KAiKGcWh%2FdCHAx89%2FnMKKht44j0srbNgAPwQCJ0PPLSZ8g6t4azUpEtLl2dmyBJCMBWdy5CcZpCAnfNbh023SrnVZsnsp9ll3Kaj4HkfFyX3DAKvBhiLaq7NqzORlDtmFMAWknPtfKAeFi%2Bj1ZL6HmRHGxjW%2FUp9UeuzI%2BAlixcSylNaM35RsV2QIeQuEDgqGcOYUg3A0MQ5%2FaNzm4G9dXP6buJDTwLyR28xSFimL0fKjNet3HV1bsVMlCYyGWVp9wx0yQ7%2BAtncPhoL9wE00837o4yyrqYXVYyGlcsmETqkktWcAUFFBINsFc7QVOEIeHZG9plXPcSDgw2aPQvwY6pgEiND4SuiAnPDesuGrxwUNMuQhf%2Fwg2Sbx3ufr0hzpCCjKdQlSFhAaaAEkH4QNBhiuR4JG9GlebfY1NPRWer0Kbquxhgr4GSz3AwdR6a4ikhgpeRFtjU9vwnVLKabCHClObkL4Yb3GAKS3V7fGZPt%2FrYjLfQQabMU9tJLhwjkEz1A4HUe688mAIbiK8kCyaaFOtrdDes8H%2ByiRUcQuTY60KwFoGpKkh&X-Amz-Signature=b4b1711fc49d5917921330611b61efcbe589cc0edec63bbd8781cc153b1c58cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNE63PE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnbaFmj2cBXP3nB%2FLq8FPnd4vK4F1kGoeq4iDMeDHaCAiA6a9YzI1VfLnTqg92WqB3GYjP2gHuXkEcGx9BwXqSLHCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzyJQT3rGvs7tfNhRKtwD9TXgfiDVjNjRTh6USsIlQ4XDhWp6HaLr5WNhEL%2ByXJ91R%2F%2Bdltw9l3IVbyekjdgh4ezpc38spXQvMgAOvXcfbLsF2RCunyQrTfJFy14i16%2BcBzBfYIzHJ%2F4aKKISqVqF8ttc%2FaoscaT%2FilxDsvrOBMnKAISxkNu9I61Ope8qYM%2Bf4kqr5cqBzQ7ZuIeVuyEcaOLLVCBErB0s4CrUbQ5wm82LuPNpiiA2Q2P17myuoxFp68DfqDclUByT39JuaWlbKEaqmelh39o%2Br%2F6wALH4TkIwmDiGm2gR3T8RMef8Xb3fk6KAiKGcWh%2FdCHAx89%2FnMKKht44j0srbNgAPwQCJ0PPLSZ8g6t4azUpEtLl2dmyBJCMBWdy5CcZpCAnfNbh023SrnVZsnsp9ll3Kaj4HkfFyX3DAKvBhiLaq7NqzORlDtmFMAWknPtfKAeFi%2Bj1ZL6HmRHGxjW%2FUp9UeuzI%2BAlixcSylNaM35RsV2QIeQuEDgqGcOYUg3A0MQ5%2FaNzm4G9dXP6buJDTwLyR28xSFimL0fKjNet3HV1bsVMlCYyGWVp9wx0yQ7%2BAtncPhoL9wE00837o4yyrqYXVYyGlcsmETqkktWcAUFFBINsFc7QVOEIeHZG9plXPcSDgw2aPQvwY6pgEiND4SuiAnPDesuGrxwUNMuQhf%2Fwg2Sbx3ufr0hzpCCjKdQlSFhAaaAEkH4QNBhiuR4JG9GlebfY1NPRWer0Kbquxhgr4GSz3AwdR6a4ikhgpeRFtjU9vwnVLKabCHClObkL4Yb3GAKS3V7fGZPt%2FrYjLfQQabMU9tJLhwjkEz1A4HUe688mAIbiK8kCyaaFOtrdDes8H%2ByiRUcQuTY60KwFoGpKkh&X-Amz-Signature=b6d05d248f300958d605a679110e0032f68e94c139a419cafa5b386fc6c21937&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNE63PE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnbaFmj2cBXP3nB%2FLq8FPnd4vK4F1kGoeq4iDMeDHaCAiA6a9YzI1VfLnTqg92WqB3GYjP2gHuXkEcGx9BwXqSLHCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzyJQT3rGvs7tfNhRKtwD9TXgfiDVjNjRTh6USsIlQ4XDhWp6HaLr5WNhEL%2ByXJ91R%2F%2Bdltw9l3IVbyekjdgh4ezpc38spXQvMgAOvXcfbLsF2RCunyQrTfJFy14i16%2BcBzBfYIzHJ%2F4aKKISqVqF8ttc%2FaoscaT%2FilxDsvrOBMnKAISxkNu9I61Ope8qYM%2Bf4kqr5cqBzQ7ZuIeVuyEcaOLLVCBErB0s4CrUbQ5wm82LuPNpiiA2Q2P17myuoxFp68DfqDclUByT39JuaWlbKEaqmelh39o%2Br%2F6wALH4TkIwmDiGm2gR3T8RMef8Xb3fk6KAiKGcWh%2FdCHAx89%2FnMKKht44j0srbNgAPwQCJ0PPLSZ8g6t4azUpEtLl2dmyBJCMBWdy5CcZpCAnfNbh023SrnVZsnsp9ll3Kaj4HkfFyX3DAKvBhiLaq7NqzORlDtmFMAWknPtfKAeFi%2Bj1ZL6HmRHGxjW%2FUp9UeuzI%2BAlixcSylNaM35RsV2QIeQuEDgqGcOYUg3A0MQ5%2FaNzm4G9dXP6buJDTwLyR28xSFimL0fKjNet3HV1bsVMlCYyGWVp9wx0yQ7%2BAtncPhoL9wE00837o4yyrqYXVYyGlcsmETqkktWcAUFFBINsFc7QVOEIeHZG9plXPcSDgw2aPQvwY6pgEiND4SuiAnPDesuGrxwUNMuQhf%2Fwg2Sbx3ufr0hzpCCjKdQlSFhAaaAEkH4QNBhiuR4JG9GlebfY1NPRWer0Kbquxhgr4GSz3AwdR6a4ikhgpeRFtjU9vwnVLKabCHClObkL4Yb3GAKS3V7fGZPt%2FrYjLfQQabMU9tJLhwjkEz1A4HUe688mAIbiK8kCyaaFOtrdDes8H%2ByiRUcQuTY60KwFoGpKkh&X-Amz-Signature=b5993b9cdea9e62a1c6db32a7ff966bfaa06827661008c69528228082e1d5086&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNE63PE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnbaFmj2cBXP3nB%2FLq8FPnd4vK4F1kGoeq4iDMeDHaCAiA6a9YzI1VfLnTqg92WqB3GYjP2gHuXkEcGx9BwXqSLHCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzyJQT3rGvs7tfNhRKtwD9TXgfiDVjNjRTh6USsIlQ4XDhWp6HaLr5WNhEL%2ByXJ91R%2F%2Bdltw9l3IVbyekjdgh4ezpc38spXQvMgAOvXcfbLsF2RCunyQrTfJFy14i16%2BcBzBfYIzHJ%2F4aKKISqVqF8ttc%2FaoscaT%2FilxDsvrOBMnKAISxkNu9I61Ope8qYM%2Bf4kqr5cqBzQ7ZuIeVuyEcaOLLVCBErB0s4CrUbQ5wm82LuPNpiiA2Q2P17myuoxFp68DfqDclUByT39JuaWlbKEaqmelh39o%2Br%2F6wALH4TkIwmDiGm2gR3T8RMef8Xb3fk6KAiKGcWh%2FdCHAx89%2FnMKKht44j0srbNgAPwQCJ0PPLSZ8g6t4azUpEtLl2dmyBJCMBWdy5CcZpCAnfNbh023SrnVZsnsp9ll3Kaj4HkfFyX3DAKvBhiLaq7NqzORlDtmFMAWknPtfKAeFi%2Bj1ZL6HmRHGxjW%2FUp9UeuzI%2BAlixcSylNaM35RsV2QIeQuEDgqGcOYUg3A0MQ5%2FaNzm4G9dXP6buJDTwLyR28xSFimL0fKjNet3HV1bsVMlCYyGWVp9wx0yQ7%2BAtncPhoL9wE00837o4yyrqYXVYyGlcsmETqkktWcAUFFBINsFc7QVOEIeHZG9plXPcSDgw2aPQvwY6pgEiND4SuiAnPDesuGrxwUNMuQhf%2Fwg2Sbx3ufr0hzpCCjKdQlSFhAaaAEkH4QNBhiuR4JG9GlebfY1NPRWer0Kbquxhgr4GSz3AwdR6a4ikhgpeRFtjU9vwnVLKabCHClObkL4Yb3GAKS3V7fGZPt%2FrYjLfQQabMU9tJLhwjkEz1A4HUe688mAIbiK8kCyaaFOtrdDes8H%2ByiRUcQuTY60KwFoGpKkh&X-Amz-Signature=7229580c6af4657aba4e41267a304ebc8ec659bf23c75f12a96162a814de2310&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XNE63PE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnbaFmj2cBXP3nB%2FLq8FPnd4vK4F1kGoeq4iDMeDHaCAiA6a9YzI1VfLnTqg92WqB3GYjP2gHuXkEcGx9BwXqSLHCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMzyJQT3rGvs7tfNhRKtwD9TXgfiDVjNjRTh6USsIlQ4XDhWp6HaLr5WNhEL%2ByXJ91R%2F%2Bdltw9l3IVbyekjdgh4ezpc38spXQvMgAOvXcfbLsF2RCunyQrTfJFy14i16%2BcBzBfYIzHJ%2F4aKKISqVqF8ttc%2FaoscaT%2FilxDsvrOBMnKAISxkNu9I61Ope8qYM%2Bf4kqr5cqBzQ7ZuIeVuyEcaOLLVCBErB0s4CrUbQ5wm82LuPNpiiA2Q2P17myuoxFp68DfqDclUByT39JuaWlbKEaqmelh39o%2Br%2F6wALH4TkIwmDiGm2gR3T8RMef8Xb3fk6KAiKGcWh%2FdCHAx89%2FnMKKht44j0srbNgAPwQCJ0PPLSZ8g6t4azUpEtLl2dmyBJCMBWdy5CcZpCAnfNbh023SrnVZsnsp9ll3Kaj4HkfFyX3DAKvBhiLaq7NqzORlDtmFMAWknPtfKAeFi%2Bj1ZL6HmRHGxjW%2FUp9UeuzI%2BAlixcSylNaM35RsV2QIeQuEDgqGcOYUg3A0MQ5%2FaNzm4G9dXP6buJDTwLyR28xSFimL0fKjNet3HV1bsVMlCYyGWVp9wx0yQ7%2BAtncPhoL9wE00837o4yyrqYXVYyGlcsmETqkktWcAUFFBINsFc7QVOEIeHZG9plXPcSDgw2aPQvwY6pgEiND4SuiAnPDesuGrxwUNMuQhf%2Fwg2Sbx3ufr0hzpCCjKdQlSFhAaaAEkH4QNBhiuR4JG9GlebfY1NPRWer0Kbquxhgr4GSz3AwdR6a4ikhgpeRFtjU9vwnVLKabCHClObkL4Yb3GAKS3V7fGZPt%2FrYjLfQQabMU9tJLhwjkEz1A4HUe688mAIbiK8kCyaaFOtrdDes8H%2ByiRUcQuTY60KwFoGpKkh&X-Amz-Signature=c7d562652a7dedeb106834993350c63a62458a1908169eb9aec75791db64d238&X-Amz-SignedHeaders=host&x-id=GetObject)
