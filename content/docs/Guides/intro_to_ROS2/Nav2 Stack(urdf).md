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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2SUXX7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClP4WnTJ45a2giP2xV48MP4t7ZMJ%2BI9Rpcw6KxS2wdkwIgfoVG1bN2pRfwgtW06tt%2BlVGnHW9wir3%2BSJK3ecbw1boqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyAeZ5TC8KAi3fI1CrcA%2F9HVK3mRWYXCdvprc%2FxkSC0CZP5hzfo1k3XepYTW%2FhDa141sTL5x%2BC383fvqOOT0bcEj8Gbc4MjxXbp%2Bi6ycotjXvW13BLlokOmRqF55aRarcjZyKboyCvXwLVvKTydYa8mK%2BL4VSFedY6WxddobNwCk%2F4a6e4LkXIZJ9hJQUjbIb%2B5Cm625qXlTYlVHR6P6Ffael3ui4RIhuoXkgV0FAtq8Znczy%2BI2jwd64%2FJzI8o%2F3K1vAZA9i3gelPb%2BuupNEgVoUH%2BNOQ2yV31CVgJ2AEuarMj8l8M1SbsOMlUwIPDOrjP9kYoZsPU4LVqVZcloxp%2FGs77gvV3XOcGqaSP6GwP6O8Y6WV%2F064Z35n%2Bx8mGR7CB2capNhhuPMjnsMphG%2FRzxZhD8WmZvJL8RBDhlqKtg78ZW6ZHku%2BqlGMn5T4QCW63m2xfyGEWLaGJcPPQA3RKErtXnFYjyF1boosEUsRbqESieYqkiKl4FgbtVe%2B4bLBOoePwl7tjcwzVlf3Nj0MFwg1Y2bTxpX98kc8qM%2BNHpfmSFzC3no3uiE2i3bIzNlHPtC5vWFi3x14%2FmRII6lahi8GIkNb9nF6CzsbpHZgbelu9sc66N1O6%2BGWiteLc6fOAp7EfXCO%2FwjZ4MNb5pb0GOqUBTv1ju8mvSKI3iVCQWgalVNrw3PqisV7mR%2FkWIIqVqSzqTK015vAUNngPj%2BQAVYoEl6gWspbQLl0sF%2BDSFyl7fr1ioIyWb7kIk%2FpaxxrT5I1XbTeyfqrHo2uG%2F0Y3YxhNUFPOuZLcR5U3dukiPP24BavO2IA796GTCmlfOSXNKgIgm4dI1ORPCz5wymS7htTlLw5tcYI7ANCixDuCsHiot2jDkNg7&X-Amz-Signature=d8719855c0a019712de237bde79d9ebfd5c45d5753c8498995184eb3f8fa9d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2SUXX7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClP4WnTJ45a2giP2xV48MP4t7ZMJ%2BI9Rpcw6KxS2wdkwIgfoVG1bN2pRfwgtW06tt%2BlVGnHW9wir3%2BSJK3ecbw1boqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyAeZ5TC8KAi3fI1CrcA%2F9HVK3mRWYXCdvprc%2FxkSC0CZP5hzfo1k3XepYTW%2FhDa141sTL5x%2BC383fvqOOT0bcEj8Gbc4MjxXbp%2Bi6ycotjXvW13BLlokOmRqF55aRarcjZyKboyCvXwLVvKTydYa8mK%2BL4VSFedY6WxddobNwCk%2F4a6e4LkXIZJ9hJQUjbIb%2B5Cm625qXlTYlVHR6P6Ffael3ui4RIhuoXkgV0FAtq8Znczy%2BI2jwd64%2FJzI8o%2F3K1vAZA9i3gelPb%2BuupNEgVoUH%2BNOQ2yV31CVgJ2AEuarMj8l8M1SbsOMlUwIPDOrjP9kYoZsPU4LVqVZcloxp%2FGs77gvV3XOcGqaSP6GwP6O8Y6WV%2F064Z35n%2Bx8mGR7CB2capNhhuPMjnsMphG%2FRzxZhD8WmZvJL8RBDhlqKtg78ZW6ZHku%2BqlGMn5T4QCW63m2xfyGEWLaGJcPPQA3RKErtXnFYjyF1boosEUsRbqESieYqkiKl4FgbtVe%2B4bLBOoePwl7tjcwzVlf3Nj0MFwg1Y2bTxpX98kc8qM%2BNHpfmSFzC3no3uiE2i3bIzNlHPtC5vWFi3x14%2FmRII6lahi8GIkNb9nF6CzsbpHZgbelu9sc66N1O6%2BGWiteLc6fOAp7EfXCO%2FwjZ4MNb5pb0GOqUBTv1ju8mvSKI3iVCQWgalVNrw3PqisV7mR%2FkWIIqVqSzqTK015vAUNngPj%2BQAVYoEl6gWspbQLl0sF%2BDSFyl7fr1ioIyWb7kIk%2FpaxxrT5I1XbTeyfqrHo2uG%2F0Y3YxhNUFPOuZLcR5U3dukiPP24BavO2IA796GTCmlfOSXNKgIgm4dI1ORPCz5wymS7htTlLw5tcYI7ANCixDuCsHiot2jDkNg7&X-Amz-Signature=6c16943980e97b240f6345a7cfcb3308fee26a1d0b6a47b0310822cc559fb1bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2SUXX7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClP4WnTJ45a2giP2xV48MP4t7ZMJ%2BI9Rpcw6KxS2wdkwIgfoVG1bN2pRfwgtW06tt%2BlVGnHW9wir3%2BSJK3ecbw1boqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyAeZ5TC8KAi3fI1CrcA%2F9HVK3mRWYXCdvprc%2FxkSC0CZP5hzfo1k3XepYTW%2FhDa141sTL5x%2BC383fvqOOT0bcEj8Gbc4MjxXbp%2Bi6ycotjXvW13BLlokOmRqF55aRarcjZyKboyCvXwLVvKTydYa8mK%2BL4VSFedY6WxddobNwCk%2F4a6e4LkXIZJ9hJQUjbIb%2B5Cm625qXlTYlVHR6P6Ffael3ui4RIhuoXkgV0FAtq8Znczy%2BI2jwd64%2FJzI8o%2F3K1vAZA9i3gelPb%2BuupNEgVoUH%2BNOQ2yV31CVgJ2AEuarMj8l8M1SbsOMlUwIPDOrjP9kYoZsPU4LVqVZcloxp%2FGs77gvV3XOcGqaSP6GwP6O8Y6WV%2F064Z35n%2Bx8mGR7CB2capNhhuPMjnsMphG%2FRzxZhD8WmZvJL8RBDhlqKtg78ZW6ZHku%2BqlGMn5T4QCW63m2xfyGEWLaGJcPPQA3RKErtXnFYjyF1boosEUsRbqESieYqkiKl4FgbtVe%2B4bLBOoePwl7tjcwzVlf3Nj0MFwg1Y2bTxpX98kc8qM%2BNHpfmSFzC3no3uiE2i3bIzNlHPtC5vWFi3x14%2FmRII6lahi8GIkNb9nF6CzsbpHZgbelu9sc66N1O6%2BGWiteLc6fOAp7EfXCO%2FwjZ4MNb5pb0GOqUBTv1ju8mvSKI3iVCQWgalVNrw3PqisV7mR%2FkWIIqVqSzqTK015vAUNngPj%2BQAVYoEl6gWspbQLl0sF%2BDSFyl7fr1ioIyWb7kIk%2FpaxxrT5I1XbTeyfqrHo2uG%2F0Y3YxhNUFPOuZLcR5U3dukiPP24BavO2IA796GTCmlfOSXNKgIgm4dI1ORPCz5wymS7htTlLw5tcYI7ANCixDuCsHiot2jDkNg7&X-Amz-Signature=78208fb1898b7e6b2c722567249fb15d25a479e1723a64539c240127fe915196&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2SUXX7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClP4WnTJ45a2giP2xV48MP4t7ZMJ%2BI9Rpcw6KxS2wdkwIgfoVG1bN2pRfwgtW06tt%2BlVGnHW9wir3%2BSJK3ecbw1boqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyAeZ5TC8KAi3fI1CrcA%2F9HVK3mRWYXCdvprc%2FxkSC0CZP5hzfo1k3XepYTW%2FhDa141sTL5x%2BC383fvqOOT0bcEj8Gbc4MjxXbp%2Bi6ycotjXvW13BLlokOmRqF55aRarcjZyKboyCvXwLVvKTydYa8mK%2BL4VSFedY6WxddobNwCk%2F4a6e4LkXIZJ9hJQUjbIb%2B5Cm625qXlTYlVHR6P6Ffael3ui4RIhuoXkgV0FAtq8Znczy%2BI2jwd64%2FJzI8o%2F3K1vAZA9i3gelPb%2BuupNEgVoUH%2BNOQ2yV31CVgJ2AEuarMj8l8M1SbsOMlUwIPDOrjP9kYoZsPU4LVqVZcloxp%2FGs77gvV3XOcGqaSP6GwP6O8Y6WV%2F064Z35n%2Bx8mGR7CB2capNhhuPMjnsMphG%2FRzxZhD8WmZvJL8RBDhlqKtg78ZW6ZHku%2BqlGMn5T4QCW63m2xfyGEWLaGJcPPQA3RKErtXnFYjyF1boosEUsRbqESieYqkiKl4FgbtVe%2B4bLBOoePwl7tjcwzVlf3Nj0MFwg1Y2bTxpX98kc8qM%2BNHpfmSFzC3no3uiE2i3bIzNlHPtC5vWFi3x14%2FmRII6lahi8GIkNb9nF6CzsbpHZgbelu9sc66N1O6%2BGWiteLc6fOAp7EfXCO%2FwjZ4MNb5pb0GOqUBTv1ju8mvSKI3iVCQWgalVNrw3PqisV7mR%2FkWIIqVqSzqTK015vAUNngPj%2BQAVYoEl6gWspbQLl0sF%2BDSFyl7fr1ioIyWb7kIk%2FpaxxrT5I1XbTeyfqrHo2uG%2F0Y3YxhNUFPOuZLcR5U3dukiPP24BavO2IA796GTCmlfOSXNKgIgm4dI1ORPCz5wymS7htTlLw5tcYI7ANCixDuCsHiot2jDkNg7&X-Amz-Signature=0cdcf84c2a1600e4dd9b3687b341f69d62667d596f8fd8e37a01da062cda78fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2SUXX7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClP4WnTJ45a2giP2xV48MP4t7ZMJ%2BI9Rpcw6KxS2wdkwIgfoVG1bN2pRfwgtW06tt%2BlVGnHW9wir3%2BSJK3ecbw1boqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyAeZ5TC8KAi3fI1CrcA%2F9HVK3mRWYXCdvprc%2FxkSC0CZP5hzfo1k3XepYTW%2FhDa141sTL5x%2BC383fvqOOT0bcEj8Gbc4MjxXbp%2Bi6ycotjXvW13BLlokOmRqF55aRarcjZyKboyCvXwLVvKTydYa8mK%2BL4VSFedY6WxddobNwCk%2F4a6e4LkXIZJ9hJQUjbIb%2B5Cm625qXlTYlVHR6P6Ffael3ui4RIhuoXkgV0FAtq8Znczy%2BI2jwd64%2FJzI8o%2F3K1vAZA9i3gelPb%2BuupNEgVoUH%2BNOQ2yV31CVgJ2AEuarMj8l8M1SbsOMlUwIPDOrjP9kYoZsPU4LVqVZcloxp%2FGs77gvV3XOcGqaSP6GwP6O8Y6WV%2F064Z35n%2Bx8mGR7CB2capNhhuPMjnsMphG%2FRzxZhD8WmZvJL8RBDhlqKtg78ZW6ZHku%2BqlGMn5T4QCW63m2xfyGEWLaGJcPPQA3RKErtXnFYjyF1boosEUsRbqESieYqkiKl4FgbtVe%2B4bLBOoePwl7tjcwzVlf3Nj0MFwg1Y2bTxpX98kc8qM%2BNHpfmSFzC3no3uiE2i3bIzNlHPtC5vWFi3x14%2FmRII6lahi8GIkNb9nF6CzsbpHZgbelu9sc66N1O6%2BGWiteLc6fOAp7EfXCO%2FwjZ4MNb5pb0GOqUBTv1ju8mvSKI3iVCQWgalVNrw3PqisV7mR%2FkWIIqVqSzqTK015vAUNngPj%2BQAVYoEl6gWspbQLl0sF%2BDSFyl7fr1ioIyWb7kIk%2FpaxxrT5I1XbTeyfqrHo2uG%2F0Y3YxhNUFPOuZLcR5U3dukiPP24BavO2IA796GTCmlfOSXNKgIgm4dI1ORPCz5wymS7htTlLw5tcYI7ANCixDuCsHiot2jDkNg7&X-Amz-Signature=e409a3a369c99cf7be3ea1c31fccaf24cc88514a7aa301835ea5b67f7e557005&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2SUXX7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClP4WnTJ45a2giP2xV48MP4t7ZMJ%2BI9Rpcw6KxS2wdkwIgfoVG1bN2pRfwgtW06tt%2BlVGnHW9wir3%2BSJK3ecbw1boqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyAeZ5TC8KAi3fI1CrcA%2F9HVK3mRWYXCdvprc%2FxkSC0CZP5hzfo1k3XepYTW%2FhDa141sTL5x%2BC383fvqOOT0bcEj8Gbc4MjxXbp%2Bi6ycotjXvW13BLlokOmRqF55aRarcjZyKboyCvXwLVvKTydYa8mK%2BL4VSFedY6WxddobNwCk%2F4a6e4LkXIZJ9hJQUjbIb%2B5Cm625qXlTYlVHR6P6Ffael3ui4RIhuoXkgV0FAtq8Znczy%2BI2jwd64%2FJzI8o%2F3K1vAZA9i3gelPb%2BuupNEgVoUH%2BNOQ2yV31CVgJ2AEuarMj8l8M1SbsOMlUwIPDOrjP9kYoZsPU4LVqVZcloxp%2FGs77gvV3XOcGqaSP6GwP6O8Y6WV%2F064Z35n%2Bx8mGR7CB2capNhhuPMjnsMphG%2FRzxZhD8WmZvJL8RBDhlqKtg78ZW6ZHku%2BqlGMn5T4QCW63m2xfyGEWLaGJcPPQA3RKErtXnFYjyF1boosEUsRbqESieYqkiKl4FgbtVe%2B4bLBOoePwl7tjcwzVlf3Nj0MFwg1Y2bTxpX98kc8qM%2BNHpfmSFzC3no3uiE2i3bIzNlHPtC5vWFi3x14%2FmRII6lahi8GIkNb9nF6CzsbpHZgbelu9sc66N1O6%2BGWiteLc6fOAp7EfXCO%2FwjZ4MNb5pb0GOqUBTv1ju8mvSKI3iVCQWgalVNrw3PqisV7mR%2FkWIIqVqSzqTK015vAUNngPj%2BQAVYoEl6gWspbQLl0sF%2BDSFyl7fr1ioIyWb7kIk%2FpaxxrT5I1XbTeyfqrHo2uG%2F0Y3YxhNUFPOuZLcR5U3dukiPP24BavO2IA796GTCmlfOSXNKgIgm4dI1ORPCz5wymS7htTlLw5tcYI7ANCixDuCsHiot2jDkNg7&X-Amz-Signature=7130b10e47e1c6a568abea70beb903d5638b9337032cc058f0d97bc2c1522d75&X-Amz-SignedHeaders=host&x-id=GetObject)
