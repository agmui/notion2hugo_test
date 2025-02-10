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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZV5DER6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiapKGfHObcOhWSP53AHMaxtOo4qtfiVLhMdpYmh622AiEAzDwGFko3sEmwOPUlC03uLrb9hrDfhVLSI2k6Ljf3XvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5w1%2BFNqcHtL6khkSrcA3%2B9rjrH%2BKDm6cwpi3SarJv%2BgUKRvPFlaXikeRyIMVC5Hv5mFEj1RDEld6BJ%2BuSdEiz0D428muUBEgdyNJLbUKgZBHdJGtPrxPTNYldcruewAYXFtAic%2BEuwW9R7JmUNpTkd6JiHzcV8mydi8Al6ZSEnRPfqOKxT8h6KAY0vKePEvM5E0TosB1cfbK5B3zRDs%2BafScfu7XhMCzMDJe33QWJKg3OtNYEEnXgRxbNni3p1kNSirC8pIVCXtfXpYHP1tfrbWsAQz3%2Fkk4n8vY%2FayIqPvR2OajYgX4aM2F1wxdx4Alvm1FV2mbLVG4LBMP4kjwS8h7Snz%2Fudbptx9bJs%2FCxJV7nEpBmD9iPBxg1xocSEtIJ%2FRWi2S5crg9OQW5v3a1BExcuO%2BcDMy24lGskZ4y55ASJGXjdvFSZalpeAoKpZRgOyaECmvAZH8%2FtUQU2fwNYZt520snz6Sn1GvXF2XIAjb0zpTe8ylXwXgYbjdXLLA2lkb1t7rROR%2FOseQwHNTiRTPrv7RIb3vmZ9hlJPmFaBP9uXLNogTqZ8JsUYqkvyy2RraW%2FIsGD%2Fx1ZcesEkCGDWpQ08matZbyb0qbJpu4413KTBXVCe5V838ampY29Z%2F8%2F%2BjybuzLXA81NzMJ2zqb0GOqUBt0bm8%2BUxXgW5fWRZMC5rvs2he%2FZ8bMUBJRHqj68BtzUCHBSWv5Fk0XJ8XYTTU3M2AdAhUFiQGRpRjNL9XXG9o1V3%2B%2FnjwtyRp%2BXSrD9SKW96ZR0NTsURcV5h%2FRpiUZe5RAzPskDRZDmSvpHcTjT%2Bi8%2B8y5j7ufSW493fmpmcpWzWXto%2FEpVv9dcWjcpWj0UEaBG1sx8Y0uXIYfcYkizFnpuw9Jst&X-Amz-Signature=1aa6d97e575353311dd27f2a4c21331c209a5e6ea6250f2dad8c0dfa5f74896e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZV5DER6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiapKGfHObcOhWSP53AHMaxtOo4qtfiVLhMdpYmh622AiEAzDwGFko3sEmwOPUlC03uLrb9hrDfhVLSI2k6Ljf3XvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5w1%2BFNqcHtL6khkSrcA3%2B9rjrH%2BKDm6cwpi3SarJv%2BgUKRvPFlaXikeRyIMVC5Hv5mFEj1RDEld6BJ%2BuSdEiz0D428muUBEgdyNJLbUKgZBHdJGtPrxPTNYldcruewAYXFtAic%2BEuwW9R7JmUNpTkd6JiHzcV8mydi8Al6ZSEnRPfqOKxT8h6KAY0vKePEvM5E0TosB1cfbK5B3zRDs%2BafScfu7XhMCzMDJe33QWJKg3OtNYEEnXgRxbNni3p1kNSirC8pIVCXtfXpYHP1tfrbWsAQz3%2Fkk4n8vY%2FayIqPvR2OajYgX4aM2F1wxdx4Alvm1FV2mbLVG4LBMP4kjwS8h7Snz%2Fudbptx9bJs%2FCxJV7nEpBmD9iPBxg1xocSEtIJ%2FRWi2S5crg9OQW5v3a1BExcuO%2BcDMy24lGskZ4y55ASJGXjdvFSZalpeAoKpZRgOyaECmvAZH8%2FtUQU2fwNYZt520snz6Sn1GvXF2XIAjb0zpTe8ylXwXgYbjdXLLA2lkb1t7rROR%2FOseQwHNTiRTPrv7RIb3vmZ9hlJPmFaBP9uXLNogTqZ8JsUYqkvyy2RraW%2FIsGD%2Fx1ZcesEkCGDWpQ08matZbyb0qbJpu4413KTBXVCe5V838ampY29Z%2F8%2F%2BjybuzLXA81NzMJ2zqb0GOqUBt0bm8%2BUxXgW5fWRZMC5rvs2he%2FZ8bMUBJRHqj68BtzUCHBSWv5Fk0XJ8XYTTU3M2AdAhUFiQGRpRjNL9XXG9o1V3%2B%2FnjwtyRp%2BXSrD9SKW96ZR0NTsURcV5h%2FRpiUZe5RAzPskDRZDmSvpHcTjT%2Bi8%2B8y5j7ufSW493fmpmcpWzWXto%2FEpVv9dcWjcpWj0UEaBG1sx8Y0uXIYfcYkizFnpuw9Jst&X-Amz-Signature=8cab650a848f33e2ad69b2cc92c4682c3bf0189d49f06d06407c03f101ce98ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZV5DER6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiapKGfHObcOhWSP53AHMaxtOo4qtfiVLhMdpYmh622AiEAzDwGFko3sEmwOPUlC03uLrb9hrDfhVLSI2k6Ljf3XvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5w1%2BFNqcHtL6khkSrcA3%2B9rjrH%2BKDm6cwpi3SarJv%2BgUKRvPFlaXikeRyIMVC5Hv5mFEj1RDEld6BJ%2BuSdEiz0D428muUBEgdyNJLbUKgZBHdJGtPrxPTNYldcruewAYXFtAic%2BEuwW9R7JmUNpTkd6JiHzcV8mydi8Al6ZSEnRPfqOKxT8h6KAY0vKePEvM5E0TosB1cfbK5B3zRDs%2BafScfu7XhMCzMDJe33QWJKg3OtNYEEnXgRxbNni3p1kNSirC8pIVCXtfXpYHP1tfrbWsAQz3%2Fkk4n8vY%2FayIqPvR2OajYgX4aM2F1wxdx4Alvm1FV2mbLVG4LBMP4kjwS8h7Snz%2Fudbptx9bJs%2FCxJV7nEpBmD9iPBxg1xocSEtIJ%2FRWi2S5crg9OQW5v3a1BExcuO%2BcDMy24lGskZ4y55ASJGXjdvFSZalpeAoKpZRgOyaECmvAZH8%2FtUQU2fwNYZt520snz6Sn1GvXF2XIAjb0zpTe8ylXwXgYbjdXLLA2lkb1t7rROR%2FOseQwHNTiRTPrv7RIb3vmZ9hlJPmFaBP9uXLNogTqZ8JsUYqkvyy2RraW%2FIsGD%2Fx1ZcesEkCGDWpQ08matZbyb0qbJpu4413KTBXVCe5V838ampY29Z%2F8%2F%2BjybuzLXA81NzMJ2zqb0GOqUBt0bm8%2BUxXgW5fWRZMC5rvs2he%2FZ8bMUBJRHqj68BtzUCHBSWv5Fk0XJ8XYTTU3M2AdAhUFiQGRpRjNL9XXG9o1V3%2B%2FnjwtyRp%2BXSrD9SKW96ZR0NTsURcV5h%2FRpiUZe5RAzPskDRZDmSvpHcTjT%2Bi8%2B8y5j7ufSW493fmpmcpWzWXto%2FEpVv9dcWjcpWj0UEaBG1sx8Y0uXIYfcYkizFnpuw9Jst&X-Amz-Signature=aa4772101ac3bc0b1ec26f5b1a25c7a8c3eec5067e0d50b86b5f9bbd0dc565ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZV5DER6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiapKGfHObcOhWSP53AHMaxtOo4qtfiVLhMdpYmh622AiEAzDwGFko3sEmwOPUlC03uLrb9hrDfhVLSI2k6Ljf3XvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5w1%2BFNqcHtL6khkSrcA3%2B9rjrH%2BKDm6cwpi3SarJv%2BgUKRvPFlaXikeRyIMVC5Hv5mFEj1RDEld6BJ%2BuSdEiz0D428muUBEgdyNJLbUKgZBHdJGtPrxPTNYldcruewAYXFtAic%2BEuwW9R7JmUNpTkd6JiHzcV8mydi8Al6ZSEnRPfqOKxT8h6KAY0vKePEvM5E0TosB1cfbK5B3zRDs%2BafScfu7XhMCzMDJe33QWJKg3OtNYEEnXgRxbNni3p1kNSirC8pIVCXtfXpYHP1tfrbWsAQz3%2Fkk4n8vY%2FayIqPvR2OajYgX4aM2F1wxdx4Alvm1FV2mbLVG4LBMP4kjwS8h7Snz%2Fudbptx9bJs%2FCxJV7nEpBmD9iPBxg1xocSEtIJ%2FRWi2S5crg9OQW5v3a1BExcuO%2BcDMy24lGskZ4y55ASJGXjdvFSZalpeAoKpZRgOyaECmvAZH8%2FtUQU2fwNYZt520snz6Sn1GvXF2XIAjb0zpTe8ylXwXgYbjdXLLA2lkb1t7rROR%2FOseQwHNTiRTPrv7RIb3vmZ9hlJPmFaBP9uXLNogTqZ8JsUYqkvyy2RraW%2FIsGD%2Fx1ZcesEkCGDWpQ08matZbyb0qbJpu4413KTBXVCe5V838ampY29Z%2F8%2F%2BjybuzLXA81NzMJ2zqb0GOqUBt0bm8%2BUxXgW5fWRZMC5rvs2he%2FZ8bMUBJRHqj68BtzUCHBSWv5Fk0XJ8XYTTU3M2AdAhUFiQGRpRjNL9XXG9o1V3%2B%2FnjwtyRp%2BXSrD9SKW96ZR0NTsURcV5h%2FRpiUZe5RAzPskDRZDmSvpHcTjT%2Bi8%2B8y5j7ufSW493fmpmcpWzWXto%2FEpVv9dcWjcpWj0UEaBG1sx8Y0uXIYfcYkizFnpuw9Jst&X-Amz-Signature=7824694aa5268d9c9745e0b9891fc0b1e9372515f5a6dcb69ea844a62cd95411&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZV5DER6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiapKGfHObcOhWSP53AHMaxtOo4qtfiVLhMdpYmh622AiEAzDwGFko3sEmwOPUlC03uLrb9hrDfhVLSI2k6Ljf3XvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5w1%2BFNqcHtL6khkSrcA3%2B9rjrH%2BKDm6cwpi3SarJv%2BgUKRvPFlaXikeRyIMVC5Hv5mFEj1RDEld6BJ%2BuSdEiz0D428muUBEgdyNJLbUKgZBHdJGtPrxPTNYldcruewAYXFtAic%2BEuwW9R7JmUNpTkd6JiHzcV8mydi8Al6ZSEnRPfqOKxT8h6KAY0vKePEvM5E0TosB1cfbK5B3zRDs%2BafScfu7XhMCzMDJe33QWJKg3OtNYEEnXgRxbNni3p1kNSirC8pIVCXtfXpYHP1tfrbWsAQz3%2Fkk4n8vY%2FayIqPvR2OajYgX4aM2F1wxdx4Alvm1FV2mbLVG4LBMP4kjwS8h7Snz%2Fudbptx9bJs%2FCxJV7nEpBmD9iPBxg1xocSEtIJ%2FRWi2S5crg9OQW5v3a1BExcuO%2BcDMy24lGskZ4y55ASJGXjdvFSZalpeAoKpZRgOyaECmvAZH8%2FtUQU2fwNYZt520snz6Sn1GvXF2XIAjb0zpTe8ylXwXgYbjdXLLA2lkb1t7rROR%2FOseQwHNTiRTPrv7RIb3vmZ9hlJPmFaBP9uXLNogTqZ8JsUYqkvyy2RraW%2FIsGD%2Fx1ZcesEkCGDWpQ08matZbyb0qbJpu4413KTBXVCe5V838ampY29Z%2F8%2F%2BjybuzLXA81NzMJ2zqb0GOqUBt0bm8%2BUxXgW5fWRZMC5rvs2he%2FZ8bMUBJRHqj68BtzUCHBSWv5Fk0XJ8XYTTU3M2AdAhUFiQGRpRjNL9XXG9o1V3%2B%2FnjwtyRp%2BXSrD9SKW96ZR0NTsURcV5h%2FRpiUZe5RAzPskDRZDmSvpHcTjT%2Bi8%2B8y5j7ufSW493fmpmcpWzWXto%2FEpVv9dcWjcpWj0UEaBG1sx8Y0uXIYfcYkizFnpuw9Jst&X-Amz-Signature=ccf4a994a567c3299ab7e5a2a6c8f08b00e88f3b9d8b27bd2da090b31655ca0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZV5DER6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiapKGfHObcOhWSP53AHMaxtOo4qtfiVLhMdpYmh622AiEAzDwGFko3sEmwOPUlC03uLrb9hrDfhVLSI2k6Ljf3XvYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5w1%2BFNqcHtL6khkSrcA3%2B9rjrH%2BKDm6cwpi3SarJv%2BgUKRvPFlaXikeRyIMVC5Hv5mFEj1RDEld6BJ%2BuSdEiz0D428muUBEgdyNJLbUKgZBHdJGtPrxPTNYldcruewAYXFtAic%2BEuwW9R7JmUNpTkd6JiHzcV8mydi8Al6ZSEnRPfqOKxT8h6KAY0vKePEvM5E0TosB1cfbK5B3zRDs%2BafScfu7XhMCzMDJe33QWJKg3OtNYEEnXgRxbNni3p1kNSirC8pIVCXtfXpYHP1tfrbWsAQz3%2Fkk4n8vY%2FayIqPvR2OajYgX4aM2F1wxdx4Alvm1FV2mbLVG4LBMP4kjwS8h7Snz%2Fudbptx9bJs%2FCxJV7nEpBmD9iPBxg1xocSEtIJ%2FRWi2S5crg9OQW5v3a1BExcuO%2BcDMy24lGskZ4y55ASJGXjdvFSZalpeAoKpZRgOyaECmvAZH8%2FtUQU2fwNYZt520snz6Sn1GvXF2XIAjb0zpTe8ylXwXgYbjdXLLA2lkb1t7rROR%2FOseQwHNTiRTPrv7RIb3vmZ9hlJPmFaBP9uXLNogTqZ8JsUYqkvyy2RraW%2FIsGD%2Fx1ZcesEkCGDWpQ08matZbyb0qbJpu4413KTBXVCe5V838ampY29Z%2F8%2F%2BjybuzLXA81NzMJ2zqb0GOqUBt0bm8%2BUxXgW5fWRZMC5rvs2he%2FZ8bMUBJRHqj68BtzUCHBSWv5Fk0XJ8XYTTU3M2AdAhUFiQGRpRjNL9XXG9o1V3%2B%2FnjwtyRp%2BXSrD9SKW96ZR0NTsURcV5h%2FRpiUZe5RAzPskDRZDmSvpHcTjT%2Bi8%2B8y5j7ufSW493fmpmcpWzWXto%2FEpVv9dcWjcpWj0UEaBG1sx8Y0uXIYfcYkizFnpuw9Jst&X-Amz-Signature=78a9649ba576b41c06a8d10ae6f296c109a60c77af65f27b72afb37f4bc451e4&X-Amz-SignedHeaders=host&x-id=GetObject)
