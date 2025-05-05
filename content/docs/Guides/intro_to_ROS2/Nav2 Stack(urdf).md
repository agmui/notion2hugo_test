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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFX3GJP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC3dsZAx0HXx3PFluZj3rUDzXYNDRd0TrTXr1rIgI%2FECAIgASKbMlC%2FPwIk5nmS43vJWV4a68MWgpo0x3zH8aQnS58q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAgdwjPKb9QlygJAnSrcA2VYrSzTyFdwEJW90AauUfpyDLtbwLfC3IZij0Z6J9f0qogDT1t7NktpEw8K93h0YYph3KiKbK36z6Akp9CK1zsrTo0n6xchfGLpD68mmg8OtfOAex23W5%2FRLDjI7K2D5cp2FEefiPonMLdEwV8TFBphiBELTC5Jxe5zY%2FDJCcLAukxUzTSO48lFRCmEEslHEXwBXbi%2BXdp%2BU2ZgYFegzhUgW6nnw9SgokEX2a29dp3MFwjHWJfGKKZAgmYeG0TpXfqbyZiGi7FC5xUCNwMuGPDapvpUW8TwebMHm0Q6yIbLGOLjNgZ432kbCZLsRLYxDhZoS4Cs%2FimpG1pkslHCvTgAWH6FDZxxLLFGIzOfQjFys00qVj3f37sabkuwqyIHqR%2BT3S7yJsOpwvrhi8Nh7ar18VhZ%2BsadDujNJ5iCEdo81CncjTLeRA4HCrWa2uoxEyPwOBmqB4C1jP%2FDqo92P2%2BZCn1I1cgHO5NbKPrPx5RPKQaDCcWYsow3ela%2BrfNK336i2IisiJmp9kxv0M4rQPR3a8dad%2BWzQkzsaFWrdIEA%2Fcxxdw4H8Ud2VXwcMWcvptrgAZq3fZZGrbZ1zzDLSoyIxSKg6bgDcaCGtONa2gV6chhRAKEqGtdD3etsMIWD4cAGOqUBNdtwqktYLxOCSnX%2BQVlH%2FoueUMkJOLEKkfcU1kVMvhZzkWMZRPLcl9zOClB6IiRkJpLxeMT%2Bai%2B7DxYaG%2FlJnCe%2FeHyaj7R4fTvC0%2FcLzTN4iKEBiGPA4zALTZInV4YbIVjWuJeFJ0zdRAmN2KNwvnnaprNkQwk1GwxPpVdng0qtgCOuv2wuD4GolUNop3V7%2Bk8oU%2BheH4ks40r2ixvDuFbueDN0&X-Amz-Signature=980929c23b76eb324d596bd6151095b0887d3a18c4bce16a0dfd55149689d032&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFX3GJP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC3dsZAx0HXx3PFluZj3rUDzXYNDRd0TrTXr1rIgI%2FECAIgASKbMlC%2FPwIk5nmS43vJWV4a68MWgpo0x3zH8aQnS58q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAgdwjPKb9QlygJAnSrcA2VYrSzTyFdwEJW90AauUfpyDLtbwLfC3IZij0Z6J9f0qogDT1t7NktpEw8K93h0YYph3KiKbK36z6Akp9CK1zsrTo0n6xchfGLpD68mmg8OtfOAex23W5%2FRLDjI7K2D5cp2FEefiPonMLdEwV8TFBphiBELTC5Jxe5zY%2FDJCcLAukxUzTSO48lFRCmEEslHEXwBXbi%2BXdp%2BU2ZgYFegzhUgW6nnw9SgokEX2a29dp3MFwjHWJfGKKZAgmYeG0TpXfqbyZiGi7FC5xUCNwMuGPDapvpUW8TwebMHm0Q6yIbLGOLjNgZ432kbCZLsRLYxDhZoS4Cs%2FimpG1pkslHCvTgAWH6FDZxxLLFGIzOfQjFys00qVj3f37sabkuwqyIHqR%2BT3S7yJsOpwvrhi8Nh7ar18VhZ%2BsadDujNJ5iCEdo81CncjTLeRA4HCrWa2uoxEyPwOBmqB4C1jP%2FDqo92P2%2BZCn1I1cgHO5NbKPrPx5RPKQaDCcWYsow3ela%2BrfNK336i2IisiJmp9kxv0M4rQPR3a8dad%2BWzQkzsaFWrdIEA%2Fcxxdw4H8Ud2VXwcMWcvptrgAZq3fZZGrbZ1zzDLSoyIxSKg6bgDcaCGtONa2gV6chhRAKEqGtdD3etsMIWD4cAGOqUBNdtwqktYLxOCSnX%2BQVlH%2FoueUMkJOLEKkfcU1kVMvhZzkWMZRPLcl9zOClB6IiRkJpLxeMT%2Bai%2B7DxYaG%2FlJnCe%2FeHyaj7R4fTvC0%2FcLzTN4iKEBiGPA4zALTZInV4YbIVjWuJeFJ0zdRAmN2KNwvnnaprNkQwk1GwxPpVdng0qtgCOuv2wuD4GolUNop3V7%2Bk8oU%2BheH4ks40r2ixvDuFbueDN0&X-Amz-Signature=92e015a5487a4bca737307df79cf5b5143d39bcaf141bb360f754d51ed164965&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFX3GJP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC3dsZAx0HXx3PFluZj3rUDzXYNDRd0TrTXr1rIgI%2FECAIgASKbMlC%2FPwIk5nmS43vJWV4a68MWgpo0x3zH8aQnS58q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAgdwjPKb9QlygJAnSrcA2VYrSzTyFdwEJW90AauUfpyDLtbwLfC3IZij0Z6J9f0qogDT1t7NktpEw8K93h0YYph3KiKbK36z6Akp9CK1zsrTo0n6xchfGLpD68mmg8OtfOAex23W5%2FRLDjI7K2D5cp2FEefiPonMLdEwV8TFBphiBELTC5Jxe5zY%2FDJCcLAukxUzTSO48lFRCmEEslHEXwBXbi%2BXdp%2BU2ZgYFegzhUgW6nnw9SgokEX2a29dp3MFwjHWJfGKKZAgmYeG0TpXfqbyZiGi7FC5xUCNwMuGPDapvpUW8TwebMHm0Q6yIbLGOLjNgZ432kbCZLsRLYxDhZoS4Cs%2FimpG1pkslHCvTgAWH6FDZxxLLFGIzOfQjFys00qVj3f37sabkuwqyIHqR%2BT3S7yJsOpwvrhi8Nh7ar18VhZ%2BsadDujNJ5iCEdo81CncjTLeRA4HCrWa2uoxEyPwOBmqB4C1jP%2FDqo92P2%2BZCn1I1cgHO5NbKPrPx5RPKQaDCcWYsow3ela%2BrfNK336i2IisiJmp9kxv0M4rQPR3a8dad%2BWzQkzsaFWrdIEA%2Fcxxdw4H8Ud2VXwcMWcvptrgAZq3fZZGrbZ1zzDLSoyIxSKg6bgDcaCGtONa2gV6chhRAKEqGtdD3etsMIWD4cAGOqUBNdtwqktYLxOCSnX%2BQVlH%2FoueUMkJOLEKkfcU1kVMvhZzkWMZRPLcl9zOClB6IiRkJpLxeMT%2Bai%2B7DxYaG%2FlJnCe%2FeHyaj7R4fTvC0%2FcLzTN4iKEBiGPA4zALTZInV4YbIVjWuJeFJ0zdRAmN2KNwvnnaprNkQwk1GwxPpVdng0qtgCOuv2wuD4GolUNop3V7%2Bk8oU%2BheH4ks40r2ixvDuFbueDN0&X-Amz-Signature=2cd1951809f26536f871c0f21e6463e76cab2aaa378c27d07fd7a5dc214afc13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFX3GJP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC3dsZAx0HXx3PFluZj3rUDzXYNDRd0TrTXr1rIgI%2FECAIgASKbMlC%2FPwIk5nmS43vJWV4a68MWgpo0x3zH8aQnS58q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAgdwjPKb9QlygJAnSrcA2VYrSzTyFdwEJW90AauUfpyDLtbwLfC3IZij0Z6J9f0qogDT1t7NktpEw8K93h0YYph3KiKbK36z6Akp9CK1zsrTo0n6xchfGLpD68mmg8OtfOAex23W5%2FRLDjI7K2D5cp2FEefiPonMLdEwV8TFBphiBELTC5Jxe5zY%2FDJCcLAukxUzTSO48lFRCmEEslHEXwBXbi%2BXdp%2BU2ZgYFegzhUgW6nnw9SgokEX2a29dp3MFwjHWJfGKKZAgmYeG0TpXfqbyZiGi7FC5xUCNwMuGPDapvpUW8TwebMHm0Q6yIbLGOLjNgZ432kbCZLsRLYxDhZoS4Cs%2FimpG1pkslHCvTgAWH6FDZxxLLFGIzOfQjFys00qVj3f37sabkuwqyIHqR%2BT3S7yJsOpwvrhi8Nh7ar18VhZ%2BsadDujNJ5iCEdo81CncjTLeRA4HCrWa2uoxEyPwOBmqB4C1jP%2FDqo92P2%2BZCn1I1cgHO5NbKPrPx5RPKQaDCcWYsow3ela%2BrfNK336i2IisiJmp9kxv0M4rQPR3a8dad%2BWzQkzsaFWrdIEA%2Fcxxdw4H8Ud2VXwcMWcvptrgAZq3fZZGrbZ1zzDLSoyIxSKg6bgDcaCGtONa2gV6chhRAKEqGtdD3etsMIWD4cAGOqUBNdtwqktYLxOCSnX%2BQVlH%2FoueUMkJOLEKkfcU1kVMvhZzkWMZRPLcl9zOClB6IiRkJpLxeMT%2Bai%2B7DxYaG%2FlJnCe%2FeHyaj7R4fTvC0%2FcLzTN4iKEBiGPA4zALTZInV4YbIVjWuJeFJ0zdRAmN2KNwvnnaprNkQwk1GwxPpVdng0qtgCOuv2wuD4GolUNop3V7%2Bk8oU%2BheH4ks40r2ixvDuFbueDN0&X-Amz-Signature=0e13c84f8bde99a49007f26e968c249db1daf58b739509214d0a3294ce3402cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFX3GJP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC3dsZAx0HXx3PFluZj3rUDzXYNDRd0TrTXr1rIgI%2FECAIgASKbMlC%2FPwIk5nmS43vJWV4a68MWgpo0x3zH8aQnS58q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAgdwjPKb9QlygJAnSrcA2VYrSzTyFdwEJW90AauUfpyDLtbwLfC3IZij0Z6J9f0qogDT1t7NktpEw8K93h0YYph3KiKbK36z6Akp9CK1zsrTo0n6xchfGLpD68mmg8OtfOAex23W5%2FRLDjI7K2D5cp2FEefiPonMLdEwV8TFBphiBELTC5Jxe5zY%2FDJCcLAukxUzTSO48lFRCmEEslHEXwBXbi%2BXdp%2BU2ZgYFegzhUgW6nnw9SgokEX2a29dp3MFwjHWJfGKKZAgmYeG0TpXfqbyZiGi7FC5xUCNwMuGPDapvpUW8TwebMHm0Q6yIbLGOLjNgZ432kbCZLsRLYxDhZoS4Cs%2FimpG1pkslHCvTgAWH6FDZxxLLFGIzOfQjFys00qVj3f37sabkuwqyIHqR%2BT3S7yJsOpwvrhi8Nh7ar18VhZ%2BsadDujNJ5iCEdo81CncjTLeRA4HCrWa2uoxEyPwOBmqB4C1jP%2FDqo92P2%2BZCn1I1cgHO5NbKPrPx5RPKQaDCcWYsow3ela%2BrfNK336i2IisiJmp9kxv0M4rQPR3a8dad%2BWzQkzsaFWrdIEA%2Fcxxdw4H8Ud2VXwcMWcvptrgAZq3fZZGrbZ1zzDLSoyIxSKg6bgDcaCGtONa2gV6chhRAKEqGtdD3etsMIWD4cAGOqUBNdtwqktYLxOCSnX%2BQVlH%2FoueUMkJOLEKkfcU1kVMvhZzkWMZRPLcl9zOClB6IiRkJpLxeMT%2Bai%2B7DxYaG%2FlJnCe%2FeHyaj7R4fTvC0%2FcLzTN4iKEBiGPA4zALTZInV4YbIVjWuJeFJ0zdRAmN2KNwvnnaprNkQwk1GwxPpVdng0qtgCOuv2wuD4GolUNop3V7%2Bk8oU%2BheH4ks40r2ixvDuFbueDN0&X-Amz-Signature=f74211e0cdd9bb0c00cee3eb611fd48d45924b9578b445bf2616ecc7b6146c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFX3GJP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC3dsZAx0HXx3PFluZj3rUDzXYNDRd0TrTXr1rIgI%2FECAIgASKbMlC%2FPwIk5nmS43vJWV4a68MWgpo0x3zH8aQnS58q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAgdwjPKb9QlygJAnSrcA2VYrSzTyFdwEJW90AauUfpyDLtbwLfC3IZij0Z6J9f0qogDT1t7NktpEw8K93h0YYph3KiKbK36z6Akp9CK1zsrTo0n6xchfGLpD68mmg8OtfOAex23W5%2FRLDjI7K2D5cp2FEefiPonMLdEwV8TFBphiBELTC5Jxe5zY%2FDJCcLAukxUzTSO48lFRCmEEslHEXwBXbi%2BXdp%2BU2ZgYFegzhUgW6nnw9SgokEX2a29dp3MFwjHWJfGKKZAgmYeG0TpXfqbyZiGi7FC5xUCNwMuGPDapvpUW8TwebMHm0Q6yIbLGOLjNgZ432kbCZLsRLYxDhZoS4Cs%2FimpG1pkslHCvTgAWH6FDZxxLLFGIzOfQjFys00qVj3f37sabkuwqyIHqR%2BT3S7yJsOpwvrhi8Nh7ar18VhZ%2BsadDujNJ5iCEdo81CncjTLeRA4HCrWa2uoxEyPwOBmqB4C1jP%2FDqo92P2%2BZCn1I1cgHO5NbKPrPx5RPKQaDCcWYsow3ela%2BrfNK336i2IisiJmp9kxv0M4rQPR3a8dad%2BWzQkzsaFWrdIEA%2Fcxxdw4H8Ud2VXwcMWcvptrgAZq3fZZGrbZ1zzDLSoyIxSKg6bgDcaCGtONa2gV6chhRAKEqGtdD3etsMIWD4cAGOqUBNdtwqktYLxOCSnX%2BQVlH%2FoueUMkJOLEKkfcU1kVMvhZzkWMZRPLcl9zOClB6IiRkJpLxeMT%2Bai%2B7DxYaG%2FlJnCe%2FeHyaj7R4fTvC0%2FcLzTN4iKEBiGPA4zALTZInV4YbIVjWuJeFJ0zdRAmN2KNwvnnaprNkQwk1GwxPpVdng0qtgCOuv2wuD4GolUNop3V7%2Bk8oU%2BheH4ks40r2ixvDuFbueDN0&X-Amz-Signature=80b72a37c30eb34d6320274d72afc5446b7dc11e0141bc02e5ad43e51d0b89d3&X-Amz-SignedHeaders=host&x-id=GetObject)
