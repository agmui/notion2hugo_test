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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLN6ATP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJL5H21%2BI4fMiIqQRt5EIaxFaCOo8eQYP7QNMav6gRmQIhAMXOW0MMNWJPQ5%2Bjq66EKOr26VAB3zqkBdjz8IUOGEglKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNmZY9ZFOaU3xxxIAq3ANdWNqZu1xg7aamC6FRBoWWPRS%2B1HXJIhw8REPY2%2BwKC1xWCzhOpaDiiOe%2FOTTEOg7H3Y9m6gmYpQIVQ16aeSNX3FvPOmVG2PtREJEKzo%2FJqL3azsv3TGXhKqfuUmoff0BUkkXSdZ2LlNDh42H1p%2B9h0xgJfolOyoQwqyVnRtYbCFWYBM7CdRaYxsGsZNuG1qmkjDE2facCAPZu7jPIXJ%2BripHIHcJfJnWP70ifBEEgNFDsgVlwwqwENEUelq7BCucC04RptHtNzWU5WbTv%2B8IPJPapQzPQjdShXXNw9H%2BKgjD5pEavC6hdk49qd2r7NBDQhHyouY8MqM9PHwX2mm0w2trWIv4oExsnlZQ9TKBAh9ihr9%2FE%2B5lLkWvbkfrylRd6lDrCIYGOBMAG%2FX3Ukr03352roupJgIr%2BhjJVSxnThUMTxYc9dEvzhTM7TyDlakgrsnRHnrCHDk5Hidv92ara%2BIjWxFUnhDQI%2B6JnUZWHmZxZ8uTkVPkE7LAJyPuX4ohmjlSMRY95pgFXUEFBy%2FbebyzM6RqegX78sPoZHp8YOWusoniynIu832A5mEG5JBBoHZkT%2FKDtdHcitReWKZBACKTmvySytsf8e6qIFB0WYCuTqWpw5lijQPtS0DCelfW%2FBjqkAVTSR%2Fkzcsr0Vm7wkUf2QHb88yrzBrLj%2BBdfiz%2FzwXMSvLeHkUDkOuAzTPscAjelphrvCqdiQ6SWTQJxob6vvllWPPB0VSfMMuoPwIcs%2B9RSQliBDu%2F0AibLsmPNhLEWuV966qdiXJiSSTAxZPxNPuuoOxxA3letutc%2FIg4HfUVVEcWABz0JeVMdtF95nhYx%2Brgo82rafdSdi8Y%2BVAT9yKEhDupd&X-Amz-Signature=8887b3abf881f2abd25b5b07c46c9a7c60b1b9e84f8e88b9f801725b57339831&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLN6ATP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJL5H21%2BI4fMiIqQRt5EIaxFaCOo8eQYP7QNMav6gRmQIhAMXOW0MMNWJPQ5%2Bjq66EKOr26VAB3zqkBdjz8IUOGEglKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNmZY9ZFOaU3xxxIAq3ANdWNqZu1xg7aamC6FRBoWWPRS%2B1HXJIhw8REPY2%2BwKC1xWCzhOpaDiiOe%2FOTTEOg7H3Y9m6gmYpQIVQ16aeSNX3FvPOmVG2PtREJEKzo%2FJqL3azsv3TGXhKqfuUmoff0BUkkXSdZ2LlNDh42H1p%2B9h0xgJfolOyoQwqyVnRtYbCFWYBM7CdRaYxsGsZNuG1qmkjDE2facCAPZu7jPIXJ%2BripHIHcJfJnWP70ifBEEgNFDsgVlwwqwENEUelq7BCucC04RptHtNzWU5WbTv%2B8IPJPapQzPQjdShXXNw9H%2BKgjD5pEavC6hdk49qd2r7NBDQhHyouY8MqM9PHwX2mm0w2trWIv4oExsnlZQ9TKBAh9ihr9%2FE%2B5lLkWvbkfrylRd6lDrCIYGOBMAG%2FX3Ukr03352roupJgIr%2BhjJVSxnThUMTxYc9dEvzhTM7TyDlakgrsnRHnrCHDk5Hidv92ara%2BIjWxFUnhDQI%2B6JnUZWHmZxZ8uTkVPkE7LAJyPuX4ohmjlSMRY95pgFXUEFBy%2FbebyzM6RqegX78sPoZHp8YOWusoniynIu832A5mEG5JBBoHZkT%2FKDtdHcitReWKZBACKTmvySytsf8e6qIFB0WYCuTqWpw5lijQPtS0DCelfW%2FBjqkAVTSR%2Fkzcsr0Vm7wkUf2QHb88yrzBrLj%2BBdfiz%2FzwXMSvLeHkUDkOuAzTPscAjelphrvCqdiQ6SWTQJxob6vvllWPPB0VSfMMuoPwIcs%2B9RSQliBDu%2F0AibLsmPNhLEWuV966qdiXJiSSTAxZPxNPuuoOxxA3letutc%2FIg4HfUVVEcWABz0JeVMdtF95nhYx%2Brgo82rafdSdi8Y%2BVAT9yKEhDupd&X-Amz-Signature=f73882fa2e4f04e928f7b659f672570151f52bf0686af586df00f60132f7f5cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLN6ATP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJL5H21%2BI4fMiIqQRt5EIaxFaCOo8eQYP7QNMav6gRmQIhAMXOW0MMNWJPQ5%2Bjq66EKOr26VAB3zqkBdjz8IUOGEglKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNmZY9ZFOaU3xxxIAq3ANdWNqZu1xg7aamC6FRBoWWPRS%2B1HXJIhw8REPY2%2BwKC1xWCzhOpaDiiOe%2FOTTEOg7H3Y9m6gmYpQIVQ16aeSNX3FvPOmVG2PtREJEKzo%2FJqL3azsv3TGXhKqfuUmoff0BUkkXSdZ2LlNDh42H1p%2B9h0xgJfolOyoQwqyVnRtYbCFWYBM7CdRaYxsGsZNuG1qmkjDE2facCAPZu7jPIXJ%2BripHIHcJfJnWP70ifBEEgNFDsgVlwwqwENEUelq7BCucC04RptHtNzWU5WbTv%2B8IPJPapQzPQjdShXXNw9H%2BKgjD5pEavC6hdk49qd2r7NBDQhHyouY8MqM9PHwX2mm0w2trWIv4oExsnlZQ9TKBAh9ihr9%2FE%2B5lLkWvbkfrylRd6lDrCIYGOBMAG%2FX3Ukr03352roupJgIr%2BhjJVSxnThUMTxYc9dEvzhTM7TyDlakgrsnRHnrCHDk5Hidv92ara%2BIjWxFUnhDQI%2B6JnUZWHmZxZ8uTkVPkE7LAJyPuX4ohmjlSMRY95pgFXUEFBy%2FbebyzM6RqegX78sPoZHp8YOWusoniynIu832A5mEG5JBBoHZkT%2FKDtdHcitReWKZBACKTmvySytsf8e6qIFB0WYCuTqWpw5lijQPtS0DCelfW%2FBjqkAVTSR%2Fkzcsr0Vm7wkUf2QHb88yrzBrLj%2BBdfiz%2FzwXMSvLeHkUDkOuAzTPscAjelphrvCqdiQ6SWTQJxob6vvllWPPB0VSfMMuoPwIcs%2B9RSQliBDu%2F0AibLsmPNhLEWuV966qdiXJiSSTAxZPxNPuuoOxxA3letutc%2FIg4HfUVVEcWABz0JeVMdtF95nhYx%2Brgo82rafdSdi8Y%2BVAT9yKEhDupd&X-Amz-Signature=ccd21d90629adb07dd39e3f27d268f43ef963a0c3fc6ad43f8622a1cb798fcb9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLN6ATP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJL5H21%2BI4fMiIqQRt5EIaxFaCOo8eQYP7QNMav6gRmQIhAMXOW0MMNWJPQ5%2Bjq66EKOr26VAB3zqkBdjz8IUOGEglKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNmZY9ZFOaU3xxxIAq3ANdWNqZu1xg7aamC6FRBoWWPRS%2B1HXJIhw8REPY2%2BwKC1xWCzhOpaDiiOe%2FOTTEOg7H3Y9m6gmYpQIVQ16aeSNX3FvPOmVG2PtREJEKzo%2FJqL3azsv3TGXhKqfuUmoff0BUkkXSdZ2LlNDh42H1p%2B9h0xgJfolOyoQwqyVnRtYbCFWYBM7CdRaYxsGsZNuG1qmkjDE2facCAPZu7jPIXJ%2BripHIHcJfJnWP70ifBEEgNFDsgVlwwqwENEUelq7BCucC04RptHtNzWU5WbTv%2B8IPJPapQzPQjdShXXNw9H%2BKgjD5pEavC6hdk49qd2r7NBDQhHyouY8MqM9PHwX2mm0w2trWIv4oExsnlZQ9TKBAh9ihr9%2FE%2B5lLkWvbkfrylRd6lDrCIYGOBMAG%2FX3Ukr03352roupJgIr%2BhjJVSxnThUMTxYc9dEvzhTM7TyDlakgrsnRHnrCHDk5Hidv92ara%2BIjWxFUnhDQI%2B6JnUZWHmZxZ8uTkVPkE7LAJyPuX4ohmjlSMRY95pgFXUEFBy%2FbebyzM6RqegX78sPoZHp8YOWusoniynIu832A5mEG5JBBoHZkT%2FKDtdHcitReWKZBACKTmvySytsf8e6qIFB0WYCuTqWpw5lijQPtS0DCelfW%2FBjqkAVTSR%2Fkzcsr0Vm7wkUf2QHb88yrzBrLj%2BBdfiz%2FzwXMSvLeHkUDkOuAzTPscAjelphrvCqdiQ6SWTQJxob6vvllWPPB0VSfMMuoPwIcs%2B9RSQliBDu%2F0AibLsmPNhLEWuV966qdiXJiSSTAxZPxNPuuoOxxA3letutc%2FIg4HfUVVEcWABz0JeVMdtF95nhYx%2Brgo82rafdSdi8Y%2BVAT9yKEhDupd&X-Amz-Signature=855990739b69752145cd9dca2a377c08e8e00e3686404999c936b1bffdffbfde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLN6ATP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJL5H21%2BI4fMiIqQRt5EIaxFaCOo8eQYP7QNMav6gRmQIhAMXOW0MMNWJPQ5%2Bjq66EKOr26VAB3zqkBdjz8IUOGEglKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNmZY9ZFOaU3xxxIAq3ANdWNqZu1xg7aamC6FRBoWWPRS%2B1HXJIhw8REPY2%2BwKC1xWCzhOpaDiiOe%2FOTTEOg7H3Y9m6gmYpQIVQ16aeSNX3FvPOmVG2PtREJEKzo%2FJqL3azsv3TGXhKqfuUmoff0BUkkXSdZ2LlNDh42H1p%2B9h0xgJfolOyoQwqyVnRtYbCFWYBM7CdRaYxsGsZNuG1qmkjDE2facCAPZu7jPIXJ%2BripHIHcJfJnWP70ifBEEgNFDsgVlwwqwENEUelq7BCucC04RptHtNzWU5WbTv%2B8IPJPapQzPQjdShXXNw9H%2BKgjD5pEavC6hdk49qd2r7NBDQhHyouY8MqM9PHwX2mm0w2trWIv4oExsnlZQ9TKBAh9ihr9%2FE%2B5lLkWvbkfrylRd6lDrCIYGOBMAG%2FX3Ukr03352roupJgIr%2BhjJVSxnThUMTxYc9dEvzhTM7TyDlakgrsnRHnrCHDk5Hidv92ara%2BIjWxFUnhDQI%2B6JnUZWHmZxZ8uTkVPkE7LAJyPuX4ohmjlSMRY95pgFXUEFBy%2FbebyzM6RqegX78sPoZHp8YOWusoniynIu832A5mEG5JBBoHZkT%2FKDtdHcitReWKZBACKTmvySytsf8e6qIFB0WYCuTqWpw5lijQPtS0DCelfW%2FBjqkAVTSR%2Fkzcsr0Vm7wkUf2QHb88yrzBrLj%2BBdfiz%2FzwXMSvLeHkUDkOuAzTPscAjelphrvCqdiQ6SWTQJxob6vvllWPPB0VSfMMuoPwIcs%2B9RSQliBDu%2F0AibLsmPNhLEWuV966qdiXJiSSTAxZPxNPuuoOxxA3letutc%2FIg4HfUVVEcWABz0JeVMdtF95nhYx%2Brgo82rafdSdi8Y%2BVAT9yKEhDupd&X-Amz-Signature=1d3516546fee4d6ff081bb089b7ec24c563b056b47533ac9bd87ea78187ca02c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLN6ATP%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJL5H21%2BI4fMiIqQRt5EIaxFaCOo8eQYP7QNMav6gRmQIhAMXOW0MMNWJPQ5%2Bjq66EKOr26VAB3zqkBdjz8IUOGEglKv8DCBsQABoMNjM3NDIzMTgzODA1IgwNmZY9ZFOaU3xxxIAq3ANdWNqZu1xg7aamC6FRBoWWPRS%2B1HXJIhw8REPY2%2BwKC1xWCzhOpaDiiOe%2FOTTEOg7H3Y9m6gmYpQIVQ16aeSNX3FvPOmVG2PtREJEKzo%2FJqL3azsv3TGXhKqfuUmoff0BUkkXSdZ2LlNDh42H1p%2B9h0xgJfolOyoQwqyVnRtYbCFWYBM7CdRaYxsGsZNuG1qmkjDE2facCAPZu7jPIXJ%2BripHIHcJfJnWP70ifBEEgNFDsgVlwwqwENEUelq7BCucC04RptHtNzWU5WbTv%2B8IPJPapQzPQjdShXXNw9H%2BKgjD5pEavC6hdk49qd2r7NBDQhHyouY8MqM9PHwX2mm0w2trWIv4oExsnlZQ9TKBAh9ihr9%2FE%2B5lLkWvbkfrylRd6lDrCIYGOBMAG%2FX3Ukr03352roupJgIr%2BhjJVSxnThUMTxYc9dEvzhTM7TyDlakgrsnRHnrCHDk5Hidv92ara%2BIjWxFUnhDQI%2B6JnUZWHmZxZ8uTkVPkE7LAJyPuX4ohmjlSMRY95pgFXUEFBy%2FbebyzM6RqegX78sPoZHp8YOWusoniynIu832A5mEG5JBBoHZkT%2FKDtdHcitReWKZBACKTmvySytsf8e6qIFB0WYCuTqWpw5lijQPtS0DCelfW%2FBjqkAVTSR%2Fkzcsr0Vm7wkUf2QHb88yrzBrLj%2BBdfiz%2FzwXMSvLeHkUDkOuAzTPscAjelphrvCqdiQ6SWTQJxob6vvllWPPB0VSfMMuoPwIcs%2B9RSQliBDu%2F0AibLsmPNhLEWuV966qdiXJiSSTAxZPxNPuuoOxxA3letutc%2FIg4HfUVVEcWABz0JeVMdtF95nhYx%2Brgo82rafdSdi8Y%2BVAT9yKEhDupd&X-Amz-Signature=6ba142278aca6f15c3b5eab7eff803cb9475d8749a8d197dedc670df46ab2880&X-Amz-SignedHeaders=host&x-id=GetObject)
