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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=cce82b9426f20ce89260e2389a0741acfb2878ed65da87b16cc32eb667099c03&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=3b79fdd578b9b773a649f17eee0bce2a6c532da7d58fa09f7c8ff9c7cad107b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=923985d84deebc74a6b85a890117910fb2e51cce5e96b6c6d2edb414e609e53d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=3c5dc4d742145e4492206f9e75206aed9514668175cfee33be265689442b86a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=d4346c5f750c1dafc9df91faebea20afa4645acd5bc01a3a3b8bdae11200db81&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=b3d3054422076bde6a2904d3dab92baed76b644093207a50214c123fac34dfc0&X-Amz-SignedHeaders=host&x-id=GetObject)
