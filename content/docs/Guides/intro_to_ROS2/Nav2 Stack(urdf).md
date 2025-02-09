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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOA24AY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb5oYTRmjQK8isgyc4qiQLGAbNwUVMeVtl9ZF6IlsyGwIgc0e47alz%2BQpdIy5XbUTyHVDdNF0kc%2FwfMdBZbOaViCUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2By%2F%2F6oiWZbWKkY9yrcA1XVrxNFebu%2FbFnfk6Wt%2F8xSlVnTrROL%2FT9g6uRpaqwAgUZnhXN7pwzQU%2F9yenCI8zsEEz2wjzcfP6yBchOPkpR1cO3kHKDXQa8rPZiS2%2Bf6MNz4r3NaEh5V2qTuZYefXTNJJl3BjVc0T%2FUuFcFLIys0477N8qjLwqW6j1becNY8TimBb5CkK96Zc7vLLWBSxx9J%2BBX4hoPv1AH4bI9QhJ15vcv2TLaGN%2Bt%2BS5QMnYYX8n26INZFXATJ4XHKPV17Gc52sv%2FLpPvWowqf7idJ%2FAfnPRS7knSYKY8Ls8emVHQvFxc4BZj7HUZHpDj4HGFvNYZIUgCp5vbE9cmJFeowLshduCMXTJCSexS%2BAagF6TXWTwPl2bp5%2BnwIOsAhefH6ZWckee%2F9TsHazNDab4GhL7PcMHwgqPOZe5EqnO5zkgKmSnTvPxsfEBYXRpmHS%2B%2F%2FPmFRaaTvscFdbjqQXiXDm5PJkC79wqBYVE3YV0sfw5dc%2BcoupggtKScJqno%2BQSENh0HBGDomWTYNhq4eUoxKHBfC5X%2BRzUOR5HZxJX%2Fqw5AvJgfx4kllo12SvxSxE2MMHDekK2VR7NycOc6QpYRUJkdj44Vg7sjQcqz1WMDl9RmVPf%2F%2FxDrLyn9K1sJtMMy%2BoL0GOqUB62C2rLBZP%2FvI6PVoj0wT2nm72GZpJ7UPfPmQa2hQkUUHUeXhKDEcVpgX5kdmRVT0nIJAJfK2xeU5Y57sl%2FrPFEa4sItDVjiXfUyGEe2Rk2rijTM3spwfuVc8kLteKqg%2FMnbao58RnZsBDslrp805bIExyVVUCfv1dYX7vuXDpPitg46SkhrPcI9z3x7LITd0XazpP61RoxOqZ9q6qxPz7XM3mBxo&X-Amz-Signature=aeb7ff1ed020a1f8855dbea3582ce59453a476cee9b5fb93446ccd429dbac37c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOA24AY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb5oYTRmjQK8isgyc4qiQLGAbNwUVMeVtl9ZF6IlsyGwIgc0e47alz%2BQpdIy5XbUTyHVDdNF0kc%2FwfMdBZbOaViCUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2By%2F%2F6oiWZbWKkY9yrcA1XVrxNFebu%2FbFnfk6Wt%2F8xSlVnTrROL%2FT9g6uRpaqwAgUZnhXN7pwzQU%2F9yenCI8zsEEz2wjzcfP6yBchOPkpR1cO3kHKDXQa8rPZiS2%2Bf6MNz4r3NaEh5V2qTuZYefXTNJJl3BjVc0T%2FUuFcFLIys0477N8qjLwqW6j1becNY8TimBb5CkK96Zc7vLLWBSxx9J%2BBX4hoPv1AH4bI9QhJ15vcv2TLaGN%2Bt%2BS5QMnYYX8n26INZFXATJ4XHKPV17Gc52sv%2FLpPvWowqf7idJ%2FAfnPRS7knSYKY8Ls8emVHQvFxc4BZj7HUZHpDj4HGFvNYZIUgCp5vbE9cmJFeowLshduCMXTJCSexS%2BAagF6TXWTwPl2bp5%2BnwIOsAhefH6ZWckee%2F9TsHazNDab4GhL7PcMHwgqPOZe5EqnO5zkgKmSnTvPxsfEBYXRpmHS%2B%2F%2FPmFRaaTvscFdbjqQXiXDm5PJkC79wqBYVE3YV0sfw5dc%2BcoupggtKScJqno%2BQSENh0HBGDomWTYNhq4eUoxKHBfC5X%2BRzUOR5HZxJX%2Fqw5AvJgfx4kllo12SvxSxE2MMHDekK2VR7NycOc6QpYRUJkdj44Vg7sjQcqz1WMDl9RmVPf%2F%2FxDrLyn9K1sJtMMy%2BoL0GOqUB62C2rLBZP%2FvI6PVoj0wT2nm72GZpJ7UPfPmQa2hQkUUHUeXhKDEcVpgX5kdmRVT0nIJAJfK2xeU5Y57sl%2FrPFEa4sItDVjiXfUyGEe2Rk2rijTM3spwfuVc8kLteKqg%2FMnbao58RnZsBDslrp805bIExyVVUCfv1dYX7vuXDpPitg46SkhrPcI9z3x7LITd0XazpP61RoxOqZ9q6qxPz7XM3mBxo&X-Amz-Signature=d581ec48ea665eea76e0884c2963765c9f5ecce6d155e0a232062e41486cb040&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOA24AY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb5oYTRmjQK8isgyc4qiQLGAbNwUVMeVtl9ZF6IlsyGwIgc0e47alz%2BQpdIy5XbUTyHVDdNF0kc%2FwfMdBZbOaViCUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2By%2F%2F6oiWZbWKkY9yrcA1XVrxNFebu%2FbFnfk6Wt%2F8xSlVnTrROL%2FT9g6uRpaqwAgUZnhXN7pwzQU%2F9yenCI8zsEEz2wjzcfP6yBchOPkpR1cO3kHKDXQa8rPZiS2%2Bf6MNz4r3NaEh5V2qTuZYefXTNJJl3BjVc0T%2FUuFcFLIys0477N8qjLwqW6j1becNY8TimBb5CkK96Zc7vLLWBSxx9J%2BBX4hoPv1AH4bI9QhJ15vcv2TLaGN%2Bt%2BS5QMnYYX8n26INZFXATJ4XHKPV17Gc52sv%2FLpPvWowqf7idJ%2FAfnPRS7knSYKY8Ls8emVHQvFxc4BZj7HUZHpDj4HGFvNYZIUgCp5vbE9cmJFeowLshduCMXTJCSexS%2BAagF6TXWTwPl2bp5%2BnwIOsAhefH6ZWckee%2F9TsHazNDab4GhL7PcMHwgqPOZe5EqnO5zkgKmSnTvPxsfEBYXRpmHS%2B%2F%2FPmFRaaTvscFdbjqQXiXDm5PJkC79wqBYVE3YV0sfw5dc%2BcoupggtKScJqno%2BQSENh0HBGDomWTYNhq4eUoxKHBfC5X%2BRzUOR5HZxJX%2Fqw5AvJgfx4kllo12SvxSxE2MMHDekK2VR7NycOc6QpYRUJkdj44Vg7sjQcqz1WMDl9RmVPf%2F%2FxDrLyn9K1sJtMMy%2BoL0GOqUB62C2rLBZP%2FvI6PVoj0wT2nm72GZpJ7UPfPmQa2hQkUUHUeXhKDEcVpgX5kdmRVT0nIJAJfK2xeU5Y57sl%2FrPFEa4sItDVjiXfUyGEe2Rk2rijTM3spwfuVc8kLteKqg%2FMnbao58RnZsBDslrp805bIExyVVUCfv1dYX7vuXDpPitg46SkhrPcI9z3x7LITd0XazpP61RoxOqZ9q6qxPz7XM3mBxo&X-Amz-Signature=34fe1c3b95f916f409243fa46bf2e8af6632a93c06f9480c073ec725825c2c48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOA24AY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb5oYTRmjQK8isgyc4qiQLGAbNwUVMeVtl9ZF6IlsyGwIgc0e47alz%2BQpdIy5XbUTyHVDdNF0kc%2FwfMdBZbOaViCUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2By%2F%2F6oiWZbWKkY9yrcA1XVrxNFebu%2FbFnfk6Wt%2F8xSlVnTrROL%2FT9g6uRpaqwAgUZnhXN7pwzQU%2F9yenCI8zsEEz2wjzcfP6yBchOPkpR1cO3kHKDXQa8rPZiS2%2Bf6MNz4r3NaEh5V2qTuZYefXTNJJl3BjVc0T%2FUuFcFLIys0477N8qjLwqW6j1becNY8TimBb5CkK96Zc7vLLWBSxx9J%2BBX4hoPv1AH4bI9QhJ15vcv2TLaGN%2Bt%2BS5QMnYYX8n26INZFXATJ4XHKPV17Gc52sv%2FLpPvWowqf7idJ%2FAfnPRS7knSYKY8Ls8emVHQvFxc4BZj7HUZHpDj4HGFvNYZIUgCp5vbE9cmJFeowLshduCMXTJCSexS%2BAagF6TXWTwPl2bp5%2BnwIOsAhefH6ZWckee%2F9TsHazNDab4GhL7PcMHwgqPOZe5EqnO5zkgKmSnTvPxsfEBYXRpmHS%2B%2F%2FPmFRaaTvscFdbjqQXiXDm5PJkC79wqBYVE3YV0sfw5dc%2BcoupggtKScJqno%2BQSENh0HBGDomWTYNhq4eUoxKHBfC5X%2BRzUOR5HZxJX%2Fqw5AvJgfx4kllo12SvxSxE2MMHDekK2VR7NycOc6QpYRUJkdj44Vg7sjQcqz1WMDl9RmVPf%2F%2FxDrLyn9K1sJtMMy%2BoL0GOqUB62C2rLBZP%2FvI6PVoj0wT2nm72GZpJ7UPfPmQa2hQkUUHUeXhKDEcVpgX5kdmRVT0nIJAJfK2xeU5Y57sl%2FrPFEa4sItDVjiXfUyGEe2Rk2rijTM3spwfuVc8kLteKqg%2FMnbao58RnZsBDslrp805bIExyVVUCfv1dYX7vuXDpPitg46SkhrPcI9z3x7LITd0XazpP61RoxOqZ9q6qxPz7XM3mBxo&X-Amz-Signature=652d5f5d4cf8206ee5645adb4352a37e9de9ddfeb31448e81f9d4cfd233f5594&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOA24AY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb5oYTRmjQK8isgyc4qiQLGAbNwUVMeVtl9ZF6IlsyGwIgc0e47alz%2BQpdIy5XbUTyHVDdNF0kc%2FwfMdBZbOaViCUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2By%2F%2F6oiWZbWKkY9yrcA1XVrxNFebu%2FbFnfk6Wt%2F8xSlVnTrROL%2FT9g6uRpaqwAgUZnhXN7pwzQU%2F9yenCI8zsEEz2wjzcfP6yBchOPkpR1cO3kHKDXQa8rPZiS2%2Bf6MNz4r3NaEh5V2qTuZYefXTNJJl3BjVc0T%2FUuFcFLIys0477N8qjLwqW6j1becNY8TimBb5CkK96Zc7vLLWBSxx9J%2BBX4hoPv1AH4bI9QhJ15vcv2TLaGN%2Bt%2BS5QMnYYX8n26INZFXATJ4XHKPV17Gc52sv%2FLpPvWowqf7idJ%2FAfnPRS7knSYKY8Ls8emVHQvFxc4BZj7HUZHpDj4HGFvNYZIUgCp5vbE9cmJFeowLshduCMXTJCSexS%2BAagF6TXWTwPl2bp5%2BnwIOsAhefH6ZWckee%2F9TsHazNDab4GhL7PcMHwgqPOZe5EqnO5zkgKmSnTvPxsfEBYXRpmHS%2B%2F%2FPmFRaaTvscFdbjqQXiXDm5PJkC79wqBYVE3YV0sfw5dc%2BcoupggtKScJqno%2BQSENh0HBGDomWTYNhq4eUoxKHBfC5X%2BRzUOR5HZxJX%2Fqw5AvJgfx4kllo12SvxSxE2MMHDekK2VR7NycOc6QpYRUJkdj44Vg7sjQcqz1WMDl9RmVPf%2F%2FxDrLyn9K1sJtMMy%2BoL0GOqUB62C2rLBZP%2FvI6PVoj0wT2nm72GZpJ7UPfPmQa2hQkUUHUeXhKDEcVpgX5kdmRVT0nIJAJfK2xeU5Y57sl%2FrPFEa4sItDVjiXfUyGEe2Rk2rijTM3spwfuVc8kLteKqg%2FMnbao58RnZsBDslrp805bIExyVVUCfv1dYX7vuXDpPitg46SkhrPcI9z3x7LITd0XazpP61RoxOqZ9q6qxPz7XM3mBxo&X-Amz-Signature=8de186c083f2d6b2f38f4863a7df4322d11a1db56be3db96bfb2bf5cbbeb76ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NOA24AY%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb5oYTRmjQK8isgyc4qiQLGAbNwUVMeVtl9ZF6IlsyGwIgc0e47alz%2BQpdIy5XbUTyHVDdNF0kc%2FwfMdBZbOaViCUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2By%2F%2F6oiWZbWKkY9yrcA1XVrxNFebu%2FbFnfk6Wt%2F8xSlVnTrROL%2FT9g6uRpaqwAgUZnhXN7pwzQU%2F9yenCI8zsEEz2wjzcfP6yBchOPkpR1cO3kHKDXQa8rPZiS2%2Bf6MNz4r3NaEh5V2qTuZYefXTNJJl3BjVc0T%2FUuFcFLIys0477N8qjLwqW6j1becNY8TimBb5CkK96Zc7vLLWBSxx9J%2BBX4hoPv1AH4bI9QhJ15vcv2TLaGN%2Bt%2BS5QMnYYX8n26INZFXATJ4XHKPV17Gc52sv%2FLpPvWowqf7idJ%2FAfnPRS7knSYKY8Ls8emVHQvFxc4BZj7HUZHpDj4HGFvNYZIUgCp5vbE9cmJFeowLshduCMXTJCSexS%2BAagF6TXWTwPl2bp5%2BnwIOsAhefH6ZWckee%2F9TsHazNDab4GhL7PcMHwgqPOZe5EqnO5zkgKmSnTvPxsfEBYXRpmHS%2B%2F%2FPmFRaaTvscFdbjqQXiXDm5PJkC79wqBYVE3YV0sfw5dc%2BcoupggtKScJqno%2BQSENh0HBGDomWTYNhq4eUoxKHBfC5X%2BRzUOR5HZxJX%2Fqw5AvJgfx4kllo12SvxSxE2MMHDekK2VR7NycOc6QpYRUJkdj44Vg7sjQcqz1WMDl9RmVPf%2F%2FxDrLyn9K1sJtMMy%2BoL0GOqUB62C2rLBZP%2FvI6PVoj0wT2nm72GZpJ7UPfPmQa2hQkUUHUeXhKDEcVpgX5kdmRVT0nIJAJfK2xeU5Y57sl%2FrPFEa4sItDVjiXfUyGEe2Rk2rijTM3spwfuVc8kLteKqg%2FMnbao58RnZsBDslrp805bIExyVVUCfv1dYX7vuXDpPitg46SkhrPcI9z3x7LITd0XazpP61RoxOqZ9q6qxPz7XM3mBxo&X-Amz-Signature=1118076df17fb82c07e0800cf8dd5f6192e0cd47ddef5188a128669b07c10260&X-Amz-SignedHeaders=host&x-id=GetObject)
