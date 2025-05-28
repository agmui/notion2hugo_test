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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5T6JKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpIeYmH9nx38VtiCr0d%2BF%2BNod0W7Y97MlZFtD%2BxeSOYQIhAO89C18W1NGvC3YG%2BNeDzA01fkcWhB4JKvABDM48uqp5Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy2hj7HXoSkoT%2BRcBQq3AMRbhvw0Gbcv%2BOl2Zr%2F9pMc1KXDQEdshQC7iuAcH1WzE5W5zFB2dMQNV2829wU50V3V1lCJJJzpfOPrRJOigBqdtafv6%2B5aZCtu8fJzr9k7Ti9laj3j75U%2Bzwa1AJ4JSEFg7RlA1EJDvdVSC2%2Fcwu5Z%2FCGwvfS3W8ybubqVmBP6oeq4ZQqZC%2BzLzRsltdn5BLlRwpiltW%2Fd2nWwF3fBNXFf%2BLzcLB56B3zdme1vrdxpk3oWo0EwSOvi8I6DNmbDKs961%2FcZ2%2BlNl678qmwB59uOtMbmr9gZmWZOj9QhbGMCAD2xNsdoEGnvKK%2BsQ46iQJqngLJG1ZnSakyuANj749%2F1Gn5dZf3NJAS1a%2FbY8Z6bdevTAbBjc7m6Zj5l5fMXxMcH1aPiwVsW0ee7hZbezmGkNj1ert6ZUdPi2fZXc7Vplis9ElWWuXzrD4UsObBa4270TznuiUormDVeg9QJWWiXv86G20at6tVUv4t%2Fof3wrb%2FFXMRD5Xmqdcjn6%2BbPP%2Bruw1dzHn4HvE1dJ%2B7wWVWe9%2FY70zv05kmULMa1l%2Fn4OOrtvxjAE5BBoPaQw9%2BOP%2BXGiS5VGbcC%2BDTLST1N%2FxL%2F89ADYV4cc%2FFmiNSZhfN62jhCce2cXOoG%2F8qpKTDjktzBBjqkAag%2FVMLnz8mnX5V3kekQud6SB%2BomlCCioLc0x0Z0iN%2BL6bjGjebHEWysv26F2j5qElekeToMJetraGYBsK7vuPyvv6vn%2FF91%2FneFadHJZYHKTS%2BZrWtQxDTp8TBdCFI%2FiFmehYGLxdySMwjxqriVMrB%2F4%2BJeolDcr%2B81ie%2BtVGuRyrA6iYF%2FxAeAJQTv8IVRrFTsLJYoiiia4q5e14zDeRHbbE6u&X-Amz-Signature=0f82ebd994bb7b59f2a292e071dfbd9940b67e157189ca15125c0e9238a1e636&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5T6JKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpIeYmH9nx38VtiCr0d%2BF%2BNod0W7Y97MlZFtD%2BxeSOYQIhAO89C18W1NGvC3YG%2BNeDzA01fkcWhB4JKvABDM48uqp5Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy2hj7HXoSkoT%2BRcBQq3AMRbhvw0Gbcv%2BOl2Zr%2F9pMc1KXDQEdshQC7iuAcH1WzE5W5zFB2dMQNV2829wU50V3V1lCJJJzpfOPrRJOigBqdtafv6%2B5aZCtu8fJzr9k7Ti9laj3j75U%2Bzwa1AJ4JSEFg7RlA1EJDvdVSC2%2Fcwu5Z%2FCGwvfS3W8ybubqVmBP6oeq4ZQqZC%2BzLzRsltdn5BLlRwpiltW%2Fd2nWwF3fBNXFf%2BLzcLB56B3zdme1vrdxpk3oWo0EwSOvi8I6DNmbDKs961%2FcZ2%2BlNl678qmwB59uOtMbmr9gZmWZOj9QhbGMCAD2xNsdoEGnvKK%2BsQ46iQJqngLJG1ZnSakyuANj749%2F1Gn5dZf3NJAS1a%2FbY8Z6bdevTAbBjc7m6Zj5l5fMXxMcH1aPiwVsW0ee7hZbezmGkNj1ert6ZUdPi2fZXc7Vplis9ElWWuXzrD4UsObBa4270TznuiUormDVeg9QJWWiXv86G20at6tVUv4t%2Fof3wrb%2FFXMRD5Xmqdcjn6%2BbPP%2Bruw1dzHn4HvE1dJ%2B7wWVWe9%2FY70zv05kmULMa1l%2Fn4OOrtvxjAE5BBoPaQw9%2BOP%2BXGiS5VGbcC%2BDTLST1N%2FxL%2F89ADYV4cc%2FFmiNSZhfN62jhCce2cXOoG%2F8qpKTDjktzBBjqkAag%2FVMLnz8mnX5V3kekQud6SB%2BomlCCioLc0x0Z0iN%2BL6bjGjebHEWysv26F2j5qElekeToMJetraGYBsK7vuPyvv6vn%2FF91%2FneFadHJZYHKTS%2BZrWtQxDTp8TBdCFI%2FiFmehYGLxdySMwjxqriVMrB%2F4%2BJeolDcr%2B81ie%2BtVGuRyrA6iYF%2FxAeAJQTv8IVRrFTsLJYoiiia4q5e14zDeRHbbE6u&X-Amz-Signature=56fa7ac183a05961fc15f0800e239f701d726562e98700f9edb5d30929964342&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5T6JKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpIeYmH9nx38VtiCr0d%2BF%2BNod0W7Y97MlZFtD%2BxeSOYQIhAO89C18W1NGvC3YG%2BNeDzA01fkcWhB4JKvABDM48uqp5Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy2hj7HXoSkoT%2BRcBQq3AMRbhvw0Gbcv%2BOl2Zr%2F9pMc1KXDQEdshQC7iuAcH1WzE5W5zFB2dMQNV2829wU50V3V1lCJJJzpfOPrRJOigBqdtafv6%2B5aZCtu8fJzr9k7Ti9laj3j75U%2Bzwa1AJ4JSEFg7RlA1EJDvdVSC2%2Fcwu5Z%2FCGwvfS3W8ybubqVmBP6oeq4ZQqZC%2BzLzRsltdn5BLlRwpiltW%2Fd2nWwF3fBNXFf%2BLzcLB56B3zdme1vrdxpk3oWo0EwSOvi8I6DNmbDKs961%2FcZ2%2BlNl678qmwB59uOtMbmr9gZmWZOj9QhbGMCAD2xNsdoEGnvKK%2BsQ46iQJqngLJG1ZnSakyuANj749%2F1Gn5dZf3NJAS1a%2FbY8Z6bdevTAbBjc7m6Zj5l5fMXxMcH1aPiwVsW0ee7hZbezmGkNj1ert6ZUdPi2fZXc7Vplis9ElWWuXzrD4UsObBa4270TznuiUormDVeg9QJWWiXv86G20at6tVUv4t%2Fof3wrb%2FFXMRD5Xmqdcjn6%2BbPP%2Bruw1dzHn4HvE1dJ%2B7wWVWe9%2FY70zv05kmULMa1l%2Fn4OOrtvxjAE5BBoPaQw9%2BOP%2BXGiS5VGbcC%2BDTLST1N%2FxL%2F89ADYV4cc%2FFmiNSZhfN62jhCce2cXOoG%2F8qpKTDjktzBBjqkAag%2FVMLnz8mnX5V3kekQud6SB%2BomlCCioLc0x0Z0iN%2BL6bjGjebHEWysv26F2j5qElekeToMJetraGYBsK7vuPyvv6vn%2FF91%2FneFadHJZYHKTS%2BZrWtQxDTp8TBdCFI%2FiFmehYGLxdySMwjxqriVMrB%2F4%2BJeolDcr%2B81ie%2BtVGuRyrA6iYF%2FxAeAJQTv8IVRrFTsLJYoiiia4q5e14zDeRHbbE6u&X-Amz-Signature=b27b1b607d62a92bc18167dd9bfbeacc15074936e62a4fbf14d3aea0ecaaca10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5T6JKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpIeYmH9nx38VtiCr0d%2BF%2BNod0W7Y97MlZFtD%2BxeSOYQIhAO89C18W1NGvC3YG%2BNeDzA01fkcWhB4JKvABDM48uqp5Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy2hj7HXoSkoT%2BRcBQq3AMRbhvw0Gbcv%2BOl2Zr%2F9pMc1KXDQEdshQC7iuAcH1WzE5W5zFB2dMQNV2829wU50V3V1lCJJJzpfOPrRJOigBqdtafv6%2B5aZCtu8fJzr9k7Ti9laj3j75U%2Bzwa1AJ4JSEFg7RlA1EJDvdVSC2%2Fcwu5Z%2FCGwvfS3W8ybubqVmBP6oeq4ZQqZC%2BzLzRsltdn5BLlRwpiltW%2Fd2nWwF3fBNXFf%2BLzcLB56B3zdme1vrdxpk3oWo0EwSOvi8I6DNmbDKs961%2FcZ2%2BlNl678qmwB59uOtMbmr9gZmWZOj9QhbGMCAD2xNsdoEGnvKK%2BsQ46iQJqngLJG1ZnSakyuANj749%2F1Gn5dZf3NJAS1a%2FbY8Z6bdevTAbBjc7m6Zj5l5fMXxMcH1aPiwVsW0ee7hZbezmGkNj1ert6ZUdPi2fZXc7Vplis9ElWWuXzrD4UsObBa4270TznuiUormDVeg9QJWWiXv86G20at6tVUv4t%2Fof3wrb%2FFXMRD5Xmqdcjn6%2BbPP%2Bruw1dzHn4HvE1dJ%2B7wWVWe9%2FY70zv05kmULMa1l%2Fn4OOrtvxjAE5BBoPaQw9%2BOP%2BXGiS5VGbcC%2BDTLST1N%2FxL%2F89ADYV4cc%2FFmiNSZhfN62jhCce2cXOoG%2F8qpKTDjktzBBjqkAag%2FVMLnz8mnX5V3kekQud6SB%2BomlCCioLc0x0Z0iN%2BL6bjGjebHEWysv26F2j5qElekeToMJetraGYBsK7vuPyvv6vn%2FF91%2FneFadHJZYHKTS%2BZrWtQxDTp8TBdCFI%2FiFmehYGLxdySMwjxqriVMrB%2F4%2BJeolDcr%2B81ie%2BtVGuRyrA6iYF%2FxAeAJQTv8IVRrFTsLJYoiiia4q5e14zDeRHbbE6u&X-Amz-Signature=8de89ab7d34ae9b5c2fd7ac26d0c82f014bf6984695c628c7cd4e52247e31c41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5T6JKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpIeYmH9nx38VtiCr0d%2BF%2BNod0W7Y97MlZFtD%2BxeSOYQIhAO89C18W1NGvC3YG%2BNeDzA01fkcWhB4JKvABDM48uqp5Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy2hj7HXoSkoT%2BRcBQq3AMRbhvw0Gbcv%2BOl2Zr%2F9pMc1KXDQEdshQC7iuAcH1WzE5W5zFB2dMQNV2829wU50V3V1lCJJJzpfOPrRJOigBqdtafv6%2B5aZCtu8fJzr9k7Ti9laj3j75U%2Bzwa1AJ4JSEFg7RlA1EJDvdVSC2%2Fcwu5Z%2FCGwvfS3W8ybubqVmBP6oeq4ZQqZC%2BzLzRsltdn5BLlRwpiltW%2Fd2nWwF3fBNXFf%2BLzcLB56B3zdme1vrdxpk3oWo0EwSOvi8I6DNmbDKs961%2FcZ2%2BlNl678qmwB59uOtMbmr9gZmWZOj9QhbGMCAD2xNsdoEGnvKK%2BsQ46iQJqngLJG1ZnSakyuANj749%2F1Gn5dZf3NJAS1a%2FbY8Z6bdevTAbBjc7m6Zj5l5fMXxMcH1aPiwVsW0ee7hZbezmGkNj1ert6ZUdPi2fZXc7Vplis9ElWWuXzrD4UsObBa4270TznuiUormDVeg9QJWWiXv86G20at6tVUv4t%2Fof3wrb%2FFXMRD5Xmqdcjn6%2BbPP%2Bruw1dzHn4HvE1dJ%2B7wWVWe9%2FY70zv05kmULMa1l%2Fn4OOrtvxjAE5BBoPaQw9%2BOP%2BXGiS5VGbcC%2BDTLST1N%2FxL%2F89ADYV4cc%2FFmiNSZhfN62jhCce2cXOoG%2F8qpKTDjktzBBjqkAag%2FVMLnz8mnX5V3kekQud6SB%2BomlCCioLc0x0Z0iN%2BL6bjGjebHEWysv26F2j5qElekeToMJetraGYBsK7vuPyvv6vn%2FF91%2FneFadHJZYHKTS%2BZrWtQxDTp8TBdCFI%2FiFmehYGLxdySMwjxqriVMrB%2F4%2BJeolDcr%2B81ie%2BtVGuRyrA6iYF%2FxAeAJQTv8IVRrFTsLJYoiiia4q5e14zDeRHbbE6u&X-Amz-Signature=0f4ea1fbdef320280827ad11a3444d805027be77c6ca23398dd6604c25f3936e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5T6JKE%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T132513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpIeYmH9nx38VtiCr0d%2BF%2BNod0W7Y97MlZFtD%2BxeSOYQIhAO89C18W1NGvC3YG%2BNeDzA01fkcWhB4JKvABDM48uqp5Kv8DCHYQABoMNjM3NDIzMTgzODA1Igy2hj7HXoSkoT%2BRcBQq3AMRbhvw0Gbcv%2BOl2Zr%2F9pMc1KXDQEdshQC7iuAcH1WzE5W5zFB2dMQNV2829wU50V3V1lCJJJzpfOPrRJOigBqdtafv6%2B5aZCtu8fJzr9k7Ti9laj3j75U%2Bzwa1AJ4JSEFg7RlA1EJDvdVSC2%2Fcwu5Z%2FCGwvfS3W8ybubqVmBP6oeq4ZQqZC%2BzLzRsltdn5BLlRwpiltW%2Fd2nWwF3fBNXFf%2BLzcLB56B3zdme1vrdxpk3oWo0EwSOvi8I6DNmbDKs961%2FcZ2%2BlNl678qmwB59uOtMbmr9gZmWZOj9QhbGMCAD2xNsdoEGnvKK%2BsQ46iQJqngLJG1ZnSakyuANj749%2F1Gn5dZf3NJAS1a%2FbY8Z6bdevTAbBjc7m6Zj5l5fMXxMcH1aPiwVsW0ee7hZbezmGkNj1ert6ZUdPi2fZXc7Vplis9ElWWuXzrD4UsObBa4270TznuiUormDVeg9QJWWiXv86G20at6tVUv4t%2Fof3wrb%2FFXMRD5Xmqdcjn6%2BbPP%2Bruw1dzHn4HvE1dJ%2B7wWVWe9%2FY70zv05kmULMa1l%2Fn4OOrtvxjAE5BBoPaQw9%2BOP%2BXGiS5VGbcC%2BDTLST1N%2FxL%2F89ADYV4cc%2FFmiNSZhfN62jhCce2cXOoG%2F8qpKTDjktzBBjqkAag%2FVMLnz8mnX5V3kekQud6SB%2BomlCCioLc0x0Z0iN%2BL6bjGjebHEWysv26F2j5qElekeToMJetraGYBsK7vuPyvv6vn%2FF91%2FneFadHJZYHKTS%2BZrWtQxDTp8TBdCFI%2FiFmehYGLxdySMwjxqriVMrB%2F4%2BJeolDcr%2B81ie%2BtVGuRyrA6iYF%2FxAeAJQTv8IVRrFTsLJYoiiia4q5e14zDeRHbbE6u&X-Amz-Signature=51ee30983ee72c7e06510e92e1df2ae03a392d2f916d70e7224a34f634115dd0&X-Amz-SignedHeaders=host&x-id=GetObject)
