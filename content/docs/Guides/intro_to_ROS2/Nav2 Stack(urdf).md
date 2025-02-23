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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ONKQBZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECsHPhQVTmTBfm1MDDTvp7GKLheOfOALsl%2FkoKE92uOAiEAqHUWF4E5OnNRjpA5AImRYdjs9vYG8gCboXu1yFlpmksq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIco%2FePKMj7KbjttDyrcA46qrLSWzR43ljf5sPqS33W10hC8bJi%2FPvvTdy8hZv3h697fI7RIJbCgL5FzK1pvbGfEar82Bml4QhCN55rd%2FtZnE6v9wVpwGamYFJdaoR0RsJkcruK9IfiNSAKG%2FEhlq0Sy2qw7N5YhiQUOxFjli3vmKbZdTHmPum1ZX3vdWG%2BwiL9X2NQdJ8t2DO3tG1oIJBVUoOqKkdKrCLlV1Gyat65qrdUXtQrnlLgfeVs4nvZsOZ7iZGLNTld%2FCCDUZME7ia3aCd4gsX8GVrpUAG%2BwazmGcOjyK2gHjEn5HUOpY3BJT3YlYsv%2FDnWxLEnIsSSWeecRsV6HUCsyxoOKIfMEMKLCMBh5ApWeuA1N6nbdDDw99LBUmwsCpchVUenrXCml%2FvXGccYJDom%2BJ5l9tK9uBr%2FLlxLtgeBqN6QtgPwkukYpxbVqbsHn%2BcoOeZ0Saj5fMy8ppMAxKTuRcyJNDv0KUpqIGWqL7Yeb9FgVeufWS0R88RdzNs3m70VpYpBhF72BDk64svxBLaRZZ72xpjZ3KENwoJyRs4B5X1IPIU6iR%2FCyXtW1NugPNhMhrx8FMw7uClhZFlKSL%2Brvcvuxw%2FNO8tJbJYgTEfEVAAqUlD5oXk8H0hsELn%2BPBDg9qp1%2FMKyn670GOqUBNKDnLiMM2Rhh2rtOIYYGXtGO3O9TG5ikUT7b6ng5mrc%2BHlZknX2XciX6NxfZNJtNR1tNYZPs5C6zk79eBffdPdpuXVF26ommRfBZXEkDFgGfpOeAvTC3TH9rX2dIoCjk569bGgAp3RENCWjspKSWnzAnzfWjzId0Zjjj2O9%2BIt667yFR9GFm%2BA%2FUgGEOBCFJPl4qwLV9PS8O%2FK0YLAjFoWFXjgBb&X-Amz-Signature=f033df7af1ee2ac3e944747d8c1b83a1af2c044e1226bf262850a6ac8f6600b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ONKQBZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECsHPhQVTmTBfm1MDDTvp7GKLheOfOALsl%2FkoKE92uOAiEAqHUWF4E5OnNRjpA5AImRYdjs9vYG8gCboXu1yFlpmksq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIco%2FePKMj7KbjttDyrcA46qrLSWzR43ljf5sPqS33W10hC8bJi%2FPvvTdy8hZv3h697fI7RIJbCgL5FzK1pvbGfEar82Bml4QhCN55rd%2FtZnE6v9wVpwGamYFJdaoR0RsJkcruK9IfiNSAKG%2FEhlq0Sy2qw7N5YhiQUOxFjli3vmKbZdTHmPum1ZX3vdWG%2BwiL9X2NQdJ8t2DO3tG1oIJBVUoOqKkdKrCLlV1Gyat65qrdUXtQrnlLgfeVs4nvZsOZ7iZGLNTld%2FCCDUZME7ia3aCd4gsX8GVrpUAG%2BwazmGcOjyK2gHjEn5HUOpY3BJT3YlYsv%2FDnWxLEnIsSSWeecRsV6HUCsyxoOKIfMEMKLCMBh5ApWeuA1N6nbdDDw99LBUmwsCpchVUenrXCml%2FvXGccYJDom%2BJ5l9tK9uBr%2FLlxLtgeBqN6QtgPwkukYpxbVqbsHn%2BcoOeZ0Saj5fMy8ppMAxKTuRcyJNDv0KUpqIGWqL7Yeb9FgVeufWS0R88RdzNs3m70VpYpBhF72BDk64svxBLaRZZ72xpjZ3KENwoJyRs4B5X1IPIU6iR%2FCyXtW1NugPNhMhrx8FMw7uClhZFlKSL%2Brvcvuxw%2FNO8tJbJYgTEfEVAAqUlD5oXk8H0hsELn%2BPBDg9qp1%2FMKyn670GOqUBNKDnLiMM2Rhh2rtOIYYGXtGO3O9TG5ikUT7b6ng5mrc%2BHlZknX2XciX6NxfZNJtNR1tNYZPs5C6zk79eBffdPdpuXVF26ommRfBZXEkDFgGfpOeAvTC3TH9rX2dIoCjk569bGgAp3RENCWjspKSWnzAnzfWjzId0Zjjj2O9%2BIt667yFR9GFm%2BA%2FUgGEOBCFJPl4qwLV9PS8O%2FK0YLAjFoWFXjgBb&X-Amz-Signature=93c7f652089a05c0ccbbd03e5b5bd441dadec51eea7cc75bf7fad73683ace44e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ONKQBZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECsHPhQVTmTBfm1MDDTvp7GKLheOfOALsl%2FkoKE92uOAiEAqHUWF4E5OnNRjpA5AImRYdjs9vYG8gCboXu1yFlpmksq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIco%2FePKMj7KbjttDyrcA46qrLSWzR43ljf5sPqS33W10hC8bJi%2FPvvTdy8hZv3h697fI7RIJbCgL5FzK1pvbGfEar82Bml4QhCN55rd%2FtZnE6v9wVpwGamYFJdaoR0RsJkcruK9IfiNSAKG%2FEhlq0Sy2qw7N5YhiQUOxFjli3vmKbZdTHmPum1ZX3vdWG%2BwiL9X2NQdJ8t2DO3tG1oIJBVUoOqKkdKrCLlV1Gyat65qrdUXtQrnlLgfeVs4nvZsOZ7iZGLNTld%2FCCDUZME7ia3aCd4gsX8GVrpUAG%2BwazmGcOjyK2gHjEn5HUOpY3BJT3YlYsv%2FDnWxLEnIsSSWeecRsV6HUCsyxoOKIfMEMKLCMBh5ApWeuA1N6nbdDDw99LBUmwsCpchVUenrXCml%2FvXGccYJDom%2BJ5l9tK9uBr%2FLlxLtgeBqN6QtgPwkukYpxbVqbsHn%2BcoOeZ0Saj5fMy8ppMAxKTuRcyJNDv0KUpqIGWqL7Yeb9FgVeufWS0R88RdzNs3m70VpYpBhF72BDk64svxBLaRZZ72xpjZ3KENwoJyRs4B5X1IPIU6iR%2FCyXtW1NugPNhMhrx8FMw7uClhZFlKSL%2Brvcvuxw%2FNO8tJbJYgTEfEVAAqUlD5oXk8H0hsELn%2BPBDg9qp1%2FMKyn670GOqUBNKDnLiMM2Rhh2rtOIYYGXtGO3O9TG5ikUT7b6ng5mrc%2BHlZknX2XciX6NxfZNJtNR1tNYZPs5C6zk79eBffdPdpuXVF26ommRfBZXEkDFgGfpOeAvTC3TH9rX2dIoCjk569bGgAp3RENCWjspKSWnzAnzfWjzId0Zjjj2O9%2BIt667yFR9GFm%2BA%2FUgGEOBCFJPl4qwLV9PS8O%2FK0YLAjFoWFXjgBb&X-Amz-Signature=26471c6cbfe4c3bc7b9ef4c54ab04cec2028e3b8b1803b75fd6ca47503e3ce12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ONKQBZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECsHPhQVTmTBfm1MDDTvp7GKLheOfOALsl%2FkoKE92uOAiEAqHUWF4E5OnNRjpA5AImRYdjs9vYG8gCboXu1yFlpmksq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIco%2FePKMj7KbjttDyrcA46qrLSWzR43ljf5sPqS33W10hC8bJi%2FPvvTdy8hZv3h697fI7RIJbCgL5FzK1pvbGfEar82Bml4QhCN55rd%2FtZnE6v9wVpwGamYFJdaoR0RsJkcruK9IfiNSAKG%2FEhlq0Sy2qw7N5YhiQUOxFjli3vmKbZdTHmPum1ZX3vdWG%2BwiL9X2NQdJ8t2DO3tG1oIJBVUoOqKkdKrCLlV1Gyat65qrdUXtQrnlLgfeVs4nvZsOZ7iZGLNTld%2FCCDUZME7ia3aCd4gsX8GVrpUAG%2BwazmGcOjyK2gHjEn5HUOpY3BJT3YlYsv%2FDnWxLEnIsSSWeecRsV6HUCsyxoOKIfMEMKLCMBh5ApWeuA1N6nbdDDw99LBUmwsCpchVUenrXCml%2FvXGccYJDom%2BJ5l9tK9uBr%2FLlxLtgeBqN6QtgPwkukYpxbVqbsHn%2BcoOeZ0Saj5fMy8ppMAxKTuRcyJNDv0KUpqIGWqL7Yeb9FgVeufWS0R88RdzNs3m70VpYpBhF72BDk64svxBLaRZZ72xpjZ3KENwoJyRs4B5X1IPIU6iR%2FCyXtW1NugPNhMhrx8FMw7uClhZFlKSL%2Brvcvuxw%2FNO8tJbJYgTEfEVAAqUlD5oXk8H0hsELn%2BPBDg9qp1%2FMKyn670GOqUBNKDnLiMM2Rhh2rtOIYYGXtGO3O9TG5ikUT7b6ng5mrc%2BHlZknX2XciX6NxfZNJtNR1tNYZPs5C6zk79eBffdPdpuXVF26ommRfBZXEkDFgGfpOeAvTC3TH9rX2dIoCjk569bGgAp3RENCWjspKSWnzAnzfWjzId0Zjjj2O9%2BIt667yFR9GFm%2BA%2FUgGEOBCFJPl4qwLV9PS8O%2FK0YLAjFoWFXjgBb&X-Amz-Signature=c9fe50e2f4dd64a54642f89d5cdab67699e67c637d37f6c9743ab890813f445d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ONKQBZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECsHPhQVTmTBfm1MDDTvp7GKLheOfOALsl%2FkoKE92uOAiEAqHUWF4E5OnNRjpA5AImRYdjs9vYG8gCboXu1yFlpmksq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIco%2FePKMj7KbjttDyrcA46qrLSWzR43ljf5sPqS33W10hC8bJi%2FPvvTdy8hZv3h697fI7RIJbCgL5FzK1pvbGfEar82Bml4QhCN55rd%2FtZnE6v9wVpwGamYFJdaoR0RsJkcruK9IfiNSAKG%2FEhlq0Sy2qw7N5YhiQUOxFjli3vmKbZdTHmPum1ZX3vdWG%2BwiL9X2NQdJ8t2DO3tG1oIJBVUoOqKkdKrCLlV1Gyat65qrdUXtQrnlLgfeVs4nvZsOZ7iZGLNTld%2FCCDUZME7ia3aCd4gsX8GVrpUAG%2BwazmGcOjyK2gHjEn5HUOpY3BJT3YlYsv%2FDnWxLEnIsSSWeecRsV6HUCsyxoOKIfMEMKLCMBh5ApWeuA1N6nbdDDw99LBUmwsCpchVUenrXCml%2FvXGccYJDom%2BJ5l9tK9uBr%2FLlxLtgeBqN6QtgPwkukYpxbVqbsHn%2BcoOeZ0Saj5fMy8ppMAxKTuRcyJNDv0KUpqIGWqL7Yeb9FgVeufWS0R88RdzNs3m70VpYpBhF72BDk64svxBLaRZZ72xpjZ3KENwoJyRs4B5X1IPIU6iR%2FCyXtW1NugPNhMhrx8FMw7uClhZFlKSL%2Brvcvuxw%2FNO8tJbJYgTEfEVAAqUlD5oXk8H0hsELn%2BPBDg9qp1%2FMKyn670GOqUBNKDnLiMM2Rhh2rtOIYYGXtGO3O9TG5ikUT7b6ng5mrc%2BHlZknX2XciX6NxfZNJtNR1tNYZPs5C6zk79eBffdPdpuXVF26ommRfBZXEkDFgGfpOeAvTC3TH9rX2dIoCjk569bGgAp3RENCWjspKSWnzAnzfWjzId0Zjjj2O9%2BIt667yFR9GFm%2BA%2FUgGEOBCFJPl4qwLV9PS8O%2FK0YLAjFoWFXjgBb&X-Amz-Signature=f5ff93b242518de44a572b0f1aa2c7a1abbee38247f703333254ce5f74a6dbea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ONKQBZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECsHPhQVTmTBfm1MDDTvp7GKLheOfOALsl%2FkoKE92uOAiEAqHUWF4E5OnNRjpA5AImRYdjs9vYG8gCboXu1yFlpmksq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDIco%2FePKMj7KbjttDyrcA46qrLSWzR43ljf5sPqS33W10hC8bJi%2FPvvTdy8hZv3h697fI7RIJbCgL5FzK1pvbGfEar82Bml4QhCN55rd%2FtZnE6v9wVpwGamYFJdaoR0RsJkcruK9IfiNSAKG%2FEhlq0Sy2qw7N5YhiQUOxFjli3vmKbZdTHmPum1ZX3vdWG%2BwiL9X2NQdJ8t2DO3tG1oIJBVUoOqKkdKrCLlV1Gyat65qrdUXtQrnlLgfeVs4nvZsOZ7iZGLNTld%2FCCDUZME7ia3aCd4gsX8GVrpUAG%2BwazmGcOjyK2gHjEn5HUOpY3BJT3YlYsv%2FDnWxLEnIsSSWeecRsV6HUCsyxoOKIfMEMKLCMBh5ApWeuA1N6nbdDDw99LBUmwsCpchVUenrXCml%2FvXGccYJDom%2BJ5l9tK9uBr%2FLlxLtgeBqN6QtgPwkukYpxbVqbsHn%2BcoOeZ0Saj5fMy8ppMAxKTuRcyJNDv0KUpqIGWqL7Yeb9FgVeufWS0R88RdzNs3m70VpYpBhF72BDk64svxBLaRZZ72xpjZ3KENwoJyRs4B5X1IPIU6iR%2FCyXtW1NugPNhMhrx8FMw7uClhZFlKSL%2Brvcvuxw%2FNO8tJbJYgTEfEVAAqUlD5oXk8H0hsELn%2BPBDg9qp1%2FMKyn670GOqUBNKDnLiMM2Rhh2rtOIYYGXtGO3O9TG5ikUT7b6ng5mrc%2BHlZknX2XciX6NxfZNJtNR1tNYZPs5C6zk79eBffdPdpuXVF26ommRfBZXEkDFgGfpOeAvTC3TH9rX2dIoCjk569bGgAp3RENCWjspKSWnzAnzfWjzId0Zjjj2O9%2BIt667yFR9GFm%2BA%2FUgGEOBCFJPl4qwLV9PS8O%2FK0YLAjFoWFXjgBb&X-Amz-Signature=2d7d91bb9539e4db7587f8d85c4a1be982afd7ae3a18d2abd83091efda29e880&X-Amz-SignedHeaders=host&x-id=GetObject)
