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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MTYUZU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCpZ7jf51eAIzRUQQcKvjfjzHjCSkWBk1MvDHJpFqxXFgIhAJyIkQd8%2BNJpmDVOxvUaZJVABXh%2FavQrxXshG9nqpgYnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW70M05i79orn4lgsq3AOI7kIB%2F%2BbQfiNhH4v5o5VIZwY8BPHHmK0g%2Bu%2BPPh%2B1uXSD%2Fd3BY5vnP%2F3nRjByuBlwLLAC4%2F3U3TRO9S%2FZ2uTXi8DqvUePK8rLuv8oVxAmzlt%2BWchAbaL%2F0F6Rsz7kxRUfyDdOP9wrfXHEUQ19cQnHDCDPOGuxLnD084gJ5C4xUbLHz5UbZVtt0%2B%2B1s%2F8G%2BBK445lh5ZOnDS6O7nxSVKNcQne528e1rkukvFSplGFfXx5xnhfLCmCc7Xz0jJwYVuYQrxwWMWCXWeFtw%2BTFKjHXdtjFIeOQEjfoRwOO7XKNkpmYgB1%2BkjFlgKibPapSSRNqXONqriMJeVOnnXUYGdqQOlgZPR%2FkOdEnEZCYGCiABlzdjIApYIsOaS3DU4vDpARzr9eGJ1lKHFcSTiObO3a6JmcKEiJ0PQdJ0f3DzOBFzaYKiCTBpn7hASs%2FhC6Z1ZogIuGLuDFZrl3jTa24SnUF72YiD9iCLBiNE6ReOvm6g3%2Bjn00Z8cj8a2Rlan1duybt58mVVYGlrEUL2MorOubMoWbdqqKEIUKxk2IV053PIt10ksWn9g4StZt2vi0IohogC%2F1RmtCqAXircwomP2607eOFiMdJFL0Ibmbwd1ZHS1uAKQmy5CnjHPf9FjCCyOHCBjqkAaBIlZefKfbacV%2BwfYxsYHSPLn14pJYSG633vMa3Jy4%2BKv34i5uMVkY4vLT8jggsRKLWioKjpK72Y0ONvjS8tXifGC66qe8YtAk%2FvHFpeHE1QugZhfiUAcB4Giusd8t%2BOyHjcqCi1kIPBvtHZeTN%2Bu0PCUNWvMuemCLrJUY5D639ukvALkUoQVWmxwohpCA2rxrD9cxNdsEnA%2BS25n95tFRKOI0G&X-Amz-Signature=96fcf4df7d29ea7d30fb4f332461d287ffee9e5410678a1114af895bee603c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MTYUZU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCpZ7jf51eAIzRUQQcKvjfjzHjCSkWBk1MvDHJpFqxXFgIhAJyIkQd8%2BNJpmDVOxvUaZJVABXh%2FavQrxXshG9nqpgYnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW70M05i79orn4lgsq3AOI7kIB%2F%2BbQfiNhH4v5o5VIZwY8BPHHmK0g%2Bu%2BPPh%2B1uXSD%2Fd3BY5vnP%2F3nRjByuBlwLLAC4%2F3U3TRO9S%2FZ2uTXi8DqvUePK8rLuv8oVxAmzlt%2BWchAbaL%2F0F6Rsz7kxRUfyDdOP9wrfXHEUQ19cQnHDCDPOGuxLnD084gJ5C4xUbLHz5UbZVtt0%2B%2B1s%2F8G%2BBK445lh5ZOnDS6O7nxSVKNcQne528e1rkukvFSplGFfXx5xnhfLCmCc7Xz0jJwYVuYQrxwWMWCXWeFtw%2BTFKjHXdtjFIeOQEjfoRwOO7XKNkpmYgB1%2BkjFlgKibPapSSRNqXONqriMJeVOnnXUYGdqQOlgZPR%2FkOdEnEZCYGCiABlzdjIApYIsOaS3DU4vDpARzr9eGJ1lKHFcSTiObO3a6JmcKEiJ0PQdJ0f3DzOBFzaYKiCTBpn7hASs%2FhC6Z1ZogIuGLuDFZrl3jTa24SnUF72YiD9iCLBiNE6ReOvm6g3%2Bjn00Z8cj8a2Rlan1duybt58mVVYGlrEUL2MorOubMoWbdqqKEIUKxk2IV053PIt10ksWn9g4StZt2vi0IohogC%2F1RmtCqAXircwomP2607eOFiMdJFL0Ibmbwd1ZHS1uAKQmy5CnjHPf9FjCCyOHCBjqkAaBIlZefKfbacV%2BwfYxsYHSPLn14pJYSG633vMa3Jy4%2BKv34i5uMVkY4vLT8jggsRKLWioKjpK72Y0ONvjS8tXifGC66qe8YtAk%2FvHFpeHE1QugZhfiUAcB4Giusd8t%2BOyHjcqCi1kIPBvtHZeTN%2Bu0PCUNWvMuemCLrJUY5D639ukvALkUoQVWmxwohpCA2rxrD9cxNdsEnA%2BS25n95tFRKOI0G&X-Amz-Signature=056fa0e03f0266193315ed7ab53ad7719549c03fb51ae91d06468512534a960c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MTYUZU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCpZ7jf51eAIzRUQQcKvjfjzHjCSkWBk1MvDHJpFqxXFgIhAJyIkQd8%2BNJpmDVOxvUaZJVABXh%2FavQrxXshG9nqpgYnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW70M05i79orn4lgsq3AOI7kIB%2F%2BbQfiNhH4v5o5VIZwY8BPHHmK0g%2Bu%2BPPh%2B1uXSD%2Fd3BY5vnP%2F3nRjByuBlwLLAC4%2F3U3TRO9S%2FZ2uTXi8DqvUePK8rLuv8oVxAmzlt%2BWchAbaL%2F0F6Rsz7kxRUfyDdOP9wrfXHEUQ19cQnHDCDPOGuxLnD084gJ5C4xUbLHz5UbZVtt0%2B%2B1s%2F8G%2BBK445lh5ZOnDS6O7nxSVKNcQne528e1rkukvFSplGFfXx5xnhfLCmCc7Xz0jJwYVuYQrxwWMWCXWeFtw%2BTFKjHXdtjFIeOQEjfoRwOO7XKNkpmYgB1%2BkjFlgKibPapSSRNqXONqriMJeVOnnXUYGdqQOlgZPR%2FkOdEnEZCYGCiABlzdjIApYIsOaS3DU4vDpARzr9eGJ1lKHFcSTiObO3a6JmcKEiJ0PQdJ0f3DzOBFzaYKiCTBpn7hASs%2FhC6Z1ZogIuGLuDFZrl3jTa24SnUF72YiD9iCLBiNE6ReOvm6g3%2Bjn00Z8cj8a2Rlan1duybt58mVVYGlrEUL2MorOubMoWbdqqKEIUKxk2IV053PIt10ksWn9g4StZt2vi0IohogC%2F1RmtCqAXircwomP2607eOFiMdJFL0Ibmbwd1ZHS1uAKQmy5CnjHPf9FjCCyOHCBjqkAaBIlZefKfbacV%2BwfYxsYHSPLn14pJYSG633vMa3Jy4%2BKv34i5uMVkY4vLT8jggsRKLWioKjpK72Y0ONvjS8tXifGC66qe8YtAk%2FvHFpeHE1QugZhfiUAcB4Giusd8t%2BOyHjcqCi1kIPBvtHZeTN%2Bu0PCUNWvMuemCLrJUY5D639ukvALkUoQVWmxwohpCA2rxrD9cxNdsEnA%2BS25n95tFRKOI0G&X-Amz-Signature=4d8f7e8711a41eec644456fe3e3f5d0c54aabf6efd0e4fd25e48c8927080b2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MTYUZU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCpZ7jf51eAIzRUQQcKvjfjzHjCSkWBk1MvDHJpFqxXFgIhAJyIkQd8%2BNJpmDVOxvUaZJVABXh%2FavQrxXshG9nqpgYnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW70M05i79orn4lgsq3AOI7kIB%2F%2BbQfiNhH4v5o5VIZwY8BPHHmK0g%2Bu%2BPPh%2B1uXSD%2Fd3BY5vnP%2F3nRjByuBlwLLAC4%2F3U3TRO9S%2FZ2uTXi8DqvUePK8rLuv8oVxAmzlt%2BWchAbaL%2F0F6Rsz7kxRUfyDdOP9wrfXHEUQ19cQnHDCDPOGuxLnD084gJ5C4xUbLHz5UbZVtt0%2B%2B1s%2F8G%2BBK445lh5ZOnDS6O7nxSVKNcQne528e1rkukvFSplGFfXx5xnhfLCmCc7Xz0jJwYVuYQrxwWMWCXWeFtw%2BTFKjHXdtjFIeOQEjfoRwOO7XKNkpmYgB1%2BkjFlgKibPapSSRNqXONqriMJeVOnnXUYGdqQOlgZPR%2FkOdEnEZCYGCiABlzdjIApYIsOaS3DU4vDpARzr9eGJ1lKHFcSTiObO3a6JmcKEiJ0PQdJ0f3DzOBFzaYKiCTBpn7hASs%2FhC6Z1ZogIuGLuDFZrl3jTa24SnUF72YiD9iCLBiNE6ReOvm6g3%2Bjn00Z8cj8a2Rlan1duybt58mVVYGlrEUL2MorOubMoWbdqqKEIUKxk2IV053PIt10ksWn9g4StZt2vi0IohogC%2F1RmtCqAXircwomP2607eOFiMdJFL0Ibmbwd1ZHS1uAKQmy5CnjHPf9FjCCyOHCBjqkAaBIlZefKfbacV%2BwfYxsYHSPLn14pJYSG633vMa3Jy4%2BKv34i5uMVkY4vLT8jggsRKLWioKjpK72Y0ONvjS8tXifGC66qe8YtAk%2FvHFpeHE1QugZhfiUAcB4Giusd8t%2BOyHjcqCi1kIPBvtHZeTN%2Bu0PCUNWvMuemCLrJUY5D639ukvALkUoQVWmxwohpCA2rxrD9cxNdsEnA%2BS25n95tFRKOI0G&X-Amz-Signature=9e99453b68c5ff78b7649a6a7e83f2d413b40d3767c42d713141789658be9ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MTYUZU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCpZ7jf51eAIzRUQQcKvjfjzHjCSkWBk1MvDHJpFqxXFgIhAJyIkQd8%2BNJpmDVOxvUaZJVABXh%2FavQrxXshG9nqpgYnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW70M05i79orn4lgsq3AOI7kIB%2F%2BbQfiNhH4v5o5VIZwY8BPHHmK0g%2Bu%2BPPh%2B1uXSD%2Fd3BY5vnP%2F3nRjByuBlwLLAC4%2F3U3TRO9S%2FZ2uTXi8DqvUePK8rLuv8oVxAmzlt%2BWchAbaL%2F0F6Rsz7kxRUfyDdOP9wrfXHEUQ19cQnHDCDPOGuxLnD084gJ5C4xUbLHz5UbZVtt0%2B%2B1s%2F8G%2BBK445lh5ZOnDS6O7nxSVKNcQne528e1rkukvFSplGFfXx5xnhfLCmCc7Xz0jJwYVuYQrxwWMWCXWeFtw%2BTFKjHXdtjFIeOQEjfoRwOO7XKNkpmYgB1%2BkjFlgKibPapSSRNqXONqriMJeVOnnXUYGdqQOlgZPR%2FkOdEnEZCYGCiABlzdjIApYIsOaS3DU4vDpARzr9eGJ1lKHFcSTiObO3a6JmcKEiJ0PQdJ0f3DzOBFzaYKiCTBpn7hASs%2FhC6Z1ZogIuGLuDFZrl3jTa24SnUF72YiD9iCLBiNE6ReOvm6g3%2Bjn00Z8cj8a2Rlan1duybt58mVVYGlrEUL2MorOubMoWbdqqKEIUKxk2IV053PIt10ksWn9g4StZt2vi0IohogC%2F1RmtCqAXircwomP2607eOFiMdJFL0Ibmbwd1ZHS1uAKQmy5CnjHPf9FjCCyOHCBjqkAaBIlZefKfbacV%2BwfYxsYHSPLn14pJYSG633vMa3Jy4%2BKv34i5uMVkY4vLT8jggsRKLWioKjpK72Y0ONvjS8tXifGC66qe8YtAk%2FvHFpeHE1QugZhfiUAcB4Giusd8t%2BOyHjcqCi1kIPBvtHZeTN%2Bu0PCUNWvMuemCLrJUY5D639ukvALkUoQVWmxwohpCA2rxrD9cxNdsEnA%2BS25n95tFRKOI0G&X-Amz-Signature=1f670de41ff8ba0d0bde27e4c357c158cfa6483e5f431ef9a69553ef955e40ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MTYUZU%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCpZ7jf51eAIzRUQQcKvjfjzHjCSkWBk1MvDHJpFqxXFgIhAJyIkQd8%2BNJpmDVOxvUaZJVABXh%2FavQrxXshG9nqpgYnKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW70M05i79orn4lgsq3AOI7kIB%2F%2BbQfiNhH4v5o5VIZwY8BPHHmK0g%2Bu%2BPPh%2B1uXSD%2Fd3BY5vnP%2F3nRjByuBlwLLAC4%2F3U3TRO9S%2FZ2uTXi8DqvUePK8rLuv8oVxAmzlt%2BWchAbaL%2F0F6Rsz7kxRUfyDdOP9wrfXHEUQ19cQnHDCDPOGuxLnD084gJ5C4xUbLHz5UbZVtt0%2B%2B1s%2F8G%2BBK445lh5ZOnDS6O7nxSVKNcQne528e1rkukvFSplGFfXx5xnhfLCmCc7Xz0jJwYVuYQrxwWMWCXWeFtw%2BTFKjHXdtjFIeOQEjfoRwOO7XKNkpmYgB1%2BkjFlgKibPapSSRNqXONqriMJeVOnnXUYGdqQOlgZPR%2FkOdEnEZCYGCiABlzdjIApYIsOaS3DU4vDpARzr9eGJ1lKHFcSTiObO3a6JmcKEiJ0PQdJ0f3DzOBFzaYKiCTBpn7hASs%2FhC6Z1ZogIuGLuDFZrl3jTa24SnUF72YiD9iCLBiNE6ReOvm6g3%2Bjn00Z8cj8a2Rlan1duybt58mVVYGlrEUL2MorOubMoWbdqqKEIUKxk2IV053PIt10ksWn9g4StZt2vi0IohogC%2F1RmtCqAXircwomP2607eOFiMdJFL0Ibmbwd1ZHS1uAKQmy5CnjHPf9FjCCyOHCBjqkAaBIlZefKfbacV%2BwfYxsYHSPLn14pJYSG633vMa3Jy4%2BKv34i5uMVkY4vLT8jggsRKLWioKjpK72Y0ONvjS8tXifGC66qe8YtAk%2FvHFpeHE1QugZhfiUAcB4Giusd8t%2BOyHjcqCi1kIPBvtHZeTN%2Bu0PCUNWvMuemCLrJUY5D639ukvALkUoQVWmxwohpCA2rxrD9cxNdsEnA%2BS25n95tFRKOI0G&X-Amz-Signature=426f8941b24e27cda2d01edf3fc4db9f1b6087f474b3be2ca09bbfc14700430e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
