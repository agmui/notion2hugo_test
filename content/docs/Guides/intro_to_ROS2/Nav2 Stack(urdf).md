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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNDZ3QJY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRmMob6O2x%2FmrJJplVBb7bBm6I2wF9ynkfAOMwk7bBlAiEA1EZjLicw4S4vFntu0a49LfyXZA11GlKInF6sRqYl2x0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkbcSoWrcb8mcLThSrcAzp2D9tI9mkG6jb%2B6m8duVjzfKv%2B35Myuj1eKCiLMwGRcsRqAMXIPNXQ9Sr4iuGu%2BAyFCaBMCYKhMeZz6FDKo1v%2BhYPWGptoT9WSpZVxtMG7uO%2FHFZQyFSKD06qg%2FH%2Fne0ELiPpnGJSQo0OZpnoyh427EBpAAZFpF5JPeJYw%2B1xBt6x46LeI%2BrhogFqJ5Gr3JH5neXKIuy9z6bSxLDyI6E7ZSAyi6sGbJ7f4O0CxlZ%2BeGXPbxdFBpTPgax%2FzClC2oRHi8io8qOXnOUHo8hI9iG2q8s23q7jj8qfccyDuJgXFvsnQow820xcPukmt4Lgf6YWTnz8sThgNRaNgGGwaHCiKIQWue32kEkVJUy1ip%2FZssRfd5B%2BFBzsntadbC4wkoBnYHGyaG%2FqFPwHRBhccmbd2Hd2aHcHg7aglWpotZhGrAZkG2JwB9BKyZxYnLy8plF%2B9%2FakGvbugqFzkVSUCiNZ7hWCAyyWWWGuBsVkKbu4exjlbo1nyFUMIO2lGzX92ATDcpZCSxYeLKI5redS7T2Z%2FgrcZRiFfwLPtyPup4qbrNIRXyeloLhcmmee%2BDJsi1JxXZZ%2BG4nsVo4wwJknR8YTlvkDexHmcLKkh6a649PzxoX9YZGmjrtGQXrTmMM%2B7470GOqUBINCD2jXi70V5HRvhuMGdx7BNqJCQpgdIWYe5OqpGrBNEK%2B2%2BJfFPQYQ6ht4lrrjFsxafd4HjvYuJ8tLt5nVcyP0G9ckymKcC2t5r0aKlFnDR4ME17Jz2MBtqi%2F2yLCLudG7lnCm2AALm6PfUXV8ZzfSQJ%2FrV7bqM7G0imgMRiRzAPoAFEPT6lYMhpjfrQm77kfolPetM%2B8LFYn8q2cLurlcmBXH0&X-Amz-Signature=8c76030569facb023d652a6f9747223f8b96d02a0955d57fb833eeec6fce8284&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNDZ3QJY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRmMob6O2x%2FmrJJplVBb7bBm6I2wF9ynkfAOMwk7bBlAiEA1EZjLicw4S4vFntu0a49LfyXZA11GlKInF6sRqYl2x0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkbcSoWrcb8mcLThSrcAzp2D9tI9mkG6jb%2B6m8duVjzfKv%2B35Myuj1eKCiLMwGRcsRqAMXIPNXQ9Sr4iuGu%2BAyFCaBMCYKhMeZz6FDKo1v%2BhYPWGptoT9WSpZVxtMG7uO%2FHFZQyFSKD06qg%2FH%2Fne0ELiPpnGJSQo0OZpnoyh427EBpAAZFpF5JPeJYw%2B1xBt6x46LeI%2BrhogFqJ5Gr3JH5neXKIuy9z6bSxLDyI6E7ZSAyi6sGbJ7f4O0CxlZ%2BeGXPbxdFBpTPgax%2FzClC2oRHi8io8qOXnOUHo8hI9iG2q8s23q7jj8qfccyDuJgXFvsnQow820xcPukmt4Lgf6YWTnz8sThgNRaNgGGwaHCiKIQWue32kEkVJUy1ip%2FZssRfd5B%2BFBzsntadbC4wkoBnYHGyaG%2FqFPwHRBhccmbd2Hd2aHcHg7aglWpotZhGrAZkG2JwB9BKyZxYnLy8plF%2B9%2FakGvbugqFzkVSUCiNZ7hWCAyyWWWGuBsVkKbu4exjlbo1nyFUMIO2lGzX92ATDcpZCSxYeLKI5redS7T2Z%2FgrcZRiFfwLPtyPup4qbrNIRXyeloLhcmmee%2BDJsi1JxXZZ%2BG4nsVo4wwJknR8YTlvkDexHmcLKkh6a649PzxoX9YZGmjrtGQXrTmMM%2B7470GOqUBINCD2jXi70V5HRvhuMGdx7BNqJCQpgdIWYe5OqpGrBNEK%2B2%2BJfFPQYQ6ht4lrrjFsxafd4HjvYuJ8tLt5nVcyP0G9ckymKcC2t5r0aKlFnDR4ME17Jz2MBtqi%2F2yLCLudG7lnCm2AALm6PfUXV8ZzfSQJ%2FrV7bqM7G0imgMRiRzAPoAFEPT6lYMhpjfrQm77kfolPetM%2B8LFYn8q2cLurlcmBXH0&X-Amz-Signature=2c69cfc08f420a8b9b57c84a9c42a599c83afa6aa3c3d731b19c680e1d14b7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNDZ3QJY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRmMob6O2x%2FmrJJplVBb7bBm6I2wF9ynkfAOMwk7bBlAiEA1EZjLicw4S4vFntu0a49LfyXZA11GlKInF6sRqYl2x0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkbcSoWrcb8mcLThSrcAzp2D9tI9mkG6jb%2B6m8duVjzfKv%2B35Myuj1eKCiLMwGRcsRqAMXIPNXQ9Sr4iuGu%2BAyFCaBMCYKhMeZz6FDKo1v%2BhYPWGptoT9WSpZVxtMG7uO%2FHFZQyFSKD06qg%2FH%2Fne0ELiPpnGJSQo0OZpnoyh427EBpAAZFpF5JPeJYw%2B1xBt6x46LeI%2BrhogFqJ5Gr3JH5neXKIuy9z6bSxLDyI6E7ZSAyi6sGbJ7f4O0CxlZ%2BeGXPbxdFBpTPgax%2FzClC2oRHi8io8qOXnOUHo8hI9iG2q8s23q7jj8qfccyDuJgXFvsnQow820xcPukmt4Lgf6YWTnz8sThgNRaNgGGwaHCiKIQWue32kEkVJUy1ip%2FZssRfd5B%2BFBzsntadbC4wkoBnYHGyaG%2FqFPwHRBhccmbd2Hd2aHcHg7aglWpotZhGrAZkG2JwB9BKyZxYnLy8plF%2B9%2FakGvbugqFzkVSUCiNZ7hWCAyyWWWGuBsVkKbu4exjlbo1nyFUMIO2lGzX92ATDcpZCSxYeLKI5redS7T2Z%2FgrcZRiFfwLPtyPup4qbrNIRXyeloLhcmmee%2BDJsi1JxXZZ%2BG4nsVo4wwJknR8YTlvkDexHmcLKkh6a649PzxoX9YZGmjrtGQXrTmMM%2B7470GOqUBINCD2jXi70V5HRvhuMGdx7BNqJCQpgdIWYe5OqpGrBNEK%2B2%2BJfFPQYQ6ht4lrrjFsxafd4HjvYuJ8tLt5nVcyP0G9ckymKcC2t5r0aKlFnDR4ME17Jz2MBtqi%2F2yLCLudG7lnCm2AALm6PfUXV8ZzfSQJ%2FrV7bqM7G0imgMRiRzAPoAFEPT6lYMhpjfrQm77kfolPetM%2B8LFYn8q2cLurlcmBXH0&X-Amz-Signature=6770b501acc91d6eb700a834978b146d5773f1f8ce8df3f079668cb03404a5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNDZ3QJY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRmMob6O2x%2FmrJJplVBb7bBm6I2wF9ynkfAOMwk7bBlAiEA1EZjLicw4S4vFntu0a49LfyXZA11GlKInF6sRqYl2x0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkbcSoWrcb8mcLThSrcAzp2D9tI9mkG6jb%2B6m8duVjzfKv%2B35Myuj1eKCiLMwGRcsRqAMXIPNXQ9Sr4iuGu%2BAyFCaBMCYKhMeZz6FDKo1v%2BhYPWGptoT9WSpZVxtMG7uO%2FHFZQyFSKD06qg%2FH%2Fne0ELiPpnGJSQo0OZpnoyh427EBpAAZFpF5JPeJYw%2B1xBt6x46LeI%2BrhogFqJ5Gr3JH5neXKIuy9z6bSxLDyI6E7ZSAyi6sGbJ7f4O0CxlZ%2BeGXPbxdFBpTPgax%2FzClC2oRHi8io8qOXnOUHo8hI9iG2q8s23q7jj8qfccyDuJgXFvsnQow820xcPukmt4Lgf6YWTnz8sThgNRaNgGGwaHCiKIQWue32kEkVJUy1ip%2FZssRfd5B%2BFBzsntadbC4wkoBnYHGyaG%2FqFPwHRBhccmbd2Hd2aHcHg7aglWpotZhGrAZkG2JwB9BKyZxYnLy8plF%2B9%2FakGvbugqFzkVSUCiNZ7hWCAyyWWWGuBsVkKbu4exjlbo1nyFUMIO2lGzX92ATDcpZCSxYeLKI5redS7T2Z%2FgrcZRiFfwLPtyPup4qbrNIRXyeloLhcmmee%2BDJsi1JxXZZ%2BG4nsVo4wwJknR8YTlvkDexHmcLKkh6a649PzxoX9YZGmjrtGQXrTmMM%2B7470GOqUBINCD2jXi70V5HRvhuMGdx7BNqJCQpgdIWYe5OqpGrBNEK%2B2%2BJfFPQYQ6ht4lrrjFsxafd4HjvYuJ8tLt5nVcyP0G9ckymKcC2t5r0aKlFnDR4ME17Jz2MBtqi%2F2yLCLudG7lnCm2AALm6PfUXV8ZzfSQJ%2FrV7bqM7G0imgMRiRzAPoAFEPT6lYMhpjfrQm77kfolPetM%2B8LFYn8q2cLurlcmBXH0&X-Amz-Signature=42e053d825267981d81c734875609d2c7369c3529ad18dffa87f2bbf2d2e7449&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNDZ3QJY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRmMob6O2x%2FmrJJplVBb7bBm6I2wF9ynkfAOMwk7bBlAiEA1EZjLicw4S4vFntu0a49LfyXZA11GlKInF6sRqYl2x0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkbcSoWrcb8mcLThSrcAzp2D9tI9mkG6jb%2B6m8duVjzfKv%2B35Myuj1eKCiLMwGRcsRqAMXIPNXQ9Sr4iuGu%2BAyFCaBMCYKhMeZz6FDKo1v%2BhYPWGptoT9WSpZVxtMG7uO%2FHFZQyFSKD06qg%2FH%2Fne0ELiPpnGJSQo0OZpnoyh427EBpAAZFpF5JPeJYw%2B1xBt6x46LeI%2BrhogFqJ5Gr3JH5neXKIuy9z6bSxLDyI6E7ZSAyi6sGbJ7f4O0CxlZ%2BeGXPbxdFBpTPgax%2FzClC2oRHi8io8qOXnOUHo8hI9iG2q8s23q7jj8qfccyDuJgXFvsnQow820xcPukmt4Lgf6YWTnz8sThgNRaNgGGwaHCiKIQWue32kEkVJUy1ip%2FZssRfd5B%2BFBzsntadbC4wkoBnYHGyaG%2FqFPwHRBhccmbd2Hd2aHcHg7aglWpotZhGrAZkG2JwB9BKyZxYnLy8plF%2B9%2FakGvbugqFzkVSUCiNZ7hWCAyyWWWGuBsVkKbu4exjlbo1nyFUMIO2lGzX92ATDcpZCSxYeLKI5redS7T2Z%2FgrcZRiFfwLPtyPup4qbrNIRXyeloLhcmmee%2BDJsi1JxXZZ%2BG4nsVo4wwJknR8YTlvkDexHmcLKkh6a649PzxoX9YZGmjrtGQXrTmMM%2B7470GOqUBINCD2jXi70V5HRvhuMGdx7BNqJCQpgdIWYe5OqpGrBNEK%2B2%2BJfFPQYQ6ht4lrrjFsxafd4HjvYuJ8tLt5nVcyP0G9ckymKcC2t5r0aKlFnDR4ME17Jz2MBtqi%2F2yLCLudG7lnCm2AALm6PfUXV8ZzfSQJ%2FrV7bqM7G0imgMRiRzAPoAFEPT6lYMhpjfrQm77kfolPetM%2B8LFYn8q2cLurlcmBXH0&X-Amz-Signature=fa059dd5e25286a6878a476615a6fd2f576b109bbc187bf5c533d89713eb0c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNDZ3QJY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRmMob6O2x%2FmrJJplVBb7bBm6I2wF9ynkfAOMwk7bBlAiEA1EZjLicw4S4vFntu0a49LfyXZA11GlKInF6sRqYl2x0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkbcSoWrcb8mcLThSrcAzp2D9tI9mkG6jb%2B6m8duVjzfKv%2B35Myuj1eKCiLMwGRcsRqAMXIPNXQ9Sr4iuGu%2BAyFCaBMCYKhMeZz6FDKo1v%2BhYPWGptoT9WSpZVxtMG7uO%2FHFZQyFSKD06qg%2FH%2Fne0ELiPpnGJSQo0OZpnoyh427EBpAAZFpF5JPeJYw%2B1xBt6x46LeI%2BrhogFqJ5Gr3JH5neXKIuy9z6bSxLDyI6E7ZSAyi6sGbJ7f4O0CxlZ%2BeGXPbxdFBpTPgax%2FzClC2oRHi8io8qOXnOUHo8hI9iG2q8s23q7jj8qfccyDuJgXFvsnQow820xcPukmt4Lgf6YWTnz8sThgNRaNgGGwaHCiKIQWue32kEkVJUy1ip%2FZssRfd5B%2BFBzsntadbC4wkoBnYHGyaG%2FqFPwHRBhccmbd2Hd2aHcHg7aglWpotZhGrAZkG2JwB9BKyZxYnLy8plF%2B9%2FakGvbugqFzkVSUCiNZ7hWCAyyWWWGuBsVkKbu4exjlbo1nyFUMIO2lGzX92ATDcpZCSxYeLKI5redS7T2Z%2FgrcZRiFfwLPtyPup4qbrNIRXyeloLhcmmee%2BDJsi1JxXZZ%2BG4nsVo4wwJknR8YTlvkDexHmcLKkh6a649PzxoX9YZGmjrtGQXrTmMM%2B7470GOqUBINCD2jXi70V5HRvhuMGdx7BNqJCQpgdIWYe5OqpGrBNEK%2B2%2BJfFPQYQ6ht4lrrjFsxafd4HjvYuJ8tLt5nVcyP0G9ckymKcC2t5r0aKlFnDR4ME17Jz2MBtqi%2F2yLCLudG7lnCm2AALm6PfUXV8ZzfSQJ%2FrV7bqM7G0imgMRiRzAPoAFEPT6lYMhpjfrQm77kfolPetM%2B8LFYn8q2cLurlcmBXH0&X-Amz-Signature=2e7afac38c781d7619b17b38121bd7f97d0184e7d7cdf8a26eec204b4d5bf151&X-Amz-SignedHeaders=host&x-id=GetObject)
