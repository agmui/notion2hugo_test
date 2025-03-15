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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774JM6CF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvHjvTJUgzyI%2Fld%2FdgY3dQ%2FFJum0fmSWpHy8bWdF51aAiAxIk6r7hF7q%2FXcDrhh9ILjmHND9Qa0A4%2B%2BNZAtYU0QDSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMI1dlguMAjwgWPn6vKtwDH1FxbcKMF0DUQF9RyS32US%2B3v1yfQwcFIjcifSOmn8kae37VIrkNLP5q0av0OfgSWtDgtp%2BKDKC6dJSCzJZmoGW95v1kXSVzc6XYHgyCb1J8MurBJYsAMePlhDXq%2B%2Bv41zSR%2FORoxou4goRrqG%2BtFH4E%2B4qcpoPSIwhfyhG7BjHHU1JW6he2qV0KJ34nq34wz0hljQ6IGAF4SZI7CD69uyAkwykrKrGTgHX9OYBYfjdAme0lZiHTD6yclHcHL4Tgqulsw3fQiwjxgyqRPnnpgvqa%2BgDmOLCxq%2BjnBWjcVsPbmYzJqRMrC8ShutFfvyvmflb%2FtJV91Y48gqvv7JW1eGZppgf6bV7pFMwu3%2BBatrRltGLlM1QAF46l0b6Jeb2N3czrOWQMd88TGjyRodmOjoLDfPTSbdklsbCZ5vhju7677ejRa9TG3NBsRDYZHfYMuCXYZG6%2ByPHPPJYmciioTCGUZqo%2FIyXRLYVIzgEUX7A4wqOBWWc9fkOBOQZbXCrMk50XfA2nMAJty9tvE8Z6RCQ44Bnz6n1sNYn3zyU5NvkVHL81o120kJM86Y%2FYVBjZIDC96f%2Bh3I6c2VXFx3jmgokNoKMdDnXdkZEs3EDbkUzWNc9oJKTKA2rjDsYw5u7VvgY6pgHaajY7PC6x%2BSFqhC%2Bm%2Bhu62Z%2FVzRAvt9T2nDOx9WUNNyo9RYgSgeie%2B0D4Vd3AJFh%2FQlNBAhBLn1PS5d83kLfOlQLrYLAyc82%2BSl634qYA%2BZELwMTk8diBpMOwZvaMxParlkgJWmXAHypWZoWL8TAbcXndUXOCb5JE9iNBl7OxRLH4mpNhokU0%2BxQTbhLKUOGdRIdSDtl4XQZHO%2FN3ASs1zFTvCSnO&X-Amz-Signature=4cf8b916a21cc35f30f136f71fc4deb7c7fdb7d4881cf0e2075b5a21b2117cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774JM6CF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvHjvTJUgzyI%2Fld%2FdgY3dQ%2FFJum0fmSWpHy8bWdF51aAiAxIk6r7hF7q%2FXcDrhh9ILjmHND9Qa0A4%2B%2BNZAtYU0QDSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMI1dlguMAjwgWPn6vKtwDH1FxbcKMF0DUQF9RyS32US%2B3v1yfQwcFIjcifSOmn8kae37VIrkNLP5q0av0OfgSWtDgtp%2BKDKC6dJSCzJZmoGW95v1kXSVzc6XYHgyCb1J8MurBJYsAMePlhDXq%2B%2Bv41zSR%2FORoxou4goRrqG%2BtFH4E%2B4qcpoPSIwhfyhG7BjHHU1JW6he2qV0KJ34nq34wz0hljQ6IGAF4SZI7CD69uyAkwykrKrGTgHX9OYBYfjdAme0lZiHTD6yclHcHL4Tgqulsw3fQiwjxgyqRPnnpgvqa%2BgDmOLCxq%2BjnBWjcVsPbmYzJqRMrC8ShutFfvyvmflb%2FtJV91Y48gqvv7JW1eGZppgf6bV7pFMwu3%2BBatrRltGLlM1QAF46l0b6Jeb2N3czrOWQMd88TGjyRodmOjoLDfPTSbdklsbCZ5vhju7677ejRa9TG3NBsRDYZHfYMuCXYZG6%2ByPHPPJYmciioTCGUZqo%2FIyXRLYVIzgEUX7A4wqOBWWc9fkOBOQZbXCrMk50XfA2nMAJty9tvE8Z6RCQ44Bnz6n1sNYn3zyU5NvkVHL81o120kJM86Y%2FYVBjZIDC96f%2Bh3I6c2VXFx3jmgokNoKMdDnXdkZEs3EDbkUzWNc9oJKTKA2rjDsYw5u7VvgY6pgHaajY7PC6x%2BSFqhC%2Bm%2Bhu62Z%2FVzRAvt9T2nDOx9WUNNyo9RYgSgeie%2B0D4Vd3AJFh%2FQlNBAhBLn1PS5d83kLfOlQLrYLAyc82%2BSl634qYA%2BZELwMTk8diBpMOwZvaMxParlkgJWmXAHypWZoWL8TAbcXndUXOCb5JE9iNBl7OxRLH4mpNhokU0%2BxQTbhLKUOGdRIdSDtl4XQZHO%2FN3ASs1zFTvCSnO&X-Amz-Signature=924dc1fbbfcc3991801921ae157cc3caa0af2ed877a4cefe353049a89a586a66&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774JM6CF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvHjvTJUgzyI%2Fld%2FdgY3dQ%2FFJum0fmSWpHy8bWdF51aAiAxIk6r7hF7q%2FXcDrhh9ILjmHND9Qa0A4%2B%2BNZAtYU0QDSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMI1dlguMAjwgWPn6vKtwDH1FxbcKMF0DUQF9RyS32US%2B3v1yfQwcFIjcifSOmn8kae37VIrkNLP5q0av0OfgSWtDgtp%2BKDKC6dJSCzJZmoGW95v1kXSVzc6XYHgyCb1J8MurBJYsAMePlhDXq%2B%2Bv41zSR%2FORoxou4goRrqG%2BtFH4E%2B4qcpoPSIwhfyhG7BjHHU1JW6he2qV0KJ34nq34wz0hljQ6IGAF4SZI7CD69uyAkwykrKrGTgHX9OYBYfjdAme0lZiHTD6yclHcHL4Tgqulsw3fQiwjxgyqRPnnpgvqa%2BgDmOLCxq%2BjnBWjcVsPbmYzJqRMrC8ShutFfvyvmflb%2FtJV91Y48gqvv7JW1eGZppgf6bV7pFMwu3%2BBatrRltGLlM1QAF46l0b6Jeb2N3czrOWQMd88TGjyRodmOjoLDfPTSbdklsbCZ5vhju7677ejRa9TG3NBsRDYZHfYMuCXYZG6%2ByPHPPJYmciioTCGUZqo%2FIyXRLYVIzgEUX7A4wqOBWWc9fkOBOQZbXCrMk50XfA2nMAJty9tvE8Z6RCQ44Bnz6n1sNYn3zyU5NvkVHL81o120kJM86Y%2FYVBjZIDC96f%2Bh3I6c2VXFx3jmgokNoKMdDnXdkZEs3EDbkUzWNc9oJKTKA2rjDsYw5u7VvgY6pgHaajY7PC6x%2BSFqhC%2Bm%2Bhu62Z%2FVzRAvt9T2nDOx9WUNNyo9RYgSgeie%2B0D4Vd3AJFh%2FQlNBAhBLn1PS5d83kLfOlQLrYLAyc82%2BSl634qYA%2BZELwMTk8diBpMOwZvaMxParlkgJWmXAHypWZoWL8TAbcXndUXOCb5JE9iNBl7OxRLH4mpNhokU0%2BxQTbhLKUOGdRIdSDtl4XQZHO%2FN3ASs1zFTvCSnO&X-Amz-Signature=56fa3466eb264d59762298b32ca838beb6f4e27c0ee2deffb7c8a05c3a399f52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774JM6CF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvHjvTJUgzyI%2Fld%2FdgY3dQ%2FFJum0fmSWpHy8bWdF51aAiAxIk6r7hF7q%2FXcDrhh9ILjmHND9Qa0A4%2B%2BNZAtYU0QDSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMI1dlguMAjwgWPn6vKtwDH1FxbcKMF0DUQF9RyS32US%2B3v1yfQwcFIjcifSOmn8kae37VIrkNLP5q0av0OfgSWtDgtp%2BKDKC6dJSCzJZmoGW95v1kXSVzc6XYHgyCb1J8MurBJYsAMePlhDXq%2B%2Bv41zSR%2FORoxou4goRrqG%2BtFH4E%2B4qcpoPSIwhfyhG7BjHHU1JW6he2qV0KJ34nq34wz0hljQ6IGAF4SZI7CD69uyAkwykrKrGTgHX9OYBYfjdAme0lZiHTD6yclHcHL4Tgqulsw3fQiwjxgyqRPnnpgvqa%2BgDmOLCxq%2BjnBWjcVsPbmYzJqRMrC8ShutFfvyvmflb%2FtJV91Y48gqvv7JW1eGZppgf6bV7pFMwu3%2BBatrRltGLlM1QAF46l0b6Jeb2N3czrOWQMd88TGjyRodmOjoLDfPTSbdklsbCZ5vhju7677ejRa9TG3NBsRDYZHfYMuCXYZG6%2ByPHPPJYmciioTCGUZqo%2FIyXRLYVIzgEUX7A4wqOBWWc9fkOBOQZbXCrMk50XfA2nMAJty9tvE8Z6RCQ44Bnz6n1sNYn3zyU5NvkVHL81o120kJM86Y%2FYVBjZIDC96f%2Bh3I6c2VXFx3jmgokNoKMdDnXdkZEs3EDbkUzWNc9oJKTKA2rjDsYw5u7VvgY6pgHaajY7PC6x%2BSFqhC%2Bm%2Bhu62Z%2FVzRAvt9T2nDOx9WUNNyo9RYgSgeie%2B0D4Vd3AJFh%2FQlNBAhBLn1PS5d83kLfOlQLrYLAyc82%2BSl634qYA%2BZELwMTk8diBpMOwZvaMxParlkgJWmXAHypWZoWL8TAbcXndUXOCb5JE9iNBl7OxRLH4mpNhokU0%2BxQTbhLKUOGdRIdSDtl4XQZHO%2FN3ASs1zFTvCSnO&X-Amz-Signature=c80740082e2ee5b5d88aeea91a0c6d521e81724a8224b2c4c97d650111518142&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774JM6CF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvHjvTJUgzyI%2Fld%2FdgY3dQ%2FFJum0fmSWpHy8bWdF51aAiAxIk6r7hF7q%2FXcDrhh9ILjmHND9Qa0A4%2B%2BNZAtYU0QDSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMI1dlguMAjwgWPn6vKtwDH1FxbcKMF0DUQF9RyS32US%2B3v1yfQwcFIjcifSOmn8kae37VIrkNLP5q0av0OfgSWtDgtp%2BKDKC6dJSCzJZmoGW95v1kXSVzc6XYHgyCb1J8MurBJYsAMePlhDXq%2B%2Bv41zSR%2FORoxou4goRrqG%2BtFH4E%2B4qcpoPSIwhfyhG7BjHHU1JW6he2qV0KJ34nq34wz0hljQ6IGAF4SZI7CD69uyAkwykrKrGTgHX9OYBYfjdAme0lZiHTD6yclHcHL4Tgqulsw3fQiwjxgyqRPnnpgvqa%2BgDmOLCxq%2BjnBWjcVsPbmYzJqRMrC8ShutFfvyvmflb%2FtJV91Y48gqvv7JW1eGZppgf6bV7pFMwu3%2BBatrRltGLlM1QAF46l0b6Jeb2N3czrOWQMd88TGjyRodmOjoLDfPTSbdklsbCZ5vhju7677ejRa9TG3NBsRDYZHfYMuCXYZG6%2ByPHPPJYmciioTCGUZqo%2FIyXRLYVIzgEUX7A4wqOBWWc9fkOBOQZbXCrMk50XfA2nMAJty9tvE8Z6RCQ44Bnz6n1sNYn3zyU5NvkVHL81o120kJM86Y%2FYVBjZIDC96f%2Bh3I6c2VXFx3jmgokNoKMdDnXdkZEs3EDbkUzWNc9oJKTKA2rjDsYw5u7VvgY6pgHaajY7PC6x%2BSFqhC%2Bm%2Bhu62Z%2FVzRAvt9T2nDOx9WUNNyo9RYgSgeie%2B0D4Vd3AJFh%2FQlNBAhBLn1PS5d83kLfOlQLrYLAyc82%2BSl634qYA%2BZELwMTk8diBpMOwZvaMxParlkgJWmXAHypWZoWL8TAbcXndUXOCb5JE9iNBl7OxRLH4mpNhokU0%2BxQTbhLKUOGdRIdSDtl4XQZHO%2FN3ASs1zFTvCSnO&X-Amz-Signature=7e509fd106e78d9d8cde3bc6f30d660e2b8b1e594058143947b908e1af36be98&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466774JM6CF%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHvHjvTJUgzyI%2Fld%2FdgY3dQ%2FFJum0fmSWpHy8bWdF51aAiAxIk6r7hF7q%2FXcDrhh9ILjmHND9Qa0A4%2B%2BNZAtYU0QDSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMI1dlguMAjwgWPn6vKtwDH1FxbcKMF0DUQF9RyS32US%2B3v1yfQwcFIjcifSOmn8kae37VIrkNLP5q0av0OfgSWtDgtp%2BKDKC6dJSCzJZmoGW95v1kXSVzc6XYHgyCb1J8MurBJYsAMePlhDXq%2B%2Bv41zSR%2FORoxou4goRrqG%2BtFH4E%2B4qcpoPSIwhfyhG7BjHHU1JW6he2qV0KJ34nq34wz0hljQ6IGAF4SZI7CD69uyAkwykrKrGTgHX9OYBYfjdAme0lZiHTD6yclHcHL4Tgqulsw3fQiwjxgyqRPnnpgvqa%2BgDmOLCxq%2BjnBWjcVsPbmYzJqRMrC8ShutFfvyvmflb%2FtJV91Y48gqvv7JW1eGZppgf6bV7pFMwu3%2BBatrRltGLlM1QAF46l0b6Jeb2N3czrOWQMd88TGjyRodmOjoLDfPTSbdklsbCZ5vhju7677ejRa9TG3NBsRDYZHfYMuCXYZG6%2ByPHPPJYmciioTCGUZqo%2FIyXRLYVIzgEUX7A4wqOBWWc9fkOBOQZbXCrMk50XfA2nMAJty9tvE8Z6RCQ44Bnz6n1sNYn3zyU5NvkVHL81o120kJM86Y%2FYVBjZIDC96f%2Bh3I6c2VXFx3jmgokNoKMdDnXdkZEs3EDbkUzWNc9oJKTKA2rjDsYw5u7VvgY6pgHaajY7PC6x%2BSFqhC%2Bm%2Bhu62Z%2FVzRAvt9T2nDOx9WUNNyo9RYgSgeie%2B0D4Vd3AJFh%2FQlNBAhBLn1PS5d83kLfOlQLrYLAyc82%2BSl634qYA%2BZELwMTk8diBpMOwZvaMxParlkgJWmXAHypWZoWL8TAbcXndUXOCb5JE9iNBl7OxRLH4mpNhokU0%2BxQTbhLKUOGdRIdSDtl4XQZHO%2FN3ASs1zFTvCSnO&X-Amz-Signature=d424a732b8db34a3ea99ac6b5ef0e908193f05ae6c0f3c4e6a6bc98637e3fa26&X-Amz-SignedHeaders=host&x-id=GetObject)
