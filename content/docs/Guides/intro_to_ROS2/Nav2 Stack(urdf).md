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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755C433D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItbD9ZDn0jjs3IFuwYD0Rjb%2FerjunMNxIk6ujfLPTawIgS2NPAd1fsns7yoIlnp8iQCyGz22AN69XBscWUHfVgmMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJCo8dkG2%2FZc%2F0FQeCrcA7rIE%2BcXC%2BQkhdqN7fJINnGLYpvHeVQk5Qy7BHiZXHtlJlBDHzKFOPBNRjt8%2Fex3qLQSMwxq3nNfBWW4Yop0nySwGN0I3sO9GMIClTx5nBglX6%2FH2t4tlBNT3KTd5%2F6IiYhIH%2FnHY8oMpXnYMmwTF4n1tYzVGsftpEI%2Bj%2FG%2FUxKyb%2BnLoVw4vPbCWuNdm84%2FdPh%2FKprhRPnFvGUPnisYD54e%2BoWj%2FaL3yHsKzqcd22Tlv8VAJS30X5VD1jVtsoYW6X3eqtl4D7yYRwxXos58H7GSGB%2Fi%2FEOx1k7h5Hg2IcW1sOZfvBa02JlMSM1b10HQF9KSM8ajbOliisN5vhHr8KJZI7%2BQWQXJ6deisRdNXUhqVwwS1r73JU%2BgmBtvq8kSsJIDr35tcR7S1%2FzBBL4Dk3bO4XiJum0QTRwaj8WAcNWbC29yEdlW1bX4D7fffv9p0vQ5g7rWU6UK6madRIjP3mhj9vE%2Bzl%2FCZOxqfUdSVLrQJArxomYtfDCJDF27kYH2RbLvHJF6wBjNaDXsgGLvffv1ZCfYvpDHSzUjGweoEW6koN%2B8c%2BX5h4CfOvwxpaqHUbNhDRkNOWD1EE9B6FdNcQDStia0fqhKfQMQjlS4WZegEKFP%2BYfflgMu2o%2FUMPLa3r4GOqUBfQWtPP0tbwBX05NIvBKfBuphoOQ7TsArGQCDGZHjXsFHHpK3jHoY4XZ6bQHAVIdRigcBMy7w1S%2B6txVPCZsQyXhZaI21znavUCh2ZvS%2BamQ5hL%2BgaGFi%2BLuSGwRlmtL9g1rjfHJTSxxJ5%2BR2Hj9aQbGwcpG2GW4jWWrM9L4%2BkQ1Iz9h0JG1pA0jmqwDIfn289iBfZ3yh6SPAOIIoNNneGW%2BTEwro&X-Amz-Signature=e3381fff8bccc45425556096c01801f4c286beb1a5cd4778ec5007932991bd1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755C433D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItbD9ZDn0jjs3IFuwYD0Rjb%2FerjunMNxIk6ujfLPTawIgS2NPAd1fsns7yoIlnp8iQCyGz22AN69XBscWUHfVgmMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJCo8dkG2%2FZc%2F0FQeCrcA7rIE%2BcXC%2BQkhdqN7fJINnGLYpvHeVQk5Qy7BHiZXHtlJlBDHzKFOPBNRjt8%2Fex3qLQSMwxq3nNfBWW4Yop0nySwGN0I3sO9GMIClTx5nBglX6%2FH2t4tlBNT3KTd5%2F6IiYhIH%2FnHY8oMpXnYMmwTF4n1tYzVGsftpEI%2Bj%2FG%2FUxKyb%2BnLoVw4vPbCWuNdm84%2FdPh%2FKprhRPnFvGUPnisYD54e%2BoWj%2FaL3yHsKzqcd22Tlv8VAJS30X5VD1jVtsoYW6X3eqtl4D7yYRwxXos58H7GSGB%2Fi%2FEOx1k7h5Hg2IcW1sOZfvBa02JlMSM1b10HQF9KSM8ajbOliisN5vhHr8KJZI7%2BQWQXJ6deisRdNXUhqVwwS1r73JU%2BgmBtvq8kSsJIDr35tcR7S1%2FzBBL4Dk3bO4XiJum0QTRwaj8WAcNWbC29yEdlW1bX4D7fffv9p0vQ5g7rWU6UK6madRIjP3mhj9vE%2Bzl%2FCZOxqfUdSVLrQJArxomYtfDCJDF27kYH2RbLvHJF6wBjNaDXsgGLvffv1ZCfYvpDHSzUjGweoEW6koN%2B8c%2BX5h4CfOvwxpaqHUbNhDRkNOWD1EE9B6FdNcQDStia0fqhKfQMQjlS4WZegEKFP%2BYfflgMu2o%2FUMPLa3r4GOqUBfQWtPP0tbwBX05NIvBKfBuphoOQ7TsArGQCDGZHjXsFHHpK3jHoY4XZ6bQHAVIdRigcBMy7w1S%2B6txVPCZsQyXhZaI21znavUCh2ZvS%2BamQ5hL%2BgaGFi%2BLuSGwRlmtL9g1rjfHJTSxxJ5%2BR2Hj9aQbGwcpG2GW4jWWrM9L4%2BkQ1Iz9h0JG1pA0jmqwDIfn289iBfZ3yh6SPAOIIoNNneGW%2BTEwro&X-Amz-Signature=de23737c6f128a5444bb924d6c146f64988c77ed334e22d260d938fb57fd0c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755C433D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItbD9ZDn0jjs3IFuwYD0Rjb%2FerjunMNxIk6ujfLPTawIgS2NPAd1fsns7yoIlnp8iQCyGz22AN69XBscWUHfVgmMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJCo8dkG2%2FZc%2F0FQeCrcA7rIE%2BcXC%2BQkhdqN7fJINnGLYpvHeVQk5Qy7BHiZXHtlJlBDHzKFOPBNRjt8%2Fex3qLQSMwxq3nNfBWW4Yop0nySwGN0I3sO9GMIClTx5nBglX6%2FH2t4tlBNT3KTd5%2F6IiYhIH%2FnHY8oMpXnYMmwTF4n1tYzVGsftpEI%2Bj%2FG%2FUxKyb%2BnLoVw4vPbCWuNdm84%2FdPh%2FKprhRPnFvGUPnisYD54e%2BoWj%2FaL3yHsKzqcd22Tlv8VAJS30X5VD1jVtsoYW6X3eqtl4D7yYRwxXos58H7GSGB%2Fi%2FEOx1k7h5Hg2IcW1sOZfvBa02JlMSM1b10HQF9KSM8ajbOliisN5vhHr8KJZI7%2BQWQXJ6deisRdNXUhqVwwS1r73JU%2BgmBtvq8kSsJIDr35tcR7S1%2FzBBL4Dk3bO4XiJum0QTRwaj8WAcNWbC29yEdlW1bX4D7fffv9p0vQ5g7rWU6UK6madRIjP3mhj9vE%2Bzl%2FCZOxqfUdSVLrQJArxomYtfDCJDF27kYH2RbLvHJF6wBjNaDXsgGLvffv1ZCfYvpDHSzUjGweoEW6koN%2B8c%2BX5h4CfOvwxpaqHUbNhDRkNOWD1EE9B6FdNcQDStia0fqhKfQMQjlS4WZegEKFP%2BYfflgMu2o%2FUMPLa3r4GOqUBfQWtPP0tbwBX05NIvBKfBuphoOQ7TsArGQCDGZHjXsFHHpK3jHoY4XZ6bQHAVIdRigcBMy7w1S%2B6txVPCZsQyXhZaI21znavUCh2ZvS%2BamQ5hL%2BgaGFi%2BLuSGwRlmtL9g1rjfHJTSxxJ5%2BR2Hj9aQbGwcpG2GW4jWWrM9L4%2BkQ1Iz9h0JG1pA0jmqwDIfn289iBfZ3yh6SPAOIIoNNneGW%2BTEwro&X-Amz-Signature=91031fe28eb63b5213199c2fd91c5cbf1ffea007a88842910c689d078798027b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755C433D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItbD9ZDn0jjs3IFuwYD0Rjb%2FerjunMNxIk6ujfLPTawIgS2NPAd1fsns7yoIlnp8iQCyGz22AN69XBscWUHfVgmMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJCo8dkG2%2FZc%2F0FQeCrcA7rIE%2BcXC%2BQkhdqN7fJINnGLYpvHeVQk5Qy7BHiZXHtlJlBDHzKFOPBNRjt8%2Fex3qLQSMwxq3nNfBWW4Yop0nySwGN0I3sO9GMIClTx5nBglX6%2FH2t4tlBNT3KTd5%2F6IiYhIH%2FnHY8oMpXnYMmwTF4n1tYzVGsftpEI%2Bj%2FG%2FUxKyb%2BnLoVw4vPbCWuNdm84%2FdPh%2FKprhRPnFvGUPnisYD54e%2BoWj%2FaL3yHsKzqcd22Tlv8VAJS30X5VD1jVtsoYW6X3eqtl4D7yYRwxXos58H7GSGB%2Fi%2FEOx1k7h5Hg2IcW1sOZfvBa02JlMSM1b10HQF9KSM8ajbOliisN5vhHr8KJZI7%2BQWQXJ6deisRdNXUhqVwwS1r73JU%2BgmBtvq8kSsJIDr35tcR7S1%2FzBBL4Dk3bO4XiJum0QTRwaj8WAcNWbC29yEdlW1bX4D7fffv9p0vQ5g7rWU6UK6madRIjP3mhj9vE%2Bzl%2FCZOxqfUdSVLrQJArxomYtfDCJDF27kYH2RbLvHJF6wBjNaDXsgGLvffv1ZCfYvpDHSzUjGweoEW6koN%2B8c%2BX5h4CfOvwxpaqHUbNhDRkNOWD1EE9B6FdNcQDStia0fqhKfQMQjlS4WZegEKFP%2BYfflgMu2o%2FUMPLa3r4GOqUBfQWtPP0tbwBX05NIvBKfBuphoOQ7TsArGQCDGZHjXsFHHpK3jHoY4XZ6bQHAVIdRigcBMy7w1S%2B6txVPCZsQyXhZaI21znavUCh2ZvS%2BamQ5hL%2BgaGFi%2BLuSGwRlmtL9g1rjfHJTSxxJ5%2BR2Hj9aQbGwcpG2GW4jWWrM9L4%2BkQ1Iz9h0JG1pA0jmqwDIfn289iBfZ3yh6SPAOIIoNNneGW%2BTEwro&X-Amz-Signature=fcbb6c5637c8bb26a68cda473725c84c8d4545cf6199350284c5abdd5bf33061&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755C433D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItbD9ZDn0jjs3IFuwYD0Rjb%2FerjunMNxIk6ujfLPTawIgS2NPAd1fsns7yoIlnp8iQCyGz22AN69XBscWUHfVgmMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJCo8dkG2%2FZc%2F0FQeCrcA7rIE%2BcXC%2BQkhdqN7fJINnGLYpvHeVQk5Qy7BHiZXHtlJlBDHzKFOPBNRjt8%2Fex3qLQSMwxq3nNfBWW4Yop0nySwGN0I3sO9GMIClTx5nBglX6%2FH2t4tlBNT3KTd5%2F6IiYhIH%2FnHY8oMpXnYMmwTF4n1tYzVGsftpEI%2Bj%2FG%2FUxKyb%2BnLoVw4vPbCWuNdm84%2FdPh%2FKprhRPnFvGUPnisYD54e%2BoWj%2FaL3yHsKzqcd22Tlv8VAJS30X5VD1jVtsoYW6X3eqtl4D7yYRwxXos58H7GSGB%2Fi%2FEOx1k7h5Hg2IcW1sOZfvBa02JlMSM1b10HQF9KSM8ajbOliisN5vhHr8KJZI7%2BQWQXJ6deisRdNXUhqVwwS1r73JU%2BgmBtvq8kSsJIDr35tcR7S1%2FzBBL4Dk3bO4XiJum0QTRwaj8WAcNWbC29yEdlW1bX4D7fffv9p0vQ5g7rWU6UK6madRIjP3mhj9vE%2Bzl%2FCZOxqfUdSVLrQJArxomYtfDCJDF27kYH2RbLvHJF6wBjNaDXsgGLvffv1ZCfYvpDHSzUjGweoEW6koN%2B8c%2BX5h4CfOvwxpaqHUbNhDRkNOWD1EE9B6FdNcQDStia0fqhKfQMQjlS4WZegEKFP%2BYfflgMu2o%2FUMPLa3r4GOqUBfQWtPP0tbwBX05NIvBKfBuphoOQ7TsArGQCDGZHjXsFHHpK3jHoY4XZ6bQHAVIdRigcBMy7w1S%2B6txVPCZsQyXhZaI21znavUCh2ZvS%2BamQ5hL%2BgaGFi%2BLuSGwRlmtL9g1rjfHJTSxxJ5%2BR2Hj9aQbGwcpG2GW4jWWrM9L4%2BkQ1Iz9h0JG1pA0jmqwDIfn289iBfZ3yh6SPAOIIoNNneGW%2BTEwro&X-Amz-Signature=a767814b07e0e6049a4395e81570915467f5503faa805916b2ad9bb898834af6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755C433D%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDItbD9ZDn0jjs3IFuwYD0Rjb%2FerjunMNxIk6ujfLPTawIgS2NPAd1fsns7yoIlnp8iQCyGz22AN69XBscWUHfVgmMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJCo8dkG2%2FZc%2F0FQeCrcA7rIE%2BcXC%2BQkhdqN7fJINnGLYpvHeVQk5Qy7BHiZXHtlJlBDHzKFOPBNRjt8%2Fex3qLQSMwxq3nNfBWW4Yop0nySwGN0I3sO9GMIClTx5nBglX6%2FH2t4tlBNT3KTd5%2F6IiYhIH%2FnHY8oMpXnYMmwTF4n1tYzVGsftpEI%2Bj%2FG%2FUxKyb%2BnLoVw4vPbCWuNdm84%2FdPh%2FKprhRPnFvGUPnisYD54e%2BoWj%2FaL3yHsKzqcd22Tlv8VAJS30X5VD1jVtsoYW6X3eqtl4D7yYRwxXos58H7GSGB%2Fi%2FEOx1k7h5Hg2IcW1sOZfvBa02JlMSM1b10HQF9KSM8ajbOliisN5vhHr8KJZI7%2BQWQXJ6deisRdNXUhqVwwS1r73JU%2BgmBtvq8kSsJIDr35tcR7S1%2FzBBL4Dk3bO4XiJum0QTRwaj8WAcNWbC29yEdlW1bX4D7fffv9p0vQ5g7rWU6UK6madRIjP3mhj9vE%2Bzl%2FCZOxqfUdSVLrQJArxomYtfDCJDF27kYH2RbLvHJF6wBjNaDXsgGLvffv1ZCfYvpDHSzUjGweoEW6koN%2B8c%2BX5h4CfOvwxpaqHUbNhDRkNOWD1EE9B6FdNcQDStia0fqhKfQMQjlS4WZegEKFP%2BYfflgMu2o%2FUMPLa3r4GOqUBfQWtPP0tbwBX05NIvBKfBuphoOQ7TsArGQCDGZHjXsFHHpK3jHoY4XZ6bQHAVIdRigcBMy7w1S%2B6txVPCZsQyXhZaI21znavUCh2ZvS%2BamQ5hL%2BgaGFi%2BLuSGwRlmtL9g1rjfHJTSxxJ5%2BR2Hj9aQbGwcpG2GW4jWWrM9L4%2BkQ1Iz9h0JG1pA0jmqwDIfn289iBfZ3yh6SPAOIIoNNneGW%2BTEwro&X-Amz-Signature=f020484e72e6ed3e123d06bbde8f0e06b567ba734f162121d6b36b70db60a711&X-Amz-SignedHeaders=host&x-id=GetObject)
