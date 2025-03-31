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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7UU42C%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDFkCm6meR8GfaikNnOs03lWyRYLdlH4wPFJBU%2FOXcTmgIgXcbg6YDJ5ZSJMzBKaaPXdabYq3H%2Bo8eCac4LVEeAsgoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7PVNx%2FxuWumKM0iSrcAx%2FqE2oP%2BIBEeAmIyFLTQLHcLJXTCuZ0dLjaJWl9EVth3aJz6Fp%2BKW67omYt8nVtrKmESPjuHKjaRxFFw6yOtlh7iJdU5%2FefRMdLy9YJcAEoUD%2BM1Ufq7fG1xpYxJ8WfpgocSSahBdtPgwg3%2F%2Frs0mtpp4ZGBKIJMtT6wfqx0eOSOAKWUxC1%2BPgEMOcmZ3bzwBecRlGTytSPh%2F9tWHwOSzav2uR7N%2BI75oM9AxPD7amwB%2F863qHbsszHHhP30cQ9Jw7Ph2WXAfxGuV0VKLV94dWM23eQrLleFO053sawZsa7rG3%2Fq2YvjFMSdHkLoGAwobZt%2FJ3X4FiubjkISDR5yanyL0Bw9zOXx%2F%2BQ%2FbX09ILQSq%2B%2FEzknVUZBFDHMg0vdWuzyaIKcSQAE%2FgpzmUB5LeCbsXykjJjmaywcFarmR7EAk7yrQctQvCT%2Bm7DhLykWv%2BrwSOzioPlzCRkzVb5s7e%2F8KLqkb8x1kZgQe9g914uGzq3iqFHPdQ%2F9s4WRTNn%2F1TQ1vFJehXOtKDTC15XuyI4fOU87n6v3eMqn4mZiI48qMFpMb0wg4WJOQHfa5QkU5kxR%2BBKp8zzIQnym6AOQ3YSzLqnTPfBPMs%2B5VTB6cSUtNVH52tHE766Cj%2F8rMLG4q78GOqUBXRze5mDYWsPy1bsCOJNYCdnq%2BJ07iT8F5LYIzpHPN0dBh0NypDffqzhNULGmnNqzfaVRqBiVPnkadIU%2FfLqTjRAlHAcBKpXetiXTZ%2BtBmPgvuLH2v3Q3ZMsKHZimNh50n8IAzateX%2BvC%2BJceuB%2BODoM7iI13ICdWJTJ7xrpaobQzEg%2BlPMxm7CDELJdHxZbt1adQg%2Fmw%2BEAb5KFr5kBt0%2BrsOsSN&X-Amz-Signature=fa2e0f4dbb1da20b5940295c5129399074dc8a25b2c2cf520a5eb3808afadfbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7UU42C%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDFkCm6meR8GfaikNnOs03lWyRYLdlH4wPFJBU%2FOXcTmgIgXcbg6YDJ5ZSJMzBKaaPXdabYq3H%2Bo8eCac4LVEeAsgoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7PVNx%2FxuWumKM0iSrcAx%2FqE2oP%2BIBEeAmIyFLTQLHcLJXTCuZ0dLjaJWl9EVth3aJz6Fp%2BKW67omYt8nVtrKmESPjuHKjaRxFFw6yOtlh7iJdU5%2FefRMdLy9YJcAEoUD%2BM1Ufq7fG1xpYxJ8WfpgocSSahBdtPgwg3%2F%2Frs0mtpp4ZGBKIJMtT6wfqx0eOSOAKWUxC1%2BPgEMOcmZ3bzwBecRlGTytSPh%2F9tWHwOSzav2uR7N%2BI75oM9AxPD7amwB%2F863qHbsszHHhP30cQ9Jw7Ph2WXAfxGuV0VKLV94dWM23eQrLleFO053sawZsa7rG3%2Fq2YvjFMSdHkLoGAwobZt%2FJ3X4FiubjkISDR5yanyL0Bw9zOXx%2F%2BQ%2FbX09ILQSq%2B%2FEzknVUZBFDHMg0vdWuzyaIKcSQAE%2FgpzmUB5LeCbsXykjJjmaywcFarmR7EAk7yrQctQvCT%2Bm7DhLykWv%2BrwSOzioPlzCRkzVb5s7e%2F8KLqkb8x1kZgQe9g914uGzq3iqFHPdQ%2F9s4WRTNn%2F1TQ1vFJehXOtKDTC15XuyI4fOU87n6v3eMqn4mZiI48qMFpMb0wg4WJOQHfa5QkU5kxR%2BBKp8zzIQnym6AOQ3YSzLqnTPfBPMs%2B5VTB6cSUtNVH52tHE766Cj%2F8rMLG4q78GOqUBXRze5mDYWsPy1bsCOJNYCdnq%2BJ07iT8F5LYIzpHPN0dBh0NypDffqzhNULGmnNqzfaVRqBiVPnkadIU%2FfLqTjRAlHAcBKpXetiXTZ%2BtBmPgvuLH2v3Q3ZMsKHZimNh50n8IAzateX%2BvC%2BJceuB%2BODoM7iI13ICdWJTJ7xrpaobQzEg%2BlPMxm7CDELJdHxZbt1adQg%2Fmw%2BEAb5KFr5kBt0%2BrsOsSN&X-Amz-Signature=9fa7ba2e49bb80c71992b1da4f3546ef2a5a5b7396a75108fd73326f955694fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7UU42C%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDFkCm6meR8GfaikNnOs03lWyRYLdlH4wPFJBU%2FOXcTmgIgXcbg6YDJ5ZSJMzBKaaPXdabYq3H%2Bo8eCac4LVEeAsgoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7PVNx%2FxuWumKM0iSrcAx%2FqE2oP%2BIBEeAmIyFLTQLHcLJXTCuZ0dLjaJWl9EVth3aJz6Fp%2BKW67omYt8nVtrKmESPjuHKjaRxFFw6yOtlh7iJdU5%2FefRMdLy9YJcAEoUD%2BM1Ufq7fG1xpYxJ8WfpgocSSahBdtPgwg3%2F%2Frs0mtpp4ZGBKIJMtT6wfqx0eOSOAKWUxC1%2BPgEMOcmZ3bzwBecRlGTytSPh%2F9tWHwOSzav2uR7N%2BI75oM9AxPD7amwB%2F863qHbsszHHhP30cQ9Jw7Ph2WXAfxGuV0VKLV94dWM23eQrLleFO053sawZsa7rG3%2Fq2YvjFMSdHkLoGAwobZt%2FJ3X4FiubjkISDR5yanyL0Bw9zOXx%2F%2BQ%2FbX09ILQSq%2B%2FEzknVUZBFDHMg0vdWuzyaIKcSQAE%2FgpzmUB5LeCbsXykjJjmaywcFarmR7EAk7yrQctQvCT%2Bm7DhLykWv%2BrwSOzioPlzCRkzVb5s7e%2F8KLqkb8x1kZgQe9g914uGzq3iqFHPdQ%2F9s4WRTNn%2F1TQ1vFJehXOtKDTC15XuyI4fOU87n6v3eMqn4mZiI48qMFpMb0wg4WJOQHfa5QkU5kxR%2BBKp8zzIQnym6AOQ3YSzLqnTPfBPMs%2B5VTB6cSUtNVH52tHE766Cj%2F8rMLG4q78GOqUBXRze5mDYWsPy1bsCOJNYCdnq%2BJ07iT8F5LYIzpHPN0dBh0NypDffqzhNULGmnNqzfaVRqBiVPnkadIU%2FfLqTjRAlHAcBKpXetiXTZ%2BtBmPgvuLH2v3Q3ZMsKHZimNh50n8IAzateX%2BvC%2BJceuB%2BODoM7iI13ICdWJTJ7xrpaobQzEg%2BlPMxm7CDELJdHxZbt1adQg%2Fmw%2BEAb5KFr5kBt0%2BrsOsSN&X-Amz-Signature=83ff5437fc33f9be147db2d9f9bdc33d5708d75e10c57d54dcc8a40bc60c038b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7UU42C%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDFkCm6meR8GfaikNnOs03lWyRYLdlH4wPFJBU%2FOXcTmgIgXcbg6YDJ5ZSJMzBKaaPXdabYq3H%2Bo8eCac4LVEeAsgoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7PVNx%2FxuWumKM0iSrcAx%2FqE2oP%2BIBEeAmIyFLTQLHcLJXTCuZ0dLjaJWl9EVth3aJz6Fp%2BKW67omYt8nVtrKmESPjuHKjaRxFFw6yOtlh7iJdU5%2FefRMdLy9YJcAEoUD%2BM1Ufq7fG1xpYxJ8WfpgocSSahBdtPgwg3%2F%2Frs0mtpp4ZGBKIJMtT6wfqx0eOSOAKWUxC1%2BPgEMOcmZ3bzwBecRlGTytSPh%2F9tWHwOSzav2uR7N%2BI75oM9AxPD7amwB%2F863qHbsszHHhP30cQ9Jw7Ph2WXAfxGuV0VKLV94dWM23eQrLleFO053sawZsa7rG3%2Fq2YvjFMSdHkLoGAwobZt%2FJ3X4FiubjkISDR5yanyL0Bw9zOXx%2F%2BQ%2FbX09ILQSq%2B%2FEzknVUZBFDHMg0vdWuzyaIKcSQAE%2FgpzmUB5LeCbsXykjJjmaywcFarmR7EAk7yrQctQvCT%2Bm7DhLykWv%2BrwSOzioPlzCRkzVb5s7e%2F8KLqkb8x1kZgQe9g914uGzq3iqFHPdQ%2F9s4WRTNn%2F1TQ1vFJehXOtKDTC15XuyI4fOU87n6v3eMqn4mZiI48qMFpMb0wg4WJOQHfa5QkU5kxR%2BBKp8zzIQnym6AOQ3YSzLqnTPfBPMs%2B5VTB6cSUtNVH52tHE766Cj%2F8rMLG4q78GOqUBXRze5mDYWsPy1bsCOJNYCdnq%2BJ07iT8F5LYIzpHPN0dBh0NypDffqzhNULGmnNqzfaVRqBiVPnkadIU%2FfLqTjRAlHAcBKpXetiXTZ%2BtBmPgvuLH2v3Q3ZMsKHZimNh50n8IAzateX%2BvC%2BJceuB%2BODoM7iI13ICdWJTJ7xrpaobQzEg%2BlPMxm7CDELJdHxZbt1adQg%2Fmw%2BEAb5KFr5kBt0%2BrsOsSN&X-Amz-Signature=918389107f980d4db7ffbaacf2513c2af956383c379d831645eece80c985fd06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7UU42C%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDFkCm6meR8GfaikNnOs03lWyRYLdlH4wPFJBU%2FOXcTmgIgXcbg6YDJ5ZSJMzBKaaPXdabYq3H%2Bo8eCac4LVEeAsgoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7PVNx%2FxuWumKM0iSrcAx%2FqE2oP%2BIBEeAmIyFLTQLHcLJXTCuZ0dLjaJWl9EVth3aJz6Fp%2BKW67omYt8nVtrKmESPjuHKjaRxFFw6yOtlh7iJdU5%2FefRMdLy9YJcAEoUD%2BM1Ufq7fG1xpYxJ8WfpgocSSahBdtPgwg3%2F%2Frs0mtpp4ZGBKIJMtT6wfqx0eOSOAKWUxC1%2BPgEMOcmZ3bzwBecRlGTytSPh%2F9tWHwOSzav2uR7N%2BI75oM9AxPD7amwB%2F863qHbsszHHhP30cQ9Jw7Ph2WXAfxGuV0VKLV94dWM23eQrLleFO053sawZsa7rG3%2Fq2YvjFMSdHkLoGAwobZt%2FJ3X4FiubjkISDR5yanyL0Bw9zOXx%2F%2BQ%2FbX09ILQSq%2B%2FEzknVUZBFDHMg0vdWuzyaIKcSQAE%2FgpzmUB5LeCbsXykjJjmaywcFarmR7EAk7yrQctQvCT%2Bm7DhLykWv%2BrwSOzioPlzCRkzVb5s7e%2F8KLqkb8x1kZgQe9g914uGzq3iqFHPdQ%2F9s4WRTNn%2F1TQ1vFJehXOtKDTC15XuyI4fOU87n6v3eMqn4mZiI48qMFpMb0wg4WJOQHfa5QkU5kxR%2BBKp8zzIQnym6AOQ3YSzLqnTPfBPMs%2B5VTB6cSUtNVH52tHE766Cj%2F8rMLG4q78GOqUBXRze5mDYWsPy1bsCOJNYCdnq%2BJ07iT8F5LYIzpHPN0dBh0NypDffqzhNULGmnNqzfaVRqBiVPnkadIU%2FfLqTjRAlHAcBKpXetiXTZ%2BtBmPgvuLH2v3Q3ZMsKHZimNh50n8IAzateX%2BvC%2BJceuB%2BODoM7iI13ICdWJTJ7xrpaobQzEg%2BlPMxm7CDELJdHxZbt1adQg%2Fmw%2BEAb5KFr5kBt0%2BrsOsSN&X-Amz-Signature=5b988428c89e41d941d47b0a2f80571342cc4708ac4fb55aa23a6af9d042b3d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K7UU42C%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDFkCm6meR8GfaikNnOs03lWyRYLdlH4wPFJBU%2FOXcTmgIgXcbg6YDJ5ZSJMzBKaaPXdabYq3H%2Bo8eCac4LVEeAsgoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7PVNx%2FxuWumKM0iSrcAx%2FqE2oP%2BIBEeAmIyFLTQLHcLJXTCuZ0dLjaJWl9EVth3aJz6Fp%2BKW67omYt8nVtrKmESPjuHKjaRxFFw6yOtlh7iJdU5%2FefRMdLy9YJcAEoUD%2BM1Ufq7fG1xpYxJ8WfpgocSSahBdtPgwg3%2F%2Frs0mtpp4ZGBKIJMtT6wfqx0eOSOAKWUxC1%2BPgEMOcmZ3bzwBecRlGTytSPh%2F9tWHwOSzav2uR7N%2BI75oM9AxPD7amwB%2F863qHbsszHHhP30cQ9Jw7Ph2WXAfxGuV0VKLV94dWM23eQrLleFO053sawZsa7rG3%2Fq2YvjFMSdHkLoGAwobZt%2FJ3X4FiubjkISDR5yanyL0Bw9zOXx%2F%2BQ%2FbX09ILQSq%2B%2FEzknVUZBFDHMg0vdWuzyaIKcSQAE%2FgpzmUB5LeCbsXykjJjmaywcFarmR7EAk7yrQctQvCT%2Bm7DhLykWv%2BrwSOzioPlzCRkzVb5s7e%2F8KLqkb8x1kZgQe9g914uGzq3iqFHPdQ%2F9s4WRTNn%2F1TQ1vFJehXOtKDTC15XuyI4fOU87n6v3eMqn4mZiI48qMFpMb0wg4WJOQHfa5QkU5kxR%2BBKp8zzIQnym6AOQ3YSzLqnTPfBPMs%2B5VTB6cSUtNVH52tHE766Cj%2F8rMLG4q78GOqUBXRze5mDYWsPy1bsCOJNYCdnq%2BJ07iT8F5LYIzpHPN0dBh0NypDffqzhNULGmnNqzfaVRqBiVPnkadIU%2FfLqTjRAlHAcBKpXetiXTZ%2BtBmPgvuLH2v3Q3ZMsKHZimNh50n8IAzateX%2BvC%2BJceuB%2BODoM7iI13ICdWJTJ7xrpaobQzEg%2BlPMxm7CDELJdHxZbt1adQg%2Fmw%2BEAb5KFr5kBt0%2BrsOsSN&X-Amz-Signature=0028cc1afa093f1d238df2184df8ba3f6802fd3d748afaad378ae64c8488e4f1&X-Amz-SignedHeaders=host&x-id=GetObject)
