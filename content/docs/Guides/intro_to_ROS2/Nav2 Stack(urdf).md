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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZPYDMP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62fDGpfLBRCC8%2BwXlh34v6Szyuau41ADJQxmb68DyYAIhALb58KyReljPM2BN1Tn%2BD8fEFG6A5ZxlwWF78bTRHFLvKv8DCGEQABoMNjM3NDIzMTgzODA1Igwd42txw4Ie8LB1e7Mq3AP%2Fpg%2FvLwFca%2BgjVKpbbg3b2%2FYq%2F96C4xaM2BmhpW9JzFbjJSDVx37di4zrQUva8cxo43HP37HgB0q535gABD1fdWqD0LfAcUZDq1I9HHDVDzhonb85Rl6r%2Fji4nHDZB1Wm1LpWGm1UFu2U%2BOoNXDvKZ3cWF%2FwP7oRcdNpsKrpZ9ytxsxp8XOGoodZ0u%2BUTu%2F30Aujrb2y8G1bxRCiEztMYzxLoCf5lqxmom1IqK5OuaI%2FaPfH24VZ4GWP0hke89PG%2F275%2B1929EpfbY4mTGVu0Bf88y6YiKIeUD9CU4Wc%2Bxp7HLhHQ98ysbzLLQCBk9OM%2B%2BFTKoz34Nid0lYzG%2FX23hQUolS366IyMbdKDLmVnLTq9hwCC%2BVpZcmm15U0OB6VOwK5cmZyT1GFSi%2BskDs1wa2P9rP90D1xlBAZPqaPASR561dq8nhjpPE4NfcAydraYJk%2FKl370g1TrbRC5oKxMPlDH7qHoNVY8Njfr4Tw4BK%2FwGte3W3E59sPgIzlN5MVxHvbC6GRTYwowRVX0m5umKxIfXJnxEmWU8NhEWJbvHh3zjaha2uWCgLf4s8SoCpZlbRQjdGznbf3cdtaC%2B8gf6BOYKiUiT0Rm%2BZy%2Fieae9geWSgo6qS2oFFgNezCjiZu%2FBjqkAcFbC7cH3zTjKSJ8tq%2BbWfhN0M4Y6DBojkuRZVKyUQ5XqXWEPuQqARquHnTBHKDDRcoNsEuPymTAUVglEhFZilLAYCjmQFFZ1yq941LGB2RssJxPhyU%2BS%2Berfy%2FE6YKoJdb9aNcStHkRBIwnPbtJXkYYyf%2BQBDTNqGjWWr3SSa4LcAQpjRpO9sTlT2xY%2BcSPFjoqMphZCTitU60Ck0H2KQSRyaxm&X-Amz-Signature=f308f43450f71f7ea86b86c4f66a86b79dc1e55db9e53c77f95acd0661a61362&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZPYDMP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62fDGpfLBRCC8%2BwXlh34v6Szyuau41ADJQxmb68DyYAIhALb58KyReljPM2BN1Tn%2BD8fEFG6A5ZxlwWF78bTRHFLvKv8DCGEQABoMNjM3NDIzMTgzODA1Igwd42txw4Ie8LB1e7Mq3AP%2Fpg%2FvLwFca%2BgjVKpbbg3b2%2FYq%2F96C4xaM2BmhpW9JzFbjJSDVx37di4zrQUva8cxo43HP37HgB0q535gABD1fdWqD0LfAcUZDq1I9HHDVDzhonb85Rl6r%2Fji4nHDZB1Wm1LpWGm1UFu2U%2BOoNXDvKZ3cWF%2FwP7oRcdNpsKrpZ9ytxsxp8XOGoodZ0u%2BUTu%2F30Aujrb2y8G1bxRCiEztMYzxLoCf5lqxmom1IqK5OuaI%2FaPfH24VZ4GWP0hke89PG%2F275%2B1929EpfbY4mTGVu0Bf88y6YiKIeUD9CU4Wc%2Bxp7HLhHQ98ysbzLLQCBk9OM%2B%2BFTKoz34Nid0lYzG%2FX23hQUolS366IyMbdKDLmVnLTq9hwCC%2BVpZcmm15U0OB6VOwK5cmZyT1GFSi%2BskDs1wa2P9rP90D1xlBAZPqaPASR561dq8nhjpPE4NfcAydraYJk%2FKl370g1TrbRC5oKxMPlDH7qHoNVY8Njfr4Tw4BK%2FwGte3W3E59sPgIzlN5MVxHvbC6GRTYwowRVX0m5umKxIfXJnxEmWU8NhEWJbvHh3zjaha2uWCgLf4s8SoCpZlbRQjdGznbf3cdtaC%2B8gf6BOYKiUiT0Rm%2BZy%2Fieae9geWSgo6qS2oFFgNezCjiZu%2FBjqkAcFbC7cH3zTjKSJ8tq%2BbWfhN0M4Y6DBojkuRZVKyUQ5XqXWEPuQqARquHnTBHKDDRcoNsEuPymTAUVglEhFZilLAYCjmQFFZ1yq941LGB2RssJxPhyU%2BS%2Berfy%2FE6YKoJdb9aNcStHkRBIwnPbtJXkYYyf%2BQBDTNqGjWWr3SSa4LcAQpjRpO9sTlT2xY%2BcSPFjoqMphZCTitU60Ck0H2KQSRyaxm&X-Amz-Signature=7f16195910e27a876af0bbe4c8e509feaca19a44222a20659d584369b15b3984&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZPYDMP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62fDGpfLBRCC8%2BwXlh34v6Szyuau41ADJQxmb68DyYAIhALb58KyReljPM2BN1Tn%2BD8fEFG6A5ZxlwWF78bTRHFLvKv8DCGEQABoMNjM3NDIzMTgzODA1Igwd42txw4Ie8LB1e7Mq3AP%2Fpg%2FvLwFca%2BgjVKpbbg3b2%2FYq%2F96C4xaM2BmhpW9JzFbjJSDVx37di4zrQUva8cxo43HP37HgB0q535gABD1fdWqD0LfAcUZDq1I9HHDVDzhonb85Rl6r%2Fji4nHDZB1Wm1LpWGm1UFu2U%2BOoNXDvKZ3cWF%2FwP7oRcdNpsKrpZ9ytxsxp8XOGoodZ0u%2BUTu%2F30Aujrb2y8G1bxRCiEztMYzxLoCf5lqxmom1IqK5OuaI%2FaPfH24VZ4GWP0hke89PG%2F275%2B1929EpfbY4mTGVu0Bf88y6YiKIeUD9CU4Wc%2Bxp7HLhHQ98ysbzLLQCBk9OM%2B%2BFTKoz34Nid0lYzG%2FX23hQUolS366IyMbdKDLmVnLTq9hwCC%2BVpZcmm15U0OB6VOwK5cmZyT1GFSi%2BskDs1wa2P9rP90D1xlBAZPqaPASR561dq8nhjpPE4NfcAydraYJk%2FKl370g1TrbRC5oKxMPlDH7qHoNVY8Njfr4Tw4BK%2FwGte3W3E59sPgIzlN5MVxHvbC6GRTYwowRVX0m5umKxIfXJnxEmWU8NhEWJbvHh3zjaha2uWCgLf4s8SoCpZlbRQjdGznbf3cdtaC%2B8gf6BOYKiUiT0Rm%2BZy%2Fieae9geWSgo6qS2oFFgNezCjiZu%2FBjqkAcFbC7cH3zTjKSJ8tq%2BbWfhN0M4Y6DBojkuRZVKyUQ5XqXWEPuQqARquHnTBHKDDRcoNsEuPymTAUVglEhFZilLAYCjmQFFZ1yq941LGB2RssJxPhyU%2BS%2Berfy%2FE6YKoJdb9aNcStHkRBIwnPbtJXkYYyf%2BQBDTNqGjWWr3SSa4LcAQpjRpO9sTlT2xY%2BcSPFjoqMphZCTitU60Ck0H2KQSRyaxm&X-Amz-Signature=ad75654a62f23d2d4ecf760519e0bd08bc231d0ec021053922b67879d0185d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZPYDMP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62fDGpfLBRCC8%2BwXlh34v6Szyuau41ADJQxmb68DyYAIhALb58KyReljPM2BN1Tn%2BD8fEFG6A5ZxlwWF78bTRHFLvKv8DCGEQABoMNjM3NDIzMTgzODA1Igwd42txw4Ie8LB1e7Mq3AP%2Fpg%2FvLwFca%2BgjVKpbbg3b2%2FYq%2F96C4xaM2BmhpW9JzFbjJSDVx37di4zrQUva8cxo43HP37HgB0q535gABD1fdWqD0LfAcUZDq1I9HHDVDzhonb85Rl6r%2Fji4nHDZB1Wm1LpWGm1UFu2U%2BOoNXDvKZ3cWF%2FwP7oRcdNpsKrpZ9ytxsxp8XOGoodZ0u%2BUTu%2F30Aujrb2y8G1bxRCiEztMYzxLoCf5lqxmom1IqK5OuaI%2FaPfH24VZ4GWP0hke89PG%2F275%2B1929EpfbY4mTGVu0Bf88y6YiKIeUD9CU4Wc%2Bxp7HLhHQ98ysbzLLQCBk9OM%2B%2BFTKoz34Nid0lYzG%2FX23hQUolS366IyMbdKDLmVnLTq9hwCC%2BVpZcmm15U0OB6VOwK5cmZyT1GFSi%2BskDs1wa2P9rP90D1xlBAZPqaPASR561dq8nhjpPE4NfcAydraYJk%2FKl370g1TrbRC5oKxMPlDH7qHoNVY8Njfr4Tw4BK%2FwGte3W3E59sPgIzlN5MVxHvbC6GRTYwowRVX0m5umKxIfXJnxEmWU8NhEWJbvHh3zjaha2uWCgLf4s8SoCpZlbRQjdGznbf3cdtaC%2B8gf6BOYKiUiT0Rm%2BZy%2Fieae9geWSgo6qS2oFFgNezCjiZu%2FBjqkAcFbC7cH3zTjKSJ8tq%2BbWfhN0M4Y6DBojkuRZVKyUQ5XqXWEPuQqARquHnTBHKDDRcoNsEuPymTAUVglEhFZilLAYCjmQFFZ1yq941LGB2RssJxPhyU%2BS%2Berfy%2FE6YKoJdb9aNcStHkRBIwnPbtJXkYYyf%2BQBDTNqGjWWr3SSa4LcAQpjRpO9sTlT2xY%2BcSPFjoqMphZCTitU60Ck0H2KQSRyaxm&X-Amz-Signature=08efb705e4637c674f9b3c502c5545f1e87a40b2451f7489ad5d81b55326b894&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZPYDMP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62fDGpfLBRCC8%2BwXlh34v6Szyuau41ADJQxmb68DyYAIhALb58KyReljPM2BN1Tn%2BD8fEFG6A5ZxlwWF78bTRHFLvKv8DCGEQABoMNjM3NDIzMTgzODA1Igwd42txw4Ie8LB1e7Mq3AP%2Fpg%2FvLwFca%2BgjVKpbbg3b2%2FYq%2F96C4xaM2BmhpW9JzFbjJSDVx37di4zrQUva8cxo43HP37HgB0q535gABD1fdWqD0LfAcUZDq1I9HHDVDzhonb85Rl6r%2Fji4nHDZB1Wm1LpWGm1UFu2U%2BOoNXDvKZ3cWF%2FwP7oRcdNpsKrpZ9ytxsxp8XOGoodZ0u%2BUTu%2F30Aujrb2y8G1bxRCiEztMYzxLoCf5lqxmom1IqK5OuaI%2FaPfH24VZ4GWP0hke89PG%2F275%2B1929EpfbY4mTGVu0Bf88y6YiKIeUD9CU4Wc%2Bxp7HLhHQ98ysbzLLQCBk9OM%2B%2BFTKoz34Nid0lYzG%2FX23hQUolS366IyMbdKDLmVnLTq9hwCC%2BVpZcmm15U0OB6VOwK5cmZyT1GFSi%2BskDs1wa2P9rP90D1xlBAZPqaPASR561dq8nhjpPE4NfcAydraYJk%2FKl370g1TrbRC5oKxMPlDH7qHoNVY8Njfr4Tw4BK%2FwGte3W3E59sPgIzlN5MVxHvbC6GRTYwowRVX0m5umKxIfXJnxEmWU8NhEWJbvHh3zjaha2uWCgLf4s8SoCpZlbRQjdGznbf3cdtaC%2B8gf6BOYKiUiT0Rm%2BZy%2Fieae9geWSgo6qS2oFFgNezCjiZu%2FBjqkAcFbC7cH3zTjKSJ8tq%2BbWfhN0M4Y6DBojkuRZVKyUQ5XqXWEPuQqARquHnTBHKDDRcoNsEuPymTAUVglEhFZilLAYCjmQFFZ1yq941LGB2RssJxPhyU%2BS%2Berfy%2FE6YKoJdb9aNcStHkRBIwnPbtJXkYYyf%2BQBDTNqGjWWr3SSa4LcAQpjRpO9sTlT2xY%2BcSPFjoqMphZCTitU60Ck0H2KQSRyaxm&X-Amz-Signature=da17ee9a3998303d4e2373ff9d8bf952c55f423ad4273b66a5356e90f07f6931&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZPYDMP%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62fDGpfLBRCC8%2BwXlh34v6Szyuau41ADJQxmb68DyYAIhALb58KyReljPM2BN1Tn%2BD8fEFG6A5ZxlwWF78bTRHFLvKv8DCGEQABoMNjM3NDIzMTgzODA1Igwd42txw4Ie8LB1e7Mq3AP%2Fpg%2FvLwFca%2BgjVKpbbg3b2%2FYq%2F96C4xaM2BmhpW9JzFbjJSDVx37di4zrQUva8cxo43HP37HgB0q535gABD1fdWqD0LfAcUZDq1I9HHDVDzhonb85Rl6r%2Fji4nHDZB1Wm1LpWGm1UFu2U%2BOoNXDvKZ3cWF%2FwP7oRcdNpsKrpZ9ytxsxp8XOGoodZ0u%2BUTu%2F30Aujrb2y8G1bxRCiEztMYzxLoCf5lqxmom1IqK5OuaI%2FaPfH24VZ4GWP0hke89PG%2F275%2B1929EpfbY4mTGVu0Bf88y6YiKIeUD9CU4Wc%2Bxp7HLhHQ98ysbzLLQCBk9OM%2B%2BFTKoz34Nid0lYzG%2FX23hQUolS366IyMbdKDLmVnLTq9hwCC%2BVpZcmm15U0OB6VOwK5cmZyT1GFSi%2BskDs1wa2P9rP90D1xlBAZPqaPASR561dq8nhjpPE4NfcAydraYJk%2FKl370g1TrbRC5oKxMPlDH7qHoNVY8Njfr4Tw4BK%2FwGte3W3E59sPgIzlN5MVxHvbC6GRTYwowRVX0m5umKxIfXJnxEmWU8NhEWJbvHh3zjaha2uWCgLf4s8SoCpZlbRQjdGznbf3cdtaC%2B8gf6BOYKiUiT0Rm%2BZy%2Fieae9geWSgo6qS2oFFgNezCjiZu%2FBjqkAcFbC7cH3zTjKSJ8tq%2BbWfhN0M4Y6DBojkuRZVKyUQ5XqXWEPuQqARquHnTBHKDDRcoNsEuPymTAUVglEhFZilLAYCjmQFFZ1yq941LGB2RssJxPhyU%2BS%2Berfy%2FE6YKoJdb9aNcStHkRBIwnPbtJXkYYyf%2BQBDTNqGjWWr3SSa4LcAQpjRpO9sTlT2xY%2BcSPFjoqMphZCTitU60Ck0H2KQSRyaxm&X-Amz-Signature=aadc213167675ad55b4549cbd91a6c0caa3297214862c55e6148d05898d64036&X-Amz-SignedHeaders=host&x-id=GetObject)
