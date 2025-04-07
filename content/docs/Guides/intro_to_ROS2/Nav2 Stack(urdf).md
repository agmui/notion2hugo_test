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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGS2HHX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJikER%2BrW8i%2FbGLSh1gqQaU1lcTZqbz1IqLxwFx3b8UQIhAIe3AFrKXiYWUcFTriqWaktUikBapf7j%2B2%2B4hL1cZ7STKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcF8kwbxc6g1Yy%2FR4q3APcTBJHXaAGeqgJbFyOqXSBbHx%2BzS7MsmrwKB60rNPVSE%2FMgE7cwxMnsG%2BkvZEMIuYLX2sRVzAawFlLBuCaSgdmUIIPvFiqPuhja6WJzeGa1AXGKHDTeOvkbo1ZYuQkyq9eQVrPRt%2FLvCvxY9AiV6wERO%2FmRs47Duc1KSCUbMNjWZghcsH6nY5AHIioXyJLywZ3f4q3ct5oZb0Jpsa7aZlkRW5wQIJYmVDtZBIDiy2iWO4rweWw985IuoSetk071iJMsTyum0j%2FekD7su2JxZ%2B3OcYYBc60ZL3e2D1ET753Lr%2BUK5IBmkJdwGfNgQmTOKf5JeSjHfHTHcsRM2pL4i%2FUZHYXEX7HM3wullBOcr8QtmD8v35pchyXXEh22v2L86GSi9KtWEjKjIKn06XEfW7jmLRmYi%2BKZH11Fi6NnoLZWBjVVWi8YBDUfThjRsayqRn7FWAeu%2FDWkFSN26anmcwyCon5v0uDjC6s2Bt7YGOOoF8VoKCX%2FV1v6nK0HrlWcjFp9y%2BUCymF4nuhuvbnAmGFAbOV7QQqyKMtqLtfso5VQK6nX%2B3SM0k5aYUovu9qYssBtv0A59rpTJz%2B577TmB7eTB9%2FkhWmTWXn0AHJGtdElzxaGRrJoyOTgBsDkDDno9C%2FBjqkATHOq1wD5RVmQ%2B05cC39EdtTaGB4CGqeRf9vzIAecx8tEIns9kcLGKrb4%2B2rZjqIKFOa0PX%2Fpagih3ZO3odXgs9EtiREuTSHDerR4zQjzxB59koQQgKVZclhdBUwfQOEuSbSaIZDrDlg5bvsRhMMmgE8fB71hhPSUCL0YSH2G3L0%2BU3pzZUCq1pay09QQcDtTvTOKOPKWpqZ2Po2MNMHzyC%2BnZh7&X-Amz-Signature=9b1fbce6465b0cb0c967fd5eeaa2aecde911f24e95c228f94e8e44fc883fa332&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGS2HHX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJikER%2BrW8i%2FbGLSh1gqQaU1lcTZqbz1IqLxwFx3b8UQIhAIe3AFrKXiYWUcFTriqWaktUikBapf7j%2B2%2B4hL1cZ7STKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcF8kwbxc6g1Yy%2FR4q3APcTBJHXaAGeqgJbFyOqXSBbHx%2BzS7MsmrwKB60rNPVSE%2FMgE7cwxMnsG%2BkvZEMIuYLX2sRVzAawFlLBuCaSgdmUIIPvFiqPuhja6WJzeGa1AXGKHDTeOvkbo1ZYuQkyq9eQVrPRt%2FLvCvxY9AiV6wERO%2FmRs47Duc1KSCUbMNjWZghcsH6nY5AHIioXyJLywZ3f4q3ct5oZb0Jpsa7aZlkRW5wQIJYmVDtZBIDiy2iWO4rweWw985IuoSetk071iJMsTyum0j%2FekD7su2JxZ%2B3OcYYBc60ZL3e2D1ET753Lr%2BUK5IBmkJdwGfNgQmTOKf5JeSjHfHTHcsRM2pL4i%2FUZHYXEX7HM3wullBOcr8QtmD8v35pchyXXEh22v2L86GSi9KtWEjKjIKn06XEfW7jmLRmYi%2BKZH11Fi6NnoLZWBjVVWi8YBDUfThjRsayqRn7FWAeu%2FDWkFSN26anmcwyCon5v0uDjC6s2Bt7YGOOoF8VoKCX%2FV1v6nK0HrlWcjFp9y%2BUCymF4nuhuvbnAmGFAbOV7QQqyKMtqLtfso5VQK6nX%2B3SM0k5aYUovu9qYssBtv0A59rpTJz%2B577TmB7eTB9%2FkhWmTWXn0AHJGtdElzxaGRrJoyOTgBsDkDDno9C%2FBjqkATHOq1wD5RVmQ%2B05cC39EdtTaGB4CGqeRf9vzIAecx8tEIns9kcLGKrb4%2B2rZjqIKFOa0PX%2Fpagih3ZO3odXgs9EtiREuTSHDerR4zQjzxB59koQQgKVZclhdBUwfQOEuSbSaIZDrDlg5bvsRhMMmgE8fB71hhPSUCL0YSH2G3L0%2BU3pzZUCq1pay09QQcDtTvTOKOPKWpqZ2Po2MNMHzyC%2BnZh7&X-Amz-Signature=12975dc93d6442d395e986ca868cb6b723a651cacc85b9a19f4c753b4633db2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGS2HHX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJikER%2BrW8i%2FbGLSh1gqQaU1lcTZqbz1IqLxwFx3b8UQIhAIe3AFrKXiYWUcFTriqWaktUikBapf7j%2B2%2B4hL1cZ7STKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcF8kwbxc6g1Yy%2FR4q3APcTBJHXaAGeqgJbFyOqXSBbHx%2BzS7MsmrwKB60rNPVSE%2FMgE7cwxMnsG%2BkvZEMIuYLX2sRVzAawFlLBuCaSgdmUIIPvFiqPuhja6WJzeGa1AXGKHDTeOvkbo1ZYuQkyq9eQVrPRt%2FLvCvxY9AiV6wERO%2FmRs47Duc1KSCUbMNjWZghcsH6nY5AHIioXyJLywZ3f4q3ct5oZb0Jpsa7aZlkRW5wQIJYmVDtZBIDiy2iWO4rweWw985IuoSetk071iJMsTyum0j%2FekD7su2JxZ%2B3OcYYBc60ZL3e2D1ET753Lr%2BUK5IBmkJdwGfNgQmTOKf5JeSjHfHTHcsRM2pL4i%2FUZHYXEX7HM3wullBOcr8QtmD8v35pchyXXEh22v2L86GSi9KtWEjKjIKn06XEfW7jmLRmYi%2BKZH11Fi6NnoLZWBjVVWi8YBDUfThjRsayqRn7FWAeu%2FDWkFSN26anmcwyCon5v0uDjC6s2Bt7YGOOoF8VoKCX%2FV1v6nK0HrlWcjFp9y%2BUCymF4nuhuvbnAmGFAbOV7QQqyKMtqLtfso5VQK6nX%2B3SM0k5aYUovu9qYssBtv0A59rpTJz%2B577TmB7eTB9%2FkhWmTWXn0AHJGtdElzxaGRrJoyOTgBsDkDDno9C%2FBjqkATHOq1wD5RVmQ%2B05cC39EdtTaGB4CGqeRf9vzIAecx8tEIns9kcLGKrb4%2B2rZjqIKFOa0PX%2Fpagih3ZO3odXgs9EtiREuTSHDerR4zQjzxB59koQQgKVZclhdBUwfQOEuSbSaIZDrDlg5bvsRhMMmgE8fB71hhPSUCL0YSH2G3L0%2BU3pzZUCq1pay09QQcDtTvTOKOPKWpqZ2Po2MNMHzyC%2BnZh7&X-Amz-Signature=b8e7c8e5b1a29ccc13886604ed8b1ce46671a31db8d653e22930f86041a99cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGS2HHX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJikER%2BrW8i%2FbGLSh1gqQaU1lcTZqbz1IqLxwFx3b8UQIhAIe3AFrKXiYWUcFTriqWaktUikBapf7j%2B2%2B4hL1cZ7STKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcF8kwbxc6g1Yy%2FR4q3APcTBJHXaAGeqgJbFyOqXSBbHx%2BzS7MsmrwKB60rNPVSE%2FMgE7cwxMnsG%2BkvZEMIuYLX2sRVzAawFlLBuCaSgdmUIIPvFiqPuhja6WJzeGa1AXGKHDTeOvkbo1ZYuQkyq9eQVrPRt%2FLvCvxY9AiV6wERO%2FmRs47Duc1KSCUbMNjWZghcsH6nY5AHIioXyJLywZ3f4q3ct5oZb0Jpsa7aZlkRW5wQIJYmVDtZBIDiy2iWO4rweWw985IuoSetk071iJMsTyum0j%2FekD7su2JxZ%2B3OcYYBc60ZL3e2D1ET753Lr%2BUK5IBmkJdwGfNgQmTOKf5JeSjHfHTHcsRM2pL4i%2FUZHYXEX7HM3wullBOcr8QtmD8v35pchyXXEh22v2L86GSi9KtWEjKjIKn06XEfW7jmLRmYi%2BKZH11Fi6NnoLZWBjVVWi8YBDUfThjRsayqRn7FWAeu%2FDWkFSN26anmcwyCon5v0uDjC6s2Bt7YGOOoF8VoKCX%2FV1v6nK0HrlWcjFp9y%2BUCymF4nuhuvbnAmGFAbOV7QQqyKMtqLtfso5VQK6nX%2B3SM0k5aYUovu9qYssBtv0A59rpTJz%2B577TmB7eTB9%2FkhWmTWXn0AHJGtdElzxaGRrJoyOTgBsDkDDno9C%2FBjqkATHOq1wD5RVmQ%2B05cC39EdtTaGB4CGqeRf9vzIAecx8tEIns9kcLGKrb4%2B2rZjqIKFOa0PX%2Fpagih3ZO3odXgs9EtiREuTSHDerR4zQjzxB59koQQgKVZclhdBUwfQOEuSbSaIZDrDlg5bvsRhMMmgE8fB71hhPSUCL0YSH2G3L0%2BU3pzZUCq1pay09QQcDtTvTOKOPKWpqZ2Po2MNMHzyC%2BnZh7&X-Amz-Signature=38a838fddd14916ba4f290a6142b3e007c3ea6fa48a4fed7062279f52043d118&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGS2HHX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJikER%2BrW8i%2FbGLSh1gqQaU1lcTZqbz1IqLxwFx3b8UQIhAIe3AFrKXiYWUcFTriqWaktUikBapf7j%2B2%2B4hL1cZ7STKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcF8kwbxc6g1Yy%2FR4q3APcTBJHXaAGeqgJbFyOqXSBbHx%2BzS7MsmrwKB60rNPVSE%2FMgE7cwxMnsG%2BkvZEMIuYLX2sRVzAawFlLBuCaSgdmUIIPvFiqPuhja6WJzeGa1AXGKHDTeOvkbo1ZYuQkyq9eQVrPRt%2FLvCvxY9AiV6wERO%2FmRs47Duc1KSCUbMNjWZghcsH6nY5AHIioXyJLywZ3f4q3ct5oZb0Jpsa7aZlkRW5wQIJYmVDtZBIDiy2iWO4rweWw985IuoSetk071iJMsTyum0j%2FekD7su2JxZ%2B3OcYYBc60ZL3e2D1ET753Lr%2BUK5IBmkJdwGfNgQmTOKf5JeSjHfHTHcsRM2pL4i%2FUZHYXEX7HM3wullBOcr8QtmD8v35pchyXXEh22v2L86GSi9KtWEjKjIKn06XEfW7jmLRmYi%2BKZH11Fi6NnoLZWBjVVWi8YBDUfThjRsayqRn7FWAeu%2FDWkFSN26anmcwyCon5v0uDjC6s2Bt7YGOOoF8VoKCX%2FV1v6nK0HrlWcjFp9y%2BUCymF4nuhuvbnAmGFAbOV7QQqyKMtqLtfso5VQK6nX%2B3SM0k5aYUovu9qYssBtv0A59rpTJz%2B577TmB7eTB9%2FkhWmTWXn0AHJGtdElzxaGRrJoyOTgBsDkDDno9C%2FBjqkATHOq1wD5RVmQ%2B05cC39EdtTaGB4CGqeRf9vzIAecx8tEIns9kcLGKrb4%2B2rZjqIKFOa0PX%2Fpagih3ZO3odXgs9EtiREuTSHDerR4zQjzxB59koQQgKVZclhdBUwfQOEuSbSaIZDrDlg5bvsRhMMmgE8fB71hhPSUCL0YSH2G3L0%2BU3pzZUCq1pay09QQcDtTvTOKOPKWpqZ2Po2MNMHzyC%2BnZh7&X-Amz-Signature=b6b1ea43f496f646769d3392d8284fc34f5338d5f7436722865c1eaac4b5ef37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUGS2HHX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJikER%2BrW8i%2FbGLSh1gqQaU1lcTZqbz1IqLxwFx3b8UQIhAIe3AFrKXiYWUcFTriqWaktUikBapf7j%2B2%2B4hL1cZ7STKv8DCGMQABoMNjM3NDIzMTgzODA1IgwcF8kwbxc6g1Yy%2FR4q3APcTBJHXaAGeqgJbFyOqXSBbHx%2BzS7MsmrwKB60rNPVSE%2FMgE7cwxMnsG%2BkvZEMIuYLX2sRVzAawFlLBuCaSgdmUIIPvFiqPuhja6WJzeGa1AXGKHDTeOvkbo1ZYuQkyq9eQVrPRt%2FLvCvxY9AiV6wERO%2FmRs47Duc1KSCUbMNjWZghcsH6nY5AHIioXyJLywZ3f4q3ct5oZb0Jpsa7aZlkRW5wQIJYmVDtZBIDiy2iWO4rweWw985IuoSetk071iJMsTyum0j%2FekD7su2JxZ%2B3OcYYBc60ZL3e2D1ET753Lr%2BUK5IBmkJdwGfNgQmTOKf5JeSjHfHTHcsRM2pL4i%2FUZHYXEX7HM3wullBOcr8QtmD8v35pchyXXEh22v2L86GSi9KtWEjKjIKn06XEfW7jmLRmYi%2BKZH11Fi6NnoLZWBjVVWi8YBDUfThjRsayqRn7FWAeu%2FDWkFSN26anmcwyCon5v0uDjC6s2Bt7YGOOoF8VoKCX%2FV1v6nK0HrlWcjFp9y%2BUCymF4nuhuvbnAmGFAbOV7QQqyKMtqLtfso5VQK6nX%2B3SM0k5aYUovu9qYssBtv0A59rpTJz%2B577TmB7eTB9%2FkhWmTWXn0AHJGtdElzxaGRrJoyOTgBsDkDDno9C%2FBjqkATHOq1wD5RVmQ%2B05cC39EdtTaGB4CGqeRf9vzIAecx8tEIns9kcLGKrb4%2B2rZjqIKFOa0PX%2Fpagih3ZO3odXgs9EtiREuTSHDerR4zQjzxB59koQQgKVZclhdBUwfQOEuSbSaIZDrDlg5bvsRhMMmgE8fB71hhPSUCL0YSH2G3L0%2BU3pzZUCq1pay09QQcDtTvTOKOPKWpqZ2Po2MNMHzyC%2BnZh7&X-Amz-Signature=5eba90dfc025db8b3a42073ab6ffed3b9e6d1128df2cee81db0415fdd001270f&X-Amz-SignedHeaders=host&x-id=GetObject)
