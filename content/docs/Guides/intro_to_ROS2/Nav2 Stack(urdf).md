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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHEYRE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCjBEQGPG6XqL6VYG8t6Vv8JqgNxqPPkK4%2F6qUc230eAiEA%2FR%2BxE1VzIR%2BsmKngdGmehD3xhIKfs2DBBR7xOSVQMEoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQWP2H2%2B1Pe%2FT4C4CrcA%2FwdR9GQ2P9cw7xhEHqGq%2F8k8mtM0OySR%2Bn7e%2F1NTWngXLX4RPYQcTS9ywt9Y7MHcxyJs3QtwnKwxd6cjJIfsyiyvTEyZznTax6bQvBZeKYqiL5Umxut8agKtGZ2itG17kvjFdaIP1HeuJUCp8%2FXmvfjdQS3Awcoyv0owH5Dy3AWHgQzj7sbMO0aVZQXeuP0YLZukvSNmHYYxh3GW3QYjO%2FYwRzGJ335kfTqdHvPuF4dhF6Q8Zx5X2ksia4pgsk%2FY3oy3VCI9IrZujSbZywBudFxGWrnKr7EshOExC5VrBSPGZW%2B7MZHRf%2B48HuwXtcihFSUovFSCRKtNMyeTUpifV%2BrW9Mk65wkfIC8HH7pkhLP%2BJf2r0Gf%2F9OCBUNoClEVGJJk3Hf05hEYSYXkdYaHKrsX%2FKC%2BAYw42J%2BuNgkdED47UNzFWNhRo6HdBhRwx23AwE0W%2F93%2FxC2ZIiXJiwHCjYj7Uh0%2FJdGUP4Kb061b8Fq186BnbYsmU0EJNZ5sgQea0weV%2B0L%2BZawQPcomYv%2FCH9KBZTLOw%2BO%2Ff%2BqqoJunryKX0rJu6QB0CbJ0m%2B9ANk6OKE9xqq%2B82C3fF4asB2hQAdszO%2FykoUNBykGcEmmlNraF2GlgLnifDM9iH5jNMJ%2F%2Bhb8GOqUBcCmdtowvSzgkEEo5ms5Ok1LiaFb30y32056sibSihFEiMEozLyzs6SgZak1pnXiQhh6tPJMKDU68ltHeb2%2Frpd1jcV2lGcJdQU9jGvyIt3wGYXvOJ2JewB7sKrDDw2%2FXKLlKAnVXcA5Em4CJ%2FtpBW%2B9d%2F5WGAVjo%2FnxDSDVpJKY42lScekWp66Gf65ehNs28d6%2FVQD5aTESEMTXBNRMMMCUJP5Y9&X-Amz-Signature=65abc5f7f59b064968ef2f7f8f481887c773aa15ba0c98b5b40e3f0493d0e63d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHEYRE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCjBEQGPG6XqL6VYG8t6Vv8JqgNxqPPkK4%2F6qUc230eAiEA%2FR%2BxE1VzIR%2BsmKngdGmehD3xhIKfs2DBBR7xOSVQMEoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQWP2H2%2B1Pe%2FT4C4CrcA%2FwdR9GQ2P9cw7xhEHqGq%2F8k8mtM0OySR%2Bn7e%2F1NTWngXLX4RPYQcTS9ywt9Y7MHcxyJs3QtwnKwxd6cjJIfsyiyvTEyZznTax6bQvBZeKYqiL5Umxut8agKtGZ2itG17kvjFdaIP1HeuJUCp8%2FXmvfjdQS3Awcoyv0owH5Dy3AWHgQzj7sbMO0aVZQXeuP0YLZukvSNmHYYxh3GW3QYjO%2FYwRzGJ335kfTqdHvPuF4dhF6Q8Zx5X2ksia4pgsk%2FY3oy3VCI9IrZujSbZywBudFxGWrnKr7EshOExC5VrBSPGZW%2B7MZHRf%2B48HuwXtcihFSUovFSCRKtNMyeTUpifV%2BrW9Mk65wkfIC8HH7pkhLP%2BJf2r0Gf%2F9OCBUNoClEVGJJk3Hf05hEYSYXkdYaHKrsX%2FKC%2BAYw42J%2BuNgkdED47UNzFWNhRo6HdBhRwx23AwE0W%2F93%2FxC2ZIiXJiwHCjYj7Uh0%2FJdGUP4Kb061b8Fq186BnbYsmU0EJNZ5sgQea0weV%2B0L%2BZawQPcomYv%2FCH9KBZTLOw%2BO%2Ff%2BqqoJunryKX0rJu6QB0CbJ0m%2B9ANk6OKE9xqq%2B82C3fF4asB2hQAdszO%2FykoUNBykGcEmmlNraF2GlgLnifDM9iH5jNMJ%2F%2Bhb8GOqUBcCmdtowvSzgkEEo5ms5Ok1LiaFb30y32056sibSihFEiMEozLyzs6SgZak1pnXiQhh6tPJMKDU68ltHeb2%2Frpd1jcV2lGcJdQU9jGvyIt3wGYXvOJ2JewB7sKrDDw2%2FXKLlKAnVXcA5Em4CJ%2FtpBW%2B9d%2F5WGAVjo%2FnxDSDVpJKY42lScekWp66Gf65ehNs28d6%2FVQD5aTESEMTXBNRMMMCUJP5Y9&X-Amz-Signature=53ff2c0abd87e1ff97ba8234041b441e289dc41481a6824d402b6056d50417fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHEYRE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCjBEQGPG6XqL6VYG8t6Vv8JqgNxqPPkK4%2F6qUc230eAiEA%2FR%2BxE1VzIR%2BsmKngdGmehD3xhIKfs2DBBR7xOSVQMEoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQWP2H2%2B1Pe%2FT4C4CrcA%2FwdR9GQ2P9cw7xhEHqGq%2F8k8mtM0OySR%2Bn7e%2F1NTWngXLX4RPYQcTS9ywt9Y7MHcxyJs3QtwnKwxd6cjJIfsyiyvTEyZznTax6bQvBZeKYqiL5Umxut8agKtGZ2itG17kvjFdaIP1HeuJUCp8%2FXmvfjdQS3Awcoyv0owH5Dy3AWHgQzj7sbMO0aVZQXeuP0YLZukvSNmHYYxh3GW3QYjO%2FYwRzGJ335kfTqdHvPuF4dhF6Q8Zx5X2ksia4pgsk%2FY3oy3VCI9IrZujSbZywBudFxGWrnKr7EshOExC5VrBSPGZW%2B7MZHRf%2B48HuwXtcihFSUovFSCRKtNMyeTUpifV%2BrW9Mk65wkfIC8HH7pkhLP%2BJf2r0Gf%2F9OCBUNoClEVGJJk3Hf05hEYSYXkdYaHKrsX%2FKC%2BAYw42J%2BuNgkdED47UNzFWNhRo6HdBhRwx23AwE0W%2F93%2FxC2ZIiXJiwHCjYj7Uh0%2FJdGUP4Kb061b8Fq186BnbYsmU0EJNZ5sgQea0weV%2B0L%2BZawQPcomYv%2FCH9KBZTLOw%2BO%2Ff%2BqqoJunryKX0rJu6QB0CbJ0m%2B9ANk6OKE9xqq%2B82C3fF4asB2hQAdszO%2FykoUNBykGcEmmlNraF2GlgLnifDM9iH5jNMJ%2F%2Bhb8GOqUBcCmdtowvSzgkEEo5ms5Ok1LiaFb30y32056sibSihFEiMEozLyzs6SgZak1pnXiQhh6tPJMKDU68ltHeb2%2Frpd1jcV2lGcJdQU9jGvyIt3wGYXvOJ2JewB7sKrDDw2%2FXKLlKAnVXcA5Em4CJ%2FtpBW%2B9d%2F5WGAVjo%2FnxDSDVpJKY42lScekWp66Gf65ehNs28d6%2FVQD5aTESEMTXBNRMMMCUJP5Y9&X-Amz-Signature=d2397dd81bfd4cf1ece1ee87a96761b9dd43594cf108082702fb5a823dfc70d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHEYRE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCjBEQGPG6XqL6VYG8t6Vv8JqgNxqPPkK4%2F6qUc230eAiEA%2FR%2BxE1VzIR%2BsmKngdGmehD3xhIKfs2DBBR7xOSVQMEoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQWP2H2%2B1Pe%2FT4C4CrcA%2FwdR9GQ2P9cw7xhEHqGq%2F8k8mtM0OySR%2Bn7e%2F1NTWngXLX4RPYQcTS9ywt9Y7MHcxyJs3QtwnKwxd6cjJIfsyiyvTEyZznTax6bQvBZeKYqiL5Umxut8agKtGZ2itG17kvjFdaIP1HeuJUCp8%2FXmvfjdQS3Awcoyv0owH5Dy3AWHgQzj7sbMO0aVZQXeuP0YLZukvSNmHYYxh3GW3QYjO%2FYwRzGJ335kfTqdHvPuF4dhF6Q8Zx5X2ksia4pgsk%2FY3oy3VCI9IrZujSbZywBudFxGWrnKr7EshOExC5VrBSPGZW%2B7MZHRf%2B48HuwXtcihFSUovFSCRKtNMyeTUpifV%2BrW9Mk65wkfIC8HH7pkhLP%2BJf2r0Gf%2F9OCBUNoClEVGJJk3Hf05hEYSYXkdYaHKrsX%2FKC%2BAYw42J%2BuNgkdED47UNzFWNhRo6HdBhRwx23AwE0W%2F93%2FxC2ZIiXJiwHCjYj7Uh0%2FJdGUP4Kb061b8Fq186BnbYsmU0EJNZ5sgQea0weV%2B0L%2BZawQPcomYv%2FCH9KBZTLOw%2BO%2Ff%2BqqoJunryKX0rJu6QB0CbJ0m%2B9ANk6OKE9xqq%2B82C3fF4asB2hQAdszO%2FykoUNBykGcEmmlNraF2GlgLnifDM9iH5jNMJ%2F%2Bhb8GOqUBcCmdtowvSzgkEEo5ms5Ok1LiaFb30y32056sibSihFEiMEozLyzs6SgZak1pnXiQhh6tPJMKDU68ltHeb2%2Frpd1jcV2lGcJdQU9jGvyIt3wGYXvOJ2JewB7sKrDDw2%2FXKLlKAnVXcA5Em4CJ%2FtpBW%2B9d%2F5WGAVjo%2FnxDSDVpJKY42lScekWp66Gf65ehNs28d6%2FVQD5aTESEMTXBNRMMMCUJP5Y9&X-Amz-Signature=6640fbaf31b511f89bb2b1d54e49ce5a52dfcd8197010c2ddd77269b67e21e40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHEYRE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCjBEQGPG6XqL6VYG8t6Vv8JqgNxqPPkK4%2F6qUc230eAiEA%2FR%2BxE1VzIR%2BsmKngdGmehD3xhIKfs2DBBR7xOSVQMEoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQWP2H2%2B1Pe%2FT4C4CrcA%2FwdR9GQ2P9cw7xhEHqGq%2F8k8mtM0OySR%2Bn7e%2F1NTWngXLX4RPYQcTS9ywt9Y7MHcxyJs3QtwnKwxd6cjJIfsyiyvTEyZznTax6bQvBZeKYqiL5Umxut8agKtGZ2itG17kvjFdaIP1HeuJUCp8%2FXmvfjdQS3Awcoyv0owH5Dy3AWHgQzj7sbMO0aVZQXeuP0YLZukvSNmHYYxh3GW3QYjO%2FYwRzGJ335kfTqdHvPuF4dhF6Q8Zx5X2ksia4pgsk%2FY3oy3VCI9IrZujSbZywBudFxGWrnKr7EshOExC5VrBSPGZW%2B7MZHRf%2B48HuwXtcihFSUovFSCRKtNMyeTUpifV%2BrW9Mk65wkfIC8HH7pkhLP%2BJf2r0Gf%2F9OCBUNoClEVGJJk3Hf05hEYSYXkdYaHKrsX%2FKC%2BAYw42J%2BuNgkdED47UNzFWNhRo6HdBhRwx23AwE0W%2F93%2FxC2ZIiXJiwHCjYj7Uh0%2FJdGUP4Kb061b8Fq186BnbYsmU0EJNZ5sgQea0weV%2B0L%2BZawQPcomYv%2FCH9KBZTLOw%2BO%2Ff%2BqqoJunryKX0rJu6QB0CbJ0m%2B9ANk6OKE9xqq%2B82C3fF4asB2hQAdszO%2FykoUNBykGcEmmlNraF2GlgLnifDM9iH5jNMJ%2F%2Bhb8GOqUBcCmdtowvSzgkEEo5ms5Ok1LiaFb30y32056sibSihFEiMEozLyzs6SgZak1pnXiQhh6tPJMKDU68ltHeb2%2Frpd1jcV2lGcJdQU9jGvyIt3wGYXvOJ2JewB7sKrDDw2%2FXKLlKAnVXcA5Em4CJ%2FtpBW%2B9d%2F5WGAVjo%2FnxDSDVpJKY42lScekWp66Gf65ehNs28d6%2FVQD5aTESEMTXBNRMMMCUJP5Y9&X-Amz-Signature=8e7a1efc60e059279c668ab40c2eebd426c9d1ed2ee30a3916e2650087406050&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZEHEYRE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCjBEQGPG6XqL6VYG8t6Vv8JqgNxqPPkK4%2F6qUc230eAiEA%2FR%2BxE1VzIR%2BsmKngdGmehD3xhIKfs2DBBR7xOSVQMEoqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQWP2H2%2B1Pe%2FT4C4CrcA%2FwdR9GQ2P9cw7xhEHqGq%2F8k8mtM0OySR%2Bn7e%2F1NTWngXLX4RPYQcTS9ywt9Y7MHcxyJs3QtwnKwxd6cjJIfsyiyvTEyZznTax6bQvBZeKYqiL5Umxut8agKtGZ2itG17kvjFdaIP1HeuJUCp8%2FXmvfjdQS3Awcoyv0owH5Dy3AWHgQzj7sbMO0aVZQXeuP0YLZukvSNmHYYxh3GW3QYjO%2FYwRzGJ335kfTqdHvPuF4dhF6Q8Zx5X2ksia4pgsk%2FY3oy3VCI9IrZujSbZywBudFxGWrnKr7EshOExC5VrBSPGZW%2B7MZHRf%2B48HuwXtcihFSUovFSCRKtNMyeTUpifV%2BrW9Mk65wkfIC8HH7pkhLP%2BJf2r0Gf%2F9OCBUNoClEVGJJk3Hf05hEYSYXkdYaHKrsX%2FKC%2BAYw42J%2BuNgkdED47UNzFWNhRo6HdBhRwx23AwE0W%2F93%2FxC2ZIiXJiwHCjYj7Uh0%2FJdGUP4Kb061b8Fq186BnbYsmU0EJNZ5sgQea0weV%2B0L%2BZawQPcomYv%2FCH9KBZTLOw%2BO%2Ff%2BqqoJunryKX0rJu6QB0CbJ0m%2B9ANk6OKE9xqq%2B82C3fF4asB2hQAdszO%2FykoUNBykGcEmmlNraF2GlgLnifDM9iH5jNMJ%2F%2Bhb8GOqUBcCmdtowvSzgkEEo5ms5Ok1LiaFb30y32056sibSihFEiMEozLyzs6SgZak1pnXiQhh6tPJMKDU68ltHeb2%2Frpd1jcV2lGcJdQU9jGvyIt3wGYXvOJ2JewB7sKrDDw2%2FXKLlKAnVXcA5Em4CJ%2FtpBW%2B9d%2F5WGAVjo%2FnxDSDVpJKY42lScekWp66Gf65ehNs28d6%2FVQD5aTESEMTXBNRMMMCUJP5Y9&X-Amz-Signature=c2a19e44b0986c87b7a336728b2d00274e9872f10812fbefc9bfa7044f2bd7ca&X-Amz-SignedHeaders=host&x-id=GetObject)
