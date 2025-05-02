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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KI3JVTA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHNSpDNqMOSes3vIO3oxKo0dR5baI%2FZ%2F5YIhHh53rrsWAiEA8TH%2FvKOsKzRLnRHfRy7A8EuDEBARytlbBDrdz%2FLv264qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFah7fk6G2r0v5RxircA9X2e1iLQWMNxmX%2Fkk2YFpvmG%2FJ%2Ff9pN0elw37qJ51c1WGKw5T6Okoi8ePnAaINweubdCaneXI%2F7hFhx%2B0nQ%2FB8kBcko19x3GEjL4Qg1nUvFPQolxsel1OYpFzebOJ4VqhKJvij2nufve1ByGwKXFJTFezSaXjYUOAh2zsPOYkZiYYlBewBdrdvnkPvn5lQSen2f3zWgiH5ltiUewqiDLSw1tvQ3xPlrwKKERGh8YVHem6UGlEGAl2QVWk7KUXD%2FHhczmunHGB2C8jITIgzhQNYReY5vmG3CeGX9sNpZsoG3NBoi0oAWpSyDmtITPBqf84Nhyl8l5mBOZqhOb4DC1QaijgTu9rtbm2%2FFOxGYOAT%2B5sIa1qhiaDornxsK7DwA%2FB%2Be%2Fev7R%2FlfnAlwws7l7iefDkqoavNvUqZXnZi8qzYZ%2Fj9TlF3KjvAx%2BsudVDrozBf5m668xNkms1oF4iC29O6RBeNWe%2FCJ77%2FpdCBQxUnfeWpKiOrAbS%2B%2Fab8Ax50lBLqRUnEvdHtY%2FmQb60gUzRacZ1ZaSye2QmWw%2BwurbN%2Bvsngjg%2BLAK4VH321RXRsw2HiExw%2BkScBLjuZxso4PG2qvnL3VBxsY8n%2BB9axRdGkyz0zzbEYY8eo9wkYwMK2H0cAGOqUBw0P4HEfpcyrqM7g8vqS6U%2FoUz58nZWu4fzOSfbatD5HIAcz058GgZt3AaDvJ3SXzX217XJLM0tAekh1VrLDzRfx6c3mNsF0x28Puh22jfiH0Sb0rLhuz3atd9j6nvRyfVpp1dEX40ri%2BwTu2fjudowZWHWKusksFzsKuS%2FuQ2W%2FZd9LLH%2FWNcvUfYtnm%2FGY0c4%2Fr%2FSAMZpsok9yOTADXdjvLK1%2B4&X-Amz-Signature=ab3da6f4822707137c1aa568a705d3655a7a651dd8fcdc9974dd3515c7486c97&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KI3JVTA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHNSpDNqMOSes3vIO3oxKo0dR5baI%2FZ%2F5YIhHh53rrsWAiEA8TH%2FvKOsKzRLnRHfRy7A8EuDEBARytlbBDrdz%2FLv264qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFah7fk6G2r0v5RxircA9X2e1iLQWMNxmX%2Fkk2YFpvmG%2FJ%2Ff9pN0elw37qJ51c1WGKw5T6Okoi8ePnAaINweubdCaneXI%2F7hFhx%2B0nQ%2FB8kBcko19x3GEjL4Qg1nUvFPQolxsel1OYpFzebOJ4VqhKJvij2nufve1ByGwKXFJTFezSaXjYUOAh2zsPOYkZiYYlBewBdrdvnkPvn5lQSen2f3zWgiH5ltiUewqiDLSw1tvQ3xPlrwKKERGh8YVHem6UGlEGAl2QVWk7KUXD%2FHhczmunHGB2C8jITIgzhQNYReY5vmG3CeGX9sNpZsoG3NBoi0oAWpSyDmtITPBqf84Nhyl8l5mBOZqhOb4DC1QaijgTu9rtbm2%2FFOxGYOAT%2B5sIa1qhiaDornxsK7DwA%2FB%2Be%2Fev7R%2FlfnAlwws7l7iefDkqoavNvUqZXnZi8qzYZ%2Fj9TlF3KjvAx%2BsudVDrozBf5m668xNkms1oF4iC29O6RBeNWe%2FCJ77%2FpdCBQxUnfeWpKiOrAbS%2B%2Fab8Ax50lBLqRUnEvdHtY%2FmQb60gUzRacZ1ZaSye2QmWw%2BwurbN%2Bvsngjg%2BLAK4VH321RXRsw2HiExw%2BkScBLjuZxso4PG2qvnL3VBxsY8n%2BB9axRdGkyz0zzbEYY8eo9wkYwMK2H0cAGOqUBw0P4HEfpcyrqM7g8vqS6U%2FoUz58nZWu4fzOSfbatD5HIAcz058GgZt3AaDvJ3SXzX217XJLM0tAekh1VrLDzRfx6c3mNsF0x28Puh22jfiH0Sb0rLhuz3atd9j6nvRyfVpp1dEX40ri%2BwTu2fjudowZWHWKusksFzsKuS%2FuQ2W%2FZd9LLH%2FWNcvUfYtnm%2FGY0c4%2Fr%2FSAMZpsok9yOTADXdjvLK1%2B4&X-Amz-Signature=c9e1278c4ffe3187b8e550c2a64e78fadef2813d44e42a3e182492eacc33b5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KI3JVTA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHNSpDNqMOSes3vIO3oxKo0dR5baI%2FZ%2F5YIhHh53rrsWAiEA8TH%2FvKOsKzRLnRHfRy7A8EuDEBARytlbBDrdz%2FLv264qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFah7fk6G2r0v5RxircA9X2e1iLQWMNxmX%2Fkk2YFpvmG%2FJ%2Ff9pN0elw37qJ51c1WGKw5T6Okoi8ePnAaINweubdCaneXI%2F7hFhx%2B0nQ%2FB8kBcko19x3GEjL4Qg1nUvFPQolxsel1OYpFzebOJ4VqhKJvij2nufve1ByGwKXFJTFezSaXjYUOAh2zsPOYkZiYYlBewBdrdvnkPvn5lQSen2f3zWgiH5ltiUewqiDLSw1tvQ3xPlrwKKERGh8YVHem6UGlEGAl2QVWk7KUXD%2FHhczmunHGB2C8jITIgzhQNYReY5vmG3CeGX9sNpZsoG3NBoi0oAWpSyDmtITPBqf84Nhyl8l5mBOZqhOb4DC1QaijgTu9rtbm2%2FFOxGYOAT%2B5sIa1qhiaDornxsK7DwA%2FB%2Be%2Fev7R%2FlfnAlwws7l7iefDkqoavNvUqZXnZi8qzYZ%2Fj9TlF3KjvAx%2BsudVDrozBf5m668xNkms1oF4iC29O6RBeNWe%2FCJ77%2FpdCBQxUnfeWpKiOrAbS%2B%2Fab8Ax50lBLqRUnEvdHtY%2FmQb60gUzRacZ1ZaSye2QmWw%2BwurbN%2Bvsngjg%2BLAK4VH321RXRsw2HiExw%2BkScBLjuZxso4PG2qvnL3VBxsY8n%2BB9axRdGkyz0zzbEYY8eo9wkYwMK2H0cAGOqUBw0P4HEfpcyrqM7g8vqS6U%2FoUz58nZWu4fzOSfbatD5HIAcz058GgZt3AaDvJ3SXzX217XJLM0tAekh1VrLDzRfx6c3mNsF0x28Puh22jfiH0Sb0rLhuz3atd9j6nvRyfVpp1dEX40ri%2BwTu2fjudowZWHWKusksFzsKuS%2FuQ2W%2FZd9LLH%2FWNcvUfYtnm%2FGY0c4%2Fr%2FSAMZpsok9yOTADXdjvLK1%2B4&X-Amz-Signature=2d6befff4f1db9bbd3126d96345a117bf7d95e677cb5f6d49379e1f368dffb38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KI3JVTA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHNSpDNqMOSes3vIO3oxKo0dR5baI%2FZ%2F5YIhHh53rrsWAiEA8TH%2FvKOsKzRLnRHfRy7A8EuDEBARytlbBDrdz%2FLv264qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFah7fk6G2r0v5RxircA9X2e1iLQWMNxmX%2Fkk2YFpvmG%2FJ%2Ff9pN0elw37qJ51c1WGKw5T6Okoi8ePnAaINweubdCaneXI%2F7hFhx%2B0nQ%2FB8kBcko19x3GEjL4Qg1nUvFPQolxsel1OYpFzebOJ4VqhKJvij2nufve1ByGwKXFJTFezSaXjYUOAh2zsPOYkZiYYlBewBdrdvnkPvn5lQSen2f3zWgiH5ltiUewqiDLSw1tvQ3xPlrwKKERGh8YVHem6UGlEGAl2QVWk7KUXD%2FHhczmunHGB2C8jITIgzhQNYReY5vmG3CeGX9sNpZsoG3NBoi0oAWpSyDmtITPBqf84Nhyl8l5mBOZqhOb4DC1QaijgTu9rtbm2%2FFOxGYOAT%2B5sIa1qhiaDornxsK7DwA%2FB%2Be%2Fev7R%2FlfnAlwws7l7iefDkqoavNvUqZXnZi8qzYZ%2Fj9TlF3KjvAx%2BsudVDrozBf5m668xNkms1oF4iC29O6RBeNWe%2FCJ77%2FpdCBQxUnfeWpKiOrAbS%2B%2Fab8Ax50lBLqRUnEvdHtY%2FmQb60gUzRacZ1ZaSye2QmWw%2BwurbN%2Bvsngjg%2BLAK4VH321RXRsw2HiExw%2BkScBLjuZxso4PG2qvnL3VBxsY8n%2BB9axRdGkyz0zzbEYY8eo9wkYwMK2H0cAGOqUBw0P4HEfpcyrqM7g8vqS6U%2FoUz58nZWu4fzOSfbatD5HIAcz058GgZt3AaDvJ3SXzX217XJLM0tAekh1VrLDzRfx6c3mNsF0x28Puh22jfiH0Sb0rLhuz3atd9j6nvRyfVpp1dEX40ri%2BwTu2fjudowZWHWKusksFzsKuS%2FuQ2W%2FZd9LLH%2FWNcvUfYtnm%2FGY0c4%2Fr%2FSAMZpsok9yOTADXdjvLK1%2B4&X-Amz-Signature=015541873687e506a666a226ca22c27084667ddf1b675417bfa398b77a538a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KI3JVTA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHNSpDNqMOSes3vIO3oxKo0dR5baI%2FZ%2F5YIhHh53rrsWAiEA8TH%2FvKOsKzRLnRHfRy7A8EuDEBARytlbBDrdz%2FLv264qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFah7fk6G2r0v5RxircA9X2e1iLQWMNxmX%2Fkk2YFpvmG%2FJ%2Ff9pN0elw37qJ51c1WGKw5T6Okoi8ePnAaINweubdCaneXI%2F7hFhx%2B0nQ%2FB8kBcko19x3GEjL4Qg1nUvFPQolxsel1OYpFzebOJ4VqhKJvij2nufve1ByGwKXFJTFezSaXjYUOAh2zsPOYkZiYYlBewBdrdvnkPvn5lQSen2f3zWgiH5ltiUewqiDLSw1tvQ3xPlrwKKERGh8YVHem6UGlEGAl2QVWk7KUXD%2FHhczmunHGB2C8jITIgzhQNYReY5vmG3CeGX9sNpZsoG3NBoi0oAWpSyDmtITPBqf84Nhyl8l5mBOZqhOb4DC1QaijgTu9rtbm2%2FFOxGYOAT%2B5sIa1qhiaDornxsK7DwA%2FB%2Be%2Fev7R%2FlfnAlwws7l7iefDkqoavNvUqZXnZi8qzYZ%2Fj9TlF3KjvAx%2BsudVDrozBf5m668xNkms1oF4iC29O6RBeNWe%2FCJ77%2FpdCBQxUnfeWpKiOrAbS%2B%2Fab8Ax50lBLqRUnEvdHtY%2FmQb60gUzRacZ1ZaSye2QmWw%2BwurbN%2Bvsngjg%2BLAK4VH321RXRsw2HiExw%2BkScBLjuZxso4PG2qvnL3VBxsY8n%2BB9axRdGkyz0zzbEYY8eo9wkYwMK2H0cAGOqUBw0P4HEfpcyrqM7g8vqS6U%2FoUz58nZWu4fzOSfbatD5HIAcz058GgZt3AaDvJ3SXzX217XJLM0tAekh1VrLDzRfx6c3mNsF0x28Puh22jfiH0Sb0rLhuz3atd9j6nvRyfVpp1dEX40ri%2BwTu2fjudowZWHWKusksFzsKuS%2FuQ2W%2FZd9LLH%2FWNcvUfYtnm%2FGY0c4%2Fr%2FSAMZpsok9yOTADXdjvLK1%2B4&X-Amz-Signature=9c4e4d0c8c8328194d7a0b8148eac001087ba3b9c80810503ae568b489b6d353&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KI3JVTA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHNSpDNqMOSes3vIO3oxKo0dR5baI%2FZ%2F5YIhHh53rrsWAiEA8TH%2FvKOsKzRLnRHfRy7A8EuDEBARytlbBDrdz%2FLv264qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEFah7fk6G2r0v5RxircA9X2e1iLQWMNxmX%2Fkk2YFpvmG%2FJ%2Ff9pN0elw37qJ51c1WGKw5T6Okoi8ePnAaINweubdCaneXI%2F7hFhx%2B0nQ%2FB8kBcko19x3GEjL4Qg1nUvFPQolxsel1OYpFzebOJ4VqhKJvij2nufve1ByGwKXFJTFezSaXjYUOAh2zsPOYkZiYYlBewBdrdvnkPvn5lQSen2f3zWgiH5ltiUewqiDLSw1tvQ3xPlrwKKERGh8YVHem6UGlEGAl2QVWk7KUXD%2FHhczmunHGB2C8jITIgzhQNYReY5vmG3CeGX9sNpZsoG3NBoi0oAWpSyDmtITPBqf84Nhyl8l5mBOZqhOb4DC1QaijgTu9rtbm2%2FFOxGYOAT%2B5sIa1qhiaDornxsK7DwA%2FB%2Be%2Fev7R%2FlfnAlwws7l7iefDkqoavNvUqZXnZi8qzYZ%2Fj9TlF3KjvAx%2BsudVDrozBf5m668xNkms1oF4iC29O6RBeNWe%2FCJ77%2FpdCBQxUnfeWpKiOrAbS%2B%2Fab8Ax50lBLqRUnEvdHtY%2FmQb60gUzRacZ1ZaSye2QmWw%2BwurbN%2Bvsngjg%2BLAK4VH321RXRsw2HiExw%2BkScBLjuZxso4PG2qvnL3VBxsY8n%2BB9axRdGkyz0zzbEYY8eo9wkYwMK2H0cAGOqUBw0P4HEfpcyrqM7g8vqS6U%2FoUz58nZWu4fzOSfbatD5HIAcz058GgZt3AaDvJ3SXzX217XJLM0tAekh1VrLDzRfx6c3mNsF0x28Puh22jfiH0Sb0rLhuz3atd9j6nvRyfVpp1dEX40ri%2BwTu2fjudowZWHWKusksFzsKuS%2FuQ2W%2FZd9LLH%2FWNcvUfYtnm%2FGY0c4%2Fr%2FSAMZpsok9yOTADXdjvLK1%2B4&X-Amz-Signature=ed9fbb4122ab5308b77b8cf6aa0b3996c9d6ce69be724836fc02075f0f535f63&X-Amz-SignedHeaders=host&x-id=GetObject)
