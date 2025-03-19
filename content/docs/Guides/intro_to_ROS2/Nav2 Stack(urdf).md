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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGERAXIG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC16stzeYdbjL2SM9mru7iL0iF6U2ADSHireMAK3vKjEAIgSL2YuQgaXq92RF9HpWj23AFje9xxNU0BfJhDnp3EVM0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEtjSFoqkTD%2B8vHodSrcA9gK5r%2BIMxabsc8W6o5qNxmvKfGFGNEuExNWAMNbEpXd206rf%2BQji47cLpE6dM5T4jKs3wNLFaldIO4Q6QwedjaUi2%2BtmaPhaGSbVMLJdhDCOAmDkz4kAIwQvmdfvpnKPlwqta8gzsakk1LFEJmn2tsui2SUTpdNRHVZDtywEsquRe5KYwa4AcjBhuTOhifYyXA1pM5qlXyHxcdZMNMbxk8rL1q%2Fq4z3v8v6PcnyBtXlIdjbAvzCFha1Xn9oAiLWPVPgFKwt7f3c%2Bg%2B8RAdvfce%2FKw0YOFZm5MrzDhtjtWF7vnf8CRSkq%2BeR7F7qdXFWgNq6Y6k2G3q60MXfJ53zu2TaVwWNb88jyfRoNldmeHMgyhkUXUSxX8S8MqQYfxQTNI%2FQx1WVnfRjD3vafzTpbZEKSaC5sER%2FS%2FBOZmjixjXTQsr8L%2BmYmB5Sq7jHwJorvjlZYmLEPWmznbL6t8axCr1qOcFdGKayaLKNxnV1yLDkpiBd5LjCkxb5ol8MOZrvmj%2BttiE6%2FqG5CIh8tLDHU3%2FtK6F31Rl5i18BY%2FTr8c%2BtpvjFzgUTPHtqfQg3DAjHYdFUOWmTxdag6OhvkXA9qRkA935iSMyvsoqyapScJR732PoSN1yFI%2BybhPyKMIiC6r4GOqUBzKp%2Bzfb3En4nED%2FTRRz7gdnkTQx9ip2hx1TwloBBYOrQ4Yk%2B1GWfgrxCXNCj36jKQMu3YAPE%2BUVZlNMgcJO7tmA13yl0z986lb9vfYCGRh4dR%2FnxGldveaxPCWgKvWB%2BTkpS%2FmpMYfQylcOP%2FZYflH45NlDhjq1%2FdWsLHZa3w1RVHvAszijH2OoBY6iG%2F97CJPhhki9dQgQ5gPuI0yB2pmhuh85w&X-Amz-Signature=61d9b39a4cc971e782fce9c98f19e5b35d770f4ff29bc6d8f0f7230888bc9da0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGERAXIG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC16stzeYdbjL2SM9mru7iL0iF6U2ADSHireMAK3vKjEAIgSL2YuQgaXq92RF9HpWj23AFje9xxNU0BfJhDnp3EVM0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEtjSFoqkTD%2B8vHodSrcA9gK5r%2BIMxabsc8W6o5qNxmvKfGFGNEuExNWAMNbEpXd206rf%2BQji47cLpE6dM5T4jKs3wNLFaldIO4Q6QwedjaUi2%2BtmaPhaGSbVMLJdhDCOAmDkz4kAIwQvmdfvpnKPlwqta8gzsakk1LFEJmn2tsui2SUTpdNRHVZDtywEsquRe5KYwa4AcjBhuTOhifYyXA1pM5qlXyHxcdZMNMbxk8rL1q%2Fq4z3v8v6PcnyBtXlIdjbAvzCFha1Xn9oAiLWPVPgFKwt7f3c%2Bg%2B8RAdvfce%2FKw0YOFZm5MrzDhtjtWF7vnf8CRSkq%2BeR7F7qdXFWgNq6Y6k2G3q60MXfJ53zu2TaVwWNb88jyfRoNldmeHMgyhkUXUSxX8S8MqQYfxQTNI%2FQx1WVnfRjD3vafzTpbZEKSaC5sER%2FS%2FBOZmjixjXTQsr8L%2BmYmB5Sq7jHwJorvjlZYmLEPWmznbL6t8axCr1qOcFdGKayaLKNxnV1yLDkpiBd5LjCkxb5ol8MOZrvmj%2BttiE6%2FqG5CIh8tLDHU3%2FtK6F31Rl5i18BY%2FTr8c%2BtpvjFzgUTPHtqfQg3DAjHYdFUOWmTxdag6OhvkXA9qRkA935iSMyvsoqyapScJR732PoSN1yFI%2BybhPyKMIiC6r4GOqUBzKp%2Bzfb3En4nED%2FTRRz7gdnkTQx9ip2hx1TwloBBYOrQ4Yk%2B1GWfgrxCXNCj36jKQMu3YAPE%2BUVZlNMgcJO7tmA13yl0z986lb9vfYCGRh4dR%2FnxGldveaxPCWgKvWB%2BTkpS%2FmpMYfQylcOP%2FZYflH45NlDhjq1%2FdWsLHZa3w1RVHvAszijH2OoBY6iG%2F97CJPhhki9dQgQ5gPuI0yB2pmhuh85w&X-Amz-Signature=970ff0de886f3fb01a3691be8f650b4093e2e1475547b8bdb84697e2d0568919&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGERAXIG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC16stzeYdbjL2SM9mru7iL0iF6U2ADSHireMAK3vKjEAIgSL2YuQgaXq92RF9HpWj23AFje9xxNU0BfJhDnp3EVM0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEtjSFoqkTD%2B8vHodSrcA9gK5r%2BIMxabsc8W6o5qNxmvKfGFGNEuExNWAMNbEpXd206rf%2BQji47cLpE6dM5T4jKs3wNLFaldIO4Q6QwedjaUi2%2BtmaPhaGSbVMLJdhDCOAmDkz4kAIwQvmdfvpnKPlwqta8gzsakk1LFEJmn2tsui2SUTpdNRHVZDtywEsquRe5KYwa4AcjBhuTOhifYyXA1pM5qlXyHxcdZMNMbxk8rL1q%2Fq4z3v8v6PcnyBtXlIdjbAvzCFha1Xn9oAiLWPVPgFKwt7f3c%2Bg%2B8RAdvfce%2FKw0YOFZm5MrzDhtjtWF7vnf8CRSkq%2BeR7F7qdXFWgNq6Y6k2G3q60MXfJ53zu2TaVwWNb88jyfRoNldmeHMgyhkUXUSxX8S8MqQYfxQTNI%2FQx1WVnfRjD3vafzTpbZEKSaC5sER%2FS%2FBOZmjixjXTQsr8L%2BmYmB5Sq7jHwJorvjlZYmLEPWmznbL6t8axCr1qOcFdGKayaLKNxnV1yLDkpiBd5LjCkxb5ol8MOZrvmj%2BttiE6%2FqG5CIh8tLDHU3%2FtK6F31Rl5i18BY%2FTr8c%2BtpvjFzgUTPHtqfQg3DAjHYdFUOWmTxdag6OhvkXA9qRkA935iSMyvsoqyapScJR732PoSN1yFI%2BybhPyKMIiC6r4GOqUBzKp%2Bzfb3En4nED%2FTRRz7gdnkTQx9ip2hx1TwloBBYOrQ4Yk%2B1GWfgrxCXNCj36jKQMu3YAPE%2BUVZlNMgcJO7tmA13yl0z986lb9vfYCGRh4dR%2FnxGldveaxPCWgKvWB%2BTkpS%2FmpMYfQylcOP%2FZYflH45NlDhjq1%2FdWsLHZa3w1RVHvAszijH2OoBY6iG%2F97CJPhhki9dQgQ5gPuI0yB2pmhuh85w&X-Amz-Signature=ecac37d8f24ad4fbedf33c2398ae4843c679533d738cfdd50e8a4e109390c65c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGERAXIG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC16stzeYdbjL2SM9mru7iL0iF6U2ADSHireMAK3vKjEAIgSL2YuQgaXq92RF9HpWj23AFje9xxNU0BfJhDnp3EVM0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEtjSFoqkTD%2B8vHodSrcA9gK5r%2BIMxabsc8W6o5qNxmvKfGFGNEuExNWAMNbEpXd206rf%2BQji47cLpE6dM5T4jKs3wNLFaldIO4Q6QwedjaUi2%2BtmaPhaGSbVMLJdhDCOAmDkz4kAIwQvmdfvpnKPlwqta8gzsakk1LFEJmn2tsui2SUTpdNRHVZDtywEsquRe5KYwa4AcjBhuTOhifYyXA1pM5qlXyHxcdZMNMbxk8rL1q%2Fq4z3v8v6PcnyBtXlIdjbAvzCFha1Xn9oAiLWPVPgFKwt7f3c%2Bg%2B8RAdvfce%2FKw0YOFZm5MrzDhtjtWF7vnf8CRSkq%2BeR7F7qdXFWgNq6Y6k2G3q60MXfJ53zu2TaVwWNb88jyfRoNldmeHMgyhkUXUSxX8S8MqQYfxQTNI%2FQx1WVnfRjD3vafzTpbZEKSaC5sER%2FS%2FBOZmjixjXTQsr8L%2BmYmB5Sq7jHwJorvjlZYmLEPWmznbL6t8axCr1qOcFdGKayaLKNxnV1yLDkpiBd5LjCkxb5ol8MOZrvmj%2BttiE6%2FqG5CIh8tLDHU3%2FtK6F31Rl5i18BY%2FTr8c%2BtpvjFzgUTPHtqfQg3DAjHYdFUOWmTxdag6OhvkXA9qRkA935iSMyvsoqyapScJR732PoSN1yFI%2BybhPyKMIiC6r4GOqUBzKp%2Bzfb3En4nED%2FTRRz7gdnkTQx9ip2hx1TwloBBYOrQ4Yk%2B1GWfgrxCXNCj36jKQMu3YAPE%2BUVZlNMgcJO7tmA13yl0z986lb9vfYCGRh4dR%2FnxGldveaxPCWgKvWB%2BTkpS%2FmpMYfQylcOP%2FZYflH45NlDhjq1%2FdWsLHZa3w1RVHvAszijH2OoBY6iG%2F97CJPhhki9dQgQ5gPuI0yB2pmhuh85w&X-Amz-Signature=3a224b8499c916e870f57d0354621ff9fc0392c7046976aac5c8be477f9bdaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGERAXIG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC16stzeYdbjL2SM9mru7iL0iF6U2ADSHireMAK3vKjEAIgSL2YuQgaXq92RF9HpWj23AFje9xxNU0BfJhDnp3EVM0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEtjSFoqkTD%2B8vHodSrcA9gK5r%2BIMxabsc8W6o5qNxmvKfGFGNEuExNWAMNbEpXd206rf%2BQji47cLpE6dM5T4jKs3wNLFaldIO4Q6QwedjaUi2%2BtmaPhaGSbVMLJdhDCOAmDkz4kAIwQvmdfvpnKPlwqta8gzsakk1LFEJmn2tsui2SUTpdNRHVZDtywEsquRe5KYwa4AcjBhuTOhifYyXA1pM5qlXyHxcdZMNMbxk8rL1q%2Fq4z3v8v6PcnyBtXlIdjbAvzCFha1Xn9oAiLWPVPgFKwt7f3c%2Bg%2B8RAdvfce%2FKw0YOFZm5MrzDhtjtWF7vnf8CRSkq%2BeR7F7qdXFWgNq6Y6k2G3q60MXfJ53zu2TaVwWNb88jyfRoNldmeHMgyhkUXUSxX8S8MqQYfxQTNI%2FQx1WVnfRjD3vafzTpbZEKSaC5sER%2FS%2FBOZmjixjXTQsr8L%2BmYmB5Sq7jHwJorvjlZYmLEPWmznbL6t8axCr1qOcFdGKayaLKNxnV1yLDkpiBd5LjCkxb5ol8MOZrvmj%2BttiE6%2FqG5CIh8tLDHU3%2FtK6F31Rl5i18BY%2FTr8c%2BtpvjFzgUTPHtqfQg3DAjHYdFUOWmTxdag6OhvkXA9qRkA935iSMyvsoqyapScJR732PoSN1yFI%2BybhPyKMIiC6r4GOqUBzKp%2Bzfb3En4nED%2FTRRz7gdnkTQx9ip2hx1TwloBBYOrQ4Yk%2B1GWfgrxCXNCj36jKQMu3YAPE%2BUVZlNMgcJO7tmA13yl0z986lb9vfYCGRh4dR%2FnxGldveaxPCWgKvWB%2BTkpS%2FmpMYfQylcOP%2FZYflH45NlDhjq1%2FdWsLHZa3w1RVHvAszijH2OoBY6iG%2F97CJPhhki9dQgQ5gPuI0yB2pmhuh85w&X-Amz-Signature=f75618c0a921c9520e2e29ae7758d145cc39265a10b1d1acae05bf7b8c868f41&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGERAXIG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC16stzeYdbjL2SM9mru7iL0iF6U2ADSHireMAK3vKjEAIgSL2YuQgaXq92RF9HpWj23AFje9xxNU0BfJhDnp3EVM0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEtjSFoqkTD%2B8vHodSrcA9gK5r%2BIMxabsc8W6o5qNxmvKfGFGNEuExNWAMNbEpXd206rf%2BQji47cLpE6dM5T4jKs3wNLFaldIO4Q6QwedjaUi2%2BtmaPhaGSbVMLJdhDCOAmDkz4kAIwQvmdfvpnKPlwqta8gzsakk1LFEJmn2tsui2SUTpdNRHVZDtywEsquRe5KYwa4AcjBhuTOhifYyXA1pM5qlXyHxcdZMNMbxk8rL1q%2Fq4z3v8v6PcnyBtXlIdjbAvzCFha1Xn9oAiLWPVPgFKwt7f3c%2Bg%2B8RAdvfce%2FKw0YOFZm5MrzDhtjtWF7vnf8CRSkq%2BeR7F7qdXFWgNq6Y6k2G3q60MXfJ53zu2TaVwWNb88jyfRoNldmeHMgyhkUXUSxX8S8MqQYfxQTNI%2FQx1WVnfRjD3vafzTpbZEKSaC5sER%2FS%2FBOZmjixjXTQsr8L%2BmYmB5Sq7jHwJorvjlZYmLEPWmznbL6t8axCr1qOcFdGKayaLKNxnV1yLDkpiBd5LjCkxb5ol8MOZrvmj%2BttiE6%2FqG5CIh8tLDHU3%2FtK6F31Rl5i18BY%2FTr8c%2BtpvjFzgUTPHtqfQg3DAjHYdFUOWmTxdag6OhvkXA9qRkA935iSMyvsoqyapScJR732PoSN1yFI%2BybhPyKMIiC6r4GOqUBzKp%2Bzfb3En4nED%2FTRRz7gdnkTQx9ip2hx1TwloBBYOrQ4Yk%2B1GWfgrxCXNCj36jKQMu3YAPE%2BUVZlNMgcJO7tmA13yl0z986lb9vfYCGRh4dR%2FnxGldveaxPCWgKvWB%2BTkpS%2FmpMYfQylcOP%2FZYflH45NlDhjq1%2FdWsLHZa3w1RVHvAszijH2OoBY6iG%2F97CJPhhki9dQgQ5gPuI0yB2pmhuh85w&X-Amz-Signature=6bde6026935559068dfc7395058e39ce2231f64e1419aedb5b35cab91f1a30e6&X-Amz-SignedHeaders=host&x-id=GetObject)
