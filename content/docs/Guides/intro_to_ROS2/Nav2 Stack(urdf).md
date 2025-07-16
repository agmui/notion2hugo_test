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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JKY54K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBygUlIe7AhkJWZGOs8uBSf6VuRPoJqyaaTi5Nnf%2FojFAiA6ufmJ67HfzIlBpu2e1Q3lthXcCtWaG4qjG8h4RFRNIyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM5THMJ%2BC8aYA8jbg7KtwD9Ttt1fJiAxk7DzPMTiOC3BuZYk5bey1anZGSu04R3bZ9Ms%2BqlP7JaN9L1wtruvy8yBdjam2FGhY0%2FPnQtZYFV3afIO5sK%2Fn7%2FmduMwt1hFyHyfacJ9WIn5vACAxqUMngcOezqtKuo1rm5K1BDGhuKQlhF0tedpEySOM%2FaTEs4zFfQo4oLhUzewgX1o7%2B0Dj893CmdcVSlZQvPWzLYsR%2FmWhAR909%2FqsTyQvEjIGZVcGviDJSVQbziz7dAv9IKHCpq1TfB4EaDNbcqpIXqOQV%2FmdmJCF0gr7GQIXeiejfUw2GVuMHmbxN28jCN3iDiP7GMPIa4X1oFpQCXTT1xB7vbP8mHw%2BLzghepEL57C3ohR%2B0af2XrHqXHOs0G%2FJzF2pIeyoL9LE6jzpKbohiePN%2B670kl5vFry8fuMeeFAojpyZApdmAhAShWphO5zTw3Efltaqb2kEIJbyhamuIwIKTgPXHmg8Q5whFTrf%2Fz6z%2BnHYd33FfOwfjW4DHA03X2uNsjt62G8TQo3F32VF8625XshtKSoGbfhZgsVvUx4SQpIy827muRswz5a%2FZPYd1cQ65mnzktLPliOaM0a9qTqHBnD5g10CFxW6fpHEn%2FY6g9mcYKm815%2FiNi3yzGvEwkZPewwY6pgHXW6DDyAkGtcRJjcxBCdlnySd2ea7SNbnyaIzTZdL3p2NGSI7VjFBAUqXLRNgQogyzIvVUfo5M0ANAZJ6lrnTIdQsCZ9V9nViDw4mDRjpQYthcilgyO4nPhWX40kIIroqSB7WaFkASZ%2FN4R7NQPJwWD4T2W6P7nzqT1hIUxaHpSCePXRHkIximm%2B%2Bpm8SPG%2BNxYAV15nGQLf53h15IwmAdjMTol6oG&X-Amz-Signature=33bbf79d32e84c7a1c61e0d2fd2f6ee6a8fbbb36c8b27d37613ab3bac037a058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JKY54K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBygUlIe7AhkJWZGOs8uBSf6VuRPoJqyaaTi5Nnf%2FojFAiA6ufmJ67HfzIlBpu2e1Q3lthXcCtWaG4qjG8h4RFRNIyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM5THMJ%2BC8aYA8jbg7KtwD9Ttt1fJiAxk7DzPMTiOC3BuZYk5bey1anZGSu04R3bZ9Ms%2BqlP7JaN9L1wtruvy8yBdjam2FGhY0%2FPnQtZYFV3afIO5sK%2Fn7%2FmduMwt1hFyHyfacJ9WIn5vACAxqUMngcOezqtKuo1rm5K1BDGhuKQlhF0tedpEySOM%2FaTEs4zFfQo4oLhUzewgX1o7%2B0Dj893CmdcVSlZQvPWzLYsR%2FmWhAR909%2FqsTyQvEjIGZVcGviDJSVQbziz7dAv9IKHCpq1TfB4EaDNbcqpIXqOQV%2FmdmJCF0gr7GQIXeiejfUw2GVuMHmbxN28jCN3iDiP7GMPIa4X1oFpQCXTT1xB7vbP8mHw%2BLzghepEL57C3ohR%2B0af2XrHqXHOs0G%2FJzF2pIeyoL9LE6jzpKbohiePN%2B670kl5vFry8fuMeeFAojpyZApdmAhAShWphO5zTw3Efltaqb2kEIJbyhamuIwIKTgPXHmg8Q5whFTrf%2Fz6z%2BnHYd33FfOwfjW4DHA03X2uNsjt62G8TQo3F32VF8625XshtKSoGbfhZgsVvUx4SQpIy827muRswz5a%2FZPYd1cQ65mnzktLPliOaM0a9qTqHBnD5g10CFxW6fpHEn%2FY6g9mcYKm815%2FiNi3yzGvEwkZPewwY6pgHXW6DDyAkGtcRJjcxBCdlnySd2ea7SNbnyaIzTZdL3p2NGSI7VjFBAUqXLRNgQogyzIvVUfo5M0ANAZJ6lrnTIdQsCZ9V9nViDw4mDRjpQYthcilgyO4nPhWX40kIIroqSB7WaFkASZ%2FN4R7NQPJwWD4T2W6P7nzqT1hIUxaHpSCePXRHkIximm%2B%2Bpm8SPG%2BNxYAV15nGQLf53h15IwmAdjMTol6oG&X-Amz-Signature=18d9d7d615417c01938f1bd85bca13540e807b3dbeb78c918605c8f4928dd125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JKY54K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBygUlIe7AhkJWZGOs8uBSf6VuRPoJqyaaTi5Nnf%2FojFAiA6ufmJ67HfzIlBpu2e1Q3lthXcCtWaG4qjG8h4RFRNIyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM5THMJ%2BC8aYA8jbg7KtwD9Ttt1fJiAxk7DzPMTiOC3BuZYk5bey1anZGSu04R3bZ9Ms%2BqlP7JaN9L1wtruvy8yBdjam2FGhY0%2FPnQtZYFV3afIO5sK%2Fn7%2FmduMwt1hFyHyfacJ9WIn5vACAxqUMngcOezqtKuo1rm5K1BDGhuKQlhF0tedpEySOM%2FaTEs4zFfQo4oLhUzewgX1o7%2B0Dj893CmdcVSlZQvPWzLYsR%2FmWhAR909%2FqsTyQvEjIGZVcGviDJSVQbziz7dAv9IKHCpq1TfB4EaDNbcqpIXqOQV%2FmdmJCF0gr7GQIXeiejfUw2GVuMHmbxN28jCN3iDiP7GMPIa4X1oFpQCXTT1xB7vbP8mHw%2BLzghepEL57C3ohR%2B0af2XrHqXHOs0G%2FJzF2pIeyoL9LE6jzpKbohiePN%2B670kl5vFry8fuMeeFAojpyZApdmAhAShWphO5zTw3Efltaqb2kEIJbyhamuIwIKTgPXHmg8Q5whFTrf%2Fz6z%2BnHYd33FfOwfjW4DHA03X2uNsjt62G8TQo3F32VF8625XshtKSoGbfhZgsVvUx4SQpIy827muRswz5a%2FZPYd1cQ65mnzktLPliOaM0a9qTqHBnD5g10CFxW6fpHEn%2FY6g9mcYKm815%2FiNi3yzGvEwkZPewwY6pgHXW6DDyAkGtcRJjcxBCdlnySd2ea7SNbnyaIzTZdL3p2NGSI7VjFBAUqXLRNgQogyzIvVUfo5M0ANAZJ6lrnTIdQsCZ9V9nViDw4mDRjpQYthcilgyO4nPhWX40kIIroqSB7WaFkASZ%2FN4R7NQPJwWD4T2W6P7nzqT1hIUxaHpSCePXRHkIximm%2B%2Bpm8SPG%2BNxYAV15nGQLf53h15IwmAdjMTol6oG&X-Amz-Signature=8dc67346e2fe1f220eee2d9edf3aaa2e25d10959837929f3414c1ff1a3f04502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JKY54K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBygUlIe7AhkJWZGOs8uBSf6VuRPoJqyaaTi5Nnf%2FojFAiA6ufmJ67HfzIlBpu2e1Q3lthXcCtWaG4qjG8h4RFRNIyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM5THMJ%2BC8aYA8jbg7KtwD9Ttt1fJiAxk7DzPMTiOC3BuZYk5bey1anZGSu04R3bZ9Ms%2BqlP7JaN9L1wtruvy8yBdjam2FGhY0%2FPnQtZYFV3afIO5sK%2Fn7%2FmduMwt1hFyHyfacJ9WIn5vACAxqUMngcOezqtKuo1rm5K1BDGhuKQlhF0tedpEySOM%2FaTEs4zFfQo4oLhUzewgX1o7%2B0Dj893CmdcVSlZQvPWzLYsR%2FmWhAR909%2FqsTyQvEjIGZVcGviDJSVQbziz7dAv9IKHCpq1TfB4EaDNbcqpIXqOQV%2FmdmJCF0gr7GQIXeiejfUw2GVuMHmbxN28jCN3iDiP7GMPIa4X1oFpQCXTT1xB7vbP8mHw%2BLzghepEL57C3ohR%2B0af2XrHqXHOs0G%2FJzF2pIeyoL9LE6jzpKbohiePN%2B670kl5vFry8fuMeeFAojpyZApdmAhAShWphO5zTw3Efltaqb2kEIJbyhamuIwIKTgPXHmg8Q5whFTrf%2Fz6z%2BnHYd33FfOwfjW4DHA03X2uNsjt62G8TQo3F32VF8625XshtKSoGbfhZgsVvUx4SQpIy827muRswz5a%2FZPYd1cQ65mnzktLPliOaM0a9qTqHBnD5g10CFxW6fpHEn%2FY6g9mcYKm815%2FiNi3yzGvEwkZPewwY6pgHXW6DDyAkGtcRJjcxBCdlnySd2ea7SNbnyaIzTZdL3p2NGSI7VjFBAUqXLRNgQogyzIvVUfo5M0ANAZJ6lrnTIdQsCZ9V9nViDw4mDRjpQYthcilgyO4nPhWX40kIIroqSB7WaFkASZ%2FN4R7NQPJwWD4T2W6P7nzqT1hIUxaHpSCePXRHkIximm%2B%2Bpm8SPG%2BNxYAV15nGQLf53h15IwmAdjMTol6oG&X-Amz-Signature=4bbe2f031a4b35a007072c95f24efda2b4c1ea411f7c4712c5c57fddd69be457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JKY54K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBygUlIe7AhkJWZGOs8uBSf6VuRPoJqyaaTi5Nnf%2FojFAiA6ufmJ67HfzIlBpu2e1Q3lthXcCtWaG4qjG8h4RFRNIyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM5THMJ%2BC8aYA8jbg7KtwD9Ttt1fJiAxk7DzPMTiOC3BuZYk5bey1anZGSu04R3bZ9Ms%2BqlP7JaN9L1wtruvy8yBdjam2FGhY0%2FPnQtZYFV3afIO5sK%2Fn7%2FmduMwt1hFyHyfacJ9WIn5vACAxqUMngcOezqtKuo1rm5K1BDGhuKQlhF0tedpEySOM%2FaTEs4zFfQo4oLhUzewgX1o7%2B0Dj893CmdcVSlZQvPWzLYsR%2FmWhAR909%2FqsTyQvEjIGZVcGviDJSVQbziz7dAv9IKHCpq1TfB4EaDNbcqpIXqOQV%2FmdmJCF0gr7GQIXeiejfUw2GVuMHmbxN28jCN3iDiP7GMPIa4X1oFpQCXTT1xB7vbP8mHw%2BLzghepEL57C3ohR%2B0af2XrHqXHOs0G%2FJzF2pIeyoL9LE6jzpKbohiePN%2B670kl5vFry8fuMeeFAojpyZApdmAhAShWphO5zTw3Efltaqb2kEIJbyhamuIwIKTgPXHmg8Q5whFTrf%2Fz6z%2BnHYd33FfOwfjW4DHA03X2uNsjt62G8TQo3F32VF8625XshtKSoGbfhZgsVvUx4SQpIy827muRswz5a%2FZPYd1cQ65mnzktLPliOaM0a9qTqHBnD5g10CFxW6fpHEn%2FY6g9mcYKm815%2FiNi3yzGvEwkZPewwY6pgHXW6DDyAkGtcRJjcxBCdlnySd2ea7SNbnyaIzTZdL3p2NGSI7VjFBAUqXLRNgQogyzIvVUfo5M0ANAZJ6lrnTIdQsCZ9V9nViDw4mDRjpQYthcilgyO4nPhWX40kIIroqSB7WaFkASZ%2FN4R7NQPJwWD4T2W6P7nzqT1hIUxaHpSCePXRHkIximm%2B%2Bpm8SPG%2BNxYAV15nGQLf53h15IwmAdjMTol6oG&X-Amz-Signature=1f8ec54fd370581bbf69ab209052182920e6b2c489d2bbf2acdbacb7fa6a537e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JKY54K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBygUlIe7AhkJWZGOs8uBSf6VuRPoJqyaaTi5Nnf%2FojFAiA6ufmJ67HfzIlBpu2e1Q3lthXcCtWaG4qjG8h4RFRNIyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM5THMJ%2BC8aYA8jbg7KtwD9Ttt1fJiAxk7DzPMTiOC3BuZYk5bey1anZGSu04R3bZ9Ms%2BqlP7JaN9L1wtruvy8yBdjam2FGhY0%2FPnQtZYFV3afIO5sK%2Fn7%2FmduMwt1hFyHyfacJ9WIn5vACAxqUMngcOezqtKuo1rm5K1BDGhuKQlhF0tedpEySOM%2FaTEs4zFfQo4oLhUzewgX1o7%2B0Dj893CmdcVSlZQvPWzLYsR%2FmWhAR909%2FqsTyQvEjIGZVcGviDJSVQbziz7dAv9IKHCpq1TfB4EaDNbcqpIXqOQV%2FmdmJCF0gr7GQIXeiejfUw2GVuMHmbxN28jCN3iDiP7GMPIa4X1oFpQCXTT1xB7vbP8mHw%2BLzghepEL57C3ohR%2B0af2XrHqXHOs0G%2FJzF2pIeyoL9LE6jzpKbohiePN%2B670kl5vFry8fuMeeFAojpyZApdmAhAShWphO5zTw3Efltaqb2kEIJbyhamuIwIKTgPXHmg8Q5whFTrf%2Fz6z%2BnHYd33FfOwfjW4DHA03X2uNsjt62G8TQo3F32VF8625XshtKSoGbfhZgsVvUx4SQpIy827muRswz5a%2FZPYd1cQ65mnzktLPliOaM0a9qTqHBnD5g10CFxW6fpHEn%2FY6g9mcYKm815%2FiNi3yzGvEwkZPewwY6pgHXW6DDyAkGtcRJjcxBCdlnySd2ea7SNbnyaIzTZdL3p2NGSI7VjFBAUqXLRNgQogyzIvVUfo5M0ANAZJ6lrnTIdQsCZ9V9nViDw4mDRjpQYthcilgyO4nPhWX40kIIroqSB7WaFkASZ%2FN4R7NQPJwWD4T2W6P7nzqT1hIUxaHpSCePXRHkIximm%2B%2Bpm8SPG%2BNxYAV15nGQLf53h15IwmAdjMTol6oG&X-Amz-Signature=ae6560df7337b14c36e4ecbe89eaaa0e58cee0168ea1c84fcecce5dde9d63f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
