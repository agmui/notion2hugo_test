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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HPT2VA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGejeloEMJAWM20pIDWrLJkeTa1Gir74qRlESsM8YyGHAiEA9BaamnN3P%2FdWRE6WRRnwTcIatC5yZ4CoimCKiWGp3uIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCTBM%2BYT6tXX4K9pkircA7tTxbuQ99kWseLxMm9omJXDPcs849UzFZyYMP47WZqWYUQT04T2vRUcZIu4YYtOsEEnL8uZRneo7iUi%2FufYU8CrhTaF%2FlSDIby3sItKztugJsJLBdBJ9cZ81tC%2BWg600oMhBqIx4RK20aiPn%2Bm4ordvGqMg3PmHg6fkyb8HPJYBewo1VVhcnDsnGwbCPjsrYpa3moxEYp39h%2BbA4qfiKg2eFt89L1th4728N0%2BssemSC1wbIIXlRH%2BnrbLJlpzQUW%2FoghJmL4IABD%2Bbm0srAngnWxjbK3w3YlLfAJeYc58rvksKVrwmDbP08pu%2Fd6FmGOc81gM3TSlw7GACFbPlWo9oo%2F151bP6spUNDTuzbQ1WglZvM17DfjHs0N64wO13VC19hJseW4c1sWEACKbhFHlzYeDnulbKMDjv7TyzGdStM0N7LG40lx9yMg3EbOuboWDHfarm8K0fVJ%2B1IZV89Ybwg4V4T%2FArrC%2B%2BtJCwdd7z2rsNuAYolDa%2F4Sb8DDM4zGrkdORJETwRyFLVnMShPYaCkH%2B0v4VXg76V%2FC1CEGW98VkH62BMJ03n3gy7fGOB0b1V5ql%2FIFFxIU5rEfK8lsylZUzv1E%2B9tS0rpeoINVFIzwx13k27Pzwsomy%2FMP%2Brub0GOqUByMqZan4RnzU0NrjqmPDfCUwb7XNAzCgOr7CUZ5SxiMDtDqxDoW6YaODdolvkSu4tpDKXWq7KpfbmRRtk9LhWSMpatUQrkl8HGBrhLjv53kYebNevc%2FwAq2ZYrmhBt0VQGJTZHY0zaAQSoyZ%2BEjX%2B1CX5QshtHRQd2tpd16qGznrrpScZcvD1zYRZF9hiCMcpSo%2BwfoCci%2BDTIyWsEOMBrKvvs%2B%2BQ&X-Amz-Signature=12dff90f7fa3005b56f0d7263f95ae788fa87e25963dc530923db689d3224b50&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HPT2VA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGejeloEMJAWM20pIDWrLJkeTa1Gir74qRlESsM8YyGHAiEA9BaamnN3P%2FdWRE6WRRnwTcIatC5yZ4CoimCKiWGp3uIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCTBM%2BYT6tXX4K9pkircA7tTxbuQ99kWseLxMm9omJXDPcs849UzFZyYMP47WZqWYUQT04T2vRUcZIu4YYtOsEEnL8uZRneo7iUi%2FufYU8CrhTaF%2FlSDIby3sItKztugJsJLBdBJ9cZ81tC%2BWg600oMhBqIx4RK20aiPn%2Bm4ordvGqMg3PmHg6fkyb8HPJYBewo1VVhcnDsnGwbCPjsrYpa3moxEYp39h%2BbA4qfiKg2eFt89L1th4728N0%2BssemSC1wbIIXlRH%2BnrbLJlpzQUW%2FoghJmL4IABD%2Bbm0srAngnWxjbK3w3YlLfAJeYc58rvksKVrwmDbP08pu%2Fd6FmGOc81gM3TSlw7GACFbPlWo9oo%2F151bP6spUNDTuzbQ1WglZvM17DfjHs0N64wO13VC19hJseW4c1sWEACKbhFHlzYeDnulbKMDjv7TyzGdStM0N7LG40lx9yMg3EbOuboWDHfarm8K0fVJ%2B1IZV89Ybwg4V4T%2FArrC%2B%2BtJCwdd7z2rsNuAYolDa%2F4Sb8DDM4zGrkdORJETwRyFLVnMShPYaCkH%2B0v4VXg76V%2FC1CEGW98VkH62BMJ03n3gy7fGOB0b1V5ql%2FIFFxIU5rEfK8lsylZUzv1E%2B9tS0rpeoINVFIzwx13k27Pzwsomy%2FMP%2Brub0GOqUByMqZan4RnzU0NrjqmPDfCUwb7XNAzCgOr7CUZ5SxiMDtDqxDoW6YaODdolvkSu4tpDKXWq7KpfbmRRtk9LhWSMpatUQrkl8HGBrhLjv53kYebNevc%2FwAq2ZYrmhBt0VQGJTZHY0zaAQSoyZ%2BEjX%2B1CX5QshtHRQd2tpd16qGznrrpScZcvD1zYRZF9hiCMcpSo%2BwfoCci%2BDTIyWsEOMBrKvvs%2B%2BQ&X-Amz-Signature=f67cdf8b77cf3f96e7f0d250205837bb089e2e8020157903ba3d784f9e64ffc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HPT2VA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGejeloEMJAWM20pIDWrLJkeTa1Gir74qRlESsM8YyGHAiEA9BaamnN3P%2FdWRE6WRRnwTcIatC5yZ4CoimCKiWGp3uIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCTBM%2BYT6tXX4K9pkircA7tTxbuQ99kWseLxMm9omJXDPcs849UzFZyYMP47WZqWYUQT04T2vRUcZIu4YYtOsEEnL8uZRneo7iUi%2FufYU8CrhTaF%2FlSDIby3sItKztugJsJLBdBJ9cZ81tC%2BWg600oMhBqIx4RK20aiPn%2Bm4ordvGqMg3PmHg6fkyb8HPJYBewo1VVhcnDsnGwbCPjsrYpa3moxEYp39h%2BbA4qfiKg2eFt89L1th4728N0%2BssemSC1wbIIXlRH%2BnrbLJlpzQUW%2FoghJmL4IABD%2Bbm0srAngnWxjbK3w3YlLfAJeYc58rvksKVrwmDbP08pu%2Fd6FmGOc81gM3TSlw7GACFbPlWo9oo%2F151bP6spUNDTuzbQ1WglZvM17DfjHs0N64wO13VC19hJseW4c1sWEACKbhFHlzYeDnulbKMDjv7TyzGdStM0N7LG40lx9yMg3EbOuboWDHfarm8K0fVJ%2B1IZV89Ybwg4V4T%2FArrC%2B%2BtJCwdd7z2rsNuAYolDa%2F4Sb8DDM4zGrkdORJETwRyFLVnMShPYaCkH%2B0v4VXg76V%2FC1CEGW98VkH62BMJ03n3gy7fGOB0b1V5ql%2FIFFxIU5rEfK8lsylZUzv1E%2B9tS0rpeoINVFIzwx13k27Pzwsomy%2FMP%2Brub0GOqUByMqZan4RnzU0NrjqmPDfCUwb7XNAzCgOr7CUZ5SxiMDtDqxDoW6YaODdolvkSu4tpDKXWq7KpfbmRRtk9LhWSMpatUQrkl8HGBrhLjv53kYebNevc%2FwAq2ZYrmhBt0VQGJTZHY0zaAQSoyZ%2BEjX%2B1CX5QshtHRQd2tpd16qGznrrpScZcvD1zYRZF9hiCMcpSo%2BwfoCci%2BDTIyWsEOMBrKvvs%2B%2BQ&X-Amz-Signature=1f1fb0320dc95b947af8643442603b317ddd0fcfe7f9d1372dc57adef0005907&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HPT2VA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGejeloEMJAWM20pIDWrLJkeTa1Gir74qRlESsM8YyGHAiEA9BaamnN3P%2FdWRE6WRRnwTcIatC5yZ4CoimCKiWGp3uIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCTBM%2BYT6tXX4K9pkircA7tTxbuQ99kWseLxMm9omJXDPcs849UzFZyYMP47WZqWYUQT04T2vRUcZIu4YYtOsEEnL8uZRneo7iUi%2FufYU8CrhTaF%2FlSDIby3sItKztugJsJLBdBJ9cZ81tC%2BWg600oMhBqIx4RK20aiPn%2Bm4ordvGqMg3PmHg6fkyb8HPJYBewo1VVhcnDsnGwbCPjsrYpa3moxEYp39h%2BbA4qfiKg2eFt89L1th4728N0%2BssemSC1wbIIXlRH%2BnrbLJlpzQUW%2FoghJmL4IABD%2Bbm0srAngnWxjbK3w3YlLfAJeYc58rvksKVrwmDbP08pu%2Fd6FmGOc81gM3TSlw7GACFbPlWo9oo%2F151bP6spUNDTuzbQ1WglZvM17DfjHs0N64wO13VC19hJseW4c1sWEACKbhFHlzYeDnulbKMDjv7TyzGdStM0N7LG40lx9yMg3EbOuboWDHfarm8K0fVJ%2B1IZV89Ybwg4V4T%2FArrC%2B%2BtJCwdd7z2rsNuAYolDa%2F4Sb8DDM4zGrkdORJETwRyFLVnMShPYaCkH%2B0v4VXg76V%2FC1CEGW98VkH62BMJ03n3gy7fGOB0b1V5ql%2FIFFxIU5rEfK8lsylZUzv1E%2B9tS0rpeoINVFIzwx13k27Pzwsomy%2FMP%2Brub0GOqUByMqZan4RnzU0NrjqmPDfCUwb7XNAzCgOr7CUZ5SxiMDtDqxDoW6YaODdolvkSu4tpDKXWq7KpfbmRRtk9LhWSMpatUQrkl8HGBrhLjv53kYebNevc%2FwAq2ZYrmhBt0VQGJTZHY0zaAQSoyZ%2BEjX%2B1CX5QshtHRQd2tpd16qGznrrpScZcvD1zYRZF9hiCMcpSo%2BwfoCci%2BDTIyWsEOMBrKvvs%2B%2BQ&X-Amz-Signature=6faf3a42d7c1a89f595f20eeeca1dfe7aad70860b5c1b84770623c78a04b9cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HPT2VA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGejeloEMJAWM20pIDWrLJkeTa1Gir74qRlESsM8YyGHAiEA9BaamnN3P%2FdWRE6WRRnwTcIatC5yZ4CoimCKiWGp3uIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCTBM%2BYT6tXX4K9pkircA7tTxbuQ99kWseLxMm9omJXDPcs849UzFZyYMP47WZqWYUQT04T2vRUcZIu4YYtOsEEnL8uZRneo7iUi%2FufYU8CrhTaF%2FlSDIby3sItKztugJsJLBdBJ9cZ81tC%2BWg600oMhBqIx4RK20aiPn%2Bm4ordvGqMg3PmHg6fkyb8HPJYBewo1VVhcnDsnGwbCPjsrYpa3moxEYp39h%2BbA4qfiKg2eFt89L1th4728N0%2BssemSC1wbIIXlRH%2BnrbLJlpzQUW%2FoghJmL4IABD%2Bbm0srAngnWxjbK3w3YlLfAJeYc58rvksKVrwmDbP08pu%2Fd6FmGOc81gM3TSlw7GACFbPlWo9oo%2F151bP6spUNDTuzbQ1WglZvM17DfjHs0N64wO13VC19hJseW4c1sWEACKbhFHlzYeDnulbKMDjv7TyzGdStM0N7LG40lx9yMg3EbOuboWDHfarm8K0fVJ%2B1IZV89Ybwg4V4T%2FArrC%2B%2BtJCwdd7z2rsNuAYolDa%2F4Sb8DDM4zGrkdORJETwRyFLVnMShPYaCkH%2B0v4VXg76V%2FC1CEGW98VkH62BMJ03n3gy7fGOB0b1V5ql%2FIFFxIU5rEfK8lsylZUzv1E%2B9tS0rpeoINVFIzwx13k27Pzwsomy%2FMP%2Brub0GOqUByMqZan4RnzU0NrjqmPDfCUwb7XNAzCgOr7CUZ5SxiMDtDqxDoW6YaODdolvkSu4tpDKXWq7KpfbmRRtk9LhWSMpatUQrkl8HGBrhLjv53kYebNevc%2FwAq2ZYrmhBt0VQGJTZHY0zaAQSoyZ%2BEjX%2B1CX5QshtHRQd2tpd16qGznrrpScZcvD1zYRZF9hiCMcpSo%2BwfoCci%2BDTIyWsEOMBrKvvs%2B%2BQ&X-Amz-Signature=ebc934b01818b3262a749802fac4e7fa6a5ed3603914fbacd572bf2c2df03011&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HPT2VA%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGejeloEMJAWM20pIDWrLJkeTa1Gir74qRlESsM8YyGHAiEA9BaamnN3P%2FdWRE6WRRnwTcIatC5yZ4CoimCKiWGp3uIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCTBM%2BYT6tXX4K9pkircA7tTxbuQ99kWseLxMm9omJXDPcs849UzFZyYMP47WZqWYUQT04T2vRUcZIu4YYtOsEEnL8uZRneo7iUi%2FufYU8CrhTaF%2FlSDIby3sItKztugJsJLBdBJ9cZ81tC%2BWg600oMhBqIx4RK20aiPn%2Bm4ordvGqMg3PmHg6fkyb8HPJYBewo1VVhcnDsnGwbCPjsrYpa3moxEYp39h%2BbA4qfiKg2eFt89L1th4728N0%2BssemSC1wbIIXlRH%2BnrbLJlpzQUW%2FoghJmL4IABD%2Bbm0srAngnWxjbK3w3YlLfAJeYc58rvksKVrwmDbP08pu%2Fd6FmGOc81gM3TSlw7GACFbPlWo9oo%2F151bP6spUNDTuzbQ1WglZvM17DfjHs0N64wO13VC19hJseW4c1sWEACKbhFHlzYeDnulbKMDjv7TyzGdStM0N7LG40lx9yMg3EbOuboWDHfarm8K0fVJ%2B1IZV89Ybwg4V4T%2FArrC%2B%2BtJCwdd7z2rsNuAYolDa%2F4Sb8DDM4zGrkdORJETwRyFLVnMShPYaCkH%2B0v4VXg76V%2FC1CEGW98VkH62BMJ03n3gy7fGOB0b1V5ql%2FIFFxIU5rEfK8lsylZUzv1E%2B9tS0rpeoINVFIzwx13k27Pzwsomy%2FMP%2Brub0GOqUByMqZan4RnzU0NrjqmPDfCUwb7XNAzCgOr7CUZ5SxiMDtDqxDoW6YaODdolvkSu4tpDKXWq7KpfbmRRtk9LhWSMpatUQrkl8HGBrhLjv53kYebNevc%2FwAq2ZYrmhBt0VQGJTZHY0zaAQSoyZ%2BEjX%2B1CX5QshtHRQd2tpd16qGznrrpScZcvD1zYRZF9hiCMcpSo%2BwfoCci%2BDTIyWsEOMBrKvvs%2B%2BQ&X-Amz-Signature=73044d58eaf2a454210e1e0b325169179366e2c32b773ecc2d318fe92ad150c6&X-Amz-SignedHeaders=host&x-id=GetObject)
