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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQCZOTT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDlFYyjKzKfNC4LLRBLkWIe9FyF%2BtYFnMSdrAjsVMBapgIhAOIyApJTvDMhzOzIEJyKZwK75IUjnr2yMo1F2bGG6zuYKv8DCHYQABoMNjM3NDIzMTgzODA1IgwEFNMOPMe8tgZw%2F4Yq3ANQQ1xMtACsMsMmKB0TV%2BEJgzOOvQy4yCKog0OFM%2BX3ka84qSSgcKtGdK6NmOL5ukY67pP%2BVmOgbuCqEe1htvQSKWZEvnfrLn5Xl4XMrNZ%2FBJ39pS0TofeNhYofJNvINTcmd9ztUqHuz%2FjQI8ebJM16d4pxRqWYyjGh8Vw2GZ5E8sTjAcsWyeImezNll41Len%2F1J3WyBq8PuC9Rr%2F06UBA7RMD4zXdjIPSTEPL%2BcWMq08H7wFLRVKZd3dMv8efN18b7t252a0Z7bHphg%2BKSYfNCm5mgs9g6eQiRD%2BadbyyMvKcfKeJcayVq6Gah0DhewVXc%2B6s7vlRM%2BunMNX%2FBRWEL6Z%2FxvQJqwkna4PqpF%2F5yHcIoecsCAjJEztTKfDfuLSd04rq8crqtbXHqBen1q9It27kx53rOM3D4t%2B73FPeXS%2FwieAEzsav%2F%2F1lp7ZHw2%2BTNlZPRpiEaifb5gCd3dswUa%2FY0S6rkFuEpik7ElvAcDdlnmfR7UENp1XqJWQtQ5sLQHgbpYlHn91RswjfwyWdcq2shNGvMkazqnfWnh0GqP%2BGoYJ%2FDpH32opf6XWHQED%2Bz3zKCPCuLUfbcMn6A8XfYKZjUBpYFAodfv44YPO3W05SRRJZiPyVUNbeACDC03My9BjqkAbsqNNNCYGrF3h9HjvIv4DrTvCeQMCB3PqnMq1Wh44H%2Fb7wVs3G8%2BOTyLJjoAtkoN4AcS3N6cQIckQ3p4kRct%2FjjXDyDHdRy3EUVp%2BpQbQucgnInET%2FVfQE7hn8gM56DONGhS6oyWGC3PQO8Si2ByEnXpU5TTI2P9ZIQinHE0UAnNeyV8hNT%2Bkf8N7oqpf3aKo5VmJHPNIvHxcXMt26mVWlzmXuh&X-Amz-Signature=9a63bc1fcbc01c0a8c73051254ef46562e7e9ee2d8218c621b7440a9d328b2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQCZOTT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDlFYyjKzKfNC4LLRBLkWIe9FyF%2BtYFnMSdrAjsVMBapgIhAOIyApJTvDMhzOzIEJyKZwK75IUjnr2yMo1F2bGG6zuYKv8DCHYQABoMNjM3NDIzMTgzODA1IgwEFNMOPMe8tgZw%2F4Yq3ANQQ1xMtACsMsMmKB0TV%2BEJgzOOvQy4yCKog0OFM%2BX3ka84qSSgcKtGdK6NmOL5ukY67pP%2BVmOgbuCqEe1htvQSKWZEvnfrLn5Xl4XMrNZ%2FBJ39pS0TofeNhYofJNvINTcmd9ztUqHuz%2FjQI8ebJM16d4pxRqWYyjGh8Vw2GZ5E8sTjAcsWyeImezNll41Len%2F1J3WyBq8PuC9Rr%2F06UBA7RMD4zXdjIPSTEPL%2BcWMq08H7wFLRVKZd3dMv8efN18b7t252a0Z7bHphg%2BKSYfNCm5mgs9g6eQiRD%2BadbyyMvKcfKeJcayVq6Gah0DhewVXc%2B6s7vlRM%2BunMNX%2FBRWEL6Z%2FxvQJqwkna4PqpF%2F5yHcIoecsCAjJEztTKfDfuLSd04rq8crqtbXHqBen1q9It27kx53rOM3D4t%2B73FPeXS%2FwieAEzsav%2F%2F1lp7ZHw2%2BTNlZPRpiEaifb5gCd3dswUa%2FY0S6rkFuEpik7ElvAcDdlnmfR7UENp1XqJWQtQ5sLQHgbpYlHn91RswjfwyWdcq2shNGvMkazqnfWnh0GqP%2BGoYJ%2FDpH32opf6XWHQED%2Bz3zKCPCuLUfbcMn6A8XfYKZjUBpYFAodfv44YPO3W05SRRJZiPyVUNbeACDC03My9BjqkAbsqNNNCYGrF3h9HjvIv4DrTvCeQMCB3PqnMq1Wh44H%2Fb7wVs3G8%2BOTyLJjoAtkoN4AcS3N6cQIckQ3p4kRct%2FjjXDyDHdRy3EUVp%2BpQbQucgnInET%2FVfQE7hn8gM56DONGhS6oyWGC3PQO8Si2ByEnXpU5TTI2P9ZIQinHE0UAnNeyV8hNT%2Bkf8N7oqpf3aKo5VmJHPNIvHxcXMt26mVWlzmXuh&X-Amz-Signature=cb2708e7efbc9153171bb2aa17f5fa4a8630b412dec07a6018cfa8e39c06d9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQCZOTT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDlFYyjKzKfNC4LLRBLkWIe9FyF%2BtYFnMSdrAjsVMBapgIhAOIyApJTvDMhzOzIEJyKZwK75IUjnr2yMo1F2bGG6zuYKv8DCHYQABoMNjM3NDIzMTgzODA1IgwEFNMOPMe8tgZw%2F4Yq3ANQQ1xMtACsMsMmKB0TV%2BEJgzOOvQy4yCKog0OFM%2BX3ka84qSSgcKtGdK6NmOL5ukY67pP%2BVmOgbuCqEe1htvQSKWZEvnfrLn5Xl4XMrNZ%2FBJ39pS0TofeNhYofJNvINTcmd9ztUqHuz%2FjQI8ebJM16d4pxRqWYyjGh8Vw2GZ5E8sTjAcsWyeImezNll41Len%2F1J3WyBq8PuC9Rr%2F06UBA7RMD4zXdjIPSTEPL%2BcWMq08H7wFLRVKZd3dMv8efN18b7t252a0Z7bHphg%2BKSYfNCm5mgs9g6eQiRD%2BadbyyMvKcfKeJcayVq6Gah0DhewVXc%2B6s7vlRM%2BunMNX%2FBRWEL6Z%2FxvQJqwkna4PqpF%2F5yHcIoecsCAjJEztTKfDfuLSd04rq8crqtbXHqBen1q9It27kx53rOM3D4t%2B73FPeXS%2FwieAEzsav%2F%2F1lp7ZHw2%2BTNlZPRpiEaifb5gCd3dswUa%2FY0S6rkFuEpik7ElvAcDdlnmfR7UENp1XqJWQtQ5sLQHgbpYlHn91RswjfwyWdcq2shNGvMkazqnfWnh0GqP%2BGoYJ%2FDpH32opf6XWHQED%2Bz3zKCPCuLUfbcMn6A8XfYKZjUBpYFAodfv44YPO3W05SRRJZiPyVUNbeACDC03My9BjqkAbsqNNNCYGrF3h9HjvIv4DrTvCeQMCB3PqnMq1Wh44H%2Fb7wVs3G8%2BOTyLJjoAtkoN4AcS3N6cQIckQ3p4kRct%2FjjXDyDHdRy3EUVp%2BpQbQucgnInET%2FVfQE7hn8gM56DONGhS6oyWGC3PQO8Si2ByEnXpU5TTI2P9ZIQinHE0UAnNeyV8hNT%2Bkf8N7oqpf3aKo5VmJHPNIvHxcXMt26mVWlzmXuh&X-Amz-Signature=e5f5800249f7bdd2589e7a7132b3864bd19bcfe3de8b3269cc3547e27a6c3a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQCZOTT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDlFYyjKzKfNC4LLRBLkWIe9FyF%2BtYFnMSdrAjsVMBapgIhAOIyApJTvDMhzOzIEJyKZwK75IUjnr2yMo1F2bGG6zuYKv8DCHYQABoMNjM3NDIzMTgzODA1IgwEFNMOPMe8tgZw%2F4Yq3ANQQ1xMtACsMsMmKB0TV%2BEJgzOOvQy4yCKog0OFM%2BX3ka84qSSgcKtGdK6NmOL5ukY67pP%2BVmOgbuCqEe1htvQSKWZEvnfrLn5Xl4XMrNZ%2FBJ39pS0TofeNhYofJNvINTcmd9ztUqHuz%2FjQI8ebJM16d4pxRqWYyjGh8Vw2GZ5E8sTjAcsWyeImezNll41Len%2F1J3WyBq8PuC9Rr%2F06UBA7RMD4zXdjIPSTEPL%2BcWMq08H7wFLRVKZd3dMv8efN18b7t252a0Z7bHphg%2BKSYfNCm5mgs9g6eQiRD%2BadbyyMvKcfKeJcayVq6Gah0DhewVXc%2B6s7vlRM%2BunMNX%2FBRWEL6Z%2FxvQJqwkna4PqpF%2F5yHcIoecsCAjJEztTKfDfuLSd04rq8crqtbXHqBen1q9It27kx53rOM3D4t%2B73FPeXS%2FwieAEzsav%2F%2F1lp7ZHw2%2BTNlZPRpiEaifb5gCd3dswUa%2FY0S6rkFuEpik7ElvAcDdlnmfR7UENp1XqJWQtQ5sLQHgbpYlHn91RswjfwyWdcq2shNGvMkazqnfWnh0GqP%2BGoYJ%2FDpH32opf6XWHQED%2Bz3zKCPCuLUfbcMn6A8XfYKZjUBpYFAodfv44YPO3W05SRRJZiPyVUNbeACDC03My9BjqkAbsqNNNCYGrF3h9HjvIv4DrTvCeQMCB3PqnMq1Wh44H%2Fb7wVs3G8%2BOTyLJjoAtkoN4AcS3N6cQIckQ3p4kRct%2FjjXDyDHdRy3EUVp%2BpQbQucgnInET%2FVfQE7hn8gM56DONGhS6oyWGC3PQO8Si2ByEnXpU5TTI2P9ZIQinHE0UAnNeyV8hNT%2Bkf8N7oqpf3aKo5VmJHPNIvHxcXMt26mVWlzmXuh&X-Amz-Signature=10aeb9151c6801673cd7148f424736ede7a4d22dad2b3ac19011865fdf033b38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQCZOTT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDlFYyjKzKfNC4LLRBLkWIe9FyF%2BtYFnMSdrAjsVMBapgIhAOIyApJTvDMhzOzIEJyKZwK75IUjnr2yMo1F2bGG6zuYKv8DCHYQABoMNjM3NDIzMTgzODA1IgwEFNMOPMe8tgZw%2F4Yq3ANQQ1xMtACsMsMmKB0TV%2BEJgzOOvQy4yCKog0OFM%2BX3ka84qSSgcKtGdK6NmOL5ukY67pP%2BVmOgbuCqEe1htvQSKWZEvnfrLn5Xl4XMrNZ%2FBJ39pS0TofeNhYofJNvINTcmd9ztUqHuz%2FjQI8ebJM16d4pxRqWYyjGh8Vw2GZ5E8sTjAcsWyeImezNll41Len%2F1J3WyBq8PuC9Rr%2F06UBA7RMD4zXdjIPSTEPL%2BcWMq08H7wFLRVKZd3dMv8efN18b7t252a0Z7bHphg%2BKSYfNCm5mgs9g6eQiRD%2BadbyyMvKcfKeJcayVq6Gah0DhewVXc%2B6s7vlRM%2BunMNX%2FBRWEL6Z%2FxvQJqwkna4PqpF%2F5yHcIoecsCAjJEztTKfDfuLSd04rq8crqtbXHqBen1q9It27kx53rOM3D4t%2B73FPeXS%2FwieAEzsav%2F%2F1lp7ZHw2%2BTNlZPRpiEaifb5gCd3dswUa%2FY0S6rkFuEpik7ElvAcDdlnmfR7UENp1XqJWQtQ5sLQHgbpYlHn91RswjfwyWdcq2shNGvMkazqnfWnh0GqP%2BGoYJ%2FDpH32opf6XWHQED%2Bz3zKCPCuLUfbcMn6A8XfYKZjUBpYFAodfv44YPO3W05SRRJZiPyVUNbeACDC03My9BjqkAbsqNNNCYGrF3h9HjvIv4DrTvCeQMCB3PqnMq1Wh44H%2Fb7wVs3G8%2BOTyLJjoAtkoN4AcS3N6cQIckQ3p4kRct%2FjjXDyDHdRy3EUVp%2BpQbQucgnInET%2FVfQE7hn8gM56DONGhS6oyWGC3PQO8Si2ByEnXpU5TTI2P9ZIQinHE0UAnNeyV8hNT%2Bkf8N7oqpf3aKo5VmJHPNIvHxcXMt26mVWlzmXuh&X-Amz-Signature=9aa947d53553f10312c26ed66a1608e579ad9b185ade8b060ac1367a7d14d221&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQCZOTT%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDlFYyjKzKfNC4LLRBLkWIe9FyF%2BtYFnMSdrAjsVMBapgIhAOIyApJTvDMhzOzIEJyKZwK75IUjnr2yMo1F2bGG6zuYKv8DCHYQABoMNjM3NDIzMTgzODA1IgwEFNMOPMe8tgZw%2F4Yq3ANQQ1xMtACsMsMmKB0TV%2BEJgzOOvQy4yCKog0OFM%2BX3ka84qSSgcKtGdK6NmOL5ukY67pP%2BVmOgbuCqEe1htvQSKWZEvnfrLn5Xl4XMrNZ%2FBJ39pS0TofeNhYofJNvINTcmd9ztUqHuz%2FjQI8ebJM16d4pxRqWYyjGh8Vw2GZ5E8sTjAcsWyeImezNll41Len%2F1J3WyBq8PuC9Rr%2F06UBA7RMD4zXdjIPSTEPL%2BcWMq08H7wFLRVKZd3dMv8efN18b7t252a0Z7bHphg%2BKSYfNCm5mgs9g6eQiRD%2BadbyyMvKcfKeJcayVq6Gah0DhewVXc%2B6s7vlRM%2BunMNX%2FBRWEL6Z%2FxvQJqwkna4PqpF%2F5yHcIoecsCAjJEztTKfDfuLSd04rq8crqtbXHqBen1q9It27kx53rOM3D4t%2B73FPeXS%2FwieAEzsav%2F%2F1lp7ZHw2%2BTNlZPRpiEaifb5gCd3dswUa%2FY0S6rkFuEpik7ElvAcDdlnmfR7UENp1XqJWQtQ5sLQHgbpYlHn91RswjfwyWdcq2shNGvMkazqnfWnh0GqP%2BGoYJ%2FDpH32opf6XWHQED%2Bz3zKCPCuLUfbcMn6A8XfYKZjUBpYFAodfv44YPO3W05SRRJZiPyVUNbeACDC03My9BjqkAbsqNNNCYGrF3h9HjvIv4DrTvCeQMCB3PqnMq1Wh44H%2Fb7wVs3G8%2BOTyLJjoAtkoN4AcS3N6cQIckQ3p4kRct%2FjjXDyDHdRy3EUVp%2BpQbQucgnInET%2FVfQE7hn8gM56DONGhS6oyWGC3PQO8Si2ByEnXpU5TTI2P9ZIQinHE0UAnNeyV8hNT%2Bkf8N7oqpf3aKo5VmJHPNIvHxcXMt26mVWlzmXuh&X-Amz-Signature=4e5cb09ccb6cb808f6d7f05097fa147730fa2819dcc2793aeff4b8eb5acddd57&X-Amz-SignedHeaders=host&x-id=GetObject)
