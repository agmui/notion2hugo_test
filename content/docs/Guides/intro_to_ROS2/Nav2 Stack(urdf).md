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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE4UATU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDRh5bc0nqfzkI4w72fR4zkNa4rLt9H%2BdP8fU6%2FRXyIbAIhANfL5bm8IjHELowd6oLSZMiB3tN6eJXMDHlbgL0jmYB7Kv8DCCAQABoMNjM3NDIzMTgzODA1Igxu83orDBYAbwd0Oyoq3AOIanfSqNWr8IJdc6ZUlyefFxmuNH4QbT%2Bsx4LFm7hZZ%2FCrPw%2BBNOSlDqzxjFVe7kBdCtk%2FtGcVF9fuU%2F2Uc0LuEdkAPx9vCdjOORXnsvHC9LxkblraTWBAm9t%2BuQ3iTx2RFeSnFPThpk1h0BKzYvEggVKS8hF9fOaGfhtpBiNfKu218nbkGgNDLkjo3g8prG1RAKErbI4VbgQ5CKq0aPb8CQBdAkRsGw%2FORuYMioGbXT9sezQpmeAiFC5Z4zH8lK3Iu4SfKEJ5kGjVPHI7qLMQ3oYIYIEN4%2FUsioAw6VJ6gDYf5qscFlGVinQVvZzABTrpj42QYIxXsJ9%2BEYrn4tk4CJH9ortCbSI8eR4DFAGtmjjisrP1C2nAVi4FtPRcoxesilxHypXEKdbve0wMzT%2BGh7Uo%2BhQwrRJhBIGgYOyMmfduExdVwGuhJ2vK8Yb2IQFuqBBZ7UU%2BIjiRF%2B7oqQvoxUGWe18DlioP%2FNyzkL7ENsrcJ8vQmZrZZ0lUa4tWtYzi%2Bz9u1iEaPxc7Dp5liLQob0dFsWpNaL1Qp%2B32E4B6coTK8obDIxGcl%2B6NNe8gKjje7kCy9o5aJucloTAQ%2Bxxw8jDq08FPZUVxeCDZKSo%2Bn2l%2BOymXRkEscHaYizDcupTBBjqkAXXC%2FxlFQDxD98w1%2BFywV%2FPgbebBF86Au1Ohv9b0PpY7idU%2BtMynyLLQ0WFIRNjiDvgyMA1Q1bnz3hoENvQecsQsLo4NVTGvU3NSB0FP45jg4M4Lvqb6BOYw0wOsKXb5DNFmRNN0b4BkUmbhKhlDqgZvC6kerbINLg1xPk7q2SMdx1FRNL9evdaZjJs2RJaJgTiz%2FKwXuIDORvxGRQd8AyY678Vm&X-Amz-Signature=6892853f1e876999ed1a270a11d96239d29dea544ed3985d564115a9eca65645&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE4UATU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDRh5bc0nqfzkI4w72fR4zkNa4rLt9H%2BdP8fU6%2FRXyIbAIhANfL5bm8IjHELowd6oLSZMiB3tN6eJXMDHlbgL0jmYB7Kv8DCCAQABoMNjM3NDIzMTgzODA1Igxu83orDBYAbwd0Oyoq3AOIanfSqNWr8IJdc6ZUlyefFxmuNH4QbT%2Bsx4LFm7hZZ%2FCrPw%2BBNOSlDqzxjFVe7kBdCtk%2FtGcVF9fuU%2F2Uc0LuEdkAPx9vCdjOORXnsvHC9LxkblraTWBAm9t%2BuQ3iTx2RFeSnFPThpk1h0BKzYvEggVKS8hF9fOaGfhtpBiNfKu218nbkGgNDLkjo3g8prG1RAKErbI4VbgQ5CKq0aPb8CQBdAkRsGw%2FORuYMioGbXT9sezQpmeAiFC5Z4zH8lK3Iu4SfKEJ5kGjVPHI7qLMQ3oYIYIEN4%2FUsioAw6VJ6gDYf5qscFlGVinQVvZzABTrpj42QYIxXsJ9%2BEYrn4tk4CJH9ortCbSI8eR4DFAGtmjjisrP1C2nAVi4FtPRcoxesilxHypXEKdbve0wMzT%2BGh7Uo%2BhQwrRJhBIGgYOyMmfduExdVwGuhJ2vK8Yb2IQFuqBBZ7UU%2BIjiRF%2B7oqQvoxUGWe18DlioP%2FNyzkL7ENsrcJ8vQmZrZZ0lUa4tWtYzi%2Bz9u1iEaPxc7Dp5liLQob0dFsWpNaL1Qp%2B32E4B6coTK8obDIxGcl%2B6NNe8gKjje7kCy9o5aJucloTAQ%2Bxxw8jDq08FPZUVxeCDZKSo%2Bn2l%2BOymXRkEscHaYizDcupTBBjqkAXXC%2FxlFQDxD98w1%2BFywV%2FPgbebBF86Au1Ohv9b0PpY7idU%2BtMynyLLQ0WFIRNjiDvgyMA1Q1bnz3hoENvQecsQsLo4NVTGvU3NSB0FP45jg4M4Lvqb6BOYw0wOsKXb5DNFmRNN0b4BkUmbhKhlDqgZvC6kerbINLg1xPk7q2SMdx1FRNL9evdaZjJs2RJaJgTiz%2FKwXuIDORvxGRQd8AyY678Vm&X-Amz-Signature=3b9b4e1548b1bcf5d36bc7bd59f09241b5ddc9e48d61c71023ac2eb8d0981309&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE4UATU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDRh5bc0nqfzkI4w72fR4zkNa4rLt9H%2BdP8fU6%2FRXyIbAIhANfL5bm8IjHELowd6oLSZMiB3tN6eJXMDHlbgL0jmYB7Kv8DCCAQABoMNjM3NDIzMTgzODA1Igxu83orDBYAbwd0Oyoq3AOIanfSqNWr8IJdc6ZUlyefFxmuNH4QbT%2Bsx4LFm7hZZ%2FCrPw%2BBNOSlDqzxjFVe7kBdCtk%2FtGcVF9fuU%2F2Uc0LuEdkAPx9vCdjOORXnsvHC9LxkblraTWBAm9t%2BuQ3iTx2RFeSnFPThpk1h0BKzYvEggVKS8hF9fOaGfhtpBiNfKu218nbkGgNDLkjo3g8prG1RAKErbI4VbgQ5CKq0aPb8CQBdAkRsGw%2FORuYMioGbXT9sezQpmeAiFC5Z4zH8lK3Iu4SfKEJ5kGjVPHI7qLMQ3oYIYIEN4%2FUsioAw6VJ6gDYf5qscFlGVinQVvZzABTrpj42QYIxXsJ9%2BEYrn4tk4CJH9ortCbSI8eR4DFAGtmjjisrP1C2nAVi4FtPRcoxesilxHypXEKdbve0wMzT%2BGh7Uo%2BhQwrRJhBIGgYOyMmfduExdVwGuhJ2vK8Yb2IQFuqBBZ7UU%2BIjiRF%2B7oqQvoxUGWe18DlioP%2FNyzkL7ENsrcJ8vQmZrZZ0lUa4tWtYzi%2Bz9u1iEaPxc7Dp5liLQob0dFsWpNaL1Qp%2B32E4B6coTK8obDIxGcl%2B6NNe8gKjje7kCy9o5aJucloTAQ%2Bxxw8jDq08FPZUVxeCDZKSo%2Bn2l%2BOymXRkEscHaYizDcupTBBjqkAXXC%2FxlFQDxD98w1%2BFywV%2FPgbebBF86Au1Ohv9b0PpY7idU%2BtMynyLLQ0WFIRNjiDvgyMA1Q1bnz3hoENvQecsQsLo4NVTGvU3NSB0FP45jg4M4Lvqb6BOYw0wOsKXb5DNFmRNN0b4BkUmbhKhlDqgZvC6kerbINLg1xPk7q2SMdx1FRNL9evdaZjJs2RJaJgTiz%2FKwXuIDORvxGRQd8AyY678Vm&X-Amz-Signature=194236d0f4c94e39c975e465f5e48a24678d1b63dad4fb2b679c140e7466ec76&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE4UATU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDRh5bc0nqfzkI4w72fR4zkNa4rLt9H%2BdP8fU6%2FRXyIbAIhANfL5bm8IjHELowd6oLSZMiB3tN6eJXMDHlbgL0jmYB7Kv8DCCAQABoMNjM3NDIzMTgzODA1Igxu83orDBYAbwd0Oyoq3AOIanfSqNWr8IJdc6ZUlyefFxmuNH4QbT%2Bsx4LFm7hZZ%2FCrPw%2BBNOSlDqzxjFVe7kBdCtk%2FtGcVF9fuU%2F2Uc0LuEdkAPx9vCdjOORXnsvHC9LxkblraTWBAm9t%2BuQ3iTx2RFeSnFPThpk1h0BKzYvEggVKS8hF9fOaGfhtpBiNfKu218nbkGgNDLkjo3g8prG1RAKErbI4VbgQ5CKq0aPb8CQBdAkRsGw%2FORuYMioGbXT9sezQpmeAiFC5Z4zH8lK3Iu4SfKEJ5kGjVPHI7qLMQ3oYIYIEN4%2FUsioAw6VJ6gDYf5qscFlGVinQVvZzABTrpj42QYIxXsJ9%2BEYrn4tk4CJH9ortCbSI8eR4DFAGtmjjisrP1C2nAVi4FtPRcoxesilxHypXEKdbve0wMzT%2BGh7Uo%2BhQwrRJhBIGgYOyMmfduExdVwGuhJ2vK8Yb2IQFuqBBZ7UU%2BIjiRF%2B7oqQvoxUGWe18DlioP%2FNyzkL7ENsrcJ8vQmZrZZ0lUa4tWtYzi%2Bz9u1iEaPxc7Dp5liLQob0dFsWpNaL1Qp%2B32E4B6coTK8obDIxGcl%2B6NNe8gKjje7kCy9o5aJucloTAQ%2Bxxw8jDq08FPZUVxeCDZKSo%2Bn2l%2BOymXRkEscHaYizDcupTBBjqkAXXC%2FxlFQDxD98w1%2BFywV%2FPgbebBF86Au1Ohv9b0PpY7idU%2BtMynyLLQ0WFIRNjiDvgyMA1Q1bnz3hoENvQecsQsLo4NVTGvU3NSB0FP45jg4M4Lvqb6BOYw0wOsKXb5DNFmRNN0b4BkUmbhKhlDqgZvC6kerbINLg1xPk7q2SMdx1FRNL9evdaZjJs2RJaJgTiz%2FKwXuIDORvxGRQd8AyY678Vm&X-Amz-Signature=c37d5043b4988a9ad6ea62d4153651f58f916cc0f3a8340ce8ac5dd1836a3896&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE4UATU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDRh5bc0nqfzkI4w72fR4zkNa4rLt9H%2BdP8fU6%2FRXyIbAIhANfL5bm8IjHELowd6oLSZMiB3tN6eJXMDHlbgL0jmYB7Kv8DCCAQABoMNjM3NDIzMTgzODA1Igxu83orDBYAbwd0Oyoq3AOIanfSqNWr8IJdc6ZUlyefFxmuNH4QbT%2Bsx4LFm7hZZ%2FCrPw%2BBNOSlDqzxjFVe7kBdCtk%2FtGcVF9fuU%2F2Uc0LuEdkAPx9vCdjOORXnsvHC9LxkblraTWBAm9t%2BuQ3iTx2RFeSnFPThpk1h0BKzYvEggVKS8hF9fOaGfhtpBiNfKu218nbkGgNDLkjo3g8prG1RAKErbI4VbgQ5CKq0aPb8CQBdAkRsGw%2FORuYMioGbXT9sezQpmeAiFC5Z4zH8lK3Iu4SfKEJ5kGjVPHI7qLMQ3oYIYIEN4%2FUsioAw6VJ6gDYf5qscFlGVinQVvZzABTrpj42QYIxXsJ9%2BEYrn4tk4CJH9ortCbSI8eR4DFAGtmjjisrP1C2nAVi4FtPRcoxesilxHypXEKdbve0wMzT%2BGh7Uo%2BhQwrRJhBIGgYOyMmfduExdVwGuhJ2vK8Yb2IQFuqBBZ7UU%2BIjiRF%2B7oqQvoxUGWe18DlioP%2FNyzkL7ENsrcJ8vQmZrZZ0lUa4tWtYzi%2Bz9u1iEaPxc7Dp5liLQob0dFsWpNaL1Qp%2B32E4B6coTK8obDIxGcl%2B6NNe8gKjje7kCy9o5aJucloTAQ%2Bxxw8jDq08FPZUVxeCDZKSo%2Bn2l%2BOymXRkEscHaYizDcupTBBjqkAXXC%2FxlFQDxD98w1%2BFywV%2FPgbebBF86Au1Ohv9b0PpY7idU%2BtMynyLLQ0WFIRNjiDvgyMA1Q1bnz3hoENvQecsQsLo4NVTGvU3NSB0FP45jg4M4Lvqb6BOYw0wOsKXb5DNFmRNN0b4BkUmbhKhlDqgZvC6kerbINLg1xPk7q2SMdx1FRNL9evdaZjJs2RJaJgTiz%2FKwXuIDORvxGRQd8AyY678Vm&X-Amz-Signature=05641cff407b1ade9afd625b75ce0fb6679a9b2d2f5b1d384399705d1ed14931&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPE4UATU%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDRh5bc0nqfzkI4w72fR4zkNa4rLt9H%2BdP8fU6%2FRXyIbAIhANfL5bm8IjHELowd6oLSZMiB3tN6eJXMDHlbgL0jmYB7Kv8DCCAQABoMNjM3NDIzMTgzODA1Igxu83orDBYAbwd0Oyoq3AOIanfSqNWr8IJdc6ZUlyefFxmuNH4QbT%2Bsx4LFm7hZZ%2FCrPw%2BBNOSlDqzxjFVe7kBdCtk%2FtGcVF9fuU%2F2Uc0LuEdkAPx9vCdjOORXnsvHC9LxkblraTWBAm9t%2BuQ3iTx2RFeSnFPThpk1h0BKzYvEggVKS8hF9fOaGfhtpBiNfKu218nbkGgNDLkjo3g8prG1RAKErbI4VbgQ5CKq0aPb8CQBdAkRsGw%2FORuYMioGbXT9sezQpmeAiFC5Z4zH8lK3Iu4SfKEJ5kGjVPHI7qLMQ3oYIYIEN4%2FUsioAw6VJ6gDYf5qscFlGVinQVvZzABTrpj42QYIxXsJ9%2BEYrn4tk4CJH9ortCbSI8eR4DFAGtmjjisrP1C2nAVi4FtPRcoxesilxHypXEKdbve0wMzT%2BGh7Uo%2BhQwrRJhBIGgYOyMmfduExdVwGuhJ2vK8Yb2IQFuqBBZ7UU%2BIjiRF%2B7oqQvoxUGWe18DlioP%2FNyzkL7ENsrcJ8vQmZrZZ0lUa4tWtYzi%2Bz9u1iEaPxc7Dp5liLQob0dFsWpNaL1Qp%2B32E4B6coTK8obDIxGcl%2B6NNe8gKjje7kCy9o5aJucloTAQ%2Bxxw8jDq08FPZUVxeCDZKSo%2Bn2l%2BOymXRkEscHaYizDcupTBBjqkAXXC%2FxlFQDxD98w1%2BFywV%2FPgbebBF86Au1Ohv9b0PpY7idU%2BtMynyLLQ0WFIRNjiDvgyMA1Q1bnz3hoENvQecsQsLo4NVTGvU3NSB0FP45jg4M4Lvqb6BOYw0wOsKXb5DNFmRNN0b4BkUmbhKhlDqgZvC6kerbINLg1xPk7q2SMdx1FRNL9evdaZjJs2RJaJgTiz%2FKwXuIDORvxGRQd8AyY678Vm&X-Amz-Signature=046fdba975d37394f45cef91a23088029d066d6ce88be2683a11fa3860186eb4&X-Amz-SignedHeaders=host&x-id=GetObject)
