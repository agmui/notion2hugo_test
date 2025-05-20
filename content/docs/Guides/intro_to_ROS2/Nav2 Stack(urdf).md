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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZ27DIK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo5kURdG%2FfsUYu2eZ7HZ%2FocMAaOCSCsmJMu9WQI%2BZRVAIhAPQCMLz5xNRbAnkEN%2BUsnjp5%2B64AszoXkG9i4Z6cSEc4KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0DIBYjw6HEAV31oq3ANNpiReidj0xbn0PiYN6lVn1hHpOwcJbnc3fBfoRG7T0BCJee%2FdSHsSaMHyHUqzwF1eOIYeDAaICRQlz49jZ00%2BYoUMY4Ix8bUrkJbyII4EHFa%2Fl94ifiufKghWdLEvFWOVzOnRziDygpdzWOIXtJs7P4zSCBdnLRKrDi3kJfgixHVHvGg5ehfSEhwQaQJY%2Bvx34tS7ZX%2F7SRQpuEmWpOq1iPjT44i4R4hyDc%2Boo2cjl1PxzTvwHO7cNYjtDHwoXHUlWRACNQlinjustySK3BmzsDbA%2FcKeR4GyeRnpfK6fV%2FLZcH3uTs8HxnawOGv9Mb%2FcfAkqFMjdW3IYfxz6Tb2lRxjl7WDjD1Z%2BDFewKDa2vS4DtiYrEafCze0xMPPeNum348r%2B8nJefig3y%2FclufULh3AP9M1T7%2BA%2F%2BJ5V4VNAPJf71lf7dgNtv4f62BsY2Wc%2BbnhqeyBljA13MV3TUbRSDAOvMCtHfgMuNn1mc1ylLfZXV9J%2FVFKQf3KXG6dEjgRip1tyTalsJc4FHzogIIdx%2FMNf%2FIKrVDPNdd0r%2BDqw0MR7mAM00%2BOIlHE4YuCv3ugty0tou7TtQ6F8x8E1Sy9683VgsBTmJSsgg%2BDh5Fu%2FBDUBIFiKbJr5Gs%2BfEzC3s7LBBjqkARjx39FWhy7FbipcceS8mn2R4lzbNMV0BQRgxJDWGnWJRgSFMDp5cIEAQbmN6w3crjqvb5z0sEAzIctZr0%2BDINX2dE9l2rSHVfMixpnqceBlQ05Fk5V3yOVsOYvzRVEpm%2FWdu6wYfN6eqL8aoHWBxZ%2BwkVqKPxeiS60SwGi1gv7SrOkGd1l48S%2B1rBQV206Tmh1J8dx%2F0lrK79TjAkus34yavfZI&X-Amz-Signature=64c7dd7aec5454352669b863aa06f063ff547a87056cc0944d87c1de4565bf5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZ27DIK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo5kURdG%2FfsUYu2eZ7HZ%2FocMAaOCSCsmJMu9WQI%2BZRVAIhAPQCMLz5xNRbAnkEN%2BUsnjp5%2B64AszoXkG9i4Z6cSEc4KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0DIBYjw6HEAV31oq3ANNpiReidj0xbn0PiYN6lVn1hHpOwcJbnc3fBfoRG7T0BCJee%2FdSHsSaMHyHUqzwF1eOIYeDAaICRQlz49jZ00%2BYoUMY4Ix8bUrkJbyII4EHFa%2Fl94ifiufKghWdLEvFWOVzOnRziDygpdzWOIXtJs7P4zSCBdnLRKrDi3kJfgixHVHvGg5ehfSEhwQaQJY%2Bvx34tS7ZX%2F7SRQpuEmWpOq1iPjT44i4R4hyDc%2Boo2cjl1PxzTvwHO7cNYjtDHwoXHUlWRACNQlinjustySK3BmzsDbA%2FcKeR4GyeRnpfK6fV%2FLZcH3uTs8HxnawOGv9Mb%2FcfAkqFMjdW3IYfxz6Tb2lRxjl7WDjD1Z%2BDFewKDa2vS4DtiYrEafCze0xMPPeNum348r%2B8nJefig3y%2FclufULh3AP9M1T7%2BA%2F%2BJ5V4VNAPJf71lf7dgNtv4f62BsY2Wc%2BbnhqeyBljA13MV3TUbRSDAOvMCtHfgMuNn1mc1ylLfZXV9J%2FVFKQf3KXG6dEjgRip1tyTalsJc4FHzogIIdx%2FMNf%2FIKrVDPNdd0r%2BDqw0MR7mAM00%2BOIlHE4YuCv3ugty0tou7TtQ6F8x8E1Sy9683VgsBTmJSsgg%2BDh5Fu%2FBDUBIFiKbJr5Gs%2BfEzC3s7LBBjqkARjx39FWhy7FbipcceS8mn2R4lzbNMV0BQRgxJDWGnWJRgSFMDp5cIEAQbmN6w3crjqvb5z0sEAzIctZr0%2BDINX2dE9l2rSHVfMixpnqceBlQ05Fk5V3yOVsOYvzRVEpm%2FWdu6wYfN6eqL8aoHWBxZ%2BwkVqKPxeiS60SwGi1gv7SrOkGd1l48S%2B1rBQV206Tmh1J8dx%2F0lrK79TjAkus34yavfZI&X-Amz-Signature=7aa864332e28f61ed28b07bd217ec1eeca80f19c6cad21d9fa98222166f3b2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZ27DIK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo5kURdG%2FfsUYu2eZ7HZ%2FocMAaOCSCsmJMu9WQI%2BZRVAIhAPQCMLz5xNRbAnkEN%2BUsnjp5%2B64AszoXkG9i4Z6cSEc4KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0DIBYjw6HEAV31oq3ANNpiReidj0xbn0PiYN6lVn1hHpOwcJbnc3fBfoRG7T0BCJee%2FdSHsSaMHyHUqzwF1eOIYeDAaICRQlz49jZ00%2BYoUMY4Ix8bUrkJbyII4EHFa%2Fl94ifiufKghWdLEvFWOVzOnRziDygpdzWOIXtJs7P4zSCBdnLRKrDi3kJfgixHVHvGg5ehfSEhwQaQJY%2Bvx34tS7ZX%2F7SRQpuEmWpOq1iPjT44i4R4hyDc%2Boo2cjl1PxzTvwHO7cNYjtDHwoXHUlWRACNQlinjustySK3BmzsDbA%2FcKeR4GyeRnpfK6fV%2FLZcH3uTs8HxnawOGv9Mb%2FcfAkqFMjdW3IYfxz6Tb2lRxjl7WDjD1Z%2BDFewKDa2vS4DtiYrEafCze0xMPPeNum348r%2B8nJefig3y%2FclufULh3AP9M1T7%2BA%2F%2BJ5V4VNAPJf71lf7dgNtv4f62BsY2Wc%2BbnhqeyBljA13MV3TUbRSDAOvMCtHfgMuNn1mc1ylLfZXV9J%2FVFKQf3KXG6dEjgRip1tyTalsJc4FHzogIIdx%2FMNf%2FIKrVDPNdd0r%2BDqw0MR7mAM00%2BOIlHE4YuCv3ugty0tou7TtQ6F8x8E1Sy9683VgsBTmJSsgg%2BDh5Fu%2FBDUBIFiKbJr5Gs%2BfEzC3s7LBBjqkARjx39FWhy7FbipcceS8mn2R4lzbNMV0BQRgxJDWGnWJRgSFMDp5cIEAQbmN6w3crjqvb5z0sEAzIctZr0%2BDINX2dE9l2rSHVfMixpnqceBlQ05Fk5V3yOVsOYvzRVEpm%2FWdu6wYfN6eqL8aoHWBxZ%2BwkVqKPxeiS60SwGi1gv7SrOkGd1l48S%2B1rBQV206Tmh1J8dx%2F0lrK79TjAkus34yavfZI&X-Amz-Signature=7b648f8a8e7f7a9d2f7bb33cd3f3f6e5c39ccb668b92ade4d79136981f65b7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZ27DIK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo5kURdG%2FfsUYu2eZ7HZ%2FocMAaOCSCsmJMu9WQI%2BZRVAIhAPQCMLz5xNRbAnkEN%2BUsnjp5%2B64AszoXkG9i4Z6cSEc4KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0DIBYjw6HEAV31oq3ANNpiReidj0xbn0PiYN6lVn1hHpOwcJbnc3fBfoRG7T0BCJee%2FdSHsSaMHyHUqzwF1eOIYeDAaICRQlz49jZ00%2BYoUMY4Ix8bUrkJbyII4EHFa%2Fl94ifiufKghWdLEvFWOVzOnRziDygpdzWOIXtJs7P4zSCBdnLRKrDi3kJfgixHVHvGg5ehfSEhwQaQJY%2Bvx34tS7ZX%2F7SRQpuEmWpOq1iPjT44i4R4hyDc%2Boo2cjl1PxzTvwHO7cNYjtDHwoXHUlWRACNQlinjustySK3BmzsDbA%2FcKeR4GyeRnpfK6fV%2FLZcH3uTs8HxnawOGv9Mb%2FcfAkqFMjdW3IYfxz6Tb2lRxjl7WDjD1Z%2BDFewKDa2vS4DtiYrEafCze0xMPPeNum348r%2B8nJefig3y%2FclufULh3AP9M1T7%2BA%2F%2BJ5V4VNAPJf71lf7dgNtv4f62BsY2Wc%2BbnhqeyBljA13MV3TUbRSDAOvMCtHfgMuNn1mc1ylLfZXV9J%2FVFKQf3KXG6dEjgRip1tyTalsJc4FHzogIIdx%2FMNf%2FIKrVDPNdd0r%2BDqw0MR7mAM00%2BOIlHE4YuCv3ugty0tou7TtQ6F8x8E1Sy9683VgsBTmJSsgg%2BDh5Fu%2FBDUBIFiKbJr5Gs%2BfEzC3s7LBBjqkARjx39FWhy7FbipcceS8mn2R4lzbNMV0BQRgxJDWGnWJRgSFMDp5cIEAQbmN6w3crjqvb5z0sEAzIctZr0%2BDINX2dE9l2rSHVfMixpnqceBlQ05Fk5V3yOVsOYvzRVEpm%2FWdu6wYfN6eqL8aoHWBxZ%2BwkVqKPxeiS60SwGi1gv7SrOkGd1l48S%2B1rBQV206Tmh1J8dx%2F0lrK79TjAkus34yavfZI&X-Amz-Signature=0ac503d17fbfc2f45824c5903eb6ab0c47d77e0ebe52360b6a25c2953364ce2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZ27DIK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo5kURdG%2FfsUYu2eZ7HZ%2FocMAaOCSCsmJMu9WQI%2BZRVAIhAPQCMLz5xNRbAnkEN%2BUsnjp5%2B64AszoXkG9i4Z6cSEc4KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0DIBYjw6HEAV31oq3ANNpiReidj0xbn0PiYN6lVn1hHpOwcJbnc3fBfoRG7T0BCJee%2FdSHsSaMHyHUqzwF1eOIYeDAaICRQlz49jZ00%2BYoUMY4Ix8bUrkJbyII4EHFa%2Fl94ifiufKghWdLEvFWOVzOnRziDygpdzWOIXtJs7P4zSCBdnLRKrDi3kJfgixHVHvGg5ehfSEhwQaQJY%2Bvx34tS7ZX%2F7SRQpuEmWpOq1iPjT44i4R4hyDc%2Boo2cjl1PxzTvwHO7cNYjtDHwoXHUlWRACNQlinjustySK3BmzsDbA%2FcKeR4GyeRnpfK6fV%2FLZcH3uTs8HxnawOGv9Mb%2FcfAkqFMjdW3IYfxz6Tb2lRxjl7WDjD1Z%2BDFewKDa2vS4DtiYrEafCze0xMPPeNum348r%2B8nJefig3y%2FclufULh3AP9M1T7%2BA%2F%2BJ5V4VNAPJf71lf7dgNtv4f62BsY2Wc%2BbnhqeyBljA13MV3TUbRSDAOvMCtHfgMuNn1mc1ylLfZXV9J%2FVFKQf3KXG6dEjgRip1tyTalsJc4FHzogIIdx%2FMNf%2FIKrVDPNdd0r%2BDqw0MR7mAM00%2BOIlHE4YuCv3ugty0tou7TtQ6F8x8E1Sy9683VgsBTmJSsgg%2BDh5Fu%2FBDUBIFiKbJr5Gs%2BfEzC3s7LBBjqkARjx39FWhy7FbipcceS8mn2R4lzbNMV0BQRgxJDWGnWJRgSFMDp5cIEAQbmN6w3crjqvb5z0sEAzIctZr0%2BDINX2dE9l2rSHVfMixpnqceBlQ05Fk5V3yOVsOYvzRVEpm%2FWdu6wYfN6eqL8aoHWBxZ%2BwkVqKPxeiS60SwGi1gv7SrOkGd1l48S%2B1rBQV206Tmh1J8dx%2F0lrK79TjAkus34yavfZI&X-Amz-Signature=e71004b3f9d99c6fec3e04cb102a2250e9cf2f02551fa7fb4308381a5bed3542&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVZ27DIK%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDo5kURdG%2FfsUYu2eZ7HZ%2FocMAaOCSCsmJMu9WQI%2BZRVAIhAPQCMLz5xNRbAnkEN%2BUsnjp5%2B64AszoXkG9i4Z6cSEc4KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwK0DIBYjw6HEAV31oq3ANNpiReidj0xbn0PiYN6lVn1hHpOwcJbnc3fBfoRG7T0BCJee%2FdSHsSaMHyHUqzwF1eOIYeDAaICRQlz49jZ00%2BYoUMY4Ix8bUrkJbyII4EHFa%2Fl94ifiufKghWdLEvFWOVzOnRziDygpdzWOIXtJs7P4zSCBdnLRKrDi3kJfgixHVHvGg5ehfSEhwQaQJY%2Bvx34tS7ZX%2F7SRQpuEmWpOq1iPjT44i4R4hyDc%2Boo2cjl1PxzTvwHO7cNYjtDHwoXHUlWRACNQlinjustySK3BmzsDbA%2FcKeR4GyeRnpfK6fV%2FLZcH3uTs8HxnawOGv9Mb%2FcfAkqFMjdW3IYfxz6Tb2lRxjl7WDjD1Z%2BDFewKDa2vS4DtiYrEafCze0xMPPeNum348r%2B8nJefig3y%2FclufULh3AP9M1T7%2BA%2F%2BJ5V4VNAPJf71lf7dgNtv4f62BsY2Wc%2BbnhqeyBljA13MV3TUbRSDAOvMCtHfgMuNn1mc1ylLfZXV9J%2FVFKQf3KXG6dEjgRip1tyTalsJc4FHzogIIdx%2FMNf%2FIKrVDPNdd0r%2BDqw0MR7mAM00%2BOIlHE4YuCv3ugty0tou7TtQ6F8x8E1Sy9683VgsBTmJSsgg%2BDh5Fu%2FBDUBIFiKbJr5Gs%2BfEzC3s7LBBjqkARjx39FWhy7FbipcceS8mn2R4lzbNMV0BQRgxJDWGnWJRgSFMDp5cIEAQbmN6w3crjqvb5z0sEAzIctZr0%2BDINX2dE9l2rSHVfMixpnqceBlQ05Fk5V3yOVsOYvzRVEpm%2FWdu6wYfN6eqL8aoHWBxZ%2BwkVqKPxeiS60SwGi1gv7SrOkGd1l48S%2B1rBQV206Tmh1J8dx%2F0lrK79TjAkus34yavfZI&X-Amz-Signature=fb8de63d149aedf07e091dc50800d3039d99b86e1498ac865187081635b9e755&X-Amz-SignedHeaders=host&x-id=GetObject)
