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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVF6LRGN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICUh6WURpHplhU50ktt0GC7%2BwbAN0Q2lKxBVkbyo1igMAiAtzmMusbiX7haqUAhWB3t5sSL5M3VKzUlUX3Pxec8r8SqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr7HVdlGLoNgPCk3gKtwDydg%2BQNm6IPeaW0T0WI95QCGib3yFCvUINW477g3Rlkc4oA6FeyTjDf%2BT0GM%2FaMG3fJWEVNoOMqNf9bzgZalj192cGxO4UMyThJK1Q7jY3HCa0sRsrcw9ZSjHfn%2Bajn8Z2boS8PIPBjy8RERXKZWpviZN4%2BqjWPQ6SSPdr0G8TbFsqJENO0RPT8n9t8y2PcCtj973Dc%2F1Eu5rOlWB5xhiUo%2BDcoInD9bYPecEYq0PTXD53zRvhgGpUSWWiU0FRfC0M9HHS7v%2FZ2rt6hCJqDzm9fo3To33ZLgKKuNlZ%2F00MP9mpL8ammdei5osssOxpKPs7i4glPIEp15WCMU2iHzHeiPy8pIQjzZTB9eQ7mHzZT0Af0c5idiPtc2Pa%2FbHlj74jK9Sjf0Vbu%2F8veBQJhA6BEszh%2BfHYo%2B56RJZDVtfSXmAmzDW53ohF7dppbiIHgaKhN84i2H0aD0LJkAaNFLQYlDJBlColTNi%2FD428rMKch4ASb03W1pUaXfoTGf9TwMj6%2BjTPDwxSe%2BHgtEq82n8p0NKw%2BnrKXtASItwdWd5Aao2JP862vMjZKT31nwCYn7QjI78jckSeeg%2BLJvHs2daNUhH46PHjNhXSufzZTeYWudqG5HrcULK0Iwmy1IwmsKpwgY6pgHe8GL7v5%2BQ5N5kICdAid5xuk8nTtIjh75eBZ%2BObE9s8PWB6duhuk3BoK4X%2BXOcmvyMA8xkpTi6CCjGJTqrlfUayUf%2FFdeobIv2%2BF1fU%2BIZ7pX%2BTIxFYFSa2WVCCi3bWb3K0lxHVZjHABo0KGOsFL5IEELhVUrMNaUJhEcUcfzEFHVawblO9D1lGrf5sXyXmAONPhLP5s0fbJsfL9qMabT3DCqGJz0i&X-Amz-Signature=f57574036cd61011a79ed014ce33adfbd5122d203323a8a75ae5d10a7e1a428d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVF6LRGN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICUh6WURpHplhU50ktt0GC7%2BwbAN0Q2lKxBVkbyo1igMAiAtzmMusbiX7haqUAhWB3t5sSL5M3VKzUlUX3Pxec8r8SqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr7HVdlGLoNgPCk3gKtwDydg%2BQNm6IPeaW0T0WI95QCGib3yFCvUINW477g3Rlkc4oA6FeyTjDf%2BT0GM%2FaMG3fJWEVNoOMqNf9bzgZalj192cGxO4UMyThJK1Q7jY3HCa0sRsrcw9ZSjHfn%2Bajn8Z2boS8PIPBjy8RERXKZWpviZN4%2BqjWPQ6SSPdr0G8TbFsqJENO0RPT8n9t8y2PcCtj973Dc%2F1Eu5rOlWB5xhiUo%2BDcoInD9bYPecEYq0PTXD53zRvhgGpUSWWiU0FRfC0M9HHS7v%2FZ2rt6hCJqDzm9fo3To33ZLgKKuNlZ%2F00MP9mpL8ammdei5osssOxpKPs7i4glPIEp15WCMU2iHzHeiPy8pIQjzZTB9eQ7mHzZT0Af0c5idiPtc2Pa%2FbHlj74jK9Sjf0Vbu%2F8veBQJhA6BEszh%2BfHYo%2B56RJZDVtfSXmAmzDW53ohF7dppbiIHgaKhN84i2H0aD0LJkAaNFLQYlDJBlColTNi%2FD428rMKch4ASb03W1pUaXfoTGf9TwMj6%2BjTPDwxSe%2BHgtEq82n8p0NKw%2BnrKXtASItwdWd5Aao2JP862vMjZKT31nwCYn7QjI78jckSeeg%2BLJvHs2daNUhH46PHjNhXSufzZTeYWudqG5HrcULK0Iwmy1IwmsKpwgY6pgHe8GL7v5%2BQ5N5kICdAid5xuk8nTtIjh75eBZ%2BObE9s8PWB6duhuk3BoK4X%2BXOcmvyMA8xkpTi6CCjGJTqrlfUayUf%2FFdeobIv2%2BF1fU%2BIZ7pX%2BTIxFYFSa2WVCCi3bWb3K0lxHVZjHABo0KGOsFL5IEELhVUrMNaUJhEcUcfzEFHVawblO9D1lGrf5sXyXmAONPhLP5s0fbJsfL9qMabT3DCqGJz0i&X-Amz-Signature=6dc71e4287770fd95541152da742880f4341c6941407a4dbf2a2c5ac1e7dd328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVF6LRGN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICUh6WURpHplhU50ktt0GC7%2BwbAN0Q2lKxBVkbyo1igMAiAtzmMusbiX7haqUAhWB3t5sSL5M3VKzUlUX3Pxec8r8SqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr7HVdlGLoNgPCk3gKtwDydg%2BQNm6IPeaW0T0WI95QCGib3yFCvUINW477g3Rlkc4oA6FeyTjDf%2BT0GM%2FaMG3fJWEVNoOMqNf9bzgZalj192cGxO4UMyThJK1Q7jY3HCa0sRsrcw9ZSjHfn%2Bajn8Z2boS8PIPBjy8RERXKZWpviZN4%2BqjWPQ6SSPdr0G8TbFsqJENO0RPT8n9t8y2PcCtj973Dc%2F1Eu5rOlWB5xhiUo%2BDcoInD9bYPecEYq0PTXD53zRvhgGpUSWWiU0FRfC0M9HHS7v%2FZ2rt6hCJqDzm9fo3To33ZLgKKuNlZ%2F00MP9mpL8ammdei5osssOxpKPs7i4glPIEp15WCMU2iHzHeiPy8pIQjzZTB9eQ7mHzZT0Af0c5idiPtc2Pa%2FbHlj74jK9Sjf0Vbu%2F8veBQJhA6BEszh%2BfHYo%2B56RJZDVtfSXmAmzDW53ohF7dppbiIHgaKhN84i2H0aD0LJkAaNFLQYlDJBlColTNi%2FD428rMKch4ASb03W1pUaXfoTGf9TwMj6%2BjTPDwxSe%2BHgtEq82n8p0NKw%2BnrKXtASItwdWd5Aao2JP862vMjZKT31nwCYn7QjI78jckSeeg%2BLJvHs2daNUhH46PHjNhXSufzZTeYWudqG5HrcULK0Iwmy1IwmsKpwgY6pgHe8GL7v5%2BQ5N5kICdAid5xuk8nTtIjh75eBZ%2BObE9s8PWB6duhuk3BoK4X%2BXOcmvyMA8xkpTi6CCjGJTqrlfUayUf%2FFdeobIv2%2BF1fU%2BIZ7pX%2BTIxFYFSa2WVCCi3bWb3K0lxHVZjHABo0KGOsFL5IEELhVUrMNaUJhEcUcfzEFHVawblO9D1lGrf5sXyXmAONPhLP5s0fbJsfL9qMabT3DCqGJz0i&X-Amz-Signature=4715f145aced22c0b764f1902ec1fae9fb752fcf34fcfdffa0806ef3e4d9460f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVF6LRGN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICUh6WURpHplhU50ktt0GC7%2BwbAN0Q2lKxBVkbyo1igMAiAtzmMusbiX7haqUAhWB3t5sSL5M3VKzUlUX3Pxec8r8SqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr7HVdlGLoNgPCk3gKtwDydg%2BQNm6IPeaW0T0WI95QCGib3yFCvUINW477g3Rlkc4oA6FeyTjDf%2BT0GM%2FaMG3fJWEVNoOMqNf9bzgZalj192cGxO4UMyThJK1Q7jY3HCa0sRsrcw9ZSjHfn%2Bajn8Z2boS8PIPBjy8RERXKZWpviZN4%2BqjWPQ6SSPdr0G8TbFsqJENO0RPT8n9t8y2PcCtj973Dc%2F1Eu5rOlWB5xhiUo%2BDcoInD9bYPecEYq0PTXD53zRvhgGpUSWWiU0FRfC0M9HHS7v%2FZ2rt6hCJqDzm9fo3To33ZLgKKuNlZ%2F00MP9mpL8ammdei5osssOxpKPs7i4glPIEp15WCMU2iHzHeiPy8pIQjzZTB9eQ7mHzZT0Af0c5idiPtc2Pa%2FbHlj74jK9Sjf0Vbu%2F8veBQJhA6BEszh%2BfHYo%2B56RJZDVtfSXmAmzDW53ohF7dppbiIHgaKhN84i2H0aD0LJkAaNFLQYlDJBlColTNi%2FD428rMKch4ASb03W1pUaXfoTGf9TwMj6%2BjTPDwxSe%2BHgtEq82n8p0NKw%2BnrKXtASItwdWd5Aao2JP862vMjZKT31nwCYn7QjI78jckSeeg%2BLJvHs2daNUhH46PHjNhXSufzZTeYWudqG5HrcULK0Iwmy1IwmsKpwgY6pgHe8GL7v5%2BQ5N5kICdAid5xuk8nTtIjh75eBZ%2BObE9s8PWB6duhuk3BoK4X%2BXOcmvyMA8xkpTi6CCjGJTqrlfUayUf%2FFdeobIv2%2BF1fU%2BIZ7pX%2BTIxFYFSa2WVCCi3bWb3K0lxHVZjHABo0KGOsFL5IEELhVUrMNaUJhEcUcfzEFHVawblO9D1lGrf5sXyXmAONPhLP5s0fbJsfL9qMabT3DCqGJz0i&X-Amz-Signature=8bdf439a1aade01dda6d77683b4fc79a47f608cb6a1b3719a16e7953cec59bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVF6LRGN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICUh6WURpHplhU50ktt0GC7%2BwbAN0Q2lKxBVkbyo1igMAiAtzmMusbiX7haqUAhWB3t5sSL5M3VKzUlUX3Pxec8r8SqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr7HVdlGLoNgPCk3gKtwDydg%2BQNm6IPeaW0T0WI95QCGib3yFCvUINW477g3Rlkc4oA6FeyTjDf%2BT0GM%2FaMG3fJWEVNoOMqNf9bzgZalj192cGxO4UMyThJK1Q7jY3HCa0sRsrcw9ZSjHfn%2Bajn8Z2boS8PIPBjy8RERXKZWpviZN4%2BqjWPQ6SSPdr0G8TbFsqJENO0RPT8n9t8y2PcCtj973Dc%2F1Eu5rOlWB5xhiUo%2BDcoInD9bYPecEYq0PTXD53zRvhgGpUSWWiU0FRfC0M9HHS7v%2FZ2rt6hCJqDzm9fo3To33ZLgKKuNlZ%2F00MP9mpL8ammdei5osssOxpKPs7i4glPIEp15WCMU2iHzHeiPy8pIQjzZTB9eQ7mHzZT0Af0c5idiPtc2Pa%2FbHlj74jK9Sjf0Vbu%2F8veBQJhA6BEszh%2BfHYo%2B56RJZDVtfSXmAmzDW53ohF7dppbiIHgaKhN84i2H0aD0LJkAaNFLQYlDJBlColTNi%2FD428rMKch4ASb03W1pUaXfoTGf9TwMj6%2BjTPDwxSe%2BHgtEq82n8p0NKw%2BnrKXtASItwdWd5Aao2JP862vMjZKT31nwCYn7QjI78jckSeeg%2BLJvHs2daNUhH46PHjNhXSufzZTeYWudqG5HrcULK0Iwmy1IwmsKpwgY6pgHe8GL7v5%2BQ5N5kICdAid5xuk8nTtIjh75eBZ%2BObE9s8PWB6duhuk3BoK4X%2BXOcmvyMA8xkpTi6CCjGJTqrlfUayUf%2FFdeobIv2%2BF1fU%2BIZ7pX%2BTIxFYFSa2WVCCi3bWb3K0lxHVZjHABo0KGOsFL5IEELhVUrMNaUJhEcUcfzEFHVawblO9D1lGrf5sXyXmAONPhLP5s0fbJsfL9qMabT3DCqGJz0i&X-Amz-Signature=f7aab797bf5246d05a25978b1041378183de3ebe0232ecdc4e1ab43427aa1717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVF6LRGN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICUh6WURpHplhU50ktt0GC7%2BwbAN0Q2lKxBVkbyo1igMAiAtzmMusbiX7haqUAhWB3t5sSL5M3VKzUlUX3Pxec8r8SqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr7HVdlGLoNgPCk3gKtwDydg%2BQNm6IPeaW0T0WI95QCGib3yFCvUINW477g3Rlkc4oA6FeyTjDf%2BT0GM%2FaMG3fJWEVNoOMqNf9bzgZalj192cGxO4UMyThJK1Q7jY3HCa0sRsrcw9ZSjHfn%2Bajn8Z2boS8PIPBjy8RERXKZWpviZN4%2BqjWPQ6SSPdr0G8TbFsqJENO0RPT8n9t8y2PcCtj973Dc%2F1Eu5rOlWB5xhiUo%2BDcoInD9bYPecEYq0PTXD53zRvhgGpUSWWiU0FRfC0M9HHS7v%2FZ2rt6hCJqDzm9fo3To33ZLgKKuNlZ%2F00MP9mpL8ammdei5osssOxpKPs7i4glPIEp15WCMU2iHzHeiPy8pIQjzZTB9eQ7mHzZT0Af0c5idiPtc2Pa%2FbHlj74jK9Sjf0Vbu%2F8veBQJhA6BEszh%2BfHYo%2B56RJZDVtfSXmAmzDW53ohF7dppbiIHgaKhN84i2H0aD0LJkAaNFLQYlDJBlColTNi%2FD428rMKch4ASb03W1pUaXfoTGf9TwMj6%2BjTPDwxSe%2BHgtEq82n8p0NKw%2BnrKXtASItwdWd5Aao2JP862vMjZKT31nwCYn7QjI78jckSeeg%2BLJvHs2daNUhH46PHjNhXSufzZTeYWudqG5HrcULK0Iwmy1IwmsKpwgY6pgHe8GL7v5%2BQ5N5kICdAid5xuk8nTtIjh75eBZ%2BObE9s8PWB6duhuk3BoK4X%2BXOcmvyMA8xkpTi6CCjGJTqrlfUayUf%2FFdeobIv2%2BF1fU%2BIZ7pX%2BTIxFYFSa2WVCCi3bWb3K0lxHVZjHABo0KGOsFL5IEELhVUrMNaUJhEcUcfzEFHVawblO9D1lGrf5sXyXmAONPhLP5s0fbJsfL9qMabT3DCqGJz0i&X-Amz-Signature=989aede0b7b3642e619c7bfa29b6f0f4bef16262748220018b2d066b21f9c825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
