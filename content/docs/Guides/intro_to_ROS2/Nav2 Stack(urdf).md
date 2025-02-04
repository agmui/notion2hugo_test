---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBQ2GZ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICrFd362YiUNRZWnH7gYKPdDOxLts11MDSdZt40AEcz8AiAEKm6s8IeawAimFKkGgpx7aPZx7labQq5Eu%2BSeU%2ByZ4yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMS%2BdjLPrtERDORuDTKtwDD9e1t7HziD7jPdjDkOTaKmddhnalUQqXjKG7x69V0SUt9hvrAJqtaQpqHGqZ0k5d7z6nlyhsD%2BkS7QBykSooqcmCOsapB7LNxp0iDpORxdBQg5aRoPoepWKy0HB5EbBF%2FWTDPfR4GJIH9c%2FrrzvEPyvndeXpB%2F4VqYFcQQi37fZTiWiBwKDmKVl1k%2F9TW0p8Px%2Ff5DpQJhBSlhsA7%2B57O76Czx5BLzn5qtQQRnKZNXTQKT6r%2BpWf0UMQXKby%2F68L4az3QUIeIPpD67pJs51cHUAjf%2B7UPhJDRc6kqTryH1vK9YPhr51b2TVS5pLZabAcCM0slAex9kLI57v3EOM%2BhXhqtWHe5MCgmONcyPZoZ3QOjeGjFeai0KWGaZZ2iEpn%2BA7STRMJAC1beFTCVm4aXNXmbSUkD3PY3rK%2Bf0d9XNnbS1dUReeNuJDq9HBD2Q72Fh%2FyG%2B0PTjT9fMmN3psEAS72Gec1%2FY6tM5RMnKyFjfFkf0btSM8l%2Bdw38nYRFY6gOIknlVCXitomfabAMt2dRvJwhEon%2BOSqsewkljTnULzfxSGJMDHfZlhdMxiKsrzgX3f2G6z3OXjGzbypqV6WLqm5b2CItD0o0QXUGUTlg7KL23uAhNQy4uyHVf8wn5OHvQY6pgHDcpfKN4Zqrk5dM%2Bn2EiksY0o8iiYCTSuLVdB34nvSN44Dr9QjoiC2%2BUqPPlHULg%2FoL8NQs4cbnaPgxlbhfDFXpOoDp087CbJHImUw3DIXk%2FQ2sf4xxbDWF9xK4Uz768oqA05yGY5V4fRqF3nv25bbRwH3mhna3JXszhuHNm8Enp7JtWUsO2qdTrUw2cjRKX17u5GIFzvfVAmdTfg5puSCq6KlE4FY&X-Amz-Signature=d5a6e39d98f0f12b9d45a349aaf7d1f6c1b5b1f81e7e230204b5cce5a19b495d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBQ2GZ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICrFd362YiUNRZWnH7gYKPdDOxLts11MDSdZt40AEcz8AiAEKm6s8IeawAimFKkGgpx7aPZx7labQq5Eu%2BSeU%2ByZ4yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMS%2BdjLPrtERDORuDTKtwDD9e1t7HziD7jPdjDkOTaKmddhnalUQqXjKG7x69V0SUt9hvrAJqtaQpqHGqZ0k5d7z6nlyhsD%2BkS7QBykSooqcmCOsapB7LNxp0iDpORxdBQg5aRoPoepWKy0HB5EbBF%2FWTDPfR4GJIH9c%2FrrzvEPyvndeXpB%2F4VqYFcQQi37fZTiWiBwKDmKVl1k%2F9TW0p8Px%2Ff5DpQJhBSlhsA7%2B57O76Czx5BLzn5qtQQRnKZNXTQKT6r%2BpWf0UMQXKby%2F68L4az3QUIeIPpD67pJs51cHUAjf%2B7UPhJDRc6kqTryH1vK9YPhr51b2TVS5pLZabAcCM0slAex9kLI57v3EOM%2BhXhqtWHe5MCgmONcyPZoZ3QOjeGjFeai0KWGaZZ2iEpn%2BA7STRMJAC1beFTCVm4aXNXmbSUkD3PY3rK%2Bf0d9XNnbS1dUReeNuJDq9HBD2Q72Fh%2FyG%2B0PTjT9fMmN3psEAS72Gec1%2FY6tM5RMnKyFjfFkf0btSM8l%2Bdw38nYRFY6gOIknlVCXitomfabAMt2dRvJwhEon%2BOSqsewkljTnULzfxSGJMDHfZlhdMxiKsrzgX3f2G6z3OXjGzbypqV6WLqm5b2CItD0o0QXUGUTlg7KL23uAhNQy4uyHVf8wn5OHvQY6pgHDcpfKN4Zqrk5dM%2Bn2EiksY0o8iiYCTSuLVdB34nvSN44Dr9QjoiC2%2BUqPPlHULg%2FoL8NQs4cbnaPgxlbhfDFXpOoDp087CbJHImUw3DIXk%2FQ2sf4xxbDWF9xK4Uz768oqA05yGY5V4fRqF3nv25bbRwH3mhna3JXszhuHNm8Enp7JtWUsO2qdTrUw2cjRKX17u5GIFzvfVAmdTfg5puSCq6KlE4FY&X-Amz-Signature=63a0c8af57457311d4580e4ccba062e09400579737b484e21d40588db1ea2529&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBQ2GZ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICrFd362YiUNRZWnH7gYKPdDOxLts11MDSdZt40AEcz8AiAEKm6s8IeawAimFKkGgpx7aPZx7labQq5Eu%2BSeU%2ByZ4yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMS%2BdjLPrtERDORuDTKtwDD9e1t7HziD7jPdjDkOTaKmddhnalUQqXjKG7x69V0SUt9hvrAJqtaQpqHGqZ0k5d7z6nlyhsD%2BkS7QBykSooqcmCOsapB7LNxp0iDpORxdBQg5aRoPoepWKy0HB5EbBF%2FWTDPfR4GJIH9c%2FrrzvEPyvndeXpB%2F4VqYFcQQi37fZTiWiBwKDmKVl1k%2F9TW0p8Px%2Ff5DpQJhBSlhsA7%2B57O76Czx5BLzn5qtQQRnKZNXTQKT6r%2BpWf0UMQXKby%2F68L4az3QUIeIPpD67pJs51cHUAjf%2B7UPhJDRc6kqTryH1vK9YPhr51b2TVS5pLZabAcCM0slAex9kLI57v3EOM%2BhXhqtWHe5MCgmONcyPZoZ3QOjeGjFeai0KWGaZZ2iEpn%2BA7STRMJAC1beFTCVm4aXNXmbSUkD3PY3rK%2Bf0d9XNnbS1dUReeNuJDq9HBD2Q72Fh%2FyG%2B0PTjT9fMmN3psEAS72Gec1%2FY6tM5RMnKyFjfFkf0btSM8l%2Bdw38nYRFY6gOIknlVCXitomfabAMt2dRvJwhEon%2BOSqsewkljTnULzfxSGJMDHfZlhdMxiKsrzgX3f2G6z3OXjGzbypqV6WLqm5b2CItD0o0QXUGUTlg7KL23uAhNQy4uyHVf8wn5OHvQY6pgHDcpfKN4Zqrk5dM%2Bn2EiksY0o8iiYCTSuLVdB34nvSN44Dr9QjoiC2%2BUqPPlHULg%2FoL8NQs4cbnaPgxlbhfDFXpOoDp087CbJHImUw3DIXk%2FQ2sf4xxbDWF9xK4Uz768oqA05yGY5V4fRqF3nv25bbRwH3mhna3JXszhuHNm8Enp7JtWUsO2qdTrUw2cjRKX17u5GIFzvfVAmdTfg5puSCq6KlE4FY&X-Amz-Signature=8c2b6b54dcc45e327b77da2dab3127a21f1772aa0f7cdba7150d863b289794a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBQ2GZ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICrFd362YiUNRZWnH7gYKPdDOxLts11MDSdZt40AEcz8AiAEKm6s8IeawAimFKkGgpx7aPZx7labQq5Eu%2BSeU%2ByZ4yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMS%2BdjLPrtERDORuDTKtwDD9e1t7HziD7jPdjDkOTaKmddhnalUQqXjKG7x69V0SUt9hvrAJqtaQpqHGqZ0k5d7z6nlyhsD%2BkS7QBykSooqcmCOsapB7LNxp0iDpORxdBQg5aRoPoepWKy0HB5EbBF%2FWTDPfR4GJIH9c%2FrrzvEPyvndeXpB%2F4VqYFcQQi37fZTiWiBwKDmKVl1k%2F9TW0p8Px%2Ff5DpQJhBSlhsA7%2B57O76Czx5BLzn5qtQQRnKZNXTQKT6r%2BpWf0UMQXKby%2F68L4az3QUIeIPpD67pJs51cHUAjf%2B7UPhJDRc6kqTryH1vK9YPhr51b2TVS5pLZabAcCM0slAex9kLI57v3EOM%2BhXhqtWHe5MCgmONcyPZoZ3QOjeGjFeai0KWGaZZ2iEpn%2BA7STRMJAC1beFTCVm4aXNXmbSUkD3PY3rK%2Bf0d9XNnbS1dUReeNuJDq9HBD2Q72Fh%2FyG%2B0PTjT9fMmN3psEAS72Gec1%2FY6tM5RMnKyFjfFkf0btSM8l%2Bdw38nYRFY6gOIknlVCXitomfabAMt2dRvJwhEon%2BOSqsewkljTnULzfxSGJMDHfZlhdMxiKsrzgX3f2G6z3OXjGzbypqV6WLqm5b2CItD0o0QXUGUTlg7KL23uAhNQy4uyHVf8wn5OHvQY6pgHDcpfKN4Zqrk5dM%2Bn2EiksY0o8iiYCTSuLVdB34nvSN44Dr9QjoiC2%2BUqPPlHULg%2FoL8NQs4cbnaPgxlbhfDFXpOoDp087CbJHImUw3DIXk%2FQ2sf4xxbDWF9xK4Uz768oqA05yGY5V4fRqF3nv25bbRwH3mhna3JXszhuHNm8Enp7JtWUsO2qdTrUw2cjRKX17u5GIFzvfVAmdTfg5puSCq6KlE4FY&X-Amz-Signature=6e611fe14c8b3c15660a3f9a8f5df2e90ac4e11e5687603b93e0780c7af84081&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBQ2GZ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICrFd362YiUNRZWnH7gYKPdDOxLts11MDSdZt40AEcz8AiAEKm6s8IeawAimFKkGgpx7aPZx7labQq5Eu%2BSeU%2ByZ4yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMS%2BdjLPrtERDORuDTKtwDD9e1t7HziD7jPdjDkOTaKmddhnalUQqXjKG7x69V0SUt9hvrAJqtaQpqHGqZ0k5d7z6nlyhsD%2BkS7QBykSooqcmCOsapB7LNxp0iDpORxdBQg5aRoPoepWKy0HB5EbBF%2FWTDPfR4GJIH9c%2FrrzvEPyvndeXpB%2F4VqYFcQQi37fZTiWiBwKDmKVl1k%2F9TW0p8Px%2Ff5DpQJhBSlhsA7%2B57O76Czx5BLzn5qtQQRnKZNXTQKT6r%2BpWf0UMQXKby%2F68L4az3QUIeIPpD67pJs51cHUAjf%2B7UPhJDRc6kqTryH1vK9YPhr51b2TVS5pLZabAcCM0slAex9kLI57v3EOM%2BhXhqtWHe5MCgmONcyPZoZ3QOjeGjFeai0KWGaZZ2iEpn%2BA7STRMJAC1beFTCVm4aXNXmbSUkD3PY3rK%2Bf0d9XNnbS1dUReeNuJDq9HBD2Q72Fh%2FyG%2B0PTjT9fMmN3psEAS72Gec1%2FY6tM5RMnKyFjfFkf0btSM8l%2Bdw38nYRFY6gOIknlVCXitomfabAMt2dRvJwhEon%2BOSqsewkljTnULzfxSGJMDHfZlhdMxiKsrzgX3f2G6z3OXjGzbypqV6WLqm5b2CItD0o0QXUGUTlg7KL23uAhNQy4uyHVf8wn5OHvQY6pgHDcpfKN4Zqrk5dM%2Bn2EiksY0o8iiYCTSuLVdB34nvSN44Dr9QjoiC2%2BUqPPlHULg%2FoL8NQs4cbnaPgxlbhfDFXpOoDp087CbJHImUw3DIXk%2FQ2sf4xxbDWF9xK4Uz768oqA05yGY5V4fRqF3nv25bbRwH3mhna3JXszhuHNm8Enp7JtWUsO2qdTrUw2cjRKX17u5GIFzvfVAmdTfg5puSCq6KlE4FY&X-Amz-Signature=82301999c8145100695e7a07a0e3f21280ef6bdf2dc2389a2ca3b95192a53ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBQ2GZ6%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICrFd362YiUNRZWnH7gYKPdDOxLts11MDSdZt40AEcz8AiAEKm6s8IeawAimFKkGgpx7aPZx7labQq5Eu%2BSeU%2ByZ4yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMS%2BdjLPrtERDORuDTKtwDD9e1t7HziD7jPdjDkOTaKmddhnalUQqXjKG7x69V0SUt9hvrAJqtaQpqHGqZ0k5d7z6nlyhsD%2BkS7QBykSooqcmCOsapB7LNxp0iDpORxdBQg5aRoPoepWKy0HB5EbBF%2FWTDPfR4GJIH9c%2FrrzvEPyvndeXpB%2F4VqYFcQQi37fZTiWiBwKDmKVl1k%2F9TW0p8Px%2Ff5DpQJhBSlhsA7%2B57O76Czx5BLzn5qtQQRnKZNXTQKT6r%2BpWf0UMQXKby%2F68L4az3QUIeIPpD67pJs51cHUAjf%2B7UPhJDRc6kqTryH1vK9YPhr51b2TVS5pLZabAcCM0slAex9kLI57v3EOM%2BhXhqtWHe5MCgmONcyPZoZ3QOjeGjFeai0KWGaZZ2iEpn%2BA7STRMJAC1beFTCVm4aXNXmbSUkD3PY3rK%2Bf0d9XNnbS1dUReeNuJDq9HBD2Q72Fh%2FyG%2B0PTjT9fMmN3psEAS72Gec1%2FY6tM5RMnKyFjfFkf0btSM8l%2Bdw38nYRFY6gOIknlVCXitomfabAMt2dRvJwhEon%2BOSqsewkljTnULzfxSGJMDHfZlhdMxiKsrzgX3f2G6z3OXjGzbypqV6WLqm5b2CItD0o0QXUGUTlg7KL23uAhNQy4uyHVf8wn5OHvQY6pgHDcpfKN4Zqrk5dM%2Bn2EiksY0o8iiYCTSuLVdB34nvSN44Dr9QjoiC2%2BUqPPlHULg%2FoL8NQs4cbnaPgxlbhfDFXpOoDp087CbJHImUw3DIXk%2FQ2sf4xxbDWF9xK4Uz768oqA05yGY5V4fRqF3nv25bbRwH3mhna3JXszhuHNm8Enp7JtWUsO2qdTrUw2cjRKX17u5GIFzvfVAmdTfg5puSCq6KlE4FY&X-Amz-Signature=20a4f5ece085577d5f2893d4e73ecef0f7c40d6db7a4d27a872b563fdeb87925&X-Amz-SignedHeaders=host&x-id=GetObject)
