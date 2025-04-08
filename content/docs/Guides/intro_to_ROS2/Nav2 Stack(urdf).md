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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDI5C7O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBGQGHCxiVffCZ%2F%2FXjrGHIgfPglOE029kysJgUrI2NRYAiEAgG8xpUYMrK8OQbaiylP192ueJsJGI1UOl0rItP3pQuAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNDrBFeMJx9pa0fF9ircA5FhFbltFDhumePs%2BwXcLBcMBObq%2F2%2BpCu%2FXmsy1DdxDeOWBDc1EcbHrATb1G%2FQC3FUCuJ5TxELXGfhKMYji5c8SBFZICGTfDsGR%2FPr2wbbDaFrdiM5g7oYqT7iHbg42hpabeDOFBjQG2G8bzwH0Xg%2BOY1YG4SFkUCRo%2BerDyLlFlJgDQS%2F3zas8bOFkgnVn82nEIMApHyQzUpesbfLRrqJ4a2uqOhr0osuLuRjMFXKLw6KppMVd7fg7XlxUd54VOEmOvkGANH3N2rpfriNPrj8JeAYmaBz8tD6dsLb%2BQUearsyiNqW6QeawhTqLwGIkP%2BQoEDq0NG9zw7%2BGSicBxW14y1AiuLKstW6GjdN%2FIPPEvnwdz8cJHo8jgwatWHfFhbEmihgJcCCLmHTKUMcEQhcIYGzp96mlDcRKdi5EEwJRlhBbKKQDsgaqAZ1lDyYeLuDClKejityOkfFxYRh5gFHThbMWwDEqEtpKDjUbPTe9eC5Hn%2FZYWktTpXFP1ydlkoZB%2BxJo4h4Y5RycuX0McaobdcPblZnqfygNmZWcwo7GeB%2Bt5kSaqbr9d%2BE5SKYKCfCD7SPwi5nIm%2FYn%2Bm%2Bp%2FJhwnAqlAbZi2b%2FNWK5wLUuDTItv6dVDlO%2BV8tK3MKWi1b8GOqUB0YUzZS%2BEHgASkN9oiUmmRjS7grp6L0g4McXazU10me5%2FPx4FNwfVQQyXydNIwG5pR0QCP4VKleICISKqRmCnDT3mjudCm9vpGETUvQo%2FSwsqV7PJAVQsDJODTBmldttYhBkiWIG4kaWvRg0d%2FCwZILwJvoYkYGhhrqnSrLDKz54l9KBDQri%2BX6eZtmCg8C7RCOQrx05XQhtPgx5wAWEAWr9NO4GZ&X-Amz-Signature=12ad04fb00069af1c5aafc20b51eb08d6cc057283f0d0472a40f09f3cd0cffba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDI5C7O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBGQGHCxiVffCZ%2F%2FXjrGHIgfPglOE029kysJgUrI2NRYAiEAgG8xpUYMrK8OQbaiylP192ueJsJGI1UOl0rItP3pQuAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNDrBFeMJx9pa0fF9ircA5FhFbltFDhumePs%2BwXcLBcMBObq%2F2%2BpCu%2FXmsy1DdxDeOWBDc1EcbHrATb1G%2FQC3FUCuJ5TxELXGfhKMYji5c8SBFZICGTfDsGR%2FPr2wbbDaFrdiM5g7oYqT7iHbg42hpabeDOFBjQG2G8bzwH0Xg%2BOY1YG4SFkUCRo%2BerDyLlFlJgDQS%2F3zas8bOFkgnVn82nEIMApHyQzUpesbfLRrqJ4a2uqOhr0osuLuRjMFXKLw6KppMVd7fg7XlxUd54VOEmOvkGANH3N2rpfriNPrj8JeAYmaBz8tD6dsLb%2BQUearsyiNqW6QeawhTqLwGIkP%2BQoEDq0NG9zw7%2BGSicBxW14y1AiuLKstW6GjdN%2FIPPEvnwdz8cJHo8jgwatWHfFhbEmihgJcCCLmHTKUMcEQhcIYGzp96mlDcRKdi5EEwJRlhBbKKQDsgaqAZ1lDyYeLuDClKejityOkfFxYRh5gFHThbMWwDEqEtpKDjUbPTe9eC5Hn%2FZYWktTpXFP1ydlkoZB%2BxJo4h4Y5RycuX0McaobdcPblZnqfygNmZWcwo7GeB%2Bt5kSaqbr9d%2BE5SKYKCfCD7SPwi5nIm%2FYn%2Bm%2Bp%2FJhwnAqlAbZi2b%2FNWK5wLUuDTItv6dVDlO%2BV8tK3MKWi1b8GOqUB0YUzZS%2BEHgASkN9oiUmmRjS7grp6L0g4McXazU10me5%2FPx4FNwfVQQyXydNIwG5pR0QCP4VKleICISKqRmCnDT3mjudCm9vpGETUvQo%2FSwsqV7PJAVQsDJODTBmldttYhBkiWIG4kaWvRg0d%2FCwZILwJvoYkYGhhrqnSrLDKz54l9KBDQri%2BX6eZtmCg8C7RCOQrx05XQhtPgx5wAWEAWr9NO4GZ&X-Amz-Signature=f737b730b318cb845433a8f8d1c8f99be53350fb0215644c19d4548472f57fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDI5C7O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBGQGHCxiVffCZ%2F%2FXjrGHIgfPglOE029kysJgUrI2NRYAiEAgG8xpUYMrK8OQbaiylP192ueJsJGI1UOl0rItP3pQuAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNDrBFeMJx9pa0fF9ircA5FhFbltFDhumePs%2BwXcLBcMBObq%2F2%2BpCu%2FXmsy1DdxDeOWBDc1EcbHrATb1G%2FQC3FUCuJ5TxELXGfhKMYji5c8SBFZICGTfDsGR%2FPr2wbbDaFrdiM5g7oYqT7iHbg42hpabeDOFBjQG2G8bzwH0Xg%2BOY1YG4SFkUCRo%2BerDyLlFlJgDQS%2F3zas8bOFkgnVn82nEIMApHyQzUpesbfLRrqJ4a2uqOhr0osuLuRjMFXKLw6KppMVd7fg7XlxUd54VOEmOvkGANH3N2rpfriNPrj8JeAYmaBz8tD6dsLb%2BQUearsyiNqW6QeawhTqLwGIkP%2BQoEDq0NG9zw7%2BGSicBxW14y1AiuLKstW6GjdN%2FIPPEvnwdz8cJHo8jgwatWHfFhbEmihgJcCCLmHTKUMcEQhcIYGzp96mlDcRKdi5EEwJRlhBbKKQDsgaqAZ1lDyYeLuDClKejityOkfFxYRh5gFHThbMWwDEqEtpKDjUbPTe9eC5Hn%2FZYWktTpXFP1ydlkoZB%2BxJo4h4Y5RycuX0McaobdcPblZnqfygNmZWcwo7GeB%2Bt5kSaqbr9d%2BE5SKYKCfCD7SPwi5nIm%2FYn%2Bm%2Bp%2FJhwnAqlAbZi2b%2FNWK5wLUuDTItv6dVDlO%2BV8tK3MKWi1b8GOqUB0YUzZS%2BEHgASkN9oiUmmRjS7grp6L0g4McXazU10me5%2FPx4FNwfVQQyXydNIwG5pR0QCP4VKleICISKqRmCnDT3mjudCm9vpGETUvQo%2FSwsqV7PJAVQsDJODTBmldttYhBkiWIG4kaWvRg0d%2FCwZILwJvoYkYGhhrqnSrLDKz54l9KBDQri%2BX6eZtmCg8C7RCOQrx05XQhtPgx5wAWEAWr9NO4GZ&X-Amz-Signature=8522bc3cb5eb085d63b3c2c571d59cf83a3a78ff01129db4b68fd690072a46a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDI5C7O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBGQGHCxiVffCZ%2F%2FXjrGHIgfPglOE029kysJgUrI2NRYAiEAgG8xpUYMrK8OQbaiylP192ueJsJGI1UOl0rItP3pQuAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNDrBFeMJx9pa0fF9ircA5FhFbltFDhumePs%2BwXcLBcMBObq%2F2%2BpCu%2FXmsy1DdxDeOWBDc1EcbHrATb1G%2FQC3FUCuJ5TxELXGfhKMYji5c8SBFZICGTfDsGR%2FPr2wbbDaFrdiM5g7oYqT7iHbg42hpabeDOFBjQG2G8bzwH0Xg%2BOY1YG4SFkUCRo%2BerDyLlFlJgDQS%2F3zas8bOFkgnVn82nEIMApHyQzUpesbfLRrqJ4a2uqOhr0osuLuRjMFXKLw6KppMVd7fg7XlxUd54VOEmOvkGANH3N2rpfriNPrj8JeAYmaBz8tD6dsLb%2BQUearsyiNqW6QeawhTqLwGIkP%2BQoEDq0NG9zw7%2BGSicBxW14y1AiuLKstW6GjdN%2FIPPEvnwdz8cJHo8jgwatWHfFhbEmihgJcCCLmHTKUMcEQhcIYGzp96mlDcRKdi5EEwJRlhBbKKQDsgaqAZ1lDyYeLuDClKejityOkfFxYRh5gFHThbMWwDEqEtpKDjUbPTe9eC5Hn%2FZYWktTpXFP1ydlkoZB%2BxJo4h4Y5RycuX0McaobdcPblZnqfygNmZWcwo7GeB%2Bt5kSaqbr9d%2BE5SKYKCfCD7SPwi5nIm%2FYn%2Bm%2Bp%2FJhwnAqlAbZi2b%2FNWK5wLUuDTItv6dVDlO%2BV8tK3MKWi1b8GOqUB0YUzZS%2BEHgASkN9oiUmmRjS7grp6L0g4McXazU10me5%2FPx4FNwfVQQyXydNIwG5pR0QCP4VKleICISKqRmCnDT3mjudCm9vpGETUvQo%2FSwsqV7PJAVQsDJODTBmldttYhBkiWIG4kaWvRg0d%2FCwZILwJvoYkYGhhrqnSrLDKz54l9KBDQri%2BX6eZtmCg8C7RCOQrx05XQhtPgx5wAWEAWr9NO4GZ&X-Amz-Signature=d30787cde3bd8570768442e94883829a3f085bdd4598b59a6e960f8dc89214b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDI5C7O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBGQGHCxiVffCZ%2F%2FXjrGHIgfPglOE029kysJgUrI2NRYAiEAgG8xpUYMrK8OQbaiylP192ueJsJGI1UOl0rItP3pQuAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNDrBFeMJx9pa0fF9ircA5FhFbltFDhumePs%2BwXcLBcMBObq%2F2%2BpCu%2FXmsy1DdxDeOWBDc1EcbHrATb1G%2FQC3FUCuJ5TxELXGfhKMYji5c8SBFZICGTfDsGR%2FPr2wbbDaFrdiM5g7oYqT7iHbg42hpabeDOFBjQG2G8bzwH0Xg%2BOY1YG4SFkUCRo%2BerDyLlFlJgDQS%2F3zas8bOFkgnVn82nEIMApHyQzUpesbfLRrqJ4a2uqOhr0osuLuRjMFXKLw6KppMVd7fg7XlxUd54VOEmOvkGANH3N2rpfriNPrj8JeAYmaBz8tD6dsLb%2BQUearsyiNqW6QeawhTqLwGIkP%2BQoEDq0NG9zw7%2BGSicBxW14y1AiuLKstW6GjdN%2FIPPEvnwdz8cJHo8jgwatWHfFhbEmihgJcCCLmHTKUMcEQhcIYGzp96mlDcRKdi5EEwJRlhBbKKQDsgaqAZ1lDyYeLuDClKejityOkfFxYRh5gFHThbMWwDEqEtpKDjUbPTe9eC5Hn%2FZYWktTpXFP1ydlkoZB%2BxJo4h4Y5RycuX0McaobdcPblZnqfygNmZWcwo7GeB%2Bt5kSaqbr9d%2BE5SKYKCfCD7SPwi5nIm%2FYn%2Bm%2Bp%2FJhwnAqlAbZi2b%2FNWK5wLUuDTItv6dVDlO%2BV8tK3MKWi1b8GOqUB0YUzZS%2BEHgASkN9oiUmmRjS7grp6L0g4McXazU10me5%2FPx4FNwfVQQyXydNIwG5pR0QCP4VKleICISKqRmCnDT3mjudCm9vpGETUvQo%2FSwsqV7PJAVQsDJODTBmldttYhBkiWIG4kaWvRg0d%2FCwZILwJvoYkYGhhrqnSrLDKz54l9KBDQri%2BX6eZtmCg8C7RCOQrx05XQhtPgx5wAWEAWr9NO4GZ&X-Amz-Signature=4dfde5c150ce6d4a1d771865f59693c75526824435f30603d03d02f2857c1142&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DDI5C7O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBGQGHCxiVffCZ%2F%2FXjrGHIgfPglOE029kysJgUrI2NRYAiEAgG8xpUYMrK8OQbaiylP192ueJsJGI1UOl0rItP3pQuAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNDrBFeMJx9pa0fF9ircA5FhFbltFDhumePs%2BwXcLBcMBObq%2F2%2BpCu%2FXmsy1DdxDeOWBDc1EcbHrATb1G%2FQC3FUCuJ5TxELXGfhKMYji5c8SBFZICGTfDsGR%2FPr2wbbDaFrdiM5g7oYqT7iHbg42hpabeDOFBjQG2G8bzwH0Xg%2BOY1YG4SFkUCRo%2BerDyLlFlJgDQS%2F3zas8bOFkgnVn82nEIMApHyQzUpesbfLRrqJ4a2uqOhr0osuLuRjMFXKLw6KppMVd7fg7XlxUd54VOEmOvkGANH3N2rpfriNPrj8JeAYmaBz8tD6dsLb%2BQUearsyiNqW6QeawhTqLwGIkP%2BQoEDq0NG9zw7%2BGSicBxW14y1AiuLKstW6GjdN%2FIPPEvnwdz8cJHo8jgwatWHfFhbEmihgJcCCLmHTKUMcEQhcIYGzp96mlDcRKdi5EEwJRlhBbKKQDsgaqAZ1lDyYeLuDClKejityOkfFxYRh5gFHThbMWwDEqEtpKDjUbPTe9eC5Hn%2FZYWktTpXFP1ydlkoZB%2BxJo4h4Y5RycuX0McaobdcPblZnqfygNmZWcwo7GeB%2Bt5kSaqbr9d%2BE5SKYKCfCD7SPwi5nIm%2FYn%2Bm%2Bp%2FJhwnAqlAbZi2b%2FNWK5wLUuDTItv6dVDlO%2BV8tK3MKWi1b8GOqUB0YUzZS%2BEHgASkN9oiUmmRjS7grp6L0g4McXazU10me5%2FPx4FNwfVQQyXydNIwG5pR0QCP4VKleICISKqRmCnDT3mjudCm9vpGETUvQo%2FSwsqV7PJAVQsDJODTBmldttYhBkiWIG4kaWvRg0d%2FCwZILwJvoYkYGhhrqnSrLDKz54l9KBDQri%2BX6eZtmCg8C7RCOQrx05XQhtPgx5wAWEAWr9NO4GZ&X-Amz-Signature=309bf4fd88225a46ab28633a9ee12bb30d1f15f8e7e32e480c59cc62864ca77c&X-Amz-SignedHeaders=host&x-id=GetObject)
