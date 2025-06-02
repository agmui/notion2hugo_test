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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVJADP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCf7le7n14xHBmUEY0F%2FratB3VlRCDqCGqXP6nzTks4%2BwIhAIfLfMtJ%2FPEPokJG3HR9oQdHe86AxYtS4pTJu9JH8mrLKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqAxkwNObDcqHrkQMq3AOpjTSRbFED6F2FmnBiBs9R4wFebXyETd3Ede9%2B2aqZDURKSjOHtx6E92eBm8mxR4d6dmvEbfW1louosmSLJk9%2BcpeTh%2BJnHmiwZKZArXxBIbjO0KKaj91G8llI1Fs4zxbEiwI61IPbGecllppb2pb5CVCcaZa86RZsl4q957BV0NxUbehgPZ7T%2BImUtXlju%2B%2FMTb1ulFf%2FLkMW4IfCcYhr%2FneTU9ubuWOVf8h8MrnVYySxhH8a1SIYU7WMZAm8Gu61KYgENeoZOuIq5RZ209Va2ly5TC5mcKIzhEmjxqHjWaTi%2BRaPmfOYrxxceT0n8zlqMDfcV%2B%2BxyGN4YVIlEIZZNBGnVVJjhMB6XJrjiyTlpsEeTk3qyeezFm%2BY2rqYLrDjOUKFuiSlBhcj%2FGobS3d3DzFUcwVcmqmFRgPISJGEtfXTlbhs4El6PxSxsQQOF9ny4MM6izUueuZxprL54TRfb1v1t2b2OhlCurrkW1tXQtA25j9XHI8JhqczRbdwixi9CYxH0oaRZJobzFOQZehte0tACHYuyTzMJkFaICHXJsyggF3BB3JMXvwF%2FujvPiYBJqiAF2YUY2nLvLAl%2F7P6VrJ9oDYJUHyxg%2FH2UmMmSZYsFg01sN%2BtbzZqBjCJ4vfBBjqkARy1o8QDGBYJr2QMfiKLYSsEmlCSEO0HRmmXGQfR36TDrkzYCNAjuj2oafbBFnSWm70Y6CgJBQyT%2FUE%2BBDV9mWypypVztCJoC7o8%2BRDLNVUoHHbhHqyxYrahK40%2BDwOvKcy5J1Ljhcw%2B2JUpij85qV%2FnS5KWJyZJ9fAXDuYNITmX8D3XDmESL2pqG65VgxuAPuajptkGYKFmLsZY862IYqAzTxSp&X-Amz-Signature=21cf84a213f8d28da9a990bc98547f985e5a7734d53dabde41c07a193d5f2f27&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVJADP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCf7le7n14xHBmUEY0F%2FratB3VlRCDqCGqXP6nzTks4%2BwIhAIfLfMtJ%2FPEPokJG3HR9oQdHe86AxYtS4pTJu9JH8mrLKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqAxkwNObDcqHrkQMq3AOpjTSRbFED6F2FmnBiBs9R4wFebXyETd3Ede9%2B2aqZDURKSjOHtx6E92eBm8mxR4d6dmvEbfW1louosmSLJk9%2BcpeTh%2BJnHmiwZKZArXxBIbjO0KKaj91G8llI1Fs4zxbEiwI61IPbGecllppb2pb5CVCcaZa86RZsl4q957BV0NxUbehgPZ7T%2BImUtXlju%2B%2FMTb1ulFf%2FLkMW4IfCcYhr%2FneTU9ubuWOVf8h8MrnVYySxhH8a1SIYU7WMZAm8Gu61KYgENeoZOuIq5RZ209Va2ly5TC5mcKIzhEmjxqHjWaTi%2BRaPmfOYrxxceT0n8zlqMDfcV%2B%2BxyGN4YVIlEIZZNBGnVVJjhMB6XJrjiyTlpsEeTk3qyeezFm%2BY2rqYLrDjOUKFuiSlBhcj%2FGobS3d3DzFUcwVcmqmFRgPISJGEtfXTlbhs4El6PxSxsQQOF9ny4MM6izUueuZxprL54TRfb1v1t2b2OhlCurrkW1tXQtA25j9XHI8JhqczRbdwixi9CYxH0oaRZJobzFOQZehte0tACHYuyTzMJkFaICHXJsyggF3BB3JMXvwF%2FujvPiYBJqiAF2YUY2nLvLAl%2F7P6VrJ9oDYJUHyxg%2FH2UmMmSZYsFg01sN%2BtbzZqBjCJ4vfBBjqkARy1o8QDGBYJr2QMfiKLYSsEmlCSEO0HRmmXGQfR36TDrkzYCNAjuj2oafbBFnSWm70Y6CgJBQyT%2FUE%2BBDV9mWypypVztCJoC7o8%2BRDLNVUoHHbhHqyxYrahK40%2BDwOvKcy5J1Ljhcw%2B2JUpij85qV%2FnS5KWJyZJ9fAXDuYNITmX8D3XDmESL2pqG65VgxuAPuajptkGYKFmLsZY862IYqAzTxSp&X-Amz-Signature=fe8e1037b05dbca1219816dedaba52599a1f0f2e3bef1dd2b2fe4632a66b3960&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVJADP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCf7le7n14xHBmUEY0F%2FratB3VlRCDqCGqXP6nzTks4%2BwIhAIfLfMtJ%2FPEPokJG3HR9oQdHe86AxYtS4pTJu9JH8mrLKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqAxkwNObDcqHrkQMq3AOpjTSRbFED6F2FmnBiBs9R4wFebXyETd3Ede9%2B2aqZDURKSjOHtx6E92eBm8mxR4d6dmvEbfW1louosmSLJk9%2BcpeTh%2BJnHmiwZKZArXxBIbjO0KKaj91G8llI1Fs4zxbEiwI61IPbGecllppb2pb5CVCcaZa86RZsl4q957BV0NxUbehgPZ7T%2BImUtXlju%2B%2FMTb1ulFf%2FLkMW4IfCcYhr%2FneTU9ubuWOVf8h8MrnVYySxhH8a1SIYU7WMZAm8Gu61KYgENeoZOuIq5RZ209Va2ly5TC5mcKIzhEmjxqHjWaTi%2BRaPmfOYrxxceT0n8zlqMDfcV%2B%2BxyGN4YVIlEIZZNBGnVVJjhMB6XJrjiyTlpsEeTk3qyeezFm%2BY2rqYLrDjOUKFuiSlBhcj%2FGobS3d3DzFUcwVcmqmFRgPISJGEtfXTlbhs4El6PxSxsQQOF9ny4MM6izUueuZxprL54TRfb1v1t2b2OhlCurrkW1tXQtA25j9XHI8JhqczRbdwixi9CYxH0oaRZJobzFOQZehte0tACHYuyTzMJkFaICHXJsyggF3BB3JMXvwF%2FujvPiYBJqiAF2YUY2nLvLAl%2F7P6VrJ9oDYJUHyxg%2FH2UmMmSZYsFg01sN%2BtbzZqBjCJ4vfBBjqkARy1o8QDGBYJr2QMfiKLYSsEmlCSEO0HRmmXGQfR36TDrkzYCNAjuj2oafbBFnSWm70Y6CgJBQyT%2FUE%2BBDV9mWypypVztCJoC7o8%2BRDLNVUoHHbhHqyxYrahK40%2BDwOvKcy5J1Ljhcw%2B2JUpij85qV%2FnS5KWJyZJ9fAXDuYNITmX8D3XDmESL2pqG65VgxuAPuajptkGYKFmLsZY862IYqAzTxSp&X-Amz-Signature=a79fa43299d9607abb2584e6bb2117f4fc9d924509d4af1ca744abed63c3eb85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVJADP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCf7le7n14xHBmUEY0F%2FratB3VlRCDqCGqXP6nzTks4%2BwIhAIfLfMtJ%2FPEPokJG3HR9oQdHe86AxYtS4pTJu9JH8mrLKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqAxkwNObDcqHrkQMq3AOpjTSRbFED6F2FmnBiBs9R4wFebXyETd3Ede9%2B2aqZDURKSjOHtx6E92eBm8mxR4d6dmvEbfW1louosmSLJk9%2BcpeTh%2BJnHmiwZKZArXxBIbjO0KKaj91G8llI1Fs4zxbEiwI61IPbGecllppb2pb5CVCcaZa86RZsl4q957BV0NxUbehgPZ7T%2BImUtXlju%2B%2FMTb1ulFf%2FLkMW4IfCcYhr%2FneTU9ubuWOVf8h8MrnVYySxhH8a1SIYU7WMZAm8Gu61KYgENeoZOuIq5RZ209Va2ly5TC5mcKIzhEmjxqHjWaTi%2BRaPmfOYrxxceT0n8zlqMDfcV%2B%2BxyGN4YVIlEIZZNBGnVVJjhMB6XJrjiyTlpsEeTk3qyeezFm%2BY2rqYLrDjOUKFuiSlBhcj%2FGobS3d3DzFUcwVcmqmFRgPISJGEtfXTlbhs4El6PxSxsQQOF9ny4MM6izUueuZxprL54TRfb1v1t2b2OhlCurrkW1tXQtA25j9XHI8JhqczRbdwixi9CYxH0oaRZJobzFOQZehte0tACHYuyTzMJkFaICHXJsyggF3BB3JMXvwF%2FujvPiYBJqiAF2YUY2nLvLAl%2F7P6VrJ9oDYJUHyxg%2FH2UmMmSZYsFg01sN%2BtbzZqBjCJ4vfBBjqkARy1o8QDGBYJr2QMfiKLYSsEmlCSEO0HRmmXGQfR36TDrkzYCNAjuj2oafbBFnSWm70Y6CgJBQyT%2FUE%2BBDV9mWypypVztCJoC7o8%2BRDLNVUoHHbhHqyxYrahK40%2BDwOvKcy5J1Ljhcw%2B2JUpij85qV%2FnS5KWJyZJ9fAXDuYNITmX8D3XDmESL2pqG65VgxuAPuajptkGYKFmLsZY862IYqAzTxSp&X-Amz-Signature=da9424f8829effd76864c19febdad899e1430d4687950b589bed56beeac9ad05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVJADP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCf7le7n14xHBmUEY0F%2FratB3VlRCDqCGqXP6nzTks4%2BwIhAIfLfMtJ%2FPEPokJG3HR9oQdHe86AxYtS4pTJu9JH8mrLKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqAxkwNObDcqHrkQMq3AOpjTSRbFED6F2FmnBiBs9R4wFebXyETd3Ede9%2B2aqZDURKSjOHtx6E92eBm8mxR4d6dmvEbfW1louosmSLJk9%2BcpeTh%2BJnHmiwZKZArXxBIbjO0KKaj91G8llI1Fs4zxbEiwI61IPbGecllppb2pb5CVCcaZa86RZsl4q957BV0NxUbehgPZ7T%2BImUtXlju%2B%2FMTb1ulFf%2FLkMW4IfCcYhr%2FneTU9ubuWOVf8h8MrnVYySxhH8a1SIYU7WMZAm8Gu61KYgENeoZOuIq5RZ209Va2ly5TC5mcKIzhEmjxqHjWaTi%2BRaPmfOYrxxceT0n8zlqMDfcV%2B%2BxyGN4YVIlEIZZNBGnVVJjhMB6XJrjiyTlpsEeTk3qyeezFm%2BY2rqYLrDjOUKFuiSlBhcj%2FGobS3d3DzFUcwVcmqmFRgPISJGEtfXTlbhs4El6PxSxsQQOF9ny4MM6izUueuZxprL54TRfb1v1t2b2OhlCurrkW1tXQtA25j9XHI8JhqczRbdwixi9CYxH0oaRZJobzFOQZehte0tACHYuyTzMJkFaICHXJsyggF3BB3JMXvwF%2FujvPiYBJqiAF2YUY2nLvLAl%2F7P6VrJ9oDYJUHyxg%2FH2UmMmSZYsFg01sN%2BtbzZqBjCJ4vfBBjqkARy1o8QDGBYJr2QMfiKLYSsEmlCSEO0HRmmXGQfR36TDrkzYCNAjuj2oafbBFnSWm70Y6CgJBQyT%2FUE%2BBDV9mWypypVztCJoC7o8%2BRDLNVUoHHbhHqyxYrahK40%2BDwOvKcy5J1Ljhcw%2B2JUpij85qV%2FnS5KWJyZJ9fAXDuYNITmX8D3XDmESL2pqG65VgxuAPuajptkGYKFmLsZY862IYqAzTxSp&X-Amz-Signature=b7fe3c81428a694f8d027e0692b957a3560b5739f98f6f44528bc67aa77e501d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDVJADP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCf7le7n14xHBmUEY0F%2FratB3VlRCDqCGqXP6nzTks4%2BwIhAIfLfMtJ%2FPEPokJG3HR9oQdHe86AxYtS4pTJu9JH8mrLKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqAxkwNObDcqHrkQMq3AOpjTSRbFED6F2FmnBiBs9R4wFebXyETd3Ede9%2B2aqZDURKSjOHtx6E92eBm8mxR4d6dmvEbfW1louosmSLJk9%2BcpeTh%2BJnHmiwZKZArXxBIbjO0KKaj91G8llI1Fs4zxbEiwI61IPbGecllppb2pb5CVCcaZa86RZsl4q957BV0NxUbehgPZ7T%2BImUtXlju%2B%2FMTb1ulFf%2FLkMW4IfCcYhr%2FneTU9ubuWOVf8h8MrnVYySxhH8a1SIYU7WMZAm8Gu61KYgENeoZOuIq5RZ209Va2ly5TC5mcKIzhEmjxqHjWaTi%2BRaPmfOYrxxceT0n8zlqMDfcV%2B%2BxyGN4YVIlEIZZNBGnVVJjhMB6XJrjiyTlpsEeTk3qyeezFm%2BY2rqYLrDjOUKFuiSlBhcj%2FGobS3d3DzFUcwVcmqmFRgPISJGEtfXTlbhs4El6PxSxsQQOF9ny4MM6izUueuZxprL54TRfb1v1t2b2OhlCurrkW1tXQtA25j9XHI8JhqczRbdwixi9CYxH0oaRZJobzFOQZehte0tACHYuyTzMJkFaICHXJsyggF3BB3JMXvwF%2FujvPiYBJqiAF2YUY2nLvLAl%2F7P6VrJ9oDYJUHyxg%2FH2UmMmSZYsFg01sN%2BtbzZqBjCJ4vfBBjqkARy1o8QDGBYJr2QMfiKLYSsEmlCSEO0HRmmXGQfR36TDrkzYCNAjuj2oafbBFnSWm70Y6CgJBQyT%2FUE%2BBDV9mWypypVztCJoC7o8%2BRDLNVUoHHbhHqyxYrahK40%2BDwOvKcy5J1Ljhcw%2B2JUpij85qV%2FnS5KWJyZJ9fAXDuYNITmX8D3XDmESL2pqG65VgxuAPuajptkGYKFmLsZY862IYqAzTxSp&X-Amz-Signature=c77b4268ee477020b03bbc1bc63ed60c0cc5bfbb889094f3ed45421f917765c5&X-Amz-SignedHeaders=host&x-id=GetObject)
