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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYHGOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHEt0fpAhHYcLr0dBLkprMv3S1pPv3M1MKomQXtSE54cAiBds6TDDsxndpWBR%2FL9Rx0zA985X0OxJ2Ae8z5SeWyzQSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYeGWOUPGdsZrcYDTKtwDso0G9Gal%2Fjs6v%2BN7cZASGs00dNspMJtwnW0J8K04v%2Fk8%2Bqt0O1TQPNMOBqXzYBvQxPurCoKRkmd%2B70SsCTj2fxr2nYThuJhM76cckxPNQJfkV6i10%2FbtkqAbWJLxYxWwjfuZc87MksBOVBLK%2FtfaYNREwydfGeoZgnE8snmhHdFcUv5t%2F3hJH8FUqIJeFBlav5j978t9ygR8D0c40IAmGZ6Wh0%2B3ZnMFVK1VyBFtXA5SiMDMLViSVCi%2BrDXKe6YZv0vqEgWgjhZ8988dK4ew%2BeqhdNjAMTnkJ3tCE0n2nH7NQee2gTnZLsp%2FNKrCcoMLQrrAsoc%2FgCfTtv2Zq3aGhIz8Lu3Vji%2BOgJqzLwVBx08ATaYtOLyC%2B48y00XzF76itUuhLJTpK3lnvufMIutuWNGG2tP6ENbngqWW8VMy7bQGnGcXETn6Einb1xavgdz73RA4De9yccmQOJhe8Yil1%2FhdCIvPS7ELjdsN%2BD3bblEnFR1suiNIUNQiXZGgLzE%2Fx6Agian%2BKDbV%2BtFiRYLoJGgbEs2cLcIWDYoCQG9dTeKyOTulsFOcLbsKHwpVmKz%2FMipjVf54gIRReMXAoeU343z64ebPXT0dKzJT3hk9B%2BLIOWRLN62CnGVsJrMwzvu3vwY6pgF4OJ1RmLuA6iwzGn1Qm08mPRqDsJ2A32sFLKAMIgzasUyB7aBh0bzCs69SBO%2BrlmQBaMz2TavwaIpFumxoX9By04WW%2FRuSjwnTD2AA5eVxtjwGYL2G%2FetzN9HMmVx8ChNk1T%2BksPdEW0o3THWR%2BS%2FubqcZFZXGCwRD7iLAdX8LUvYzegPtUJ4vOvY%2FrG8DCwemnVPllf%2FrKWksfPUBTMWoxVlHBa2B&X-Amz-Signature=9f84922a14b2e6dbb4a913eed850f0806745e7cf8fc4427235a8ef65bb7fc180&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYHGOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHEt0fpAhHYcLr0dBLkprMv3S1pPv3M1MKomQXtSE54cAiBds6TDDsxndpWBR%2FL9Rx0zA985X0OxJ2Ae8z5SeWyzQSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYeGWOUPGdsZrcYDTKtwDso0G9Gal%2Fjs6v%2BN7cZASGs00dNspMJtwnW0J8K04v%2Fk8%2Bqt0O1TQPNMOBqXzYBvQxPurCoKRkmd%2B70SsCTj2fxr2nYThuJhM76cckxPNQJfkV6i10%2FbtkqAbWJLxYxWwjfuZc87MksBOVBLK%2FtfaYNREwydfGeoZgnE8snmhHdFcUv5t%2F3hJH8FUqIJeFBlav5j978t9ygR8D0c40IAmGZ6Wh0%2B3ZnMFVK1VyBFtXA5SiMDMLViSVCi%2BrDXKe6YZv0vqEgWgjhZ8988dK4ew%2BeqhdNjAMTnkJ3tCE0n2nH7NQee2gTnZLsp%2FNKrCcoMLQrrAsoc%2FgCfTtv2Zq3aGhIz8Lu3Vji%2BOgJqzLwVBx08ATaYtOLyC%2B48y00XzF76itUuhLJTpK3lnvufMIutuWNGG2tP6ENbngqWW8VMy7bQGnGcXETn6Einb1xavgdz73RA4De9yccmQOJhe8Yil1%2FhdCIvPS7ELjdsN%2BD3bblEnFR1suiNIUNQiXZGgLzE%2Fx6Agian%2BKDbV%2BtFiRYLoJGgbEs2cLcIWDYoCQG9dTeKyOTulsFOcLbsKHwpVmKz%2FMipjVf54gIRReMXAoeU343z64ebPXT0dKzJT3hk9B%2BLIOWRLN62CnGVsJrMwzvu3vwY6pgF4OJ1RmLuA6iwzGn1Qm08mPRqDsJ2A32sFLKAMIgzasUyB7aBh0bzCs69SBO%2BrlmQBaMz2TavwaIpFumxoX9By04WW%2FRuSjwnTD2AA5eVxtjwGYL2G%2FetzN9HMmVx8ChNk1T%2BksPdEW0o3THWR%2BS%2FubqcZFZXGCwRD7iLAdX8LUvYzegPtUJ4vOvY%2FrG8DCwemnVPllf%2FrKWksfPUBTMWoxVlHBa2B&X-Amz-Signature=77ee66042748b6a6121c30a9465ec0c4ac483a0bbc156b6bea4813718ae75be1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYHGOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHEt0fpAhHYcLr0dBLkprMv3S1pPv3M1MKomQXtSE54cAiBds6TDDsxndpWBR%2FL9Rx0zA985X0OxJ2Ae8z5SeWyzQSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYeGWOUPGdsZrcYDTKtwDso0G9Gal%2Fjs6v%2BN7cZASGs00dNspMJtwnW0J8K04v%2Fk8%2Bqt0O1TQPNMOBqXzYBvQxPurCoKRkmd%2B70SsCTj2fxr2nYThuJhM76cckxPNQJfkV6i10%2FbtkqAbWJLxYxWwjfuZc87MksBOVBLK%2FtfaYNREwydfGeoZgnE8snmhHdFcUv5t%2F3hJH8FUqIJeFBlav5j978t9ygR8D0c40IAmGZ6Wh0%2B3ZnMFVK1VyBFtXA5SiMDMLViSVCi%2BrDXKe6YZv0vqEgWgjhZ8988dK4ew%2BeqhdNjAMTnkJ3tCE0n2nH7NQee2gTnZLsp%2FNKrCcoMLQrrAsoc%2FgCfTtv2Zq3aGhIz8Lu3Vji%2BOgJqzLwVBx08ATaYtOLyC%2B48y00XzF76itUuhLJTpK3lnvufMIutuWNGG2tP6ENbngqWW8VMy7bQGnGcXETn6Einb1xavgdz73RA4De9yccmQOJhe8Yil1%2FhdCIvPS7ELjdsN%2BD3bblEnFR1suiNIUNQiXZGgLzE%2Fx6Agian%2BKDbV%2BtFiRYLoJGgbEs2cLcIWDYoCQG9dTeKyOTulsFOcLbsKHwpVmKz%2FMipjVf54gIRReMXAoeU343z64ebPXT0dKzJT3hk9B%2BLIOWRLN62CnGVsJrMwzvu3vwY6pgF4OJ1RmLuA6iwzGn1Qm08mPRqDsJ2A32sFLKAMIgzasUyB7aBh0bzCs69SBO%2BrlmQBaMz2TavwaIpFumxoX9By04WW%2FRuSjwnTD2AA5eVxtjwGYL2G%2FetzN9HMmVx8ChNk1T%2BksPdEW0o3THWR%2BS%2FubqcZFZXGCwRD7iLAdX8LUvYzegPtUJ4vOvY%2FrG8DCwemnVPllf%2FrKWksfPUBTMWoxVlHBa2B&X-Amz-Signature=3d0a328120751e65daa3a2498f0de2e2e0d8ab85a3b0883f55c7b6d5e2811371&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYHGOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHEt0fpAhHYcLr0dBLkprMv3S1pPv3M1MKomQXtSE54cAiBds6TDDsxndpWBR%2FL9Rx0zA985X0OxJ2Ae8z5SeWyzQSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYeGWOUPGdsZrcYDTKtwDso0G9Gal%2Fjs6v%2BN7cZASGs00dNspMJtwnW0J8K04v%2Fk8%2Bqt0O1TQPNMOBqXzYBvQxPurCoKRkmd%2B70SsCTj2fxr2nYThuJhM76cckxPNQJfkV6i10%2FbtkqAbWJLxYxWwjfuZc87MksBOVBLK%2FtfaYNREwydfGeoZgnE8snmhHdFcUv5t%2F3hJH8FUqIJeFBlav5j978t9ygR8D0c40IAmGZ6Wh0%2B3ZnMFVK1VyBFtXA5SiMDMLViSVCi%2BrDXKe6YZv0vqEgWgjhZ8988dK4ew%2BeqhdNjAMTnkJ3tCE0n2nH7NQee2gTnZLsp%2FNKrCcoMLQrrAsoc%2FgCfTtv2Zq3aGhIz8Lu3Vji%2BOgJqzLwVBx08ATaYtOLyC%2B48y00XzF76itUuhLJTpK3lnvufMIutuWNGG2tP6ENbngqWW8VMy7bQGnGcXETn6Einb1xavgdz73RA4De9yccmQOJhe8Yil1%2FhdCIvPS7ELjdsN%2BD3bblEnFR1suiNIUNQiXZGgLzE%2Fx6Agian%2BKDbV%2BtFiRYLoJGgbEs2cLcIWDYoCQG9dTeKyOTulsFOcLbsKHwpVmKz%2FMipjVf54gIRReMXAoeU343z64ebPXT0dKzJT3hk9B%2BLIOWRLN62CnGVsJrMwzvu3vwY6pgF4OJ1RmLuA6iwzGn1Qm08mPRqDsJ2A32sFLKAMIgzasUyB7aBh0bzCs69SBO%2BrlmQBaMz2TavwaIpFumxoX9By04WW%2FRuSjwnTD2AA5eVxtjwGYL2G%2FetzN9HMmVx8ChNk1T%2BksPdEW0o3THWR%2BS%2FubqcZFZXGCwRD7iLAdX8LUvYzegPtUJ4vOvY%2FrG8DCwemnVPllf%2FrKWksfPUBTMWoxVlHBa2B&X-Amz-Signature=bec500152b3d3bc134cd9fc1beae227f0c069bc50f1ad7e8427dd39962b728a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYHGOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHEt0fpAhHYcLr0dBLkprMv3S1pPv3M1MKomQXtSE54cAiBds6TDDsxndpWBR%2FL9Rx0zA985X0OxJ2Ae8z5SeWyzQSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYeGWOUPGdsZrcYDTKtwDso0G9Gal%2Fjs6v%2BN7cZASGs00dNspMJtwnW0J8K04v%2Fk8%2Bqt0O1TQPNMOBqXzYBvQxPurCoKRkmd%2B70SsCTj2fxr2nYThuJhM76cckxPNQJfkV6i10%2FbtkqAbWJLxYxWwjfuZc87MksBOVBLK%2FtfaYNREwydfGeoZgnE8snmhHdFcUv5t%2F3hJH8FUqIJeFBlav5j978t9ygR8D0c40IAmGZ6Wh0%2B3ZnMFVK1VyBFtXA5SiMDMLViSVCi%2BrDXKe6YZv0vqEgWgjhZ8988dK4ew%2BeqhdNjAMTnkJ3tCE0n2nH7NQee2gTnZLsp%2FNKrCcoMLQrrAsoc%2FgCfTtv2Zq3aGhIz8Lu3Vji%2BOgJqzLwVBx08ATaYtOLyC%2B48y00XzF76itUuhLJTpK3lnvufMIutuWNGG2tP6ENbngqWW8VMy7bQGnGcXETn6Einb1xavgdz73RA4De9yccmQOJhe8Yil1%2FhdCIvPS7ELjdsN%2BD3bblEnFR1suiNIUNQiXZGgLzE%2Fx6Agian%2BKDbV%2BtFiRYLoJGgbEs2cLcIWDYoCQG9dTeKyOTulsFOcLbsKHwpVmKz%2FMipjVf54gIRReMXAoeU343z64ebPXT0dKzJT3hk9B%2BLIOWRLN62CnGVsJrMwzvu3vwY6pgF4OJ1RmLuA6iwzGn1Qm08mPRqDsJ2A32sFLKAMIgzasUyB7aBh0bzCs69SBO%2BrlmQBaMz2TavwaIpFumxoX9By04WW%2FRuSjwnTD2AA5eVxtjwGYL2G%2FetzN9HMmVx8ChNk1T%2BksPdEW0o3THWR%2BS%2FubqcZFZXGCwRD7iLAdX8LUvYzegPtUJ4vOvY%2FrG8DCwemnVPllf%2FrKWksfPUBTMWoxVlHBa2B&X-Amz-Signature=b007201b084923bb8da6eb86c3aa276a7ad826b09e6f44d6730c6a879cd69f15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWNYHGOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHEt0fpAhHYcLr0dBLkprMv3S1pPv3M1MKomQXtSE54cAiBds6TDDsxndpWBR%2FL9Rx0zA985X0OxJ2Ae8z5SeWyzQSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYeGWOUPGdsZrcYDTKtwDso0G9Gal%2Fjs6v%2BN7cZASGs00dNspMJtwnW0J8K04v%2Fk8%2Bqt0O1TQPNMOBqXzYBvQxPurCoKRkmd%2B70SsCTj2fxr2nYThuJhM76cckxPNQJfkV6i10%2FbtkqAbWJLxYxWwjfuZc87MksBOVBLK%2FtfaYNREwydfGeoZgnE8snmhHdFcUv5t%2F3hJH8FUqIJeFBlav5j978t9ygR8D0c40IAmGZ6Wh0%2B3ZnMFVK1VyBFtXA5SiMDMLViSVCi%2BrDXKe6YZv0vqEgWgjhZ8988dK4ew%2BeqhdNjAMTnkJ3tCE0n2nH7NQee2gTnZLsp%2FNKrCcoMLQrrAsoc%2FgCfTtv2Zq3aGhIz8Lu3Vji%2BOgJqzLwVBx08ATaYtOLyC%2B48y00XzF76itUuhLJTpK3lnvufMIutuWNGG2tP6ENbngqWW8VMy7bQGnGcXETn6Einb1xavgdz73RA4De9yccmQOJhe8Yil1%2FhdCIvPS7ELjdsN%2BD3bblEnFR1suiNIUNQiXZGgLzE%2Fx6Agian%2BKDbV%2BtFiRYLoJGgbEs2cLcIWDYoCQG9dTeKyOTulsFOcLbsKHwpVmKz%2FMipjVf54gIRReMXAoeU343z64ebPXT0dKzJT3hk9B%2BLIOWRLN62CnGVsJrMwzvu3vwY6pgF4OJ1RmLuA6iwzGn1Qm08mPRqDsJ2A32sFLKAMIgzasUyB7aBh0bzCs69SBO%2BrlmQBaMz2TavwaIpFumxoX9By04WW%2FRuSjwnTD2AA5eVxtjwGYL2G%2FetzN9HMmVx8ChNk1T%2BksPdEW0o3THWR%2BS%2FubqcZFZXGCwRD7iLAdX8LUvYzegPtUJ4vOvY%2FrG8DCwemnVPllf%2FrKWksfPUBTMWoxVlHBa2B&X-Amz-Signature=dbe92ac6f59eb0d191f24029bee24129e8d1cff1e5f098cfb78c14747124f587&X-Amz-SignedHeaders=host&x-id=GetObject)
