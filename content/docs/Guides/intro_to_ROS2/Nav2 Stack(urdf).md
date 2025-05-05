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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQZIUCY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUu4zaj%2BEJU2Pr153DRcDli748x4uUEKFdSUxbqKxvgAiB4tZDyxgYgfeVABAdBpta%2BsZXJrcN9FLAPtfdl2fzk3yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2B1CVR4jHMNe5Xm1xKtwDpCdUb10ZKvn%2FLS8mtx7eUs9YmJiUj4A2A8JQMbzuLvrnanZZFxlj1HWI1WWoJ5D7EG%2FPi4PETCqdpyg7wX%2BPbS2iP0tY3wFNadblZTDq94mFpBOejUF4EFoxl%2FxFY6tyQhTEK%2BPNRHDaRvwRJaNPPMJu6RFAAUR2Tg5DCKSWM3kQxoGGE5hJwzjCG4omOAXc%2BwY1fo1QIhDVozxbkYRAm2Zc77IAMrVgpIFZlAf24l6d5kq9qKN5Efe5%2Bcm%2FQ1mGf3D%2BBQNFkp9ah0o9YTJtFC0SWDcc8oi5EMI7HCXs5RqNT6D9iWYy27Ud7JE0z16CKy2EPdnJbUOhz3LqEu163cyulUXnO6%2FwTPX62i3yFq7bUb3n%2BIVMNcJ04MJxYwJ2QawHPff58%2BTaX9MKEqEDCrJnj%2FW3ruQgyyQTstFRfgjaLY0OxaEdFHJbl5vV5dDWXMYVT2%2FSAxY94gVatuGfNiEIn9mNtZjDlo81CrFVVpU9A4NrfbyJch9eIB%2B7g1QMRs63R3oh%2B2Mov%2FdjI6iw0Ev%2FyFjDZRdlEd2hIQwbZJQr1tHVDfgFXy1y99EgVYN4llecq2WEEtTQC67%2Bzjs4NgBzKu5xn3yl6%2BGUkIxpxMDapE8wP8N1rRQe8TwwrJbkwAY6pgF45CDgq%2Bbg25U%2FY61Wv0672tWYlUwl6yqfL64tH7r5S%2FG4eKVWE3V83y6EU2hBa%2B2UezTNCme28zYxHTFbFKIFt3l4h%2BSgOFay%2BRzNZXKN4rztrrBJu%2Bd5c6bIy3QuaRJRScbCIB61xHT6ybiDw2RmBRwAO1%2BAiSsYpytMIS733uE0gQ06y%2Bjy8FyUA8bkXN9IPHSWYvVkGecBC7mw8wJBQz31vnnk&X-Amz-Signature=f7a392de1007d80c4a77b990fd26ccf478197fccdf50512790ac659668e17952&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQZIUCY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUu4zaj%2BEJU2Pr153DRcDli748x4uUEKFdSUxbqKxvgAiB4tZDyxgYgfeVABAdBpta%2BsZXJrcN9FLAPtfdl2fzk3yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2B1CVR4jHMNe5Xm1xKtwDpCdUb10ZKvn%2FLS8mtx7eUs9YmJiUj4A2A8JQMbzuLvrnanZZFxlj1HWI1WWoJ5D7EG%2FPi4PETCqdpyg7wX%2BPbS2iP0tY3wFNadblZTDq94mFpBOejUF4EFoxl%2FxFY6tyQhTEK%2BPNRHDaRvwRJaNPPMJu6RFAAUR2Tg5DCKSWM3kQxoGGE5hJwzjCG4omOAXc%2BwY1fo1QIhDVozxbkYRAm2Zc77IAMrVgpIFZlAf24l6d5kq9qKN5Efe5%2Bcm%2FQ1mGf3D%2BBQNFkp9ah0o9YTJtFC0SWDcc8oi5EMI7HCXs5RqNT6D9iWYy27Ud7JE0z16CKy2EPdnJbUOhz3LqEu163cyulUXnO6%2FwTPX62i3yFq7bUb3n%2BIVMNcJ04MJxYwJ2QawHPff58%2BTaX9MKEqEDCrJnj%2FW3ruQgyyQTstFRfgjaLY0OxaEdFHJbl5vV5dDWXMYVT2%2FSAxY94gVatuGfNiEIn9mNtZjDlo81CrFVVpU9A4NrfbyJch9eIB%2B7g1QMRs63R3oh%2B2Mov%2FdjI6iw0Ev%2FyFjDZRdlEd2hIQwbZJQr1tHVDfgFXy1y99EgVYN4llecq2WEEtTQC67%2Bzjs4NgBzKu5xn3yl6%2BGUkIxpxMDapE8wP8N1rRQe8TwwrJbkwAY6pgF45CDgq%2Bbg25U%2FY61Wv0672tWYlUwl6yqfL64tH7r5S%2FG4eKVWE3V83y6EU2hBa%2B2UezTNCme28zYxHTFbFKIFt3l4h%2BSgOFay%2BRzNZXKN4rztrrBJu%2Bd5c6bIy3QuaRJRScbCIB61xHT6ybiDw2RmBRwAO1%2BAiSsYpytMIS733uE0gQ06y%2Bjy8FyUA8bkXN9IPHSWYvVkGecBC7mw8wJBQz31vnnk&X-Amz-Signature=4a9045eb4d492fa4485255fb8e0b5cad5382ee6e616c091a4f0b5917262c321d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQZIUCY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUu4zaj%2BEJU2Pr153DRcDli748x4uUEKFdSUxbqKxvgAiB4tZDyxgYgfeVABAdBpta%2BsZXJrcN9FLAPtfdl2fzk3yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2B1CVR4jHMNe5Xm1xKtwDpCdUb10ZKvn%2FLS8mtx7eUs9YmJiUj4A2A8JQMbzuLvrnanZZFxlj1HWI1WWoJ5D7EG%2FPi4PETCqdpyg7wX%2BPbS2iP0tY3wFNadblZTDq94mFpBOejUF4EFoxl%2FxFY6tyQhTEK%2BPNRHDaRvwRJaNPPMJu6RFAAUR2Tg5DCKSWM3kQxoGGE5hJwzjCG4omOAXc%2BwY1fo1QIhDVozxbkYRAm2Zc77IAMrVgpIFZlAf24l6d5kq9qKN5Efe5%2Bcm%2FQ1mGf3D%2BBQNFkp9ah0o9YTJtFC0SWDcc8oi5EMI7HCXs5RqNT6D9iWYy27Ud7JE0z16CKy2EPdnJbUOhz3LqEu163cyulUXnO6%2FwTPX62i3yFq7bUb3n%2BIVMNcJ04MJxYwJ2QawHPff58%2BTaX9MKEqEDCrJnj%2FW3ruQgyyQTstFRfgjaLY0OxaEdFHJbl5vV5dDWXMYVT2%2FSAxY94gVatuGfNiEIn9mNtZjDlo81CrFVVpU9A4NrfbyJch9eIB%2B7g1QMRs63R3oh%2B2Mov%2FdjI6iw0Ev%2FyFjDZRdlEd2hIQwbZJQr1tHVDfgFXy1y99EgVYN4llecq2WEEtTQC67%2Bzjs4NgBzKu5xn3yl6%2BGUkIxpxMDapE8wP8N1rRQe8TwwrJbkwAY6pgF45CDgq%2Bbg25U%2FY61Wv0672tWYlUwl6yqfL64tH7r5S%2FG4eKVWE3V83y6EU2hBa%2B2UezTNCme28zYxHTFbFKIFt3l4h%2BSgOFay%2BRzNZXKN4rztrrBJu%2Bd5c6bIy3QuaRJRScbCIB61xHT6ybiDw2RmBRwAO1%2BAiSsYpytMIS733uE0gQ06y%2Bjy8FyUA8bkXN9IPHSWYvVkGecBC7mw8wJBQz31vnnk&X-Amz-Signature=e15cb0ef8388862c4d0952aaa42d1573fecf486aae10052439098dce69096415&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQZIUCY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUu4zaj%2BEJU2Pr153DRcDli748x4uUEKFdSUxbqKxvgAiB4tZDyxgYgfeVABAdBpta%2BsZXJrcN9FLAPtfdl2fzk3yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2B1CVR4jHMNe5Xm1xKtwDpCdUb10ZKvn%2FLS8mtx7eUs9YmJiUj4A2A8JQMbzuLvrnanZZFxlj1HWI1WWoJ5D7EG%2FPi4PETCqdpyg7wX%2BPbS2iP0tY3wFNadblZTDq94mFpBOejUF4EFoxl%2FxFY6tyQhTEK%2BPNRHDaRvwRJaNPPMJu6RFAAUR2Tg5DCKSWM3kQxoGGE5hJwzjCG4omOAXc%2BwY1fo1QIhDVozxbkYRAm2Zc77IAMrVgpIFZlAf24l6d5kq9qKN5Efe5%2Bcm%2FQ1mGf3D%2BBQNFkp9ah0o9YTJtFC0SWDcc8oi5EMI7HCXs5RqNT6D9iWYy27Ud7JE0z16CKy2EPdnJbUOhz3LqEu163cyulUXnO6%2FwTPX62i3yFq7bUb3n%2BIVMNcJ04MJxYwJ2QawHPff58%2BTaX9MKEqEDCrJnj%2FW3ruQgyyQTstFRfgjaLY0OxaEdFHJbl5vV5dDWXMYVT2%2FSAxY94gVatuGfNiEIn9mNtZjDlo81CrFVVpU9A4NrfbyJch9eIB%2B7g1QMRs63R3oh%2B2Mov%2FdjI6iw0Ev%2FyFjDZRdlEd2hIQwbZJQr1tHVDfgFXy1y99EgVYN4llecq2WEEtTQC67%2Bzjs4NgBzKu5xn3yl6%2BGUkIxpxMDapE8wP8N1rRQe8TwwrJbkwAY6pgF45CDgq%2Bbg25U%2FY61Wv0672tWYlUwl6yqfL64tH7r5S%2FG4eKVWE3V83y6EU2hBa%2B2UezTNCme28zYxHTFbFKIFt3l4h%2BSgOFay%2BRzNZXKN4rztrrBJu%2Bd5c6bIy3QuaRJRScbCIB61xHT6ybiDw2RmBRwAO1%2BAiSsYpytMIS733uE0gQ06y%2Bjy8FyUA8bkXN9IPHSWYvVkGecBC7mw8wJBQz31vnnk&X-Amz-Signature=bbf573d6b1e14b0da5df496e627295ebe24edc3b401171b116ac316ccc535c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQZIUCY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUu4zaj%2BEJU2Pr153DRcDli748x4uUEKFdSUxbqKxvgAiB4tZDyxgYgfeVABAdBpta%2BsZXJrcN9FLAPtfdl2fzk3yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2B1CVR4jHMNe5Xm1xKtwDpCdUb10ZKvn%2FLS8mtx7eUs9YmJiUj4A2A8JQMbzuLvrnanZZFxlj1HWI1WWoJ5D7EG%2FPi4PETCqdpyg7wX%2BPbS2iP0tY3wFNadblZTDq94mFpBOejUF4EFoxl%2FxFY6tyQhTEK%2BPNRHDaRvwRJaNPPMJu6RFAAUR2Tg5DCKSWM3kQxoGGE5hJwzjCG4omOAXc%2BwY1fo1QIhDVozxbkYRAm2Zc77IAMrVgpIFZlAf24l6d5kq9qKN5Efe5%2Bcm%2FQ1mGf3D%2BBQNFkp9ah0o9YTJtFC0SWDcc8oi5EMI7HCXs5RqNT6D9iWYy27Ud7JE0z16CKy2EPdnJbUOhz3LqEu163cyulUXnO6%2FwTPX62i3yFq7bUb3n%2BIVMNcJ04MJxYwJ2QawHPff58%2BTaX9MKEqEDCrJnj%2FW3ruQgyyQTstFRfgjaLY0OxaEdFHJbl5vV5dDWXMYVT2%2FSAxY94gVatuGfNiEIn9mNtZjDlo81CrFVVpU9A4NrfbyJch9eIB%2B7g1QMRs63R3oh%2B2Mov%2FdjI6iw0Ev%2FyFjDZRdlEd2hIQwbZJQr1tHVDfgFXy1y99EgVYN4llecq2WEEtTQC67%2Bzjs4NgBzKu5xn3yl6%2BGUkIxpxMDapE8wP8N1rRQe8TwwrJbkwAY6pgF45CDgq%2Bbg25U%2FY61Wv0672tWYlUwl6yqfL64tH7r5S%2FG4eKVWE3V83y6EU2hBa%2B2UezTNCme28zYxHTFbFKIFt3l4h%2BSgOFay%2BRzNZXKN4rztrrBJu%2Bd5c6bIy3QuaRJRScbCIB61xHT6ybiDw2RmBRwAO1%2BAiSsYpytMIS733uE0gQ06y%2Bjy8FyUA8bkXN9IPHSWYvVkGecBC7mw8wJBQz31vnnk&X-Amz-Signature=acd25eba529a756f88240b1a25b6f17cc357b7f52956d78dbcd4721fbb9292a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQZIUCY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUu4zaj%2BEJU2Pr153DRcDli748x4uUEKFdSUxbqKxvgAiB4tZDyxgYgfeVABAdBpta%2BsZXJrcN9FLAPtfdl2fzk3yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2B1CVR4jHMNe5Xm1xKtwDpCdUb10ZKvn%2FLS8mtx7eUs9YmJiUj4A2A8JQMbzuLvrnanZZFxlj1HWI1WWoJ5D7EG%2FPi4PETCqdpyg7wX%2BPbS2iP0tY3wFNadblZTDq94mFpBOejUF4EFoxl%2FxFY6tyQhTEK%2BPNRHDaRvwRJaNPPMJu6RFAAUR2Tg5DCKSWM3kQxoGGE5hJwzjCG4omOAXc%2BwY1fo1QIhDVozxbkYRAm2Zc77IAMrVgpIFZlAf24l6d5kq9qKN5Efe5%2Bcm%2FQ1mGf3D%2BBQNFkp9ah0o9YTJtFC0SWDcc8oi5EMI7HCXs5RqNT6D9iWYy27Ud7JE0z16CKy2EPdnJbUOhz3LqEu163cyulUXnO6%2FwTPX62i3yFq7bUb3n%2BIVMNcJ04MJxYwJ2QawHPff58%2BTaX9MKEqEDCrJnj%2FW3ruQgyyQTstFRfgjaLY0OxaEdFHJbl5vV5dDWXMYVT2%2FSAxY94gVatuGfNiEIn9mNtZjDlo81CrFVVpU9A4NrfbyJch9eIB%2B7g1QMRs63R3oh%2B2Mov%2FdjI6iw0Ev%2FyFjDZRdlEd2hIQwbZJQr1tHVDfgFXy1y99EgVYN4llecq2WEEtTQC67%2Bzjs4NgBzKu5xn3yl6%2BGUkIxpxMDapE8wP8N1rRQe8TwwrJbkwAY6pgF45CDgq%2Bbg25U%2FY61Wv0672tWYlUwl6yqfL64tH7r5S%2FG4eKVWE3V83y6EU2hBa%2B2UezTNCme28zYxHTFbFKIFt3l4h%2BSgOFay%2BRzNZXKN4rztrrBJu%2Bd5c6bIy3QuaRJRScbCIB61xHT6ybiDw2RmBRwAO1%2BAiSsYpytMIS733uE0gQ06y%2Bjy8FyUA8bkXN9IPHSWYvVkGecBC7mw8wJBQz31vnnk&X-Amz-Signature=55488371862a9081f63463f50ce254a1b67258f63cb570d232d3668010691d81&X-Amz-SignedHeaders=host&x-id=GetObject)
