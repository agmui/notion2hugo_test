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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXH5NJ4%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCfBZzfDc8Isa5Igj%2BSCwkrKlNqN4xWWLONexZA%2FPRkvwIgbdqv9V3l1amoV1xi05VwD4g9M3N53oH3G13drPVuGmEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMC49liTRwEVlRQgircAyfD4AR%2BBUcMm%2BE2zUzvAGhMXtvJBvkffQWO6S9BGdGJt1OGpBv6xWxOy%2BGgfF3oznSw4fJ6Ei4OX1nBYNedplnwsIoKiMTGZGxxI62ppJj15t1hbFkjYADVVNL%2FObGpjOkWeYSQcc7RQT1FKZw8Fh1MK77NlfB0VSTp4gh06zKIVrv9i%2BKDEzH0qUs3p%2Bjq8kcpahxozwE2x8WRiSluLzDz1aAUC7cvf9QnFtxn3nFTlbFp%2FU3mVjWp3gW8VKY4bCsJ8ABbP2r0bPOC6mx%2Fqlb0mgzDjET8VYuIFqm%2Bg8fM01d9YhD%2FKqF7VtrBOKr%2B323WodPNCko7yFL582o%2FRIExhcKEVr8qCuUtK7CeCYC%2FWevcE%2BBzzZRqFkrTPxd1EgFuA93iPj0JOOm%2BcePjg8%2BqDwL44Imxm3eMnjSlVfUK6pgh2LIocfoRIBm99xoJiIi9zQrFlBqFAfMpFz1UJWsT2pcXfQQ49cDLgq7hraGAawRVzRaZNTr2kg98SwLkwXZjQ2mwt4PKVep212h0dR%2FDaYN%2B6PAr4%2FaqB4IUHQloA2nORouU%2B8OieRuxtYWLOy0EgW%2FXGSjjZQa35KSXaFfzOahT3vVYp8BK6KbGgqEH5WxJjJN5AewEiVkCMIqHnb0GOqUBIHU2SaRZp2p9I5itsqAj5mnyuRYvcxCMRTq3YyXBc3zH32UMqEhE%2BXHF44xmWAaCOYTfQjMRIv%2FYQ1rLaFxhhVcV8%2FZ5Y%2BF7iLAq1mPzxgo3vFWcpLQi6V0%2FvLgZ6FMIrIwrSIJSj4UzA6WUokNSKfFmMNNoL%2FWAljduaq7tSUBOZ1Dkqmtt8mtvVCcBoq%2Fq1okblotXUd4opbp4HbeaTmVcFcBL&X-Amz-Signature=04d95db596204c1cdc6fa779d017591582a2d0a1794af4f1f0021ba9b9fcd688&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXH5NJ4%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCfBZzfDc8Isa5Igj%2BSCwkrKlNqN4xWWLONexZA%2FPRkvwIgbdqv9V3l1amoV1xi05VwD4g9M3N53oH3G13drPVuGmEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMC49liTRwEVlRQgircAyfD4AR%2BBUcMm%2BE2zUzvAGhMXtvJBvkffQWO6S9BGdGJt1OGpBv6xWxOy%2BGgfF3oznSw4fJ6Ei4OX1nBYNedplnwsIoKiMTGZGxxI62ppJj15t1hbFkjYADVVNL%2FObGpjOkWeYSQcc7RQT1FKZw8Fh1MK77NlfB0VSTp4gh06zKIVrv9i%2BKDEzH0qUs3p%2Bjq8kcpahxozwE2x8WRiSluLzDz1aAUC7cvf9QnFtxn3nFTlbFp%2FU3mVjWp3gW8VKY4bCsJ8ABbP2r0bPOC6mx%2Fqlb0mgzDjET8VYuIFqm%2Bg8fM01d9YhD%2FKqF7VtrBOKr%2B323WodPNCko7yFL582o%2FRIExhcKEVr8qCuUtK7CeCYC%2FWevcE%2BBzzZRqFkrTPxd1EgFuA93iPj0JOOm%2BcePjg8%2BqDwL44Imxm3eMnjSlVfUK6pgh2LIocfoRIBm99xoJiIi9zQrFlBqFAfMpFz1UJWsT2pcXfQQ49cDLgq7hraGAawRVzRaZNTr2kg98SwLkwXZjQ2mwt4PKVep212h0dR%2FDaYN%2B6PAr4%2FaqB4IUHQloA2nORouU%2B8OieRuxtYWLOy0EgW%2FXGSjjZQa35KSXaFfzOahT3vVYp8BK6KbGgqEH5WxJjJN5AewEiVkCMIqHnb0GOqUBIHU2SaRZp2p9I5itsqAj5mnyuRYvcxCMRTq3YyXBc3zH32UMqEhE%2BXHF44xmWAaCOYTfQjMRIv%2FYQ1rLaFxhhVcV8%2FZ5Y%2BF7iLAq1mPzxgo3vFWcpLQi6V0%2FvLgZ6FMIrIwrSIJSj4UzA6WUokNSKfFmMNNoL%2FWAljduaq7tSUBOZ1Dkqmtt8mtvVCcBoq%2Fq1okblotXUd4opbp4HbeaTmVcFcBL&X-Amz-Signature=c8cbac25c27def0828a2fb8c6332578d35c23cbb5dd6aba3fb973bab13c369d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXH5NJ4%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCfBZzfDc8Isa5Igj%2BSCwkrKlNqN4xWWLONexZA%2FPRkvwIgbdqv9V3l1amoV1xi05VwD4g9M3N53oH3G13drPVuGmEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMC49liTRwEVlRQgircAyfD4AR%2BBUcMm%2BE2zUzvAGhMXtvJBvkffQWO6S9BGdGJt1OGpBv6xWxOy%2BGgfF3oznSw4fJ6Ei4OX1nBYNedplnwsIoKiMTGZGxxI62ppJj15t1hbFkjYADVVNL%2FObGpjOkWeYSQcc7RQT1FKZw8Fh1MK77NlfB0VSTp4gh06zKIVrv9i%2BKDEzH0qUs3p%2Bjq8kcpahxozwE2x8WRiSluLzDz1aAUC7cvf9QnFtxn3nFTlbFp%2FU3mVjWp3gW8VKY4bCsJ8ABbP2r0bPOC6mx%2Fqlb0mgzDjET8VYuIFqm%2Bg8fM01d9YhD%2FKqF7VtrBOKr%2B323WodPNCko7yFL582o%2FRIExhcKEVr8qCuUtK7CeCYC%2FWevcE%2BBzzZRqFkrTPxd1EgFuA93iPj0JOOm%2BcePjg8%2BqDwL44Imxm3eMnjSlVfUK6pgh2LIocfoRIBm99xoJiIi9zQrFlBqFAfMpFz1UJWsT2pcXfQQ49cDLgq7hraGAawRVzRaZNTr2kg98SwLkwXZjQ2mwt4PKVep212h0dR%2FDaYN%2B6PAr4%2FaqB4IUHQloA2nORouU%2B8OieRuxtYWLOy0EgW%2FXGSjjZQa35KSXaFfzOahT3vVYp8BK6KbGgqEH5WxJjJN5AewEiVkCMIqHnb0GOqUBIHU2SaRZp2p9I5itsqAj5mnyuRYvcxCMRTq3YyXBc3zH32UMqEhE%2BXHF44xmWAaCOYTfQjMRIv%2FYQ1rLaFxhhVcV8%2FZ5Y%2BF7iLAq1mPzxgo3vFWcpLQi6V0%2FvLgZ6FMIrIwrSIJSj4UzA6WUokNSKfFmMNNoL%2FWAljduaq7tSUBOZ1Dkqmtt8mtvVCcBoq%2Fq1okblotXUd4opbp4HbeaTmVcFcBL&X-Amz-Signature=6d1a17233bf9dbf8ac3e8e3a444b7d7d88183c47d02d7eeb335632dcc19b711a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXH5NJ4%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCfBZzfDc8Isa5Igj%2BSCwkrKlNqN4xWWLONexZA%2FPRkvwIgbdqv9V3l1amoV1xi05VwD4g9M3N53oH3G13drPVuGmEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMC49liTRwEVlRQgircAyfD4AR%2BBUcMm%2BE2zUzvAGhMXtvJBvkffQWO6S9BGdGJt1OGpBv6xWxOy%2BGgfF3oznSw4fJ6Ei4OX1nBYNedplnwsIoKiMTGZGxxI62ppJj15t1hbFkjYADVVNL%2FObGpjOkWeYSQcc7RQT1FKZw8Fh1MK77NlfB0VSTp4gh06zKIVrv9i%2BKDEzH0qUs3p%2Bjq8kcpahxozwE2x8WRiSluLzDz1aAUC7cvf9QnFtxn3nFTlbFp%2FU3mVjWp3gW8VKY4bCsJ8ABbP2r0bPOC6mx%2Fqlb0mgzDjET8VYuIFqm%2Bg8fM01d9YhD%2FKqF7VtrBOKr%2B323WodPNCko7yFL582o%2FRIExhcKEVr8qCuUtK7CeCYC%2FWevcE%2BBzzZRqFkrTPxd1EgFuA93iPj0JOOm%2BcePjg8%2BqDwL44Imxm3eMnjSlVfUK6pgh2LIocfoRIBm99xoJiIi9zQrFlBqFAfMpFz1UJWsT2pcXfQQ49cDLgq7hraGAawRVzRaZNTr2kg98SwLkwXZjQ2mwt4PKVep212h0dR%2FDaYN%2B6PAr4%2FaqB4IUHQloA2nORouU%2B8OieRuxtYWLOy0EgW%2FXGSjjZQa35KSXaFfzOahT3vVYp8BK6KbGgqEH5WxJjJN5AewEiVkCMIqHnb0GOqUBIHU2SaRZp2p9I5itsqAj5mnyuRYvcxCMRTq3YyXBc3zH32UMqEhE%2BXHF44xmWAaCOYTfQjMRIv%2FYQ1rLaFxhhVcV8%2FZ5Y%2BF7iLAq1mPzxgo3vFWcpLQi6V0%2FvLgZ6FMIrIwrSIJSj4UzA6WUokNSKfFmMNNoL%2FWAljduaq7tSUBOZ1Dkqmtt8mtvVCcBoq%2Fq1okblotXUd4opbp4HbeaTmVcFcBL&X-Amz-Signature=4c8e4fc547d0a65b92aff1f88ea5f7f31ab2c6351996a42e0ce9e0d6f7560f27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXH5NJ4%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCfBZzfDc8Isa5Igj%2BSCwkrKlNqN4xWWLONexZA%2FPRkvwIgbdqv9V3l1amoV1xi05VwD4g9M3N53oH3G13drPVuGmEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMC49liTRwEVlRQgircAyfD4AR%2BBUcMm%2BE2zUzvAGhMXtvJBvkffQWO6S9BGdGJt1OGpBv6xWxOy%2BGgfF3oznSw4fJ6Ei4OX1nBYNedplnwsIoKiMTGZGxxI62ppJj15t1hbFkjYADVVNL%2FObGpjOkWeYSQcc7RQT1FKZw8Fh1MK77NlfB0VSTp4gh06zKIVrv9i%2BKDEzH0qUs3p%2Bjq8kcpahxozwE2x8WRiSluLzDz1aAUC7cvf9QnFtxn3nFTlbFp%2FU3mVjWp3gW8VKY4bCsJ8ABbP2r0bPOC6mx%2Fqlb0mgzDjET8VYuIFqm%2Bg8fM01d9YhD%2FKqF7VtrBOKr%2B323WodPNCko7yFL582o%2FRIExhcKEVr8qCuUtK7CeCYC%2FWevcE%2BBzzZRqFkrTPxd1EgFuA93iPj0JOOm%2BcePjg8%2BqDwL44Imxm3eMnjSlVfUK6pgh2LIocfoRIBm99xoJiIi9zQrFlBqFAfMpFz1UJWsT2pcXfQQ49cDLgq7hraGAawRVzRaZNTr2kg98SwLkwXZjQ2mwt4PKVep212h0dR%2FDaYN%2B6PAr4%2FaqB4IUHQloA2nORouU%2B8OieRuxtYWLOy0EgW%2FXGSjjZQa35KSXaFfzOahT3vVYp8BK6KbGgqEH5WxJjJN5AewEiVkCMIqHnb0GOqUBIHU2SaRZp2p9I5itsqAj5mnyuRYvcxCMRTq3YyXBc3zH32UMqEhE%2BXHF44xmWAaCOYTfQjMRIv%2FYQ1rLaFxhhVcV8%2FZ5Y%2BF7iLAq1mPzxgo3vFWcpLQi6V0%2FvLgZ6FMIrIwrSIJSj4UzA6WUokNSKfFmMNNoL%2FWAljduaq7tSUBOZ1Dkqmtt8mtvVCcBoq%2Fq1okblotXUd4opbp4HbeaTmVcFcBL&X-Amz-Signature=78b7a29637a65b114f8facd2e12f0cfe211ad04d5b82893be1a1b81795183e86&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLXH5NJ4%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCfBZzfDc8Isa5Igj%2BSCwkrKlNqN4xWWLONexZA%2FPRkvwIgbdqv9V3l1amoV1xi05VwD4g9M3N53oH3G13drPVuGmEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMC49liTRwEVlRQgircAyfD4AR%2BBUcMm%2BE2zUzvAGhMXtvJBvkffQWO6S9BGdGJt1OGpBv6xWxOy%2BGgfF3oznSw4fJ6Ei4OX1nBYNedplnwsIoKiMTGZGxxI62ppJj15t1hbFkjYADVVNL%2FObGpjOkWeYSQcc7RQT1FKZw8Fh1MK77NlfB0VSTp4gh06zKIVrv9i%2BKDEzH0qUs3p%2Bjq8kcpahxozwE2x8WRiSluLzDz1aAUC7cvf9QnFtxn3nFTlbFp%2FU3mVjWp3gW8VKY4bCsJ8ABbP2r0bPOC6mx%2Fqlb0mgzDjET8VYuIFqm%2Bg8fM01d9YhD%2FKqF7VtrBOKr%2B323WodPNCko7yFL582o%2FRIExhcKEVr8qCuUtK7CeCYC%2FWevcE%2BBzzZRqFkrTPxd1EgFuA93iPj0JOOm%2BcePjg8%2BqDwL44Imxm3eMnjSlVfUK6pgh2LIocfoRIBm99xoJiIi9zQrFlBqFAfMpFz1UJWsT2pcXfQQ49cDLgq7hraGAawRVzRaZNTr2kg98SwLkwXZjQ2mwt4PKVep212h0dR%2FDaYN%2B6PAr4%2FaqB4IUHQloA2nORouU%2B8OieRuxtYWLOy0EgW%2FXGSjjZQa35KSXaFfzOahT3vVYp8BK6KbGgqEH5WxJjJN5AewEiVkCMIqHnb0GOqUBIHU2SaRZp2p9I5itsqAj5mnyuRYvcxCMRTq3YyXBc3zH32UMqEhE%2BXHF44xmWAaCOYTfQjMRIv%2FYQ1rLaFxhhVcV8%2FZ5Y%2BF7iLAq1mPzxgo3vFWcpLQi6V0%2FvLgZ6FMIrIwrSIJSj4UzA6WUokNSKfFmMNNoL%2FWAljduaq7tSUBOZ1Dkqmtt8mtvVCcBoq%2Fq1okblotXUd4opbp4HbeaTmVcFcBL&X-Amz-Signature=8209d970f64704e5b71aa4ea1861e2eae1d86d9be51987c27995d2600c160c68&X-Amz-SignedHeaders=host&x-id=GetObject)
