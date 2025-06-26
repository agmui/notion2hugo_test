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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSFKQ7T%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCWgeCqF8DJ1ZZ7SLPt8%2BQFLmaCm%2Fk5nsxOoSpRSHn6EQIhAMvHDptbom5ZGohJHXUNx0WcJqr5hEMgHLB1iu7oXi1lKv8DCF0QABoMNjM3NDIzMTgzODA1Igy3YxmPRyqstg7cywEq3AP77t2v9hVxzZpOWalzope9JH%2Brog42OAvZS9VcNNSVRkXJAecPqT4lN33vh0xZ9RTBjMYWaEPXLoMlPRv0seIEinKZNdCCRABBrtGZX0O4O1J1fPI4RKIhJpupBezJKCU%2B8lkdJ4qfPL7i4%2F3jnlbrrLqmm8Rft8v1Tbb7IsjTlPFmVyIjg5NOhcVd8Jqi7W913neBPHIakVGiFobSwHArTTpZNQWxQIV1Xal89XvGpqv2bEv%2Bq26FKTLWlpWLC8CAdOh7t%2BhPEI7PNCcToiK7IjCXMDj8CeIvf%2FxiqqIrp8KiLtdCKrT7wleib%2BUEbOolvnp0sfFI2mmr%2BP0S5lpgOK1PnMSpPVZiBbDILqODWYTrmhbwXA9s8N0KdPx1CuoJtdKLr%2FeO6Dxh91u2nHvDtzEr2RIz40v%2FIzhZGQfFptJNN6VaiGeiuDZIWalIW%2F0DYNlE6PL0d1OpRDElJx9LycY%2FtpVU8qQShvSIUmVePS8bxjx6gKUu9EamBzob0B58RlhgsT6ji5cOnflKtCbTxody4WlVvd8UQqLX%2B0A6oZFrWn9EM7IxHn5rQPaoZin3iEkTrC%2B%2FKYlBaJFqTkMuvI9PAaqiSgy%2FsWydD9oufIa7AnehPtUHLpK7WTCn8%2FTCBjqkAU853COKjRoYZ08rNNK0YJdKjvG%2BiKz4UHwmQ2zf3ss0o0SmcqxxthZQFH%2BKOlV37GrwzbyJ%2Bh8G6FDzsoFWvjVluMQfUn6juk7SO43hiok6MgdgUgjV%2BapRLnms8VyfW4MdmGDTwE36xWkupMBhLHaeVNxqpPSylWjlc%2BxBNlbCk756S6zbkIaLjceX9%2BTPDWUHpetRjd0KeYDJxLQkTLrQ%2FECN&X-Amz-Signature=1f90b960954a7e49814cd4db50fdc7d2b99a015f9f3c892d209401446a17ec4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSFKQ7T%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCWgeCqF8DJ1ZZ7SLPt8%2BQFLmaCm%2Fk5nsxOoSpRSHn6EQIhAMvHDptbom5ZGohJHXUNx0WcJqr5hEMgHLB1iu7oXi1lKv8DCF0QABoMNjM3NDIzMTgzODA1Igy3YxmPRyqstg7cywEq3AP77t2v9hVxzZpOWalzope9JH%2Brog42OAvZS9VcNNSVRkXJAecPqT4lN33vh0xZ9RTBjMYWaEPXLoMlPRv0seIEinKZNdCCRABBrtGZX0O4O1J1fPI4RKIhJpupBezJKCU%2B8lkdJ4qfPL7i4%2F3jnlbrrLqmm8Rft8v1Tbb7IsjTlPFmVyIjg5NOhcVd8Jqi7W913neBPHIakVGiFobSwHArTTpZNQWxQIV1Xal89XvGpqv2bEv%2Bq26FKTLWlpWLC8CAdOh7t%2BhPEI7PNCcToiK7IjCXMDj8CeIvf%2FxiqqIrp8KiLtdCKrT7wleib%2BUEbOolvnp0sfFI2mmr%2BP0S5lpgOK1PnMSpPVZiBbDILqODWYTrmhbwXA9s8N0KdPx1CuoJtdKLr%2FeO6Dxh91u2nHvDtzEr2RIz40v%2FIzhZGQfFptJNN6VaiGeiuDZIWalIW%2F0DYNlE6PL0d1OpRDElJx9LycY%2FtpVU8qQShvSIUmVePS8bxjx6gKUu9EamBzob0B58RlhgsT6ji5cOnflKtCbTxody4WlVvd8UQqLX%2B0A6oZFrWn9EM7IxHn5rQPaoZin3iEkTrC%2B%2FKYlBaJFqTkMuvI9PAaqiSgy%2FsWydD9oufIa7AnehPtUHLpK7WTCn8%2FTCBjqkAU853COKjRoYZ08rNNK0YJdKjvG%2BiKz4UHwmQ2zf3ss0o0SmcqxxthZQFH%2BKOlV37GrwzbyJ%2Bh8G6FDzsoFWvjVluMQfUn6juk7SO43hiok6MgdgUgjV%2BapRLnms8VyfW4MdmGDTwE36xWkupMBhLHaeVNxqpPSylWjlc%2BxBNlbCk756S6zbkIaLjceX9%2BTPDWUHpetRjd0KeYDJxLQkTLrQ%2FECN&X-Amz-Signature=02b6bcff9a76bb66df1a1685f0a1c115b9f8d4b9ad3a8a7ca936e437e7fc2a57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSFKQ7T%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCWgeCqF8DJ1ZZ7SLPt8%2BQFLmaCm%2Fk5nsxOoSpRSHn6EQIhAMvHDptbom5ZGohJHXUNx0WcJqr5hEMgHLB1iu7oXi1lKv8DCF0QABoMNjM3NDIzMTgzODA1Igy3YxmPRyqstg7cywEq3AP77t2v9hVxzZpOWalzope9JH%2Brog42OAvZS9VcNNSVRkXJAecPqT4lN33vh0xZ9RTBjMYWaEPXLoMlPRv0seIEinKZNdCCRABBrtGZX0O4O1J1fPI4RKIhJpupBezJKCU%2B8lkdJ4qfPL7i4%2F3jnlbrrLqmm8Rft8v1Tbb7IsjTlPFmVyIjg5NOhcVd8Jqi7W913neBPHIakVGiFobSwHArTTpZNQWxQIV1Xal89XvGpqv2bEv%2Bq26FKTLWlpWLC8CAdOh7t%2BhPEI7PNCcToiK7IjCXMDj8CeIvf%2FxiqqIrp8KiLtdCKrT7wleib%2BUEbOolvnp0sfFI2mmr%2BP0S5lpgOK1PnMSpPVZiBbDILqODWYTrmhbwXA9s8N0KdPx1CuoJtdKLr%2FeO6Dxh91u2nHvDtzEr2RIz40v%2FIzhZGQfFptJNN6VaiGeiuDZIWalIW%2F0DYNlE6PL0d1OpRDElJx9LycY%2FtpVU8qQShvSIUmVePS8bxjx6gKUu9EamBzob0B58RlhgsT6ji5cOnflKtCbTxody4WlVvd8UQqLX%2B0A6oZFrWn9EM7IxHn5rQPaoZin3iEkTrC%2B%2FKYlBaJFqTkMuvI9PAaqiSgy%2FsWydD9oufIa7AnehPtUHLpK7WTCn8%2FTCBjqkAU853COKjRoYZ08rNNK0YJdKjvG%2BiKz4UHwmQ2zf3ss0o0SmcqxxthZQFH%2BKOlV37GrwzbyJ%2Bh8G6FDzsoFWvjVluMQfUn6juk7SO43hiok6MgdgUgjV%2BapRLnms8VyfW4MdmGDTwE36xWkupMBhLHaeVNxqpPSylWjlc%2BxBNlbCk756S6zbkIaLjceX9%2BTPDWUHpetRjd0KeYDJxLQkTLrQ%2FECN&X-Amz-Signature=9401e5f89ea1598bc8616931140d1eed39d467d9f7208fc2b71eeee122ca09b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSFKQ7T%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCWgeCqF8DJ1ZZ7SLPt8%2BQFLmaCm%2Fk5nsxOoSpRSHn6EQIhAMvHDptbom5ZGohJHXUNx0WcJqr5hEMgHLB1iu7oXi1lKv8DCF0QABoMNjM3NDIzMTgzODA1Igy3YxmPRyqstg7cywEq3AP77t2v9hVxzZpOWalzope9JH%2Brog42OAvZS9VcNNSVRkXJAecPqT4lN33vh0xZ9RTBjMYWaEPXLoMlPRv0seIEinKZNdCCRABBrtGZX0O4O1J1fPI4RKIhJpupBezJKCU%2B8lkdJ4qfPL7i4%2F3jnlbrrLqmm8Rft8v1Tbb7IsjTlPFmVyIjg5NOhcVd8Jqi7W913neBPHIakVGiFobSwHArTTpZNQWxQIV1Xal89XvGpqv2bEv%2Bq26FKTLWlpWLC8CAdOh7t%2BhPEI7PNCcToiK7IjCXMDj8CeIvf%2FxiqqIrp8KiLtdCKrT7wleib%2BUEbOolvnp0sfFI2mmr%2BP0S5lpgOK1PnMSpPVZiBbDILqODWYTrmhbwXA9s8N0KdPx1CuoJtdKLr%2FeO6Dxh91u2nHvDtzEr2RIz40v%2FIzhZGQfFptJNN6VaiGeiuDZIWalIW%2F0DYNlE6PL0d1OpRDElJx9LycY%2FtpVU8qQShvSIUmVePS8bxjx6gKUu9EamBzob0B58RlhgsT6ji5cOnflKtCbTxody4WlVvd8UQqLX%2B0A6oZFrWn9EM7IxHn5rQPaoZin3iEkTrC%2B%2FKYlBaJFqTkMuvI9PAaqiSgy%2FsWydD9oufIa7AnehPtUHLpK7WTCn8%2FTCBjqkAU853COKjRoYZ08rNNK0YJdKjvG%2BiKz4UHwmQ2zf3ss0o0SmcqxxthZQFH%2BKOlV37GrwzbyJ%2Bh8G6FDzsoFWvjVluMQfUn6juk7SO43hiok6MgdgUgjV%2BapRLnms8VyfW4MdmGDTwE36xWkupMBhLHaeVNxqpPSylWjlc%2BxBNlbCk756S6zbkIaLjceX9%2BTPDWUHpetRjd0KeYDJxLQkTLrQ%2FECN&X-Amz-Signature=3424a77e23b5e941d8ea7a39358911e565e96d0731305e1e69252adf6ad67e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSFKQ7T%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCWgeCqF8DJ1ZZ7SLPt8%2BQFLmaCm%2Fk5nsxOoSpRSHn6EQIhAMvHDptbom5ZGohJHXUNx0WcJqr5hEMgHLB1iu7oXi1lKv8DCF0QABoMNjM3NDIzMTgzODA1Igy3YxmPRyqstg7cywEq3AP77t2v9hVxzZpOWalzope9JH%2Brog42OAvZS9VcNNSVRkXJAecPqT4lN33vh0xZ9RTBjMYWaEPXLoMlPRv0seIEinKZNdCCRABBrtGZX0O4O1J1fPI4RKIhJpupBezJKCU%2B8lkdJ4qfPL7i4%2F3jnlbrrLqmm8Rft8v1Tbb7IsjTlPFmVyIjg5NOhcVd8Jqi7W913neBPHIakVGiFobSwHArTTpZNQWxQIV1Xal89XvGpqv2bEv%2Bq26FKTLWlpWLC8CAdOh7t%2BhPEI7PNCcToiK7IjCXMDj8CeIvf%2FxiqqIrp8KiLtdCKrT7wleib%2BUEbOolvnp0sfFI2mmr%2BP0S5lpgOK1PnMSpPVZiBbDILqODWYTrmhbwXA9s8N0KdPx1CuoJtdKLr%2FeO6Dxh91u2nHvDtzEr2RIz40v%2FIzhZGQfFptJNN6VaiGeiuDZIWalIW%2F0DYNlE6PL0d1OpRDElJx9LycY%2FtpVU8qQShvSIUmVePS8bxjx6gKUu9EamBzob0B58RlhgsT6ji5cOnflKtCbTxody4WlVvd8UQqLX%2B0A6oZFrWn9EM7IxHn5rQPaoZin3iEkTrC%2B%2FKYlBaJFqTkMuvI9PAaqiSgy%2FsWydD9oufIa7AnehPtUHLpK7WTCn8%2FTCBjqkAU853COKjRoYZ08rNNK0YJdKjvG%2BiKz4UHwmQ2zf3ss0o0SmcqxxthZQFH%2BKOlV37GrwzbyJ%2Bh8G6FDzsoFWvjVluMQfUn6juk7SO43hiok6MgdgUgjV%2BapRLnms8VyfW4MdmGDTwE36xWkupMBhLHaeVNxqpPSylWjlc%2BxBNlbCk756S6zbkIaLjceX9%2BTPDWUHpetRjd0KeYDJxLQkTLrQ%2FECN&X-Amz-Signature=f9b51f02f143f28f1342ffe6f0487495fb75acbc8872642cca23d122f565e304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSFKQ7T%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCWgeCqF8DJ1ZZ7SLPt8%2BQFLmaCm%2Fk5nsxOoSpRSHn6EQIhAMvHDptbom5ZGohJHXUNx0WcJqr5hEMgHLB1iu7oXi1lKv8DCF0QABoMNjM3NDIzMTgzODA1Igy3YxmPRyqstg7cywEq3AP77t2v9hVxzZpOWalzope9JH%2Brog42OAvZS9VcNNSVRkXJAecPqT4lN33vh0xZ9RTBjMYWaEPXLoMlPRv0seIEinKZNdCCRABBrtGZX0O4O1J1fPI4RKIhJpupBezJKCU%2B8lkdJ4qfPL7i4%2F3jnlbrrLqmm8Rft8v1Tbb7IsjTlPFmVyIjg5NOhcVd8Jqi7W913neBPHIakVGiFobSwHArTTpZNQWxQIV1Xal89XvGpqv2bEv%2Bq26FKTLWlpWLC8CAdOh7t%2BhPEI7PNCcToiK7IjCXMDj8CeIvf%2FxiqqIrp8KiLtdCKrT7wleib%2BUEbOolvnp0sfFI2mmr%2BP0S5lpgOK1PnMSpPVZiBbDILqODWYTrmhbwXA9s8N0KdPx1CuoJtdKLr%2FeO6Dxh91u2nHvDtzEr2RIz40v%2FIzhZGQfFptJNN6VaiGeiuDZIWalIW%2F0DYNlE6PL0d1OpRDElJx9LycY%2FtpVU8qQShvSIUmVePS8bxjx6gKUu9EamBzob0B58RlhgsT6ji5cOnflKtCbTxody4WlVvd8UQqLX%2B0A6oZFrWn9EM7IxHn5rQPaoZin3iEkTrC%2B%2FKYlBaJFqTkMuvI9PAaqiSgy%2FsWydD9oufIa7AnehPtUHLpK7WTCn8%2FTCBjqkAU853COKjRoYZ08rNNK0YJdKjvG%2BiKz4UHwmQ2zf3ss0o0SmcqxxthZQFH%2BKOlV37GrwzbyJ%2Bh8G6FDzsoFWvjVluMQfUn6juk7SO43hiok6MgdgUgjV%2BapRLnms8VyfW4MdmGDTwE36xWkupMBhLHaeVNxqpPSylWjlc%2BxBNlbCk756S6zbkIaLjceX9%2BTPDWUHpetRjd0KeYDJxLQkTLrQ%2FECN&X-Amz-Signature=c08fa8a1fafb26513d7db0f1dcdc042a8b84ebec0a50c21e4dad8dd1d3b5c9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
