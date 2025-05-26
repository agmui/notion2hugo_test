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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMQKWSV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BK%2BOw0HgdXakxJWq1qCAQtdFgVC0adXU4Wzj%2FOX%2FTVAiBMLhGGAVdiIgI96TC75oCo4qiZhjzLGjMhl%2BYewe2yayr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMbk6VEkZYt4QvnLOMKtwDCD0v32dER7jW3M%2FbgivYlEji3FgPAvX1X5%2FXn0DaWl190hRyGwZrorS1gmJyGn3HdkDbaWX2C%2FFB4lR5FQs98qGRj65DVmv7Diso3pSIcAFefG8ZCbwjb1lqhPpG71wiMGxdPbq8YX%2BrWxGzgTecS4%2FWQ2jb1rRWLCl77tyyc1AK6ZU6QagWxWciIBGJLPeuVJukvfJSYq6pPaTyza%2BGgwXobITGqvli1%2B9MQuY0obXhC8dGNO1MjeGS8b5I8DTGvCHQJdsZHZclDnOuBI8Syz9WFFFkIAhyiC4zwwLsdBpbFiuHi%2FNXx8S95l1aOm4irP0lnBxKdlT4Wl5HRuzaJAFqkO4CHZi7p%2F51xs8LTUgUdqr1F%2Funkb9PVqyr6DuyTZnXqkRA2MmKy%2BvrSxcKHyWNfmdxJP3x35neTMWpbQoNW4Hmq3t7Q6J58P5qu0mlPNhVskp64c5qta274jHZcG7debQf%2FTrreW9SNrbSoSkCRjGQJxKklw59uKf%2FwmXPoTXDlrOA%2B9wcntU5IjY1hWbaN7w09g%2BrHymja%2By7V9cAY5eZesU2LtnOYS%2BUQtgLVtJ2m3ByJkvA4xa36TMjBpcsMR2f6Mecn9qnlUri7%2BGzZNMTVTxX91OjzeIwz6vTwQY6pgFbF%2FM80EJ605p3gr%2F30mmn53jyrl7k8f0%2BFPRgREy2zJr5RBrVx4ixiL%2Fwe%2BtIEZ4A4pxMVgmbIeaWTLyCcVBmbt78g%2BiqMsfTjv3IOkoPG3%2BpbPTUY81FPCU6TUJszzDNtJTXBZ53Nmsift5jcQ9B9DGiYqGeufhmfEhED2PYrWaYZO%2F8%2BYOu77LBZTxZsTkTW5nkkZN906Obney7nSNlCS%2FEmL00&X-Amz-Signature=35597a1300a01177b05fcc63c46544624f8229ff091678f7a6c13cd47ddc5220&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMQKWSV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BK%2BOw0HgdXakxJWq1qCAQtdFgVC0adXU4Wzj%2FOX%2FTVAiBMLhGGAVdiIgI96TC75oCo4qiZhjzLGjMhl%2BYewe2yayr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMbk6VEkZYt4QvnLOMKtwDCD0v32dER7jW3M%2FbgivYlEji3FgPAvX1X5%2FXn0DaWl190hRyGwZrorS1gmJyGn3HdkDbaWX2C%2FFB4lR5FQs98qGRj65DVmv7Diso3pSIcAFefG8ZCbwjb1lqhPpG71wiMGxdPbq8YX%2BrWxGzgTecS4%2FWQ2jb1rRWLCl77tyyc1AK6ZU6QagWxWciIBGJLPeuVJukvfJSYq6pPaTyza%2BGgwXobITGqvli1%2B9MQuY0obXhC8dGNO1MjeGS8b5I8DTGvCHQJdsZHZclDnOuBI8Syz9WFFFkIAhyiC4zwwLsdBpbFiuHi%2FNXx8S95l1aOm4irP0lnBxKdlT4Wl5HRuzaJAFqkO4CHZi7p%2F51xs8LTUgUdqr1F%2Funkb9PVqyr6DuyTZnXqkRA2MmKy%2BvrSxcKHyWNfmdxJP3x35neTMWpbQoNW4Hmq3t7Q6J58P5qu0mlPNhVskp64c5qta274jHZcG7debQf%2FTrreW9SNrbSoSkCRjGQJxKklw59uKf%2FwmXPoTXDlrOA%2B9wcntU5IjY1hWbaN7w09g%2BrHymja%2By7V9cAY5eZesU2LtnOYS%2BUQtgLVtJ2m3ByJkvA4xa36TMjBpcsMR2f6Mecn9qnlUri7%2BGzZNMTVTxX91OjzeIwz6vTwQY6pgFbF%2FM80EJ605p3gr%2F30mmn53jyrl7k8f0%2BFPRgREy2zJr5RBrVx4ixiL%2Fwe%2BtIEZ4A4pxMVgmbIeaWTLyCcVBmbt78g%2BiqMsfTjv3IOkoPG3%2BpbPTUY81FPCU6TUJszzDNtJTXBZ53Nmsift5jcQ9B9DGiYqGeufhmfEhED2PYrWaYZO%2F8%2BYOu77LBZTxZsTkTW5nkkZN906Obney7nSNlCS%2FEmL00&X-Amz-Signature=00fc20cf10f4703514e889cf38e94cd6e068c3b557e686056b5e652248fa1067&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMQKWSV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BK%2BOw0HgdXakxJWq1qCAQtdFgVC0adXU4Wzj%2FOX%2FTVAiBMLhGGAVdiIgI96TC75oCo4qiZhjzLGjMhl%2BYewe2yayr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMbk6VEkZYt4QvnLOMKtwDCD0v32dER7jW3M%2FbgivYlEji3FgPAvX1X5%2FXn0DaWl190hRyGwZrorS1gmJyGn3HdkDbaWX2C%2FFB4lR5FQs98qGRj65DVmv7Diso3pSIcAFefG8ZCbwjb1lqhPpG71wiMGxdPbq8YX%2BrWxGzgTecS4%2FWQ2jb1rRWLCl77tyyc1AK6ZU6QagWxWciIBGJLPeuVJukvfJSYq6pPaTyza%2BGgwXobITGqvli1%2B9MQuY0obXhC8dGNO1MjeGS8b5I8DTGvCHQJdsZHZclDnOuBI8Syz9WFFFkIAhyiC4zwwLsdBpbFiuHi%2FNXx8S95l1aOm4irP0lnBxKdlT4Wl5HRuzaJAFqkO4CHZi7p%2F51xs8LTUgUdqr1F%2Funkb9PVqyr6DuyTZnXqkRA2MmKy%2BvrSxcKHyWNfmdxJP3x35neTMWpbQoNW4Hmq3t7Q6J58P5qu0mlPNhVskp64c5qta274jHZcG7debQf%2FTrreW9SNrbSoSkCRjGQJxKklw59uKf%2FwmXPoTXDlrOA%2B9wcntU5IjY1hWbaN7w09g%2BrHymja%2By7V9cAY5eZesU2LtnOYS%2BUQtgLVtJ2m3ByJkvA4xa36TMjBpcsMR2f6Mecn9qnlUri7%2BGzZNMTVTxX91OjzeIwz6vTwQY6pgFbF%2FM80EJ605p3gr%2F30mmn53jyrl7k8f0%2BFPRgREy2zJr5RBrVx4ixiL%2Fwe%2BtIEZ4A4pxMVgmbIeaWTLyCcVBmbt78g%2BiqMsfTjv3IOkoPG3%2BpbPTUY81FPCU6TUJszzDNtJTXBZ53Nmsift5jcQ9B9DGiYqGeufhmfEhED2PYrWaYZO%2F8%2BYOu77LBZTxZsTkTW5nkkZN906Obney7nSNlCS%2FEmL00&X-Amz-Signature=df5152e5f46ec69ebc96d6e980874f1c215d543816ffa1da85d4c743ceca563d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMQKWSV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BK%2BOw0HgdXakxJWq1qCAQtdFgVC0adXU4Wzj%2FOX%2FTVAiBMLhGGAVdiIgI96TC75oCo4qiZhjzLGjMhl%2BYewe2yayr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMbk6VEkZYt4QvnLOMKtwDCD0v32dER7jW3M%2FbgivYlEji3FgPAvX1X5%2FXn0DaWl190hRyGwZrorS1gmJyGn3HdkDbaWX2C%2FFB4lR5FQs98qGRj65DVmv7Diso3pSIcAFefG8ZCbwjb1lqhPpG71wiMGxdPbq8YX%2BrWxGzgTecS4%2FWQ2jb1rRWLCl77tyyc1AK6ZU6QagWxWciIBGJLPeuVJukvfJSYq6pPaTyza%2BGgwXobITGqvli1%2B9MQuY0obXhC8dGNO1MjeGS8b5I8DTGvCHQJdsZHZclDnOuBI8Syz9WFFFkIAhyiC4zwwLsdBpbFiuHi%2FNXx8S95l1aOm4irP0lnBxKdlT4Wl5HRuzaJAFqkO4CHZi7p%2F51xs8LTUgUdqr1F%2Funkb9PVqyr6DuyTZnXqkRA2MmKy%2BvrSxcKHyWNfmdxJP3x35neTMWpbQoNW4Hmq3t7Q6J58P5qu0mlPNhVskp64c5qta274jHZcG7debQf%2FTrreW9SNrbSoSkCRjGQJxKklw59uKf%2FwmXPoTXDlrOA%2B9wcntU5IjY1hWbaN7w09g%2BrHymja%2By7V9cAY5eZesU2LtnOYS%2BUQtgLVtJ2m3ByJkvA4xa36TMjBpcsMR2f6Mecn9qnlUri7%2BGzZNMTVTxX91OjzeIwz6vTwQY6pgFbF%2FM80EJ605p3gr%2F30mmn53jyrl7k8f0%2BFPRgREy2zJr5RBrVx4ixiL%2Fwe%2BtIEZ4A4pxMVgmbIeaWTLyCcVBmbt78g%2BiqMsfTjv3IOkoPG3%2BpbPTUY81FPCU6TUJszzDNtJTXBZ53Nmsift5jcQ9B9DGiYqGeufhmfEhED2PYrWaYZO%2F8%2BYOu77LBZTxZsTkTW5nkkZN906Obney7nSNlCS%2FEmL00&X-Amz-Signature=37ca10fa3ab2062f332d8a7ff02657716a3a68989f5c93bc2fa92efd7c205c25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMQKWSV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BK%2BOw0HgdXakxJWq1qCAQtdFgVC0adXU4Wzj%2FOX%2FTVAiBMLhGGAVdiIgI96TC75oCo4qiZhjzLGjMhl%2BYewe2yayr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMbk6VEkZYt4QvnLOMKtwDCD0v32dER7jW3M%2FbgivYlEji3FgPAvX1X5%2FXn0DaWl190hRyGwZrorS1gmJyGn3HdkDbaWX2C%2FFB4lR5FQs98qGRj65DVmv7Diso3pSIcAFefG8ZCbwjb1lqhPpG71wiMGxdPbq8YX%2BrWxGzgTecS4%2FWQ2jb1rRWLCl77tyyc1AK6ZU6QagWxWciIBGJLPeuVJukvfJSYq6pPaTyza%2BGgwXobITGqvli1%2B9MQuY0obXhC8dGNO1MjeGS8b5I8DTGvCHQJdsZHZclDnOuBI8Syz9WFFFkIAhyiC4zwwLsdBpbFiuHi%2FNXx8S95l1aOm4irP0lnBxKdlT4Wl5HRuzaJAFqkO4CHZi7p%2F51xs8LTUgUdqr1F%2Funkb9PVqyr6DuyTZnXqkRA2MmKy%2BvrSxcKHyWNfmdxJP3x35neTMWpbQoNW4Hmq3t7Q6J58P5qu0mlPNhVskp64c5qta274jHZcG7debQf%2FTrreW9SNrbSoSkCRjGQJxKklw59uKf%2FwmXPoTXDlrOA%2B9wcntU5IjY1hWbaN7w09g%2BrHymja%2By7V9cAY5eZesU2LtnOYS%2BUQtgLVtJ2m3ByJkvA4xa36TMjBpcsMR2f6Mecn9qnlUri7%2BGzZNMTVTxX91OjzeIwz6vTwQY6pgFbF%2FM80EJ605p3gr%2F30mmn53jyrl7k8f0%2BFPRgREy2zJr5RBrVx4ixiL%2Fwe%2BtIEZ4A4pxMVgmbIeaWTLyCcVBmbt78g%2BiqMsfTjv3IOkoPG3%2BpbPTUY81FPCU6TUJszzDNtJTXBZ53Nmsift5jcQ9B9DGiYqGeufhmfEhED2PYrWaYZO%2F8%2BYOu77LBZTxZsTkTW5nkkZN906Obney7nSNlCS%2FEmL00&X-Amz-Signature=79af93add0857fab04763242aebe680dab8b2e6420462386b2227f8dc2783f44&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMQKWSV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BK%2BOw0HgdXakxJWq1qCAQtdFgVC0adXU4Wzj%2FOX%2FTVAiBMLhGGAVdiIgI96TC75oCo4qiZhjzLGjMhl%2BYewe2yayr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMbk6VEkZYt4QvnLOMKtwDCD0v32dER7jW3M%2FbgivYlEji3FgPAvX1X5%2FXn0DaWl190hRyGwZrorS1gmJyGn3HdkDbaWX2C%2FFB4lR5FQs98qGRj65DVmv7Diso3pSIcAFefG8ZCbwjb1lqhPpG71wiMGxdPbq8YX%2BrWxGzgTecS4%2FWQ2jb1rRWLCl77tyyc1AK6ZU6QagWxWciIBGJLPeuVJukvfJSYq6pPaTyza%2BGgwXobITGqvli1%2B9MQuY0obXhC8dGNO1MjeGS8b5I8DTGvCHQJdsZHZclDnOuBI8Syz9WFFFkIAhyiC4zwwLsdBpbFiuHi%2FNXx8S95l1aOm4irP0lnBxKdlT4Wl5HRuzaJAFqkO4CHZi7p%2F51xs8LTUgUdqr1F%2Funkb9PVqyr6DuyTZnXqkRA2MmKy%2BvrSxcKHyWNfmdxJP3x35neTMWpbQoNW4Hmq3t7Q6J58P5qu0mlPNhVskp64c5qta274jHZcG7debQf%2FTrreW9SNrbSoSkCRjGQJxKklw59uKf%2FwmXPoTXDlrOA%2B9wcntU5IjY1hWbaN7w09g%2BrHymja%2By7V9cAY5eZesU2LtnOYS%2BUQtgLVtJ2m3ByJkvA4xa36TMjBpcsMR2f6Mecn9qnlUri7%2BGzZNMTVTxX91OjzeIwz6vTwQY6pgFbF%2FM80EJ605p3gr%2F30mmn53jyrl7k8f0%2BFPRgREy2zJr5RBrVx4ixiL%2Fwe%2BtIEZ4A4pxMVgmbIeaWTLyCcVBmbt78g%2BiqMsfTjv3IOkoPG3%2BpbPTUY81FPCU6TUJszzDNtJTXBZ53Nmsift5jcQ9B9DGiYqGeufhmfEhED2PYrWaYZO%2F8%2BYOu77LBZTxZsTkTW5nkkZN906Obney7nSNlCS%2FEmL00&X-Amz-Signature=0355e5ce92c6c77d0d7eb37c5c5020e69542c5e4430a2427eaeba860e1ef31c7&X-Amz-SignedHeaders=host&x-id=GetObject)
