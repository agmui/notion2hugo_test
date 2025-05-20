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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QYCWYS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRy%2FVrWyE0SWulcvXDOef%2BiVwr3hbbp4RQ7dL33A0xwIgTimi6gnMmMqhCBh0gvC3ITHRjiYdq0Cfd7DZ5CTg214qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBufjmlZBlDBR8DOoyrcA%2BeT%2Be5wX2Odr2z%2FGEWZti4WiMsdLmYOJOuHJTjbGtBTQAXg8IhD650jxFgWw2dtO5M%2FjTd99RnlFR10GvXLd2muycbKRDf0YqRkudwEG87ZF9Y63J5Qw91ggkct5%2BDLtEIFJIcnxHvi9IU%2B89Um9Cgc942d0RPwDAF6kowWoGS7qDDuo4ePe14ipXh9sPdQYRo6VbDQU%2Fl6EHUl8NJtcWSWfbTP4vMFarcwhOG2wjp5M9n3oZami63bqO0wCLFHTZqpiXdC21v%2FnPn4NV2SwfjGfYItHXkYVd7X2F8D8ZRk82%2FCYWgxYStC3wu1dL%2BGKaOwofZJyrznZwdDpKlXoq%2BsQ2RGyu5wk%2B9swfUttaf9wEX1FRRFpLzfxvFWSPx9geVuA6MGy2PzgAj%2FvkzzqFDpnhDomFydlPXOYnQrIc3XP7mozoW2VgO0LR7rMmYO6H4CHofqDxvXyqw2fF%2Bf1UVmlNphB0JXLVePkwa9z3JyHXnIM2NlaBpRnYlpvMNAgE28jklhmGCIByXfjBdefVbKMvVZwvpMFBT1J65EvaeYsWGNxutwEfMsoTLs3C25w8TaSTjBCjgopadBo1naP7mQErghT%2F2bBB62VFvKp%2FygOra1EV2xAj5Sx5%2FtMJitsMEGOqUBPRQO1JsjJr0sFojeiPxDph0t5BYFEK%2FT3lPXfqWbpqcgFBidggBELnMuoe9I5CZyz05qqol%2F087xszqziDXlfXOMa%2BXA%2Bs5U%2BpQb2tSZNeCJa277AN969VqHFuEfCleElcEzain9gt%2BVtYalxV9NQmnBb4DlOhlgUlUjuOIfROVKe7cGMvlTx3n4ta8Ek4K7L3kumMEL58zS4pPPacY4n2Sbz1YK&X-Amz-Signature=e0b09c3851f6156b0e7f6c6c7f59a6a990733b25c748d3b889a1e024f54d019c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QYCWYS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRy%2FVrWyE0SWulcvXDOef%2BiVwr3hbbp4RQ7dL33A0xwIgTimi6gnMmMqhCBh0gvC3ITHRjiYdq0Cfd7DZ5CTg214qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBufjmlZBlDBR8DOoyrcA%2BeT%2Be5wX2Odr2z%2FGEWZti4WiMsdLmYOJOuHJTjbGtBTQAXg8IhD650jxFgWw2dtO5M%2FjTd99RnlFR10GvXLd2muycbKRDf0YqRkudwEG87ZF9Y63J5Qw91ggkct5%2BDLtEIFJIcnxHvi9IU%2B89Um9Cgc942d0RPwDAF6kowWoGS7qDDuo4ePe14ipXh9sPdQYRo6VbDQU%2Fl6EHUl8NJtcWSWfbTP4vMFarcwhOG2wjp5M9n3oZami63bqO0wCLFHTZqpiXdC21v%2FnPn4NV2SwfjGfYItHXkYVd7X2F8D8ZRk82%2FCYWgxYStC3wu1dL%2BGKaOwofZJyrznZwdDpKlXoq%2BsQ2RGyu5wk%2B9swfUttaf9wEX1FRRFpLzfxvFWSPx9geVuA6MGy2PzgAj%2FvkzzqFDpnhDomFydlPXOYnQrIc3XP7mozoW2VgO0LR7rMmYO6H4CHofqDxvXyqw2fF%2Bf1UVmlNphB0JXLVePkwa9z3JyHXnIM2NlaBpRnYlpvMNAgE28jklhmGCIByXfjBdefVbKMvVZwvpMFBT1J65EvaeYsWGNxutwEfMsoTLs3C25w8TaSTjBCjgopadBo1naP7mQErghT%2F2bBB62VFvKp%2FygOra1EV2xAj5Sx5%2FtMJitsMEGOqUBPRQO1JsjJr0sFojeiPxDph0t5BYFEK%2FT3lPXfqWbpqcgFBidggBELnMuoe9I5CZyz05qqol%2F087xszqziDXlfXOMa%2BXA%2Bs5U%2BpQb2tSZNeCJa277AN969VqHFuEfCleElcEzain9gt%2BVtYalxV9NQmnBb4DlOhlgUlUjuOIfROVKe7cGMvlTx3n4ta8Ek4K7L3kumMEL58zS4pPPacY4n2Sbz1YK&X-Amz-Signature=256dc699ab2b42a8a65e774640a01feacd01480d3d8a1be33ac5257ac3df6ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QYCWYS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRy%2FVrWyE0SWulcvXDOef%2BiVwr3hbbp4RQ7dL33A0xwIgTimi6gnMmMqhCBh0gvC3ITHRjiYdq0Cfd7DZ5CTg214qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBufjmlZBlDBR8DOoyrcA%2BeT%2Be5wX2Odr2z%2FGEWZti4WiMsdLmYOJOuHJTjbGtBTQAXg8IhD650jxFgWw2dtO5M%2FjTd99RnlFR10GvXLd2muycbKRDf0YqRkudwEG87ZF9Y63J5Qw91ggkct5%2BDLtEIFJIcnxHvi9IU%2B89Um9Cgc942d0RPwDAF6kowWoGS7qDDuo4ePe14ipXh9sPdQYRo6VbDQU%2Fl6EHUl8NJtcWSWfbTP4vMFarcwhOG2wjp5M9n3oZami63bqO0wCLFHTZqpiXdC21v%2FnPn4NV2SwfjGfYItHXkYVd7X2F8D8ZRk82%2FCYWgxYStC3wu1dL%2BGKaOwofZJyrznZwdDpKlXoq%2BsQ2RGyu5wk%2B9swfUttaf9wEX1FRRFpLzfxvFWSPx9geVuA6MGy2PzgAj%2FvkzzqFDpnhDomFydlPXOYnQrIc3XP7mozoW2VgO0LR7rMmYO6H4CHofqDxvXyqw2fF%2Bf1UVmlNphB0JXLVePkwa9z3JyHXnIM2NlaBpRnYlpvMNAgE28jklhmGCIByXfjBdefVbKMvVZwvpMFBT1J65EvaeYsWGNxutwEfMsoTLs3C25w8TaSTjBCjgopadBo1naP7mQErghT%2F2bBB62VFvKp%2FygOra1EV2xAj5Sx5%2FtMJitsMEGOqUBPRQO1JsjJr0sFojeiPxDph0t5BYFEK%2FT3lPXfqWbpqcgFBidggBELnMuoe9I5CZyz05qqol%2F087xszqziDXlfXOMa%2BXA%2Bs5U%2BpQb2tSZNeCJa277AN969VqHFuEfCleElcEzain9gt%2BVtYalxV9NQmnBb4DlOhlgUlUjuOIfROVKe7cGMvlTx3n4ta8Ek4K7L3kumMEL58zS4pPPacY4n2Sbz1YK&X-Amz-Signature=3ebd1fbd014a1cb7c4b23e10af80769d7db92dd2e8aa0049fe16baf53acf22a5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QYCWYS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRy%2FVrWyE0SWulcvXDOef%2BiVwr3hbbp4RQ7dL33A0xwIgTimi6gnMmMqhCBh0gvC3ITHRjiYdq0Cfd7DZ5CTg214qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBufjmlZBlDBR8DOoyrcA%2BeT%2Be5wX2Odr2z%2FGEWZti4WiMsdLmYOJOuHJTjbGtBTQAXg8IhD650jxFgWw2dtO5M%2FjTd99RnlFR10GvXLd2muycbKRDf0YqRkudwEG87ZF9Y63J5Qw91ggkct5%2BDLtEIFJIcnxHvi9IU%2B89Um9Cgc942d0RPwDAF6kowWoGS7qDDuo4ePe14ipXh9sPdQYRo6VbDQU%2Fl6EHUl8NJtcWSWfbTP4vMFarcwhOG2wjp5M9n3oZami63bqO0wCLFHTZqpiXdC21v%2FnPn4NV2SwfjGfYItHXkYVd7X2F8D8ZRk82%2FCYWgxYStC3wu1dL%2BGKaOwofZJyrznZwdDpKlXoq%2BsQ2RGyu5wk%2B9swfUttaf9wEX1FRRFpLzfxvFWSPx9geVuA6MGy2PzgAj%2FvkzzqFDpnhDomFydlPXOYnQrIc3XP7mozoW2VgO0LR7rMmYO6H4CHofqDxvXyqw2fF%2Bf1UVmlNphB0JXLVePkwa9z3JyHXnIM2NlaBpRnYlpvMNAgE28jklhmGCIByXfjBdefVbKMvVZwvpMFBT1J65EvaeYsWGNxutwEfMsoTLs3C25w8TaSTjBCjgopadBo1naP7mQErghT%2F2bBB62VFvKp%2FygOra1EV2xAj5Sx5%2FtMJitsMEGOqUBPRQO1JsjJr0sFojeiPxDph0t5BYFEK%2FT3lPXfqWbpqcgFBidggBELnMuoe9I5CZyz05qqol%2F087xszqziDXlfXOMa%2BXA%2Bs5U%2BpQb2tSZNeCJa277AN969VqHFuEfCleElcEzain9gt%2BVtYalxV9NQmnBb4DlOhlgUlUjuOIfROVKe7cGMvlTx3n4ta8Ek4K7L3kumMEL58zS4pPPacY4n2Sbz1YK&X-Amz-Signature=3148a3cff3783b5d531da799d9fe5a2acf628a22264b9156e04e3d433009183b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QYCWYS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRy%2FVrWyE0SWulcvXDOef%2BiVwr3hbbp4RQ7dL33A0xwIgTimi6gnMmMqhCBh0gvC3ITHRjiYdq0Cfd7DZ5CTg214qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBufjmlZBlDBR8DOoyrcA%2BeT%2Be5wX2Odr2z%2FGEWZti4WiMsdLmYOJOuHJTjbGtBTQAXg8IhD650jxFgWw2dtO5M%2FjTd99RnlFR10GvXLd2muycbKRDf0YqRkudwEG87ZF9Y63J5Qw91ggkct5%2BDLtEIFJIcnxHvi9IU%2B89Um9Cgc942d0RPwDAF6kowWoGS7qDDuo4ePe14ipXh9sPdQYRo6VbDQU%2Fl6EHUl8NJtcWSWfbTP4vMFarcwhOG2wjp5M9n3oZami63bqO0wCLFHTZqpiXdC21v%2FnPn4NV2SwfjGfYItHXkYVd7X2F8D8ZRk82%2FCYWgxYStC3wu1dL%2BGKaOwofZJyrznZwdDpKlXoq%2BsQ2RGyu5wk%2B9swfUttaf9wEX1FRRFpLzfxvFWSPx9geVuA6MGy2PzgAj%2FvkzzqFDpnhDomFydlPXOYnQrIc3XP7mozoW2VgO0LR7rMmYO6H4CHofqDxvXyqw2fF%2Bf1UVmlNphB0JXLVePkwa9z3JyHXnIM2NlaBpRnYlpvMNAgE28jklhmGCIByXfjBdefVbKMvVZwvpMFBT1J65EvaeYsWGNxutwEfMsoTLs3C25w8TaSTjBCjgopadBo1naP7mQErghT%2F2bBB62VFvKp%2FygOra1EV2xAj5Sx5%2FtMJitsMEGOqUBPRQO1JsjJr0sFojeiPxDph0t5BYFEK%2FT3lPXfqWbpqcgFBidggBELnMuoe9I5CZyz05qqol%2F087xszqziDXlfXOMa%2BXA%2Bs5U%2BpQb2tSZNeCJa277AN969VqHFuEfCleElcEzain9gt%2BVtYalxV9NQmnBb4DlOhlgUlUjuOIfROVKe7cGMvlTx3n4ta8Ek4K7L3kumMEL58zS4pPPacY4n2Sbz1YK&X-Amz-Signature=65f500e2b4a37f3cc30317562565bf5eebc17ce459dbe238a224a16e60119996&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QYCWYS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFRy%2FVrWyE0SWulcvXDOef%2BiVwr3hbbp4RQ7dL33A0xwIgTimi6gnMmMqhCBh0gvC3ITHRjiYdq0Cfd7DZ5CTg214qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBufjmlZBlDBR8DOoyrcA%2BeT%2Be5wX2Odr2z%2FGEWZti4WiMsdLmYOJOuHJTjbGtBTQAXg8IhD650jxFgWw2dtO5M%2FjTd99RnlFR10GvXLd2muycbKRDf0YqRkudwEG87ZF9Y63J5Qw91ggkct5%2BDLtEIFJIcnxHvi9IU%2B89Um9Cgc942d0RPwDAF6kowWoGS7qDDuo4ePe14ipXh9sPdQYRo6VbDQU%2Fl6EHUl8NJtcWSWfbTP4vMFarcwhOG2wjp5M9n3oZami63bqO0wCLFHTZqpiXdC21v%2FnPn4NV2SwfjGfYItHXkYVd7X2F8D8ZRk82%2FCYWgxYStC3wu1dL%2BGKaOwofZJyrznZwdDpKlXoq%2BsQ2RGyu5wk%2B9swfUttaf9wEX1FRRFpLzfxvFWSPx9geVuA6MGy2PzgAj%2FvkzzqFDpnhDomFydlPXOYnQrIc3XP7mozoW2VgO0LR7rMmYO6H4CHofqDxvXyqw2fF%2Bf1UVmlNphB0JXLVePkwa9z3JyHXnIM2NlaBpRnYlpvMNAgE28jklhmGCIByXfjBdefVbKMvVZwvpMFBT1J65EvaeYsWGNxutwEfMsoTLs3C25w8TaSTjBCjgopadBo1naP7mQErghT%2F2bBB62VFvKp%2FygOra1EV2xAj5Sx5%2FtMJitsMEGOqUBPRQO1JsjJr0sFojeiPxDph0t5BYFEK%2FT3lPXfqWbpqcgFBidggBELnMuoe9I5CZyz05qqol%2F087xszqziDXlfXOMa%2BXA%2Bs5U%2BpQb2tSZNeCJa277AN969VqHFuEfCleElcEzain9gt%2BVtYalxV9NQmnBb4DlOhlgUlUjuOIfROVKe7cGMvlTx3n4ta8Ek4K7L3kumMEL58zS4pPPacY4n2Sbz1YK&X-Amz-Signature=ec134c16a45bf4788216cdfdc309e70444249a3ea50a6a75d47ae28e74bd5623&X-Amz-SignedHeaders=host&x-id=GetObject)
