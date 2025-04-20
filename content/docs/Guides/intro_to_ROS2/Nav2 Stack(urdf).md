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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG35ODT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFZ2%2FbIAvNSewpDfdlZwsjuUXmxx%2FnpUXkjObtYz8PWgIgEIzTtSTB8Sd2sWMz0QmJhF9Kd2dOTMtwy21mQ9QUUqgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoi4%2FjjFZ8dFeYPDCrcA2%2FOw92S8N8mucuuoEc4ALs8qpvgfkbtgW5EprSan0egvPo3bqJ8zUYo3FtGSP6O9jHu0a8kSAIBzgMyi85cd6OKy0sijMZdmmvX4DyvE4TKX9xMq4AeZhlT4qp4QU7D1lqxBjm%2FtS2h83xYVBSLvEuA2IkUHYADglNUZiLBxuKXxktL6Rtda9Q9lNOlB9BIlD4nJcs9HkQ%2FgSOufkMuRaGnVsYfJzh%2BgJ%2BNrG6%2BIxLdXMbKE57%2BlxxES4dZXYLILn9M43uhLAd5qNnBhiW8Xv1Iju9%2Bfjc1HJJJWaBMwk7p8CenqZcOHOA8qwEyIg8gI04wpK853eT8J5C7rT1KxhyYaRF1dSYVmRhuGjOzGTGNh1C5J6atO1oEflkESaTMZgwcEXOevDBPO19fYTPxaUnOLfYUAkO2V0SlbjXoGswnNZ1wRM4afgu24R655fle69RaZqgqZyRBAkx1tE3Jbhmx9AYIHi%2BDXoV3ePFAzXT%2FZ3LLPntONEygUOxt3qztklWqpdXabF9BJB7fbQ3jVC%2Ff6S8FqeEqgYalIVGLjJOrRbI9RjDo7ibsB6d0tzR%2F1KGPLpVDwFkYU7Ohy1lgsg6WoxIvUpLTav%2Fef6W3xl40J%2FOXNP7cVmHodmaxMNajksAGOqUBr%2BOwJt1isuDn%2FAFfdKRIxkabAWYtUzsMEHENtXnUNttQ81ymMDGc9o4OFOvtgLIjdKzFWP%2BE7t%2BHTNxSbovbU8qCUz4%2FLcQS3ebmVmfKI6UMZ6z5Tj9H9XVZ7W%2BDwmv%2FioXntgTErGeu81RPe1%2FbA8VR9B0VIjZlet%2F45RS2rfCBHCkcB96AFUunB6dUxGE1owmA%2B5OTRH4zxjeSIvVuyrWuPkVi&X-Amz-Signature=6a554da1a0703276653949e4dfbde83cd2b2042b11a34e989b312867ae2d34bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG35ODT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFZ2%2FbIAvNSewpDfdlZwsjuUXmxx%2FnpUXkjObtYz8PWgIgEIzTtSTB8Sd2sWMz0QmJhF9Kd2dOTMtwy21mQ9QUUqgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoi4%2FjjFZ8dFeYPDCrcA2%2FOw92S8N8mucuuoEc4ALs8qpvgfkbtgW5EprSan0egvPo3bqJ8zUYo3FtGSP6O9jHu0a8kSAIBzgMyi85cd6OKy0sijMZdmmvX4DyvE4TKX9xMq4AeZhlT4qp4QU7D1lqxBjm%2FtS2h83xYVBSLvEuA2IkUHYADglNUZiLBxuKXxktL6Rtda9Q9lNOlB9BIlD4nJcs9HkQ%2FgSOufkMuRaGnVsYfJzh%2BgJ%2BNrG6%2BIxLdXMbKE57%2BlxxES4dZXYLILn9M43uhLAd5qNnBhiW8Xv1Iju9%2Bfjc1HJJJWaBMwk7p8CenqZcOHOA8qwEyIg8gI04wpK853eT8J5C7rT1KxhyYaRF1dSYVmRhuGjOzGTGNh1C5J6atO1oEflkESaTMZgwcEXOevDBPO19fYTPxaUnOLfYUAkO2V0SlbjXoGswnNZ1wRM4afgu24R655fle69RaZqgqZyRBAkx1tE3Jbhmx9AYIHi%2BDXoV3ePFAzXT%2FZ3LLPntONEygUOxt3qztklWqpdXabF9BJB7fbQ3jVC%2Ff6S8FqeEqgYalIVGLjJOrRbI9RjDo7ibsB6d0tzR%2F1KGPLpVDwFkYU7Ohy1lgsg6WoxIvUpLTav%2Fef6W3xl40J%2FOXNP7cVmHodmaxMNajksAGOqUBr%2BOwJt1isuDn%2FAFfdKRIxkabAWYtUzsMEHENtXnUNttQ81ymMDGc9o4OFOvtgLIjdKzFWP%2BE7t%2BHTNxSbovbU8qCUz4%2FLcQS3ebmVmfKI6UMZ6z5Tj9H9XVZ7W%2BDwmv%2FioXntgTErGeu81RPe1%2FbA8VR9B0VIjZlet%2F45RS2rfCBHCkcB96AFUunB6dUxGE1owmA%2B5OTRH4zxjeSIvVuyrWuPkVi&X-Amz-Signature=94120168e2d824482dcdf7a105d65b6f296a349ec8c659d191e611d3ca86fecb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG35ODT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFZ2%2FbIAvNSewpDfdlZwsjuUXmxx%2FnpUXkjObtYz8PWgIgEIzTtSTB8Sd2sWMz0QmJhF9Kd2dOTMtwy21mQ9QUUqgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoi4%2FjjFZ8dFeYPDCrcA2%2FOw92S8N8mucuuoEc4ALs8qpvgfkbtgW5EprSan0egvPo3bqJ8zUYo3FtGSP6O9jHu0a8kSAIBzgMyi85cd6OKy0sijMZdmmvX4DyvE4TKX9xMq4AeZhlT4qp4QU7D1lqxBjm%2FtS2h83xYVBSLvEuA2IkUHYADglNUZiLBxuKXxktL6Rtda9Q9lNOlB9BIlD4nJcs9HkQ%2FgSOufkMuRaGnVsYfJzh%2BgJ%2BNrG6%2BIxLdXMbKE57%2BlxxES4dZXYLILn9M43uhLAd5qNnBhiW8Xv1Iju9%2Bfjc1HJJJWaBMwk7p8CenqZcOHOA8qwEyIg8gI04wpK853eT8J5C7rT1KxhyYaRF1dSYVmRhuGjOzGTGNh1C5J6atO1oEflkESaTMZgwcEXOevDBPO19fYTPxaUnOLfYUAkO2V0SlbjXoGswnNZ1wRM4afgu24R655fle69RaZqgqZyRBAkx1tE3Jbhmx9AYIHi%2BDXoV3ePFAzXT%2FZ3LLPntONEygUOxt3qztklWqpdXabF9BJB7fbQ3jVC%2Ff6S8FqeEqgYalIVGLjJOrRbI9RjDo7ibsB6d0tzR%2F1KGPLpVDwFkYU7Ohy1lgsg6WoxIvUpLTav%2Fef6W3xl40J%2FOXNP7cVmHodmaxMNajksAGOqUBr%2BOwJt1isuDn%2FAFfdKRIxkabAWYtUzsMEHENtXnUNttQ81ymMDGc9o4OFOvtgLIjdKzFWP%2BE7t%2BHTNxSbovbU8qCUz4%2FLcQS3ebmVmfKI6UMZ6z5Tj9H9XVZ7W%2BDwmv%2FioXntgTErGeu81RPe1%2FbA8VR9B0VIjZlet%2F45RS2rfCBHCkcB96AFUunB6dUxGE1owmA%2B5OTRH4zxjeSIvVuyrWuPkVi&X-Amz-Signature=f9851ca3e73de0157ed8ed38dacc19b2e2bbbcebe6c431f397afe136ec32909c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG35ODT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFZ2%2FbIAvNSewpDfdlZwsjuUXmxx%2FnpUXkjObtYz8PWgIgEIzTtSTB8Sd2sWMz0QmJhF9Kd2dOTMtwy21mQ9QUUqgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoi4%2FjjFZ8dFeYPDCrcA2%2FOw92S8N8mucuuoEc4ALs8qpvgfkbtgW5EprSan0egvPo3bqJ8zUYo3FtGSP6O9jHu0a8kSAIBzgMyi85cd6OKy0sijMZdmmvX4DyvE4TKX9xMq4AeZhlT4qp4QU7D1lqxBjm%2FtS2h83xYVBSLvEuA2IkUHYADglNUZiLBxuKXxktL6Rtda9Q9lNOlB9BIlD4nJcs9HkQ%2FgSOufkMuRaGnVsYfJzh%2BgJ%2BNrG6%2BIxLdXMbKE57%2BlxxES4dZXYLILn9M43uhLAd5qNnBhiW8Xv1Iju9%2Bfjc1HJJJWaBMwk7p8CenqZcOHOA8qwEyIg8gI04wpK853eT8J5C7rT1KxhyYaRF1dSYVmRhuGjOzGTGNh1C5J6atO1oEflkESaTMZgwcEXOevDBPO19fYTPxaUnOLfYUAkO2V0SlbjXoGswnNZ1wRM4afgu24R655fle69RaZqgqZyRBAkx1tE3Jbhmx9AYIHi%2BDXoV3ePFAzXT%2FZ3LLPntONEygUOxt3qztklWqpdXabF9BJB7fbQ3jVC%2Ff6S8FqeEqgYalIVGLjJOrRbI9RjDo7ibsB6d0tzR%2F1KGPLpVDwFkYU7Ohy1lgsg6WoxIvUpLTav%2Fef6W3xl40J%2FOXNP7cVmHodmaxMNajksAGOqUBr%2BOwJt1isuDn%2FAFfdKRIxkabAWYtUzsMEHENtXnUNttQ81ymMDGc9o4OFOvtgLIjdKzFWP%2BE7t%2BHTNxSbovbU8qCUz4%2FLcQS3ebmVmfKI6UMZ6z5Tj9H9XVZ7W%2BDwmv%2FioXntgTErGeu81RPe1%2FbA8VR9B0VIjZlet%2F45RS2rfCBHCkcB96AFUunB6dUxGE1owmA%2B5OTRH4zxjeSIvVuyrWuPkVi&X-Amz-Signature=2eb70ec5666d78ff64b075abaca170e372591ab568d6edcfa59f293d56b9a4c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG35ODT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFZ2%2FbIAvNSewpDfdlZwsjuUXmxx%2FnpUXkjObtYz8PWgIgEIzTtSTB8Sd2sWMz0QmJhF9Kd2dOTMtwy21mQ9QUUqgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoi4%2FjjFZ8dFeYPDCrcA2%2FOw92S8N8mucuuoEc4ALs8qpvgfkbtgW5EprSan0egvPo3bqJ8zUYo3FtGSP6O9jHu0a8kSAIBzgMyi85cd6OKy0sijMZdmmvX4DyvE4TKX9xMq4AeZhlT4qp4QU7D1lqxBjm%2FtS2h83xYVBSLvEuA2IkUHYADglNUZiLBxuKXxktL6Rtda9Q9lNOlB9BIlD4nJcs9HkQ%2FgSOufkMuRaGnVsYfJzh%2BgJ%2BNrG6%2BIxLdXMbKE57%2BlxxES4dZXYLILn9M43uhLAd5qNnBhiW8Xv1Iju9%2Bfjc1HJJJWaBMwk7p8CenqZcOHOA8qwEyIg8gI04wpK853eT8J5C7rT1KxhyYaRF1dSYVmRhuGjOzGTGNh1C5J6atO1oEflkESaTMZgwcEXOevDBPO19fYTPxaUnOLfYUAkO2V0SlbjXoGswnNZ1wRM4afgu24R655fle69RaZqgqZyRBAkx1tE3Jbhmx9AYIHi%2BDXoV3ePFAzXT%2FZ3LLPntONEygUOxt3qztklWqpdXabF9BJB7fbQ3jVC%2Ff6S8FqeEqgYalIVGLjJOrRbI9RjDo7ibsB6d0tzR%2F1KGPLpVDwFkYU7Ohy1lgsg6WoxIvUpLTav%2Fef6W3xl40J%2FOXNP7cVmHodmaxMNajksAGOqUBr%2BOwJt1isuDn%2FAFfdKRIxkabAWYtUzsMEHENtXnUNttQ81ymMDGc9o4OFOvtgLIjdKzFWP%2BE7t%2BHTNxSbovbU8qCUz4%2FLcQS3ebmVmfKI6UMZ6z5Tj9H9XVZ7W%2BDwmv%2FioXntgTErGeu81RPe1%2FbA8VR9B0VIjZlet%2F45RS2rfCBHCkcB96AFUunB6dUxGE1owmA%2B5OTRH4zxjeSIvVuyrWuPkVi&X-Amz-Signature=82c55bdf1154d1fac48aaf151d0e15fc36739db5e9c476b7d3fbf24e2ba4e661&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDG35ODT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDFZ2%2FbIAvNSewpDfdlZwsjuUXmxx%2FnpUXkjObtYz8PWgIgEIzTtSTB8Sd2sWMz0QmJhF9Kd2dOTMtwy21mQ9QUUqgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDoi4%2FjjFZ8dFeYPDCrcA2%2FOw92S8N8mucuuoEc4ALs8qpvgfkbtgW5EprSan0egvPo3bqJ8zUYo3FtGSP6O9jHu0a8kSAIBzgMyi85cd6OKy0sijMZdmmvX4DyvE4TKX9xMq4AeZhlT4qp4QU7D1lqxBjm%2FtS2h83xYVBSLvEuA2IkUHYADglNUZiLBxuKXxktL6Rtda9Q9lNOlB9BIlD4nJcs9HkQ%2FgSOufkMuRaGnVsYfJzh%2BgJ%2BNrG6%2BIxLdXMbKE57%2BlxxES4dZXYLILn9M43uhLAd5qNnBhiW8Xv1Iju9%2Bfjc1HJJJWaBMwk7p8CenqZcOHOA8qwEyIg8gI04wpK853eT8J5C7rT1KxhyYaRF1dSYVmRhuGjOzGTGNh1C5J6atO1oEflkESaTMZgwcEXOevDBPO19fYTPxaUnOLfYUAkO2V0SlbjXoGswnNZ1wRM4afgu24R655fle69RaZqgqZyRBAkx1tE3Jbhmx9AYIHi%2BDXoV3ePFAzXT%2FZ3LLPntONEygUOxt3qztklWqpdXabF9BJB7fbQ3jVC%2Ff6S8FqeEqgYalIVGLjJOrRbI9RjDo7ibsB6d0tzR%2F1KGPLpVDwFkYU7Ohy1lgsg6WoxIvUpLTav%2Fef6W3xl40J%2FOXNP7cVmHodmaxMNajksAGOqUBr%2BOwJt1isuDn%2FAFfdKRIxkabAWYtUzsMEHENtXnUNttQ81ymMDGc9o4OFOvtgLIjdKzFWP%2BE7t%2BHTNxSbovbU8qCUz4%2FLcQS3ebmVmfKI6UMZ6z5Tj9H9XVZ7W%2BDwmv%2FioXntgTErGeu81RPe1%2FbA8VR9B0VIjZlet%2F45RS2rfCBHCkcB96AFUunB6dUxGE1owmA%2B5OTRH4zxjeSIvVuyrWuPkVi&X-Amz-Signature=6b68983c4ea35c10349bf97255e402b2e3f6a9c3b9292655ffd70d7f5dcb95bb&X-Amz-SignedHeaders=host&x-id=GetObject)
