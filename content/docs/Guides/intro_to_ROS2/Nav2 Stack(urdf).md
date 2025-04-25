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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKGAJOR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKunRfr8PR4AsbL4LIb1aZ8K0wXMvVE5hiu38tNxWKFQIgUseE6Bj7YLU1xurEYdPq7hh1BVBjUksF6IheiHv8hrEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAiRPEs%2BUQxUCFcumircA4Fx602Qm4p6ue2nZkfn9pA1rsgGwEuSQxfqLjRf1FpdHfuCzRlDdSIfgB6M6GAlb79c%2BltMyrQlcH7NL%2FPmPCPU1rc9zbkUC%2FOvaxqrLCUv5ZvYsmuQZnh3yGLOpok1WPpBUB2MzzPUfIkXl4z8JCIP2hqDb4PIIupeVttyqYxhcXI03LORKpHjt8r%2B%2B7h88JZsOXy8o7wLnzkmgrhzI273oBslEUjJl6c7pCVY57%2BQQjEuoXSlHLGNv%2Bh8nutTZb9juDQKmSKqaEyvlvsUfcxCsQmnY7%2FNQdWBoy0P9O1Obs77GS3JW%2ByLipnYwFkpqq2N2NZ1RYIKaTdFlPfuYwG90MrlE0RtI7YPZiL8LnXPMC3XzU5tRwqTyM0iw%2FTxIO60NqhaIiKIq1pCQnynVJRx0NBtT%2FQr05sh7zOB0cUEtzZ1qnt%2Bst3fABcvP38vJNebvbFG%2BF8nhCgDq4N37Z1cK0v9%2F4ksJbKkY524wLTOH2Ds5%2BpO3HMp0%2BT84evJXR9CKoTXuOMm5LuXao7DK89IDQ05XVsGvQVgWo81ZaHOBVD1o4WvZ0lKTcPlP79R2P4OK6CeJM7p4z84esDtzT2CE%2FGkGT07Xkhk0C3DqxogIm%2F53x9vDpYP3wCEMPa0rsAGOqUBmfq5B0F234INI4QzYyg6VH%2BxSTaVe7IhkllJsBJB5P6cS4OXwzFOWBhPF0bgGn2SSm5xGRU%2BiGsY0HD5Nytv7IMGCiAb62JTryZXw2q9yAQY6G%2BlnJFs0tGQknGHpID%2BkqHAgJRjTy5hPrL3c0RK1EeC%2Fde3S%2B1m4aObCOLU8sJb2AuBwjX%2BiGUklg7oytWbrDhy4PP2RRB%2Bdf1YxKREu7WocNUJ&X-Amz-Signature=2963341105072b9415ae39f8e4bfd12c9354c1e5fe877a541875ebcd6e147a36&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKGAJOR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKunRfr8PR4AsbL4LIb1aZ8K0wXMvVE5hiu38tNxWKFQIgUseE6Bj7YLU1xurEYdPq7hh1BVBjUksF6IheiHv8hrEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAiRPEs%2BUQxUCFcumircA4Fx602Qm4p6ue2nZkfn9pA1rsgGwEuSQxfqLjRf1FpdHfuCzRlDdSIfgB6M6GAlb79c%2BltMyrQlcH7NL%2FPmPCPU1rc9zbkUC%2FOvaxqrLCUv5ZvYsmuQZnh3yGLOpok1WPpBUB2MzzPUfIkXl4z8JCIP2hqDb4PIIupeVttyqYxhcXI03LORKpHjt8r%2B%2B7h88JZsOXy8o7wLnzkmgrhzI273oBslEUjJl6c7pCVY57%2BQQjEuoXSlHLGNv%2Bh8nutTZb9juDQKmSKqaEyvlvsUfcxCsQmnY7%2FNQdWBoy0P9O1Obs77GS3JW%2ByLipnYwFkpqq2N2NZ1RYIKaTdFlPfuYwG90MrlE0RtI7YPZiL8LnXPMC3XzU5tRwqTyM0iw%2FTxIO60NqhaIiKIq1pCQnynVJRx0NBtT%2FQr05sh7zOB0cUEtzZ1qnt%2Bst3fABcvP38vJNebvbFG%2BF8nhCgDq4N37Z1cK0v9%2F4ksJbKkY524wLTOH2Ds5%2BpO3HMp0%2BT84evJXR9CKoTXuOMm5LuXao7DK89IDQ05XVsGvQVgWo81ZaHOBVD1o4WvZ0lKTcPlP79R2P4OK6CeJM7p4z84esDtzT2CE%2FGkGT07Xkhk0C3DqxogIm%2F53x9vDpYP3wCEMPa0rsAGOqUBmfq5B0F234INI4QzYyg6VH%2BxSTaVe7IhkllJsBJB5P6cS4OXwzFOWBhPF0bgGn2SSm5xGRU%2BiGsY0HD5Nytv7IMGCiAb62JTryZXw2q9yAQY6G%2BlnJFs0tGQknGHpID%2BkqHAgJRjTy5hPrL3c0RK1EeC%2Fde3S%2B1m4aObCOLU8sJb2AuBwjX%2BiGUklg7oytWbrDhy4PP2RRB%2Bdf1YxKREu7WocNUJ&X-Amz-Signature=65f85bce2aa5862a38531b26cade6fc7d97ea07f149ea0d13f6f438d4b84fdcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKGAJOR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKunRfr8PR4AsbL4LIb1aZ8K0wXMvVE5hiu38tNxWKFQIgUseE6Bj7YLU1xurEYdPq7hh1BVBjUksF6IheiHv8hrEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAiRPEs%2BUQxUCFcumircA4Fx602Qm4p6ue2nZkfn9pA1rsgGwEuSQxfqLjRf1FpdHfuCzRlDdSIfgB6M6GAlb79c%2BltMyrQlcH7NL%2FPmPCPU1rc9zbkUC%2FOvaxqrLCUv5ZvYsmuQZnh3yGLOpok1WPpBUB2MzzPUfIkXl4z8JCIP2hqDb4PIIupeVttyqYxhcXI03LORKpHjt8r%2B%2B7h88JZsOXy8o7wLnzkmgrhzI273oBslEUjJl6c7pCVY57%2BQQjEuoXSlHLGNv%2Bh8nutTZb9juDQKmSKqaEyvlvsUfcxCsQmnY7%2FNQdWBoy0P9O1Obs77GS3JW%2ByLipnYwFkpqq2N2NZ1RYIKaTdFlPfuYwG90MrlE0RtI7YPZiL8LnXPMC3XzU5tRwqTyM0iw%2FTxIO60NqhaIiKIq1pCQnynVJRx0NBtT%2FQr05sh7zOB0cUEtzZ1qnt%2Bst3fABcvP38vJNebvbFG%2BF8nhCgDq4N37Z1cK0v9%2F4ksJbKkY524wLTOH2Ds5%2BpO3HMp0%2BT84evJXR9CKoTXuOMm5LuXao7DK89IDQ05XVsGvQVgWo81ZaHOBVD1o4WvZ0lKTcPlP79R2P4OK6CeJM7p4z84esDtzT2CE%2FGkGT07Xkhk0C3DqxogIm%2F53x9vDpYP3wCEMPa0rsAGOqUBmfq5B0F234INI4QzYyg6VH%2BxSTaVe7IhkllJsBJB5P6cS4OXwzFOWBhPF0bgGn2SSm5xGRU%2BiGsY0HD5Nytv7IMGCiAb62JTryZXw2q9yAQY6G%2BlnJFs0tGQknGHpID%2BkqHAgJRjTy5hPrL3c0RK1EeC%2Fde3S%2B1m4aObCOLU8sJb2AuBwjX%2BiGUklg7oytWbrDhy4PP2RRB%2Bdf1YxKREu7WocNUJ&X-Amz-Signature=3fdd7ae0ba6a4f99926594ed79612231a02d8f266498a91e64e2be19074d45dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKGAJOR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKunRfr8PR4AsbL4LIb1aZ8K0wXMvVE5hiu38tNxWKFQIgUseE6Bj7YLU1xurEYdPq7hh1BVBjUksF6IheiHv8hrEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAiRPEs%2BUQxUCFcumircA4Fx602Qm4p6ue2nZkfn9pA1rsgGwEuSQxfqLjRf1FpdHfuCzRlDdSIfgB6M6GAlb79c%2BltMyrQlcH7NL%2FPmPCPU1rc9zbkUC%2FOvaxqrLCUv5ZvYsmuQZnh3yGLOpok1WPpBUB2MzzPUfIkXl4z8JCIP2hqDb4PIIupeVttyqYxhcXI03LORKpHjt8r%2B%2B7h88JZsOXy8o7wLnzkmgrhzI273oBslEUjJl6c7pCVY57%2BQQjEuoXSlHLGNv%2Bh8nutTZb9juDQKmSKqaEyvlvsUfcxCsQmnY7%2FNQdWBoy0P9O1Obs77GS3JW%2ByLipnYwFkpqq2N2NZ1RYIKaTdFlPfuYwG90MrlE0RtI7YPZiL8LnXPMC3XzU5tRwqTyM0iw%2FTxIO60NqhaIiKIq1pCQnynVJRx0NBtT%2FQr05sh7zOB0cUEtzZ1qnt%2Bst3fABcvP38vJNebvbFG%2BF8nhCgDq4N37Z1cK0v9%2F4ksJbKkY524wLTOH2Ds5%2BpO3HMp0%2BT84evJXR9CKoTXuOMm5LuXao7DK89IDQ05XVsGvQVgWo81ZaHOBVD1o4WvZ0lKTcPlP79R2P4OK6CeJM7p4z84esDtzT2CE%2FGkGT07Xkhk0C3DqxogIm%2F53x9vDpYP3wCEMPa0rsAGOqUBmfq5B0F234INI4QzYyg6VH%2BxSTaVe7IhkllJsBJB5P6cS4OXwzFOWBhPF0bgGn2SSm5xGRU%2BiGsY0HD5Nytv7IMGCiAb62JTryZXw2q9yAQY6G%2BlnJFs0tGQknGHpID%2BkqHAgJRjTy5hPrL3c0RK1EeC%2Fde3S%2B1m4aObCOLU8sJb2AuBwjX%2BiGUklg7oytWbrDhy4PP2RRB%2Bdf1YxKREu7WocNUJ&X-Amz-Signature=3e8aac9f6606a59bda3cb5bd7696753f534418cbedcc9c3f808589f483cdc4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKGAJOR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKunRfr8PR4AsbL4LIb1aZ8K0wXMvVE5hiu38tNxWKFQIgUseE6Bj7YLU1xurEYdPq7hh1BVBjUksF6IheiHv8hrEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAiRPEs%2BUQxUCFcumircA4Fx602Qm4p6ue2nZkfn9pA1rsgGwEuSQxfqLjRf1FpdHfuCzRlDdSIfgB6M6GAlb79c%2BltMyrQlcH7NL%2FPmPCPU1rc9zbkUC%2FOvaxqrLCUv5ZvYsmuQZnh3yGLOpok1WPpBUB2MzzPUfIkXl4z8JCIP2hqDb4PIIupeVttyqYxhcXI03LORKpHjt8r%2B%2B7h88JZsOXy8o7wLnzkmgrhzI273oBslEUjJl6c7pCVY57%2BQQjEuoXSlHLGNv%2Bh8nutTZb9juDQKmSKqaEyvlvsUfcxCsQmnY7%2FNQdWBoy0P9O1Obs77GS3JW%2ByLipnYwFkpqq2N2NZ1RYIKaTdFlPfuYwG90MrlE0RtI7YPZiL8LnXPMC3XzU5tRwqTyM0iw%2FTxIO60NqhaIiKIq1pCQnynVJRx0NBtT%2FQr05sh7zOB0cUEtzZ1qnt%2Bst3fABcvP38vJNebvbFG%2BF8nhCgDq4N37Z1cK0v9%2F4ksJbKkY524wLTOH2Ds5%2BpO3HMp0%2BT84evJXR9CKoTXuOMm5LuXao7DK89IDQ05XVsGvQVgWo81ZaHOBVD1o4WvZ0lKTcPlP79R2P4OK6CeJM7p4z84esDtzT2CE%2FGkGT07Xkhk0C3DqxogIm%2F53x9vDpYP3wCEMPa0rsAGOqUBmfq5B0F234INI4QzYyg6VH%2BxSTaVe7IhkllJsBJB5P6cS4OXwzFOWBhPF0bgGn2SSm5xGRU%2BiGsY0HD5Nytv7IMGCiAb62JTryZXw2q9yAQY6G%2BlnJFs0tGQknGHpID%2BkqHAgJRjTy5hPrL3c0RK1EeC%2Fde3S%2B1m4aObCOLU8sJb2AuBwjX%2BiGUklg7oytWbrDhy4PP2RRB%2Bdf1YxKREu7WocNUJ&X-Amz-Signature=bf8814d4e519f13cc459da3b36088276261a25b3daadcaa0c3fb829846ab2c27&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKGAJOR%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKunRfr8PR4AsbL4LIb1aZ8K0wXMvVE5hiu38tNxWKFQIgUseE6Bj7YLU1xurEYdPq7hh1BVBjUksF6IheiHv8hrEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDAiRPEs%2BUQxUCFcumircA4Fx602Qm4p6ue2nZkfn9pA1rsgGwEuSQxfqLjRf1FpdHfuCzRlDdSIfgB6M6GAlb79c%2BltMyrQlcH7NL%2FPmPCPU1rc9zbkUC%2FOvaxqrLCUv5ZvYsmuQZnh3yGLOpok1WPpBUB2MzzPUfIkXl4z8JCIP2hqDb4PIIupeVttyqYxhcXI03LORKpHjt8r%2B%2B7h88JZsOXy8o7wLnzkmgrhzI273oBslEUjJl6c7pCVY57%2BQQjEuoXSlHLGNv%2Bh8nutTZb9juDQKmSKqaEyvlvsUfcxCsQmnY7%2FNQdWBoy0P9O1Obs77GS3JW%2ByLipnYwFkpqq2N2NZ1RYIKaTdFlPfuYwG90MrlE0RtI7YPZiL8LnXPMC3XzU5tRwqTyM0iw%2FTxIO60NqhaIiKIq1pCQnynVJRx0NBtT%2FQr05sh7zOB0cUEtzZ1qnt%2Bst3fABcvP38vJNebvbFG%2BF8nhCgDq4N37Z1cK0v9%2F4ksJbKkY524wLTOH2Ds5%2BpO3HMp0%2BT84evJXR9CKoTXuOMm5LuXao7DK89IDQ05XVsGvQVgWo81ZaHOBVD1o4WvZ0lKTcPlP79R2P4OK6CeJM7p4z84esDtzT2CE%2FGkGT07Xkhk0C3DqxogIm%2F53x9vDpYP3wCEMPa0rsAGOqUBmfq5B0F234INI4QzYyg6VH%2BxSTaVe7IhkllJsBJB5P6cS4OXwzFOWBhPF0bgGn2SSm5xGRU%2BiGsY0HD5Nytv7IMGCiAb62JTryZXw2q9yAQY6G%2BlnJFs0tGQknGHpID%2BkqHAgJRjTy5hPrL3c0RK1EeC%2Fde3S%2B1m4aObCOLU8sJb2AuBwjX%2BiGUklg7oytWbrDhy4PP2RRB%2Bdf1YxKREu7WocNUJ&X-Amz-Signature=f11aec37fd13ef69ea82b912f80449b8ab157728c172ae08893f0b142fa5a740&X-Amz-SignedHeaders=host&x-id=GetObject)
