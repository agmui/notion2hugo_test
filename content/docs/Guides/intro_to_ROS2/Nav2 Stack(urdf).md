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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRFIFNH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0auXltotSkULliwcnGYnXVs8DjboB3t7VLd%2BNA6pdLAiEA%2F9%2BsXK6tCefJvbaMlM0VyVUHnTzjg%2B74iwLWKp1iZEMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS3Yzv8qrt8miQIgircA0dmulF%2B0Nt%2FQM4ZZ9DrCtV9dY5AS9bgokwqAVM1toX7s82JnWU2wUY%2FkYgkV6A3vT%2B6cOfTkiTdTZdixKkJ8PX1EEiQUhr7BvdXxJlB7D7DH%2BrBh0Yxn0DPLfPiShAMGoUsFMK0Sb%2B5jBwU%2FjXPzrzTO3KhAsqsG5sNHLGL7YvbKvIei%2Bvg3ZZ6oUi1yWhaJfXnxq7easM1dw%2BuIFk7RRMI%2FRnKdTlOcgj0s9MGuz0%2F5wUww2edAKcEyw8oCfZbKSaMpNDK3TqZGqY2Jr%2BxFSBJ68oNZpIyV1xZeHkJonXzBEzdIFnNb3BoYPeTZr3GrJ5iMneVZs2IA9Wt13zF9SRxxDVRGiF3IAgpB3gCX%2FQIuknW%2FZt%2FzGCugXWeTNhAYgnwIXMo22pPcPlxoJVLJ8EA6BypbQJublPiB43Zyz4xv4VzBJmkWiTfiLpbU%2Fw2qVFKTLDRlt9VCIQVUqHg2JyRbgXj40a0zZJi64rr10jzmt2IfG6i5mCyzOgPeQfkKTXwpp4vy%2Bqaascmb5ESWjTRhi8zgZecEikb%2BzxfhsOByHhVQHTb1ooLpPXXNFGLNf3Wlyo8wMRc31yXu4feklsuZ7gBif9cuyZYaCTBSdRhLrHBONTZTz%2FDfh3xMI6T0r4GOqUBx%2BWqOSzshgr8iN%2F0DoQO9eePgHPbPGSMNh2VfKLoGzEd8nS8%2BPjYEL9V6VyqeZ7zVxSv%2FuLpK3g9nP%2BoNGbDummOqkwzHjrYzgBfisI5WdxXMW%2BnhdQjgVHZBfMB8fXCejAPvol8WiRw1Y2QAqc5W9tCcFTolotJzwhZANSx96QZ5fx1qP01Bn8ifin%2BdURUypc5U3yZurVijzajdrGCxCuDTbu4&X-Amz-Signature=47a69266b0acffd42dcad5a0b4fce55662a34e3ce8651c6a51418dcb95adbd41&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRFIFNH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0auXltotSkULliwcnGYnXVs8DjboB3t7VLd%2BNA6pdLAiEA%2F9%2BsXK6tCefJvbaMlM0VyVUHnTzjg%2B74iwLWKp1iZEMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS3Yzv8qrt8miQIgircA0dmulF%2B0Nt%2FQM4ZZ9DrCtV9dY5AS9bgokwqAVM1toX7s82JnWU2wUY%2FkYgkV6A3vT%2B6cOfTkiTdTZdixKkJ8PX1EEiQUhr7BvdXxJlB7D7DH%2BrBh0Yxn0DPLfPiShAMGoUsFMK0Sb%2B5jBwU%2FjXPzrzTO3KhAsqsG5sNHLGL7YvbKvIei%2Bvg3ZZ6oUi1yWhaJfXnxq7easM1dw%2BuIFk7RRMI%2FRnKdTlOcgj0s9MGuz0%2F5wUww2edAKcEyw8oCfZbKSaMpNDK3TqZGqY2Jr%2BxFSBJ68oNZpIyV1xZeHkJonXzBEzdIFnNb3BoYPeTZr3GrJ5iMneVZs2IA9Wt13zF9SRxxDVRGiF3IAgpB3gCX%2FQIuknW%2FZt%2FzGCugXWeTNhAYgnwIXMo22pPcPlxoJVLJ8EA6BypbQJublPiB43Zyz4xv4VzBJmkWiTfiLpbU%2Fw2qVFKTLDRlt9VCIQVUqHg2JyRbgXj40a0zZJi64rr10jzmt2IfG6i5mCyzOgPeQfkKTXwpp4vy%2Bqaascmb5ESWjTRhi8zgZecEikb%2BzxfhsOByHhVQHTb1ooLpPXXNFGLNf3Wlyo8wMRc31yXu4feklsuZ7gBif9cuyZYaCTBSdRhLrHBONTZTz%2FDfh3xMI6T0r4GOqUBx%2BWqOSzshgr8iN%2F0DoQO9eePgHPbPGSMNh2VfKLoGzEd8nS8%2BPjYEL9V6VyqeZ7zVxSv%2FuLpK3g9nP%2BoNGbDummOqkwzHjrYzgBfisI5WdxXMW%2BnhdQjgVHZBfMB8fXCejAPvol8WiRw1Y2QAqc5W9tCcFTolotJzwhZANSx96QZ5fx1qP01Bn8ifin%2BdURUypc5U3yZurVijzajdrGCxCuDTbu4&X-Amz-Signature=4d60d0068c82f949eeb244b027360c82368879330d497cd8b8bb734fa2e34a5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRFIFNH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0auXltotSkULliwcnGYnXVs8DjboB3t7VLd%2BNA6pdLAiEA%2F9%2BsXK6tCefJvbaMlM0VyVUHnTzjg%2B74iwLWKp1iZEMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS3Yzv8qrt8miQIgircA0dmulF%2B0Nt%2FQM4ZZ9DrCtV9dY5AS9bgokwqAVM1toX7s82JnWU2wUY%2FkYgkV6A3vT%2B6cOfTkiTdTZdixKkJ8PX1EEiQUhr7BvdXxJlB7D7DH%2BrBh0Yxn0DPLfPiShAMGoUsFMK0Sb%2B5jBwU%2FjXPzrzTO3KhAsqsG5sNHLGL7YvbKvIei%2Bvg3ZZ6oUi1yWhaJfXnxq7easM1dw%2BuIFk7RRMI%2FRnKdTlOcgj0s9MGuz0%2F5wUww2edAKcEyw8oCfZbKSaMpNDK3TqZGqY2Jr%2BxFSBJ68oNZpIyV1xZeHkJonXzBEzdIFnNb3BoYPeTZr3GrJ5iMneVZs2IA9Wt13zF9SRxxDVRGiF3IAgpB3gCX%2FQIuknW%2FZt%2FzGCugXWeTNhAYgnwIXMo22pPcPlxoJVLJ8EA6BypbQJublPiB43Zyz4xv4VzBJmkWiTfiLpbU%2Fw2qVFKTLDRlt9VCIQVUqHg2JyRbgXj40a0zZJi64rr10jzmt2IfG6i5mCyzOgPeQfkKTXwpp4vy%2Bqaascmb5ESWjTRhi8zgZecEikb%2BzxfhsOByHhVQHTb1ooLpPXXNFGLNf3Wlyo8wMRc31yXu4feklsuZ7gBif9cuyZYaCTBSdRhLrHBONTZTz%2FDfh3xMI6T0r4GOqUBx%2BWqOSzshgr8iN%2F0DoQO9eePgHPbPGSMNh2VfKLoGzEd8nS8%2BPjYEL9V6VyqeZ7zVxSv%2FuLpK3g9nP%2BoNGbDummOqkwzHjrYzgBfisI5WdxXMW%2BnhdQjgVHZBfMB8fXCejAPvol8WiRw1Y2QAqc5W9tCcFTolotJzwhZANSx96QZ5fx1qP01Bn8ifin%2BdURUypc5U3yZurVijzajdrGCxCuDTbu4&X-Amz-Signature=514fb0e39813cd33da8de1cca8fae7cfd102631f1d41caadc979acf0c6eab31a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRFIFNH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0auXltotSkULliwcnGYnXVs8DjboB3t7VLd%2BNA6pdLAiEA%2F9%2BsXK6tCefJvbaMlM0VyVUHnTzjg%2B74iwLWKp1iZEMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS3Yzv8qrt8miQIgircA0dmulF%2B0Nt%2FQM4ZZ9DrCtV9dY5AS9bgokwqAVM1toX7s82JnWU2wUY%2FkYgkV6A3vT%2B6cOfTkiTdTZdixKkJ8PX1EEiQUhr7BvdXxJlB7D7DH%2BrBh0Yxn0DPLfPiShAMGoUsFMK0Sb%2B5jBwU%2FjXPzrzTO3KhAsqsG5sNHLGL7YvbKvIei%2Bvg3ZZ6oUi1yWhaJfXnxq7easM1dw%2BuIFk7RRMI%2FRnKdTlOcgj0s9MGuz0%2F5wUww2edAKcEyw8oCfZbKSaMpNDK3TqZGqY2Jr%2BxFSBJ68oNZpIyV1xZeHkJonXzBEzdIFnNb3BoYPeTZr3GrJ5iMneVZs2IA9Wt13zF9SRxxDVRGiF3IAgpB3gCX%2FQIuknW%2FZt%2FzGCugXWeTNhAYgnwIXMo22pPcPlxoJVLJ8EA6BypbQJublPiB43Zyz4xv4VzBJmkWiTfiLpbU%2Fw2qVFKTLDRlt9VCIQVUqHg2JyRbgXj40a0zZJi64rr10jzmt2IfG6i5mCyzOgPeQfkKTXwpp4vy%2Bqaascmb5ESWjTRhi8zgZecEikb%2BzxfhsOByHhVQHTb1ooLpPXXNFGLNf3Wlyo8wMRc31yXu4feklsuZ7gBif9cuyZYaCTBSdRhLrHBONTZTz%2FDfh3xMI6T0r4GOqUBx%2BWqOSzshgr8iN%2F0DoQO9eePgHPbPGSMNh2VfKLoGzEd8nS8%2BPjYEL9V6VyqeZ7zVxSv%2FuLpK3g9nP%2BoNGbDummOqkwzHjrYzgBfisI5WdxXMW%2BnhdQjgVHZBfMB8fXCejAPvol8WiRw1Y2QAqc5W9tCcFTolotJzwhZANSx96QZ5fx1qP01Bn8ifin%2BdURUypc5U3yZurVijzajdrGCxCuDTbu4&X-Amz-Signature=1984a64f0384129f22b465607afa97b6f15c841eafd927c27eb77a19cd360c24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRFIFNH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0auXltotSkULliwcnGYnXVs8DjboB3t7VLd%2BNA6pdLAiEA%2F9%2BsXK6tCefJvbaMlM0VyVUHnTzjg%2B74iwLWKp1iZEMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS3Yzv8qrt8miQIgircA0dmulF%2B0Nt%2FQM4ZZ9DrCtV9dY5AS9bgokwqAVM1toX7s82JnWU2wUY%2FkYgkV6A3vT%2B6cOfTkiTdTZdixKkJ8PX1EEiQUhr7BvdXxJlB7D7DH%2BrBh0Yxn0DPLfPiShAMGoUsFMK0Sb%2B5jBwU%2FjXPzrzTO3KhAsqsG5sNHLGL7YvbKvIei%2Bvg3ZZ6oUi1yWhaJfXnxq7easM1dw%2BuIFk7RRMI%2FRnKdTlOcgj0s9MGuz0%2F5wUww2edAKcEyw8oCfZbKSaMpNDK3TqZGqY2Jr%2BxFSBJ68oNZpIyV1xZeHkJonXzBEzdIFnNb3BoYPeTZr3GrJ5iMneVZs2IA9Wt13zF9SRxxDVRGiF3IAgpB3gCX%2FQIuknW%2FZt%2FzGCugXWeTNhAYgnwIXMo22pPcPlxoJVLJ8EA6BypbQJublPiB43Zyz4xv4VzBJmkWiTfiLpbU%2Fw2qVFKTLDRlt9VCIQVUqHg2JyRbgXj40a0zZJi64rr10jzmt2IfG6i5mCyzOgPeQfkKTXwpp4vy%2Bqaascmb5ESWjTRhi8zgZecEikb%2BzxfhsOByHhVQHTb1ooLpPXXNFGLNf3Wlyo8wMRc31yXu4feklsuZ7gBif9cuyZYaCTBSdRhLrHBONTZTz%2FDfh3xMI6T0r4GOqUBx%2BWqOSzshgr8iN%2F0DoQO9eePgHPbPGSMNh2VfKLoGzEd8nS8%2BPjYEL9V6VyqeZ7zVxSv%2FuLpK3g9nP%2BoNGbDummOqkwzHjrYzgBfisI5WdxXMW%2BnhdQjgVHZBfMB8fXCejAPvol8WiRw1Y2QAqc5W9tCcFTolotJzwhZANSx96QZ5fx1qP01Bn8ifin%2BdURUypc5U3yZurVijzajdrGCxCuDTbu4&X-Amz-Signature=270708aaf7b3ed01678b3e66fe5bbfa59d02c0de63783d71fad6277fda78c3fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRFIFNH%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0auXltotSkULliwcnGYnXVs8DjboB3t7VLd%2BNA6pdLAiEA%2F9%2BsXK6tCefJvbaMlM0VyVUHnTzjg%2B74iwLWKp1iZEMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHS3Yzv8qrt8miQIgircA0dmulF%2B0Nt%2FQM4ZZ9DrCtV9dY5AS9bgokwqAVM1toX7s82JnWU2wUY%2FkYgkV6A3vT%2B6cOfTkiTdTZdixKkJ8PX1EEiQUhr7BvdXxJlB7D7DH%2BrBh0Yxn0DPLfPiShAMGoUsFMK0Sb%2B5jBwU%2FjXPzrzTO3KhAsqsG5sNHLGL7YvbKvIei%2Bvg3ZZ6oUi1yWhaJfXnxq7easM1dw%2BuIFk7RRMI%2FRnKdTlOcgj0s9MGuz0%2F5wUww2edAKcEyw8oCfZbKSaMpNDK3TqZGqY2Jr%2BxFSBJ68oNZpIyV1xZeHkJonXzBEzdIFnNb3BoYPeTZr3GrJ5iMneVZs2IA9Wt13zF9SRxxDVRGiF3IAgpB3gCX%2FQIuknW%2FZt%2FzGCugXWeTNhAYgnwIXMo22pPcPlxoJVLJ8EA6BypbQJublPiB43Zyz4xv4VzBJmkWiTfiLpbU%2Fw2qVFKTLDRlt9VCIQVUqHg2JyRbgXj40a0zZJi64rr10jzmt2IfG6i5mCyzOgPeQfkKTXwpp4vy%2Bqaascmb5ESWjTRhi8zgZecEikb%2BzxfhsOByHhVQHTb1ooLpPXXNFGLNf3Wlyo8wMRc31yXu4feklsuZ7gBif9cuyZYaCTBSdRhLrHBONTZTz%2FDfh3xMI6T0r4GOqUBx%2BWqOSzshgr8iN%2F0DoQO9eePgHPbPGSMNh2VfKLoGzEd8nS8%2BPjYEL9V6VyqeZ7zVxSv%2FuLpK3g9nP%2BoNGbDummOqkwzHjrYzgBfisI5WdxXMW%2BnhdQjgVHZBfMB8fXCejAPvol8WiRw1Y2QAqc5W9tCcFTolotJzwhZANSx96QZ5fx1qP01Bn8ifin%2BdURUypc5U3yZurVijzajdrGCxCuDTbu4&X-Amz-Signature=d1e471179c521833e58c34d186ac253b559d58412fd0e91f3b32268bdcd12ee1&X-Amz-SignedHeaders=host&x-id=GetObject)
