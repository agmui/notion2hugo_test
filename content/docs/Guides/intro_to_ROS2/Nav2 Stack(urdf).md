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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LFXEB7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZFMT29GS3jgtpq6rP%2FA6dg53MxSDWEE2Py8qBtst1xAiApRhLmPmVdxImuvZLr2kLB6vfD%2B6kUf5zAWsqafgKPGiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKyXCsVAlglVkN%2FEAKtwDDRALpUqW0KYa2cT5i6dCxtd65KOvns7YuGWl4I%2BFS6oIAuWPDmC0xXNKoldvCij2hIfHJLpqiJ0JO%2BP7dr16E7kd8UCJeflNtgqQcZoZq4KVze5N2PYdBWzHatlFZIa8U%2FEqISxX4a0stKvszN9Ht%2FDIZSozgx7lzoYxoR9Cd9VBgnEeN0PJupM66l8RdvlKB19yWKtcHoIlKzPpbsvl3nuZPLUb%2B1SPLzQnoLYtLISQ5a0h%2BfLhMr3fk0gkN13yrNKMrdJRhiJCCPCdnNkNzuCG5d1DFNJ6IEIcyZ470hmlWs1UJHJOvA0AFWjpnVzJIeEvsKjxeN%2FJcunqaKED%2FsQ27OXOmODaCs11G9KHiQ0abij1CVekLyI15t9c%2FE8VOXq1rXTAETSGX0gPWt7uO9YpcJ8lSCzOhyvVJ46RI%2BtZdGQmkM0ko7k9yozgMLTJ4JPDnu%2BH8V3FtZPrl6R4wgTLvCcK%2BXioisfmKlKkBTahbBU4Gg7nhVH2H6EGYK4X7Vi0fDu6qH93vYHU%2B99XtLiL%2BHwM%2FksYhuUN2mR4ZcH3JYFq87IowyM1iWVX25CcLyeHAAyWgw%2FXgLNIfJkgbe2IWR7GFEDbNHw0%2BCyRBhv9F5idbYXeqouUQ90w0MuzwQY6pgFjZifr4hc9tMKg68us6%2BRyMVORTtSHnar5NpYXO3TcCc077A0iYH26Z0sKBKtNWJlhmCbp8HCMoZd7e%2BamI%2FTM6KQeK8RveW4B74ng472c%2Bv9XjHX4SLdbDctnh7tsx%2Bi4yn%2BwFYADV%2F5yxVMryTSINZIjFZTGgGHQl%2BUN2BOXu9YQYTy2e1L1o2gpJadJ%2BRCQ9K9%2F5oX2CId7X30g8SH7eI6Up5K1&X-Amz-Signature=9979d2aaedb57cd1ce848166508df587db178c8cafebf54dc57b539aaa6af31c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LFXEB7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZFMT29GS3jgtpq6rP%2FA6dg53MxSDWEE2Py8qBtst1xAiApRhLmPmVdxImuvZLr2kLB6vfD%2B6kUf5zAWsqafgKPGiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKyXCsVAlglVkN%2FEAKtwDDRALpUqW0KYa2cT5i6dCxtd65KOvns7YuGWl4I%2BFS6oIAuWPDmC0xXNKoldvCij2hIfHJLpqiJ0JO%2BP7dr16E7kd8UCJeflNtgqQcZoZq4KVze5N2PYdBWzHatlFZIa8U%2FEqISxX4a0stKvszN9Ht%2FDIZSozgx7lzoYxoR9Cd9VBgnEeN0PJupM66l8RdvlKB19yWKtcHoIlKzPpbsvl3nuZPLUb%2B1SPLzQnoLYtLISQ5a0h%2BfLhMr3fk0gkN13yrNKMrdJRhiJCCPCdnNkNzuCG5d1DFNJ6IEIcyZ470hmlWs1UJHJOvA0AFWjpnVzJIeEvsKjxeN%2FJcunqaKED%2FsQ27OXOmODaCs11G9KHiQ0abij1CVekLyI15t9c%2FE8VOXq1rXTAETSGX0gPWt7uO9YpcJ8lSCzOhyvVJ46RI%2BtZdGQmkM0ko7k9yozgMLTJ4JPDnu%2BH8V3FtZPrl6R4wgTLvCcK%2BXioisfmKlKkBTahbBU4Gg7nhVH2H6EGYK4X7Vi0fDu6qH93vYHU%2B99XtLiL%2BHwM%2FksYhuUN2mR4ZcH3JYFq87IowyM1iWVX25CcLyeHAAyWgw%2FXgLNIfJkgbe2IWR7GFEDbNHw0%2BCyRBhv9F5idbYXeqouUQ90w0MuzwQY6pgFjZifr4hc9tMKg68us6%2BRyMVORTtSHnar5NpYXO3TcCc077A0iYH26Z0sKBKtNWJlhmCbp8HCMoZd7e%2BamI%2FTM6KQeK8RveW4B74ng472c%2Bv9XjHX4SLdbDctnh7tsx%2Bi4yn%2BwFYADV%2F5yxVMryTSINZIjFZTGgGHQl%2BUN2BOXu9YQYTy2e1L1o2gpJadJ%2BRCQ9K9%2F5oX2CId7X30g8SH7eI6Up5K1&X-Amz-Signature=1c924f74ad32ce9a789e63afc5f8c25b4a52d057b9d4fec9eeedd565fc018d1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LFXEB7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZFMT29GS3jgtpq6rP%2FA6dg53MxSDWEE2Py8qBtst1xAiApRhLmPmVdxImuvZLr2kLB6vfD%2B6kUf5zAWsqafgKPGiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKyXCsVAlglVkN%2FEAKtwDDRALpUqW0KYa2cT5i6dCxtd65KOvns7YuGWl4I%2BFS6oIAuWPDmC0xXNKoldvCij2hIfHJLpqiJ0JO%2BP7dr16E7kd8UCJeflNtgqQcZoZq4KVze5N2PYdBWzHatlFZIa8U%2FEqISxX4a0stKvszN9Ht%2FDIZSozgx7lzoYxoR9Cd9VBgnEeN0PJupM66l8RdvlKB19yWKtcHoIlKzPpbsvl3nuZPLUb%2B1SPLzQnoLYtLISQ5a0h%2BfLhMr3fk0gkN13yrNKMrdJRhiJCCPCdnNkNzuCG5d1DFNJ6IEIcyZ470hmlWs1UJHJOvA0AFWjpnVzJIeEvsKjxeN%2FJcunqaKED%2FsQ27OXOmODaCs11G9KHiQ0abij1CVekLyI15t9c%2FE8VOXq1rXTAETSGX0gPWt7uO9YpcJ8lSCzOhyvVJ46RI%2BtZdGQmkM0ko7k9yozgMLTJ4JPDnu%2BH8V3FtZPrl6R4wgTLvCcK%2BXioisfmKlKkBTahbBU4Gg7nhVH2H6EGYK4X7Vi0fDu6qH93vYHU%2B99XtLiL%2BHwM%2FksYhuUN2mR4ZcH3JYFq87IowyM1iWVX25CcLyeHAAyWgw%2FXgLNIfJkgbe2IWR7GFEDbNHw0%2BCyRBhv9F5idbYXeqouUQ90w0MuzwQY6pgFjZifr4hc9tMKg68us6%2BRyMVORTtSHnar5NpYXO3TcCc077A0iYH26Z0sKBKtNWJlhmCbp8HCMoZd7e%2BamI%2FTM6KQeK8RveW4B74ng472c%2Bv9XjHX4SLdbDctnh7tsx%2Bi4yn%2BwFYADV%2F5yxVMryTSINZIjFZTGgGHQl%2BUN2BOXu9YQYTy2e1L1o2gpJadJ%2BRCQ9K9%2F5oX2CId7X30g8SH7eI6Up5K1&X-Amz-Signature=348e45ca49d9f516092224d1bcb7c8e31edf460f1f3f91c5b08b9c0b0c059f59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LFXEB7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZFMT29GS3jgtpq6rP%2FA6dg53MxSDWEE2Py8qBtst1xAiApRhLmPmVdxImuvZLr2kLB6vfD%2B6kUf5zAWsqafgKPGiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKyXCsVAlglVkN%2FEAKtwDDRALpUqW0KYa2cT5i6dCxtd65KOvns7YuGWl4I%2BFS6oIAuWPDmC0xXNKoldvCij2hIfHJLpqiJ0JO%2BP7dr16E7kd8UCJeflNtgqQcZoZq4KVze5N2PYdBWzHatlFZIa8U%2FEqISxX4a0stKvszN9Ht%2FDIZSozgx7lzoYxoR9Cd9VBgnEeN0PJupM66l8RdvlKB19yWKtcHoIlKzPpbsvl3nuZPLUb%2B1SPLzQnoLYtLISQ5a0h%2BfLhMr3fk0gkN13yrNKMrdJRhiJCCPCdnNkNzuCG5d1DFNJ6IEIcyZ470hmlWs1UJHJOvA0AFWjpnVzJIeEvsKjxeN%2FJcunqaKED%2FsQ27OXOmODaCs11G9KHiQ0abij1CVekLyI15t9c%2FE8VOXq1rXTAETSGX0gPWt7uO9YpcJ8lSCzOhyvVJ46RI%2BtZdGQmkM0ko7k9yozgMLTJ4JPDnu%2BH8V3FtZPrl6R4wgTLvCcK%2BXioisfmKlKkBTahbBU4Gg7nhVH2H6EGYK4X7Vi0fDu6qH93vYHU%2B99XtLiL%2BHwM%2FksYhuUN2mR4ZcH3JYFq87IowyM1iWVX25CcLyeHAAyWgw%2FXgLNIfJkgbe2IWR7GFEDbNHw0%2BCyRBhv9F5idbYXeqouUQ90w0MuzwQY6pgFjZifr4hc9tMKg68us6%2BRyMVORTtSHnar5NpYXO3TcCc077A0iYH26Z0sKBKtNWJlhmCbp8HCMoZd7e%2BamI%2FTM6KQeK8RveW4B74ng472c%2Bv9XjHX4SLdbDctnh7tsx%2Bi4yn%2BwFYADV%2F5yxVMryTSINZIjFZTGgGHQl%2BUN2BOXu9YQYTy2e1L1o2gpJadJ%2BRCQ9K9%2F5oX2CId7X30g8SH7eI6Up5K1&X-Amz-Signature=f6c5191a2e36de752cd2cafaba66cb3db6af3222b85de6856ffaf43523806ada&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LFXEB7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZFMT29GS3jgtpq6rP%2FA6dg53MxSDWEE2Py8qBtst1xAiApRhLmPmVdxImuvZLr2kLB6vfD%2B6kUf5zAWsqafgKPGiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKyXCsVAlglVkN%2FEAKtwDDRALpUqW0KYa2cT5i6dCxtd65KOvns7YuGWl4I%2BFS6oIAuWPDmC0xXNKoldvCij2hIfHJLpqiJ0JO%2BP7dr16E7kd8UCJeflNtgqQcZoZq4KVze5N2PYdBWzHatlFZIa8U%2FEqISxX4a0stKvszN9Ht%2FDIZSozgx7lzoYxoR9Cd9VBgnEeN0PJupM66l8RdvlKB19yWKtcHoIlKzPpbsvl3nuZPLUb%2B1SPLzQnoLYtLISQ5a0h%2BfLhMr3fk0gkN13yrNKMrdJRhiJCCPCdnNkNzuCG5d1DFNJ6IEIcyZ470hmlWs1UJHJOvA0AFWjpnVzJIeEvsKjxeN%2FJcunqaKED%2FsQ27OXOmODaCs11G9KHiQ0abij1CVekLyI15t9c%2FE8VOXq1rXTAETSGX0gPWt7uO9YpcJ8lSCzOhyvVJ46RI%2BtZdGQmkM0ko7k9yozgMLTJ4JPDnu%2BH8V3FtZPrl6R4wgTLvCcK%2BXioisfmKlKkBTahbBU4Gg7nhVH2H6EGYK4X7Vi0fDu6qH93vYHU%2B99XtLiL%2BHwM%2FksYhuUN2mR4ZcH3JYFq87IowyM1iWVX25CcLyeHAAyWgw%2FXgLNIfJkgbe2IWR7GFEDbNHw0%2BCyRBhv9F5idbYXeqouUQ90w0MuzwQY6pgFjZifr4hc9tMKg68us6%2BRyMVORTtSHnar5NpYXO3TcCc077A0iYH26Z0sKBKtNWJlhmCbp8HCMoZd7e%2BamI%2FTM6KQeK8RveW4B74ng472c%2Bv9XjHX4SLdbDctnh7tsx%2Bi4yn%2BwFYADV%2F5yxVMryTSINZIjFZTGgGHQl%2BUN2BOXu9YQYTy2e1L1o2gpJadJ%2BRCQ9K9%2F5oX2CId7X30g8SH7eI6Up5K1&X-Amz-Signature=7005b662beadeae9b2a3d631a32182af1d33ed88244ec44bb7b2a115697d36f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6LFXEB7%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZFMT29GS3jgtpq6rP%2FA6dg53MxSDWEE2Py8qBtst1xAiApRhLmPmVdxImuvZLr2kLB6vfD%2B6kUf5zAWsqafgKPGiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKyXCsVAlglVkN%2FEAKtwDDRALpUqW0KYa2cT5i6dCxtd65KOvns7YuGWl4I%2BFS6oIAuWPDmC0xXNKoldvCij2hIfHJLpqiJ0JO%2BP7dr16E7kd8UCJeflNtgqQcZoZq4KVze5N2PYdBWzHatlFZIa8U%2FEqISxX4a0stKvszN9Ht%2FDIZSozgx7lzoYxoR9Cd9VBgnEeN0PJupM66l8RdvlKB19yWKtcHoIlKzPpbsvl3nuZPLUb%2B1SPLzQnoLYtLISQ5a0h%2BfLhMr3fk0gkN13yrNKMrdJRhiJCCPCdnNkNzuCG5d1DFNJ6IEIcyZ470hmlWs1UJHJOvA0AFWjpnVzJIeEvsKjxeN%2FJcunqaKED%2FsQ27OXOmODaCs11G9KHiQ0abij1CVekLyI15t9c%2FE8VOXq1rXTAETSGX0gPWt7uO9YpcJ8lSCzOhyvVJ46RI%2BtZdGQmkM0ko7k9yozgMLTJ4JPDnu%2BH8V3FtZPrl6R4wgTLvCcK%2BXioisfmKlKkBTahbBU4Gg7nhVH2H6EGYK4X7Vi0fDu6qH93vYHU%2B99XtLiL%2BHwM%2FksYhuUN2mR4ZcH3JYFq87IowyM1iWVX25CcLyeHAAyWgw%2FXgLNIfJkgbe2IWR7GFEDbNHw0%2BCyRBhv9F5idbYXeqouUQ90w0MuzwQY6pgFjZifr4hc9tMKg68us6%2BRyMVORTtSHnar5NpYXO3TcCc077A0iYH26Z0sKBKtNWJlhmCbp8HCMoZd7e%2BamI%2FTM6KQeK8RveW4B74ng472c%2Bv9XjHX4SLdbDctnh7tsx%2Bi4yn%2BwFYADV%2F5yxVMryTSINZIjFZTGgGHQl%2BUN2BOXu9YQYTy2e1L1o2gpJadJ%2BRCQ9K9%2F5oX2CId7X30g8SH7eI6Up5K1&X-Amz-Signature=20d4f5d35c29044edb249c8ed55b4d963feb5da528ace24ee55ee833d29cd37a&X-Amz-SignedHeaders=host&x-id=GetObject)
