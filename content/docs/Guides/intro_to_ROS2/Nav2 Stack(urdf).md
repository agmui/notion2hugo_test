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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BAG6LB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC6HUagTWObivnyg1LbORmJTyF0rJZNQBbBFYZtitMnjAIhAPKjD9aVMXrLAAwekVZIeCX9MVFfp3Jv5%2BeqfCGg9X4LKv8DCEoQABoMNjM3NDIzMTgzODA1IgyCydDM3nB7R%2BJuUCkq3AMJpUFPdzSGLy5RK6p0gzKm0Fm7HZtDD%2Fnh7fZ%2Fr5674CrV62M8kBh3qVQYgvBSXUKzzxTYtquh3KtO2AU%2BpsBHUx4xng7YAQHsa8ou%2B%2B12d7fAlJK%2FykWEqu2Vshv7Yb0wFNKgdyjBkR4y5Bx%2BQO6qQLn6reETUNWkbYTPrR4NVcMiUs6ltprrOdL5ZrRa7054YwjPuPmMSuGz2RclHn%2BEelQBCEb7aK48Jk3DM2lgt7b3Lo8VGhUPc1Fg4X6pV6xL%2B00lVlQnipAehEicnLghOJcVpJoVVQsN%2FNSSp1Xxg2tL6rlaZc6uFg3jDh3LGWIxk4n8yYlgzGCpKPHoqoTIV%2B8HZvoQBTGtR05iUoOCexJE2mA8NFmMlbkXf7TpPgrR8L8IusR5J5f66Adz%2F%2FhKjEqR4GkghiY2iUL2%2Fb6mt0zeHZ5p4CbUzT1Oe61ZN%2B%2FiEBcTIXStopN0v7Qi4KKGoixSD1WiDKg9G%2F6q7DxYy2ZYpStsN03Brj3CEA6%2BvtNXdvCwFjGFsH%2B6RbXCHR1n%2FK4SX%2B8Uf8APTfi%2F1MCK31CxdO2yaLdYXSfnsGFfkLxWAiibF8JRRix6QMoXmgza2mZYX9ZlLslIkCcOJXDHpJbxq%2Bnp5MrdfZJm6jDAm8O9BjqkAbjWYxEfk5k6bPRoWsPEudKi6GGSFA2KfyD1e863R1t5RZFTGY5yZsa9A%2F2HXw1vzwNycOtxjXivEStzY%2Fdfh7RGlCvZHaVULRh9%2Fq1%2BCV9EwwrIOfMr%2FJWmiFkiB%2F2N8%2BjJriJTqw3HYBNH4uzCh4fguYwRTqkPtBqnnwxjteZsTjL5gDK4ZvLbFzRQbcxYNLb4q0oCW%2BI03o%2BsMcoMGF%2F%2Fn1zV&X-Amz-Signature=6dc3fd456daaf94e4b7a8b00bc789c1a3b54c5cade1cdfd0c05476494e8f0ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BAG6LB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC6HUagTWObivnyg1LbORmJTyF0rJZNQBbBFYZtitMnjAIhAPKjD9aVMXrLAAwekVZIeCX9MVFfp3Jv5%2BeqfCGg9X4LKv8DCEoQABoMNjM3NDIzMTgzODA1IgyCydDM3nB7R%2BJuUCkq3AMJpUFPdzSGLy5RK6p0gzKm0Fm7HZtDD%2Fnh7fZ%2Fr5674CrV62M8kBh3qVQYgvBSXUKzzxTYtquh3KtO2AU%2BpsBHUx4xng7YAQHsa8ou%2B%2B12d7fAlJK%2FykWEqu2Vshv7Yb0wFNKgdyjBkR4y5Bx%2BQO6qQLn6reETUNWkbYTPrR4NVcMiUs6ltprrOdL5ZrRa7054YwjPuPmMSuGz2RclHn%2BEelQBCEb7aK48Jk3DM2lgt7b3Lo8VGhUPc1Fg4X6pV6xL%2B00lVlQnipAehEicnLghOJcVpJoVVQsN%2FNSSp1Xxg2tL6rlaZc6uFg3jDh3LGWIxk4n8yYlgzGCpKPHoqoTIV%2B8HZvoQBTGtR05iUoOCexJE2mA8NFmMlbkXf7TpPgrR8L8IusR5J5f66Adz%2F%2FhKjEqR4GkghiY2iUL2%2Fb6mt0zeHZ5p4CbUzT1Oe61ZN%2B%2FiEBcTIXStopN0v7Qi4KKGoixSD1WiDKg9G%2F6q7DxYy2ZYpStsN03Brj3CEA6%2BvtNXdvCwFjGFsH%2B6RbXCHR1n%2FK4SX%2B8Uf8APTfi%2F1MCK31CxdO2yaLdYXSfnsGFfkLxWAiibF8JRRix6QMoXmgza2mZYX9ZlLslIkCcOJXDHpJbxq%2Bnp5MrdfZJm6jDAm8O9BjqkAbjWYxEfk5k6bPRoWsPEudKi6GGSFA2KfyD1e863R1t5RZFTGY5yZsa9A%2F2HXw1vzwNycOtxjXivEStzY%2Fdfh7RGlCvZHaVULRh9%2Fq1%2BCV9EwwrIOfMr%2FJWmiFkiB%2F2N8%2BjJriJTqw3HYBNH4uzCh4fguYwRTqkPtBqnnwxjteZsTjL5gDK4ZvLbFzRQbcxYNLb4q0oCW%2BI03o%2BsMcoMGF%2F%2Fn1zV&X-Amz-Signature=94a89ff8c8dca48b0dda9875d61eca2eda3500b7713da7f4c1a34e5a7822376c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BAG6LB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC6HUagTWObivnyg1LbORmJTyF0rJZNQBbBFYZtitMnjAIhAPKjD9aVMXrLAAwekVZIeCX9MVFfp3Jv5%2BeqfCGg9X4LKv8DCEoQABoMNjM3NDIzMTgzODA1IgyCydDM3nB7R%2BJuUCkq3AMJpUFPdzSGLy5RK6p0gzKm0Fm7HZtDD%2Fnh7fZ%2Fr5674CrV62M8kBh3qVQYgvBSXUKzzxTYtquh3KtO2AU%2BpsBHUx4xng7YAQHsa8ou%2B%2B12d7fAlJK%2FykWEqu2Vshv7Yb0wFNKgdyjBkR4y5Bx%2BQO6qQLn6reETUNWkbYTPrR4NVcMiUs6ltprrOdL5ZrRa7054YwjPuPmMSuGz2RclHn%2BEelQBCEb7aK48Jk3DM2lgt7b3Lo8VGhUPc1Fg4X6pV6xL%2B00lVlQnipAehEicnLghOJcVpJoVVQsN%2FNSSp1Xxg2tL6rlaZc6uFg3jDh3LGWIxk4n8yYlgzGCpKPHoqoTIV%2B8HZvoQBTGtR05iUoOCexJE2mA8NFmMlbkXf7TpPgrR8L8IusR5J5f66Adz%2F%2FhKjEqR4GkghiY2iUL2%2Fb6mt0zeHZ5p4CbUzT1Oe61ZN%2B%2FiEBcTIXStopN0v7Qi4KKGoixSD1WiDKg9G%2F6q7DxYy2ZYpStsN03Brj3CEA6%2BvtNXdvCwFjGFsH%2B6RbXCHR1n%2FK4SX%2B8Uf8APTfi%2F1MCK31CxdO2yaLdYXSfnsGFfkLxWAiibF8JRRix6QMoXmgza2mZYX9ZlLslIkCcOJXDHpJbxq%2Bnp5MrdfZJm6jDAm8O9BjqkAbjWYxEfk5k6bPRoWsPEudKi6GGSFA2KfyD1e863R1t5RZFTGY5yZsa9A%2F2HXw1vzwNycOtxjXivEStzY%2Fdfh7RGlCvZHaVULRh9%2Fq1%2BCV9EwwrIOfMr%2FJWmiFkiB%2F2N8%2BjJriJTqw3HYBNH4uzCh4fguYwRTqkPtBqnnwxjteZsTjL5gDK4ZvLbFzRQbcxYNLb4q0oCW%2BI03o%2BsMcoMGF%2F%2Fn1zV&X-Amz-Signature=15374cfc22bce004be7ab3df28cb6ddab88754523fd0b6f75128975683894abc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BAG6LB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC6HUagTWObivnyg1LbORmJTyF0rJZNQBbBFYZtitMnjAIhAPKjD9aVMXrLAAwekVZIeCX9MVFfp3Jv5%2BeqfCGg9X4LKv8DCEoQABoMNjM3NDIzMTgzODA1IgyCydDM3nB7R%2BJuUCkq3AMJpUFPdzSGLy5RK6p0gzKm0Fm7HZtDD%2Fnh7fZ%2Fr5674CrV62M8kBh3qVQYgvBSXUKzzxTYtquh3KtO2AU%2BpsBHUx4xng7YAQHsa8ou%2B%2B12d7fAlJK%2FykWEqu2Vshv7Yb0wFNKgdyjBkR4y5Bx%2BQO6qQLn6reETUNWkbYTPrR4NVcMiUs6ltprrOdL5ZrRa7054YwjPuPmMSuGz2RclHn%2BEelQBCEb7aK48Jk3DM2lgt7b3Lo8VGhUPc1Fg4X6pV6xL%2B00lVlQnipAehEicnLghOJcVpJoVVQsN%2FNSSp1Xxg2tL6rlaZc6uFg3jDh3LGWIxk4n8yYlgzGCpKPHoqoTIV%2B8HZvoQBTGtR05iUoOCexJE2mA8NFmMlbkXf7TpPgrR8L8IusR5J5f66Adz%2F%2FhKjEqR4GkghiY2iUL2%2Fb6mt0zeHZ5p4CbUzT1Oe61ZN%2B%2FiEBcTIXStopN0v7Qi4KKGoixSD1WiDKg9G%2F6q7DxYy2ZYpStsN03Brj3CEA6%2BvtNXdvCwFjGFsH%2B6RbXCHR1n%2FK4SX%2B8Uf8APTfi%2F1MCK31CxdO2yaLdYXSfnsGFfkLxWAiibF8JRRix6QMoXmgza2mZYX9ZlLslIkCcOJXDHpJbxq%2Bnp5MrdfZJm6jDAm8O9BjqkAbjWYxEfk5k6bPRoWsPEudKi6GGSFA2KfyD1e863R1t5RZFTGY5yZsa9A%2F2HXw1vzwNycOtxjXivEStzY%2Fdfh7RGlCvZHaVULRh9%2Fq1%2BCV9EwwrIOfMr%2FJWmiFkiB%2F2N8%2BjJriJTqw3HYBNH4uzCh4fguYwRTqkPtBqnnwxjteZsTjL5gDK4ZvLbFzRQbcxYNLb4q0oCW%2BI03o%2BsMcoMGF%2F%2Fn1zV&X-Amz-Signature=72792fdffa112b59388591d7380857953ffe707d777b24a72fc64007abd538cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BAG6LB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC6HUagTWObivnyg1LbORmJTyF0rJZNQBbBFYZtitMnjAIhAPKjD9aVMXrLAAwekVZIeCX9MVFfp3Jv5%2BeqfCGg9X4LKv8DCEoQABoMNjM3NDIzMTgzODA1IgyCydDM3nB7R%2BJuUCkq3AMJpUFPdzSGLy5RK6p0gzKm0Fm7HZtDD%2Fnh7fZ%2Fr5674CrV62M8kBh3qVQYgvBSXUKzzxTYtquh3KtO2AU%2BpsBHUx4xng7YAQHsa8ou%2B%2B12d7fAlJK%2FykWEqu2Vshv7Yb0wFNKgdyjBkR4y5Bx%2BQO6qQLn6reETUNWkbYTPrR4NVcMiUs6ltprrOdL5ZrRa7054YwjPuPmMSuGz2RclHn%2BEelQBCEb7aK48Jk3DM2lgt7b3Lo8VGhUPc1Fg4X6pV6xL%2B00lVlQnipAehEicnLghOJcVpJoVVQsN%2FNSSp1Xxg2tL6rlaZc6uFg3jDh3LGWIxk4n8yYlgzGCpKPHoqoTIV%2B8HZvoQBTGtR05iUoOCexJE2mA8NFmMlbkXf7TpPgrR8L8IusR5J5f66Adz%2F%2FhKjEqR4GkghiY2iUL2%2Fb6mt0zeHZ5p4CbUzT1Oe61ZN%2B%2FiEBcTIXStopN0v7Qi4KKGoixSD1WiDKg9G%2F6q7DxYy2ZYpStsN03Brj3CEA6%2BvtNXdvCwFjGFsH%2B6RbXCHR1n%2FK4SX%2B8Uf8APTfi%2F1MCK31CxdO2yaLdYXSfnsGFfkLxWAiibF8JRRix6QMoXmgza2mZYX9ZlLslIkCcOJXDHpJbxq%2Bnp5MrdfZJm6jDAm8O9BjqkAbjWYxEfk5k6bPRoWsPEudKi6GGSFA2KfyD1e863R1t5RZFTGY5yZsa9A%2F2HXw1vzwNycOtxjXivEStzY%2Fdfh7RGlCvZHaVULRh9%2Fq1%2BCV9EwwrIOfMr%2FJWmiFkiB%2F2N8%2BjJriJTqw3HYBNH4uzCh4fguYwRTqkPtBqnnwxjteZsTjL5gDK4ZvLbFzRQbcxYNLb4q0oCW%2BI03o%2BsMcoMGF%2F%2Fn1zV&X-Amz-Signature=e12d9e3feec5370c6ee41e0f9a8653b38ed6b83e2c5375648e1e3429c16969f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BAG6LB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQC6HUagTWObivnyg1LbORmJTyF0rJZNQBbBFYZtitMnjAIhAPKjD9aVMXrLAAwekVZIeCX9MVFfp3Jv5%2BeqfCGg9X4LKv8DCEoQABoMNjM3NDIzMTgzODA1IgyCydDM3nB7R%2BJuUCkq3AMJpUFPdzSGLy5RK6p0gzKm0Fm7HZtDD%2Fnh7fZ%2Fr5674CrV62M8kBh3qVQYgvBSXUKzzxTYtquh3KtO2AU%2BpsBHUx4xng7YAQHsa8ou%2B%2B12d7fAlJK%2FykWEqu2Vshv7Yb0wFNKgdyjBkR4y5Bx%2BQO6qQLn6reETUNWkbYTPrR4NVcMiUs6ltprrOdL5ZrRa7054YwjPuPmMSuGz2RclHn%2BEelQBCEb7aK48Jk3DM2lgt7b3Lo8VGhUPc1Fg4X6pV6xL%2B00lVlQnipAehEicnLghOJcVpJoVVQsN%2FNSSp1Xxg2tL6rlaZc6uFg3jDh3LGWIxk4n8yYlgzGCpKPHoqoTIV%2B8HZvoQBTGtR05iUoOCexJE2mA8NFmMlbkXf7TpPgrR8L8IusR5J5f66Adz%2F%2FhKjEqR4GkghiY2iUL2%2Fb6mt0zeHZ5p4CbUzT1Oe61ZN%2B%2FiEBcTIXStopN0v7Qi4KKGoixSD1WiDKg9G%2F6q7DxYy2ZYpStsN03Brj3CEA6%2BvtNXdvCwFjGFsH%2B6RbXCHR1n%2FK4SX%2B8Uf8APTfi%2F1MCK31CxdO2yaLdYXSfnsGFfkLxWAiibF8JRRix6QMoXmgza2mZYX9ZlLslIkCcOJXDHpJbxq%2Bnp5MrdfZJm6jDAm8O9BjqkAbjWYxEfk5k6bPRoWsPEudKi6GGSFA2KfyD1e863R1t5RZFTGY5yZsa9A%2F2HXw1vzwNycOtxjXivEStzY%2Fdfh7RGlCvZHaVULRh9%2Fq1%2BCV9EwwrIOfMr%2FJWmiFkiB%2F2N8%2BjJriJTqw3HYBNH4uzCh4fguYwRTqkPtBqnnwxjteZsTjL5gDK4ZvLbFzRQbcxYNLb4q0oCW%2BI03o%2BsMcoMGF%2F%2Fn1zV&X-Amz-Signature=48cb49ea528639d006f6a0c89ab3008535b4ab61fbc9ea7d13061c920fd0f82a&X-Amz-SignedHeaders=host&x-id=GetObject)
