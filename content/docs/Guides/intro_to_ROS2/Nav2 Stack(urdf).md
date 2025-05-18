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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMED73UL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqjueTuHDq6g51stFv6%2FuqpsjrKWE7U6RuuVij8Vs0IQIhAN5uRaE2EAA%2FaQ45KUM6DfSDPBfjWyJALeUVOxEp44BfKv8DCHwQABoMNjM3NDIzMTgzODA1IgzxGEHitTe6wReaFZkq3APRoFJaysYBCyQK%2FVXae6RBOhY2VzXceUt3%2FXNbTVCqpxL4IUpEJJmPtTqA3LbckUJtA6D8y%2BCw3srhHSBvu9tFJo7TKAxo%2FRIMSpWR%2FGA%2Blg7IReUTV0vz4wNzvCr65hf2AcQN3JEO3CvCNUdJDmSlYxNimtW%2FOPvqwARBxXjPWDW3eAfuMnqgKbZeznyWi8Ed7wNtVeHOpkMFwr%2F9Kfc4QtB%2F8wNbrC4jG74%2BOelXhU2dZRd1Qfq6Cqat%2B9FIOgUwhrFSuaQrfI7%2FAXbaVYfsIRsv9pDORLaSosoGvnKF%2FSehS1WO4PePPVGQgdCl0zKFKkoZiPXap30nB%2F4z37gyKoPlNeLtIqB%2FAB7KVz0iZYYeDceRUdimdL%2FzsK0Iir80v2%2BpzTuXGhLz9dRpRwtCu2TCxNIK4MfYgjWIUpilEcnAbvsBODh83%2B4C80dpNzTPe281Vl7otFuAeEi6o9KaDdjY9g4EyD41r%2BfpIBIbFCH3TAnxiWPsgGBT7fWG0s94hM1JduR1arvblJCSkIaFzg95Jak27ZuxyI2p%2F5h2yP2YFt2Ma9FzPKfuvEVrvXgjBTWz4xkW7oVs3HyOrxZ1Yb9e6EE804jBUcXtcuipb0T7UQBzUuj0C34UhTDe5qjBBjqkAZoUgI059%2BI0dlcH7bdsembAw9goMgqiZHN10dwnjdKK%2FocZrcQ1KZhUHhDAH7qICwuC7DM4%2BdajE2S8YyPRsUz2SO1WXQJa7c3PrrNxl3j5xXyeYzp%2FLeTYOP1sEPTwNOFmAfrZLGHIbsbL8nqjiqlBqhhv0HtUmGAm%2FppHmjoA9ix26jqf5HzC%2B8EUrNDpDiTImEtQTF05MmORBreYlCMBNVqA&X-Amz-Signature=92873bf49969bd63d86807bb7045e8e95e1027000479f6bed957162c37f202f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMED73UL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqjueTuHDq6g51stFv6%2FuqpsjrKWE7U6RuuVij8Vs0IQIhAN5uRaE2EAA%2FaQ45KUM6DfSDPBfjWyJALeUVOxEp44BfKv8DCHwQABoMNjM3NDIzMTgzODA1IgzxGEHitTe6wReaFZkq3APRoFJaysYBCyQK%2FVXae6RBOhY2VzXceUt3%2FXNbTVCqpxL4IUpEJJmPtTqA3LbckUJtA6D8y%2BCw3srhHSBvu9tFJo7TKAxo%2FRIMSpWR%2FGA%2Blg7IReUTV0vz4wNzvCr65hf2AcQN3JEO3CvCNUdJDmSlYxNimtW%2FOPvqwARBxXjPWDW3eAfuMnqgKbZeznyWi8Ed7wNtVeHOpkMFwr%2F9Kfc4QtB%2F8wNbrC4jG74%2BOelXhU2dZRd1Qfq6Cqat%2B9FIOgUwhrFSuaQrfI7%2FAXbaVYfsIRsv9pDORLaSosoGvnKF%2FSehS1WO4PePPVGQgdCl0zKFKkoZiPXap30nB%2F4z37gyKoPlNeLtIqB%2FAB7KVz0iZYYeDceRUdimdL%2FzsK0Iir80v2%2BpzTuXGhLz9dRpRwtCu2TCxNIK4MfYgjWIUpilEcnAbvsBODh83%2B4C80dpNzTPe281Vl7otFuAeEi6o9KaDdjY9g4EyD41r%2BfpIBIbFCH3TAnxiWPsgGBT7fWG0s94hM1JduR1arvblJCSkIaFzg95Jak27ZuxyI2p%2F5h2yP2YFt2Ma9FzPKfuvEVrvXgjBTWz4xkW7oVs3HyOrxZ1Yb9e6EE804jBUcXtcuipb0T7UQBzUuj0C34UhTDe5qjBBjqkAZoUgI059%2BI0dlcH7bdsembAw9goMgqiZHN10dwnjdKK%2FocZrcQ1KZhUHhDAH7qICwuC7DM4%2BdajE2S8YyPRsUz2SO1WXQJa7c3PrrNxl3j5xXyeYzp%2FLeTYOP1sEPTwNOFmAfrZLGHIbsbL8nqjiqlBqhhv0HtUmGAm%2FppHmjoA9ix26jqf5HzC%2B8EUrNDpDiTImEtQTF05MmORBreYlCMBNVqA&X-Amz-Signature=d784e0e5e651428db08883aa9318395a97b432fd43c36b85d9fae3fac1bb446e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMED73UL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqjueTuHDq6g51stFv6%2FuqpsjrKWE7U6RuuVij8Vs0IQIhAN5uRaE2EAA%2FaQ45KUM6DfSDPBfjWyJALeUVOxEp44BfKv8DCHwQABoMNjM3NDIzMTgzODA1IgzxGEHitTe6wReaFZkq3APRoFJaysYBCyQK%2FVXae6RBOhY2VzXceUt3%2FXNbTVCqpxL4IUpEJJmPtTqA3LbckUJtA6D8y%2BCw3srhHSBvu9tFJo7TKAxo%2FRIMSpWR%2FGA%2Blg7IReUTV0vz4wNzvCr65hf2AcQN3JEO3CvCNUdJDmSlYxNimtW%2FOPvqwARBxXjPWDW3eAfuMnqgKbZeznyWi8Ed7wNtVeHOpkMFwr%2F9Kfc4QtB%2F8wNbrC4jG74%2BOelXhU2dZRd1Qfq6Cqat%2B9FIOgUwhrFSuaQrfI7%2FAXbaVYfsIRsv9pDORLaSosoGvnKF%2FSehS1WO4PePPVGQgdCl0zKFKkoZiPXap30nB%2F4z37gyKoPlNeLtIqB%2FAB7KVz0iZYYeDceRUdimdL%2FzsK0Iir80v2%2BpzTuXGhLz9dRpRwtCu2TCxNIK4MfYgjWIUpilEcnAbvsBODh83%2B4C80dpNzTPe281Vl7otFuAeEi6o9KaDdjY9g4EyD41r%2BfpIBIbFCH3TAnxiWPsgGBT7fWG0s94hM1JduR1arvblJCSkIaFzg95Jak27ZuxyI2p%2F5h2yP2YFt2Ma9FzPKfuvEVrvXgjBTWz4xkW7oVs3HyOrxZ1Yb9e6EE804jBUcXtcuipb0T7UQBzUuj0C34UhTDe5qjBBjqkAZoUgI059%2BI0dlcH7bdsembAw9goMgqiZHN10dwnjdKK%2FocZrcQ1KZhUHhDAH7qICwuC7DM4%2BdajE2S8YyPRsUz2SO1WXQJa7c3PrrNxl3j5xXyeYzp%2FLeTYOP1sEPTwNOFmAfrZLGHIbsbL8nqjiqlBqhhv0HtUmGAm%2FppHmjoA9ix26jqf5HzC%2B8EUrNDpDiTImEtQTF05MmORBreYlCMBNVqA&X-Amz-Signature=2b5b4d10c974dccb9a990f6831e5b1435850c5406563c84fb428b75515e40430&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMED73UL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqjueTuHDq6g51stFv6%2FuqpsjrKWE7U6RuuVij8Vs0IQIhAN5uRaE2EAA%2FaQ45KUM6DfSDPBfjWyJALeUVOxEp44BfKv8DCHwQABoMNjM3NDIzMTgzODA1IgzxGEHitTe6wReaFZkq3APRoFJaysYBCyQK%2FVXae6RBOhY2VzXceUt3%2FXNbTVCqpxL4IUpEJJmPtTqA3LbckUJtA6D8y%2BCw3srhHSBvu9tFJo7TKAxo%2FRIMSpWR%2FGA%2Blg7IReUTV0vz4wNzvCr65hf2AcQN3JEO3CvCNUdJDmSlYxNimtW%2FOPvqwARBxXjPWDW3eAfuMnqgKbZeznyWi8Ed7wNtVeHOpkMFwr%2F9Kfc4QtB%2F8wNbrC4jG74%2BOelXhU2dZRd1Qfq6Cqat%2B9FIOgUwhrFSuaQrfI7%2FAXbaVYfsIRsv9pDORLaSosoGvnKF%2FSehS1WO4PePPVGQgdCl0zKFKkoZiPXap30nB%2F4z37gyKoPlNeLtIqB%2FAB7KVz0iZYYeDceRUdimdL%2FzsK0Iir80v2%2BpzTuXGhLz9dRpRwtCu2TCxNIK4MfYgjWIUpilEcnAbvsBODh83%2B4C80dpNzTPe281Vl7otFuAeEi6o9KaDdjY9g4EyD41r%2BfpIBIbFCH3TAnxiWPsgGBT7fWG0s94hM1JduR1arvblJCSkIaFzg95Jak27ZuxyI2p%2F5h2yP2YFt2Ma9FzPKfuvEVrvXgjBTWz4xkW7oVs3HyOrxZ1Yb9e6EE804jBUcXtcuipb0T7UQBzUuj0C34UhTDe5qjBBjqkAZoUgI059%2BI0dlcH7bdsembAw9goMgqiZHN10dwnjdKK%2FocZrcQ1KZhUHhDAH7qICwuC7DM4%2BdajE2S8YyPRsUz2SO1WXQJa7c3PrrNxl3j5xXyeYzp%2FLeTYOP1sEPTwNOFmAfrZLGHIbsbL8nqjiqlBqhhv0HtUmGAm%2FppHmjoA9ix26jqf5HzC%2B8EUrNDpDiTImEtQTF05MmORBreYlCMBNVqA&X-Amz-Signature=e4049bc3b70fd85f8af99ebf4f746119b30b6b9396cea2116f511e15736e78d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMED73UL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqjueTuHDq6g51stFv6%2FuqpsjrKWE7U6RuuVij8Vs0IQIhAN5uRaE2EAA%2FaQ45KUM6DfSDPBfjWyJALeUVOxEp44BfKv8DCHwQABoMNjM3NDIzMTgzODA1IgzxGEHitTe6wReaFZkq3APRoFJaysYBCyQK%2FVXae6RBOhY2VzXceUt3%2FXNbTVCqpxL4IUpEJJmPtTqA3LbckUJtA6D8y%2BCw3srhHSBvu9tFJo7TKAxo%2FRIMSpWR%2FGA%2Blg7IReUTV0vz4wNzvCr65hf2AcQN3JEO3CvCNUdJDmSlYxNimtW%2FOPvqwARBxXjPWDW3eAfuMnqgKbZeznyWi8Ed7wNtVeHOpkMFwr%2F9Kfc4QtB%2F8wNbrC4jG74%2BOelXhU2dZRd1Qfq6Cqat%2B9FIOgUwhrFSuaQrfI7%2FAXbaVYfsIRsv9pDORLaSosoGvnKF%2FSehS1WO4PePPVGQgdCl0zKFKkoZiPXap30nB%2F4z37gyKoPlNeLtIqB%2FAB7KVz0iZYYeDceRUdimdL%2FzsK0Iir80v2%2BpzTuXGhLz9dRpRwtCu2TCxNIK4MfYgjWIUpilEcnAbvsBODh83%2B4C80dpNzTPe281Vl7otFuAeEi6o9KaDdjY9g4EyD41r%2BfpIBIbFCH3TAnxiWPsgGBT7fWG0s94hM1JduR1arvblJCSkIaFzg95Jak27ZuxyI2p%2F5h2yP2YFt2Ma9FzPKfuvEVrvXgjBTWz4xkW7oVs3HyOrxZ1Yb9e6EE804jBUcXtcuipb0T7UQBzUuj0C34UhTDe5qjBBjqkAZoUgI059%2BI0dlcH7bdsembAw9goMgqiZHN10dwnjdKK%2FocZrcQ1KZhUHhDAH7qICwuC7DM4%2BdajE2S8YyPRsUz2SO1WXQJa7c3PrrNxl3j5xXyeYzp%2FLeTYOP1sEPTwNOFmAfrZLGHIbsbL8nqjiqlBqhhv0HtUmGAm%2FppHmjoA9ix26jqf5HzC%2B8EUrNDpDiTImEtQTF05MmORBreYlCMBNVqA&X-Amz-Signature=0fe3c21412a2900b9982eae39bfc16cf8b11f2c819c4d656d000aeb28e7acc42&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMED73UL%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqjueTuHDq6g51stFv6%2FuqpsjrKWE7U6RuuVij8Vs0IQIhAN5uRaE2EAA%2FaQ45KUM6DfSDPBfjWyJALeUVOxEp44BfKv8DCHwQABoMNjM3NDIzMTgzODA1IgzxGEHitTe6wReaFZkq3APRoFJaysYBCyQK%2FVXae6RBOhY2VzXceUt3%2FXNbTVCqpxL4IUpEJJmPtTqA3LbckUJtA6D8y%2BCw3srhHSBvu9tFJo7TKAxo%2FRIMSpWR%2FGA%2Blg7IReUTV0vz4wNzvCr65hf2AcQN3JEO3CvCNUdJDmSlYxNimtW%2FOPvqwARBxXjPWDW3eAfuMnqgKbZeznyWi8Ed7wNtVeHOpkMFwr%2F9Kfc4QtB%2F8wNbrC4jG74%2BOelXhU2dZRd1Qfq6Cqat%2B9FIOgUwhrFSuaQrfI7%2FAXbaVYfsIRsv9pDORLaSosoGvnKF%2FSehS1WO4PePPVGQgdCl0zKFKkoZiPXap30nB%2F4z37gyKoPlNeLtIqB%2FAB7KVz0iZYYeDceRUdimdL%2FzsK0Iir80v2%2BpzTuXGhLz9dRpRwtCu2TCxNIK4MfYgjWIUpilEcnAbvsBODh83%2B4C80dpNzTPe281Vl7otFuAeEi6o9KaDdjY9g4EyD41r%2BfpIBIbFCH3TAnxiWPsgGBT7fWG0s94hM1JduR1arvblJCSkIaFzg95Jak27ZuxyI2p%2F5h2yP2YFt2Ma9FzPKfuvEVrvXgjBTWz4xkW7oVs3HyOrxZ1Yb9e6EE804jBUcXtcuipb0T7UQBzUuj0C34UhTDe5qjBBjqkAZoUgI059%2BI0dlcH7bdsembAw9goMgqiZHN10dwnjdKK%2FocZrcQ1KZhUHhDAH7qICwuC7DM4%2BdajE2S8YyPRsUz2SO1WXQJa7c3PrrNxl3j5xXyeYzp%2FLeTYOP1sEPTwNOFmAfrZLGHIbsbL8nqjiqlBqhhv0HtUmGAm%2FppHmjoA9ix26jqf5HzC%2B8EUrNDpDiTImEtQTF05MmORBreYlCMBNVqA&X-Amz-Signature=45a9603a0f61c0442a01f461a6f597ce7d4158cbedd6c608a38d4d8eca34af25&X-Amz-SignedHeaders=host&x-id=GetObject)
