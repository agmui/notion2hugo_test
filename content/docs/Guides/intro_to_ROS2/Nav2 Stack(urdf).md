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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQE3ODT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xfrRyVZX6oKKDiZmGZRRKfmIm%2FFcxqXq39divvAfgAiAtAusZvImwKRkZ3FLfO5aEacOHBMDkqoPtIDwF9Y84bCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMy4jr7hQGqNRc%2BpMfKtwDwXc2xuy3dtDlxvWem%2B0BBIRPX3xFiJr4OkBw7aAzwVudMEM7fQDf%2FYIMlyvzFpCxgm5QMGgG6ZSKvUoUemALG%2BWoFHaoOcIiiRDlY0AuAEi%2FvlOTBhHv3bWRZ0qQPyeZNz6ahDj1rVo0FGDIpehIMGknRKC7nVaR%2Bnc0dfXxX%2BF6zaYOlFOUCqu2pcsgmNvAgl7uxGo2bzzY1UC1z7Ga6Q6apsNbDPmILXcMpwKFCBilPX3lfrmvN0G%2BcuwI6InXLO3sdewhJqf%2FOrYxyL76Er6ON8nXE6scKqo6VxDwUh5NlDWSAOM3Wrvy9BotP%2BWhnVHtd%2FcDdSK0P1HFbtIfeFlvxBabfseeAAOFzUOtOJWavK1QHG1dwgPelZ2xZmJ3cte7LigCWuJsxgmtVZx3ax95rTb22GWeVpp7hqReqv60oRUIXbIWbdehq1W2zhTGBnah9rEMUBGk6ksTjHeqYn%2Fng9Pz01FrmTEUw5uvWOAlyaUDgasPIFVtGgR1HsbIH%2B40NbNAzOJytcyuO4W1Wq7%2FeyL%2BbjULLsi%2B%2BT3sgKu64ae1U%2BBn8AK3SaoNMJDDe33cuov%2BF5Igte1%2BvDLUj5s6IwtJcv%2BphT7OKrIAImUc67Nrlpa9i%2BG4RIwwmeWKvwY6pgHg1t96gTaI1PyYvzeXbT9pZ4xbP1B0w73q50LrVj2sM97Uxt4FpbGwcrDdfwtMb8JOsrcvR5C9b6ojxIIFSc0OlyJyr2aD6iw08m4K7t419JnBURWi5DTP%2Bb1jtll2iug4f9DjevCGFbEy7qB91FLPZXxpR32KLztdjEO2MNpnXdg7dBcRimLPSGJZ52bbuGZo7HJQcI8E4Ad0ZRGEsk%2BDOBbs0xzk&X-Amz-Signature=b984932c83218bbfd811b3536d37c66bd5b4bebc47c0e234c10dbde2cdd71669&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQE3ODT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xfrRyVZX6oKKDiZmGZRRKfmIm%2FFcxqXq39divvAfgAiAtAusZvImwKRkZ3FLfO5aEacOHBMDkqoPtIDwF9Y84bCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMy4jr7hQGqNRc%2BpMfKtwDwXc2xuy3dtDlxvWem%2B0BBIRPX3xFiJr4OkBw7aAzwVudMEM7fQDf%2FYIMlyvzFpCxgm5QMGgG6ZSKvUoUemALG%2BWoFHaoOcIiiRDlY0AuAEi%2FvlOTBhHv3bWRZ0qQPyeZNz6ahDj1rVo0FGDIpehIMGknRKC7nVaR%2Bnc0dfXxX%2BF6zaYOlFOUCqu2pcsgmNvAgl7uxGo2bzzY1UC1z7Ga6Q6apsNbDPmILXcMpwKFCBilPX3lfrmvN0G%2BcuwI6InXLO3sdewhJqf%2FOrYxyL76Er6ON8nXE6scKqo6VxDwUh5NlDWSAOM3Wrvy9BotP%2BWhnVHtd%2FcDdSK0P1HFbtIfeFlvxBabfseeAAOFzUOtOJWavK1QHG1dwgPelZ2xZmJ3cte7LigCWuJsxgmtVZx3ax95rTb22GWeVpp7hqReqv60oRUIXbIWbdehq1W2zhTGBnah9rEMUBGk6ksTjHeqYn%2Fng9Pz01FrmTEUw5uvWOAlyaUDgasPIFVtGgR1HsbIH%2B40NbNAzOJytcyuO4W1Wq7%2FeyL%2BbjULLsi%2B%2BT3sgKu64ae1U%2BBn8AK3SaoNMJDDe33cuov%2BF5Igte1%2BvDLUj5s6IwtJcv%2BphT7OKrIAImUc67Nrlpa9i%2BG4RIwwmeWKvwY6pgHg1t96gTaI1PyYvzeXbT9pZ4xbP1B0w73q50LrVj2sM97Uxt4FpbGwcrDdfwtMb8JOsrcvR5C9b6ojxIIFSc0OlyJyr2aD6iw08m4K7t419JnBURWi5DTP%2Bb1jtll2iug4f9DjevCGFbEy7qB91FLPZXxpR32KLztdjEO2MNpnXdg7dBcRimLPSGJZ52bbuGZo7HJQcI8E4Ad0ZRGEsk%2BDOBbs0xzk&X-Amz-Signature=21e98dbe7327a59661f50e606b8a0699ef6249deb0ab8dce5c59a0f5437c724b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQE3ODT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xfrRyVZX6oKKDiZmGZRRKfmIm%2FFcxqXq39divvAfgAiAtAusZvImwKRkZ3FLfO5aEacOHBMDkqoPtIDwF9Y84bCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMy4jr7hQGqNRc%2BpMfKtwDwXc2xuy3dtDlxvWem%2B0BBIRPX3xFiJr4OkBw7aAzwVudMEM7fQDf%2FYIMlyvzFpCxgm5QMGgG6ZSKvUoUemALG%2BWoFHaoOcIiiRDlY0AuAEi%2FvlOTBhHv3bWRZ0qQPyeZNz6ahDj1rVo0FGDIpehIMGknRKC7nVaR%2Bnc0dfXxX%2BF6zaYOlFOUCqu2pcsgmNvAgl7uxGo2bzzY1UC1z7Ga6Q6apsNbDPmILXcMpwKFCBilPX3lfrmvN0G%2BcuwI6InXLO3sdewhJqf%2FOrYxyL76Er6ON8nXE6scKqo6VxDwUh5NlDWSAOM3Wrvy9BotP%2BWhnVHtd%2FcDdSK0P1HFbtIfeFlvxBabfseeAAOFzUOtOJWavK1QHG1dwgPelZ2xZmJ3cte7LigCWuJsxgmtVZx3ax95rTb22GWeVpp7hqReqv60oRUIXbIWbdehq1W2zhTGBnah9rEMUBGk6ksTjHeqYn%2Fng9Pz01FrmTEUw5uvWOAlyaUDgasPIFVtGgR1HsbIH%2B40NbNAzOJytcyuO4W1Wq7%2FeyL%2BbjULLsi%2B%2BT3sgKu64ae1U%2BBn8AK3SaoNMJDDe33cuov%2BF5Igte1%2BvDLUj5s6IwtJcv%2BphT7OKrIAImUc67Nrlpa9i%2BG4RIwwmeWKvwY6pgHg1t96gTaI1PyYvzeXbT9pZ4xbP1B0w73q50LrVj2sM97Uxt4FpbGwcrDdfwtMb8JOsrcvR5C9b6ojxIIFSc0OlyJyr2aD6iw08m4K7t419JnBURWi5DTP%2Bb1jtll2iug4f9DjevCGFbEy7qB91FLPZXxpR32KLztdjEO2MNpnXdg7dBcRimLPSGJZ52bbuGZo7HJQcI8E4Ad0ZRGEsk%2BDOBbs0xzk&X-Amz-Signature=c232ffb468397b72c4036dff18f3ce2ea2452a1141abdb3818eab9f8767ffc77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQE3ODT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xfrRyVZX6oKKDiZmGZRRKfmIm%2FFcxqXq39divvAfgAiAtAusZvImwKRkZ3FLfO5aEacOHBMDkqoPtIDwF9Y84bCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMy4jr7hQGqNRc%2BpMfKtwDwXc2xuy3dtDlxvWem%2B0BBIRPX3xFiJr4OkBw7aAzwVudMEM7fQDf%2FYIMlyvzFpCxgm5QMGgG6ZSKvUoUemALG%2BWoFHaoOcIiiRDlY0AuAEi%2FvlOTBhHv3bWRZ0qQPyeZNz6ahDj1rVo0FGDIpehIMGknRKC7nVaR%2Bnc0dfXxX%2BF6zaYOlFOUCqu2pcsgmNvAgl7uxGo2bzzY1UC1z7Ga6Q6apsNbDPmILXcMpwKFCBilPX3lfrmvN0G%2BcuwI6InXLO3sdewhJqf%2FOrYxyL76Er6ON8nXE6scKqo6VxDwUh5NlDWSAOM3Wrvy9BotP%2BWhnVHtd%2FcDdSK0P1HFbtIfeFlvxBabfseeAAOFzUOtOJWavK1QHG1dwgPelZ2xZmJ3cte7LigCWuJsxgmtVZx3ax95rTb22GWeVpp7hqReqv60oRUIXbIWbdehq1W2zhTGBnah9rEMUBGk6ksTjHeqYn%2Fng9Pz01FrmTEUw5uvWOAlyaUDgasPIFVtGgR1HsbIH%2B40NbNAzOJytcyuO4W1Wq7%2FeyL%2BbjULLsi%2B%2BT3sgKu64ae1U%2BBn8AK3SaoNMJDDe33cuov%2BF5Igte1%2BvDLUj5s6IwtJcv%2BphT7OKrIAImUc67Nrlpa9i%2BG4RIwwmeWKvwY6pgHg1t96gTaI1PyYvzeXbT9pZ4xbP1B0w73q50LrVj2sM97Uxt4FpbGwcrDdfwtMb8JOsrcvR5C9b6ojxIIFSc0OlyJyr2aD6iw08m4K7t419JnBURWi5DTP%2Bb1jtll2iug4f9DjevCGFbEy7qB91FLPZXxpR32KLztdjEO2MNpnXdg7dBcRimLPSGJZ52bbuGZo7HJQcI8E4Ad0ZRGEsk%2BDOBbs0xzk&X-Amz-Signature=04da78967328a95c296914a2fc2863cf96a2e7f8d33c7b83234a849affccb94f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQE3ODT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xfrRyVZX6oKKDiZmGZRRKfmIm%2FFcxqXq39divvAfgAiAtAusZvImwKRkZ3FLfO5aEacOHBMDkqoPtIDwF9Y84bCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMy4jr7hQGqNRc%2BpMfKtwDwXc2xuy3dtDlxvWem%2B0BBIRPX3xFiJr4OkBw7aAzwVudMEM7fQDf%2FYIMlyvzFpCxgm5QMGgG6ZSKvUoUemALG%2BWoFHaoOcIiiRDlY0AuAEi%2FvlOTBhHv3bWRZ0qQPyeZNz6ahDj1rVo0FGDIpehIMGknRKC7nVaR%2Bnc0dfXxX%2BF6zaYOlFOUCqu2pcsgmNvAgl7uxGo2bzzY1UC1z7Ga6Q6apsNbDPmILXcMpwKFCBilPX3lfrmvN0G%2BcuwI6InXLO3sdewhJqf%2FOrYxyL76Er6ON8nXE6scKqo6VxDwUh5NlDWSAOM3Wrvy9BotP%2BWhnVHtd%2FcDdSK0P1HFbtIfeFlvxBabfseeAAOFzUOtOJWavK1QHG1dwgPelZ2xZmJ3cte7LigCWuJsxgmtVZx3ax95rTb22GWeVpp7hqReqv60oRUIXbIWbdehq1W2zhTGBnah9rEMUBGk6ksTjHeqYn%2Fng9Pz01FrmTEUw5uvWOAlyaUDgasPIFVtGgR1HsbIH%2B40NbNAzOJytcyuO4W1Wq7%2FeyL%2BbjULLsi%2B%2BT3sgKu64ae1U%2BBn8AK3SaoNMJDDe33cuov%2BF5Igte1%2BvDLUj5s6IwtJcv%2BphT7OKrIAImUc67Nrlpa9i%2BG4RIwwmeWKvwY6pgHg1t96gTaI1PyYvzeXbT9pZ4xbP1B0w73q50LrVj2sM97Uxt4FpbGwcrDdfwtMb8JOsrcvR5C9b6ojxIIFSc0OlyJyr2aD6iw08m4K7t419JnBURWi5DTP%2Bb1jtll2iug4f9DjevCGFbEy7qB91FLPZXxpR32KLztdjEO2MNpnXdg7dBcRimLPSGJZ52bbuGZo7HJQcI8E4Ad0ZRGEsk%2BDOBbs0xzk&X-Amz-Signature=c8bcc7ac469e75cad02dcaf3a5503f9bb2a9498cbf40812c716d53c766343e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQE3ODT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7xfrRyVZX6oKKDiZmGZRRKfmIm%2FFcxqXq39divvAfgAiAtAusZvImwKRkZ3FLfO5aEacOHBMDkqoPtIDwF9Y84bCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMy4jr7hQGqNRc%2BpMfKtwDwXc2xuy3dtDlxvWem%2B0BBIRPX3xFiJr4OkBw7aAzwVudMEM7fQDf%2FYIMlyvzFpCxgm5QMGgG6ZSKvUoUemALG%2BWoFHaoOcIiiRDlY0AuAEi%2FvlOTBhHv3bWRZ0qQPyeZNz6ahDj1rVo0FGDIpehIMGknRKC7nVaR%2Bnc0dfXxX%2BF6zaYOlFOUCqu2pcsgmNvAgl7uxGo2bzzY1UC1z7Ga6Q6apsNbDPmILXcMpwKFCBilPX3lfrmvN0G%2BcuwI6InXLO3sdewhJqf%2FOrYxyL76Er6ON8nXE6scKqo6VxDwUh5NlDWSAOM3Wrvy9BotP%2BWhnVHtd%2FcDdSK0P1HFbtIfeFlvxBabfseeAAOFzUOtOJWavK1QHG1dwgPelZ2xZmJ3cte7LigCWuJsxgmtVZx3ax95rTb22GWeVpp7hqReqv60oRUIXbIWbdehq1W2zhTGBnah9rEMUBGk6ksTjHeqYn%2Fng9Pz01FrmTEUw5uvWOAlyaUDgasPIFVtGgR1HsbIH%2B40NbNAzOJytcyuO4W1Wq7%2FeyL%2BbjULLsi%2B%2BT3sgKu64ae1U%2BBn8AK3SaoNMJDDe33cuov%2BF5Igte1%2BvDLUj5s6IwtJcv%2BphT7OKrIAImUc67Nrlpa9i%2BG4RIwwmeWKvwY6pgHg1t96gTaI1PyYvzeXbT9pZ4xbP1B0w73q50LrVj2sM97Uxt4FpbGwcrDdfwtMb8JOsrcvR5C9b6ojxIIFSc0OlyJyr2aD6iw08m4K7t419JnBURWi5DTP%2Bb1jtll2iug4f9DjevCGFbEy7qB91FLPZXxpR32KLztdjEO2MNpnXdg7dBcRimLPSGJZ52bbuGZo7HJQcI8E4Ad0ZRGEsk%2BDOBbs0xzk&X-Amz-Signature=73f58162e102f3136d3d770fe8550fed6a477c4fd9a34c535cbb3ac63448663e&X-Amz-SignedHeaders=host&x-id=GetObject)
