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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCU2RHCR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDL4hijNUasROUTj0j3Gq035wqDJwVUFjAmvI7%2FvoxOugIhAI3hGEB9LoTtML7NhqSCDs%2B4SqNDAvClmbU82v9eYusUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkK97mlEhjxlg0RPkq3APFnVERdTarpVy67AezFKkRHlG5jLD1uMIRJZz2CadUzy1dSUPiwzj0xNqr92gU7IDB95eLmxAVTDJrpeGzWeG5OPb%2Ff2VbREDSFSDqUChCTzHTW5QcR9Mxk0VHn24aUBPc70YrBUyxK1FWutPxexnEsKjpX0bg%2B8sxyMEfUSpb45SeQ8xuZEZqmiseE42nhFQjwM4CHknAICe26CU2Q8KshWKoEq6Z2s%2FJgcAgx86FCYqt1%2Fq7A2zlMlktPcFMq1tIZXDWR02zb0H6%2BBKMMohMjEObboQX%2BM9YkEvceCpr%2BPV3SiPKzBT0SBr4DcsLUaGPBVuvc8hYcZ3BM0biCF6Nmtwb3USaBXjYeSEkUQZTiNchxgAeofcHxXePj%2BwUqjleqlCBER3MTupnIsuNjd%2B0CgMhp5JJ%2B8%2BpgMPRQNh34fQnLxt%2FWDPIT%2FN5oSuYd8YQESUMVF0fT6WFhZSlDuWE%2FCCMtncPmLt7mPpYxEMCK%2FD6DM%2BdmxqlqkRvrv5ER0gJy8ltD%2BSPmCujGscoc690LIb7vl4caU3YVwabhUEJYIYrGqCG6HETkJA9iw%2FHvy%2BDTKadzOBkmWnn58bFRuPcW3ZWtXVLEoDHU3thIxwntLNFLJ7AiZXXRA7bUzCAgvrBBjqkAWF%2FmGy6eeKUMs%2Bs%2Bt4Xcl3g%2F98x%2F148uiueMmtOhuo9ZXN3yF9FNQifRcZ4Hb60MoO5z7n%2Fs31obFoZKZlUB8ixRHLLfhYrjGDyaMOcN619GT%2BVRz2xN0l9UX%2BuZMre%2BzFnRgDmUY8h9jU5GIQabXhH02RyLseFmcVtGvF2nGiAdbWggiIOIrSjtjMVsOLLILOfdDzOhpxIAZjErTA7DjCGyBaw&X-Amz-Signature=d03eff24ca7cbba3b45b4b99368ec1ca967df8f359e318579e65e0336ff16b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCU2RHCR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDL4hijNUasROUTj0j3Gq035wqDJwVUFjAmvI7%2FvoxOugIhAI3hGEB9LoTtML7NhqSCDs%2B4SqNDAvClmbU82v9eYusUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkK97mlEhjxlg0RPkq3APFnVERdTarpVy67AezFKkRHlG5jLD1uMIRJZz2CadUzy1dSUPiwzj0xNqr92gU7IDB95eLmxAVTDJrpeGzWeG5OPb%2Ff2VbREDSFSDqUChCTzHTW5QcR9Mxk0VHn24aUBPc70YrBUyxK1FWutPxexnEsKjpX0bg%2B8sxyMEfUSpb45SeQ8xuZEZqmiseE42nhFQjwM4CHknAICe26CU2Q8KshWKoEq6Z2s%2FJgcAgx86FCYqt1%2Fq7A2zlMlktPcFMq1tIZXDWR02zb0H6%2BBKMMohMjEObboQX%2BM9YkEvceCpr%2BPV3SiPKzBT0SBr4DcsLUaGPBVuvc8hYcZ3BM0biCF6Nmtwb3USaBXjYeSEkUQZTiNchxgAeofcHxXePj%2BwUqjleqlCBER3MTupnIsuNjd%2B0CgMhp5JJ%2B8%2BpgMPRQNh34fQnLxt%2FWDPIT%2FN5oSuYd8YQESUMVF0fT6WFhZSlDuWE%2FCCMtncPmLt7mPpYxEMCK%2FD6DM%2BdmxqlqkRvrv5ER0gJy8ltD%2BSPmCujGscoc690LIb7vl4caU3YVwabhUEJYIYrGqCG6HETkJA9iw%2FHvy%2BDTKadzOBkmWnn58bFRuPcW3ZWtXVLEoDHU3thIxwntLNFLJ7AiZXXRA7bUzCAgvrBBjqkAWF%2FmGy6eeKUMs%2Bs%2Bt4Xcl3g%2F98x%2F148uiueMmtOhuo9ZXN3yF9FNQifRcZ4Hb60MoO5z7n%2Fs31obFoZKZlUB8ixRHLLfhYrjGDyaMOcN619GT%2BVRz2xN0l9UX%2BuZMre%2BzFnRgDmUY8h9jU5GIQabXhH02RyLseFmcVtGvF2nGiAdbWggiIOIrSjtjMVsOLLILOfdDzOhpxIAZjErTA7DjCGyBaw&X-Amz-Signature=afc85c3d1819d8f557f580bf22f89341a323d283aaddc2c43bb8228ed8ae9d03&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCU2RHCR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDL4hijNUasROUTj0j3Gq035wqDJwVUFjAmvI7%2FvoxOugIhAI3hGEB9LoTtML7NhqSCDs%2B4SqNDAvClmbU82v9eYusUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkK97mlEhjxlg0RPkq3APFnVERdTarpVy67AezFKkRHlG5jLD1uMIRJZz2CadUzy1dSUPiwzj0xNqr92gU7IDB95eLmxAVTDJrpeGzWeG5OPb%2Ff2VbREDSFSDqUChCTzHTW5QcR9Mxk0VHn24aUBPc70YrBUyxK1FWutPxexnEsKjpX0bg%2B8sxyMEfUSpb45SeQ8xuZEZqmiseE42nhFQjwM4CHknAICe26CU2Q8KshWKoEq6Z2s%2FJgcAgx86FCYqt1%2Fq7A2zlMlktPcFMq1tIZXDWR02zb0H6%2BBKMMohMjEObboQX%2BM9YkEvceCpr%2BPV3SiPKzBT0SBr4DcsLUaGPBVuvc8hYcZ3BM0biCF6Nmtwb3USaBXjYeSEkUQZTiNchxgAeofcHxXePj%2BwUqjleqlCBER3MTupnIsuNjd%2B0CgMhp5JJ%2B8%2BpgMPRQNh34fQnLxt%2FWDPIT%2FN5oSuYd8YQESUMVF0fT6WFhZSlDuWE%2FCCMtncPmLt7mPpYxEMCK%2FD6DM%2BdmxqlqkRvrv5ER0gJy8ltD%2BSPmCujGscoc690LIb7vl4caU3YVwabhUEJYIYrGqCG6HETkJA9iw%2FHvy%2BDTKadzOBkmWnn58bFRuPcW3ZWtXVLEoDHU3thIxwntLNFLJ7AiZXXRA7bUzCAgvrBBjqkAWF%2FmGy6eeKUMs%2Bs%2Bt4Xcl3g%2F98x%2F148uiueMmtOhuo9ZXN3yF9FNQifRcZ4Hb60MoO5z7n%2Fs31obFoZKZlUB8ixRHLLfhYrjGDyaMOcN619GT%2BVRz2xN0l9UX%2BuZMre%2BzFnRgDmUY8h9jU5GIQabXhH02RyLseFmcVtGvF2nGiAdbWggiIOIrSjtjMVsOLLILOfdDzOhpxIAZjErTA7DjCGyBaw&X-Amz-Signature=cfe718d5d365cb463cc3c82c75fc10fffc954c00c51c612f816f0218dbe421f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCU2RHCR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDL4hijNUasROUTj0j3Gq035wqDJwVUFjAmvI7%2FvoxOugIhAI3hGEB9LoTtML7NhqSCDs%2B4SqNDAvClmbU82v9eYusUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkK97mlEhjxlg0RPkq3APFnVERdTarpVy67AezFKkRHlG5jLD1uMIRJZz2CadUzy1dSUPiwzj0xNqr92gU7IDB95eLmxAVTDJrpeGzWeG5OPb%2Ff2VbREDSFSDqUChCTzHTW5QcR9Mxk0VHn24aUBPc70YrBUyxK1FWutPxexnEsKjpX0bg%2B8sxyMEfUSpb45SeQ8xuZEZqmiseE42nhFQjwM4CHknAICe26CU2Q8KshWKoEq6Z2s%2FJgcAgx86FCYqt1%2Fq7A2zlMlktPcFMq1tIZXDWR02zb0H6%2BBKMMohMjEObboQX%2BM9YkEvceCpr%2BPV3SiPKzBT0SBr4DcsLUaGPBVuvc8hYcZ3BM0biCF6Nmtwb3USaBXjYeSEkUQZTiNchxgAeofcHxXePj%2BwUqjleqlCBER3MTupnIsuNjd%2B0CgMhp5JJ%2B8%2BpgMPRQNh34fQnLxt%2FWDPIT%2FN5oSuYd8YQESUMVF0fT6WFhZSlDuWE%2FCCMtncPmLt7mPpYxEMCK%2FD6DM%2BdmxqlqkRvrv5ER0gJy8ltD%2BSPmCujGscoc690LIb7vl4caU3YVwabhUEJYIYrGqCG6HETkJA9iw%2FHvy%2BDTKadzOBkmWnn58bFRuPcW3ZWtXVLEoDHU3thIxwntLNFLJ7AiZXXRA7bUzCAgvrBBjqkAWF%2FmGy6eeKUMs%2Bs%2Bt4Xcl3g%2F98x%2F148uiueMmtOhuo9ZXN3yF9FNQifRcZ4Hb60MoO5z7n%2Fs31obFoZKZlUB8ixRHLLfhYrjGDyaMOcN619GT%2BVRz2xN0l9UX%2BuZMre%2BzFnRgDmUY8h9jU5GIQabXhH02RyLseFmcVtGvF2nGiAdbWggiIOIrSjtjMVsOLLILOfdDzOhpxIAZjErTA7DjCGyBaw&X-Amz-Signature=eec4228144e230686af9f9f2130476e731eb13e9bfbe781f9cfdffe525e706fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCU2RHCR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDL4hijNUasROUTj0j3Gq035wqDJwVUFjAmvI7%2FvoxOugIhAI3hGEB9LoTtML7NhqSCDs%2B4SqNDAvClmbU82v9eYusUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkK97mlEhjxlg0RPkq3APFnVERdTarpVy67AezFKkRHlG5jLD1uMIRJZz2CadUzy1dSUPiwzj0xNqr92gU7IDB95eLmxAVTDJrpeGzWeG5OPb%2Ff2VbREDSFSDqUChCTzHTW5QcR9Mxk0VHn24aUBPc70YrBUyxK1FWutPxexnEsKjpX0bg%2B8sxyMEfUSpb45SeQ8xuZEZqmiseE42nhFQjwM4CHknAICe26CU2Q8KshWKoEq6Z2s%2FJgcAgx86FCYqt1%2Fq7A2zlMlktPcFMq1tIZXDWR02zb0H6%2BBKMMohMjEObboQX%2BM9YkEvceCpr%2BPV3SiPKzBT0SBr4DcsLUaGPBVuvc8hYcZ3BM0biCF6Nmtwb3USaBXjYeSEkUQZTiNchxgAeofcHxXePj%2BwUqjleqlCBER3MTupnIsuNjd%2B0CgMhp5JJ%2B8%2BpgMPRQNh34fQnLxt%2FWDPIT%2FN5oSuYd8YQESUMVF0fT6WFhZSlDuWE%2FCCMtncPmLt7mPpYxEMCK%2FD6DM%2BdmxqlqkRvrv5ER0gJy8ltD%2BSPmCujGscoc690LIb7vl4caU3YVwabhUEJYIYrGqCG6HETkJA9iw%2FHvy%2BDTKadzOBkmWnn58bFRuPcW3ZWtXVLEoDHU3thIxwntLNFLJ7AiZXXRA7bUzCAgvrBBjqkAWF%2FmGy6eeKUMs%2Bs%2Bt4Xcl3g%2F98x%2F148uiueMmtOhuo9ZXN3yF9FNQifRcZ4Hb60MoO5z7n%2Fs31obFoZKZlUB8ixRHLLfhYrjGDyaMOcN619GT%2BVRz2xN0l9UX%2BuZMre%2BzFnRgDmUY8h9jU5GIQabXhH02RyLseFmcVtGvF2nGiAdbWggiIOIrSjtjMVsOLLILOfdDzOhpxIAZjErTA7DjCGyBaw&X-Amz-Signature=3f40698f208c9fa56c965d5a4d7588bd99f3d6b03f58f9840e2286c32e415d30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCU2RHCR%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDL4hijNUasROUTj0j3Gq035wqDJwVUFjAmvI7%2FvoxOugIhAI3hGEB9LoTtML7NhqSCDs%2B4SqNDAvClmbU82v9eYusUKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkK97mlEhjxlg0RPkq3APFnVERdTarpVy67AezFKkRHlG5jLD1uMIRJZz2CadUzy1dSUPiwzj0xNqr92gU7IDB95eLmxAVTDJrpeGzWeG5OPb%2Ff2VbREDSFSDqUChCTzHTW5QcR9Mxk0VHn24aUBPc70YrBUyxK1FWutPxexnEsKjpX0bg%2B8sxyMEfUSpb45SeQ8xuZEZqmiseE42nhFQjwM4CHknAICe26CU2Q8KshWKoEq6Z2s%2FJgcAgx86FCYqt1%2Fq7A2zlMlktPcFMq1tIZXDWR02zb0H6%2BBKMMohMjEObboQX%2BM9YkEvceCpr%2BPV3SiPKzBT0SBr4DcsLUaGPBVuvc8hYcZ3BM0biCF6Nmtwb3USaBXjYeSEkUQZTiNchxgAeofcHxXePj%2BwUqjleqlCBER3MTupnIsuNjd%2B0CgMhp5JJ%2B8%2BpgMPRQNh34fQnLxt%2FWDPIT%2FN5oSuYd8YQESUMVF0fT6WFhZSlDuWE%2FCCMtncPmLt7mPpYxEMCK%2FD6DM%2BdmxqlqkRvrv5ER0gJy8ltD%2BSPmCujGscoc690LIb7vl4caU3YVwabhUEJYIYrGqCG6HETkJA9iw%2FHvy%2BDTKadzOBkmWnn58bFRuPcW3ZWtXVLEoDHU3thIxwntLNFLJ7AiZXXRA7bUzCAgvrBBjqkAWF%2FmGy6eeKUMs%2Bs%2Bt4Xcl3g%2F98x%2F148uiueMmtOhuo9ZXN3yF9FNQifRcZ4Hb60MoO5z7n%2Fs31obFoZKZlUB8ixRHLLfhYrjGDyaMOcN619GT%2BVRz2xN0l9UX%2BuZMre%2BzFnRgDmUY8h9jU5GIQabXhH02RyLseFmcVtGvF2nGiAdbWggiIOIrSjtjMVsOLLILOfdDzOhpxIAZjErTA7DjCGyBaw&X-Amz-Signature=4d833df603caea58c3d344bb6dcc7a0288fe90ef08f2f15382112b7cf99a51c3&X-Amz-SignedHeaders=host&x-id=GetObject)
