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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STSMQH2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD47XR6YR5%2FIEZWD0wD2HgN1BrbY%2FyQSxZ5LqAfb9lMbgIgCz90xfurvQV%2Fo8b%2BJCejRnWrLwDMz85e7QpTZIVq4CIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKr4%2F0AcU%2FDBhNB2uSrcAx9FUNcqvhq2QnzyC3vs7dhfou4JK5TSY6U2mXI0qwFLrcjSjkr7Q%2FzOk2mjx0q6bUq3RDGuvETEiM%2BVagTgxisec3p7aRvv45LhmK5%2FHFdgQxJOQmbkFLzKcci8W5V3o1I7m7oWsV2IdU9ElE4Kgh%2FP1BnffMJM65FqtubdysN%2FhS6HbQZ%2FSl4V%2F9z5k3vZ2Cdk%2BPlyiBnZcdEemBYPiM%2Ff9%2Fzp3ul8V%2B9GRhbzRmoVxAO8V1UR7uCESJaZTwva1fNoUhRUecBUqcpIjawdakv%2FGRxp613nIJV9G7xgjXJ4589OJXIw9S3INS4%2FP2%2Fuw31o1wj%2FgHzzstHjbXjJp3hShdYxGjWxZwOBqItaYpnVZjCBIV57g20f1FWY1G3rUZWppgWBzZp4Yjp0IC3y%2B%2FmAgcLLVJ%2BwtScD9WBGRJRdk%2F3QuOJYK1d9PL0il3V%2BGFiUchQxXtE22yQWVBVseLGCHo%2FjFhKyReszcUfhDZFXKglhNb3wqre5lIkOq5VJ36fzT5Uit5HLOLLNQW9OSeJO6E5BQNIp07B5VeAvt6wUViUpzqKUHB3aXWum15h9vJySRnMOtgRGHF9xDScD%2FczeX57uNtOHiT0K%2FABm%2BQRXe%2FuRMsydoTVJ28LjMLea4cAGOqUBRQiKL2xbIApmysOZ7VGuIhOErfMvQroRci7jT8IhTHYBvideX11AETlONal8Zo%2FdaCrarCg2NC107R21XUa0phPuJnP5M1RQM6zl5tQ3ymuUDqBWKvM1zlXYsb1916RzbJ%2FbImgu3pMhc%2Fh30vEFWB2Q9H%2BRMXNbQxjI4Uwu7tom0hoP0XCH%2BRZgpwKt12k7ciPjnn62aOmWs8QtmU%2BJzZTc1o13&X-Amz-Signature=1e042f09a48f0a421b89beac7c08a8f2e78241c1e32185d2ec2cd5bdb7cdc630&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STSMQH2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD47XR6YR5%2FIEZWD0wD2HgN1BrbY%2FyQSxZ5LqAfb9lMbgIgCz90xfurvQV%2Fo8b%2BJCejRnWrLwDMz85e7QpTZIVq4CIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKr4%2F0AcU%2FDBhNB2uSrcAx9FUNcqvhq2QnzyC3vs7dhfou4JK5TSY6U2mXI0qwFLrcjSjkr7Q%2FzOk2mjx0q6bUq3RDGuvETEiM%2BVagTgxisec3p7aRvv45LhmK5%2FHFdgQxJOQmbkFLzKcci8W5V3o1I7m7oWsV2IdU9ElE4Kgh%2FP1BnffMJM65FqtubdysN%2FhS6HbQZ%2FSl4V%2F9z5k3vZ2Cdk%2BPlyiBnZcdEemBYPiM%2Ff9%2Fzp3ul8V%2B9GRhbzRmoVxAO8V1UR7uCESJaZTwva1fNoUhRUecBUqcpIjawdakv%2FGRxp613nIJV9G7xgjXJ4589OJXIw9S3INS4%2FP2%2Fuw31o1wj%2FgHzzstHjbXjJp3hShdYxGjWxZwOBqItaYpnVZjCBIV57g20f1FWY1G3rUZWppgWBzZp4Yjp0IC3y%2B%2FmAgcLLVJ%2BwtScD9WBGRJRdk%2F3QuOJYK1d9PL0il3V%2BGFiUchQxXtE22yQWVBVseLGCHo%2FjFhKyReszcUfhDZFXKglhNb3wqre5lIkOq5VJ36fzT5Uit5HLOLLNQW9OSeJO6E5BQNIp07B5VeAvt6wUViUpzqKUHB3aXWum15h9vJySRnMOtgRGHF9xDScD%2FczeX57uNtOHiT0K%2FABm%2BQRXe%2FuRMsydoTVJ28LjMLea4cAGOqUBRQiKL2xbIApmysOZ7VGuIhOErfMvQroRci7jT8IhTHYBvideX11AETlONal8Zo%2FdaCrarCg2NC107R21XUa0phPuJnP5M1RQM6zl5tQ3ymuUDqBWKvM1zlXYsb1916RzbJ%2FbImgu3pMhc%2Fh30vEFWB2Q9H%2BRMXNbQxjI4Uwu7tom0hoP0XCH%2BRZgpwKt12k7ciPjnn62aOmWs8QtmU%2BJzZTc1o13&X-Amz-Signature=310a60ff8442c019d66029f97e757ab857a5a71d73e8e0a35fc1a7784c05d0b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STSMQH2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD47XR6YR5%2FIEZWD0wD2HgN1BrbY%2FyQSxZ5LqAfb9lMbgIgCz90xfurvQV%2Fo8b%2BJCejRnWrLwDMz85e7QpTZIVq4CIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKr4%2F0AcU%2FDBhNB2uSrcAx9FUNcqvhq2QnzyC3vs7dhfou4JK5TSY6U2mXI0qwFLrcjSjkr7Q%2FzOk2mjx0q6bUq3RDGuvETEiM%2BVagTgxisec3p7aRvv45LhmK5%2FHFdgQxJOQmbkFLzKcci8W5V3o1I7m7oWsV2IdU9ElE4Kgh%2FP1BnffMJM65FqtubdysN%2FhS6HbQZ%2FSl4V%2F9z5k3vZ2Cdk%2BPlyiBnZcdEemBYPiM%2Ff9%2Fzp3ul8V%2B9GRhbzRmoVxAO8V1UR7uCESJaZTwva1fNoUhRUecBUqcpIjawdakv%2FGRxp613nIJV9G7xgjXJ4589OJXIw9S3INS4%2FP2%2Fuw31o1wj%2FgHzzstHjbXjJp3hShdYxGjWxZwOBqItaYpnVZjCBIV57g20f1FWY1G3rUZWppgWBzZp4Yjp0IC3y%2B%2FmAgcLLVJ%2BwtScD9WBGRJRdk%2F3QuOJYK1d9PL0il3V%2BGFiUchQxXtE22yQWVBVseLGCHo%2FjFhKyReszcUfhDZFXKglhNb3wqre5lIkOq5VJ36fzT5Uit5HLOLLNQW9OSeJO6E5BQNIp07B5VeAvt6wUViUpzqKUHB3aXWum15h9vJySRnMOtgRGHF9xDScD%2FczeX57uNtOHiT0K%2FABm%2BQRXe%2FuRMsydoTVJ28LjMLea4cAGOqUBRQiKL2xbIApmysOZ7VGuIhOErfMvQroRci7jT8IhTHYBvideX11AETlONal8Zo%2FdaCrarCg2NC107R21XUa0phPuJnP5M1RQM6zl5tQ3ymuUDqBWKvM1zlXYsb1916RzbJ%2FbImgu3pMhc%2Fh30vEFWB2Q9H%2BRMXNbQxjI4Uwu7tom0hoP0XCH%2BRZgpwKt12k7ciPjnn62aOmWs8QtmU%2BJzZTc1o13&X-Amz-Signature=50892a10c45220be583ae47381223bf2d7105146a984b9c788ddfbd0088a14e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STSMQH2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD47XR6YR5%2FIEZWD0wD2HgN1BrbY%2FyQSxZ5LqAfb9lMbgIgCz90xfurvQV%2Fo8b%2BJCejRnWrLwDMz85e7QpTZIVq4CIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKr4%2F0AcU%2FDBhNB2uSrcAx9FUNcqvhq2QnzyC3vs7dhfou4JK5TSY6U2mXI0qwFLrcjSjkr7Q%2FzOk2mjx0q6bUq3RDGuvETEiM%2BVagTgxisec3p7aRvv45LhmK5%2FHFdgQxJOQmbkFLzKcci8W5V3o1I7m7oWsV2IdU9ElE4Kgh%2FP1BnffMJM65FqtubdysN%2FhS6HbQZ%2FSl4V%2F9z5k3vZ2Cdk%2BPlyiBnZcdEemBYPiM%2Ff9%2Fzp3ul8V%2B9GRhbzRmoVxAO8V1UR7uCESJaZTwva1fNoUhRUecBUqcpIjawdakv%2FGRxp613nIJV9G7xgjXJ4589OJXIw9S3INS4%2FP2%2Fuw31o1wj%2FgHzzstHjbXjJp3hShdYxGjWxZwOBqItaYpnVZjCBIV57g20f1FWY1G3rUZWppgWBzZp4Yjp0IC3y%2B%2FmAgcLLVJ%2BwtScD9WBGRJRdk%2F3QuOJYK1d9PL0il3V%2BGFiUchQxXtE22yQWVBVseLGCHo%2FjFhKyReszcUfhDZFXKglhNb3wqre5lIkOq5VJ36fzT5Uit5HLOLLNQW9OSeJO6E5BQNIp07B5VeAvt6wUViUpzqKUHB3aXWum15h9vJySRnMOtgRGHF9xDScD%2FczeX57uNtOHiT0K%2FABm%2BQRXe%2FuRMsydoTVJ28LjMLea4cAGOqUBRQiKL2xbIApmysOZ7VGuIhOErfMvQroRci7jT8IhTHYBvideX11AETlONal8Zo%2FdaCrarCg2NC107R21XUa0phPuJnP5M1RQM6zl5tQ3ymuUDqBWKvM1zlXYsb1916RzbJ%2FbImgu3pMhc%2Fh30vEFWB2Q9H%2BRMXNbQxjI4Uwu7tom0hoP0XCH%2BRZgpwKt12k7ciPjnn62aOmWs8QtmU%2BJzZTc1o13&X-Amz-Signature=0fb2106f76e0004d0dc51fe43c06bdb6773b88c0492bd23e2aadff287a87f71b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STSMQH2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD47XR6YR5%2FIEZWD0wD2HgN1BrbY%2FyQSxZ5LqAfb9lMbgIgCz90xfurvQV%2Fo8b%2BJCejRnWrLwDMz85e7QpTZIVq4CIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKr4%2F0AcU%2FDBhNB2uSrcAx9FUNcqvhq2QnzyC3vs7dhfou4JK5TSY6U2mXI0qwFLrcjSjkr7Q%2FzOk2mjx0q6bUq3RDGuvETEiM%2BVagTgxisec3p7aRvv45LhmK5%2FHFdgQxJOQmbkFLzKcci8W5V3o1I7m7oWsV2IdU9ElE4Kgh%2FP1BnffMJM65FqtubdysN%2FhS6HbQZ%2FSl4V%2F9z5k3vZ2Cdk%2BPlyiBnZcdEemBYPiM%2Ff9%2Fzp3ul8V%2B9GRhbzRmoVxAO8V1UR7uCESJaZTwva1fNoUhRUecBUqcpIjawdakv%2FGRxp613nIJV9G7xgjXJ4589OJXIw9S3INS4%2FP2%2Fuw31o1wj%2FgHzzstHjbXjJp3hShdYxGjWxZwOBqItaYpnVZjCBIV57g20f1FWY1G3rUZWppgWBzZp4Yjp0IC3y%2B%2FmAgcLLVJ%2BwtScD9WBGRJRdk%2F3QuOJYK1d9PL0il3V%2BGFiUchQxXtE22yQWVBVseLGCHo%2FjFhKyReszcUfhDZFXKglhNb3wqre5lIkOq5VJ36fzT5Uit5HLOLLNQW9OSeJO6E5BQNIp07B5VeAvt6wUViUpzqKUHB3aXWum15h9vJySRnMOtgRGHF9xDScD%2FczeX57uNtOHiT0K%2FABm%2BQRXe%2FuRMsydoTVJ28LjMLea4cAGOqUBRQiKL2xbIApmysOZ7VGuIhOErfMvQroRci7jT8IhTHYBvideX11AETlONal8Zo%2FdaCrarCg2NC107R21XUa0phPuJnP5M1RQM6zl5tQ3ymuUDqBWKvM1zlXYsb1916RzbJ%2FbImgu3pMhc%2Fh30vEFWB2Q9H%2BRMXNbQxjI4Uwu7tom0hoP0XCH%2BRZgpwKt12k7ciPjnn62aOmWs8QtmU%2BJzZTc1o13&X-Amz-Signature=74cc8085269cb498e103b639dad98a49ba8a9b4be6ed9d4b1b03098da9c21a36&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STSMQH2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD47XR6YR5%2FIEZWD0wD2HgN1BrbY%2FyQSxZ5LqAfb9lMbgIgCz90xfurvQV%2Fo8b%2BJCejRnWrLwDMz85e7QpTZIVq4CIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKr4%2F0AcU%2FDBhNB2uSrcAx9FUNcqvhq2QnzyC3vs7dhfou4JK5TSY6U2mXI0qwFLrcjSjkr7Q%2FzOk2mjx0q6bUq3RDGuvETEiM%2BVagTgxisec3p7aRvv45LhmK5%2FHFdgQxJOQmbkFLzKcci8W5V3o1I7m7oWsV2IdU9ElE4Kgh%2FP1BnffMJM65FqtubdysN%2FhS6HbQZ%2FSl4V%2F9z5k3vZ2Cdk%2BPlyiBnZcdEemBYPiM%2Ff9%2Fzp3ul8V%2B9GRhbzRmoVxAO8V1UR7uCESJaZTwva1fNoUhRUecBUqcpIjawdakv%2FGRxp613nIJV9G7xgjXJ4589OJXIw9S3INS4%2FP2%2Fuw31o1wj%2FgHzzstHjbXjJp3hShdYxGjWxZwOBqItaYpnVZjCBIV57g20f1FWY1G3rUZWppgWBzZp4Yjp0IC3y%2B%2FmAgcLLVJ%2BwtScD9WBGRJRdk%2F3QuOJYK1d9PL0il3V%2BGFiUchQxXtE22yQWVBVseLGCHo%2FjFhKyReszcUfhDZFXKglhNb3wqre5lIkOq5VJ36fzT5Uit5HLOLLNQW9OSeJO6E5BQNIp07B5VeAvt6wUViUpzqKUHB3aXWum15h9vJySRnMOtgRGHF9xDScD%2FczeX57uNtOHiT0K%2FABm%2BQRXe%2FuRMsydoTVJ28LjMLea4cAGOqUBRQiKL2xbIApmysOZ7VGuIhOErfMvQroRci7jT8IhTHYBvideX11AETlONal8Zo%2FdaCrarCg2NC107R21XUa0phPuJnP5M1RQM6zl5tQ3ymuUDqBWKvM1zlXYsb1916RzbJ%2FbImgu3pMhc%2Fh30vEFWB2Q9H%2BRMXNbQxjI4Uwu7tom0hoP0XCH%2BRZgpwKt12k7ciPjnn62aOmWs8QtmU%2BJzZTc1o13&X-Amz-Signature=be13973876a6583175766ef954467b4aab719f4b4b94f112e8f6c534b5756f4d&X-Amz-SignedHeaders=host&x-id=GetObject)
