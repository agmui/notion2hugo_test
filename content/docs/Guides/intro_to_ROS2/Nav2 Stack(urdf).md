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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FTYUNG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4IJ5iM562p1nTRaVuKlSI6O3kUs8Imkf0%2F1WEp%2FMjwQIgZYhpHKEL9iYLob6JBzF4%2BfqCx21efW57840kV%2BtGRvMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEb5Kdt%2Bo6HXkt%2BvyircA7n3QrelnYx7ppJ0g0uegHMCGnxCvttlk%2Fx2JjbZMU%2FFXgD0Yw%2BqebdH2vWJY4hVNjtsTqatURivSig%2Fn%2Fk5xvtI7Rn%2FwPmgQlMs0T81DlZeCYtKMyu%2FjRVKjRjX4lJYxz1%2Bf4qnR3069yW2K%2BFEUS6pQllKb2t1InFDRelO5qDRC4FAU0KKxpHC%2BGD8m%2B7w%2Fyy5NhV6jTH1PzYf2GWQoMaMwsmU51thsNQDnUDKhwhIJvVBEhgdXnBzWPRdp%2BUZmZZeqQpt7uDgxD6eD27Yq4Q463KF3t7ZpJIM7sFqZCRCR%2FZc9%2Bh%2BruMk7ddH96QezX3fIEogEQHXyUSEcyi2s0o8UaqMv5x5Lola7tj4SoSw%2BqHpn3f1aH0Y1m9vnMTwylVmPZ5wauBJGbPe08JRKhnbwJOCsBlpPcG1BVp8LdZJQ3tWglmiFTDTZxbuZvX%2FZ28VmN1kvTNEEY9y13PH4rNQ8K9BVxV1aPjQNCCYsWGI7C%2BFNWliS3UDeliCx4AmpkwxZXTfzFwReOf9ErKjrfuOcxnFloCWVLaoWQDHSZcuQbz0VyLghPejuqw%2BF5T8O8brKlL4o8RDBx31s2Nfuppu9mVFai9H2%2BQ2OMepaL8rxlI3Wjzc%2F2MnobjvMKzxqcAGOqUBtm1ZNgu0KRb%2BtdkCVrxaeSN7XH2TuWGi3WFtMCIetQe17ROrB63xiCQg3A3IrfViMteROvG0N37yf2LiLMnil7TjJc9NUCKN%2FW708PyB%2BTQ3vEuWIUWUQRosZ0OmmHA70WGbOhhPUmt1dR7aAb9SdBb0xCIjwmpOtCGuWdBHHo4ZiejwioEOOHAqProInBe6tsksDf2WaJOkXvfbAipXkzmyyrZU&X-Amz-Signature=7abf3a44e41f411e7b45e2802efec5a54bd5c3e465cf3ceef094ae762e8f806c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FTYUNG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4IJ5iM562p1nTRaVuKlSI6O3kUs8Imkf0%2F1WEp%2FMjwQIgZYhpHKEL9iYLob6JBzF4%2BfqCx21efW57840kV%2BtGRvMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEb5Kdt%2Bo6HXkt%2BvyircA7n3QrelnYx7ppJ0g0uegHMCGnxCvttlk%2Fx2JjbZMU%2FFXgD0Yw%2BqebdH2vWJY4hVNjtsTqatURivSig%2Fn%2Fk5xvtI7Rn%2FwPmgQlMs0T81DlZeCYtKMyu%2FjRVKjRjX4lJYxz1%2Bf4qnR3069yW2K%2BFEUS6pQllKb2t1InFDRelO5qDRC4FAU0KKxpHC%2BGD8m%2B7w%2Fyy5NhV6jTH1PzYf2GWQoMaMwsmU51thsNQDnUDKhwhIJvVBEhgdXnBzWPRdp%2BUZmZZeqQpt7uDgxD6eD27Yq4Q463KF3t7ZpJIM7sFqZCRCR%2FZc9%2Bh%2BruMk7ddH96QezX3fIEogEQHXyUSEcyi2s0o8UaqMv5x5Lola7tj4SoSw%2BqHpn3f1aH0Y1m9vnMTwylVmPZ5wauBJGbPe08JRKhnbwJOCsBlpPcG1BVp8LdZJQ3tWglmiFTDTZxbuZvX%2FZ28VmN1kvTNEEY9y13PH4rNQ8K9BVxV1aPjQNCCYsWGI7C%2BFNWliS3UDeliCx4AmpkwxZXTfzFwReOf9ErKjrfuOcxnFloCWVLaoWQDHSZcuQbz0VyLghPejuqw%2BF5T8O8brKlL4o8RDBx31s2Nfuppu9mVFai9H2%2BQ2OMepaL8rxlI3Wjzc%2F2MnobjvMKzxqcAGOqUBtm1ZNgu0KRb%2BtdkCVrxaeSN7XH2TuWGi3WFtMCIetQe17ROrB63xiCQg3A3IrfViMteROvG0N37yf2LiLMnil7TjJc9NUCKN%2FW708PyB%2BTQ3vEuWIUWUQRosZ0OmmHA70WGbOhhPUmt1dR7aAb9SdBb0xCIjwmpOtCGuWdBHHo4ZiejwioEOOHAqProInBe6tsksDf2WaJOkXvfbAipXkzmyyrZU&X-Amz-Signature=67617fd50e8af067c72eaa19a3fcc76be7ca88a7dcaf6f14a01055105294fe3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FTYUNG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4IJ5iM562p1nTRaVuKlSI6O3kUs8Imkf0%2F1WEp%2FMjwQIgZYhpHKEL9iYLob6JBzF4%2BfqCx21efW57840kV%2BtGRvMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEb5Kdt%2Bo6HXkt%2BvyircA7n3QrelnYx7ppJ0g0uegHMCGnxCvttlk%2Fx2JjbZMU%2FFXgD0Yw%2BqebdH2vWJY4hVNjtsTqatURivSig%2Fn%2Fk5xvtI7Rn%2FwPmgQlMs0T81DlZeCYtKMyu%2FjRVKjRjX4lJYxz1%2Bf4qnR3069yW2K%2BFEUS6pQllKb2t1InFDRelO5qDRC4FAU0KKxpHC%2BGD8m%2B7w%2Fyy5NhV6jTH1PzYf2GWQoMaMwsmU51thsNQDnUDKhwhIJvVBEhgdXnBzWPRdp%2BUZmZZeqQpt7uDgxD6eD27Yq4Q463KF3t7ZpJIM7sFqZCRCR%2FZc9%2Bh%2BruMk7ddH96QezX3fIEogEQHXyUSEcyi2s0o8UaqMv5x5Lola7tj4SoSw%2BqHpn3f1aH0Y1m9vnMTwylVmPZ5wauBJGbPe08JRKhnbwJOCsBlpPcG1BVp8LdZJQ3tWglmiFTDTZxbuZvX%2FZ28VmN1kvTNEEY9y13PH4rNQ8K9BVxV1aPjQNCCYsWGI7C%2BFNWliS3UDeliCx4AmpkwxZXTfzFwReOf9ErKjrfuOcxnFloCWVLaoWQDHSZcuQbz0VyLghPejuqw%2BF5T8O8brKlL4o8RDBx31s2Nfuppu9mVFai9H2%2BQ2OMepaL8rxlI3Wjzc%2F2MnobjvMKzxqcAGOqUBtm1ZNgu0KRb%2BtdkCVrxaeSN7XH2TuWGi3WFtMCIetQe17ROrB63xiCQg3A3IrfViMteROvG0N37yf2LiLMnil7TjJc9NUCKN%2FW708PyB%2BTQ3vEuWIUWUQRosZ0OmmHA70WGbOhhPUmt1dR7aAb9SdBb0xCIjwmpOtCGuWdBHHo4ZiejwioEOOHAqProInBe6tsksDf2WaJOkXvfbAipXkzmyyrZU&X-Amz-Signature=b8022d4637fe51df281764d57494b8b635768f8502cb18b3e0b7981dd361a17b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FTYUNG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4IJ5iM562p1nTRaVuKlSI6O3kUs8Imkf0%2F1WEp%2FMjwQIgZYhpHKEL9iYLob6JBzF4%2BfqCx21efW57840kV%2BtGRvMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEb5Kdt%2Bo6HXkt%2BvyircA7n3QrelnYx7ppJ0g0uegHMCGnxCvttlk%2Fx2JjbZMU%2FFXgD0Yw%2BqebdH2vWJY4hVNjtsTqatURivSig%2Fn%2Fk5xvtI7Rn%2FwPmgQlMs0T81DlZeCYtKMyu%2FjRVKjRjX4lJYxz1%2Bf4qnR3069yW2K%2BFEUS6pQllKb2t1InFDRelO5qDRC4FAU0KKxpHC%2BGD8m%2B7w%2Fyy5NhV6jTH1PzYf2GWQoMaMwsmU51thsNQDnUDKhwhIJvVBEhgdXnBzWPRdp%2BUZmZZeqQpt7uDgxD6eD27Yq4Q463KF3t7ZpJIM7sFqZCRCR%2FZc9%2Bh%2BruMk7ddH96QezX3fIEogEQHXyUSEcyi2s0o8UaqMv5x5Lola7tj4SoSw%2BqHpn3f1aH0Y1m9vnMTwylVmPZ5wauBJGbPe08JRKhnbwJOCsBlpPcG1BVp8LdZJQ3tWglmiFTDTZxbuZvX%2FZ28VmN1kvTNEEY9y13PH4rNQ8K9BVxV1aPjQNCCYsWGI7C%2BFNWliS3UDeliCx4AmpkwxZXTfzFwReOf9ErKjrfuOcxnFloCWVLaoWQDHSZcuQbz0VyLghPejuqw%2BF5T8O8brKlL4o8RDBx31s2Nfuppu9mVFai9H2%2BQ2OMepaL8rxlI3Wjzc%2F2MnobjvMKzxqcAGOqUBtm1ZNgu0KRb%2BtdkCVrxaeSN7XH2TuWGi3WFtMCIetQe17ROrB63xiCQg3A3IrfViMteROvG0N37yf2LiLMnil7TjJc9NUCKN%2FW708PyB%2BTQ3vEuWIUWUQRosZ0OmmHA70WGbOhhPUmt1dR7aAb9SdBb0xCIjwmpOtCGuWdBHHo4ZiejwioEOOHAqProInBe6tsksDf2WaJOkXvfbAipXkzmyyrZU&X-Amz-Signature=09685b9ea2eea171d61f84fc6f7390fa235ce7f12bb0e262b65e4d6b3b2ed024&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FTYUNG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4IJ5iM562p1nTRaVuKlSI6O3kUs8Imkf0%2F1WEp%2FMjwQIgZYhpHKEL9iYLob6JBzF4%2BfqCx21efW57840kV%2BtGRvMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEb5Kdt%2Bo6HXkt%2BvyircA7n3QrelnYx7ppJ0g0uegHMCGnxCvttlk%2Fx2JjbZMU%2FFXgD0Yw%2BqebdH2vWJY4hVNjtsTqatURivSig%2Fn%2Fk5xvtI7Rn%2FwPmgQlMs0T81DlZeCYtKMyu%2FjRVKjRjX4lJYxz1%2Bf4qnR3069yW2K%2BFEUS6pQllKb2t1InFDRelO5qDRC4FAU0KKxpHC%2BGD8m%2B7w%2Fyy5NhV6jTH1PzYf2GWQoMaMwsmU51thsNQDnUDKhwhIJvVBEhgdXnBzWPRdp%2BUZmZZeqQpt7uDgxD6eD27Yq4Q463KF3t7ZpJIM7sFqZCRCR%2FZc9%2Bh%2BruMk7ddH96QezX3fIEogEQHXyUSEcyi2s0o8UaqMv5x5Lola7tj4SoSw%2BqHpn3f1aH0Y1m9vnMTwylVmPZ5wauBJGbPe08JRKhnbwJOCsBlpPcG1BVp8LdZJQ3tWglmiFTDTZxbuZvX%2FZ28VmN1kvTNEEY9y13PH4rNQ8K9BVxV1aPjQNCCYsWGI7C%2BFNWliS3UDeliCx4AmpkwxZXTfzFwReOf9ErKjrfuOcxnFloCWVLaoWQDHSZcuQbz0VyLghPejuqw%2BF5T8O8brKlL4o8RDBx31s2Nfuppu9mVFai9H2%2BQ2OMepaL8rxlI3Wjzc%2F2MnobjvMKzxqcAGOqUBtm1ZNgu0KRb%2BtdkCVrxaeSN7XH2TuWGi3WFtMCIetQe17ROrB63xiCQg3A3IrfViMteROvG0N37yf2LiLMnil7TjJc9NUCKN%2FW708PyB%2BTQ3vEuWIUWUQRosZ0OmmHA70WGbOhhPUmt1dR7aAb9SdBb0xCIjwmpOtCGuWdBHHo4ZiejwioEOOHAqProInBe6tsksDf2WaJOkXvfbAipXkzmyyrZU&X-Amz-Signature=549d24c6cf470b0b87f369c801c92df6a30d9164d19c22c890af6f21fdd6ab6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3FTYUNG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4IJ5iM562p1nTRaVuKlSI6O3kUs8Imkf0%2F1WEp%2FMjwQIgZYhpHKEL9iYLob6JBzF4%2BfqCx21efW57840kV%2BtGRvMq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEb5Kdt%2Bo6HXkt%2BvyircA7n3QrelnYx7ppJ0g0uegHMCGnxCvttlk%2Fx2JjbZMU%2FFXgD0Yw%2BqebdH2vWJY4hVNjtsTqatURivSig%2Fn%2Fk5xvtI7Rn%2FwPmgQlMs0T81DlZeCYtKMyu%2FjRVKjRjX4lJYxz1%2Bf4qnR3069yW2K%2BFEUS6pQllKb2t1InFDRelO5qDRC4FAU0KKxpHC%2BGD8m%2B7w%2Fyy5NhV6jTH1PzYf2GWQoMaMwsmU51thsNQDnUDKhwhIJvVBEhgdXnBzWPRdp%2BUZmZZeqQpt7uDgxD6eD27Yq4Q463KF3t7ZpJIM7sFqZCRCR%2FZc9%2Bh%2BruMk7ddH96QezX3fIEogEQHXyUSEcyi2s0o8UaqMv5x5Lola7tj4SoSw%2BqHpn3f1aH0Y1m9vnMTwylVmPZ5wauBJGbPe08JRKhnbwJOCsBlpPcG1BVp8LdZJQ3tWglmiFTDTZxbuZvX%2FZ28VmN1kvTNEEY9y13PH4rNQ8K9BVxV1aPjQNCCYsWGI7C%2BFNWliS3UDeliCx4AmpkwxZXTfzFwReOf9ErKjrfuOcxnFloCWVLaoWQDHSZcuQbz0VyLghPejuqw%2BF5T8O8brKlL4o8RDBx31s2Nfuppu9mVFai9H2%2BQ2OMepaL8rxlI3Wjzc%2F2MnobjvMKzxqcAGOqUBtm1ZNgu0KRb%2BtdkCVrxaeSN7XH2TuWGi3WFtMCIetQe17ROrB63xiCQg3A3IrfViMteROvG0N37yf2LiLMnil7TjJc9NUCKN%2FW708PyB%2BTQ3vEuWIUWUQRosZ0OmmHA70WGbOhhPUmt1dR7aAb9SdBb0xCIjwmpOtCGuWdBHHo4ZiejwioEOOHAqProInBe6tsksDf2WaJOkXvfbAipXkzmyyrZU&X-Amz-Signature=1c2fcc205cd1bc9683882d8a887a87bd6237d3d7d278ceccfa9034552e792bc7&X-Amz-SignedHeaders=host&x-id=GetObject)
