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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SG7KEAJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCcxp%2BOmf3JmicdTye3ObfBVSZgTts6ICPW6RvjVEypRgIgUu8ntHlcuGCPH1fhA7qE0pf0odyjXDkJgVF3RWA4TVEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDB54b5jvv%2FlR%2BU2MoSrcA2cmuKCEINh93iUX7y6NWiNHGvUAG%2FAkCMa%2B6s3FvlW3ZZJyC1rSAtuKSItCHNdj8EqlouUw4oEpVhC6CbB6sZb7cunCC3c8PW24RfjL4jM%2FsyN%2FzwYJloHKS8SGYJCPAagFfqbg5JaD3YXVE5PWZ7IgnO0VC6zFyq6r%2BRD%2FAhn6Z%2FWikpvNAknNVGNE1f4RkKqSL3jE9feu5KGaO%2FlF36Y6odI64cnnqYyKdM3gmTlsPKBoUzPDFvlQ%2BsdF0uIb5PZMdUQUSfYUjj1Ag4wv0Dh%2BoF%2BfpuYnBK%2BeLn6sdDQ4TkpD5M0ysBbLx24NjVPYQ46E7U3bnN%2FUm1%2FTiTE9YyeXoPYcpjFEQI4xDfAChqNkQWqixI6ZGJhpUlx0vlwDIH81ihU%2F1uI4tw7h9JlmC0Wdd8vGstMgrYu0HkLDCZfiCyZKO3mMfRIQbtXailWFj2Pi5xkAnHI1GLL7Jc%2FFLBW9OQaUJoyEalzt1mGfiAL5hUn1901fq3oQPZJNGldvi7rQUXH2AUCoMB2IYcWHhGgBuYNavveyY2vg1GRpN4t%2Bd7RWaru35Xn24MIYVq%2FrJE%2FtywOk4a4GjuZjOT3worhE7DzUAuSEmQmpuCgM71DgU4CRPU7S07kJ6UMVMLXL0cMGOqUBc%2B6wrj0cEMPvkTUNvZk1JF4PCh%2FJ%2FMwd9NgFZpZtK8UFStop2iX%2Bf15Ubs2wrLyU%2BwQ1DZwArkBsv2XTdo6T4NzUexB%2B2y8hrANjmgCFxzCTEWpwRLZd3Ur2zpHWJjOc5soK4zrfhmaB0%2FPD8srYLgaPYoPmxQIrHdH04A40K%2BzWjX%2F3BIINAouEuKgmPzDifR9NuNqDif551OP5klVN8nnPmrnA&X-Amz-Signature=2ee9deb24e587e2a717f7551af47a86c2174ec2a9fdb4dbdefff9385ed02923c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SG7KEAJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCcxp%2BOmf3JmicdTye3ObfBVSZgTts6ICPW6RvjVEypRgIgUu8ntHlcuGCPH1fhA7qE0pf0odyjXDkJgVF3RWA4TVEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDB54b5jvv%2FlR%2BU2MoSrcA2cmuKCEINh93iUX7y6NWiNHGvUAG%2FAkCMa%2B6s3FvlW3ZZJyC1rSAtuKSItCHNdj8EqlouUw4oEpVhC6CbB6sZb7cunCC3c8PW24RfjL4jM%2FsyN%2FzwYJloHKS8SGYJCPAagFfqbg5JaD3YXVE5PWZ7IgnO0VC6zFyq6r%2BRD%2FAhn6Z%2FWikpvNAknNVGNE1f4RkKqSL3jE9feu5KGaO%2FlF36Y6odI64cnnqYyKdM3gmTlsPKBoUzPDFvlQ%2BsdF0uIb5PZMdUQUSfYUjj1Ag4wv0Dh%2BoF%2BfpuYnBK%2BeLn6sdDQ4TkpD5M0ysBbLx24NjVPYQ46E7U3bnN%2FUm1%2FTiTE9YyeXoPYcpjFEQI4xDfAChqNkQWqixI6ZGJhpUlx0vlwDIH81ihU%2F1uI4tw7h9JlmC0Wdd8vGstMgrYu0HkLDCZfiCyZKO3mMfRIQbtXailWFj2Pi5xkAnHI1GLL7Jc%2FFLBW9OQaUJoyEalzt1mGfiAL5hUn1901fq3oQPZJNGldvi7rQUXH2AUCoMB2IYcWHhGgBuYNavveyY2vg1GRpN4t%2Bd7RWaru35Xn24MIYVq%2FrJE%2FtywOk4a4GjuZjOT3worhE7DzUAuSEmQmpuCgM71DgU4CRPU7S07kJ6UMVMLXL0cMGOqUBc%2B6wrj0cEMPvkTUNvZk1JF4PCh%2FJ%2FMwd9NgFZpZtK8UFStop2iX%2Bf15Ubs2wrLyU%2BwQ1DZwArkBsv2XTdo6T4NzUexB%2B2y8hrANjmgCFxzCTEWpwRLZd3Ur2zpHWJjOc5soK4zrfhmaB0%2FPD8srYLgaPYoPmxQIrHdH04A40K%2BzWjX%2F3BIINAouEuKgmPzDifR9NuNqDif551OP5klVN8nnPmrnA&X-Amz-Signature=c833fb0629a3ff6d091ec78b981ef7192ceac614522015ac94744de43a102ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SG7KEAJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCcxp%2BOmf3JmicdTye3ObfBVSZgTts6ICPW6RvjVEypRgIgUu8ntHlcuGCPH1fhA7qE0pf0odyjXDkJgVF3RWA4TVEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDB54b5jvv%2FlR%2BU2MoSrcA2cmuKCEINh93iUX7y6NWiNHGvUAG%2FAkCMa%2B6s3FvlW3ZZJyC1rSAtuKSItCHNdj8EqlouUw4oEpVhC6CbB6sZb7cunCC3c8PW24RfjL4jM%2FsyN%2FzwYJloHKS8SGYJCPAagFfqbg5JaD3YXVE5PWZ7IgnO0VC6zFyq6r%2BRD%2FAhn6Z%2FWikpvNAknNVGNE1f4RkKqSL3jE9feu5KGaO%2FlF36Y6odI64cnnqYyKdM3gmTlsPKBoUzPDFvlQ%2BsdF0uIb5PZMdUQUSfYUjj1Ag4wv0Dh%2BoF%2BfpuYnBK%2BeLn6sdDQ4TkpD5M0ysBbLx24NjVPYQ46E7U3bnN%2FUm1%2FTiTE9YyeXoPYcpjFEQI4xDfAChqNkQWqixI6ZGJhpUlx0vlwDIH81ihU%2F1uI4tw7h9JlmC0Wdd8vGstMgrYu0HkLDCZfiCyZKO3mMfRIQbtXailWFj2Pi5xkAnHI1GLL7Jc%2FFLBW9OQaUJoyEalzt1mGfiAL5hUn1901fq3oQPZJNGldvi7rQUXH2AUCoMB2IYcWHhGgBuYNavveyY2vg1GRpN4t%2Bd7RWaru35Xn24MIYVq%2FrJE%2FtywOk4a4GjuZjOT3worhE7DzUAuSEmQmpuCgM71DgU4CRPU7S07kJ6UMVMLXL0cMGOqUBc%2B6wrj0cEMPvkTUNvZk1JF4PCh%2FJ%2FMwd9NgFZpZtK8UFStop2iX%2Bf15Ubs2wrLyU%2BwQ1DZwArkBsv2XTdo6T4NzUexB%2B2y8hrANjmgCFxzCTEWpwRLZd3Ur2zpHWJjOc5soK4zrfhmaB0%2FPD8srYLgaPYoPmxQIrHdH04A40K%2BzWjX%2F3BIINAouEuKgmPzDifR9NuNqDif551OP5klVN8nnPmrnA&X-Amz-Signature=7cb2596d7ab25d1bbeb7d608f828c249d106c30160549ce5c6b7aac8740cd6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SG7KEAJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCcxp%2BOmf3JmicdTye3ObfBVSZgTts6ICPW6RvjVEypRgIgUu8ntHlcuGCPH1fhA7qE0pf0odyjXDkJgVF3RWA4TVEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDB54b5jvv%2FlR%2BU2MoSrcA2cmuKCEINh93iUX7y6NWiNHGvUAG%2FAkCMa%2B6s3FvlW3ZZJyC1rSAtuKSItCHNdj8EqlouUw4oEpVhC6CbB6sZb7cunCC3c8PW24RfjL4jM%2FsyN%2FzwYJloHKS8SGYJCPAagFfqbg5JaD3YXVE5PWZ7IgnO0VC6zFyq6r%2BRD%2FAhn6Z%2FWikpvNAknNVGNE1f4RkKqSL3jE9feu5KGaO%2FlF36Y6odI64cnnqYyKdM3gmTlsPKBoUzPDFvlQ%2BsdF0uIb5PZMdUQUSfYUjj1Ag4wv0Dh%2BoF%2BfpuYnBK%2BeLn6sdDQ4TkpD5M0ysBbLx24NjVPYQ46E7U3bnN%2FUm1%2FTiTE9YyeXoPYcpjFEQI4xDfAChqNkQWqixI6ZGJhpUlx0vlwDIH81ihU%2F1uI4tw7h9JlmC0Wdd8vGstMgrYu0HkLDCZfiCyZKO3mMfRIQbtXailWFj2Pi5xkAnHI1GLL7Jc%2FFLBW9OQaUJoyEalzt1mGfiAL5hUn1901fq3oQPZJNGldvi7rQUXH2AUCoMB2IYcWHhGgBuYNavveyY2vg1GRpN4t%2Bd7RWaru35Xn24MIYVq%2FrJE%2FtywOk4a4GjuZjOT3worhE7DzUAuSEmQmpuCgM71DgU4CRPU7S07kJ6UMVMLXL0cMGOqUBc%2B6wrj0cEMPvkTUNvZk1JF4PCh%2FJ%2FMwd9NgFZpZtK8UFStop2iX%2Bf15Ubs2wrLyU%2BwQ1DZwArkBsv2XTdo6T4NzUexB%2B2y8hrANjmgCFxzCTEWpwRLZd3Ur2zpHWJjOc5soK4zrfhmaB0%2FPD8srYLgaPYoPmxQIrHdH04A40K%2BzWjX%2F3BIINAouEuKgmPzDifR9NuNqDif551OP5klVN8nnPmrnA&X-Amz-Signature=e9e9d883d2fbb784a5f5f871721ec8a3ea70552d1bdb8cdb7e2e3ed4c65c79ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SG7KEAJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCcxp%2BOmf3JmicdTye3ObfBVSZgTts6ICPW6RvjVEypRgIgUu8ntHlcuGCPH1fhA7qE0pf0odyjXDkJgVF3RWA4TVEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDB54b5jvv%2FlR%2BU2MoSrcA2cmuKCEINh93iUX7y6NWiNHGvUAG%2FAkCMa%2B6s3FvlW3ZZJyC1rSAtuKSItCHNdj8EqlouUw4oEpVhC6CbB6sZb7cunCC3c8PW24RfjL4jM%2FsyN%2FzwYJloHKS8SGYJCPAagFfqbg5JaD3YXVE5PWZ7IgnO0VC6zFyq6r%2BRD%2FAhn6Z%2FWikpvNAknNVGNE1f4RkKqSL3jE9feu5KGaO%2FlF36Y6odI64cnnqYyKdM3gmTlsPKBoUzPDFvlQ%2BsdF0uIb5PZMdUQUSfYUjj1Ag4wv0Dh%2BoF%2BfpuYnBK%2BeLn6sdDQ4TkpD5M0ysBbLx24NjVPYQ46E7U3bnN%2FUm1%2FTiTE9YyeXoPYcpjFEQI4xDfAChqNkQWqixI6ZGJhpUlx0vlwDIH81ihU%2F1uI4tw7h9JlmC0Wdd8vGstMgrYu0HkLDCZfiCyZKO3mMfRIQbtXailWFj2Pi5xkAnHI1GLL7Jc%2FFLBW9OQaUJoyEalzt1mGfiAL5hUn1901fq3oQPZJNGldvi7rQUXH2AUCoMB2IYcWHhGgBuYNavveyY2vg1GRpN4t%2Bd7RWaru35Xn24MIYVq%2FrJE%2FtywOk4a4GjuZjOT3worhE7DzUAuSEmQmpuCgM71DgU4CRPU7S07kJ6UMVMLXL0cMGOqUBc%2B6wrj0cEMPvkTUNvZk1JF4PCh%2FJ%2FMwd9NgFZpZtK8UFStop2iX%2Bf15Ubs2wrLyU%2BwQ1DZwArkBsv2XTdo6T4NzUexB%2B2y8hrANjmgCFxzCTEWpwRLZd3Ur2zpHWJjOc5soK4zrfhmaB0%2FPD8srYLgaPYoPmxQIrHdH04A40K%2BzWjX%2F3BIINAouEuKgmPzDifR9NuNqDif551OP5klVN8nnPmrnA&X-Amz-Signature=912c98e55f4000ff579f4c09a2ab50fbd88bcf6e1041990cbe47bc37db8ef02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SG7KEAJ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCcxp%2BOmf3JmicdTye3ObfBVSZgTts6ICPW6RvjVEypRgIgUu8ntHlcuGCPH1fhA7qE0pf0odyjXDkJgVF3RWA4TVEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDB54b5jvv%2FlR%2BU2MoSrcA2cmuKCEINh93iUX7y6NWiNHGvUAG%2FAkCMa%2B6s3FvlW3ZZJyC1rSAtuKSItCHNdj8EqlouUw4oEpVhC6CbB6sZb7cunCC3c8PW24RfjL4jM%2FsyN%2FzwYJloHKS8SGYJCPAagFfqbg5JaD3YXVE5PWZ7IgnO0VC6zFyq6r%2BRD%2FAhn6Z%2FWikpvNAknNVGNE1f4RkKqSL3jE9feu5KGaO%2FlF36Y6odI64cnnqYyKdM3gmTlsPKBoUzPDFvlQ%2BsdF0uIb5PZMdUQUSfYUjj1Ag4wv0Dh%2BoF%2BfpuYnBK%2BeLn6sdDQ4TkpD5M0ysBbLx24NjVPYQ46E7U3bnN%2FUm1%2FTiTE9YyeXoPYcpjFEQI4xDfAChqNkQWqixI6ZGJhpUlx0vlwDIH81ihU%2F1uI4tw7h9JlmC0Wdd8vGstMgrYu0HkLDCZfiCyZKO3mMfRIQbtXailWFj2Pi5xkAnHI1GLL7Jc%2FFLBW9OQaUJoyEalzt1mGfiAL5hUn1901fq3oQPZJNGldvi7rQUXH2AUCoMB2IYcWHhGgBuYNavveyY2vg1GRpN4t%2Bd7RWaru35Xn24MIYVq%2FrJE%2FtywOk4a4GjuZjOT3worhE7DzUAuSEmQmpuCgM71DgU4CRPU7S07kJ6UMVMLXL0cMGOqUBc%2B6wrj0cEMPvkTUNvZk1JF4PCh%2FJ%2FMwd9NgFZpZtK8UFStop2iX%2Bf15Ubs2wrLyU%2BwQ1DZwArkBsv2XTdo6T4NzUexB%2B2y8hrANjmgCFxzCTEWpwRLZd3Ur2zpHWJjOc5soK4zrfhmaB0%2FPD8srYLgaPYoPmxQIrHdH04A40K%2BzWjX%2F3BIINAouEuKgmPzDifR9NuNqDif551OP5klVN8nnPmrnA&X-Amz-Signature=845fe01d4de9ebaf6558c7d6fc396e4da840cfc6658b782d9f8729752bcae6af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
