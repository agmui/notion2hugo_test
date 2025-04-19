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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UR6ZKLP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHGpy9dCZOBt%2FnpiggCSQMwZDKsgCAXaUWm%2F1uU%2FWqsPAiAFYP%2FgiTkV71345nBw29zJxPRtlF75wYEpB%2F6YrvxSxyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSv3lLY01VEsf020EKtwDz0J90uHZgL8sEBDGSEkt8tEAKqgSFkLsYAp%2FmE0vbqru3sp8FwTtjrnsJsg8J0yuowY%2BwQhE2NFDXy7Mq%2Fe6j%2BUxpFgq3NWnAkx6RYNpUglOEJU8pSohxGBWocmz09YzvB9tGrVfeXrQXEMGF5Nw6lkfwcWp%2FOvJf5a9BUlp9ZW%2FAVCtkuhOU%2F4nl2ISGL6%2FrMB%2F4vyq4ZzMAFkEZ6jWbz15FMF%2FH%2FmF1QEbgFJLRoHGva5knhKCPaSJMgpckT8aqv9Vjt0BkhtHknDDtISJFIJrMZx%2BcaNwQEuxMGPrHKgUOvBV%2Bs3OcrVF3W4MwTCRWHgWP0hEZ6vFnTSC7UoKgxcruL4p92z0uZ%2Bf62m%2BCr1thopdxr7WbllDMQCRbDJA7azpORHZCWNsS8RzR9vmn852Tc4k4DttR2qyHTzeU2F733sActk9rPGJ5U2KHwDhSt3qArenmv6hDQ9qNtVwUJ2IRZiSoai91iOZeutMobxuNaHTlAxlgl98hX9TNg1dvk3Gqbcdq%2FPKBe09MCsU05KjNYq27ot9ZGi29uSN4TnmuxEIInKJ%2FyoOwVFP4BNm%2B1mC5%2B%2B5iR2iINc9IznRN3iH7JWMjl7O234WAvVE1GFfOxdGGA9R9CYTdg4wzqOOwAY6pgEcGQApbtNBaAvskp7Bjx2cxgr9FJYbV0u7L8pa64aphfQCtJMyyMfiWcMjY1NBBgffVts1OnLTmbA4e%2Bd9m%2B54N2apIQQJzMqB5TVNlbLPO4Q3IVgabYsKD0mkQdaNTJ1Y2ohl8NUS%2BqL7nMwSKdYXNrrBHEViHqbno0uq8994oODdUjJ9rL1cgzzaPoe2%2BUiQBRhr5zNDQLZ40PFcVMHGLD3GAdT9&X-Amz-Signature=c8e4bfd86d25b601c150626f9a25981e199444208a0a212a91154c537a721253&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UR6ZKLP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHGpy9dCZOBt%2FnpiggCSQMwZDKsgCAXaUWm%2F1uU%2FWqsPAiAFYP%2FgiTkV71345nBw29zJxPRtlF75wYEpB%2F6YrvxSxyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSv3lLY01VEsf020EKtwDz0J90uHZgL8sEBDGSEkt8tEAKqgSFkLsYAp%2FmE0vbqru3sp8FwTtjrnsJsg8J0yuowY%2BwQhE2NFDXy7Mq%2Fe6j%2BUxpFgq3NWnAkx6RYNpUglOEJU8pSohxGBWocmz09YzvB9tGrVfeXrQXEMGF5Nw6lkfwcWp%2FOvJf5a9BUlp9ZW%2FAVCtkuhOU%2F4nl2ISGL6%2FrMB%2F4vyq4ZzMAFkEZ6jWbz15FMF%2FH%2FmF1QEbgFJLRoHGva5knhKCPaSJMgpckT8aqv9Vjt0BkhtHknDDtISJFIJrMZx%2BcaNwQEuxMGPrHKgUOvBV%2Bs3OcrVF3W4MwTCRWHgWP0hEZ6vFnTSC7UoKgxcruL4p92z0uZ%2Bf62m%2BCr1thopdxr7WbllDMQCRbDJA7azpORHZCWNsS8RzR9vmn852Tc4k4DttR2qyHTzeU2F733sActk9rPGJ5U2KHwDhSt3qArenmv6hDQ9qNtVwUJ2IRZiSoai91iOZeutMobxuNaHTlAxlgl98hX9TNg1dvk3Gqbcdq%2FPKBe09MCsU05KjNYq27ot9ZGi29uSN4TnmuxEIInKJ%2FyoOwVFP4BNm%2B1mC5%2B%2B5iR2iINc9IznRN3iH7JWMjl7O234WAvVE1GFfOxdGGA9R9CYTdg4wzqOOwAY6pgEcGQApbtNBaAvskp7Bjx2cxgr9FJYbV0u7L8pa64aphfQCtJMyyMfiWcMjY1NBBgffVts1OnLTmbA4e%2Bd9m%2B54N2apIQQJzMqB5TVNlbLPO4Q3IVgabYsKD0mkQdaNTJ1Y2ohl8NUS%2BqL7nMwSKdYXNrrBHEViHqbno0uq8994oODdUjJ9rL1cgzzaPoe2%2BUiQBRhr5zNDQLZ40PFcVMHGLD3GAdT9&X-Amz-Signature=c0d812629a26b6670ed080d8a0c77350f02aa60e9555c6380f9069c762376d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UR6ZKLP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHGpy9dCZOBt%2FnpiggCSQMwZDKsgCAXaUWm%2F1uU%2FWqsPAiAFYP%2FgiTkV71345nBw29zJxPRtlF75wYEpB%2F6YrvxSxyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSv3lLY01VEsf020EKtwDz0J90uHZgL8sEBDGSEkt8tEAKqgSFkLsYAp%2FmE0vbqru3sp8FwTtjrnsJsg8J0yuowY%2BwQhE2NFDXy7Mq%2Fe6j%2BUxpFgq3NWnAkx6RYNpUglOEJU8pSohxGBWocmz09YzvB9tGrVfeXrQXEMGF5Nw6lkfwcWp%2FOvJf5a9BUlp9ZW%2FAVCtkuhOU%2F4nl2ISGL6%2FrMB%2F4vyq4ZzMAFkEZ6jWbz15FMF%2FH%2FmF1QEbgFJLRoHGva5knhKCPaSJMgpckT8aqv9Vjt0BkhtHknDDtISJFIJrMZx%2BcaNwQEuxMGPrHKgUOvBV%2Bs3OcrVF3W4MwTCRWHgWP0hEZ6vFnTSC7UoKgxcruL4p92z0uZ%2Bf62m%2BCr1thopdxr7WbllDMQCRbDJA7azpORHZCWNsS8RzR9vmn852Tc4k4DttR2qyHTzeU2F733sActk9rPGJ5U2KHwDhSt3qArenmv6hDQ9qNtVwUJ2IRZiSoai91iOZeutMobxuNaHTlAxlgl98hX9TNg1dvk3Gqbcdq%2FPKBe09MCsU05KjNYq27ot9ZGi29uSN4TnmuxEIInKJ%2FyoOwVFP4BNm%2B1mC5%2B%2B5iR2iINc9IznRN3iH7JWMjl7O234WAvVE1GFfOxdGGA9R9CYTdg4wzqOOwAY6pgEcGQApbtNBaAvskp7Bjx2cxgr9FJYbV0u7L8pa64aphfQCtJMyyMfiWcMjY1NBBgffVts1OnLTmbA4e%2Bd9m%2B54N2apIQQJzMqB5TVNlbLPO4Q3IVgabYsKD0mkQdaNTJ1Y2ohl8NUS%2BqL7nMwSKdYXNrrBHEViHqbno0uq8994oODdUjJ9rL1cgzzaPoe2%2BUiQBRhr5zNDQLZ40PFcVMHGLD3GAdT9&X-Amz-Signature=79e36074f5de6c2d3cb992a2412a282bbad60684deeae029f05190378d5b780d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UR6ZKLP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHGpy9dCZOBt%2FnpiggCSQMwZDKsgCAXaUWm%2F1uU%2FWqsPAiAFYP%2FgiTkV71345nBw29zJxPRtlF75wYEpB%2F6YrvxSxyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSv3lLY01VEsf020EKtwDz0J90uHZgL8sEBDGSEkt8tEAKqgSFkLsYAp%2FmE0vbqru3sp8FwTtjrnsJsg8J0yuowY%2BwQhE2NFDXy7Mq%2Fe6j%2BUxpFgq3NWnAkx6RYNpUglOEJU8pSohxGBWocmz09YzvB9tGrVfeXrQXEMGF5Nw6lkfwcWp%2FOvJf5a9BUlp9ZW%2FAVCtkuhOU%2F4nl2ISGL6%2FrMB%2F4vyq4ZzMAFkEZ6jWbz15FMF%2FH%2FmF1QEbgFJLRoHGva5knhKCPaSJMgpckT8aqv9Vjt0BkhtHknDDtISJFIJrMZx%2BcaNwQEuxMGPrHKgUOvBV%2Bs3OcrVF3W4MwTCRWHgWP0hEZ6vFnTSC7UoKgxcruL4p92z0uZ%2Bf62m%2BCr1thopdxr7WbllDMQCRbDJA7azpORHZCWNsS8RzR9vmn852Tc4k4DttR2qyHTzeU2F733sActk9rPGJ5U2KHwDhSt3qArenmv6hDQ9qNtVwUJ2IRZiSoai91iOZeutMobxuNaHTlAxlgl98hX9TNg1dvk3Gqbcdq%2FPKBe09MCsU05KjNYq27ot9ZGi29uSN4TnmuxEIInKJ%2FyoOwVFP4BNm%2B1mC5%2B%2B5iR2iINc9IznRN3iH7JWMjl7O234WAvVE1GFfOxdGGA9R9CYTdg4wzqOOwAY6pgEcGQApbtNBaAvskp7Bjx2cxgr9FJYbV0u7L8pa64aphfQCtJMyyMfiWcMjY1NBBgffVts1OnLTmbA4e%2Bd9m%2B54N2apIQQJzMqB5TVNlbLPO4Q3IVgabYsKD0mkQdaNTJ1Y2ohl8NUS%2BqL7nMwSKdYXNrrBHEViHqbno0uq8994oODdUjJ9rL1cgzzaPoe2%2BUiQBRhr5zNDQLZ40PFcVMHGLD3GAdT9&X-Amz-Signature=a7120375bbd47d146f8bb354cb7c29c207823600fa1af3270c8a93bfdc7bacb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UR6ZKLP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHGpy9dCZOBt%2FnpiggCSQMwZDKsgCAXaUWm%2F1uU%2FWqsPAiAFYP%2FgiTkV71345nBw29zJxPRtlF75wYEpB%2F6YrvxSxyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSv3lLY01VEsf020EKtwDz0J90uHZgL8sEBDGSEkt8tEAKqgSFkLsYAp%2FmE0vbqru3sp8FwTtjrnsJsg8J0yuowY%2BwQhE2NFDXy7Mq%2Fe6j%2BUxpFgq3NWnAkx6RYNpUglOEJU8pSohxGBWocmz09YzvB9tGrVfeXrQXEMGF5Nw6lkfwcWp%2FOvJf5a9BUlp9ZW%2FAVCtkuhOU%2F4nl2ISGL6%2FrMB%2F4vyq4ZzMAFkEZ6jWbz15FMF%2FH%2FmF1QEbgFJLRoHGva5knhKCPaSJMgpckT8aqv9Vjt0BkhtHknDDtISJFIJrMZx%2BcaNwQEuxMGPrHKgUOvBV%2Bs3OcrVF3W4MwTCRWHgWP0hEZ6vFnTSC7UoKgxcruL4p92z0uZ%2Bf62m%2BCr1thopdxr7WbllDMQCRbDJA7azpORHZCWNsS8RzR9vmn852Tc4k4DttR2qyHTzeU2F733sActk9rPGJ5U2KHwDhSt3qArenmv6hDQ9qNtVwUJ2IRZiSoai91iOZeutMobxuNaHTlAxlgl98hX9TNg1dvk3Gqbcdq%2FPKBe09MCsU05KjNYq27ot9ZGi29uSN4TnmuxEIInKJ%2FyoOwVFP4BNm%2B1mC5%2B%2B5iR2iINc9IznRN3iH7JWMjl7O234WAvVE1GFfOxdGGA9R9CYTdg4wzqOOwAY6pgEcGQApbtNBaAvskp7Bjx2cxgr9FJYbV0u7L8pa64aphfQCtJMyyMfiWcMjY1NBBgffVts1OnLTmbA4e%2Bd9m%2B54N2apIQQJzMqB5TVNlbLPO4Q3IVgabYsKD0mkQdaNTJ1Y2ohl8NUS%2BqL7nMwSKdYXNrrBHEViHqbno0uq8994oODdUjJ9rL1cgzzaPoe2%2BUiQBRhr5zNDQLZ40PFcVMHGLD3GAdT9&X-Amz-Signature=cf0aca282e71c66881242a12b8344d7733766d62da69a2e72a2c02c4ccdfc8db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UR6ZKLP%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIHGpy9dCZOBt%2FnpiggCSQMwZDKsgCAXaUWm%2F1uU%2FWqsPAiAFYP%2FgiTkV71345nBw29zJxPRtlF75wYEpB%2F6YrvxSxyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSv3lLY01VEsf020EKtwDz0J90uHZgL8sEBDGSEkt8tEAKqgSFkLsYAp%2FmE0vbqru3sp8FwTtjrnsJsg8J0yuowY%2BwQhE2NFDXy7Mq%2Fe6j%2BUxpFgq3NWnAkx6RYNpUglOEJU8pSohxGBWocmz09YzvB9tGrVfeXrQXEMGF5Nw6lkfwcWp%2FOvJf5a9BUlp9ZW%2FAVCtkuhOU%2F4nl2ISGL6%2FrMB%2F4vyq4ZzMAFkEZ6jWbz15FMF%2FH%2FmF1QEbgFJLRoHGva5knhKCPaSJMgpckT8aqv9Vjt0BkhtHknDDtISJFIJrMZx%2BcaNwQEuxMGPrHKgUOvBV%2Bs3OcrVF3W4MwTCRWHgWP0hEZ6vFnTSC7UoKgxcruL4p92z0uZ%2Bf62m%2BCr1thopdxr7WbllDMQCRbDJA7azpORHZCWNsS8RzR9vmn852Tc4k4DttR2qyHTzeU2F733sActk9rPGJ5U2KHwDhSt3qArenmv6hDQ9qNtVwUJ2IRZiSoai91iOZeutMobxuNaHTlAxlgl98hX9TNg1dvk3Gqbcdq%2FPKBe09MCsU05KjNYq27ot9ZGi29uSN4TnmuxEIInKJ%2FyoOwVFP4BNm%2B1mC5%2B%2B5iR2iINc9IznRN3iH7JWMjl7O234WAvVE1GFfOxdGGA9R9CYTdg4wzqOOwAY6pgEcGQApbtNBaAvskp7Bjx2cxgr9FJYbV0u7L8pa64aphfQCtJMyyMfiWcMjY1NBBgffVts1OnLTmbA4e%2Bd9m%2B54N2apIQQJzMqB5TVNlbLPO4Q3IVgabYsKD0mkQdaNTJ1Y2ohl8NUS%2BqL7nMwSKdYXNrrBHEViHqbno0uq8994oODdUjJ9rL1cgzzaPoe2%2BUiQBRhr5zNDQLZ40PFcVMHGLD3GAdT9&X-Amz-Signature=65794f05ee1abfe210e13102fd79327987ddbf0745519ef9e82186b927a3d0a7&X-Amz-SignedHeaders=host&x-id=GetObject)
