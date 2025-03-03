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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDINBJB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv%2FVK0EP%2FQ4JMGAJv4phoUT%2Ba5OAtmUCo0eiifkvmqZAiEA4TKzxf0qEd3db%2BhSZz%2FsYyFZGo0TaI6ykS7MznuHErUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZifGvSg1SXpv3hPircAx6wEjIdIJv435yqrWqELmZkXuISs3mWJSLeisorr74dvY9Zl%2BZdO0TPmVXFnlCmCIYNPQe%2FDX2fDcRSHUX4iaihoxl6Or6Ghxt8RImZ%2Fbcx%2FpX3RrQMgyNFSuUigOmOxRRuuqLGd1AdOVEEDkI01SBp4v1ogd3NK2XmXuZUHHauD1rhmjvePnb%2BwQxUpe6jYnrPSisZyfvVJsFIPJAASWnFF%2BLPwkC%2Fed7pAlcJ9ZO1J4%2BW6%2FjEEbFmDdeVobca3sxQolBT1Th5n1hSqmYmHiJgqLzhOLnqWy%2BEQV1muIav%2B83aJNSIFmBhqcVzy3wUpz77gWaFcP7ilNFBk1uQ0nv8tS2CnNfi0AxfxXacsPESOrZvsvEN%2BPS0wYsO7AT3ZufUoPKvf2IKuj5b4CGr36WusPQb0ZfP%2B2KNrl%2BDV9QF8O9PNIaZ1ZtS54jji9ZCQOYWRIwNO2WGdBVIsnHf6%2FyH363i9rIA2Ofvwcsaw8ljvyS%2F8ubSIhEPnKZhlc1%2FBZwUsLq6H%2FXQTzEgwvJgDKDWE%2Bka5Ntn3S8qWUCk7GAMNo5KvKgqwSsnTolW%2B4h4OBVKSBKsniN9lE1VKd21Sja4OlYO9QLVVwTFNB8HRTko3UijlBFT04%2F8idf6MMaglL4GOqUBXFy%2FEWWTsJgA1euWvRfZmM3b5phJRJgqXA3mYzfY8Kk%2B57No4HdaxFxJSYgf5LGq3qYPatSNJ2aZTE87dYHXvqHQMDoxM%2FHhJD1OHbHssf9jDcCKZR9%2F9L5gPDwWu%2FNlfYzW%2FJ6xIhky4KKdITLyxmC5oCFlArrFEDeXDDAGNKdwUijqxdLRfMUJdNkUais1vtDGgATk48lAqFANR27NUxQuUlan&X-Amz-Signature=c541dc8514de1dd3af80a4228c1a7accb8e7c3024e80eb912fed929b9d618448&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDINBJB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv%2FVK0EP%2FQ4JMGAJv4phoUT%2Ba5OAtmUCo0eiifkvmqZAiEA4TKzxf0qEd3db%2BhSZz%2FsYyFZGo0TaI6ykS7MznuHErUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZifGvSg1SXpv3hPircAx6wEjIdIJv435yqrWqELmZkXuISs3mWJSLeisorr74dvY9Zl%2BZdO0TPmVXFnlCmCIYNPQe%2FDX2fDcRSHUX4iaihoxl6Or6Ghxt8RImZ%2Fbcx%2FpX3RrQMgyNFSuUigOmOxRRuuqLGd1AdOVEEDkI01SBp4v1ogd3NK2XmXuZUHHauD1rhmjvePnb%2BwQxUpe6jYnrPSisZyfvVJsFIPJAASWnFF%2BLPwkC%2Fed7pAlcJ9ZO1J4%2BW6%2FjEEbFmDdeVobca3sxQolBT1Th5n1hSqmYmHiJgqLzhOLnqWy%2BEQV1muIav%2B83aJNSIFmBhqcVzy3wUpz77gWaFcP7ilNFBk1uQ0nv8tS2CnNfi0AxfxXacsPESOrZvsvEN%2BPS0wYsO7AT3ZufUoPKvf2IKuj5b4CGr36WusPQb0ZfP%2B2KNrl%2BDV9QF8O9PNIaZ1ZtS54jji9ZCQOYWRIwNO2WGdBVIsnHf6%2FyH363i9rIA2Ofvwcsaw8ljvyS%2F8ubSIhEPnKZhlc1%2FBZwUsLq6H%2FXQTzEgwvJgDKDWE%2Bka5Ntn3S8qWUCk7GAMNo5KvKgqwSsnTolW%2B4h4OBVKSBKsniN9lE1VKd21Sja4OlYO9QLVVwTFNB8HRTko3UijlBFT04%2F8idf6MMaglL4GOqUBXFy%2FEWWTsJgA1euWvRfZmM3b5phJRJgqXA3mYzfY8Kk%2B57No4HdaxFxJSYgf5LGq3qYPatSNJ2aZTE87dYHXvqHQMDoxM%2FHhJD1OHbHssf9jDcCKZR9%2F9L5gPDwWu%2FNlfYzW%2FJ6xIhky4KKdITLyxmC5oCFlArrFEDeXDDAGNKdwUijqxdLRfMUJdNkUais1vtDGgATk48lAqFANR27NUxQuUlan&X-Amz-Signature=236130c246341e86a635f4c619d6712fe4a504c9ec61c7d8a3db8f9b16e80d66&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDINBJB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv%2FVK0EP%2FQ4JMGAJv4phoUT%2Ba5OAtmUCo0eiifkvmqZAiEA4TKzxf0qEd3db%2BhSZz%2FsYyFZGo0TaI6ykS7MznuHErUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZifGvSg1SXpv3hPircAx6wEjIdIJv435yqrWqELmZkXuISs3mWJSLeisorr74dvY9Zl%2BZdO0TPmVXFnlCmCIYNPQe%2FDX2fDcRSHUX4iaihoxl6Or6Ghxt8RImZ%2Fbcx%2FpX3RrQMgyNFSuUigOmOxRRuuqLGd1AdOVEEDkI01SBp4v1ogd3NK2XmXuZUHHauD1rhmjvePnb%2BwQxUpe6jYnrPSisZyfvVJsFIPJAASWnFF%2BLPwkC%2Fed7pAlcJ9ZO1J4%2BW6%2FjEEbFmDdeVobca3sxQolBT1Th5n1hSqmYmHiJgqLzhOLnqWy%2BEQV1muIav%2B83aJNSIFmBhqcVzy3wUpz77gWaFcP7ilNFBk1uQ0nv8tS2CnNfi0AxfxXacsPESOrZvsvEN%2BPS0wYsO7AT3ZufUoPKvf2IKuj5b4CGr36WusPQb0ZfP%2B2KNrl%2BDV9QF8O9PNIaZ1ZtS54jji9ZCQOYWRIwNO2WGdBVIsnHf6%2FyH363i9rIA2Ofvwcsaw8ljvyS%2F8ubSIhEPnKZhlc1%2FBZwUsLq6H%2FXQTzEgwvJgDKDWE%2Bka5Ntn3S8qWUCk7GAMNo5KvKgqwSsnTolW%2B4h4OBVKSBKsniN9lE1VKd21Sja4OlYO9QLVVwTFNB8HRTko3UijlBFT04%2F8idf6MMaglL4GOqUBXFy%2FEWWTsJgA1euWvRfZmM3b5phJRJgqXA3mYzfY8Kk%2B57No4HdaxFxJSYgf5LGq3qYPatSNJ2aZTE87dYHXvqHQMDoxM%2FHhJD1OHbHssf9jDcCKZR9%2F9L5gPDwWu%2FNlfYzW%2FJ6xIhky4KKdITLyxmC5oCFlArrFEDeXDDAGNKdwUijqxdLRfMUJdNkUais1vtDGgATk48lAqFANR27NUxQuUlan&X-Amz-Signature=2aeae16b235346597e30a0401236b6a07bd858e844b735e98e44ea3acaf35d36&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDINBJB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv%2FVK0EP%2FQ4JMGAJv4phoUT%2Ba5OAtmUCo0eiifkvmqZAiEA4TKzxf0qEd3db%2BhSZz%2FsYyFZGo0TaI6ykS7MznuHErUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZifGvSg1SXpv3hPircAx6wEjIdIJv435yqrWqELmZkXuISs3mWJSLeisorr74dvY9Zl%2BZdO0TPmVXFnlCmCIYNPQe%2FDX2fDcRSHUX4iaihoxl6Or6Ghxt8RImZ%2Fbcx%2FpX3RrQMgyNFSuUigOmOxRRuuqLGd1AdOVEEDkI01SBp4v1ogd3NK2XmXuZUHHauD1rhmjvePnb%2BwQxUpe6jYnrPSisZyfvVJsFIPJAASWnFF%2BLPwkC%2Fed7pAlcJ9ZO1J4%2BW6%2FjEEbFmDdeVobca3sxQolBT1Th5n1hSqmYmHiJgqLzhOLnqWy%2BEQV1muIav%2B83aJNSIFmBhqcVzy3wUpz77gWaFcP7ilNFBk1uQ0nv8tS2CnNfi0AxfxXacsPESOrZvsvEN%2BPS0wYsO7AT3ZufUoPKvf2IKuj5b4CGr36WusPQb0ZfP%2B2KNrl%2BDV9QF8O9PNIaZ1ZtS54jji9ZCQOYWRIwNO2WGdBVIsnHf6%2FyH363i9rIA2Ofvwcsaw8ljvyS%2F8ubSIhEPnKZhlc1%2FBZwUsLq6H%2FXQTzEgwvJgDKDWE%2Bka5Ntn3S8qWUCk7GAMNo5KvKgqwSsnTolW%2B4h4OBVKSBKsniN9lE1VKd21Sja4OlYO9QLVVwTFNB8HRTko3UijlBFT04%2F8idf6MMaglL4GOqUBXFy%2FEWWTsJgA1euWvRfZmM3b5phJRJgqXA3mYzfY8Kk%2B57No4HdaxFxJSYgf5LGq3qYPatSNJ2aZTE87dYHXvqHQMDoxM%2FHhJD1OHbHssf9jDcCKZR9%2F9L5gPDwWu%2FNlfYzW%2FJ6xIhky4KKdITLyxmC5oCFlArrFEDeXDDAGNKdwUijqxdLRfMUJdNkUais1vtDGgATk48lAqFANR27NUxQuUlan&X-Amz-Signature=cd380f5673b850600859f7c6aa1ec9ce89e45aea9df20bc6dd4ce18c6a480dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDINBJB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv%2FVK0EP%2FQ4JMGAJv4phoUT%2Ba5OAtmUCo0eiifkvmqZAiEA4TKzxf0qEd3db%2BhSZz%2FsYyFZGo0TaI6ykS7MznuHErUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZifGvSg1SXpv3hPircAx6wEjIdIJv435yqrWqELmZkXuISs3mWJSLeisorr74dvY9Zl%2BZdO0TPmVXFnlCmCIYNPQe%2FDX2fDcRSHUX4iaihoxl6Or6Ghxt8RImZ%2Fbcx%2FpX3RrQMgyNFSuUigOmOxRRuuqLGd1AdOVEEDkI01SBp4v1ogd3NK2XmXuZUHHauD1rhmjvePnb%2BwQxUpe6jYnrPSisZyfvVJsFIPJAASWnFF%2BLPwkC%2Fed7pAlcJ9ZO1J4%2BW6%2FjEEbFmDdeVobca3sxQolBT1Th5n1hSqmYmHiJgqLzhOLnqWy%2BEQV1muIav%2B83aJNSIFmBhqcVzy3wUpz77gWaFcP7ilNFBk1uQ0nv8tS2CnNfi0AxfxXacsPESOrZvsvEN%2BPS0wYsO7AT3ZufUoPKvf2IKuj5b4CGr36WusPQb0ZfP%2B2KNrl%2BDV9QF8O9PNIaZ1ZtS54jji9ZCQOYWRIwNO2WGdBVIsnHf6%2FyH363i9rIA2Ofvwcsaw8ljvyS%2F8ubSIhEPnKZhlc1%2FBZwUsLq6H%2FXQTzEgwvJgDKDWE%2Bka5Ntn3S8qWUCk7GAMNo5KvKgqwSsnTolW%2B4h4OBVKSBKsniN9lE1VKd21Sja4OlYO9QLVVwTFNB8HRTko3UijlBFT04%2F8idf6MMaglL4GOqUBXFy%2FEWWTsJgA1euWvRfZmM3b5phJRJgqXA3mYzfY8Kk%2B57No4HdaxFxJSYgf5LGq3qYPatSNJ2aZTE87dYHXvqHQMDoxM%2FHhJD1OHbHssf9jDcCKZR9%2F9L5gPDwWu%2FNlfYzW%2FJ6xIhky4KKdITLyxmC5oCFlArrFEDeXDDAGNKdwUijqxdLRfMUJdNkUais1vtDGgATk48lAqFANR27NUxQuUlan&X-Amz-Signature=19491147e85fa6069815ebc79784d0e6f6b4c8ae9998f12c899dc322aec1093d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLDINBJB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv%2FVK0EP%2FQ4JMGAJv4phoUT%2Ba5OAtmUCo0eiifkvmqZAiEA4TKzxf0qEd3db%2BhSZz%2FsYyFZGo0TaI6ykS7MznuHErUqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZifGvSg1SXpv3hPircAx6wEjIdIJv435yqrWqELmZkXuISs3mWJSLeisorr74dvY9Zl%2BZdO0TPmVXFnlCmCIYNPQe%2FDX2fDcRSHUX4iaihoxl6Or6Ghxt8RImZ%2Fbcx%2FpX3RrQMgyNFSuUigOmOxRRuuqLGd1AdOVEEDkI01SBp4v1ogd3NK2XmXuZUHHauD1rhmjvePnb%2BwQxUpe6jYnrPSisZyfvVJsFIPJAASWnFF%2BLPwkC%2Fed7pAlcJ9ZO1J4%2BW6%2FjEEbFmDdeVobca3sxQolBT1Th5n1hSqmYmHiJgqLzhOLnqWy%2BEQV1muIav%2B83aJNSIFmBhqcVzy3wUpz77gWaFcP7ilNFBk1uQ0nv8tS2CnNfi0AxfxXacsPESOrZvsvEN%2BPS0wYsO7AT3ZufUoPKvf2IKuj5b4CGr36WusPQb0ZfP%2B2KNrl%2BDV9QF8O9PNIaZ1ZtS54jji9ZCQOYWRIwNO2WGdBVIsnHf6%2FyH363i9rIA2Ofvwcsaw8ljvyS%2F8ubSIhEPnKZhlc1%2FBZwUsLq6H%2FXQTzEgwvJgDKDWE%2Bka5Ntn3S8qWUCk7GAMNo5KvKgqwSsnTolW%2B4h4OBVKSBKsniN9lE1VKd21Sja4OlYO9QLVVwTFNB8HRTko3UijlBFT04%2F8idf6MMaglL4GOqUBXFy%2FEWWTsJgA1euWvRfZmM3b5phJRJgqXA3mYzfY8Kk%2B57No4HdaxFxJSYgf5LGq3qYPatSNJ2aZTE87dYHXvqHQMDoxM%2FHhJD1OHbHssf9jDcCKZR9%2F9L5gPDwWu%2FNlfYzW%2FJ6xIhky4KKdITLyxmC5oCFlArrFEDeXDDAGNKdwUijqxdLRfMUJdNkUais1vtDGgATk48lAqFANR27NUxQuUlan&X-Amz-Signature=7ed591688412ecb89d58c9eb316baeae5a235d83f65bb8d40419f0ce30851ebb&X-Amz-SignedHeaders=host&x-id=GetObject)
