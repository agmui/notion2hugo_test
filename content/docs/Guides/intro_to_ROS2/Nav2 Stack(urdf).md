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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKU7IV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCO3wNQaATW%2B0QGnHmrIRcbccbkd0bbZPW%2BrtFAmywvXQIhAIIaE1P87pWODbdgpmJAxjqWf%2FbBPkfLBgQOMRQ%2Bd2gGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFw%2Bxnl6w77XSb4HAq3APnB0ZzjhyONwJQwDIO5waBzfZbAMNtqOoYZxJwKx23B3UnzdTd%2FfJRlh3QmWIo1Q5MkYw7uqv5%2Flx0KCrs1p8zTgIHwdZegM%2B%2FsMTwNILG%2FrgidHj0SCKnf1ZKv9gCx2Bbd94VCo37gi5C9MvEGz33zT8wshiiZG3kZZMIJ%2BSp2bs%2FbLYAPXmqKP1%2FMoBZmV7U0PrHmxp%2BjKPFmiHta28s7jSCwhpjGM8bLXJg92IJFHEjLf61jZLwvorIMblsS%2B6tjjRQsYiHH8n2PRNtvAtFkNP6Ggfn2lOoU1lecqMND9QpkC3n0qKVqX8FKqPuWiRKWJH3CNnS2H8HAVIY%2BFSpDyHo4joLv6NOSWX6K7RtRFRLPl26PRuHI7YbsXmYMfEpoGR0Nq3JT5G8rna2K9ZJBQ8zKtV0VLu1QsKDQu7ivMIDd7Tj2T4M7xGy72wzoivH8qoxs7dx51pDWOmuwKj3rW%2Bnw%2FO7oyXomtM4sR1W8ywzUPfqpyFKp09B6FU6l%2F9I%2BfX98LWo0%2BMmnqLMfRqSZ8yTDjTggu%2Flw5CzpqXE0kaL9cKI3SU0%2Fvq4Gh9RKLDg2us%2BwG9r9aPo5SqDW%2B0SFx%2FpH%2F27fwVvyEGwKDiMr77J4%2BrHQ3YAsI30WjDk%2B7e%2FBjqkATJJErE0OzfMl9uYzfNtCxizFcuHItMB4UzWPjGq%2BclmpQfD%2FG0pHbn%2Bt690DhzdpkjOyFc%2FUYdTAi5NylIzIO4OzhkQBLTnKkhqQ4%2B7q9NluEERIHugMSFJD1adNjy%2BDo2U2cWJDqntSMqARX7w8QDn2guwAaNWRWIDVs%2BoZdjNngay3nZ66X7mOPKAiFlkLGOHkZjKQVo3FFpou4dzeaUyl8DG&X-Amz-Signature=4b9fa5c499dd12564428ff774bf316f69ef36af0b28aae22e357d600b101b7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKU7IV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCO3wNQaATW%2B0QGnHmrIRcbccbkd0bbZPW%2BrtFAmywvXQIhAIIaE1P87pWODbdgpmJAxjqWf%2FbBPkfLBgQOMRQ%2Bd2gGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFw%2Bxnl6w77XSb4HAq3APnB0ZzjhyONwJQwDIO5waBzfZbAMNtqOoYZxJwKx23B3UnzdTd%2FfJRlh3QmWIo1Q5MkYw7uqv5%2Flx0KCrs1p8zTgIHwdZegM%2B%2FsMTwNILG%2FrgidHj0SCKnf1ZKv9gCx2Bbd94VCo37gi5C9MvEGz33zT8wshiiZG3kZZMIJ%2BSp2bs%2FbLYAPXmqKP1%2FMoBZmV7U0PrHmxp%2BjKPFmiHta28s7jSCwhpjGM8bLXJg92IJFHEjLf61jZLwvorIMblsS%2B6tjjRQsYiHH8n2PRNtvAtFkNP6Ggfn2lOoU1lecqMND9QpkC3n0qKVqX8FKqPuWiRKWJH3CNnS2H8HAVIY%2BFSpDyHo4joLv6NOSWX6K7RtRFRLPl26PRuHI7YbsXmYMfEpoGR0Nq3JT5G8rna2K9ZJBQ8zKtV0VLu1QsKDQu7ivMIDd7Tj2T4M7xGy72wzoivH8qoxs7dx51pDWOmuwKj3rW%2Bnw%2FO7oyXomtM4sR1W8ywzUPfqpyFKp09B6FU6l%2F9I%2BfX98LWo0%2BMmnqLMfRqSZ8yTDjTggu%2Flw5CzpqXE0kaL9cKI3SU0%2Fvq4Gh9RKLDg2us%2BwG9r9aPo5SqDW%2B0SFx%2FpH%2F27fwVvyEGwKDiMr77J4%2BrHQ3YAsI30WjDk%2B7e%2FBjqkATJJErE0OzfMl9uYzfNtCxizFcuHItMB4UzWPjGq%2BclmpQfD%2FG0pHbn%2Bt690DhzdpkjOyFc%2FUYdTAi5NylIzIO4OzhkQBLTnKkhqQ4%2B7q9NluEERIHugMSFJD1adNjy%2BDo2U2cWJDqntSMqARX7w8QDn2guwAaNWRWIDVs%2BoZdjNngay3nZ66X7mOPKAiFlkLGOHkZjKQVo3FFpou4dzeaUyl8DG&X-Amz-Signature=6836db30cfb465e8c41dd2421dad315d06a280479e9b2df0ab56767e5c9535d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKU7IV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCO3wNQaATW%2B0QGnHmrIRcbccbkd0bbZPW%2BrtFAmywvXQIhAIIaE1P87pWODbdgpmJAxjqWf%2FbBPkfLBgQOMRQ%2Bd2gGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFw%2Bxnl6w77XSb4HAq3APnB0ZzjhyONwJQwDIO5waBzfZbAMNtqOoYZxJwKx23B3UnzdTd%2FfJRlh3QmWIo1Q5MkYw7uqv5%2Flx0KCrs1p8zTgIHwdZegM%2B%2FsMTwNILG%2FrgidHj0SCKnf1ZKv9gCx2Bbd94VCo37gi5C9MvEGz33zT8wshiiZG3kZZMIJ%2BSp2bs%2FbLYAPXmqKP1%2FMoBZmV7U0PrHmxp%2BjKPFmiHta28s7jSCwhpjGM8bLXJg92IJFHEjLf61jZLwvorIMblsS%2B6tjjRQsYiHH8n2PRNtvAtFkNP6Ggfn2lOoU1lecqMND9QpkC3n0qKVqX8FKqPuWiRKWJH3CNnS2H8HAVIY%2BFSpDyHo4joLv6NOSWX6K7RtRFRLPl26PRuHI7YbsXmYMfEpoGR0Nq3JT5G8rna2K9ZJBQ8zKtV0VLu1QsKDQu7ivMIDd7Tj2T4M7xGy72wzoivH8qoxs7dx51pDWOmuwKj3rW%2Bnw%2FO7oyXomtM4sR1W8ywzUPfqpyFKp09B6FU6l%2F9I%2BfX98LWo0%2BMmnqLMfRqSZ8yTDjTggu%2Flw5CzpqXE0kaL9cKI3SU0%2Fvq4Gh9RKLDg2us%2BwG9r9aPo5SqDW%2B0SFx%2FpH%2F27fwVvyEGwKDiMr77J4%2BrHQ3YAsI30WjDk%2B7e%2FBjqkATJJErE0OzfMl9uYzfNtCxizFcuHItMB4UzWPjGq%2BclmpQfD%2FG0pHbn%2Bt690DhzdpkjOyFc%2FUYdTAi5NylIzIO4OzhkQBLTnKkhqQ4%2B7q9NluEERIHugMSFJD1adNjy%2BDo2U2cWJDqntSMqARX7w8QDn2guwAaNWRWIDVs%2BoZdjNngay3nZ66X7mOPKAiFlkLGOHkZjKQVo3FFpou4dzeaUyl8DG&X-Amz-Signature=9a0365da7f6dccf5ac72512f11c422ea1eee6cd4231b94d9492f22725f130225&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKU7IV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCO3wNQaATW%2B0QGnHmrIRcbccbkd0bbZPW%2BrtFAmywvXQIhAIIaE1P87pWODbdgpmJAxjqWf%2FbBPkfLBgQOMRQ%2Bd2gGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFw%2Bxnl6w77XSb4HAq3APnB0ZzjhyONwJQwDIO5waBzfZbAMNtqOoYZxJwKx23B3UnzdTd%2FfJRlh3QmWIo1Q5MkYw7uqv5%2Flx0KCrs1p8zTgIHwdZegM%2B%2FsMTwNILG%2FrgidHj0SCKnf1ZKv9gCx2Bbd94VCo37gi5C9MvEGz33zT8wshiiZG3kZZMIJ%2BSp2bs%2FbLYAPXmqKP1%2FMoBZmV7U0PrHmxp%2BjKPFmiHta28s7jSCwhpjGM8bLXJg92IJFHEjLf61jZLwvorIMblsS%2B6tjjRQsYiHH8n2PRNtvAtFkNP6Ggfn2lOoU1lecqMND9QpkC3n0qKVqX8FKqPuWiRKWJH3CNnS2H8HAVIY%2BFSpDyHo4joLv6NOSWX6K7RtRFRLPl26PRuHI7YbsXmYMfEpoGR0Nq3JT5G8rna2K9ZJBQ8zKtV0VLu1QsKDQu7ivMIDd7Tj2T4M7xGy72wzoivH8qoxs7dx51pDWOmuwKj3rW%2Bnw%2FO7oyXomtM4sR1W8ywzUPfqpyFKp09B6FU6l%2F9I%2BfX98LWo0%2BMmnqLMfRqSZ8yTDjTggu%2Flw5CzpqXE0kaL9cKI3SU0%2Fvq4Gh9RKLDg2us%2BwG9r9aPo5SqDW%2B0SFx%2FpH%2F27fwVvyEGwKDiMr77J4%2BrHQ3YAsI30WjDk%2B7e%2FBjqkATJJErE0OzfMl9uYzfNtCxizFcuHItMB4UzWPjGq%2BclmpQfD%2FG0pHbn%2Bt690DhzdpkjOyFc%2FUYdTAi5NylIzIO4OzhkQBLTnKkhqQ4%2B7q9NluEERIHugMSFJD1adNjy%2BDo2U2cWJDqntSMqARX7w8QDn2guwAaNWRWIDVs%2BoZdjNngay3nZ66X7mOPKAiFlkLGOHkZjKQVo3FFpou4dzeaUyl8DG&X-Amz-Signature=ab1789bc59d14e6f12c380bccb9745b54bfb56e35c02967af9d2e8b91f6f70ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKU7IV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCO3wNQaATW%2B0QGnHmrIRcbccbkd0bbZPW%2BrtFAmywvXQIhAIIaE1P87pWODbdgpmJAxjqWf%2FbBPkfLBgQOMRQ%2Bd2gGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFw%2Bxnl6w77XSb4HAq3APnB0ZzjhyONwJQwDIO5waBzfZbAMNtqOoYZxJwKx23B3UnzdTd%2FfJRlh3QmWIo1Q5MkYw7uqv5%2Flx0KCrs1p8zTgIHwdZegM%2B%2FsMTwNILG%2FrgidHj0SCKnf1ZKv9gCx2Bbd94VCo37gi5C9MvEGz33zT8wshiiZG3kZZMIJ%2BSp2bs%2FbLYAPXmqKP1%2FMoBZmV7U0PrHmxp%2BjKPFmiHta28s7jSCwhpjGM8bLXJg92IJFHEjLf61jZLwvorIMblsS%2B6tjjRQsYiHH8n2PRNtvAtFkNP6Ggfn2lOoU1lecqMND9QpkC3n0qKVqX8FKqPuWiRKWJH3CNnS2H8HAVIY%2BFSpDyHo4joLv6NOSWX6K7RtRFRLPl26PRuHI7YbsXmYMfEpoGR0Nq3JT5G8rna2K9ZJBQ8zKtV0VLu1QsKDQu7ivMIDd7Tj2T4M7xGy72wzoivH8qoxs7dx51pDWOmuwKj3rW%2Bnw%2FO7oyXomtM4sR1W8ywzUPfqpyFKp09B6FU6l%2F9I%2BfX98LWo0%2BMmnqLMfRqSZ8yTDjTggu%2Flw5CzpqXE0kaL9cKI3SU0%2Fvq4Gh9RKLDg2us%2BwG9r9aPo5SqDW%2B0SFx%2FpH%2F27fwVvyEGwKDiMr77J4%2BrHQ3YAsI30WjDk%2B7e%2FBjqkATJJErE0OzfMl9uYzfNtCxizFcuHItMB4UzWPjGq%2BclmpQfD%2FG0pHbn%2Bt690DhzdpkjOyFc%2FUYdTAi5NylIzIO4OzhkQBLTnKkhqQ4%2B7q9NluEERIHugMSFJD1adNjy%2BDo2U2cWJDqntSMqARX7w8QDn2guwAaNWRWIDVs%2BoZdjNngay3nZ66X7mOPKAiFlkLGOHkZjKQVo3FFpou4dzeaUyl8DG&X-Amz-Signature=be3d01b3a160c8fab05350ded77d94f6e0a4df2fb2df512ea0f088d50c530ad0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKU7IV2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCO3wNQaATW%2B0QGnHmrIRcbccbkd0bbZPW%2BrtFAmywvXQIhAIIaE1P87pWODbdgpmJAxjqWf%2FbBPkfLBgQOMRQ%2Bd2gGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFw%2Bxnl6w77XSb4HAq3APnB0ZzjhyONwJQwDIO5waBzfZbAMNtqOoYZxJwKx23B3UnzdTd%2FfJRlh3QmWIo1Q5MkYw7uqv5%2Flx0KCrs1p8zTgIHwdZegM%2B%2FsMTwNILG%2FrgidHj0SCKnf1ZKv9gCx2Bbd94VCo37gi5C9MvEGz33zT8wshiiZG3kZZMIJ%2BSp2bs%2FbLYAPXmqKP1%2FMoBZmV7U0PrHmxp%2BjKPFmiHta28s7jSCwhpjGM8bLXJg92IJFHEjLf61jZLwvorIMblsS%2B6tjjRQsYiHH8n2PRNtvAtFkNP6Ggfn2lOoU1lecqMND9QpkC3n0qKVqX8FKqPuWiRKWJH3CNnS2H8HAVIY%2BFSpDyHo4joLv6NOSWX6K7RtRFRLPl26PRuHI7YbsXmYMfEpoGR0Nq3JT5G8rna2K9ZJBQ8zKtV0VLu1QsKDQu7ivMIDd7Tj2T4M7xGy72wzoivH8qoxs7dx51pDWOmuwKj3rW%2Bnw%2FO7oyXomtM4sR1W8ywzUPfqpyFKp09B6FU6l%2F9I%2BfX98LWo0%2BMmnqLMfRqSZ8yTDjTggu%2Flw5CzpqXE0kaL9cKI3SU0%2Fvq4Gh9RKLDg2us%2BwG9r9aPo5SqDW%2B0SFx%2FpH%2F27fwVvyEGwKDiMr77J4%2BrHQ3YAsI30WjDk%2B7e%2FBjqkATJJErE0OzfMl9uYzfNtCxizFcuHItMB4UzWPjGq%2BclmpQfD%2FG0pHbn%2Bt690DhzdpkjOyFc%2FUYdTAi5NylIzIO4OzhkQBLTnKkhqQ4%2B7q9NluEERIHugMSFJD1adNjy%2BDo2U2cWJDqntSMqARX7w8QDn2guwAaNWRWIDVs%2BoZdjNngay3nZ66X7mOPKAiFlkLGOHkZjKQVo3FFpou4dzeaUyl8DG&X-Amz-Signature=d7338889fa36b2191ed41179d47ff870ae66aa5318e574fa728f5120a867ba5a&X-Amz-SignedHeaders=host&x-id=GetObject)
