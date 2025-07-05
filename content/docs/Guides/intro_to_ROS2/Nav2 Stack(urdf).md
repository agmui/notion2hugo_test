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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFHOLKS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAaA0K1A7%2B31IIHmksYsQ2QU9YYkrcypPt2AuZOf6f6NAiBjlCz%2ByhJtd6U9U2xzOBU8O3t74tI4mPDd7Snnsz34QSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMxpq8qo9vbXAmjIddKtwDDYjFs8NynLTju43uiST11ZLhhuDJZ%2FbVOnFMLQy3vmXFU4A68RkFqXHzbndQ6%2FP1PpiEFDna%2B0Im4Qjqb1Yy2XOn2yC0MtS1ovkrkYmNmMUplpZE3EGFmZg00ruO7ubjPskuL%2B6SWzmpbM0hYngsey9g%2B%2BKWcvH%2B2uP1b2A12GFrhcGMCxJUy0XPYRgbbCRryjwT5t0U6EQxSSniTcHscKqvIZwzMkFDArHA3VzEoj7rCgUXcJJ57Cui0WTTkYV%2Fu%2F7YEqHn1TEcnnjHZ3mNufYgZSVpYpLEupfo5ReQ%2BZrbs4v9%2F5wvHisB%2BsN5hJosc0pXaDABH%2FIah2mETSM4yE%2BuUmTRqjndOSz9lQg6XC94%2FtGTr6ROji5f3FzUb3fnB0%2FvtptW4l86fb31DiJbxtx9nHYBw8pLNkPFdkxl6Bpv7n5IrX01M17HFdnNF9B7CnnXfsVVLVqaulDVmY3ChoJT2z2Nelb8cQ9%2Bv0ASwleTXlbJwhgp4T8Aaf6Xw3LK4xPwU8HbmjfjM7bCuXcjgTD5EihsbZAML79d9c100LWmxWseNf2UpOrp%2BeZz9PH0nufoq23gKgLLFBYbpiv%2FIIz1mtU1r9VmYrco2JmdUppJLcmXgvpifwqr%2FA8w4%2FCiwwY6pgHXfz0ZwHvLgcgGE04DgSgapf407Z%2FfmEzOW2540%2B8%2FfKQ7YLn4DCRco07GinHY3NJK5VsEyoOaLGZeLZxtnhNTB4mh5LRzidMZJazEFNw%2BBno2nR0ZKtzZIGq%2FmNMk%2FP%2FJwkPAISPvaJewt3%2FfPjCj8Y155bqC7VAxgWOvlAIgQJ41pFByESjqHUIB7%2FpWgDegGMR%2B%2Fv3O5Gf4Vxl16IUuzGryyhvv&X-Amz-Signature=b690c635d023f52f9fb7ed2fd6ce91cccadcf926083a521978ad74784f280cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFHOLKS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAaA0K1A7%2B31IIHmksYsQ2QU9YYkrcypPt2AuZOf6f6NAiBjlCz%2ByhJtd6U9U2xzOBU8O3t74tI4mPDd7Snnsz34QSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMxpq8qo9vbXAmjIddKtwDDYjFs8NynLTju43uiST11ZLhhuDJZ%2FbVOnFMLQy3vmXFU4A68RkFqXHzbndQ6%2FP1PpiEFDna%2B0Im4Qjqb1Yy2XOn2yC0MtS1ovkrkYmNmMUplpZE3EGFmZg00ruO7ubjPskuL%2B6SWzmpbM0hYngsey9g%2B%2BKWcvH%2B2uP1b2A12GFrhcGMCxJUy0XPYRgbbCRryjwT5t0U6EQxSSniTcHscKqvIZwzMkFDArHA3VzEoj7rCgUXcJJ57Cui0WTTkYV%2Fu%2F7YEqHn1TEcnnjHZ3mNufYgZSVpYpLEupfo5ReQ%2BZrbs4v9%2F5wvHisB%2BsN5hJosc0pXaDABH%2FIah2mETSM4yE%2BuUmTRqjndOSz9lQg6XC94%2FtGTr6ROji5f3FzUb3fnB0%2FvtptW4l86fb31DiJbxtx9nHYBw8pLNkPFdkxl6Bpv7n5IrX01M17HFdnNF9B7CnnXfsVVLVqaulDVmY3ChoJT2z2Nelb8cQ9%2Bv0ASwleTXlbJwhgp4T8Aaf6Xw3LK4xPwU8HbmjfjM7bCuXcjgTD5EihsbZAML79d9c100LWmxWseNf2UpOrp%2BeZz9PH0nufoq23gKgLLFBYbpiv%2FIIz1mtU1r9VmYrco2JmdUppJLcmXgvpifwqr%2FA8w4%2FCiwwY6pgHXfz0ZwHvLgcgGE04DgSgapf407Z%2FfmEzOW2540%2B8%2FfKQ7YLn4DCRco07GinHY3NJK5VsEyoOaLGZeLZxtnhNTB4mh5LRzidMZJazEFNw%2BBno2nR0ZKtzZIGq%2FmNMk%2FP%2FJwkPAISPvaJewt3%2FfPjCj8Y155bqC7VAxgWOvlAIgQJ41pFByESjqHUIB7%2FpWgDegGMR%2B%2Fv3O5Gf4Vxl16IUuzGryyhvv&X-Amz-Signature=61cdf820ae38616083ad6dedac53f7b14353dcfb4084a2b95a397c7efcf5eb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFHOLKS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAaA0K1A7%2B31IIHmksYsQ2QU9YYkrcypPt2AuZOf6f6NAiBjlCz%2ByhJtd6U9U2xzOBU8O3t74tI4mPDd7Snnsz34QSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMxpq8qo9vbXAmjIddKtwDDYjFs8NynLTju43uiST11ZLhhuDJZ%2FbVOnFMLQy3vmXFU4A68RkFqXHzbndQ6%2FP1PpiEFDna%2B0Im4Qjqb1Yy2XOn2yC0MtS1ovkrkYmNmMUplpZE3EGFmZg00ruO7ubjPskuL%2B6SWzmpbM0hYngsey9g%2B%2BKWcvH%2B2uP1b2A12GFrhcGMCxJUy0XPYRgbbCRryjwT5t0U6EQxSSniTcHscKqvIZwzMkFDArHA3VzEoj7rCgUXcJJ57Cui0WTTkYV%2Fu%2F7YEqHn1TEcnnjHZ3mNufYgZSVpYpLEupfo5ReQ%2BZrbs4v9%2F5wvHisB%2BsN5hJosc0pXaDABH%2FIah2mETSM4yE%2BuUmTRqjndOSz9lQg6XC94%2FtGTr6ROji5f3FzUb3fnB0%2FvtptW4l86fb31DiJbxtx9nHYBw8pLNkPFdkxl6Bpv7n5IrX01M17HFdnNF9B7CnnXfsVVLVqaulDVmY3ChoJT2z2Nelb8cQ9%2Bv0ASwleTXlbJwhgp4T8Aaf6Xw3LK4xPwU8HbmjfjM7bCuXcjgTD5EihsbZAML79d9c100LWmxWseNf2UpOrp%2BeZz9PH0nufoq23gKgLLFBYbpiv%2FIIz1mtU1r9VmYrco2JmdUppJLcmXgvpifwqr%2FA8w4%2FCiwwY6pgHXfz0ZwHvLgcgGE04DgSgapf407Z%2FfmEzOW2540%2B8%2FfKQ7YLn4DCRco07GinHY3NJK5VsEyoOaLGZeLZxtnhNTB4mh5LRzidMZJazEFNw%2BBno2nR0ZKtzZIGq%2FmNMk%2FP%2FJwkPAISPvaJewt3%2FfPjCj8Y155bqC7VAxgWOvlAIgQJ41pFByESjqHUIB7%2FpWgDegGMR%2B%2Fv3O5Gf4Vxl16IUuzGryyhvv&X-Amz-Signature=9aa143617eb5a531a62b42c5ff76415f5e40ff23ba2ba77a3a4f8db209a706ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFHOLKS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAaA0K1A7%2B31IIHmksYsQ2QU9YYkrcypPt2AuZOf6f6NAiBjlCz%2ByhJtd6U9U2xzOBU8O3t74tI4mPDd7Snnsz34QSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMxpq8qo9vbXAmjIddKtwDDYjFs8NynLTju43uiST11ZLhhuDJZ%2FbVOnFMLQy3vmXFU4A68RkFqXHzbndQ6%2FP1PpiEFDna%2B0Im4Qjqb1Yy2XOn2yC0MtS1ovkrkYmNmMUplpZE3EGFmZg00ruO7ubjPskuL%2B6SWzmpbM0hYngsey9g%2B%2BKWcvH%2B2uP1b2A12GFrhcGMCxJUy0XPYRgbbCRryjwT5t0U6EQxSSniTcHscKqvIZwzMkFDArHA3VzEoj7rCgUXcJJ57Cui0WTTkYV%2Fu%2F7YEqHn1TEcnnjHZ3mNufYgZSVpYpLEupfo5ReQ%2BZrbs4v9%2F5wvHisB%2BsN5hJosc0pXaDABH%2FIah2mETSM4yE%2BuUmTRqjndOSz9lQg6XC94%2FtGTr6ROji5f3FzUb3fnB0%2FvtptW4l86fb31DiJbxtx9nHYBw8pLNkPFdkxl6Bpv7n5IrX01M17HFdnNF9B7CnnXfsVVLVqaulDVmY3ChoJT2z2Nelb8cQ9%2Bv0ASwleTXlbJwhgp4T8Aaf6Xw3LK4xPwU8HbmjfjM7bCuXcjgTD5EihsbZAML79d9c100LWmxWseNf2UpOrp%2BeZz9PH0nufoq23gKgLLFBYbpiv%2FIIz1mtU1r9VmYrco2JmdUppJLcmXgvpifwqr%2FA8w4%2FCiwwY6pgHXfz0ZwHvLgcgGE04DgSgapf407Z%2FfmEzOW2540%2B8%2FfKQ7YLn4DCRco07GinHY3NJK5VsEyoOaLGZeLZxtnhNTB4mh5LRzidMZJazEFNw%2BBno2nR0ZKtzZIGq%2FmNMk%2FP%2FJwkPAISPvaJewt3%2FfPjCj8Y155bqC7VAxgWOvlAIgQJ41pFByESjqHUIB7%2FpWgDegGMR%2B%2Fv3O5Gf4Vxl16IUuzGryyhvv&X-Amz-Signature=42b2f428ac7276310e44dc165b519049d6388b102a9b932e58b6394ca8b09bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFHOLKS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAaA0K1A7%2B31IIHmksYsQ2QU9YYkrcypPt2AuZOf6f6NAiBjlCz%2ByhJtd6U9U2xzOBU8O3t74tI4mPDd7Snnsz34QSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMxpq8qo9vbXAmjIddKtwDDYjFs8NynLTju43uiST11ZLhhuDJZ%2FbVOnFMLQy3vmXFU4A68RkFqXHzbndQ6%2FP1PpiEFDna%2B0Im4Qjqb1Yy2XOn2yC0MtS1ovkrkYmNmMUplpZE3EGFmZg00ruO7ubjPskuL%2B6SWzmpbM0hYngsey9g%2B%2BKWcvH%2B2uP1b2A12GFrhcGMCxJUy0XPYRgbbCRryjwT5t0U6EQxSSniTcHscKqvIZwzMkFDArHA3VzEoj7rCgUXcJJ57Cui0WTTkYV%2Fu%2F7YEqHn1TEcnnjHZ3mNufYgZSVpYpLEupfo5ReQ%2BZrbs4v9%2F5wvHisB%2BsN5hJosc0pXaDABH%2FIah2mETSM4yE%2BuUmTRqjndOSz9lQg6XC94%2FtGTr6ROji5f3FzUb3fnB0%2FvtptW4l86fb31DiJbxtx9nHYBw8pLNkPFdkxl6Bpv7n5IrX01M17HFdnNF9B7CnnXfsVVLVqaulDVmY3ChoJT2z2Nelb8cQ9%2Bv0ASwleTXlbJwhgp4T8Aaf6Xw3LK4xPwU8HbmjfjM7bCuXcjgTD5EihsbZAML79d9c100LWmxWseNf2UpOrp%2BeZz9PH0nufoq23gKgLLFBYbpiv%2FIIz1mtU1r9VmYrco2JmdUppJLcmXgvpifwqr%2FA8w4%2FCiwwY6pgHXfz0ZwHvLgcgGE04DgSgapf407Z%2FfmEzOW2540%2B8%2FfKQ7YLn4DCRco07GinHY3NJK5VsEyoOaLGZeLZxtnhNTB4mh5LRzidMZJazEFNw%2BBno2nR0ZKtzZIGq%2FmNMk%2FP%2FJwkPAISPvaJewt3%2FfPjCj8Y155bqC7VAxgWOvlAIgQJ41pFByESjqHUIB7%2FpWgDegGMR%2B%2Fv3O5Gf4Vxl16IUuzGryyhvv&X-Amz-Signature=fa7ff9cf461edf2eb8f965fd8e127626afbbe98af38158b2331ab0a2d25526fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBFHOLKS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAaA0K1A7%2B31IIHmksYsQ2QU9YYkrcypPt2AuZOf6f6NAiBjlCz%2ByhJtd6U9U2xzOBU8O3t74tI4mPDd7Snnsz34QSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMxpq8qo9vbXAmjIddKtwDDYjFs8NynLTju43uiST11ZLhhuDJZ%2FbVOnFMLQy3vmXFU4A68RkFqXHzbndQ6%2FP1PpiEFDna%2B0Im4Qjqb1Yy2XOn2yC0MtS1ovkrkYmNmMUplpZE3EGFmZg00ruO7ubjPskuL%2B6SWzmpbM0hYngsey9g%2B%2BKWcvH%2B2uP1b2A12GFrhcGMCxJUy0XPYRgbbCRryjwT5t0U6EQxSSniTcHscKqvIZwzMkFDArHA3VzEoj7rCgUXcJJ57Cui0WTTkYV%2Fu%2F7YEqHn1TEcnnjHZ3mNufYgZSVpYpLEupfo5ReQ%2BZrbs4v9%2F5wvHisB%2BsN5hJosc0pXaDABH%2FIah2mETSM4yE%2BuUmTRqjndOSz9lQg6XC94%2FtGTr6ROji5f3FzUb3fnB0%2FvtptW4l86fb31DiJbxtx9nHYBw8pLNkPFdkxl6Bpv7n5IrX01M17HFdnNF9B7CnnXfsVVLVqaulDVmY3ChoJT2z2Nelb8cQ9%2Bv0ASwleTXlbJwhgp4T8Aaf6Xw3LK4xPwU8HbmjfjM7bCuXcjgTD5EihsbZAML79d9c100LWmxWseNf2UpOrp%2BeZz9PH0nufoq23gKgLLFBYbpiv%2FIIz1mtU1r9VmYrco2JmdUppJLcmXgvpifwqr%2FA8w4%2FCiwwY6pgHXfz0ZwHvLgcgGE04DgSgapf407Z%2FfmEzOW2540%2B8%2FfKQ7YLn4DCRco07GinHY3NJK5VsEyoOaLGZeLZxtnhNTB4mh5LRzidMZJazEFNw%2BBno2nR0ZKtzZIGq%2FmNMk%2FP%2FJwkPAISPvaJewt3%2FfPjCj8Y155bqC7VAxgWOvlAIgQJ41pFByESjqHUIB7%2FpWgDegGMR%2B%2Fv3O5Gf4Vxl16IUuzGryyhvv&X-Amz-Signature=8f01e16c1ffa37f894a7786ff771f03f3366990ba7fd007baa47d2ac77a0d113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
