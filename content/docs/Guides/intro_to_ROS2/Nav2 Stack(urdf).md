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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMS7FR7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2Byqz%2BlRdrXQ2M48PXkUXqr1w2VJDFyVHxTN856jf8wIgZdR2IsAep1DcljYNn1hwkq8OVM8l91o2XVGcTJ6PZpsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv76hMp%2BLV1fnrsuircAwYpTpLCTinW7fabuvWWam%2FlRQVOs%2BhtHCi6AnMamNYUnz%2BqMInFOnYZTdr%2BKSbmQM%2BA2WZfFT9wmKwLHR%2FJggHLLoQC7s4FXZUfrfnpwvrWs%2FWeDPP6qwWROKF2O96uHVnzmXOTQCrJu%2B5xCjw1e20rCqzHmtX%2Bz3amDau06CJLguDMiroNnBJDrFnXvLzc43ydpWuav0Ilw5VQ83yL9UmttrC4k9GJvC%2BOm0WhdV%2BHnDB%2BBam%2BGQYNz1Wz1EqOVe%2FQt%2B9yhahWr3xY6P1U1WDmkTFvJPMjdaRk0UQO27hF0PyHRMgcjMQZdzt4cW5ZlRFi7RtJKz%2BDzFOkQtS0Z2JRGJ0lKdGq5QytLlKx7Fd9roK0%2FgGUl3sIScDZ19qXulZ1MwVcqf%2BbWDRxUD00u7M1XYvl1UVb9XhOYDSLL1RsWI5LeX%2FK8NH9enOn%2BytR9CvMRNHeyimRVmtFARkB7QUjyqyCXLHngDRaynZktMgBab5jXhchAAxrjqSs39MCD2%2BCgZKLego%2F%2B429c5mfHykHLTnFowCM2%2BHTfwKGFC9QseUbd0sGx%2FwUQKBgZXNtVl0kuml2PBgtCqkfbwnPwf%2B8sJUyvmCaVZfPhzdK5Kxy3yYC3VLR4iWZQ9o6MPOekr4GOqUBTC%2FA%2FaLc0AK5%2FWB%2BuRC%2F%2F2soqh1OyDooKtLtUj2s%2BDWfZJbQ3cVQ3FwBRqC%2BMZOpBFL0bgZRiOOlN4CG%2B2cCAne4JvHwkP%2BpyTv56cLwpy5UWWhuMfk8Zu7T0m8uXM8bFlpJlesXjPZAvNBhRHCfQc%2FDQRjyBDe8dMDSYfid%2F8R4RZGyfuDZUpzpi3ygPTQj61WYNfOkdSAIDPh21YUrTfSR%2Bz%2B8&X-Amz-Signature=65bef395f57d52d4f10224754b652cf51c12b04dd395e67bc99b20bacc363574&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMS7FR7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2Byqz%2BlRdrXQ2M48PXkUXqr1w2VJDFyVHxTN856jf8wIgZdR2IsAep1DcljYNn1hwkq8OVM8l91o2XVGcTJ6PZpsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv76hMp%2BLV1fnrsuircAwYpTpLCTinW7fabuvWWam%2FlRQVOs%2BhtHCi6AnMamNYUnz%2BqMInFOnYZTdr%2BKSbmQM%2BA2WZfFT9wmKwLHR%2FJggHLLoQC7s4FXZUfrfnpwvrWs%2FWeDPP6qwWROKF2O96uHVnzmXOTQCrJu%2B5xCjw1e20rCqzHmtX%2Bz3amDau06CJLguDMiroNnBJDrFnXvLzc43ydpWuav0Ilw5VQ83yL9UmttrC4k9GJvC%2BOm0WhdV%2BHnDB%2BBam%2BGQYNz1Wz1EqOVe%2FQt%2B9yhahWr3xY6P1U1WDmkTFvJPMjdaRk0UQO27hF0PyHRMgcjMQZdzt4cW5ZlRFi7RtJKz%2BDzFOkQtS0Z2JRGJ0lKdGq5QytLlKx7Fd9roK0%2FgGUl3sIScDZ19qXulZ1MwVcqf%2BbWDRxUD00u7M1XYvl1UVb9XhOYDSLL1RsWI5LeX%2FK8NH9enOn%2BytR9CvMRNHeyimRVmtFARkB7QUjyqyCXLHngDRaynZktMgBab5jXhchAAxrjqSs39MCD2%2BCgZKLego%2F%2B429c5mfHykHLTnFowCM2%2BHTfwKGFC9QseUbd0sGx%2FwUQKBgZXNtVl0kuml2PBgtCqkfbwnPwf%2B8sJUyvmCaVZfPhzdK5Kxy3yYC3VLR4iWZQ9o6MPOekr4GOqUBTC%2FA%2FaLc0AK5%2FWB%2BuRC%2F%2F2soqh1OyDooKtLtUj2s%2BDWfZJbQ3cVQ3FwBRqC%2BMZOpBFL0bgZRiOOlN4CG%2B2cCAne4JvHwkP%2BpyTv56cLwpy5UWWhuMfk8Zu7T0m8uXM8bFlpJlesXjPZAvNBhRHCfQc%2FDQRjyBDe8dMDSYfid%2F8R4RZGyfuDZUpzpi3ygPTQj61WYNfOkdSAIDPh21YUrTfSR%2Bz%2B8&X-Amz-Signature=539637402a693b4f7551f3bc6e1933cf4d8ff7aad3dce556318c127c58004644&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMS7FR7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2Byqz%2BlRdrXQ2M48PXkUXqr1w2VJDFyVHxTN856jf8wIgZdR2IsAep1DcljYNn1hwkq8OVM8l91o2XVGcTJ6PZpsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv76hMp%2BLV1fnrsuircAwYpTpLCTinW7fabuvWWam%2FlRQVOs%2BhtHCi6AnMamNYUnz%2BqMInFOnYZTdr%2BKSbmQM%2BA2WZfFT9wmKwLHR%2FJggHLLoQC7s4FXZUfrfnpwvrWs%2FWeDPP6qwWROKF2O96uHVnzmXOTQCrJu%2B5xCjw1e20rCqzHmtX%2Bz3amDau06CJLguDMiroNnBJDrFnXvLzc43ydpWuav0Ilw5VQ83yL9UmttrC4k9GJvC%2BOm0WhdV%2BHnDB%2BBam%2BGQYNz1Wz1EqOVe%2FQt%2B9yhahWr3xY6P1U1WDmkTFvJPMjdaRk0UQO27hF0PyHRMgcjMQZdzt4cW5ZlRFi7RtJKz%2BDzFOkQtS0Z2JRGJ0lKdGq5QytLlKx7Fd9roK0%2FgGUl3sIScDZ19qXulZ1MwVcqf%2BbWDRxUD00u7M1XYvl1UVb9XhOYDSLL1RsWI5LeX%2FK8NH9enOn%2BytR9CvMRNHeyimRVmtFARkB7QUjyqyCXLHngDRaynZktMgBab5jXhchAAxrjqSs39MCD2%2BCgZKLego%2F%2B429c5mfHykHLTnFowCM2%2BHTfwKGFC9QseUbd0sGx%2FwUQKBgZXNtVl0kuml2PBgtCqkfbwnPwf%2B8sJUyvmCaVZfPhzdK5Kxy3yYC3VLR4iWZQ9o6MPOekr4GOqUBTC%2FA%2FaLc0AK5%2FWB%2BuRC%2F%2F2soqh1OyDooKtLtUj2s%2BDWfZJbQ3cVQ3FwBRqC%2BMZOpBFL0bgZRiOOlN4CG%2B2cCAne4JvHwkP%2BpyTv56cLwpy5UWWhuMfk8Zu7T0m8uXM8bFlpJlesXjPZAvNBhRHCfQc%2FDQRjyBDe8dMDSYfid%2F8R4RZGyfuDZUpzpi3ygPTQj61WYNfOkdSAIDPh21YUrTfSR%2Bz%2B8&X-Amz-Signature=6f274558d830906842658ff63dc7e2c769064c1e16b0fa5f051f8f8b9b5e8f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMS7FR7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2Byqz%2BlRdrXQ2M48PXkUXqr1w2VJDFyVHxTN856jf8wIgZdR2IsAep1DcljYNn1hwkq8OVM8l91o2XVGcTJ6PZpsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv76hMp%2BLV1fnrsuircAwYpTpLCTinW7fabuvWWam%2FlRQVOs%2BhtHCi6AnMamNYUnz%2BqMInFOnYZTdr%2BKSbmQM%2BA2WZfFT9wmKwLHR%2FJggHLLoQC7s4FXZUfrfnpwvrWs%2FWeDPP6qwWROKF2O96uHVnzmXOTQCrJu%2B5xCjw1e20rCqzHmtX%2Bz3amDau06CJLguDMiroNnBJDrFnXvLzc43ydpWuav0Ilw5VQ83yL9UmttrC4k9GJvC%2BOm0WhdV%2BHnDB%2BBam%2BGQYNz1Wz1EqOVe%2FQt%2B9yhahWr3xY6P1U1WDmkTFvJPMjdaRk0UQO27hF0PyHRMgcjMQZdzt4cW5ZlRFi7RtJKz%2BDzFOkQtS0Z2JRGJ0lKdGq5QytLlKx7Fd9roK0%2FgGUl3sIScDZ19qXulZ1MwVcqf%2BbWDRxUD00u7M1XYvl1UVb9XhOYDSLL1RsWI5LeX%2FK8NH9enOn%2BytR9CvMRNHeyimRVmtFARkB7QUjyqyCXLHngDRaynZktMgBab5jXhchAAxrjqSs39MCD2%2BCgZKLego%2F%2B429c5mfHykHLTnFowCM2%2BHTfwKGFC9QseUbd0sGx%2FwUQKBgZXNtVl0kuml2PBgtCqkfbwnPwf%2B8sJUyvmCaVZfPhzdK5Kxy3yYC3VLR4iWZQ9o6MPOekr4GOqUBTC%2FA%2FaLc0AK5%2FWB%2BuRC%2F%2F2soqh1OyDooKtLtUj2s%2BDWfZJbQ3cVQ3FwBRqC%2BMZOpBFL0bgZRiOOlN4CG%2B2cCAne4JvHwkP%2BpyTv56cLwpy5UWWhuMfk8Zu7T0m8uXM8bFlpJlesXjPZAvNBhRHCfQc%2FDQRjyBDe8dMDSYfid%2F8R4RZGyfuDZUpzpi3ygPTQj61WYNfOkdSAIDPh21YUrTfSR%2Bz%2B8&X-Amz-Signature=ea7f9ea4e2371d4298313a2c1a4ade91524cf36376b2cc2023caf1463f58b8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMS7FR7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2Byqz%2BlRdrXQ2M48PXkUXqr1w2VJDFyVHxTN856jf8wIgZdR2IsAep1DcljYNn1hwkq8OVM8l91o2XVGcTJ6PZpsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv76hMp%2BLV1fnrsuircAwYpTpLCTinW7fabuvWWam%2FlRQVOs%2BhtHCi6AnMamNYUnz%2BqMInFOnYZTdr%2BKSbmQM%2BA2WZfFT9wmKwLHR%2FJggHLLoQC7s4FXZUfrfnpwvrWs%2FWeDPP6qwWROKF2O96uHVnzmXOTQCrJu%2B5xCjw1e20rCqzHmtX%2Bz3amDau06CJLguDMiroNnBJDrFnXvLzc43ydpWuav0Ilw5VQ83yL9UmttrC4k9GJvC%2BOm0WhdV%2BHnDB%2BBam%2BGQYNz1Wz1EqOVe%2FQt%2B9yhahWr3xY6P1U1WDmkTFvJPMjdaRk0UQO27hF0PyHRMgcjMQZdzt4cW5ZlRFi7RtJKz%2BDzFOkQtS0Z2JRGJ0lKdGq5QytLlKx7Fd9roK0%2FgGUl3sIScDZ19qXulZ1MwVcqf%2BbWDRxUD00u7M1XYvl1UVb9XhOYDSLL1RsWI5LeX%2FK8NH9enOn%2BytR9CvMRNHeyimRVmtFARkB7QUjyqyCXLHngDRaynZktMgBab5jXhchAAxrjqSs39MCD2%2BCgZKLego%2F%2B429c5mfHykHLTnFowCM2%2BHTfwKGFC9QseUbd0sGx%2FwUQKBgZXNtVl0kuml2PBgtCqkfbwnPwf%2B8sJUyvmCaVZfPhzdK5Kxy3yYC3VLR4iWZQ9o6MPOekr4GOqUBTC%2FA%2FaLc0AK5%2FWB%2BuRC%2F%2F2soqh1OyDooKtLtUj2s%2BDWfZJbQ3cVQ3FwBRqC%2BMZOpBFL0bgZRiOOlN4CG%2B2cCAne4JvHwkP%2BpyTv56cLwpy5UWWhuMfk8Zu7T0m8uXM8bFlpJlesXjPZAvNBhRHCfQc%2FDQRjyBDe8dMDSYfid%2F8R4RZGyfuDZUpzpi3ygPTQj61WYNfOkdSAIDPh21YUrTfSR%2Bz%2B8&X-Amz-Signature=001bb7a731f19110b710069993ce80978dd72921188cb5ace90dac1d0dd8f15e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMS7FR7%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2Byqz%2BlRdrXQ2M48PXkUXqr1w2VJDFyVHxTN856jf8wIgZdR2IsAep1DcljYNn1hwkq8OVM8l91o2XVGcTJ6PZpsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIv76hMp%2BLV1fnrsuircAwYpTpLCTinW7fabuvWWam%2FlRQVOs%2BhtHCi6AnMamNYUnz%2BqMInFOnYZTdr%2BKSbmQM%2BA2WZfFT9wmKwLHR%2FJggHLLoQC7s4FXZUfrfnpwvrWs%2FWeDPP6qwWROKF2O96uHVnzmXOTQCrJu%2B5xCjw1e20rCqzHmtX%2Bz3amDau06CJLguDMiroNnBJDrFnXvLzc43ydpWuav0Ilw5VQ83yL9UmttrC4k9GJvC%2BOm0WhdV%2BHnDB%2BBam%2BGQYNz1Wz1EqOVe%2FQt%2B9yhahWr3xY6P1U1WDmkTFvJPMjdaRk0UQO27hF0PyHRMgcjMQZdzt4cW5ZlRFi7RtJKz%2BDzFOkQtS0Z2JRGJ0lKdGq5QytLlKx7Fd9roK0%2FgGUl3sIScDZ19qXulZ1MwVcqf%2BbWDRxUD00u7M1XYvl1UVb9XhOYDSLL1RsWI5LeX%2FK8NH9enOn%2BytR9CvMRNHeyimRVmtFARkB7QUjyqyCXLHngDRaynZktMgBab5jXhchAAxrjqSs39MCD2%2BCgZKLego%2F%2B429c5mfHykHLTnFowCM2%2BHTfwKGFC9QseUbd0sGx%2FwUQKBgZXNtVl0kuml2PBgtCqkfbwnPwf%2B8sJUyvmCaVZfPhzdK5Kxy3yYC3VLR4iWZQ9o6MPOekr4GOqUBTC%2FA%2FaLc0AK5%2FWB%2BuRC%2F%2F2soqh1OyDooKtLtUj2s%2BDWfZJbQ3cVQ3FwBRqC%2BMZOpBFL0bgZRiOOlN4CG%2B2cCAne4JvHwkP%2BpyTv56cLwpy5UWWhuMfk8Zu7T0m8uXM8bFlpJlesXjPZAvNBhRHCfQc%2FDQRjyBDe8dMDSYfid%2F8R4RZGyfuDZUpzpi3ygPTQj61WYNfOkdSAIDPh21YUrTfSR%2Bz%2B8&X-Amz-Signature=de73db3c889907e9ae753def53df43bd7520bd6c125f96fa4b44e8a7f899aa92&X-Amz-SignedHeaders=host&x-id=GetObject)
