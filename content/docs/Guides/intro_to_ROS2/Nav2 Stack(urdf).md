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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMYWIPY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDUNeDt9%2FfJSNy8AeGWGldsumSiyM41QWJIMK5zqqkB0AIhAJqDd2C8OEa9XvzJ9%2FTrS6edDZK96%2B1Wlve%2BiXMEaHoEKv8DCBUQABoMNjM3NDIzMTgzODA1IgzXV875385jYFImHNMq3AOl8mKFyESLybO%2FtVFrOG3dp0PrMoVcit8IQ5jhIAqRY5WmQ2GxCxkCI%2Fx4n7393nrDA6pbbrfSoVR7wO1LfRpM1O8giVp74djiGtWl%2BfEQYdoSAT4jHAyPCmFwI10u7%2BJJShj8s77vyh%2FrdFbeyPgm3%2BptJUUSbJmwNEMd%2BpFl1dpBS%2BAgQiUP7H1PEquo2jy59Af8V5jHPRLJZv46p20UXPAohDl%2BWSZr6iIRcnjdLp0EFzWHrX%2BMfZSU4o1lUovZDQ1eNd63%2F4NI%2Fijeek9EwGpYm2Qw%2BxEIcqSGg0opFETZ3Xdc3nnwAsaDu47qoxOn3bl%2B47t2lvN1SgWjUqV4cEaSddyPTgjIONuYtUUFfxQ0rxG3RzMV2aOHyFAeIV%2Fc9Qx4QHPbiHUjJqNN14gj4LTQSUdjRbZ5ZiXRB8VIyywiyMRXbkpP2oxj6qxq2sQ6y0LuO0%2BkTud0nHle7R5O59f2AxFy3wAWIFN5aUJgoTQYAIAfsUbmOXTVluHcGZw%2F8JP4ZEqGKelSsUiqE3PgG0Em9A7G6K3pYeIvDGC5sNm50rnZrnLiplQFL9rlLzybSxj6zlowRRAAOuphA0bBCYmHrg5H8zTrqSyluWS9sNIM8oNKdkSzBjGLjTD7hZLBBjqkAST94eNTc4atbFJdpB72J99sj8vPer3pGGY6ZGYwp96yP8TptrcLHmxt2FpIT4sVQq3wZbgu3usN92ZO%2F0WxKobU2B5dsWTAzLXVXMmKT4vaGjn9cGtVUdoxFL3EEfZYIGouY%2B4FPFgPNgzdQFRQ4I3LPo%2FqQn1FMWIjOF6pUAaqOAecse983axhlam%2FFj0HkMSeb85JJjHthfhmE3oHqDdOhYNc&X-Amz-Signature=e9ff3233ca7605b1567ac40ea37795e4273e529f77f9ce8815560209912ea68c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMYWIPY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDUNeDt9%2FfJSNy8AeGWGldsumSiyM41QWJIMK5zqqkB0AIhAJqDd2C8OEa9XvzJ9%2FTrS6edDZK96%2B1Wlve%2BiXMEaHoEKv8DCBUQABoMNjM3NDIzMTgzODA1IgzXV875385jYFImHNMq3AOl8mKFyESLybO%2FtVFrOG3dp0PrMoVcit8IQ5jhIAqRY5WmQ2GxCxkCI%2Fx4n7393nrDA6pbbrfSoVR7wO1LfRpM1O8giVp74djiGtWl%2BfEQYdoSAT4jHAyPCmFwI10u7%2BJJShj8s77vyh%2FrdFbeyPgm3%2BptJUUSbJmwNEMd%2BpFl1dpBS%2BAgQiUP7H1PEquo2jy59Af8V5jHPRLJZv46p20UXPAohDl%2BWSZr6iIRcnjdLp0EFzWHrX%2BMfZSU4o1lUovZDQ1eNd63%2F4NI%2Fijeek9EwGpYm2Qw%2BxEIcqSGg0opFETZ3Xdc3nnwAsaDu47qoxOn3bl%2B47t2lvN1SgWjUqV4cEaSddyPTgjIONuYtUUFfxQ0rxG3RzMV2aOHyFAeIV%2Fc9Qx4QHPbiHUjJqNN14gj4LTQSUdjRbZ5ZiXRB8VIyywiyMRXbkpP2oxj6qxq2sQ6y0LuO0%2BkTud0nHle7R5O59f2AxFy3wAWIFN5aUJgoTQYAIAfsUbmOXTVluHcGZw%2F8JP4ZEqGKelSsUiqE3PgG0Em9A7G6K3pYeIvDGC5sNm50rnZrnLiplQFL9rlLzybSxj6zlowRRAAOuphA0bBCYmHrg5H8zTrqSyluWS9sNIM8oNKdkSzBjGLjTD7hZLBBjqkAST94eNTc4atbFJdpB72J99sj8vPer3pGGY6ZGYwp96yP8TptrcLHmxt2FpIT4sVQq3wZbgu3usN92ZO%2F0WxKobU2B5dsWTAzLXVXMmKT4vaGjn9cGtVUdoxFL3EEfZYIGouY%2B4FPFgPNgzdQFRQ4I3LPo%2FqQn1FMWIjOF6pUAaqOAecse983axhlam%2FFj0HkMSeb85JJjHthfhmE3oHqDdOhYNc&X-Amz-Signature=df27ca6223fe2b613a198c6bd7ca4b32217533e8242a47f49aeb602097520b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMYWIPY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDUNeDt9%2FfJSNy8AeGWGldsumSiyM41QWJIMK5zqqkB0AIhAJqDd2C8OEa9XvzJ9%2FTrS6edDZK96%2B1Wlve%2BiXMEaHoEKv8DCBUQABoMNjM3NDIzMTgzODA1IgzXV875385jYFImHNMq3AOl8mKFyESLybO%2FtVFrOG3dp0PrMoVcit8IQ5jhIAqRY5WmQ2GxCxkCI%2Fx4n7393nrDA6pbbrfSoVR7wO1LfRpM1O8giVp74djiGtWl%2BfEQYdoSAT4jHAyPCmFwI10u7%2BJJShj8s77vyh%2FrdFbeyPgm3%2BptJUUSbJmwNEMd%2BpFl1dpBS%2BAgQiUP7H1PEquo2jy59Af8V5jHPRLJZv46p20UXPAohDl%2BWSZr6iIRcnjdLp0EFzWHrX%2BMfZSU4o1lUovZDQ1eNd63%2F4NI%2Fijeek9EwGpYm2Qw%2BxEIcqSGg0opFETZ3Xdc3nnwAsaDu47qoxOn3bl%2B47t2lvN1SgWjUqV4cEaSddyPTgjIONuYtUUFfxQ0rxG3RzMV2aOHyFAeIV%2Fc9Qx4QHPbiHUjJqNN14gj4LTQSUdjRbZ5ZiXRB8VIyywiyMRXbkpP2oxj6qxq2sQ6y0LuO0%2BkTud0nHle7R5O59f2AxFy3wAWIFN5aUJgoTQYAIAfsUbmOXTVluHcGZw%2F8JP4ZEqGKelSsUiqE3PgG0Em9A7G6K3pYeIvDGC5sNm50rnZrnLiplQFL9rlLzybSxj6zlowRRAAOuphA0bBCYmHrg5H8zTrqSyluWS9sNIM8oNKdkSzBjGLjTD7hZLBBjqkAST94eNTc4atbFJdpB72J99sj8vPer3pGGY6ZGYwp96yP8TptrcLHmxt2FpIT4sVQq3wZbgu3usN92ZO%2F0WxKobU2B5dsWTAzLXVXMmKT4vaGjn9cGtVUdoxFL3EEfZYIGouY%2B4FPFgPNgzdQFRQ4I3LPo%2FqQn1FMWIjOF6pUAaqOAecse983axhlam%2FFj0HkMSeb85JJjHthfhmE3oHqDdOhYNc&X-Amz-Signature=467fda5832436afca8bf3824dfb659c2625da798db921eee4203809602fa4586&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMYWIPY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDUNeDt9%2FfJSNy8AeGWGldsumSiyM41QWJIMK5zqqkB0AIhAJqDd2C8OEa9XvzJ9%2FTrS6edDZK96%2B1Wlve%2BiXMEaHoEKv8DCBUQABoMNjM3NDIzMTgzODA1IgzXV875385jYFImHNMq3AOl8mKFyESLybO%2FtVFrOG3dp0PrMoVcit8IQ5jhIAqRY5WmQ2GxCxkCI%2Fx4n7393nrDA6pbbrfSoVR7wO1LfRpM1O8giVp74djiGtWl%2BfEQYdoSAT4jHAyPCmFwI10u7%2BJJShj8s77vyh%2FrdFbeyPgm3%2BptJUUSbJmwNEMd%2BpFl1dpBS%2BAgQiUP7H1PEquo2jy59Af8V5jHPRLJZv46p20UXPAohDl%2BWSZr6iIRcnjdLp0EFzWHrX%2BMfZSU4o1lUovZDQ1eNd63%2F4NI%2Fijeek9EwGpYm2Qw%2BxEIcqSGg0opFETZ3Xdc3nnwAsaDu47qoxOn3bl%2B47t2lvN1SgWjUqV4cEaSddyPTgjIONuYtUUFfxQ0rxG3RzMV2aOHyFAeIV%2Fc9Qx4QHPbiHUjJqNN14gj4LTQSUdjRbZ5ZiXRB8VIyywiyMRXbkpP2oxj6qxq2sQ6y0LuO0%2BkTud0nHle7R5O59f2AxFy3wAWIFN5aUJgoTQYAIAfsUbmOXTVluHcGZw%2F8JP4ZEqGKelSsUiqE3PgG0Em9A7G6K3pYeIvDGC5sNm50rnZrnLiplQFL9rlLzybSxj6zlowRRAAOuphA0bBCYmHrg5H8zTrqSyluWS9sNIM8oNKdkSzBjGLjTD7hZLBBjqkAST94eNTc4atbFJdpB72J99sj8vPer3pGGY6ZGYwp96yP8TptrcLHmxt2FpIT4sVQq3wZbgu3usN92ZO%2F0WxKobU2B5dsWTAzLXVXMmKT4vaGjn9cGtVUdoxFL3EEfZYIGouY%2B4FPFgPNgzdQFRQ4I3LPo%2FqQn1FMWIjOF6pUAaqOAecse983axhlam%2FFj0HkMSeb85JJjHthfhmE3oHqDdOhYNc&X-Amz-Signature=328f3afbb9d4194da8fbe93ba26109cecd36dd913434376f07ecdde508aaa656&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMYWIPY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDUNeDt9%2FfJSNy8AeGWGldsumSiyM41QWJIMK5zqqkB0AIhAJqDd2C8OEa9XvzJ9%2FTrS6edDZK96%2B1Wlve%2BiXMEaHoEKv8DCBUQABoMNjM3NDIzMTgzODA1IgzXV875385jYFImHNMq3AOl8mKFyESLybO%2FtVFrOG3dp0PrMoVcit8IQ5jhIAqRY5WmQ2GxCxkCI%2Fx4n7393nrDA6pbbrfSoVR7wO1LfRpM1O8giVp74djiGtWl%2BfEQYdoSAT4jHAyPCmFwI10u7%2BJJShj8s77vyh%2FrdFbeyPgm3%2BptJUUSbJmwNEMd%2BpFl1dpBS%2BAgQiUP7H1PEquo2jy59Af8V5jHPRLJZv46p20UXPAohDl%2BWSZr6iIRcnjdLp0EFzWHrX%2BMfZSU4o1lUovZDQ1eNd63%2F4NI%2Fijeek9EwGpYm2Qw%2BxEIcqSGg0opFETZ3Xdc3nnwAsaDu47qoxOn3bl%2B47t2lvN1SgWjUqV4cEaSddyPTgjIONuYtUUFfxQ0rxG3RzMV2aOHyFAeIV%2Fc9Qx4QHPbiHUjJqNN14gj4LTQSUdjRbZ5ZiXRB8VIyywiyMRXbkpP2oxj6qxq2sQ6y0LuO0%2BkTud0nHle7R5O59f2AxFy3wAWIFN5aUJgoTQYAIAfsUbmOXTVluHcGZw%2F8JP4ZEqGKelSsUiqE3PgG0Em9A7G6K3pYeIvDGC5sNm50rnZrnLiplQFL9rlLzybSxj6zlowRRAAOuphA0bBCYmHrg5H8zTrqSyluWS9sNIM8oNKdkSzBjGLjTD7hZLBBjqkAST94eNTc4atbFJdpB72J99sj8vPer3pGGY6ZGYwp96yP8TptrcLHmxt2FpIT4sVQq3wZbgu3usN92ZO%2F0WxKobU2B5dsWTAzLXVXMmKT4vaGjn9cGtVUdoxFL3EEfZYIGouY%2B4FPFgPNgzdQFRQ4I3LPo%2FqQn1FMWIjOF6pUAaqOAecse983axhlam%2FFj0HkMSeb85JJjHthfhmE3oHqDdOhYNc&X-Amz-Signature=840eb4b17ea0289258270b5427c4a94d88c18bf6e739cb396cb3a4ddf6ec73fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNMYWIPY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDUNeDt9%2FfJSNy8AeGWGldsumSiyM41QWJIMK5zqqkB0AIhAJqDd2C8OEa9XvzJ9%2FTrS6edDZK96%2B1Wlve%2BiXMEaHoEKv8DCBUQABoMNjM3NDIzMTgzODA1IgzXV875385jYFImHNMq3AOl8mKFyESLybO%2FtVFrOG3dp0PrMoVcit8IQ5jhIAqRY5WmQ2GxCxkCI%2Fx4n7393nrDA6pbbrfSoVR7wO1LfRpM1O8giVp74djiGtWl%2BfEQYdoSAT4jHAyPCmFwI10u7%2BJJShj8s77vyh%2FrdFbeyPgm3%2BptJUUSbJmwNEMd%2BpFl1dpBS%2BAgQiUP7H1PEquo2jy59Af8V5jHPRLJZv46p20UXPAohDl%2BWSZr6iIRcnjdLp0EFzWHrX%2BMfZSU4o1lUovZDQ1eNd63%2F4NI%2Fijeek9EwGpYm2Qw%2BxEIcqSGg0opFETZ3Xdc3nnwAsaDu47qoxOn3bl%2B47t2lvN1SgWjUqV4cEaSddyPTgjIONuYtUUFfxQ0rxG3RzMV2aOHyFAeIV%2Fc9Qx4QHPbiHUjJqNN14gj4LTQSUdjRbZ5ZiXRB8VIyywiyMRXbkpP2oxj6qxq2sQ6y0LuO0%2BkTud0nHle7R5O59f2AxFy3wAWIFN5aUJgoTQYAIAfsUbmOXTVluHcGZw%2F8JP4ZEqGKelSsUiqE3PgG0Em9A7G6K3pYeIvDGC5sNm50rnZrnLiplQFL9rlLzybSxj6zlowRRAAOuphA0bBCYmHrg5H8zTrqSyluWS9sNIM8oNKdkSzBjGLjTD7hZLBBjqkAST94eNTc4atbFJdpB72J99sj8vPer3pGGY6ZGYwp96yP8TptrcLHmxt2FpIT4sVQq3wZbgu3usN92ZO%2F0WxKobU2B5dsWTAzLXVXMmKT4vaGjn9cGtVUdoxFL3EEfZYIGouY%2B4FPFgPNgzdQFRQ4I3LPo%2FqQn1FMWIjOF6pUAaqOAecse983axhlam%2FFj0HkMSeb85JJjHthfhmE3oHqDdOhYNc&X-Amz-Signature=1480a428cb2a90ed44b658e5b9ad7a73391c36bec8a29988a2feee0392fd29fa&X-Amz-SignedHeaders=host&x-id=GetObject)
