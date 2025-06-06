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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEDTTXC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIArlCJZLl3a2yUvm%2BNAdMnSWKJtpWItmg7puKtVGQV83AiBcZlIpZkO9Z%2B7xuoR2Uu4TgbNpH0c2TuCNUSDCXNE1cCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4mjMgxTdT7Z8MuRnKtwD5h6J8pRZfOgpyhSsp%2FvKbjjij2P41SSITvAhh7G2%2F%2FN3a5V4xbdn6zXghx1t%2BlM9KzYITa7V%2B5itNGutp4IPznvp4NZ181zz2EaPlUQv8r60ChcAgS9xcrDRZs%2ByKQuZ2W8N8p%2FdrozvMTY3WXEmYxmbj%2F5OY6GN7Zi8oQ2cb5FQMhmfs46skA36nvJBGzLkfaSmhmJBarKPluxLPWSwspwkq8jqeu3vBCH%2BptXyvvCUqpjM%2BwGTPJCd4sumb6%2FIMe0wGx4pAaxILi92coMtM3SiuqS4%2BRjX0AH%2BQJOHnqVrxVwLddmRkt%2B%2B62Yqlg4Qa5K8JI459WCdM3jU%2F8YmNzHcdOS0RSXoFbIq79AWlcJ3K0LfZf60aST3TaZLoji8iybX%2FM4lSeSdTQ%2FXKz%2BVz340sH6%2B1bJ7%2F%2BZtq2ONJk0sjadzMp60YtH3hET%2BN%2B8WRCrcjPhKwuBwEENuVZ37jgTsNjC5tcADDkLjFflHy207O%2BU7JsHEAG5bZZqBckjUUge0FlkZYnl%2Fw%2B3Pr60LfpC2ckkrbeAYDWkBgEwRvbB3SeuuuaFlaGpiT0X9kDcLntyyyI3o4grpCVotJ%2BnGWw2Mcvrc9LLSF%2BQbCnu6ehdSQF4ThH1Fow93vcgw%2F5eJwgY6pgENoR%2B4JWHbjHmzeE20X7ZsWdBtUTEQJEKhYdCrLD%2B7RLuRJmh45nTPjk9%2FuX6AtooHvcNEXOOdQnkfh3FTMPDePpwqzz5mdDN6xPnsdTfjiQtpyJllN1h1HGat0vhA5BbADzf0msPd%2F5eG%2FbeWJ5%2FPpUoWK6uvELrOsh0Dy2bhwLSM%2FagTxb39hMYikwG9y3UwM3DzuHtHQuzUu8TCxGVYrxs0e8Y%2B&X-Amz-Signature=bbf9ad4fdff930c889f369e3bc6a5c8e6ae28b2607b86301be80354b665f5ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEDTTXC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIArlCJZLl3a2yUvm%2BNAdMnSWKJtpWItmg7puKtVGQV83AiBcZlIpZkO9Z%2B7xuoR2Uu4TgbNpH0c2TuCNUSDCXNE1cCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4mjMgxTdT7Z8MuRnKtwD5h6J8pRZfOgpyhSsp%2FvKbjjij2P41SSITvAhh7G2%2F%2FN3a5V4xbdn6zXghx1t%2BlM9KzYITa7V%2B5itNGutp4IPznvp4NZ181zz2EaPlUQv8r60ChcAgS9xcrDRZs%2ByKQuZ2W8N8p%2FdrozvMTY3WXEmYxmbj%2F5OY6GN7Zi8oQ2cb5FQMhmfs46skA36nvJBGzLkfaSmhmJBarKPluxLPWSwspwkq8jqeu3vBCH%2BptXyvvCUqpjM%2BwGTPJCd4sumb6%2FIMe0wGx4pAaxILi92coMtM3SiuqS4%2BRjX0AH%2BQJOHnqVrxVwLddmRkt%2B%2B62Yqlg4Qa5K8JI459WCdM3jU%2F8YmNzHcdOS0RSXoFbIq79AWlcJ3K0LfZf60aST3TaZLoji8iybX%2FM4lSeSdTQ%2FXKz%2BVz340sH6%2B1bJ7%2F%2BZtq2ONJk0sjadzMp60YtH3hET%2BN%2B8WRCrcjPhKwuBwEENuVZ37jgTsNjC5tcADDkLjFflHy207O%2BU7JsHEAG5bZZqBckjUUge0FlkZYnl%2Fw%2B3Pr60LfpC2ckkrbeAYDWkBgEwRvbB3SeuuuaFlaGpiT0X9kDcLntyyyI3o4grpCVotJ%2BnGWw2Mcvrc9LLSF%2BQbCnu6ehdSQF4ThH1Fow93vcgw%2F5eJwgY6pgENoR%2B4JWHbjHmzeE20X7ZsWdBtUTEQJEKhYdCrLD%2B7RLuRJmh45nTPjk9%2FuX6AtooHvcNEXOOdQnkfh3FTMPDePpwqzz5mdDN6xPnsdTfjiQtpyJllN1h1HGat0vhA5BbADzf0msPd%2F5eG%2FbeWJ5%2FPpUoWK6uvELrOsh0Dy2bhwLSM%2FagTxb39hMYikwG9y3UwM3DzuHtHQuzUu8TCxGVYrxs0e8Y%2B&X-Amz-Signature=99166b7400496464c64dc22360105234f3fcda4b0ed6ace77330756db8f76fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEDTTXC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIArlCJZLl3a2yUvm%2BNAdMnSWKJtpWItmg7puKtVGQV83AiBcZlIpZkO9Z%2B7xuoR2Uu4TgbNpH0c2TuCNUSDCXNE1cCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4mjMgxTdT7Z8MuRnKtwD5h6J8pRZfOgpyhSsp%2FvKbjjij2P41SSITvAhh7G2%2F%2FN3a5V4xbdn6zXghx1t%2BlM9KzYITa7V%2B5itNGutp4IPznvp4NZ181zz2EaPlUQv8r60ChcAgS9xcrDRZs%2ByKQuZ2W8N8p%2FdrozvMTY3WXEmYxmbj%2F5OY6GN7Zi8oQ2cb5FQMhmfs46skA36nvJBGzLkfaSmhmJBarKPluxLPWSwspwkq8jqeu3vBCH%2BptXyvvCUqpjM%2BwGTPJCd4sumb6%2FIMe0wGx4pAaxILi92coMtM3SiuqS4%2BRjX0AH%2BQJOHnqVrxVwLddmRkt%2B%2B62Yqlg4Qa5K8JI459WCdM3jU%2F8YmNzHcdOS0RSXoFbIq79AWlcJ3K0LfZf60aST3TaZLoji8iybX%2FM4lSeSdTQ%2FXKz%2BVz340sH6%2B1bJ7%2F%2BZtq2ONJk0sjadzMp60YtH3hET%2BN%2B8WRCrcjPhKwuBwEENuVZ37jgTsNjC5tcADDkLjFflHy207O%2BU7JsHEAG5bZZqBckjUUge0FlkZYnl%2Fw%2B3Pr60LfpC2ckkrbeAYDWkBgEwRvbB3SeuuuaFlaGpiT0X9kDcLntyyyI3o4grpCVotJ%2BnGWw2Mcvrc9LLSF%2BQbCnu6ehdSQF4ThH1Fow93vcgw%2F5eJwgY6pgENoR%2B4JWHbjHmzeE20X7ZsWdBtUTEQJEKhYdCrLD%2B7RLuRJmh45nTPjk9%2FuX6AtooHvcNEXOOdQnkfh3FTMPDePpwqzz5mdDN6xPnsdTfjiQtpyJllN1h1HGat0vhA5BbADzf0msPd%2F5eG%2FbeWJ5%2FPpUoWK6uvELrOsh0Dy2bhwLSM%2FagTxb39hMYikwG9y3UwM3DzuHtHQuzUu8TCxGVYrxs0e8Y%2B&X-Amz-Signature=a1e1ec5354f3279d2fc95e516555b05a78425cb28e1370e4c9f139a4437eefc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEDTTXC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIArlCJZLl3a2yUvm%2BNAdMnSWKJtpWItmg7puKtVGQV83AiBcZlIpZkO9Z%2B7xuoR2Uu4TgbNpH0c2TuCNUSDCXNE1cCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4mjMgxTdT7Z8MuRnKtwD5h6J8pRZfOgpyhSsp%2FvKbjjij2P41SSITvAhh7G2%2F%2FN3a5V4xbdn6zXghx1t%2BlM9KzYITa7V%2B5itNGutp4IPznvp4NZ181zz2EaPlUQv8r60ChcAgS9xcrDRZs%2ByKQuZ2W8N8p%2FdrozvMTY3WXEmYxmbj%2F5OY6GN7Zi8oQ2cb5FQMhmfs46skA36nvJBGzLkfaSmhmJBarKPluxLPWSwspwkq8jqeu3vBCH%2BptXyvvCUqpjM%2BwGTPJCd4sumb6%2FIMe0wGx4pAaxILi92coMtM3SiuqS4%2BRjX0AH%2BQJOHnqVrxVwLddmRkt%2B%2B62Yqlg4Qa5K8JI459WCdM3jU%2F8YmNzHcdOS0RSXoFbIq79AWlcJ3K0LfZf60aST3TaZLoji8iybX%2FM4lSeSdTQ%2FXKz%2BVz340sH6%2B1bJ7%2F%2BZtq2ONJk0sjadzMp60YtH3hET%2BN%2B8WRCrcjPhKwuBwEENuVZ37jgTsNjC5tcADDkLjFflHy207O%2BU7JsHEAG5bZZqBckjUUge0FlkZYnl%2Fw%2B3Pr60LfpC2ckkrbeAYDWkBgEwRvbB3SeuuuaFlaGpiT0X9kDcLntyyyI3o4grpCVotJ%2BnGWw2Mcvrc9LLSF%2BQbCnu6ehdSQF4ThH1Fow93vcgw%2F5eJwgY6pgENoR%2B4JWHbjHmzeE20X7ZsWdBtUTEQJEKhYdCrLD%2B7RLuRJmh45nTPjk9%2FuX6AtooHvcNEXOOdQnkfh3FTMPDePpwqzz5mdDN6xPnsdTfjiQtpyJllN1h1HGat0vhA5BbADzf0msPd%2F5eG%2FbeWJ5%2FPpUoWK6uvELrOsh0Dy2bhwLSM%2FagTxb39hMYikwG9y3UwM3DzuHtHQuzUu8TCxGVYrxs0e8Y%2B&X-Amz-Signature=c8cb78657da74ab8ba00fd1f9cb20178adf774e748a6711a1511a0bea8d376a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEDTTXC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIArlCJZLl3a2yUvm%2BNAdMnSWKJtpWItmg7puKtVGQV83AiBcZlIpZkO9Z%2B7xuoR2Uu4TgbNpH0c2TuCNUSDCXNE1cCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4mjMgxTdT7Z8MuRnKtwD5h6J8pRZfOgpyhSsp%2FvKbjjij2P41SSITvAhh7G2%2F%2FN3a5V4xbdn6zXghx1t%2BlM9KzYITa7V%2B5itNGutp4IPznvp4NZ181zz2EaPlUQv8r60ChcAgS9xcrDRZs%2ByKQuZ2W8N8p%2FdrozvMTY3WXEmYxmbj%2F5OY6GN7Zi8oQ2cb5FQMhmfs46skA36nvJBGzLkfaSmhmJBarKPluxLPWSwspwkq8jqeu3vBCH%2BptXyvvCUqpjM%2BwGTPJCd4sumb6%2FIMe0wGx4pAaxILi92coMtM3SiuqS4%2BRjX0AH%2BQJOHnqVrxVwLddmRkt%2B%2B62Yqlg4Qa5K8JI459WCdM3jU%2F8YmNzHcdOS0RSXoFbIq79AWlcJ3K0LfZf60aST3TaZLoji8iybX%2FM4lSeSdTQ%2FXKz%2BVz340sH6%2B1bJ7%2F%2BZtq2ONJk0sjadzMp60YtH3hET%2BN%2B8WRCrcjPhKwuBwEENuVZ37jgTsNjC5tcADDkLjFflHy207O%2BU7JsHEAG5bZZqBckjUUge0FlkZYnl%2Fw%2B3Pr60LfpC2ckkrbeAYDWkBgEwRvbB3SeuuuaFlaGpiT0X9kDcLntyyyI3o4grpCVotJ%2BnGWw2Mcvrc9LLSF%2BQbCnu6ehdSQF4ThH1Fow93vcgw%2F5eJwgY6pgENoR%2B4JWHbjHmzeE20X7ZsWdBtUTEQJEKhYdCrLD%2B7RLuRJmh45nTPjk9%2FuX6AtooHvcNEXOOdQnkfh3FTMPDePpwqzz5mdDN6xPnsdTfjiQtpyJllN1h1HGat0vhA5BbADzf0msPd%2F5eG%2FbeWJ5%2FPpUoWK6uvELrOsh0Dy2bhwLSM%2FagTxb39hMYikwG9y3UwM3DzuHtHQuzUu8TCxGVYrxs0e8Y%2B&X-Amz-Signature=2685e1bff1c3108192954edcc33de4e2e5323ffa5aedf22ccf45c567080dee60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OEDTTXC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T061348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIArlCJZLl3a2yUvm%2BNAdMnSWKJtpWItmg7puKtVGQV83AiBcZlIpZkO9Z%2B7xuoR2Uu4TgbNpH0c2TuCNUSDCXNE1cCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM4mjMgxTdT7Z8MuRnKtwD5h6J8pRZfOgpyhSsp%2FvKbjjij2P41SSITvAhh7G2%2F%2FN3a5V4xbdn6zXghx1t%2BlM9KzYITa7V%2B5itNGutp4IPznvp4NZ181zz2EaPlUQv8r60ChcAgS9xcrDRZs%2ByKQuZ2W8N8p%2FdrozvMTY3WXEmYxmbj%2F5OY6GN7Zi8oQ2cb5FQMhmfs46skA36nvJBGzLkfaSmhmJBarKPluxLPWSwspwkq8jqeu3vBCH%2BptXyvvCUqpjM%2BwGTPJCd4sumb6%2FIMe0wGx4pAaxILi92coMtM3SiuqS4%2BRjX0AH%2BQJOHnqVrxVwLddmRkt%2B%2B62Yqlg4Qa5K8JI459WCdM3jU%2F8YmNzHcdOS0RSXoFbIq79AWlcJ3K0LfZf60aST3TaZLoji8iybX%2FM4lSeSdTQ%2FXKz%2BVz340sH6%2B1bJ7%2F%2BZtq2ONJk0sjadzMp60YtH3hET%2BN%2B8WRCrcjPhKwuBwEENuVZ37jgTsNjC5tcADDkLjFflHy207O%2BU7JsHEAG5bZZqBckjUUge0FlkZYnl%2Fw%2B3Pr60LfpC2ckkrbeAYDWkBgEwRvbB3SeuuuaFlaGpiT0X9kDcLntyyyI3o4grpCVotJ%2BnGWw2Mcvrc9LLSF%2BQbCnu6ehdSQF4ThH1Fow93vcgw%2F5eJwgY6pgENoR%2B4JWHbjHmzeE20X7ZsWdBtUTEQJEKhYdCrLD%2B7RLuRJmh45nTPjk9%2FuX6AtooHvcNEXOOdQnkfh3FTMPDePpwqzz5mdDN6xPnsdTfjiQtpyJllN1h1HGat0vhA5BbADzf0msPd%2F5eG%2FbeWJ5%2FPpUoWK6uvELrOsh0Dy2bhwLSM%2FagTxb39hMYikwG9y3UwM3DzuHtHQuzUu8TCxGVYrxs0e8Y%2B&X-Amz-Signature=33f3d04963b0995f7578ad0a821f0559a7361f7cf324b804f2d5c113b5d7a25a&X-Amz-SignedHeaders=host&x-id=GetObject)
