---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOBFFCY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnnjF3gG5KjZtrrJFLHjzNzOlFyxV6J49shcLXk5zbsAiEAgV9g5%2F6XahSq7f5MWIAjDttZfIy0TyEs4qYxo1vrqhkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqf05rFO9hmT7B6KircA5pitKHWQjwAEwv86A3icJtGG5aS%2BYhrLqRud7NPabt67SuZ9SIS4WzOfQDFtxyVr78vDChyngO3aWNg4yH%2BNcw7xiZ6or%2F73WXmebq4LnXh7xJ53O8axstZ14h2cXe0Ul1lUAhOtGD6sq1%2BiIy5nj5b5vy3keX1TLN9LymF1mrwGI0WL8f%2BdpHQtjxTrSMeJ5yyequv8b16zHqlfbVpHtA%2F8oYa5HaLFfkmzXWYCzRQSE818LqTN%2F9HzKb9QnOVlrvcENDFZKenK%2BnbHMwggcLlUYzx2BILBAvQJfQYyNPdI08jDKhVPv1z41evz%2BJPAc6SiZc%2F8J2sdeU9%2BAMgvD03pc9Qja9zmmYJ9lmRBFNB6tO3DaBolho%2FUBshdIeu6gAGJpprBps4ECMhuMBkaWMxu%2FToVfbaOXteziFYPnUFghsOkJg5NQWPJmgGcE%2FcfxYBjXOsUcMKu5sSzopfNYLQvYQvFY2miLaHGU5AMtlpfLe2rGIJXFvOeoe%2BwpjPVnQUIY9zWj5cftb2n%2B9DA87N8u9MyTcoBmdl4za07PZsbpzjrm9I5l%2F3Mc8l3gvXgplUKoCDNikmxJRlIgnrAsEHfOQ5WObnUjnC3VdnhD013Tg%2BmiE4X%2FtK2gHlMPaZ7rwGOqUBWN61jlO%2BHxgYWrWxRcp%2B1Wn9I%2Fcz%2FpKkpMCgClW0phx9sCAgf%2FS9reGa0WRRDDa7dgFVziYX6MDQYn1%2FOHUQ6HwJhNWC%2FVpUvGGsOknoMLIaseBjJt7ZK3i61UJvoc3wVzGXZ%2FPii%2FOngfV6nqH0J%2BEzOIN%2BGI4mMrh8jHrVWNHwYtM9B%2FvY4UwauIp8b%2FsBa3f8p1dHnFUdaj71YwQHgmKpKYZy&X-Amz-Signature=3b667f448858ecb025fe956e0ebe5a1228f817896186377afbf6924a46557f97&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOBFFCY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnnjF3gG5KjZtrrJFLHjzNzOlFyxV6J49shcLXk5zbsAiEAgV9g5%2F6XahSq7f5MWIAjDttZfIy0TyEs4qYxo1vrqhkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqf05rFO9hmT7B6KircA5pitKHWQjwAEwv86A3icJtGG5aS%2BYhrLqRud7NPabt67SuZ9SIS4WzOfQDFtxyVr78vDChyngO3aWNg4yH%2BNcw7xiZ6or%2F73WXmebq4LnXh7xJ53O8axstZ14h2cXe0Ul1lUAhOtGD6sq1%2BiIy5nj5b5vy3keX1TLN9LymF1mrwGI0WL8f%2BdpHQtjxTrSMeJ5yyequv8b16zHqlfbVpHtA%2F8oYa5HaLFfkmzXWYCzRQSE818LqTN%2F9HzKb9QnOVlrvcENDFZKenK%2BnbHMwggcLlUYzx2BILBAvQJfQYyNPdI08jDKhVPv1z41evz%2BJPAc6SiZc%2F8J2sdeU9%2BAMgvD03pc9Qja9zmmYJ9lmRBFNB6tO3DaBolho%2FUBshdIeu6gAGJpprBps4ECMhuMBkaWMxu%2FToVfbaOXteziFYPnUFghsOkJg5NQWPJmgGcE%2FcfxYBjXOsUcMKu5sSzopfNYLQvYQvFY2miLaHGU5AMtlpfLe2rGIJXFvOeoe%2BwpjPVnQUIY9zWj5cftb2n%2B9DA87N8u9MyTcoBmdl4za07PZsbpzjrm9I5l%2F3Mc8l3gvXgplUKoCDNikmxJRlIgnrAsEHfOQ5WObnUjnC3VdnhD013Tg%2BmiE4X%2FtK2gHlMPaZ7rwGOqUBWN61jlO%2BHxgYWrWxRcp%2B1Wn9I%2Fcz%2FpKkpMCgClW0phx9sCAgf%2FS9reGa0WRRDDa7dgFVziYX6MDQYn1%2FOHUQ6HwJhNWC%2FVpUvGGsOknoMLIaseBjJt7ZK3i61UJvoc3wVzGXZ%2FPii%2FOngfV6nqH0J%2BEzOIN%2BGI4mMrh8jHrVWNHwYtM9B%2FvY4UwauIp8b%2FsBa3f8p1dHnFUdaj71YwQHgmKpKYZy&X-Amz-Signature=0346e0b6ff7e88d4fd15f6e563be1577627d791338de639beec8e1ba1f40a755&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOBFFCY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnnjF3gG5KjZtrrJFLHjzNzOlFyxV6J49shcLXk5zbsAiEAgV9g5%2F6XahSq7f5MWIAjDttZfIy0TyEs4qYxo1vrqhkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqf05rFO9hmT7B6KircA5pitKHWQjwAEwv86A3icJtGG5aS%2BYhrLqRud7NPabt67SuZ9SIS4WzOfQDFtxyVr78vDChyngO3aWNg4yH%2BNcw7xiZ6or%2F73WXmebq4LnXh7xJ53O8axstZ14h2cXe0Ul1lUAhOtGD6sq1%2BiIy5nj5b5vy3keX1TLN9LymF1mrwGI0WL8f%2BdpHQtjxTrSMeJ5yyequv8b16zHqlfbVpHtA%2F8oYa5HaLFfkmzXWYCzRQSE818LqTN%2F9HzKb9QnOVlrvcENDFZKenK%2BnbHMwggcLlUYzx2BILBAvQJfQYyNPdI08jDKhVPv1z41evz%2BJPAc6SiZc%2F8J2sdeU9%2BAMgvD03pc9Qja9zmmYJ9lmRBFNB6tO3DaBolho%2FUBshdIeu6gAGJpprBps4ECMhuMBkaWMxu%2FToVfbaOXteziFYPnUFghsOkJg5NQWPJmgGcE%2FcfxYBjXOsUcMKu5sSzopfNYLQvYQvFY2miLaHGU5AMtlpfLe2rGIJXFvOeoe%2BwpjPVnQUIY9zWj5cftb2n%2B9DA87N8u9MyTcoBmdl4za07PZsbpzjrm9I5l%2F3Mc8l3gvXgplUKoCDNikmxJRlIgnrAsEHfOQ5WObnUjnC3VdnhD013Tg%2BmiE4X%2FtK2gHlMPaZ7rwGOqUBWN61jlO%2BHxgYWrWxRcp%2B1Wn9I%2Fcz%2FpKkpMCgClW0phx9sCAgf%2FS9reGa0WRRDDa7dgFVziYX6MDQYn1%2FOHUQ6HwJhNWC%2FVpUvGGsOknoMLIaseBjJt7ZK3i61UJvoc3wVzGXZ%2FPii%2FOngfV6nqH0J%2BEzOIN%2BGI4mMrh8jHrVWNHwYtM9B%2FvY4UwauIp8b%2FsBa3f8p1dHnFUdaj71YwQHgmKpKYZy&X-Amz-Signature=ab78e3b5311ff236c304aa2d1f6fceb76f943f4c47f20ad695dd640ce1730245&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOBFFCY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnnjF3gG5KjZtrrJFLHjzNzOlFyxV6J49shcLXk5zbsAiEAgV9g5%2F6XahSq7f5MWIAjDttZfIy0TyEs4qYxo1vrqhkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqf05rFO9hmT7B6KircA5pitKHWQjwAEwv86A3icJtGG5aS%2BYhrLqRud7NPabt67SuZ9SIS4WzOfQDFtxyVr78vDChyngO3aWNg4yH%2BNcw7xiZ6or%2F73WXmebq4LnXh7xJ53O8axstZ14h2cXe0Ul1lUAhOtGD6sq1%2BiIy5nj5b5vy3keX1TLN9LymF1mrwGI0WL8f%2BdpHQtjxTrSMeJ5yyequv8b16zHqlfbVpHtA%2F8oYa5HaLFfkmzXWYCzRQSE818LqTN%2F9HzKb9QnOVlrvcENDFZKenK%2BnbHMwggcLlUYzx2BILBAvQJfQYyNPdI08jDKhVPv1z41evz%2BJPAc6SiZc%2F8J2sdeU9%2BAMgvD03pc9Qja9zmmYJ9lmRBFNB6tO3DaBolho%2FUBshdIeu6gAGJpprBps4ECMhuMBkaWMxu%2FToVfbaOXteziFYPnUFghsOkJg5NQWPJmgGcE%2FcfxYBjXOsUcMKu5sSzopfNYLQvYQvFY2miLaHGU5AMtlpfLe2rGIJXFvOeoe%2BwpjPVnQUIY9zWj5cftb2n%2B9DA87N8u9MyTcoBmdl4za07PZsbpzjrm9I5l%2F3Mc8l3gvXgplUKoCDNikmxJRlIgnrAsEHfOQ5WObnUjnC3VdnhD013Tg%2BmiE4X%2FtK2gHlMPaZ7rwGOqUBWN61jlO%2BHxgYWrWxRcp%2B1Wn9I%2Fcz%2FpKkpMCgClW0phx9sCAgf%2FS9reGa0WRRDDa7dgFVziYX6MDQYn1%2FOHUQ6HwJhNWC%2FVpUvGGsOknoMLIaseBjJt7ZK3i61UJvoc3wVzGXZ%2FPii%2FOngfV6nqH0J%2BEzOIN%2BGI4mMrh8jHrVWNHwYtM9B%2FvY4UwauIp8b%2FsBa3f8p1dHnFUdaj71YwQHgmKpKYZy&X-Amz-Signature=de4efd823fbe405b53f00b709e6c557e5fef2176fcd345c3ae1be220df68c5c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOBFFCY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnnjF3gG5KjZtrrJFLHjzNzOlFyxV6J49shcLXk5zbsAiEAgV9g5%2F6XahSq7f5MWIAjDttZfIy0TyEs4qYxo1vrqhkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqf05rFO9hmT7B6KircA5pitKHWQjwAEwv86A3icJtGG5aS%2BYhrLqRud7NPabt67SuZ9SIS4WzOfQDFtxyVr78vDChyngO3aWNg4yH%2BNcw7xiZ6or%2F73WXmebq4LnXh7xJ53O8axstZ14h2cXe0Ul1lUAhOtGD6sq1%2BiIy5nj5b5vy3keX1TLN9LymF1mrwGI0WL8f%2BdpHQtjxTrSMeJ5yyequv8b16zHqlfbVpHtA%2F8oYa5HaLFfkmzXWYCzRQSE818LqTN%2F9HzKb9QnOVlrvcENDFZKenK%2BnbHMwggcLlUYzx2BILBAvQJfQYyNPdI08jDKhVPv1z41evz%2BJPAc6SiZc%2F8J2sdeU9%2BAMgvD03pc9Qja9zmmYJ9lmRBFNB6tO3DaBolho%2FUBshdIeu6gAGJpprBps4ECMhuMBkaWMxu%2FToVfbaOXteziFYPnUFghsOkJg5NQWPJmgGcE%2FcfxYBjXOsUcMKu5sSzopfNYLQvYQvFY2miLaHGU5AMtlpfLe2rGIJXFvOeoe%2BwpjPVnQUIY9zWj5cftb2n%2B9DA87N8u9MyTcoBmdl4za07PZsbpzjrm9I5l%2F3Mc8l3gvXgplUKoCDNikmxJRlIgnrAsEHfOQ5WObnUjnC3VdnhD013Tg%2BmiE4X%2FtK2gHlMPaZ7rwGOqUBWN61jlO%2BHxgYWrWxRcp%2B1Wn9I%2Fcz%2FpKkpMCgClW0phx9sCAgf%2FS9reGa0WRRDDa7dgFVziYX6MDQYn1%2FOHUQ6HwJhNWC%2FVpUvGGsOknoMLIaseBjJt7ZK3i61UJvoc3wVzGXZ%2FPii%2FOngfV6nqH0J%2BEzOIN%2BGI4mMrh8jHrVWNHwYtM9B%2FvY4UwauIp8b%2FsBa3f8p1dHnFUdaj71YwQHgmKpKYZy&X-Amz-Signature=6f0a3f885287075201cff0d5876ff6650f5abd9986f300a3c899070c52f8aca8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKOBFFCY%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnnjF3gG5KjZtrrJFLHjzNzOlFyxV6J49shcLXk5zbsAiEAgV9g5%2F6XahSq7f5MWIAjDttZfIy0TyEs4qYxo1vrqhkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqf05rFO9hmT7B6KircA5pitKHWQjwAEwv86A3icJtGG5aS%2BYhrLqRud7NPabt67SuZ9SIS4WzOfQDFtxyVr78vDChyngO3aWNg4yH%2BNcw7xiZ6or%2F73WXmebq4LnXh7xJ53O8axstZ14h2cXe0Ul1lUAhOtGD6sq1%2BiIy5nj5b5vy3keX1TLN9LymF1mrwGI0WL8f%2BdpHQtjxTrSMeJ5yyequv8b16zHqlfbVpHtA%2F8oYa5HaLFfkmzXWYCzRQSE818LqTN%2F9HzKb9QnOVlrvcENDFZKenK%2BnbHMwggcLlUYzx2BILBAvQJfQYyNPdI08jDKhVPv1z41evz%2BJPAc6SiZc%2F8J2sdeU9%2BAMgvD03pc9Qja9zmmYJ9lmRBFNB6tO3DaBolho%2FUBshdIeu6gAGJpprBps4ECMhuMBkaWMxu%2FToVfbaOXteziFYPnUFghsOkJg5NQWPJmgGcE%2FcfxYBjXOsUcMKu5sSzopfNYLQvYQvFY2miLaHGU5AMtlpfLe2rGIJXFvOeoe%2BwpjPVnQUIY9zWj5cftb2n%2B9DA87N8u9MyTcoBmdl4za07PZsbpzjrm9I5l%2F3Mc8l3gvXgplUKoCDNikmxJRlIgnrAsEHfOQ5WObnUjnC3VdnhD013Tg%2BmiE4X%2FtK2gHlMPaZ7rwGOqUBWN61jlO%2BHxgYWrWxRcp%2B1Wn9I%2Fcz%2FpKkpMCgClW0phx9sCAgf%2FS9reGa0WRRDDa7dgFVziYX6MDQYn1%2FOHUQ6HwJhNWC%2FVpUvGGsOknoMLIaseBjJt7ZK3i61UJvoc3wVzGXZ%2FPii%2FOngfV6nqH0J%2BEzOIN%2BGI4mMrh8jHrVWNHwYtM9B%2FvY4UwauIp8b%2FsBa3f8p1dHnFUdaj71YwQHgmKpKYZy&X-Amz-Signature=f0daf1e4793b6d43b77a2693c3d250a1d3cdc10277f8e919386056b1df9167f0&X-Amz-SignedHeaders=host&x-id=GetObject)
