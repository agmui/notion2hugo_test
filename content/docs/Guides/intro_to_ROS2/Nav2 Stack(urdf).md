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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Z5LWFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUga5ECh3derEze%2FO14g9s1d1UgoTGPkotdKip60DGgIhAK6db%2BRjktsxwS%2FxJNva5qCvFjk%2FY8KkA0PjqSfo0%2BL6Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyMjcxqlQAPOoog75Aq3ANdgnnaoFK%2ByQHFfFbnt95O2ciy%2F3wS98gmZAFn4D8wDr52yV%2F%2BR5sqmhbsqS0iA%2BPqZSef7Xzg2vqaJTn%2BJzJiazltBs%2BMo8sCz2WYkHz7H35lrNIeGgxAchFJV%2F002UwbxvbiveVwqPbyjSEDbw7Pirbb6GfxEpHidRSUsjITGteA1ONnsedQVE7AsSDy6qOXEE60Eq73lqgnM5ME8yMtGw%2BKh9f8AqVUjv8F%2B00GVWlysIfJk5AueDIscXnyJWEt5X2wlzGf0rEeovTe%2F2decSNafd%2BnzV3pB1l7DvU99s9739HqyFroXB1MDvx8YSlik67lwhXGRzh9WrRnDLX1TISRBTQKtD5lbCluAARcsALQncbs5uRF%2BFKyc9FRaoACXn9J8kMtcIcMmnvaSDtFUKBroqUyyCilytzJZ7lZZ4oPBeQL5UP1V6MjhDqcWard9bE%2FJ%2Fp7HjzLpFyXXHWupb1XY90qxb13mhPKjBH5LKLVS8NSYWb8QUWiZqVO1dbAEAHdm49kLTyWeOAGgJq%2BXbnwslzjM1%2BV%2B96Zzv%2BGpheCzCP39DJ34buBDB9R0J7%2BeiiKN8gNDvCuDWfaMSJIeWQOvwgh7Ag2AfTVWO9Xjuz5uy0fLtASJCbSlzCYzqe%2BBjqkAWE44AZSNYcVC75P1OEWI3pMD0cRyjw4u8m6BtNHmgo23cjnWfO9o1xSip4TAAeeU0DzyN1JwrNg7je5QQBlCGVbe2jCNnv4BN51uT748VvaMwoQfY1MBxBESV7HXCVxIsEr0hGHGnZOf1pt79S3q%2F9A%2BFnZsc58zA6PsFJIiUnB%2BuWBFq7aS8y%2FuREm8AVRnsyaxNHhDcinxeXOf5FTFMbnwim4&X-Amz-Signature=b94b0468c01085186b6643b60f139304dbd24a94cd5fd572e2c7f2ecd4006ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Z5LWFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUga5ECh3derEze%2FO14g9s1d1UgoTGPkotdKip60DGgIhAK6db%2BRjktsxwS%2FxJNva5qCvFjk%2FY8KkA0PjqSfo0%2BL6Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyMjcxqlQAPOoog75Aq3ANdgnnaoFK%2ByQHFfFbnt95O2ciy%2F3wS98gmZAFn4D8wDr52yV%2F%2BR5sqmhbsqS0iA%2BPqZSef7Xzg2vqaJTn%2BJzJiazltBs%2BMo8sCz2WYkHz7H35lrNIeGgxAchFJV%2F002UwbxvbiveVwqPbyjSEDbw7Pirbb6GfxEpHidRSUsjITGteA1ONnsedQVE7AsSDy6qOXEE60Eq73lqgnM5ME8yMtGw%2BKh9f8AqVUjv8F%2B00GVWlysIfJk5AueDIscXnyJWEt5X2wlzGf0rEeovTe%2F2decSNafd%2BnzV3pB1l7DvU99s9739HqyFroXB1MDvx8YSlik67lwhXGRzh9WrRnDLX1TISRBTQKtD5lbCluAARcsALQncbs5uRF%2BFKyc9FRaoACXn9J8kMtcIcMmnvaSDtFUKBroqUyyCilytzJZ7lZZ4oPBeQL5UP1V6MjhDqcWard9bE%2FJ%2Fp7HjzLpFyXXHWupb1XY90qxb13mhPKjBH5LKLVS8NSYWb8QUWiZqVO1dbAEAHdm49kLTyWeOAGgJq%2BXbnwslzjM1%2BV%2B96Zzv%2BGpheCzCP39DJ34buBDB9R0J7%2BeiiKN8gNDvCuDWfaMSJIeWQOvwgh7Ag2AfTVWO9Xjuz5uy0fLtASJCbSlzCYzqe%2BBjqkAWE44AZSNYcVC75P1OEWI3pMD0cRyjw4u8m6BtNHmgo23cjnWfO9o1xSip4TAAeeU0DzyN1JwrNg7je5QQBlCGVbe2jCNnv4BN51uT748VvaMwoQfY1MBxBESV7HXCVxIsEr0hGHGnZOf1pt79S3q%2F9A%2BFnZsc58zA6PsFJIiUnB%2BuWBFq7aS8y%2FuREm8AVRnsyaxNHhDcinxeXOf5FTFMbnwim4&X-Amz-Signature=3927aa4f04f2b61681b384076833b5424a63292c2b94714e77561f8ad51a7bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Z5LWFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUga5ECh3derEze%2FO14g9s1d1UgoTGPkotdKip60DGgIhAK6db%2BRjktsxwS%2FxJNva5qCvFjk%2FY8KkA0PjqSfo0%2BL6Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyMjcxqlQAPOoog75Aq3ANdgnnaoFK%2ByQHFfFbnt95O2ciy%2F3wS98gmZAFn4D8wDr52yV%2F%2BR5sqmhbsqS0iA%2BPqZSef7Xzg2vqaJTn%2BJzJiazltBs%2BMo8sCz2WYkHz7H35lrNIeGgxAchFJV%2F002UwbxvbiveVwqPbyjSEDbw7Pirbb6GfxEpHidRSUsjITGteA1ONnsedQVE7AsSDy6qOXEE60Eq73lqgnM5ME8yMtGw%2BKh9f8AqVUjv8F%2B00GVWlysIfJk5AueDIscXnyJWEt5X2wlzGf0rEeovTe%2F2decSNafd%2BnzV3pB1l7DvU99s9739HqyFroXB1MDvx8YSlik67lwhXGRzh9WrRnDLX1TISRBTQKtD5lbCluAARcsALQncbs5uRF%2BFKyc9FRaoACXn9J8kMtcIcMmnvaSDtFUKBroqUyyCilytzJZ7lZZ4oPBeQL5UP1V6MjhDqcWard9bE%2FJ%2Fp7HjzLpFyXXHWupb1XY90qxb13mhPKjBH5LKLVS8NSYWb8QUWiZqVO1dbAEAHdm49kLTyWeOAGgJq%2BXbnwslzjM1%2BV%2B96Zzv%2BGpheCzCP39DJ34buBDB9R0J7%2BeiiKN8gNDvCuDWfaMSJIeWQOvwgh7Ag2AfTVWO9Xjuz5uy0fLtASJCbSlzCYzqe%2BBjqkAWE44AZSNYcVC75P1OEWI3pMD0cRyjw4u8m6BtNHmgo23cjnWfO9o1xSip4TAAeeU0DzyN1JwrNg7je5QQBlCGVbe2jCNnv4BN51uT748VvaMwoQfY1MBxBESV7HXCVxIsEr0hGHGnZOf1pt79S3q%2F9A%2BFnZsc58zA6PsFJIiUnB%2BuWBFq7aS8y%2FuREm8AVRnsyaxNHhDcinxeXOf5FTFMbnwim4&X-Amz-Signature=364581322de5d0350010b75bcd7c86f5eccdf75d922e384b6786e691b0c3d53c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Z5LWFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUga5ECh3derEze%2FO14g9s1d1UgoTGPkotdKip60DGgIhAK6db%2BRjktsxwS%2FxJNva5qCvFjk%2FY8KkA0PjqSfo0%2BL6Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyMjcxqlQAPOoog75Aq3ANdgnnaoFK%2ByQHFfFbnt95O2ciy%2F3wS98gmZAFn4D8wDr52yV%2F%2BR5sqmhbsqS0iA%2BPqZSef7Xzg2vqaJTn%2BJzJiazltBs%2BMo8sCz2WYkHz7H35lrNIeGgxAchFJV%2F002UwbxvbiveVwqPbyjSEDbw7Pirbb6GfxEpHidRSUsjITGteA1ONnsedQVE7AsSDy6qOXEE60Eq73lqgnM5ME8yMtGw%2BKh9f8AqVUjv8F%2B00GVWlysIfJk5AueDIscXnyJWEt5X2wlzGf0rEeovTe%2F2decSNafd%2BnzV3pB1l7DvU99s9739HqyFroXB1MDvx8YSlik67lwhXGRzh9WrRnDLX1TISRBTQKtD5lbCluAARcsALQncbs5uRF%2BFKyc9FRaoACXn9J8kMtcIcMmnvaSDtFUKBroqUyyCilytzJZ7lZZ4oPBeQL5UP1V6MjhDqcWard9bE%2FJ%2Fp7HjzLpFyXXHWupb1XY90qxb13mhPKjBH5LKLVS8NSYWb8QUWiZqVO1dbAEAHdm49kLTyWeOAGgJq%2BXbnwslzjM1%2BV%2B96Zzv%2BGpheCzCP39DJ34buBDB9R0J7%2BeiiKN8gNDvCuDWfaMSJIeWQOvwgh7Ag2AfTVWO9Xjuz5uy0fLtASJCbSlzCYzqe%2BBjqkAWE44AZSNYcVC75P1OEWI3pMD0cRyjw4u8m6BtNHmgo23cjnWfO9o1xSip4TAAeeU0DzyN1JwrNg7je5QQBlCGVbe2jCNnv4BN51uT748VvaMwoQfY1MBxBESV7HXCVxIsEr0hGHGnZOf1pt79S3q%2F9A%2BFnZsc58zA6PsFJIiUnB%2BuWBFq7aS8y%2FuREm8AVRnsyaxNHhDcinxeXOf5FTFMbnwim4&X-Amz-Signature=4e59385904de4063807071a9b15b0904943b197cfcb607b43237326269e31ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Z5LWFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUga5ECh3derEze%2FO14g9s1d1UgoTGPkotdKip60DGgIhAK6db%2BRjktsxwS%2FxJNva5qCvFjk%2FY8KkA0PjqSfo0%2BL6Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyMjcxqlQAPOoog75Aq3ANdgnnaoFK%2ByQHFfFbnt95O2ciy%2F3wS98gmZAFn4D8wDr52yV%2F%2BR5sqmhbsqS0iA%2BPqZSef7Xzg2vqaJTn%2BJzJiazltBs%2BMo8sCz2WYkHz7H35lrNIeGgxAchFJV%2F002UwbxvbiveVwqPbyjSEDbw7Pirbb6GfxEpHidRSUsjITGteA1ONnsedQVE7AsSDy6qOXEE60Eq73lqgnM5ME8yMtGw%2BKh9f8AqVUjv8F%2B00GVWlysIfJk5AueDIscXnyJWEt5X2wlzGf0rEeovTe%2F2decSNafd%2BnzV3pB1l7DvU99s9739HqyFroXB1MDvx8YSlik67lwhXGRzh9WrRnDLX1TISRBTQKtD5lbCluAARcsALQncbs5uRF%2BFKyc9FRaoACXn9J8kMtcIcMmnvaSDtFUKBroqUyyCilytzJZ7lZZ4oPBeQL5UP1V6MjhDqcWard9bE%2FJ%2Fp7HjzLpFyXXHWupb1XY90qxb13mhPKjBH5LKLVS8NSYWb8QUWiZqVO1dbAEAHdm49kLTyWeOAGgJq%2BXbnwslzjM1%2BV%2B96Zzv%2BGpheCzCP39DJ34buBDB9R0J7%2BeiiKN8gNDvCuDWfaMSJIeWQOvwgh7Ag2AfTVWO9Xjuz5uy0fLtASJCbSlzCYzqe%2BBjqkAWE44AZSNYcVC75P1OEWI3pMD0cRyjw4u8m6BtNHmgo23cjnWfO9o1xSip4TAAeeU0DzyN1JwrNg7je5QQBlCGVbe2jCNnv4BN51uT748VvaMwoQfY1MBxBESV7HXCVxIsEr0hGHGnZOf1pt79S3q%2F9A%2BFnZsc58zA6PsFJIiUnB%2BuWBFq7aS8y%2FuREm8AVRnsyaxNHhDcinxeXOf5FTFMbnwim4&X-Amz-Signature=fe28a3ddad20e68cbfd8f7970097b07f2e1b1762de72cc4f0707e43b9fd600a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664Z5LWFJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUga5ECh3derEze%2FO14g9s1d1UgoTGPkotdKip60DGgIhAK6db%2BRjktsxwS%2FxJNva5qCvFjk%2FY8KkA0PjqSfo0%2BL6Kv8DCDMQABoMNjM3NDIzMTgzODA1IgyMjcxqlQAPOoog75Aq3ANdgnnaoFK%2ByQHFfFbnt95O2ciy%2F3wS98gmZAFn4D8wDr52yV%2F%2BR5sqmhbsqS0iA%2BPqZSef7Xzg2vqaJTn%2BJzJiazltBs%2BMo8sCz2WYkHz7H35lrNIeGgxAchFJV%2F002UwbxvbiveVwqPbyjSEDbw7Pirbb6GfxEpHidRSUsjITGteA1ONnsedQVE7AsSDy6qOXEE60Eq73lqgnM5ME8yMtGw%2BKh9f8AqVUjv8F%2B00GVWlysIfJk5AueDIscXnyJWEt5X2wlzGf0rEeovTe%2F2decSNafd%2BnzV3pB1l7DvU99s9739HqyFroXB1MDvx8YSlik67lwhXGRzh9WrRnDLX1TISRBTQKtD5lbCluAARcsALQncbs5uRF%2BFKyc9FRaoACXn9J8kMtcIcMmnvaSDtFUKBroqUyyCilytzJZ7lZZ4oPBeQL5UP1V6MjhDqcWard9bE%2FJ%2Fp7HjzLpFyXXHWupb1XY90qxb13mhPKjBH5LKLVS8NSYWb8QUWiZqVO1dbAEAHdm49kLTyWeOAGgJq%2BXbnwslzjM1%2BV%2B96Zzv%2BGpheCzCP39DJ34buBDB9R0J7%2BeiiKN8gNDvCuDWfaMSJIeWQOvwgh7Ag2AfTVWO9Xjuz5uy0fLtASJCbSlzCYzqe%2BBjqkAWE44AZSNYcVC75P1OEWI3pMD0cRyjw4u8m6BtNHmgo23cjnWfO9o1xSip4TAAeeU0DzyN1JwrNg7je5QQBlCGVbe2jCNnv4BN51uT748VvaMwoQfY1MBxBESV7HXCVxIsEr0hGHGnZOf1pt79S3q%2F9A%2BFnZsc58zA6PsFJIiUnB%2BuWBFq7aS8y%2FuREm8AVRnsyaxNHhDcinxeXOf5FTFMbnwim4&X-Amz-Signature=45cdca6e2faac71d4342102cf196709362a78369e664b2d31b955b87001644fd&X-Amz-SignedHeaders=host&x-id=GetObject)
