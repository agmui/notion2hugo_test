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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622A2T6HF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCyW0BAFv%2Bu3%2FSe%2FC1wf78asv%2F0EAWIT6uE8bgEzVgADAIhAJUCVFxmzYoiU9cofu55Tto80HAtJ%2B%2BguyqS5JRiTnhGKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS7x3cqjJlZ%2Fwdvwoq3AO%2F0WiqC3XmPICmifAgVee%2FI9S2N9mEQY%2BwjmVuev5JMuzI%2BCJZ8dWiBZLF6CqKv8w9ukIZ54C2vERelXOoS%2BQRMcFV1TaSCNzafwuYmyQ%2FH2DZUKJT0%2FRRD9JjKQUm%2Fgv8BFCDfKqOTXMz3gnRUFC%2FwYje1sthESe0ytEi7sdEz4Po5wpp%2FpxbORJ2ytUtCWk%2F2w5lrxU5xilDTWCVwhFHAcBCqGE9c4mRjsCYEAi1htWGr4b%2FRfETXyjIsU%2BhXJeYbdp4ujIeQptDAemfbCjTlmzIETxp4l6qx737CFrBMM8cvqHRq4l7iM%2B%2B0UGhh61fMS9h4Fm5t7u8g46vrAchiRx2BsLhNDNBop87krqMsEl9tbfyQUkJeqXUOHHkV5Z6zA8yHMdt3pha8ThtJXHPn1YEjW4ROAMhGdEa8wjMconBUW762nOuCOmFOkr8KUhWkWXkezXqXO8TEWmKIu%2FBYEENqjGHZ6UWmk%2BpVGom1ecrkbGplNTTI0i8BAuAR%2F80FCIGLvkGJFN3WkM43BN8F0nm6RXFSkfZN3ZtnGFBvhR2jD9vZ%2Fdtin7Pf3gQtBnc6MCGNS1G9cIdKlnnWwGSDW%2B1cQk3AwCP85iSuSyKfwynaB6scQxwujsiojCNlKLABjqkAUcgXtZy7D8bEXFyx091wbMKyBrd3z0rbToF5Tp4E7gdTM2usGw09cn8G6XLMsgWN%2FxbXYkS20AGnHRmjUn8AoV5%2BdSpTPdPD0uLw%2B62dSbvzzyqaSBWUNrwuXYtbYjQr5NHpkzGy1QkX3c8heUGMfKZwo%2BmbRBrukZaFqnVL7fbFXxpEZ%2F54AyU9tbeL4yw0Mjesi2wwIrl9iMj5m4dlL0TxHY%2B&X-Amz-Signature=4ea3fc4be540e5e5ded26be97ac414717d12372ecca826100980128361a2b3be&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622A2T6HF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCyW0BAFv%2Bu3%2FSe%2FC1wf78asv%2F0EAWIT6uE8bgEzVgADAIhAJUCVFxmzYoiU9cofu55Tto80HAtJ%2B%2BguyqS5JRiTnhGKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS7x3cqjJlZ%2Fwdvwoq3AO%2F0WiqC3XmPICmifAgVee%2FI9S2N9mEQY%2BwjmVuev5JMuzI%2BCJZ8dWiBZLF6CqKv8w9ukIZ54C2vERelXOoS%2BQRMcFV1TaSCNzafwuYmyQ%2FH2DZUKJT0%2FRRD9JjKQUm%2Fgv8BFCDfKqOTXMz3gnRUFC%2FwYje1sthESe0ytEi7sdEz4Po5wpp%2FpxbORJ2ytUtCWk%2F2w5lrxU5xilDTWCVwhFHAcBCqGE9c4mRjsCYEAi1htWGr4b%2FRfETXyjIsU%2BhXJeYbdp4ujIeQptDAemfbCjTlmzIETxp4l6qx737CFrBMM8cvqHRq4l7iM%2B%2B0UGhh61fMS9h4Fm5t7u8g46vrAchiRx2BsLhNDNBop87krqMsEl9tbfyQUkJeqXUOHHkV5Z6zA8yHMdt3pha8ThtJXHPn1YEjW4ROAMhGdEa8wjMconBUW762nOuCOmFOkr8KUhWkWXkezXqXO8TEWmKIu%2FBYEENqjGHZ6UWmk%2BpVGom1ecrkbGplNTTI0i8BAuAR%2F80FCIGLvkGJFN3WkM43BN8F0nm6RXFSkfZN3ZtnGFBvhR2jD9vZ%2Fdtin7Pf3gQtBnc6MCGNS1G9cIdKlnnWwGSDW%2B1cQk3AwCP85iSuSyKfwynaB6scQxwujsiojCNlKLABjqkAUcgXtZy7D8bEXFyx091wbMKyBrd3z0rbToF5Tp4E7gdTM2usGw09cn8G6XLMsgWN%2FxbXYkS20AGnHRmjUn8AoV5%2BdSpTPdPD0uLw%2B62dSbvzzyqaSBWUNrwuXYtbYjQr5NHpkzGy1QkX3c8heUGMfKZwo%2BmbRBrukZaFqnVL7fbFXxpEZ%2F54AyU9tbeL4yw0Mjesi2wwIrl9iMj5m4dlL0TxHY%2B&X-Amz-Signature=f77ba2e5c66353f0fdeccdc9dbb6af839257550f964ee0c8208b950b8adb543e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622A2T6HF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCyW0BAFv%2Bu3%2FSe%2FC1wf78asv%2F0EAWIT6uE8bgEzVgADAIhAJUCVFxmzYoiU9cofu55Tto80HAtJ%2B%2BguyqS5JRiTnhGKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS7x3cqjJlZ%2Fwdvwoq3AO%2F0WiqC3XmPICmifAgVee%2FI9S2N9mEQY%2BwjmVuev5JMuzI%2BCJZ8dWiBZLF6CqKv8w9ukIZ54C2vERelXOoS%2BQRMcFV1TaSCNzafwuYmyQ%2FH2DZUKJT0%2FRRD9JjKQUm%2Fgv8BFCDfKqOTXMz3gnRUFC%2FwYje1sthESe0ytEi7sdEz4Po5wpp%2FpxbORJ2ytUtCWk%2F2w5lrxU5xilDTWCVwhFHAcBCqGE9c4mRjsCYEAi1htWGr4b%2FRfETXyjIsU%2BhXJeYbdp4ujIeQptDAemfbCjTlmzIETxp4l6qx737CFrBMM8cvqHRq4l7iM%2B%2B0UGhh61fMS9h4Fm5t7u8g46vrAchiRx2BsLhNDNBop87krqMsEl9tbfyQUkJeqXUOHHkV5Z6zA8yHMdt3pha8ThtJXHPn1YEjW4ROAMhGdEa8wjMconBUW762nOuCOmFOkr8KUhWkWXkezXqXO8TEWmKIu%2FBYEENqjGHZ6UWmk%2BpVGom1ecrkbGplNTTI0i8BAuAR%2F80FCIGLvkGJFN3WkM43BN8F0nm6RXFSkfZN3ZtnGFBvhR2jD9vZ%2Fdtin7Pf3gQtBnc6MCGNS1G9cIdKlnnWwGSDW%2B1cQk3AwCP85iSuSyKfwynaB6scQxwujsiojCNlKLABjqkAUcgXtZy7D8bEXFyx091wbMKyBrd3z0rbToF5Tp4E7gdTM2usGw09cn8G6XLMsgWN%2FxbXYkS20AGnHRmjUn8AoV5%2BdSpTPdPD0uLw%2B62dSbvzzyqaSBWUNrwuXYtbYjQr5NHpkzGy1QkX3c8heUGMfKZwo%2BmbRBrukZaFqnVL7fbFXxpEZ%2F54AyU9tbeL4yw0Mjesi2wwIrl9iMj5m4dlL0TxHY%2B&X-Amz-Signature=44f28f359b85706ec53aeb2e32c3316933d88c2732db7b89bfdbb6473b2363f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622A2T6HF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCyW0BAFv%2Bu3%2FSe%2FC1wf78asv%2F0EAWIT6uE8bgEzVgADAIhAJUCVFxmzYoiU9cofu55Tto80HAtJ%2B%2BguyqS5JRiTnhGKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS7x3cqjJlZ%2Fwdvwoq3AO%2F0WiqC3XmPICmifAgVee%2FI9S2N9mEQY%2BwjmVuev5JMuzI%2BCJZ8dWiBZLF6CqKv8w9ukIZ54C2vERelXOoS%2BQRMcFV1TaSCNzafwuYmyQ%2FH2DZUKJT0%2FRRD9JjKQUm%2Fgv8BFCDfKqOTXMz3gnRUFC%2FwYje1sthESe0ytEi7sdEz4Po5wpp%2FpxbORJ2ytUtCWk%2F2w5lrxU5xilDTWCVwhFHAcBCqGE9c4mRjsCYEAi1htWGr4b%2FRfETXyjIsU%2BhXJeYbdp4ujIeQptDAemfbCjTlmzIETxp4l6qx737CFrBMM8cvqHRq4l7iM%2B%2B0UGhh61fMS9h4Fm5t7u8g46vrAchiRx2BsLhNDNBop87krqMsEl9tbfyQUkJeqXUOHHkV5Z6zA8yHMdt3pha8ThtJXHPn1YEjW4ROAMhGdEa8wjMconBUW762nOuCOmFOkr8KUhWkWXkezXqXO8TEWmKIu%2FBYEENqjGHZ6UWmk%2BpVGom1ecrkbGplNTTI0i8BAuAR%2F80FCIGLvkGJFN3WkM43BN8F0nm6RXFSkfZN3ZtnGFBvhR2jD9vZ%2Fdtin7Pf3gQtBnc6MCGNS1G9cIdKlnnWwGSDW%2B1cQk3AwCP85iSuSyKfwynaB6scQxwujsiojCNlKLABjqkAUcgXtZy7D8bEXFyx091wbMKyBrd3z0rbToF5Tp4E7gdTM2usGw09cn8G6XLMsgWN%2FxbXYkS20AGnHRmjUn8AoV5%2BdSpTPdPD0uLw%2B62dSbvzzyqaSBWUNrwuXYtbYjQr5NHpkzGy1QkX3c8heUGMfKZwo%2BmbRBrukZaFqnVL7fbFXxpEZ%2F54AyU9tbeL4yw0Mjesi2wwIrl9iMj5m4dlL0TxHY%2B&X-Amz-Signature=cef4dfe2c81a36d86b692fc11661af027fc8c3329a89eaf5154b4f82b544019f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622A2T6HF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCyW0BAFv%2Bu3%2FSe%2FC1wf78asv%2F0EAWIT6uE8bgEzVgADAIhAJUCVFxmzYoiU9cofu55Tto80HAtJ%2B%2BguyqS5JRiTnhGKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS7x3cqjJlZ%2Fwdvwoq3AO%2F0WiqC3XmPICmifAgVee%2FI9S2N9mEQY%2BwjmVuev5JMuzI%2BCJZ8dWiBZLF6CqKv8w9ukIZ54C2vERelXOoS%2BQRMcFV1TaSCNzafwuYmyQ%2FH2DZUKJT0%2FRRD9JjKQUm%2Fgv8BFCDfKqOTXMz3gnRUFC%2FwYje1sthESe0ytEi7sdEz4Po5wpp%2FpxbORJ2ytUtCWk%2F2w5lrxU5xilDTWCVwhFHAcBCqGE9c4mRjsCYEAi1htWGr4b%2FRfETXyjIsU%2BhXJeYbdp4ujIeQptDAemfbCjTlmzIETxp4l6qx737CFrBMM8cvqHRq4l7iM%2B%2B0UGhh61fMS9h4Fm5t7u8g46vrAchiRx2BsLhNDNBop87krqMsEl9tbfyQUkJeqXUOHHkV5Z6zA8yHMdt3pha8ThtJXHPn1YEjW4ROAMhGdEa8wjMconBUW762nOuCOmFOkr8KUhWkWXkezXqXO8TEWmKIu%2FBYEENqjGHZ6UWmk%2BpVGom1ecrkbGplNTTI0i8BAuAR%2F80FCIGLvkGJFN3WkM43BN8F0nm6RXFSkfZN3ZtnGFBvhR2jD9vZ%2Fdtin7Pf3gQtBnc6MCGNS1G9cIdKlnnWwGSDW%2B1cQk3AwCP85iSuSyKfwynaB6scQxwujsiojCNlKLABjqkAUcgXtZy7D8bEXFyx091wbMKyBrd3z0rbToF5Tp4E7gdTM2usGw09cn8G6XLMsgWN%2FxbXYkS20AGnHRmjUn8AoV5%2BdSpTPdPD0uLw%2B62dSbvzzyqaSBWUNrwuXYtbYjQr5NHpkzGy1QkX3c8heUGMfKZwo%2BmbRBrukZaFqnVL7fbFXxpEZ%2F54AyU9tbeL4yw0Mjesi2wwIrl9iMj5m4dlL0TxHY%2B&X-Amz-Signature=0476e256a4c330a50e469e249eb37ab1b70bd547c42da4738188dce0f933ec90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622A2T6HF%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T071047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCyW0BAFv%2Bu3%2FSe%2FC1wf78asv%2F0EAWIT6uE8bgEzVgADAIhAJUCVFxmzYoiU9cofu55Tto80HAtJ%2B%2BguyqS5JRiTnhGKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS7x3cqjJlZ%2Fwdvwoq3AO%2F0WiqC3XmPICmifAgVee%2FI9S2N9mEQY%2BwjmVuev5JMuzI%2BCJZ8dWiBZLF6CqKv8w9ukIZ54C2vERelXOoS%2BQRMcFV1TaSCNzafwuYmyQ%2FH2DZUKJT0%2FRRD9JjKQUm%2Fgv8BFCDfKqOTXMz3gnRUFC%2FwYje1sthESe0ytEi7sdEz4Po5wpp%2FpxbORJ2ytUtCWk%2F2w5lrxU5xilDTWCVwhFHAcBCqGE9c4mRjsCYEAi1htWGr4b%2FRfETXyjIsU%2BhXJeYbdp4ujIeQptDAemfbCjTlmzIETxp4l6qx737CFrBMM8cvqHRq4l7iM%2B%2B0UGhh61fMS9h4Fm5t7u8g46vrAchiRx2BsLhNDNBop87krqMsEl9tbfyQUkJeqXUOHHkV5Z6zA8yHMdt3pha8ThtJXHPn1YEjW4ROAMhGdEa8wjMconBUW762nOuCOmFOkr8KUhWkWXkezXqXO8TEWmKIu%2FBYEENqjGHZ6UWmk%2BpVGom1ecrkbGplNTTI0i8BAuAR%2F80FCIGLvkGJFN3WkM43BN8F0nm6RXFSkfZN3ZtnGFBvhR2jD9vZ%2Fdtin7Pf3gQtBnc6MCGNS1G9cIdKlnnWwGSDW%2B1cQk3AwCP85iSuSyKfwynaB6scQxwujsiojCNlKLABjqkAUcgXtZy7D8bEXFyx091wbMKyBrd3z0rbToF5Tp4E7gdTM2usGw09cn8G6XLMsgWN%2FxbXYkS20AGnHRmjUn8AoV5%2BdSpTPdPD0uLw%2B62dSbvzzyqaSBWUNrwuXYtbYjQr5NHpkzGy1QkX3c8heUGMfKZwo%2BmbRBrukZaFqnVL7fbFXxpEZ%2F54AyU9tbeL4yw0Mjesi2wwIrl9iMj5m4dlL0TxHY%2B&X-Amz-Signature=ddf4bebaf62aca6389fbf4bdd5f85c29d64d9dc44c5195219b28cc04f7a9f8d3&X-Amz-SignedHeaders=host&x-id=GetObject)
