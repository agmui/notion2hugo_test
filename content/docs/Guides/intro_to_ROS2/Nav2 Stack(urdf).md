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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOGGLYJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHMoQM7%2Fv179DdoFNDsQBN4UfqsN5RzJ9jI5qnmYXpQIhAN%2FyPk3lhkJMFnB7UczX4wx7OK1hoYxSYGInb5NhZYQiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs16NuahKhCVqC6Iq3AMR7REFdAZh4om%2BjFv%2BmxyQ0P1VSd0QQdA5PJrEWUYXj4socpTmDoYb9W%2Ffqml2NSzuXeCefRwFs81%2FHRMiHP8td53IhLuolkjJRmnBTqLl6C%2BWEeIka4a%2FkQ9qM9%2BXcySPbs%2FRvZMkh8I20mCVDslJzoAZAOW7izakb8H0rqCldG4JlGXtg5vNL7ZOUI1jKJ9t0P0gwMl05aWyqQ0D2r9H1ATJ8bOQvQ%2FyZJoZGH1jBbmxKxH15%2BTr1cBtmR7cwIi1iqUb77t4ZrKKYZHNR3GckYif%2Bqx43Lfx4xOib0OLEvOspHS%2FGLkmeNlSU9hF7gmndgLIWv%2FLqtSDFJLEKOlcE074zw6DdDrmykqKEXbeZxa9%2FjshRuc%2F8LVWlJxuitH4fF61qKx8CmEqweb3II1fRC6Ppk7QspXud%2B6bpicqE9G%2Bo9%2Fsh8SWYKg0Mo5NNH9iYqro5F%2FwDiAQgC13GjSv3SEOsGM9mEQNQfrkBpnONiLLZqGPT%2BX44ScSSjiLOhFO%2FBBLIuuKduohuzeCqZyd1v2m91tApwrkaJ5PF%2BbBgUrHupook4IRa7pDSLuiVW%2FfeZtJlua4QGzewqUla5fNXUNl8vUT1l25uzzml4YDSwJGyz03EMbJkcvlNDD5lLPDBjqkAarPWsjY%2Bh4z0GUcAHKD%2FeW9v8YrSTjjfZ8Hj0lI4dnhdjoPKfTQTsPC1yJn8UL7KiNNDk%2FGdPOca2qLVCdegu3bduFpjCMtoHVPxef6Ay4v5DKQmaNOScPmSD%2F65zIjRrOF%2B1nzj485NOTJQ8Nm98t5o65UmXu7IhIcUYeiFGDmtfdpsApZ2R4brngFWp3umVNkdUKVG9fs9J%2BYTyGg6MrwVBeE&X-Amz-Signature=41da5ae37c7977df41a4d5a385f949d381c022e3e9572d273ddd357cd3ca0e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOGGLYJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHMoQM7%2Fv179DdoFNDsQBN4UfqsN5RzJ9jI5qnmYXpQIhAN%2FyPk3lhkJMFnB7UczX4wx7OK1hoYxSYGInb5NhZYQiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs16NuahKhCVqC6Iq3AMR7REFdAZh4om%2BjFv%2BmxyQ0P1VSd0QQdA5PJrEWUYXj4socpTmDoYb9W%2Ffqml2NSzuXeCefRwFs81%2FHRMiHP8td53IhLuolkjJRmnBTqLl6C%2BWEeIka4a%2FkQ9qM9%2BXcySPbs%2FRvZMkh8I20mCVDslJzoAZAOW7izakb8H0rqCldG4JlGXtg5vNL7ZOUI1jKJ9t0P0gwMl05aWyqQ0D2r9H1ATJ8bOQvQ%2FyZJoZGH1jBbmxKxH15%2BTr1cBtmR7cwIi1iqUb77t4ZrKKYZHNR3GckYif%2Bqx43Lfx4xOib0OLEvOspHS%2FGLkmeNlSU9hF7gmndgLIWv%2FLqtSDFJLEKOlcE074zw6DdDrmykqKEXbeZxa9%2FjshRuc%2F8LVWlJxuitH4fF61qKx8CmEqweb3II1fRC6Ppk7QspXud%2B6bpicqE9G%2Bo9%2Fsh8SWYKg0Mo5NNH9iYqro5F%2FwDiAQgC13GjSv3SEOsGM9mEQNQfrkBpnONiLLZqGPT%2BX44ScSSjiLOhFO%2FBBLIuuKduohuzeCqZyd1v2m91tApwrkaJ5PF%2BbBgUrHupook4IRa7pDSLuiVW%2FfeZtJlua4QGzewqUla5fNXUNl8vUT1l25uzzml4YDSwJGyz03EMbJkcvlNDD5lLPDBjqkAarPWsjY%2Bh4z0GUcAHKD%2FeW9v8YrSTjjfZ8Hj0lI4dnhdjoPKfTQTsPC1yJn8UL7KiNNDk%2FGdPOca2qLVCdegu3bduFpjCMtoHVPxef6Ay4v5DKQmaNOScPmSD%2F65zIjRrOF%2B1nzj485NOTJQ8Nm98t5o65UmXu7IhIcUYeiFGDmtfdpsApZ2R4brngFWp3umVNkdUKVG9fs9J%2BYTyGg6MrwVBeE&X-Amz-Signature=1bf6e55a5537513cbb02a4f8cc3ea6eba838280959771ff634bd3763ad489151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOGGLYJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHMoQM7%2Fv179DdoFNDsQBN4UfqsN5RzJ9jI5qnmYXpQIhAN%2FyPk3lhkJMFnB7UczX4wx7OK1hoYxSYGInb5NhZYQiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs16NuahKhCVqC6Iq3AMR7REFdAZh4om%2BjFv%2BmxyQ0P1VSd0QQdA5PJrEWUYXj4socpTmDoYb9W%2Ffqml2NSzuXeCefRwFs81%2FHRMiHP8td53IhLuolkjJRmnBTqLl6C%2BWEeIka4a%2FkQ9qM9%2BXcySPbs%2FRvZMkh8I20mCVDslJzoAZAOW7izakb8H0rqCldG4JlGXtg5vNL7ZOUI1jKJ9t0P0gwMl05aWyqQ0D2r9H1ATJ8bOQvQ%2FyZJoZGH1jBbmxKxH15%2BTr1cBtmR7cwIi1iqUb77t4ZrKKYZHNR3GckYif%2Bqx43Lfx4xOib0OLEvOspHS%2FGLkmeNlSU9hF7gmndgLIWv%2FLqtSDFJLEKOlcE074zw6DdDrmykqKEXbeZxa9%2FjshRuc%2F8LVWlJxuitH4fF61qKx8CmEqweb3II1fRC6Ppk7QspXud%2B6bpicqE9G%2Bo9%2Fsh8SWYKg0Mo5NNH9iYqro5F%2FwDiAQgC13GjSv3SEOsGM9mEQNQfrkBpnONiLLZqGPT%2BX44ScSSjiLOhFO%2FBBLIuuKduohuzeCqZyd1v2m91tApwrkaJ5PF%2BbBgUrHupook4IRa7pDSLuiVW%2FfeZtJlua4QGzewqUla5fNXUNl8vUT1l25uzzml4YDSwJGyz03EMbJkcvlNDD5lLPDBjqkAarPWsjY%2Bh4z0GUcAHKD%2FeW9v8YrSTjjfZ8Hj0lI4dnhdjoPKfTQTsPC1yJn8UL7KiNNDk%2FGdPOca2qLVCdegu3bduFpjCMtoHVPxef6Ay4v5DKQmaNOScPmSD%2F65zIjRrOF%2B1nzj485NOTJQ8Nm98t5o65UmXu7IhIcUYeiFGDmtfdpsApZ2R4brngFWp3umVNkdUKVG9fs9J%2BYTyGg6MrwVBeE&X-Amz-Signature=eb29dd83bc559a7e62386b8280c13b38245507957461c38335fddc66733ab587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOGGLYJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHMoQM7%2Fv179DdoFNDsQBN4UfqsN5RzJ9jI5qnmYXpQIhAN%2FyPk3lhkJMFnB7UczX4wx7OK1hoYxSYGInb5NhZYQiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs16NuahKhCVqC6Iq3AMR7REFdAZh4om%2BjFv%2BmxyQ0P1VSd0QQdA5PJrEWUYXj4socpTmDoYb9W%2Ffqml2NSzuXeCefRwFs81%2FHRMiHP8td53IhLuolkjJRmnBTqLl6C%2BWEeIka4a%2FkQ9qM9%2BXcySPbs%2FRvZMkh8I20mCVDslJzoAZAOW7izakb8H0rqCldG4JlGXtg5vNL7ZOUI1jKJ9t0P0gwMl05aWyqQ0D2r9H1ATJ8bOQvQ%2FyZJoZGH1jBbmxKxH15%2BTr1cBtmR7cwIi1iqUb77t4ZrKKYZHNR3GckYif%2Bqx43Lfx4xOib0OLEvOspHS%2FGLkmeNlSU9hF7gmndgLIWv%2FLqtSDFJLEKOlcE074zw6DdDrmykqKEXbeZxa9%2FjshRuc%2F8LVWlJxuitH4fF61qKx8CmEqweb3II1fRC6Ppk7QspXud%2B6bpicqE9G%2Bo9%2Fsh8SWYKg0Mo5NNH9iYqro5F%2FwDiAQgC13GjSv3SEOsGM9mEQNQfrkBpnONiLLZqGPT%2BX44ScSSjiLOhFO%2FBBLIuuKduohuzeCqZyd1v2m91tApwrkaJ5PF%2BbBgUrHupook4IRa7pDSLuiVW%2FfeZtJlua4QGzewqUla5fNXUNl8vUT1l25uzzml4YDSwJGyz03EMbJkcvlNDD5lLPDBjqkAarPWsjY%2Bh4z0GUcAHKD%2FeW9v8YrSTjjfZ8Hj0lI4dnhdjoPKfTQTsPC1yJn8UL7KiNNDk%2FGdPOca2qLVCdegu3bduFpjCMtoHVPxef6Ay4v5DKQmaNOScPmSD%2F65zIjRrOF%2B1nzj485NOTJQ8Nm98t5o65UmXu7IhIcUYeiFGDmtfdpsApZ2R4brngFWp3umVNkdUKVG9fs9J%2BYTyGg6MrwVBeE&X-Amz-Signature=57639fc3d76ad3628575c32471f971118cee45a26b25e77b1732542356c6790d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOGGLYJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHMoQM7%2Fv179DdoFNDsQBN4UfqsN5RzJ9jI5qnmYXpQIhAN%2FyPk3lhkJMFnB7UczX4wx7OK1hoYxSYGInb5NhZYQiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs16NuahKhCVqC6Iq3AMR7REFdAZh4om%2BjFv%2BmxyQ0P1VSd0QQdA5PJrEWUYXj4socpTmDoYb9W%2Ffqml2NSzuXeCefRwFs81%2FHRMiHP8td53IhLuolkjJRmnBTqLl6C%2BWEeIka4a%2FkQ9qM9%2BXcySPbs%2FRvZMkh8I20mCVDslJzoAZAOW7izakb8H0rqCldG4JlGXtg5vNL7ZOUI1jKJ9t0P0gwMl05aWyqQ0D2r9H1ATJ8bOQvQ%2FyZJoZGH1jBbmxKxH15%2BTr1cBtmR7cwIi1iqUb77t4ZrKKYZHNR3GckYif%2Bqx43Lfx4xOib0OLEvOspHS%2FGLkmeNlSU9hF7gmndgLIWv%2FLqtSDFJLEKOlcE074zw6DdDrmykqKEXbeZxa9%2FjshRuc%2F8LVWlJxuitH4fF61qKx8CmEqweb3II1fRC6Ppk7QspXud%2B6bpicqE9G%2Bo9%2Fsh8SWYKg0Mo5NNH9iYqro5F%2FwDiAQgC13GjSv3SEOsGM9mEQNQfrkBpnONiLLZqGPT%2BX44ScSSjiLOhFO%2FBBLIuuKduohuzeCqZyd1v2m91tApwrkaJ5PF%2BbBgUrHupook4IRa7pDSLuiVW%2FfeZtJlua4QGzewqUla5fNXUNl8vUT1l25uzzml4YDSwJGyz03EMbJkcvlNDD5lLPDBjqkAarPWsjY%2Bh4z0GUcAHKD%2FeW9v8YrSTjjfZ8Hj0lI4dnhdjoPKfTQTsPC1yJn8UL7KiNNDk%2FGdPOca2qLVCdegu3bduFpjCMtoHVPxef6Ay4v5DKQmaNOScPmSD%2F65zIjRrOF%2B1nzj485NOTJQ8Nm98t5o65UmXu7IhIcUYeiFGDmtfdpsApZ2R4brngFWp3umVNkdUKVG9fs9J%2BYTyGg6MrwVBeE&X-Amz-Signature=8d7d733dba42af1425d43488c668a4fa9c485888902621bf0b93c2dd74248c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNOGGLYJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoHMoQM7%2Fv179DdoFNDsQBN4UfqsN5RzJ9jI5qnmYXpQIhAN%2FyPk3lhkJMFnB7UczX4wx7OK1hoYxSYGInb5NhZYQiKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs16NuahKhCVqC6Iq3AMR7REFdAZh4om%2BjFv%2BmxyQ0P1VSd0QQdA5PJrEWUYXj4socpTmDoYb9W%2Ffqml2NSzuXeCefRwFs81%2FHRMiHP8td53IhLuolkjJRmnBTqLl6C%2BWEeIka4a%2FkQ9qM9%2BXcySPbs%2FRvZMkh8I20mCVDslJzoAZAOW7izakb8H0rqCldG4JlGXtg5vNL7ZOUI1jKJ9t0P0gwMl05aWyqQ0D2r9H1ATJ8bOQvQ%2FyZJoZGH1jBbmxKxH15%2BTr1cBtmR7cwIi1iqUb77t4ZrKKYZHNR3GckYif%2Bqx43Lfx4xOib0OLEvOspHS%2FGLkmeNlSU9hF7gmndgLIWv%2FLqtSDFJLEKOlcE074zw6DdDrmykqKEXbeZxa9%2FjshRuc%2F8LVWlJxuitH4fF61qKx8CmEqweb3II1fRC6Ppk7QspXud%2B6bpicqE9G%2Bo9%2Fsh8SWYKg0Mo5NNH9iYqro5F%2FwDiAQgC13GjSv3SEOsGM9mEQNQfrkBpnONiLLZqGPT%2BX44ScSSjiLOhFO%2FBBLIuuKduohuzeCqZyd1v2m91tApwrkaJ5PF%2BbBgUrHupook4IRa7pDSLuiVW%2FfeZtJlua4QGzewqUla5fNXUNl8vUT1l25uzzml4YDSwJGyz03EMbJkcvlNDD5lLPDBjqkAarPWsjY%2Bh4z0GUcAHKD%2FeW9v8YrSTjjfZ8Hj0lI4dnhdjoPKfTQTsPC1yJn8UL7KiNNDk%2FGdPOca2qLVCdegu3bduFpjCMtoHVPxef6Ay4v5DKQmaNOScPmSD%2F65zIjRrOF%2B1nzj485NOTJQ8Nm98t5o65UmXu7IhIcUYeiFGDmtfdpsApZ2R4brngFWp3umVNkdUKVG9fs9J%2BYTyGg6MrwVBeE&X-Amz-Signature=a04f11e3b28e9e280b0bdd3a5631c9aeb4da3393a737d216046dd7fbc43ac2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
