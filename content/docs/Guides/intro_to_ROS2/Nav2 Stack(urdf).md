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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFFOOBB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0P8wBjg5VGOeXSvq2ZzrCkFAYrIkjP49rZpRgUIs16AiBxly2yvqKha1IZUAD3X1DzliyaQNU%2FYoiUqIBSgP9NjCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNXwMI9jIBkJvpbQOKtwDTvt%2BryQhDrxoP%2FLr8Hu6PnX3%2BnfhMTJlIzqZh3aD1yZK3zUAAj3CjNV4gWYOPgqyEQeDRi74QBdvSi3FcdUEJOBsFbhmyC1fjZtMox4zWjbBSYl%2BJaA%2Fv%2FaIXS532KjA7pqnt037uMZmvyrEijwVMI1X8s2WvGahaoqujPfTO%2BLqRBCqNpfHqoZC%2FO2Vf0YWIdJVWPXPmApinzSZ08Hvwb4UO6Uo2yPINUfvcSF%2Fq7S7aQNbz3I5lRQl8nx3Xz4IFVerQGBTIhkz6r%2FUgJrSljPQGM9TyVLUQMURwl90pUWyOHf1jRHX5opz6Ju9JvetdgESRGbEPV%2FtLvbre9ugmjp%2FctbWmfVH%2FfyB3EDcpNWA0jD4CFeexVWGq2lY1CVAV1MaR7nnFdfifPo9sq3LS8xgPo54j6Uc7rKRKONloU%2BrSSjNSPM%2BqqPIXxqWOJq0F6Yg9FzgZArJdIHxrzEviy3jKKoh6J9tUuyjvnvHPaUEYg4QgsKTN3Sw%2BrtqZ%2F5uLJKuXhf8IIkYGTbDXXxHbQf%2BJnSWvCm8ehoZpqPgH0DwbgtZhA%2Bvp%2FrC%2Bp2xBpMWojW%2FPSmg3ibj4dN992Ys%2Bho0V%2Bf6PUG18zw51mWhnfGK7cRebfTJY86m%2Fucwq%2FXvwwY6pgFnFEV4spMtx%2BMPwnY87y0CU537zkWo3CmPQkKREYZWW7cB%2FC%2B3v25hG2iX1NZRjGXE6W9lJiS5fowF3g1SGpbwgeoTN%2FbzkC6vnSd3DgHx41CeMfVpZaFAf%2FGPCTRsfRYY2u4vRdtfH%2FuKtv9d6lo46ZICNGiLM%2Fa7ueRiGnsFKpqc8n0bknkrTr6rcrWDoe2TJ4WG3OQuO%2B9gCXRktcjsqzrXxqg8&X-Amz-Signature=dee3e089520387bfa545a0503fd230c3cd5e5215ba47c46c2bd31077ccb0b966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFFOOBB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0P8wBjg5VGOeXSvq2ZzrCkFAYrIkjP49rZpRgUIs16AiBxly2yvqKha1IZUAD3X1DzliyaQNU%2FYoiUqIBSgP9NjCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNXwMI9jIBkJvpbQOKtwDTvt%2BryQhDrxoP%2FLr8Hu6PnX3%2BnfhMTJlIzqZh3aD1yZK3zUAAj3CjNV4gWYOPgqyEQeDRi74QBdvSi3FcdUEJOBsFbhmyC1fjZtMox4zWjbBSYl%2BJaA%2Fv%2FaIXS532KjA7pqnt037uMZmvyrEijwVMI1X8s2WvGahaoqujPfTO%2BLqRBCqNpfHqoZC%2FO2Vf0YWIdJVWPXPmApinzSZ08Hvwb4UO6Uo2yPINUfvcSF%2Fq7S7aQNbz3I5lRQl8nx3Xz4IFVerQGBTIhkz6r%2FUgJrSljPQGM9TyVLUQMURwl90pUWyOHf1jRHX5opz6Ju9JvetdgESRGbEPV%2FtLvbre9ugmjp%2FctbWmfVH%2FfyB3EDcpNWA0jD4CFeexVWGq2lY1CVAV1MaR7nnFdfifPo9sq3LS8xgPo54j6Uc7rKRKONloU%2BrSSjNSPM%2BqqPIXxqWOJq0F6Yg9FzgZArJdIHxrzEviy3jKKoh6J9tUuyjvnvHPaUEYg4QgsKTN3Sw%2BrtqZ%2F5uLJKuXhf8IIkYGTbDXXxHbQf%2BJnSWvCm8ehoZpqPgH0DwbgtZhA%2Bvp%2FrC%2Bp2xBpMWojW%2FPSmg3ibj4dN992Ys%2Bho0V%2Bf6PUG18zw51mWhnfGK7cRebfTJY86m%2Fucwq%2FXvwwY6pgFnFEV4spMtx%2BMPwnY87y0CU537zkWo3CmPQkKREYZWW7cB%2FC%2B3v25hG2iX1NZRjGXE6W9lJiS5fowF3g1SGpbwgeoTN%2FbzkC6vnSd3DgHx41CeMfVpZaFAf%2FGPCTRsfRYY2u4vRdtfH%2FuKtv9d6lo46ZICNGiLM%2Fa7ueRiGnsFKpqc8n0bknkrTr6rcrWDoe2TJ4WG3OQuO%2B9gCXRktcjsqzrXxqg8&X-Amz-Signature=ecde8db8bb7db86f5d268fbdcbc40ed0f1fa0a3852c84e0d6209cb6838321f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFFOOBB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0P8wBjg5VGOeXSvq2ZzrCkFAYrIkjP49rZpRgUIs16AiBxly2yvqKha1IZUAD3X1DzliyaQNU%2FYoiUqIBSgP9NjCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNXwMI9jIBkJvpbQOKtwDTvt%2BryQhDrxoP%2FLr8Hu6PnX3%2BnfhMTJlIzqZh3aD1yZK3zUAAj3CjNV4gWYOPgqyEQeDRi74QBdvSi3FcdUEJOBsFbhmyC1fjZtMox4zWjbBSYl%2BJaA%2Fv%2FaIXS532KjA7pqnt037uMZmvyrEijwVMI1X8s2WvGahaoqujPfTO%2BLqRBCqNpfHqoZC%2FO2Vf0YWIdJVWPXPmApinzSZ08Hvwb4UO6Uo2yPINUfvcSF%2Fq7S7aQNbz3I5lRQl8nx3Xz4IFVerQGBTIhkz6r%2FUgJrSljPQGM9TyVLUQMURwl90pUWyOHf1jRHX5opz6Ju9JvetdgESRGbEPV%2FtLvbre9ugmjp%2FctbWmfVH%2FfyB3EDcpNWA0jD4CFeexVWGq2lY1CVAV1MaR7nnFdfifPo9sq3LS8xgPo54j6Uc7rKRKONloU%2BrSSjNSPM%2BqqPIXxqWOJq0F6Yg9FzgZArJdIHxrzEviy3jKKoh6J9tUuyjvnvHPaUEYg4QgsKTN3Sw%2BrtqZ%2F5uLJKuXhf8IIkYGTbDXXxHbQf%2BJnSWvCm8ehoZpqPgH0DwbgtZhA%2Bvp%2FrC%2Bp2xBpMWojW%2FPSmg3ibj4dN992Ys%2Bho0V%2Bf6PUG18zw51mWhnfGK7cRebfTJY86m%2Fucwq%2FXvwwY6pgFnFEV4spMtx%2BMPwnY87y0CU537zkWo3CmPQkKREYZWW7cB%2FC%2B3v25hG2iX1NZRjGXE6W9lJiS5fowF3g1SGpbwgeoTN%2FbzkC6vnSd3DgHx41CeMfVpZaFAf%2FGPCTRsfRYY2u4vRdtfH%2FuKtv9d6lo46ZICNGiLM%2Fa7ueRiGnsFKpqc8n0bknkrTr6rcrWDoe2TJ4WG3OQuO%2B9gCXRktcjsqzrXxqg8&X-Amz-Signature=e3d69e422155af1a4dc6a826c0a0b7e9e64deaefc8cec68e4fa1442589a351ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFFOOBB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0P8wBjg5VGOeXSvq2ZzrCkFAYrIkjP49rZpRgUIs16AiBxly2yvqKha1IZUAD3X1DzliyaQNU%2FYoiUqIBSgP9NjCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNXwMI9jIBkJvpbQOKtwDTvt%2BryQhDrxoP%2FLr8Hu6PnX3%2BnfhMTJlIzqZh3aD1yZK3zUAAj3CjNV4gWYOPgqyEQeDRi74QBdvSi3FcdUEJOBsFbhmyC1fjZtMox4zWjbBSYl%2BJaA%2Fv%2FaIXS532KjA7pqnt037uMZmvyrEijwVMI1X8s2WvGahaoqujPfTO%2BLqRBCqNpfHqoZC%2FO2Vf0YWIdJVWPXPmApinzSZ08Hvwb4UO6Uo2yPINUfvcSF%2Fq7S7aQNbz3I5lRQl8nx3Xz4IFVerQGBTIhkz6r%2FUgJrSljPQGM9TyVLUQMURwl90pUWyOHf1jRHX5opz6Ju9JvetdgESRGbEPV%2FtLvbre9ugmjp%2FctbWmfVH%2FfyB3EDcpNWA0jD4CFeexVWGq2lY1CVAV1MaR7nnFdfifPo9sq3LS8xgPo54j6Uc7rKRKONloU%2BrSSjNSPM%2BqqPIXxqWOJq0F6Yg9FzgZArJdIHxrzEviy3jKKoh6J9tUuyjvnvHPaUEYg4QgsKTN3Sw%2BrtqZ%2F5uLJKuXhf8IIkYGTbDXXxHbQf%2BJnSWvCm8ehoZpqPgH0DwbgtZhA%2Bvp%2FrC%2Bp2xBpMWojW%2FPSmg3ibj4dN992Ys%2Bho0V%2Bf6PUG18zw51mWhnfGK7cRebfTJY86m%2Fucwq%2FXvwwY6pgFnFEV4spMtx%2BMPwnY87y0CU537zkWo3CmPQkKREYZWW7cB%2FC%2B3v25hG2iX1NZRjGXE6W9lJiS5fowF3g1SGpbwgeoTN%2FbzkC6vnSd3DgHx41CeMfVpZaFAf%2FGPCTRsfRYY2u4vRdtfH%2FuKtv9d6lo46ZICNGiLM%2Fa7ueRiGnsFKpqc8n0bknkrTr6rcrWDoe2TJ4WG3OQuO%2B9gCXRktcjsqzrXxqg8&X-Amz-Signature=63212db9f9190019db2f54520596d44cafe011475db35b6d88d4034f19fbdef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFFOOBB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0P8wBjg5VGOeXSvq2ZzrCkFAYrIkjP49rZpRgUIs16AiBxly2yvqKha1IZUAD3X1DzliyaQNU%2FYoiUqIBSgP9NjCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNXwMI9jIBkJvpbQOKtwDTvt%2BryQhDrxoP%2FLr8Hu6PnX3%2BnfhMTJlIzqZh3aD1yZK3zUAAj3CjNV4gWYOPgqyEQeDRi74QBdvSi3FcdUEJOBsFbhmyC1fjZtMox4zWjbBSYl%2BJaA%2Fv%2FaIXS532KjA7pqnt037uMZmvyrEijwVMI1X8s2WvGahaoqujPfTO%2BLqRBCqNpfHqoZC%2FO2Vf0YWIdJVWPXPmApinzSZ08Hvwb4UO6Uo2yPINUfvcSF%2Fq7S7aQNbz3I5lRQl8nx3Xz4IFVerQGBTIhkz6r%2FUgJrSljPQGM9TyVLUQMURwl90pUWyOHf1jRHX5opz6Ju9JvetdgESRGbEPV%2FtLvbre9ugmjp%2FctbWmfVH%2FfyB3EDcpNWA0jD4CFeexVWGq2lY1CVAV1MaR7nnFdfifPo9sq3LS8xgPo54j6Uc7rKRKONloU%2BrSSjNSPM%2BqqPIXxqWOJq0F6Yg9FzgZArJdIHxrzEviy3jKKoh6J9tUuyjvnvHPaUEYg4QgsKTN3Sw%2BrtqZ%2F5uLJKuXhf8IIkYGTbDXXxHbQf%2BJnSWvCm8ehoZpqPgH0DwbgtZhA%2Bvp%2FrC%2Bp2xBpMWojW%2FPSmg3ibj4dN992Ys%2Bho0V%2Bf6PUG18zw51mWhnfGK7cRebfTJY86m%2Fucwq%2FXvwwY6pgFnFEV4spMtx%2BMPwnY87y0CU537zkWo3CmPQkKREYZWW7cB%2FC%2B3v25hG2iX1NZRjGXE6W9lJiS5fowF3g1SGpbwgeoTN%2FbzkC6vnSd3DgHx41CeMfVpZaFAf%2FGPCTRsfRYY2u4vRdtfH%2FuKtv9d6lo46ZICNGiLM%2Fa7ueRiGnsFKpqc8n0bknkrTr6rcrWDoe2TJ4WG3OQuO%2B9gCXRktcjsqzrXxqg8&X-Amz-Signature=e3fb5cd91b04d9b1e25f856d99c48b296e57f6c68480bc94058cae59116eda2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJFFOOBB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0P8wBjg5VGOeXSvq2ZzrCkFAYrIkjP49rZpRgUIs16AiBxly2yvqKha1IZUAD3X1DzliyaQNU%2FYoiUqIBSgP9NjCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNXwMI9jIBkJvpbQOKtwDTvt%2BryQhDrxoP%2FLr8Hu6PnX3%2BnfhMTJlIzqZh3aD1yZK3zUAAj3CjNV4gWYOPgqyEQeDRi74QBdvSi3FcdUEJOBsFbhmyC1fjZtMox4zWjbBSYl%2BJaA%2Fv%2FaIXS532KjA7pqnt037uMZmvyrEijwVMI1X8s2WvGahaoqujPfTO%2BLqRBCqNpfHqoZC%2FO2Vf0YWIdJVWPXPmApinzSZ08Hvwb4UO6Uo2yPINUfvcSF%2Fq7S7aQNbz3I5lRQl8nx3Xz4IFVerQGBTIhkz6r%2FUgJrSljPQGM9TyVLUQMURwl90pUWyOHf1jRHX5opz6Ju9JvetdgESRGbEPV%2FtLvbre9ugmjp%2FctbWmfVH%2FfyB3EDcpNWA0jD4CFeexVWGq2lY1CVAV1MaR7nnFdfifPo9sq3LS8xgPo54j6Uc7rKRKONloU%2BrSSjNSPM%2BqqPIXxqWOJq0F6Yg9FzgZArJdIHxrzEviy3jKKoh6J9tUuyjvnvHPaUEYg4QgsKTN3Sw%2BrtqZ%2F5uLJKuXhf8IIkYGTbDXXxHbQf%2BJnSWvCm8ehoZpqPgH0DwbgtZhA%2Bvp%2FrC%2Bp2xBpMWojW%2FPSmg3ibj4dN992Ys%2Bho0V%2Bf6PUG18zw51mWhnfGK7cRebfTJY86m%2Fucwq%2FXvwwY6pgFnFEV4spMtx%2BMPwnY87y0CU537zkWo3CmPQkKREYZWW7cB%2FC%2B3v25hG2iX1NZRjGXE6W9lJiS5fowF3g1SGpbwgeoTN%2FbzkC6vnSd3DgHx41CeMfVpZaFAf%2FGPCTRsfRYY2u4vRdtfH%2FuKtv9d6lo46ZICNGiLM%2Fa7ueRiGnsFKpqc8n0bknkrTr6rcrWDoe2TJ4WG3OQuO%2B9gCXRktcjsqzrXxqg8&X-Amz-Signature=c66ed2bfc9deb13ea2dbb0541f7c335c3a62629cab7258c6e1e326328e92e417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
