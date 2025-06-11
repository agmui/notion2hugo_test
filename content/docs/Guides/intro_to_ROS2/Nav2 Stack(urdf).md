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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLANDQMC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTPiAr%2Bq5cp3Yc%2FotrotIJZgOP6hpjB6Iy69gKULcN%2FgIgPtUEI0GV8hHsYBP3LVlF580h8xVYFmmgkRl8QBVf3X8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaVuqCA5zB0NhMqHSrcA5mlnn4AEtyhpFtH9fSmHfexqoh%2BEO958Q4V%2BwmuGIm2jFWnIQ1TbSHKNizq1qa0Xlbn9pcuBpHZh%2BLM2%2BrLog0ASSS%2BgAcGoyZOR3VGH5W1eZH%2F5NZLWtEkXSh8WRN9E9bGCN29cDzHjx686kTigRGPfCVi2wiGVaCsMmFyUeulqxNCZ14TAWtKZtByoHaWce%2FLaj11mdBrCBiQoEjjn%2FGDjEMI4BU%2FIujqwJyEEMust6PK9OB4yUy97UcX1NPzKjDhxc%2BodcI3WCqqAL8pHItcGw3BnhYVEhfGkxi009wZGtjXIQ4huGSqStvd%2B4a2PS7fDu1h87uAPAmbPDADtAofaWxoQtyBSVkEhGQAvDdFXE8pBqMLR8EVTvRXnrJrEYf%2Byx%2Fq%2FH18eB3qxDrC9mu1PJ8HG3ij425iWAVK75aPWzq1TWIQayVT1AGu7QD0u5URZ1%2FE9ntLLNGs6Y4MeJlk%2BQrXKhF7BNY9EhC%2FD9POEIO47mA5qV1112w8rZjrX1sREiZ%2BiKSlw6r1c4wT5xvow0Uivhu3fWnZ%2BCJaSP6UD1Qd3tUIlL8YKfDQXgqHDIk2cmb%2FPKn%2BH%2FGYVr6BUg66k%2F5iimu%2FjUp29muD2AIvemoezpFf%2BEj9tE8ZMKnlosIGOqUBndq9iDkp7hnbHOFTo85gCz9eBG6u5aBOo%2BFNn%2FT70affGqFGKn2E7lmfEo9bXYXl8QxAPpLXZnLJ5FJ3xxc1ha5%2BKoOnKZW0upajD5PMF96ae2G%2FGe4egubiVSsGOSmTQFi03pxLWbP64U2mep9h5lbJzYW1oOM2JqubR%2B8sNvrUWOIzN673lMCBmAtL3Y45v96FF3vbuGV5gSR%2FA2plZk9jx9S8&X-Amz-Signature=90fd97f679f48a3ede4203e21959a761dc360a01993f5e31301cc72cb9a88d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLANDQMC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTPiAr%2Bq5cp3Yc%2FotrotIJZgOP6hpjB6Iy69gKULcN%2FgIgPtUEI0GV8hHsYBP3LVlF580h8xVYFmmgkRl8QBVf3X8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaVuqCA5zB0NhMqHSrcA5mlnn4AEtyhpFtH9fSmHfexqoh%2BEO958Q4V%2BwmuGIm2jFWnIQ1TbSHKNizq1qa0Xlbn9pcuBpHZh%2BLM2%2BrLog0ASSS%2BgAcGoyZOR3VGH5W1eZH%2F5NZLWtEkXSh8WRN9E9bGCN29cDzHjx686kTigRGPfCVi2wiGVaCsMmFyUeulqxNCZ14TAWtKZtByoHaWce%2FLaj11mdBrCBiQoEjjn%2FGDjEMI4BU%2FIujqwJyEEMust6PK9OB4yUy97UcX1NPzKjDhxc%2BodcI3WCqqAL8pHItcGw3BnhYVEhfGkxi009wZGtjXIQ4huGSqStvd%2B4a2PS7fDu1h87uAPAmbPDADtAofaWxoQtyBSVkEhGQAvDdFXE8pBqMLR8EVTvRXnrJrEYf%2Byx%2Fq%2FH18eB3qxDrC9mu1PJ8HG3ij425iWAVK75aPWzq1TWIQayVT1AGu7QD0u5URZ1%2FE9ntLLNGs6Y4MeJlk%2BQrXKhF7BNY9EhC%2FD9POEIO47mA5qV1112w8rZjrX1sREiZ%2BiKSlw6r1c4wT5xvow0Uivhu3fWnZ%2BCJaSP6UD1Qd3tUIlL8YKfDQXgqHDIk2cmb%2FPKn%2BH%2FGYVr6BUg66k%2F5iimu%2FjUp29muD2AIvemoezpFf%2BEj9tE8ZMKnlosIGOqUBndq9iDkp7hnbHOFTo85gCz9eBG6u5aBOo%2BFNn%2FT70affGqFGKn2E7lmfEo9bXYXl8QxAPpLXZnLJ5FJ3xxc1ha5%2BKoOnKZW0upajD5PMF96ae2G%2FGe4egubiVSsGOSmTQFi03pxLWbP64U2mep9h5lbJzYW1oOM2JqubR%2B8sNvrUWOIzN673lMCBmAtL3Y45v96FF3vbuGV5gSR%2FA2plZk9jx9S8&X-Amz-Signature=61158fe9136c5d560013bf110e70046ffa32e4cadddb46b0d97de921af5b9468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLANDQMC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTPiAr%2Bq5cp3Yc%2FotrotIJZgOP6hpjB6Iy69gKULcN%2FgIgPtUEI0GV8hHsYBP3LVlF580h8xVYFmmgkRl8QBVf3X8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaVuqCA5zB0NhMqHSrcA5mlnn4AEtyhpFtH9fSmHfexqoh%2BEO958Q4V%2BwmuGIm2jFWnIQ1TbSHKNizq1qa0Xlbn9pcuBpHZh%2BLM2%2BrLog0ASSS%2BgAcGoyZOR3VGH5W1eZH%2F5NZLWtEkXSh8WRN9E9bGCN29cDzHjx686kTigRGPfCVi2wiGVaCsMmFyUeulqxNCZ14TAWtKZtByoHaWce%2FLaj11mdBrCBiQoEjjn%2FGDjEMI4BU%2FIujqwJyEEMust6PK9OB4yUy97UcX1NPzKjDhxc%2BodcI3WCqqAL8pHItcGw3BnhYVEhfGkxi009wZGtjXIQ4huGSqStvd%2B4a2PS7fDu1h87uAPAmbPDADtAofaWxoQtyBSVkEhGQAvDdFXE8pBqMLR8EVTvRXnrJrEYf%2Byx%2Fq%2FH18eB3qxDrC9mu1PJ8HG3ij425iWAVK75aPWzq1TWIQayVT1AGu7QD0u5URZ1%2FE9ntLLNGs6Y4MeJlk%2BQrXKhF7BNY9EhC%2FD9POEIO47mA5qV1112w8rZjrX1sREiZ%2BiKSlw6r1c4wT5xvow0Uivhu3fWnZ%2BCJaSP6UD1Qd3tUIlL8YKfDQXgqHDIk2cmb%2FPKn%2BH%2FGYVr6BUg66k%2F5iimu%2FjUp29muD2AIvemoezpFf%2BEj9tE8ZMKnlosIGOqUBndq9iDkp7hnbHOFTo85gCz9eBG6u5aBOo%2BFNn%2FT70affGqFGKn2E7lmfEo9bXYXl8QxAPpLXZnLJ5FJ3xxc1ha5%2BKoOnKZW0upajD5PMF96ae2G%2FGe4egubiVSsGOSmTQFi03pxLWbP64U2mep9h5lbJzYW1oOM2JqubR%2B8sNvrUWOIzN673lMCBmAtL3Y45v96FF3vbuGV5gSR%2FA2plZk9jx9S8&X-Amz-Signature=cfa8441c487cc85a4041b2e7c886a36473ab6ef6d3e937854a119e45015408e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLANDQMC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTPiAr%2Bq5cp3Yc%2FotrotIJZgOP6hpjB6Iy69gKULcN%2FgIgPtUEI0GV8hHsYBP3LVlF580h8xVYFmmgkRl8QBVf3X8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaVuqCA5zB0NhMqHSrcA5mlnn4AEtyhpFtH9fSmHfexqoh%2BEO958Q4V%2BwmuGIm2jFWnIQ1TbSHKNizq1qa0Xlbn9pcuBpHZh%2BLM2%2BrLog0ASSS%2BgAcGoyZOR3VGH5W1eZH%2F5NZLWtEkXSh8WRN9E9bGCN29cDzHjx686kTigRGPfCVi2wiGVaCsMmFyUeulqxNCZ14TAWtKZtByoHaWce%2FLaj11mdBrCBiQoEjjn%2FGDjEMI4BU%2FIujqwJyEEMust6PK9OB4yUy97UcX1NPzKjDhxc%2BodcI3WCqqAL8pHItcGw3BnhYVEhfGkxi009wZGtjXIQ4huGSqStvd%2B4a2PS7fDu1h87uAPAmbPDADtAofaWxoQtyBSVkEhGQAvDdFXE8pBqMLR8EVTvRXnrJrEYf%2Byx%2Fq%2FH18eB3qxDrC9mu1PJ8HG3ij425iWAVK75aPWzq1TWIQayVT1AGu7QD0u5URZ1%2FE9ntLLNGs6Y4MeJlk%2BQrXKhF7BNY9EhC%2FD9POEIO47mA5qV1112w8rZjrX1sREiZ%2BiKSlw6r1c4wT5xvow0Uivhu3fWnZ%2BCJaSP6UD1Qd3tUIlL8YKfDQXgqHDIk2cmb%2FPKn%2BH%2FGYVr6BUg66k%2F5iimu%2FjUp29muD2AIvemoezpFf%2BEj9tE8ZMKnlosIGOqUBndq9iDkp7hnbHOFTo85gCz9eBG6u5aBOo%2BFNn%2FT70affGqFGKn2E7lmfEo9bXYXl8QxAPpLXZnLJ5FJ3xxc1ha5%2BKoOnKZW0upajD5PMF96ae2G%2FGe4egubiVSsGOSmTQFi03pxLWbP64U2mep9h5lbJzYW1oOM2JqubR%2B8sNvrUWOIzN673lMCBmAtL3Y45v96FF3vbuGV5gSR%2FA2plZk9jx9S8&X-Amz-Signature=9bcceba0b8c9e557e23335a46e5b5377cf7d5ab2bdbe4c26cb15fc6e5ac0c4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLANDQMC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTPiAr%2Bq5cp3Yc%2FotrotIJZgOP6hpjB6Iy69gKULcN%2FgIgPtUEI0GV8hHsYBP3LVlF580h8xVYFmmgkRl8QBVf3X8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaVuqCA5zB0NhMqHSrcA5mlnn4AEtyhpFtH9fSmHfexqoh%2BEO958Q4V%2BwmuGIm2jFWnIQ1TbSHKNizq1qa0Xlbn9pcuBpHZh%2BLM2%2BrLog0ASSS%2BgAcGoyZOR3VGH5W1eZH%2F5NZLWtEkXSh8WRN9E9bGCN29cDzHjx686kTigRGPfCVi2wiGVaCsMmFyUeulqxNCZ14TAWtKZtByoHaWce%2FLaj11mdBrCBiQoEjjn%2FGDjEMI4BU%2FIujqwJyEEMust6PK9OB4yUy97UcX1NPzKjDhxc%2BodcI3WCqqAL8pHItcGw3BnhYVEhfGkxi009wZGtjXIQ4huGSqStvd%2B4a2PS7fDu1h87uAPAmbPDADtAofaWxoQtyBSVkEhGQAvDdFXE8pBqMLR8EVTvRXnrJrEYf%2Byx%2Fq%2FH18eB3qxDrC9mu1PJ8HG3ij425iWAVK75aPWzq1TWIQayVT1AGu7QD0u5URZ1%2FE9ntLLNGs6Y4MeJlk%2BQrXKhF7BNY9EhC%2FD9POEIO47mA5qV1112w8rZjrX1sREiZ%2BiKSlw6r1c4wT5xvow0Uivhu3fWnZ%2BCJaSP6UD1Qd3tUIlL8YKfDQXgqHDIk2cmb%2FPKn%2BH%2FGYVr6BUg66k%2F5iimu%2FjUp29muD2AIvemoezpFf%2BEj9tE8ZMKnlosIGOqUBndq9iDkp7hnbHOFTo85gCz9eBG6u5aBOo%2BFNn%2FT70affGqFGKn2E7lmfEo9bXYXl8QxAPpLXZnLJ5FJ3xxc1ha5%2BKoOnKZW0upajD5PMF96ae2G%2FGe4egubiVSsGOSmTQFi03pxLWbP64U2mep9h5lbJzYW1oOM2JqubR%2B8sNvrUWOIzN673lMCBmAtL3Y45v96FF3vbuGV5gSR%2FA2plZk9jx9S8&X-Amz-Signature=ed965142dbfc79ec399afdddb1388ca87f7a26f783e2461e3d1edb1cdffe491b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLANDQMC%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTPiAr%2Bq5cp3Yc%2FotrotIJZgOP6hpjB6Iy69gKULcN%2FgIgPtUEI0GV8hHsYBP3LVlF580h8xVYFmmgkRl8QBVf3X8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaVuqCA5zB0NhMqHSrcA5mlnn4AEtyhpFtH9fSmHfexqoh%2BEO958Q4V%2BwmuGIm2jFWnIQ1TbSHKNizq1qa0Xlbn9pcuBpHZh%2BLM2%2BrLog0ASSS%2BgAcGoyZOR3VGH5W1eZH%2F5NZLWtEkXSh8WRN9E9bGCN29cDzHjx686kTigRGPfCVi2wiGVaCsMmFyUeulqxNCZ14TAWtKZtByoHaWce%2FLaj11mdBrCBiQoEjjn%2FGDjEMI4BU%2FIujqwJyEEMust6PK9OB4yUy97UcX1NPzKjDhxc%2BodcI3WCqqAL8pHItcGw3BnhYVEhfGkxi009wZGtjXIQ4huGSqStvd%2B4a2PS7fDu1h87uAPAmbPDADtAofaWxoQtyBSVkEhGQAvDdFXE8pBqMLR8EVTvRXnrJrEYf%2Byx%2Fq%2FH18eB3qxDrC9mu1PJ8HG3ij425iWAVK75aPWzq1TWIQayVT1AGu7QD0u5URZ1%2FE9ntLLNGs6Y4MeJlk%2BQrXKhF7BNY9EhC%2FD9POEIO47mA5qV1112w8rZjrX1sREiZ%2BiKSlw6r1c4wT5xvow0Uivhu3fWnZ%2BCJaSP6UD1Qd3tUIlL8YKfDQXgqHDIk2cmb%2FPKn%2BH%2FGYVr6BUg66k%2F5iimu%2FjUp29muD2AIvemoezpFf%2BEj9tE8ZMKnlosIGOqUBndq9iDkp7hnbHOFTo85gCz9eBG6u5aBOo%2BFNn%2FT70affGqFGKn2E7lmfEo9bXYXl8QxAPpLXZnLJ5FJ3xxc1ha5%2BKoOnKZW0upajD5PMF96ae2G%2FGe4egubiVSsGOSmTQFi03pxLWbP64U2mep9h5lbJzYW1oOM2JqubR%2B8sNvrUWOIzN673lMCBmAtL3Y45v96FF3vbuGV5gSR%2FA2plZk9jx9S8&X-Amz-Signature=38d2da4a534809bf0e0712087b21624137693a5b7793daaadfce35287cf51296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
