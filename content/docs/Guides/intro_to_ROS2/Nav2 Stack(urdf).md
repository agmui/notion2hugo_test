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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ67R7Z4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICIIlUhaLR1Momj5BcRCnp8rqj2j22AqKmqN18ovsd5jAiEAqV9AXTFi7%2FvrJCSYTRr8JKo%2F0wpLvJIfL9h43kdSN%2Bwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPNHfW4EKdFl3slNbCrcA1GPz8GGEsjOKNU%2FJ8EkRQfMB1JvVRTe%2BS2jiG%2BofjstzqyTg%2FXc47cCoRG5YmeaJF3gVq5xO6OwP2WzvtW8co8W0%2FOWeEu2HdeRyI%2FqzAcsI%2FP4OYZfXEi8dfhS4OX0%2BqA9ZQEcJwY%2BhdUuR5Cc25xoj9iCy5VlwHg%2Bu1isl8BPjapmx0ZPVkhQWSQ28SSGJWST0knEtDJ%2FUBId1wZaRBtZBxn91WHyEUhuwuz9TZRoBQAPcRL2OmO9OWV0t6JE1CrczIz6qQIvmntiXpOvRk%2FyhKqgvjt1FPQQzztkacVYBNUB2g83Y%2FAteYwmY3VKy1maiBb3ydOF1t%2FBjw0s6gLqn%2FA4sgylNfO92qHitgLA%2BhgGAO50%2B%2FEKpHs797rlmdfucwzot8onTKGkfB8e6PbO68Rq1RLnL1RMhsHrJ5ut5dRnnEprymn%2FKdpzJZWOT4mg2VHZ%2F9kv4I%2FHHrFchAplEjxweWGPu9Mdpl8ONEIlivSC63k%2BC933D8pjX0m5DlpGIe2zeJFRWCrhRJfkot%2FUj%2FCPEnYjDiHu2%2BkZjHvntyuSuovAHP7V5hIPlxhZFkN0iFX4wVAFR6RQmwaleTzhhPWjJBvJqU0C994%2FysSnOjbzxX5sKOFCFU57MNq05b4GOqUB6x8v7aWytPyn2BahC0mt4j1iaw2lxN3OHpTLWUiz295NGAUjYj79p1P8QCJ6PIhnyIJWShE%2Fm25qHE3wOCiyWZYrpguOVrjH1RREX7ew0Dv5h8I34djf8iSmKVlc9mco4MdQurYtollkjVO7EWGvwv7LPJc5KQjFJmWbMrXF4FCQkekasb3gVzjb94SFUy1vMgaWIy6R5LyxBPSLXt0UAEuDKo%2BE&X-Amz-Signature=efaef01d784cc61e014a53628cfb6030226c262cbb351bd48c664161ccd51579&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ67R7Z4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICIIlUhaLR1Momj5BcRCnp8rqj2j22AqKmqN18ovsd5jAiEAqV9AXTFi7%2FvrJCSYTRr8JKo%2F0wpLvJIfL9h43kdSN%2Bwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPNHfW4EKdFl3slNbCrcA1GPz8GGEsjOKNU%2FJ8EkRQfMB1JvVRTe%2BS2jiG%2BofjstzqyTg%2FXc47cCoRG5YmeaJF3gVq5xO6OwP2WzvtW8co8W0%2FOWeEu2HdeRyI%2FqzAcsI%2FP4OYZfXEi8dfhS4OX0%2BqA9ZQEcJwY%2BhdUuR5Cc25xoj9iCy5VlwHg%2Bu1isl8BPjapmx0ZPVkhQWSQ28SSGJWST0knEtDJ%2FUBId1wZaRBtZBxn91WHyEUhuwuz9TZRoBQAPcRL2OmO9OWV0t6JE1CrczIz6qQIvmntiXpOvRk%2FyhKqgvjt1FPQQzztkacVYBNUB2g83Y%2FAteYwmY3VKy1maiBb3ydOF1t%2FBjw0s6gLqn%2FA4sgylNfO92qHitgLA%2BhgGAO50%2B%2FEKpHs797rlmdfucwzot8onTKGkfB8e6PbO68Rq1RLnL1RMhsHrJ5ut5dRnnEprymn%2FKdpzJZWOT4mg2VHZ%2F9kv4I%2FHHrFchAplEjxweWGPu9Mdpl8ONEIlivSC63k%2BC933D8pjX0m5DlpGIe2zeJFRWCrhRJfkot%2FUj%2FCPEnYjDiHu2%2BkZjHvntyuSuovAHP7V5hIPlxhZFkN0iFX4wVAFR6RQmwaleTzhhPWjJBvJqU0C994%2FysSnOjbzxX5sKOFCFU57MNq05b4GOqUB6x8v7aWytPyn2BahC0mt4j1iaw2lxN3OHpTLWUiz295NGAUjYj79p1P8QCJ6PIhnyIJWShE%2Fm25qHE3wOCiyWZYrpguOVrjH1RREX7ew0Dv5h8I34djf8iSmKVlc9mco4MdQurYtollkjVO7EWGvwv7LPJc5KQjFJmWbMrXF4FCQkekasb3gVzjb94SFUy1vMgaWIy6R5LyxBPSLXt0UAEuDKo%2BE&X-Amz-Signature=f55f57ab9c20a8c07bf568294fef604763fedc683f6f4e9ceffc7131bce9788e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ67R7Z4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICIIlUhaLR1Momj5BcRCnp8rqj2j22AqKmqN18ovsd5jAiEAqV9AXTFi7%2FvrJCSYTRr8JKo%2F0wpLvJIfL9h43kdSN%2Bwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPNHfW4EKdFl3slNbCrcA1GPz8GGEsjOKNU%2FJ8EkRQfMB1JvVRTe%2BS2jiG%2BofjstzqyTg%2FXc47cCoRG5YmeaJF3gVq5xO6OwP2WzvtW8co8W0%2FOWeEu2HdeRyI%2FqzAcsI%2FP4OYZfXEi8dfhS4OX0%2BqA9ZQEcJwY%2BhdUuR5Cc25xoj9iCy5VlwHg%2Bu1isl8BPjapmx0ZPVkhQWSQ28SSGJWST0knEtDJ%2FUBId1wZaRBtZBxn91WHyEUhuwuz9TZRoBQAPcRL2OmO9OWV0t6JE1CrczIz6qQIvmntiXpOvRk%2FyhKqgvjt1FPQQzztkacVYBNUB2g83Y%2FAteYwmY3VKy1maiBb3ydOF1t%2FBjw0s6gLqn%2FA4sgylNfO92qHitgLA%2BhgGAO50%2B%2FEKpHs797rlmdfucwzot8onTKGkfB8e6PbO68Rq1RLnL1RMhsHrJ5ut5dRnnEprymn%2FKdpzJZWOT4mg2VHZ%2F9kv4I%2FHHrFchAplEjxweWGPu9Mdpl8ONEIlivSC63k%2BC933D8pjX0m5DlpGIe2zeJFRWCrhRJfkot%2FUj%2FCPEnYjDiHu2%2BkZjHvntyuSuovAHP7V5hIPlxhZFkN0iFX4wVAFR6RQmwaleTzhhPWjJBvJqU0C994%2FysSnOjbzxX5sKOFCFU57MNq05b4GOqUB6x8v7aWytPyn2BahC0mt4j1iaw2lxN3OHpTLWUiz295NGAUjYj79p1P8QCJ6PIhnyIJWShE%2Fm25qHE3wOCiyWZYrpguOVrjH1RREX7ew0Dv5h8I34djf8iSmKVlc9mco4MdQurYtollkjVO7EWGvwv7LPJc5KQjFJmWbMrXF4FCQkekasb3gVzjb94SFUy1vMgaWIy6R5LyxBPSLXt0UAEuDKo%2BE&X-Amz-Signature=cc3463476d12ed0b4887bb280e6c581e40930bd2bb348e2309cb4a99aef4b093&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ67R7Z4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICIIlUhaLR1Momj5BcRCnp8rqj2j22AqKmqN18ovsd5jAiEAqV9AXTFi7%2FvrJCSYTRr8JKo%2F0wpLvJIfL9h43kdSN%2Bwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPNHfW4EKdFl3slNbCrcA1GPz8GGEsjOKNU%2FJ8EkRQfMB1JvVRTe%2BS2jiG%2BofjstzqyTg%2FXc47cCoRG5YmeaJF3gVq5xO6OwP2WzvtW8co8W0%2FOWeEu2HdeRyI%2FqzAcsI%2FP4OYZfXEi8dfhS4OX0%2BqA9ZQEcJwY%2BhdUuR5Cc25xoj9iCy5VlwHg%2Bu1isl8BPjapmx0ZPVkhQWSQ28SSGJWST0knEtDJ%2FUBId1wZaRBtZBxn91WHyEUhuwuz9TZRoBQAPcRL2OmO9OWV0t6JE1CrczIz6qQIvmntiXpOvRk%2FyhKqgvjt1FPQQzztkacVYBNUB2g83Y%2FAteYwmY3VKy1maiBb3ydOF1t%2FBjw0s6gLqn%2FA4sgylNfO92qHitgLA%2BhgGAO50%2B%2FEKpHs797rlmdfucwzot8onTKGkfB8e6PbO68Rq1RLnL1RMhsHrJ5ut5dRnnEprymn%2FKdpzJZWOT4mg2VHZ%2F9kv4I%2FHHrFchAplEjxweWGPu9Mdpl8ONEIlivSC63k%2BC933D8pjX0m5DlpGIe2zeJFRWCrhRJfkot%2FUj%2FCPEnYjDiHu2%2BkZjHvntyuSuovAHP7V5hIPlxhZFkN0iFX4wVAFR6RQmwaleTzhhPWjJBvJqU0C994%2FysSnOjbzxX5sKOFCFU57MNq05b4GOqUB6x8v7aWytPyn2BahC0mt4j1iaw2lxN3OHpTLWUiz295NGAUjYj79p1P8QCJ6PIhnyIJWShE%2Fm25qHE3wOCiyWZYrpguOVrjH1RREX7ew0Dv5h8I34djf8iSmKVlc9mco4MdQurYtollkjVO7EWGvwv7LPJc5KQjFJmWbMrXF4FCQkekasb3gVzjb94SFUy1vMgaWIy6R5LyxBPSLXt0UAEuDKo%2BE&X-Amz-Signature=a7d73f07c10c48d362487399046bd6a4c998adf968f301656598b1b0bdec3ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ67R7Z4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICIIlUhaLR1Momj5BcRCnp8rqj2j22AqKmqN18ovsd5jAiEAqV9AXTFi7%2FvrJCSYTRr8JKo%2F0wpLvJIfL9h43kdSN%2Bwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPNHfW4EKdFl3slNbCrcA1GPz8GGEsjOKNU%2FJ8EkRQfMB1JvVRTe%2BS2jiG%2BofjstzqyTg%2FXc47cCoRG5YmeaJF3gVq5xO6OwP2WzvtW8co8W0%2FOWeEu2HdeRyI%2FqzAcsI%2FP4OYZfXEi8dfhS4OX0%2BqA9ZQEcJwY%2BhdUuR5Cc25xoj9iCy5VlwHg%2Bu1isl8BPjapmx0ZPVkhQWSQ28SSGJWST0knEtDJ%2FUBId1wZaRBtZBxn91WHyEUhuwuz9TZRoBQAPcRL2OmO9OWV0t6JE1CrczIz6qQIvmntiXpOvRk%2FyhKqgvjt1FPQQzztkacVYBNUB2g83Y%2FAteYwmY3VKy1maiBb3ydOF1t%2FBjw0s6gLqn%2FA4sgylNfO92qHitgLA%2BhgGAO50%2B%2FEKpHs797rlmdfucwzot8onTKGkfB8e6PbO68Rq1RLnL1RMhsHrJ5ut5dRnnEprymn%2FKdpzJZWOT4mg2VHZ%2F9kv4I%2FHHrFchAplEjxweWGPu9Mdpl8ONEIlivSC63k%2BC933D8pjX0m5DlpGIe2zeJFRWCrhRJfkot%2FUj%2FCPEnYjDiHu2%2BkZjHvntyuSuovAHP7V5hIPlxhZFkN0iFX4wVAFR6RQmwaleTzhhPWjJBvJqU0C994%2FysSnOjbzxX5sKOFCFU57MNq05b4GOqUB6x8v7aWytPyn2BahC0mt4j1iaw2lxN3OHpTLWUiz295NGAUjYj79p1P8QCJ6PIhnyIJWShE%2Fm25qHE3wOCiyWZYrpguOVrjH1RREX7ew0Dv5h8I34djf8iSmKVlc9mco4MdQurYtollkjVO7EWGvwv7LPJc5KQjFJmWbMrXF4FCQkekasb3gVzjb94SFUy1vMgaWIy6R5LyxBPSLXt0UAEuDKo%2BE&X-Amz-Signature=6eed97f26d3a02cedaa8120e03d2c4664ec0767ee6b3bf249c5372f32ce59d8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ67R7Z4%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCICIIlUhaLR1Momj5BcRCnp8rqj2j22AqKmqN18ovsd5jAiEAqV9AXTFi7%2FvrJCSYTRr8JKo%2F0wpLvJIfL9h43kdSN%2Bwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPNHfW4EKdFl3slNbCrcA1GPz8GGEsjOKNU%2FJ8EkRQfMB1JvVRTe%2BS2jiG%2BofjstzqyTg%2FXc47cCoRG5YmeaJF3gVq5xO6OwP2WzvtW8co8W0%2FOWeEu2HdeRyI%2FqzAcsI%2FP4OYZfXEi8dfhS4OX0%2BqA9ZQEcJwY%2BhdUuR5Cc25xoj9iCy5VlwHg%2Bu1isl8BPjapmx0ZPVkhQWSQ28SSGJWST0knEtDJ%2FUBId1wZaRBtZBxn91WHyEUhuwuz9TZRoBQAPcRL2OmO9OWV0t6JE1CrczIz6qQIvmntiXpOvRk%2FyhKqgvjt1FPQQzztkacVYBNUB2g83Y%2FAteYwmY3VKy1maiBb3ydOF1t%2FBjw0s6gLqn%2FA4sgylNfO92qHitgLA%2BhgGAO50%2B%2FEKpHs797rlmdfucwzot8onTKGkfB8e6PbO68Rq1RLnL1RMhsHrJ5ut5dRnnEprymn%2FKdpzJZWOT4mg2VHZ%2F9kv4I%2FHHrFchAplEjxweWGPu9Mdpl8ONEIlivSC63k%2BC933D8pjX0m5DlpGIe2zeJFRWCrhRJfkot%2FUj%2FCPEnYjDiHu2%2BkZjHvntyuSuovAHP7V5hIPlxhZFkN0iFX4wVAFR6RQmwaleTzhhPWjJBvJqU0C994%2FysSnOjbzxX5sKOFCFU57MNq05b4GOqUB6x8v7aWytPyn2BahC0mt4j1iaw2lxN3OHpTLWUiz295NGAUjYj79p1P8QCJ6PIhnyIJWShE%2Fm25qHE3wOCiyWZYrpguOVrjH1RREX7ew0Dv5h8I34djf8iSmKVlc9mco4MdQurYtollkjVO7EWGvwv7LPJc5KQjFJmWbMrXF4FCQkekasb3gVzjb94SFUy1vMgaWIy6R5LyxBPSLXt0UAEuDKo%2BE&X-Amz-Signature=1311a27f9fccc19439a16f1750d791d73ceecbf2d1411703f235fd27e96350ff&X-Amz-SignedHeaders=host&x-id=GetObject)
