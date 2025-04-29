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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBXRZNB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF8Ap8poElNZGgbMmTR0jxQShfoh9kBdb0XqyPPGvsuAiEA3P9RtssaCAHDU0ViwIVS4guf%2FUBznNqGQnV2ToN5%2FWAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl%2BXDX21n6rCvtwBCrcAzg8YF5wGaS6gOvNrMtenwYuFAU%2BklzxHuSUpa70Tkp%2Bwz6Rq%2BWhFzopE9xPy0BobYOoSQrkBCmt%2BKG3da7l5JUZXQFW4CTkBNxDtO0GdZLow62CwfI2CpK978KpRDrtZOoXI5uV1azp1ew6Dm4r6jS3v5t6nZUk9PYje2eAGQ48EXKp88u0m%2BfvsVYwHGRqCsKRhMoqSlkoIcu5ZPLS7nBYF3CoGV5%2B490ex0bQ6oLzVaS4JdtYpYWIa5RAgaJdiyZ5ObRngX42nsZHVhJbPuQU0rNuwaU9nZMC4bhjh9ds97P0gH1MVM%2FKFbD50c1wikqaB%2BFQpI5TM12kNEQx1dZ2Pgy0KvE4apgrxt6rfxEIyG77KdE9hya5vyAhjHXm0ArNDpY4fhkWwzc25vj11cpV8f%2BuIsRYTONRqYzZrAGDiVTrBQXnGhKlhWMEYYWXrH6Pc1ggjODIw5bjgg7FXcIOf49OC2aCmI%2FVQawcWm2KJC8QiPtt6bCQEOuSQDARIIzWrJPbYgpqOPScwMDpFpzc1VnuKJvHHMzz18yO3qE414ojTwsiBU3R8wgtpvvnlNW8o2rDJt6xBZ8LJJLVLFo7uEYqvU2Kpo26hIpyNFcJmGurJXbBA6ppcuf9MKy%2FwMAGOqUBD%2BTunGLWo9l6YkyfY31VvNURBhdeUOckQ8VpULVzZbe7A2lfuVct20r%2BdtTvJFgVCYlAzKkSPBniRkJHsP%2FQ1POEX46Z6WSuo546riQ1QrRoNcZiQPu0kVdNdQUMWGWcNfEWtv5baiCF35cmENbWks%2FboGODudDwAqPh0m5IERkxoVY0swG%2BorMg%2BEhfXEmX%2Bgq65wOQmK%2FijSiBMX3iSIl6oq8x&X-Amz-Signature=fa9f3bc870e0977569d7de8baaf42763a1a3ddf8878d3f32f0cdbb487151e52c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBXRZNB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF8Ap8poElNZGgbMmTR0jxQShfoh9kBdb0XqyPPGvsuAiEA3P9RtssaCAHDU0ViwIVS4guf%2FUBznNqGQnV2ToN5%2FWAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl%2BXDX21n6rCvtwBCrcAzg8YF5wGaS6gOvNrMtenwYuFAU%2BklzxHuSUpa70Tkp%2Bwz6Rq%2BWhFzopE9xPy0BobYOoSQrkBCmt%2BKG3da7l5JUZXQFW4CTkBNxDtO0GdZLow62CwfI2CpK978KpRDrtZOoXI5uV1azp1ew6Dm4r6jS3v5t6nZUk9PYje2eAGQ48EXKp88u0m%2BfvsVYwHGRqCsKRhMoqSlkoIcu5ZPLS7nBYF3CoGV5%2B490ex0bQ6oLzVaS4JdtYpYWIa5RAgaJdiyZ5ObRngX42nsZHVhJbPuQU0rNuwaU9nZMC4bhjh9ds97P0gH1MVM%2FKFbD50c1wikqaB%2BFQpI5TM12kNEQx1dZ2Pgy0KvE4apgrxt6rfxEIyG77KdE9hya5vyAhjHXm0ArNDpY4fhkWwzc25vj11cpV8f%2BuIsRYTONRqYzZrAGDiVTrBQXnGhKlhWMEYYWXrH6Pc1ggjODIw5bjgg7FXcIOf49OC2aCmI%2FVQawcWm2KJC8QiPtt6bCQEOuSQDARIIzWrJPbYgpqOPScwMDpFpzc1VnuKJvHHMzz18yO3qE414ojTwsiBU3R8wgtpvvnlNW8o2rDJt6xBZ8LJJLVLFo7uEYqvU2Kpo26hIpyNFcJmGurJXbBA6ppcuf9MKy%2FwMAGOqUBD%2BTunGLWo9l6YkyfY31VvNURBhdeUOckQ8VpULVzZbe7A2lfuVct20r%2BdtTvJFgVCYlAzKkSPBniRkJHsP%2FQ1POEX46Z6WSuo546riQ1QrRoNcZiQPu0kVdNdQUMWGWcNfEWtv5baiCF35cmENbWks%2FboGODudDwAqPh0m5IERkxoVY0swG%2BorMg%2BEhfXEmX%2Bgq65wOQmK%2FijSiBMX3iSIl6oq8x&X-Amz-Signature=ee0c37c7d32bc5414224f6880c6312096e369c8d0639f0bbb0d00514548b9231&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBXRZNB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF8Ap8poElNZGgbMmTR0jxQShfoh9kBdb0XqyPPGvsuAiEA3P9RtssaCAHDU0ViwIVS4guf%2FUBznNqGQnV2ToN5%2FWAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl%2BXDX21n6rCvtwBCrcAzg8YF5wGaS6gOvNrMtenwYuFAU%2BklzxHuSUpa70Tkp%2Bwz6Rq%2BWhFzopE9xPy0BobYOoSQrkBCmt%2BKG3da7l5JUZXQFW4CTkBNxDtO0GdZLow62CwfI2CpK978KpRDrtZOoXI5uV1azp1ew6Dm4r6jS3v5t6nZUk9PYje2eAGQ48EXKp88u0m%2BfvsVYwHGRqCsKRhMoqSlkoIcu5ZPLS7nBYF3CoGV5%2B490ex0bQ6oLzVaS4JdtYpYWIa5RAgaJdiyZ5ObRngX42nsZHVhJbPuQU0rNuwaU9nZMC4bhjh9ds97P0gH1MVM%2FKFbD50c1wikqaB%2BFQpI5TM12kNEQx1dZ2Pgy0KvE4apgrxt6rfxEIyG77KdE9hya5vyAhjHXm0ArNDpY4fhkWwzc25vj11cpV8f%2BuIsRYTONRqYzZrAGDiVTrBQXnGhKlhWMEYYWXrH6Pc1ggjODIw5bjgg7FXcIOf49OC2aCmI%2FVQawcWm2KJC8QiPtt6bCQEOuSQDARIIzWrJPbYgpqOPScwMDpFpzc1VnuKJvHHMzz18yO3qE414ojTwsiBU3R8wgtpvvnlNW8o2rDJt6xBZ8LJJLVLFo7uEYqvU2Kpo26hIpyNFcJmGurJXbBA6ppcuf9MKy%2FwMAGOqUBD%2BTunGLWo9l6YkyfY31VvNURBhdeUOckQ8VpULVzZbe7A2lfuVct20r%2BdtTvJFgVCYlAzKkSPBniRkJHsP%2FQ1POEX46Z6WSuo546riQ1QrRoNcZiQPu0kVdNdQUMWGWcNfEWtv5baiCF35cmENbWks%2FboGODudDwAqPh0m5IERkxoVY0swG%2BorMg%2BEhfXEmX%2Bgq65wOQmK%2FijSiBMX3iSIl6oq8x&X-Amz-Signature=d6588d2529a3d4b55cf2440eae197486067ea5b57a7fd7cf215b702640aa2f68&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBXRZNB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF8Ap8poElNZGgbMmTR0jxQShfoh9kBdb0XqyPPGvsuAiEA3P9RtssaCAHDU0ViwIVS4guf%2FUBznNqGQnV2ToN5%2FWAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl%2BXDX21n6rCvtwBCrcAzg8YF5wGaS6gOvNrMtenwYuFAU%2BklzxHuSUpa70Tkp%2Bwz6Rq%2BWhFzopE9xPy0BobYOoSQrkBCmt%2BKG3da7l5JUZXQFW4CTkBNxDtO0GdZLow62CwfI2CpK978KpRDrtZOoXI5uV1azp1ew6Dm4r6jS3v5t6nZUk9PYje2eAGQ48EXKp88u0m%2BfvsVYwHGRqCsKRhMoqSlkoIcu5ZPLS7nBYF3CoGV5%2B490ex0bQ6oLzVaS4JdtYpYWIa5RAgaJdiyZ5ObRngX42nsZHVhJbPuQU0rNuwaU9nZMC4bhjh9ds97P0gH1MVM%2FKFbD50c1wikqaB%2BFQpI5TM12kNEQx1dZ2Pgy0KvE4apgrxt6rfxEIyG77KdE9hya5vyAhjHXm0ArNDpY4fhkWwzc25vj11cpV8f%2BuIsRYTONRqYzZrAGDiVTrBQXnGhKlhWMEYYWXrH6Pc1ggjODIw5bjgg7FXcIOf49OC2aCmI%2FVQawcWm2KJC8QiPtt6bCQEOuSQDARIIzWrJPbYgpqOPScwMDpFpzc1VnuKJvHHMzz18yO3qE414ojTwsiBU3R8wgtpvvnlNW8o2rDJt6xBZ8LJJLVLFo7uEYqvU2Kpo26hIpyNFcJmGurJXbBA6ppcuf9MKy%2FwMAGOqUBD%2BTunGLWo9l6YkyfY31VvNURBhdeUOckQ8VpULVzZbe7A2lfuVct20r%2BdtTvJFgVCYlAzKkSPBniRkJHsP%2FQ1POEX46Z6WSuo546riQ1QrRoNcZiQPu0kVdNdQUMWGWcNfEWtv5baiCF35cmENbWks%2FboGODudDwAqPh0m5IERkxoVY0swG%2BorMg%2BEhfXEmX%2Bgq65wOQmK%2FijSiBMX3iSIl6oq8x&X-Amz-Signature=3076dd1567b51e2b1c2ecfc399d50f195ecb6729bdb03f3bc14d82eaccfac650&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBXRZNB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF8Ap8poElNZGgbMmTR0jxQShfoh9kBdb0XqyPPGvsuAiEA3P9RtssaCAHDU0ViwIVS4guf%2FUBznNqGQnV2ToN5%2FWAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl%2BXDX21n6rCvtwBCrcAzg8YF5wGaS6gOvNrMtenwYuFAU%2BklzxHuSUpa70Tkp%2Bwz6Rq%2BWhFzopE9xPy0BobYOoSQrkBCmt%2BKG3da7l5JUZXQFW4CTkBNxDtO0GdZLow62CwfI2CpK978KpRDrtZOoXI5uV1azp1ew6Dm4r6jS3v5t6nZUk9PYje2eAGQ48EXKp88u0m%2BfvsVYwHGRqCsKRhMoqSlkoIcu5ZPLS7nBYF3CoGV5%2B490ex0bQ6oLzVaS4JdtYpYWIa5RAgaJdiyZ5ObRngX42nsZHVhJbPuQU0rNuwaU9nZMC4bhjh9ds97P0gH1MVM%2FKFbD50c1wikqaB%2BFQpI5TM12kNEQx1dZ2Pgy0KvE4apgrxt6rfxEIyG77KdE9hya5vyAhjHXm0ArNDpY4fhkWwzc25vj11cpV8f%2BuIsRYTONRqYzZrAGDiVTrBQXnGhKlhWMEYYWXrH6Pc1ggjODIw5bjgg7FXcIOf49OC2aCmI%2FVQawcWm2KJC8QiPtt6bCQEOuSQDARIIzWrJPbYgpqOPScwMDpFpzc1VnuKJvHHMzz18yO3qE414ojTwsiBU3R8wgtpvvnlNW8o2rDJt6xBZ8LJJLVLFo7uEYqvU2Kpo26hIpyNFcJmGurJXbBA6ppcuf9MKy%2FwMAGOqUBD%2BTunGLWo9l6YkyfY31VvNURBhdeUOckQ8VpULVzZbe7A2lfuVct20r%2BdtTvJFgVCYlAzKkSPBniRkJHsP%2FQ1POEX46Z6WSuo546riQ1QrRoNcZiQPu0kVdNdQUMWGWcNfEWtv5baiCF35cmENbWks%2FboGODudDwAqPh0m5IERkxoVY0swG%2BorMg%2BEhfXEmX%2Bgq65wOQmK%2FijSiBMX3iSIl6oq8x&X-Amz-Signature=1add8891383a921f5c20e643ef3eb322e430e435eee045ab14ee2bd05fa081cf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBXRZNB%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHF8Ap8poElNZGgbMmTR0jxQShfoh9kBdb0XqyPPGvsuAiEA3P9RtssaCAHDU0ViwIVS4guf%2FUBznNqGQnV2ToN5%2FWAqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl%2BXDX21n6rCvtwBCrcAzg8YF5wGaS6gOvNrMtenwYuFAU%2BklzxHuSUpa70Tkp%2Bwz6Rq%2BWhFzopE9xPy0BobYOoSQrkBCmt%2BKG3da7l5JUZXQFW4CTkBNxDtO0GdZLow62CwfI2CpK978KpRDrtZOoXI5uV1azp1ew6Dm4r6jS3v5t6nZUk9PYje2eAGQ48EXKp88u0m%2BfvsVYwHGRqCsKRhMoqSlkoIcu5ZPLS7nBYF3CoGV5%2B490ex0bQ6oLzVaS4JdtYpYWIa5RAgaJdiyZ5ObRngX42nsZHVhJbPuQU0rNuwaU9nZMC4bhjh9ds97P0gH1MVM%2FKFbD50c1wikqaB%2BFQpI5TM12kNEQx1dZ2Pgy0KvE4apgrxt6rfxEIyG77KdE9hya5vyAhjHXm0ArNDpY4fhkWwzc25vj11cpV8f%2BuIsRYTONRqYzZrAGDiVTrBQXnGhKlhWMEYYWXrH6Pc1ggjODIw5bjgg7FXcIOf49OC2aCmI%2FVQawcWm2KJC8QiPtt6bCQEOuSQDARIIzWrJPbYgpqOPScwMDpFpzc1VnuKJvHHMzz18yO3qE414ojTwsiBU3R8wgtpvvnlNW8o2rDJt6xBZ8LJJLVLFo7uEYqvU2Kpo26hIpyNFcJmGurJXbBA6ppcuf9MKy%2FwMAGOqUBD%2BTunGLWo9l6YkyfY31VvNURBhdeUOckQ8VpULVzZbe7A2lfuVct20r%2BdtTvJFgVCYlAzKkSPBniRkJHsP%2FQ1POEX46Z6WSuo546riQ1QrRoNcZiQPu0kVdNdQUMWGWcNfEWtv5baiCF35cmENbWks%2FboGODudDwAqPh0m5IERkxoVY0swG%2BorMg%2BEhfXEmX%2Bgq65wOQmK%2FijSiBMX3iSIl6oq8x&X-Amz-Signature=5344c9cd3eebb0902b71f570898da914628004d77afaf31bc9dd60136c9815d3&X-Amz-SignedHeaders=host&x-id=GetObject)
