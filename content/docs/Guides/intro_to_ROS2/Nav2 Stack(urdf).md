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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3GUMRP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAEWA%2BRbH0dltKhPZ5ZnImOpgY5ag3r5Pa4GwqopUemQAiEAyTpaovXjvzkEMzGb%2Bsbt1RHKtOz%2Fxsq8rjWZQiAOVVoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCNn0165j4uOZ58sdCrcA%2FSisBMgNnRwx%2BgekMHclaRSopfrKxvOcQwayITgepuYjNWy%2FtrXtTpApmrAYimJVAXytw6YFu0mJE240p4lYjbUM9Oa1XzwCrhC7HHiG720tMxJkzsgSJbSZYRuXj5U3sR7sP%2Ftz9onBWi3jc0RJlLLI8d5%2BkpLGIZW5BhGJs%2FoyvxBn6M88ZlcFd5XIYG%2F5y39BZHnBSK2E1CaCwE9TAKxuXe4CoVbERUmfMEt5DTbPvj7ucRjRAyO0oUOFHikgxyvHaMeI%2Bpi2K2ON8gzuKMBsaI8c9fVSgo6Yqp8Nyt%2FAWVl3aa69ParRb%2F3TW%2BH6x%2FjgIK65DmcSZFGYqjVOZewZ1iakSlJTG1OCM62yaKz9UGP0B3%2BJgXFl3%2BNu%2FBoYgOipyZLkj5aregvSXpZ6aemcd7hQZ2Hql8n4yxnH6qHNNItwYpc91NwtB6p%2FisFGjX6T28DtHXALRYoaE9IwZrhGF8ppNBuLmhq39fGdhC%2Bwud8DQj%2FPLkXci1q7d6OLeo8K7LScABsIALWOWy9NPx7ZegmpVeGOwwHM1cz%2BOx91MmVX89zF7dWe5T52raY2%2F8pEKpRXh6DeCdhi5TH9ufVYwJG8xuvh%2B11H9gWgP%2BBtHsj410%2B3Z%2FUh99HMPmio8MGOqUBTi%2BitzQaaCkP8Wg5Xvya40RqGu139fVw68fHRKn8p2Qp%2FdyoVSH0M3lXGP3vwxwteiq64C0QCpQsuBaeCc6bh7PajTaWYq9U2vPed32P3oYfffH1P%2B%2BfesxrM6GlXRmFpKBuASXh3Ao51uzDTYu1ywhMhpDTU7lrmOpivQ1L0JHVpynSsYJwxzvzWpSI9yTgq0g4elXgKt%2BJ27j%2BDbWOfzVuApS7&X-Amz-Signature=44c08880026450a0a3aeab363f499f5342379aebb1e88bf018482e375f40371e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3GUMRP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAEWA%2BRbH0dltKhPZ5ZnImOpgY5ag3r5Pa4GwqopUemQAiEAyTpaovXjvzkEMzGb%2Bsbt1RHKtOz%2Fxsq8rjWZQiAOVVoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCNn0165j4uOZ58sdCrcA%2FSisBMgNnRwx%2BgekMHclaRSopfrKxvOcQwayITgepuYjNWy%2FtrXtTpApmrAYimJVAXytw6YFu0mJE240p4lYjbUM9Oa1XzwCrhC7HHiG720tMxJkzsgSJbSZYRuXj5U3sR7sP%2Ftz9onBWi3jc0RJlLLI8d5%2BkpLGIZW5BhGJs%2FoyvxBn6M88ZlcFd5XIYG%2F5y39BZHnBSK2E1CaCwE9TAKxuXe4CoVbERUmfMEt5DTbPvj7ucRjRAyO0oUOFHikgxyvHaMeI%2Bpi2K2ON8gzuKMBsaI8c9fVSgo6Yqp8Nyt%2FAWVl3aa69ParRb%2F3TW%2BH6x%2FjgIK65DmcSZFGYqjVOZewZ1iakSlJTG1OCM62yaKz9UGP0B3%2BJgXFl3%2BNu%2FBoYgOipyZLkj5aregvSXpZ6aemcd7hQZ2Hql8n4yxnH6qHNNItwYpc91NwtB6p%2FisFGjX6T28DtHXALRYoaE9IwZrhGF8ppNBuLmhq39fGdhC%2Bwud8DQj%2FPLkXci1q7d6OLeo8K7LScABsIALWOWy9NPx7ZegmpVeGOwwHM1cz%2BOx91MmVX89zF7dWe5T52raY2%2F8pEKpRXh6DeCdhi5TH9ufVYwJG8xuvh%2B11H9gWgP%2BBtHsj410%2B3Z%2FUh99HMPmio8MGOqUBTi%2BitzQaaCkP8Wg5Xvya40RqGu139fVw68fHRKn8p2Qp%2FdyoVSH0M3lXGP3vwxwteiq64C0QCpQsuBaeCc6bh7PajTaWYq9U2vPed32P3oYfffH1P%2B%2BfesxrM6GlXRmFpKBuASXh3Ao51uzDTYu1ywhMhpDTU7lrmOpivQ1L0JHVpynSsYJwxzvzWpSI9yTgq0g4elXgKt%2BJ27j%2BDbWOfzVuApS7&X-Amz-Signature=8027ed1d7bfd534690a4a4287abe34c854835f3b7368386c43b8fccbba9d825a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3GUMRP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAEWA%2BRbH0dltKhPZ5ZnImOpgY5ag3r5Pa4GwqopUemQAiEAyTpaovXjvzkEMzGb%2Bsbt1RHKtOz%2Fxsq8rjWZQiAOVVoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCNn0165j4uOZ58sdCrcA%2FSisBMgNnRwx%2BgekMHclaRSopfrKxvOcQwayITgepuYjNWy%2FtrXtTpApmrAYimJVAXytw6YFu0mJE240p4lYjbUM9Oa1XzwCrhC7HHiG720tMxJkzsgSJbSZYRuXj5U3sR7sP%2Ftz9onBWi3jc0RJlLLI8d5%2BkpLGIZW5BhGJs%2FoyvxBn6M88ZlcFd5XIYG%2F5y39BZHnBSK2E1CaCwE9TAKxuXe4CoVbERUmfMEt5DTbPvj7ucRjRAyO0oUOFHikgxyvHaMeI%2Bpi2K2ON8gzuKMBsaI8c9fVSgo6Yqp8Nyt%2FAWVl3aa69ParRb%2F3TW%2BH6x%2FjgIK65DmcSZFGYqjVOZewZ1iakSlJTG1OCM62yaKz9UGP0B3%2BJgXFl3%2BNu%2FBoYgOipyZLkj5aregvSXpZ6aemcd7hQZ2Hql8n4yxnH6qHNNItwYpc91NwtB6p%2FisFGjX6T28DtHXALRYoaE9IwZrhGF8ppNBuLmhq39fGdhC%2Bwud8DQj%2FPLkXci1q7d6OLeo8K7LScABsIALWOWy9NPx7ZegmpVeGOwwHM1cz%2BOx91MmVX89zF7dWe5T52raY2%2F8pEKpRXh6DeCdhi5TH9ufVYwJG8xuvh%2B11H9gWgP%2BBtHsj410%2B3Z%2FUh99HMPmio8MGOqUBTi%2BitzQaaCkP8Wg5Xvya40RqGu139fVw68fHRKn8p2Qp%2FdyoVSH0M3lXGP3vwxwteiq64C0QCpQsuBaeCc6bh7PajTaWYq9U2vPed32P3oYfffH1P%2B%2BfesxrM6GlXRmFpKBuASXh3Ao51uzDTYu1ywhMhpDTU7lrmOpivQ1L0JHVpynSsYJwxzvzWpSI9yTgq0g4elXgKt%2BJ27j%2BDbWOfzVuApS7&X-Amz-Signature=05f805e3ae4fca572a8fb678100b0e7d4cb0e5ef3189c845184c760d0628d41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3GUMRP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAEWA%2BRbH0dltKhPZ5ZnImOpgY5ag3r5Pa4GwqopUemQAiEAyTpaovXjvzkEMzGb%2Bsbt1RHKtOz%2Fxsq8rjWZQiAOVVoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCNn0165j4uOZ58sdCrcA%2FSisBMgNnRwx%2BgekMHclaRSopfrKxvOcQwayITgepuYjNWy%2FtrXtTpApmrAYimJVAXytw6YFu0mJE240p4lYjbUM9Oa1XzwCrhC7HHiG720tMxJkzsgSJbSZYRuXj5U3sR7sP%2Ftz9onBWi3jc0RJlLLI8d5%2BkpLGIZW5BhGJs%2FoyvxBn6M88ZlcFd5XIYG%2F5y39BZHnBSK2E1CaCwE9TAKxuXe4CoVbERUmfMEt5DTbPvj7ucRjRAyO0oUOFHikgxyvHaMeI%2Bpi2K2ON8gzuKMBsaI8c9fVSgo6Yqp8Nyt%2FAWVl3aa69ParRb%2F3TW%2BH6x%2FjgIK65DmcSZFGYqjVOZewZ1iakSlJTG1OCM62yaKz9UGP0B3%2BJgXFl3%2BNu%2FBoYgOipyZLkj5aregvSXpZ6aemcd7hQZ2Hql8n4yxnH6qHNNItwYpc91NwtB6p%2FisFGjX6T28DtHXALRYoaE9IwZrhGF8ppNBuLmhq39fGdhC%2Bwud8DQj%2FPLkXci1q7d6OLeo8K7LScABsIALWOWy9NPx7ZegmpVeGOwwHM1cz%2BOx91MmVX89zF7dWe5T52raY2%2F8pEKpRXh6DeCdhi5TH9ufVYwJG8xuvh%2B11H9gWgP%2BBtHsj410%2B3Z%2FUh99HMPmio8MGOqUBTi%2BitzQaaCkP8Wg5Xvya40RqGu139fVw68fHRKn8p2Qp%2FdyoVSH0M3lXGP3vwxwteiq64C0QCpQsuBaeCc6bh7PajTaWYq9U2vPed32P3oYfffH1P%2B%2BfesxrM6GlXRmFpKBuASXh3Ao51uzDTYu1ywhMhpDTU7lrmOpivQ1L0JHVpynSsYJwxzvzWpSI9yTgq0g4elXgKt%2BJ27j%2BDbWOfzVuApS7&X-Amz-Signature=871740fea28e670f2cd5346dcaf0354cd313847ab6699749f5569fb7ec0e5163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3GUMRP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAEWA%2BRbH0dltKhPZ5ZnImOpgY5ag3r5Pa4GwqopUemQAiEAyTpaovXjvzkEMzGb%2Bsbt1RHKtOz%2Fxsq8rjWZQiAOVVoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCNn0165j4uOZ58sdCrcA%2FSisBMgNnRwx%2BgekMHclaRSopfrKxvOcQwayITgepuYjNWy%2FtrXtTpApmrAYimJVAXytw6YFu0mJE240p4lYjbUM9Oa1XzwCrhC7HHiG720tMxJkzsgSJbSZYRuXj5U3sR7sP%2Ftz9onBWi3jc0RJlLLI8d5%2BkpLGIZW5BhGJs%2FoyvxBn6M88ZlcFd5XIYG%2F5y39BZHnBSK2E1CaCwE9TAKxuXe4CoVbERUmfMEt5DTbPvj7ucRjRAyO0oUOFHikgxyvHaMeI%2Bpi2K2ON8gzuKMBsaI8c9fVSgo6Yqp8Nyt%2FAWVl3aa69ParRb%2F3TW%2BH6x%2FjgIK65DmcSZFGYqjVOZewZ1iakSlJTG1OCM62yaKz9UGP0B3%2BJgXFl3%2BNu%2FBoYgOipyZLkj5aregvSXpZ6aemcd7hQZ2Hql8n4yxnH6qHNNItwYpc91NwtB6p%2FisFGjX6T28DtHXALRYoaE9IwZrhGF8ppNBuLmhq39fGdhC%2Bwud8DQj%2FPLkXci1q7d6OLeo8K7LScABsIALWOWy9NPx7ZegmpVeGOwwHM1cz%2BOx91MmVX89zF7dWe5T52raY2%2F8pEKpRXh6DeCdhi5TH9ufVYwJG8xuvh%2B11H9gWgP%2BBtHsj410%2B3Z%2FUh99HMPmio8MGOqUBTi%2BitzQaaCkP8Wg5Xvya40RqGu139fVw68fHRKn8p2Qp%2FdyoVSH0M3lXGP3vwxwteiq64C0QCpQsuBaeCc6bh7PajTaWYq9U2vPed32P3oYfffH1P%2B%2BfesxrM6GlXRmFpKBuASXh3Ao51uzDTYu1ywhMhpDTU7lrmOpivQ1L0JHVpynSsYJwxzvzWpSI9yTgq0g4elXgKt%2BJ27j%2BDbWOfzVuApS7&X-Amz-Signature=ef05dc06f597c7a7e02a71ab079747a39b1ff3dc3c107cd9c7c35973a00aff13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS3GUMRP%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIAEWA%2BRbH0dltKhPZ5ZnImOpgY5ag3r5Pa4GwqopUemQAiEAyTpaovXjvzkEMzGb%2Bsbt1RHKtOz%2Fxsq8rjWZQiAOVVoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDCNn0165j4uOZ58sdCrcA%2FSisBMgNnRwx%2BgekMHclaRSopfrKxvOcQwayITgepuYjNWy%2FtrXtTpApmrAYimJVAXytw6YFu0mJE240p4lYjbUM9Oa1XzwCrhC7HHiG720tMxJkzsgSJbSZYRuXj5U3sR7sP%2Ftz9onBWi3jc0RJlLLI8d5%2BkpLGIZW5BhGJs%2FoyvxBn6M88ZlcFd5XIYG%2F5y39BZHnBSK2E1CaCwE9TAKxuXe4CoVbERUmfMEt5DTbPvj7ucRjRAyO0oUOFHikgxyvHaMeI%2Bpi2K2ON8gzuKMBsaI8c9fVSgo6Yqp8Nyt%2FAWVl3aa69ParRb%2F3TW%2BH6x%2FjgIK65DmcSZFGYqjVOZewZ1iakSlJTG1OCM62yaKz9UGP0B3%2BJgXFl3%2BNu%2FBoYgOipyZLkj5aregvSXpZ6aemcd7hQZ2Hql8n4yxnH6qHNNItwYpc91NwtB6p%2FisFGjX6T28DtHXALRYoaE9IwZrhGF8ppNBuLmhq39fGdhC%2Bwud8DQj%2FPLkXci1q7d6OLeo8K7LScABsIALWOWy9NPx7ZegmpVeGOwwHM1cz%2BOx91MmVX89zF7dWe5T52raY2%2F8pEKpRXh6DeCdhi5TH9ufVYwJG8xuvh%2B11H9gWgP%2BBtHsj410%2B3Z%2FUh99HMPmio8MGOqUBTi%2BitzQaaCkP8Wg5Xvya40RqGu139fVw68fHRKn8p2Qp%2FdyoVSH0M3lXGP3vwxwteiq64C0QCpQsuBaeCc6bh7PajTaWYq9U2vPed32P3oYfffH1P%2B%2BfesxrM6GlXRmFpKBuASXh3Ao51uzDTYu1ywhMhpDTU7lrmOpivQ1L0JHVpynSsYJwxzvzWpSI9yTgq0g4elXgKt%2BJ27j%2BDbWOfzVuApS7&X-Amz-Signature=1cc40ba2a0bb145d93de2b91343be32a7f5138794b7af67fc6131f59b3c067ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
