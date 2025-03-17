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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5JTIUO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJb05ocCzlWdvIsE0aczq0BBtShV1JFpAqG4r9%2FOP13AiBKd%2BxrT3Rg23mqayMZQTq9kRfGdbGkc08exsHWcDTvQyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM91Pp4aXZc2ag2CLLKtwDsQf9QinONJC85272xzfSJpEkdULjbAAEfQb%2FBdn%2BzaGGoZN%2FTjn4n3xmpbWUtlM7InOo1tv7ucs47Bixwji15c8skZ1iIZbblV%2BKNx5SaLb%2BuiUIq4pr9cY4uI23S0PaAlEc%2F44eJyR4wdX6pA%2BHQ%2FMwsI%2BW2w73mCjIKJm0arsULjNaVpiKA8awsjmMQVdyrLkp1zse4a0x87exRa%2Fs0moFYRiKnuoG2S1Rc%2B9cRKHUSSEUNKdzgKKVCsUBMG7NohIB2dV3TBrD7QSOrnwfiJfjDFHM35PKLdBLp0CXvRxwrpEZg7g41vcahMdjTns9kiKtGSvqwmOyoJ1%2BZaoeCfs%2FFGLUbZ1LDr9oIAfw%2FdhbhbHL2FfPXyXypOr4yZZZmjjRahGEzMMxmM0WXLAC80n5Py18zpDOTLjRyk8C1SuqPHtOlUmqzZvT%2FEKle%2FOrmX93DmV%2BjV7AHf0Vf4T9vnIO%2BAzq08ZUdBVI2q3eyUigicFA0Tvrh6vlZtaRf9Mx0aiD7WXLOS9dLZXWc1gn2O3ozuSkRUQyJJIyP%2FvAvlg8zPb%2BTxwtEFVaPrPNvasRj6CjOv%2FHem2QkXu5Q66kcqUZzVd9fM7XR8ZxJ1TauGJYLz7pTt6qD0OqgWkwosrgvgY6pgGEcmPcaNEuGTgRbqFjpfynbSHwrjyYm9AxKYu1JT04iUcXXg9qErhn0DKl%2B0cBSAj17p8hjO4b1pR0aBFLJJvt4hpGkfNTwRFpBuf5mxNnbsWD%2BPq5bq5%2BCMHbghtFfrKRCy8E7oZdQwtIrRrg%2BsjPRDLWG%2B7PniKYyP3e4e0vlknhM2y7EZ6SKG%2Fo9rV%2BOaSmGFkVpzkqWDVeZjZsj3fb3D32wwUB&X-Amz-Signature=b4bd69077bf111b3fd240a9e2d9f90609022f0f13479cc6a58384cb89df4fb5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5JTIUO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJb05ocCzlWdvIsE0aczq0BBtShV1JFpAqG4r9%2FOP13AiBKd%2BxrT3Rg23mqayMZQTq9kRfGdbGkc08exsHWcDTvQyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM91Pp4aXZc2ag2CLLKtwDsQf9QinONJC85272xzfSJpEkdULjbAAEfQb%2FBdn%2BzaGGoZN%2FTjn4n3xmpbWUtlM7InOo1tv7ucs47Bixwji15c8skZ1iIZbblV%2BKNx5SaLb%2BuiUIq4pr9cY4uI23S0PaAlEc%2F44eJyR4wdX6pA%2BHQ%2FMwsI%2BW2w73mCjIKJm0arsULjNaVpiKA8awsjmMQVdyrLkp1zse4a0x87exRa%2Fs0moFYRiKnuoG2S1Rc%2B9cRKHUSSEUNKdzgKKVCsUBMG7NohIB2dV3TBrD7QSOrnwfiJfjDFHM35PKLdBLp0CXvRxwrpEZg7g41vcahMdjTns9kiKtGSvqwmOyoJ1%2BZaoeCfs%2FFGLUbZ1LDr9oIAfw%2FdhbhbHL2FfPXyXypOr4yZZZmjjRahGEzMMxmM0WXLAC80n5Py18zpDOTLjRyk8C1SuqPHtOlUmqzZvT%2FEKle%2FOrmX93DmV%2BjV7AHf0Vf4T9vnIO%2BAzq08ZUdBVI2q3eyUigicFA0Tvrh6vlZtaRf9Mx0aiD7WXLOS9dLZXWc1gn2O3ozuSkRUQyJJIyP%2FvAvlg8zPb%2BTxwtEFVaPrPNvasRj6CjOv%2FHem2QkXu5Q66kcqUZzVd9fM7XR8ZxJ1TauGJYLz7pTt6qD0OqgWkwosrgvgY6pgGEcmPcaNEuGTgRbqFjpfynbSHwrjyYm9AxKYu1JT04iUcXXg9qErhn0DKl%2B0cBSAj17p8hjO4b1pR0aBFLJJvt4hpGkfNTwRFpBuf5mxNnbsWD%2BPq5bq5%2BCMHbghtFfrKRCy8E7oZdQwtIrRrg%2BsjPRDLWG%2B7PniKYyP3e4e0vlknhM2y7EZ6SKG%2Fo9rV%2BOaSmGFkVpzkqWDVeZjZsj3fb3D32wwUB&X-Amz-Signature=c8fca2fd459f55f8d333bf98c9d5371e44a8527a280b50c09dbef1c0a36bad95&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5JTIUO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJb05ocCzlWdvIsE0aczq0BBtShV1JFpAqG4r9%2FOP13AiBKd%2BxrT3Rg23mqayMZQTq9kRfGdbGkc08exsHWcDTvQyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM91Pp4aXZc2ag2CLLKtwDsQf9QinONJC85272xzfSJpEkdULjbAAEfQb%2FBdn%2BzaGGoZN%2FTjn4n3xmpbWUtlM7InOo1tv7ucs47Bixwji15c8skZ1iIZbblV%2BKNx5SaLb%2BuiUIq4pr9cY4uI23S0PaAlEc%2F44eJyR4wdX6pA%2BHQ%2FMwsI%2BW2w73mCjIKJm0arsULjNaVpiKA8awsjmMQVdyrLkp1zse4a0x87exRa%2Fs0moFYRiKnuoG2S1Rc%2B9cRKHUSSEUNKdzgKKVCsUBMG7NohIB2dV3TBrD7QSOrnwfiJfjDFHM35PKLdBLp0CXvRxwrpEZg7g41vcahMdjTns9kiKtGSvqwmOyoJ1%2BZaoeCfs%2FFGLUbZ1LDr9oIAfw%2FdhbhbHL2FfPXyXypOr4yZZZmjjRahGEzMMxmM0WXLAC80n5Py18zpDOTLjRyk8C1SuqPHtOlUmqzZvT%2FEKle%2FOrmX93DmV%2BjV7AHf0Vf4T9vnIO%2BAzq08ZUdBVI2q3eyUigicFA0Tvrh6vlZtaRf9Mx0aiD7WXLOS9dLZXWc1gn2O3ozuSkRUQyJJIyP%2FvAvlg8zPb%2BTxwtEFVaPrPNvasRj6CjOv%2FHem2QkXu5Q66kcqUZzVd9fM7XR8ZxJ1TauGJYLz7pTt6qD0OqgWkwosrgvgY6pgGEcmPcaNEuGTgRbqFjpfynbSHwrjyYm9AxKYu1JT04iUcXXg9qErhn0DKl%2B0cBSAj17p8hjO4b1pR0aBFLJJvt4hpGkfNTwRFpBuf5mxNnbsWD%2BPq5bq5%2BCMHbghtFfrKRCy8E7oZdQwtIrRrg%2BsjPRDLWG%2B7PniKYyP3e4e0vlknhM2y7EZ6SKG%2Fo9rV%2BOaSmGFkVpzkqWDVeZjZsj3fb3D32wwUB&X-Amz-Signature=de253b65e10b057bde37483444c1430282a0e8b9327a38052952a5fa6a1c5c06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5JTIUO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJb05ocCzlWdvIsE0aczq0BBtShV1JFpAqG4r9%2FOP13AiBKd%2BxrT3Rg23mqayMZQTq9kRfGdbGkc08exsHWcDTvQyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM91Pp4aXZc2ag2CLLKtwDsQf9QinONJC85272xzfSJpEkdULjbAAEfQb%2FBdn%2BzaGGoZN%2FTjn4n3xmpbWUtlM7InOo1tv7ucs47Bixwji15c8skZ1iIZbblV%2BKNx5SaLb%2BuiUIq4pr9cY4uI23S0PaAlEc%2F44eJyR4wdX6pA%2BHQ%2FMwsI%2BW2w73mCjIKJm0arsULjNaVpiKA8awsjmMQVdyrLkp1zse4a0x87exRa%2Fs0moFYRiKnuoG2S1Rc%2B9cRKHUSSEUNKdzgKKVCsUBMG7NohIB2dV3TBrD7QSOrnwfiJfjDFHM35PKLdBLp0CXvRxwrpEZg7g41vcahMdjTns9kiKtGSvqwmOyoJ1%2BZaoeCfs%2FFGLUbZ1LDr9oIAfw%2FdhbhbHL2FfPXyXypOr4yZZZmjjRahGEzMMxmM0WXLAC80n5Py18zpDOTLjRyk8C1SuqPHtOlUmqzZvT%2FEKle%2FOrmX93DmV%2BjV7AHf0Vf4T9vnIO%2BAzq08ZUdBVI2q3eyUigicFA0Tvrh6vlZtaRf9Mx0aiD7WXLOS9dLZXWc1gn2O3ozuSkRUQyJJIyP%2FvAvlg8zPb%2BTxwtEFVaPrPNvasRj6CjOv%2FHem2QkXu5Q66kcqUZzVd9fM7XR8ZxJ1TauGJYLz7pTt6qD0OqgWkwosrgvgY6pgGEcmPcaNEuGTgRbqFjpfynbSHwrjyYm9AxKYu1JT04iUcXXg9qErhn0DKl%2B0cBSAj17p8hjO4b1pR0aBFLJJvt4hpGkfNTwRFpBuf5mxNnbsWD%2BPq5bq5%2BCMHbghtFfrKRCy8E7oZdQwtIrRrg%2BsjPRDLWG%2B7PniKYyP3e4e0vlknhM2y7EZ6SKG%2Fo9rV%2BOaSmGFkVpzkqWDVeZjZsj3fb3D32wwUB&X-Amz-Signature=e67486716f8d7efd6d339cf09a29d0882c03a0923cd2ce702a5cd5b1346984e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5JTIUO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJb05ocCzlWdvIsE0aczq0BBtShV1JFpAqG4r9%2FOP13AiBKd%2BxrT3Rg23mqayMZQTq9kRfGdbGkc08exsHWcDTvQyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM91Pp4aXZc2ag2CLLKtwDsQf9QinONJC85272xzfSJpEkdULjbAAEfQb%2FBdn%2BzaGGoZN%2FTjn4n3xmpbWUtlM7InOo1tv7ucs47Bixwji15c8skZ1iIZbblV%2BKNx5SaLb%2BuiUIq4pr9cY4uI23S0PaAlEc%2F44eJyR4wdX6pA%2BHQ%2FMwsI%2BW2w73mCjIKJm0arsULjNaVpiKA8awsjmMQVdyrLkp1zse4a0x87exRa%2Fs0moFYRiKnuoG2S1Rc%2B9cRKHUSSEUNKdzgKKVCsUBMG7NohIB2dV3TBrD7QSOrnwfiJfjDFHM35PKLdBLp0CXvRxwrpEZg7g41vcahMdjTns9kiKtGSvqwmOyoJ1%2BZaoeCfs%2FFGLUbZ1LDr9oIAfw%2FdhbhbHL2FfPXyXypOr4yZZZmjjRahGEzMMxmM0WXLAC80n5Py18zpDOTLjRyk8C1SuqPHtOlUmqzZvT%2FEKle%2FOrmX93DmV%2BjV7AHf0Vf4T9vnIO%2BAzq08ZUdBVI2q3eyUigicFA0Tvrh6vlZtaRf9Mx0aiD7WXLOS9dLZXWc1gn2O3ozuSkRUQyJJIyP%2FvAvlg8zPb%2BTxwtEFVaPrPNvasRj6CjOv%2FHem2QkXu5Q66kcqUZzVd9fM7XR8ZxJ1TauGJYLz7pTt6qD0OqgWkwosrgvgY6pgGEcmPcaNEuGTgRbqFjpfynbSHwrjyYm9AxKYu1JT04iUcXXg9qErhn0DKl%2B0cBSAj17p8hjO4b1pR0aBFLJJvt4hpGkfNTwRFpBuf5mxNnbsWD%2BPq5bq5%2BCMHbghtFfrKRCy8E7oZdQwtIrRrg%2BsjPRDLWG%2B7PniKYyP3e4e0vlknhM2y7EZ6SKG%2Fo9rV%2BOaSmGFkVpzkqWDVeZjZsj3fb3D32wwUB&X-Amz-Signature=917e8d7dadb264b6dba1aac6c1db3478aa370b9cafc9306a571c79ed9c828e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5JTIUO%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJb05ocCzlWdvIsE0aczq0BBtShV1JFpAqG4r9%2FOP13AiBKd%2BxrT3Rg23mqayMZQTq9kRfGdbGkc08exsHWcDTvQyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM91Pp4aXZc2ag2CLLKtwDsQf9QinONJC85272xzfSJpEkdULjbAAEfQb%2FBdn%2BzaGGoZN%2FTjn4n3xmpbWUtlM7InOo1tv7ucs47Bixwji15c8skZ1iIZbblV%2BKNx5SaLb%2BuiUIq4pr9cY4uI23S0PaAlEc%2F44eJyR4wdX6pA%2BHQ%2FMwsI%2BW2w73mCjIKJm0arsULjNaVpiKA8awsjmMQVdyrLkp1zse4a0x87exRa%2Fs0moFYRiKnuoG2S1Rc%2B9cRKHUSSEUNKdzgKKVCsUBMG7NohIB2dV3TBrD7QSOrnwfiJfjDFHM35PKLdBLp0CXvRxwrpEZg7g41vcahMdjTns9kiKtGSvqwmOyoJ1%2BZaoeCfs%2FFGLUbZ1LDr9oIAfw%2FdhbhbHL2FfPXyXypOr4yZZZmjjRahGEzMMxmM0WXLAC80n5Py18zpDOTLjRyk8C1SuqPHtOlUmqzZvT%2FEKle%2FOrmX93DmV%2BjV7AHf0Vf4T9vnIO%2BAzq08ZUdBVI2q3eyUigicFA0Tvrh6vlZtaRf9Mx0aiD7WXLOS9dLZXWc1gn2O3ozuSkRUQyJJIyP%2FvAvlg8zPb%2BTxwtEFVaPrPNvasRj6CjOv%2FHem2QkXu5Q66kcqUZzVd9fM7XR8ZxJ1TauGJYLz7pTt6qD0OqgWkwosrgvgY6pgGEcmPcaNEuGTgRbqFjpfynbSHwrjyYm9AxKYu1JT04iUcXXg9qErhn0DKl%2B0cBSAj17p8hjO4b1pR0aBFLJJvt4hpGkfNTwRFpBuf5mxNnbsWD%2BPq5bq5%2BCMHbghtFfrKRCy8E7oZdQwtIrRrg%2BsjPRDLWG%2B7PniKYyP3e4e0vlknhM2y7EZ6SKG%2Fo9rV%2BOaSmGFkVpzkqWDVeZjZsj3fb3D32wwUB&X-Amz-Signature=2d5b71b87fe9d36f1445b1016dc797b5caa1e43d9666a8527bc16471eacec7c1&X-Amz-SignedHeaders=host&x-id=GetObject)
