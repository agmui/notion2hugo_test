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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFNXHNV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE4xr3vkVWXJ4Tfqn3ETHdpiTNR4Ffq9tmoglPjM9OJZAiAZNGHRhPiVhSRok0bpGSkUgncmgm4j4JTYF%2Bw%2BIllC%2Bir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWJCBki2XUkD7vMYIKtwDZPaGajjDKRdI4wkb9Bx7iIZpm0as%2BDJuaaXOMR2hPGwUNoc%2BVR8ngBbH9Z1LvCngbIxnUpx8H81M%2BVJCmY8Y8aqDosHC1NcHY04QcqkSSJ7omQRvRT0y4sZce42bQas3HpCvimo3ggQkcggzm63zAjdQynxeKuWt6Doi223aCbC6SN99G9XkKTyN3rFT5rPQuOkSaV4o3qXWWnFsjhyRSktuvFJKdeCgVQUty6kUP5c8D4PVyYcrA7Z8Yf6B3j%2BDWgm9b%2BtlpiA0035sHr4ZxRz%2BuopHK7HplROJ2e0DWTilBA09sZCpqLiM27eIr9%2F1%2BGl4QhNI9FHFKcpd8TT%2BE2kOZY9IpiJIvgY2qVrh72SznUIAvJAOV%2F%2FCNMUTDtOsxtkg6vOn9hsrLh4SlqiiZ6iOpx%2ByakCkxNQwdQCs%2BUFRnJzekXxfV%2BFKKW1%2F2GHvXVhvGdDUYQo0Zm%2BvYy7p2Tb35ho5w6n8LkRL1ZgW9cWQv%2BH2BqhG1pLahWYr%2FlhICaX0hjc%2BPEzQCO81NGVpt8RCw0X7LOboQ9GzzsKiTURYkE3glDyP77%2BKvYz%2Bmrs8S1%2BI2YRS0g0PiwbNvQTA%2BJQZNnnG0b19rXr5ZUnif%2BG7Zh5Xdd%2BNMxax%2FUgwnp7PwQY6pgF7M3immvG27WA43Gf7FKYZJHk5oFnYRT51rzImRcmf6Ib1ONRiJIg2yOXr3TDbpmGUIL1bjV5A%2BqfmQRCv2vs1C9QPN5lqnStJSdXzyPvZ6%2BaYnkrhga%2Br%2BCE05NxXppBxRNecPi4kzVYupCgbSUtnX6haWW6%2BijMH2br%2B%2FI%2F7R4AFN28Ea%2BBLpWqgy5Ugu4Pmu%2BYl%2FaIVT5Iy%2BO79ULAPPHmyXWR3&X-Amz-Signature=e078f23f26b2852bf620b331d3c93e4d7822b201512db5015059f09c86df446b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFNXHNV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE4xr3vkVWXJ4Tfqn3ETHdpiTNR4Ffq9tmoglPjM9OJZAiAZNGHRhPiVhSRok0bpGSkUgncmgm4j4JTYF%2Bw%2BIllC%2Bir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWJCBki2XUkD7vMYIKtwDZPaGajjDKRdI4wkb9Bx7iIZpm0as%2BDJuaaXOMR2hPGwUNoc%2BVR8ngBbH9Z1LvCngbIxnUpx8H81M%2BVJCmY8Y8aqDosHC1NcHY04QcqkSSJ7omQRvRT0y4sZce42bQas3HpCvimo3ggQkcggzm63zAjdQynxeKuWt6Doi223aCbC6SN99G9XkKTyN3rFT5rPQuOkSaV4o3qXWWnFsjhyRSktuvFJKdeCgVQUty6kUP5c8D4PVyYcrA7Z8Yf6B3j%2BDWgm9b%2BtlpiA0035sHr4ZxRz%2BuopHK7HplROJ2e0DWTilBA09sZCpqLiM27eIr9%2F1%2BGl4QhNI9FHFKcpd8TT%2BE2kOZY9IpiJIvgY2qVrh72SznUIAvJAOV%2F%2FCNMUTDtOsxtkg6vOn9hsrLh4SlqiiZ6iOpx%2ByakCkxNQwdQCs%2BUFRnJzekXxfV%2BFKKW1%2F2GHvXVhvGdDUYQo0Zm%2BvYy7p2Tb35ho5w6n8LkRL1ZgW9cWQv%2BH2BqhG1pLahWYr%2FlhICaX0hjc%2BPEzQCO81NGVpt8RCw0X7LOboQ9GzzsKiTURYkE3glDyP77%2BKvYz%2Bmrs8S1%2BI2YRS0g0PiwbNvQTA%2BJQZNnnG0b19rXr5ZUnif%2BG7Zh5Xdd%2BNMxax%2FUgwnp7PwQY6pgF7M3immvG27WA43Gf7FKYZJHk5oFnYRT51rzImRcmf6Ib1ONRiJIg2yOXr3TDbpmGUIL1bjV5A%2BqfmQRCv2vs1C9QPN5lqnStJSdXzyPvZ6%2BaYnkrhga%2Br%2BCE05NxXppBxRNecPi4kzVYupCgbSUtnX6haWW6%2BijMH2br%2B%2FI%2F7R4AFN28Ea%2BBLpWqgy5Ugu4Pmu%2BYl%2FaIVT5Iy%2BO79ULAPPHmyXWR3&X-Amz-Signature=b012d2a74a3c8aac49f381616da2fc298fef0c00e471d5e5d4e83fea002471d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFNXHNV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE4xr3vkVWXJ4Tfqn3ETHdpiTNR4Ffq9tmoglPjM9OJZAiAZNGHRhPiVhSRok0bpGSkUgncmgm4j4JTYF%2Bw%2BIllC%2Bir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWJCBki2XUkD7vMYIKtwDZPaGajjDKRdI4wkb9Bx7iIZpm0as%2BDJuaaXOMR2hPGwUNoc%2BVR8ngBbH9Z1LvCngbIxnUpx8H81M%2BVJCmY8Y8aqDosHC1NcHY04QcqkSSJ7omQRvRT0y4sZce42bQas3HpCvimo3ggQkcggzm63zAjdQynxeKuWt6Doi223aCbC6SN99G9XkKTyN3rFT5rPQuOkSaV4o3qXWWnFsjhyRSktuvFJKdeCgVQUty6kUP5c8D4PVyYcrA7Z8Yf6B3j%2BDWgm9b%2BtlpiA0035sHr4ZxRz%2BuopHK7HplROJ2e0DWTilBA09sZCpqLiM27eIr9%2F1%2BGl4QhNI9FHFKcpd8TT%2BE2kOZY9IpiJIvgY2qVrh72SznUIAvJAOV%2F%2FCNMUTDtOsxtkg6vOn9hsrLh4SlqiiZ6iOpx%2ByakCkxNQwdQCs%2BUFRnJzekXxfV%2BFKKW1%2F2GHvXVhvGdDUYQo0Zm%2BvYy7p2Tb35ho5w6n8LkRL1ZgW9cWQv%2BH2BqhG1pLahWYr%2FlhICaX0hjc%2BPEzQCO81NGVpt8RCw0X7LOboQ9GzzsKiTURYkE3glDyP77%2BKvYz%2Bmrs8S1%2BI2YRS0g0PiwbNvQTA%2BJQZNnnG0b19rXr5ZUnif%2BG7Zh5Xdd%2BNMxax%2FUgwnp7PwQY6pgF7M3immvG27WA43Gf7FKYZJHk5oFnYRT51rzImRcmf6Ib1ONRiJIg2yOXr3TDbpmGUIL1bjV5A%2BqfmQRCv2vs1C9QPN5lqnStJSdXzyPvZ6%2BaYnkrhga%2Br%2BCE05NxXppBxRNecPi4kzVYupCgbSUtnX6haWW6%2BijMH2br%2B%2FI%2F7R4AFN28Ea%2BBLpWqgy5Ugu4Pmu%2BYl%2FaIVT5Iy%2BO79ULAPPHmyXWR3&X-Amz-Signature=75dc7d820eddb0a3b29a66ea74abc2628ea05039ded4aff22378cd5247acd9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFNXHNV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE4xr3vkVWXJ4Tfqn3ETHdpiTNR4Ffq9tmoglPjM9OJZAiAZNGHRhPiVhSRok0bpGSkUgncmgm4j4JTYF%2Bw%2BIllC%2Bir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWJCBki2XUkD7vMYIKtwDZPaGajjDKRdI4wkb9Bx7iIZpm0as%2BDJuaaXOMR2hPGwUNoc%2BVR8ngBbH9Z1LvCngbIxnUpx8H81M%2BVJCmY8Y8aqDosHC1NcHY04QcqkSSJ7omQRvRT0y4sZce42bQas3HpCvimo3ggQkcggzm63zAjdQynxeKuWt6Doi223aCbC6SN99G9XkKTyN3rFT5rPQuOkSaV4o3qXWWnFsjhyRSktuvFJKdeCgVQUty6kUP5c8D4PVyYcrA7Z8Yf6B3j%2BDWgm9b%2BtlpiA0035sHr4ZxRz%2BuopHK7HplROJ2e0DWTilBA09sZCpqLiM27eIr9%2F1%2BGl4QhNI9FHFKcpd8TT%2BE2kOZY9IpiJIvgY2qVrh72SznUIAvJAOV%2F%2FCNMUTDtOsxtkg6vOn9hsrLh4SlqiiZ6iOpx%2ByakCkxNQwdQCs%2BUFRnJzekXxfV%2BFKKW1%2F2GHvXVhvGdDUYQo0Zm%2BvYy7p2Tb35ho5w6n8LkRL1ZgW9cWQv%2BH2BqhG1pLahWYr%2FlhICaX0hjc%2BPEzQCO81NGVpt8RCw0X7LOboQ9GzzsKiTURYkE3glDyP77%2BKvYz%2Bmrs8S1%2BI2YRS0g0PiwbNvQTA%2BJQZNnnG0b19rXr5ZUnif%2BG7Zh5Xdd%2BNMxax%2FUgwnp7PwQY6pgF7M3immvG27WA43Gf7FKYZJHk5oFnYRT51rzImRcmf6Ib1ONRiJIg2yOXr3TDbpmGUIL1bjV5A%2BqfmQRCv2vs1C9QPN5lqnStJSdXzyPvZ6%2BaYnkrhga%2Br%2BCE05NxXppBxRNecPi4kzVYupCgbSUtnX6haWW6%2BijMH2br%2B%2FI%2F7R4AFN28Ea%2BBLpWqgy5Ugu4Pmu%2BYl%2FaIVT5Iy%2BO79ULAPPHmyXWR3&X-Amz-Signature=0d1ec0492e9f1892fa63eb1535a311ca05c5094058f7596a576d178dfdb25029&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFNXHNV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE4xr3vkVWXJ4Tfqn3ETHdpiTNR4Ffq9tmoglPjM9OJZAiAZNGHRhPiVhSRok0bpGSkUgncmgm4j4JTYF%2Bw%2BIllC%2Bir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWJCBki2XUkD7vMYIKtwDZPaGajjDKRdI4wkb9Bx7iIZpm0as%2BDJuaaXOMR2hPGwUNoc%2BVR8ngBbH9Z1LvCngbIxnUpx8H81M%2BVJCmY8Y8aqDosHC1NcHY04QcqkSSJ7omQRvRT0y4sZce42bQas3HpCvimo3ggQkcggzm63zAjdQynxeKuWt6Doi223aCbC6SN99G9XkKTyN3rFT5rPQuOkSaV4o3qXWWnFsjhyRSktuvFJKdeCgVQUty6kUP5c8D4PVyYcrA7Z8Yf6B3j%2BDWgm9b%2BtlpiA0035sHr4ZxRz%2BuopHK7HplROJ2e0DWTilBA09sZCpqLiM27eIr9%2F1%2BGl4QhNI9FHFKcpd8TT%2BE2kOZY9IpiJIvgY2qVrh72SznUIAvJAOV%2F%2FCNMUTDtOsxtkg6vOn9hsrLh4SlqiiZ6iOpx%2ByakCkxNQwdQCs%2BUFRnJzekXxfV%2BFKKW1%2F2GHvXVhvGdDUYQo0Zm%2BvYy7p2Tb35ho5w6n8LkRL1ZgW9cWQv%2BH2BqhG1pLahWYr%2FlhICaX0hjc%2BPEzQCO81NGVpt8RCw0X7LOboQ9GzzsKiTURYkE3glDyP77%2BKvYz%2Bmrs8S1%2BI2YRS0g0PiwbNvQTA%2BJQZNnnG0b19rXr5ZUnif%2BG7Zh5Xdd%2BNMxax%2FUgwnp7PwQY6pgF7M3immvG27WA43Gf7FKYZJHk5oFnYRT51rzImRcmf6Ib1ONRiJIg2yOXr3TDbpmGUIL1bjV5A%2BqfmQRCv2vs1C9QPN5lqnStJSdXzyPvZ6%2BaYnkrhga%2Br%2BCE05NxXppBxRNecPi4kzVYupCgbSUtnX6haWW6%2BijMH2br%2B%2FI%2F7R4AFN28Ea%2BBLpWqgy5Ugu4Pmu%2BYl%2FaIVT5Iy%2BO79ULAPPHmyXWR3&X-Amz-Signature=a699efec64c5426fd8adae4e2edd6d999bb3abf0c5e77d1ea85550e9a0d3bbfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFNXHNV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIE4xr3vkVWXJ4Tfqn3ETHdpiTNR4Ffq9tmoglPjM9OJZAiAZNGHRhPiVhSRok0bpGSkUgncmgm4j4JTYF%2Bw%2BIllC%2Bir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMWJCBki2XUkD7vMYIKtwDZPaGajjDKRdI4wkb9Bx7iIZpm0as%2BDJuaaXOMR2hPGwUNoc%2BVR8ngBbH9Z1LvCngbIxnUpx8H81M%2BVJCmY8Y8aqDosHC1NcHY04QcqkSSJ7omQRvRT0y4sZce42bQas3HpCvimo3ggQkcggzm63zAjdQynxeKuWt6Doi223aCbC6SN99G9XkKTyN3rFT5rPQuOkSaV4o3qXWWnFsjhyRSktuvFJKdeCgVQUty6kUP5c8D4PVyYcrA7Z8Yf6B3j%2BDWgm9b%2BtlpiA0035sHr4ZxRz%2BuopHK7HplROJ2e0DWTilBA09sZCpqLiM27eIr9%2F1%2BGl4QhNI9FHFKcpd8TT%2BE2kOZY9IpiJIvgY2qVrh72SznUIAvJAOV%2F%2FCNMUTDtOsxtkg6vOn9hsrLh4SlqiiZ6iOpx%2ByakCkxNQwdQCs%2BUFRnJzekXxfV%2BFKKW1%2F2GHvXVhvGdDUYQo0Zm%2BvYy7p2Tb35ho5w6n8LkRL1ZgW9cWQv%2BH2BqhG1pLahWYr%2FlhICaX0hjc%2BPEzQCO81NGVpt8RCw0X7LOboQ9GzzsKiTURYkE3glDyP77%2BKvYz%2Bmrs8S1%2BI2YRS0g0PiwbNvQTA%2BJQZNnnG0b19rXr5ZUnif%2BG7Zh5Xdd%2BNMxax%2FUgwnp7PwQY6pgF7M3immvG27WA43Gf7FKYZJHk5oFnYRT51rzImRcmf6Ib1ONRiJIg2yOXr3TDbpmGUIL1bjV5A%2BqfmQRCv2vs1C9QPN5lqnStJSdXzyPvZ6%2BaYnkrhga%2Br%2BCE05NxXppBxRNecPi4kzVYupCgbSUtnX6haWW6%2BijMH2br%2B%2FI%2F7R4AFN28Ea%2BBLpWqgy5Ugu4Pmu%2BYl%2FaIVT5Iy%2BO79ULAPPHmyXWR3&X-Amz-Signature=9ed1c2b47dc9cfed657f02d1ace428192837ba51fe496a80129ff2865003c067&X-Amz-SignedHeaders=host&x-id=GetObject)
