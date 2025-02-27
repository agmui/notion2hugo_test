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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZF6TW3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDKB9JjS4mBX7d%2BaowydAUowNokJmvzfyd85qbu%2F4SouwIhALjocrNydGrCyqewJV1xI4W%2BBdspEc9Aybq%2F17%2FyvDUCKv8DCH8QABoMNjM3NDIzMTgzODA1IgydaoEwsfn3lNjuhbUq3AOYkx6WrFo1G1RWnfwP%2BMqztMsq4N591f%2BORc0qxs8LdzUb6%2FzpktvssJq1ZF7c7K9ummG7bFkkRdPQPxYjxgFgmN3riETByejzWyiT0TDTdF%2Bye9%2FHFTwxUK2tObZKCL8KlZKjVxSQBTclCnZjJK7rmri6DXe6Cl9CJbYus8OMZN9bZfvKyfhglW2tbIs2BHVn3tVTZuVtKhQ2q0BxOh60oXula2MMMlVr3kloIBlPJnJBdQNLqpqgCDNW7vpzozd8NXqHuOeksBzqRMpTmE1jGrka6cWX7B3%2FCKEjtMip8Xv%2Bi%2BSdLoOX9N4tcUNLl37bk4%2Bn0KHukt43h3PvCGDoAkrIuQfeFyyy1waYV9v7K9B3HORNjYStF4pvbg8QKUD5xgUhLK55Q%2Fl90WdvIPcIIw0AfMGAD%2FX92IH%2BRNeUZ5YUpUuW2%2B%2Fcdr4WdYemPEKA%2BnjB8zwaDm1G2T1LVxEaZfPmb9FCidqQOwQGXfd5wZYA3kpTrnRQ00zaK89TABJ5CDlISLJRjvVvV8smYW47fiqRp9EdWmL4OeGdLpLcqPhHyxOuHddLvz9hJ7eYkYOUermmN5mB7Xii40RAWPn4zkdjLzpPQXuCIVGjKtuaXzOlDHvXsNjfZUz%2BMTDZu4O%2BBjqkAX0LfiBOeNFKn95KzToRh0TuPNpb4ZK0gRZbpdPKVrheAEeG5u%2FrlWYt1D1AF6JW%2Fk3ZXnG%2FRSxqoCGRbWVVDT5UDSKfE6U2CsoYjSX4vngP5GNIdWgubgQiZiMD5lUJ24nDL9aOE%2BEqm2fUwNWAbOjg5cDCwbexamWK7YA0MqW3%2BMl8gO88vD9QUsyAhvTatP1z86TVk8C4D0%2BtTKcJriuLf8s9&X-Amz-Signature=592d89840c0643ab2b174c2953dec9ea3fd5766426b364851a83342d6c919534&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZF6TW3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDKB9JjS4mBX7d%2BaowydAUowNokJmvzfyd85qbu%2F4SouwIhALjocrNydGrCyqewJV1xI4W%2BBdspEc9Aybq%2F17%2FyvDUCKv8DCH8QABoMNjM3NDIzMTgzODA1IgydaoEwsfn3lNjuhbUq3AOYkx6WrFo1G1RWnfwP%2BMqztMsq4N591f%2BORc0qxs8LdzUb6%2FzpktvssJq1ZF7c7K9ummG7bFkkRdPQPxYjxgFgmN3riETByejzWyiT0TDTdF%2Bye9%2FHFTwxUK2tObZKCL8KlZKjVxSQBTclCnZjJK7rmri6DXe6Cl9CJbYus8OMZN9bZfvKyfhglW2tbIs2BHVn3tVTZuVtKhQ2q0BxOh60oXula2MMMlVr3kloIBlPJnJBdQNLqpqgCDNW7vpzozd8NXqHuOeksBzqRMpTmE1jGrka6cWX7B3%2FCKEjtMip8Xv%2Bi%2BSdLoOX9N4tcUNLl37bk4%2Bn0KHukt43h3PvCGDoAkrIuQfeFyyy1waYV9v7K9B3HORNjYStF4pvbg8QKUD5xgUhLK55Q%2Fl90WdvIPcIIw0AfMGAD%2FX92IH%2BRNeUZ5YUpUuW2%2B%2Fcdr4WdYemPEKA%2BnjB8zwaDm1G2T1LVxEaZfPmb9FCidqQOwQGXfd5wZYA3kpTrnRQ00zaK89TABJ5CDlISLJRjvVvV8smYW47fiqRp9EdWmL4OeGdLpLcqPhHyxOuHddLvz9hJ7eYkYOUermmN5mB7Xii40RAWPn4zkdjLzpPQXuCIVGjKtuaXzOlDHvXsNjfZUz%2BMTDZu4O%2BBjqkAX0LfiBOeNFKn95KzToRh0TuPNpb4ZK0gRZbpdPKVrheAEeG5u%2FrlWYt1D1AF6JW%2Fk3ZXnG%2FRSxqoCGRbWVVDT5UDSKfE6U2CsoYjSX4vngP5GNIdWgubgQiZiMD5lUJ24nDL9aOE%2BEqm2fUwNWAbOjg5cDCwbexamWK7YA0MqW3%2BMl8gO88vD9QUsyAhvTatP1z86TVk8C4D0%2BtTKcJriuLf8s9&X-Amz-Signature=ebc707bbac2a9ff7b26cfe2ab4c7c40be0c7271f389ebcc1f578bb78d88055c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZF6TW3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDKB9JjS4mBX7d%2BaowydAUowNokJmvzfyd85qbu%2F4SouwIhALjocrNydGrCyqewJV1xI4W%2BBdspEc9Aybq%2F17%2FyvDUCKv8DCH8QABoMNjM3NDIzMTgzODA1IgydaoEwsfn3lNjuhbUq3AOYkx6WrFo1G1RWnfwP%2BMqztMsq4N591f%2BORc0qxs8LdzUb6%2FzpktvssJq1ZF7c7K9ummG7bFkkRdPQPxYjxgFgmN3riETByejzWyiT0TDTdF%2Bye9%2FHFTwxUK2tObZKCL8KlZKjVxSQBTclCnZjJK7rmri6DXe6Cl9CJbYus8OMZN9bZfvKyfhglW2tbIs2BHVn3tVTZuVtKhQ2q0BxOh60oXula2MMMlVr3kloIBlPJnJBdQNLqpqgCDNW7vpzozd8NXqHuOeksBzqRMpTmE1jGrka6cWX7B3%2FCKEjtMip8Xv%2Bi%2BSdLoOX9N4tcUNLl37bk4%2Bn0KHukt43h3PvCGDoAkrIuQfeFyyy1waYV9v7K9B3HORNjYStF4pvbg8QKUD5xgUhLK55Q%2Fl90WdvIPcIIw0AfMGAD%2FX92IH%2BRNeUZ5YUpUuW2%2B%2Fcdr4WdYemPEKA%2BnjB8zwaDm1G2T1LVxEaZfPmb9FCidqQOwQGXfd5wZYA3kpTrnRQ00zaK89TABJ5CDlISLJRjvVvV8smYW47fiqRp9EdWmL4OeGdLpLcqPhHyxOuHddLvz9hJ7eYkYOUermmN5mB7Xii40RAWPn4zkdjLzpPQXuCIVGjKtuaXzOlDHvXsNjfZUz%2BMTDZu4O%2BBjqkAX0LfiBOeNFKn95KzToRh0TuPNpb4ZK0gRZbpdPKVrheAEeG5u%2FrlWYt1D1AF6JW%2Fk3ZXnG%2FRSxqoCGRbWVVDT5UDSKfE6U2CsoYjSX4vngP5GNIdWgubgQiZiMD5lUJ24nDL9aOE%2BEqm2fUwNWAbOjg5cDCwbexamWK7YA0MqW3%2BMl8gO88vD9QUsyAhvTatP1z86TVk8C4D0%2BtTKcJriuLf8s9&X-Amz-Signature=5b32c48a38941ca9b36de184d50e14a6ceb4b22f3711cc5f430f4d9dddc60d61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZF6TW3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDKB9JjS4mBX7d%2BaowydAUowNokJmvzfyd85qbu%2F4SouwIhALjocrNydGrCyqewJV1xI4W%2BBdspEc9Aybq%2F17%2FyvDUCKv8DCH8QABoMNjM3NDIzMTgzODA1IgydaoEwsfn3lNjuhbUq3AOYkx6WrFo1G1RWnfwP%2BMqztMsq4N591f%2BORc0qxs8LdzUb6%2FzpktvssJq1ZF7c7K9ummG7bFkkRdPQPxYjxgFgmN3riETByejzWyiT0TDTdF%2Bye9%2FHFTwxUK2tObZKCL8KlZKjVxSQBTclCnZjJK7rmri6DXe6Cl9CJbYus8OMZN9bZfvKyfhglW2tbIs2BHVn3tVTZuVtKhQ2q0BxOh60oXula2MMMlVr3kloIBlPJnJBdQNLqpqgCDNW7vpzozd8NXqHuOeksBzqRMpTmE1jGrka6cWX7B3%2FCKEjtMip8Xv%2Bi%2BSdLoOX9N4tcUNLl37bk4%2Bn0KHukt43h3PvCGDoAkrIuQfeFyyy1waYV9v7K9B3HORNjYStF4pvbg8QKUD5xgUhLK55Q%2Fl90WdvIPcIIw0AfMGAD%2FX92IH%2BRNeUZ5YUpUuW2%2B%2Fcdr4WdYemPEKA%2BnjB8zwaDm1G2T1LVxEaZfPmb9FCidqQOwQGXfd5wZYA3kpTrnRQ00zaK89TABJ5CDlISLJRjvVvV8smYW47fiqRp9EdWmL4OeGdLpLcqPhHyxOuHddLvz9hJ7eYkYOUermmN5mB7Xii40RAWPn4zkdjLzpPQXuCIVGjKtuaXzOlDHvXsNjfZUz%2BMTDZu4O%2BBjqkAX0LfiBOeNFKn95KzToRh0TuPNpb4ZK0gRZbpdPKVrheAEeG5u%2FrlWYt1D1AF6JW%2Fk3ZXnG%2FRSxqoCGRbWVVDT5UDSKfE6U2CsoYjSX4vngP5GNIdWgubgQiZiMD5lUJ24nDL9aOE%2BEqm2fUwNWAbOjg5cDCwbexamWK7YA0MqW3%2BMl8gO88vD9QUsyAhvTatP1z86TVk8C4D0%2BtTKcJriuLf8s9&X-Amz-Signature=e778556ebb6ec947281b620e5249375f40bd5f217673236b114af3a9825ea869&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZF6TW3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDKB9JjS4mBX7d%2BaowydAUowNokJmvzfyd85qbu%2F4SouwIhALjocrNydGrCyqewJV1xI4W%2BBdspEc9Aybq%2F17%2FyvDUCKv8DCH8QABoMNjM3NDIzMTgzODA1IgydaoEwsfn3lNjuhbUq3AOYkx6WrFo1G1RWnfwP%2BMqztMsq4N591f%2BORc0qxs8LdzUb6%2FzpktvssJq1ZF7c7K9ummG7bFkkRdPQPxYjxgFgmN3riETByejzWyiT0TDTdF%2Bye9%2FHFTwxUK2tObZKCL8KlZKjVxSQBTclCnZjJK7rmri6DXe6Cl9CJbYus8OMZN9bZfvKyfhglW2tbIs2BHVn3tVTZuVtKhQ2q0BxOh60oXula2MMMlVr3kloIBlPJnJBdQNLqpqgCDNW7vpzozd8NXqHuOeksBzqRMpTmE1jGrka6cWX7B3%2FCKEjtMip8Xv%2Bi%2BSdLoOX9N4tcUNLl37bk4%2Bn0KHukt43h3PvCGDoAkrIuQfeFyyy1waYV9v7K9B3HORNjYStF4pvbg8QKUD5xgUhLK55Q%2Fl90WdvIPcIIw0AfMGAD%2FX92IH%2BRNeUZ5YUpUuW2%2B%2Fcdr4WdYemPEKA%2BnjB8zwaDm1G2T1LVxEaZfPmb9FCidqQOwQGXfd5wZYA3kpTrnRQ00zaK89TABJ5CDlISLJRjvVvV8smYW47fiqRp9EdWmL4OeGdLpLcqPhHyxOuHddLvz9hJ7eYkYOUermmN5mB7Xii40RAWPn4zkdjLzpPQXuCIVGjKtuaXzOlDHvXsNjfZUz%2BMTDZu4O%2BBjqkAX0LfiBOeNFKn95KzToRh0TuPNpb4ZK0gRZbpdPKVrheAEeG5u%2FrlWYt1D1AF6JW%2Fk3ZXnG%2FRSxqoCGRbWVVDT5UDSKfE6U2CsoYjSX4vngP5GNIdWgubgQiZiMD5lUJ24nDL9aOE%2BEqm2fUwNWAbOjg5cDCwbexamWK7YA0MqW3%2BMl8gO88vD9QUsyAhvTatP1z86TVk8C4D0%2BtTKcJriuLf8s9&X-Amz-Signature=f0ada8179bf56ea32271be2b30462e98fd4eda91fad3ad32b1cec2f61bb06b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDZF6TW3%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDKB9JjS4mBX7d%2BaowydAUowNokJmvzfyd85qbu%2F4SouwIhALjocrNydGrCyqewJV1xI4W%2BBdspEc9Aybq%2F17%2FyvDUCKv8DCH8QABoMNjM3NDIzMTgzODA1IgydaoEwsfn3lNjuhbUq3AOYkx6WrFo1G1RWnfwP%2BMqztMsq4N591f%2BORc0qxs8LdzUb6%2FzpktvssJq1ZF7c7K9ummG7bFkkRdPQPxYjxgFgmN3riETByejzWyiT0TDTdF%2Bye9%2FHFTwxUK2tObZKCL8KlZKjVxSQBTclCnZjJK7rmri6DXe6Cl9CJbYus8OMZN9bZfvKyfhglW2tbIs2BHVn3tVTZuVtKhQ2q0BxOh60oXula2MMMlVr3kloIBlPJnJBdQNLqpqgCDNW7vpzozd8NXqHuOeksBzqRMpTmE1jGrka6cWX7B3%2FCKEjtMip8Xv%2Bi%2BSdLoOX9N4tcUNLl37bk4%2Bn0KHukt43h3PvCGDoAkrIuQfeFyyy1waYV9v7K9B3HORNjYStF4pvbg8QKUD5xgUhLK55Q%2Fl90WdvIPcIIw0AfMGAD%2FX92IH%2BRNeUZ5YUpUuW2%2B%2Fcdr4WdYemPEKA%2BnjB8zwaDm1G2T1LVxEaZfPmb9FCidqQOwQGXfd5wZYA3kpTrnRQ00zaK89TABJ5CDlISLJRjvVvV8smYW47fiqRp9EdWmL4OeGdLpLcqPhHyxOuHddLvz9hJ7eYkYOUermmN5mB7Xii40RAWPn4zkdjLzpPQXuCIVGjKtuaXzOlDHvXsNjfZUz%2BMTDZu4O%2BBjqkAX0LfiBOeNFKn95KzToRh0TuPNpb4ZK0gRZbpdPKVrheAEeG5u%2FrlWYt1D1AF6JW%2Fk3ZXnG%2FRSxqoCGRbWVVDT5UDSKfE6U2CsoYjSX4vngP5GNIdWgubgQiZiMD5lUJ24nDL9aOE%2BEqm2fUwNWAbOjg5cDCwbexamWK7YA0MqW3%2BMl8gO88vD9QUsyAhvTatP1z86TVk8C4D0%2BtTKcJriuLf8s9&X-Amz-Signature=5c6c457fa23732d1802460fe9e0f8a51b1e1d0e0cc9c1b04f5179093ee6258ee&X-Amz-SignedHeaders=host&x-id=GetObject)
