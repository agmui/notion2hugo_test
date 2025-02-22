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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5LHWW6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4AN252Qs3LHtDzx2FbffettpJfQzYqBOqM1uT7Y6BzAiEA4ABGhth2CjE0aF34xjjGlyWJF9JDcw1LMzfKmk0XZEwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgXbvpOeYpOWBpALCrcA11pL0P9uNE87rs9KIpyyzIa0siesJgLiZUac63hrnRjrkJvrcrGcsVNVSGN7cBln%2FBJuMB8TtVL1bvzYE5qMS2qFiUyD2Z21ccnOWH5rLXolubjxfQJtMOA005icyD7E4eLZCKt4x1rsA9SPEIYOF1RnKI6D%2BBNkKgE0RvuaBxrfUURr8KhycVsBB1sRo5iCMUmcGwtcQEnbHucX6qWU20i%2Fe6Te%2By%2BCCVzyQ3%2BjKLyLamkcCw%2BJuxVFLceKpeiSl6yYCypa84HkYl6WWGAN4eQTEG3t9hP%2F0JEKfklCj8ZrnC3P%2FXUXnaFdjHF19mQH0hPDMcooSJOI9Xz0vqiCmdZAqIiVldp2u%2FwB9H8sxbWUs9XZmgDtwU15UtO3bqzrigVpi7qKKjBLpk0DS0pi%2FkSpkmpDTL7YMNlUcYxZBNHxtY5GtMLa00HCHcamQ4%2FCAjDvvW7SSxab6khA7%2FuBUVD3qHoEz8Y4wU88Xeq%2F9m6M4Sc9GZ1JjaXPyAz8hMULQHQo1iWOGE6Po1eqqYVnSzUWdwItrUTXa%2B4aqsVu%2Bm2OR8yCnYo4zCBRaPfDe6ymZdR6zv39wQ4MY%2BAynTcreK0edWWHCq6fUeKW1%2FOt1vixQeESNuKB1eq6MCuMIfs5r0GOqUBJjP8cNJ8LEsOjilp%2BMtzLp0bPNQTcQF61cTHqQyJJ2dP0jIYkhLB7qtkIksqXnCrWu3B33ArAZHsICzq36D5niUBGGaHG7rLVoiARcjF%2FKgbE1azqGDtMiWVuF9FSAkLkpIUJ7r2AYCu70krUZqWSA6h1GiIxgUvOP0w7n5%2B%2FRa%2Fff5UkrSXy%2FUU%2ByH6OZV%2FF0WzsazB1YWGQSZnn5I3wlMJLqZF&X-Amz-Signature=509226510863dab150c86c35cd3dd6ad978609879d59be19f4075deabc19acea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5LHWW6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4AN252Qs3LHtDzx2FbffettpJfQzYqBOqM1uT7Y6BzAiEA4ABGhth2CjE0aF34xjjGlyWJF9JDcw1LMzfKmk0XZEwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgXbvpOeYpOWBpALCrcA11pL0P9uNE87rs9KIpyyzIa0siesJgLiZUac63hrnRjrkJvrcrGcsVNVSGN7cBln%2FBJuMB8TtVL1bvzYE5qMS2qFiUyD2Z21ccnOWH5rLXolubjxfQJtMOA005icyD7E4eLZCKt4x1rsA9SPEIYOF1RnKI6D%2BBNkKgE0RvuaBxrfUURr8KhycVsBB1sRo5iCMUmcGwtcQEnbHucX6qWU20i%2Fe6Te%2By%2BCCVzyQ3%2BjKLyLamkcCw%2BJuxVFLceKpeiSl6yYCypa84HkYl6WWGAN4eQTEG3t9hP%2F0JEKfklCj8ZrnC3P%2FXUXnaFdjHF19mQH0hPDMcooSJOI9Xz0vqiCmdZAqIiVldp2u%2FwB9H8sxbWUs9XZmgDtwU15UtO3bqzrigVpi7qKKjBLpk0DS0pi%2FkSpkmpDTL7YMNlUcYxZBNHxtY5GtMLa00HCHcamQ4%2FCAjDvvW7SSxab6khA7%2FuBUVD3qHoEz8Y4wU88Xeq%2F9m6M4Sc9GZ1JjaXPyAz8hMULQHQo1iWOGE6Po1eqqYVnSzUWdwItrUTXa%2B4aqsVu%2Bm2OR8yCnYo4zCBRaPfDe6ymZdR6zv39wQ4MY%2BAynTcreK0edWWHCq6fUeKW1%2FOt1vixQeESNuKB1eq6MCuMIfs5r0GOqUBJjP8cNJ8LEsOjilp%2BMtzLp0bPNQTcQF61cTHqQyJJ2dP0jIYkhLB7qtkIksqXnCrWu3B33ArAZHsICzq36D5niUBGGaHG7rLVoiARcjF%2FKgbE1azqGDtMiWVuF9FSAkLkpIUJ7r2AYCu70krUZqWSA6h1GiIxgUvOP0w7n5%2B%2FRa%2Fff5UkrSXy%2FUU%2ByH6OZV%2FF0WzsazB1YWGQSZnn5I3wlMJLqZF&X-Amz-Signature=0b2063c1cb33c28ad83c96c24875df1b8474a8721191211177d3e41eca1d8dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5LHWW6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4AN252Qs3LHtDzx2FbffettpJfQzYqBOqM1uT7Y6BzAiEA4ABGhth2CjE0aF34xjjGlyWJF9JDcw1LMzfKmk0XZEwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgXbvpOeYpOWBpALCrcA11pL0P9uNE87rs9KIpyyzIa0siesJgLiZUac63hrnRjrkJvrcrGcsVNVSGN7cBln%2FBJuMB8TtVL1bvzYE5qMS2qFiUyD2Z21ccnOWH5rLXolubjxfQJtMOA005icyD7E4eLZCKt4x1rsA9SPEIYOF1RnKI6D%2BBNkKgE0RvuaBxrfUURr8KhycVsBB1sRo5iCMUmcGwtcQEnbHucX6qWU20i%2Fe6Te%2By%2BCCVzyQ3%2BjKLyLamkcCw%2BJuxVFLceKpeiSl6yYCypa84HkYl6WWGAN4eQTEG3t9hP%2F0JEKfklCj8ZrnC3P%2FXUXnaFdjHF19mQH0hPDMcooSJOI9Xz0vqiCmdZAqIiVldp2u%2FwB9H8sxbWUs9XZmgDtwU15UtO3bqzrigVpi7qKKjBLpk0DS0pi%2FkSpkmpDTL7YMNlUcYxZBNHxtY5GtMLa00HCHcamQ4%2FCAjDvvW7SSxab6khA7%2FuBUVD3qHoEz8Y4wU88Xeq%2F9m6M4Sc9GZ1JjaXPyAz8hMULQHQo1iWOGE6Po1eqqYVnSzUWdwItrUTXa%2B4aqsVu%2Bm2OR8yCnYo4zCBRaPfDe6ymZdR6zv39wQ4MY%2BAynTcreK0edWWHCq6fUeKW1%2FOt1vixQeESNuKB1eq6MCuMIfs5r0GOqUBJjP8cNJ8LEsOjilp%2BMtzLp0bPNQTcQF61cTHqQyJJ2dP0jIYkhLB7qtkIksqXnCrWu3B33ArAZHsICzq36D5niUBGGaHG7rLVoiARcjF%2FKgbE1azqGDtMiWVuF9FSAkLkpIUJ7r2AYCu70krUZqWSA6h1GiIxgUvOP0w7n5%2B%2FRa%2Fff5UkrSXy%2FUU%2ByH6OZV%2FF0WzsazB1YWGQSZnn5I3wlMJLqZF&X-Amz-Signature=64b3d357f4431cc6a83ba932596cbcedb004ac4e3e4e34128109f6cdf25113ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5LHWW6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4AN252Qs3LHtDzx2FbffettpJfQzYqBOqM1uT7Y6BzAiEA4ABGhth2CjE0aF34xjjGlyWJF9JDcw1LMzfKmk0XZEwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgXbvpOeYpOWBpALCrcA11pL0P9uNE87rs9KIpyyzIa0siesJgLiZUac63hrnRjrkJvrcrGcsVNVSGN7cBln%2FBJuMB8TtVL1bvzYE5qMS2qFiUyD2Z21ccnOWH5rLXolubjxfQJtMOA005icyD7E4eLZCKt4x1rsA9SPEIYOF1RnKI6D%2BBNkKgE0RvuaBxrfUURr8KhycVsBB1sRo5iCMUmcGwtcQEnbHucX6qWU20i%2Fe6Te%2By%2BCCVzyQ3%2BjKLyLamkcCw%2BJuxVFLceKpeiSl6yYCypa84HkYl6WWGAN4eQTEG3t9hP%2F0JEKfklCj8ZrnC3P%2FXUXnaFdjHF19mQH0hPDMcooSJOI9Xz0vqiCmdZAqIiVldp2u%2FwB9H8sxbWUs9XZmgDtwU15UtO3bqzrigVpi7qKKjBLpk0DS0pi%2FkSpkmpDTL7YMNlUcYxZBNHxtY5GtMLa00HCHcamQ4%2FCAjDvvW7SSxab6khA7%2FuBUVD3qHoEz8Y4wU88Xeq%2F9m6M4Sc9GZ1JjaXPyAz8hMULQHQo1iWOGE6Po1eqqYVnSzUWdwItrUTXa%2B4aqsVu%2Bm2OR8yCnYo4zCBRaPfDe6ymZdR6zv39wQ4MY%2BAynTcreK0edWWHCq6fUeKW1%2FOt1vixQeESNuKB1eq6MCuMIfs5r0GOqUBJjP8cNJ8LEsOjilp%2BMtzLp0bPNQTcQF61cTHqQyJJ2dP0jIYkhLB7qtkIksqXnCrWu3B33ArAZHsICzq36D5niUBGGaHG7rLVoiARcjF%2FKgbE1azqGDtMiWVuF9FSAkLkpIUJ7r2AYCu70krUZqWSA6h1GiIxgUvOP0w7n5%2B%2FRa%2Fff5UkrSXy%2FUU%2ByH6OZV%2FF0WzsazB1YWGQSZnn5I3wlMJLqZF&X-Amz-Signature=62164e98af6e96daf4e90932ff5cadd24e4a4d214d88bcbaaeeb802d65846f48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5LHWW6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4AN252Qs3LHtDzx2FbffettpJfQzYqBOqM1uT7Y6BzAiEA4ABGhth2CjE0aF34xjjGlyWJF9JDcw1LMzfKmk0XZEwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgXbvpOeYpOWBpALCrcA11pL0P9uNE87rs9KIpyyzIa0siesJgLiZUac63hrnRjrkJvrcrGcsVNVSGN7cBln%2FBJuMB8TtVL1bvzYE5qMS2qFiUyD2Z21ccnOWH5rLXolubjxfQJtMOA005icyD7E4eLZCKt4x1rsA9SPEIYOF1RnKI6D%2BBNkKgE0RvuaBxrfUURr8KhycVsBB1sRo5iCMUmcGwtcQEnbHucX6qWU20i%2Fe6Te%2By%2BCCVzyQ3%2BjKLyLamkcCw%2BJuxVFLceKpeiSl6yYCypa84HkYl6WWGAN4eQTEG3t9hP%2F0JEKfklCj8ZrnC3P%2FXUXnaFdjHF19mQH0hPDMcooSJOI9Xz0vqiCmdZAqIiVldp2u%2FwB9H8sxbWUs9XZmgDtwU15UtO3bqzrigVpi7qKKjBLpk0DS0pi%2FkSpkmpDTL7YMNlUcYxZBNHxtY5GtMLa00HCHcamQ4%2FCAjDvvW7SSxab6khA7%2FuBUVD3qHoEz8Y4wU88Xeq%2F9m6M4Sc9GZ1JjaXPyAz8hMULQHQo1iWOGE6Po1eqqYVnSzUWdwItrUTXa%2B4aqsVu%2Bm2OR8yCnYo4zCBRaPfDe6ymZdR6zv39wQ4MY%2BAynTcreK0edWWHCq6fUeKW1%2FOt1vixQeESNuKB1eq6MCuMIfs5r0GOqUBJjP8cNJ8LEsOjilp%2BMtzLp0bPNQTcQF61cTHqQyJJ2dP0jIYkhLB7qtkIksqXnCrWu3B33ArAZHsICzq36D5niUBGGaHG7rLVoiARcjF%2FKgbE1azqGDtMiWVuF9FSAkLkpIUJ7r2AYCu70krUZqWSA6h1GiIxgUvOP0w7n5%2B%2FRa%2Fff5UkrSXy%2FUU%2ByH6OZV%2FF0WzsazB1YWGQSZnn5I3wlMJLqZF&X-Amz-Signature=40086ba5c087a8a1740beab21f683e7c46c26f932af30d3d3264464c7dce2179&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U5LHWW6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4AN252Qs3LHtDzx2FbffettpJfQzYqBOqM1uT7Y6BzAiEA4ABGhth2CjE0aF34xjjGlyWJF9JDcw1LMzfKmk0XZEwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgXbvpOeYpOWBpALCrcA11pL0P9uNE87rs9KIpyyzIa0siesJgLiZUac63hrnRjrkJvrcrGcsVNVSGN7cBln%2FBJuMB8TtVL1bvzYE5qMS2qFiUyD2Z21ccnOWH5rLXolubjxfQJtMOA005icyD7E4eLZCKt4x1rsA9SPEIYOF1RnKI6D%2BBNkKgE0RvuaBxrfUURr8KhycVsBB1sRo5iCMUmcGwtcQEnbHucX6qWU20i%2Fe6Te%2By%2BCCVzyQ3%2BjKLyLamkcCw%2BJuxVFLceKpeiSl6yYCypa84HkYl6WWGAN4eQTEG3t9hP%2F0JEKfklCj8ZrnC3P%2FXUXnaFdjHF19mQH0hPDMcooSJOI9Xz0vqiCmdZAqIiVldp2u%2FwB9H8sxbWUs9XZmgDtwU15UtO3bqzrigVpi7qKKjBLpk0DS0pi%2FkSpkmpDTL7YMNlUcYxZBNHxtY5GtMLa00HCHcamQ4%2FCAjDvvW7SSxab6khA7%2FuBUVD3qHoEz8Y4wU88Xeq%2F9m6M4Sc9GZ1JjaXPyAz8hMULQHQo1iWOGE6Po1eqqYVnSzUWdwItrUTXa%2B4aqsVu%2Bm2OR8yCnYo4zCBRaPfDe6ymZdR6zv39wQ4MY%2BAynTcreK0edWWHCq6fUeKW1%2FOt1vixQeESNuKB1eq6MCuMIfs5r0GOqUBJjP8cNJ8LEsOjilp%2BMtzLp0bPNQTcQF61cTHqQyJJ2dP0jIYkhLB7qtkIksqXnCrWu3B33ArAZHsICzq36D5niUBGGaHG7rLVoiARcjF%2FKgbE1azqGDtMiWVuF9FSAkLkpIUJ7r2AYCu70krUZqWSA6h1GiIxgUvOP0w7n5%2B%2FRa%2Fff5UkrSXy%2FUU%2ByH6OZV%2FF0WzsazB1YWGQSZnn5I3wlMJLqZF&X-Amz-Signature=988f61782210f2feec536d32a9f47f2dc237969fb9f5f9d9ad77a394f77d476c&X-Amz-SignedHeaders=host&x-id=GetObject)
