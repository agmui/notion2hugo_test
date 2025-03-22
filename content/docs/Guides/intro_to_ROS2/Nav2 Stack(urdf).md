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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKJARJI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCYyZqabEGjwMa%2F59ZPrJ5X70zIxWh542tTobM9F8P1%2BQIhANMyHJxuUA2EqabNYCVR5m%2BVRDXPHcynea5nZiqgsUugKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr5Xbu1%2Bm26dZLeKEq3AO%2B%2FswSnBpnBGemL7DPJ4DXwQFP0tnaqMEPR4uuGO%2B0mCoYvWKLTh9TTAqxzkjYy3LawW7k8sq%2BRRJimnFT84hx2VcjNfDmrsSP7AAdGBZpkAd6fBkZUJnQqVUKkeLf%2FtB2smYyaekiGjppZI9iFIlhH55U5trvJfvRTlK35TJ62FsvZoYQVwyowpCvToNNVNQMF5QoNAgk%2F7gR0xGexyN5eSPr0UACJTTJt6Cs8Zgx2kp%2BjTZXPociWeljdC%2FeNU4ZNcmS52zKCnScTp0QQ27hqCgosnzVioS0JN3OSRb%2F81uaV1I8N8g78gkcGP3ig0ulpawgeXzCyx4d9l5jfQQhxVWrvlagMIY0xttTWzEERzCl75W2%2F4P8%2F2UERJZ4oU9YsFPEQYFEoyQla04Gy6%2FdXJo%2BZfRdoY2iMGdtyR7WC0mTEbdsJF1av0J1HWdv6AFZF1gFSn9Mqmp4acQjTXxHDbtlfGPooC9SkFgruq9I9Vo9arrp%2FQZDxqnCJQYJ4MSLuig09Iw10Op98%2BoIor8RNn0ajL9QLuysm5gmWfAb8sv2SJVG%2F2h9%2BDmw7nHU6RMAB5xJFEVKaM4dbdlNHBs4Hm5xBcI76QSnfoS0ADonpTT6CYE5n3c2R7tc9jCtmfi%2BBjqkAWJa7r72fWe7%2F2PypENQGgAVBuj31GwOD3AVP7pqJ0Gat2NzbO%2FU5BG%2Brbe17DRDJcMnsRBGH0BOeBy8zsM7Z1mRTzoxv%2BWTbwAAQuPPsm%2Brihicua3YGRHEhu%2BYzvpisKlBlDzjquamCbysBIqLef5hLQad2E%2BqOa0AiS%2BfOT1DGlz0wvSGBGrd95Pl6SX1WDeks7EVwv1%2FgEiqxZE4WrGZ2lTu&X-Amz-Signature=8c92402f3845c15d9119195308fe4d09eaed262de5e9247dfc8a5288e0762471&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKJARJI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCYyZqabEGjwMa%2F59ZPrJ5X70zIxWh542tTobM9F8P1%2BQIhANMyHJxuUA2EqabNYCVR5m%2BVRDXPHcynea5nZiqgsUugKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr5Xbu1%2Bm26dZLeKEq3AO%2B%2FswSnBpnBGemL7DPJ4DXwQFP0tnaqMEPR4uuGO%2B0mCoYvWKLTh9TTAqxzkjYy3LawW7k8sq%2BRRJimnFT84hx2VcjNfDmrsSP7AAdGBZpkAd6fBkZUJnQqVUKkeLf%2FtB2smYyaekiGjppZI9iFIlhH55U5trvJfvRTlK35TJ62FsvZoYQVwyowpCvToNNVNQMF5QoNAgk%2F7gR0xGexyN5eSPr0UACJTTJt6Cs8Zgx2kp%2BjTZXPociWeljdC%2FeNU4ZNcmS52zKCnScTp0QQ27hqCgosnzVioS0JN3OSRb%2F81uaV1I8N8g78gkcGP3ig0ulpawgeXzCyx4d9l5jfQQhxVWrvlagMIY0xttTWzEERzCl75W2%2F4P8%2F2UERJZ4oU9YsFPEQYFEoyQla04Gy6%2FdXJo%2BZfRdoY2iMGdtyR7WC0mTEbdsJF1av0J1HWdv6AFZF1gFSn9Mqmp4acQjTXxHDbtlfGPooC9SkFgruq9I9Vo9arrp%2FQZDxqnCJQYJ4MSLuig09Iw10Op98%2BoIor8RNn0ajL9QLuysm5gmWfAb8sv2SJVG%2F2h9%2BDmw7nHU6RMAB5xJFEVKaM4dbdlNHBs4Hm5xBcI76QSnfoS0ADonpTT6CYE5n3c2R7tc9jCtmfi%2BBjqkAWJa7r72fWe7%2F2PypENQGgAVBuj31GwOD3AVP7pqJ0Gat2NzbO%2FU5BG%2Brbe17DRDJcMnsRBGH0BOeBy8zsM7Z1mRTzoxv%2BWTbwAAQuPPsm%2Brihicua3YGRHEhu%2BYzvpisKlBlDzjquamCbysBIqLef5hLQad2E%2BqOa0AiS%2BfOT1DGlz0wvSGBGrd95Pl6SX1WDeks7EVwv1%2FgEiqxZE4WrGZ2lTu&X-Amz-Signature=3ba8a0b82e02321600a15e87cc9cb3b21617718f67c987255befb216a1c106a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKJARJI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCYyZqabEGjwMa%2F59ZPrJ5X70zIxWh542tTobM9F8P1%2BQIhANMyHJxuUA2EqabNYCVR5m%2BVRDXPHcynea5nZiqgsUugKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr5Xbu1%2Bm26dZLeKEq3AO%2B%2FswSnBpnBGemL7DPJ4DXwQFP0tnaqMEPR4uuGO%2B0mCoYvWKLTh9TTAqxzkjYy3LawW7k8sq%2BRRJimnFT84hx2VcjNfDmrsSP7AAdGBZpkAd6fBkZUJnQqVUKkeLf%2FtB2smYyaekiGjppZI9iFIlhH55U5trvJfvRTlK35TJ62FsvZoYQVwyowpCvToNNVNQMF5QoNAgk%2F7gR0xGexyN5eSPr0UACJTTJt6Cs8Zgx2kp%2BjTZXPociWeljdC%2FeNU4ZNcmS52zKCnScTp0QQ27hqCgosnzVioS0JN3OSRb%2F81uaV1I8N8g78gkcGP3ig0ulpawgeXzCyx4d9l5jfQQhxVWrvlagMIY0xttTWzEERzCl75W2%2F4P8%2F2UERJZ4oU9YsFPEQYFEoyQla04Gy6%2FdXJo%2BZfRdoY2iMGdtyR7WC0mTEbdsJF1av0J1HWdv6AFZF1gFSn9Mqmp4acQjTXxHDbtlfGPooC9SkFgruq9I9Vo9arrp%2FQZDxqnCJQYJ4MSLuig09Iw10Op98%2BoIor8RNn0ajL9QLuysm5gmWfAb8sv2SJVG%2F2h9%2BDmw7nHU6RMAB5xJFEVKaM4dbdlNHBs4Hm5xBcI76QSnfoS0ADonpTT6CYE5n3c2R7tc9jCtmfi%2BBjqkAWJa7r72fWe7%2F2PypENQGgAVBuj31GwOD3AVP7pqJ0Gat2NzbO%2FU5BG%2Brbe17DRDJcMnsRBGH0BOeBy8zsM7Z1mRTzoxv%2BWTbwAAQuPPsm%2Brihicua3YGRHEhu%2BYzvpisKlBlDzjquamCbysBIqLef5hLQad2E%2BqOa0AiS%2BfOT1DGlz0wvSGBGrd95Pl6SX1WDeks7EVwv1%2FgEiqxZE4WrGZ2lTu&X-Amz-Signature=3d241e9268647d01202dd735c6d84447e58e5c111dfa0a99ad91a54833b50b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKJARJI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCYyZqabEGjwMa%2F59ZPrJ5X70zIxWh542tTobM9F8P1%2BQIhANMyHJxuUA2EqabNYCVR5m%2BVRDXPHcynea5nZiqgsUugKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr5Xbu1%2Bm26dZLeKEq3AO%2B%2FswSnBpnBGemL7DPJ4DXwQFP0tnaqMEPR4uuGO%2B0mCoYvWKLTh9TTAqxzkjYy3LawW7k8sq%2BRRJimnFT84hx2VcjNfDmrsSP7AAdGBZpkAd6fBkZUJnQqVUKkeLf%2FtB2smYyaekiGjppZI9iFIlhH55U5trvJfvRTlK35TJ62FsvZoYQVwyowpCvToNNVNQMF5QoNAgk%2F7gR0xGexyN5eSPr0UACJTTJt6Cs8Zgx2kp%2BjTZXPociWeljdC%2FeNU4ZNcmS52zKCnScTp0QQ27hqCgosnzVioS0JN3OSRb%2F81uaV1I8N8g78gkcGP3ig0ulpawgeXzCyx4d9l5jfQQhxVWrvlagMIY0xttTWzEERzCl75W2%2F4P8%2F2UERJZ4oU9YsFPEQYFEoyQla04Gy6%2FdXJo%2BZfRdoY2iMGdtyR7WC0mTEbdsJF1av0J1HWdv6AFZF1gFSn9Mqmp4acQjTXxHDbtlfGPooC9SkFgruq9I9Vo9arrp%2FQZDxqnCJQYJ4MSLuig09Iw10Op98%2BoIor8RNn0ajL9QLuysm5gmWfAb8sv2SJVG%2F2h9%2BDmw7nHU6RMAB5xJFEVKaM4dbdlNHBs4Hm5xBcI76QSnfoS0ADonpTT6CYE5n3c2R7tc9jCtmfi%2BBjqkAWJa7r72fWe7%2F2PypENQGgAVBuj31GwOD3AVP7pqJ0Gat2NzbO%2FU5BG%2Brbe17DRDJcMnsRBGH0BOeBy8zsM7Z1mRTzoxv%2BWTbwAAQuPPsm%2Brihicua3YGRHEhu%2BYzvpisKlBlDzjquamCbysBIqLef5hLQad2E%2BqOa0AiS%2BfOT1DGlz0wvSGBGrd95Pl6SX1WDeks7EVwv1%2FgEiqxZE4WrGZ2lTu&X-Amz-Signature=ff18db76fbd98f50159002b846649b410b9af5cab00cb0de93ba1f21ba213977&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKJARJI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCYyZqabEGjwMa%2F59ZPrJ5X70zIxWh542tTobM9F8P1%2BQIhANMyHJxuUA2EqabNYCVR5m%2BVRDXPHcynea5nZiqgsUugKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr5Xbu1%2Bm26dZLeKEq3AO%2B%2FswSnBpnBGemL7DPJ4DXwQFP0tnaqMEPR4uuGO%2B0mCoYvWKLTh9TTAqxzkjYy3LawW7k8sq%2BRRJimnFT84hx2VcjNfDmrsSP7AAdGBZpkAd6fBkZUJnQqVUKkeLf%2FtB2smYyaekiGjppZI9iFIlhH55U5trvJfvRTlK35TJ62FsvZoYQVwyowpCvToNNVNQMF5QoNAgk%2F7gR0xGexyN5eSPr0UACJTTJt6Cs8Zgx2kp%2BjTZXPociWeljdC%2FeNU4ZNcmS52zKCnScTp0QQ27hqCgosnzVioS0JN3OSRb%2F81uaV1I8N8g78gkcGP3ig0ulpawgeXzCyx4d9l5jfQQhxVWrvlagMIY0xttTWzEERzCl75W2%2F4P8%2F2UERJZ4oU9YsFPEQYFEoyQla04Gy6%2FdXJo%2BZfRdoY2iMGdtyR7WC0mTEbdsJF1av0J1HWdv6AFZF1gFSn9Mqmp4acQjTXxHDbtlfGPooC9SkFgruq9I9Vo9arrp%2FQZDxqnCJQYJ4MSLuig09Iw10Op98%2BoIor8RNn0ajL9QLuysm5gmWfAb8sv2SJVG%2F2h9%2BDmw7nHU6RMAB5xJFEVKaM4dbdlNHBs4Hm5xBcI76QSnfoS0ADonpTT6CYE5n3c2R7tc9jCtmfi%2BBjqkAWJa7r72fWe7%2F2PypENQGgAVBuj31GwOD3AVP7pqJ0Gat2NzbO%2FU5BG%2Brbe17DRDJcMnsRBGH0BOeBy8zsM7Z1mRTzoxv%2BWTbwAAQuPPsm%2Brihicua3YGRHEhu%2BYzvpisKlBlDzjquamCbysBIqLef5hLQad2E%2BqOa0AiS%2BfOT1DGlz0wvSGBGrd95Pl6SX1WDeks7EVwv1%2FgEiqxZE4WrGZ2lTu&X-Amz-Signature=ae57903340b9f3f235cefcba8a429896f6be483a05ba89fe2d7381bf150429d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKJARJI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T021425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCYyZqabEGjwMa%2F59ZPrJ5X70zIxWh542tTobM9F8P1%2BQIhANMyHJxuUA2EqabNYCVR5m%2BVRDXPHcynea5nZiqgsUugKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr5Xbu1%2Bm26dZLeKEq3AO%2B%2FswSnBpnBGemL7DPJ4DXwQFP0tnaqMEPR4uuGO%2B0mCoYvWKLTh9TTAqxzkjYy3LawW7k8sq%2BRRJimnFT84hx2VcjNfDmrsSP7AAdGBZpkAd6fBkZUJnQqVUKkeLf%2FtB2smYyaekiGjppZI9iFIlhH55U5trvJfvRTlK35TJ62FsvZoYQVwyowpCvToNNVNQMF5QoNAgk%2F7gR0xGexyN5eSPr0UACJTTJt6Cs8Zgx2kp%2BjTZXPociWeljdC%2FeNU4ZNcmS52zKCnScTp0QQ27hqCgosnzVioS0JN3OSRb%2F81uaV1I8N8g78gkcGP3ig0ulpawgeXzCyx4d9l5jfQQhxVWrvlagMIY0xttTWzEERzCl75W2%2F4P8%2F2UERJZ4oU9YsFPEQYFEoyQla04Gy6%2FdXJo%2BZfRdoY2iMGdtyR7WC0mTEbdsJF1av0J1HWdv6AFZF1gFSn9Mqmp4acQjTXxHDbtlfGPooC9SkFgruq9I9Vo9arrp%2FQZDxqnCJQYJ4MSLuig09Iw10Op98%2BoIor8RNn0ajL9QLuysm5gmWfAb8sv2SJVG%2F2h9%2BDmw7nHU6RMAB5xJFEVKaM4dbdlNHBs4Hm5xBcI76QSnfoS0ADonpTT6CYE5n3c2R7tc9jCtmfi%2BBjqkAWJa7r72fWe7%2F2PypENQGgAVBuj31GwOD3AVP7pqJ0Gat2NzbO%2FU5BG%2Brbe17DRDJcMnsRBGH0BOeBy8zsM7Z1mRTzoxv%2BWTbwAAQuPPsm%2Brihicua3YGRHEhu%2BYzvpisKlBlDzjquamCbysBIqLef5hLQad2E%2BqOa0AiS%2BfOT1DGlz0wvSGBGrd95Pl6SX1WDeks7EVwv1%2FgEiqxZE4WrGZ2lTu&X-Amz-Signature=317470a6acfb0a13e238c56d34f6af31941e96e04228112043f12a036f9c0fea&X-Amz-SignedHeaders=host&x-id=GetObject)
