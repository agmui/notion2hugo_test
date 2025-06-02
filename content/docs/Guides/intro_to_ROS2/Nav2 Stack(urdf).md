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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQWCALV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCsktYOVQiHZ9%2BQIAqPn7kZ9nWlnW9iIGl09h0ZTzrIXAIhAI6%2FLZbbEXUWkXm%2FClpv%2BU9wrtVyWHNkuXtqByCS3W%2BMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTJj207IrcWCq7gg0q3AMZ%2FAlrvNEsH%2B2HJVcqAlET6zP%2BkVCwCqCIexCFh4rEe5TUNzRZ33IbaRacwC8EMdStnbwue6qxuilwZdAj7Zb1hyhtKSoBxezmo9EkfqJVEwwc%2B%2Fzrumt9NSvtOYVtGm7my%2FNm9mf2HrW9JiPO%2FTm19%2Fg%2FwOO6vQyS1JKa5HwibegICY7%2FPPlAK7AemVKgrQWxrN8kqgrtIU28lp7o4KO3qyeOfDoNixqGTQnkO4u9y2OosePbZ7T3wYDiIr7%2BIgiwK4BHKVjyYeYTA5F0jJFMSAfBYMxVxwHrEZukzDEEC50mckOSyajef7TE%2FS5fCCXfe77eZ1i5%2B%2FmMUQTzM9PF2uPoiA3zJX%2B42zoJOQ%2B9qneTumOeK9JX7irjbPFThLfP4C52RH1cSBtvZ2IIasWRFgMMcrjyqHDBHQ%2F2OJzRfNr79CQC8RX8kpF52PeTKTuKySQ4syI9XkO7uZkD%2F0ricwfG83OU52kQw%2BHQ%2FgoqdxcqjLSPbyYlUx2Xf8kbR9yetCSPzi1KtJyL69vsj5Zmmggex2hLN9YjwFo0mhBaoKdNWgeloFMYOoXmovMb1nb4TSUAps4tMg%2FDv1y4oBfTCZAmhk28PvOoomxsnFnatBRqadgpqI%2F0Q75%2BgDDHsvfBBjqkAV6l1M5CPvb1D5c3PECb4jEUwEn8WEM1f1LCdV6cLzD9P9J4XbW63DVn1trbIJOkzO2E%2Bx4a4o6gj4dK4Q5z2hKBPnj5Ny2ECy2lxVcBdapCjt3%2FN4EK%2BnsSHOy0bl6ZeAFpoMxi%2BNvDRp5bFLPLdGbZyGptogmt4XL9QZJui%2FVcicrN7gj04DwuW5viYcbHH4f%2Bo3F2%2BZUfd4uZvN7%2BPhvRu4%2FG&X-Amz-Signature=690205746c7466e8ce0894356f3cccdcca68ab959d382c4256e61749d7064c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQWCALV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCsktYOVQiHZ9%2BQIAqPn7kZ9nWlnW9iIGl09h0ZTzrIXAIhAI6%2FLZbbEXUWkXm%2FClpv%2BU9wrtVyWHNkuXtqByCS3W%2BMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTJj207IrcWCq7gg0q3AMZ%2FAlrvNEsH%2B2HJVcqAlET6zP%2BkVCwCqCIexCFh4rEe5TUNzRZ33IbaRacwC8EMdStnbwue6qxuilwZdAj7Zb1hyhtKSoBxezmo9EkfqJVEwwc%2B%2Fzrumt9NSvtOYVtGm7my%2FNm9mf2HrW9JiPO%2FTm19%2Fg%2FwOO6vQyS1JKa5HwibegICY7%2FPPlAK7AemVKgrQWxrN8kqgrtIU28lp7o4KO3qyeOfDoNixqGTQnkO4u9y2OosePbZ7T3wYDiIr7%2BIgiwK4BHKVjyYeYTA5F0jJFMSAfBYMxVxwHrEZukzDEEC50mckOSyajef7TE%2FS5fCCXfe77eZ1i5%2B%2FmMUQTzM9PF2uPoiA3zJX%2B42zoJOQ%2B9qneTumOeK9JX7irjbPFThLfP4C52RH1cSBtvZ2IIasWRFgMMcrjyqHDBHQ%2F2OJzRfNr79CQC8RX8kpF52PeTKTuKySQ4syI9XkO7uZkD%2F0ricwfG83OU52kQw%2BHQ%2FgoqdxcqjLSPbyYlUx2Xf8kbR9yetCSPzi1KtJyL69vsj5Zmmggex2hLN9YjwFo0mhBaoKdNWgeloFMYOoXmovMb1nb4TSUAps4tMg%2FDv1y4oBfTCZAmhk28PvOoomxsnFnatBRqadgpqI%2F0Q75%2BgDDHsvfBBjqkAV6l1M5CPvb1D5c3PECb4jEUwEn8WEM1f1LCdV6cLzD9P9J4XbW63DVn1trbIJOkzO2E%2Bx4a4o6gj4dK4Q5z2hKBPnj5Ny2ECy2lxVcBdapCjt3%2FN4EK%2BnsSHOy0bl6ZeAFpoMxi%2BNvDRp5bFLPLdGbZyGptogmt4XL9QZJui%2FVcicrN7gj04DwuW5viYcbHH4f%2Bo3F2%2BZUfd4uZvN7%2BPhvRu4%2FG&X-Amz-Signature=4e0fb1da884f4ec54cc67559fe83bee90fab945c1016b635a8729ea784181ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQWCALV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCsktYOVQiHZ9%2BQIAqPn7kZ9nWlnW9iIGl09h0ZTzrIXAIhAI6%2FLZbbEXUWkXm%2FClpv%2BU9wrtVyWHNkuXtqByCS3W%2BMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTJj207IrcWCq7gg0q3AMZ%2FAlrvNEsH%2B2HJVcqAlET6zP%2BkVCwCqCIexCFh4rEe5TUNzRZ33IbaRacwC8EMdStnbwue6qxuilwZdAj7Zb1hyhtKSoBxezmo9EkfqJVEwwc%2B%2Fzrumt9NSvtOYVtGm7my%2FNm9mf2HrW9JiPO%2FTm19%2Fg%2FwOO6vQyS1JKa5HwibegICY7%2FPPlAK7AemVKgrQWxrN8kqgrtIU28lp7o4KO3qyeOfDoNixqGTQnkO4u9y2OosePbZ7T3wYDiIr7%2BIgiwK4BHKVjyYeYTA5F0jJFMSAfBYMxVxwHrEZukzDEEC50mckOSyajef7TE%2FS5fCCXfe77eZ1i5%2B%2FmMUQTzM9PF2uPoiA3zJX%2B42zoJOQ%2B9qneTumOeK9JX7irjbPFThLfP4C52RH1cSBtvZ2IIasWRFgMMcrjyqHDBHQ%2F2OJzRfNr79CQC8RX8kpF52PeTKTuKySQ4syI9XkO7uZkD%2F0ricwfG83OU52kQw%2BHQ%2FgoqdxcqjLSPbyYlUx2Xf8kbR9yetCSPzi1KtJyL69vsj5Zmmggex2hLN9YjwFo0mhBaoKdNWgeloFMYOoXmovMb1nb4TSUAps4tMg%2FDv1y4oBfTCZAmhk28PvOoomxsnFnatBRqadgpqI%2F0Q75%2BgDDHsvfBBjqkAV6l1M5CPvb1D5c3PECb4jEUwEn8WEM1f1LCdV6cLzD9P9J4XbW63DVn1trbIJOkzO2E%2Bx4a4o6gj4dK4Q5z2hKBPnj5Ny2ECy2lxVcBdapCjt3%2FN4EK%2BnsSHOy0bl6ZeAFpoMxi%2BNvDRp5bFLPLdGbZyGptogmt4XL9QZJui%2FVcicrN7gj04DwuW5viYcbHH4f%2Bo3F2%2BZUfd4uZvN7%2BPhvRu4%2FG&X-Amz-Signature=ab2150a9b492ac5c7a159454279bea910cb08988d15036067c541606857cea09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQWCALV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCsktYOVQiHZ9%2BQIAqPn7kZ9nWlnW9iIGl09h0ZTzrIXAIhAI6%2FLZbbEXUWkXm%2FClpv%2BU9wrtVyWHNkuXtqByCS3W%2BMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTJj207IrcWCq7gg0q3AMZ%2FAlrvNEsH%2B2HJVcqAlET6zP%2BkVCwCqCIexCFh4rEe5TUNzRZ33IbaRacwC8EMdStnbwue6qxuilwZdAj7Zb1hyhtKSoBxezmo9EkfqJVEwwc%2B%2Fzrumt9NSvtOYVtGm7my%2FNm9mf2HrW9JiPO%2FTm19%2Fg%2FwOO6vQyS1JKa5HwibegICY7%2FPPlAK7AemVKgrQWxrN8kqgrtIU28lp7o4KO3qyeOfDoNixqGTQnkO4u9y2OosePbZ7T3wYDiIr7%2BIgiwK4BHKVjyYeYTA5F0jJFMSAfBYMxVxwHrEZukzDEEC50mckOSyajef7TE%2FS5fCCXfe77eZ1i5%2B%2FmMUQTzM9PF2uPoiA3zJX%2B42zoJOQ%2B9qneTumOeK9JX7irjbPFThLfP4C52RH1cSBtvZ2IIasWRFgMMcrjyqHDBHQ%2F2OJzRfNr79CQC8RX8kpF52PeTKTuKySQ4syI9XkO7uZkD%2F0ricwfG83OU52kQw%2BHQ%2FgoqdxcqjLSPbyYlUx2Xf8kbR9yetCSPzi1KtJyL69vsj5Zmmggex2hLN9YjwFo0mhBaoKdNWgeloFMYOoXmovMb1nb4TSUAps4tMg%2FDv1y4oBfTCZAmhk28PvOoomxsnFnatBRqadgpqI%2F0Q75%2BgDDHsvfBBjqkAV6l1M5CPvb1D5c3PECb4jEUwEn8WEM1f1LCdV6cLzD9P9J4XbW63DVn1trbIJOkzO2E%2Bx4a4o6gj4dK4Q5z2hKBPnj5Ny2ECy2lxVcBdapCjt3%2FN4EK%2BnsSHOy0bl6ZeAFpoMxi%2BNvDRp5bFLPLdGbZyGptogmt4XL9QZJui%2FVcicrN7gj04DwuW5viYcbHH4f%2Bo3F2%2BZUfd4uZvN7%2BPhvRu4%2FG&X-Amz-Signature=2a77793c72a67805b5e5fb63796038a7a7236f84f2a5314fec3a5e2a8a8e66f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQWCALV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCsktYOVQiHZ9%2BQIAqPn7kZ9nWlnW9iIGl09h0ZTzrIXAIhAI6%2FLZbbEXUWkXm%2FClpv%2BU9wrtVyWHNkuXtqByCS3W%2BMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTJj207IrcWCq7gg0q3AMZ%2FAlrvNEsH%2B2HJVcqAlET6zP%2BkVCwCqCIexCFh4rEe5TUNzRZ33IbaRacwC8EMdStnbwue6qxuilwZdAj7Zb1hyhtKSoBxezmo9EkfqJVEwwc%2B%2Fzrumt9NSvtOYVtGm7my%2FNm9mf2HrW9JiPO%2FTm19%2Fg%2FwOO6vQyS1JKa5HwibegICY7%2FPPlAK7AemVKgrQWxrN8kqgrtIU28lp7o4KO3qyeOfDoNixqGTQnkO4u9y2OosePbZ7T3wYDiIr7%2BIgiwK4BHKVjyYeYTA5F0jJFMSAfBYMxVxwHrEZukzDEEC50mckOSyajef7TE%2FS5fCCXfe77eZ1i5%2B%2FmMUQTzM9PF2uPoiA3zJX%2B42zoJOQ%2B9qneTumOeK9JX7irjbPFThLfP4C52RH1cSBtvZ2IIasWRFgMMcrjyqHDBHQ%2F2OJzRfNr79CQC8RX8kpF52PeTKTuKySQ4syI9XkO7uZkD%2F0ricwfG83OU52kQw%2BHQ%2FgoqdxcqjLSPbyYlUx2Xf8kbR9yetCSPzi1KtJyL69vsj5Zmmggex2hLN9YjwFo0mhBaoKdNWgeloFMYOoXmovMb1nb4TSUAps4tMg%2FDv1y4oBfTCZAmhk28PvOoomxsnFnatBRqadgpqI%2F0Q75%2BgDDHsvfBBjqkAV6l1M5CPvb1D5c3PECb4jEUwEn8WEM1f1LCdV6cLzD9P9J4XbW63DVn1trbIJOkzO2E%2Bx4a4o6gj4dK4Q5z2hKBPnj5Ny2ECy2lxVcBdapCjt3%2FN4EK%2BnsSHOy0bl6ZeAFpoMxi%2BNvDRp5bFLPLdGbZyGptogmt4XL9QZJui%2FVcicrN7gj04DwuW5viYcbHH4f%2Bo3F2%2BZUfd4uZvN7%2BPhvRu4%2FG&X-Amz-Signature=4df9b9fed701905b3aa37395d9f7a8d0ce4927b3c201f3f21cf07d78a5413339&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQWCALV%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T170940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCsktYOVQiHZ9%2BQIAqPn7kZ9nWlnW9iIGl09h0ZTzrIXAIhAI6%2FLZbbEXUWkXm%2FClpv%2BU9wrtVyWHNkuXtqByCS3W%2BMKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTJj207IrcWCq7gg0q3AMZ%2FAlrvNEsH%2B2HJVcqAlET6zP%2BkVCwCqCIexCFh4rEe5TUNzRZ33IbaRacwC8EMdStnbwue6qxuilwZdAj7Zb1hyhtKSoBxezmo9EkfqJVEwwc%2B%2Fzrumt9NSvtOYVtGm7my%2FNm9mf2HrW9JiPO%2FTm19%2Fg%2FwOO6vQyS1JKa5HwibegICY7%2FPPlAK7AemVKgrQWxrN8kqgrtIU28lp7o4KO3qyeOfDoNixqGTQnkO4u9y2OosePbZ7T3wYDiIr7%2BIgiwK4BHKVjyYeYTA5F0jJFMSAfBYMxVxwHrEZukzDEEC50mckOSyajef7TE%2FS5fCCXfe77eZ1i5%2B%2FmMUQTzM9PF2uPoiA3zJX%2B42zoJOQ%2B9qneTumOeK9JX7irjbPFThLfP4C52RH1cSBtvZ2IIasWRFgMMcrjyqHDBHQ%2F2OJzRfNr79CQC8RX8kpF52PeTKTuKySQ4syI9XkO7uZkD%2F0ricwfG83OU52kQw%2BHQ%2FgoqdxcqjLSPbyYlUx2Xf8kbR9yetCSPzi1KtJyL69vsj5Zmmggex2hLN9YjwFo0mhBaoKdNWgeloFMYOoXmovMb1nb4TSUAps4tMg%2FDv1y4oBfTCZAmhk28PvOoomxsnFnatBRqadgpqI%2F0Q75%2BgDDHsvfBBjqkAV6l1M5CPvb1D5c3PECb4jEUwEn8WEM1f1LCdV6cLzD9P9J4XbW63DVn1trbIJOkzO2E%2Bx4a4o6gj4dK4Q5z2hKBPnj5Ny2ECy2lxVcBdapCjt3%2FN4EK%2BnsSHOy0bl6ZeAFpoMxi%2BNvDRp5bFLPLdGbZyGptogmt4XL9QZJui%2FVcicrN7gj04DwuW5viYcbHH4f%2Bo3F2%2BZUfd4uZvN7%2BPhvRu4%2FG&X-Amz-Signature=d1f02363c8f0fc3112bd309164904f83cbac7747ba79cd94b05c923cac28178b&X-Amz-SignedHeaders=host&x-id=GetObject)
