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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XA7D5AK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK7YS0uVHeK6ztbCziO%2B%2FMrXtHWpMpAlbIySbeR2h4NAiANFGYm41Z3D6S1HS3DL5nvYutPK5SmiE2iockAFWlPLyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SYYilfIaCakJBI%2BKtwDLiWnCdzfrucD69B%2FP7jctXFlm%2FRV60rZRapSdVW%2FEIDOYI7Vhp%2B4Xg5Zop7TEhDfqh8BkW2GRMOF4ZksEopaWP88D7fHQe%2BLO7jiIkgmBAWtvKiG6RqTM9Tmj8hTBBFSd7yXbMBIPgH6mEidRzKgAbzr70gJZoOhlEWsrMdz3mbAwe9eO3CMyB%2BYpnlD1W17y2hpkv%2BrbOd%2F%2BfpHociIqsNO2yI0WrqL0B1NqbJFCoXMsQuP4otDRJqxo2zoSuEnVg0hIlGE7vUoVjR8jrfxPRAIfVovVQww6QlcMzoA%2Bm5zVrLuCGMLvFEhcyhRr2Sp6vvUyAPyh3zOr7o6TWwWwM3IPNNhuf2a%2BOH3HIO73N6DGcPAPfHizD5iJYVU7aA7gV1eXZQPLU0e1C%2BxDfe%2B6SczeHBI4%2Fhm7aonwctj8s3WMipCjEYuMsHVRycHEQ3tCg3zRxz1oTN9VMRcgGwqKqpfkNw1DysenqUOp2KpEWyz7KD2ttWzQqMYaLv0%2B1ih7R8PI96yDtl4OEEYeEVzlOVbCY%2B9XYgEtqKLjtGokKYu6wdxUW11pAmazNbGC6PnL3o8rKjNf1rOVmJFPS0jltfC9hLNN%2B5iiTOoK3EzG3WvnO2QOg3WRprIeaIw0t%2FwwQY6pgEKuK5cipBtyn%2BDsMeaE6SpWx%2FxVNtbcfF1HgmijZBKGKCSI8%2FdapXqn9IGK9q8wLyCFtnEHvGdX8W9JTah1%2BnZepM%2BC7Si1wG%2Bz0Fa8iiOR0MU2YYJGDpnb%2FJtQEy9bzIB7d3uYA0pDpUvQ93LC%2Bpgaw61Gp%2F1JfIXL0Upa4kPsp9NPT03%2BBHv%2BsOWjkrjdzAhNstElKaoD%2BwXrE54lj4L8NIvMe0m&X-Amz-Signature=80c851188d62cdb3d0b1466a89ff97c35b3e7206b77f9609bbbc4d93de764c16&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XA7D5AK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK7YS0uVHeK6ztbCziO%2B%2FMrXtHWpMpAlbIySbeR2h4NAiANFGYm41Z3D6S1HS3DL5nvYutPK5SmiE2iockAFWlPLyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SYYilfIaCakJBI%2BKtwDLiWnCdzfrucD69B%2FP7jctXFlm%2FRV60rZRapSdVW%2FEIDOYI7Vhp%2B4Xg5Zop7TEhDfqh8BkW2GRMOF4ZksEopaWP88D7fHQe%2BLO7jiIkgmBAWtvKiG6RqTM9Tmj8hTBBFSd7yXbMBIPgH6mEidRzKgAbzr70gJZoOhlEWsrMdz3mbAwe9eO3CMyB%2BYpnlD1W17y2hpkv%2BrbOd%2F%2BfpHociIqsNO2yI0WrqL0B1NqbJFCoXMsQuP4otDRJqxo2zoSuEnVg0hIlGE7vUoVjR8jrfxPRAIfVovVQww6QlcMzoA%2Bm5zVrLuCGMLvFEhcyhRr2Sp6vvUyAPyh3zOr7o6TWwWwM3IPNNhuf2a%2BOH3HIO73N6DGcPAPfHizD5iJYVU7aA7gV1eXZQPLU0e1C%2BxDfe%2B6SczeHBI4%2Fhm7aonwctj8s3WMipCjEYuMsHVRycHEQ3tCg3zRxz1oTN9VMRcgGwqKqpfkNw1DysenqUOp2KpEWyz7KD2ttWzQqMYaLv0%2B1ih7R8PI96yDtl4OEEYeEVzlOVbCY%2B9XYgEtqKLjtGokKYu6wdxUW11pAmazNbGC6PnL3o8rKjNf1rOVmJFPS0jltfC9hLNN%2B5iiTOoK3EzG3WvnO2QOg3WRprIeaIw0t%2FwwQY6pgEKuK5cipBtyn%2BDsMeaE6SpWx%2FxVNtbcfF1HgmijZBKGKCSI8%2FdapXqn9IGK9q8wLyCFtnEHvGdX8W9JTah1%2BnZepM%2BC7Si1wG%2Bz0Fa8iiOR0MU2YYJGDpnb%2FJtQEy9bzIB7d3uYA0pDpUvQ93LC%2Bpgaw61Gp%2F1JfIXL0Upa4kPsp9NPT03%2BBHv%2BsOWjkrjdzAhNstElKaoD%2BwXrE54lj4L8NIvMe0m&X-Amz-Signature=f7bdb152bdc6239e4d58432c24c656e98ced466d846e20af51a2091f11f6835d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XA7D5AK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK7YS0uVHeK6ztbCziO%2B%2FMrXtHWpMpAlbIySbeR2h4NAiANFGYm41Z3D6S1HS3DL5nvYutPK5SmiE2iockAFWlPLyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SYYilfIaCakJBI%2BKtwDLiWnCdzfrucD69B%2FP7jctXFlm%2FRV60rZRapSdVW%2FEIDOYI7Vhp%2B4Xg5Zop7TEhDfqh8BkW2GRMOF4ZksEopaWP88D7fHQe%2BLO7jiIkgmBAWtvKiG6RqTM9Tmj8hTBBFSd7yXbMBIPgH6mEidRzKgAbzr70gJZoOhlEWsrMdz3mbAwe9eO3CMyB%2BYpnlD1W17y2hpkv%2BrbOd%2F%2BfpHociIqsNO2yI0WrqL0B1NqbJFCoXMsQuP4otDRJqxo2zoSuEnVg0hIlGE7vUoVjR8jrfxPRAIfVovVQww6QlcMzoA%2Bm5zVrLuCGMLvFEhcyhRr2Sp6vvUyAPyh3zOr7o6TWwWwM3IPNNhuf2a%2BOH3HIO73N6DGcPAPfHizD5iJYVU7aA7gV1eXZQPLU0e1C%2BxDfe%2B6SczeHBI4%2Fhm7aonwctj8s3WMipCjEYuMsHVRycHEQ3tCg3zRxz1oTN9VMRcgGwqKqpfkNw1DysenqUOp2KpEWyz7KD2ttWzQqMYaLv0%2B1ih7R8PI96yDtl4OEEYeEVzlOVbCY%2B9XYgEtqKLjtGokKYu6wdxUW11pAmazNbGC6PnL3o8rKjNf1rOVmJFPS0jltfC9hLNN%2B5iiTOoK3EzG3WvnO2QOg3WRprIeaIw0t%2FwwQY6pgEKuK5cipBtyn%2BDsMeaE6SpWx%2FxVNtbcfF1HgmijZBKGKCSI8%2FdapXqn9IGK9q8wLyCFtnEHvGdX8W9JTah1%2BnZepM%2BC7Si1wG%2Bz0Fa8iiOR0MU2YYJGDpnb%2FJtQEy9bzIB7d3uYA0pDpUvQ93LC%2Bpgaw61Gp%2F1JfIXL0Upa4kPsp9NPT03%2BBHv%2BsOWjkrjdzAhNstElKaoD%2BwXrE54lj4L8NIvMe0m&X-Amz-Signature=fad8f400b535d84782f44fdda38bad4f09e5e63c976b0f585e6fb39aa5f1f664&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XA7D5AK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK7YS0uVHeK6ztbCziO%2B%2FMrXtHWpMpAlbIySbeR2h4NAiANFGYm41Z3D6S1HS3DL5nvYutPK5SmiE2iockAFWlPLyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SYYilfIaCakJBI%2BKtwDLiWnCdzfrucD69B%2FP7jctXFlm%2FRV60rZRapSdVW%2FEIDOYI7Vhp%2B4Xg5Zop7TEhDfqh8BkW2GRMOF4ZksEopaWP88D7fHQe%2BLO7jiIkgmBAWtvKiG6RqTM9Tmj8hTBBFSd7yXbMBIPgH6mEidRzKgAbzr70gJZoOhlEWsrMdz3mbAwe9eO3CMyB%2BYpnlD1W17y2hpkv%2BrbOd%2F%2BfpHociIqsNO2yI0WrqL0B1NqbJFCoXMsQuP4otDRJqxo2zoSuEnVg0hIlGE7vUoVjR8jrfxPRAIfVovVQww6QlcMzoA%2Bm5zVrLuCGMLvFEhcyhRr2Sp6vvUyAPyh3zOr7o6TWwWwM3IPNNhuf2a%2BOH3HIO73N6DGcPAPfHizD5iJYVU7aA7gV1eXZQPLU0e1C%2BxDfe%2B6SczeHBI4%2Fhm7aonwctj8s3WMipCjEYuMsHVRycHEQ3tCg3zRxz1oTN9VMRcgGwqKqpfkNw1DysenqUOp2KpEWyz7KD2ttWzQqMYaLv0%2B1ih7R8PI96yDtl4OEEYeEVzlOVbCY%2B9XYgEtqKLjtGokKYu6wdxUW11pAmazNbGC6PnL3o8rKjNf1rOVmJFPS0jltfC9hLNN%2B5iiTOoK3EzG3WvnO2QOg3WRprIeaIw0t%2FwwQY6pgEKuK5cipBtyn%2BDsMeaE6SpWx%2FxVNtbcfF1HgmijZBKGKCSI8%2FdapXqn9IGK9q8wLyCFtnEHvGdX8W9JTah1%2BnZepM%2BC7Si1wG%2Bz0Fa8iiOR0MU2YYJGDpnb%2FJtQEy9bzIB7d3uYA0pDpUvQ93LC%2Bpgaw61Gp%2F1JfIXL0Upa4kPsp9NPT03%2BBHv%2BsOWjkrjdzAhNstElKaoD%2BwXrE54lj4L8NIvMe0m&X-Amz-Signature=3fa8dceb5a26f4938c4d2ce1282203fe11c89fd017495213fab9fab3ec714dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XA7D5AK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK7YS0uVHeK6ztbCziO%2B%2FMrXtHWpMpAlbIySbeR2h4NAiANFGYm41Z3D6S1HS3DL5nvYutPK5SmiE2iockAFWlPLyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SYYilfIaCakJBI%2BKtwDLiWnCdzfrucD69B%2FP7jctXFlm%2FRV60rZRapSdVW%2FEIDOYI7Vhp%2B4Xg5Zop7TEhDfqh8BkW2GRMOF4ZksEopaWP88D7fHQe%2BLO7jiIkgmBAWtvKiG6RqTM9Tmj8hTBBFSd7yXbMBIPgH6mEidRzKgAbzr70gJZoOhlEWsrMdz3mbAwe9eO3CMyB%2BYpnlD1W17y2hpkv%2BrbOd%2F%2BfpHociIqsNO2yI0WrqL0B1NqbJFCoXMsQuP4otDRJqxo2zoSuEnVg0hIlGE7vUoVjR8jrfxPRAIfVovVQww6QlcMzoA%2Bm5zVrLuCGMLvFEhcyhRr2Sp6vvUyAPyh3zOr7o6TWwWwM3IPNNhuf2a%2BOH3HIO73N6DGcPAPfHizD5iJYVU7aA7gV1eXZQPLU0e1C%2BxDfe%2B6SczeHBI4%2Fhm7aonwctj8s3WMipCjEYuMsHVRycHEQ3tCg3zRxz1oTN9VMRcgGwqKqpfkNw1DysenqUOp2KpEWyz7KD2ttWzQqMYaLv0%2B1ih7R8PI96yDtl4OEEYeEVzlOVbCY%2B9XYgEtqKLjtGokKYu6wdxUW11pAmazNbGC6PnL3o8rKjNf1rOVmJFPS0jltfC9hLNN%2B5iiTOoK3EzG3WvnO2QOg3WRprIeaIw0t%2FwwQY6pgEKuK5cipBtyn%2BDsMeaE6SpWx%2FxVNtbcfF1HgmijZBKGKCSI8%2FdapXqn9IGK9q8wLyCFtnEHvGdX8W9JTah1%2BnZepM%2BC7Si1wG%2Bz0Fa8iiOR0MU2YYJGDpnb%2FJtQEy9bzIB7d3uYA0pDpUvQ93LC%2Bpgaw61Gp%2F1JfIXL0Upa4kPsp9NPT03%2BBHv%2BsOWjkrjdzAhNstElKaoD%2BwXrE54lj4L8NIvMe0m&X-Amz-Signature=65115a0b49e56b2d5d48431c04df0b745454b4735cf6e3a67d5b471ebd16c648&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XA7D5AK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK7YS0uVHeK6ztbCziO%2B%2FMrXtHWpMpAlbIySbeR2h4NAiANFGYm41Z3D6S1HS3DL5nvYutPK5SmiE2iockAFWlPLyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7SYYilfIaCakJBI%2BKtwDLiWnCdzfrucD69B%2FP7jctXFlm%2FRV60rZRapSdVW%2FEIDOYI7Vhp%2B4Xg5Zop7TEhDfqh8BkW2GRMOF4ZksEopaWP88D7fHQe%2BLO7jiIkgmBAWtvKiG6RqTM9Tmj8hTBBFSd7yXbMBIPgH6mEidRzKgAbzr70gJZoOhlEWsrMdz3mbAwe9eO3CMyB%2BYpnlD1W17y2hpkv%2BrbOd%2F%2BfpHociIqsNO2yI0WrqL0B1NqbJFCoXMsQuP4otDRJqxo2zoSuEnVg0hIlGE7vUoVjR8jrfxPRAIfVovVQww6QlcMzoA%2Bm5zVrLuCGMLvFEhcyhRr2Sp6vvUyAPyh3zOr7o6TWwWwM3IPNNhuf2a%2BOH3HIO73N6DGcPAPfHizD5iJYVU7aA7gV1eXZQPLU0e1C%2BxDfe%2B6SczeHBI4%2Fhm7aonwctj8s3WMipCjEYuMsHVRycHEQ3tCg3zRxz1oTN9VMRcgGwqKqpfkNw1DysenqUOp2KpEWyz7KD2ttWzQqMYaLv0%2B1ih7R8PI96yDtl4OEEYeEVzlOVbCY%2B9XYgEtqKLjtGokKYu6wdxUW11pAmazNbGC6PnL3o8rKjNf1rOVmJFPS0jltfC9hLNN%2B5iiTOoK3EzG3WvnO2QOg3WRprIeaIw0t%2FwwQY6pgEKuK5cipBtyn%2BDsMeaE6SpWx%2FxVNtbcfF1HgmijZBKGKCSI8%2FdapXqn9IGK9q8wLyCFtnEHvGdX8W9JTah1%2BnZepM%2BC7Si1wG%2Bz0Fa8iiOR0MU2YYJGDpnb%2FJtQEy9bzIB7d3uYA0pDpUvQ93LC%2Bpgaw61Gp%2F1JfIXL0Upa4kPsp9NPT03%2BBHv%2BsOWjkrjdzAhNstElKaoD%2BwXrE54lj4L8NIvMe0m&X-Amz-Signature=2c995d0f048d31bd17aa1dc2b6e3362f63b77e8a6b653b04335b1d8894f811a2&X-Amz-SignedHeaders=host&x-id=GetObject)
