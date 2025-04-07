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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H5ZRKQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKwccCWcJaJTlU9%2F4WkrWG1TztDPz48r7JmqfBGeVHAIhAMtxP487bjlrhfL3jCzsB%2BENvHAVCbtMwWJuYfE4hgDIKv8DCGUQABoMNjM3NDIzMTgzODA1IgxAJ8%2Bu%2B%2BNKfwRJcYAq3AMoc%2FbglEPsmzNN4MhuBjojNe%2B8UGsUy1T09xodI6EyKJnLIYcdoQmVCCpCviyGq1Kfof%2FpfDOcKddugxbjRNpM%2B6YgaV96CnaRUapaoqPWpDuTyuIFgezXYDjDZCcxyviJZj4Zj%2FCq6ZajmIh6Rl5Q0kxylGun%2FThxlvP1f2VSUGH0XBo%2F4JnS0MLRIIDD0heyaK5gx%2B5j3pSFEWJ91XvryUjyv5pMWHN8RcruMZpnzSN36w54thWf%2FmODJGXL6ffMMfZbHbDob2RG6WAGoJ89H%2Bqu9ikgjKOyllp5k099qQppGC47sU35j9UWYHLvqxnXKjVtqplx8pyGT3yTLJFaiynrvA9VMiCSQ%2BDCuGzocWCujx7GGw5zRY%2FE8Fusu%2FmY%2Bmorx8zmmDHqQuIbFg9EhrXw0Rz74Zz9pT6pOI2OBZF%2B7I5Ys71GCXnRR6eBiwBCvqEf12uXG82%2FMdRD%2FFEI4Znp%2FXw7MMjqfS7XPlZqPrPnK3E2PplH%2FbzuV4pJaf%2FtBPRxuI72JsAWzvbSZ5ez69q4pTeQ8m%2By76eSnKcRp%2BB2HZAp4jGU%2BFEZlBNP0EIGU%2B%2Bjn9mJtXdFXa8gRk4qyhRrbId5hT5Ji%2FA89X5kWaMdcT24EA2cVj%2BhOTDI5NC%2FBjqkAf9W3K%2FMM93mJd5cpCGAfhk4VzihIQSsEbJ17hEdVGZCcR7jU1IMV9X5iz5DW9h2vHuApMUlpVEve9VmG4HI%2Bp2G7kneWARwhy0xgOk%2BnY9DYI6ZflcF6QqHkPf9OYCxKnCB9EwZlUTGxdsHSL8FmfpSKsRhf0M6HKdlvJ6nZ05M3leetMsImV0KWgDbO4tM7ssfIUUJJwvPo7KnXLWe1rJ3XCTJ&X-Amz-Signature=f7d3a89e671dd1847f99f2aee3fc1382712f1bd918c5c5076e48a33d0ad68ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H5ZRKQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKwccCWcJaJTlU9%2F4WkrWG1TztDPz48r7JmqfBGeVHAIhAMtxP487bjlrhfL3jCzsB%2BENvHAVCbtMwWJuYfE4hgDIKv8DCGUQABoMNjM3NDIzMTgzODA1IgxAJ8%2Bu%2B%2BNKfwRJcYAq3AMoc%2FbglEPsmzNN4MhuBjojNe%2B8UGsUy1T09xodI6EyKJnLIYcdoQmVCCpCviyGq1Kfof%2FpfDOcKddugxbjRNpM%2B6YgaV96CnaRUapaoqPWpDuTyuIFgezXYDjDZCcxyviJZj4Zj%2FCq6ZajmIh6Rl5Q0kxylGun%2FThxlvP1f2VSUGH0XBo%2F4JnS0MLRIIDD0heyaK5gx%2B5j3pSFEWJ91XvryUjyv5pMWHN8RcruMZpnzSN36w54thWf%2FmODJGXL6ffMMfZbHbDob2RG6WAGoJ89H%2Bqu9ikgjKOyllp5k099qQppGC47sU35j9UWYHLvqxnXKjVtqplx8pyGT3yTLJFaiynrvA9VMiCSQ%2BDCuGzocWCujx7GGw5zRY%2FE8Fusu%2FmY%2Bmorx8zmmDHqQuIbFg9EhrXw0Rz74Zz9pT6pOI2OBZF%2B7I5Ys71GCXnRR6eBiwBCvqEf12uXG82%2FMdRD%2FFEI4Znp%2FXw7MMjqfS7XPlZqPrPnK3E2PplH%2FbzuV4pJaf%2FtBPRxuI72JsAWzvbSZ5ez69q4pTeQ8m%2By76eSnKcRp%2BB2HZAp4jGU%2BFEZlBNP0EIGU%2B%2Bjn9mJtXdFXa8gRk4qyhRrbId5hT5Ji%2FA89X5kWaMdcT24EA2cVj%2BhOTDI5NC%2FBjqkAf9W3K%2FMM93mJd5cpCGAfhk4VzihIQSsEbJ17hEdVGZCcR7jU1IMV9X5iz5DW9h2vHuApMUlpVEve9VmG4HI%2Bp2G7kneWARwhy0xgOk%2BnY9DYI6ZflcF6QqHkPf9OYCxKnCB9EwZlUTGxdsHSL8FmfpSKsRhf0M6HKdlvJ6nZ05M3leetMsImV0KWgDbO4tM7ssfIUUJJwvPo7KnXLWe1rJ3XCTJ&X-Amz-Signature=fec5438c5a5ee40d9c980e1003d187e33a631cfa6b43e21837dea585e788f587&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H5ZRKQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKwccCWcJaJTlU9%2F4WkrWG1TztDPz48r7JmqfBGeVHAIhAMtxP487bjlrhfL3jCzsB%2BENvHAVCbtMwWJuYfE4hgDIKv8DCGUQABoMNjM3NDIzMTgzODA1IgxAJ8%2Bu%2B%2BNKfwRJcYAq3AMoc%2FbglEPsmzNN4MhuBjojNe%2B8UGsUy1T09xodI6EyKJnLIYcdoQmVCCpCviyGq1Kfof%2FpfDOcKddugxbjRNpM%2B6YgaV96CnaRUapaoqPWpDuTyuIFgezXYDjDZCcxyviJZj4Zj%2FCq6ZajmIh6Rl5Q0kxylGun%2FThxlvP1f2VSUGH0XBo%2F4JnS0MLRIIDD0heyaK5gx%2B5j3pSFEWJ91XvryUjyv5pMWHN8RcruMZpnzSN36w54thWf%2FmODJGXL6ffMMfZbHbDob2RG6WAGoJ89H%2Bqu9ikgjKOyllp5k099qQppGC47sU35j9UWYHLvqxnXKjVtqplx8pyGT3yTLJFaiynrvA9VMiCSQ%2BDCuGzocWCujx7GGw5zRY%2FE8Fusu%2FmY%2Bmorx8zmmDHqQuIbFg9EhrXw0Rz74Zz9pT6pOI2OBZF%2B7I5Ys71GCXnRR6eBiwBCvqEf12uXG82%2FMdRD%2FFEI4Znp%2FXw7MMjqfS7XPlZqPrPnK3E2PplH%2FbzuV4pJaf%2FtBPRxuI72JsAWzvbSZ5ez69q4pTeQ8m%2By76eSnKcRp%2BB2HZAp4jGU%2BFEZlBNP0EIGU%2B%2Bjn9mJtXdFXa8gRk4qyhRrbId5hT5Ji%2FA89X5kWaMdcT24EA2cVj%2BhOTDI5NC%2FBjqkAf9W3K%2FMM93mJd5cpCGAfhk4VzihIQSsEbJ17hEdVGZCcR7jU1IMV9X5iz5DW9h2vHuApMUlpVEve9VmG4HI%2Bp2G7kneWARwhy0xgOk%2BnY9DYI6ZflcF6QqHkPf9OYCxKnCB9EwZlUTGxdsHSL8FmfpSKsRhf0M6HKdlvJ6nZ05M3leetMsImV0KWgDbO4tM7ssfIUUJJwvPo7KnXLWe1rJ3XCTJ&X-Amz-Signature=f0ee7fab4bdb7dddb991cc440bfea85d1f7d39d93a2513733d8eac5442cafa49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H5ZRKQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKwccCWcJaJTlU9%2F4WkrWG1TztDPz48r7JmqfBGeVHAIhAMtxP487bjlrhfL3jCzsB%2BENvHAVCbtMwWJuYfE4hgDIKv8DCGUQABoMNjM3NDIzMTgzODA1IgxAJ8%2Bu%2B%2BNKfwRJcYAq3AMoc%2FbglEPsmzNN4MhuBjojNe%2B8UGsUy1T09xodI6EyKJnLIYcdoQmVCCpCviyGq1Kfof%2FpfDOcKddugxbjRNpM%2B6YgaV96CnaRUapaoqPWpDuTyuIFgezXYDjDZCcxyviJZj4Zj%2FCq6ZajmIh6Rl5Q0kxylGun%2FThxlvP1f2VSUGH0XBo%2F4JnS0MLRIIDD0heyaK5gx%2B5j3pSFEWJ91XvryUjyv5pMWHN8RcruMZpnzSN36w54thWf%2FmODJGXL6ffMMfZbHbDob2RG6WAGoJ89H%2Bqu9ikgjKOyllp5k099qQppGC47sU35j9UWYHLvqxnXKjVtqplx8pyGT3yTLJFaiynrvA9VMiCSQ%2BDCuGzocWCujx7GGw5zRY%2FE8Fusu%2FmY%2Bmorx8zmmDHqQuIbFg9EhrXw0Rz74Zz9pT6pOI2OBZF%2B7I5Ys71GCXnRR6eBiwBCvqEf12uXG82%2FMdRD%2FFEI4Znp%2FXw7MMjqfS7XPlZqPrPnK3E2PplH%2FbzuV4pJaf%2FtBPRxuI72JsAWzvbSZ5ez69q4pTeQ8m%2By76eSnKcRp%2BB2HZAp4jGU%2BFEZlBNP0EIGU%2B%2Bjn9mJtXdFXa8gRk4qyhRrbId5hT5Ji%2FA89X5kWaMdcT24EA2cVj%2BhOTDI5NC%2FBjqkAf9W3K%2FMM93mJd5cpCGAfhk4VzihIQSsEbJ17hEdVGZCcR7jU1IMV9X5iz5DW9h2vHuApMUlpVEve9VmG4HI%2Bp2G7kneWARwhy0xgOk%2BnY9DYI6ZflcF6QqHkPf9OYCxKnCB9EwZlUTGxdsHSL8FmfpSKsRhf0M6HKdlvJ6nZ05M3leetMsImV0KWgDbO4tM7ssfIUUJJwvPo7KnXLWe1rJ3XCTJ&X-Amz-Signature=fe359f4c90520aae905ad6ad24f2acd4135b902f93e573adab5c4cb377d3a4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H5ZRKQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKwccCWcJaJTlU9%2F4WkrWG1TztDPz48r7JmqfBGeVHAIhAMtxP487bjlrhfL3jCzsB%2BENvHAVCbtMwWJuYfE4hgDIKv8DCGUQABoMNjM3NDIzMTgzODA1IgxAJ8%2Bu%2B%2BNKfwRJcYAq3AMoc%2FbglEPsmzNN4MhuBjojNe%2B8UGsUy1T09xodI6EyKJnLIYcdoQmVCCpCviyGq1Kfof%2FpfDOcKddugxbjRNpM%2B6YgaV96CnaRUapaoqPWpDuTyuIFgezXYDjDZCcxyviJZj4Zj%2FCq6ZajmIh6Rl5Q0kxylGun%2FThxlvP1f2VSUGH0XBo%2F4JnS0MLRIIDD0heyaK5gx%2B5j3pSFEWJ91XvryUjyv5pMWHN8RcruMZpnzSN36w54thWf%2FmODJGXL6ffMMfZbHbDob2RG6WAGoJ89H%2Bqu9ikgjKOyllp5k099qQppGC47sU35j9UWYHLvqxnXKjVtqplx8pyGT3yTLJFaiynrvA9VMiCSQ%2BDCuGzocWCujx7GGw5zRY%2FE8Fusu%2FmY%2Bmorx8zmmDHqQuIbFg9EhrXw0Rz74Zz9pT6pOI2OBZF%2B7I5Ys71GCXnRR6eBiwBCvqEf12uXG82%2FMdRD%2FFEI4Znp%2FXw7MMjqfS7XPlZqPrPnK3E2PplH%2FbzuV4pJaf%2FtBPRxuI72JsAWzvbSZ5ez69q4pTeQ8m%2By76eSnKcRp%2BB2HZAp4jGU%2BFEZlBNP0EIGU%2B%2Bjn9mJtXdFXa8gRk4qyhRrbId5hT5Ji%2FA89X5kWaMdcT24EA2cVj%2BhOTDI5NC%2FBjqkAf9W3K%2FMM93mJd5cpCGAfhk4VzihIQSsEbJ17hEdVGZCcR7jU1IMV9X5iz5DW9h2vHuApMUlpVEve9VmG4HI%2Bp2G7kneWARwhy0xgOk%2BnY9DYI6ZflcF6QqHkPf9OYCxKnCB9EwZlUTGxdsHSL8FmfpSKsRhf0M6HKdlvJ6nZ05M3leetMsImV0KWgDbO4tM7ssfIUUJJwvPo7KnXLWe1rJ3XCTJ&X-Amz-Signature=4b7bf6377ecbbf481dd07c3ff580d4d3f592473cfbe0f0ab2f52c6c2474904cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3H5ZRKQ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKwccCWcJaJTlU9%2F4WkrWG1TztDPz48r7JmqfBGeVHAIhAMtxP487bjlrhfL3jCzsB%2BENvHAVCbtMwWJuYfE4hgDIKv8DCGUQABoMNjM3NDIzMTgzODA1IgxAJ8%2Bu%2B%2BNKfwRJcYAq3AMoc%2FbglEPsmzNN4MhuBjojNe%2B8UGsUy1T09xodI6EyKJnLIYcdoQmVCCpCviyGq1Kfof%2FpfDOcKddugxbjRNpM%2B6YgaV96CnaRUapaoqPWpDuTyuIFgezXYDjDZCcxyviJZj4Zj%2FCq6ZajmIh6Rl5Q0kxylGun%2FThxlvP1f2VSUGH0XBo%2F4JnS0MLRIIDD0heyaK5gx%2B5j3pSFEWJ91XvryUjyv5pMWHN8RcruMZpnzSN36w54thWf%2FmODJGXL6ffMMfZbHbDob2RG6WAGoJ89H%2Bqu9ikgjKOyllp5k099qQppGC47sU35j9UWYHLvqxnXKjVtqplx8pyGT3yTLJFaiynrvA9VMiCSQ%2BDCuGzocWCujx7GGw5zRY%2FE8Fusu%2FmY%2Bmorx8zmmDHqQuIbFg9EhrXw0Rz74Zz9pT6pOI2OBZF%2B7I5Ys71GCXnRR6eBiwBCvqEf12uXG82%2FMdRD%2FFEI4Znp%2FXw7MMjqfS7XPlZqPrPnK3E2PplH%2FbzuV4pJaf%2FtBPRxuI72JsAWzvbSZ5ez69q4pTeQ8m%2By76eSnKcRp%2BB2HZAp4jGU%2BFEZlBNP0EIGU%2B%2Bjn9mJtXdFXa8gRk4qyhRrbId5hT5Ji%2FA89X5kWaMdcT24EA2cVj%2BhOTDI5NC%2FBjqkAf9W3K%2FMM93mJd5cpCGAfhk4VzihIQSsEbJ17hEdVGZCcR7jU1IMV9X5iz5DW9h2vHuApMUlpVEve9VmG4HI%2Bp2G7kneWARwhy0xgOk%2BnY9DYI6ZflcF6QqHkPf9OYCxKnCB9EwZlUTGxdsHSL8FmfpSKsRhf0M6HKdlvJ6nZ05M3leetMsImV0KWgDbO4tM7ssfIUUJJwvPo7KnXLWe1rJ3XCTJ&X-Amz-Signature=21be50de5362ff0a9d1036277e48c7cf7b17e24d75797d66067bc58948945464&X-Amz-SignedHeaders=host&x-id=GetObject)
