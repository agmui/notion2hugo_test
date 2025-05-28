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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZANOHH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrQkhd6rnFn9UiGaivj3q%2FQlqjehQP3oHk3wuU0Y4J0AiArMHP3ahZNoRSvm1j1inqmvlfuRXJN3%2FukjNrXKLORPCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMSeFbHwVxlUUi77wtKtwDyW4dKUe2bzPIhgrJ0F9TlCx8U%2FUZiXF%2BRykuwQXuETiWCo7O2%2FOTCE5kncWogo3kCteGlVWb2kokG%2Fd7gvru4VFijAZkVi6Kl2buCt8laycUXqysbRDbch7D0oRYdvxDca%2FSarsWa0nk1%2F8wKfYypni6sTCTH8N9mMgWg7NPZFMQf12W966epPileCLqJJ8PzpjtkwBezK6P%2FE%2Fa5U2WumJP6CF9YTibSIQZ46HYhlZlX1Poj5u5dWaUtjEA9PiDSeRiDsFYgjOgCQEe42n7Ad91HIJ79dr3bQvVO%2BoKvhSE3ciM1fnI8R3UB%2FOlAYKoMQ%2FUIFhkrja9uehrZ4v7Y8Vjo17kJUyxmizwfGhXvtcCAhHL%2F2ElQRfZJ%2Fi0qICAMxaWV%2BTyR2glPC5ROHsbE6aLDLIh%2Fz1wIAKfOIjqKJKi8Dba9YVlnQjuS4AeSgKlm%2Fv0CwHVaFwPRQHk06vcg%2FqnCMQWB2rrh1R1wHAuODBwAuH4yHcXlSEmOs%2B5px3655L%2BZ2bGGQjPUShApRdQ7yd4dQHdd24JB7QBKiGCZYKajjv5PX7tcssKwBKAHpGXhmUZ84f8%2FRMyEDrimV9mzPRgVQ1xpVYX8oxNN3KDJ1QXVaFHOiQwlU%2Fv%2BMUw3cbcwQY6pgH%2BRRXVEWCvj3QtVINuon3tm5KHwONerZhKkEptr0r3rP%2FN%2BkEkp3Gx3uTpf2k9deoHaMVUMgwoYIsfFTt33BMyvg4jNG25mbY7OTaoBzsAWZ67%2F%2Bnx7QFIxzrIAMxbjzXjQkWgjc5uzvU73nwuzCPZ%2FZS5QnjXehRXI3Abbe%2BkvU4zxfyOXjDWy1V0Oz1pk0JFJE5YtpfbvbVPl%2BcVylG%2FWI41ZO2L&X-Amz-Signature=44846415160dd8db242c2025bc7a345c9cf64bd9f045c22d36fb25be1f016669&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZANOHH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrQkhd6rnFn9UiGaivj3q%2FQlqjehQP3oHk3wuU0Y4J0AiArMHP3ahZNoRSvm1j1inqmvlfuRXJN3%2FukjNrXKLORPCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMSeFbHwVxlUUi77wtKtwDyW4dKUe2bzPIhgrJ0F9TlCx8U%2FUZiXF%2BRykuwQXuETiWCo7O2%2FOTCE5kncWogo3kCteGlVWb2kokG%2Fd7gvru4VFijAZkVi6Kl2buCt8laycUXqysbRDbch7D0oRYdvxDca%2FSarsWa0nk1%2F8wKfYypni6sTCTH8N9mMgWg7NPZFMQf12W966epPileCLqJJ8PzpjtkwBezK6P%2FE%2Fa5U2WumJP6CF9YTibSIQZ46HYhlZlX1Poj5u5dWaUtjEA9PiDSeRiDsFYgjOgCQEe42n7Ad91HIJ79dr3bQvVO%2BoKvhSE3ciM1fnI8R3UB%2FOlAYKoMQ%2FUIFhkrja9uehrZ4v7Y8Vjo17kJUyxmizwfGhXvtcCAhHL%2F2ElQRfZJ%2Fi0qICAMxaWV%2BTyR2glPC5ROHsbE6aLDLIh%2Fz1wIAKfOIjqKJKi8Dba9YVlnQjuS4AeSgKlm%2Fv0CwHVaFwPRQHk06vcg%2FqnCMQWB2rrh1R1wHAuODBwAuH4yHcXlSEmOs%2B5px3655L%2BZ2bGGQjPUShApRdQ7yd4dQHdd24JB7QBKiGCZYKajjv5PX7tcssKwBKAHpGXhmUZ84f8%2FRMyEDrimV9mzPRgVQ1xpVYX8oxNN3KDJ1QXVaFHOiQwlU%2Fv%2BMUw3cbcwQY6pgH%2BRRXVEWCvj3QtVINuon3tm5KHwONerZhKkEptr0r3rP%2FN%2BkEkp3Gx3uTpf2k9deoHaMVUMgwoYIsfFTt33BMyvg4jNG25mbY7OTaoBzsAWZ67%2F%2Bnx7QFIxzrIAMxbjzXjQkWgjc5uzvU73nwuzCPZ%2FZS5QnjXehRXI3Abbe%2BkvU4zxfyOXjDWy1V0Oz1pk0JFJE5YtpfbvbVPl%2BcVylG%2FWI41ZO2L&X-Amz-Signature=cbe08c1a93163c959fdf9e529852a542272ad09c621cf8168858e334b3efa3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZANOHH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrQkhd6rnFn9UiGaivj3q%2FQlqjehQP3oHk3wuU0Y4J0AiArMHP3ahZNoRSvm1j1inqmvlfuRXJN3%2FukjNrXKLORPCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMSeFbHwVxlUUi77wtKtwDyW4dKUe2bzPIhgrJ0F9TlCx8U%2FUZiXF%2BRykuwQXuETiWCo7O2%2FOTCE5kncWogo3kCteGlVWb2kokG%2Fd7gvru4VFijAZkVi6Kl2buCt8laycUXqysbRDbch7D0oRYdvxDca%2FSarsWa0nk1%2F8wKfYypni6sTCTH8N9mMgWg7NPZFMQf12W966epPileCLqJJ8PzpjtkwBezK6P%2FE%2Fa5U2WumJP6CF9YTibSIQZ46HYhlZlX1Poj5u5dWaUtjEA9PiDSeRiDsFYgjOgCQEe42n7Ad91HIJ79dr3bQvVO%2BoKvhSE3ciM1fnI8R3UB%2FOlAYKoMQ%2FUIFhkrja9uehrZ4v7Y8Vjo17kJUyxmizwfGhXvtcCAhHL%2F2ElQRfZJ%2Fi0qICAMxaWV%2BTyR2glPC5ROHsbE6aLDLIh%2Fz1wIAKfOIjqKJKi8Dba9YVlnQjuS4AeSgKlm%2Fv0CwHVaFwPRQHk06vcg%2FqnCMQWB2rrh1R1wHAuODBwAuH4yHcXlSEmOs%2B5px3655L%2BZ2bGGQjPUShApRdQ7yd4dQHdd24JB7QBKiGCZYKajjv5PX7tcssKwBKAHpGXhmUZ84f8%2FRMyEDrimV9mzPRgVQ1xpVYX8oxNN3KDJ1QXVaFHOiQwlU%2Fv%2BMUw3cbcwQY6pgH%2BRRXVEWCvj3QtVINuon3tm5KHwONerZhKkEptr0r3rP%2FN%2BkEkp3Gx3uTpf2k9deoHaMVUMgwoYIsfFTt33BMyvg4jNG25mbY7OTaoBzsAWZ67%2F%2Bnx7QFIxzrIAMxbjzXjQkWgjc5uzvU73nwuzCPZ%2FZS5QnjXehRXI3Abbe%2BkvU4zxfyOXjDWy1V0Oz1pk0JFJE5YtpfbvbVPl%2BcVylG%2FWI41ZO2L&X-Amz-Signature=19983d2c2ff6a1f842fb665d45ad98bdbac8d84e67adb14becce2cf8db494055&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZANOHH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrQkhd6rnFn9UiGaivj3q%2FQlqjehQP3oHk3wuU0Y4J0AiArMHP3ahZNoRSvm1j1inqmvlfuRXJN3%2FukjNrXKLORPCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMSeFbHwVxlUUi77wtKtwDyW4dKUe2bzPIhgrJ0F9TlCx8U%2FUZiXF%2BRykuwQXuETiWCo7O2%2FOTCE5kncWogo3kCteGlVWb2kokG%2Fd7gvru4VFijAZkVi6Kl2buCt8laycUXqysbRDbch7D0oRYdvxDca%2FSarsWa0nk1%2F8wKfYypni6sTCTH8N9mMgWg7NPZFMQf12W966epPileCLqJJ8PzpjtkwBezK6P%2FE%2Fa5U2WumJP6CF9YTibSIQZ46HYhlZlX1Poj5u5dWaUtjEA9PiDSeRiDsFYgjOgCQEe42n7Ad91HIJ79dr3bQvVO%2BoKvhSE3ciM1fnI8R3UB%2FOlAYKoMQ%2FUIFhkrja9uehrZ4v7Y8Vjo17kJUyxmizwfGhXvtcCAhHL%2F2ElQRfZJ%2Fi0qICAMxaWV%2BTyR2glPC5ROHsbE6aLDLIh%2Fz1wIAKfOIjqKJKi8Dba9YVlnQjuS4AeSgKlm%2Fv0CwHVaFwPRQHk06vcg%2FqnCMQWB2rrh1R1wHAuODBwAuH4yHcXlSEmOs%2B5px3655L%2BZ2bGGQjPUShApRdQ7yd4dQHdd24JB7QBKiGCZYKajjv5PX7tcssKwBKAHpGXhmUZ84f8%2FRMyEDrimV9mzPRgVQ1xpVYX8oxNN3KDJ1QXVaFHOiQwlU%2Fv%2BMUw3cbcwQY6pgH%2BRRXVEWCvj3QtVINuon3tm5KHwONerZhKkEptr0r3rP%2FN%2BkEkp3Gx3uTpf2k9deoHaMVUMgwoYIsfFTt33BMyvg4jNG25mbY7OTaoBzsAWZ67%2F%2Bnx7QFIxzrIAMxbjzXjQkWgjc5uzvU73nwuzCPZ%2FZS5QnjXehRXI3Abbe%2BkvU4zxfyOXjDWy1V0Oz1pk0JFJE5YtpfbvbVPl%2BcVylG%2FWI41ZO2L&X-Amz-Signature=b73b3a2d63d33de341946e9652fb9e805d0f8fe97740e4fdd554252bfbba4f8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZANOHH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrQkhd6rnFn9UiGaivj3q%2FQlqjehQP3oHk3wuU0Y4J0AiArMHP3ahZNoRSvm1j1inqmvlfuRXJN3%2FukjNrXKLORPCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMSeFbHwVxlUUi77wtKtwDyW4dKUe2bzPIhgrJ0F9TlCx8U%2FUZiXF%2BRykuwQXuETiWCo7O2%2FOTCE5kncWogo3kCteGlVWb2kokG%2Fd7gvru4VFijAZkVi6Kl2buCt8laycUXqysbRDbch7D0oRYdvxDca%2FSarsWa0nk1%2F8wKfYypni6sTCTH8N9mMgWg7NPZFMQf12W966epPileCLqJJ8PzpjtkwBezK6P%2FE%2Fa5U2WumJP6CF9YTibSIQZ46HYhlZlX1Poj5u5dWaUtjEA9PiDSeRiDsFYgjOgCQEe42n7Ad91HIJ79dr3bQvVO%2BoKvhSE3ciM1fnI8R3UB%2FOlAYKoMQ%2FUIFhkrja9uehrZ4v7Y8Vjo17kJUyxmizwfGhXvtcCAhHL%2F2ElQRfZJ%2Fi0qICAMxaWV%2BTyR2glPC5ROHsbE6aLDLIh%2Fz1wIAKfOIjqKJKi8Dba9YVlnQjuS4AeSgKlm%2Fv0CwHVaFwPRQHk06vcg%2FqnCMQWB2rrh1R1wHAuODBwAuH4yHcXlSEmOs%2B5px3655L%2BZ2bGGQjPUShApRdQ7yd4dQHdd24JB7QBKiGCZYKajjv5PX7tcssKwBKAHpGXhmUZ84f8%2FRMyEDrimV9mzPRgVQ1xpVYX8oxNN3KDJ1QXVaFHOiQwlU%2Fv%2BMUw3cbcwQY6pgH%2BRRXVEWCvj3QtVINuon3tm5KHwONerZhKkEptr0r3rP%2FN%2BkEkp3Gx3uTpf2k9deoHaMVUMgwoYIsfFTt33BMyvg4jNG25mbY7OTaoBzsAWZ67%2F%2Bnx7QFIxzrIAMxbjzXjQkWgjc5uzvU73nwuzCPZ%2FZS5QnjXehRXI3Abbe%2BkvU4zxfyOXjDWy1V0Oz1pk0JFJE5YtpfbvbVPl%2BcVylG%2FWI41ZO2L&X-Amz-Signature=659ffff55da78b80bf4f7092a9ee400a91a0732b2cdb5be9fab4acf27a947deb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZANOHH%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDrQkhd6rnFn9UiGaivj3q%2FQlqjehQP3oHk3wuU0Y4J0AiArMHP3ahZNoRSvm1j1inqmvlfuRXJN3%2FukjNrXKLORPCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMSeFbHwVxlUUi77wtKtwDyW4dKUe2bzPIhgrJ0F9TlCx8U%2FUZiXF%2BRykuwQXuETiWCo7O2%2FOTCE5kncWogo3kCteGlVWb2kokG%2Fd7gvru4VFijAZkVi6Kl2buCt8laycUXqysbRDbch7D0oRYdvxDca%2FSarsWa0nk1%2F8wKfYypni6sTCTH8N9mMgWg7NPZFMQf12W966epPileCLqJJ8PzpjtkwBezK6P%2FE%2Fa5U2WumJP6CF9YTibSIQZ46HYhlZlX1Poj5u5dWaUtjEA9PiDSeRiDsFYgjOgCQEe42n7Ad91HIJ79dr3bQvVO%2BoKvhSE3ciM1fnI8R3UB%2FOlAYKoMQ%2FUIFhkrja9uehrZ4v7Y8Vjo17kJUyxmizwfGhXvtcCAhHL%2F2ElQRfZJ%2Fi0qICAMxaWV%2BTyR2glPC5ROHsbE6aLDLIh%2Fz1wIAKfOIjqKJKi8Dba9YVlnQjuS4AeSgKlm%2Fv0CwHVaFwPRQHk06vcg%2FqnCMQWB2rrh1R1wHAuODBwAuH4yHcXlSEmOs%2B5px3655L%2BZ2bGGQjPUShApRdQ7yd4dQHdd24JB7QBKiGCZYKajjv5PX7tcssKwBKAHpGXhmUZ84f8%2FRMyEDrimV9mzPRgVQ1xpVYX8oxNN3KDJ1QXVaFHOiQwlU%2Fv%2BMUw3cbcwQY6pgH%2BRRXVEWCvj3QtVINuon3tm5KHwONerZhKkEptr0r3rP%2FN%2BkEkp3Gx3uTpf2k9deoHaMVUMgwoYIsfFTt33BMyvg4jNG25mbY7OTaoBzsAWZ67%2F%2Bnx7QFIxzrIAMxbjzXjQkWgjc5uzvU73nwuzCPZ%2FZS5QnjXehRXI3Abbe%2BkvU4zxfyOXjDWy1V0Oz1pk0JFJE5YtpfbvbVPl%2BcVylG%2FWI41ZO2L&X-Amz-Signature=3990dd0342f454d932114f8bbcfc07501ccf4113f9db75dcee0988669553cdfc&X-Amz-SignedHeaders=host&x-id=GetObject)
