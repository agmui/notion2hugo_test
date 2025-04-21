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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWPDUBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCNRvqGL7RvigpAEqVj52dQagenU%2BLMETUjALBlAmvjTgIgMdFTXmF59w%2BGJ5tRybkeADFSssUai%2F90k05sPrknOnQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0BMU%2F5rd0ZXzfzDircA1S7E73LGdViH3nGOo%2FkmFXMGJkcHKaP5GUJCkcw0SQOW4zhkd%2Fwzymb2U0guupWBdxAfQD47%2B1N75A7aq4LzLwFbnJiADQlbHxebHlncm56a4ok8fscXM4w%2BcwbhJJNN%2ByszX33ONt2EvpKONlujpqz0pL%2BCVes2lBsAtVWsbEGiu2ljrRXUa57KlmccA7Bec4K1UyqCdLUhAhA3OFDSR83FlRopVCPPvOA4UiPsCovIpZEWr7MK0EeKdYj6%2BjE7r0LPhorYgqNjNYj4GhV12uBfvlqAJv30QeSJs6PNyBmKqmrTpXRhxM5syoLEvh54ciVnaDGaAVC0JssyVLxOzn%2Bx3XnODRp5ckKvLsq5LXdbXapvAdcBbHAzaH%2FEKzSLPnbALeepCkXzsOaypqsCHWwLmFjqOQ6InMdFmCPl0%2F3s3MnpAJ56mSF9VtyH1MbDgO1qWN7GX005SqF5O%2BtlSLQQmUhYj5R3kpHpC8OikbxIvb1THofjzgPYSq45ZZmwHWZrFlUw8%2F97A%2FSz8hcbFH6oQuLDbFrbZmL97KbGtZsmatPQwjyX06GjdkKlsZtN3y7nYFlMV%2B0HxjtCC3XSEbU5Ds4ltzuyp5wvwWL8GhZ0mJQ6UKzsJn2Aj6LMJ6hmMAGOqUBLgrbpY4wZbTXdT7MLaoqgxvwtKoSUoVn4waXt86iEzgD34hjsnbEueOmpNXMBvwGaDRAYh4pV7rtaa%2FQlTQd%2BWob7D6l2zdwWSUumN3NSRZTagfeqTPFWcCQN%2Bz8IYGa6Spytx9UfBlxwSy1geBcfZZjO74215cjIaOSWp2VmC9I1XGflEoNDZrZcRYEIODc2IqDm%2Fw9oA2ejsc56VFGd1Vmce%2FS&X-Amz-Signature=b77d76a6e6de9963adc7610a42da1021d8be5beef192fc833e7f46867f87141b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWPDUBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCNRvqGL7RvigpAEqVj52dQagenU%2BLMETUjALBlAmvjTgIgMdFTXmF59w%2BGJ5tRybkeADFSssUai%2F90k05sPrknOnQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0BMU%2F5rd0ZXzfzDircA1S7E73LGdViH3nGOo%2FkmFXMGJkcHKaP5GUJCkcw0SQOW4zhkd%2Fwzymb2U0guupWBdxAfQD47%2B1N75A7aq4LzLwFbnJiADQlbHxebHlncm56a4ok8fscXM4w%2BcwbhJJNN%2ByszX33ONt2EvpKONlujpqz0pL%2BCVes2lBsAtVWsbEGiu2ljrRXUa57KlmccA7Bec4K1UyqCdLUhAhA3OFDSR83FlRopVCPPvOA4UiPsCovIpZEWr7MK0EeKdYj6%2BjE7r0LPhorYgqNjNYj4GhV12uBfvlqAJv30QeSJs6PNyBmKqmrTpXRhxM5syoLEvh54ciVnaDGaAVC0JssyVLxOzn%2Bx3XnODRp5ckKvLsq5LXdbXapvAdcBbHAzaH%2FEKzSLPnbALeepCkXzsOaypqsCHWwLmFjqOQ6InMdFmCPl0%2F3s3MnpAJ56mSF9VtyH1MbDgO1qWN7GX005SqF5O%2BtlSLQQmUhYj5R3kpHpC8OikbxIvb1THofjzgPYSq45ZZmwHWZrFlUw8%2F97A%2FSz8hcbFH6oQuLDbFrbZmL97KbGtZsmatPQwjyX06GjdkKlsZtN3y7nYFlMV%2B0HxjtCC3XSEbU5Ds4ltzuyp5wvwWL8GhZ0mJQ6UKzsJn2Aj6LMJ6hmMAGOqUBLgrbpY4wZbTXdT7MLaoqgxvwtKoSUoVn4waXt86iEzgD34hjsnbEueOmpNXMBvwGaDRAYh4pV7rtaa%2FQlTQd%2BWob7D6l2zdwWSUumN3NSRZTagfeqTPFWcCQN%2Bz8IYGa6Spytx9UfBlxwSy1geBcfZZjO74215cjIaOSWp2VmC9I1XGflEoNDZrZcRYEIODc2IqDm%2Fw9oA2ejsc56VFGd1Vmce%2FS&X-Amz-Signature=8fe0166df7e9fc77f4465e34586235afa05f363b3d19ada9578e423a51772f21&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWPDUBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCNRvqGL7RvigpAEqVj52dQagenU%2BLMETUjALBlAmvjTgIgMdFTXmF59w%2BGJ5tRybkeADFSssUai%2F90k05sPrknOnQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0BMU%2F5rd0ZXzfzDircA1S7E73LGdViH3nGOo%2FkmFXMGJkcHKaP5GUJCkcw0SQOW4zhkd%2Fwzymb2U0guupWBdxAfQD47%2B1N75A7aq4LzLwFbnJiADQlbHxebHlncm56a4ok8fscXM4w%2BcwbhJJNN%2ByszX33ONt2EvpKONlujpqz0pL%2BCVes2lBsAtVWsbEGiu2ljrRXUa57KlmccA7Bec4K1UyqCdLUhAhA3OFDSR83FlRopVCPPvOA4UiPsCovIpZEWr7MK0EeKdYj6%2BjE7r0LPhorYgqNjNYj4GhV12uBfvlqAJv30QeSJs6PNyBmKqmrTpXRhxM5syoLEvh54ciVnaDGaAVC0JssyVLxOzn%2Bx3XnODRp5ckKvLsq5LXdbXapvAdcBbHAzaH%2FEKzSLPnbALeepCkXzsOaypqsCHWwLmFjqOQ6InMdFmCPl0%2F3s3MnpAJ56mSF9VtyH1MbDgO1qWN7GX005SqF5O%2BtlSLQQmUhYj5R3kpHpC8OikbxIvb1THofjzgPYSq45ZZmwHWZrFlUw8%2F97A%2FSz8hcbFH6oQuLDbFrbZmL97KbGtZsmatPQwjyX06GjdkKlsZtN3y7nYFlMV%2B0HxjtCC3XSEbU5Ds4ltzuyp5wvwWL8GhZ0mJQ6UKzsJn2Aj6LMJ6hmMAGOqUBLgrbpY4wZbTXdT7MLaoqgxvwtKoSUoVn4waXt86iEzgD34hjsnbEueOmpNXMBvwGaDRAYh4pV7rtaa%2FQlTQd%2BWob7D6l2zdwWSUumN3NSRZTagfeqTPFWcCQN%2Bz8IYGa6Spytx9UfBlxwSy1geBcfZZjO74215cjIaOSWp2VmC9I1XGflEoNDZrZcRYEIODc2IqDm%2Fw9oA2ejsc56VFGd1Vmce%2FS&X-Amz-Signature=223e4dd67dbf02aa8f933edd3feb355f99765f13c14f55a529a4db5de07dd245&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWPDUBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCNRvqGL7RvigpAEqVj52dQagenU%2BLMETUjALBlAmvjTgIgMdFTXmF59w%2BGJ5tRybkeADFSssUai%2F90k05sPrknOnQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0BMU%2F5rd0ZXzfzDircA1S7E73LGdViH3nGOo%2FkmFXMGJkcHKaP5GUJCkcw0SQOW4zhkd%2Fwzymb2U0guupWBdxAfQD47%2B1N75A7aq4LzLwFbnJiADQlbHxebHlncm56a4ok8fscXM4w%2BcwbhJJNN%2ByszX33ONt2EvpKONlujpqz0pL%2BCVes2lBsAtVWsbEGiu2ljrRXUa57KlmccA7Bec4K1UyqCdLUhAhA3OFDSR83FlRopVCPPvOA4UiPsCovIpZEWr7MK0EeKdYj6%2BjE7r0LPhorYgqNjNYj4GhV12uBfvlqAJv30QeSJs6PNyBmKqmrTpXRhxM5syoLEvh54ciVnaDGaAVC0JssyVLxOzn%2Bx3XnODRp5ckKvLsq5LXdbXapvAdcBbHAzaH%2FEKzSLPnbALeepCkXzsOaypqsCHWwLmFjqOQ6InMdFmCPl0%2F3s3MnpAJ56mSF9VtyH1MbDgO1qWN7GX005SqF5O%2BtlSLQQmUhYj5R3kpHpC8OikbxIvb1THofjzgPYSq45ZZmwHWZrFlUw8%2F97A%2FSz8hcbFH6oQuLDbFrbZmL97KbGtZsmatPQwjyX06GjdkKlsZtN3y7nYFlMV%2B0HxjtCC3XSEbU5Ds4ltzuyp5wvwWL8GhZ0mJQ6UKzsJn2Aj6LMJ6hmMAGOqUBLgrbpY4wZbTXdT7MLaoqgxvwtKoSUoVn4waXt86iEzgD34hjsnbEueOmpNXMBvwGaDRAYh4pV7rtaa%2FQlTQd%2BWob7D6l2zdwWSUumN3NSRZTagfeqTPFWcCQN%2Bz8IYGa6Spytx9UfBlxwSy1geBcfZZjO74215cjIaOSWp2VmC9I1XGflEoNDZrZcRYEIODc2IqDm%2Fw9oA2ejsc56VFGd1Vmce%2FS&X-Amz-Signature=a488cc21e7037a82d947cd7fa984e12cd184017e8c505cb77e451084b8802f75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWPDUBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCNRvqGL7RvigpAEqVj52dQagenU%2BLMETUjALBlAmvjTgIgMdFTXmF59w%2BGJ5tRybkeADFSssUai%2F90k05sPrknOnQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0BMU%2F5rd0ZXzfzDircA1S7E73LGdViH3nGOo%2FkmFXMGJkcHKaP5GUJCkcw0SQOW4zhkd%2Fwzymb2U0guupWBdxAfQD47%2B1N75A7aq4LzLwFbnJiADQlbHxebHlncm56a4ok8fscXM4w%2BcwbhJJNN%2ByszX33ONt2EvpKONlujpqz0pL%2BCVes2lBsAtVWsbEGiu2ljrRXUa57KlmccA7Bec4K1UyqCdLUhAhA3OFDSR83FlRopVCPPvOA4UiPsCovIpZEWr7MK0EeKdYj6%2BjE7r0LPhorYgqNjNYj4GhV12uBfvlqAJv30QeSJs6PNyBmKqmrTpXRhxM5syoLEvh54ciVnaDGaAVC0JssyVLxOzn%2Bx3XnODRp5ckKvLsq5LXdbXapvAdcBbHAzaH%2FEKzSLPnbALeepCkXzsOaypqsCHWwLmFjqOQ6InMdFmCPl0%2F3s3MnpAJ56mSF9VtyH1MbDgO1qWN7GX005SqF5O%2BtlSLQQmUhYj5R3kpHpC8OikbxIvb1THofjzgPYSq45ZZmwHWZrFlUw8%2F97A%2FSz8hcbFH6oQuLDbFrbZmL97KbGtZsmatPQwjyX06GjdkKlsZtN3y7nYFlMV%2B0HxjtCC3XSEbU5Ds4ltzuyp5wvwWL8GhZ0mJQ6UKzsJn2Aj6LMJ6hmMAGOqUBLgrbpY4wZbTXdT7MLaoqgxvwtKoSUoVn4waXt86iEzgD34hjsnbEueOmpNXMBvwGaDRAYh4pV7rtaa%2FQlTQd%2BWob7D6l2zdwWSUumN3NSRZTagfeqTPFWcCQN%2Bz8IYGa6Spytx9UfBlxwSy1geBcfZZjO74215cjIaOSWp2VmC9I1XGflEoNDZrZcRYEIODc2IqDm%2Fw9oA2ejsc56VFGd1Vmce%2FS&X-Amz-Signature=eb27d6c07676f882835b067abdc47623e5ac30297488c02d9a57dc5a131e448f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWPDUBN%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCNRvqGL7RvigpAEqVj52dQagenU%2BLMETUjALBlAmvjTgIgMdFTXmF59w%2BGJ5tRybkeADFSssUai%2F90k05sPrknOnQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0BMU%2F5rd0ZXzfzDircA1S7E73LGdViH3nGOo%2FkmFXMGJkcHKaP5GUJCkcw0SQOW4zhkd%2Fwzymb2U0guupWBdxAfQD47%2B1N75A7aq4LzLwFbnJiADQlbHxebHlncm56a4ok8fscXM4w%2BcwbhJJNN%2ByszX33ONt2EvpKONlujpqz0pL%2BCVes2lBsAtVWsbEGiu2ljrRXUa57KlmccA7Bec4K1UyqCdLUhAhA3OFDSR83FlRopVCPPvOA4UiPsCovIpZEWr7MK0EeKdYj6%2BjE7r0LPhorYgqNjNYj4GhV12uBfvlqAJv30QeSJs6PNyBmKqmrTpXRhxM5syoLEvh54ciVnaDGaAVC0JssyVLxOzn%2Bx3XnODRp5ckKvLsq5LXdbXapvAdcBbHAzaH%2FEKzSLPnbALeepCkXzsOaypqsCHWwLmFjqOQ6InMdFmCPl0%2F3s3MnpAJ56mSF9VtyH1MbDgO1qWN7GX005SqF5O%2BtlSLQQmUhYj5R3kpHpC8OikbxIvb1THofjzgPYSq45ZZmwHWZrFlUw8%2F97A%2FSz8hcbFH6oQuLDbFrbZmL97KbGtZsmatPQwjyX06GjdkKlsZtN3y7nYFlMV%2B0HxjtCC3XSEbU5Ds4ltzuyp5wvwWL8GhZ0mJQ6UKzsJn2Aj6LMJ6hmMAGOqUBLgrbpY4wZbTXdT7MLaoqgxvwtKoSUoVn4waXt86iEzgD34hjsnbEueOmpNXMBvwGaDRAYh4pV7rtaa%2FQlTQd%2BWob7D6l2zdwWSUumN3NSRZTagfeqTPFWcCQN%2Bz8IYGa6Spytx9UfBlxwSy1geBcfZZjO74215cjIaOSWp2VmC9I1XGflEoNDZrZcRYEIODc2IqDm%2Fw9oA2ejsc56VFGd1Vmce%2FS&X-Amz-Signature=75d090576355aed42033aed521039c00cafedaf12154494fd8d477e7c68db939&X-Amz-SignedHeaders=host&x-id=GetObject)
