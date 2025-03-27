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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2MO7ZM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxg0eRPUNBbhFiUhOk59TYnJKLgDPuQRLvA9lvPTAE8AIgBVRoLqPlFGbiIhqSLi0AE2g62vpWYsjeN4WkCLCxADsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNyhJllBxOE1LKZGiSrcA5cBEgVPcinfhgKZAsX82%2FF7V0sdIIZlnxcJrmhiuxM%2Bu%2BExhqBGij%2BYAUyuWeoXKI%2BQhfeMF9Ul6q7DNl67%2FktSqtEJXFQu2got0%2BLdd57eWNmijKMSDVufumDBRlrleXXJ2oIfPg7xrf%2F%2Fg1ZWRs0P8oL6syEPP3fc7gmFlGz6bq%2FB5pPyfrpCLQZ%2BpXV61Pg4NsTQqRhJacOc92NXubHhUG2UUhBl6D2Hpna4y%2FvCC9msCWMG7vAtanXcBjnR6h8mWRPRgV0ZCJugqWRFTDeT14PNbnsk%2FON2xo%2BNkwep2oC4FuOpC747MocNcnzaGsDeX7VGGhGzBQ2AC3S7K0AV14Jq0eYYGJJJLCrVpAHDkw721JRE%2FaFbR2R0g1gxzUHO1Hp7p8KJAvw2HuVulasCwCuvL3mTEv42weFvCHEE7Y3DUesmtiHMadHgsZbOcP570idumyAtXN4utKhFhvLNatdpjSmnZt8HqQazwibTi9T%2FOz7bOoBn8%2B5qwheCk9OpYnRQvUo%2FdmLsnYmO31aLI2hu6Pk69XpvE5KdWw1yUb%2Byu3%2BaaVnFoYB2i%2BEPSNo7dRm4RbvW58SeMdtdhT5l74nFctY6YjfjLlC2Vyt2FLP6t6QFU0KJWkd7MITdlr8GOqUBP79ttyj%2BuyeJbOj9qXu2%2Bgn%2BT1ZVr5Yt5ZR0ueiBC1O%2FujoYa%2BzYxlOTPLLpws2cXacMjU7rgn2fUBT3e3TPUXUKdA%2FqRGWnN%2FBjQiYMp6JKmI%2FUjNZESPTwteY%2BukQVyq5B1XORfkB0LEHBjMJftyF89uc3Eqxq4OdjtoPuGPmV8W7WhXdGynhe8HRubWlTvbV%2FHoBNWfBFPwOk3OLxP6hP2Abo&X-Amz-Signature=36ef4567cb5aa98e4a271b007106c10586d0a982fc969fbe256004a64816a297&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2MO7ZM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxg0eRPUNBbhFiUhOk59TYnJKLgDPuQRLvA9lvPTAE8AIgBVRoLqPlFGbiIhqSLi0AE2g62vpWYsjeN4WkCLCxADsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNyhJllBxOE1LKZGiSrcA5cBEgVPcinfhgKZAsX82%2FF7V0sdIIZlnxcJrmhiuxM%2Bu%2BExhqBGij%2BYAUyuWeoXKI%2BQhfeMF9Ul6q7DNl67%2FktSqtEJXFQu2got0%2BLdd57eWNmijKMSDVufumDBRlrleXXJ2oIfPg7xrf%2F%2Fg1ZWRs0P8oL6syEPP3fc7gmFlGz6bq%2FB5pPyfrpCLQZ%2BpXV61Pg4NsTQqRhJacOc92NXubHhUG2UUhBl6D2Hpna4y%2FvCC9msCWMG7vAtanXcBjnR6h8mWRPRgV0ZCJugqWRFTDeT14PNbnsk%2FON2xo%2BNkwep2oC4FuOpC747MocNcnzaGsDeX7VGGhGzBQ2AC3S7K0AV14Jq0eYYGJJJLCrVpAHDkw721JRE%2FaFbR2R0g1gxzUHO1Hp7p8KJAvw2HuVulasCwCuvL3mTEv42weFvCHEE7Y3DUesmtiHMadHgsZbOcP570idumyAtXN4utKhFhvLNatdpjSmnZt8HqQazwibTi9T%2FOz7bOoBn8%2B5qwheCk9OpYnRQvUo%2FdmLsnYmO31aLI2hu6Pk69XpvE5KdWw1yUb%2Byu3%2BaaVnFoYB2i%2BEPSNo7dRm4RbvW58SeMdtdhT5l74nFctY6YjfjLlC2Vyt2FLP6t6QFU0KJWkd7MITdlr8GOqUBP79ttyj%2BuyeJbOj9qXu2%2Bgn%2BT1ZVr5Yt5ZR0ueiBC1O%2FujoYa%2BzYxlOTPLLpws2cXacMjU7rgn2fUBT3e3TPUXUKdA%2FqRGWnN%2FBjQiYMp6JKmI%2FUjNZESPTwteY%2BukQVyq5B1XORfkB0LEHBjMJftyF89uc3Eqxq4OdjtoPuGPmV8W7WhXdGynhe8HRubWlTvbV%2FHoBNWfBFPwOk3OLxP6hP2Abo&X-Amz-Signature=355a24135cd22b69b69a3b27e4fbf8714cc4a0ea422c3206a94da7785c398d3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2MO7ZM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxg0eRPUNBbhFiUhOk59TYnJKLgDPuQRLvA9lvPTAE8AIgBVRoLqPlFGbiIhqSLi0AE2g62vpWYsjeN4WkCLCxADsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNyhJllBxOE1LKZGiSrcA5cBEgVPcinfhgKZAsX82%2FF7V0sdIIZlnxcJrmhiuxM%2Bu%2BExhqBGij%2BYAUyuWeoXKI%2BQhfeMF9Ul6q7DNl67%2FktSqtEJXFQu2got0%2BLdd57eWNmijKMSDVufumDBRlrleXXJ2oIfPg7xrf%2F%2Fg1ZWRs0P8oL6syEPP3fc7gmFlGz6bq%2FB5pPyfrpCLQZ%2BpXV61Pg4NsTQqRhJacOc92NXubHhUG2UUhBl6D2Hpna4y%2FvCC9msCWMG7vAtanXcBjnR6h8mWRPRgV0ZCJugqWRFTDeT14PNbnsk%2FON2xo%2BNkwep2oC4FuOpC747MocNcnzaGsDeX7VGGhGzBQ2AC3S7K0AV14Jq0eYYGJJJLCrVpAHDkw721JRE%2FaFbR2R0g1gxzUHO1Hp7p8KJAvw2HuVulasCwCuvL3mTEv42weFvCHEE7Y3DUesmtiHMadHgsZbOcP570idumyAtXN4utKhFhvLNatdpjSmnZt8HqQazwibTi9T%2FOz7bOoBn8%2B5qwheCk9OpYnRQvUo%2FdmLsnYmO31aLI2hu6Pk69XpvE5KdWw1yUb%2Byu3%2BaaVnFoYB2i%2BEPSNo7dRm4RbvW58SeMdtdhT5l74nFctY6YjfjLlC2Vyt2FLP6t6QFU0KJWkd7MITdlr8GOqUBP79ttyj%2BuyeJbOj9qXu2%2Bgn%2BT1ZVr5Yt5ZR0ueiBC1O%2FujoYa%2BzYxlOTPLLpws2cXacMjU7rgn2fUBT3e3TPUXUKdA%2FqRGWnN%2FBjQiYMp6JKmI%2FUjNZESPTwteY%2BukQVyq5B1XORfkB0LEHBjMJftyF89uc3Eqxq4OdjtoPuGPmV8W7WhXdGynhe8HRubWlTvbV%2FHoBNWfBFPwOk3OLxP6hP2Abo&X-Amz-Signature=01c0c6dc1a5edd4c7376490471e5db3d1fe22fefe8f7592ae041926b5ead57b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2MO7ZM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxg0eRPUNBbhFiUhOk59TYnJKLgDPuQRLvA9lvPTAE8AIgBVRoLqPlFGbiIhqSLi0AE2g62vpWYsjeN4WkCLCxADsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNyhJllBxOE1LKZGiSrcA5cBEgVPcinfhgKZAsX82%2FF7V0sdIIZlnxcJrmhiuxM%2Bu%2BExhqBGij%2BYAUyuWeoXKI%2BQhfeMF9Ul6q7DNl67%2FktSqtEJXFQu2got0%2BLdd57eWNmijKMSDVufumDBRlrleXXJ2oIfPg7xrf%2F%2Fg1ZWRs0P8oL6syEPP3fc7gmFlGz6bq%2FB5pPyfrpCLQZ%2BpXV61Pg4NsTQqRhJacOc92NXubHhUG2UUhBl6D2Hpna4y%2FvCC9msCWMG7vAtanXcBjnR6h8mWRPRgV0ZCJugqWRFTDeT14PNbnsk%2FON2xo%2BNkwep2oC4FuOpC747MocNcnzaGsDeX7VGGhGzBQ2AC3S7K0AV14Jq0eYYGJJJLCrVpAHDkw721JRE%2FaFbR2R0g1gxzUHO1Hp7p8KJAvw2HuVulasCwCuvL3mTEv42weFvCHEE7Y3DUesmtiHMadHgsZbOcP570idumyAtXN4utKhFhvLNatdpjSmnZt8HqQazwibTi9T%2FOz7bOoBn8%2B5qwheCk9OpYnRQvUo%2FdmLsnYmO31aLI2hu6Pk69XpvE5KdWw1yUb%2Byu3%2BaaVnFoYB2i%2BEPSNo7dRm4RbvW58SeMdtdhT5l74nFctY6YjfjLlC2Vyt2FLP6t6QFU0KJWkd7MITdlr8GOqUBP79ttyj%2BuyeJbOj9qXu2%2Bgn%2BT1ZVr5Yt5ZR0ueiBC1O%2FujoYa%2BzYxlOTPLLpws2cXacMjU7rgn2fUBT3e3TPUXUKdA%2FqRGWnN%2FBjQiYMp6JKmI%2FUjNZESPTwteY%2BukQVyq5B1XORfkB0LEHBjMJftyF89uc3Eqxq4OdjtoPuGPmV8W7WhXdGynhe8HRubWlTvbV%2FHoBNWfBFPwOk3OLxP6hP2Abo&X-Amz-Signature=ae7198a0889197f52ed4c77e845f972390b2522244ee41b48756e290c5406bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2MO7ZM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxg0eRPUNBbhFiUhOk59TYnJKLgDPuQRLvA9lvPTAE8AIgBVRoLqPlFGbiIhqSLi0AE2g62vpWYsjeN4WkCLCxADsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNyhJllBxOE1LKZGiSrcA5cBEgVPcinfhgKZAsX82%2FF7V0sdIIZlnxcJrmhiuxM%2Bu%2BExhqBGij%2BYAUyuWeoXKI%2BQhfeMF9Ul6q7DNl67%2FktSqtEJXFQu2got0%2BLdd57eWNmijKMSDVufumDBRlrleXXJ2oIfPg7xrf%2F%2Fg1ZWRs0P8oL6syEPP3fc7gmFlGz6bq%2FB5pPyfrpCLQZ%2BpXV61Pg4NsTQqRhJacOc92NXubHhUG2UUhBl6D2Hpna4y%2FvCC9msCWMG7vAtanXcBjnR6h8mWRPRgV0ZCJugqWRFTDeT14PNbnsk%2FON2xo%2BNkwep2oC4FuOpC747MocNcnzaGsDeX7VGGhGzBQ2AC3S7K0AV14Jq0eYYGJJJLCrVpAHDkw721JRE%2FaFbR2R0g1gxzUHO1Hp7p8KJAvw2HuVulasCwCuvL3mTEv42weFvCHEE7Y3DUesmtiHMadHgsZbOcP570idumyAtXN4utKhFhvLNatdpjSmnZt8HqQazwibTi9T%2FOz7bOoBn8%2B5qwheCk9OpYnRQvUo%2FdmLsnYmO31aLI2hu6Pk69XpvE5KdWw1yUb%2Byu3%2BaaVnFoYB2i%2BEPSNo7dRm4RbvW58SeMdtdhT5l74nFctY6YjfjLlC2Vyt2FLP6t6QFU0KJWkd7MITdlr8GOqUBP79ttyj%2BuyeJbOj9qXu2%2Bgn%2BT1ZVr5Yt5ZR0ueiBC1O%2FujoYa%2BzYxlOTPLLpws2cXacMjU7rgn2fUBT3e3TPUXUKdA%2FqRGWnN%2FBjQiYMp6JKmI%2FUjNZESPTwteY%2BukQVyq5B1XORfkB0LEHBjMJftyF89uc3Eqxq4OdjtoPuGPmV8W7WhXdGynhe8HRubWlTvbV%2FHoBNWfBFPwOk3OLxP6hP2Abo&X-Amz-Signature=fc3e386f12e4b4d61f17e9746ef93f1b1956965a97d9a9d7684ffbd7acb71bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G2MO7ZM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxg0eRPUNBbhFiUhOk59TYnJKLgDPuQRLvA9lvPTAE8AIgBVRoLqPlFGbiIhqSLi0AE2g62vpWYsjeN4WkCLCxADsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDNyhJllBxOE1LKZGiSrcA5cBEgVPcinfhgKZAsX82%2FF7V0sdIIZlnxcJrmhiuxM%2Bu%2BExhqBGij%2BYAUyuWeoXKI%2BQhfeMF9Ul6q7DNl67%2FktSqtEJXFQu2got0%2BLdd57eWNmijKMSDVufumDBRlrleXXJ2oIfPg7xrf%2F%2Fg1ZWRs0P8oL6syEPP3fc7gmFlGz6bq%2FB5pPyfrpCLQZ%2BpXV61Pg4NsTQqRhJacOc92NXubHhUG2UUhBl6D2Hpna4y%2FvCC9msCWMG7vAtanXcBjnR6h8mWRPRgV0ZCJugqWRFTDeT14PNbnsk%2FON2xo%2BNkwep2oC4FuOpC747MocNcnzaGsDeX7VGGhGzBQ2AC3S7K0AV14Jq0eYYGJJJLCrVpAHDkw721JRE%2FaFbR2R0g1gxzUHO1Hp7p8KJAvw2HuVulasCwCuvL3mTEv42weFvCHEE7Y3DUesmtiHMadHgsZbOcP570idumyAtXN4utKhFhvLNatdpjSmnZt8HqQazwibTi9T%2FOz7bOoBn8%2B5qwheCk9OpYnRQvUo%2FdmLsnYmO31aLI2hu6Pk69XpvE5KdWw1yUb%2Byu3%2BaaVnFoYB2i%2BEPSNo7dRm4RbvW58SeMdtdhT5l74nFctY6YjfjLlC2Vyt2FLP6t6QFU0KJWkd7MITdlr8GOqUBP79ttyj%2BuyeJbOj9qXu2%2Bgn%2BT1ZVr5Yt5ZR0ueiBC1O%2FujoYa%2BzYxlOTPLLpws2cXacMjU7rgn2fUBT3e3TPUXUKdA%2FqRGWnN%2FBjQiYMp6JKmI%2FUjNZESPTwteY%2BukQVyq5B1XORfkB0LEHBjMJftyF89uc3Eqxq4OdjtoPuGPmV8W7WhXdGynhe8HRubWlTvbV%2FHoBNWfBFPwOk3OLxP6hP2Abo&X-Amz-Signature=95230d3139587668c9044e81d83683828e82001b06a8eb2ab61dbea3047e58dd&X-Amz-SignedHeaders=host&x-id=GetObject)
