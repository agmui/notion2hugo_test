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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW4G2ZL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRiowLZ%2FOiDnS9%2B2gmaGaaiU248R5bGZ2V%2F22pyTrVwIgQ2F1uzfCv4AbyjuQO1PXM1OioKQrysMKMVi3RxvNgRoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP5vUA0UimiiQ1A%2FFircA7aL8W3Cy8ru6VB3mEfvEn%2FzKZvXHlGAkofXK7VHSgGLYJD6tuoOWLEx6AP1xXmr%2BUOgL4LzC4WtVPIahohmu9KtRvCS9FBcdnpCu4gMxs73FdssksDk9e2ufU9sdFsq6WIdi31mt6koTorkwVPgolJzejy2CMZI1pxwp71RqeZZqL098uuC54FBqAwRKlzHKYPQ%2BxUPJQFrqIcvpGvxs6CS3bSem0%2BWpdh6qjIHEou63IGPlpaG25aGq8C0fnBG%2FRxfKA%2BK21pAhLx4%2Fpa%2BhFGlZg9vdElrcGh4t29GQ0iU5FIjUSfZ8c3vWbo7ldb6nBAt3DovR1BbBvb3qWoG4lQO4zlajI7YH0y97daXgEdScN%2FtcShKoJwMVyuM0NVf5G%2BY4FzCnXQ2G7nQkLuM1ZOTfc%2BlcBLcBQ1DNdaE%2FJD9YJq8IbZpzOkIW6X0Sv5s05e4EqqHVWGj0lXd73Y57JFcBR1C9lvRPaW3WVMg8nAjW09ARzdNHop6d6gM%2F3bqVDRPusvq6pkvJBplVmIcJKj88%2FhWAq6GqVM5nTcIUmwyyBmJZSu4xlioaOX%2BGgEWz6QPIR%2BGA57eJXc825xdeQXFjJ2k1a%2F4KRBieAtGJbV3SqJCyJRvHyAA%2FcL%2FMO2I4b4GOqUB7B2%2FJgArKw4SSu6nQ2AILN9%2B6wF5fYr9xBUbezGRRw%2Fb%2FyUs5N%2FGR%2Bn9LexP4idJjdrVGdgwj7Tfyf1Ntqufd7jjEmkUCuzFG1N4NBroKWuR8c%2FQ51uVCG0pKEDYPTyQns14hK7WbNuLMdd6372WO94hYMtKKikkXLTT93I4kR23A57xRwFLhgIMiVLMf%2BDn3FY55eYC7yfF%2FU3xJJZKMJRkI9oq&X-Amz-Signature=ebc8135221905d2805348584b2eba77484d7dffe7d2210d56acba5e7690fa537&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW4G2ZL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRiowLZ%2FOiDnS9%2B2gmaGaaiU248R5bGZ2V%2F22pyTrVwIgQ2F1uzfCv4AbyjuQO1PXM1OioKQrysMKMVi3RxvNgRoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP5vUA0UimiiQ1A%2FFircA7aL8W3Cy8ru6VB3mEfvEn%2FzKZvXHlGAkofXK7VHSgGLYJD6tuoOWLEx6AP1xXmr%2BUOgL4LzC4WtVPIahohmu9KtRvCS9FBcdnpCu4gMxs73FdssksDk9e2ufU9sdFsq6WIdi31mt6koTorkwVPgolJzejy2CMZI1pxwp71RqeZZqL098uuC54FBqAwRKlzHKYPQ%2BxUPJQFrqIcvpGvxs6CS3bSem0%2BWpdh6qjIHEou63IGPlpaG25aGq8C0fnBG%2FRxfKA%2BK21pAhLx4%2Fpa%2BhFGlZg9vdElrcGh4t29GQ0iU5FIjUSfZ8c3vWbo7ldb6nBAt3DovR1BbBvb3qWoG4lQO4zlajI7YH0y97daXgEdScN%2FtcShKoJwMVyuM0NVf5G%2BY4FzCnXQ2G7nQkLuM1ZOTfc%2BlcBLcBQ1DNdaE%2FJD9YJq8IbZpzOkIW6X0Sv5s05e4EqqHVWGj0lXd73Y57JFcBR1C9lvRPaW3WVMg8nAjW09ARzdNHop6d6gM%2F3bqVDRPusvq6pkvJBplVmIcJKj88%2FhWAq6GqVM5nTcIUmwyyBmJZSu4xlioaOX%2BGgEWz6QPIR%2BGA57eJXc825xdeQXFjJ2k1a%2F4KRBieAtGJbV3SqJCyJRvHyAA%2FcL%2FMO2I4b4GOqUB7B2%2FJgArKw4SSu6nQ2AILN9%2B6wF5fYr9xBUbezGRRw%2Fb%2FyUs5N%2FGR%2Bn9LexP4idJjdrVGdgwj7Tfyf1Ntqufd7jjEmkUCuzFG1N4NBroKWuR8c%2FQ51uVCG0pKEDYPTyQns14hK7WbNuLMdd6372WO94hYMtKKikkXLTT93I4kR23A57xRwFLhgIMiVLMf%2BDn3FY55eYC7yfF%2FU3xJJZKMJRkI9oq&X-Amz-Signature=288cee22cf2563aeab5fbe4030d90c2a99c3ddf3c8e1ead65fc3b1ec2281ec55&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW4G2ZL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRiowLZ%2FOiDnS9%2B2gmaGaaiU248R5bGZ2V%2F22pyTrVwIgQ2F1uzfCv4AbyjuQO1PXM1OioKQrysMKMVi3RxvNgRoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP5vUA0UimiiQ1A%2FFircA7aL8W3Cy8ru6VB3mEfvEn%2FzKZvXHlGAkofXK7VHSgGLYJD6tuoOWLEx6AP1xXmr%2BUOgL4LzC4WtVPIahohmu9KtRvCS9FBcdnpCu4gMxs73FdssksDk9e2ufU9sdFsq6WIdi31mt6koTorkwVPgolJzejy2CMZI1pxwp71RqeZZqL098uuC54FBqAwRKlzHKYPQ%2BxUPJQFrqIcvpGvxs6CS3bSem0%2BWpdh6qjIHEou63IGPlpaG25aGq8C0fnBG%2FRxfKA%2BK21pAhLx4%2Fpa%2BhFGlZg9vdElrcGh4t29GQ0iU5FIjUSfZ8c3vWbo7ldb6nBAt3DovR1BbBvb3qWoG4lQO4zlajI7YH0y97daXgEdScN%2FtcShKoJwMVyuM0NVf5G%2BY4FzCnXQ2G7nQkLuM1ZOTfc%2BlcBLcBQ1DNdaE%2FJD9YJq8IbZpzOkIW6X0Sv5s05e4EqqHVWGj0lXd73Y57JFcBR1C9lvRPaW3WVMg8nAjW09ARzdNHop6d6gM%2F3bqVDRPusvq6pkvJBplVmIcJKj88%2FhWAq6GqVM5nTcIUmwyyBmJZSu4xlioaOX%2BGgEWz6QPIR%2BGA57eJXc825xdeQXFjJ2k1a%2F4KRBieAtGJbV3SqJCyJRvHyAA%2FcL%2FMO2I4b4GOqUB7B2%2FJgArKw4SSu6nQ2AILN9%2B6wF5fYr9xBUbezGRRw%2Fb%2FyUs5N%2FGR%2Bn9LexP4idJjdrVGdgwj7Tfyf1Ntqufd7jjEmkUCuzFG1N4NBroKWuR8c%2FQ51uVCG0pKEDYPTyQns14hK7WbNuLMdd6372WO94hYMtKKikkXLTT93I4kR23A57xRwFLhgIMiVLMf%2BDn3FY55eYC7yfF%2FU3xJJZKMJRkI9oq&X-Amz-Signature=f120dc0fcaf7b208fbdfbda50193d5c915c255fd8675304d8094315d15d036a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW4G2ZL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRiowLZ%2FOiDnS9%2B2gmaGaaiU248R5bGZ2V%2F22pyTrVwIgQ2F1uzfCv4AbyjuQO1PXM1OioKQrysMKMVi3RxvNgRoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP5vUA0UimiiQ1A%2FFircA7aL8W3Cy8ru6VB3mEfvEn%2FzKZvXHlGAkofXK7VHSgGLYJD6tuoOWLEx6AP1xXmr%2BUOgL4LzC4WtVPIahohmu9KtRvCS9FBcdnpCu4gMxs73FdssksDk9e2ufU9sdFsq6WIdi31mt6koTorkwVPgolJzejy2CMZI1pxwp71RqeZZqL098uuC54FBqAwRKlzHKYPQ%2BxUPJQFrqIcvpGvxs6CS3bSem0%2BWpdh6qjIHEou63IGPlpaG25aGq8C0fnBG%2FRxfKA%2BK21pAhLx4%2Fpa%2BhFGlZg9vdElrcGh4t29GQ0iU5FIjUSfZ8c3vWbo7ldb6nBAt3DovR1BbBvb3qWoG4lQO4zlajI7YH0y97daXgEdScN%2FtcShKoJwMVyuM0NVf5G%2BY4FzCnXQ2G7nQkLuM1ZOTfc%2BlcBLcBQ1DNdaE%2FJD9YJq8IbZpzOkIW6X0Sv5s05e4EqqHVWGj0lXd73Y57JFcBR1C9lvRPaW3WVMg8nAjW09ARzdNHop6d6gM%2F3bqVDRPusvq6pkvJBplVmIcJKj88%2FhWAq6GqVM5nTcIUmwyyBmJZSu4xlioaOX%2BGgEWz6QPIR%2BGA57eJXc825xdeQXFjJ2k1a%2F4KRBieAtGJbV3SqJCyJRvHyAA%2FcL%2FMO2I4b4GOqUB7B2%2FJgArKw4SSu6nQ2AILN9%2B6wF5fYr9xBUbezGRRw%2Fb%2FyUs5N%2FGR%2Bn9LexP4idJjdrVGdgwj7Tfyf1Ntqufd7jjEmkUCuzFG1N4NBroKWuR8c%2FQ51uVCG0pKEDYPTyQns14hK7WbNuLMdd6372WO94hYMtKKikkXLTT93I4kR23A57xRwFLhgIMiVLMf%2BDn3FY55eYC7yfF%2FU3xJJZKMJRkI9oq&X-Amz-Signature=f9a55325e51cb43fb286d76281ba94f16e03e65e265fe97bfebd37195d1a54fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW4G2ZL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRiowLZ%2FOiDnS9%2B2gmaGaaiU248R5bGZ2V%2F22pyTrVwIgQ2F1uzfCv4AbyjuQO1PXM1OioKQrysMKMVi3RxvNgRoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP5vUA0UimiiQ1A%2FFircA7aL8W3Cy8ru6VB3mEfvEn%2FzKZvXHlGAkofXK7VHSgGLYJD6tuoOWLEx6AP1xXmr%2BUOgL4LzC4WtVPIahohmu9KtRvCS9FBcdnpCu4gMxs73FdssksDk9e2ufU9sdFsq6WIdi31mt6koTorkwVPgolJzejy2CMZI1pxwp71RqeZZqL098uuC54FBqAwRKlzHKYPQ%2BxUPJQFrqIcvpGvxs6CS3bSem0%2BWpdh6qjIHEou63IGPlpaG25aGq8C0fnBG%2FRxfKA%2BK21pAhLx4%2Fpa%2BhFGlZg9vdElrcGh4t29GQ0iU5FIjUSfZ8c3vWbo7ldb6nBAt3DovR1BbBvb3qWoG4lQO4zlajI7YH0y97daXgEdScN%2FtcShKoJwMVyuM0NVf5G%2BY4FzCnXQ2G7nQkLuM1ZOTfc%2BlcBLcBQ1DNdaE%2FJD9YJq8IbZpzOkIW6X0Sv5s05e4EqqHVWGj0lXd73Y57JFcBR1C9lvRPaW3WVMg8nAjW09ARzdNHop6d6gM%2F3bqVDRPusvq6pkvJBplVmIcJKj88%2FhWAq6GqVM5nTcIUmwyyBmJZSu4xlioaOX%2BGgEWz6QPIR%2BGA57eJXc825xdeQXFjJ2k1a%2F4KRBieAtGJbV3SqJCyJRvHyAA%2FcL%2FMO2I4b4GOqUB7B2%2FJgArKw4SSu6nQ2AILN9%2B6wF5fYr9xBUbezGRRw%2Fb%2FyUs5N%2FGR%2Bn9LexP4idJjdrVGdgwj7Tfyf1Ntqufd7jjEmkUCuzFG1N4NBroKWuR8c%2FQ51uVCG0pKEDYPTyQns14hK7WbNuLMdd6372WO94hYMtKKikkXLTT93I4kR23A57xRwFLhgIMiVLMf%2BDn3FY55eYC7yfF%2FU3xJJZKMJRkI9oq&X-Amz-Signature=57dc1ba71dc943033313fcba92fa6d36712648cb105382812d8f52c649b4e914&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW4G2ZL%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRiowLZ%2FOiDnS9%2B2gmaGaaiU248R5bGZ2V%2F22pyTrVwIgQ2F1uzfCv4AbyjuQO1PXM1OioKQrysMKMVi3RxvNgRoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDP5vUA0UimiiQ1A%2FFircA7aL8W3Cy8ru6VB3mEfvEn%2FzKZvXHlGAkofXK7VHSgGLYJD6tuoOWLEx6AP1xXmr%2BUOgL4LzC4WtVPIahohmu9KtRvCS9FBcdnpCu4gMxs73FdssksDk9e2ufU9sdFsq6WIdi31mt6koTorkwVPgolJzejy2CMZI1pxwp71RqeZZqL098uuC54FBqAwRKlzHKYPQ%2BxUPJQFrqIcvpGvxs6CS3bSem0%2BWpdh6qjIHEou63IGPlpaG25aGq8C0fnBG%2FRxfKA%2BK21pAhLx4%2Fpa%2BhFGlZg9vdElrcGh4t29GQ0iU5FIjUSfZ8c3vWbo7ldb6nBAt3DovR1BbBvb3qWoG4lQO4zlajI7YH0y97daXgEdScN%2FtcShKoJwMVyuM0NVf5G%2BY4FzCnXQ2G7nQkLuM1ZOTfc%2BlcBLcBQ1DNdaE%2FJD9YJq8IbZpzOkIW6X0Sv5s05e4EqqHVWGj0lXd73Y57JFcBR1C9lvRPaW3WVMg8nAjW09ARzdNHop6d6gM%2F3bqVDRPusvq6pkvJBplVmIcJKj88%2FhWAq6GqVM5nTcIUmwyyBmJZSu4xlioaOX%2BGgEWz6QPIR%2BGA57eJXc825xdeQXFjJ2k1a%2F4KRBieAtGJbV3SqJCyJRvHyAA%2FcL%2FMO2I4b4GOqUB7B2%2FJgArKw4SSu6nQ2AILN9%2B6wF5fYr9xBUbezGRRw%2Fb%2FyUs5N%2FGR%2Bn9LexP4idJjdrVGdgwj7Tfyf1Ntqufd7jjEmkUCuzFG1N4NBroKWuR8c%2FQ51uVCG0pKEDYPTyQns14hK7WbNuLMdd6372WO94hYMtKKikkXLTT93I4kR23A57xRwFLhgIMiVLMf%2BDn3FY55eYC7yfF%2FU3xJJZKMJRkI9oq&X-Amz-Signature=0e351e82d6679e9c2fe82551329cb6376a64b41d2bab996ac06ce989828f6c31&X-Amz-SignedHeaders=host&x-id=GetObject)
