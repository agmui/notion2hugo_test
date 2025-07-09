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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCYSYG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfvqJ0AYzVE4RfNLwhkITFaQJxQ1Ya5H%2FwUj6st5u8qAIfFPWFCn1uEx3wPpNGWwdQe6VbuURPwTIurLIt57D3XiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQRlFc7qdCcdLLLKZKtwDaj0WGrdlE41InhNowNGGO3J4jcv%2BxeVdusn%2FTzlmBYyY%2FHg1TL8q3a%2FU3uBvl84vp4QEsqcBvwJCtw4nsrjSEZfeGjBv%2BiS4ToEpO%2F2rCJWSOGs9SHNJKxszQWGvpQOLLRWzWHjk4l5H4GARKWESeukCEIn7Wwgiwt5s2NBzxrO40ZjSJJaT5zw4vvOBKnH8CAr89yzFMvnZRMekNtueuBVPGnstymeH%2BPQLNLxhH227CQWeqkMBqSNXei2dg%2BY9HiqGnRk61bI8CPZty7d9LlaRFKMP1onSoBgEQa%2FYVeaq6jnqEsiM6iIzPSwXeYUp%2FooD%2FwskHAlPLHE3MsGGD4XQidaibIR%2F%2Fd8mtaSUDyVqXnvgQWXtszfthDmDD%2BecNdCjnL1s4dgs2ZZds5bpJNS8%2B5Cp0Lyzkn7Zaxnolco13TAPlfH6mRYJGxOF9x7iQaUGly57S%2BhMRpRKvFcG17z2%2B9x724qMsuUPypqQ%2F5dg76IDyH0gV4ZNeVgH4UcgJOaivDgwbTBZjrcZw%2BzIqy0q3BSJx%2Fkszn4pHuqbn21HkfdtHH%2B6AAF0f2p112McS9uRgQu5Xo7vyW6l1fCS5VdenwdgYFcP21G5DjHJUB5buKfgUrBJQwIUP7ww88q3wwY6pgFwm0Gct8SyLXO%2BCmCT8KfHMy8rCRPBjDCyW8tpwQA5wS4d7eufjd0U0jgpHJv62eAZly%2B%2BHLKIlCQjq6zZ%2B%2FURg3TM4%2FXllQ9ZTWk4k8ihNrhXsdSjA1tFe03m6NzcosnreqqXEMDV3sP0SiD3lxbJt8M4lOtW5awr8oGLFo4HB3F%2BFbGeJOGuJCdnHnnaEwso4Z3EXu3mAWlFQxcjLL%2BpQUYW5W3b&X-Amz-Signature=a0fe1ac4bc919ca64c804610803504ab9fa0320a9c70df1b2fe4c73de88aa116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCYSYG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfvqJ0AYzVE4RfNLwhkITFaQJxQ1Ya5H%2FwUj6st5u8qAIfFPWFCn1uEx3wPpNGWwdQe6VbuURPwTIurLIt57D3XiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQRlFc7qdCcdLLLKZKtwDaj0WGrdlE41InhNowNGGO3J4jcv%2BxeVdusn%2FTzlmBYyY%2FHg1TL8q3a%2FU3uBvl84vp4QEsqcBvwJCtw4nsrjSEZfeGjBv%2BiS4ToEpO%2F2rCJWSOGs9SHNJKxszQWGvpQOLLRWzWHjk4l5H4GARKWESeukCEIn7Wwgiwt5s2NBzxrO40ZjSJJaT5zw4vvOBKnH8CAr89yzFMvnZRMekNtueuBVPGnstymeH%2BPQLNLxhH227CQWeqkMBqSNXei2dg%2BY9HiqGnRk61bI8CPZty7d9LlaRFKMP1onSoBgEQa%2FYVeaq6jnqEsiM6iIzPSwXeYUp%2FooD%2FwskHAlPLHE3MsGGD4XQidaibIR%2F%2Fd8mtaSUDyVqXnvgQWXtszfthDmDD%2BecNdCjnL1s4dgs2ZZds5bpJNS8%2B5Cp0Lyzkn7Zaxnolco13TAPlfH6mRYJGxOF9x7iQaUGly57S%2BhMRpRKvFcG17z2%2B9x724qMsuUPypqQ%2F5dg76IDyH0gV4ZNeVgH4UcgJOaivDgwbTBZjrcZw%2BzIqy0q3BSJx%2Fkszn4pHuqbn21HkfdtHH%2B6AAF0f2p112McS9uRgQu5Xo7vyW6l1fCS5VdenwdgYFcP21G5DjHJUB5buKfgUrBJQwIUP7ww88q3wwY6pgFwm0Gct8SyLXO%2BCmCT8KfHMy8rCRPBjDCyW8tpwQA5wS4d7eufjd0U0jgpHJv62eAZly%2B%2BHLKIlCQjq6zZ%2B%2FURg3TM4%2FXllQ9ZTWk4k8ihNrhXsdSjA1tFe03m6NzcosnreqqXEMDV3sP0SiD3lxbJt8M4lOtW5awr8oGLFo4HB3F%2BFbGeJOGuJCdnHnnaEwso4Z3EXu3mAWlFQxcjLL%2BpQUYW5W3b&X-Amz-Signature=f782010cd3667e7a19164bc2e3b1c2ed2f0c5f201f026422a75ea6af8624919b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCYSYG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfvqJ0AYzVE4RfNLwhkITFaQJxQ1Ya5H%2FwUj6st5u8qAIfFPWFCn1uEx3wPpNGWwdQe6VbuURPwTIurLIt57D3XiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQRlFc7qdCcdLLLKZKtwDaj0WGrdlE41InhNowNGGO3J4jcv%2BxeVdusn%2FTzlmBYyY%2FHg1TL8q3a%2FU3uBvl84vp4QEsqcBvwJCtw4nsrjSEZfeGjBv%2BiS4ToEpO%2F2rCJWSOGs9SHNJKxszQWGvpQOLLRWzWHjk4l5H4GARKWESeukCEIn7Wwgiwt5s2NBzxrO40ZjSJJaT5zw4vvOBKnH8CAr89yzFMvnZRMekNtueuBVPGnstymeH%2BPQLNLxhH227CQWeqkMBqSNXei2dg%2BY9HiqGnRk61bI8CPZty7d9LlaRFKMP1onSoBgEQa%2FYVeaq6jnqEsiM6iIzPSwXeYUp%2FooD%2FwskHAlPLHE3MsGGD4XQidaibIR%2F%2Fd8mtaSUDyVqXnvgQWXtszfthDmDD%2BecNdCjnL1s4dgs2ZZds5bpJNS8%2B5Cp0Lyzkn7Zaxnolco13TAPlfH6mRYJGxOF9x7iQaUGly57S%2BhMRpRKvFcG17z2%2B9x724qMsuUPypqQ%2F5dg76IDyH0gV4ZNeVgH4UcgJOaivDgwbTBZjrcZw%2BzIqy0q3BSJx%2Fkszn4pHuqbn21HkfdtHH%2B6AAF0f2p112McS9uRgQu5Xo7vyW6l1fCS5VdenwdgYFcP21G5DjHJUB5buKfgUrBJQwIUP7ww88q3wwY6pgFwm0Gct8SyLXO%2BCmCT8KfHMy8rCRPBjDCyW8tpwQA5wS4d7eufjd0U0jgpHJv62eAZly%2B%2BHLKIlCQjq6zZ%2B%2FURg3TM4%2FXllQ9ZTWk4k8ihNrhXsdSjA1tFe03m6NzcosnreqqXEMDV3sP0SiD3lxbJt8M4lOtW5awr8oGLFo4HB3F%2BFbGeJOGuJCdnHnnaEwso4Z3EXu3mAWlFQxcjLL%2BpQUYW5W3b&X-Amz-Signature=ef6efe38d9b3048d0b66f5aecb07f503f96661f691ef84768c17b1e5b45ddcdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCYSYG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfvqJ0AYzVE4RfNLwhkITFaQJxQ1Ya5H%2FwUj6st5u8qAIfFPWFCn1uEx3wPpNGWwdQe6VbuURPwTIurLIt57D3XiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQRlFc7qdCcdLLLKZKtwDaj0WGrdlE41InhNowNGGO3J4jcv%2BxeVdusn%2FTzlmBYyY%2FHg1TL8q3a%2FU3uBvl84vp4QEsqcBvwJCtw4nsrjSEZfeGjBv%2BiS4ToEpO%2F2rCJWSOGs9SHNJKxszQWGvpQOLLRWzWHjk4l5H4GARKWESeukCEIn7Wwgiwt5s2NBzxrO40ZjSJJaT5zw4vvOBKnH8CAr89yzFMvnZRMekNtueuBVPGnstymeH%2BPQLNLxhH227CQWeqkMBqSNXei2dg%2BY9HiqGnRk61bI8CPZty7d9LlaRFKMP1onSoBgEQa%2FYVeaq6jnqEsiM6iIzPSwXeYUp%2FooD%2FwskHAlPLHE3MsGGD4XQidaibIR%2F%2Fd8mtaSUDyVqXnvgQWXtszfthDmDD%2BecNdCjnL1s4dgs2ZZds5bpJNS8%2B5Cp0Lyzkn7Zaxnolco13TAPlfH6mRYJGxOF9x7iQaUGly57S%2BhMRpRKvFcG17z2%2B9x724qMsuUPypqQ%2F5dg76IDyH0gV4ZNeVgH4UcgJOaivDgwbTBZjrcZw%2BzIqy0q3BSJx%2Fkszn4pHuqbn21HkfdtHH%2B6AAF0f2p112McS9uRgQu5Xo7vyW6l1fCS5VdenwdgYFcP21G5DjHJUB5buKfgUrBJQwIUP7ww88q3wwY6pgFwm0Gct8SyLXO%2BCmCT8KfHMy8rCRPBjDCyW8tpwQA5wS4d7eufjd0U0jgpHJv62eAZly%2B%2BHLKIlCQjq6zZ%2B%2FURg3TM4%2FXllQ9ZTWk4k8ihNrhXsdSjA1tFe03m6NzcosnreqqXEMDV3sP0SiD3lxbJt8M4lOtW5awr8oGLFo4HB3F%2BFbGeJOGuJCdnHnnaEwso4Z3EXu3mAWlFQxcjLL%2BpQUYW5W3b&X-Amz-Signature=7116756785c257bdbb742f224b96cf817e42821ede945d517187c69f4cdb94aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCYSYG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfvqJ0AYzVE4RfNLwhkITFaQJxQ1Ya5H%2FwUj6st5u8qAIfFPWFCn1uEx3wPpNGWwdQe6VbuURPwTIurLIt57D3XiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQRlFc7qdCcdLLLKZKtwDaj0WGrdlE41InhNowNGGO3J4jcv%2BxeVdusn%2FTzlmBYyY%2FHg1TL8q3a%2FU3uBvl84vp4QEsqcBvwJCtw4nsrjSEZfeGjBv%2BiS4ToEpO%2F2rCJWSOGs9SHNJKxszQWGvpQOLLRWzWHjk4l5H4GARKWESeukCEIn7Wwgiwt5s2NBzxrO40ZjSJJaT5zw4vvOBKnH8CAr89yzFMvnZRMekNtueuBVPGnstymeH%2BPQLNLxhH227CQWeqkMBqSNXei2dg%2BY9HiqGnRk61bI8CPZty7d9LlaRFKMP1onSoBgEQa%2FYVeaq6jnqEsiM6iIzPSwXeYUp%2FooD%2FwskHAlPLHE3MsGGD4XQidaibIR%2F%2Fd8mtaSUDyVqXnvgQWXtszfthDmDD%2BecNdCjnL1s4dgs2ZZds5bpJNS8%2B5Cp0Lyzkn7Zaxnolco13TAPlfH6mRYJGxOF9x7iQaUGly57S%2BhMRpRKvFcG17z2%2B9x724qMsuUPypqQ%2F5dg76IDyH0gV4ZNeVgH4UcgJOaivDgwbTBZjrcZw%2BzIqy0q3BSJx%2Fkszn4pHuqbn21HkfdtHH%2B6AAF0f2p112McS9uRgQu5Xo7vyW6l1fCS5VdenwdgYFcP21G5DjHJUB5buKfgUrBJQwIUP7ww88q3wwY6pgFwm0Gct8SyLXO%2BCmCT8KfHMy8rCRPBjDCyW8tpwQA5wS4d7eufjd0U0jgpHJv62eAZly%2B%2BHLKIlCQjq6zZ%2B%2FURg3TM4%2FXllQ9ZTWk4k8ihNrhXsdSjA1tFe03m6NzcosnreqqXEMDV3sP0SiD3lxbJt8M4lOtW5awr8oGLFo4HB3F%2BFbGeJOGuJCdnHnnaEwso4Z3EXu3mAWlFQxcjLL%2BpQUYW5W3b&X-Amz-Signature=d6437ecd433004b7fa18fa7b4e00218801cd075ff525bb79b6e07d63a84f8ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UZCYSYG%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T034640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQCfvqJ0AYzVE4RfNLwhkITFaQJxQ1Ya5H%2FwUj6st5u8qAIfFPWFCn1uEx3wPpNGWwdQe6VbuURPwTIurLIt57D3XiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQRlFc7qdCcdLLLKZKtwDaj0WGrdlE41InhNowNGGO3J4jcv%2BxeVdusn%2FTzlmBYyY%2FHg1TL8q3a%2FU3uBvl84vp4QEsqcBvwJCtw4nsrjSEZfeGjBv%2BiS4ToEpO%2F2rCJWSOGs9SHNJKxszQWGvpQOLLRWzWHjk4l5H4GARKWESeukCEIn7Wwgiwt5s2NBzxrO40ZjSJJaT5zw4vvOBKnH8CAr89yzFMvnZRMekNtueuBVPGnstymeH%2BPQLNLxhH227CQWeqkMBqSNXei2dg%2BY9HiqGnRk61bI8CPZty7d9LlaRFKMP1onSoBgEQa%2FYVeaq6jnqEsiM6iIzPSwXeYUp%2FooD%2FwskHAlPLHE3MsGGD4XQidaibIR%2F%2Fd8mtaSUDyVqXnvgQWXtszfthDmDD%2BecNdCjnL1s4dgs2ZZds5bpJNS8%2B5Cp0Lyzkn7Zaxnolco13TAPlfH6mRYJGxOF9x7iQaUGly57S%2BhMRpRKvFcG17z2%2B9x724qMsuUPypqQ%2F5dg76IDyH0gV4ZNeVgH4UcgJOaivDgwbTBZjrcZw%2BzIqy0q3BSJx%2Fkszn4pHuqbn21HkfdtHH%2B6AAF0f2p112McS9uRgQu5Xo7vyW6l1fCS5VdenwdgYFcP21G5DjHJUB5buKfgUrBJQwIUP7ww88q3wwY6pgFwm0Gct8SyLXO%2BCmCT8KfHMy8rCRPBjDCyW8tpwQA5wS4d7eufjd0U0jgpHJv62eAZly%2B%2BHLKIlCQjq6zZ%2B%2FURg3TM4%2FXllQ9ZTWk4k8ihNrhXsdSjA1tFe03m6NzcosnreqqXEMDV3sP0SiD3lxbJt8M4lOtW5awr8oGLFo4HB3F%2BFbGeJOGuJCdnHnnaEwso4Z3EXu3mAWlFQxcjLL%2BpQUYW5W3b&X-Amz-Signature=1b88724dc4549b3f8bbf0fa217c750eb98ab65445be95cab2dbe09add094a526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
