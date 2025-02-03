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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIKRJ4C%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDv4BasrH5UGX5eXy4fL58J8mvbADrRcII%2FXS%2B4Drh7OgIhAK%2F98dmQBRX5xw0gAAi7hmB3bMaVJ%2FxIS72O5ylXUORwKv8DCBwQABoMNjM3NDIzMTgzODA1IgzY3qiEPmd5pGgb5kAq3ANWc3WIUaUl06cftr3m9OUopLLe3rJjByFG9oQSpHTOplGjY9hq0tGN%2BUfYOOS6dzhE%2FlVSsItqd3Xk7Z4qLFebbobi6fFufuESQcq4vofyTO0AMF%2BieW%2BMzvZ0JcxKHJtinjTz%2BhD1fiW%2By%2BqJotQv%2B9Jf0WerdMEm6pUGLpIiIV0yokXJ734sun94Wn91X0QKXAJhhTYoXZSASMt5YXJCTriGkaW7vZttXtn1gddlO5OeMxPPz2%2FitO6xziq%2FwzeyhwuchGcUO8pVQf%2BXWk59ihkKa97ExgZJ86jfoWM53GlsZNGRBxVVOdCveJSF2sc%2B52zfd5ZMMQqtX1%2BR9YjjWElAj1mW9hqwqElTWeGHICLNmL7Y%2FqyEGaZjzKLg6kUvpFDyiTEVJb34TpMXsxsFKOUGV%2BxiJ4%2F1uAJW5TTh%2F5HjuaglO%2F21JVOo%2BqnaYMzg4WKpBv%2FIDpOlhHSdeKSL%2FJ%2BbA9sAv%2B33To32XNmGQytw4WQewALVkrtfR9HS7MQNRM6JG3IerMhTviIXMhE%2BNCaLntlRPrfb9W%2Fc8o8PWpaENW6K9PIsMhERnOyPuwDYNeWimEvgHB%2FnCEGp0xRAEnDzjAnwwAlNtOh2KQ8vzMqqDVFwZ%2Fi1PhLQYTCaooS9BjqkAYoCrNrLDW6Ei%2FIzg%2FQ%2BfTLMqsDMhngNsPUFNM171rhPOzs4f00jRMYUfa49x5amYg64fW921xwCKphxGH8jyCwXswWyYAxlkiJrHNwkBs%2BYrftO0jyuHSh922BUo4%2Fqv6uIt9f1Gfx0KHmq9kCkPKCLEYzVEekPwC86PjgWzO7Q7CRKtCFWCmXAyfxX4CvbGbQSHa%2FsefPf%2BXuMtVyk7tO4qGmt&X-Amz-Signature=f77a3b09ac27f93f0606c108dfeaf585e36aefc14b075d03603809817662162c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIKRJ4C%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDv4BasrH5UGX5eXy4fL58J8mvbADrRcII%2FXS%2B4Drh7OgIhAK%2F98dmQBRX5xw0gAAi7hmB3bMaVJ%2FxIS72O5ylXUORwKv8DCBwQABoMNjM3NDIzMTgzODA1IgzY3qiEPmd5pGgb5kAq3ANWc3WIUaUl06cftr3m9OUopLLe3rJjByFG9oQSpHTOplGjY9hq0tGN%2BUfYOOS6dzhE%2FlVSsItqd3Xk7Z4qLFebbobi6fFufuESQcq4vofyTO0AMF%2BieW%2BMzvZ0JcxKHJtinjTz%2BhD1fiW%2By%2BqJotQv%2B9Jf0WerdMEm6pUGLpIiIV0yokXJ734sun94Wn91X0QKXAJhhTYoXZSASMt5YXJCTriGkaW7vZttXtn1gddlO5OeMxPPz2%2FitO6xziq%2FwzeyhwuchGcUO8pVQf%2BXWk59ihkKa97ExgZJ86jfoWM53GlsZNGRBxVVOdCveJSF2sc%2B52zfd5ZMMQqtX1%2BR9YjjWElAj1mW9hqwqElTWeGHICLNmL7Y%2FqyEGaZjzKLg6kUvpFDyiTEVJb34TpMXsxsFKOUGV%2BxiJ4%2F1uAJW5TTh%2F5HjuaglO%2F21JVOo%2BqnaYMzg4WKpBv%2FIDpOlhHSdeKSL%2FJ%2BbA9sAv%2B33To32XNmGQytw4WQewALVkrtfR9HS7MQNRM6JG3IerMhTviIXMhE%2BNCaLntlRPrfb9W%2Fc8o8PWpaENW6K9PIsMhERnOyPuwDYNeWimEvgHB%2FnCEGp0xRAEnDzjAnwwAlNtOh2KQ8vzMqqDVFwZ%2Fi1PhLQYTCaooS9BjqkAYoCrNrLDW6Ei%2FIzg%2FQ%2BfTLMqsDMhngNsPUFNM171rhPOzs4f00jRMYUfa49x5amYg64fW921xwCKphxGH8jyCwXswWyYAxlkiJrHNwkBs%2BYrftO0jyuHSh922BUo4%2Fqv6uIt9f1Gfx0KHmq9kCkPKCLEYzVEekPwC86PjgWzO7Q7CRKtCFWCmXAyfxX4CvbGbQSHa%2FsefPf%2BXuMtVyk7tO4qGmt&X-Amz-Signature=ddb99044cc3b8dc0bd33b61099813b2a3089316126a6c3b0552cf16bfb50ac9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIKRJ4C%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDv4BasrH5UGX5eXy4fL58J8mvbADrRcII%2FXS%2B4Drh7OgIhAK%2F98dmQBRX5xw0gAAi7hmB3bMaVJ%2FxIS72O5ylXUORwKv8DCBwQABoMNjM3NDIzMTgzODA1IgzY3qiEPmd5pGgb5kAq3ANWc3WIUaUl06cftr3m9OUopLLe3rJjByFG9oQSpHTOplGjY9hq0tGN%2BUfYOOS6dzhE%2FlVSsItqd3Xk7Z4qLFebbobi6fFufuESQcq4vofyTO0AMF%2BieW%2BMzvZ0JcxKHJtinjTz%2BhD1fiW%2By%2BqJotQv%2B9Jf0WerdMEm6pUGLpIiIV0yokXJ734sun94Wn91X0QKXAJhhTYoXZSASMt5YXJCTriGkaW7vZttXtn1gddlO5OeMxPPz2%2FitO6xziq%2FwzeyhwuchGcUO8pVQf%2BXWk59ihkKa97ExgZJ86jfoWM53GlsZNGRBxVVOdCveJSF2sc%2B52zfd5ZMMQqtX1%2BR9YjjWElAj1mW9hqwqElTWeGHICLNmL7Y%2FqyEGaZjzKLg6kUvpFDyiTEVJb34TpMXsxsFKOUGV%2BxiJ4%2F1uAJW5TTh%2F5HjuaglO%2F21JVOo%2BqnaYMzg4WKpBv%2FIDpOlhHSdeKSL%2FJ%2BbA9sAv%2B33To32XNmGQytw4WQewALVkrtfR9HS7MQNRM6JG3IerMhTviIXMhE%2BNCaLntlRPrfb9W%2Fc8o8PWpaENW6K9PIsMhERnOyPuwDYNeWimEvgHB%2FnCEGp0xRAEnDzjAnwwAlNtOh2KQ8vzMqqDVFwZ%2Fi1PhLQYTCaooS9BjqkAYoCrNrLDW6Ei%2FIzg%2FQ%2BfTLMqsDMhngNsPUFNM171rhPOzs4f00jRMYUfa49x5amYg64fW921xwCKphxGH8jyCwXswWyYAxlkiJrHNwkBs%2BYrftO0jyuHSh922BUo4%2Fqv6uIt9f1Gfx0KHmq9kCkPKCLEYzVEekPwC86PjgWzO7Q7CRKtCFWCmXAyfxX4CvbGbQSHa%2FsefPf%2BXuMtVyk7tO4qGmt&X-Amz-Signature=f8959e8dea8aa0788c44b077dc3ec44ee4f348b6fd5d6155e2aac8308d6ea64d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIKRJ4C%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDv4BasrH5UGX5eXy4fL58J8mvbADrRcII%2FXS%2B4Drh7OgIhAK%2F98dmQBRX5xw0gAAi7hmB3bMaVJ%2FxIS72O5ylXUORwKv8DCBwQABoMNjM3NDIzMTgzODA1IgzY3qiEPmd5pGgb5kAq3ANWc3WIUaUl06cftr3m9OUopLLe3rJjByFG9oQSpHTOplGjY9hq0tGN%2BUfYOOS6dzhE%2FlVSsItqd3Xk7Z4qLFebbobi6fFufuESQcq4vofyTO0AMF%2BieW%2BMzvZ0JcxKHJtinjTz%2BhD1fiW%2By%2BqJotQv%2B9Jf0WerdMEm6pUGLpIiIV0yokXJ734sun94Wn91X0QKXAJhhTYoXZSASMt5YXJCTriGkaW7vZttXtn1gddlO5OeMxPPz2%2FitO6xziq%2FwzeyhwuchGcUO8pVQf%2BXWk59ihkKa97ExgZJ86jfoWM53GlsZNGRBxVVOdCveJSF2sc%2B52zfd5ZMMQqtX1%2BR9YjjWElAj1mW9hqwqElTWeGHICLNmL7Y%2FqyEGaZjzKLg6kUvpFDyiTEVJb34TpMXsxsFKOUGV%2BxiJ4%2F1uAJW5TTh%2F5HjuaglO%2F21JVOo%2BqnaYMzg4WKpBv%2FIDpOlhHSdeKSL%2FJ%2BbA9sAv%2B33To32XNmGQytw4WQewALVkrtfR9HS7MQNRM6JG3IerMhTviIXMhE%2BNCaLntlRPrfb9W%2Fc8o8PWpaENW6K9PIsMhERnOyPuwDYNeWimEvgHB%2FnCEGp0xRAEnDzjAnwwAlNtOh2KQ8vzMqqDVFwZ%2Fi1PhLQYTCaooS9BjqkAYoCrNrLDW6Ei%2FIzg%2FQ%2BfTLMqsDMhngNsPUFNM171rhPOzs4f00jRMYUfa49x5amYg64fW921xwCKphxGH8jyCwXswWyYAxlkiJrHNwkBs%2BYrftO0jyuHSh922BUo4%2Fqv6uIt9f1Gfx0KHmq9kCkPKCLEYzVEekPwC86PjgWzO7Q7CRKtCFWCmXAyfxX4CvbGbQSHa%2FsefPf%2BXuMtVyk7tO4qGmt&X-Amz-Signature=0fe8bd829a26a1c0d39dfe8eab921fbfc63173ad0d4f62cbb73bcdce66f5251e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIKRJ4C%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDv4BasrH5UGX5eXy4fL58J8mvbADrRcII%2FXS%2B4Drh7OgIhAK%2F98dmQBRX5xw0gAAi7hmB3bMaVJ%2FxIS72O5ylXUORwKv8DCBwQABoMNjM3NDIzMTgzODA1IgzY3qiEPmd5pGgb5kAq3ANWc3WIUaUl06cftr3m9OUopLLe3rJjByFG9oQSpHTOplGjY9hq0tGN%2BUfYOOS6dzhE%2FlVSsItqd3Xk7Z4qLFebbobi6fFufuESQcq4vofyTO0AMF%2BieW%2BMzvZ0JcxKHJtinjTz%2BhD1fiW%2By%2BqJotQv%2B9Jf0WerdMEm6pUGLpIiIV0yokXJ734sun94Wn91X0QKXAJhhTYoXZSASMt5YXJCTriGkaW7vZttXtn1gddlO5OeMxPPz2%2FitO6xziq%2FwzeyhwuchGcUO8pVQf%2BXWk59ihkKa97ExgZJ86jfoWM53GlsZNGRBxVVOdCveJSF2sc%2B52zfd5ZMMQqtX1%2BR9YjjWElAj1mW9hqwqElTWeGHICLNmL7Y%2FqyEGaZjzKLg6kUvpFDyiTEVJb34TpMXsxsFKOUGV%2BxiJ4%2F1uAJW5TTh%2F5HjuaglO%2F21JVOo%2BqnaYMzg4WKpBv%2FIDpOlhHSdeKSL%2FJ%2BbA9sAv%2B33To32XNmGQytw4WQewALVkrtfR9HS7MQNRM6JG3IerMhTviIXMhE%2BNCaLntlRPrfb9W%2Fc8o8PWpaENW6K9PIsMhERnOyPuwDYNeWimEvgHB%2FnCEGp0xRAEnDzjAnwwAlNtOh2KQ8vzMqqDVFwZ%2Fi1PhLQYTCaooS9BjqkAYoCrNrLDW6Ei%2FIzg%2FQ%2BfTLMqsDMhngNsPUFNM171rhPOzs4f00jRMYUfa49x5amYg64fW921xwCKphxGH8jyCwXswWyYAxlkiJrHNwkBs%2BYrftO0jyuHSh922BUo4%2Fqv6uIt9f1Gfx0KHmq9kCkPKCLEYzVEekPwC86PjgWzO7Q7CRKtCFWCmXAyfxX4CvbGbQSHa%2FsefPf%2BXuMtVyk7tO4qGmt&X-Amz-Signature=ed038c383b283924da65ed0ce9b3c96feb5771a1cfa834b80805f31c8b6c497d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MIKRJ4C%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDv4BasrH5UGX5eXy4fL58J8mvbADrRcII%2FXS%2B4Drh7OgIhAK%2F98dmQBRX5xw0gAAi7hmB3bMaVJ%2FxIS72O5ylXUORwKv8DCBwQABoMNjM3NDIzMTgzODA1IgzY3qiEPmd5pGgb5kAq3ANWc3WIUaUl06cftr3m9OUopLLe3rJjByFG9oQSpHTOplGjY9hq0tGN%2BUfYOOS6dzhE%2FlVSsItqd3Xk7Z4qLFebbobi6fFufuESQcq4vofyTO0AMF%2BieW%2BMzvZ0JcxKHJtinjTz%2BhD1fiW%2By%2BqJotQv%2B9Jf0WerdMEm6pUGLpIiIV0yokXJ734sun94Wn91X0QKXAJhhTYoXZSASMt5YXJCTriGkaW7vZttXtn1gddlO5OeMxPPz2%2FitO6xziq%2FwzeyhwuchGcUO8pVQf%2BXWk59ihkKa97ExgZJ86jfoWM53GlsZNGRBxVVOdCveJSF2sc%2B52zfd5ZMMQqtX1%2BR9YjjWElAj1mW9hqwqElTWeGHICLNmL7Y%2FqyEGaZjzKLg6kUvpFDyiTEVJb34TpMXsxsFKOUGV%2BxiJ4%2F1uAJW5TTh%2F5HjuaglO%2F21JVOo%2BqnaYMzg4WKpBv%2FIDpOlhHSdeKSL%2FJ%2BbA9sAv%2B33To32XNmGQytw4WQewALVkrtfR9HS7MQNRM6JG3IerMhTviIXMhE%2BNCaLntlRPrfb9W%2Fc8o8PWpaENW6K9PIsMhERnOyPuwDYNeWimEvgHB%2FnCEGp0xRAEnDzjAnwwAlNtOh2KQ8vzMqqDVFwZ%2Fi1PhLQYTCaooS9BjqkAYoCrNrLDW6Ei%2FIzg%2FQ%2BfTLMqsDMhngNsPUFNM171rhPOzs4f00jRMYUfa49x5amYg64fW921xwCKphxGH8jyCwXswWyYAxlkiJrHNwkBs%2BYrftO0jyuHSh922BUo4%2Fqv6uIt9f1Gfx0KHmq9kCkPKCLEYzVEekPwC86PjgWzO7Q7CRKtCFWCmXAyfxX4CvbGbQSHa%2FsefPf%2BXuMtVyk7tO4qGmt&X-Amz-Signature=af7a09c5373f168c9b666378d707cee37da8aa7321fae0da8d6a59c286a7960f&X-Amz-SignedHeaders=host&x-id=GetObject)
