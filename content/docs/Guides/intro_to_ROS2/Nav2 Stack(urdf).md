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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYXVPHR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDfFPOOxVuqUUTQHq%2Ffq3Glr3wLuWVmnsMXNZWiC%2BR3qQIgYL7F%2F%2FXPOfLqsffuvVi1khoGXFXQWThQl3eh6MykWUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvfpyV6yCVdwPxW0ircA250kcYI1LVT8C9P9ApiiIUmJ4iqGpmGQP6n9Hkj2yc3552Lx54GGGHeXn1%2BJpEBYDukTQqhMAlze7A5NO4MOa21XA3rwnesHNXkArzwmOKxQeNwyD9H%2BKr3vmVRsmUqzbCwu0JqAXg2KNXXRwbjRrpakU9wk9dSdVG%2F2etmHIw8%2F%2FUZp1jx0u5QJ6zBXkmtOS2JWjyS0h5Ii3ZDYe5GDqpnlIy1I%2B8jZfRpCMqMEblz8nQrPqffqa23QTKrnhKGVifl6GK7uPAUCSkCR1uo%2BwOZhn%2BFa10kNk%2BlwmRSiHYZUDxmoyroZmTAH90IjE1grGhZR8i2AjxapzyKpUxOBmWPTMETBdafGteqEwr2l7L5L1ElUtbyKlnR%2BRTxLSsav%2BZfDtJa%2BV2ox%2FPTMLBi4xVrkcC9VZrv0acEvN7i%2BK8X3xCYySzCwco5cVbviGfyH8IwiKhw6Oki6a263JkedCCHmvrsRf7Qi5p7Zv0SNe2blzSOL3L9o8eXz1esghb3WOg8dwcZmkgWNwWApgCOOu%2BcISuyh4UDRQZm3TgEl2Dqhl5eOBvDkmgE%2FgMahvF%2BT3fB39iZNZFSXC9nbFMiJJ8I0OEiILPHV1k5d3hq5Jc9%2BisK4M%2BPvlS69fh6ML%2FVm70GOqUBuf7KQrXNFEbGUpAV%2BMxxyCvRNw0C1DM%2FKkGGFgBWNPmrg97PYDDKV3Hqw%2Fqx0DI2Lmq7YJ6eMnO4Keb6jeBvXUG2iwYqlnpVuK2J25qQr7B9ZcHZXJVcvwTjwiI2Xr7XdoYa7QxLlJIIU7EzoR5eLaRDljnzYepub%2FB0iiiTIbxbpktYFyQ9Rf46gcn4I5EckM5qOeWSe%2FiOLCNIWlIcsacy7zNO&X-Amz-Signature=b52faa117e82d518168a3f09d864f740540ae42c1c9cd2fc415124f581e70ee2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYXVPHR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDfFPOOxVuqUUTQHq%2Ffq3Glr3wLuWVmnsMXNZWiC%2BR3qQIgYL7F%2F%2FXPOfLqsffuvVi1khoGXFXQWThQl3eh6MykWUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvfpyV6yCVdwPxW0ircA250kcYI1LVT8C9P9ApiiIUmJ4iqGpmGQP6n9Hkj2yc3552Lx54GGGHeXn1%2BJpEBYDukTQqhMAlze7A5NO4MOa21XA3rwnesHNXkArzwmOKxQeNwyD9H%2BKr3vmVRsmUqzbCwu0JqAXg2KNXXRwbjRrpakU9wk9dSdVG%2F2etmHIw8%2F%2FUZp1jx0u5QJ6zBXkmtOS2JWjyS0h5Ii3ZDYe5GDqpnlIy1I%2B8jZfRpCMqMEblz8nQrPqffqa23QTKrnhKGVifl6GK7uPAUCSkCR1uo%2BwOZhn%2BFa10kNk%2BlwmRSiHYZUDxmoyroZmTAH90IjE1grGhZR8i2AjxapzyKpUxOBmWPTMETBdafGteqEwr2l7L5L1ElUtbyKlnR%2BRTxLSsav%2BZfDtJa%2BV2ox%2FPTMLBi4xVrkcC9VZrv0acEvN7i%2BK8X3xCYySzCwco5cVbviGfyH8IwiKhw6Oki6a263JkedCCHmvrsRf7Qi5p7Zv0SNe2blzSOL3L9o8eXz1esghb3WOg8dwcZmkgWNwWApgCOOu%2BcISuyh4UDRQZm3TgEl2Dqhl5eOBvDkmgE%2FgMahvF%2BT3fB39iZNZFSXC9nbFMiJJ8I0OEiILPHV1k5d3hq5Jc9%2BisK4M%2BPvlS69fh6ML%2FVm70GOqUBuf7KQrXNFEbGUpAV%2BMxxyCvRNw0C1DM%2FKkGGFgBWNPmrg97PYDDKV3Hqw%2Fqx0DI2Lmq7YJ6eMnO4Keb6jeBvXUG2iwYqlnpVuK2J25qQr7B9ZcHZXJVcvwTjwiI2Xr7XdoYa7QxLlJIIU7EzoR5eLaRDljnzYepub%2FB0iiiTIbxbpktYFyQ9Rf46gcn4I5EckM5qOeWSe%2FiOLCNIWlIcsacy7zNO&X-Amz-Signature=c64161dee8dbdbc54efce53909643763197d21cfd011701a873faa0a61f62006&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYXVPHR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDfFPOOxVuqUUTQHq%2Ffq3Glr3wLuWVmnsMXNZWiC%2BR3qQIgYL7F%2F%2FXPOfLqsffuvVi1khoGXFXQWThQl3eh6MykWUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvfpyV6yCVdwPxW0ircA250kcYI1LVT8C9P9ApiiIUmJ4iqGpmGQP6n9Hkj2yc3552Lx54GGGHeXn1%2BJpEBYDukTQqhMAlze7A5NO4MOa21XA3rwnesHNXkArzwmOKxQeNwyD9H%2BKr3vmVRsmUqzbCwu0JqAXg2KNXXRwbjRrpakU9wk9dSdVG%2F2etmHIw8%2F%2FUZp1jx0u5QJ6zBXkmtOS2JWjyS0h5Ii3ZDYe5GDqpnlIy1I%2B8jZfRpCMqMEblz8nQrPqffqa23QTKrnhKGVifl6GK7uPAUCSkCR1uo%2BwOZhn%2BFa10kNk%2BlwmRSiHYZUDxmoyroZmTAH90IjE1grGhZR8i2AjxapzyKpUxOBmWPTMETBdafGteqEwr2l7L5L1ElUtbyKlnR%2BRTxLSsav%2BZfDtJa%2BV2ox%2FPTMLBi4xVrkcC9VZrv0acEvN7i%2BK8X3xCYySzCwco5cVbviGfyH8IwiKhw6Oki6a263JkedCCHmvrsRf7Qi5p7Zv0SNe2blzSOL3L9o8eXz1esghb3WOg8dwcZmkgWNwWApgCOOu%2BcISuyh4UDRQZm3TgEl2Dqhl5eOBvDkmgE%2FgMahvF%2BT3fB39iZNZFSXC9nbFMiJJ8I0OEiILPHV1k5d3hq5Jc9%2BisK4M%2BPvlS69fh6ML%2FVm70GOqUBuf7KQrXNFEbGUpAV%2BMxxyCvRNw0C1DM%2FKkGGFgBWNPmrg97PYDDKV3Hqw%2Fqx0DI2Lmq7YJ6eMnO4Keb6jeBvXUG2iwYqlnpVuK2J25qQr7B9ZcHZXJVcvwTjwiI2Xr7XdoYa7QxLlJIIU7EzoR5eLaRDljnzYepub%2FB0iiiTIbxbpktYFyQ9Rf46gcn4I5EckM5qOeWSe%2FiOLCNIWlIcsacy7zNO&X-Amz-Signature=1bc7ef808b414ed1c84267808f3a882a190f00cce69c42bd46fe60820ab1ce26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYXVPHR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDfFPOOxVuqUUTQHq%2Ffq3Glr3wLuWVmnsMXNZWiC%2BR3qQIgYL7F%2F%2FXPOfLqsffuvVi1khoGXFXQWThQl3eh6MykWUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvfpyV6yCVdwPxW0ircA250kcYI1LVT8C9P9ApiiIUmJ4iqGpmGQP6n9Hkj2yc3552Lx54GGGHeXn1%2BJpEBYDukTQqhMAlze7A5NO4MOa21XA3rwnesHNXkArzwmOKxQeNwyD9H%2BKr3vmVRsmUqzbCwu0JqAXg2KNXXRwbjRrpakU9wk9dSdVG%2F2etmHIw8%2F%2FUZp1jx0u5QJ6zBXkmtOS2JWjyS0h5Ii3ZDYe5GDqpnlIy1I%2B8jZfRpCMqMEblz8nQrPqffqa23QTKrnhKGVifl6GK7uPAUCSkCR1uo%2BwOZhn%2BFa10kNk%2BlwmRSiHYZUDxmoyroZmTAH90IjE1grGhZR8i2AjxapzyKpUxOBmWPTMETBdafGteqEwr2l7L5L1ElUtbyKlnR%2BRTxLSsav%2BZfDtJa%2BV2ox%2FPTMLBi4xVrkcC9VZrv0acEvN7i%2BK8X3xCYySzCwco5cVbviGfyH8IwiKhw6Oki6a263JkedCCHmvrsRf7Qi5p7Zv0SNe2blzSOL3L9o8eXz1esghb3WOg8dwcZmkgWNwWApgCOOu%2BcISuyh4UDRQZm3TgEl2Dqhl5eOBvDkmgE%2FgMahvF%2BT3fB39iZNZFSXC9nbFMiJJ8I0OEiILPHV1k5d3hq5Jc9%2BisK4M%2BPvlS69fh6ML%2FVm70GOqUBuf7KQrXNFEbGUpAV%2BMxxyCvRNw0C1DM%2FKkGGFgBWNPmrg97PYDDKV3Hqw%2Fqx0DI2Lmq7YJ6eMnO4Keb6jeBvXUG2iwYqlnpVuK2J25qQr7B9ZcHZXJVcvwTjwiI2Xr7XdoYa7QxLlJIIU7EzoR5eLaRDljnzYepub%2FB0iiiTIbxbpktYFyQ9Rf46gcn4I5EckM5qOeWSe%2FiOLCNIWlIcsacy7zNO&X-Amz-Signature=f85b24a18c1271bdf1f44c83660585f235c21ffa6ff45f53dd30877212b074bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYXVPHR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDfFPOOxVuqUUTQHq%2Ffq3Glr3wLuWVmnsMXNZWiC%2BR3qQIgYL7F%2F%2FXPOfLqsffuvVi1khoGXFXQWThQl3eh6MykWUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvfpyV6yCVdwPxW0ircA250kcYI1LVT8C9P9ApiiIUmJ4iqGpmGQP6n9Hkj2yc3552Lx54GGGHeXn1%2BJpEBYDukTQqhMAlze7A5NO4MOa21XA3rwnesHNXkArzwmOKxQeNwyD9H%2BKr3vmVRsmUqzbCwu0JqAXg2KNXXRwbjRrpakU9wk9dSdVG%2F2etmHIw8%2F%2FUZp1jx0u5QJ6zBXkmtOS2JWjyS0h5Ii3ZDYe5GDqpnlIy1I%2B8jZfRpCMqMEblz8nQrPqffqa23QTKrnhKGVifl6GK7uPAUCSkCR1uo%2BwOZhn%2BFa10kNk%2BlwmRSiHYZUDxmoyroZmTAH90IjE1grGhZR8i2AjxapzyKpUxOBmWPTMETBdafGteqEwr2l7L5L1ElUtbyKlnR%2BRTxLSsav%2BZfDtJa%2BV2ox%2FPTMLBi4xVrkcC9VZrv0acEvN7i%2BK8X3xCYySzCwco5cVbviGfyH8IwiKhw6Oki6a263JkedCCHmvrsRf7Qi5p7Zv0SNe2blzSOL3L9o8eXz1esghb3WOg8dwcZmkgWNwWApgCOOu%2BcISuyh4UDRQZm3TgEl2Dqhl5eOBvDkmgE%2FgMahvF%2BT3fB39iZNZFSXC9nbFMiJJ8I0OEiILPHV1k5d3hq5Jc9%2BisK4M%2BPvlS69fh6ML%2FVm70GOqUBuf7KQrXNFEbGUpAV%2BMxxyCvRNw0C1DM%2FKkGGFgBWNPmrg97PYDDKV3Hqw%2Fqx0DI2Lmq7YJ6eMnO4Keb6jeBvXUG2iwYqlnpVuK2J25qQr7B9ZcHZXJVcvwTjwiI2Xr7XdoYa7QxLlJIIU7EzoR5eLaRDljnzYepub%2FB0iiiTIbxbpktYFyQ9Rf46gcn4I5EckM5qOeWSe%2FiOLCNIWlIcsacy7zNO&X-Amz-Signature=4a49d8d56dd3afb2c9dbc2de5ce229562cbd24b22c9a8cbe8d7830da30c09283&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYXVPHR%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDfFPOOxVuqUUTQHq%2Ffq3Glr3wLuWVmnsMXNZWiC%2BR3qQIgYL7F%2F%2FXPOfLqsffuvVi1khoGXFXQWThQl3eh6MykWUUqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvfpyV6yCVdwPxW0ircA250kcYI1LVT8C9P9ApiiIUmJ4iqGpmGQP6n9Hkj2yc3552Lx54GGGHeXn1%2BJpEBYDukTQqhMAlze7A5NO4MOa21XA3rwnesHNXkArzwmOKxQeNwyD9H%2BKr3vmVRsmUqzbCwu0JqAXg2KNXXRwbjRrpakU9wk9dSdVG%2F2etmHIw8%2F%2FUZp1jx0u5QJ6zBXkmtOS2JWjyS0h5Ii3ZDYe5GDqpnlIy1I%2B8jZfRpCMqMEblz8nQrPqffqa23QTKrnhKGVifl6GK7uPAUCSkCR1uo%2BwOZhn%2BFa10kNk%2BlwmRSiHYZUDxmoyroZmTAH90IjE1grGhZR8i2AjxapzyKpUxOBmWPTMETBdafGteqEwr2l7L5L1ElUtbyKlnR%2BRTxLSsav%2BZfDtJa%2BV2ox%2FPTMLBi4xVrkcC9VZrv0acEvN7i%2BK8X3xCYySzCwco5cVbviGfyH8IwiKhw6Oki6a263JkedCCHmvrsRf7Qi5p7Zv0SNe2blzSOL3L9o8eXz1esghb3WOg8dwcZmkgWNwWApgCOOu%2BcISuyh4UDRQZm3TgEl2Dqhl5eOBvDkmgE%2FgMahvF%2BT3fB39iZNZFSXC9nbFMiJJ8I0OEiILPHV1k5d3hq5Jc9%2BisK4M%2BPvlS69fh6ML%2FVm70GOqUBuf7KQrXNFEbGUpAV%2BMxxyCvRNw0C1DM%2FKkGGFgBWNPmrg97PYDDKV3Hqw%2Fqx0DI2Lmq7YJ6eMnO4Keb6jeBvXUG2iwYqlnpVuK2J25qQr7B9ZcHZXJVcvwTjwiI2Xr7XdoYa7QxLlJIIU7EzoR5eLaRDljnzYepub%2FB0iiiTIbxbpktYFyQ9Rf46gcn4I5EckM5qOeWSe%2FiOLCNIWlIcsacy7zNO&X-Amz-Signature=33d5121808c32718b1a3ff2f3bc5f5143942d9a571bf95236aa0e19006818592&X-Amz-SignedHeaders=host&x-id=GetObject)
