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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQXOAS2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDvMnizsQGYmPosNYm7bTYMhqVrnfKjHNDckt8vtjVZ5gIgKYl7U%2BB7SFiqpuoDPgQZjos72d91dG5FKqFMXR3eZD8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzK5GHSnfxkbvjT9SrcA2bxpXrZ99l6jSV4hiFVkWO54pzd7QOZtTlvNlb6T7EjVUZ2F4feOaAZSvEEFNYeHRfOhH5FJQOh93HXFFZK6%2Bjl6yb%2BWijzMEaOCBb1Msvh4LHd6Z7%2FyNryKc4FQQG0VEDfblcjPG4nzpwX18a1VOM%2FwIRr0H%2F9YEZUBUxyXNnmcf3CK0SXLIEgeJzrrGgQDpjA3T3YQ6P7VyVLzKvgiorZNFr0kVH9naBl6TkLO6juAv8FjMZKJ%2FULwc7A7iHvPCl0anvQrRoxoDtdM3ZqZEi8WCDuxPZsOLU9fucm03mi9ok243Ja3o6UqUKnEJScQff6wq6a1d%2Fx2B4Z9uNdLZbw%2B57%2F89NKw7zaFC6A4tWAa1aX4OipqUMgqROFur8XxTJdNMtYz0TuvsNFKyill9kdD2Y1AXkQ5b4J98gbjewwaSWFLpczxwjLhH4rb10Iy1lgO%2FhEzpG5NzdR%2BKfUeTsCiwRUngLEilTu6GUkFGMy1CkNNRqoA%2BlCqoEYRQTsZpT9Z1y2utwXhv7hcHrlBMe6l5kpKdCG%2FqeeQKVRjt3GZzNmzmtDAejRrixG6bFcAmfBSCCSd7ihsuxFQS%2F4zMJWkTEe1LxLZEOpye7dQozvqDT%2B4%2BFE7Ji43nnMMMuDy8AGOqUBMw4qIA7LgkJn2Zhq%2B3wKitPJoTb9Wr5hNswsQM6b8gOLgAfkpn%2B0UrLti0sCLoR6kxQgx6rlvT0UpA37AiTgO94nXzK5FGl7Y%2BE6qPl7aYrtP9G%2FzHb2jK59r5BV2FXjGsXWGQNnMI3fsJOEW6yMu518heaS%2Fk2jiNE0jHaI3fUZq9H5cQU%2FUSMMuC5NWa1lDa47FE1G2MH3UK5Mdqpp6YP1F2dj&X-Amz-Signature=25e733547a97be9cc99f47f37621267c3dc4a1741a9c44196ad947200f716508&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQXOAS2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDvMnizsQGYmPosNYm7bTYMhqVrnfKjHNDckt8vtjVZ5gIgKYl7U%2BB7SFiqpuoDPgQZjos72d91dG5FKqFMXR3eZD8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzK5GHSnfxkbvjT9SrcA2bxpXrZ99l6jSV4hiFVkWO54pzd7QOZtTlvNlb6T7EjVUZ2F4feOaAZSvEEFNYeHRfOhH5FJQOh93HXFFZK6%2Bjl6yb%2BWijzMEaOCBb1Msvh4LHd6Z7%2FyNryKc4FQQG0VEDfblcjPG4nzpwX18a1VOM%2FwIRr0H%2F9YEZUBUxyXNnmcf3CK0SXLIEgeJzrrGgQDpjA3T3YQ6P7VyVLzKvgiorZNFr0kVH9naBl6TkLO6juAv8FjMZKJ%2FULwc7A7iHvPCl0anvQrRoxoDtdM3ZqZEi8WCDuxPZsOLU9fucm03mi9ok243Ja3o6UqUKnEJScQff6wq6a1d%2Fx2B4Z9uNdLZbw%2B57%2F89NKw7zaFC6A4tWAa1aX4OipqUMgqROFur8XxTJdNMtYz0TuvsNFKyill9kdD2Y1AXkQ5b4J98gbjewwaSWFLpczxwjLhH4rb10Iy1lgO%2FhEzpG5NzdR%2BKfUeTsCiwRUngLEilTu6GUkFGMy1CkNNRqoA%2BlCqoEYRQTsZpT9Z1y2utwXhv7hcHrlBMe6l5kpKdCG%2FqeeQKVRjt3GZzNmzmtDAejRrixG6bFcAmfBSCCSd7ihsuxFQS%2F4zMJWkTEe1LxLZEOpye7dQozvqDT%2B4%2BFE7Ji43nnMMMuDy8AGOqUBMw4qIA7LgkJn2Zhq%2B3wKitPJoTb9Wr5hNswsQM6b8gOLgAfkpn%2B0UrLti0sCLoR6kxQgx6rlvT0UpA37AiTgO94nXzK5FGl7Y%2BE6qPl7aYrtP9G%2FzHb2jK59r5BV2FXjGsXWGQNnMI3fsJOEW6yMu518heaS%2Fk2jiNE0jHaI3fUZq9H5cQU%2FUSMMuC5NWa1lDa47FE1G2MH3UK5Mdqpp6YP1F2dj&X-Amz-Signature=3da67f386e1ec029047b5859c5c98c437cd197e508217126a2845b002fef054f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQXOAS2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDvMnizsQGYmPosNYm7bTYMhqVrnfKjHNDckt8vtjVZ5gIgKYl7U%2BB7SFiqpuoDPgQZjos72d91dG5FKqFMXR3eZD8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzK5GHSnfxkbvjT9SrcA2bxpXrZ99l6jSV4hiFVkWO54pzd7QOZtTlvNlb6T7EjVUZ2F4feOaAZSvEEFNYeHRfOhH5FJQOh93HXFFZK6%2Bjl6yb%2BWijzMEaOCBb1Msvh4LHd6Z7%2FyNryKc4FQQG0VEDfblcjPG4nzpwX18a1VOM%2FwIRr0H%2F9YEZUBUxyXNnmcf3CK0SXLIEgeJzrrGgQDpjA3T3YQ6P7VyVLzKvgiorZNFr0kVH9naBl6TkLO6juAv8FjMZKJ%2FULwc7A7iHvPCl0anvQrRoxoDtdM3ZqZEi8WCDuxPZsOLU9fucm03mi9ok243Ja3o6UqUKnEJScQff6wq6a1d%2Fx2B4Z9uNdLZbw%2B57%2F89NKw7zaFC6A4tWAa1aX4OipqUMgqROFur8XxTJdNMtYz0TuvsNFKyill9kdD2Y1AXkQ5b4J98gbjewwaSWFLpczxwjLhH4rb10Iy1lgO%2FhEzpG5NzdR%2BKfUeTsCiwRUngLEilTu6GUkFGMy1CkNNRqoA%2BlCqoEYRQTsZpT9Z1y2utwXhv7hcHrlBMe6l5kpKdCG%2FqeeQKVRjt3GZzNmzmtDAejRrixG6bFcAmfBSCCSd7ihsuxFQS%2F4zMJWkTEe1LxLZEOpye7dQozvqDT%2B4%2BFE7Ji43nnMMMuDy8AGOqUBMw4qIA7LgkJn2Zhq%2B3wKitPJoTb9Wr5hNswsQM6b8gOLgAfkpn%2B0UrLti0sCLoR6kxQgx6rlvT0UpA37AiTgO94nXzK5FGl7Y%2BE6qPl7aYrtP9G%2FzHb2jK59r5BV2FXjGsXWGQNnMI3fsJOEW6yMu518heaS%2Fk2jiNE0jHaI3fUZq9H5cQU%2FUSMMuC5NWa1lDa47FE1G2MH3UK5Mdqpp6YP1F2dj&X-Amz-Signature=cde5cb7be386af9e9c8c1b3995cde1bdbe104b403b44758b143b09303b1f3137&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQXOAS2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDvMnizsQGYmPosNYm7bTYMhqVrnfKjHNDckt8vtjVZ5gIgKYl7U%2BB7SFiqpuoDPgQZjos72d91dG5FKqFMXR3eZD8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzK5GHSnfxkbvjT9SrcA2bxpXrZ99l6jSV4hiFVkWO54pzd7QOZtTlvNlb6T7EjVUZ2F4feOaAZSvEEFNYeHRfOhH5FJQOh93HXFFZK6%2Bjl6yb%2BWijzMEaOCBb1Msvh4LHd6Z7%2FyNryKc4FQQG0VEDfblcjPG4nzpwX18a1VOM%2FwIRr0H%2F9YEZUBUxyXNnmcf3CK0SXLIEgeJzrrGgQDpjA3T3YQ6P7VyVLzKvgiorZNFr0kVH9naBl6TkLO6juAv8FjMZKJ%2FULwc7A7iHvPCl0anvQrRoxoDtdM3ZqZEi8WCDuxPZsOLU9fucm03mi9ok243Ja3o6UqUKnEJScQff6wq6a1d%2Fx2B4Z9uNdLZbw%2B57%2F89NKw7zaFC6A4tWAa1aX4OipqUMgqROFur8XxTJdNMtYz0TuvsNFKyill9kdD2Y1AXkQ5b4J98gbjewwaSWFLpczxwjLhH4rb10Iy1lgO%2FhEzpG5NzdR%2BKfUeTsCiwRUngLEilTu6GUkFGMy1CkNNRqoA%2BlCqoEYRQTsZpT9Z1y2utwXhv7hcHrlBMe6l5kpKdCG%2FqeeQKVRjt3GZzNmzmtDAejRrixG6bFcAmfBSCCSd7ihsuxFQS%2F4zMJWkTEe1LxLZEOpye7dQozvqDT%2B4%2BFE7Ji43nnMMMuDy8AGOqUBMw4qIA7LgkJn2Zhq%2B3wKitPJoTb9Wr5hNswsQM6b8gOLgAfkpn%2B0UrLti0sCLoR6kxQgx6rlvT0UpA37AiTgO94nXzK5FGl7Y%2BE6qPl7aYrtP9G%2FzHb2jK59r5BV2FXjGsXWGQNnMI3fsJOEW6yMu518heaS%2Fk2jiNE0jHaI3fUZq9H5cQU%2FUSMMuC5NWa1lDa47FE1G2MH3UK5Mdqpp6YP1F2dj&X-Amz-Signature=5d070b94ce661d03da503130f0b2eff5e3b96e692eccca048fd0d49a5c702434&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQXOAS2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDvMnizsQGYmPosNYm7bTYMhqVrnfKjHNDckt8vtjVZ5gIgKYl7U%2BB7SFiqpuoDPgQZjos72d91dG5FKqFMXR3eZD8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzK5GHSnfxkbvjT9SrcA2bxpXrZ99l6jSV4hiFVkWO54pzd7QOZtTlvNlb6T7EjVUZ2F4feOaAZSvEEFNYeHRfOhH5FJQOh93HXFFZK6%2Bjl6yb%2BWijzMEaOCBb1Msvh4LHd6Z7%2FyNryKc4FQQG0VEDfblcjPG4nzpwX18a1VOM%2FwIRr0H%2F9YEZUBUxyXNnmcf3CK0SXLIEgeJzrrGgQDpjA3T3YQ6P7VyVLzKvgiorZNFr0kVH9naBl6TkLO6juAv8FjMZKJ%2FULwc7A7iHvPCl0anvQrRoxoDtdM3ZqZEi8WCDuxPZsOLU9fucm03mi9ok243Ja3o6UqUKnEJScQff6wq6a1d%2Fx2B4Z9uNdLZbw%2B57%2F89NKw7zaFC6A4tWAa1aX4OipqUMgqROFur8XxTJdNMtYz0TuvsNFKyill9kdD2Y1AXkQ5b4J98gbjewwaSWFLpczxwjLhH4rb10Iy1lgO%2FhEzpG5NzdR%2BKfUeTsCiwRUngLEilTu6GUkFGMy1CkNNRqoA%2BlCqoEYRQTsZpT9Z1y2utwXhv7hcHrlBMe6l5kpKdCG%2FqeeQKVRjt3GZzNmzmtDAejRrixG6bFcAmfBSCCSd7ihsuxFQS%2F4zMJWkTEe1LxLZEOpye7dQozvqDT%2B4%2BFE7Ji43nnMMMuDy8AGOqUBMw4qIA7LgkJn2Zhq%2B3wKitPJoTb9Wr5hNswsQM6b8gOLgAfkpn%2B0UrLti0sCLoR6kxQgx6rlvT0UpA37AiTgO94nXzK5FGl7Y%2BE6qPl7aYrtP9G%2FzHb2jK59r5BV2FXjGsXWGQNnMI3fsJOEW6yMu518heaS%2Fk2jiNE0jHaI3fUZq9H5cQU%2FUSMMuC5NWa1lDa47FE1G2MH3UK5Mdqpp6YP1F2dj&X-Amz-Signature=f0a32a4e1ee57569c18436ec232aaae0ee9e7a125ded99c4a7dcc1178f6c0061&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQXOAS2%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDvMnizsQGYmPosNYm7bTYMhqVrnfKjHNDckt8vtjVZ5gIgKYl7U%2BB7SFiqpuoDPgQZjos72d91dG5FKqFMXR3eZD8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzK5GHSnfxkbvjT9SrcA2bxpXrZ99l6jSV4hiFVkWO54pzd7QOZtTlvNlb6T7EjVUZ2F4feOaAZSvEEFNYeHRfOhH5FJQOh93HXFFZK6%2Bjl6yb%2BWijzMEaOCBb1Msvh4LHd6Z7%2FyNryKc4FQQG0VEDfblcjPG4nzpwX18a1VOM%2FwIRr0H%2F9YEZUBUxyXNnmcf3CK0SXLIEgeJzrrGgQDpjA3T3YQ6P7VyVLzKvgiorZNFr0kVH9naBl6TkLO6juAv8FjMZKJ%2FULwc7A7iHvPCl0anvQrRoxoDtdM3ZqZEi8WCDuxPZsOLU9fucm03mi9ok243Ja3o6UqUKnEJScQff6wq6a1d%2Fx2B4Z9uNdLZbw%2B57%2F89NKw7zaFC6A4tWAa1aX4OipqUMgqROFur8XxTJdNMtYz0TuvsNFKyill9kdD2Y1AXkQ5b4J98gbjewwaSWFLpczxwjLhH4rb10Iy1lgO%2FhEzpG5NzdR%2BKfUeTsCiwRUngLEilTu6GUkFGMy1CkNNRqoA%2BlCqoEYRQTsZpT9Z1y2utwXhv7hcHrlBMe6l5kpKdCG%2FqeeQKVRjt3GZzNmzmtDAejRrixG6bFcAmfBSCCSd7ihsuxFQS%2F4zMJWkTEe1LxLZEOpye7dQozvqDT%2B4%2BFE7Ji43nnMMMuDy8AGOqUBMw4qIA7LgkJn2Zhq%2B3wKitPJoTb9Wr5hNswsQM6b8gOLgAfkpn%2B0UrLti0sCLoR6kxQgx6rlvT0UpA37AiTgO94nXzK5FGl7Y%2BE6qPl7aYrtP9G%2FzHb2jK59r5BV2FXjGsXWGQNnMI3fsJOEW6yMu518heaS%2Fk2jiNE0jHaI3fUZq9H5cQU%2FUSMMuC5NWa1lDa47FE1G2MH3UK5Mdqpp6YP1F2dj&X-Amz-Signature=1790db23cbc3e650bb70869279bd4a6b4e460821a0b503f1f1b65a4d49d9a7fc&X-Amz-SignedHeaders=host&x-id=GetObject)
