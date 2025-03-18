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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMV2MM6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIA%2B5qYndOVbfyRcCkG0VhxqOVRyvVsPXQn1wq%2BXbGJQGAiEAjKSlUcn1Yhv%2FTpcPrbseLnVilM19Lw6F9YW0fu4oKFgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGdE8G7dVVJz2gcWcircA8kq9c%2Flv8MAs4VmHefFm81X3pJl7YC2UzkzQ0l06opfgO1ELpP0d1gePdBQI%2Bu3y6gNuLdkk%2FWKrEuTO4NcQb%2FB140KWh2HnlJmcaDP4a%2BonNCp8naAq3EKqGn7JK6%2BkUjzjU1w0Y1PPUo4bMTjzfcC%2FY8oKlizk6qdOcMjKGDGT54MBo19dfFVhktUOH5aggD8TXvitWCBOhHjtzoQQlPHv50hdLBSgVrfCUigkdEy2An24vtRZZDLr0XWvjNNGtiPkFIWAvcatAEKIrndiT9K2p74o7E3ko5vcYmnO8J%2BpXjSUk%2B%2FyGdWD7XpDJRmvtHpQ3T9AWg5mL69Km5wUuuCKkDavfmuT0FDlAui%2BVsIC4SNsBXqbkZcY5vuU2ZjJq1hZaNqeKi0oNO3L5MBexktA051i%2B4DfS1Hy9d16HbEUh0zq8ZjI0%2BcjBnKb5a9bImX9NIEJ3LMRbd0xuX%2BbqU3BE9RdsQPx7TdErcQM05Ci72RWSXHJFJZ1z2Ry4DPcZG9WxZ7BiBzIZZ31X7uKFcPYtFm2%2FIyOowSr42Bs1uUcEaL8ZadcTfiC4SuA6egGtl2rU8uonixTWjvGZ9o1Mp839gx8z8ebcxmJIQj6ijiOF3QiABjMAtifCgJMN6R574GOqUBwtSK0RRigWb18HfAXUaNYxz8uWarq9pH3TdT2Q%2FTz40FyQs9iKVJCLzvpJVQBlJd0AZdSZ8Y%2BgyE1m%2BjZFUN6670VzVN9uTCAhdsQ9x2ChKLdKF9XnKsjUWsvpEssFFjh2nPvLGBBqkzzEInDV50e9bfUNIn%2FnO7DyrQlM9a29yeR%2Ff9xQFzTYcFxiqJvr1NIwUoWB1%2Bv3GoKsiuO5LjEVqeq7fp&X-Amz-Signature=778f754ddf6bb295727e2fff34abf72197cd293dad7a7a5efcc8834d438e8496&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMV2MM6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIA%2B5qYndOVbfyRcCkG0VhxqOVRyvVsPXQn1wq%2BXbGJQGAiEAjKSlUcn1Yhv%2FTpcPrbseLnVilM19Lw6F9YW0fu4oKFgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGdE8G7dVVJz2gcWcircA8kq9c%2Flv8MAs4VmHefFm81X3pJl7YC2UzkzQ0l06opfgO1ELpP0d1gePdBQI%2Bu3y6gNuLdkk%2FWKrEuTO4NcQb%2FB140KWh2HnlJmcaDP4a%2BonNCp8naAq3EKqGn7JK6%2BkUjzjU1w0Y1PPUo4bMTjzfcC%2FY8oKlizk6qdOcMjKGDGT54MBo19dfFVhktUOH5aggD8TXvitWCBOhHjtzoQQlPHv50hdLBSgVrfCUigkdEy2An24vtRZZDLr0XWvjNNGtiPkFIWAvcatAEKIrndiT9K2p74o7E3ko5vcYmnO8J%2BpXjSUk%2B%2FyGdWD7XpDJRmvtHpQ3T9AWg5mL69Km5wUuuCKkDavfmuT0FDlAui%2BVsIC4SNsBXqbkZcY5vuU2ZjJq1hZaNqeKi0oNO3L5MBexktA051i%2B4DfS1Hy9d16HbEUh0zq8ZjI0%2BcjBnKb5a9bImX9NIEJ3LMRbd0xuX%2BbqU3BE9RdsQPx7TdErcQM05Ci72RWSXHJFJZ1z2Ry4DPcZG9WxZ7BiBzIZZ31X7uKFcPYtFm2%2FIyOowSr42Bs1uUcEaL8ZadcTfiC4SuA6egGtl2rU8uonixTWjvGZ9o1Mp839gx8z8ebcxmJIQj6ijiOF3QiABjMAtifCgJMN6R574GOqUBwtSK0RRigWb18HfAXUaNYxz8uWarq9pH3TdT2Q%2FTz40FyQs9iKVJCLzvpJVQBlJd0AZdSZ8Y%2BgyE1m%2BjZFUN6670VzVN9uTCAhdsQ9x2ChKLdKF9XnKsjUWsvpEssFFjh2nPvLGBBqkzzEInDV50e9bfUNIn%2FnO7DyrQlM9a29yeR%2Ff9xQFzTYcFxiqJvr1NIwUoWB1%2Bv3GoKsiuO5LjEVqeq7fp&X-Amz-Signature=2c7301046eb3553ab86694667a3cc8a66115bd67a080d0612d1589737ac9682c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMV2MM6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIA%2B5qYndOVbfyRcCkG0VhxqOVRyvVsPXQn1wq%2BXbGJQGAiEAjKSlUcn1Yhv%2FTpcPrbseLnVilM19Lw6F9YW0fu4oKFgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGdE8G7dVVJz2gcWcircA8kq9c%2Flv8MAs4VmHefFm81X3pJl7YC2UzkzQ0l06opfgO1ELpP0d1gePdBQI%2Bu3y6gNuLdkk%2FWKrEuTO4NcQb%2FB140KWh2HnlJmcaDP4a%2BonNCp8naAq3EKqGn7JK6%2BkUjzjU1w0Y1PPUo4bMTjzfcC%2FY8oKlizk6qdOcMjKGDGT54MBo19dfFVhktUOH5aggD8TXvitWCBOhHjtzoQQlPHv50hdLBSgVrfCUigkdEy2An24vtRZZDLr0XWvjNNGtiPkFIWAvcatAEKIrndiT9K2p74o7E3ko5vcYmnO8J%2BpXjSUk%2B%2FyGdWD7XpDJRmvtHpQ3T9AWg5mL69Km5wUuuCKkDavfmuT0FDlAui%2BVsIC4SNsBXqbkZcY5vuU2ZjJq1hZaNqeKi0oNO3L5MBexktA051i%2B4DfS1Hy9d16HbEUh0zq8ZjI0%2BcjBnKb5a9bImX9NIEJ3LMRbd0xuX%2BbqU3BE9RdsQPx7TdErcQM05Ci72RWSXHJFJZ1z2Ry4DPcZG9WxZ7BiBzIZZ31X7uKFcPYtFm2%2FIyOowSr42Bs1uUcEaL8ZadcTfiC4SuA6egGtl2rU8uonixTWjvGZ9o1Mp839gx8z8ebcxmJIQj6ijiOF3QiABjMAtifCgJMN6R574GOqUBwtSK0RRigWb18HfAXUaNYxz8uWarq9pH3TdT2Q%2FTz40FyQs9iKVJCLzvpJVQBlJd0AZdSZ8Y%2BgyE1m%2BjZFUN6670VzVN9uTCAhdsQ9x2ChKLdKF9XnKsjUWsvpEssFFjh2nPvLGBBqkzzEInDV50e9bfUNIn%2FnO7DyrQlM9a29yeR%2Ff9xQFzTYcFxiqJvr1NIwUoWB1%2Bv3GoKsiuO5LjEVqeq7fp&X-Amz-Signature=78792d6aa504ec2f3aa7a7a075fce0441919d0002e7fd3dd6bd33bb9b7ed46f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMV2MM6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIA%2B5qYndOVbfyRcCkG0VhxqOVRyvVsPXQn1wq%2BXbGJQGAiEAjKSlUcn1Yhv%2FTpcPrbseLnVilM19Lw6F9YW0fu4oKFgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGdE8G7dVVJz2gcWcircA8kq9c%2Flv8MAs4VmHefFm81X3pJl7YC2UzkzQ0l06opfgO1ELpP0d1gePdBQI%2Bu3y6gNuLdkk%2FWKrEuTO4NcQb%2FB140KWh2HnlJmcaDP4a%2BonNCp8naAq3EKqGn7JK6%2BkUjzjU1w0Y1PPUo4bMTjzfcC%2FY8oKlizk6qdOcMjKGDGT54MBo19dfFVhktUOH5aggD8TXvitWCBOhHjtzoQQlPHv50hdLBSgVrfCUigkdEy2An24vtRZZDLr0XWvjNNGtiPkFIWAvcatAEKIrndiT9K2p74o7E3ko5vcYmnO8J%2BpXjSUk%2B%2FyGdWD7XpDJRmvtHpQ3T9AWg5mL69Km5wUuuCKkDavfmuT0FDlAui%2BVsIC4SNsBXqbkZcY5vuU2ZjJq1hZaNqeKi0oNO3L5MBexktA051i%2B4DfS1Hy9d16HbEUh0zq8ZjI0%2BcjBnKb5a9bImX9NIEJ3LMRbd0xuX%2BbqU3BE9RdsQPx7TdErcQM05Ci72RWSXHJFJZ1z2Ry4DPcZG9WxZ7BiBzIZZ31X7uKFcPYtFm2%2FIyOowSr42Bs1uUcEaL8ZadcTfiC4SuA6egGtl2rU8uonixTWjvGZ9o1Mp839gx8z8ebcxmJIQj6ijiOF3QiABjMAtifCgJMN6R574GOqUBwtSK0RRigWb18HfAXUaNYxz8uWarq9pH3TdT2Q%2FTz40FyQs9iKVJCLzvpJVQBlJd0AZdSZ8Y%2BgyE1m%2BjZFUN6670VzVN9uTCAhdsQ9x2ChKLdKF9XnKsjUWsvpEssFFjh2nPvLGBBqkzzEInDV50e9bfUNIn%2FnO7DyrQlM9a29yeR%2Ff9xQFzTYcFxiqJvr1NIwUoWB1%2Bv3GoKsiuO5LjEVqeq7fp&X-Amz-Signature=376782865dc483b3044e38591d6cf6bd866214ccc0bee91dd8077384f893d2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMV2MM6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIA%2B5qYndOVbfyRcCkG0VhxqOVRyvVsPXQn1wq%2BXbGJQGAiEAjKSlUcn1Yhv%2FTpcPrbseLnVilM19Lw6F9YW0fu4oKFgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGdE8G7dVVJz2gcWcircA8kq9c%2Flv8MAs4VmHefFm81X3pJl7YC2UzkzQ0l06opfgO1ELpP0d1gePdBQI%2Bu3y6gNuLdkk%2FWKrEuTO4NcQb%2FB140KWh2HnlJmcaDP4a%2BonNCp8naAq3EKqGn7JK6%2BkUjzjU1w0Y1PPUo4bMTjzfcC%2FY8oKlizk6qdOcMjKGDGT54MBo19dfFVhktUOH5aggD8TXvitWCBOhHjtzoQQlPHv50hdLBSgVrfCUigkdEy2An24vtRZZDLr0XWvjNNGtiPkFIWAvcatAEKIrndiT9K2p74o7E3ko5vcYmnO8J%2BpXjSUk%2B%2FyGdWD7XpDJRmvtHpQ3T9AWg5mL69Km5wUuuCKkDavfmuT0FDlAui%2BVsIC4SNsBXqbkZcY5vuU2ZjJq1hZaNqeKi0oNO3L5MBexktA051i%2B4DfS1Hy9d16HbEUh0zq8ZjI0%2BcjBnKb5a9bImX9NIEJ3LMRbd0xuX%2BbqU3BE9RdsQPx7TdErcQM05Ci72RWSXHJFJZ1z2Ry4DPcZG9WxZ7BiBzIZZ31X7uKFcPYtFm2%2FIyOowSr42Bs1uUcEaL8ZadcTfiC4SuA6egGtl2rU8uonixTWjvGZ9o1Mp839gx8z8ebcxmJIQj6ijiOF3QiABjMAtifCgJMN6R574GOqUBwtSK0RRigWb18HfAXUaNYxz8uWarq9pH3TdT2Q%2FTz40FyQs9iKVJCLzvpJVQBlJd0AZdSZ8Y%2BgyE1m%2BjZFUN6670VzVN9uTCAhdsQ9x2ChKLdKF9XnKsjUWsvpEssFFjh2nPvLGBBqkzzEInDV50e9bfUNIn%2FnO7DyrQlM9a29yeR%2Ff9xQFzTYcFxiqJvr1NIwUoWB1%2Bv3GoKsiuO5LjEVqeq7fp&X-Amz-Signature=9081bd3254e6438016757c3e28b1901d98bd496835ae742b98a12c5a908f9bad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAMV2MM6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIA%2B5qYndOVbfyRcCkG0VhxqOVRyvVsPXQn1wq%2BXbGJQGAiEAjKSlUcn1Yhv%2FTpcPrbseLnVilM19Lw6F9YW0fu4oKFgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGdE8G7dVVJz2gcWcircA8kq9c%2Flv8MAs4VmHefFm81X3pJl7YC2UzkzQ0l06opfgO1ELpP0d1gePdBQI%2Bu3y6gNuLdkk%2FWKrEuTO4NcQb%2FB140KWh2HnlJmcaDP4a%2BonNCp8naAq3EKqGn7JK6%2BkUjzjU1w0Y1PPUo4bMTjzfcC%2FY8oKlizk6qdOcMjKGDGT54MBo19dfFVhktUOH5aggD8TXvitWCBOhHjtzoQQlPHv50hdLBSgVrfCUigkdEy2An24vtRZZDLr0XWvjNNGtiPkFIWAvcatAEKIrndiT9K2p74o7E3ko5vcYmnO8J%2BpXjSUk%2B%2FyGdWD7XpDJRmvtHpQ3T9AWg5mL69Km5wUuuCKkDavfmuT0FDlAui%2BVsIC4SNsBXqbkZcY5vuU2ZjJq1hZaNqeKi0oNO3L5MBexktA051i%2B4DfS1Hy9d16HbEUh0zq8ZjI0%2BcjBnKb5a9bImX9NIEJ3LMRbd0xuX%2BbqU3BE9RdsQPx7TdErcQM05Ci72RWSXHJFJZ1z2Ry4DPcZG9WxZ7BiBzIZZ31X7uKFcPYtFm2%2FIyOowSr42Bs1uUcEaL8ZadcTfiC4SuA6egGtl2rU8uonixTWjvGZ9o1Mp839gx8z8ebcxmJIQj6ijiOF3QiABjMAtifCgJMN6R574GOqUBwtSK0RRigWb18HfAXUaNYxz8uWarq9pH3TdT2Q%2FTz40FyQs9iKVJCLzvpJVQBlJd0AZdSZ8Y%2BgyE1m%2BjZFUN6670VzVN9uTCAhdsQ9x2ChKLdKF9XnKsjUWsvpEssFFjh2nPvLGBBqkzzEInDV50e9bfUNIn%2FnO7DyrQlM9a29yeR%2Ff9xQFzTYcFxiqJvr1NIwUoWB1%2Bv3GoKsiuO5LjEVqeq7fp&X-Amz-Signature=b8dbe258510d934d456d6228436c43e3f23c36c290cc321a4d31825b7ba559be&X-Amz-SignedHeaders=host&x-id=GetObject)
