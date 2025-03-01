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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRY4S43A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDRx%2FcuZPlj4f18V4NEnQkHE%2BL1RyF2WcKiSrYh20DJoAiEAiLYnvMTS4nlKo2LA%2BHqm48je0hleYcWVI7Yz3%2FmicfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJnW9EKVLZa6RyIHyrcA1Y86FHBu%2FFFYXm1pZUIyNxRf9TBv8CVK4RL1grcOGgpRpE06n0mbWjiMQjsulLrG2xRSXyNWZjBS7fXcHeIBOAJEgRS1SlGeAqBMcRjFOh63%2FLhmynstDifK2l5pfENI9bSB4W7Be9xdwLk45d0%2FLhTNQ2f0KOl10a6CTGd2LIrxsMxpPWaP77Y6j854%2F9S5LMP53RcqqSMJUfYUDEoC4BlzWHSgh8cRKoPiBv%2FN9yOZjOunZwUeAtZEXBZ%2BxdNOQhS2B4zTAd%2FR2g62JY8c1x8SHD2kUO140XsyMqZludt8hUU4z8YeNFutxdKk0ZjMUQNE5s%2FmO16Fzgn%2Fz%2BHVu3Dt6o6EyCPaAaskfn7tBaPKt5wej1jEhbH2eaRrWnNgQ%2F1E3CD6tD5l11P4QovS6hKahhviNSim3sG7jtpkg1icgowgRhnvcKHYUV0d94G%2FjTDV8Uo88i%2BY8k2nqFVClZQBGxieEYL51JToOYnD%2Bvzgk%2F62hxy0aC%2F7M1p4%2FAOvKZ94D2jzILSkH1ACQy1QpEYzhN2pl84fEKfX5iR7KvzhObn3mnZDTS5BnelxLE0iG92ggAKWeSkKbLOoTmoHRyYQ65MRvX%2F27lXt%2BNjjIivGJffNqXZI%2BNLjs1dMNKQir4GOqUB35qO%2BlR%2FKDSZKNiXsU%2B6tPjez7UV%2B%2FRlfdxB8Zgy5RKhcQ5pLvzG%2BYf6aUpyEl3K7nNXOgVDcqmW4RvLWT27xHLl5S8qoLP3nRr6gINx8bHybcGFCmGf9b8jTHkeHLB0SO%2Fd%2BqjuH3wcQXRWXyHfz2%2BL%2FEqjiGXBr2u7wYSb1otDIXQ%2F9nxwJvns6Ix1VqIKGth7qVek3j0di7u77%2BP08h%2FYf%2FsL&X-Amz-Signature=9a33d22e06018711e22da3c328f80a821ccf7d12c2cff3a302a53200d98ca32f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRY4S43A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDRx%2FcuZPlj4f18V4NEnQkHE%2BL1RyF2WcKiSrYh20DJoAiEAiLYnvMTS4nlKo2LA%2BHqm48je0hleYcWVI7Yz3%2FmicfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJnW9EKVLZa6RyIHyrcA1Y86FHBu%2FFFYXm1pZUIyNxRf9TBv8CVK4RL1grcOGgpRpE06n0mbWjiMQjsulLrG2xRSXyNWZjBS7fXcHeIBOAJEgRS1SlGeAqBMcRjFOh63%2FLhmynstDifK2l5pfENI9bSB4W7Be9xdwLk45d0%2FLhTNQ2f0KOl10a6CTGd2LIrxsMxpPWaP77Y6j854%2F9S5LMP53RcqqSMJUfYUDEoC4BlzWHSgh8cRKoPiBv%2FN9yOZjOunZwUeAtZEXBZ%2BxdNOQhS2B4zTAd%2FR2g62JY8c1x8SHD2kUO140XsyMqZludt8hUU4z8YeNFutxdKk0ZjMUQNE5s%2FmO16Fzgn%2Fz%2BHVu3Dt6o6EyCPaAaskfn7tBaPKt5wej1jEhbH2eaRrWnNgQ%2F1E3CD6tD5l11P4QovS6hKahhviNSim3sG7jtpkg1icgowgRhnvcKHYUV0d94G%2FjTDV8Uo88i%2BY8k2nqFVClZQBGxieEYL51JToOYnD%2Bvzgk%2F62hxy0aC%2F7M1p4%2FAOvKZ94D2jzILSkH1ACQy1QpEYzhN2pl84fEKfX5iR7KvzhObn3mnZDTS5BnelxLE0iG92ggAKWeSkKbLOoTmoHRyYQ65MRvX%2F27lXt%2BNjjIivGJffNqXZI%2BNLjs1dMNKQir4GOqUB35qO%2BlR%2FKDSZKNiXsU%2B6tPjez7UV%2B%2FRlfdxB8Zgy5RKhcQ5pLvzG%2BYf6aUpyEl3K7nNXOgVDcqmW4RvLWT27xHLl5S8qoLP3nRr6gINx8bHybcGFCmGf9b8jTHkeHLB0SO%2Fd%2BqjuH3wcQXRWXyHfz2%2BL%2FEqjiGXBr2u7wYSb1otDIXQ%2F9nxwJvns6Ix1VqIKGth7qVek3j0di7u77%2BP08h%2FYf%2FsL&X-Amz-Signature=8edcf15afc8f726eaca527c1cedcbf2bbf0f22202f83d3adc5024ac638196578&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRY4S43A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDRx%2FcuZPlj4f18V4NEnQkHE%2BL1RyF2WcKiSrYh20DJoAiEAiLYnvMTS4nlKo2LA%2BHqm48je0hleYcWVI7Yz3%2FmicfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJnW9EKVLZa6RyIHyrcA1Y86FHBu%2FFFYXm1pZUIyNxRf9TBv8CVK4RL1grcOGgpRpE06n0mbWjiMQjsulLrG2xRSXyNWZjBS7fXcHeIBOAJEgRS1SlGeAqBMcRjFOh63%2FLhmynstDifK2l5pfENI9bSB4W7Be9xdwLk45d0%2FLhTNQ2f0KOl10a6CTGd2LIrxsMxpPWaP77Y6j854%2F9S5LMP53RcqqSMJUfYUDEoC4BlzWHSgh8cRKoPiBv%2FN9yOZjOunZwUeAtZEXBZ%2BxdNOQhS2B4zTAd%2FR2g62JY8c1x8SHD2kUO140XsyMqZludt8hUU4z8YeNFutxdKk0ZjMUQNE5s%2FmO16Fzgn%2Fz%2BHVu3Dt6o6EyCPaAaskfn7tBaPKt5wej1jEhbH2eaRrWnNgQ%2F1E3CD6tD5l11P4QovS6hKahhviNSim3sG7jtpkg1icgowgRhnvcKHYUV0d94G%2FjTDV8Uo88i%2BY8k2nqFVClZQBGxieEYL51JToOYnD%2Bvzgk%2F62hxy0aC%2F7M1p4%2FAOvKZ94D2jzILSkH1ACQy1QpEYzhN2pl84fEKfX5iR7KvzhObn3mnZDTS5BnelxLE0iG92ggAKWeSkKbLOoTmoHRyYQ65MRvX%2F27lXt%2BNjjIivGJffNqXZI%2BNLjs1dMNKQir4GOqUB35qO%2BlR%2FKDSZKNiXsU%2B6tPjez7UV%2B%2FRlfdxB8Zgy5RKhcQ5pLvzG%2BYf6aUpyEl3K7nNXOgVDcqmW4RvLWT27xHLl5S8qoLP3nRr6gINx8bHybcGFCmGf9b8jTHkeHLB0SO%2Fd%2BqjuH3wcQXRWXyHfz2%2BL%2FEqjiGXBr2u7wYSb1otDIXQ%2F9nxwJvns6Ix1VqIKGth7qVek3j0di7u77%2BP08h%2FYf%2FsL&X-Amz-Signature=84a6aa8116870f244dec91821a0cc70912a81af57d75ff3c28098a67c88ca359&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRY4S43A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDRx%2FcuZPlj4f18V4NEnQkHE%2BL1RyF2WcKiSrYh20DJoAiEAiLYnvMTS4nlKo2LA%2BHqm48je0hleYcWVI7Yz3%2FmicfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJnW9EKVLZa6RyIHyrcA1Y86FHBu%2FFFYXm1pZUIyNxRf9TBv8CVK4RL1grcOGgpRpE06n0mbWjiMQjsulLrG2xRSXyNWZjBS7fXcHeIBOAJEgRS1SlGeAqBMcRjFOh63%2FLhmynstDifK2l5pfENI9bSB4W7Be9xdwLk45d0%2FLhTNQ2f0KOl10a6CTGd2LIrxsMxpPWaP77Y6j854%2F9S5LMP53RcqqSMJUfYUDEoC4BlzWHSgh8cRKoPiBv%2FN9yOZjOunZwUeAtZEXBZ%2BxdNOQhS2B4zTAd%2FR2g62JY8c1x8SHD2kUO140XsyMqZludt8hUU4z8YeNFutxdKk0ZjMUQNE5s%2FmO16Fzgn%2Fz%2BHVu3Dt6o6EyCPaAaskfn7tBaPKt5wej1jEhbH2eaRrWnNgQ%2F1E3CD6tD5l11P4QovS6hKahhviNSim3sG7jtpkg1icgowgRhnvcKHYUV0d94G%2FjTDV8Uo88i%2BY8k2nqFVClZQBGxieEYL51JToOYnD%2Bvzgk%2F62hxy0aC%2F7M1p4%2FAOvKZ94D2jzILSkH1ACQy1QpEYzhN2pl84fEKfX5iR7KvzhObn3mnZDTS5BnelxLE0iG92ggAKWeSkKbLOoTmoHRyYQ65MRvX%2F27lXt%2BNjjIivGJffNqXZI%2BNLjs1dMNKQir4GOqUB35qO%2BlR%2FKDSZKNiXsU%2B6tPjez7UV%2B%2FRlfdxB8Zgy5RKhcQ5pLvzG%2BYf6aUpyEl3K7nNXOgVDcqmW4RvLWT27xHLl5S8qoLP3nRr6gINx8bHybcGFCmGf9b8jTHkeHLB0SO%2Fd%2BqjuH3wcQXRWXyHfz2%2BL%2FEqjiGXBr2u7wYSb1otDIXQ%2F9nxwJvns6Ix1VqIKGth7qVek3j0di7u77%2BP08h%2FYf%2FsL&X-Amz-Signature=95a1a9c4dda9354595624912e496e7665b83aa98c51756d536720ee72ada632b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRY4S43A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDRx%2FcuZPlj4f18V4NEnQkHE%2BL1RyF2WcKiSrYh20DJoAiEAiLYnvMTS4nlKo2LA%2BHqm48je0hleYcWVI7Yz3%2FmicfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJnW9EKVLZa6RyIHyrcA1Y86FHBu%2FFFYXm1pZUIyNxRf9TBv8CVK4RL1grcOGgpRpE06n0mbWjiMQjsulLrG2xRSXyNWZjBS7fXcHeIBOAJEgRS1SlGeAqBMcRjFOh63%2FLhmynstDifK2l5pfENI9bSB4W7Be9xdwLk45d0%2FLhTNQ2f0KOl10a6CTGd2LIrxsMxpPWaP77Y6j854%2F9S5LMP53RcqqSMJUfYUDEoC4BlzWHSgh8cRKoPiBv%2FN9yOZjOunZwUeAtZEXBZ%2BxdNOQhS2B4zTAd%2FR2g62JY8c1x8SHD2kUO140XsyMqZludt8hUU4z8YeNFutxdKk0ZjMUQNE5s%2FmO16Fzgn%2Fz%2BHVu3Dt6o6EyCPaAaskfn7tBaPKt5wej1jEhbH2eaRrWnNgQ%2F1E3CD6tD5l11P4QovS6hKahhviNSim3sG7jtpkg1icgowgRhnvcKHYUV0d94G%2FjTDV8Uo88i%2BY8k2nqFVClZQBGxieEYL51JToOYnD%2Bvzgk%2F62hxy0aC%2F7M1p4%2FAOvKZ94D2jzILSkH1ACQy1QpEYzhN2pl84fEKfX5iR7KvzhObn3mnZDTS5BnelxLE0iG92ggAKWeSkKbLOoTmoHRyYQ65MRvX%2F27lXt%2BNjjIivGJffNqXZI%2BNLjs1dMNKQir4GOqUB35qO%2BlR%2FKDSZKNiXsU%2B6tPjez7UV%2B%2FRlfdxB8Zgy5RKhcQ5pLvzG%2BYf6aUpyEl3K7nNXOgVDcqmW4RvLWT27xHLl5S8qoLP3nRr6gINx8bHybcGFCmGf9b8jTHkeHLB0SO%2Fd%2BqjuH3wcQXRWXyHfz2%2BL%2FEqjiGXBr2u7wYSb1otDIXQ%2F9nxwJvns6Ix1VqIKGth7qVek3j0di7u77%2BP08h%2FYf%2FsL&X-Amz-Signature=62e1e0f6dfe4bdb491878ec0b1b7fc6f948856da47a55edb5a1426ec0adbc3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRY4S43A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDRx%2FcuZPlj4f18V4NEnQkHE%2BL1RyF2WcKiSrYh20DJoAiEAiLYnvMTS4nlKo2LA%2BHqm48je0hleYcWVI7Yz3%2FmicfcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJnW9EKVLZa6RyIHyrcA1Y86FHBu%2FFFYXm1pZUIyNxRf9TBv8CVK4RL1grcOGgpRpE06n0mbWjiMQjsulLrG2xRSXyNWZjBS7fXcHeIBOAJEgRS1SlGeAqBMcRjFOh63%2FLhmynstDifK2l5pfENI9bSB4W7Be9xdwLk45d0%2FLhTNQ2f0KOl10a6CTGd2LIrxsMxpPWaP77Y6j854%2F9S5LMP53RcqqSMJUfYUDEoC4BlzWHSgh8cRKoPiBv%2FN9yOZjOunZwUeAtZEXBZ%2BxdNOQhS2B4zTAd%2FR2g62JY8c1x8SHD2kUO140XsyMqZludt8hUU4z8YeNFutxdKk0ZjMUQNE5s%2FmO16Fzgn%2Fz%2BHVu3Dt6o6EyCPaAaskfn7tBaPKt5wej1jEhbH2eaRrWnNgQ%2F1E3CD6tD5l11P4QovS6hKahhviNSim3sG7jtpkg1icgowgRhnvcKHYUV0d94G%2FjTDV8Uo88i%2BY8k2nqFVClZQBGxieEYL51JToOYnD%2Bvzgk%2F62hxy0aC%2F7M1p4%2FAOvKZ94D2jzILSkH1ACQy1QpEYzhN2pl84fEKfX5iR7KvzhObn3mnZDTS5BnelxLE0iG92ggAKWeSkKbLOoTmoHRyYQ65MRvX%2F27lXt%2BNjjIivGJffNqXZI%2BNLjs1dMNKQir4GOqUB35qO%2BlR%2FKDSZKNiXsU%2B6tPjez7UV%2B%2FRlfdxB8Zgy5RKhcQ5pLvzG%2BYf6aUpyEl3K7nNXOgVDcqmW4RvLWT27xHLl5S8qoLP3nRr6gINx8bHybcGFCmGf9b8jTHkeHLB0SO%2Fd%2BqjuH3wcQXRWXyHfz2%2BL%2FEqjiGXBr2u7wYSb1otDIXQ%2F9nxwJvns6Ix1VqIKGth7qVek3j0di7u77%2BP08h%2FYf%2FsL&X-Amz-Signature=aa7b99523871bad0a4d25f0a1ded53f7313cc6908ef8e28bcaa7a135de87ad55&X-Amz-SignedHeaders=host&x-id=GetObject)
