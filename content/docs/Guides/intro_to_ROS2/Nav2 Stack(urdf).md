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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ332AAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTXqvbYIBDylbPX0w9aGHQOcORZaLXPRUdZ924MREsGAiEAiPH5D046j03m4u%2FCdxZKsA9VJGvQxN8FnyUZYCse4VQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqRHb3fO9DfvVN%2FvircAxRri15t%2FcWE5HG3%2FI3JfjcB%2F%2Bi971fWOrfUKDZJWhkQwjW0vQv91OunqQyKeWZbfbzhQNhLMbooEZhTe2DQFv9PSNv%2FxrOCZqCJGmDEe14QTMCjYZw1Ym5m3EEkgcc8fSvrp3SToOcKLGOpHLyvl99oQm524n252fMdQTmChY%2FzaI0OFT4mzUejpEDHBqqVhOItn3p4DZR86fz13yIyTI7RrcnvjEyH1xOuFczQ%2BhIltc5Hu3TJydkbXxwTi0FHAjN5o7Qy1x6jgNDVXyA%2FzR77XtIJc2PrF%2BOysxZVp9aXppHCWFwyRX5W6rc1D3KeArFPaUBsg1LanZd6qcqcn5PZL8eUNufNVzKlx594Nh9JOHKzceSFBEOfaka9tLLq6gB5ef8yPFwrMZWZRu6sw7Z48RHZZ3SC88BFJOk%2B95QJ%2BaDpThc9XZQTNNL5oGiCCPf%2B1q7cmQeNq%2F3mrlvhRPkvqFskwkupxryK1Sonx5Ix3umO93MYtbArMILPW6fam%2FZ7pGybgwSI98Yr8hjUsMU7mx63%2Fsq9cM2xVcyWosso3hJzseWfnsEEdA%2FbD8cTIYGmayPeksJgNHpwSQD09EMxe%2FVAVh6D%2BHsWXO5OpmqpZHQu%2BmQ%2B%2BWCBGgeFMJ2FisMGOqUBkNN%2BO4oQ81rqlkNfQ4h80n%2Fn3QL46QR9qRUkEiZeDre2Km8lHUL4fyBn5DHLVUBujloI3wN%2B7wYrRfaWmPv3C8iVtQg4%2FZhSQlxktXxv5GX4Iqv6Kh%2FTRoIKCLjqGHBZjiCf%2F6NBoT25acV78PU1krfBIJsscrmUEj6BZDo65c1xPw1JzOpY962yv%2BnuQBluDTXhR2Wiq7BPJIEJJzhutNpnyNAc&X-Amz-Signature=5f01df5283ed491a642492956c1bbfc2575a0a806900158981258f06e5b4ab14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ332AAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTXqvbYIBDylbPX0w9aGHQOcORZaLXPRUdZ924MREsGAiEAiPH5D046j03m4u%2FCdxZKsA9VJGvQxN8FnyUZYCse4VQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqRHb3fO9DfvVN%2FvircAxRri15t%2FcWE5HG3%2FI3JfjcB%2F%2Bi971fWOrfUKDZJWhkQwjW0vQv91OunqQyKeWZbfbzhQNhLMbooEZhTe2DQFv9PSNv%2FxrOCZqCJGmDEe14QTMCjYZw1Ym5m3EEkgcc8fSvrp3SToOcKLGOpHLyvl99oQm524n252fMdQTmChY%2FzaI0OFT4mzUejpEDHBqqVhOItn3p4DZR86fz13yIyTI7RrcnvjEyH1xOuFczQ%2BhIltc5Hu3TJydkbXxwTi0FHAjN5o7Qy1x6jgNDVXyA%2FzR77XtIJc2PrF%2BOysxZVp9aXppHCWFwyRX5W6rc1D3KeArFPaUBsg1LanZd6qcqcn5PZL8eUNufNVzKlx594Nh9JOHKzceSFBEOfaka9tLLq6gB5ef8yPFwrMZWZRu6sw7Z48RHZZ3SC88BFJOk%2B95QJ%2BaDpThc9XZQTNNL5oGiCCPf%2B1q7cmQeNq%2F3mrlvhRPkvqFskwkupxryK1Sonx5Ix3umO93MYtbArMILPW6fam%2FZ7pGybgwSI98Yr8hjUsMU7mx63%2Fsq9cM2xVcyWosso3hJzseWfnsEEdA%2FbD8cTIYGmayPeksJgNHpwSQD09EMxe%2FVAVh6D%2BHsWXO5OpmqpZHQu%2BmQ%2B%2BWCBGgeFMJ2FisMGOqUBkNN%2BO4oQ81rqlkNfQ4h80n%2Fn3QL46QR9qRUkEiZeDre2Km8lHUL4fyBn5DHLVUBujloI3wN%2B7wYrRfaWmPv3C8iVtQg4%2FZhSQlxktXxv5GX4Iqv6Kh%2FTRoIKCLjqGHBZjiCf%2F6NBoT25acV78PU1krfBIJsscrmUEj6BZDo65c1xPw1JzOpY962yv%2BnuQBluDTXhR2Wiq7BPJIEJJzhutNpnyNAc&X-Amz-Signature=31e533c0010e005829702f0690d8796408c21fd28fb71c31e5249ec4ae3dd873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ332AAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTXqvbYIBDylbPX0w9aGHQOcORZaLXPRUdZ924MREsGAiEAiPH5D046j03m4u%2FCdxZKsA9VJGvQxN8FnyUZYCse4VQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqRHb3fO9DfvVN%2FvircAxRri15t%2FcWE5HG3%2FI3JfjcB%2F%2Bi971fWOrfUKDZJWhkQwjW0vQv91OunqQyKeWZbfbzhQNhLMbooEZhTe2DQFv9PSNv%2FxrOCZqCJGmDEe14QTMCjYZw1Ym5m3EEkgcc8fSvrp3SToOcKLGOpHLyvl99oQm524n252fMdQTmChY%2FzaI0OFT4mzUejpEDHBqqVhOItn3p4DZR86fz13yIyTI7RrcnvjEyH1xOuFczQ%2BhIltc5Hu3TJydkbXxwTi0FHAjN5o7Qy1x6jgNDVXyA%2FzR77XtIJc2PrF%2BOysxZVp9aXppHCWFwyRX5W6rc1D3KeArFPaUBsg1LanZd6qcqcn5PZL8eUNufNVzKlx594Nh9JOHKzceSFBEOfaka9tLLq6gB5ef8yPFwrMZWZRu6sw7Z48RHZZ3SC88BFJOk%2B95QJ%2BaDpThc9XZQTNNL5oGiCCPf%2B1q7cmQeNq%2F3mrlvhRPkvqFskwkupxryK1Sonx5Ix3umO93MYtbArMILPW6fam%2FZ7pGybgwSI98Yr8hjUsMU7mx63%2Fsq9cM2xVcyWosso3hJzseWfnsEEdA%2FbD8cTIYGmayPeksJgNHpwSQD09EMxe%2FVAVh6D%2BHsWXO5OpmqpZHQu%2BmQ%2B%2BWCBGgeFMJ2FisMGOqUBkNN%2BO4oQ81rqlkNfQ4h80n%2Fn3QL46QR9qRUkEiZeDre2Km8lHUL4fyBn5DHLVUBujloI3wN%2B7wYrRfaWmPv3C8iVtQg4%2FZhSQlxktXxv5GX4Iqv6Kh%2FTRoIKCLjqGHBZjiCf%2F6NBoT25acV78PU1krfBIJsscrmUEj6BZDo65c1xPw1JzOpY962yv%2BnuQBluDTXhR2Wiq7BPJIEJJzhutNpnyNAc&X-Amz-Signature=17c9dabb88e5712611cd9aad13dcf7ceb03512f3a22c3d0557e2b0166e2d4d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ332AAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTXqvbYIBDylbPX0w9aGHQOcORZaLXPRUdZ924MREsGAiEAiPH5D046j03m4u%2FCdxZKsA9VJGvQxN8FnyUZYCse4VQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqRHb3fO9DfvVN%2FvircAxRri15t%2FcWE5HG3%2FI3JfjcB%2F%2Bi971fWOrfUKDZJWhkQwjW0vQv91OunqQyKeWZbfbzhQNhLMbooEZhTe2DQFv9PSNv%2FxrOCZqCJGmDEe14QTMCjYZw1Ym5m3EEkgcc8fSvrp3SToOcKLGOpHLyvl99oQm524n252fMdQTmChY%2FzaI0OFT4mzUejpEDHBqqVhOItn3p4DZR86fz13yIyTI7RrcnvjEyH1xOuFczQ%2BhIltc5Hu3TJydkbXxwTi0FHAjN5o7Qy1x6jgNDVXyA%2FzR77XtIJc2PrF%2BOysxZVp9aXppHCWFwyRX5W6rc1D3KeArFPaUBsg1LanZd6qcqcn5PZL8eUNufNVzKlx594Nh9JOHKzceSFBEOfaka9tLLq6gB5ef8yPFwrMZWZRu6sw7Z48RHZZ3SC88BFJOk%2B95QJ%2BaDpThc9XZQTNNL5oGiCCPf%2B1q7cmQeNq%2F3mrlvhRPkvqFskwkupxryK1Sonx5Ix3umO93MYtbArMILPW6fam%2FZ7pGybgwSI98Yr8hjUsMU7mx63%2Fsq9cM2xVcyWosso3hJzseWfnsEEdA%2FbD8cTIYGmayPeksJgNHpwSQD09EMxe%2FVAVh6D%2BHsWXO5OpmqpZHQu%2BmQ%2B%2BWCBGgeFMJ2FisMGOqUBkNN%2BO4oQ81rqlkNfQ4h80n%2Fn3QL46QR9qRUkEiZeDre2Km8lHUL4fyBn5DHLVUBujloI3wN%2B7wYrRfaWmPv3C8iVtQg4%2FZhSQlxktXxv5GX4Iqv6Kh%2FTRoIKCLjqGHBZjiCf%2F6NBoT25acV78PU1krfBIJsscrmUEj6BZDo65c1xPw1JzOpY962yv%2BnuQBluDTXhR2Wiq7BPJIEJJzhutNpnyNAc&X-Amz-Signature=bb52315a705b101d3b98ccaa94a42be075dc2c3867efc3a39c1f20593b789c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ332AAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTXqvbYIBDylbPX0w9aGHQOcORZaLXPRUdZ924MREsGAiEAiPH5D046j03m4u%2FCdxZKsA9VJGvQxN8FnyUZYCse4VQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqRHb3fO9DfvVN%2FvircAxRri15t%2FcWE5HG3%2FI3JfjcB%2F%2Bi971fWOrfUKDZJWhkQwjW0vQv91OunqQyKeWZbfbzhQNhLMbooEZhTe2DQFv9PSNv%2FxrOCZqCJGmDEe14QTMCjYZw1Ym5m3EEkgcc8fSvrp3SToOcKLGOpHLyvl99oQm524n252fMdQTmChY%2FzaI0OFT4mzUejpEDHBqqVhOItn3p4DZR86fz13yIyTI7RrcnvjEyH1xOuFczQ%2BhIltc5Hu3TJydkbXxwTi0FHAjN5o7Qy1x6jgNDVXyA%2FzR77XtIJc2PrF%2BOysxZVp9aXppHCWFwyRX5W6rc1D3KeArFPaUBsg1LanZd6qcqcn5PZL8eUNufNVzKlx594Nh9JOHKzceSFBEOfaka9tLLq6gB5ef8yPFwrMZWZRu6sw7Z48RHZZ3SC88BFJOk%2B95QJ%2BaDpThc9XZQTNNL5oGiCCPf%2B1q7cmQeNq%2F3mrlvhRPkvqFskwkupxryK1Sonx5Ix3umO93MYtbArMILPW6fam%2FZ7pGybgwSI98Yr8hjUsMU7mx63%2Fsq9cM2xVcyWosso3hJzseWfnsEEdA%2FbD8cTIYGmayPeksJgNHpwSQD09EMxe%2FVAVh6D%2BHsWXO5OpmqpZHQu%2BmQ%2B%2BWCBGgeFMJ2FisMGOqUBkNN%2BO4oQ81rqlkNfQ4h80n%2Fn3QL46QR9qRUkEiZeDre2Km8lHUL4fyBn5DHLVUBujloI3wN%2B7wYrRfaWmPv3C8iVtQg4%2FZhSQlxktXxv5GX4Iqv6Kh%2FTRoIKCLjqGHBZjiCf%2F6NBoT25acV78PU1krfBIJsscrmUEj6BZDo65c1xPw1JzOpY962yv%2BnuQBluDTXhR2Wiq7BPJIEJJzhutNpnyNAc&X-Amz-Signature=77c4b657ba67f6c588d322d8ca6b47abe6bea406181d3acc58bc0d08d942db46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ332AAL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTXqvbYIBDylbPX0w9aGHQOcORZaLXPRUdZ924MREsGAiEAiPH5D046j03m4u%2FCdxZKsA9VJGvQxN8FnyUZYCse4VQqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqRHb3fO9DfvVN%2FvircAxRri15t%2FcWE5HG3%2FI3JfjcB%2F%2Bi971fWOrfUKDZJWhkQwjW0vQv91OunqQyKeWZbfbzhQNhLMbooEZhTe2DQFv9PSNv%2FxrOCZqCJGmDEe14QTMCjYZw1Ym5m3EEkgcc8fSvrp3SToOcKLGOpHLyvl99oQm524n252fMdQTmChY%2FzaI0OFT4mzUejpEDHBqqVhOItn3p4DZR86fz13yIyTI7RrcnvjEyH1xOuFczQ%2BhIltc5Hu3TJydkbXxwTi0FHAjN5o7Qy1x6jgNDVXyA%2FzR77XtIJc2PrF%2BOysxZVp9aXppHCWFwyRX5W6rc1D3KeArFPaUBsg1LanZd6qcqcn5PZL8eUNufNVzKlx594Nh9JOHKzceSFBEOfaka9tLLq6gB5ef8yPFwrMZWZRu6sw7Z48RHZZ3SC88BFJOk%2B95QJ%2BaDpThc9XZQTNNL5oGiCCPf%2B1q7cmQeNq%2F3mrlvhRPkvqFskwkupxryK1Sonx5Ix3umO93MYtbArMILPW6fam%2FZ7pGybgwSI98Yr8hjUsMU7mx63%2Fsq9cM2xVcyWosso3hJzseWfnsEEdA%2FbD8cTIYGmayPeksJgNHpwSQD09EMxe%2FVAVh6D%2BHsWXO5OpmqpZHQu%2BmQ%2B%2BWCBGgeFMJ2FisMGOqUBkNN%2BO4oQ81rqlkNfQ4h80n%2Fn3QL46QR9qRUkEiZeDre2Km8lHUL4fyBn5DHLVUBujloI3wN%2B7wYrRfaWmPv3C8iVtQg4%2FZhSQlxktXxv5GX4Iqv6Kh%2FTRoIKCLjqGHBZjiCf%2F6NBoT25acV78PU1krfBIJsscrmUEj6BZDo65c1xPw1JzOpY962yv%2BnuQBluDTXhR2Wiq7BPJIEJJzhutNpnyNAc&X-Amz-Signature=b4ef9e6dba6397fcf25068ac3935c3fe36828778c8f5f421de12890292ed57e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
