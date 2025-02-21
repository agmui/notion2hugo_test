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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE5RGWBK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcxWjZ89fgWwNrsXqthdd%2B5arQwZ32t1WRNUlWRTCmxAIgLNdPzBqdsPNIy95TdlB8eTUKO7g5nvoztpcF415oSXoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA968f2QXvldPaIPVCrcAxdWr%2FzoZvuH%2B7Yp%2FS5sTUIl2wqrjTHkmI%2BrXgv%2Fav94XGZ5iz4e4VdhpKyrBCMK9bpo3xdn7TtDO73mMJoH6QDdd%2FWZpbrfrbaDFyW6XvaiA%2BhitAtt%2BfhPYc0s%2B00ZZhOZmZCdgeAxkKlzWgm3ENNkUMexygHik0AiRM%2B59BSDyivmqc%2Bsdm%2BFzqsfzfm3BTf4yrZA1%2FqtauOgJDhxWr4Ju0U7Z%2Fsuqssd0G51qHz6nODTEvvV4HHaJ3FrVkp189vA8cqUiW%2FlnXxeGvQooCBbNtQJXFQhAjoJEhuqhAZsxhuIL8iiu4bEzEcDubpSZ3P6EG37Xiy5YnX3sLagAMuSlvtXKSMFQuCNwqvOT14RUoq9ZHPmS7WkokcmGvWgcVXcp%2BgAR1PPLoTDq9YFD14kEXZAWws2GcXYKThxPeT3aIEQFfG62KSyqgAQEtf2nY3NqHhc6va9rnX8%2BnC1%2B73XX0LQRuncXxlcC674ppbLOrfSXLmC3TKujlKUQ6eLRrUcv1vnCEITFhDT5RQ07eBYCKhFb1VG8tM%2FhmelNTfEHurn0GTPTW%2FDvadof1wLbhUSwOzwgRirXUW05n9%2BRRcNdNQ1skeEIUPevM19qswgpK2StB4TBM3KaYByMNqC4r0GOqUB6RQVp45nDaf34SxSlQSeQe1cZa1FDClBRPZV8ZS%2BfKswiUgX6dR%2F%2FFKEDWlBdCb4soPCyRFHgC5H0%2FXxJiMNZNFW1YR%2BtPVjqjU4qVfzoatSmscDk4Dpm%2Fn5siU4IyOR%2Bim57A%2BUSoPqSmTPGL7%2B%2BFhmmWehIRLdXRB4T8guFNAdWxuIVhAjws1eRPrXCYTKQGrexp4bDyIpV6HxamZRY2ovOE7t&X-Amz-Signature=6c45a0c33c17a2825d72c17b05f72ef813915d912263a605ba81ec2f9cc84144&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE5RGWBK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcxWjZ89fgWwNrsXqthdd%2B5arQwZ32t1WRNUlWRTCmxAIgLNdPzBqdsPNIy95TdlB8eTUKO7g5nvoztpcF415oSXoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA968f2QXvldPaIPVCrcAxdWr%2FzoZvuH%2B7Yp%2FS5sTUIl2wqrjTHkmI%2BrXgv%2Fav94XGZ5iz4e4VdhpKyrBCMK9bpo3xdn7TtDO73mMJoH6QDdd%2FWZpbrfrbaDFyW6XvaiA%2BhitAtt%2BfhPYc0s%2B00ZZhOZmZCdgeAxkKlzWgm3ENNkUMexygHik0AiRM%2B59BSDyivmqc%2Bsdm%2BFzqsfzfm3BTf4yrZA1%2FqtauOgJDhxWr4Ju0U7Z%2Fsuqssd0G51qHz6nODTEvvV4HHaJ3FrVkp189vA8cqUiW%2FlnXxeGvQooCBbNtQJXFQhAjoJEhuqhAZsxhuIL8iiu4bEzEcDubpSZ3P6EG37Xiy5YnX3sLagAMuSlvtXKSMFQuCNwqvOT14RUoq9ZHPmS7WkokcmGvWgcVXcp%2BgAR1PPLoTDq9YFD14kEXZAWws2GcXYKThxPeT3aIEQFfG62KSyqgAQEtf2nY3NqHhc6va9rnX8%2BnC1%2B73XX0LQRuncXxlcC674ppbLOrfSXLmC3TKujlKUQ6eLRrUcv1vnCEITFhDT5RQ07eBYCKhFb1VG8tM%2FhmelNTfEHurn0GTPTW%2FDvadof1wLbhUSwOzwgRirXUW05n9%2BRRcNdNQ1skeEIUPevM19qswgpK2StB4TBM3KaYByMNqC4r0GOqUB6RQVp45nDaf34SxSlQSeQe1cZa1FDClBRPZV8ZS%2BfKswiUgX6dR%2F%2FFKEDWlBdCb4soPCyRFHgC5H0%2FXxJiMNZNFW1YR%2BtPVjqjU4qVfzoatSmscDk4Dpm%2Fn5siU4IyOR%2Bim57A%2BUSoPqSmTPGL7%2B%2BFhmmWehIRLdXRB4T8guFNAdWxuIVhAjws1eRPrXCYTKQGrexp4bDyIpV6HxamZRY2ovOE7t&X-Amz-Signature=d764bbeb587eb6dd5de87f83682e93b0f73116e47af2333d9781e3ef4b0bcdf9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE5RGWBK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcxWjZ89fgWwNrsXqthdd%2B5arQwZ32t1WRNUlWRTCmxAIgLNdPzBqdsPNIy95TdlB8eTUKO7g5nvoztpcF415oSXoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA968f2QXvldPaIPVCrcAxdWr%2FzoZvuH%2B7Yp%2FS5sTUIl2wqrjTHkmI%2BrXgv%2Fav94XGZ5iz4e4VdhpKyrBCMK9bpo3xdn7TtDO73mMJoH6QDdd%2FWZpbrfrbaDFyW6XvaiA%2BhitAtt%2BfhPYc0s%2B00ZZhOZmZCdgeAxkKlzWgm3ENNkUMexygHik0AiRM%2B59BSDyivmqc%2Bsdm%2BFzqsfzfm3BTf4yrZA1%2FqtauOgJDhxWr4Ju0U7Z%2Fsuqssd0G51qHz6nODTEvvV4HHaJ3FrVkp189vA8cqUiW%2FlnXxeGvQooCBbNtQJXFQhAjoJEhuqhAZsxhuIL8iiu4bEzEcDubpSZ3P6EG37Xiy5YnX3sLagAMuSlvtXKSMFQuCNwqvOT14RUoq9ZHPmS7WkokcmGvWgcVXcp%2BgAR1PPLoTDq9YFD14kEXZAWws2GcXYKThxPeT3aIEQFfG62KSyqgAQEtf2nY3NqHhc6va9rnX8%2BnC1%2B73XX0LQRuncXxlcC674ppbLOrfSXLmC3TKujlKUQ6eLRrUcv1vnCEITFhDT5RQ07eBYCKhFb1VG8tM%2FhmelNTfEHurn0GTPTW%2FDvadof1wLbhUSwOzwgRirXUW05n9%2BRRcNdNQ1skeEIUPevM19qswgpK2StB4TBM3KaYByMNqC4r0GOqUB6RQVp45nDaf34SxSlQSeQe1cZa1FDClBRPZV8ZS%2BfKswiUgX6dR%2F%2FFKEDWlBdCb4soPCyRFHgC5H0%2FXxJiMNZNFW1YR%2BtPVjqjU4qVfzoatSmscDk4Dpm%2Fn5siU4IyOR%2Bim57A%2BUSoPqSmTPGL7%2B%2BFhmmWehIRLdXRB4T8guFNAdWxuIVhAjws1eRPrXCYTKQGrexp4bDyIpV6HxamZRY2ovOE7t&X-Amz-Signature=524ae6c54a42a2b4dced26cc24067d8eadc0da499d0fbf4fe6b6e06c7cd64f65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE5RGWBK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcxWjZ89fgWwNrsXqthdd%2B5arQwZ32t1WRNUlWRTCmxAIgLNdPzBqdsPNIy95TdlB8eTUKO7g5nvoztpcF415oSXoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA968f2QXvldPaIPVCrcAxdWr%2FzoZvuH%2B7Yp%2FS5sTUIl2wqrjTHkmI%2BrXgv%2Fav94XGZ5iz4e4VdhpKyrBCMK9bpo3xdn7TtDO73mMJoH6QDdd%2FWZpbrfrbaDFyW6XvaiA%2BhitAtt%2BfhPYc0s%2B00ZZhOZmZCdgeAxkKlzWgm3ENNkUMexygHik0AiRM%2B59BSDyivmqc%2Bsdm%2BFzqsfzfm3BTf4yrZA1%2FqtauOgJDhxWr4Ju0U7Z%2Fsuqssd0G51qHz6nODTEvvV4HHaJ3FrVkp189vA8cqUiW%2FlnXxeGvQooCBbNtQJXFQhAjoJEhuqhAZsxhuIL8iiu4bEzEcDubpSZ3P6EG37Xiy5YnX3sLagAMuSlvtXKSMFQuCNwqvOT14RUoq9ZHPmS7WkokcmGvWgcVXcp%2BgAR1PPLoTDq9YFD14kEXZAWws2GcXYKThxPeT3aIEQFfG62KSyqgAQEtf2nY3NqHhc6va9rnX8%2BnC1%2B73XX0LQRuncXxlcC674ppbLOrfSXLmC3TKujlKUQ6eLRrUcv1vnCEITFhDT5RQ07eBYCKhFb1VG8tM%2FhmelNTfEHurn0GTPTW%2FDvadof1wLbhUSwOzwgRirXUW05n9%2BRRcNdNQ1skeEIUPevM19qswgpK2StB4TBM3KaYByMNqC4r0GOqUB6RQVp45nDaf34SxSlQSeQe1cZa1FDClBRPZV8ZS%2BfKswiUgX6dR%2F%2FFKEDWlBdCb4soPCyRFHgC5H0%2FXxJiMNZNFW1YR%2BtPVjqjU4qVfzoatSmscDk4Dpm%2Fn5siU4IyOR%2Bim57A%2BUSoPqSmTPGL7%2B%2BFhmmWehIRLdXRB4T8guFNAdWxuIVhAjws1eRPrXCYTKQGrexp4bDyIpV6HxamZRY2ovOE7t&X-Amz-Signature=5fdce681c441d5d4be82c90c13c4cc5f610a18c9e2bfa1e72554d20825545e13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE5RGWBK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcxWjZ89fgWwNrsXqthdd%2B5arQwZ32t1WRNUlWRTCmxAIgLNdPzBqdsPNIy95TdlB8eTUKO7g5nvoztpcF415oSXoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA968f2QXvldPaIPVCrcAxdWr%2FzoZvuH%2B7Yp%2FS5sTUIl2wqrjTHkmI%2BrXgv%2Fav94XGZ5iz4e4VdhpKyrBCMK9bpo3xdn7TtDO73mMJoH6QDdd%2FWZpbrfrbaDFyW6XvaiA%2BhitAtt%2BfhPYc0s%2B00ZZhOZmZCdgeAxkKlzWgm3ENNkUMexygHik0AiRM%2B59BSDyivmqc%2Bsdm%2BFzqsfzfm3BTf4yrZA1%2FqtauOgJDhxWr4Ju0U7Z%2Fsuqssd0G51qHz6nODTEvvV4HHaJ3FrVkp189vA8cqUiW%2FlnXxeGvQooCBbNtQJXFQhAjoJEhuqhAZsxhuIL8iiu4bEzEcDubpSZ3P6EG37Xiy5YnX3sLagAMuSlvtXKSMFQuCNwqvOT14RUoq9ZHPmS7WkokcmGvWgcVXcp%2BgAR1PPLoTDq9YFD14kEXZAWws2GcXYKThxPeT3aIEQFfG62KSyqgAQEtf2nY3NqHhc6va9rnX8%2BnC1%2B73XX0LQRuncXxlcC674ppbLOrfSXLmC3TKujlKUQ6eLRrUcv1vnCEITFhDT5RQ07eBYCKhFb1VG8tM%2FhmelNTfEHurn0GTPTW%2FDvadof1wLbhUSwOzwgRirXUW05n9%2BRRcNdNQ1skeEIUPevM19qswgpK2StB4TBM3KaYByMNqC4r0GOqUB6RQVp45nDaf34SxSlQSeQe1cZa1FDClBRPZV8ZS%2BfKswiUgX6dR%2F%2FFKEDWlBdCb4soPCyRFHgC5H0%2FXxJiMNZNFW1YR%2BtPVjqjU4qVfzoatSmscDk4Dpm%2Fn5siU4IyOR%2Bim57A%2BUSoPqSmTPGL7%2B%2BFhmmWehIRLdXRB4T8guFNAdWxuIVhAjws1eRPrXCYTKQGrexp4bDyIpV6HxamZRY2ovOE7t&X-Amz-Signature=5411b2cee4f87ff2ff8551186410863eafea9e2e648145098c1d134885fd344c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE5RGWBK%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcxWjZ89fgWwNrsXqthdd%2B5arQwZ32t1WRNUlWRTCmxAIgLNdPzBqdsPNIy95TdlB8eTUKO7g5nvoztpcF415oSXoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA968f2QXvldPaIPVCrcAxdWr%2FzoZvuH%2B7Yp%2FS5sTUIl2wqrjTHkmI%2BrXgv%2Fav94XGZ5iz4e4VdhpKyrBCMK9bpo3xdn7TtDO73mMJoH6QDdd%2FWZpbrfrbaDFyW6XvaiA%2BhitAtt%2BfhPYc0s%2B00ZZhOZmZCdgeAxkKlzWgm3ENNkUMexygHik0AiRM%2B59BSDyivmqc%2Bsdm%2BFzqsfzfm3BTf4yrZA1%2FqtauOgJDhxWr4Ju0U7Z%2Fsuqssd0G51qHz6nODTEvvV4HHaJ3FrVkp189vA8cqUiW%2FlnXxeGvQooCBbNtQJXFQhAjoJEhuqhAZsxhuIL8iiu4bEzEcDubpSZ3P6EG37Xiy5YnX3sLagAMuSlvtXKSMFQuCNwqvOT14RUoq9ZHPmS7WkokcmGvWgcVXcp%2BgAR1PPLoTDq9YFD14kEXZAWws2GcXYKThxPeT3aIEQFfG62KSyqgAQEtf2nY3NqHhc6va9rnX8%2BnC1%2B73XX0LQRuncXxlcC674ppbLOrfSXLmC3TKujlKUQ6eLRrUcv1vnCEITFhDT5RQ07eBYCKhFb1VG8tM%2FhmelNTfEHurn0GTPTW%2FDvadof1wLbhUSwOzwgRirXUW05n9%2BRRcNdNQ1skeEIUPevM19qswgpK2StB4TBM3KaYByMNqC4r0GOqUB6RQVp45nDaf34SxSlQSeQe1cZa1FDClBRPZV8ZS%2BfKswiUgX6dR%2F%2FFKEDWlBdCb4soPCyRFHgC5H0%2FXxJiMNZNFW1YR%2BtPVjqjU4qVfzoatSmscDk4Dpm%2Fn5siU4IyOR%2Bim57A%2BUSoPqSmTPGL7%2B%2BFhmmWehIRLdXRB4T8guFNAdWxuIVhAjws1eRPrXCYTKQGrexp4bDyIpV6HxamZRY2ovOE7t&X-Amz-Signature=80b8ebab909a9383d10bcc1e1395cb52fc63888fe3187102809c2f8586fc3e2f&X-Amz-SignedHeaders=host&x-id=GetObject)
