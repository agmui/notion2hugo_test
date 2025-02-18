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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARF3YMY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCCf0asf8VsArn%2FU32aBR439r67IFulxX%2FgQoM53p81lgIgTvtOGavroqsn8YcW86DhuEaj3pXZxERb64lkMKfOENAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrPQfIDokxBSJrdVCrcA4bRToFzbckXVuYkNApB1bBJEhv%2BegRn9MbZeUmHbss5kxZ36uNdEgC%2FVDDyklPemQQswFJIH3s%2FWMCaZfdvl3s7Y6JAk0ixHdkf227Ldb3KiUoIoq3Dwn%2FP4iVtBrBGq6mSA7ixNkKcVP30S%2Bl5B8hnQ3bc3oJtrF3CjrHKTOtc%2Fwvp0XvTCqQT8XDtGCW5yn59ClRXQ9kQaul1U8zpAUqyT%2FIM13Rs%2FaEzLq5AOZK2q%2FampHUtQ7IlveSHl3%2BcpbEEgfe9PUz3o4GOKA3%2F54DWuYk7xdBCFa%2FaCJ1VHxz3WMdG43PJ1KWoHLIcXTXBjQ0UHUVHpgXK9QZ6%2FNCGPs3%2Be3FGt%2FGrQeDJrQQJ5jwtNw0XLBcvV6Yz3ZnIogOptrtjDHc30nhmte1HiYAA%2Fwfy38CA93A1mYG78h1k0FQ21T3tjr2IbWBYrJUwDir%2B2hk49dmoLBPpGiqIdzW0WNH6iGuRFoeRQIG7v%2FzbT8omGbdfeIRTwwWntwTDs%2BzLi4MkudCI8fcdN8rLc8DKLW2%2F1wv24ybwxo%2BG%2BQJKLEug9U9gIwNFYIMrV2dFc3Ae6vyamoXomKt%2BxKAJWzWbVXHookr91GB49bFnR9zRnw%2BqdIYH%2B0minNO2Y50nMKjwz70GOqUBVod9SqIkQWhEp9%2B%2FcBqCg6arWx05lAOxInJGWk8s82Ti0JqZ9WuBUrgDuSG7CF7auLW1rxI07DUGfRaRq%2FJs%2FdVK56c6zWP4vbwqmL%2BdkVkLb61gUMTHEomUySkN903vy7vSh0OD11it7NK1blB0GjY2Ro1lcghfTtughj9diWauK%2Fe0qR22S7uvCbaUGfFfXWnGgCKWdEA%2Bm2FR1t8IB1IfD%2FTf&X-Amz-Signature=3991b18bb1c81b44cdddf45958587dd518ab19d8aa5d757a9e45c7ef17ee5771&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARF3YMY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCCf0asf8VsArn%2FU32aBR439r67IFulxX%2FgQoM53p81lgIgTvtOGavroqsn8YcW86DhuEaj3pXZxERb64lkMKfOENAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrPQfIDokxBSJrdVCrcA4bRToFzbckXVuYkNApB1bBJEhv%2BegRn9MbZeUmHbss5kxZ36uNdEgC%2FVDDyklPemQQswFJIH3s%2FWMCaZfdvl3s7Y6JAk0ixHdkf227Ldb3KiUoIoq3Dwn%2FP4iVtBrBGq6mSA7ixNkKcVP30S%2Bl5B8hnQ3bc3oJtrF3CjrHKTOtc%2Fwvp0XvTCqQT8XDtGCW5yn59ClRXQ9kQaul1U8zpAUqyT%2FIM13Rs%2FaEzLq5AOZK2q%2FampHUtQ7IlveSHl3%2BcpbEEgfe9PUz3o4GOKA3%2F54DWuYk7xdBCFa%2FaCJ1VHxz3WMdG43PJ1KWoHLIcXTXBjQ0UHUVHpgXK9QZ6%2FNCGPs3%2Be3FGt%2FGrQeDJrQQJ5jwtNw0XLBcvV6Yz3ZnIogOptrtjDHc30nhmte1HiYAA%2Fwfy38CA93A1mYG78h1k0FQ21T3tjr2IbWBYrJUwDir%2B2hk49dmoLBPpGiqIdzW0WNH6iGuRFoeRQIG7v%2FzbT8omGbdfeIRTwwWntwTDs%2BzLi4MkudCI8fcdN8rLc8DKLW2%2F1wv24ybwxo%2BG%2BQJKLEug9U9gIwNFYIMrV2dFc3Ae6vyamoXomKt%2BxKAJWzWbVXHookr91GB49bFnR9zRnw%2BqdIYH%2B0minNO2Y50nMKjwz70GOqUBVod9SqIkQWhEp9%2B%2FcBqCg6arWx05lAOxInJGWk8s82Ti0JqZ9WuBUrgDuSG7CF7auLW1rxI07DUGfRaRq%2FJs%2FdVK56c6zWP4vbwqmL%2BdkVkLb61gUMTHEomUySkN903vy7vSh0OD11it7NK1blB0GjY2Ro1lcghfTtughj9diWauK%2Fe0qR22S7uvCbaUGfFfXWnGgCKWdEA%2Bm2FR1t8IB1IfD%2FTf&X-Amz-Signature=ae1db7618257502c56b2db32120f844e0d9ef26ed4daf4f6727e425528b276de&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARF3YMY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCCf0asf8VsArn%2FU32aBR439r67IFulxX%2FgQoM53p81lgIgTvtOGavroqsn8YcW86DhuEaj3pXZxERb64lkMKfOENAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrPQfIDokxBSJrdVCrcA4bRToFzbckXVuYkNApB1bBJEhv%2BegRn9MbZeUmHbss5kxZ36uNdEgC%2FVDDyklPemQQswFJIH3s%2FWMCaZfdvl3s7Y6JAk0ixHdkf227Ldb3KiUoIoq3Dwn%2FP4iVtBrBGq6mSA7ixNkKcVP30S%2Bl5B8hnQ3bc3oJtrF3CjrHKTOtc%2Fwvp0XvTCqQT8XDtGCW5yn59ClRXQ9kQaul1U8zpAUqyT%2FIM13Rs%2FaEzLq5AOZK2q%2FampHUtQ7IlveSHl3%2BcpbEEgfe9PUz3o4GOKA3%2F54DWuYk7xdBCFa%2FaCJ1VHxz3WMdG43PJ1KWoHLIcXTXBjQ0UHUVHpgXK9QZ6%2FNCGPs3%2Be3FGt%2FGrQeDJrQQJ5jwtNw0XLBcvV6Yz3ZnIogOptrtjDHc30nhmte1HiYAA%2Fwfy38CA93A1mYG78h1k0FQ21T3tjr2IbWBYrJUwDir%2B2hk49dmoLBPpGiqIdzW0WNH6iGuRFoeRQIG7v%2FzbT8omGbdfeIRTwwWntwTDs%2BzLi4MkudCI8fcdN8rLc8DKLW2%2F1wv24ybwxo%2BG%2BQJKLEug9U9gIwNFYIMrV2dFc3Ae6vyamoXomKt%2BxKAJWzWbVXHookr91GB49bFnR9zRnw%2BqdIYH%2B0minNO2Y50nMKjwz70GOqUBVod9SqIkQWhEp9%2B%2FcBqCg6arWx05lAOxInJGWk8s82Ti0JqZ9WuBUrgDuSG7CF7auLW1rxI07DUGfRaRq%2FJs%2FdVK56c6zWP4vbwqmL%2BdkVkLb61gUMTHEomUySkN903vy7vSh0OD11it7NK1blB0GjY2Ro1lcghfTtughj9diWauK%2Fe0qR22S7uvCbaUGfFfXWnGgCKWdEA%2Bm2FR1t8IB1IfD%2FTf&X-Amz-Signature=8a456a392a491552eb8acff7b4c92a5b62d8924e6ad6b75d7e7bb1b73a59f94f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARF3YMY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCCf0asf8VsArn%2FU32aBR439r67IFulxX%2FgQoM53p81lgIgTvtOGavroqsn8YcW86DhuEaj3pXZxERb64lkMKfOENAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrPQfIDokxBSJrdVCrcA4bRToFzbckXVuYkNApB1bBJEhv%2BegRn9MbZeUmHbss5kxZ36uNdEgC%2FVDDyklPemQQswFJIH3s%2FWMCaZfdvl3s7Y6JAk0ixHdkf227Ldb3KiUoIoq3Dwn%2FP4iVtBrBGq6mSA7ixNkKcVP30S%2Bl5B8hnQ3bc3oJtrF3CjrHKTOtc%2Fwvp0XvTCqQT8XDtGCW5yn59ClRXQ9kQaul1U8zpAUqyT%2FIM13Rs%2FaEzLq5AOZK2q%2FampHUtQ7IlveSHl3%2BcpbEEgfe9PUz3o4GOKA3%2F54DWuYk7xdBCFa%2FaCJ1VHxz3WMdG43PJ1KWoHLIcXTXBjQ0UHUVHpgXK9QZ6%2FNCGPs3%2Be3FGt%2FGrQeDJrQQJ5jwtNw0XLBcvV6Yz3ZnIogOptrtjDHc30nhmte1HiYAA%2Fwfy38CA93A1mYG78h1k0FQ21T3tjr2IbWBYrJUwDir%2B2hk49dmoLBPpGiqIdzW0WNH6iGuRFoeRQIG7v%2FzbT8omGbdfeIRTwwWntwTDs%2BzLi4MkudCI8fcdN8rLc8DKLW2%2F1wv24ybwxo%2BG%2BQJKLEug9U9gIwNFYIMrV2dFc3Ae6vyamoXomKt%2BxKAJWzWbVXHookr91GB49bFnR9zRnw%2BqdIYH%2B0minNO2Y50nMKjwz70GOqUBVod9SqIkQWhEp9%2B%2FcBqCg6arWx05lAOxInJGWk8s82Ti0JqZ9WuBUrgDuSG7CF7auLW1rxI07DUGfRaRq%2FJs%2FdVK56c6zWP4vbwqmL%2BdkVkLb61gUMTHEomUySkN903vy7vSh0OD11it7NK1blB0GjY2Ro1lcghfTtughj9diWauK%2Fe0qR22S7uvCbaUGfFfXWnGgCKWdEA%2Bm2FR1t8IB1IfD%2FTf&X-Amz-Signature=ccfc8d877ec2af70cf076815e0e14ee3e053030208388188b355a5be2bf4fbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARF3YMY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCCf0asf8VsArn%2FU32aBR439r67IFulxX%2FgQoM53p81lgIgTvtOGavroqsn8YcW86DhuEaj3pXZxERb64lkMKfOENAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrPQfIDokxBSJrdVCrcA4bRToFzbckXVuYkNApB1bBJEhv%2BegRn9MbZeUmHbss5kxZ36uNdEgC%2FVDDyklPemQQswFJIH3s%2FWMCaZfdvl3s7Y6JAk0ixHdkf227Ldb3KiUoIoq3Dwn%2FP4iVtBrBGq6mSA7ixNkKcVP30S%2Bl5B8hnQ3bc3oJtrF3CjrHKTOtc%2Fwvp0XvTCqQT8XDtGCW5yn59ClRXQ9kQaul1U8zpAUqyT%2FIM13Rs%2FaEzLq5AOZK2q%2FampHUtQ7IlveSHl3%2BcpbEEgfe9PUz3o4GOKA3%2F54DWuYk7xdBCFa%2FaCJ1VHxz3WMdG43PJ1KWoHLIcXTXBjQ0UHUVHpgXK9QZ6%2FNCGPs3%2Be3FGt%2FGrQeDJrQQJ5jwtNw0XLBcvV6Yz3ZnIogOptrtjDHc30nhmte1HiYAA%2Fwfy38CA93A1mYG78h1k0FQ21T3tjr2IbWBYrJUwDir%2B2hk49dmoLBPpGiqIdzW0WNH6iGuRFoeRQIG7v%2FzbT8omGbdfeIRTwwWntwTDs%2BzLi4MkudCI8fcdN8rLc8DKLW2%2F1wv24ybwxo%2BG%2BQJKLEug9U9gIwNFYIMrV2dFc3Ae6vyamoXomKt%2BxKAJWzWbVXHookr91GB49bFnR9zRnw%2BqdIYH%2B0minNO2Y50nMKjwz70GOqUBVod9SqIkQWhEp9%2B%2FcBqCg6arWx05lAOxInJGWk8s82Ti0JqZ9WuBUrgDuSG7CF7auLW1rxI07DUGfRaRq%2FJs%2FdVK56c6zWP4vbwqmL%2BdkVkLb61gUMTHEomUySkN903vy7vSh0OD11it7NK1blB0GjY2Ro1lcghfTtughj9diWauK%2Fe0qR22S7uvCbaUGfFfXWnGgCKWdEA%2Bm2FR1t8IB1IfD%2FTf&X-Amz-Signature=1d3c6c54d4cebe32954756e6f8fd976e00f24b3718d71a7a869b37fa334197e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ARF3YMY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCCf0asf8VsArn%2FU32aBR439r67IFulxX%2FgQoM53p81lgIgTvtOGavroqsn8YcW86DhuEaj3pXZxERb64lkMKfOENAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrPQfIDokxBSJrdVCrcA4bRToFzbckXVuYkNApB1bBJEhv%2BegRn9MbZeUmHbss5kxZ36uNdEgC%2FVDDyklPemQQswFJIH3s%2FWMCaZfdvl3s7Y6JAk0ixHdkf227Ldb3KiUoIoq3Dwn%2FP4iVtBrBGq6mSA7ixNkKcVP30S%2Bl5B8hnQ3bc3oJtrF3CjrHKTOtc%2Fwvp0XvTCqQT8XDtGCW5yn59ClRXQ9kQaul1U8zpAUqyT%2FIM13Rs%2FaEzLq5AOZK2q%2FampHUtQ7IlveSHl3%2BcpbEEgfe9PUz3o4GOKA3%2F54DWuYk7xdBCFa%2FaCJ1VHxz3WMdG43PJ1KWoHLIcXTXBjQ0UHUVHpgXK9QZ6%2FNCGPs3%2Be3FGt%2FGrQeDJrQQJ5jwtNw0XLBcvV6Yz3ZnIogOptrtjDHc30nhmte1HiYAA%2Fwfy38CA93A1mYG78h1k0FQ21T3tjr2IbWBYrJUwDir%2B2hk49dmoLBPpGiqIdzW0WNH6iGuRFoeRQIG7v%2FzbT8omGbdfeIRTwwWntwTDs%2BzLi4MkudCI8fcdN8rLc8DKLW2%2F1wv24ybwxo%2BG%2BQJKLEug9U9gIwNFYIMrV2dFc3Ae6vyamoXomKt%2BxKAJWzWbVXHookr91GB49bFnR9zRnw%2BqdIYH%2B0minNO2Y50nMKjwz70GOqUBVod9SqIkQWhEp9%2B%2FcBqCg6arWx05lAOxInJGWk8s82Ti0JqZ9WuBUrgDuSG7CF7auLW1rxI07DUGfRaRq%2FJs%2FdVK56c6zWP4vbwqmL%2BdkVkLb61gUMTHEomUySkN903vy7vSh0OD11it7NK1blB0GjY2Ro1lcghfTtughj9diWauK%2Fe0qR22S7uvCbaUGfFfXWnGgCKWdEA%2Bm2FR1t8IB1IfD%2FTf&X-Amz-Signature=52e99f4ad1c28fc0b4b40cd26438a7657316606cce8f6d384c80834135eac454&X-Amz-SignedHeaders=host&x-id=GetObject)
