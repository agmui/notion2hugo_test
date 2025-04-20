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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTIAQ4P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCvvjeRMFJeShlqzt7m22BgYZ9nDP0bWNHjo9IbHGFOMQIgbYkS5iN5tn6PYNxoghQeGxs7xIuCXyv%2B4Pu1HZv1BQoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6oY618%2BLSO4luwUircA993itzBBf3Bk2r0t0EvlpMI9TgHkoCCm9bF%2BiVd3WqHesFwmuWbXO4BiIh%2B%2F7yHu7%2Bzes%2BM2LVb7qIP52HVcZBnZkJf%2B75lqoRhZYPW18AjpNMb%2F3dC5KTX%2FzWb%2BLEEtLZPu1anRFrddYgVlGnpy%2B8mxkqsNqiPBB%2F0tNHQ0AYGfmOpLsqgzJVu2ivQUfOdE%2FcClJYiI7A7WIn8QhtNf%2FSamcj0gA8yHxRSKHMw%2Bru2Y%2FiqA2Gj1jBSHFLTELUuhrGMpXgdv8oJVTOnzi5XFHXCe2fSaA6ccISuSG2EGeneKlcYJ5PXQyRH947t0%2FV6eWurq2BuHEiQAKN%2B1NsYzvr9ob26XBzrDb4hBmE5K5O%2FH7A3mVFDdZV2XofNQ9a1EyqDGc1vDcpiB3OxdELQbNOo2gblzMze76fSrT1gheuhW2e1pTQVzImhR9m%2B700%2FkpwNtENrH6pS4n9LxTnCwfxW3dF2QYtMLjcSW6K6uz2KDrkDQhBEy8pxJ1b3TgOtBJQTaLqU%2FDGTU4%2B3wvc8FI56dwdV0jBtujWmrls0D%2Fd%2FRKZcSQJysoktdFERqNLWE57HlpGMmSjQ%2BPYEh9XZsn8M6ogLrQkt6wFCTSvQWAzAOXUwjL727n220qW4MNy%2BlMAGOqUBBkloiuK%2BhxCWYruQNXI7UbWWa9EZ5%2Fl8%2BOUwWGYoFPDyVcTWpHejI4yW0GeTGAEpXtsV4tD%2FiVU%2FZ9TDzkCLa7hlYO32n7zXiyJMA1e4msVVMLGKYDZ9UTqVgPWES03vI85UK3jx5g4t2y4H2rJdWAPxB4Dvh%2FU88vDfpgbZ88zTxrCMqtxBg27cj6TCqJxJN3BNTqBdxGV8duod6xxRGDIVG%2Fao&X-Amz-Signature=2c1a6a4ace56de4e73f2c044846946f8fe2f9d5de15a2b3e364df86a14f5436e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTIAQ4P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCvvjeRMFJeShlqzt7m22BgYZ9nDP0bWNHjo9IbHGFOMQIgbYkS5iN5tn6PYNxoghQeGxs7xIuCXyv%2B4Pu1HZv1BQoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6oY618%2BLSO4luwUircA993itzBBf3Bk2r0t0EvlpMI9TgHkoCCm9bF%2BiVd3WqHesFwmuWbXO4BiIh%2B%2F7yHu7%2Bzes%2BM2LVb7qIP52HVcZBnZkJf%2B75lqoRhZYPW18AjpNMb%2F3dC5KTX%2FzWb%2BLEEtLZPu1anRFrddYgVlGnpy%2B8mxkqsNqiPBB%2F0tNHQ0AYGfmOpLsqgzJVu2ivQUfOdE%2FcClJYiI7A7WIn8QhtNf%2FSamcj0gA8yHxRSKHMw%2Bru2Y%2FiqA2Gj1jBSHFLTELUuhrGMpXgdv8oJVTOnzi5XFHXCe2fSaA6ccISuSG2EGeneKlcYJ5PXQyRH947t0%2FV6eWurq2BuHEiQAKN%2B1NsYzvr9ob26XBzrDb4hBmE5K5O%2FH7A3mVFDdZV2XofNQ9a1EyqDGc1vDcpiB3OxdELQbNOo2gblzMze76fSrT1gheuhW2e1pTQVzImhR9m%2B700%2FkpwNtENrH6pS4n9LxTnCwfxW3dF2QYtMLjcSW6K6uz2KDrkDQhBEy8pxJ1b3TgOtBJQTaLqU%2FDGTU4%2B3wvc8FI56dwdV0jBtujWmrls0D%2Fd%2FRKZcSQJysoktdFERqNLWE57HlpGMmSjQ%2BPYEh9XZsn8M6ogLrQkt6wFCTSvQWAzAOXUwjL727n220qW4MNy%2BlMAGOqUBBkloiuK%2BhxCWYruQNXI7UbWWa9EZ5%2Fl8%2BOUwWGYoFPDyVcTWpHejI4yW0GeTGAEpXtsV4tD%2FiVU%2FZ9TDzkCLa7hlYO32n7zXiyJMA1e4msVVMLGKYDZ9UTqVgPWES03vI85UK3jx5g4t2y4H2rJdWAPxB4Dvh%2FU88vDfpgbZ88zTxrCMqtxBg27cj6TCqJxJN3BNTqBdxGV8duod6xxRGDIVG%2Fao&X-Amz-Signature=14770dd12a1bc3e474f046fbd9ea99906682815cc87fe78036660b529f325db7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTIAQ4P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCvvjeRMFJeShlqzt7m22BgYZ9nDP0bWNHjo9IbHGFOMQIgbYkS5iN5tn6PYNxoghQeGxs7xIuCXyv%2B4Pu1HZv1BQoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6oY618%2BLSO4luwUircA993itzBBf3Bk2r0t0EvlpMI9TgHkoCCm9bF%2BiVd3WqHesFwmuWbXO4BiIh%2B%2F7yHu7%2Bzes%2BM2LVb7qIP52HVcZBnZkJf%2B75lqoRhZYPW18AjpNMb%2F3dC5KTX%2FzWb%2BLEEtLZPu1anRFrddYgVlGnpy%2B8mxkqsNqiPBB%2F0tNHQ0AYGfmOpLsqgzJVu2ivQUfOdE%2FcClJYiI7A7WIn8QhtNf%2FSamcj0gA8yHxRSKHMw%2Bru2Y%2FiqA2Gj1jBSHFLTELUuhrGMpXgdv8oJVTOnzi5XFHXCe2fSaA6ccISuSG2EGeneKlcYJ5PXQyRH947t0%2FV6eWurq2BuHEiQAKN%2B1NsYzvr9ob26XBzrDb4hBmE5K5O%2FH7A3mVFDdZV2XofNQ9a1EyqDGc1vDcpiB3OxdELQbNOo2gblzMze76fSrT1gheuhW2e1pTQVzImhR9m%2B700%2FkpwNtENrH6pS4n9LxTnCwfxW3dF2QYtMLjcSW6K6uz2KDrkDQhBEy8pxJ1b3TgOtBJQTaLqU%2FDGTU4%2B3wvc8FI56dwdV0jBtujWmrls0D%2Fd%2FRKZcSQJysoktdFERqNLWE57HlpGMmSjQ%2BPYEh9XZsn8M6ogLrQkt6wFCTSvQWAzAOXUwjL727n220qW4MNy%2BlMAGOqUBBkloiuK%2BhxCWYruQNXI7UbWWa9EZ5%2Fl8%2BOUwWGYoFPDyVcTWpHejI4yW0GeTGAEpXtsV4tD%2FiVU%2FZ9TDzkCLa7hlYO32n7zXiyJMA1e4msVVMLGKYDZ9UTqVgPWES03vI85UK3jx5g4t2y4H2rJdWAPxB4Dvh%2FU88vDfpgbZ88zTxrCMqtxBg27cj6TCqJxJN3BNTqBdxGV8duod6xxRGDIVG%2Fao&X-Amz-Signature=a48af42ad8422847e3bf3cf44a4d6c656b9a0f54443defcd6e596f19941a18bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTIAQ4P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCvvjeRMFJeShlqzt7m22BgYZ9nDP0bWNHjo9IbHGFOMQIgbYkS5iN5tn6PYNxoghQeGxs7xIuCXyv%2B4Pu1HZv1BQoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6oY618%2BLSO4luwUircA993itzBBf3Bk2r0t0EvlpMI9TgHkoCCm9bF%2BiVd3WqHesFwmuWbXO4BiIh%2B%2F7yHu7%2Bzes%2BM2LVb7qIP52HVcZBnZkJf%2B75lqoRhZYPW18AjpNMb%2F3dC5KTX%2FzWb%2BLEEtLZPu1anRFrddYgVlGnpy%2B8mxkqsNqiPBB%2F0tNHQ0AYGfmOpLsqgzJVu2ivQUfOdE%2FcClJYiI7A7WIn8QhtNf%2FSamcj0gA8yHxRSKHMw%2Bru2Y%2FiqA2Gj1jBSHFLTELUuhrGMpXgdv8oJVTOnzi5XFHXCe2fSaA6ccISuSG2EGeneKlcYJ5PXQyRH947t0%2FV6eWurq2BuHEiQAKN%2B1NsYzvr9ob26XBzrDb4hBmE5K5O%2FH7A3mVFDdZV2XofNQ9a1EyqDGc1vDcpiB3OxdELQbNOo2gblzMze76fSrT1gheuhW2e1pTQVzImhR9m%2B700%2FkpwNtENrH6pS4n9LxTnCwfxW3dF2QYtMLjcSW6K6uz2KDrkDQhBEy8pxJ1b3TgOtBJQTaLqU%2FDGTU4%2B3wvc8FI56dwdV0jBtujWmrls0D%2Fd%2FRKZcSQJysoktdFERqNLWE57HlpGMmSjQ%2BPYEh9XZsn8M6ogLrQkt6wFCTSvQWAzAOXUwjL727n220qW4MNy%2BlMAGOqUBBkloiuK%2BhxCWYruQNXI7UbWWa9EZ5%2Fl8%2BOUwWGYoFPDyVcTWpHejI4yW0GeTGAEpXtsV4tD%2FiVU%2FZ9TDzkCLa7hlYO32n7zXiyJMA1e4msVVMLGKYDZ9UTqVgPWES03vI85UK3jx5g4t2y4H2rJdWAPxB4Dvh%2FU88vDfpgbZ88zTxrCMqtxBg27cj6TCqJxJN3BNTqBdxGV8duod6xxRGDIVG%2Fao&X-Amz-Signature=201d7483117ba33e6695bbd0bc3fc2050bc430967ba819adcc18156eb754ec97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTIAQ4P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCvvjeRMFJeShlqzt7m22BgYZ9nDP0bWNHjo9IbHGFOMQIgbYkS5iN5tn6PYNxoghQeGxs7xIuCXyv%2B4Pu1HZv1BQoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6oY618%2BLSO4luwUircA993itzBBf3Bk2r0t0EvlpMI9TgHkoCCm9bF%2BiVd3WqHesFwmuWbXO4BiIh%2B%2F7yHu7%2Bzes%2BM2LVb7qIP52HVcZBnZkJf%2B75lqoRhZYPW18AjpNMb%2F3dC5KTX%2FzWb%2BLEEtLZPu1anRFrddYgVlGnpy%2B8mxkqsNqiPBB%2F0tNHQ0AYGfmOpLsqgzJVu2ivQUfOdE%2FcClJYiI7A7WIn8QhtNf%2FSamcj0gA8yHxRSKHMw%2Bru2Y%2FiqA2Gj1jBSHFLTELUuhrGMpXgdv8oJVTOnzi5XFHXCe2fSaA6ccISuSG2EGeneKlcYJ5PXQyRH947t0%2FV6eWurq2BuHEiQAKN%2B1NsYzvr9ob26XBzrDb4hBmE5K5O%2FH7A3mVFDdZV2XofNQ9a1EyqDGc1vDcpiB3OxdELQbNOo2gblzMze76fSrT1gheuhW2e1pTQVzImhR9m%2B700%2FkpwNtENrH6pS4n9LxTnCwfxW3dF2QYtMLjcSW6K6uz2KDrkDQhBEy8pxJ1b3TgOtBJQTaLqU%2FDGTU4%2B3wvc8FI56dwdV0jBtujWmrls0D%2Fd%2FRKZcSQJysoktdFERqNLWE57HlpGMmSjQ%2BPYEh9XZsn8M6ogLrQkt6wFCTSvQWAzAOXUwjL727n220qW4MNy%2BlMAGOqUBBkloiuK%2BhxCWYruQNXI7UbWWa9EZ5%2Fl8%2BOUwWGYoFPDyVcTWpHejI4yW0GeTGAEpXtsV4tD%2FiVU%2FZ9TDzkCLa7hlYO32n7zXiyJMA1e4msVVMLGKYDZ9UTqVgPWES03vI85UK3jx5g4t2y4H2rJdWAPxB4Dvh%2FU88vDfpgbZ88zTxrCMqtxBg27cj6TCqJxJN3BNTqBdxGV8duod6xxRGDIVG%2Fao&X-Amz-Signature=96b43412222bf8f8bc6628cc44452b703212a748174646a7332276f818a2fecc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UTIAQ4P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCvvjeRMFJeShlqzt7m22BgYZ9nDP0bWNHjo9IbHGFOMQIgbYkS5iN5tn6PYNxoghQeGxs7xIuCXyv%2B4Pu1HZv1BQoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6oY618%2BLSO4luwUircA993itzBBf3Bk2r0t0EvlpMI9TgHkoCCm9bF%2BiVd3WqHesFwmuWbXO4BiIh%2B%2F7yHu7%2Bzes%2BM2LVb7qIP52HVcZBnZkJf%2B75lqoRhZYPW18AjpNMb%2F3dC5KTX%2FzWb%2BLEEtLZPu1anRFrddYgVlGnpy%2B8mxkqsNqiPBB%2F0tNHQ0AYGfmOpLsqgzJVu2ivQUfOdE%2FcClJYiI7A7WIn8QhtNf%2FSamcj0gA8yHxRSKHMw%2Bru2Y%2FiqA2Gj1jBSHFLTELUuhrGMpXgdv8oJVTOnzi5XFHXCe2fSaA6ccISuSG2EGeneKlcYJ5PXQyRH947t0%2FV6eWurq2BuHEiQAKN%2B1NsYzvr9ob26XBzrDb4hBmE5K5O%2FH7A3mVFDdZV2XofNQ9a1EyqDGc1vDcpiB3OxdELQbNOo2gblzMze76fSrT1gheuhW2e1pTQVzImhR9m%2B700%2FkpwNtENrH6pS4n9LxTnCwfxW3dF2QYtMLjcSW6K6uz2KDrkDQhBEy8pxJ1b3TgOtBJQTaLqU%2FDGTU4%2B3wvc8FI56dwdV0jBtujWmrls0D%2Fd%2FRKZcSQJysoktdFERqNLWE57HlpGMmSjQ%2BPYEh9XZsn8M6ogLrQkt6wFCTSvQWAzAOXUwjL727n220qW4MNy%2BlMAGOqUBBkloiuK%2BhxCWYruQNXI7UbWWa9EZ5%2Fl8%2BOUwWGYoFPDyVcTWpHejI4yW0GeTGAEpXtsV4tD%2FiVU%2FZ9TDzkCLa7hlYO32n7zXiyJMA1e4msVVMLGKYDZ9UTqVgPWES03vI85UK3jx5g4t2y4H2rJdWAPxB4Dvh%2FU88vDfpgbZ88zTxrCMqtxBg27cj6TCqJxJN3BNTqBdxGV8duod6xxRGDIVG%2Fao&X-Amz-Signature=4499bcd9683f872bb92cab330078d1eb56d844a00692e77b66d0cca9e1dde46f&X-Amz-SignedHeaders=host&x-id=GetObject)
