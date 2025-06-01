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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZBA4TA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCs1TwcCaToPhpnxYZRu59WmjSqaP%2BBdfxsvzQBf72qKQIhAPylO5OtlpKX4U9%2FkW3pz5rzMvrxVhkJz0gX7gInxobzKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFgxfciHIHVkfN6Ygq3AMWVPAzLwHQebuFXQP0hEczB%2BLGUMisH8ObQrc7gxWIbLqgFDEQoPonbxjzVdcxZTigPF7lu9ffewS5e67gsLu62f6s%2FlRWaKgsSPuarS8pKRnc8qKd7%2FsfcY1mbyqiCHhNgsCtlvfPQbAXHbJZ0CscqZDW93ATZ45%2B4idNbe3CrDcjNyZbH6OYGBkHRnd8hgGvvzeGVDBO53uz030yjMHPsVxRM6zzx9%2FLUXMByajG%2B1HMDQcZNnon9C8ZPOQpAfQl8dCInXMawSOtGQk4AVghbmfIBp4oq6FaVrrSnHLRcWDgBPHwSUAKkKU4tIrj01G2kuzHypPkTc73Ct87ycYqQljW2fnPgoFt5PVkZj5NYZACa5Iyr%2Bivx2pQhJgF8E2okBABtrZKPTLF2FJMpkbfVhSB2HcI9L3T0CosFUQWnITvHiE%2FaIi%2B2bgT5RGspaoKqw5fWQZ3BFGFbD8d4izBfWehOU62hgm8NLct1YVMs%2Bh1MXmV1hVh1NIeU53gwWvyBJyvEGYDG%2BfMFrwh4CbTueJxNbk1JRwgvvV8454j4FgdUpsY0QfF81X%2F5myKOUtzNEBSO%2FSNd9SOYlGSyDVGVNM%2FWsh550ezS1XKz4l1QD%2B8gJRF9RpouoRZ3DCH7e7BBjqkAal1aPns2%2Fv8w%2FU1M6dGvS89vPhqGkLtP4KxSV13l59LhLHxu%2F6JRt%2BNmCrTmF2PmBVavAUSUzecJ6Am87hKuCwDIbwP6mphkdPhmGsFTiei6EHpWArgkgnZzBh6WqiIjz2j6ZQJBzqgxoloU0tjZ9gPgP3fWLBD2llDSSHXd8sErJNW99eeCephxwujkvFKKqCvpiTan62cN1EbunFjBZUwgV9A&X-Amz-Signature=f92945bb424d2ebe0c20fe9eaa530e49c9de3c843bc952a8c69a57768b65b96b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZBA4TA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCs1TwcCaToPhpnxYZRu59WmjSqaP%2BBdfxsvzQBf72qKQIhAPylO5OtlpKX4U9%2FkW3pz5rzMvrxVhkJz0gX7gInxobzKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFgxfciHIHVkfN6Ygq3AMWVPAzLwHQebuFXQP0hEczB%2BLGUMisH8ObQrc7gxWIbLqgFDEQoPonbxjzVdcxZTigPF7lu9ffewS5e67gsLu62f6s%2FlRWaKgsSPuarS8pKRnc8qKd7%2FsfcY1mbyqiCHhNgsCtlvfPQbAXHbJZ0CscqZDW93ATZ45%2B4idNbe3CrDcjNyZbH6OYGBkHRnd8hgGvvzeGVDBO53uz030yjMHPsVxRM6zzx9%2FLUXMByajG%2B1HMDQcZNnon9C8ZPOQpAfQl8dCInXMawSOtGQk4AVghbmfIBp4oq6FaVrrSnHLRcWDgBPHwSUAKkKU4tIrj01G2kuzHypPkTc73Ct87ycYqQljW2fnPgoFt5PVkZj5NYZACa5Iyr%2Bivx2pQhJgF8E2okBABtrZKPTLF2FJMpkbfVhSB2HcI9L3T0CosFUQWnITvHiE%2FaIi%2B2bgT5RGspaoKqw5fWQZ3BFGFbD8d4izBfWehOU62hgm8NLct1YVMs%2Bh1MXmV1hVh1NIeU53gwWvyBJyvEGYDG%2BfMFrwh4CbTueJxNbk1JRwgvvV8454j4FgdUpsY0QfF81X%2F5myKOUtzNEBSO%2FSNd9SOYlGSyDVGVNM%2FWsh550ezS1XKz4l1QD%2B8gJRF9RpouoRZ3DCH7e7BBjqkAal1aPns2%2Fv8w%2FU1M6dGvS89vPhqGkLtP4KxSV13l59LhLHxu%2F6JRt%2BNmCrTmF2PmBVavAUSUzecJ6Am87hKuCwDIbwP6mphkdPhmGsFTiei6EHpWArgkgnZzBh6WqiIjz2j6ZQJBzqgxoloU0tjZ9gPgP3fWLBD2llDSSHXd8sErJNW99eeCephxwujkvFKKqCvpiTan62cN1EbunFjBZUwgV9A&X-Amz-Signature=bd317c03633688a64a8911077f20d32da5dcbff0f0c5886053f307167c3bf8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZBA4TA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCs1TwcCaToPhpnxYZRu59WmjSqaP%2BBdfxsvzQBf72qKQIhAPylO5OtlpKX4U9%2FkW3pz5rzMvrxVhkJz0gX7gInxobzKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFgxfciHIHVkfN6Ygq3AMWVPAzLwHQebuFXQP0hEczB%2BLGUMisH8ObQrc7gxWIbLqgFDEQoPonbxjzVdcxZTigPF7lu9ffewS5e67gsLu62f6s%2FlRWaKgsSPuarS8pKRnc8qKd7%2FsfcY1mbyqiCHhNgsCtlvfPQbAXHbJZ0CscqZDW93ATZ45%2B4idNbe3CrDcjNyZbH6OYGBkHRnd8hgGvvzeGVDBO53uz030yjMHPsVxRM6zzx9%2FLUXMByajG%2B1HMDQcZNnon9C8ZPOQpAfQl8dCInXMawSOtGQk4AVghbmfIBp4oq6FaVrrSnHLRcWDgBPHwSUAKkKU4tIrj01G2kuzHypPkTc73Ct87ycYqQljW2fnPgoFt5PVkZj5NYZACa5Iyr%2Bivx2pQhJgF8E2okBABtrZKPTLF2FJMpkbfVhSB2HcI9L3T0CosFUQWnITvHiE%2FaIi%2B2bgT5RGspaoKqw5fWQZ3BFGFbD8d4izBfWehOU62hgm8NLct1YVMs%2Bh1MXmV1hVh1NIeU53gwWvyBJyvEGYDG%2BfMFrwh4CbTueJxNbk1JRwgvvV8454j4FgdUpsY0QfF81X%2F5myKOUtzNEBSO%2FSNd9SOYlGSyDVGVNM%2FWsh550ezS1XKz4l1QD%2B8gJRF9RpouoRZ3DCH7e7BBjqkAal1aPns2%2Fv8w%2FU1M6dGvS89vPhqGkLtP4KxSV13l59LhLHxu%2F6JRt%2BNmCrTmF2PmBVavAUSUzecJ6Am87hKuCwDIbwP6mphkdPhmGsFTiei6EHpWArgkgnZzBh6WqiIjz2j6ZQJBzqgxoloU0tjZ9gPgP3fWLBD2llDSSHXd8sErJNW99eeCephxwujkvFKKqCvpiTan62cN1EbunFjBZUwgV9A&X-Amz-Signature=aa2e7a381c600db84c5d391fd6ae2e996c22e45548178d946564748397118f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZBA4TA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCs1TwcCaToPhpnxYZRu59WmjSqaP%2BBdfxsvzQBf72qKQIhAPylO5OtlpKX4U9%2FkW3pz5rzMvrxVhkJz0gX7gInxobzKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFgxfciHIHVkfN6Ygq3AMWVPAzLwHQebuFXQP0hEczB%2BLGUMisH8ObQrc7gxWIbLqgFDEQoPonbxjzVdcxZTigPF7lu9ffewS5e67gsLu62f6s%2FlRWaKgsSPuarS8pKRnc8qKd7%2FsfcY1mbyqiCHhNgsCtlvfPQbAXHbJZ0CscqZDW93ATZ45%2B4idNbe3CrDcjNyZbH6OYGBkHRnd8hgGvvzeGVDBO53uz030yjMHPsVxRM6zzx9%2FLUXMByajG%2B1HMDQcZNnon9C8ZPOQpAfQl8dCInXMawSOtGQk4AVghbmfIBp4oq6FaVrrSnHLRcWDgBPHwSUAKkKU4tIrj01G2kuzHypPkTc73Ct87ycYqQljW2fnPgoFt5PVkZj5NYZACa5Iyr%2Bivx2pQhJgF8E2okBABtrZKPTLF2FJMpkbfVhSB2HcI9L3T0CosFUQWnITvHiE%2FaIi%2B2bgT5RGspaoKqw5fWQZ3BFGFbD8d4izBfWehOU62hgm8NLct1YVMs%2Bh1MXmV1hVh1NIeU53gwWvyBJyvEGYDG%2BfMFrwh4CbTueJxNbk1JRwgvvV8454j4FgdUpsY0QfF81X%2F5myKOUtzNEBSO%2FSNd9SOYlGSyDVGVNM%2FWsh550ezS1XKz4l1QD%2B8gJRF9RpouoRZ3DCH7e7BBjqkAal1aPns2%2Fv8w%2FU1M6dGvS89vPhqGkLtP4KxSV13l59LhLHxu%2F6JRt%2BNmCrTmF2PmBVavAUSUzecJ6Am87hKuCwDIbwP6mphkdPhmGsFTiei6EHpWArgkgnZzBh6WqiIjz2j6ZQJBzqgxoloU0tjZ9gPgP3fWLBD2llDSSHXd8sErJNW99eeCephxwujkvFKKqCvpiTan62cN1EbunFjBZUwgV9A&X-Amz-Signature=333e1e2f43e47f98b5fb739fd7fa103280484f24d51c531b91f84685cd08610c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZBA4TA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCs1TwcCaToPhpnxYZRu59WmjSqaP%2BBdfxsvzQBf72qKQIhAPylO5OtlpKX4U9%2FkW3pz5rzMvrxVhkJz0gX7gInxobzKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFgxfciHIHVkfN6Ygq3AMWVPAzLwHQebuFXQP0hEczB%2BLGUMisH8ObQrc7gxWIbLqgFDEQoPonbxjzVdcxZTigPF7lu9ffewS5e67gsLu62f6s%2FlRWaKgsSPuarS8pKRnc8qKd7%2FsfcY1mbyqiCHhNgsCtlvfPQbAXHbJZ0CscqZDW93ATZ45%2B4idNbe3CrDcjNyZbH6OYGBkHRnd8hgGvvzeGVDBO53uz030yjMHPsVxRM6zzx9%2FLUXMByajG%2B1HMDQcZNnon9C8ZPOQpAfQl8dCInXMawSOtGQk4AVghbmfIBp4oq6FaVrrSnHLRcWDgBPHwSUAKkKU4tIrj01G2kuzHypPkTc73Ct87ycYqQljW2fnPgoFt5PVkZj5NYZACa5Iyr%2Bivx2pQhJgF8E2okBABtrZKPTLF2FJMpkbfVhSB2HcI9L3T0CosFUQWnITvHiE%2FaIi%2B2bgT5RGspaoKqw5fWQZ3BFGFbD8d4izBfWehOU62hgm8NLct1YVMs%2Bh1MXmV1hVh1NIeU53gwWvyBJyvEGYDG%2BfMFrwh4CbTueJxNbk1JRwgvvV8454j4FgdUpsY0QfF81X%2F5myKOUtzNEBSO%2FSNd9SOYlGSyDVGVNM%2FWsh550ezS1XKz4l1QD%2B8gJRF9RpouoRZ3DCH7e7BBjqkAal1aPns2%2Fv8w%2FU1M6dGvS89vPhqGkLtP4KxSV13l59LhLHxu%2F6JRt%2BNmCrTmF2PmBVavAUSUzecJ6Am87hKuCwDIbwP6mphkdPhmGsFTiei6EHpWArgkgnZzBh6WqiIjz2j6ZQJBzqgxoloU0tjZ9gPgP3fWLBD2llDSSHXd8sErJNW99eeCephxwujkvFKKqCvpiTan62cN1EbunFjBZUwgV9A&X-Amz-Signature=63fd942c956dfc99247f6a14e065d4c31438a9fcc5a9e9339c03399bf7c68b55&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZBA4TA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCs1TwcCaToPhpnxYZRu59WmjSqaP%2BBdfxsvzQBf72qKQIhAPylO5OtlpKX4U9%2FkW3pz5rzMvrxVhkJz0gX7gInxobzKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFgxfciHIHVkfN6Ygq3AMWVPAzLwHQebuFXQP0hEczB%2BLGUMisH8ObQrc7gxWIbLqgFDEQoPonbxjzVdcxZTigPF7lu9ffewS5e67gsLu62f6s%2FlRWaKgsSPuarS8pKRnc8qKd7%2FsfcY1mbyqiCHhNgsCtlvfPQbAXHbJZ0CscqZDW93ATZ45%2B4idNbe3CrDcjNyZbH6OYGBkHRnd8hgGvvzeGVDBO53uz030yjMHPsVxRM6zzx9%2FLUXMByajG%2B1HMDQcZNnon9C8ZPOQpAfQl8dCInXMawSOtGQk4AVghbmfIBp4oq6FaVrrSnHLRcWDgBPHwSUAKkKU4tIrj01G2kuzHypPkTc73Ct87ycYqQljW2fnPgoFt5PVkZj5NYZACa5Iyr%2Bivx2pQhJgF8E2okBABtrZKPTLF2FJMpkbfVhSB2HcI9L3T0CosFUQWnITvHiE%2FaIi%2B2bgT5RGspaoKqw5fWQZ3BFGFbD8d4izBfWehOU62hgm8NLct1YVMs%2Bh1MXmV1hVh1NIeU53gwWvyBJyvEGYDG%2BfMFrwh4CbTueJxNbk1JRwgvvV8454j4FgdUpsY0QfF81X%2F5myKOUtzNEBSO%2FSNd9SOYlGSyDVGVNM%2FWsh550ezS1XKz4l1QD%2B8gJRF9RpouoRZ3DCH7e7BBjqkAal1aPns2%2Fv8w%2FU1M6dGvS89vPhqGkLtP4KxSV13l59LhLHxu%2F6JRt%2BNmCrTmF2PmBVavAUSUzecJ6Am87hKuCwDIbwP6mphkdPhmGsFTiei6EHpWArgkgnZzBh6WqiIjz2j6ZQJBzqgxoloU0tjZ9gPgP3fWLBD2llDSSHXd8sErJNW99eeCephxwujkvFKKqCvpiTan62cN1EbunFjBZUwgV9A&X-Amz-Signature=0189015856a9ed07f6483b59899c1d6d2db00693d4aa41939a99e688f079fcb7&X-Amz-SignedHeaders=host&x-id=GetObject)
