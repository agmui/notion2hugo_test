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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJ3OWX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExKTqzvVv%2FC4K7w%2B8cGWYEn4Bo3Qh%2FcDDNGYSSQRQA8AiEAi8O%2B2ahVilAkH2D%2BA3h76kf9FKk3SBnX4my%2FD74GhMQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIfQCSHCqafXUpPJ5CrcAwkBI3EYJM4ZO2d4M21kODd%2BC0SmawN3nPXTCUM%2BsJiwvM46MFa4uRE7%2BeGv9lBC3F3u1l4IMRkvxNHMBzNQK0T7bUBc0Nq7f39dcjaQ1zdkhHHXSPd09gMo3eXEYXSToI0W82%2BThLbdA8wIYbQiwX7p9x4SI1YPx%2FOlUA9qJtB9geMWSANEAsjqMZX%2FMkJe3Zf0aHvV54vAQ4p%2FcRhtWwt0CMOUpLmYtR9AtRti%2B79%2FN%2FSAcsGwHn9z4ekd1qSv0MB%2FrAhGqWmgLLcMNSsT0qvStjc%2BIOvyxWHVzuk5jKtK6TeerXJsRSjMbMgzgk%2FfTixj0mQl5AkRWyszZrOlqgqVyZly%2BI3oeG6MG6u9mZE0VpuQnlETqDzISKBG5qoYd8XQOGLKd5V92ZIx8Hys4sbnHH503xB9AHghTDC6Mzg4BsNpTHQvILtoSUhQsn4p3UNzyxMgE6pM0mg%2BkHr4i3BqkQv7Bh7LECxakMMHYFO9C9gc%2Bjzh7SQ7Hkf4v8%2BMEy8Oc7jXZBDL%2F9BmtvbLZe6PY2ZwI54r3BpuJWzoLCbhvKuJubllT1lPCEhHKV%2FYBdd81s4%2FjHJqhZIsEbYnWYEpPWQTltzGZMBnuRD7PVpYnxhMguoz7HupQusnMP%2Bu374GOqUBn%2FuBrHSND6pPkYm%2Fr8uGvnyKUb%2B%2FyFdODV3dxZtj0QlyeHCBGCSDiQ26sCoTOGptXV4EWkCouowRSZHfygAN2do6VpTUsRtP8gP%2FMty%2FyUfpwSlX2Vje5wmP08ssEh04g16kWPbfr23BPm3le8p154tl4xqjHO24JrSl632HLvqPcdl3jBm3h5%2Bz64j4h9i%2BipMDVaPx1C2YiiVgLnVRwPcWyGIy&X-Amz-Signature=cc9bd16fd9357e0689dccf020f98339a0485c3224045fab17f5a27fa14ae426a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJ3OWX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExKTqzvVv%2FC4K7w%2B8cGWYEn4Bo3Qh%2FcDDNGYSSQRQA8AiEAi8O%2B2ahVilAkH2D%2BA3h76kf9FKk3SBnX4my%2FD74GhMQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIfQCSHCqafXUpPJ5CrcAwkBI3EYJM4ZO2d4M21kODd%2BC0SmawN3nPXTCUM%2BsJiwvM46MFa4uRE7%2BeGv9lBC3F3u1l4IMRkvxNHMBzNQK0T7bUBc0Nq7f39dcjaQ1zdkhHHXSPd09gMo3eXEYXSToI0W82%2BThLbdA8wIYbQiwX7p9x4SI1YPx%2FOlUA9qJtB9geMWSANEAsjqMZX%2FMkJe3Zf0aHvV54vAQ4p%2FcRhtWwt0CMOUpLmYtR9AtRti%2B79%2FN%2FSAcsGwHn9z4ekd1qSv0MB%2FrAhGqWmgLLcMNSsT0qvStjc%2BIOvyxWHVzuk5jKtK6TeerXJsRSjMbMgzgk%2FfTixj0mQl5AkRWyszZrOlqgqVyZly%2BI3oeG6MG6u9mZE0VpuQnlETqDzISKBG5qoYd8XQOGLKd5V92ZIx8Hys4sbnHH503xB9AHghTDC6Mzg4BsNpTHQvILtoSUhQsn4p3UNzyxMgE6pM0mg%2BkHr4i3BqkQv7Bh7LECxakMMHYFO9C9gc%2Bjzh7SQ7Hkf4v8%2BMEy8Oc7jXZBDL%2F9BmtvbLZe6PY2ZwI54r3BpuJWzoLCbhvKuJubllT1lPCEhHKV%2FYBdd81s4%2FjHJqhZIsEbYnWYEpPWQTltzGZMBnuRD7PVpYnxhMguoz7HupQusnMP%2Bu374GOqUBn%2FuBrHSND6pPkYm%2Fr8uGvnyKUb%2B%2FyFdODV3dxZtj0QlyeHCBGCSDiQ26sCoTOGptXV4EWkCouowRSZHfygAN2do6VpTUsRtP8gP%2FMty%2FyUfpwSlX2Vje5wmP08ssEh04g16kWPbfr23BPm3le8p154tl4xqjHO24JrSl632HLvqPcdl3jBm3h5%2Bz64j4h9i%2BipMDVaPx1C2YiiVgLnVRwPcWyGIy&X-Amz-Signature=fb47f6bc38afc2397fdd9d2d1738ae0d3f25228fe0f1b207afc1af4305287019&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJ3OWX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExKTqzvVv%2FC4K7w%2B8cGWYEn4Bo3Qh%2FcDDNGYSSQRQA8AiEAi8O%2B2ahVilAkH2D%2BA3h76kf9FKk3SBnX4my%2FD74GhMQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIfQCSHCqafXUpPJ5CrcAwkBI3EYJM4ZO2d4M21kODd%2BC0SmawN3nPXTCUM%2BsJiwvM46MFa4uRE7%2BeGv9lBC3F3u1l4IMRkvxNHMBzNQK0T7bUBc0Nq7f39dcjaQ1zdkhHHXSPd09gMo3eXEYXSToI0W82%2BThLbdA8wIYbQiwX7p9x4SI1YPx%2FOlUA9qJtB9geMWSANEAsjqMZX%2FMkJe3Zf0aHvV54vAQ4p%2FcRhtWwt0CMOUpLmYtR9AtRti%2B79%2FN%2FSAcsGwHn9z4ekd1qSv0MB%2FrAhGqWmgLLcMNSsT0qvStjc%2BIOvyxWHVzuk5jKtK6TeerXJsRSjMbMgzgk%2FfTixj0mQl5AkRWyszZrOlqgqVyZly%2BI3oeG6MG6u9mZE0VpuQnlETqDzISKBG5qoYd8XQOGLKd5V92ZIx8Hys4sbnHH503xB9AHghTDC6Mzg4BsNpTHQvILtoSUhQsn4p3UNzyxMgE6pM0mg%2BkHr4i3BqkQv7Bh7LECxakMMHYFO9C9gc%2Bjzh7SQ7Hkf4v8%2BMEy8Oc7jXZBDL%2F9BmtvbLZe6PY2ZwI54r3BpuJWzoLCbhvKuJubllT1lPCEhHKV%2FYBdd81s4%2FjHJqhZIsEbYnWYEpPWQTltzGZMBnuRD7PVpYnxhMguoz7HupQusnMP%2Bu374GOqUBn%2FuBrHSND6pPkYm%2Fr8uGvnyKUb%2B%2FyFdODV3dxZtj0QlyeHCBGCSDiQ26sCoTOGptXV4EWkCouowRSZHfygAN2do6VpTUsRtP8gP%2FMty%2FyUfpwSlX2Vje5wmP08ssEh04g16kWPbfr23BPm3le8p154tl4xqjHO24JrSl632HLvqPcdl3jBm3h5%2Bz64j4h9i%2BipMDVaPx1C2YiiVgLnVRwPcWyGIy&X-Amz-Signature=52a00dd630425a355b0f524a944abe8a2c04058deba7c3d3ebd4fe6c418a5bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJ3OWX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExKTqzvVv%2FC4K7w%2B8cGWYEn4Bo3Qh%2FcDDNGYSSQRQA8AiEAi8O%2B2ahVilAkH2D%2BA3h76kf9FKk3SBnX4my%2FD74GhMQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIfQCSHCqafXUpPJ5CrcAwkBI3EYJM4ZO2d4M21kODd%2BC0SmawN3nPXTCUM%2BsJiwvM46MFa4uRE7%2BeGv9lBC3F3u1l4IMRkvxNHMBzNQK0T7bUBc0Nq7f39dcjaQ1zdkhHHXSPd09gMo3eXEYXSToI0W82%2BThLbdA8wIYbQiwX7p9x4SI1YPx%2FOlUA9qJtB9geMWSANEAsjqMZX%2FMkJe3Zf0aHvV54vAQ4p%2FcRhtWwt0CMOUpLmYtR9AtRti%2B79%2FN%2FSAcsGwHn9z4ekd1qSv0MB%2FrAhGqWmgLLcMNSsT0qvStjc%2BIOvyxWHVzuk5jKtK6TeerXJsRSjMbMgzgk%2FfTixj0mQl5AkRWyszZrOlqgqVyZly%2BI3oeG6MG6u9mZE0VpuQnlETqDzISKBG5qoYd8XQOGLKd5V92ZIx8Hys4sbnHH503xB9AHghTDC6Mzg4BsNpTHQvILtoSUhQsn4p3UNzyxMgE6pM0mg%2BkHr4i3BqkQv7Bh7LECxakMMHYFO9C9gc%2Bjzh7SQ7Hkf4v8%2BMEy8Oc7jXZBDL%2F9BmtvbLZe6PY2ZwI54r3BpuJWzoLCbhvKuJubllT1lPCEhHKV%2FYBdd81s4%2FjHJqhZIsEbYnWYEpPWQTltzGZMBnuRD7PVpYnxhMguoz7HupQusnMP%2Bu374GOqUBn%2FuBrHSND6pPkYm%2Fr8uGvnyKUb%2B%2FyFdODV3dxZtj0QlyeHCBGCSDiQ26sCoTOGptXV4EWkCouowRSZHfygAN2do6VpTUsRtP8gP%2FMty%2FyUfpwSlX2Vje5wmP08ssEh04g16kWPbfr23BPm3le8p154tl4xqjHO24JrSl632HLvqPcdl3jBm3h5%2Bz64j4h9i%2BipMDVaPx1C2YiiVgLnVRwPcWyGIy&X-Amz-Signature=c0f73c8832d596a327c78924064596fc56c52d4585d482973404198eb7852072&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJ3OWX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExKTqzvVv%2FC4K7w%2B8cGWYEn4Bo3Qh%2FcDDNGYSSQRQA8AiEAi8O%2B2ahVilAkH2D%2BA3h76kf9FKk3SBnX4my%2FD74GhMQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIfQCSHCqafXUpPJ5CrcAwkBI3EYJM4ZO2d4M21kODd%2BC0SmawN3nPXTCUM%2BsJiwvM46MFa4uRE7%2BeGv9lBC3F3u1l4IMRkvxNHMBzNQK0T7bUBc0Nq7f39dcjaQ1zdkhHHXSPd09gMo3eXEYXSToI0W82%2BThLbdA8wIYbQiwX7p9x4SI1YPx%2FOlUA9qJtB9geMWSANEAsjqMZX%2FMkJe3Zf0aHvV54vAQ4p%2FcRhtWwt0CMOUpLmYtR9AtRti%2B79%2FN%2FSAcsGwHn9z4ekd1qSv0MB%2FrAhGqWmgLLcMNSsT0qvStjc%2BIOvyxWHVzuk5jKtK6TeerXJsRSjMbMgzgk%2FfTixj0mQl5AkRWyszZrOlqgqVyZly%2BI3oeG6MG6u9mZE0VpuQnlETqDzISKBG5qoYd8XQOGLKd5V92ZIx8Hys4sbnHH503xB9AHghTDC6Mzg4BsNpTHQvILtoSUhQsn4p3UNzyxMgE6pM0mg%2BkHr4i3BqkQv7Bh7LECxakMMHYFO9C9gc%2Bjzh7SQ7Hkf4v8%2BMEy8Oc7jXZBDL%2F9BmtvbLZe6PY2ZwI54r3BpuJWzoLCbhvKuJubllT1lPCEhHKV%2FYBdd81s4%2FjHJqhZIsEbYnWYEpPWQTltzGZMBnuRD7PVpYnxhMguoz7HupQusnMP%2Bu374GOqUBn%2FuBrHSND6pPkYm%2Fr8uGvnyKUb%2B%2FyFdODV3dxZtj0QlyeHCBGCSDiQ26sCoTOGptXV4EWkCouowRSZHfygAN2do6VpTUsRtP8gP%2FMty%2FyUfpwSlX2Vje5wmP08ssEh04g16kWPbfr23BPm3le8p154tl4xqjHO24JrSl632HLvqPcdl3jBm3h5%2Bz64j4h9i%2BipMDVaPx1C2YiiVgLnVRwPcWyGIy&X-Amz-Signature=2dd32fcab7239be764fc2b0ef0df13e61fa34d26c4c4d26a5434fd8dbe576a13&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EJ3OWX%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIExKTqzvVv%2FC4K7w%2B8cGWYEn4Bo3Qh%2FcDDNGYSSQRQA8AiEAi8O%2B2ahVilAkH2D%2BA3h76kf9FKk3SBnX4my%2FD74GhMQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIfQCSHCqafXUpPJ5CrcAwkBI3EYJM4ZO2d4M21kODd%2BC0SmawN3nPXTCUM%2BsJiwvM46MFa4uRE7%2BeGv9lBC3F3u1l4IMRkvxNHMBzNQK0T7bUBc0Nq7f39dcjaQ1zdkhHHXSPd09gMo3eXEYXSToI0W82%2BThLbdA8wIYbQiwX7p9x4SI1YPx%2FOlUA9qJtB9geMWSANEAsjqMZX%2FMkJe3Zf0aHvV54vAQ4p%2FcRhtWwt0CMOUpLmYtR9AtRti%2B79%2FN%2FSAcsGwHn9z4ekd1qSv0MB%2FrAhGqWmgLLcMNSsT0qvStjc%2BIOvyxWHVzuk5jKtK6TeerXJsRSjMbMgzgk%2FfTixj0mQl5AkRWyszZrOlqgqVyZly%2BI3oeG6MG6u9mZE0VpuQnlETqDzISKBG5qoYd8XQOGLKd5V92ZIx8Hys4sbnHH503xB9AHghTDC6Mzg4BsNpTHQvILtoSUhQsn4p3UNzyxMgE6pM0mg%2BkHr4i3BqkQv7Bh7LECxakMMHYFO9C9gc%2Bjzh7SQ7Hkf4v8%2BMEy8Oc7jXZBDL%2F9BmtvbLZe6PY2ZwI54r3BpuJWzoLCbhvKuJubllT1lPCEhHKV%2FYBdd81s4%2FjHJqhZIsEbYnWYEpPWQTltzGZMBnuRD7PVpYnxhMguoz7HupQusnMP%2Bu374GOqUBn%2FuBrHSND6pPkYm%2Fr8uGvnyKUb%2B%2FyFdODV3dxZtj0QlyeHCBGCSDiQ26sCoTOGptXV4EWkCouowRSZHfygAN2do6VpTUsRtP8gP%2FMty%2FyUfpwSlX2Vje5wmP08ssEh04g16kWPbfr23BPm3le8p154tl4xqjHO24JrSl632HLvqPcdl3jBm3h5%2Bz64j4h9i%2BipMDVaPx1C2YiiVgLnVRwPcWyGIy&X-Amz-Signature=cd86c0a9d1c8e839294377def0597690543654a5fa83c4a3994d9b8c086d32d1&X-Amz-SignedHeaders=host&x-id=GetObject)
