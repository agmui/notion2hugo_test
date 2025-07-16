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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3HYLJT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD63hYiC1duXmvnMy8X4TemKu5z3HVKoLLclUe9Gj60vgIhAJ6HNbtuCLW3TwWUfptaYKUHnE8DsuLFQvBjiJlcWyJeKv8DCFYQABoMNjM3NDIzMTgzODA1IgwO59Nu53V9lWY%2F00gq3ANpkbvsQHM%2FHbtYQzhBhem7yvaNPHIbQBpNNFGpm6fCUUFyCAjeGX%2F4aO88Os0po5ML5hl91ATX%2BUEbq59CzKg4EJg0kpwnFY6%2FUXNJ8jFUq0sPt7S3TueMkHB9Uvq37KQIn36filFH1Ol%2BhxiKnZvz7hMBG0dwIwshoa8P4vUZF%2FQg2lA6yKczm%2B98ojwKhZ8Lu%2FpK%2FrVRNK1Cu5uCRdffjQImOFyFH4oEliVYA1qkIFA70Y8oLwV80fyYSDqrpMGySUjWyRMLvGcmcphA3xui7K8y%2F6CbvJ2EWEXZlwmdDjsrcrCIBBsWFGwYOOoG9XCWH4QzqOj97%2B6ImNRxYT%2F7fvKSf09U3q6jcUlbEfyle%2FoUFKE9nXNz0vATJ9kbtuF3V4jzJGFL2Hgra4oUzZ%2BFlvUZXBUsl33R%2BtcRtIP%2BFJ%2FTQbfJP7G%2Bm5jYZG9KozLIBLRDP65EJxEovfB7lgp9WjDTGEOYYk8K3QvWxaZU4Lrf%2B1cGrzicNSbfmrtfvW8ZdOW62n6TV2TrLjjF2Y21QVlCS83AlRmzDnM4hCfTBGr7M7JBP0J%2FNiNyFULfnXjxhUd4Ig5qz8yQffv5sX65MMtUslIJj7aakspZrc3QholEi%2FaAnxVevIb48TCP3dzDBjqkAe7KrbtFhXM3TNViP5UpGc1pkPLDSNz49W2v%2FMHK0x7LfB0%2FGzax8utMqKBsElOagqBKcdPwtOPBKrNSsz8hBxOW9LZSTTnQy1Vygx6qJQdIWnbzF%2BptbK6nsww6V8dKe3YdOsDOXd8nrQarlZqMWhYm3OZVSZd%2FXT8mDFPTu1TBBMhaDNsODgMQR7a4wOaA6tXj08vfD6ng2TpYBm29ld2NYM%2BF&X-Amz-Signature=b3f7a1890ad767b59a964023c5db0ee8cb70e8ce9e120972cff0418630964742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3HYLJT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD63hYiC1duXmvnMy8X4TemKu5z3HVKoLLclUe9Gj60vgIhAJ6HNbtuCLW3TwWUfptaYKUHnE8DsuLFQvBjiJlcWyJeKv8DCFYQABoMNjM3NDIzMTgzODA1IgwO59Nu53V9lWY%2F00gq3ANpkbvsQHM%2FHbtYQzhBhem7yvaNPHIbQBpNNFGpm6fCUUFyCAjeGX%2F4aO88Os0po5ML5hl91ATX%2BUEbq59CzKg4EJg0kpwnFY6%2FUXNJ8jFUq0sPt7S3TueMkHB9Uvq37KQIn36filFH1Ol%2BhxiKnZvz7hMBG0dwIwshoa8P4vUZF%2FQg2lA6yKczm%2B98ojwKhZ8Lu%2FpK%2FrVRNK1Cu5uCRdffjQImOFyFH4oEliVYA1qkIFA70Y8oLwV80fyYSDqrpMGySUjWyRMLvGcmcphA3xui7K8y%2F6CbvJ2EWEXZlwmdDjsrcrCIBBsWFGwYOOoG9XCWH4QzqOj97%2B6ImNRxYT%2F7fvKSf09U3q6jcUlbEfyle%2FoUFKE9nXNz0vATJ9kbtuF3V4jzJGFL2Hgra4oUzZ%2BFlvUZXBUsl33R%2BtcRtIP%2BFJ%2FTQbfJP7G%2Bm5jYZG9KozLIBLRDP65EJxEovfB7lgp9WjDTGEOYYk8K3QvWxaZU4Lrf%2B1cGrzicNSbfmrtfvW8ZdOW62n6TV2TrLjjF2Y21QVlCS83AlRmzDnM4hCfTBGr7M7JBP0J%2FNiNyFULfnXjxhUd4Ig5qz8yQffv5sX65MMtUslIJj7aakspZrc3QholEi%2FaAnxVevIb48TCP3dzDBjqkAe7KrbtFhXM3TNViP5UpGc1pkPLDSNz49W2v%2FMHK0x7LfB0%2FGzax8utMqKBsElOagqBKcdPwtOPBKrNSsz8hBxOW9LZSTTnQy1Vygx6qJQdIWnbzF%2BptbK6nsww6V8dKe3YdOsDOXd8nrQarlZqMWhYm3OZVSZd%2FXT8mDFPTu1TBBMhaDNsODgMQR7a4wOaA6tXj08vfD6ng2TpYBm29ld2NYM%2BF&X-Amz-Signature=f3871181c77ad563eba2679b75430cbe2d09b0df91f83ea1bd238346152c3faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3HYLJT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD63hYiC1duXmvnMy8X4TemKu5z3HVKoLLclUe9Gj60vgIhAJ6HNbtuCLW3TwWUfptaYKUHnE8DsuLFQvBjiJlcWyJeKv8DCFYQABoMNjM3NDIzMTgzODA1IgwO59Nu53V9lWY%2F00gq3ANpkbvsQHM%2FHbtYQzhBhem7yvaNPHIbQBpNNFGpm6fCUUFyCAjeGX%2F4aO88Os0po5ML5hl91ATX%2BUEbq59CzKg4EJg0kpwnFY6%2FUXNJ8jFUq0sPt7S3TueMkHB9Uvq37KQIn36filFH1Ol%2BhxiKnZvz7hMBG0dwIwshoa8P4vUZF%2FQg2lA6yKczm%2B98ojwKhZ8Lu%2FpK%2FrVRNK1Cu5uCRdffjQImOFyFH4oEliVYA1qkIFA70Y8oLwV80fyYSDqrpMGySUjWyRMLvGcmcphA3xui7K8y%2F6CbvJ2EWEXZlwmdDjsrcrCIBBsWFGwYOOoG9XCWH4QzqOj97%2B6ImNRxYT%2F7fvKSf09U3q6jcUlbEfyle%2FoUFKE9nXNz0vATJ9kbtuF3V4jzJGFL2Hgra4oUzZ%2BFlvUZXBUsl33R%2BtcRtIP%2BFJ%2FTQbfJP7G%2Bm5jYZG9KozLIBLRDP65EJxEovfB7lgp9WjDTGEOYYk8K3QvWxaZU4Lrf%2B1cGrzicNSbfmrtfvW8ZdOW62n6TV2TrLjjF2Y21QVlCS83AlRmzDnM4hCfTBGr7M7JBP0J%2FNiNyFULfnXjxhUd4Ig5qz8yQffv5sX65MMtUslIJj7aakspZrc3QholEi%2FaAnxVevIb48TCP3dzDBjqkAe7KrbtFhXM3TNViP5UpGc1pkPLDSNz49W2v%2FMHK0x7LfB0%2FGzax8utMqKBsElOagqBKcdPwtOPBKrNSsz8hBxOW9LZSTTnQy1Vygx6qJQdIWnbzF%2BptbK6nsww6V8dKe3YdOsDOXd8nrQarlZqMWhYm3OZVSZd%2FXT8mDFPTu1TBBMhaDNsODgMQR7a4wOaA6tXj08vfD6ng2TpYBm29ld2NYM%2BF&X-Amz-Signature=2689606f67a450d26370f0155995aa91c7597fe75b09a0c7d6908a5ed6e77584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3HYLJT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD63hYiC1duXmvnMy8X4TemKu5z3HVKoLLclUe9Gj60vgIhAJ6HNbtuCLW3TwWUfptaYKUHnE8DsuLFQvBjiJlcWyJeKv8DCFYQABoMNjM3NDIzMTgzODA1IgwO59Nu53V9lWY%2F00gq3ANpkbvsQHM%2FHbtYQzhBhem7yvaNPHIbQBpNNFGpm6fCUUFyCAjeGX%2F4aO88Os0po5ML5hl91ATX%2BUEbq59CzKg4EJg0kpwnFY6%2FUXNJ8jFUq0sPt7S3TueMkHB9Uvq37KQIn36filFH1Ol%2BhxiKnZvz7hMBG0dwIwshoa8P4vUZF%2FQg2lA6yKczm%2B98ojwKhZ8Lu%2FpK%2FrVRNK1Cu5uCRdffjQImOFyFH4oEliVYA1qkIFA70Y8oLwV80fyYSDqrpMGySUjWyRMLvGcmcphA3xui7K8y%2F6CbvJ2EWEXZlwmdDjsrcrCIBBsWFGwYOOoG9XCWH4QzqOj97%2B6ImNRxYT%2F7fvKSf09U3q6jcUlbEfyle%2FoUFKE9nXNz0vATJ9kbtuF3V4jzJGFL2Hgra4oUzZ%2BFlvUZXBUsl33R%2BtcRtIP%2BFJ%2FTQbfJP7G%2Bm5jYZG9KozLIBLRDP65EJxEovfB7lgp9WjDTGEOYYk8K3QvWxaZU4Lrf%2B1cGrzicNSbfmrtfvW8ZdOW62n6TV2TrLjjF2Y21QVlCS83AlRmzDnM4hCfTBGr7M7JBP0J%2FNiNyFULfnXjxhUd4Ig5qz8yQffv5sX65MMtUslIJj7aakspZrc3QholEi%2FaAnxVevIb48TCP3dzDBjqkAe7KrbtFhXM3TNViP5UpGc1pkPLDSNz49W2v%2FMHK0x7LfB0%2FGzax8utMqKBsElOagqBKcdPwtOPBKrNSsz8hBxOW9LZSTTnQy1Vygx6qJQdIWnbzF%2BptbK6nsww6V8dKe3YdOsDOXd8nrQarlZqMWhYm3OZVSZd%2FXT8mDFPTu1TBBMhaDNsODgMQR7a4wOaA6tXj08vfD6ng2TpYBm29ld2NYM%2BF&X-Amz-Signature=66f1c9077176d7681b9ffa03c647570b02efd4d450a90469b75342ccf2ec9db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3HYLJT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD63hYiC1duXmvnMy8X4TemKu5z3HVKoLLclUe9Gj60vgIhAJ6HNbtuCLW3TwWUfptaYKUHnE8DsuLFQvBjiJlcWyJeKv8DCFYQABoMNjM3NDIzMTgzODA1IgwO59Nu53V9lWY%2F00gq3ANpkbvsQHM%2FHbtYQzhBhem7yvaNPHIbQBpNNFGpm6fCUUFyCAjeGX%2F4aO88Os0po5ML5hl91ATX%2BUEbq59CzKg4EJg0kpwnFY6%2FUXNJ8jFUq0sPt7S3TueMkHB9Uvq37KQIn36filFH1Ol%2BhxiKnZvz7hMBG0dwIwshoa8P4vUZF%2FQg2lA6yKczm%2B98ojwKhZ8Lu%2FpK%2FrVRNK1Cu5uCRdffjQImOFyFH4oEliVYA1qkIFA70Y8oLwV80fyYSDqrpMGySUjWyRMLvGcmcphA3xui7K8y%2F6CbvJ2EWEXZlwmdDjsrcrCIBBsWFGwYOOoG9XCWH4QzqOj97%2B6ImNRxYT%2F7fvKSf09U3q6jcUlbEfyle%2FoUFKE9nXNz0vATJ9kbtuF3V4jzJGFL2Hgra4oUzZ%2BFlvUZXBUsl33R%2BtcRtIP%2BFJ%2FTQbfJP7G%2Bm5jYZG9KozLIBLRDP65EJxEovfB7lgp9WjDTGEOYYk8K3QvWxaZU4Lrf%2B1cGrzicNSbfmrtfvW8ZdOW62n6TV2TrLjjF2Y21QVlCS83AlRmzDnM4hCfTBGr7M7JBP0J%2FNiNyFULfnXjxhUd4Ig5qz8yQffv5sX65MMtUslIJj7aakspZrc3QholEi%2FaAnxVevIb48TCP3dzDBjqkAe7KrbtFhXM3TNViP5UpGc1pkPLDSNz49W2v%2FMHK0x7LfB0%2FGzax8utMqKBsElOagqBKcdPwtOPBKrNSsz8hBxOW9LZSTTnQy1Vygx6qJQdIWnbzF%2BptbK6nsww6V8dKe3YdOsDOXd8nrQarlZqMWhYm3OZVSZd%2FXT8mDFPTu1TBBMhaDNsODgMQR7a4wOaA6tXj08vfD6ng2TpYBm29ld2NYM%2BF&X-Amz-Signature=ea8e03608be687c4efefa675b17a82f56e01fc0b070ac5d463005c9574a4a28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ3HYLJT%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD63hYiC1duXmvnMy8X4TemKu5z3HVKoLLclUe9Gj60vgIhAJ6HNbtuCLW3TwWUfptaYKUHnE8DsuLFQvBjiJlcWyJeKv8DCFYQABoMNjM3NDIzMTgzODA1IgwO59Nu53V9lWY%2F00gq3ANpkbvsQHM%2FHbtYQzhBhem7yvaNPHIbQBpNNFGpm6fCUUFyCAjeGX%2F4aO88Os0po5ML5hl91ATX%2BUEbq59CzKg4EJg0kpwnFY6%2FUXNJ8jFUq0sPt7S3TueMkHB9Uvq37KQIn36filFH1Ol%2BhxiKnZvz7hMBG0dwIwshoa8P4vUZF%2FQg2lA6yKczm%2B98ojwKhZ8Lu%2FpK%2FrVRNK1Cu5uCRdffjQImOFyFH4oEliVYA1qkIFA70Y8oLwV80fyYSDqrpMGySUjWyRMLvGcmcphA3xui7K8y%2F6CbvJ2EWEXZlwmdDjsrcrCIBBsWFGwYOOoG9XCWH4QzqOj97%2B6ImNRxYT%2F7fvKSf09U3q6jcUlbEfyle%2FoUFKE9nXNz0vATJ9kbtuF3V4jzJGFL2Hgra4oUzZ%2BFlvUZXBUsl33R%2BtcRtIP%2BFJ%2FTQbfJP7G%2Bm5jYZG9KozLIBLRDP65EJxEovfB7lgp9WjDTGEOYYk8K3QvWxaZU4Lrf%2B1cGrzicNSbfmrtfvW8ZdOW62n6TV2TrLjjF2Y21QVlCS83AlRmzDnM4hCfTBGr7M7JBP0J%2FNiNyFULfnXjxhUd4Ig5qz8yQffv5sX65MMtUslIJj7aakspZrc3QholEi%2FaAnxVevIb48TCP3dzDBjqkAe7KrbtFhXM3TNViP5UpGc1pkPLDSNz49W2v%2FMHK0x7LfB0%2FGzax8utMqKBsElOagqBKcdPwtOPBKrNSsz8hBxOW9LZSTTnQy1Vygx6qJQdIWnbzF%2BptbK6nsww6V8dKe3YdOsDOXd8nrQarlZqMWhYm3OZVSZd%2FXT8mDFPTu1TBBMhaDNsODgMQR7a4wOaA6tXj08vfD6ng2TpYBm29ld2NYM%2BF&X-Amz-Signature=ef61a4cb03245b040634ee8733ed21f5a64ffb3511fe8b20cde89f6d204e73f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
