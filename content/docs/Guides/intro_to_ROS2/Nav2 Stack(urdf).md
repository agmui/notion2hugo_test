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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYS7WSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEbxx21YXSAd0v0KyKHJ5f7Slcyiyt9ci%2BGK56qILlHeAiA2FAgKRskRrSs49w9JZUjdAGgpaB3JAbiT%2FX3GDlkEqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWlwQcwwCzt0XNf5KtwDKIhiGxgT%2Ft7x98PrlRJCN0MrqSqucpyLrhxZ9ghN%2BVZmLRCw%2FEgA8l1VYAgniFe%2B3POoUiNBz6lGiXWLbWNOjloLmDwQs0XGl%2FvhqN%2B16IyVdrg2sI2vWNErvMtxSqQrYdCDO%2BLD7hflGgaAFiJUHvgCcBtyXS%2BMo2LbTBBGNG70EBPKuGRd5uvTZkPSXnOkxJHZJGUxApHxz7Pd3LI8jQr3sa%2FNiySPPS3H31yI1NWn%2FzHIZHjmYjL%2FChakn8RHWTcmiPBOegl1pdDQDmeaWYdgGihLObQVoBbYEiL9%2FX5kEYRgX60rT%2FMdRH18%2FtKNncY3f6OpTsTnFAX39IHASOi9wMVwx6DM9HdIkxxiUug8AkVNvcxboImvo15m2jqGURRGDFKgbVkZnuIF7iOmbJ2L3bAFOc9FRkV7jpFIhuicmxVQ3WEhUspG%2F%2FyAxYxgVURGxirzhfOTjHCzHF9YV0H5U1s%2F2G63%2BSd4%2B0Y3Xc92mewFWGDAdZoOsi%2B%2BfY6mlVmNaiPtCa1sJgX5UKRBm6cFCjeAhyMjEtAj5UIz%2F0qiRCBiegkyeAyvFNwZGLbTbiMAJHN%2FfZxNkv%2FaDjJP%2BO7vI0nwqMYEDiu0x62HJ9zVrj%2BqhFfQkjhuWjwwwfq0vwY6pgGcp8BFSgPJjz7dow5REbzym7Kwyvht0iqLrFfcc39kUHxtZqOg1wzEnB61QxmybpxZ2q5k3RBikcDg1cZuC9GUZ7Blixbs3BlBUyusiBK1yZKkUbwcYKvLvVZ%2FWRlXJtQK69an2YCiMatyA8xfJ9AcQCxpSDT4OLt9nyn7sTERhdNI%2BJBqEPQPzt6TCmmyxqitILFZoOx5G4PiTsBdXa%2BT%2FyWfyb9q&X-Amz-Signature=23bf9a573c372eb339beaf260ffce5d4b1fc57d1b66ad77e88569d3b660a387b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYS7WSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEbxx21YXSAd0v0KyKHJ5f7Slcyiyt9ci%2BGK56qILlHeAiA2FAgKRskRrSs49w9JZUjdAGgpaB3JAbiT%2FX3GDlkEqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWlwQcwwCzt0XNf5KtwDKIhiGxgT%2Ft7x98PrlRJCN0MrqSqucpyLrhxZ9ghN%2BVZmLRCw%2FEgA8l1VYAgniFe%2B3POoUiNBz6lGiXWLbWNOjloLmDwQs0XGl%2FvhqN%2B16IyVdrg2sI2vWNErvMtxSqQrYdCDO%2BLD7hflGgaAFiJUHvgCcBtyXS%2BMo2LbTBBGNG70EBPKuGRd5uvTZkPSXnOkxJHZJGUxApHxz7Pd3LI8jQr3sa%2FNiySPPS3H31yI1NWn%2FzHIZHjmYjL%2FChakn8RHWTcmiPBOegl1pdDQDmeaWYdgGihLObQVoBbYEiL9%2FX5kEYRgX60rT%2FMdRH18%2FtKNncY3f6OpTsTnFAX39IHASOi9wMVwx6DM9HdIkxxiUug8AkVNvcxboImvo15m2jqGURRGDFKgbVkZnuIF7iOmbJ2L3bAFOc9FRkV7jpFIhuicmxVQ3WEhUspG%2F%2FyAxYxgVURGxirzhfOTjHCzHF9YV0H5U1s%2F2G63%2BSd4%2B0Y3Xc92mewFWGDAdZoOsi%2B%2BfY6mlVmNaiPtCa1sJgX5UKRBm6cFCjeAhyMjEtAj5UIz%2F0qiRCBiegkyeAyvFNwZGLbTbiMAJHN%2FfZxNkv%2FaDjJP%2BO7vI0nwqMYEDiu0x62HJ9zVrj%2BqhFfQkjhuWjwwwfq0vwY6pgGcp8BFSgPJjz7dow5REbzym7Kwyvht0iqLrFfcc39kUHxtZqOg1wzEnB61QxmybpxZ2q5k3RBikcDg1cZuC9GUZ7Blixbs3BlBUyusiBK1yZKkUbwcYKvLvVZ%2FWRlXJtQK69an2YCiMatyA8xfJ9AcQCxpSDT4OLt9nyn7sTERhdNI%2BJBqEPQPzt6TCmmyxqitILFZoOx5G4PiTsBdXa%2BT%2FyWfyb9q&X-Amz-Signature=6391d4981e1f63f6543488c580dbdd312db76ce4f892a02f0a4980406c5914a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYS7WSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEbxx21YXSAd0v0KyKHJ5f7Slcyiyt9ci%2BGK56qILlHeAiA2FAgKRskRrSs49w9JZUjdAGgpaB3JAbiT%2FX3GDlkEqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWlwQcwwCzt0XNf5KtwDKIhiGxgT%2Ft7x98PrlRJCN0MrqSqucpyLrhxZ9ghN%2BVZmLRCw%2FEgA8l1VYAgniFe%2B3POoUiNBz6lGiXWLbWNOjloLmDwQs0XGl%2FvhqN%2B16IyVdrg2sI2vWNErvMtxSqQrYdCDO%2BLD7hflGgaAFiJUHvgCcBtyXS%2BMo2LbTBBGNG70EBPKuGRd5uvTZkPSXnOkxJHZJGUxApHxz7Pd3LI8jQr3sa%2FNiySPPS3H31yI1NWn%2FzHIZHjmYjL%2FChakn8RHWTcmiPBOegl1pdDQDmeaWYdgGihLObQVoBbYEiL9%2FX5kEYRgX60rT%2FMdRH18%2FtKNncY3f6OpTsTnFAX39IHASOi9wMVwx6DM9HdIkxxiUug8AkVNvcxboImvo15m2jqGURRGDFKgbVkZnuIF7iOmbJ2L3bAFOc9FRkV7jpFIhuicmxVQ3WEhUspG%2F%2FyAxYxgVURGxirzhfOTjHCzHF9YV0H5U1s%2F2G63%2BSd4%2B0Y3Xc92mewFWGDAdZoOsi%2B%2BfY6mlVmNaiPtCa1sJgX5UKRBm6cFCjeAhyMjEtAj5UIz%2F0qiRCBiegkyeAyvFNwZGLbTbiMAJHN%2FfZxNkv%2FaDjJP%2BO7vI0nwqMYEDiu0x62HJ9zVrj%2BqhFfQkjhuWjwwwfq0vwY6pgGcp8BFSgPJjz7dow5REbzym7Kwyvht0iqLrFfcc39kUHxtZqOg1wzEnB61QxmybpxZ2q5k3RBikcDg1cZuC9GUZ7Blixbs3BlBUyusiBK1yZKkUbwcYKvLvVZ%2FWRlXJtQK69an2YCiMatyA8xfJ9AcQCxpSDT4OLt9nyn7sTERhdNI%2BJBqEPQPzt6TCmmyxqitILFZoOx5G4PiTsBdXa%2BT%2FyWfyb9q&X-Amz-Signature=83c2cadbdd4a4275df677c41058139e0606adba70f15a7974db89672e57825e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYS7WSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEbxx21YXSAd0v0KyKHJ5f7Slcyiyt9ci%2BGK56qILlHeAiA2FAgKRskRrSs49w9JZUjdAGgpaB3JAbiT%2FX3GDlkEqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWlwQcwwCzt0XNf5KtwDKIhiGxgT%2Ft7x98PrlRJCN0MrqSqucpyLrhxZ9ghN%2BVZmLRCw%2FEgA8l1VYAgniFe%2B3POoUiNBz6lGiXWLbWNOjloLmDwQs0XGl%2FvhqN%2B16IyVdrg2sI2vWNErvMtxSqQrYdCDO%2BLD7hflGgaAFiJUHvgCcBtyXS%2BMo2LbTBBGNG70EBPKuGRd5uvTZkPSXnOkxJHZJGUxApHxz7Pd3LI8jQr3sa%2FNiySPPS3H31yI1NWn%2FzHIZHjmYjL%2FChakn8RHWTcmiPBOegl1pdDQDmeaWYdgGihLObQVoBbYEiL9%2FX5kEYRgX60rT%2FMdRH18%2FtKNncY3f6OpTsTnFAX39IHASOi9wMVwx6DM9HdIkxxiUug8AkVNvcxboImvo15m2jqGURRGDFKgbVkZnuIF7iOmbJ2L3bAFOc9FRkV7jpFIhuicmxVQ3WEhUspG%2F%2FyAxYxgVURGxirzhfOTjHCzHF9YV0H5U1s%2F2G63%2BSd4%2B0Y3Xc92mewFWGDAdZoOsi%2B%2BfY6mlVmNaiPtCa1sJgX5UKRBm6cFCjeAhyMjEtAj5UIz%2F0qiRCBiegkyeAyvFNwZGLbTbiMAJHN%2FfZxNkv%2FaDjJP%2BO7vI0nwqMYEDiu0x62HJ9zVrj%2BqhFfQkjhuWjwwwfq0vwY6pgGcp8BFSgPJjz7dow5REbzym7Kwyvht0iqLrFfcc39kUHxtZqOg1wzEnB61QxmybpxZ2q5k3RBikcDg1cZuC9GUZ7Blixbs3BlBUyusiBK1yZKkUbwcYKvLvVZ%2FWRlXJtQK69an2YCiMatyA8xfJ9AcQCxpSDT4OLt9nyn7sTERhdNI%2BJBqEPQPzt6TCmmyxqitILFZoOx5G4PiTsBdXa%2BT%2FyWfyb9q&X-Amz-Signature=7e0e31fd9c8348214743a80a193d74fb2444003f6861210a42411843394e75cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYS7WSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEbxx21YXSAd0v0KyKHJ5f7Slcyiyt9ci%2BGK56qILlHeAiA2FAgKRskRrSs49w9JZUjdAGgpaB3JAbiT%2FX3GDlkEqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWlwQcwwCzt0XNf5KtwDKIhiGxgT%2Ft7x98PrlRJCN0MrqSqucpyLrhxZ9ghN%2BVZmLRCw%2FEgA8l1VYAgniFe%2B3POoUiNBz6lGiXWLbWNOjloLmDwQs0XGl%2FvhqN%2B16IyVdrg2sI2vWNErvMtxSqQrYdCDO%2BLD7hflGgaAFiJUHvgCcBtyXS%2BMo2LbTBBGNG70EBPKuGRd5uvTZkPSXnOkxJHZJGUxApHxz7Pd3LI8jQr3sa%2FNiySPPS3H31yI1NWn%2FzHIZHjmYjL%2FChakn8RHWTcmiPBOegl1pdDQDmeaWYdgGihLObQVoBbYEiL9%2FX5kEYRgX60rT%2FMdRH18%2FtKNncY3f6OpTsTnFAX39IHASOi9wMVwx6DM9HdIkxxiUug8AkVNvcxboImvo15m2jqGURRGDFKgbVkZnuIF7iOmbJ2L3bAFOc9FRkV7jpFIhuicmxVQ3WEhUspG%2F%2FyAxYxgVURGxirzhfOTjHCzHF9YV0H5U1s%2F2G63%2BSd4%2B0Y3Xc92mewFWGDAdZoOsi%2B%2BfY6mlVmNaiPtCa1sJgX5UKRBm6cFCjeAhyMjEtAj5UIz%2F0qiRCBiegkyeAyvFNwZGLbTbiMAJHN%2FfZxNkv%2FaDjJP%2BO7vI0nwqMYEDiu0x62HJ9zVrj%2BqhFfQkjhuWjwwwfq0vwY6pgGcp8BFSgPJjz7dow5REbzym7Kwyvht0iqLrFfcc39kUHxtZqOg1wzEnB61QxmybpxZ2q5k3RBikcDg1cZuC9GUZ7Blixbs3BlBUyusiBK1yZKkUbwcYKvLvVZ%2FWRlXJtQK69an2YCiMatyA8xfJ9AcQCxpSDT4OLt9nyn7sTERhdNI%2BJBqEPQPzt6TCmmyxqitILFZoOx5G4PiTsBdXa%2BT%2FyWfyb9q&X-Amz-Signature=e492b45058c164770fbe46014d1120e53ab76401139354394a26feff3b8eba79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYS7WSX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEbxx21YXSAd0v0KyKHJ5f7Slcyiyt9ci%2BGK56qILlHeAiA2FAgKRskRrSs49w9JZUjdAGgpaB3JAbiT%2FX3GDlkEqiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWlwQcwwCzt0XNf5KtwDKIhiGxgT%2Ft7x98PrlRJCN0MrqSqucpyLrhxZ9ghN%2BVZmLRCw%2FEgA8l1VYAgniFe%2B3POoUiNBz6lGiXWLbWNOjloLmDwQs0XGl%2FvhqN%2B16IyVdrg2sI2vWNErvMtxSqQrYdCDO%2BLD7hflGgaAFiJUHvgCcBtyXS%2BMo2LbTBBGNG70EBPKuGRd5uvTZkPSXnOkxJHZJGUxApHxz7Pd3LI8jQr3sa%2FNiySPPS3H31yI1NWn%2FzHIZHjmYjL%2FChakn8RHWTcmiPBOegl1pdDQDmeaWYdgGihLObQVoBbYEiL9%2FX5kEYRgX60rT%2FMdRH18%2FtKNncY3f6OpTsTnFAX39IHASOi9wMVwx6DM9HdIkxxiUug8AkVNvcxboImvo15m2jqGURRGDFKgbVkZnuIF7iOmbJ2L3bAFOc9FRkV7jpFIhuicmxVQ3WEhUspG%2F%2FyAxYxgVURGxirzhfOTjHCzHF9YV0H5U1s%2F2G63%2BSd4%2B0Y3Xc92mewFWGDAdZoOsi%2B%2BfY6mlVmNaiPtCa1sJgX5UKRBm6cFCjeAhyMjEtAj5UIz%2F0qiRCBiegkyeAyvFNwZGLbTbiMAJHN%2FfZxNkv%2FaDjJP%2BO7vI0nwqMYEDiu0x62HJ9zVrj%2BqhFfQkjhuWjwwwfq0vwY6pgGcp8BFSgPJjz7dow5REbzym7Kwyvht0iqLrFfcc39kUHxtZqOg1wzEnB61QxmybpxZ2q5k3RBikcDg1cZuC9GUZ7Blixbs3BlBUyusiBK1yZKkUbwcYKvLvVZ%2FWRlXJtQK69an2YCiMatyA8xfJ9AcQCxpSDT4OLt9nyn7sTERhdNI%2BJBqEPQPzt6TCmmyxqitILFZoOx5G4PiTsBdXa%2BT%2FyWfyb9q&X-Amz-Signature=ebce4d5436aa1bd8fe626b35084dbc501a6745cc934b590d2f3dcf2af5216a17&X-Amz-SignedHeaders=host&x-id=GetObject)
