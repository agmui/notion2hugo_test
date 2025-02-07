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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RISKW5RE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG6ntIq2mEWBWdgrFYHmMBxMrFDAAchaH1cVDctwtgGtAiEAx%2F8j1HT9ACviUatIqiQRkzZnyRjtdO7pcnWm7uLOUzUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIvflj10%2BXGPpVJTkCrcA41%2F7GMXfh2zMtb0mzh6QU1WnZyzB5%2FmuNzZkjKmyBM3rnM3WILfcLwFZZyHx0QgMqTywD%2FPoXGVDawj6Q%2BXmTdb5aRCu6Ln2aJ1Oww%2BoKxEd7qA8A6QKDh%2FrIDe%2F1o%2BgW5Id7riDQ%2FNk%2BarwlZV9DA09Lmt2yC2yuYLVuvpXQI9J6T0cMSqkGf%2FFAxmkK04xR7xKmm5u5QNmsjcWoJ6fdxTBA9Wx3biZg1JrDFq7XgAJIPyNauzsW0ZiCrK8dvape8MTA0REDSkqVv8QX5vUUX25wEH9K7AqRPWxJWcz0PGvFpBH2cpd3b5TIN2tHG%2BIJMx69hwC3SF%2BrX%2FPSGm8duDDuIPd%2BcdWWyaCCTuelYhLL2GgsmhOTOdd25yFQ0JJ1YM%2FEgiVtM6y19TKC4wvLUbpWsLbc3ErpBUfZAaIQuWIHJVBnZGJ7dnqigbSWy1OoVdbfwiq1CLV9WvzYPxJjLRMet8YLXcqXuMzBD568PJQ5EGCJOoz%2Fih6nGaj96XVdMzmyUrnpnEOPE2N8w3wIIyMlMNBvka%2BknzDY%2BJQkK0KZK71hCkNRRFfG5DQjwO8AS31kEj7tVQuMhJIHh2bO5ZHNhsRlTyUXWGS2zzE6fehkmNO%2FrfTOU1VTubMNrhmL0GOqUBGIB8wrCkUHykFYu276TrVAc8rRVS916qxnWMWZ1XiXYZgawp6HD0FgYgJk%2FtXp2oR%2Bl9N9jIOHkMpAQ7briF3166euwH0qZWBQc8h8SEFjPG5YYhSuyRBr%2FQv4%2BofX2fXEriQEZcIqUpnf4kLaYluki%2BARCcOF7dxy2h41UElgQOrOr8gtEDiXlFb9U7q0j3qVrkdd9gjv48LC21vuZug1y3sXGI&X-Amz-Signature=aace41e4b1bdcef0f05b6b1f9faacc0b4fba39f78cba11e096450daa4016aad4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RISKW5RE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG6ntIq2mEWBWdgrFYHmMBxMrFDAAchaH1cVDctwtgGtAiEAx%2F8j1HT9ACviUatIqiQRkzZnyRjtdO7pcnWm7uLOUzUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIvflj10%2BXGPpVJTkCrcA41%2F7GMXfh2zMtb0mzh6QU1WnZyzB5%2FmuNzZkjKmyBM3rnM3WILfcLwFZZyHx0QgMqTywD%2FPoXGVDawj6Q%2BXmTdb5aRCu6Ln2aJ1Oww%2BoKxEd7qA8A6QKDh%2FrIDe%2F1o%2BgW5Id7riDQ%2FNk%2BarwlZV9DA09Lmt2yC2yuYLVuvpXQI9J6T0cMSqkGf%2FFAxmkK04xR7xKmm5u5QNmsjcWoJ6fdxTBA9Wx3biZg1JrDFq7XgAJIPyNauzsW0ZiCrK8dvape8MTA0REDSkqVv8QX5vUUX25wEH9K7AqRPWxJWcz0PGvFpBH2cpd3b5TIN2tHG%2BIJMx69hwC3SF%2BrX%2FPSGm8duDDuIPd%2BcdWWyaCCTuelYhLL2GgsmhOTOdd25yFQ0JJ1YM%2FEgiVtM6y19TKC4wvLUbpWsLbc3ErpBUfZAaIQuWIHJVBnZGJ7dnqigbSWy1OoVdbfwiq1CLV9WvzYPxJjLRMet8YLXcqXuMzBD568PJQ5EGCJOoz%2Fih6nGaj96XVdMzmyUrnpnEOPE2N8w3wIIyMlMNBvka%2BknzDY%2BJQkK0KZK71hCkNRRFfG5DQjwO8AS31kEj7tVQuMhJIHh2bO5ZHNhsRlTyUXWGS2zzE6fehkmNO%2FrfTOU1VTubMNrhmL0GOqUBGIB8wrCkUHykFYu276TrVAc8rRVS916qxnWMWZ1XiXYZgawp6HD0FgYgJk%2FtXp2oR%2Bl9N9jIOHkMpAQ7briF3166euwH0qZWBQc8h8SEFjPG5YYhSuyRBr%2FQv4%2BofX2fXEriQEZcIqUpnf4kLaYluki%2BARCcOF7dxy2h41UElgQOrOr8gtEDiXlFb9U7q0j3qVrkdd9gjv48LC21vuZug1y3sXGI&X-Amz-Signature=bf5cccf14f8ba2f57a23cf32cd06f4cde4a780366f8c22785d1165ed5d5291ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RISKW5RE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG6ntIq2mEWBWdgrFYHmMBxMrFDAAchaH1cVDctwtgGtAiEAx%2F8j1HT9ACviUatIqiQRkzZnyRjtdO7pcnWm7uLOUzUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIvflj10%2BXGPpVJTkCrcA41%2F7GMXfh2zMtb0mzh6QU1WnZyzB5%2FmuNzZkjKmyBM3rnM3WILfcLwFZZyHx0QgMqTywD%2FPoXGVDawj6Q%2BXmTdb5aRCu6Ln2aJ1Oww%2BoKxEd7qA8A6QKDh%2FrIDe%2F1o%2BgW5Id7riDQ%2FNk%2BarwlZV9DA09Lmt2yC2yuYLVuvpXQI9J6T0cMSqkGf%2FFAxmkK04xR7xKmm5u5QNmsjcWoJ6fdxTBA9Wx3biZg1JrDFq7XgAJIPyNauzsW0ZiCrK8dvape8MTA0REDSkqVv8QX5vUUX25wEH9K7AqRPWxJWcz0PGvFpBH2cpd3b5TIN2tHG%2BIJMx69hwC3SF%2BrX%2FPSGm8duDDuIPd%2BcdWWyaCCTuelYhLL2GgsmhOTOdd25yFQ0JJ1YM%2FEgiVtM6y19TKC4wvLUbpWsLbc3ErpBUfZAaIQuWIHJVBnZGJ7dnqigbSWy1OoVdbfwiq1CLV9WvzYPxJjLRMet8YLXcqXuMzBD568PJQ5EGCJOoz%2Fih6nGaj96XVdMzmyUrnpnEOPE2N8w3wIIyMlMNBvka%2BknzDY%2BJQkK0KZK71hCkNRRFfG5DQjwO8AS31kEj7tVQuMhJIHh2bO5ZHNhsRlTyUXWGS2zzE6fehkmNO%2FrfTOU1VTubMNrhmL0GOqUBGIB8wrCkUHykFYu276TrVAc8rRVS916qxnWMWZ1XiXYZgawp6HD0FgYgJk%2FtXp2oR%2Bl9N9jIOHkMpAQ7briF3166euwH0qZWBQc8h8SEFjPG5YYhSuyRBr%2FQv4%2BofX2fXEriQEZcIqUpnf4kLaYluki%2BARCcOF7dxy2h41UElgQOrOr8gtEDiXlFb9U7q0j3qVrkdd9gjv48LC21vuZug1y3sXGI&X-Amz-Signature=5877a0190d6c39d32356e901377651e61178f1efbce062a44eb3ebe44cdc653e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RISKW5RE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG6ntIq2mEWBWdgrFYHmMBxMrFDAAchaH1cVDctwtgGtAiEAx%2F8j1HT9ACviUatIqiQRkzZnyRjtdO7pcnWm7uLOUzUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIvflj10%2BXGPpVJTkCrcA41%2F7GMXfh2zMtb0mzh6QU1WnZyzB5%2FmuNzZkjKmyBM3rnM3WILfcLwFZZyHx0QgMqTywD%2FPoXGVDawj6Q%2BXmTdb5aRCu6Ln2aJ1Oww%2BoKxEd7qA8A6QKDh%2FrIDe%2F1o%2BgW5Id7riDQ%2FNk%2BarwlZV9DA09Lmt2yC2yuYLVuvpXQI9J6T0cMSqkGf%2FFAxmkK04xR7xKmm5u5QNmsjcWoJ6fdxTBA9Wx3biZg1JrDFq7XgAJIPyNauzsW0ZiCrK8dvape8MTA0REDSkqVv8QX5vUUX25wEH9K7AqRPWxJWcz0PGvFpBH2cpd3b5TIN2tHG%2BIJMx69hwC3SF%2BrX%2FPSGm8duDDuIPd%2BcdWWyaCCTuelYhLL2GgsmhOTOdd25yFQ0JJ1YM%2FEgiVtM6y19TKC4wvLUbpWsLbc3ErpBUfZAaIQuWIHJVBnZGJ7dnqigbSWy1OoVdbfwiq1CLV9WvzYPxJjLRMet8YLXcqXuMzBD568PJQ5EGCJOoz%2Fih6nGaj96XVdMzmyUrnpnEOPE2N8w3wIIyMlMNBvka%2BknzDY%2BJQkK0KZK71hCkNRRFfG5DQjwO8AS31kEj7tVQuMhJIHh2bO5ZHNhsRlTyUXWGS2zzE6fehkmNO%2FrfTOU1VTubMNrhmL0GOqUBGIB8wrCkUHykFYu276TrVAc8rRVS916qxnWMWZ1XiXYZgawp6HD0FgYgJk%2FtXp2oR%2Bl9N9jIOHkMpAQ7briF3166euwH0qZWBQc8h8SEFjPG5YYhSuyRBr%2FQv4%2BofX2fXEriQEZcIqUpnf4kLaYluki%2BARCcOF7dxy2h41UElgQOrOr8gtEDiXlFb9U7q0j3qVrkdd9gjv48LC21vuZug1y3sXGI&X-Amz-Signature=7952bf4e7f4d871d016286827729aff15c29eb9985b16425e1f6d35f5f93e3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RISKW5RE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG6ntIq2mEWBWdgrFYHmMBxMrFDAAchaH1cVDctwtgGtAiEAx%2F8j1HT9ACviUatIqiQRkzZnyRjtdO7pcnWm7uLOUzUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIvflj10%2BXGPpVJTkCrcA41%2F7GMXfh2zMtb0mzh6QU1WnZyzB5%2FmuNzZkjKmyBM3rnM3WILfcLwFZZyHx0QgMqTywD%2FPoXGVDawj6Q%2BXmTdb5aRCu6Ln2aJ1Oww%2BoKxEd7qA8A6QKDh%2FrIDe%2F1o%2BgW5Id7riDQ%2FNk%2BarwlZV9DA09Lmt2yC2yuYLVuvpXQI9J6T0cMSqkGf%2FFAxmkK04xR7xKmm5u5QNmsjcWoJ6fdxTBA9Wx3biZg1JrDFq7XgAJIPyNauzsW0ZiCrK8dvape8MTA0REDSkqVv8QX5vUUX25wEH9K7AqRPWxJWcz0PGvFpBH2cpd3b5TIN2tHG%2BIJMx69hwC3SF%2BrX%2FPSGm8duDDuIPd%2BcdWWyaCCTuelYhLL2GgsmhOTOdd25yFQ0JJ1YM%2FEgiVtM6y19TKC4wvLUbpWsLbc3ErpBUfZAaIQuWIHJVBnZGJ7dnqigbSWy1OoVdbfwiq1CLV9WvzYPxJjLRMet8YLXcqXuMzBD568PJQ5EGCJOoz%2Fih6nGaj96XVdMzmyUrnpnEOPE2N8w3wIIyMlMNBvka%2BknzDY%2BJQkK0KZK71hCkNRRFfG5DQjwO8AS31kEj7tVQuMhJIHh2bO5ZHNhsRlTyUXWGS2zzE6fehkmNO%2FrfTOU1VTubMNrhmL0GOqUBGIB8wrCkUHykFYu276TrVAc8rRVS916qxnWMWZ1XiXYZgawp6HD0FgYgJk%2FtXp2oR%2Bl9N9jIOHkMpAQ7briF3166euwH0qZWBQc8h8SEFjPG5YYhSuyRBr%2FQv4%2BofX2fXEriQEZcIqUpnf4kLaYluki%2BARCcOF7dxy2h41UElgQOrOr8gtEDiXlFb9U7q0j3qVrkdd9gjv48LC21vuZug1y3sXGI&X-Amz-Signature=a61075570a59e7e7ea2b3c0f62b5e30f1766a8c980378bce8bde226b6e7b2fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RISKW5RE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG6ntIq2mEWBWdgrFYHmMBxMrFDAAchaH1cVDctwtgGtAiEAx%2F8j1HT9ACviUatIqiQRkzZnyRjtdO7pcnWm7uLOUzUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIvflj10%2BXGPpVJTkCrcA41%2F7GMXfh2zMtb0mzh6QU1WnZyzB5%2FmuNzZkjKmyBM3rnM3WILfcLwFZZyHx0QgMqTywD%2FPoXGVDawj6Q%2BXmTdb5aRCu6Ln2aJ1Oww%2BoKxEd7qA8A6QKDh%2FrIDe%2F1o%2BgW5Id7riDQ%2FNk%2BarwlZV9DA09Lmt2yC2yuYLVuvpXQI9J6T0cMSqkGf%2FFAxmkK04xR7xKmm5u5QNmsjcWoJ6fdxTBA9Wx3biZg1JrDFq7XgAJIPyNauzsW0ZiCrK8dvape8MTA0REDSkqVv8QX5vUUX25wEH9K7AqRPWxJWcz0PGvFpBH2cpd3b5TIN2tHG%2BIJMx69hwC3SF%2BrX%2FPSGm8duDDuIPd%2BcdWWyaCCTuelYhLL2GgsmhOTOdd25yFQ0JJ1YM%2FEgiVtM6y19TKC4wvLUbpWsLbc3ErpBUfZAaIQuWIHJVBnZGJ7dnqigbSWy1OoVdbfwiq1CLV9WvzYPxJjLRMet8YLXcqXuMzBD568PJQ5EGCJOoz%2Fih6nGaj96XVdMzmyUrnpnEOPE2N8w3wIIyMlMNBvka%2BknzDY%2BJQkK0KZK71hCkNRRFfG5DQjwO8AS31kEj7tVQuMhJIHh2bO5ZHNhsRlTyUXWGS2zzE6fehkmNO%2FrfTOU1VTubMNrhmL0GOqUBGIB8wrCkUHykFYu276TrVAc8rRVS916qxnWMWZ1XiXYZgawp6HD0FgYgJk%2FtXp2oR%2Bl9N9jIOHkMpAQ7briF3166euwH0qZWBQc8h8SEFjPG5YYhSuyRBr%2FQv4%2BofX2fXEriQEZcIqUpnf4kLaYluki%2BARCcOF7dxy2h41UElgQOrOr8gtEDiXlFb9U7q0j3qVrkdd9gjv48LC21vuZug1y3sXGI&X-Amz-Signature=a351932468b08e7fa37d90cbc4d4df6200680f84d6cf0003e9141620bc013c64&X-Amz-SignedHeaders=host&x-id=GetObject)
