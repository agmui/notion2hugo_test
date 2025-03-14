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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CEV77X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAa3bQfuR%2BMEuFdSsi30gOkNrT6vg6uFA1TsN0xSjxoAiEAiTlM7uKgvctPgSuV14IhR3fT0L7ixXRkB6tNiiYjVowqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiEk1e6xPNg1to0zSrcA7jVfEBBxg%2FOKvo0vLafolj%2F%2BbcrCovK9eVMdq%2FFfui190p9hMbnmVp3bMJe%2Fven%2FEXQtA1W8lNtPjbKygc86dKqc2PYwrPF5csgO%2FmTvSkxQd9PsRyJ70neCserilyzycqw0GpBgJ5IT73EfOQGJg4qGUFNAzNRLWbSufVkyUd0Ey8Cs5ueyAlQsCC0%2FDH6eHSn08Zir5vwShZ%2FAzMFy58pnggwasWkUHtOOAH9lAf7wvE2NS%2Bp5YOQxETNMZkdms3VJlRHq7hVVNBuLZVcNdzfqmEsZYEOWFnwZAQpd9C4yykNeuWH6txCY2g50DkY17SbF2FzuJBZPlSIUgxx404QMKEijHnQE34hEbCRILqLEdU27ER8RIb67HfDoneV7WmNINZdtrHgDR9Wwlh1BweBTm4hIxh%2F7kCTZWx9%2F698QXBtcOnyq%2BWWoKNlYf7NpxcCTPYW2DSM3IPOE9v6VCMAIezhEUdn%2B%2FDpwOx7YKF4WXWRX13NMFLXO6Vj1a%2BE0Oof2%2Bg%2F2qUuhK7Tc5ED9Tm2m2EQp7jyJCvymswJuuUQpyiyp7UdhgqyfxMrjh1lk8pn8mu9UryFjQUbnK2OWBfVV8OEc4GhnmTvP2EGyu8f8UpMrnVom6b9gjN4MKLFz74GOqUB%2BYZAqNNV30uRNCLfxFSfqoOhVOZH2GHoczzW1l6CG39eUzjPiqrAwjjTHni3PpjCUnV6W%2B5nRRqMCS%2BVhiFeAsHcZ9JqyAFWiQ3wG5kXN442QPymxh%2FxYAhBVaN17dO1ZG4amnCHd78itLsNVyPlHLvqod6KhkhYM4cN36atyxCn9GXluiNTJq8LtDbln8bNi%2FGaYGKmx%2B%2BnuBEZM7d%2BJh11pMZP&X-Amz-Signature=ee62b831791234869872e1f2cd223b539aa9340d86265ce6b6d056d9f9b84617&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CEV77X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAa3bQfuR%2BMEuFdSsi30gOkNrT6vg6uFA1TsN0xSjxoAiEAiTlM7uKgvctPgSuV14IhR3fT0L7ixXRkB6tNiiYjVowqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiEk1e6xPNg1to0zSrcA7jVfEBBxg%2FOKvo0vLafolj%2F%2BbcrCovK9eVMdq%2FFfui190p9hMbnmVp3bMJe%2Fven%2FEXQtA1W8lNtPjbKygc86dKqc2PYwrPF5csgO%2FmTvSkxQd9PsRyJ70neCserilyzycqw0GpBgJ5IT73EfOQGJg4qGUFNAzNRLWbSufVkyUd0Ey8Cs5ueyAlQsCC0%2FDH6eHSn08Zir5vwShZ%2FAzMFy58pnggwasWkUHtOOAH9lAf7wvE2NS%2Bp5YOQxETNMZkdms3VJlRHq7hVVNBuLZVcNdzfqmEsZYEOWFnwZAQpd9C4yykNeuWH6txCY2g50DkY17SbF2FzuJBZPlSIUgxx404QMKEijHnQE34hEbCRILqLEdU27ER8RIb67HfDoneV7WmNINZdtrHgDR9Wwlh1BweBTm4hIxh%2F7kCTZWx9%2F698QXBtcOnyq%2BWWoKNlYf7NpxcCTPYW2DSM3IPOE9v6VCMAIezhEUdn%2B%2FDpwOx7YKF4WXWRX13NMFLXO6Vj1a%2BE0Oof2%2Bg%2F2qUuhK7Tc5ED9Tm2m2EQp7jyJCvymswJuuUQpyiyp7UdhgqyfxMrjh1lk8pn8mu9UryFjQUbnK2OWBfVV8OEc4GhnmTvP2EGyu8f8UpMrnVom6b9gjN4MKLFz74GOqUB%2BYZAqNNV30uRNCLfxFSfqoOhVOZH2GHoczzW1l6CG39eUzjPiqrAwjjTHni3PpjCUnV6W%2B5nRRqMCS%2BVhiFeAsHcZ9JqyAFWiQ3wG5kXN442QPymxh%2FxYAhBVaN17dO1ZG4amnCHd78itLsNVyPlHLvqod6KhkhYM4cN36atyxCn9GXluiNTJq8LtDbln8bNi%2FGaYGKmx%2B%2BnuBEZM7d%2BJh11pMZP&X-Amz-Signature=14fa90c8fe7226092d13b1993fb70200edcc8c185c8bfb29c66f664a920f2281&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CEV77X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAa3bQfuR%2BMEuFdSsi30gOkNrT6vg6uFA1TsN0xSjxoAiEAiTlM7uKgvctPgSuV14IhR3fT0L7ixXRkB6tNiiYjVowqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiEk1e6xPNg1to0zSrcA7jVfEBBxg%2FOKvo0vLafolj%2F%2BbcrCovK9eVMdq%2FFfui190p9hMbnmVp3bMJe%2Fven%2FEXQtA1W8lNtPjbKygc86dKqc2PYwrPF5csgO%2FmTvSkxQd9PsRyJ70neCserilyzycqw0GpBgJ5IT73EfOQGJg4qGUFNAzNRLWbSufVkyUd0Ey8Cs5ueyAlQsCC0%2FDH6eHSn08Zir5vwShZ%2FAzMFy58pnggwasWkUHtOOAH9lAf7wvE2NS%2Bp5YOQxETNMZkdms3VJlRHq7hVVNBuLZVcNdzfqmEsZYEOWFnwZAQpd9C4yykNeuWH6txCY2g50DkY17SbF2FzuJBZPlSIUgxx404QMKEijHnQE34hEbCRILqLEdU27ER8RIb67HfDoneV7WmNINZdtrHgDR9Wwlh1BweBTm4hIxh%2F7kCTZWx9%2F698QXBtcOnyq%2BWWoKNlYf7NpxcCTPYW2DSM3IPOE9v6VCMAIezhEUdn%2B%2FDpwOx7YKF4WXWRX13NMFLXO6Vj1a%2BE0Oof2%2Bg%2F2qUuhK7Tc5ED9Tm2m2EQp7jyJCvymswJuuUQpyiyp7UdhgqyfxMrjh1lk8pn8mu9UryFjQUbnK2OWBfVV8OEc4GhnmTvP2EGyu8f8UpMrnVom6b9gjN4MKLFz74GOqUB%2BYZAqNNV30uRNCLfxFSfqoOhVOZH2GHoczzW1l6CG39eUzjPiqrAwjjTHni3PpjCUnV6W%2B5nRRqMCS%2BVhiFeAsHcZ9JqyAFWiQ3wG5kXN442QPymxh%2FxYAhBVaN17dO1ZG4amnCHd78itLsNVyPlHLvqod6KhkhYM4cN36atyxCn9GXluiNTJq8LtDbln8bNi%2FGaYGKmx%2B%2BnuBEZM7d%2BJh11pMZP&X-Amz-Signature=c2ef1e3e62e522ba970eb0eab364e44f33f5fa961695bba635ec0319da3afa13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CEV77X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAa3bQfuR%2BMEuFdSsi30gOkNrT6vg6uFA1TsN0xSjxoAiEAiTlM7uKgvctPgSuV14IhR3fT0L7ixXRkB6tNiiYjVowqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiEk1e6xPNg1to0zSrcA7jVfEBBxg%2FOKvo0vLafolj%2F%2BbcrCovK9eVMdq%2FFfui190p9hMbnmVp3bMJe%2Fven%2FEXQtA1W8lNtPjbKygc86dKqc2PYwrPF5csgO%2FmTvSkxQd9PsRyJ70neCserilyzycqw0GpBgJ5IT73EfOQGJg4qGUFNAzNRLWbSufVkyUd0Ey8Cs5ueyAlQsCC0%2FDH6eHSn08Zir5vwShZ%2FAzMFy58pnggwasWkUHtOOAH9lAf7wvE2NS%2Bp5YOQxETNMZkdms3VJlRHq7hVVNBuLZVcNdzfqmEsZYEOWFnwZAQpd9C4yykNeuWH6txCY2g50DkY17SbF2FzuJBZPlSIUgxx404QMKEijHnQE34hEbCRILqLEdU27ER8RIb67HfDoneV7WmNINZdtrHgDR9Wwlh1BweBTm4hIxh%2F7kCTZWx9%2F698QXBtcOnyq%2BWWoKNlYf7NpxcCTPYW2DSM3IPOE9v6VCMAIezhEUdn%2B%2FDpwOx7YKF4WXWRX13NMFLXO6Vj1a%2BE0Oof2%2Bg%2F2qUuhK7Tc5ED9Tm2m2EQp7jyJCvymswJuuUQpyiyp7UdhgqyfxMrjh1lk8pn8mu9UryFjQUbnK2OWBfVV8OEc4GhnmTvP2EGyu8f8UpMrnVom6b9gjN4MKLFz74GOqUB%2BYZAqNNV30uRNCLfxFSfqoOhVOZH2GHoczzW1l6CG39eUzjPiqrAwjjTHni3PpjCUnV6W%2B5nRRqMCS%2BVhiFeAsHcZ9JqyAFWiQ3wG5kXN442QPymxh%2FxYAhBVaN17dO1ZG4amnCHd78itLsNVyPlHLvqod6KhkhYM4cN36atyxCn9GXluiNTJq8LtDbln8bNi%2FGaYGKmx%2B%2BnuBEZM7d%2BJh11pMZP&X-Amz-Signature=8ed551e2889e57b7c27dae9a42beeb2011a431f9db2f236a34cb653644c2c855&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CEV77X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAa3bQfuR%2BMEuFdSsi30gOkNrT6vg6uFA1TsN0xSjxoAiEAiTlM7uKgvctPgSuV14IhR3fT0L7ixXRkB6tNiiYjVowqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiEk1e6xPNg1to0zSrcA7jVfEBBxg%2FOKvo0vLafolj%2F%2BbcrCovK9eVMdq%2FFfui190p9hMbnmVp3bMJe%2Fven%2FEXQtA1W8lNtPjbKygc86dKqc2PYwrPF5csgO%2FmTvSkxQd9PsRyJ70neCserilyzycqw0GpBgJ5IT73EfOQGJg4qGUFNAzNRLWbSufVkyUd0Ey8Cs5ueyAlQsCC0%2FDH6eHSn08Zir5vwShZ%2FAzMFy58pnggwasWkUHtOOAH9lAf7wvE2NS%2Bp5YOQxETNMZkdms3VJlRHq7hVVNBuLZVcNdzfqmEsZYEOWFnwZAQpd9C4yykNeuWH6txCY2g50DkY17SbF2FzuJBZPlSIUgxx404QMKEijHnQE34hEbCRILqLEdU27ER8RIb67HfDoneV7WmNINZdtrHgDR9Wwlh1BweBTm4hIxh%2F7kCTZWx9%2F698QXBtcOnyq%2BWWoKNlYf7NpxcCTPYW2DSM3IPOE9v6VCMAIezhEUdn%2B%2FDpwOx7YKF4WXWRX13NMFLXO6Vj1a%2BE0Oof2%2Bg%2F2qUuhK7Tc5ED9Tm2m2EQp7jyJCvymswJuuUQpyiyp7UdhgqyfxMrjh1lk8pn8mu9UryFjQUbnK2OWBfVV8OEc4GhnmTvP2EGyu8f8UpMrnVom6b9gjN4MKLFz74GOqUB%2BYZAqNNV30uRNCLfxFSfqoOhVOZH2GHoczzW1l6CG39eUzjPiqrAwjjTHni3PpjCUnV6W%2B5nRRqMCS%2BVhiFeAsHcZ9JqyAFWiQ3wG5kXN442QPymxh%2FxYAhBVaN17dO1ZG4amnCHd78itLsNVyPlHLvqod6KhkhYM4cN36atyxCn9GXluiNTJq8LtDbln8bNi%2FGaYGKmx%2B%2BnuBEZM7d%2BJh11pMZP&X-Amz-Signature=5455bedf1843cc075e91159b57c21f485cc47371f1107349bac21ecc0b6f6f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647CEV77X%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAa3bQfuR%2BMEuFdSsi30gOkNrT6vg6uFA1TsN0xSjxoAiEAiTlM7uKgvctPgSuV14IhR3fT0L7ixXRkB6tNiiYjVowqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFiEk1e6xPNg1to0zSrcA7jVfEBBxg%2FOKvo0vLafolj%2F%2BbcrCovK9eVMdq%2FFfui190p9hMbnmVp3bMJe%2Fven%2FEXQtA1W8lNtPjbKygc86dKqc2PYwrPF5csgO%2FmTvSkxQd9PsRyJ70neCserilyzycqw0GpBgJ5IT73EfOQGJg4qGUFNAzNRLWbSufVkyUd0Ey8Cs5ueyAlQsCC0%2FDH6eHSn08Zir5vwShZ%2FAzMFy58pnggwasWkUHtOOAH9lAf7wvE2NS%2Bp5YOQxETNMZkdms3VJlRHq7hVVNBuLZVcNdzfqmEsZYEOWFnwZAQpd9C4yykNeuWH6txCY2g50DkY17SbF2FzuJBZPlSIUgxx404QMKEijHnQE34hEbCRILqLEdU27ER8RIb67HfDoneV7WmNINZdtrHgDR9Wwlh1BweBTm4hIxh%2F7kCTZWx9%2F698QXBtcOnyq%2BWWoKNlYf7NpxcCTPYW2DSM3IPOE9v6VCMAIezhEUdn%2B%2FDpwOx7YKF4WXWRX13NMFLXO6Vj1a%2BE0Oof2%2Bg%2F2qUuhK7Tc5ED9Tm2m2EQp7jyJCvymswJuuUQpyiyp7UdhgqyfxMrjh1lk8pn8mu9UryFjQUbnK2OWBfVV8OEc4GhnmTvP2EGyu8f8UpMrnVom6b9gjN4MKLFz74GOqUB%2BYZAqNNV30uRNCLfxFSfqoOhVOZH2GHoczzW1l6CG39eUzjPiqrAwjjTHni3PpjCUnV6W%2B5nRRqMCS%2BVhiFeAsHcZ9JqyAFWiQ3wG5kXN442QPymxh%2FxYAhBVaN17dO1ZG4amnCHd78itLsNVyPlHLvqod6KhkhYM4cN36atyxCn9GXluiNTJq8LtDbln8bNi%2FGaYGKmx%2B%2BnuBEZM7d%2BJh11pMZP&X-Amz-Signature=213997eee751d0233eb43201817151861d4afe198d4683e509ae7e78d6fd9fbd&X-Amz-SignedHeaders=host&x-id=GetObject)
