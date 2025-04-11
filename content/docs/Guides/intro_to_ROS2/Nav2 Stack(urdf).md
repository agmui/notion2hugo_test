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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWVDD6K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDPy63L791Tafy37ftBhhDl%2B09pv7w9LsaEo2uhJgryDwIhALqHanT3N2DRfUNr%2BOgjElBxZ%2FVOdChiYhAmXqGGntP1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBlzSd4FJChZXKaAq3ANx9%2FlKnQ3JVRYwaqU4jlgjZLrv3KUG2DFkzFmZ8rfWUFbIVyfachwxQZCJ8KXCRp67N4N4p395L%2BdXMj6USSadMXSnN7hol1iTllpdJEmfZWa5MdHOAvjxI6xqz1nhBjgnIRvKf5CiHPcA410V4vtxetO2%2BrU%2BrK28JHo7zh2TEPC6IPAZL0TDET6XmfzBRpaa1jhTOpy93Ub%2FlNpLVVZMITfRcdWc56pAsKLxxSqO9YTX9k0hcrCbPAn920PI%2BRwssd%2Fr6%2BKBms%2FXaptNv8JPVZxRxiZ%2BVNUtoPT9E0qdq9eZfRW6DGNrTvqktBnpK1zYKmzck0iUrwo1FgGc0VIxjnkJj9u1hbnRxBXC1V2SEWHq2%2ByGvU5g4Mblbf5vsbK4%2BklQdCMBUl9UXeaibKd4SWY%2BDObb60vruuIFeFBDmt63I9iU5%2BcLiwNfhlmjQz67MS2H3fr1cme9dbZO%2FvZJJfSDS43mimtkpUxfyUh35bxWMS6tqBuJL5h084u362g30jHIfJ7pTSGg3C00u5VHyQKrlWTn1kwF8xOFbFfockeKCVflR6VxI9cYtO%2BqO2Yu9JR8Ac%2BItT7CCy1p0ps7sJqvLZ88QIylYaFs443oVqbIaheXVu4D1tya%2FjCNk%2BK%2FBjqkAV0JBatK8x8HSU46R1WN9vD20JusGUp7OTEHK%2FvCLR157wrcv6DFkgCJqTDminB%2Fs7d3Z4dTCwLV%2FVq%2B9ovuwUMs1OJomhfQbq20TuuRjW3Fh1bmWCCxPVBCrHfYO7Ms3%2FJPZ2AIjt2OMWnpCUKmINARLbjAg2h%2BIj%2BIRCmL0J1ia2DrDWDmanhp%2BNB1GJe2%2FWeQu%2FdpB1gqoI5Gum1ahNgYFRVX&X-Amz-Signature=e83cb21ddc70e856307b6b5524a4df9d97a1927fafebc806d366c8a48b8535db&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWVDD6K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDPy63L791Tafy37ftBhhDl%2B09pv7w9LsaEo2uhJgryDwIhALqHanT3N2DRfUNr%2BOgjElBxZ%2FVOdChiYhAmXqGGntP1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBlzSd4FJChZXKaAq3ANx9%2FlKnQ3JVRYwaqU4jlgjZLrv3KUG2DFkzFmZ8rfWUFbIVyfachwxQZCJ8KXCRp67N4N4p395L%2BdXMj6USSadMXSnN7hol1iTllpdJEmfZWa5MdHOAvjxI6xqz1nhBjgnIRvKf5CiHPcA410V4vtxetO2%2BrU%2BrK28JHo7zh2TEPC6IPAZL0TDET6XmfzBRpaa1jhTOpy93Ub%2FlNpLVVZMITfRcdWc56pAsKLxxSqO9YTX9k0hcrCbPAn920PI%2BRwssd%2Fr6%2BKBms%2FXaptNv8JPVZxRxiZ%2BVNUtoPT9E0qdq9eZfRW6DGNrTvqktBnpK1zYKmzck0iUrwo1FgGc0VIxjnkJj9u1hbnRxBXC1V2SEWHq2%2ByGvU5g4Mblbf5vsbK4%2BklQdCMBUl9UXeaibKd4SWY%2BDObb60vruuIFeFBDmt63I9iU5%2BcLiwNfhlmjQz67MS2H3fr1cme9dbZO%2FvZJJfSDS43mimtkpUxfyUh35bxWMS6tqBuJL5h084u362g30jHIfJ7pTSGg3C00u5VHyQKrlWTn1kwF8xOFbFfockeKCVflR6VxI9cYtO%2BqO2Yu9JR8Ac%2BItT7CCy1p0ps7sJqvLZ88QIylYaFs443oVqbIaheXVu4D1tya%2FjCNk%2BK%2FBjqkAV0JBatK8x8HSU46R1WN9vD20JusGUp7OTEHK%2FvCLR157wrcv6DFkgCJqTDminB%2Fs7d3Z4dTCwLV%2FVq%2B9ovuwUMs1OJomhfQbq20TuuRjW3Fh1bmWCCxPVBCrHfYO7Ms3%2FJPZ2AIjt2OMWnpCUKmINARLbjAg2h%2BIj%2BIRCmL0J1ia2DrDWDmanhp%2BNB1GJe2%2FWeQu%2FdpB1gqoI5Gum1ahNgYFRVX&X-Amz-Signature=83b44fb55c1cfdf109a7b3c162bf3ffafeff5b19ca0588d96a4126fea0c995a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWVDD6K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDPy63L791Tafy37ftBhhDl%2B09pv7w9LsaEo2uhJgryDwIhALqHanT3N2DRfUNr%2BOgjElBxZ%2FVOdChiYhAmXqGGntP1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBlzSd4FJChZXKaAq3ANx9%2FlKnQ3JVRYwaqU4jlgjZLrv3KUG2DFkzFmZ8rfWUFbIVyfachwxQZCJ8KXCRp67N4N4p395L%2BdXMj6USSadMXSnN7hol1iTllpdJEmfZWa5MdHOAvjxI6xqz1nhBjgnIRvKf5CiHPcA410V4vtxetO2%2BrU%2BrK28JHo7zh2TEPC6IPAZL0TDET6XmfzBRpaa1jhTOpy93Ub%2FlNpLVVZMITfRcdWc56pAsKLxxSqO9YTX9k0hcrCbPAn920PI%2BRwssd%2Fr6%2BKBms%2FXaptNv8JPVZxRxiZ%2BVNUtoPT9E0qdq9eZfRW6DGNrTvqktBnpK1zYKmzck0iUrwo1FgGc0VIxjnkJj9u1hbnRxBXC1V2SEWHq2%2ByGvU5g4Mblbf5vsbK4%2BklQdCMBUl9UXeaibKd4SWY%2BDObb60vruuIFeFBDmt63I9iU5%2BcLiwNfhlmjQz67MS2H3fr1cme9dbZO%2FvZJJfSDS43mimtkpUxfyUh35bxWMS6tqBuJL5h084u362g30jHIfJ7pTSGg3C00u5VHyQKrlWTn1kwF8xOFbFfockeKCVflR6VxI9cYtO%2BqO2Yu9JR8Ac%2BItT7CCy1p0ps7sJqvLZ88QIylYaFs443oVqbIaheXVu4D1tya%2FjCNk%2BK%2FBjqkAV0JBatK8x8HSU46R1WN9vD20JusGUp7OTEHK%2FvCLR157wrcv6DFkgCJqTDminB%2Fs7d3Z4dTCwLV%2FVq%2B9ovuwUMs1OJomhfQbq20TuuRjW3Fh1bmWCCxPVBCrHfYO7Ms3%2FJPZ2AIjt2OMWnpCUKmINARLbjAg2h%2BIj%2BIRCmL0J1ia2DrDWDmanhp%2BNB1GJe2%2FWeQu%2FdpB1gqoI5Gum1ahNgYFRVX&X-Amz-Signature=f10c91d5ecd051b1352481c5c4359d31d697e638c0518fec3aa7a5a6cc0e3249&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWVDD6K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDPy63L791Tafy37ftBhhDl%2B09pv7w9LsaEo2uhJgryDwIhALqHanT3N2DRfUNr%2BOgjElBxZ%2FVOdChiYhAmXqGGntP1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBlzSd4FJChZXKaAq3ANx9%2FlKnQ3JVRYwaqU4jlgjZLrv3KUG2DFkzFmZ8rfWUFbIVyfachwxQZCJ8KXCRp67N4N4p395L%2BdXMj6USSadMXSnN7hol1iTllpdJEmfZWa5MdHOAvjxI6xqz1nhBjgnIRvKf5CiHPcA410V4vtxetO2%2BrU%2BrK28JHo7zh2TEPC6IPAZL0TDET6XmfzBRpaa1jhTOpy93Ub%2FlNpLVVZMITfRcdWc56pAsKLxxSqO9YTX9k0hcrCbPAn920PI%2BRwssd%2Fr6%2BKBms%2FXaptNv8JPVZxRxiZ%2BVNUtoPT9E0qdq9eZfRW6DGNrTvqktBnpK1zYKmzck0iUrwo1FgGc0VIxjnkJj9u1hbnRxBXC1V2SEWHq2%2ByGvU5g4Mblbf5vsbK4%2BklQdCMBUl9UXeaibKd4SWY%2BDObb60vruuIFeFBDmt63I9iU5%2BcLiwNfhlmjQz67MS2H3fr1cme9dbZO%2FvZJJfSDS43mimtkpUxfyUh35bxWMS6tqBuJL5h084u362g30jHIfJ7pTSGg3C00u5VHyQKrlWTn1kwF8xOFbFfockeKCVflR6VxI9cYtO%2BqO2Yu9JR8Ac%2BItT7CCy1p0ps7sJqvLZ88QIylYaFs443oVqbIaheXVu4D1tya%2FjCNk%2BK%2FBjqkAV0JBatK8x8HSU46R1WN9vD20JusGUp7OTEHK%2FvCLR157wrcv6DFkgCJqTDminB%2Fs7d3Z4dTCwLV%2FVq%2B9ovuwUMs1OJomhfQbq20TuuRjW3Fh1bmWCCxPVBCrHfYO7Ms3%2FJPZ2AIjt2OMWnpCUKmINARLbjAg2h%2BIj%2BIRCmL0J1ia2DrDWDmanhp%2BNB1GJe2%2FWeQu%2FdpB1gqoI5Gum1ahNgYFRVX&X-Amz-Signature=c5913d15641522b2ed07e7d32d5414a3b7e25c3f0dd7fc113210110daf23c485&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWVDD6K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDPy63L791Tafy37ftBhhDl%2B09pv7w9LsaEo2uhJgryDwIhALqHanT3N2DRfUNr%2BOgjElBxZ%2FVOdChiYhAmXqGGntP1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBlzSd4FJChZXKaAq3ANx9%2FlKnQ3JVRYwaqU4jlgjZLrv3KUG2DFkzFmZ8rfWUFbIVyfachwxQZCJ8KXCRp67N4N4p395L%2BdXMj6USSadMXSnN7hol1iTllpdJEmfZWa5MdHOAvjxI6xqz1nhBjgnIRvKf5CiHPcA410V4vtxetO2%2BrU%2BrK28JHo7zh2TEPC6IPAZL0TDET6XmfzBRpaa1jhTOpy93Ub%2FlNpLVVZMITfRcdWc56pAsKLxxSqO9YTX9k0hcrCbPAn920PI%2BRwssd%2Fr6%2BKBms%2FXaptNv8JPVZxRxiZ%2BVNUtoPT9E0qdq9eZfRW6DGNrTvqktBnpK1zYKmzck0iUrwo1FgGc0VIxjnkJj9u1hbnRxBXC1V2SEWHq2%2ByGvU5g4Mblbf5vsbK4%2BklQdCMBUl9UXeaibKd4SWY%2BDObb60vruuIFeFBDmt63I9iU5%2BcLiwNfhlmjQz67MS2H3fr1cme9dbZO%2FvZJJfSDS43mimtkpUxfyUh35bxWMS6tqBuJL5h084u362g30jHIfJ7pTSGg3C00u5VHyQKrlWTn1kwF8xOFbFfockeKCVflR6VxI9cYtO%2BqO2Yu9JR8Ac%2BItT7CCy1p0ps7sJqvLZ88QIylYaFs443oVqbIaheXVu4D1tya%2FjCNk%2BK%2FBjqkAV0JBatK8x8HSU46R1WN9vD20JusGUp7OTEHK%2FvCLR157wrcv6DFkgCJqTDminB%2Fs7d3Z4dTCwLV%2FVq%2B9ovuwUMs1OJomhfQbq20TuuRjW3Fh1bmWCCxPVBCrHfYO7Ms3%2FJPZ2AIjt2OMWnpCUKmINARLbjAg2h%2BIj%2BIRCmL0J1ia2DrDWDmanhp%2BNB1GJe2%2FWeQu%2FdpB1gqoI5Gum1ahNgYFRVX&X-Amz-Signature=202472a1620defa0aeb3073f9ad7dc893a97add08bb68dca8d12f840c8f7017a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVWVDD6K%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDPy63L791Tafy37ftBhhDl%2B09pv7w9LsaEo2uhJgryDwIhALqHanT3N2DRfUNr%2BOgjElBxZ%2FVOdChiYhAmXqGGntP1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNBlzSd4FJChZXKaAq3ANx9%2FlKnQ3JVRYwaqU4jlgjZLrv3KUG2DFkzFmZ8rfWUFbIVyfachwxQZCJ8KXCRp67N4N4p395L%2BdXMj6USSadMXSnN7hol1iTllpdJEmfZWa5MdHOAvjxI6xqz1nhBjgnIRvKf5CiHPcA410V4vtxetO2%2BrU%2BrK28JHo7zh2TEPC6IPAZL0TDET6XmfzBRpaa1jhTOpy93Ub%2FlNpLVVZMITfRcdWc56pAsKLxxSqO9YTX9k0hcrCbPAn920PI%2BRwssd%2Fr6%2BKBms%2FXaptNv8JPVZxRxiZ%2BVNUtoPT9E0qdq9eZfRW6DGNrTvqktBnpK1zYKmzck0iUrwo1FgGc0VIxjnkJj9u1hbnRxBXC1V2SEWHq2%2ByGvU5g4Mblbf5vsbK4%2BklQdCMBUl9UXeaibKd4SWY%2BDObb60vruuIFeFBDmt63I9iU5%2BcLiwNfhlmjQz67MS2H3fr1cme9dbZO%2FvZJJfSDS43mimtkpUxfyUh35bxWMS6tqBuJL5h084u362g30jHIfJ7pTSGg3C00u5VHyQKrlWTn1kwF8xOFbFfockeKCVflR6VxI9cYtO%2BqO2Yu9JR8Ac%2BItT7CCy1p0ps7sJqvLZ88QIylYaFs443oVqbIaheXVu4D1tya%2FjCNk%2BK%2FBjqkAV0JBatK8x8HSU46R1WN9vD20JusGUp7OTEHK%2FvCLR157wrcv6DFkgCJqTDminB%2Fs7d3Z4dTCwLV%2FVq%2B9ovuwUMs1OJomhfQbq20TuuRjW3Fh1bmWCCxPVBCrHfYO7Ms3%2FJPZ2AIjt2OMWnpCUKmINARLbjAg2h%2BIj%2BIRCmL0J1ia2DrDWDmanhp%2BNB1GJe2%2FWeQu%2FdpB1gqoI5Gum1ahNgYFRVX&X-Amz-Signature=26fc831c4de38231bd4bc76bb6d2d53f7082a6faa28c71a292df7eac629e4729&X-Amz-SignedHeaders=host&x-id=GetObject)
