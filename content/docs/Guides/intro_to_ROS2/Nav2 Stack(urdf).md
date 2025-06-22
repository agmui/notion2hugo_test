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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WQVKV6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2MLZsidL6M1tJCwVeZI2LTBYSguZxuos6yRSig5XXbAiEAn3Xo5R2hN%2F54x3qcxAGeD%2B55eMjS4SzIdCSiFEfuA0oqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyxSCOi3z53XQUgBSrcA794d%2FlIuI8SA9jNYQsI%2BLilAQoz8oi8Nux83fd78xSgKIX5w0qHQ%2Fqi3aL0CHw6i6B44EkWBxWCRqLIkiGYZZE%2BLZzch6McR%2BMb3wxbO8V2xkKT52riT2yT65JlHC0ZAltzkywsVgsfcHXHATmlRWlyZEtW6i8VlP%2FroeDzamLatXtYJVrpOlQN1vhef8XKDG8euqNeGHDpHU2CRG8DBWvdKVmOVxfGPF2BedEYaeHF%2BmvmaC%2B%2Bt095iFZzEnLLamoPq1iQbMKfAKSJ8%2BQFfgcdzHOp4DQ5HjkZ9XE1YDLLkfNUIiUC9LWRP1VY%2BnIUcr4S%2FvRnaR9gPzEPBX1vk8JdFdXih6n8rsX9%2Br%2FJGbyim7G3TZld2kbc5DQNFPJasoNK%2FWNkxuzAlpM4vg0pEwdjejIDS6C%2BReyBjatvXrKlf2%2FRp%2FDgpxKh2aVSr8Le4bWVaC%2Fo%2Bn2peNDOMDUstmATV1nxupl7VL%2F3b3BfB1vBph3PolAEteJ%2FtdO9V%2F%2FW8xI6HXJwJLcKAs4zkdpsmEU2Nd6Pkwnl6Xoq0yseDHigBa9mqANH1jL%2FyMwLUtdv9yf4VYWnluIj0xJ8LXeK6kBxZK2Mtp9%2BmC%2FEr0Uy3q6hQF2kQNjKbgUyEjOcMOKT4cIGOqUB340geYRVcrItN%2F7SiDoAoYGLbtQ240%2FckbDZTjcUkQDGdvxm5SqIJaSqgPROxftGygeGbKItC6lZv81SDdeX92BSPouXodhfu9FBp00Ikb%2FN0VoMKWYqNi1RxNsJkjq6KwIEMe%2BQkmwvnPFHk3R25X%2FeE5fh4aKUfzHrHncuza4ZqkSLOzHPfFSGzH93%2B7UbYMBOXWj7PeJYRD4I9%2BDb7xVygLfX&X-Amz-Signature=88f1ec91a0b76d3cddaf4ea3aee9d176c3375e57b3b6d53752e4f37ad5cbae56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WQVKV6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2MLZsidL6M1tJCwVeZI2LTBYSguZxuos6yRSig5XXbAiEAn3Xo5R2hN%2F54x3qcxAGeD%2B55eMjS4SzIdCSiFEfuA0oqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyxSCOi3z53XQUgBSrcA794d%2FlIuI8SA9jNYQsI%2BLilAQoz8oi8Nux83fd78xSgKIX5w0qHQ%2Fqi3aL0CHw6i6B44EkWBxWCRqLIkiGYZZE%2BLZzch6McR%2BMb3wxbO8V2xkKT52riT2yT65JlHC0ZAltzkywsVgsfcHXHATmlRWlyZEtW6i8VlP%2FroeDzamLatXtYJVrpOlQN1vhef8XKDG8euqNeGHDpHU2CRG8DBWvdKVmOVxfGPF2BedEYaeHF%2BmvmaC%2B%2Bt095iFZzEnLLamoPq1iQbMKfAKSJ8%2BQFfgcdzHOp4DQ5HjkZ9XE1YDLLkfNUIiUC9LWRP1VY%2BnIUcr4S%2FvRnaR9gPzEPBX1vk8JdFdXih6n8rsX9%2Br%2FJGbyim7G3TZld2kbc5DQNFPJasoNK%2FWNkxuzAlpM4vg0pEwdjejIDS6C%2BReyBjatvXrKlf2%2FRp%2FDgpxKh2aVSr8Le4bWVaC%2Fo%2Bn2peNDOMDUstmATV1nxupl7VL%2F3b3BfB1vBph3PolAEteJ%2FtdO9V%2F%2FW8xI6HXJwJLcKAs4zkdpsmEU2Nd6Pkwnl6Xoq0yseDHigBa9mqANH1jL%2FyMwLUtdv9yf4VYWnluIj0xJ8LXeK6kBxZK2Mtp9%2BmC%2FEr0Uy3q6hQF2kQNjKbgUyEjOcMOKT4cIGOqUB340geYRVcrItN%2F7SiDoAoYGLbtQ240%2FckbDZTjcUkQDGdvxm5SqIJaSqgPROxftGygeGbKItC6lZv81SDdeX92BSPouXodhfu9FBp00Ikb%2FN0VoMKWYqNi1RxNsJkjq6KwIEMe%2BQkmwvnPFHk3R25X%2FeE5fh4aKUfzHrHncuza4ZqkSLOzHPfFSGzH93%2B7UbYMBOXWj7PeJYRD4I9%2BDb7xVygLfX&X-Amz-Signature=4a0489c9773cf3a19f2bc49d096e730db603e4fb64340deaf15479d27779cc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WQVKV6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2MLZsidL6M1tJCwVeZI2LTBYSguZxuos6yRSig5XXbAiEAn3Xo5R2hN%2F54x3qcxAGeD%2B55eMjS4SzIdCSiFEfuA0oqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyxSCOi3z53XQUgBSrcA794d%2FlIuI8SA9jNYQsI%2BLilAQoz8oi8Nux83fd78xSgKIX5w0qHQ%2Fqi3aL0CHw6i6B44EkWBxWCRqLIkiGYZZE%2BLZzch6McR%2BMb3wxbO8V2xkKT52riT2yT65JlHC0ZAltzkywsVgsfcHXHATmlRWlyZEtW6i8VlP%2FroeDzamLatXtYJVrpOlQN1vhef8XKDG8euqNeGHDpHU2CRG8DBWvdKVmOVxfGPF2BedEYaeHF%2BmvmaC%2B%2Bt095iFZzEnLLamoPq1iQbMKfAKSJ8%2BQFfgcdzHOp4DQ5HjkZ9XE1YDLLkfNUIiUC9LWRP1VY%2BnIUcr4S%2FvRnaR9gPzEPBX1vk8JdFdXih6n8rsX9%2Br%2FJGbyim7G3TZld2kbc5DQNFPJasoNK%2FWNkxuzAlpM4vg0pEwdjejIDS6C%2BReyBjatvXrKlf2%2FRp%2FDgpxKh2aVSr8Le4bWVaC%2Fo%2Bn2peNDOMDUstmATV1nxupl7VL%2F3b3BfB1vBph3PolAEteJ%2FtdO9V%2F%2FW8xI6HXJwJLcKAs4zkdpsmEU2Nd6Pkwnl6Xoq0yseDHigBa9mqANH1jL%2FyMwLUtdv9yf4VYWnluIj0xJ8LXeK6kBxZK2Mtp9%2BmC%2FEr0Uy3q6hQF2kQNjKbgUyEjOcMOKT4cIGOqUB340geYRVcrItN%2F7SiDoAoYGLbtQ240%2FckbDZTjcUkQDGdvxm5SqIJaSqgPROxftGygeGbKItC6lZv81SDdeX92BSPouXodhfu9FBp00Ikb%2FN0VoMKWYqNi1RxNsJkjq6KwIEMe%2BQkmwvnPFHk3R25X%2FeE5fh4aKUfzHrHncuza4ZqkSLOzHPfFSGzH93%2B7UbYMBOXWj7PeJYRD4I9%2BDb7xVygLfX&X-Amz-Signature=d2e6198afb60c739550981a300ab02a2a4812303140ba8ff86904929218a77fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WQVKV6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2MLZsidL6M1tJCwVeZI2LTBYSguZxuos6yRSig5XXbAiEAn3Xo5R2hN%2F54x3qcxAGeD%2B55eMjS4SzIdCSiFEfuA0oqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyxSCOi3z53XQUgBSrcA794d%2FlIuI8SA9jNYQsI%2BLilAQoz8oi8Nux83fd78xSgKIX5w0qHQ%2Fqi3aL0CHw6i6B44EkWBxWCRqLIkiGYZZE%2BLZzch6McR%2BMb3wxbO8V2xkKT52riT2yT65JlHC0ZAltzkywsVgsfcHXHATmlRWlyZEtW6i8VlP%2FroeDzamLatXtYJVrpOlQN1vhef8XKDG8euqNeGHDpHU2CRG8DBWvdKVmOVxfGPF2BedEYaeHF%2BmvmaC%2B%2Bt095iFZzEnLLamoPq1iQbMKfAKSJ8%2BQFfgcdzHOp4DQ5HjkZ9XE1YDLLkfNUIiUC9LWRP1VY%2BnIUcr4S%2FvRnaR9gPzEPBX1vk8JdFdXih6n8rsX9%2Br%2FJGbyim7G3TZld2kbc5DQNFPJasoNK%2FWNkxuzAlpM4vg0pEwdjejIDS6C%2BReyBjatvXrKlf2%2FRp%2FDgpxKh2aVSr8Le4bWVaC%2Fo%2Bn2peNDOMDUstmATV1nxupl7VL%2F3b3BfB1vBph3PolAEteJ%2FtdO9V%2F%2FW8xI6HXJwJLcKAs4zkdpsmEU2Nd6Pkwnl6Xoq0yseDHigBa9mqANH1jL%2FyMwLUtdv9yf4VYWnluIj0xJ8LXeK6kBxZK2Mtp9%2BmC%2FEr0Uy3q6hQF2kQNjKbgUyEjOcMOKT4cIGOqUB340geYRVcrItN%2F7SiDoAoYGLbtQ240%2FckbDZTjcUkQDGdvxm5SqIJaSqgPROxftGygeGbKItC6lZv81SDdeX92BSPouXodhfu9FBp00Ikb%2FN0VoMKWYqNi1RxNsJkjq6KwIEMe%2BQkmwvnPFHk3R25X%2FeE5fh4aKUfzHrHncuza4ZqkSLOzHPfFSGzH93%2B7UbYMBOXWj7PeJYRD4I9%2BDb7xVygLfX&X-Amz-Signature=01462a0a330cfbbca57f124ae25d6cdc5ed0557346f44fcc3ca12ffcb06f4753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WQVKV6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2MLZsidL6M1tJCwVeZI2LTBYSguZxuos6yRSig5XXbAiEAn3Xo5R2hN%2F54x3qcxAGeD%2B55eMjS4SzIdCSiFEfuA0oqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyxSCOi3z53XQUgBSrcA794d%2FlIuI8SA9jNYQsI%2BLilAQoz8oi8Nux83fd78xSgKIX5w0qHQ%2Fqi3aL0CHw6i6B44EkWBxWCRqLIkiGYZZE%2BLZzch6McR%2BMb3wxbO8V2xkKT52riT2yT65JlHC0ZAltzkywsVgsfcHXHATmlRWlyZEtW6i8VlP%2FroeDzamLatXtYJVrpOlQN1vhef8XKDG8euqNeGHDpHU2CRG8DBWvdKVmOVxfGPF2BedEYaeHF%2BmvmaC%2B%2Bt095iFZzEnLLamoPq1iQbMKfAKSJ8%2BQFfgcdzHOp4DQ5HjkZ9XE1YDLLkfNUIiUC9LWRP1VY%2BnIUcr4S%2FvRnaR9gPzEPBX1vk8JdFdXih6n8rsX9%2Br%2FJGbyim7G3TZld2kbc5DQNFPJasoNK%2FWNkxuzAlpM4vg0pEwdjejIDS6C%2BReyBjatvXrKlf2%2FRp%2FDgpxKh2aVSr8Le4bWVaC%2Fo%2Bn2peNDOMDUstmATV1nxupl7VL%2F3b3BfB1vBph3PolAEteJ%2FtdO9V%2F%2FW8xI6HXJwJLcKAs4zkdpsmEU2Nd6Pkwnl6Xoq0yseDHigBa9mqANH1jL%2FyMwLUtdv9yf4VYWnluIj0xJ8LXeK6kBxZK2Mtp9%2BmC%2FEr0Uy3q6hQF2kQNjKbgUyEjOcMOKT4cIGOqUB340geYRVcrItN%2F7SiDoAoYGLbtQ240%2FckbDZTjcUkQDGdvxm5SqIJaSqgPROxftGygeGbKItC6lZv81SDdeX92BSPouXodhfu9FBp00Ikb%2FN0VoMKWYqNi1RxNsJkjq6KwIEMe%2BQkmwvnPFHk3R25X%2FeE5fh4aKUfzHrHncuza4ZqkSLOzHPfFSGzH93%2B7UbYMBOXWj7PeJYRD4I9%2BDb7xVygLfX&X-Amz-Signature=41a7defa3f9e1cb2a889c68b2de7d52db31d9d770578be05ec7694a78d38e7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4WQVKV6%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIF2MLZsidL6M1tJCwVeZI2LTBYSguZxuos6yRSig5XXbAiEAn3Xo5R2hN%2F54x3qcxAGeD%2B55eMjS4SzIdCSiFEfuA0oqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyxSCOi3z53XQUgBSrcA794d%2FlIuI8SA9jNYQsI%2BLilAQoz8oi8Nux83fd78xSgKIX5w0qHQ%2Fqi3aL0CHw6i6B44EkWBxWCRqLIkiGYZZE%2BLZzch6McR%2BMb3wxbO8V2xkKT52riT2yT65JlHC0ZAltzkywsVgsfcHXHATmlRWlyZEtW6i8VlP%2FroeDzamLatXtYJVrpOlQN1vhef8XKDG8euqNeGHDpHU2CRG8DBWvdKVmOVxfGPF2BedEYaeHF%2BmvmaC%2B%2Bt095iFZzEnLLamoPq1iQbMKfAKSJ8%2BQFfgcdzHOp4DQ5HjkZ9XE1YDLLkfNUIiUC9LWRP1VY%2BnIUcr4S%2FvRnaR9gPzEPBX1vk8JdFdXih6n8rsX9%2Br%2FJGbyim7G3TZld2kbc5DQNFPJasoNK%2FWNkxuzAlpM4vg0pEwdjejIDS6C%2BReyBjatvXrKlf2%2FRp%2FDgpxKh2aVSr8Le4bWVaC%2Fo%2Bn2peNDOMDUstmATV1nxupl7VL%2F3b3BfB1vBph3PolAEteJ%2FtdO9V%2F%2FW8xI6HXJwJLcKAs4zkdpsmEU2Nd6Pkwnl6Xoq0yseDHigBa9mqANH1jL%2FyMwLUtdv9yf4VYWnluIj0xJ8LXeK6kBxZK2Mtp9%2BmC%2FEr0Uy3q6hQF2kQNjKbgUyEjOcMOKT4cIGOqUB340geYRVcrItN%2F7SiDoAoYGLbtQ240%2FckbDZTjcUkQDGdvxm5SqIJaSqgPROxftGygeGbKItC6lZv81SDdeX92BSPouXodhfu9FBp00Ikb%2FN0VoMKWYqNi1RxNsJkjq6KwIEMe%2BQkmwvnPFHk3R25X%2FeE5fh4aKUfzHrHncuza4ZqkSLOzHPfFSGzH93%2B7UbYMBOXWj7PeJYRD4I9%2BDb7xVygLfX&X-Amz-Signature=7dc27352f484080483aae33e8638fab6099275c94046dddfac4f6b9aea48b08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
