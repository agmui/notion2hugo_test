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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWMQ2D7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCFG9y5Y2k11QRlVUXEOg7DDy0TqivwMxVO7UqS5q%2BicQIhAJjNNjs37BqKgPf66KHWJ7L%2BOSHbit0lKonAqV1BkYqSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJU7mP7vhDln6%2BLdkq3AMGjzhhTBrIEzTY4Jic55PJ%2BuLMK7JuHOTExW0ay8ok3aGAwU7WxjYV%2FSgTMDnQzILBUrgjuS2TdW1LtfPX7qydsUItrVS6qsAY7s35HVRqsEuTGffAFfwv6zJ4kdfxr57esCRcrlRESOQxNgyPXZ9ghSJxYP7mwjlfuGYSvhGbRWkhoRf3sFZLZESJP%2FUwe0fZB3ywL9kkQexubIAtnEG%2FE3aES4nkOMaqh5mRemb3%2BJqOKkPYYM%2B8x4aNa4peaABQy7dS6WWiv1%2FWMNCXF1VMSE%2BqaI8bfdWnbWBOu%2BiLp%2Fqp0cphzEjhTGYVyovxNqbRfq3LNSOf4i9lUoTeTgpeJHvUZZMJdtmVgO1pY%2BWXWx%2BXFAfTrp9yX2BnDEYnA7NnwNXesIohpYIgCP00N4T5pVETa%2FhswzSdL8UkodcuQGHToaWdCRZ%2BZ4p1StLqfqVIiumZdbh0dBYSY7KJjInYA29Be969OxyofUz1pF4hnCPA2d%2F23dM%2FRqTF8ErskU6Rz82sHocS26zJV7lFPA0VKEvyYrn55%2BjOhej2W2LVIn4yCCEGSQxByosB7xCtCtyCMcrU53%2BO0J9ESdEwvqDvaYmuQImAmXUvJ1c1UJBh7FoeYzn4mPqnf%2Fu43zCT89nABjqkAdKia%2F5EeMbD8KqDsngym5u2eQ6V%2FhLceXA%2B9NghH0XR7Gd4c1AdF%2Bb8Tk4%2BLaZERS%2BKjQEvXPxYbjOEPQ97ngRplKnbCkZfoIshbWs24Yx%2F0upavcUFhDfQcv4Tq%2Fkhkr9xd2%2BvYgSHz%2BqaljPncXI%2FXW551pf4HCJgKr8grFfdUk53%2FLfVjTHg%2FJ8WG2rL2%2BRMRrDltI1oohrptZLmL1hQ%2Bl2x&X-Amz-Signature=bd6f7d660a636bbb5dad2bc8a13b4cfe82fd4b363db3b5f97040362b894c96a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWMQ2D7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCFG9y5Y2k11QRlVUXEOg7DDy0TqivwMxVO7UqS5q%2BicQIhAJjNNjs37BqKgPf66KHWJ7L%2BOSHbit0lKonAqV1BkYqSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJU7mP7vhDln6%2BLdkq3AMGjzhhTBrIEzTY4Jic55PJ%2BuLMK7JuHOTExW0ay8ok3aGAwU7WxjYV%2FSgTMDnQzILBUrgjuS2TdW1LtfPX7qydsUItrVS6qsAY7s35HVRqsEuTGffAFfwv6zJ4kdfxr57esCRcrlRESOQxNgyPXZ9ghSJxYP7mwjlfuGYSvhGbRWkhoRf3sFZLZESJP%2FUwe0fZB3ywL9kkQexubIAtnEG%2FE3aES4nkOMaqh5mRemb3%2BJqOKkPYYM%2B8x4aNa4peaABQy7dS6WWiv1%2FWMNCXF1VMSE%2BqaI8bfdWnbWBOu%2BiLp%2Fqp0cphzEjhTGYVyovxNqbRfq3LNSOf4i9lUoTeTgpeJHvUZZMJdtmVgO1pY%2BWXWx%2BXFAfTrp9yX2BnDEYnA7NnwNXesIohpYIgCP00N4T5pVETa%2FhswzSdL8UkodcuQGHToaWdCRZ%2BZ4p1StLqfqVIiumZdbh0dBYSY7KJjInYA29Be969OxyofUz1pF4hnCPA2d%2F23dM%2FRqTF8ErskU6Rz82sHocS26zJV7lFPA0VKEvyYrn55%2BjOhej2W2LVIn4yCCEGSQxByosB7xCtCtyCMcrU53%2BO0J9ESdEwvqDvaYmuQImAmXUvJ1c1UJBh7FoeYzn4mPqnf%2Fu43zCT89nABjqkAdKia%2F5EeMbD8KqDsngym5u2eQ6V%2FhLceXA%2B9NghH0XR7Gd4c1AdF%2Bb8Tk4%2BLaZERS%2BKjQEvXPxYbjOEPQ97ngRplKnbCkZfoIshbWs24Yx%2F0upavcUFhDfQcv4Tq%2Fkhkr9xd2%2BvYgSHz%2BqaljPncXI%2FXW551pf4HCJgKr8grFfdUk53%2FLfVjTHg%2FJ8WG2rL2%2BRMRrDltI1oohrptZLmL1hQ%2Bl2x&X-Amz-Signature=efe37f0b02b47eefd9ff1c0af8ea21f5dbda12146a14200170655f4b328b4a49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWMQ2D7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCFG9y5Y2k11QRlVUXEOg7DDy0TqivwMxVO7UqS5q%2BicQIhAJjNNjs37BqKgPf66KHWJ7L%2BOSHbit0lKonAqV1BkYqSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJU7mP7vhDln6%2BLdkq3AMGjzhhTBrIEzTY4Jic55PJ%2BuLMK7JuHOTExW0ay8ok3aGAwU7WxjYV%2FSgTMDnQzILBUrgjuS2TdW1LtfPX7qydsUItrVS6qsAY7s35HVRqsEuTGffAFfwv6zJ4kdfxr57esCRcrlRESOQxNgyPXZ9ghSJxYP7mwjlfuGYSvhGbRWkhoRf3sFZLZESJP%2FUwe0fZB3ywL9kkQexubIAtnEG%2FE3aES4nkOMaqh5mRemb3%2BJqOKkPYYM%2B8x4aNa4peaABQy7dS6WWiv1%2FWMNCXF1VMSE%2BqaI8bfdWnbWBOu%2BiLp%2Fqp0cphzEjhTGYVyovxNqbRfq3LNSOf4i9lUoTeTgpeJHvUZZMJdtmVgO1pY%2BWXWx%2BXFAfTrp9yX2BnDEYnA7NnwNXesIohpYIgCP00N4T5pVETa%2FhswzSdL8UkodcuQGHToaWdCRZ%2BZ4p1StLqfqVIiumZdbh0dBYSY7KJjInYA29Be969OxyofUz1pF4hnCPA2d%2F23dM%2FRqTF8ErskU6Rz82sHocS26zJV7lFPA0VKEvyYrn55%2BjOhej2W2LVIn4yCCEGSQxByosB7xCtCtyCMcrU53%2BO0J9ESdEwvqDvaYmuQImAmXUvJ1c1UJBh7FoeYzn4mPqnf%2Fu43zCT89nABjqkAdKia%2F5EeMbD8KqDsngym5u2eQ6V%2FhLceXA%2B9NghH0XR7Gd4c1AdF%2Bb8Tk4%2BLaZERS%2BKjQEvXPxYbjOEPQ97ngRplKnbCkZfoIshbWs24Yx%2F0upavcUFhDfQcv4Tq%2Fkhkr9xd2%2BvYgSHz%2BqaljPncXI%2FXW551pf4HCJgKr8grFfdUk53%2FLfVjTHg%2FJ8WG2rL2%2BRMRrDltI1oohrptZLmL1hQ%2Bl2x&X-Amz-Signature=9b445d023b6c68401a7dfca7cd268ec04f0859da838350961d10f2e3e29b63e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWMQ2D7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCFG9y5Y2k11QRlVUXEOg7DDy0TqivwMxVO7UqS5q%2BicQIhAJjNNjs37BqKgPf66KHWJ7L%2BOSHbit0lKonAqV1BkYqSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJU7mP7vhDln6%2BLdkq3AMGjzhhTBrIEzTY4Jic55PJ%2BuLMK7JuHOTExW0ay8ok3aGAwU7WxjYV%2FSgTMDnQzILBUrgjuS2TdW1LtfPX7qydsUItrVS6qsAY7s35HVRqsEuTGffAFfwv6zJ4kdfxr57esCRcrlRESOQxNgyPXZ9ghSJxYP7mwjlfuGYSvhGbRWkhoRf3sFZLZESJP%2FUwe0fZB3ywL9kkQexubIAtnEG%2FE3aES4nkOMaqh5mRemb3%2BJqOKkPYYM%2B8x4aNa4peaABQy7dS6WWiv1%2FWMNCXF1VMSE%2BqaI8bfdWnbWBOu%2BiLp%2Fqp0cphzEjhTGYVyovxNqbRfq3LNSOf4i9lUoTeTgpeJHvUZZMJdtmVgO1pY%2BWXWx%2BXFAfTrp9yX2BnDEYnA7NnwNXesIohpYIgCP00N4T5pVETa%2FhswzSdL8UkodcuQGHToaWdCRZ%2BZ4p1StLqfqVIiumZdbh0dBYSY7KJjInYA29Be969OxyofUz1pF4hnCPA2d%2F23dM%2FRqTF8ErskU6Rz82sHocS26zJV7lFPA0VKEvyYrn55%2BjOhej2W2LVIn4yCCEGSQxByosB7xCtCtyCMcrU53%2BO0J9ESdEwvqDvaYmuQImAmXUvJ1c1UJBh7FoeYzn4mPqnf%2Fu43zCT89nABjqkAdKia%2F5EeMbD8KqDsngym5u2eQ6V%2FhLceXA%2B9NghH0XR7Gd4c1AdF%2Bb8Tk4%2BLaZERS%2BKjQEvXPxYbjOEPQ97ngRplKnbCkZfoIshbWs24Yx%2F0upavcUFhDfQcv4Tq%2Fkhkr9xd2%2BvYgSHz%2BqaljPncXI%2FXW551pf4HCJgKr8grFfdUk53%2FLfVjTHg%2FJ8WG2rL2%2BRMRrDltI1oohrptZLmL1hQ%2Bl2x&X-Amz-Signature=b23879b1a8e70effacb72b139a54f739c0532b0084ed4a7bfabc3752a00ec676&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWMQ2D7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCFG9y5Y2k11QRlVUXEOg7DDy0TqivwMxVO7UqS5q%2BicQIhAJjNNjs37BqKgPf66KHWJ7L%2BOSHbit0lKonAqV1BkYqSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJU7mP7vhDln6%2BLdkq3AMGjzhhTBrIEzTY4Jic55PJ%2BuLMK7JuHOTExW0ay8ok3aGAwU7WxjYV%2FSgTMDnQzILBUrgjuS2TdW1LtfPX7qydsUItrVS6qsAY7s35HVRqsEuTGffAFfwv6zJ4kdfxr57esCRcrlRESOQxNgyPXZ9ghSJxYP7mwjlfuGYSvhGbRWkhoRf3sFZLZESJP%2FUwe0fZB3ywL9kkQexubIAtnEG%2FE3aES4nkOMaqh5mRemb3%2BJqOKkPYYM%2B8x4aNa4peaABQy7dS6WWiv1%2FWMNCXF1VMSE%2BqaI8bfdWnbWBOu%2BiLp%2Fqp0cphzEjhTGYVyovxNqbRfq3LNSOf4i9lUoTeTgpeJHvUZZMJdtmVgO1pY%2BWXWx%2BXFAfTrp9yX2BnDEYnA7NnwNXesIohpYIgCP00N4T5pVETa%2FhswzSdL8UkodcuQGHToaWdCRZ%2BZ4p1StLqfqVIiumZdbh0dBYSY7KJjInYA29Be969OxyofUz1pF4hnCPA2d%2F23dM%2FRqTF8ErskU6Rz82sHocS26zJV7lFPA0VKEvyYrn55%2BjOhej2W2LVIn4yCCEGSQxByosB7xCtCtyCMcrU53%2BO0J9ESdEwvqDvaYmuQImAmXUvJ1c1UJBh7FoeYzn4mPqnf%2Fu43zCT89nABjqkAdKia%2F5EeMbD8KqDsngym5u2eQ6V%2FhLceXA%2B9NghH0XR7Gd4c1AdF%2Bb8Tk4%2BLaZERS%2BKjQEvXPxYbjOEPQ97ngRplKnbCkZfoIshbWs24Yx%2F0upavcUFhDfQcv4Tq%2Fkhkr9xd2%2BvYgSHz%2BqaljPncXI%2FXW551pf4HCJgKr8grFfdUk53%2FLfVjTHg%2FJ8WG2rL2%2BRMRrDltI1oohrptZLmL1hQ%2Bl2x&X-Amz-Signature=0697fe4a5791c5003466b4ee70b65f0a55b74863699abdcd494dd64292331d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWMQ2D7%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCFG9y5Y2k11QRlVUXEOg7DDy0TqivwMxVO7UqS5q%2BicQIhAJjNNjs37BqKgPf66KHWJ7L%2BOSHbit0lKonAqV1BkYqSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJU7mP7vhDln6%2BLdkq3AMGjzhhTBrIEzTY4Jic55PJ%2BuLMK7JuHOTExW0ay8ok3aGAwU7WxjYV%2FSgTMDnQzILBUrgjuS2TdW1LtfPX7qydsUItrVS6qsAY7s35HVRqsEuTGffAFfwv6zJ4kdfxr57esCRcrlRESOQxNgyPXZ9ghSJxYP7mwjlfuGYSvhGbRWkhoRf3sFZLZESJP%2FUwe0fZB3ywL9kkQexubIAtnEG%2FE3aES4nkOMaqh5mRemb3%2BJqOKkPYYM%2B8x4aNa4peaABQy7dS6WWiv1%2FWMNCXF1VMSE%2BqaI8bfdWnbWBOu%2BiLp%2Fqp0cphzEjhTGYVyovxNqbRfq3LNSOf4i9lUoTeTgpeJHvUZZMJdtmVgO1pY%2BWXWx%2BXFAfTrp9yX2BnDEYnA7NnwNXesIohpYIgCP00N4T5pVETa%2FhswzSdL8UkodcuQGHToaWdCRZ%2BZ4p1StLqfqVIiumZdbh0dBYSY7KJjInYA29Be969OxyofUz1pF4hnCPA2d%2F23dM%2FRqTF8ErskU6Rz82sHocS26zJV7lFPA0VKEvyYrn55%2BjOhej2W2LVIn4yCCEGSQxByosB7xCtCtyCMcrU53%2BO0J9ESdEwvqDvaYmuQImAmXUvJ1c1UJBh7FoeYzn4mPqnf%2Fu43zCT89nABjqkAdKia%2F5EeMbD8KqDsngym5u2eQ6V%2FhLceXA%2B9NghH0XR7Gd4c1AdF%2Bb8Tk4%2BLaZERS%2BKjQEvXPxYbjOEPQ97ngRplKnbCkZfoIshbWs24Yx%2F0upavcUFhDfQcv4Tq%2Fkhkr9xd2%2BvYgSHz%2BqaljPncXI%2FXW551pf4HCJgKr8grFfdUk53%2FLfVjTHg%2FJ8WG2rL2%2BRMRrDltI1oohrptZLmL1hQ%2Bl2x&X-Amz-Signature=67ad3f963df1dc8ee20d9e8be3c9dd2b702e3efef6e0909f0d5c9bafde64e60b&X-Amz-SignedHeaders=host&x-id=GetObject)
