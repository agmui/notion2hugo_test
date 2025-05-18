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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YK6OCO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvu28D%2B0A6kjSUEKQTg14tFPrHRyICixrYy04ntCjcJAiEAhIf%2FcQKT0565%2BQJL7yQ6NYDnY5A8H4FsJbt9Jelj5A0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCTUlCwQWzVhm4ddaSrcA92%2B%2FmIBCdODGYvG2BUn4G94VM%2BlDkpocnl0FwFr2XN1Rkp9228oT%2Ftz%2FGIwki9n7Z%2B8THtAg1lfPyNxWOQhddfEcS%2FFaorjw5GecHri38OhfLH%2BQnX5FOKnRTkKw38oDfJODLpyAjGn9BbQK36ie9uyaw4r1jmV%2FBBRaXmhsepP9lqnQeU86KZUJGhfAAQ3X%2BeS5IE3w9PNLop%2FQnsppyDCnnIxpDV6iDOLhoh7m%2F9Vwbz001gT%2Bh%2BH3zG%2FaDRE5unaXYjVZnjqVJT1usvPeqZknG21RTVRO553Xh5Tv7KhZalNAgOj5LbdaruFxTA0O9td39Nqf%2FpZz2fIGmmfDhurzho6vzJNC3R1i%2FMunTsl7FLZrYSZW%2BSmjev%2BNs5DSxvOPUJ8GkqoeJ0FS3Ejl7ncHh%2BVh7Zt38EzyGDkRRLIJVQJWIkKJieIdbkOoGNR2OB24%2BRGSioVNid1UXwmC9B%2Br50ti9XnS4uaov77D3OBZQ%2Bh%2Bh5bL%2Bzf2Ux6oFEldPQefVOQJCIwepDMhwFiQ1nCpGTJozQ4wlFtvn4pFMF3TmIKyT7VlnawL8Rz4iFmjQ92RJNlP%2FX%2FBjNAjGErZjpL8NJfHW0qroaicHaIdVBm83J1io%2BxYw6%2BB7O%2FMNrXpMEGOqUBFTnyYELGXMV791tEVTo%2FJZzGqnlRWV6FVZmnc%2BiEU3phtbGlj6ZMV7x9QS3lvkyY2yTu7zACNNjvDX7TObPZXGNaNmGs8De7oW%2FMc0YRmIPYCPQ5O5ppOakUwFmrJCBIZ2h%2BXyORBEvybUk%2BpsIkq02rU65YwQSUR2LKHzUemwWqRKXm0hSTQ2qqEJDqzrX1FnwegXke0U1MYYqG3gmilc6B04aB&X-Amz-Signature=fe8d5bdfcf101b59c120739fca59abe0d54866800274f40c337e7244e37bf49d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YK6OCO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvu28D%2B0A6kjSUEKQTg14tFPrHRyICixrYy04ntCjcJAiEAhIf%2FcQKT0565%2BQJL7yQ6NYDnY5A8H4FsJbt9Jelj5A0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCTUlCwQWzVhm4ddaSrcA92%2B%2FmIBCdODGYvG2BUn4G94VM%2BlDkpocnl0FwFr2XN1Rkp9228oT%2Ftz%2FGIwki9n7Z%2B8THtAg1lfPyNxWOQhddfEcS%2FFaorjw5GecHri38OhfLH%2BQnX5FOKnRTkKw38oDfJODLpyAjGn9BbQK36ie9uyaw4r1jmV%2FBBRaXmhsepP9lqnQeU86KZUJGhfAAQ3X%2BeS5IE3w9PNLop%2FQnsppyDCnnIxpDV6iDOLhoh7m%2F9Vwbz001gT%2Bh%2BH3zG%2FaDRE5unaXYjVZnjqVJT1usvPeqZknG21RTVRO553Xh5Tv7KhZalNAgOj5LbdaruFxTA0O9td39Nqf%2FpZz2fIGmmfDhurzho6vzJNC3R1i%2FMunTsl7FLZrYSZW%2BSmjev%2BNs5DSxvOPUJ8GkqoeJ0FS3Ejl7ncHh%2BVh7Zt38EzyGDkRRLIJVQJWIkKJieIdbkOoGNR2OB24%2BRGSioVNid1UXwmC9B%2Br50ti9XnS4uaov77D3OBZQ%2Bh%2Bh5bL%2Bzf2Ux6oFEldPQefVOQJCIwepDMhwFiQ1nCpGTJozQ4wlFtvn4pFMF3TmIKyT7VlnawL8Rz4iFmjQ92RJNlP%2FX%2FBjNAjGErZjpL8NJfHW0qroaicHaIdVBm83J1io%2BxYw6%2BB7O%2FMNrXpMEGOqUBFTnyYELGXMV791tEVTo%2FJZzGqnlRWV6FVZmnc%2BiEU3phtbGlj6ZMV7x9QS3lvkyY2yTu7zACNNjvDX7TObPZXGNaNmGs8De7oW%2FMc0YRmIPYCPQ5O5ppOakUwFmrJCBIZ2h%2BXyORBEvybUk%2BpsIkq02rU65YwQSUR2LKHzUemwWqRKXm0hSTQ2qqEJDqzrX1FnwegXke0U1MYYqG3gmilc6B04aB&X-Amz-Signature=c3b8febb302271c2b5739203d86c1fa138c61f37a61346ceb5104a8c039d06b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YK6OCO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvu28D%2B0A6kjSUEKQTg14tFPrHRyICixrYy04ntCjcJAiEAhIf%2FcQKT0565%2BQJL7yQ6NYDnY5A8H4FsJbt9Jelj5A0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCTUlCwQWzVhm4ddaSrcA92%2B%2FmIBCdODGYvG2BUn4G94VM%2BlDkpocnl0FwFr2XN1Rkp9228oT%2Ftz%2FGIwki9n7Z%2B8THtAg1lfPyNxWOQhddfEcS%2FFaorjw5GecHri38OhfLH%2BQnX5FOKnRTkKw38oDfJODLpyAjGn9BbQK36ie9uyaw4r1jmV%2FBBRaXmhsepP9lqnQeU86KZUJGhfAAQ3X%2BeS5IE3w9PNLop%2FQnsppyDCnnIxpDV6iDOLhoh7m%2F9Vwbz001gT%2Bh%2BH3zG%2FaDRE5unaXYjVZnjqVJT1usvPeqZknG21RTVRO553Xh5Tv7KhZalNAgOj5LbdaruFxTA0O9td39Nqf%2FpZz2fIGmmfDhurzho6vzJNC3R1i%2FMunTsl7FLZrYSZW%2BSmjev%2BNs5DSxvOPUJ8GkqoeJ0FS3Ejl7ncHh%2BVh7Zt38EzyGDkRRLIJVQJWIkKJieIdbkOoGNR2OB24%2BRGSioVNid1UXwmC9B%2Br50ti9XnS4uaov77D3OBZQ%2Bh%2Bh5bL%2Bzf2Ux6oFEldPQefVOQJCIwepDMhwFiQ1nCpGTJozQ4wlFtvn4pFMF3TmIKyT7VlnawL8Rz4iFmjQ92RJNlP%2FX%2FBjNAjGErZjpL8NJfHW0qroaicHaIdVBm83J1io%2BxYw6%2BB7O%2FMNrXpMEGOqUBFTnyYELGXMV791tEVTo%2FJZzGqnlRWV6FVZmnc%2BiEU3phtbGlj6ZMV7x9QS3lvkyY2yTu7zACNNjvDX7TObPZXGNaNmGs8De7oW%2FMc0YRmIPYCPQ5O5ppOakUwFmrJCBIZ2h%2BXyORBEvybUk%2BpsIkq02rU65YwQSUR2LKHzUemwWqRKXm0hSTQ2qqEJDqzrX1FnwegXke0U1MYYqG3gmilc6B04aB&X-Amz-Signature=c05580c63a73057fc4c27165a174f88ae108ae1d974e13602f21b90569b7c333&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YK6OCO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvu28D%2B0A6kjSUEKQTg14tFPrHRyICixrYy04ntCjcJAiEAhIf%2FcQKT0565%2BQJL7yQ6NYDnY5A8H4FsJbt9Jelj5A0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCTUlCwQWzVhm4ddaSrcA92%2B%2FmIBCdODGYvG2BUn4G94VM%2BlDkpocnl0FwFr2XN1Rkp9228oT%2Ftz%2FGIwki9n7Z%2B8THtAg1lfPyNxWOQhddfEcS%2FFaorjw5GecHri38OhfLH%2BQnX5FOKnRTkKw38oDfJODLpyAjGn9BbQK36ie9uyaw4r1jmV%2FBBRaXmhsepP9lqnQeU86KZUJGhfAAQ3X%2BeS5IE3w9PNLop%2FQnsppyDCnnIxpDV6iDOLhoh7m%2F9Vwbz001gT%2Bh%2BH3zG%2FaDRE5unaXYjVZnjqVJT1usvPeqZknG21RTVRO553Xh5Tv7KhZalNAgOj5LbdaruFxTA0O9td39Nqf%2FpZz2fIGmmfDhurzho6vzJNC3R1i%2FMunTsl7FLZrYSZW%2BSmjev%2BNs5DSxvOPUJ8GkqoeJ0FS3Ejl7ncHh%2BVh7Zt38EzyGDkRRLIJVQJWIkKJieIdbkOoGNR2OB24%2BRGSioVNid1UXwmC9B%2Br50ti9XnS4uaov77D3OBZQ%2Bh%2Bh5bL%2Bzf2Ux6oFEldPQefVOQJCIwepDMhwFiQ1nCpGTJozQ4wlFtvn4pFMF3TmIKyT7VlnawL8Rz4iFmjQ92RJNlP%2FX%2FBjNAjGErZjpL8NJfHW0qroaicHaIdVBm83J1io%2BxYw6%2BB7O%2FMNrXpMEGOqUBFTnyYELGXMV791tEVTo%2FJZzGqnlRWV6FVZmnc%2BiEU3phtbGlj6ZMV7x9QS3lvkyY2yTu7zACNNjvDX7TObPZXGNaNmGs8De7oW%2FMc0YRmIPYCPQ5O5ppOakUwFmrJCBIZ2h%2BXyORBEvybUk%2BpsIkq02rU65YwQSUR2LKHzUemwWqRKXm0hSTQ2qqEJDqzrX1FnwegXke0U1MYYqG3gmilc6B04aB&X-Amz-Signature=675eae33731134a12976416bb37f217cb0134d76a4a3c2be7bd821a4b1c5791f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YK6OCO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvu28D%2B0A6kjSUEKQTg14tFPrHRyICixrYy04ntCjcJAiEAhIf%2FcQKT0565%2BQJL7yQ6NYDnY5A8H4FsJbt9Jelj5A0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCTUlCwQWzVhm4ddaSrcA92%2B%2FmIBCdODGYvG2BUn4G94VM%2BlDkpocnl0FwFr2XN1Rkp9228oT%2Ftz%2FGIwki9n7Z%2B8THtAg1lfPyNxWOQhddfEcS%2FFaorjw5GecHri38OhfLH%2BQnX5FOKnRTkKw38oDfJODLpyAjGn9BbQK36ie9uyaw4r1jmV%2FBBRaXmhsepP9lqnQeU86KZUJGhfAAQ3X%2BeS5IE3w9PNLop%2FQnsppyDCnnIxpDV6iDOLhoh7m%2F9Vwbz001gT%2Bh%2BH3zG%2FaDRE5unaXYjVZnjqVJT1usvPeqZknG21RTVRO553Xh5Tv7KhZalNAgOj5LbdaruFxTA0O9td39Nqf%2FpZz2fIGmmfDhurzho6vzJNC3R1i%2FMunTsl7FLZrYSZW%2BSmjev%2BNs5DSxvOPUJ8GkqoeJ0FS3Ejl7ncHh%2BVh7Zt38EzyGDkRRLIJVQJWIkKJieIdbkOoGNR2OB24%2BRGSioVNid1UXwmC9B%2Br50ti9XnS4uaov77D3OBZQ%2Bh%2Bh5bL%2Bzf2Ux6oFEldPQefVOQJCIwepDMhwFiQ1nCpGTJozQ4wlFtvn4pFMF3TmIKyT7VlnawL8Rz4iFmjQ92RJNlP%2FX%2FBjNAjGErZjpL8NJfHW0qroaicHaIdVBm83J1io%2BxYw6%2BB7O%2FMNrXpMEGOqUBFTnyYELGXMV791tEVTo%2FJZzGqnlRWV6FVZmnc%2BiEU3phtbGlj6ZMV7x9QS3lvkyY2yTu7zACNNjvDX7TObPZXGNaNmGs8De7oW%2FMc0YRmIPYCPQ5O5ppOakUwFmrJCBIZ2h%2BXyORBEvybUk%2BpsIkq02rU65YwQSUR2LKHzUemwWqRKXm0hSTQ2qqEJDqzrX1FnwegXke0U1MYYqG3gmilc6B04aB&X-Amz-Signature=06eb675849479485c101ccdd6ab5ae17be6f4439df683165b78147417278f838&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2YK6OCO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvu28D%2B0A6kjSUEKQTg14tFPrHRyICixrYy04ntCjcJAiEAhIf%2FcQKT0565%2BQJL7yQ6NYDnY5A8H4FsJbt9Jelj5A0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCTUlCwQWzVhm4ddaSrcA92%2B%2FmIBCdODGYvG2BUn4G94VM%2BlDkpocnl0FwFr2XN1Rkp9228oT%2Ftz%2FGIwki9n7Z%2B8THtAg1lfPyNxWOQhddfEcS%2FFaorjw5GecHri38OhfLH%2BQnX5FOKnRTkKw38oDfJODLpyAjGn9BbQK36ie9uyaw4r1jmV%2FBBRaXmhsepP9lqnQeU86KZUJGhfAAQ3X%2BeS5IE3w9PNLop%2FQnsppyDCnnIxpDV6iDOLhoh7m%2F9Vwbz001gT%2Bh%2BH3zG%2FaDRE5unaXYjVZnjqVJT1usvPeqZknG21RTVRO553Xh5Tv7KhZalNAgOj5LbdaruFxTA0O9td39Nqf%2FpZz2fIGmmfDhurzho6vzJNC3R1i%2FMunTsl7FLZrYSZW%2BSmjev%2BNs5DSxvOPUJ8GkqoeJ0FS3Ejl7ncHh%2BVh7Zt38EzyGDkRRLIJVQJWIkKJieIdbkOoGNR2OB24%2BRGSioVNid1UXwmC9B%2Br50ti9XnS4uaov77D3OBZQ%2Bh%2Bh5bL%2Bzf2Ux6oFEldPQefVOQJCIwepDMhwFiQ1nCpGTJozQ4wlFtvn4pFMF3TmIKyT7VlnawL8Rz4iFmjQ92RJNlP%2FX%2FBjNAjGErZjpL8NJfHW0qroaicHaIdVBm83J1io%2BxYw6%2BB7O%2FMNrXpMEGOqUBFTnyYELGXMV791tEVTo%2FJZzGqnlRWV6FVZmnc%2BiEU3phtbGlj6ZMV7x9QS3lvkyY2yTu7zACNNjvDX7TObPZXGNaNmGs8De7oW%2FMc0YRmIPYCPQ5O5ppOakUwFmrJCBIZ2h%2BXyORBEvybUk%2BpsIkq02rU65YwQSUR2LKHzUemwWqRKXm0hSTQ2qqEJDqzrX1FnwegXke0U1MYYqG3gmilc6B04aB&X-Amz-Signature=59a90bbf8b17152b0ff2cb0c2448f166452f72cc4a70255d378788bfc06e73d2&X-Amz-SignedHeaders=host&x-id=GetObject)
