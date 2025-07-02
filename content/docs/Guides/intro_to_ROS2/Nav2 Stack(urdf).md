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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676USTNTH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaM4qCGA4E3EIhST8D6d2JEAlMq6S0swMaHm7tYx1ZMgIhAJehfZg9J7RMsRBktg16PnW7pRfypxjxI6736%2Bka6DubKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3yDfr22V3aDOJ4aQq3ANZVy%2BLO%2BSlfHjF0PTvXPMvl%2BUwpuUV8hbKlG2CzSBv2uLkDJJAv7Uyedmcf2xdLyoK%2FksuSRequAYbomrl1zJSaMmQ8nXBfMzeXm4aPuqD9LgcLK9jbMqXLKdOR6sUgdHhoFJHbHek1b8rSyTtmSRlvIWifScek8cnkq%2B0E%2FEyTrjnBOLrrxOK9ybT8fC%2B0bwGoaxFdw7tQfHsdf2%2B44Q1zFsn8nbgbHvYZtU%2B80QtkDd2YSWhpMR%2B8y0iefz5X0oPi0gINx7vZf8K4y8RxmbAKbfJCd2873lMrpWaipYGboBW%2BlioI4B%2B2WaDlOO55PSgqfcBrvLQgwT4yuziB%2FnqfIxFx609R5TDrNHVfyKU60oGsignR7Q2KMHj8i2u1XdEKRhQChOf2QZfccrYViPWVhE7KNRoU2V4M2CbwyG1QR1oAg5L%2FfCLux5lDkZD3qIGYo1PiaqaMAo9wdBd9YoqC466eX39%2BMwQhtuDrZBx%2BfoOrw6Jw7qUMivWrCFft1b6ICebISsguP57V4uc%2FaLiuNyF99EtNZXh2Z2oFqFQzK%2FcNnCBjuPRHI8Y7CIrF2KfJf%2Fgq6ijXenmUy0RWaSS3m%2BnwR6yU4Ol2MOlUkAPqVUbUAVmPPFlkSBlzjDzvJbDBjqkAQCjxUlBg%2BIf83ox%2Bu1O1X6Yd92o0TUzVqGrCpdikV%2Ft%2BeGGsL8MckzhZ8%2FgjaQaDfbZrB4f7Vz9HB9yM4l7KXbolSMrTD2b2MA6SC3SaPyNtvn%2BP88lxFz3TK2Y%2FvHKqmNcGLbLUrtUa%2F%2Fim56Z8iRjeopUJwAMZd5XaP8cqWyxg9knoFM0oAWz280I4T845YsSKms0rhZa6qKVwlefKF6fo1Lo&X-Amz-Signature=9134dda3eea362f360b92d70070e1287721cd6dbbb4134c6d25ee2ebb6664c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676USTNTH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaM4qCGA4E3EIhST8D6d2JEAlMq6S0swMaHm7tYx1ZMgIhAJehfZg9J7RMsRBktg16PnW7pRfypxjxI6736%2Bka6DubKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3yDfr22V3aDOJ4aQq3ANZVy%2BLO%2BSlfHjF0PTvXPMvl%2BUwpuUV8hbKlG2CzSBv2uLkDJJAv7Uyedmcf2xdLyoK%2FksuSRequAYbomrl1zJSaMmQ8nXBfMzeXm4aPuqD9LgcLK9jbMqXLKdOR6sUgdHhoFJHbHek1b8rSyTtmSRlvIWifScek8cnkq%2B0E%2FEyTrjnBOLrrxOK9ybT8fC%2B0bwGoaxFdw7tQfHsdf2%2B44Q1zFsn8nbgbHvYZtU%2B80QtkDd2YSWhpMR%2B8y0iefz5X0oPi0gINx7vZf8K4y8RxmbAKbfJCd2873lMrpWaipYGboBW%2BlioI4B%2B2WaDlOO55PSgqfcBrvLQgwT4yuziB%2FnqfIxFx609R5TDrNHVfyKU60oGsignR7Q2KMHj8i2u1XdEKRhQChOf2QZfccrYViPWVhE7KNRoU2V4M2CbwyG1QR1oAg5L%2FfCLux5lDkZD3qIGYo1PiaqaMAo9wdBd9YoqC466eX39%2BMwQhtuDrZBx%2BfoOrw6Jw7qUMivWrCFft1b6ICebISsguP57V4uc%2FaLiuNyF99EtNZXh2Z2oFqFQzK%2FcNnCBjuPRHI8Y7CIrF2KfJf%2Fgq6ijXenmUy0RWaSS3m%2BnwR6yU4Ol2MOlUkAPqVUbUAVmPPFlkSBlzjDzvJbDBjqkAQCjxUlBg%2BIf83ox%2Bu1O1X6Yd92o0TUzVqGrCpdikV%2Ft%2BeGGsL8MckzhZ8%2FgjaQaDfbZrB4f7Vz9HB9yM4l7KXbolSMrTD2b2MA6SC3SaPyNtvn%2BP88lxFz3TK2Y%2FvHKqmNcGLbLUrtUa%2F%2Fim56Z8iRjeopUJwAMZd5XaP8cqWyxg9knoFM0oAWz280I4T845YsSKms0rhZa6qKVwlefKF6fo1Lo&X-Amz-Signature=d27894400a519e20d5068075488441b96549dc4ad03d4774b9954ad2ad2b2b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676USTNTH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaM4qCGA4E3EIhST8D6d2JEAlMq6S0swMaHm7tYx1ZMgIhAJehfZg9J7RMsRBktg16PnW7pRfypxjxI6736%2Bka6DubKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3yDfr22V3aDOJ4aQq3ANZVy%2BLO%2BSlfHjF0PTvXPMvl%2BUwpuUV8hbKlG2CzSBv2uLkDJJAv7Uyedmcf2xdLyoK%2FksuSRequAYbomrl1zJSaMmQ8nXBfMzeXm4aPuqD9LgcLK9jbMqXLKdOR6sUgdHhoFJHbHek1b8rSyTtmSRlvIWifScek8cnkq%2B0E%2FEyTrjnBOLrrxOK9ybT8fC%2B0bwGoaxFdw7tQfHsdf2%2B44Q1zFsn8nbgbHvYZtU%2B80QtkDd2YSWhpMR%2B8y0iefz5X0oPi0gINx7vZf8K4y8RxmbAKbfJCd2873lMrpWaipYGboBW%2BlioI4B%2B2WaDlOO55PSgqfcBrvLQgwT4yuziB%2FnqfIxFx609R5TDrNHVfyKU60oGsignR7Q2KMHj8i2u1XdEKRhQChOf2QZfccrYViPWVhE7KNRoU2V4M2CbwyG1QR1oAg5L%2FfCLux5lDkZD3qIGYo1PiaqaMAo9wdBd9YoqC466eX39%2BMwQhtuDrZBx%2BfoOrw6Jw7qUMivWrCFft1b6ICebISsguP57V4uc%2FaLiuNyF99EtNZXh2Z2oFqFQzK%2FcNnCBjuPRHI8Y7CIrF2KfJf%2Fgq6ijXenmUy0RWaSS3m%2BnwR6yU4Ol2MOlUkAPqVUbUAVmPPFlkSBlzjDzvJbDBjqkAQCjxUlBg%2BIf83ox%2Bu1O1X6Yd92o0TUzVqGrCpdikV%2Ft%2BeGGsL8MckzhZ8%2FgjaQaDfbZrB4f7Vz9HB9yM4l7KXbolSMrTD2b2MA6SC3SaPyNtvn%2BP88lxFz3TK2Y%2FvHKqmNcGLbLUrtUa%2F%2Fim56Z8iRjeopUJwAMZd5XaP8cqWyxg9knoFM0oAWz280I4T845YsSKms0rhZa6qKVwlefKF6fo1Lo&X-Amz-Signature=ad7af21c36158f65502e9592ab7aa2daf290c8ad9557a1667f512cf1e39f6bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676USTNTH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaM4qCGA4E3EIhST8D6d2JEAlMq6S0swMaHm7tYx1ZMgIhAJehfZg9J7RMsRBktg16PnW7pRfypxjxI6736%2Bka6DubKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3yDfr22V3aDOJ4aQq3ANZVy%2BLO%2BSlfHjF0PTvXPMvl%2BUwpuUV8hbKlG2CzSBv2uLkDJJAv7Uyedmcf2xdLyoK%2FksuSRequAYbomrl1zJSaMmQ8nXBfMzeXm4aPuqD9LgcLK9jbMqXLKdOR6sUgdHhoFJHbHek1b8rSyTtmSRlvIWifScek8cnkq%2B0E%2FEyTrjnBOLrrxOK9ybT8fC%2B0bwGoaxFdw7tQfHsdf2%2B44Q1zFsn8nbgbHvYZtU%2B80QtkDd2YSWhpMR%2B8y0iefz5X0oPi0gINx7vZf8K4y8RxmbAKbfJCd2873lMrpWaipYGboBW%2BlioI4B%2B2WaDlOO55PSgqfcBrvLQgwT4yuziB%2FnqfIxFx609R5TDrNHVfyKU60oGsignR7Q2KMHj8i2u1XdEKRhQChOf2QZfccrYViPWVhE7KNRoU2V4M2CbwyG1QR1oAg5L%2FfCLux5lDkZD3qIGYo1PiaqaMAo9wdBd9YoqC466eX39%2BMwQhtuDrZBx%2BfoOrw6Jw7qUMivWrCFft1b6ICebISsguP57V4uc%2FaLiuNyF99EtNZXh2Z2oFqFQzK%2FcNnCBjuPRHI8Y7CIrF2KfJf%2Fgq6ijXenmUy0RWaSS3m%2BnwR6yU4Ol2MOlUkAPqVUbUAVmPPFlkSBlzjDzvJbDBjqkAQCjxUlBg%2BIf83ox%2Bu1O1X6Yd92o0TUzVqGrCpdikV%2Ft%2BeGGsL8MckzhZ8%2FgjaQaDfbZrB4f7Vz9HB9yM4l7KXbolSMrTD2b2MA6SC3SaPyNtvn%2BP88lxFz3TK2Y%2FvHKqmNcGLbLUrtUa%2F%2Fim56Z8iRjeopUJwAMZd5XaP8cqWyxg9knoFM0oAWz280I4T845YsSKms0rhZa6qKVwlefKF6fo1Lo&X-Amz-Signature=a00da4bbecad11b096d8e3a53348c2542afde1c0295e18aaadf8fef290c4f3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676USTNTH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaM4qCGA4E3EIhST8D6d2JEAlMq6S0swMaHm7tYx1ZMgIhAJehfZg9J7RMsRBktg16PnW7pRfypxjxI6736%2Bka6DubKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3yDfr22V3aDOJ4aQq3ANZVy%2BLO%2BSlfHjF0PTvXPMvl%2BUwpuUV8hbKlG2CzSBv2uLkDJJAv7Uyedmcf2xdLyoK%2FksuSRequAYbomrl1zJSaMmQ8nXBfMzeXm4aPuqD9LgcLK9jbMqXLKdOR6sUgdHhoFJHbHek1b8rSyTtmSRlvIWifScek8cnkq%2B0E%2FEyTrjnBOLrrxOK9ybT8fC%2B0bwGoaxFdw7tQfHsdf2%2B44Q1zFsn8nbgbHvYZtU%2B80QtkDd2YSWhpMR%2B8y0iefz5X0oPi0gINx7vZf8K4y8RxmbAKbfJCd2873lMrpWaipYGboBW%2BlioI4B%2B2WaDlOO55PSgqfcBrvLQgwT4yuziB%2FnqfIxFx609R5TDrNHVfyKU60oGsignR7Q2KMHj8i2u1XdEKRhQChOf2QZfccrYViPWVhE7KNRoU2V4M2CbwyG1QR1oAg5L%2FfCLux5lDkZD3qIGYo1PiaqaMAo9wdBd9YoqC466eX39%2BMwQhtuDrZBx%2BfoOrw6Jw7qUMivWrCFft1b6ICebISsguP57V4uc%2FaLiuNyF99EtNZXh2Z2oFqFQzK%2FcNnCBjuPRHI8Y7CIrF2KfJf%2Fgq6ijXenmUy0RWaSS3m%2BnwR6yU4Ol2MOlUkAPqVUbUAVmPPFlkSBlzjDzvJbDBjqkAQCjxUlBg%2BIf83ox%2Bu1O1X6Yd92o0TUzVqGrCpdikV%2Ft%2BeGGsL8MckzhZ8%2FgjaQaDfbZrB4f7Vz9HB9yM4l7KXbolSMrTD2b2MA6SC3SaPyNtvn%2BP88lxFz3TK2Y%2FvHKqmNcGLbLUrtUa%2F%2Fim56Z8iRjeopUJwAMZd5XaP8cqWyxg9knoFM0oAWz280I4T845YsSKms0rhZa6qKVwlefKF6fo1Lo&X-Amz-Signature=c607ce1e93ae2d9d1b63b6bfbcaaf748207351b98a6979f4fe35c59fd2fea244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676USTNTH%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaM4qCGA4E3EIhST8D6d2JEAlMq6S0swMaHm7tYx1ZMgIhAJehfZg9J7RMsRBktg16PnW7pRfypxjxI6736%2Bka6DubKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3yDfr22V3aDOJ4aQq3ANZVy%2BLO%2BSlfHjF0PTvXPMvl%2BUwpuUV8hbKlG2CzSBv2uLkDJJAv7Uyedmcf2xdLyoK%2FksuSRequAYbomrl1zJSaMmQ8nXBfMzeXm4aPuqD9LgcLK9jbMqXLKdOR6sUgdHhoFJHbHek1b8rSyTtmSRlvIWifScek8cnkq%2B0E%2FEyTrjnBOLrrxOK9ybT8fC%2B0bwGoaxFdw7tQfHsdf2%2B44Q1zFsn8nbgbHvYZtU%2B80QtkDd2YSWhpMR%2B8y0iefz5X0oPi0gINx7vZf8K4y8RxmbAKbfJCd2873lMrpWaipYGboBW%2BlioI4B%2B2WaDlOO55PSgqfcBrvLQgwT4yuziB%2FnqfIxFx609R5TDrNHVfyKU60oGsignR7Q2KMHj8i2u1XdEKRhQChOf2QZfccrYViPWVhE7KNRoU2V4M2CbwyG1QR1oAg5L%2FfCLux5lDkZD3qIGYo1PiaqaMAo9wdBd9YoqC466eX39%2BMwQhtuDrZBx%2BfoOrw6Jw7qUMivWrCFft1b6ICebISsguP57V4uc%2FaLiuNyF99EtNZXh2Z2oFqFQzK%2FcNnCBjuPRHI8Y7CIrF2KfJf%2Fgq6ijXenmUy0RWaSS3m%2BnwR6yU4Ol2MOlUkAPqVUbUAVmPPFlkSBlzjDzvJbDBjqkAQCjxUlBg%2BIf83ox%2Bu1O1X6Yd92o0TUzVqGrCpdikV%2Ft%2BeGGsL8MckzhZ8%2FgjaQaDfbZrB4f7Vz9HB9yM4l7KXbolSMrTD2b2MA6SC3SaPyNtvn%2BP88lxFz3TK2Y%2FvHKqmNcGLbLUrtUa%2F%2Fim56Z8iRjeopUJwAMZd5XaP8cqWyxg9knoFM0oAWz280I4T845YsSKms0rhZa6qKVwlefKF6fo1Lo&X-Amz-Signature=403ca66c51ba73361008e5d1f6c76fd87636f2ae941b3795705189bcbf4fda41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
