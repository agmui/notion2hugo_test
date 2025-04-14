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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTN6HQ72%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSO2i4DseFehZ5RuODNg8SZ3jyLmzGUTsxVftjdejWCQIhAI2IKkkzaShamZeyjPMgpm0xGKwIcBc4kOHdiwSEmBFWKv8DCB4QABoMNjM3NDIzMTgzODA1IgzfFmJOPcoBP%2Fkwuf0q3AMibV5r72W25ai%2BdYWxvTmrj37HsPzpdNZWJMBKtlGPGpfpTAwNoDx2kbOwyC31ex1e%2FOAZoy58BIIaQSzzemGRiLiWO7QiGn5KypO2Pf0PQX0Xovsjne4vkzm%2F%2FlRJTEjyX3I4%2F6ch2lM46uVOHJZypAjNctMRqE66ompqxb%2Fc9%2F75lfeb4XQ3MDW4A0SD8Um1jfwWfFaLkbUb11NxUv5VFbC3o81EocVjnroINh2nZGgRxTqZHtmI5cdPQ3rQ%2BHtmNpTDjlbMDBijATc4Gq4wEW5IIxkKohdbAEV2twUSDDBo9vSrXUM5z9GRAfyMlwQwXrUnPLPxAnhwmIMtQnTozM0%2F6RPh%2F5JrThjJUBKSKMp1iajKIIqaMuLF9%2F8tKoowMLKPTuDasOzwrqECgOZGUd2%2BhZEvPeEcylv3Vx8t3e%2BHaaC%2BNWJ7AfXQufjmfTctMiOqR0P0kBhagju49JFz3ND7WNQIkHt2rJVvOU8CWEl43QsGu%2Bagvm%2F8HsAEcqk9nF5rUPbaYmq2DxYdXg9Sp5y81E5x6TNW6EnDaoGgUojRZCDeGaMaryhra114rJEQUtmm7F0uilKIWoO3y0JhEc2oUILleWRMkcpVt2TLfeEsJDNxD8lgcLYjkTCq6%2FW%2FBjqkAYtF5QkIhoxsQ1%2FW%2FeujOyAbEaqpC0MCS%2FG1SjHX7jqYEeKnUyIexZCYJwjoUXgDOQK67FoTmgtGXTZ30FSjwRV2e3Hf6N5j%2BD4ycmybVaSB41w5YmEv3p2DJTkBUMnAeZba%2FfhP%2BpuKqVi6cSLJkd2qVe%2FGnqBcoEgeDqANrj8GGwQxvmXE7aMeQKay8HXwPeP%2F7wxqevCXIfbQnUv4poqUayMX&X-Amz-Signature=edcef0074a53ee2a119e3cd9487c8b7d83be09139246305d9d1572147d6b2c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTN6HQ72%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSO2i4DseFehZ5RuODNg8SZ3jyLmzGUTsxVftjdejWCQIhAI2IKkkzaShamZeyjPMgpm0xGKwIcBc4kOHdiwSEmBFWKv8DCB4QABoMNjM3NDIzMTgzODA1IgzfFmJOPcoBP%2Fkwuf0q3AMibV5r72W25ai%2BdYWxvTmrj37HsPzpdNZWJMBKtlGPGpfpTAwNoDx2kbOwyC31ex1e%2FOAZoy58BIIaQSzzemGRiLiWO7QiGn5KypO2Pf0PQX0Xovsjne4vkzm%2F%2FlRJTEjyX3I4%2F6ch2lM46uVOHJZypAjNctMRqE66ompqxb%2Fc9%2F75lfeb4XQ3MDW4A0SD8Um1jfwWfFaLkbUb11NxUv5VFbC3o81EocVjnroINh2nZGgRxTqZHtmI5cdPQ3rQ%2BHtmNpTDjlbMDBijATc4Gq4wEW5IIxkKohdbAEV2twUSDDBo9vSrXUM5z9GRAfyMlwQwXrUnPLPxAnhwmIMtQnTozM0%2F6RPh%2F5JrThjJUBKSKMp1iajKIIqaMuLF9%2F8tKoowMLKPTuDasOzwrqECgOZGUd2%2BhZEvPeEcylv3Vx8t3e%2BHaaC%2BNWJ7AfXQufjmfTctMiOqR0P0kBhagju49JFz3ND7WNQIkHt2rJVvOU8CWEl43QsGu%2Bagvm%2F8HsAEcqk9nF5rUPbaYmq2DxYdXg9Sp5y81E5x6TNW6EnDaoGgUojRZCDeGaMaryhra114rJEQUtmm7F0uilKIWoO3y0JhEc2oUILleWRMkcpVt2TLfeEsJDNxD8lgcLYjkTCq6%2FW%2FBjqkAYtF5QkIhoxsQ1%2FW%2FeujOyAbEaqpC0MCS%2FG1SjHX7jqYEeKnUyIexZCYJwjoUXgDOQK67FoTmgtGXTZ30FSjwRV2e3Hf6N5j%2BD4ycmybVaSB41w5YmEv3p2DJTkBUMnAeZba%2FfhP%2BpuKqVi6cSLJkd2qVe%2FGnqBcoEgeDqANrj8GGwQxvmXE7aMeQKay8HXwPeP%2F7wxqevCXIfbQnUv4poqUayMX&X-Amz-Signature=c1a9ffae123e91c73e04580fce636ea3aec03be72b5e88ef90b1031860632648&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTN6HQ72%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSO2i4DseFehZ5RuODNg8SZ3jyLmzGUTsxVftjdejWCQIhAI2IKkkzaShamZeyjPMgpm0xGKwIcBc4kOHdiwSEmBFWKv8DCB4QABoMNjM3NDIzMTgzODA1IgzfFmJOPcoBP%2Fkwuf0q3AMibV5r72W25ai%2BdYWxvTmrj37HsPzpdNZWJMBKtlGPGpfpTAwNoDx2kbOwyC31ex1e%2FOAZoy58BIIaQSzzemGRiLiWO7QiGn5KypO2Pf0PQX0Xovsjne4vkzm%2F%2FlRJTEjyX3I4%2F6ch2lM46uVOHJZypAjNctMRqE66ompqxb%2Fc9%2F75lfeb4XQ3MDW4A0SD8Um1jfwWfFaLkbUb11NxUv5VFbC3o81EocVjnroINh2nZGgRxTqZHtmI5cdPQ3rQ%2BHtmNpTDjlbMDBijATc4Gq4wEW5IIxkKohdbAEV2twUSDDBo9vSrXUM5z9GRAfyMlwQwXrUnPLPxAnhwmIMtQnTozM0%2F6RPh%2F5JrThjJUBKSKMp1iajKIIqaMuLF9%2F8tKoowMLKPTuDasOzwrqECgOZGUd2%2BhZEvPeEcylv3Vx8t3e%2BHaaC%2BNWJ7AfXQufjmfTctMiOqR0P0kBhagju49JFz3ND7WNQIkHt2rJVvOU8CWEl43QsGu%2Bagvm%2F8HsAEcqk9nF5rUPbaYmq2DxYdXg9Sp5y81E5x6TNW6EnDaoGgUojRZCDeGaMaryhra114rJEQUtmm7F0uilKIWoO3y0JhEc2oUILleWRMkcpVt2TLfeEsJDNxD8lgcLYjkTCq6%2FW%2FBjqkAYtF5QkIhoxsQ1%2FW%2FeujOyAbEaqpC0MCS%2FG1SjHX7jqYEeKnUyIexZCYJwjoUXgDOQK67FoTmgtGXTZ30FSjwRV2e3Hf6N5j%2BD4ycmybVaSB41w5YmEv3p2DJTkBUMnAeZba%2FfhP%2BpuKqVi6cSLJkd2qVe%2FGnqBcoEgeDqANrj8GGwQxvmXE7aMeQKay8HXwPeP%2F7wxqevCXIfbQnUv4poqUayMX&X-Amz-Signature=211ec7acf0815a83999d4ee522080b8e789944fef3d1ce10126f22c1c32aa7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTN6HQ72%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSO2i4DseFehZ5RuODNg8SZ3jyLmzGUTsxVftjdejWCQIhAI2IKkkzaShamZeyjPMgpm0xGKwIcBc4kOHdiwSEmBFWKv8DCB4QABoMNjM3NDIzMTgzODA1IgzfFmJOPcoBP%2Fkwuf0q3AMibV5r72W25ai%2BdYWxvTmrj37HsPzpdNZWJMBKtlGPGpfpTAwNoDx2kbOwyC31ex1e%2FOAZoy58BIIaQSzzemGRiLiWO7QiGn5KypO2Pf0PQX0Xovsjne4vkzm%2F%2FlRJTEjyX3I4%2F6ch2lM46uVOHJZypAjNctMRqE66ompqxb%2Fc9%2F75lfeb4XQ3MDW4A0SD8Um1jfwWfFaLkbUb11NxUv5VFbC3o81EocVjnroINh2nZGgRxTqZHtmI5cdPQ3rQ%2BHtmNpTDjlbMDBijATc4Gq4wEW5IIxkKohdbAEV2twUSDDBo9vSrXUM5z9GRAfyMlwQwXrUnPLPxAnhwmIMtQnTozM0%2F6RPh%2F5JrThjJUBKSKMp1iajKIIqaMuLF9%2F8tKoowMLKPTuDasOzwrqECgOZGUd2%2BhZEvPeEcylv3Vx8t3e%2BHaaC%2BNWJ7AfXQufjmfTctMiOqR0P0kBhagju49JFz3ND7WNQIkHt2rJVvOU8CWEl43QsGu%2Bagvm%2F8HsAEcqk9nF5rUPbaYmq2DxYdXg9Sp5y81E5x6TNW6EnDaoGgUojRZCDeGaMaryhra114rJEQUtmm7F0uilKIWoO3y0JhEc2oUILleWRMkcpVt2TLfeEsJDNxD8lgcLYjkTCq6%2FW%2FBjqkAYtF5QkIhoxsQ1%2FW%2FeujOyAbEaqpC0MCS%2FG1SjHX7jqYEeKnUyIexZCYJwjoUXgDOQK67FoTmgtGXTZ30FSjwRV2e3Hf6N5j%2BD4ycmybVaSB41w5YmEv3p2DJTkBUMnAeZba%2FfhP%2BpuKqVi6cSLJkd2qVe%2FGnqBcoEgeDqANrj8GGwQxvmXE7aMeQKay8HXwPeP%2F7wxqevCXIfbQnUv4poqUayMX&X-Amz-Signature=cc88a9984d7fb0bfab0c32873605fa69b33aee1eedd44d34714a3475af9cf1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTN6HQ72%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSO2i4DseFehZ5RuODNg8SZ3jyLmzGUTsxVftjdejWCQIhAI2IKkkzaShamZeyjPMgpm0xGKwIcBc4kOHdiwSEmBFWKv8DCB4QABoMNjM3NDIzMTgzODA1IgzfFmJOPcoBP%2Fkwuf0q3AMibV5r72W25ai%2BdYWxvTmrj37HsPzpdNZWJMBKtlGPGpfpTAwNoDx2kbOwyC31ex1e%2FOAZoy58BIIaQSzzemGRiLiWO7QiGn5KypO2Pf0PQX0Xovsjne4vkzm%2F%2FlRJTEjyX3I4%2F6ch2lM46uVOHJZypAjNctMRqE66ompqxb%2Fc9%2F75lfeb4XQ3MDW4A0SD8Um1jfwWfFaLkbUb11NxUv5VFbC3o81EocVjnroINh2nZGgRxTqZHtmI5cdPQ3rQ%2BHtmNpTDjlbMDBijATc4Gq4wEW5IIxkKohdbAEV2twUSDDBo9vSrXUM5z9GRAfyMlwQwXrUnPLPxAnhwmIMtQnTozM0%2F6RPh%2F5JrThjJUBKSKMp1iajKIIqaMuLF9%2F8tKoowMLKPTuDasOzwrqECgOZGUd2%2BhZEvPeEcylv3Vx8t3e%2BHaaC%2BNWJ7AfXQufjmfTctMiOqR0P0kBhagju49JFz3ND7WNQIkHt2rJVvOU8CWEl43QsGu%2Bagvm%2F8HsAEcqk9nF5rUPbaYmq2DxYdXg9Sp5y81E5x6TNW6EnDaoGgUojRZCDeGaMaryhra114rJEQUtmm7F0uilKIWoO3y0JhEc2oUILleWRMkcpVt2TLfeEsJDNxD8lgcLYjkTCq6%2FW%2FBjqkAYtF5QkIhoxsQ1%2FW%2FeujOyAbEaqpC0MCS%2FG1SjHX7jqYEeKnUyIexZCYJwjoUXgDOQK67FoTmgtGXTZ30FSjwRV2e3Hf6N5j%2BD4ycmybVaSB41w5YmEv3p2DJTkBUMnAeZba%2FfhP%2BpuKqVi6cSLJkd2qVe%2FGnqBcoEgeDqANrj8GGwQxvmXE7aMeQKay8HXwPeP%2F7wxqevCXIfbQnUv4poqUayMX&X-Amz-Signature=c37d8441ebe20f54ac6296115de60db14878f2868272d1c2a4034b4f4b33e2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTN6HQ72%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSO2i4DseFehZ5RuODNg8SZ3jyLmzGUTsxVftjdejWCQIhAI2IKkkzaShamZeyjPMgpm0xGKwIcBc4kOHdiwSEmBFWKv8DCB4QABoMNjM3NDIzMTgzODA1IgzfFmJOPcoBP%2Fkwuf0q3AMibV5r72W25ai%2BdYWxvTmrj37HsPzpdNZWJMBKtlGPGpfpTAwNoDx2kbOwyC31ex1e%2FOAZoy58BIIaQSzzemGRiLiWO7QiGn5KypO2Pf0PQX0Xovsjne4vkzm%2F%2FlRJTEjyX3I4%2F6ch2lM46uVOHJZypAjNctMRqE66ompqxb%2Fc9%2F75lfeb4XQ3MDW4A0SD8Um1jfwWfFaLkbUb11NxUv5VFbC3o81EocVjnroINh2nZGgRxTqZHtmI5cdPQ3rQ%2BHtmNpTDjlbMDBijATc4Gq4wEW5IIxkKohdbAEV2twUSDDBo9vSrXUM5z9GRAfyMlwQwXrUnPLPxAnhwmIMtQnTozM0%2F6RPh%2F5JrThjJUBKSKMp1iajKIIqaMuLF9%2F8tKoowMLKPTuDasOzwrqECgOZGUd2%2BhZEvPeEcylv3Vx8t3e%2BHaaC%2BNWJ7AfXQufjmfTctMiOqR0P0kBhagju49JFz3ND7WNQIkHt2rJVvOU8CWEl43QsGu%2Bagvm%2F8HsAEcqk9nF5rUPbaYmq2DxYdXg9Sp5y81E5x6TNW6EnDaoGgUojRZCDeGaMaryhra114rJEQUtmm7F0uilKIWoO3y0JhEc2oUILleWRMkcpVt2TLfeEsJDNxD8lgcLYjkTCq6%2FW%2FBjqkAYtF5QkIhoxsQ1%2FW%2FeujOyAbEaqpC0MCS%2FG1SjHX7jqYEeKnUyIexZCYJwjoUXgDOQK67FoTmgtGXTZ30FSjwRV2e3Hf6N5j%2BD4ycmybVaSB41w5YmEv3p2DJTkBUMnAeZba%2FfhP%2BpuKqVi6cSLJkd2qVe%2FGnqBcoEgeDqANrj8GGwQxvmXE7aMeQKay8HXwPeP%2F7wxqevCXIfbQnUv4poqUayMX&X-Amz-Signature=d0d0a5ec11c5a9f1a7e77a533bbb39bee1bd13ac9c5f9d8dd5e7c003e599c186&X-Amz-SignedHeaders=host&x-id=GetObject)
