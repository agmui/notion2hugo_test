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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFOF6XR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIF9nXUys8e7W8YmBSingqEChLfzZjUTGjWKsXJUga7ZVAiEAjvW96nvq98x2Am66%2B9UXx01YnJA2i8B2JOsRL3bG0v0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ZiWhU01axB8UxlyrcA%2F6r4p3Gmnt%2F6i%2FVqvhHAh%2FHDjT9k%2Fq0iqnWli4nf5F6xAylQXEuBJBpd4DJu8S5yxAoq0ovJIjhLixuaH2IoaCsxtAgTu5y15c8Y0%2FZtMIXY84OCsFgN%2BKffl9T3AGpuWJhlSEpl74NzWSVjFo4flYLGHEmSQpZuGBXIQa9zQpqjGnR7ZfvMUjccCBBgy%2FRK4dPTmJT5Vac4JyBsBhK9JDiPDQoQDTIyrKRorkuZkJXdyr1Y8tWpEMJ0k2wpFufoLAj2a1qSmshV2neFc3IKBmInrOl%2FyCChkuMZGukEqKMXGm5v8Thv76fKQY%2BR%2BW%2FsRNTElWiy4JjZdOezc5grYBYNHAQTn33ciX3pykDCYB7yt6xSECVfE45kpRWB9gYBO1zVCNtCwvC8OYszLuKwTXAxRtIis9rk%2BdMX12yScaAWg1lhwGSpmqj4DFoSER2eBIjD0xVpMbB7agHzhy5dhUjT2ILPC8fxewfLa96enH3qV%2FgTcinCH815IkXhnE0l9gpFOpw%2BpPdrl4c0d5y6izYvSfvU89vUTk56gVIGVyBIBAyGZCSaAma46EJHZ0cg%2FWKgfM%2F%2Bmg7IoaspQev9Iut3ZSVQxcPwHd6yUa1I1B8mWwqEyQW5o8%2FhTNYMK%2BRz8AGOqUBtoNBbTmMj2hkEC7epwgrAFIiI5jmucbQa%2B7LpHH0mbWlpO2l2ShOV%2B9UwEGyLUIXq7YPuUDatIRtkXvvwJtOFyJGlEkPiT4gtza3Pka25s5iqKSxo2icroXRZTIPEDbeTC4sDSgdUU%2F4u%2B0TV5smv8NROMVrvtc2pBTHUA8K3z43AAOjUHT3pOaSHr8KLfHK6IjCT0kgRWT3c5pVgeC46ScgOVnq&X-Amz-Signature=d4484a364cc8afac810c289529e3f2f9c4ab695da16ecc1ed67030e23d3d7c27&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFOF6XR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIF9nXUys8e7W8YmBSingqEChLfzZjUTGjWKsXJUga7ZVAiEAjvW96nvq98x2Am66%2B9UXx01YnJA2i8B2JOsRL3bG0v0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ZiWhU01axB8UxlyrcA%2F6r4p3Gmnt%2F6i%2FVqvhHAh%2FHDjT9k%2Fq0iqnWli4nf5F6xAylQXEuBJBpd4DJu8S5yxAoq0ovJIjhLixuaH2IoaCsxtAgTu5y15c8Y0%2FZtMIXY84OCsFgN%2BKffl9T3AGpuWJhlSEpl74NzWSVjFo4flYLGHEmSQpZuGBXIQa9zQpqjGnR7ZfvMUjccCBBgy%2FRK4dPTmJT5Vac4JyBsBhK9JDiPDQoQDTIyrKRorkuZkJXdyr1Y8tWpEMJ0k2wpFufoLAj2a1qSmshV2neFc3IKBmInrOl%2FyCChkuMZGukEqKMXGm5v8Thv76fKQY%2BR%2BW%2FsRNTElWiy4JjZdOezc5grYBYNHAQTn33ciX3pykDCYB7yt6xSECVfE45kpRWB9gYBO1zVCNtCwvC8OYszLuKwTXAxRtIis9rk%2BdMX12yScaAWg1lhwGSpmqj4DFoSER2eBIjD0xVpMbB7agHzhy5dhUjT2ILPC8fxewfLa96enH3qV%2FgTcinCH815IkXhnE0l9gpFOpw%2BpPdrl4c0d5y6izYvSfvU89vUTk56gVIGVyBIBAyGZCSaAma46EJHZ0cg%2FWKgfM%2F%2Bmg7IoaspQev9Iut3ZSVQxcPwHd6yUa1I1B8mWwqEyQW5o8%2FhTNYMK%2BRz8AGOqUBtoNBbTmMj2hkEC7epwgrAFIiI5jmucbQa%2B7LpHH0mbWlpO2l2ShOV%2B9UwEGyLUIXq7YPuUDatIRtkXvvwJtOFyJGlEkPiT4gtza3Pka25s5iqKSxo2icroXRZTIPEDbeTC4sDSgdUU%2F4u%2B0TV5smv8NROMVrvtc2pBTHUA8K3z43AAOjUHT3pOaSHr8KLfHK6IjCT0kgRWT3c5pVgeC46ScgOVnq&X-Amz-Signature=3fcb43ff2b4715d43d1478d7cb346b7ff7c43d7621890bab3e3a1b782eff26aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFOF6XR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIF9nXUys8e7W8YmBSingqEChLfzZjUTGjWKsXJUga7ZVAiEAjvW96nvq98x2Am66%2B9UXx01YnJA2i8B2JOsRL3bG0v0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ZiWhU01axB8UxlyrcA%2F6r4p3Gmnt%2F6i%2FVqvhHAh%2FHDjT9k%2Fq0iqnWli4nf5F6xAylQXEuBJBpd4DJu8S5yxAoq0ovJIjhLixuaH2IoaCsxtAgTu5y15c8Y0%2FZtMIXY84OCsFgN%2BKffl9T3AGpuWJhlSEpl74NzWSVjFo4flYLGHEmSQpZuGBXIQa9zQpqjGnR7ZfvMUjccCBBgy%2FRK4dPTmJT5Vac4JyBsBhK9JDiPDQoQDTIyrKRorkuZkJXdyr1Y8tWpEMJ0k2wpFufoLAj2a1qSmshV2neFc3IKBmInrOl%2FyCChkuMZGukEqKMXGm5v8Thv76fKQY%2BR%2BW%2FsRNTElWiy4JjZdOezc5grYBYNHAQTn33ciX3pykDCYB7yt6xSECVfE45kpRWB9gYBO1zVCNtCwvC8OYszLuKwTXAxRtIis9rk%2BdMX12yScaAWg1lhwGSpmqj4DFoSER2eBIjD0xVpMbB7agHzhy5dhUjT2ILPC8fxewfLa96enH3qV%2FgTcinCH815IkXhnE0l9gpFOpw%2BpPdrl4c0d5y6izYvSfvU89vUTk56gVIGVyBIBAyGZCSaAma46EJHZ0cg%2FWKgfM%2F%2Bmg7IoaspQev9Iut3ZSVQxcPwHd6yUa1I1B8mWwqEyQW5o8%2FhTNYMK%2BRz8AGOqUBtoNBbTmMj2hkEC7epwgrAFIiI5jmucbQa%2B7LpHH0mbWlpO2l2ShOV%2B9UwEGyLUIXq7YPuUDatIRtkXvvwJtOFyJGlEkPiT4gtza3Pka25s5iqKSxo2icroXRZTIPEDbeTC4sDSgdUU%2F4u%2B0TV5smv8NROMVrvtc2pBTHUA8K3z43AAOjUHT3pOaSHr8KLfHK6IjCT0kgRWT3c5pVgeC46ScgOVnq&X-Amz-Signature=fbe49ef97221655feec5ab976f0422ce4f772d43b35e5bae89e70a98d6e0c9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFOF6XR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIF9nXUys8e7W8YmBSingqEChLfzZjUTGjWKsXJUga7ZVAiEAjvW96nvq98x2Am66%2B9UXx01YnJA2i8B2JOsRL3bG0v0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ZiWhU01axB8UxlyrcA%2F6r4p3Gmnt%2F6i%2FVqvhHAh%2FHDjT9k%2Fq0iqnWli4nf5F6xAylQXEuBJBpd4DJu8S5yxAoq0ovJIjhLixuaH2IoaCsxtAgTu5y15c8Y0%2FZtMIXY84OCsFgN%2BKffl9T3AGpuWJhlSEpl74NzWSVjFo4flYLGHEmSQpZuGBXIQa9zQpqjGnR7ZfvMUjccCBBgy%2FRK4dPTmJT5Vac4JyBsBhK9JDiPDQoQDTIyrKRorkuZkJXdyr1Y8tWpEMJ0k2wpFufoLAj2a1qSmshV2neFc3IKBmInrOl%2FyCChkuMZGukEqKMXGm5v8Thv76fKQY%2BR%2BW%2FsRNTElWiy4JjZdOezc5grYBYNHAQTn33ciX3pykDCYB7yt6xSECVfE45kpRWB9gYBO1zVCNtCwvC8OYszLuKwTXAxRtIis9rk%2BdMX12yScaAWg1lhwGSpmqj4DFoSER2eBIjD0xVpMbB7agHzhy5dhUjT2ILPC8fxewfLa96enH3qV%2FgTcinCH815IkXhnE0l9gpFOpw%2BpPdrl4c0d5y6izYvSfvU89vUTk56gVIGVyBIBAyGZCSaAma46EJHZ0cg%2FWKgfM%2F%2Bmg7IoaspQev9Iut3ZSVQxcPwHd6yUa1I1B8mWwqEyQW5o8%2FhTNYMK%2BRz8AGOqUBtoNBbTmMj2hkEC7epwgrAFIiI5jmucbQa%2B7LpHH0mbWlpO2l2ShOV%2B9UwEGyLUIXq7YPuUDatIRtkXvvwJtOFyJGlEkPiT4gtza3Pka25s5iqKSxo2icroXRZTIPEDbeTC4sDSgdUU%2F4u%2B0TV5smv8NROMVrvtc2pBTHUA8K3z43AAOjUHT3pOaSHr8KLfHK6IjCT0kgRWT3c5pVgeC46ScgOVnq&X-Amz-Signature=a8532bfdd2e06a19df2e796773cfb84d11c0c472df820f4b63265b52f6bc3c68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFOF6XR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIF9nXUys8e7W8YmBSingqEChLfzZjUTGjWKsXJUga7ZVAiEAjvW96nvq98x2Am66%2B9UXx01YnJA2i8B2JOsRL3bG0v0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ZiWhU01axB8UxlyrcA%2F6r4p3Gmnt%2F6i%2FVqvhHAh%2FHDjT9k%2Fq0iqnWli4nf5F6xAylQXEuBJBpd4DJu8S5yxAoq0ovJIjhLixuaH2IoaCsxtAgTu5y15c8Y0%2FZtMIXY84OCsFgN%2BKffl9T3AGpuWJhlSEpl74NzWSVjFo4flYLGHEmSQpZuGBXIQa9zQpqjGnR7ZfvMUjccCBBgy%2FRK4dPTmJT5Vac4JyBsBhK9JDiPDQoQDTIyrKRorkuZkJXdyr1Y8tWpEMJ0k2wpFufoLAj2a1qSmshV2neFc3IKBmInrOl%2FyCChkuMZGukEqKMXGm5v8Thv76fKQY%2BR%2BW%2FsRNTElWiy4JjZdOezc5grYBYNHAQTn33ciX3pykDCYB7yt6xSECVfE45kpRWB9gYBO1zVCNtCwvC8OYszLuKwTXAxRtIis9rk%2BdMX12yScaAWg1lhwGSpmqj4DFoSER2eBIjD0xVpMbB7agHzhy5dhUjT2ILPC8fxewfLa96enH3qV%2FgTcinCH815IkXhnE0l9gpFOpw%2BpPdrl4c0d5y6izYvSfvU89vUTk56gVIGVyBIBAyGZCSaAma46EJHZ0cg%2FWKgfM%2F%2Bmg7IoaspQev9Iut3ZSVQxcPwHd6yUa1I1B8mWwqEyQW5o8%2FhTNYMK%2BRz8AGOqUBtoNBbTmMj2hkEC7epwgrAFIiI5jmucbQa%2B7LpHH0mbWlpO2l2ShOV%2B9UwEGyLUIXq7YPuUDatIRtkXvvwJtOFyJGlEkPiT4gtza3Pka25s5iqKSxo2icroXRZTIPEDbeTC4sDSgdUU%2F4u%2B0TV5smv8NROMVrvtc2pBTHUA8K3z43AAOjUHT3pOaSHr8KLfHK6IjCT0kgRWT3c5pVgeC46ScgOVnq&X-Amz-Signature=5f8a45dd22a73703e6cc02bb2e2aee32c105e864366b9c5c0764eb92e2362f33&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YFOF6XR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIF9nXUys8e7W8YmBSingqEChLfzZjUTGjWKsXJUga7ZVAiEAjvW96nvq98x2Am66%2B9UXx01YnJA2i8B2JOsRL3bG0v0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ZiWhU01axB8UxlyrcA%2F6r4p3Gmnt%2F6i%2FVqvhHAh%2FHDjT9k%2Fq0iqnWli4nf5F6xAylQXEuBJBpd4DJu8S5yxAoq0ovJIjhLixuaH2IoaCsxtAgTu5y15c8Y0%2FZtMIXY84OCsFgN%2BKffl9T3AGpuWJhlSEpl74NzWSVjFo4flYLGHEmSQpZuGBXIQa9zQpqjGnR7ZfvMUjccCBBgy%2FRK4dPTmJT5Vac4JyBsBhK9JDiPDQoQDTIyrKRorkuZkJXdyr1Y8tWpEMJ0k2wpFufoLAj2a1qSmshV2neFc3IKBmInrOl%2FyCChkuMZGukEqKMXGm5v8Thv76fKQY%2BR%2BW%2FsRNTElWiy4JjZdOezc5grYBYNHAQTn33ciX3pykDCYB7yt6xSECVfE45kpRWB9gYBO1zVCNtCwvC8OYszLuKwTXAxRtIis9rk%2BdMX12yScaAWg1lhwGSpmqj4DFoSER2eBIjD0xVpMbB7agHzhy5dhUjT2ILPC8fxewfLa96enH3qV%2FgTcinCH815IkXhnE0l9gpFOpw%2BpPdrl4c0d5y6izYvSfvU89vUTk56gVIGVyBIBAyGZCSaAma46EJHZ0cg%2FWKgfM%2F%2Bmg7IoaspQev9Iut3ZSVQxcPwHd6yUa1I1B8mWwqEyQW5o8%2FhTNYMK%2BRz8AGOqUBtoNBbTmMj2hkEC7epwgrAFIiI5jmucbQa%2B7LpHH0mbWlpO2l2ShOV%2B9UwEGyLUIXq7YPuUDatIRtkXvvwJtOFyJGlEkPiT4gtza3Pka25s5iqKSxo2icroXRZTIPEDbeTC4sDSgdUU%2F4u%2B0TV5smv8NROMVrvtc2pBTHUA8K3z43AAOjUHT3pOaSHr8KLfHK6IjCT0kgRWT3c5pVgeC46ScgOVnq&X-Amz-Signature=73950207c7e5059a61b3b3c274f595333153614b0398995128ad4f39ced46de3&X-Amz-SignedHeaders=host&x-id=GetObject)
