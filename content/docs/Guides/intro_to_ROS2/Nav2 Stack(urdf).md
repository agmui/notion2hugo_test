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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624I3HQ65%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiRlkMHK4Ir%2FsPgIbYDVhr75aQS1QceT0BhlwTF8u96AIhAKHDJOub5W1F5yKGd4o7p7YqnMFxLH1jjpMuHtIjJzo3Kv8DCEwQABoMNjM3NDIzMTgzODA1IgyiKiL4F%2BaMzeWRMg4q3ANzKAeQprEFtMq25BfrH3YAo05SdxcU7T6RyUJwwoOPghOEikKhLXDsotX%2Fk5hWei2TvMcGe1NFRoUjCOxzefQF60cUaEnUuBlnUVplgP7sNKz%2BUpA5m%2FwA%2FTtJ8Ti2hNt50BqW%2B8I%2BJnPaX5vMXxhEnav1w%2F8BmJSQgNDdOzelh5PSsW7unm3tayBWbGQxojnNZ2m610iSNYQ4Mh3wfHbMxTeQRw5w2mBq9BSvxhVe%2F5yxLr3FVVX9q1bS2I7K%2BgO7Q9jpaHrM2kcWIp%2FM7xZAD7sqwWWXDrgkQg6vEeMHIGDIllgPk50%2BoDvqvPcDn8Z9RhET%2B5Rw2fyBsYXBk4IR3bXfcALxAEZ82OGZfNT1F%2BBeoLvhe%2FC14nUoLK0hnEqjit8NlohvXJWH%2Bf1D0X6QdJtQyPlOXDnCgIM%2BN8SVGixgKPdKx7DEtshGYn%2FohfN3198CSDAv%2B5Mcn3MEEcOUpbFAJZA6cuPhXCWVzw2TFwnuwh0STWZEFbeKhSRUuc%2Fvx%2BY%2BUr4AG4eqZR1VXNgSZUkd9BaYVfPAl2a3lxI1nqPdoCivIRHqZSsqakFBCjI%2F3n%2FEUOp3D8g4v4lqPaMX8fQ7jNoL28zQmZWDv%2B%2B%2Bc3jkv5ZC%2ByC4rqpsijCC%2BdLBBjqkAXPQdXiiX4zwoWMt5VoGiRR4DQCoY7abnQaw%2BNzUbheplDL6w6Kqcp8o755QTWo7upuJtklssejrBmmjxPiNvUo7jm1jMwe%2FMuvxzpEVV5CKmqeC22nzuEHxOghMw1olUTxIktU%2B8smspEbE1gOVc5Yc6E1lEGf6jP8s3iKnh%2F5j8wkUYzuowsRXG6ZR1824E%2FrvEsg4bJsevaHIG%2FvoRPHUsMDN&X-Amz-Signature=5207bb170f13c78ee67ade08b5231f36100c1566c683c55407762021480bf93a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624I3HQ65%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiRlkMHK4Ir%2FsPgIbYDVhr75aQS1QceT0BhlwTF8u96AIhAKHDJOub5W1F5yKGd4o7p7YqnMFxLH1jjpMuHtIjJzo3Kv8DCEwQABoMNjM3NDIzMTgzODA1IgyiKiL4F%2BaMzeWRMg4q3ANzKAeQprEFtMq25BfrH3YAo05SdxcU7T6RyUJwwoOPghOEikKhLXDsotX%2Fk5hWei2TvMcGe1NFRoUjCOxzefQF60cUaEnUuBlnUVplgP7sNKz%2BUpA5m%2FwA%2FTtJ8Ti2hNt50BqW%2B8I%2BJnPaX5vMXxhEnav1w%2F8BmJSQgNDdOzelh5PSsW7unm3tayBWbGQxojnNZ2m610iSNYQ4Mh3wfHbMxTeQRw5w2mBq9BSvxhVe%2F5yxLr3FVVX9q1bS2I7K%2BgO7Q9jpaHrM2kcWIp%2FM7xZAD7sqwWWXDrgkQg6vEeMHIGDIllgPk50%2BoDvqvPcDn8Z9RhET%2B5Rw2fyBsYXBk4IR3bXfcALxAEZ82OGZfNT1F%2BBeoLvhe%2FC14nUoLK0hnEqjit8NlohvXJWH%2Bf1D0X6QdJtQyPlOXDnCgIM%2BN8SVGixgKPdKx7DEtshGYn%2FohfN3198CSDAv%2B5Mcn3MEEcOUpbFAJZA6cuPhXCWVzw2TFwnuwh0STWZEFbeKhSRUuc%2Fvx%2BY%2BUr4AG4eqZR1VXNgSZUkd9BaYVfPAl2a3lxI1nqPdoCivIRHqZSsqakFBCjI%2F3n%2FEUOp3D8g4v4lqPaMX8fQ7jNoL28zQmZWDv%2B%2B%2Bc3jkv5ZC%2ByC4rqpsijCC%2BdLBBjqkAXPQdXiiX4zwoWMt5VoGiRR4DQCoY7abnQaw%2BNzUbheplDL6w6Kqcp8o755QTWo7upuJtklssejrBmmjxPiNvUo7jm1jMwe%2FMuvxzpEVV5CKmqeC22nzuEHxOghMw1olUTxIktU%2B8smspEbE1gOVc5Yc6E1lEGf6jP8s3iKnh%2F5j8wkUYzuowsRXG6ZR1824E%2FrvEsg4bJsevaHIG%2FvoRPHUsMDN&X-Amz-Signature=398a9a5860f8e4644055338ccb4f5d4768183905cad824f266da0a0c745e5bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624I3HQ65%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiRlkMHK4Ir%2FsPgIbYDVhr75aQS1QceT0BhlwTF8u96AIhAKHDJOub5W1F5yKGd4o7p7YqnMFxLH1jjpMuHtIjJzo3Kv8DCEwQABoMNjM3NDIzMTgzODA1IgyiKiL4F%2BaMzeWRMg4q3ANzKAeQprEFtMq25BfrH3YAo05SdxcU7T6RyUJwwoOPghOEikKhLXDsotX%2Fk5hWei2TvMcGe1NFRoUjCOxzefQF60cUaEnUuBlnUVplgP7sNKz%2BUpA5m%2FwA%2FTtJ8Ti2hNt50BqW%2B8I%2BJnPaX5vMXxhEnav1w%2F8BmJSQgNDdOzelh5PSsW7unm3tayBWbGQxojnNZ2m610iSNYQ4Mh3wfHbMxTeQRw5w2mBq9BSvxhVe%2F5yxLr3FVVX9q1bS2I7K%2BgO7Q9jpaHrM2kcWIp%2FM7xZAD7sqwWWXDrgkQg6vEeMHIGDIllgPk50%2BoDvqvPcDn8Z9RhET%2B5Rw2fyBsYXBk4IR3bXfcALxAEZ82OGZfNT1F%2BBeoLvhe%2FC14nUoLK0hnEqjit8NlohvXJWH%2Bf1D0X6QdJtQyPlOXDnCgIM%2BN8SVGixgKPdKx7DEtshGYn%2FohfN3198CSDAv%2B5Mcn3MEEcOUpbFAJZA6cuPhXCWVzw2TFwnuwh0STWZEFbeKhSRUuc%2Fvx%2BY%2BUr4AG4eqZR1VXNgSZUkd9BaYVfPAl2a3lxI1nqPdoCivIRHqZSsqakFBCjI%2F3n%2FEUOp3D8g4v4lqPaMX8fQ7jNoL28zQmZWDv%2B%2B%2Bc3jkv5ZC%2ByC4rqpsijCC%2BdLBBjqkAXPQdXiiX4zwoWMt5VoGiRR4DQCoY7abnQaw%2BNzUbheplDL6w6Kqcp8o755QTWo7upuJtklssejrBmmjxPiNvUo7jm1jMwe%2FMuvxzpEVV5CKmqeC22nzuEHxOghMw1olUTxIktU%2B8smspEbE1gOVc5Yc6E1lEGf6jP8s3iKnh%2F5j8wkUYzuowsRXG6ZR1824E%2FrvEsg4bJsevaHIG%2FvoRPHUsMDN&X-Amz-Signature=fed33ce4223068ea2166a9091344609890a1346a89390b5992d6385a1c4051fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624I3HQ65%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiRlkMHK4Ir%2FsPgIbYDVhr75aQS1QceT0BhlwTF8u96AIhAKHDJOub5W1F5yKGd4o7p7YqnMFxLH1jjpMuHtIjJzo3Kv8DCEwQABoMNjM3NDIzMTgzODA1IgyiKiL4F%2BaMzeWRMg4q3ANzKAeQprEFtMq25BfrH3YAo05SdxcU7T6RyUJwwoOPghOEikKhLXDsotX%2Fk5hWei2TvMcGe1NFRoUjCOxzefQF60cUaEnUuBlnUVplgP7sNKz%2BUpA5m%2FwA%2FTtJ8Ti2hNt50BqW%2B8I%2BJnPaX5vMXxhEnav1w%2F8BmJSQgNDdOzelh5PSsW7unm3tayBWbGQxojnNZ2m610iSNYQ4Mh3wfHbMxTeQRw5w2mBq9BSvxhVe%2F5yxLr3FVVX9q1bS2I7K%2BgO7Q9jpaHrM2kcWIp%2FM7xZAD7sqwWWXDrgkQg6vEeMHIGDIllgPk50%2BoDvqvPcDn8Z9RhET%2B5Rw2fyBsYXBk4IR3bXfcALxAEZ82OGZfNT1F%2BBeoLvhe%2FC14nUoLK0hnEqjit8NlohvXJWH%2Bf1D0X6QdJtQyPlOXDnCgIM%2BN8SVGixgKPdKx7DEtshGYn%2FohfN3198CSDAv%2B5Mcn3MEEcOUpbFAJZA6cuPhXCWVzw2TFwnuwh0STWZEFbeKhSRUuc%2Fvx%2BY%2BUr4AG4eqZR1VXNgSZUkd9BaYVfPAl2a3lxI1nqPdoCivIRHqZSsqakFBCjI%2F3n%2FEUOp3D8g4v4lqPaMX8fQ7jNoL28zQmZWDv%2B%2B%2Bc3jkv5ZC%2ByC4rqpsijCC%2BdLBBjqkAXPQdXiiX4zwoWMt5VoGiRR4DQCoY7abnQaw%2BNzUbheplDL6w6Kqcp8o755QTWo7upuJtklssejrBmmjxPiNvUo7jm1jMwe%2FMuvxzpEVV5CKmqeC22nzuEHxOghMw1olUTxIktU%2B8smspEbE1gOVc5Yc6E1lEGf6jP8s3iKnh%2F5j8wkUYzuowsRXG6ZR1824E%2FrvEsg4bJsevaHIG%2FvoRPHUsMDN&X-Amz-Signature=8dbef7a7f68565b516ec8292aaf2e45c5f32aa6598b0558bceeaaa4436190c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624I3HQ65%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiRlkMHK4Ir%2FsPgIbYDVhr75aQS1QceT0BhlwTF8u96AIhAKHDJOub5W1F5yKGd4o7p7YqnMFxLH1jjpMuHtIjJzo3Kv8DCEwQABoMNjM3NDIzMTgzODA1IgyiKiL4F%2BaMzeWRMg4q3ANzKAeQprEFtMq25BfrH3YAo05SdxcU7T6RyUJwwoOPghOEikKhLXDsotX%2Fk5hWei2TvMcGe1NFRoUjCOxzefQF60cUaEnUuBlnUVplgP7sNKz%2BUpA5m%2FwA%2FTtJ8Ti2hNt50BqW%2B8I%2BJnPaX5vMXxhEnav1w%2F8BmJSQgNDdOzelh5PSsW7unm3tayBWbGQxojnNZ2m610iSNYQ4Mh3wfHbMxTeQRw5w2mBq9BSvxhVe%2F5yxLr3FVVX9q1bS2I7K%2BgO7Q9jpaHrM2kcWIp%2FM7xZAD7sqwWWXDrgkQg6vEeMHIGDIllgPk50%2BoDvqvPcDn8Z9RhET%2B5Rw2fyBsYXBk4IR3bXfcALxAEZ82OGZfNT1F%2BBeoLvhe%2FC14nUoLK0hnEqjit8NlohvXJWH%2Bf1D0X6QdJtQyPlOXDnCgIM%2BN8SVGixgKPdKx7DEtshGYn%2FohfN3198CSDAv%2B5Mcn3MEEcOUpbFAJZA6cuPhXCWVzw2TFwnuwh0STWZEFbeKhSRUuc%2Fvx%2BY%2BUr4AG4eqZR1VXNgSZUkd9BaYVfPAl2a3lxI1nqPdoCivIRHqZSsqakFBCjI%2F3n%2FEUOp3D8g4v4lqPaMX8fQ7jNoL28zQmZWDv%2B%2B%2Bc3jkv5ZC%2ByC4rqpsijCC%2BdLBBjqkAXPQdXiiX4zwoWMt5VoGiRR4DQCoY7abnQaw%2BNzUbheplDL6w6Kqcp8o755QTWo7upuJtklssejrBmmjxPiNvUo7jm1jMwe%2FMuvxzpEVV5CKmqeC22nzuEHxOghMw1olUTxIktU%2B8smspEbE1gOVc5Yc6E1lEGf6jP8s3iKnh%2F5j8wkUYzuowsRXG6ZR1824E%2FrvEsg4bJsevaHIG%2FvoRPHUsMDN&X-Amz-Signature=c0e2af143f72a3097f6509b7c64d61912dde5597ed84c08bfb2d7fd60407dcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624I3HQ65%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T200937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiRlkMHK4Ir%2FsPgIbYDVhr75aQS1QceT0BhlwTF8u96AIhAKHDJOub5W1F5yKGd4o7p7YqnMFxLH1jjpMuHtIjJzo3Kv8DCEwQABoMNjM3NDIzMTgzODA1IgyiKiL4F%2BaMzeWRMg4q3ANzKAeQprEFtMq25BfrH3YAo05SdxcU7T6RyUJwwoOPghOEikKhLXDsotX%2Fk5hWei2TvMcGe1NFRoUjCOxzefQF60cUaEnUuBlnUVplgP7sNKz%2BUpA5m%2FwA%2FTtJ8Ti2hNt50BqW%2B8I%2BJnPaX5vMXxhEnav1w%2F8BmJSQgNDdOzelh5PSsW7unm3tayBWbGQxojnNZ2m610iSNYQ4Mh3wfHbMxTeQRw5w2mBq9BSvxhVe%2F5yxLr3FVVX9q1bS2I7K%2BgO7Q9jpaHrM2kcWIp%2FM7xZAD7sqwWWXDrgkQg6vEeMHIGDIllgPk50%2BoDvqvPcDn8Z9RhET%2B5Rw2fyBsYXBk4IR3bXfcALxAEZ82OGZfNT1F%2BBeoLvhe%2FC14nUoLK0hnEqjit8NlohvXJWH%2Bf1D0X6QdJtQyPlOXDnCgIM%2BN8SVGixgKPdKx7DEtshGYn%2FohfN3198CSDAv%2B5Mcn3MEEcOUpbFAJZA6cuPhXCWVzw2TFwnuwh0STWZEFbeKhSRUuc%2Fvx%2BY%2BUr4AG4eqZR1VXNgSZUkd9BaYVfPAl2a3lxI1nqPdoCivIRHqZSsqakFBCjI%2F3n%2FEUOp3D8g4v4lqPaMX8fQ7jNoL28zQmZWDv%2B%2B%2Bc3jkv5ZC%2ByC4rqpsijCC%2BdLBBjqkAXPQdXiiX4zwoWMt5VoGiRR4DQCoY7abnQaw%2BNzUbheplDL6w6Kqcp8o755QTWo7upuJtklssejrBmmjxPiNvUo7jm1jMwe%2FMuvxzpEVV5CKmqeC22nzuEHxOghMw1olUTxIktU%2B8smspEbE1gOVc5Yc6E1lEGf6jP8s3iKnh%2F5j8wkUYzuowsRXG6ZR1824E%2FrvEsg4bJsevaHIG%2FvoRPHUsMDN&X-Amz-Signature=8b68a2ace45f7dcc8404936e6ab47f81a75868f8d523fc52bd4bcb9802bb5096&X-Amz-SignedHeaders=host&x-id=GetObject)
