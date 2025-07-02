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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVH6TFE4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKTGTg1iLXXERXjbPryoGQVzM%2FHCdfVTp%2BjL92kDQ%2BQIgLWMp0WcPNZTw3nVEhDrBbG9y7aFFTch67CJPHi8EY4EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNU%2F1o0n9Jb6vEuayrcA%2FbgEdtPx8Glu%2BjqVTMk03hlRFXIvTzqtc1OEqeiBnCguoov%2FAZPPpbRdD84U%2FxF5t4dXp9yUKszFd%2FpZrx665nCHEqQIKMtiFGEexqEsq6yOuugPXGnGBsETYm2Qe3F9LLOT7K%2Btx2TMG5QARkxAfuoWus6PrEz6UkCA2%2FYSv8ZHiq7m2QDJFasMakMiasiN7EWoKJKSfM9klBNYDL39l%2FhGFcaoQ8ErnaQTSeN9Q4AuXd0F5Ov4Qn%2B%2FCxm1FXo4YstQu6SK91L9iRU%2F8elqHKnzu%2B3mMAO9Pvj2hHKVFFQXQOVoSjL58KAB54q6GjwUmH%2FhocDLEVqIeCQMsWHe%2BUx2vZtNfD%2B6yznnQ%2ByLyxNXMSGLAbiq3yeSNvaqf9ujk1TyMh9IUTPqJiSK6eIi9L6Xy2xb29W2sJ3TtI2y0nF3Wi0kHsv29G5LBms9%2Bs8OmO2y0PTAjZs2r5k4HDAyeytxzxGmuerSxkpaTHmGE8bHD4uPTLZpy2Yd0Gpl%2F8ygY48%2BUhwvFkoLTsXsIQ65onWIN6yy9vJkFIRqLHhNoTQAVtXJ9VKmjuMZ3EBO9j%2FFThbV4v91LNXVc%2BMfdmN461dzTU%2FjU00Kqviq2LFzFvEQWTOvI%2FJLIt2xlg9ML7BlcMGOqUBWm9mAvZXzJeDgCn3t8ZzhwgXSFT0tDCA2Hf5jnVEwEE0VYR5bAz5%2BX22q3MLO41x1JrQorRFEZ7fnRQqCEJJVehe9XF3CkuVlgC7%2BVvyhJPgDXH7Bh52JQ88j7evIz6UMlSjI81M6ZhbFDhWDQTao5wAv%2BVdO7XZEd9qXBzuUiJRCYSVLhsG0Ek8OqCxpy%2BHtvgt2LFIN4b%2FK7jFhDHzwlEEQ0Xj&X-Amz-Signature=a054989d7564c77d05e4f3f4f0b8459a8c65322569565df9b96e9b1808dd6a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVH6TFE4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKTGTg1iLXXERXjbPryoGQVzM%2FHCdfVTp%2BjL92kDQ%2BQIgLWMp0WcPNZTw3nVEhDrBbG9y7aFFTch67CJPHi8EY4EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNU%2F1o0n9Jb6vEuayrcA%2FbgEdtPx8Glu%2BjqVTMk03hlRFXIvTzqtc1OEqeiBnCguoov%2FAZPPpbRdD84U%2FxF5t4dXp9yUKszFd%2FpZrx665nCHEqQIKMtiFGEexqEsq6yOuugPXGnGBsETYm2Qe3F9LLOT7K%2Btx2TMG5QARkxAfuoWus6PrEz6UkCA2%2FYSv8ZHiq7m2QDJFasMakMiasiN7EWoKJKSfM9klBNYDL39l%2FhGFcaoQ8ErnaQTSeN9Q4AuXd0F5Ov4Qn%2B%2FCxm1FXo4YstQu6SK91L9iRU%2F8elqHKnzu%2B3mMAO9Pvj2hHKVFFQXQOVoSjL58KAB54q6GjwUmH%2FhocDLEVqIeCQMsWHe%2BUx2vZtNfD%2B6yznnQ%2ByLyxNXMSGLAbiq3yeSNvaqf9ujk1TyMh9IUTPqJiSK6eIi9L6Xy2xb29W2sJ3TtI2y0nF3Wi0kHsv29G5LBms9%2Bs8OmO2y0PTAjZs2r5k4HDAyeytxzxGmuerSxkpaTHmGE8bHD4uPTLZpy2Yd0Gpl%2F8ygY48%2BUhwvFkoLTsXsIQ65onWIN6yy9vJkFIRqLHhNoTQAVtXJ9VKmjuMZ3EBO9j%2FFThbV4v91LNXVc%2BMfdmN461dzTU%2FjU00Kqviq2LFzFvEQWTOvI%2FJLIt2xlg9ML7BlcMGOqUBWm9mAvZXzJeDgCn3t8ZzhwgXSFT0tDCA2Hf5jnVEwEE0VYR5bAz5%2BX22q3MLO41x1JrQorRFEZ7fnRQqCEJJVehe9XF3CkuVlgC7%2BVvyhJPgDXH7Bh52JQ88j7evIz6UMlSjI81M6ZhbFDhWDQTao5wAv%2BVdO7XZEd9qXBzuUiJRCYSVLhsG0Ek8OqCxpy%2BHtvgt2LFIN4b%2FK7jFhDHzwlEEQ0Xj&X-Amz-Signature=a03010beb4e6bd0a8bb39dcf5e0d2afe98e8b13d5e116f4f5ff4044c4b483c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVH6TFE4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKTGTg1iLXXERXjbPryoGQVzM%2FHCdfVTp%2BjL92kDQ%2BQIgLWMp0WcPNZTw3nVEhDrBbG9y7aFFTch67CJPHi8EY4EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNU%2F1o0n9Jb6vEuayrcA%2FbgEdtPx8Glu%2BjqVTMk03hlRFXIvTzqtc1OEqeiBnCguoov%2FAZPPpbRdD84U%2FxF5t4dXp9yUKszFd%2FpZrx665nCHEqQIKMtiFGEexqEsq6yOuugPXGnGBsETYm2Qe3F9LLOT7K%2Btx2TMG5QARkxAfuoWus6PrEz6UkCA2%2FYSv8ZHiq7m2QDJFasMakMiasiN7EWoKJKSfM9klBNYDL39l%2FhGFcaoQ8ErnaQTSeN9Q4AuXd0F5Ov4Qn%2B%2FCxm1FXo4YstQu6SK91L9iRU%2F8elqHKnzu%2B3mMAO9Pvj2hHKVFFQXQOVoSjL58KAB54q6GjwUmH%2FhocDLEVqIeCQMsWHe%2BUx2vZtNfD%2B6yznnQ%2ByLyxNXMSGLAbiq3yeSNvaqf9ujk1TyMh9IUTPqJiSK6eIi9L6Xy2xb29W2sJ3TtI2y0nF3Wi0kHsv29G5LBms9%2Bs8OmO2y0PTAjZs2r5k4HDAyeytxzxGmuerSxkpaTHmGE8bHD4uPTLZpy2Yd0Gpl%2F8ygY48%2BUhwvFkoLTsXsIQ65onWIN6yy9vJkFIRqLHhNoTQAVtXJ9VKmjuMZ3EBO9j%2FFThbV4v91LNXVc%2BMfdmN461dzTU%2FjU00Kqviq2LFzFvEQWTOvI%2FJLIt2xlg9ML7BlcMGOqUBWm9mAvZXzJeDgCn3t8ZzhwgXSFT0tDCA2Hf5jnVEwEE0VYR5bAz5%2BX22q3MLO41x1JrQorRFEZ7fnRQqCEJJVehe9XF3CkuVlgC7%2BVvyhJPgDXH7Bh52JQ88j7evIz6UMlSjI81M6ZhbFDhWDQTao5wAv%2BVdO7XZEd9qXBzuUiJRCYSVLhsG0Ek8OqCxpy%2BHtvgt2LFIN4b%2FK7jFhDHzwlEEQ0Xj&X-Amz-Signature=c41cb08c6605c8d1910b45dadef6fc1b5abd6f85f1ed6b42f90b822dd922d293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVH6TFE4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKTGTg1iLXXERXjbPryoGQVzM%2FHCdfVTp%2BjL92kDQ%2BQIgLWMp0WcPNZTw3nVEhDrBbG9y7aFFTch67CJPHi8EY4EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNU%2F1o0n9Jb6vEuayrcA%2FbgEdtPx8Glu%2BjqVTMk03hlRFXIvTzqtc1OEqeiBnCguoov%2FAZPPpbRdD84U%2FxF5t4dXp9yUKszFd%2FpZrx665nCHEqQIKMtiFGEexqEsq6yOuugPXGnGBsETYm2Qe3F9LLOT7K%2Btx2TMG5QARkxAfuoWus6PrEz6UkCA2%2FYSv8ZHiq7m2QDJFasMakMiasiN7EWoKJKSfM9klBNYDL39l%2FhGFcaoQ8ErnaQTSeN9Q4AuXd0F5Ov4Qn%2B%2FCxm1FXo4YstQu6SK91L9iRU%2F8elqHKnzu%2B3mMAO9Pvj2hHKVFFQXQOVoSjL58KAB54q6GjwUmH%2FhocDLEVqIeCQMsWHe%2BUx2vZtNfD%2B6yznnQ%2ByLyxNXMSGLAbiq3yeSNvaqf9ujk1TyMh9IUTPqJiSK6eIi9L6Xy2xb29W2sJ3TtI2y0nF3Wi0kHsv29G5LBms9%2Bs8OmO2y0PTAjZs2r5k4HDAyeytxzxGmuerSxkpaTHmGE8bHD4uPTLZpy2Yd0Gpl%2F8ygY48%2BUhwvFkoLTsXsIQ65onWIN6yy9vJkFIRqLHhNoTQAVtXJ9VKmjuMZ3EBO9j%2FFThbV4v91LNXVc%2BMfdmN461dzTU%2FjU00Kqviq2LFzFvEQWTOvI%2FJLIt2xlg9ML7BlcMGOqUBWm9mAvZXzJeDgCn3t8ZzhwgXSFT0tDCA2Hf5jnVEwEE0VYR5bAz5%2BX22q3MLO41x1JrQorRFEZ7fnRQqCEJJVehe9XF3CkuVlgC7%2BVvyhJPgDXH7Bh52JQ88j7evIz6UMlSjI81M6ZhbFDhWDQTao5wAv%2BVdO7XZEd9qXBzuUiJRCYSVLhsG0Ek8OqCxpy%2BHtvgt2LFIN4b%2FK7jFhDHzwlEEQ0Xj&X-Amz-Signature=79a3d221c9fa8e4a0adc61765eb29a96ffba2ba548147660f81bfea61c831192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVH6TFE4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKTGTg1iLXXERXjbPryoGQVzM%2FHCdfVTp%2BjL92kDQ%2BQIgLWMp0WcPNZTw3nVEhDrBbG9y7aFFTch67CJPHi8EY4EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNU%2F1o0n9Jb6vEuayrcA%2FbgEdtPx8Glu%2BjqVTMk03hlRFXIvTzqtc1OEqeiBnCguoov%2FAZPPpbRdD84U%2FxF5t4dXp9yUKszFd%2FpZrx665nCHEqQIKMtiFGEexqEsq6yOuugPXGnGBsETYm2Qe3F9LLOT7K%2Btx2TMG5QARkxAfuoWus6PrEz6UkCA2%2FYSv8ZHiq7m2QDJFasMakMiasiN7EWoKJKSfM9klBNYDL39l%2FhGFcaoQ8ErnaQTSeN9Q4AuXd0F5Ov4Qn%2B%2FCxm1FXo4YstQu6SK91L9iRU%2F8elqHKnzu%2B3mMAO9Pvj2hHKVFFQXQOVoSjL58KAB54q6GjwUmH%2FhocDLEVqIeCQMsWHe%2BUx2vZtNfD%2B6yznnQ%2ByLyxNXMSGLAbiq3yeSNvaqf9ujk1TyMh9IUTPqJiSK6eIi9L6Xy2xb29W2sJ3TtI2y0nF3Wi0kHsv29G5LBms9%2Bs8OmO2y0PTAjZs2r5k4HDAyeytxzxGmuerSxkpaTHmGE8bHD4uPTLZpy2Yd0Gpl%2F8ygY48%2BUhwvFkoLTsXsIQ65onWIN6yy9vJkFIRqLHhNoTQAVtXJ9VKmjuMZ3EBO9j%2FFThbV4v91LNXVc%2BMfdmN461dzTU%2FjU00Kqviq2LFzFvEQWTOvI%2FJLIt2xlg9ML7BlcMGOqUBWm9mAvZXzJeDgCn3t8ZzhwgXSFT0tDCA2Hf5jnVEwEE0VYR5bAz5%2BX22q3MLO41x1JrQorRFEZ7fnRQqCEJJVehe9XF3CkuVlgC7%2BVvyhJPgDXH7Bh52JQ88j7evIz6UMlSjI81M6ZhbFDhWDQTao5wAv%2BVdO7XZEd9qXBzuUiJRCYSVLhsG0Ek8OqCxpy%2BHtvgt2LFIN4b%2FK7jFhDHzwlEEQ0Xj&X-Amz-Signature=63c1872d58b0c47e1a750e69a4c064beb6605f1b8c9cfa422821e9d9243a50ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVH6TFE4%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKTGTg1iLXXERXjbPryoGQVzM%2FHCdfVTp%2BjL92kDQ%2BQIgLWMp0WcPNZTw3nVEhDrBbG9y7aFFTch67CJPHi8EY4EqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNU%2F1o0n9Jb6vEuayrcA%2FbgEdtPx8Glu%2BjqVTMk03hlRFXIvTzqtc1OEqeiBnCguoov%2FAZPPpbRdD84U%2FxF5t4dXp9yUKszFd%2FpZrx665nCHEqQIKMtiFGEexqEsq6yOuugPXGnGBsETYm2Qe3F9LLOT7K%2Btx2TMG5QARkxAfuoWus6PrEz6UkCA2%2FYSv8ZHiq7m2QDJFasMakMiasiN7EWoKJKSfM9klBNYDL39l%2FhGFcaoQ8ErnaQTSeN9Q4AuXd0F5Ov4Qn%2B%2FCxm1FXo4YstQu6SK91L9iRU%2F8elqHKnzu%2B3mMAO9Pvj2hHKVFFQXQOVoSjL58KAB54q6GjwUmH%2FhocDLEVqIeCQMsWHe%2BUx2vZtNfD%2B6yznnQ%2ByLyxNXMSGLAbiq3yeSNvaqf9ujk1TyMh9IUTPqJiSK6eIi9L6Xy2xb29W2sJ3TtI2y0nF3Wi0kHsv29G5LBms9%2Bs8OmO2y0PTAjZs2r5k4HDAyeytxzxGmuerSxkpaTHmGE8bHD4uPTLZpy2Yd0Gpl%2F8ygY48%2BUhwvFkoLTsXsIQ65onWIN6yy9vJkFIRqLHhNoTQAVtXJ9VKmjuMZ3EBO9j%2FFThbV4v91LNXVc%2BMfdmN461dzTU%2FjU00Kqviq2LFzFvEQWTOvI%2FJLIt2xlg9ML7BlcMGOqUBWm9mAvZXzJeDgCn3t8ZzhwgXSFT0tDCA2Hf5jnVEwEE0VYR5bAz5%2BX22q3MLO41x1JrQorRFEZ7fnRQqCEJJVehe9XF3CkuVlgC7%2BVvyhJPgDXH7Bh52JQ88j7evIz6UMlSjI81M6ZhbFDhWDQTao5wAv%2BVdO7XZEd9qXBzuUiJRCYSVLhsG0Ek8OqCxpy%2BHtvgt2LFIN4b%2FK7jFhDHzwlEEQ0Xj&X-Amz-Signature=ee4bd87e6c103f8be84310d0f3ae8b99a57798ef28087f0de012f6701c896723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
