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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7W5IJI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFS6qlIQdYvt7mJQsMrsWPuZRgtg56o7QPBrkXJDWAwsAiEAyslPtNaFY6VG30tZ17AeJFvrtfqFziGdQ7%2FQgW8vmDEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkwzZ9Ut1I1tYVrsircA%2BTKTjqFw4o9C3FDBIYMEWDzpulrdCu9So1jWaHCD1mdu8RVmNooo5yfJgq9ZuaE3YKmhsM3OYGkKfowQFaSXwFcUy198EeoeWrplXdlbDYXX9lmLP3KJo1LUG2a%2FLfbue%2F%2FPFw1gm5pvIaGD5vUpHvaP5OPfOPusRIK13dE0frqJOP5c797aMQhKp8UBVsuk6JKg1wzsizomNIu%2BAiKZ65MsytP2iGQShcMrp8PVPHbmNzyImB%2FrpEyGZmRH0oLVla5vwMefKMtc0u9jpGYpmesJ%2Fwafyq9LkW%2BwjqewX%2BNmBrV%2BKxjhxuOINR8EB3G6mrf7CPmURhyZtXzMgH0v7OrBDTvhnGnNEiVKyMwE9cGmUzxBV7fextU0x%2BZeQfM9v9%2Ff%2Fw5lveYjXBwB4qLEyDwyIObD7aEHrlv8sJ1w8ibXjQQE0eFWZFQpu8zXAqLHggBdOm7FQF0Oio2bstGtsq1UDQ1pXYxnlLPWtmw2E8q37afVeyNY9fUS3FYH6IdfhYhW70K1sLYTlq0wNKju9ZfDazasXA6I7j%2B9KRG2Rvds7WDIFb%2FMdSVi3HUgGXnPdn3oSUUjccee0LsFR%2BN%2BQQ9mNErdZLEmqT%2BQqCq48zfBBcvNnP%2B8D%2BJgt6fMOmx574GOqUBLsISF1bjSn%2BTnep7JwDxs%2FaEv3qBmG4riZi5rk37bmxzSMcOuuSiqFajrl%2BEIrXIAQuiaJ4EyTecKXLLWqoCTlewLcne4B7f8cR4scdhOOh70U3ZF7a6TzYiER1oG0h9HAi5dh1mTJuDPMpEGRyXSrKUMz6J7I8htMN7RXpb78c2%2FywII71Gtzxi0JpvuP6WG8paYZ1cy9FlCA5i8oaYGs2kEEnn&X-Amz-Signature=8ea2ada871cba5fa16bc2de67ba6e0949b458d8fea0eac0e834992508c708077&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7W5IJI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFS6qlIQdYvt7mJQsMrsWPuZRgtg56o7QPBrkXJDWAwsAiEAyslPtNaFY6VG30tZ17AeJFvrtfqFziGdQ7%2FQgW8vmDEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkwzZ9Ut1I1tYVrsircA%2BTKTjqFw4o9C3FDBIYMEWDzpulrdCu9So1jWaHCD1mdu8RVmNooo5yfJgq9ZuaE3YKmhsM3OYGkKfowQFaSXwFcUy198EeoeWrplXdlbDYXX9lmLP3KJo1LUG2a%2FLfbue%2F%2FPFw1gm5pvIaGD5vUpHvaP5OPfOPusRIK13dE0frqJOP5c797aMQhKp8UBVsuk6JKg1wzsizomNIu%2BAiKZ65MsytP2iGQShcMrp8PVPHbmNzyImB%2FrpEyGZmRH0oLVla5vwMefKMtc0u9jpGYpmesJ%2Fwafyq9LkW%2BwjqewX%2BNmBrV%2BKxjhxuOINR8EB3G6mrf7CPmURhyZtXzMgH0v7OrBDTvhnGnNEiVKyMwE9cGmUzxBV7fextU0x%2BZeQfM9v9%2Ff%2Fw5lveYjXBwB4qLEyDwyIObD7aEHrlv8sJ1w8ibXjQQE0eFWZFQpu8zXAqLHggBdOm7FQF0Oio2bstGtsq1UDQ1pXYxnlLPWtmw2E8q37afVeyNY9fUS3FYH6IdfhYhW70K1sLYTlq0wNKju9ZfDazasXA6I7j%2B9KRG2Rvds7WDIFb%2FMdSVi3HUgGXnPdn3oSUUjccee0LsFR%2BN%2BQQ9mNErdZLEmqT%2BQqCq48zfBBcvNnP%2B8D%2BJgt6fMOmx574GOqUBLsISF1bjSn%2BTnep7JwDxs%2FaEv3qBmG4riZi5rk37bmxzSMcOuuSiqFajrl%2BEIrXIAQuiaJ4EyTecKXLLWqoCTlewLcne4B7f8cR4scdhOOh70U3ZF7a6TzYiER1oG0h9HAi5dh1mTJuDPMpEGRyXSrKUMz6J7I8htMN7RXpb78c2%2FywII71Gtzxi0JpvuP6WG8paYZ1cy9FlCA5i8oaYGs2kEEnn&X-Amz-Signature=93a5a9cb22cb95d74d46d297afd99a6c457097405d5e8d2f3316b9dfd2183cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7W5IJI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFS6qlIQdYvt7mJQsMrsWPuZRgtg56o7QPBrkXJDWAwsAiEAyslPtNaFY6VG30tZ17AeJFvrtfqFziGdQ7%2FQgW8vmDEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkwzZ9Ut1I1tYVrsircA%2BTKTjqFw4o9C3FDBIYMEWDzpulrdCu9So1jWaHCD1mdu8RVmNooo5yfJgq9ZuaE3YKmhsM3OYGkKfowQFaSXwFcUy198EeoeWrplXdlbDYXX9lmLP3KJo1LUG2a%2FLfbue%2F%2FPFw1gm5pvIaGD5vUpHvaP5OPfOPusRIK13dE0frqJOP5c797aMQhKp8UBVsuk6JKg1wzsizomNIu%2BAiKZ65MsytP2iGQShcMrp8PVPHbmNzyImB%2FrpEyGZmRH0oLVla5vwMefKMtc0u9jpGYpmesJ%2Fwafyq9LkW%2BwjqewX%2BNmBrV%2BKxjhxuOINR8EB3G6mrf7CPmURhyZtXzMgH0v7OrBDTvhnGnNEiVKyMwE9cGmUzxBV7fextU0x%2BZeQfM9v9%2Ff%2Fw5lveYjXBwB4qLEyDwyIObD7aEHrlv8sJ1w8ibXjQQE0eFWZFQpu8zXAqLHggBdOm7FQF0Oio2bstGtsq1UDQ1pXYxnlLPWtmw2E8q37afVeyNY9fUS3FYH6IdfhYhW70K1sLYTlq0wNKju9ZfDazasXA6I7j%2B9KRG2Rvds7WDIFb%2FMdSVi3HUgGXnPdn3oSUUjccee0LsFR%2BN%2BQQ9mNErdZLEmqT%2BQqCq48zfBBcvNnP%2B8D%2BJgt6fMOmx574GOqUBLsISF1bjSn%2BTnep7JwDxs%2FaEv3qBmG4riZi5rk37bmxzSMcOuuSiqFajrl%2BEIrXIAQuiaJ4EyTecKXLLWqoCTlewLcne4B7f8cR4scdhOOh70U3ZF7a6TzYiER1oG0h9HAi5dh1mTJuDPMpEGRyXSrKUMz6J7I8htMN7RXpb78c2%2FywII71Gtzxi0JpvuP6WG8paYZ1cy9FlCA5i8oaYGs2kEEnn&X-Amz-Signature=9c350d6aa99e5500de4c72b38508b7c5e88d15e744d813a85c4b5418529d3cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7W5IJI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFS6qlIQdYvt7mJQsMrsWPuZRgtg56o7QPBrkXJDWAwsAiEAyslPtNaFY6VG30tZ17AeJFvrtfqFziGdQ7%2FQgW8vmDEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkwzZ9Ut1I1tYVrsircA%2BTKTjqFw4o9C3FDBIYMEWDzpulrdCu9So1jWaHCD1mdu8RVmNooo5yfJgq9ZuaE3YKmhsM3OYGkKfowQFaSXwFcUy198EeoeWrplXdlbDYXX9lmLP3KJo1LUG2a%2FLfbue%2F%2FPFw1gm5pvIaGD5vUpHvaP5OPfOPusRIK13dE0frqJOP5c797aMQhKp8UBVsuk6JKg1wzsizomNIu%2BAiKZ65MsytP2iGQShcMrp8PVPHbmNzyImB%2FrpEyGZmRH0oLVla5vwMefKMtc0u9jpGYpmesJ%2Fwafyq9LkW%2BwjqewX%2BNmBrV%2BKxjhxuOINR8EB3G6mrf7CPmURhyZtXzMgH0v7OrBDTvhnGnNEiVKyMwE9cGmUzxBV7fextU0x%2BZeQfM9v9%2Ff%2Fw5lveYjXBwB4qLEyDwyIObD7aEHrlv8sJ1w8ibXjQQE0eFWZFQpu8zXAqLHggBdOm7FQF0Oio2bstGtsq1UDQ1pXYxnlLPWtmw2E8q37afVeyNY9fUS3FYH6IdfhYhW70K1sLYTlq0wNKju9ZfDazasXA6I7j%2B9KRG2Rvds7WDIFb%2FMdSVi3HUgGXnPdn3oSUUjccee0LsFR%2BN%2BQQ9mNErdZLEmqT%2BQqCq48zfBBcvNnP%2B8D%2BJgt6fMOmx574GOqUBLsISF1bjSn%2BTnep7JwDxs%2FaEv3qBmG4riZi5rk37bmxzSMcOuuSiqFajrl%2BEIrXIAQuiaJ4EyTecKXLLWqoCTlewLcne4B7f8cR4scdhOOh70U3ZF7a6TzYiER1oG0h9HAi5dh1mTJuDPMpEGRyXSrKUMz6J7I8htMN7RXpb78c2%2FywII71Gtzxi0JpvuP6WG8paYZ1cy9FlCA5i8oaYGs2kEEnn&X-Amz-Signature=62af93fa35a984b7eef38a04cdcc1b743a2a716be0880a1864d9bc31e89480b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7W5IJI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFS6qlIQdYvt7mJQsMrsWPuZRgtg56o7QPBrkXJDWAwsAiEAyslPtNaFY6VG30tZ17AeJFvrtfqFziGdQ7%2FQgW8vmDEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkwzZ9Ut1I1tYVrsircA%2BTKTjqFw4o9C3FDBIYMEWDzpulrdCu9So1jWaHCD1mdu8RVmNooo5yfJgq9ZuaE3YKmhsM3OYGkKfowQFaSXwFcUy198EeoeWrplXdlbDYXX9lmLP3KJo1LUG2a%2FLfbue%2F%2FPFw1gm5pvIaGD5vUpHvaP5OPfOPusRIK13dE0frqJOP5c797aMQhKp8UBVsuk6JKg1wzsizomNIu%2BAiKZ65MsytP2iGQShcMrp8PVPHbmNzyImB%2FrpEyGZmRH0oLVla5vwMefKMtc0u9jpGYpmesJ%2Fwafyq9LkW%2BwjqewX%2BNmBrV%2BKxjhxuOINR8EB3G6mrf7CPmURhyZtXzMgH0v7OrBDTvhnGnNEiVKyMwE9cGmUzxBV7fextU0x%2BZeQfM9v9%2Ff%2Fw5lveYjXBwB4qLEyDwyIObD7aEHrlv8sJ1w8ibXjQQE0eFWZFQpu8zXAqLHggBdOm7FQF0Oio2bstGtsq1UDQ1pXYxnlLPWtmw2E8q37afVeyNY9fUS3FYH6IdfhYhW70K1sLYTlq0wNKju9ZfDazasXA6I7j%2B9KRG2Rvds7WDIFb%2FMdSVi3HUgGXnPdn3oSUUjccee0LsFR%2BN%2BQQ9mNErdZLEmqT%2BQqCq48zfBBcvNnP%2B8D%2BJgt6fMOmx574GOqUBLsISF1bjSn%2BTnep7JwDxs%2FaEv3qBmG4riZi5rk37bmxzSMcOuuSiqFajrl%2BEIrXIAQuiaJ4EyTecKXLLWqoCTlewLcne4B7f8cR4scdhOOh70U3ZF7a6TzYiER1oG0h9HAi5dh1mTJuDPMpEGRyXSrKUMz6J7I8htMN7RXpb78c2%2FywII71Gtzxi0JpvuP6WG8paYZ1cy9FlCA5i8oaYGs2kEEnn&X-Amz-Signature=b2c56473bf05f5f6a49469853cda6690ca0eb6d1a382673d6b8cb5093d2e04d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B7W5IJI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFS6qlIQdYvt7mJQsMrsWPuZRgtg56o7QPBrkXJDWAwsAiEAyslPtNaFY6VG30tZ17AeJFvrtfqFziGdQ7%2FQgW8vmDEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOkwzZ9Ut1I1tYVrsircA%2BTKTjqFw4o9C3FDBIYMEWDzpulrdCu9So1jWaHCD1mdu8RVmNooo5yfJgq9ZuaE3YKmhsM3OYGkKfowQFaSXwFcUy198EeoeWrplXdlbDYXX9lmLP3KJo1LUG2a%2FLfbue%2F%2FPFw1gm5pvIaGD5vUpHvaP5OPfOPusRIK13dE0frqJOP5c797aMQhKp8UBVsuk6JKg1wzsizomNIu%2BAiKZ65MsytP2iGQShcMrp8PVPHbmNzyImB%2FrpEyGZmRH0oLVla5vwMefKMtc0u9jpGYpmesJ%2Fwafyq9LkW%2BwjqewX%2BNmBrV%2BKxjhxuOINR8EB3G6mrf7CPmURhyZtXzMgH0v7OrBDTvhnGnNEiVKyMwE9cGmUzxBV7fextU0x%2BZeQfM9v9%2Ff%2Fw5lveYjXBwB4qLEyDwyIObD7aEHrlv8sJ1w8ibXjQQE0eFWZFQpu8zXAqLHggBdOm7FQF0Oio2bstGtsq1UDQ1pXYxnlLPWtmw2E8q37afVeyNY9fUS3FYH6IdfhYhW70K1sLYTlq0wNKju9ZfDazasXA6I7j%2B9KRG2Rvds7WDIFb%2FMdSVi3HUgGXnPdn3oSUUjccee0LsFR%2BN%2BQQ9mNErdZLEmqT%2BQqCq48zfBBcvNnP%2B8D%2BJgt6fMOmx574GOqUBLsISF1bjSn%2BTnep7JwDxs%2FaEv3qBmG4riZi5rk37bmxzSMcOuuSiqFajrl%2BEIrXIAQuiaJ4EyTecKXLLWqoCTlewLcne4B7f8cR4scdhOOh70U3ZF7a6TzYiER1oG0h9HAi5dh1mTJuDPMpEGRyXSrKUMz6J7I8htMN7RXpb78c2%2FywII71Gtzxi0JpvuP6WG8paYZ1cy9FlCA5i8oaYGs2kEEnn&X-Amz-Signature=6c32e9a7f610618088fc14a93f6d5962e08ca62dc84a81100c1f1192266f42b6&X-Amz-SignedHeaders=host&x-id=GetObject)
