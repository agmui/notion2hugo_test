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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIW4OPFV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDHoQHxaeFKPT0nq3gHWBBFNTJTqBhXxzC5wrjmvt7BLAiBFDTDrt3gIM7wzmuGCI6Mz2TBcEDvINxyrKGAfDYuxBSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhnF3dNTZEgFC3SSbKtwD77c4mgM3pL2NhXMSdPugOhSIGG7Hsz0U7wtsC3%2B2mRzFuf4oRJrP1%2FNZf1lqNF6ISEzvowILSDC9sBGhdlS1%2FZ%2FEe2coOzicamF7lc327bsZ2LAghidX2zirEWghZdFjcXJZvcmH3gzy%2FlFlQ%2Bt7MOdu%2FIDCaX0ztNfc4EkAiEymMh05ZslmFYaX1h3jMtYMkfD2BD7RXUGULxWVRgetwTnRhHmJeFOX3Xh%2FeKmU2vsdjeELksSFDI%2F%2FAMStNM%2Bi9r6y7WYZzS%2BKI5NrFvH9y%2B6iG6II%2Fz3aCk6avyXRHqV82UHHbqTzuUdpz6C4nrZgWM0WHZIc%2BHCKe4r7B84%2FO3M1TRowE3nMhZNWsq1rOJRT%2BeCyFJ1GMVOr8tKmpp9RKC300EqeHVD%2BcQ1KoSPa4h%2BsLci0o0VhkDAnw2QXbewRzEnDftds6Isk9ySwnAZVM%2B%2B4AaD1bg1QmKT7oxU5cx3URNtKG6cziT%2BsnPaxrx3%2BFLVRioeXl19gKdIhbYWcXUtt2hFLJ6l4z0jZYBzCloBDdeToUNO75fkdvxnEyafpm%2B1w8UTI1oPPA96Eqek%2FTNHVrukXZcWtak2jQhdWNc8Amr03zsVfP%2BFGFbvTcf71oJO%2BdJLuonnQAtMw9qrivwY6pgF4rJ8I1647ntA2gVMVCi6qFdabMkW6yTNIbMpjZWNFHYr0D%2B2NBlHcFiiRia2HSzVVB7gy9ex%2BnK4uPuMhCOpbpcbQYaP3%2FtPNjVaPgqH7gJWP3i96a31BocrP%2Fk%2F6dVWTKcBuYqlHpKSxMpTzrYHvxHv1QhERBaAnHIaXWQduqp4AORi800yr3TH2f6HZ7utgUApaXch%2Fyk%2B2SDx2cW9U9o6qBfwb&X-Amz-Signature=1e02c0ffd396fcb94006f5bbd2b289706b784660d919ae26037a944d06d61dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIW4OPFV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDHoQHxaeFKPT0nq3gHWBBFNTJTqBhXxzC5wrjmvt7BLAiBFDTDrt3gIM7wzmuGCI6Mz2TBcEDvINxyrKGAfDYuxBSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhnF3dNTZEgFC3SSbKtwD77c4mgM3pL2NhXMSdPugOhSIGG7Hsz0U7wtsC3%2B2mRzFuf4oRJrP1%2FNZf1lqNF6ISEzvowILSDC9sBGhdlS1%2FZ%2FEe2coOzicamF7lc327bsZ2LAghidX2zirEWghZdFjcXJZvcmH3gzy%2FlFlQ%2Bt7MOdu%2FIDCaX0ztNfc4EkAiEymMh05ZslmFYaX1h3jMtYMkfD2BD7RXUGULxWVRgetwTnRhHmJeFOX3Xh%2FeKmU2vsdjeELksSFDI%2F%2FAMStNM%2Bi9r6y7WYZzS%2BKI5NrFvH9y%2B6iG6II%2Fz3aCk6avyXRHqV82UHHbqTzuUdpz6C4nrZgWM0WHZIc%2BHCKe4r7B84%2FO3M1TRowE3nMhZNWsq1rOJRT%2BeCyFJ1GMVOr8tKmpp9RKC300EqeHVD%2BcQ1KoSPa4h%2BsLci0o0VhkDAnw2QXbewRzEnDftds6Isk9ySwnAZVM%2B%2B4AaD1bg1QmKT7oxU5cx3URNtKG6cziT%2BsnPaxrx3%2BFLVRioeXl19gKdIhbYWcXUtt2hFLJ6l4z0jZYBzCloBDdeToUNO75fkdvxnEyafpm%2B1w8UTI1oPPA96Eqek%2FTNHVrukXZcWtak2jQhdWNc8Amr03zsVfP%2BFGFbvTcf71oJO%2BdJLuonnQAtMw9qrivwY6pgF4rJ8I1647ntA2gVMVCi6qFdabMkW6yTNIbMpjZWNFHYr0D%2B2NBlHcFiiRia2HSzVVB7gy9ex%2BnK4uPuMhCOpbpcbQYaP3%2FtPNjVaPgqH7gJWP3i96a31BocrP%2Fk%2F6dVWTKcBuYqlHpKSxMpTzrYHvxHv1QhERBaAnHIaXWQduqp4AORi800yr3TH2f6HZ7utgUApaXch%2Fyk%2B2SDx2cW9U9o6qBfwb&X-Amz-Signature=852ac87b8c7b4a48d7c6f5dce36ac681f51a8e15b34b57bb796fc406b5475b01&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIW4OPFV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDHoQHxaeFKPT0nq3gHWBBFNTJTqBhXxzC5wrjmvt7BLAiBFDTDrt3gIM7wzmuGCI6Mz2TBcEDvINxyrKGAfDYuxBSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhnF3dNTZEgFC3SSbKtwD77c4mgM3pL2NhXMSdPugOhSIGG7Hsz0U7wtsC3%2B2mRzFuf4oRJrP1%2FNZf1lqNF6ISEzvowILSDC9sBGhdlS1%2FZ%2FEe2coOzicamF7lc327bsZ2LAghidX2zirEWghZdFjcXJZvcmH3gzy%2FlFlQ%2Bt7MOdu%2FIDCaX0ztNfc4EkAiEymMh05ZslmFYaX1h3jMtYMkfD2BD7RXUGULxWVRgetwTnRhHmJeFOX3Xh%2FeKmU2vsdjeELksSFDI%2F%2FAMStNM%2Bi9r6y7WYZzS%2BKI5NrFvH9y%2B6iG6II%2Fz3aCk6avyXRHqV82UHHbqTzuUdpz6C4nrZgWM0WHZIc%2BHCKe4r7B84%2FO3M1TRowE3nMhZNWsq1rOJRT%2BeCyFJ1GMVOr8tKmpp9RKC300EqeHVD%2BcQ1KoSPa4h%2BsLci0o0VhkDAnw2QXbewRzEnDftds6Isk9ySwnAZVM%2B%2B4AaD1bg1QmKT7oxU5cx3URNtKG6cziT%2BsnPaxrx3%2BFLVRioeXl19gKdIhbYWcXUtt2hFLJ6l4z0jZYBzCloBDdeToUNO75fkdvxnEyafpm%2B1w8UTI1oPPA96Eqek%2FTNHVrukXZcWtak2jQhdWNc8Amr03zsVfP%2BFGFbvTcf71oJO%2BdJLuonnQAtMw9qrivwY6pgF4rJ8I1647ntA2gVMVCi6qFdabMkW6yTNIbMpjZWNFHYr0D%2B2NBlHcFiiRia2HSzVVB7gy9ex%2BnK4uPuMhCOpbpcbQYaP3%2FtPNjVaPgqH7gJWP3i96a31BocrP%2Fk%2F6dVWTKcBuYqlHpKSxMpTzrYHvxHv1QhERBaAnHIaXWQduqp4AORi800yr3TH2f6HZ7utgUApaXch%2Fyk%2B2SDx2cW9U9o6qBfwb&X-Amz-Signature=076e1763d7781791181c45c4e73c28985c47ff908692944324d3142be8699e41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIW4OPFV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDHoQHxaeFKPT0nq3gHWBBFNTJTqBhXxzC5wrjmvt7BLAiBFDTDrt3gIM7wzmuGCI6Mz2TBcEDvINxyrKGAfDYuxBSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhnF3dNTZEgFC3SSbKtwD77c4mgM3pL2NhXMSdPugOhSIGG7Hsz0U7wtsC3%2B2mRzFuf4oRJrP1%2FNZf1lqNF6ISEzvowILSDC9sBGhdlS1%2FZ%2FEe2coOzicamF7lc327bsZ2LAghidX2zirEWghZdFjcXJZvcmH3gzy%2FlFlQ%2Bt7MOdu%2FIDCaX0ztNfc4EkAiEymMh05ZslmFYaX1h3jMtYMkfD2BD7RXUGULxWVRgetwTnRhHmJeFOX3Xh%2FeKmU2vsdjeELksSFDI%2F%2FAMStNM%2Bi9r6y7WYZzS%2BKI5NrFvH9y%2B6iG6II%2Fz3aCk6avyXRHqV82UHHbqTzuUdpz6C4nrZgWM0WHZIc%2BHCKe4r7B84%2FO3M1TRowE3nMhZNWsq1rOJRT%2BeCyFJ1GMVOr8tKmpp9RKC300EqeHVD%2BcQ1KoSPa4h%2BsLci0o0VhkDAnw2QXbewRzEnDftds6Isk9ySwnAZVM%2B%2B4AaD1bg1QmKT7oxU5cx3URNtKG6cziT%2BsnPaxrx3%2BFLVRioeXl19gKdIhbYWcXUtt2hFLJ6l4z0jZYBzCloBDdeToUNO75fkdvxnEyafpm%2B1w8UTI1oPPA96Eqek%2FTNHVrukXZcWtak2jQhdWNc8Amr03zsVfP%2BFGFbvTcf71oJO%2BdJLuonnQAtMw9qrivwY6pgF4rJ8I1647ntA2gVMVCi6qFdabMkW6yTNIbMpjZWNFHYr0D%2B2NBlHcFiiRia2HSzVVB7gy9ex%2BnK4uPuMhCOpbpcbQYaP3%2FtPNjVaPgqH7gJWP3i96a31BocrP%2Fk%2F6dVWTKcBuYqlHpKSxMpTzrYHvxHv1QhERBaAnHIaXWQduqp4AORi800yr3TH2f6HZ7utgUApaXch%2Fyk%2B2SDx2cW9U9o6qBfwb&X-Amz-Signature=59746532346f841c8ef29f0cf355c5b024e7fb147d8a11f8f356843bd8513a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIW4OPFV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDHoQHxaeFKPT0nq3gHWBBFNTJTqBhXxzC5wrjmvt7BLAiBFDTDrt3gIM7wzmuGCI6Mz2TBcEDvINxyrKGAfDYuxBSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhnF3dNTZEgFC3SSbKtwD77c4mgM3pL2NhXMSdPugOhSIGG7Hsz0U7wtsC3%2B2mRzFuf4oRJrP1%2FNZf1lqNF6ISEzvowILSDC9sBGhdlS1%2FZ%2FEe2coOzicamF7lc327bsZ2LAghidX2zirEWghZdFjcXJZvcmH3gzy%2FlFlQ%2Bt7MOdu%2FIDCaX0ztNfc4EkAiEymMh05ZslmFYaX1h3jMtYMkfD2BD7RXUGULxWVRgetwTnRhHmJeFOX3Xh%2FeKmU2vsdjeELksSFDI%2F%2FAMStNM%2Bi9r6y7WYZzS%2BKI5NrFvH9y%2B6iG6II%2Fz3aCk6avyXRHqV82UHHbqTzuUdpz6C4nrZgWM0WHZIc%2BHCKe4r7B84%2FO3M1TRowE3nMhZNWsq1rOJRT%2BeCyFJ1GMVOr8tKmpp9RKC300EqeHVD%2BcQ1KoSPa4h%2BsLci0o0VhkDAnw2QXbewRzEnDftds6Isk9ySwnAZVM%2B%2B4AaD1bg1QmKT7oxU5cx3URNtKG6cziT%2BsnPaxrx3%2BFLVRioeXl19gKdIhbYWcXUtt2hFLJ6l4z0jZYBzCloBDdeToUNO75fkdvxnEyafpm%2B1w8UTI1oPPA96Eqek%2FTNHVrukXZcWtak2jQhdWNc8Amr03zsVfP%2BFGFbvTcf71oJO%2BdJLuonnQAtMw9qrivwY6pgF4rJ8I1647ntA2gVMVCi6qFdabMkW6yTNIbMpjZWNFHYr0D%2B2NBlHcFiiRia2HSzVVB7gy9ex%2BnK4uPuMhCOpbpcbQYaP3%2FtPNjVaPgqH7gJWP3i96a31BocrP%2Fk%2F6dVWTKcBuYqlHpKSxMpTzrYHvxHv1QhERBaAnHIaXWQduqp4AORi800yr3TH2f6HZ7utgUApaXch%2Fyk%2B2SDx2cW9U9o6qBfwb&X-Amz-Signature=3a42668212961c5837a281e6e2403a220a4a6b182aaf90e82ff301dedd1785f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIW4OPFV%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDHoQHxaeFKPT0nq3gHWBBFNTJTqBhXxzC5wrjmvt7BLAiBFDTDrt3gIM7wzmuGCI6Mz2TBcEDvINxyrKGAfDYuxBSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhnF3dNTZEgFC3SSbKtwD77c4mgM3pL2NhXMSdPugOhSIGG7Hsz0U7wtsC3%2B2mRzFuf4oRJrP1%2FNZf1lqNF6ISEzvowILSDC9sBGhdlS1%2FZ%2FEe2coOzicamF7lc327bsZ2LAghidX2zirEWghZdFjcXJZvcmH3gzy%2FlFlQ%2Bt7MOdu%2FIDCaX0ztNfc4EkAiEymMh05ZslmFYaX1h3jMtYMkfD2BD7RXUGULxWVRgetwTnRhHmJeFOX3Xh%2FeKmU2vsdjeELksSFDI%2F%2FAMStNM%2Bi9r6y7WYZzS%2BKI5NrFvH9y%2B6iG6II%2Fz3aCk6avyXRHqV82UHHbqTzuUdpz6C4nrZgWM0WHZIc%2BHCKe4r7B84%2FO3M1TRowE3nMhZNWsq1rOJRT%2BeCyFJ1GMVOr8tKmpp9RKC300EqeHVD%2BcQ1KoSPa4h%2BsLci0o0VhkDAnw2QXbewRzEnDftds6Isk9ySwnAZVM%2B%2B4AaD1bg1QmKT7oxU5cx3URNtKG6cziT%2BsnPaxrx3%2BFLVRioeXl19gKdIhbYWcXUtt2hFLJ6l4z0jZYBzCloBDdeToUNO75fkdvxnEyafpm%2B1w8UTI1oPPA96Eqek%2FTNHVrukXZcWtak2jQhdWNc8Amr03zsVfP%2BFGFbvTcf71oJO%2BdJLuonnQAtMw9qrivwY6pgF4rJ8I1647ntA2gVMVCi6qFdabMkW6yTNIbMpjZWNFHYr0D%2B2NBlHcFiiRia2HSzVVB7gy9ex%2BnK4uPuMhCOpbpcbQYaP3%2FtPNjVaPgqH7gJWP3i96a31BocrP%2Fk%2F6dVWTKcBuYqlHpKSxMpTzrYHvxHv1QhERBaAnHIaXWQduqp4AORi800yr3TH2f6HZ7utgUApaXch%2Fyk%2B2SDx2cW9U9o6qBfwb&X-Amz-Signature=a63a17ac99c549da90ecf40dfeebf2bbdc9df706ed4b6cae11327fdb4021798b&X-Amz-SignedHeaders=host&x-id=GetObject)
