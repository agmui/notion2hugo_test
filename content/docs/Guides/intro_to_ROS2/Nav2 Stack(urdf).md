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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562Q45SZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXAhkPxRFW5bF1NZMMftZtGozwpgqBm4pPZ9fABmNIwAiAa62DOcvaSQUJZ%2Fc8V6yFzgd3vPDEPaf0n7TPyJMPcFyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMHjkh6X2q818fObGtKtwDbGih8NPJ7FFXDUuHnNJkOI6h2bRPUItmijxluuMsCyINBxzY2eQOU4TVYHd6lx%2FXKtYPqB%2FwX%2Bmb43GcctPEjlUuizu%2BaNPKXmT203frf7NMoVervpSGrfM4AMFI8pU9zhSHbGzLJ8NUF%2BBamFH6Ko6dXoiRhQJuNa5slaFH%2FRkIfXTA0HOgGReXa9c6CYcPVSLt0EfABy%2Bps%2Bha6DQ89aFu79hz6W%2FRunYEsKMZ0695%2FI7%2FnhSN%2B%2BzJZH8FRn8AdaoAkeZg9asOPYmbzIH%2FCsvJIURKmxFMuQKN66Rd85OzGV7CHEuU8AGqpKJ92uHSCL7VxSQiEbWyvj%2BfeRJ8CRcxL4ZgyIO4bHyz%2BIBuCQnPBavTeX5rAK9e4OE4lGaBLjTItPI0vUNEkWsNIu7ATxiEEnHBsHTHxUr8yW4Uv3x02cszjDi8nRKNNC0ImM856iZsl13vXjBNGqnDCPzDV%2FSsz6yh2X74pRgacfuq9RAGoxMXd7dCfJUvuz1k48DHkS5B%2Be0T4PqeBkmy2HoEs81%2FRWq5Xhj9Sdb6k1s0CnjNcs7eBbyJ07NAUXZg%2BbPawBXfE84J1k6f6E2L8TPbOq5RpTtOrbzFPS%2FLuWF00QwA6g1w0a9uy7wEE4swjeigwwY6pgEKmOLS0UeY7PiXODOXRnxYuJVZdICmijpjApuE139R8ZCGsI52zreavcsoCJ4aVng3ukVRpESP1rdEU1FIRBJX94QZijwSev7vSaasanIhYmbV5MiqZYocGdtQQ7z%2BOuhTHzwlQZnyEum%2FZeIQWIERSW6uRxXQ%2Fpo8pW3sgzDD4S0LKnenlvkFsxvx5TNXJPHhWKI4Cd4NhJ%2B0awlu66S5iRZsoaRy&X-Amz-Signature=68bf0e521f61bcb29fb38d4f3e98ec2d0bb2b3880d44b1c60893cc62b457fe52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562Q45SZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXAhkPxRFW5bF1NZMMftZtGozwpgqBm4pPZ9fABmNIwAiAa62DOcvaSQUJZ%2Fc8V6yFzgd3vPDEPaf0n7TPyJMPcFyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMHjkh6X2q818fObGtKtwDbGih8NPJ7FFXDUuHnNJkOI6h2bRPUItmijxluuMsCyINBxzY2eQOU4TVYHd6lx%2FXKtYPqB%2FwX%2Bmb43GcctPEjlUuizu%2BaNPKXmT203frf7NMoVervpSGrfM4AMFI8pU9zhSHbGzLJ8NUF%2BBamFH6Ko6dXoiRhQJuNa5slaFH%2FRkIfXTA0HOgGReXa9c6CYcPVSLt0EfABy%2Bps%2Bha6DQ89aFu79hz6W%2FRunYEsKMZ0695%2FI7%2FnhSN%2B%2BzJZH8FRn8AdaoAkeZg9asOPYmbzIH%2FCsvJIURKmxFMuQKN66Rd85OzGV7CHEuU8AGqpKJ92uHSCL7VxSQiEbWyvj%2BfeRJ8CRcxL4ZgyIO4bHyz%2BIBuCQnPBavTeX5rAK9e4OE4lGaBLjTItPI0vUNEkWsNIu7ATxiEEnHBsHTHxUr8yW4Uv3x02cszjDi8nRKNNC0ImM856iZsl13vXjBNGqnDCPzDV%2FSsz6yh2X74pRgacfuq9RAGoxMXd7dCfJUvuz1k48DHkS5B%2Be0T4PqeBkmy2HoEs81%2FRWq5Xhj9Sdb6k1s0CnjNcs7eBbyJ07NAUXZg%2BbPawBXfE84J1k6f6E2L8TPbOq5RpTtOrbzFPS%2FLuWF00QwA6g1w0a9uy7wEE4swjeigwwY6pgEKmOLS0UeY7PiXODOXRnxYuJVZdICmijpjApuE139R8ZCGsI52zreavcsoCJ4aVng3ukVRpESP1rdEU1FIRBJX94QZijwSev7vSaasanIhYmbV5MiqZYocGdtQQ7z%2BOuhTHzwlQZnyEum%2FZeIQWIERSW6uRxXQ%2Fpo8pW3sgzDD4S0LKnenlvkFsxvx5TNXJPHhWKI4Cd4NhJ%2B0awlu66S5iRZsoaRy&X-Amz-Signature=d454d34f5328c258ef23931c5fb68c103c819acb5ce79075701b369b3b9b3f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562Q45SZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXAhkPxRFW5bF1NZMMftZtGozwpgqBm4pPZ9fABmNIwAiAa62DOcvaSQUJZ%2Fc8V6yFzgd3vPDEPaf0n7TPyJMPcFyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMHjkh6X2q818fObGtKtwDbGih8NPJ7FFXDUuHnNJkOI6h2bRPUItmijxluuMsCyINBxzY2eQOU4TVYHd6lx%2FXKtYPqB%2FwX%2Bmb43GcctPEjlUuizu%2BaNPKXmT203frf7NMoVervpSGrfM4AMFI8pU9zhSHbGzLJ8NUF%2BBamFH6Ko6dXoiRhQJuNa5slaFH%2FRkIfXTA0HOgGReXa9c6CYcPVSLt0EfABy%2Bps%2Bha6DQ89aFu79hz6W%2FRunYEsKMZ0695%2FI7%2FnhSN%2B%2BzJZH8FRn8AdaoAkeZg9asOPYmbzIH%2FCsvJIURKmxFMuQKN66Rd85OzGV7CHEuU8AGqpKJ92uHSCL7VxSQiEbWyvj%2BfeRJ8CRcxL4ZgyIO4bHyz%2BIBuCQnPBavTeX5rAK9e4OE4lGaBLjTItPI0vUNEkWsNIu7ATxiEEnHBsHTHxUr8yW4Uv3x02cszjDi8nRKNNC0ImM856iZsl13vXjBNGqnDCPzDV%2FSsz6yh2X74pRgacfuq9RAGoxMXd7dCfJUvuz1k48DHkS5B%2Be0T4PqeBkmy2HoEs81%2FRWq5Xhj9Sdb6k1s0CnjNcs7eBbyJ07NAUXZg%2BbPawBXfE84J1k6f6E2L8TPbOq5RpTtOrbzFPS%2FLuWF00QwA6g1w0a9uy7wEE4swjeigwwY6pgEKmOLS0UeY7PiXODOXRnxYuJVZdICmijpjApuE139R8ZCGsI52zreavcsoCJ4aVng3ukVRpESP1rdEU1FIRBJX94QZijwSev7vSaasanIhYmbV5MiqZYocGdtQQ7z%2BOuhTHzwlQZnyEum%2FZeIQWIERSW6uRxXQ%2Fpo8pW3sgzDD4S0LKnenlvkFsxvx5TNXJPHhWKI4Cd4NhJ%2B0awlu66S5iRZsoaRy&X-Amz-Signature=898439d51da2f4fd2f712bae337a4fd3e244191e76640c1fb4becccf2f7fde98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562Q45SZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXAhkPxRFW5bF1NZMMftZtGozwpgqBm4pPZ9fABmNIwAiAa62DOcvaSQUJZ%2Fc8V6yFzgd3vPDEPaf0n7TPyJMPcFyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMHjkh6X2q818fObGtKtwDbGih8NPJ7FFXDUuHnNJkOI6h2bRPUItmijxluuMsCyINBxzY2eQOU4TVYHd6lx%2FXKtYPqB%2FwX%2Bmb43GcctPEjlUuizu%2BaNPKXmT203frf7NMoVervpSGrfM4AMFI8pU9zhSHbGzLJ8NUF%2BBamFH6Ko6dXoiRhQJuNa5slaFH%2FRkIfXTA0HOgGReXa9c6CYcPVSLt0EfABy%2Bps%2Bha6DQ89aFu79hz6W%2FRunYEsKMZ0695%2FI7%2FnhSN%2B%2BzJZH8FRn8AdaoAkeZg9asOPYmbzIH%2FCsvJIURKmxFMuQKN66Rd85OzGV7CHEuU8AGqpKJ92uHSCL7VxSQiEbWyvj%2BfeRJ8CRcxL4ZgyIO4bHyz%2BIBuCQnPBavTeX5rAK9e4OE4lGaBLjTItPI0vUNEkWsNIu7ATxiEEnHBsHTHxUr8yW4Uv3x02cszjDi8nRKNNC0ImM856iZsl13vXjBNGqnDCPzDV%2FSsz6yh2X74pRgacfuq9RAGoxMXd7dCfJUvuz1k48DHkS5B%2Be0T4PqeBkmy2HoEs81%2FRWq5Xhj9Sdb6k1s0CnjNcs7eBbyJ07NAUXZg%2BbPawBXfE84J1k6f6E2L8TPbOq5RpTtOrbzFPS%2FLuWF00QwA6g1w0a9uy7wEE4swjeigwwY6pgEKmOLS0UeY7PiXODOXRnxYuJVZdICmijpjApuE139R8ZCGsI52zreavcsoCJ4aVng3ukVRpESP1rdEU1FIRBJX94QZijwSev7vSaasanIhYmbV5MiqZYocGdtQQ7z%2BOuhTHzwlQZnyEum%2FZeIQWIERSW6uRxXQ%2Fpo8pW3sgzDD4S0LKnenlvkFsxvx5TNXJPHhWKI4Cd4NhJ%2B0awlu66S5iRZsoaRy&X-Amz-Signature=9be02f37ac9d00a36f6a832cf0a42769c89372e6284aa9c37057c8dd4b849e62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562Q45SZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXAhkPxRFW5bF1NZMMftZtGozwpgqBm4pPZ9fABmNIwAiAa62DOcvaSQUJZ%2Fc8V6yFzgd3vPDEPaf0n7TPyJMPcFyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMHjkh6X2q818fObGtKtwDbGih8NPJ7FFXDUuHnNJkOI6h2bRPUItmijxluuMsCyINBxzY2eQOU4TVYHd6lx%2FXKtYPqB%2FwX%2Bmb43GcctPEjlUuizu%2BaNPKXmT203frf7NMoVervpSGrfM4AMFI8pU9zhSHbGzLJ8NUF%2BBamFH6Ko6dXoiRhQJuNa5slaFH%2FRkIfXTA0HOgGReXa9c6CYcPVSLt0EfABy%2Bps%2Bha6DQ89aFu79hz6W%2FRunYEsKMZ0695%2FI7%2FnhSN%2B%2BzJZH8FRn8AdaoAkeZg9asOPYmbzIH%2FCsvJIURKmxFMuQKN66Rd85OzGV7CHEuU8AGqpKJ92uHSCL7VxSQiEbWyvj%2BfeRJ8CRcxL4ZgyIO4bHyz%2BIBuCQnPBavTeX5rAK9e4OE4lGaBLjTItPI0vUNEkWsNIu7ATxiEEnHBsHTHxUr8yW4Uv3x02cszjDi8nRKNNC0ImM856iZsl13vXjBNGqnDCPzDV%2FSsz6yh2X74pRgacfuq9RAGoxMXd7dCfJUvuz1k48DHkS5B%2Be0T4PqeBkmy2HoEs81%2FRWq5Xhj9Sdb6k1s0CnjNcs7eBbyJ07NAUXZg%2BbPawBXfE84J1k6f6E2L8TPbOq5RpTtOrbzFPS%2FLuWF00QwA6g1w0a9uy7wEE4swjeigwwY6pgEKmOLS0UeY7PiXODOXRnxYuJVZdICmijpjApuE139R8ZCGsI52zreavcsoCJ4aVng3ukVRpESP1rdEU1FIRBJX94QZijwSev7vSaasanIhYmbV5MiqZYocGdtQQ7z%2BOuhTHzwlQZnyEum%2FZeIQWIERSW6uRxXQ%2Fpo8pW3sgzDD4S0LKnenlvkFsxvx5TNXJPHhWKI4Cd4NhJ%2B0awlu66S5iRZsoaRy&X-Amz-Signature=d1eec138c53055ec60f8ffe46281b468564f86b29f39b8efbe247458ab15a065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562Q45SZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAXAhkPxRFW5bF1NZMMftZtGozwpgqBm4pPZ9fABmNIwAiAa62DOcvaSQUJZ%2Fc8V6yFzgd3vPDEPaf0n7TPyJMPcFyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMHjkh6X2q818fObGtKtwDbGih8NPJ7FFXDUuHnNJkOI6h2bRPUItmijxluuMsCyINBxzY2eQOU4TVYHd6lx%2FXKtYPqB%2FwX%2Bmb43GcctPEjlUuizu%2BaNPKXmT203frf7NMoVervpSGrfM4AMFI8pU9zhSHbGzLJ8NUF%2BBamFH6Ko6dXoiRhQJuNa5slaFH%2FRkIfXTA0HOgGReXa9c6CYcPVSLt0EfABy%2Bps%2Bha6DQ89aFu79hz6W%2FRunYEsKMZ0695%2FI7%2FnhSN%2B%2BzJZH8FRn8AdaoAkeZg9asOPYmbzIH%2FCsvJIURKmxFMuQKN66Rd85OzGV7CHEuU8AGqpKJ92uHSCL7VxSQiEbWyvj%2BfeRJ8CRcxL4ZgyIO4bHyz%2BIBuCQnPBavTeX5rAK9e4OE4lGaBLjTItPI0vUNEkWsNIu7ATxiEEnHBsHTHxUr8yW4Uv3x02cszjDi8nRKNNC0ImM856iZsl13vXjBNGqnDCPzDV%2FSsz6yh2X74pRgacfuq9RAGoxMXd7dCfJUvuz1k48DHkS5B%2Be0T4PqeBkmy2HoEs81%2FRWq5Xhj9Sdb6k1s0CnjNcs7eBbyJ07NAUXZg%2BbPawBXfE84J1k6f6E2L8TPbOq5RpTtOrbzFPS%2FLuWF00QwA6g1w0a9uy7wEE4swjeigwwY6pgEKmOLS0UeY7PiXODOXRnxYuJVZdICmijpjApuE139R8ZCGsI52zreavcsoCJ4aVng3ukVRpESP1rdEU1FIRBJX94QZijwSev7vSaasanIhYmbV5MiqZYocGdtQQ7z%2BOuhTHzwlQZnyEum%2FZeIQWIERSW6uRxXQ%2Fpo8pW3sgzDD4S0LKnenlvkFsxvx5TNXJPHhWKI4Cd4NhJ%2B0awlu66S5iRZsoaRy&X-Amz-Signature=171ee72659764fa9ce2d7c117a3ff9652fbce4e57451bb43152b2f13ea5aee54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
