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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CW4L3S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Frf2eJ%2BNXibMZyhd0%2FmlwsMmJC1I7LCx0v3e4Q%2BlHMQIhANiNoJzyshm77INI%2Fjs2TdCWVt77LR2sMcPRDG2GzonJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXLp7OSUJgnczHucq3APw9UsneHJJRvwU2RHt9SKvw%2FiANUrgZceiXsQ%2Fi8rbxMJY7Kmpl9o%2Fgp2RC3d6%2FQLuD%2BuvWrtlPh%2FaB0Y0rUHyLksdsnN8mZam%2ByulH%2BB2ZRxFwXnKxhrrlVnesP%2FHdx6vYzOQErJYWHixSDNp%2BOpHinieFPuoP93ZzTAWFyNkrvRbDRUcntMNm6SdR%2FIpaPg7PLLMMr9s%2BwP6pZDno1tYzagn6kHIfW1ytiFI8YY9nHDLv1Z3Q2uIqkXIQhS2FyPsxgvjQTfdXbdkiN3iGOVHyYaaoRQ%2BG%2Bz7Z6BYj70YYJLogFoUo5gm2XCFO5udKwEKylIdjRj6S0PkAPCAlR1PpJ4lWTBkYXf9Gwjws%2BP5275K%2B3M4OqMokZKhJYexwl4MEHpkYm9hU%2BdCwzBrBilz4EsvsrLv1vAJLeO5daMLDBY%2FfDx4LnjmK%2FxBn7wAXWm0Qyi4C8%2BvO4Zelv%2Fqg8xX6R96bIsQFa1pdbxnkZz9w%2Bzeb9%2FYj2mRObV%2BwPq%2B1m2YJZ6EMWVmeuNhI2BVoEixa0bxI0Gn0699BGXYtmJ9rnLmc61yBhGP%2Fmi7hrQKXaLttEe4OvvpV09AzMRuL368ZXtU6lgEKUKUow01nGdMGmgWcPHj1Dmc7N0rAjCKn4S%2FBjqkASN6cK9uil63Ua62L%2B1206pc5%2Foi%2B2PN2RgImxPCCIiCeEi38yb2Gexb1qfZaynxAzP2A72oFriUS4eTHPczco8tzErFsKJaGgTVuAhpaJy%2F3pM%2FPz8iJcdV0fux89hAF6qucf0VfDR0sa3%2F8P8prktcKeIpQsuLFSkzCZj%2F9R0clEVcAd9f8oTY4GuSX%2BmXjLB2zJUGLQuSL5aPd2oiI23J6ZHm&X-Amz-Signature=e7152f19c30a8b1c361da682222a9b58213a270f74382854efb5fea0d265df2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CW4L3S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Frf2eJ%2BNXibMZyhd0%2FmlwsMmJC1I7LCx0v3e4Q%2BlHMQIhANiNoJzyshm77INI%2Fjs2TdCWVt77LR2sMcPRDG2GzonJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXLp7OSUJgnczHucq3APw9UsneHJJRvwU2RHt9SKvw%2FiANUrgZceiXsQ%2Fi8rbxMJY7Kmpl9o%2Fgp2RC3d6%2FQLuD%2BuvWrtlPh%2FaB0Y0rUHyLksdsnN8mZam%2ByulH%2BB2ZRxFwXnKxhrrlVnesP%2FHdx6vYzOQErJYWHixSDNp%2BOpHinieFPuoP93ZzTAWFyNkrvRbDRUcntMNm6SdR%2FIpaPg7PLLMMr9s%2BwP6pZDno1tYzagn6kHIfW1ytiFI8YY9nHDLv1Z3Q2uIqkXIQhS2FyPsxgvjQTfdXbdkiN3iGOVHyYaaoRQ%2BG%2Bz7Z6BYj70YYJLogFoUo5gm2XCFO5udKwEKylIdjRj6S0PkAPCAlR1PpJ4lWTBkYXf9Gwjws%2BP5275K%2B3M4OqMokZKhJYexwl4MEHpkYm9hU%2BdCwzBrBilz4EsvsrLv1vAJLeO5daMLDBY%2FfDx4LnjmK%2FxBn7wAXWm0Qyi4C8%2BvO4Zelv%2Fqg8xX6R96bIsQFa1pdbxnkZz9w%2Bzeb9%2FYj2mRObV%2BwPq%2B1m2YJZ6EMWVmeuNhI2BVoEixa0bxI0Gn0699BGXYtmJ9rnLmc61yBhGP%2Fmi7hrQKXaLttEe4OvvpV09AzMRuL368ZXtU6lgEKUKUow01nGdMGmgWcPHj1Dmc7N0rAjCKn4S%2FBjqkASN6cK9uil63Ua62L%2B1206pc5%2Foi%2B2PN2RgImxPCCIiCeEi38yb2Gexb1qfZaynxAzP2A72oFriUS4eTHPczco8tzErFsKJaGgTVuAhpaJy%2F3pM%2FPz8iJcdV0fux89hAF6qucf0VfDR0sa3%2F8P8prktcKeIpQsuLFSkzCZj%2F9R0clEVcAd9f8oTY4GuSX%2BmXjLB2zJUGLQuSL5aPd2oiI23J6ZHm&X-Amz-Signature=90e83df484dc5cecd4501aeca022e0339b60c6168e145cfb22ffa6b9947de55b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CW4L3S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Frf2eJ%2BNXibMZyhd0%2FmlwsMmJC1I7LCx0v3e4Q%2BlHMQIhANiNoJzyshm77INI%2Fjs2TdCWVt77LR2sMcPRDG2GzonJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXLp7OSUJgnczHucq3APw9UsneHJJRvwU2RHt9SKvw%2FiANUrgZceiXsQ%2Fi8rbxMJY7Kmpl9o%2Fgp2RC3d6%2FQLuD%2BuvWrtlPh%2FaB0Y0rUHyLksdsnN8mZam%2ByulH%2BB2ZRxFwXnKxhrrlVnesP%2FHdx6vYzOQErJYWHixSDNp%2BOpHinieFPuoP93ZzTAWFyNkrvRbDRUcntMNm6SdR%2FIpaPg7PLLMMr9s%2BwP6pZDno1tYzagn6kHIfW1ytiFI8YY9nHDLv1Z3Q2uIqkXIQhS2FyPsxgvjQTfdXbdkiN3iGOVHyYaaoRQ%2BG%2Bz7Z6BYj70YYJLogFoUo5gm2XCFO5udKwEKylIdjRj6S0PkAPCAlR1PpJ4lWTBkYXf9Gwjws%2BP5275K%2B3M4OqMokZKhJYexwl4MEHpkYm9hU%2BdCwzBrBilz4EsvsrLv1vAJLeO5daMLDBY%2FfDx4LnjmK%2FxBn7wAXWm0Qyi4C8%2BvO4Zelv%2Fqg8xX6R96bIsQFa1pdbxnkZz9w%2Bzeb9%2FYj2mRObV%2BwPq%2B1m2YJZ6EMWVmeuNhI2BVoEixa0bxI0Gn0699BGXYtmJ9rnLmc61yBhGP%2Fmi7hrQKXaLttEe4OvvpV09AzMRuL368ZXtU6lgEKUKUow01nGdMGmgWcPHj1Dmc7N0rAjCKn4S%2FBjqkASN6cK9uil63Ua62L%2B1206pc5%2Foi%2B2PN2RgImxPCCIiCeEi38yb2Gexb1qfZaynxAzP2A72oFriUS4eTHPczco8tzErFsKJaGgTVuAhpaJy%2F3pM%2FPz8iJcdV0fux89hAF6qucf0VfDR0sa3%2F8P8prktcKeIpQsuLFSkzCZj%2F9R0clEVcAd9f8oTY4GuSX%2BmXjLB2zJUGLQuSL5aPd2oiI23J6ZHm&X-Amz-Signature=981bae25d24d5b9dd7ab56c6663b63250d3eeac83c19a78bd2637fad6e30dd74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CW4L3S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Frf2eJ%2BNXibMZyhd0%2FmlwsMmJC1I7LCx0v3e4Q%2BlHMQIhANiNoJzyshm77INI%2Fjs2TdCWVt77LR2sMcPRDG2GzonJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXLp7OSUJgnczHucq3APw9UsneHJJRvwU2RHt9SKvw%2FiANUrgZceiXsQ%2Fi8rbxMJY7Kmpl9o%2Fgp2RC3d6%2FQLuD%2BuvWrtlPh%2FaB0Y0rUHyLksdsnN8mZam%2ByulH%2BB2ZRxFwXnKxhrrlVnesP%2FHdx6vYzOQErJYWHixSDNp%2BOpHinieFPuoP93ZzTAWFyNkrvRbDRUcntMNm6SdR%2FIpaPg7PLLMMr9s%2BwP6pZDno1tYzagn6kHIfW1ytiFI8YY9nHDLv1Z3Q2uIqkXIQhS2FyPsxgvjQTfdXbdkiN3iGOVHyYaaoRQ%2BG%2Bz7Z6BYj70YYJLogFoUo5gm2XCFO5udKwEKylIdjRj6S0PkAPCAlR1PpJ4lWTBkYXf9Gwjws%2BP5275K%2B3M4OqMokZKhJYexwl4MEHpkYm9hU%2BdCwzBrBilz4EsvsrLv1vAJLeO5daMLDBY%2FfDx4LnjmK%2FxBn7wAXWm0Qyi4C8%2BvO4Zelv%2Fqg8xX6R96bIsQFa1pdbxnkZz9w%2Bzeb9%2FYj2mRObV%2BwPq%2B1m2YJZ6EMWVmeuNhI2BVoEixa0bxI0Gn0699BGXYtmJ9rnLmc61yBhGP%2Fmi7hrQKXaLttEe4OvvpV09AzMRuL368ZXtU6lgEKUKUow01nGdMGmgWcPHj1Dmc7N0rAjCKn4S%2FBjqkASN6cK9uil63Ua62L%2B1206pc5%2Foi%2B2PN2RgImxPCCIiCeEi38yb2Gexb1qfZaynxAzP2A72oFriUS4eTHPczco8tzErFsKJaGgTVuAhpaJy%2F3pM%2FPz8iJcdV0fux89hAF6qucf0VfDR0sa3%2F8P8prktcKeIpQsuLFSkzCZj%2F9R0clEVcAd9f8oTY4GuSX%2BmXjLB2zJUGLQuSL5aPd2oiI23J6ZHm&X-Amz-Signature=9ab0970c9fa8198c92e0aa8d93a51b2884d13774f5d63f03664a77b4a37f60dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CW4L3S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Frf2eJ%2BNXibMZyhd0%2FmlwsMmJC1I7LCx0v3e4Q%2BlHMQIhANiNoJzyshm77INI%2Fjs2TdCWVt77LR2sMcPRDG2GzonJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXLp7OSUJgnczHucq3APw9UsneHJJRvwU2RHt9SKvw%2FiANUrgZceiXsQ%2Fi8rbxMJY7Kmpl9o%2Fgp2RC3d6%2FQLuD%2BuvWrtlPh%2FaB0Y0rUHyLksdsnN8mZam%2ByulH%2BB2ZRxFwXnKxhrrlVnesP%2FHdx6vYzOQErJYWHixSDNp%2BOpHinieFPuoP93ZzTAWFyNkrvRbDRUcntMNm6SdR%2FIpaPg7PLLMMr9s%2BwP6pZDno1tYzagn6kHIfW1ytiFI8YY9nHDLv1Z3Q2uIqkXIQhS2FyPsxgvjQTfdXbdkiN3iGOVHyYaaoRQ%2BG%2Bz7Z6BYj70YYJLogFoUo5gm2XCFO5udKwEKylIdjRj6S0PkAPCAlR1PpJ4lWTBkYXf9Gwjws%2BP5275K%2B3M4OqMokZKhJYexwl4MEHpkYm9hU%2BdCwzBrBilz4EsvsrLv1vAJLeO5daMLDBY%2FfDx4LnjmK%2FxBn7wAXWm0Qyi4C8%2BvO4Zelv%2Fqg8xX6R96bIsQFa1pdbxnkZz9w%2Bzeb9%2FYj2mRObV%2BwPq%2B1m2YJZ6EMWVmeuNhI2BVoEixa0bxI0Gn0699BGXYtmJ9rnLmc61yBhGP%2Fmi7hrQKXaLttEe4OvvpV09AzMRuL368ZXtU6lgEKUKUow01nGdMGmgWcPHj1Dmc7N0rAjCKn4S%2FBjqkASN6cK9uil63Ua62L%2B1206pc5%2Foi%2B2PN2RgImxPCCIiCeEi38yb2Gexb1qfZaynxAzP2A72oFriUS4eTHPczco8tzErFsKJaGgTVuAhpaJy%2F3pM%2FPz8iJcdV0fux89hAF6qucf0VfDR0sa3%2F8P8prktcKeIpQsuLFSkzCZj%2F9R0clEVcAd9f8oTY4GuSX%2BmXjLB2zJUGLQuSL5aPd2oiI23J6ZHm&X-Amz-Signature=3e22158c87ebea0693954bf222bb4a862e6adc64a75e9a72d2ca1ae9f1a0fa11&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CW4L3S%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Frf2eJ%2BNXibMZyhd0%2FmlwsMmJC1I7LCx0v3e4Q%2BlHMQIhANiNoJzyshm77INI%2Fjs2TdCWVt77LR2sMcPRDG2GzonJKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfXLp7OSUJgnczHucq3APw9UsneHJJRvwU2RHt9SKvw%2FiANUrgZceiXsQ%2Fi8rbxMJY7Kmpl9o%2Fgp2RC3d6%2FQLuD%2BuvWrtlPh%2FaB0Y0rUHyLksdsnN8mZam%2ByulH%2BB2ZRxFwXnKxhrrlVnesP%2FHdx6vYzOQErJYWHixSDNp%2BOpHinieFPuoP93ZzTAWFyNkrvRbDRUcntMNm6SdR%2FIpaPg7PLLMMr9s%2BwP6pZDno1tYzagn6kHIfW1ytiFI8YY9nHDLv1Z3Q2uIqkXIQhS2FyPsxgvjQTfdXbdkiN3iGOVHyYaaoRQ%2BG%2Bz7Z6BYj70YYJLogFoUo5gm2XCFO5udKwEKylIdjRj6S0PkAPCAlR1PpJ4lWTBkYXf9Gwjws%2BP5275K%2B3M4OqMokZKhJYexwl4MEHpkYm9hU%2BdCwzBrBilz4EsvsrLv1vAJLeO5daMLDBY%2FfDx4LnjmK%2FxBn7wAXWm0Qyi4C8%2BvO4Zelv%2Fqg8xX6R96bIsQFa1pdbxnkZz9w%2Bzeb9%2FYj2mRObV%2BwPq%2B1m2YJZ6EMWVmeuNhI2BVoEixa0bxI0Gn0699BGXYtmJ9rnLmc61yBhGP%2Fmi7hrQKXaLttEe4OvvpV09AzMRuL368ZXtU6lgEKUKUow01nGdMGmgWcPHj1Dmc7N0rAjCKn4S%2FBjqkASN6cK9uil63Ua62L%2B1206pc5%2Foi%2B2PN2RgImxPCCIiCeEi38yb2Gexb1qfZaynxAzP2A72oFriUS4eTHPczco8tzErFsKJaGgTVuAhpaJy%2F3pM%2FPz8iJcdV0fux89hAF6qucf0VfDR0sa3%2F8P8prktcKeIpQsuLFSkzCZj%2F9R0clEVcAd9f8oTY4GuSX%2BmXjLB2zJUGLQuSL5aPd2oiI23J6ZHm&X-Amz-Signature=1eb7ce4ea6137ac853d9bf6db446ee68cf7bedc528eed744673a0ce080022b14&X-Amz-SignedHeaders=host&x-id=GetObject)
