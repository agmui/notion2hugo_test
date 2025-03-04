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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXUQX6U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJiY8aO8bKNwayhRMkos4Xy6MQRLp7wAJh4tB7AWs5kAiEA4%2FPIJUixXTRNOsztPJvbjkFjiJrQaoOFs%2BSxyfWhBMwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFQJXi99edJvoPw1CrcAyhWLMurnuzUI963m67%2Bg6nmy8CNbgeNGduD3IUeVE5I7bI76%2FnRm%2FD%2B4j0lvp3%2BZakKCIHu95fRl2mCdePSNSQHnMzn6KPT%2F6YAz3iWFzNyLHMsDIpLGwWaa0IhUKNyl6RVUGEHYAZwtYvVtZDls7X05hVUG113PL%2BNjOmTTsX%2BdU1t%2F6KuZyrMtY7fnPtfvArzgnGPt8a%2B9lxaE2uKqicEVjmXZPf5v0AqQVaeTzwM1LEHOVNgKqcq2gIMlccbR7piE07WAOvutWIZUbrwB3g%2FfFyxjsvE0tihVbNZQaFtzCjnCUf59wihXUvStWKu9VeTXLfYpnYzBpg4b10mgTbGsVLnv%2BUKKWO%2Bm3Y42S8yXlTT0ZaPrpsVUDM1Yzqd7GhplJEzbXT08BzJe77S1VYeb3ETnBzVNOwLxjZX7dvRJCbf6OvZ9EHnhsCey21dXToCOGqwiZFmEzDSS9hTXbYVuFHFZGgL37V7j3QoLa6A1cpXA9edNswbqqqokeC6ko5hp%2BRy%2BSlKnWmSB5eKjw86N5k5jyh3h5RwBLDBskalw6U3DlV%2FITQXvqGFXG5p%2BRiyvwVa3yqFgmXL1Bziir%2BE%2FQtyRi4XNw2QdBXsY%2FhUKpHziEk9zIZDEBIgMO6Znb4GOqUBa2CWw06TeCGA2n%2BqNWkRhj3l%2BPRldDVL5BPoXucSTOcFK%2FJ3UgpsRdYYW0FDuXacCEut69%2F1NjVB6g6LE%2FXcM154qZcdHoZmNNRmte2WFBi287eXCvhvG7LmV5mfifGeZ3w6XhX%2FA15jV331mc0wUW6HXWNdOJ4h2up%2Bwq0z0M0BnXCvOpUaKumkBZ%2FjJZh%2B%2FiWnwMhh%2Bif4GuMcQ1LRrCdRM88B&X-Amz-Signature=349a7f3dfa0149a6efb22a5e6d149d1fe2c6696ee3ff3904cf3018b19db56706&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXUQX6U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJiY8aO8bKNwayhRMkos4Xy6MQRLp7wAJh4tB7AWs5kAiEA4%2FPIJUixXTRNOsztPJvbjkFjiJrQaoOFs%2BSxyfWhBMwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFQJXi99edJvoPw1CrcAyhWLMurnuzUI963m67%2Bg6nmy8CNbgeNGduD3IUeVE5I7bI76%2FnRm%2FD%2B4j0lvp3%2BZakKCIHu95fRl2mCdePSNSQHnMzn6KPT%2F6YAz3iWFzNyLHMsDIpLGwWaa0IhUKNyl6RVUGEHYAZwtYvVtZDls7X05hVUG113PL%2BNjOmTTsX%2BdU1t%2F6KuZyrMtY7fnPtfvArzgnGPt8a%2B9lxaE2uKqicEVjmXZPf5v0AqQVaeTzwM1LEHOVNgKqcq2gIMlccbR7piE07WAOvutWIZUbrwB3g%2FfFyxjsvE0tihVbNZQaFtzCjnCUf59wihXUvStWKu9VeTXLfYpnYzBpg4b10mgTbGsVLnv%2BUKKWO%2Bm3Y42S8yXlTT0ZaPrpsVUDM1Yzqd7GhplJEzbXT08BzJe77S1VYeb3ETnBzVNOwLxjZX7dvRJCbf6OvZ9EHnhsCey21dXToCOGqwiZFmEzDSS9hTXbYVuFHFZGgL37V7j3QoLa6A1cpXA9edNswbqqqokeC6ko5hp%2BRy%2BSlKnWmSB5eKjw86N5k5jyh3h5RwBLDBskalw6U3DlV%2FITQXvqGFXG5p%2BRiyvwVa3yqFgmXL1Bziir%2BE%2FQtyRi4XNw2QdBXsY%2FhUKpHziEk9zIZDEBIgMO6Znb4GOqUBa2CWw06TeCGA2n%2BqNWkRhj3l%2BPRldDVL5BPoXucSTOcFK%2FJ3UgpsRdYYW0FDuXacCEut69%2F1NjVB6g6LE%2FXcM154qZcdHoZmNNRmte2WFBi287eXCvhvG7LmV5mfifGeZ3w6XhX%2FA15jV331mc0wUW6HXWNdOJ4h2up%2Bwq0z0M0BnXCvOpUaKumkBZ%2FjJZh%2B%2FiWnwMhh%2Bif4GuMcQ1LRrCdRM88B&X-Amz-Signature=644388867e5fc84533a0e545732df276b123e61de341f0d66e0ce149dfb43eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXUQX6U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJiY8aO8bKNwayhRMkos4Xy6MQRLp7wAJh4tB7AWs5kAiEA4%2FPIJUixXTRNOsztPJvbjkFjiJrQaoOFs%2BSxyfWhBMwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFQJXi99edJvoPw1CrcAyhWLMurnuzUI963m67%2Bg6nmy8CNbgeNGduD3IUeVE5I7bI76%2FnRm%2FD%2B4j0lvp3%2BZakKCIHu95fRl2mCdePSNSQHnMzn6KPT%2F6YAz3iWFzNyLHMsDIpLGwWaa0IhUKNyl6RVUGEHYAZwtYvVtZDls7X05hVUG113PL%2BNjOmTTsX%2BdU1t%2F6KuZyrMtY7fnPtfvArzgnGPt8a%2B9lxaE2uKqicEVjmXZPf5v0AqQVaeTzwM1LEHOVNgKqcq2gIMlccbR7piE07WAOvutWIZUbrwB3g%2FfFyxjsvE0tihVbNZQaFtzCjnCUf59wihXUvStWKu9VeTXLfYpnYzBpg4b10mgTbGsVLnv%2BUKKWO%2Bm3Y42S8yXlTT0ZaPrpsVUDM1Yzqd7GhplJEzbXT08BzJe77S1VYeb3ETnBzVNOwLxjZX7dvRJCbf6OvZ9EHnhsCey21dXToCOGqwiZFmEzDSS9hTXbYVuFHFZGgL37V7j3QoLa6A1cpXA9edNswbqqqokeC6ko5hp%2BRy%2BSlKnWmSB5eKjw86N5k5jyh3h5RwBLDBskalw6U3DlV%2FITQXvqGFXG5p%2BRiyvwVa3yqFgmXL1Bziir%2BE%2FQtyRi4XNw2QdBXsY%2FhUKpHziEk9zIZDEBIgMO6Znb4GOqUBa2CWw06TeCGA2n%2BqNWkRhj3l%2BPRldDVL5BPoXucSTOcFK%2FJ3UgpsRdYYW0FDuXacCEut69%2F1NjVB6g6LE%2FXcM154qZcdHoZmNNRmte2WFBi287eXCvhvG7LmV5mfifGeZ3w6XhX%2FA15jV331mc0wUW6HXWNdOJ4h2up%2Bwq0z0M0BnXCvOpUaKumkBZ%2FjJZh%2B%2FiWnwMhh%2Bif4GuMcQ1LRrCdRM88B&X-Amz-Signature=c84d3d610c8dfa90b256e42afebd936266160ff13dca6beae7766a95d70dbb73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXUQX6U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJiY8aO8bKNwayhRMkos4Xy6MQRLp7wAJh4tB7AWs5kAiEA4%2FPIJUixXTRNOsztPJvbjkFjiJrQaoOFs%2BSxyfWhBMwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFQJXi99edJvoPw1CrcAyhWLMurnuzUI963m67%2Bg6nmy8CNbgeNGduD3IUeVE5I7bI76%2FnRm%2FD%2B4j0lvp3%2BZakKCIHu95fRl2mCdePSNSQHnMzn6KPT%2F6YAz3iWFzNyLHMsDIpLGwWaa0IhUKNyl6RVUGEHYAZwtYvVtZDls7X05hVUG113PL%2BNjOmTTsX%2BdU1t%2F6KuZyrMtY7fnPtfvArzgnGPt8a%2B9lxaE2uKqicEVjmXZPf5v0AqQVaeTzwM1LEHOVNgKqcq2gIMlccbR7piE07WAOvutWIZUbrwB3g%2FfFyxjsvE0tihVbNZQaFtzCjnCUf59wihXUvStWKu9VeTXLfYpnYzBpg4b10mgTbGsVLnv%2BUKKWO%2Bm3Y42S8yXlTT0ZaPrpsVUDM1Yzqd7GhplJEzbXT08BzJe77S1VYeb3ETnBzVNOwLxjZX7dvRJCbf6OvZ9EHnhsCey21dXToCOGqwiZFmEzDSS9hTXbYVuFHFZGgL37V7j3QoLa6A1cpXA9edNswbqqqokeC6ko5hp%2BRy%2BSlKnWmSB5eKjw86N5k5jyh3h5RwBLDBskalw6U3DlV%2FITQXvqGFXG5p%2BRiyvwVa3yqFgmXL1Bziir%2BE%2FQtyRi4XNw2QdBXsY%2FhUKpHziEk9zIZDEBIgMO6Znb4GOqUBa2CWw06TeCGA2n%2BqNWkRhj3l%2BPRldDVL5BPoXucSTOcFK%2FJ3UgpsRdYYW0FDuXacCEut69%2F1NjVB6g6LE%2FXcM154qZcdHoZmNNRmte2WFBi287eXCvhvG7LmV5mfifGeZ3w6XhX%2FA15jV331mc0wUW6HXWNdOJ4h2up%2Bwq0z0M0BnXCvOpUaKumkBZ%2FjJZh%2B%2FiWnwMhh%2Bif4GuMcQ1LRrCdRM88B&X-Amz-Signature=9be862cd9f7c89493839b6c269eeac72e555b602e91a9bd428eb9989495113d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXUQX6U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJiY8aO8bKNwayhRMkos4Xy6MQRLp7wAJh4tB7AWs5kAiEA4%2FPIJUixXTRNOsztPJvbjkFjiJrQaoOFs%2BSxyfWhBMwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFQJXi99edJvoPw1CrcAyhWLMurnuzUI963m67%2Bg6nmy8CNbgeNGduD3IUeVE5I7bI76%2FnRm%2FD%2B4j0lvp3%2BZakKCIHu95fRl2mCdePSNSQHnMzn6KPT%2F6YAz3iWFzNyLHMsDIpLGwWaa0IhUKNyl6RVUGEHYAZwtYvVtZDls7X05hVUG113PL%2BNjOmTTsX%2BdU1t%2F6KuZyrMtY7fnPtfvArzgnGPt8a%2B9lxaE2uKqicEVjmXZPf5v0AqQVaeTzwM1LEHOVNgKqcq2gIMlccbR7piE07WAOvutWIZUbrwB3g%2FfFyxjsvE0tihVbNZQaFtzCjnCUf59wihXUvStWKu9VeTXLfYpnYzBpg4b10mgTbGsVLnv%2BUKKWO%2Bm3Y42S8yXlTT0ZaPrpsVUDM1Yzqd7GhplJEzbXT08BzJe77S1VYeb3ETnBzVNOwLxjZX7dvRJCbf6OvZ9EHnhsCey21dXToCOGqwiZFmEzDSS9hTXbYVuFHFZGgL37V7j3QoLa6A1cpXA9edNswbqqqokeC6ko5hp%2BRy%2BSlKnWmSB5eKjw86N5k5jyh3h5RwBLDBskalw6U3DlV%2FITQXvqGFXG5p%2BRiyvwVa3yqFgmXL1Bziir%2BE%2FQtyRi4XNw2QdBXsY%2FhUKpHziEk9zIZDEBIgMO6Znb4GOqUBa2CWw06TeCGA2n%2BqNWkRhj3l%2BPRldDVL5BPoXucSTOcFK%2FJ3UgpsRdYYW0FDuXacCEut69%2F1NjVB6g6LE%2FXcM154qZcdHoZmNNRmte2WFBi287eXCvhvG7LmV5mfifGeZ3w6XhX%2FA15jV331mc0wUW6HXWNdOJ4h2up%2Bwq0z0M0BnXCvOpUaKumkBZ%2FjJZh%2B%2FiWnwMhh%2Bif4GuMcQ1LRrCdRM88B&X-Amz-Signature=cac6f425fe265fef95827c2adbcf7f5276a372795947905bded8cc7ca0144f75&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXUQX6U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T200917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJiY8aO8bKNwayhRMkos4Xy6MQRLp7wAJh4tB7AWs5kAiEA4%2FPIJUixXTRNOsztPJvbjkFjiJrQaoOFs%2BSxyfWhBMwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPFQJXi99edJvoPw1CrcAyhWLMurnuzUI963m67%2Bg6nmy8CNbgeNGduD3IUeVE5I7bI76%2FnRm%2FD%2B4j0lvp3%2BZakKCIHu95fRl2mCdePSNSQHnMzn6KPT%2F6YAz3iWFzNyLHMsDIpLGwWaa0IhUKNyl6RVUGEHYAZwtYvVtZDls7X05hVUG113PL%2BNjOmTTsX%2BdU1t%2F6KuZyrMtY7fnPtfvArzgnGPt8a%2B9lxaE2uKqicEVjmXZPf5v0AqQVaeTzwM1LEHOVNgKqcq2gIMlccbR7piE07WAOvutWIZUbrwB3g%2FfFyxjsvE0tihVbNZQaFtzCjnCUf59wihXUvStWKu9VeTXLfYpnYzBpg4b10mgTbGsVLnv%2BUKKWO%2Bm3Y42S8yXlTT0ZaPrpsVUDM1Yzqd7GhplJEzbXT08BzJe77S1VYeb3ETnBzVNOwLxjZX7dvRJCbf6OvZ9EHnhsCey21dXToCOGqwiZFmEzDSS9hTXbYVuFHFZGgL37V7j3QoLa6A1cpXA9edNswbqqqokeC6ko5hp%2BRy%2BSlKnWmSB5eKjw86N5k5jyh3h5RwBLDBskalw6U3DlV%2FITQXvqGFXG5p%2BRiyvwVa3yqFgmXL1Bziir%2BE%2FQtyRi4XNw2QdBXsY%2FhUKpHziEk9zIZDEBIgMO6Znb4GOqUBa2CWw06TeCGA2n%2BqNWkRhj3l%2BPRldDVL5BPoXucSTOcFK%2FJ3UgpsRdYYW0FDuXacCEut69%2F1NjVB6g6LE%2FXcM154qZcdHoZmNNRmte2WFBi287eXCvhvG7LmV5mfifGeZ3w6XhX%2FA15jV331mc0wUW6HXWNdOJ4h2up%2Bwq0z0M0BnXCvOpUaKumkBZ%2FjJZh%2B%2FiWnwMhh%2Bif4GuMcQ1LRrCdRM88B&X-Amz-Signature=b081501cb7a78e5f11fce46e4041337f62927226cfe641505574687446bb6e13&X-Amz-SignedHeaders=host&x-id=GetObject)
