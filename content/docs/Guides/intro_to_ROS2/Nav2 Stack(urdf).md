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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRUMMUK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFfuOT8Ihba%2BZPNtE66gwbRiYI7mbHOKCaTMqC39UUkHAiA56b8ki0hBjSjMyFD63X8Ji1pRpP%2BfRsjXwTf4DXeUbSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHvJ3%2F56A%2FzIYD4qpKtwDpYeF9WqZm%2BlarVhkcITJXpoN7KUhBYinWlWjqPIC0M0U40ZlKExDFODsWicPlQEltONWqygL%2FIDuKfJISqtS3lficESdrU%2B4EArStZKG5R2VGr3x24sKkMn5uNUCqO7vbia3bNPWcwohD9f701rofcmKHHI1SdAgSw30fg0ijEophCV0u%2FvzCX1aLLCUIQQdnFngYpAmAqTO%2B8f0bIFsppOFvKWdqJeS55UJEef1IKKX0t4ga2qDGYXACu3MGEgF7Pt28iLMyBI%2B7XZvP5%2BP6lw9JWvyQPQX%2FZdF%2BNiGsMXvBifMqDC8K1KlAAt810a3WJsMNgBImpRCFhF5xYOXGj228fEyxxGoZo7AUItcyVzDOzobUetIWfXuJFXMfem28xycnP8DWgadKyq8croSOZiIMzuGIVxYMgUDDlNWeVmkv53WrtQAWQdlhv68wUOXuBF8kYKZH4jRQUzAWPohWyWjZyFVLM%2BPoL9OA3R3JLgPEJVWwj40rcM%2FHol31o8NosQGIumGN2bFFoY97DMUtf4gcIvMXOV38xsIjsYVxuEuk5qh5yFWdjHhzjubBWLRii7WnvnntMrAuZNuXQVIAQBU08a7bKf%2BdaYRKXux0rfm3jaEJiGUc8Z3y4gwh6%2FLvQY6pgEDN2qd7WgtarvRGUy0d9rx2EfczqyEd3o9M8O%2BhGKcnxjXTffw1sm%2FfM3vjAb1HPdX5iWU7CbFcV8gz%2FxQZrbANmbVOocVByQfzx8Cj%2F65K0p9YbOu37JpL5vGeY1qy0iwnJxVCl6is6dR9foPWrt6oJZdSH4l2Mn4L0ZUtrAwQ%2BVVvsdRDa5Wo2RJNr3OQpVZYbTMDqcDoyP4EOBS2z4zH6vvIJBN&X-Amz-Signature=e4a16e020f84ace46ab45081af17e505d6fce31e2950232dccc3893b429c71d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRUMMUK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFfuOT8Ihba%2BZPNtE66gwbRiYI7mbHOKCaTMqC39UUkHAiA56b8ki0hBjSjMyFD63X8Ji1pRpP%2BfRsjXwTf4DXeUbSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHvJ3%2F56A%2FzIYD4qpKtwDpYeF9WqZm%2BlarVhkcITJXpoN7KUhBYinWlWjqPIC0M0U40ZlKExDFODsWicPlQEltONWqygL%2FIDuKfJISqtS3lficESdrU%2B4EArStZKG5R2VGr3x24sKkMn5uNUCqO7vbia3bNPWcwohD9f701rofcmKHHI1SdAgSw30fg0ijEophCV0u%2FvzCX1aLLCUIQQdnFngYpAmAqTO%2B8f0bIFsppOFvKWdqJeS55UJEef1IKKX0t4ga2qDGYXACu3MGEgF7Pt28iLMyBI%2B7XZvP5%2BP6lw9JWvyQPQX%2FZdF%2BNiGsMXvBifMqDC8K1KlAAt810a3WJsMNgBImpRCFhF5xYOXGj228fEyxxGoZo7AUItcyVzDOzobUetIWfXuJFXMfem28xycnP8DWgadKyq8croSOZiIMzuGIVxYMgUDDlNWeVmkv53WrtQAWQdlhv68wUOXuBF8kYKZH4jRQUzAWPohWyWjZyFVLM%2BPoL9OA3R3JLgPEJVWwj40rcM%2FHol31o8NosQGIumGN2bFFoY97DMUtf4gcIvMXOV38xsIjsYVxuEuk5qh5yFWdjHhzjubBWLRii7WnvnntMrAuZNuXQVIAQBU08a7bKf%2BdaYRKXux0rfm3jaEJiGUc8Z3y4gwh6%2FLvQY6pgEDN2qd7WgtarvRGUy0d9rx2EfczqyEd3o9M8O%2BhGKcnxjXTffw1sm%2FfM3vjAb1HPdX5iWU7CbFcV8gz%2FxQZrbANmbVOocVByQfzx8Cj%2F65K0p9YbOu37JpL5vGeY1qy0iwnJxVCl6is6dR9foPWrt6oJZdSH4l2Mn4L0ZUtrAwQ%2BVVvsdRDa5Wo2RJNr3OQpVZYbTMDqcDoyP4EOBS2z4zH6vvIJBN&X-Amz-Signature=f4f57f97b5109c871a7e14ef53dc8015c822666cd296b202604abe28f1ad5b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRUMMUK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFfuOT8Ihba%2BZPNtE66gwbRiYI7mbHOKCaTMqC39UUkHAiA56b8ki0hBjSjMyFD63X8Ji1pRpP%2BfRsjXwTf4DXeUbSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHvJ3%2F56A%2FzIYD4qpKtwDpYeF9WqZm%2BlarVhkcITJXpoN7KUhBYinWlWjqPIC0M0U40ZlKExDFODsWicPlQEltONWqygL%2FIDuKfJISqtS3lficESdrU%2B4EArStZKG5R2VGr3x24sKkMn5uNUCqO7vbia3bNPWcwohD9f701rofcmKHHI1SdAgSw30fg0ijEophCV0u%2FvzCX1aLLCUIQQdnFngYpAmAqTO%2B8f0bIFsppOFvKWdqJeS55UJEef1IKKX0t4ga2qDGYXACu3MGEgF7Pt28iLMyBI%2B7XZvP5%2BP6lw9JWvyQPQX%2FZdF%2BNiGsMXvBifMqDC8K1KlAAt810a3WJsMNgBImpRCFhF5xYOXGj228fEyxxGoZo7AUItcyVzDOzobUetIWfXuJFXMfem28xycnP8DWgadKyq8croSOZiIMzuGIVxYMgUDDlNWeVmkv53WrtQAWQdlhv68wUOXuBF8kYKZH4jRQUzAWPohWyWjZyFVLM%2BPoL9OA3R3JLgPEJVWwj40rcM%2FHol31o8NosQGIumGN2bFFoY97DMUtf4gcIvMXOV38xsIjsYVxuEuk5qh5yFWdjHhzjubBWLRii7WnvnntMrAuZNuXQVIAQBU08a7bKf%2BdaYRKXux0rfm3jaEJiGUc8Z3y4gwh6%2FLvQY6pgEDN2qd7WgtarvRGUy0d9rx2EfczqyEd3o9M8O%2BhGKcnxjXTffw1sm%2FfM3vjAb1HPdX5iWU7CbFcV8gz%2FxQZrbANmbVOocVByQfzx8Cj%2F65K0p9YbOu37JpL5vGeY1qy0iwnJxVCl6is6dR9foPWrt6oJZdSH4l2Mn4L0ZUtrAwQ%2BVVvsdRDa5Wo2RJNr3OQpVZYbTMDqcDoyP4EOBS2z4zH6vvIJBN&X-Amz-Signature=36da215b9e267a31646121bc9721fad4bbfd96d147e06d6df1cd462fb11677db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRUMMUK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFfuOT8Ihba%2BZPNtE66gwbRiYI7mbHOKCaTMqC39UUkHAiA56b8ki0hBjSjMyFD63X8Ji1pRpP%2BfRsjXwTf4DXeUbSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHvJ3%2F56A%2FzIYD4qpKtwDpYeF9WqZm%2BlarVhkcITJXpoN7KUhBYinWlWjqPIC0M0U40ZlKExDFODsWicPlQEltONWqygL%2FIDuKfJISqtS3lficESdrU%2B4EArStZKG5R2VGr3x24sKkMn5uNUCqO7vbia3bNPWcwohD9f701rofcmKHHI1SdAgSw30fg0ijEophCV0u%2FvzCX1aLLCUIQQdnFngYpAmAqTO%2B8f0bIFsppOFvKWdqJeS55UJEef1IKKX0t4ga2qDGYXACu3MGEgF7Pt28iLMyBI%2B7XZvP5%2BP6lw9JWvyQPQX%2FZdF%2BNiGsMXvBifMqDC8K1KlAAt810a3WJsMNgBImpRCFhF5xYOXGj228fEyxxGoZo7AUItcyVzDOzobUetIWfXuJFXMfem28xycnP8DWgadKyq8croSOZiIMzuGIVxYMgUDDlNWeVmkv53WrtQAWQdlhv68wUOXuBF8kYKZH4jRQUzAWPohWyWjZyFVLM%2BPoL9OA3R3JLgPEJVWwj40rcM%2FHol31o8NosQGIumGN2bFFoY97DMUtf4gcIvMXOV38xsIjsYVxuEuk5qh5yFWdjHhzjubBWLRii7WnvnntMrAuZNuXQVIAQBU08a7bKf%2BdaYRKXux0rfm3jaEJiGUc8Z3y4gwh6%2FLvQY6pgEDN2qd7WgtarvRGUy0d9rx2EfczqyEd3o9M8O%2BhGKcnxjXTffw1sm%2FfM3vjAb1HPdX5iWU7CbFcV8gz%2FxQZrbANmbVOocVByQfzx8Cj%2F65K0p9YbOu37JpL5vGeY1qy0iwnJxVCl6is6dR9foPWrt6oJZdSH4l2Mn4L0ZUtrAwQ%2BVVvsdRDa5Wo2RJNr3OQpVZYbTMDqcDoyP4EOBS2z4zH6vvIJBN&X-Amz-Signature=aa56a398401ef17fac8eaa7b2af6443e798bc50c30f6b32c31e886aa106af3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRUMMUK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFfuOT8Ihba%2BZPNtE66gwbRiYI7mbHOKCaTMqC39UUkHAiA56b8ki0hBjSjMyFD63X8Ji1pRpP%2BfRsjXwTf4DXeUbSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHvJ3%2F56A%2FzIYD4qpKtwDpYeF9WqZm%2BlarVhkcITJXpoN7KUhBYinWlWjqPIC0M0U40ZlKExDFODsWicPlQEltONWqygL%2FIDuKfJISqtS3lficESdrU%2B4EArStZKG5R2VGr3x24sKkMn5uNUCqO7vbia3bNPWcwohD9f701rofcmKHHI1SdAgSw30fg0ijEophCV0u%2FvzCX1aLLCUIQQdnFngYpAmAqTO%2B8f0bIFsppOFvKWdqJeS55UJEef1IKKX0t4ga2qDGYXACu3MGEgF7Pt28iLMyBI%2B7XZvP5%2BP6lw9JWvyQPQX%2FZdF%2BNiGsMXvBifMqDC8K1KlAAt810a3WJsMNgBImpRCFhF5xYOXGj228fEyxxGoZo7AUItcyVzDOzobUetIWfXuJFXMfem28xycnP8DWgadKyq8croSOZiIMzuGIVxYMgUDDlNWeVmkv53WrtQAWQdlhv68wUOXuBF8kYKZH4jRQUzAWPohWyWjZyFVLM%2BPoL9OA3R3JLgPEJVWwj40rcM%2FHol31o8NosQGIumGN2bFFoY97DMUtf4gcIvMXOV38xsIjsYVxuEuk5qh5yFWdjHhzjubBWLRii7WnvnntMrAuZNuXQVIAQBU08a7bKf%2BdaYRKXux0rfm3jaEJiGUc8Z3y4gwh6%2FLvQY6pgEDN2qd7WgtarvRGUy0d9rx2EfczqyEd3o9M8O%2BhGKcnxjXTffw1sm%2FfM3vjAb1HPdX5iWU7CbFcV8gz%2FxQZrbANmbVOocVByQfzx8Cj%2F65K0p9YbOu37JpL5vGeY1qy0iwnJxVCl6is6dR9foPWrt6oJZdSH4l2Mn4L0ZUtrAwQ%2BVVvsdRDa5Wo2RJNr3OQpVZYbTMDqcDoyP4EOBS2z4zH6vvIJBN&X-Amz-Signature=38335d13e3b1612592d434e1c02dc594007daf1fff63a565bd9971191d7a9eed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IRUMMUK%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIFfuOT8Ihba%2BZPNtE66gwbRiYI7mbHOKCaTMqC39UUkHAiA56b8ki0hBjSjMyFD63X8Ji1pRpP%2BfRsjXwTf4DXeUbSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHvJ3%2F56A%2FzIYD4qpKtwDpYeF9WqZm%2BlarVhkcITJXpoN7KUhBYinWlWjqPIC0M0U40ZlKExDFODsWicPlQEltONWqygL%2FIDuKfJISqtS3lficESdrU%2B4EArStZKG5R2VGr3x24sKkMn5uNUCqO7vbia3bNPWcwohD9f701rofcmKHHI1SdAgSw30fg0ijEophCV0u%2FvzCX1aLLCUIQQdnFngYpAmAqTO%2B8f0bIFsppOFvKWdqJeS55UJEef1IKKX0t4ga2qDGYXACu3MGEgF7Pt28iLMyBI%2B7XZvP5%2BP6lw9JWvyQPQX%2FZdF%2BNiGsMXvBifMqDC8K1KlAAt810a3WJsMNgBImpRCFhF5xYOXGj228fEyxxGoZo7AUItcyVzDOzobUetIWfXuJFXMfem28xycnP8DWgadKyq8croSOZiIMzuGIVxYMgUDDlNWeVmkv53WrtQAWQdlhv68wUOXuBF8kYKZH4jRQUzAWPohWyWjZyFVLM%2BPoL9OA3R3JLgPEJVWwj40rcM%2FHol31o8NosQGIumGN2bFFoY97DMUtf4gcIvMXOV38xsIjsYVxuEuk5qh5yFWdjHhzjubBWLRii7WnvnntMrAuZNuXQVIAQBU08a7bKf%2BdaYRKXux0rfm3jaEJiGUc8Z3y4gwh6%2FLvQY6pgEDN2qd7WgtarvRGUy0d9rx2EfczqyEd3o9M8O%2BhGKcnxjXTffw1sm%2FfM3vjAb1HPdX5iWU7CbFcV8gz%2FxQZrbANmbVOocVByQfzx8Cj%2F65K0p9YbOu37JpL5vGeY1qy0iwnJxVCl6is6dR9foPWrt6oJZdSH4l2Mn4L0ZUtrAwQ%2BVVvsdRDa5Wo2RJNr3OQpVZYbTMDqcDoyP4EOBS2z4zH6vvIJBN&X-Amz-Signature=da11544359754346884d4d969029b6e4dbc47f53f9a26156d9c8fc09d28a167d&X-Amz-SignedHeaders=host&x-id=GetObject)
