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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHNSIJU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDL4q8HNcuwzUJgktdR7ioCJOoq6sF04cAMdh%2FJgYa7dQIhAMdZYBha6Af4mYsBpwfza29dgdNr%2BwBoaHn93v0CkMsNKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPp8PrlfFO%2FLhHDNsq3AMADOuBAa1Avb8naMJ%2FWlIP3HkYq3HR2by%2BwhEOVxuCXPkLCCdyuW2J5W5h%2BRqDMfJMyn6sv5EKwkju3EoQtgs0DOqPhxooOG%2FFaFtfD4g5HD4RRCUSmxHR%2FVQ4fMqAOgNV2RpCteo%2BDah6u4lVDoaKDK5nsFAj3pB5WwsoxW8eVoZM7VHdOzamKJuTcsaoxjW0xGDAdo8yHW2rfn6AOBMNBhW5Vj%2FmCNAJvn5l%2BgRrn2WWHQUqYpeHe28pf1ESNvlKK12PQ%2BkNqunJ1fEiHUgVvjnAY2c3AjzWO8I0bjUZjvEIW%2FTOy3gEvq54Luzq8k3w%2FsYBnCEEGjb1iWqhDVlkwyQuIo5k7g%2BzbDZuupuiyFP6s8EvAbme9OFPJl54YoNmMfQSKjNXl9mvCXy2bchx4J%2B5u7Q4GshCcAP7XP%2BIRKsBgwx0gnGJ3g2VUHk%2BEKkqeaMfEiscY6b59X3v2PtJFXwABBOnpnNX2dA%2B1%2B7Zro0ARuSPtlyiarohfQaFZUs3sBvAMDiHdj%2FCQ3665Y8zWk%2BWScLnhIdSqj0Zmw5PpoJFGWTC2Hp0if5kO126%2FxMD%2B6d19j76WTZtVVWSeOA3Xs8BwP7LbD%2FdSgtsESqwj6REBvWIx0QpRSNeizCLosPBBjqkAZSJ0bJ6oXwPOaqtE8PIhRbbn3llzgdj2JVNOQkqKzwVhKAbYrGGNrgmND2t5EEfHzBmlVt%2FojpwOc%2FFzLLn94%2BGC1SEtNdb5KzoIUzmcdbg5tx8pW9hhDYsjI5wAe35EreS8vvnGwMoHuvwb0KjJSTkh7Eg1MnflIX0TSO8V4Ye1IFeMAiU11oYoGO3VBWX%2BN1EDSvaGe%2FAxYhnzC1q95znq4S9&X-Amz-Signature=9970253ee52576e420588d0eb87226ec64cecc4fe8b0c4b2fd17c4aa276cfbb0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHNSIJU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDL4q8HNcuwzUJgktdR7ioCJOoq6sF04cAMdh%2FJgYa7dQIhAMdZYBha6Af4mYsBpwfza29dgdNr%2BwBoaHn93v0CkMsNKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPp8PrlfFO%2FLhHDNsq3AMADOuBAa1Avb8naMJ%2FWlIP3HkYq3HR2by%2BwhEOVxuCXPkLCCdyuW2J5W5h%2BRqDMfJMyn6sv5EKwkju3EoQtgs0DOqPhxooOG%2FFaFtfD4g5HD4RRCUSmxHR%2FVQ4fMqAOgNV2RpCteo%2BDah6u4lVDoaKDK5nsFAj3pB5WwsoxW8eVoZM7VHdOzamKJuTcsaoxjW0xGDAdo8yHW2rfn6AOBMNBhW5Vj%2FmCNAJvn5l%2BgRrn2WWHQUqYpeHe28pf1ESNvlKK12PQ%2BkNqunJ1fEiHUgVvjnAY2c3AjzWO8I0bjUZjvEIW%2FTOy3gEvq54Luzq8k3w%2FsYBnCEEGjb1iWqhDVlkwyQuIo5k7g%2BzbDZuupuiyFP6s8EvAbme9OFPJl54YoNmMfQSKjNXl9mvCXy2bchx4J%2B5u7Q4GshCcAP7XP%2BIRKsBgwx0gnGJ3g2VUHk%2BEKkqeaMfEiscY6b59X3v2PtJFXwABBOnpnNX2dA%2B1%2B7Zro0ARuSPtlyiarohfQaFZUs3sBvAMDiHdj%2FCQ3665Y8zWk%2BWScLnhIdSqj0Zmw5PpoJFGWTC2Hp0if5kO126%2FxMD%2B6d19j76WTZtVVWSeOA3Xs8BwP7LbD%2FdSgtsESqwj6REBvWIx0QpRSNeizCLosPBBjqkAZSJ0bJ6oXwPOaqtE8PIhRbbn3llzgdj2JVNOQkqKzwVhKAbYrGGNrgmND2t5EEfHzBmlVt%2FojpwOc%2FFzLLn94%2BGC1SEtNdb5KzoIUzmcdbg5tx8pW9hhDYsjI5wAe35EreS8vvnGwMoHuvwb0KjJSTkh7Eg1MnflIX0TSO8V4Ye1IFeMAiU11oYoGO3VBWX%2BN1EDSvaGe%2FAxYhnzC1q95znq4S9&X-Amz-Signature=298efc4c2655a1867c1dd44b6d6ff09962181a25db7d6fa3b2293952eba39f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHNSIJU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDL4q8HNcuwzUJgktdR7ioCJOoq6sF04cAMdh%2FJgYa7dQIhAMdZYBha6Af4mYsBpwfza29dgdNr%2BwBoaHn93v0CkMsNKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPp8PrlfFO%2FLhHDNsq3AMADOuBAa1Avb8naMJ%2FWlIP3HkYq3HR2by%2BwhEOVxuCXPkLCCdyuW2J5W5h%2BRqDMfJMyn6sv5EKwkju3EoQtgs0DOqPhxooOG%2FFaFtfD4g5HD4RRCUSmxHR%2FVQ4fMqAOgNV2RpCteo%2BDah6u4lVDoaKDK5nsFAj3pB5WwsoxW8eVoZM7VHdOzamKJuTcsaoxjW0xGDAdo8yHW2rfn6AOBMNBhW5Vj%2FmCNAJvn5l%2BgRrn2WWHQUqYpeHe28pf1ESNvlKK12PQ%2BkNqunJ1fEiHUgVvjnAY2c3AjzWO8I0bjUZjvEIW%2FTOy3gEvq54Luzq8k3w%2FsYBnCEEGjb1iWqhDVlkwyQuIo5k7g%2BzbDZuupuiyFP6s8EvAbme9OFPJl54YoNmMfQSKjNXl9mvCXy2bchx4J%2B5u7Q4GshCcAP7XP%2BIRKsBgwx0gnGJ3g2VUHk%2BEKkqeaMfEiscY6b59X3v2PtJFXwABBOnpnNX2dA%2B1%2B7Zro0ARuSPtlyiarohfQaFZUs3sBvAMDiHdj%2FCQ3665Y8zWk%2BWScLnhIdSqj0Zmw5PpoJFGWTC2Hp0if5kO126%2FxMD%2B6d19j76WTZtVVWSeOA3Xs8BwP7LbD%2FdSgtsESqwj6REBvWIx0QpRSNeizCLosPBBjqkAZSJ0bJ6oXwPOaqtE8PIhRbbn3llzgdj2JVNOQkqKzwVhKAbYrGGNrgmND2t5EEfHzBmlVt%2FojpwOc%2FFzLLn94%2BGC1SEtNdb5KzoIUzmcdbg5tx8pW9hhDYsjI5wAe35EreS8vvnGwMoHuvwb0KjJSTkh7Eg1MnflIX0TSO8V4Ye1IFeMAiU11oYoGO3VBWX%2BN1EDSvaGe%2FAxYhnzC1q95znq4S9&X-Amz-Signature=b093464355bbdea8656abd1d667cc526e8d235467d00ba57d252cb152c5c81ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHNSIJU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDL4q8HNcuwzUJgktdR7ioCJOoq6sF04cAMdh%2FJgYa7dQIhAMdZYBha6Af4mYsBpwfza29dgdNr%2BwBoaHn93v0CkMsNKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPp8PrlfFO%2FLhHDNsq3AMADOuBAa1Avb8naMJ%2FWlIP3HkYq3HR2by%2BwhEOVxuCXPkLCCdyuW2J5W5h%2BRqDMfJMyn6sv5EKwkju3EoQtgs0DOqPhxooOG%2FFaFtfD4g5HD4RRCUSmxHR%2FVQ4fMqAOgNV2RpCteo%2BDah6u4lVDoaKDK5nsFAj3pB5WwsoxW8eVoZM7VHdOzamKJuTcsaoxjW0xGDAdo8yHW2rfn6AOBMNBhW5Vj%2FmCNAJvn5l%2BgRrn2WWHQUqYpeHe28pf1ESNvlKK12PQ%2BkNqunJ1fEiHUgVvjnAY2c3AjzWO8I0bjUZjvEIW%2FTOy3gEvq54Luzq8k3w%2FsYBnCEEGjb1iWqhDVlkwyQuIo5k7g%2BzbDZuupuiyFP6s8EvAbme9OFPJl54YoNmMfQSKjNXl9mvCXy2bchx4J%2B5u7Q4GshCcAP7XP%2BIRKsBgwx0gnGJ3g2VUHk%2BEKkqeaMfEiscY6b59X3v2PtJFXwABBOnpnNX2dA%2B1%2B7Zro0ARuSPtlyiarohfQaFZUs3sBvAMDiHdj%2FCQ3665Y8zWk%2BWScLnhIdSqj0Zmw5PpoJFGWTC2Hp0if5kO126%2FxMD%2B6d19j76WTZtVVWSeOA3Xs8BwP7LbD%2FdSgtsESqwj6REBvWIx0QpRSNeizCLosPBBjqkAZSJ0bJ6oXwPOaqtE8PIhRbbn3llzgdj2JVNOQkqKzwVhKAbYrGGNrgmND2t5EEfHzBmlVt%2FojpwOc%2FFzLLn94%2BGC1SEtNdb5KzoIUzmcdbg5tx8pW9hhDYsjI5wAe35EreS8vvnGwMoHuvwb0KjJSTkh7Eg1MnflIX0TSO8V4Ye1IFeMAiU11oYoGO3VBWX%2BN1EDSvaGe%2FAxYhnzC1q95znq4S9&X-Amz-Signature=0635384a1ba239d626f0bd8e07647903936a2c885584c35fc33884f7efb266fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHNSIJU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDL4q8HNcuwzUJgktdR7ioCJOoq6sF04cAMdh%2FJgYa7dQIhAMdZYBha6Af4mYsBpwfza29dgdNr%2BwBoaHn93v0CkMsNKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPp8PrlfFO%2FLhHDNsq3AMADOuBAa1Avb8naMJ%2FWlIP3HkYq3HR2by%2BwhEOVxuCXPkLCCdyuW2J5W5h%2BRqDMfJMyn6sv5EKwkju3EoQtgs0DOqPhxooOG%2FFaFtfD4g5HD4RRCUSmxHR%2FVQ4fMqAOgNV2RpCteo%2BDah6u4lVDoaKDK5nsFAj3pB5WwsoxW8eVoZM7VHdOzamKJuTcsaoxjW0xGDAdo8yHW2rfn6AOBMNBhW5Vj%2FmCNAJvn5l%2BgRrn2WWHQUqYpeHe28pf1ESNvlKK12PQ%2BkNqunJ1fEiHUgVvjnAY2c3AjzWO8I0bjUZjvEIW%2FTOy3gEvq54Luzq8k3w%2FsYBnCEEGjb1iWqhDVlkwyQuIo5k7g%2BzbDZuupuiyFP6s8EvAbme9OFPJl54YoNmMfQSKjNXl9mvCXy2bchx4J%2B5u7Q4GshCcAP7XP%2BIRKsBgwx0gnGJ3g2VUHk%2BEKkqeaMfEiscY6b59X3v2PtJFXwABBOnpnNX2dA%2B1%2B7Zro0ARuSPtlyiarohfQaFZUs3sBvAMDiHdj%2FCQ3665Y8zWk%2BWScLnhIdSqj0Zmw5PpoJFGWTC2Hp0if5kO126%2FxMD%2B6d19j76WTZtVVWSeOA3Xs8BwP7LbD%2FdSgtsESqwj6REBvWIx0QpRSNeizCLosPBBjqkAZSJ0bJ6oXwPOaqtE8PIhRbbn3llzgdj2JVNOQkqKzwVhKAbYrGGNrgmND2t5EEfHzBmlVt%2FojpwOc%2FFzLLn94%2BGC1SEtNdb5KzoIUzmcdbg5tx8pW9hhDYsjI5wAe35EreS8vvnGwMoHuvwb0KjJSTkh7Eg1MnflIX0TSO8V4Ye1IFeMAiU11oYoGO3VBWX%2BN1EDSvaGe%2FAxYhnzC1q95znq4S9&X-Amz-Signature=ce6a05f01edb798dcd9e038cd615396d58f57c4cf5def026ec0880f8e35b31cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDHNSIJU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDL4q8HNcuwzUJgktdR7ioCJOoq6sF04cAMdh%2FJgYa7dQIhAMdZYBha6Af4mYsBpwfza29dgdNr%2BwBoaHn93v0CkMsNKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPp8PrlfFO%2FLhHDNsq3AMADOuBAa1Avb8naMJ%2FWlIP3HkYq3HR2by%2BwhEOVxuCXPkLCCdyuW2J5W5h%2BRqDMfJMyn6sv5EKwkju3EoQtgs0DOqPhxooOG%2FFaFtfD4g5HD4RRCUSmxHR%2FVQ4fMqAOgNV2RpCteo%2BDah6u4lVDoaKDK5nsFAj3pB5WwsoxW8eVoZM7VHdOzamKJuTcsaoxjW0xGDAdo8yHW2rfn6AOBMNBhW5Vj%2FmCNAJvn5l%2BgRrn2WWHQUqYpeHe28pf1ESNvlKK12PQ%2BkNqunJ1fEiHUgVvjnAY2c3AjzWO8I0bjUZjvEIW%2FTOy3gEvq54Luzq8k3w%2FsYBnCEEGjb1iWqhDVlkwyQuIo5k7g%2BzbDZuupuiyFP6s8EvAbme9OFPJl54YoNmMfQSKjNXl9mvCXy2bchx4J%2B5u7Q4GshCcAP7XP%2BIRKsBgwx0gnGJ3g2VUHk%2BEKkqeaMfEiscY6b59X3v2PtJFXwABBOnpnNX2dA%2B1%2B7Zro0ARuSPtlyiarohfQaFZUs3sBvAMDiHdj%2FCQ3665Y8zWk%2BWScLnhIdSqj0Zmw5PpoJFGWTC2Hp0if5kO126%2FxMD%2B6d19j76WTZtVVWSeOA3Xs8BwP7LbD%2FdSgtsESqwj6REBvWIx0QpRSNeizCLosPBBjqkAZSJ0bJ6oXwPOaqtE8PIhRbbn3llzgdj2JVNOQkqKzwVhKAbYrGGNrgmND2t5EEfHzBmlVt%2FojpwOc%2FFzLLn94%2BGC1SEtNdb5KzoIUzmcdbg5tx8pW9hhDYsjI5wAe35EreS8vvnGwMoHuvwb0KjJSTkh7Eg1MnflIX0TSO8V4Ye1IFeMAiU11oYoGO3VBWX%2BN1EDSvaGe%2FAxYhnzC1q95znq4S9&X-Amz-Signature=ea4c18946e82e420e8f0b2f986b585d91e2fce148e53fcba4a167c598ba0b90d&X-Amz-SignedHeaders=host&x-id=GetObject)
