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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JD5B5O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtrN2p1WVKSGWkP17g0VMMSIb%2BnUQVrpsSeUe7QN4A2AiBPjGzHBUgM%2Bh%2Fs3HGVjG%2FE5H6iKIuzUdQtEnYFQcw75iqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70zHUrzSWO82vd%2FgKtwDkaiBAv7hAZpEEj%2B%2B66vlpTdKnEzVmGTla4cnLTMZMyqufYoNR%2FZn6YFxSexlC8P%2BJX0t0SoDrYsYX6bOuUoNcIeR%2FTe7xVIjYf4iKkO1v9yUiXaSbWa9yXucxasOUSgwPXilG42t5Ml%2FdzULwwZQtTr0PnyJay89JlioMTpWdNjsgINm5FpYEEavchwjopUVTkcUXORQ%2FQiTIZiIq3tHYudUzISr75nRBbEBjKNkidttg1yDxFtc8BmqzuoBR0ZToz1XXvSzhFPQVWGG2AFNGb5bQRZpFyoHYKv%2FsEBKkJIPk4ewvB%2FcWJJGId%2BISbsL%2Bd1UPlpsD8Pg485SiZg0ljVlq2Y%2FuvaBWW7j96pkt79cGBs%2F%2FB30cqLSnJEosB8dHQDQ2biuK%2FtgsFNcNwukJdX4QVUqM%2F5Nc0czltVB6AX9xP1SdLJhhKQ%2FsXYblitfmowrFASniarrupu7T6vfhh1xASga%2Fkcvx5idQLB8FESwGlds5g3N4jsMMfwUZYKVPJsqab5gP0k8MxFCS3G0XI8BUNNnQqohO60ucCfiAD1FXEtIVHTLwWJElKYrXqlpc69VyjZAZ1MaMyT35SqEX0KKgvEZpUc5fJuKs3gM6eFjWlNZw8XFrNhrqPMwof7DwwY6pgFIc6kxzuSoxPTaAtK8fCqI%2Fce350VvB5KnL8%2FtNcEm7ZPwvMPFriCYEI4zrdGTumW62URp6BhbuKRIgMDzxASVK6GCgFVognmD1d60orUKYfQ9Z1gzhF4G6N%2FZKxewe26xL745oX7OzWf6PGnOKez2XVt97DNFXd%2FycqqweIeN%2FjOV1CaXU2ZugjfPaEC6uTWvtKf0Ng7bv1Au0zg5qCxWn3fm%2Fxcn&X-Amz-Signature=cb0f76eb8521d150bd034afbfa34379c61d5e313fa48025b755ea42d70282cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JD5B5O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtrN2p1WVKSGWkP17g0VMMSIb%2BnUQVrpsSeUe7QN4A2AiBPjGzHBUgM%2Bh%2Fs3HGVjG%2FE5H6iKIuzUdQtEnYFQcw75iqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70zHUrzSWO82vd%2FgKtwDkaiBAv7hAZpEEj%2B%2B66vlpTdKnEzVmGTla4cnLTMZMyqufYoNR%2FZn6YFxSexlC8P%2BJX0t0SoDrYsYX6bOuUoNcIeR%2FTe7xVIjYf4iKkO1v9yUiXaSbWa9yXucxasOUSgwPXilG42t5Ml%2FdzULwwZQtTr0PnyJay89JlioMTpWdNjsgINm5FpYEEavchwjopUVTkcUXORQ%2FQiTIZiIq3tHYudUzISr75nRBbEBjKNkidttg1yDxFtc8BmqzuoBR0ZToz1XXvSzhFPQVWGG2AFNGb5bQRZpFyoHYKv%2FsEBKkJIPk4ewvB%2FcWJJGId%2BISbsL%2Bd1UPlpsD8Pg485SiZg0ljVlq2Y%2FuvaBWW7j96pkt79cGBs%2F%2FB30cqLSnJEosB8dHQDQ2biuK%2FtgsFNcNwukJdX4QVUqM%2F5Nc0czltVB6AX9xP1SdLJhhKQ%2FsXYblitfmowrFASniarrupu7T6vfhh1xASga%2Fkcvx5idQLB8FESwGlds5g3N4jsMMfwUZYKVPJsqab5gP0k8MxFCS3G0XI8BUNNnQqohO60ucCfiAD1FXEtIVHTLwWJElKYrXqlpc69VyjZAZ1MaMyT35SqEX0KKgvEZpUc5fJuKs3gM6eFjWlNZw8XFrNhrqPMwof7DwwY6pgFIc6kxzuSoxPTaAtK8fCqI%2Fce350VvB5KnL8%2FtNcEm7ZPwvMPFriCYEI4zrdGTumW62URp6BhbuKRIgMDzxASVK6GCgFVognmD1d60orUKYfQ9Z1gzhF4G6N%2FZKxewe26xL745oX7OzWf6PGnOKez2XVt97DNFXd%2FycqqweIeN%2FjOV1CaXU2ZugjfPaEC6uTWvtKf0Ng7bv1Au0zg5qCxWn3fm%2Fxcn&X-Amz-Signature=bb9207401acd8656c975f35fe71e01fe91bf1efcedc945ddbec48112f8cd0a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JD5B5O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtrN2p1WVKSGWkP17g0VMMSIb%2BnUQVrpsSeUe7QN4A2AiBPjGzHBUgM%2Bh%2Fs3HGVjG%2FE5H6iKIuzUdQtEnYFQcw75iqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70zHUrzSWO82vd%2FgKtwDkaiBAv7hAZpEEj%2B%2B66vlpTdKnEzVmGTla4cnLTMZMyqufYoNR%2FZn6YFxSexlC8P%2BJX0t0SoDrYsYX6bOuUoNcIeR%2FTe7xVIjYf4iKkO1v9yUiXaSbWa9yXucxasOUSgwPXilG42t5Ml%2FdzULwwZQtTr0PnyJay89JlioMTpWdNjsgINm5FpYEEavchwjopUVTkcUXORQ%2FQiTIZiIq3tHYudUzISr75nRBbEBjKNkidttg1yDxFtc8BmqzuoBR0ZToz1XXvSzhFPQVWGG2AFNGb5bQRZpFyoHYKv%2FsEBKkJIPk4ewvB%2FcWJJGId%2BISbsL%2Bd1UPlpsD8Pg485SiZg0ljVlq2Y%2FuvaBWW7j96pkt79cGBs%2F%2FB30cqLSnJEosB8dHQDQ2biuK%2FtgsFNcNwukJdX4QVUqM%2F5Nc0czltVB6AX9xP1SdLJhhKQ%2FsXYblitfmowrFASniarrupu7T6vfhh1xASga%2Fkcvx5idQLB8FESwGlds5g3N4jsMMfwUZYKVPJsqab5gP0k8MxFCS3G0XI8BUNNnQqohO60ucCfiAD1FXEtIVHTLwWJElKYrXqlpc69VyjZAZ1MaMyT35SqEX0KKgvEZpUc5fJuKs3gM6eFjWlNZw8XFrNhrqPMwof7DwwY6pgFIc6kxzuSoxPTaAtK8fCqI%2Fce350VvB5KnL8%2FtNcEm7ZPwvMPFriCYEI4zrdGTumW62URp6BhbuKRIgMDzxASVK6GCgFVognmD1d60orUKYfQ9Z1gzhF4G6N%2FZKxewe26xL745oX7OzWf6PGnOKez2XVt97DNFXd%2FycqqweIeN%2FjOV1CaXU2ZugjfPaEC6uTWvtKf0Ng7bv1Au0zg5qCxWn3fm%2Fxcn&X-Amz-Signature=7b11e3b84090c7b7b3482a2a72cd84a0a93772c63b1ffb5356611e4bfe776370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JD5B5O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtrN2p1WVKSGWkP17g0VMMSIb%2BnUQVrpsSeUe7QN4A2AiBPjGzHBUgM%2Bh%2Fs3HGVjG%2FE5H6iKIuzUdQtEnYFQcw75iqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70zHUrzSWO82vd%2FgKtwDkaiBAv7hAZpEEj%2B%2B66vlpTdKnEzVmGTla4cnLTMZMyqufYoNR%2FZn6YFxSexlC8P%2BJX0t0SoDrYsYX6bOuUoNcIeR%2FTe7xVIjYf4iKkO1v9yUiXaSbWa9yXucxasOUSgwPXilG42t5Ml%2FdzULwwZQtTr0PnyJay89JlioMTpWdNjsgINm5FpYEEavchwjopUVTkcUXORQ%2FQiTIZiIq3tHYudUzISr75nRBbEBjKNkidttg1yDxFtc8BmqzuoBR0ZToz1XXvSzhFPQVWGG2AFNGb5bQRZpFyoHYKv%2FsEBKkJIPk4ewvB%2FcWJJGId%2BISbsL%2Bd1UPlpsD8Pg485SiZg0ljVlq2Y%2FuvaBWW7j96pkt79cGBs%2F%2FB30cqLSnJEosB8dHQDQ2biuK%2FtgsFNcNwukJdX4QVUqM%2F5Nc0czltVB6AX9xP1SdLJhhKQ%2FsXYblitfmowrFASniarrupu7T6vfhh1xASga%2Fkcvx5idQLB8FESwGlds5g3N4jsMMfwUZYKVPJsqab5gP0k8MxFCS3G0XI8BUNNnQqohO60ucCfiAD1FXEtIVHTLwWJElKYrXqlpc69VyjZAZ1MaMyT35SqEX0KKgvEZpUc5fJuKs3gM6eFjWlNZw8XFrNhrqPMwof7DwwY6pgFIc6kxzuSoxPTaAtK8fCqI%2Fce350VvB5KnL8%2FtNcEm7ZPwvMPFriCYEI4zrdGTumW62URp6BhbuKRIgMDzxASVK6GCgFVognmD1d60orUKYfQ9Z1gzhF4G6N%2FZKxewe26xL745oX7OzWf6PGnOKez2XVt97DNFXd%2FycqqweIeN%2FjOV1CaXU2ZugjfPaEC6uTWvtKf0Ng7bv1Au0zg5qCxWn3fm%2Fxcn&X-Amz-Signature=74fb3c806ad27e6123c125905524e0a6eb360b5cdd4b8686e8de98493ae0cecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JD5B5O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtrN2p1WVKSGWkP17g0VMMSIb%2BnUQVrpsSeUe7QN4A2AiBPjGzHBUgM%2Bh%2Fs3HGVjG%2FE5H6iKIuzUdQtEnYFQcw75iqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70zHUrzSWO82vd%2FgKtwDkaiBAv7hAZpEEj%2B%2B66vlpTdKnEzVmGTla4cnLTMZMyqufYoNR%2FZn6YFxSexlC8P%2BJX0t0SoDrYsYX6bOuUoNcIeR%2FTe7xVIjYf4iKkO1v9yUiXaSbWa9yXucxasOUSgwPXilG42t5Ml%2FdzULwwZQtTr0PnyJay89JlioMTpWdNjsgINm5FpYEEavchwjopUVTkcUXORQ%2FQiTIZiIq3tHYudUzISr75nRBbEBjKNkidttg1yDxFtc8BmqzuoBR0ZToz1XXvSzhFPQVWGG2AFNGb5bQRZpFyoHYKv%2FsEBKkJIPk4ewvB%2FcWJJGId%2BISbsL%2Bd1UPlpsD8Pg485SiZg0ljVlq2Y%2FuvaBWW7j96pkt79cGBs%2F%2FB30cqLSnJEosB8dHQDQ2biuK%2FtgsFNcNwukJdX4QVUqM%2F5Nc0czltVB6AX9xP1SdLJhhKQ%2FsXYblitfmowrFASniarrupu7T6vfhh1xASga%2Fkcvx5idQLB8FESwGlds5g3N4jsMMfwUZYKVPJsqab5gP0k8MxFCS3G0XI8BUNNnQqohO60ucCfiAD1FXEtIVHTLwWJElKYrXqlpc69VyjZAZ1MaMyT35SqEX0KKgvEZpUc5fJuKs3gM6eFjWlNZw8XFrNhrqPMwof7DwwY6pgFIc6kxzuSoxPTaAtK8fCqI%2Fce350VvB5KnL8%2FtNcEm7ZPwvMPFriCYEI4zrdGTumW62URp6BhbuKRIgMDzxASVK6GCgFVognmD1d60orUKYfQ9Z1gzhF4G6N%2FZKxewe26xL745oX7OzWf6PGnOKez2XVt97DNFXd%2FycqqweIeN%2FjOV1CaXU2ZugjfPaEC6uTWvtKf0Ng7bv1Au0zg5qCxWn3fm%2Fxcn&X-Amz-Signature=fea8b10dcde84bc6490edce5a75a905385a4bc059d8c2464bf4be0ac7e0af69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646JD5B5O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtrN2p1WVKSGWkP17g0VMMSIb%2BnUQVrpsSeUe7QN4A2AiBPjGzHBUgM%2Bh%2Fs3HGVjG%2FE5H6iKIuzUdQtEnYFQcw75iqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM70zHUrzSWO82vd%2FgKtwDkaiBAv7hAZpEEj%2B%2B66vlpTdKnEzVmGTla4cnLTMZMyqufYoNR%2FZn6YFxSexlC8P%2BJX0t0SoDrYsYX6bOuUoNcIeR%2FTe7xVIjYf4iKkO1v9yUiXaSbWa9yXucxasOUSgwPXilG42t5Ml%2FdzULwwZQtTr0PnyJay89JlioMTpWdNjsgINm5FpYEEavchwjopUVTkcUXORQ%2FQiTIZiIq3tHYudUzISr75nRBbEBjKNkidttg1yDxFtc8BmqzuoBR0ZToz1XXvSzhFPQVWGG2AFNGb5bQRZpFyoHYKv%2FsEBKkJIPk4ewvB%2FcWJJGId%2BISbsL%2Bd1UPlpsD8Pg485SiZg0ljVlq2Y%2FuvaBWW7j96pkt79cGBs%2F%2FB30cqLSnJEosB8dHQDQ2biuK%2FtgsFNcNwukJdX4QVUqM%2F5Nc0czltVB6AX9xP1SdLJhhKQ%2FsXYblitfmowrFASniarrupu7T6vfhh1xASga%2Fkcvx5idQLB8FESwGlds5g3N4jsMMfwUZYKVPJsqab5gP0k8MxFCS3G0XI8BUNNnQqohO60ucCfiAD1FXEtIVHTLwWJElKYrXqlpc69VyjZAZ1MaMyT35SqEX0KKgvEZpUc5fJuKs3gM6eFjWlNZw8XFrNhrqPMwof7DwwY6pgFIc6kxzuSoxPTaAtK8fCqI%2Fce350VvB5KnL8%2FtNcEm7ZPwvMPFriCYEI4zrdGTumW62URp6BhbuKRIgMDzxASVK6GCgFVognmD1d60orUKYfQ9Z1gzhF4G6N%2FZKxewe26xL745oX7OzWf6PGnOKez2XVt97DNFXd%2FycqqweIeN%2FjOV1CaXU2ZugjfPaEC6uTWvtKf0Ng7bv1Au0zg5qCxWn3fm%2Fxcn&X-Amz-Signature=98498dec5d0ee4d2904f430deef145c6fd3c85fedb3b35ab208341fc7999a75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
