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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5YYC55%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1NMdUi8OSjOeDUvggkTdpSUs1aUD3Cmj9gwjurwRKIQIgJ946K4bxZJoT3KbLo8VDhP5QG%2B2eIlwBvhDs2xYQgLsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbQrp4fM0SJxmdpZircA6oPOkKy7T%2BPkWqWIoDOHacLHQ7u%2BfTAwBN%2BPVVJy93avv3Xgtgnz4J2QXst7ClyGuIDVnztM4yk2lONNz7rvnBuJNmO%2B5Qm15uCqtkpYiWGWiwU26AyseCemlu1wnCk1FYV00IrJQABw1XPsVkA22BRFrKuDuSPlVXnbdcgTztL%2BalkJWeZHvoK1JCWk15Ljw4sQw%2Fqm73LXSJoUP%2FD7SgPv7sFxqsowbpAviZQzRvhxocMSvbvUtUUQudkoJBwQ%2BlSkH5mzZndi%2B6QetinmpmnZKZZ2gCrEgQVIu08dSRwGpxY3rnV2cbIQ8SmZ%2FEROgYTYKdv6x0pcrgfAQW8peMwpb1LGN3a0TEN88y4lc%2FvurUN9EOyv3T0wlVurFOLCuDMbJ%2BhS1MktWnmPcLRwtCSjUjWGX4qS%2Bv2moa%2Bp1xKLnD2ICHIlJbbJosEUnYuEdjvZ21swnOzVkJ3RED5Opq1RCvfZ%2BVhIiBKi1tbe7cD%2BYgIjPsnRIdj6MrUhwri6Lguk8W%2FQa2IcvcJhEgQ2wWxcNseRUQJ1NACpA%2F%2BTbJBQbJDq6G6Nc5Hop16bFQG4MdPx9QCyKW5rfms0eD7qK%2FLlYGel1Q808JODkIXCXGgOMtrt9n%2Bx4NFFTNLMMDnr70GOqUBe3x03l40Kr4KQVnvybvPxGdPH%2B5accD6plo3kZgwXA08eMLQJjxfZJv%2FXYtV4Q3tKWw597sxlyl0vCcuSgeFHfYHLPZgGcpWxSLn80GdSDh4scwTZZKHbgcL54aXpybDkgT5GoSHFbOKclWvOY60yaRZVbJsvX7v4cB5pHdnYLffDNwK9P0HzoW4ca6jBGym4iyU7OfA%2BoqI2HhKorjo4IRLMfkZ&X-Amz-Signature=a340df4fd3a59f2d05fa2062dfc9356f6b63e9bb09bc76220714f7da15f61514&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5YYC55%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1NMdUi8OSjOeDUvggkTdpSUs1aUD3Cmj9gwjurwRKIQIgJ946K4bxZJoT3KbLo8VDhP5QG%2B2eIlwBvhDs2xYQgLsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbQrp4fM0SJxmdpZircA6oPOkKy7T%2BPkWqWIoDOHacLHQ7u%2BfTAwBN%2BPVVJy93avv3Xgtgnz4J2QXst7ClyGuIDVnztM4yk2lONNz7rvnBuJNmO%2B5Qm15uCqtkpYiWGWiwU26AyseCemlu1wnCk1FYV00IrJQABw1XPsVkA22BRFrKuDuSPlVXnbdcgTztL%2BalkJWeZHvoK1JCWk15Ljw4sQw%2Fqm73LXSJoUP%2FD7SgPv7sFxqsowbpAviZQzRvhxocMSvbvUtUUQudkoJBwQ%2BlSkH5mzZndi%2B6QetinmpmnZKZZ2gCrEgQVIu08dSRwGpxY3rnV2cbIQ8SmZ%2FEROgYTYKdv6x0pcrgfAQW8peMwpb1LGN3a0TEN88y4lc%2FvurUN9EOyv3T0wlVurFOLCuDMbJ%2BhS1MktWnmPcLRwtCSjUjWGX4qS%2Bv2moa%2Bp1xKLnD2ICHIlJbbJosEUnYuEdjvZ21swnOzVkJ3RED5Opq1RCvfZ%2BVhIiBKi1tbe7cD%2BYgIjPsnRIdj6MrUhwri6Lguk8W%2FQa2IcvcJhEgQ2wWxcNseRUQJ1NACpA%2F%2BTbJBQbJDq6G6Nc5Hop16bFQG4MdPx9QCyKW5rfms0eD7qK%2FLlYGel1Q808JODkIXCXGgOMtrt9n%2Bx4NFFTNLMMDnr70GOqUBe3x03l40Kr4KQVnvybvPxGdPH%2B5accD6plo3kZgwXA08eMLQJjxfZJv%2FXYtV4Q3tKWw597sxlyl0vCcuSgeFHfYHLPZgGcpWxSLn80GdSDh4scwTZZKHbgcL54aXpybDkgT5GoSHFbOKclWvOY60yaRZVbJsvX7v4cB5pHdnYLffDNwK9P0HzoW4ca6jBGym4iyU7OfA%2BoqI2HhKorjo4IRLMfkZ&X-Amz-Signature=2f0bf03ff4c4d0fbe12eb0e35e9c57bf32d3276ef2bb4adc043e25afec0b62d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5YYC55%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1NMdUi8OSjOeDUvggkTdpSUs1aUD3Cmj9gwjurwRKIQIgJ946K4bxZJoT3KbLo8VDhP5QG%2B2eIlwBvhDs2xYQgLsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbQrp4fM0SJxmdpZircA6oPOkKy7T%2BPkWqWIoDOHacLHQ7u%2BfTAwBN%2BPVVJy93avv3Xgtgnz4J2QXst7ClyGuIDVnztM4yk2lONNz7rvnBuJNmO%2B5Qm15uCqtkpYiWGWiwU26AyseCemlu1wnCk1FYV00IrJQABw1XPsVkA22BRFrKuDuSPlVXnbdcgTztL%2BalkJWeZHvoK1JCWk15Ljw4sQw%2Fqm73LXSJoUP%2FD7SgPv7sFxqsowbpAviZQzRvhxocMSvbvUtUUQudkoJBwQ%2BlSkH5mzZndi%2B6QetinmpmnZKZZ2gCrEgQVIu08dSRwGpxY3rnV2cbIQ8SmZ%2FEROgYTYKdv6x0pcrgfAQW8peMwpb1LGN3a0TEN88y4lc%2FvurUN9EOyv3T0wlVurFOLCuDMbJ%2BhS1MktWnmPcLRwtCSjUjWGX4qS%2Bv2moa%2Bp1xKLnD2ICHIlJbbJosEUnYuEdjvZ21swnOzVkJ3RED5Opq1RCvfZ%2BVhIiBKi1tbe7cD%2BYgIjPsnRIdj6MrUhwri6Lguk8W%2FQa2IcvcJhEgQ2wWxcNseRUQJ1NACpA%2F%2BTbJBQbJDq6G6Nc5Hop16bFQG4MdPx9QCyKW5rfms0eD7qK%2FLlYGel1Q808JODkIXCXGgOMtrt9n%2Bx4NFFTNLMMDnr70GOqUBe3x03l40Kr4KQVnvybvPxGdPH%2B5accD6plo3kZgwXA08eMLQJjxfZJv%2FXYtV4Q3tKWw597sxlyl0vCcuSgeFHfYHLPZgGcpWxSLn80GdSDh4scwTZZKHbgcL54aXpybDkgT5GoSHFbOKclWvOY60yaRZVbJsvX7v4cB5pHdnYLffDNwK9P0HzoW4ca6jBGym4iyU7OfA%2BoqI2HhKorjo4IRLMfkZ&X-Amz-Signature=73631db6927def9865771bf455be2bef45ad7dbb9b5b6eada2d410da1a4d2ede&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5YYC55%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1NMdUi8OSjOeDUvggkTdpSUs1aUD3Cmj9gwjurwRKIQIgJ946K4bxZJoT3KbLo8VDhP5QG%2B2eIlwBvhDs2xYQgLsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbQrp4fM0SJxmdpZircA6oPOkKy7T%2BPkWqWIoDOHacLHQ7u%2BfTAwBN%2BPVVJy93avv3Xgtgnz4J2QXst7ClyGuIDVnztM4yk2lONNz7rvnBuJNmO%2B5Qm15uCqtkpYiWGWiwU26AyseCemlu1wnCk1FYV00IrJQABw1XPsVkA22BRFrKuDuSPlVXnbdcgTztL%2BalkJWeZHvoK1JCWk15Ljw4sQw%2Fqm73LXSJoUP%2FD7SgPv7sFxqsowbpAviZQzRvhxocMSvbvUtUUQudkoJBwQ%2BlSkH5mzZndi%2B6QetinmpmnZKZZ2gCrEgQVIu08dSRwGpxY3rnV2cbIQ8SmZ%2FEROgYTYKdv6x0pcrgfAQW8peMwpb1LGN3a0TEN88y4lc%2FvurUN9EOyv3T0wlVurFOLCuDMbJ%2BhS1MktWnmPcLRwtCSjUjWGX4qS%2Bv2moa%2Bp1xKLnD2ICHIlJbbJosEUnYuEdjvZ21swnOzVkJ3RED5Opq1RCvfZ%2BVhIiBKi1tbe7cD%2BYgIjPsnRIdj6MrUhwri6Lguk8W%2FQa2IcvcJhEgQ2wWxcNseRUQJ1NACpA%2F%2BTbJBQbJDq6G6Nc5Hop16bFQG4MdPx9QCyKW5rfms0eD7qK%2FLlYGel1Q808JODkIXCXGgOMtrt9n%2Bx4NFFTNLMMDnr70GOqUBe3x03l40Kr4KQVnvybvPxGdPH%2B5accD6plo3kZgwXA08eMLQJjxfZJv%2FXYtV4Q3tKWw597sxlyl0vCcuSgeFHfYHLPZgGcpWxSLn80GdSDh4scwTZZKHbgcL54aXpybDkgT5GoSHFbOKclWvOY60yaRZVbJsvX7v4cB5pHdnYLffDNwK9P0HzoW4ca6jBGym4iyU7OfA%2BoqI2HhKorjo4IRLMfkZ&X-Amz-Signature=d21bf51226932376c1d63cd0f63958deb5ae66d44a8cf1fd7e9b9f92e940db5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5YYC55%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1NMdUi8OSjOeDUvggkTdpSUs1aUD3Cmj9gwjurwRKIQIgJ946K4bxZJoT3KbLo8VDhP5QG%2B2eIlwBvhDs2xYQgLsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbQrp4fM0SJxmdpZircA6oPOkKy7T%2BPkWqWIoDOHacLHQ7u%2BfTAwBN%2BPVVJy93avv3Xgtgnz4J2QXst7ClyGuIDVnztM4yk2lONNz7rvnBuJNmO%2B5Qm15uCqtkpYiWGWiwU26AyseCemlu1wnCk1FYV00IrJQABw1XPsVkA22BRFrKuDuSPlVXnbdcgTztL%2BalkJWeZHvoK1JCWk15Ljw4sQw%2Fqm73LXSJoUP%2FD7SgPv7sFxqsowbpAviZQzRvhxocMSvbvUtUUQudkoJBwQ%2BlSkH5mzZndi%2B6QetinmpmnZKZZ2gCrEgQVIu08dSRwGpxY3rnV2cbIQ8SmZ%2FEROgYTYKdv6x0pcrgfAQW8peMwpb1LGN3a0TEN88y4lc%2FvurUN9EOyv3T0wlVurFOLCuDMbJ%2BhS1MktWnmPcLRwtCSjUjWGX4qS%2Bv2moa%2Bp1xKLnD2ICHIlJbbJosEUnYuEdjvZ21swnOzVkJ3RED5Opq1RCvfZ%2BVhIiBKi1tbe7cD%2BYgIjPsnRIdj6MrUhwri6Lguk8W%2FQa2IcvcJhEgQ2wWxcNseRUQJ1NACpA%2F%2BTbJBQbJDq6G6Nc5Hop16bFQG4MdPx9QCyKW5rfms0eD7qK%2FLlYGel1Q808JODkIXCXGgOMtrt9n%2Bx4NFFTNLMMDnr70GOqUBe3x03l40Kr4KQVnvybvPxGdPH%2B5accD6plo3kZgwXA08eMLQJjxfZJv%2FXYtV4Q3tKWw597sxlyl0vCcuSgeFHfYHLPZgGcpWxSLn80GdSDh4scwTZZKHbgcL54aXpybDkgT5GoSHFbOKclWvOY60yaRZVbJsvX7v4cB5pHdnYLffDNwK9P0HzoW4ca6jBGym4iyU7OfA%2BoqI2HhKorjo4IRLMfkZ&X-Amz-Signature=ba929c7001a4347d2288402a9d33b16a1ac042b86fcd0a307ff68fd6a507deee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD5YYC55%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T050835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1NMdUi8OSjOeDUvggkTdpSUs1aUD3Cmj9gwjurwRKIQIgJ946K4bxZJoT3KbLo8VDhP5QG%2B2eIlwBvhDs2xYQgLsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbQrp4fM0SJxmdpZircA6oPOkKy7T%2BPkWqWIoDOHacLHQ7u%2BfTAwBN%2BPVVJy93avv3Xgtgnz4J2QXst7ClyGuIDVnztM4yk2lONNz7rvnBuJNmO%2B5Qm15uCqtkpYiWGWiwU26AyseCemlu1wnCk1FYV00IrJQABw1XPsVkA22BRFrKuDuSPlVXnbdcgTztL%2BalkJWeZHvoK1JCWk15Ljw4sQw%2Fqm73LXSJoUP%2FD7SgPv7sFxqsowbpAviZQzRvhxocMSvbvUtUUQudkoJBwQ%2BlSkH5mzZndi%2B6QetinmpmnZKZZ2gCrEgQVIu08dSRwGpxY3rnV2cbIQ8SmZ%2FEROgYTYKdv6x0pcrgfAQW8peMwpb1LGN3a0TEN88y4lc%2FvurUN9EOyv3T0wlVurFOLCuDMbJ%2BhS1MktWnmPcLRwtCSjUjWGX4qS%2Bv2moa%2Bp1xKLnD2ICHIlJbbJosEUnYuEdjvZ21swnOzVkJ3RED5Opq1RCvfZ%2BVhIiBKi1tbe7cD%2BYgIjPsnRIdj6MrUhwri6Lguk8W%2FQa2IcvcJhEgQ2wWxcNseRUQJ1NACpA%2F%2BTbJBQbJDq6G6Nc5Hop16bFQG4MdPx9QCyKW5rfms0eD7qK%2FLlYGel1Q808JODkIXCXGgOMtrt9n%2Bx4NFFTNLMMDnr70GOqUBe3x03l40Kr4KQVnvybvPxGdPH%2B5accD6plo3kZgwXA08eMLQJjxfZJv%2FXYtV4Q3tKWw597sxlyl0vCcuSgeFHfYHLPZgGcpWxSLn80GdSDh4scwTZZKHbgcL54aXpybDkgT5GoSHFbOKclWvOY60yaRZVbJsvX7v4cB5pHdnYLffDNwK9P0HzoW4ca6jBGym4iyU7OfA%2BoqI2HhKorjo4IRLMfkZ&X-Amz-Signature=03d55a9fb55f3e3c8385f3f8cd4972c4d7d1a8835506c25e2d109508649b5474&X-Amz-SignedHeaders=host&x-id=GetObject)
