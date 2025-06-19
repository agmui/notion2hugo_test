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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LDWELQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIvf4ch1z2DNWEN6AEXTUXx%2Byo5DMHnLa8ymMXPX460AiAO4v1BryOr4nh5ApG75kozJQleOU07wMp%2FE0D8h%2Fm2ECqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGvHF4qxPlSdjVUhKtwD9bMhpx8zvASk75HwRTfO%2F28VJGowv6specLbb1H4N%2FENu9PfjcwKMahboBNIXdhCCplBw8Zn4y30XUTpLQI7pcXcBBZC1R2nVGaQj6p3PXiJ3%2B4x%2BalzFs40baMlQaSy1IIcKUzHRG65KtzemXvJfZT9AexWk01Xq8iaba%2B4oSFf6tdeTcn%2FO00CwDQo4k9uU%2FhyMOYfA%2Fd54dSEnUxrwTJjvLlZunp2XM%2Fsq%2BE3XjmlQIG94c3EUpJ48Xe05nefBy7spv9TCg10GJd6ErYYfblOMx9uMIsUN3JUzuqq2C1AOvZ2fqIW8dDmvMEVaxnMGnleTgFj6Up0nlJVD10dmKY4sLabon0%2BSFsOhtIHvqwSuxh4NJ9A1EdQpe6mJ%2FRgyBCR8d92yauZMnxtpZN65Tl3R33A6L5vQ8HtaaO3IpH%2BwdZEZQXkSRa4%2FQ%2BhoHDd6vOU3VsvM0gakCrdzxAUftypJuY3T9EP4AJxn04LEFkD1cHgvCbnKFviTTrqfiRyr0eBXFakZw4WH%2BQUaGHMgRxW3%2FrVb5K0sUSix3toYoV9%2Fow0rPoqIpEL5gP9KKfYJHxB8umEWAIVraW8EovlgSuh9XLO62P8cKHUKotAK8a2oqrwzd2FrFUqTgowpN7QwgY6pgF8IFgCGvxClemSSqsWerfeNZDzghbaXWK3AZ5RjEeepQ2CCvfu0z7iVzHlyglhCO2A2qXhVKsXtNXd6WN27soVDoxNBpo1BkqUkZiMmbZmLqx%2F8Op4BbwdQv0Qbx3%2FI5rFJiU55U0b61yG1yN0FlyX9689RR2hbldOl4iC5F%2FG%2BCrvPTDXWoBbzkdVDvfbclku9xWP2QkkkjfdI7lJzwZwOX6eFjCU&X-Amz-Signature=651acc6d455b9c85e359cc3f8ef1202cd32547d6b2a295bef0a13e2d850e3b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LDWELQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIvf4ch1z2DNWEN6AEXTUXx%2Byo5DMHnLa8ymMXPX460AiAO4v1BryOr4nh5ApG75kozJQleOU07wMp%2FE0D8h%2Fm2ECqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGvHF4qxPlSdjVUhKtwD9bMhpx8zvASk75HwRTfO%2F28VJGowv6specLbb1H4N%2FENu9PfjcwKMahboBNIXdhCCplBw8Zn4y30XUTpLQI7pcXcBBZC1R2nVGaQj6p3PXiJ3%2B4x%2BalzFs40baMlQaSy1IIcKUzHRG65KtzemXvJfZT9AexWk01Xq8iaba%2B4oSFf6tdeTcn%2FO00CwDQo4k9uU%2FhyMOYfA%2Fd54dSEnUxrwTJjvLlZunp2XM%2Fsq%2BE3XjmlQIG94c3EUpJ48Xe05nefBy7spv9TCg10GJd6ErYYfblOMx9uMIsUN3JUzuqq2C1AOvZ2fqIW8dDmvMEVaxnMGnleTgFj6Up0nlJVD10dmKY4sLabon0%2BSFsOhtIHvqwSuxh4NJ9A1EdQpe6mJ%2FRgyBCR8d92yauZMnxtpZN65Tl3R33A6L5vQ8HtaaO3IpH%2BwdZEZQXkSRa4%2FQ%2BhoHDd6vOU3VsvM0gakCrdzxAUftypJuY3T9EP4AJxn04LEFkD1cHgvCbnKFviTTrqfiRyr0eBXFakZw4WH%2BQUaGHMgRxW3%2FrVb5K0sUSix3toYoV9%2Fow0rPoqIpEL5gP9KKfYJHxB8umEWAIVraW8EovlgSuh9XLO62P8cKHUKotAK8a2oqrwzd2FrFUqTgowpN7QwgY6pgF8IFgCGvxClemSSqsWerfeNZDzghbaXWK3AZ5RjEeepQ2CCvfu0z7iVzHlyglhCO2A2qXhVKsXtNXd6WN27soVDoxNBpo1BkqUkZiMmbZmLqx%2F8Op4BbwdQv0Qbx3%2FI5rFJiU55U0b61yG1yN0FlyX9689RR2hbldOl4iC5F%2FG%2BCrvPTDXWoBbzkdVDvfbclku9xWP2QkkkjfdI7lJzwZwOX6eFjCU&X-Amz-Signature=b194a2cd0ff661b087aca4e7d15885a3b73e6bd59b815f486c32a79db86a5464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LDWELQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIvf4ch1z2DNWEN6AEXTUXx%2Byo5DMHnLa8ymMXPX460AiAO4v1BryOr4nh5ApG75kozJQleOU07wMp%2FE0D8h%2Fm2ECqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGvHF4qxPlSdjVUhKtwD9bMhpx8zvASk75HwRTfO%2F28VJGowv6specLbb1H4N%2FENu9PfjcwKMahboBNIXdhCCplBw8Zn4y30XUTpLQI7pcXcBBZC1R2nVGaQj6p3PXiJ3%2B4x%2BalzFs40baMlQaSy1IIcKUzHRG65KtzemXvJfZT9AexWk01Xq8iaba%2B4oSFf6tdeTcn%2FO00CwDQo4k9uU%2FhyMOYfA%2Fd54dSEnUxrwTJjvLlZunp2XM%2Fsq%2BE3XjmlQIG94c3EUpJ48Xe05nefBy7spv9TCg10GJd6ErYYfblOMx9uMIsUN3JUzuqq2C1AOvZ2fqIW8dDmvMEVaxnMGnleTgFj6Up0nlJVD10dmKY4sLabon0%2BSFsOhtIHvqwSuxh4NJ9A1EdQpe6mJ%2FRgyBCR8d92yauZMnxtpZN65Tl3R33A6L5vQ8HtaaO3IpH%2BwdZEZQXkSRa4%2FQ%2BhoHDd6vOU3VsvM0gakCrdzxAUftypJuY3T9EP4AJxn04LEFkD1cHgvCbnKFviTTrqfiRyr0eBXFakZw4WH%2BQUaGHMgRxW3%2FrVb5K0sUSix3toYoV9%2Fow0rPoqIpEL5gP9KKfYJHxB8umEWAIVraW8EovlgSuh9XLO62P8cKHUKotAK8a2oqrwzd2FrFUqTgowpN7QwgY6pgF8IFgCGvxClemSSqsWerfeNZDzghbaXWK3AZ5RjEeepQ2CCvfu0z7iVzHlyglhCO2A2qXhVKsXtNXd6WN27soVDoxNBpo1BkqUkZiMmbZmLqx%2F8Op4BbwdQv0Qbx3%2FI5rFJiU55U0b61yG1yN0FlyX9689RR2hbldOl4iC5F%2FG%2BCrvPTDXWoBbzkdVDvfbclku9xWP2QkkkjfdI7lJzwZwOX6eFjCU&X-Amz-Signature=0f2c6ec476044d3f42fbf96a8d7ce21ce74470e72fea1f2eddcb9583828e1ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LDWELQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIvf4ch1z2DNWEN6AEXTUXx%2Byo5DMHnLa8ymMXPX460AiAO4v1BryOr4nh5ApG75kozJQleOU07wMp%2FE0D8h%2Fm2ECqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGvHF4qxPlSdjVUhKtwD9bMhpx8zvASk75HwRTfO%2F28VJGowv6specLbb1H4N%2FENu9PfjcwKMahboBNIXdhCCplBw8Zn4y30XUTpLQI7pcXcBBZC1R2nVGaQj6p3PXiJ3%2B4x%2BalzFs40baMlQaSy1IIcKUzHRG65KtzemXvJfZT9AexWk01Xq8iaba%2B4oSFf6tdeTcn%2FO00CwDQo4k9uU%2FhyMOYfA%2Fd54dSEnUxrwTJjvLlZunp2XM%2Fsq%2BE3XjmlQIG94c3EUpJ48Xe05nefBy7spv9TCg10GJd6ErYYfblOMx9uMIsUN3JUzuqq2C1AOvZ2fqIW8dDmvMEVaxnMGnleTgFj6Up0nlJVD10dmKY4sLabon0%2BSFsOhtIHvqwSuxh4NJ9A1EdQpe6mJ%2FRgyBCR8d92yauZMnxtpZN65Tl3R33A6L5vQ8HtaaO3IpH%2BwdZEZQXkSRa4%2FQ%2BhoHDd6vOU3VsvM0gakCrdzxAUftypJuY3T9EP4AJxn04LEFkD1cHgvCbnKFviTTrqfiRyr0eBXFakZw4WH%2BQUaGHMgRxW3%2FrVb5K0sUSix3toYoV9%2Fow0rPoqIpEL5gP9KKfYJHxB8umEWAIVraW8EovlgSuh9XLO62P8cKHUKotAK8a2oqrwzd2FrFUqTgowpN7QwgY6pgF8IFgCGvxClemSSqsWerfeNZDzghbaXWK3AZ5RjEeepQ2CCvfu0z7iVzHlyglhCO2A2qXhVKsXtNXd6WN27soVDoxNBpo1BkqUkZiMmbZmLqx%2F8Op4BbwdQv0Qbx3%2FI5rFJiU55U0b61yG1yN0FlyX9689RR2hbldOl4iC5F%2FG%2BCrvPTDXWoBbzkdVDvfbclku9xWP2QkkkjfdI7lJzwZwOX6eFjCU&X-Amz-Signature=2d3de03c430c3ede8b5e5c9853f0179e5e0da812c3e554b80240b9fb2c77fd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LDWELQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIvf4ch1z2DNWEN6AEXTUXx%2Byo5DMHnLa8ymMXPX460AiAO4v1BryOr4nh5ApG75kozJQleOU07wMp%2FE0D8h%2Fm2ECqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGvHF4qxPlSdjVUhKtwD9bMhpx8zvASk75HwRTfO%2F28VJGowv6specLbb1H4N%2FENu9PfjcwKMahboBNIXdhCCplBw8Zn4y30XUTpLQI7pcXcBBZC1R2nVGaQj6p3PXiJ3%2B4x%2BalzFs40baMlQaSy1IIcKUzHRG65KtzemXvJfZT9AexWk01Xq8iaba%2B4oSFf6tdeTcn%2FO00CwDQo4k9uU%2FhyMOYfA%2Fd54dSEnUxrwTJjvLlZunp2XM%2Fsq%2BE3XjmlQIG94c3EUpJ48Xe05nefBy7spv9TCg10GJd6ErYYfblOMx9uMIsUN3JUzuqq2C1AOvZ2fqIW8dDmvMEVaxnMGnleTgFj6Up0nlJVD10dmKY4sLabon0%2BSFsOhtIHvqwSuxh4NJ9A1EdQpe6mJ%2FRgyBCR8d92yauZMnxtpZN65Tl3R33A6L5vQ8HtaaO3IpH%2BwdZEZQXkSRa4%2FQ%2BhoHDd6vOU3VsvM0gakCrdzxAUftypJuY3T9EP4AJxn04LEFkD1cHgvCbnKFviTTrqfiRyr0eBXFakZw4WH%2BQUaGHMgRxW3%2FrVb5K0sUSix3toYoV9%2Fow0rPoqIpEL5gP9KKfYJHxB8umEWAIVraW8EovlgSuh9XLO62P8cKHUKotAK8a2oqrwzd2FrFUqTgowpN7QwgY6pgF8IFgCGvxClemSSqsWerfeNZDzghbaXWK3AZ5RjEeepQ2CCvfu0z7iVzHlyglhCO2A2qXhVKsXtNXd6WN27soVDoxNBpo1BkqUkZiMmbZmLqx%2F8Op4BbwdQv0Qbx3%2FI5rFJiU55U0b61yG1yN0FlyX9689RR2hbldOl4iC5F%2FG%2BCrvPTDXWoBbzkdVDvfbclku9xWP2QkkkjfdI7lJzwZwOX6eFjCU&X-Amz-Signature=f4c48dcefbbba2e601dc256decae3a2a7f43aa98d98e0e57d6b9d2a4b7350f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LDWELQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T161038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBIvf4ch1z2DNWEN6AEXTUXx%2Byo5DMHnLa8ymMXPX460AiAO4v1BryOr4nh5ApG75kozJQleOU07wMp%2FE0D8h%2Fm2ECqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMGvHF4qxPlSdjVUhKtwD9bMhpx8zvASk75HwRTfO%2F28VJGowv6specLbb1H4N%2FENu9PfjcwKMahboBNIXdhCCplBw8Zn4y30XUTpLQI7pcXcBBZC1R2nVGaQj6p3PXiJ3%2B4x%2BalzFs40baMlQaSy1IIcKUzHRG65KtzemXvJfZT9AexWk01Xq8iaba%2B4oSFf6tdeTcn%2FO00CwDQo4k9uU%2FhyMOYfA%2Fd54dSEnUxrwTJjvLlZunp2XM%2Fsq%2BE3XjmlQIG94c3EUpJ48Xe05nefBy7spv9TCg10GJd6ErYYfblOMx9uMIsUN3JUzuqq2C1AOvZ2fqIW8dDmvMEVaxnMGnleTgFj6Up0nlJVD10dmKY4sLabon0%2BSFsOhtIHvqwSuxh4NJ9A1EdQpe6mJ%2FRgyBCR8d92yauZMnxtpZN65Tl3R33A6L5vQ8HtaaO3IpH%2BwdZEZQXkSRa4%2FQ%2BhoHDd6vOU3VsvM0gakCrdzxAUftypJuY3T9EP4AJxn04LEFkD1cHgvCbnKFviTTrqfiRyr0eBXFakZw4WH%2BQUaGHMgRxW3%2FrVb5K0sUSix3toYoV9%2Fow0rPoqIpEL5gP9KKfYJHxB8umEWAIVraW8EovlgSuh9XLO62P8cKHUKotAK8a2oqrwzd2FrFUqTgowpN7QwgY6pgF8IFgCGvxClemSSqsWerfeNZDzghbaXWK3AZ5RjEeepQ2CCvfu0z7iVzHlyglhCO2A2qXhVKsXtNXd6WN27soVDoxNBpo1BkqUkZiMmbZmLqx%2F8Op4BbwdQv0Qbx3%2FI5rFJiU55U0b61yG1yN0FlyX9689RR2hbldOl4iC5F%2FG%2BCrvPTDXWoBbzkdVDvfbclku9xWP2QkkkjfdI7lJzwZwOX6eFjCU&X-Amz-Signature=58c2df591e7c016b4a75913bf7942177ef7e9fc4380f3ba39d636be0cc58fde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
