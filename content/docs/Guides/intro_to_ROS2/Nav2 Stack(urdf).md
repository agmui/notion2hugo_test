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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOUOBTJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQl60qUHpOSpDdtZPJbyV%2FVW06Hv7sw%2B5OVTAUN4glQIgPN%2F%2FASgxE%2B8DLCUtqUyeTV4BKP7kWPw22lySMLcAL70qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG0P7cfNHpZgTkavyrcA7aGF7eRFi%2B8BZ889veCQlNkHBz50%2FltONLSxlSUTrOB4lfGWsB%2BW2LVt8QMmLG1inYn%2Fr18TiSVtqF9hnCuJh19z8yWMMXe%2F18J2vrNgAjiV5UsN%2BvY9NnUx2nckTPuAAavEbyMtPvbs6I9pIBkQo%2BSkHDlrWoDWN6PHiL5AxuY8C1XqiA1JMSCmV%2F%2Fzpy%2F5vmHc3eyScfFV37VtQOBu8GCS%2BHktMr8H5yl%2FRSY%2B%2BZrGlCTj9OgmlNhol4gKcEPCcOYxMvN233Fmqmo%2Ba0gEv%2Bnz6mmRPnlRMzI7Pn59LbCn0hUBIPzoE68FhE%2F%2B4TSzl7j7f62R6vJdcm128s0jYcFd7Iv5g2wkxPLrSHTHQ9DWeIfNMoY8PHs17EoKe6cRTpMziunfyogxcUcRn5L6tWWRloB5i222e7ArvzJSYSm5a26RRzmiGygg%2B%2BbPq%2B8fpLDPgVnJfxW4MojSnYMqSMVvl1GO3aNHLH3fsW9XPtpWQSCv59xtYeorc5L1xAlOny1QVKLJJ812kCgwKpDVjgk6TcKzQDByUuBTg7DEy2fUkmep2RGSx23sP0AidBcnU3Dzr1wK4rP9VA%2Bt2KXtgqrW0NAirdLYY5ERvpDkMiGkvTHxiAKo6Fy0bW8MN6z0MIGOqUB0%2FLRF%2B4XVvH0tuqlsI6i%2FwdpZHWZWfFy3FmU1YFhDM7WJpZMiVAvrlIPmq0SAnu6wCApBuIjvlRv7B5VncCjU6HHXu9i6uhseDcYJd2gCJQz6PoufNeQb8HoSAO2xbJI44qmPtzylAhyS0OIJkl6NUFk77i7jrxqEebnIauFhbPuEusYHANO4OQdeXEKh1MwxhtGhIv7iA2QD3BCMsc9xA8JYQWc&X-Amz-Signature=b991aec7d353a35f174db2123df1ce56a50dd59029ad97bb0380823f206cd3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOUOBTJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQl60qUHpOSpDdtZPJbyV%2FVW06Hv7sw%2B5OVTAUN4glQIgPN%2F%2FASgxE%2B8DLCUtqUyeTV4BKP7kWPw22lySMLcAL70qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG0P7cfNHpZgTkavyrcA7aGF7eRFi%2B8BZ889veCQlNkHBz50%2FltONLSxlSUTrOB4lfGWsB%2BW2LVt8QMmLG1inYn%2Fr18TiSVtqF9hnCuJh19z8yWMMXe%2F18J2vrNgAjiV5UsN%2BvY9NnUx2nckTPuAAavEbyMtPvbs6I9pIBkQo%2BSkHDlrWoDWN6PHiL5AxuY8C1XqiA1JMSCmV%2F%2Fzpy%2F5vmHc3eyScfFV37VtQOBu8GCS%2BHktMr8H5yl%2FRSY%2B%2BZrGlCTj9OgmlNhol4gKcEPCcOYxMvN233Fmqmo%2Ba0gEv%2Bnz6mmRPnlRMzI7Pn59LbCn0hUBIPzoE68FhE%2F%2B4TSzl7j7f62R6vJdcm128s0jYcFd7Iv5g2wkxPLrSHTHQ9DWeIfNMoY8PHs17EoKe6cRTpMziunfyogxcUcRn5L6tWWRloB5i222e7ArvzJSYSm5a26RRzmiGygg%2B%2BbPq%2B8fpLDPgVnJfxW4MojSnYMqSMVvl1GO3aNHLH3fsW9XPtpWQSCv59xtYeorc5L1xAlOny1QVKLJJ812kCgwKpDVjgk6TcKzQDByUuBTg7DEy2fUkmep2RGSx23sP0AidBcnU3Dzr1wK4rP9VA%2Bt2KXtgqrW0NAirdLYY5ERvpDkMiGkvTHxiAKo6Fy0bW8MN6z0MIGOqUB0%2FLRF%2B4XVvH0tuqlsI6i%2FwdpZHWZWfFy3FmU1YFhDM7WJpZMiVAvrlIPmq0SAnu6wCApBuIjvlRv7B5VncCjU6HHXu9i6uhseDcYJd2gCJQz6PoufNeQb8HoSAO2xbJI44qmPtzylAhyS0OIJkl6NUFk77i7jrxqEebnIauFhbPuEusYHANO4OQdeXEKh1MwxhtGhIv7iA2QD3BCMsc9xA8JYQWc&X-Amz-Signature=8a6c4bf1165c0dbb8f64b2f581ea27f42580424fd11c82c4f4424342cf27f8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOUOBTJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQl60qUHpOSpDdtZPJbyV%2FVW06Hv7sw%2B5OVTAUN4glQIgPN%2F%2FASgxE%2B8DLCUtqUyeTV4BKP7kWPw22lySMLcAL70qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG0P7cfNHpZgTkavyrcA7aGF7eRFi%2B8BZ889veCQlNkHBz50%2FltONLSxlSUTrOB4lfGWsB%2BW2LVt8QMmLG1inYn%2Fr18TiSVtqF9hnCuJh19z8yWMMXe%2F18J2vrNgAjiV5UsN%2BvY9NnUx2nckTPuAAavEbyMtPvbs6I9pIBkQo%2BSkHDlrWoDWN6PHiL5AxuY8C1XqiA1JMSCmV%2F%2Fzpy%2F5vmHc3eyScfFV37VtQOBu8GCS%2BHktMr8H5yl%2FRSY%2B%2BZrGlCTj9OgmlNhol4gKcEPCcOYxMvN233Fmqmo%2Ba0gEv%2Bnz6mmRPnlRMzI7Pn59LbCn0hUBIPzoE68FhE%2F%2B4TSzl7j7f62R6vJdcm128s0jYcFd7Iv5g2wkxPLrSHTHQ9DWeIfNMoY8PHs17EoKe6cRTpMziunfyogxcUcRn5L6tWWRloB5i222e7ArvzJSYSm5a26RRzmiGygg%2B%2BbPq%2B8fpLDPgVnJfxW4MojSnYMqSMVvl1GO3aNHLH3fsW9XPtpWQSCv59xtYeorc5L1xAlOny1QVKLJJ812kCgwKpDVjgk6TcKzQDByUuBTg7DEy2fUkmep2RGSx23sP0AidBcnU3Dzr1wK4rP9VA%2Bt2KXtgqrW0NAirdLYY5ERvpDkMiGkvTHxiAKo6Fy0bW8MN6z0MIGOqUB0%2FLRF%2B4XVvH0tuqlsI6i%2FwdpZHWZWfFy3FmU1YFhDM7WJpZMiVAvrlIPmq0SAnu6wCApBuIjvlRv7B5VncCjU6HHXu9i6uhseDcYJd2gCJQz6PoufNeQb8HoSAO2xbJI44qmPtzylAhyS0OIJkl6NUFk77i7jrxqEebnIauFhbPuEusYHANO4OQdeXEKh1MwxhtGhIv7iA2QD3BCMsc9xA8JYQWc&X-Amz-Signature=c5782f536ae0f0ea1ec1527807bef5a7583b71828b5caece38c3752a4c5e7b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOUOBTJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQl60qUHpOSpDdtZPJbyV%2FVW06Hv7sw%2B5OVTAUN4glQIgPN%2F%2FASgxE%2B8DLCUtqUyeTV4BKP7kWPw22lySMLcAL70qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG0P7cfNHpZgTkavyrcA7aGF7eRFi%2B8BZ889veCQlNkHBz50%2FltONLSxlSUTrOB4lfGWsB%2BW2LVt8QMmLG1inYn%2Fr18TiSVtqF9hnCuJh19z8yWMMXe%2F18J2vrNgAjiV5UsN%2BvY9NnUx2nckTPuAAavEbyMtPvbs6I9pIBkQo%2BSkHDlrWoDWN6PHiL5AxuY8C1XqiA1JMSCmV%2F%2Fzpy%2F5vmHc3eyScfFV37VtQOBu8GCS%2BHktMr8H5yl%2FRSY%2B%2BZrGlCTj9OgmlNhol4gKcEPCcOYxMvN233Fmqmo%2Ba0gEv%2Bnz6mmRPnlRMzI7Pn59LbCn0hUBIPzoE68FhE%2F%2B4TSzl7j7f62R6vJdcm128s0jYcFd7Iv5g2wkxPLrSHTHQ9DWeIfNMoY8PHs17EoKe6cRTpMziunfyogxcUcRn5L6tWWRloB5i222e7ArvzJSYSm5a26RRzmiGygg%2B%2BbPq%2B8fpLDPgVnJfxW4MojSnYMqSMVvl1GO3aNHLH3fsW9XPtpWQSCv59xtYeorc5L1xAlOny1QVKLJJ812kCgwKpDVjgk6TcKzQDByUuBTg7DEy2fUkmep2RGSx23sP0AidBcnU3Dzr1wK4rP9VA%2Bt2KXtgqrW0NAirdLYY5ERvpDkMiGkvTHxiAKo6Fy0bW8MN6z0MIGOqUB0%2FLRF%2B4XVvH0tuqlsI6i%2FwdpZHWZWfFy3FmU1YFhDM7WJpZMiVAvrlIPmq0SAnu6wCApBuIjvlRv7B5VncCjU6HHXu9i6uhseDcYJd2gCJQz6PoufNeQb8HoSAO2xbJI44qmPtzylAhyS0OIJkl6NUFk77i7jrxqEebnIauFhbPuEusYHANO4OQdeXEKh1MwxhtGhIv7iA2QD3BCMsc9xA8JYQWc&X-Amz-Signature=3b57a72dc77bf8a918e47a87390e953f85c9bfbfc2df717fa4be7fcbd5f9b17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOUOBTJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQl60qUHpOSpDdtZPJbyV%2FVW06Hv7sw%2B5OVTAUN4glQIgPN%2F%2FASgxE%2B8DLCUtqUyeTV4BKP7kWPw22lySMLcAL70qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG0P7cfNHpZgTkavyrcA7aGF7eRFi%2B8BZ889veCQlNkHBz50%2FltONLSxlSUTrOB4lfGWsB%2BW2LVt8QMmLG1inYn%2Fr18TiSVtqF9hnCuJh19z8yWMMXe%2F18J2vrNgAjiV5UsN%2BvY9NnUx2nckTPuAAavEbyMtPvbs6I9pIBkQo%2BSkHDlrWoDWN6PHiL5AxuY8C1XqiA1JMSCmV%2F%2Fzpy%2F5vmHc3eyScfFV37VtQOBu8GCS%2BHktMr8H5yl%2FRSY%2B%2BZrGlCTj9OgmlNhol4gKcEPCcOYxMvN233Fmqmo%2Ba0gEv%2Bnz6mmRPnlRMzI7Pn59LbCn0hUBIPzoE68FhE%2F%2B4TSzl7j7f62R6vJdcm128s0jYcFd7Iv5g2wkxPLrSHTHQ9DWeIfNMoY8PHs17EoKe6cRTpMziunfyogxcUcRn5L6tWWRloB5i222e7ArvzJSYSm5a26RRzmiGygg%2B%2BbPq%2B8fpLDPgVnJfxW4MojSnYMqSMVvl1GO3aNHLH3fsW9XPtpWQSCv59xtYeorc5L1xAlOny1QVKLJJ812kCgwKpDVjgk6TcKzQDByUuBTg7DEy2fUkmep2RGSx23sP0AidBcnU3Dzr1wK4rP9VA%2Bt2KXtgqrW0NAirdLYY5ERvpDkMiGkvTHxiAKo6Fy0bW8MN6z0MIGOqUB0%2FLRF%2B4XVvH0tuqlsI6i%2FwdpZHWZWfFy3FmU1YFhDM7WJpZMiVAvrlIPmq0SAnu6wCApBuIjvlRv7B5VncCjU6HHXu9i6uhseDcYJd2gCJQz6PoufNeQb8HoSAO2xbJI44qmPtzylAhyS0OIJkl6NUFk77i7jrxqEebnIauFhbPuEusYHANO4OQdeXEKh1MwxhtGhIv7iA2QD3BCMsc9xA8JYQWc&X-Amz-Signature=dd7c4587ff907a051136360c90003a4132b02ed161a94a9ce099292320da653f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEOUOBTJ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQl60qUHpOSpDdtZPJbyV%2FVW06Hv7sw%2B5OVTAUN4glQIgPN%2F%2FASgxE%2B8DLCUtqUyeTV4BKP7kWPw22lySMLcAL70qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIG0P7cfNHpZgTkavyrcA7aGF7eRFi%2B8BZ889veCQlNkHBz50%2FltONLSxlSUTrOB4lfGWsB%2BW2LVt8QMmLG1inYn%2Fr18TiSVtqF9hnCuJh19z8yWMMXe%2F18J2vrNgAjiV5UsN%2BvY9NnUx2nckTPuAAavEbyMtPvbs6I9pIBkQo%2BSkHDlrWoDWN6PHiL5AxuY8C1XqiA1JMSCmV%2F%2Fzpy%2F5vmHc3eyScfFV37VtQOBu8GCS%2BHktMr8H5yl%2FRSY%2B%2BZrGlCTj9OgmlNhol4gKcEPCcOYxMvN233Fmqmo%2Ba0gEv%2Bnz6mmRPnlRMzI7Pn59LbCn0hUBIPzoE68FhE%2F%2B4TSzl7j7f62R6vJdcm128s0jYcFd7Iv5g2wkxPLrSHTHQ9DWeIfNMoY8PHs17EoKe6cRTpMziunfyogxcUcRn5L6tWWRloB5i222e7ArvzJSYSm5a26RRzmiGygg%2B%2BbPq%2B8fpLDPgVnJfxW4MojSnYMqSMVvl1GO3aNHLH3fsW9XPtpWQSCv59xtYeorc5L1xAlOny1QVKLJJ812kCgwKpDVjgk6TcKzQDByUuBTg7DEy2fUkmep2RGSx23sP0AidBcnU3Dzr1wK4rP9VA%2Bt2KXtgqrW0NAirdLYY5ERvpDkMiGkvTHxiAKo6Fy0bW8MN6z0MIGOqUB0%2FLRF%2B4XVvH0tuqlsI6i%2FwdpZHWZWfFy3FmU1YFhDM7WJpZMiVAvrlIPmq0SAnu6wCApBuIjvlRv7B5VncCjU6HHXu9i6uhseDcYJd2gCJQz6PoufNeQb8HoSAO2xbJI44qmPtzylAhyS0OIJkl6NUFk77i7jrxqEebnIauFhbPuEusYHANO4OQdeXEKh1MwxhtGhIv7iA2QD3BCMsc9xA8JYQWc&X-Amz-Signature=a8095be944c95a05cc15910411d307776ae4a1354b6e7676cce1aee708304ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
