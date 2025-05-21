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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573I2336%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC7jxLGps0%2BoUploXum1yEvFBlLLbF05JIP8L2pA0thvwIgE1U6EBRTHmEhRxskgY4HtCbderhbG9PvdVS9XNpAth8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKFS9%2F43A%2BmrZmgLyrcA0cdEhfDLS9YCFlHsA4saxIeRJnsJKz85qW24IRXjOi4zEgijUW0jB%2FvPg2m4KQMDA010MT71biC6Qc2MMUkOdfQrXT8ENQiFEtzKdTGtUzvRoSsQIQLcL3ZNZk%2Fz6PT5x%2F5yunJBX8jXrrdepdz7CcJSzdqA5WODoTlhYfGp3sl1SwZnXew49bu1ferxXT7hrAGCh%2FzrQveqzd3Nmb9sf1dptm0Fomx3JFqxauOFtxq7unkWEGDEt3p5dkx6ga2n%2BbimTJ1Lxo6h%2FuT%2FaeWoroUVSo65u%2BQDFT%2B6LDgT%2Bd%2FSWsg%2FZQUXqO2dn%2BQAFln8bWndQbsa80ACj5WoN1VRtCQKF36POXRgh6ZaiU0LshnJ7327gpC5432VzS0uJ%2BbC%2FovmCjeGcWxZnv363ys3xN2uBaNEkSKYI36aAgBQ33IRA0nI%2FzYY1e8Zx8NvaBoJVawgUdSzPjuYDkA3%2Fd1aANB5McLwsRIBkxhN%2FIbiN2g9LuxdYtKSxTqjM0CZkuIRURx3XTny0Cn9KyWfLTjgTSYlGN72iVMNDfhHuQH561zCBfciAhYZ5iPC4mz0wTu2hM1fsbn8wt5spFFTuI%2FI%2FKO4qeNdkLPUJifnrDt1guGDwxhhENuHnwTU2xjMITYuMEGOqUBe58KPPUyMx7nxqULUcNUBgUoOlctoU%2FmflGzCFhewQogtZe%2F29EZIQoYe%2F8iTVeJFDlhCCoQgKYWpojJ3f0mRRC8UgfYI5IdEOZeyi9jDlw%2BBPjSOGxlgztC7OEzvRl43TjjHJyW%2BY7EM3v7vlD0S9%2FvnbZOaMvMFmS0bzahpEjJg%2BeqBWgpGd63onRsc9dW5fws2QTJartmrRIVo2214k3yUGog&X-Amz-Signature=dd4cec7fec53b6a700ee537f6f5c0f507de771dad4112009a21d9f7285023e2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573I2336%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC7jxLGps0%2BoUploXum1yEvFBlLLbF05JIP8L2pA0thvwIgE1U6EBRTHmEhRxskgY4HtCbderhbG9PvdVS9XNpAth8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKFS9%2F43A%2BmrZmgLyrcA0cdEhfDLS9YCFlHsA4saxIeRJnsJKz85qW24IRXjOi4zEgijUW0jB%2FvPg2m4KQMDA010MT71biC6Qc2MMUkOdfQrXT8ENQiFEtzKdTGtUzvRoSsQIQLcL3ZNZk%2Fz6PT5x%2F5yunJBX8jXrrdepdz7CcJSzdqA5WODoTlhYfGp3sl1SwZnXew49bu1ferxXT7hrAGCh%2FzrQveqzd3Nmb9sf1dptm0Fomx3JFqxauOFtxq7unkWEGDEt3p5dkx6ga2n%2BbimTJ1Lxo6h%2FuT%2FaeWoroUVSo65u%2BQDFT%2B6LDgT%2Bd%2FSWsg%2FZQUXqO2dn%2BQAFln8bWndQbsa80ACj5WoN1VRtCQKF36POXRgh6ZaiU0LshnJ7327gpC5432VzS0uJ%2BbC%2FovmCjeGcWxZnv363ys3xN2uBaNEkSKYI36aAgBQ33IRA0nI%2FzYY1e8Zx8NvaBoJVawgUdSzPjuYDkA3%2Fd1aANB5McLwsRIBkxhN%2FIbiN2g9LuxdYtKSxTqjM0CZkuIRURx3XTny0Cn9KyWfLTjgTSYlGN72iVMNDfhHuQH561zCBfciAhYZ5iPC4mz0wTu2hM1fsbn8wt5spFFTuI%2FI%2FKO4qeNdkLPUJifnrDt1guGDwxhhENuHnwTU2xjMITYuMEGOqUBe58KPPUyMx7nxqULUcNUBgUoOlctoU%2FmflGzCFhewQogtZe%2F29EZIQoYe%2F8iTVeJFDlhCCoQgKYWpojJ3f0mRRC8UgfYI5IdEOZeyi9jDlw%2BBPjSOGxlgztC7OEzvRl43TjjHJyW%2BY7EM3v7vlD0S9%2FvnbZOaMvMFmS0bzahpEjJg%2BeqBWgpGd63onRsc9dW5fws2QTJartmrRIVo2214k3yUGog&X-Amz-Signature=cf97bd6a60594003d5109603b9e7e8065c76d4d74f1bcc6a0cad6d9e903c3e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573I2336%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC7jxLGps0%2BoUploXum1yEvFBlLLbF05JIP8L2pA0thvwIgE1U6EBRTHmEhRxskgY4HtCbderhbG9PvdVS9XNpAth8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKFS9%2F43A%2BmrZmgLyrcA0cdEhfDLS9YCFlHsA4saxIeRJnsJKz85qW24IRXjOi4zEgijUW0jB%2FvPg2m4KQMDA010MT71biC6Qc2MMUkOdfQrXT8ENQiFEtzKdTGtUzvRoSsQIQLcL3ZNZk%2Fz6PT5x%2F5yunJBX8jXrrdepdz7CcJSzdqA5WODoTlhYfGp3sl1SwZnXew49bu1ferxXT7hrAGCh%2FzrQveqzd3Nmb9sf1dptm0Fomx3JFqxauOFtxq7unkWEGDEt3p5dkx6ga2n%2BbimTJ1Lxo6h%2FuT%2FaeWoroUVSo65u%2BQDFT%2B6LDgT%2Bd%2FSWsg%2FZQUXqO2dn%2BQAFln8bWndQbsa80ACj5WoN1VRtCQKF36POXRgh6ZaiU0LshnJ7327gpC5432VzS0uJ%2BbC%2FovmCjeGcWxZnv363ys3xN2uBaNEkSKYI36aAgBQ33IRA0nI%2FzYY1e8Zx8NvaBoJVawgUdSzPjuYDkA3%2Fd1aANB5McLwsRIBkxhN%2FIbiN2g9LuxdYtKSxTqjM0CZkuIRURx3XTny0Cn9KyWfLTjgTSYlGN72iVMNDfhHuQH561zCBfciAhYZ5iPC4mz0wTu2hM1fsbn8wt5spFFTuI%2FI%2FKO4qeNdkLPUJifnrDt1guGDwxhhENuHnwTU2xjMITYuMEGOqUBe58KPPUyMx7nxqULUcNUBgUoOlctoU%2FmflGzCFhewQogtZe%2F29EZIQoYe%2F8iTVeJFDlhCCoQgKYWpojJ3f0mRRC8UgfYI5IdEOZeyi9jDlw%2BBPjSOGxlgztC7OEzvRl43TjjHJyW%2BY7EM3v7vlD0S9%2FvnbZOaMvMFmS0bzahpEjJg%2BeqBWgpGd63onRsc9dW5fws2QTJartmrRIVo2214k3yUGog&X-Amz-Signature=8b52ac05d091dc3cc477499acacf1411e2b94c3af38af4f62d7e0ab9df37a3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573I2336%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC7jxLGps0%2BoUploXum1yEvFBlLLbF05JIP8L2pA0thvwIgE1U6EBRTHmEhRxskgY4HtCbderhbG9PvdVS9XNpAth8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKFS9%2F43A%2BmrZmgLyrcA0cdEhfDLS9YCFlHsA4saxIeRJnsJKz85qW24IRXjOi4zEgijUW0jB%2FvPg2m4KQMDA010MT71biC6Qc2MMUkOdfQrXT8ENQiFEtzKdTGtUzvRoSsQIQLcL3ZNZk%2Fz6PT5x%2F5yunJBX8jXrrdepdz7CcJSzdqA5WODoTlhYfGp3sl1SwZnXew49bu1ferxXT7hrAGCh%2FzrQveqzd3Nmb9sf1dptm0Fomx3JFqxauOFtxq7unkWEGDEt3p5dkx6ga2n%2BbimTJ1Lxo6h%2FuT%2FaeWoroUVSo65u%2BQDFT%2B6LDgT%2Bd%2FSWsg%2FZQUXqO2dn%2BQAFln8bWndQbsa80ACj5WoN1VRtCQKF36POXRgh6ZaiU0LshnJ7327gpC5432VzS0uJ%2BbC%2FovmCjeGcWxZnv363ys3xN2uBaNEkSKYI36aAgBQ33IRA0nI%2FzYY1e8Zx8NvaBoJVawgUdSzPjuYDkA3%2Fd1aANB5McLwsRIBkxhN%2FIbiN2g9LuxdYtKSxTqjM0CZkuIRURx3XTny0Cn9KyWfLTjgTSYlGN72iVMNDfhHuQH561zCBfciAhYZ5iPC4mz0wTu2hM1fsbn8wt5spFFTuI%2FI%2FKO4qeNdkLPUJifnrDt1guGDwxhhENuHnwTU2xjMITYuMEGOqUBe58KPPUyMx7nxqULUcNUBgUoOlctoU%2FmflGzCFhewQogtZe%2F29EZIQoYe%2F8iTVeJFDlhCCoQgKYWpojJ3f0mRRC8UgfYI5IdEOZeyi9jDlw%2BBPjSOGxlgztC7OEzvRl43TjjHJyW%2BY7EM3v7vlD0S9%2FvnbZOaMvMFmS0bzahpEjJg%2BeqBWgpGd63onRsc9dW5fws2QTJartmrRIVo2214k3yUGog&X-Amz-Signature=410154ea9173fe51dff2a14db3c9fa30367a240a3da346343a4ff57905bc1c08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573I2336%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC7jxLGps0%2BoUploXum1yEvFBlLLbF05JIP8L2pA0thvwIgE1U6EBRTHmEhRxskgY4HtCbderhbG9PvdVS9XNpAth8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKFS9%2F43A%2BmrZmgLyrcA0cdEhfDLS9YCFlHsA4saxIeRJnsJKz85qW24IRXjOi4zEgijUW0jB%2FvPg2m4KQMDA010MT71biC6Qc2MMUkOdfQrXT8ENQiFEtzKdTGtUzvRoSsQIQLcL3ZNZk%2Fz6PT5x%2F5yunJBX8jXrrdepdz7CcJSzdqA5WODoTlhYfGp3sl1SwZnXew49bu1ferxXT7hrAGCh%2FzrQveqzd3Nmb9sf1dptm0Fomx3JFqxauOFtxq7unkWEGDEt3p5dkx6ga2n%2BbimTJ1Lxo6h%2FuT%2FaeWoroUVSo65u%2BQDFT%2B6LDgT%2Bd%2FSWsg%2FZQUXqO2dn%2BQAFln8bWndQbsa80ACj5WoN1VRtCQKF36POXRgh6ZaiU0LshnJ7327gpC5432VzS0uJ%2BbC%2FovmCjeGcWxZnv363ys3xN2uBaNEkSKYI36aAgBQ33IRA0nI%2FzYY1e8Zx8NvaBoJVawgUdSzPjuYDkA3%2Fd1aANB5McLwsRIBkxhN%2FIbiN2g9LuxdYtKSxTqjM0CZkuIRURx3XTny0Cn9KyWfLTjgTSYlGN72iVMNDfhHuQH561zCBfciAhYZ5iPC4mz0wTu2hM1fsbn8wt5spFFTuI%2FI%2FKO4qeNdkLPUJifnrDt1guGDwxhhENuHnwTU2xjMITYuMEGOqUBe58KPPUyMx7nxqULUcNUBgUoOlctoU%2FmflGzCFhewQogtZe%2F29EZIQoYe%2F8iTVeJFDlhCCoQgKYWpojJ3f0mRRC8UgfYI5IdEOZeyi9jDlw%2BBPjSOGxlgztC7OEzvRl43TjjHJyW%2BY7EM3v7vlD0S9%2FvnbZOaMvMFmS0bzahpEjJg%2BeqBWgpGd63onRsc9dW5fws2QTJartmrRIVo2214k3yUGog&X-Amz-Signature=d7381b80e9b03ad06eb8de16ffd41d404885f772b11b20b7891cf2731b6196e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573I2336%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC7jxLGps0%2BoUploXum1yEvFBlLLbF05JIP8L2pA0thvwIgE1U6EBRTHmEhRxskgY4HtCbderhbG9PvdVS9XNpAth8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKFS9%2F43A%2BmrZmgLyrcA0cdEhfDLS9YCFlHsA4saxIeRJnsJKz85qW24IRXjOi4zEgijUW0jB%2FvPg2m4KQMDA010MT71biC6Qc2MMUkOdfQrXT8ENQiFEtzKdTGtUzvRoSsQIQLcL3ZNZk%2Fz6PT5x%2F5yunJBX8jXrrdepdz7CcJSzdqA5WODoTlhYfGp3sl1SwZnXew49bu1ferxXT7hrAGCh%2FzrQveqzd3Nmb9sf1dptm0Fomx3JFqxauOFtxq7unkWEGDEt3p5dkx6ga2n%2BbimTJ1Lxo6h%2FuT%2FaeWoroUVSo65u%2BQDFT%2B6LDgT%2Bd%2FSWsg%2FZQUXqO2dn%2BQAFln8bWndQbsa80ACj5WoN1VRtCQKF36POXRgh6ZaiU0LshnJ7327gpC5432VzS0uJ%2BbC%2FovmCjeGcWxZnv363ys3xN2uBaNEkSKYI36aAgBQ33IRA0nI%2FzYY1e8Zx8NvaBoJVawgUdSzPjuYDkA3%2Fd1aANB5McLwsRIBkxhN%2FIbiN2g9LuxdYtKSxTqjM0CZkuIRURx3XTny0Cn9KyWfLTjgTSYlGN72iVMNDfhHuQH561zCBfciAhYZ5iPC4mz0wTu2hM1fsbn8wt5spFFTuI%2FI%2FKO4qeNdkLPUJifnrDt1guGDwxhhENuHnwTU2xjMITYuMEGOqUBe58KPPUyMx7nxqULUcNUBgUoOlctoU%2FmflGzCFhewQogtZe%2F29EZIQoYe%2F8iTVeJFDlhCCoQgKYWpojJ3f0mRRC8UgfYI5IdEOZeyi9jDlw%2BBPjSOGxlgztC7OEzvRl43TjjHJyW%2BY7EM3v7vlD0S9%2FvnbZOaMvMFmS0bzahpEjJg%2BeqBWgpGd63onRsc9dW5fws2QTJartmrRIVo2214k3yUGog&X-Amz-Signature=7b2b7fb04307fd206e7d8c9a6cf336e5196cb4d50d1c168eafec02a6850774c6&X-Amz-SignedHeaders=host&x-id=GetObject)
