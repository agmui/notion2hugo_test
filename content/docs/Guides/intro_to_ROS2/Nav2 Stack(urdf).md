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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FE2FGPD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8HHFxAXEIzSMq8ltHwcjVQANFmNrN%2BxiKq9UnJpejvAiEAtggegHpkc4hQoJautNk1oO%2FojR1grcYKdE8trGU104Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDK%2FLejBAoUip5PUFZCrcA2dDEyrRfK1D30IgByqceu7Rg%2FGnnIvy7doePLLpJJzuq8wtVGGjUra42jbmgZ6eIIBKAds5B2CjBme%2FBIfKMPsHXG9PsR5S9TwXwrmMjvjBv4q7xY%2B%2FJy1TFf4MpDJxxQH1bhfUTYZpUVDYXop%2Bpowt0DLV7g9c61dhaEqh2HulZrmyHqtlwURcE7%2B3SaNyEB9xwiY4kyGlcxITFW2LqFQlOsBzF8ZkS%2FDDGFrITie5zMZIX8R6Qju4sCHTxLF%2FNo%2BrQuZr6Wv9XW3cxWaxCg%2FRgYSgAzk9OoXXeRu58ttFwGMeZnAIZEPCbMRJ%2Fonw%2F1uj86SWbuijANjVi7rmID%2BwOCpz1J9c3H%2Fb7cyEXjXtnfH%2BcTqQBCMfTwGY2B2V3OlDwzCr8joM3vmU7xaRI0tJm7qc4rlntGMaFlv%2F37V8aPNJK2VTP4aPwVJKTUPaKNamirH2GbKICrcHylLrFSRwi0MPzDcuGFXyV4xIm2%2FY3JQAKC22OAhswxIyhlB%2F2NF9AOPmXFfAWduS4FAzQ01oiS7Fkhrv5YMxyfyNMVJOIM1346QOrGaMi054ra8rVZJvcRNH5FRdFaGlkY8l7JPg0lMlpfD1u%2FxU3gnyI%2BEsXzoYDmuy3uOdjOO%2FMMmC4r4GOqUBkYlUUM41RqvwIW9yXyF3%2FDnGEDOe4sy9PRbcOX1jY3rxhNW3CB5%2FO8UyrcCKkcuX7lojKoqwhbudZXE%2BTaYoxAky6IjyepjAKPL2JhQpRsRWXRHdsQu4LlCAzf5CAdIdpi6g22qWLv3BaflUN35EcX7O7%2Fp1hE%2BY7m5cn8ONr8uHenRu1Ua1z%2Bo7%2FUk6maH2hEZPENQnBHamxSDIzzVQharMU4d0&X-Amz-Signature=8f7f1f576b00b7404520e15bb460c7c1783a08d73e679adf2ab0d8968b709d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FE2FGPD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8HHFxAXEIzSMq8ltHwcjVQANFmNrN%2BxiKq9UnJpejvAiEAtggegHpkc4hQoJautNk1oO%2FojR1grcYKdE8trGU104Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDK%2FLejBAoUip5PUFZCrcA2dDEyrRfK1D30IgByqceu7Rg%2FGnnIvy7doePLLpJJzuq8wtVGGjUra42jbmgZ6eIIBKAds5B2CjBme%2FBIfKMPsHXG9PsR5S9TwXwrmMjvjBv4q7xY%2B%2FJy1TFf4MpDJxxQH1bhfUTYZpUVDYXop%2Bpowt0DLV7g9c61dhaEqh2HulZrmyHqtlwURcE7%2B3SaNyEB9xwiY4kyGlcxITFW2LqFQlOsBzF8ZkS%2FDDGFrITie5zMZIX8R6Qju4sCHTxLF%2FNo%2BrQuZr6Wv9XW3cxWaxCg%2FRgYSgAzk9OoXXeRu58ttFwGMeZnAIZEPCbMRJ%2Fonw%2F1uj86SWbuijANjVi7rmID%2BwOCpz1J9c3H%2Fb7cyEXjXtnfH%2BcTqQBCMfTwGY2B2V3OlDwzCr8joM3vmU7xaRI0tJm7qc4rlntGMaFlv%2F37V8aPNJK2VTP4aPwVJKTUPaKNamirH2GbKICrcHylLrFSRwi0MPzDcuGFXyV4xIm2%2FY3JQAKC22OAhswxIyhlB%2F2NF9AOPmXFfAWduS4FAzQ01oiS7Fkhrv5YMxyfyNMVJOIM1346QOrGaMi054ra8rVZJvcRNH5FRdFaGlkY8l7JPg0lMlpfD1u%2FxU3gnyI%2BEsXzoYDmuy3uOdjOO%2FMMmC4r4GOqUBkYlUUM41RqvwIW9yXyF3%2FDnGEDOe4sy9PRbcOX1jY3rxhNW3CB5%2FO8UyrcCKkcuX7lojKoqwhbudZXE%2BTaYoxAky6IjyepjAKPL2JhQpRsRWXRHdsQu4LlCAzf5CAdIdpi6g22qWLv3BaflUN35EcX7O7%2Fp1hE%2BY7m5cn8ONr8uHenRu1Ua1z%2Bo7%2FUk6maH2hEZPENQnBHamxSDIzzVQharMU4d0&X-Amz-Signature=14222b16aac28340be230881252edee2fea0f8b7113654a06e4cd3460227eec9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FE2FGPD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8HHFxAXEIzSMq8ltHwcjVQANFmNrN%2BxiKq9UnJpejvAiEAtggegHpkc4hQoJautNk1oO%2FojR1grcYKdE8trGU104Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDK%2FLejBAoUip5PUFZCrcA2dDEyrRfK1D30IgByqceu7Rg%2FGnnIvy7doePLLpJJzuq8wtVGGjUra42jbmgZ6eIIBKAds5B2CjBme%2FBIfKMPsHXG9PsR5S9TwXwrmMjvjBv4q7xY%2B%2FJy1TFf4MpDJxxQH1bhfUTYZpUVDYXop%2Bpowt0DLV7g9c61dhaEqh2HulZrmyHqtlwURcE7%2B3SaNyEB9xwiY4kyGlcxITFW2LqFQlOsBzF8ZkS%2FDDGFrITie5zMZIX8R6Qju4sCHTxLF%2FNo%2BrQuZr6Wv9XW3cxWaxCg%2FRgYSgAzk9OoXXeRu58ttFwGMeZnAIZEPCbMRJ%2Fonw%2F1uj86SWbuijANjVi7rmID%2BwOCpz1J9c3H%2Fb7cyEXjXtnfH%2BcTqQBCMfTwGY2B2V3OlDwzCr8joM3vmU7xaRI0tJm7qc4rlntGMaFlv%2F37V8aPNJK2VTP4aPwVJKTUPaKNamirH2GbKICrcHylLrFSRwi0MPzDcuGFXyV4xIm2%2FY3JQAKC22OAhswxIyhlB%2F2NF9AOPmXFfAWduS4FAzQ01oiS7Fkhrv5YMxyfyNMVJOIM1346QOrGaMi054ra8rVZJvcRNH5FRdFaGlkY8l7JPg0lMlpfD1u%2FxU3gnyI%2BEsXzoYDmuy3uOdjOO%2FMMmC4r4GOqUBkYlUUM41RqvwIW9yXyF3%2FDnGEDOe4sy9PRbcOX1jY3rxhNW3CB5%2FO8UyrcCKkcuX7lojKoqwhbudZXE%2BTaYoxAky6IjyepjAKPL2JhQpRsRWXRHdsQu4LlCAzf5CAdIdpi6g22qWLv3BaflUN35EcX7O7%2Fp1hE%2BY7m5cn8ONr8uHenRu1Ua1z%2Bo7%2FUk6maH2hEZPENQnBHamxSDIzzVQharMU4d0&X-Amz-Signature=87cee9236f996fa4c62560bbda4da7c82dfe62ec461076f1092351a5dd0de1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FE2FGPD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8HHFxAXEIzSMq8ltHwcjVQANFmNrN%2BxiKq9UnJpejvAiEAtggegHpkc4hQoJautNk1oO%2FojR1grcYKdE8trGU104Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDK%2FLejBAoUip5PUFZCrcA2dDEyrRfK1D30IgByqceu7Rg%2FGnnIvy7doePLLpJJzuq8wtVGGjUra42jbmgZ6eIIBKAds5B2CjBme%2FBIfKMPsHXG9PsR5S9TwXwrmMjvjBv4q7xY%2B%2FJy1TFf4MpDJxxQH1bhfUTYZpUVDYXop%2Bpowt0DLV7g9c61dhaEqh2HulZrmyHqtlwURcE7%2B3SaNyEB9xwiY4kyGlcxITFW2LqFQlOsBzF8ZkS%2FDDGFrITie5zMZIX8R6Qju4sCHTxLF%2FNo%2BrQuZr6Wv9XW3cxWaxCg%2FRgYSgAzk9OoXXeRu58ttFwGMeZnAIZEPCbMRJ%2Fonw%2F1uj86SWbuijANjVi7rmID%2BwOCpz1J9c3H%2Fb7cyEXjXtnfH%2BcTqQBCMfTwGY2B2V3OlDwzCr8joM3vmU7xaRI0tJm7qc4rlntGMaFlv%2F37V8aPNJK2VTP4aPwVJKTUPaKNamirH2GbKICrcHylLrFSRwi0MPzDcuGFXyV4xIm2%2FY3JQAKC22OAhswxIyhlB%2F2NF9AOPmXFfAWduS4FAzQ01oiS7Fkhrv5YMxyfyNMVJOIM1346QOrGaMi054ra8rVZJvcRNH5FRdFaGlkY8l7JPg0lMlpfD1u%2FxU3gnyI%2BEsXzoYDmuy3uOdjOO%2FMMmC4r4GOqUBkYlUUM41RqvwIW9yXyF3%2FDnGEDOe4sy9PRbcOX1jY3rxhNW3CB5%2FO8UyrcCKkcuX7lojKoqwhbudZXE%2BTaYoxAky6IjyepjAKPL2JhQpRsRWXRHdsQu4LlCAzf5CAdIdpi6g22qWLv3BaflUN35EcX7O7%2Fp1hE%2BY7m5cn8ONr8uHenRu1Ua1z%2Bo7%2FUk6maH2hEZPENQnBHamxSDIzzVQharMU4d0&X-Amz-Signature=0e37eab28c095dff0c20e35ccbe598b7d851cb2ad99ed01746e4866286ae7dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FE2FGPD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8HHFxAXEIzSMq8ltHwcjVQANFmNrN%2BxiKq9UnJpejvAiEAtggegHpkc4hQoJautNk1oO%2FojR1grcYKdE8trGU104Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDK%2FLejBAoUip5PUFZCrcA2dDEyrRfK1D30IgByqceu7Rg%2FGnnIvy7doePLLpJJzuq8wtVGGjUra42jbmgZ6eIIBKAds5B2CjBme%2FBIfKMPsHXG9PsR5S9TwXwrmMjvjBv4q7xY%2B%2FJy1TFf4MpDJxxQH1bhfUTYZpUVDYXop%2Bpowt0DLV7g9c61dhaEqh2HulZrmyHqtlwURcE7%2B3SaNyEB9xwiY4kyGlcxITFW2LqFQlOsBzF8ZkS%2FDDGFrITie5zMZIX8R6Qju4sCHTxLF%2FNo%2BrQuZr6Wv9XW3cxWaxCg%2FRgYSgAzk9OoXXeRu58ttFwGMeZnAIZEPCbMRJ%2Fonw%2F1uj86SWbuijANjVi7rmID%2BwOCpz1J9c3H%2Fb7cyEXjXtnfH%2BcTqQBCMfTwGY2B2V3OlDwzCr8joM3vmU7xaRI0tJm7qc4rlntGMaFlv%2F37V8aPNJK2VTP4aPwVJKTUPaKNamirH2GbKICrcHylLrFSRwi0MPzDcuGFXyV4xIm2%2FY3JQAKC22OAhswxIyhlB%2F2NF9AOPmXFfAWduS4FAzQ01oiS7Fkhrv5YMxyfyNMVJOIM1346QOrGaMi054ra8rVZJvcRNH5FRdFaGlkY8l7JPg0lMlpfD1u%2FxU3gnyI%2BEsXzoYDmuy3uOdjOO%2FMMmC4r4GOqUBkYlUUM41RqvwIW9yXyF3%2FDnGEDOe4sy9PRbcOX1jY3rxhNW3CB5%2FO8UyrcCKkcuX7lojKoqwhbudZXE%2BTaYoxAky6IjyepjAKPL2JhQpRsRWXRHdsQu4LlCAzf5CAdIdpi6g22qWLv3BaflUN35EcX7O7%2Fp1hE%2BY7m5cn8ONr8uHenRu1Ua1z%2Bo7%2FUk6maH2hEZPENQnBHamxSDIzzVQharMU4d0&X-Amz-Signature=f39be31b84441b25aac135fcf3bdff5ffb001b231d2ec3551d65870531d671a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FE2FGPD%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8HHFxAXEIzSMq8ltHwcjVQANFmNrN%2BxiKq9UnJpejvAiEAtggegHpkc4hQoJautNk1oO%2FojR1grcYKdE8trGU104Iq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDK%2FLejBAoUip5PUFZCrcA2dDEyrRfK1D30IgByqceu7Rg%2FGnnIvy7doePLLpJJzuq8wtVGGjUra42jbmgZ6eIIBKAds5B2CjBme%2FBIfKMPsHXG9PsR5S9TwXwrmMjvjBv4q7xY%2B%2FJy1TFf4MpDJxxQH1bhfUTYZpUVDYXop%2Bpowt0DLV7g9c61dhaEqh2HulZrmyHqtlwURcE7%2B3SaNyEB9xwiY4kyGlcxITFW2LqFQlOsBzF8ZkS%2FDDGFrITie5zMZIX8R6Qju4sCHTxLF%2FNo%2BrQuZr6Wv9XW3cxWaxCg%2FRgYSgAzk9OoXXeRu58ttFwGMeZnAIZEPCbMRJ%2Fonw%2F1uj86SWbuijANjVi7rmID%2BwOCpz1J9c3H%2Fb7cyEXjXtnfH%2BcTqQBCMfTwGY2B2V3OlDwzCr8joM3vmU7xaRI0tJm7qc4rlntGMaFlv%2F37V8aPNJK2VTP4aPwVJKTUPaKNamirH2GbKICrcHylLrFSRwi0MPzDcuGFXyV4xIm2%2FY3JQAKC22OAhswxIyhlB%2F2NF9AOPmXFfAWduS4FAzQ01oiS7Fkhrv5YMxyfyNMVJOIM1346QOrGaMi054ra8rVZJvcRNH5FRdFaGlkY8l7JPg0lMlpfD1u%2FxU3gnyI%2BEsXzoYDmuy3uOdjOO%2FMMmC4r4GOqUBkYlUUM41RqvwIW9yXyF3%2FDnGEDOe4sy9PRbcOX1jY3rxhNW3CB5%2FO8UyrcCKkcuX7lojKoqwhbudZXE%2BTaYoxAky6IjyepjAKPL2JhQpRsRWXRHdsQu4LlCAzf5CAdIdpi6g22qWLv3BaflUN35EcX7O7%2Fp1hE%2BY7m5cn8ONr8uHenRu1Ua1z%2Bo7%2FUk6maH2hEZPENQnBHamxSDIzzVQharMU4d0&X-Amz-Signature=bfaf50dc373f7bdbebadd930ad675c0ab46444eed06079c257ebeeaf27f7bf90&X-Amz-SignedHeaders=host&x-id=GetObject)
