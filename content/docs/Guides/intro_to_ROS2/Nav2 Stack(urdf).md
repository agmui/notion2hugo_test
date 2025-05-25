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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MCFJTF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHl8JE%2Fh8DL6weour6%2BmHfYVqJmHoDsnvTyvWuy%2BWzZHAiEA5VQfBsiAYaNc3%2FS1t%2Fuo7hYzC%2F%2FZ2niZ5S8XBDn1j60q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJM1jYtjYF0zgePSgSrcA8fJ2HmhefwMFEnTsP6LFNO5j%2BENiGYT4HotRrCYcIdpwWEQQw7oaN2MVlGYCviBG56bYiasVQMANXn1AvSD5yD1Xw6ViJ5K6g1IBs6apSnR9%2BrxCS%2FIdMJlXtFn3Eef%2BiX6XjKTFSGzFmn3YuPun8D%2BXFyRZa08aF5avVr%2BjASZ74puYcGHWdFrxXS13XDc3yC5MuPAl7pc03TD1K74cnQ03BdM6IagXS8xnmoLZWwxwraeFP6RAs1cqqxADEzLlAg5nlzSDquJ%2BK8ZpFeUl6l0SXOeCMVxL0W77A5FME2UQrjVPbcXQ5VtnjyhTtIagHiFwOc5vWvUOqVZEYIoy%2FBsM9xlnbuZCm0SrUpT9C8MT6mm%2B8deZy%2Fw30AU58aOWDdUM7K82fHKqjW5zMCkhzogW8NAkwN%2F5gR5jPAwBAWZ7I2FJj0X2HjiIvG2p8T1JnBa4OLefoYDLvcDBZJuWxw6tBTF40dzYTDyA8TAVbcZgM%2FFp1D7gvsGg1BsQAisML%2FHvIOU%2BTVGKCEmxxU9K3B%2B%2FGS215d6PcU9%2BTCP%2BOKyUS97ePLzhxKYisZho%2FkIukxGCNLh6iF7sTX2k2ajdd1s06uGKVNWwc3nm0GZpwWCshjqaIUZv9g9wM2wMIH%2FzMEGOqUB0Ha%2Bx5LocdOpBpYoZkIytAAeJBrCT%2FP0fk%2FwpFu%2FAOX%2FRupDk%2BQUV70HdZyfIQjnECrGLr12Q9M5zdkwr8HeQG%2Bj%2FXkNoI0tbfBspwE2wq8Uz%2F1AvljFnWKFMyssxEdGWkuH%2B7AzOigQVeZVzYY2jQx9xfxuPN3FawFEeARoLCz76bw9ffg%2Bjya5hWLj%2BqbACrtueeiwATJDXLffFC5bmZYq3uct&X-Amz-Signature=d20eb219d4fe01f506aaaf004339c3f1d576f66d957c7990ff14ddae9e04aeca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MCFJTF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHl8JE%2Fh8DL6weour6%2BmHfYVqJmHoDsnvTyvWuy%2BWzZHAiEA5VQfBsiAYaNc3%2FS1t%2Fuo7hYzC%2F%2FZ2niZ5S8XBDn1j60q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJM1jYtjYF0zgePSgSrcA8fJ2HmhefwMFEnTsP6LFNO5j%2BENiGYT4HotRrCYcIdpwWEQQw7oaN2MVlGYCviBG56bYiasVQMANXn1AvSD5yD1Xw6ViJ5K6g1IBs6apSnR9%2BrxCS%2FIdMJlXtFn3Eef%2BiX6XjKTFSGzFmn3YuPun8D%2BXFyRZa08aF5avVr%2BjASZ74puYcGHWdFrxXS13XDc3yC5MuPAl7pc03TD1K74cnQ03BdM6IagXS8xnmoLZWwxwraeFP6RAs1cqqxADEzLlAg5nlzSDquJ%2BK8ZpFeUl6l0SXOeCMVxL0W77A5FME2UQrjVPbcXQ5VtnjyhTtIagHiFwOc5vWvUOqVZEYIoy%2FBsM9xlnbuZCm0SrUpT9C8MT6mm%2B8deZy%2Fw30AU58aOWDdUM7K82fHKqjW5zMCkhzogW8NAkwN%2F5gR5jPAwBAWZ7I2FJj0X2HjiIvG2p8T1JnBa4OLefoYDLvcDBZJuWxw6tBTF40dzYTDyA8TAVbcZgM%2FFp1D7gvsGg1BsQAisML%2FHvIOU%2BTVGKCEmxxU9K3B%2B%2FGS215d6PcU9%2BTCP%2BOKyUS97ePLzhxKYisZho%2FkIukxGCNLh6iF7sTX2k2ajdd1s06uGKVNWwc3nm0GZpwWCshjqaIUZv9g9wM2wMIH%2FzMEGOqUB0Ha%2Bx5LocdOpBpYoZkIytAAeJBrCT%2FP0fk%2FwpFu%2FAOX%2FRupDk%2BQUV70HdZyfIQjnECrGLr12Q9M5zdkwr8HeQG%2Bj%2FXkNoI0tbfBspwE2wq8Uz%2F1AvljFnWKFMyssxEdGWkuH%2B7AzOigQVeZVzYY2jQx9xfxuPN3FawFEeARoLCz76bw9ffg%2Bjya5hWLj%2BqbACrtueeiwATJDXLffFC5bmZYq3uct&X-Amz-Signature=a88c3884598a34f6e0bc8ea75ddc6eaeb7b2358fde29c5e2d11d5d2fc42ba6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MCFJTF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHl8JE%2Fh8DL6weour6%2BmHfYVqJmHoDsnvTyvWuy%2BWzZHAiEA5VQfBsiAYaNc3%2FS1t%2Fuo7hYzC%2F%2FZ2niZ5S8XBDn1j60q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJM1jYtjYF0zgePSgSrcA8fJ2HmhefwMFEnTsP6LFNO5j%2BENiGYT4HotRrCYcIdpwWEQQw7oaN2MVlGYCviBG56bYiasVQMANXn1AvSD5yD1Xw6ViJ5K6g1IBs6apSnR9%2BrxCS%2FIdMJlXtFn3Eef%2BiX6XjKTFSGzFmn3YuPun8D%2BXFyRZa08aF5avVr%2BjASZ74puYcGHWdFrxXS13XDc3yC5MuPAl7pc03TD1K74cnQ03BdM6IagXS8xnmoLZWwxwraeFP6RAs1cqqxADEzLlAg5nlzSDquJ%2BK8ZpFeUl6l0SXOeCMVxL0W77A5FME2UQrjVPbcXQ5VtnjyhTtIagHiFwOc5vWvUOqVZEYIoy%2FBsM9xlnbuZCm0SrUpT9C8MT6mm%2B8deZy%2Fw30AU58aOWDdUM7K82fHKqjW5zMCkhzogW8NAkwN%2F5gR5jPAwBAWZ7I2FJj0X2HjiIvG2p8T1JnBa4OLefoYDLvcDBZJuWxw6tBTF40dzYTDyA8TAVbcZgM%2FFp1D7gvsGg1BsQAisML%2FHvIOU%2BTVGKCEmxxU9K3B%2B%2FGS215d6PcU9%2BTCP%2BOKyUS97ePLzhxKYisZho%2FkIukxGCNLh6iF7sTX2k2ajdd1s06uGKVNWwc3nm0GZpwWCshjqaIUZv9g9wM2wMIH%2FzMEGOqUB0Ha%2Bx5LocdOpBpYoZkIytAAeJBrCT%2FP0fk%2FwpFu%2FAOX%2FRupDk%2BQUV70HdZyfIQjnECrGLr12Q9M5zdkwr8HeQG%2Bj%2FXkNoI0tbfBspwE2wq8Uz%2F1AvljFnWKFMyssxEdGWkuH%2B7AzOigQVeZVzYY2jQx9xfxuPN3FawFEeARoLCz76bw9ffg%2Bjya5hWLj%2BqbACrtueeiwATJDXLffFC5bmZYq3uct&X-Amz-Signature=ebf280151936079d5b6e2613fe6a2f7e3d7cc5dc84b2bf7d8921095e9273fa23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MCFJTF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHl8JE%2Fh8DL6weour6%2BmHfYVqJmHoDsnvTyvWuy%2BWzZHAiEA5VQfBsiAYaNc3%2FS1t%2Fuo7hYzC%2F%2FZ2niZ5S8XBDn1j60q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJM1jYtjYF0zgePSgSrcA8fJ2HmhefwMFEnTsP6LFNO5j%2BENiGYT4HotRrCYcIdpwWEQQw7oaN2MVlGYCviBG56bYiasVQMANXn1AvSD5yD1Xw6ViJ5K6g1IBs6apSnR9%2BrxCS%2FIdMJlXtFn3Eef%2BiX6XjKTFSGzFmn3YuPun8D%2BXFyRZa08aF5avVr%2BjASZ74puYcGHWdFrxXS13XDc3yC5MuPAl7pc03TD1K74cnQ03BdM6IagXS8xnmoLZWwxwraeFP6RAs1cqqxADEzLlAg5nlzSDquJ%2BK8ZpFeUl6l0SXOeCMVxL0W77A5FME2UQrjVPbcXQ5VtnjyhTtIagHiFwOc5vWvUOqVZEYIoy%2FBsM9xlnbuZCm0SrUpT9C8MT6mm%2B8deZy%2Fw30AU58aOWDdUM7K82fHKqjW5zMCkhzogW8NAkwN%2F5gR5jPAwBAWZ7I2FJj0X2HjiIvG2p8T1JnBa4OLefoYDLvcDBZJuWxw6tBTF40dzYTDyA8TAVbcZgM%2FFp1D7gvsGg1BsQAisML%2FHvIOU%2BTVGKCEmxxU9K3B%2B%2FGS215d6PcU9%2BTCP%2BOKyUS97ePLzhxKYisZho%2FkIukxGCNLh6iF7sTX2k2ajdd1s06uGKVNWwc3nm0GZpwWCshjqaIUZv9g9wM2wMIH%2FzMEGOqUB0Ha%2Bx5LocdOpBpYoZkIytAAeJBrCT%2FP0fk%2FwpFu%2FAOX%2FRupDk%2BQUV70HdZyfIQjnECrGLr12Q9M5zdkwr8HeQG%2Bj%2FXkNoI0tbfBspwE2wq8Uz%2F1AvljFnWKFMyssxEdGWkuH%2B7AzOigQVeZVzYY2jQx9xfxuPN3FawFEeARoLCz76bw9ffg%2Bjya5hWLj%2BqbACrtueeiwATJDXLffFC5bmZYq3uct&X-Amz-Signature=5677290ef04a9f249f13e21ff644be0f5d9dc053e4e5a6bffb1876ae1b7926a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MCFJTF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHl8JE%2Fh8DL6weour6%2BmHfYVqJmHoDsnvTyvWuy%2BWzZHAiEA5VQfBsiAYaNc3%2FS1t%2Fuo7hYzC%2F%2FZ2niZ5S8XBDn1j60q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJM1jYtjYF0zgePSgSrcA8fJ2HmhefwMFEnTsP6LFNO5j%2BENiGYT4HotRrCYcIdpwWEQQw7oaN2MVlGYCviBG56bYiasVQMANXn1AvSD5yD1Xw6ViJ5K6g1IBs6apSnR9%2BrxCS%2FIdMJlXtFn3Eef%2BiX6XjKTFSGzFmn3YuPun8D%2BXFyRZa08aF5avVr%2BjASZ74puYcGHWdFrxXS13XDc3yC5MuPAl7pc03TD1K74cnQ03BdM6IagXS8xnmoLZWwxwraeFP6RAs1cqqxADEzLlAg5nlzSDquJ%2BK8ZpFeUl6l0SXOeCMVxL0W77A5FME2UQrjVPbcXQ5VtnjyhTtIagHiFwOc5vWvUOqVZEYIoy%2FBsM9xlnbuZCm0SrUpT9C8MT6mm%2B8deZy%2Fw30AU58aOWDdUM7K82fHKqjW5zMCkhzogW8NAkwN%2F5gR5jPAwBAWZ7I2FJj0X2HjiIvG2p8T1JnBa4OLefoYDLvcDBZJuWxw6tBTF40dzYTDyA8TAVbcZgM%2FFp1D7gvsGg1BsQAisML%2FHvIOU%2BTVGKCEmxxU9K3B%2B%2FGS215d6PcU9%2BTCP%2BOKyUS97ePLzhxKYisZho%2FkIukxGCNLh6iF7sTX2k2ajdd1s06uGKVNWwc3nm0GZpwWCshjqaIUZv9g9wM2wMIH%2FzMEGOqUB0Ha%2Bx5LocdOpBpYoZkIytAAeJBrCT%2FP0fk%2FwpFu%2FAOX%2FRupDk%2BQUV70HdZyfIQjnECrGLr12Q9M5zdkwr8HeQG%2Bj%2FXkNoI0tbfBspwE2wq8Uz%2F1AvljFnWKFMyssxEdGWkuH%2B7AzOigQVeZVzYY2jQx9xfxuPN3FawFEeARoLCz76bw9ffg%2Bjya5hWLj%2BqbACrtueeiwATJDXLffFC5bmZYq3uct&X-Amz-Signature=4e1f746c8a22a2fb247aae7ac38d45cc6ae010837be7048e0c39eb8223b04961&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MCFJTF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHl8JE%2Fh8DL6weour6%2BmHfYVqJmHoDsnvTyvWuy%2BWzZHAiEA5VQfBsiAYaNc3%2FS1t%2Fuo7hYzC%2F%2FZ2niZ5S8XBDn1j60q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJM1jYtjYF0zgePSgSrcA8fJ2HmhefwMFEnTsP6LFNO5j%2BENiGYT4HotRrCYcIdpwWEQQw7oaN2MVlGYCviBG56bYiasVQMANXn1AvSD5yD1Xw6ViJ5K6g1IBs6apSnR9%2BrxCS%2FIdMJlXtFn3Eef%2BiX6XjKTFSGzFmn3YuPun8D%2BXFyRZa08aF5avVr%2BjASZ74puYcGHWdFrxXS13XDc3yC5MuPAl7pc03TD1K74cnQ03BdM6IagXS8xnmoLZWwxwraeFP6RAs1cqqxADEzLlAg5nlzSDquJ%2BK8ZpFeUl6l0SXOeCMVxL0W77A5FME2UQrjVPbcXQ5VtnjyhTtIagHiFwOc5vWvUOqVZEYIoy%2FBsM9xlnbuZCm0SrUpT9C8MT6mm%2B8deZy%2Fw30AU58aOWDdUM7K82fHKqjW5zMCkhzogW8NAkwN%2F5gR5jPAwBAWZ7I2FJj0X2HjiIvG2p8T1JnBa4OLefoYDLvcDBZJuWxw6tBTF40dzYTDyA8TAVbcZgM%2FFp1D7gvsGg1BsQAisML%2FHvIOU%2BTVGKCEmxxU9K3B%2B%2FGS215d6PcU9%2BTCP%2BOKyUS97ePLzhxKYisZho%2FkIukxGCNLh6iF7sTX2k2ajdd1s06uGKVNWwc3nm0GZpwWCshjqaIUZv9g9wM2wMIH%2FzMEGOqUB0Ha%2Bx5LocdOpBpYoZkIytAAeJBrCT%2FP0fk%2FwpFu%2FAOX%2FRupDk%2BQUV70HdZyfIQjnECrGLr12Q9M5zdkwr8HeQG%2Bj%2FXkNoI0tbfBspwE2wq8Uz%2F1AvljFnWKFMyssxEdGWkuH%2B7AzOigQVeZVzYY2jQx9xfxuPN3FawFEeARoLCz76bw9ffg%2Bjya5hWLj%2BqbACrtueeiwATJDXLffFC5bmZYq3uct&X-Amz-Signature=d7b1238c406f9d65a273fb42f9c31d0d9742997b63c93f26a816fe70395fc814&X-Amz-SignedHeaders=host&x-id=GetObject)
