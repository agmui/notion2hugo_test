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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMRAMOA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2BlYgz0stF0ISJ9pMkf6u%2BD6fjXBhuMAo%2BrAQsdapxAiB1eEy6xdiaM%2FA1Zgkq%2BQh72yojbYk3%2BhtK6FeSHc8vBSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FG8FnbeoGRw3fe%2FpKtwDXIEN87m2BXYIyclM2CIxeAMZH78y6AM5hMWoEhrHqov0vHQz1LVHxh%2BckDDJ7r42lUfbvI4cxnt5KwEsX1AsQ0SUluoVEtnfgWYRuRGCDdMSAiBVtwyvL%2F03VZE%2BYgStFKggubbYolUPYiDtoywNvn7H3hNeDZeMEbecXS3yxsIJ1aVxhDCh5K0HVKEV8GCKH42HDcPLZ0bH8DoZnYlb1g5HOLMm7gh5gIUpRViJCw2RMV1hIxUqeq5I%2FpwqFbBCDxtQ2Fa3XYe2wuDxus5ncmpX7iXbawK2JpdkW4jIur4bYE2tnozqL03iHshS9yRPQ5rYLgLw3o4CgNGVnpRJQhEC6qJWMEnS5iFqQJARmhSbr3rZNPoV2ULqA7zBU9HMUiETtTX0R%2BzmFJlrOys9jyyQkHeRbJVjrEX9eoXdmUUujeJR5FH9LQMu5TVNiEuJz3R3DDjgqlQb2GWOfI%2BXtcxqreIraDkIMpO0Zg6MNKpkviRZ850nUVbAtUfJ4lLUdORHNiH5uD3lDtEKNs%2B%2B7VwlCvN3gX17bFHpX8f4AYdjCxEsuMMga0quzgdpkZ6BE4GZCc5o9Ab%2BShvUtjIapg169kWN%2FlN85cHzHA6UuNEi9DGltIhcDNbyzPkw9oDpwAY6pgG%2Bds0jphHh79IYwODldDNQfV2L%2BESUS5B2K%2B2dZOgZYfMeVDb9z1NeFYBVVG83vh%2B%2BtHmtoddLzvlrMLhTx5HJcM8KojdZbmnRny3KPhbSt2Gz0pw2kdHINAFPR8l3zPWeWM631iE2i%2B4oy3270aboFwNpYYZC5RV%2BGmBzYX8wKsyjrSZuocpAQn7dwXLs7XPsjK52lF%2BtHzpyRCMF3v99IiPyHB2D&X-Amz-Signature=fb3970589f2e9fad6e1560531019cdfb36c3b02c580074724c01f74bd1c94206&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMRAMOA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2BlYgz0stF0ISJ9pMkf6u%2BD6fjXBhuMAo%2BrAQsdapxAiB1eEy6xdiaM%2FA1Zgkq%2BQh72yojbYk3%2BhtK6FeSHc8vBSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FG8FnbeoGRw3fe%2FpKtwDXIEN87m2BXYIyclM2CIxeAMZH78y6AM5hMWoEhrHqov0vHQz1LVHxh%2BckDDJ7r42lUfbvI4cxnt5KwEsX1AsQ0SUluoVEtnfgWYRuRGCDdMSAiBVtwyvL%2F03VZE%2BYgStFKggubbYolUPYiDtoywNvn7H3hNeDZeMEbecXS3yxsIJ1aVxhDCh5K0HVKEV8GCKH42HDcPLZ0bH8DoZnYlb1g5HOLMm7gh5gIUpRViJCw2RMV1hIxUqeq5I%2FpwqFbBCDxtQ2Fa3XYe2wuDxus5ncmpX7iXbawK2JpdkW4jIur4bYE2tnozqL03iHshS9yRPQ5rYLgLw3o4CgNGVnpRJQhEC6qJWMEnS5iFqQJARmhSbr3rZNPoV2ULqA7zBU9HMUiETtTX0R%2BzmFJlrOys9jyyQkHeRbJVjrEX9eoXdmUUujeJR5FH9LQMu5TVNiEuJz3R3DDjgqlQb2GWOfI%2BXtcxqreIraDkIMpO0Zg6MNKpkviRZ850nUVbAtUfJ4lLUdORHNiH5uD3lDtEKNs%2B%2B7VwlCvN3gX17bFHpX8f4AYdjCxEsuMMga0quzgdpkZ6BE4GZCc5o9Ab%2BShvUtjIapg169kWN%2FlN85cHzHA6UuNEi9DGltIhcDNbyzPkw9oDpwAY6pgG%2Bds0jphHh79IYwODldDNQfV2L%2BESUS5B2K%2B2dZOgZYfMeVDb9z1NeFYBVVG83vh%2B%2BtHmtoddLzvlrMLhTx5HJcM8KojdZbmnRny3KPhbSt2Gz0pw2kdHINAFPR8l3zPWeWM631iE2i%2B4oy3270aboFwNpYYZC5RV%2BGmBzYX8wKsyjrSZuocpAQn7dwXLs7XPsjK52lF%2BtHzpyRCMF3v99IiPyHB2D&X-Amz-Signature=f268a6e95dee3fde99dd06cb45c45f81687a29d85106c1e94f22142845486ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMRAMOA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2BlYgz0stF0ISJ9pMkf6u%2BD6fjXBhuMAo%2BrAQsdapxAiB1eEy6xdiaM%2FA1Zgkq%2BQh72yojbYk3%2BhtK6FeSHc8vBSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FG8FnbeoGRw3fe%2FpKtwDXIEN87m2BXYIyclM2CIxeAMZH78y6AM5hMWoEhrHqov0vHQz1LVHxh%2BckDDJ7r42lUfbvI4cxnt5KwEsX1AsQ0SUluoVEtnfgWYRuRGCDdMSAiBVtwyvL%2F03VZE%2BYgStFKggubbYolUPYiDtoywNvn7H3hNeDZeMEbecXS3yxsIJ1aVxhDCh5K0HVKEV8GCKH42HDcPLZ0bH8DoZnYlb1g5HOLMm7gh5gIUpRViJCw2RMV1hIxUqeq5I%2FpwqFbBCDxtQ2Fa3XYe2wuDxus5ncmpX7iXbawK2JpdkW4jIur4bYE2tnozqL03iHshS9yRPQ5rYLgLw3o4CgNGVnpRJQhEC6qJWMEnS5iFqQJARmhSbr3rZNPoV2ULqA7zBU9HMUiETtTX0R%2BzmFJlrOys9jyyQkHeRbJVjrEX9eoXdmUUujeJR5FH9LQMu5TVNiEuJz3R3DDjgqlQb2GWOfI%2BXtcxqreIraDkIMpO0Zg6MNKpkviRZ850nUVbAtUfJ4lLUdORHNiH5uD3lDtEKNs%2B%2B7VwlCvN3gX17bFHpX8f4AYdjCxEsuMMga0quzgdpkZ6BE4GZCc5o9Ab%2BShvUtjIapg169kWN%2FlN85cHzHA6UuNEi9DGltIhcDNbyzPkw9oDpwAY6pgG%2Bds0jphHh79IYwODldDNQfV2L%2BESUS5B2K%2B2dZOgZYfMeVDb9z1NeFYBVVG83vh%2B%2BtHmtoddLzvlrMLhTx5HJcM8KojdZbmnRny3KPhbSt2Gz0pw2kdHINAFPR8l3zPWeWM631iE2i%2B4oy3270aboFwNpYYZC5RV%2BGmBzYX8wKsyjrSZuocpAQn7dwXLs7XPsjK52lF%2BtHzpyRCMF3v99IiPyHB2D&X-Amz-Signature=1f6264c9990413f06e3432232d4bb65fd4068018f51b7112f00cb6b36e5cb32a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMRAMOA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2BlYgz0stF0ISJ9pMkf6u%2BD6fjXBhuMAo%2BrAQsdapxAiB1eEy6xdiaM%2FA1Zgkq%2BQh72yojbYk3%2BhtK6FeSHc8vBSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FG8FnbeoGRw3fe%2FpKtwDXIEN87m2BXYIyclM2CIxeAMZH78y6AM5hMWoEhrHqov0vHQz1LVHxh%2BckDDJ7r42lUfbvI4cxnt5KwEsX1AsQ0SUluoVEtnfgWYRuRGCDdMSAiBVtwyvL%2F03VZE%2BYgStFKggubbYolUPYiDtoywNvn7H3hNeDZeMEbecXS3yxsIJ1aVxhDCh5K0HVKEV8GCKH42HDcPLZ0bH8DoZnYlb1g5HOLMm7gh5gIUpRViJCw2RMV1hIxUqeq5I%2FpwqFbBCDxtQ2Fa3XYe2wuDxus5ncmpX7iXbawK2JpdkW4jIur4bYE2tnozqL03iHshS9yRPQ5rYLgLw3o4CgNGVnpRJQhEC6qJWMEnS5iFqQJARmhSbr3rZNPoV2ULqA7zBU9HMUiETtTX0R%2BzmFJlrOys9jyyQkHeRbJVjrEX9eoXdmUUujeJR5FH9LQMu5TVNiEuJz3R3DDjgqlQb2GWOfI%2BXtcxqreIraDkIMpO0Zg6MNKpkviRZ850nUVbAtUfJ4lLUdORHNiH5uD3lDtEKNs%2B%2B7VwlCvN3gX17bFHpX8f4AYdjCxEsuMMga0quzgdpkZ6BE4GZCc5o9Ab%2BShvUtjIapg169kWN%2FlN85cHzHA6UuNEi9DGltIhcDNbyzPkw9oDpwAY6pgG%2Bds0jphHh79IYwODldDNQfV2L%2BESUS5B2K%2B2dZOgZYfMeVDb9z1NeFYBVVG83vh%2B%2BtHmtoddLzvlrMLhTx5HJcM8KojdZbmnRny3KPhbSt2Gz0pw2kdHINAFPR8l3zPWeWM631iE2i%2B4oy3270aboFwNpYYZC5RV%2BGmBzYX8wKsyjrSZuocpAQn7dwXLs7XPsjK52lF%2BtHzpyRCMF3v99IiPyHB2D&X-Amz-Signature=ea7f8e7bb59e3e3cda918e4dc3f18483de99dfabdb5bccc799ede2e70cdc52d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMRAMOA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2BlYgz0stF0ISJ9pMkf6u%2BD6fjXBhuMAo%2BrAQsdapxAiB1eEy6xdiaM%2FA1Zgkq%2BQh72yojbYk3%2BhtK6FeSHc8vBSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FG8FnbeoGRw3fe%2FpKtwDXIEN87m2BXYIyclM2CIxeAMZH78y6AM5hMWoEhrHqov0vHQz1LVHxh%2BckDDJ7r42lUfbvI4cxnt5KwEsX1AsQ0SUluoVEtnfgWYRuRGCDdMSAiBVtwyvL%2F03VZE%2BYgStFKggubbYolUPYiDtoywNvn7H3hNeDZeMEbecXS3yxsIJ1aVxhDCh5K0HVKEV8GCKH42HDcPLZ0bH8DoZnYlb1g5HOLMm7gh5gIUpRViJCw2RMV1hIxUqeq5I%2FpwqFbBCDxtQ2Fa3XYe2wuDxus5ncmpX7iXbawK2JpdkW4jIur4bYE2tnozqL03iHshS9yRPQ5rYLgLw3o4CgNGVnpRJQhEC6qJWMEnS5iFqQJARmhSbr3rZNPoV2ULqA7zBU9HMUiETtTX0R%2BzmFJlrOys9jyyQkHeRbJVjrEX9eoXdmUUujeJR5FH9LQMu5TVNiEuJz3R3DDjgqlQb2GWOfI%2BXtcxqreIraDkIMpO0Zg6MNKpkviRZ850nUVbAtUfJ4lLUdORHNiH5uD3lDtEKNs%2B%2B7VwlCvN3gX17bFHpX8f4AYdjCxEsuMMga0quzgdpkZ6BE4GZCc5o9Ab%2BShvUtjIapg169kWN%2FlN85cHzHA6UuNEi9DGltIhcDNbyzPkw9oDpwAY6pgG%2Bds0jphHh79IYwODldDNQfV2L%2BESUS5B2K%2B2dZOgZYfMeVDb9z1NeFYBVVG83vh%2B%2BtHmtoddLzvlrMLhTx5HJcM8KojdZbmnRny3KPhbSt2Gz0pw2kdHINAFPR8l3zPWeWM631iE2i%2B4oy3270aboFwNpYYZC5RV%2BGmBzYX8wKsyjrSZuocpAQn7dwXLs7XPsjK52lF%2BtHzpyRCMF3v99IiPyHB2D&X-Amz-Signature=07cdbe54838c9cf416772184e449db14f349c78fde469186ada1de3ce4b0116c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMRAMOA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHU%2BlYgz0stF0ISJ9pMkf6u%2BD6fjXBhuMAo%2BrAQsdapxAiB1eEy6xdiaM%2FA1Zgkq%2BQh72yojbYk3%2BhtK6FeSHc8vBSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM%2FG8FnbeoGRw3fe%2FpKtwDXIEN87m2BXYIyclM2CIxeAMZH78y6AM5hMWoEhrHqov0vHQz1LVHxh%2BckDDJ7r42lUfbvI4cxnt5KwEsX1AsQ0SUluoVEtnfgWYRuRGCDdMSAiBVtwyvL%2F03VZE%2BYgStFKggubbYolUPYiDtoywNvn7H3hNeDZeMEbecXS3yxsIJ1aVxhDCh5K0HVKEV8GCKH42HDcPLZ0bH8DoZnYlb1g5HOLMm7gh5gIUpRViJCw2RMV1hIxUqeq5I%2FpwqFbBCDxtQ2Fa3XYe2wuDxus5ncmpX7iXbawK2JpdkW4jIur4bYE2tnozqL03iHshS9yRPQ5rYLgLw3o4CgNGVnpRJQhEC6qJWMEnS5iFqQJARmhSbr3rZNPoV2ULqA7zBU9HMUiETtTX0R%2BzmFJlrOys9jyyQkHeRbJVjrEX9eoXdmUUujeJR5FH9LQMu5TVNiEuJz3R3DDjgqlQb2GWOfI%2BXtcxqreIraDkIMpO0Zg6MNKpkviRZ850nUVbAtUfJ4lLUdORHNiH5uD3lDtEKNs%2B%2B7VwlCvN3gX17bFHpX8f4AYdjCxEsuMMga0quzgdpkZ6BE4GZCc5o9Ab%2BShvUtjIapg169kWN%2FlN85cHzHA6UuNEi9DGltIhcDNbyzPkw9oDpwAY6pgG%2Bds0jphHh79IYwODldDNQfV2L%2BESUS5B2K%2B2dZOgZYfMeVDb9z1NeFYBVVG83vh%2B%2BtHmtoddLzvlrMLhTx5HJcM8KojdZbmnRny3KPhbSt2Gz0pw2kdHINAFPR8l3zPWeWM631iE2i%2B4oy3270aboFwNpYYZC5RV%2BGmBzYX8wKsyjrSZuocpAQn7dwXLs7XPsjK52lF%2BtHzpyRCMF3v99IiPyHB2D&X-Amz-Signature=f7f5df743a22bb7f9855c5b6f9410f7d5b27465a10a9f9808b293955c316e321&X-Amz-SignedHeaders=host&x-id=GetObject)
