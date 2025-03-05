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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KXXB7N%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM6kQQnWwyEbq7Wdid3g9PNvDADKbjhMXKs9BPtMHc5AiEAozd%2B%2F2iVh64ZhUg6P2P9NPLb4mzTaj3CA8zfOlDEIMMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1BuJThRmv%2FWntY7CrcA0bpMhUnnGpjJBn6bEfh2QATJwUqQVROSka2%2Fa%2BAE%2B7tenujF%2F7PQNaarVzreW1T%2BZUUQna%2FGT9NHCW1diWuUAP7ExmZaI7ghX4JPjXLSmxMC3UZNqsxpY7gSgYNDmPuoaGca6NVYyfiWtyidws2WIPuoq0Vh1zKg2FP1cRiNd8NZ6f%2FHo7R7UUdh1AeYRD8tfDWeJ85RT58FC3lVeHaCXhxfQLVPoznCfR%2F8huzXSlTnB%2FW%2BYMPkUazZ6HQH8YokQZlLTsut7A4hxv9%2FXyrKDLuGUz1GR2bwfqTsvXbREA6aUsOHoYGfbKgSTbFkZiVqX3tja3eBN%2Fz2fcMAb9tie89rYe4bkqZu6J3fpvlTHCBR%2F%2FcHVUx8%2BsqvQq9K17ObjCU65UtQN%2BHQozPiIe%2FCSr8rOG6QbT75cQuypo31ud4xz5rz2oN4Z4Oh8bjQ0S1mJlH4hKwOqait7JfpmbEfGMj5DMn%2BFz5gZc5qGa9NkSj62rGAZH4sDSxluEOYninnTE%2BbmnBQaCERpWkQDlU7fB16GDl0WzGs9Y8t4nXKk3foJm8VQ%2BpZKPPGg0UlwFAPaS0Md543lgG9Lagj2WcNPP19vmVxQ7v7c2yWUqUi%2FX5KaD1jDE0YCDyW1C5MNSJn74GOqUBgCBajvpoQ5%2BOVZUi5qD3JDmmwqdtilCo4EQMmamDU3DAXEBk%2FGgW%2FBJCIxDjBeXIrleF9ziBJzdDcJALg7yK3SzMzf0oDwyYLwPI%2FcgaBO9R%2FE5mzYyiNNoKIrL1CtiokRxnC18KaUdfZ9pzb%2FP4TpiIeJtmZPKIKpYtCj9Od8dJC%2FDus%2Bgr9acgWgwYYV8wb1l4fLofJCEQj84gH3aOAMj0vXTG&X-Amz-Signature=d549e50e59ec5574ee6a5b44d8c543b4f546e868874411b5ad4df00979e2a8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KXXB7N%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM6kQQnWwyEbq7Wdid3g9PNvDADKbjhMXKs9BPtMHc5AiEAozd%2B%2F2iVh64ZhUg6P2P9NPLb4mzTaj3CA8zfOlDEIMMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1BuJThRmv%2FWntY7CrcA0bpMhUnnGpjJBn6bEfh2QATJwUqQVROSka2%2Fa%2BAE%2B7tenujF%2F7PQNaarVzreW1T%2BZUUQna%2FGT9NHCW1diWuUAP7ExmZaI7ghX4JPjXLSmxMC3UZNqsxpY7gSgYNDmPuoaGca6NVYyfiWtyidws2WIPuoq0Vh1zKg2FP1cRiNd8NZ6f%2FHo7R7UUdh1AeYRD8tfDWeJ85RT58FC3lVeHaCXhxfQLVPoznCfR%2F8huzXSlTnB%2FW%2BYMPkUazZ6HQH8YokQZlLTsut7A4hxv9%2FXyrKDLuGUz1GR2bwfqTsvXbREA6aUsOHoYGfbKgSTbFkZiVqX3tja3eBN%2Fz2fcMAb9tie89rYe4bkqZu6J3fpvlTHCBR%2F%2FcHVUx8%2BsqvQq9K17ObjCU65UtQN%2BHQozPiIe%2FCSr8rOG6QbT75cQuypo31ud4xz5rz2oN4Z4Oh8bjQ0S1mJlH4hKwOqait7JfpmbEfGMj5DMn%2BFz5gZc5qGa9NkSj62rGAZH4sDSxluEOYninnTE%2BbmnBQaCERpWkQDlU7fB16GDl0WzGs9Y8t4nXKk3foJm8VQ%2BpZKPPGg0UlwFAPaS0Md543lgG9Lagj2WcNPP19vmVxQ7v7c2yWUqUi%2FX5KaD1jDE0YCDyW1C5MNSJn74GOqUBgCBajvpoQ5%2BOVZUi5qD3JDmmwqdtilCo4EQMmamDU3DAXEBk%2FGgW%2FBJCIxDjBeXIrleF9ziBJzdDcJALg7yK3SzMzf0oDwyYLwPI%2FcgaBO9R%2FE5mzYyiNNoKIrL1CtiokRxnC18KaUdfZ9pzb%2FP4TpiIeJtmZPKIKpYtCj9Od8dJC%2FDus%2Bgr9acgWgwYYV8wb1l4fLofJCEQj84gH3aOAMj0vXTG&X-Amz-Signature=3e46744e01ff09fd1cb9fa6a8815eae4a80dd1d94dd501bac68b92d3f878ac7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KXXB7N%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM6kQQnWwyEbq7Wdid3g9PNvDADKbjhMXKs9BPtMHc5AiEAozd%2B%2F2iVh64ZhUg6P2P9NPLb4mzTaj3CA8zfOlDEIMMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1BuJThRmv%2FWntY7CrcA0bpMhUnnGpjJBn6bEfh2QATJwUqQVROSka2%2Fa%2BAE%2B7tenujF%2F7PQNaarVzreW1T%2BZUUQna%2FGT9NHCW1diWuUAP7ExmZaI7ghX4JPjXLSmxMC3UZNqsxpY7gSgYNDmPuoaGca6NVYyfiWtyidws2WIPuoq0Vh1zKg2FP1cRiNd8NZ6f%2FHo7R7UUdh1AeYRD8tfDWeJ85RT58FC3lVeHaCXhxfQLVPoznCfR%2F8huzXSlTnB%2FW%2BYMPkUazZ6HQH8YokQZlLTsut7A4hxv9%2FXyrKDLuGUz1GR2bwfqTsvXbREA6aUsOHoYGfbKgSTbFkZiVqX3tja3eBN%2Fz2fcMAb9tie89rYe4bkqZu6J3fpvlTHCBR%2F%2FcHVUx8%2BsqvQq9K17ObjCU65UtQN%2BHQozPiIe%2FCSr8rOG6QbT75cQuypo31ud4xz5rz2oN4Z4Oh8bjQ0S1mJlH4hKwOqait7JfpmbEfGMj5DMn%2BFz5gZc5qGa9NkSj62rGAZH4sDSxluEOYninnTE%2BbmnBQaCERpWkQDlU7fB16GDl0WzGs9Y8t4nXKk3foJm8VQ%2BpZKPPGg0UlwFAPaS0Md543lgG9Lagj2WcNPP19vmVxQ7v7c2yWUqUi%2FX5KaD1jDE0YCDyW1C5MNSJn74GOqUBgCBajvpoQ5%2BOVZUi5qD3JDmmwqdtilCo4EQMmamDU3DAXEBk%2FGgW%2FBJCIxDjBeXIrleF9ziBJzdDcJALg7yK3SzMzf0oDwyYLwPI%2FcgaBO9R%2FE5mzYyiNNoKIrL1CtiokRxnC18KaUdfZ9pzb%2FP4TpiIeJtmZPKIKpYtCj9Od8dJC%2FDus%2Bgr9acgWgwYYV8wb1l4fLofJCEQj84gH3aOAMj0vXTG&X-Amz-Signature=bf99a960ccb293c4422fda48bda2c820e83b9ea7614e878b3cb7fa70c1fdac52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KXXB7N%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM6kQQnWwyEbq7Wdid3g9PNvDADKbjhMXKs9BPtMHc5AiEAozd%2B%2F2iVh64ZhUg6P2P9NPLb4mzTaj3CA8zfOlDEIMMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1BuJThRmv%2FWntY7CrcA0bpMhUnnGpjJBn6bEfh2QATJwUqQVROSka2%2Fa%2BAE%2B7tenujF%2F7PQNaarVzreW1T%2BZUUQna%2FGT9NHCW1diWuUAP7ExmZaI7ghX4JPjXLSmxMC3UZNqsxpY7gSgYNDmPuoaGca6NVYyfiWtyidws2WIPuoq0Vh1zKg2FP1cRiNd8NZ6f%2FHo7R7UUdh1AeYRD8tfDWeJ85RT58FC3lVeHaCXhxfQLVPoznCfR%2F8huzXSlTnB%2FW%2BYMPkUazZ6HQH8YokQZlLTsut7A4hxv9%2FXyrKDLuGUz1GR2bwfqTsvXbREA6aUsOHoYGfbKgSTbFkZiVqX3tja3eBN%2Fz2fcMAb9tie89rYe4bkqZu6J3fpvlTHCBR%2F%2FcHVUx8%2BsqvQq9K17ObjCU65UtQN%2BHQozPiIe%2FCSr8rOG6QbT75cQuypo31ud4xz5rz2oN4Z4Oh8bjQ0S1mJlH4hKwOqait7JfpmbEfGMj5DMn%2BFz5gZc5qGa9NkSj62rGAZH4sDSxluEOYninnTE%2BbmnBQaCERpWkQDlU7fB16GDl0WzGs9Y8t4nXKk3foJm8VQ%2BpZKPPGg0UlwFAPaS0Md543lgG9Lagj2WcNPP19vmVxQ7v7c2yWUqUi%2FX5KaD1jDE0YCDyW1C5MNSJn74GOqUBgCBajvpoQ5%2BOVZUi5qD3JDmmwqdtilCo4EQMmamDU3DAXEBk%2FGgW%2FBJCIxDjBeXIrleF9ziBJzdDcJALg7yK3SzMzf0oDwyYLwPI%2FcgaBO9R%2FE5mzYyiNNoKIrL1CtiokRxnC18KaUdfZ9pzb%2FP4TpiIeJtmZPKIKpYtCj9Od8dJC%2FDus%2Bgr9acgWgwYYV8wb1l4fLofJCEQj84gH3aOAMj0vXTG&X-Amz-Signature=04049ca93295676411044548620926d42cbda692e2779f51854f78421509d2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KXXB7N%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM6kQQnWwyEbq7Wdid3g9PNvDADKbjhMXKs9BPtMHc5AiEAozd%2B%2F2iVh64ZhUg6P2P9NPLb4mzTaj3CA8zfOlDEIMMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1BuJThRmv%2FWntY7CrcA0bpMhUnnGpjJBn6bEfh2QATJwUqQVROSka2%2Fa%2BAE%2B7tenujF%2F7PQNaarVzreW1T%2BZUUQna%2FGT9NHCW1diWuUAP7ExmZaI7ghX4JPjXLSmxMC3UZNqsxpY7gSgYNDmPuoaGca6NVYyfiWtyidws2WIPuoq0Vh1zKg2FP1cRiNd8NZ6f%2FHo7R7UUdh1AeYRD8tfDWeJ85RT58FC3lVeHaCXhxfQLVPoznCfR%2F8huzXSlTnB%2FW%2BYMPkUazZ6HQH8YokQZlLTsut7A4hxv9%2FXyrKDLuGUz1GR2bwfqTsvXbREA6aUsOHoYGfbKgSTbFkZiVqX3tja3eBN%2Fz2fcMAb9tie89rYe4bkqZu6J3fpvlTHCBR%2F%2FcHVUx8%2BsqvQq9K17ObjCU65UtQN%2BHQozPiIe%2FCSr8rOG6QbT75cQuypo31ud4xz5rz2oN4Z4Oh8bjQ0S1mJlH4hKwOqait7JfpmbEfGMj5DMn%2BFz5gZc5qGa9NkSj62rGAZH4sDSxluEOYninnTE%2BbmnBQaCERpWkQDlU7fB16GDl0WzGs9Y8t4nXKk3foJm8VQ%2BpZKPPGg0UlwFAPaS0Md543lgG9Lagj2WcNPP19vmVxQ7v7c2yWUqUi%2FX5KaD1jDE0YCDyW1C5MNSJn74GOqUBgCBajvpoQ5%2BOVZUi5qD3JDmmwqdtilCo4EQMmamDU3DAXEBk%2FGgW%2FBJCIxDjBeXIrleF9ziBJzdDcJALg7yK3SzMzf0oDwyYLwPI%2FcgaBO9R%2FE5mzYyiNNoKIrL1CtiokRxnC18KaUdfZ9pzb%2FP4TpiIeJtmZPKIKpYtCj9Od8dJC%2FDus%2Bgr9acgWgwYYV8wb1l4fLofJCEQj84gH3aOAMj0vXTG&X-Amz-Signature=35e92ba86db478ef10e5d386ff44ff1506766f8bf606c75304fb18a8a432f6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662KXXB7N%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM6kQQnWwyEbq7Wdid3g9PNvDADKbjhMXKs9BPtMHc5AiEAozd%2B%2F2iVh64ZhUg6P2P9NPLb4mzTaj3CA8zfOlDEIMMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1BuJThRmv%2FWntY7CrcA0bpMhUnnGpjJBn6bEfh2QATJwUqQVROSka2%2Fa%2BAE%2B7tenujF%2F7PQNaarVzreW1T%2BZUUQna%2FGT9NHCW1diWuUAP7ExmZaI7ghX4JPjXLSmxMC3UZNqsxpY7gSgYNDmPuoaGca6NVYyfiWtyidws2WIPuoq0Vh1zKg2FP1cRiNd8NZ6f%2FHo7R7UUdh1AeYRD8tfDWeJ85RT58FC3lVeHaCXhxfQLVPoznCfR%2F8huzXSlTnB%2FW%2BYMPkUazZ6HQH8YokQZlLTsut7A4hxv9%2FXyrKDLuGUz1GR2bwfqTsvXbREA6aUsOHoYGfbKgSTbFkZiVqX3tja3eBN%2Fz2fcMAb9tie89rYe4bkqZu6J3fpvlTHCBR%2F%2FcHVUx8%2BsqvQq9K17ObjCU65UtQN%2BHQozPiIe%2FCSr8rOG6QbT75cQuypo31ud4xz5rz2oN4Z4Oh8bjQ0S1mJlH4hKwOqait7JfpmbEfGMj5DMn%2BFz5gZc5qGa9NkSj62rGAZH4sDSxluEOYninnTE%2BbmnBQaCERpWkQDlU7fB16GDl0WzGs9Y8t4nXKk3foJm8VQ%2BpZKPPGg0UlwFAPaS0Md543lgG9Lagj2WcNPP19vmVxQ7v7c2yWUqUi%2FX5KaD1jDE0YCDyW1C5MNSJn74GOqUBgCBajvpoQ5%2BOVZUi5qD3JDmmwqdtilCo4EQMmamDU3DAXEBk%2FGgW%2FBJCIxDjBeXIrleF9ziBJzdDcJALg7yK3SzMzf0oDwyYLwPI%2FcgaBO9R%2FE5mzYyiNNoKIrL1CtiokRxnC18KaUdfZ9pzb%2FP4TpiIeJtmZPKIKpYtCj9Od8dJC%2FDus%2Bgr9acgWgwYYV8wb1l4fLofJCEQj84gH3aOAMj0vXTG&X-Amz-Signature=85cdecafe0bfa69e1cc0494c65a7effbc18b085948da7078559da04ab60ffceb&X-Amz-SignedHeaders=host&x-id=GetObject)
