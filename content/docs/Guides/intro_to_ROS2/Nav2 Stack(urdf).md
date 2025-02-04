---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWOIEQ5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBPl5BMzgtMJTebIHgwkFzMkqb8aZ5YtH1%2BSrZDcjsMAIhAMsSV7GFmVusW8Qv%2FwnTzRtQn68DO7GxGaiBXC8lWttbKv8DCCoQABoMNjM3NDIzMTgzODA1Igy7oZv3AIdjDMB%2BE4oq3ANF3Lw8CdwXjVV9Ln5C9dnLplGekY6Bx9WE1W6SK5KlvUHxKO%2BiorJmyRwLXX6dHWv8PII5siYjtQ%2BrWrPVjOthvBSwkGYubdduyczXVE1SEdnHgY5ZmO2iuXbRKor0RhJZimu0XotfS%2FBJM%2BfhORsbJujuPdxLZUc4LVBWBCshY5ZdmkFS1zhnEE5jjkIwDfiLAwqhVcztcIMFd7I3zEXG2lbJ%2FCu2iEmDNfPz4KWuhzO8nsW53eel%2BcB7hKu8KyyTTeR1zghjByMa1KqgW6Df5Ys5ayWliuzy1lClbUaQ4AfV%2B5Mxrh56WrNkBpeTpjFgklYZBvFe44vkYaiwTZBor3i1Omi4HY0r%2Fo%2BuOqH6tjB%2FqrLjA%2BwIukLyYAS1Da3AOBFjvE08Vmno%2Bbr5cWoAdkZX0O3%2Fyj4LFwbmb3WR6ywHxxXWa%2FyTg32Nror9epNdLYPGm0nZHtpgXBxnK7bMzq%2Flm%2FXd28k%2B%2FBJXUjrwx4EDmgoYrJj2b3MUx49WfVO4PSL4VKVyTo25l7MyYP36iCYaaAbDDxA9kapk23vg2oAqKus3%2FAx7iAb4%2BvElht8e%2F0pw54OWjlS5pnY1kK6XTTsF4UQMfIOnup9MNkrpKj2yeqs%2FpUBLHrGobTDzr4e9BjqkAZrkZjUDr54WJogrBazMnf6k5jXoVBYRLf7XpxDf%2BiDy31hrmB85R3uZB0aRUNkkupknrPciED9GdNZ6BDd6zjnh%2F6mql0JGP5S%2FFXWYlFSsYKxrwuOwvp%2FnGICIj85CUM56bHF%2FxfBU6RkKv9bFvStLyj9GsSKoyf%2BbJX%2FdNZluFNw9ZuaXxZeOOVbKl58jXsn4QZoRB8QjyHJylL4Y3bb06IVm&X-Amz-Signature=02b6be327386eaf6d26945be66d6ba1b87362765fb14798ebaa13d469f755c85&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWOIEQ5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBPl5BMzgtMJTebIHgwkFzMkqb8aZ5YtH1%2BSrZDcjsMAIhAMsSV7GFmVusW8Qv%2FwnTzRtQn68DO7GxGaiBXC8lWttbKv8DCCoQABoMNjM3NDIzMTgzODA1Igy7oZv3AIdjDMB%2BE4oq3ANF3Lw8CdwXjVV9Ln5C9dnLplGekY6Bx9WE1W6SK5KlvUHxKO%2BiorJmyRwLXX6dHWv8PII5siYjtQ%2BrWrPVjOthvBSwkGYubdduyczXVE1SEdnHgY5ZmO2iuXbRKor0RhJZimu0XotfS%2FBJM%2BfhORsbJujuPdxLZUc4LVBWBCshY5ZdmkFS1zhnEE5jjkIwDfiLAwqhVcztcIMFd7I3zEXG2lbJ%2FCu2iEmDNfPz4KWuhzO8nsW53eel%2BcB7hKu8KyyTTeR1zghjByMa1KqgW6Df5Ys5ayWliuzy1lClbUaQ4AfV%2B5Mxrh56WrNkBpeTpjFgklYZBvFe44vkYaiwTZBor3i1Omi4HY0r%2Fo%2BuOqH6tjB%2FqrLjA%2BwIukLyYAS1Da3AOBFjvE08Vmno%2Bbr5cWoAdkZX0O3%2Fyj4LFwbmb3WR6ywHxxXWa%2FyTg32Nror9epNdLYPGm0nZHtpgXBxnK7bMzq%2Flm%2FXd28k%2B%2FBJXUjrwx4EDmgoYrJj2b3MUx49WfVO4PSL4VKVyTo25l7MyYP36iCYaaAbDDxA9kapk23vg2oAqKus3%2FAx7iAb4%2BvElht8e%2F0pw54OWjlS5pnY1kK6XTTsF4UQMfIOnup9MNkrpKj2yeqs%2FpUBLHrGobTDzr4e9BjqkAZrkZjUDr54WJogrBazMnf6k5jXoVBYRLf7XpxDf%2BiDy31hrmB85R3uZB0aRUNkkupknrPciED9GdNZ6BDd6zjnh%2F6mql0JGP5S%2FFXWYlFSsYKxrwuOwvp%2FnGICIj85CUM56bHF%2FxfBU6RkKv9bFvStLyj9GsSKoyf%2BbJX%2FdNZluFNw9ZuaXxZeOOVbKl58jXsn4QZoRB8QjyHJylL4Y3bb06IVm&X-Amz-Signature=c357de8ac69cdc438274e283d6668410905ab10dc54cda6913f7d1ec09c4b74e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWOIEQ5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBPl5BMzgtMJTebIHgwkFzMkqb8aZ5YtH1%2BSrZDcjsMAIhAMsSV7GFmVusW8Qv%2FwnTzRtQn68DO7GxGaiBXC8lWttbKv8DCCoQABoMNjM3NDIzMTgzODA1Igy7oZv3AIdjDMB%2BE4oq3ANF3Lw8CdwXjVV9Ln5C9dnLplGekY6Bx9WE1W6SK5KlvUHxKO%2BiorJmyRwLXX6dHWv8PII5siYjtQ%2BrWrPVjOthvBSwkGYubdduyczXVE1SEdnHgY5ZmO2iuXbRKor0RhJZimu0XotfS%2FBJM%2BfhORsbJujuPdxLZUc4LVBWBCshY5ZdmkFS1zhnEE5jjkIwDfiLAwqhVcztcIMFd7I3zEXG2lbJ%2FCu2iEmDNfPz4KWuhzO8nsW53eel%2BcB7hKu8KyyTTeR1zghjByMa1KqgW6Df5Ys5ayWliuzy1lClbUaQ4AfV%2B5Mxrh56WrNkBpeTpjFgklYZBvFe44vkYaiwTZBor3i1Omi4HY0r%2Fo%2BuOqH6tjB%2FqrLjA%2BwIukLyYAS1Da3AOBFjvE08Vmno%2Bbr5cWoAdkZX0O3%2Fyj4LFwbmb3WR6ywHxxXWa%2FyTg32Nror9epNdLYPGm0nZHtpgXBxnK7bMzq%2Flm%2FXd28k%2B%2FBJXUjrwx4EDmgoYrJj2b3MUx49WfVO4PSL4VKVyTo25l7MyYP36iCYaaAbDDxA9kapk23vg2oAqKus3%2FAx7iAb4%2BvElht8e%2F0pw54OWjlS5pnY1kK6XTTsF4UQMfIOnup9MNkrpKj2yeqs%2FpUBLHrGobTDzr4e9BjqkAZrkZjUDr54WJogrBazMnf6k5jXoVBYRLf7XpxDf%2BiDy31hrmB85R3uZB0aRUNkkupknrPciED9GdNZ6BDd6zjnh%2F6mql0JGP5S%2FFXWYlFSsYKxrwuOwvp%2FnGICIj85CUM56bHF%2FxfBU6RkKv9bFvStLyj9GsSKoyf%2BbJX%2FdNZluFNw9ZuaXxZeOOVbKl58jXsn4QZoRB8QjyHJylL4Y3bb06IVm&X-Amz-Signature=f98c46b9258cf2d4efc06121d34324ed398ce810d960cf26a731025df5ff4fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWOIEQ5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBPl5BMzgtMJTebIHgwkFzMkqb8aZ5YtH1%2BSrZDcjsMAIhAMsSV7GFmVusW8Qv%2FwnTzRtQn68DO7GxGaiBXC8lWttbKv8DCCoQABoMNjM3NDIzMTgzODA1Igy7oZv3AIdjDMB%2BE4oq3ANF3Lw8CdwXjVV9Ln5C9dnLplGekY6Bx9WE1W6SK5KlvUHxKO%2BiorJmyRwLXX6dHWv8PII5siYjtQ%2BrWrPVjOthvBSwkGYubdduyczXVE1SEdnHgY5ZmO2iuXbRKor0RhJZimu0XotfS%2FBJM%2BfhORsbJujuPdxLZUc4LVBWBCshY5ZdmkFS1zhnEE5jjkIwDfiLAwqhVcztcIMFd7I3zEXG2lbJ%2FCu2iEmDNfPz4KWuhzO8nsW53eel%2BcB7hKu8KyyTTeR1zghjByMa1KqgW6Df5Ys5ayWliuzy1lClbUaQ4AfV%2B5Mxrh56WrNkBpeTpjFgklYZBvFe44vkYaiwTZBor3i1Omi4HY0r%2Fo%2BuOqH6tjB%2FqrLjA%2BwIukLyYAS1Da3AOBFjvE08Vmno%2Bbr5cWoAdkZX0O3%2Fyj4LFwbmb3WR6ywHxxXWa%2FyTg32Nror9epNdLYPGm0nZHtpgXBxnK7bMzq%2Flm%2FXd28k%2B%2FBJXUjrwx4EDmgoYrJj2b3MUx49WfVO4PSL4VKVyTo25l7MyYP36iCYaaAbDDxA9kapk23vg2oAqKus3%2FAx7iAb4%2BvElht8e%2F0pw54OWjlS5pnY1kK6XTTsF4UQMfIOnup9MNkrpKj2yeqs%2FpUBLHrGobTDzr4e9BjqkAZrkZjUDr54WJogrBazMnf6k5jXoVBYRLf7XpxDf%2BiDy31hrmB85R3uZB0aRUNkkupknrPciED9GdNZ6BDd6zjnh%2F6mql0JGP5S%2FFXWYlFSsYKxrwuOwvp%2FnGICIj85CUM56bHF%2FxfBU6RkKv9bFvStLyj9GsSKoyf%2BbJX%2FdNZluFNw9ZuaXxZeOOVbKl58jXsn4QZoRB8QjyHJylL4Y3bb06IVm&X-Amz-Signature=3232df4e895b4327fc7e008e1f152ef1d985554a7c11d7ca0040a6448cb0c1df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWOIEQ5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBPl5BMzgtMJTebIHgwkFzMkqb8aZ5YtH1%2BSrZDcjsMAIhAMsSV7GFmVusW8Qv%2FwnTzRtQn68DO7GxGaiBXC8lWttbKv8DCCoQABoMNjM3NDIzMTgzODA1Igy7oZv3AIdjDMB%2BE4oq3ANF3Lw8CdwXjVV9Ln5C9dnLplGekY6Bx9WE1W6SK5KlvUHxKO%2BiorJmyRwLXX6dHWv8PII5siYjtQ%2BrWrPVjOthvBSwkGYubdduyczXVE1SEdnHgY5ZmO2iuXbRKor0RhJZimu0XotfS%2FBJM%2BfhORsbJujuPdxLZUc4LVBWBCshY5ZdmkFS1zhnEE5jjkIwDfiLAwqhVcztcIMFd7I3zEXG2lbJ%2FCu2iEmDNfPz4KWuhzO8nsW53eel%2BcB7hKu8KyyTTeR1zghjByMa1KqgW6Df5Ys5ayWliuzy1lClbUaQ4AfV%2B5Mxrh56WrNkBpeTpjFgklYZBvFe44vkYaiwTZBor3i1Omi4HY0r%2Fo%2BuOqH6tjB%2FqrLjA%2BwIukLyYAS1Da3AOBFjvE08Vmno%2Bbr5cWoAdkZX0O3%2Fyj4LFwbmb3WR6ywHxxXWa%2FyTg32Nror9epNdLYPGm0nZHtpgXBxnK7bMzq%2Flm%2FXd28k%2B%2FBJXUjrwx4EDmgoYrJj2b3MUx49WfVO4PSL4VKVyTo25l7MyYP36iCYaaAbDDxA9kapk23vg2oAqKus3%2FAx7iAb4%2BvElht8e%2F0pw54OWjlS5pnY1kK6XTTsF4UQMfIOnup9MNkrpKj2yeqs%2FpUBLHrGobTDzr4e9BjqkAZrkZjUDr54WJogrBazMnf6k5jXoVBYRLf7XpxDf%2BiDy31hrmB85R3uZB0aRUNkkupknrPciED9GdNZ6BDd6zjnh%2F6mql0JGP5S%2FFXWYlFSsYKxrwuOwvp%2FnGICIj85CUM56bHF%2FxfBU6RkKv9bFvStLyj9GsSKoyf%2BbJX%2FdNZluFNw9ZuaXxZeOOVbKl58jXsn4QZoRB8QjyHJylL4Y3bb06IVm&X-Amz-Signature=1c540a61e85d573d598a3c36d0c42fbb1981dfe8850726a09ef12b4fec6033f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWOIEQ5%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBPl5BMzgtMJTebIHgwkFzMkqb8aZ5YtH1%2BSrZDcjsMAIhAMsSV7GFmVusW8Qv%2FwnTzRtQn68DO7GxGaiBXC8lWttbKv8DCCoQABoMNjM3NDIzMTgzODA1Igy7oZv3AIdjDMB%2BE4oq3ANF3Lw8CdwXjVV9Ln5C9dnLplGekY6Bx9WE1W6SK5KlvUHxKO%2BiorJmyRwLXX6dHWv8PII5siYjtQ%2BrWrPVjOthvBSwkGYubdduyczXVE1SEdnHgY5ZmO2iuXbRKor0RhJZimu0XotfS%2FBJM%2BfhORsbJujuPdxLZUc4LVBWBCshY5ZdmkFS1zhnEE5jjkIwDfiLAwqhVcztcIMFd7I3zEXG2lbJ%2FCu2iEmDNfPz4KWuhzO8nsW53eel%2BcB7hKu8KyyTTeR1zghjByMa1KqgW6Df5Ys5ayWliuzy1lClbUaQ4AfV%2B5Mxrh56WrNkBpeTpjFgklYZBvFe44vkYaiwTZBor3i1Omi4HY0r%2Fo%2BuOqH6tjB%2FqrLjA%2BwIukLyYAS1Da3AOBFjvE08Vmno%2Bbr5cWoAdkZX0O3%2Fyj4LFwbmb3WR6ywHxxXWa%2FyTg32Nror9epNdLYPGm0nZHtpgXBxnK7bMzq%2Flm%2FXd28k%2B%2FBJXUjrwx4EDmgoYrJj2b3MUx49WfVO4PSL4VKVyTo25l7MyYP36iCYaaAbDDxA9kapk23vg2oAqKus3%2FAx7iAb4%2BvElht8e%2F0pw54OWjlS5pnY1kK6XTTsF4UQMfIOnup9MNkrpKj2yeqs%2FpUBLHrGobTDzr4e9BjqkAZrkZjUDr54WJogrBazMnf6k5jXoVBYRLf7XpxDf%2BiDy31hrmB85R3uZB0aRUNkkupknrPciED9GdNZ6BDd6zjnh%2F6mql0JGP5S%2FFXWYlFSsYKxrwuOwvp%2FnGICIj85CUM56bHF%2FxfBU6RkKv9bFvStLyj9GsSKoyf%2BbJX%2FdNZluFNw9ZuaXxZeOOVbKl58jXsn4QZoRB8QjyHJylL4Y3bb06IVm&X-Amz-Signature=a794e0a92aceb6d15451b74147e6c51e207cabf63de015ac96d6fffdb6ecdce3&X-Amz-SignedHeaders=host&x-id=GetObject)
