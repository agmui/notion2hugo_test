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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDTCUABX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBGPQy4ohtiOvq2D1UGjDIO0KKXUFsAyBampIEpgZG9VAiBxju3Dlesj5pHVmJK78YJ49NaqcOF43OqCCZNuhA1qyir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjYWxDJEhU3%2ByrxF4KtwDdTvQtzADwit7W%2BwphkyfX70B%2BABz%2Bne9lgPiJ6OU4KNOrFPiezF75gM8JyNbqXJPgo4Do6hvxoYd7cxtiD%2FXyWLhihIuQ3rN%2Bze5OtFG2sEFd%2BQhfEhlLkQH0fnKciMtyy2CFbS3bC7sRRpVrXsaVqDQWmCXmRH%2FN%2BIuU%2BFgjV%2FOMsHarzXC2Xaeu0bRT6h5cxRfdRgqC1N3p%2FaSJuoQKSiHwmSq5%2BV22735cMd%2Fy8QfQRX00ijhMbCSrmSJHRDBjgQ9PFFOpBNZdNO%2B%2FyDD2xUY3cu%2FJ1bCkAdJkd78wFWhB2Dg7phqDbwAmkDSJ%2BacdIBPh5o%2FE1PTiAkXcpFxXpxesKA1o%2BkE8%2BC9b7bErXivlFKDutxwrhx%2FJyx%2BhG9CpRrp7j5OZpH%2FhBOjXMHBd9yQ3xj6iviLhp3bSyMRswDwdMEfiBOzIOMGT%2BZ6V%2BTLhTBCYR0XFORRndyTca6fAPGf%2BkUROUfrCvkUiIHX7mfm60qj3BVqH%2BvevFLxZo8IWzEAbfucJvk%2B1K8d0KpGYvIHJGcbi8jT1DXCD%2B0agdfXvLIS3Y0ICUPSby4JgpyLZzekxD9V9Y9aXl5KxlJ%2F0o8GdwwDHYiN6QLcT90Tn4mzztiA%2BgyOYCimKwQwp%2Bu0vgY6pgFsSZ5nbnES4xfqtfW%2FMzUEw3MSNEfitqEXbhpziz%2BXwAor%2B4CBm5nwJgN7lTaGjg6um3oxakP0NqojIcpmcZjH%2Fu6WCpkmADbAHvwj5Bq1PN2%2Fsm%2FGDClv6%2FK3zBwIgsYvpIJdG3FWXdeX2U62k5kLgJ1E%2F6kX3cVZ09plbX6N4ITSinEe77oTQYsAj7C6U5T%2F5dmRmliqLT36kkD%2FuiBLYQixyi1%2F&X-Amz-Signature=d3a01976224bb06df7e1f042d8edcf1a94e487e9de6b29ede5b8c9bf3ebc0064&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDTCUABX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBGPQy4ohtiOvq2D1UGjDIO0KKXUFsAyBampIEpgZG9VAiBxju3Dlesj5pHVmJK78YJ49NaqcOF43OqCCZNuhA1qyir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjYWxDJEhU3%2ByrxF4KtwDdTvQtzADwit7W%2BwphkyfX70B%2BABz%2Bne9lgPiJ6OU4KNOrFPiezF75gM8JyNbqXJPgo4Do6hvxoYd7cxtiD%2FXyWLhihIuQ3rN%2Bze5OtFG2sEFd%2BQhfEhlLkQH0fnKciMtyy2CFbS3bC7sRRpVrXsaVqDQWmCXmRH%2FN%2BIuU%2BFgjV%2FOMsHarzXC2Xaeu0bRT6h5cxRfdRgqC1N3p%2FaSJuoQKSiHwmSq5%2BV22735cMd%2Fy8QfQRX00ijhMbCSrmSJHRDBjgQ9PFFOpBNZdNO%2B%2FyDD2xUY3cu%2FJ1bCkAdJkd78wFWhB2Dg7phqDbwAmkDSJ%2BacdIBPh5o%2FE1PTiAkXcpFxXpxesKA1o%2BkE8%2BC9b7bErXivlFKDutxwrhx%2FJyx%2BhG9CpRrp7j5OZpH%2FhBOjXMHBd9yQ3xj6iviLhp3bSyMRswDwdMEfiBOzIOMGT%2BZ6V%2BTLhTBCYR0XFORRndyTca6fAPGf%2BkUROUfrCvkUiIHX7mfm60qj3BVqH%2BvevFLxZo8IWzEAbfucJvk%2B1K8d0KpGYvIHJGcbi8jT1DXCD%2B0agdfXvLIS3Y0ICUPSby4JgpyLZzekxD9V9Y9aXl5KxlJ%2F0o8GdwwDHYiN6QLcT90Tn4mzztiA%2BgyOYCimKwQwp%2Bu0vgY6pgFsSZ5nbnES4xfqtfW%2FMzUEw3MSNEfitqEXbhpziz%2BXwAor%2B4CBm5nwJgN7lTaGjg6um3oxakP0NqojIcpmcZjH%2Fu6WCpkmADbAHvwj5Bq1PN2%2Fsm%2FGDClv6%2FK3zBwIgsYvpIJdG3FWXdeX2U62k5kLgJ1E%2F6kX3cVZ09plbX6N4ITSinEe77oTQYsAj7C6U5T%2F5dmRmliqLT36kkD%2FuiBLYQixyi1%2F&X-Amz-Signature=b392befaaa52cb8edec4db957b03694ffcc820d11ac3fa9f04776c677f11dc60&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDTCUABX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBGPQy4ohtiOvq2D1UGjDIO0KKXUFsAyBampIEpgZG9VAiBxju3Dlesj5pHVmJK78YJ49NaqcOF43OqCCZNuhA1qyir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjYWxDJEhU3%2ByrxF4KtwDdTvQtzADwit7W%2BwphkyfX70B%2BABz%2Bne9lgPiJ6OU4KNOrFPiezF75gM8JyNbqXJPgo4Do6hvxoYd7cxtiD%2FXyWLhihIuQ3rN%2Bze5OtFG2sEFd%2BQhfEhlLkQH0fnKciMtyy2CFbS3bC7sRRpVrXsaVqDQWmCXmRH%2FN%2BIuU%2BFgjV%2FOMsHarzXC2Xaeu0bRT6h5cxRfdRgqC1N3p%2FaSJuoQKSiHwmSq5%2BV22735cMd%2Fy8QfQRX00ijhMbCSrmSJHRDBjgQ9PFFOpBNZdNO%2B%2FyDD2xUY3cu%2FJ1bCkAdJkd78wFWhB2Dg7phqDbwAmkDSJ%2BacdIBPh5o%2FE1PTiAkXcpFxXpxesKA1o%2BkE8%2BC9b7bErXivlFKDutxwrhx%2FJyx%2BhG9CpRrp7j5OZpH%2FhBOjXMHBd9yQ3xj6iviLhp3bSyMRswDwdMEfiBOzIOMGT%2BZ6V%2BTLhTBCYR0XFORRndyTca6fAPGf%2BkUROUfrCvkUiIHX7mfm60qj3BVqH%2BvevFLxZo8IWzEAbfucJvk%2B1K8d0KpGYvIHJGcbi8jT1DXCD%2B0agdfXvLIS3Y0ICUPSby4JgpyLZzekxD9V9Y9aXl5KxlJ%2F0o8GdwwDHYiN6QLcT90Tn4mzztiA%2BgyOYCimKwQwp%2Bu0vgY6pgFsSZ5nbnES4xfqtfW%2FMzUEw3MSNEfitqEXbhpziz%2BXwAor%2B4CBm5nwJgN7lTaGjg6um3oxakP0NqojIcpmcZjH%2Fu6WCpkmADbAHvwj5Bq1PN2%2Fsm%2FGDClv6%2FK3zBwIgsYvpIJdG3FWXdeX2U62k5kLgJ1E%2F6kX3cVZ09plbX6N4ITSinEe77oTQYsAj7C6U5T%2F5dmRmliqLT36kkD%2FuiBLYQixyi1%2F&X-Amz-Signature=7a1270ebf77983ccd1cafa348b4702d9529f36a3980b16235d1c5adcce91318d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDTCUABX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBGPQy4ohtiOvq2D1UGjDIO0KKXUFsAyBampIEpgZG9VAiBxju3Dlesj5pHVmJK78YJ49NaqcOF43OqCCZNuhA1qyir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjYWxDJEhU3%2ByrxF4KtwDdTvQtzADwit7W%2BwphkyfX70B%2BABz%2Bne9lgPiJ6OU4KNOrFPiezF75gM8JyNbqXJPgo4Do6hvxoYd7cxtiD%2FXyWLhihIuQ3rN%2Bze5OtFG2sEFd%2BQhfEhlLkQH0fnKciMtyy2CFbS3bC7sRRpVrXsaVqDQWmCXmRH%2FN%2BIuU%2BFgjV%2FOMsHarzXC2Xaeu0bRT6h5cxRfdRgqC1N3p%2FaSJuoQKSiHwmSq5%2BV22735cMd%2Fy8QfQRX00ijhMbCSrmSJHRDBjgQ9PFFOpBNZdNO%2B%2FyDD2xUY3cu%2FJ1bCkAdJkd78wFWhB2Dg7phqDbwAmkDSJ%2BacdIBPh5o%2FE1PTiAkXcpFxXpxesKA1o%2BkE8%2BC9b7bErXivlFKDutxwrhx%2FJyx%2BhG9CpRrp7j5OZpH%2FhBOjXMHBd9yQ3xj6iviLhp3bSyMRswDwdMEfiBOzIOMGT%2BZ6V%2BTLhTBCYR0XFORRndyTca6fAPGf%2BkUROUfrCvkUiIHX7mfm60qj3BVqH%2BvevFLxZo8IWzEAbfucJvk%2B1K8d0KpGYvIHJGcbi8jT1DXCD%2B0agdfXvLIS3Y0ICUPSby4JgpyLZzekxD9V9Y9aXl5KxlJ%2F0o8GdwwDHYiN6QLcT90Tn4mzztiA%2BgyOYCimKwQwp%2Bu0vgY6pgFsSZ5nbnES4xfqtfW%2FMzUEw3MSNEfitqEXbhpziz%2BXwAor%2B4CBm5nwJgN7lTaGjg6um3oxakP0NqojIcpmcZjH%2Fu6WCpkmADbAHvwj5Bq1PN2%2Fsm%2FGDClv6%2FK3zBwIgsYvpIJdG3FWXdeX2U62k5kLgJ1E%2F6kX3cVZ09plbX6N4ITSinEe77oTQYsAj7C6U5T%2F5dmRmliqLT36kkD%2FuiBLYQixyi1%2F&X-Amz-Signature=3e6426461d296cc78c2cc7a49a534300d25875a7d22acd7fbf985ab71bbd18e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDTCUABX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBGPQy4ohtiOvq2D1UGjDIO0KKXUFsAyBampIEpgZG9VAiBxju3Dlesj5pHVmJK78YJ49NaqcOF43OqCCZNuhA1qyir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjYWxDJEhU3%2ByrxF4KtwDdTvQtzADwit7W%2BwphkyfX70B%2BABz%2Bne9lgPiJ6OU4KNOrFPiezF75gM8JyNbqXJPgo4Do6hvxoYd7cxtiD%2FXyWLhihIuQ3rN%2Bze5OtFG2sEFd%2BQhfEhlLkQH0fnKciMtyy2CFbS3bC7sRRpVrXsaVqDQWmCXmRH%2FN%2BIuU%2BFgjV%2FOMsHarzXC2Xaeu0bRT6h5cxRfdRgqC1N3p%2FaSJuoQKSiHwmSq5%2BV22735cMd%2Fy8QfQRX00ijhMbCSrmSJHRDBjgQ9PFFOpBNZdNO%2B%2FyDD2xUY3cu%2FJ1bCkAdJkd78wFWhB2Dg7phqDbwAmkDSJ%2BacdIBPh5o%2FE1PTiAkXcpFxXpxesKA1o%2BkE8%2BC9b7bErXivlFKDutxwrhx%2FJyx%2BhG9CpRrp7j5OZpH%2FhBOjXMHBd9yQ3xj6iviLhp3bSyMRswDwdMEfiBOzIOMGT%2BZ6V%2BTLhTBCYR0XFORRndyTca6fAPGf%2BkUROUfrCvkUiIHX7mfm60qj3BVqH%2BvevFLxZo8IWzEAbfucJvk%2B1K8d0KpGYvIHJGcbi8jT1DXCD%2B0agdfXvLIS3Y0ICUPSby4JgpyLZzekxD9V9Y9aXl5KxlJ%2F0o8GdwwDHYiN6QLcT90Tn4mzztiA%2BgyOYCimKwQwp%2Bu0vgY6pgFsSZ5nbnES4xfqtfW%2FMzUEw3MSNEfitqEXbhpziz%2BXwAor%2B4CBm5nwJgN7lTaGjg6um3oxakP0NqojIcpmcZjH%2Fu6WCpkmADbAHvwj5Bq1PN2%2Fsm%2FGDClv6%2FK3zBwIgsYvpIJdG3FWXdeX2U62k5kLgJ1E%2F6kX3cVZ09plbX6N4ITSinEe77oTQYsAj7C6U5T%2F5dmRmliqLT36kkD%2FuiBLYQixyi1%2F&X-Amz-Signature=8f5d1fbe5a49dc676179ed431424bd2a3c705e612e900718984b6ee67c14d61a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDTCUABX%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T100225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBGPQy4ohtiOvq2D1UGjDIO0KKXUFsAyBampIEpgZG9VAiBxju3Dlesj5pHVmJK78YJ49NaqcOF43OqCCZNuhA1qyir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMjYWxDJEhU3%2ByrxF4KtwDdTvQtzADwit7W%2BwphkyfX70B%2BABz%2Bne9lgPiJ6OU4KNOrFPiezF75gM8JyNbqXJPgo4Do6hvxoYd7cxtiD%2FXyWLhihIuQ3rN%2Bze5OtFG2sEFd%2BQhfEhlLkQH0fnKciMtyy2CFbS3bC7sRRpVrXsaVqDQWmCXmRH%2FN%2BIuU%2BFgjV%2FOMsHarzXC2Xaeu0bRT6h5cxRfdRgqC1N3p%2FaSJuoQKSiHwmSq5%2BV22735cMd%2Fy8QfQRX00ijhMbCSrmSJHRDBjgQ9PFFOpBNZdNO%2B%2FyDD2xUY3cu%2FJ1bCkAdJkd78wFWhB2Dg7phqDbwAmkDSJ%2BacdIBPh5o%2FE1PTiAkXcpFxXpxesKA1o%2BkE8%2BC9b7bErXivlFKDutxwrhx%2FJyx%2BhG9CpRrp7j5OZpH%2FhBOjXMHBd9yQ3xj6iviLhp3bSyMRswDwdMEfiBOzIOMGT%2BZ6V%2BTLhTBCYR0XFORRndyTca6fAPGf%2BkUROUfrCvkUiIHX7mfm60qj3BVqH%2BvevFLxZo8IWzEAbfucJvk%2B1K8d0KpGYvIHJGcbi8jT1DXCD%2B0agdfXvLIS3Y0ICUPSby4JgpyLZzekxD9V9Y9aXl5KxlJ%2F0o8GdwwDHYiN6QLcT90Tn4mzztiA%2BgyOYCimKwQwp%2Bu0vgY6pgFsSZ5nbnES4xfqtfW%2FMzUEw3MSNEfitqEXbhpziz%2BXwAor%2B4CBm5nwJgN7lTaGjg6um3oxakP0NqojIcpmcZjH%2Fu6WCpkmADbAHvwj5Bq1PN2%2Fsm%2FGDClv6%2FK3zBwIgsYvpIJdG3FWXdeX2U62k5kLgJ1E%2F6kX3cVZ09plbX6N4ITSinEe77oTQYsAj7C6U5T%2F5dmRmliqLT36kkD%2FuiBLYQixyi1%2F&X-Amz-Signature=bf30f826e21eb038eb1c64dc0b3bf65dff730b1c74cc62958a8a38c83991ea3d&X-Amz-SignedHeaders=host&x-id=GetObject)
