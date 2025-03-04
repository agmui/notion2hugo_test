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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYL2GSV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5fNkz2eHmTWxuAD4Zg5ylBr%2BbhCchrEo4%2FdM0WLfZIAiEAxooA1Q3E%2BHLwFhcZjv1YVUBOB8oDsp%2FKwRe6Nc6BatAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVZ2D%2Femg2Gj3kdeircA8xouQQUCb8NXZ5FPbvW2igxzRb63RG2BZtPvlrLhWyNy5h%2Fliabr9iedSIKghvoDWulJyj06W5Ex6HPmijlKI4oIGUSGBi2lDp6rvK6SLd48vrmZ4sTdpRcxXl8IfewZxhP26x%2FGe0ztfzMFAL7Zpisxh8xPgU2%2BHOBqX1EJC9imuQdZmCoEDDyVGxF7QalGXlSKzuZeZhTkh2RHUYJnYlATzjFpbO%2BBr8uc5YCWqR97uBHqP686B9ZBkex8SBGDT1Wm3E%2BzuuJE6ITX3OShllSis1kgWb%2F%2FBJtw2Ap9%2FQSDHUSBlyfbdFQnJ0MsWk186wU1oIjWNjz%2BEeXBDauu9QQi3zfBV3mWmlScM1cf8grtrNVr4%2BMZHNNqB6w6PT721yQafyhfHeQXhvRBsO6FpvvnoZRiLvI7qdckm9qC0gI3NnHfpIKQZsGoMOnuOjCI0LKsBiYoIakKjjPLvLVmXPRj%2FNcvEgCJWj7UOd5%2BfV%2BNAV1dosHtZqQ661qbIzawcN8VN09XELGiHwgbMv2ZykPOXE4KJE3qyXY8b1SD72NIQEJPMbh6OyT9RLrq%2FFO3rFkQ57zxOBnm2BJdXjFxFoGlnfegvzfW31AuMnuDaVhUwKLYxdj3MlP4anJMNDcnb4GOqUB1h03MefmoGdMxo2%2Fesyowv0%2FQEGtd07fjm6vZH78aDbBswHi6ykdPcHQBVxUaMUX3F0pKiAffYMYUGH%2FhCMveOeGz%2BenZbEuKvwMYbWZyuR%2BWklu%2FORVqE6LxhYO8yRHHhe4yZbT42TQWyWI0AkJdWZJTeLLr0PFSw5bY5iq54u7140CcSASSkHoYJpY5KBqWNNiuv5C7RuBKRDQW9IURbyu84z7&X-Amz-Signature=ea792825efc714be24ecd469701517ca858e8dd1722e6efff4c5a2dcd2d358e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYL2GSV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5fNkz2eHmTWxuAD4Zg5ylBr%2BbhCchrEo4%2FdM0WLfZIAiEAxooA1Q3E%2BHLwFhcZjv1YVUBOB8oDsp%2FKwRe6Nc6BatAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVZ2D%2Femg2Gj3kdeircA8xouQQUCb8NXZ5FPbvW2igxzRb63RG2BZtPvlrLhWyNy5h%2Fliabr9iedSIKghvoDWulJyj06W5Ex6HPmijlKI4oIGUSGBi2lDp6rvK6SLd48vrmZ4sTdpRcxXl8IfewZxhP26x%2FGe0ztfzMFAL7Zpisxh8xPgU2%2BHOBqX1EJC9imuQdZmCoEDDyVGxF7QalGXlSKzuZeZhTkh2RHUYJnYlATzjFpbO%2BBr8uc5YCWqR97uBHqP686B9ZBkex8SBGDT1Wm3E%2BzuuJE6ITX3OShllSis1kgWb%2F%2FBJtw2Ap9%2FQSDHUSBlyfbdFQnJ0MsWk186wU1oIjWNjz%2BEeXBDauu9QQi3zfBV3mWmlScM1cf8grtrNVr4%2BMZHNNqB6w6PT721yQafyhfHeQXhvRBsO6FpvvnoZRiLvI7qdckm9qC0gI3NnHfpIKQZsGoMOnuOjCI0LKsBiYoIakKjjPLvLVmXPRj%2FNcvEgCJWj7UOd5%2BfV%2BNAV1dosHtZqQ661qbIzawcN8VN09XELGiHwgbMv2ZykPOXE4KJE3qyXY8b1SD72NIQEJPMbh6OyT9RLrq%2FFO3rFkQ57zxOBnm2BJdXjFxFoGlnfegvzfW31AuMnuDaVhUwKLYxdj3MlP4anJMNDcnb4GOqUB1h03MefmoGdMxo2%2Fesyowv0%2FQEGtd07fjm6vZH78aDbBswHi6ykdPcHQBVxUaMUX3F0pKiAffYMYUGH%2FhCMveOeGz%2BenZbEuKvwMYbWZyuR%2BWklu%2FORVqE6LxhYO8yRHHhe4yZbT42TQWyWI0AkJdWZJTeLLr0PFSw5bY5iq54u7140CcSASSkHoYJpY5KBqWNNiuv5C7RuBKRDQW9IURbyu84z7&X-Amz-Signature=6cc0a74e76c997248a364bb3eb07eff8bd8add34afb467c922cfeb59f3331b05&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYL2GSV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5fNkz2eHmTWxuAD4Zg5ylBr%2BbhCchrEo4%2FdM0WLfZIAiEAxooA1Q3E%2BHLwFhcZjv1YVUBOB8oDsp%2FKwRe6Nc6BatAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVZ2D%2Femg2Gj3kdeircA8xouQQUCb8NXZ5FPbvW2igxzRb63RG2BZtPvlrLhWyNy5h%2Fliabr9iedSIKghvoDWulJyj06W5Ex6HPmijlKI4oIGUSGBi2lDp6rvK6SLd48vrmZ4sTdpRcxXl8IfewZxhP26x%2FGe0ztfzMFAL7Zpisxh8xPgU2%2BHOBqX1EJC9imuQdZmCoEDDyVGxF7QalGXlSKzuZeZhTkh2RHUYJnYlATzjFpbO%2BBr8uc5YCWqR97uBHqP686B9ZBkex8SBGDT1Wm3E%2BzuuJE6ITX3OShllSis1kgWb%2F%2FBJtw2Ap9%2FQSDHUSBlyfbdFQnJ0MsWk186wU1oIjWNjz%2BEeXBDauu9QQi3zfBV3mWmlScM1cf8grtrNVr4%2BMZHNNqB6w6PT721yQafyhfHeQXhvRBsO6FpvvnoZRiLvI7qdckm9qC0gI3NnHfpIKQZsGoMOnuOjCI0LKsBiYoIakKjjPLvLVmXPRj%2FNcvEgCJWj7UOd5%2BfV%2BNAV1dosHtZqQ661qbIzawcN8VN09XELGiHwgbMv2ZykPOXE4KJE3qyXY8b1SD72NIQEJPMbh6OyT9RLrq%2FFO3rFkQ57zxOBnm2BJdXjFxFoGlnfegvzfW31AuMnuDaVhUwKLYxdj3MlP4anJMNDcnb4GOqUB1h03MefmoGdMxo2%2Fesyowv0%2FQEGtd07fjm6vZH78aDbBswHi6ykdPcHQBVxUaMUX3F0pKiAffYMYUGH%2FhCMveOeGz%2BenZbEuKvwMYbWZyuR%2BWklu%2FORVqE6LxhYO8yRHHhe4yZbT42TQWyWI0AkJdWZJTeLLr0PFSw5bY5iq54u7140CcSASSkHoYJpY5KBqWNNiuv5C7RuBKRDQW9IURbyu84z7&X-Amz-Signature=856f85268003b7ba4ba32665d9d0b7b9fee0a02011b5a4f9535a944ac17d079a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYL2GSV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5fNkz2eHmTWxuAD4Zg5ylBr%2BbhCchrEo4%2FdM0WLfZIAiEAxooA1Q3E%2BHLwFhcZjv1YVUBOB8oDsp%2FKwRe6Nc6BatAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVZ2D%2Femg2Gj3kdeircA8xouQQUCb8NXZ5FPbvW2igxzRb63RG2BZtPvlrLhWyNy5h%2Fliabr9iedSIKghvoDWulJyj06W5Ex6HPmijlKI4oIGUSGBi2lDp6rvK6SLd48vrmZ4sTdpRcxXl8IfewZxhP26x%2FGe0ztfzMFAL7Zpisxh8xPgU2%2BHOBqX1EJC9imuQdZmCoEDDyVGxF7QalGXlSKzuZeZhTkh2RHUYJnYlATzjFpbO%2BBr8uc5YCWqR97uBHqP686B9ZBkex8SBGDT1Wm3E%2BzuuJE6ITX3OShllSis1kgWb%2F%2FBJtw2Ap9%2FQSDHUSBlyfbdFQnJ0MsWk186wU1oIjWNjz%2BEeXBDauu9QQi3zfBV3mWmlScM1cf8grtrNVr4%2BMZHNNqB6w6PT721yQafyhfHeQXhvRBsO6FpvvnoZRiLvI7qdckm9qC0gI3NnHfpIKQZsGoMOnuOjCI0LKsBiYoIakKjjPLvLVmXPRj%2FNcvEgCJWj7UOd5%2BfV%2BNAV1dosHtZqQ661qbIzawcN8VN09XELGiHwgbMv2ZykPOXE4KJE3qyXY8b1SD72NIQEJPMbh6OyT9RLrq%2FFO3rFkQ57zxOBnm2BJdXjFxFoGlnfegvzfW31AuMnuDaVhUwKLYxdj3MlP4anJMNDcnb4GOqUB1h03MefmoGdMxo2%2Fesyowv0%2FQEGtd07fjm6vZH78aDbBswHi6ykdPcHQBVxUaMUX3F0pKiAffYMYUGH%2FhCMveOeGz%2BenZbEuKvwMYbWZyuR%2BWklu%2FORVqE6LxhYO8yRHHhe4yZbT42TQWyWI0AkJdWZJTeLLr0PFSw5bY5iq54u7140CcSASSkHoYJpY5KBqWNNiuv5C7RuBKRDQW9IURbyu84z7&X-Amz-Signature=8ee36006391a069d9bfba22705029137f8689f550eaff91c45005585ae3cea0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYL2GSV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5fNkz2eHmTWxuAD4Zg5ylBr%2BbhCchrEo4%2FdM0WLfZIAiEAxooA1Q3E%2BHLwFhcZjv1YVUBOB8oDsp%2FKwRe6Nc6BatAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVZ2D%2Femg2Gj3kdeircA8xouQQUCb8NXZ5FPbvW2igxzRb63RG2BZtPvlrLhWyNy5h%2Fliabr9iedSIKghvoDWulJyj06W5Ex6HPmijlKI4oIGUSGBi2lDp6rvK6SLd48vrmZ4sTdpRcxXl8IfewZxhP26x%2FGe0ztfzMFAL7Zpisxh8xPgU2%2BHOBqX1EJC9imuQdZmCoEDDyVGxF7QalGXlSKzuZeZhTkh2RHUYJnYlATzjFpbO%2BBr8uc5YCWqR97uBHqP686B9ZBkex8SBGDT1Wm3E%2BzuuJE6ITX3OShllSis1kgWb%2F%2FBJtw2Ap9%2FQSDHUSBlyfbdFQnJ0MsWk186wU1oIjWNjz%2BEeXBDauu9QQi3zfBV3mWmlScM1cf8grtrNVr4%2BMZHNNqB6w6PT721yQafyhfHeQXhvRBsO6FpvvnoZRiLvI7qdckm9qC0gI3NnHfpIKQZsGoMOnuOjCI0LKsBiYoIakKjjPLvLVmXPRj%2FNcvEgCJWj7UOd5%2BfV%2BNAV1dosHtZqQ661qbIzawcN8VN09XELGiHwgbMv2ZykPOXE4KJE3qyXY8b1SD72NIQEJPMbh6OyT9RLrq%2FFO3rFkQ57zxOBnm2BJdXjFxFoGlnfegvzfW31AuMnuDaVhUwKLYxdj3MlP4anJMNDcnb4GOqUB1h03MefmoGdMxo2%2Fesyowv0%2FQEGtd07fjm6vZH78aDbBswHi6ykdPcHQBVxUaMUX3F0pKiAffYMYUGH%2FhCMveOeGz%2BenZbEuKvwMYbWZyuR%2BWklu%2FORVqE6LxhYO8yRHHhe4yZbT42TQWyWI0AkJdWZJTeLLr0PFSw5bY5iq54u7140CcSASSkHoYJpY5KBqWNNiuv5C7RuBKRDQW9IURbyu84z7&X-Amz-Signature=c65924a632ab7e805577b82733c2cf313b53285cd8c43067f15e416bc70a37d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYL2GSV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5fNkz2eHmTWxuAD4Zg5ylBr%2BbhCchrEo4%2FdM0WLfZIAiEAxooA1Q3E%2BHLwFhcZjv1YVUBOB8oDsp%2FKwRe6Nc6BatAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVZ2D%2Femg2Gj3kdeircA8xouQQUCb8NXZ5FPbvW2igxzRb63RG2BZtPvlrLhWyNy5h%2Fliabr9iedSIKghvoDWulJyj06W5Ex6HPmijlKI4oIGUSGBi2lDp6rvK6SLd48vrmZ4sTdpRcxXl8IfewZxhP26x%2FGe0ztfzMFAL7Zpisxh8xPgU2%2BHOBqX1EJC9imuQdZmCoEDDyVGxF7QalGXlSKzuZeZhTkh2RHUYJnYlATzjFpbO%2BBr8uc5YCWqR97uBHqP686B9ZBkex8SBGDT1Wm3E%2BzuuJE6ITX3OShllSis1kgWb%2F%2FBJtw2Ap9%2FQSDHUSBlyfbdFQnJ0MsWk186wU1oIjWNjz%2BEeXBDauu9QQi3zfBV3mWmlScM1cf8grtrNVr4%2BMZHNNqB6w6PT721yQafyhfHeQXhvRBsO6FpvvnoZRiLvI7qdckm9qC0gI3NnHfpIKQZsGoMOnuOjCI0LKsBiYoIakKjjPLvLVmXPRj%2FNcvEgCJWj7UOd5%2BfV%2BNAV1dosHtZqQ661qbIzawcN8VN09XELGiHwgbMv2ZykPOXE4KJE3qyXY8b1SD72NIQEJPMbh6OyT9RLrq%2FFO3rFkQ57zxOBnm2BJdXjFxFoGlnfegvzfW31AuMnuDaVhUwKLYxdj3MlP4anJMNDcnb4GOqUB1h03MefmoGdMxo2%2Fesyowv0%2FQEGtd07fjm6vZH78aDbBswHi6ykdPcHQBVxUaMUX3F0pKiAffYMYUGH%2FhCMveOeGz%2BenZbEuKvwMYbWZyuR%2BWklu%2FORVqE6LxhYO8yRHHhe4yZbT42TQWyWI0AkJdWZJTeLLr0PFSw5bY5iq54u7140CcSASSkHoYJpY5KBqWNNiuv5C7RuBKRDQW9IURbyu84z7&X-Amz-Signature=d9e205ebd76ced1ed1c95616e6f4117a8ad0ac6a1739a36f958a4799564f5835&X-Amz-SignedHeaders=host&x-id=GetObject)
