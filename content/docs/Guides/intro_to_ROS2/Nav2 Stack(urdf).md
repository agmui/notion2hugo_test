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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGHTCDM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBjzYB%2Bl%2FWqGMGUcIqYFnLyC%2BBXeho630jt53yBkHZHAIgceYjMcaTYGBFOYQeobtZwCSoHbs2GMpIn2fXKHE%2B%2FssqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO7wCrFHTb8bcs%2BKSrcA1eOeu9NEbyndTzeLNbf59GCr8Ux5%2F6r%2BObMYoNFAI9X6XHTEGGIbxs8zK5%2FThVqc%2Fi7JCLr%2BdW%2BwjEY88ZyJqoBe6hXVRsMXoy2QUOl8VMUfeAvO9ONZpDjXpyyoLL%2Bl2SkRaMlISNAk8wSuwDUR7q9iXSqC9pwYqW0QlAvmobrBpTOCdgb0AG7wCv9ZzQYU5nhnfQFl0X7rR3b9a2XmGISoZ5djf6NWNq2GDvx9cT48EWC7qN87RMTZONDT68%2B4kuXJJ%2Bj2RKAJ7FBERWyIBut4xVHo%2FeOs1zRIrWRSDjFe%2FXEfjNWtgbtx1Zy8fYgrmL82k3er4E69uZF4mQ5zXOcOVpSnjOKj1OTt9XK2zv1AqaSrfEj4Q2EaoDj5Yu0jpRFikU8Q00Ofjft4Ni59BEBmtqRW1lD4AjrRqIK5aVD8pe4ZLr%2Fe%2FXWcYSAtiRsS3SQBSrlR4wb9aPfETSQLgyhnN8AJSF9zp09IGm3F4x3xfMsgCtyhh8dXleI8M2pKPanmxJ7ba3b8NcC6pEoLMrUiWaiwtItn631o9lgrer2XnBADHpz49NWTeTI59ecZTzWWN0CCZXMhTnTrAmK8s7%2Bvw69UzZkKpfZN7nZ7b%2FJ4Zjb7c%2BAzWHdQFTNMKyEzsIGOqUB7o7qTRd0luB%2FhOpCWX3PuIe%2F2OGcnSakM0ILOGLbKXclPoZzm8wDU7D3RMLkp0%2BTxXlX4lfH9%2BQSr8NmnuqoryA3eeaaclTnf4DBBewUzTimHiifZFjZYW9zs6N5J5VQbTyq0Vhq1phtRoNbRKVZWJCQOfzCDpG5bq2%2FUwnQJ1Qdt6dIxURvQSejf4TJY0L7gu7kFNx37f3ZLAd%2BGT4oM9%2FNuW9c&X-Amz-Signature=dbbd0a8732bcf85cb95de58ae00cf962d6f57cc9ef856ec0e19cd7e39a1ced70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGHTCDM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBjzYB%2Bl%2FWqGMGUcIqYFnLyC%2BBXeho630jt53yBkHZHAIgceYjMcaTYGBFOYQeobtZwCSoHbs2GMpIn2fXKHE%2B%2FssqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO7wCrFHTb8bcs%2BKSrcA1eOeu9NEbyndTzeLNbf59GCr8Ux5%2F6r%2BObMYoNFAI9X6XHTEGGIbxs8zK5%2FThVqc%2Fi7JCLr%2BdW%2BwjEY88ZyJqoBe6hXVRsMXoy2QUOl8VMUfeAvO9ONZpDjXpyyoLL%2Bl2SkRaMlISNAk8wSuwDUR7q9iXSqC9pwYqW0QlAvmobrBpTOCdgb0AG7wCv9ZzQYU5nhnfQFl0X7rR3b9a2XmGISoZ5djf6NWNq2GDvx9cT48EWC7qN87RMTZONDT68%2B4kuXJJ%2Bj2RKAJ7FBERWyIBut4xVHo%2FeOs1zRIrWRSDjFe%2FXEfjNWtgbtx1Zy8fYgrmL82k3er4E69uZF4mQ5zXOcOVpSnjOKj1OTt9XK2zv1AqaSrfEj4Q2EaoDj5Yu0jpRFikU8Q00Ofjft4Ni59BEBmtqRW1lD4AjrRqIK5aVD8pe4ZLr%2Fe%2FXWcYSAtiRsS3SQBSrlR4wb9aPfETSQLgyhnN8AJSF9zp09IGm3F4x3xfMsgCtyhh8dXleI8M2pKPanmxJ7ba3b8NcC6pEoLMrUiWaiwtItn631o9lgrer2XnBADHpz49NWTeTI59ecZTzWWN0CCZXMhTnTrAmK8s7%2Bvw69UzZkKpfZN7nZ7b%2FJ4Zjb7c%2BAzWHdQFTNMKyEzsIGOqUB7o7qTRd0luB%2FhOpCWX3PuIe%2F2OGcnSakM0ILOGLbKXclPoZzm8wDU7D3RMLkp0%2BTxXlX4lfH9%2BQSr8NmnuqoryA3eeaaclTnf4DBBewUzTimHiifZFjZYW9zs6N5J5VQbTyq0Vhq1phtRoNbRKVZWJCQOfzCDpG5bq2%2FUwnQJ1Qdt6dIxURvQSejf4TJY0L7gu7kFNx37f3ZLAd%2BGT4oM9%2FNuW9c&X-Amz-Signature=1d50a4908f069ee0fdc531225c211de24082af5c8c8b2b3329636bcd53cfea71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGHTCDM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBjzYB%2Bl%2FWqGMGUcIqYFnLyC%2BBXeho630jt53yBkHZHAIgceYjMcaTYGBFOYQeobtZwCSoHbs2GMpIn2fXKHE%2B%2FssqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO7wCrFHTb8bcs%2BKSrcA1eOeu9NEbyndTzeLNbf59GCr8Ux5%2F6r%2BObMYoNFAI9X6XHTEGGIbxs8zK5%2FThVqc%2Fi7JCLr%2BdW%2BwjEY88ZyJqoBe6hXVRsMXoy2QUOl8VMUfeAvO9ONZpDjXpyyoLL%2Bl2SkRaMlISNAk8wSuwDUR7q9iXSqC9pwYqW0QlAvmobrBpTOCdgb0AG7wCv9ZzQYU5nhnfQFl0X7rR3b9a2XmGISoZ5djf6NWNq2GDvx9cT48EWC7qN87RMTZONDT68%2B4kuXJJ%2Bj2RKAJ7FBERWyIBut4xVHo%2FeOs1zRIrWRSDjFe%2FXEfjNWtgbtx1Zy8fYgrmL82k3er4E69uZF4mQ5zXOcOVpSnjOKj1OTt9XK2zv1AqaSrfEj4Q2EaoDj5Yu0jpRFikU8Q00Ofjft4Ni59BEBmtqRW1lD4AjrRqIK5aVD8pe4ZLr%2Fe%2FXWcYSAtiRsS3SQBSrlR4wb9aPfETSQLgyhnN8AJSF9zp09IGm3F4x3xfMsgCtyhh8dXleI8M2pKPanmxJ7ba3b8NcC6pEoLMrUiWaiwtItn631o9lgrer2XnBADHpz49NWTeTI59ecZTzWWN0CCZXMhTnTrAmK8s7%2Bvw69UzZkKpfZN7nZ7b%2FJ4Zjb7c%2BAzWHdQFTNMKyEzsIGOqUB7o7qTRd0luB%2FhOpCWX3PuIe%2F2OGcnSakM0ILOGLbKXclPoZzm8wDU7D3RMLkp0%2BTxXlX4lfH9%2BQSr8NmnuqoryA3eeaaclTnf4DBBewUzTimHiifZFjZYW9zs6N5J5VQbTyq0Vhq1phtRoNbRKVZWJCQOfzCDpG5bq2%2FUwnQJ1Qdt6dIxURvQSejf4TJY0L7gu7kFNx37f3ZLAd%2BGT4oM9%2FNuW9c&X-Amz-Signature=f84e61709650f8fa4c5a2b795be10179f0aa593b2d53d14ec24d5647214e91cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGHTCDM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBjzYB%2Bl%2FWqGMGUcIqYFnLyC%2BBXeho630jt53yBkHZHAIgceYjMcaTYGBFOYQeobtZwCSoHbs2GMpIn2fXKHE%2B%2FssqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO7wCrFHTb8bcs%2BKSrcA1eOeu9NEbyndTzeLNbf59GCr8Ux5%2F6r%2BObMYoNFAI9X6XHTEGGIbxs8zK5%2FThVqc%2Fi7JCLr%2BdW%2BwjEY88ZyJqoBe6hXVRsMXoy2QUOl8VMUfeAvO9ONZpDjXpyyoLL%2Bl2SkRaMlISNAk8wSuwDUR7q9iXSqC9pwYqW0QlAvmobrBpTOCdgb0AG7wCv9ZzQYU5nhnfQFl0X7rR3b9a2XmGISoZ5djf6NWNq2GDvx9cT48EWC7qN87RMTZONDT68%2B4kuXJJ%2Bj2RKAJ7FBERWyIBut4xVHo%2FeOs1zRIrWRSDjFe%2FXEfjNWtgbtx1Zy8fYgrmL82k3er4E69uZF4mQ5zXOcOVpSnjOKj1OTt9XK2zv1AqaSrfEj4Q2EaoDj5Yu0jpRFikU8Q00Ofjft4Ni59BEBmtqRW1lD4AjrRqIK5aVD8pe4ZLr%2Fe%2FXWcYSAtiRsS3SQBSrlR4wb9aPfETSQLgyhnN8AJSF9zp09IGm3F4x3xfMsgCtyhh8dXleI8M2pKPanmxJ7ba3b8NcC6pEoLMrUiWaiwtItn631o9lgrer2XnBADHpz49NWTeTI59ecZTzWWN0CCZXMhTnTrAmK8s7%2Bvw69UzZkKpfZN7nZ7b%2FJ4Zjb7c%2BAzWHdQFTNMKyEzsIGOqUB7o7qTRd0luB%2FhOpCWX3PuIe%2F2OGcnSakM0ILOGLbKXclPoZzm8wDU7D3RMLkp0%2BTxXlX4lfH9%2BQSr8NmnuqoryA3eeaaclTnf4DBBewUzTimHiifZFjZYW9zs6N5J5VQbTyq0Vhq1phtRoNbRKVZWJCQOfzCDpG5bq2%2FUwnQJ1Qdt6dIxURvQSejf4TJY0L7gu7kFNx37f3ZLAd%2BGT4oM9%2FNuW9c&X-Amz-Signature=2d36987b5a48e7e645b9057cc8d7010268a632464b1c8b5f44d1ddc634de8001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGHTCDM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBjzYB%2Bl%2FWqGMGUcIqYFnLyC%2BBXeho630jt53yBkHZHAIgceYjMcaTYGBFOYQeobtZwCSoHbs2GMpIn2fXKHE%2B%2FssqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO7wCrFHTb8bcs%2BKSrcA1eOeu9NEbyndTzeLNbf59GCr8Ux5%2F6r%2BObMYoNFAI9X6XHTEGGIbxs8zK5%2FThVqc%2Fi7JCLr%2BdW%2BwjEY88ZyJqoBe6hXVRsMXoy2QUOl8VMUfeAvO9ONZpDjXpyyoLL%2Bl2SkRaMlISNAk8wSuwDUR7q9iXSqC9pwYqW0QlAvmobrBpTOCdgb0AG7wCv9ZzQYU5nhnfQFl0X7rR3b9a2XmGISoZ5djf6NWNq2GDvx9cT48EWC7qN87RMTZONDT68%2B4kuXJJ%2Bj2RKAJ7FBERWyIBut4xVHo%2FeOs1zRIrWRSDjFe%2FXEfjNWtgbtx1Zy8fYgrmL82k3er4E69uZF4mQ5zXOcOVpSnjOKj1OTt9XK2zv1AqaSrfEj4Q2EaoDj5Yu0jpRFikU8Q00Ofjft4Ni59BEBmtqRW1lD4AjrRqIK5aVD8pe4ZLr%2Fe%2FXWcYSAtiRsS3SQBSrlR4wb9aPfETSQLgyhnN8AJSF9zp09IGm3F4x3xfMsgCtyhh8dXleI8M2pKPanmxJ7ba3b8NcC6pEoLMrUiWaiwtItn631o9lgrer2XnBADHpz49NWTeTI59ecZTzWWN0CCZXMhTnTrAmK8s7%2Bvw69UzZkKpfZN7nZ7b%2FJ4Zjb7c%2BAzWHdQFTNMKyEzsIGOqUB7o7qTRd0luB%2FhOpCWX3PuIe%2F2OGcnSakM0ILOGLbKXclPoZzm8wDU7D3RMLkp0%2BTxXlX4lfH9%2BQSr8NmnuqoryA3eeaaclTnf4DBBewUzTimHiifZFjZYW9zs6N5J5VQbTyq0Vhq1phtRoNbRKVZWJCQOfzCDpG5bq2%2FUwnQJ1Qdt6dIxURvQSejf4TJY0L7gu7kFNx37f3ZLAd%2BGT4oM9%2FNuW9c&X-Amz-Signature=a636f47bd8a9c083ca5747ab2d7f97a7132beca32d4b767b3fc63c070e0c43ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGHTCDM%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBjzYB%2Bl%2FWqGMGUcIqYFnLyC%2BBXeho630jt53yBkHZHAIgceYjMcaTYGBFOYQeobtZwCSoHbs2GMpIn2fXKHE%2B%2FssqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEO7wCrFHTb8bcs%2BKSrcA1eOeu9NEbyndTzeLNbf59GCr8Ux5%2F6r%2BObMYoNFAI9X6XHTEGGIbxs8zK5%2FThVqc%2Fi7JCLr%2BdW%2BwjEY88ZyJqoBe6hXVRsMXoy2QUOl8VMUfeAvO9ONZpDjXpyyoLL%2Bl2SkRaMlISNAk8wSuwDUR7q9iXSqC9pwYqW0QlAvmobrBpTOCdgb0AG7wCv9ZzQYU5nhnfQFl0X7rR3b9a2XmGISoZ5djf6NWNq2GDvx9cT48EWC7qN87RMTZONDT68%2B4kuXJJ%2Bj2RKAJ7FBERWyIBut4xVHo%2FeOs1zRIrWRSDjFe%2FXEfjNWtgbtx1Zy8fYgrmL82k3er4E69uZF4mQ5zXOcOVpSnjOKj1OTt9XK2zv1AqaSrfEj4Q2EaoDj5Yu0jpRFikU8Q00Ofjft4Ni59BEBmtqRW1lD4AjrRqIK5aVD8pe4ZLr%2Fe%2FXWcYSAtiRsS3SQBSrlR4wb9aPfETSQLgyhnN8AJSF9zp09IGm3F4x3xfMsgCtyhh8dXleI8M2pKPanmxJ7ba3b8NcC6pEoLMrUiWaiwtItn631o9lgrer2XnBADHpz49NWTeTI59ecZTzWWN0CCZXMhTnTrAmK8s7%2Bvw69UzZkKpfZN7nZ7b%2FJ4Zjb7c%2BAzWHdQFTNMKyEzsIGOqUB7o7qTRd0luB%2FhOpCWX3PuIe%2F2OGcnSakM0ILOGLbKXclPoZzm8wDU7D3RMLkp0%2BTxXlX4lfH9%2BQSr8NmnuqoryA3eeaaclTnf4DBBewUzTimHiifZFjZYW9zs6N5J5VQbTyq0Vhq1phtRoNbRKVZWJCQOfzCDpG5bq2%2FUwnQJ1Qdt6dIxURvQSejf4TJY0L7gu7kFNx37f3ZLAd%2BGT4oM9%2FNuW9c&X-Amz-Signature=0a4214d3fd412a600d72159dd86c2601c1f35c8c784de51e90177b80dd4716c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
