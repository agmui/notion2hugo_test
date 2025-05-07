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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTXUIOB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHPnya7Ah2Pl%2BFC%2BoLnUCwMoWsClent300yhFQr6DwmwIhAL2AxaWm3gzA3yZ62JJ1XakOY0FRsVENGtnOI5SL1V2dKv8DCFMQABoMNjM3NDIzMTgzODA1IgwtFVIphkJ%2BSHGLlVUq3AOy5Q3%2BX2mpGVsL8umICFUPVY5QvPVSeakyubtSO0cU6%2BcuACFatHZ%2FBx%2FQipvRL4abO9DQ2XgafQd7m3GsUYNCMw3qG3c6bAAg2RGpOzQE3itkOEWkzPLa6VLX2FCC9UspIb8CDudceekWzQQr8TFBwIcvGd6W2joBf%2B7%2FXZNlJfW9uSGw1rss1ZE2kBH20h39Jf5eBQZCmk%2FW1x3QV4N%2BeFyDIihzHjpTbQcHH9%2B8z1Kn%2FCeR9wMP45mIXYwQpkmo1%2BCqvJgoG2k87dR%2F25t3XNY9T2LY5Ho6rho7nXXsSh%2Fnr4%2FusfynomZoIP3ue9pdLb9o2bJylToxkN3H7c56MVl5fIR3CjvfnC8hu0DHZP8PSB4gD1nJEbvCt3f9tIldKtHTT4LUQZWX48KsdlTZt3VblvaYVn2xPuuMhZ6VZ6ksuRJ7m9MO0qk4fPRx3EwH70ZPURty9l%2FIhTuZ4WDA4lT9uBULoMtYP7Gykqf%2BzpLEKPwUBaHL1bPO5T0E8C98CwD6Nx7eU9WQtA8VAsve3e85TzTHYwE1TJTz4mDsMmqCmGjHVjCL5MXUQjT5TWjT2W3IPPv7C%2Fm3kv8z4VdARUcmO0jhlpT%2FVufjiLsFnd3xssNtBC6LmN4YIjCb%2BOrABjqkAYL9iAjwlbgsGtAWAgTjmhCZElsS3yLN2Fa2qZIJePeXoNDItQGzq%2BINNN1%2BLvsRshgjO7FUXUHUQOHEJXkUctF5ECq1OqDd01Ymaz4fqO4sKis%2FSBUVz52R5a6uX4izzlBTQbDF36JoXDWoxdNjToJqt%2B%2BnGJNoPoMelm8tv3nyOo%2BXVgLDcCyGdlCBfjPfBO13vuUGocYHbX%2FYEEkLQx1784Me&X-Amz-Signature=c95ea3e9f61c184ad23b5f650a5d82f5a03b246ac62bcaa02766fd7fe830d997&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTXUIOB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHPnya7Ah2Pl%2BFC%2BoLnUCwMoWsClent300yhFQr6DwmwIhAL2AxaWm3gzA3yZ62JJ1XakOY0FRsVENGtnOI5SL1V2dKv8DCFMQABoMNjM3NDIzMTgzODA1IgwtFVIphkJ%2BSHGLlVUq3AOy5Q3%2BX2mpGVsL8umICFUPVY5QvPVSeakyubtSO0cU6%2BcuACFatHZ%2FBx%2FQipvRL4abO9DQ2XgafQd7m3GsUYNCMw3qG3c6bAAg2RGpOzQE3itkOEWkzPLa6VLX2FCC9UspIb8CDudceekWzQQr8TFBwIcvGd6W2joBf%2B7%2FXZNlJfW9uSGw1rss1ZE2kBH20h39Jf5eBQZCmk%2FW1x3QV4N%2BeFyDIihzHjpTbQcHH9%2B8z1Kn%2FCeR9wMP45mIXYwQpkmo1%2BCqvJgoG2k87dR%2F25t3XNY9T2LY5Ho6rho7nXXsSh%2Fnr4%2FusfynomZoIP3ue9pdLb9o2bJylToxkN3H7c56MVl5fIR3CjvfnC8hu0DHZP8PSB4gD1nJEbvCt3f9tIldKtHTT4LUQZWX48KsdlTZt3VblvaYVn2xPuuMhZ6VZ6ksuRJ7m9MO0qk4fPRx3EwH70ZPURty9l%2FIhTuZ4WDA4lT9uBULoMtYP7Gykqf%2BzpLEKPwUBaHL1bPO5T0E8C98CwD6Nx7eU9WQtA8VAsve3e85TzTHYwE1TJTz4mDsMmqCmGjHVjCL5MXUQjT5TWjT2W3IPPv7C%2Fm3kv8z4VdARUcmO0jhlpT%2FVufjiLsFnd3xssNtBC6LmN4YIjCb%2BOrABjqkAYL9iAjwlbgsGtAWAgTjmhCZElsS3yLN2Fa2qZIJePeXoNDItQGzq%2BINNN1%2BLvsRshgjO7FUXUHUQOHEJXkUctF5ECq1OqDd01Ymaz4fqO4sKis%2FSBUVz52R5a6uX4izzlBTQbDF36JoXDWoxdNjToJqt%2B%2BnGJNoPoMelm8tv3nyOo%2BXVgLDcCyGdlCBfjPfBO13vuUGocYHbX%2FYEEkLQx1784Me&X-Amz-Signature=4ddf32431b7a7662da63c2df7e0573c764cd7722d3d26644d54da077347e1f78&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTXUIOB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHPnya7Ah2Pl%2BFC%2BoLnUCwMoWsClent300yhFQr6DwmwIhAL2AxaWm3gzA3yZ62JJ1XakOY0FRsVENGtnOI5SL1V2dKv8DCFMQABoMNjM3NDIzMTgzODA1IgwtFVIphkJ%2BSHGLlVUq3AOy5Q3%2BX2mpGVsL8umICFUPVY5QvPVSeakyubtSO0cU6%2BcuACFatHZ%2FBx%2FQipvRL4abO9DQ2XgafQd7m3GsUYNCMw3qG3c6bAAg2RGpOzQE3itkOEWkzPLa6VLX2FCC9UspIb8CDudceekWzQQr8TFBwIcvGd6W2joBf%2B7%2FXZNlJfW9uSGw1rss1ZE2kBH20h39Jf5eBQZCmk%2FW1x3QV4N%2BeFyDIihzHjpTbQcHH9%2B8z1Kn%2FCeR9wMP45mIXYwQpkmo1%2BCqvJgoG2k87dR%2F25t3XNY9T2LY5Ho6rho7nXXsSh%2Fnr4%2FusfynomZoIP3ue9pdLb9o2bJylToxkN3H7c56MVl5fIR3CjvfnC8hu0DHZP8PSB4gD1nJEbvCt3f9tIldKtHTT4LUQZWX48KsdlTZt3VblvaYVn2xPuuMhZ6VZ6ksuRJ7m9MO0qk4fPRx3EwH70ZPURty9l%2FIhTuZ4WDA4lT9uBULoMtYP7Gykqf%2BzpLEKPwUBaHL1bPO5T0E8C98CwD6Nx7eU9WQtA8VAsve3e85TzTHYwE1TJTz4mDsMmqCmGjHVjCL5MXUQjT5TWjT2W3IPPv7C%2Fm3kv8z4VdARUcmO0jhlpT%2FVufjiLsFnd3xssNtBC6LmN4YIjCb%2BOrABjqkAYL9iAjwlbgsGtAWAgTjmhCZElsS3yLN2Fa2qZIJePeXoNDItQGzq%2BINNN1%2BLvsRshgjO7FUXUHUQOHEJXkUctF5ECq1OqDd01Ymaz4fqO4sKis%2FSBUVz52R5a6uX4izzlBTQbDF36JoXDWoxdNjToJqt%2B%2BnGJNoPoMelm8tv3nyOo%2BXVgLDcCyGdlCBfjPfBO13vuUGocYHbX%2FYEEkLQx1784Me&X-Amz-Signature=9b7bf959bb8041137f42b7a6fceca2ef2c7202b807379a33f8e77eb2f835aa7e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTXUIOB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHPnya7Ah2Pl%2BFC%2BoLnUCwMoWsClent300yhFQr6DwmwIhAL2AxaWm3gzA3yZ62JJ1XakOY0FRsVENGtnOI5SL1V2dKv8DCFMQABoMNjM3NDIzMTgzODA1IgwtFVIphkJ%2BSHGLlVUq3AOy5Q3%2BX2mpGVsL8umICFUPVY5QvPVSeakyubtSO0cU6%2BcuACFatHZ%2FBx%2FQipvRL4abO9DQ2XgafQd7m3GsUYNCMw3qG3c6bAAg2RGpOzQE3itkOEWkzPLa6VLX2FCC9UspIb8CDudceekWzQQr8TFBwIcvGd6W2joBf%2B7%2FXZNlJfW9uSGw1rss1ZE2kBH20h39Jf5eBQZCmk%2FW1x3QV4N%2BeFyDIihzHjpTbQcHH9%2B8z1Kn%2FCeR9wMP45mIXYwQpkmo1%2BCqvJgoG2k87dR%2F25t3XNY9T2LY5Ho6rho7nXXsSh%2Fnr4%2FusfynomZoIP3ue9pdLb9o2bJylToxkN3H7c56MVl5fIR3CjvfnC8hu0DHZP8PSB4gD1nJEbvCt3f9tIldKtHTT4LUQZWX48KsdlTZt3VblvaYVn2xPuuMhZ6VZ6ksuRJ7m9MO0qk4fPRx3EwH70ZPURty9l%2FIhTuZ4WDA4lT9uBULoMtYP7Gykqf%2BzpLEKPwUBaHL1bPO5T0E8C98CwD6Nx7eU9WQtA8VAsve3e85TzTHYwE1TJTz4mDsMmqCmGjHVjCL5MXUQjT5TWjT2W3IPPv7C%2Fm3kv8z4VdARUcmO0jhlpT%2FVufjiLsFnd3xssNtBC6LmN4YIjCb%2BOrABjqkAYL9iAjwlbgsGtAWAgTjmhCZElsS3yLN2Fa2qZIJePeXoNDItQGzq%2BINNN1%2BLvsRshgjO7FUXUHUQOHEJXkUctF5ECq1OqDd01Ymaz4fqO4sKis%2FSBUVz52R5a6uX4izzlBTQbDF36JoXDWoxdNjToJqt%2B%2BnGJNoPoMelm8tv3nyOo%2BXVgLDcCyGdlCBfjPfBO13vuUGocYHbX%2FYEEkLQx1784Me&X-Amz-Signature=fe5f3f11bf4b086ab1e4345129135bab24a3a836265f1100810c08a2fe63b9ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTXUIOB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHPnya7Ah2Pl%2BFC%2BoLnUCwMoWsClent300yhFQr6DwmwIhAL2AxaWm3gzA3yZ62JJ1XakOY0FRsVENGtnOI5SL1V2dKv8DCFMQABoMNjM3NDIzMTgzODA1IgwtFVIphkJ%2BSHGLlVUq3AOy5Q3%2BX2mpGVsL8umICFUPVY5QvPVSeakyubtSO0cU6%2BcuACFatHZ%2FBx%2FQipvRL4abO9DQ2XgafQd7m3GsUYNCMw3qG3c6bAAg2RGpOzQE3itkOEWkzPLa6VLX2FCC9UspIb8CDudceekWzQQr8TFBwIcvGd6W2joBf%2B7%2FXZNlJfW9uSGw1rss1ZE2kBH20h39Jf5eBQZCmk%2FW1x3QV4N%2BeFyDIihzHjpTbQcHH9%2B8z1Kn%2FCeR9wMP45mIXYwQpkmo1%2BCqvJgoG2k87dR%2F25t3XNY9T2LY5Ho6rho7nXXsSh%2Fnr4%2FusfynomZoIP3ue9pdLb9o2bJylToxkN3H7c56MVl5fIR3CjvfnC8hu0DHZP8PSB4gD1nJEbvCt3f9tIldKtHTT4LUQZWX48KsdlTZt3VblvaYVn2xPuuMhZ6VZ6ksuRJ7m9MO0qk4fPRx3EwH70ZPURty9l%2FIhTuZ4WDA4lT9uBULoMtYP7Gykqf%2BzpLEKPwUBaHL1bPO5T0E8C98CwD6Nx7eU9WQtA8VAsve3e85TzTHYwE1TJTz4mDsMmqCmGjHVjCL5MXUQjT5TWjT2W3IPPv7C%2Fm3kv8z4VdARUcmO0jhlpT%2FVufjiLsFnd3xssNtBC6LmN4YIjCb%2BOrABjqkAYL9iAjwlbgsGtAWAgTjmhCZElsS3yLN2Fa2qZIJePeXoNDItQGzq%2BINNN1%2BLvsRshgjO7FUXUHUQOHEJXkUctF5ECq1OqDd01Ymaz4fqO4sKis%2FSBUVz52R5a6uX4izzlBTQbDF36JoXDWoxdNjToJqt%2B%2BnGJNoPoMelm8tv3nyOo%2BXVgLDcCyGdlCBfjPfBO13vuUGocYHbX%2FYEEkLQx1784Me&X-Amz-Signature=44da95eb3e95a00b177cdc31a574182fe37d6b22ed66a484b66ca9ad2ac5a57a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTXUIOB%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHPnya7Ah2Pl%2BFC%2BoLnUCwMoWsClent300yhFQr6DwmwIhAL2AxaWm3gzA3yZ62JJ1XakOY0FRsVENGtnOI5SL1V2dKv8DCFMQABoMNjM3NDIzMTgzODA1IgwtFVIphkJ%2BSHGLlVUq3AOy5Q3%2BX2mpGVsL8umICFUPVY5QvPVSeakyubtSO0cU6%2BcuACFatHZ%2FBx%2FQipvRL4abO9DQ2XgafQd7m3GsUYNCMw3qG3c6bAAg2RGpOzQE3itkOEWkzPLa6VLX2FCC9UspIb8CDudceekWzQQr8TFBwIcvGd6W2joBf%2B7%2FXZNlJfW9uSGw1rss1ZE2kBH20h39Jf5eBQZCmk%2FW1x3QV4N%2BeFyDIihzHjpTbQcHH9%2B8z1Kn%2FCeR9wMP45mIXYwQpkmo1%2BCqvJgoG2k87dR%2F25t3XNY9T2LY5Ho6rho7nXXsSh%2Fnr4%2FusfynomZoIP3ue9pdLb9o2bJylToxkN3H7c56MVl5fIR3CjvfnC8hu0DHZP8PSB4gD1nJEbvCt3f9tIldKtHTT4LUQZWX48KsdlTZt3VblvaYVn2xPuuMhZ6VZ6ksuRJ7m9MO0qk4fPRx3EwH70ZPURty9l%2FIhTuZ4WDA4lT9uBULoMtYP7Gykqf%2BzpLEKPwUBaHL1bPO5T0E8C98CwD6Nx7eU9WQtA8VAsve3e85TzTHYwE1TJTz4mDsMmqCmGjHVjCL5MXUQjT5TWjT2W3IPPv7C%2Fm3kv8z4VdARUcmO0jhlpT%2FVufjiLsFnd3xssNtBC6LmN4YIjCb%2BOrABjqkAYL9iAjwlbgsGtAWAgTjmhCZElsS3yLN2Fa2qZIJePeXoNDItQGzq%2BINNN1%2BLvsRshgjO7FUXUHUQOHEJXkUctF5ECq1OqDd01Ymaz4fqO4sKis%2FSBUVz52R5a6uX4izzlBTQbDF36JoXDWoxdNjToJqt%2B%2BnGJNoPoMelm8tv3nyOo%2BXVgLDcCyGdlCBfjPfBO13vuUGocYHbX%2FYEEkLQx1784Me&X-Amz-Signature=e826473ebc828a5eeb27ed4786cc67bae4bf45d15bef4b11295a45c20f9a9326&X-Amz-SignedHeaders=host&x-id=GetObject)
