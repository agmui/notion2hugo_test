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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDG2LQQV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXpcjXaE7Bi35HfUQEHc88kG40GDql3Ioli88SfIdFBgIgBV2KLJAZ7a5PJj0hIIsko8fzRzcXAth9PCv%2FIwOOXikqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG2C%2FvILYNuq5IjsircA2DHUSXue7NBQKTEp68IGtTn4h2JDk24Q9YReq9wf4zESTObegawz9cyAKnvRUUnDVwpyzFk0J2wAVM8dI1XwUaFaY6TZm%2Bat0JSXfFr0Hrs26CzU%2F9LKDCOB%2BCS4FjlnPL4H5O5q%2FR67IhoKLp6PILvq0DgsH33wimO0FMA40ZzX9RmB1Jahtaeshd37QhhkeiVZ%2BrDWqiJ%2FefXrS73e881hMrJPujI4iYLEhDhWjvcQmNEpqXFCvOkHyQhd6bpmwDkXtuKF16c5PKiJBilD3R4Bfr00y%2BbOsMZNdb8GwT7xvmwy1iGuHFMsFhtb5MT38T6tCkmB5ZdXzepWwT7%2FxxC9IP6hUMKQQXf0d3SsafqYAEUTQ%2FkMhzFKvnp%2BK024GADYPsfhrGaByQ%2FJhxM3UeM2D%2F7a8pPo7kZBnaMZsjkqFRgcu16Wkbal98JyXFWQQ%2BowVRbXlenbibPVlNZ6k3YnDr0KD5GOGd4%2FcyPGz1drT5edPwWeEpaBAFZG2TQVPohxbi4Lp1vYRDBJO%2FUQLRUYmEdXc2PgspipvrNVSA2vq0j1ozqfXhxfMn3Bx2K3YJ1JT6PI6GFuP67MHrBjuNsngXto3T9IkyGtofLxd9teATTKh7vUW6Eg035MO637sMGOqUBg%2FFut7VUr9AkIahDHzwa5Vq5fWm7mpdJUD5PcP1oF7ClzW1t%2Bc4VDysEu7mlnrrHukKew9JenfuLNCMhtJ8Zpgh7sGSrRp%2FILjsLm4yoeId%2F3%2BWm%2FlpWfUkI9T4o2d9Dv2%2FEWbom0Ta9B249CiHb6E89RqrvXuQQQQ32YaaDe55pcadj5ikOP5HSkcBlX0WIGE8BX79U269VrxyNmWXsuIxqlgd8&X-Amz-Signature=24e368ee9a4103d020e8e581f7c5898b0a4e57478cc6ec6260f31510445bb15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDG2LQQV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXpcjXaE7Bi35HfUQEHc88kG40GDql3Ioli88SfIdFBgIgBV2KLJAZ7a5PJj0hIIsko8fzRzcXAth9PCv%2FIwOOXikqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG2C%2FvILYNuq5IjsircA2DHUSXue7NBQKTEp68IGtTn4h2JDk24Q9YReq9wf4zESTObegawz9cyAKnvRUUnDVwpyzFk0J2wAVM8dI1XwUaFaY6TZm%2Bat0JSXfFr0Hrs26CzU%2F9LKDCOB%2BCS4FjlnPL4H5O5q%2FR67IhoKLp6PILvq0DgsH33wimO0FMA40ZzX9RmB1Jahtaeshd37QhhkeiVZ%2BrDWqiJ%2FefXrS73e881hMrJPujI4iYLEhDhWjvcQmNEpqXFCvOkHyQhd6bpmwDkXtuKF16c5PKiJBilD3R4Bfr00y%2BbOsMZNdb8GwT7xvmwy1iGuHFMsFhtb5MT38T6tCkmB5ZdXzepWwT7%2FxxC9IP6hUMKQQXf0d3SsafqYAEUTQ%2FkMhzFKvnp%2BK024GADYPsfhrGaByQ%2FJhxM3UeM2D%2F7a8pPo7kZBnaMZsjkqFRgcu16Wkbal98JyXFWQQ%2BowVRbXlenbibPVlNZ6k3YnDr0KD5GOGd4%2FcyPGz1drT5edPwWeEpaBAFZG2TQVPohxbi4Lp1vYRDBJO%2FUQLRUYmEdXc2PgspipvrNVSA2vq0j1ozqfXhxfMn3Bx2K3YJ1JT6PI6GFuP67MHrBjuNsngXto3T9IkyGtofLxd9teATTKh7vUW6Eg035MO637sMGOqUBg%2FFut7VUr9AkIahDHzwa5Vq5fWm7mpdJUD5PcP1oF7ClzW1t%2Bc4VDysEu7mlnrrHukKew9JenfuLNCMhtJ8Zpgh7sGSrRp%2FILjsLm4yoeId%2F3%2BWm%2FlpWfUkI9T4o2d9Dv2%2FEWbom0Ta9B249CiHb6E89RqrvXuQQQQ32YaaDe55pcadj5ikOP5HSkcBlX0WIGE8BX79U269VrxyNmWXsuIxqlgd8&X-Amz-Signature=3b6a1d25676d71be1b51bbfd031a197d829aa74ec2732f0393697db2da04a790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDG2LQQV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXpcjXaE7Bi35HfUQEHc88kG40GDql3Ioli88SfIdFBgIgBV2KLJAZ7a5PJj0hIIsko8fzRzcXAth9PCv%2FIwOOXikqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG2C%2FvILYNuq5IjsircA2DHUSXue7NBQKTEp68IGtTn4h2JDk24Q9YReq9wf4zESTObegawz9cyAKnvRUUnDVwpyzFk0J2wAVM8dI1XwUaFaY6TZm%2Bat0JSXfFr0Hrs26CzU%2F9LKDCOB%2BCS4FjlnPL4H5O5q%2FR67IhoKLp6PILvq0DgsH33wimO0FMA40ZzX9RmB1Jahtaeshd37QhhkeiVZ%2BrDWqiJ%2FefXrS73e881hMrJPujI4iYLEhDhWjvcQmNEpqXFCvOkHyQhd6bpmwDkXtuKF16c5PKiJBilD3R4Bfr00y%2BbOsMZNdb8GwT7xvmwy1iGuHFMsFhtb5MT38T6tCkmB5ZdXzepWwT7%2FxxC9IP6hUMKQQXf0d3SsafqYAEUTQ%2FkMhzFKvnp%2BK024GADYPsfhrGaByQ%2FJhxM3UeM2D%2F7a8pPo7kZBnaMZsjkqFRgcu16Wkbal98JyXFWQQ%2BowVRbXlenbibPVlNZ6k3YnDr0KD5GOGd4%2FcyPGz1drT5edPwWeEpaBAFZG2TQVPohxbi4Lp1vYRDBJO%2FUQLRUYmEdXc2PgspipvrNVSA2vq0j1ozqfXhxfMn3Bx2K3YJ1JT6PI6GFuP67MHrBjuNsngXto3T9IkyGtofLxd9teATTKh7vUW6Eg035MO637sMGOqUBg%2FFut7VUr9AkIahDHzwa5Vq5fWm7mpdJUD5PcP1oF7ClzW1t%2Bc4VDysEu7mlnrrHukKew9JenfuLNCMhtJ8Zpgh7sGSrRp%2FILjsLm4yoeId%2F3%2BWm%2FlpWfUkI9T4o2d9Dv2%2FEWbom0Ta9B249CiHb6E89RqrvXuQQQQ32YaaDe55pcadj5ikOP5HSkcBlX0WIGE8BX79U269VrxyNmWXsuIxqlgd8&X-Amz-Signature=d4edd1cb0a8b4997cf001b0319e974817563939310d5f41de44b3d088362ee49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDG2LQQV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXpcjXaE7Bi35HfUQEHc88kG40GDql3Ioli88SfIdFBgIgBV2KLJAZ7a5PJj0hIIsko8fzRzcXAth9PCv%2FIwOOXikqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG2C%2FvILYNuq5IjsircA2DHUSXue7NBQKTEp68IGtTn4h2JDk24Q9YReq9wf4zESTObegawz9cyAKnvRUUnDVwpyzFk0J2wAVM8dI1XwUaFaY6TZm%2Bat0JSXfFr0Hrs26CzU%2F9LKDCOB%2BCS4FjlnPL4H5O5q%2FR67IhoKLp6PILvq0DgsH33wimO0FMA40ZzX9RmB1Jahtaeshd37QhhkeiVZ%2BrDWqiJ%2FefXrS73e881hMrJPujI4iYLEhDhWjvcQmNEpqXFCvOkHyQhd6bpmwDkXtuKF16c5PKiJBilD3R4Bfr00y%2BbOsMZNdb8GwT7xvmwy1iGuHFMsFhtb5MT38T6tCkmB5ZdXzepWwT7%2FxxC9IP6hUMKQQXf0d3SsafqYAEUTQ%2FkMhzFKvnp%2BK024GADYPsfhrGaByQ%2FJhxM3UeM2D%2F7a8pPo7kZBnaMZsjkqFRgcu16Wkbal98JyXFWQQ%2BowVRbXlenbibPVlNZ6k3YnDr0KD5GOGd4%2FcyPGz1drT5edPwWeEpaBAFZG2TQVPohxbi4Lp1vYRDBJO%2FUQLRUYmEdXc2PgspipvrNVSA2vq0j1ozqfXhxfMn3Bx2K3YJ1JT6PI6GFuP67MHrBjuNsngXto3T9IkyGtofLxd9teATTKh7vUW6Eg035MO637sMGOqUBg%2FFut7VUr9AkIahDHzwa5Vq5fWm7mpdJUD5PcP1oF7ClzW1t%2Bc4VDysEu7mlnrrHukKew9JenfuLNCMhtJ8Zpgh7sGSrRp%2FILjsLm4yoeId%2F3%2BWm%2FlpWfUkI9T4o2d9Dv2%2FEWbom0Ta9B249CiHb6E89RqrvXuQQQQ32YaaDe55pcadj5ikOP5HSkcBlX0WIGE8BX79U269VrxyNmWXsuIxqlgd8&X-Amz-Signature=da5863fe8ff7a0bf7675253eec3334db9e3fe3ee86fe99dfe5c95c7604ec0c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDG2LQQV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXpcjXaE7Bi35HfUQEHc88kG40GDql3Ioli88SfIdFBgIgBV2KLJAZ7a5PJj0hIIsko8fzRzcXAth9PCv%2FIwOOXikqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG2C%2FvILYNuq5IjsircA2DHUSXue7NBQKTEp68IGtTn4h2JDk24Q9YReq9wf4zESTObegawz9cyAKnvRUUnDVwpyzFk0J2wAVM8dI1XwUaFaY6TZm%2Bat0JSXfFr0Hrs26CzU%2F9LKDCOB%2BCS4FjlnPL4H5O5q%2FR67IhoKLp6PILvq0DgsH33wimO0FMA40ZzX9RmB1Jahtaeshd37QhhkeiVZ%2BrDWqiJ%2FefXrS73e881hMrJPujI4iYLEhDhWjvcQmNEpqXFCvOkHyQhd6bpmwDkXtuKF16c5PKiJBilD3R4Bfr00y%2BbOsMZNdb8GwT7xvmwy1iGuHFMsFhtb5MT38T6tCkmB5ZdXzepWwT7%2FxxC9IP6hUMKQQXf0d3SsafqYAEUTQ%2FkMhzFKvnp%2BK024GADYPsfhrGaByQ%2FJhxM3UeM2D%2F7a8pPo7kZBnaMZsjkqFRgcu16Wkbal98JyXFWQQ%2BowVRbXlenbibPVlNZ6k3YnDr0KD5GOGd4%2FcyPGz1drT5edPwWeEpaBAFZG2TQVPohxbi4Lp1vYRDBJO%2FUQLRUYmEdXc2PgspipvrNVSA2vq0j1ozqfXhxfMn3Bx2K3YJ1JT6PI6GFuP67MHrBjuNsngXto3T9IkyGtofLxd9teATTKh7vUW6Eg035MO637sMGOqUBg%2FFut7VUr9AkIahDHzwa5Vq5fWm7mpdJUD5PcP1oF7ClzW1t%2Bc4VDysEu7mlnrrHukKew9JenfuLNCMhtJ8Zpgh7sGSrRp%2FILjsLm4yoeId%2F3%2BWm%2FlpWfUkI9T4o2d9Dv2%2FEWbom0Ta9B249CiHb6E89RqrvXuQQQQ32YaaDe55pcadj5ikOP5HSkcBlX0WIGE8BX79U269VrxyNmWXsuIxqlgd8&X-Amz-Signature=9cffafcb0b7eccdb11a2c4448ba2c8163cca822d555ff11d29daef105eee3e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDG2LQQV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXpcjXaE7Bi35HfUQEHc88kG40GDql3Ioli88SfIdFBgIgBV2KLJAZ7a5PJj0hIIsko8fzRzcXAth9PCv%2FIwOOXikqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFG2C%2FvILYNuq5IjsircA2DHUSXue7NBQKTEp68IGtTn4h2JDk24Q9YReq9wf4zESTObegawz9cyAKnvRUUnDVwpyzFk0J2wAVM8dI1XwUaFaY6TZm%2Bat0JSXfFr0Hrs26CzU%2F9LKDCOB%2BCS4FjlnPL4H5O5q%2FR67IhoKLp6PILvq0DgsH33wimO0FMA40ZzX9RmB1Jahtaeshd37QhhkeiVZ%2BrDWqiJ%2FefXrS73e881hMrJPujI4iYLEhDhWjvcQmNEpqXFCvOkHyQhd6bpmwDkXtuKF16c5PKiJBilD3R4Bfr00y%2BbOsMZNdb8GwT7xvmwy1iGuHFMsFhtb5MT38T6tCkmB5ZdXzepWwT7%2FxxC9IP6hUMKQQXf0d3SsafqYAEUTQ%2FkMhzFKvnp%2BK024GADYPsfhrGaByQ%2FJhxM3UeM2D%2F7a8pPo7kZBnaMZsjkqFRgcu16Wkbal98JyXFWQQ%2BowVRbXlenbibPVlNZ6k3YnDr0KD5GOGd4%2FcyPGz1drT5edPwWeEpaBAFZG2TQVPohxbi4Lp1vYRDBJO%2FUQLRUYmEdXc2PgspipvrNVSA2vq0j1ozqfXhxfMn3Bx2K3YJ1JT6PI6GFuP67MHrBjuNsngXto3T9IkyGtofLxd9teATTKh7vUW6Eg035MO637sMGOqUBg%2FFut7VUr9AkIahDHzwa5Vq5fWm7mpdJUD5PcP1oF7ClzW1t%2Bc4VDysEu7mlnrrHukKew9JenfuLNCMhtJ8Zpgh7sGSrRp%2FILjsLm4yoeId%2F3%2BWm%2FlpWfUkI9T4o2d9Dv2%2FEWbom0Ta9B249CiHb6E89RqrvXuQQQQ32YaaDe55pcadj5ikOP5HSkcBlX0WIGE8BX79U269VrxyNmWXsuIxqlgd8&X-Amz-Signature=2af4eca0b7ff92d9bb9ffbe25b9fd68c3ffc37bc040aa254463fc75e5c1e30bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
