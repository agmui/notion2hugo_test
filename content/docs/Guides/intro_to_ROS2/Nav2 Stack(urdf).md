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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOO6AB4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDotI6RBnS1hmkFfmEkTQCuRnrR6jLWB0i18xfuXTn69gIgYmXPcgcsUpOkmMcU0fSGRhMjN6YAyqZsvFWykya4Lvoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHCb7EgT3p0Z7CVdMCrcA0%2BvPL%2BgY96Xgy%2F1miBJckUDiNt%2BBp8KQ0Ax5XeZgu3LsgMkP4ef92beG%2BPsp5QklyxrGJmiJZeV4o4ClnwRyX2Ackcmg6X74PSmOwMrKqAR6GcOAGUX9axE9P2aszTWx%2FMffYdOXIN9cpY%2BrlthQEQGHcDyKGFTRTUrOChYJE8XovQwxtWRZXQOdJ6jJTYf0f2VnG%2Baa7KsWiqZp5zRR1kx0Hm1bJ1IaUdBWzS8opu9qnYjapVpnHVNHBishBZz1IgD2VxK62bkjuKm0mkaR%2BF1%2BjNFSr9P6DLOMOY5YwgYWKjW%2B%2F9e5dCAprTWcJKv7z6aNDMbCRRqgbTj9SbaQAVuE7HHRdWdQ1ArfFeHQ6VIAXkf1RbmR78J32X4kLdfsO5Qrbv8ufbfhJ73%2FSOsEzMGydHLHxwHWmQS3DvePaGMThAi%2Bqw%2F%2BnMjAY6HFEizm5cHe4If3waqne7vLdj2Y8EvvOjl7Q5F9rzfm0IwOPjDdXjmem%2F4IY6Zw1K9XtbRyNL3rIBUAQRvlMYiBOqMgeBwQJfyOIBCawA6duU0q2iEq6xR9TnexGtqXAD%2BIOhICYqdbC8Cb7VLs7MIuujnweMdUMZJtcLpIWywy%2BgC8%2B2TPbGcek0B6QN%2BelHeMJiL58AGOqUBSbshOxcROK8w1NK4YsLiYCqZdoGfGRzJTnaxtgCC1dYQSVCZbpgd9%2BdJN1KYfClIK9KZ8rHZkMKrjJ%2FKAYtGqU1QZ8%2BXhgpCOLSK%2FfoXLXHHJYKb3ey1i6%2Fx%2BRjPYrLhkF7miFYTx6WuRL8jQN2Dl3%2FzlsqkQHx%2FLnr%2FW4dtpXyRN5PUHgo9OFgGGiqeaUtiqG9%2B6%2F3oPze7JpBpJy%2B1%2BIGGjuCN&X-Amz-Signature=4eb618287b83d24e5e76d701abbbc65ebf128d8e50feaddc9de40aadcd65e3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOO6AB4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDotI6RBnS1hmkFfmEkTQCuRnrR6jLWB0i18xfuXTn69gIgYmXPcgcsUpOkmMcU0fSGRhMjN6YAyqZsvFWykya4Lvoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHCb7EgT3p0Z7CVdMCrcA0%2BvPL%2BgY96Xgy%2F1miBJckUDiNt%2BBp8KQ0Ax5XeZgu3LsgMkP4ef92beG%2BPsp5QklyxrGJmiJZeV4o4ClnwRyX2Ackcmg6X74PSmOwMrKqAR6GcOAGUX9axE9P2aszTWx%2FMffYdOXIN9cpY%2BrlthQEQGHcDyKGFTRTUrOChYJE8XovQwxtWRZXQOdJ6jJTYf0f2VnG%2Baa7KsWiqZp5zRR1kx0Hm1bJ1IaUdBWzS8opu9qnYjapVpnHVNHBishBZz1IgD2VxK62bkjuKm0mkaR%2BF1%2BjNFSr9P6DLOMOY5YwgYWKjW%2B%2F9e5dCAprTWcJKv7z6aNDMbCRRqgbTj9SbaQAVuE7HHRdWdQ1ArfFeHQ6VIAXkf1RbmR78J32X4kLdfsO5Qrbv8ufbfhJ73%2FSOsEzMGydHLHxwHWmQS3DvePaGMThAi%2Bqw%2F%2BnMjAY6HFEizm5cHe4If3waqne7vLdj2Y8EvvOjl7Q5F9rzfm0IwOPjDdXjmem%2F4IY6Zw1K9XtbRyNL3rIBUAQRvlMYiBOqMgeBwQJfyOIBCawA6duU0q2iEq6xR9TnexGtqXAD%2BIOhICYqdbC8Cb7VLs7MIuujnweMdUMZJtcLpIWywy%2BgC8%2B2TPbGcek0B6QN%2BelHeMJiL58AGOqUBSbshOxcROK8w1NK4YsLiYCqZdoGfGRzJTnaxtgCC1dYQSVCZbpgd9%2BdJN1KYfClIK9KZ8rHZkMKrjJ%2FKAYtGqU1QZ8%2BXhgpCOLSK%2FfoXLXHHJYKb3ey1i6%2Fx%2BRjPYrLhkF7miFYTx6WuRL8jQN2Dl3%2FzlsqkQHx%2FLnr%2FW4dtpXyRN5PUHgo9OFgGGiqeaUtiqG9%2B6%2F3oPze7JpBpJy%2B1%2BIGGjuCN&X-Amz-Signature=6efb61a2f1057655eb243c8f5c7a0bd7efa498babdafb9de7383257edcd63574&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOO6AB4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDotI6RBnS1hmkFfmEkTQCuRnrR6jLWB0i18xfuXTn69gIgYmXPcgcsUpOkmMcU0fSGRhMjN6YAyqZsvFWykya4Lvoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHCb7EgT3p0Z7CVdMCrcA0%2BvPL%2BgY96Xgy%2F1miBJckUDiNt%2BBp8KQ0Ax5XeZgu3LsgMkP4ef92beG%2BPsp5QklyxrGJmiJZeV4o4ClnwRyX2Ackcmg6X74PSmOwMrKqAR6GcOAGUX9axE9P2aszTWx%2FMffYdOXIN9cpY%2BrlthQEQGHcDyKGFTRTUrOChYJE8XovQwxtWRZXQOdJ6jJTYf0f2VnG%2Baa7KsWiqZp5zRR1kx0Hm1bJ1IaUdBWzS8opu9qnYjapVpnHVNHBishBZz1IgD2VxK62bkjuKm0mkaR%2BF1%2BjNFSr9P6DLOMOY5YwgYWKjW%2B%2F9e5dCAprTWcJKv7z6aNDMbCRRqgbTj9SbaQAVuE7HHRdWdQ1ArfFeHQ6VIAXkf1RbmR78J32X4kLdfsO5Qrbv8ufbfhJ73%2FSOsEzMGydHLHxwHWmQS3DvePaGMThAi%2Bqw%2F%2BnMjAY6HFEizm5cHe4If3waqne7vLdj2Y8EvvOjl7Q5F9rzfm0IwOPjDdXjmem%2F4IY6Zw1K9XtbRyNL3rIBUAQRvlMYiBOqMgeBwQJfyOIBCawA6duU0q2iEq6xR9TnexGtqXAD%2BIOhICYqdbC8Cb7VLs7MIuujnweMdUMZJtcLpIWywy%2BgC8%2B2TPbGcek0B6QN%2BelHeMJiL58AGOqUBSbshOxcROK8w1NK4YsLiYCqZdoGfGRzJTnaxtgCC1dYQSVCZbpgd9%2BdJN1KYfClIK9KZ8rHZkMKrjJ%2FKAYtGqU1QZ8%2BXhgpCOLSK%2FfoXLXHHJYKb3ey1i6%2Fx%2BRjPYrLhkF7miFYTx6WuRL8jQN2Dl3%2FzlsqkQHx%2FLnr%2FW4dtpXyRN5PUHgo9OFgGGiqeaUtiqG9%2B6%2F3oPze7JpBpJy%2B1%2BIGGjuCN&X-Amz-Signature=f5151298ae9fc08ee8a4ed17c34d98792388a792b52e3bec82ba7c4c0f952b83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOO6AB4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDotI6RBnS1hmkFfmEkTQCuRnrR6jLWB0i18xfuXTn69gIgYmXPcgcsUpOkmMcU0fSGRhMjN6YAyqZsvFWykya4Lvoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHCb7EgT3p0Z7CVdMCrcA0%2BvPL%2BgY96Xgy%2F1miBJckUDiNt%2BBp8KQ0Ax5XeZgu3LsgMkP4ef92beG%2BPsp5QklyxrGJmiJZeV4o4ClnwRyX2Ackcmg6X74PSmOwMrKqAR6GcOAGUX9axE9P2aszTWx%2FMffYdOXIN9cpY%2BrlthQEQGHcDyKGFTRTUrOChYJE8XovQwxtWRZXQOdJ6jJTYf0f2VnG%2Baa7KsWiqZp5zRR1kx0Hm1bJ1IaUdBWzS8opu9qnYjapVpnHVNHBishBZz1IgD2VxK62bkjuKm0mkaR%2BF1%2BjNFSr9P6DLOMOY5YwgYWKjW%2B%2F9e5dCAprTWcJKv7z6aNDMbCRRqgbTj9SbaQAVuE7HHRdWdQ1ArfFeHQ6VIAXkf1RbmR78J32X4kLdfsO5Qrbv8ufbfhJ73%2FSOsEzMGydHLHxwHWmQS3DvePaGMThAi%2Bqw%2F%2BnMjAY6HFEizm5cHe4If3waqne7vLdj2Y8EvvOjl7Q5F9rzfm0IwOPjDdXjmem%2F4IY6Zw1K9XtbRyNL3rIBUAQRvlMYiBOqMgeBwQJfyOIBCawA6duU0q2iEq6xR9TnexGtqXAD%2BIOhICYqdbC8Cb7VLs7MIuujnweMdUMZJtcLpIWywy%2BgC8%2B2TPbGcek0B6QN%2BelHeMJiL58AGOqUBSbshOxcROK8w1NK4YsLiYCqZdoGfGRzJTnaxtgCC1dYQSVCZbpgd9%2BdJN1KYfClIK9KZ8rHZkMKrjJ%2FKAYtGqU1QZ8%2BXhgpCOLSK%2FfoXLXHHJYKb3ey1i6%2Fx%2BRjPYrLhkF7miFYTx6WuRL8jQN2Dl3%2FzlsqkQHx%2FLnr%2FW4dtpXyRN5PUHgo9OFgGGiqeaUtiqG9%2B6%2F3oPze7JpBpJy%2B1%2BIGGjuCN&X-Amz-Signature=c6f44e9d6530ddf50722b051f544500253f3612bf2f315efcb789c15c89555b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOO6AB4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDotI6RBnS1hmkFfmEkTQCuRnrR6jLWB0i18xfuXTn69gIgYmXPcgcsUpOkmMcU0fSGRhMjN6YAyqZsvFWykya4Lvoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHCb7EgT3p0Z7CVdMCrcA0%2BvPL%2BgY96Xgy%2F1miBJckUDiNt%2BBp8KQ0Ax5XeZgu3LsgMkP4ef92beG%2BPsp5QklyxrGJmiJZeV4o4ClnwRyX2Ackcmg6X74PSmOwMrKqAR6GcOAGUX9axE9P2aszTWx%2FMffYdOXIN9cpY%2BrlthQEQGHcDyKGFTRTUrOChYJE8XovQwxtWRZXQOdJ6jJTYf0f2VnG%2Baa7KsWiqZp5zRR1kx0Hm1bJ1IaUdBWzS8opu9qnYjapVpnHVNHBishBZz1IgD2VxK62bkjuKm0mkaR%2BF1%2BjNFSr9P6DLOMOY5YwgYWKjW%2B%2F9e5dCAprTWcJKv7z6aNDMbCRRqgbTj9SbaQAVuE7HHRdWdQ1ArfFeHQ6VIAXkf1RbmR78J32X4kLdfsO5Qrbv8ufbfhJ73%2FSOsEzMGydHLHxwHWmQS3DvePaGMThAi%2Bqw%2F%2BnMjAY6HFEizm5cHe4If3waqne7vLdj2Y8EvvOjl7Q5F9rzfm0IwOPjDdXjmem%2F4IY6Zw1K9XtbRyNL3rIBUAQRvlMYiBOqMgeBwQJfyOIBCawA6duU0q2iEq6xR9TnexGtqXAD%2BIOhICYqdbC8Cb7VLs7MIuujnweMdUMZJtcLpIWywy%2BgC8%2B2TPbGcek0B6QN%2BelHeMJiL58AGOqUBSbshOxcROK8w1NK4YsLiYCqZdoGfGRzJTnaxtgCC1dYQSVCZbpgd9%2BdJN1KYfClIK9KZ8rHZkMKrjJ%2FKAYtGqU1QZ8%2BXhgpCOLSK%2FfoXLXHHJYKb3ey1i6%2Fx%2BRjPYrLhkF7miFYTx6WuRL8jQN2Dl3%2FzlsqkQHx%2FLnr%2FW4dtpXyRN5PUHgo9OFgGGiqeaUtiqG9%2B6%2F3oPze7JpBpJy%2B1%2BIGGjuCN&X-Amz-Signature=72709657d049e20fcd98e3fb643815d4c130b9d816c20b86a00c2c13751d7d36&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOOO6AB4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDotI6RBnS1hmkFfmEkTQCuRnrR6jLWB0i18xfuXTn69gIgYmXPcgcsUpOkmMcU0fSGRhMjN6YAyqZsvFWykya4Lvoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHCb7EgT3p0Z7CVdMCrcA0%2BvPL%2BgY96Xgy%2F1miBJckUDiNt%2BBp8KQ0Ax5XeZgu3LsgMkP4ef92beG%2BPsp5QklyxrGJmiJZeV4o4ClnwRyX2Ackcmg6X74PSmOwMrKqAR6GcOAGUX9axE9P2aszTWx%2FMffYdOXIN9cpY%2BrlthQEQGHcDyKGFTRTUrOChYJE8XovQwxtWRZXQOdJ6jJTYf0f2VnG%2Baa7KsWiqZp5zRR1kx0Hm1bJ1IaUdBWzS8opu9qnYjapVpnHVNHBishBZz1IgD2VxK62bkjuKm0mkaR%2BF1%2BjNFSr9P6DLOMOY5YwgYWKjW%2B%2F9e5dCAprTWcJKv7z6aNDMbCRRqgbTj9SbaQAVuE7HHRdWdQ1ArfFeHQ6VIAXkf1RbmR78J32X4kLdfsO5Qrbv8ufbfhJ73%2FSOsEzMGydHLHxwHWmQS3DvePaGMThAi%2Bqw%2F%2BnMjAY6HFEizm5cHe4If3waqne7vLdj2Y8EvvOjl7Q5F9rzfm0IwOPjDdXjmem%2F4IY6Zw1K9XtbRyNL3rIBUAQRvlMYiBOqMgeBwQJfyOIBCawA6duU0q2iEq6xR9TnexGtqXAD%2BIOhICYqdbC8Cb7VLs7MIuujnweMdUMZJtcLpIWywy%2BgC8%2B2TPbGcek0B6QN%2BelHeMJiL58AGOqUBSbshOxcROK8w1NK4YsLiYCqZdoGfGRzJTnaxtgCC1dYQSVCZbpgd9%2BdJN1KYfClIK9KZ8rHZkMKrjJ%2FKAYtGqU1QZ8%2BXhgpCOLSK%2FfoXLXHHJYKb3ey1i6%2Fx%2BRjPYrLhkF7miFYTx6WuRL8jQN2Dl3%2FzlsqkQHx%2FLnr%2FW4dtpXyRN5PUHgo9OFgGGiqeaUtiqG9%2B6%2F3oPze7JpBpJy%2B1%2BIGGjuCN&X-Amz-Signature=9584d77e4d1b22220a7ae52e6f8009ce960215c79eb4f3ddc053e1d372bb21ed&X-Amz-SignedHeaders=host&x-id=GetObject)
