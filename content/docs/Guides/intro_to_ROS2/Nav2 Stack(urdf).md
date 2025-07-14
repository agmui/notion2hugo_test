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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHVAFGU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGY4gG3Y1CG8i23jSNauHSYs%2F2h1b3Iu%2Fet4TOFvrIkaAiEAlCRTDa%2Bgqh5b9%2BnxCIKBGjP269gqhzGuJGu9H9BCFJAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH4kwjHi%2Foswv8HzTircA4DPe0e2qphW58FLQgcJMCMym9Mcf53IxRzqUpJjRrxFNNMg76%2BKCGZXNxIfNPglGm%2BvpHiioiw7Eskiasnke30WwGztkVQVGGDxip72ssjgWRBcCT4bL6ei5CO976COkwRYEvSjq%2BEpCghk%2BA8xSEBeAwMhAs4Ey6s9h6EKGAZLeppwjnSAAANhdPK8YZGrBMZVENb6h2Y4P1epZQ%2FlM7UOXs1Yh3Gz9gJVrcv1oSz432Iv2aa5xAsLZdOz2jk6eEJTj6FTmycWMNBtJeei3MppwQHL%2BtIbtBsmzkobj66TXiPz%2B37dyDOEYDucKiI%2FlKCpBhkZfPoSlslTdYUQe%2Be3ptOD%2F3i4FJd8eUI06DwuMHoqyuIF5yNb1BTbOm7awdb%2BKfsYUrLzpsB6VUgN4nodVZDi1is4WeyzWosXCzH0ORxkzAumXdmVv5ELf0H8iPlD0pBJYvU6yfS%2F6kTJpoIUIPWXWPByg8Y%2B4%2BOwSGke%2F4xCSoqUAd0ZeM8Mg4OuSWBgjrkf0VEJr%2BoKVBENMiMoUinTNVlzl%2Fv4O%2BNV4SDsBtatda7lAVor%2FRrrMp%2BMD8gptlnWDooYYRuoyNjCsZ%2BnmCEW5AXM79p4ziqp%2FBLEjGCpWwm419v7JbckMO%2Bw0sMGOqUBrhddBTX9w3QaOWBUNvZY8xw5w8gj2P0Bvt%2FiLYQpsiAX4MQmweXmjCt%2F88UY6Tmo08rFCanuxVcoCob4bY6hPSNJSM3cSiYijgGerNM4hA3eSLxw0cSNOJXbcf7CVvoQ%2BwqjUBEBUep7vU1F9K7nq5kJ57KWDGraqJseMmRDVSn6mHO0kZpTghPVK3tAHxVSJt3RESgjiG8sFyMWYjdVUMoaNZAn&X-Amz-Signature=08f8f04cef33e646ded04191ad1f3f8152be996f12a02e1b9db3b00766ebf198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHVAFGU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGY4gG3Y1CG8i23jSNauHSYs%2F2h1b3Iu%2Fet4TOFvrIkaAiEAlCRTDa%2Bgqh5b9%2BnxCIKBGjP269gqhzGuJGu9H9BCFJAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH4kwjHi%2Foswv8HzTircA4DPe0e2qphW58FLQgcJMCMym9Mcf53IxRzqUpJjRrxFNNMg76%2BKCGZXNxIfNPglGm%2BvpHiioiw7Eskiasnke30WwGztkVQVGGDxip72ssjgWRBcCT4bL6ei5CO976COkwRYEvSjq%2BEpCghk%2BA8xSEBeAwMhAs4Ey6s9h6EKGAZLeppwjnSAAANhdPK8YZGrBMZVENb6h2Y4P1epZQ%2FlM7UOXs1Yh3Gz9gJVrcv1oSz432Iv2aa5xAsLZdOz2jk6eEJTj6FTmycWMNBtJeei3MppwQHL%2BtIbtBsmzkobj66TXiPz%2B37dyDOEYDucKiI%2FlKCpBhkZfPoSlslTdYUQe%2Be3ptOD%2F3i4FJd8eUI06DwuMHoqyuIF5yNb1BTbOm7awdb%2BKfsYUrLzpsB6VUgN4nodVZDi1is4WeyzWosXCzH0ORxkzAumXdmVv5ELf0H8iPlD0pBJYvU6yfS%2F6kTJpoIUIPWXWPByg8Y%2B4%2BOwSGke%2F4xCSoqUAd0ZeM8Mg4OuSWBgjrkf0VEJr%2BoKVBENMiMoUinTNVlzl%2Fv4O%2BNV4SDsBtatda7lAVor%2FRrrMp%2BMD8gptlnWDooYYRuoyNjCsZ%2BnmCEW5AXM79p4ziqp%2FBLEjGCpWwm419v7JbckMO%2Bw0sMGOqUBrhddBTX9w3QaOWBUNvZY8xw5w8gj2P0Bvt%2FiLYQpsiAX4MQmweXmjCt%2F88UY6Tmo08rFCanuxVcoCob4bY6hPSNJSM3cSiYijgGerNM4hA3eSLxw0cSNOJXbcf7CVvoQ%2BwqjUBEBUep7vU1F9K7nq5kJ57KWDGraqJseMmRDVSn6mHO0kZpTghPVK3tAHxVSJt3RESgjiG8sFyMWYjdVUMoaNZAn&X-Amz-Signature=f3882325cb7c34cfa0b0f5692a27a7d9d5490079a256ad415919fcc4fda65c5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHVAFGU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGY4gG3Y1CG8i23jSNauHSYs%2F2h1b3Iu%2Fet4TOFvrIkaAiEAlCRTDa%2Bgqh5b9%2BnxCIKBGjP269gqhzGuJGu9H9BCFJAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH4kwjHi%2Foswv8HzTircA4DPe0e2qphW58FLQgcJMCMym9Mcf53IxRzqUpJjRrxFNNMg76%2BKCGZXNxIfNPglGm%2BvpHiioiw7Eskiasnke30WwGztkVQVGGDxip72ssjgWRBcCT4bL6ei5CO976COkwRYEvSjq%2BEpCghk%2BA8xSEBeAwMhAs4Ey6s9h6EKGAZLeppwjnSAAANhdPK8YZGrBMZVENb6h2Y4P1epZQ%2FlM7UOXs1Yh3Gz9gJVrcv1oSz432Iv2aa5xAsLZdOz2jk6eEJTj6FTmycWMNBtJeei3MppwQHL%2BtIbtBsmzkobj66TXiPz%2B37dyDOEYDucKiI%2FlKCpBhkZfPoSlslTdYUQe%2Be3ptOD%2F3i4FJd8eUI06DwuMHoqyuIF5yNb1BTbOm7awdb%2BKfsYUrLzpsB6VUgN4nodVZDi1is4WeyzWosXCzH0ORxkzAumXdmVv5ELf0H8iPlD0pBJYvU6yfS%2F6kTJpoIUIPWXWPByg8Y%2B4%2BOwSGke%2F4xCSoqUAd0ZeM8Mg4OuSWBgjrkf0VEJr%2BoKVBENMiMoUinTNVlzl%2Fv4O%2BNV4SDsBtatda7lAVor%2FRrrMp%2BMD8gptlnWDooYYRuoyNjCsZ%2BnmCEW5AXM79p4ziqp%2FBLEjGCpWwm419v7JbckMO%2Bw0sMGOqUBrhddBTX9w3QaOWBUNvZY8xw5w8gj2P0Bvt%2FiLYQpsiAX4MQmweXmjCt%2F88UY6Tmo08rFCanuxVcoCob4bY6hPSNJSM3cSiYijgGerNM4hA3eSLxw0cSNOJXbcf7CVvoQ%2BwqjUBEBUep7vU1F9K7nq5kJ57KWDGraqJseMmRDVSn6mHO0kZpTghPVK3tAHxVSJt3RESgjiG8sFyMWYjdVUMoaNZAn&X-Amz-Signature=b186726f0c1691411a35d31d3ba32740e35ce7c6fb8ae3c85e849ac4479d9c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHVAFGU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGY4gG3Y1CG8i23jSNauHSYs%2F2h1b3Iu%2Fet4TOFvrIkaAiEAlCRTDa%2Bgqh5b9%2BnxCIKBGjP269gqhzGuJGu9H9BCFJAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH4kwjHi%2Foswv8HzTircA4DPe0e2qphW58FLQgcJMCMym9Mcf53IxRzqUpJjRrxFNNMg76%2BKCGZXNxIfNPglGm%2BvpHiioiw7Eskiasnke30WwGztkVQVGGDxip72ssjgWRBcCT4bL6ei5CO976COkwRYEvSjq%2BEpCghk%2BA8xSEBeAwMhAs4Ey6s9h6EKGAZLeppwjnSAAANhdPK8YZGrBMZVENb6h2Y4P1epZQ%2FlM7UOXs1Yh3Gz9gJVrcv1oSz432Iv2aa5xAsLZdOz2jk6eEJTj6FTmycWMNBtJeei3MppwQHL%2BtIbtBsmzkobj66TXiPz%2B37dyDOEYDucKiI%2FlKCpBhkZfPoSlslTdYUQe%2Be3ptOD%2F3i4FJd8eUI06DwuMHoqyuIF5yNb1BTbOm7awdb%2BKfsYUrLzpsB6VUgN4nodVZDi1is4WeyzWosXCzH0ORxkzAumXdmVv5ELf0H8iPlD0pBJYvU6yfS%2F6kTJpoIUIPWXWPByg8Y%2B4%2BOwSGke%2F4xCSoqUAd0ZeM8Mg4OuSWBgjrkf0VEJr%2BoKVBENMiMoUinTNVlzl%2Fv4O%2BNV4SDsBtatda7lAVor%2FRrrMp%2BMD8gptlnWDooYYRuoyNjCsZ%2BnmCEW5AXM79p4ziqp%2FBLEjGCpWwm419v7JbckMO%2Bw0sMGOqUBrhddBTX9w3QaOWBUNvZY8xw5w8gj2P0Bvt%2FiLYQpsiAX4MQmweXmjCt%2F88UY6Tmo08rFCanuxVcoCob4bY6hPSNJSM3cSiYijgGerNM4hA3eSLxw0cSNOJXbcf7CVvoQ%2BwqjUBEBUep7vU1F9K7nq5kJ57KWDGraqJseMmRDVSn6mHO0kZpTghPVK3tAHxVSJt3RESgjiG8sFyMWYjdVUMoaNZAn&X-Amz-Signature=7064dffa26dc3fffcd4220e879c5477afcc1a619e256a8e9d361bf2e961ab6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHVAFGU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGY4gG3Y1CG8i23jSNauHSYs%2F2h1b3Iu%2Fet4TOFvrIkaAiEAlCRTDa%2Bgqh5b9%2BnxCIKBGjP269gqhzGuJGu9H9BCFJAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH4kwjHi%2Foswv8HzTircA4DPe0e2qphW58FLQgcJMCMym9Mcf53IxRzqUpJjRrxFNNMg76%2BKCGZXNxIfNPglGm%2BvpHiioiw7Eskiasnke30WwGztkVQVGGDxip72ssjgWRBcCT4bL6ei5CO976COkwRYEvSjq%2BEpCghk%2BA8xSEBeAwMhAs4Ey6s9h6EKGAZLeppwjnSAAANhdPK8YZGrBMZVENb6h2Y4P1epZQ%2FlM7UOXs1Yh3Gz9gJVrcv1oSz432Iv2aa5xAsLZdOz2jk6eEJTj6FTmycWMNBtJeei3MppwQHL%2BtIbtBsmzkobj66TXiPz%2B37dyDOEYDucKiI%2FlKCpBhkZfPoSlslTdYUQe%2Be3ptOD%2F3i4FJd8eUI06DwuMHoqyuIF5yNb1BTbOm7awdb%2BKfsYUrLzpsB6VUgN4nodVZDi1is4WeyzWosXCzH0ORxkzAumXdmVv5ELf0H8iPlD0pBJYvU6yfS%2F6kTJpoIUIPWXWPByg8Y%2B4%2BOwSGke%2F4xCSoqUAd0ZeM8Mg4OuSWBgjrkf0VEJr%2BoKVBENMiMoUinTNVlzl%2Fv4O%2BNV4SDsBtatda7lAVor%2FRrrMp%2BMD8gptlnWDooYYRuoyNjCsZ%2BnmCEW5AXM79p4ziqp%2FBLEjGCpWwm419v7JbckMO%2Bw0sMGOqUBrhddBTX9w3QaOWBUNvZY8xw5w8gj2P0Bvt%2FiLYQpsiAX4MQmweXmjCt%2F88UY6Tmo08rFCanuxVcoCob4bY6hPSNJSM3cSiYijgGerNM4hA3eSLxw0cSNOJXbcf7CVvoQ%2BwqjUBEBUep7vU1F9K7nq5kJ57KWDGraqJseMmRDVSn6mHO0kZpTghPVK3tAHxVSJt3RESgjiG8sFyMWYjdVUMoaNZAn&X-Amz-Signature=22c35597d937405701a0aad2fc03bf1d9b0c6d92a5cd00e9de85c8e83c19314d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUHVAFGU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T071435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIGY4gG3Y1CG8i23jSNauHSYs%2F2h1b3Iu%2Fet4TOFvrIkaAiEAlCRTDa%2Bgqh5b9%2BnxCIKBGjP269gqhzGuJGu9H9BCFJAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDH4kwjHi%2Foswv8HzTircA4DPe0e2qphW58FLQgcJMCMym9Mcf53IxRzqUpJjRrxFNNMg76%2BKCGZXNxIfNPglGm%2BvpHiioiw7Eskiasnke30WwGztkVQVGGDxip72ssjgWRBcCT4bL6ei5CO976COkwRYEvSjq%2BEpCghk%2BA8xSEBeAwMhAs4Ey6s9h6EKGAZLeppwjnSAAANhdPK8YZGrBMZVENb6h2Y4P1epZQ%2FlM7UOXs1Yh3Gz9gJVrcv1oSz432Iv2aa5xAsLZdOz2jk6eEJTj6FTmycWMNBtJeei3MppwQHL%2BtIbtBsmzkobj66TXiPz%2B37dyDOEYDucKiI%2FlKCpBhkZfPoSlslTdYUQe%2Be3ptOD%2F3i4FJd8eUI06DwuMHoqyuIF5yNb1BTbOm7awdb%2BKfsYUrLzpsB6VUgN4nodVZDi1is4WeyzWosXCzH0ORxkzAumXdmVv5ELf0H8iPlD0pBJYvU6yfS%2F6kTJpoIUIPWXWPByg8Y%2B4%2BOwSGke%2F4xCSoqUAd0ZeM8Mg4OuSWBgjrkf0VEJr%2BoKVBENMiMoUinTNVlzl%2Fv4O%2BNV4SDsBtatda7lAVor%2FRrrMp%2BMD8gptlnWDooYYRuoyNjCsZ%2BnmCEW5AXM79p4ziqp%2FBLEjGCpWwm419v7JbckMO%2Bw0sMGOqUBrhddBTX9w3QaOWBUNvZY8xw5w8gj2P0Bvt%2FiLYQpsiAX4MQmweXmjCt%2F88UY6Tmo08rFCanuxVcoCob4bY6hPSNJSM3cSiYijgGerNM4hA3eSLxw0cSNOJXbcf7CVvoQ%2BwqjUBEBUep7vU1F9K7nq5kJ57KWDGraqJseMmRDVSn6mHO0kZpTghPVK3tAHxVSJt3RESgjiG8sFyMWYjdVUMoaNZAn&X-Amz-Signature=579608ccb7e340f84485473ef3722a5b9737381f5f44839e2322711863a553ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
