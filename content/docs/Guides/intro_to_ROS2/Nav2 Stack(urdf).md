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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQLCPPB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCijXwVcKF4Sq0bJ9PY1PMI%2BR0%2BWVZox4ArtVL%2BTpK8kwIgMK8bLGxhiaUc%2FZJmZR4OT8ei67kep7J5LYfUEOZKpJMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxo0QL0svqv9rjaZyrcA%2BfY0UGgoPYGEgpaU44Zbn3iSbHpOE%2B7krg3BZZmkVn6giW8vS5cjiwmM31wr%2BbocCM8V35A1GFTQFs51TXRFCOnA2dbTT2fiOOcfyGOglPei9jZyF97bYGmmTyOSwC7XZY1qTmE43oPQyhI1%2BscRHbQK0%2Bh5S7IraJwsSwKORZKEf4iCLbX0WVG1yMH%2FNBmwj8kLa3KGcU95E3I4YUBuFzZqW1v0M2hF10yznVanIyq3GEiqLlbSl3pDNzklf0euhgvnmQPuIEa2E33JNROzpG07H2f2lKaWtBB7uhuqwsKVFv2Y3TQ6Jsgia2gdLwsUOVNoTX94wzm%2BlczDYDbkf2OM9vmu4g3TGnLCEhzfotXD%2BjOF2Dx0OoLhnR33ofryPhbroes6%2FstEE3amasbgxXpFNVhcHR67sS6A8BcoWQbmjIGxhA9OmRlUwF0EWfTHBzEfbEV2pe4paBcTBif4TaACqNWkp%2FiPQDZKbew0ZSr2g7LS841o3jNTNRwVqxbxlzTaf42T3O2Ok215%2Fzz43utR7N2MNcywKKh1cx1imb5bpTMLCSj4%2BPR8q8eSxrV4j%2FnaZZ2ZNn5IuxNfcyjmI2KSGg3hJ7tj6O8b3bc4unIPksd5DQpDmk%2FJKJBMNnu2L0GOqUBRHkalXDo95I2mXXvOtD3mlVfcOw1L21cfYXZo35ud%2Bg3X%2FzSR4LWwtSpZC7Rqwz4F2%2Bw45Ytw5LlFHeeZqwzSe8S8VJFPHBPAcVByc92n%2F1YW%2BmS5rP%2BWanuQWa%2FlXpKvh6ViTaxKKVE0pl80PlwfL2BS04SM%2Bf5Y0rIkindiJ3okY%2B5l0M%2BqDviEnGzEeGaXhoEXVLQVvcQboHXM6%2FPXCr0i5LE&X-Amz-Signature=aff5201ce70ff0eb108b011a9ff04ef22bfdd577f2f5baedc1c46234f1a48c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQLCPPB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCijXwVcKF4Sq0bJ9PY1PMI%2BR0%2BWVZox4ArtVL%2BTpK8kwIgMK8bLGxhiaUc%2FZJmZR4OT8ei67kep7J5LYfUEOZKpJMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxo0QL0svqv9rjaZyrcA%2BfY0UGgoPYGEgpaU44Zbn3iSbHpOE%2B7krg3BZZmkVn6giW8vS5cjiwmM31wr%2BbocCM8V35A1GFTQFs51TXRFCOnA2dbTT2fiOOcfyGOglPei9jZyF97bYGmmTyOSwC7XZY1qTmE43oPQyhI1%2BscRHbQK0%2Bh5S7IraJwsSwKORZKEf4iCLbX0WVG1yMH%2FNBmwj8kLa3KGcU95E3I4YUBuFzZqW1v0M2hF10yznVanIyq3GEiqLlbSl3pDNzklf0euhgvnmQPuIEa2E33JNROzpG07H2f2lKaWtBB7uhuqwsKVFv2Y3TQ6Jsgia2gdLwsUOVNoTX94wzm%2BlczDYDbkf2OM9vmu4g3TGnLCEhzfotXD%2BjOF2Dx0OoLhnR33ofryPhbroes6%2FstEE3amasbgxXpFNVhcHR67sS6A8BcoWQbmjIGxhA9OmRlUwF0EWfTHBzEfbEV2pe4paBcTBif4TaACqNWkp%2FiPQDZKbew0ZSr2g7LS841o3jNTNRwVqxbxlzTaf42T3O2Ok215%2Fzz43utR7N2MNcywKKh1cx1imb5bpTMLCSj4%2BPR8q8eSxrV4j%2FnaZZ2ZNn5IuxNfcyjmI2KSGg3hJ7tj6O8b3bc4unIPksd5DQpDmk%2FJKJBMNnu2L0GOqUBRHkalXDo95I2mXXvOtD3mlVfcOw1L21cfYXZo35ud%2Bg3X%2FzSR4LWwtSpZC7Rqwz4F2%2Bw45Ytw5LlFHeeZqwzSe8S8VJFPHBPAcVByc92n%2F1YW%2BmS5rP%2BWanuQWa%2FlXpKvh6ViTaxKKVE0pl80PlwfL2BS04SM%2Bf5Y0rIkindiJ3okY%2B5l0M%2BqDviEnGzEeGaXhoEXVLQVvcQboHXM6%2FPXCr0i5LE&X-Amz-Signature=eade2bb304f97b6faeb1fe514c1204b53b501c4be5b836649986a157537d4b18&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQLCPPB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCijXwVcKF4Sq0bJ9PY1PMI%2BR0%2BWVZox4ArtVL%2BTpK8kwIgMK8bLGxhiaUc%2FZJmZR4OT8ei67kep7J5LYfUEOZKpJMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxo0QL0svqv9rjaZyrcA%2BfY0UGgoPYGEgpaU44Zbn3iSbHpOE%2B7krg3BZZmkVn6giW8vS5cjiwmM31wr%2BbocCM8V35A1GFTQFs51TXRFCOnA2dbTT2fiOOcfyGOglPei9jZyF97bYGmmTyOSwC7XZY1qTmE43oPQyhI1%2BscRHbQK0%2Bh5S7IraJwsSwKORZKEf4iCLbX0WVG1yMH%2FNBmwj8kLa3KGcU95E3I4YUBuFzZqW1v0M2hF10yznVanIyq3GEiqLlbSl3pDNzklf0euhgvnmQPuIEa2E33JNROzpG07H2f2lKaWtBB7uhuqwsKVFv2Y3TQ6Jsgia2gdLwsUOVNoTX94wzm%2BlczDYDbkf2OM9vmu4g3TGnLCEhzfotXD%2BjOF2Dx0OoLhnR33ofryPhbroes6%2FstEE3amasbgxXpFNVhcHR67sS6A8BcoWQbmjIGxhA9OmRlUwF0EWfTHBzEfbEV2pe4paBcTBif4TaACqNWkp%2FiPQDZKbew0ZSr2g7LS841o3jNTNRwVqxbxlzTaf42T3O2Ok215%2Fzz43utR7N2MNcywKKh1cx1imb5bpTMLCSj4%2BPR8q8eSxrV4j%2FnaZZ2ZNn5IuxNfcyjmI2KSGg3hJ7tj6O8b3bc4unIPksd5DQpDmk%2FJKJBMNnu2L0GOqUBRHkalXDo95I2mXXvOtD3mlVfcOw1L21cfYXZo35ud%2Bg3X%2FzSR4LWwtSpZC7Rqwz4F2%2Bw45Ytw5LlFHeeZqwzSe8S8VJFPHBPAcVByc92n%2F1YW%2BmS5rP%2BWanuQWa%2FlXpKvh6ViTaxKKVE0pl80PlwfL2BS04SM%2Bf5Y0rIkindiJ3okY%2B5l0M%2BqDviEnGzEeGaXhoEXVLQVvcQboHXM6%2FPXCr0i5LE&X-Amz-Signature=756a2f3af080e237af275ded11d713325ed34ea51cccd0b07615bb17ba2cd264&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQLCPPB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCijXwVcKF4Sq0bJ9PY1PMI%2BR0%2BWVZox4ArtVL%2BTpK8kwIgMK8bLGxhiaUc%2FZJmZR4OT8ei67kep7J5LYfUEOZKpJMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxo0QL0svqv9rjaZyrcA%2BfY0UGgoPYGEgpaU44Zbn3iSbHpOE%2B7krg3BZZmkVn6giW8vS5cjiwmM31wr%2BbocCM8V35A1GFTQFs51TXRFCOnA2dbTT2fiOOcfyGOglPei9jZyF97bYGmmTyOSwC7XZY1qTmE43oPQyhI1%2BscRHbQK0%2Bh5S7IraJwsSwKORZKEf4iCLbX0WVG1yMH%2FNBmwj8kLa3KGcU95E3I4YUBuFzZqW1v0M2hF10yznVanIyq3GEiqLlbSl3pDNzklf0euhgvnmQPuIEa2E33JNROzpG07H2f2lKaWtBB7uhuqwsKVFv2Y3TQ6Jsgia2gdLwsUOVNoTX94wzm%2BlczDYDbkf2OM9vmu4g3TGnLCEhzfotXD%2BjOF2Dx0OoLhnR33ofryPhbroes6%2FstEE3amasbgxXpFNVhcHR67sS6A8BcoWQbmjIGxhA9OmRlUwF0EWfTHBzEfbEV2pe4paBcTBif4TaACqNWkp%2FiPQDZKbew0ZSr2g7LS841o3jNTNRwVqxbxlzTaf42T3O2Ok215%2Fzz43utR7N2MNcywKKh1cx1imb5bpTMLCSj4%2BPR8q8eSxrV4j%2FnaZZ2ZNn5IuxNfcyjmI2KSGg3hJ7tj6O8b3bc4unIPksd5DQpDmk%2FJKJBMNnu2L0GOqUBRHkalXDo95I2mXXvOtD3mlVfcOw1L21cfYXZo35ud%2Bg3X%2FzSR4LWwtSpZC7Rqwz4F2%2Bw45Ytw5LlFHeeZqwzSe8S8VJFPHBPAcVByc92n%2F1YW%2BmS5rP%2BWanuQWa%2FlXpKvh6ViTaxKKVE0pl80PlwfL2BS04SM%2Bf5Y0rIkindiJ3okY%2B5l0M%2BqDviEnGzEeGaXhoEXVLQVvcQboHXM6%2FPXCr0i5LE&X-Amz-Signature=8a08320b7ffceca72c7d976eeb176b12856b6a0b3588444060c0bf9d09c188e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQLCPPB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCijXwVcKF4Sq0bJ9PY1PMI%2BR0%2BWVZox4ArtVL%2BTpK8kwIgMK8bLGxhiaUc%2FZJmZR4OT8ei67kep7J5LYfUEOZKpJMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxo0QL0svqv9rjaZyrcA%2BfY0UGgoPYGEgpaU44Zbn3iSbHpOE%2B7krg3BZZmkVn6giW8vS5cjiwmM31wr%2BbocCM8V35A1GFTQFs51TXRFCOnA2dbTT2fiOOcfyGOglPei9jZyF97bYGmmTyOSwC7XZY1qTmE43oPQyhI1%2BscRHbQK0%2Bh5S7IraJwsSwKORZKEf4iCLbX0WVG1yMH%2FNBmwj8kLa3KGcU95E3I4YUBuFzZqW1v0M2hF10yznVanIyq3GEiqLlbSl3pDNzklf0euhgvnmQPuIEa2E33JNROzpG07H2f2lKaWtBB7uhuqwsKVFv2Y3TQ6Jsgia2gdLwsUOVNoTX94wzm%2BlczDYDbkf2OM9vmu4g3TGnLCEhzfotXD%2BjOF2Dx0OoLhnR33ofryPhbroes6%2FstEE3amasbgxXpFNVhcHR67sS6A8BcoWQbmjIGxhA9OmRlUwF0EWfTHBzEfbEV2pe4paBcTBif4TaACqNWkp%2FiPQDZKbew0ZSr2g7LS841o3jNTNRwVqxbxlzTaf42T3O2Ok215%2Fzz43utR7N2MNcywKKh1cx1imb5bpTMLCSj4%2BPR8q8eSxrV4j%2FnaZZ2ZNn5IuxNfcyjmI2KSGg3hJ7tj6O8b3bc4unIPksd5DQpDmk%2FJKJBMNnu2L0GOqUBRHkalXDo95I2mXXvOtD3mlVfcOw1L21cfYXZo35ud%2Bg3X%2FzSR4LWwtSpZC7Rqwz4F2%2Bw45Ytw5LlFHeeZqwzSe8S8VJFPHBPAcVByc92n%2F1YW%2BmS5rP%2BWanuQWa%2FlXpKvh6ViTaxKKVE0pl80PlwfL2BS04SM%2Bf5Y0rIkindiJ3okY%2B5l0M%2BqDviEnGzEeGaXhoEXVLQVvcQboHXM6%2FPXCr0i5LE&X-Amz-Signature=c611cf1539e1daca885f9796db812f1ded97527caf586cdf2045dc72a29ecdeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQLCPPB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCijXwVcKF4Sq0bJ9PY1PMI%2BR0%2BWVZox4ArtVL%2BTpK8kwIgMK8bLGxhiaUc%2FZJmZR4OT8ei67kep7J5LYfUEOZKpJMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxo0QL0svqv9rjaZyrcA%2BfY0UGgoPYGEgpaU44Zbn3iSbHpOE%2B7krg3BZZmkVn6giW8vS5cjiwmM31wr%2BbocCM8V35A1GFTQFs51TXRFCOnA2dbTT2fiOOcfyGOglPei9jZyF97bYGmmTyOSwC7XZY1qTmE43oPQyhI1%2BscRHbQK0%2Bh5S7IraJwsSwKORZKEf4iCLbX0WVG1yMH%2FNBmwj8kLa3KGcU95E3I4YUBuFzZqW1v0M2hF10yznVanIyq3GEiqLlbSl3pDNzklf0euhgvnmQPuIEa2E33JNROzpG07H2f2lKaWtBB7uhuqwsKVFv2Y3TQ6Jsgia2gdLwsUOVNoTX94wzm%2BlczDYDbkf2OM9vmu4g3TGnLCEhzfotXD%2BjOF2Dx0OoLhnR33ofryPhbroes6%2FstEE3amasbgxXpFNVhcHR67sS6A8BcoWQbmjIGxhA9OmRlUwF0EWfTHBzEfbEV2pe4paBcTBif4TaACqNWkp%2FiPQDZKbew0ZSr2g7LS841o3jNTNRwVqxbxlzTaf42T3O2Ok215%2Fzz43utR7N2MNcywKKh1cx1imb5bpTMLCSj4%2BPR8q8eSxrV4j%2FnaZZ2ZNn5IuxNfcyjmI2KSGg3hJ7tj6O8b3bc4unIPksd5DQpDmk%2FJKJBMNnu2L0GOqUBRHkalXDo95I2mXXvOtD3mlVfcOw1L21cfYXZo35ud%2Bg3X%2FzSR4LWwtSpZC7Rqwz4F2%2Bw45Ytw5LlFHeeZqwzSe8S8VJFPHBPAcVByc92n%2F1YW%2BmS5rP%2BWanuQWa%2FlXpKvh6ViTaxKKVE0pl80PlwfL2BS04SM%2Bf5Y0rIkindiJ3okY%2B5l0M%2BqDviEnGzEeGaXhoEXVLQVvcQboHXM6%2FPXCr0i5LE&X-Amz-Signature=fb67b9ebbb6061bca1eb92fb1031af4df407eb3217975affe611fda108624a17&X-Amz-SignedHeaders=host&x-id=GetObject)
