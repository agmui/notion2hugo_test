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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTQHNLH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoP9iZ65ZqMjjaFubBbIYtE91Y2YvT%2Fb8%2FFeUV0dTdmQIhAM5vslepYddVRA32F%2B8RMQYpQQ6Z3NH5NhVwx6wQ5OP7KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMgyOpEqcgSHPeTC8q3APoMafpq0Jfj4slCXPxGtPMPfnRGXabrSL1TVVh6%2F4neKi5t29JyazsTrFXLGqY683hEL7vskjRmH7Zn01mulI7HXmmN3hsM%2BxTMpj%2BBmH%2BcA2rhtTSkenQsgzyI3izrDDKdFcDMUTAVkj5kg4m8jLd95oNUc8I5W1K06%2B61KlER1E5T1vyftroJqKYhLozkQBH5KRhIC5HGwyBUqvMCu2erP9rCSaKoFMpnAxlzN5kta0cHBHRPwHcml5qvvrjC0Rc1kWBcrs3lJ80q4be9YTRUW62badoO7ox4WLehPCQzWP3IsYMHKujWHU%2FPPrAy7hNqt2JX34G4uYoScb1rT1HS1RLam654mwtieR8AFXo3Jh%2FOWok11MrkW8o9cPo4e9JMvgqbnksXfvN6D4xx6XBqRMRYDIrfaNWUaoM9Z9RxX1Tbpyui4M%2F2fNx0JIj4UDIYgfnWzMWc77tKe4DEdr0TjxsSZlOgi4z9sBkDf15mIdtph2OsD4vMABlBmZwnhTp7Kq9sTXjwTDhaxnZ6Q17ZT5tKYHt9WlBYfCW%2BkVAmrjOka4ECyIPkOmGl5YNByHQPeEW70aNF7e1AwGny%2BIVqqxVpu2dI6GzqAwsss75rPjL0D8Ac9icK1KTxjDirLK9BjqkASUdpBt%2BACJHYFEjOY%2Fy0VSl5tebE9Hp38dbMwX5b7kE0aX99X4u9SWnzglTOxjeG2TneBiLrd4mBiEswyXn6KvJu%2FS1hzyPIbrDpX0uunKUv1dvuzoHgooKhYopnqQCCMJ7Y1zU9x7zA7c1K%2FoA91CP3Q2mWV9yiyg0ToP%2BZP7JFCyyBLj45S1j8gpLDKsd3IYcR%2FgfW6Bu9TznxUfM75A0ePRz&X-Amz-Signature=ac5dd3b884eaee49ff155d3e442c65c1c6421d4a19731a0568b752805c4f5b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTQHNLH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoP9iZ65ZqMjjaFubBbIYtE91Y2YvT%2Fb8%2FFeUV0dTdmQIhAM5vslepYddVRA32F%2B8RMQYpQQ6Z3NH5NhVwx6wQ5OP7KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMgyOpEqcgSHPeTC8q3APoMafpq0Jfj4slCXPxGtPMPfnRGXabrSL1TVVh6%2F4neKi5t29JyazsTrFXLGqY683hEL7vskjRmH7Zn01mulI7HXmmN3hsM%2BxTMpj%2BBmH%2BcA2rhtTSkenQsgzyI3izrDDKdFcDMUTAVkj5kg4m8jLd95oNUc8I5W1K06%2B61KlER1E5T1vyftroJqKYhLozkQBH5KRhIC5HGwyBUqvMCu2erP9rCSaKoFMpnAxlzN5kta0cHBHRPwHcml5qvvrjC0Rc1kWBcrs3lJ80q4be9YTRUW62badoO7ox4WLehPCQzWP3IsYMHKujWHU%2FPPrAy7hNqt2JX34G4uYoScb1rT1HS1RLam654mwtieR8AFXo3Jh%2FOWok11MrkW8o9cPo4e9JMvgqbnksXfvN6D4xx6XBqRMRYDIrfaNWUaoM9Z9RxX1Tbpyui4M%2F2fNx0JIj4UDIYgfnWzMWc77tKe4DEdr0TjxsSZlOgi4z9sBkDf15mIdtph2OsD4vMABlBmZwnhTp7Kq9sTXjwTDhaxnZ6Q17ZT5tKYHt9WlBYfCW%2BkVAmrjOka4ECyIPkOmGl5YNByHQPeEW70aNF7e1AwGny%2BIVqqxVpu2dI6GzqAwsss75rPjL0D8Ac9icK1KTxjDirLK9BjqkASUdpBt%2BACJHYFEjOY%2Fy0VSl5tebE9Hp38dbMwX5b7kE0aX99X4u9SWnzglTOxjeG2TneBiLrd4mBiEswyXn6KvJu%2FS1hzyPIbrDpX0uunKUv1dvuzoHgooKhYopnqQCCMJ7Y1zU9x7zA7c1K%2FoA91CP3Q2mWV9yiyg0ToP%2BZP7JFCyyBLj45S1j8gpLDKsd3IYcR%2FgfW6Bu9TznxUfM75A0ePRz&X-Amz-Signature=308026b9c96825393efd34d91029611b7e9f30ea1d9ffa85c98e46a2e2b90a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTQHNLH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoP9iZ65ZqMjjaFubBbIYtE91Y2YvT%2Fb8%2FFeUV0dTdmQIhAM5vslepYddVRA32F%2B8RMQYpQQ6Z3NH5NhVwx6wQ5OP7KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMgyOpEqcgSHPeTC8q3APoMafpq0Jfj4slCXPxGtPMPfnRGXabrSL1TVVh6%2F4neKi5t29JyazsTrFXLGqY683hEL7vskjRmH7Zn01mulI7HXmmN3hsM%2BxTMpj%2BBmH%2BcA2rhtTSkenQsgzyI3izrDDKdFcDMUTAVkj5kg4m8jLd95oNUc8I5W1K06%2B61KlER1E5T1vyftroJqKYhLozkQBH5KRhIC5HGwyBUqvMCu2erP9rCSaKoFMpnAxlzN5kta0cHBHRPwHcml5qvvrjC0Rc1kWBcrs3lJ80q4be9YTRUW62badoO7ox4WLehPCQzWP3IsYMHKujWHU%2FPPrAy7hNqt2JX34G4uYoScb1rT1HS1RLam654mwtieR8AFXo3Jh%2FOWok11MrkW8o9cPo4e9JMvgqbnksXfvN6D4xx6XBqRMRYDIrfaNWUaoM9Z9RxX1Tbpyui4M%2F2fNx0JIj4UDIYgfnWzMWc77tKe4DEdr0TjxsSZlOgi4z9sBkDf15mIdtph2OsD4vMABlBmZwnhTp7Kq9sTXjwTDhaxnZ6Q17ZT5tKYHt9WlBYfCW%2BkVAmrjOka4ECyIPkOmGl5YNByHQPeEW70aNF7e1AwGny%2BIVqqxVpu2dI6GzqAwsss75rPjL0D8Ac9icK1KTxjDirLK9BjqkASUdpBt%2BACJHYFEjOY%2Fy0VSl5tebE9Hp38dbMwX5b7kE0aX99X4u9SWnzglTOxjeG2TneBiLrd4mBiEswyXn6KvJu%2FS1hzyPIbrDpX0uunKUv1dvuzoHgooKhYopnqQCCMJ7Y1zU9x7zA7c1K%2FoA91CP3Q2mWV9yiyg0ToP%2BZP7JFCyyBLj45S1j8gpLDKsd3IYcR%2FgfW6Bu9TznxUfM75A0ePRz&X-Amz-Signature=3720e5d3cd2e11db7a64eab0f4e312264b39652eb931bb65cad04d335b926d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTQHNLH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoP9iZ65ZqMjjaFubBbIYtE91Y2YvT%2Fb8%2FFeUV0dTdmQIhAM5vslepYddVRA32F%2B8RMQYpQQ6Z3NH5NhVwx6wQ5OP7KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMgyOpEqcgSHPeTC8q3APoMafpq0Jfj4slCXPxGtPMPfnRGXabrSL1TVVh6%2F4neKi5t29JyazsTrFXLGqY683hEL7vskjRmH7Zn01mulI7HXmmN3hsM%2BxTMpj%2BBmH%2BcA2rhtTSkenQsgzyI3izrDDKdFcDMUTAVkj5kg4m8jLd95oNUc8I5W1K06%2B61KlER1E5T1vyftroJqKYhLozkQBH5KRhIC5HGwyBUqvMCu2erP9rCSaKoFMpnAxlzN5kta0cHBHRPwHcml5qvvrjC0Rc1kWBcrs3lJ80q4be9YTRUW62badoO7ox4WLehPCQzWP3IsYMHKujWHU%2FPPrAy7hNqt2JX34G4uYoScb1rT1HS1RLam654mwtieR8AFXo3Jh%2FOWok11MrkW8o9cPo4e9JMvgqbnksXfvN6D4xx6XBqRMRYDIrfaNWUaoM9Z9RxX1Tbpyui4M%2F2fNx0JIj4UDIYgfnWzMWc77tKe4DEdr0TjxsSZlOgi4z9sBkDf15mIdtph2OsD4vMABlBmZwnhTp7Kq9sTXjwTDhaxnZ6Q17ZT5tKYHt9WlBYfCW%2BkVAmrjOka4ECyIPkOmGl5YNByHQPeEW70aNF7e1AwGny%2BIVqqxVpu2dI6GzqAwsss75rPjL0D8Ac9icK1KTxjDirLK9BjqkASUdpBt%2BACJHYFEjOY%2Fy0VSl5tebE9Hp38dbMwX5b7kE0aX99X4u9SWnzglTOxjeG2TneBiLrd4mBiEswyXn6KvJu%2FS1hzyPIbrDpX0uunKUv1dvuzoHgooKhYopnqQCCMJ7Y1zU9x7zA7c1K%2FoA91CP3Q2mWV9yiyg0ToP%2BZP7JFCyyBLj45S1j8gpLDKsd3IYcR%2FgfW6Bu9TznxUfM75A0ePRz&X-Amz-Signature=75c267156fae40c99edafdd2584cd31f842c68f0f7a51d2ab3d7021b89f40dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTQHNLH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoP9iZ65ZqMjjaFubBbIYtE91Y2YvT%2Fb8%2FFeUV0dTdmQIhAM5vslepYddVRA32F%2B8RMQYpQQ6Z3NH5NhVwx6wQ5OP7KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMgyOpEqcgSHPeTC8q3APoMafpq0Jfj4slCXPxGtPMPfnRGXabrSL1TVVh6%2F4neKi5t29JyazsTrFXLGqY683hEL7vskjRmH7Zn01mulI7HXmmN3hsM%2BxTMpj%2BBmH%2BcA2rhtTSkenQsgzyI3izrDDKdFcDMUTAVkj5kg4m8jLd95oNUc8I5W1K06%2B61KlER1E5T1vyftroJqKYhLozkQBH5KRhIC5HGwyBUqvMCu2erP9rCSaKoFMpnAxlzN5kta0cHBHRPwHcml5qvvrjC0Rc1kWBcrs3lJ80q4be9YTRUW62badoO7ox4WLehPCQzWP3IsYMHKujWHU%2FPPrAy7hNqt2JX34G4uYoScb1rT1HS1RLam654mwtieR8AFXo3Jh%2FOWok11MrkW8o9cPo4e9JMvgqbnksXfvN6D4xx6XBqRMRYDIrfaNWUaoM9Z9RxX1Tbpyui4M%2F2fNx0JIj4UDIYgfnWzMWc77tKe4DEdr0TjxsSZlOgi4z9sBkDf15mIdtph2OsD4vMABlBmZwnhTp7Kq9sTXjwTDhaxnZ6Q17ZT5tKYHt9WlBYfCW%2BkVAmrjOka4ECyIPkOmGl5YNByHQPeEW70aNF7e1AwGny%2BIVqqxVpu2dI6GzqAwsss75rPjL0D8Ac9icK1KTxjDirLK9BjqkASUdpBt%2BACJHYFEjOY%2Fy0VSl5tebE9Hp38dbMwX5b7kE0aX99X4u9SWnzglTOxjeG2TneBiLrd4mBiEswyXn6KvJu%2FS1hzyPIbrDpX0uunKUv1dvuzoHgooKhYopnqQCCMJ7Y1zU9x7zA7c1K%2FoA91CP3Q2mWV9yiyg0ToP%2BZP7JFCyyBLj45S1j8gpLDKsd3IYcR%2FgfW6Bu9TznxUfM75A0ePRz&X-Amz-Signature=86803abf9f5bf83bcd5bbcb21f8c132a74c891b3d2e24cf81740b306a6b00052&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCTQHNLH%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoP9iZ65ZqMjjaFubBbIYtE91Y2YvT%2Fb8%2FFeUV0dTdmQIhAM5vslepYddVRA32F%2B8RMQYpQQ6Z3NH5NhVwx6wQ5OP7KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMgyOpEqcgSHPeTC8q3APoMafpq0Jfj4slCXPxGtPMPfnRGXabrSL1TVVh6%2F4neKi5t29JyazsTrFXLGqY683hEL7vskjRmH7Zn01mulI7HXmmN3hsM%2BxTMpj%2BBmH%2BcA2rhtTSkenQsgzyI3izrDDKdFcDMUTAVkj5kg4m8jLd95oNUc8I5W1K06%2B61KlER1E5T1vyftroJqKYhLozkQBH5KRhIC5HGwyBUqvMCu2erP9rCSaKoFMpnAxlzN5kta0cHBHRPwHcml5qvvrjC0Rc1kWBcrs3lJ80q4be9YTRUW62badoO7ox4WLehPCQzWP3IsYMHKujWHU%2FPPrAy7hNqt2JX34G4uYoScb1rT1HS1RLam654mwtieR8AFXo3Jh%2FOWok11MrkW8o9cPo4e9JMvgqbnksXfvN6D4xx6XBqRMRYDIrfaNWUaoM9Z9RxX1Tbpyui4M%2F2fNx0JIj4UDIYgfnWzMWc77tKe4DEdr0TjxsSZlOgi4z9sBkDf15mIdtph2OsD4vMABlBmZwnhTp7Kq9sTXjwTDhaxnZ6Q17ZT5tKYHt9WlBYfCW%2BkVAmrjOka4ECyIPkOmGl5YNByHQPeEW70aNF7e1AwGny%2BIVqqxVpu2dI6GzqAwsss75rPjL0D8Ac9icK1KTxjDirLK9BjqkASUdpBt%2BACJHYFEjOY%2Fy0VSl5tebE9Hp38dbMwX5b7kE0aX99X4u9SWnzglTOxjeG2TneBiLrd4mBiEswyXn6KvJu%2FS1hzyPIbrDpX0uunKUv1dvuzoHgooKhYopnqQCCMJ7Y1zU9x7zA7c1K%2FoA91CP3Q2mWV9yiyg0ToP%2BZP7JFCyyBLj45S1j8gpLDKsd3IYcR%2FgfW6Bu9TznxUfM75A0ePRz&X-Amz-Signature=cefc5bde8a0a8ee7aa7b44f14473be5475e4d68fb93758c704d564ba9532dea9&X-Amz-SignedHeaders=host&x-id=GetObject)
