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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCTP2UZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSbkRbT5P8MxLh85k809YPorFA9xRVns6IGWb9%2FT8RLAiEA%2BzIbY2nqcbvImbfRxfJjp%2BTUvmSop4VTweOwqWnjZyQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN6P8MgGPRsta0eSoircA5jxjKiO%2FmdsvwK%2F9C2Ux9vUc01E54%2BUGhCWsgeEUbEV7Zhc82DOvLl1T4AdUk8Hjnpc%2B4qzlcvVWhFJQ%2FvxJRVFeylt2LXXXkKIvqb%2BomM3b%2B47BHKtfZWTTRixxll36kcqOHzqPAAGjk004BKnPPV3q8arjZm3J0tEk%2Fzzv12vQlHyoJ8SM3AjHsD9RCdaJql3UxmdllX0qGM%2BzDFT%2FBKq9zU6Xrl6z%2BKP1AsXp%2BnS7tiNJj4dv2Bu%2FZ9QRUeso5y4NNQNFAZKrlL2KX2qJ%2F1TuWDkdsjsv9LwAJ6eiPeAqkVKRZ6N6KlQwTryn3RwVyhIDUwCWddur03DC9WULpTTu5QrSQX61EFRGjCLJK7xB%2BOAzWkvKUPMLMiIMvmW%2B%2FL1C3owYe8RV8Bb0CPNPmIdPh2BUhcsog00fThGPX9tWqq92Lw%2Bek4sYWtqaNSMMTMq87E%2BWOHK1tbNCvuqbTfbAq5YNBEtyhLNgdGL5C9skJV6%2FCp4KuI%2FFcfDxR%2BEGCg51Gf64dQo2HZAjkLi%2FbLoYSkCYfYMadBKAj0Z8FMEm9JneFzhNJgJ5Tw9AV6S6OgJ94XPkC9qE59Blgi5ZsR296j41%2F%2F6RDUbeP5WTUXcSpWaGw6%2F3nzDmpIuMJLOp74GOqUBgjmVUlfN5BuHl%2BWRPzUbFPMa8b%2Fee8gfrDdxL3ZBDFi04o8qkNbjPkpkhs2YrLRoXHjeGf9gC1E%2BtHcHxXybd%2BEXcB%2F8IzSckgUR%2BJO739e6d5et%2B6RQ3PoFKUCziX1QbYt4crb9NT6UxClYEWFkgiG5XqDhIjfclShJhbd6esDwgm%2BReaQcgtG38l6AnWlN7J5Y0bmMx4lfebTyc4XiLjX1Wye6&X-Amz-Signature=5e043bc36e8d5192c7b36c3a9d581eb8424e5f21f670e84920ff5dc2d869906f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCTP2UZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSbkRbT5P8MxLh85k809YPorFA9xRVns6IGWb9%2FT8RLAiEA%2BzIbY2nqcbvImbfRxfJjp%2BTUvmSop4VTweOwqWnjZyQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN6P8MgGPRsta0eSoircA5jxjKiO%2FmdsvwK%2F9C2Ux9vUc01E54%2BUGhCWsgeEUbEV7Zhc82DOvLl1T4AdUk8Hjnpc%2B4qzlcvVWhFJQ%2FvxJRVFeylt2LXXXkKIvqb%2BomM3b%2B47BHKtfZWTTRixxll36kcqOHzqPAAGjk004BKnPPV3q8arjZm3J0tEk%2Fzzv12vQlHyoJ8SM3AjHsD9RCdaJql3UxmdllX0qGM%2BzDFT%2FBKq9zU6Xrl6z%2BKP1AsXp%2BnS7tiNJj4dv2Bu%2FZ9QRUeso5y4NNQNFAZKrlL2KX2qJ%2F1TuWDkdsjsv9LwAJ6eiPeAqkVKRZ6N6KlQwTryn3RwVyhIDUwCWddur03DC9WULpTTu5QrSQX61EFRGjCLJK7xB%2BOAzWkvKUPMLMiIMvmW%2B%2FL1C3owYe8RV8Bb0CPNPmIdPh2BUhcsog00fThGPX9tWqq92Lw%2Bek4sYWtqaNSMMTMq87E%2BWOHK1tbNCvuqbTfbAq5YNBEtyhLNgdGL5C9skJV6%2FCp4KuI%2FFcfDxR%2BEGCg51Gf64dQo2HZAjkLi%2FbLoYSkCYfYMadBKAj0Z8FMEm9JneFzhNJgJ5Tw9AV6S6OgJ94XPkC9qE59Blgi5ZsR296j41%2F%2F6RDUbeP5WTUXcSpWaGw6%2F3nzDmpIuMJLOp74GOqUBgjmVUlfN5BuHl%2BWRPzUbFPMa8b%2Fee8gfrDdxL3ZBDFi04o8qkNbjPkpkhs2YrLRoXHjeGf9gC1E%2BtHcHxXybd%2BEXcB%2F8IzSckgUR%2BJO739e6d5et%2B6RQ3PoFKUCziX1QbYt4crb9NT6UxClYEWFkgiG5XqDhIjfclShJhbd6esDwgm%2BReaQcgtG38l6AnWlN7J5Y0bmMx4lfebTyc4XiLjX1Wye6&X-Amz-Signature=9ae949baecb16259160a5612c2b3791cb0779d098f3e6b99e6ff1c1cb55b0e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCTP2UZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSbkRbT5P8MxLh85k809YPorFA9xRVns6IGWb9%2FT8RLAiEA%2BzIbY2nqcbvImbfRxfJjp%2BTUvmSop4VTweOwqWnjZyQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN6P8MgGPRsta0eSoircA5jxjKiO%2FmdsvwK%2F9C2Ux9vUc01E54%2BUGhCWsgeEUbEV7Zhc82DOvLl1T4AdUk8Hjnpc%2B4qzlcvVWhFJQ%2FvxJRVFeylt2LXXXkKIvqb%2BomM3b%2B47BHKtfZWTTRixxll36kcqOHzqPAAGjk004BKnPPV3q8arjZm3J0tEk%2Fzzv12vQlHyoJ8SM3AjHsD9RCdaJql3UxmdllX0qGM%2BzDFT%2FBKq9zU6Xrl6z%2BKP1AsXp%2BnS7tiNJj4dv2Bu%2FZ9QRUeso5y4NNQNFAZKrlL2KX2qJ%2F1TuWDkdsjsv9LwAJ6eiPeAqkVKRZ6N6KlQwTryn3RwVyhIDUwCWddur03DC9WULpTTu5QrSQX61EFRGjCLJK7xB%2BOAzWkvKUPMLMiIMvmW%2B%2FL1C3owYe8RV8Bb0CPNPmIdPh2BUhcsog00fThGPX9tWqq92Lw%2Bek4sYWtqaNSMMTMq87E%2BWOHK1tbNCvuqbTfbAq5YNBEtyhLNgdGL5C9skJV6%2FCp4KuI%2FFcfDxR%2BEGCg51Gf64dQo2HZAjkLi%2FbLoYSkCYfYMadBKAj0Z8FMEm9JneFzhNJgJ5Tw9AV6S6OgJ94XPkC9qE59Blgi5ZsR296j41%2F%2F6RDUbeP5WTUXcSpWaGw6%2F3nzDmpIuMJLOp74GOqUBgjmVUlfN5BuHl%2BWRPzUbFPMa8b%2Fee8gfrDdxL3ZBDFi04o8qkNbjPkpkhs2YrLRoXHjeGf9gC1E%2BtHcHxXybd%2BEXcB%2F8IzSckgUR%2BJO739e6d5et%2B6RQ3PoFKUCziX1QbYt4crb9NT6UxClYEWFkgiG5XqDhIjfclShJhbd6esDwgm%2BReaQcgtG38l6AnWlN7J5Y0bmMx4lfebTyc4XiLjX1Wye6&X-Amz-Signature=b99597d3d7b22736b3550427320cf2899037d8c745cd44165b8413177107726c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCTP2UZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSbkRbT5P8MxLh85k809YPorFA9xRVns6IGWb9%2FT8RLAiEA%2BzIbY2nqcbvImbfRxfJjp%2BTUvmSop4VTweOwqWnjZyQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN6P8MgGPRsta0eSoircA5jxjKiO%2FmdsvwK%2F9C2Ux9vUc01E54%2BUGhCWsgeEUbEV7Zhc82DOvLl1T4AdUk8Hjnpc%2B4qzlcvVWhFJQ%2FvxJRVFeylt2LXXXkKIvqb%2BomM3b%2B47BHKtfZWTTRixxll36kcqOHzqPAAGjk004BKnPPV3q8arjZm3J0tEk%2Fzzv12vQlHyoJ8SM3AjHsD9RCdaJql3UxmdllX0qGM%2BzDFT%2FBKq9zU6Xrl6z%2BKP1AsXp%2BnS7tiNJj4dv2Bu%2FZ9QRUeso5y4NNQNFAZKrlL2KX2qJ%2F1TuWDkdsjsv9LwAJ6eiPeAqkVKRZ6N6KlQwTryn3RwVyhIDUwCWddur03DC9WULpTTu5QrSQX61EFRGjCLJK7xB%2BOAzWkvKUPMLMiIMvmW%2B%2FL1C3owYe8RV8Bb0CPNPmIdPh2BUhcsog00fThGPX9tWqq92Lw%2Bek4sYWtqaNSMMTMq87E%2BWOHK1tbNCvuqbTfbAq5YNBEtyhLNgdGL5C9skJV6%2FCp4KuI%2FFcfDxR%2BEGCg51Gf64dQo2HZAjkLi%2FbLoYSkCYfYMadBKAj0Z8FMEm9JneFzhNJgJ5Tw9AV6S6OgJ94XPkC9qE59Blgi5ZsR296j41%2F%2F6RDUbeP5WTUXcSpWaGw6%2F3nzDmpIuMJLOp74GOqUBgjmVUlfN5BuHl%2BWRPzUbFPMa8b%2Fee8gfrDdxL3ZBDFi04o8qkNbjPkpkhs2YrLRoXHjeGf9gC1E%2BtHcHxXybd%2BEXcB%2F8IzSckgUR%2BJO739e6d5et%2B6RQ3PoFKUCziX1QbYt4crb9NT6UxClYEWFkgiG5XqDhIjfclShJhbd6esDwgm%2BReaQcgtG38l6AnWlN7J5Y0bmMx4lfebTyc4XiLjX1Wye6&X-Amz-Signature=2741f616b12e6fdfd1ce9573946ff4431210866742399876ce6cae570239311e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCTP2UZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSbkRbT5P8MxLh85k809YPorFA9xRVns6IGWb9%2FT8RLAiEA%2BzIbY2nqcbvImbfRxfJjp%2BTUvmSop4VTweOwqWnjZyQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN6P8MgGPRsta0eSoircA5jxjKiO%2FmdsvwK%2F9C2Ux9vUc01E54%2BUGhCWsgeEUbEV7Zhc82DOvLl1T4AdUk8Hjnpc%2B4qzlcvVWhFJQ%2FvxJRVFeylt2LXXXkKIvqb%2BomM3b%2B47BHKtfZWTTRixxll36kcqOHzqPAAGjk004BKnPPV3q8arjZm3J0tEk%2Fzzv12vQlHyoJ8SM3AjHsD9RCdaJql3UxmdllX0qGM%2BzDFT%2FBKq9zU6Xrl6z%2BKP1AsXp%2BnS7tiNJj4dv2Bu%2FZ9QRUeso5y4NNQNFAZKrlL2KX2qJ%2F1TuWDkdsjsv9LwAJ6eiPeAqkVKRZ6N6KlQwTryn3RwVyhIDUwCWddur03DC9WULpTTu5QrSQX61EFRGjCLJK7xB%2BOAzWkvKUPMLMiIMvmW%2B%2FL1C3owYe8RV8Bb0CPNPmIdPh2BUhcsog00fThGPX9tWqq92Lw%2Bek4sYWtqaNSMMTMq87E%2BWOHK1tbNCvuqbTfbAq5YNBEtyhLNgdGL5C9skJV6%2FCp4KuI%2FFcfDxR%2BEGCg51Gf64dQo2HZAjkLi%2FbLoYSkCYfYMadBKAj0Z8FMEm9JneFzhNJgJ5Tw9AV6S6OgJ94XPkC9qE59Blgi5ZsR296j41%2F%2F6RDUbeP5WTUXcSpWaGw6%2F3nzDmpIuMJLOp74GOqUBgjmVUlfN5BuHl%2BWRPzUbFPMa8b%2Fee8gfrDdxL3ZBDFi04o8qkNbjPkpkhs2YrLRoXHjeGf9gC1E%2BtHcHxXybd%2BEXcB%2F8IzSckgUR%2BJO739e6d5et%2B6RQ3PoFKUCziX1QbYt4crb9NT6UxClYEWFkgiG5XqDhIjfclShJhbd6esDwgm%2BReaQcgtG38l6AnWlN7J5Y0bmMx4lfebTyc4XiLjX1Wye6&X-Amz-Signature=b97cfbe398a5d2d0a5e61992f0bb3c4b9bb1d7647f7cb35baea2201730dbce48&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCTP2UZ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSbkRbT5P8MxLh85k809YPorFA9xRVns6IGWb9%2FT8RLAiEA%2BzIbY2nqcbvImbfRxfJjp%2BTUvmSop4VTweOwqWnjZyQq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN6P8MgGPRsta0eSoircA5jxjKiO%2FmdsvwK%2F9C2Ux9vUc01E54%2BUGhCWsgeEUbEV7Zhc82DOvLl1T4AdUk8Hjnpc%2B4qzlcvVWhFJQ%2FvxJRVFeylt2LXXXkKIvqb%2BomM3b%2B47BHKtfZWTTRixxll36kcqOHzqPAAGjk004BKnPPV3q8arjZm3J0tEk%2Fzzv12vQlHyoJ8SM3AjHsD9RCdaJql3UxmdllX0qGM%2BzDFT%2FBKq9zU6Xrl6z%2BKP1AsXp%2BnS7tiNJj4dv2Bu%2FZ9QRUeso5y4NNQNFAZKrlL2KX2qJ%2F1TuWDkdsjsv9LwAJ6eiPeAqkVKRZ6N6KlQwTryn3RwVyhIDUwCWddur03DC9WULpTTu5QrSQX61EFRGjCLJK7xB%2BOAzWkvKUPMLMiIMvmW%2B%2FL1C3owYe8RV8Bb0CPNPmIdPh2BUhcsog00fThGPX9tWqq92Lw%2Bek4sYWtqaNSMMTMq87E%2BWOHK1tbNCvuqbTfbAq5YNBEtyhLNgdGL5C9skJV6%2FCp4KuI%2FFcfDxR%2BEGCg51Gf64dQo2HZAjkLi%2FbLoYSkCYfYMadBKAj0Z8FMEm9JneFzhNJgJ5Tw9AV6S6OgJ94XPkC9qE59Blgi5ZsR296j41%2F%2F6RDUbeP5WTUXcSpWaGw6%2F3nzDmpIuMJLOp74GOqUBgjmVUlfN5BuHl%2BWRPzUbFPMa8b%2Fee8gfrDdxL3ZBDFi04o8qkNbjPkpkhs2YrLRoXHjeGf9gC1E%2BtHcHxXybd%2BEXcB%2F8IzSckgUR%2BJO739e6d5et%2B6RQ3PoFKUCziX1QbYt4crb9NT6UxClYEWFkgiG5XqDhIjfclShJhbd6esDwgm%2BReaQcgtG38l6AnWlN7J5Y0bmMx4lfebTyc4XiLjX1Wye6&X-Amz-Signature=4618b947a8e9c6317fccd37111828b9df6abe444c95b63395a16fb52a31b6aee&X-Amz-SignedHeaders=host&x-id=GetObject)
