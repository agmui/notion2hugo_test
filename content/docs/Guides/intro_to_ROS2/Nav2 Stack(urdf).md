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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU6SV73%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAzusyzOKICAmLN3L6FR35XJJhe1CCyTdmwLn6hqEtRfAiEA9jTeyO8o9AL%2B92o2X9oKCeGI6DJBAEvak%2BmOsgQrUNoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMJv6jzqNb80GbXLMyrcA5%2BVL%2FJvqG%2BeQZcTg3V4zcftb7lbIWIuMy2R6%2FKiS2PHLfsVG7tn6d65OvbeiTNo3caMHORQNqHfYEmT3k6K5lsK438ZzSAjoiJPgRBp4vKnvQ7Q056qzP35dAPAE6vnRN%2B%2BTgobEHGoVf3dWT9ALOxIPdRGW0L2OV5Q5mfRNDfoLjawzDQPRUSptb8SjodO10zvXnh4ocbzJzNZJX1XkiXEe%2B%2F4PaUDX5S2GyIyTsq8wk4Hn%2FEa7xpDq7KTNjG2NZ5sdKJD4QS0k1H%2Bgy3fsS4aJxsyiiPbb%2F%2B8mwFlRky7uzM12XYiCz9%2BXA50NBFcvo6bRUg8L2SlmA%2FfNC4JFLewBvR8WC0GVRkAVeXGUAeCFXZzre4VXDf8U%2Bi8%2FfzVW7heZO7mq3gkGrCcPEl%2FCc7kxyqicFXLPIY7kpmprlpQru8aLay1LeV9KwIBCil4o%2BgbBUrvTRgU0A%2FYxKnv8%2BUOz3mHagPG6lbh2VGzfuHce3L0JL7nsKyd5QzO%2Fbf8e4POkxDGL6hbLDmaed6qrovOiL9eWy%2FtZCHqz3Aur5WAmcRQH7kn5FhJJEAF7SspSGWHHVmmWPSBWbZYSRHPsbJPmnEjfIdHMAB5zB5iK9P5o92UF%2FSFU4HXs5F5MO%2FXh8IGOqUBdf1%2BfPLYdwwCNmvcoE9hElRi15TyQ5uWsqcP0WI3idRm1qRQ4iVSy8Y4e1kCz7m2ynyuulaTinDCPBQ7LHoADjMufkRIYulXgfu%2BF6lwWIvb1IGZisbEIMlPNdgpL0qWvA3VMPIjrJGKw2JSrW6MAuYoQpfXP3dh3YosdFqnqnBAYnxZVBaoQMoVdDp7SVdJSZW35GFOyAFJ7bKHAcHT0XJatJcg&X-Amz-Signature=24cb02be79ad0e7a273ad776fa59ab4560528a184b9c2170005aa28404ad7362&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU6SV73%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAzusyzOKICAmLN3L6FR35XJJhe1CCyTdmwLn6hqEtRfAiEA9jTeyO8o9AL%2B92o2X9oKCeGI6DJBAEvak%2BmOsgQrUNoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMJv6jzqNb80GbXLMyrcA5%2BVL%2FJvqG%2BeQZcTg3V4zcftb7lbIWIuMy2R6%2FKiS2PHLfsVG7tn6d65OvbeiTNo3caMHORQNqHfYEmT3k6K5lsK438ZzSAjoiJPgRBp4vKnvQ7Q056qzP35dAPAE6vnRN%2B%2BTgobEHGoVf3dWT9ALOxIPdRGW0L2OV5Q5mfRNDfoLjawzDQPRUSptb8SjodO10zvXnh4ocbzJzNZJX1XkiXEe%2B%2F4PaUDX5S2GyIyTsq8wk4Hn%2FEa7xpDq7KTNjG2NZ5sdKJD4QS0k1H%2Bgy3fsS4aJxsyiiPbb%2F%2B8mwFlRky7uzM12XYiCz9%2BXA50NBFcvo6bRUg8L2SlmA%2FfNC4JFLewBvR8WC0GVRkAVeXGUAeCFXZzre4VXDf8U%2Bi8%2FfzVW7heZO7mq3gkGrCcPEl%2FCc7kxyqicFXLPIY7kpmprlpQru8aLay1LeV9KwIBCil4o%2BgbBUrvTRgU0A%2FYxKnv8%2BUOz3mHagPG6lbh2VGzfuHce3L0JL7nsKyd5QzO%2Fbf8e4POkxDGL6hbLDmaed6qrovOiL9eWy%2FtZCHqz3Aur5WAmcRQH7kn5FhJJEAF7SspSGWHHVmmWPSBWbZYSRHPsbJPmnEjfIdHMAB5zB5iK9P5o92UF%2FSFU4HXs5F5MO%2FXh8IGOqUBdf1%2BfPLYdwwCNmvcoE9hElRi15TyQ5uWsqcP0WI3idRm1qRQ4iVSy8Y4e1kCz7m2ynyuulaTinDCPBQ7LHoADjMufkRIYulXgfu%2BF6lwWIvb1IGZisbEIMlPNdgpL0qWvA3VMPIjrJGKw2JSrW6MAuYoQpfXP3dh3YosdFqnqnBAYnxZVBaoQMoVdDp7SVdJSZW35GFOyAFJ7bKHAcHT0XJatJcg&X-Amz-Signature=44ef2847b68a4b436dcda5bd112d6d8a41a71e6dede734883794f4653c678ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU6SV73%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAzusyzOKICAmLN3L6FR35XJJhe1CCyTdmwLn6hqEtRfAiEA9jTeyO8o9AL%2B92o2X9oKCeGI6DJBAEvak%2BmOsgQrUNoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMJv6jzqNb80GbXLMyrcA5%2BVL%2FJvqG%2BeQZcTg3V4zcftb7lbIWIuMy2R6%2FKiS2PHLfsVG7tn6d65OvbeiTNo3caMHORQNqHfYEmT3k6K5lsK438ZzSAjoiJPgRBp4vKnvQ7Q056qzP35dAPAE6vnRN%2B%2BTgobEHGoVf3dWT9ALOxIPdRGW0L2OV5Q5mfRNDfoLjawzDQPRUSptb8SjodO10zvXnh4ocbzJzNZJX1XkiXEe%2B%2F4PaUDX5S2GyIyTsq8wk4Hn%2FEa7xpDq7KTNjG2NZ5sdKJD4QS0k1H%2Bgy3fsS4aJxsyiiPbb%2F%2B8mwFlRky7uzM12XYiCz9%2BXA50NBFcvo6bRUg8L2SlmA%2FfNC4JFLewBvR8WC0GVRkAVeXGUAeCFXZzre4VXDf8U%2Bi8%2FfzVW7heZO7mq3gkGrCcPEl%2FCc7kxyqicFXLPIY7kpmprlpQru8aLay1LeV9KwIBCil4o%2BgbBUrvTRgU0A%2FYxKnv8%2BUOz3mHagPG6lbh2VGzfuHce3L0JL7nsKyd5QzO%2Fbf8e4POkxDGL6hbLDmaed6qrovOiL9eWy%2FtZCHqz3Aur5WAmcRQH7kn5FhJJEAF7SspSGWHHVmmWPSBWbZYSRHPsbJPmnEjfIdHMAB5zB5iK9P5o92UF%2FSFU4HXs5F5MO%2FXh8IGOqUBdf1%2BfPLYdwwCNmvcoE9hElRi15TyQ5uWsqcP0WI3idRm1qRQ4iVSy8Y4e1kCz7m2ynyuulaTinDCPBQ7LHoADjMufkRIYulXgfu%2BF6lwWIvb1IGZisbEIMlPNdgpL0qWvA3VMPIjrJGKw2JSrW6MAuYoQpfXP3dh3YosdFqnqnBAYnxZVBaoQMoVdDp7SVdJSZW35GFOyAFJ7bKHAcHT0XJatJcg&X-Amz-Signature=79220936c24f46ad19f23ca23dd07dfdbbadbf678747d437737764ab3fafadca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU6SV73%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAzusyzOKICAmLN3L6FR35XJJhe1CCyTdmwLn6hqEtRfAiEA9jTeyO8o9AL%2B92o2X9oKCeGI6DJBAEvak%2BmOsgQrUNoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMJv6jzqNb80GbXLMyrcA5%2BVL%2FJvqG%2BeQZcTg3V4zcftb7lbIWIuMy2R6%2FKiS2PHLfsVG7tn6d65OvbeiTNo3caMHORQNqHfYEmT3k6K5lsK438ZzSAjoiJPgRBp4vKnvQ7Q056qzP35dAPAE6vnRN%2B%2BTgobEHGoVf3dWT9ALOxIPdRGW0L2OV5Q5mfRNDfoLjawzDQPRUSptb8SjodO10zvXnh4ocbzJzNZJX1XkiXEe%2B%2F4PaUDX5S2GyIyTsq8wk4Hn%2FEa7xpDq7KTNjG2NZ5sdKJD4QS0k1H%2Bgy3fsS4aJxsyiiPbb%2F%2B8mwFlRky7uzM12XYiCz9%2BXA50NBFcvo6bRUg8L2SlmA%2FfNC4JFLewBvR8WC0GVRkAVeXGUAeCFXZzre4VXDf8U%2Bi8%2FfzVW7heZO7mq3gkGrCcPEl%2FCc7kxyqicFXLPIY7kpmprlpQru8aLay1LeV9KwIBCil4o%2BgbBUrvTRgU0A%2FYxKnv8%2BUOz3mHagPG6lbh2VGzfuHce3L0JL7nsKyd5QzO%2Fbf8e4POkxDGL6hbLDmaed6qrovOiL9eWy%2FtZCHqz3Aur5WAmcRQH7kn5FhJJEAF7SspSGWHHVmmWPSBWbZYSRHPsbJPmnEjfIdHMAB5zB5iK9P5o92UF%2FSFU4HXs5F5MO%2FXh8IGOqUBdf1%2BfPLYdwwCNmvcoE9hElRi15TyQ5uWsqcP0WI3idRm1qRQ4iVSy8Y4e1kCz7m2ynyuulaTinDCPBQ7LHoADjMufkRIYulXgfu%2BF6lwWIvb1IGZisbEIMlPNdgpL0qWvA3VMPIjrJGKw2JSrW6MAuYoQpfXP3dh3YosdFqnqnBAYnxZVBaoQMoVdDp7SVdJSZW35GFOyAFJ7bKHAcHT0XJatJcg&X-Amz-Signature=fe14264a7d80f3ea0e21f117556f23073ed558b7a607bf83749cb1ddaa17e455&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU6SV73%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAzusyzOKICAmLN3L6FR35XJJhe1CCyTdmwLn6hqEtRfAiEA9jTeyO8o9AL%2B92o2X9oKCeGI6DJBAEvak%2BmOsgQrUNoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMJv6jzqNb80GbXLMyrcA5%2BVL%2FJvqG%2BeQZcTg3V4zcftb7lbIWIuMy2R6%2FKiS2PHLfsVG7tn6d65OvbeiTNo3caMHORQNqHfYEmT3k6K5lsK438ZzSAjoiJPgRBp4vKnvQ7Q056qzP35dAPAE6vnRN%2B%2BTgobEHGoVf3dWT9ALOxIPdRGW0L2OV5Q5mfRNDfoLjawzDQPRUSptb8SjodO10zvXnh4ocbzJzNZJX1XkiXEe%2B%2F4PaUDX5S2GyIyTsq8wk4Hn%2FEa7xpDq7KTNjG2NZ5sdKJD4QS0k1H%2Bgy3fsS4aJxsyiiPbb%2F%2B8mwFlRky7uzM12XYiCz9%2BXA50NBFcvo6bRUg8L2SlmA%2FfNC4JFLewBvR8WC0GVRkAVeXGUAeCFXZzre4VXDf8U%2Bi8%2FfzVW7heZO7mq3gkGrCcPEl%2FCc7kxyqicFXLPIY7kpmprlpQru8aLay1LeV9KwIBCil4o%2BgbBUrvTRgU0A%2FYxKnv8%2BUOz3mHagPG6lbh2VGzfuHce3L0JL7nsKyd5QzO%2Fbf8e4POkxDGL6hbLDmaed6qrovOiL9eWy%2FtZCHqz3Aur5WAmcRQH7kn5FhJJEAF7SspSGWHHVmmWPSBWbZYSRHPsbJPmnEjfIdHMAB5zB5iK9P5o92UF%2FSFU4HXs5F5MO%2FXh8IGOqUBdf1%2BfPLYdwwCNmvcoE9hElRi15TyQ5uWsqcP0WI3idRm1qRQ4iVSy8Y4e1kCz7m2ynyuulaTinDCPBQ7LHoADjMufkRIYulXgfu%2BF6lwWIvb1IGZisbEIMlPNdgpL0qWvA3VMPIjrJGKw2JSrW6MAuYoQpfXP3dh3YosdFqnqnBAYnxZVBaoQMoVdDp7SVdJSZW35GFOyAFJ7bKHAcHT0XJatJcg&X-Amz-Signature=01a0da74bf646e6c4a3f70e65e094be86a9335197b297cc690a5201db1d27df7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCU6SV73%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAzusyzOKICAmLN3L6FR35XJJhe1CCyTdmwLn6hqEtRfAiEA9jTeyO8o9AL%2B92o2X9oKCeGI6DJBAEvak%2BmOsgQrUNoq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDMJv6jzqNb80GbXLMyrcA5%2BVL%2FJvqG%2BeQZcTg3V4zcftb7lbIWIuMy2R6%2FKiS2PHLfsVG7tn6d65OvbeiTNo3caMHORQNqHfYEmT3k6K5lsK438ZzSAjoiJPgRBp4vKnvQ7Q056qzP35dAPAE6vnRN%2B%2BTgobEHGoVf3dWT9ALOxIPdRGW0L2OV5Q5mfRNDfoLjawzDQPRUSptb8SjodO10zvXnh4ocbzJzNZJX1XkiXEe%2B%2F4PaUDX5S2GyIyTsq8wk4Hn%2FEa7xpDq7KTNjG2NZ5sdKJD4QS0k1H%2Bgy3fsS4aJxsyiiPbb%2F%2B8mwFlRky7uzM12XYiCz9%2BXA50NBFcvo6bRUg8L2SlmA%2FfNC4JFLewBvR8WC0GVRkAVeXGUAeCFXZzre4VXDf8U%2Bi8%2FfzVW7heZO7mq3gkGrCcPEl%2FCc7kxyqicFXLPIY7kpmprlpQru8aLay1LeV9KwIBCil4o%2BgbBUrvTRgU0A%2FYxKnv8%2BUOz3mHagPG6lbh2VGzfuHce3L0JL7nsKyd5QzO%2Fbf8e4POkxDGL6hbLDmaed6qrovOiL9eWy%2FtZCHqz3Aur5WAmcRQH7kn5FhJJEAF7SspSGWHHVmmWPSBWbZYSRHPsbJPmnEjfIdHMAB5zB5iK9P5o92UF%2FSFU4HXs5F5MO%2FXh8IGOqUBdf1%2BfPLYdwwCNmvcoE9hElRi15TyQ5uWsqcP0WI3idRm1qRQ4iVSy8Y4e1kCz7m2ynyuulaTinDCPBQ7LHoADjMufkRIYulXgfu%2BF6lwWIvb1IGZisbEIMlPNdgpL0qWvA3VMPIjrJGKw2JSrW6MAuYoQpfXP3dh3YosdFqnqnBAYnxZVBaoQMoVdDp7SVdJSZW35GFOyAFJ7bKHAcHT0XJatJcg&X-Amz-Signature=afaceec5cc0ea75f28659db5ff540ea873c8de4bd2565740400fb47fa40265b7&X-Amz-SignedHeaders=host&x-id=GetObject)
