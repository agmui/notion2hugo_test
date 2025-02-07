---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJSTIBIF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGUT3qmU7zPAPHmDPOUfyiRIkhXYyF7zOTbt5sd7jaqAAiEA%2BkBxj3DxvUP1I8aikcOPeiCxz6ck2iGhakurGU0PSngq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAC5RHaEk1at5nFSxyrcA9NH3aLvVvUlsxXTjb8GdY2y5Z0UKkRGGEpjUQ%2FgOZC1HC6j%2BfpRaJuXe15cP18ZTFiQuiXYPyvbeYUQvWExkZT8H5ItSGQw1P2FbvF6A%2BNGaodjxlVcFSPECO3AuL%2F7fjPuUJWw3Z6O6LkN%2B7R2CZJAuz%2B58i4VQ%2FnQf65%2FVrPv66oy65e7TEA8FB9CFp0DoduLYBz%2BLN4D3wc%2FKQ3bL84hnf650VyFgh75uBoV9ly0kStw3a%2F3%2Bo4IOokghZYtSwdTJ1c5VlvaAzBgoW%2FyCi9V6bke5foQe7G%2FhIaCuJ8WbN9wYTtaGpk2TOtePU8YgLbFPGiGz3c5WEodOjyhUqN1IPHMIH40sZzMqKxkh%2B8M4DZjv0YWsKvd0FqblbB7bhKB5xBedRHYLknN1oYsLbQgXLTObVEvdObuYxlQ7V0j9cDD2jZkrIh722Y50oXSH%2BctPaCHGpRYgY9cNIBn0STm4Ag6%2FYEFVqC3vM%2BhRm0pKMqXu3%2BMWnUYbVHI2%2BobJbGMCg51uxcgJdtpaIHZIB8Elk2tXWdEJJEwiwcCkRwV9e2GqnLb2IcTXMU0FxQ%2BDAXdhkXCGreJlQqIDhVq33UwkPdDXwv%2BFKfDC75Ct0wTgEg6HFPw%2BrWfrkvMMPSMmL0GOqUB3JU2Dmc67ad%2F2lhKPRjeOblxom9tg7tMWuhCjkcOFJuLthVLc6It4%2BEE8CGjxXi%2B46aB1pl5JIM2i0zuGiozZO%2FT1daa2SgbyaujUOZ0QLAjjTMxmclAoWiHfoCi45SE5li4jvskf0UF5FfY1mt0NWZQ8%2BzH5ve%2BIfWyolOJDhIcWqlAaXLNxxxKXMFvD2nQVt0mhac8BJ9okXHwCIwPsJnDjyfn&X-Amz-Signature=76e7a52850f374a33fe76d189236266712bd34d9fff58252c98e64af057694b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJSTIBIF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGUT3qmU7zPAPHmDPOUfyiRIkhXYyF7zOTbt5sd7jaqAAiEA%2BkBxj3DxvUP1I8aikcOPeiCxz6ck2iGhakurGU0PSngq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAC5RHaEk1at5nFSxyrcA9NH3aLvVvUlsxXTjb8GdY2y5Z0UKkRGGEpjUQ%2FgOZC1HC6j%2BfpRaJuXe15cP18ZTFiQuiXYPyvbeYUQvWExkZT8H5ItSGQw1P2FbvF6A%2BNGaodjxlVcFSPECO3AuL%2F7fjPuUJWw3Z6O6LkN%2B7R2CZJAuz%2B58i4VQ%2FnQf65%2FVrPv66oy65e7TEA8FB9CFp0DoduLYBz%2BLN4D3wc%2FKQ3bL84hnf650VyFgh75uBoV9ly0kStw3a%2F3%2Bo4IOokghZYtSwdTJ1c5VlvaAzBgoW%2FyCi9V6bke5foQe7G%2FhIaCuJ8WbN9wYTtaGpk2TOtePU8YgLbFPGiGz3c5WEodOjyhUqN1IPHMIH40sZzMqKxkh%2B8M4DZjv0YWsKvd0FqblbB7bhKB5xBedRHYLknN1oYsLbQgXLTObVEvdObuYxlQ7V0j9cDD2jZkrIh722Y50oXSH%2BctPaCHGpRYgY9cNIBn0STm4Ag6%2FYEFVqC3vM%2BhRm0pKMqXu3%2BMWnUYbVHI2%2BobJbGMCg51uxcgJdtpaIHZIB8Elk2tXWdEJJEwiwcCkRwV9e2GqnLb2IcTXMU0FxQ%2BDAXdhkXCGreJlQqIDhVq33UwkPdDXwv%2BFKfDC75Ct0wTgEg6HFPw%2BrWfrkvMMPSMmL0GOqUB3JU2Dmc67ad%2F2lhKPRjeOblxom9tg7tMWuhCjkcOFJuLthVLc6It4%2BEE8CGjxXi%2B46aB1pl5JIM2i0zuGiozZO%2FT1daa2SgbyaujUOZ0QLAjjTMxmclAoWiHfoCi45SE5li4jvskf0UF5FfY1mt0NWZQ8%2BzH5ve%2BIfWyolOJDhIcWqlAaXLNxxxKXMFvD2nQVt0mhac8BJ9okXHwCIwPsJnDjyfn&X-Amz-Signature=5429da606d59ffb2ca808e21fb33ba3dfbc5fcfdfe3bbd1d2d503946619e198e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJSTIBIF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGUT3qmU7zPAPHmDPOUfyiRIkhXYyF7zOTbt5sd7jaqAAiEA%2BkBxj3DxvUP1I8aikcOPeiCxz6ck2iGhakurGU0PSngq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAC5RHaEk1at5nFSxyrcA9NH3aLvVvUlsxXTjb8GdY2y5Z0UKkRGGEpjUQ%2FgOZC1HC6j%2BfpRaJuXe15cP18ZTFiQuiXYPyvbeYUQvWExkZT8H5ItSGQw1P2FbvF6A%2BNGaodjxlVcFSPECO3AuL%2F7fjPuUJWw3Z6O6LkN%2B7R2CZJAuz%2B58i4VQ%2FnQf65%2FVrPv66oy65e7TEA8FB9CFp0DoduLYBz%2BLN4D3wc%2FKQ3bL84hnf650VyFgh75uBoV9ly0kStw3a%2F3%2Bo4IOokghZYtSwdTJ1c5VlvaAzBgoW%2FyCi9V6bke5foQe7G%2FhIaCuJ8WbN9wYTtaGpk2TOtePU8YgLbFPGiGz3c5WEodOjyhUqN1IPHMIH40sZzMqKxkh%2B8M4DZjv0YWsKvd0FqblbB7bhKB5xBedRHYLknN1oYsLbQgXLTObVEvdObuYxlQ7V0j9cDD2jZkrIh722Y50oXSH%2BctPaCHGpRYgY9cNIBn0STm4Ag6%2FYEFVqC3vM%2BhRm0pKMqXu3%2BMWnUYbVHI2%2BobJbGMCg51uxcgJdtpaIHZIB8Elk2tXWdEJJEwiwcCkRwV9e2GqnLb2IcTXMU0FxQ%2BDAXdhkXCGreJlQqIDhVq33UwkPdDXwv%2BFKfDC75Ct0wTgEg6HFPw%2BrWfrkvMMPSMmL0GOqUB3JU2Dmc67ad%2F2lhKPRjeOblxom9tg7tMWuhCjkcOFJuLthVLc6It4%2BEE8CGjxXi%2B46aB1pl5JIM2i0zuGiozZO%2FT1daa2SgbyaujUOZ0QLAjjTMxmclAoWiHfoCi45SE5li4jvskf0UF5FfY1mt0NWZQ8%2BzH5ve%2BIfWyolOJDhIcWqlAaXLNxxxKXMFvD2nQVt0mhac8BJ9okXHwCIwPsJnDjyfn&X-Amz-Signature=f9e926e5e8123ba0e9fff2aa49507d2143c6288416d1753895b2c9bdc1c37c18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJSTIBIF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGUT3qmU7zPAPHmDPOUfyiRIkhXYyF7zOTbt5sd7jaqAAiEA%2BkBxj3DxvUP1I8aikcOPeiCxz6ck2iGhakurGU0PSngq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAC5RHaEk1at5nFSxyrcA9NH3aLvVvUlsxXTjb8GdY2y5Z0UKkRGGEpjUQ%2FgOZC1HC6j%2BfpRaJuXe15cP18ZTFiQuiXYPyvbeYUQvWExkZT8H5ItSGQw1P2FbvF6A%2BNGaodjxlVcFSPECO3AuL%2F7fjPuUJWw3Z6O6LkN%2B7R2CZJAuz%2B58i4VQ%2FnQf65%2FVrPv66oy65e7TEA8FB9CFp0DoduLYBz%2BLN4D3wc%2FKQ3bL84hnf650VyFgh75uBoV9ly0kStw3a%2F3%2Bo4IOokghZYtSwdTJ1c5VlvaAzBgoW%2FyCi9V6bke5foQe7G%2FhIaCuJ8WbN9wYTtaGpk2TOtePU8YgLbFPGiGz3c5WEodOjyhUqN1IPHMIH40sZzMqKxkh%2B8M4DZjv0YWsKvd0FqblbB7bhKB5xBedRHYLknN1oYsLbQgXLTObVEvdObuYxlQ7V0j9cDD2jZkrIh722Y50oXSH%2BctPaCHGpRYgY9cNIBn0STm4Ag6%2FYEFVqC3vM%2BhRm0pKMqXu3%2BMWnUYbVHI2%2BobJbGMCg51uxcgJdtpaIHZIB8Elk2tXWdEJJEwiwcCkRwV9e2GqnLb2IcTXMU0FxQ%2BDAXdhkXCGreJlQqIDhVq33UwkPdDXwv%2BFKfDC75Ct0wTgEg6HFPw%2BrWfrkvMMPSMmL0GOqUB3JU2Dmc67ad%2F2lhKPRjeOblxom9tg7tMWuhCjkcOFJuLthVLc6It4%2BEE8CGjxXi%2B46aB1pl5JIM2i0zuGiozZO%2FT1daa2SgbyaujUOZ0QLAjjTMxmclAoWiHfoCi45SE5li4jvskf0UF5FfY1mt0NWZQ8%2BzH5ve%2BIfWyolOJDhIcWqlAaXLNxxxKXMFvD2nQVt0mhac8BJ9okXHwCIwPsJnDjyfn&X-Amz-Signature=da15f157484787eaa504e5cef2eeace93670b68922019e7312264ab10feb24ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJSTIBIF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGUT3qmU7zPAPHmDPOUfyiRIkhXYyF7zOTbt5sd7jaqAAiEA%2BkBxj3DxvUP1I8aikcOPeiCxz6ck2iGhakurGU0PSngq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAC5RHaEk1at5nFSxyrcA9NH3aLvVvUlsxXTjb8GdY2y5Z0UKkRGGEpjUQ%2FgOZC1HC6j%2BfpRaJuXe15cP18ZTFiQuiXYPyvbeYUQvWExkZT8H5ItSGQw1P2FbvF6A%2BNGaodjxlVcFSPECO3AuL%2F7fjPuUJWw3Z6O6LkN%2B7R2CZJAuz%2B58i4VQ%2FnQf65%2FVrPv66oy65e7TEA8FB9CFp0DoduLYBz%2BLN4D3wc%2FKQ3bL84hnf650VyFgh75uBoV9ly0kStw3a%2F3%2Bo4IOokghZYtSwdTJ1c5VlvaAzBgoW%2FyCi9V6bke5foQe7G%2FhIaCuJ8WbN9wYTtaGpk2TOtePU8YgLbFPGiGz3c5WEodOjyhUqN1IPHMIH40sZzMqKxkh%2B8M4DZjv0YWsKvd0FqblbB7bhKB5xBedRHYLknN1oYsLbQgXLTObVEvdObuYxlQ7V0j9cDD2jZkrIh722Y50oXSH%2BctPaCHGpRYgY9cNIBn0STm4Ag6%2FYEFVqC3vM%2BhRm0pKMqXu3%2BMWnUYbVHI2%2BobJbGMCg51uxcgJdtpaIHZIB8Elk2tXWdEJJEwiwcCkRwV9e2GqnLb2IcTXMU0FxQ%2BDAXdhkXCGreJlQqIDhVq33UwkPdDXwv%2BFKfDC75Ct0wTgEg6HFPw%2BrWfrkvMMPSMmL0GOqUB3JU2Dmc67ad%2F2lhKPRjeOblxom9tg7tMWuhCjkcOFJuLthVLc6It4%2BEE8CGjxXi%2B46aB1pl5JIM2i0zuGiozZO%2FT1daa2SgbyaujUOZ0QLAjjTMxmclAoWiHfoCi45SE5li4jvskf0UF5FfY1mt0NWZQ8%2BzH5ve%2BIfWyolOJDhIcWqlAaXLNxxxKXMFvD2nQVt0mhac8BJ9okXHwCIwPsJnDjyfn&X-Amz-Signature=dba6c5829da2fde44d90303e7f321cb300960654d6fea66a4db0b300bd08117e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJSTIBIF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGUT3qmU7zPAPHmDPOUfyiRIkhXYyF7zOTbt5sd7jaqAAiEA%2BkBxj3DxvUP1I8aikcOPeiCxz6ck2iGhakurGU0PSngq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAC5RHaEk1at5nFSxyrcA9NH3aLvVvUlsxXTjb8GdY2y5Z0UKkRGGEpjUQ%2FgOZC1HC6j%2BfpRaJuXe15cP18ZTFiQuiXYPyvbeYUQvWExkZT8H5ItSGQw1P2FbvF6A%2BNGaodjxlVcFSPECO3AuL%2F7fjPuUJWw3Z6O6LkN%2B7R2CZJAuz%2B58i4VQ%2FnQf65%2FVrPv66oy65e7TEA8FB9CFp0DoduLYBz%2BLN4D3wc%2FKQ3bL84hnf650VyFgh75uBoV9ly0kStw3a%2F3%2Bo4IOokghZYtSwdTJ1c5VlvaAzBgoW%2FyCi9V6bke5foQe7G%2FhIaCuJ8WbN9wYTtaGpk2TOtePU8YgLbFPGiGz3c5WEodOjyhUqN1IPHMIH40sZzMqKxkh%2B8M4DZjv0YWsKvd0FqblbB7bhKB5xBedRHYLknN1oYsLbQgXLTObVEvdObuYxlQ7V0j9cDD2jZkrIh722Y50oXSH%2BctPaCHGpRYgY9cNIBn0STm4Ag6%2FYEFVqC3vM%2BhRm0pKMqXu3%2BMWnUYbVHI2%2BobJbGMCg51uxcgJdtpaIHZIB8Elk2tXWdEJJEwiwcCkRwV9e2GqnLb2IcTXMU0FxQ%2BDAXdhkXCGreJlQqIDhVq33UwkPdDXwv%2BFKfDC75Ct0wTgEg6HFPw%2BrWfrkvMMPSMmL0GOqUB3JU2Dmc67ad%2F2lhKPRjeOblxom9tg7tMWuhCjkcOFJuLthVLc6It4%2BEE8CGjxXi%2B46aB1pl5JIM2i0zuGiozZO%2FT1daa2SgbyaujUOZ0QLAjjTMxmclAoWiHfoCi45SE5li4jvskf0UF5FfY1mt0NWZQ8%2BzH5ve%2BIfWyolOJDhIcWqlAaXLNxxxKXMFvD2nQVt0mhac8BJ9okXHwCIwPsJnDjyfn&X-Amz-Signature=3d29ebde8bdc3be70e4891ad5e06bc57b3280456e6db449c231b0c04714778a8&X-Amz-SignedHeaders=host&x-id=GetObject)
