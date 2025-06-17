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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUVQZR2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsQyOx7R35xYCdGk%2FfpFCSxoreuHbCRDv%2BpSwIvUC0sgIhAL9MltDDUmS3uotftdRpXJYdcrMOUITZWAXAAyK6Dtj%2FKv8DCHUQABoMNjM3NDIzMTgzODA1Igz6aUqAXYrGTe1nwCUq3AMR%2FJS%2FQYagUBt64uWtGN8AYvmlNBCCcN%2Fb3ySYb5xjf3KTw3PFR83%2FxUUfKQgxdTIJyxkS6HJZLZvMagMbs3Q99C9kj8yA0letzyggK2Ptrg%2FVqsbHMcXNX3S1a7PrbTzLN0Z9r%2FR7NNyAD7DHMb8kSmM13Zlp77UyLRgEBhotGrdoB%2FUJypHrlt2QX%2Fmtu9P%2BgwOe4cUgTQRzqFYwhhvqfQxswmz2ck7N%2FXQ27WFDOfpNZUzeHKuu36LMwO9YZw0H%2FVLmK7zMP1fmio5OE32wQ6A%2FiXA4GyrIoPHTtlJtG0vInWeh8k6BSXY2joOpXQLHTbTmBJishoIDD8pHrzbg903gfkNINi1Vw5b6vC7r%2F1fSsnbb6AErXfapff2ZNNu5nfGelB6wF%2F2FwrPNprX%2FZtB1tVQ%2BLdtI2IoK0ooVHAlyc00bF8KE%2BGPBJBZqfFXWL%2BfHUU2q8FduUWhA7LB2DIKEn5PXNnRJ8mwjBQmgDpK44ybKbnt1tc5V6PhpvwWU09aNWV47GPH2wujN0ylgCndfGG2V6EZId07ncOirNWBA0od5qXcXGnHXvdTSdqegCSvbQ0v3j57kJdF1pKQFws0mcTJFOydrKvLINI8tUS2sb3ennPP7pKPrVDC6psXCBjqkAaxRh0INTMTV2KviT%2Fh0o6nMkp7hQd6EMR%2Bx%2F20%2Fwe93QYrr3NNqymaVFCs4yj%2Fg0PCyCuh%2BagSLp79mT1qaAfHts7pU3FM%2F9pOYpLsqCU1W1ID8AHm%2BFcoeEoqyoLBW14%2FGZ0FjGEqwqGpxVI5enoSLK0gLyUJH6tNbo2lFxrTkRavjSA9omtSL9emU45pDqL9MMuUzoMJMT3mTAH8qcd1xO%2B5o&X-Amz-Signature=aca790418544f775ff4abd072e18703c44473a1754f9adcfa13a93d2cd2210ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUVQZR2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsQyOx7R35xYCdGk%2FfpFCSxoreuHbCRDv%2BpSwIvUC0sgIhAL9MltDDUmS3uotftdRpXJYdcrMOUITZWAXAAyK6Dtj%2FKv8DCHUQABoMNjM3NDIzMTgzODA1Igz6aUqAXYrGTe1nwCUq3AMR%2FJS%2FQYagUBt64uWtGN8AYvmlNBCCcN%2Fb3ySYb5xjf3KTw3PFR83%2FxUUfKQgxdTIJyxkS6HJZLZvMagMbs3Q99C9kj8yA0letzyggK2Ptrg%2FVqsbHMcXNX3S1a7PrbTzLN0Z9r%2FR7NNyAD7DHMb8kSmM13Zlp77UyLRgEBhotGrdoB%2FUJypHrlt2QX%2Fmtu9P%2BgwOe4cUgTQRzqFYwhhvqfQxswmz2ck7N%2FXQ27WFDOfpNZUzeHKuu36LMwO9YZw0H%2FVLmK7zMP1fmio5OE32wQ6A%2FiXA4GyrIoPHTtlJtG0vInWeh8k6BSXY2joOpXQLHTbTmBJishoIDD8pHrzbg903gfkNINi1Vw5b6vC7r%2F1fSsnbb6AErXfapff2ZNNu5nfGelB6wF%2F2FwrPNprX%2FZtB1tVQ%2BLdtI2IoK0ooVHAlyc00bF8KE%2BGPBJBZqfFXWL%2BfHUU2q8FduUWhA7LB2DIKEn5PXNnRJ8mwjBQmgDpK44ybKbnt1tc5V6PhpvwWU09aNWV47GPH2wujN0ylgCndfGG2V6EZId07ncOirNWBA0od5qXcXGnHXvdTSdqegCSvbQ0v3j57kJdF1pKQFws0mcTJFOydrKvLINI8tUS2sb3ennPP7pKPrVDC6psXCBjqkAaxRh0INTMTV2KviT%2Fh0o6nMkp7hQd6EMR%2Bx%2F20%2Fwe93QYrr3NNqymaVFCs4yj%2Fg0PCyCuh%2BagSLp79mT1qaAfHts7pU3FM%2F9pOYpLsqCU1W1ID8AHm%2BFcoeEoqyoLBW14%2FGZ0FjGEqwqGpxVI5enoSLK0gLyUJH6tNbo2lFxrTkRavjSA9omtSL9emU45pDqL9MMuUzoMJMT3mTAH8qcd1xO%2B5o&X-Amz-Signature=88156415de2e41d236ba0999d2df3daad3938284a0e8e8c5c41990bc190f6ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUVQZR2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsQyOx7R35xYCdGk%2FfpFCSxoreuHbCRDv%2BpSwIvUC0sgIhAL9MltDDUmS3uotftdRpXJYdcrMOUITZWAXAAyK6Dtj%2FKv8DCHUQABoMNjM3NDIzMTgzODA1Igz6aUqAXYrGTe1nwCUq3AMR%2FJS%2FQYagUBt64uWtGN8AYvmlNBCCcN%2Fb3ySYb5xjf3KTw3PFR83%2FxUUfKQgxdTIJyxkS6HJZLZvMagMbs3Q99C9kj8yA0letzyggK2Ptrg%2FVqsbHMcXNX3S1a7PrbTzLN0Z9r%2FR7NNyAD7DHMb8kSmM13Zlp77UyLRgEBhotGrdoB%2FUJypHrlt2QX%2Fmtu9P%2BgwOe4cUgTQRzqFYwhhvqfQxswmz2ck7N%2FXQ27WFDOfpNZUzeHKuu36LMwO9YZw0H%2FVLmK7zMP1fmio5OE32wQ6A%2FiXA4GyrIoPHTtlJtG0vInWeh8k6BSXY2joOpXQLHTbTmBJishoIDD8pHrzbg903gfkNINi1Vw5b6vC7r%2F1fSsnbb6AErXfapff2ZNNu5nfGelB6wF%2F2FwrPNprX%2FZtB1tVQ%2BLdtI2IoK0ooVHAlyc00bF8KE%2BGPBJBZqfFXWL%2BfHUU2q8FduUWhA7LB2DIKEn5PXNnRJ8mwjBQmgDpK44ybKbnt1tc5V6PhpvwWU09aNWV47GPH2wujN0ylgCndfGG2V6EZId07ncOirNWBA0od5qXcXGnHXvdTSdqegCSvbQ0v3j57kJdF1pKQFws0mcTJFOydrKvLINI8tUS2sb3ennPP7pKPrVDC6psXCBjqkAaxRh0INTMTV2KviT%2Fh0o6nMkp7hQd6EMR%2Bx%2F20%2Fwe93QYrr3NNqymaVFCs4yj%2Fg0PCyCuh%2BagSLp79mT1qaAfHts7pU3FM%2F9pOYpLsqCU1W1ID8AHm%2BFcoeEoqyoLBW14%2FGZ0FjGEqwqGpxVI5enoSLK0gLyUJH6tNbo2lFxrTkRavjSA9omtSL9emU45pDqL9MMuUzoMJMT3mTAH8qcd1xO%2B5o&X-Amz-Signature=70104b8bace71f125ac998b40b6095ba700b42344411c347fab3c25cc60e3666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUVQZR2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsQyOx7R35xYCdGk%2FfpFCSxoreuHbCRDv%2BpSwIvUC0sgIhAL9MltDDUmS3uotftdRpXJYdcrMOUITZWAXAAyK6Dtj%2FKv8DCHUQABoMNjM3NDIzMTgzODA1Igz6aUqAXYrGTe1nwCUq3AMR%2FJS%2FQYagUBt64uWtGN8AYvmlNBCCcN%2Fb3ySYb5xjf3KTw3PFR83%2FxUUfKQgxdTIJyxkS6HJZLZvMagMbs3Q99C9kj8yA0letzyggK2Ptrg%2FVqsbHMcXNX3S1a7PrbTzLN0Z9r%2FR7NNyAD7DHMb8kSmM13Zlp77UyLRgEBhotGrdoB%2FUJypHrlt2QX%2Fmtu9P%2BgwOe4cUgTQRzqFYwhhvqfQxswmz2ck7N%2FXQ27WFDOfpNZUzeHKuu36LMwO9YZw0H%2FVLmK7zMP1fmio5OE32wQ6A%2FiXA4GyrIoPHTtlJtG0vInWeh8k6BSXY2joOpXQLHTbTmBJishoIDD8pHrzbg903gfkNINi1Vw5b6vC7r%2F1fSsnbb6AErXfapff2ZNNu5nfGelB6wF%2F2FwrPNprX%2FZtB1tVQ%2BLdtI2IoK0ooVHAlyc00bF8KE%2BGPBJBZqfFXWL%2BfHUU2q8FduUWhA7LB2DIKEn5PXNnRJ8mwjBQmgDpK44ybKbnt1tc5V6PhpvwWU09aNWV47GPH2wujN0ylgCndfGG2V6EZId07ncOirNWBA0od5qXcXGnHXvdTSdqegCSvbQ0v3j57kJdF1pKQFws0mcTJFOydrKvLINI8tUS2sb3ennPP7pKPrVDC6psXCBjqkAaxRh0INTMTV2KviT%2Fh0o6nMkp7hQd6EMR%2Bx%2F20%2Fwe93QYrr3NNqymaVFCs4yj%2Fg0PCyCuh%2BagSLp79mT1qaAfHts7pU3FM%2F9pOYpLsqCU1W1ID8AHm%2BFcoeEoqyoLBW14%2FGZ0FjGEqwqGpxVI5enoSLK0gLyUJH6tNbo2lFxrTkRavjSA9omtSL9emU45pDqL9MMuUzoMJMT3mTAH8qcd1xO%2B5o&X-Amz-Signature=6713316c158fd9bef9668c4f41ee6b15d9dff10cbf28f180a6e9905e7a10195b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUVQZR2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsQyOx7R35xYCdGk%2FfpFCSxoreuHbCRDv%2BpSwIvUC0sgIhAL9MltDDUmS3uotftdRpXJYdcrMOUITZWAXAAyK6Dtj%2FKv8DCHUQABoMNjM3NDIzMTgzODA1Igz6aUqAXYrGTe1nwCUq3AMR%2FJS%2FQYagUBt64uWtGN8AYvmlNBCCcN%2Fb3ySYb5xjf3KTw3PFR83%2FxUUfKQgxdTIJyxkS6HJZLZvMagMbs3Q99C9kj8yA0letzyggK2Ptrg%2FVqsbHMcXNX3S1a7PrbTzLN0Z9r%2FR7NNyAD7DHMb8kSmM13Zlp77UyLRgEBhotGrdoB%2FUJypHrlt2QX%2Fmtu9P%2BgwOe4cUgTQRzqFYwhhvqfQxswmz2ck7N%2FXQ27WFDOfpNZUzeHKuu36LMwO9YZw0H%2FVLmK7zMP1fmio5OE32wQ6A%2FiXA4GyrIoPHTtlJtG0vInWeh8k6BSXY2joOpXQLHTbTmBJishoIDD8pHrzbg903gfkNINi1Vw5b6vC7r%2F1fSsnbb6AErXfapff2ZNNu5nfGelB6wF%2F2FwrPNprX%2FZtB1tVQ%2BLdtI2IoK0ooVHAlyc00bF8KE%2BGPBJBZqfFXWL%2BfHUU2q8FduUWhA7LB2DIKEn5PXNnRJ8mwjBQmgDpK44ybKbnt1tc5V6PhpvwWU09aNWV47GPH2wujN0ylgCndfGG2V6EZId07ncOirNWBA0od5qXcXGnHXvdTSdqegCSvbQ0v3j57kJdF1pKQFws0mcTJFOydrKvLINI8tUS2sb3ennPP7pKPrVDC6psXCBjqkAaxRh0INTMTV2KviT%2Fh0o6nMkp7hQd6EMR%2Bx%2F20%2Fwe93QYrr3NNqymaVFCs4yj%2Fg0PCyCuh%2BagSLp79mT1qaAfHts7pU3FM%2F9pOYpLsqCU1W1ID8AHm%2BFcoeEoqyoLBW14%2FGZ0FjGEqwqGpxVI5enoSLK0gLyUJH6tNbo2lFxrTkRavjSA9omtSL9emU45pDqL9MMuUzoMJMT3mTAH8qcd1xO%2B5o&X-Amz-Signature=f313ab81b5e98d843c57865fb956532d14946d91696eed248be9c21dd2f084a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THUVQZR2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsQyOx7R35xYCdGk%2FfpFCSxoreuHbCRDv%2BpSwIvUC0sgIhAL9MltDDUmS3uotftdRpXJYdcrMOUITZWAXAAyK6Dtj%2FKv8DCHUQABoMNjM3NDIzMTgzODA1Igz6aUqAXYrGTe1nwCUq3AMR%2FJS%2FQYagUBt64uWtGN8AYvmlNBCCcN%2Fb3ySYb5xjf3KTw3PFR83%2FxUUfKQgxdTIJyxkS6HJZLZvMagMbs3Q99C9kj8yA0letzyggK2Ptrg%2FVqsbHMcXNX3S1a7PrbTzLN0Z9r%2FR7NNyAD7DHMb8kSmM13Zlp77UyLRgEBhotGrdoB%2FUJypHrlt2QX%2Fmtu9P%2BgwOe4cUgTQRzqFYwhhvqfQxswmz2ck7N%2FXQ27WFDOfpNZUzeHKuu36LMwO9YZw0H%2FVLmK7zMP1fmio5OE32wQ6A%2FiXA4GyrIoPHTtlJtG0vInWeh8k6BSXY2joOpXQLHTbTmBJishoIDD8pHrzbg903gfkNINi1Vw5b6vC7r%2F1fSsnbb6AErXfapff2ZNNu5nfGelB6wF%2F2FwrPNprX%2FZtB1tVQ%2BLdtI2IoK0ooVHAlyc00bF8KE%2BGPBJBZqfFXWL%2BfHUU2q8FduUWhA7LB2DIKEn5PXNnRJ8mwjBQmgDpK44ybKbnt1tc5V6PhpvwWU09aNWV47GPH2wujN0ylgCndfGG2V6EZId07ncOirNWBA0od5qXcXGnHXvdTSdqegCSvbQ0v3j57kJdF1pKQFws0mcTJFOydrKvLINI8tUS2sb3ennPP7pKPrVDC6psXCBjqkAaxRh0INTMTV2KviT%2Fh0o6nMkp7hQd6EMR%2Bx%2F20%2Fwe93QYrr3NNqymaVFCs4yj%2Fg0PCyCuh%2BagSLp79mT1qaAfHts7pU3FM%2F9pOYpLsqCU1W1ID8AHm%2BFcoeEoqyoLBW14%2FGZ0FjGEqwqGpxVI5enoSLK0gLyUJH6tNbo2lFxrTkRavjSA9omtSL9emU45pDqL9MMuUzoMJMT3mTAH8qcd1xO%2B5o&X-Amz-Signature=f516e3bf903304537f242ae7d67ea67028957e338ebc3a8342d8d487dc1a1062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
