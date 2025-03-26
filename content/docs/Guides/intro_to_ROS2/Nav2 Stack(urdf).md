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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUUQTAU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECofmBj%2B58HNUhryAn9kZOc%2FTChNOeExnPFCeQwOtLKAiBY75eWn4cUs3I6RhE6dK6yjWPkcTOc5AVBJP8Scrq2Pir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1%2FFD4U4uEvgUawmuKtwDNaNoB2%2Bq75gV3mROCZJ741dB9RNA0gsMaDBim7fY%2Ba7EUqhr2%2F8gM3mNfFuudrqfNDcnts9axPD1ryCz5YqAPLidg8tFEJtAhQcFS23rDyxRwuQlGQM7qFe%2FljYKkK6%2BprNuiGjbUPnu7%2BWonl41DOMj5oMIoUZ0Z6hXMIO82vK77y44q0tIm4nXxKhPg7WxYoFOwsBWFzow4BkgAWJrkjahvYc6y07wD03wyshr4l6uFPZwft81aNNT7gPbN8dIfMStCs2MmExYIN4l3lOFYREGxXve5uj1gtfTlPAlWXrvfiwK0y4yeiZNZ5RRMAi9bRWP5E1VcNG2orBlHVo0hFte79BGDjaIDuNJXji6jHBuBq%2BNPv5GdJ96heAZLWNPYOeoz5JsxlRDVtLGmFryPTTQqeVszBhLY9DysvJuvCQWwNwXX0Z6EaUV2wbaVwUfLl6%2F%2FffoSvV4RuQmB%2FPHV2OdkUyohMKsRknf93QdORHct0imhQGoWJ0FOMPRBSdwjGMNbp4DItlq4dJgyGW2QUXcPtS7jOraX6MzYL3BCqcty2rK7l%2FOQVHEf%2FdWT2VKHmEl6rHQEqv9U8kPcb6aC9q7vrPMX%2FYOg5El1PoORpbX29qwblvYe7Ux4mowiI6NvwY6pgHF94clSpc09b2b82IGLZZMNxOgb1VS3kd%2B%2B2Xz7dU3cc6flhA3AO81l4R20DKv3eANemDJl2WapjXX7IeAfbZQ%2B%2BDNbraYz1Yu6DycxL4vh3F7f0IZRIw8junB4r%2FVXOTJ30PDZkbFGKKwsMQFoVnLbbly7TuskCdCOqkH8OogXJLdflD3C%2FUM8b6dj9QGOQnMAGH%2Bsh2ceqoyLqP9rI%2FEVMl4%2FLU7&X-Amz-Signature=92175f7aac58db003d83f40ccc0a7bb61fc56dd8d2373b481e6607e8e1aa615b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUUQTAU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECofmBj%2B58HNUhryAn9kZOc%2FTChNOeExnPFCeQwOtLKAiBY75eWn4cUs3I6RhE6dK6yjWPkcTOc5AVBJP8Scrq2Pir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1%2FFD4U4uEvgUawmuKtwDNaNoB2%2Bq75gV3mROCZJ741dB9RNA0gsMaDBim7fY%2Ba7EUqhr2%2F8gM3mNfFuudrqfNDcnts9axPD1ryCz5YqAPLidg8tFEJtAhQcFS23rDyxRwuQlGQM7qFe%2FljYKkK6%2BprNuiGjbUPnu7%2BWonl41DOMj5oMIoUZ0Z6hXMIO82vK77y44q0tIm4nXxKhPg7WxYoFOwsBWFzow4BkgAWJrkjahvYc6y07wD03wyshr4l6uFPZwft81aNNT7gPbN8dIfMStCs2MmExYIN4l3lOFYREGxXve5uj1gtfTlPAlWXrvfiwK0y4yeiZNZ5RRMAi9bRWP5E1VcNG2orBlHVo0hFte79BGDjaIDuNJXji6jHBuBq%2BNPv5GdJ96heAZLWNPYOeoz5JsxlRDVtLGmFryPTTQqeVszBhLY9DysvJuvCQWwNwXX0Z6EaUV2wbaVwUfLl6%2F%2FffoSvV4RuQmB%2FPHV2OdkUyohMKsRknf93QdORHct0imhQGoWJ0FOMPRBSdwjGMNbp4DItlq4dJgyGW2QUXcPtS7jOraX6MzYL3BCqcty2rK7l%2FOQVHEf%2FdWT2VKHmEl6rHQEqv9U8kPcb6aC9q7vrPMX%2FYOg5El1PoORpbX29qwblvYe7Ux4mowiI6NvwY6pgHF94clSpc09b2b82IGLZZMNxOgb1VS3kd%2B%2B2Xz7dU3cc6flhA3AO81l4R20DKv3eANemDJl2WapjXX7IeAfbZQ%2B%2BDNbraYz1Yu6DycxL4vh3F7f0IZRIw8junB4r%2FVXOTJ30PDZkbFGKKwsMQFoVnLbbly7TuskCdCOqkH8OogXJLdflD3C%2FUM8b6dj9QGOQnMAGH%2Bsh2ceqoyLqP9rI%2FEVMl4%2FLU7&X-Amz-Signature=6f7ea07c342491fdd83595ea11b28d1fd770da129337259bb27b681bd9f87c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUUQTAU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECofmBj%2B58HNUhryAn9kZOc%2FTChNOeExnPFCeQwOtLKAiBY75eWn4cUs3I6RhE6dK6yjWPkcTOc5AVBJP8Scrq2Pir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1%2FFD4U4uEvgUawmuKtwDNaNoB2%2Bq75gV3mROCZJ741dB9RNA0gsMaDBim7fY%2Ba7EUqhr2%2F8gM3mNfFuudrqfNDcnts9axPD1ryCz5YqAPLidg8tFEJtAhQcFS23rDyxRwuQlGQM7qFe%2FljYKkK6%2BprNuiGjbUPnu7%2BWonl41DOMj5oMIoUZ0Z6hXMIO82vK77y44q0tIm4nXxKhPg7WxYoFOwsBWFzow4BkgAWJrkjahvYc6y07wD03wyshr4l6uFPZwft81aNNT7gPbN8dIfMStCs2MmExYIN4l3lOFYREGxXve5uj1gtfTlPAlWXrvfiwK0y4yeiZNZ5RRMAi9bRWP5E1VcNG2orBlHVo0hFte79BGDjaIDuNJXji6jHBuBq%2BNPv5GdJ96heAZLWNPYOeoz5JsxlRDVtLGmFryPTTQqeVszBhLY9DysvJuvCQWwNwXX0Z6EaUV2wbaVwUfLl6%2F%2FffoSvV4RuQmB%2FPHV2OdkUyohMKsRknf93QdORHct0imhQGoWJ0FOMPRBSdwjGMNbp4DItlq4dJgyGW2QUXcPtS7jOraX6MzYL3BCqcty2rK7l%2FOQVHEf%2FdWT2VKHmEl6rHQEqv9U8kPcb6aC9q7vrPMX%2FYOg5El1PoORpbX29qwblvYe7Ux4mowiI6NvwY6pgHF94clSpc09b2b82IGLZZMNxOgb1VS3kd%2B%2B2Xz7dU3cc6flhA3AO81l4R20DKv3eANemDJl2WapjXX7IeAfbZQ%2B%2BDNbraYz1Yu6DycxL4vh3F7f0IZRIw8junB4r%2FVXOTJ30PDZkbFGKKwsMQFoVnLbbly7TuskCdCOqkH8OogXJLdflD3C%2FUM8b6dj9QGOQnMAGH%2Bsh2ceqoyLqP9rI%2FEVMl4%2FLU7&X-Amz-Signature=98de69f78f93bd7d5127812a82f8466a3373c8a87db9cacbb2d154ee12cad955&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUUQTAU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECofmBj%2B58HNUhryAn9kZOc%2FTChNOeExnPFCeQwOtLKAiBY75eWn4cUs3I6RhE6dK6yjWPkcTOc5AVBJP8Scrq2Pir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1%2FFD4U4uEvgUawmuKtwDNaNoB2%2Bq75gV3mROCZJ741dB9RNA0gsMaDBim7fY%2Ba7EUqhr2%2F8gM3mNfFuudrqfNDcnts9axPD1ryCz5YqAPLidg8tFEJtAhQcFS23rDyxRwuQlGQM7qFe%2FljYKkK6%2BprNuiGjbUPnu7%2BWonl41DOMj5oMIoUZ0Z6hXMIO82vK77y44q0tIm4nXxKhPg7WxYoFOwsBWFzow4BkgAWJrkjahvYc6y07wD03wyshr4l6uFPZwft81aNNT7gPbN8dIfMStCs2MmExYIN4l3lOFYREGxXve5uj1gtfTlPAlWXrvfiwK0y4yeiZNZ5RRMAi9bRWP5E1VcNG2orBlHVo0hFte79BGDjaIDuNJXji6jHBuBq%2BNPv5GdJ96heAZLWNPYOeoz5JsxlRDVtLGmFryPTTQqeVszBhLY9DysvJuvCQWwNwXX0Z6EaUV2wbaVwUfLl6%2F%2FffoSvV4RuQmB%2FPHV2OdkUyohMKsRknf93QdORHct0imhQGoWJ0FOMPRBSdwjGMNbp4DItlq4dJgyGW2QUXcPtS7jOraX6MzYL3BCqcty2rK7l%2FOQVHEf%2FdWT2VKHmEl6rHQEqv9U8kPcb6aC9q7vrPMX%2FYOg5El1PoORpbX29qwblvYe7Ux4mowiI6NvwY6pgHF94clSpc09b2b82IGLZZMNxOgb1VS3kd%2B%2B2Xz7dU3cc6flhA3AO81l4R20DKv3eANemDJl2WapjXX7IeAfbZQ%2B%2BDNbraYz1Yu6DycxL4vh3F7f0IZRIw8junB4r%2FVXOTJ30PDZkbFGKKwsMQFoVnLbbly7TuskCdCOqkH8OogXJLdflD3C%2FUM8b6dj9QGOQnMAGH%2Bsh2ceqoyLqP9rI%2FEVMl4%2FLU7&X-Amz-Signature=3d2a7923c10b728fbf850ccc8fb669f1f0eaea6be73e6fd8cf8fe4771954117c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUUQTAU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECofmBj%2B58HNUhryAn9kZOc%2FTChNOeExnPFCeQwOtLKAiBY75eWn4cUs3I6RhE6dK6yjWPkcTOc5AVBJP8Scrq2Pir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1%2FFD4U4uEvgUawmuKtwDNaNoB2%2Bq75gV3mROCZJ741dB9RNA0gsMaDBim7fY%2Ba7EUqhr2%2F8gM3mNfFuudrqfNDcnts9axPD1ryCz5YqAPLidg8tFEJtAhQcFS23rDyxRwuQlGQM7qFe%2FljYKkK6%2BprNuiGjbUPnu7%2BWonl41DOMj5oMIoUZ0Z6hXMIO82vK77y44q0tIm4nXxKhPg7WxYoFOwsBWFzow4BkgAWJrkjahvYc6y07wD03wyshr4l6uFPZwft81aNNT7gPbN8dIfMStCs2MmExYIN4l3lOFYREGxXve5uj1gtfTlPAlWXrvfiwK0y4yeiZNZ5RRMAi9bRWP5E1VcNG2orBlHVo0hFte79BGDjaIDuNJXji6jHBuBq%2BNPv5GdJ96heAZLWNPYOeoz5JsxlRDVtLGmFryPTTQqeVszBhLY9DysvJuvCQWwNwXX0Z6EaUV2wbaVwUfLl6%2F%2FffoSvV4RuQmB%2FPHV2OdkUyohMKsRknf93QdORHct0imhQGoWJ0FOMPRBSdwjGMNbp4DItlq4dJgyGW2QUXcPtS7jOraX6MzYL3BCqcty2rK7l%2FOQVHEf%2FdWT2VKHmEl6rHQEqv9U8kPcb6aC9q7vrPMX%2FYOg5El1PoORpbX29qwblvYe7Ux4mowiI6NvwY6pgHF94clSpc09b2b82IGLZZMNxOgb1VS3kd%2B%2B2Xz7dU3cc6flhA3AO81l4R20DKv3eANemDJl2WapjXX7IeAfbZQ%2B%2BDNbraYz1Yu6DycxL4vh3F7f0IZRIw8junB4r%2FVXOTJ30PDZkbFGKKwsMQFoVnLbbly7TuskCdCOqkH8OogXJLdflD3C%2FUM8b6dj9QGOQnMAGH%2Bsh2ceqoyLqP9rI%2FEVMl4%2FLU7&X-Amz-Signature=43352a111b15bf1bdd5c0944adf3d15dbc9fbbd6bd66166cb227a8c8f3853fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSUUQTAU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECofmBj%2B58HNUhryAn9kZOc%2FTChNOeExnPFCeQwOtLKAiBY75eWn4cUs3I6RhE6dK6yjWPkcTOc5AVBJP8Scrq2Pir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIM1%2FFD4U4uEvgUawmuKtwDNaNoB2%2Bq75gV3mROCZJ741dB9RNA0gsMaDBim7fY%2Ba7EUqhr2%2F8gM3mNfFuudrqfNDcnts9axPD1ryCz5YqAPLidg8tFEJtAhQcFS23rDyxRwuQlGQM7qFe%2FljYKkK6%2BprNuiGjbUPnu7%2BWonl41DOMj5oMIoUZ0Z6hXMIO82vK77y44q0tIm4nXxKhPg7WxYoFOwsBWFzow4BkgAWJrkjahvYc6y07wD03wyshr4l6uFPZwft81aNNT7gPbN8dIfMStCs2MmExYIN4l3lOFYREGxXve5uj1gtfTlPAlWXrvfiwK0y4yeiZNZ5RRMAi9bRWP5E1VcNG2orBlHVo0hFte79BGDjaIDuNJXji6jHBuBq%2BNPv5GdJ96heAZLWNPYOeoz5JsxlRDVtLGmFryPTTQqeVszBhLY9DysvJuvCQWwNwXX0Z6EaUV2wbaVwUfLl6%2F%2FffoSvV4RuQmB%2FPHV2OdkUyohMKsRknf93QdORHct0imhQGoWJ0FOMPRBSdwjGMNbp4DItlq4dJgyGW2QUXcPtS7jOraX6MzYL3BCqcty2rK7l%2FOQVHEf%2FdWT2VKHmEl6rHQEqv9U8kPcb6aC9q7vrPMX%2FYOg5El1PoORpbX29qwblvYe7Ux4mowiI6NvwY6pgHF94clSpc09b2b82IGLZZMNxOgb1VS3kd%2B%2B2Xz7dU3cc6flhA3AO81l4R20DKv3eANemDJl2WapjXX7IeAfbZQ%2B%2BDNbraYz1Yu6DycxL4vh3F7f0IZRIw8junB4r%2FVXOTJ30PDZkbFGKKwsMQFoVnLbbly7TuskCdCOqkH8OogXJLdflD3C%2FUM8b6dj9QGOQnMAGH%2Bsh2ceqoyLqP9rI%2FEVMl4%2FLU7&X-Amz-Signature=7aa3addcfffe9267f38e56689f9648249b61116a351fde06be1cf22e0d66b294&X-Amz-SignedHeaders=host&x-id=GetObject)
