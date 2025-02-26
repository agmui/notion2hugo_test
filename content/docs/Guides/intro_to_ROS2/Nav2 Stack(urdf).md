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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVPDULG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDBzhcy%2Bkt7zkpAu2A3uHfLHtHXcaybdK9Qe4bmF9L%2BqAIgbx28g69FBqk%2Fh6b3cWkFhFeH3sDQNip%2FbPKQAe3ZoMoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEnHzObWWUaaFftVbCrcAwLiz%2F98vTN7sfGVAoqa5At1TT5Q89j%2FXBymV0fe3KGQ5SQHzvRKud6LqRpDWizSA7zoVsz1GAXPBRlxTkIO0Hr6q3%2FAya234rh7CpTLMJmg9mZZBLNBz%2FjU7NnANqV1AM%2FV91ZxId09yN3ABNA2%2FIiXXEQhHPQlwU1rjSHh9KZxfZouYL6uVzhDQvQNp4VxNOGfmGiE%2BdrUQA9kZwqpk061p3fKQebh4ZobCoMuPDRJqMjOii1l4hEXTAZSfRxON5EJs6sSTk6Mx%2FP7GLbYwJScRIY%2F8a1DZFbDiCI4qSq7uOSoFbVB2ev1iEoWezQ5FR3JOWhfNN4Qu0E3%2FLX%2BX1RwIcJLkD6gBbskCIIvKsOefaQ1cAuAEo6i%2B93hRMt4dhBjWroliDzwvd%2FAtbVE7vp%2F6jVyagv%2BQF0B3To3YNUD4bVTFuYwB%2BUTa5L%2BEjybHpsUhlFHDbbUwa%2FlX7TKaY0kjiiaW5u9Y%2BxUdoZCoScy7ODdgo3DtByp1C6oUYJaQn33CqbjBUetM3%2FVD14fRdPGxXEr2CzwBffwLUTsOp61dl1M9KAT6kVyrJTw3fnCRkWqJCgMo6DWy8T5pD%2F71cUmqSlmR9s8jcxSpFxGFGjkp8DfQvVqaPsmK1GDMJ%2Fi%2Br0GOqUBWGBoe2wiMGS%2Brnnkzs%2B1%2BTxtJOfSdTcxN%2FM2Wb1qv5y9rSYVzrqJ9WrJ1jSrF4xsV1AIv8oTfYnbsmyyrQ5g%2BQXSEI0h%2FlyL834aO%2Bz2WR4aiPEa0a3m%2FtTXvQaTRq76czqRH%2B%2Bf41a6%2BNNJMlHRpYKPfP5LOU0q90yZ3PgpMi2lpJ9JeLhriFI84XAzoeKlHD9wA3hIXxWlUxcu3Vt9G6IXnWa7&X-Amz-Signature=668ae06b9631434e0e363c78388e19d8407ffb29f9a2649f74c2353842cde675&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVPDULG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDBzhcy%2Bkt7zkpAu2A3uHfLHtHXcaybdK9Qe4bmF9L%2BqAIgbx28g69FBqk%2Fh6b3cWkFhFeH3sDQNip%2FbPKQAe3ZoMoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEnHzObWWUaaFftVbCrcAwLiz%2F98vTN7sfGVAoqa5At1TT5Q89j%2FXBymV0fe3KGQ5SQHzvRKud6LqRpDWizSA7zoVsz1GAXPBRlxTkIO0Hr6q3%2FAya234rh7CpTLMJmg9mZZBLNBz%2FjU7NnANqV1AM%2FV91ZxId09yN3ABNA2%2FIiXXEQhHPQlwU1rjSHh9KZxfZouYL6uVzhDQvQNp4VxNOGfmGiE%2BdrUQA9kZwqpk061p3fKQebh4ZobCoMuPDRJqMjOii1l4hEXTAZSfRxON5EJs6sSTk6Mx%2FP7GLbYwJScRIY%2F8a1DZFbDiCI4qSq7uOSoFbVB2ev1iEoWezQ5FR3JOWhfNN4Qu0E3%2FLX%2BX1RwIcJLkD6gBbskCIIvKsOefaQ1cAuAEo6i%2B93hRMt4dhBjWroliDzwvd%2FAtbVE7vp%2F6jVyagv%2BQF0B3To3YNUD4bVTFuYwB%2BUTa5L%2BEjybHpsUhlFHDbbUwa%2FlX7TKaY0kjiiaW5u9Y%2BxUdoZCoScy7ODdgo3DtByp1C6oUYJaQn33CqbjBUetM3%2FVD14fRdPGxXEr2CzwBffwLUTsOp61dl1M9KAT6kVyrJTw3fnCRkWqJCgMo6DWy8T5pD%2F71cUmqSlmR9s8jcxSpFxGFGjkp8DfQvVqaPsmK1GDMJ%2Fi%2Br0GOqUBWGBoe2wiMGS%2Brnnkzs%2B1%2BTxtJOfSdTcxN%2FM2Wb1qv5y9rSYVzrqJ9WrJ1jSrF4xsV1AIv8oTfYnbsmyyrQ5g%2BQXSEI0h%2FlyL834aO%2Bz2WR4aiPEa0a3m%2FtTXvQaTRq76czqRH%2B%2Bf41a6%2BNNJMlHRpYKPfP5LOU0q90yZ3PgpMi2lpJ9JeLhriFI84XAzoeKlHD9wA3hIXxWlUxcu3Vt9G6IXnWa7&X-Amz-Signature=c4daaa13d7f32ee4f4160ff9bbd0b1647eca266ae478bff769a9eae9a0f06ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVPDULG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDBzhcy%2Bkt7zkpAu2A3uHfLHtHXcaybdK9Qe4bmF9L%2BqAIgbx28g69FBqk%2Fh6b3cWkFhFeH3sDQNip%2FbPKQAe3ZoMoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEnHzObWWUaaFftVbCrcAwLiz%2F98vTN7sfGVAoqa5At1TT5Q89j%2FXBymV0fe3KGQ5SQHzvRKud6LqRpDWizSA7zoVsz1GAXPBRlxTkIO0Hr6q3%2FAya234rh7CpTLMJmg9mZZBLNBz%2FjU7NnANqV1AM%2FV91ZxId09yN3ABNA2%2FIiXXEQhHPQlwU1rjSHh9KZxfZouYL6uVzhDQvQNp4VxNOGfmGiE%2BdrUQA9kZwqpk061p3fKQebh4ZobCoMuPDRJqMjOii1l4hEXTAZSfRxON5EJs6sSTk6Mx%2FP7GLbYwJScRIY%2F8a1DZFbDiCI4qSq7uOSoFbVB2ev1iEoWezQ5FR3JOWhfNN4Qu0E3%2FLX%2BX1RwIcJLkD6gBbskCIIvKsOefaQ1cAuAEo6i%2B93hRMt4dhBjWroliDzwvd%2FAtbVE7vp%2F6jVyagv%2BQF0B3To3YNUD4bVTFuYwB%2BUTa5L%2BEjybHpsUhlFHDbbUwa%2FlX7TKaY0kjiiaW5u9Y%2BxUdoZCoScy7ODdgo3DtByp1C6oUYJaQn33CqbjBUetM3%2FVD14fRdPGxXEr2CzwBffwLUTsOp61dl1M9KAT6kVyrJTw3fnCRkWqJCgMo6DWy8T5pD%2F71cUmqSlmR9s8jcxSpFxGFGjkp8DfQvVqaPsmK1GDMJ%2Fi%2Br0GOqUBWGBoe2wiMGS%2Brnnkzs%2B1%2BTxtJOfSdTcxN%2FM2Wb1qv5y9rSYVzrqJ9WrJ1jSrF4xsV1AIv8oTfYnbsmyyrQ5g%2BQXSEI0h%2FlyL834aO%2Bz2WR4aiPEa0a3m%2FtTXvQaTRq76czqRH%2B%2Bf41a6%2BNNJMlHRpYKPfP5LOU0q90yZ3PgpMi2lpJ9JeLhriFI84XAzoeKlHD9wA3hIXxWlUxcu3Vt9G6IXnWa7&X-Amz-Signature=e3528ee84677ca8588b25406eabe6bd4025638994cb11b9f41589e3bd5b405bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVPDULG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDBzhcy%2Bkt7zkpAu2A3uHfLHtHXcaybdK9Qe4bmF9L%2BqAIgbx28g69FBqk%2Fh6b3cWkFhFeH3sDQNip%2FbPKQAe3ZoMoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEnHzObWWUaaFftVbCrcAwLiz%2F98vTN7sfGVAoqa5At1TT5Q89j%2FXBymV0fe3KGQ5SQHzvRKud6LqRpDWizSA7zoVsz1GAXPBRlxTkIO0Hr6q3%2FAya234rh7CpTLMJmg9mZZBLNBz%2FjU7NnANqV1AM%2FV91ZxId09yN3ABNA2%2FIiXXEQhHPQlwU1rjSHh9KZxfZouYL6uVzhDQvQNp4VxNOGfmGiE%2BdrUQA9kZwqpk061p3fKQebh4ZobCoMuPDRJqMjOii1l4hEXTAZSfRxON5EJs6sSTk6Mx%2FP7GLbYwJScRIY%2F8a1DZFbDiCI4qSq7uOSoFbVB2ev1iEoWezQ5FR3JOWhfNN4Qu0E3%2FLX%2BX1RwIcJLkD6gBbskCIIvKsOefaQ1cAuAEo6i%2B93hRMt4dhBjWroliDzwvd%2FAtbVE7vp%2F6jVyagv%2BQF0B3To3YNUD4bVTFuYwB%2BUTa5L%2BEjybHpsUhlFHDbbUwa%2FlX7TKaY0kjiiaW5u9Y%2BxUdoZCoScy7ODdgo3DtByp1C6oUYJaQn33CqbjBUetM3%2FVD14fRdPGxXEr2CzwBffwLUTsOp61dl1M9KAT6kVyrJTw3fnCRkWqJCgMo6DWy8T5pD%2F71cUmqSlmR9s8jcxSpFxGFGjkp8DfQvVqaPsmK1GDMJ%2Fi%2Br0GOqUBWGBoe2wiMGS%2Brnnkzs%2B1%2BTxtJOfSdTcxN%2FM2Wb1qv5y9rSYVzrqJ9WrJ1jSrF4xsV1AIv8oTfYnbsmyyrQ5g%2BQXSEI0h%2FlyL834aO%2Bz2WR4aiPEa0a3m%2FtTXvQaTRq76czqRH%2B%2Bf41a6%2BNNJMlHRpYKPfP5LOU0q90yZ3PgpMi2lpJ9JeLhriFI84XAzoeKlHD9wA3hIXxWlUxcu3Vt9G6IXnWa7&X-Amz-Signature=ca90619c34ea1d96144f24f5d161dc46d56dca0e7e4578adcb2f48c236824abe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVPDULG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDBzhcy%2Bkt7zkpAu2A3uHfLHtHXcaybdK9Qe4bmF9L%2BqAIgbx28g69FBqk%2Fh6b3cWkFhFeH3sDQNip%2FbPKQAe3ZoMoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEnHzObWWUaaFftVbCrcAwLiz%2F98vTN7sfGVAoqa5At1TT5Q89j%2FXBymV0fe3KGQ5SQHzvRKud6LqRpDWizSA7zoVsz1GAXPBRlxTkIO0Hr6q3%2FAya234rh7CpTLMJmg9mZZBLNBz%2FjU7NnANqV1AM%2FV91ZxId09yN3ABNA2%2FIiXXEQhHPQlwU1rjSHh9KZxfZouYL6uVzhDQvQNp4VxNOGfmGiE%2BdrUQA9kZwqpk061p3fKQebh4ZobCoMuPDRJqMjOii1l4hEXTAZSfRxON5EJs6sSTk6Mx%2FP7GLbYwJScRIY%2F8a1DZFbDiCI4qSq7uOSoFbVB2ev1iEoWezQ5FR3JOWhfNN4Qu0E3%2FLX%2BX1RwIcJLkD6gBbskCIIvKsOefaQ1cAuAEo6i%2B93hRMt4dhBjWroliDzwvd%2FAtbVE7vp%2F6jVyagv%2BQF0B3To3YNUD4bVTFuYwB%2BUTa5L%2BEjybHpsUhlFHDbbUwa%2FlX7TKaY0kjiiaW5u9Y%2BxUdoZCoScy7ODdgo3DtByp1C6oUYJaQn33CqbjBUetM3%2FVD14fRdPGxXEr2CzwBffwLUTsOp61dl1M9KAT6kVyrJTw3fnCRkWqJCgMo6DWy8T5pD%2F71cUmqSlmR9s8jcxSpFxGFGjkp8DfQvVqaPsmK1GDMJ%2Fi%2Br0GOqUBWGBoe2wiMGS%2Brnnkzs%2B1%2BTxtJOfSdTcxN%2FM2Wb1qv5y9rSYVzrqJ9WrJ1jSrF4xsV1AIv8oTfYnbsmyyrQ5g%2BQXSEI0h%2FlyL834aO%2Bz2WR4aiPEa0a3m%2FtTXvQaTRq76czqRH%2B%2Bf41a6%2BNNJMlHRpYKPfP5LOU0q90yZ3PgpMi2lpJ9JeLhriFI84XAzoeKlHD9wA3hIXxWlUxcu3Vt9G6IXnWa7&X-Amz-Signature=5f26cb62d4b18dc817085dc6daea4c171d16b8442c2350239d4734576c35cff7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVPDULG%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDBzhcy%2Bkt7zkpAu2A3uHfLHtHXcaybdK9Qe4bmF9L%2BqAIgbx28g69FBqk%2Fh6b3cWkFhFeH3sDQNip%2FbPKQAe3ZoMoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEnHzObWWUaaFftVbCrcAwLiz%2F98vTN7sfGVAoqa5At1TT5Q89j%2FXBymV0fe3KGQ5SQHzvRKud6LqRpDWizSA7zoVsz1GAXPBRlxTkIO0Hr6q3%2FAya234rh7CpTLMJmg9mZZBLNBz%2FjU7NnANqV1AM%2FV91ZxId09yN3ABNA2%2FIiXXEQhHPQlwU1rjSHh9KZxfZouYL6uVzhDQvQNp4VxNOGfmGiE%2BdrUQA9kZwqpk061p3fKQebh4ZobCoMuPDRJqMjOii1l4hEXTAZSfRxON5EJs6sSTk6Mx%2FP7GLbYwJScRIY%2F8a1DZFbDiCI4qSq7uOSoFbVB2ev1iEoWezQ5FR3JOWhfNN4Qu0E3%2FLX%2BX1RwIcJLkD6gBbskCIIvKsOefaQ1cAuAEo6i%2B93hRMt4dhBjWroliDzwvd%2FAtbVE7vp%2F6jVyagv%2BQF0B3To3YNUD4bVTFuYwB%2BUTa5L%2BEjybHpsUhlFHDbbUwa%2FlX7TKaY0kjiiaW5u9Y%2BxUdoZCoScy7ODdgo3DtByp1C6oUYJaQn33CqbjBUetM3%2FVD14fRdPGxXEr2CzwBffwLUTsOp61dl1M9KAT6kVyrJTw3fnCRkWqJCgMo6DWy8T5pD%2F71cUmqSlmR9s8jcxSpFxGFGjkp8DfQvVqaPsmK1GDMJ%2Fi%2Br0GOqUBWGBoe2wiMGS%2Brnnkzs%2B1%2BTxtJOfSdTcxN%2FM2Wb1qv5y9rSYVzrqJ9WrJ1jSrF4xsV1AIv8oTfYnbsmyyrQ5g%2BQXSEI0h%2FlyL834aO%2Bz2WR4aiPEa0a3m%2FtTXvQaTRq76czqRH%2B%2Bf41a6%2BNNJMlHRpYKPfP5LOU0q90yZ3PgpMi2lpJ9JeLhriFI84XAzoeKlHD9wA3hIXxWlUxcu3Vt9G6IXnWa7&X-Amz-Signature=0b76f8c7463cd321a2847e5ebd03b0c9d2195ac0b6719fa586c134e2e78eaf54&X-Amz-SignedHeaders=host&x-id=GetObject)
