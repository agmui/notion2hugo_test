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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U7MYJA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE4rpDVSuuuqCdwZ65DI1SnyVC7O6HIhqg9aX4Ygu%2FnwIgahxP0fKTFhPt2A5QgxeCqLqv9a7mL%2Bv9zGNzN8YU2ncqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9TJahlAh6gdT5Z%2FyrcA18dqCWf3jFi%2BApAa8uup52t5KnJ2tqQ9DyP9Q0xTP1LSTRN41NDcbYlqVljMHlPOfXuvRuo7PpkmJcL0PG13AEMTE9v%2BIV9Hh1VsCk6FYxoaDB%2FYG6S%2FHLkZEagXVxfgPZyjfdG7HfFesQsHlPes%2BXll5z0FgE%2FNJaIFJvOz5e48pP%2FufCOmLK97zoLz6sDY9OdnN7xbM0XtTcKN5ixZP%2BAk8msI4q%2BZ1V1spdt%2FxmPL03ZczIyZRI5F%2FlhYX1ZrCkLJOru7o8ffi0hbk%2FFeMcNDu6SMDXOl9Owlwlk4C707Kl7jVQsdzoUwZbJFK%2FQs%2BLO31x1z6ZsZutSm40eirvWUJbSabyIOwYmRDctCuFakrU9pFPGxz%2FtITge3PmAujjmxKDTUYLLmEcWmvKFkcgtoQJurK7mlfS3JwhwnsOXRml5JCjxiGGOXfUoHiHGIfWBH1lpvhE9M0V5rvWu8tF85S9kwZRnojM7uG4nfnfMgb5dUMTkrtaWBmvZrlYT%2Fcz2dDOQ6ryHM7P7uusmwIdIH8IT2fCwVDcoDAlLSTBpKC2hCKbKa957Gd6OE4z4G6vQDECOx4BFJn6ZwpVcNhj%2F1caaSk5Ab30NlZ3OoFHVjJpA1o0P%2BwdUPHgrMMjjssEGOqUBR0o3iDRLxDxwiNohKJj5gEKp9itFPPmITgrcmtS0OZBhd5tEiokdZiu3GKwa8LoX7LRTvep%2B7l4CsT2yILNI9KGIXugpj%2BDOg4NFahLteKGu%2BerMY3m5oxpJA95KvBXVUOpUQheyyIJjgC2Iw%2FAvQ%2Fu936%2FF0j0NCKrQAYASgGHRsYtXeWwEK5rkeTjnMX8vpiYpdsJNmlXzuTCiVPrU0%2FnUjVv1&X-Amz-Signature=5be0346d2cfd827009edc0bbc222e2f65f5f04e92a8553df86ee23ce882ec700&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U7MYJA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE4rpDVSuuuqCdwZ65DI1SnyVC7O6HIhqg9aX4Ygu%2FnwIgahxP0fKTFhPt2A5QgxeCqLqv9a7mL%2Bv9zGNzN8YU2ncqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9TJahlAh6gdT5Z%2FyrcA18dqCWf3jFi%2BApAa8uup52t5KnJ2tqQ9DyP9Q0xTP1LSTRN41NDcbYlqVljMHlPOfXuvRuo7PpkmJcL0PG13AEMTE9v%2BIV9Hh1VsCk6FYxoaDB%2FYG6S%2FHLkZEagXVxfgPZyjfdG7HfFesQsHlPes%2BXll5z0FgE%2FNJaIFJvOz5e48pP%2FufCOmLK97zoLz6sDY9OdnN7xbM0XtTcKN5ixZP%2BAk8msI4q%2BZ1V1spdt%2FxmPL03ZczIyZRI5F%2FlhYX1ZrCkLJOru7o8ffi0hbk%2FFeMcNDu6SMDXOl9Owlwlk4C707Kl7jVQsdzoUwZbJFK%2FQs%2BLO31x1z6ZsZutSm40eirvWUJbSabyIOwYmRDctCuFakrU9pFPGxz%2FtITge3PmAujjmxKDTUYLLmEcWmvKFkcgtoQJurK7mlfS3JwhwnsOXRml5JCjxiGGOXfUoHiHGIfWBH1lpvhE9M0V5rvWu8tF85S9kwZRnojM7uG4nfnfMgb5dUMTkrtaWBmvZrlYT%2Fcz2dDOQ6ryHM7P7uusmwIdIH8IT2fCwVDcoDAlLSTBpKC2hCKbKa957Gd6OE4z4G6vQDECOx4BFJn6ZwpVcNhj%2F1caaSk5Ab30NlZ3OoFHVjJpA1o0P%2BwdUPHgrMMjjssEGOqUBR0o3iDRLxDxwiNohKJj5gEKp9itFPPmITgrcmtS0OZBhd5tEiokdZiu3GKwa8LoX7LRTvep%2B7l4CsT2yILNI9KGIXugpj%2BDOg4NFahLteKGu%2BerMY3m5oxpJA95KvBXVUOpUQheyyIJjgC2Iw%2FAvQ%2Fu936%2FF0j0NCKrQAYASgGHRsYtXeWwEK5rkeTjnMX8vpiYpdsJNmlXzuTCiVPrU0%2FnUjVv1&X-Amz-Signature=f38427419b69a3b81388116a82b8238f30d6ffbe6115c387f080232fd4e26da9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U7MYJA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE4rpDVSuuuqCdwZ65DI1SnyVC7O6HIhqg9aX4Ygu%2FnwIgahxP0fKTFhPt2A5QgxeCqLqv9a7mL%2Bv9zGNzN8YU2ncqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9TJahlAh6gdT5Z%2FyrcA18dqCWf3jFi%2BApAa8uup52t5KnJ2tqQ9DyP9Q0xTP1LSTRN41NDcbYlqVljMHlPOfXuvRuo7PpkmJcL0PG13AEMTE9v%2BIV9Hh1VsCk6FYxoaDB%2FYG6S%2FHLkZEagXVxfgPZyjfdG7HfFesQsHlPes%2BXll5z0FgE%2FNJaIFJvOz5e48pP%2FufCOmLK97zoLz6sDY9OdnN7xbM0XtTcKN5ixZP%2BAk8msI4q%2BZ1V1spdt%2FxmPL03ZczIyZRI5F%2FlhYX1ZrCkLJOru7o8ffi0hbk%2FFeMcNDu6SMDXOl9Owlwlk4C707Kl7jVQsdzoUwZbJFK%2FQs%2BLO31x1z6ZsZutSm40eirvWUJbSabyIOwYmRDctCuFakrU9pFPGxz%2FtITge3PmAujjmxKDTUYLLmEcWmvKFkcgtoQJurK7mlfS3JwhwnsOXRml5JCjxiGGOXfUoHiHGIfWBH1lpvhE9M0V5rvWu8tF85S9kwZRnojM7uG4nfnfMgb5dUMTkrtaWBmvZrlYT%2Fcz2dDOQ6ryHM7P7uusmwIdIH8IT2fCwVDcoDAlLSTBpKC2hCKbKa957Gd6OE4z4G6vQDECOx4BFJn6ZwpVcNhj%2F1caaSk5Ab30NlZ3OoFHVjJpA1o0P%2BwdUPHgrMMjjssEGOqUBR0o3iDRLxDxwiNohKJj5gEKp9itFPPmITgrcmtS0OZBhd5tEiokdZiu3GKwa8LoX7LRTvep%2B7l4CsT2yILNI9KGIXugpj%2BDOg4NFahLteKGu%2BerMY3m5oxpJA95KvBXVUOpUQheyyIJjgC2Iw%2FAvQ%2Fu936%2FF0j0NCKrQAYASgGHRsYtXeWwEK5rkeTjnMX8vpiYpdsJNmlXzuTCiVPrU0%2FnUjVv1&X-Amz-Signature=03ece7af545fad219a007a102588b6e55ed81393cf73129fa687c8c71235a8ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U7MYJA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE4rpDVSuuuqCdwZ65DI1SnyVC7O6HIhqg9aX4Ygu%2FnwIgahxP0fKTFhPt2A5QgxeCqLqv9a7mL%2Bv9zGNzN8YU2ncqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9TJahlAh6gdT5Z%2FyrcA18dqCWf3jFi%2BApAa8uup52t5KnJ2tqQ9DyP9Q0xTP1LSTRN41NDcbYlqVljMHlPOfXuvRuo7PpkmJcL0PG13AEMTE9v%2BIV9Hh1VsCk6FYxoaDB%2FYG6S%2FHLkZEagXVxfgPZyjfdG7HfFesQsHlPes%2BXll5z0FgE%2FNJaIFJvOz5e48pP%2FufCOmLK97zoLz6sDY9OdnN7xbM0XtTcKN5ixZP%2BAk8msI4q%2BZ1V1spdt%2FxmPL03ZczIyZRI5F%2FlhYX1ZrCkLJOru7o8ffi0hbk%2FFeMcNDu6SMDXOl9Owlwlk4C707Kl7jVQsdzoUwZbJFK%2FQs%2BLO31x1z6ZsZutSm40eirvWUJbSabyIOwYmRDctCuFakrU9pFPGxz%2FtITge3PmAujjmxKDTUYLLmEcWmvKFkcgtoQJurK7mlfS3JwhwnsOXRml5JCjxiGGOXfUoHiHGIfWBH1lpvhE9M0V5rvWu8tF85S9kwZRnojM7uG4nfnfMgb5dUMTkrtaWBmvZrlYT%2Fcz2dDOQ6ryHM7P7uusmwIdIH8IT2fCwVDcoDAlLSTBpKC2hCKbKa957Gd6OE4z4G6vQDECOx4BFJn6ZwpVcNhj%2F1caaSk5Ab30NlZ3OoFHVjJpA1o0P%2BwdUPHgrMMjjssEGOqUBR0o3iDRLxDxwiNohKJj5gEKp9itFPPmITgrcmtS0OZBhd5tEiokdZiu3GKwa8LoX7LRTvep%2B7l4CsT2yILNI9KGIXugpj%2BDOg4NFahLteKGu%2BerMY3m5oxpJA95KvBXVUOpUQheyyIJjgC2Iw%2FAvQ%2Fu936%2FF0j0NCKrQAYASgGHRsYtXeWwEK5rkeTjnMX8vpiYpdsJNmlXzuTCiVPrU0%2FnUjVv1&X-Amz-Signature=59e1ac7850359bb8373075831b2e7fa5977261db7047d9ae2ce52f85b4d27a02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U7MYJA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE4rpDVSuuuqCdwZ65DI1SnyVC7O6HIhqg9aX4Ygu%2FnwIgahxP0fKTFhPt2A5QgxeCqLqv9a7mL%2Bv9zGNzN8YU2ncqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9TJahlAh6gdT5Z%2FyrcA18dqCWf3jFi%2BApAa8uup52t5KnJ2tqQ9DyP9Q0xTP1LSTRN41NDcbYlqVljMHlPOfXuvRuo7PpkmJcL0PG13AEMTE9v%2BIV9Hh1VsCk6FYxoaDB%2FYG6S%2FHLkZEagXVxfgPZyjfdG7HfFesQsHlPes%2BXll5z0FgE%2FNJaIFJvOz5e48pP%2FufCOmLK97zoLz6sDY9OdnN7xbM0XtTcKN5ixZP%2BAk8msI4q%2BZ1V1spdt%2FxmPL03ZczIyZRI5F%2FlhYX1ZrCkLJOru7o8ffi0hbk%2FFeMcNDu6SMDXOl9Owlwlk4C707Kl7jVQsdzoUwZbJFK%2FQs%2BLO31x1z6ZsZutSm40eirvWUJbSabyIOwYmRDctCuFakrU9pFPGxz%2FtITge3PmAujjmxKDTUYLLmEcWmvKFkcgtoQJurK7mlfS3JwhwnsOXRml5JCjxiGGOXfUoHiHGIfWBH1lpvhE9M0V5rvWu8tF85S9kwZRnojM7uG4nfnfMgb5dUMTkrtaWBmvZrlYT%2Fcz2dDOQ6ryHM7P7uusmwIdIH8IT2fCwVDcoDAlLSTBpKC2hCKbKa957Gd6OE4z4G6vQDECOx4BFJn6ZwpVcNhj%2F1caaSk5Ab30NlZ3OoFHVjJpA1o0P%2BwdUPHgrMMjjssEGOqUBR0o3iDRLxDxwiNohKJj5gEKp9itFPPmITgrcmtS0OZBhd5tEiokdZiu3GKwa8LoX7LRTvep%2B7l4CsT2yILNI9KGIXugpj%2BDOg4NFahLteKGu%2BerMY3m5oxpJA95KvBXVUOpUQheyyIJjgC2Iw%2FAvQ%2Fu936%2FF0j0NCKrQAYASgGHRsYtXeWwEK5rkeTjnMX8vpiYpdsJNmlXzuTCiVPrU0%2FnUjVv1&X-Amz-Signature=545e2c86b8fd88ae3f9f39174e2fef73b402405316cdaaf3d00bc9e06b2e5d10&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7U7MYJA%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE4rpDVSuuuqCdwZ65DI1SnyVC7O6HIhqg9aX4Ygu%2FnwIgahxP0fKTFhPt2A5QgxeCqLqv9a7mL%2Bv9zGNzN8YU2ncqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9TJahlAh6gdT5Z%2FyrcA18dqCWf3jFi%2BApAa8uup52t5KnJ2tqQ9DyP9Q0xTP1LSTRN41NDcbYlqVljMHlPOfXuvRuo7PpkmJcL0PG13AEMTE9v%2BIV9Hh1VsCk6FYxoaDB%2FYG6S%2FHLkZEagXVxfgPZyjfdG7HfFesQsHlPes%2BXll5z0FgE%2FNJaIFJvOz5e48pP%2FufCOmLK97zoLz6sDY9OdnN7xbM0XtTcKN5ixZP%2BAk8msI4q%2BZ1V1spdt%2FxmPL03ZczIyZRI5F%2FlhYX1ZrCkLJOru7o8ffi0hbk%2FFeMcNDu6SMDXOl9Owlwlk4C707Kl7jVQsdzoUwZbJFK%2FQs%2BLO31x1z6ZsZutSm40eirvWUJbSabyIOwYmRDctCuFakrU9pFPGxz%2FtITge3PmAujjmxKDTUYLLmEcWmvKFkcgtoQJurK7mlfS3JwhwnsOXRml5JCjxiGGOXfUoHiHGIfWBH1lpvhE9M0V5rvWu8tF85S9kwZRnojM7uG4nfnfMgb5dUMTkrtaWBmvZrlYT%2Fcz2dDOQ6ryHM7P7uusmwIdIH8IT2fCwVDcoDAlLSTBpKC2hCKbKa957Gd6OE4z4G6vQDECOx4BFJn6ZwpVcNhj%2F1caaSk5Ab30NlZ3OoFHVjJpA1o0P%2BwdUPHgrMMjjssEGOqUBR0o3iDRLxDxwiNohKJj5gEKp9itFPPmITgrcmtS0OZBhd5tEiokdZiu3GKwa8LoX7LRTvep%2B7l4CsT2yILNI9KGIXugpj%2BDOg4NFahLteKGu%2BerMY3m5oxpJA95KvBXVUOpUQheyyIJjgC2Iw%2FAvQ%2Fu936%2FF0j0NCKrQAYASgGHRsYtXeWwEK5rkeTjnMX8vpiYpdsJNmlXzuTCiVPrU0%2FnUjVv1&X-Amz-Signature=56278867903aad1dd025e34d24042b510f7555f1cbf74be4c03d1b0808bd9294&X-Amz-SignedHeaders=host&x-id=GetObject)
