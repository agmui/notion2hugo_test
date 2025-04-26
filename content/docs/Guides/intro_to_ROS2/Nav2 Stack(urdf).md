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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7NAHRV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDArHnOTsXSZFy8aFWns%2FhK0cYO47ypY%2BkxaSSvUFjn8QIhAMM91p1XIBtleEhFMobKBvV%2Ffwy%2Fmh0DakaRYKY8Sgb%2BKv8DCDwQABoMNjM3NDIzMTgzODA1IgxbkJbnE%2BEA%2FNxLZhgq3AOlIVjl5ydSQox%2FFcWxT2Rgy7o3Z8QnZALlAaKu%2Bg5BVf9Z7dwOAvb9pL3K%2BXY0cGKHers%2Bs%2B4t7y677ytRq9K2rJm3BpVW2m1IyKe0gm7Ju%2BcAKiCXHYybdaoRtOKt7F33I1Npx5nscO7JThA%2FWPn3grjzcGantwi00gU0G0qrAXZYaYeq53RJQ%2FyJPm9r691TbR15OOcKmNNmVr8A5U5%2Fn%2FfLW6CNZrmCQQpkFhfXQN%2F%2Fwj%2Fwb2Y%2BmQ9zxOc5KQrAW8irnxDDgSpx5ryRnDBrraWsctFQvc9OcPBh72I1AkBv87omot%2BpBj6voNzmXI0ufXQ3aSBo99JyGt4cWBxHwPvfoILIna%2ByhMvgsaaEGjH%2BLyWDvTG9zbmpyg3UiHuT6jqoWIApUBck4uJi8%2F8Jo46zxF78pLuc8xxuXZcGiqkwq5ymsk8VqrXCaCLDnI1MTdUNdVCnWyuGEqptWmWcicUqKuVG25Q7QRJO9EV1rR0BR5nVN2%2Fb0M6jWKIYuKhIhSpFAskOFenxanCLHMgEJEQKooCYiTZzsTAOpTD0BHMKYadSWEYif08XSph9mORk6oIuomrDuczWSxZVRThnaH7sL8rL30f6t0q%2FgfsimgWhwC6BLzqlxP8pWDDbjbHABjqkAXYeC11NexR5TfMDl%2F%2BG03HNYd8QLADQBCZtUad6KQgudJcbz6rS7j%2B6%2BKCGhpx449InF29PXE2einRakurozdkTyxc1LbksgfmSAB7BUqpws%2FcYfxF2zygUrt7Qp%2BgBr%2FZ%2FCttzKr0Tpx69cs2EEmHAApHb5foUQy%2ByXDhjv4eIy118gCD2fEaNkN6hv4TpmznHA8DkzRBBTp0B8gZjDEMphE8c&X-Amz-Signature=aaea87364be2152ce13b9f45fc37799b0817bd9f7b888d096f761f7b5c5e92e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7NAHRV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDArHnOTsXSZFy8aFWns%2FhK0cYO47ypY%2BkxaSSvUFjn8QIhAMM91p1XIBtleEhFMobKBvV%2Ffwy%2Fmh0DakaRYKY8Sgb%2BKv8DCDwQABoMNjM3NDIzMTgzODA1IgxbkJbnE%2BEA%2FNxLZhgq3AOlIVjl5ydSQox%2FFcWxT2Rgy7o3Z8QnZALlAaKu%2Bg5BVf9Z7dwOAvb9pL3K%2BXY0cGKHers%2Bs%2B4t7y677ytRq9K2rJm3BpVW2m1IyKe0gm7Ju%2BcAKiCXHYybdaoRtOKt7F33I1Npx5nscO7JThA%2FWPn3grjzcGantwi00gU0G0qrAXZYaYeq53RJQ%2FyJPm9r691TbR15OOcKmNNmVr8A5U5%2Fn%2FfLW6CNZrmCQQpkFhfXQN%2F%2Fwj%2Fwb2Y%2BmQ9zxOc5KQrAW8irnxDDgSpx5ryRnDBrraWsctFQvc9OcPBh72I1AkBv87omot%2BpBj6voNzmXI0ufXQ3aSBo99JyGt4cWBxHwPvfoILIna%2ByhMvgsaaEGjH%2BLyWDvTG9zbmpyg3UiHuT6jqoWIApUBck4uJi8%2F8Jo46zxF78pLuc8xxuXZcGiqkwq5ymsk8VqrXCaCLDnI1MTdUNdVCnWyuGEqptWmWcicUqKuVG25Q7QRJO9EV1rR0BR5nVN2%2Fb0M6jWKIYuKhIhSpFAskOFenxanCLHMgEJEQKooCYiTZzsTAOpTD0BHMKYadSWEYif08XSph9mORk6oIuomrDuczWSxZVRThnaH7sL8rL30f6t0q%2FgfsimgWhwC6BLzqlxP8pWDDbjbHABjqkAXYeC11NexR5TfMDl%2F%2BG03HNYd8QLADQBCZtUad6KQgudJcbz6rS7j%2B6%2BKCGhpx449InF29PXE2einRakurozdkTyxc1LbksgfmSAB7BUqpws%2FcYfxF2zygUrt7Qp%2BgBr%2FZ%2FCttzKr0Tpx69cs2EEmHAApHb5foUQy%2ByXDhjv4eIy118gCD2fEaNkN6hv4TpmznHA8DkzRBBTp0B8gZjDEMphE8c&X-Amz-Signature=84a84398768b0ac0275cb3285e1c17cb31d0b0ecc49b8203f6658cfe54c93d52&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7NAHRV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDArHnOTsXSZFy8aFWns%2FhK0cYO47ypY%2BkxaSSvUFjn8QIhAMM91p1XIBtleEhFMobKBvV%2Ffwy%2Fmh0DakaRYKY8Sgb%2BKv8DCDwQABoMNjM3NDIzMTgzODA1IgxbkJbnE%2BEA%2FNxLZhgq3AOlIVjl5ydSQox%2FFcWxT2Rgy7o3Z8QnZALlAaKu%2Bg5BVf9Z7dwOAvb9pL3K%2BXY0cGKHers%2Bs%2B4t7y677ytRq9K2rJm3BpVW2m1IyKe0gm7Ju%2BcAKiCXHYybdaoRtOKt7F33I1Npx5nscO7JThA%2FWPn3grjzcGantwi00gU0G0qrAXZYaYeq53RJQ%2FyJPm9r691TbR15OOcKmNNmVr8A5U5%2Fn%2FfLW6CNZrmCQQpkFhfXQN%2F%2Fwj%2Fwb2Y%2BmQ9zxOc5KQrAW8irnxDDgSpx5ryRnDBrraWsctFQvc9OcPBh72I1AkBv87omot%2BpBj6voNzmXI0ufXQ3aSBo99JyGt4cWBxHwPvfoILIna%2ByhMvgsaaEGjH%2BLyWDvTG9zbmpyg3UiHuT6jqoWIApUBck4uJi8%2F8Jo46zxF78pLuc8xxuXZcGiqkwq5ymsk8VqrXCaCLDnI1MTdUNdVCnWyuGEqptWmWcicUqKuVG25Q7QRJO9EV1rR0BR5nVN2%2Fb0M6jWKIYuKhIhSpFAskOFenxanCLHMgEJEQKooCYiTZzsTAOpTD0BHMKYadSWEYif08XSph9mORk6oIuomrDuczWSxZVRThnaH7sL8rL30f6t0q%2FgfsimgWhwC6BLzqlxP8pWDDbjbHABjqkAXYeC11NexR5TfMDl%2F%2BG03HNYd8QLADQBCZtUad6KQgudJcbz6rS7j%2B6%2BKCGhpx449InF29PXE2einRakurozdkTyxc1LbksgfmSAB7BUqpws%2FcYfxF2zygUrt7Qp%2BgBr%2FZ%2FCttzKr0Tpx69cs2EEmHAApHb5foUQy%2ByXDhjv4eIy118gCD2fEaNkN6hv4TpmznHA8DkzRBBTp0B8gZjDEMphE8c&X-Amz-Signature=dda8568d9da17a5dcfa6ef50ce20eded9d4c2a91bfc1c2333284477b5bc24bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7NAHRV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDArHnOTsXSZFy8aFWns%2FhK0cYO47ypY%2BkxaSSvUFjn8QIhAMM91p1XIBtleEhFMobKBvV%2Ffwy%2Fmh0DakaRYKY8Sgb%2BKv8DCDwQABoMNjM3NDIzMTgzODA1IgxbkJbnE%2BEA%2FNxLZhgq3AOlIVjl5ydSQox%2FFcWxT2Rgy7o3Z8QnZALlAaKu%2Bg5BVf9Z7dwOAvb9pL3K%2BXY0cGKHers%2Bs%2B4t7y677ytRq9K2rJm3BpVW2m1IyKe0gm7Ju%2BcAKiCXHYybdaoRtOKt7F33I1Npx5nscO7JThA%2FWPn3grjzcGantwi00gU0G0qrAXZYaYeq53RJQ%2FyJPm9r691TbR15OOcKmNNmVr8A5U5%2Fn%2FfLW6CNZrmCQQpkFhfXQN%2F%2Fwj%2Fwb2Y%2BmQ9zxOc5KQrAW8irnxDDgSpx5ryRnDBrraWsctFQvc9OcPBh72I1AkBv87omot%2BpBj6voNzmXI0ufXQ3aSBo99JyGt4cWBxHwPvfoILIna%2ByhMvgsaaEGjH%2BLyWDvTG9zbmpyg3UiHuT6jqoWIApUBck4uJi8%2F8Jo46zxF78pLuc8xxuXZcGiqkwq5ymsk8VqrXCaCLDnI1MTdUNdVCnWyuGEqptWmWcicUqKuVG25Q7QRJO9EV1rR0BR5nVN2%2Fb0M6jWKIYuKhIhSpFAskOFenxanCLHMgEJEQKooCYiTZzsTAOpTD0BHMKYadSWEYif08XSph9mORk6oIuomrDuczWSxZVRThnaH7sL8rL30f6t0q%2FgfsimgWhwC6BLzqlxP8pWDDbjbHABjqkAXYeC11NexR5TfMDl%2F%2BG03HNYd8QLADQBCZtUad6KQgudJcbz6rS7j%2B6%2BKCGhpx449InF29PXE2einRakurozdkTyxc1LbksgfmSAB7BUqpws%2FcYfxF2zygUrt7Qp%2BgBr%2FZ%2FCttzKr0Tpx69cs2EEmHAApHb5foUQy%2ByXDhjv4eIy118gCD2fEaNkN6hv4TpmznHA8DkzRBBTp0B8gZjDEMphE8c&X-Amz-Signature=e03b395f09094c49118706b6210c25b533d11b2d32bb3337fc2ee7f3146a4dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7NAHRV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDArHnOTsXSZFy8aFWns%2FhK0cYO47ypY%2BkxaSSvUFjn8QIhAMM91p1XIBtleEhFMobKBvV%2Ffwy%2Fmh0DakaRYKY8Sgb%2BKv8DCDwQABoMNjM3NDIzMTgzODA1IgxbkJbnE%2BEA%2FNxLZhgq3AOlIVjl5ydSQox%2FFcWxT2Rgy7o3Z8QnZALlAaKu%2Bg5BVf9Z7dwOAvb9pL3K%2BXY0cGKHers%2Bs%2B4t7y677ytRq9K2rJm3BpVW2m1IyKe0gm7Ju%2BcAKiCXHYybdaoRtOKt7F33I1Npx5nscO7JThA%2FWPn3grjzcGantwi00gU0G0qrAXZYaYeq53RJQ%2FyJPm9r691TbR15OOcKmNNmVr8A5U5%2Fn%2FfLW6CNZrmCQQpkFhfXQN%2F%2Fwj%2Fwb2Y%2BmQ9zxOc5KQrAW8irnxDDgSpx5ryRnDBrraWsctFQvc9OcPBh72I1AkBv87omot%2BpBj6voNzmXI0ufXQ3aSBo99JyGt4cWBxHwPvfoILIna%2ByhMvgsaaEGjH%2BLyWDvTG9zbmpyg3UiHuT6jqoWIApUBck4uJi8%2F8Jo46zxF78pLuc8xxuXZcGiqkwq5ymsk8VqrXCaCLDnI1MTdUNdVCnWyuGEqptWmWcicUqKuVG25Q7QRJO9EV1rR0BR5nVN2%2Fb0M6jWKIYuKhIhSpFAskOFenxanCLHMgEJEQKooCYiTZzsTAOpTD0BHMKYadSWEYif08XSph9mORk6oIuomrDuczWSxZVRThnaH7sL8rL30f6t0q%2FgfsimgWhwC6BLzqlxP8pWDDbjbHABjqkAXYeC11NexR5TfMDl%2F%2BG03HNYd8QLADQBCZtUad6KQgudJcbz6rS7j%2B6%2BKCGhpx449InF29PXE2einRakurozdkTyxc1LbksgfmSAB7BUqpws%2FcYfxF2zygUrt7Qp%2BgBr%2FZ%2FCttzKr0Tpx69cs2EEmHAApHb5foUQy%2ByXDhjv4eIy118gCD2fEaNkN6hv4TpmznHA8DkzRBBTp0B8gZjDEMphE8c&X-Amz-Signature=3cc3d9932d952d185c32412e0400aed13fa5822a04ba3415463bf546d68bb760&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR7NAHRV%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDArHnOTsXSZFy8aFWns%2FhK0cYO47ypY%2BkxaSSvUFjn8QIhAMM91p1XIBtleEhFMobKBvV%2Ffwy%2Fmh0DakaRYKY8Sgb%2BKv8DCDwQABoMNjM3NDIzMTgzODA1IgxbkJbnE%2BEA%2FNxLZhgq3AOlIVjl5ydSQox%2FFcWxT2Rgy7o3Z8QnZALlAaKu%2Bg5BVf9Z7dwOAvb9pL3K%2BXY0cGKHers%2Bs%2B4t7y677ytRq9K2rJm3BpVW2m1IyKe0gm7Ju%2BcAKiCXHYybdaoRtOKt7F33I1Npx5nscO7JThA%2FWPn3grjzcGantwi00gU0G0qrAXZYaYeq53RJQ%2FyJPm9r691TbR15OOcKmNNmVr8A5U5%2Fn%2FfLW6CNZrmCQQpkFhfXQN%2F%2Fwj%2Fwb2Y%2BmQ9zxOc5KQrAW8irnxDDgSpx5ryRnDBrraWsctFQvc9OcPBh72I1AkBv87omot%2BpBj6voNzmXI0ufXQ3aSBo99JyGt4cWBxHwPvfoILIna%2ByhMvgsaaEGjH%2BLyWDvTG9zbmpyg3UiHuT6jqoWIApUBck4uJi8%2F8Jo46zxF78pLuc8xxuXZcGiqkwq5ymsk8VqrXCaCLDnI1MTdUNdVCnWyuGEqptWmWcicUqKuVG25Q7QRJO9EV1rR0BR5nVN2%2Fb0M6jWKIYuKhIhSpFAskOFenxanCLHMgEJEQKooCYiTZzsTAOpTD0BHMKYadSWEYif08XSph9mORk6oIuomrDuczWSxZVRThnaH7sL8rL30f6t0q%2FgfsimgWhwC6BLzqlxP8pWDDbjbHABjqkAXYeC11NexR5TfMDl%2F%2BG03HNYd8QLADQBCZtUad6KQgudJcbz6rS7j%2B6%2BKCGhpx449InF29PXE2einRakurozdkTyxc1LbksgfmSAB7BUqpws%2FcYfxF2zygUrt7Qp%2BgBr%2FZ%2FCttzKr0Tpx69cs2EEmHAApHb5foUQy%2ByXDhjv4eIy118gCD2fEaNkN6hv4TpmznHA8DkzRBBTp0B8gZjDEMphE8c&X-Amz-Signature=59501e0f2dc98e5d6b7f1c44aad1c20478873d70c5d2f063e3c7ccaa8c58c3f2&X-Amz-SignedHeaders=host&x-id=GetObject)
