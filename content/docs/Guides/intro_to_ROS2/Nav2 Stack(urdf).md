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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVE3TTF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkUEzIEZaxQtDW84bZQegYyPL60E%2Bq0S%2BvtxCgFGhegIgDso5gAygElyvdMUAXJD8rPWw47fY1NXqlBt31RfWcsIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXAtCQ%2FH5l6mQlovSrcA8xF5Y3h4utxkEf6paNIDZ4qdw%2FL6J3Nv6nOGzCqUSQ%2F1a%2FZppsDlNuemZZN2z3l%2BTu4KI12derN2NlyaKh565PUrRaxc20FJuIfiDYx%2BlFUy0lj9Qb05o9tHnYFDPZM97%2FC4ZjW1KUogXZhCyJUjDSmcV11l%2FImEkS%2F9T1Z5A8igbU7xx6xP0qNpypPPGpFL83ggPd4g6INPY1eAwcDHCuMiACDuHeKq6yITEVA1yTsPPXR0Mz8aUZ%2Fe94QLAQeKHQqdurQ46i4nmo%2FXtiY9l06drJX%2B1fJw1zIQZcxmoSxS9qaEz6YIyTulNYoSuhwh8cJBxx9mlgnUY3gvRRGzX7f2uKFJ%2B19NxlORkF6XBsqbPtVTHBYt%2FVKjb4P2ZaaGGEfbV2EnyKe3shbgyAL53natkvVEVB7R45CtAyqluAz%2FyHsIxKqAj857UQh36oFiYbY20J72KG4%2B1ggA9ZzjKBsWL4o5Iu8hq7i1X7hXLpKbEywqrtOTDFIvrrLGyEprMZDkZbvi9vdD%2BzXOTE571cc6TuZHtpR%2F4UrzoUzWV76%2BQ3GGgw8W3HuCRMycPVOhADp56gmMeIKPFXpvXQmo8mN3DIB3cL2ZSTgnBU2RYPX4Pckx2X5rLw%2BKPvaMNeg%2FsIGOqUBAqZVERYiRVsAUw47XDA2%2Fg8lY1O%2BuZTbrNmj9VO2wgqfngSop6tN6JYD8nvUP21QFTTb25XjIlSkajl%2BJqThtB2CWNPKQpzOJypOU6%2BvbqqvAQbETEmQDmUv4h2m0WGDC26069cXYhP8xrQe5RfWKZMRKA1hPVzGfKyHFHjP0iCh0weutLHaBiRu7eRriRC0p4k4z60p%2B9AksT9%2BF0qAOjJt9gg5&X-Amz-Signature=a8702e204495d9f9f82e8e049e38785c5a217d186381274fa625fab83b21e0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVE3TTF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkUEzIEZaxQtDW84bZQegYyPL60E%2Bq0S%2BvtxCgFGhegIgDso5gAygElyvdMUAXJD8rPWw47fY1NXqlBt31RfWcsIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXAtCQ%2FH5l6mQlovSrcA8xF5Y3h4utxkEf6paNIDZ4qdw%2FL6J3Nv6nOGzCqUSQ%2F1a%2FZppsDlNuemZZN2z3l%2BTu4KI12derN2NlyaKh565PUrRaxc20FJuIfiDYx%2BlFUy0lj9Qb05o9tHnYFDPZM97%2FC4ZjW1KUogXZhCyJUjDSmcV11l%2FImEkS%2F9T1Z5A8igbU7xx6xP0qNpypPPGpFL83ggPd4g6INPY1eAwcDHCuMiACDuHeKq6yITEVA1yTsPPXR0Mz8aUZ%2Fe94QLAQeKHQqdurQ46i4nmo%2FXtiY9l06drJX%2B1fJw1zIQZcxmoSxS9qaEz6YIyTulNYoSuhwh8cJBxx9mlgnUY3gvRRGzX7f2uKFJ%2B19NxlORkF6XBsqbPtVTHBYt%2FVKjb4P2ZaaGGEfbV2EnyKe3shbgyAL53natkvVEVB7R45CtAyqluAz%2FyHsIxKqAj857UQh36oFiYbY20J72KG4%2B1ggA9ZzjKBsWL4o5Iu8hq7i1X7hXLpKbEywqrtOTDFIvrrLGyEprMZDkZbvi9vdD%2BzXOTE571cc6TuZHtpR%2F4UrzoUzWV76%2BQ3GGgw8W3HuCRMycPVOhADp56gmMeIKPFXpvXQmo8mN3DIB3cL2ZSTgnBU2RYPX4Pckx2X5rLw%2BKPvaMNeg%2FsIGOqUBAqZVERYiRVsAUw47XDA2%2Fg8lY1O%2BuZTbrNmj9VO2wgqfngSop6tN6JYD8nvUP21QFTTb25XjIlSkajl%2BJqThtB2CWNPKQpzOJypOU6%2BvbqqvAQbETEmQDmUv4h2m0WGDC26069cXYhP8xrQe5RfWKZMRKA1hPVzGfKyHFHjP0iCh0weutLHaBiRu7eRriRC0p4k4z60p%2B9AksT9%2BF0qAOjJt9gg5&X-Amz-Signature=bdea25afdbff7ddc6d3b846aeda4b3ef5bfb882093c4fd3ebaf787a46058ca48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVE3TTF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkUEzIEZaxQtDW84bZQegYyPL60E%2Bq0S%2BvtxCgFGhegIgDso5gAygElyvdMUAXJD8rPWw47fY1NXqlBt31RfWcsIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXAtCQ%2FH5l6mQlovSrcA8xF5Y3h4utxkEf6paNIDZ4qdw%2FL6J3Nv6nOGzCqUSQ%2F1a%2FZppsDlNuemZZN2z3l%2BTu4KI12derN2NlyaKh565PUrRaxc20FJuIfiDYx%2BlFUy0lj9Qb05o9tHnYFDPZM97%2FC4ZjW1KUogXZhCyJUjDSmcV11l%2FImEkS%2F9T1Z5A8igbU7xx6xP0qNpypPPGpFL83ggPd4g6INPY1eAwcDHCuMiACDuHeKq6yITEVA1yTsPPXR0Mz8aUZ%2Fe94QLAQeKHQqdurQ46i4nmo%2FXtiY9l06drJX%2B1fJw1zIQZcxmoSxS9qaEz6YIyTulNYoSuhwh8cJBxx9mlgnUY3gvRRGzX7f2uKFJ%2B19NxlORkF6XBsqbPtVTHBYt%2FVKjb4P2ZaaGGEfbV2EnyKe3shbgyAL53natkvVEVB7R45CtAyqluAz%2FyHsIxKqAj857UQh36oFiYbY20J72KG4%2B1ggA9ZzjKBsWL4o5Iu8hq7i1X7hXLpKbEywqrtOTDFIvrrLGyEprMZDkZbvi9vdD%2BzXOTE571cc6TuZHtpR%2F4UrzoUzWV76%2BQ3GGgw8W3HuCRMycPVOhADp56gmMeIKPFXpvXQmo8mN3DIB3cL2ZSTgnBU2RYPX4Pckx2X5rLw%2BKPvaMNeg%2FsIGOqUBAqZVERYiRVsAUw47XDA2%2Fg8lY1O%2BuZTbrNmj9VO2wgqfngSop6tN6JYD8nvUP21QFTTb25XjIlSkajl%2BJqThtB2CWNPKQpzOJypOU6%2BvbqqvAQbETEmQDmUv4h2m0WGDC26069cXYhP8xrQe5RfWKZMRKA1hPVzGfKyHFHjP0iCh0weutLHaBiRu7eRriRC0p4k4z60p%2B9AksT9%2BF0qAOjJt9gg5&X-Amz-Signature=48fb4d51409928072f93e033a035111f07c15a7f85047aa6b880a2f21aa17606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVE3TTF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkUEzIEZaxQtDW84bZQegYyPL60E%2Bq0S%2BvtxCgFGhegIgDso5gAygElyvdMUAXJD8rPWw47fY1NXqlBt31RfWcsIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXAtCQ%2FH5l6mQlovSrcA8xF5Y3h4utxkEf6paNIDZ4qdw%2FL6J3Nv6nOGzCqUSQ%2F1a%2FZppsDlNuemZZN2z3l%2BTu4KI12derN2NlyaKh565PUrRaxc20FJuIfiDYx%2BlFUy0lj9Qb05o9tHnYFDPZM97%2FC4ZjW1KUogXZhCyJUjDSmcV11l%2FImEkS%2F9T1Z5A8igbU7xx6xP0qNpypPPGpFL83ggPd4g6INPY1eAwcDHCuMiACDuHeKq6yITEVA1yTsPPXR0Mz8aUZ%2Fe94QLAQeKHQqdurQ46i4nmo%2FXtiY9l06drJX%2B1fJw1zIQZcxmoSxS9qaEz6YIyTulNYoSuhwh8cJBxx9mlgnUY3gvRRGzX7f2uKFJ%2B19NxlORkF6XBsqbPtVTHBYt%2FVKjb4P2ZaaGGEfbV2EnyKe3shbgyAL53natkvVEVB7R45CtAyqluAz%2FyHsIxKqAj857UQh36oFiYbY20J72KG4%2B1ggA9ZzjKBsWL4o5Iu8hq7i1X7hXLpKbEywqrtOTDFIvrrLGyEprMZDkZbvi9vdD%2BzXOTE571cc6TuZHtpR%2F4UrzoUzWV76%2BQ3GGgw8W3HuCRMycPVOhADp56gmMeIKPFXpvXQmo8mN3DIB3cL2ZSTgnBU2RYPX4Pckx2X5rLw%2BKPvaMNeg%2FsIGOqUBAqZVERYiRVsAUw47XDA2%2Fg8lY1O%2BuZTbrNmj9VO2wgqfngSop6tN6JYD8nvUP21QFTTb25XjIlSkajl%2BJqThtB2CWNPKQpzOJypOU6%2BvbqqvAQbETEmQDmUv4h2m0WGDC26069cXYhP8xrQe5RfWKZMRKA1hPVzGfKyHFHjP0iCh0weutLHaBiRu7eRriRC0p4k4z60p%2B9AksT9%2BF0qAOjJt9gg5&X-Amz-Signature=612e07d3a85f7902639d3f637fe46d27212f8c3bab6e699d2830061a8fd231b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVE3TTF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkUEzIEZaxQtDW84bZQegYyPL60E%2Bq0S%2BvtxCgFGhegIgDso5gAygElyvdMUAXJD8rPWw47fY1NXqlBt31RfWcsIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXAtCQ%2FH5l6mQlovSrcA8xF5Y3h4utxkEf6paNIDZ4qdw%2FL6J3Nv6nOGzCqUSQ%2F1a%2FZppsDlNuemZZN2z3l%2BTu4KI12derN2NlyaKh565PUrRaxc20FJuIfiDYx%2BlFUy0lj9Qb05o9tHnYFDPZM97%2FC4ZjW1KUogXZhCyJUjDSmcV11l%2FImEkS%2F9T1Z5A8igbU7xx6xP0qNpypPPGpFL83ggPd4g6INPY1eAwcDHCuMiACDuHeKq6yITEVA1yTsPPXR0Mz8aUZ%2Fe94QLAQeKHQqdurQ46i4nmo%2FXtiY9l06drJX%2B1fJw1zIQZcxmoSxS9qaEz6YIyTulNYoSuhwh8cJBxx9mlgnUY3gvRRGzX7f2uKFJ%2B19NxlORkF6XBsqbPtVTHBYt%2FVKjb4P2ZaaGGEfbV2EnyKe3shbgyAL53natkvVEVB7R45CtAyqluAz%2FyHsIxKqAj857UQh36oFiYbY20J72KG4%2B1ggA9ZzjKBsWL4o5Iu8hq7i1X7hXLpKbEywqrtOTDFIvrrLGyEprMZDkZbvi9vdD%2BzXOTE571cc6TuZHtpR%2F4UrzoUzWV76%2BQ3GGgw8W3HuCRMycPVOhADp56gmMeIKPFXpvXQmo8mN3DIB3cL2ZSTgnBU2RYPX4Pckx2X5rLw%2BKPvaMNeg%2FsIGOqUBAqZVERYiRVsAUw47XDA2%2Fg8lY1O%2BuZTbrNmj9VO2wgqfngSop6tN6JYD8nvUP21QFTTb25XjIlSkajl%2BJqThtB2CWNPKQpzOJypOU6%2BvbqqvAQbETEmQDmUv4h2m0WGDC26069cXYhP8xrQe5RfWKZMRKA1hPVzGfKyHFHjP0iCh0weutLHaBiRu7eRriRC0p4k4z60p%2B9AksT9%2BF0qAOjJt9gg5&X-Amz-Signature=fa4a4f5b612b093c89afbc8bb22e450bda7941d7530cec376073d7285d234714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JVE3TTF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkkUEzIEZaxQtDW84bZQegYyPL60E%2Bq0S%2BvtxCgFGhegIgDso5gAygElyvdMUAXJD8rPWw47fY1NXqlBt31RfWcsIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXAtCQ%2FH5l6mQlovSrcA8xF5Y3h4utxkEf6paNIDZ4qdw%2FL6J3Nv6nOGzCqUSQ%2F1a%2FZppsDlNuemZZN2z3l%2BTu4KI12derN2NlyaKh565PUrRaxc20FJuIfiDYx%2BlFUy0lj9Qb05o9tHnYFDPZM97%2FC4ZjW1KUogXZhCyJUjDSmcV11l%2FImEkS%2F9T1Z5A8igbU7xx6xP0qNpypPPGpFL83ggPd4g6INPY1eAwcDHCuMiACDuHeKq6yITEVA1yTsPPXR0Mz8aUZ%2Fe94QLAQeKHQqdurQ46i4nmo%2FXtiY9l06drJX%2B1fJw1zIQZcxmoSxS9qaEz6YIyTulNYoSuhwh8cJBxx9mlgnUY3gvRRGzX7f2uKFJ%2B19NxlORkF6XBsqbPtVTHBYt%2FVKjb4P2ZaaGGEfbV2EnyKe3shbgyAL53natkvVEVB7R45CtAyqluAz%2FyHsIxKqAj857UQh36oFiYbY20J72KG4%2B1ggA9ZzjKBsWL4o5Iu8hq7i1X7hXLpKbEywqrtOTDFIvrrLGyEprMZDkZbvi9vdD%2BzXOTE571cc6TuZHtpR%2F4UrzoUzWV76%2BQ3GGgw8W3HuCRMycPVOhADp56gmMeIKPFXpvXQmo8mN3DIB3cL2ZSTgnBU2RYPX4Pckx2X5rLw%2BKPvaMNeg%2FsIGOqUBAqZVERYiRVsAUw47XDA2%2Fg8lY1O%2BuZTbrNmj9VO2wgqfngSop6tN6JYD8nvUP21QFTTb25XjIlSkajl%2BJqThtB2CWNPKQpzOJypOU6%2BvbqqvAQbETEmQDmUv4h2m0WGDC26069cXYhP8xrQe5RfWKZMRKA1hPVzGfKyHFHjP0iCh0weutLHaBiRu7eRriRC0p4k4z60p%2B9AksT9%2BF0qAOjJt9gg5&X-Amz-Signature=94bd480c3a824f2f9ac987c33a77df1ce9372e81d88ba89c411ce7ff9746a830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
