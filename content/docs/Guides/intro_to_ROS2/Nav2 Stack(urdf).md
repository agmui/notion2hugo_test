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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFSOD4C%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7ihix%2BzePp90ueXWpRNdlBdFrJNAkjCUSLw7MkKVWQIgYJ8FYRs51jo5VNm%2FuF1gcIPinYcS93Jz2ZleNKWckN0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgQBIsH8KTynsjfQircA1RXyiVIMTnHDqMq1%2FBVG3Dtncf8PSjzqFz4pTG9xo5LV6iC0spy%2BN69JuDQ6HD6wiNSTE%2Fzxw%2Bl7qHnw9VJEshcaUFlIffjPFP0h%2F0zVnfcaLjM984QKcseUkyPSDarv%2BSrfcAbr9vvfE0ExSucji8%2BDASQOwiinpLb4mkNVkQorasirOmUZ92cJThvdg1wJ61IqtIN5wpLy5bZEJno7lbAP6vlfP2ZGi3P4ogDn7T%2FqX1hnA0Ho7pYAdWQSOlf8amz7cNBQi7M1I%2BhoNdVWk6C73K%2FebmQZTxJ%2BsGrrEcJXpzX8PNGLpFxuQh91Mh%2FbVWM0LiT640kYnr3kpTmXrdwjVg0cAwUicBHmK1kYI8hYzb3ZxXilUz30q%2F2BYn68VeBhEmvfTH7hLqAfEZ4pXzc9075pAI%2B2wAapDiQTOexgx3bINl3HLbf9lwnsvoskrECADAQpq3gqEhZ8LykV9DCG6PikGeK%2FFyU8UpPn7emQ%2FWHEizMuCk6kF2SJh1RjyB7syyV8kiTyNpFIZKX8uN7ITTIMhb%2FsNuRlV5oQCcgn6T9OPx3%2BlS12LRnZXMmwLK0p6c2tg2mYlCF5AB9auJU1vnkFviKHLXzzibZ%2BHKSoSMlJ6ugFJfY%2Fo86MPjQ3b0GOqUBrjLx9vTXEg4HktAlQfl299LzylHSKj2jMksAkAauth3jP2GsodaQDo3p1pl8ySrs3lSmRAAOnnUi5Q%2B2txAl7Fbgi65YJWUGc85Z0NFlwmPBrNzgr5hml5polAkPfPhRl6QTzn3NpnFbY57EY%2BRWoYrFy1mnI7Ap%2F551D87wT%2FUPW67AL52WA%2BDbbiD9zDXRQJtG0l5NY1HDJYRu5uk9IE9qAszr&X-Amz-Signature=6c69b4fc116de5187d960c204204588c5473c948c08a40e4701f387709eb4d65&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFSOD4C%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7ihix%2BzePp90ueXWpRNdlBdFrJNAkjCUSLw7MkKVWQIgYJ8FYRs51jo5VNm%2FuF1gcIPinYcS93Jz2ZleNKWckN0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgQBIsH8KTynsjfQircA1RXyiVIMTnHDqMq1%2FBVG3Dtncf8PSjzqFz4pTG9xo5LV6iC0spy%2BN69JuDQ6HD6wiNSTE%2Fzxw%2Bl7qHnw9VJEshcaUFlIffjPFP0h%2F0zVnfcaLjM984QKcseUkyPSDarv%2BSrfcAbr9vvfE0ExSucji8%2BDASQOwiinpLb4mkNVkQorasirOmUZ92cJThvdg1wJ61IqtIN5wpLy5bZEJno7lbAP6vlfP2ZGi3P4ogDn7T%2FqX1hnA0Ho7pYAdWQSOlf8amz7cNBQi7M1I%2BhoNdVWk6C73K%2FebmQZTxJ%2BsGrrEcJXpzX8PNGLpFxuQh91Mh%2FbVWM0LiT640kYnr3kpTmXrdwjVg0cAwUicBHmK1kYI8hYzb3ZxXilUz30q%2F2BYn68VeBhEmvfTH7hLqAfEZ4pXzc9075pAI%2B2wAapDiQTOexgx3bINl3HLbf9lwnsvoskrECADAQpq3gqEhZ8LykV9DCG6PikGeK%2FFyU8UpPn7emQ%2FWHEizMuCk6kF2SJh1RjyB7syyV8kiTyNpFIZKX8uN7ITTIMhb%2FsNuRlV5oQCcgn6T9OPx3%2BlS12LRnZXMmwLK0p6c2tg2mYlCF5AB9auJU1vnkFviKHLXzzibZ%2BHKSoSMlJ6ugFJfY%2Fo86MPjQ3b0GOqUBrjLx9vTXEg4HktAlQfl299LzylHSKj2jMksAkAauth3jP2GsodaQDo3p1pl8ySrs3lSmRAAOnnUi5Q%2B2txAl7Fbgi65YJWUGc85Z0NFlwmPBrNzgr5hml5polAkPfPhRl6QTzn3NpnFbY57EY%2BRWoYrFy1mnI7Ap%2F551D87wT%2FUPW67AL52WA%2BDbbiD9zDXRQJtG0l5NY1HDJYRu5uk9IE9qAszr&X-Amz-Signature=a479402716ca8f0a96e6af00ef332eb21d231fc737b8171eb1fb5ed05972615b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFSOD4C%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7ihix%2BzePp90ueXWpRNdlBdFrJNAkjCUSLw7MkKVWQIgYJ8FYRs51jo5VNm%2FuF1gcIPinYcS93Jz2ZleNKWckN0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgQBIsH8KTynsjfQircA1RXyiVIMTnHDqMq1%2FBVG3Dtncf8PSjzqFz4pTG9xo5LV6iC0spy%2BN69JuDQ6HD6wiNSTE%2Fzxw%2Bl7qHnw9VJEshcaUFlIffjPFP0h%2F0zVnfcaLjM984QKcseUkyPSDarv%2BSrfcAbr9vvfE0ExSucji8%2BDASQOwiinpLb4mkNVkQorasirOmUZ92cJThvdg1wJ61IqtIN5wpLy5bZEJno7lbAP6vlfP2ZGi3P4ogDn7T%2FqX1hnA0Ho7pYAdWQSOlf8amz7cNBQi7M1I%2BhoNdVWk6C73K%2FebmQZTxJ%2BsGrrEcJXpzX8PNGLpFxuQh91Mh%2FbVWM0LiT640kYnr3kpTmXrdwjVg0cAwUicBHmK1kYI8hYzb3ZxXilUz30q%2F2BYn68VeBhEmvfTH7hLqAfEZ4pXzc9075pAI%2B2wAapDiQTOexgx3bINl3HLbf9lwnsvoskrECADAQpq3gqEhZ8LykV9DCG6PikGeK%2FFyU8UpPn7emQ%2FWHEizMuCk6kF2SJh1RjyB7syyV8kiTyNpFIZKX8uN7ITTIMhb%2FsNuRlV5oQCcgn6T9OPx3%2BlS12LRnZXMmwLK0p6c2tg2mYlCF5AB9auJU1vnkFviKHLXzzibZ%2BHKSoSMlJ6ugFJfY%2Fo86MPjQ3b0GOqUBrjLx9vTXEg4HktAlQfl299LzylHSKj2jMksAkAauth3jP2GsodaQDo3p1pl8ySrs3lSmRAAOnnUi5Q%2B2txAl7Fbgi65YJWUGc85Z0NFlwmPBrNzgr5hml5polAkPfPhRl6QTzn3NpnFbY57EY%2BRWoYrFy1mnI7Ap%2F551D87wT%2FUPW67AL52WA%2BDbbiD9zDXRQJtG0l5NY1HDJYRu5uk9IE9qAszr&X-Amz-Signature=763718d528bc6b908c9a17150d69e02934910784e5887609616c7a9d7c07bd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFSOD4C%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7ihix%2BzePp90ueXWpRNdlBdFrJNAkjCUSLw7MkKVWQIgYJ8FYRs51jo5VNm%2FuF1gcIPinYcS93Jz2ZleNKWckN0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgQBIsH8KTynsjfQircA1RXyiVIMTnHDqMq1%2FBVG3Dtncf8PSjzqFz4pTG9xo5LV6iC0spy%2BN69JuDQ6HD6wiNSTE%2Fzxw%2Bl7qHnw9VJEshcaUFlIffjPFP0h%2F0zVnfcaLjM984QKcseUkyPSDarv%2BSrfcAbr9vvfE0ExSucji8%2BDASQOwiinpLb4mkNVkQorasirOmUZ92cJThvdg1wJ61IqtIN5wpLy5bZEJno7lbAP6vlfP2ZGi3P4ogDn7T%2FqX1hnA0Ho7pYAdWQSOlf8amz7cNBQi7M1I%2BhoNdVWk6C73K%2FebmQZTxJ%2BsGrrEcJXpzX8PNGLpFxuQh91Mh%2FbVWM0LiT640kYnr3kpTmXrdwjVg0cAwUicBHmK1kYI8hYzb3ZxXilUz30q%2F2BYn68VeBhEmvfTH7hLqAfEZ4pXzc9075pAI%2B2wAapDiQTOexgx3bINl3HLbf9lwnsvoskrECADAQpq3gqEhZ8LykV9DCG6PikGeK%2FFyU8UpPn7emQ%2FWHEizMuCk6kF2SJh1RjyB7syyV8kiTyNpFIZKX8uN7ITTIMhb%2FsNuRlV5oQCcgn6T9OPx3%2BlS12LRnZXMmwLK0p6c2tg2mYlCF5AB9auJU1vnkFviKHLXzzibZ%2BHKSoSMlJ6ugFJfY%2Fo86MPjQ3b0GOqUBrjLx9vTXEg4HktAlQfl299LzylHSKj2jMksAkAauth3jP2GsodaQDo3p1pl8ySrs3lSmRAAOnnUi5Q%2B2txAl7Fbgi65YJWUGc85Z0NFlwmPBrNzgr5hml5polAkPfPhRl6QTzn3NpnFbY57EY%2BRWoYrFy1mnI7Ap%2F551D87wT%2FUPW67AL52WA%2BDbbiD9zDXRQJtG0l5NY1HDJYRu5uk9IE9qAszr&X-Amz-Signature=817e43cb9de91461f51a5d8a6af99cadd49e57b278904b568f6b840c3016c451&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFSOD4C%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7ihix%2BzePp90ueXWpRNdlBdFrJNAkjCUSLw7MkKVWQIgYJ8FYRs51jo5VNm%2FuF1gcIPinYcS93Jz2ZleNKWckN0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgQBIsH8KTynsjfQircA1RXyiVIMTnHDqMq1%2FBVG3Dtncf8PSjzqFz4pTG9xo5LV6iC0spy%2BN69JuDQ6HD6wiNSTE%2Fzxw%2Bl7qHnw9VJEshcaUFlIffjPFP0h%2F0zVnfcaLjM984QKcseUkyPSDarv%2BSrfcAbr9vvfE0ExSucji8%2BDASQOwiinpLb4mkNVkQorasirOmUZ92cJThvdg1wJ61IqtIN5wpLy5bZEJno7lbAP6vlfP2ZGi3P4ogDn7T%2FqX1hnA0Ho7pYAdWQSOlf8amz7cNBQi7M1I%2BhoNdVWk6C73K%2FebmQZTxJ%2BsGrrEcJXpzX8PNGLpFxuQh91Mh%2FbVWM0LiT640kYnr3kpTmXrdwjVg0cAwUicBHmK1kYI8hYzb3ZxXilUz30q%2F2BYn68VeBhEmvfTH7hLqAfEZ4pXzc9075pAI%2B2wAapDiQTOexgx3bINl3HLbf9lwnsvoskrECADAQpq3gqEhZ8LykV9DCG6PikGeK%2FFyU8UpPn7emQ%2FWHEizMuCk6kF2SJh1RjyB7syyV8kiTyNpFIZKX8uN7ITTIMhb%2FsNuRlV5oQCcgn6T9OPx3%2BlS12LRnZXMmwLK0p6c2tg2mYlCF5AB9auJU1vnkFviKHLXzzibZ%2BHKSoSMlJ6ugFJfY%2Fo86MPjQ3b0GOqUBrjLx9vTXEg4HktAlQfl299LzylHSKj2jMksAkAauth3jP2GsodaQDo3p1pl8ySrs3lSmRAAOnnUi5Q%2B2txAl7Fbgi65YJWUGc85Z0NFlwmPBrNzgr5hml5polAkPfPhRl6QTzn3NpnFbY57EY%2BRWoYrFy1mnI7Ap%2F551D87wT%2FUPW67AL52WA%2BDbbiD9zDXRQJtG0l5NY1HDJYRu5uk9IE9qAszr&X-Amz-Signature=1cb3a81f9b5560b3efc0677ed7743f14b94a490e512eb800ba81cea3fc9e1365&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUFSOD4C%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc7ihix%2BzePp90ueXWpRNdlBdFrJNAkjCUSLw7MkKVWQIgYJ8FYRs51jo5VNm%2FuF1gcIPinYcS93Jz2ZleNKWckN0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgQBIsH8KTynsjfQircA1RXyiVIMTnHDqMq1%2FBVG3Dtncf8PSjzqFz4pTG9xo5LV6iC0spy%2BN69JuDQ6HD6wiNSTE%2Fzxw%2Bl7qHnw9VJEshcaUFlIffjPFP0h%2F0zVnfcaLjM984QKcseUkyPSDarv%2BSrfcAbr9vvfE0ExSucji8%2BDASQOwiinpLb4mkNVkQorasirOmUZ92cJThvdg1wJ61IqtIN5wpLy5bZEJno7lbAP6vlfP2ZGi3P4ogDn7T%2FqX1hnA0Ho7pYAdWQSOlf8amz7cNBQi7M1I%2BhoNdVWk6C73K%2FebmQZTxJ%2BsGrrEcJXpzX8PNGLpFxuQh91Mh%2FbVWM0LiT640kYnr3kpTmXrdwjVg0cAwUicBHmK1kYI8hYzb3ZxXilUz30q%2F2BYn68VeBhEmvfTH7hLqAfEZ4pXzc9075pAI%2B2wAapDiQTOexgx3bINl3HLbf9lwnsvoskrECADAQpq3gqEhZ8LykV9DCG6PikGeK%2FFyU8UpPn7emQ%2FWHEizMuCk6kF2SJh1RjyB7syyV8kiTyNpFIZKX8uN7ITTIMhb%2FsNuRlV5oQCcgn6T9OPx3%2BlS12LRnZXMmwLK0p6c2tg2mYlCF5AB9auJU1vnkFviKHLXzzibZ%2BHKSoSMlJ6ugFJfY%2Fo86MPjQ3b0GOqUBrjLx9vTXEg4HktAlQfl299LzylHSKj2jMksAkAauth3jP2GsodaQDo3p1pl8ySrs3lSmRAAOnnUi5Q%2B2txAl7Fbgi65YJWUGc85Z0NFlwmPBrNzgr5hml5polAkPfPhRl6QTzn3NpnFbY57EY%2BRWoYrFy1mnI7Ap%2F551D87wT%2FUPW67AL52WA%2BDbbiD9zDXRQJtG0l5NY1HDJYRu5uk9IE9qAszr&X-Amz-Signature=eb429cd156276f9a1c24fbd1617efba50f815883d3010ab3b9c098130c2f259a&X-Amz-SignedHeaders=host&x-id=GetObject)
