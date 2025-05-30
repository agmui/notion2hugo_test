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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKT3A2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPJtrIcwH2mPlak9hHNMp8%2FJ0uiUjXcn9tiVrvWKSv%2FAiB2ZtE%2FT7Uj79%2FWwb1dFUZxVzdbEOQapDHTx0gCOFw7wiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2FkASLcIoyirBOZOKtwDG04K%2FmbUROBJKBvVQZ9N5W1RI4EyAMYDy44x4hOwgek7ReeRfIF43ZKqIH85ZLfOFcoty7vJZCHx1tVTfZURmpBCV0olST9scrA1QRmr%2BUBL8uH4zgKCv5d81yUFhxnFA%2F2HHb2GJYCu99RmOAGU6Em8tVftnkPSEqr1pYOeOqwJb1ak0m%2FMI5CJQM2G1UEYvE2ngCQ0egUW%2Bxh4UDRlNsP%2F6NiUdGp%2Fjy1McjZBakF4Q%2BT2TfDPXTtqmRg8Ez2hhDgPWP2zQnljApF40Ujalxx5CEuhaDvZpeEuBd2NJik6W%2B6oux6nAgt0S6wVNsMy3Rgukk0CMNoYRMRdhNpL4l7rgP9PV0bkUCL6Y%2FEk22lWzB2qIvG3hGgZpK%2Fv6gRzGJS%2FLQihW8PfbLWk710e%2BPPWDx3TbeJvtJ2WUmDvG9%2BNe8imNoCq43D5mBA0DGSWixfwsoU%2FXLwrbmLc%2FhP6PvhAxd6VvPMr9tOiHPoerPhK3mit5g5bBpH7IgOu5LlCSlmBXHcefxjgS4SLOwvoIKkQe8xlvJwGNslOYWALbB3mGflnAG3Et%2B1n3dJI%2FkQbE9fw6UloOKsh8vQ1YQs0IW40scJSE%2B8qvbZxN31jtX6vZ1ofhPkZnqHcpQ0wgcvowQY6pgGYtnUZu4n9yZbvL33r5wAMTic1VoF52K3eoKGQU4zF%2FJvy%2BdNAMB8elnSg6BUL7CXxNMs7Q%2B08orHdzC4KN31Y7AGcOtui9MLrcJmODxK8x8GYSkHYINF%2BqUhkGkgKNQDRRrTQnsDqer5dVXJV757x5KRrjRuqLwq%2B6d5703fzLPYJX9HMsxNRMFYagg8LaATrNOCKMIZbCU6V8%2FhI4J0h4O3rz4BS&X-Amz-Signature=3acb42781360e6673ef012d91dcaca0010981926cf1ce3d986d51158fcb6db25&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKT3A2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPJtrIcwH2mPlak9hHNMp8%2FJ0uiUjXcn9tiVrvWKSv%2FAiB2ZtE%2FT7Uj79%2FWwb1dFUZxVzdbEOQapDHTx0gCOFw7wiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2FkASLcIoyirBOZOKtwDG04K%2FmbUROBJKBvVQZ9N5W1RI4EyAMYDy44x4hOwgek7ReeRfIF43ZKqIH85ZLfOFcoty7vJZCHx1tVTfZURmpBCV0olST9scrA1QRmr%2BUBL8uH4zgKCv5d81yUFhxnFA%2F2HHb2GJYCu99RmOAGU6Em8tVftnkPSEqr1pYOeOqwJb1ak0m%2FMI5CJQM2G1UEYvE2ngCQ0egUW%2Bxh4UDRlNsP%2F6NiUdGp%2Fjy1McjZBakF4Q%2BT2TfDPXTtqmRg8Ez2hhDgPWP2zQnljApF40Ujalxx5CEuhaDvZpeEuBd2NJik6W%2B6oux6nAgt0S6wVNsMy3Rgukk0CMNoYRMRdhNpL4l7rgP9PV0bkUCL6Y%2FEk22lWzB2qIvG3hGgZpK%2Fv6gRzGJS%2FLQihW8PfbLWk710e%2BPPWDx3TbeJvtJ2WUmDvG9%2BNe8imNoCq43D5mBA0DGSWixfwsoU%2FXLwrbmLc%2FhP6PvhAxd6VvPMr9tOiHPoerPhK3mit5g5bBpH7IgOu5LlCSlmBXHcefxjgS4SLOwvoIKkQe8xlvJwGNslOYWALbB3mGflnAG3Et%2B1n3dJI%2FkQbE9fw6UloOKsh8vQ1YQs0IW40scJSE%2B8qvbZxN31jtX6vZ1ofhPkZnqHcpQ0wgcvowQY6pgGYtnUZu4n9yZbvL33r5wAMTic1VoF52K3eoKGQU4zF%2FJvy%2BdNAMB8elnSg6BUL7CXxNMs7Q%2B08orHdzC4KN31Y7AGcOtui9MLrcJmODxK8x8GYSkHYINF%2BqUhkGkgKNQDRRrTQnsDqer5dVXJV757x5KRrjRuqLwq%2B6d5703fzLPYJX9HMsxNRMFYagg8LaATrNOCKMIZbCU6V8%2FhI4J0h4O3rz4BS&X-Amz-Signature=9c7e562b85c01f5ad67c2133372a8b2b386b84c269812945f6f719f049ed1efb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKT3A2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPJtrIcwH2mPlak9hHNMp8%2FJ0uiUjXcn9tiVrvWKSv%2FAiB2ZtE%2FT7Uj79%2FWwb1dFUZxVzdbEOQapDHTx0gCOFw7wiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2FkASLcIoyirBOZOKtwDG04K%2FmbUROBJKBvVQZ9N5W1RI4EyAMYDy44x4hOwgek7ReeRfIF43ZKqIH85ZLfOFcoty7vJZCHx1tVTfZURmpBCV0olST9scrA1QRmr%2BUBL8uH4zgKCv5d81yUFhxnFA%2F2HHb2GJYCu99RmOAGU6Em8tVftnkPSEqr1pYOeOqwJb1ak0m%2FMI5CJQM2G1UEYvE2ngCQ0egUW%2Bxh4UDRlNsP%2F6NiUdGp%2Fjy1McjZBakF4Q%2BT2TfDPXTtqmRg8Ez2hhDgPWP2zQnljApF40Ujalxx5CEuhaDvZpeEuBd2NJik6W%2B6oux6nAgt0S6wVNsMy3Rgukk0CMNoYRMRdhNpL4l7rgP9PV0bkUCL6Y%2FEk22lWzB2qIvG3hGgZpK%2Fv6gRzGJS%2FLQihW8PfbLWk710e%2BPPWDx3TbeJvtJ2WUmDvG9%2BNe8imNoCq43D5mBA0DGSWixfwsoU%2FXLwrbmLc%2FhP6PvhAxd6VvPMr9tOiHPoerPhK3mit5g5bBpH7IgOu5LlCSlmBXHcefxjgS4SLOwvoIKkQe8xlvJwGNslOYWALbB3mGflnAG3Et%2B1n3dJI%2FkQbE9fw6UloOKsh8vQ1YQs0IW40scJSE%2B8qvbZxN31jtX6vZ1ofhPkZnqHcpQ0wgcvowQY6pgGYtnUZu4n9yZbvL33r5wAMTic1VoF52K3eoKGQU4zF%2FJvy%2BdNAMB8elnSg6BUL7CXxNMs7Q%2B08orHdzC4KN31Y7AGcOtui9MLrcJmODxK8x8GYSkHYINF%2BqUhkGkgKNQDRRrTQnsDqer5dVXJV757x5KRrjRuqLwq%2B6d5703fzLPYJX9HMsxNRMFYagg8LaATrNOCKMIZbCU6V8%2FhI4J0h4O3rz4BS&X-Amz-Signature=482d65988eba8792c6582092cff00844f8ceb5cff28dc504a98bf9ab799262de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKT3A2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPJtrIcwH2mPlak9hHNMp8%2FJ0uiUjXcn9tiVrvWKSv%2FAiB2ZtE%2FT7Uj79%2FWwb1dFUZxVzdbEOQapDHTx0gCOFw7wiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2FkASLcIoyirBOZOKtwDG04K%2FmbUROBJKBvVQZ9N5W1RI4EyAMYDy44x4hOwgek7ReeRfIF43ZKqIH85ZLfOFcoty7vJZCHx1tVTfZURmpBCV0olST9scrA1QRmr%2BUBL8uH4zgKCv5d81yUFhxnFA%2F2HHb2GJYCu99RmOAGU6Em8tVftnkPSEqr1pYOeOqwJb1ak0m%2FMI5CJQM2G1UEYvE2ngCQ0egUW%2Bxh4UDRlNsP%2F6NiUdGp%2Fjy1McjZBakF4Q%2BT2TfDPXTtqmRg8Ez2hhDgPWP2zQnljApF40Ujalxx5CEuhaDvZpeEuBd2NJik6W%2B6oux6nAgt0S6wVNsMy3Rgukk0CMNoYRMRdhNpL4l7rgP9PV0bkUCL6Y%2FEk22lWzB2qIvG3hGgZpK%2Fv6gRzGJS%2FLQihW8PfbLWk710e%2BPPWDx3TbeJvtJ2WUmDvG9%2BNe8imNoCq43D5mBA0DGSWixfwsoU%2FXLwrbmLc%2FhP6PvhAxd6VvPMr9tOiHPoerPhK3mit5g5bBpH7IgOu5LlCSlmBXHcefxjgS4SLOwvoIKkQe8xlvJwGNslOYWALbB3mGflnAG3Et%2B1n3dJI%2FkQbE9fw6UloOKsh8vQ1YQs0IW40scJSE%2B8qvbZxN31jtX6vZ1ofhPkZnqHcpQ0wgcvowQY6pgGYtnUZu4n9yZbvL33r5wAMTic1VoF52K3eoKGQU4zF%2FJvy%2BdNAMB8elnSg6BUL7CXxNMs7Q%2B08orHdzC4KN31Y7AGcOtui9MLrcJmODxK8x8GYSkHYINF%2BqUhkGkgKNQDRRrTQnsDqer5dVXJV757x5KRrjRuqLwq%2B6d5703fzLPYJX9HMsxNRMFYagg8LaATrNOCKMIZbCU6V8%2FhI4J0h4O3rz4BS&X-Amz-Signature=3f13cad8ac0d5ec950332f9959d92a0e347470a9e649c9aba0dea959fc6a9880&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKT3A2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPJtrIcwH2mPlak9hHNMp8%2FJ0uiUjXcn9tiVrvWKSv%2FAiB2ZtE%2FT7Uj79%2FWwb1dFUZxVzdbEOQapDHTx0gCOFw7wiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2FkASLcIoyirBOZOKtwDG04K%2FmbUROBJKBvVQZ9N5W1RI4EyAMYDy44x4hOwgek7ReeRfIF43ZKqIH85ZLfOFcoty7vJZCHx1tVTfZURmpBCV0olST9scrA1QRmr%2BUBL8uH4zgKCv5d81yUFhxnFA%2F2HHb2GJYCu99RmOAGU6Em8tVftnkPSEqr1pYOeOqwJb1ak0m%2FMI5CJQM2G1UEYvE2ngCQ0egUW%2Bxh4UDRlNsP%2F6NiUdGp%2Fjy1McjZBakF4Q%2BT2TfDPXTtqmRg8Ez2hhDgPWP2zQnljApF40Ujalxx5CEuhaDvZpeEuBd2NJik6W%2B6oux6nAgt0S6wVNsMy3Rgukk0CMNoYRMRdhNpL4l7rgP9PV0bkUCL6Y%2FEk22lWzB2qIvG3hGgZpK%2Fv6gRzGJS%2FLQihW8PfbLWk710e%2BPPWDx3TbeJvtJ2WUmDvG9%2BNe8imNoCq43D5mBA0DGSWixfwsoU%2FXLwrbmLc%2FhP6PvhAxd6VvPMr9tOiHPoerPhK3mit5g5bBpH7IgOu5LlCSlmBXHcefxjgS4SLOwvoIKkQe8xlvJwGNslOYWALbB3mGflnAG3Et%2B1n3dJI%2FkQbE9fw6UloOKsh8vQ1YQs0IW40scJSE%2B8qvbZxN31jtX6vZ1ofhPkZnqHcpQ0wgcvowQY6pgGYtnUZu4n9yZbvL33r5wAMTic1VoF52K3eoKGQU4zF%2FJvy%2BdNAMB8elnSg6BUL7CXxNMs7Q%2B08orHdzC4KN31Y7AGcOtui9MLrcJmODxK8x8GYSkHYINF%2BqUhkGkgKNQDRRrTQnsDqer5dVXJV757x5KRrjRuqLwq%2B6d5703fzLPYJX9HMsxNRMFYagg8LaATrNOCKMIZbCU6V8%2FhI4J0h4O3rz4BS&X-Amz-Signature=f024bee6623563e2e2648eddbde096e2a1006bb3746737fd6321c34a59e1f43d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKT3A2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPJtrIcwH2mPlak9hHNMp8%2FJ0uiUjXcn9tiVrvWKSv%2FAiB2ZtE%2FT7Uj79%2FWwb1dFUZxVzdbEOQapDHTx0gCOFw7wiqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd%2FkASLcIoyirBOZOKtwDG04K%2FmbUROBJKBvVQZ9N5W1RI4EyAMYDy44x4hOwgek7ReeRfIF43ZKqIH85ZLfOFcoty7vJZCHx1tVTfZURmpBCV0olST9scrA1QRmr%2BUBL8uH4zgKCv5d81yUFhxnFA%2F2HHb2GJYCu99RmOAGU6Em8tVftnkPSEqr1pYOeOqwJb1ak0m%2FMI5CJQM2G1UEYvE2ngCQ0egUW%2Bxh4UDRlNsP%2F6NiUdGp%2Fjy1McjZBakF4Q%2BT2TfDPXTtqmRg8Ez2hhDgPWP2zQnljApF40Ujalxx5CEuhaDvZpeEuBd2NJik6W%2B6oux6nAgt0S6wVNsMy3Rgukk0CMNoYRMRdhNpL4l7rgP9PV0bkUCL6Y%2FEk22lWzB2qIvG3hGgZpK%2Fv6gRzGJS%2FLQihW8PfbLWk710e%2BPPWDx3TbeJvtJ2WUmDvG9%2BNe8imNoCq43D5mBA0DGSWixfwsoU%2FXLwrbmLc%2FhP6PvhAxd6VvPMr9tOiHPoerPhK3mit5g5bBpH7IgOu5LlCSlmBXHcefxjgS4SLOwvoIKkQe8xlvJwGNslOYWALbB3mGflnAG3Et%2B1n3dJI%2FkQbE9fw6UloOKsh8vQ1YQs0IW40scJSE%2B8qvbZxN31jtX6vZ1ofhPkZnqHcpQ0wgcvowQY6pgGYtnUZu4n9yZbvL33r5wAMTic1VoF52K3eoKGQU4zF%2FJvy%2BdNAMB8elnSg6BUL7CXxNMs7Q%2B08orHdzC4KN31Y7AGcOtui9MLrcJmODxK8x8GYSkHYINF%2BqUhkGkgKNQDRRrTQnsDqer5dVXJV757x5KRrjRuqLwq%2B6d5703fzLPYJX9HMsxNRMFYagg8LaATrNOCKMIZbCU6V8%2FhI4J0h4O3rz4BS&X-Amz-Signature=ec9b934b9972d1c9da1f51042dd51d14ce740556724ba6d88afe1210f49796a8&X-Amz-SignedHeaders=host&x-id=GetObject)
