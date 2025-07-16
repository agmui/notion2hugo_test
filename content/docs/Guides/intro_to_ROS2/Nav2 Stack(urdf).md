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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2AZKEJ6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDWXRD5AFsI4pHEsGMoMHKZIelhHpjWQJVe0wScWJjSUQIhAMgBRfoRoAYo5mlwRAlD3HtMAzujlwHQmEeE%2FBOTuEggKv8DCFkQABoMNjM3NDIzMTgzODA1IgzibSru6%2BlIkVdwfV4q3APFFbs%2FI4b9772RP0jn354cLrrg4qnDWZdQKmlC8cPex9kOOl6A3kKmM2SKx%2BHlxMiJRn6YTTO%2FjrwklOhk3HgBUdmwvs5nDCS7ngUrv8hn0RhC%2FBuqvLKP6wJfwNSiAorFNVUuoWQm%2FtMa2i0J6IfwWVbsHe3PL1BFQQ1B9ojNgIcuyX%2F6PjzitHrzCi6Hl9Mzu0%2FyjYkQibih6ejkWWORTjrIPMK2jIxjv4cW8byNIcAonLUc49gk6W8fk7ujQoBg3GJYdy1pOnNGdTEYpWLNNPA8jyccyQjx30uL4a3%2B1sTBqTHogGkSsw6NZ5RISxedBxX0v3k685GePF%2Fd3PHJFUkNr5f27yl11V23F74PgQ3xZaIcV94qHMa%2FKDpsUN41teL3y4GOl0d0oDEAGZ%2Br%2BLKJB65Swv05Ry8zvxk%2BzeO3h%2BEkdCuEMT3GSwqiSNO8JQmb9azem3myOT8N4cgvdcbeLpAs2BD9uARP34HbHO4PfSrkhCSNChB8bRuPkvGIregBUD71%2BACz0M94KeslMuBAV%2FWdlUB8untaGZR%2B7QK%2FIrVymTPckc8KJSUQg6%2F3gtNTPnbcn1JAWllreu3QwYP1o5ltw7np6I4nIoG8KXrc01SVcDOoYUQ%2FhzCRvt3DBjqkAc5VqBk9PzHvWDS0Q3rXKG9BwsLFytKrY15PoGba8Xyd%2Fyj1QpATeMaxzLHxUaq8yfytXdFZh7hoCf%2F5jTYVvk07MfpWmkCG6bHUGMLKJbl6omLOS9BnbvUx8OcXfmLrbiFKteiH5hn5cl8tKxcHnMYlz5j9Iw0bz%2BIylLUu5N8xO1vt7gEqtcFJhWavOMxp7fWc33yFhZ%2FzV%2FI2Ut5ubHsiNyyf&X-Amz-Signature=90bd40dc175140ba37e7261847c034f5f15d670bd508a3d34842ace559dd5ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2AZKEJ6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDWXRD5AFsI4pHEsGMoMHKZIelhHpjWQJVe0wScWJjSUQIhAMgBRfoRoAYo5mlwRAlD3HtMAzujlwHQmEeE%2FBOTuEggKv8DCFkQABoMNjM3NDIzMTgzODA1IgzibSru6%2BlIkVdwfV4q3APFFbs%2FI4b9772RP0jn354cLrrg4qnDWZdQKmlC8cPex9kOOl6A3kKmM2SKx%2BHlxMiJRn6YTTO%2FjrwklOhk3HgBUdmwvs5nDCS7ngUrv8hn0RhC%2FBuqvLKP6wJfwNSiAorFNVUuoWQm%2FtMa2i0J6IfwWVbsHe3PL1BFQQ1B9ojNgIcuyX%2F6PjzitHrzCi6Hl9Mzu0%2FyjYkQibih6ejkWWORTjrIPMK2jIxjv4cW8byNIcAonLUc49gk6W8fk7ujQoBg3GJYdy1pOnNGdTEYpWLNNPA8jyccyQjx30uL4a3%2B1sTBqTHogGkSsw6NZ5RISxedBxX0v3k685GePF%2Fd3PHJFUkNr5f27yl11V23F74PgQ3xZaIcV94qHMa%2FKDpsUN41teL3y4GOl0d0oDEAGZ%2Br%2BLKJB65Swv05Ry8zvxk%2BzeO3h%2BEkdCuEMT3GSwqiSNO8JQmb9azem3myOT8N4cgvdcbeLpAs2BD9uARP34HbHO4PfSrkhCSNChB8bRuPkvGIregBUD71%2BACz0M94KeslMuBAV%2FWdlUB8untaGZR%2B7QK%2FIrVymTPckc8KJSUQg6%2F3gtNTPnbcn1JAWllreu3QwYP1o5ltw7np6I4nIoG8KXrc01SVcDOoYUQ%2FhzCRvt3DBjqkAc5VqBk9PzHvWDS0Q3rXKG9BwsLFytKrY15PoGba8Xyd%2Fyj1QpATeMaxzLHxUaq8yfytXdFZh7hoCf%2F5jTYVvk07MfpWmkCG6bHUGMLKJbl6omLOS9BnbvUx8OcXfmLrbiFKteiH5hn5cl8tKxcHnMYlz5j9Iw0bz%2BIylLUu5N8xO1vt7gEqtcFJhWavOMxp7fWc33yFhZ%2FzV%2FI2Ut5ubHsiNyyf&X-Amz-Signature=927f357884c63f1798ed92f4844b25036b1ef0dda658e735df6a8a56d4d5a86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2AZKEJ6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDWXRD5AFsI4pHEsGMoMHKZIelhHpjWQJVe0wScWJjSUQIhAMgBRfoRoAYo5mlwRAlD3HtMAzujlwHQmEeE%2FBOTuEggKv8DCFkQABoMNjM3NDIzMTgzODA1IgzibSru6%2BlIkVdwfV4q3APFFbs%2FI4b9772RP0jn354cLrrg4qnDWZdQKmlC8cPex9kOOl6A3kKmM2SKx%2BHlxMiJRn6YTTO%2FjrwklOhk3HgBUdmwvs5nDCS7ngUrv8hn0RhC%2FBuqvLKP6wJfwNSiAorFNVUuoWQm%2FtMa2i0J6IfwWVbsHe3PL1BFQQ1B9ojNgIcuyX%2F6PjzitHrzCi6Hl9Mzu0%2FyjYkQibih6ejkWWORTjrIPMK2jIxjv4cW8byNIcAonLUc49gk6W8fk7ujQoBg3GJYdy1pOnNGdTEYpWLNNPA8jyccyQjx30uL4a3%2B1sTBqTHogGkSsw6NZ5RISxedBxX0v3k685GePF%2Fd3PHJFUkNr5f27yl11V23F74PgQ3xZaIcV94qHMa%2FKDpsUN41teL3y4GOl0d0oDEAGZ%2Br%2BLKJB65Swv05Ry8zvxk%2BzeO3h%2BEkdCuEMT3GSwqiSNO8JQmb9azem3myOT8N4cgvdcbeLpAs2BD9uARP34HbHO4PfSrkhCSNChB8bRuPkvGIregBUD71%2BACz0M94KeslMuBAV%2FWdlUB8untaGZR%2B7QK%2FIrVymTPckc8KJSUQg6%2F3gtNTPnbcn1JAWllreu3QwYP1o5ltw7np6I4nIoG8KXrc01SVcDOoYUQ%2FhzCRvt3DBjqkAc5VqBk9PzHvWDS0Q3rXKG9BwsLFytKrY15PoGba8Xyd%2Fyj1QpATeMaxzLHxUaq8yfytXdFZh7hoCf%2F5jTYVvk07MfpWmkCG6bHUGMLKJbl6omLOS9BnbvUx8OcXfmLrbiFKteiH5hn5cl8tKxcHnMYlz5j9Iw0bz%2BIylLUu5N8xO1vt7gEqtcFJhWavOMxp7fWc33yFhZ%2FzV%2FI2Ut5ubHsiNyyf&X-Amz-Signature=ff3b417946b0bc885a34581b88c60acf9a11cd5ac96a68059f46425975154ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2AZKEJ6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDWXRD5AFsI4pHEsGMoMHKZIelhHpjWQJVe0wScWJjSUQIhAMgBRfoRoAYo5mlwRAlD3HtMAzujlwHQmEeE%2FBOTuEggKv8DCFkQABoMNjM3NDIzMTgzODA1IgzibSru6%2BlIkVdwfV4q3APFFbs%2FI4b9772RP0jn354cLrrg4qnDWZdQKmlC8cPex9kOOl6A3kKmM2SKx%2BHlxMiJRn6YTTO%2FjrwklOhk3HgBUdmwvs5nDCS7ngUrv8hn0RhC%2FBuqvLKP6wJfwNSiAorFNVUuoWQm%2FtMa2i0J6IfwWVbsHe3PL1BFQQ1B9ojNgIcuyX%2F6PjzitHrzCi6Hl9Mzu0%2FyjYkQibih6ejkWWORTjrIPMK2jIxjv4cW8byNIcAonLUc49gk6W8fk7ujQoBg3GJYdy1pOnNGdTEYpWLNNPA8jyccyQjx30uL4a3%2B1sTBqTHogGkSsw6NZ5RISxedBxX0v3k685GePF%2Fd3PHJFUkNr5f27yl11V23F74PgQ3xZaIcV94qHMa%2FKDpsUN41teL3y4GOl0d0oDEAGZ%2Br%2BLKJB65Swv05Ry8zvxk%2BzeO3h%2BEkdCuEMT3GSwqiSNO8JQmb9azem3myOT8N4cgvdcbeLpAs2BD9uARP34HbHO4PfSrkhCSNChB8bRuPkvGIregBUD71%2BACz0M94KeslMuBAV%2FWdlUB8untaGZR%2B7QK%2FIrVymTPckc8KJSUQg6%2F3gtNTPnbcn1JAWllreu3QwYP1o5ltw7np6I4nIoG8KXrc01SVcDOoYUQ%2FhzCRvt3DBjqkAc5VqBk9PzHvWDS0Q3rXKG9BwsLFytKrY15PoGba8Xyd%2Fyj1QpATeMaxzLHxUaq8yfytXdFZh7hoCf%2F5jTYVvk07MfpWmkCG6bHUGMLKJbl6omLOS9BnbvUx8OcXfmLrbiFKteiH5hn5cl8tKxcHnMYlz5j9Iw0bz%2BIylLUu5N8xO1vt7gEqtcFJhWavOMxp7fWc33yFhZ%2FzV%2FI2Ut5ubHsiNyyf&X-Amz-Signature=0c1ba830718936fc5b2bb421cfa8081ccbc6a255501c020d2f0dea3aa1dbaee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2AZKEJ6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDWXRD5AFsI4pHEsGMoMHKZIelhHpjWQJVe0wScWJjSUQIhAMgBRfoRoAYo5mlwRAlD3HtMAzujlwHQmEeE%2FBOTuEggKv8DCFkQABoMNjM3NDIzMTgzODA1IgzibSru6%2BlIkVdwfV4q3APFFbs%2FI4b9772RP0jn354cLrrg4qnDWZdQKmlC8cPex9kOOl6A3kKmM2SKx%2BHlxMiJRn6YTTO%2FjrwklOhk3HgBUdmwvs5nDCS7ngUrv8hn0RhC%2FBuqvLKP6wJfwNSiAorFNVUuoWQm%2FtMa2i0J6IfwWVbsHe3PL1BFQQ1B9ojNgIcuyX%2F6PjzitHrzCi6Hl9Mzu0%2FyjYkQibih6ejkWWORTjrIPMK2jIxjv4cW8byNIcAonLUc49gk6W8fk7ujQoBg3GJYdy1pOnNGdTEYpWLNNPA8jyccyQjx30uL4a3%2B1sTBqTHogGkSsw6NZ5RISxedBxX0v3k685GePF%2Fd3PHJFUkNr5f27yl11V23F74PgQ3xZaIcV94qHMa%2FKDpsUN41teL3y4GOl0d0oDEAGZ%2Br%2BLKJB65Swv05Ry8zvxk%2BzeO3h%2BEkdCuEMT3GSwqiSNO8JQmb9azem3myOT8N4cgvdcbeLpAs2BD9uARP34HbHO4PfSrkhCSNChB8bRuPkvGIregBUD71%2BACz0M94KeslMuBAV%2FWdlUB8untaGZR%2B7QK%2FIrVymTPckc8KJSUQg6%2F3gtNTPnbcn1JAWllreu3QwYP1o5ltw7np6I4nIoG8KXrc01SVcDOoYUQ%2FhzCRvt3DBjqkAc5VqBk9PzHvWDS0Q3rXKG9BwsLFytKrY15PoGba8Xyd%2Fyj1QpATeMaxzLHxUaq8yfytXdFZh7hoCf%2F5jTYVvk07MfpWmkCG6bHUGMLKJbl6omLOS9BnbvUx8OcXfmLrbiFKteiH5hn5cl8tKxcHnMYlz5j9Iw0bz%2BIylLUu5N8xO1vt7gEqtcFJhWavOMxp7fWc33yFhZ%2FzV%2FI2Ut5ubHsiNyyf&X-Amz-Signature=5a2056b4359f53f33928d1d8fe9db865f680d8b37f053298fe0295507244f527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2AZKEJ6%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T091444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDWXRD5AFsI4pHEsGMoMHKZIelhHpjWQJVe0wScWJjSUQIhAMgBRfoRoAYo5mlwRAlD3HtMAzujlwHQmEeE%2FBOTuEggKv8DCFkQABoMNjM3NDIzMTgzODA1IgzibSru6%2BlIkVdwfV4q3APFFbs%2FI4b9772RP0jn354cLrrg4qnDWZdQKmlC8cPex9kOOl6A3kKmM2SKx%2BHlxMiJRn6YTTO%2FjrwklOhk3HgBUdmwvs5nDCS7ngUrv8hn0RhC%2FBuqvLKP6wJfwNSiAorFNVUuoWQm%2FtMa2i0J6IfwWVbsHe3PL1BFQQ1B9ojNgIcuyX%2F6PjzitHrzCi6Hl9Mzu0%2FyjYkQibih6ejkWWORTjrIPMK2jIxjv4cW8byNIcAonLUc49gk6W8fk7ujQoBg3GJYdy1pOnNGdTEYpWLNNPA8jyccyQjx30uL4a3%2B1sTBqTHogGkSsw6NZ5RISxedBxX0v3k685GePF%2Fd3PHJFUkNr5f27yl11V23F74PgQ3xZaIcV94qHMa%2FKDpsUN41teL3y4GOl0d0oDEAGZ%2Br%2BLKJB65Swv05Ry8zvxk%2BzeO3h%2BEkdCuEMT3GSwqiSNO8JQmb9azem3myOT8N4cgvdcbeLpAs2BD9uARP34HbHO4PfSrkhCSNChB8bRuPkvGIregBUD71%2BACz0M94KeslMuBAV%2FWdlUB8untaGZR%2B7QK%2FIrVymTPckc8KJSUQg6%2F3gtNTPnbcn1JAWllreu3QwYP1o5ltw7np6I4nIoG8KXrc01SVcDOoYUQ%2FhzCRvt3DBjqkAc5VqBk9PzHvWDS0Q3rXKG9BwsLFytKrY15PoGba8Xyd%2Fyj1QpATeMaxzLHxUaq8yfytXdFZh7hoCf%2F5jTYVvk07MfpWmkCG6bHUGMLKJbl6omLOS9BnbvUx8OcXfmLrbiFKteiH5hn5cl8tKxcHnMYlz5j9Iw0bz%2BIylLUu5N8xO1vt7gEqtcFJhWavOMxp7fWc33yFhZ%2FzV%2FI2Ut5ubHsiNyyf&X-Amz-Signature=26caa760b813b55edbaef831f3acada8698332a92e658685a26e76a10264176b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
