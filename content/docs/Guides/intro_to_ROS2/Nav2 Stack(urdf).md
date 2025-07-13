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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXRKO3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5iSIjvXxQyChL%2FM5clD4JFEcfqNyICRg7oxFjtJKRIAIhAKKsHUuhggCtkccXtcQO4cTJOwP11V2V1qo3yuERxDYxKv8DCBwQABoMNjM3NDIzMTgzODA1IgzmenAVUdQ0UpGvP80q3AMDVkDGprxhW2DtsMOaxVKd3hY9363LWhck6wMQvGVTMozA9hW9uSatDXnfkUcfJoRYdvUJog3joLfiqMGsWaocyklOZl%2B0wygIoI5DpvrFxwNn%2B48ITNxCzNWzeYHRHUniGrhhwZq2lf%2BCH1nNCbfDBlO1RmWj%2FLrB49%2BKoyddNZlJWOSfrqhTixwCcfeCEsu5qnzL%2FPmJgSL5%2BIgUiplp8O%2BAqoKG27dnDMslp2ljnGiSQhLsnnFVaJVBcY1TvLg4vs3QaCK7xH083FNQozMV5RMVrbgiVokN1i9u0%2FCboSnzodFiIoEReWIAfh8LvUJ6x90KPrJUZI%2FwGXNMVfgDy9A6m7d%2BD5FuyraE%2BIJqbRR5xgATBSZdZuP0h99ZFJ0TW6GoSglcbQfXN3M7tFUIh8V8eSEpKpQ2bkJFXVltBiySJ%2BSoRB1SPh5%2Beeeqd%2FhXjTYVgXs1Z87LB5qcijGQZE8yLMpIzW%2B%2Fu5DR9csA%2B3kfYCJUgPE7RaP3SyS7biugnZkgrCVd7y9Cc7l7myTxwwHn3%2B29AhVLf5%2FBXHRTD0bFnATp7Qc6Vg3qmAuh2aeczhidu3mikEVYc%2FHPgfuBzELVfOwvkc0Yu8nNdiaWxh6X7urfRDKjm3rA%2FTCVkNDDBjqkAbEgFwDxG8GjFvkrwtIKKZR0YJ5pgR4%2F3rrg1m5ipHGnqFJxCVCCojpWiwqSuEeO%2FI8TXEQeKJ4wU09QVtqzqYQiu2JSGMMTiTPMznsjoH9SeSGgHigxW7%2FP09xeDsegQ3wB5XO4jyR6MtCZU1npoxpP1ce9otTz0vvrVkVSMDNrYvvK5Bhf2NfX7kp1RLoQNwnb73n2K68EkfgLXHrxHIkh%2Bsu3&X-Amz-Signature=6e1c8d9074da59ffed4326d522237b400b67f47a87eb3421c21db5292e0a4530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXRKO3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5iSIjvXxQyChL%2FM5clD4JFEcfqNyICRg7oxFjtJKRIAIhAKKsHUuhggCtkccXtcQO4cTJOwP11V2V1qo3yuERxDYxKv8DCBwQABoMNjM3NDIzMTgzODA1IgzmenAVUdQ0UpGvP80q3AMDVkDGprxhW2DtsMOaxVKd3hY9363LWhck6wMQvGVTMozA9hW9uSatDXnfkUcfJoRYdvUJog3joLfiqMGsWaocyklOZl%2B0wygIoI5DpvrFxwNn%2B48ITNxCzNWzeYHRHUniGrhhwZq2lf%2BCH1nNCbfDBlO1RmWj%2FLrB49%2BKoyddNZlJWOSfrqhTixwCcfeCEsu5qnzL%2FPmJgSL5%2BIgUiplp8O%2BAqoKG27dnDMslp2ljnGiSQhLsnnFVaJVBcY1TvLg4vs3QaCK7xH083FNQozMV5RMVrbgiVokN1i9u0%2FCboSnzodFiIoEReWIAfh8LvUJ6x90KPrJUZI%2FwGXNMVfgDy9A6m7d%2BD5FuyraE%2BIJqbRR5xgATBSZdZuP0h99ZFJ0TW6GoSglcbQfXN3M7tFUIh8V8eSEpKpQ2bkJFXVltBiySJ%2BSoRB1SPh5%2Beeeqd%2FhXjTYVgXs1Z87LB5qcijGQZE8yLMpIzW%2B%2Fu5DR9csA%2B3kfYCJUgPE7RaP3SyS7biugnZkgrCVd7y9Cc7l7myTxwwHn3%2B29AhVLf5%2FBXHRTD0bFnATp7Qc6Vg3qmAuh2aeczhidu3mikEVYc%2FHPgfuBzELVfOwvkc0Yu8nNdiaWxh6X7urfRDKjm3rA%2FTCVkNDDBjqkAbEgFwDxG8GjFvkrwtIKKZR0YJ5pgR4%2F3rrg1m5ipHGnqFJxCVCCojpWiwqSuEeO%2FI8TXEQeKJ4wU09QVtqzqYQiu2JSGMMTiTPMznsjoH9SeSGgHigxW7%2FP09xeDsegQ3wB5XO4jyR6MtCZU1npoxpP1ce9otTz0vvrVkVSMDNrYvvK5Bhf2NfX7kp1RLoQNwnb73n2K68EkfgLXHrxHIkh%2Bsu3&X-Amz-Signature=6595c823e980dafe88eb29573eb7760f10a851ab1f0fbde54cdec6e6446223d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXRKO3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5iSIjvXxQyChL%2FM5clD4JFEcfqNyICRg7oxFjtJKRIAIhAKKsHUuhggCtkccXtcQO4cTJOwP11V2V1qo3yuERxDYxKv8DCBwQABoMNjM3NDIzMTgzODA1IgzmenAVUdQ0UpGvP80q3AMDVkDGprxhW2DtsMOaxVKd3hY9363LWhck6wMQvGVTMozA9hW9uSatDXnfkUcfJoRYdvUJog3joLfiqMGsWaocyklOZl%2B0wygIoI5DpvrFxwNn%2B48ITNxCzNWzeYHRHUniGrhhwZq2lf%2BCH1nNCbfDBlO1RmWj%2FLrB49%2BKoyddNZlJWOSfrqhTixwCcfeCEsu5qnzL%2FPmJgSL5%2BIgUiplp8O%2BAqoKG27dnDMslp2ljnGiSQhLsnnFVaJVBcY1TvLg4vs3QaCK7xH083FNQozMV5RMVrbgiVokN1i9u0%2FCboSnzodFiIoEReWIAfh8LvUJ6x90KPrJUZI%2FwGXNMVfgDy9A6m7d%2BD5FuyraE%2BIJqbRR5xgATBSZdZuP0h99ZFJ0TW6GoSglcbQfXN3M7tFUIh8V8eSEpKpQ2bkJFXVltBiySJ%2BSoRB1SPh5%2Beeeqd%2FhXjTYVgXs1Z87LB5qcijGQZE8yLMpIzW%2B%2Fu5DR9csA%2B3kfYCJUgPE7RaP3SyS7biugnZkgrCVd7y9Cc7l7myTxwwHn3%2B29AhVLf5%2FBXHRTD0bFnATp7Qc6Vg3qmAuh2aeczhidu3mikEVYc%2FHPgfuBzELVfOwvkc0Yu8nNdiaWxh6X7urfRDKjm3rA%2FTCVkNDDBjqkAbEgFwDxG8GjFvkrwtIKKZR0YJ5pgR4%2F3rrg1m5ipHGnqFJxCVCCojpWiwqSuEeO%2FI8TXEQeKJ4wU09QVtqzqYQiu2JSGMMTiTPMznsjoH9SeSGgHigxW7%2FP09xeDsegQ3wB5XO4jyR6MtCZU1npoxpP1ce9otTz0vvrVkVSMDNrYvvK5Bhf2NfX7kp1RLoQNwnb73n2K68EkfgLXHrxHIkh%2Bsu3&X-Amz-Signature=8ce1093e2973876884bdba54141f6685e297945944cd0be819e3f04b4109cb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXRKO3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5iSIjvXxQyChL%2FM5clD4JFEcfqNyICRg7oxFjtJKRIAIhAKKsHUuhggCtkccXtcQO4cTJOwP11V2V1qo3yuERxDYxKv8DCBwQABoMNjM3NDIzMTgzODA1IgzmenAVUdQ0UpGvP80q3AMDVkDGprxhW2DtsMOaxVKd3hY9363LWhck6wMQvGVTMozA9hW9uSatDXnfkUcfJoRYdvUJog3joLfiqMGsWaocyklOZl%2B0wygIoI5DpvrFxwNn%2B48ITNxCzNWzeYHRHUniGrhhwZq2lf%2BCH1nNCbfDBlO1RmWj%2FLrB49%2BKoyddNZlJWOSfrqhTixwCcfeCEsu5qnzL%2FPmJgSL5%2BIgUiplp8O%2BAqoKG27dnDMslp2ljnGiSQhLsnnFVaJVBcY1TvLg4vs3QaCK7xH083FNQozMV5RMVrbgiVokN1i9u0%2FCboSnzodFiIoEReWIAfh8LvUJ6x90KPrJUZI%2FwGXNMVfgDy9A6m7d%2BD5FuyraE%2BIJqbRR5xgATBSZdZuP0h99ZFJ0TW6GoSglcbQfXN3M7tFUIh8V8eSEpKpQ2bkJFXVltBiySJ%2BSoRB1SPh5%2Beeeqd%2FhXjTYVgXs1Z87LB5qcijGQZE8yLMpIzW%2B%2Fu5DR9csA%2B3kfYCJUgPE7RaP3SyS7biugnZkgrCVd7y9Cc7l7myTxwwHn3%2B29AhVLf5%2FBXHRTD0bFnATp7Qc6Vg3qmAuh2aeczhidu3mikEVYc%2FHPgfuBzELVfOwvkc0Yu8nNdiaWxh6X7urfRDKjm3rA%2FTCVkNDDBjqkAbEgFwDxG8GjFvkrwtIKKZR0YJ5pgR4%2F3rrg1m5ipHGnqFJxCVCCojpWiwqSuEeO%2FI8TXEQeKJ4wU09QVtqzqYQiu2JSGMMTiTPMznsjoH9SeSGgHigxW7%2FP09xeDsegQ3wB5XO4jyR6MtCZU1npoxpP1ce9otTz0vvrVkVSMDNrYvvK5Bhf2NfX7kp1RLoQNwnb73n2K68EkfgLXHrxHIkh%2Bsu3&X-Amz-Signature=95a3b8d914c9b47bbee241467085375b51b06dce31629d6c3c21a143a484349b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXRKO3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5iSIjvXxQyChL%2FM5clD4JFEcfqNyICRg7oxFjtJKRIAIhAKKsHUuhggCtkccXtcQO4cTJOwP11V2V1qo3yuERxDYxKv8DCBwQABoMNjM3NDIzMTgzODA1IgzmenAVUdQ0UpGvP80q3AMDVkDGprxhW2DtsMOaxVKd3hY9363LWhck6wMQvGVTMozA9hW9uSatDXnfkUcfJoRYdvUJog3joLfiqMGsWaocyklOZl%2B0wygIoI5DpvrFxwNn%2B48ITNxCzNWzeYHRHUniGrhhwZq2lf%2BCH1nNCbfDBlO1RmWj%2FLrB49%2BKoyddNZlJWOSfrqhTixwCcfeCEsu5qnzL%2FPmJgSL5%2BIgUiplp8O%2BAqoKG27dnDMslp2ljnGiSQhLsnnFVaJVBcY1TvLg4vs3QaCK7xH083FNQozMV5RMVrbgiVokN1i9u0%2FCboSnzodFiIoEReWIAfh8LvUJ6x90KPrJUZI%2FwGXNMVfgDy9A6m7d%2BD5FuyraE%2BIJqbRR5xgATBSZdZuP0h99ZFJ0TW6GoSglcbQfXN3M7tFUIh8V8eSEpKpQ2bkJFXVltBiySJ%2BSoRB1SPh5%2Beeeqd%2FhXjTYVgXs1Z87LB5qcijGQZE8yLMpIzW%2B%2Fu5DR9csA%2B3kfYCJUgPE7RaP3SyS7biugnZkgrCVd7y9Cc7l7myTxwwHn3%2B29AhVLf5%2FBXHRTD0bFnATp7Qc6Vg3qmAuh2aeczhidu3mikEVYc%2FHPgfuBzELVfOwvkc0Yu8nNdiaWxh6X7urfRDKjm3rA%2FTCVkNDDBjqkAbEgFwDxG8GjFvkrwtIKKZR0YJ5pgR4%2F3rrg1m5ipHGnqFJxCVCCojpWiwqSuEeO%2FI8TXEQeKJ4wU09QVtqzqYQiu2JSGMMTiTPMznsjoH9SeSGgHigxW7%2FP09xeDsegQ3wB5XO4jyR6MtCZU1npoxpP1ce9otTz0vvrVkVSMDNrYvvK5Bhf2NfX7kp1RLoQNwnb73n2K68EkfgLXHrxHIkh%2Bsu3&X-Amz-Signature=24daa8521095e4d1aff9ecdf8bc56e67d5a47c000d88b6c077f42f07e4d90543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXRKO3A%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD5iSIjvXxQyChL%2FM5clD4JFEcfqNyICRg7oxFjtJKRIAIhAKKsHUuhggCtkccXtcQO4cTJOwP11V2V1qo3yuERxDYxKv8DCBwQABoMNjM3NDIzMTgzODA1IgzmenAVUdQ0UpGvP80q3AMDVkDGprxhW2DtsMOaxVKd3hY9363LWhck6wMQvGVTMozA9hW9uSatDXnfkUcfJoRYdvUJog3joLfiqMGsWaocyklOZl%2B0wygIoI5DpvrFxwNn%2B48ITNxCzNWzeYHRHUniGrhhwZq2lf%2BCH1nNCbfDBlO1RmWj%2FLrB49%2BKoyddNZlJWOSfrqhTixwCcfeCEsu5qnzL%2FPmJgSL5%2BIgUiplp8O%2BAqoKG27dnDMslp2ljnGiSQhLsnnFVaJVBcY1TvLg4vs3QaCK7xH083FNQozMV5RMVrbgiVokN1i9u0%2FCboSnzodFiIoEReWIAfh8LvUJ6x90KPrJUZI%2FwGXNMVfgDy9A6m7d%2BD5FuyraE%2BIJqbRR5xgATBSZdZuP0h99ZFJ0TW6GoSglcbQfXN3M7tFUIh8V8eSEpKpQ2bkJFXVltBiySJ%2BSoRB1SPh5%2Beeeqd%2FhXjTYVgXs1Z87LB5qcijGQZE8yLMpIzW%2B%2Fu5DR9csA%2B3kfYCJUgPE7RaP3SyS7biugnZkgrCVd7y9Cc7l7myTxwwHn3%2B29AhVLf5%2FBXHRTD0bFnATp7Qc6Vg3qmAuh2aeczhidu3mikEVYc%2FHPgfuBzELVfOwvkc0Yu8nNdiaWxh6X7urfRDKjm3rA%2FTCVkNDDBjqkAbEgFwDxG8GjFvkrwtIKKZR0YJ5pgR4%2F3rrg1m5ipHGnqFJxCVCCojpWiwqSuEeO%2FI8TXEQeKJ4wU09QVtqzqYQiu2JSGMMTiTPMznsjoH9SeSGgHigxW7%2FP09xeDsegQ3wB5XO4jyR6MtCZU1npoxpP1ce9otTz0vvrVkVSMDNrYvvK5Bhf2NfX7kp1RLoQNwnb73n2K68EkfgLXHrxHIkh%2Bsu3&X-Amz-Signature=cf7745a037bec86fee16f2a33638a838abf7932c7d3d66df1716fbfe743713e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
