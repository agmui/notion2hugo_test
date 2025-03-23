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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7OHDA2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFQz7VUvT9VFqG03DwRoQtWv6UKveq%2BfBCdjLw1SteXsAiEAx7Qfi4xBiXMB53YhCyDxVncJI3bVNgA4tSDzaGG%2BPvYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa8H7mTxBkY5a%2FBNSrcA8buIB%2FC3SQeLVD9UcrDgzXPDVXsAdJGIq7u6T%2FkWemccqDbOGcqfKUOXyLfyxzMrXXjnGtoI%2FaFRhHOINpG0%2FN6achm6JLj7NTdO7G4WGPNt3NJYk%2BosdSxLMHSHO47RuDyz9PSWkLF57VdPU%2FoqnXS47Ti5NQbWezpuIq3qRA4J0RdQPgonnIfE8k%2FesEQbDFk0SBtQiU6Eqw%2B78vvWvzYlJ0HZLRJVzc6gf7Z5hd5J3tCgF8%2FegN%2FBv7l32IyFrBtF%2Fe4RpVu4RWWJ9sZf7ODRwIgzq4SErEpg5p49aDv5ytu7wxub5XNmUaro0NE3Pq6s9io7aGkrQKGUDI6MoeGnQsddugyXLnG7yw59cLsylN0T2vAiyq8kK1cm9Iq35pnW9coDxqfBBjZM9VbiC%2BHOfv0NkPhamURb3NyHUE1TOJFXK%2BEy5d3M4vHqkoIdjIyhwK5a9SBQlry%2Fod6WKPt6zxteoPBSfJ8l%2BpfV736nXpIzSRBiJjaicdY61QvKLU5%2B30MQW9s%2BF4rmkCvzFYdykJhe%2BN1O17FzuOEU4ugjgSxS8pJFlkkPAgO9FIvIYpfGH19YBntt2JKwVWKmNLP7xiBZOvrYzfYlILY8RCqnV0wHA9yQROhrzyCMOri%2Fb4GOqUBcX0iLDRrI0o00b%2Bw5xrmFaDnX3z%2F6wDJDIQFJRMMFSsErR2GuC1RWiTTpu1PeYgCKRb20nk71uVQuA1INbW8mTuQpjNeT00fcLYSeZa2r%2BhodDPR2axtqc4jxiyp1a6vYIxqHl3F1UyuUYRfNHiRuqevcjuOm4dHij5WrFY6c5bVR8k6z7GgEBlz2kKo3guYIEaDtmy8UNqk4t3d7Q5BIkh0nN77&X-Amz-Signature=dd51fdb393e890ece804eae36789f8b7b3a68f3718e68abd6f04ba1c5c50d826&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7OHDA2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFQz7VUvT9VFqG03DwRoQtWv6UKveq%2BfBCdjLw1SteXsAiEAx7Qfi4xBiXMB53YhCyDxVncJI3bVNgA4tSDzaGG%2BPvYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa8H7mTxBkY5a%2FBNSrcA8buIB%2FC3SQeLVD9UcrDgzXPDVXsAdJGIq7u6T%2FkWemccqDbOGcqfKUOXyLfyxzMrXXjnGtoI%2FaFRhHOINpG0%2FN6achm6JLj7NTdO7G4WGPNt3NJYk%2BosdSxLMHSHO47RuDyz9PSWkLF57VdPU%2FoqnXS47Ti5NQbWezpuIq3qRA4J0RdQPgonnIfE8k%2FesEQbDFk0SBtQiU6Eqw%2B78vvWvzYlJ0HZLRJVzc6gf7Z5hd5J3tCgF8%2FegN%2FBv7l32IyFrBtF%2Fe4RpVu4RWWJ9sZf7ODRwIgzq4SErEpg5p49aDv5ytu7wxub5XNmUaro0NE3Pq6s9io7aGkrQKGUDI6MoeGnQsddugyXLnG7yw59cLsylN0T2vAiyq8kK1cm9Iq35pnW9coDxqfBBjZM9VbiC%2BHOfv0NkPhamURb3NyHUE1TOJFXK%2BEy5d3M4vHqkoIdjIyhwK5a9SBQlry%2Fod6WKPt6zxteoPBSfJ8l%2BpfV736nXpIzSRBiJjaicdY61QvKLU5%2B30MQW9s%2BF4rmkCvzFYdykJhe%2BN1O17FzuOEU4ugjgSxS8pJFlkkPAgO9FIvIYpfGH19YBntt2JKwVWKmNLP7xiBZOvrYzfYlILY8RCqnV0wHA9yQROhrzyCMOri%2Fb4GOqUBcX0iLDRrI0o00b%2Bw5xrmFaDnX3z%2F6wDJDIQFJRMMFSsErR2GuC1RWiTTpu1PeYgCKRb20nk71uVQuA1INbW8mTuQpjNeT00fcLYSeZa2r%2BhodDPR2axtqc4jxiyp1a6vYIxqHl3F1UyuUYRfNHiRuqevcjuOm4dHij5WrFY6c5bVR8k6z7GgEBlz2kKo3guYIEaDtmy8UNqk4t3d7Q5BIkh0nN77&X-Amz-Signature=3fde38dfed0b20aeecc2bc02bef1f4a22ee3ce55294045604d899214efb4b915&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7OHDA2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFQz7VUvT9VFqG03DwRoQtWv6UKveq%2BfBCdjLw1SteXsAiEAx7Qfi4xBiXMB53YhCyDxVncJI3bVNgA4tSDzaGG%2BPvYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa8H7mTxBkY5a%2FBNSrcA8buIB%2FC3SQeLVD9UcrDgzXPDVXsAdJGIq7u6T%2FkWemccqDbOGcqfKUOXyLfyxzMrXXjnGtoI%2FaFRhHOINpG0%2FN6achm6JLj7NTdO7G4WGPNt3NJYk%2BosdSxLMHSHO47RuDyz9PSWkLF57VdPU%2FoqnXS47Ti5NQbWezpuIq3qRA4J0RdQPgonnIfE8k%2FesEQbDFk0SBtQiU6Eqw%2B78vvWvzYlJ0HZLRJVzc6gf7Z5hd5J3tCgF8%2FegN%2FBv7l32IyFrBtF%2Fe4RpVu4RWWJ9sZf7ODRwIgzq4SErEpg5p49aDv5ytu7wxub5XNmUaro0NE3Pq6s9io7aGkrQKGUDI6MoeGnQsddugyXLnG7yw59cLsylN0T2vAiyq8kK1cm9Iq35pnW9coDxqfBBjZM9VbiC%2BHOfv0NkPhamURb3NyHUE1TOJFXK%2BEy5d3M4vHqkoIdjIyhwK5a9SBQlry%2Fod6WKPt6zxteoPBSfJ8l%2BpfV736nXpIzSRBiJjaicdY61QvKLU5%2B30MQW9s%2BF4rmkCvzFYdykJhe%2BN1O17FzuOEU4ugjgSxS8pJFlkkPAgO9FIvIYpfGH19YBntt2JKwVWKmNLP7xiBZOvrYzfYlILY8RCqnV0wHA9yQROhrzyCMOri%2Fb4GOqUBcX0iLDRrI0o00b%2Bw5xrmFaDnX3z%2F6wDJDIQFJRMMFSsErR2GuC1RWiTTpu1PeYgCKRb20nk71uVQuA1INbW8mTuQpjNeT00fcLYSeZa2r%2BhodDPR2axtqc4jxiyp1a6vYIxqHl3F1UyuUYRfNHiRuqevcjuOm4dHij5WrFY6c5bVR8k6z7GgEBlz2kKo3guYIEaDtmy8UNqk4t3d7Q5BIkh0nN77&X-Amz-Signature=810938bd9a22b3fa03655f631ac5ca6222992a4bcc1f390c88d72357533e1abf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7OHDA2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFQz7VUvT9VFqG03DwRoQtWv6UKveq%2BfBCdjLw1SteXsAiEAx7Qfi4xBiXMB53YhCyDxVncJI3bVNgA4tSDzaGG%2BPvYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa8H7mTxBkY5a%2FBNSrcA8buIB%2FC3SQeLVD9UcrDgzXPDVXsAdJGIq7u6T%2FkWemccqDbOGcqfKUOXyLfyxzMrXXjnGtoI%2FaFRhHOINpG0%2FN6achm6JLj7NTdO7G4WGPNt3NJYk%2BosdSxLMHSHO47RuDyz9PSWkLF57VdPU%2FoqnXS47Ti5NQbWezpuIq3qRA4J0RdQPgonnIfE8k%2FesEQbDFk0SBtQiU6Eqw%2B78vvWvzYlJ0HZLRJVzc6gf7Z5hd5J3tCgF8%2FegN%2FBv7l32IyFrBtF%2Fe4RpVu4RWWJ9sZf7ODRwIgzq4SErEpg5p49aDv5ytu7wxub5XNmUaro0NE3Pq6s9io7aGkrQKGUDI6MoeGnQsddugyXLnG7yw59cLsylN0T2vAiyq8kK1cm9Iq35pnW9coDxqfBBjZM9VbiC%2BHOfv0NkPhamURb3NyHUE1TOJFXK%2BEy5d3M4vHqkoIdjIyhwK5a9SBQlry%2Fod6WKPt6zxteoPBSfJ8l%2BpfV736nXpIzSRBiJjaicdY61QvKLU5%2B30MQW9s%2BF4rmkCvzFYdykJhe%2BN1O17FzuOEU4ugjgSxS8pJFlkkPAgO9FIvIYpfGH19YBntt2JKwVWKmNLP7xiBZOvrYzfYlILY8RCqnV0wHA9yQROhrzyCMOri%2Fb4GOqUBcX0iLDRrI0o00b%2Bw5xrmFaDnX3z%2F6wDJDIQFJRMMFSsErR2GuC1RWiTTpu1PeYgCKRb20nk71uVQuA1INbW8mTuQpjNeT00fcLYSeZa2r%2BhodDPR2axtqc4jxiyp1a6vYIxqHl3F1UyuUYRfNHiRuqevcjuOm4dHij5WrFY6c5bVR8k6z7GgEBlz2kKo3guYIEaDtmy8UNqk4t3d7Q5BIkh0nN77&X-Amz-Signature=f9f214a9a7e59f9b49b0ce9ca53d8ab5d2c94f5dd45523fd87e8f431ba48e5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7OHDA2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFQz7VUvT9VFqG03DwRoQtWv6UKveq%2BfBCdjLw1SteXsAiEAx7Qfi4xBiXMB53YhCyDxVncJI3bVNgA4tSDzaGG%2BPvYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa8H7mTxBkY5a%2FBNSrcA8buIB%2FC3SQeLVD9UcrDgzXPDVXsAdJGIq7u6T%2FkWemccqDbOGcqfKUOXyLfyxzMrXXjnGtoI%2FaFRhHOINpG0%2FN6achm6JLj7NTdO7G4WGPNt3NJYk%2BosdSxLMHSHO47RuDyz9PSWkLF57VdPU%2FoqnXS47Ti5NQbWezpuIq3qRA4J0RdQPgonnIfE8k%2FesEQbDFk0SBtQiU6Eqw%2B78vvWvzYlJ0HZLRJVzc6gf7Z5hd5J3tCgF8%2FegN%2FBv7l32IyFrBtF%2Fe4RpVu4RWWJ9sZf7ODRwIgzq4SErEpg5p49aDv5ytu7wxub5XNmUaro0NE3Pq6s9io7aGkrQKGUDI6MoeGnQsddugyXLnG7yw59cLsylN0T2vAiyq8kK1cm9Iq35pnW9coDxqfBBjZM9VbiC%2BHOfv0NkPhamURb3NyHUE1TOJFXK%2BEy5d3M4vHqkoIdjIyhwK5a9SBQlry%2Fod6WKPt6zxteoPBSfJ8l%2BpfV736nXpIzSRBiJjaicdY61QvKLU5%2B30MQW9s%2BF4rmkCvzFYdykJhe%2BN1O17FzuOEU4ugjgSxS8pJFlkkPAgO9FIvIYpfGH19YBntt2JKwVWKmNLP7xiBZOvrYzfYlILY8RCqnV0wHA9yQROhrzyCMOri%2Fb4GOqUBcX0iLDRrI0o00b%2Bw5xrmFaDnX3z%2F6wDJDIQFJRMMFSsErR2GuC1RWiTTpu1PeYgCKRb20nk71uVQuA1INbW8mTuQpjNeT00fcLYSeZa2r%2BhodDPR2axtqc4jxiyp1a6vYIxqHl3F1UyuUYRfNHiRuqevcjuOm4dHij5WrFY6c5bVR8k6z7GgEBlz2kKo3guYIEaDtmy8UNqk4t3d7Q5BIkh0nN77&X-Amz-Signature=daa53a6a0ce60b0659db3dc6ae4b37eef610e2634e3f66bd41f92b745b6bcb53&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP7OHDA2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIFQz7VUvT9VFqG03DwRoQtWv6UKveq%2BfBCdjLw1SteXsAiEAx7Qfi4xBiXMB53YhCyDxVncJI3bVNgA4tSDzaGG%2BPvYqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBa8H7mTxBkY5a%2FBNSrcA8buIB%2FC3SQeLVD9UcrDgzXPDVXsAdJGIq7u6T%2FkWemccqDbOGcqfKUOXyLfyxzMrXXjnGtoI%2FaFRhHOINpG0%2FN6achm6JLj7NTdO7G4WGPNt3NJYk%2BosdSxLMHSHO47RuDyz9PSWkLF57VdPU%2FoqnXS47Ti5NQbWezpuIq3qRA4J0RdQPgonnIfE8k%2FesEQbDFk0SBtQiU6Eqw%2B78vvWvzYlJ0HZLRJVzc6gf7Z5hd5J3tCgF8%2FegN%2FBv7l32IyFrBtF%2Fe4RpVu4RWWJ9sZf7ODRwIgzq4SErEpg5p49aDv5ytu7wxub5XNmUaro0NE3Pq6s9io7aGkrQKGUDI6MoeGnQsddugyXLnG7yw59cLsylN0T2vAiyq8kK1cm9Iq35pnW9coDxqfBBjZM9VbiC%2BHOfv0NkPhamURb3NyHUE1TOJFXK%2BEy5d3M4vHqkoIdjIyhwK5a9SBQlry%2Fod6WKPt6zxteoPBSfJ8l%2BpfV736nXpIzSRBiJjaicdY61QvKLU5%2B30MQW9s%2BF4rmkCvzFYdykJhe%2BN1O17FzuOEU4ugjgSxS8pJFlkkPAgO9FIvIYpfGH19YBntt2JKwVWKmNLP7xiBZOvrYzfYlILY8RCqnV0wHA9yQROhrzyCMOri%2Fb4GOqUBcX0iLDRrI0o00b%2Bw5xrmFaDnX3z%2F6wDJDIQFJRMMFSsErR2GuC1RWiTTpu1PeYgCKRb20nk71uVQuA1INbW8mTuQpjNeT00fcLYSeZa2r%2BhodDPR2axtqc4jxiyp1a6vYIxqHl3F1UyuUYRfNHiRuqevcjuOm4dHij5WrFY6c5bVR8k6z7GgEBlz2kKo3guYIEaDtmy8UNqk4t3d7Q5BIkh0nN77&X-Amz-Signature=2f5d66d486727e7322468a5364829c18f93bb7eec8dd4fac76a46b5deb7232f7&X-Amz-SignedHeaders=host&x-id=GetObject)
