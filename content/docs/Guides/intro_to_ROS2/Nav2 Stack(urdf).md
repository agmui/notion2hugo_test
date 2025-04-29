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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKABHKO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf5tg87QfWNUdixZ6HLR8MqoRyOQpDnBc8%2Bd372HWrgAiEAnj3HiHPj%2F55c20d6ZdIGGjAmKOCf6SUAQfFZ9L8TH2oqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpFYr5%2BGF%2BhgiMHUircA%2B6lPEhmmoYx1h1CwnpIZ8aY5WUvZXxtcIVI56lC6IGQo0%2BmjKTBRbws%2BLWr332ws0ZHUx20qHGH1xYK0VzSvSniyljvjsv0WdbwkW78vgiPpiV5odUxKHxF4gXaRqgI1Es4861PWkYPFGAbuPAfS6qBss2iZ0DabYkBxSMmLk2Olf%2FF%2FQubANTg%2FqmVeHIoDRRcWsx7TOFHlwgmhZXLDIEEo8Gj7hydimR%2FnNdQLk0UkeDb5nnUglC7b2ee2xEAvmb30BkHi61mfwr03LjfvkNrXAXMNjQV9pc2j7%2BSMMfFpGsB7yC3MhcfUhQDM8n96IRvPf79ngO2ZFHTWZGii2pVduxhMqsTQZCdPt1LLLfjVnnVyk6drdIn%2BYoRMqKjR0oTvHBWEFPOjM9dfxmL1B%2FM40mL1bQLALc%2FO2pswC4cBKQUTYzbsnSWNQjq38E8YZDFACmJLD1SmLhc6J%2FtjWGXEu%2BEwRgrQCd0ulEHQfHBVG7awORUoq%2BUOdvru5bUBt1eZGj5CkA2LwZ01bUan4btMswDl%2BSRz3PXo1kl%2FNdilPIcSKWN2rV8FHOU%2BDpk%2FPQS4eI4KRum%2FcutpOvZmS%2BzmHznH2U7JiT%2BeiBeP1hdT3oiNtQd1dYNoqi4MPOTxMAGOqUBVHKyJvF9DmPEk2LVSRmZ1La%2FL7%2BJete1OLzEd%2BCRY2kTrEeVs9V0wVrA03bt%2FSrzVDdbs4J3GoydYPttiDJLZQyFH2gb8tFdH7v2%2BPF6glCFEFvJugun0CP9qpagSEuDWpSQh4aObWM8hp8DdcDACjDAI7N%2BH6lkjjcGqqZmuc5BRO3kIsVLDaQuQxNXMlzk%2Bh0uLipWqnOAHdafwK4ndUMVQuVx&X-Amz-Signature=e29d51dc526d18bb6f623901b41aa1597060a7db28f9f6711cbe4d2e1400c2cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKABHKO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf5tg87QfWNUdixZ6HLR8MqoRyOQpDnBc8%2Bd372HWrgAiEAnj3HiHPj%2F55c20d6ZdIGGjAmKOCf6SUAQfFZ9L8TH2oqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpFYr5%2BGF%2BhgiMHUircA%2B6lPEhmmoYx1h1CwnpIZ8aY5WUvZXxtcIVI56lC6IGQo0%2BmjKTBRbws%2BLWr332ws0ZHUx20qHGH1xYK0VzSvSniyljvjsv0WdbwkW78vgiPpiV5odUxKHxF4gXaRqgI1Es4861PWkYPFGAbuPAfS6qBss2iZ0DabYkBxSMmLk2Olf%2FF%2FQubANTg%2FqmVeHIoDRRcWsx7TOFHlwgmhZXLDIEEo8Gj7hydimR%2FnNdQLk0UkeDb5nnUglC7b2ee2xEAvmb30BkHi61mfwr03LjfvkNrXAXMNjQV9pc2j7%2BSMMfFpGsB7yC3MhcfUhQDM8n96IRvPf79ngO2ZFHTWZGii2pVduxhMqsTQZCdPt1LLLfjVnnVyk6drdIn%2BYoRMqKjR0oTvHBWEFPOjM9dfxmL1B%2FM40mL1bQLALc%2FO2pswC4cBKQUTYzbsnSWNQjq38E8YZDFACmJLD1SmLhc6J%2FtjWGXEu%2BEwRgrQCd0ulEHQfHBVG7awORUoq%2BUOdvru5bUBt1eZGj5CkA2LwZ01bUan4btMswDl%2BSRz3PXo1kl%2FNdilPIcSKWN2rV8FHOU%2BDpk%2FPQS4eI4KRum%2FcutpOvZmS%2BzmHznH2U7JiT%2BeiBeP1hdT3oiNtQd1dYNoqi4MPOTxMAGOqUBVHKyJvF9DmPEk2LVSRmZ1La%2FL7%2BJete1OLzEd%2BCRY2kTrEeVs9V0wVrA03bt%2FSrzVDdbs4J3GoydYPttiDJLZQyFH2gb8tFdH7v2%2BPF6glCFEFvJugun0CP9qpagSEuDWpSQh4aObWM8hp8DdcDACjDAI7N%2BH6lkjjcGqqZmuc5BRO3kIsVLDaQuQxNXMlzk%2Bh0uLipWqnOAHdafwK4ndUMVQuVx&X-Amz-Signature=ed40571a21393b13f17b9e03d6de8d2b78c8596b4abc941184d9fee4894ce560&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKABHKO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf5tg87QfWNUdixZ6HLR8MqoRyOQpDnBc8%2Bd372HWrgAiEAnj3HiHPj%2F55c20d6ZdIGGjAmKOCf6SUAQfFZ9L8TH2oqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpFYr5%2BGF%2BhgiMHUircA%2B6lPEhmmoYx1h1CwnpIZ8aY5WUvZXxtcIVI56lC6IGQo0%2BmjKTBRbws%2BLWr332ws0ZHUx20qHGH1xYK0VzSvSniyljvjsv0WdbwkW78vgiPpiV5odUxKHxF4gXaRqgI1Es4861PWkYPFGAbuPAfS6qBss2iZ0DabYkBxSMmLk2Olf%2FF%2FQubANTg%2FqmVeHIoDRRcWsx7TOFHlwgmhZXLDIEEo8Gj7hydimR%2FnNdQLk0UkeDb5nnUglC7b2ee2xEAvmb30BkHi61mfwr03LjfvkNrXAXMNjQV9pc2j7%2BSMMfFpGsB7yC3MhcfUhQDM8n96IRvPf79ngO2ZFHTWZGii2pVduxhMqsTQZCdPt1LLLfjVnnVyk6drdIn%2BYoRMqKjR0oTvHBWEFPOjM9dfxmL1B%2FM40mL1bQLALc%2FO2pswC4cBKQUTYzbsnSWNQjq38E8YZDFACmJLD1SmLhc6J%2FtjWGXEu%2BEwRgrQCd0ulEHQfHBVG7awORUoq%2BUOdvru5bUBt1eZGj5CkA2LwZ01bUan4btMswDl%2BSRz3PXo1kl%2FNdilPIcSKWN2rV8FHOU%2BDpk%2FPQS4eI4KRum%2FcutpOvZmS%2BzmHznH2U7JiT%2BeiBeP1hdT3oiNtQd1dYNoqi4MPOTxMAGOqUBVHKyJvF9DmPEk2LVSRmZ1La%2FL7%2BJete1OLzEd%2BCRY2kTrEeVs9V0wVrA03bt%2FSrzVDdbs4J3GoydYPttiDJLZQyFH2gb8tFdH7v2%2BPF6glCFEFvJugun0CP9qpagSEuDWpSQh4aObWM8hp8DdcDACjDAI7N%2BH6lkjjcGqqZmuc5BRO3kIsVLDaQuQxNXMlzk%2Bh0uLipWqnOAHdafwK4ndUMVQuVx&X-Amz-Signature=87c3b88d2143db057eb9f9cd15a251e1b04f73fc631a4698d8450ca0a2968300&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKABHKO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf5tg87QfWNUdixZ6HLR8MqoRyOQpDnBc8%2Bd372HWrgAiEAnj3HiHPj%2F55c20d6ZdIGGjAmKOCf6SUAQfFZ9L8TH2oqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpFYr5%2BGF%2BhgiMHUircA%2B6lPEhmmoYx1h1CwnpIZ8aY5WUvZXxtcIVI56lC6IGQo0%2BmjKTBRbws%2BLWr332ws0ZHUx20qHGH1xYK0VzSvSniyljvjsv0WdbwkW78vgiPpiV5odUxKHxF4gXaRqgI1Es4861PWkYPFGAbuPAfS6qBss2iZ0DabYkBxSMmLk2Olf%2FF%2FQubANTg%2FqmVeHIoDRRcWsx7TOFHlwgmhZXLDIEEo8Gj7hydimR%2FnNdQLk0UkeDb5nnUglC7b2ee2xEAvmb30BkHi61mfwr03LjfvkNrXAXMNjQV9pc2j7%2BSMMfFpGsB7yC3MhcfUhQDM8n96IRvPf79ngO2ZFHTWZGii2pVduxhMqsTQZCdPt1LLLfjVnnVyk6drdIn%2BYoRMqKjR0oTvHBWEFPOjM9dfxmL1B%2FM40mL1bQLALc%2FO2pswC4cBKQUTYzbsnSWNQjq38E8YZDFACmJLD1SmLhc6J%2FtjWGXEu%2BEwRgrQCd0ulEHQfHBVG7awORUoq%2BUOdvru5bUBt1eZGj5CkA2LwZ01bUan4btMswDl%2BSRz3PXo1kl%2FNdilPIcSKWN2rV8FHOU%2BDpk%2FPQS4eI4KRum%2FcutpOvZmS%2BzmHznH2U7JiT%2BeiBeP1hdT3oiNtQd1dYNoqi4MPOTxMAGOqUBVHKyJvF9DmPEk2LVSRmZ1La%2FL7%2BJete1OLzEd%2BCRY2kTrEeVs9V0wVrA03bt%2FSrzVDdbs4J3GoydYPttiDJLZQyFH2gb8tFdH7v2%2BPF6glCFEFvJugun0CP9qpagSEuDWpSQh4aObWM8hp8DdcDACjDAI7N%2BH6lkjjcGqqZmuc5BRO3kIsVLDaQuQxNXMlzk%2Bh0uLipWqnOAHdafwK4ndUMVQuVx&X-Amz-Signature=b05b4ed3ba92bd0ab30aa230c20a2228051cc06aeded949e7f82deb49abf1395&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKABHKO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf5tg87QfWNUdixZ6HLR8MqoRyOQpDnBc8%2Bd372HWrgAiEAnj3HiHPj%2F55c20d6ZdIGGjAmKOCf6SUAQfFZ9L8TH2oqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpFYr5%2BGF%2BhgiMHUircA%2B6lPEhmmoYx1h1CwnpIZ8aY5WUvZXxtcIVI56lC6IGQo0%2BmjKTBRbws%2BLWr332ws0ZHUx20qHGH1xYK0VzSvSniyljvjsv0WdbwkW78vgiPpiV5odUxKHxF4gXaRqgI1Es4861PWkYPFGAbuPAfS6qBss2iZ0DabYkBxSMmLk2Olf%2FF%2FQubANTg%2FqmVeHIoDRRcWsx7TOFHlwgmhZXLDIEEo8Gj7hydimR%2FnNdQLk0UkeDb5nnUglC7b2ee2xEAvmb30BkHi61mfwr03LjfvkNrXAXMNjQV9pc2j7%2BSMMfFpGsB7yC3MhcfUhQDM8n96IRvPf79ngO2ZFHTWZGii2pVduxhMqsTQZCdPt1LLLfjVnnVyk6drdIn%2BYoRMqKjR0oTvHBWEFPOjM9dfxmL1B%2FM40mL1bQLALc%2FO2pswC4cBKQUTYzbsnSWNQjq38E8YZDFACmJLD1SmLhc6J%2FtjWGXEu%2BEwRgrQCd0ulEHQfHBVG7awORUoq%2BUOdvru5bUBt1eZGj5CkA2LwZ01bUan4btMswDl%2BSRz3PXo1kl%2FNdilPIcSKWN2rV8FHOU%2BDpk%2FPQS4eI4KRum%2FcutpOvZmS%2BzmHznH2U7JiT%2BeiBeP1hdT3oiNtQd1dYNoqi4MPOTxMAGOqUBVHKyJvF9DmPEk2LVSRmZ1La%2FL7%2BJete1OLzEd%2BCRY2kTrEeVs9V0wVrA03bt%2FSrzVDdbs4J3GoydYPttiDJLZQyFH2gb8tFdH7v2%2BPF6glCFEFvJugun0CP9qpagSEuDWpSQh4aObWM8hp8DdcDACjDAI7N%2BH6lkjjcGqqZmuc5BRO3kIsVLDaQuQxNXMlzk%2Bh0uLipWqnOAHdafwK4ndUMVQuVx&X-Amz-Signature=dcf5ae0f6f9f49295cc4333b38e122b17fd4151f58a6088e610a43f3082fb754&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVKABHKO%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf5tg87QfWNUdixZ6HLR8MqoRyOQpDnBc8%2Bd372HWrgAiEAnj3HiHPj%2F55c20d6ZdIGGjAmKOCf6SUAQfFZ9L8TH2oqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpFYr5%2BGF%2BhgiMHUircA%2B6lPEhmmoYx1h1CwnpIZ8aY5WUvZXxtcIVI56lC6IGQo0%2BmjKTBRbws%2BLWr332ws0ZHUx20qHGH1xYK0VzSvSniyljvjsv0WdbwkW78vgiPpiV5odUxKHxF4gXaRqgI1Es4861PWkYPFGAbuPAfS6qBss2iZ0DabYkBxSMmLk2Olf%2FF%2FQubANTg%2FqmVeHIoDRRcWsx7TOFHlwgmhZXLDIEEo8Gj7hydimR%2FnNdQLk0UkeDb5nnUglC7b2ee2xEAvmb30BkHi61mfwr03LjfvkNrXAXMNjQV9pc2j7%2BSMMfFpGsB7yC3MhcfUhQDM8n96IRvPf79ngO2ZFHTWZGii2pVduxhMqsTQZCdPt1LLLfjVnnVyk6drdIn%2BYoRMqKjR0oTvHBWEFPOjM9dfxmL1B%2FM40mL1bQLALc%2FO2pswC4cBKQUTYzbsnSWNQjq38E8YZDFACmJLD1SmLhc6J%2FtjWGXEu%2BEwRgrQCd0ulEHQfHBVG7awORUoq%2BUOdvru5bUBt1eZGj5CkA2LwZ01bUan4btMswDl%2BSRz3PXo1kl%2FNdilPIcSKWN2rV8FHOU%2BDpk%2FPQS4eI4KRum%2FcutpOvZmS%2BzmHznH2U7JiT%2BeiBeP1hdT3oiNtQd1dYNoqi4MPOTxMAGOqUBVHKyJvF9DmPEk2LVSRmZ1La%2FL7%2BJete1OLzEd%2BCRY2kTrEeVs9V0wVrA03bt%2FSrzVDdbs4J3GoydYPttiDJLZQyFH2gb8tFdH7v2%2BPF6glCFEFvJugun0CP9qpagSEuDWpSQh4aObWM8hp8DdcDACjDAI7N%2BH6lkjjcGqqZmuc5BRO3kIsVLDaQuQxNXMlzk%2Bh0uLipWqnOAHdafwK4ndUMVQuVx&X-Amz-Signature=463496f2e3a1ca6e4257a52f5e2c06e502d2d4ad430bb075a915635d577cdb12&X-Amz-SignedHeaders=host&x-id=GetObject)
