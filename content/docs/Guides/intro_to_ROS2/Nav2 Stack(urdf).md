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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNI2NNI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDK2G4CMkuvdFHeMDLjYdExBxgj9ddpG9g9HbJMbEk0rwIhAKYRgAA2qXIJlk39QUvh0A2UrJDMq%2FtNyyFI7APvI7tmKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwnyMCwMdaP25UcMq3ANv12ucZKsMiO8lJC4mdB%2B9p17csX0X3EG6I5MkhR4JhiLUSXRuKU6Jm%2F9TQcqxv6dvhSpbkHLub%2B4rZexbN4PTaIVZhD93ADkqKf%2BVzzBw3Z0jEYIu17JNtl8YJQOeQHC6gRZBki5v7eKfgHmV%2Bhl6jY%2BcHM4P7btkmwSzwjVTtqBGiSnLzjtTqq5l6wWLPqrdODyOm4IlzmllX9cOEpAsNbWWDRe0ONuwm8PIOTTpJqA8iaO4hdHkBU3dbE00TNF8PGGIFYR4SjrNXRKHqE29l880bgdePZV6JgGGbK9YaC1cW6m4clVSqUD3%2BMpIHJKqTcotpxzj%2BshXvApGfe5LStPAie1hbP9ShKoFX3r9taiUc76ID0Z%2FzX2Kn9NlDk7VrBX6B1Ac2tY0SSjeBD5hY0YCuvoTAjHqtx8uPqCWu1aLkvBH8JLxGE2FLDri%2FtTwIsHTWM2U2F0ncII2Ah%2FX8OpGmD6yztI3mBzgcSDX2lGI%2F3tX7rJVoUeUoQisoxsjMvPAK5mZtkpmTLE4cBn7KW6iD4rNEof5N7w7tYTbLgeCQ42f5S5rh5jlGW6fCKSjfNNlQuKoWdqmpATKjdRZQ%2BGexUJQtTknys3%2BsKV7WqoC9y8LSkrczBBNBTCtyOW%2FBjqkAcoJP31OFoszw6htSiMzW%2BWGiwZaKrokyxE1RxB6X%2Fpt2KXG8nw2cpvf2brGmJXfbA6VyqC7QmpTvD9RrEdaaX%2B%2B75ADC%2FezTJ3JxN518Ww9nhtpG%2BBipNGuQiRuZVPEJnl5X6HOJ8lGZkUl6%2BHx3DOf%2FgWTZlKRJ0NRSHz4Vk0RecbYbM0rSe6SVTqs%2F4%2BELpYYmDT9XXNdOpSjVl23jqSaqSX5&X-Amz-Signature=171329b776b930451268f9a85afb884e6f81f3e285cdc7651fd647ae9fca61e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNI2NNI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDK2G4CMkuvdFHeMDLjYdExBxgj9ddpG9g9HbJMbEk0rwIhAKYRgAA2qXIJlk39QUvh0A2UrJDMq%2FtNyyFI7APvI7tmKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwnyMCwMdaP25UcMq3ANv12ucZKsMiO8lJC4mdB%2B9p17csX0X3EG6I5MkhR4JhiLUSXRuKU6Jm%2F9TQcqxv6dvhSpbkHLub%2B4rZexbN4PTaIVZhD93ADkqKf%2BVzzBw3Z0jEYIu17JNtl8YJQOeQHC6gRZBki5v7eKfgHmV%2Bhl6jY%2BcHM4P7btkmwSzwjVTtqBGiSnLzjtTqq5l6wWLPqrdODyOm4IlzmllX9cOEpAsNbWWDRe0ONuwm8PIOTTpJqA8iaO4hdHkBU3dbE00TNF8PGGIFYR4SjrNXRKHqE29l880bgdePZV6JgGGbK9YaC1cW6m4clVSqUD3%2BMpIHJKqTcotpxzj%2BshXvApGfe5LStPAie1hbP9ShKoFX3r9taiUc76ID0Z%2FzX2Kn9NlDk7VrBX6B1Ac2tY0SSjeBD5hY0YCuvoTAjHqtx8uPqCWu1aLkvBH8JLxGE2FLDri%2FtTwIsHTWM2U2F0ncII2Ah%2FX8OpGmD6yztI3mBzgcSDX2lGI%2F3tX7rJVoUeUoQisoxsjMvPAK5mZtkpmTLE4cBn7KW6iD4rNEof5N7w7tYTbLgeCQ42f5S5rh5jlGW6fCKSjfNNlQuKoWdqmpATKjdRZQ%2BGexUJQtTknys3%2BsKV7WqoC9y8LSkrczBBNBTCtyOW%2FBjqkAcoJP31OFoszw6htSiMzW%2BWGiwZaKrokyxE1RxB6X%2Fpt2KXG8nw2cpvf2brGmJXfbA6VyqC7QmpTvD9RrEdaaX%2B%2B75ADC%2FezTJ3JxN518Ww9nhtpG%2BBipNGuQiRuZVPEJnl5X6HOJ8lGZkUl6%2BHx3DOf%2FgWTZlKRJ0NRSHz4Vk0RecbYbM0rSe6SVTqs%2F4%2BELpYYmDT9XXNdOpSjVl23jqSaqSX5&X-Amz-Signature=060ddcbf72efb4c8e3dc9dd65802a86e5c535868d0d1359dfe079d4f5a201e89&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNI2NNI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDK2G4CMkuvdFHeMDLjYdExBxgj9ddpG9g9HbJMbEk0rwIhAKYRgAA2qXIJlk39QUvh0A2UrJDMq%2FtNyyFI7APvI7tmKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwnyMCwMdaP25UcMq3ANv12ucZKsMiO8lJC4mdB%2B9p17csX0X3EG6I5MkhR4JhiLUSXRuKU6Jm%2F9TQcqxv6dvhSpbkHLub%2B4rZexbN4PTaIVZhD93ADkqKf%2BVzzBw3Z0jEYIu17JNtl8YJQOeQHC6gRZBki5v7eKfgHmV%2Bhl6jY%2BcHM4P7btkmwSzwjVTtqBGiSnLzjtTqq5l6wWLPqrdODyOm4IlzmllX9cOEpAsNbWWDRe0ONuwm8PIOTTpJqA8iaO4hdHkBU3dbE00TNF8PGGIFYR4SjrNXRKHqE29l880bgdePZV6JgGGbK9YaC1cW6m4clVSqUD3%2BMpIHJKqTcotpxzj%2BshXvApGfe5LStPAie1hbP9ShKoFX3r9taiUc76ID0Z%2FzX2Kn9NlDk7VrBX6B1Ac2tY0SSjeBD5hY0YCuvoTAjHqtx8uPqCWu1aLkvBH8JLxGE2FLDri%2FtTwIsHTWM2U2F0ncII2Ah%2FX8OpGmD6yztI3mBzgcSDX2lGI%2F3tX7rJVoUeUoQisoxsjMvPAK5mZtkpmTLE4cBn7KW6iD4rNEof5N7w7tYTbLgeCQ42f5S5rh5jlGW6fCKSjfNNlQuKoWdqmpATKjdRZQ%2BGexUJQtTknys3%2BsKV7WqoC9y8LSkrczBBNBTCtyOW%2FBjqkAcoJP31OFoszw6htSiMzW%2BWGiwZaKrokyxE1RxB6X%2Fpt2KXG8nw2cpvf2brGmJXfbA6VyqC7QmpTvD9RrEdaaX%2B%2B75ADC%2FezTJ3JxN518Ww9nhtpG%2BBipNGuQiRuZVPEJnl5X6HOJ8lGZkUl6%2BHx3DOf%2FgWTZlKRJ0NRSHz4Vk0RecbYbM0rSe6SVTqs%2F4%2BELpYYmDT9XXNdOpSjVl23jqSaqSX5&X-Amz-Signature=f0bdb1c896882822a15ad59228137b41d6b19e257f432919ccc9e4101b751ff9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNI2NNI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDK2G4CMkuvdFHeMDLjYdExBxgj9ddpG9g9HbJMbEk0rwIhAKYRgAA2qXIJlk39QUvh0A2UrJDMq%2FtNyyFI7APvI7tmKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwnyMCwMdaP25UcMq3ANv12ucZKsMiO8lJC4mdB%2B9p17csX0X3EG6I5MkhR4JhiLUSXRuKU6Jm%2F9TQcqxv6dvhSpbkHLub%2B4rZexbN4PTaIVZhD93ADkqKf%2BVzzBw3Z0jEYIu17JNtl8YJQOeQHC6gRZBki5v7eKfgHmV%2Bhl6jY%2BcHM4P7btkmwSzwjVTtqBGiSnLzjtTqq5l6wWLPqrdODyOm4IlzmllX9cOEpAsNbWWDRe0ONuwm8PIOTTpJqA8iaO4hdHkBU3dbE00TNF8PGGIFYR4SjrNXRKHqE29l880bgdePZV6JgGGbK9YaC1cW6m4clVSqUD3%2BMpIHJKqTcotpxzj%2BshXvApGfe5LStPAie1hbP9ShKoFX3r9taiUc76ID0Z%2FzX2Kn9NlDk7VrBX6B1Ac2tY0SSjeBD5hY0YCuvoTAjHqtx8uPqCWu1aLkvBH8JLxGE2FLDri%2FtTwIsHTWM2U2F0ncII2Ah%2FX8OpGmD6yztI3mBzgcSDX2lGI%2F3tX7rJVoUeUoQisoxsjMvPAK5mZtkpmTLE4cBn7KW6iD4rNEof5N7w7tYTbLgeCQ42f5S5rh5jlGW6fCKSjfNNlQuKoWdqmpATKjdRZQ%2BGexUJQtTknys3%2BsKV7WqoC9y8LSkrczBBNBTCtyOW%2FBjqkAcoJP31OFoszw6htSiMzW%2BWGiwZaKrokyxE1RxB6X%2Fpt2KXG8nw2cpvf2brGmJXfbA6VyqC7QmpTvD9RrEdaaX%2B%2B75ADC%2FezTJ3JxN518Ww9nhtpG%2BBipNGuQiRuZVPEJnl5X6HOJ8lGZkUl6%2BHx3DOf%2FgWTZlKRJ0NRSHz4Vk0RecbYbM0rSe6SVTqs%2F4%2BELpYYmDT9XXNdOpSjVl23jqSaqSX5&X-Amz-Signature=8c8e06f50490462bc51767508720aa2492ba94f4b62f97b7f672f38191ea947c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNI2NNI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDK2G4CMkuvdFHeMDLjYdExBxgj9ddpG9g9HbJMbEk0rwIhAKYRgAA2qXIJlk39QUvh0A2UrJDMq%2FtNyyFI7APvI7tmKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwnyMCwMdaP25UcMq3ANv12ucZKsMiO8lJC4mdB%2B9p17csX0X3EG6I5MkhR4JhiLUSXRuKU6Jm%2F9TQcqxv6dvhSpbkHLub%2B4rZexbN4PTaIVZhD93ADkqKf%2BVzzBw3Z0jEYIu17JNtl8YJQOeQHC6gRZBki5v7eKfgHmV%2Bhl6jY%2BcHM4P7btkmwSzwjVTtqBGiSnLzjtTqq5l6wWLPqrdODyOm4IlzmllX9cOEpAsNbWWDRe0ONuwm8PIOTTpJqA8iaO4hdHkBU3dbE00TNF8PGGIFYR4SjrNXRKHqE29l880bgdePZV6JgGGbK9YaC1cW6m4clVSqUD3%2BMpIHJKqTcotpxzj%2BshXvApGfe5LStPAie1hbP9ShKoFX3r9taiUc76ID0Z%2FzX2Kn9NlDk7VrBX6B1Ac2tY0SSjeBD5hY0YCuvoTAjHqtx8uPqCWu1aLkvBH8JLxGE2FLDri%2FtTwIsHTWM2U2F0ncII2Ah%2FX8OpGmD6yztI3mBzgcSDX2lGI%2F3tX7rJVoUeUoQisoxsjMvPAK5mZtkpmTLE4cBn7KW6iD4rNEof5N7w7tYTbLgeCQ42f5S5rh5jlGW6fCKSjfNNlQuKoWdqmpATKjdRZQ%2BGexUJQtTknys3%2BsKV7WqoC9y8LSkrczBBNBTCtyOW%2FBjqkAcoJP31OFoszw6htSiMzW%2BWGiwZaKrokyxE1RxB6X%2Fpt2KXG8nw2cpvf2brGmJXfbA6VyqC7QmpTvD9RrEdaaX%2B%2B75ADC%2FezTJ3JxN518Ww9nhtpG%2BBipNGuQiRuZVPEJnl5X6HOJ8lGZkUl6%2BHx3DOf%2FgWTZlKRJ0NRSHz4Vk0RecbYbM0rSe6SVTqs%2F4%2BELpYYmDT9XXNdOpSjVl23jqSaqSX5&X-Amz-Signature=00b20075fcc4b8b523b03f935c0d80c55b1ed33750964709aa3a251f8f76ce9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNI2NNI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDK2G4CMkuvdFHeMDLjYdExBxgj9ddpG9g9HbJMbEk0rwIhAKYRgAA2qXIJlk39QUvh0A2UrJDMq%2FtNyyFI7APvI7tmKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPwnyMCwMdaP25UcMq3ANv12ucZKsMiO8lJC4mdB%2B9p17csX0X3EG6I5MkhR4JhiLUSXRuKU6Jm%2F9TQcqxv6dvhSpbkHLub%2B4rZexbN4PTaIVZhD93ADkqKf%2BVzzBw3Z0jEYIu17JNtl8YJQOeQHC6gRZBki5v7eKfgHmV%2Bhl6jY%2BcHM4P7btkmwSzwjVTtqBGiSnLzjtTqq5l6wWLPqrdODyOm4IlzmllX9cOEpAsNbWWDRe0ONuwm8PIOTTpJqA8iaO4hdHkBU3dbE00TNF8PGGIFYR4SjrNXRKHqE29l880bgdePZV6JgGGbK9YaC1cW6m4clVSqUD3%2BMpIHJKqTcotpxzj%2BshXvApGfe5LStPAie1hbP9ShKoFX3r9taiUc76ID0Z%2FzX2Kn9NlDk7VrBX6B1Ac2tY0SSjeBD5hY0YCuvoTAjHqtx8uPqCWu1aLkvBH8JLxGE2FLDri%2FtTwIsHTWM2U2F0ncII2Ah%2FX8OpGmD6yztI3mBzgcSDX2lGI%2F3tX7rJVoUeUoQisoxsjMvPAK5mZtkpmTLE4cBn7KW6iD4rNEof5N7w7tYTbLgeCQ42f5S5rh5jlGW6fCKSjfNNlQuKoWdqmpATKjdRZQ%2BGexUJQtTknys3%2BsKV7WqoC9y8LSkrczBBNBTCtyOW%2FBjqkAcoJP31OFoszw6htSiMzW%2BWGiwZaKrokyxE1RxB6X%2Fpt2KXG8nw2cpvf2brGmJXfbA6VyqC7QmpTvD9RrEdaaX%2B%2B75ADC%2FezTJ3JxN518Ww9nhtpG%2BBipNGuQiRuZVPEJnl5X6HOJ8lGZkUl6%2BHx3DOf%2FgWTZlKRJ0NRSHz4Vk0RecbYbM0rSe6SVTqs%2F4%2BELpYYmDT9XXNdOpSjVl23jqSaqSX5&X-Amz-Signature=cbfee67fe1c9939ae4eb4ff9dad7153ff0b2038abcd114e125ff850fe84ecc17&X-Amz-SignedHeaders=host&x-id=GetObject)
