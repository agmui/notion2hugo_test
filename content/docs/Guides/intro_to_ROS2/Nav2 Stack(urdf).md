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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQHAOUD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbws1OdDr9yGrCtVzgNB%2FUgfMJFy%2B%2FcSI5cz1YIFQQEQIgHf7AZXvdnwHiMa0FjKjR3wu8Bx13cxvkAmv9W9PrwZkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxeRfNLSCsHVsZ4CrcA1jWyM74gRF7SmUhW5Wd9Pjf0hJyCDMcmPN3MQl2el%2B47ayyaXEBw6PZ6I9T8qYDqhG4bAaCym6H6zdi9wH9VDmFERsclV%2FeLHIXXGzEWIGsVVcx5BEdGxFHdw%2FpjwAFQ6s3QdvIICjQxKF43wf5jbMjQuuQpipUHBlz%2Fya5MEMgyozO95PbljncEeA4SNvy%2BV2e318EQD%2Baus8JWpui4BUSa6GamHsqwCoYuPRQWzWp8ysOCZlwErI3tJqSKJHCEcO%2BPVowmony0TuvDN%2BpTDUa1GP1rihqLd5FNvZmLzgqHoRnLyjx%2FJ8aLm%2BURARFqRC5Mwhqqsodc8SHeO%2BETpkWaCg8wgTa5Bs7j8m%2BqNvkuwnGcTCgR7r2W%2BQuPVdfSntDuunGXfbEpdW8UKKBXK61D0HNg3TMPpQzcdA%2BTNE5qCMKQGdiDYPae9r30gK9ukMYDpDIbW4%2BpZvv7NyWRrPdpHJobghCluAnTEWaiyQheF9FDdqeUnPcudpxpRgIG87Lo8AwveQv9vY3TzkbPdUnoHnaLfqG40eYVSOKpB6zQXL9YlayBeL5GFKdYO3VfbI6ike7ndH7VxSxZGNClJN5EOq6n%2Fo8xUEuMKZuviLLu0BR7EM2Kyds5qfSMIu%2B7r8GOqUBBA8d8gxCl0xLjT8Laahn%2BU4xmNskIS0v13j3sfb73lJ%2FnYjBymPqU1U5VS3Sf2Z7UDqv0DZbI5sZTIEXtyRBAy11Pg87oloaAbiEMHzG%2FXCe8senAK3lAttmwQV5cA0uyKNE64s%2BvhpMpc%2FCpxGLNY51qeqa%2FHnGYbehP6c7HXqyPW9SQLmsbxA4WLusOuuVZcJxZGdouqHvNXaAJrvawzMx5VRJ&X-Amz-Signature=5fb6dd43e4f5b317da29c1810513125f834350c17252e3de0d349d291fb04dad&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQHAOUD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbws1OdDr9yGrCtVzgNB%2FUgfMJFy%2B%2FcSI5cz1YIFQQEQIgHf7AZXvdnwHiMa0FjKjR3wu8Bx13cxvkAmv9W9PrwZkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxeRfNLSCsHVsZ4CrcA1jWyM74gRF7SmUhW5Wd9Pjf0hJyCDMcmPN3MQl2el%2B47ayyaXEBw6PZ6I9T8qYDqhG4bAaCym6H6zdi9wH9VDmFERsclV%2FeLHIXXGzEWIGsVVcx5BEdGxFHdw%2FpjwAFQ6s3QdvIICjQxKF43wf5jbMjQuuQpipUHBlz%2Fya5MEMgyozO95PbljncEeA4SNvy%2BV2e318EQD%2Baus8JWpui4BUSa6GamHsqwCoYuPRQWzWp8ysOCZlwErI3tJqSKJHCEcO%2BPVowmony0TuvDN%2BpTDUa1GP1rihqLd5FNvZmLzgqHoRnLyjx%2FJ8aLm%2BURARFqRC5Mwhqqsodc8SHeO%2BETpkWaCg8wgTa5Bs7j8m%2BqNvkuwnGcTCgR7r2W%2BQuPVdfSntDuunGXfbEpdW8UKKBXK61D0HNg3TMPpQzcdA%2BTNE5qCMKQGdiDYPae9r30gK9ukMYDpDIbW4%2BpZvv7NyWRrPdpHJobghCluAnTEWaiyQheF9FDdqeUnPcudpxpRgIG87Lo8AwveQv9vY3TzkbPdUnoHnaLfqG40eYVSOKpB6zQXL9YlayBeL5GFKdYO3VfbI6ike7ndH7VxSxZGNClJN5EOq6n%2Fo8xUEuMKZuviLLu0BR7EM2Kyds5qfSMIu%2B7r8GOqUBBA8d8gxCl0xLjT8Laahn%2BU4xmNskIS0v13j3sfb73lJ%2FnYjBymPqU1U5VS3Sf2Z7UDqv0DZbI5sZTIEXtyRBAy11Pg87oloaAbiEMHzG%2FXCe8senAK3lAttmwQV5cA0uyKNE64s%2BvhpMpc%2FCpxGLNY51qeqa%2FHnGYbehP6c7HXqyPW9SQLmsbxA4WLusOuuVZcJxZGdouqHvNXaAJrvawzMx5VRJ&X-Amz-Signature=5acab1a3099af7c376945985ce7b724cf093d1bb0fd18881e0d0dcf490c0a41e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQHAOUD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbws1OdDr9yGrCtVzgNB%2FUgfMJFy%2B%2FcSI5cz1YIFQQEQIgHf7AZXvdnwHiMa0FjKjR3wu8Bx13cxvkAmv9W9PrwZkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxeRfNLSCsHVsZ4CrcA1jWyM74gRF7SmUhW5Wd9Pjf0hJyCDMcmPN3MQl2el%2B47ayyaXEBw6PZ6I9T8qYDqhG4bAaCym6H6zdi9wH9VDmFERsclV%2FeLHIXXGzEWIGsVVcx5BEdGxFHdw%2FpjwAFQ6s3QdvIICjQxKF43wf5jbMjQuuQpipUHBlz%2Fya5MEMgyozO95PbljncEeA4SNvy%2BV2e318EQD%2Baus8JWpui4BUSa6GamHsqwCoYuPRQWzWp8ysOCZlwErI3tJqSKJHCEcO%2BPVowmony0TuvDN%2BpTDUa1GP1rihqLd5FNvZmLzgqHoRnLyjx%2FJ8aLm%2BURARFqRC5Mwhqqsodc8SHeO%2BETpkWaCg8wgTa5Bs7j8m%2BqNvkuwnGcTCgR7r2W%2BQuPVdfSntDuunGXfbEpdW8UKKBXK61D0HNg3TMPpQzcdA%2BTNE5qCMKQGdiDYPae9r30gK9ukMYDpDIbW4%2BpZvv7NyWRrPdpHJobghCluAnTEWaiyQheF9FDdqeUnPcudpxpRgIG87Lo8AwveQv9vY3TzkbPdUnoHnaLfqG40eYVSOKpB6zQXL9YlayBeL5GFKdYO3VfbI6ike7ndH7VxSxZGNClJN5EOq6n%2Fo8xUEuMKZuviLLu0BR7EM2Kyds5qfSMIu%2B7r8GOqUBBA8d8gxCl0xLjT8Laahn%2BU4xmNskIS0v13j3sfb73lJ%2FnYjBymPqU1U5VS3Sf2Z7UDqv0DZbI5sZTIEXtyRBAy11Pg87oloaAbiEMHzG%2FXCe8senAK3lAttmwQV5cA0uyKNE64s%2BvhpMpc%2FCpxGLNY51qeqa%2FHnGYbehP6c7HXqyPW9SQLmsbxA4WLusOuuVZcJxZGdouqHvNXaAJrvawzMx5VRJ&X-Amz-Signature=28d8ca7320a5d7adc83563fd6764d46cfa484596c493fe7cb81235c9f3a28b79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQHAOUD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbws1OdDr9yGrCtVzgNB%2FUgfMJFy%2B%2FcSI5cz1YIFQQEQIgHf7AZXvdnwHiMa0FjKjR3wu8Bx13cxvkAmv9W9PrwZkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxeRfNLSCsHVsZ4CrcA1jWyM74gRF7SmUhW5Wd9Pjf0hJyCDMcmPN3MQl2el%2B47ayyaXEBw6PZ6I9T8qYDqhG4bAaCym6H6zdi9wH9VDmFERsclV%2FeLHIXXGzEWIGsVVcx5BEdGxFHdw%2FpjwAFQ6s3QdvIICjQxKF43wf5jbMjQuuQpipUHBlz%2Fya5MEMgyozO95PbljncEeA4SNvy%2BV2e318EQD%2Baus8JWpui4BUSa6GamHsqwCoYuPRQWzWp8ysOCZlwErI3tJqSKJHCEcO%2BPVowmony0TuvDN%2BpTDUa1GP1rihqLd5FNvZmLzgqHoRnLyjx%2FJ8aLm%2BURARFqRC5Mwhqqsodc8SHeO%2BETpkWaCg8wgTa5Bs7j8m%2BqNvkuwnGcTCgR7r2W%2BQuPVdfSntDuunGXfbEpdW8UKKBXK61D0HNg3TMPpQzcdA%2BTNE5qCMKQGdiDYPae9r30gK9ukMYDpDIbW4%2BpZvv7NyWRrPdpHJobghCluAnTEWaiyQheF9FDdqeUnPcudpxpRgIG87Lo8AwveQv9vY3TzkbPdUnoHnaLfqG40eYVSOKpB6zQXL9YlayBeL5GFKdYO3VfbI6ike7ndH7VxSxZGNClJN5EOq6n%2Fo8xUEuMKZuviLLu0BR7EM2Kyds5qfSMIu%2B7r8GOqUBBA8d8gxCl0xLjT8Laahn%2BU4xmNskIS0v13j3sfb73lJ%2FnYjBymPqU1U5VS3Sf2Z7UDqv0DZbI5sZTIEXtyRBAy11Pg87oloaAbiEMHzG%2FXCe8senAK3lAttmwQV5cA0uyKNE64s%2BvhpMpc%2FCpxGLNY51qeqa%2FHnGYbehP6c7HXqyPW9SQLmsbxA4WLusOuuVZcJxZGdouqHvNXaAJrvawzMx5VRJ&X-Amz-Signature=32e2e7a64bc88faddbfac1d2e42f0125a8c30c978695fe29c2d96dec6292ea64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQHAOUD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbws1OdDr9yGrCtVzgNB%2FUgfMJFy%2B%2FcSI5cz1YIFQQEQIgHf7AZXvdnwHiMa0FjKjR3wu8Bx13cxvkAmv9W9PrwZkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxeRfNLSCsHVsZ4CrcA1jWyM74gRF7SmUhW5Wd9Pjf0hJyCDMcmPN3MQl2el%2B47ayyaXEBw6PZ6I9T8qYDqhG4bAaCym6H6zdi9wH9VDmFERsclV%2FeLHIXXGzEWIGsVVcx5BEdGxFHdw%2FpjwAFQ6s3QdvIICjQxKF43wf5jbMjQuuQpipUHBlz%2Fya5MEMgyozO95PbljncEeA4SNvy%2BV2e318EQD%2Baus8JWpui4BUSa6GamHsqwCoYuPRQWzWp8ysOCZlwErI3tJqSKJHCEcO%2BPVowmony0TuvDN%2BpTDUa1GP1rihqLd5FNvZmLzgqHoRnLyjx%2FJ8aLm%2BURARFqRC5Mwhqqsodc8SHeO%2BETpkWaCg8wgTa5Bs7j8m%2BqNvkuwnGcTCgR7r2W%2BQuPVdfSntDuunGXfbEpdW8UKKBXK61D0HNg3TMPpQzcdA%2BTNE5qCMKQGdiDYPae9r30gK9ukMYDpDIbW4%2BpZvv7NyWRrPdpHJobghCluAnTEWaiyQheF9FDdqeUnPcudpxpRgIG87Lo8AwveQv9vY3TzkbPdUnoHnaLfqG40eYVSOKpB6zQXL9YlayBeL5GFKdYO3VfbI6ike7ndH7VxSxZGNClJN5EOq6n%2Fo8xUEuMKZuviLLu0BR7EM2Kyds5qfSMIu%2B7r8GOqUBBA8d8gxCl0xLjT8Laahn%2BU4xmNskIS0v13j3sfb73lJ%2FnYjBymPqU1U5VS3Sf2Z7UDqv0DZbI5sZTIEXtyRBAy11Pg87oloaAbiEMHzG%2FXCe8senAK3lAttmwQV5cA0uyKNE64s%2BvhpMpc%2FCpxGLNY51qeqa%2FHnGYbehP6c7HXqyPW9SQLmsbxA4WLusOuuVZcJxZGdouqHvNXaAJrvawzMx5VRJ&X-Amz-Signature=f706201601b689fec8496a2ddca4217739e8d010433bf1db823e942f796a6a36&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQHAOUD%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCbws1OdDr9yGrCtVzgNB%2FUgfMJFy%2B%2FcSI5cz1YIFQQEQIgHf7AZXvdnwHiMa0FjKjR3wu8Bx13cxvkAmv9W9PrwZkqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGxeRfNLSCsHVsZ4CrcA1jWyM74gRF7SmUhW5Wd9Pjf0hJyCDMcmPN3MQl2el%2B47ayyaXEBw6PZ6I9T8qYDqhG4bAaCym6H6zdi9wH9VDmFERsclV%2FeLHIXXGzEWIGsVVcx5BEdGxFHdw%2FpjwAFQ6s3QdvIICjQxKF43wf5jbMjQuuQpipUHBlz%2Fya5MEMgyozO95PbljncEeA4SNvy%2BV2e318EQD%2Baus8JWpui4BUSa6GamHsqwCoYuPRQWzWp8ysOCZlwErI3tJqSKJHCEcO%2BPVowmony0TuvDN%2BpTDUa1GP1rihqLd5FNvZmLzgqHoRnLyjx%2FJ8aLm%2BURARFqRC5Mwhqqsodc8SHeO%2BETpkWaCg8wgTa5Bs7j8m%2BqNvkuwnGcTCgR7r2W%2BQuPVdfSntDuunGXfbEpdW8UKKBXK61D0HNg3TMPpQzcdA%2BTNE5qCMKQGdiDYPae9r30gK9ukMYDpDIbW4%2BpZvv7NyWRrPdpHJobghCluAnTEWaiyQheF9FDdqeUnPcudpxpRgIG87Lo8AwveQv9vY3TzkbPdUnoHnaLfqG40eYVSOKpB6zQXL9YlayBeL5GFKdYO3VfbI6ike7ndH7VxSxZGNClJN5EOq6n%2Fo8xUEuMKZuviLLu0BR7EM2Kyds5qfSMIu%2B7r8GOqUBBA8d8gxCl0xLjT8Laahn%2BU4xmNskIS0v13j3sfb73lJ%2FnYjBymPqU1U5VS3Sf2Z7UDqv0DZbI5sZTIEXtyRBAy11Pg87oloaAbiEMHzG%2FXCe8senAK3lAttmwQV5cA0uyKNE64s%2BvhpMpc%2FCpxGLNY51qeqa%2FHnGYbehP6c7HXqyPW9SQLmsbxA4WLusOuuVZcJxZGdouqHvNXaAJrvawzMx5VRJ&X-Amz-Signature=8b25d846992d5144fc372aaa38ef3c07958fc480035cb93c38a61838b29c6b6d&X-Amz-SignedHeaders=host&x-id=GetObject)
