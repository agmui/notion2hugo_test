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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R26XBI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCseFW6VmgDccOpb6FPYb8W1ZdlOCd1KYL2r1SxRoD0bQIgJds%2BraoMGEFDOwCdOcdrJZDz0JOcMhkMxFOrLeR%2Fd0kqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTuWa7lLx%2BhdaQV%2BCrcA0MjQ14LJN4ppBtshDrsormR1M5mTDXbrE7kw2GzuLrvGJX03DA3Fn48VaYxvwhSNhuvVmnaGPs2QJFIP3yKDr35MNWXjFbFlPvoJcaeWRtdd8Tp9NkvzDY70V8sje1RqVD%2Fv3BI4SNMQkgBXDgMrHzKROxzJMGQpeqkX%2F7gtWOjhELNebRlI7i1OLhR4LRisCJkGMJMffWt%2BCJSgGLHUU0Cpeqd%2BJV%2FH4uAhZta94VNav9YS9qz2aiGWe9rA0TuxgwXHSsA%2Fv7CO0zgH7GlL0cq5EFiPoXFrA89Unt7E4DMNJf4ARbtuUCcG2CDRLyacs%2BNHlCmEvnxCHZiumNE4%2Bz6SSPTqTQoUs%2F8JCJKpShEB1Rc8SD%2BaSUMrNBM8%2Ba6lwlS7X%2B1HF%2FvrXe%2FoPn1zFC4MlgqZioigw%2BQQlJRprjmsMhfz%2BfXaEuwzzKSmVwRUu%2Bb%2Bb8lGBXwd2IwWx8Oktx8U%2Fpr%2BU%2Fvyx3PiOE4JobMS3Gn1yU7Jg2xXz8iSsYdpwNTE6XOuvcXZ1fji29QJVBsRiJAq63fpHwM1gArfEuX2pmp1UtOyWM3jFKJLrfTCtqYcXAeS4UkCdu%2FK%2BgtdD5P2v4s6vRLiJ688kQMXh0Qy9rkUSp6Q7cdIU0lMOj66b8GOqUBiZe%2FkgBUUgR4vkh%2BCZ8tsIYkkMCLtvzzTyl379LL7iU8HCjxtUcMMtWlwrQ0K8n4bYfBJJs%2B%2FbnZZF6QkgLCpDBgUXkfCtLP7dHTVr7PzouxbsguAnmF5H0Yv2RN9HdT%2FTP%2B8fESa4fuF4%2B%2FFYXY3wt01R%2BxjB7eDPvBQbcolL8qvIv90qdGDxibULMe0hnkSIX1srdMy8Cf2bAqFRWVVil1AoID&X-Amz-Signature=06c6b25c300c4060504decf7a26f0e191b8fe87bd5677c2306058ab477f74785&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R26XBI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCseFW6VmgDccOpb6FPYb8W1ZdlOCd1KYL2r1SxRoD0bQIgJds%2BraoMGEFDOwCdOcdrJZDz0JOcMhkMxFOrLeR%2Fd0kqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTuWa7lLx%2BhdaQV%2BCrcA0MjQ14LJN4ppBtshDrsormR1M5mTDXbrE7kw2GzuLrvGJX03DA3Fn48VaYxvwhSNhuvVmnaGPs2QJFIP3yKDr35MNWXjFbFlPvoJcaeWRtdd8Tp9NkvzDY70V8sje1RqVD%2Fv3BI4SNMQkgBXDgMrHzKROxzJMGQpeqkX%2F7gtWOjhELNebRlI7i1OLhR4LRisCJkGMJMffWt%2BCJSgGLHUU0Cpeqd%2BJV%2FH4uAhZta94VNav9YS9qz2aiGWe9rA0TuxgwXHSsA%2Fv7CO0zgH7GlL0cq5EFiPoXFrA89Unt7E4DMNJf4ARbtuUCcG2CDRLyacs%2BNHlCmEvnxCHZiumNE4%2Bz6SSPTqTQoUs%2F8JCJKpShEB1Rc8SD%2BaSUMrNBM8%2Ba6lwlS7X%2B1HF%2FvrXe%2FoPn1zFC4MlgqZioigw%2BQQlJRprjmsMhfz%2BfXaEuwzzKSmVwRUu%2Bb%2Bb8lGBXwd2IwWx8Oktx8U%2Fpr%2BU%2Fvyx3PiOE4JobMS3Gn1yU7Jg2xXz8iSsYdpwNTE6XOuvcXZ1fji29QJVBsRiJAq63fpHwM1gArfEuX2pmp1UtOyWM3jFKJLrfTCtqYcXAeS4UkCdu%2FK%2BgtdD5P2v4s6vRLiJ688kQMXh0Qy9rkUSp6Q7cdIU0lMOj66b8GOqUBiZe%2FkgBUUgR4vkh%2BCZ8tsIYkkMCLtvzzTyl379LL7iU8HCjxtUcMMtWlwrQ0K8n4bYfBJJs%2B%2FbnZZF6QkgLCpDBgUXkfCtLP7dHTVr7PzouxbsguAnmF5H0Yv2RN9HdT%2FTP%2B8fESa4fuF4%2B%2FFYXY3wt01R%2BxjB7eDPvBQbcolL8qvIv90qdGDxibULMe0hnkSIX1srdMy8Cf2bAqFRWVVil1AoID&X-Amz-Signature=bc60f2475caef7c049f7f8602bf17e67887b9097e2ef84eabeca75999d8539b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R26XBI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCseFW6VmgDccOpb6FPYb8W1ZdlOCd1KYL2r1SxRoD0bQIgJds%2BraoMGEFDOwCdOcdrJZDz0JOcMhkMxFOrLeR%2Fd0kqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTuWa7lLx%2BhdaQV%2BCrcA0MjQ14LJN4ppBtshDrsormR1M5mTDXbrE7kw2GzuLrvGJX03DA3Fn48VaYxvwhSNhuvVmnaGPs2QJFIP3yKDr35MNWXjFbFlPvoJcaeWRtdd8Tp9NkvzDY70V8sje1RqVD%2Fv3BI4SNMQkgBXDgMrHzKROxzJMGQpeqkX%2F7gtWOjhELNebRlI7i1OLhR4LRisCJkGMJMffWt%2BCJSgGLHUU0Cpeqd%2BJV%2FH4uAhZta94VNav9YS9qz2aiGWe9rA0TuxgwXHSsA%2Fv7CO0zgH7GlL0cq5EFiPoXFrA89Unt7E4DMNJf4ARbtuUCcG2CDRLyacs%2BNHlCmEvnxCHZiumNE4%2Bz6SSPTqTQoUs%2F8JCJKpShEB1Rc8SD%2BaSUMrNBM8%2Ba6lwlS7X%2B1HF%2FvrXe%2FoPn1zFC4MlgqZioigw%2BQQlJRprjmsMhfz%2BfXaEuwzzKSmVwRUu%2Bb%2Bb8lGBXwd2IwWx8Oktx8U%2Fpr%2BU%2Fvyx3PiOE4JobMS3Gn1yU7Jg2xXz8iSsYdpwNTE6XOuvcXZ1fji29QJVBsRiJAq63fpHwM1gArfEuX2pmp1UtOyWM3jFKJLrfTCtqYcXAeS4UkCdu%2FK%2BgtdD5P2v4s6vRLiJ688kQMXh0Qy9rkUSp6Q7cdIU0lMOj66b8GOqUBiZe%2FkgBUUgR4vkh%2BCZ8tsIYkkMCLtvzzTyl379LL7iU8HCjxtUcMMtWlwrQ0K8n4bYfBJJs%2B%2FbnZZF6QkgLCpDBgUXkfCtLP7dHTVr7PzouxbsguAnmF5H0Yv2RN9HdT%2FTP%2B8fESa4fuF4%2B%2FFYXY3wt01R%2BxjB7eDPvBQbcolL8qvIv90qdGDxibULMe0hnkSIX1srdMy8Cf2bAqFRWVVil1AoID&X-Amz-Signature=6f0fb256f2b88e1246d3b8a76b3bf94fb050fdb359174733eac1166aea906c71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R26XBI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCseFW6VmgDccOpb6FPYb8W1ZdlOCd1KYL2r1SxRoD0bQIgJds%2BraoMGEFDOwCdOcdrJZDz0JOcMhkMxFOrLeR%2Fd0kqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTuWa7lLx%2BhdaQV%2BCrcA0MjQ14LJN4ppBtshDrsormR1M5mTDXbrE7kw2GzuLrvGJX03DA3Fn48VaYxvwhSNhuvVmnaGPs2QJFIP3yKDr35MNWXjFbFlPvoJcaeWRtdd8Tp9NkvzDY70V8sje1RqVD%2Fv3BI4SNMQkgBXDgMrHzKROxzJMGQpeqkX%2F7gtWOjhELNebRlI7i1OLhR4LRisCJkGMJMffWt%2BCJSgGLHUU0Cpeqd%2BJV%2FH4uAhZta94VNav9YS9qz2aiGWe9rA0TuxgwXHSsA%2Fv7CO0zgH7GlL0cq5EFiPoXFrA89Unt7E4DMNJf4ARbtuUCcG2CDRLyacs%2BNHlCmEvnxCHZiumNE4%2Bz6SSPTqTQoUs%2F8JCJKpShEB1Rc8SD%2BaSUMrNBM8%2Ba6lwlS7X%2B1HF%2FvrXe%2FoPn1zFC4MlgqZioigw%2BQQlJRprjmsMhfz%2BfXaEuwzzKSmVwRUu%2Bb%2Bb8lGBXwd2IwWx8Oktx8U%2Fpr%2BU%2Fvyx3PiOE4JobMS3Gn1yU7Jg2xXz8iSsYdpwNTE6XOuvcXZ1fji29QJVBsRiJAq63fpHwM1gArfEuX2pmp1UtOyWM3jFKJLrfTCtqYcXAeS4UkCdu%2FK%2BgtdD5P2v4s6vRLiJ688kQMXh0Qy9rkUSp6Q7cdIU0lMOj66b8GOqUBiZe%2FkgBUUgR4vkh%2BCZ8tsIYkkMCLtvzzTyl379LL7iU8HCjxtUcMMtWlwrQ0K8n4bYfBJJs%2B%2FbnZZF6QkgLCpDBgUXkfCtLP7dHTVr7PzouxbsguAnmF5H0Yv2RN9HdT%2FTP%2B8fESa4fuF4%2B%2FFYXY3wt01R%2BxjB7eDPvBQbcolL8qvIv90qdGDxibULMe0hnkSIX1srdMy8Cf2bAqFRWVVil1AoID&X-Amz-Signature=6c1f22e80cebcaf5f1575ee51058068ae22179c5b29cb150ed10b376be0c5068&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R26XBI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCseFW6VmgDccOpb6FPYb8W1ZdlOCd1KYL2r1SxRoD0bQIgJds%2BraoMGEFDOwCdOcdrJZDz0JOcMhkMxFOrLeR%2Fd0kqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTuWa7lLx%2BhdaQV%2BCrcA0MjQ14LJN4ppBtshDrsormR1M5mTDXbrE7kw2GzuLrvGJX03DA3Fn48VaYxvwhSNhuvVmnaGPs2QJFIP3yKDr35MNWXjFbFlPvoJcaeWRtdd8Tp9NkvzDY70V8sje1RqVD%2Fv3BI4SNMQkgBXDgMrHzKROxzJMGQpeqkX%2F7gtWOjhELNebRlI7i1OLhR4LRisCJkGMJMffWt%2BCJSgGLHUU0Cpeqd%2BJV%2FH4uAhZta94VNav9YS9qz2aiGWe9rA0TuxgwXHSsA%2Fv7CO0zgH7GlL0cq5EFiPoXFrA89Unt7E4DMNJf4ARbtuUCcG2CDRLyacs%2BNHlCmEvnxCHZiumNE4%2Bz6SSPTqTQoUs%2F8JCJKpShEB1Rc8SD%2BaSUMrNBM8%2Ba6lwlS7X%2B1HF%2FvrXe%2FoPn1zFC4MlgqZioigw%2BQQlJRprjmsMhfz%2BfXaEuwzzKSmVwRUu%2Bb%2Bb8lGBXwd2IwWx8Oktx8U%2Fpr%2BU%2Fvyx3PiOE4JobMS3Gn1yU7Jg2xXz8iSsYdpwNTE6XOuvcXZ1fji29QJVBsRiJAq63fpHwM1gArfEuX2pmp1UtOyWM3jFKJLrfTCtqYcXAeS4UkCdu%2FK%2BgtdD5P2v4s6vRLiJ688kQMXh0Qy9rkUSp6Q7cdIU0lMOj66b8GOqUBiZe%2FkgBUUgR4vkh%2BCZ8tsIYkkMCLtvzzTyl379LL7iU8HCjxtUcMMtWlwrQ0K8n4bYfBJJs%2B%2FbnZZF6QkgLCpDBgUXkfCtLP7dHTVr7PzouxbsguAnmF5H0Yv2RN9HdT%2FTP%2B8fESa4fuF4%2B%2FFYXY3wt01R%2BxjB7eDPvBQbcolL8qvIv90qdGDxibULMe0hnkSIX1srdMy8Cf2bAqFRWVVil1AoID&X-Amz-Signature=cc56c82e678b46bf5b045c993339e6f2419b9f9de42acb4774de5a1a44ba0b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5R26XBI%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T170302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCseFW6VmgDccOpb6FPYb8W1ZdlOCd1KYL2r1SxRoD0bQIgJds%2BraoMGEFDOwCdOcdrJZDz0JOcMhkMxFOrLeR%2Fd0kqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTuWa7lLx%2BhdaQV%2BCrcA0MjQ14LJN4ppBtshDrsormR1M5mTDXbrE7kw2GzuLrvGJX03DA3Fn48VaYxvwhSNhuvVmnaGPs2QJFIP3yKDr35MNWXjFbFlPvoJcaeWRtdd8Tp9NkvzDY70V8sje1RqVD%2Fv3BI4SNMQkgBXDgMrHzKROxzJMGQpeqkX%2F7gtWOjhELNebRlI7i1OLhR4LRisCJkGMJMffWt%2BCJSgGLHUU0Cpeqd%2BJV%2FH4uAhZta94VNav9YS9qz2aiGWe9rA0TuxgwXHSsA%2Fv7CO0zgH7GlL0cq5EFiPoXFrA89Unt7E4DMNJf4ARbtuUCcG2CDRLyacs%2BNHlCmEvnxCHZiumNE4%2Bz6SSPTqTQoUs%2F8JCJKpShEB1Rc8SD%2BaSUMrNBM8%2Ba6lwlS7X%2B1HF%2FvrXe%2FoPn1zFC4MlgqZioigw%2BQQlJRprjmsMhfz%2BfXaEuwzzKSmVwRUu%2Bb%2Bb8lGBXwd2IwWx8Oktx8U%2Fpr%2BU%2Fvyx3PiOE4JobMS3Gn1yU7Jg2xXz8iSsYdpwNTE6XOuvcXZ1fji29QJVBsRiJAq63fpHwM1gArfEuX2pmp1UtOyWM3jFKJLrfTCtqYcXAeS4UkCdu%2FK%2BgtdD5P2v4s6vRLiJ688kQMXh0Qy9rkUSp6Q7cdIU0lMOj66b8GOqUBiZe%2FkgBUUgR4vkh%2BCZ8tsIYkkMCLtvzzTyl379LL7iU8HCjxtUcMMtWlwrQ0K8n4bYfBJJs%2B%2FbnZZF6QkgLCpDBgUXkfCtLP7dHTVr7PzouxbsguAnmF5H0Yv2RN9HdT%2FTP%2B8fESa4fuF4%2B%2FFYXY3wt01R%2BxjB7eDPvBQbcolL8qvIv90qdGDxibULMe0hnkSIX1srdMy8Cf2bAqFRWVVil1AoID&X-Amz-Signature=0b84063bf5e8a840dde5cfbd74c0bd28e5eef999c1d778f84b689ee2bc10fcc7&X-Amz-SignedHeaders=host&x-id=GetObject)
