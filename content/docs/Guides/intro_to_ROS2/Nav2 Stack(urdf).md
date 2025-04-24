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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUL53OM2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52i4gdsK40zw8yRt6ylrAtafmKYxDLCmYfjq7J7q2HwIhAP3nHzsW5%2Bz4akMtjzEuMmmNiqJltUqgXcwxTUam2BkRKv8DCBkQABoMNjM3NDIzMTgzODA1Igzv2%2F3LLOT9NrIgBDIq3ANBf0Fmj07hdLVo%2FHUrygUg1KByYViffiuzpDo4rg6yjyce3oZPDvyg27fIfVeCsxvhThPkjjr027%2B7snhWjv2nnTPsF9bpvHrVQEnViUs8sFqsT%2FDxYZRA5vw4Z6bk%2F8pZ7hPxieqirbnPSMGEiXSoEKrg3e5PXgGeiHQ5rSwIBjyGTk1vAUMKG4hODS3ORa6z%2FkfMMOtDMvvT4v63L0GmgeSzdJHoN2jl6SafXpjcGxEdbE1YbP%2BTSic%2FWKhmiPDf2BpyqSth25wQeRSzJu28Nlh8l7Gbccga0fEZ1JCCQM47CLI68FynKoJ1SOuqzP6lX8s5jbiX9HQbWOSbFYNuItGC2gY62%2FK2Qzff1HYOocg3z4hahheb3TwwDVT9lgQpILipzJebqYde1nPEt9ecQvus08VdJpgRRS7IFb6xLO5SZxA6Jwn0%2BwrIOt6DHDVr5WRGRwsppOS13QhRDiF5WwZOVNLwWidQW0sQxA%2F%2BjhHH6lrjzBt8oVXPbiV%2FiuvIne52G3CkZWoqSRwVtS1m%2BZJVe7N%2ByXnsvhSbFXG%2FpadKCqwQSyKmdM1HRMTTzh5G%2F5FIU3WGpBhHvZp3aKckP44Y5%2BneWMWAIUhpzt3i%2BH5ph6Lmq8BoDj8YZzC6uqnABjqkAQE5uWbwSWRmHlYw8gdyoftw0HuUyELGRqmqE%2FxbllqYXKTlz3EKiMSO4Rwg91z96ylwS43NOM34o3FVHOCC8qI7o78UjIwk%2BB0Jq8Oba1f%2BWVOZwPX88YC0j%2BhqeAA%2Bk%2Bav1655bVOVccqWjk2TtPVYG4Nl0mKO2IvCMYCAgpvzVia5MBiOupHgXCE82gBgmqmoYwJ3D8nw83Ie2GToKI%2FNskgh&X-Amz-Signature=54d86288b243ad51bc6dcf1a20c801c8c5d69eea2fb15ad0a455a7da60276e74&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUL53OM2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52i4gdsK40zw8yRt6ylrAtafmKYxDLCmYfjq7J7q2HwIhAP3nHzsW5%2Bz4akMtjzEuMmmNiqJltUqgXcwxTUam2BkRKv8DCBkQABoMNjM3NDIzMTgzODA1Igzv2%2F3LLOT9NrIgBDIq3ANBf0Fmj07hdLVo%2FHUrygUg1KByYViffiuzpDo4rg6yjyce3oZPDvyg27fIfVeCsxvhThPkjjr027%2B7snhWjv2nnTPsF9bpvHrVQEnViUs8sFqsT%2FDxYZRA5vw4Z6bk%2F8pZ7hPxieqirbnPSMGEiXSoEKrg3e5PXgGeiHQ5rSwIBjyGTk1vAUMKG4hODS3ORa6z%2FkfMMOtDMvvT4v63L0GmgeSzdJHoN2jl6SafXpjcGxEdbE1YbP%2BTSic%2FWKhmiPDf2BpyqSth25wQeRSzJu28Nlh8l7Gbccga0fEZ1JCCQM47CLI68FynKoJ1SOuqzP6lX8s5jbiX9HQbWOSbFYNuItGC2gY62%2FK2Qzff1HYOocg3z4hahheb3TwwDVT9lgQpILipzJebqYde1nPEt9ecQvus08VdJpgRRS7IFb6xLO5SZxA6Jwn0%2BwrIOt6DHDVr5WRGRwsppOS13QhRDiF5WwZOVNLwWidQW0sQxA%2F%2BjhHH6lrjzBt8oVXPbiV%2FiuvIne52G3CkZWoqSRwVtS1m%2BZJVe7N%2ByXnsvhSbFXG%2FpadKCqwQSyKmdM1HRMTTzh5G%2F5FIU3WGpBhHvZp3aKckP44Y5%2BneWMWAIUhpzt3i%2BH5ph6Lmq8BoDj8YZzC6uqnABjqkAQE5uWbwSWRmHlYw8gdyoftw0HuUyELGRqmqE%2FxbllqYXKTlz3EKiMSO4Rwg91z96ylwS43NOM34o3FVHOCC8qI7o78UjIwk%2BB0Jq8Oba1f%2BWVOZwPX88YC0j%2BhqeAA%2Bk%2Bav1655bVOVccqWjk2TtPVYG4Nl0mKO2IvCMYCAgpvzVia5MBiOupHgXCE82gBgmqmoYwJ3D8nw83Ie2GToKI%2FNskgh&X-Amz-Signature=96d1f91f793f5dc9ad1964a5933c72484177dffb146fcbb1bbbb4512171873c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUL53OM2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52i4gdsK40zw8yRt6ylrAtafmKYxDLCmYfjq7J7q2HwIhAP3nHzsW5%2Bz4akMtjzEuMmmNiqJltUqgXcwxTUam2BkRKv8DCBkQABoMNjM3NDIzMTgzODA1Igzv2%2F3LLOT9NrIgBDIq3ANBf0Fmj07hdLVo%2FHUrygUg1KByYViffiuzpDo4rg6yjyce3oZPDvyg27fIfVeCsxvhThPkjjr027%2B7snhWjv2nnTPsF9bpvHrVQEnViUs8sFqsT%2FDxYZRA5vw4Z6bk%2F8pZ7hPxieqirbnPSMGEiXSoEKrg3e5PXgGeiHQ5rSwIBjyGTk1vAUMKG4hODS3ORa6z%2FkfMMOtDMvvT4v63L0GmgeSzdJHoN2jl6SafXpjcGxEdbE1YbP%2BTSic%2FWKhmiPDf2BpyqSth25wQeRSzJu28Nlh8l7Gbccga0fEZ1JCCQM47CLI68FynKoJ1SOuqzP6lX8s5jbiX9HQbWOSbFYNuItGC2gY62%2FK2Qzff1HYOocg3z4hahheb3TwwDVT9lgQpILipzJebqYde1nPEt9ecQvus08VdJpgRRS7IFb6xLO5SZxA6Jwn0%2BwrIOt6DHDVr5WRGRwsppOS13QhRDiF5WwZOVNLwWidQW0sQxA%2F%2BjhHH6lrjzBt8oVXPbiV%2FiuvIne52G3CkZWoqSRwVtS1m%2BZJVe7N%2ByXnsvhSbFXG%2FpadKCqwQSyKmdM1HRMTTzh5G%2F5FIU3WGpBhHvZp3aKckP44Y5%2BneWMWAIUhpzt3i%2BH5ph6Lmq8BoDj8YZzC6uqnABjqkAQE5uWbwSWRmHlYw8gdyoftw0HuUyELGRqmqE%2FxbllqYXKTlz3EKiMSO4Rwg91z96ylwS43NOM34o3FVHOCC8qI7o78UjIwk%2BB0Jq8Oba1f%2BWVOZwPX88YC0j%2BhqeAA%2Bk%2Bav1655bVOVccqWjk2TtPVYG4Nl0mKO2IvCMYCAgpvzVia5MBiOupHgXCE82gBgmqmoYwJ3D8nw83Ie2GToKI%2FNskgh&X-Amz-Signature=0afa32298695881b5358dcbe1b9d3379afacf1983a6b046caff2123d31fb0dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUL53OM2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52i4gdsK40zw8yRt6ylrAtafmKYxDLCmYfjq7J7q2HwIhAP3nHzsW5%2Bz4akMtjzEuMmmNiqJltUqgXcwxTUam2BkRKv8DCBkQABoMNjM3NDIzMTgzODA1Igzv2%2F3LLOT9NrIgBDIq3ANBf0Fmj07hdLVo%2FHUrygUg1KByYViffiuzpDo4rg6yjyce3oZPDvyg27fIfVeCsxvhThPkjjr027%2B7snhWjv2nnTPsF9bpvHrVQEnViUs8sFqsT%2FDxYZRA5vw4Z6bk%2F8pZ7hPxieqirbnPSMGEiXSoEKrg3e5PXgGeiHQ5rSwIBjyGTk1vAUMKG4hODS3ORa6z%2FkfMMOtDMvvT4v63L0GmgeSzdJHoN2jl6SafXpjcGxEdbE1YbP%2BTSic%2FWKhmiPDf2BpyqSth25wQeRSzJu28Nlh8l7Gbccga0fEZ1JCCQM47CLI68FynKoJ1SOuqzP6lX8s5jbiX9HQbWOSbFYNuItGC2gY62%2FK2Qzff1HYOocg3z4hahheb3TwwDVT9lgQpILipzJebqYde1nPEt9ecQvus08VdJpgRRS7IFb6xLO5SZxA6Jwn0%2BwrIOt6DHDVr5WRGRwsppOS13QhRDiF5WwZOVNLwWidQW0sQxA%2F%2BjhHH6lrjzBt8oVXPbiV%2FiuvIne52G3CkZWoqSRwVtS1m%2BZJVe7N%2ByXnsvhSbFXG%2FpadKCqwQSyKmdM1HRMTTzh5G%2F5FIU3WGpBhHvZp3aKckP44Y5%2BneWMWAIUhpzt3i%2BH5ph6Lmq8BoDj8YZzC6uqnABjqkAQE5uWbwSWRmHlYw8gdyoftw0HuUyELGRqmqE%2FxbllqYXKTlz3EKiMSO4Rwg91z96ylwS43NOM34o3FVHOCC8qI7o78UjIwk%2BB0Jq8Oba1f%2BWVOZwPX88YC0j%2BhqeAA%2Bk%2Bav1655bVOVccqWjk2TtPVYG4Nl0mKO2IvCMYCAgpvzVia5MBiOupHgXCE82gBgmqmoYwJ3D8nw83Ie2GToKI%2FNskgh&X-Amz-Signature=28010a0e7598a5626b726bc614aaee32686ae90a45abf0c268eb77a2b193b4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUL53OM2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52i4gdsK40zw8yRt6ylrAtafmKYxDLCmYfjq7J7q2HwIhAP3nHzsW5%2Bz4akMtjzEuMmmNiqJltUqgXcwxTUam2BkRKv8DCBkQABoMNjM3NDIzMTgzODA1Igzv2%2F3LLOT9NrIgBDIq3ANBf0Fmj07hdLVo%2FHUrygUg1KByYViffiuzpDo4rg6yjyce3oZPDvyg27fIfVeCsxvhThPkjjr027%2B7snhWjv2nnTPsF9bpvHrVQEnViUs8sFqsT%2FDxYZRA5vw4Z6bk%2F8pZ7hPxieqirbnPSMGEiXSoEKrg3e5PXgGeiHQ5rSwIBjyGTk1vAUMKG4hODS3ORa6z%2FkfMMOtDMvvT4v63L0GmgeSzdJHoN2jl6SafXpjcGxEdbE1YbP%2BTSic%2FWKhmiPDf2BpyqSth25wQeRSzJu28Nlh8l7Gbccga0fEZ1JCCQM47CLI68FynKoJ1SOuqzP6lX8s5jbiX9HQbWOSbFYNuItGC2gY62%2FK2Qzff1HYOocg3z4hahheb3TwwDVT9lgQpILipzJebqYde1nPEt9ecQvus08VdJpgRRS7IFb6xLO5SZxA6Jwn0%2BwrIOt6DHDVr5WRGRwsppOS13QhRDiF5WwZOVNLwWidQW0sQxA%2F%2BjhHH6lrjzBt8oVXPbiV%2FiuvIne52G3CkZWoqSRwVtS1m%2BZJVe7N%2ByXnsvhSbFXG%2FpadKCqwQSyKmdM1HRMTTzh5G%2F5FIU3WGpBhHvZp3aKckP44Y5%2BneWMWAIUhpzt3i%2BH5ph6Lmq8BoDj8YZzC6uqnABjqkAQE5uWbwSWRmHlYw8gdyoftw0HuUyELGRqmqE%2FxbllqYXKTlz3EKiMSO4Rwg91z96ylwS43NOM34o3FVHOCC8qI7o78UjIwk%2BB0Jq8Oba1f%2BWVOZwPX88YC0j%2BhqeAA%2Bk%2Bav1655bVOVccqWjk2TtPVYG4Nl0mKO2IvCMYCAgpvzVia5MBiOupHgXCE82gBgmqmoYwJ3D8nw83Ie2GToKI%2FNskgh&X-Amz-Signature=dbeb52557fb07df1aea818467101b1f66707ceb99d2be5edcb59408248f73d69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUL53OM2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC52i4gdsK40zw8yRt6ylrAtafmKYxDLCmYfjq7J7q2HwIhAP3nHzsW5%2Bz4akMtjzEuMmmNiqJltUqgXcwxTUam2BkRKv8DCBkQABoMNjM3NDIzMTgzODA1Igzv2%2F3LLOT9NrIgBDIq3ANBf0Fmj07hdLVo%2FHUrygUg1KByYViffiuzpDo4rg6yjyce3oZPDvyg27fIfVeCsxvhThPkjjr027%2B7snhWjv2nnTPsF9bpvHrVQEnViUs8sFqsT%2FDxYZRA5vw4Z6bk%2F8pZ7hPxieqirbnPSMGEiXSoEKrg3e5PXgGeiHQ5rSwIBjyGTk1vAUMKG4hODS3ORa6z%2FkfMMOtDMvvT4v63L0GmgeSzdJHoN2jl6SafXpjcGxEdbE1YbP%2BTSic%2FWKhmiPDf2BpyqSth25wQeRSzJu28Nlh8l7Gbccga0fEZ1JCCQM47CLI68FynKoJ1SOuqzP6lX8s5jbiX9HQbWOSbFYNuItGC2gY62%2FK2Qzff1HYOocg3z4hahheb3TwwDVT9lgQpILipzJebqYde1nPEt9ecQvus08VdJpgRRS7IFb6xLO5SZxA6Jwn0%2BwrIOt6DHDVr5WRGRwsppOS13QhRDiF5WwZOVNLwWidQW0sQxA%2F%2BjhHH6lrjzBt8oVXPbiV%2FiuvIne52G3CkZWoqSRwVtS1m%2BZJVe7N%2ByXnsvhSbFXG%2FpadKCqwQSyKmdM1HRMTTzh5G%2F5FIU3WGpBhHvZp3aKckP44Y5%2BneWMWAIUhpzt3i%2BH5ph6Lmq8BoDj8YZzC6uqnABjqkAQE5uWbwSWRmHlYw8gdyoftw0HuUyELGRqmqE%2FxbllqYXKTlz3EKiMSO4Rwg91z96ylwS43NOM34o3FVHOCC8qI7o78UjIwk%2BB0Jq8Oba1f%2BWVOZwPX88YC0j%2BhqeAA%2Bk%2Bav1655bVOVccqWjk2TtPVYG4Nl0mKO2IvCMYCAgpvzVia5MBiOupHgXCE82gBgmqmoYwJ3D8nw83Ie2GToKI%2FNskgh&X-Amz-Signature=5701eccf19c8aa1e096c24885d20da32beb2f1d7eaf2e79bf8ec4261d0cb9a2f&X-Amz-SignedHeaders=host&x-id=GetObject)
