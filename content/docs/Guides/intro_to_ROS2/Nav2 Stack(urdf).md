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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQSQPOW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLMJsjTwYUWFDgzAftGIcC3KLdfeW4nKOagcVQwOBsnQIhAOnQLEPq2SIhA%2Fo9XrPNuKtXOhg2W8AXPbSXAmOJ9EdXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZmFAJbHHyhBzOx8q3AOs3OQWOFhqcuUPWjmbIFyNKLpA%2FRbktQv0tz%2B%2Fb16mDWiq9iKOvU%2FG5xHE8zAw%2FkgiwhM%2B0nwdBVBHrTDkYWVci3dkkFHaXzahM92BFkOx4NcXRdLQs0LnfJtobmmklLschKFSLldeoSYVcj2ZhPnicMitnwwnZvYB8ycVqk%2BKimwmjxcU4WaK8kl90EIUozpCypHB8qRry3%2FLUVnaQgVPXLAjxdJG4sKqfeZ1txSstCdNz%2F73YFo%2B9dLSR9vFd9TYeJJCKMi6VylccpRnOZLR2T8kEP6Fdm0RfIe74was38mlJUzXaArSEf6sUICq9DowCHUsfPaohulWmGq7MVGtODGYTlVNxpetFP3egdYWWFIPnCyTL6%2F6%2BOQ5%2FYrAnMz9N65QrKY2y6qxChNNS11L807bInZbz2NZOW%2BdtvCCDQRbvqKmwjYXbiteakoSrZ8ImOjkUMD7ULI3BZnQxJ%2F6UwR1pjHk6F5tWsd%2FEFhe5yjXglybnq%2BIJTTUwAriYC4wgiUAcdyuiv%2ByjT2c97rF6nL%2FSBdecGUksS0hHwFHZ4154IaOsbZ74Rq4bu4Ht0EWwLWzJFM%2ByY%2BxywkI1FVferofu4Ia7zImeKdhDk6YXTNOnbiKf7tEsq%2F1xjD03OXBBjqkAeIrMTwgdd9%2Fx41nAWu7mOp91CvaR9K0jB48hwdq3l1ex%2F5l%2B%2FEWtLmBzpOQI7gFJCpKgmPrsNHikrsapx2uETyZcAj7CIL7F9WjRX%2BbyzF2LDktlUBgd4y1HIRRudCV1UE9Hu05RPCiJz6UUQLRMT2AwEjG9hLwhTPxnQzXXi6U5ePt4jV1hYh8uvDAqvtRuUzbAHyfR2dXbDSfka%2F6HC27NJz7&X-Amz-Signature=b62dbe06c6425442716c63e1af2ed46d6f6b83c187aeb1c8e3d0e1986164ec48&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQSQPOW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLMJsjTwYUWFDgzAftGIcC3KLdfeW4nKOagcVQwOBsnQIhAOnQLEPq2SIhA%2Fo9XrPNuKtXOhg2W8AXPbSXAmOJ9EdXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZmFAJbHHyhBzOx8q3AOs3OQWOFhqcuUPWjmbIFyNKLpA%2FRbktQv0tz%2B%2Fb16mDWiq9iKOvU%2FG5xHE8zAw%2FkgiwhM%2B0nwdBVBHrTDkYWVci3dkkFHaXzahM92BFkOx4NcXRdLQs0LnfJtobmmklLschKFSLldeoSYVcj2ZhPnicMitnwwnZvYB8ycVqk%2BKimwmjxcU4WaK8kl90EIUozpCypHB8qRry3%2FLUVnaQgVPXLAjxdJG4sKqfeZ1txSstCdNz%2F73YFo%2B9dLSR9vFd9TYeJJCKMi6VylccpRnOZLR2T8kEP6Fdm0RfIe74was38mlJUzXaArSEf6sUICq9DowCHUsfPaohulWmGq7MVGtODGYTlVNxpetFP3egdYWWFIPnCyTL6%2F6%2BOQ5%2FYrAnMz9N65QrKY2y6qxChNNS11L807bInZbz2NZOW%2BdtvCCDQRbvqKmwjYXbiteakoSrZ8ImOjkUMD7ULI3BZnQxJ%2F6UwR1pjHk6F5tWsd%2FEFhe5yjXglybnq%2BIJTTUwAriYC4wgiUAcdyuiv%2ByjT2c97rF6nL%2FSBdecGUksS0hHwFHZ4154IaOsbZ74Rq4bu4Ht0EWwLWzJFM%2ByY%2BxywkI1FVferofu4Ia7zImeKdhDk6YXTNOnbiKf7tEsq%2F1xjD03OXBBjqkAeIrMTwgdd9%2Fx41nAWu7mOp91CvaR9K0jB48hwdq3l1ex%2F5l%2B%2FEWtLmBzpOQI7gFJCpKgmPrsNHikrsapx2uETyZcAj7CIL7F9WjRX%2BbyzF2LDktlUBgd4y1HIRRudCV1UE9Hu05RPCiJz6UUQLRMT2AwEjG9hLwhTPxnQzXXi6U5ePt4jV1hYh8uvDAqvtRuUzbAHyfR2dXbDSfka%2F6HC27NJz7&X-Amz-Signature=80c2df396c0d21f94f54ca6167144bccaf25813614475a95800820f50e7ffdaf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQSQPOW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLMJsjTwYUWFDgzAftGIcC3KLdfeW4nKOagcVQwOBsnQIhAOnQLEPq2SIhA%2Fo9XrPNuKtXOhg2W8AXPbSXAmOJ9EdXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZmFAJbHHyhBzOx8q3AOs3OQWOFhqcuUPWjmbIFyNKLpA%2FRbktQv0tz%2B%2Fb16mDWiq9iKOvU%2FG5xHE8zAw%2FkgiwhM%2B0nwdBVBHrTDkYWVci3dkkFHaXzahM92BFkOx4NcXRdLQs0LnfJtobmmklLschKFSLldeoSYVcj2ZhPnicMitnwwnZvYB8ycVqk%2BKimwmjxcU4WaK8kl90EIUozpCypHB8qRry3%2FLUVnaQgVPXLAjxdJG4sKqfeZ1txSstCdNz%2F73YFo%2B9dLSR9vFd9TYeJJCKMi6VylccpRnOZLR2T8kEP6Fdm0RfIe74was38mlJUzXaArSEf6sUICq9DowCHUsfPaohulWmGq7MVGtODGYTlVNxpetFP3egdYWWFIPnCyTL6%2F6%2BOQ5%2FYrAnMz9N65QrKY2y6qxChNNS11L807bInZbz2NZOW%2BdtvCCDQRbvqKmwjYXbiteakoSrZ8ImOjkUMD7ULI3BZnQxJ%2F6UwR1pjHk6F5tWsd%2FEFhe5yjXglybnq%2BIJTTUwAriYC4wgiUAcdyuiv%2ByjT2c97rF6nL%2FSBdecGUksS0hHwFHZ4154IaOsbZ74Rq4bu4Ht0EWwLWzJFM%2ByY%2BxywkI1FVferofu4Ia7zImeKdhDk6YXTNOnbiKf7tEsq%2F1xjD03OXBBjqkAeIrMTwgdd9%2Fx41nAWu7mOp91CvaR9K0jB48hwdq3l1ex%2F5l%2B%2FEWtLmBzpOQI7gFJCpKgmPrsNHikrsapx2uETyZcAj7CIL7F9WjRX%2BbyzF2LDktlUBgd4y1HIRRudCV1UE9Hu05RPCiJz6UUQLRMT2AwEjG9hLwhTPxnQzXXi6U5ePt4jV1hYh8uvDAqvtRuUzbAHyfR2dXbDSfka%2F6HC27NJz7&X-Amz-Signature=f86fd003a911fdf1747f4ad30334530f077e21456b2e7a328c4c2e1b96263bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQSQPOW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLMJsjTwYUWFDgzAftGIcC3KLdfeW4nKOagcVQwOBsnQIhAOnQLEPq2SIhA%2Fo9XrPNuKtXOhg2W8AXPbSXAmOJ9EdXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZmFAJbHHyhBzOx8q3AOs3OQWOFhqcuUPWjmbIFyNKLpA%2FRbktQv0tz%2B%2Fb16mDWiq9iKOvU%2FG5xHE8zAw%2FkgiwhM%2B0nwdBVBHrTDkYWVci3dkkFHaXzahM92BFkOx4NcXRdLQs0LnfJtobmmklLschKFSLldeoSYVcj2ZhPnicMitnwwnZvYB8ycVqk%2BKimwmjxcU4WaK8kl90EIUozpCypHB8qRry3%2FLUVnaQgVPXLAjxdJG4sKqfeZ1txSstCdNz%2F73YFo%2B9dLSR9vFd9TYeJJCKMi6VylccpRnOZLR2T8kEP6Fdm0RfIe74was38mlJUzXaArSEf6sUICq9DowCHUsfPaohulWmGq7MVGtODGYTlVNxpetFP3egdYWWFIPnCyTL6%2F6%2BOQ5%2FYrAnMz9N65QrKY2y6qxChNNS11L807bInZbz2NZOW%2BdtvCCDQRbvqKmwjYXbiteakoSrZ8ImOjkUMD7ULI3BZnQxJ%2F6UwR1pjHk6F5tWsd%2FEFhe5yjXglybnq%2BIJTTUwAriYC4wgiUAcdyuiv%2ByjT2c97rF6nL%2FSBdecGUksS0hHwFHZ4154IaOsbZ74Rq4bu4Ht0EWwLWzJFM%2ByY%2BxywkI1FVferofu4Ia7zImeKdhDk6YXTNOnbiKf7tEsq%2F1xjD03OXBBjqkAeIrMTwgdd9%2Fx41nAWu7mOp91CvaR9K0jB48hwdq3l1ex%2F5l%2B%2FEWtLmBzpOQI7gFJCpKgmPrsNHikrsapx2uETyZcAj7CIL7F9WjRX%2BbyzF2LDktlUBgd4y1HIRRudCV1UE9Hu05RPCiJz6UUQLRMT2AwEjG9hLwhTPxnQzXXi6U5ePt4jV1hYh8uvDAqvtRuUzbAHyfR2dXbDSfka%2F6HC27NJz7&X-Amz-Signature=f9976c382fb5e88f09d3361a182cb7bd081826fc98e0ec029df1ce8cf40b1694&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQSQPOW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLMJsjTwYUWFDgzAftGIcC3KLdfeW4nKOagcVQwOBsnQIhAOnQLEPq2SIhA%2Fo9XrPNuKtXOhg2W8AXPbSXAmOJ9EdXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZmFAJbHHyhBzOx8q3AOs3OQWOFhqcuUPWjmbIFyNKLpA%2FRbktQv0tz%2B%2Fb16mDWiq9iKOvU%2FG5xHE8zAw%2FkgiwhM%2B0nwdBVBHrTDkYWVci3dkkFHaXzahM92BFkOx4NcXRdLQs0LnfJtobmmklLschKFSLldeoSYVcj2ZhPnicMitnwwnZvYB8ycVqk%2BKimwmjxcU4WaK8kl90EIUozpCypHB8qRry3%2FLUVnaQgVPXLAjxdJG4sKqfeZ1txSstCdNz%2F73YFo%2B9dLSR9vFd9TYeJJCKMi6VylccpRnOZLR2T8kEP6Fdm0RfIe74was38mlJUzXaArSEf6sUICq9DowCHUsfPaohulWmGq7MVGtODGYTlVNxpetFP3egdYWWFIPnCyTL6%2F6%2BOQ5%2FYrAnMz9N65QrKY2y6qxChNNS11L807bInZbz2NZOW%2BdtvCCDQRbvqKmwjYXbiteakoSrZ8ImOjkUMD7ULI3BZnQxJ%2F6UwR1pjHk6F5tWsd%2FEFhe5yjXglybnq%2BIJTTUwAriYC4wgiUAcdyuiv%2ByjT2c97rF6nL%2FSBdecGUksS0hHwFHZ4154IaOsbZ74Rq4bu4Ht0EWwLWzJFM%2ByY%2BxywkI1FVferofu4Ia7zImeKdhDk6YXTNOnbiKf7tEsq%2F1xjD03OXBBjqkAeIrMTwgdd9%2Fx41nAWu7mOp91CvaR9K0jB48hwdq3l1ex%2F5l%2B%2FEWtLmBzpOQI7gFJCpKgmPrsNHikrsapx2uETyZcAj7CIL7F9WjRX%2BbyzF2LDktlUBgd4y1HIRRudCV1UE9Hu05RPCiJz6UUQLRMT2AwEjG9hLwhTPxnQzXXi6U5ePt4jV1hYh8uvDAqvtRuUzbAHyfR2dXbDSfka%2F6HC27NJz7&X-Amz-Signature=6d577b3e690aa1d8454affd8148d9ac68b139fc19b5f25172182cd1cfb8254d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AQSQPOW%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLMJsjTwYUWFDgzAftGIcC3KLdfeW4nKOagcVQwOBsnQIhAOnQLEPq2SIhA%2Fo9XrPNuKtXOhg2W8AXPbSXAmOJ9EdXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLZmFAJbHHyhBzOx8q3AOs3OQWOFhqcuUPWjmbIFyNKLpA%2FRbktQv0tz%2B%2Fb16mDWiq9iKOvU%2FG5xHE8zAw%2FkgiwhM%2B0nwdBVBHrTDkYWVci3dkkFHaXzahM92BFkOx4NcXRdLQs0LnfJtobmmklLschKFSLldeoSYVcj2ZhPnicMitnwwnZvYB8ycVqk%2BKimwmjxcU4WaK8kl90EIUozpCypHB8qRry3%2FLUVnaQgVPXLAjxdJG4sKqfeZ1txSstCdNz%2F73YFo%2B9dLSR9vFd9TYeJJCKMi6VylccpRnOZLR2T8kEP6Fdm0RfIe74was38mlJUzXaArSEf6sUICq9DowCHUsfPaohulWmGq7MVGtODGYTlVNxpetFP3egdYWWFIPnCyTL6%2F6%2BOQ5%2FYrAnMz9N65QrKY2y6qxChNNS11L807bInZbz2NZOW%2BdtvCCDQRbvqKmwjYXbiteakoSrZ8ImOjkUMD7ULI3BZnQxJ%2F6UwR1pjHk6F5tWsd%2FEFhe5yjXglybnq%2BIJTTUwAriYC4wgiUAcdyuiv%2ByjT2c97rF6nL%2FSBdecGUksS0hHwFHZ4154IaOsbZ74Rq4bu4Ht0EWwLWzJFM%2ByY%2BxywkI1FVferofu4Ia7zImeKdhDk6YXTNOnbiKf7tEsq%2F1xjD03OXBBjqkAeIrMTwgdd9%2Fx41nAWu7mOp91CvaR9K0jB48hwdq3l1ex%2F5l%2B%2FEWtLmBzpOQI7gFJCpKgmPrsNHikrsapx2uETyZcAj7CIL7F9WjRX%2BbyzF2LDktlUBgd4y1HIRRudCV1UE9Hu05RPCiJz6UUQLRMT2AwEjG9hLwhTPxnQzXXi6U5ePt4jV1hYh8uvDAqvtRuUzbAHyfR2dXbDSfka%2F6HC27NJz7&X-Amz-Signature=fe03c44192a3c8f138fa4aabb3e12b11eed2fdcf671989dd2e582337111b6733&X-Amz-SignedHeaders=host&x-id=GetObject)
