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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YOIV5C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH%2BtFZSmUvrtIroezqydk%2BJkiUICrPTkCYwq%2F3JgxZ4bAiEAjHrZ%2BeGK8D24bUX9%2BqpRYmX0PLOwwiq0brBxoh3cIzQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDI3B9nTSNlcRcb9wsCrcA3Jfv%2BSmF00615V90sMXoaLE7VWHrlHUQP%2BTfdFBofK%2BDofzYI%2BxalSujwEcoOI8OSUfoBf52NwBvQjMMIRlv1QTTVxG4eYU3h6A%2FQPXR0l3xPOqtzG9V7fuAzYMwNLVbqHNFCdIIQ0hAEC%2FUc5PQaeqHOaldJsvWhMdQ0oXy%2F2JgAbsUPWJ%2BymkrHVzs9caWEelYQYoZPVB%2F1n9NvZvFA8GGGFcmWCLd%2BIq1qam6To0K9TGbx796RL3CUkYtpdumBOwo1TuGWviCrjQUJVn%2FLvsk%2FRRmvoUg2kYiW5xTIjDLXlFn05O%2BNfg3AkKKvdS8lsyJ2PgG1kCKuthE9LFMhaoRPyu2lwUG8ygMNBpUep6G0wLni2BoVCiWf6bEICvijxbadf1vD%2BvYYYT%2BrgYvzGM40z4C0TuBKGf0w3u7D2Wysl2y5WoSEO40HmtHEGJ1j9cHqMoLwUGWBV1Fxp7UIa12dFFuURMQ%2F8K7UUF1Ketr5vmnRAq6UeQnPF%2BeTNLjcrpf30SEt3ipxwOOwW7MiLCBYdqdEs1kvBEMjrTy3x2kC6uwNF8viUJOzLhPOgadP%2F%2B0QWbnPZZ094ljibDe%2FJdeOLU63pEhT%2BaYBUvM9U%2FyosD7I7tnYfikqGBMLCIyb0GOqUB8Ci2fikJVMXMuaqZb8VhDnUT2UAnP4G8TkP%2F92klv9zTDFVNuTy4AibTa7KsiaAw0RQO5LXjpWhQTk%2Fh%2B7eQYruSAVgP8o1oAVkBLNfdlrrHlRLDPHLKqqqeBWmWf1tdEulcPv7LxVsTdAsyD5DJlR8Z2LVokS6erFr5%2FuR0DPyNKcVDoqoVqYh2dhp1s7G2VSV%2B0SYqflD%2FbCZ8tZ597HyfrfoT&X-Amz-Signature=77d9875c9b533b47a071beecc8fa547987cbb8f095f570dfb298dacd43b46cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YOIV5C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH%2BtFZSmUvrtIroezqydk%2BJkiUICrPTkCYwq%2F3JgxZ4bAiEAjHrZ%2BeGK8D24bUX9%2BqpRYmX0PLOwwiq0brBxoh3cIzQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDI3B9nTSNlcRcb9wsCrcA3Jfv%2BSmF00615V90sMXoaLE7VWHrlHUQP%2BTfdFBofK%2BDofzYI%2BxalSujwEcoOI8OSUfoBf52NwBvQjMMIRlv1QTTVxG4eYU3h6A%2FQPXR0l3xPOqtzG9V7fuAzYMwNLVbqHNFCdIIQ0hAEC%2FUc5PQaeqHOaldJsvWhMdQ0oXy%2F2JgAbsUPWJ%2BymkrHVzs9caWEelYQYoZPVB%2F1n9NvZvFA8GGGFcmWCLd%2BIq1qam6To0K9TGbx796RL3CUkYtpdumBOwo1TuGWviCrjQUJVn%2FLvsk%2FRRmvoUg2kYiW5xTIjDLXlFn05O%2BNfg3AkKKvdS8lsyJ2PgG1kCKuthE9LFMhaoRPyu2lwUG8ygMNBpUep6G0wLni2BoVCiWf6bEICvijxbadf1vD%2BvYYYT%2BrgYvzGM40z4C0TuBKGf0w3u7D2Wysl2y5WoSEO40HmtHEGJ1j9cHqMoLwUGWBV1Fxp7UIa12dFFuURMQ%2F8K7UUF1Ketr5vmnRAq6UeQnPF%2BeTNLjcrpf30SEt3ipxwOOwW7MiLCBYdqdEs1kvBEMjrTy3x2kC6uwNF8viUJOzLhPOgadP%2F%2B0QWbnPZZ094ljibDe%2FJdeOLU63pEhT%2BaYBUvM9U%2FyosD7I7tnYfikqGBMLCIyb0GOqUB8Ci2fikJVMXMuaqZb8VhDnUT2UAnP4G8TkP%2F92klv9zTDFVNuTy4AibTa7KsiaAw0RQO5LXjpWhQTk%2Fh%2B7eQYruSAVgP8o1oAVkBLNfdlrrHlRLDPHLKqqqeBWmWf1tdEulcPv7LxVsTdAsyD5DJlR8Z2LVokS6erFr5%2FuR0DPyNKcVDoqoVqYh2dhp1s7G2VSV%2B0SYqflD%2FbCZ8tZ597HyfrfoT&X-Amz-Signature=7f5012d429cd65cabce22a0e6973037e4e7a91377178b59975b2319c6a4bca08&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YOIV5C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH%2BtFZSmUvrtIroezqydk%2BJkiUICrPTkCYwq%2F3JgxZ4bAiEAjHrZ%2BeGK8D24bUX9%2BqpRYmX0PLOwwiq0brBxoh3cIzQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDI3B9nTSNlcRcb9wsCrcA3Jfv%2BSmF00615V90sMXoaLE7VWHrlHUQP%2BTfdFBofK%2BDofzYI%2BxalSujwEcoOI8OSUfoBf52NwBvQjMMIRlv1QTTVxG4eYU3h6A%2FQPXR0l3xPOqtzG9V7fuAzYMwNLVbqHNFCdIIQ0hAEC%2FUc5PQaeqHOaldJsvWhMdQ0oXy%2F2JgAbsUPWJ%2BymkrHVzs9caWEelYQYoZPVB%2F1n9NvZvFA8GGGFcmWCLd%2BIq1qam6To0K9TGbx796RL3CUkYtpdumBOwo1TuGWviCrjQUJVn%2FLvsk%2FRRmvoUg2kYiW5xTIjDLXlFn05O%2BNfg3AkKKvdS8lsyJ2PgG1kCKuthE9LFMhaoRPyu2lwUG8ygMNBpUep6G0wLni2BoVCiWf6bEICvijxbadf1vD%2BvYYYT%2BrgYvzGM40z4C0TuBKGf0w3u7D2Wysl2y5WoSEO40HmtHEGJ1j9cHqMoLwUGWBV1Fxp7UIa12dFFuURMQ%2F8K7UUF1Ketr5vmnRAq6UeQnPF%2BeTNLjcrpf30SEt3ipxwOOwW7MiLCBYdqdEs1kvBEMjrTy3x2kC6uwNF8viUJOzLhPOgadP%2F%2B0QWbnPZZ094ljibDe%2FJdeOLU63pEhT%2BaYBUvM9U%2FyosD7I7tnYfikqGBMLCIyb0GOqUB8Ci2fikJVMXMuaqZb8VhDnUT2UAnP4G8TkP%2F92klv9zTDFVNuTy4AibTa7KsiaAw0RQO5LXjpWhQTk%2Fh%2B7eQYruSAVgP8o1oAVkBLNfdlrrHlRLDPHLKqqqeBWmWf1tdEulcPv7LxVsTdAsyD5DJlR8Z2LVokS6erFr5%2FuR0DPyNKcVDoqoVqYh2dhp1s7G2VSV%2B0SYqflD%2FbCZ8tZ597HyfrfoT&X-Amz-Signature=edc8f2f81724dccde6f9bddfca83676e377988598fed2eec7ac0a428754d7a97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YOIV5C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH%2BtFZSmUvrtIroezqydk%2BJkiUICrPTkCYwq%2F3JgxZ4bAiEAjHrZ%2BeGK8D24bUX9%2BqpRYmX0PLOwwiq0brBxoh3cIzQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDI3B9nTSNlcRcb9wsCrcA3Jfv%2BSmF00615V90sMXoaLE7VWHrlHUQP%2BTfdFBofK%2BDofzYI%2BxalSujwEcoOI8OSUfoBf52NwBvQjMMIRlv1QTTVxG4eYU3h6A%2FQPXR0l3xPOqtzG9V7fuAzYMwNLVbqHNFCdIIQ0hAEC%2FUc5PQaeqHOaldJsvWhMdQ0oXy%2F2JgAbsUPWJ%2BymkrHVzs9caWEelYQYoZPVB%2F1n9NvZvFA8GGGFcmWCLd%2BIq1qam6To0K9TGbx796RL3CUkYtpdumBOwo1TuGWviCrjQUJVn%2FLvsk%2FRRmvoUg2kYiW5xTIjDLXlFn05O%2BNfg3AkKKvdS8lsyJ2PgG1kCKuthE9LFMhaoRPyu2lwUG8ygMNBpUep6G0wLni2BoVCiWf6bEICvijxbadf1vD%2BvYYYT%2BrgYvzGM40z4C0TuBKGf0w3u7D2Wysl2y5WoSEO40HmtHEGJ1j9cHqMoLwUGWBV1Fxp7UIa12dFFuURMQ%2F8K7UUF1Ketr5vmnRAq6UeQnPF%2BeTNLjcrpf30SEt3ipxwOOwW7MiLCBYdqdEs1kvBEMjrTy3x2kC6uwNF8viUJOzLhPOgadP%2F%2B0QWbnPZZ094ljibDe%2FJdeOLU63pEhT%2BaYBUvM9U%2FyosD7I7tnYfikqGBMLCIyb0GOqUB8Ci2fikJVMXMuaqZb8VhDnUT2UAnP4G8TkP%2F92klv9zTDFVNuTy4AibTa7KsiaAw0RQO5LXjpWhQTk%2Fh%2B7eQYruSAVgP8o1oAVkBLNfdlrrHlRLDPHLKqqqeBWmWf1tdEulcPv7LxVsTdAsyD5DJlR8Z2LVokS6erFr5%2FuR0DPyNKcVDoqoVqYh2dhp1s7G2VSV%2B0SYqflD%2FbCZ8tZ597HyfrfoT&X-Amz-Signature=24edb6feb7638c773f52349bc8c3a51120e50c02f7e51a11c8c4b9aed851dbbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YOIV5C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH%2BtFZSmUvrtIroezqydk%2BJkiUICrPTkCYwq%2F3JgxZ4bAiEAjHrZ%2BeGK8D24bUX9%2BqpRYmX0PLOwwiq0brBxoh3cIzQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDI3B9nTSNlcRcb9wsCrcA3Jfv%2BSmF00615V90sMXoaLE7VWHrlHUQP%2BTfdFBofK%2BDofzYI%2BxalSujwEcoOI8OSUfoBf52NwBvQjMMIRlv1QTTVxG4eYU3h6A%2FQPXR0l3xPOqtzG9V7fuAzYMwNLVbqHNFCdIIQ0hAEC%2FUc5PQaeqHOaldJsvWhMdQ0oXy%2F2JgAbsUPWJ%2BymkrHVzs9caWEelYQYoZPVB%2F1n9NvZvFA8GGGFcmWCLd%2BIq1qam6To0K9TGbx796RL3CUkYtpdumBOwo1TuGWviCrjQUJVn%2FLvsk%2FRRmvoUg2kYiW5xTIjDLXlFn05O%2BNfg3AkKKvdS8lsyJ2PgG1kCKuthE9LFMhaoRPyu2lwUG8ygMNBpUep6G0wLni2BoVCiWf6bEICvijxbadf1vD%2BvYYYT%2BrgYvzGM40z4C0TuBKGf0w3u7D2Wysl2y5WoSEO40HmtHEGJ1j9cHqMoLwUGWBV1Fxp7UIa12dFFuURMQ%2F8K7UUF1Ketr5vmnRAq6UeQnPF%2BeTNLjcrpf30SEt3ipxwOOwW7MiLCBYdqdEs1kvBEMjrTy3x2kC6uwNF8viUJOzLhPOgadP%2F%2B0QWbnPZZ094ljibDe%2FJdeOLU63pEhT%2BaYBUvM9U%2FyosD7I7tnYfikqGBMLCIyb0GOqUB8Ci2fikJVMXMuaqZb8VhDnUT2UAnP4G8TkP%2F92klv9zTDFVNuTy4AibTa7KsiaAw0RQO5LXjpWhQTk%2Fh%2B7eQYruSAVgP8o1oAVkBLNfdlrrHlRLDPHLKqqqeBWmWf1tdEulcPv7LxVsTdAsyD5DJlR8Z2LVokS6erFr5%2FuR0DPyNKcVDoqoVqYh2dhp1s7G2VSV%2B0SYqflD%2FbCZ8tZ597HyfrfoT&X-Amz-Signature=47d40ac3159da42c3b3b25f55038f9da8dc7bccd4af2a4786b2213e648591722&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3YOIV5C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH%2BtFZSmUvrtIroezqydk%2BJkiUICrPTkCYwq%2F3JgxZ4bAiEAjHrZ%2BeGK8D24bUX9%2BqpRYmX0PLOwwiq0brBxoh3cIzQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDI3B9nTSNlcRcb9wsCrcA3Jfv%2BSmF00615V90sMXoaLE7VWHrlHUQP%2BTfdFBofK%2BDofzYI%2BxalSujwEcoOI8OSUfoBf52NwBvQjMMIRlv1QTTVxG4eYU3h6A%2FQPXR0l3xPOqtzG9V7fuAzYMwNLVbqHNFCdIIQ0hAEC%2FUc5PQaeqHOaldJsvWhMdQ0oXy%2F2JgAbsUPWJ%2BymkrHVzs9caWEelYQYoZPVB%2F1n9NvZvFA8GGGFcmWCLd%2BIq1qam6To0K9TGbx796RL3CUkYtpdumBOwo1TuGWviCrjQUJVn%2FLvsk%2FRRmvoUg2kYiW5xTIjDLXlFn05O%2BNfg3AkKKvdS8lsyJ2PgG1kCKuthE9LFMhaoRPyu2lwUG8ygMNBpUep6G0wLni2BoVCiWf6bEICvijxbadf1vD%2BvYYYT%2BrgYvzGM40z4C0TuBKGf0w3u7D2Wysl2y5WoSEO40HmtHEGJ1j9cHqMoLwUGWBV1Fxp7UIa12dFFuURMQ%2F8K7UUF1Ketr5vmnRAq6UeQnPF%2BeTNLjcrpf30SEt3ipxwOOwW7MiLCBYdqdEs1kvBEMjrTy3x2kC6uwNF8viUJOzLhPOgadP%2F%2B0QWbnPZZ094ljibDe%2FJdeOLU63pEhT%2BaYBUvM9U%2FyosD7I7tnYfikqGBMLCIyb0GOqUB8Ci2fikJVMXMuaqZb8VhDnUT2UAnP4G8TkP%2F92klv9zTDFVNuTy4AibTa7KsiaAw0RQO5LXjpWhQTk%2Fh%2B7eQYruSAVgP8o1oAVkBLNfdlrrHlRLDPHLKqqqeBWmWf1tdEulcPv7LxVsTdAsyD5DJlR8Z2LVokS6erFr5%2FuR0DPyNKcVDoqoVqYh2dhp1s7G2VSV%2B0SYqflD%2FbCZ8tZ597HyfrfoT&X-Amz-Signature=89edf4f99b2205846f24792ea501c440e1a0775efb8243e4005ea3ceedab5dc9&X-Amz-SignedHeaders=host&x-id=GetObject)
