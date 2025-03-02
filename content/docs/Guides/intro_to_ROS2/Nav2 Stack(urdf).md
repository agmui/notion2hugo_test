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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z744HWRV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI8F3k7UpyVuMZ0QKhwKm6suFsx08W0SRdKAd4X8v6mAiEAjPa%2BrdmblIhaghWYLUqGHCKzfxDkWg6%2FDdTXQOjoLdgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7g4WdYvMAFg13V%2BircA0%2BP0gSKpjFfmwe9GTd0StblHNm%2ByjtAtHeA0p9X8%2BcVSZIe7dMRZWh8nk%2FwpkMh9ieeic3O4ejuQoXvfpsKhlGzllycpt7XqRutDKwbzdAsW%2BRMYrNAV%2BwqJ%2FGFK1nLx1kJsh3HMFAC6sjj7GRd8r1AeL3iDdYpDoEeniT9Nv2uyCYXm8vYfFLmCd5HmNQDTDyM2I%2BeIL%2FAJtBLQQV2LiLWnMT5tBzS%2BdfPenBeRFLT5EZmOcLRx%2Bp4XiEvRIlXUz372kHaebMLjROASuGbxbbe1XhqjRqfl1BjFL4Zvq6ujvH5kcYqzfHVEt%2B8Bjq79zW1IVLr9u2XoLFbnrxNO%2F1kb5zEPp8lA6iFM2t%2BpU8XHvHo8Q2l0sJOM0nzeYBX9TgmdqXzR7MlFaP%2Fdvujmbc%2FsgPGleLwSi%2BLw7NdwUjvkGm%2FOXZIOs6LbR3UH7X9yd6nHVVjvftb3ghUgO2tf%2FPEME4PYJaonbBd184AJVotx5m61eLw%2FeTreSb1HyR32uAv8CqXOq4SEWEnlU1VTmhbalUbrx6yYWe1TyoGI4P0VsFtQQsk6qUkO3kg9SgAnITjlmaBrfWWi7Na56iUKpvqQ3nHcZhGWWH2MTH9%2F79auV1qpufEqvjRPEtFMOD5kL4GOqUBLCjFOrlivQeWvpT8iTkIktEzfVp9JufBeB%2BTAub4d5TTWo4bVk6kcN11ddUDzl824dfCsi3YBlAPmHDcK5%2Fwg9xs85W0j8RDv54FeiBUlz7WQEHeEb0N%2FUrq0JAzFIIFrq35p2J0nt0K1AYv7blmY67wWIgPBFlwhiSnFUvcnYYZskpwv7SlTcIDSLbajOjhF4jVZGyD%2FXvEulRv0%2F0UTOqBO4uE&X-Amz-Signature=5f0d639d2af9a6b2067af6d725b4f5a010b846f632c11fd673ea66881ff5d321&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z744HWRV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI8F3k7UpyVuMZ0QKhwKm6suFsx08W0SRdKAd4X8v6mAiEAjPa%2BrdmblIhaghWYLUqGHCKzfxDkWg6%2FDdTXQOjoLdgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7g4WdYvMAFg13V%2BircA0%2BP0gSKpjFfmwe9GTd0StblHNm%2ByjtAtHeA0p9X8%2BcVSZIe7dMRZWh8nk%2FwpkMh9ieeic3O4ejuQoXvfpsKhlGzllycpt7XqRutDKwbzdAsW%2BRMYrNAV%2BwqJ%2FGFK1nLx1kJsh3HMFAC6sjj7GRd8r1AeL3iDdYpDoEeniT9Nv2uyCYXm8vYfFLmCd5HmNQDTDyM2I%2BeIL%2FAJtBLQQV2LiLWnMT5tBzS%2BdfPenBeRFLT5EZmOcLRx%2Bp4XiEvRIlXUz372kHaebMLjROASuGbxbbe1XhqjRqfl1BjFL4Zvq6ujvH5kcYqzfHVEt%2B8Bjq79zW1IVLr9u2XoLFbnrxNO%2F1kb5zEPp8lA6iFM2t%2BpU8XHvHo8Q2l0sJOM0nzeYBX9TgmdqXzR7MlFaP%2Fdvujmbc%2FsgPGleLwSi%2BLw7NdwUjvkGm%2FOXZIOs6LbR3UH7X9yd6nHVVjvftb3ghUgO2tf%2FPEME4PYJaonbBd184AJVotx5m61eLw%2FeTreSb1HyR32uAv8CqXOq4SEWEnlU1VTmhbalUbrx6yYWe1TyoGI4P0VsFtQQsk6qUkO3kg9SgAnITjlmaBrfWWi7Na56iUKpvqQ3nHcZhGWWH2MTH9%2F79auV1qpufEqvjRPEtFMOD5kL4GOqUBLCjFOrlivQeWvpT8iTkIktEzfVp9JufBeB%2BTAub4d5TTWo4bVk6kcN11ddUDzl824dfCsi3YBlAPmHDcK5%2Fwg9xs85W0j8RDv54FeiBUlz7WQEHeEb0N%2FUrq0JAzFIIFrq35p2J0nt0K1AYv7blmY67wWIgPBFlwhiSnFUvcnYYZskpwv7SlTcIDSLbajOjhF4jVZGyD%2FXvEulRv0%2F0UTOqBO4uE&X-Amz-Signature=60dd3decb9f3507bc3357df8b4147a47937270ef13c27bd603c88aa682c05689&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z744HWRV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI8F3k7UpyVuMZ0QKhwKm6suFsx08W0SRdKAd4X8v6mAiEAjPa%2BrdmblIhaghWYLUqGHCKzfxDkWg6%2FDdTXQOjoLdgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7g4WdYvMAFg13V%2BircA0%2BP0gSKpjFfmwe9GTd0StblHNm%2ByjtAtHeA0p9X8%2BcVSZIe7dMRZWh8nk%2FwpkMh9ieeic3O4ejuQoXvfpsKhlGzllycpt7XqRutDKwbzdAsW%2BRMYrNAV%2BwqJ%2FGFK1nLx1kJsh3HMFAC6sjj7GRd8r1AeL3iDdYpDoEeniT9Nv2uyCYXm8vYfFLmCd5HmNQDTDyM2I%2BeIL%2FAJtBLQQV2LiLWnMT5tBzS%2BdfPenBeRFLT5EZmOcLRx%2Bp4XiEvRIlXUz372kHaebMLjROASuGbxbbe1XhqjRqfl1BjFL4Zvq6ujvH5kcYqzfHVEt%2B8Bjq79zW1IVLr9u2XoLFbnrxNO%2F1kb5zEPp8lA6iFM2t%2BpU8XHvHo8Q2l0sJOM0nzeYBX9TgmdqXzR7MlFaP%2Fdvujmbc%2FsgPGleLwSi%2BLw7NdwUjvkGm%2FOXZIOs6LbR3UH7X9yd6nHVVjvftb3ghUgO2tf%2FPEME4PYJaonbBd184AJVotx5m61eLw%2FeTreSb1HyR32uAv8CqXOq4SEWEnlU1VTmhbalUbrx6yYWe1TyoGI4P0VsFtQQsk6qUkO3kg9SgAnITjlmaBrfWWi7Na56iUKpvqQ3nHcZhGWWH2MTH9%2F79auV1qpufEqvjRPEtFMOD5kL4GOqUBLCjFOrlivQeWvpT8iTkIktEzfVp9JufBeB%2BTAub4d5TTWo4bVk6kcN11ddUDzl824dfCsi3YBlAPmHDcK5%2Fwg9xs85W0j8RDv54FeiBUlz7WQEHeEb0N%2FUrq0JAzFIIFrq35p2J0nt0K1AYv7blmY67wWIgPBFlwhiSnFUvcnYYZskpwv7SlTcIDSLbajOjhF4jVZGyD%2FXvEulRv0%2F0UTOqBO4uE&X-Amz-Signature=cb6d9c81650fea64317261b6339e488b02bf6a00d1a928582efeddc11f6eb694&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z744HWRV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI8F3k7UpyVuMZ0QKhwKm6suFsx08W0SRdKAd4X8v6mAiEAjPa%2BrdmblIhaghWYLUqGHCKzfxDkWg6%2FDdTXQOjoLdgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7g4WdYvMAFg13V%2BircA0%2BP0gSKpjFfmwe9GTd0StblHNm%2ByjtAtHeA0p9X8%2BcVSZIe7dMRZWh8nk%2FwpkMh9ieeic3O4ejuQoXvfpsKhlGzllycpt7XqRutDKwbzdAsW%2BRMYrNAV%2BwqJ%2FGFK1nLx1kJsh3HMFAC6sjj7GRd8r1AeL3iDdYpDoEeniT9Nv2uyCYXm8vYfFLmCd5HmNQDTDyM2I%2BeIL%2FAJtBLQQV2LiLWnMT5tBzS%2BdfPenBeRFLT5EZmOcLRx%2Bp4XiEvRIlXUz372kHaebMLjROASuGbxbbe1XhqjRqfl1BjFL4Zvq6ujvH5kcYqzfHVEt%2B8Bjq79zW1IVLr9u2XoLFbnrxNO%2F1kb5zEPp8lA6iFM2t%2BpU8XHvHo8Q2l0sJOM0nzeYBX9TgmdqXzR7MlFaP%2Fdvujmbc%2FsgPGleLwSi%2BLw7NdwUjvkGm%2FOXZIOs6LbR3UH7X9yd6nHVVjvftb3ghUgO2tf%2FPEME4PYJaonbBd184AJVotx5m61eLw%2FeTreSb1HyR32uAv8CqXOq4SEWEnlU1VTmhbalUbrx6yYWe1TyoGI4P0VsFtQQsk6qUkO3kg9SgAnITjlmaBrfWWi7Na56iUKpvqQ3nHcZhGWWH2MTH9%2F79auV1qpufEqvjRPEtFMOD5kL4GOqUBLCjFOrlivQeWvpT8iTkIktEzfVp9JufBeB%2BTAub4d5TTWo4bVk6kcN11ddUDzl824dfCsi3YBlAPmHDcK5%2Fwg9xs85W0j8RDv54FeiBUlz7WQEHeEb0N%2FUrq0JAzFIIFrq35p2J0nt0K1AYv7blmY67wWIgPBFlwhiSnFUvcnYYZskpwv7SlTcIDSLbajOjhF4jVZGyD%2FXvEulRv0%2F0UTOqBO4uE&X-Amz-Signature=b8525f432351519991da379a70e79d32dc0bc5c099420709da2533f37eb52386&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z744HWRV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI8F3k7UpyVuMZ0QKhwKm6suFsx08W0SRdKAd4X8v6mAiEAjPa%2BrdmblIhaghWYLUqGHCKzfxDkWg6%2FDdTXQOjoLdgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7g4WdYvMAFg13V%2BircA0%2BP0gSKpjFfmwe9GTd0StblHNm%2ByjtAtHeA0p9X8%2BcVSZIe7dMRZWh8nk%2FwpkMh9ieeic3O4ejuQoXvfpsKhlGzllycpt7XqRutDKwbzdAsW%2BRMYrNAV%2BwqJ%2FGFK1nLx1kJsh3HMFAC6sjj7GRd8r1AeL3iDdYpDoEeniT9Nv2uyCYXm8vYfFLmCd5HmNQDTDyM2I%2BeIL%2FAJtBLQQV2LiLWnMT5tBzS%2BdfPenBeRFLT5EZmOcLRx%2Bp4XiEvRIlXUz372kHaebMLjROASuGbxbbe1XhqjRqfl1BjFL4Zvq6ujvH5kcYqzfHVEt%2B8Bjq79zW1IVLr9u2XoLFbnrxNO%2F1kb5zEPp8lA6iFM2t%2BpU8XHvHo8Q2l0sJOM0nzeYBX9TgmdqXzR7MlFaP%2Fdvujmbc%2FsgPGleLwSi%2BLw7NdwUjvkGm%2FOXZIOs6LbR3UH7X9yd6nHVVjvftb3ghUgO2tf%2FPEME4PYJaonbBd184AJVotx5m61eLw%2FeTreSb1HyR32uAv8CqXOq4SEWEnlU1VTmhbalUbrx6yYWe1TyoGI4P0VsFtQQsk6qUkO3kg9SgAnITjlmaBrfWWi7Na56iUKpvqQ3nHcZhGWWH2MTH9%2F79auV1qpufEqvjRPEtFMOD5kL4GOqUBLCjFOrlivQeWvpT8iTkIktEzfVp9JufBeB%2BTAub4d5TTWo4bVk6kcN11ddUDzl824dfCsi3YBlAPmHDcK5%2Fwg9xs85W0j8RDv54FeiBUlz7WQEHeEb0N%2FUrq0JAzFIIFrq35p2J0nt0K1AYv7blmY67wWIgPBFlwhiSnFUvcnYYZskpwv7SlTcIDSLbajOjhF4jVZGyD%2FXvEulRv0%2F0UTOqBO4uE&X-Amz-Signature=d052a7bc477fee5b71d6ae36d3e4c08b0d82614c3c850e85c60b4b4c22f7543c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z744HWRV%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAI8F3k7UpyVuMZ0QKhwKm6suFsx08W0SRdKAd4X8v6mAiEAjPa%2BrdmblIhaghWYLUqGHCKzfxDkWg6%2FDdTXQOjoLdgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7g4WdYvMAFg13V%2BircA0%2BP0gSKpjFfmwe9GTd0StblHNm%2ByjtAtHeA0p9X8%2BcVSZIe7dMRZWh8nk%2FwpkMh9ieeic3O4ejuQoXvfpsKhlGzllycpt7XqRutDKwbzdAsW%2BRMYrNAV%2BwqJ%2FGFK1nLx1kJsh3HMFAC6sjj7GRd8r1AeL3iDdYpDoEeniT9Nv2uyCYXm8vYfFLmCd5HmNQDTDyM2I%2BeIL%2FAJtBLQQV2LiLWnMT5tBzS%2BdfPenBeRFLT5EZmOcLRx%2Bp4XiEvRIlXUz372kHaebMLjROASuGbxbbe1XhqjRqfl1BjFL4Zvq6ujvH5kcYqzfHVEt%2B8Bjq79zW1IVLr9u2XoLFbnrxNO%2F1kb5zEPp8lA6iFM2t%2BpU8XHvHo8Q2l0sJOM0nzeYBX9TgmdqXzR7MlFaP%2Fdvujmbc%2FsgPGleLwSi%2BLw7NdwUjvkGm%2FOXZIOs6LbR3UH7X9yd6nHVVjvftb3ghUgO2tf%2FPEME4PYJaonbBd184AJVotx5m61eLw%2FeTreSb1HyR32uAv8CqXOq4SEWEnlU1VTmhbalUbrx6yYWe1TyoGI4P0VsFtQQsk6qUkO3kg9SgAnITjlmaBrfWWi7Na56iUKpvqQ3nHcZhGWWH2MTH9%2F79auV1qpufEqvjRPEtFMOD5kL4GOqUBLCjFOrlivQeWvpT8iTkIktEzfVp9JufBeB%2BTAub4d5TTWo4bVk6kcN11ddUDzl824dfCsi3YBlAPmHDcK5%2Fwg9xs85W0j8RDv54FeiBUlz7WQEHeEb0N%2FUrq0JAzFIIFrq35p2J0nt0K1AYv7blmY67wWIgPBFlwhiSnFUvcnYYZskpwv7SlTcIDSLbajOjhF4jVZGyD%2FXvEulRv0%2F0UTOqBO4uE&X-Amz-Signature=ab8ae3b61afc2b74819ade07b733b21b04cedf0fa71eff72201889780d223df5&X-Amz-SignedHeaders=host&x-id=GetObject)
