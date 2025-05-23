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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMPZWPN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD66DOGTZYWl6aOAfEtoxkDGfBv3eAI4t6lTyZ2%2Baut5QIhAKig%2BtqOlxggBiJ2ZYN9clZiqKqnEoVvXp4k9vlnMRlOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQDR7BEkuXcq538NUq3ANRxImXF%2F9PbK%2BPm0ahlPNmfeLVdqoiko5Z3oVIEHu0NYY3tAtcKi08qjthtJ6iHByq4%2FNQl%2BMYT8OxnlQnWovP2nDFzzJNT6J9shG2JHXN9sQ%2BO3kzNjqAknCpPFqG8KJLxjOZWbj0cqQ4mHgyd8792hPqdtGTXYVbSZTX3xcV%2BuBJhv8hBHmm%2BEdNAScfSeWvGVSVeT9P8CIOz4P2WXtDObU9K0DfntV8v1CW685CffjHhLWHI5CpVD7Vi5BYgTKMPHU5IIuA9znLEo3q9%2FFn%2BiFA9sCVTGkyEtcuBO15B9YjA8bfEfh6DUkXF%2FefHSSZG58YU1hM1DCIjIY%2FLBwFd3A7gPDSKZ5nVhmO0nSo9BZbRq2n761fef%2FUhbLbaJQdOyZ1nq13TY4DG4QyCLrjpNfBIlCIs38Waa6hqxS%2FyvIr05t%2B9TKSZtNT0TqZrkCrQYBByXvnZFU9%2BKezgOs5mjo2%2FkOPJT9c6wPrSwal5n3N3jlU7mcQAcuLpHilSxfkEZv12xFtM6Z11FZIab4NY5MuIGHbdZ12OFYT81jc2R5mv93h2Mi%2FyOWyUTmNJKtPsivF3K6qlwVvefzd1fMrzoFU39o3LdA9FlVf%2BiCk%2B1hyTxJnyYXUMoQOxzD2ocPBBjqkAcVF2TUhJt4ek5%2FARJKeC3%2Bk5TVILkd6tP2QfGPxSCmY8OvELcuZ0eUYvLDxvT0CJOkziNXNlZ9nwLAKGZb3vzkzz689KDEkCA6er7N5JMkeiY8YITNQToWGmc8aqsC%2B3Rne2ODA7kGsbedyeLnFDkf5M%2FhnFhsySvGjXPWSLuV6333xPEQoNjPj6VErKy3aSLGjqWeZLoXSfaAjjdNpF3oF5w9a&X-Amz-Signature=c7ebdc093f7f13887c6a3d10e6ffef943d9b9f793da4d565af2fc5c3f40a5617&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMPZWPN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD66DOGTZYWl6aOAfEtoxkDGfBv3eAI4t6lTyZ2%2Baut5QIhAKig%2BtqOlxggBiJ2ZYN9clZiqKqnEoVvXp4k9vlnMRlOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQDR7BEkuXcq538NUq3ANRxImXF%2F9PbK%2BPm0ahlPNmfeLVdqoiko5Z3oVIEHu0NYY3tAtcKi08qjthtJ6iHByq4%2FNQl%2BMYT8OxnlQnWovP2nDFzzJNT6J9shG2JHXN9sQ%2BO3kzNjqAknCpPFqG8KJLxjOZWbj0cqQ4mHgyd8792hPqdtGTXYVbSZTX3xcV%2BuBJhv8hBHmm%2BEdNAScfSeWvGVSVeT9P8CIOz4P2WXtDObU9K0DfntV8v1CW685CffjHhLWHI5CpVD7Vi5BYgTKMPHU5IIuA9znLEo3q9%2FFn%2BiFA9sCVTGkyEtcuBO15B9YjA8bfEfh6DUkXF%2FefHSSZG58YU1hM1DCIjIY%2FLBwFd3A7gPDSKZ5nVhmO0nSo9BZbRq2n761fef%2FUhbLbaJQdOyZ1nq13TY4DG4QyCLrjpNfBIlCIs38Waa6hqxS%2FyvIr05t%2B9TKSZtNT0TqZrkCrQYBByXvnZFU9%2BKezgOs5mjo2%2FkOPJT9c6wPrSwal5n3N3jlU7mcQAcuLpHilSxfkEZv12xFtM6Z11FZIab4NY5MuIGHbdZ12OFYT81jc2R5mv93h2Mi%2FyOWyUTmNJKtPsivF3K6qlwVvefzd1fMrzoFU39o3LdA9FlVf%2BiCk%2B1hyTxJnyYXUMoQOxzD2ocPBBjqkAcVF2TUhJt4ek5%2FARJKeC3%2Bk5TVILkd6tP2QfGPxSCmY8OvELcuZ0eUYvLDxvT0CJOkziNXNlZ9nwLAKGZb3vzkzz689KDEkCA6er7N5JMkeiY8YITNQToWGmc8aqsC%2B3Rne2ODA7kGsbedyeLnFDkf5M%2FhnFhsySvGjXPWSLuV6333xPEQoNjPj6VErKy3aSLGjqWeZLoXSfaAjjdNpF3oF5w9a&X-Amz-Signature=0d2c1e045f9ac28e6a3f0c636197ea946580d4222ccdc7b31c3cf14b8dbcebd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMPZWPN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD66DOGTZYWl6aOAfEtoxkDGfBv3eAI4t6lTyZ2%2Baut5QIhAKig%2BtqOlxggBiJ2ZYN9clZiqKqnEoVvXp4k9vlnMRlOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQDR7BEkuXcq538NUq3ANRxImXF%2F9PbK%2BPm0ahlPNmfeLVdqoiko5Z3oVIEHu0NYY3tAtcKi08qjthtJ6iHByq4%2FNQl%2BMYT8OxnlQnWovP2nDFzzJNT6J9shG2JHXN9sQ%2BO3kzNjqAknCpPFqG8KJLxjOZWbj0cqQ4mHgyd8792hPqdtGTXYVbSZTX3xcV%2BuBJhv8hBHmm%2BEdNAScfSeWvGVSVeT9P8CIOz4P2WXtDObU9K0DfntV8v1CW685CffjHhLWHI5CpVD7Vi5BYgTKMPHU5IIuA9znLEo3q9%2FFn%2BiFA9sCVTGkyEtcuBO15B9YjA8bfEfh6DUkXF%2FefHSSZG58YU1hM1DCIjIY%2FLBwFd3A7gPDSKZ5nVhmO0nSo9BZbRq2n761fef%2FUhbLbaJQdOyZ1nq13TY4DG4QyCLrjpNfBIlCIs38Waa6hqxS%2FyvIr05t%2B9TKSZtNT0TqZrkCrQYBByXvnZFU9%2BKezgOs5mjo2%2FkOPJT9c6wPrSwal5n3N3jlU7mcQAcuLpHilSxfkEZv12xFtM6Z11FZIab4NY5MuIGHbdZ12OFYT81jc2R5mv93h2Mi%2FyOWyUTmNJKtPsivF3K6qlwVvefzd1fMrzoFU39o3LdA9FlVf%2BiCk%2B1hyTxJnyYXUMoQOxzD2ocPBBjqkAcVF2TUhJt4ek5%2FARJKeC3%2Bk5TVILkd6tP2QfGPxSCmY8OvELcuZ0eUYvLDxvT0CJOkziNXNlZ9nwLAKGZb3vzkzz689KDEkCA6er7N5JMkeiY8YITNQToWGmc8aqsC%2B3Rne2ODA7kGsbedyeLnFDkf5M%2FhnFhsySvGjXPWSLuV6333xPEQoNjPj6VErKy3aSLGjqWeZLoXSfaAjjdNpF3oF5w9a&X-Amz-Signature=1246546d4be993dc507a4060d1df22979790e281b65b1dccda21a6d725fe809b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMPZWPN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD66DOGTZYWl6aOAfEtoxkDGfBv3eAI4t6lTyZ2%2Baut5QIhAKig%2BtqOlxggBiJ2ZYN9clZiqKqnEoVvXp4k9vlnMRlOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQDR7BEkuXcq538NUq3ANRxImXF%2F9PbK%2BPm0ahlPNmfeLVdqoiko5Z3oVIEHu0NYY3tAtcKi08qjthtJ6iHByq4%2FNQl%2BMYT8OxnlQnWovP2nDFzzJNT6J9shG2JHXN9sQ%2BO3kzNjqAknCpPFqG8KJLxjOZWbj0cqQ4mHgyd8792hPqdtGTXYVbSZTX3xcV%2BuBJhv8hBHmm%2BEdNAScfSeWvGVSVeT9P8CIOz4P2WXtDObU9K0DfntV8v1CW685CffjHhLWHI5CpVD7Vi5BYgTKMPHU5IIuA9znLEo3q9%2FFn%2BiFA9sCVTGkyEtcuBO15B9YjA8bfEfh6DUkXF%2FefHSSZG58YU1hM1DCIjIY%2FLBwFd3A7gPDSKZ5nVhmO0nSo9BZbRq2n761fef%2FUhbLbaJQdOyZ1nq13TY4DG4QyCLrjpNfBIlCIs38Waa6hqxS%2FyvIr05t%2B9TKSZtNT0TqZrkCrQYBByXvnZFU9%2BKezgOs5mjo2%2FkOPJT9c6wPrSwal5n3N3jlU7mcQAcuLpHilSxfkEZv12xFtM6Z11FZIab4NY5MuIGHbdZ12OFYT81jc2R5mv93h2Mi%2FyOWyUTmNJKtPsivF3K6qlwVvefzd1fMrzoFU39o3LdA9FlVf%2BiCk%2B1hyTxJnyYXUMoQOxzD2ocPBBjqkAcVF2TUhJt4ek5%2FARJKeC3%2Bk5TVILkd6tP2QfGPxSCmY8OvELcuZ0eUYvLDxvT0CJOkziNXNlZ9nwLAKGZb3vzkzz689KDEkCA6er7N5JMkeiY8YITNQToWGmc8aqsC%2B3Rne2ODA7kGsbedyeLnFDkf5M%2FhnFhsySvGjXPWSLuV6333xPEQoNjPj6VErKy3aSLGjqWeZLoXSfaAjjdNpF3oF5w9a&X-Amz-Signature=c5de8f89222ed8f49a58be93ed733d64e6875c502af8a0cd05f2f4ad23863911&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMPZWPN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD66DOGTZYWl6aOAfEtoxkDGfBv3eAI4t6lTyZ2%2Baut5QIhAKig%2BtqOlxggBiJ2ZYN9clZiqKqnEoVvXp4k9vlnMRlOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQDR7BEkuXcq538NUq3ANRxImXF%2F9PbK%2BPm0ahlPNmfeLVdqoiko5Z3oVIEHu0NYY3tAtcKi08qjthtJ6iHByq4%2FNQl%2BMYT8OxnlQnWovP2nDFzzJNT6J9shG2JHXN9sQ%2BO3kzNjqAknCpPFqG8KJLxjOZWbj0cqQ4mHgyd8792hPqdtGTXYVbSZTX3xcV%2BuBJhv8hBHmm%2BEdNAScfSeWvGVSVeT9P8CIOz4P2WXtDObU9K0DfntV8v1CW685CffjHhLWHI5CpVD7Vi5BYgTKMPHU5IIuA9znLEo3q9%2FFn%2BiFA9sCVTGkyEtcuBO15B9YjA8bfEfh6DUkXF%2FefHSSZG58YU1hM1DCIjIY%2FLBwFd3A7gPDSKZ5nVhmO0nSo9BZbRq2n761fef%2FUhbLbaJQdOyZ1nq13TY4DG4QyCLrjpNfBIlCIs38Waa6hqxS%2FyvIr05t%2B9TKSZtNT0TqZrkCrQYBByXvnZFU9%2BKezgOs5mjo2%2FkOPJT9c6wPrSwal5n3N3jlU7mcQAcuLpHilSxfkEZv12xFtM6Z11FZIab4NY5MuIGHbdZ12OFYT81jc2R5mv93h2Mi%2FyOWyUTmNJKtPsivF3K6qlwVvefzd1fMrzoFU39o3LdA9FlVf%2BiCk%2B1hyTxJnyYXUMoQOxzD2ocPBBjqkAcVF2TUhJt4ek5%2FARJKeC3%2Bk5TVILkd6tP2QfGPxSCmY8OvELcuZ0eUYvLDxvT0CJOkziNXNlZ9nwLAKGZb3vzkzz689KDEkCA6er7N5JMkeiY8YITNQToWGmc8aqsC%2B3Rne2ODA7kGsbedyeLnFDkf5M%2FhnFhsySvGjXPWSLuV6333xPEQoNjPj6VErKy3aSLGjqWeZLoXSfaAjjdNpF3oF5w9a&X-Amz-Signature=98fc6b0990a0c22f270088ada29195549de1060bdb626ef1c56c25d9f53ecf6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DMPZWPN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T200959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD66DOGTZYWl6aOAfEtoxkDGfBv3eAI4t6lTyZ2%2Baut5QIhAKig%2BtqOlxggBiJ2ZYN9clZiqKqnEoVvXp4k9vlnMRlOKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQDR7BEkuXcq538NUq3ANRxImXF%2F9PbK%2BPm0ahlPNmfeLVdqoiko5Z3oVIEHu0NYY3tAtcKi08qjthtJ6iHByq4%2FNQl%2BMYT8OxnlQnWovP2nDFzzJNT6J9shG2JHXN9sQ%2BO3kzNjqAknCpPFqG8KJLxjOZWbj0cqQ4mHgyd8792hPqdtGTXYVbSZTX3xcV%2BuBJhv8hBHmm%2BEdNAScfSeWvGVSVeT9P8CIOz4P2WXtDObU9K0DfntV8v1CW685CffjHhLWHI5CpVD7Vi5BYgTKMPHU5IIuA9znLEo3q9%2FFn%2BiFA9sCVTGkyEtcuBO15B9YjA8bfEfh6DUkXF%2FefHSSZG58YU1hM1DCIjIY%2FLBwFd3A7gPDSKZ5nVhmO0nSo9BZbRq2n761fef%2FUhbLbaJQdOyZ1nq13TY4DG4QyCLrjpNfBIlCIs38Waa6hqxS%2FyvIr05t%2B9TKSZtNT0TqZrkCrQYBByXvnZFU9%2BKezgOs5mjo2%2FkOPJT9c6wPrSwal5n3N3jlU7mcQAcuLpHilSxfkEZv12xFtM6Z11FZIab4NY5MuIGHbdZ12OFYT81jc2R5mv93h2Mi%2FyOWyUTmNJKtPsivF3K6qlwVvefzd1fMrzoFU39o3LdA9FlVf%2BiCk%2B1hyTxJnyYXUMoQOxzD2ocPBBjqkAcVF2TUhJt4ek5%2FARJKeC3%2Bk5TVILkd6tP2QfGPxSCmY8OvELcuZ0eUYvLDxvT0CJOkziNXNlZ9nwLAKGZb3vzkzz689KDEkCA6er7N5JMkeiY8YITNQToWGmc8aqsC%2B3Rne2ODA7kGsbedyeLnFDkf5M%2FhnFhsySvGjXPWSLuV6333xPEQoNjPj6VErKy3aSLGjqWeZLoXSfaAjjdNpF3oF5w9a&X-Amz-Signature=82fb7ce1cf257f763c9435a0a016214dfab25730cb367e0dc7f3c3177b627054&X-Amz-SignedHeaders=host&x-id=GetObject)
