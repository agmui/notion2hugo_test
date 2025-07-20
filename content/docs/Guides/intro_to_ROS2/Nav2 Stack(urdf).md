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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQMUKCQP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1QuOTxYPLprfiAohLzJieILqmZ4xrdiSZLeUS4WpyGAiAJlJdTILVo7V37xhjjwnlsNb9UOIggO41ZKoU3qpiAUCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlVuHCfXrJNtnAl8dKtwDTJN9iOG8MjPpgc0N0OAARVXhQ4UG4LhOfa7GEvI7AoLr%2FI46Uni%2BXJZKBEjRh6QGCzQEpXh6kYeqBxANzkL9UK2IX%2Bubf%2F9vPqW5%2B2c%2F61IHsMenNhufah0BCW08Rob5ynx6MFXCZZBgrx3OeNwUx4lbsH3O5SSAHe21C8y%2FoI2sMHXRrI%2F3on4C8Y9HpXAAYkuqm92jg6vUB2OzK9t89AbsXHnFRSCni3Oexil8FJb0nETlPYffKdeY6uPKaAJm8WrB2ItkJuQ%2FG5NHvCg4v7sUl9w3VsPMjzKzId%2Foh6gHr2flCfFEmRzfgFnWRjrHZrqUFxuWYGcWV42DIzxo732aBzXXYojli5Z85OH5psvGScHhFQ7%2B8n1Zme7G8Je86xgYWzfAPCJ%2Fp2Iz9AnXPqVftt7IzCn5rCeAVwA3WqVe9k2QQulWHj9hgM0PNHFuugaHgX07MWFD3wy2x0h5z%2FrLGkDOIXY4sXF2NNDgyJK3ZA%2Fq0rNkjHja6D0AoMQdqkW3hAexwz2E9cX3Pnrjx0eLYxwwFUHeQ1V2HKjQz%2BOdWRpxe%2B2mdUuinV7hMHT3vcljiwG2wJtaBGNEcwSv5gskR4iNwa1q%2FLje1rrRXH51cCd6Fxum9seA814wnd7zwwY6pgH4jxgqB6FNSRS3y2vUOPE9%2FOUxBIqe8HZPBZaT4ygEZrHnUDYp6ifswWgpUkf6gQ928EAjBLtrXuT5ithVDnb4QweGHpjI3LmKrVTaueiAUTEDXi5eatkxZ4UKJh9eBHl3gDhWHKaYrSKwRBT8pAi53TDGIdG82NmSR2X4SpSMIquzaL3DyyJT6TIg%2B%2FUdedn0MgA6FSwOpbpKjBwoX4EQ06i%2FZXoj&X-Amz-Signature=53e3454de96b84bdc300643125a1a808d8135fd626fd103b5cffd018da1f01b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQMUKCQP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1QuOTxYPLprfiAohLzJieILqmZ4xrdiSZLeUS4WpyGAiAJlJdTILVo7V37xhjjwnlsNb9UOIggO41ZKoU3qpiAUCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlVuHCfXrJNtnAl8dKtwDTJN9iOG8MjPpgc0N0OAARVXhQ4UG4LhOfa7GEvI7AoLr%2FI46Uni%2BXJZKBEjRh6QGCzQEpXh6kYeqBxANzkL9UK2IX%2Bubf%2F9vPqW5%2B2c%2F61IHsMenNhufah0BCW08Rob5ynx6MFXCZZBgrx3OeNwUx4lbsH3O5SSAHe21C8y%2FoI2sMHXRrI%2F3on4C8Y9HpXAAYkuqm92jg6vUB2OzK9t89AbsXHnFRSCni3Oexil8FJb0nETlPYffKdeY6uPKaAJm8WrB2ItkJuQ%2FG5NHvCg4v7sUl9w3VsPMjzKzId%2Foh6gHr2flCfFEmRzfgFnWRjrHZrqUFxuWYGcWV42DIzxo732aBzXXYojli5Z85OH5psvGScHhFQ7%2B8n1Zme7G8Je86xgYWzfAPCJ%2Fp2Iz9AnXPqVftt7IzCn5rCeAVwA3WqVe9k2QQulWHj9hgM0PNHFuugaHgX07MWFD3wy2x0h5z%2FrLGkDOIXY4sXF2NNDgyJK3ZA%2Fq0rNkjHja6D0AoMQdqkW3hAexwz2E9cX3Pnrjx0eLYxwwFUHeQ1V2HKjQz%2BOdWRpxe%2B2mdUuinV7hMHT3vcljiwG2wJtaBGNEcwSv5gskR4iNwa1q%2FLje1rrRXH51cCd6Fxum9seA814wnd7zwwY6pgH4jxgqB6FNSRS3y2vUOPE9%2FOUxBIqe8HZPBZaT4ygEZrHnUDYp6ifswWgpUkf6gQ928EAjBLtrXuT5ithVDnb4QweGHpjI3LmKrVTaueiAUTEDXi5eatkxZ4UKJh9eBHl3gDhWHKaYrSKwRBT8pAi53TDGIdG82NmSR2X4SpSMIquzaL3DyyJT6TIg%2B%2FUdedn0MgA6FSwOpbpKjBwoX4EQ06i%2FZXoj&X-Amz-Signature=d60e77bbd44dcacb82337c45a6cb2b46309d9a53aad2a9c0ffab41e9b9eda739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQMUKCQP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1QuOTxYPLprfiAohLzJieILqmZ4xrdiSZLeUS4WpyGAiAJlJdTILVo7V37xhjjwnlsNb9UOIggO41ZKoU3qpiAUCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlVuHCfXrJNtnAl8dKtwDTJN9iOG8MjPpgc0N0OAARVXhQ4UG4LhOfa7GEvI7AoLr%2FI46Uni%2BXJZKBEjRh6QGCzQEpXh6kYeqBxANzkL9UK2IX%2Bubf%2F9vPqW5%2B2c%2F61IHsMenNhufah0BCW08Rob5ynx6MFXCZZBgrx3OeNwUx4lbsH3O5SSAHe21C8y%2FoI2sMHXRrI%2F3on4C8Y9HpXAAYkuqm92jg6vUB2OzK9t89AbsXHnFRSCni3Oexil8FJb0nETlPYffKdeY6uPKaAJm8WrB2ItkJuQ%2FG5NHvCg4v7sUl9w3VsPMjzKzId%2Foh6gHr2flCfFEmRzfgFnWRjrHZrqUFxuWYGcWV42DIzxo732aBzXXYojli5Z85OH5psvGScHhFQ7%2B8n1Zme7G8Je86xgYWzfAPCJ%2Fp2Iz9AnXPqVftt7IzCn5rCeAVwA3WqVe9k2QQulWHj9hgM0PNHFuugaHgX07MWFD3wy2x0h5z%2FrLGkDOIXY4sXF2NNDgyJK3ZA%2Fq0rNkjHja6D0AoMQdqkW3hAexwz2E9cX3Pnrjx0eLYxwwFUHeQ1V2HKjQz%2BOdWRpxe%2B2mdUuinV7hMHT3vcljiwG2wJtaBGNEcwSv5gskR4iNwa1q%2FLje1rrRXH51cCd6Fxum9seA814wnd7zwwY6pgH4jxgqB6FNSRS3y2vUOPE9%2FOUxBIqe8HZPBZaT4ygEZrHnUDYp6ifswWgpUkf6gQ928EAjBLtrXuT5ithVDnb4QweGHpjI3LmKrVTaueiAUTEDXi5eatkxZ4UKJh9eBHl3gDhWHKaYrSKwRBT8pAi53TDGIdG82NmSR2X4SpSMIquzaL3DyyJT6TIg%2B%2FUdedn0MgA6FSwOpbpKjBwoX4EQ06i%2FZXoj&X-Amz-Signature=e429798f498592daa78126eab84e0ea9a1c00a6265663823a18dee41c1d160f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQMUKCQP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1QuOTxYPLprfiAohLzJieILqmZ4xrdiSZLeUS4WpyGAiAJlJdTILVo7V37xhjjwnlsNb9UOIggO41ZKoU3qpiAUCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlVuHCfXrJNtnAl8dKtwDTJN9iOG8MjPpgc0N0OAARVXhQ4UG4LhOfa7GEvI7AoLr%2FI46Uni%2BXJZKBEjRh6QGCzQEpXh6kYeqBxANzkL9UK2IX%2Bubf%2F9vPqW5%2B2c%2F61IHsMenNhufah0BCW08Rob5ynx6MFXCZZBgrx3OeNwUx4lbsH3O5SSAHe21C8y%2FoI2sMHXRrI%2F3on4C8Y9HpXAAYkuqm92jg6vUB2OzK9t89AbsXHnFRSCni3Oexil8FJb0nETlPYffKdeY6uPKaAJm8WrB2ItkJuQ%2FG5NHvCg4v7sUl9w3VsPMjzKzId%2Foh6gHr2flCfFEmRzfgFnWRjrHZrqUFxuWYGcWV42DIzxo732aBzXXYojli5Z85OH5psvGScHhFQ7%2B8n1Zme7G8Je86xgYWzfAPCJ%2Fp2Iz9AnXPqVftt7IzCn5rCeAVwA3WqVe9k2QQulWHj9hgM0PNHFuugaHgX07MWFD3wy2x0h5z%2FrLGkDOIXY4sXF2NNDgyJK3ZA%2Fq0rNkjHja6D0AoMQdqkW3hAexwz2E9cX3Pnrjx0eLYxwwFUHeQ1V2HKjQz%2BOdWRpxe%2B2mdUuinV7hMHT3vcljiwG2wJtaBGNEcwSv5gskR4iNwa1q%2FLje1rrRXH51cCd6Fxum9seA814wnd7zwwY6pgH4jxgqB6FNSRS3y2vUOPE9%2FOUxBIqe8HZPBZaT4ygEZrHnUDYp6ifswWgpUkf6gQ928EAjBLtrXuT5ithVDnb4QweGHpjI3LmKrVTaueiAUTEDXi5eatkxZ4UKJh9eBHl3gDhWHKaYrSKwRBT8pAi53TDGIdG82NmSR2X4SpSMIquzaL3DyyJT6TIg%2B%2FUdedn0MgA6FSwOpbpKjBwoX4EQ06i%2FZXoj&X-Amz-Signature=3d49201af7d3f268f41427216a40aedc6300dde9838b7c8e9c16a1f9f9415591&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQMUKCQP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1QuOTxYPLprfiAohLzJieILqmZ4xrdiSZLeUS4WpyGAiAJlJdTILVo7V37xhjjwnlsNb9UOIggO41ZKoU3qpiAUCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlVuHCfXrJNtnAl8dKtwDTJN9iOG8MjPpgc0N0OAARVXhQ4UG4LhOfa7GEvI7AoLr%2FI46Uni%2BXJZKBEjRh6QGCzQEpXh6kYeqBxANzkL9UK2IX%2Bubf%2F9vPqW5%2B2c%2F61IHsMenNhufah0BCW08Rob5ynx6MFXCZZBgrx3OeNwUx4lbsH3O5SSAHe21C8y%2FoI2sMHXRrI%2F3on4C8Y9HpXAAYkuqm92jg6vUB2OzK9t89AbsXHnFRSCni3Oexil8FJb0nETlPYffKdeY6uPKaAJm8WrB2ItkJuQ%2FG5NHvCg4v7sUl9w3VsPMjzKzId%2Foh6gHr2flCfFEmRzfgFnWRjrHZrqUFxuWYGcWV42DIzxo732aBzXXYojli5Z85OH5psvGScHhFQ7%2B8n1Zme7G8Je86xgYWzfAPCJ%2Fp2Iz9AnXPqVftt7IzCn5rCeAVwA3WqVe9k2QQulWHj9hgM0PNHFuugaHgX07MWFD3wy2x0h5z%2FrLGkDOIXY4sXF2NNDgyJK3ZA%2Fq0rNkjHja6D0AoMQdqkW3hAexwz2E9cX3Pnrjx0eLYxwwFUHeQ1V2HKjQz%2BOdWRpxe%2B2mdUuinV7hMHT3vcljiwG2wJtaBGNEcwSv5gskR4iNwa1q%2FLje1rrRXH51cCd6Fxum9seA814wnd7zwwY6pgH4jxgqB6FNSRS3y2vUOPE9%2FOUxBIqe8HZPBZaT4ygEZrHnUDYp6ifswWgpUkf6gQ928EAjBLtrXuT5ithVDnb4QweGHpjI3LmKrVTaueiAUTEDXi5eatkxZ4UKJh9eBHl3gDhWHKaYrSKwRBT8pAi53TDGIdG82NmSR2X4SpSMIquzaL3DyyJT6TIg%2B%2FUdedn0MgA6FSwOpbpKjBwoX4EQ06i%2FZXoj&X-Amz-Signature=7abf88e58186c6cb31554754bfb1c1075ec344e4da3d12c4c6c41710b83409d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQMUKCQP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1QuOTxYPLprfiAohLzJieILqmZ4xrdiSZLeUS4WpyGAiAJlJdTILVo7V37xhjjwnlsNb9UOIggO41ZKoU3qpiAUCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlVuHCfXrJNtnAl8dKtwDTJN9iOG8MjPpgc0N0OAARVXhQ4UG4LhOfa7GEvI7AoLr%2FI46Uni%2BXJZKBEjRh6QGCzQEpXh6kYeqBxANzkL9UK2IX%2Bubf%2F9vPqW5%2B2c%2F61IHsMenNhufah0BCW08Rob5ynx6MFXCZZBgrx3OeNwUx4lbsH3O5SSAHe21C8y%2FoI2sMHXRrI%2F3on4C8Y9HpXAAYkuqm92jg6vUB2OzK9t89AbsXHnFRSCni3Oexil8FJb0nETlPYffKdeY6uPKaAJm8WrB2ItkJuQ%2FG5NHvCg4v7sUl9w3VsPMjzKzId%2Foh6gHr2flCfFEmRzfgFnWRjrHZrqUFxuWYGcWV42DIzxo732aBzXXYojli5Z85OH5psvGScHhFQ7%2B8n1Zme7G8Je86xgYWzfAPCJ%2Fp2Iz9AnXPqVftt7IzCn5rCeAVwA3WqVe9k2QQulWHj9hgM0PNHFuugaHgX07MWFD3wy2x0h5z%2FrLGkDOIXY4sXF2NNDgyJK3ZA%2Fq0rNkjHja6D0AoMQdqkW3hAexwz2E9cX3Pnrjx0eLYxwwFUHeQ1V2HKjQz%2BOdWRpxe%2B2mdUuinV7hMHT3vcljiwG2wJtaBGNEcwSv5gskR4iNwa1q%2FLje1rrRXH51cCd6Fxum9seA814wnd7zwwY6pgH4jxgqB6FNSRS3y2vUOPE9%2FOUxBIqe8HZPBZaT4ygEZrHnUDYp6ifswWgpUkf6gQ928EAjBLtrXuT5ithVDnb4QweGHpjI3LmKrVTaueiAUTEDXi5eatkxZ4UKJh9eBHl3gDhWHKaYrSKwRBT8pAi53TDGIdG82NmSR2X4SpSMIquzaL3DyyJT6TIg%2B%2FUdedn0MgA6FSwOpbpKjBwoX4EQ06i%2FZXoj&X-Amz-Signature=ea64d9b08bcd7e2b922cd15c35c2beb26dc098557cb7fc40cdbb0c98efc344fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
