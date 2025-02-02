---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKAEDCG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYSlGNzUE0DiEyopiUMSJDQhgSQB9givuLz0kcu1apRQIhAOjTshw%2Fj4jWs6mqvTr1UlpF7n4Y6%2FQkAjjABsvqDsx0KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfPIXCRCdDDuCKqEIq3AMfVtXaiNuHhCBiIsKfpHCg%2FUeYja6Dto7p28GlXSLN%2FLX4HIJ4Ku6Yu2Ss5l6qs9Vs1QH8wulrArWpNd%2FigL34XSmjOAwcrGnFJMmkaKMENTYaHBRtqiCuHvHJRyen5OGxgHhxiVPj6xcqS1AQtG3Mfq6NToDpXjnXK1CmSMFd5M1V8P74y7ZZVwkHUKXSE7G%2B%2FqfrL0MK9YQLzaFFigI3dWyAis1FfrL6JrP%2FMKcxwLo0HZ4LyOySu4hm1DZdi6kLu269HfQ1g4jeFNtKfBlBAZniPZ0lq%2BvLCfpNDb7ajzYL7GAaBtKwWIbc5hnW24JFKSR%2Bao9s8ltE3fbhzSwXOI3RHmFecphUrGXxH2YJoMWHjEriZeIeAXqmfPj9Us34hWVA6pgmFcudyA49evV%2FNEahXNZ4azcBrddDKZetz6rQgPpiQEL1WOqEM1mAKtpGGflAzdshIUpXYU3marYZ7el328ZlDTKyu84Ub5J6MW2eNFSUlxdZNYY5n3HvjvxKsnYLsqpfIajZPxugHjNY9LTPkzQ1oHYf5puuz8LtJkdoqdAnKXTT1W07vzz%2Fatr%2Blg2vfZd0gAACl95DNXS%2BNUau6bZqHBVHxV2ko6rmfWmGXeNBzn47Utr5fzD9nPy8BjqkASm%2BP6AszDnW59oCO7B9v2SV3JJcpH1mwtlPf3fPbQH0r7xNgOoNYB6ApI3d8e58AotFCgvSyZc7HuxpCd9vapKbl7MtVzPk3no4iNFq4on26ozJqdOY6JmRXyQojM85MipD8%2BGFkmr7GnPNQvY0k9etMQhIx3b1vHmPqJGibsDB513pdqjU1ou8ahdRGrf0SuWBga9H%2F0diEeCbUvGntD03FviR&X-Amz-Signature=0515f58b420b8ad0d95514de25a9fabf9b8ddfe5b70e74e37ce37f15338326c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKAEDCG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYSlGNzUE0DiEyopiUMSJDQhgSQB9givuLz0kcu1apRQIhAOjTshw%2Fj4jWs6mqvTr1UlpF7n4Y6%2FQkAjjABsvqDsx0KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfPIXCRCdDDuCKqEIq3AMfVtXaiNuHhCBiIsKfpHCg%2FUeYja6Dto7p28GlXSLN%2FLX4HIJ4Ku6Yu2Ss5l6qs9Vs1QH8wulrArWpNd%2FigL34XSmjOAwcrGnFJMmkaKMENTYaHBRtqiCuHvHJRyen5OGxgHhxiVPj6xcqS1AQtG3Mfq6NToDpXjnXK1CmSMFd5M1V8P74y7ZZVwkHUKXSE7G%2B%2FqfrL0MK9YQLzaFFigI3dWyAis1FfrL6JrP%2FMKcxwLo0HZ4LyOySu4hm1DZdi6kLu269HfQ1g4jeFNtKfBlBAZniPZ0lq%2BvLCfpNDb7ajzYL7GAaBtKwWIbc5hnW24JFKSR%2Bao9s8ltE3fbhzSwXOI3RHmFecphUrGXxH2YJoMWHjEriZeIeAXqmfPj9Us34hWVA6pgmFcudyA49evV%2FNEahXNZ4azcBrddDKZetz6rQgPpiQEL1WOqEM1mAKtpGGflAzdshIUpXYU3marYZ7el328ZlDTKyu84Ub5J6MW2eNFSUlxdZNYY5n3HvjvxKsnYLsqpfIajZPxugHjNY9LTPkzQ1oHYf5puuz8LtJkdoqdAnKXTT1W07vzz%2Fatr%2Blg2vfZd0gAACl95DNXS%2BNUau6bZqHBVHxV2ko6rmfWmGXeNBzn47Utr5fzD9nPy8BjqkASm%2BP6AszDnW59oCO7B9v2SV3JJcpH1mwtlPf3fPbQH0r7xNgOoNYB6ApI3d8e58AotFCgvSyZc7HuxpCd9vapKbl7MtVzPk3no4iNFq4on26ozJqdOY6JmRXyQojM85MipD8%2BGFkmr7GnPNQvY0k9etMQhIx3b1vHmPqJGibsDB513pdqjU1ou8ahdRGrf0SuWBga9H%2F0diEeCbUvGntD03FviR&X-Amz-Signature=007767423f60a713646b52fe31a5425bf4d1567ee788d82370734e07bbbc0922&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKAEDCG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYSlGNzUE0DiEyopiUMSJDQhgSQB9givuLz0kcu1apRQIhAOjTshw%2Fj4jWs6mqvTr1UlpF7n4Y6%2FQkAjjABsvqDsx0KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfPIXCRCdDDuCKqEIq3AMfVtXaiNuHhCBiIsKfpHCg%2FUeYja6Dto7p28GlXSLN%2FLX4HIJ4Ku6Yu2Ss5l6qs9Vs1QH8wulrArWpNd%2FigL34XSmjOAwcrGnFJMmkaKMENTYaHBRtqiCuHvHJRyen5OGxgHhxiVPj6xcqS1AQtG3Mfq6NToDpXjnXK1CmSMFd5M1V8P74y7ZZVwkHUKXSE7G%2B%2FqfrL0MK9YQLzaFFigI3dWyAis1FfrL6JrP%2FMKcxwLo0HZ4LyOySu4hm1DZdi6kLu269HfQ1g4jeFNtKfBlBAZniPZ0lq%2BvLCfpNDb7ajzYL7GAaBtKwWIbc5hnW24JFKSR%2Bao9s8ltE3fbhzSwXOI3RHmFecphUrGXxH2YJoMWHjEriZeIeAXqmfPj9Us34hWVA6pgmFcudyA49evV%2FNEahXNZ4azcBrddDKZetz6rQgPpiQEL1WOqEM1mAKtpGGflAzdshIUpXYU3marYZ7el328ZlDTKyu84Ub5J6MW2eNFSUlxdZNYY5n3HvjvxKsnYLsqpfIajZPxugHjNY9LTPkzQ1oHYf5puuz8LtJkdoqdAnKXTT1W07vzz%2Fatr%2Blg2vfZd0gAACl95DNXS%2BNUau6bZqHBVHxV2ko6rmfWmGXeNBzn47Utr5fzD9nPy8BjqkASm%2BP6AszDnW59oCO7B9v2SV3JJcpH1mwtlPf3fPbQH0r7xNgOoNYB6ApI3d8e58AotFCgvSyZc7HuxpCd9vapKbl7MtVzPk3no4iNFq4on26ozJqdOY6JmRXyQojM85MipD8%2BGFkmr7GnPNQvY0k9etMQhIx3b1vHmPqJGibsDB513pdqjU1ou8ahdRGrf0SuWBga9H%2F0diEeCbUvGntD03FviR&X-Amz-Signature=626dca0759f0337b6fc66d1fc6437d5b15b8d8e38dedd11006ac5d8666deb45b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKAEDCG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYSlGNzUE0DiEyopiUMSJDQhgSQB9givuLz0kcu1apRQIhAOjTshw%2Fj4jWs6mqvTr1UlpF7n4Y6%2FQkAjjABsvqDsx0KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfPIXCRCdDDuCKqEIq3AMfVtXaiNuHhCBiIsKfpHCg%2FUeYja6Dto7p28GlXSLN%2FLX4HIJ4Ku6Yu2Ss5l6qs9Vs1QH8wulrArWpNd%2FigL34XSmjOAwcrGnFJMmkaKMENTYaHBRtqiCuHvHJRyen5OGxgHhxiVPj6xcqS1AQtG3Mfq6NToDpXjnXK1CmSMFd5M1V8P74y7ZZVwkHUKXSE7G%2B%2FqfrL0MK9YQLzaFFigI3dWyAis1FfrL6JrP%2FMKcxwLo0HZ4LyOySu4hm1DZdi6kLu269HfQ1g4jeFNtKfBlBAZniPZ0lq%2BvLCfpNDb7ajzYL7GAaBtKwWIbc5hnW24JFKSR%2Bao9s8ltE3fbhzSwXOI3RHmFecphUrGXxH2YJoMWHjEriZeIeAXqmfPj9Us34hWVA6pgmFcudyA49evV%2FNEahXNZ4azcBrddDKZetz6rQgPpiQEL1WOqEM1mAKtpGGflAzdshIUpXYU3marYZ7el328ZlDTKyu84Ub5J6MW2eNFSUlxdZNYY5n3HvjvxKsnYLsqpfIajZPxugHjNY9LTPkzQ1oHYf5puuz8LtJkdoqdAnKXTT1W07vzz%2Fatr%2Blg2vfZd0gAACl95DNXS%2BNUau6bZqHBVHxV2ko6rmfWmGXeNBzn47Utr5fzD9nPy8BjqkASm%2BP6AszDnW59oCO7B9v2SV3JJcpH1mwtlPf3fPbQH0r7xNgOoNYB6ApI3d8e58AotFCgvSyZc7HuxpCd9vapKbl7MtVzPk3no4iNFq4on26ozJqdOY6JmRXyQojM85MipD8%2BGFkmr7GnPNQvY0k9etMQhIx3b1vHmPqJGibsDB513pdqjU1ou8ahdRGrf0SuWBga9H%2F0diEeCbUvGntD03FviR&X-Amz-Signature=b41b6dc27a46b2d45f918ad3ea4cd136762d9767054ca0515574f1812e799ae2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKAEDCG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYSlGNzUE0DiEyopiUMSJDQhgSQB9givuLz0kcu1apRQIhAOjTshw%2Fj4jWs6mqvTr1UlpF7n4Y6%2FQkAjjABsvqDsx0KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfPIXCRCdDDuCKqEIq3AMfVtXaiNuHhCBiIsKfpHCg%2FUeYja6Dto7p28GlXSLN%2FLX4HIJ4Ku6Yu2Ss5l6qs9Vs1QH8wulrArWpNd%2FigL34XSmjOAwcrGnFJMmkaKMENTYaHBRtqiCuHvHJRyen5OGxgHhxiVPj6xcqS1AQtG3Mfq6NToDpXjnXK1CmSMFd5M1V8P74y7ZZVwkHUKXSE7G%2B%2FqfrL0MK9YQLzaFFigI3dWyAis1FfrL6JrP%2FMKcxwLo0HZ4LyOySu4hm1DZdi6kLu269HfQ1g4jeFNtKfBlBAZniPZ0lq%2BvLCfpNDb7ajzYL7GAaBtKwWIbc5hnW24JFKSR%2Bao9s8ltE3fbhzSwXOI3RHmFecphUrGXxH2YJoMWHjEriZeIeAXqmfPj9Us34hWVA6pgmFcudyA49evV%2FNEahXNZ4azcBrddDKZetz6rQgPpiQEL1WOqEM1mAKtpGGflAzdshIUpXYU3marYZ7el328ZlDTKyu84Ub5J6MW2eNFSUlxdZNYY5n3HvjvxKsnYLsqpfIajZPxugHjNY9LTPkzQ1oHYf5puuz8LtJkdoqdAnKXTT1W07vzz%2Fatr%2Blg2vfZd0gAACl95DNXS%2BNUau6bZqHBVHxV2ko6rmfWmGXeNBzn47Utr5fzD9nPy8BjqkASm%2BP6AszDnW59oCO7B9v2SV3JJcpH1mwtlPf3fPbQH0r7xNgOoNYB6ApI3d8e58AotFCgvSyZc7HuxpCd9vapKbl7MtVzPk3no4iNFq4on26ozJqdOY6JmRXyQojM85MipD8%2BGFkmr7GnPNQvY0k9etMQhIx3b1vHmPqJGibsDB513pdqjU1ou8ahdRGrf0SuWBga9H%2F0diEeCbUvGntD03FviR&X-Amz-Signature=8f8b4f4ac107528fcdb159dcc23d55e47bd00bc5a33fb300cde3e8e31888a530&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKAEDCG%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYSlGNzUE0DiEyopiUMSJDQhgSQB9givuLz0kcu1apRQIhAOjTshw%2Fj4jWs6mqvTr1UlpF7n4Y6%2FQkAjjABsvqDsx0KogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfPIXCRCdDDuCKqEIq3AMfVtXaiNuHhCBiIsKfpHCg%2FUeYja6Dto7p28GlXSLN%2FLX4HIJ4Ku6Yu2Ss5l6qs9Vs1QH8wulrArWpNd%2FigL34XSmjOAwcrGnFJMmkaKMENTYaHBRtqiCuHvHJRyen5OGxgHhxiVPj6xcqS1AQtG3Mfq6NToDpXjnXK1CmSMFd5M1V8P74y7ZZVwkHUKXSE7G%2B%2FqfrL0MK9YQLzaFFigI3dWyAis1FfrL6JrP%2FMKcxwLo0HZ4LyOySu4hm1DZdi6kLu269HfQ1g4jeFNtKfBlBAZniPZ0lq%2BvLCfpNDb7ajzYL7GAaBtKwWIbc5hnW24JFKSR%2Bao9s8ltE3fbhzSwXOI3RHmFecphUrGXxH2YJoMWHjEriZeIeAXqmfPj9Us34hWVA6pgmFcudyA49evV%2FNEahXNZ4azcBrddDKZetz6rQgPpiQEL1WOqEM1mAKtpGGflAzdshIUpXYU3marYZ7el328ZlDTKyu84Ub5J6MW2eNFSUlxdZNYY5n3HvjvxKsnYLsqpfIajZPxugHjNY9LTPkzQ1oHYf5puuz8LtJkdoqdAnKXTT1W07vzz%2Fatr%2Blg2vfZd0gAACl95DNXS%2BNUau6bZqHBVHxV2ko6rmfWmGXeNBzn47Utr5fzD9nPy8BjqkASm%2BP6AszDnW59oCO7B9v2SV3JJcpH1mwtlPf3fPbQH0r7xNgOoNYB6ApI3d8e58AotFCgvSyZc7HuxpCd9vapKbl7MtVzPk3no4iNFq4on26ozJqdOY6JmRXyQojM85MipD8%2BGFkmr7GnPNQvY0k9etMQhIx3b1vHmPqJGibsDB513pdqjU1ou8ahdRGrf0SuWBga9H%2F0diEeCbUvGntD03FviR&X-Amz-Signature=8d3f96e6e05f541bceba54a3f5da24985a02433d61b9ecf44f675145324bd519&X-Amz-SignedHeaders=host&x-id=GetObject)
