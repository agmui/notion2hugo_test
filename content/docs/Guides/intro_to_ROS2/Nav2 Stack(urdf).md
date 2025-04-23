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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7FVIYP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD27B0Ql9mFPipLDvjH98vetWnY6%2F0JEPg766mVDRR4IQIhANzEBEfr2e81QHtLH9XjuTOtcqRlv%2FyyJRkJVHu13LS8KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvgVJwtKoZ8OIhbj8q3AOa4PkgdR01asRMElJZcpro22CBaHJ8B9q4bSgNr0C1sILve49qHgMrSNzB%2FIRnnS90AFiBo%2BFHC%2BEoYkUHcqj3iEngLp7Jw8XiHLRr4HOEoQaX5RC5KiPdZtdW2AobCNw8w3FdcATJ8ZX%2BLhyfjLF6vzKPwZbQ3J%2BlWCsH1QYhey29%2B1fk1QZwbQZZIW9wpQ5xPWi87szneYZ%2B1HfHfPMhb3nXPnBgbOQaZABrUCO73PGdc%2FMItFC3F%2BsPaGIa8VdtK3mMPRtH0iDK7hNfUKDkUCvQZPXgzDHL3J8RCrSthWD7XTjs6sRScXo8xDrkyEI5C2PKU2aUQd3k2pmezJkwEzODa8AKol6go4LxwSU8m7Ltp7IrcE%2FK0mrBvan%2B4JWv9nO05y3DHIAHxQjGrZpNi2CuU6A23BzRevRxK%2B3oqjN5iPxiDCeZaiT8tpAawrHHAixfKW2jR8Xfuq8Hmwz6kMecpHJJA8np5j%2Fgvom%2BmVTSxUoW%2FnD25oTgr%2F25lP3GQ7a8KaN%2BRb2RuVOtmNqxfwgA1%2Be5kgKjAd1HeZS6a32g37ZS1hT%2BE45NkLTB213o0OUc%2BCK0rlq0nK9K7U6Cy5hN2FHv%2Bs3SOjAKkkBmUqWWUwcUKY5zt97qBDDfn6PABjqkAQYKuXO23GEdJr89s5n%2BrtnMBkyEQGZ9GPuU9VfRR5eAMzMimmOwd1%2BsemiU9xQfakOtUCkQN4WZkMAGnhf0xyfq%2BsP05MIrKDF9sNNycz9CP7w6hJnKM6LFUFoJwtFiHrfkSG8zPFzLosEeJcGrBy6%2F2%2FM4TOHx6Rd1R3T7BjGTbaPElhIdDkR7RwTetNfRrOuLAFg8Vg0g6s1X%2FRkgJ6Mg7jhp&X-Amz-Signature=15309e3689cda5c3fd77320e9cf836a8764df48b5cf16accdf6d98fc57cc0386&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7FVIYP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD27B0Ql9mFPipLDvjH98vetWnY6%2F0JEPg766mVDRR4IQIhANzEBEfr2e81QHtLH9XjuTOtcqRlv%2FyyJRkJVHu13LS8KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvgVJwtKoZ8OIhbj8q3AOa4PkgdR01asRMElJZcpro22CBaHJ8B9q4bSgNr0C1sILve49qHgMrSNzB%2FIRnnS90AFiBo%2BFHC%2BEoYkUHcqj3iEngLp7Jw8XiHLRr4HOEoQaX5RC5KiPdZtdW2AobCNw8w3FdcATJ8ZX%2BLhyfjLF6vzKPwZbQ3J%2BlWCsH1QYhey29%2B1fk1QZwbQZZIW9wpQ5xPWi87szneYZ%2B1HfHfPMhb3nXPnBgbOQaZABrUCO73PGdc%2FMItFC3F%2BsPaGIa8VdtK3mMPRtH0iDK7hNfUKDkUCvQZPXgzDHL3J8RCrSthWD7XTjs6sRScXo8xDrkyEI5C2PKU2aUQd3k2pmezJkwEzODa8AKol6go4LxwSU8m7Ltp7IrcE%2FK0mrBvan%2B4JWv9nO05y3DHIAHxQjGrZpNi2CuU6A23BzRevRxK%2B3oqjN5iPxiDCeZaiT8tpAawrHHAixfKW2jR8Xfuq8Hmwz6kMecpHJJA8np5j%2Fgvom%2BmVTSxUoW%2FnD25oTgr%2F25lP3GQ7a8KaN%2BRb2RuVOtmNqxfwgA1%2Be5kgKjAd1HeZS6a32g37ZS1hT%2BE45NkLTB213o0OUc%2BCK0rlq0nK9K7U6Cy5hN2FHv%2Bs3SOjAKkkBmUqWWUwcUKY5zt97qBDDfn6PABjqkAQYKuXO23GEdJr89s5n%2BrtnMBkyEQGZ9GPuU9VfRR5eAMzMimmOwd1%2BsemiU9xQfakOtUCkQN4WZkMAGnhf0xyfq%2BsP05MIrKDF9sNNycz9CP7w6hJnKM6LFUFoJwtFiHrfkSG8zPFzLosEeJcGrBy6%2F2%2FM4TOHx6Rd1R3T7BjGTbaPElhIdDkR7RwTetNfRrOuLAFg8Vg0g6s1X%2FRkgJ6Mg7jhp&X-Amz-Signature=d4e3505d187e347ec26f73d6216d606021479619c849fc260114bba24991eaef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7FVIYP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD27B0Ql9mFPipLDvjH98vetWnY6%2F0JEPg766mVDRR4IQIhANzEBEfr2e81QHtLH9XjuTOtcqRlv%2FyyJRkJVHu13LS8KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvgVJwtKoZ8OIhbj8q3AOa4PkgdR01asRMElJZcpro22CBaHJ8B9q4bSgNr0C1sILve49qHgMrSNzB%2FIRnnS90AFiBo%2BFHC%2BEoYkUHcqj3iEngLp7Jw8XiHLRr4HOEoQaX5RC5KiPdZtdW2AobCNw8w3FdcATJ8ZX%2BLhyfjLF6vzKPwZbQ3J%2BlWCsH1QYhey29%2B1fk1QZwbQZZIW9wpQ5xPWi87szneYZ%2B1HfHfPMhb3nXPnBgbOQaZABrUCO73PGdc%2FMItFC3F%2BsPaGIa8VdtK3mMPRtH0iDK7hNfUKDkUCvQZPXgzDHL3J8RCrSthWD7XTjs6sRScXo8xDrkyEI5C2PKU2aUQd3k2pmezJkwEzODa8AKol6go4LxwSU8m7Ltp7IrcE%2FK0mrBvan%2B4JWv9nO05y3DHIAHxQjGrZpNi2CuU6A23BzRevRxK%2B3oqjN5iPxiDCeZaiT8tpAawrHHAixfKW2jR8Xfuq8Hmwz6kMecpHJJA8np5j%2Fgvom%2BmVTSxUoW%2FnD25oTgr%2F25lP3GQ7a8KaN%2BRb2RuVOtmNqxfwgA1%2Be5kgKjAd1HeZS6a32g37ZS1hT%2BE45NkLTB213o0OUc%2BCK0rlq0nK9K7U6Cy5hN2FHv%2Bs3SOjAKkkBmUqWWUwcUKY5zt97qBDDfn6PABjqkAQYKuXO23GEdJr89s5n%2BrtnMBkyEQGZ9GPuU9VfRR5eAMzMimmOwd1%2BsemiU9xQfakOtUCkQN4WZkMAGnhf0xyfq%2BsP05MIrKDF9sNNycz9CP7w6hJnKM6LFUFoJwtFiHrfkSG8zPFzLosEeJcGrBy6%2F2%2FM4TOHx6Rd1R3T7BjGTbaPElhIdDkR7RwTetNfRrOuLAFg8Vg0g6s1X%2FRkgJ6Mg7jhp&X-Amz-Signature=8c2c6ce5b78d92899fc0e9b58b6f89c1ee1703659e9e61d3565d717b6b9fce3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7FVIYP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD27B0Ql9mFPipLDvjH98vetWnY6%2F0JEPg766mVDRR4IQIhANzEBEfr2e81QHtLH9XjuTOtcqRlv%2FyyJRkJVHu13LS8KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvgVJwtKoZ8OIhbj8q3AOa4PkgdR01asRMElJZcpro22CBaHJ8B9q4bSgNr0C1sILve49qHgMrSNzB%2FIRnnS90AFiBo%2BFHC%2BEoYkUHcqj3iEngLp7Jw8XiHLRr4HOEoQaX5RC5KiPdZtdW2AobCNw8w3FdcATJ8ZX%2BLhyfjLF6vzKPwZbQ3J%2BlWCsH1QYhey29%2B1fk1QZwbQZZIW9wpQ5xPWi87szneYZ%2B1HfHfPMhb3nXPnBgbOQaZABrUCO73PGdc%2FMItFC3F%2BsPaGIa8VdtK3mMPRtH0iDK7hNfUKDkUCvQZPXgzDHL3J8RCrSthWD7XTjs6sRScXo8xDrkyEI5C2PKU2aUQd3k2pmezJkwEzODa8AKol6go4LxwSU8m7Ltp7IrcE%2FK0mrBvan%2B4JWv9nO05y3DHIAHxQjGrZpNi2CuU6A23BzRevRxK%2B3oqjN5iPxiDCeZaiT8tpAawrHHAixfKW2jR8Xfuq8Hmwz6kMecpHJJA8np5j%2Fgvom%2BmVTSxUoW%2FnD25oTgr%2F25lP3GQ7a8KaN%2BRb2RuVOtmNqxfwgA1%2Be5kgKjAd1HeZS6a32g37ZS1hT%2BE45NkLTB213o0OUc%2BCK0rlq0nK9K7U6Cy5hN2FHv%2Bs3SOjAKkkBmUqWWUwcUKY5zt97qBDDfn6PABjqkAQYKuXO23GEdJr89s5n%2BrtnMBkyEQGZ9GPuU9VfRR5eAMzMimmOwd1%2BsemiU9xQfakOtUCkQN4WZkMAGnhf0xyfq%2BsP05MIrKDF9sNNycz9CP7w6hJnKM6LFUFoJwtFiHrfkSG8zPFzLosEeJcGrBy6%2F2%2FM4TOHx6Rd1R3T7BjGTbaPElhIdDkR7RwTetNfRrOuLAFg8Vg0g6s1X%2FRkgJ6Mg7jhp&X-Amz-Signature=6d37d0eb67263e38afeda88687072b1639d18c44b7a6fcfa05352c52dfc016d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7FVIYP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD27B0Ql9mFPipLDvjH98vetWnY6%2F0JEPg766mVDRR4IQIhANzEBEfr2e81QHtLH9XjuTOtcqRlv%2FyyJRkJVHu13LS8KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvgVJwtKoZ8OIhbj8q3AOa4PkgdR01asRMElJZcpro22CBaHJ8B9q4bSgNr0C1sILve49qHgMrSNzB%2FIRnnS90AFiBo%2BFHC%2BEoYkUHcqj3iEngLp7Jw8XiHLRr4HOEoQaX5RC5KiPdZtdW2AobCNw8w3FdcATJ8ZX%2BLhyfjLF6vzKPwZbQ3J%2BlWCsH1QYhey29%2B1fk1QZwbQZZIW9wpQ5xPWi87szneYZ%2B1HfHfPMhb3nXPnBgbOQaZABrUCO73PGdc%2FMItFC3F%2BsPaGIa8VdtK3mMPRtH0iDK7hNfUKDkUCvQZPXgzDHL3J8RCrSthWD7XTjs6sRScXo8xDrkyEI5C2PKU2aUQd3k2pmezJkwEzODa8AKol6go4LxwSU8m7Ltp7IrcE%2FK0mrBvan%2B4JWv9nO05y3DHIAHxQjGrZpNi2CuU6A23BzRevRxK%2B3oqjN5iPxiDCeZaiT8tpAawrHHAixfKW2jR8Xfuq8Hmwz6kMecpHJJA8np5j%2Fgvom%2BmVTSxUoW%2FnD25oTgr%2F25lP3GQ7a8KaN%2BRb2RuVOtmNqxfwgA1%2Be5kgKjAd1HeZS6a32g37ZS1hT%2BE45NkLTB213o0OUc%2BCK0rlq0nK9K7U6Cy5hN2FHv%2Bs3SOjAKkkBmUqWWUwcUKY5zt97qBDDfn6PABjqkAQYKuXO23GEdJr89s5n%2BrtnMBkyEQGZ9GPuU9VfRR5eAMzMimmOwd1%2BsemiU9xQfakOtUCkQN4WZkMAGnhf0xyfq%2BsP05MIrKDF9sNNycz9CP7w6hJnKM6LFUFoJwtFiHrfkSG8zPFzLosEeJcGrBy6%2F2%2FM4TOHx6Rd1R3T7BjGTbaPElhIdDkR7RwTetNfRrOuLAFg8Vg0g6s1X%2FRkgJ6Mg7jhp&X-Amz-Signature=4ef558c1fd314f5dd2aec5daaca10f63585884559dc359ee1905cb76cbe9b21f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7FVIYP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD27B0Ql9mFPipLDvjH98vetWnY6%2F0JEPg766mVDRR4IQIhANzEBEfr2e81QHtLH9XjuTOtcqRlv%2FyyJRkJVHu13LS8KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvgVJwtKoZ8OIhbj8q3AOa4PkgdR01asRMElJZcpro22CBaHJ8B9q4bSgNr0C1sILve49qHgMrSNzB%2FIRnnS90AFiBo%2BFHC%2BEoYkUHcqj3iEngLp7Jw8XiHLRr4HOEoQaX5RC5KiPdZtdW2AobCNw8w3FdcATJ8ZX%2BLhyfjLF6vzKPwZbQ3J%2BlWCsH1QYhey29%2B1fk1QZwbQZZIW9wpQ5xPWi87szneYZ%2B1HfHfPMhb3nXPnBgbOQaZABrUCO73PGdc%2FMItFC3F%2BsPaGIa8VdtK3mMPRtH0iDK7hNfUKDkUCvQZPXgzDHL3J8RCrSthWD7XTjs6sRScXo8xDrkyEI5C2PKU2aUQd3k2pmezJkwEzODa8AKol6go4LxwSU8m7Ltp7IrcE%2FK0mrBvan%2B4JWv9nO05y3DHIAHxQjGrZpNi2CuU6A23BzRevRxK%2B3oqjN5iPxiDCeZaiT8tpAawrHHAixfKW2jR8Xfuq8Hmwz6kMecpHJJA8np5j%2Fgvom%2BmVTSxUoW%2FnD25oTgr%2F25lP3GQ7a8KaN%2BRb2RuVOtmNqxfwgA1%2Be5kgKjAd1HeZS6a32g37ZS1hT%2BE45NkLTB213o0OUc%2BCK0rlq0nK9K7U6Cy5hN2FHv%2Bs3SOjAKkkBmUqWWUwcUKY5zt97qBDDfn6PABjqkAQYKuXO23GEdJr89s5n%2BrtnMBkyEQGZ9GPuU9VfRR5eAMzMimmOwd1%2BsemiU9xQfakOtUCkQN4WZkMAGnhf0xyfq%2BsP05MIrKDF9sNNycz9CP7w6hJnKM6LFUFoJwtFiHrfkSG8zPFzLosEeJcGrBy6%2F2%2FM4TOHx6Rd1R3T7BjGTbaPElhIdDkR7RwTetNfRrOuLAFg8Vg0g6s1X%2FRkgJ6Mg7jhp&X-Amz-Signature=57982948b478099f326dd339ca264113f6f5078f8ed5e77d1491df886b55d2a2&X-Amz-SignedHeaders=host&x-id=GetObject)
