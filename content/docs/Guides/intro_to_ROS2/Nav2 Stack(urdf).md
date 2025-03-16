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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWT3BA2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUT4rCiS4tIQNRLMoiAXAJt9jbs9C7TVBEZIs1wpp2fAiA3h%2BWP3gpnJHAz%2F49UW0GG2GOhTniR8h8em112Lqj15yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMoLnI0T7qEjg6WMIJKtwD1eSxJ63bi9zHbmNher9%2Bu1sLjrGnMfyNcrmA8SS4Tu0LCqcWNSx4dYgVNwOFzFapcJ%2FL7IEqpEwlLq70SINOGTepUVhCjVTHFl28sd%2F7bRa3HbhbrMj%2F8NaXe4xnHxUac6jEIw9wlil1DF27V9xPXckt%2FeuBCgspE1%2FQDKqMSzhpdjQKRcPda2d6zmkH1jhG%2FODqE36BVCGu0hvIc8LPbFk3prHjwW63eyHDaMC5VRVnC8%2BqIT1XgibK0VY5pEo%2FPnxBH60L1xweXjSMv9cxWQUrOKkWhj029KkPGXTakjsKvXcArHH6gStsgXMqlipIoPHRar2XnYvfiknn9ZO88X2j%2F0YT7c1dfi%2Fh2P4EQDDwnHfiCOiEdNfXaLDznzSfldGrYfrHAkYqis9Ir%2FI7oqAlKJtD88sb6MO%2B0TrAvyGCE1KwDV28M%2Fp61dmaq2uPrnubTXc%2B1SUh0hXylTSGlfuco%2Fv6v8orKcbtsy0HM4HY8SedUR89%2FZwVm3Hqv6euiPuPLPhGTKaEmU%2BG30wuODEoQF4qUlHxRcje4ES98yrcsjMt01F8k1U3bv5CqHKJ%2FMtXwfGKiGyvDEGftQjuUBD5LFFUTPYNZxbfZ1wFxV3jnb7GrUfXasolHXsw1erZvgY6pgEdxEBhmpYkI0hCwZpmSkLYIcSeGnZATOqru0LeZAQSaUiEi5aLjXcBhX9X37gCXess78osrI8ZNmWaQfoLl3mmw5VFq2OljxqZSVnI4gVugD5F%2BgaIq7NQlI8Yrwl2aBMBHXpZW%2BeRvkuxOhG0l3bywEdZhd9934rYZYiToyGww6Yq4DaW3nYAxQyqrcYbgM%2FRldZtACpolEsUP%2FaUlTJlRvYZ459V&X-Amz-Signature=5cb76713141f4ff6d710ad032bd6b23ff5e3b891c68bbb80d37aab38181b9b75&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWT3BA2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUT4rCiS4tIQNRLMoiAXAJt9jbs9C7TVBEZIs1wpp2fAiA3h%2BWP3gpnJHAz%2F49UW0GG2GOhTniR8h8em112Lqj15yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMoLnI0T7qEjg6WMIJKtwD1eSxJ63bi9zHbmNher9%2Bu1sLjrGnMfyNcrmA8SS4Tu0LCqcWNSx4dYgVNwOFzFapcJ%2FL7IEqpEwlLq70SINOGTepUVhCjVTHFl28sd%2F7bRa3HbhbrMj%2F8NaXe4xnHxUac6jEIw9wlil1DF27V9xPXckt%2FeuBCgspE1%2FQDKqMSzhpdjQKRcPda2d6zmkH1jhG%2FODqE36BVCGu0hvIc8LPbFk3prHjwW63eyHDaMC5VRVnC8%2BqIT1XgibK0VY5pEo%2FPnxBH60L1xweXjSMv9cxWQUrOKkWhj029KkPGXTakjsKvXcArHH6gStsgXMqlipIoPHRar2XnYvfiknn9ZO88X2j%2F0YT7c1dfi%2Fh2P4EQDDwnHfiCOiEdNfXaLDznzSfldGrYfrHAkYqis9Ir%2FI7oqAlKJtD88sb6MO%2B0TrAvyGCE1KwDV28M%2Fp61dmaq2uPrnubTXc%2B1SUh0hXylTSGlfuco%2Fv6v8orKcbtsy0HM4HY8SedUR89%2FZwVm3Hqv6euiPuPLPhGTKaEmU%2BG30wuODEoQF4qUlHxRcje4ES98yrcsjMt01F8k1U3bv5CqHKJ%2FMtXwfGKiGyvDEGftQjuUBD5LFFUTPYNZxbfZ1wFxV3jnb7GrUfXasolHXsw1erZvgY6pgEdxEBhmpYkI0hCwZpmSkLYIcSeGnZATOqru0LeZAQSaUiEi5aLjXcBhX9X37gCXess78osrI8ZNmWaQfoLl3mmw5VFq2OljxqZSVnI4gVugD5F%2BgaIq7NQlI8Yrwl2aBMBHXpZW%2BeRvkuxOhG0l3bywEdZhd9934rYZYiToyGww6Yq4DaW3nYAxQyqrcYbgM%2FRldZtACpolEsUP%2FaUlTJlRvYZ459V&X-Amz-Signature=a38a632a2284c4bcfb6b49c6591289faf202a6a356efa1926ad7333e5195687c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWT3BA2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUT4rCiS4tIQNRLMoiAXAJt9jbs9C7TVBEZIs1wpp2fAiA3h%2BWP3gpnJHAz%2F49UW0GG2GOhTniR8h8em112Lqj15yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMoLnI0T7qEjg6WMIJKtwD1eSxJ63bi9zHbmNher9%2Bu1sLjrGnMfyNcrmA8SS4Tu0LCqcWNSx4dYgVNwOFzFapcJ%2FL7IEqpEwlLq70SINOGTepUVhCjVTHFl28sd%2F7bRa3HbhbrMj%2F8NaXe4xnHxUac6jEIw9wlil1DF27V9xPXckt%2FeuBCgspE1%2FQDKqMSzhpdjQKRcPda2d6zmkH1jhG%2FODqE36BVCGu0hvIc8LPbFk3prHjwW63eyHDaMC5VRVnC8%2BqIT1XgibK0VY5pEo%2FPnxBH60L1xweXjSMv9cxWQUrOKkWhj029KkPGXTakjsKvXcArHH6gStsgXMqlipIoPHRar2XnYvfiknn9ZO88X2j%2F0YT7c1dfi%2Fh2P4EQDDwnHfiCOiEdNfXaLDznzSfldGrYfrHAkYqis9Ir%2FI7oqAlKJtD88sb6MO%2B0TrAvyGCE1KwDV28M%2Fp61dmaq2uPrnubTXc%2B1SUh0hXylTSGlfuco%2Fv6v8orKcbtsy0HM4HY8SedUR89%2FZwVm3Hqv6euiPuPLPhGTKaEmU%2BG30wuODEoQF4qUlHxRcje4ES98yrcsjMt01F8k1U3bv5CqHKJ%2FMtXwfGKiGyvDEGftQjuUBD5LFFUTPYNZxbfZ1wFxV3jnb7GrUfXasolHXsw1erZvgY6pgEdxEBhmpYkI0hCwZpmSkLYIcSeGnZATOqru0LeZAQSaUiEi5aLjXcBhX9X37gCXess78osrI8ZNmWaQfoLl3mmw5VFq2OljxqZSVnI4gVugD5F%2BgaIq7NQlI8Yrwl2aBMBHXpZW%2BeRvkuxOhG0l3bywEdZhd9934rYZYiToyGww6Yq4DaW3nYAxQyqrcYbgM%2FRldZtACpolEsUP%2FaUlTJlRvYZ459V&X-Amz-Signature=3ea9ab800fedacd25fc48da35b6de94c52f2e907e010344a43aef18ac05bc9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWT3BA2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUT4rCiS4tIQNRLMoiAXAJt9jbs9C7TVBEZIs1wpp2fAiA3h%2BWP3gpnJHAz%2F49UW0GG2GOhTniR8h8em112Lqj15yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMoLnI0T7qEjg6WMIJKtwD1eSxJ63bi9zHbmNher9%2Bu1sLjrGnMfyNcrmA8SS4Tu0LCqcWNSx4dYgVNwOFzFapcJ%2FL7IEqpEwlLq70SINOGTepUVhCjVTHFl28sd%2F7bRa3HbhbrMj%2F8NaXe4xnHxUac6jEIw9wlil1DF27V9xPXckt%2FeuBCgspE1%2FQDKqMSzhpdjQKRcPda2d6zmkH1jhG%2FODqE36BVCGu0hvIc8LPbFk3prHjwW63eyHDaMC5VRVnC8%2BqIT1XgibK0VY5pEo%2FPnxBH60L1xweXjSMv9cxWQUrOKkWhj029KkPGXTakjsKvXcArHH6gStsgXMqlipIoPHRar2XnYvfiknn9ZO88X2j%2F0YT7c1dfi%2Fh2P4EQDDwnHfiCOiEdNfXaLDznzSfldGrYfrHAkYqis9Ir%2FI7oqAlKJtD88sb6MO%2B0TrAvyGCE1KwDV28M%2Fp61dmaq2uPrnubTXc%2B1SUh0hXylTSGlfuco%2Fv6v8orKcbtsy0HM4HY8SedUR89%2FZwVm3Hqv6euiPuPLPhGTKaEmU%2BG30wuODEoQF4qUlHxRcje4ES98yrcsjMt01F8k1U3bv5CqHKJ%2FMtXwfGKiGyvDEGftQjuUBD5LFFUTPYNZxbfZ1wFxV3jnb7GrUfXasolHXsw1erZvgY6pgEdxEBhmpYkI0hCwZpmSkLYIcSeGnZATOqru0LeZAQSaUiEi5aLjXcBhX9X37gCXess78osrI8ZNmWaQfoLl3mmw5VFq2OljxqZSVnI4gVugD5F%2BgaIq7NQlI8Yrwl2aBMBHXpZW%2BeRvkuxOhG0l3bywEdZhd9934rYZYiToyGww6Yq4DaW3nYAxQyqrcYbgM%2FRldZtACpolEsUP%2FaUlTJlRvYZ459V&X-Amz-Signature=9f2379239f77d95d4b0a98bc3949d8faaf15f0113be8043bb866e7471ae0ec7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWT3BA2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUT4rCiS4tIQNRLMoiAXAJt9jbs9C7TVBEZIs1wpp2fAiA3h%2BWP3gpnJHAz%2F49UW0GG2GOhTniR8h8em112Lqj15yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMoLnI0T7qEjg6WMIJKtwD1eSxJ63bi9zHbmNher9%2Bu1sLjrGnMfyNcrmA8SS4Tu0LCqcWNSx4dYgVNwOFzFapcJ%2FL7IEqpEwlLq70SINOGTepUVhCjVTHFl28sd%2F7bRa3HbhbrMj%2F8NaXe4xnHxUac6jEIw9wlil1DF27V9xPXckt%2FeuBCgspE1%2FQDKqMSzhpdjQKRcPda2d6zmkH1jhG%2FODqE36BVCGu0hvIc8LPbFk3prHjwW63eyHDaMC5VRVnC8%2BqIT1XgibK0VY5pEo%2FPnxBH60L1xweXjSMv9cxWQUrOKkWhj029KkPGXTakjsKvXcArHH6gStsgXMqlipIoPHRar2XnYvfiknn9ZO88X2j%2F0YT7c1dfi%2Fh2P4EQDDwnHfiCOiEdNfXaLDznzSfldGrYfrHAkYqis9Ir%2FI7oqAlKJtD88sb6MO%2B0TrAvyGCE1KwDV28M%2Fp61dmaq2uPrnubTXc%2B1SUh0hXylTSGlfuco%2Fv6v8orKcbtsy0HM4HY8SedUR89%2FZwVm3Hqv6euiPuPLPhGTKaEmU%2BG30wuODEoQF4qUlHxRcje4ES98yrcsjMt01F8k1U3bv5CqHKJ%2FMtXwfGKiGyvDEGftQjuUBD5LFFUTPYNZxbfZ1wFxV3jnb7GrUfXasolHXsw1erZvgY6pgEdxEBhmpYkI0hCwZpmSkLYIcSeGnZATOqru0LeZAQSaUiEi5aLjXcBhX9X37gCXess78osrI8ZNmWaQfoLl3mmw5VFq2OljxqZSVnI4gVugD5F%2BgaIq7NQlI8Yrwl2aBMBHXpZW%2BeRvkuxOhG0l3bywEdZhd9934rYZYiToyGww6Yq4DaW3nYAxQyqrcYbgM%2FRldZtACpolEsUP%2FaUlTJlRvYZ459V&X-Amz-Signature=57a594b23293327db368ab7f132eeccb38c571921473ada01f420c0d73c2dfc2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWT3BA2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUT4rCiS4tIQNRLMoiAXAJt9jbs9C7TVBEZIs1wpp2fAiA3h%2BWP3gpnJHAz%2F49UW0GG2GOhTniR8h8em112Lqj15yr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMoLnI0T7qEjg6WMIJKtwD1eSxJ63bi9zHbmNher9%2Bu1sLjrGnMfyNcrmA8SS4Tu0LCqcWNSx4dYgVNwOFzFapcJ%2FL7IEqpEwlLq70SINOGTepUVhCjVTHFl28sd%2F7bRa3HbhbrMj%2F8NaXe4xnHxUac6jEIw9wlil1DF27V9xPXckt%2FeuBCgspE1%2FQDKqMSzhpdjQKRcPda2d6zmkH1jhG%2FODqE36BVCGu0hvIc8LPbFk3prHjwW63eyHDaMC5VRVnC8%2BqIT1XgibK0VY5pEo%2FPnxBH60L1xweXjSMv9cxWQUrOKkWhj029KkPGXTakjsKvXcArHH6gStsgXMqlipIoPHRar2XnYvfiknn9ZO88X2j%2F0YT7c1dfi%2Fh2P4EQDDwnHfiCOiEdNfXaLDznzSfldGrYfrHAkYqis9Ir%2FI7oqAlKJtD88sb6MO%2B0TrAvyGCE1KwDV28M%2Fp61dmaq2uPrnubTXc%2B1SUh0hXylTSGlfuco%2Fv6v8orKcbtsy0HM4HY8SedUR89%2FZwVm3Hqv6euiPuPLPhGTKaEmU%2BG30wuODEoQF4qUlHxRcje4ES98yrcsjMt01F8k1U3bv5CqHKJ%2FMtXwfGKiGyvDEGftQjuUBD5LFFUTPYNZxbfZ1wFxV3jnb7GrUfXasolHXsw1erZvgY6pgEdxEBhmpYkI0hCwZpmSkLYIcSeGnZATOqru0LeZAQSaUiEi5aLjXcBhX9X37gCXess78osrI8ZNmWaQfoLl3mmw5VFq2OljxqZSVnI4gVugD5F%2BgaIq7NQlI8Yrwl2aBMBHXpZW%2BeRvkuxOhG0l3bywEdZhd9934rYZYiToyGww6Yq4DaW3nYAxQyqrcYbgM%2FRldZtACpolEsUP%2FaUlTJlRvYZ459V&X-Amz-Signature=8f7d7ef987d6724772f6a8b573ef2f4e37ef2d3800ca0da207c611e92b6458fe&X-Amz-SignedHeaders=host&x-id=GetObject)
