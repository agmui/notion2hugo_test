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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFMDTNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0gQeEZDob6gyFEGBhMPrtJQuAmTMDugkr4g4NzqVDuAiEAlmCUJFWnu%2Fo0pDLPaiQi%2FVQ80S%2FGWAjRkxPEZ086vbAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNhXJPP2KweUWLTpcyrcA1WJp0wF2Gtxy3aI4YN88%2BEUYTOt5L4pGkDwGUbnI%2B2MsUTKlN3%2F7667kyM6tW4RBZbzBNWWa09jfK%2F%2F%2Fu0sbVh%2FGPJROdr8BhrnLf3QxBEvVraVYiHWU3B4JBbqUkVygeUZ8bUS5%2BQ3pu9MyZ%2FbZDNwD%2FdOnU8N4zWTesrDuKgPITd%2BW%2F%2FiZe9z5nHObZzLn7Ht1GanpQThSelc%2BhWwdg5Ud4omtGSrk%2BnvYcj1%2BlsiMxC%2BjR25uTPrHMJL3yJfThB5rBh%2FzQcTyzSR7FhK2lUYlJfvGDDx9N3uekWsziqpTnBRt9F%2ByvuodTbsPQ2YZUws1w91vhgAKxur6P7v2QilQ7U9vfwy1EMLBe%2FgyKAYcYxmNZhVF2gBVy1si8fhtOMZNf9JAZr1wJPjqcpyvcNXKFB0qTUnrCxUYSfVzxqfSiJAl91AcTs5Uw7%2BPMbcGvobURz3e40iJOXUKklorKxO8NEHINjuNsEiRPNdR%2F%2BsM%2FUddsWQxrf6VrkAWAd6FbRn%2F8VdS5epSipXSUdCW3VY07TWJIbNPeUk3EaWtkQ6F%2B1dS1skomjKgaPR7x3%2FJIH1uHw2FVnHtqNBY%2FrDdSjf4BeY5pGtKDVeb9%2BhXhwKHhj8KNAdJuRzf8OIMPXBw8IGOqUBR9u%2Fo4Gc0DqoP5lZ9biJ0RwT623eExjVBnu4uRh8A8IOAszipJyy8A4qQroC%2BDYfOakW7%2FJsqtPGzGBU3aL%2BsOaGZkk8fbBxmJ1lu7EVCZX9zaleDguLuXeCAxyjLtWiScD6RpYt8fKn81tJA6yDhloT9Yy%2Bv4VQYDtKUR3tAEsCRIdkYeB6VawiZcGvgBVdwYwh8ZOF2YlMwCCV6ZRldnsf8k37&X-Amz-Signature=7aab8cc8150900cc414f10438ca02300c9027551c025eab4aea7d6b6c4fff810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFMDTNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0gQeEZDob6gyFEGBhMPrtJQuAmTMDugkr4g4NzqVDuAiEAlmCUJFWnu%2Fo0pDLPaiQi%2FVQ80S%2FGWAjRkxPEZ086vbAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNhXJPP2KweUWLTpcyrcA1WJp0wF2Gtxy3aI4YN88%2BEUYTOt5L4pGkDwGUbnI%2B2MsUTKlN3%2F7667kyM6tW4RBZbzBNWWa09jfK%2F%2F%2Fu0sbVh%2FGPJROdr8BhrnLf3QxBEvVraVYiHWU3B4JBbqUkVygeUZ8bUS5%2BQ3pu9MyZ%2FbZDNwD%2FdOnU8N4zWTesrDuKgPITd%2BW%2F%2FiZe9z5nHObZzLn7Ht1GanpQThSelc%2BhWwdg5Ud4omtGSrk%2BnvYcj1%2BlsiMxC%2BjR25uTPrHMJL3yJfThB5rBh%2FzQcTyzSR7FhK2lUYlJfvGDDx9N3uekWsziqpTnBRt9F%2ByvuodTbsPQ2YZUws1w91vhgAKxur6P7v2QilQ7U9vfwy1EMLBe%2FgyKAYcYxmNZhVF2gBVy1si8fhtOMZNf9JAZr1wJPjqcpyvcNXKFB0qTUnrCxUYSfVzxqfSiJAl91AcTs5Uw7%2BPMbcGvobURz3e40iJOXUKklorKxO8NEHINjuNsEiRPNdR%2F%2BsM%2FUddsWQxrf6VrkAWAd6FbRn%2F8VdS5epSipXSUdCW3VY07TWJIbNPeUk3EaWtkQ6F%2B1dS1skomjKgaPR7x3%2FJIH1uHw2FVnHtqNBY%2FrDdSjf4BeY5pGtKDVeb9%2BhXhwKHhj8KNAdJuRzf8OIMPXBw8IGOqUBR9u%2Fo4Gc0DqoP5lZ9biJ0RwT623eExjVBnu4uRh8A8IOAszipJyy8A4qQroC%2BDYfOakW7%2FJsqtPGzGBU3aL%2BsOaGZkk8fbBxmJ1lu7EVCZX9zaleDguLuXeCAxyjLtWiScD6RpYt8fKn81tJA6yDhloT9Yy%2Bv4VQYDtKUR3tAEsCRIdkYeB6VawiZcGvgBVdwYwh8ZOF2YlMwCCV6ZRldnsf8k37&X-Amz-Signature=06b8e1491d50d96d79d9e2003a8b920236553c6a9e57fc198cbef65ae5fb5c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFMDTNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0gQeEZDob6gyFEGBhMPrtJQuAmTMDugkr4g4NzqVDuAiEAlmCUJFWnu%2Fo0pDLPaiQi%2FVQ80S%2FGWAjRkxPEZ086vbAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNhXJPP2KweUWLTpcyrcA1WJp0wF2Gtxy3aI4YN88%2BEUYTOt5L4pGkDwGUbnI%2B2MsUTKlN3%2F7667kyM6tW4RBZbzBNWWa09jfK%2F%2F%2Fu0sbVh%2FGPJROdr8BhrnLf3QxBEvVraVYiHWU3B4JBbqUkVygeUZ8bUS5%2BQ3pu9MyZ%2FbZDNwD%2FdOnU8N4zWTesrDuKgPITd%2BW%2F%2FiZe9z5nHObZzLn7Ht1GanpQThSelc%2BhWwdg5Ud4omtGSrk%2BnvYcj1%2BlsiMxC%2BjR25uTPrHMJL3yJfThB5rBh%2FzQcTyzSR7FhK2lUYlJfvGDDx9N3uekWsziqpTnBRt9F%2ByvuodTbsPQ2YZUws1w91vhgAKxur6P7v2QilQ7U9vfwy1EMLBe%2FgyKAYcYxmNZhVF2gBVy1si8fhtOMZNf9JAZr1wJPjqcpyvcNXKFB0qTUnrCxUYSfVzxqfSiJAl91AcTs5Uw7%2BPMbcGvobURz3e40iJOXUKklorKxO8NEHINjuNsEiRPNdR%2F%2BsM%2FUddsWQxrf6VrkAWAd6FbRn%2F8VdS5epSipXSUdCW3VY07TWJIbNPeUk3EaWtkQ6F%2B1dS1skomjKgaPR7x3%2FJIH1uHw2FVnHtqNBY%2FrDdSjf4BeY5pGtKDVeb9%2BhXhwKHhj8KNAdJuRzf8OIMPXBw8IGOqUBR9u%2Fo4Gc0DqoP5lZ9biJ0RwT623eExjVBnu4uRh8A8IOAszipJyy8A4qQroC%2BDYfOakW7%2FJsqtPGzGBU3aL%2BsOaGZkk8fbBxmJ1lu7EVCZX9zaleDguLuXeCAxyjLtWiScD6RpYt8fKn81tJA6yDhloT9Yy%2Bv4VQYDtKUR3tAEsCRIdkYeB6VawiZcGvgBVdwYwh8ZOF2YlMwCCV6ZRldnsf8k37&X-Amz-Signature=79068bf05773b7e1441c597879e5e8d018c58744754d0cbbf1e0c682c650dd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFMDTNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0gQeEZDob6gyFEGBhMPrtJQuAmTMDugkr4g4NzqVDuAiEAlmCUJFWnu%2Fo0pDLPaiQi%2FVQ80S%2FGWAjRkxPEZ086vbAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNhXJPP2KweUWLTpcyrcA1WJp0wF2Gtxy3aI4YN88%2BEUYTOt5L4pGkDwGUbnI%2B2MsUTKlN3%2F7667kyM6tW4RBZbzBNWWa09jfK%2F%2F%2Fu0sbVh%2FGPJROdr8BhrnLf3QxBEvVraVYiHWU3B4JBbqUkVygeUZ8bUS5%2BQ3pu9MyZ%2FbZDNwD%2FdOnU8N4zWTesrDuKgPITd%2BW%2F%2FiZe9z5nHObZzLn7Ht1GanpQThSelc%2BhWwdg5Ud4omtGSrk%2BnvYcj1%2BlsiMxC%2BjR25uTPrHMJL3yJfThB5rBh%2FzQcTyzSR7FhK2lUYlJfvGDDx9N3uekWsziqpTnBRt9F%2ByvuodTbsPQ2YZUws1w91vhgAKxur6P7v2QilQ7U9vfwy1EMLBe%2FgyKAYcYxmNZhVF2gBVy1si8fhtOMZNf9JAZr1wJPjqcpyvcNXKFB0qTUnrCxUYSfVzxqfSiJAl91AcTs5Uw7%2BPMbcGvobURz3e40iJOXUKklorKxO8NEHINjuNsEiRPNdR%2F%2BsM%2FUddsWQxrf6VrkAWAd6FbRn%2F8VdS5epSipXSUdCW3VY07TWJIbNPeUk3EaWtkQ6F%2B1dS1skomjKgaPR7x3%2FJIH1uHw2FVnHtqNBY%2FrDdSjf4BeY5pGtKDVeb9%2BhXhwKHhj8KNAdJuRzf8OIMPXBw8IGOqUBR9u%2Fo4Gc0DqoP5lZ9biJ0RwT623eExjVBnu4uRh8A8IOAszipJyy8A4qQroC%2BDYfOakW7%2FJsqtPGzGBU3aL%2BsOaGZkk8fbBxmJ1lu7EVCZX9zaleDguLuXeCAxyjLtWiScD6RpYt8fKn81tJA6yDhloT9Yy%2Bv4VQYDtKUR3tAEsCRIdkYeB6VawiZcGvgBVdwYwh8ZOF2YlMwCCV6ZRldnsf8k37&X-Amz-Signature=7f11f3b353cd0c5d4fb851e8f51e549b4e4ce25bdef1d38d570e410ef4a8713f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFMDTNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0gQeEZDob6gyFEGBhMPrtJQuAmTMDugkr4g4NzqVDuAiEAlmCUJFWnu%2Fo0pDLPaiQi%2FVQ80S%2FGWAjRkxPEZ086vbAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNhXJPP2KweUWLTpcyrcA1WJp0wF2Gtxy3aI4YN88%2BEUYTOt5L4pGkDwGUbnI%2B2MsUTKlN3%2F7667kyM6tW4RBZbzBNWWa09jfK%2F%2F%2Fu0sbVh%2FGPJROdr8BhrnLf3QxBEvVraVYiHWU3B4JBbqUkVygeUZ8bUS5%2BQ3pu9MyZ%2FbZDNwD%2FdOnU8N4zWTesrDuKgPITd%2BW%2F%2FiZe9z5nHObZzLn7Ht1GanpQThSelc%2BhWwdg5Ud4omtGSrk%2BnvYcj1%2BlsiMxC%2BjR25uTPrHMJL3yJfThB5rBh%2FzQcTyzSR7FhK2lUYlJfvGDDx9N3uekWsziqpTnBRt9F%2ByvuodTbsPQ2YZUws1w91vhgAKxur6P7v2QilQ7U9vfwy1EMLBe%2FgyKAYcYxmNZhVF2gBVy1si8fhtOMZNf9JAZr1wJPjqcpyvcNXKFB0qTUnrCxUYSfVzxqfSiJAl91AcTs5Uw7%2BPMbcGvobURz3e40iJOXUKklorKxO8NEHINjuNsEiRPNdR%2F%2BsM%2FUddsWQxrf6VrkAWAd6FbRn%2F8VdS5epSipXSUdCW3VY07TWJIbNPeUk3EaWtkQ6F%2B1dS1skomjKgaPR7x3%2FJIH1uHw2FVnHtqNBY%2FrDdSjf4BeY5pGtKDVeb9%2BhXhwKHhj8KNAdJuRzf8OIMPXBw8IGOqUBR9u%2Fo4Gc0DqoP5lZ9biJ0RwT623eExjVBnu4uRh8A8IOAszipJyy8A4qQroC%2BDYfOakW7%2FJsqtPGzGBU3aL%2BsOaGZkk8fbBxmJ1lu7EVCZX9zaleDguLuXeCAxyjLtWiScD6RpYt8fKn81tJA6yDhloT9Yy%2Bv4VQYDtKUR3tAEsCRIdkYeB6VawiZcGvgBVdwYwh8ZOF2YlMwCCV6ZRldnsf8k37&X-Amz-Signature=de98bcfc9394c63b9f3ea69be378e76479b3bc5ebae4c5f3e43dc15e8687d9dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QFMDTNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T041841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0gQeEZDob6gyFEGBhMPrtJQuAmTMDugkr4g4NzqVDuAiEAlmCUJFWnu%2Fo0pDLPaiQi%2FVQ80S%2FGWAjRkxPEZ086vbAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNhXJPP2KweUWLTpcyrcA1WJp0wF2Gtxy3aI4YN88%2BEUYTOt5L4pGkDwGUbnI%2B2MsUTKlN3%2F7667kyM6tW4RBZbzBNWWa09jfK%2F%2F%2Fu0sbVh%2FGPJROdr8BhrnLf3QxBEvVraVYiHWU3B4JBbqUkVygeUZ8bUS5%2BQ3pu9MyZ%2FbZDNwD%2FdOnU8N4zWTesrDuKgPITd%2BW%2F%2FiZe9z5nHObZzLn7Ht1GanpQThSelc%2BhWwdg5Ud4omtGSrk%2BnvYcj1%2BlsiMxC%2BjR25uTPrHMJL3yJfThB5rBh%2FzQcTyzSR7FhK2lUYlJfvGDDx9N3uekWsziqpTnBRt9F%2ByvuodTbsPQ2YZUws1w91vhgAKxur6P7v2QilQ7U9vfwy1EMLBe%2FgyKAYcYxmNZhVF2gBVy1si8fhtOMZNf9JAZr1wJPjqcpyvcNXKFB0qTUnrCxUYSfVzxqfSiJAl91AcTs5Uw7%2BPMbcGvobURz3e40iJOXUKklorKxO8NEHINjuNsEiRPNdR%2F%2BsM%2FUddsWQxrf6VrkAWAd6FbRn%2F8VdS5epSipXSUdCW3VY07TWJIbNPeUk3EaWtkQ6F%2B1dS1skomjKgaPR7x3%2FJIH1uHw2FVnHtqNBY%2FrDdSjf4BeY5pGtKDVeb9%2BhXhwKHhj8KNAdJuRzf8OIMPXBw8IGOqUBR9u%2Fo4Gc0DqoP5lZ9biJ0RwT623eExjVBnu4uRh8A8IOAszipJyy8A4qQroC%2BDYfOakW7%2FJsqtPGzGBU3aL%2BsOaGZkk8fbBxmJ1lu7EVCZX9zaleDguLuXeCAxyjLtWiScD6RpYt8fKn81tJA6yDhloT9Yy%2Bv4VQYDtKUR3tAEsCRIdkYeB6VawiZcGvgBVdwYwh8ZOF2YlMwCCV6ZRldnsf8k37&X-Amz-Signature=4934cb5c29c4f6e73589ee3ebb6755aa4cd5122eba9c707c65d5c5eed7445891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
