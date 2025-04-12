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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KW5JCBW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDkeIo72JCXP%2FH1WTDwGOm8jL9%2FJHSdhrPU5DYd%2F6Q3KQIgWzMnLGKvJ5DXDhQiizK%2BTDeqM9ubeXYmxHB%2FWFusxz4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpLziNT42PFoFlctircA08cQ4ccIRaokGvRpW6kcCT02miS%2Bm9fd%2B2wEkrSo5lk5DYevPTKyAYGIryWMY1uconzxv8A4DY%2FBMxF9H4EwME1S5jXKqVxJZsCBGXlaMuj6KDWtwc0lw7Ta79TW6ylLebd2kQ1uKH5pFkU%2FDmdoBlvo%2F8uP61%2BG%2BIMmZh762Y2BgqCiZVxoAM7Im1icI4cP8XeV8DzT3ogbUn%2BJNm5PBMHL4IdFPyp%2BPcL%2Fa%2FaL%2B3agFUjsLYXp%2FoTuip90lEOoxOrVuOATuG0jKze1M1fIRu2dpSmT8kwBhIa3kRgx5HdfeCdms4MrlWJ9efSGn%2B13iznQPyn%2FXFZupKXa8GGkmufkkjHXiRhXfBf6iLJNUceqWJIHRUy00atrs4HQJF7maZxxi1iAIsOpeyRuC8gObvxvd%2Bydd5BzJBxF6MI5MwaBdUT%2B4Nn0j92%2FELAXorByduP9BJ9tlJI8Z8C1%2BVvio86oDjEa%2FqJa6gWDHfY1ptmbCdntxddik4KX91HWXElefWcChFVPl2UWgS%2FZKZqdoVJT6BBFUJ41bx9YYLsOoSOTDFneBCv0IlJUZ4Hv02aTYAqEDPD0gSCSClenCGUGaubpsRFX63OfpEaRre%2BX2vxijceOnUiFkHfHzAKMJ7U578GOqUB3eLj5tVlliQ3Z3dHVqP%2BnUoLfYrGOht2TV8EeLsdrh7HzY27HWX8chaWV2bFtgMgag2mu8HGpNZKgMtJpq5Mc0gSjzJFPHDiTovKyB8edVvugG3YSdvKOGs7a1BU5jJtydeWKrxAjtGMcCzGi0a99n6IJYAyhnN195AnlHiubsc2%2B8EG2Z6AybRiu45s2nWWXFPF4Z9GY2qyEFsHSUnF3zbV1QuW&X-Amz-Signature=1198a04f7700c2240a7632fed26b67c8d57a3454a2ae29d2f7d069311d874b55&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KW5JCBW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDkeIo72JCXP%2FH1WTDwGOm8jL9%2FJHSdhrPU5DYd%2F6Q3KQIgWzMnLGKvJ5DXDhQiizK%2BTDeqM9ubeXYmxHB%2FWFusxz4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpLziNT42PFoFlctircA08cQ4ccIRaokGvRpW6kcCT02miS%2Bm9fd%2B2wEkrSo5lk5DYevPTKyAYGIryWMY1uconzxv8A4DY%2FBMxF9H4EwME1S5jXKqVxJZsCBGXlaMuj6KDWtwc0lw7Ta79TW6ylLebd2kQ1uKH5pFkU%2FDmdoBlvo%2F8uP61%2BG%2BIMmZh762Y2BgqCiZVxoAM7Im1icI4cP8XeV8DzT3ogbUn%2BJNm5PBMHL4IdFPyp%2BPcL%2Fa%2FaL%2B3agFUjsLYXp%2FoTuip90lEOoxOrVuOATuG0jKze1M1fIRu2dpSmT8kwBhIa3kRgx5HdfeCdms4MrlWJ9efSGn%2B13iznQPyn%2FXFZupKXa8GGkmufkkjHXiRhXfBf6iLJNUceqWJIHRUy00atrs4HQJF7maZxxi1iAIsOpeyRuC8gObvxvd%2Bydd5BzJBxF6MI5MwaBdUT%2B4Nn0j92%2FELAXorByduP9BJ9tlJI8Z8C1%2BVvio86oDjEa%2FqJa6gWDHfY1ptmbCdntxddik4KX91HWXElefWcChFVPl2UWgS%2FZKZqdoVJT6BBFUJ41bx9YYLsOoSOTDFneBCv0IlJUZ4Hv02aTYAqEDPD0gSCSClenCGUGaubpsRFX63OfpEaRre%2BX2vxijceOnUiFkHfHzAKMJ7U578GOqUB3eLj5tVlliQ3Z3dHVqP%2BnUoLfYrGOht2TV8EeLsdrh7HzY27HWX8chaWV2bFtgMgag2mu8HGpNZKgMtJpq5Mc0gSjzJFPHDiTovKyB8edVvugG3YSdvKOGs7a1BU5jJtydeWKrxAjtGMcCzGi0a99n6IJYAyhnN195AnlHiubsc2%2B8EG2Z6AybRiu45s2nWWXFPF4Z9GY2qyEFsHSUnF3zbV1QuW&X-Amz-Signature=2205df226182f02a1f7f3c3a13254b12fa5828a8d46f24b5960b6fa94261b91d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KW5JCBW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDkeIo72JCXP%2FH1WTDwGOm8jL9%2FJHSdhrPU5DYd%2F6Q3KQIgWzMnLGKvJ5DXDhQiizK%2BTDeqM9ubeXYmxHB%2FWFusxz4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpLziNT42PFoFlctircA08cQ4ccIRaokGvRpW6kcCT02miS%2Bm9fd%2B2wEkrSo5lk5DYevPTKyAYGIryWMY1uconzxv8A4DY%2FBMxF9H4EwME1S5jXKqVxJZsCBGXlaMuj6KDWtwc0lw7Ta79TW6ylLebd2kQ1uKH5pFkU%2FDmdoBlvo%2F8uP61%2BG%2BIMmZh762Y2BgqCiZVxoAM7Im1icI4cP8XeV8DzT3ogbUn%2BJNm5PBMHL4IdFPyp%2BPcL%2Fa%2FaL%2B3agFUjsLYXp%2FoTuip90lEOoxOrVuOATuG0jKze1M1fIRu2dpSmT8kwBhIa3kRgx5HdfeCdms4MrlWJ9efSGn%2B13iznQPyn%2FXFZupKXa8GGkmufkkjHXiRhXfBf6iLJNUceqWJIHRUy00atrs4HQJF7maZxxi1iAIsOpeyRuC8gObvxvd%2Bydd5BzJBxF6MI5MwaBdUT%2B4Nn0j92%2FELAXorByduP9BJ9tlJI8Z8C1%2BVvio86oDjEa%2FqJa6gWDHfY1ptmbCdntxddik4KX91HWXElefWcChFVPl2UWgS%2FZKZqdoVJT6BBFUJ41bx9YYLsOoSOTDFneBCv0IlJUZ4Hv02aTYAqEDPD0gSCSClenCGUGaubpsRFX63OfpEaRre%2BX2vxijceOnUiFkHfHzAKMJ7U578GOqUB3eLj5tVlliQ3Z3dHVqP%2BnUoLfYrGOht2TV8EeLsdrh7HzY27HWX8chaWV2bFtgMgag2mu8HGpNZKgMtJpq5Mc0gSjzJFPHDiTovKyB8edVvugG3YSdvKOGs7a1BU5jJtydeWKrxAjtGMcCzGi0a99n6IJYAyhnN195AnlHiubsc2%2B8EG2Z6AybRiu45s2nWWXFPF4Z9GY2qyEFsHSUnF3zbV1QuW&X-Amz-Signature=14f2e2cce276867b76c9c1a43a321da3cddc6a031d26388eda6a5268a3782d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KW5JCBW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDkeIo72JCXP%2FH1WTDwGOm8jL9%2FJHSdhrPU5DYd%2F6Q3KQIgWzMnLGKvJ5DXDhQiizK%2BTDeqM9ubeXYmxHB%2FWFusxz4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpLziNT42PFoFlctircA08cQ4ccIRaokGvRpW6kcCT02miS%2Bm9fd%2B2wEkrSo5lk5DYevPTKyAYGIryWMY1uconzxv8A4DY%2FBMxF9H4EwME1S5jXKqVxJZsCBGXlaMuj6KDWtwc0lw7Ta79TW6ylLebd2kQ1uKH5pFkU%2FDmdoBlvo%2F8uP61%2BG%2BIMmZh762Y2BgqCiZVxoAM7Im1icI4cP8XeV8DzT3ogbUn%2BJNm5PBMHL4IdFPyp%2BPcL%2Fa%2FaL%2B3agFUjsLYXp%2FoTuip90lEOoxOrVuOATuG0jKze1M1fIRu2dpSmT8kwBhIa3kRgx5HdfeCdms4MrlWJ9efSGn%2B13iznQPyn%2FXFZupKXa8GGkmufkkjHXiRhXfBf6iLJNUceqWJIHRUy00atrs4HQJF7maZxxi1iAIsOpeyRuC8gObvxvd%2Bydd5BzJBxF6MI5MwaBdUT%2B4Nn0j92%2FELAXorByduP9BJ9tlJI8Z8C1%2BVvio86oDjEa%2FqJa6gWDHfY1ptmbCdntxddik4KX91HWXElefWcChFVPl2UWgS%2FZKZqdoVJT6BBFUJ41bx9YYLsOoSOTDFneBCv0IlJUZ4Hv02aTYAqEDPD0gSCSClenCGUGaubpsRFX63OfpEaRre%2BX2vxijceOnUiFkHfHzAKMJ7U578GOqUB3eLj5tVlliQ3Z3dHVqP%2BnUoLfYrGOht2TV8EeLsdrh7HzY27HWX8chaWV2bFtgMgag2mu8HGpNZKgMtJpq5Mc0gSjzJFPHDiTovKyB8edVvugG3YSdvKOGs7a1BU5jJtydeWKrxAjtGMcCzGi0a99n6IJYAyhnN195AnlHiubsc2%2B8EG2Z6AybRiu45s2nWWXFPF4Z9GY2qyEFsHSUnF3zbV1QuW&X-Amz-Signature=f7595c342884f949b17dced550fe8ee62e5f600117fdf2dddceaab0962f24e19&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KW5JCBW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDkeIo72JCXP%2FH1WTDwGOm8jL9%2FJHSdhrPU5DYd%2F6Q3KQIgWzMnLGKvJ5DXDhQiizK%2BTDeqM9ubeXYmxHB%2FWFusxz4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpLziNT42PFoFlctircA08cQ4ccIRaokGvRpW6kcCT02miS%2Bm9fd%2B2wEkrSo5lk5DYevPTKyAYGIryWMY1uconzxv8A4DY%2FBMxF9H4EwME1S5jXKqVxJZsCBGXlaMuj6KDWtwc0lw7Ta79TW6ylLebd2kQ1uKH5pFkU%2FDmdoBlvo%2F8uP61%2BG%2BIMmZh762Y2BgqCiZVxoAM7Im1icI4cP8XeV8DzT3ogbUn%2BJNm5PBMHL4IdFPyp%2BPcL%2Fa%2FaL%2B3agFUjsLYXp%2FoTuip90lEOoxOrVuOATuG0jKze1M1fIRu2dpSmT8kwBhIa3kRgx5HdfeCdms4MrlWJ9efSGn%2B13iznQPyn%2FXFZupKXa8GGkmufkkjHXiRhXfBf6iLJNUceqWJIHRUy00atrs4HQJF7maZxxi1iAIsOpeyRuC8gObvxvd%2Bydd5BzJBxF6MI5MwaBdUT%2B4Nn0j92%2FELAXorByduP9BJ9tlJI8Z8C1%2BVvio86oDjEa%2FqJa6gWDHfY1ptmbCdntxddik4KX91HWXElefWcChFVPl2UWgS%2FZKZqdoVJT6BBFUJ41bx9YYLsOoSOTDFneBCv0IlJUZ4Hv02aTYAqEDPD0gSCSClenCGUGaubpsRFX63OfpEaRre%2BX2vxijceOnUiFkHfHzAKMJ7U578GOqUB3eLj5tVlliQ3Z3dHVqP%2BnUoLfYrGOht2TV8EeLsdrh7HzY27HWX8chaWV2bFtgMgag2mu8HGpNZKgMtJpq5Mc0gSjzJFPHDiTovKyB8edVvugG3YSdvKOGs7a1BU5jJtydeWKrxAjtGMcCzGi0a99n6IJYAyhnN195AnlHiubsc2%2B8EG2Z6AybRiu45s2nWWXFPF4Z9GY2qyEFsHSUnF3zbV1QuW&X-Amz-Signature=4747609d78da4d224efc462c5dff81aa3d3cf5c0f62debf2c7887a98b2d55fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KW5JCBW%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDkeIo72JCXP%2FH1WTDwGOm8jL9%2FJHSdhrPU5DYd%2F6Q3KQIgWzMnLGKvJ5DXDhQiizK%2BTDeqM9ubeXYmxHB%2FWFusxz4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpLziNT42PFoFlctircA08cQ4ccIRaokGvRpW6kcCT02miS%2Bm9fd%2B2wEkrSo5lk5DYevPTKyAYGIryWMY1uconzxv8A4DY%2FBMxF9H4EwME1S5jXKqVxJZsCBGXlaMuj6KDWtwc0lw7Ta79TW6ylLebd2kQ1uKH5pFkU%2FDmdoBlvo%2F8uP61%2BG%2BIMmZh762Y2BgqCiZVxoAM7Im1icI4cP8XeV8DzT3ogbUn%2BJNm5PBMHL4IdFPyp%2BPcL%2Fa%2FaL%2B3agFUjsLYXp%2FoTuip90lEOoxOrVuOATuG0jKze1M1fIRu2dpSmT8kwBhIa3kRgx5HdfeCdms4MrlWJ9efSGn%2B13iznQPyn%2FXFZupKXa8GGkmufkkjHXiRhXfBf6iLJNUceqWJIHRUy00atrs4HQJF7maZxxi1iAIsOpeyRuC8gObvxvd%2Bydd5BzJBxF6MI5MwaBdUT%2B4Nn0j92%2FELAXorByduP9BJ9tlJI8Z8C1%2BVvio86oDjEa%2FqJa6gWDHfY1ptmbCdntxddik4KX91HWXElefWcChFVPl2UWgS%2FZKZqdoVJT6BBFUJ41bx9YYLsOoSOTDFneBCv0IlJUZ4Hv02aTYAqEDPD0gSCSClenCGUGaubpsRFX63OfpEaRre%2BX2vxijceOnUiFkHfHzAKMJ7U578GOqUB3eLj5tVlliQ3Z3dHVqP%2BnUoLfYrGOht2TV8EeLsdrh7HzY27HWX8chaWV2bFtgMgag2mu8HGpNZKgMtJpq5Mc0gSjzJFPHDiTovKyB8edVvugG3YSdvKOGs7a1BU5jJtydeWKrxAjtGMcCzGi0a99n6IJYAyhnN195AnlHiubsc2%2B8EG2Z6AybRiu45s2nWWXFPF4Z9GY2qyEFsHSUnF3zbV1QuW&X-Amz-Signature=514d85ca2ffa7031845e31b56d19ef909aecb3b16b0b856be94132bdba081d17&X-Amz-SignedHeaders=host&x-id=GetObject)
