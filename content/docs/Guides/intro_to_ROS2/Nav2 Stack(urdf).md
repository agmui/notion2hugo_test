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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDJJN7V%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbIOa8vaaROas1iNBrJFoxObCsDZZdH6OCAaQ%2FCZuXwIgZYbqQytw5WEeg3tjf0i65a2RvLBKpfMKCN9F34Y9ktUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9s1T8PfCssGFqbLSrcAwpvODWF8cF%2Fz6syD9up80F8Ww%2Bt349AFr8oCRAWOkTykySM%2BZPKBvENh8RI%2BXV%2B4pGsAv0go645m7IgEbDOPaP3mwUhXgaW7UxmPaA0rzV2%2BXgdC5DN98znh4FumTW7ofkfhIJL5c6fttzdNmP%2F84EXYlM9xa9V88kF29zD8o%2B%2FZWs5GKU82kOCUgOIP%2F%2BO6hZwbc4F9Aab4OwbD7GCYxuzOxYHSuBw53kJIKaqryxvWCpaGTuUfTplRZMSbJaGHxvIE6kgjqELMrk8mD3HRDd3pSnxvzy2raNFU6RYY7v5%2Fepdan0%2FPQ9t2wBYNgAxs0L2QLeLnH03jYM2OkQ7vHozmiwRZ8dpCSpAtVxDaSjjYL6A8R5iEpiUkpflT5bBq2wUA7L%2FR5Vbo%2BOOJz4YXzc5ZZGh3Q4Mkrwtp3pbceEVfU%2FdP82VfDNe%2F4eECeVGmPYsfZEOv1cRGnxnR4pZeAeJJKz9ebZLMG2s5PRnO0tbvPwp3GMTOzNkhFbHoVONvOrV8cYiEevL12VxBees5tTW5ym0TuvLenElpGeNhmZbggOZXC5jHmfQ1rk1NLacccCXnjdHSx1LZoy7U5M4QzFolmV%2BzPIEQShukHyyf6MwNUfsxwCM1aZzVPBgMOn%2B8b0GOqUBMfPZfwUybExomWtjBiUvH3%2BnTx9mknKWqQh0kVITPuKOeEJ4n9Z3M19MkaFR3iPAlm5DlVrBb9ad%2FHJOPDvmC%2B%2FUWQxC4Ak546sBA3ZXDHU2GWD%2BD87pBMJUI24okUpFIuffEqmNYMg6DG8koJ3XzyjrQbWbGTBTRdn9JoIi6sSYoigGH3KLyAbutiu7G%2Byz8eH8ZSq40vAf1scLji7oVDl3SLb7&X-Amz-Signature=1d61dd9de8935c16d82132a54fc6d62e657ba55694606b06638da63dc329f574&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDJJN7V%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbIOa8vaaROas1iNBrJFoxObCsDZZdH6OCAaQ%2FCZuXwIgZYbqQytw5WEeg3tjf0i65a2RvLBKpfMKCN9F34Y9ktUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9s1T8PfCssGFqbLSrcAwpvODWF8cF%2Fz6syD9up80F8Ww%2Bt349AFr8oCRAWOkTykySM%2BZPKBvENh8RI%2BXV%2B4pGsAv0go645m7IgEbDOPaP3mwUhXgaW7UxmPaA0rzV2%2BXgdC5DN98znh4FumTW7ofkfhIJL5c6fttzdNmP%2F84EXYlM9xa9V88kF29zD8o%2B%2FZWs5GKU82kOCUgOIP%2F%2BO6hZwbc4F9Aab4OwbD7GCYxuzOxYHSuBw53kJIKaqryxvWCpaGTuUfTplRZMSbJaGHxvIE6kgjqELMrk8mD3HRDd3pSnxvzy2raNFU6RYY7v5%2Fepdan0%2FPQ9t2wBYNgAxs0L2QLeLnH03jYM2OkQ7vHozmiwRZ8dpCSpAtVxDaSjjYL6A8R5iEpiUkpflT5bBq2wUA7L%2FR5Vbo%2BOOJz4YXzc5ZZGh3Q4Mkrwtp3pbceEVfU%2FdP82VfDNe%2F4eECeVGmPYsfZEOv1cRGnxnR4pZeAeJJKz9ebZLMG2s5PRnO0tbvPwp3GMTOzNkhFbHoVONvOrV8cYiEevL12VxBees5tTW5ym0TuvLenElpGeNhmZbggOZXC5jHmfQ1rk1NLacccCXnjdHSx1LZoy7U5M4QzFolmV%2BzPIEQShukHyyf6MwNUfsxwCM1aZzVPBgMOn%2B8b0GOqUBMfPZfwUybExomWtjBiUvH3%2BnTx9mknKWqQh0kVITPuKOeEJ4n9Z3M19MkaFR3iPAlm5DlVrBb9ad%2FHJOPDvmC%2B%2FUWQxC4Ak546sBA3ZXDHU2GWD%2BD87pBMJUI24okUpFIuffEqmNYMg6DG8koJ3XzyjrQbWbGTBTRdn9JoIi6sSYoigGH3KLyAbutiu7G%2Byz8eH8ZSq40vAf1scLji7oVDl3SLb7&X-Amz-Signature=f96364a6c53c5fe1f19f4529e8aac2f6100b1168788a87b3a9a1b6d84b39d14c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDJJN7V%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbIOa8vaaROas1iNBrJFoxObCsDZZdH6OCAaQ%2FCZuXwIgZYbqQytw5WEeg3tjf0i65a2RvLBKpfMKCN9F34Y9ktUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9s1T8PfCssGFqbLSrcAwpvODWF8cF%2Fz6syD9up80F8Ww%2Bt349AFr8oCRAWOkTykySM%2BZPKBvENh8RI%2BXV%2B4pGsAv0go645m7IgEbDOPaP3mwUhXgaW7UxmPaA0rzV2%2BXgdC5DN98znh4FumTW7ofkfhIJL5c6fttzdNmP%2F84EXYlM9xa9V88kF29zD8o%2B%2FZWs5GKU82kOCUgOIP%2F%2BO6hZwbc4F9Aab4OwbD7GCYxuzOxYHSuBw53kJIKaqryxvWCpaGTuUfTplRZMSbJaGHxvIE6kgjqELMrk8mD3HRDd3pSnxvzy2raNFU6RYY7v5%2Fepdan0%2FPQ9t2wBYNgAxs0L2QLeLnH03jYM2OkQ7vHozmiwRZ8dpCSpAtVxDaSjjYL6A8R5iEpiUkpflT5bBq2wUA7L%2FR5Vbo%2BOOJz4YXzc5ZZGh3Q4Mkrwtp3pbceEVfU%2FdP82VfDNe%2F4eECeVGmPYsfZEOv1cRGnxnR4pZeAeJJKz9ebZLMG2s5PRnO0tbvPwp3GMTOzNkhFbHoVONvOrV8cYiEevL12VxBees5tTW5ym0TuvLenElpGeNhmZbggOZXC5jHmfQ1rk1NLacccCXnjdHSx1LZoy7U5M4QzFolmV%2BzPIEQShukHyyf6MwNUfsxwCM1aZzVPBgMOn%2B8b0GOqUBMfPZfwUybExomWtjBiUvH3%2BnTx9mknKWqQh0kVITPuKOeEJ4n9Z3M19MkaFR3iPAlm5DlVrBb9ad%2FHJOPDvmC%2B%2FUWQxC4Ak546sBA3ZXDHU2GWD%2BD87pBMJUI24okUpFIuffEqmNYMg6DG8koJ3XzyjrQbWbGTBTRdn9JoIi6sSYoigGH3KLyAbutiu7G%2Byz8eH8ZSq40vAf1scLji7oVDl3SLb7&X-Amz-Signature=686dbbeb3776dd73f9f58250742043b63adef90457eda3f748385a27009394f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDJJN7V%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbIOa8vaaROas1iNBrJFoxObCsDZZdH6OCAaQ%2FCZuXwIgZYbqQytw5WEeg3tjf0i65a2RvLBKpfMKCN9F34Y9ktUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9s1T8PfCssGFqbLSrcAwpvODWF8cF%2Fz6syD9up80F8Ww%2Bt349AFr8oCRAWOkTykySM%2BZPKBvENh8RI%2BXV%2B4pGsAv0go645m7IgEbDOPaP3mwUhXgaW7UxmPaA0rzV2%2BXgdC5DN98znh4FumTW7ofkfhIJL5c6fttzdNmP%2F84EXYlM9xa9V88kF29zD8o%2B%2FZWs5GKU82kOCUgOIP%2F%2BO6hZwbc4F9Aab4OwbD7GCYxuzOxYHSuBw53kJIKaqryxvWCpaGTuUfTplRZMSbJaGHxvIE6kgjqELMrk8mD3HRDd3pSnxvzy2raNFU6RYY7v5%2Fepdan0%2FPQ9t2wBYNgAxs0L2QLeLnH03jYM2OkQ7vHozmiwRZ8dpCSpAtVxDaSjjYL6A8R5iEpiUkpflT5bBq2wUA7L%2FR5Vbo%2BOOJz4YXzc5ZZGh3Q4Mkrwtp3pbceEVfU%2FdP82VfDNe%2F4eECeVGmPYsfZEOv1cRGnxnR4pZeAeJJKz9ebZLMG2s5PRnO0tbvPwp3GMTOzNkhFbHoVONvOrV8cYiEevL12VxBees5tTW5ym0TuvLenElpGeNhmZbggOZXC5jHmfQ1rk1NLacccCXnjdHSx1LZoy7U5M4QzFolmV%2BzPIEQShukHyyf6MwNUfsxwCM1aZzVPBgMOn%2B8b0GOqUBMfPZfwUybExomWtjBiUvH3%2BnTx9mknKWqQh0kVITPuKOeEJ4n9Z3M19MkaFR3iPAlm5DlVrBb9ad%2FHJOPDvmC%2B%2FUWQxC4Ak546sBA3ZXDHU2GWD%2BD87pBMJUI24okUpFIuffEqmNYMg6DG8koJ3XzyjrQbWbGTBTRdn9JoIi6sSYoigGH3KLyAbutiu7G%2Byz8eH8ZSq40vAf1scLji7oVDl3SLb7&X-Amz-Signature=c491a34b5d675462be5e8b4a78e300f247554a6c27b6d5e45b085cf56e282029&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDJJN7V%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbIOa8vaaROas1iNBrJFoxObCsDZZdH6OCAaQ%2FCZuXwIgZYbqQytw5WEeg3tjf0i65a2RvLBKpfMKCN9F34Y9ktUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9s1T8PfCssGFqbLSrcAwpvODWF8cF%2Fz6syD9up80F8Ww%2Bt349AFr8oCRAWOkTykySM%2BZPKBvENh8RI%2BXV%2B4pGsAv0go645m7IgEbDOPaP3mwUhXgaW7UxmPaA0rzV2%2BXgdC5DN98znh4FumTW7ofkfhIJL5c6fttzdNmP%2F84EXYlM9xa9V88kF29zD8o%2B%2FZWs5GKU82kOCUgOIP%2F%2BO6hZwbc4F9Aab4OwbD7GCYxuzOxYHSuBw53kJIKaqryxvWCpaGTuUfTplRZMSbJaGHxvIE6kgjqELMrk8mD3HRDd3pSnxvzy2raNFU6RYY7v5%2Fepdan0%2FPQ9t2wBYNgAxs0L2QLeLnH03jYM2OkQ7vHozmiwRZ8dpCSpAtVxDaSjjYL6A8R5iEpiUkpflT5bBq2wUA7L%2FR5Vbo%2BOOJz4YXzc5ZZGh3Q4Mkrwtp3pbceEVfU%2FdP82VfDNe%2F4eECeVGmPYsfZEOv1cRGnxnR4pZeAeJJKz9ebZLMG2s5PRnO0tbvPwp3GMTOzNkhFbHoVONvOrV8cYiEevL12VxBees5tTW5ym0TuvLenElpGeNhmZbggOZXC5jHmfQ1rk1NLacccCXnjdHSx1LZoy7U5M4QzFolmV%2BzPIEQShukHyyf6MwNUfsxwCM1aZzVPBgMOn%2B8b0GOqUBMfPZfwUybExomWtjBiUvH3%2BnTx9mknKWqQh0kVITPuKOeEJ4n9Z3M19MkaFR3iPAlm5DlVrBb9ad%2FHJOPDvmC%2B%2FUWQxC4Ak546sBA3ZXDHU2GWD%2BD87pBMJUI24okUpFIuffEqmNYMg6DG8koJ3XzyjrQbWbGTBTRdn9JoIi6sSYoigGH3KLyAbutiu7G%2Byz8eH8ZSq40vAf1scLji7oVDl3SLb7&X-Amz-Signature=d21d39f168653e8343bc53736137f7557c236368949472d08b4d2d5c26c26d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUDJJN7V%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T150909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPbIOa8vaaROas1iNBrJFoxObCsDZZdH6OCAaQ%2FCZuXwIgZYbqQytw5WEeg3tjf0i65a2RvLBKpfMKCN9F34Y9ktUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDG9s1T8PfCssGFqbLSrcAwpvODWF8cF%2Fz6syD9up80F8Ww%2Bt349AFr8oCRAWOkTykySM%2BZPKBvENh8RI%2BXV%2B4pGsAv0go645m7IgEbDOPaP3mwUhXgaW7UxmPaA0rzV2%2BXgdC5DN98znh4FumTW7ofkfhIJL5c6fttzdNmP%2F84EXYlM9xa9V88kF29zD8o%2B%2FZWs5GKU82kOCUgOIP%2F%2BO6hZwbc4F9Aab4OwbD7GCYxuzOxYHSuBw53kJIKaqryxvWCpaGTuUfTplRZMSbJaGHxvIE6kgjqELMrk8mD3HRDd3pSnxvzy2raNFU6RYY7v5%2Fepdan0%2FPQ9t2wBYNgAxs0L2QLeLnH03jYM2OkQ7vHozmiwRZ8dpCSpAtVxDaSjjYL6A8R5iEpiUkpflT5bBq2wUA7L%2FR5Vbo%2BOOJz4YXzc5ZZGh3Q4Mkrwtp3pbceEVfU%2FdP82VfDNe%2F4eECeVGmPYsfZEOv1cRGnxnR4pZeAeJJKz9ebZLMG2s5PRnO0tbvPwp3GMTOzNkhFbHoVONvOrV8cYiEevL12VxBees5tTW5ym0TuvLenElpGeNhmZbggOZXC5jHmfQ1rk1NLacccCXnjdHSx1LZoy7U5M4QzFolmV%2BzPIEQShukHyyf6MwNUfsxwCM1aZzVPBgMOn%2B8b0GOqUBMfPZfwUybExomWtjBiUvH3%2BnTx9mknKWqQh0kVITPuKOeEJ4n9Z3M19MkaFR3iPAlm5DlVrBb9ad%2FHJOPDvmC%2B%2FUWQxC4Ak546sBA3ZXDHU2GWD%2BD87pBMJUI24okUpFIuffEqmNYMg6DG8koJ3XzyjrQbWbGTBTRdn9JoIi6sSYoigGH3KLyAbutiu7G%2Byz8eH8ZSq40vAf1scLji7oVDl3SLb7&X-Amz-Signature=402bd851f51c04a89ea25be59f31886d2769800bc621061ec97daa20a9f20de6&X-Amz-SignedHeaders=host&x-id=GetObject)
