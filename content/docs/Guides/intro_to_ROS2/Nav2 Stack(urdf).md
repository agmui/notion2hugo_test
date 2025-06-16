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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXLUNZE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEovAlcxb6n6FOgLXhCxC9Mn9m0jO92BEq2BE7C0QcjZAiEA2MoAwn7s3%2BSNeJa5CDPcyEUp3l96hcnR%2B3wKtBZh4dcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEb8mn42SfOcoYttSSrcA1tHKoguD%2Bbm1%2B6VBr9jt1WfWyf5dUq%2FTZDp%2F%2BIkkNn6dryPmTx4Jd4KkIVhU9%2BHzEmtCeAhzhrz6hDJ8Xo2p6b9VS5OFhNEtGIH%2BMDYlIieZoroBzqE9Goyyz8KW1JXjzTy3uurMcZldPwGOV%2FC0kQHBZ1nadZM5nYHKwLw7XukoMBJYXXhlGfC45DN3%2BqGjgatbBkpjMeoZIVPoPbaCkyJH7%2BMKFhn72CEstfbYuIOJxKdZ1lPlfTb9fOwRCJVtC7B%2BmwLmc%2Bb3N5ErifyB1TuEgBUsVtk4c3Iof8tAL5ewxdr%2BpE3fjl2ucJGbfkDt3kGWixc7hIQIQI7o%2Fvod7zzFGn0%2BsS9PhTbogig6Q7WHFEcjNzxXS6cdpgpDn8dyz1tQiqtumwt%2F9PQFGxeg%2F%2Fudy6kD2eTZzQyk%2BeJUe2iFOKObv9yGqEyjYj7V3mEgeKsnsA9xH1Bnn9zQznVzP1smuYZs71yc36QOw7AVQ789w0ZMheF%2FTznlvS9ZwD3FBBNHLFuIRmtqKgAhrlBWgcil7C7AKAioaS%2FrMHELg7uYi2kH24J2yNM4YjenNDdaNXXN8n8OHjzpR4w6zcmNh682Ug%2FBfnHI0s38tT8kxOY3aA7PenoP1Bg31hBMPqvwcIGOqUBE6N070VuI%2FBq8d0n01uZXIkdICRqcuxr%2FGB%2BaaMsMNBO6QGs%2FHisRTxiiXe5wB2Lr%2FgE2EKSaIIMcYSd%2BRefM6reiGzVujyoPSAXchvA%2BnwYvyjIUKJiT7XOP1V%2FZjWsSJRdLZEUiKrlsdqi2B9Kcg4M0uMAhGIng1goR3Wdm98%2FPh8huwKxLGK1x654U6FN4neJ%2FxRp3F7xYgs9tqUCcNk1%2FW4w&X-Amz-Signature=741a6c5dc820b167bb9999b1a98b1e67a338235d490d83eaddea7eaa36df9b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXLUNZE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEovAlcxb6n6FOgLXhCxC9Mn9m0jO92BEq2BE7C0QcjZAiEA2MoAwn7s3%2BSNeJa5CDPcyEUp3l96hcnR%2B3wKtBZh4dcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEb8mn42SfOcoYttSSrcA1tHKoguD%2Bbm1%2B6VBr9jt1WfWyf5dUq%2FTZDp%2F%2BIkkNn6dryPmTx4Jd4KkIVhU9%2BHzEmtCeAhzhrz6hDJ8Xo2p6b9VS5OFhNEtGIH%2BMDYlIieZoroBzqE9Goyyz8KW1JXjzTy3uurMcZldPwGOV%2FC0kQHBZ1nadZM5nYHKwLw7XukoMBJYXXhlGfC45DN3%2BqGjgatbBkpjMeoZIVPoPbaCkyJH7%2BMKFhn72CEstfbYuIOJxKdZ1lPlfTb9fOwRCJVtC7B%2BmwLmc%2Bb3N5ErifyB1TuEgBUsVtk4c3Iof8tAL5ewxdr%2BpE3fjl2ucJGbfkDt3kGWixc7hIQIQI7o%2Fvod7zzFGn0%2BsS9PhTbogig6Q7WHFEcjNzxXS6cdpgpDn8dyz1tQiqtumwt%2F9PQFGxeg%2F%2Fudy6kD2eTZzQyk%2BeJUe2iFOKObv9yGqEyjYj7V3mEgeKsnsA9xH1Bnn9zQznVzP1smuYZs71yc36QOw7AVQ789w0ZMheF%2FTznlvS9ZwD3FBBNHLFuIRmtqKgAhrlBWgcil7C7AKAioaS%2FrMHELg7uYi2kH24J2yNM4YjenNDdaNXXN8n8OHjzpR4w6zcmNh682Ug%2FBfnHI0s38tT8kxOY3aA7PenoP1Bg31hBMPqvwcIGOqUBE6N070VuI%2FBq8d0n01uZXIkdICRqcuxr%2FGB%2BaaMsMNBO6QGs%2FHisRTxiiXe5wB2Lr%2FgE2EKSaIIMcYSd%2BRefM6reiGzVujyoPSAXchvA%2BnwYvyjIUKJiT7XOP1V%2FZjWsSJRdLZEUiKrlsdqi2B9Kcg4M0uMAhGIng1goR3Wdm98%2FPh8huwKxLGK1x654U6FN4neJ%2FxRp3F7xYgs9tqUCcNk1%2FW4w&X-Amz-Signature=3270e0b955ed8c9a94b95e7da474455242bd493762d5c2687a0a50b39cf6974d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXLUNZE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEovAlcxb6n6FOgLXhCxC9Mn9m0jO92BEq2BE7C0QcjZAiEA2MoAwn7s3%2BSNeJa5CDPcyEUp3l96hcnR%2B3wKtBZh4dcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEb8mn42SfOcoYttSSrcA1tHKoguD%2Bbm1%2B6VBr9jt1WfWyf5dUq%2FTZDp%2F%2BIkkNn6dryPmTx4Jd4KkIVhU9%2BHzEmtCeAhzhrz6hDJ8Xo2p6b9VS5OFhNEtGIH%2BMDYlIieZoroBzqE9Goyyz8KW1JXjzTy3uurMcZldPwGOV%2FC0kQHBZ1nadZM5nYHKwLw7XukoMBJYXXhlGfC45DN3%2BqGjgatbBkpjMeoZIVPoPbaCkyJH7%2BMKFhn72CEstfbYuIOJxKdZ1lPlfTb9fOwRCJVtC7B%2BmwLmc%2Bb3N5ErifyB1TuEgBUsVtk4c3Iof8tAL5ewxdr%2BpE3fjl2ucJGbfkDt3kGWixc7hIQIQI7o%2Fvod7zzFGn0%2BsS9PhTbogig6Q7WHFEcjNzxXS6cdpgpDn8dyz1tQiqtumwt%2F9PQFGxeg%2F%2Fudy6kD2eTZzQyk%2BeJUe2iFOKObv9yGqEyjYj7V3mEgeKsnsA9xH1Bnn9zQznVzP1smuYZs71yc36QOw7AVQ789w0ZMheF%2FTznlvS9ZwD3FBBNHLFuIRmtqKgAhrlBWgcil7C7AKAioaS%2FrMHELg7uYi2kH24J2yNM4YjenNDdaNXXN8n8OHjzpR4w6zcmNh682Ug%2FBfnHI0s38tT8kxOY3aA7PenoP1Bg31hBMPqvwcIGOqUBE6N070VuI%2FBq8d0n01uZXIkdICRqcuxr%2FGB%2BaaMsMNBO6QGs%2FHisRTxiiXe5wB2Lr%2FgE2EKSaIIMcYSd%2BRefM6reiGzVujyoPSAXchvA%2BnwYvyjIUKJiT7XOP1V%2FZjWsSJRdLZEUiKrlsdqi2B9Kcg4M0uMAhGIng1goR3Wdm98%2FPh8huwKxLGK1x654U6FN4neJ%2FxRp3F7xYgs9tqUCcNk1%2FW4w&X-Amz-Signature=66690b1c9041a34bc630dc141c4c6257be9fb677bd2abb0065b8a3791ab25a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXLUNZE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEovAlcxb6n6FOgLXhCxC9Mn9m0jO92BEq2BE7C0QcjZAiEA2MoAwn7s3%2BSNeJa5CDPcyEUp3l96hcnR%2B3wKtBZh4dcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEb8mn42SfOcoYttSSrcA1tHKoguD%2Bbm1%2B6VBr9jt1WfWyf5dUq%2FTZDp%2F%2BIkkNn6dryPmTx4Jd4KkIVhU9%2BHzEmtCeAhzhrz6hDJ8Xo2p6b9VS5OFhNEtGIH%2BMDYlIieZoroBzqE9Goyyz8KW1JXjzTy3uurMcZldPwGOV%2FC0kQHBZ1nadZM5nYHKwLw7XukoMBJYXXhlGfC45DN3%2BqGjgatbBkpjMeoZIVPoPbaCkyJH7%2BMKFhn72CEstfbYuIOJxKdZ1lPlfTb9fOwRCJVtC7B%2BmwLmc%2Bb3N5ErifyB1TuEgBUsVtk4c3Iof8tAL5ewxdr%2BpE3fjl2ucJGbfkDt3kGWixc7hIQIQI7o%2Fvod7zzFGn0%2BsS9PhTbogig6Q7WHFEcjNzxXS6cdpgpDn8dyz1tQiqtumwt%2F9PQFGxeg%2F%2Fudy6kD2eTZzQyk%2BeJUe2iFOKObv9yGqEyjYj7V3mEgeKsnsA9xH1Bnn9zQznVzP1smuYZs71yc36QOw7AVQ789w0ZMheF%2FTznlvS9ZwD3FBBNHLFuIRmtqKgAhrlBWgcil7C7AKAioaS%2FrMHELg7uYi2kH24J2yNM4YjenNDdaNXXN8n8OHjzpR4w6zcmNh682Ug%2FBfnHI0s38tT8kxOY3aA7PenoP1Bg31hBMPqvwcIGOqUBE6N070VuI%2FBq8d0n01uZXIkdICRqcuxr%2FGB%2BaaMsMNBO6QGs%2FHisRTxiiXe5wB2Lr%2FgE2EKSaIIMcYSd%2BRefM6reiGzVujyoPSAXchvA%2BnwYvyjIUKJiT7XOP1V%2FZjWsSJRdLZEUiKrlsdqi2B9Kcg4M0uMAhGIng1goR3Wdm98%2FPh8huwKxLGK1x654U6FN4neJ%2FxRp3F7xYgs9tqUCcNk1%2FW4w&X-Amz-Signature=10112249e91c745436ea2ad0480278643b96b3f046d726a084854d2d96ef5644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXLUNZE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEovAlcxb6n6FOgLXhCxC9Mn9m0jO92BEq2BE7C0QcjZAiEA2MoAwn7s3%2BSNeJa5CDPcyEUp3l96hcnR%2B3wKtBZh4dcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEb8mn42SfOcoYttSSrcA1tHKoguD%2Bbm1%2B6VBr9jt1WfWyf5dUq%2FTZDp%2F%2BIkkNn6dryPmTx4Jd4KkIVhU9%2BHzEmtCeAhzhrz6hDJ8Xo2p6b9VS5OFhNEtGIH%2BMDYlIieZoroBzqE9Goyyz8KW1JXjzTy3uurMcZldPwGOV%2FC0kQHBZ1nadZM5nYHKwLw7XukoMBJYXXhlGfC45DN3%2BqGjgatbBkpjMeoZIVPoPbaCkyJH7%2BMKFhn72CEstfbYuIOJxKdZ1lPlfTb9fOwRCJVtC7B%2BmwLmc%2Bb3N5ErifyB1TuEgBUsVtk4c3Iof8tAL5ewxdr%2BpE3fjl2ucJGbfkDt3kGWixc7hIQIQI7o%2Fvod7zzFGn0%2BsS9PhTbogig6Q7WHFEcjNzxXS6cdpgpDn8dyz1tQiqtumwt%2F9PQFGxeg%2F%2Fudy6kD2eTZzQyk%2BeJUe2iFOKObv9yGqEyjYj7V3mEgeKsnsA9xH1Bnn9zQznVzP1smuYZs71yc36QOw7AVQ789w0ZMheF%2FTznlvS9ZwD3FBBNHLFuIRmtqKgAhrlBWgcil7C7AKAioaS%2FrMHELg7uYi2kH24J2yNM4YjenNDdaNXXN8n8OHjzpR4w6zcmNh682Ug%2FBfnHI0s38tT8kxOY3aA7PenoP1Bg31hBMPqvwcIGOqUBE6N070VuI%2FBq8d0n01uZXIkdICRqcuxr%2FGB%2BaaMsMNBO6QGs%2FHisRTxiiXe5wB2Lr%2FgE2EKSaIIMcYSd%2BRefM6reiGzVujyoPSAXchvA%2BnwYvyjIUKJiT7XOP1V%2FZjWsSJRdLZEUiKrlsdqi2B9Kcg4M0uMAhGIng1goR3Wdm98%2FPh8huwKxLGK1x654U6FN4neJ%2FxRp3F7xYgs9tqUCcNk1%2FW4w&X-Amz-Signature=5c211a40e3746eb062f056fdd0282a41fbc9fe5c011f789a8cce817da771c88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEXLUNZE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEovAlcxb6n6FOgLXhCxC9Mn9m0jO92BEq2BE7C0QcjZAiEA2MoAwn7s3%2BSNeJa5CDPcyEUp3l96hcnR%2B3wKtBZh4dcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEb8mn42SfOcoYttSSrcA1tHKoguD%2Bbm1%2B6VBr9jt1WfWyf5dUq%2FTZDp%2F%2BIkkNn6dryPmTx4Jd4KkIVhU9%2BHzEmtCeAhzhrz6hDJ8Xo2p6b9VS5OFhNEtGIH%2BMDYlIieZoroBzqE9Goyyz8KW1JXjzTy3uurMcZldPwGOV%2FC0kQHBZ1nadZM5nYHKwLw7XukoMBJYXXhlGfC45DN3%2BqGjgatbBkpjMeoZIVPoPbaCkyJH7%2BMKFhn72CEstfbYuIOJxKdZ1lPlfTb9fOwRCJVtC7B%2BmwLmc%2Bb3N5ErifyB1TuEgBUsVtk4c3Iof8tAL5ewxdr%2BpE3fjl2ucJGbfkDt3kGWixc7hIQIQI7o%2Fvod7zzFGn0%2BsS9PhTbogig6Q7WHFEcjNzxXS6cdpgpDn8dyz1tQiqtumwt%2F9PQFGxeg%2F%2Fudy6kD2eTZzQyk%2BeJUe2iFOKObv9yGqEyjYj7V3mEgeKsnsA9xH1Bnn9zQznVzP1smuYZs71yc36QOw7AVQ789w0ZMheF%2FTznlvS9ZwD3FBBNHLFuIRmtqKgAhrlBWgcil7C7AKAioaS%2FrMHELg7uYi2kH24J2yNM4YjenNDdaNXXN8n8OHjzpR4w6zcmNh682Ug%2FBfnHI0s38tT8kxOY3aA7PenoP1Bg31hBMPqvwcIGOqUBE6N070VuI%2FBq8d0n01uZXIkdICRqcuxr%2FGB%2BaaMsMNBO6QGs%2FHisRTxiiXe5wB2Lr%2FgE2EKSaIIMcYSd%2BRefM6reiGzVujyoPSAXchvA%2BnwYvyjIUKJiT7XOP1V%2FZjWsSJRdLZEUiKrlsdqi2B9Kcg4M0uMAhGIng1goR3Wdm98%2FPh8huwKxLGK1x654U6FN4neJ%2FxRp3F7xYgs9tqUCcNk1%2FW4w&X-Amz-Signature=0b8a6586da21de6b88123400d725f642fc85c12a2d8ef9dd0e254a0688312d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
