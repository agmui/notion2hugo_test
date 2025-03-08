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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMKFM3F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCchb00k6OGqcjEhO8DmBNPT94bjl6w5tohHRIY1fo58QIhAM6m2Z6l3UUSiCo4CVsgcKhg3Y4HX13QfkZxUGOoxnLeKv8DCFgQABoMNjM3NDIzMTgzODA1Igy1c19Pt3kaiIGUYpsq3AOMmntQRoKrIaIJGBuHs4xEyGfYjDxN73iIhHeaLx%2F5abs5AGli6UX%2FTo7lnmxnHfdf5HidektbHwj9N8XgobjmcRGszlfo2MaQSbV0%2F1%2Fvsy4ye9QXKlAE7alMlJ4AalY3uSofcsCuNW3f%2FY%2FgnIWMbLL123gr5lREQXUcUn5ebszYBh17OEt9vtDRUzqDjggD%2BfbuLY9pJ5FIwI8L4rXorsQETmMXVaGi%2B%2Fmveqw2dNjHJrwwHatclFNYRhRZWCEeD8R48KTJVe4VAbt0ghqmWsiKWcZlhJt61zN9m3pJEnTLOuEnqugtsaG9MKj8Zd%2FceQHxiBsstrCnzf%2FVh1H7350zJb5uRj1KZHn%2B%2Bs3DLxCr1LZJSV6PL44j%2B8EU14Rb8kLKT71s4MJ4mGz6ncw%2FUvihRMmrTIO0KCMQ%2FS23D%2BEQuGu%2B2WjS6SYM9m0y3y94gHv1yo44T9gKfBE26V%2BwaCAUo%2FwKbSbwlWcpaHviZ1cRPqGjFyIhFG%2BgA2WFVi04FrwmVkorvQb0vCWDkouDr8zO4NkQ90TFXYQiyynMSyUn0xhixUIxlHVFxYKSwQ963Z1UNlM1Pyhp2z%2BWv3orVZVhx5PXLZdse82femy224%2FJLw8WpxdMq0STMzCd4K%2B%2BBjqkAYVqdber1s44uzo0X%2BQ4TqvyzF43g3D2iOOW9Ba5CBEHGz3hrphg0pRNukXODfQ1idC6cE9HsifncgQZV%2BXvXcH1AHC5dqyDTTru2%2FxbXSdTv%2BOOlze5QQ7U3DyuxnVG8yGiyf0jYtOE3sE1%2Ff%2FupGr9o5w0KvnB5yowXC7bTg2Nn4mcLJbKYzjs818I6aym4NLJjkaAysX93F%2Ba%2B8McSj5BO2%2Ff&X-Amz-Signature=a23c668288448a4d4c6dfa2cbf3a2c81f5c6d52d92bd2c397fe152971c28a03c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMKFM3F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCchb00k6OGqcjEhO8DmBNPT94bjl6w5tohHRIY1fo58QIhAM6m2Z6l3UUSiCo4CVsgcKhg3Y4HX13QfkZxUGOoxnLeKv8DCFgQABoMNjM3NDIzMTgzODA1Igy1c19Pt3kaiIGUYpsq3AOMmntQRoKrIaIJGBuHs4xEyGfYjDxN73iIhHeaLx%2F5abs5AGli6UX%2FTo7lnmxnHfdf5HidektbHwj9N8XgobjmcRGszlfo2MaQSbV0%2F1%2Fvsy4ye9QXKlAE7alMlJ4AalY3uSofcsCuNW3f%2FY%2FgnIWMbLL123gr5lREQXUcUn5ebszYBh17OEt9vtDRUzqDjggD%2BfbuLY9pJ5FIwI8L4rXorsQETmMXVaGi%2B%2Fmveqw2dNjHJrwwHatclFNYRhRZWCEeD8R48KTJVe4VAbt0ghqmWsiKWcZlhJt61zN9m3pJEnTLOuEnqugtsaG9MKj8Zd%2FceQHxiBsstrCnzf%2FVh1H7350zJb5uRj1KZHn%2B%2Bs3DLxCr1LZJSV6PL44j%2B8EU14Rb8kLKT71s4MJ4mGz6ncw%2FUvihRMmrTIO0KCMQ%2FS23D%2BEQuGu%2B2WjS6SYM9m0y3y94gHv1yo44T9gKfBE26V%2BwaCAUo%2FwKbSbwlWcpaHviZ1cRPqGjFyIhFG%2BgA2WFVi04FrwmVkorvQb0vCWDkouDr8zO4NkQ90TFXYQiyynMSyUn0xhixUIxlHVFxYKSwQ963Z1UNlM1Pyhp2z%2BWv3orVZVhx5PXLZdse82femy224%2FJLw8WpxdMq0STMzCd4K%2B%2BBjqkAYVqdber1s44uzo0X%2BQ4TqvyzF43g3D2iOOW9Ba5CBEHGz3hrphg0pRNukXODfQ1idC6cE9HsifncgQZV%2BXvXcH1AHC5dqyDTTru2%2FxbXSdTv%2BOOlze5QQ7U3DyuxnVG8yGiyf0jYtOE3sE1%2Ff%2FupGr9o5w0KvnB5yowXC7bTg2Nn4mcLJbKYzjs818I6aym4NLJjkaAysX93F%2Ba%2B8McSj5BO2%2Ff&X-Amz-Signature=30e2125a219e827fd7991862122635a3f2dc945a9844db6568107224a371ae94&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMKFM3F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCchb00k6OGqcjEhO8DmBNPT94bjl6w5tohHRIY1fo58QIhAM6m2Z6l3UUSiCo4CVsgcKhg3Y4HX13QfkZxUGOoxnLeKv8DCFgQABoMNjM3NDIzMTgzODA1Igy1c19Pt3kaiIGUYpsq3AOMmntQRoKrIaIJGBuHs4xEyGfYjDxN73iIhHeaLx%2F5abs5AGli6UX%2FTo7lnmxnHfdf5HidektbHwj9N8XgobjmcRGszlfo2MaQSbV0%2F1%2Fvsy4ye9QXKlAE7alMlJ4AalY3uSofcsCuNW3f%2FY%2FgnIWMbLL123gr5lREQXUcUn5ebszYBh17OEt9vtDRUzqDjggD%2BfbuLY9pJ5FIwI8L4rXorsQETmMXVaGi%2B%2Fmveqw2dNjHJrwwHatclFNYRhRZWCEeD8R48KTJVe4VAbt0ghqmWsiKWcZlhJt61zN9m3pJEnTLOuEnqugtsaG9MKj8Zd%2FceQHxiBsstrCnzf%2FVh1H7350zJb5uRj1KZHn%2B%2Bs3DLxCr1LZJSV6PL44j%2B8EU14Rb8kLKT71s4MJ4mGz6ncw%2FUvihRMmrTIO0KCMQ%2FS23D%2BEQuGu%2B2WjS6SYM9m0y3y94gHv1yo44T9gKfBE26V%2BwaCAUo%2FwKbSbwlWcpaHviZ1cRPqGjFyIhFG%2BgA2WFVi04FrwmVkorvQb0vCWDkouDr8zO4NkQ90TFXYQiyynMSyUn0xhixUIxlHVFxYKSwQ963Z1UNlM1Pyhp2z%2BWv3orVZVhx5PXLZdse82femy224%2FJLw8WpxdMq0STMzCd4K%2B%2BBjqkAYVqdber1s44uzo0X%2BQ4TqvyzF43g3D2iOOW9Ba5CBEHGz3hrphg0pRNukXODfQ1idC6cE9HsifncgQZV%2BXvXcH1AHC5dqyDTTru2%2FxbXSdTv%2BOOlze5QQ7U3DyuxnVG8yGiyf0jYtOE3sE1%2Ff%2FupGr9o5w0KvnB5yowXC7bTg2Nn4mcLJbKYzjs818I6aym4NLJjkaAysX93F%2Ba%2B8McSj5BO2%2Ff&X-Amz-Signature=ff36f14c7bace9b0b8ab84158b5dde98be738fc65f42d88c2b641c2e1b13956a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMKFM3F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCchb00k6OGqcjEhO8DmBNPT94bjl6w5tohHRIY1fo58QIhAM6m2Z6l3UUSiCo4CVsgcKhg3Y4HX13QfkZxUGOoxnLeKv8DCFgQABoMNjM3NDIzMTgzODA1Igy1c19Pt3kaiIGUYpsq3AOMmntQRoKrIaIJGBuHs4xEyGfYjDxN73iIhHeaLx%2F5abs5AGli6UX%2FTo7lnmxnHfdf5HidektbHwj9N8XgobjmcRGszlfo2MaQSbV0%2F1%2Fvsy4ye9QXKlAE7alMlJ4AalY3uSofcsCuNW3f%2FY%2FgnIWMbLL123gr5lREQXUcUn5ebszYBh17OEt9vtDRUzqDjggD%2BfbuLY9pJ5FIwI8L4rXorsQETmMXVaGi%2B%2Fmveqw2dNjHJrwwHatclFNYRhRZWCEeD8R48KTJVe4VAbt0ghqmWsiKWcZlhJt61zN9m3pJEnTLOuEnqugtsaG9MKj8Zd%2FceQHxiBsstrCnzf%2FVh1H7350zJb5uRj1KZHn%2B%2Bs3DLxCr1LZJSV6PL44j%2B8EU14Rb8kLKT71s4MJ4mGz6ncw%2FUvihRMmrTIO0KCMQ%2FS23D%2BEQuGu%2B2WjS6SYM9m0y3y94gHv1yo44T9gKfBE26V%2BwaCAUo%2FwKbSbwlWcpaHviZ1cRPqGjFyIhFG%2BgA2WFVi04FrwmVkorvQb0vCWDkouDr8zO4NkQ90TFXYQiyynMSyUn0xhixUIxlHVFxYKSwQ963Z1UNlM1Pyhp2z%2BWv3orVZVhx5PXLZdse82femy224%2FJLw8WpxdMq0STMzCd4K%2B%2BBjqkAYVqdber1s44uzo0X%2BQ4TqvyzF43g3D2iOOW9Ba5CBEHGz3hrphg0pRNukXODfQ1idC6cE9HsifncgQZV%2BXvXcH1AHC5dqyDTTru2%2FxbXSdTv%2BOOlze5QQ7U3DyuxnVG8yGiyf0jYtOE3sE1%2Ff%2FupGr9o5w0KvnB5yowXC7bTg2Nn4mcLJbKYzjs818I6aym4NLJjkaAysX93F%2Ba%2B8McSj5BO2%2Ff&X-Amz-Signature=18c5f4641a99cfca00d5e61a49b6d25a4897b6853f948ae7e4b9bbe04f5752f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMKFM3F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCchb00k6OGqcjEhO8DmBNPT94bjl6w5tohHRIY1fo58QIhAM6m2Z6l3UUSiCo4CVsgcKhg3Y4HX13QfkZxUGOoxnLeKv8DCFgQABoMNjM3NDIzMTgzODA1Igy1c19Pt3kaiIGUYpsq3AOMmntQRoKrIaIJGBuHs4xEyGfYjDxN73iIhHeaLx%2F5abs5AGli6UX%2FTo7lnmxnHfdf5HidektbHwj9N8XgobjmcRGszlfo2MaQSbV0%2F1%2Fvsy4ye9QXKlAE7alMlJ4AalY3uSofcsCuNW3f%2FY%2FgnIWMbLL123gr5lREQXUcUn5ebszYBh17OEt9vtDRUzqDjggD%2BfbuLY9pJ5FIwI8L4rXorsQETmMXVaGi%2B%2Fmveqw2dNjHJrwwHatclFNYRhRZWCEeD8R48KTJVe4VAbt0ghqmWsiKWcZlhJt61zN9m3pJEnTLOuEnqugtsaG9MKj8Zd%2FceQHxiBsstrCnzf%2FVh1H7350zJb5uRj1KZHn%2B%2Bs3DLxCr1LZJSV6PL44j%2B8EU14Rb8kLKT71s4MJ4mGz6ncw%2FUvihRMmrTIO0KCMQ%2FS23D%2BEQuGu%2B2WjS6SYM9m0y3y94gHv1yo44T9gKfBE26V%2BwaCAUo%2FwKbSbwlWcpaHviZ1cRPqGjFyIhFG%2BgA2WFVi04FrwmVkorvQb0vCWDkouDr8zO4NkQ90TFXYQiyynMSyUn0xhixUIxlHVFxYKSwQ963Z1UNlM1Pyhp2z%2BWv3orVZVhx5PXLZdse82femy224%2FJLw8WpxdMq0STMzCd4K%2B%2BBjqkAYVqdber1s44uzo0X%2BQ4TqvyzF43g3D2iOOW9Ba5CBEHGz3hrphg0pRNukXODfQ1idC6cE9HsifncgQZV%2BXvXcH1AHC5dqyDTTru2%2FxbXSdTv%2BOOlze5QQ7U3DyuxnVG8yGiyf0jYtOE3sE1%2Ff%2FupGr9o5w0KvnB5yowXC7bTg2Nn4mcLJbKYzjs818I6aym4NLJjkaAysX93F%2Ba%2B8McSj5BO2%2Ff&X-Amz-Signature=07f46e953f7e4284b6c3215b1bb0b39aca9b6300fc563f29d9539327c995edc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMKFM3F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCchb00k6OGqcjEhO8DmBNPT94bjl6w5tohHRIY1fo58QIhAM6m2Z6l3UUSiCo4CVsgcKhg3Y4HX13QfkZxUGOoxnLeKv8DCFgQABoMNjM3NDIzMTgzODA1Igy1c19Pt3kaiIGUYpsq3AOMmntQRoKrIaIJGBuHs4xEyGfYjDxN73iIhHeaLx%2F5abs5AGli6UX%2FTo7lnmxnHfdf5HidektbHwj9N8XgobjmcRGszlfo2MaQSbV0%2F1%2Fvsy4ye9QXKlAE7alMlJ4AalY3uSofcsCuNW3f%2FY%2FgnIWMbLL123gr5lREQXUcUn5ebszYBh17OEt9vtDRUzqDjggD%2BfbuLY9pJ5FIwI8L4rXorsQETmMXVaGi%2B%2Fmveqw2dNjHJrwwHatclFNYRhRZWCEeD8R48KTJVe4VAbt0ghqmWsiKWcZlhJt61zN9m3pJEnTLOuEnqugtsaG9MKj8Zd%2FceQHxiBsstrCnzf%2FVh1H7350zJb5uRj1KZHn%2B%2Bs3DLxCr1LZJSV6PL44j%2B8EU14Rb8kLKT71s4MJ4mGz6ncw%2FUvihRMmrTIO0KCMQ%2FS23D%2BEQuGu%2B2WjS6SYM9m0y3y94gHv1yo44T9gKfBE26V%2BwaCAUo%2FwKbSbwlWcpaHviZ1cRPqGjFyIhFG%2BgA2WFVi04FrwmVkorvQb0vCWDkouDr8zO4NkQ90TFXYQiyynMSyUn0xhixUIxlHVFxYKSwQ963Z1UNlM1Pyhp2z%2BWv3orVZVhx5PXLZdse82femy224%2FJLw8WpxdMq0STMzCd4K%2B%2BBjqkAYVqdber1s44uzo0X%2BQ4TqvyzF43g3D2iOOW9Ba5CBEHGz3hrphg0pRNukXODfQ1idC6cE9HsifncgQZV%2BXvXcH1AHC5dqyDTTru2%2FxbXSdTv%2BOOlze5QQ7U3DyuxnVG8yGiyf0jYtOE3sE1%2Ff%2FupGr9o5w0KvnB5yowXC7bTg2Nn4mcLJbKYzjs818I6aym4NLJjkaAysX93F%2Ba%2B8McSj5BO2%2Ff&X-Amz-Signature=294e889abe90537fdef83c6b3cd9691d8d8f1817ad572de8361d0ea027c6bf13&X-Amz-SignedHeaders=host&x-id=GetObject)
