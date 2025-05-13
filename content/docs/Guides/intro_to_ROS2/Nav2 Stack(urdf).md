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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFQO3IR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDtZ8gvTP4iBWhzZu7S1Sz14jF0%2FfC22ko2a4I6AkzOrwIhAOKDxd56fnf05pdHbiXlB2KdXMLNgeoLVv%2B9GYCUFfWdKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsfYjbi8erzsDwwXoq3AOsbe9iyeuZ14ddOGwCs13lBlcLUAhZD59QlVJW2N5dBpHb8PxwpUoNAqZuJ7F6rMd6UXgq6e7pqoSxwPyMTbRdDregjFMWQU5C5W%2FeMmTTr3tHLgBt2knCtKzmfWFB9Qf6Iph3YISyYAeJaNMltt9z5jv%2Fj7xcUHFxIr8ROG7gYGzA9Au0UcuAcryOelj%2BNirYUwS6%2BKneCLlIGaSe9AfGYcZJKDYjh7D8CD05faugU0W2X%2BFtaiPf214ozKg0IrfBDXnb4mgli5iCHdPgm3njlN%2B6AGsSijdNOtg0eJtr8vySy2%2FA6muQTulTdJeMgo6YbuuNZPXCzDAfNRWC0BkEM6bmSNQMrxCXWZJKOznQY0Rcuzuxt6j9Kh32vQ97TezsQpl%2B4v9U3amFhLndCH4vxhVtGZPZ7KkcK73nHmElSkEPeX46URL0%2FfPYjsvPJgcxXmdEMBrVl9TQ2CgF8m9vnSnw8NLP%2BuWCmAdxg0ApIYN19kv%2Big0k7v9TbH6KMcF85IsBg1NBXT163HjFuUlblvKyKBRwvoKunRkaJrGwFAbS7nRDzCSVONq3Kahi63VpgufRczQyMZufWgqkaEuS32YvkhuKBESWQPszwGydHkBRhB%2Fuqcn%2FcxtFKDCdjo7BBjqkAf67tbmFLl3XRM3dWYzq33k5HCxmlzrm%2BXU4BXG7fXgE9hb868dhLQosRRZJGhRueaorQWTMh4J0FYj3L1TdjCDmGVClxTSo3m3yz9Imhs09glcJ1Sf5oBug%2BnWD8wKdemA%2BczeVMtL43tA2nmbzPMfad8BLWxinOFC9CYyDGV6Qrd7j5rlfv0P1ASwupyfROLf89E5qRa5YTCrsbvcIdGrUuofa&X-Amz-Signature=050becfc97e71928f9073a37c152f0e9bfa6481093db63ed3d8dd723bcc6513d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFQO3IR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDtZ8gvTP4iBWhzZu7S1Sz14jF0%2FfC22ko2a4I6AkzOrwIhAOKDxd56fnf05pdHbiXlB2KdXMLNgeoLVv%2B9GYCUFfWdKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsfYjbi8erzsDwwXoq3AOsbe9iyeuZ14ddOGwCs13lBlcLUAhZD59QlVJW2N5dBpHb8PxwpUoNAqZuJ7F6rMd6UXgq6e7pqoSxwPyMTbRdDregjFMWQU5C5W%2FeMmTTr3tHLgBt2knCtKzmfWFB9Qf6Iph3YISyYAeJaNMltt9z5jv%2Fj7xcUHFxIr8ROG7gYGzA9Au0UcuAcryOelj%2BNirYUwS6%2BKneCLlIGaSe9AfGYcZJKDYjh7D8CD05faugU0W2X%2BFtaiPf214ozKg0IrfBDXnb4mgli5iCHdPgm3njlN%2B6AGsSijdNOtg0eJtr8vySy2%2FA6muQTulTdJeMgo6YbuuNZPXCzDAfNRWC0BkEM6bmSNQMrxCXWZJKOznQY0Rcuzuxt6j9Kh32vQ97TezsQpl%2B4v9U3amFhLndCH4vxhVtGZPZ7KkcK73nHmElSkEPeX46URL0%2FfPYjsvPJgcxXmdEMBrVl9TQ2CgF8m9vnSnw8NLP%2BuWCmAdxg0ApIYN19kv%2Big0k7v9TbH6KMcF85IsBg1NBXT163HjFuUlblvKyKBRwvoKunRkaJrGwFAbS7nRDzCSVONq3Kahi63VpgufRczQyMZufWgqkaEuS32YvkhuKBESWQPszwGydHkBRhB%2Fuqcn%2FcxtFKDCdjo7BBjqkAf67tbmFLl3XRM3dWYzq33k5HCxmlzrm%2BXU4BXG7fXgE9hb868dhLQosRRZJGhRueaorQWTMh4J0FYj3L1TdjCDmGVClxTSo3m3yz9Imhs09glcJ1Sf5oBug%2BnWD8wKdemA%2BczeVMtL43tA2nmbzPMfad8BLWxinOFC9CYyDGV6Qrd7j5rlfv0P1ASwupyfROLf89E5qRa5YTCrsbvcIdGrUuofa&X-Amz-Signature=5ef37fcfc042f1d927eb535dd95c61b73f76b34cab7ac06ad5c255aeeef85e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFQO3IR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDtZ8gvTP4iBWhzZu7S1Sz14jF0%2FfC22ko2a4I6AkzOrwIhAOKDxd56fnf05pdHbiXlB2KdXMLNgeoLVv%2B9GYCUFfWdKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsfYjbi8erzsDwwXoq3AOsbe9iyeuZ14ddOGwCs13lBlcLUAhZD59QlVJW2N5dBpHb8PxwpUoNAqZuJ7F6rMd6UXgq6e7pqoSxwPyMTbRdDregjFMWQU5C5W%2FeMmTTr3tHLgBt2knCtKzmfWFB9Qf6Iph3YISyYAeJaNMltt9z5jv%2Fj7xcUHFxIr8ROG7gYGzA9Au0UcuAcryOelj%2BNirYUwS6%2BKneCLlIGaSe9AfGYcZJKDYjh7D8CD05faugU0W2X%2BFtaiPf214ozKg0IrfBDXnb4mgli5iCHdPgm3njlN%2B6AGsSijdNOtg0eJtr8vySy2%2FA6muQTulTdJeMgo6YbuuNZPXCzDAfNRWC0BkEM6bmSNQMrxCXWZJKOznQY0Rcuzuxt6j9Kh32vQ97TezsQpl%2B4v9U3amFhLndCH4vxhVtGZPZ7KkcK73nHmElSkEPeX46URL0%2FfPYjsvPJgcxXmdEMBrVl9TQ2CgF8m9vnSnw8NLP%2BuWCmAdxg0ApIYN19kv%2Big0k7v9TbH6KMcF85IsBg1NBXT163HjFuUlblvKyKBRwvoKunRkaJrGwFAbS7nRDzCSVONq3Kahi63VpgufRczQyMZufWgqkaEuS32YvkhuKBESWQPszwGydHkBRhB%2Fuqcn%2FcxtFKDCdjo7BBjqkAf67tbmFLl3XRM3dWYzq33k5HCxmlzrm%2BXU4BXG7fXgE9hb868dhLQosRRZJGhRueaorQWTMh4J0FYj3L1TdjCDmGVClxTSo3m3yz9Imhs09glcJ1Sf5oBug%2BnWD8wKdemA%2BczeVMtL43tA2nmbzPMfad8BLWxinOFC9CYyDGV6Qrd7j5rlfv0P1ASwupyfROLf89E5qRa5YTCrsbvcIdGrUuofa&X-Amz-Signature=cc2d6222990da6560d8ae7725e8311c5730c9ea564536dedae9241df2ee24ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFQO3IR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDtZ8gvTP4iBWhzZu7S1Sz14jF0%2FfC22ko2a4I6AkzOrwIhAOKDxd56fnf05pdHbiXlB2KdXMLNgeoLVv%2B9GYCUFfWdKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsfYjbi8erzsDwwXoq3AOsbe9iyeuZ14ddOGwCs13lBlcLUAhZD59QlVJW2N5dBpHb8PxwpUoNAqZuJ7F6rMd6UXgq6e7pqoSxwPyMTbRdDregjFMWQU5C5W%2FeMmTTr3tHLgBt2knCtKzmfWFB9Qf6Iph3YISyYAeJaNMltt9z5jv%2Fj7xcUHFxIr8ROG7gYGzA9Au0UcuAcryOelj%2BNirYUwS6%2BKneCLlIGaSe9AfGYcZJKDYjh7D8CD05faugU0W2X%2BFtaiPf214ozKg0IrfBDXnb4mgli5iCHdPgm3njlN%2B6AGsSijdNOtg0eJtr8vySy2%2FA6muQTulTdJeMgo6YbuuNZPXCzDAfNRWC0BkEM6bmSNQMrxCXWZJKOznQY0Rcuzuxt6j9Kh32vQ97TezsQpl%2B4v9U3amFhLndCH4vxhVtGZPZ7KkcK73nHmElSkEPeX46URL0%2FfPYjsvPJgcxXmdEMBrVl9TQ2CgF8m9vnSnw8NLP%2BuWCmAdxg0ApIYN19kv%2Big0k7v9TbH6KMcF85IsBg1NBXT163HjFuUlblvKyKBRwvoKunRkaJrGwFAbS7nRDzCSVONq3Kahi63VpgufRczQyMZufWgqkaEuS32YvkhuKBESWQPszwGydHkBRhB%2Fuqcn%2FcxtFKDCdjo7BBjqkAf67tbmFLl3XRM3dWYzq33k5HCxmlzrm%2BXU4BXG7fXgE9hb868dhLQosRRZJGhRueaorQWTMh4J0FYj3L1TdjCDmGVClxTSo3m3yz9Imhs09glcJ1Sf5oBug%2BnWD8wKdemA%2BczeVMtL43tA2nmbzPMfad8BLWxinOFC9CYyDGV6Qrd7j5rlfv0P1ASwupyfROLf89E5qRa5YTCrsbvcIdGrUuofa&X-Amz-Signature=9f2fbf6d6d5e761ae17ac3864b25814531e7166c19003c820f251c0d2a7fbe1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFQO3IR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDtZ8gvTP4iBWhzZu7S1Sz14jF0%2FfC22ko2a4I6AkzOrwIhAOKDxd56fnf05pdHbiXlB2KdXMLNgeoLVv%2B9GYCUFfWdKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsfYjbi8erzsDwwXoq3AOsbe9iyeuZ14ddOGwCs13lBlcLUAhZD59QlVJW2N5dBpHb8PxwpUoNAqZuJ7F6rMd6UXgq6e7pqoSxwPyMTbRdDregjFMWQU5C5W%2FeMmTTr3tHLgBt2knCtKzmfWFB9Qf6Iph3YISyYAeJaNMltt9z5jv%2Fj7xcUHFxIr8ROG7gYGzA9Au0UcuAcryOelj%2BNirYUwS6%2BKneCLlIGaSe9AfGYcZJKDYjh7D8CD05faugU0W2X%2BFtaiPf214ozKg0IrfBDXnb4mgli5iCHdPgm3njlN%2B6AGsSijdNOtg0eJtr8vySy2%2FA6muQTulTdJeMgo6YbuuNZPXCzDAfNRWC0BkEM6bmSNQMrxCXWZJKOznQY0Rcuzuxt6j9Kh32vQ97TezsQpl%2B4v9U3amFhLndCH4vxhVtGZPZ7KkcK73nHmElSkEPeX46URL0%2FfPYjsvPJgcxXmdEMBrVl9TQ2CgF8m9vnSnw8NLP%2BuWCmAdxg0ApIYN19kv%2Big0k7v9TbH6KMcF85IsBg1NBXT163HjFuUlblvKyKBRwvoKunRkaJrGwFAbS7nRDzCSVONq3Kahi63VpgufRczQyMZufWgqkaEuS32YvkhuKBESWQPszwGydHkBRhB%2Fuqcn%2FcxtFKDCdjo7BBjqkAf67tbmFLl3XRM3dWYzq33k5HCxmlzrm%2BXU4BXG7fXgE9hb868dhLQosRRZJGhRueaorQWTMh4J0FYj3L1TdjCDmGVClxTSo3m3yz9Imhs09glcJ1Sf5oBug%2BnWD8wKdemA%2BczeVMtL43tA2nmbzPMfad8BLWxinOFC9CYyDGV6Qrd7j5rlfv0P1ASwupyfROLf89E5qRa5YTCrsbvcIdGrUuofa&X-Amz-Signature=7133c3c0a9ef7a8b451c27ace964645bf3935f391f0b1f9ed892697dcf25cc12&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFQO3IR%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDtZ8gvTP4iBWhzZu7S1Sz14jF0%2FfC22ko2a4I6AkzOrwIhAOKDxd56fnf05pdHbiXlB2KdXMLNgeoLVv%2B9GYCUFfWdKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsfYjbi8erzsDwwXoq3AOsbe9iyeuZ14ddOGwCs13lBlcLUAhZD59QlVJW2N5dBpHb8PxwpUoNAqZuJ7F6rMd6UXgq6e7pqoSxwPyMTbRdDregjFMWQU5C5W%2FeMmTTr3tHLgBt2knCtKzmfWFB9Qf6Iph3YISyYAeJaNMltt9z5jv%2Fj7xcUHFxIr8ROG7gYGzA9Au0UcuAcryOelj%2BNirYUwS6%2BKneCLlIGaSe9AfGYcZJKDYjh7D8CD05faugU0W2X%2BFtaiPf214ozKg0IrfBDXnb4mgli5iCHdPgm3njlN%2B6AGsSijdNOtg0eJtr8vySy2%2FA6muQTulTdJeMgo6YbuuNZPXCzDAfNRWC0BkEM6bmSNQMrxCXWZJKOznQY0Rcuzuxt6j9Kh32vQ97TezsQpl%2B4v9U3amFhLndCH4vxhVtGZPZ7KkcK73nHmElSkEPeX46URL0%2FfPYjsvPJgcxXmdEMBrVl9TQ2CgF8m9vnSnw8NLP%2BuWCmAdxg0ApIYN19kv%2Big0k7v9TbH6KMcF85IsBg1NBXT163HjFuUlblvKyKBRwvoKunRkaJrGwFAbS7nRDzCSVONq3Kahi63VpgufRczQyMZufWgqkaEuS32YvkhuKBESWQPszwGydHkBRhB%2Fuqcn%2FcxtFKDCdjo7BBjqkAf67tbmFLl3XRM3dWYzq33k5HCxmlzrm%2BXU4BXG7fXgE9hb868dhLQosRRZJGhRueaorQWTMh4J0FYj3L1TdjCDmGVClxTSo3m3yz9Imhs09glcJ1Sf5oBug%2BnWD8wKdemA%2BczeVMtL43tA2nmbzPMfad8BLWxinOFC9CYyDGV6Qrd7j5rlfv0P1ASwupyfROLf89E5qRa5YTCrsbvcIdGrUuofa&X-Amz-Signature=cf092dea993cad013df37f38e0b3ef94130f32c79b23b55e761ecf2c3f439d5c&X-Amz-SignedHeaders=host&x-id=GetObject)
