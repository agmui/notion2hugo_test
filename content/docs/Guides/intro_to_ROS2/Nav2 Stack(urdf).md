---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R263QGJ5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcqo5S5iXf1FTyv51uy%2F0tGYgCjAnByf9CdoSnmm1JWAiAMph7kjHIfWay6bGAuoPIvZ4YWdkn97RXusPnICrxKviqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPo6c2pb%2FGJ50ZDWKtwDVlOTMzYBCVEC%2FLThD8NOVc0PvHIl0f%2BWSuLk0QjBbucim0ZCkmpAK4Ol04OSaAPmqlLSyiKF%2FuUeMVEUMbYOTUM3zQwf18yvClhtIHBZSdoR4QYbRnVucO1SMVyubQVQS7OUi%2BJ6Ew7D68qgufJFVQnnCqliPIAq99Q0fJSZFae4%2BcShd1TBprO2ZndpVV0dtPs%2FXnvfNhXAFhJiyHgvH6LfsuuWOxkmk%2BAIw3wijDUeWr0XB2ia%2FwIZILoYcWlz3CHPY4OLODY53%2FJkK%2F2Tya%2FTSnSEMCQTqYTuKsqa%2BHewdQfQZ55CZSj9g3Lo87usNRV3i6LGQ56IW6AsX2XZj2wi%2BzMlqx%2FAno7WFnHt52T7akkx%2FxCEj9Z1%2Fk3h51tR70VxqNA8tIqXZhfRE57MdK2wA8XWDK8LMnz1PMQwA9ChVuWPSaBr1HhtdvWdbTiyEdozQMxrSqriQGNLsgoVk7xzVEXt3cAuTFQNZ0j98GSnbdoI7OGZTkG0n9ukNIrQ9rcoHZQucm%2BcdY326Bj6XSMrId2AWhjvqqmGow7mcBxgZCRj4tJtd%2Fovh9CZUs7seyllqUHCVAsVocfs%2BktznLzj0tLZIXpbkJBdOb9hixJWDj%2BSbhmeTvh6k50wyuXnvAY6pgG2RB5o9XyGoXlUty4xoxWrB3XfFEL8p2CT22npSzMeVq7F4KWhVB%2BkEXqFrhhAOJW9p8v0wHb7cJcfxFCYn%2F00nVkYQxgUb5yztQUOchbqxjHNcehuJXySJe6wtEoyRx%2FMU4bRljEbrD0FcyihU%2ByRUYUAxSdazLHUkvjCb6IgHMT5FuLTJS%2BDC55v3irJt9P4RvPVbBx%2FgPWMNMXEKRPcHVdD2vT4&X-Amz-Signature=c9c07cdb15bc799b0f6e801556f91e2b216b83ebbf27f01ef9fdbbb5efbc51e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R263QGJ5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcqo5S5iXf1FTyv51uy%2F0tGYgCjAnByf9CdoSnmm1JWAiAMph7kjHIfWay6bGAuoPIvZ4YWdkn97RXusPnICrxKviqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPo6c2pb%2FGJ50ZDWKtwDVlOTMzYBCVEC%2FLThD8NOVc0PvHIl0f%2BWSuLk0QjBbucim0ZCkmpAK4Ol04OSaAPmqlLSyiKF%2FuUeMVEUMbYOTUM3zQwf18yvClhtIHBZSdoR4QYbRnVucO1SMVyubQVQS7OUi%2BJ6Ew7D68qgufJFVQnnCqliPIAq99Q0fJSZFae4%2BcShd1TBprO2ZndpVV0dtPs%2FXnvfNhXAFhJiyHgvH6LfsuuWOxkmk%2BAIw3wijDUeWr0XB2ia%2FwIZILoYcWlz3CHPY4OLODY53%2FJkK%2F2Tya%2FTSnSEMCQTqYTuKsqa%2BHewdQfQZ55CZSj9g3Lo87usNRV3i6LGQ56IW6AsX2XZj2wi%2BzMlqx%2FAno7WFnHt52T7akkx%2FxCEj9Z1%2Fk3h51tR70VxqNA8tIqXZhfRE57MdK2wA8XWDK8LMnz1PMQwA9ChVuWPSaBr1HhtdvWdbTiyEdozQMxrSqriQGNLsgoVk7xzVEXt3cAuTFQNZ0j98GSnbdoI7OGZTkG0n9ukNIrQ9rcoHZQucm%2BcdY326Bj6XSMrId2AWhjvqqmGow7mcBxgZCRj4tJtd%2Fovh9CZUs7seyllqUHCVAsVocfs%2BktznLzj0tLZIXpbkJBdOb9hixJWDj%2BSbhmeTvh6k50wyuXnvAY6pgG2RB5o9XyGoXlUty4xoxWrB3XfFEL8p2CT22npSzMeVq7F4KWhVB%2BkEXqFrhhAOJW9p8v0wHb7cJcfxFCYn%2F00nVkYQxgUb5yztQUOchbqxjHNcehuJXySJe6wtEoyRx%2FMU4bRljEbrD0FcyihU%2ByRUYUAxSdazLHUkvjCb6IgHMT5FuLTJS%2BDC55v3irJt9P4RvPVbBx%2FgPWMNMXEKRPcHVdD2vT4&X-Amz-Signature=2a7a54ff80c8dab33f4d7ba49e3b19ce7519b076e373e526cf6856a0879c2713&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R263QGJ5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcqo5S5iXf1FTyv51uy%2F0tGYgCjAnByf9CdoSnmm1JWAiAMph7kjHIfWay6bGAuoPIvZ4YWdkn97RXusPnICrxKviqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPo6c2pb%2FGJ50ZDWKtwDVlOTMzYBCVEC%2FLThD8NOVc0PvHIl0f%2BWSuLk0QjBbucim0ZCkmpAK4Ol04OSaAPmqlLSyiKF%2FuUeMVEUMbYOTUM3zQwf18yvClhtIHBZSdoR4QYbRnVucO1SMVyubQVQS7OUi%2BJ6Ew7D68qgufJFVQnnCqliPIAq99Q0fJSZFae4%2BcShd1TBprO2ZndpVV0dtPs%2FXnvfNhXAFhJiyHgvH6LfsuuWOxkmk%2BAIw3wijDUeWr0XB2ia%2FwIZILoYcWlz3CHPY4OLODY53%2FJkK%2F2Tya%2FTSnSEMCQTqYTuKsqa%2BHewdQfQZ55CZSj9g3Lo87usNRV3i6LGQ56IW6AsX2XZj2wi%2BzMlqx%2FAno7WFnHt52T7akkx%2FxCEj9Z1%2Fk3h51tR70VxqNA8tIqXZhfRE57MdK2wA8XWDK8LMnz1PMQwA9ChVuWPSaBr1HhtdvWdbTiyEdozQMxrSqriQGNLsgoVk7xzVEXt3cAuTFQNZ0j98GSnbdoI7OGZTkG0n9ukNIrQ9rcoHZQucm%2BcdY326Bj6XSMrId2AWhjvqqmGow7mcBxgZCRj4tJtd%2Fovh9CZUs7seyllqUHCVAsVocfs%2BktznLzj0tLZIXpbkJBdOb9hixJWDj%2BSbhmeTvh6k50wyuXnvAY6pgG2RB5o9XyGoXlUty4xoxWrB3XfFEL8p2CT22npSzMeVq7F4KWhVB%2BkEXqFrhhAOJW9p8v0wHb7cJcfxFCYn%2F00nVkYQxgUb5yztQUOchbqxjHNcehuJXySJe6wtEoyRx%2FMU4bRljEbrD0FcyihU%2ByRUYUAxSdazLHUkvjCb6IgHMT5FuLTJS%2BDC55v3irJt9P4RvPVbBx%2FgPWMNMXEKRPcHVdD2vT4&X-Amz-Signature=5e7ca4b0a0ca23fc23e16a7c58cc4c8dffeadac4520258ed0c24ce9cb63e0e05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R263QGJ5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcqo5S5iXf1FTyv51uy%2F0tGYgCjAnByf9CdoSnmm1JWAiAMph7kjHIfWay6bGAuoPIvZ4YWdkn97RXusPnICrxKviqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPo6c2pb%2FGJ50ZDWKtwDVlOTMzYBCVEC%2FLThD8NOVc0PvHIl0f%2BWSuLk0QjBbucim0ZCkmpAK4Ol04OSaAPmqlLSyiKF%2FuUeMVEUMbYOTUM3zQwf18yvClhtIHBZSdoR4QYbRnVucO1SMVyubQVQS7OUi%2BJ6Ew7D68qgufJFVQnnCqliPIAq99Q0fJSZFae4%2BcShd1TBprO2ZndpVV0dtPs%2FXnvfNhXAFhJiyHgvH6LfsuuWOxkmk%2BAIw3wijDUeWr0XB2ia%2FwIZILoYcWlz3CHPY4OLODY53%2FJkK%2F2Tya%2FTSnSEMCQTqYTuKsqa%2BHewdQfQZ55CZSj9g3Lo87usNRV3i6LGQ56IW6AsX2XZj2wi%2BzMlqx%2FAno7WFnHt52T7akkx%2FxCEj9Z1%2Fk3h51tR70VxqNA8tIqXZhfRE57MdK2wA8XWDK8LMnz1PMQwA9ChVuWPSaBr1HhtdvWdbTiyEdozQMxrSqriQGNLsgoVk7xzVEXt3cAuTFQNZ0j98GSnbdoI7OGZTkG0n9ukNIrQ9rcoHZQucm%2BcdY326Bj6XSMrId2AWhjvqqmGow7mcBxgZCRj4tJtd%2Fovh9CZUs7seyllqUHCVAsVocfs%2BktznLzj0tLZIXpbkJBdOb9hixJWDj%2BSbhmeTvh6k50wyuXnvAY6pgG2RB5o9XyGoXlUty4xoxWrB3XfFEL8p2CT22npSzMeVq7F4KWhVB%2BkEXqFrhhAOJW9p8v0wHb7cJcfxFCYn%2F00nVkYQxgUb5yztQUOchbqxjHNcehuJXySJe6wtEoyRx%2FMU4bRljEbrD0FcyihU%2ByRUYUAxSdazLHUkvjCb6IgHMT5FuLTJS%2BDC55v3irJt9P4RvPVbBx%2FgPWMNMXEKRPcHVdD2vT4&X-Amz-Signature=5922636fe3f4ddd21cf828234ae545e42747e6fd3b463333315c90b26c01c85c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R263QGJ5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcqo5S5iXf1FTyv51uy%2F0tGYgCjAnByf9CdoSnmm1JWAiAMph7kjHIfWay6bGAuoPIvZ4YWdkn97RXusPnICrxKviqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPo6c2pb%2FGJ50ZDWKtwDVlOTMzYBCVEC%2FLThD8NOVc0PvHIl0f%2BWSuLk0QjBbucim0ZCkmpAK4Ol04OSaAPmqlLSyiKF%2FuUeMVEUMbYOTUM3zQwf18yvClhtIHBZSdoR4QYbRnVucO1SMVyubQVQS7OUi%2BJ6Ew7D68qgufJFVQnnCqliPIAq99Q0fJSZFae4%2BcShd1TBprO2ZndpVV0dtPs%2FXnvfNhXAFhJiyHgvH6LfsuuWOxkmk%2BAIw3wijDUeWr0XB2ia%2FwIZILoYcWlz3CHPY4OLODY53%2FJkK%2F2Tya%2FTSnSEMCQTqYTuKsqa%2BHewdQfQZ55CZSj9g3Lo87usNRV3i6LGQ56IW6AsX2XZj2wi%2BzMlqx%2FAno7WFnHt52T7akkx%2FxCEj9Z1%2Fk3h51tR70VxqNA8tIqXZhfRE57MdK2wA8XWDK8LMnz1PMQwA9ChVuWPSaBr1HhtdvWdbTiyEdozQMxrSqriQGNLsgoVk7xzVEXt3cAuTFQNZ0j98GSnbdoI7OGZTkG0n9ukNIrQ9rcoHZQucm%2BcdY326Bj6XSMrId2AWhjvqqmGow7mcBxgZCRj4tJtd%2Fovh9CZUs7seyllqUHCVAsVocfs%2BktznLzj0tLZIXpbkJBdOb9hixJWDj%2BSbhmeTvh6k50wyuXnvAY6pgG2RB5o9XyGoXlUty4xoxWrB3XfFEL8p2CT22npSzMeVq7F4KWhVB%2BkEXqFrhhAOJW9p8v0wHb7cJcfxFCYn%2F00nVkYQxgUb5yztQUOchbqxjHNcehuJXySJe6wtEoyRx%2FMU4bRljEbrD0FcyihU%2ByRUYUAxSdazLHUkvjCb6IgHMT5FuLTJS%2BDC55v3irJt9P4RvPVbBx%2FgPWMNMXEKRPcHVdD2vT4&X-Amz-Signature=13e230500520b7dc998e5397dd7a33926773dae237dd270cb88fddd85b26cf1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R263QGJ5%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcqo5S5iXf1FTyv51uy%2F0tGYgCjAnByf9CdoSnmm1JWAiAMph7kjHIfWay6bGAuoPIvZ4YWdkn97RXusPnICrxKviqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCPo6c2pb%2FGJ50ZDWKtwDVlOTMzYBCVEC%2FLThD8NOVc0PvHIl0f%2BWSuLk0QjBbucim0ZCkmpAK4Ol04OSaAPmqlLSyiKF%2FuUeMVEUMbYOTUM3zQwf18yvClhtIHBZSdoR4QYbRnVucO1SMVyubQVQS7OUi%2BJ6Ew7D68qgufJFVQnnCqliPIAq99Q0fJSZFae4%2BcShd1TBprO2ZndpVV0dtPs%2FXnvfNhXAFhJiyHgvH6LfsuuWOxkmk%2BAIw3wijDUeWr0XB2ia%2FwIZILoYcWlz3CHPY4OLODY53%2FJkK%2F2Tya%2FTSnSEMCQTqYTuKsqa%2BHewdQfQZ55CZSj9g3Lo87usNRV3i6LGQ56IW6AsX2XZj2wi%2BzMlqx%2FAno7WFnHt52T7akkx%2FxCEj9Z1%2Fk3h51tR70VxqNA8tIqXZhfRE57MdK2wA8XWDK8LMnz1PMQwA9ChVuWPSaBr1HhtdvWdbTiyEdozQMxrSqriQGNLsgoVk7xzVEXt3cAuTFQNZ0j98GSnbdoI7OGZTkG0n9ukNIrQ9rcoHZQucm%2BcdY326Bj6XSMrId2AWhjvqqmGow7mcBxgZCRj4tJtd%2Fovh9CZUs7seyllqUHCVAsVocfs%2BktznLzj0tLZIXpbkJBdOb9hixJWDj%2BSbhmeTvh6k50wyuXnvAY6pgG2RB5o9XyGoXlUty4xoxWrB3XfFEL8p2CT22npSzMeVq7F4KWhVB%2BkEXqFrhhAOJW9p8v0wHb7cJcfxFCYn%2F00nVkYQxgUb5yztQUOchbqxjHNcehuJXySJe6wtEoyRx%2FMU4bRljEbrD0FcyihU%2ByRUYUAxSdazLHUkvjCb6IgHMT5FuLTJS%2BDC55v3irJt9P4RvPVbBx%2FgPWMNMXEKRPcHVdD2vT4&X-Amz-Signature=0e46a90e556ce76365e538f5d9200a59e14314b1539e8c3cf5982085169df29e&X-Amz-SignedHeaders=host&x-id=GetObject)
