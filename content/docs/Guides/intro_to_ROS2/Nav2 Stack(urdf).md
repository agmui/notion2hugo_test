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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFGOOOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDv63e2Pyl%2Fe1lfZUuSWCRLJDCcrjdqzyfllI9tqF7rsQIhAIMf2C6od3KuU2lwLyoesiY3PT7jdBukwHWNV603LYfaKv8DCGYQABoMNjM3NDIzMTgzODA1IgxaNDwVtUt6Pp6f7Jsq3AP3tbaK8S5uH9oqtIqPDSoHduxaKEnueejrfJqGlS%2FzJS5TrXEMJF%2F1MZ9Vvsas49mqRLnyYKDCHKFzmmbOauo2f%2FF9Qf23db1MEi8kS8yrjtOE6XVkj4Y%2BBoAtg7jR755PyujevCZEE6mYOwEH8k6sbAWG4Ejg5ounRT0tialKQcU7E7ekwkKue7ovKSH8T39ZDy9Ik80uWZU%2BW6zGKRJXQCghQxrd49dNF%2B5DfDmwrA0Zt1snBVb7TTBxDBhwQJnP9bZch0JyxR%2BPvMj2d57NYSTSUx1bseDhg0ymy%2BFYb2B1owMlZUQwSGOymiKqa0paMfcVAsegztgvDNXHKkQ1Z82S%2Fuh9RPykhskMdSMWjEcnHYye3EMuTGxbzmybNMUuqvtG6eRXlenuyxPvePx%2FIGuKiHNBzml8I4sG2WR0jmH%2BvVhF6Gq47u3m9LeOPsYGAQZ7aFDfxocPU73QCcF8tg4jNSRZ0u3G3yKpH3X5bIyvimwjA2J0ikDCxj0YjMJhEOMg%2FFa8%2BqxGsnYZgnZocDBSySOsyuagPF3MOyXOjKjtfbJe1X3UZL2UfMhvWW6kD4DJL6lRnKyNiOW4XmPUGKYju5mPNUp%2BvrGvg2VqZGHRCKGMgHrOSj2WQDCWuZS9BjqkAbtZnfXlvWyuDXKTK5XMRx5HIoIdN7c3z1mSkhUSO8oB%2Bf4UWRTRliCXOFb6dwqqDzpcF3nMUQRLpF2pxlouolQYP8KFp%2FdjYtQwSYR6GNQz4O1X0iKMUZnx0qIAtSHnLCVdrdbH8ig%2Bu40Sl4DZ5W1ErminkjXnqoFO6NDSRVbXa0%2FNW8x%2BZb1X7YwRn%2BwuQ2E%2Be1wGq96o8h1lHbzSLehH1hcx&X-Amz-Signature=3b65d82dd837e47aef41735b28c19bbd6a0ec80aab81235ef94c99856621a8e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFGOOOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDv63e2Pyl%2Fe1lfZUuSWCRLJDCcrjdqzyfllI9tqF7rsQIhAIMf2C6od3KuU2lwLyoesiY3PT7jdBukwHWNV603LYfaKv8DCGYQABoMNjM3NDIzMTgzODA1IgxaNDwVtUt6Pp6f7Jsq3AP3tbaK8S5uH9oqtIqPDSoHduxaKEnueejrfJqGlS%2FzJS5TrXEMJF%2F1MZ9Vvsas49mqRLnyYKDCHKFzmmbOauo2f%2FF9Qf23db1MEi8kS8yrjtOE6XVkj4Y%2BBoAtg7jR755PyujevCZEE6mYOwEH8k6sbAWG4Ejg5ounRT0tialKQcU7E7ekwkKue7ovKSH8T39ZDy9Ik80uWZU%2BW6zGKRJXQCghQxrd49dNF%2B5DfDmwrA0Zt1snBVb7TTBxDBhwQJnP9bZch0JyxR%2BPvMj2d57NYSTSUx1bseDhg0ymy%2BFYb2B1owMlZUQwSGOymiKqa0paMfcVAsegztgvDNXHKkQ1Z82S%2Fuh9RPykhskMdSMWjEcnHYye3EMuTGxbzmybNMUuqvtG6eRXlenuyxPvePx%2FIGuKiHNBzml8I4sG2WR0jmH%2BvVhF6Gq47u3m9LeOPsYGAQZ7aFDfxocPU73QCcF8tg4jNSRZ0u3G3yKpH3X5bIyvimwjA2J0ikDCxj0YjMJhEOMg%2FFa8%2BqxGsnYZgnZocDBSySOsyuagPF3MOyXOjKjtfbJe1X3UZL2UfMhvWW6kD4DJL6lRnKyNiOW4XmPUGKYju5mPNUp%2BvrGvg2VqZGHRCKGMgHrOSj2WQDCWuZS9BjqkAbtZnfXlvWyuDXKTK5XMRx5HIoIdN7c3z1mSkhUSO8oB%2Bf4UWRTRliCXOFb6dwqqDzpcF3nMUQRLpF2pxlouolQYP8KFp%2FdjYtQwSYR6GNQz4O1X0iKMUZnx0qIAtSHnLCVdrdbH8ig%2Bu40Sl4DZ5W1ErminkjXnqoFO6NDSRVbXa0%2FNW8x%2BZb1X7YwRn%2BwuQ2E%2Be1wGq96o8h1lHbzSLehH1hcx&X-Amz-Signature=73a467c5c59f26d8a0bd581111ce34d00e15217dff0db2890708bfd463594bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFGOOOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDv63e2Pyl%2Fe1lfZUuSWCRLJDCcrjdqzyfllI9tqF7rsQIhAIMf2C6od3KuU2lwLyoesiY3PT7jdBukwHWNV603LYfaKv8DCGYQABoMNjM3NDIzMTgzODA1IgxaNDwVtUt6Pp6f7Jsq3AP3tbaK8S5uH9oqtIqPDSoHduxaKEnueejrfJqGlS%2FzJS5TrXEMJF%2F1MZ9Vvsas49mqRLnyYKDCHKFzmmbOauo2f%2FF9Qf23db1MEi8kS8yrjtOE6XVkj4Y%2BBoAtg7jR755PyujevCZEE6mYOwEH8k6sbAWG4Ejg5ounRT0tialKQcU7E7ekwkKue7ovKSH8T39ZDy9Ik80uWZU%2BW6zGKRJXQCghQxrd49dNF%2B5DfDmwrA0Zt1snBVb7TTBxDBhwQJnP9bZch0JyxR%2BPvMj2d57NYSTSUx1bseDhg0ymy%2BFYb2B1owMlZUQwSGOymiKqa0paMfcVAsegztgvDNXHKkQ1Z82S%2Fuh9RPykhskMdSMWjEcnHYye3EMuTGxbzmybNMUuqvtG6eRXlenuyxPvePx%2FIGuKiHNBzml8I4sG2WR0jmH%2BvVhF6Gq47u3m9LeOPsYGAQZ7aFDfxocPU73QCcF8tg4jNSRZ0u3G3yKpH3X5bIyvimwjA2J0ikDCxj0YjMJhEOMg%2FFa8%2BqxGsnYZgnZocDBSySOsyuagPF3MOyXOjKjtfbJe1X3UZL2UfMhvWW6kD4DJL6lRnKyNiOW4XmPUGKYju5mPNUp%2BvrGvg2VqZGHRCKGMgHrOSj2WQDCWuZS9BjqkAbtZnfXlvWyuDXKTK5XMRx5HIoIdN7c3z1mSkhUSO8oB%2Bf4UWRTRliCXOFb6dwqqDzpcF3nMUQRLpF2pxlouolQYP8KFp%2FdjYtQwSYR6GNQz4O1X0iKMUZnx0qIAtSHnLCVdrdbH8ig%2Bu40Sl4DZ5W1ErminkjXnqoFO6NDSRVbXa0%2FNW8x%2BZb1X7YwRn%2BwuQ2E%2Be1wGq96o8h1lHbzSLehH1hcx&X-Amz-Signature=ad912ab612ba010a9f3f8b78f4bea5f4ce9c71f6c4d28bc88c815f5fdf511a13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFGOOOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDv63e2Pyl%2Fe1lfZUuSWCRLJDCcrjdqzyfllI9tqF7rsQIhAIMf2C6od3KuU2lwLyoesiY3PT7jdBukwHWNV603LYfaKv8DCGYQABoMNjM3NDIzMTgzODA1IgxaNDwVtUt6Pp6f7Jsq3AP3tbaK8S5uH9oqtIqPDSoHduxaKEnueejrfJqGlS%2FzJS5TrXEMJF%2F1MZ9Vvsas49mqRLnyYKDCHKFzmmbOauo2f%2FF9Qf23db1MEi8kS8yrjtOE6XVkj4Y%2BBoAtg7jR755PyujevCZEE6mYOwEH8k6sbAWG4Ejg5ounRT0tialKQcU7E7ekwkKue7ovKSH8T39ZDy9Ik80uWZU%2BW6zGKRJXQCghQxrd49dNF%2B5DfDmwrA0Zt1snBVb7TTBxDBhwQJnP9bZch0JyxR%2BPvMj2d57NYSTSUx1bseDhg0ymy%2BFYb2B1owMlZUQwSGOymiKqa0paMfcVAsegztgvDNXHKkQ1Z82S%2Fuh9RPykhskMdSMWjEcnHYye3EMuTGxbzmybNMUuqvtG6eRXlenuyxPvePx%2FIGuKiHNBzml8I4sG2WR0jmH%2BvVhF6Gq47u3m9LeOPsYGAQZ7aFDfxocPU73QCcF8tg4jNSRZ0u3G3yKpH3X5bIyvimwjA2J0ikDCxj0YjMJhEOMg%2FFa8%2BqxGsnYZgnZocDBSySOsyuagPF3MOyXOjKjtfbJe1X3UZL2UfMhvWW6kD4DJL6lRnKyNiOW4XmPUGKYju5mPNUp%2BvrGvg2VqZGHRCKGMgHrOSj2WQDCWuZS9BjqkAbtZnfXlvWyuDXKTK5XMRx5HIoIdN7c3z1mSkhUSO8oB%2Bf4UWRTRliCXOFb6dwqqDzpcF3nMUQRLpF2pxlouolQYP8KFp%2FdjYtQwSYR6GNQz4O1X0iKMUZnx0qIAtSHnLCVdrdbH8ig%2Bu40Sl4DZ5W1ErminkjXnqoFO6NDSRVbXa0%2FNW8x%2BZb1X7YwRn%2BwuQ2E%2Be1wGq96o8h1lHbzSLehH1hcx&X-Amz-Signature=3a209c61e948634fccf83c51adee45e885d9282856c46e5fb4fd7bcc7cbf5c29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFGOOOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDv63e2Pyl%2Fe1lfZUuSWCRLJDCcrjdqzyfllI9tqF7rsQIhAIMf2C6od3KuU2lwLyoesiY3PT7jdBukwHWNV603LYfaKv8DCGYQABoMNjM3NDIzMTgzODA1IgxaNDwVtUt6Pp6f7Jsq3AP3tbaK8S5uH9oqtIqPDSoHduxaKEnueejrfJqGlS%2FzJS5TrXEMJF%2F1MZ9Vvsas49mqRLnyYKDCHKFzmmbOauo2f%2FF9Qf23db1MEi8kS8yrjtOE6XVkj4Y%2BBoAtg7jR755PyujevCZEE6mYOwEH8k6sbAWG4Ejg5ounRT0tialKQcU7E7ekwkKue7ovKSH8T39ZDy9Ik80uWZU%2BW6zGKRJXQCghQxrd49dNF%2B5DfDmwrA0Zt1snBVb7TTBxDBhwQJnP9bZch0JyxR%2BPvMj2d57NYSTSUx1bseDhg0ymy%2BFYb2B1owMlZUQwSGOymiKqa0paMfcVAsegztgvDNXHKkQ1Z82S%2Fuh9RPykhskMdSMWjEcnHYye3EMuTGxbzmybNMUuqvtG6eRXlenuyxPvePx%2FIGuKiHNBzml8I4sG2WR0jmH%2BvVhF6Gq47u3m9LeOPsYGAQZ7aFDfxocPU73QCcF8tg4jNSRZ0u3G3yKpH3X5bIyvimwjA2J0ikDCxj0YjMJhEOMg%2FFa8%2BqxGsnYZgnZocDBSySOsyuagPF3MOyXOjKjtfbJe1X3UZL2UfMhvWW6kD4DJL6lRnKyNiOW4XmPUGKYju5mPNUp%2BvrGvg2VqZGHRCKGMgHrOSj2WQDCWuZS9BjqkAbtZnfXlvWyuDXKTK5XMRx5HIoIdN7c3z1mSkhUSO8oB%2Bf4UWRTRliCXOFb6dwqqDzpcF3nMUQRLpF2pxlouolQYP8KFp%2FdjYtQwSYR6GNQz4O1X0iKMUZnx0qIAtSHnLCVdrdbH8ig%2Bu40Sl4DZ5W1ErminkjXnqoFO6NDSRVbXa0%2FNW8x%2BZb1X7YwRn%2BwuQ2E%2Be1wGq96o8h1lHbzSLehH1hcx&X-Amz-Signature=ca2cbe800401b33db7df6f3203f0cd38a0eac692e9a0f188b2475e554c7a2e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFGOOOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDv63e2Pyl%2Fe1lfZUuSWCRLJDCcrjdqzyfllI9tqF7rsQIhAIMf2C6od3KuU2lwLyoesiY3PT7jdBukwHWNV603LYfaKv8DCGYQABoMNjM3NDIzMTgzODA1IgxaNDwVtUt6Pp6f7Jsq3AP3tbaK8S5uH9oqtIqPDSoHduxaKEnueejrfJqGlS%2FzJS5TrXEMJF%2F1MZ9Vvsas49mqRLnyYKDCHKFzmmbOauo2f%2FF9Qf23db1MEi8kS8yrjtOE6XVkj4Y%2BBoAtg7jR755PyujevCZEE6mYOwEH8k6sbAWG4Ejg5ounRT0tialKQcU7E7ekwkKue7ovKSH8T39ZDy9Ik80uWZU%2BW6zGKRJXQCghQxrd49dNF%2B5DfDmwrA0Zt1snBVb7TTBxDBhwQJnP9bZch0JyxR%2BPvMj2d57NYSTSUx1bseDhg0ymy%2BFYb2B1owMlZUQwSGOymiKqa0paMfcVAsegztgvDNXHKkQ1Z82S%2Fuh9RPykhskMdSMWjEcnHYye3EMuTGxbzmybNMUuqvtG6eRXlenuyxPvePx%2FIGuKiHNBzml8I4sG2WR0jmH%2BvVhF6Gq47u3m9LeOPsYGAQZ7aFDfxocPU73QCcF8tg4jNSRZ0u3G3yKpH3X5bIyvimwjA2J0ikDCxj0YjMJhEOMg%2FFa8%2BqxGsnYZgnZocDBSySOsyuagPF3MOyXOjKjtfbJe1X3UZL2UfMhvWW6kD4DJL6lRnKyNiOW4XmPUGKYju5mPNUp%2BvrGvg2VqZGHRCKGMgHrOSj2WQDCWuZS9BjqkAbtZnfXlvWyuDXKTK5XMRx5HIoIdN7c3z1mSkhUSO8oB%2Bf4UWRTRliCXOFb6dwqqDzpcF3nMUQRLpF2pxlouolQYP8KFp%2FdjYtQwSYR6GNQz4O1X0iKMUZnx0qIAtSHnLCVdrdbH8ig%2Bu40Sl4DZ5W1ErminkjXnqoFO6NDSRVbXa0%2FNW8x%2BZb1X7YwRn%2BwuQ2E%2Be1wGq96o8h1lHbzSLehH1hcx&X-Amz-Signature=3e1a45cbeb162a662f3e5c086cb034397b295df17a845df7e0aafa885947cb09&X-Amz-SignedHeaders=host&x-id=GetObject)
