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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OC5W34I%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBk6q%2BK%2B0wLUNl3jLUCTK9Rc1ZYZMeyrKP20i9%2BDCZUGAiEAqQgmpbkylKQNE4kBZqh0DQqDhkkFdl%2FJs1WT5kRVXyYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCW%2BZBFuXeRQgCctnCrcA3I9Dr6io9blF1vNGqJAO%2FB0SDAykBjYtbGEHCEPmjn8w5HL3iE7lCZKbAZPIFr6ab6%2FPwvKs5Ie4pBN%2FN5FB50WZ40mxf%2BQZTVcqCOIhrLl97FFxktOvTqWQXJORPnrpRJh89Sf%2BZly%2F7znw0BpGejGEtm41QmYwuoP4Awkab582KV4w7c4Pe4VvC46gzJHPXel7NEJVPeo7WnZAqzkh28Cd9rvISM9R6dKcGvBcW3DpDO8TZBC8ic8JqcU03ZYhLcaUeax1XTrS3ieR16RAQkFgnkbYsnI%2BCnW2iXmr4OGysWBwlHIq2Q6XOL2vjVcFrLQ3CvZtYQeNYWKQE0wBW%2B8O35wlzBOBQ4Lt01BiMhtLFqH1%2BCpmSklr%2BNC1qIhxY2pahfvIJCw68qI8mhWNXFmv5yKgSYvxjN6cOQeVAU2dKXR7UFuk78zj%2BydMLZpWkJ9PaudPkOln5oizmLy7SKqeO7KKXJ3DafOTx9fdGatVMhiOnRtU6MfP1nTuWHvrpsRFAjuB6soE%2B79cCCXliUZUExXDVHx%2FwQGAhZx0gnCgtJW5QXf%2BSs99nslK8BgsMs6hPMQ3y2ls8bRCc28kAI2pSHwqqQkiQFoASTlJdGUqsSqJLOvDrVkWvWaMOX3%2BMIGOqUBVTBvPjSDc6V985jmmeZg6E6YBz8rtdsU77FHo7fK5sAMFUYTI1vL0Nq1ExUHFwp3ycLTAphLX9pORHwMbs6N9Walf8HpglBKXocD6CXF0EpYJe3mOE8Jca2CJE6iRYf6o8n4EkN9l9uX3ATp0XQU9AmtpdNz4NromNhxdKlRJ0U1WOjWpdfk9fYtOmMQEhLLrsgnSeye%2FYXaoHFwXyOFhjwCxhXn&X-Amz-Signature=a17dad095a1752452f1bc4aaab7e7d3859ff7b8f212dfcd6ce4d263a2c35408b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OC5W34I%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBk6q%2BK%2B0wLUNl3jLUCTK9Rc1ZYZMeyrKP20i9%2BDCZUGAiEAqQgmpbkylKQNE4kBZqh0DQqDhkkFdl%2FJs1WT5kRVXyYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCW%2BZBFuXeRQgCctnCrcA3I9Dr6io9blF1vNGqJAO%2FB0SDAykBjYtbGEHCEPmjn8w5HL3iE7lCZKbAZPIFr6ab6%2FPwvKs5Ie4pBN%2FN5FB50WZ40mxf%2BQZTVcqCOIhrLl97FFxktOvTqWQXJORPnrpRJh89Sf%2BZly%2F7znw0BpGejGEtm41QmYwuoP4Awkab582KV4w7c4Pe4VvC46gzJHPXel7NEJVPeo7WnZAqzkh28Cd9rvISM9R6dKcGvBcW3DpDO8TZBC8ic8JqcU03ZYhLcaUeax1XTrS3ieR16RAQkFgnkbYsnI%2BCnW2iXmr4OGysWBwlHIq2Q6XOL2vjVcFrLQ3CvZtYQeNYWKQE0wBW%2B8O35wlzBOBQ4Lt01BiMhtLFqH1%2BCpmSklr%2BNC1qIhxY2pahfvIJCw68qI8mhWNXFmv5yKgSYvxjN6cOQeVAU2dKXR7UFuk78zj%2BydMLZpWkJ9PaudPkOln5oizmLy7SKqeO7KKXJ3DafOTx9fdGatVMhiOnRtU6MfP1nTuWHvrpsRFAjuB6soE%2B79cCCXliUZUExXDVHx%2FwQGAhZx0gnCgtJW5QXf%2BSs99nslK8BgsMs6hPMQ3y2ls8bRCc28kAI2pSHwqqQkiQFoASTlJdGUqsSqJLOvDrVkWvWaMOX3%2BMIGOqUBVTBvPjSDc6V985jmmeZg6E6YBz8rtdsU77FHo7fK5sAMFUYTI1vL0Nq1ExUHFwp3ycLTAphLX9pORHwMbs6N9Walf8HpglBKXocD6CXF0EpYJe3mOE8Jca2CJE6iRYf6o8n4EkN9l9uX3ATp0XQU9AmtpdNz4NromNhxdKlRJ0U1WOjWpdfk9fYtOmMQEhLLrsgnSeye%2FYXaoHFwXyOFhjwCxhXn&X-Amz-Signature=16ba8e9bd3b1068e907d3fbb092c53043fbd205f729d42ee3b42193b4d99cd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OC5W34I%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBk6q%2BK%2B0wLUNl3jLUCTK9Rc1ZYZMeyrKP20i9%2BDCZUGAiEAqQgmpbkylKQNE4kBZqh0DQqDhkkFdl%2FJs1WT5kRVXyYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCW%2BZBFuXeRQgCctnCrcA3I9Dr6io9blF1vNGqJAO%2FB0SDAykBjYtbGEHCEPmjn8w5HL3iE7lCZKbAZPIFr6ab6%2FPwvKs5Ie4pBN%2FN5FB50WZ40mxf%2BQZTVcqCOIhrLl97FFxktOvTqWQXJORPnrpRJh89Sf%2BZly%2F7znw0BpGejGEtm41QmYwuoP4Awkab582KV4w7c4Pe4VvC46gzJHPXel7NEJVPeo7WnZAqzkh28Cd9rvISM9R6dKcGvBcW3DpDO8TZBC8ic8JqcU03ZYhLcaUeax1XTrS3ieR16RAQkFgnkbYsnI%2BCnW2iXmr4OGysWBwlHIq2Q6XOL2vjVcFrLQ3CvZtYQeNYWKQE0wBW%2B8O35wlzBOBQ4Lt01BiMhtLFqH1%2BCpmSklr%2BNC1qIhxY2pahfvIJCw68qI8mhWNXFmv5yKgSYvxjN6cOQeVAU2dKXR7UFuk78zj%2BydMLZpWkJ9PaudPkOln5oizmLy7SKqeO7KKXJ3DafOTx9fdGatVMhiOnRtU6MfP1nTuWHvrpsRFAjuB6soE%2B79cCCXliUZUExXDVHx%2FwQGAhZx0gnCgtJW5QXf%2BSs99nslK8BgsMs6hPMQ3y2ls8bRCc28kAI2pSHwqqQkiQFoASTlJdGUqsSqJLOvDrVkWvWaMOX3%2BMIGOqUBVTBvPjSDc6V985jmmeZg6E6YBz8rtdsU77FHo7fK5sAMFUYTI1vL0Nq1ExUHFwp3ycLTAphLX9pORHwMbs6N9Walf8HpglBKXocD6CXF0EpYJe3mOE8Jca2CJE6iRYf6o8n4EkN9l9uX3ATp0XQU9AmtpdNz4NromNhxdKlRJ0U1WOjWpdfk9fYtOmMQEhLLrsgnSeye%2FYXaoHFwXyOFhjwCxhXn&X-Amz-Signature=085e510832609e09106fa5e449e025b135bc3aa388ec0cfc524d79d767803b81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OC5W34I%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBk6q%2BK%2B0wLUNl3jLUCTK9Rc1ZYZMeyrKP20i9%2BDCZUGAiEAqQgmpbkylKQNE4kBZqh0DQqDhkkFdl%2FJs1WT5kRVXyYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCW%2BZBFuXeRQgCctnCrcA3I9Dr6io9blF1vNGqJAO%2FB0SDAykBjYtbGEHCEPmjn8w5HL3iE7lCZKbAZPIFr6ab6%2FPwvKs5Ie4pBN%2FN5FB50WZ40mxf%2BQZTVcqCOIhrLl97FFxktOvTqWQXJORPnrpRJh89Sf%2BZly%2F7znw0BpGejGEtm41QmYwuoP4Awkab582KV4w7c4Pe4VvC46gzJHPXel7NEJVPeo7WnZAqzkh28Cd9rvISM9R6dKcGvBcW3DpDO8TZBC8ic8JqcU03ZYhLcaUeax1XTrS3ieR16RAQkFgnkbYsnI%2BCnW2iXmr4OGysWBwlHIq2Q6XOL2vjVcFrLQ3CvZtYQeNYWKQE0wBW%2B8O35wlzBOBQ4Lt01BiMhtLFqH1%2BCpmSklr%2BNC1qIhxY2pahfvIJCw68qI8mhWNXFmv5yKgSYvxjN6cOQeVAU2dKXR7UFuk78zj%2BydMLZpWkJ9PaudPkOln5oizmLy7SKqeO7KKXJ3DafOTx9fdGatVMhiOnRtU6MfP1nTuWHvrpsRFAjuB6soE%2B79cCCXliUZUExXDVHx%2FwQGAhZx0gnCgtJW5QXf%2BSs99nslK8BgsMs6hPMQ3y2ls8bRCc28kAI2pSHwqqQkiQFoASTlJdGUqsSqJLOvDrVkWvWaMOX3%2BMIGOqUBVTBvPjSDc6V985jmmeZg6E6YBz8rtdsU77FHo7fK5sAMFUYTI1vL0Nq1ExUHFwp3ycLTAphLX9pORHwMbs6N9Walf8HpglBKXocD6CXF0EpYJe3mOE8Jca2CJE6iRYf6o8n4EkN9l9uX3ATp0XQU9AmtpdNz4NromNhxdKlRJ0U1WOjWpdfk9fYtOmMQEhLLrsgnSeye%2FYXaoHFwXyOFhjwCxhXn&X-Amz-Signature=40c7193f0f37a1d7fc9dc9339164beabfd7a6cfa2c91ad9c53a049417e944b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OC5W34I%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBk6q%2BK%2B0wLUNl3jLUCTK9Rc1ZYZMeyrKP20i9%2BDCZUGAiEAqQgmpbkylKQNE4kBZqh0DQqDhkkFdl%2FJs1WT5kRVXyYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCW%2BZBFuXeRQgCctnCrcA3I9Dr6io9blF1vNGqJAO%2FB0SDAykBjYtbGEHCEPmjn8w5HL3iE7lCZKbAZPIFr6ab6%2FPwvKs5Ie4pBN%2FN5FB50WZ40mxf%2BQZTVcqCOIhrLl97FFxktOvTqWQXJORPnrpRJh89Sf%2BZly%2F7znw0BpGejGEtm41QmYwuoP4Awkab582KV4w7c4Pe4VvC46gzJHPXel7NEJVPeo7WnZAqzkh28Cd9rvISM9R6dKcGvBcW3DpDO8TZBC8ic8JqcU03ZYhLcaUeax1XTrS3ieR16RAQkFgnkbYsnI%2BCnW2iXmr4OGysWBwlHIq2Q6XOL2vjVcFrLQ3CvZtYQeNYWKQE0wBW%2B8O35wlzBOBQ4Lt01BiMhtLFqH1%2BCpmSklr%2BNC1qIhxY2pahfvIJCw68qI8mhWNXFmv5yKgSYvxjN6cOQeVAU2dKXR7UFuk78zj%2BydMLZpWkJ9PaudPkOln5oizmLy7SKqeO7KKXJ3DafOTx9fdGatVMhiOnRtU6MfP1nTuWHvrpsRFAjuB6soE%2B79cCCXliUZUExXDVHx%2FwQGAhZx0gnCgtJW5QXf%2BSs99nslK8BgsMs6hPMQ3y2ls8bRCc28kAI2pSHwqqQkiQFoASTlJdGUqsSqJLOvDrVkWvWaMOX3%2BMIGOqUBVTBvPjSDc6V985jmmeZg6E6YBz8rtdsU77FHo7fK5sAMFUYTI1vL0Nq1ExUHFwp3ycLTAphLX9pORHwMbs6N9Walf8HpglBKXocD6CXF0EpYJe3mOE8Jca2CJE6iRYf6o8n4EkN9l9uX3ATp0XQU9AmtpdNz4NromNhxdKlRJ0U1WOjWpdfk9fYtOmMQEhLLrsgnSeye%2FYXaoHFwXyOFhjwCxhXn&X-Amz-Signature=2a1ec16334d8d1699d14f6b8bf2557f507881e7fd0e5d897e5da05e01fdd751e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OC5W34I%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBk6q%2BK%2B0wLUNl3jLUCTK9Rc1ZYZMeyrKP20i9%2BDCZUGAiEAqQgmpbkylKQNE4kBZqh0DQqDhkkFdl%2FJs1WT5kRVXyYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCW%2BZBFuXeRQgCctnCrcA3I9Dr6io9blF1vNGqJAO%2FB0SDAykBjYtbGEHCEPmjn8w5HL3iE7lCZKbAZPIFr6ab6%2FPwvKs5Ie4pBN%2FN5FB50WZ40mxf%2BQZTVcqCOIhrLl97FFxktOvTqWQXJORPnrpRJh89Sf%2BZly%2F7znw0BpGejGEtm41QmYwuoP4Awkab582KV4w7c4Pe4VvC46gzJHPXel7NEJVPeo7WnZAqzkh28Cd9rvISM9R6dKcGvBcW3DpDO8TZBC8ic8JqcU03ZYhLcaUeax1XTrS3ieR16RAQkFgnkbYsnI%2BCnW2iXmr4OGysWBwlHIq2Q6XOL2vjVcFrLQ3CvZtYQeNYWKQE0wBW%2B8O35wlzBOBQ4Lt01BiMhtLFqH1%2BCpmSklr%2BNC1qIhxY2pahfvIJCw68qI8mhWNXFmv5yKgSYvxjN6cOQeVAU2dKXR7UFuk78zj%2BydMLZpWkJ9PaudPkOln5oizmLy7SKqeO7KKXJ3DafOTx9fdGatVMhiOnRtU6MfP1nTuWHvrpsRFAjuB6soE%2B79cCCXliUZUExXDVHx%2FwQGAhZx0gnCgtJW5QXf%2BSs99nslK8BgsMs6hPMQ3y2ls8bRCc28kAI2pSHwqqQkiQFoASTlJdGUqsSqJLOvDrVkWvWaMOX3%2BMIGOqUBVTBvPjSDc6V985jmmeZg6E6YBz8rtdsU77FHo7fK5sAMFUYTI1vL0Nq1ExUHFwp3ycLTAphLX9pORHwMbs6N9Walf8HpglBKXocD6CXF0EpYJe3mOE8Jca2CJE6iRYf6o8n4EkN9l9uX3ATp0XQU9AmtpdNz4NromNhxdKlRJ0U1WOjWpdfk9fYtOmMQEhLLrsgnSeye%2FYXaoHFwXyOFhjwCxhXn&X-Amz-Signature=8de5254a40f2b136b4a75cebadf4f75d1297ef471d670ffdb0dc9af5021bdec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
