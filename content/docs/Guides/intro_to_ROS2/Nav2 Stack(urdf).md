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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KM5RPVI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAr7dfcD6%2B9No%2BKcdfcB6kN%2FoGyYTeDU4N80BKqbzbM2AiAtXJQvDMBCuL3pu111lL%2BL%2FniZbAyuMiRW%2FBBzCJorOSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtJHgEBbL0g%2B%2B71%2FGKtwDYir2oIVCzDnZzfw0t7eOYesS450n1agH1AwfZZ912Nse%2B8INhqD%2FT5nTUgIWg%2FBlv5gb2PQARh3Dp%2FKK4%2Bx88egSDQV%2BENAbMA5z8qmNYcterYjLvBfONdgbRyzVm7OtF%2BDihObsnRIrCzT2exRMK1MWcxLUgOM%2FU6hTUHRvelavVBzqBqnYX6zqMR0JNUz9S5JG3GLu8BcGjbKhWKxy7PrOAgRuiyI1jb08oeFkbTdosqao9PLx%2FMFTRG3QIJCQK3dOvJLtcDDo9lubWzdTmtu33hqefiA6MO0r0V1EHGY%2FyrEHNDWuV8QBnCwHDNPMQX8HtPMdSMa87kL5NeKlcnEfjGujuOPpKYXyvwYfo0Srfp8LZ%2BpXmlaEZaKnBofluWNxdEBp0W9Os%2F23iL3ql4BTk1mP%2FipDNyS%2Fyeg2NdPPOMNGmJ7pzh%2B730zb3snAl43rFcwUam4YEDNqxFJlNFdHQXTbCr0u6kzDzhNDQoakTvHn%2BFtGVoHkWhIRxGx3%2FMytYNAO9TeH19P8mhe5fLj2%2BvjDdf%2BEXHnxjJ775j0oZjnlJ6wAHncie8S2Cy6CeNaI0ObEHWq4RUT8g2WgUhwX4XEni67yM7wBVYpcs0BnXLcS8OYxp%2BU3wxowoqrywgY6pgG03qOXaog7sMPKPBN%2B6Hgo6JfEx9B4sXkxgpUEr8FwxoWLZPHaQ5Oq0cFoCjratqAxQTxnVnfsJVlzCqvz49ZK9K8VMnQGDDOT%2FVEHA%2Bu2zeymR9WBn29r8Fn%2B9icu%2ByInC3%2FhiXBtmVrmV%2F876zoOuiTYWNyiesSbnfStqT92mSf9Gz2Mck1mE70PF196sr6NfL8lgdFckXzQ1T1PCK2XwV0xDOV7&X-Amz-Signature=d3c01e361446f97b10745b19661b814bc79daac416c2af863e765d011239bd05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KM5RPVI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAr7dfcD6%2B9No%2BKcdfcB6kN%2FoGyYTeDU4N80BKqbzbM2AiAtXJQvDMBCuL3pu111lL%2BL%2FniZbAyuMiRW%2FBBzCJorOSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtJHgEBbL0g%2B%2B71%2FGKtwDYir2oIVCzDnZzfw0t7eOYesS450n1agH1AwfZZ912Nse%2B8INhqD%2FT5nTUgIWg%2FBlv5gb2PQARh3Dp%2FKK4%2Bx88egSDQV%2BENAbMA5z8qmNYcterYjLvBfONdgbRyzVm7OtF%2BDihObsnRIrCzT2exRMK1MWcxLUgOM%2FU6hTUHRvelavVBzqBqnYX6zqMR0JNUz9S5JG3GLu8BcGjbKhWKxy7PrOAgRuiyI1jb08oeFkbTdosqao9PLx%2FMFTRG3QIJCQK3dOvJLtcDDo9lubWzdTmtu33hqefiA6MO0r0V1EHGY%2FyrEHNDWuV8QBnCwHDNPMQX8HtPMdSMa87kL5NeKlcnEfjGujuOPpKYXyvwYfo0Srfp8LZ%2BpXmlaEZaKnBofluWNxdEBp0W9Os%2F23iL3ql4BTk1mP%2FipDNyS%2Fyeg2NdPPOMNGmJ7pzh%2B730zb3snAl43rFcwUam4YEDNqxFJlNFdHQXTbCr0u6kzDzhNDQoakTvHn%2BFtGVoHkWhIRxGx3%2FMytYNAO9TeH19P8mhe5fLj2%2BvjDdf%2BEXHnxjJ775j0oZjnlJ6wAHncie8S2Cy6CeNaI0ObEHWq4RUT8g2WgUhwX4XEni67yM7wBVYpcs0BnXLcS8OYxp%2BU3wxowoqrywgY6pgG03qOXaog7sMPKPBN%2B6Hgo6JfEx9B4sXkxgpUEr8FwxoWLZPHaQ5Oq0cFoCjratqAxQTxnVnfsJVlzCqvz49ZK9K8VMnQGDDOT%2FVEHA%2Bu2zeymR9WBn29r8Fn%2B9icu%2ByInC3%2FhiXBtmVrmV%2F876zoOuiTYWNyiesSbnfStqT92mSf9Gz2Mck1mE70PF196sr6NfL8lgdFckXzQ1T1PCK2XwV0xDOV7&X-Amz-Signature=c9333fb27df0c3e44b7dcb9f79b0b0ed327d8813aea8c67bf30f908093d8c693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KM5RPVI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAr7dfcD6%2B9No%2BKcdfcB6kN%2FoGyYTeDU4N80BKqbzbM2AiAtXJQvDMBCuL3pu111lL%2BL%2FniZbAyuMiRW%2FBBzCJorOSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtJHgEBbL0g%2B%2B71%2FGKtwDYir2oIVCzDnZzfw0t7eOYesS450n1agH1AwfZZ912Nse%2B8INhqD%2FT5nTUgIWg%2FBlv5gb2PQARh3Dp%2FKK4%2Bx88egSDQV%2BENAbMA5z8qmNYcterYjLvBfONdgbRyzVm7OtF%2BDihObsnRIrCzT2exRMK1MWcxLUgOM%2FU6hTUHRvelavVBzqBqnYX6zqMR0JNUz9S5JG3GLu8BcGjbKhWKxy7PrOAgRuiyI1jb08oeFkbTdosqao9PLx%2FMFTRG3QIJCQK3dOvJLtcDDo9lubWzdTmtu33hqefiA6MO0r0V1EHGY%2FyrEHNDWuV8QBnCwHDNPMQX8HtPMdSMa87kL5NeKlcnEfjGujuOPpKYXyvwYfo0Srfp8LZ%2BpXmlaEZaKnBofluWNxdEBp0W9Os%2F23iL3ql4BTk1mP%2FipDNyS%2Fyeg2NdPPOMNGmJ7pzh%2B730zb3snAl43rFcwUam4YEDNqxFJlNFdHQXTbCr0u6kzDzhNDQoakTvHn%2BFtGVoHkWhIRxGx3%2FMytYNAO9TeH19P8mhe5fLj2%2BvjDdf%2BEXHnxjJ775j0oZjnlJ6wAHncie8S2Cy6CeNaI0ObEHWq4RUT8g2WgUhwX4XEni67yM7wBVYpcs0BnXLcS8OYxp%2BU3wxowoqrywgY6pgG03qOXaog7sMPKPBN%2B6Hgo6JfEx9B4sXkxgpUEr8FwxoWLZPHaQ5Oq0cFoCjratqAxQTxnVnfsJVlzCqvz49ZK9K8VMnQGDDOT%2FVEHA%2Bu2zeymR9WBn29r8Fn%2B9icu%2ByInC3%2FhiXBtmVrmV%2F876zoOuiTYWNyiesSbnfStqT92mSf9Gz2Mck1mE70PF196sr6NfL8lgdFckXzQ1T1PCK2XwV0xDOV7&X-Amz-Signature=72deb294237f630d8d346d9c761db73cc033b62c598ef0acce6a75d05e6bfbf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KM5RPVI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAr7dfcD6%2B9No%2BKcdfcB6kN%2FoGyYTeDU4N80BKqbzbM2AiAtXJQvDMBCuL3pu111lL%2BL%2FniZbAyuMiRW%2FBBzCJorOSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtJHgEBbL0g%2B%2B71%2FGKtwDYir2oIVCzDnZzfw0t7eOYesS450n1agH1AwfZZ912Nse%2B8INhqD%2FT5nTUgIWg%2FBlv5gb2PQARh3Dp%2FKK4%2Bx88egSDQV%2BENAbMA5z8qmNYcterYjLvBfONdgbRyzVm7OtF%2BDihObsnRIrCzT2exRMK1MWcxLUgOM%2FU6hTUHRvelavVBzqBqnYX6zqMR0JNUz9S5JG3GLu8BcGjbKhWKxy7PrOAgRuiyI1jb08oeFkbTdosqao9PLx%2FMFTRG3QIJCQK3dOvJLtcDDo9lubWzdTmtu33hqefiA6MO0r0V1EHGY%2FyrEHNDWuV8QBnCwHDNPMQX8HtPMdSMa87kL5NeKlcnEfjGujuOPpKYXyvwYfo0Srfp8LZ%2BpXmlaEZaKnBofluWNxdEBp0W9Os%2F23iL3ql4BTk1mP%2FipDNyS%2Fyeg2NdPPOMNGmJ7pzh%2B730zb3snAl43rFcwUam4YEDNqxFJlNFdHQXTbCr0u6kzDzhNDQoakTvHn%2BFtGVoHkWhIRxGx3%2FMytYNAO9TeH19P8mhe5fLj2%2BvjDdf%2BEXHnxjJ775j0oZjnlJ6wAHncie8S2Cy6CeNaI0ObEHWq4RUT8g2WgUhwX4XEni67yM7wBVYpcs0BnXLcS8OYxp%2BU3wxowoqrywgY6pgG03qOXaog7sMPKPBN%2B6Hgo6JfEx9B4sXkxgpUEr8FwxoWLZPHaQ5Oq0cFoCjratqAxQTxnVnfsJVlzCqvz49ZK9K8VMnQGDDOT%2FVEHA%2Bu2zeymR9WBn29r8Fn%2B9icu%2ByInC3%2FhiXBtmVrmV%2F876zoOuiTYWNyiesSbnfStqT92mSf9Gz2Mck1mE70PF196sr6NfL8lgdFckXzQ1T1PCK2XwV0xDOV7&X-Amz-Signature=fbc067d6b65acff5158d2131f785f036146586e20467f554338214d9a0226e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KM5RPVI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAr7dfcD6%2B9No%2BKcdfcB6kN%2FoGyYTeDU4N80BKqbzbM2AiAtXJQvDMBCuL3pu111lL%2BL%2FniZbAyuMiRW%2FBBzCJorOSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtJHgEBbL0g%2B%2B71%2FGKtwDYir2oIVCzDnZzfw0t7eOYesS450n1agH1AwfZZ912Nse%2B8INhqD%2FT5nTUgIWg%2FBlv5gb2PQARh3Dp%2FKK4%2Bx88egSDQV%2BENAbMA5z8qmNYcterYjLvBfONdgbRyzVm7OtF%2BDihObsnRIrCzT2exRMK1MWcxLUgOM%2FU6hTUHRvelavVBzqBqnYX6zqMR0JNUz9S5JG3GLu8BcGjbKhWKxy7PrOAgRuiyI1jb08oeFkbTdosqao9PLx%2FMFTRG3QIJCQK3dOvJLtcDDo9lubWzdTmtu33hqefiA6MO0r0V1EHGY%2FyrEHNDWuV8QBnCwHDNPMQX8HtPMdSMa87kL5NeKlcnEfjGujuOPpKYXyvwYfo0Srfp8LZ%2BpXmlaEZaKnBofluWNxdEBp0W9Os%2F23iL3ql4BTk1mP%2FipDNyS%2Fyeg2NdPPOMNGmJ7pzh%2B730zb3snAl43rFcwUam4YEDNqxFJlNFdHQXTbCr0u6kzDzhNDQoakTvHn%2BFtGVoHkWhIRxGx3%2FMytYNAO9TeH19P8mhe5fLj2%2BvjDdf%2BEXHnxjJ775j0oZjnlJ6wAHncie8S2Cy6CeNaI0ObEHWq4RUT8g2WgUhwX4XEni67yM7wBVYpcs0BnXLcS8OYxp%2BU3wxowoqrywgY6pgG03qOXaog7sMPKPBN%2B6Hgo6JfEx9B4sXkxgpUEr8FwxoWLZPHaQ5Oq0cFoCjratqAxQTxnVnfsJVlzCqvz49ZK9K8VMnQGDDOT%2FVEHA%2Bu2zeymR9WBn29r8Fn%2B9icu%2ByInC3%2FhiXBtmVrmV%2F876zoOuiTYWNyiesSbnfStqT92mSf9Gz2Mck1mE70PF196sr6NfL8lgdFckXzQ1T1PCK2XwV0xDOV7&X-Amz-Signature=d59a32e165762c2d32f7b6d937b08984c518645ff876f04651364f43524152b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KM5RPVI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAr7dfcD6%2B9No%2BKcdfcB6kN%2FoGyYTeDU4N80BKqbzbM2AiAtXJQvDMBCuL3pu111lL%2BL%2FniZbAyuMiRW%2FBBzCJorOSr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtJHgEBbL0g%2B%2B71%2FGKtwDYir2oIVCzDnZzfw0t7eOYesS450n1agH1AwfZZ912Nse%2B8INhqD%2FT5nTUgIWg%2FBlv5gb2PQARh3Dp%2FKK4%2Bx88egSDQV%2BENAbMA5z8qmNYcterYjLvBfONdgbRyzVm7OtF%2BDihObsnRIrCzT2exRMK1MWcxLUgOM%2FU6hTUHRvelavVBzqBqnYX6zqMR0JNUz9S5JG3GLu8BcGjbKhWKxy7PrOAgRuiyI1jb08oeFkbTdosqao9PLx%2FMFTRG3QIJCQK3dOvJLtcDDo9lubWzdTmtu33hqefiA6MO0r0V1EHGY%2FyrEHNDWuV8QBnCwHDNPMQX8HtPMdSMa87kL5NeKlcnEfjGujuOPpKYXyvwYfo0Srfp8LZ%2BpXmlaEZaKnBofluWNxdEBp0W9Os%2F23iL3ql4BTk1mP%2FipDNyS%2Fyeg2NdPPOMNGmJ7pzh%2B730zb3snAl43rFcwUam4YEDNqxFJlNFdHQXTbCr0u6kzDzhNDQoakTvHn%2BFtGVoHkWhIRxGx3%2FMytYNAO9TeH19P8mhe5fLj2%2BvjDdf%2BEXHnxjJ775j0oZjnlJ6wAHncie8S2Cy6CeNaI0ObEHWq4RUT8g2WgUhwX4XEni67yM7wBVYpcs0BnXLcS8OYxp%2BU3wxowoqrywgY6pgG03qOXaog7sMPKPBN%2B6Hgo6JfEx9B4sXkxgpUEr8FwxoWLZPHaQ5Oq0cFoCjratqAxQTxnVnfsJVlzCqvz49ZK9K8VMnQGDDOT%2FVEHA%2Bu2zeymR9WBn29r8Fn%2B9icu%2ByInC3%2FhiXBtmVrmV%2F876zoOuiTYWNyiesSbnfStqT92mSf9Gz2Mck1mE70PF196sr6NfL8lgdFckXzQ1T1PCK2XwV0xDOV7&X-Amz-Signature=0d4f9e1515f2c679bb17e4631015e092d7c04af8304f24b84fc525ec15938b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
