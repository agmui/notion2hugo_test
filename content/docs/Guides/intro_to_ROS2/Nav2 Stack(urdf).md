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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIHQVZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIG97Q%2BjwBt0QcyyKXRqjGWLFrzf4JNqGXtTux4rQqYHCAiEAjmpEMmYIqElvk4ofoYqVOiRxZBBMKl37DYnmkM3EgeAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BAwoQTBKIwmeZKyrcA1w9M7m%2B4wL%2BaCUmnatsjCnrra1AN4GSP6VFSyoRCfcYs14dpplzYFhjZ7asSkDOc0hRQaUjQ3udg6LAt7zFQQnKxsh6mhGeAB%2Bmvc%2BOUyOMbdQMQH%2FgwDG2Zh%2FHKLv2ds5ezwUGISIqLCH4chbFBOgG9xSx9K%2B9P%2BTpgIWb2LTfjHYTNWi%2BU1Uo1W9zgSl2WtW7QRG5q4yva0ApsKMvTQJrVHbrqKQ5kHwuFlE7cNnbmK19yJqmn%2Bv6Ar2xMVphPrTLmLhHuqIHSOWz3aIWTH%2FEjstll5cmetF9taE2MCTi6VSUm1pX92EDHVVFJQi7hkU6JPqYngHu%2BSub3KqfESZRea8skIFtNQRIB4FLco5FjKidwRrqDpe%2FJCvy%2FCwWWe%2BvSnxeCy4ppGkAnQp43RD7QLT0fI%2FOJu58XhOzEGqUfcYKbWlUfREKTjKxSmOcMKrgFDlvJgvoDQynH2Q%2FsqDOCIpghmKrR4fpEukfUm9nq0LolxByprxWYfufYCdrkBTSgcPUXq3Rsf3w5MkwYCnTJyDPRZC62cDiVP3aLq3%2BYG0lF3lGFk59QygMrYgMe6%2FyIrKU1nuu98ojamAsndoG6sv9Rc0Zt6FeClXyNCDckzEW1%2BIwMV%2BEMYWYMNC6m8AGOqUB7uvpu7MjfgnfAGcfPtRGe44Wsi7DGg0tpz3Je03O8bzmCi4ftN%2BEznmHcNrG5BzjsEK80mTo3hv%2B9IihR7%2F3BfBcYJk4FoOxV%2BiNmQGcN1sCPT6R0okJKBtMLkER9oKUJNnH4f%2FkveiN8F7MQYeBFS5HD9IHLQhCvkbEMFHqjGAJVySLVqZ7%2F53P6rUhpk7EBNklh1wIHLV4uT%2BkIj%2FD6WouaGzo&X-Amz-Signature=edd78108cdb96f24ee9b6e072a92e79dd5d58e5acb2617afbfe93927d9b8b35d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIHQVZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIG97Q%2BjwBt0QcyyKXRqjGWLFrzf4JNqGXtTux4rQqYHCAiEAjmpEMmYIqElvk4ofoYqVOiRxZBBMKl37DYnmkM3EgeAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BAwoQTBKIwmeZKyrcA1w9M7m%2B4wL%2BaCUmnatsjCnrra1AN4GSP6VFSyoRCfcYs14dpplzYFhjZ7asSkDOc0hRQaUjQ3udg6LAt7zFQQnKxsh6mhGeAB%2Bmvc%2BOUyOMbdQMQH%2FgwDG2Zh%2FHKLv2ds5ezwUGISIqLCH4chbFBOgG9xSx9K%2B9P%2BTpgIWb2LTfjHYTNWi%2BU1Uo1W9zgSl2WtW7QRG5q4yva0ApsKMvTQJrVHbrqKQ5kHwuFlE7cNnbmK19yJqmn%2Bv6Ar2xMVphPrTLmLhHuqIHSOWz3aIWTH%2FEjstll5cmetF9taE2MCTi6VSUm1pX92EDHVVFJQi7hkU6JPqYngHu%2BSub3KqfESZRea8skIFtNQRIB4FLco5FjKidwRrqDpe%2FJCvy%2FCwWWe%2BvSnxeCy4ppGkAnQp43RD7QLT0fI%2FOJu58XhOzEGqUfcYKbWlUfREKTjKxSmOcMKrgFDlvJgvoDQynH2Q%2FsqDOCIpghmKrR4fpEukfUm9nq0LolxByprxWYfufYCdrkBTSgcPUXq3Rsf3w5MkwYCnTJyDPRZC62cDiVP3aLq3%2BYG0lF3lGFk59QygMrYgMe6%2FyIrKU1nuu98ojamAsndoG6sv9Rc0Zt6FeClXyNCDckzEW1%2BIwMV%2BEMYWYMNC6m8AGOqUB7uvpu7MjfgnfAGcfPtRGe44Wsi7DGg0tpz3Je03O8bzmCi4ftN%2BEznmHcNrG5BzjsEK80mTo3hv%2B9IihR7%2F3BfBcYJk4FoOxV%2BiNmQGcN1sCPT6R0okJKBtMLkER9oKUJNnH4f%2FkveiN8F7MQYeBFS5HD9IHLQhCvkbEMFHqjGAJVySLVqZ7%2F53P6rUhpk7EBNklh1wIHLV4uT%2BkIj%2FD6WouaGzo&X-Amz-Signature=598750a6751bf41b871bfef100007305f98de564d32356eab58e1527be2fa413&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIHQVZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIG97Q%2BjwBt0QcyyKXRqjGWLFrzf4JNqGXtTux4rQqYHCAiEAjmpEMmYIqElvk4ofoYqVOiRxZBBMKl37DYnmkM3EgeAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BAwoQTBKIwmeZKyrcA1w9M7m%2B4wL%2BaCUmnatsjCnrra1AN4GSP6VFSyoRCfcYs14dpplzYFhjZ7asSkDOc0hRQaUjQ3udg6LAt7zFQQnKxsh6mhGeAB%2Bmvc%2BOUyOMbdQMQH%2FgwDG2Zh%2FHKLv2ds5ezwUGISIqLCH4chbFBOgG9xSx9K%2B9P%2BTpgIWb2LTfjHYTNWi%2BU1Uo1W9zgSl2WtW7QRG5q4yva0ApsKMvTQJrVHbrqKQ5kHwuFlE7cNnbmK19yJqmn%2Bv6Ar2xMVphPrTLmLhHuqIHSOWz3aIWTH%2FEjstll5cmetF9taE2MCTi6VSUm1pX92EDHVVFJQi7hkU6JPqYngHu%2BSub3KqfESZRea8skIFtNQRIB4FLco5FjKidwRrqDpe%2FJCvy%2FCwWWe%2BvSnxeCy4ppGkAnQp43RD7QLT0fI%2FOJu58XhOzEGqUfcYKbWlUfREKTjKxSmOcMKrgFDlvJgvoDQynH2Q%2FsqDOCIpghmKrR4fpEukfUm9nq0LolxByprxWYfufYCdrkBTSgcPUXq3Rsf3w5MkwYCnTJyDPRZC62cDiVP3aLq3%2BYG0lF3lGFk59QygMrYgMe6%2FyIrKU1nuu98ojamAsndoG6sv9Rc0Zt6FeClXyNCDckzEW1%2BIwMV%2BEMYWYMNC6m8AGOqUB7uvpu7MjfgnfAGcfPtRGe44Wsi7DGg0tpz3Je03O8bzmCi4ftN%2BEznmHcNrG5BzjsEK80mTo3hv%2B9IihR7%2F3BfBcYJk4FoOxV%2BiNmQGcN1sCPT6R0okJKBtMLkER9oKUJNnH4f%2FkveiN8F7MQYeBFS5HD9IHLQhCvkbEMFHqjGAJVySLVqZ7%2F53P6rUhpk7EBNklh1wIHLV4uT%2BkIj%2FD6WouaGzo&X-Amz-Signature=85f38a3777b485987ccbf775ffce696e539518e7e2d59fdd3b57f68a4a64b721&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIHQVZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIG97Q%2BjwBt0QcyyKXRqjGWLFrzf4JNqGXtTux4rQqYHCAiEAjmpEMmYIqElvk4ofoYqVOiRxZBBMKl37DYnmkM3EgeAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BAwoQTBKIwmeZKyrcA1w9M7m%2B4wL%2BaCUmnatsjCnrra1AN4GSP6VFSyoRCfcYs14dpplzYFhjZ7asSkDOc0hRQaUjQ3udg6LAt7zFQQnKxsh6mhGeAB%2Bmvc%2BOUyOMbdQMQH%2FgwDG2Zh%2FHKLv2ds5ezwUGISIqLCH4chbFBOgG9xSx9K%2B9P%2BTpgIWb2LTfjHYTNWi%2BU1Uo1W9zgSl2WtW7QRG5q4yva0ApsKMvTQJrVHbrqKQ5kHwuFlE7cNnbmK19yJqmn%2Bv6Ar2xMVphPrTLmLhHuqIHSOWz3aIWTH%2FEjstll5cmetF9taE2MCTi6VSUm1pX92EDHVVFJQi7hkU6JPqYngHu%2BSub3KqfESZRea8skIFtNQRIB4FLco5FjKidwRrqDpe%2FJCvy%2FCwWWe%2BvSnxeCy4ppGkAnQp43RD7QLT0fI%2FOJu58XhOzEGqUfcYKbWlUfREKTjKxSmOcMKrgFDlvJgvoDQynH2Q%2FsqDOCIpghmKrR4fpEukfUm9nq0LolxByprxWYfufYCdrkBTSgcPUXq3Rsf3w5MkwYCnTJyDPRZC62cDiVP3aLq3%2BYG0lF3lGFk59QygMrYgMe6%2FyIrKU1nuu98ojamAsndoG6sv9Rc0Zt6FeClXyNCDckzEW1%2BIwMV%2BEMYWYMNC6m8AGOqUB7uvpu7MjfgnfAGcfPtRGe44Wsi7DGg0tpz3Je03O8bzmCi4ftN%2BEznmHcNrG5BzjsEK80mTo3hv%2B9IihR7%2F3BfBcYJk4FoOxV%2BiNmQGcN1sCPT6R0okJKBtMLkER9oKUJNnH4f%2FkveiN8F7MQYeBFS5HD9IHLQhCvkbEMFHqjGAJVySLVqZ7%2F53P6rUhpk7EBNklh1wIHLV4uT%2BkIj%2FD6WouaGzo&X-Amz-Signature=90ff9ecdedcc308320b2d227c5d398ef8eae82ca3a9423d4dda83846421e79bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIHQVZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIG97Q%2BjwBt0QcyyKXRqjGWLFrzf4JNqGXtTux4rQqYHCAiEAjmpEMmYIqElvk4ofoYqVOiRxZBBMKl37DYnmkM3EgeAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BAwoQTBKIwmeZKyrcA1w9M7m%2B4wL%2BaCUmnatsjCnrra1AN4GSP6VFSyoRCfcYs14dpplzYFhjZ7asSkDOc0hRQaUjQ3udg6LAt7zFQQnKxsh6mhGeAB%2Bmvc%2BOUyOMbdQMQH%2FgwDG2Zh%2FHKLv2ds5ezwUGISIqLCH4chbFBOgG9xSx9K%2B9P%2BTpgIWb2LTfjHYTNWi%2BU1Uo1W9zgSl2WtW7QRG5q4yva0ApsKMvTQJrVHbrqKQ5kHwuFlE7cNnbmK19yJqmn%2Bv6Ar2xMVphPrTLmLhHuqIHSOWz3aIWTH%2FEjstll5cmetF9taE2MCTi6VSUm1pX92EDHVVFJQi7hkU6JPqYngHu%2BSub3KqfESZRea8skIFtNQRIB4FLco5FjKidwRrqDpe%2FJCvy%2FCwWWe%2BvSnxeCy4ppGkAnQp43RD7QLT0fI%2FOJu58XhOzEGqUfcYKbWlUfREKTjKxSmOcMKrgFDlvJgvoDQynH2Q%2FsqDOCIpghmKrR4fpEukfUm9nq0LolxByprxWYfufYCdrkBTSgcPUXq3Rsf3w5MkwYCnTJyDPRZC62cDiVP3aLq3%2BYG0lF3lGFk59QygMrYgMe6%2FyIrKU1nuu98ojamAsndoG6sv9Rc0Zt6FeClXyNCDckzEW1%2BIwMV%2BEMYWYMNC6m8AGOqUB7uvpu7MjfgnfAGcfPtRGe44Wsi7DGg0tpz3Je03O8bzmCi4ftN%2BEznmHcNrG5BzjsEK80mTo3hv%2B9IihR7%2F3BfBcYJk4FoOxV%2BiNmQGcN1sCPT6R0okJKBtMLkER9oKUJNnH4f%2FkveiN8F7MQYeBFS5HD9IHLQhCvkbEMFHqjGAJVySLVqZ7%2F53P6rUhpk7EBNklh1wIHLV4uT%2BkIj%2FD6WouaGzo&X-Amz-Signature=80555cf795ba9e61c2db34111c550f582f46eb99317fdd5baf70077b3eb60e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUKIHQVZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T004013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIG97Q%2BjwBt0QcyyKXRqjGWLFrzf4JNqGXtTux4rQqYHCAiEAjmpEMmYIqElvk4ofoYqVOiRxZBBMKl37DYnmkM3EgeAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCA%2BAwoQTBKIwmeZKyrcA1w9M7m%2B4wL%2BaCUmnatsjCnrra1AN4GSP6VFSyoRCfcYs14dpplzYFhjZ7asSkDOc0hRQaUjQ3udg6LAt7zFQQnKxsh6mhGeAB%2Bmvc%2BOUyOMbdQMQH%2FgwDG2Zh%2FHKLv2ds5ezwUGISIqLCH4chbFBOgG9xSx9K%2B9P%2BTpgIWb2LTfjHYTNWi%2BU1Uo1W9zgSl2WtW7QRG5q4yva0ApsKMvTQJrVHbrqKQ5kHwuFlE7cNnbmK19yJqmn%2Bv6Ar2xMVphPrTLmLhHuqIHSOWz3aIWTH%2FEjstll5cmetF9taE2MCTi6VSUm1pX92EDHVVFJQi7hkU6JPqYngHu%2BSub3KqfESZRea8skIFtNQRIB4FLco5FjKidwRrqDpe%2FJCvy%2FCwWWe%2BvSnxeCy4ppGkAnQp43RD7QLT0fI%2FOJu58XhOzEGqUfcYKbWlUfREKTjKxSmOcMKrgFDlvJgvoDQynH2Q%2FsqDOCIpghmKrR4fpEukfUm9nq0LolxByprxWYfufYCdrkBTSgcPUXq3Rsf3w5MkwYCnTJyDPRZC62cDiVP3aLq3%2BYG0lF3lGFk59QygMrYgMe6%2FyIrKU1nuu98ojamAsndoG6sv9Rc0Zt6FeClXyNCDckzEW1%2BIwMV%2BEMYWYMNC6m8AGOqUB7uvpu7MjfgnfAGcfPtRGe44Wsi7DGg0tpz3Je03O8bzmCi4ftN%2BEznmHcNrG5BzjsEK80mTo3hv%2B9IihR7%2F3BfBcYJk4FoOxV%2BiNmQGcN1sCPT6R0okJKBtMLkER9oKUJNnH4f%2FkveiN8F7MQYeBFS5HD9IHLQhCvkbEMFHqjGAJVySLVqZ7%2F53P6rUhpk7EBNklh1wIHLV4uT%2BkIj%2FD6WouaGzo&X-Amz-Signature=cdac4adbcdb9b152acefe56e7013a0d1a831fe7cf35084ac3f39f759381bfb0e&X-Amz-SignedHeaders=host&x-id=GetObject)
