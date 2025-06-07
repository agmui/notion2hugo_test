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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBP7I5M%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyksBYvXZXcwmWxGUL3LGewui6BeWop2MYRJUym5Q5CgIgJWUxWTx%2B9wXzhZQZA2PwdiNFOmjy%2BbJrjjNoxc7q%2FvAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkxFYN%2BiPgoaK2HNSrcA%2B0Mil8xxJXZkopAzH7zvW6Uz%2FqRF0y6%2F41QJ7QeLmvtUQbcitHz4XN%2Fy1g58tB%2BRnuQO2ycwjZEeFcMuteegbIRABD4XHQ968MQy3eFCqR%2By%2FZaFv78MsscdzmT9%2BWqoaStffJmGMCGPkLF0CEwMNlW9X24ZGtLu%2FVW%2BrEHMeq1LFJuVS1JF4CcQ%2FMG%2FxCR3jbRiNaMQfFVa5y%2BPDfWWNtIXVoCXzYqCDAsY%2BmFlyulE3DaXRA54MTf1OXAqbwYmEILCZv1f0izo1N%2B1HoLMgzuvTFqTNeJ11rDMi5PjLNuKs2iGnHonAKu%2FwAFiqxzE72T8iSCTdo%2BAYURKNz%2B8kdyH9stHdLmfh7039zDq8ms7D%2Bj38BUaUtRTl0VNV2Xj8Dwh5nfcTOjDCzEfTlZlSAod7M6svj48wXk0B2NgUpR77TeEWc%2FRTfraLOgzwNQ8%2FbyxSHpPnG6gfDOdVagyXwfL8BDSFIFUB0jdu5wbglt1Qup67LRhkkZzK8mpalKgFOkOLGlesXw5WNXD3ijjvIcaDVF9XaaOOXr%2FHGAL38fuFgSziQ%2ByaLZwyqGYuVMCeuFjTYT%2F4DfZ%2FqhMdlGkMlmeuygEWu28ORKO68lsX4zbmehB0tVogFqGsnRMLSBkcIGOqUBb6%2BFTTMHNH6mkZaGdpJdQSMsJe1BmB8QR0efSgZ5YKtK1CRGjondjYmkVFTLgqfYeer69ZKqLoCwn2MUmph8cL1m42sydZwK73SfnvqOfmp8uFpqd9YAUshP8xjv7UJ7%2FA2AUyGaG6o9BJceoCEmwFeGQiuE3Z5nPShkB0h5GjNQFe9cFqSLg3l0xpL6LeKg1nphLY2LOb4%2FBFziOSSYKFAfBPnm&X-Amz-Signature=53912df1c5bc08b71160cf4ce43d0d213f493052c17aae39a997c67d82854da7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBP7I5M%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyksBYvXZXcwmWxGUL3LGewui6BeWop2MYRJUym5Q5CgIgJWUxWTx%2B9wXzhZQZA2PwdiNFOmjy%2BbJrjjNoxc7q%2FvAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkxFYN%2BiPgoaK2HNSrcA%2B0Mil8xxJXZkopAzH7zvW6Uz%2FqRF0y6%2F41QJ7QeLmvtUQbcitHz4XN%2Fy1g58tB%2BRnuQO2ycwjZEeFcMuteegbIRABD4XHQ968MQy3eFCqR%2By%2FZaFv78MsscdzmT9%2BWqoaStffJmGMCGPkLF0CEwMNlW9X24ZGtLu%2FVW%2BrEHMeq1LFJuVS1JF4CcQ%2FMG%2FxCR3jbRiNaMQfFVa5y%2BPDfWWNtIXVoCXzYqCDAsY%2BmFlyulE3DaXRA54MTf1OXAqbwYmEILCZv1f0izo1N%2B1HoLMgzuvTFqTNeJ11rDMi5PjLNuKs2iGnHonAKu%2FwAFiqxzE72T8iSCTdo%2BAYURKNz%2B8kdyH9stHdLmfh7039zDq8ms7D%2Bj38BUaUtRTl0VNV2Xj8Dwh5nfcTOjDCzEfTlZlSAod7M6svj48wXk0B2NgUpR77TeEWc%2FRTfraLOgzwNQ8%2FbyxSHpPnG6gfDOdVagyXwfL8BDSFIFUB0jdu5wbglt1Qup67LRhkkZzK8mpalKgFOkOLGlesXw5WNXD3ijjvIcaDVF9XaaOOXr%2FHGAL38fuFgSziQ%2ByaLZwyqGYuVMCeuFjTYT%2F4DfZ%2FqhMdlGkMlmeuygEWu28ORKO68lsX4zbmehB0tVogFqGsnRMLSBkcIGOqUBb6%2BFTTMHNH6mkZaGdpJdQSMsJe1BmB8QR0efSgZ5YKtK1CRGjondjYmkVFTLgqfYeer69ZKqLoCwn2MUmph8cL1m42sydZwK73SfnvqOfmp8uFpqd9YAUshP8xjv7UJ7%2FA2AUyGaG6o9BJceoCEmwFeGQiuE3Z5nPShkB0h5GjNQFe9cFqSLg3l0xpL6LeKg1nphLY2LOb4%2FBFziOSSYKFAfBPnm&X-Amz-Signature=a2c2fc687a3b3ad172ef560283f7c1c8a6ade4e1d9f7a8479e283241be8f3df2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBP7I5M%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyksBYvXZXcwmWxGUL3LGewui6BeWop2MYRJUym5Q5CgIgJWUxWTx%2B9wXzhZQZA2PwdiNFOmjy%2BbJrjjNoxc7q%2FvAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkxFYN%2BiPgoaK2HNSrcA%2B0Mil8xxJXZkopAzH7zvW6Uz%2FqRF0y6%2F41QJ7QeLmvtUQbcitHz4XN%2Fy1g58tB%2BRnuQO2ycwjZEeFcMuteegbIRABD4XHQ968MQy3eFCqR%2By%2FZaFv78MsscdzmT9%2BWqoaStffJmGMCGPkLF0CEwMNlW9X24ZGtLu%2FVW%2BrEHMeq1LFJuVS1JF4CcQ%2FMG%2FxCR3jbRiNaMQfFVa5y%2BPDfWWNtIXVoCXzYqCDAsY%2BmFlyulE3DaXRA54MTf1OXAqbwYmEILCZv1f0izo1N%2B1HoLMgzuvTFqTNeJ11rDMi5PjLNuKs2iGnHonAKu%2FwAFiqxzE72T8iSCTdo%2BAYURKNz%2B8kdyH9stHdLmfh7039zDq8ms7D%2Bj38BUaUtRTl0VNV2Xj8Dwh5nfcTOjDCzEfTlZlSAod7M6svj48wXk0B2NgUpR77TeEWc%2FRTfraLOgzwNQ8%2FbyxSHpPnG6gfDOdVagyXwfL8BDSFIFUB0jdu5wbglt1Qup67LRhkkZzK8mpalKgFOkOLGlesXw5WNXD3ijjvIcaDVF9XaaOOXr%2FHGAL38fuFgSziQ%2ByaLZwyqGYuVMCeuFjTYT%2F4DfZ%2FqhMdlGkMlmeuygEWu28ORKO68lsX4zbmehB0tVogFqGsnRMLSBkcIGOqUBb6%2BFTTMHNH6mkZaGdpJdQSMsJe1BmB8QR0efSgZ5YKtK1CRGjondjYmkVFTLgqfYeer69ZKqLoCwn2MUmph8cL1m42sydZwK73SfnvqOfmp8uFpqd9YAUshP8xjv7UJ7%2FA2AUyGaG6o9BJceoCEmwFeGQiuE3Z5nPShkB0h5GjNQFe9cFqSLg3l0xpL6LeKg1nphLY2LOb4%2FBFziOSSYKFAfBPnm&X-Amz-Signature=bab9e4fb74df65783700def38217f0e8fdbc253a170a2871cd0a1c65d38915d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBP7I5M%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyksBYvXZXcwmWxGUL3LGewui6BeWop2MYRJUym5Q5CgIgJWUxWTx%2B9wXzhZQZA2PwdiNFOmjy%2BbJrjjNoxc7q%2FvAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkxFYN%2BiPgoaK2HNSrcA%2B0Mil8xxJXZkopAzH7zvW6Uz%2FqRF0y6%2F41QJ7QeLmvtUQbcitHz4XN%2Fy1g58tB%2BRnuQO2ycwjZEeFcMuteegbIRABD4XHQ968MQy3eFCqR%2By%2FZaFv78MsscdzmT9%2BWqoaStffJmGMCGPkLF0CEwMNlW9X24ZGtLu%2FVW%2BrEHMeq1LFJuVS1JF4CcQ%2FMG%2FxCR3jbRiNaMQfFVa5y%2BPDfWWNtIXVoCXzYqCDAsY%2BmFlyulE3DaXRA54MTf1OXAqbwYmEILCZv1f0izo1N%2B1HoLMgzuvTFqTNeJ11rDMi5PjLNuKs2iGnHonAKu%2FwAFiqxzE72T8iSCTdo%2BAYURKNz%2B8kdyH9stHdLmfh7039zDq8ms7D%2Bj38BUaUtRTl0VNV2Xj8Dwh5nfcTOjDCzEfTlZlSAod7M6svj48wXk0B2NgUpR77TeEWc%2FRTfraLOgzwNQ8%2FbyxSHpPnG6gfDOdVagyXwfL8BDSFIFUB0jdu5wbglt1Qup67LRhkkZzK8mpalKgFOkOLGlesXw5WNXD3ijjvIcaDVF9XaaOOXr%2FHGAL38fuFgSziQ%2ByaLZwyqGYuVMCeuFjTYT%2F4DfZ%2FqhMdlGkMlmeuygEWu28ORKO68lsX4zbmehB0tVogFqGsnRMLSBkcIGOqUBb6%2BFTTMHNH6mkZaGdpJdQSMsJe1BmB8QR0efSgZ5YKtK1CRGjondjYmkVFTLgqfYeer69ZKqLoCwn2MUmph8cL1m42sydZwK73SfnvqOfmp8uFpqd9YAUshP8xjv7UJ7%2FA2AUyGaG6o9BJceoCEmwFeGQiuE3Z5nPShkB0h5GjNQFe9cFqSLg3l0xpL6LeKg1nphLY2LOb4%2FBFziOSSYKFAfBPnm&X-Amz-Signature=c4123eadd3c20c6db75726075210d1f0d5d67371d457e21aa7d1b1e22247c913&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBP7I5M%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyksBYvXZXcwmWxGUL3LGewui6BeWop2MYRJUym5Q5CgIgJWUxWTx%2B9wXzhZQZA2PwdiNFOmjy%2BbJrjjNoxc7q%2FvAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkxFYN%2BiPgoaK2HNSrcA%2B0Mil8xxJXZkopAzH7zvW6Uz%2FqRF0y6%2F41QJ7QeLmvtUQbcitHz4XN%2Fy1g58tB%2BRnuQO2ycwjZEeFcMuteegbIRABD4XHQ968MQy3eFCqR%2By%2FZaFv78MsscdzmT9%2BWqoaStffJmGMCGPkLF0CEwMNlW9X24ZGtLu%2FVW%2BrEHMeq1LFJuVS1JF4CcQ%2FMG%2FxCR3jbRiNaMQfFVa5y%2BPDfWWNtIXVoCXzYqCDAsY%2BmFlyulE3DaXRA54MTf1OXAqbwYmEILCZv1f0izo1N%2B1HoLMgzuvTFqTNeJ11rDMi5PjLNuKs2iGnHonAKu%2FwAFiqxzE72T8iSCTdo%2BAYURKNz%2B8kdyH9stHdLmfh7039zDq8ms7D%2Bj38BUaUtRTl0VNV2Xj8Dwh5nfcTOjDCzEfTlZlSAod7M6svj48wXk0B2NgUpR77TeEWc%2FRTfraLOgzwNQ8%2FbyxSHpPnG6gfDOdVagyXwfL8BDSFIFUB0jdu5wbglt1Qup67LRhkkZzK8mpalKgFOkOLGlesXw5WNXD3ijjvIcaDVF9XaaOOXr%2FHGAL38fuFgSziQ%2ByaLZwyqGYuVMCeuFjTYT%2F4DfZ%2FqhMdlGkMlmeuygEWu28ORKO68lsX4zbmehB0tVogFqGsnRMLSBkcIGOqUBb6%2BFTTMHNH6mkZaGdpJdQSMsJe1BmB8QR0efSgZ5YKtK1CRGjondjYmkVFTLgqfYeer69ZKqLoCwn2MUmph8cL1m42sydZwK73SfnvqOfmp8uFpqd9YAUshP8xjv7UJ7%2FA2AUyGaG6o9BJceoCEmwFeGQiuE3Z5nPShkB0h5GjNQFe9cFqSLg3l0xpL6LeKg1nphLY2LOb4%2FBFziOSSYKFAfBPnm&X-Amz-Signature=f8785b24eb699f1f91cad8e91ace43c16b9f9378fa578c764767f50f26a2915a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBP7I5M%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T150737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyksBYvXZXcwmWxGUL3LGewui6BeWop2MYRJUym5Q5CgIgJWUxWTx%2B9wXzhZQZA2PwdiNFOmjy%2BbJrjjNoxc7q%2FvAq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHkxFYN%2BiPgoaK2HNSrcA%2B0Mil8xxJXZkopAzH7zvW6Uz%2FqRF0y6%2F41QJ7QeLmvtUQbcitHz4XN%2Fy1g58tB%2BRnuQO2ycwjZEeFcMuteegbIRABD4XHQ968MQy3eFCqR%2By%2FZaFv78MsscdzmT9%2BWqoaStffJmGMCGPkLF0CEwMNlW9X24ZGtLu%2FVW%2BrEHMeq1LFJuVS1JF4CcQ%2FMG%2FxCR3jbRiNaMQfFVa5y%2BPDfWWNtIXVoCXzYqCDAsY%2BmFlyulE3DaXRA54MTf1OXAqbwYmEILCZv1f0izo1N%2B1HoLMgzuvTFqTNeJ11rDMi5PjLNuKs2iGnHonAKu%2FwAFiqxzE72T8iSCTdo%2BAYURKNz%2B8kdyH9stHdLmfh7039zDq8ms7D%2Bj38BUaUtRTl0VNV2Xj8Dwh5nfcTOjDCzEfTlZlSAod7M6svj48wXk0B2NgUpR77TeEWc%2FRTfraLOgzwNQ8%2FbyxSHpPnG6gfDOdVagyXwfL8BDSFIFUB0jdu5wbglt1Qup67LRhkkZzK8mpalKgFOkOLGlesXw5WNXD3ijjvIcaDVF9XaaOOXr%2FHGAL38fuFgSziQ%2ByaLZwyqGYuVMCeuFjTYT%2F4DfZ%2FqhMdlGkMlmeuygEWu28ORKO68lsX4zbmehB0tVogFqGsnRMLSBkcIGOqUBb6%2BFTTMHNH6mkZaGdpJdQSMsJe1BmB8QR0efSgZ5YKtK1CRGjondjYmkVFTLgqfYeer69ZKqLoCwn2MUmph8cL1m42sydZwK73SfnvqOfmp8uFpqd9YAUshP8xjv7UJ7%2FA2AUyGaG6o9BJceoCEmwFeGQiuE3Z5nPShkB0h5GjNQFe9cFqSLg3l0xpL6LeKg1nphLY2LOb4%2FBFziOSSYKFAfBPnm&X-Amz-Signature=c9823c5768c44e30b421a240187c605dea84d347cca7f6450ee2c09fc1098311&X-Amz-SignedHeaders=host&x-id=GetObject)
