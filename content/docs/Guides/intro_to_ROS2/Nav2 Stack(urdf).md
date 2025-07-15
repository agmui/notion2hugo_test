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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N343BQJ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC4BFRdXLRP5jEIxKVEZB2KfNJIOICJtULkJDbTRh9lzQIhALUnsg%2BnlhzV51O%2FJkMy9sPlkCVgN5iWvcezzwnoifBiKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQAgz4pS1mpuufFugq3APLQCuwMwaCFTKdE228XpXiaUnjZ1S%2Bazzyla8l0RZEC0oQGwA%2FNSwnJHR0cekMXiT8UPvzZNQVIj57lPaA9ldbOerLBOgP7WEHrw8YRbYNrwaazA4C8xVx3MiJI4WGtZzDDYdFdAZDFzeFjlpxkG%2Bk8qYmJrH9KaIRBpeX8UiJoqVFYrkUhzqC6d3WtXmhAJy7x1WhPK%2Bu%2FjsSgWHL2UFBD4%2FgyxdQhstI%2FcAXfBtOT5PVTYx7f0DN41%2FO2MtHMTdmupnNR%2FTeASKzMwkzcffo7Nu6DXf8ZLWwRfTel0ND1tJdQC3WNbKVtI9DOk0QjGJkYxIwc2AijKdpkmAsWxGQBBzI223ucc1xlQesncOepdLJbqj17XdR1etJrFTlb1puQ564SPMefFkscIHhX0sZ5jGBI5OPD%2B8Lq5xN50%2FlRLxusEGYDZ1va2E3IYwCqRV8CiIV6ZEVMe8jBBy06QX49A%2BCHeuqEppnebQFjlC4MjIlr31IragMfUliDS4K9ueagaMTFWKw%2BpBAY2zXIK8Ft8VtNB3cT8MC3JK%2BYzwzNxsH4C%2BLHNED1kTP3v9iImIf1%2Fc1jHN2%2FblL0qnGiKOndFzjvS%2F3hDvC8SMmjXs%2B7sjtIKmcnLXwO4Wm%2FDDc9trDBjqkAQ4TjmQdsn%2B1V5RHwKJnHX2nYxhDYIlLnx2UCR3LpRHtNuAOJUm5FsNe5HjhRnHZvPo12%2FZWTSJI5KTTYPlKfZxDKa7QMCclTwk4zC7mmWb2BU8GSW93iDnRAw1%2FRCoCLCVKg7WGyuGyccH798fFnpgfduPtJiVEp7ltp2%2BrgIubSfXGGnMP898PKYFzrvPQ56pwpwtIQtJvN9nvDy%2F4YwN2NRVq&X-Amz-Signature=3c0f5a927fee88958e1b5af1215b880a3b109a06ec61f342146b0bf4c51fa441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N343BQJ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC4BFRdXLRP5jEIxKVEZB2KfNJIOICJtULkJDbTRh9lzQIhALUnsg%2BnlhzV51O%2FJkMy9sPlkCVgN5iWvcezzwnoifBiKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQAgz4pS1mpuufFugq3APLQCuwMwaCFTKdE228XpXiaUnjZ1S%2Bazzyla8l0RZEC0oQGwA%2FNSwnJHR0cekMXiT8UPvzZNQVIj57lPaA9ldbOerLBOgP7WEHrw8YRbYNrwaazA4C8xVx3MiJI4WGtZzDDYdFdAZDFzeFjlpxkG%2Bk8qYmJrH9KaIRBpeX8UiJoqVFYrkUhzqC6d3WtXmhAJy7x1WhPK%2Bu%2FjsSgWHL2UFBD4%2FgyxdQhstI%2FcAXfBtOT5PVTYx7f0DN41%2FO2MtHMTdmupnNR%2FTeASKzMwkzcffo7Nu6DXf8ZLWwRfTel0ND1tJdQC3WNbKVtI9DOk0QjGJkYxIwc2AijKdpkmAsWxGQBBzI223ucc1xlQesncOepdLJbqj17XdR1etJrFTlb1puQ564SPMefFkscIHhX0sZ5jGBI5OPD%2B8Lq5xN50%2FlRLxusEGYDZ1va2E3IYwCqRV8CiIV6ZEVMe8jBBy06QX49A%2BCHeuqEppnebQFjlC4MjIlr31IragMfUliDS4K9ueagaMTFWKw%2BpBAY2zXIK8Ft8VtNB3cT8MC3JK%2BYzwzNxsH4C%2BLHNED1kTP3v9iImIf1%2Fc1jHN2%2FblL0qnGiKOndFzjvS%2F3hDvC8SMmjXs%2B7sjtIKmcnLXwO4Wm%2FDDc9trDBjqkAQ4TjmQdsn%2B1V5RHwKJnHX2nYxhDYIlLnx2UCR3LpRHtNuAOJUm5FsNe5HjhRnHZvPo12%2FZWTSJI5KTTYPlKfZxDKa7QMCclTwk4zC7mmWb2BU8GSW93iDnRAw1%2FRCoCLCVKg7WGyuGyccH798fFnpgfduPtJiVEp7ltp2%2BrgIubSfXGGnMP898PKYFzrvPQ56pwpwtIQtJvN9nvDy%2F4YwN2NRVq&X-Amz-Signature=7e2b77254fd42b62020fb8e4e08f7f22e1b012200f904e218213e085b828381b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N343BQJ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC4BFRdXLRP5jEIxKVEZB2KfNJIOICJtULkJDbTRh9lzQIhALUnsg%2BnlhzV51O%2FJkMy9sPlkCVgN5iWvcezzwnoifBiKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQAgz4pS1mpuufFugq3APLQCuwMwaCFTKdE228XpXiaUnjZ1S%2Bazzyla8l0RZEC0oQGwA%2FNSwnJHR0cekMXiT8UPvzZNQVIj57lPaA9ldbOerLBOgP7WEHrw8YRbYNrwaazA4C8xVx3MiJI4WGtZzDDYdFdAZDFzeFjlpxkG%2Bk8qYmJrH9KaIRBpeX8UiJoqVFYrkUhzqC6d3WtXmhAJy7x1WhPK%2Bu%2FjsSgWHL2UFBD4%2FgyxdQhstI%2FcAXfBtOT5PVTYx7f0DN41%2FO2MtHMTdmupnNR%2FTeASKzMwkzcffo7Nu6DXf8ZLWwRfTel0ND1tJdQC3WNbKVtI9DOk0QjGJkYxIwc2AijKdpkmAsWxGQBBzI223ucc1xlQesncOepdLJbqj17XdR1etJrFTlb1puQ564SPMefFkscIHhX0sZ5jGBI5OPD%2B8Lq5xN50%2FlRLxusEGYDZ1va2E3IYwCqRV8CiIV6ZEVMe8jBBy06QX49A%2BCHeuqEppnebQFjlC4MjIlr31IragMfUliDS4K9ueagaMTFWKw%2BpBAY2zXIK8Ft8VtNB3cT8MC3JK%2BYzwzNxsH4C%2BLHNED1kTP3v9iImIf1%2Fc1jHN2%2FblL0qnGiKOndFzjvS%2F3hDvC8SMmjXs%2B7sjtIKmcnLXwO4Wm%2FDDc9trDBjqkAQ4TjmQdsn%2B1V5RHwKJnHX2nYxhDYIlLnx2UCR3LpRHtNuAOJUm5FsNe5HjhRnHZvPo12%2FZWTSJI5KTTYPlKfZxDKa7QMCclTwk4zC7mmWb2BU8GSW93iDnRAw1%2FRCoCLCVKg7WGyuGyccH798fFnpgfduPtJiVEp7ltp2%2BrgIubSfXGGnMP898PKYFzrvPQ56pwpwtIQtJvN9nvDy%2F4YwN2NRVq&X-Amz-Signature=c78008204f071a08caa39747d5efc58ed1ce89950ce0acf2e005fe067b3f29f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N343BQJ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC4BFRdXLRP5jEIxKVEZB2KfNJIOICJtULkJDbTRh9lzQIhALUnsg%2BnlhzV51O%2FJkMy9sPlkCVgN5iWvcezzwnoifBiKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQAgz4pS1mpuufFugq3APLQCuwMwaCFTKdE228XpXiaUnjZ1S%2Bazzyla8l0RZEC0oQGwA%2FNSwnJHR0cekMXiT8UPvzZNQVIj57lPaA9ldbOerLBOgP7WEHrw8YRbYNrwaazA4C8xVx3MiJI4WGtZzDDYdFdAZDFzeFjlpxkG%2Bk8qYmJrH9KaIRBpeX8UiJoqVFYrkUhzqC6d3WtXmhAJy7x1WhPK%2Bu%2FjsSgWHL2UFBD4%2FgyxdQhstI%2FcAXfBtOT5PVTYx7f0DN41%2FO2MtHMTdmupnNR%2FTeASKzMwkzcffo7Nu6DXf8ZLWwRfTel0ND1tJdQC3WNbKVtI9DOk0QjGJkYxIwc2AijKdpkmAsWxGQBBzI223ucc1xlQesncOepdLJbqj17XdR1etJrFTlb1puQ564SPMefFkscIHhX0sZ5jGBI5OPD%2B8Lq5xN50%2FlRLxusEGYDZ1va2E3IYwCqRV8CiIV6ZEVMe8jBBy06QX49A%2BCHeuqEppnebQFjlC4MjIlr31IragMfUliDS4K9ueagaMTFWKw%2BpBAY2zXIK8Ft8VtNB3cT8MC3JK%2BYzwzNxsH4C%2BLHNED1kTP3v9iImIf1%2Fc1jHN2%2FblL0qnGiKOndFzjvS%2F3hDvC8SMmjXs%2B7sjtIKmcnLXwO4Wm%2FDDc9trDBjqkAQ4TjmQdsn%2B1V5RHwKJnHX2nYxhDYIlLnx2UCR3LpRHtNuAOJUm5FsNe5HjhRnHZvPo12%2FZWTSJI5KTTYPlKfZxDKa7QMCclTwk4zC7mmWb2BU8GSW93iDnRAw1%2FRCoCLCVKg7WGyuGyccH798fFnpgfduPtJiVEp7ltp2%2BrgIubSfXGGnMP898PKYFzrvPQ56pwpwtIQtJvN9nvDy%2F4YwN2NRVq&X-Amz-Signature=4119c95e69bebaae7663702ff27ad2721e09295e797194a40f4f915e5b1ae943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N343BQJ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC4BFRdXLRP5jEIxKVEZB2KfNJIOICJtULkJDbTRh9lzQIhALUnsg%2BnlhzV51O%2FJkMy9sPlkCVgN5iWvcezzwnoifBiKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQAgz4pS1mpuufFugq3APLQCuwMwaCFTKdE228XpXiaUnjZ1S%2Bazzyla8l0RZEC0oQGwA%2FNSwnJHR0cekMXiT8UPvzZNQVIj57lPaA9ldbOerLBOgP7WEHrw8YRbYNrwaazA4C8xVx3MiJI4WGtZzDDYdFdAZDFzeFjlpxkG%2Bk8qYmJrH9KaIRBpeX8UiJoqVFYrkUhzqC6d3WtXmhAJy7x1WhPK%2Bu%2FjsSgWHL2UFBD4%2FgyxdQhstI%2FcAXfBtOT5PVTYx7f0DN41%2FO2MtHMTdmupnNR%2FTeASKzMwkzcffo7Nu6DXf8ZLWwRfTel0ND1tJdQC3WNbKVtI9DOk0QjGJkYxIwc2AijKdpkmAsWxGQBBzI223ucc1xlQesncOepdLJbqj17XdR1etJrFTlb1puQ564SPMefFkscIHhX0sZ5jGBI5OPD%2B8Lq5xN50%2FlRLxusEGYDZ1va2E3IYwCqRV8CiIV6ZEVMe8jBBy06QX49A%2BCHeuqEppnebQFjlC4MjIlr31IragMfUliDS4K9ueagaMTFWKw%2BpBAY2zXIK8Ft8VtNB3cT8MC3JK%2BYzwzNxsH4C%2BLHNED1kTP3v9iImIf1%2Fc1jHN2%2FblL0qnGiKOndFzjvS%2F3hDvC8SMmjXs%2B7sjtIKmcnLXwO4Wm%2FDDc9trDBjqkAQ4TjmQdsn%2B1V5RHwKJnHX2nYxhDYIlLnx2UCR3LpRHtNuAOJUm5FsNe5HjhRnHZvPo12%2FZWTSJI5KTTYPlKfZxDKa7QMCclTwk4zC7mmWb2BU8GSW93iDnRAw1%2FRCoCLCVKg7WGyuGyccH798fFnpgfduPtJiVEp7ltp2%2BrgIubSfXGGnMP898PKYFzrvPQ56pwpwtIQtJvN9nvDy%2F4YwN2NRVq&X-Amz-Signature=972c33755cc645169a2b192d68929583e4e512bf9167224cd8285b13d8fdfe9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N343BQJ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQC4BFRdXLRP5jEIxKVEZB2KfNJIOICJtULkJDbTRh9lzQIhALUnsg%2BnlhzV51O%2FJkMy9sPlkCVgN5iWvcezzwnoifBiKv8DCE4QABoMNjM3NDIzMTgzODA1IgwQAgz4pS1mpuufFugq3APLQCuwMwaCFTKdE228XpXiaUnjZ1S%2Bazzyla8l0RZEC0oQGwA%2FNSwnJHR0cekMXiT8UPvzZNQVIj57lPaA9ldbOerLBOgP7WEHrw8YRbYNrwaazA4C8xVx3MiJI4WGtZzDDYdFdAZDFzeFjlpxkG%2Bk8qYmJrH9KaIRBpeX8UiJoqVFYrkUhzqC6d3WtXmhAJy7x1WhPK%2Bu%2FjsSgWHL2UFBD4%2FgyxdQhstI%2FcAXfBtOT5PVTYx7f0DN41%2FO2MtHMTdmupnNR%2FTeASKzMwkzcffo7Nu6DXf8ZLWwRfTel0ND1tJdQC3WNbKVtI9DOk0QjGJkYxIwc2AijKdpkmAsWxGQBBzI223ucc1xlQesncOepdLJbqj17XdR1etJrFTlb1puQ564SPMefFkscIHhX0sZ5jGBI5OPD%2B8Lq5xN50%2FlRLxusEGYDZ1va2E3IYwCqRV8CiIV6ZEVMe8jBBy06QX49A%2BCHeuqEppnebQFjlC4MjIlr31IragMfUliDS4K9ueagaMTFWKw%2BpBAY2zXIK8Ft8VtNB3cT8MC3JK%2BYzwzNxsH4C%2BLHNED1kTP3v9iImIf1%2Fc1jHN2%2FblL0qnGiKOndFzjvS%2F3hDvC8SMmjXs%2B7sjtIKmcnLXwO4Wm%2FDDc9trDBjqkAQ4TjmQdsn%2B1V5RHwKJnHX2nYxhDYIlLnx2UCR3LpRHtNuAOJUm5FsNe5HjhRnHZvPo12%2FZWTSJI5KTTYPlKfZxDKa7QMCclTwk4zC7mmWb2BU8GSW93iDnRAw1%2FRCoCLCVKg7WGyuGyccH798fFnpgfduPtJiVEp7ltp2%2BrgIubSfXGGnMP898PKYFzrvPQ56pwpwtIQtJvN9nvDy%2F4YwN2NRVq&X-Amz-Signature=41a7991fb087827a989eec01c1f29a85df7b2ec81529b013edfbbdca9a56e775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
