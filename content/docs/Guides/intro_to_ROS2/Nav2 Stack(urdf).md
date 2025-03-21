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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALTDMI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH6Txn8FIz4SzLqvxbYIKLqsLA9IkGOMY7lu5XV5%2FKzzAiA9i2QsFMiUqo0HSK%2FFC6G6Oqg8O2qBOlyNVZUEu%2BWq8SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt28WHmA480leQJ%2BsKtwDcfUShyCUqNjDIfwWpbycY2Dt%2BCCI6qK7t7q%2FTw1QOecmq2nueyFBFCg34ZX2gan3t01dZdALpdephf3j27x1%2FY%2BParLgoJqDaa3W5r2ZCDmhqL2rDQjdPB6v25FIuQ498hSGQawKT258mlqBfdXlsnFqiGnV6hwAT1o5nlv3RKAqO0cfPv9QrnJYZQfvYMu6W91dNktwNO4fmwrbVBBMX9Jm%2FU9mwdzlDTXH8X%2FEcs5hOlkiJD6Z2AwOhbYkfwzPM7M8txCD3KXwQ3Mf5MtWY5jLkgncxH20murRvF29WfzrCYR93vN9BfOH4lfOasHkwPpeEryRTb8c1LttXOufaeKK%2BBLp2ixlpTqC7FagJNBEhOm4PTqQoqlnWvgG%2BEBViCx88GPU6TihCdrLSoskJub7Em0o9xqq6ACqLXn2KpdAJIOiD4OUWKGEqLW52M5HfRT%2F6G0Pd%2BXLGQidxq6y2VGnMkpxxwhHw2uOFN%2BWV%2BziNH6cS3K6kC4UE1YWWCo5MwGzMj8x4%2FzmHlAdew8W29aZVWzQEYWBtb79b3LutdKE%2Bko1OdHFn%2B%2BOJFm5J%2FlPZ5iMsb6GOYfIXvbOQV%2Fukfa8s0bcwuz5%2FVOpKYKyWnPd%2F3HeCJmP8cmONygwhLr1vgY6pgGAf74YzqJog%2Fu299Ee3BRWlrtiFSdnrLg6lWBGK73WuLNc5PgPpHTlawMxwGad5HMmlb%2F6PcZCSt5KTxbm8o3tAB2mI4lERW27f4St1gIAwMgpfEhhUnfWZpEDxOVTWpop%2BOREqoNLoAWge6hIo5rRMvMxVN6AzgURTE14VfrYZMwbwimFgT20yYxlztmEd9TQJm6k3oo6TvG9gp%2BFR%2FKCB%2B44AcEI&X-Amz-Signature=22c7763a422cd2a2e3692102491740b2b8db947d3394f5a0a4901ad4ad15dfa9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALTDMI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH6Txn8FIz4SzLqvxbYIKLqsLA9IkGOMY7lu5XV5%2FKzzAiA9i2QsFMiUqo0HSK%2FFC6G6Oqg8O2qBOlyNVZUEu%2BWq8SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt28WHmA480leQJ%2BsKtwDcfUShyCUqNjDIfwWpbycY2Dt%2BCCI6qK7t7q%2FTw1QOecmq2nueyFBFCg34ZX2gan3t01dZdALpdephf3j27x1%2FY%2BParLgoJqDaa3W5r2ZCDmhqL2rDQjdPB6v25FIuQ498hSGQawKT258mlqBfdXlsnFqiGnV6hwAT1o5nlv3RKAqO0cfPv9QrnJYZQfvYMu6W91dNktwNO4fmwrbVBBMX9Jm%2FU9mwdzlDTXH8X%2FEcs5hOlkiJD6Z2AwOhbYkfwzPM7M8txCD3KXwQ3Mf5MtWY5jLkgncxH20murRvF29WfzrCYR93vN9BfOH4lfOasHkwPpeEryRTb8c1LttXOufaeKK%2BBLp2ixlpTqC7FagJNBEhOm4PTqQoqlnWvgG%2BEBViCx88GPU6TihCdrLSoskJub7Em0o9xqq6ACqLXn2KpdAJIOiD4OUWKGEqLW52M5HfRT%2F6G0Pd%2BXLGQidxq6y2VGnMkpxxwhHw2uOFN%2BWV%2BziNH6cS3K6kC4UE1YWWCo5MwGzMj8x4%2FzmHlAdew8W29aZVWzQEYWBtb79b3LutdKE%2Bko1OdHFn%2B%2BOJFm5J%2FlPZ5iMsb6GOYfIXvbOQV%2Fukfa8s0bcwuz5%2FVOpKYKyWnPd%2F3HeCJmP8cmONygwhLr1vgY6pgGAf74YzqJog%2Fu299Ee3BRWlrtiFSdnrLg6lWBGK73WuLNc5PgPpHTlawMxwGad5HMmlb%2F6PcZCSt5KTxbm8o3tAB2mI4lERW27f4St1gIAwMgpfEhhUnfWZpEDxOVTWpop%2BOREqoNLoAWge6hIo5rRMvMxVN6AzgURTE14VfrYZMwbwimFgT20yYxlztmEd9TQJm6k3oo6TvG9gp%2BFR%2FKCB%2B44AcEI&X-Amz-Signature=0bf5020956e6d97924c5d4a6261c8c663216d2e7123f1c259ba40ba38d8235ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALTDMI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH6Txn8FIz4SzLqvxbYIKLqsLA9IkGOMY7lu5XV5%2FKzzAiA9i2QsFMiUqo0HSK%2FFC6G6Oqg8O2qBOlyNVZUEu%2BWq8SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt28WHmA480leQJ%2BsKtwDcfUShyCUqNjDIfwWpbycY2Dt%2BCCI6qK7t7q%2FTw1QOecmq2nueyFBFCg34ZX2gan3t01dZdALpdephf3j27x1%2FY%2BParLgoJqDaa3W5r2ZCDmhqL2rDQjdPB6v25FIuQ498hSGQawKT258mlqBfdXlsnFqiGnV6hwAT1o5nlv3RKAqO0cfPv9QrnJYZQfvYMu6W91dNktwNO4fmwrbVBBMX9Jm%2FU9mwdzlDTXH8X%2FEcs5hOlkiJD6Z2AwOhbYkfwzPM7M8txCD3KXwQ3Mf5MtWY5jLkgncxH20murRvF29WfzrCYR93vN9BfOH4lfOasHkwPpeEryRTb8c1LttXOufaeKK%2BBLp2ixlpTqC7FagJNBEhOm4PTqQoqlnWvgG%2BEBViCx88GPU6TihCdrLSoskJub7Em0o9xqq6ACqLXn2KpdAJIOiD4OUWKGEqLW52M5HfRT%2F6G0Pd%2BXLGQidxq6y2VGnMkpxxwhHw2uOFN%2BWV%2BziNH6cS3K6kC4UE1YWWCo5MwGzMj8x4%2FzmHlAdew8W29aZVWzQEYWBtb79b3LutdKE%2Bko1OdHFn%2B%2BOJFm5J%2FlPZ5iMsb6GOYfIXvbOQV%2Fukfa8s0bcwuz5%2FVOpKYKyWnPd%2F3HeCJmP8cmONygwhLr1vgY6pgGAf74YzqJog%2Fu299Ee3BRWlrtiFSdnrLg6lWBGK73WuLNc5PgPpHTlawMxwGad5HMmlb%2F6PcZCSt5KTxbm8o3tAB2mI4lERW27f4St1gIAwMgpfEhhUnfWZpEDxOVTWpop%2BOREqoNLoAWge6hIo5rRMvMxVN6AzgURTE14VfrYZMwbwimFgT20yYxlztmEd9TQJm6k3oo6TvG9gp%2BFR%2FKCB%2B44AcEI&X-Amz-Signature=57cd8b4e3c2adc83e463e996499536eea65ca29a942855b0fb8e1d6ddfd2f3c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALTDMI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH6Txn8FIz4SzLqvxbYIKLqsLA9IkGOMY7lu5XV5%2FKzzAiA9i2QsFMiUqo0HSK%2FFC6G6Oqg8O2qBOlyNVZUEu%2BWq8SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt28WHmA480leQJ%2BsKtwDcfUShyCUqNjDIfwWpbycY2Dt%2BCCI6qK7t7q%2FTw1QOecmq2nueyFBFCg34ZX2gan3t01dZdALpdephf3j27x1%2FY%2BParLgoJqDaa3W5r2ZCDmhqL2rDQjdPB6v25FIuQ498hSGQawKT258mlqBfdXlsnFqiGnV6hwAT1o5nlv3RKAqO0cfPv9QrnJYZQfvYMu6W91dNktwNO4fmwrbVBBMX9Jm%2FU9mwdzlDTXH8X%2FEcs5hOlkiJD6Z2AwOhbYkfwzPM7M8txCD3KXwQ3Mf5MtWY5jLkgncxH20murRvF29WfzrCYR93vN9BfOH4lfOasHkwPpeEryRTb8c1LttXOufaeKK%2BBLp2ixlpTqC7FagJNBEhOm4PTqQoqlnWvgG%2BEBViCx88GPU6TihCdrLSoskJub7Em0o9xqq6ACqLXn2KpdAJIOiD4OUWKGEqLW52M5HfRT%2F6G0Pd%2BXLGQidxq6y2VGnMkpxxwhHw2uOFN%2BWV%2BziNH6cS3K6kC4UE1YWWCo5MwGzMj8x4%2FzmHlAdew8W29aZVWzQEYWBtb79b3LutdKE%2Bko1OdHFn%2B%2BOJFm5J%2FlPZ5iMsb6GOYfIXvbOQV%2Fukfa8s0bcwuz5%2FVOpKYKyWnPd%2F3HeCJmP8cmONygwhLr1vgY6pgGAf74YzqJog%2Fu299Ee3BRWlrtiFSdnrLg6lWBGK73WuLNc5PgPpHTlawMxwGad5HMmlb%2F6PcZCSt5KTxbm8o3tAB2mI4lERW27f4St1gIAwMgpfEhhUnfWZpEDxOVTWpop%2BOREqoNLoAWge6hIo5rRMvMxVN6AzgURTE14VfrYZMwbwimFgT20yYxlztmEd9TQJm6k3oo6TvG9gp%2BFR%2FKCB%2B44AcEI&X-Amz-Signature=8dfab698d5a172bc97decd1b2986292c7935927892ad500635e6224fd2abb52d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALTDMI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH6Txn8FIz4SzLqvxbYIKLqsLA9IkGOMY7lu5XV5%2FKzzAiA9i2QsFMiUqo0HSK%2FFC6G6Oqg8O2qBOlyNVZUEu%2BWq8SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt28WHmA480leQJ%2BsKtwDcfUShyCUqNjDIfwWpbycY2Dt%2BCCI6qK7t7q%2FTw1QOecmq2nueyFBFCg34ZX2gan3t01dZdALpdephf3j27x1%2FY%2BParLgoJqDaa3W5r2ZCDmhqL2rDQjdPB6v25FIuQ498hSGQawKT258mlqBfdXlsnFqiGnV6hwAT1o5nlv3RKAqO0cfPv9QrnJYZQfvYMu6W91dNktwNO4fmwrbVBBMX9Jm%2FU9mwdzlDTXH8X%2FEcs5hOlkiJD6Z2AwOhbYkfwzPM7M8txCD3KXwQ3Mf5MtWY5jLkgncxH20murRvF29WfzrCYR93vN9BfOH4lfOasHkwPpeEryRTb8c1LttXOufaeKK%2BBLp2ixlpTqC7FagJNBEhOm4PTqQoqlnWvgG%2BEBViCx88GPU6TihCdrLSoskJub7Em0o9xqq6ACqLXn2KpdAJIOiD4OUWKGEqLW52M5HfRT%2F6G0Pd%2BXLGQidxq6y2VGnMkpxxwhHw2uOFN%2BWV%2BziNH6cS3K6kC4UE1YWWCo5MwGzMj8x4%2FzmHlAdew8W29aZVWzQEYWBtb79b3LutdKE%2Bko1OdHFn%2B%2BOJFm5J%2FlPZ5iMsb6GOYfIXvbOQV%2Fukfa8s0bcwuz5%2FVOpKYKyWnPd%2F3HeCJmP8cmONygwhLr1vgY6pgGAf74YzqJog%2Fu299Ee3BRWlrtiFSdnrLg6lWBGK73WuLNc5PgPpHTlawMxwGad5HMmlb%2F6PcZCSt5KTxbm8o3tAB2mI4lERW27f4St1gIAwMgpfEhhUnfWZpEDxOVTWpop%2BOREqoNLoAWge6hIo5rRMvMxVN6AzgURTE14VfrYZMwbwimFgT20yYxlztmEd9TQJm6k3oo6TvG9gp%2BFR%2FKCB%2B44AcEI&X-Amz-Signature=626942324bfe021a2b75862114a3daf3c62012ca81f235ded299588bdb62be62&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4ALTDMI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIH6Txn8FIz4SzLqvxbYIKLqsLA9IkGOMY7lu5XV5%2FKzzAiA9i2QsFMiUqo0HSK%2FFC6G6Oqg8O2qBOlyNVZUEu%2BWq8SqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt28WHmA480leQJ%2BsKtwDcfUShyCUqNjDIfwWpbycY2Dt%2BCCI6qK7t7q%2FTw1QOecmq2nueyFBFCg34ZX2gan3t01dZdALpdephf3j27x1%2FY%2BParLgoJqDaa3W5r2ZCDmhqL2rDQjdPB6v25FIuQ498hSGQawKT258mlqBfdXlsnFqiGnV6hwAT1o5nlv3RKAqO0cfPv9QrnJYZQfvYMu6W91dNktwNO4fmwrbVBBMX9Jm%2FU9mwdzlDTXH8X%2FEcs5hOlkiJD6Z2AwOhbYkfwzPM7M8txCD3KXwQ3Mf5MtWY5jLkgncxH20murRvF29WfzrCYR93vN9BfOH4lfOasHkwPpeEryRTb8c1LttXOufaeKK%2BBLp2ixlpTqC7FagJNBEhOm4PTqQoqlnWvgG%2BEBViCx88GPU6TihCdrLSoskJub7Em0o9xqq6ACqLXn2KpdAJIOiD4OUWKGEqLW52M5HfRT%2F6G0Pd%2BXLGQidxq6y2VGnMkpxxwhHw2uOFN%2BWV%2BziNH6cS3K6kC4UE1YWWCo5MwGzMj8x4%2FzmHlAdew8W29aZVWzQEYWBtb79b3LutdKE%2Bko1OdHFn%2B%2BOJFm5J%2FlPZ5iMsb6GOYfIXvbOQV%2Fukfa8s0bcwuz5%2FVOpKYKyWnPd%2F3HeCJmP8cmONygwhLr1vgY6pgGAf74YzqJog%2Fu299Ee3BRWlrtiFSdnrLg6lWBGK73WuLNc5PgPpHTlawMxwGad5HMmlb%2F6PcZCSt5KTxbm8o3tAB2mI4lERW27f4St1gIAwMgpfEhhUnfWZpEDxOVTWpop%2BOREqoNLoAWge6hIo5rRMvMxVN6AzgURTE14VfrYZMwbwimFgT20yYxlztmEd9TQJm6k3oo6TvG9gp%2BFR%2FKCB%2B44AcEI&X-Amz-Signature=d3fccd47619ceae3d5d2e432656daa589dce96e75b06acebd048ac470e4bc37d&X-Amz-SignedHeaders=host&x-id=GetObject)
