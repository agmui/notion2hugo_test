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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4BDRM6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFFAqwtNRXB%2F%2B73hzUih9ZqxzefWloQLqdkFhsc5cy%2BdAiEAkftsH7GC7PS0C%2BSqoFURo7XCiWPmjfkAI1jYIMlSypQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWaHDeJHto1LaKGAircA94sYzQhIaGMresoQDL7uqiZipt%2FD87xpEJ3NTgkMaPQacfWjFhkwDn1w67bREObXar3BLop5QXtD6hxOFM%2Fq4eYK%2B9F8BGFeY%2FuJyDiYXUzTEJu94BI7K1Lg3j2YLi44bXLBaf7zIf4U8%2BTE4oWFJqKC4ZV62blr59GQan2kEO%2BGYFv8FxzWXfoOEXCqCDV7Hkawleyf7zQJG8MV6hwINqkXyu6qRG7MB3OwU1Q9mJocj27KhKgiNtUoFMwMHxMQ06i1FapflTBIHOJx%2Fg07Kx638UiAbbD5H9wdKOg%2BmktZP9l8oMQt3fZ1ovHQLIH8gv6Ng00CLShsnEqvUx7vZS7cA51IoIbpsOPmx1Ljlx%2BHWw8DL0oX%2FBMioOO8jNgylrVlO2nuM9wWKQlGdtVx6mtdohVLeL0uKuT61d2B508eP8D5Hw4emsze03ULlx%2Bj5TY%2BUroejin%2F2si44Nz7IFr3oYtg%2B2xp3k8YtI0TXD9kEE7I65ivzurOKcrbPUU8ITEkeAZOsSrPmc%2BKn%2FEMpnDJQDmTmJvkrI8vfR%2FHvhvXrBOl5fnkGTxu8Ixs14Dm59%2FI9ydxp1Sg%2BqDukSp0L2%2Fpt7VBytbCWgHejYvTMGWVmYYL8FG3cHYxPosMJbk8b4GOqUBDIaq82vG%2B4iBYFcnH8abvnbfeiYEwlw4X8i%2F8VTmPOHsLdgr%2F1v1pbwoJ1pvvsR0ZsQE8dz5IlFYr9H8SoNEXn%2BiBPCCH4OFUfoJbG%2Bn72ca%2F9eZwVf0658hUnqWBqMPiBgYK5qlZNzYNbxfybWngkoFYhLoncwb7pg%2FXHnLoCUrSmuCfJJIcoFyh8BsWol6hKTQTOgymPOZIyX8KZlPqer%2FAoUA&X-Amz-Signature=7ee9cd92f791fd20262a6995c8cd431f612aa536c1982ce19e413c72e7ce6be0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4BDRM6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFFAqwtNRXB%2F%2B73hzUih9ZqxzefWloQLqdkFhsc5cy%2BdAiEAkftsH7GC7PS0C%2BSqoFURo7XCiWPmjfkAI1jYIMlSypQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWaHDeJHto1LaKGAircA94sYzQhIaGMresoQDL7uqiZipt%2FD87xpEJ3NTgkMaPQacfWjFhkwDn1w67bREObXar3BLop5QXtD6hxOFM%2Fq4eYK%2B9F8BGFeY%2FuJyDiYXUzTEJu94BI7K1Lg3j2YLi44bXLBaf7zIf4U8%2BTE4oWFJqKC4ZV62blr59GQan2kEO%2BGYFv8FxzWXfoOEXCqCDV7Hkawleyf7zQJG8MV6hwINqkXyu6qRG7MB3OwU1Q9mJocj27KhKgiNtUoFMwMHxMQ06i1FapflTBIHOJx%2Fg07Kx638UiAbbD5H9wdKOg%2BmktZP9l8oMQt3fZ1ovHQLIH8gv6Ng00CLShsnEqvUx7vZS7cA51IoIbpsOPmx1Ljlx%2BHWw8DL0oX%2FBMioOO8jNgylrVlO2nuM9wWKQlGdtVx6mtdohVLeL0uKuT61d2B508eP8D5Hw4emsze03ULlx%2Bj5TY%2BUroejin%2F2si44Nz7IFr3oYtg%2B2xp3k8YtI0TXD9kEE7I65ivzurOKcrbPUU8ITEkeAZOsSrPmc%2BKn%2FEMpnDJQDmTmJvkrI8vfR%2FHvhvXrBOl5fnkGTxu8Ixs14Dm59%2FI9ydxp1Sg%2BqDukSp0L2%2Fpt7VBytbCWgHejYvTMGWVmYYL8FG3cHYxPosMJbk8b4GOqUBDIaq82vG%2B4iBYFcnH8abvnbfeiYEwlw4X8i%2F8VTmPOHsLdgr%2F1v1pbwoJ1pvvsR0ZsQE8dz5IlFYr9H8SoNEXn%2BiBPCCH4OFUfoJbG%2Bn72ca%2F9eZwVf0658hUnqWBqMPiBgYK5qlZNzYNbxfybWngkoFYhLoncwb7pg%2FXHnLoCUrSmuCfJJIcoFyh8BsWol6hKTQTOgymPOZIyX8KZlPqer%2FAoUA&X-Amz-Signature=2cc6e7a59ee96026c5968b8c76692b92d6b13ba523b30f041c4b8949b517c8c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4BDRM6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFFAqwtNRXB%2F%2B73hzUih9ZqxzefWloQLqdkFhsc5cy%2BdAiEAkftsH7GC7PS0C%2BSqoFURo7XCiWPmjfkAI1jYIMlSypQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWaHDeJHto1LaKGAircA94sYzQhIaGMresoQDL7uqiZipt%2FD87xpEJ3NTgkMaPQacfWjFhkwDn1w67bREObXar3BLop5QXtD6hxOFM%2Fq4eYK%2B9F8BGFeY%2FuJyDiYXUzTEJu94BI7K1Lg3j2YLi44bXLBaf7zIf4U8%2BTE4oWFJqKC4ZV62blr59GQan2kEO%2BGYFv8FxzWXfoOEXCqCDV7Hkawleyf7zQJG8MV6hwINqkXyu6qRG7MB3OwU1Q9mJocj27KhKgiNtUoFMwMHxMQ06i1FapflTBIHOJx%2Fg07Kx638UiAbbD5H9wdKOg%2BmktZP9l8oMQt3fZ1ovHQLIH8gv6Ng00CLShsnEqvUx7vZS7cA51IoIbpsOPmx1Ljlx%2BHWw8DL0oX%2FBMioOO8jNgylrVlO2nuM9wWKQlGdtVx6mtdohVLeL0uKuT61d2B508eP8D5Hw4emsze03ULlx%2Bj5TY%2BUroejin%2F2si44Nz7IFr3oYtg%2B2xp3k8YtI0TXD9kEE7I65ivzurOKcrbPUU8ITEkeAZOsSrPmc%2BKn%2FEMpnDJQDmTmJvkrI8vfR%2FHvhvXrBOl5fnkGTxu8Ixs14Dm59%2FI9ydxp1Sg%2BqDukSp0L2%2Fpt7VBytbCWgHejYvTMGWVmYYL8FG3cHYxPosMJbk8b4GOqUBDIaq82vG%2B4iBYFcnH8abvnbfeiYEwlw4X8i%2F8VTmPOHsLdgr%2F1v1pbwoJ1pvvsR0ZsQE8dz5IlFYr9H8SoNEXn%2BiBPCCH4OFUfoJbG%2Bn72ca%2F9eZwVf0658hUnqWBqMPiBgYK5qlZNzYNbxfybWngkoFYhLoncwb7pg%2FXHnLoCUrSmuCfJJIcoFyh8BsWol6hKTQTOgymPOZIyX8KZlPqer%2FAoUA&X-Amz-Signature=7cf0e4962bccea8f635f93d0e9dd592709a715aae8c1a1721e065c1f2ae8064d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4BDRM6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFFAqwtNRXB%2F%2B73hzUih9ZqxzefWloQLqdkFhsc5cy%2BdAiEAkftsH7GC7PS0C%2BSqoFURo7XCiWPmjfkAI1jYIMlSypQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWaHDeJHto1LaKGAircA94sYzQhIaGMresoQDL7uqiZipt%2FD87xpEJ3NTgkMaPQacfWjFhkwDn1w67bREObXar3BLop5QXtD6hxOFM%2Fq4eYK%2B9F8BGFeY%2FuJyDiYXUzTEJu94BI7K1Lg3j2YLi44bXLBaf7zIf4U8%2BTE4oWFJqKC4ZV62blr59GQan2kEO%2BGYFv8FxzWXfoOEXCqCDV7Hkawleyf7zQJG8MV6hwINqkXyu6qRG7MB3OwU1Q9mJocj27KhKgiNtUoFMwMHxMQ06i1FapflTBIHOJx%2Fg07Kx638UiAbbD5H9wdKOg%2BmktZP9l8oMQt3fZ1ovHQLIH8gv6Ng00CLShsnEqvUx7vZS7cA51IoIbpsOPmx1Ljlx%2BHWw8DL0oX%2FBMioOO8jNgylrVlO2nuM9wWKQlGdtVx6mtdohVLeL0uKuT61d2B508eP8D5Hw4emsze03ULlx%2Bj5TY%2BUroejin%2F2si44Nz7IFr3oYtg%2B2xp3k8YtI0TXD9kEE7I65ivzurOKcrbPUU8ITEkeAZOsSrPmc%2BKn%2FEMpnDJQDmTmJvkrI8vfR%2FHvhvXrBOl5fnkGTxu8Ixs14Dm59%2FI9ydxp1Sg%2BqDukSp0L2%2Fpt7VBytbCWgHejYvTMGWVmYYL8FG3cHYxPosMJbk8b4GOqUBDIaq82vG%2B4iBYFcnH8abvnbfeiYEwlw4X8i%2F8VTmPOHsLdgr%2F1v1pbwoJ1pvvsR0ZsQE8dz5IlFYr9H8SoNEXn%2BiBPCCH4OFUfoJbG%2Bn72ca%2F9eZwVf0658hUnqWBqMPiBgYK5qlZNzYNbxfybWngkoFYhLoncwb7pg%2FXHnLoCUrSmuCfJJIcoFyh8BsWol6hKTQTOgymPOZIyX8KZlPqer%2FAoUA&X-Amz-Signature=1465a2fcaac91ca0466aec968c07d224db959cb459bc7c346a56d48a25141ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4BDRM6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFFAqwtNRXB%2F%2B73hzUih9ZqxzefWloQLqdkFhsc5cy%2BdAiEAkftsH7GC7PS0C%2BSqoFURo7XCiWPmjfkAI1jYIMlSypQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWaHDeJHto1LaKGAircA94sYzQhIaGMresoQDL7uqiZipt%2FD87xpEJ3NTgkMaPQacfWjFhkwDn1w67bREObXar3BLop5QXtD6hxOFM%2Fq4eYK%2B9F8BGFeY%2FuJyDiYXUzTEJu94BI7K1Lg3j2YLi44bXLBaf7zIf4U8%2BTE4oWFJqKC4ZV62blr59GQan2kEO%2BGYFv8FxzWXfoOEXCqCDV7Hkawleyf7zQJG8MV6hwINqkXyu6qRG7MB3OwU1Q9mJocj27KhKgiNtUoFMwMHxMQ06i1FapflTBIHOJx%2Fg07Kx638UiAbbD5H9wdKOg%2BmktZP9l8oMQt3fZ1ovHQLIH8gv6Ng00CLShsnEqvUx7vZS7cA51IoIbpsOPmx1Ljlx%2BHWw8DL0oX%2FBMioOO8jNgylrVlO2nuM9wWKQlGdtVx6mtdohVLeL0uKuT61d2B508eP8D5Hw4emsze03ULlx%2Bj5TY%2BUroejin%2F2si44Nz7IFr3oYtg%2B2xp3k8YtI0TXD9kEE7I65ivzurOKcrbPUU8ITEkeAZOsSrPmc%2BKn%2FEMpnDJQDmTmJvkrI8vfR%2FHvhvXrBOl5fnkGTxu8Ixs14Dm59%2FI9ydxp1Sg%2BqDukSp0L2%2Fpt7VBytbCWgHejYvTMGWVmYYL8FG3cHYxPosMJbk8b4GOqUBDIaq82vG%2B4iBYFcnH8abvnbfeiYEwlw4X8i%2F8VTmPOHsLdgr%2F1v1pbwoJ1pvvsR0ZsQE8dz5IlFYr9H8SoNEXn%2BiBPCCH4OFUfoJbG%2Bn72ca%2F9eZwVf0658hUnqWBqMPiBgYK5qlZNzYNbxfybWngkoFYhLoncwb7pg%2FXHnLoCUrSmuCfJJIcoFyh8BsWol6hKTQTOgymPOZIyX8KZlPqer%2FAoUA&X-Amz-Signature=942191113cf4b0ce8d577af570f1e1c457b71c1984b674df36090dafb9f87087&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4BDRM6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIFFAqwtNRXB%2F%2B73hzUih9ZqxzefWloQLqdkFhsc5cy%2BdAiEAkftsH7GC7PS0C%2BSqoFURo7XCiWPmjfkAI1jYIMlSypQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNWaHDeJHto1LaKGAircA94sYzQhIaGMresoQDL7uqiZipt%2FD87xpEJ3NTgkMaPQacfWjFhkwDn1w67bREObXar3BLop5QXtD6hxOFM%2Fq4eYK%2B9F8BGFeY%2FuJyDiYXUzTEJu94BI7K1Lg3j2YLi44bXLBaf7zIf4U8%2BTE4oWFJqKC4ZV62blr59GQan2kEO%2BGYFv8FxzWXfoOEXCqCDV7Hkawleyf7zQJG8MV6hwINqkXyu6qRG7MB3OwU1Q9mJocj27KhKgiNtUoFMwMHxMQ06i1FapflTBIHOJx%2Fg07Kx638UiAbbD5H9wdKOg%2BmktZP9l8oMQt3fZ1ovHQLIH8gv6Ng00CLShsnEqvUx7vZS7cA51IoIbpsOPmx1Ljlx%2BHWw8DL0oX%2FBMioOO8jNgylrVlO2nuM9wWKQlGdtVx6mtdohVLeL0uKuT61d2B508eP8D5Hw4emsze03ULlx%2Bj5TY%2BUroejin%2F2si44Nz7IFr3oYtg%2B2xp3k8YtI0TXD9kEE7I65ivzurOKcrbPUU8ITEkeAZOsSrPmc%2BKn%2FEMpnDJQDmTmJvkrI8vfR%2FHvhvXrBOl5fnkGTxu8Ixs14Dm59%2FI9ydxp1Sg%2BqDukSp0L2%2Fpt7VBytbCWgHejYvTMGWVmYYL8FG3cHYxPosMJbk8b4GOqUBDIaq82vG%2B4iBYFcnH8abvnbfeiYEwlw4X8i%2F8VTmPOHsLdgr%2F1v1pbwoJ1pvvsR0ZsQE8dz5IlFYr9H8SoNEXn%2BiBPCCH4OFUfoJbG%2Bn72ca%2F9eZwVf0658hUnqWBqMPiBgYK5qlZNzYNbxfybWngkoFYhLoncwb7pg%2FXHnLoCUrSmuCfJJIcoFyh8BsWol6hKTQTOgymPOZIyX8KZlPqer%2FAoUA&X-Amz-Signature=9b4d24526038369bd62afd37f2dea56f490f7e6c0370caee64c1821fef317919&X-Amz-SignedHeaders=host&x-id=GetObject)
