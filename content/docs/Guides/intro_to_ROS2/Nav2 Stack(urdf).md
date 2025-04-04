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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB6CGDG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZLv8lBUEL7Y7Cw9DaULamrqlrkus6%2FHb1%2FampWCcvAiBvoGVkKKoiFMnV53EJR%2FnMXSC%2Fa2Oz6O9Gbq8wLxJMiSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMnw6mkUd5f4wACe0BKtwDsVW8s1CBCURNhaSlESMpytlfaB%2FW%2BXCpPQfZLkTNCMl0jD%2BqWaTJ10UXzVopOEDwQC2jci%2Fhl1SL1ciDcAmQRpAqugZ2X%2FmEVUVO8GiMecru4MjfKGpcinH32I9fFis%2FYiezasd00TKNXPCsYoKR0csiWwEgXkkGOIjQpw4c%2Bku9fcKBrBaEpBcoKnXOnxR3zNGvlGd7FuslRrR3SEkRXGsMQBrJwPZZyeUi%2Bxe3m6cwUo%2BOiQHvkYnMBw9rHyuRDZ%2FvKjY%2Ffp1UJzPSdqeyU2cq6hpnJt4RbdZbOZn9pKbK5lkpiLqMN3TT7Fdy5iBFWYJ%2BN%2FV2ZNYEKkNgRrSYASGPx%2Fy45D3HuQOF4k7ebo6ox%2Feh2cV1bMjvVOSEcD0QG9PVOdijfbGZrE%2FEAsbxRFaCGa8d%2FoUM77ZosbW6GpbgG5FLtDHqRNorQyfmbPURBfMOMTjT1hdi%2BcZVgbcJjWIKrI65JjrqR2ecpzZt1%2BkG9b4Cy%2FPI%2FPR7mMxdcRiwENP5R7XqhzLQcdqGlkh8Xe31%2Bq%2BShRsEZTMg0%2FjzXTUHqFArc4MCqJkeqYx6js58zrSXnoG%2Bm%2Byg7YXsqs5t2iBqrdBnfHSrGgggLOh2GNM3UKxSe1zkpbIHbmQw4%2BO%2BvwY6pgEroV0Koh3WCUoQKuGe7NhWmRnX%2BY%2FQL5VelqVSRCzBXv0%2BBRGAEAu5x9ssCnEXWhjM5PQ5owgSlAVXCmTbBpNyxGVfFJYsvueeeRAMV2VfPf0R9ARxx%2FOepYeQ0J02qudUpImtjiwmOsQv88V%2Bi1MQ7sWRSw7IA9nrl3ROOADU7dtkNEOFRrBT2sJ%2BIQadsGKP8nf44wue5GRTZDrJ55FCs4QQFCfG&X-Amz-Signature=9b49fec05afc670be23f1e8e4fb401b532c20ad70b6d6808adebc5e944fd8e80&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB6CGDG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZLv8lBUEL7Y7Cw9DaULamrqlrkus6%2FHb1%2FampWCcvAiBvoGVkKKoiFMnV53EJR%2FnMXSC%2Fa2Oz6O9Gbq8wLxJMiSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMnw6mkUd5f4wACe0BKtwDsVW8s1CBCURNhaSlESMpytlfaB%2FW%2BXCpPQfZLkTNCMl0jD%2BqWaTJ10UXzVopOEDwQC2jci%2Fhl1SL1ciDcAmQRpAqugZ2X%2FmEVUVO8GiMecru4MjfKGpcinH32I9fFis%2FYiezasd00TKNXPCsYoKR0csiWwEgXkkGOIjQpw4c%2Bku9fcKBrBaEpBcoKnXOnxR3zNGvlGd7FuslRrR3SEkRXGsMQBrJwPZZyeUi%2Bxe3m6cwUo%2BOiQHvkYnMBw9rHyuRDZ%2FvKjY%2Ffp1UJzPSdqeyU2cq6hpnJt4RbdZbOZn9pKbK5lkpiLqMN3TT7Fdy5iBFWYJ%2BN%2FV2ZNYEKkNgRrSYASGPx%2Fy45D3HuQOF4k7ebo6ox%2Feh2cV1bMjvVOSEcD0QG9PVOdijfbGZrE%2FEAsbxRFaCGa8d%2FoUM77ZosbW6GpbgG5FLtDHqRNorQyfmbPURBfMOMTjT1hdi%2BcZVgbcJjWIKrI65JjrqR2ecpzZt1%2BkG9b4Cy%2FPI%2FPR7mMxdcRiwENP5R7XqhzLQcdqGlkh8Xe31%2Bq%2BShRsEZTMg0%2FjzXTUHqFArc4MCqJkeqYx6js58zrSXnoG%2Bm%2Byg7YXsqs5t2iBqrdBnfHSrGgggLOh2GNM3UKxSe1zkpbIHbmQw4%2BO%2BvwY6pgEroV0Koh3WCUoQKuGe7NhWmRnX%2BY%2FQL5VelqVSRCzBXv0%2BBRGAEAu5x9ssCnEXWhjM5PQ5owgSlAVXCmTbBpNyxGVfFJYsvueeeRAMV2VfPf0R9ARxx%2FOepYeQ0J02qudUpImtjiwmOsQv88V%2Bi1MQ7sWRSw7IA9nrl3ROOADU7dtkNEOFRrBT2sJ%2BIQadsGKP8nf44wue5GRTZDrJ55FCs4QQFCfG&X-Amz-Signature=0aa8f05c84c0831f1c43e5af05ae23f2e438050926f11d013dbd8dfa8fab6253&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB6CGDG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZLv8lBUEL7Y7Cw9DaULamrqlrkus6%2FHb1%2FampWCcvAiBvoGVkKKoiFMnV53EJR%2FnMXSC%2Fa2Oz6O9Gbq8wLxJMiSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMnw6mkUd5f4wACe0BKtwDsVW8s1CBCURNhaSlESMpytlfaB%2FW%2BXCpPQfZLkTNCMl0jD%2BqWaTJ10UXzVopOEDwQC2jci%2Fhl1SL1ciDcAmQRpAqugZ2X%2FmEVUVO8GiMecru4MjfKGpcinH32I9fFis%2FYiezasd00TKNXPCsYoKR0csiWwEgXkkGOIjQpw4c%2Bku9fcKBrBaEpBcoKnXOnxR3zNGvlGd7FuslRrR3SEkRXGsMQBrJwPZZyeUi%2Bxe3m6cwUo%2BOiQHvkYnMBw9rHyuRDZ%2FvKjY%2Ffp1UJzPSdqeyU2cq6hpnJt4RbdZbOZn9pKbK5lkpiLqMN3TT7Fdy5iBFWYJ%2BN%2FV2ZNYEKkNgRrSYASGPx%2Fy45D3HuQOF4k7ebo6ox%2Feh2cV1bMjvVOSEcD0QG9PVOdijfbGZrE%2FEAsbxRFaCGa8d%2FoUM77ZosbW6GpbgG5FLtDHqRNorQyfmbPURBfMOMTjT1hdi%2BcZVgbcJjWIKrI65JjrqR2ecpzZt1%2BkG9b4Cy%2FPI%2FPR7mMxdcRiwENP5R7XqhzLQcdqGlkh8Xe31%2Bq%2BShRsEZTMg0%2FjzXTUHqFArc4MCqJkeqYx6js58zrSXnoG%2Bm%2Byg7YXsqs5t2iBqrdBnfHSrGgggLOh2GNM3UKxSe1zkpbIHbmQw4%2BO%2BvwY6pgEroV0Koh3WCUoQKuGe7NhWmRnX%2BY%2FQL5VelqVSRCzBXv0%2BBRGAEAu5x9ssCnEXWhjM5PQ5owgSlAVXCmTbBpNyxGVfFJYsvueeeRAMV2VfPf0R9ARxx%2FOepYeQ0J02qudUpImtjiwmOsQv88V%2Bi1MQ7sWRSw7IA9nrl3ROOADU7dtkNEOFRrBT2sJ%2BIQadsGKP8nf44wue5GRTZDrJ55FCs4QQFCfG&X-Amz-Signature=aafb181e4cfa52c90822d8fd747baf9a16732c72390a252c2f042d06de76d45b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB6CGDG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZLv8lBUEL7Y7Cw9DaULamrqlrkus6%2FHb1%2FampWCcvAiBvoGVkKKoiFMnV53EJR%2FnMXSC%2Fa2Oz6O9Gbq8wLxJMiSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMnw6mkUd5f4wACe0BKtwDsVW8s1CBCURNhaSlESMpytlfaB%2FW%2BXCpPQfZLkTNCMl0jD%2BqWaTJ10UXzVopOEDwQC2jci%2Fhl1SL1ciDcAmQRpAqugZ2X%2FmEVUVO8GiMecru4MjfKGpcinH32I9fFis%2FYiezasd00TKNXPCsYoKR0csiWwEgXkkGOIjQpw4c%2Bku9fcKBrBaEpBcoKnXOnxR3zNGvlGd7FuslRrR3SEkRXGsMQBrJwPZZyeUi%2Bxe3m6cwUo%2BOiQHvkYnMBw9rHyuRDZ%2FvKjY%2Ffp1UJzPSdqeyU2cq6hpnJt4RbdZbOZn9pKbK5lkpiLqMN3TT7Fdy5iBFWYJ%2BN%2FV2ZNYEKkNgRrSYASGPx%2Fy45D3HuQOF4k7ebo6ox%2Feh2cV1bMjvVOSEcD0QG9PVOdijfbGZrE%2FEAsbxRFaCGa8d%2FoUM77ZosbW6GpbgG5FLtDHqRNorQyfmbPURBfMOMTjT1hdi%2BcZVgbcJjWIKrI65JjrqR2ecpzZt1%2BkG9b4Cy%2FPI%2FPR7mMxdcRiwENP5R7XqhzLQcdqGlkh8Xe31%2Bq%2BShRsEZTMg0%2FjzXTUHqFArc4MCqJkeqYx6js58zrSXnoG%2Bm%2Byg7YXsqs5t2iBqrdBnfHSrGgggLOh2GNM3UKxSe1zkpbIHbmQw4%2BO%2BvwY6pgEroV0Koh3WCUoQKuGe7NhWmRnX%2BY%2FQL5VelqVSRCzBXv0%2BBRGAEAu5x9ssCnEXWhjM5PQ5owgSlAVXCmTbBpNyxGVfFJYsvueeeRAMV2VfPf0R9ARxx%2FOepYeQ0J02qudUpImtjiwmOsQv88V%2Bi1MQ7sWRSw7IA9nrl3ROOADU7dtkNEOFRrBT2sJ%2BIQadsGKP8nf44wue5GRTZDrJ55FCs4QQFCfG&X-Amz-Signature=3f974926e75280c84bcc6da4fe6a307e44f4f417768377957f298aa95dd78e66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB6CGDG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZLv8lBUEL7Y7Cw9DaULamrqlrkus6%2FHb1%2FampWCcvAiBvoGVkKKoiFMnV53EJR%2FnMXSC%2Fa2Oz6O9Gbq8wLxJMiSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMnw6mkUd5f4wACe0BKtwDsVW8s1CBCURNhaSlESMpytlfaB%2FW%2BXCpPQfZLkTNCMl0jD%2BqWaTJ10UXzVopOEDwQC2jci%2Fhl1SL1ciDcAmQRpAqugZ2X%2FmEVUVO8GiMecru4MjfKGpcinH32I9fFis%2FYiezasd00TKNXPCsYoKR0csiWwEgXkkGOIjQpw4c%2Bku9fcKBrBaEpBcoKnXOnxR3zNGvlGd7FuslRrR3SEkRXGsMQBrJwPZZyeUi%2Bxe3m6cwUo%2BOiQHvkYnMBw9rHyuRDZ%2FvKjY%2Ffp1UJzPSdqeyU2cq6hpnJt4RbdZbOZn9pKbK5lkpiLqMN3TT7Fdy5iBFWYJ%2BN%2FV2ZNYEKkNgRrSYASGPx%2Fy45D3HuQOF4k7ebo6ox%2Feh2cV1bMjvVOSEcD0QG9PVOdijfbGZrE%2FEAsbxRFaCGa8d%2FoUM77ZosbW6GpbgG5FLtDHqRNorQyfmbPURBfMOMTjT1hdi%2BcZVgbcJjWIKrI65JjrqR2ecpzZt1%2BkG9b4Cy%2FPI%2FPR7mMxdcRiwENP5R7XqhzLQcdqGlkh8Xe31%2Bq%2BShRsEZTMg0%2FjzXTUHqFArc4MCqJkeqYx6js58zrSXnoG%2Bm%2Byg7YXsqs5t2iBqrdBnfHSrGgggLOh2GNM3UKxSe1zkpbIHbmQw4%2BO%2BvwY6pgEroV0Koh3WCUoQKuGe7NhWmRnX%2BY%2FQL5VelqVSRCzBXv0%2BBRGAEAu5x9ssCnEXWhjM5PQ5owgSlAVXCmTbBpNyxGVfFJYsvueeeRAMV2VfPf0R9ARxx%2FOepYeQ0J02qudUpImtjiwmOsQv88V%2Bi1MQ7sWRSw7IA9nrl3ROOADU7dtkNEOFRrBT2sJ%2BIQadsGKP8nf44wue5GRTZDrJ55FCs4QQFCfG&X-Amz-Signature=372b675a8425052bbea356428883853553babfd196dbe954ad1f48c33771b6be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWB6CGDG%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0ZLv8lBUEL7Y7Cw9DaULamrqlrkus6%2FHb1%2FampWCcvAiBvoGVkKKoiFMnV53EJR%2FnMXSC%2Fa2Oz6O9Gbq8wLxJMiSr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMnw6mkUd5f4wACe0BKtwDsVW8s1CBCURNhaSlESMpytlfaB%2FW%2BXCpPQfZLkTNCMl0jD%2BqWaTJ10UXzVopOEDwQC2jci%2Fhl1SL1ciDcAmQRpAqugZ2X%2FmEVUVO8GiMecru4MjfKGpcinH32I9fFis%2FYiezasd00TKNXPCsYoKR0csiWwEgXkkGOIjQpw4c%2Bku9fcKBrBaEpBcoKnXOnxR3zNGvlGd7FuslRrR3SEkRXGsMQBrJwPZZyeUi%2Bxe3m6cwUo%2BOiQHvkYnMBw9rHyuRDZ%2FvKjY%2Ffp1UJzPSdqeyU2cq6hpnJt4RbdZbOZn9pKbK5lkpiLqMN3TT7Fdy5iBFWYJ%2BN%2FV2ZNYEKkNgRrSYASGPx%2Fy45D3HuQOF4k7ebo6ox%2Feh2cV1bMjvVOSEcD0QG9PVOdijfbGZrE%2FEAsbxRFaCGa8d%2FoUM77ZosbW6GpbgG5FLtDHqRNorQyfmbPURBfMOMTjT1hdi%2BcZVgbcJjWIKrI65JjrqR2ecpzZt1%2BkG9b4Cy%2FPI%2FPR7mMxdcRiwENP5R7XqhzLQcdqGlkh8Xe31%2Bq%2BShRsEZTMg0%2FjzXTUHqFArc4MCqJkeqYx6js58zrSXnoG%2Bm%2Byg7YXsqs5t2iBqrdBnfHSrGgggLOh2GNM3UKxSe1zkpbIHbmQw4%2BO%2BvwY6pgEroV0Koh3WCUoQKuGe7NhWmRnX%2BY%2FQL5VelqVSRCzBXv0%2BBRGAEAu5x9ssCnEXWhjM5PQ5owgSlAVXCmTbBpNyxGVfFJYsvueeeRAMV2VfPf0R9ARxx%2FOepYeQ0J02qudUpImtjiwmOsQv88V%2Bi1MQ7sWRSw7IA9nrl3ROOADU7dtkNEOFRrBT2sJ%2BIQadsGKP8nf44wue5GRTZDrJ55FCs4QQFCfG&X-Amz-Signature=3d895cb595c3e291dab16af807a3ff5ff0a9eb7f999c6afef6ef723566f0fc06&X-Amz-SignedHeaders=host&x-id=GetObject)
