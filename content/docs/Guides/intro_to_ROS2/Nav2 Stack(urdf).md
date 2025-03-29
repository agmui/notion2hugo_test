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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKRKJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDmvSF1Pk8Q5A0HVMCRx8%2Fv4Svo9PCWZXdnxgUqkIPpLAiBm7y5GUt8ML2HrIwMd7z%2FMkHLjkrX%2FaSWRKbqfDy2w%2BCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnYPZ8mV6uQzfZGPuKtwDIZFhVfEZyUzp9Qwt6gGJZi3QtAk6x4SESpLKxUzmwTgpuZLbU5wkVDFFkZn8pojWByEYMzaAICvzTHJUDzMjHZVnFHMbKcrKRu%2BPQZxeKkJsiU%2BnqQEo31s3gsTvQXJKh8UqcPm%2F%2FMiG6goiZzJZfrKhQEfxqWJEDLSfqs9LlJACf8iPun0p5egdrE1ho9B%2BQijFRagt6a%2FvDxmoOJyfDd5CACgQww2ZheUtLjq4xzr3joCYNT0mdeLu7dCZVmK2%2BSINgw3SmAeJq5MprhMTLGY7OrjL5%2Bp%2Bw3aPG%2F%2F8QfGsUteVwBW9IJBJnIKidi%2Bx0jj4TnZIJTbCot1DujTV6yexjBw0eOPgss%2Fsessled0LQGtrgUoAivdLLkEaz%2F%2FGL5YlSBbYn6DwYNZG8g5qRbPXZBmmmyJBOMZ7eJCTVcRdGvo%2BkVPA1zS7egCxYTCwePkvdQ2T1%2BlZ9NIot0RYqqcAYoMmO2N78RoJGQmtQSWtG6xyiPl9py73V2HTGpQzjQGyncQUqH8EtUQhfGfG9elu%2FSm410k3mgxBbBUJnu1gAt2ZKIGUzsVq3JnAiKNERWeKE4toADCTImV73jbEl0ppMkw3X0xeHB3%2B%2FzUAVg2d0YdZIOnOWmBkgLEwg6CgvwY6pgF3SARg8Bu%2FIwjk0ajEX1CCBpKtUZNvI6%2FkTQlg0jZRmg3%2FSkxdS3aTXHmUYnL6hgRn0Oqd%2FyxIJsndchDaJByruelJ39lus9ynfUqf19nWKMDTaAVAk7QRKzTeclUN2dCd3NOsaLe3VUpmNtgFm2tysI6dTrWtG%2FvfCu6E8TJNTKH%2B71vYQKwY8XmlAmV6X9Lcc31ykr4K7E422IT%2FIMVFtY4NzOPD&X-Amz-Signature=f79ce8da20110f1614603346ddb590b1a7af8f2f0d44d8c0b0a31390f57879e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKRKJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDmvSF1Pk8Q5A0HVMCRx8%2Fv4Svo9PCWZXdnxgUqkIPpLAiBm7y5GUt8ML2HrIwMd7z%2FMkHLjkrX%2FaSWRKbqfDy2w%2BCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnYPZ8mV6uQzfZGPuKtwDIZFhVfEZyUzp9Qwt6gGJZi3QtAk6x4SESpLKxUzmwTgpuZLbU5wkVDFFkZn8pojWByEYMzaAICvzTHJUDzMjHZVnFHMbKcrKRu%2BPQZxeKkJsiU%2BnqQEo31s3gsTvQXJKh8UqcPm%2F%2FMiG6goiZzJZfrKhQEfxqWJEDLSfqs9LlJACf8iPun0p5egdrE1ho9B%2BQijFRagt6a%2FvDxmoOJyfDd5CACgQww2ZheUtLjq4xzr3joCYNT0mdeLu7dCZVmK2%2BSINgw3SmAeJq5MprhMTLGY7OrjL5%2Bp%2Bw3aPG%2F%2F8QfGsUteVwBW9IJBJnIKidi%2Bx0jj4TnZIJTbCot1DujTV6yexjBw0eOPgss%2Fsessled0LQGtrgUoAivdLLkEaz%2F%2FGL5YlSBbYn6DwYNZG8g5qRbPXZBmmmyJBOMZ7eJCTVcRdGvo%2BkVPA1zS7egCxYTCwePkvdQ2T1%2BlZ9NIot0RYqqcAYoMmO2N78RoJGQmtQSWtG6xyiPl9py73V2HTGpQzjQGyncQUqH8EtUQhfGfG9elu%2FSm410k3mgxBbBUJnu1gAt2ZKIGUzsVq3JnAiKNERWeKE4toADCTImV73jbEl0ppMkw3X0xeHB3%2B%2FzUAVg2d0YdZIOnOWmBkgLEwg6CgvwY6pgF3SARg8Bu%2FIwjk0ajEX1CCBpKtUZNvI6%2FkTQlg0jZRmg3%2FSkxdS3aTXHmUYnL6hgRn0Oqd%2FyxIJsndchDaJByruelJ39lus9ynfUqf19nWKMDTaAVAk7QRKzTeclUN2dCd3NOsaLe3VUpmNtgFm2tysI6dTrWtG%2FvfCu6E8TJNTKH%2B71vYQKwY8XmlAmV6X9Lcc31ykr4K7E422IT%2FIMVFtY4NzOPD&X-Amz-Signature=7a5b9c44194dfab26931ff22ef697317f781b8733b3c408865310238666ba72a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKRKJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDmvSF1Pk8Q5A0HVMCRx8%2Fv4Svo9PCWZXdnxgUqkIPpLAiBm7y5GUt8ML2HrIwMd7z%2FMkHLjkrX%2FaSWRKbqfDy2w%2BCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnYPZ8mV6uQzfZGPuKtwDIZFhVfEZyUzp9Qwt6gGJZi3QtAk6x4SESpLKxUzmwTgpuZLbU5wkVDFFkZn8pojWByEYMzaAICvzTHJUDzMjHZVnFHMbKcrKRu%2BPQZxeKkJsiU%2BnqQEo31s3gsTvQXJKh8UqcPm%2F%2FMiG6goiZzJZfrKhQEfxqWJEDLSfqs9LlJACf8iPun0p5egdrE1ho9B%2BQijFRagt6a%2FvDxmoOJyfDd5CACgQww2ZheUtLjq4xzr3joCYNT0mdeLu7dCZVmK2%2BSINgw3SmAeJq5MprhMTLGY7OrjL5%2Bp%2Bw3aPG%2F%2F8QfGsUteVwBW9IJBJnIKidi%2Bx0jj4TnZIJTbCot1DujTV6yexjBw0eOPgss%2Fsessled0LQGtrgUoAivdLLkEaz%2F%2FGL5YlSBbYn6DwYNZG8g5qRbPXZBmmmyJBOMZ7eJCTVcRdGvo%2BkVPA1zS7egCxYTCwePkvdQ2T1%2BlZ9NIot0RYqqcAYoMmO2N78RoJGQmtQSWtG6xyiPl9py73V2HTGpQzjQGyncQUqH8EtUQhfGfG9elu%2FSm410k3mgxBbBUJnu1gAt2ZKIGUzsVq3JnAiKNERWeKE4toADCTImV73jbEl0ppMkw3X0xeHB3%2B%2FzUAVg2d0YdZIOnOWmBkgLEwg6CgvwY6pgF3SARg8Bu%2FIwjk0ajEX1CCBpKtUZNvI6%2FkTQlg0jZRmg3%2FSkxdS3aTXHmUYnL6hgRn0Oqd%2FyxIJsndchDaJByruelJ39lus9ynfUqf19nWKMDTaAVAk7QRKzTeclUN2dCd3NOsaLe3VUpmNtgFm2tysI6dTrWtG%2FvfCu6E8TJNTKH%2B71vYQKwY8XmlAmV6X9Lcc31ykr4K7E422IT%2FIMVFtY4NzOPD&X-Amz-Signature=d5c6990933cd6cdfc0f070c91ef227ae8335516d4647da8f34e1fa15fbaa8188&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKRKJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDmvSF1Pk8Q5A0HVMCRx8%2Fv4Svo9PCWZXdnxgUqkIPpLAiBm7y5GUt8ML2HrIwMd7z%2FMkHLjkrX%2FaSWRKbqfDy2w%2BCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnYPZ8mV6uQzfZGPuKtwDIZFhVfEZyUzp9Qwt6gGJZi3QtAk6x4SESpLKxUzmwTgpuZLbU5wkVDFFkZn8pojWByEYMzaAICvzTHJUDzMjHZVnFHMbKcrKRu%2BPQZxeKkJsiU%2BnqQEo31s3gsTvQXJKh8UqcPm%2F%2FMiG6goiZzJZfrKhQEfxqWJEDLSfqs9LlJACf8iPun0p5egdrE1ho9B%2BQijFRagt6a%2FvDxmoOJyfDd5CACgQww2ZheUtLjq4xzr3joCYNT0mdeLu7dCZVmK2%2BSINgw3SmAeJq5MprhMTLGY7OrjL5%2Bp%2Bw3aPG%2F%2F8QfGsUteVwBW9IJBJnIKidi%2Bx0jj4TnZIJTbCot1DujTV6yexjBw0eOPgss%2Fsessled0LQGtrgUoAivdLLkEaz%2F%2FGL5YlSBbYn6DwYNZG8g5qRbPXZBmmmyJBOMZ7eJCTVcRdGvo%2BkVPA1zS7egCxYTCwePkvdQ2T1%2BlZ9NIot0RYqqcAYoMmO2N78RoJGQmtQSWtG6xyiPl9py73V2HTGpQzjQGyncQUqH8EtUQhfGfG9elu%2FSm410k3mgxBbBUJnu1gAt2ZKIGUzsVq3JnAiKNERWeKE4toADCTImV73jbEl0ppMkw3X0xeHB3%2B%2FzUAVg2d0YdZIOnOWmBkgLEwg6CgvwY6pgF3SARg8Bu%2FIwjk0ajEX1CCBpKtUZNvI6%2FkTQlg0jZRmg3%2FSkxdS3aTXHmUYnL6hgRn0Oqd%2FyxIJsndchDaJByruelJ39lus9ynfUqf19nWKMDTaAVAk7QRKzTeclUN2dCd3NOsaLe3VUpmNtgFm2tysI6dTrWtG%2FvfCu6E8TJNTKH%2B71vYQKwY8XmlAmV6X9Lcc31ykr4K7E422IT%2FIMVFtY4NzOPD&X-Amz-Signature=e5691e2a70dd6becfc80a61f44762fa458bc204ed5366fd5638fd0f4fa6061a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKRKJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDmvSF1Pk8Q5A0HVMCRx8%2Fv4Svo9PCWZXdnxgUqkIPpLAiBm7y5GUt8ML2HrIwMd7z%2FMkHLjkrX%2FaSWRKbqfDy2w%2BCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnYPZ8mV6uQzfZGPuKtwDIZFhVfEZyUzp9Qwt6gGJZi3QtAk6x4SESpLKxUzmwTgpuZLbU5wkVDFFkZn8pojWByEYMzaAICvzTHJUDzMjHZVnFHMbKcrKRu%2BPQZxeKkJsiU%2BnqQEo31s3gsTvQXJKh8UqcPm%2F%2FMiG6goiZzJZfrKhQEfxqWJEDLSfqs9LlJACf8iPun0p5egdrE1ho9B%2BQijFRagt6a%2FvDxmoOJyfDd5CACgQww2ZheUtLjq4xzr3joCYNT0mdeLu7dCZVmK2%2BSINgw3SmAeJq5MprhMTLGY7OrjL5%2Bp%2Bw3aPG%2F%2F8QfGsUteVwBW9IJBJnIKidi%2Bx0jj4TnZIJTbCot1DujTV6yexjBw0eOPgss%2Fsessled0LQGtrgUoAivdLLkEaz%2F%2FGL5YlSBbYn6DwYNZG8g5qRbPXZBmmmyJBOMZ7eJCTVcRdGvo%2BkVPA1zS7egCxYTCwePkvdQ2T1%2BlZ9NIot0RYqqcAYoMmO2N78RoJGQmtQSWtG6xyiPl9py73V2HTGpQzjQGyncQUqH8EtUQhfGfG9elu%2FSm410k3mgxBbBUJnu1gAt2ZKIGUzsVq3JnAiKNERWeKE4toADCTImV73jbEl0ppMkw3X0xeHB3%2B%2FzUAVg2d0YdZIOnOWmBkgLEwg6CgvwY6pgF3SARg8Bu%2FIwjk0ajEX1CCBpKtUZNvI6%2FkTQlg0jZRmg3%2FSkxdS3aTXHmUYnL6hgRn0Oqd%2FyxIJsndchDaJByruelJ39lus9ynfUqf19nWKMDTaAVAk7QRKzTeclUN2dCd3NOsaLe3VUpmNtgFm2tysI6dTrWtG%2FvfCu6E8TJNTKH%2B71vYQKwY8XmlAmV6X9Lcc31ykr4K7E422IT%2FIMVFtY4NzOPD&X-Amz-Signature=10fd02832439a0af88ca146e123592cf3c3724d542eaa43432a6493a324c220d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DNKRKJV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T180939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDmvSF1Pk8Q5A0HVMCRx8%2Fv4Svo9PCWZXdnxgUqkIPpLAiBm7y5GUt8ML2HrIwMd7z%2FMkHLjkrX%2FaSWRKbqfDy2w%2BCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnYPZ8mV6uQzfZGPuKtwDIZFhVfEZyUzp9Qwt6gGJZi3QtAk6x4SESpLKxUzmwTgpuZLbU5wkVDFFkZn8pojWByEYMzaAICvzTHJUDzMjHZVnFHMbKcrKRu%2BPQZxeKkJsiU%2BnqQEo31s3gsTvQXJKh8UqcPm%2F%2FMiG6goiZzJZfrKhQEfxqWJEDLSfqs9LlJACf8iPun0p5egdrE1ho9B%2BQijFRagt6a%2FvDxmoOJyfDd5CACgQww2ZheUtLjq4xzr3joCYNT0mdeLu7dCZVmK2%2BSINgw3SmAeJq5MprhMTLGY7OrjL5%2Bp%2Bw3aPG%2F%2F8QfGsUteVwBW9IJBJnIKidi%2Bx0jj4TnZIJTbCot1DujTV6yexjBw0eOPgss%2Fsessled0LQGtrgUoAivdLLkEaz%2F%2FGL5YlSBbYn6DwYNZG8g5qRbPXZBmmmyJBOMZ7eJCTVcRdGvo%2BkVPA1zS7egCxYTCwePkvdQ2T1%2BlZ9NIot0RYqqcAYoMmO2N78RoJGQmtQSWtG6xyiPl9py73V2HTGpQzjQGyncQUqH8EtUQhfGfG9elu%2FSm410k3mgxBbBUJnu1gAt2ZKIGUzsVq3JnAiKNERWeKE4toADCTImV73jbEl0ppMkw3X0xeHB3%2B%2FzUAVg2d0YdZIOnOWmBkgLEwg6CgvwY6pgF3SARg8Bu%2FIwjk0ajEX1CCBpKtUZNvI6%2FkTQlg0jZRmg3%2FSkxdS3aTXHmUYnL6hgRn0Oqd%2FyxIJsndchDaJByruelJ39lus9ynfUqf19nWKMDTaAVAk7QRKzTeclUN2dCd3NOsaLe3VUpmNtgFm2tysI6dTrWtG%2FvfCu6E8TJNTKH%2B71vYQKwY8XmlAmV6X9Lcc31ykr4K7E422IT%2FIMVFtY4NzOPD&X-Amz-Signature=febee74189770f798c373badb30683663401dab7c0f29491e69f4f81296fe011&X-Amz-SignedHeaders=host&x-id=GetObject)
