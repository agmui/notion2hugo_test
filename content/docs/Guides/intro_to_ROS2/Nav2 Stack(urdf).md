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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YR4BOR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCBFdRjM75tlGcFSIyhK3RVGHHKR5cQXPwxlj4BujKbxwIgUaPtx11reEthHfWECSK8C3cCMNhrMIU9k%2B03Jd95PiQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfBPvecV%2BRZYtV5kCrcA2h%2Bn7xx0X9fbnqP0N5fcPjFq1lFV8vxujnqq0%2BVmS5mCSTrCF1CM9bkGFMT7qJ1fSgjYxn6D%2FG9g%2BaHa1ZizLreq3sfVU158I4Jm%2Ftl5RIjsHx60Luw5Jb3ez88nEfVruA25r95CakyLNPokoay2foTEQ8RExwrFoFMy4ur809o%2BajPeOLpfI5NHGek8QDgO%2FWlT9cSqv3giRnUvGD5PSkKZ6RIHZ7aM7citvpSs0dOtjgjxqdpsHSaQOIJ%2FZndk3uJb%2FRfNeNsVqq0%2FuuumxiRaqbpRR32K%2BGl9W8QryPjOcP0%2FQTltj7Z0HXyB8BDVlQs5988On69gK90Hqe79usE%2BAuRzrx2HbGQX6uTvbNVYvjuV3FAV5B%2BNwg1csaRxDrLEUMnX%2FXPUlXNAXJPvTLUXdljaEcjEoccAE3Oo8qMkKQv%2FwEz790sSn3B9DnM5xbyVUQ6Fbxc9jHAWI00N9pPAekffGst3hJWAKsxitNGDSGF%2BDo5PosOvCC04KLbOuOGFnSgVuhMXV6o6rjy%2FvBrq4WxfHVawseOOhMdha8Vk75Av5WM6MR%2BnuIqueylGVyssOdc4xqkpsYsnq%2B2%2FkP3ry9ESqEk7WSYI75jy9P%2FDMOCzvm2eVCpGU5iMM7m%2B8EGOqUBNjdIEmjeanxzQBGkDakd7ogZcqdm3DIqFhP0kDtb2a3grtQGFpOP6XD%2BhjQjSbOO%2F57CdKDa6EMsToWf41Q0oIsc5PhkuUmcdxOvTCLjia4vo6UWbEDyBgda1DXQT4lTBxfQyj%2FdTQZn0gJ3e8TZ4vVPO53H2tnKDLW4xAlg5hTmIYVA%2B3XMO%2Fb6BrcJo3yUavgwJFBfKvdgwxvCn1rzbIxLunAc&X-Amz-Signature=9b28b43313885d66a342e97ce1c93e5f1d8097e7425b5bee0b52f03bbf0c419c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YR4BOR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCBFdRjM75tlGcFSIyhK3RVGHHKR5cQXPwxlj4BujKbxwIgUaPtx11reEthHfWECSK8C3cCMNhrMIU9k%2B03Jd95PiQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfBPvecV%2BRZYtV5kCrcA2h%2Bn7xx0X9fbnqP0N5fcPjFq1lFV8vxujnqq0%2BVmS5mCSTrCF1CM9bkGFMT7qJ1fSgjYxn6D%2FG9g%2BaHa1ZizLreq3sfVU158I4Jm%2Ftl5RIjsHx60Luw5Jb3ez88nEfVruA25r95CakyLNPokoay2foTEQ8RExwrFoFMy4ur809o%2BajPeOLpfI5NHGek8QDgO%2FWlT9cSqv3giRnUvGD5PSkKZ6RIHZ7aM7citvpSs0dOtjgjxqdpsHSaQOIJ%2FZndk3uJb%2FRfNeNsVqq0%2FuuumxiRaqbpRR32K%2BGl9W8QryPjOcP0%2FQTltj7Z0HXyB8BDVlQs5988On69gK90Hqe79usE%2BAuRzrx2HbGQX6uTvbNVYvjuV3FAV5B%2BNwg1csaRxDrLEUMnX%2FXPUlXNAXJPvTLUXdljaEcjEoccAE3Oo8qMkKQv%2FwEz790sSn3B9DnM5xbyVUQ6Fbxc9jHAWI00N9pPAekffGst3hJWAKsxitNGDSGF%2BDo5PosOvCC04KLbOuOGFnSgVuhMXV6o6rjy%2FvBrq4WxfHVawseOOhMdha8Vk75Av5WM6MR%2BnuIqueylGVyssOdc4xqkpsYsnq%2B2%2FkP3ry9ESqEk7WSYI75jy9P%2FDMOCzvm2eVCpGU5iMM7m%2B8EGOqUBNjdIEmjeanxzQBGkDakd7ogZcqdm3DIqFhP0kDtb2a3grtQGFpOP6XD%2BhjQjSbOO%2F57CdKDa6EMsToWf41Q0oIsc5PhkuUmcdxOvTCLjia4vo6UWbEDyBgda1DXQT4lTBxfQyj%2FdTQZn0gJ3e8TZ4vVPO53H2tnKDLW4xAlg5hTmIYVA%2B3XMO%2Fb6BrcJo3yUavgwJFBfKvdgwxvCn1rzbIxLunAc&X-Amz-Signature=2e156024bcd87339ee29ad8efdbf4b88caa29bd90f85ed037807a8c2d0faf6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YR4BOR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCBFdRjM75tlGcFSIyhK3RVGHHKR5cQXPwxlj4BujKbxwIgUaPtx11reEthHfWECSK8C3cCMNhrMIU9k%2B03Jd95PiQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfBPvecV%2BRZYtV5kCrcA2h%2Bn7xx0X9fbnqP0N5fcPjFq1lFV8vxujnqq0%2BVmS5mCSTrCF1CM9bkGFMT7qJ1fSgjYxn6D%2FG9g%2BaHa1ZizLreq3sfVU158I4Jm%2Ftl5RIjsHx60Luw5Jb3ez88nEfVruA25r95CakyLNPokoay2foTEQ8RExwrFoFMy4ur809o%2BajPeOLpfI5NHGek8QDgO%2FWlT9cSqv3giRnUvGD5PSkKZ6RIHZ7aM7citvpSs0dOtjgjxqdpsHSaQOIJ%2FZndk3uJb%2FRfNeNsVqq0%2FuuumxiRaqbpRR32K%2BGl9W8QryPjOcP0%2FQTltj7Z0HXyB8BDVlQs5988On69gK90Hqe79usE%2BAuRzrx2HbGQX6uTvbNVYvjuV3FAV5B%2BNwg1csaRxDrLEUMnX%2FXPUlXNAXJPvTLUXdljaEcjEoccAE3Oo8qMkKQv%2FwEz790sSn3B9DnM5xbyVUQ6Fbxc9jHAWI00N9pPAekffGst3hJWAKsxitNGDSGF%2BDo5PosOvCC04KLbOuOGFnSgVuhMXV6o6rjy%2FvBrq4WxfHVawseOOhMdha8Vk75Av5WM6MR%2BnuIqueylGVyssOdc4xqkpsYsnq%2B2%2FkP3ry9ESqEk7WSYI75jy9P%2FDMOCzvm2eVCpGU5iMM7m%2B8EGOqUBNjdIEmjeanxzQBGkDakd7ogZcqdm3DIqFhP0kDtb2a3grtQGFpOP6XD%2BhjQjSbOO%2F57CdKDa6EMsToWf41Q0oIsc5PhkuUmcdxOvTCLjia4vo6UWbEDyBgda1DXQT4lTBxfQyj%2FdTQZn0gJ3e8TZ4vVPO53H2tnKDLW4xAlg5hTmIYVA%2B3XMO%2Fb6BrcJo3yUavgwJFBfKvdgwxvCn1rzbIxLunAc&X-Amz-Signature=1d94c891c09d5785cacc272e6645ba49f8cd23aa064d920495b7acd5455226c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YR4BOR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCBFdRjM75tlGcFSIyhK3RVGHHKR5cQXPwxlj4BujKbxwIgUaPtx11reEthHfWECSK8C3cCMNhrMIU9k%2B03Jd95PiQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfBPvecV%2BRZYtV5kCrcA2h%2Bn7xx0X9fbnqP0N5fcPjFq1lFV8vxujnqq0%2BVmS5mCSTrCF1CM9bkGFMT7qJ1fSgjYxn6D%2FG9g%2BaHa1ZizLreq3sfVU158I4Jm%2Ftl5RIjsHx60Luw5Jb3ez88nEfVruA25r95CakyLNPokoay2foTEQ8RExwrFoFMy4ur809o%2BajPeOLpfI5NHGek8QDgO%2FWlT9cSqv3giRnUvGD5PSkKZ6RIHZ7aM7citvpSs0dOtjgjxqdpsHSaQOIJ%2FZndk3uJb%2FRfNeNsVqq0%2FuuumxiRaqbpRR32K%2BGl9W8QryPjOcP0%2FQTltj7Z0HXyB8BDVlQs5988On69gK90Hqe79usE%2BAuRzrx2HbGQX6uTvbNVYvjuV3FAV5B%2BNwg1csaRxDrLEUMnX%2FXPUlXNAXJPvTLUXdljaEcjEoccAE3Oo8qMkKQv%2FwEz790sSn3B9DnM5xbyVUQ6Fbxc9jHAWI00N9pPAekffGst3hJWAKsxitNGDSGF%2BDo5PosOvCC04KLbOuOGFnSgVuhMXV6o6rjy%2FvBrq4WxfHVawseOOhMdha8Vk75Av5WM6MR%2BnuIqueylGVyssOdc4xqkpsYsnq%2B2%2FkP3ry9ESqEk7WSYI75jy9P%2FDMOCzvm2eVCpGU5iMM7m%2B8EGOqUBNjdIEmjeanxzQBGkDakd7ogZcqdm3DIqFhP0kDtb2a3grtQGFpOP6XD%2BhjQjSbOO%2F57CdKDa6EMsToWf41Q0oIsc5PhkuUmcdxOvTCLjia4vo6UWbEDyBgda1DXQT4lTBxfQyj%2FdTQZn0gJ3e8TZ4vVPO53H2tnKDLW4xAlg5hTmIYVA%2B3XMO%2Fb6BrcJo3yUavgwJFBfKvdgwxvCn1rzbIxLunAc&X-Amz-Signature=9a8e2964478dc790a5d26031db21c3d18d87c195dd59c8265511f542df5687da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YR4BOR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCBFdRjM75tlGcFSIyhK3RVGHHKR5cQXPwxlj4BujKbxwIgUaPtx11reEthHfWECSK8C3cCMNhrMIU9k%2B03Jd95PiQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfBPvecV%2BRZYtV5kCrcA2h%2Bn7xx0X9fbnqP0N5fcPjFq1lFV8vxujnqq0%2BVmS5mCSTrCF1CM9bkGFMT7qJ1fSgjYxn6D%2FG9g%2BaHa1ZizLreq3sfVU158I4Jm%2Ftl5RIjsHx60Luw5Jb3ez88nEfVruA25r95CakyLNPokoay2foTEQ8RExwrFoFMy4ur809o%2BajPeOLpfI5NHGek8QDgO%2FWlT9cSqv3giRnUvGD5PSkKZ6RIHZ7aM7citvpSs0dOtjgjxqdpsHSaQOIJ%2FZndk3uJb%2FRfNeNsVqq0%2FuuumxiRaqbpRR32K%2BGl9W8QryPjOcP0%2FQTltj7Z0HXyB8BDVlQs5988On69gK90Hqe79usE%2BAuRzrx2HbGQX6uTvbNVYvjuV3FAV5B%2BNwg1csaRxDrLEUMnX%2FXPUlXNAXJPvTLUXdljaEcjEoccAE3Oo8qMkKQv%2FwEz790sSn3B9DnM5xbyVUQ6Fbxc9jHAWI00N9pPAekffGst3hJWAKsxitNGDSGF%2BDo5PosOvCC04KLbOuOGFnSgVuhMXV6o6rjy%2FvBrq4WxfHVawseOOhMdha8Vk75Av5WM6MR%2BnuIqueylGVyssOdc4xqkpsYsnq%2B2%2FkP3ry9ESqEk7WSYI75jy9P%2FDMOCzvm2eVCpGU5iMM7m%2B8EGOqUBNjdIEmjeanxzQBGkDakd7ogZcqdm3DIqFhP0kDtb2a3grtQGFpOP6XD%2BhjQjSbOO%2F57CdKDa6EMsToWf41Q0oIsc5PhkuUmcdxOvTCLjia4vo6UWbEDyBgda1DXQT4lTBxfQyj%2FdTQZn0gJ3e8TZ4vVPO53H2tnKDLW4xAlg5hTmIYVA%2B3XMO%2Fb6BrcJo3yUavgwJFBfKvdgwxvCn1rzbIxLunAc&X-Amz-Signature=d36b4a1bdc01c8fba91bf7473bd351b6d4a6c224485801c36ddf5befcf8aae58&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2YR4BOR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T141007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCBFdRjM75tlGcFSIyhK3RVGHHKR5cQXPwxlj4BujKbxwIgUaPtx11reEthHfWECSK8C3cCMNhrMIU9k%2B03Jd95PiQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAfBPvecV%2BRZYtV5kCrcA2h%2Bn7xx0X9fbnqP0N5fcPjFq1lFV8vxujnqq0%2BVmS5mCSTrCF1CM9bkGFMT7qJ1fSgjYxn6D%2FG9g%2BaHa1ZizLreq3sfVU158I4Jm%2Ftl5RIjsHx60Luw5Jb3ez88nEfVruA25r95CakyLNPokoay2foTEQ8RExwrFoFMy4ur809o%2BajPeOLpfI5NHGek8QDgO%2FWlT9cSqv3giRnUvGD5PSkKZ6RIHZ7aM7citvpSs0dOtjgjxqdpsHSaQOIJ%2FZndk3uJb%2FRfNeNsVqq0%2FuuumxiRaqbpRR32K%2BGl9W8QryPjOcP0%2FQTltj7Z0HXyB8BDVlQs5988On69gK90Hqe79usE%2BAuRzrx2HbGQX6uTvbNVYvjuV3FAV5B%2BNwg1csaRxDrLEUMnX%2FXPUlXNAXJPvTLUXdljaEcjEoccAE3Oo8qMkKQv%2FwEz790sSn3B9DnM5xbyVUQ6Fbxc9jHAWI00N9pPAekffGst3hJWAKsxitNGDSGF%2BDo5PosOvCC04KLbOuOGFnSgVuhMXV6o6rjy%2FvBrq4WxfHVawseOOhMdha8Vk75Av5WM6MR%2BnuIqueylGVyssOdc4xqkpsYsnq%2B2%2FkP3ry9ESqEk7WSYI75jy9P%2FDMOCzvm2eVCpGU5iMM7m%2B8EGOqUBNjdIEmjeanxzQBGkDakd7ogZcqdm3DIqFhP0kDtb2a3grtQGFpOP6XD%2BhjQjSbOO%2F57CdKDa6EMsToWf41Q0oIsc5PhkuUmcdxOvTCLjia4vo6UWbEDyBgda1DXQT4lTBxfQyj%2FdTQZn0gJ3e8TZ4vVPO53H2tnKDLW4xAlg5hTmIYVA%2B3XMO%2Fb6BrcJo3yUavgwJFBfKvdgwxvCn1rzbIxLunAc&X-Amz-Signature=7e69d7c95bd5cf1a1a41872ff053d624f2ea6b8d576ea849253a1bc166caa74d&X-Amz-SignedHeaders=host&x-id=GetObject)
