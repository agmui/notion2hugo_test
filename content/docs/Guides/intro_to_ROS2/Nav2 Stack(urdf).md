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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXM62LD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpDFBp4UoEidpNRBwQRmJVeiztlDwbnXlJjkEzx%2BytgIhAMTd4x90zbsbJQDfn%2BKN65rAythviHDT%2BBaqlxjky2TFKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNc02S29nKUAxJmSkq3APhzoBUKlpMD0aKTrPnJkfvBneyTEVp4V0didfRCpv3Ub376VWRA7SCYnWhfDG31ziTK5IxPslwD3PtRExhVcKJYoOEcYNc7pf0hVb90QhOxEFCxdfVr4HK%2F3ziUgyJeedqi6bTM3NWeinlph0xMVx6lcfaU%2FSzrDaO8xvFAZdX3Cv2lupvSkFuEIlXhe9zN7VxSEsXMit2vHxF%2F9EYrEm1PZdMCsn2WJE5DUbeqn4pAgPZvq4ek2bzrowroUi4m2495MZK4bLSDt51eztbg%2F1biDjpiBVatAw%2FYrwtfpCWyndZZXYM5o6Pfq9PgBk7WE%2Bv7iMruyMYATtriz71JlShJzC8iZ5W2svhF9wnpxL2cGlGesvuQu41Bcq4VMXCAH%2FHo595jQMn2L52hGTj0qHrFQO3yjNQysDqr3nABlo9OHto0n1dJf7Eqr%2B4hER1b%2BAmC6%2F3iG%2BL4%2F4SpkNejgGurqUuHMeQCcJ7%2FEGnltgQ048oxJpGsb1Z9w5oXfXIeXKh6N35jktefYg2XCocRJIdDlOZFIZ%2BbIpwVtyb2ts9sI5dTypw1lzFDP9EIw5Fi9f3SzOkFirJ%2BuqlpDvahBulRRTE700bkzX9V16D%2FEoyPngzxhiV9DhB6ibb7DD03OrBBjqkAe5DTrw98tAyfJ8Jz4bIVO6Y0tWxH8uAeeuZ3bDoTr3waCBaw%2F1iQfnZxcRYexKsDWqzKCLZarGWDa43jCW8EvWNvWz5FbwLJC0QLmM6jy21ehVXWKxgM94jsQrQ7LkQ0hJ6arSOkLNLIjhJtaK0DE%2B2IiUIntKbeifx0rugxLGQRe5CbdwSckN0%2Ft5PMaWqmd74ASrAknjuej5D8ffLZyrS0O3w&X-Amz-Signature=a45b2c7308eba522c5edf46b9ef5852c1a7b5631b196bdc709849d7558a11c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXM62LD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpDFBp4UoEidpNRBwQRmJVeiztlDwbnXlJjkEzx%2BytgIhAMTd4x90zbsbJQDfn%2BKN65rAythviHDT%2BBaqlxjky2TFKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNc02S29nKUAxJmSkq3APhzoBUKlpMD0aKTrPnJkfvBneyTEVp4V0didfRCpv3Ub376VWRA7SCYnWhfDG31ziTK5IxPslwD3PtRExhVcKJYoOEcYNc7pf0hVb90QhOxEFCxdfVr4HK%2F3ziUgyJeedqi6bTM3NWeinlph0xMVx6lcfaU%2FSzrDaO8xvFAZdX3Cv2lupvSkFuEIlXhe9zN7VxSEsXMit2vHxF%2F9EYrEm1PZdMCsn2WJE5DUbeqn4pAgPZvq4ek2bzrowroUi4m2495MZK4bLSDt51eztbg%2F1biDjpiBVatAw%2FYrwtfpCWyndZZXYM5o6Pfq9PgBk7WE%2Bv7iMruyMYATtriz71JlShJzC8iZ5W2svhF9wnpxL2cGlGesvuQu41Bcq4VMXCAH%2FHo595jQMn2L52hGTj0qHrFQO3yjNQysDqr3nABlo9OHto0n1dJf7Eqr%2B4hER1b%2BAmC6%2F3iG%2BL4%2F4SpkNejgGurqUuHMeQCcJ7%2FEGnltgQ048oxJpGsb1Z9w5oXfXIeXKh6N35jktefYg2XCocRJIdDlOZFIZ%2BbIpwVtyb2ts9sI5dTypw1lzFDP9EIw5Fi9f3SzOkFirJ%2BuqlpDvahBulRRTE700bkzX9V16D%2FEoyPngzxhiV9DhB6ibb7DD03OrBBjqkAe5DTrw98tAyfJ8Jz4bIVO6Y0tWxH8uAeeuZ3bDoTr3waCBaw%2F1iQfnZxcRYexKsDWqzKCLZarGWDa43jCW8EvWNvWz5FbwLJC0QLmM6jy21ehVXWKxgM94jsQrQ7LkQ0hJ6arSOkLNLIjhJtaK0DE%2B2IiUIntKbeifx0rugxLGQRe5CbdwSckN0%2Ft5PMaWqmd74ASrAknjuej5D8ffLZyrS0O3w&X-Amz-Signature=88d0e6b39e47c0fcd2eca58ff358112d6ba4c4a69d8a06966eddb86478a86a08&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXM62LD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpDFBp4UoEidpNRBwQRmJVeiztlDwbnXlJjkEzx%2BytgIhAMTd4x90zbsbJQDfn%2BKN65rAythviHDT%2BBaqlxjky2TFKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNc02S29nKUAxJmSkq3APhzoBUKlpMD0aKTrPnJkfvBneyTEVp4V0didfRCpv3Ub376VWRA7SCYnWhfDG31ziTK5IxPslwD3PtRExhVcKJYoOEcYNc7pf0hVb90QhOxEFCxdfVr4HK%2F3ziUgyJeedqi6bTM3NWeinlph0xMVx6lcfaU%2FSzrDaO8xvFAZdX3Cv2lupvSkFuEIlXhe9zN7VxSEsXMit2vHxF%2F9EYrEm1PZdMCsn2WJE5DUbeqn4pAgPZvq4ek2bzrowroUi4m2495MZK4bLSDt51eztbg%2F1biDjpiBVatAw%2FYrwtfpCWyndZZXYM5o6Pfq9PgBk7WE%2Bv7iMruyMYATtriz71JlShJzC8iZ5W2svhF9wnpxL2cGlGesvuQu41Bcq4VMXCAH%2FHo595jQMn2L52hGTj0qHrFQO3yjNQysDqr3nABlo9OHto0n1dJf7Eqr%2B4hER1b%2BAmC6%2F3iG%2BL4%2F4SpkNejgGurqUuHMeQCcJ7%2FEGnltgQ048oxJpGsb1Z9w5oXfXIeXKh6N35jktefYg2XCocRJIdDlOZFIZ%2BbIpwVtyb2ts9sI5dTypw1lzFDP9EIw5Fi9f3SzOkFirJ%2BuqlpDvahBulRRTE700bkzX9V16D%2FEoyPngzxhiV9DhB6ibb7DD03OrBBjqkAe5DTrw98tAyfJ8Jz4bIVO6Y0tWxH8uAeeuZ3bDoTr3waCBaw%2F1iQfnZxcRYexKsDWqzKCLZarGWDa43jCW8EvWNvWz5FbwLJC0QLmM6jy21ehVXWKxgM94jsQrQ7LkQ0hJ6arSOkLNLIjhJtaK0DE%2B2IiUIntKbeifx0rugxLGQRe5CbdwSckN0%2Ft5PMaWqmd74ASrAknjuej5D8ffLZyrS0O3w&X-Amz-Signature=a7c3876b74524ae4d0e4f16fb7832677437ce05e5cdbc0f6e2ec30ab197e0d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXM62LD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpDFBp4UoEidpNRBwQRmJVeiztlDwbnXlJjkEzx%2BytgIhAMTd4x90zbsbJQDfn%2BKN65rAythviHDT%2BBaqlxjky2TFKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNc02S29nKUAxJmSkq3APhzoBUKlpMD0aKTrPnJkfvBneyTEVp4V0didfRCpv3Ub376VWRA7SCYnWhfDG31ziTK5IxPslwD3PtRExhVcKJYoOEcYNc7pf0hVb90QhOxEFCxdfVr4HK%2F3ziUgyJeedqi6bTM3NWeinlph0xMVx6lcfaU%2FSzrDaO8xvFAZdX3Cv2lupvSkFuEIlXhe9zN7VxSEsXMit2vHxF%2F9EYrEm1PZdMCsn2WJE5DUbeqn4pAgPZvq4ek2bzrowroUi4m2495MZK4bLSDt51eztbg%2F1biDjpiBVatAw%2FYrwtfpCWyndZZXYM5o6Pfq9PgBk7WE%2Bv7iMruyMYATtriz71JlShJzC8iZ5W2svhF9wnpxL2cGlGesvuQu41Bcq4VMXCAH%2FHo595jQMn2L52hGTj0qHrFQO3yjNQysDqr3nABlo9OHto0n1dJf7Eqr%2B4hER1b%2BAmC6%2F3iG%2BL4%2F4SpkNejgGurqUuHMeQCcJ7%2FEGnltgQ048oxJpGsb1Z9w5oXfXIeXKh6N35jktefYg2XCocRJIdDlOZFIZ%2BbIpwVtyb2ts9sI5dTypw1lzFDP9EIw5Fi9f3SzOkFirJ%2BuqlpDvahBulRRTE700bkzX9V16D%2FEoyPngzxhiV9DhB6ibb7DD03OrBBjqkAe5DTrw98tAyfJ8Jz4bIVO6Y0tWxH8uAeeuZ3bDoTr3waCBaw%2F1iQfnZxcRYexKsDWqzKCLZarGWDa43jCW8EvWNvWz5FbwLJC0QLmM6jy21ehVXWKxgM94jsQrQ7LkQ0hJ6arSOkLNLIjhJtaK0DE%2B2IiUIntKbeifx0rugxLGQRe5CbdwSckN0%2Ft5PMaWqmd74ASrAknjuej5D8ffLZyrS0O3w&X-Amz-Signature=cf22105b2c8542f7dd7e1b54a33f28d505fd58517aeeebdbeda919d49f4dcbe4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXM62LD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpDFBp4UoEidpNRBwQRmJVeiztlDwbnXlJjkEzx%2BytgIhAMTd4x90zbsbJQDfn%2BKN65rAythviHDT%2BBaqlxjky2TFKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNc02S29nKUAxJmSkq3APhzoBUKlpMD0aKTrPnJkfvBneyTEVp4V0didfRCpv3Ub376VWRA7SCYnWhfDG31ziTK5IxPslwD3PtRExhVcKJYoOEcYNc7pf0hVb90QhOxEFCxdfVr4HK%2F3ziUgyJeedqi6bTM3NWeinlph0xMVx6lcfaU%2FSzrDaO8xvFAZdX3Cv2lupvSkFuEIlXhe9zN7VxSEsXMit2vHxF%2F9EYrEm1PZdMCsn2WJE5DUbeqn4pAgPZvq4ek2bzrowroUi4m2495MZK4bLSDt51eztbg%2F1biDjpiBVatAw%2FYrwtfpCWyndZZXYM5o6Pfq9PgBk7WE%2Bv7iMruyMYATtriz71JlShJzC8iZ5W2svhF9wnpxL2cGlGesvuQu41Bcq4VMXCAH%2FHo595jQMn2L52hGTj0qHrFQO3yjNQysDqr3nABlo9OHto0n1dJf7Eqr%2B4hER1b%2BAmC6%2F3iG%2BL4%2F4SpkNejgGurqUuHMeQCcJ7%2FEGnltgQ048oxJpGsb1Z9w5oXfXIeXKh6N35jktefYg2XCocRJIdDlOZFIZ%2BbIpwVtyb2ts9sI5dTypw1lzFDP9EIw5Fi9f3SzOkFirJ%2BuqlpDvahBulRRTE700bkzX9V16D%2FEoyPngzxhiV9DhB6ibb7DD03OrBBjqkAe5DTrw98tAyfJ8Jz4bIVO6Y0tWxH8uAeeuZ3bDoTr3waCBaw%2F1iQfnZxcRYexKsDWqzKCLZarGWDa43jCW8EvWNvWz5FbwLJC0QLmM6jy21ehVXWKxgM94jsQrQ7LkQ0hJ6arSOkLNLIjhJtaK0DE%2B2IiUIntKbeifx0rugxLGQRe5CbdwSckN0%2Ft5PMaWqmd74ASrAknjuej5D8ffLZyrS0O3w&X-Amz-Signature=5ebcce2c1f5d49440c54e44e158e822eb931571be64ddf7e2bd4d642071fc736&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMXM62LD%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FpDFBp4UoEidpNRBwQRmJVeiztlDwbnXlJjkEzx%2BytgIhAMTd4x90zbsbJQDfn%2BKN65rAythviHDT%2BBaqlxjky2TFKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNc02S29nKUAxJmSkq3APhzoBUKlpMD0aKTrPnJkfvBneyTEVp4V0didfRCpv3Ub376VWRA7SCYnWhfDG31ziTK5IxPslwD3PtRExhVcKJYoOEcYNc7pf0hVb90QhOxEFCxdfVr4HK%2F3ziUgyJeedqi6bTM3NWeinlph0xMVx6lcfaU%2FSzrDaO8xvFAZdX3Cv2lupvSkFuEIlXhe9zN7VxSEsXMit2vHxF%2F9EYrEm1PZdMCsn2WJE5DUbeqn4pAgPZvq4ek2bzrowroUi4m2495MZK4bLSDt51eztbg%2F1biDjpiBVatAw%2FYrwtfpCWyndZZXYM5o6Pfq9PgBk7WE%2Bv7iMruyMYATtriz71JlShJzC8iZ5W2svhF9wnpxL2cGlGesvuQu41Bcq4VMXCAH%2FHo595jQMn2L52hGTj0qHrFQO3yjNQysDqr3nABlo9OHto0n1dJf7Eqr%2B4hER1b%2BAmC6%2F3iG%2BL4%2F4SpkNejgGurqUuHMeQCcJ7%2FEGnltgQ048oxJpGsb1Z9w5oXfXIeXKh6N35jktefYg2XCocRJIdDlOZFIZ%2BbIpwVtyb2ts9sI5dTypw1lzFDP9EIw5Fi9f3SzOkFirJ%2BuqlpDvahBulRRTE700bkzX9V16D%2FEoyPngzxhiV9DhB6ibb7DD03OrBBjqkAe5DTrw98tAyfJ8Jz4bIVO6Y0tWxH8uAeeuZ3bDoTr3waCBaw%2F1iQfnZxcRYexKsDWqzKCLZarGWDa43jCW8EvWNvWz5FbwLJC0QLmM6jy21ehVXWKxgM94jsQrQ7LkQ0hJ6arSOkLNLIjhJtaK0DE%2B2IiUIntKbeifx0rugxLGQRe5CbdwSckN0%2Ft5PMaWqmd74ASrAknjuej5D8ffLZyrS0O3w&X-Amz-Signature=284218db4f1c7f9c2e6e4e061ec7b09357e11cb21a2550fdf08922a44f996049&X-Amz-SignedHeaders=host&x-id=GetObject)
