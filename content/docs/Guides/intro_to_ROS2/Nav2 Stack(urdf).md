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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZPLL37%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldxypjeynJO1mF09tYIX8reVD7HOibk13IaFo6nKaWgIgS56vMO1Fy5U7BO09oAS9EvwpBPu2Y5qAUCDuC8omsb8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInYVYecZjoU%2BVjyMyrcA8McwL9WAqnyXBsgX6JcbLjZ%2B91HactDMrzngHQUjoq1DfcpKIz5eXVD4O85vqqHbC0slzHdaQ6J1OFOg2dLd6NRNEK3HWP%2F3i9iaWBjpUOL0NnHLRoWSzOedZua6DUuLFSr%2BmN1hStwaXoWYuAf9uSDKoVhkw%2Bgj%2BtZQyhUYd%2BvsChthQOZ2p0PIyct3YwHB%2FqtQmj9W5J7%2F10UlREI%2BpLMIQwGI93FbjvqJvVe0qhTkM7kGhNxyqIKPBnHTqeLYch9%2BbxaLgLbv28bGSTVVJ%2FQxRVSXqSkSF36WGtgs66NC31wAuD5OBY8NgT7PQG%2FUsyVe9W4nS3QOUOG%2BHwDxbWj5%2F5EaisbRtkqVrzs47NY%2BPYRS4GQ5STw9nhFNlqy5aTlX97eHpqFKnAyzOfNhhn2nyOLRT5IL1pZWZG9ehbiRQ1Xp%2F2lucgVjJUU3qjnFO%2FYxMALCIE9d4tgRzKo3%2FVzKJWtBLXTpQFZCXW%2FX2x%2BlieggIhABQaCoFw6bDckC4ZA7IsFhSvHmTaLj4s%2BhEWNhDB97%2FlW4f9zx7JWBL9q7rf1L6UlCoiPbYwEmIPj6K1UfnHqeObCBTTA3uaNtjMZERlZ3H6rbOzTJTG%2BR%2FXzqFRQs6RWXlbvUiSuMLzAycIGOqUBk5AntL5yFrVjv7pjzg2RBHgB8%2FtP7SV6W%2FDLgD5ajjaY91pZ%2F22Cv%2F5%2BoAqjbM7Zx2Ntc8hH6NGWgQ%2F8enCPSIYQcgp24xkyjQchYCwlK7C0updgo8B5oByD16z5mayxAK3REIFwBxYWVyM4Kz4nfIS%2B0qSqp9UUrYPV0rA%2FV3TUceDr51o1JVcC8mY7TBTNQE0TinPdEzdYh32LEDpUfD%2BD1cdE&X-Amz-Signature=1ecb5e84ecb568afd3934a0ad3f9aea8f7cf45f0622364940c5d77e328170a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZPLL37%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldxypjeynJO1mF09tYIX8reVD7HOibk13IaFo6nKaWgIgS56vMO1Fy5U7BO09oAS9EvwpBPu2Y5qAUCDuC8omsb8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInYVYecZjoU%2BVjyMyrcA8McwL9WAqnyXBsgX6JcbLjZ%2B91HactDMrzngHQUjoq1DfcpKIz5eXVD4O85vqqHbC0slzHdaQ6J1OFOg2dLd6NRNEK3HWP%2F3i9iaWBjpUOL0NnHLRoWSzOedZua6DUuLFSr%2BmN1hStwaXoWYuAf9uSDKoVhkw%2Bgj%2BtZQyhUYd%2BvsChthQOZ2p0PIyct3YwHB%2FqtQmj9W5J7%2F10UlREI%2BpLMIQwGI93FbjvqJvVe0qhTkM7kGhNxyqIKPBnHTqeLYch9%2BbxaLgLbv28bGSTVVJ%2FQxRVSXqSkSF36WGtgs66NC31wAuD5OBY8NgT7PQG%2FUsyVe9W4nS3QOUOG%2BHwDxbWj5%2F5EaisbRtkqVrzs47NY%2BPYRS4GQ5STw9nhFNlqy5aTlX97eHpqFKnAyzOfNhhn2nyOLRT5IL1pZWZG9ehbiRQ1Xp%2F2lucgVjJUU3qjnFO%2FYxMALCIE9d4tgRzKo3%2FVzKJWtBLXTpQFZCXW%2FX2x%2BlieggIhABQaCoFw6bDckC4ZA7IsFhSvHmTaLj4s%2BhEWNhDB97%2FlW4f9zx7JWBL9q7rf1L6UlCoiPbYwEmIPj6K1UfnHqeObCBTTA3uaNtjMZERlZ3H6rbOzTJTG%2BR%2FXzqFRQs6RWXlbvUiSuMLzAycIGOqUBk5AntL5yFrVjv7pjzg2RBHgB8%2FtP7SV6W%2FDLgD5ajjaY91pZ%2F22Cv%2F5%2BoAqjbM7Zx2Ntc8hH6NGWgQ%2F8enCPSIYQcgp24xkyjQchYCwlK7C0updgo8B5oByD16z5mayxAK3REIFwBxYWVyM4Kz4nfIS%2B0qSqp9UUrYPV0rA%2FV3TUceDr51o1JVcC8mY7TBTNQE0TinPdEzdYh32LEDpUfD%2BD1cdE&X-Amz-Signature=a94652bb8a2140bd1b211b0c568ef0aa31c08d6e3c17ea9de973d943d414135d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZPLL37%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldxypjeynJO1mF09tYIX8reVD7HOibk13IaFo6nKaWgIgS56vMO1Fy5U7BO09oAS9EvwpBPu2Y5qAUCDuC8omsb8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInYVYecZjoU%2BVjyMyrcA8McwL9WAqnyXBsgX6JcbLjZ%2B91HactDMrzngHQUjoq1DfcpKIz5eXVD4O85vqqHbC0slzHdaQ6J1OFOg2dLd6NRNEK3HWP%2F3i9iaWBjpUOL0NnHLRoWSzOedZua6DUuLFSr%2BmN1hStwaXoWYuAf9uSDKoVhkw%2Bgj%2BtZQyhUYd%2BvsChthQOZ2p0PIyct3YwHB%2FqtQmj9W5J7%2F10UlREI%2BpLMIQwGI93FbjvqJvVe0qhTkM7kGhNxyqIKPBnHTqeLYch9%2BbxaLgLbv28bGSTVVJ%2FQxRVSXqSkSF36WGtgs66NC31wAuD5OBY8NgT7PQG%2FUsyVe9W4nS3QOUOG%2BHwDxbWj5%2F5EaisbRtkqVrzs47NY%2BPYRS4GQ5STw9nhFNlqy5aTlX97eHpqFKnAyzOfNhhn2nyOLRT5IL1pZWZG9ehbiRQ1Xp%2F2lucgVjJUU3qjnFO%2FYxMALCIE9d4tgRzKo3%2FVzKJWtBLXTpQFZCXW%2FX2x%2BlieggIhABQaCoFw6bDckC4ZA7IsFhSvHmTaLj4s%2BhEWNhDB97%2FlW4f9zx7JWBL9q7rf1L6UlCoiPbYwEmIPj6K1UfnHqeObCBTTA3uaNtjMZERlZ3H6rbOzTJTG%2BR%2FXzqFRQs6RWXlbvUiSuMLzAycIGOqUBk5AntL5yFrVjv7pjzg2RBHgB8%2FtP7SV6W%2FDLgD5ajjaY91pZ%2F22Cv%2F5%2BoAqjbM7Zx2Ntc8hH6NGWgQ%2F8enCPSIYQcgp24xkyjQchYCwlK7C0updgo8B5oByD16z5mayxAK3REIFwBxYWVyM4Kz4nfIS%2B0qSqp9UUrYPV0rA%2FV3TUceDr51o1JVcC8mY7TBTNQE0TinPdEzdYh32LEDpUfD%2BD1cdE&X-Amz-Signature=af265eecf3099765d8e18b75fbab400c635302fb509ad7b527c9767a436ccebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZPLL37%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldxypjeynJO1mF09tYIX8reVD7HOibk13IaFo6nKaWgIgS56vMO1Fy5U7BO09oAS9EvwpBPu2Y5qAUCDuC8omsb8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInYVYecZjoU%2BVjyMyrcA8McwL9WAqnyXBsgX6JcbLjZ%2B91HactDMrzngHQUjoq1DfcpKIz5eXVD4O85vqqHbC0slzHdaQ6J1OFOg2dLd6NRNEK3HWP%2F3i9iaWBjpUOL0NnHLRoWSzOedZua6DUuLFSr%2BmN1hStwaXoWYuAf9uSDKoVhkw%2Bgj%2BtZQyhUYd%2BvsChthQOZ2p0PIyct3YwHB%2FqtQmj9W5J7%2F10UlREI%2BpLMIQwGI93FbjvqJvVe0qhTkM7kGhNxyqIKPBnHTqeLYch9%2BbxaLgLbv28bGSTVVJ%2FQxRVSXqSkSF36WGtgs66NC31wAuD5OBY8NgT7PQG%2FUsyVe9W4nS3QOUOG%2BHwDxbWj5%2F5EaisbRtkqVrzs47NY%2BPYRS4GQ5STw9nhFNlqy5aTlX97eHpqFKnAyzOfNhhn2nyOLRT5IL1pZWZG9ehbiRQ1Xp%2F2lucgVjJUU3qjnFO%2FYxMALCIE9d4tgRzKo3%2FVzKJWtBLXTpQFZCXW%2FX2x%2BlieggIhABQaCoFw6bDckC4ZA7IsFhSvHmTaLj4s%2BhEWNhDB97%2FlW4f9zx7JWBL9q7rf1L6UlCoiPbYwEmIPj6K1UfnHqeObCBTTA3uaNtjMZERlZ3H6rbOzTJTG%2BR%2FXzqFRQs6RWXlbvUiSuMLzAycIGOqUBk5AntL5yFrVjv7pjzg2RBHgB8%2FtP7SV6W%2FDLgD5ajjaY91pZ%2F22Cv%2F5%2BoAqjbM7Zx2Ntc8hH6NGWgQ%2F8enCPSIYQcgp24xkyjQchYCwlK7C0updgo8B5oByD16z5mayxAK3REIFwBxYWVyM4Kz4nfIS%2B0qSqp9UUrYPV0rA%2FV3TUceDr51o1JVcC8mY7TBTNQE0TinPdEzdYh32LEDpUfD%2BD1cdE&X-Amz-Signature=bf74acd2cfe140e5549d68595002ab9e20f9fc34cf8c1b1d74ea660e7dfaa096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZPLL37%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldxypjeynJO1mF09tYIX8reVD7HOibk13IaFo6nKaWgIgS56vMO1Fy5U7BO09oAS9EvwpBPu2Y5qAUCDuC8omsb8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInYVYecZjoU%2BVjyMyrcA8McwL9WAqnyXBsgX6JcbLjZ%2B91HactDMrzngHQUjoq1DfcpKIz5eXVD4O85vqqHbC0slzHdaQ6J1OFOg2dLd6NRNEK3HWP%2F3i9iaWBjpUOL0NnHLRoWSzOedZua6DUuLFSr%2BmN1hStwaXoWYuAf9uSDKoVhkw%2Bgj%2BtZQyhUYd%2BvsChthQOZ2p0PIyct3YwHB%2FqtQmj9W5J7%2F10UlREI%2BpLMIQwGI93FbjvqJvVe0qhTkM7kGhNxyqIKPBnHTqeLYch9%2BbxaLgLbv28bGSTVVJ%2FQxRVSXqSkSF36WGtgs66NC31wAuD5OBY8NgT7PQG%2FUsyVe9W4nS3QOUOG%2BHwDxbWj5%2F5EaisbRtkqVrzs47NY%2BPYRS4GQ5STw9nhFNlqy5aTlX97eHpqFKnAyzOfNhhn2nyOLRT5IL1pZWZG9ehbiRQ1Xp%2F2lucgVjJUU3qjnFO%2FYxMALCIE9d4tgRzKo3%2FVzKJWtBLXTpQFZCXW%2FX2x%2BlieggIhABQaCoFw6bDckC4ZA7IsFhSvHmTaLj4s%2BhEWNhDB97%2FlW4f9zx7JWBL9q7rf1L6UlCoiPbYwEmIPj6K1UfnHqeObCBTTA3uaNtjMZERlZ3H6rbOzTJTG%2BR%2FXzqFRQs6RWXlbvUiSuMLzAycIGOqUBk5AntL5yFrVjv7pjzg2RBHgB8%2FtP7SV6W%2FDLgD5ajjaY91pZ%2F22Cv%2F5%2BoAqjbM7Zx2Ntc8hH6NGWgQ%2F8enCPSIYQcgp24xkyjQchYCwlK7C0updgo8B5oByD16z5mayxAK3REIFwBxYWVyM4Kz4nfIS%2B0qSqp9UUrYPV0rA%2FV3TUceDr51o1JVcC8mY7TBTNQE0TinPdEzdYh32LEDpUfD%2BD1cdE&X-Amz-Signature=ac29e87ead1a2abbea7fee77e5ce268531dd7688ca59baa749981e9477cd6b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZPLL37%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCldxypjeynJO1mF09tYIX8reVD7HOibk13IaFo6nKaWgIgS56vMO1Fy5U7BO09oAS9EvwpBPu2Y5qAUCDuC8omsb8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInYVYecZjoU%2BVjyMyrcA8McwL9WAqnyXBsgX6JcbLjZ%2B91HactDMrzngHQUjoq1DfcpKIz5eXVD4O85vqqHbC0slzHdaQ6J1OFOg2dLd6NRNEK3HWP%2F3i9iaWBjpUOL0NnHLRoWSzOedZua6DUuLFSr%2BmN1hStwaXoWYuAf9uSDKoVhkw%2Bgj%2BtZQyhUYd%2BvsChthQOZ2p0PIyct3YwHB%2FqtQmj9W5J7%2F10UlREI%2BpLMIQwGI93FbjvqJvVe0qhTkM7kGhNxyqIKPBnHTqeLYch9%2BbxaLgLbv28bGSTVVJ%2FQxRVSXqSkSF36WGtgs66NC31wAuD5OBY8NgT7PQG%2FUsyVe9W4nS3QOUOG%2BHwDxbWj5%2F5EaisbRtkqVrzs47NY%2BPYRS4GQ5STw9nhFNlqy5aTlX97eHpqFKnAyzOfNhhn2nyOLRT5IL1pZWZG9ehbiRQ1Xp%2F2lucgVjJUU3qjnFO%2FYxMALCIE9d4tgRzKo3%2FVzKJWtBLXTpQFZCXW%2FX2x%2BlieggIhABQaCoFw6bDckC4ZA7IsFhSvHmTaLj4s%2BhEWNhDB97%2FlW4f9zx7JWBL9q7rf1L6UlCoiPbYwEmIPj6K1UfnHqeObCBTTA3uaNtjMZERlZ3H6rbOzTJTG%2BR%2FXzqFRQs6RWXlbvUiSuMLzAycIGOqUBk5AntL5yFrVjv7pjzg2RBHgB8%2FtP7SV6W%2FDLgD5ajjaY91pZ%2F22Cv%2F5%2BoAqjbM7Zx2Ntc8hH6NGWgQ%2F8enCPSIYQcgp24xkyjQchYCwlK7C0updgo8B5oByD16z5mayxAK3REIFwBxYWVyM4Kz4nfIS%2B0qSqp9UUrYPV0rA%2FV3TUceDr51o1JVcC8mY7TBTNQE0TinPdEzdYh32LEDpUfD%2BD1cdE&X-Amz-Signature=6c00d68c4a1f885464a22bca2a95291e718fe562c1de266f2cd60beb6a987ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
