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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7YGF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEdIPUA%2BNxDZgSMLY8WMzdSu9%2FBPjgRIbKLioKTh3t%2BEAiEAj33gey6YvbDpBtO1WoFohXxyMFY8xS1cZ1sKN2Wq4Eoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGW3lspgBwy17uDbByrcA6b71%2FFORaWBf7n4h5tAE5E7jp9D3tXpxYKd3U1HH%2BYKRYPDIOMxtbbfgBxw1hMuc7hLzLF5cPmRXOyc%2BO6FYCuVlVwdw5P6kvGtsSlI1uRa4SjftIsB1CNnbB0V%2B%2BTlml2vhEpUwJsRXUhZiM%2FMg0b%2F4tyugzv3FdDbGQaoKLj1sUc33OQLra2eKrZEO9BJerxgIWxJh93pL8HaJN8xu6krunIVycKV8eXRCkaJkUNPLvFLvGLsKbBx41o%2FIEYI%2BkmXbv5bzZgfMQZqcXpaX3r9rwGL8Mh3mEJe0p%2F9Edm6PQXtT3n3bIvr310szJK2cSzYaCnb14s8PiqcRDIKC0mxzlz1Ut7vBaA%2F4HOWn0ocxX%2BZwUdUpaag54Y8hL1KuDATAuCY7qUSMvBPx976ciVEEFnmjBTdIDXhc0HAr8ftiyLEEw1hOzbi%2FvOLhanaUjk%2BiyZB%2Fvhu7AocsFMJSSOHCO4fhi5%2FbLL8fhleoNhT8WB9NkkU%2FQNDNs%2BkRQpvjFOQmh99GGLQp7hpiwtYkdqhZoqQdr5LKijtnyOE8JgF5NPaTo%2Fw4c9FygtvBeBBXw8Heg2v3JfPT9JWnEHSibTM9ouUcbW5mxgl5bcPOc77AhAqtMlaXCKzdrr0MJC8674GOqUBIDTgGQKIpSHB%2BVp8O3SpOVWwrUm%2FoF5APwdKwpj1sIGTcGOoKiMfByZOvBTu83XVO6jrq5d%2F7TqBTryjz6PIJokhszYHkX5mNnJmiae29NkoTDlMtewC3rGOot21NPsgmdrZDeurINd3rpL%2FjX%2FAQwkQaUAU0x8e56gCWLMt4su8ktm685OuOoGCLaWniZqFtb6h14L1SmHdiyIhKE8vhFYRJujo&X-Amz-Signature=cfef386398a9b0d7554dff6aafdfd8d0801e509adcb52ccd33fff98656e11383&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7YGF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEdIPUA%2BNxDZgSMLY8WMzdSu9%2FBPjgRIbKLioKTh3t%2BEAiEAj33gey6YvbDpBtO1WoFohXxyMFY8xS1cZ1sKN2Wq4Eoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGW3lspgBwy17uDbByrcA6b71%2FFORaWBf7n4h5tAE5E7jp9D3tXpxYKd3U1HH%2BYKRYPDIOMxtbbfgBxw1hMuc7hLzLF5cPmRXOyc%2BO6FYCuVlVwdw5P6kvGtsSlI1uRa4SjftIsB1CNnbB0V%2B%2BTlml2vhEpUwJsRXUhZiM%2FMg0b%2F4tyugzv3FdDbGQaoKLj1sUc33OQLra2eKrZEO9BJerxgIWxJh93pL8HaJN8xu6krunIVycKV8eXRCkaJkUNPLvFLvGLsKbBx41o%2FIEYI%2BkmXbv5bzZgfMQZqcXpaX3r9rwGL8Mh3mEJe0p%2F9Edm6PQXtT3n3bIvr310szJK2cSzYaCnb14s8PiqcRDIKC0mxzlz1Ut7vBaA%2F4HOWn0ocxX%2BZwUdUpaag54Y8hL1KuDATAuCY7qUSMvBPx976ciVEEFnmjBTdIDXhc0HAr8ftiyLEEw1hOzbi%2FvOLhanaUjk%2BiyZB%2Fvhu7AocsFMJSSOHCO4fhi5%2FbLL8fhleoNhT8WB9NkkU%2FQNDNs%2BkRQpvjFOQmh99GGLQp7hpiwtYkdqhZoqQdr5LKijtnyOE8JgF5NPaTo%2Fw4c9FygtvBeBBXw8Heg2v3JfPT9JWnEHSibTM9ouUcbW5mxgl5bcPOc77AhAqtMlaXCKzdrr0MJC8674GOqUBIDTgGQKIpSHB%2BVp8O3SpOVWwrUm%2FoF5APwdKwpj1sIGTcGOoKiMfByZOvBTu83XVO6jrq5d%2F7TqBTryjz6PIJokhszYHkX5mNnJmiae29NkoTDlMtewC3rGOot21NPsgmdrZDeurINd3rpL%2FjX%2FAQwkQaUAU0x8e56gCWLMt4su8ktm685OuOoGCLaWniZqFtb6h14L1SmHdiyIhKE8vhFYRJujo&X-Amz-Signature=02c080667aef632655561c4639973e84d0adfb3d4ca8c48fd824ef15870ee923&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7YGF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEdIPUA%2BNxDZgSMLY8WMzdSu9%2FBPjgRIbKLioKTh3t%2BEAiEAj33gey6YvbDpBtO1WoFohXxyMFY8xS1cZ1sKN2Wq4Eoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGW3lspgBwy17uDbByrcA6b71%2FFORaWBf7n4h5tAE5E7jp9D3tXpxYKd3U1HH%2BYKRYPDIOMxtbbfgBxw1hMuc7hLzLF5cPmRXOyc%2BO6FYCuVlVwdw5P6kvGtsSlI1uRa4SjftIsB1CNnbB0V%2B%2BTlml2vhEpUwJsRXUhZiM%2FMg0b%2F4tyugzv3FdDbGQaoKLj1sUc33OQLra2eKrZEO9BJerxgIWxJh93pL8HaJN8xu6krunIVycKV8eXRCkaJkUNPLvFLvGLsKbBx41o%2FIEYI%2BkmXbv5bzZgfMQZqcXpaX3r9rwGL8Mh3mEJe0p%2F9Edm6PQXtT3n3bIvr310szJK2cSzYaCnb14s8PiqcRDIKC0mxzlz1Ut7vBaA%2F4HOWn0ocxX%2BZwUdUpaag54Y8hL1KuDATAuCY7qUSMvBPx976ciVEEFnmjBTdIDXhc0HAr8ftiyLEEw1hOzbi%2FvOLhanaUjk%2BiyZB%2Fvhu7AocsFMJSSOHCO4fhi5%2FbLL8fhleoNhT8WB9NkkU%2FQNDNs%2BkRQpvjFOQmh99GGLQp7hpiwtYkdqhZoqQdr5LKijtnyOE8JgF5NPaTo%2Fw4c9FygtvBeBBXw8Heg2v3JfPT9JWnEHSibTM9ouUcbW5mxgl5bcPOc77AhAqtMlaXCKzdrr0MJC8674GOqUBIDTgGQKIpSHB%2BVp8O3SpOVWwrUm%2FoF5APwdKwpj1sIGTcGOoKiMfByZOvBTu83XVO6jrq5d%2F7TqBTryjz6PIJokhszYHkX5mNnJmiae29NkoTDlMtewC3rGOot21NPsgmdrZDeurINd3rpL%2FjX%2FAQwkQaUAU0x8e56gCWLMt4su8ktm685OuOoGCLaWniZqFtb6h14L1SmHdiyIhKE8vhFYRJujo&X-Amz-Signature=45d6e85af5fa69d0be468321aad28fc3dc9299523ac65d4df7414f545661d28d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7YGF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEdIPUA%2BNxDZgSMLY8WMzdSu9%2FBPjgRIbKLioKTh3t%2BEAiEAj33gey6YvbDpBtO1WoFohXxyMFY8xS1cZ1sKN2Wq4Eoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGW3lspgBwy17uDbByrcA6b71%2FFORaWBf7n4h5tAE5E7jp9D3tXpxYKd3U1HH%2BYKRYPDIOMxtbbfgBxw1hMuc7hLzLF5cPmRXOyc%2BO6FYCuVlVwdw5P6kvGtsSlI1uRa4SjftIsB1CNnbB0V%2B%2BTlml2vhEpUwJsRXUhZiM%2FMg0b%2F4tyugzv3FdDbGQaoKLj1sUc33OQLra2eKrZEO9BJerxgIWxJh93pL8HaJN8xu6krunIVycKV8eXRCkaJkUNPLvFLvGLsKbBx41o%2FIEYI%2BkmXbv5bzZgfMQZqcXpaX3r9rwGL8Mh3mEJe0p%2F9Edm6PQXtT3n3bIvr310szJK2cSzYaCnb14s8PiqcRDIKC0mxzlz1Ut7vBaA%2F4HOWn0ocxX%2BZwUdUpaag54Y8hL1KuDATAuCY7qUSMvBPx976ciVEEFnmjBTdIDXhc0HAr8ftiyLEEw1hOzbi%2FvOLhanaUjk%2BiyZB%2Fvhu7AocsFMJSSOHCO4fhi5%2FbLL8fhleoNhT8WB9NkkU%2FQNDNs%2BkRQpvjFOQmh99GGLQp7hpiwtYkdqhZoqQdr5LKijtnyOE8JgF5NPaTo%2Fw4c9FygtvBeBBXw8Heg2v3JfPT9JWnEHSibTM9ouUcbW5mxgl5bcPOc77AhAqtMlaXCKzdrr0MJC8674GOqUBIDTgGQKIpSHB%2BVp8O3SpOVWwrUm%2FoF5APwdKwpj1sIGTcGOoKiMfByZOvBTu83XVO6jrq5d%2F7TqBTryjz6PIJokhszYHkX5mNnJmiae29NkoTDlMtewC3rGOot21NPsgmdrZDeurINd3rpL%2FjX%2FAQwkQaUAU0x8e56gCWLMt4su8ktm685OuOoGCLaWniZqFtb6h14L1SmHdiyIhKE8vhFYRJujo&X-Amz-Signature=3fa831a45a733b097181d3e1fc84f448e947d411ebe199d0865926877035e975&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7YGF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEdIPUA%2BNxDZgSMLY8WMzdSu9%2FBPjgRIbKLioKTh3t%2BEAiEAj33gey6YvbDpBtO1WoFohXxyMFY8xS1cZ1sKN2Wq4Eoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGW3lspgBwy17uDbByrcA6b71%2FFORaWBf7n4h5tAE5E7jp9D3tXpxYKd3U1HH%2BYKRYPDIOMxtbbfgBxw1hMuc7hLzLF5cPmRXOyc%2BO6FYCuVlVwdw5P6kvGtsSlI1uRa4SjftIsB1CNnbB0V%2B%2BTlml2vhEpUwJsRXUhZiM%2FMg0b%2F4tyugzv3FdDbGQaoKLj1sUc33OQLra2eKrZEO9BJerxgIWxJh93pL8HaJN8xu6krunIVycKV8eXRCkaJkUNPLvFLvGLsKbBx41o%2FIEYI%2BkmXbv5bzZgfMQZqcXpaX3r9rwGL8Mh3mEJe0p%2F9Edm6PQXtT3n3bIvr310szJK2cSzYaCnb14s8PiqcRDIKC0mxzlz1Ut7vBaA%2F4HOWn0ocxX%2BZwUdUpaag54Y8hL1KuDATAuCY7qUSMvBPx976ciVEEFnmjBTdIDXhc0HAr8ftiyLEEw1hOzbi%2FvOLhanaUjk%2BiyZB%2Fvhu7AocsFMJSSOHCO4fhi5%2FbLL8fhleoNhT8WB9NkkU%2FQNDNs%2BkRQpvjFOQmh99GGLQp7hpiwtYkdqhZoqQdr5LKijtnyOE8JgF5NPaTo%2Fw4c9FygtvBeBBXw8Heg2v3JfPT9JWnEHSibTM9ouUcbW5mxgl5bcPOc77AhAqtMlaXCKzdrr0MJC8674GOqUBIDTgGQKIpSHB%2BVp8O3SpOVWwrUm%2FoF5APwdKwpj1sIGTcGOoKiMfByZOvBTu83XVO6jrq5d%2F7TqBTryjz6PIJokhszYHkX5mNnJmiae29NkoTDlMtewC3rGOot21NPsgmdrZDeurINd3rpL%2FjX%2FAQwkQaUAU0x8e56gCWLMt4su8ktm685OuOoGCLaWniZqFtb6h14L1SmHdiyIhKE8vhFYRJujo&X-Amz-Signature=f35ad4911a9c8d88ac033efd44dd96714427d5cfa17874673491ad229b9079a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7YGF2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEdIPUA%2BNxDZgSMLY8WMzdSu9%2FBPjgRIbKLioKTh3t%2BEAiEAj33gey6YvbDpBtO1WoFohXxyMFY8xS1cZ1sKN2Wq4Eoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGW3lspgBwy17uDbByrcA6b71%2FFORaWBf7n4h5tAE5E7jp9D3tXpxYKd3U1HH%2BYKRYPDIOMxtbbfgBxw1hMuc7hLzLF5cPmRXOyc%2BO6FYCuVlVwdw5P6kvGtsSlI1uRa4SjftIsB1CNnbB0V%2B%2BTlml2vhEpUwJsRXUhZiM%2FMg0b%2F4tyugzv3FdDbGQaoKLj1sUc33OQLra2eKrZEO9BJerxgIWxJh93pL8HaJN8xu6krunIVycKV8eXRCkaJkUNPLvFLvGLsKbBx41o%2FIEYI%2BkmXbv5bzZgfMQZqcXpaX3r9rwGL8Mh3mEJe0p%2F9Edm6PQXtT3n3bIvr310szJK2cSzYaCnb14s8PiqcRDIKC0mxzlz1Ut7vBaA%2F4HOWn0ocxX%2BZwUdUpaag54Y8hL1KuDATAuCY7qUSMvBPx976ciVEEFnmjBTdIDXhc0HAr8ftiyLEEw1hOzbi%2FvOLhanaUjk%2BiyZB%2Fvhu7AocsFMJSSOHCO4fhi5%2FbLL8fhleoNhT8WB9NkkU%2FQNDNs%2BkRQpvjFOQmh99GGLQp7hpiwtYkdqhZoqQdr5LKijtnyOE8JgF5NPaTo%2Fw4c9FygtvBeBBXw8Heg2v3JfPT9JWnEHSibTM9ouUcbW5mxgl5bcPOc77AhAqtMlaXCKzdrr0MJC8674GOqUBIDTgGQKIpSHB%2BVp8O3SpOVWwrUm%2FoF5APwdKwpj1sIGTcGOoKiMfByZOvBTu83XVO6jrq5d%2F7TqBTryjz6PIJokhszYHkX5mNnJmiae29NkoTDlMtewC3rGOot21NPsgmdrZDeurINd3rpL%2FjX%2FAQwkQaUAU0x8e56gCWLMt4su8ktm685OuOoGCLaWniZqFtb6h14L1SmHdiyIhKE8vhFYRJujo&X-Amz-Signature=ab17045d22cf45c9f66ffbd6cccecada46be58583281070f17ed2d9def97e9ec&X-Amz-SignedHeaders=host&x-id=GetObject)
