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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIE5B7UP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRm43UnyILL7gs5lRMJbCtm8UomJTiz9oySTFs5EwObAiAQ2gur8%2F%2B53EQolQlr%2FhzK55bqGDc25lrIQmCMYjo2Iyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM84lq7Exe6rPoOQjYKtwDZIT0rvpZKcWbnMrIh0rF2uGT8WGu8aKEFefhon%2BmqYritVKkJf8qzfdBQ7ThML6QFiNnVQ14wlJv0BhKdMzyn00%2FDGmrpokee2q5jDZ9lGZ2ZOnlOXVAJEftQi6UEmFxnC%2FIc%2BHdb0GDwZf3SGkD2NwlTGztLUkrNd5khY30EKlSH7LAubtK%2F%2BJbqrRZ0ETfze%2F4oaXY905cwcSp4MDT5giwUyNkyPU4nGud7CaeOE0ZJrR2QYIGfTU6cZP%2F7zs3G4OyYtkDSbdSbYpnnlUa1SvHJhI4NUPfbZgIDXRDMvGQD2Nvgr1j41GQAewBCh7ktZO5Bip4wURhDEDJPmLRYHvaKbGB1DEVKVBOibb8lFlSuTmBldvS6XnLbzAdoMB%2Bu9Bs3fDAFPXmRiAkIdW2mjF1RhE7FqLuAC%2FNo8CN%2B8Fg3Zurkm7n%2FYglY3fK4boGBj4cpVaAU%2BT0AFqDnkQIsQ%2FIV2O7km2Y85XygXyctjSSjLlOxtAPo6OV%2BUPRrPSZ2YMULk2w355%2FTDi%2FNPD5ApH9fCaqnYvRAGQEE%2FoStAMKSpMOACC9e4WZAYGet7FGaqipMeAvTOQ817pV%2BBxIDRTGg7sJbhsbWk33KZ2zsrgpTAqZ56YNKZ5jc1Ew34DIvwY6pgGnidDTH3QylNemLMRN%2FfCjNJcV87R%2BFsAOrVKdbE28v2dL2LCSpF1eH%2FLXB6H0MWTY3BSjsFMC%2FeKc0NvTSa%2FGOK%2FECKPJGB0eb4sIM5EMLU0U0Z7vVRfs5sxIVzv4JNQRn2xbRe7bCNqVPYio1nRP%2FF5aGoVmFBCFWcKKPEI09WcPuXBq%2FCjRcEtlw%2FKfwqqQgRMxCQZUg1N1IkDfosS%2FSYqO14dG&X-Amz-Signature=17c066cff8e4f28672a76f18ea46d422af58c25cd4c7848a537dc8a450707d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIE5B7UP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRm43UnyILL7gs5lRMJbCtm8UomJTiz9oySTFs5EwObAiAQ2gur8%2F%2B53EQolQlr%2FhzK55bqGDc25lrIQmCMYjo2Iyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM84lq7Exe6rPoOQjYKtwDZIT0rvpZKcWbnMrIh0rF2uGT8WGu8aKEFefhon%2BmqYritVKkJf8qzfdBQ7ThML6QFiNnVQ14wlJv0BhKdMzyn00%2FDGmrpokee2q5jDZ9lGZ2ZOnlOXVAJEftQi6UEmFxnC%2FIc%2BHdb0GDwZf3SGkD2NwlTGztLUkrNd5khY30EKlSH7LAubtK%2F%2BJbqrRZ0ETfze%2F4oaXY905cwcSp4MDT5giwUyNkyPU4nGud7CaeOE0ZJrR2QYIGfTU6cZP%2F7zs3G4OyYtkDSbdSbYpnnlUa1SvHJhI4NUPfbZgIDXRDMvGQD2Nvgr1j41GQAewBCh7ktZO5Bip4wURhDEDJPmLRYHvaKbGB1DEVKVBOibb8lFlSuTmBldvS6XnLbzAdoMB%2Bu9Bs3fDAFPXmRiAkIdW2mjF1RhE7FqLuAC%2FNo8CN%2B8Fg3Zurkm7n%2FYglY3fK4boGBj4cpVaAU%2BT0AFqDnkQIsQ%2FIV2O7km2Y85XygXyctjSSjLlOxtAPo6OV%2BUPRrPSZ2YMULk2w355%2FTDi%2FNPD5ApH9fCaqnYvRAGQEE%2FoStAMKSpMOACC9e4WZAYGet7FGaqipMeAvTOQ817pV%2BBxIDRTGg7sJbhsbWk33KZ2zsrgpTAqZ56YNKZ5jc1Ew34DIvwY6pgGnidDTH3QylNemLMRN%2FfCjNJcV87R%2BFsAOrVKdbE28v2dL2LCSpF1eH%2FLXB6H0MWTY3BSjsFMC%2FeKc0NvTSa%2FGOK%2FECKPJGB0eb4sIM5EMLU0U0Z7vVRfs5sxIVzv4JNQRn2xbRe7bCNqVPYio1nRP%2FF5aGoVmFBCFWcKKPEI09WcPuXBq%2FCjRcEtlw%2FKfwqqQgRMxCQZUg1N1IkDfosS%2FSYqO14dG&X-Amz-Signature=471075970b6126500c9e86047ffad233c90d21389326e5fdae4b7ee36f6e1dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIE5B7UP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRm43UnyILL7gs5lRMJbCtm8UomJTiz9oySTFs5EwObAiAQ2gur8%2F%2B53EQolQlr%2FhzK55bqGDc25lrIQmCMYjo2Iyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM84lq7Exe6rPoOQjYKtwDZIT0rvpZKcWbnMrIh0rF2uGT8WGu8aKEFefhon%2BmqYritVKkJf8qzfdBQ7ThML6QFiNnVQ14wlJv0BhKdMzyn00%2FDGmrpokee2q5jDZ9lGZ2ZOnlOXVAJEftQi6UEmFxnC%2FIc%2BHdb0GDwZf3SGkD2NwlTGztLUkrNd5khY30EKlSH7LAubtK%2F%2BJbqrRZ0ETfze%2F4oaXY905cwcSp4MDT5giwUyNkyPU4nGud7CaeOE0ZJrR2QYIGfTU6cZP%2F7zs3G4OyYtkDSbdSbYpnnlUa1SvHJhI4NUPfbZgIDXRDMvGQD2Nvgr1j41GQAewBCh7ktZO5Bip4wURhDEDJPmLRYHvaKbGB1DEVKVBOibb8lFlSuTmBldvS6XnLbzAdoMB%2Bu9Bs3fDAFPXmRiAkIdW2mjF1RhE7FqLuAC%2FNo8CN%2B8Fg3Zurkm7n%2FYglY3fK4boGBj4cpVaAU%2BT0AFqDnkQIsQ%2FIV2O7km2Y85XygXyctjSSjLlOxtAPo6OV%2BUPRrPSZ2YMULk2w355%2FTDi%2FNPD5ApH9fCaqnYvRAGQEE%2FoStAMKSpMOACC9e4WZAYGet7FGaqipMeAvTOQ817pV%2BBxIDRTGg7sJbhsbWk33KZ2zsrgpTAqZ56YNKZ5jc1Ew34DIvwY6pgGnidDTH3QylNemLMRN%2FfCjNJcV87R%2BFsAOrVKdbE28v2dL2LCSpF1eH%2FLXB6H0MWTY3BSjsFMC%2FeKc0NvTSa%2FGOK%2FECKPJGB0eb4sIM5EMLU0U0Z7vVRfs5sxIVzv4JNQRn2xbRe7bCNqVPYio1nRP%2FF5aGoVmFBCFWcKKPEI09WcPuXBq%2FCjRcEtlw%2FKfwqqQgRMxCQZUg1N1IkDfosS%2FSYqO14dG&X-Amz-Signature=df7c5bda5172aa2876f43fa14f94db84aee518aaaf13ea5d24cfc69f711f7e80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIE5B7UP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRm43UnyILL7gs5lRMJbCtm8UomJTiz9oySTFs5EwObAiAQ2gur8%2F%2B53EQolQlr%2FhzK55bqGDc25lrIQmCMYjo2Iyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM84lq7Exe6rPoOQjYKtwDZIT0rvpZKcWbnMrIh0rF2uGT8WGu8aKEFefhon%2BmqYritVKkJf8qzfdBQ7ThML6QFiNnVQ14wlJv0BhKdMzyn00%2FDGmrpokee2q5jDZ9lGZ2ZOnlOXVAJEftQi6UEmFxnC%2FIc%2BHdb0GDwZf3SGkD2NwlTGztLUkrNd5khY30EKlSH7LAubtK%2F%2BJbqrRZ0ETfze%2F4oaXY905cwcSp4MDT5giwUyNkyPU4nGud7CaeOE0ZJrR2QYIGfTU6cZP%2F7zs3G4OyYtkDSbdSbYpnnlUa1SvHJhI4NUPfbZgIDXRDMvGQD2Nvgr1j41GQAewBCh7ktZO5Bip4wURhDEDJPmLRYHvaKbGB1DEVKVBOibb8lFlSuTmBldvS6XnLbzAdoMB%2Bu9Bs3fDAFPXmRiAkIdW2mjF1RhE7FqLuAC%2FNo8CN%2B8Fg3Zurkm7n%2FYglY3fK4boGBj4cpVaAU%2BT0AFqDnkQIsQ%2FIV2O7km2Y85XygXyctjSSjLlOxtAPo6OV%2BUPRrPSZ2YMULk2w355%2FTDi%2FNPD5ApH9fCaqnYvRAGQEE%2FoStAMKSpMOACC9e4WZAYGet7FGaqipMeAvTOQ817pV%2BBxIDRTGg7sJbhsbWk33KZ2zsrgpTAqZ56YNKZ5jc1Ew34DIvwY6pgGnidDTH3QylNemLMRN%2FfCjNJcV87R%2BFsAOrVKdbE28v2dL2LCSpF1eH%2FLXB6H0MWTY3BSjsFMC%2FeKc0NvTSa%2FGOK%2FECKPJGB0eb4sIM5EMLU0U0Z7vVRfs5sxIVzv4JNQRn2xbRe7bCNqVPYio1nRP%2FF5aGoVmFBCFWcKKPEI09WcPuXBq%2FCjRcEtlw%2FKfwqqQgRMxCQZUg1N1IkDfosS%2FSYqO14dG&X-Amz-Signature=c84e2af534058e81d8bb454f63cfa15f0b830cb57baf81c5962df1cb56eddd54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIE5B7UP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRm43UnyILL7gs5lRMJbCtm8UomJTiz9oySTFs5EwObAiAQ2gur8%2F%2B53EQolQlr%2FhzK55bqGDc25lrIQmCMYjo2Iyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM84lq7Exe6rPoOQjYKtwDZIT0rvpZKcWbnMrIh0rF2uGT8WGu8aKEFefhon%2BmqYritVKkJf8qzfdBQ7ThML6QFiNnVQ14wlJv0BhKdMzyn00%2FDGmrpokee2q5jDZ9lGZ2ZOnlOXVAJEftQi6UEmFxnC%2FIc%2BHdb0GDwZf3SGkD2NwlTGztLUkrNd5khY30EKlSH7LAubtK%2F%2BJbqrRZ0ETfze%2F4oaXY905cwcSp4MDT5giwUyNkyPU4nGud7CaeOE0ZJrR2QYIGfTU6cZP%2F7zs3G4OyYtkDSbdSbYpnnlUa1SvHJhI4NUPfbZgIDXRDMvGQD2Nvgr1j41GQAewBCh7ktZO5Bip4wURhDEDJPmLRYHvaKbGB1DEVKVBOibb8lFlSuTmBldvS6XnLbzAdoMB%2Bu9Bs3fDAFPXmRiAkIdW2mjF1RhE7FqLuAC%2FNo8CN%2B8Fg3Zurkm7n%2FYglY3fK4boGBj4cpVaAU%2BT0AFqDnkQIsQ%2FIV2O7km2Y85XygXyctjSSjLlOxtAPo6OV%2BUPRrPSZ2YMULk2w355%2FTDi%2FNPD5ApH9fCaqnYvRAGQEE%2FoStAMKSpMOACC9e4WZAYGet7FGaqipMeAvTOQ817pV%2BBxIDRTGg7sJbhsbWk33KZ2zsrgpTAqZ56YNKZ5jc1Ew34DIvwY6pgGnidDTH3QylNemLMRN%2FfCjNJcV87R%2BFsAOrVKdbE28v2dL2LCSpF1eH%2FLXB6H0MWTY3BSjsFMC%2FeKc0NvTSa%2FGOK%2FECKPJGB0eb4sIM5EMLU0U0Z7vVRfs5sxIVzv4JNQRn2xbRe7bCNqVPYio1nRP%2FF5aGoVmFBCFWcKKPEI09WcPuXBq%2FCjRcEtlw%2FKfwqqQgRMxCQZUg1N1IkDfosS%2FSYqO14dG&X-Amz-Signature=0eb7b7f67ab674c93aebf53182effd1e0791e1ebf12e03ab3974eaf59c7a1297&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIE5B7UP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRm43UnyILL7gs5lRMJbCtm8UomJTiz9oySTFs5EwObAiAQ2gur8%2F%2B53EQolQlr%2FhzK55bqGDc25lrIQmCMYjo2Iyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM84lq7Exe6rPoOQjYKtwDZIT0rvpZKcWbnMrIh0rF2uGT8WGu8aKEFefhon%2BmqYritVKkJf8qzfdBQ7ThML6QFiNnVQ14wlJv0BhKdMzyn00%2FDGmrpokee2q5jDZ9lGZ2ZOnlOXVAJEftQi6UEmFxnC%2FIc%2BHdb0GDwZf3SGkD2NwlTGztLUkrNd5khY30EKlSH7LAubtK%2F%2BJbqrRZ0ETfze%2F4oaXY905cwcSp4MDT5giwUyNkyPU4nGud7CaeOE0ZJrR2QYIGfTU6cZP%2F7zs3G4OyYtkDSbdSbYpnnlUa1SvHJhI4NUPfbZgIDXRDMvGQD2Nvgr1j41GQAewBCh7ktZO5Bip4wURhDEDJPmLRYHvaKbGB1DEVKVBOibb8lFlSuTmBldvS6XnLbzAdoMB%2Bu9Bs3fDAFPXmRiAkIdW2mjF1RhE7FqLuAC%2FNo8CN%2B8Fg3Zurkm7n%2FYglY3fK4boGBj4cpVaAU%2BT0AFqDnkQIsQ%2FIV2O7km2Y85XygXyctjSSjLlOxtAPo6OV%2BUPRrPSZ2YMULk2w355%2FTDi%2FNPD5ApH9fCaqnYvRAGQEE%2FoStAMKSpMOACC9e4WZAYGet7FGaqipMeAvTOQ817pV%2BBxIDRTGg7sJbhsbWk33KZ2zsrgpTAqZ56YNKZ5jc1Ew34DIvwY6pgGnidDTH3QylNemLMRN%2FfCjNJcV87R%2BFsAOrVKdbE28v2dL2LCSpF1eH%2FLXB6H0MWTY3BSjsFMC%2FeKc0NvTSa%2FGOK%2FECKPJGB0eb4sIM5EMLU0U0Z7vVRfs5sxIVzv4JNQRn2xbRe7bCNqVPYio1nRP%2FF5aGoVmFBCFWcKKPEI09WcPuXBq%2FCjRcEtlw%2FKfwqqQgRMxCQZUg1N1IkDfosS%2FSYqO14dG&X-Amz-Signature=f35f53b24ad3e2c93e3588b6ad75f92d6c954780c186c5da0d23884f74626b90&X-Amz-SignedHeaders=host&x-id=GetObject)
