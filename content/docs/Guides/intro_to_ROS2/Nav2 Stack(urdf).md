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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7YBM2K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE3FuGJTSSlGugMsX4MbbFKDd4%2FtulrkPQpPjIdvFSWAiAyp%2FORosGuDVzCcUmmAgA%2Fv0AKlZpSFHGKnAiLG0uIeCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41%2FqZHPTwbnnwmvnKtwD1VLh9KeCwEOLDN7pp8v2NCTzpxDoYR0Eri2JJJNprtfuZAoiSWJGfeIHt%2FHgJBqUtTmzD6zn%2Fd1DhdiqKdxWnaz8rz9bLkn2AD9wgqrmGZDdTzmWg94DOrdVTlQmG81g1g9jhUQbEGrc2QXCIpIgofQywvg4j4toaPNNcbduWzLQSqo03PK892pP1WRWV%2FGJ0SVZc6Rw4gdxFe87IMXHpgSBvvXVXTUeaxoSXKywBnzZWgOtqLxGwvJsx8nqRy%2BSvtwlJpx3VMYJX3Gq2LbsAF6MgeoQysrAESPK5ewAHOn2ocbiT6bKAim7zYvAFynZXz39vOqBqmVeh6sgJMtlWwNRMuXkNufL91A%2FmPYDe1DeRgsfd149LEqf9ABcstj5akNRBkcbR3gXkwxpK8VeTbNI4tjpbdE%2BKmmu9zg4cTFwfjv3FVthp3tSD0t5fipnlTSUMNSlDJHlkkUUxy6b3BdQcLJNMjXD01NGOZ4r8QoPsWyIt%2FuAdHdtCacwKigQm21m3I4pbYz5%2FaihS7EMstUug%2BDGYE8UHt9C8p2iMMZMf6TMRQnWqeih5NkCPWXB7gAL%2Fig8ZMYWatGXoj%2FhC4RRF%2FooUVRUcwTrUgAd7CeORuaTol%2FlMIqlSaow8f3avQY6pgGzYy15aREWxXE4pHR1M9YZJMP23J9VKOEdJkjhZXORxMuDp%2BmQ0JD%2FSSa4qK2jPqzuzfhevwDuV9Wfk%2BUFXfe%2FkbL0yM3P1GX49lReyYfq%2BwrNuXOrLEepGkJyZ8xXaoUjvfJoxxEJRqQonj0RNlAhLRE%2Fr6KKCwWGSiwmJpnO6glNnPQeIelM%2FTtvEIuuzOkx1zQMQ7aqxOWCzsjJJcVikT6v0pcY&X-Amz-Signature=e2619b13062474d2f5bd2b55f00a7f6632c4c888e68b4241d9985f683b0d777f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7YBM2K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE3FuGJTSSlGugMsX4MbbFKDd4%2FtulrkPQpPjIdvFSWAiAyp%2FORosGuDVzCcUmmAgA%2Fv0AKlZpSFHGKnAiLG0uIeCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41%2FqZHPTwbnnwmvnKtwD1VLh9KeCwEOLDN7pp8v2NCTzpxDoYR0Eri2JJJNprtfuZAoiSWJGfeIHt%2FHgJBqUtTmzD6zn%2Fd1DhdiqKdxWnaz8rz9bLkn2AD9wgqrmGZDdTzmWg94DOrdVTlQmG81g1g9jhUQbEGrc2QXCIpIgofQywvg4j4toaPNNcbduWzLQSqo03PK892pP1WRWV%2FGJ0SVZc6Rw4gdxFe87IMXHpgSBvvXVXTUeaxoSXKywBnzZWgOtqLxGwvJsx8nqRy%2BSvtwlJpx3VMYJX3Gq2LbsAF6MgeoQysrAESPK5ewAHOn2ocbiT6bKAim7zYvAFynZXz39vOqBqmVeh6sgJMtlWwNRMuXkNufL91A%2FmPYDe1DeRgsfd149LEqf9ABcstj5akNRBkcbR3gXkwxpK8VeTbNI4tjpbdE%2BKmmu9zg4cTFwfjv3FVthp3tSD0t5fipnlTSUMNSlDJHlkkUUxy6b3BdQcLJNMjXD01NGOZ4r8QoPsWyIt%2FuAdHdtCacwKigQm21m3I4pbYz5%2FaihS7EMstUug%2BDGYE8UHt9C8p2iMMZMf6TMRQnWqeih5NkCPWXB7gAL%2Fig8ZMYWatGXoj%2FhC4RRF%2FooUVRUcwTrUgAd7CeORuaTol%2FlMIqlSaow8f3avQY6pgGzYy15aREWxXE4pHR1M9YZJMP23J9VKOEdJkjhZXORxMuDp%2BmQ0JD%2FSSa4qK2jPqzuzfhevwDuV9Wfk%2BUFXfe%2FkbL0yM3P1GX49lReyYfq%2BwrNuXOrLEepGkJyZ8xXaoUjvfJoxxEJRqQonj0RNlAhLRE%2Fr6KKCwWGSiwmJpnO6glNnPQeIelM%2FTtvEIuuzOkx1zQMQ7aqxOWCzsjJJcVikT6v0pcY&X-Amz-Signature=16befa92338d6905a16a73ddd0bd5ec3b3c9c3ab6ba4b4e6f835394cbca25340&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7YBM2K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE3FuGJTSSlGugMsX4MbbFKDd4%2FtulrkPQpPjIdvFSWAiAyp%2FORosGuDVzCcUmmAgA%2Fv0AKlZpSFHGKnAiLG0uIeCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41%2FqZHPTwbnnwmvnKtwD1VLh9KeCwEOLDN7pp8v2NCTzpxDoYR0Eri2JJJNprtfuZAoiSWJGfeIHt%2FHgJBqUtTmzD6zn%2Fd1DhdiqKdxWnaz8rz9bLkn2AD9wgqrmGZDdTzmWg94DOrdVTlQmG81g1g9jhUQbEGrc2QXCIpIgofQywvg4j4toaPNNcbduWzLQSqo03PK892pP1WRWV%2FGJ0SVZc6Rw4gdxFe87IMXHpgSBvvXVXTUeaxoSXKywBnzZWgOtqLxGwvJsx8nqRy%2BSvtwlJpx3VMYJX3Gq2LbsAF6MgeoQysrAESPK5ewAHOn2ocbiT6bKAim7zYvAFynZXz39vOqBqmVeh6sgJMtlWwNRMuXkNufL91A%2FmPYDe1DeRgsfd149LEqf9ABcstj5akNRBkcbR3gXkwxpK8VeTbNI4tjpbdE%2BKmmu9zg4cTFwfjv3FVthp3tSD0t5fipnlTSUMNSlDJHlkkUUxy6b3BdQcLJNMjXD01NGOZ4r8QoPsWyIt%2FuAdHdtCacwKigQm21m3I4pbYz5%2FaihS7EMstUug%2BDGYE8UHt9C8p2iMMZMf6TMRQnWqeih5NkCPWXB7gAL%2Fig8ZMYWatGXoj%2FhC4RRF%2FooUVRUcwTrUgAd7CeORuaTol%2FlMIqlSaow8f3avQY6pgGzYy15aREWxXE4pHR1M9YZJMP23J9VKOEdJkjhZXORxMuDp%2BmQ0JD%2FSSa4qK2jPqzuzfhevwDuV9Wfk%2BUFXfe%2FkbL0yM3P1GX49lReyYfq%2BwrNuXOrLEepGkJyZ8xXaoUjvfJoxxEJRqQonj0RNlAhLRE%2Fr6KKCwWGSiwmJpnO6glNnPQeIelM%2FTtvEIuuzOkx1zQMQ7aqxOWCzsjJJcVikT6v0pcY&X-Amz-Signature=666b9d0b131467e1eb3a93726f12646d4546b97f93a3d5022e16c8c8a112b28c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7YBM2K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE3FuGJTSSlGugMsX4MbbFKDd4%2FtulrkPQpPjIdvFSWAiAyp%2FORosGuDVzCcUmmAgA%2Fv0AKlZpSFHGKnAiLG0uIeCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41%2FqZHPTwbnnwmvnKtwD1VLh9KeCwEOLDN7pp8v2NCTzpxDoYR0Eri2JJJNprtfuZAoiSWJGfeIHt%2FHgJBqUtTmzD6zn%2Fd1DhdiqKdxWnaz8rz9bLkn2AD9wgqrmGZDdTzmWg94DOrdVTlQmG81g1g9jhUQbEGrc2QXCIpIgofQywvg4j4toaPNNcbduWzLQSqo03PK892pP1WRWV%2FGJ0SVZc6Rw4gdxFe87IMXHpgSBvvXVXTUeaxoSXKywBnzZWgOtqLxGwvJsx8nqRy%2BSvtwlJpx3VMYJX3Gq2LbsAF6MgeoQysrAESPK5ewAHOn2ocbiT6bKAim7zYvAFynZXz39vOqBqmVeh6sgJMtlWwNRMuXkNufL91A%2FmPYDe1DeRgsfd149LEqf9ABcstj5akNRBkcbR3gXkwxpK8VeTbNI4tjpbdE%2BKmmu9zg4cTFwfjv3FVthp3tSD0t5fipnlTSUMNSlDJHlkkUUxy6b3BdQcLJNMjXD01NGOZ4r8QoPsWyIt%2FuAdHdtCacwKigQm21m3I4pbYz5%2FaihS7EMstUug%2BDGYE8UHt9C8p2iMMZMf6TMRQnWqeih5NkCPWXB7gAL%2Fig8ZMYWatGXoj%2FhC4RRF%2FooUVRUcwTrUgAd7CeORuaTol%2FlMIqlSaow8f3avQY6pgGzYy15aREWxXE4pHR1M9YZJMP23J9VKOEdJkjhZXORxMuDp%2BmQ0JD%2FSSa4qK2jPqzuzfhevwDuV9Wfk%2BUFXfe%2FkbL0yM3P1GX49lReyYfq%2BwrNuXOrLEepGkJyZ8xXaoUjvfJoxxEJRqQonj0RNlAhLRE%2Fr6KKCwWGSiwmJpnO6glNnPQeIelM%2FTtvEIuuzOkx1zQMQ7aqxOWCzsjJJcVikT6v0pcY&X-Amz-Signature=f96d53a5265b86f762d44414065cdfb21059e1f0d02008900ae9c3e6672a8fca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7YBM2K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE3FuGJTSSlGugMsX4MbbFKDd4%2FtulrkPQpPjIdvFSWAiAyp%2FORosGuDVzCcUmmAgA%2Fv0AKlZpSFHGKnAiLG0uIeCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41%2FqZHPTwbnnwmvnKtwD1VLh9KeCwEOLDN7pp8v2NCTzpxDoYR0Eri2JJJNprtfuZAoiSWJGfeIHt%2FHgJBqUtTmzD6zn%2Fd1DhdiqKdxWnaz8rz9bLkn2AD9wgqrmGZDdTzmWg94DOrdVTlQmG81g1g9jhUQbEGrc2QXCIpIgofQywvg4j4toaPNNcbduWzLQSqo03PK892pP1WRWV%2FGJ0SVZc6Rw4gdxFe87IMXHpgSBvvXVXTUeaxoSXKywBnzZWgOtqLxGwvJsx8nqRy%2BSvtwlJpx3VMYJX3Gq2LbsAF6MgeoQysrAESPK5ewAHOn2ocbiT6bKAim7zYvAFynZXz39vOqBqmVeh6sgJMtlWwNRMuXkNufL91A%2FmPYDe1DeRgsfd149LEqf9ABcstj5akNRBkcbR3gXkwxpK8VeTbNI4tjpbdE%2BKmmu9zg4cTFwfjv3FVthp3tSD0t5fipnlTSUMNSlDJHlkkUUxy6b3BdQcLJNMjXD01NGOZ4r8QoPsWyIt%2FuAdHdtCacwKigQm21m3I4pbYz5%2FaihS7EMstUug%2BDGYE8UHt9C8p2iMMZMf6TMRQnWqeih5NkCPWXB7gAL%2Fig8ZMYWatGXoj%2FhC4RRF%2FooUVRUcwTrUgAd7CeORuaTol%2FlMIqlSaow8f3avQY6pgGzYy15aREWxXE4pHR1M9YZJMP23J9VKOEdJkjhZXORxMuDp%2BmQ0JD%2FSSa4qK2jPqzuzfhevwDuV9Wfk%2BUFXfe%2FkbL0yM3P1GX49lReyYfq%2BwrNuXOrLEepGkJyZ8xXaoUjvfJoxxEJRqQonj0RNlAhLRE%2Fr6KKCwWGSiwmJpnO6glNnPQeIelM%2FTtvEIuuzOkx1zQMQ7aqxOWCzsjJJcVikT6v0pcY&X-Amz-Signature=f87a3fe1358bb1940a07a5c5aff2556f1a8f125cca702073a53bc3024010de0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH7YBM2K%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE3FuGJTSSlGugMsX4MbbFKDd4%2FtulrkPQpPjIdvFSWAiAyp%2FORosGuDVzCcUmmAgA%2Fv0AKlZpSFHGKnAiLG0uIeCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41%2FqZHPTwbnnwmvnKtwD1VLh9KeCwEOLDN7pp8v2NCTzpxDoYR0Eri2JJJNprtfuZAoiSWJGfeIHt%2FHgJBqUtTmzD6zn%2Fd1DhdiqKdxWnaz8rz9bLkn2AD9wgqrmGZDdTzmWg94DOrdVTlQmG81g1g9jhUQbEGrc2QXCIpIgofQywvg4j4toaPNNcbduWzLQSqo03PK892pP1WRWV%2FGJ0SVZc6Rw4gdxFe87IMXHpgSBvvXVXTUeaxoSXKywBnzZWgOtqLxGwvJsx8nqRy%2BSvtwlJpx3VMYJX3Gq2LbsAF6MgeoQysrAESPK5ewAHOn2ocbiT6bKAim7zYvAFynZXz39vOqBqmVeh6sgJMtlWwNRMuXkNufL91A%2FmPYDe1DeRgsfd149LEqf9ABcstj5akNRBkcbR3gXkwxpK8VeTbNI4tjpbdE%2BKmmu9zg4cTFwfjv3FVthp3tSD0t5fipnlTSUMNSlDJHlkkUUxy6b3BdQcLJNMjXD01NGOZ4r8QoPsWyIt%2FuAdHdtCacwKigQm21m3I4pbYz5%2FaihS7EMstUug%2BDGYE8UHt9C8p2iMMZMf6TMRQnWqeih5NkCPWXB7gAL%2Fig8ZMYWatGXoj%2FhC4RRF%2FooUVRUcwTrUgAd7CeORuaTol%2FlMIqlSaow8f3avQY6pgGzYy15aREWxXE4pHR1M9YZJMP23J9VKOEdJkjhZXORxMuDp%2BmQ0JD%2FSSa4qK2jPqzuzfhevwDuV9Wfk%2BUFXfe%2FkbL0yM3P1GX49lReyYfq%2BwrNuXOrLEepGkJyZ8xXaoUjvfJoxxEJRqQonj0RNlAhLRE%2Fr6KKCwWGSiwmJpnO6glNnPQeIelM%2FTtvEIuuzOkx1zQMQ7aqxOWCzsjJJcVikT6v0pcY&X-Amz-Signature=e8f53e45d3a1c62e4c10659d7db6111fb10bc73017d0cd21852e987f91aa88a8&X-Amz-SignedHeaders=host&x-id=GetObject)
