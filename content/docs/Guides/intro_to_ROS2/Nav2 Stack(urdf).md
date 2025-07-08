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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4FGXLD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEYGTB23y%2F5IDSAvO%2F4f7CxPi9cypfUlw9UhCF%2FVfjz4AiEA7yJbqLG099HO9t7ovIxAa31Yb1x4SRqF4%2FXdqZcE9mUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDpjFGQQrNopA5HKircA5K3JNE9wyJkymMFJ5ueqquqziAkMALH5I0S9ycHB6RjFJ%2FpCSAoBqoIYMxebQvDiuRmDVFpNA4rV9WPaxqSf8gqvmgJJN%2Fdf66uZ1VMNGFDFucdQmoBjFoWMx75qi0d%2BeGFGQt5dvycBWqzpIpe5DPIqKr0wIgn8Xsb9Rs8qcy6Byuv0SLeRtVgWHPyKfRn%2Fj%2BYmReOYtUvxCmjpjLflWs0lgYPRR%2FCA%2B1RMQ2KsfV2C4CSnZ7DacUKtxdUfjB9csPFi5bwYi4S7gpXkyb3oz53xo91mIq8XbhwLNOpX%2FayKtqjPFdBz6NMOMlaJ0VlHM4YVFwczCzwmq%2B6%2FTgKhJM2XNfKuKsaaUZQpV2uqKxqe23zz9rId8g2Eq9hKUC%2FxNuEWrE640pbyntZbGLR%2BSw3%2Fbb74b%2Ft1ZmcXpSKBf5QW3GK%2F17MzFe5jtvXvvbLqOGLoUKP8Tk%2FcS27Z%2BJuQoE2IQqcpd2Az8qNON3CW0ENzRmRSr3R6Ikf4XEaDRibawInU%2BlNL1cz0rz1%2FIVMZOzDrfLVSTXC%2FysJ2nJt%2FUBCxgylKqn1u2o8CJLbqiMhCsYzgq1VUW538d0x%2FT%2FCNnXj8v05GsgAED7Npz%2Fot%2FR8LUVFCOr%2B1Vm%2FIw6oMM%2BDssMGOqUBvD3iarHIE403fjesQq9mWNvIVEzGZqNVV4%2Fk0d%2BbHrfbnM2xBf84VvDTuvuwzN%2By2wXBAe11z18sI%2BmZvxDFdXxSOZcad17EQFdTno1l5U%2BRIpSD%2BvmLN7ctK9uhSLtBxdiWOqnY5WxyiPHnUCRwFX8LmfhExnMlaqJKzDR7yW1BxCNmTJ3beziABCmL1sk0IIf09g29emsfq3D%2FllTuHvpiFT5A&X-Amz-Signature=45f7e9fd51a02e03f1b28534b4442f96ac4f53837993d320ad3a49da0108b525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4FGXLD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEYGTB23y%2F5IDSAvO%2F4f7CxPi9cypfUlw9UhCF%2FVfjz4AiEA7yJbqLG099HO9t7ovIxAa31Yb1x4SRqF4%2FXdqZcE9mUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDpjFGQQrNopA5HKircA5K3JNE9wyJkymMFJ5ueqquqziAkMALH5I0S9ycHB6RjFJ%2FpCSAoBqoIYMxebQvDiuRmDVFpNA4rV9WPaxqSf8gqvmgJJN%2Fdf66uZ1VMNGFDFucdQmoBjFoWMx75qi0d%2BeGFGQt5dvycBWqzpIpe5DPIqKr0wIgn8Xsb9Rs8qcy6Byuv0SLeRtVgWHPyKfRn%2Fj%2BYmReOYtUvxCmjpjLflWs0lgYPRR%2FCA%2B1RMQ2KsfV2C4CSnZ7DacUKtxdUfjB9csPFi5bwYi4S7gpXkyb3oz53xo91mIq8XbhwLNOpX%2FayKtqjPFdBz6NMOMlaJ0VlHM4YVFwczCzwmq%2B6%2FTgKhJM2XNfKuKsaaUZQpV2uqKxqe23zz9rId8g2Eq9hKUC%2FxNuEWrE640pbyntZbGLR%2BSw3%2Fbb74b%2Ft1ZmcXpSKBf5QW3GK%2F17MzFe5jtvXvvbLqOGLoUKP8Tk%2FcS27Z%2BJuQoE2IQqcpd2Az8qNON3CW0ENzRmRSr3R6Ikf4XEaDRibawInU%2BlNL1cz0rz1%2FIVMZOzDrfLVSTXC%2FysJ2nJt%2FUBCxgylKqn1u2o8CJLbqiMhCsYzgq1VUW538d0x%2FT%2FCNnXj8v05GsgAED7Npz%2Fot%2FR8LUVFCOr%2B1Vm%2FIw6oMM%2BDssMGOqUBvD3iarHIE403fjesQq9mWNvIVEzGZqNVV4%2Fk0d%2BbHrfbnM2xBf84VvDTuvuwzN%2By2wXBAe11z18sI%2BmZvxDFdXxSOZcad17EQFdTno1l5U%2BRIpSD%2BvmLN7ctK9uhSLtBxdiWOqnY5WxyiPHnUCRwFX8LmfhExnMlaqJKzDR7yW1BxCNmTJ3beziABCmL1sk0IIf09g29emsfq3D%2FllTuHvpiFT5A&X-Amz-Signature=e26711fc7eb0875e0f41017af0294b569b074b8efecbf73fa57b5615c55897be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4FGXLD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEYGTB23y%2F5IDSAvO%2F4f7CxPi9cypfUlw9UhCF%2FVfjz4AiEA7yJbqLG099HO9t7ovIxAa31Yb1x4SRqF4%2FXdqZcE9mUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDpjFGQQrNopA5HKircA5K3JNE9wyJkymMFJ5ueqquqziAkMALH5I0S9ycHB6RjFJ%2FpCSAoBqoIYMxebQvDiuRmDVFpNA4rV9WPaxqSf8gqvmgJJN%2Fdf66uZ1VMNGFDFucdQmoBjFoWMx75qi0d%2BeGFGQt5dvycBWqzpIpe5DPIqKr0wIgn8Xsb9Rs8qcy6Byuv0SLeRtVgWHPyKfRn%2Fj%2BYmReOYtUvxCmjpjLflWs0lgYPRR%2FCA%2B1RMQ2KsfV2C4CSnZ7DacUKtxdUfjB9csPFi5bwYi4S7gpXkyb3oz53xo91mIq8XbhwLNOpX%2FayKtqjPFdBz6NMOMlaJ0VlHM4YVFwczCzwmq%2B6%2FTgKhJM2XNfKuKsaaUZQpV2uqKxqe23zz9rId8g2Eq9hKUC%2FxNuEWrE640pbyntZbGLR%2BSw3%2Fbb74b%2Ft1ZmcXpSKBf5QW3GK%2F17MzFe5jtvXvvbLqOGLoUKP8Tk%2FcS27Z%2BJuQoE2IQqcpd2Az8qNON3CW0ENzRmRSr3R6Ikf4XEaDRibawInU%2BlNL1cz0rz1%2FIVMZOzDrfLVSTXC%2FysJ2nJt%2FUBCxgylKqn1u2o8CJLbqiMhCsYzgq1VUW538d0x%2FT%2FCNnXj8v05GsgAED7Npz%2Fot%2FR8LUVFCOr%2B1Vm%2FIw6oMM%2BDssMGOqUBvD3iarHIE403fjesQq9mWNvIVEzGZqNVV4%2Fk0d%2BbHrfbnM2xBf84VvDTuvuwzN%2By2wXBAe11z18sI%2BmZvxDFdXxSOZcad17EQFdTno1l5U%2BRIpSD%2BvmLN7ctK9uhSLtBxdiWOqnY5WxyiPHnUCRwFX8LmfhExnMlaqJKzDR7yW1BxCNmTJ3beziABCmL1sk0IIf09g29emsfq3D%2FllTuHvpiFT5A&X-Amz-Signature=994604fadad9dc8eba399ffdadd5bafe4333a86ac5cffa9acc1f1c92d8628af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4FGXLD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEYGTB23y%2F5IDSAvO%2F4f7CxPi9cypfUlw9UhCF%2FVfjz4AiEA7yJbqLG099HO9t7ovIxAa31Yb1x4SRqF4%2FXdqZcE9mUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDpjFGQQrNopA5HKircA5K3JNE9wyJkymMFJ5ueqquqziAkMALH5I0S9ycHB6RjFJ%2FpCSAoBqoIYMxebQvDiuRmDVFpNA4rV9WPaxqSf8gqvmgJJN%2Fdf66uZ1VMNGFDFucdQmoBjFoWMx75qi0d%2BeGFGQt5dvycBWqzpIpe5DPIqKr0wIgn8Xsb9Rs8qcy6Byuv0SLeRtVgWHPyKfRn%2Fj%2BYmReOYtUvxCmjpjLflWs0lgYPRR%2FCA%2B1RMQ2KsfV2C4CSnZ7DacUKtxdUfjB9csPFi5bwYi4S7gpXkyb3oz53xo91mIq8XbhwLNOpX%2FayKtqjPFdBz6NMOMlaJ0VlHM4YVFwczCzwmq%2B6%2FTgKhJM2XNfKuKsaaUZQpV2uqKxqe23zz9rId8g2Eq9hKUC%2FxNuEWrE640pbyntZbGLR%2BSw3%2Fbb74b%2Ft1ZmcXpSKBf5QW3GK%2F17MzFe5jtvXvvbLqOGLoUKP8Tk%2FcS27Z%2BJuQoE2IQqcpd2Az8qNON3CW0ENzRmRSr3R6Ikf4XEaDRibawInU%2BlNL1cz0rz1%2FIVMZOzDrfLVSTXC%2FysJ2nJt%2FUBCxgylKqn1u2o8CJLbqiMhCsYzgq1VUW538d0x%2FT%2FCNnXj8v05GsgAED7Npz%2Fot%2FR8LUVFCOr%2B1Vm%2FIw6oMM%2BDssMGOqUBvD3iarHIE403fjesQq9mWNvIVEzGZqNVV4%2Fk0d%2BbHrfbnM2xBf84VvDTuvuwzN%2By2wXBAe11z18sI%2BmZvxDFdXxSOZcad17EQFdTno1l5U%2BRIpSD%2BvmLN7ctK9uhSLtBxdiWOqnY5WxyiPHnUCRwFX8LmfhExnMlaqJKzDR7yW1BxCNmTJ3beziABCmL1sk0IIf09g29emsfq3D%2FllTuHvpiFT5A&X-Amz-Signature=4e1c53a3c80364a245f0c086a26b5116462e98592f98b823a45d6503bd31e706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4FGXLD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEYGTB23y%2F5IDSAvO%2F4f7CxPi9cypfUlw9UhCF%2FVfjz4AiEA7yJbqLG099HO9t7ovIxAa31Yb1x4SRqF4%2FXdqZcE9mUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDpjFGQQrNopA5HKircA5K3JNE9wyJkymMFJ5ueqquqziAkMALH5I0S9ycHB6RjFJ%2FpCSAoBqoIYMxebQvDiuRmDVFpNA4rV9WPaxqSf8gqvmgJJN%2Fdf66uZ1VMNGFDFucdQmoBjFoWMx75qi0d%2BeGFGQt5dvycBWqzpIpe5DPIqKr0wIgn8Xsb9Rs8qcy6Byuv0SLeRtVgWHPyKfRn%2Fj%2BYmReOYtUvxCmjpjLflWs0lgYPRR%2FCA%2B1RMQ2KsfV2C4CSnZ7DacUKtxdUfjB9csPFi5bwYi4S7gpXkyb3oz53xo91mIq8XbhwLNOpX%2FayKtqjPFdBz6NMOMlaJ0VlHM4YVFwczCzwmq%2B6%2FTgKhJM2XNfKuKsaaUZQpV2uqKxqe23zz9rId8g2Eq9hKUC%2FxNuEWrE640pbyntZbGLR%2BSw3%2Fbb74b%2Ft1ZmcXpSKBf5QW3GK%2F17MzFe5jtvXvvbLqOGLoUKP8Tk%2FcS27Z%2BJuQoE2IQqcpd2Az8qNON3CW0ENzRmRSr3R6Ikf4XEaDRibawInU%2BlNL1cz0rz1%2FIVMZOzDrfLVSTXC%2FysJ2nJt%2FUBCxgylKqn1u2o8CJLbqiMhCsYzgq1VUW538d0x%2FT%2FCNnXj8v05GsgAED7Npz%2Fot%2FR8LUVFCOr%2B1Vm%2FIw6oMM%2BDssMGOqUBvD3iarHIE403fjesQq9mWNvIVEzGZqNVV4%2Fk0d%2BbHrfbnM2xBf84VvDTuvuwzN%2By2wXBAe11z18sI%2BmZvxDFdXxSOZcad17EQFdTno1l5U%2BRIpSD%2BvmLN7ctK9uhSLtBxdiWOqnY5WxyiPHnUCRwFX8LmfhExnMlaqJKzDR7yW1BxCNmTJ3beziABCmL1sk0IIf09g29emsfq3D%2FllTuHvpiFT5A&X-Amz-Signature=9105f56702362f99fe76dd55b025e98bb210471a763352fa61289660d93a9fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4FGXLD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T024251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIEYGTB23y%2F5IDSAvO%2F4f7CxPi9cypfUlw9UhCF%2FVfjz4AiEA7yJbqLG099HO9t7ovIxAa31Yb1x4SRqF4%2FXdqZcE9mUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDpjFGQQrNopA5HKircA5K3JNE9wyJkymMFJ5ueqquqziAkMALH5I0S9ycHB6RjFJ%2FpCSAoBqoIYMxebQvDiuRmDVFpNA4rV9WPaxqSf8gqvmgJJN%2Fdf66uZ1VMNGFDFucdQmoBjFoWMx75qi0d%2BeGFGQt5dvycBWqzpIpe5DPIqKr0wIgn8Xsb9Rs8qcy6Byuv0SLeRtVgWHPyKfRn%2Fj%2BYmReOYtUvxCmjpjLflWs0lgYPRR%2FCA%2B1RMQ2KsfV2C4CSnZ7DacUKtxdUfjB9csPFi5bwYi4S7gpXkyb3oz53xo91mIq8XbhwLNOpX%2FayKtqjPFdBz6NMOMlaJ0VlHM4YVFwczCzwmq%2B6%2FTgKhJM2XNfKuKsaaUZQpV2uqKxqe23zz9rId8g2Eq9hKUC%2FxNuEWrE640pbyntZbGLR%2BSw3%2Fbb74b%2Ft1ZmcXpSKBf5QW3GK%2F17MzFe5jtvXvvbLqOGLoUKP8Tk%2FcS27Z%2BJuQoE2IQqcpd2Az8qNON3CW0ENzRmRSr3R6Ikf4XEaDRibawInU%2BlNL1cz0rz1%2FIVMZOzDrfLVSTXC%2FysJ2nJt%2FUBCxgylKqn1u2o8CJLbqiMhCsYzgq1VUW538d0x%2FT%2FCNnXj8v05GsgAED7Npz%2Fot%2FR8LUVFCOr%2B1Vm%2FIw6oMM%2BDssMGOqUBvD3iarHIE403fjesQq9mWNvIVEzGZqNVV4%2Fk0d%2BbHrfbnM2xBf84VvDTuvuwzN%2By2wXBAe11z18sI%2BmZvxDFdXxSOZcad17EQFdTno1l5U%2BRIpSD%2BvmLN7ctK9uhSLtBxdiWOqnY5WxyiPHnUCRwFX8LmfhExnMlaqJKzDR7yW1BxCNmTJ3beziABCmL1sk0IIf09g29emsfq3D%2FllTuHvpiFT5A&X-Amz-Signature=ab468ec0450364d4288cc3510720023d9cce6216a82d3d28722ce7cd513877e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
