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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCGZNS6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICbhWdWnNzAaNgkQqC%2BATM70alipiPfPxdNCPuoCeiJYAiEAlQSPx3vhQqJSkJvkbSMrxlOSmA1WpOSFG9n12WPbpIUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDB7A9i6rfNTxn4PeAyrcAy0s9bZ1rzhivk9%2FLHcAkr6OySPUAZmWJpKP2%2B800R%2BZBtHnBAXJPM5uAu2ZCq3W95%2BDgynOjE%2F%2B%2Fr4UhE9NwdcI83K7hTy4Xwigo2VPKgtBjlvwHbTI2dRRtrG9I8OFwh1%2BpHoi1O59SS6nl4BxWmb3K0tdxmNK9Tjs7tjnsmV4thrN%2Biu850iyoyV64NpxVK7cc9VDiGFozQdluj6RBX%2BUiuO7MiEp1UXGyksS8PPGAU4RM7hFD5GJZ25dScbIOCJAtIvqy%2FH6ox4H7eHB8wS7ziQ%2BilkX1HKLzM7y0kao7wSE0DGLdA4Hb9UVTc4s1X88B5jrI6W1nGoBjJ74xGocpbFTE2%2Fw3RRUml7aBa1dQ%2BDHBXRueNTBASXjoQVfNgbLJ%2BpzKhzi62UBe55cbPNjp1FqrXRydS4qvbV1F8WWHSfGuViBP%2Ft8lvfHPm6VEndpAW9xk8AY%2FJ250T7tVuHgTStlZv51yNVWWFx%2BI7d2Zk3h3jNy7esl3H8Fl2HjRtnp6%2BqHRjj7oeokg3DlKLSRSG7KcltO7dIC%2BEl3YWe%2Bi2vXaA7k0bbYAkQUfW6R6A%2FaCbGBjFk879KyS7Y%2FMRB5G5a4C3P0YPr5f7QmUDkM4w3PHDhr6GzN5jxCMMrv78IGOqUBjNOy7Y1wRkOkKcxkAQrjWDOYnPW16LFksWuSw%2BjURzQniU1FJJm0CpUbjv3RFabcGYALP5RH83t8fyaHf0O%2BQy2FZ8NZbDdtzOHOKi4mrAo5mYP9BvrbAIu4dCukLGuyOSQPaYHwRuupDdF4kTSfm9x80VhRApNS7nGWP4eIj7ETvteb7Yb%2BeJ64OUwA0FTHhuveG8%2FlKF%2BQQkcJ15mIKZW8QmKp&X-Amz-Signature=e9b74f9ada0b4c6c650d27956bb7ba2ecddf437ba9eb080fcbb35fa88e88d869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCGZNS6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICbhWdWnNzAaNgkQqC%2BATM70alipiPfPxdNCPuoCeiJYAiEAlQSPx3vhQqJSkJvkbSMrxlOSmA1WpOSFG9n12WPbpIUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDB7A9i6rfNTxn4PeAyrcAy0s9bZ1rzhivk9%2FLHcAkr6OySPUAZmWJpKP2%2B800R%2BZBtHnBAXJPM5uAu2ZCq3W95%2BDgynOjE%2F%2B%2Fr4UhE9NwdcI83K7hTy4Xwigo2VPKgtBjlvwHbTI2dRRtrG9I8OFwh1%2BpHoi1O59SS6nl4BxWmb3K0tdxmNK9Tjs7tjnsmV4thrN%2Biu850iyoyV64NpxVK7cc9VDiGFozQdluj6RBX%2BUiuO7MiEp1UXGyksS8PPGAU4RM7hFD5GJZ25dScbIOCJAtIvqy%2FH6ox4H7eHB8wS7ziQ%2BilkX1HKLzM7y0kao7wSE0DGLdA4Hb9UVTc4s1X88B5jrI6W1nGoBjJ74xGocpbFTE2%2Fw3RRUml7aBa1dQ%2BDHBXRueNTBASXjoQVfNgbLJ%2BpzKhzi62UBe55cbPNjp1FqrXRydS4qvbV1F8WWHSfGuViBP%2Ft8lvfHPm6VEndpAW9xk8AY%2FJ250T7tVuHgTStlZv51yNVWWFx%2BI7d2Zk3h3jNy7esl3H8Fl2HjRtnp6%2BqHRjj7oeokg3DlKLSRSG7KcltO7dIC%2BEl3YWe%2Bi2vXaA7k0bbYAkQUfW6R6A%2FaCbGBjFk879KyS7Y%2FMRB5G5a4C3P0YPr5f7QmUDkM4w3PHDhr6GzN5jxCMMrv78IGOqUBjNOy7Y1wRkOkKcxkAQrjWDOYnPW16LFksWuSw%2BjURzQniU1FJJm0CpUbjv3RFabcGYALP5RH83t8fyaHf0O%2BQy2FZ8NZbDdtzOHOKi4mrAo5mYP9BvrbAIu4dCukLGuyOSQPaYHwRuupDdF4kTSfm9x80VhRApNS7nGWP4eIj7ETvteb7Yb%2BeJ64OUwA0FTHhuveG8%2FlKF%2BQQkcJ15mIKZW8QmKp&X-Amz-Signature=1740f1019ac8c21d7279664c1bf843dd141a8f5b93217406a157635f896db4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCGZNS6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICbhWdWnNzAaNgkQqC%2BATM70alipiPfPxdNCPuoCeiJYAiEAlQSPx3vhQqJSkJvkbSMrxlOSmA1WpOSFG9n12WPbpIUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDB7A9i6rfNTxn4PeAyrcAy0s9bZ1rzhivk9%2FLHcAkr6OySPUAZmWJpKP2%2B800R%2BZBtHnBAXJPM5uAu2ZCq3W95%2BDgynOjE%2F%2B%2Fr4UhE9NwdcI83K7hTy4Xwigo2VPKgtBjlvwHbTI2dRRtrG9I8OFwh1%2BpHoi1O59SS6nl4BxWmb3K0tdxmNK9Tjs7tjnsmV4thrN%2Biu850iyoyV64NpxVK7cc9VDiGFozQdluj6RBX%2BUiuO7MiEp1UXGyksS8PPGAU4RM7hFD5GJZ25dScbIOCJAtIvqy%2FH6ox4H7eHB8wS7ziQ%2BilkX1HKLzM7y0kao7wSE0DGLdA4Hb9UVTc4s1X88B5jrI6W1nGoBjJ74xGocpbFTE2%2Fw3RRUml7aBa1dQ%2BDHBXRueNTBASXjoQVfNgbLJ%2BpzKhzi62UBe55cbPNjp1FqrXRydS4qvbV1F8WWHSfGuViBP%2Ft8lvfHPm6VEndpAW9xk8AY%2FJ250T7tVuHgTStlZv51yNVWWFx%2BI7d2Zk3h3jNy7esl3H8Fl2HjRtnp6%2BqHRjj7oeokg3DlKLSRSG7KcltO7dIC%2BEl3YWe%2Bi2vXaA7k0bbYAkQUfW6R6A%2FaCbGBjFk879KyS7Y%2FMRB5G5a4C3P0YPr5f7QmUDkM4w3PHDhr6GzN5jxCMMrv78IGOqUBjNOy7Y1wRkOkKcxkAQrjWDOYnPW16LFksWuSw%2BjURzQniU1FJJm0CpUbjv3RFabcGYALP5RH83t8fyaHf0O%2BQy2FZ8NZbDdtzOHOKi4mrAo5mYP9BvrbAIu4dCukLGuyOSQPaYHwRuupDdF4kTSfm9x80VhRApNS7nGWP4eIj7ETvteb7Yb%2BeJ64OUwA0FTHhuveG8%2FlKF%2BQQkcJ15mIKZW8QmKp&X-Amz-Signature=16ee0ccb6bb52379536670152f80d1d49a2234c758c2e1df9872354022a308fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCGZNS6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICbhWdWnNzAaNgkQqC%2BATM70alipiPfPxdNCPuoCeiJYAiEAlQSPx3vhQqJSkJvkbSMrxlOSmA1WpOSFG9n12WPbpIUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDB7A9i6rfNTxn4PeAyrcAy0s9bZ1rzhivk9%2FLHcAkr6OySPUAZmWJpKP2%2B800R%2BZBtHnBAXJPM5uAu2ZCq3W95%2BDgynOjE%2F%2B%2Fr4UhE9NwdcI83K7hTy4Xwigo2VPKgtBjlvwHbTI2dRRtrG9I8OFwh1%2BpHoi1O59SS6nl4BxWmb3K0tdxmNK9Tjs7tjnsmV4thrN%2Biu850iyoyV64NpxVK7cc9VDiGFozQdluj6RBX%2BUiuO7MiEp1UXGyksS8PPGAU4RM7hFD5GJZ25dScbIOCJAtIvqy%2FH6ox4H7eHB8wS7ziQ%2BilkX1HKLzM7y0kao7wSE0DGLdA4Hb9UVTc4s1X88B5jrI6W1nGoBjJ74xGocpbFTE2%2Fw3RRUml7aBa1dQ%2BDHBXRueNTBASXjoQVfNgbLJ%2BpzKhzi62UBe55cbPNjp1FqrXRydS4qvbV1F8WWHSfGuViBP%2Ft8lvfHPm6VEndpAW9xk8AY%2FJ250T7tVuHgTStlZv51yNVWWFx%2BI7d2Zk3h3jNy7esl3H8Fl2HjRtnp6%2BqHRjj7oeokg3DlKLSRSG7KcltO7dIC%2BEl3YWe%2Bi2vXaA7k0bbYAkQUfW6R6A%2FaCbGBjFk879KyS7Y%2FMRB5G5a4C3P0YPr5f7QmUDkM4w3PHDhr6GzN5jxCMMrv78IGOqUBjNOy7Y1wRkOkKcxkAQrjWDOYnPW16LFksWuSw%2BjURzQniU1FJJm0CpUbjv3RFabcGYALP5RH83t8fyaHf0O%2BQy2FZ8NZbDdtzOHOKi4mrAo5mYP9BvrbAIu4dCukLGuyOSQPaYHwRuupDdF4kTSfm9x80VhRApNS7nGWP4eIj7ETvteb7Yb%2BeJ64OUwA0FTHhuveG8%2FlKF%2BQQkcJ15mIKZW8QmKp&X-Amz-Signature=64c25ca20bdfde2339ee82fe3496b3ccae4342b4d37fece3f413aaf6757e235c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCGZNS6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICbhWdWnNzAaNgkQqC%2BATM70alipiPfPxdNCPuoCeiJYAiEAlQSPx3vhQqJSkJvkbSMrxlOSmA1WpOSFG9n12WPbpIUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDB7A9i6rfNTxn4PeAyrcAy0s9bZ1rzhivk9%2FLHcAkr6OySPUAZmWJpKP2%2B800R%2BZBtHnBAXJPM5uAu2ZCq3W95%2BDgynOjE%2F%2B%2Fr4UhE9NwdcI83K7hTy4Xwigo2VPKgtBjlvwHbTI2dRRtrG9I8OFwh1%2BpHoi1O59SS6nl4BxWmb3K0tdxmNK9Tjs7tjnsmV4thrN%2Biu850iyoyV64NpxVK7cc9VDiGFozQdluj6RBX%2BUiuO7MiEp1UXGyksS8PPGAU4RM7hFD5GJZ25dScbIOCJAtIvqy%2FH6ox4H7eHB8wS7ziQ%2BilkX1HKLzM7y0kao7wSE0DGLdA4Hb9UVTc4s1X88B5jrI6W1nGoBjJ74xGocpbFTE2%2Fw3RRUml7aBa1dQ%2BDHBXRueNTBASXjoQVfNgbLJ%2BpzKhzi62UBe55cbPNjp1FqrXRydS4qvbV1F8WWHSfGuViBP%2Ft8lvfHPm6VEndpAW9xk8AY%2FJ250T7tVuHgTStlZv51yNVWWFx%2BI7d2Zk3h3jNy7esl3H8Fl2HjRtnp6%2BqHRjj7oeokg3DlKLSRSG7KcltO7dIC%2BEl3YWe%2Bi2vXaA7k0bbYAkQUfW6R6A%2FaCbGBjFk879KyS7Y%2FMRB5G5a4C3P0YPr5f7QmUDkM4w3PHDhr6GzN5jxCMMrv78IGOqUBjNOy7Y1wRkOkKcxkAQrjWDOYnPW16LFksWuSw%2BjURzQniU1FJJm0CpUbjv3RFabcGYALP5RH83t8fyaHf0O%2BQy2FZ8NZbDdtzOHOKi4mrAo5mYP9BvrbAIu4dCukLGuyOSQPaYHwRuupDdF4kTSfm9x80VhRApNS7nGWP4eIj7ETvteb7Yb%2BeJ64OUwA0FTHhuveG8%2FlKF%2BQQkcJ15mIKZW8QmKp&X-Amz-Signature=532ea6755b87b8637d487befb61840cdc9ddd3e94aa7d52918b180e30ceb7d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZCGZNS6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICbhWdWnNzAaNgkQqC%2BATM70alipiPfPxdNCPuoCeiJYAiEAlQSPx3vhQqJSkJvkbSMrxlOSmA1WpOSFG9n12WPbpIUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDB7A9i6rfNTxn4PeAyrcAy0s9bZ1rzhivk9%2FLHcAkr6OySPUAZmWJpKP2%2B800R%2BZBtHnBAXJPM5uAu2ZCq3W95%2BDgynOjE%2F%2B%2Fr4UhE9NwdcI83K7hTy4Xwigo2VPKgtBjlvwHbTI2dRRtrG9I8OFwh1%2BpHoi1O59SS6nl4BxWmb3K0tdxmNK9Tjs7tjnsmV4thrN%2Biu850iyoyV64NpxVK7cc9VDiGFozQdluj6RBX%2BUiuO7MiEp1UXGyksS8PPGAU4RM7hFD5GJZ25dScbIOCJAtIvqy%2FH6ox4H7eHB8wS7ziQ%2BilkX1HKLzM7y0kao7wSE0DGLdA4Hb9UVTc4s1X88B5jrI6W1nGoBjJ74xGocpbFTE2%2Fw3RRUml7aBa1dQ%2BDHBXRueNTBASXjoQVfNgbLJ%2BpzKhzi62UBe55cbPNjp1FqrXRydS4qvbV1F8WWHSfGuViBP%2Ft8lvfHPm6VEndpAW9xk8AY%2FJ250T7tVuHgTStlZv51yNVWWFx%2BI7d2Zk3h3jNy7esl3H8Fl2HjRtnp6%2BqHRjj7oeokg3DlKLSRSG7KcltO7dIC%2BEl3YWe%2Bi2vXaA7k0bbYAkQUfW6R6A%2FaCbGBjFk879KyS7Y%2FMRB5G5a4C3P0YPr5f7QmUDkM4w3PHDhr6GzN5jxCMMrv78IGOqUBjNOy7Y1wRkOkKcxkAQrjWDOYnPW16LFksWuSw%2BjURzQniU1FJJm0CpUbjv3RFabcGYALP5RH83t8fyaHf0O%2BQy2FZ8NZbDdtzOHOKi4mrAo5mYP9BvrbAIu4dCukLGuyOSQPaYHwRuupDdF4kTSfm9x80VhRApNS7nGWP4eIj7ETvteb7Yb%2BeJ64OUwA0FTHhuveG8%2FlKF%2BQQkcJ15mIKZW8QmKp&X-Amz-Signature=d77d0ecdd00513be3cb13939ea8ea6edce53d1336d6842dd2f45974e566d1b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
