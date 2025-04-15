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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJTC2Q%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmEl6CJAwW21iZWXf4jnQB07Z7SUEWgTLqrwfrh9mROAiAVAJ8Tc5Sd%2Fp%2F%2BAtrVbmtcfDjdV9qoBhtJmeCSnsrd2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0moQH2SKoJ6%2Ful97KtwDy272n%2FEIYa0CLIvTCy9J%2B3wdj%2FD%2B%2B7PQZ9WbkyaJcW0MS8zRk9yjV5d%2BUIUOsmjZi%2B1lzSjtchXHeR9Byv9YB9r5ze8CdPwkr0vaWY6ZXzgwbaBpN8bDBs16uK6wGD0czGa1XNZOj9r4HgMShkndfIodv3iazHMMszu3EDdft%2Fc6SttiQXH6%2Bp8IulOXQ%2FFDuV%2BFkRGHr3UuNTnVU7Ye%2BC4qgq7hi8ts4mUtleyYtzRA2yCEoFbxyXKZ3y4LB7LuOVOMwG1Mc9%2BxaFmfmPw2QtAPJL15%2F6IFSMBiPRyECt5ZkqH%2B7ZOQpwSyWHoTo6VuUugzdoD9NhZx7ot3VgVjWUClQ5Naq6VzUDJmukf%2F18Jg1bfIEWxvodUfvJn8fmjFI3obRJIKJvYew4DUwRf9GQO1w69II7rhtwbQwBC4XQxSnCEKkUIE9SH5LqBrmE8y3BQGzWB9y%2Bd18ikVLniFnM4eml8hlco8RKe55Hdo9%2FCoO3h76kX1ap0yalaLU%2BxxrDgVa58L9ZoClkqux2GTk1eXfQXCwPKbxpXYJvZ3fCB1oy%2Fhgsllx5hIod67q790eRcBTCUPtJQGpq3pXjRe70YnteU9aGiSz0UFAsNxzEMG%2FFDmgdFR3U9%2FCtswiev2vwY6pgFaZ3u1X3Vm2AXaiLgfhpCIqhfLbvSC9I6LWVxv0bOBOsmdI%2FGSPpHDHGBs2Z%2BPM5jH%2BbXfhouqtX3BKoS4aKGi80%2FDRyw%2B6pooisQyDOrtbwIph8uIO0z8CRfRMi%2FWBwUhLxDQQSC4sxd3R82QvOTIAFp9858FjCIZxnWref0q3G8BAheUo3DbXAQ%2Bh%2FqG6rH1Qup%2FemHZizpt9sYPw0INjdqXiVAj&X-Amz-Signature=e3c365fc6ccf81b04d206f68c4c446c3c1cd423deca60739c49bc5fa183554d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJTC2Q%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmEl6CJAwW21iZWXf4jnQB07Z7SUEWgTLqrwfrh9mROAiAVAJ8Tc5Sd%2Fp%2F%2BAtrVbmtcfDjdV9qoBhtJmeCSnsrd2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0moQH2SKoJ6%2Ful97KtwDy272n%2FEIYa0CLIvTCy9J%2B3wdj%2FD%2B%2B7PQZ9WbkyaJcW0MS8zRk9yjV5d%2BUIUOsmjZi%2B1lzSjtchXHeR9Byv9YB9r5ze8CdPwkr0vaWY6ZXzgwbaBpN8bDBs16uK6wGD0czGa1XNZOj9r4HgMShkndfIodv3iazHMMszu3EDdft%2Fc6SttiQXH6%2Bp8IulOXQ%2FFDuV%2BFkRGHr3UuNTnVU7Ye%2BC4qgq7hi8ts4mUtleyYtzRA2yCEoFbxyXKZ3y4LB7LuOVOMwG1Mc9%2BxaFmfmPw2QtAPJL15%2F6IFSMBiPRyECt5ZkqH%2B7ZOQpwSyWHoTo6VuUugzdoD9NhZx7ot3VgVjWUClQ5Naq6VzUDJmukf%2F18Jg1bfIEWxvodUfvJn8fmjFI3obRJIKJvYew4DUwRf9GQO1w69II7rhtwbQwBC4XQxSnCEKkUIE9SH5LqBrmE8y3BQGzWB9y%2Bd18ikVLniFnM4eml8hlco8RKe55Hdo9%2FCoO3h76kX1ap0yalaLU%2BxxrDgVa58L9ZoClkqux2GTk1eXfQXCwPKbxpXYJvZ3fCB1oy%2Fhgsllx5hIod67q790eRcBTCUPtJQGpq3pXjRe70YnteU9aGiSz0UFAsNxzEMG%2FFDmgdFR3U9%2FCtswiev2vwY6pgFaZ3u1X3Vm2AXaiLgfhpCIqhfLbvSC9I6LWVxv0bOBOsmdI%2FGSPpHDHGBs2Z%2BPM5jH%2BbXfhouqtX3BKoS4aKGi80%2FDRyw%2B6pooisQyDOrtbwIph8uIO0z8CRfRMi%2FWBwUhLxDQQSC4sxd3R82QvOTIAFp9858FjCIZxnWref0q3G8BAheUo3DbXAQ%2Bh%2FqG6rH1Qup%2FemHZizpt9sYPw0INjdqXiVAj&X-Amz-Signature=e1b9f6492f323a2a28be6d00cd043b08a9eb5a5fad5004785356955282a3ecf7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJTC2Q%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmEl6CJAwW21iZWXf4jnQB07Z7SUEWgTLqrwfrh9mROAiAVAJ8Tc5Sd%2Fp%2F%2BAtrVbmtcfDjdV9qoBhtJmeCSnsrd2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0moQH2SKoJ6%2Ful97KtwDy272n%2FEIYa0CLIvTCy9J%2B3wdj%2FD%2B%2B7PQZ9WbkyaJcW0MS8zRk9yjV5d%2BUIUOsmjZi%2B1lzSjtchXHeR9Byv9YB9r5ze8CdPwkr0vaWY6ZXzgwbaBpN8bDBs16uK6wGD0czGa1XNZOj9r4HgMShkndfIodv3iazHMMszu3EDdft%2Fc6SttiQXH6%2Bp8IulOXQ%2FFDuV%2BFkRGHr3UuNTnVU7Ye%2BC4qgq7hi8ts4mUtleyYtzRA2yCEoFbxyXKZ3y4LB7LuOVOMwG1Mc9%2BxaFmfmPw2QtAPJL15%2F6IFSMBiPRyECt5ZkqH%2B7ZOQpwSyWHoTo6VuUugzdoD9NhZx7ot3VgVjWUClQ5Naq6VzUDJmukf%2F18Jg1bfIEWxvodUfvJn8fmjFI3obRJIKJvYew4DUwRf9GQO1w69II7rhtwbQwBC4XQxSnCEKkUIE9SH5LqBrmE8y3BQGzWB9y%2Bd18ikVLniFnM4eml8hlco8RKe55Hdo9%2FCoO3h76kX1ap0yalaLU%2BxxrDgVa58L9ZoClkqux2GTk1eXfQXCwPKbxpXYJvZ3fCB1oy%2Fhgsllx5hIod67q790eRcBTCUPtJQGpq3pXjRe70YnteU9aGiSz0UFAsNxzEMG%2FFDmgdFR3U9%2FCtswiev2vwY6pgFaZ3u1X3Vm2AXaiLgfhpCIqhfLbvSC9I6LWVxv0bOBOsmdI%2FGSPpHDHGBs2Z%2BPM5jH%2BbXfhouqtX3BKoS4aKGi80%2FDRyw%2B6pooisQyDOrtbwIph8uIO0z8CRfRMi%2FWBwUhLxDQQSC4sxd3R82QvOTIAFp9858FjCIZxnWref0q3G8BAheUo3DbXAQ%2Bh%2FqG6rH1Qup%2FemHZizpt9sYPw0INjdqXiVAj&X-Amz-Signature=acafbb76ceccd0fd2d673e66cdef30c5305be77c8259fb3b37432407cc1ce8e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJTC2Q%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmEl6CJAwW21iZWXf4jnQB07Z7SUEWgTLqrwfrh9mROAiAVAJ8Tc5Sd%2Fp%2F%2BAtrVbmtcfDjdV9qoBhtJmeCSnsrd2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0moQH2SKoJ6%2Ful97KtwDy272n%2FEIYa0CLIvTCy9J%2B3wdj%2FD%2B%2B7PQZ9WbkyaJcW0MS8zRk9yjV5d%2BUIUOsmjZi%2B1lzSjtchXHeR9Byv9YB9r5ze8CdPwkr0vaWY6ZXzgwbaBpN8bDBs16uK6wGD0czGa1XNZOj9r4HgMShkndfIodv3iazHMMszu3EDdft%2Fc6SttiQXH6%2Bp8IulOXQ%2FFDuV%2BFkRGHr3UuNTnVU7Ye%2BC4qgq7hi8ts4mUtleyYtzRA2yCEoFbxyXKZ3y4LB7LuOVOMwG1Mc9%2BxaFmfmPw2QtAPJL15%2F6IFSMBiPRyECt5ZkqH%2B7ZOQpwSyWHoTo6VuUugzdoD9NhZx7ot3VgVjWUClQ5Naq6VzUDJmukf%2F18Jg1bfIEWxvodUfvJn8fmjFI3obRJIKJvYew4DUwRf9GQO1w69II7rhtwbQwBC4XQxSnCEKkUIE9SH5LqBrmE8y3BQGzWB9y%2Bd18ikVLniFnM4eml8hlco8RKe55Hdo9%2FCoO3h76kX1ap0yalaLU%2BxxrDgVa58L9ZoClkqux2GTk1eXfQXCwPKbxpXYJvZ3fCB1oy%2Fhgsllx5hIod67q790eRcBTCUPtJQGpq3pXjRe70YnteU9aGiSz0UFAsNxzEMG%2FFDmgdFR3U9%2FCtswiev2vwY6pgFaZ3u1X3Vm2AXaiLgfhpCIqhfLbvSC9I6LWVxv0bOBOsmdI%2FGSPpHDHGBs2Z%2BPM5jH%2BbXfhouqtX3BKoS4aKGi80%2FDRyw%2B6pooisQyDOrtbwIph8uIO0z8CRfRMi%2FWBwUhLxDQQSC4sxd3R82QvOTIAFp9858FjCIZxnWref0q3G8BAheUo3DbXAQ%2Bh%2FqG6rH1Qup%2FemHZizpt9sYPw0INjdqXiVAj&X-Amz-Signature=27d45790600ce2cf068965af32dab3a64045fb42faab373c800cd0f7d0324475&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJTC2Q%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmEl6CJAwW21iZWXf4jnQB07Z7SUEWgTLqrwfrh9mROAiAVAJ8Tc5Sd%2Fp%2F%2BAtrVbmtcfDjdV9qoBhtJmeCSnsrd2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0moQH2SKoJ6%2Ful97KtwDy272n%2FEIYa0CLIvTCy9J%2B3wdj%2FD%2B%2B7PQZ9WbkyaJcW0MS8zRk9yjV5d%2BUIUOsmjZi%2B1lzSjtchXHeR9Byv9YB9r5ze8CdPwkr0vaWY6ZXzgwbaBpN8bDBs16uK6wGD0czGa1XNZOj9r4HgMShkndfIodv3iazHMMszu3EDdft%2Fc6SttiQXH6%2Bp8IulOXQ%2FFDuV%2BFkRGHr3UuNTnVU7Ye%2BC4qgq7hi8ts4mUtleyYtzRA2yCEoFbxyXKZ3y4LB7LuOVOMwG1Mc9%2BxaFmfmPw2QtAPJL15%2F6IFSMBiPRyECt5ZkqH%2B7ZOQpwSyWHoTo6VuUugzdoD9NhZx7ot3VgVjWUClQ5Naq6VzUDJmukf%2F18Jg1bfIEWxvodUfvJn8fmjFI3obRJIKJvYew4DUwRf9GQO1w69II7rhtwbQwBC4XQxSnCEKkUIE9SH5LqBrmE8y3BQGzWB9y%2Bd18ikVLniFnM4eml8hlco8RKe55Hdo9%2FCoO3h76kX1ap0yalaLU%2BxxrDgVa58L9ZoClkqux2GTk1eXfQXCwPKbxpXYJvZ3fCB1oy%2Fhgsllx5hIod67q790eRcBTCUPtJQGpq3pXjRe70YnteU9aGiSz0UFAsNxzEMG%2FFDmgdFR3U9%2FCtswiev2vwY6pgFaZ3u1X3Vm2AXaiLgfhpCIqhfLbvSC9I6LWVxv0bOBOsmdI%2FGSPpHDHGBs2Z%2BPM5jH%2BbXfhouqtX3BKoS4aKGi80%2FDRyw%2B6pooisQyDOrtbwIph8uIO0z8CRfRMi%2FWBwUhLxDQQSC4sxd3R82QvOTIAFp9858FjCIZxnWref0q3G8BAheUo3DbXAQ%2Bh%2FqG6rH1Qup%2FemHZizpt9sYPw0INjdqXiVAj&X-Amz-Signature=27d49f606f120a813e631d3a9d3ced3beb44d56c5d02e305dc45a9d89ca04b09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDQJTC2Q%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmEl6CJAwW21iZWXf4jnQB07Z7SUEWgTLqrwfrh9mROAiAVAJ8Tc5Sd%2Fp%2F%2BAtrVbmtcfDjdV9qoBhtJmeCSnsrd2ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM0moQH2SKoJ6%2Ful97KtwDy272n%2FEIYa0CLIvTCy9J%2B3wdj%2FD%2B%2B7PQZ9WbkyaJcW0MS8zRk9yjV5d%2BUIUOsmjZi%2B1lzSjtchXHeR9Byv9YB9r5ze8CdPwkr0vaWY6ZXzgwbaBpN8bDBs16uK6wGD0czGa1XNZOj9r4HgMShkndfIodv3iazHMMszu3EDdft%2Fc6SttiQXH6%2Bp8IulOXQ%2FFDuV%2BFkRGHr3UuNTnVU7Ye%2BC4qgq7hi8ts4mUtleyYtzRA2yCEoFbxyXKZ3y4LB7LuOVOMwG1Mc9%2BxaFmfmPw2QtAPJL15%2F6IFSMBiPRyECt5ZkqH%2B7ZOQpwSyWHoTo6VuUugzdoD9NhZx7ot3VgVjWUClQ5Naq6VzUDJmukf%2F18Jg1bfIEWxvodUfvJn8fmjFI3obRJIKJvYew4DUwRf9GQO1w69II7rhtwbQwBC4XQxSnCEKkUIE9SH5LqBrmE8y3BQGzWB9y%2Bd18ikVLniFnM4eml8hlco8RKe55Hdo9%2FCoO3h76kX1ap0yalaLU%2BxxrDgVa58L9ZoClkqux2GTk1eXfQXCwPKbxpXYJvZ3fCB1oy%2Fhgsllx5hIod67q790eRcBTCUPtJQGpq3pXjRe70YnteU9aGiSz0UFAsNxzEMG%2FFDmgdFR3U9%2FCtswiev2vwY6pgFaZ3u1X3Vm2AXaiLgfhpCIqhfLbvSC9I6LWVxv0bOBOsmdI%2FGSPpHDHGBs2Z%2BPM5jH%2BbXfhouqtX3BKoS4aKGi80%2FDRyw%2B6pooisQyDOrtbwIph8uIO0z8CRfRMi%2FWBwUhLxDQQSC4sxd3R82QvOTIAFp9858FjCIZxnWref0q3G8BAheUo3DbXAQ%2Bh%2FqG6rH1Qup%2FemHZizpt9sYPw0INjdqXiVAj&X-Amz-Signature=55e9e73e770afcc1ff12bd2f05654c02c88a7b5c8ccba8b2a03ffacd12d1f7e0&X-Amz-SignedHeaders=host&x-id=GetObject)
