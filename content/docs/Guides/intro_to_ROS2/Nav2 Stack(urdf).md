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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYR2BRZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYXlnpLJhMsjWR35xdYXdrpcqJ1nszh%2FfFhkI1vbuCxAIgVfGfrsxL6%2FhLNKyNFssaCQUffiIq5UMIVHSU8NH59VEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT1lkxmK%2BPYWvTw%2FyrcAzQRUqW9x0MZcwuzR%2F2C%2FQZ6AwM6Q0J8i5E2vLzmzCADJ8F9P7h5R0H4tt9Z%2FMiExXYQ7zMi%2BEwPJDMtVxOraPGQ480%2F2nOFthj8fjM%2FZKyi%2Bc6XT8J3v%2Fu9vgMdKMZ1KmMymdUJtggfS10xS0riaPlxcCHcTUzPCaCfy%2BTKIMDkZZ%2BZqEUNvZ25sbVi1WTQDcUkvSZ8LE2QXfnMMzLqG6wg9KsEgRmM5ZF0pIkk1CriKYpgKabOKpNSyRm2DFgcFfotNO7wqleQYTFSvLm30cGTyymIR1NXdDO1G9VXP%2F5cg30Zeemxf6C%2FB2FaU19ei%2BnTLZnc%2FucfEOrQvOmP8dsx9FPt33vrQGJuOSkIQysTexkjJ62UJ%2BOIJG%2FlEmCkADB5cSqhTE3ZUJ4%2B0miJoZtEk8z%2BFmsbmBBjc5JYMzGkvWE1XBOyfwzLVe%2B0pv675rSDwQWfZroU8LJEraX1r5qm5p5VTgrMBE2evgh6PFHHDqaJ4qWIVeWFKZs0TQz5OAmxklT1YYBfu8s7MKdgJpfpJbFwhfq1bNM8PH3WmAgG6mac6lncFbksjDNjmCrkvhOzFfLz%2Br33zqLmGVp4tUXwCtr0X1lsLGR9sHin83mALL4GsXX%2FyVtzOKpoMIOw8L8GOqUB%2FogdEMDxp8BAdVwRkG3G5nWGzF1b1SdHjkRTn3m%2FkYNkvmyYnh2zILcs7O8Nx%2FaFPZ2ns%2BcM4oNKVmFtrxdBX8PCiehwzLSJkWxYXdIqk9en1o7u2kvfqMo33zjaHHCZtXxivIjHcUVFhktRVhTJLaWg5LHcfeAn6uvAL6OVFyf88DwQm8yUeKJqwxKMYboDJeHjepH1mPhwkP%2BOcq0%2B2Zw2sg%2B4&X-Amz-Signature=f4222cd396587d747a532b751d6f04d2ffa918bd777d8e0b21ca566f68ff9ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYR2BRZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYXlnpLJhMsjWR35xdYXdrpcqJ1nszh%2FfFhkI1vbuCxAIgVfGfrsxL6%2FhLNKyNFssaCQUffiIq5UMIVHSU8NH59VEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT1lkxmK%2BPYWvTw%2FyrcAzQRUqW9x0MZcwuzR%2F2C%2FQZ6AwM6Q0J8i5E2vLzmzCADJ8F9P7h5R0H4tt9Z%2FMiExXYQ7zMi%2BEwPJDMtVxOraPGQ480%2F2nOFthj8fjM%2FZKyi%2Bc6XT8J3v%2Fu9vgMdKMZ1KmMymdUJtggfS10xS0riaPlxcCHcTUzPCaCfy%2BTKIMDkZZ%2BZqEUNvZ25sbVi1WTQDcUkvSZ8LE2QXfnMMzLqG6wg9KsEgRmM5ZF0pIkk1CriKYpgKabOKpNSyRm2DFgcFfotNO7wqleQYTFSvLm30cGTyymIR1NXdDO1G9VXP%2F5cg30Zeemxf6C%2FB2FaU19ei%2BnTLZnc%2FucfEOrQvOmP8dsx9FPt33vrQGJuOSkIQysTexkjJ62UJ%2BOIJG%2FlEmCkADB5cSqhTE3ZUJ4%2B0miJoZtEk8z%2BFmsbmBBjc5JYMzGkvWE1XBOyfwzLVe%2B0pv675rSDwQWfZroU8LJEraX1r5qm5p5VTgrMBE2evgh6PFHHDqaJ4qWIVeWFKZs0TQz5OAmxklT1YYBfu8s7MKdgJpfpJbFwhfq1bNM8PH3WmAgG6mac6lncFbksjDNjmCrkvhOzFfLz%2Br33zqLmGVp4tUXwCtr0X1lsLGR9sHin83mALL4GsXX%2FyVtzOKpoMIOw8L8GOqUB%2FogdEMDxp8BAdVwRkG3G5nWGzF1b1SdHjkRTn3m%2FkYNkvmyYnh2zILcs7O8Nx%2FaFPZ2ns%2BcM4oNKVmFtrxdBX8PCiehwzLSJkWxYXdIqk9en1o7u2kvfqMo33zjaHHCZtXxivIjHcUVFhktRVhTJLaWg5LHcfeAn6uvAL6OVFyf88DwQm8yUeKJqwxKMYboDJeHjepH1mPhwkP%2BOcq0%2B2Zw2sg%2B4&X-Amz-Signature=d79847a1f1609847388fa1f7c950f726fe70cf8ab280bbb6691cf367800167a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYR2BRZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYXlnpLJhMsjWR35xdYXdrpcqJ1nszh%2FfFhkI1vbuCxAIgVfGfrsxL6%2FhLNKyNFssaCQUffiIq5UMIVHSU8NH59VEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT1lkxmK%2BPYWvTw%2FyrcAzQRUqW9x0MZcwuzR%2F2C%2FQZ6AwM6Q0J8i5E2vLzmzCADJ8F9P7h5R0H4tt9Z%2FMiExXYQ7zMi%2BEwPJDMtVxOraPGQ480%2F2nOFthj8fjM%2FZKyi%2Bc6XT8J3v%2Fu9vgMdKMZ1KmMymdUJtggfS10xS0riaPlxcCHcTUzPCaCfy%2BTKIMDkZZ%2BZqEUNvZ25sbVi1WTQDcUkvSZ8LE2QXfnMMzLqG6wg9KsEgRmM5ZF0pIkk1CriKYpgKabOKpNSyRm2DFgcFfotNO7wqleQYTFSvLm30cGTyymIR1NXdDO1G9VXP%2F5cg30Zeemxf6C%2FB2FaU19ei%2BnTLZnc%2FucfEOrQvOmP8dsx9FPt33vrQGJuOSkIQysTexkjJ62UJ%2BOIJG%2FlEmCkADB5cSqhTE3ZUJ4%2B0miJoZtEk8z%2BFmsbmBBjc5JYMzGkvWE1XBOyfwzLVe%2B0pv675rSDwQWfZroU8LJEraX1r5qm5p5VTgrMBE2evgh6PFHHDqaJ4qWIVeWFKZs0TQz5OAmxklT1YYBfu8s7MKdgJpfpJbFwhfq1bNM8PH3WmAgG6mac6lncFbksjDNjmCrkvhOzFfLz%2Br33zqLmGVp4tUXwCtr0X1lsLGR9sHin83mALL4GsXX%2FyVtzOKpoMIOw8L8GOqUB%2FogdEMDxp8BAdVwRkG3G5nWGzF1b1SdHjkRTn3m%2FkYNkvmyYnh2zILcs7O8Nx%2FaFPZ2ns%2BcM4oNKVmFtrxdBX8PCiehwzLSJkWxYXdIqk9en1o7u2kvfqMo33zjaHHCZtXxivIjHcUVFhktRVhTJLaWg5LHcfeAn6uvAL6OVFyf88DwQm8yUeKJqwxKMYboDJeHjepH1mPhwkP%2BOcq0%2B2Zw2sg%2B4&X-Amz-Signature=dc18793de87e8e5368bb1669fa3d2bfddd023b72bae02bd69d19dfb5ba6c30f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYR2BRZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYXlnpLJhMsjWR35xdYXdrpcqJ1nszh%2FfFhkI1vbuCxAIgVfGfrsxL6%2FhLNKyNFssaCQUffiIq5UMIVHSU8NH59VEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT1lkxmK%2BPYWvTw%2FyrcAzQRUqW9x0MZcwuzR%2F2C%2FQZ6AwM6Q0J8i5E2vLzmzCADJ8F9P7h5R0H4tt9Z%2FMiExXYQ7zMi%2BEwPJDMtVxOraPGQ480%2F2nOFthj8fjM%2FZKyi%2Bc6XT8J3v%2Fu9vgMdKMZ1KmMymdUJtggfS10xS0riaPlxcCHcTUzPCaCfy%2BTKIMDkZZ%2BZqEUNvZ25sbVi1WTQDcUkvSZ8LE2QXfnMMzLqG6wg9KsEgRmM5ZF0pIkk1CriKYpgKabOKpNSyRm2DFgcFfotNO7wqleQYTFSvLm30cGTyymIR1NXdDO1G9VXP%2F5cg30Zeemxf6C%2FB2FaU19ei%2BnTLZnc%2FucfEOrQvOmP8dsx9FPt33vrQGJuOSkIQysTexkjJ62UJ%2BOIJG%2FlEmCkADB5cSqhTE3ZUJ4%2B0miJoZtEk8z%2BFmsbmBBjc5JYMzGkvWE1XBOyfwzLVe%2B0pv675rSDwQWfZroU8LJEraX1r5qm5p5VTgrMBE2evgh6PFHHDqaJ4qWIVeWFKZs0TQz5OAmxklT1YYBfu8s7MKdgJpfpJbFwhfq1bNM8PH3WmAgG6mac6lncFbksjDNjmCrkvhOzFfLz%2Br33zqLmGVp4tUXwCtr0X1lsLGR9sHin83mALL4GsXX%2FyVtzOKpoMIOw8L8GOqUB%2FogdEMDxp8BAdVwRkG3G5nWGzF1b1SdHjkRTn3m%2FkYNkvmyYnh2zILcs7O8Nx%2FaFPZ2ns%2BcM4oNKVmFtrxdBX8PCiehwzLSJkWxYXdIqk9en1o7u2kvfqMo33zjaHHCZtXxivIjHcUVFhktRVhTJLaWg5LHcfeAn6uvAL6OVFyf88DwQm8yUeKJqwxKMYboDJeHjepH1mPhwkP%2BOcq0%2B2Zw2sg%2B4&X-Amz-Signature=d0a426a65fe435e46b016a2a23bf683db9fab7ce1bdbb2d09bdd3c42c02d2304&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYR2BRZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYXlnpLJhMsjWR35xdYXdrpcqJ1nszh%2FfFhkI1vbuCxAIgVfGfrsxL6%2FhLNKyNFssaCQUffiIq5UMIVHSU8NH59VEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT1lkxmK%2BPYWvTw%2FyrcAzQRUqW9x0MZcwuzR%2F2C%2FQZ6AwM6Q0J8i5E2vLzmzCADJ8F9P7h5R0H4tt9Z%2FMiExXYQ7zMi%2BEwPJDMtVxOraPGQ480%2F2nOFthj8fjM%2FZKyi%2Bc6XT8J3v%2Fu9vgMdKMZ1KmMymdUJtggfS10xS0riaPlxcCHcTUzPCaCfy%2BTKIMDkZZ%2BZqEUNvZ25sbVi1WTQDcUkvSZ8LE2QXfnMMzLqG6wg9KsEgRmM5ZF0pIkk1CriKYpgKabOKpNSyRm2DFgcFfotNO7wqleQYTFSvLm30cGTyymIR1NXdDO1G9VXP%2F5cg30Zeemxf6C%2FB2FaU19ei%2BnTLZnc%2FucfEOrQvOmP8dsx9FPt33vrQGJuOSkIQysTexkjJ62UJ%2BOIJG%2FlEmCkADB5cSqhTE3ZUJ4%2B0miJoZtEk8z%2BFmsbmBBjc5JYMzGkvWE1XBOyfwzLVe%2B0pv675rSDwQWfZroU8LJEraX1r5qm5p5VTgrMBE2evgh6PFHHDqaJ4qWIVeWFKZs0TQz5OAmxklT1YYBfu8s7MKdgJpfpJbFwhfq1bNM8PH3WmAgG6mac6lncFbksjDNjmCrkvhOzFfLz%2Br33zqLmGVp4tUXwCtr0X1lsLGR9sHin83mALL4GsXX%2FyVtzOKpoMIOw8L8GOqUB%2FogdEMDxp8BAdVwRkG3G5nWGzF1b1SdHjkRTn3m%2FkYNkvmyYnh2zILcs7O8Nx%2FaFPZ2ns%2BcM4oNKVmFtrxdBX8PCiehwzLSJkWxYXdIqk9en1o7u2kvfqMo33zjaHHCZtXxivIjHcUVFhktRVhTJLaWg5LHcfeAn6uvAL6OVFyf88DwQm8yUeKJqwxKMYboDJeHjepH1mPhwkP%2BOcq0%2B2Zw2sg%2B4&X-Amz-Signature=22767d78422f2c66d7d16adb33927105de29cab21d9298c808544d42ba5dd104&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYYR2BRZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCYXlnpLJhMsjWR35xdYXdrpcqJ1nszh%2FfFhkI1vbuCxAIgVfGfrsxL6%2FhLNKyNFssaCQUffiIq5UMIVHSU8NH59VEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFT1lkxmK%2BPYWvTw%2FyrcAzQRUqW9x0MZcwuzR%2F2C%2FQZ6AwM6Q0J8i5E2vLzmzCADJ8F9P7h5R0H4tt9Z%2FMiExXYQ7zMi%2BEwPJDMtVxOraPGQ480%2F2nOFthj8fjM%2FZKyi%2Bc6XT8J3v%2Fu9vgMdKMZ1KmMymdUJtggfS10xS0riaPlxcCHcTUzPCaCfy%2BTKIMDkZZ%2BZqEUNvZ25sbVi1WTQDcUkvSZ8LE2QXfnMMzLqG6wg9KsEgRmM5ZF0pIkk1CriKYpgKabOKpNSyRm2DFgcFfotNO7wqleQYTFSvLm30cGTyymIR1NXdDO1G9VXP%2F5cg30Zeemxf6C%2FB2FaU19ei%2BnTLZnc%2FucfEOrQvOmP8dsx9FPt33vrQGJuOSkIQysTexkjJ62UJ%2BOIJG%2FlEmCkADB5cSqhTE3ZUJ4%2B0miJoZtEk8z%2BFmsbmBBjc5JYMzGkvWE1XBOyfwzLVe%2B0pv675rSDwQWfZroU8LJEraX1r5qm5p5VTgrMBE2evgh6PFHHDqaJ4qWIVeWFKZs0TQz5OAmxklT1YYBfu8s7MKdgJpfpJbFwhfq1bNM8PH3WmAgG6mac6lncFbksjDNjmCrkvhOzFfLz%2Br33zqLmGVp4tUXwCtr0X1lsLGR9sHin83mALL4GsXX%2FyVtzOKpoMIOw8L8GOqUB%2FogdEMDxp8BAdVwRkG3G5nWGzF1b1SdHjkRTn3m%2FkYNkvmyYnh2zILcs7O8Nx%2FaFPZ2ns%2BcM4oNKVmFtrxdBX8PCiehwzLSJkWxYXdIqk9en1o7u2kvfqMo33zjaHHCZtXxivIjHcUVFhktRVhTJLaWg5LHcfeAn6uvAL6OVFyf88DwQm8yUeKJqwxKMYboDJeHjepH1mPhwkP%2BOcq0%2B2Zw2sg%2B4&X-Amz-Signature=e235ab6c3faf47c098b3d4c8652d8bd8505aa723f52d415630a6e2c5d670a8c9&X-Amz-SignedHeaders=host&x-id=GetObject)
