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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVEHWSW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvtpIgBp5Z%2FeMkEt4dJ7EbScSYFOrol4mcG6RfLPgwJAiEA87fTxu0ypgzYrjU%2BWbMAtC272ORGnW%2FEUjQn3s7pjEIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ4BSFKo3XNNgnyuASrcA4PM4xvEUFsbNCbxQCaYVun5NkGiqAt3zBuVas1uz0lfpt%2BF1S1NxfxD1B72um4hy4DmlooCfJWC0nwR9z92GRsXZ7nAo7yUaG65UAxAc4FwhsjbrYIApnViqiF53wCZcNyNNBrjYVivHz77h3%2Fh%2FdSnQZoZqk%2Br8dFJJwqrrbhFuZkUdi7e%2Fp6F%2B%2FM01bDEIv2ucOMKIlAEX4ZFgpHBWyR%2Fel27PD9LwhHAWz8%2FJIozTXxX1v%2BIyEbDvRoE10%2BHzUq8ZmaVxuBN3IOmhmb%2FRYS9cHNvv0daKhAMnihqI9uIVmOvSg%2FlRohyMwIkJhQmaq%2Bt0qy%2BLkC4Xen1nh1%2Be0ji%2FuKeDtN2h8IbX1AAJd8ZhKS0IraTZKEGA%2F7NlRuj90Nzfd4d1LSu8f4fP%2B%2B1OOOOAeSHnHSAM8FpMizfnxapQpRX0v1YXlSplbIlt7E%2BU2SjSANQZjGGBbZqySPkQ91aWmZntsF%2B%2F9ezt57hORMpHTqgJh4QVO%2Frf9WN7B3e1iqDB4vudE2Q%2BiL9n9sOMw5LAP6c0aPjdQkutzRAzgfJGSLUULb0k5znq8IowTpzM7rqF1AWIaV%2FBWnd5rDVSg6rWskVEw7IT6HhTRIpsg6ihH5vLg4lQDl5n8OlMKeUp8EGOqUBZ%2Bfm%2FlNlOr%2BTgO%2FPZ3vGNVQNT%2B3YBgOxM0U3bTvL%2F8LpSpcje88vSW%2B9KYPnqHEOgNW1RDzD633jtfvzuVFrxrsT%2BeAJg9y4e4v3js17R9gPn6Bxm59VzshqGU%2FL59%2FaVOqWcgzIJLwED5BvyF9EXABQioKx4adutZ2%2FfNadLmN%2B22MuFjwk25VDBpxkt2oGdYiG2FlhsOWOUPu8DzDJ%2Fb4%2F7knR&X-Amz-Signature=2ba1866a7c097b9ae1c0f120ebf78457950f812927c1a0c3bb7c27a36e6a21c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVEHWSW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvtpIgBp5Z%2FeMkEt4dJ7EbScSYFOrol4mcG6RfLPgwJAiEA87fTxu0ypgzYrjU%2BWbMAtC272ORGnW%2FEUjQn3s7pjEIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ4BSFKo3XNNgnyuASrcA4PM4xvEUFsbNCbxQCaYVun5NkGiqAt3zBuVas1uz0lfpt%2BF1S1NxfxD1B72um4hy4DmlooCfJWC0nwR9z92GRsXZ7nAo7yUaG65UAxAc4FwhsjbrYIApnViqiF53wCZcNyNNBrjYVivHz77h3%2Fh%2FdSnQZoZqk%2Br8dFJJwqrrbhFuZkUdi7e%2Fp6F%2B%2FM01bDEIv2ucOMKIlAEX4ZFgpHBWyR%2Fel27PD9LwhHAWz8%2FJIozTXxX1v%2BIyEbDvRoE10%2BHzUq8ZmaVxuBN3IOmhmb%2FRYS9cHNvv0daKhAMnihqI9uIVmOvSg%2FlRohyMwIkJhQmaq%2Bt0qy%2BLkC4Xen1nh1%2Be0ji%2FuKeDtN2h8IbX1AAJd8ZhKS0IraTZKEGA%2F7NlRuj90Nzfd4d1LSu8f4fP%2B%2B1OOOOAeSHnHSAM8FpMizfnxapQpRX0v1YXlSplbIlt7E%2BU2SjSANQZjGGBbZqySPkQ91aWmZntsF%2B%2F9ezt57hORMpHTqgJh4QVO%2Frf9WN7B3e1iqDB4vudE2Q%2BiL9n9sOMw5LAP6c0aPjdQkutzRAzgfJGSLUULb0k5znq8IowTpzM7rqF1AWIaV%2FBWnd5rDVSg6rWskVEw7IT6HhTRIpsg6ihH5vLg4lQDl5n8OlMKeUp8EGOqUBZ%2Bfm%2FlNlOr%2BTgO%2FPZ3vGNVQNT%2B3YBgOxM0U3bTvL%2F8LpSpcje88vSW%2B9KYPnqHEOgNW1RDzD633jtfvzuVFrxrsT%2BeAJg9y4e4v3js17R9gPn6Bxm59VzshqGU%2FL59%2FaVOqWcgzIJLwED5BvyF9EXABQioKx4adutZ2%2FfNadLmN%2B22MuFjwk25VDBpxkt2oGdYiG2FlhsOWOUPu8DzDJ%2Fb4%2F7knR&X-Amz-Signature=9f44f96242462fbe89fd1cddd4ad576dbb5ca135df9b458be41a84f9a8d8b1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVEHWSW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvtpIgBp5Z%2FeMkEt4dJ7EbScSYFOrol4mcG6RfLPgwJAiEA87fTxu0ypgzYrjU%2BWbMAtC272ORGnW%2FEUjQn3s7pjEIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ4BSFKo3XNNgnyuASrcA4PM4xvEUFsbNCbxQCaYVun5NkGiqAt3zBuVas1uz0lfpt%2BF1S1NxfxD1B72um4hy4DmlooCfJWC0nwR9z92GRsXZ7nAo7yUaG65UAxAc4FwhsjbrYIApnViqiF53wCZcNyNNBrjYVivHz77h3%2Fh%2FdSnQZoZqk%2Br8dFJJwqrrbhFuZkUdi7e%2Fp6F%2B%2FM01bDEIv2ucOMKIlAEX4ZFgpHBWyR%2Fel27PD9LwhHAWz8%2FJIozTXxX1v%2BIyEbDvRoE10%2BHzUq8ZmaVxuBN3IOmhmb%2FRYS9cHNvv0daKhAMnihqI9uIVmOvSg%2FlRohyMwIkJhQmaq%2Bt0qy%2BLkC4Xen1nh1%2Be0ji%2FuKeDtN2h8IbX1AAJd8ZhKS0IraTZKEGA%2F7NlRuj90Nzfd4d1LSu8f4fP%2B%2B1OOOOAeSHnHSAM8FpMizfnxapQpRX0v1YXlSplbIlt7E%2BU2SjSANQZjGGBbZqySPkQ91aWmZntsF%2B%2F9ezt57hORMpHTqgJh4QVO%2Frf9WN7B3e1iqDB4vudE2Q%2BiL9n9sOMw5LAP6c0aPjdQkutzRAzgfJGSLUULb0k5znq8IowTpzM7rqF1AWIaV%2FBWnd5rDVSg6rWskVEw7IT6HhTRIpsg6ihH5vLg4lQDl5n8OlMKeUp8EGOqUBZ%2Bfm%2FlNlOr%2BTgO%2FPZ3vGNVQNT%2B3YBgOxM0U3bTvL%2F8LpSpcje88vSW%2B9KYPnqHEOgNW1RDzD633jtfvzuVFrxrsT%2BeAJg9y4e4v3js17R9gPn6Bxm59VzshqGU%2FL59%2FaVOqWcgzIJLwED5BvyF9EXABQioKx4adutZ2%2FfNadLmN%2B22MuFjwk25VDBpxkt2oGdYiG2FlhsOWOUPu8DzDJ%2Fb4%2F7knR&X-Amz-Signature=b4ce67328cd434b800417de5d0d1619cfaec3dbe4ca065516702e1f925301644&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVEHWSW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvtpIgBp5Z%2FeMkEt4dJ7EbScSYFOrol4mcG6RfLPgwJAiEA87fTxu0ypgzYrjU%2BWbMAtC272ORGnW%2FEUjQn3s7pjEIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ4BSFKo3XNNgnyuASrcA4PM4xvEUFsbNCbxQCaYVun5NkGiqAt3zBuVas1uz0lfpt%2BF1S1NxfxD1B72um4hy4DmlooCfJWC0nwR9z92GRsXZ7nAo7yUaG65UAxAc4FwhsjbrYIApnViqiF53wCZcNyNNBrjYVivHz77h3%2Fh%2FdSnQZoZqk%2Br8dFJJwqrrbhFuZkUdi7e%2Fp6F%2B%2FM01bDEIv2ucOMKIlAEX4ZFgpHBWyR%2Fel27PD9LwhHAWz8%2FJIozTXxX1v%2BIyEbDvRoE10%2BHzUq8ZmaVxuBN3IOmhmb%2FRYS9cHNvv0daKhAMnihqI9uIVmOvSg%2FlRohyMwIkJhQmaq%2Bt0qy%2BLkC4Xen1nh1%2Be0ji%2FuKeDtN2h8IbX1AAJd8ZhKS0IraTZKEGA%2F7NlRuj90Nzfd4d1LSu8f4fP%2B%2B1OOOOAeSHnHSAM8FpMizfnxapQpRX0v1YXlSplbIlt7E%2BU2SjSANQZjGGBbZqySPkQ91aWmZntsF%2B%2F9ezt57hORMpHTqgJh4QVO%2Frf9WN7B3e1iqDB4vudE2Q%2BiL9n9sOMw5LAP6c0aPjdQkutzRAzgfJGSLUULb0k5znq8IowTpzM7rqF1AWIaV%2FBWnd5rDVSg6rWskVEw7IT6HhTRIpsg6ihH5vLg4lQDl5n8OlMKeUp8EGOqUBZ%2Bfm%2FlNlOr%2BTgO%2FPZ3vGNVQNT%2B3YBgOxM0U3bTvL%2F8LpSpcje88vSW%2B9KYPnqHEOgNW1RDzD633jtfvzuVFrxrsT%2BeAJg9y4e4v3js17R9gPn6Bxm59VzshqGU%2FL59%2FaVOqWcgzIJLwED5BvyF9EXABQioKx4adutZ2%2FfNadLmN%2B22MuFjwk25VDBpxkt2oGdYiG2FlhsOWOUPu8DzDJ%2Fb4%2F7knR&X-Amz-Signature=ae799eecca6c948f98a69efe5bf299c683c83dbc12387cc48121cb20bfbdd7d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVEHWSW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvtpIgBp5Z%2FeMkEt4dJ7EbScSYFOrol4mcG6RfLPgwJAiEA87fTxu0ypgzYrjU%2BWbMAtC272ORGnW%2FEUjQn3s7pjEIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ4BSFKo3XNNgnyuASrcA4PM4xvEUFsbNCbxQCaYVun5NkGiqAt3zBuVas1uz0lfpt%2BF1S1NxfxD1B72um4hy4DmlooCfJWC0nwR9z92GRsXZ7nAo7yUaG65UAxAc4FwhsjbrYIApnViqiF53wCZcNyNNBrjYVivHz77h3%2Fh%2FdSnQZoZqk%2Br8dFJJwqrrbhFuZkUdi7e%2Fp6F%2B%2FM01bDEIv2ucOMKIlAEX4ZFgpHBWyR%2Fel27PD9LwhHAWz8%2FJIozTXxX1v%2BIyEbDvRoE10%2BHzUq8ZmaVxuBN3IOmhmb%2FRYS9cHNvv0daKhAMnihqI9uIVmOvSg%2FlRohyMwIkJhQmaq%2Bt0qy%2BLkC4Xen1nh1%2Be0ji%2FuKeDtN2h8IbX1AAJd8ZhKS0IraTZKEGA%2F7NlRuj90Nzfd4d1LSu8f4fP%2B%2B1OOOOAeSHnHSAM8FpMizfnxapQpRX0v1YXlSplbIlt7E%2BU2SjSANQZjGGBbZqySPkQ91aWmZntsF%2B%2F9ezt57hORMpHTqgJh4QVO%2Frf9WN7B3e1iqDB4vudE2Q%2BiL9n9sOMw5LAP6c0aPjdQkutzRAzgfJGSLUULb0k5znq8IowTpzM7rqF1AWIaV%2FBWnd5rDVSg6rWskVEw7IT6HhTRIpsg6ihH5vLg4lQDl5n8OlMKeUp8EGOqUBZ%2Bfm%2FlNlOr%2BTgO%2FPZ3vGNVQNT%2B3YBgOxM0U3bTvL%2F8LpSpcje88vSW%2B9KYPnqHEOgNW1RDzD633jtfvzuVFrxrsT%2BeAJg9y4e4v3js17R9gPn6Bxm59VzshqGU%2FL59%2FaVOqWcgzIJLwED5BvyF9EXABQioKx4adutZ2%2FfNadLmN%2B22MuFjwk25VDBpxkt2oGdYiG2FlhsOWOUPu8DzDJ%2Fb4%2F7knR&X-Amz-Signature=768f27e5d13a2be949ae064f79cd5d90013b2c2dbec5b09443df1752d378b486&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAVEHWSW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T140510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvtpIgBp5Z%2FeMkEt4dJ7EbScSYFOrol4mcG6RfLPgwJAiEA87fTxu0ypgzYrjU%2BWbMAtC272ORGnW%2FEUjQn3s7pjEIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ4BSFKo3XNNgnyuASrcA4PM4xvEUFsbNCbxQCaYVun5NkGiqAt3zBuVas1uz0lfpt%2BF1S1NxfxD1B72um4hy4DmlooCfJWC0nwR9z92GRsXZ7nAo7yUaG65UAxAc4FwhsjbrYIApnViqiF53wCZcNyNNBrjYVivHz77h3%2Fh%2FdSnQZoZqk%2Br8dFJJwqrrbhFuZkUdi7e%2Fp6F%2B%2FM01bDEIv2ucOMKIlAEX4ZFgpHBWyR%2Fel27PD9LwhHAWz8%2FJIozTXxX1v%2BIyEbDvRoE10%2BHzUq8ZmaVxuBN3IOmhmb%2FRYS9cHNvv0daKhAMnihqI9uIVmOvSg%2FlRohyMwIkJhQmaq%2Bt0qy%2BLkC4Xen1nh1%2Be0ji%2FuKeDtN2h8IbX1AAJd8ZhKS0IraTZKEGA%2F7NlRuj90Nzfd4d1LSu8f4fP%2B%2B1OOOOAeSHnHSAM8FpMizfnxapQpRX0v1YXlSplbIlt7E%2BU2SjSANQZjGGBbZqySPkQ91aWmZntsF%2B%2F9ezt57hORMpHTqgJh4QVO%2Frf9WN7B3e1iqDB4vudE2Q%2BiL9n9sOMw5LAP6c0aPjdQkutzRAzgfJGSLUULb0k5znq8IowTpzM7rqF1AWIaV%2FBWnd5rDVSg6rWskVEw7IT6HhTRIpsg6ihH5vLg4lQDl5n8OlMKeUp8EGOqUBZ%2Bfm%2FlNlOr%2BTgO%2FPZ3vGNVQNT%2B3YBgOxM0U3bTvL%2F8LpSpcje88vSW%2B9KYPnqHEOgNW1RDzD633jtfvzuVFrxrsT%2BeAJg9y4e4v3js17R9gPn6Bxm59VzshqGU%2FL59%2FaVOqWcgzIJLwED5BvyF9EXABQioKx4adutZ2%2FfNadLmN%2B22MuFjwk25VDBpxkt2oGdYiG2FlhsOWOUPu8DzDJ%2Fb4%2F7knR&X-Amz-Signature=d7b4dc69d17e490b89215c25e945b985761d6545e08d18c40f7abb2e387c6d70&X-Amz-SignedHeaders=host&x-id=GetObject)
