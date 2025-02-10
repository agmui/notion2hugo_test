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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFLCCYV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgkSuaaDOQSzs65WLZh2xxuBNUDogA7tyA6o%2BiwQ4foAiBXC%2BwXy0OCLgMgsYwW3TDSrazCKusWDmZKLiCVcBok1SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU32ArNelOJT8JOSWKtwD2BLoSdGS5Xsw4Omu5TTuH9y269qznPNoIoTnChcHG5TFf0GMkw1u%2FPRzbx8WJ4j6LpqOb%2FG%2BzJ2uDtl3YTh74wuiygz8hOlrTsyNECzynW0FAIDRmykcsJhCAc54O6McV2BsnkifvjcRYu2cdH2DnJp0KwKU9H3SoGX7fGUFh3ulGhCPj1XzgxiJDGPxCKYaiqxUaciSnl41HUrLp6No6Ppe0Mz%2F%2FBF%2B89sbl9DmFCLqvxXDAT48CP4gkM3Chd5b78YlN9i2EAYI8hFIdu1pN%2FoaGTYNIP4txn5VewOG3ZOPXS9i0KqBy2DB7Ecia5cOP4urC6kUS36vXWi4qN853i%2BgYg0%2BTHq6VGVrwjHgg54nOnWtNBYSgK2kW6E3tD5PiQT4J7dGVqm%2F4toWoYPvYB8%2FFwXpqMF8NOBKh4hPNw1Rbj2jDLicKcXr%2BcA0jwI9uAy%2BT16D3hzR2%2F6upLoWF5nrmI8pTWwpwv%2FXj5QzNcuWmQhYMc7AIVfrWLzJa7aMjY7IB6fuOsGW1yYvBVY62MLefcOLYmanvRIafFxoOjBh0TVIcz41TAuDLje3ODqMvXJkrlnSX6M7p%2FKQfP506WCXSfxGlculYb0KzjJp%2Fp%2FjN6BiiEjyXPShlL4w8ZylvQY6pgFS1i5zosbXvLc82ICnE9v3fLDF4h3twVKo%2BKH1eJc%2Fm7NvpMurVStbXIEKBQdqlPIKfkq8Vx7YyYnN8sNvZq9pdg5piyd4BzoAWwIfYCYtmETR%2F4u22OXuUAP%2FWgZAlP%2FBW1HY0G0UGS67Jq1vSVuGRZWh0llJzP9nj5yE7rud9udc25%2FQ%2F7WuzlO%2FgurRLOxObtyzRN%2F0V6Fu1Oj%2FC9QYwhYjFX22&X-Amz-Signature=65e1ba0a8069bddb740430a2a85c9e800807226ffd4d2f27050e4703574bb3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFLCCYV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgkSuaaDOQSzs65WLZh2xxuBNUDogA7tyA6o%2BiwQ4foAiBXC%2BwXy0OCLgMgsYwW3TDSrazCKusWDmZKLiCVcBok1SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU32ArNelOJT8JOSWKtwD2BLoSdGS5Xsw4Omu5TTuH9y269qznPNoIoTnChcHG5TFf0GMkw1u%2FPRzbx8WJ4j6LpqOb%2FG%2BzJ2uDtl3YTh74wuiygz8hOlrTsyNECzynW0FAIDRmykcsJhCAc54O6McV2BsnkifvjcRYu2cdH2DnJp0KwKU9H3SoGX7fGUFh3ulGhCPj1XzgxiJDGPxCKYaiqxUaciSnl41HUrLp6No6Ppe0Mz%2F%2FBF%2B89sbl9DmFCLqvxXDAT48CP4gkM3Chd5b78YlN9i2EAYI8hFIdu1pN%2FoaGTYNIP4txn5VewOG3ZOPXS9i0KqBy2DB7Ecia5cOP4urC6kUS36vXWi4qN853i%2BgYg0%2BTHq6VGVrwjHgg54nOnWtNBYSgK2kW6E3tD5PiQT4J7dGVqm%2F4toWoYPvYB8%2FFwXpqMF8NOBKh4hPNw1Rbj2jDLicKcXr%2BcA0jwI9uAy%2BT16D3hzR2%2F6upLoWF5nrmI8pTWwpwv%2FXj5QzNcuWmQhYMc7AIVfrWLzJa7aMjY7IB6fuOsGW1yYvBVY62MLefcOLYmanvRIafFxoOjBh0TVIcz41TAuDLje3ODqMvXJkrlnSX6M7p%2FKQfP506WCXSfxGlculYb0KzjJp%2Fp%2FjN6BiiEjyXPShlL4w8ZylvQY6pgFS1i5zosbXvLc82ICnE9v3fLDF4h3twVKo%2BKH1eJc%2Fm7NvpMurVStbXIEKBQdqlPIKfkq8Vx7YyYnN8sNvZq9pdg5piyd4BzoAWwIfYCYtmETR%2F4u22OXuUAP%2FWgZAlP%2FBW1HY0G0UGS67Jq1vSVuGRZWh0llJzP9nj5yE7rud9udc25%2FQ%2F7WuzlO%2FgurRLOxObtyzRN%2F0V6Fu1Oj%2FC9QYwhYjFX22&X-Amz-Signature=ec0a8616a88975a86f93563bc63b94f68efad44532dd937fced7df4da79dc79f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFLCCYV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgkSuaaDOQSzs65WLZh2xxuBNUDogA7tyA6o%2BiwQ4foAiBXC%2BwXy0OCLgMgsYwW3TDSrazCKusWDmZKLiCVcBok1SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU32ArNelOJT8JOSWKtwD2BLoSdGS5Xsw4Omu5TTuH9y269qznPNoIoTnChcHG5TFf0GMkw1u%2FPRzbx8WJ4j6LpqOb%2FG%2BzJ2uDtl3YTh74wuiygz8hOlrTsyNECzynW0FAIDRmykcsJhCAc54O6McV2BsnkifvjcRYu2cdH2DnJp0KwKU9H3SoGX7fGUFh3ulGhCPj1XzgxiJDGPxCKYaiqxUaciSnl41HUrLp6No6Ppe0Mz%2F%2FBF%2B89sbl9DmFCLqvxXDAT48CP4gkM3Chd5b78YlN9i2EAYI8hFIdu1pN%2FoaGTYNIP4txn5VewOG3ZOPXS9i0KqBy2DB7Ecia5cOP4urC6kUS36vXWi4qN853i%2BgYg0%2BTHq6VGVrwjHgg54nOnWtNBYSgK2kW6E3tD5PiQT4J7dGVqm%2F4toWoYPvYB8%2FFwXpqMF8NOBKh4hPNw1Rbj2jDLicKcXr%2BcA0jwI9uAy%2BT16D3hzR2%2F6upLoWF5nrmI8pTWwpwv%2FXj5QzNcuWmQhYMc7AIVfrWLzJa7aMjY7IB6fuOsGW1yYvBVY62MLefcOLYmanvRIafFxoOjBh0TVIcz41TAuDLje3ODqMvXJkrlnSX6M7p%2FKQfP506WCXSfxGlculYb0KzjJp%2Fp%2FjN6BiiEjyXPShlL4w8ZylvQY6pgFS1i5zosbXvLc82ICnE9v3fLDF4h3twVKo%2BKH1eJc%2Fm7NvpMurVStbXIEKBQdqlPIKfkq8Vx7YyYnN8sNvZq9pdg5piyd4BzoAWwIfYCYtmETR%2F4u22OXuUAP%2FWgZAlP%2FBW1HY0G0UGS67Jq1vSVuGRZWh0llJzP9nj5yE7rud9udc25%2FQ%2F7WuzlO%2FgurRLOxObtyzRN%2F0V6Fu1Oj%2FC9QYwhYjFX22&X-Amz-Signature=0a7a33d48447d56dbea4ca74467b7921605ed3cd878dd9b288eec3687b00ff62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFLCCYV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgkSuaaDOQSzs65WLZh2xxuBNUDogA7tyA6o%2BiwQ4foAiBXC%2BwXy0OCLgMgsYwW3TDSrazCKusWDmZKLiCVcBok1SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU32ArNelOJT8JOSWKtwD2BLoSdGS5Xsw4Omu5TTuH9y269qznPNoIoTnChcHG5TFf0GMkw1u%2FPRzbx8WJ4j6LpqOb%2FG%2BzJ2uDtl3YTh74wuiygz8hOlrTsyNECzynW0FAIDRmykcsJhCAc54O6McV2BsnkifvjcRYu2cdH2DnJp0KwKU9H3SoGX7fGUFh3ulGhCPj1XzgxiJDGPxCKYaiqxUaciSnl41HUrLp6No6Ppe0Mz%2F%2FBF%2B89sbl9DmFCLqvxXDAT48CP4gkM3Chd5b78YlN9i2EAYI8hFIdu1pN%2FoaGTYNIP4txn5VewOG3ZOPXS9i0KqBy2DB7Ecia5cOP4urC6kUS36vXWi4qN853i%2BgYg0%2BTHq6VGVrwjHgg54nOnWtNBYSgK2kW6E3tD5PiQT4J7dGVqm%2F4toWoYPvYB8%2FFwXpqMF8NOBKh4hPNw1Rbj2jDLicKcXr%2BcA0jwI9uAy%2BT16D3hzR2%2F6upLoWF5nrmI8pTWwpwv%2FXj5QzNcuWmQhYMc7AIVfrWLzJa7aMjY7IB6fuOsGW1yYvBVY62MLefcOLYmanvRIafFxoOjBh0TVIcz41TAuDLje3ODqMvXJkrlnSX6M7p%2FKQfP506WCXSfxGlculYb0KzjJp%2Fp%2FjN6BiiEjyXPShlL4w8ZylvQY6pgFS1i5zosbXvLc82ICnE9v3fLDF4h3twVKo%2BKH1eJc%2Fm7NvpMurVStbXIEKBQdqlPIKfkq8Vx7YyYnN8sNvZq9pdg5piyd4BzoAWwIfYCYtmETR%2F4u22OXuUAP%2FWgZAlP%2FBW1HY0G0UGS67Jq1vSVuGRZWh0llJzP9nj5yE7rud9udc25%2FQ%2F7WuzlO%2FgurRLOxObtyzRN%2F0V6Fu1Oj%2FC9QYwhYjFX22&X-Amz-Signature=2edd7d04bb4fb76635092975d9a8c2a587fd16ddb4fc6b66a68769d3e517d691&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFLCCYV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgkSuaaDOQSzs65WLZh2xxuBNUDogA7tyA6o%2BiwQ4foAiBXC%2BwXy0OCLgMgsYwW3TDSrazCKusWDmZKLiCVcBok1SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU32ArNelOJT8JOSWKtwD2BLoSdGS5Xsw4Omu5TTuH9y269qznPNoIoTnChcHG5TFf0GMkw1u%2FPRzbx8WJ4j6LpqOb%2FG%2BzJ2uDtl3YTh74wuiygz8hOlrTsyNECzynW0FAIDRmykcsJhCAc54O6McV2BsnkifvjcRYu2cdH2DnJp0KwKU9H3SoGX7fGUFh3ulGhCPj1XzgxiJDGPxCKYaiqxUaciSnl41HUrLp6No6Ppe0Mz%2F%2FBF%2B89sbl9DmFCLqvxXDAT48CP4gkM3Chd5b78YlN9i2EAYI8hFIdu1pN%2FoaGTYNIP4txn5VewOG3ZOPXS9i0KqBy2DB7Ecia5cOP4urC6kUS36vXWi4qN853i%2BgYg0%2BTHq6VGVrwjHgg54nOnWtNBYSgK2kW6E3tD5PiQT4J7dGVqm%2F4toWoYPvYB8%2FFwXpqMF8NOBKh4hPNw1Rbj2jDLicKcXr%2BcA0jwI9uAy%2BT16D3hzR2%2F6upLoWF5nrmI8pTWwpwv%2FXj5QzNcuWmQhYMc7AIVfrWLzJa7aMjY7IB6fuOsGW1yYvBVY62MLefcOLYmanvRIafFxoOjBh0TVIcz41TAuDLje3ODqMvXJkrlnSX6M7p%2FKQfP506WCXSfxGlculYb0KzjJp%2Fp%2FjN6BiiEjyXPShlL4w8ZylvQY6pgFS1i5zosbXvLc82ICnE9v3fLDF4h3twVKo%2BKH1eJc%2Fm7NvpMurVStbXIEKBQdqlPIKfkq8Vx7YyYnN8sNvZq9pdg5piyd4BzoAWwIfYCYtmETR%2F4u22OXuUAP%2FWgZAlP%2FBW1HY0G0UGS67Jq1vSVuGRZWh0llJzP9nj5yE7rud9udc25%2FQ%2F7WuzlO%2FgurRLOxObtyzRN%2F0V6Fu1Oj%2FC9QYwhYjFX22&X-Amz-Signature=00959c3122dc16750c5073ecbfe8014f3957f342b9ddf5a11f94f2bc0a3afcac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFFLCCYV%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgkSuaaDOQSzs65WLZh2xxuBNUDogA7tyA6o%2BiwQ4foAiBXC%2BwXy0OCLgMgsYwW3TDSrazCKusWDmZKLiCVcBok1SqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU32ArNelOJT8JOSWKtwD2BLoSdGS5Xsw4Omu5TTuH9y269qznPNoIoTnChcHG5TFf0GMkw1u%2FPRzbx8WJ4j6LpqOb%2FG%2BzJ2uDtl3YTh74wuiygz8hOlrTsyNECzynW0FAIDRmykcsJhCAc54O6McV2BsnkifvjcRYu2cdH2DnJp0KwKU9H3SoGX7fGUFh3ulGhCPj1XzgxiJDGPxCKYaiqxUaciSnl41HUrLp6No6Ppe0Mz%2F%2FBF%2B89sbl9DmFCLqvxXDAT48CP4gkM3Chd5b78YlN9i2EAYI8hFIdu1pN%2FoaGTYNIP4txn5VewOG3ZOPXS9i0KqBy2DB7Ecia5cOP4urC6kUS36vXWi4qN853i%2BgYg0%2BTHq6VGVrwjHgg54nOnWtNBYSgK2kW6E3tD5PiQT4J7dGVqm%2F4toWoYPvYB8%2FFwXpqMF8NOBKh4hPNw1Rbj2jDLicKcXr%2BcA0jwI9uAy%2BT16D3hzR2%2F6upLoWF5nrmI8pTWwpwv%2FXj5QzNcuWmQhYMc7AIVfrWLzJa7aMjY7IB6fuOsGW1yYvBVY62MLefcOLYmanvRIafFxoOjBh0TVIcz41TAuDLje3ODqMvXJkrlnSX6M7p%2FKQfP506WCXSfxGlculYb0KzjJp%2Fp%2FjN6BiiEjyXPShlL4w8ZylvQY6pgFS1i5zosbXvLc82ICnE9v3fLDF4h3twVKo%2BKH1eJc%2Fm7NvpMurVStbXIEKBQdqlPIKfkq8Vx7YyYnN8sNvZq9pdg5piyd4BzoAWwIfYCYtmETR%2F4u22OXuUAP%2FWgZAlP%2FBW1HY0G0UGS67Jq1vSVuGRZWh0llJzP9nj5yE7rud9udc25%2FQ%2F7WuzlO%2FgurRLOxObtyzRN%2F0V6Fu1Oj%2FC9QYwhYjFX22&X-Amz-Signature=fa5f5b906eb67755d548c904967808e0cb58d372fba011c529972f73d87598c7&X-Amz-SignedHeaders=host&x-id=GetObject)
