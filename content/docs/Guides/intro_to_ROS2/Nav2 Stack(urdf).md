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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGA2FBU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrSDSpzeKCT98JAkRYsGwBTVwSlldN0WeWNLc5reWkyQIhAOwfOar%2F0MyN1BdpX91nQn6gDbmzKwKM4CvdP7cE71laKv8DCFcQABoMNjM3NDIzMTgzODA1IgzW4JV%2FvdXN9aHkrXMq3AMGYfSz1ejGKLFHaCvKDpygpmduFPxlC3nPn7gRh%2BjFNVNQn2AdPPlTqKYfmw2KWmOUiUosvBCcp0hoMcHay1RW9r0SAHsPN2BExm%2BctFgY%2BK7K7Ee6oqCi021eTFwP%2BEaadZ3%2FTRTR09quANeV5vdlsuGTtJWDhXolsfL864SIiPAKqF3mfkAVzHlsLtxMI8YGrsGRd1yV0%2B1dcwgUAzRZG9JHWJOt4cEM2tsQl1gAz7b0bA7uu4jDA51KVBTJvDmhuyZk1oWXcfu21FchH4eP0Bce9DWy4mpuxfswinVzVJ15qFLDrh2NK0soK4XJlPsVOyGKARlWH55Fib%2BRdBcADFdA9NxoB9KI%2BsQQ%2BW79tbkPOhy383FWeMVJt61WLNAgotbVzQ0MDKyO1rUkhKUpdQzUIGegAOlJbl4SwcbtL4l2fEXKqw2oZfcHYsw7LkxoVXaG7B7bOXVKRIpNPLhoKLzcQ%2BVzZ3S23QKJBl7kVEA6p47UGL0K8y1mZ6UTnLNoXZJVZzEcgpPHW8eWiTjXvz213pbEl36gkddgtLYcicN3gEHbU5RG8%2BlXcAZGUQEmGzG2UiYyeCBCjCjGclrSqyepahQOPnnWgJpcCdzsqn%2F0I8HURf0WJmtN4DDR7%2BvABjqkATMucEAg4il31r0GqZQzGYyFCiLAHeS1dZ5P5J%2FZ6vG61BJAkApvSxmqP3RceC9EwQat1f3lkC0OM%2BW0c%2BPSJREzZbnIfPj92EdmpedzMrEhpRUzX66XoaBZaVt8vson%2FtIm1JVj6x0DF04KLhZdZQjpguAOZJs4Aku8L2neLlJ1Z96lIyI5pAlkwr8jpvz4ZehA2ClUHNi5Czd3xnX02%2B051M2v&X-Amz-Signature=c327497ea903cedb3fe25392c7e68d5b8e7c7fb541a2d471b0ebfc2e2342b79f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGA2FBU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrSDSpzeKCT98JAkRYsGwBTVwSlldN0WeWNLc5reWkyQIhAOwfOar%2F0MyN1BdpX91nQn6gDbmzKwKM4CvdP7cE71laKv8DCFcQABoMNjM3NDIzMTgzODA1IgzW4JV%2FvdXN9aHkrXMq3AMGYfSz1ejGKLFHaCvKDpygpmduFPxlC3nPn7gRh%2BjFNVNQn2AdPPlTqKYfmw2KWmOUiUosvBCcp0hoMcHay1RW9r0SAHsPN2BExm%2BctFgY%2BK7K7Ee6oqCi021eTFwP%2BEaadZ3%2FTRTR09quANeV5vdlsuGTtJWDhXolsfL864SIiPAKqF3mfkAVzHlsLtxMI8YGrsGRd1yV0%2B1dcwgUAzRZG9JHWJOt4cEM2tsQl1gAz7b0bA7uu4jDA51KVBTJvDmhuyZk1oWXcfu21FchH4eP0Bce9DWy4mpuxfswinVzVJ15qFLDrh2NK0soK4XJlPsVOyGKARlWH55Fib%2BRdBcADFdA9NxoB9KI%2BsQQ%2BW79tbkPOhy383FWeMVJt61WLNAgotbVzQ0MDKyO1rUkhKUpdQzUIGegAOlJbl4SwcbtL4l2fEXKqw2oZfcHYsw7LkxoVXaG7B7bOXVKRIpNPLhoKLzcQ%2BVzZ3S23QKJBl7kVEA6p47UGL0K8y1mZ6UTnLNoXZJVZzEcgpPHW8eWiTjXvz213pbEl36gkddgtLYcicN3gEHbU5RG8%2BlXcAZGUQEmGzG2UiYyeCBCjCjGclrSqyepahQOPnnWgJpcCdzsqn%2F0I8HURf0WJmtN4DDR7%2BvABjqkATMucEAg4il31r0GqZQzGYyFCiLAHeS1dZ5P5J%2FZ6vG61BJAkApvSxmqP3RceC9EwQat1f3lkC0OM%2BW0c%2BPSJREzZbnIfPj92EdmpedzMrEhpRUzX66XoaBZaVt8vson%2FtIm1JVj6x0DF04KLhZdZQjpguAOZJs4Aku8L2neLlJ1Z96lIyI5pAlkwr8jpvz4ZehA2ClUHNi5Czd3xnX02%2B051M2v&X-Amz-Signature=6279991405ef4d216ff1635cf95b1ad3d5cb8ecf6a93e35f96ea0d2e29837044&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGA2FBU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrSDSpzeKCT98JAkRYsGwBTVwSlldN0WeWNLc5reWkyQIhAOwfOar%2F0MyN1BdpX91nQn6gDbmzKwKM4CvdP7cE71laKv8DCFcQABoMNjM3NDIzMTgzODA1IgzW4JV%2FvdXN9aHkrXMq3AMGYfSz1ejGKLFHaCvKDpygpmduFPxlC3nPn7gRh%2BjFNVNQn2AdPPlTqKYfmw2KWmOUiUosvBCcp0hoMcHay1RW9r0SAHsPN2BExm%2BctFgY%2BK7K7Ee6oqCi021eTFwP%2BEaadZ3%2FTRTR09quANeV5vdlsuGTtJWDhXolsfL864SIiPAKqF3mfkAVzHlsLtxMI8YGrsGRd1yV0%2B1dcwgUAzRZG9JHWJOt4cEM2tsQl1gAz7b0bA7uu4jDA51KVBTJvDmhuyZk1oWXcfu21FchH4eP0Bce9DWy4mpuxfswinVzVJ15qFLDrh2NK0soK4XJlPsVOyGKARlWH55Fib%2BRdBcADFdA9NxoB9KI%2BsQQ%2BW79tbkPOhy383FWeMVJt61WLNAgotbVzQ0MDKyO1rUkhKUpdQzUIGegAOlJbl4SwcbtL4l2fEXKqw2oZfcHYsw7LkxoVXaG7B7bOXVKRIpNPLhoKLzcQ%2BVzZ3S23QKJBl7kVEA6p47UGL0K8y1mZ6UTnLNoXZJVZzEcgpPHW8eWiTjXvz213pbEl36gkddgtLYcicN3gEHbU5RG8%2BlXcAZGUQEmGzG2UiYyeCBCjCjGclrSqyepahQOPnnWgJpcCdzsqn%2F0I8HURf0WJmtN4DDR7%2BvABjqkATMucEAg4il31r0GqZQzGYyFCiLAHeS1dZ5P5J%2FZ6vG61BJAkApvSxmqP3RceC9EwQat1f3lkC0OM%2BW0c%2BPSJREzZbnIfPj92EdmpedzMrEhpRUzX66XoaBZaVt8vson%2FtIm1JVj6x0DF04KLhZdZQjpguAOZJs4Aku8L2neLlJ1Z96lIyI5pAlkwr8jpvz4ZehA2ClUHNi5Czd3xnX02%2B051M2v&X-Amz-Signature=f89bab4e1779b4b4a1afe117616c8c7c977050976e1c96afb15e09817617b32e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGA2FBU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrSDSpzeKCT98JAkRYsGwBTVwSlldN0WeWNLc5reWkyQIhAOwfOar%2F0MyN1BdpX91nQn6gDbmzKwKM4CvdP7cE71laKv8DCFcQABoMNjM3NDIzMTgzODA1IgzW4JV%2FvdXN9aHkrXMq3AMGYfSz1ejGKLFHaCvKDpygpmduFPxlC3nPn7gRh%2BjFNVNQn2AdPPlTqKYfmw2KWmOUiUosvBCcp0hoMcHay1RW9r0SAHsPN2BExm%2BctFgY%2BK7K7Ee6oqCi021eTFwP%2BEaadZ3%2FTRTR09quANeV5vdlsuGTtJWDhXolsfL864SIiPAKqF3mfkAVzHlsLtxMI8YGrsGRd1yV0%2B1dcwgUAzRZG9JHWJOt4cEM2tsQl1gAz7b0bA7uu4jDA51KVBTJvDmhuyZk1oWXcfu21FchH4eP0Bce9DWy4mpuxfswinVzVJ15qFLDrh2NK0soK4XJlPsVOyGKARlWH55Fib%2BRdBcADFdA9NxoB9KI%2BsQQ%2BW79tbkPOhy383FWeMVJt61WLNAgotbVzQ0MDKyO1rUkhKUpdQzUIGegAOlJbl4SwcbtL4l2fEXKqw2oZfcHYsw7LkxoVXaG7B7bOXVKRIpNPLhoKLzcQ%2BVzZ3S23QKJBl7kVEA6p47UGL0K8y1mZ6UTnLNoXZJVZzEcgpPHW8eWiTjXvz213pbEl36gkddgtLYcicN3gEHbU5RG8%2BlXcAZGUQEmGzG2UiYyeCBCjCjGclrSqyepahQOPnnWgJpcCdzsqn%2F0I8HURf0WJmtN4DDR7%2BvABjqkATMucEAg4il31r0GqZQzGYyFCiLAHeS1dZ5P5J%2FZ6vG61BJAkApvSxmqP3RceC9EwQat1f3lkC0OM%2BW0c%2BPSJREzZbnIfPj92EdmpedzMrEhpRUzX66XoaBZaVt8vson%2FtIm1JVj6x0DF04KLhZdZQjpguAOZJs4Aku8L2neLlJ1Z96lIyI5pAlkwr8jpvz4ZehA2ClUHNi5Czd3xnX02%2B051M2v&X-Amz-Signature=ea4fc39bcc86493f8143d4a462180ab05124c75ece7d1fe57074e117fa8bcece&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGA2FBU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrSDSpzeKCT98JAkRYsGwBTVwSlldN0WeWNLc5reWkyQIhAOwfOar%2F0MyN1BdpX91nQn6gDbmzKwKM4CvdP7cE71laKv8DCFcQABoMNjM3NDIzMTgzODA1IgzW4JV%2FvdXN9aHkrXMq3AMGYfSz1ejGKLFHaCvKDpygpmduFPxlC3nPn7gRh%2BjFNVNQn2AdPPlTqKYfmw2KWmOUiUosvBCcp0hoMcHay1RW9r0SAHsPN2BExm%2BctFgY%2BK7K7Ee6oqCi021eTFwP%2BEaadZ3%2FTRTR09quANeV5vdlsuGTtJWDhXolsfL864SIiPAKqF3mfkAVzHlsLtxMI8YGrsGRd1yV0%2B1dcwgUAzRZG9JHWJOt4cEM2tsQl1gAz7b0bA7uu4jDA51KVBTJvDmhuyZk1oWXcfu21FchH4eP0Bce9DWy4mpuxfswinVzVJ15qFLDrh2NK0soK4XJlPsVOyGKARlWH55Fib%2BRdBcADFdA9NxoB9KI%2BsQQ%2BW79tbkPOhy383FWeMVJt61WLNAgotbVzQ0MDKyO1rUkhKUpdQzUIGegAOlJbl4SwcbtL4l2fEXKqw2oZfcHYsw7LkxoVXaG7B7bOXVKRIpNPLhoKLzcQ%2BVzZ3S23QKJBl7kVEA6p47UGL0K8y1mZ6UTnLNoXZJVZzEcgpPHW8eWiTjXvz213pbEl36gkddgtLYcicN3gEHbU5RG8%2BlXcAZGUQEmGzG2UiYyeCBCjCjGclrSqyepahQOPnnWgJpcCdzsqn%2F0I8HURf0WJmtN4DDR7%2BvABjqkATMucEAg4il31r0GqZQzGYyFCiLAHeS1dZ5P5J%2FZ6vG61BJAkApvSxmqP3RceC9EwQat1f3lkC0OM%2BW0c%2BPSJREzZbnIfPj92EdmpedzMrEhpRUzX66XoaBZaVt8vson%2FtIm1JVj6x0DF04KLhZdZQjpguAOZJs4Aku8L2neLlJ1Z96lIyI5pAlkwr8jpvz4ZehA2ClUHNi5Czd3xnX02%2B051M2v&X-Amz-Signature=35f0cf63db14f77c87688335e393f00cffba548821dc53e8dad44427be8db6db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGA2FBU%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T061300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrSDSpzeKCT98JAkRYsGwBTVwSlldN0WeWNLc5reWkyQIhAOwfOar%2F0MyN1BdpX91nQn6gDbmzKwKM4CvdP7cE71laKv8DCFcQABoMNjM3NDIzMTgzODA1IgzW4JV%2FvdXN9aHkrXMq3AMGYfSz1ejGKLFHaCvKDpygpmduFPxlC3nPn7gRh%2BjFNVNQn2AdPPlTqKYfmw2KWmOUiUosvBCcp0hoMcHay1RW9r0SAHsPN2BExm%2BctFgY%2BK7K7Ee6oqCi021eTFwP%2BEaadZ3%2FTRTR09quANeV5vdlsuGTtJWDhXolsfL864SIiPAKqF3mfkAVzHlsLtxMI8YGrsGRd1yV0%2B1dcwgUAzRZG9JHWJOt4cEM2tsQl1gAz7b0bA7uu4jDA51KVBTJvDmhuyZk1oWXcfu21FchH4eP0Bce9DWy4mpuxfswinVzVJ15qFLDrh2NK0soK4XJlPsVOyGKARlWH55Fib%2BRdBcADFdA9NxoB9KI%2BsQQ%2BW79tbkPOhy383FWeMVJt61WLNAgotbVzQ0MDKyO1rUkhKUpdQzUIGegAOlJbl4SwcbtL4l2fEXKqw2oZfcHYsw7LkxoVXaG7B7bOXVKRIpNPLhoKLzcQ%2BVzZ3S23QKJBl7kVEA6p47UGL0K8y1mZ6UTnLNoXZJVZzEcgpPHW8eWiTjXvz213pbEl36gkddgtLYcicN3gEHbU5RG8%2BlXcAZGUQEmGzG2UiYyeCBCjCjGclrSqyepahQOPnnWgJpcCdzsqn%2F0I8HURf0WJmtN4DDR7%2BvABjqkATMucEAg4il31r0GqZQzGYyFCiLAHeS1dZ5P5J%2FZ6vG61BJAkApvSxmqP3RceC9EwQat1f3lkC0OM%2BW0c%2BPSJREzZbnIfPj92EdmpedzMrEhpRUzX66XoaBZaVt8vson%2FtIm1JVj6x0DF04KLhZdZQjpguAOZJs4Aku8L2neLlJ1Z96lIyI5pAlkwr8jpvz4ZehA2ClUHNi5Czd3xnX02%2B051M2v&X-Amz-Signature=01818ad837f6aec7adc0e3621b25cfb0ec76f0a9bd48a43ac5c82c14b7839680&X-Amz-SignedHeaders=host&x-id=GetObject)
