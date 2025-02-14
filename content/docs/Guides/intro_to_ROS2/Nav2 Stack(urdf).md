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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWRBZU6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjTXrPvEF%2FrhWRkjiII3im5E1mjLQoxFq5d%2FXiQxgJzwIgXqefl8dhLAUWh6Duz0ezQGnOET63LVrQ2qjdg4LTR1wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOCl9Kk6MohKq8SJAircAzXmFRBqHBMERhwQ7%2BPCW23W7vGM%2FNi%2FoCFyU1MWsQgBiDtu1ji5yhppM%2Fvx1M6KGYSzz6MF4R%2Be7420UbZngQM9SaFPDCYgGdxpNejzqoZSCEFLJKdMi3M05mOYLj7xDrlGjIk6YUJSsh5le7rjIfYc%2FljZG7PCG1sy%2Fd1%2FFHOSkt2O7sRLH%2B7j3vmha%2BJmreo1TRgq5fsc6BIZhpJnbaKTwsNsjLixMxU4USWxyysh4qlQgOzT5ZfR8sMWfTi2fQRFQGuCmIe%2B6KtD9XIuJ4NaeiV7IPuyG6oFIfapBFhIV%2FVOoecyem5qCy9PWEPbvAOlX9azd%2BkRYpnSbroTkTgjY2%2F5p4r6w5eimUXSHS85uA7xhvr%2FpFLqnAYZyCxRUbWNLXjyrJW4RjI%2B9HdC5dR8QI%2FMeox43Xo%2F%2F2aTnyFWARoezJzBXp6hheKmHjaEW6FgqNI%2BtQBHYG7yL3kpe8wZE2yiD8mAyt4agJaCs2ebLxbUz5f34gHL8z4OlCw0194awRR%2Fwviy32sBzpCjZi6JQfAQFwIsDAZaQYiWHAhT0fVtn15qyOsaSkJaEfsI%2BM1fwlYMlPIzlYkVp%2BB77gc2wS5b%2FI66KiNkOsuJxk3hZU5gJEf3uaZjC%2B%2B0MKixvL0GOqUBInCJXUEwFZWlyu8WT%2Ff8FN0r%2FYboCrvJkMXTv9mTt%2BKIrGC%2FyaJLFd79XOoAELNte1FMfS2pNxHRKEuWdSuX8Mb6Fb8wt5j4Nqwa9hgMnebnE2Gk8ZH8tzIrWMzngl%2BSQ8iRpWGf%2F7vjuOaCQbmgUUQhrGjUcHTbkMAqX4L%2BKf%2BVbHUwZ2utdSoVIBF3qeG1MMUh3t8dQHs%2BqHl14NEI3gGLAhw1&X-Amz-Signature=8ff13286edcb9b363295e4f3aa7e945211764d9ffb447ad893d4b3b4908bad3e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWRBZU6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjTXrPvEF%2FrhWRkjiII3im5E1mjLQoxFq5d%2FXiQxgJzwIgXqefl8dhLAUWh6Duz0ezQGnOET63LVrQ2qjdg4LTR1wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOCl9Kk6MohKq8SJAircAzXmFRBqHBMERhwQ7%2BPCW23W7vGM%2FNi%2FoCFyU1MWsQgBiDtu1ji5yhppM%2Fvx1M6KGYSzz6MF4R%2Be7420UbZngQM9SaFPDCYgGdxpNejzqoZSCEFLJKdMi3M05mOYLj7xDrlGjIk6YUJSsh5le7rjIfYc%2FljZG7PCG1sy%2Fd1%2FFHOSkt2O7sRLH%2B7j3vmha%2BJmreo1TRgq5fsc6BIZhpJnbaKTwsNsjLixMxU4USWxyysh4qlQgOzT5ZfR8sMWfTi2fQRFQGuCmIe%2B6KtD9XIuJ4NaeiV7IPuyG6oFIfapBFhIV%2FVOoecyem5qCy9PWEPbvAOlX9azd%2BkRYpnSbroTkTgjY2%2F5p4r6w5eimUXSHS85uA7xhvr%2FpFLqnAYZyCxRUbWNLXjyrJW4RjI%2B9HdC5dR8QI%2FMeox43Xo%2F%2F2aTnyFWARoezJzBXp6hheKmHjaEW6FgqNI%2BtQBHYG7yL3kpe8wZE2yiD8mAyt4agJaCs2ebLxbUz5f34gHL8z4OlCw0194awRR%2Fwviy32sBzpCjZi6JQfAQFwIsDAZaQYiWHAhT0fVtn15qyOsaSkJaEfsI%2BM1fwlYMlPIzlYkVp%2BB77gc2wS5b%2FI66KiNkOsuJxk3hZU5gJEf3uaZjC%2B%2B0MKixvL0GOqUBInCJXUEwFZWlyu8WT%2Ff8FN0r%2FYboCrvJkMXTv9mTt%2BKIrGC%2FyaJLFd79XOoAELNte1FMfS2pNxHRKEuWdSuX8Mb6Fb8wt5j4Nqwa9hgMnebnE2Gk8ZH8tzIrWMzngl%2BSQ8iRpWGf%2F7vjuOaCQbmgUUQhrGjUcHTbkMAqX4L%2BKf%2BVbHUwZ2utdSoVIBF3qeG1MMUh3t8dQHs%2BqHl14NEI3gGLAhw1&X-Amz-Signature=7348a399a715e8d2c5f7436c5fd762c2296e64d23f734eed984a26618bccdc80&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWRBZU6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjTXrPvEF%2FrhWRkjiII3im5E1mjLQoxFq5d%2FXiQxgJzwIgXqefl8dhLAUWh6Duz0ezQGnOET63LVrQ2qjdg4LTR1wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOCl9Kk6MohKq8SJAircAzXmFRBqHBMERhwQ7%2BPCW23W7vGM%2FNi%2FoCFyU1MWsQgBiDtu1ji5yhppM%2Fvx1M6KGYSzz6MF4R%2Be7420UbZngQM9SaFPDCYgGdxpNejzqoZSCEFLJKdMi3M05mOYLj7xDrlGjIk6YUJSsh5le7rjIfYc%2FljZG7PCG1sy%2Fd1%2FFHOSkt2O7sRLH%2B7j3vmha%2BJmreo1TRgq5fsc6BIZhpJnbaKTwsNsjLixMxU4USWxyysh4qlQgOzT5ZfR8sMWfTi2fQRFQGuCmIe%2B6KtD9XIuJ4NaeiV7IPuyG6oFIfapBFhIV%2FVOoecyem5qCy9PWEPbvAOlX9azd%2BkRYpnSbroTkTgjY2%2F5p4r6w5eimUXSHS85uA7xhvr%2FpFLqnAYZyCxRUbWNLXjyrJW4RjI%2B9HdC5dR8QI%2FMeox43Xo%2F%2F2aTnyFWARoezJzBXp6hheKmHjaEW6FgqNI%2BtQBHYG7yL3kpe8wZE2yiD8mAyt4agJaCs2ebLxbUz5f34gHL8z4OlCw0194awRR%2Fwviy32sBzpCjZi6JQfAQFwIsDAZaQYiWHAhT0fVtn15qyOsaSkJaEfsI%2BM1fwlYMlPIzlYkVp%2BB77gc2wS5b%2FI66KiNkOsuJxk3hZU5gJEf3uaZjC%2B%2B0MKixvL0GOqUBInCJXUEwFZWlyu8WT%2Ff8FN0r%2FYboCrvJkMXTv9mTt%2BKIrGC%2FyaJLFd79XOoAELNte1FMfS2pNxHRKEuWdSuX8Mb6Fb8wt5j4Nqwa9hgMnebnE2Gk8ZH8tzIrWMzngl%2BSQ8iRpWGf%2F7vjuOaCQbmgUUQhrGjUcHTbkMAqX4L%2BKf%2BVbHUwZ2utdSoVIBF3qeG1MMUh3t8dQHs%2BqHl14NEI3gGLAhw1&X-Amz-Signature=33bf24920a1e4ae7f8b05d9aa53f52511918e62c7d68fbfd60319add14cde268&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWRBZU6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjTXrPvEF%2FrhWRkjiII3im5E1mjLQoxFq5d%2FXiQxgJzwIgXqefl8dhLAUWh6Duz0ezQGnOET63LVrQ2qjdg4LTR1wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOCl9Kk6MohKq8SJAircAzXmFRBqHBMERhwQ7%2BPCW23W7vGM%2FNi%2FoCFyU1MWsQgBiDtu1ji5yhppM%2Fvx1M6KGYSzz6MF4R%2Be7420UbZngQM9SaFPDCYgGdxpNejzqoZSCEFLJKdMi3M05mOYLj7xDrlGjIk6YUJSsh5le7rjIfYc%2FljZG7PCG1sy%2Fd1%2FFHOSkt2O7sRLH%2B7j3vmha%2BJmreo1TRgq5fsc6BIZhpJnbaKTwsNsjLixMxU4USWxyysh4qlQgOzT5ZfR8sMWfTi2fQRFQGuCmIe%2B6KtD9XIuJ4NaeiV7IPuyG6oFIfapBFhIV%2FVOoecyem5qCy9PWEPbvAOlX9azd%2BkRYpnSbroTkTgjY2%2F5p4r6w5eimUXSHS85uA7xhvr%2FpFLqnAYZyCxRUbWNLXjyrJW4RjI%2B9HdC5dR8QI%2FMeox43Xo%2F%2F2aTnyFWARoezJzBXp6hheKmHjaEW6FgqNI%2BtQBHYG7yL3kpe8wZE2yiD8mAyt4agJaCs2ebLxbUz5f34gHL8z4OlCw0194awRR%2Fwviy32sBzpCjZi6JQfAQFwIsDAZaQYiWHAhT0fVtn15qyOsaSkJaEfsI%2BM1fwlYMlPIzlYkVp%2BB77gc2wS5b%2FI66KiNkOsuJxk3hZU5gJEf3uaZjC%2B%2B0MKixvL0GOqUBInCJXUEwFZWlyu8WT%2Ff8FN0r%2FYboCrvJkMXTv9mTt%2BKIrGC%2FyaJLFd79XOoAELNte1FMfS2pNxHRKEuWdSuX8Mb6Fb8wt5j4Nqwa9hgMnebnE2Gk8ZH8tzIrWMzngl%2BSQ8iRpWGf%2F7vjuOaCQbmgUUQhrGjUcHTbkMAqX4L%2BKf%2BVbHUwZ2utdSoVIBF3qeG1MMUh3t8dQHs%2BqHl14NEI3gGLAhw1&X-Amz-Signature=6f9b1227c3f4368457929105bb4c0776a1d239c829819e3bd33c45eda88a30b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWRBZU6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjTXrPvEF%2FrhWRkjiII3im5E1mjLQoxFq5d%2FXiQxgJzwIgXqefl8dhLAUWh6Duz0ezQGnOET63LVrQ2qjdg4LTR1wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOCl9Kk6MohKq8SJAircAzXmFRBqHBMERhwQ7%2BPCW23W7vGM%2FNi%2FoCFyU1MWsQgBiDtu1ji5yhppM%2Fvx1M6KGYSzz6MF4R%2Be7420UbZngQM9SaFPDCYgGdxpNejzqoZSCEFLJKdMi3M05mOYLj7xDrlGjIk6YUJSsh5le7rjIfYc%2FljZG7PCG1sy%2Fd1%2FFHOSkt2O7sRLH%2B7j3vmha%2BJmreo1TRgq5fsc6BIZhpJnbaKTwsNsjLixMxU4USWxyysh4qlQgOzT5ZfR8sMWfTi2fQRFQGuCmIe%2B6KtD9XIuJ4NaeiV7IPuyG6oFIfapBFhIV%2FVOoecyem5qCy9PWEPbvAOlX9azd%2BkRYpnSbroTkTgjY2%2F5p4r6w5eimUXSHS85uA7xhvr%2FpFLqnAYZyCxRUbWNLXjyrJW4RjI%2B9HdC5dR8QI%2FMeox43Xo%2F%2F2aTnyFWARoezJzBXp6hheKmHjaEW6FgqNI%2BtQBHYG7yL3kpe8wZE2yiD8mAyt4agJaCs2ebLxbUz5f34gHL8z4OlCw0194awRR%2Fwviy32sBzpCjZi6JQfAQFwIsDAZaQYiWHAhT0fVtn15qyOsaSkJaEfsI%2BM1fwlYMlPIzlYkVp%2BB77gc2wS5b%2FI66KiNkOsuJxk3hZU5gJEf3uaZjC%2B%2B0MKixvL0GOqUBInCJXUEwFZWlyu8WT%2Ff8FN0r%2FYboCrvJkMXTv9mTt%2BKIrGC%2FyaJLFd79XOoAELNte1FMfS2pNxHRKEuWdSuX8Mb6Fb8wt5j4Nqwa9hgMnebnE2Gk8ZH8tzIrWMzngl%2BSQ8iRpWGf%2F7vjuOaCQbmgUUQhrGjUcHTbkMAqX4L%2BKf%2BVbHUwZ2utdSoVIBF3qeG1MMUh3t8dQHs%2BqHl14NEI3gGLAhw1&X-Amz-Signature=8e3d93fa15fc18e82bee1ab9cf5b8d5cdcacd415a96680f40fd22a96893f34d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJWRBZU6%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjTXrPvEF%2FrhWRkjiII3im5E1mjLQoxFq5d%2FXiQxgJzwIgXqefl8dhLAUWh6Duz0ezQGnOET63LVrQ2qjdg4LTR1wq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOCl9Kk6MohKq8SJAircAzXmFRBqHBMERhwQ7%2BPCW23W7vGM%2FNi%2FoCFyU1MWsQgBiDtu1ji5yhppM%2Fvx1M6KGYSzz6MF4R%2Be7420UbZngQM9SaFPDCYgGdxpNejzqoZSCEFLJKdMi3M05mOYLj7xDrlGjIk6YUJSsh5le7rjIfYc%2FljZG7PCG1sy%2Fd1%2FFHOSkt2O7sRLH%2B7j3vmha%2BJmreo1TRgq5fsc6BIZhpJnbaKTwsNsjLixMxU4USWxyysh4qlQgOzT5ZfR8sMWfTi2fQRFQGuCmIe%2B6KtD9XIuJ4NaeiV7IPuyG6oFIfapBFhIV%2FVOoecyem5qCy9PWEPbvAOlX9azd%2BkRYpnSbroTkTgjY2%2F5p4r6w5eimUXSHS85uA7xhvr%2FpFLqnAYZyCxRUbWNLXjyrJW4RjI%2B9HdC5dR8QI%2FMeox43Xo%2F%2F2aTnyFWARoezJzBXp6hheKmHjaEW6FgqNI%2BtQBHYG7yL3kpe8wZE2yiD8mAyt4agJaCs2ebLxbUz5f34gHL8z4OlCw0194awRR%2Fwviy32sBzpCjZi6JQfAQFwIsDAZaQYiWHAhT0fVtn15qyOsaSkJaEfsI%2BM1fwlYMlPIzlYkVp%2BB77gc2wS5b%2FI66KiNkOsuJxk3hZU5gJEf3uaZjC%2B%2B0MKixvL0GOqUBInCJXUEwFZWlyu8WT%2Ff8FN0r%2FYboCrvJkMXTv9mTt%2BKIrGC%2FyaJLFd79XOoAELNte1FMfS2pNxHRKEuWdSuX8Mb6Fb8wt5j4Nqwa9hgMnebnE2Gk8ZH8tzIrWMzngl%2BSQ8iRpWGf%2F7vjuOaCQbmgUUQhrGjUcHTbkMAqX4L%2BKf%2BVbHUwZ2utdSoVIBF3qeG1MMUh3t8dQHs%2BqHl14NEI3gGLAhw1&X-Amz-Signature=441e4fc2467c78089d5e84ac3391799b96c9cfce54323eca4263e2fd882136b1&X-Amz-SignedHeaders=host&x-id=GetObject)
