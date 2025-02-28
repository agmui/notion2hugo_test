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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUETGSWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCyhoiV1tsBF0akghqSIBUHSOywVYZ7dLW8L3i%2BNQPn3gIgRaYaa%2FVBXfTfP99hkfM4HQSksSoCElece6d21OuClk4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVtGTGMRjxBHSNGZCrcA38aOZ0VH5KFmmPrGE4D4mh3rwPZiJca63%2BAtHyOnkLsKeWmE0HFnRwFDDxMH1jpb2MIEvmtKufokV9iyUESt31IqpNB7LtVcbM9YWuhN23Mclwjj4dKEAq8SY3BywsjZViruSxU07jwPHjBf%2BMc4iUUfFnOBx%2B8z8NvAKcb70CT75KGgti0JclmX2qWXehxiUqfVMdzETv2bBUi72C%2FuZJeXIB3f33kiU62hgJisWkYUNEiCV1kAxNXInZsYM9E2C2dwqOW5D4Ps9AxcjCz4uIOrUmFh1Afz6XXnSqkFGPnsVvXagtmod2rtnRKZMV9fyoe4%2Bh3uSAGJBNEIC5REOhavJjFyGDtZQRNdogHdsAH%2F4bHFuuHSvflKFN0ViqpSk%2F8ubg%2FToOnFgNwbct84QWd9ULKtIgpSYkC%2FagOiTprQRkJe2QIVFIHhqHbaRaFFgEoZnCXe5NxUaCqNHHYAg8vDvAChH15IpqbxG8ghnhk1g%2B0a972dItsAqIp7E3khW9C9JKbWxxzbq6t75Kq%2BeGUPS8hRmPiSTuj324ZgMsiAO9MqDm3cA9mrN626rx4JqrI%2FtScH6%2B9zsdvyM7noyLmknMdEKr3hpHHC5mbiIdr5R9qdb4EcQRcmXi7MMKLiL4GOqUB2J8cRdHHYkPvgpmo9IGhsLkw3%2BQim4KsJxKqNYoFjq6VgkNiJeKJcdqOi89rHdRgdOlXu2OFytZBZqhcgBM28vNJAiGErck4nvO61Y6N6GMaP5VoWMAC%2FnLxJarZGglBcUMxjw397L6w8x1CTfXj5Y0DuMEPZvZx5KetdFa1evz98P%2Fa2ZIQsdW9SQ%2BI%2FOLQLy0fHUUGavnckGCl%2B7XELnpKoUzO&X-Amz-Signature=fafa743fc9a1db77e8df7380ae59e950f18472528ce9a3fba8bbdb29688a366c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUETGSWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCyhoiV1tsBF0akghqSIBUHSOywVYZ7dLW8L3i%2BNQPn3gIgRaYaa%2FVBXfTfP99hkfM4HQSksSoCElece6d21OuClk4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVtGTGMRjxBHSNGZCrcA38aOZ0VH5KFmmPrGE4D4mh3rwPZiJca63%2BAtHyOnkLsKeWmE0HFnRwFDDxMH1jpb2MIEvmtKufokV9iyUESt31IqpNB7LtVcbM9YWuhN23Mclwjj4dKEAq8SY3BywsjZViruSxU07jwPHjBf%2BMc4iUUfFnOBx%2B8z8NvAKcb70CT75KGgti0JclmX2qWXehxiUqfVMdzETv2bBUi72C%2FuZJeXIB3f33kiU62hgJisWkYUNEiCV1kAxNXInZsYM9E2C2dwqOW5D4Ps9AxcjCz4uIOrUmFh1Afz6XXnSqkFGPnsVvXagtmod2rtnRKZMV9fyoe4%2Bh3uSAGJBNEIC5REOhavJjFyGDtZQRNdogHdsAH%2F4bHFuuHSvflKFN0ViqpSk%2F8ubg%2FToOnFgNwbct84QWd9ULKtIgpSYkC%2FagOiTprQRkJe2QIVFIHhqHbaRaFFgEoZnCXe5NxUaCqNHHYAg8vDvAChH15IpqbxG8ghnhk1g%2B0a972dItsAqIp7E3khW9C9JKbWxxzbq6t75Kq%2BeGUPS8hRmPiSTuj324ZgMsiAO9MqDm3cA9mrN626rx4JqrI%2FtScH6%2B9zsdvyM7noyLmknMdEKr3hpHHC5mbiIdr5R9qdb4EcQRcmXi7MMKLiL4GOqUB2J8cRdHHYkPvgpmo9IGhsLkw3%2BQim4KsJxKqNYoFjq6VgkNiJeKJcdqOi89rHdRgdOlXu2OFytZBZqhcgBM28vNJAiGErck4nvO61Y6N6GMaP5VoWMAC%2FnLxJarZGglBcUMxjw397L6w8x1CTfXj5Y0DuMEPZvZx5KetdFa1evz98P%2Fa2ZIQsdW9SQ%2BI%2FOLQLy0fHUUGavnckGCl%2B7XELnpKoUzO&X-Amz-Signature=041c38103d79511748b05e5289b1bb970897932d773343872e5b6754ecfebbbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUETGSWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCyhoiV1tsBF0akghqSIBUHSOywVYZ7dLW8L3i%2BNQPn3gIgRaYaa%2FVBXfTfP99hkfM4HQSksSoCElece6d21OuClk4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVtGTGMRjxBHSNGZCrcA38aOZ0VH5KFmmPrGE4D4mh3rwPZiJca63%2BAtHyOnkLsKeWmE0HFnRwFDDxMH1jpb2MIEvmtKufokV9iyUESt31IqpNB7LtVcbM9YWuhN23Mclwjj4dKEAq8SY3BywsjZViruSxU07jwPHjBf%2BMc4iUUfFnOBx%2B8z8NvAKcb70CT75KGgti0JclmX2qWXehxiUqfVMdzETv2bBUi72C%2FuZJeXIB3f33kiU62hgJisWkYUNEiCV1kAxNXInZsYM9E2C2dwqOW5D4Ps9AxcjCz4uIOrUmFh1Afz6XXnSqkFGPnsVvXagtmod2rtnRKZMV9fyoe4%2Bh3uSAGJBNEIC5REOhavJjFyGDtZQRNdogHdsAH%2F4bHFuuHSvflKFN0ViqpSk%2F8ubg%2FToOnFgNwbct84QWd9ULKtIgpSYkC%2FagOiTprQRkJe2QIVFIHhqHbaRaFFgEoZnCXe5NxUaCqNHHYAg8vDvAChH15IpqbxG8ghnhk1g%2B0a972dItsAqIp7E3khW9C9JKbWxxzbq6t75Kq%2BeGUPS8hRmPiSTuj324ZgMsiAO9MqDm3cA9mrN626rx4JqrI%2FtScH6%2B9zsdvyM7noyLmknMdEKr3hpHHC5mbiIdr5R9qdb4EcQRcmXi7MMKLiL4GOqUB2J8cRdHHYkPvgpmo9IGhsLkw3%2BQim4KsJxKqNYoFjq6VgkNiJeKJcdqOi89rHdRgdOlXu2OFytZBZqhcgBM28vNJAiGErck4nvO61Y6N6GMaP5VoWMAC%2FnLxJarZGglBcUMxjw397L6w8x1CTfXj5Y0DuMEPZvZx5KetdFa1evz98P%2Fa2ZIQsdW9SQ%2BI%2FOLQLy0fHUUGavnckGCl%2B7XELnpKoUzO&X-Amz-Signature=4147f6b0b64fca5231f59622d0d441255108dabc8f3296371cd0f4443bb238b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUETGSWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCyhoiV1tsBF0akghqSIBUHSOywVYZ7dLW8L3i%2BNQPn3gIgRaYaa%2FVBXfTfP99hkfM4HQSksSoCElece6d21OuClk4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVtGTGMRjxBHSNGZCrcA38aOZ0VH5KFmmPrGE4D4mh3rwPZiJca63%2BAtHyOnkLsKeWmE0HFnRwFDDxMH1jpb2MIEvmtKufokV9iyUESt31IqpNB7LtVcbM9YWuhN23Mclwjj4dKEAq8SY3BywsjZViruSxU07jwPHjBf%2BMc4iUUfFnOBx%2B8z8NvAKcb70CT75KGgti0JclmX2qWXehxiUqfVMdzETv2bBUi72C%2FuZJeXIB3f33kiU62hgJisWkYUNEiCV1kAxNXInZsYM9E2C2dwqOW5D4Ps9AxcjCz4uIOrUmFh1Afz6XXnSqkFGPnsVvXagtmod2rtnRKZMV9fyoe4%2Bh3uSAGJBNEIC5REOhavJjFyGDtZQRNdogHdsAH%2F4bHFuuHSvflKFN0ViqpSk%2F8ubg%2FToOnFgNwbct84QWd9ULKtIgpSYkC%2FagOiTprQRkJe2QIVFIHhqHbaRaFFgEoZnCXe5NxUaCqNHHYAg8vDvAChH15IpqbxG8ghnhk1g%2B0a972dItsAqIp7E3khW9C9JKbWxxzbq6t75Kq%2BeGUPS8hRmPiSTuj324ZgMsiAO9MqDm3cA9mrN626rx4JqrI%2FtScH6%2B9zsdvyM7noyLmknMdEKr3hpHHC5mbiIdr5R9qdb4EcQRcmXi7MMKLiL4GOqUB2J8cRdHHYkPvgpmo9IGhsLkw3%2BQim4KsJxKqNYoFjq6VgkNiJeKJcdqOi89rHdRgdOlXu2OFytZBZqhcgBM28vNJAiGErck4nvO61Y6N6GMaP5VoWMAC%2FnLxJarZGglBcUMxjw397L6w8x1CTfXj5Y0DuMEPZvZx5KetdFa1evz98P%2Fa2ZIQsdW9SQ%2BI%2FOLQLy0fHUUGavnckGCl%2B7XELnpKoUzO&X-Amz-Signature=508049435f43e3fd69f8b09cc6bee08a4183e230204e96bb571ee60502d3054f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUETGSWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCyhoiV1tsBF0akghqSIBUHSOywVYZ7dLW8L3i%2BNQPn3gIgRaYaa%2FVBXfTfP99hkfM4HQSksSoCElece6d21OuClk4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVtGTGMRjxBHSNGZCrcA38aOZ0VH5KFmmPrGE4D4mh3rwPZiJca63%2BAtHyOnkLsKeWmE0HFnRwFDDxMH1jpb2MIEvmtKufokV9iyUESt31IqpNB7LtVcbM9YWuhN23Mclwjj4dKEAq8SY3BywsjZViruSxU07jwPHjBf%2BMc4iUUfFnOBx%2B8z8NvAKcb70CT75KGgti0JclmX2qWXehxiUqfVMdzETv2bBUi72C%2FuZJeXIB3f33kiU62hgJisWkYUNEiCV1kAxNXInZsYM9E2C2dwqOW5D4Ps9AxcjCz4uIOrUmFh1Afz6XXnSqkFGPnsVvXagtmod2rtnRKZMV9fyoe4%2Bh3uSAGJBNEIC5REOhavJjFyGDtZQRNdogHdsAH%2F4bHFuuHSvflKFN0ViqpSk%2F8ubg%2FToOnFgNwbct84QWd9ULKtIgpSYkC%2FagOiTprQRkJe2QIVFIHhqHbaRaFFgEoZnCXe5NxUaCqNHHYAg8vDvAChH15IpqbxG8ghnhk1g%2B0a972dItsAqIp7E3khW9C9JKbWxxzbq6t75Kq%2BeGUPS8hRmPiSTuj324ZgMsiAO9MqDm3cA9mrN626rx4JqrI%2FtScH6%2B9zsdvyM7noyLmknMdEKr3hpHHC5mbiIdr5R9qdb4EcQRcmXi7MMKLiL4GOqUB2J8cRdHHYkPvgpmo9IGhsLkw3%2BQim4KsJxKqNYoFjq6VgkNiJeKJcdqOi89rHdRgdOlXu2OFytZBZqhcgBM28vNJAiGErck4nvO61Y6N6GMaP5VoWMAC%2FnLxJarZGglBcUMxjw397L6w8x1CTfXj5Y0DuMEPZvZx5KetdFa1evz98P%2Fa2ZIQsdW9SQ%2BI%2FOLQLy0fHUUGavnckGCl%2B7XELnpKoUzO&X-Amz-Signature=2f38ab0fb52298fb4d68a262ff2fa21e5dc798d61ea636c275c4bd9e8b6427b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUETGSWQ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCyhoiV1tsBF0akghqSIBUHSOywVYZ7dLW8L3i%2BNQPn3gIgRaYaa%2FVBXfTfP99hkfM4HQSksSoCElece6d21OuClk4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIVtGTGMRjxBHSNGZCrcA38aOZ0VH5KFmmPrGE4D4mh3rwPZiJca63%2BAtHyOnkLsKeWmE0HFnRwFDDxMH1jpb2MIEvmtKufokV9iyUESt31IqpNB7LtVcbM9YWuhN23Mclwjj4dKEAq8SY3BywsjZViruSxU07jwPHjBf%2BMc4iUUfFnOBx%2B8z8NvAKcb70CT75KGgti0JclmX2qWXehxiUqfVMdzETv2bBUi72C%2FuZJeXIB3f33kiU62hgJisWkYUNEiCV1kAxNXInZsYM9E2C2dwqOW5D4Ps9AxcjCz4uIOrUmFh1Afz6XXnSqkFGPnsVvXagtmod2rtnRKZMV9fyoe4%2Bh3uSAGJBNEIC5REOhavJjFyGDtZQRNdogHdsAH%2F4bHFuuHSvflKFN0ViqpSk%2F8ubg%2FToOnFgNwbct84QWd9ULKtIgpSYkC%2FagOiTprQRkJe2QIVFIHhqHbaRaFFgEoZnCXe5NxUaCqNHHYAg8vDvAChH15IpqbxG8ghnhk1g%2B0a972dItsAqIp7E3khW9C9JKbWxxzbq6t75Kq%2BeGUPS8hRmPiSTuj324ZgMsiAO9MqDm3cA9mrN626rx4JqrI%2FtScH6%2B9zsdvyM7noyLmknMdEKr3hpHHC5mbiIdr5R9qdb4EcQRcmXi7MMKLiL4GOqUB2J8cRdHHYkPvgpmo9IGhsLkw3%2BQim4KsJxKqNYoFjq6VgkNiJeKJcdqOi89rHdRgdOlXu2OFytZBZqhcgBM28vNJAiGErck4nvO61Y6N6GMaP5VoWMAC%2FnLxJarZGglBcUMxjw397L6w8x1CTfXj5Y0DuMEPZvZx5KetdFa1evz98P%2Fa2ZIQsdW9SQ%2BI%2FOLQLy0fHUUGavnckGCl%2B7XELnpKoUzO&X-Amz-Signature=1f810acd45c0231d3b002d2a9c9f3dd6f19a220436aafb192675685718b8adcc&X-Amz-SignedHeaders=host&x-id=GetObject)
