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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3PSFXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FBOYGoQSckj8MW6tFG3KjUWumZkclULNBlE1xZyM7lAiAymfrKRgOgfgj34ovmEeP6dLmag03COHZ4XG0XblGijyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg7MMoO5TReayVb2KtwD5A2OkaUXR8zwzF7NCtJwNNkp98rBXHedEt4Lwg0z%2FoWGFx2TvZh8BpDBa1N8fjR4%2FpyM8gtsJfeBkY9wsjvM5DfvOP%2FBCL8WUbac%2BVTMBMoXIZ1cOY1Ga1CX29uzavcEIzOPvenlxHnAU5hccjiWCAgSidnW2NP9MHXI6Kg8LiAYprmtvr258WFLQF4uabxBUm1rlv5Y5v4%2BLB3cIXOIcI4EGRoCWxCRPv4ZWKNHoCIC2oJ%2BPPg61EwOtvr630PQLYLNEbfrnX9b1MXmS6L4g%2BoS4zagmoteN7Z9jGmj88CsO8pDsYIF16vluxydz11qQ3Fwnk2v5AYbLDKFJ5A7HYhfl6o5E3XUyXFeeN8ELu8iZmWv9JUqrJ%2Bkh9ipH3nMdOMLBZcTnFfvo23D1vOwFADhXQpr9GoBI3DBNZhiaBJvElqtdoVdv7In7C0z91F2NqUpY1%2Ff3y3jhDJckrlZi0LiKo%2BfAKiyNQqrVD%2FvjKd8asPuDNC27Itrb%2BAGZgmJa01a%2BdZkN%2BT55BoUObfQXC1Y7hkMHZ99PXn9XaZw0ecJCCX6LqLy%2BFL9aT%2BfJBppgq1rvHYOqvrCNWHZFYUoiEI2aQ1x93J7SWqhb2puk2XtqsW%2BxysFEponkUgw9YbQvgY6pgFVK6LgmKqa2LXtz849RkyFfrw%2FOtX7UXHN6L363RL6K0PagiEsYbM7RNh0HZLNS2BamG8jpkFg9RCISLD4XeEIvOqu0Pa8%2BrdU8tLG%2BUUubn1XM4XOj4gzM5SM%2BsGpagkr3IBua%2FwiZ0V8CR%2FEpxC04jdjAcPyOsniwMQzhpk8bcp%2BlpHuekmOt2XWRdBDt1qRjg2mAcTVkzEtFuZW0qrpizQaQiIi&X-Amz-Signature=ec3b80040d7149810ae02475d755415ab89faed74d1cec39d777d1c237855b13&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3PSFXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FBOYGoQSckj8MW6tFG3KjUWumZkclULNBlE1xZyM7lAiAymfrKRgOgfgj34ovmEeP6dLmag03COHZ4XG0XblGijyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg7MMoO5TReayVb2KtwD5A2OkaUXR8zwzF7NCtJwNNkp98rBXHedEt4Lwg0z%2FoWGFx2TvZh8BpDBa1N8fjR4%2FpyM8gtsJfeBkY9wsjvM5DfvOP%2FBCL8WUbac%2BVTMBMoXIZ1cOY1Ga1CX29uzavcEIzOPvenlxHnAU5hccjiWCAgSidnW2NP9MHXI6Kg8LiAYprmtvr258WFLQF4uabxBUm1rlv5Y5v4%2BLB3cIXOIcI4EGRoCWxCRPv4ZWKNHoCIC2oJ%2BPPg61EwOtvr630PQLYLNEbfrnX9b1MXmS6L4g%2BoS4zagmoteN7Z9jGmj88CsO8pDsYIF16vluxydz11qQ3Fwnk2v5AYbLDKFJ5A7HYhfl6o5E3XUyXFeeN8ELu8iZmWv9JUqrJ%2Bkh9ipH3nMdOMLBZcTnFfvo23D1vOwFADhXQpr9GoBI3DBNZhiaBJvElqtdoVdv7In7C0z91F2NqUpY1%2Ff3y3jhDJckrlZi0LiKo%2BfAKiyNQqrVD%2FvjKd8asPuDNC27Itrb%2BAGZgmJa01a%2BdZkN%2BT55BoUObfQXC1Y7hkMHZ99PXn9XaZw0ecJCCX6LqLy%2BFL9aT%2BfJBppgq1rvHYOqvrCNWHZFYUoiEI2aQ1x93J7SWqhb2puk2XtqsW%2BxysFEponkUgw9YbQvgY6pgFVK6LgmKqa2LXtz849RkyFfrw%2FOtX7UXHN6L363RL6K0PagiEsYbM7RNh0HZLNS2BamG8jpkFg9RCISLD4XeEIvOqu0Pa8%2BrdU8tLG%2BUUubn1XM4XOj4gzM5SM%2BsGpagkr3IBua%2FwiZ0V8CR%2FEpxC04jdjAcPyOsniwMQzhpk8bcp%2BlpHuekmOt2XWRdBDt1qRjg2mAcTVkzEtFuZW0qrpizQaQiIi&X-Amz-Signature=a342bec2e9f50b1babfe8b0558c019ee3b52a60fae991ef7794058c6a565c95a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3PSFXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FBOYGoQSckj8MW6tFG3KjUWumZkclULNBlE1xZyM7lAiAymfrKRgOgfgj34ovmEeP6dLmag03COHZ4XG0XblGijyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg7MMoO5TReayVb2KtwD5A2OkaUXR8zwzF7NCtJwNNkp98rBXHedEt4Lwg0z%2FoWGFx2TvZh8BpDBa1N8fjR4%2FpyM8gtsJfeBkY9wsjvM5DfvOP%2FBCL8WUbac%2BVTMBMoXIZ1cOY1Ga1CX29uzavcEIzOPvenlxHnAU5hccjiWCAgSidnW2NP9MHXI6Kg8LiAYprmtvr258WFLQF4uabxBUm1rlv5Y5v4%2BLB3cIXOIcI4EGRoCWxCRPv4ZWKNHoCIC2oJ%2BPPg61EwOtvr630PQLYLNEbfrnX9b1MXmS6L4g%2BoS4zagmoteN7Z9jGmj88CsO8pDsYIF16vluxydz11qQ3Fwnk2v5AYbLDKFJ5A7HYhfl6o5E3XUyXFeeN8ELu8iZmWv9JUqrJ%2Bkh9ipH3nMdOMLBZcTnFfvo23D1vOwFADhXQpr9GoBI3DBNZhiaBJvElqtdoVdv7In7C0z91F2NqUpY1%2Ff3y3jhDJckrlZi0LiKo%2BfAKiyNQqrVD%2FvjKd8asPuDNC27Itrb%2BAGZgmJa01a%2BdZkN%2BT55BoUObfQXC1Y7hkMHZ99PXn9XaZw0ecJCCX6LqLy%2BFL9aT%2BfJBppgq1rvHYOqvrCNWHZFYUoiEI2aQ1x93J7SWqhb2puk2XtqsW%2BxysFEponkUgw9YbQvgY6pgFVK6LgmKqa2LXtz849RkyFfrw%2FOtX7UXHN6L363RL6K0PagiEsYbM7RNh0HZLNS2BamG8jpkFg9RCISLD4XeEIvOqu0Pa8%2BrdU8tLG%2BUUubn1XM4XOj4gzM5SM%2BsGpagkr3IBua%2FwiZ0V8CR%2FEpxC04jdjAcPyOsniwMQzhpk8bcp%2BlpHuekmOt2XWRdBDt1qRjg2mAcTVkzEtFuZW0qrpizQaQiIi&X-Amz-Signature=18fc258c925530316fb55bf6e56155be551ec2818522d2ba80e42c7cc94c130c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3PSFXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FBOYGoQSckj8MW6tFG3KjUWumZkclULNBlE1xZyM7lAiAymfrKRgOgfgj34ovmEeP6dLmag03COHZ4XG0XblGijyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg7MMoO5TReayVb2KtwD5A2OkaUXR8zwzF7NCtJwNNkp98rBXHedEt4Lwg0z%2FoWGFx2TvZh8BpDBa1N8fjR4%2FpyM8gtsJfeBkY9wsjvM5DfvOP%2FBCL8WUbac%2BVTMBMoXIZ1cOY1Ga1CX29uzavcEIzOPvenlxHnAU5hccjiWCAgSidnW2NP9MHXI6Kg8LiAYprmtvr258WFLQF4uabxBUm1rlv5Y5v4%2BLB3cIXOIcI4EGRoCWxCRPv4ZWKNHoCIC2oJ%2BPPg61EwOtvr630PQLYLNEbfrnX9b1MXmS6L4g%2BoS4zagmoteN7Z9jGmj88CsO8pDsYIF16vluxydz11qQ3Fwnk2v5AYbLDKFJ5A7HYhfl6o5E3XUyXFeeN8ELu8iZmWv9JUqrJ%2Bkh9ipH3nMdOMLBZcTnFfvo23D1vOwFADhXQpr9GoBI3DBNZhiaBJvElqtdoVdv7In7C0z91F2NqUpY1%2Ff3y3jhDJckrlZi0LiKo%2BfAKiyNQqrVD%2FvjKd8asPuDNC27Itrb%2BAGZgmJa01a%2BdZkN%2BT55BoUObfQXC1Y7hkMHZ99PXn9XaZw0ecJCCX6LqLy%2BFL9aT%2BfJBppgq1rvHYOqvrCNWHZFYUoiEI2aQ1x93J7SWqhb2puk2XtqsW%2BxysFEponkUgw9YbQvgY6pgFVK6LgmKqa2LXtz849RkyFfrw%2FOtX7UXHN6L363RL6K0PagiEsYbM7RNh0HZLNS2BamG8jpkFg9RCISLD4XeEIvOqu0Pa8%2BrdU8tLG%2BUUubn1XM4XOj4gzM5SM%2BsGpagkr3IBua%2FwiZ0V8CR%2FEpxC04jdjAcPyOsniwMQzhpk8bcp%2BlpHuekmOt2XWRdBDt1qRjg2mAcTVkzEtFuZW0qrpizQaQiIi&X-Amz-Signature=75b02de01de4b1a58d8cc898232599e007394a38f8ad5d63f819b91b755f0a89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3PSFXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FBOYGoQSckj8MW6tFG3KjUWumZkclULNBlE1xZyM7lAiAymfrKRgOgfgj34ovmEeP6dLmag03COHZ4XG0XblGijyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg7MMoO5TReayVb2KtwD5A2OkaUXR8zwzF7NCtJwNNkp98rBXHedEt4Lwg0z%2FoWGFx2TvZh8BpDBa1N8fjR4%2FpyM8gtsJfeBkY9wsjvM5DfvOP%2FBCL8WUbac%2BVTMBMoXIZ1cOY1Ga1CX29uzavcEIzOPvenlxHnAU5hccjiWCAgSidnW2NP9MHXI6Kg8LiAYprmtvr258WFLQF4uabxBUm1rlv5Y5v4%2BLB3cIXOIcI4EGRoCWxCRPv4ZWKNHoCIC2oJ%2BPPg61EwOtvr630PQLYLNEbfrnX9b1MXmS6L4g%2BoS4zagmoteN7Z9jGmj88CsO8pDsYIF16vluxydz11qQ3Fwnk2v5AYbLDKFJ5A7HYhfl6o5E3XUyXFeeN8ELu8iZmWv9JUqrJ%2Bkh9ipH3nMdOMLBZcTnFfvo23D1vOwFADhXQpr9GoBI3DBNZhiaBJvElqtdoVdv7In7C0z91F2NqUpY1%2Ff3y3jhDJckrlZi0LiKo%2BfAKiyNQqrVD%2FvjKd8asPuDNC27Itrb%2BAGZgmJa01a%2BdZkN%2BT55BoUObfQXC1Y7hkMHZ99PXn9XaZw0ecJCCX6LqLy%2BFL9aT%2BfJBppgq1rvHYOqvrCNWHZFYUoiEI2aQ1x93J7SWqhb2puk2XtqsW%2BxysFEponkUgw9YbQvgY6pgFVK6LgmKqa2LXtz849RkyFfrw%2FOtX7UXHN6L363RL6K0PagiEsYbM7RNh0HZLNS2BamG8jpkFg9RCISLD4XeEIvOqu0Pa8%2BrdU8tLG%2BUUubn1XM4XOj4gzM5SM%2BsGpagkr3IBua%2FwiZ0V8CR%2FEpxC04jdjAcPyOsniwMQzhpk8bcp%2BlpHuekmOt2XWRdBDt1qRjg2mAcTVkzEtFuZW0qrpizQaQiIi&X-Amz-Signature=f71d200c8efb36443460ad1094ba968516e3109e9f7a3384112873cce5b4087e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3PSFXR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T121355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FBOYGoQSckj8MW6tFG3KjUWumZkclULNBlE1xZyM7lAiAymfrKRgOgfgj34ovmEeP6dLmag03COHZ4XG0XblGijyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjg7MMoO5TReayVb2KtwD5A2OkaUXR8zwzF7NCtJwNNkp98rBXHedEt4Lwg0z%2FoWGFx2TvZh8BpDBa1N8fjR4%2FpyM8gtsJfeBkY9wsjvM5DfvOP%2FBCL8WUbac%2BVTMBMoXIZ1cOY1Ga1CX29uzavcEIzOPvenlxHnAU5hccjiWCAgSidnW2NP9MHXI6Kg8LiAYprmtvr258WFLQF4uabxBUm1rlv5Y5v4%2BLB3cIXOIcI4EGRoCWxCRPv4ZWKNHoCIC2oJ%2BPPg61EwOtvr630PQLYLNEbfrnX9b1MXmS6L4g%2BoS4zagmoteN7Z9jGmj88CsO8pDsYIF16vluxydz11qQ3Fwnk2v5AYbLDKFJ5A7HYhfl6o5E3XUyXFeeN8ELu8iZmWv9JUqrJ%2Bkh9ipH3nMdOMLBZcTnFfvo23D1vOwFADhXQpr9GoBI3DBNZhiaBJvElqtdoVdv7In7C0z91F2NqUpY1%2Ff3y3jhDJckrlZi0LiKo%2BfAKiyNQqrVD%2FvjKd8asPuDNC27Itrb%2BAGZgmJa01a%2BdZkN%2BT55BoUObfQXC1Y7hkMHZ99PXn9XaZw0ecJCCX6LqLy%2BFL9aT%2BfJBppgq1rvHYOqvrCNWHZFYUoiEI2aQ1x93J7SWqhb2puk2XtqsW%2BxysFEponkUgw9YbQvgY6pgFVK6LgmKqa2LXtz849RkyFfrw%2FOtX7UXHN6L363RL6K0PagiEsYbM7RNh0HZLNS2BamG8jpkFg9RCISLD4XeEIvOqu0Pa8%2BrdU8tLG%2BUUubn1XM4XOj4gzM5SM%2BsGpagkr3IBua%2FwiZ0V8CR%2FEpxC04jdjAcPyOsniwMQzhpk8bcp%2BlpHuekmOt2XWRdBDt1qRjg2mAcTVkzEtFuZW0qrpizQaQiIi&X-Amz-Signature=e2213837334b60fb0759928dcd237bb6bba39f7eccd13cc575b7eac7d5586de8&X-Amz-SignedHeaders=host&x-id=GetObject)
