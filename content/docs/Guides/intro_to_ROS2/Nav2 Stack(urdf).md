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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HFYGKA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDpVKs5SbKM5DupF9D8DDeaMlXK918%2FVhQc3QSe5kAFowIgJ9Bne0rrS0fGMZhNrRSk6YjVXJbJrGlIWJcEAwynXLkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwNlufTlKedl4M%2BhSrcAwCTWRP2A%2F%2B8yVxtdoaEcKDVvT%2BE2zQvS5PqQ7vIhm4XUL3fdJyw1foLSFay1FTrBHajaf0hFIJDGZhfWLgHFM0UcX7EAcMjHmzWjh3BnmXaFhrA0xFqP0o46KNG%2FnAUliEJwXLCY0S0vVIqfOJw6trjkgPIBcmaeMML4PSssUfw0rZQ1pJq8OAsw8LStc47RsJ5Caz%2Bo2%2BR7w7fhJkeeJ2tFtNQRR3SyZIlp%2FKIeymBa5cAWSR7jRlQx%2FLFoLBzjfuMfG5oI%2FV599k%2FsOWMeaCNYMkq5cgVj8SRGhs6QncFJo2gQ9MNsPS9M%2BB2Y4T5tNaFJ5mAL%2FWCzBoUkBoeQzUcEvfC9tlPCbwHGLHQUmEovREBaOkY1hXMN%2BBJmM%2BX80cdxLghn%2FRi7ldbFkfpraxwl%2BdxL7a0rAmBKGouNHmmopzmMhvi%2FxchDw25fOC0G0oiKjzeoPY634MfmtWRQZjVLZyDcYy9YMjXTr%2F1K5EGBOtwQXDrU3k2VRAokEzhYopZjgLJhrudxijTray6SxNPmsJz7jYE%2ByxFU5hx2dTp3ADFaPWfRq6%2BDks1bcN0KLg45WhMtAllNNx%2FUgThsoo7nWNXl1VJ5p0sQKzVjrcCWyax%2FQf7pWxVhk7BMOKSscMGOqUBxoj6SGqP2hdAlgaUeuUa0ZbztEEbmW0mIimFqU%2BBYsweCKM2WsRoF%2FZ7X4tJfWIut%2ByMnnwKkXGE%2BKpmDMG92SOpQkclQJAD0dxaynaATQQiGOwHKCh2VGGij5yp7ctcZc19qE%2FbX03kQHhDuUWftmFXcPLrc%2FxrpyEjfuOgkvSJMRAAHHpVB3oXLE3Ea4Rr9kYFaTIwQCKal4tYRbfedMO2BHZd&X-Amz-Signature=685d3ddf63866b101bb89a1ce2d4fbb1c072372d4f07409cd6137a0f1b51397c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HFYGKA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDpVKs5SbKM5DupF9D8DDeaMlXK918%2FVhQc3QSe5kAFowIgJ9Bne0rrS0fGMZhNrRSk6YjVXJbJrGlIWJcEAwynXLkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwNlufTlKedl4M%2BhSrcAwCTWRP2A%2F%2B8yVxtdoaEcKDVvT%2BE2zQvS5PqQ7vIhm4XUL3fdJyw1foLSFay1FTrBHajaf0hFIJDGZhfWLgHFM0UcX7EAcMjHmzWjh3BnmXaFhrA0xFqP0o46KNG%2FnAUliEJwXLCY0S0vVIqfOJw6trjkgPIBcmaeMML4PSssUfw0rZQ1pJq8OAsw8LStc47RsJ5Caz%2Bo2%2BR7w7fhJkeeJ2tFtNQRR3SyZIlp%2FKIeymBa5cAWSR7jRlQx%2FLFoLBzjfuMfG5oI%2FV599k%2FsOWMeaCNYMkq5cgVj8SRGhs6QncFJo2gQ9MNsPS9M%2BB2Y4T5tNaFJ5mAL%2FWCzBoUkBoeQzUcEvfC9tlPCbwHGLHQUmEovREBaOkY1hXMN%2BBJmM%2BX80cdxLghn%2FRi7ldbFkfpraxwl%2BdxL7a0rAmBKGouNHmmopzmMhvi%2FxchDw25fOC0G0oiKjzeoPY634MfmtWRQZjVLZyDcYy9YMjXTr%2F1K5EGBOtwQXDrU3k2VRAokEzhYopZjgLJhrudxijTray6SxNPmsJz7jYE%2ByxFU5hx2dTp3ADFaPWfRq6%2BDks1bcN0KLg45WhMtAllNNx%2FUgThsoo7nWNXl1VJ5p0sQKzVjrcCWyax%2FQf7pWxVhk7BMOKSscMGOqUBxoj6SGqP2hdAlgaUeuUa0ZbztEEbmW0mIimFqU%2BBYsweCKM2WsRoF%2FZ7X4tJfWIut%2ByMnnwKkXGE%2BKpmDMG92SOpQkclQJAD0dxaynaATQQiGOwHKCh2VGGij5yp7ctcZc19qE%2FbX03kQHhDuUWftmFXcPLrc%2FxrpyEjfuOgkvSJMRAAHHpVB3oXLE3Ea4Rr9kYFaTIwQCKal4tYRbfedMO2BHZd&X-Amz-Signature=0c562325872d01f904b39c7e24d0767b14e16f6135ae64fc1f23d9f2b1689c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HFYGKA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDpVKs5SbKM5DupF9D8DDeaMlXK918%2FVhQc3QSe5kAFowIgJ9Bne0rrS0fGMZhNrRSk6YjVXJbJrGlIWJcEAwynXLkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwNlufTlKedl4M%2BhSrcAwCTWRP2A%2F%2B8yVxtdoaEcKDVvT%2BE2zQvS5PqQ7vIhm4XUL3fdJyw1foLSFay1FTrBHajaf0hFIJDGZhfWLgHFM0UcX7EAcMjHmzWjh3BnmXaFhrA0xFqP0o46KNG%2FnAUliEJwXLCY0S0vVIqfOJw6trjkgPIBcmaeMML4PSssUfw0rZQ1pJq8OAsw8LStc47RsJ5Caz%2Bo2%2BR7w7fhJkeeJ2tFtNQRR3SyZIlp%2FKIeymBa5cAWSR7jRlQx%2FLFoLBzjfuMfG5oI%2FV599k%2FsOWMeaCNYMkq5cgVj8SRGhs6QncFJo2gQ9MNsPS9M%2BB2Y4T5tNaFJ5mAL%2FWCzBoUkBoeQzUcEvfC9tlPCbwHGLHQUmEovREBaOkY1hXMN%2BBJmM%2BX80cdxLghn%2FRi7ldbFkfpraxwl%2BdxL7a0rAmBKGouNHmmopzmMhvi%2FxchDw25fOC0G0oiKjzeoPY634MfmtWRQZjVLZyDcYy9YMjXTr%2F1K5EGBOtwQXDrU3k2VRAokEzhYopZjgLJhrudxijTray6SxNPmsJz7jYE%2ByxFU5hx2dTp3ADFaPWfRq6%2BDks1bcN0KLg45WhMtAllNNx%2FUgThsoo7nWNXl1VJ5p0sQKzVjrcCWyax%2FQf7pWxVhk7BMOKSscMGOqUBxoj6SGqP2hdAlgaUeuUa0ZbztEEbmW0mIimFqU%2BBYsweCKM2WsRoF%2FZ7X4tJfWIut%2ByMnnwKkXGE%2BKpmDMG92SOpQkclQJAD0dxaynaATQQiGOwHKCh2VGGij5yp7ctcZc19qE%2FbX03kQHhDuUWftmFXcPLrc%2FxrpyEjfuOgkvSJMRAAHHpVB3oXLE3Ea4Rr9kYFaTIwQCKal4tYRbfedMO2BHZd&X-Amz-Signature=508d4e83ad3fadeeebff10930422eba6c77597970a1c5e74b35a52f034bcddb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HFYGKA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDpVKs5SbKM5DupF9D8DDeaMlXK918%2FVhQc3QSe5kAFowIgJ9Bne0rrS0fGMZhNrRSk6YjVXJbJrGlIWJcEAwynXLkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwNlufTlKedl4M%2BhSrcAwCTWRP2A%2F%2B8yVxtdoaEcKDVvT%2BE2zQvS5PqQ7vIhm4XUL3fdJyw1foLSFay1FTrBHajaf0hFIJDGZhfWLgHFM0UcX7EAcMjHmzWjh3BnmXaFhrA0xFqP0o46KNG%2FnAUliEJwXLCY0S0vVIqfOJw6trjkgPIBcmaeMML4PSssUfw0rZQ1pJq8OAsw8LStc47RsJ5Caz%2Bo2%2BR7w7fhJkeeJ2tFtNQRR3SyZIlp%2FKIeymBa5cAWSR7jRlQx%2FLFoLBzjfuMfG5oI%2FV599k%2FsOWMeaCNYMkq5cgVj8SRGhs6QncFJo2gQ9MNsPS9M%2BB2Y4T5tNaFJ5mAL%2FWCzBoUkBoeQzUcEvfC9tlPCbwHGLHQUmEovREBaOkY1hXMN%2BBJmM%2BX80cdxLghn%2FRi7ldbFkfpraxwl%2BdxL7a0rAmBKGouNHmmopzmMhvi%2FxchDw25fOC0G0oiKjzeoPY634MfmtWRQZjVLZyDcYy9YMjXTr%2F1K5EGBOtwQXDrU3k2VRAokEzhYopZjgLJhrudxijTray6SxNPmsJz7jYE%2ByxFU5hx2dTp3ADFaPWfRq6%2BDks1bcN0KLg45WhMtAllNNx%2FUgThsoo7nWNXl1VJ5p0sQKzVjrcCWyax%2FQf7pWxVhk7BMOKSscMGOqUBxoj6SGqP2hdAlgaUeuUa0ZbztEEbmW0mIimFqU%2BBYsweCKM2WsRoF%2FZ7X4tJfWIut%2ByMnnwKkXGE%2BKpmDMG92SOpQkclQJAD0dxaynaATQQiGOwHKCh2VGGij5yp7ctcZc19qE%2FbX03kQHhDuUWftmFXcPLrc%2FxrpyEjfuOgkvSJMRAAHHpVB3oXLE3Ea4Rr9kYFaTIwQCKal4tYRbfedMO2BHZd&X-Amz-Signature=4bb22adf1edc4da2e6576c12547c433b9b44bcea05f87703e67489e5ee9ccab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HFYGKA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDpVKs5SbKM5DupF9D8DDeaMlXK918%2FVhQc3QSe5kAFowIgJ9Bne0rrS0fGMZhNrRSk6YjVXJbJrGlIWJcEAwynXLkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwNlufTlKedl4M%2BhSrcAwCTWRP2A%2F%2B8yVxtdoaEcKDVvT%2BE2zQvS5PqQ7vIhm4XUL3fdJyw1foLSFay1FTrBHajaf0hFIJDGZhfWLgHFM0UcX7EAcMjHmzWjh3BnmXaFhrA0xFqP0o46KNG%2FnAUliEJwXLCY0S0vVIqfOJw6trjkgPIBcmaeMML4PSssUfw0rZQ1pJq8OAsw8LStc47RsJ5Caz%2Bo2%2BR7w7fhJkeeJ2tFtNQRR3SyZIlp%2FKIeymBa5cAWSR7jRlQx%2FLFoLBzjfuMfG5oI%2FV599k%2FsOWMeaCNYMkq5cgVj8SRGhs6QncFJo2gQ9MNsPS9M%2BB2Y4T5tNaFJ5mAL%2FWCzBoUkBoeQzUcEvfC9tlPCbwHGLHQUmEovREBaOkY1hXMN%2BBJmM%2BX80cdxLghn%2FRi7ldbFkfpraxwl%2BdxL7a0rAmBKGouNHmmopzmMhvi%2FxchDw25fOC0G0oiKjzeoPY634MfmtWRQZjVLZyDcYy9YMjXTr%2F1K5EGBOtwQXDrU3k2VRAokEzhYopZjgLJhrudxijTray6SxNPmsJz7jYE%2ByxFU5hx2dTp3ADFaPWfRq6%2BDks1bcN0KLg45WhMtAllNNx%2FUgThsoo7nWNXl1VJ5p0sQKzVjrcCWyax%2FQf7pWxVhk7BMOKSscMGOqUBxoj6SGqP2hdAlgaUeuUa0ZbztEEbmW0mIimFqU%2BBYsweCKM2WsRoF%2FZ7X4tJfWIut%2ByMnnwKkXGE%2BKpmDMG92SOpQkclQJAD0dxaynaATQQiGOwHKCh2VGGij5yp7ctcZc19qE%2FbX03kQHhDuUWftmFXcPLrc%2FxrpyEjfuOgkvSJMRAAHHpVB3oXLE3Ea4Rr9kYFaTIwQCKal4tYRbfedMO2BHZd&X-Amz-Signature=e8b452ef9032467df40015134b2dbc7065679dcdadf894f6c7cc556de0c9833f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4HFYGKA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDpVKs5SbKM5DupF9D8DDeaMlXK918%2FVhQc3QSe5kAFowIgJ9Bne0rrS0fGMZhNrRSk6YjVXJbJrGlIWJcEAwynXLkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwNlufTlKedl4M%2BhSrcAwCTWRP2A%2F%2B8yVxtdoaEcKDVvT%2BE2zQvS5PqQ7vIhm4XUL3fdJyw1foLSFay1FTrBHajaf0hFIJDGZhfWLgHFM0UcX7EAcMjHmzWjh3BnmXaFhrA0xFqP0o46KNG%2FnAUliEJwXLCY0S0vVIqfOJw6trjkgPIBcmaeMML4PSssUfw0rZQ1pJq8OAsw8LStc47RsJ5Caz%2Bo2%2BR7w7fhJkeeJ2tFtNQRR3SyZIlp%2FKIeymBa5cAWSR7jRlQx%2FLFoLBzjfuMfG5oI%2FV599k%2FsOWMeaCNYMkq5cgVj8SRGhs6QncFJo2gQ9MNsPS9M%2BB2Y4T5tNaFJ5mAL%2FWCzBoUkBoeQzUcEvfC9tlPCbwHGLHQUmEovREBaOkY1hXMN%2BBJmM%2BX80cdxLghn%2FRi7ldbFkfpraxwl%2BdxL7a0rAmBKGouNHmmopzmMhvi%2FxchDw25fOC0G0oiKjzeoPY634MfmtWRQZjVLZyDcYy9YMjXTr%2F1K5EGBOtwQXDrU3k2VRAokEzhYopZjgLJhrudxijTray6SxNPmsJz7jYE%2ByxFU5hx2dTp3ADFaPWfRq6%2BDks1bcN0KLg45WhMtAllNNx%2FUgThsoo7nWNXl1VJ5p0sQKzVjrcCWyax%2FQf7pWxVhk7BMOKSscMGOqUBxoj6SGqP2hdAlgaUeuUa0ZbztEEbmW0mIimFqU%2BBYsweCKM2WsRoF%2FZ7X4tJfWIut%2ByMnnwKkXGE%2BKpmDMG92SOpQkclQJAD0dxaynaATQQiGOwHKCh2VGGij5yp7ctcZc19qE%2FbX03kQHhDuUWftmFXcPLrc%2FxrpyEjfuOgkvSJMRAAHHpVB3oXLE3Ea4Rr9kYFaTIwQCKal4tYRbfedMO2BHZd&X-Amz-Signature=63806f4823acff9859761e449e0751b30b7ef688abcbd3e39a292f71315e407b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
