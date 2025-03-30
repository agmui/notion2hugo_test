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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAKCKSW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDzZFHYRcjI2UQIAX7mKviia0eoBU2mhKMt4eS64jBrRAiAqSU07SG1%2F6%2F8HITaPxttJ%2B%2B08tYrBXACt5zlRy7KKcyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUk6dK1nCpzaD9sW6KtwDyGd1BSYTKpageIIbvEnKLgw8T6yu%2Fs5%2FOn%2BSUaW8qbtBx6TKYGp3wViWriw3u4q8YLIoRkGaTf0W7T4JCvYLOWhUlqPmdYVPNqKu%2FuiHK89EjnGBP8LgER72KuIxAlJzR2lKJJVRpmGbuCKFn2eeZW6fN%2BLUglsh01U3Yw1BSvw35CwWr9gHV1y%2Bz4HTiqzEctEkDR16r1jf9H%2BfUDa%2B2inQnRPGeZpkFvLhAUKBSundx2ScAdp2pMJt93t%2F9XuyZN8Z6i0Y35uj0zJULBgUK%2FBezTtzGw7ugiVc30is7ZMAl5k289UoOzweZaky9UBxqKT8th1Pw097iR6RvqQt9C4za24G2BVWiPfgXqk9hiTzfdOM7cH9TlHXDcs2ghb8%2F%2F7HAClucbGsOlKZ%2BNHNw55KB%2BR%2F1C8%2FkLpd4CJRKuhUELuiL3FLOk8SOeZaQd14o3KK5gCakNv28T%2BiKYW7BDvb3V2kZk%2B9M2Qb%2FU2qlIcJrdkUkkDEQ2TAZ0Lq9IvG%2BT5rHVYqByY%2FMZaJjK8MeNciJSsMYsO%2FXoI9Ba4r6n4gNG09Mg7pMSv9bQ9J5C%2B39PeX8uL9ea9W2xSdekvBtYBgQrEN9BIn2B5zQqWDns%2BNM%2FCbaeKeT32AU0Mw2NimvwY6pgHC2i16rg7cS0A7UYef%2FkrbUVw28k9OLdzjObfNNCMl7z8%2Frzvz6r3CxtrJ3rsXnoGvjnMNChaa9oNHpNCpyyX1yaVYt6peBdNanyybWBixRfjSMrhosW76MiluEQ5LbdE9svZ3YYvotPSv3Io00iciFlTZPl7AtIMcwgRjxc7vCUPv8KhNSFmyP67o%2BXjqjx%2FogBMdTq2zmC%2BX4thmmjthtqCZuOwC&X-Amz-Signature=3a8ce66456b3b61ac2b61af7fbce733fae53a019d14bc093ed77be7a859be4d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAKCKSW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDzZFHYRcjI2UQIAX7mKviia0eoBU2mhKMt4eS64jBrRAiAqSU07SG1%2F6%2F8HITaPxttJ%2B%2B08tYrBXACt5zlRy7KKcyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUk6dK1nCpzaD9sW6KtwDyGd1BSYTKpageIIbvEnKLgw8T6yu%2Fs5%2FOn%2BSUaW8qbtBx6TKYGp3wViWriw3u4q8YLIoRkGaTf0W7T4JCvYLOWhUlqPmdYVPNqKu%2FuiHK89EjnGBP8LgER72KuIxAlJzR2lKJJVRpmGbuCKFn2eeZW6fN%2BLUglsh01U3Yw1BSvw35CwWr9gHV1y%2Bz4HTiqzEctEkDR16r1jf9H%2BfUDa%2B2inQnRPGeZpkFvLhAUKBSundx2ScAdp2pMJt93t%2F9XuyZN8Z6i0Y35uj0zJULBgUK%2FBezTtzGw7ugiVc30is7ZMAl5k289UoOzweZaky9UBxqKT8th1Pw097iR6RvqQt9C4za24G2BVWiPfgXqk9hiTzfdOM7cH9TlHXDcs2ghb8%2F%2F7HAClucbGsOlKZ%2BNHNw55KB%2BR%2F1C8%2FkLpd4CJRKuhUELuiL3FLOk8SOeZaQd14o3KK5gCakNv28T%2BiKYW7BDvb3V2kZk%2B9M2Qb%2FU2qlIcJrdkUkkDEQ2TAZ0Lq9IvG%2BT5rHVYqByY%2FMZaJjK8MeNciJSsMYsO%2FXoI9Ba4r6n4gNG09Mg7pMSv9bQ9J5C%2B39PeX8uL9ea9W2xSdekvBtYBgQrEN9BIn2B5zQqWDns%2BNM%2FCbaeKeT32AU0Mw2NimvwY6pgHC2i16rg7cS0A7UYef%2FkrbUVw28k9OLdzjObfNNCMl7z8%2Frzvz6r3CxtrJ3rsXnoGvjnMNChaa9oNHpNCpyyX1yaVYt6peBdNanyybWBixRfjSMrhosW76MiluEQ5LbdE9svZ3YYvotPSv3Io00iciFlTZPl7AtIMcwgRjxc7vCUPv8KhNSFmyP67o%2BXjqjx%2FogBMdTq2zmC%2BX4thmmjthtqCZuOwC&X-Amz-Signature=111fee99a68c4aae70f4a6319ac9aabb8fb17be307a2a1a63f6e21abc8f1edac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAKCKSW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDzZFHYRcjI2UQIAX7mKviia0eoBU2mhKMt4eS64jBrRAiAqSU07SG1%2F6%2F8HITaPxttJ%2B%2B08tYrBXACt5zlRy7KKcyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUk6dK1nCpzaD9sW6KtwDyGd1BSYTKpageIIbvEnKLgw8T6yu%2Fs5%2FOn%2BSUaW8qbtBx6TKYGp3wViWriw3u4q8YLIoRkGaTf0W7T4JCvYLOWhUlqPmdYVPNqKu%2FuiHK89EjnGBP8LgER72KuIxAlJzR2lKJJVRpmGbuCKFn2eeZW6fN%2BLUglsh01U3Yw1BSvw35CwWr9gHV1y%2Bz4HTiqzEctEkDR16r1jf9H%2BfUDa%2B2inQnRPGeZpkFvLhAUKBSundx2ScAdp2pMJt93t%2F9XuyZN8Z6i0Y35uj0zJULBgUK%2FBezTtzGw7ugiVc30is7ZMAl5k289UoOzweZaky9UBxqKT8th1Pw097iR6RvqQt9C4za24G2BVWiPfgXqk9hiTzfdOM7cH9TlHXDcs2ghb8%2F%2F7HAClucbGsOlKZ%2BNHNw55KB%2BR%2F1C8%2FkLpd4CJRKuhUELuiL3FLOk8SOeZaQd14o3KK5gCakNv28T%2BiKYW7BDvb3V2kZk%2B9M2Qb%2FU2qlIcJrdkUkkDEQ2TAZ0Lq9IvG%2BT5rHVYqByY%2FMZaJjK8MeNciJSsMYsO%2FXoI9Ba4r6n4gNG09Mg7pMSv9bQ9J5C%2B39PeX8uL9ea9W2xSdekvBtYBgQrEN9BIn2B5zQqWDns%2BNM%2FCbaeKeT32AU0Mw2NimvwY6pgHC2i16rg7cS0A7UYef%2FkrbUVw28k9OLdzjObfNNCMl7z8%2Frzvz6r3CxtrJ3rsXnoGvjnMNChaa9oNHpNCpyyX1yaVYt6peBdNanyybWBixRfjSMrhosW76MiluEQ5LbdE9svZ3YYvotPSv3Io00iciFlTZPl7AtIMcwgRjxc7vCUPv8KhNSFmyP67o%2BXjqjx%2FogBMdTq2zmC%2BX4thmmjthtqCZuOwC&X-Amz-Signature=4d646a7e1a9fcbaf037086dbedab88b93537d139a97ea6cb74c183ee5e217e50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAKCKSW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDzZFHYRcjI2UQIAX7mKviia0eoBU2mhKMt4eS64jBrRAiAqSU07SG1%2F6%2F8HITaPxttJ%2B%2B08tYrBXACt5zlRy7KKcyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUk6dK1nCpzaD9sW6KtwDyGd1BSYTKpageIIbvEnKLgw8T6yu%2Fs5%2FOn%2BSUaW8qbtBx6TKYGp3wViWriw3u4q8YLIoRkGaTf0W7T4JCvYLOWhUlqPmdYVPNqKu%2FuiHK89EjnGBP8LgER72KuIxAlJzR2lKJJVRpmGbuCKFn2eeZW6fN%2BLUglsh01U3Yw1BSvw35CwWr9gHV1y%2Bz4HTiqzEctEkDR16r1jf9H%2BfUDa%2B2inQnRPGeZpkFvLhAUKBSundx2ScAdp2pMJt93t%2F9XuyZN8Z6i0Y35uj0zJULBgUK%2FBezTtzGw7ugiVc30is7ZMAl5k289UoOzweZaky9UBxqKT8th1Pw097iR6RvqQt9C4za24G2BVWiPfgXqk9hiTzfdOM7cH9TlHXDcs2ghb8%2F%2F7HAClucbGsOlKZ%2BNHNw55KB%2BR%2F1C8%2FkLpd4CJRKuhUELuiL3FLOk8SOeZaQd14o3KK5gCakNv28T%2BiKYW7BDvb3V2kZk%2B9M2Qb%2FU2qlIcJrdkUkkDEQ2TAZ0Lq9IvG%2BT5rHVYqByY%2FMZaJjK8MeNciJSsMYsO%2FXoI9Ba4r6n4gNG09Mg7pMSv9bQ9J5C%2B39PeX8uL9ea9W2xSdekvBtYBgQrEN9BIn2B5zQqWDns%2BNM%2FCbaeKeT32AU0Mw2NimvwY6pgHC2i16rg7cS0A7UYef%2FkrbUVw28k9OLdzjObfNNCMl7z8%2Frzvz6r3CxtrJ3rsXnoGvjnMNChaa9oNHpNCpyyX1yaVYt6peBdNanyybWBixRfjSMrhosW76MiluEQ5LbdE9svZ3YYvotPSv3Io00iciFlTZPl7AtIMcwgRjxc7vCUPv8KhNSFmyP67o%2BXjqjx%2FogBMdTq2zmC%2BX4thmmjthtqCZuOwC&X-Amz-Signature=30c75aa4d6bb66987c4ae735d76b08fdb8c5bb90a542b2ca8bb6e8b6cebfcc34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAKCKSW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDzZFHYRcjI2UQIAX7mKviia0eoBU2mhKMt4eS64jBrRAiAqSU07SG1%2F6%2F8HITaPxttJ%2B%2B08tYrBXACt5zlRy7KKcyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUk6dK1nCpzaD9sW6KtwDyGd1BSYTKpageIIbvEnKLgw8T6yu%2Fs5%2FOn%2BSUaW8qbtBx6TKYGp3wViWriw3u4q8YLIoRkGaTf0W7T4JCvYLOWhUlqPmdYVPNqKu%2FuiHK89EjnGBP8LgER72KuIxAlJzR2lKJJVRpmGbuCKFn2eeZW6fN%2BLUglsh01U3Yw1BSvw35CwWr9gHV1y%2Bz4HTiqzEctEkDR16r1jf9H%2BfUDa%2B2inQnRPGeZpkFvLhAUKBSundx2ScAdp2pMJt93t%2F9XuyZN8Z6i0Y35uj0zJULBgUK%2FBezTtzGw7ugiVc30is7ZMAl5k289UoOzweZaky9UBxqKT8th1Pw097iR6RvqQt9C4za24G2BVWiPfgXqk9hiTzfdOM7cH9TlHXDcs2ghb8%2F%2F7HAClucbGsOlKZ%2BNHNw55KB%2BR%2F1C8%2FkLpd4CJRKuhUELuiL3FLOk8SOeZaQd14o3KK5gCakNv28T%2BiKYW7BDvb3V2kZk%2B9M2Qb%2FU2qlIcJrdkUkkDEQ2TAZ0Lq9IvG%2BT5rHVYqByY%2FMZaJjK8MeNciJSsMYsO%2FXoI9Ba4r6n4gNG09Mg7pMSv9bQ9J5C%2B39PeX8uL9ea9W2xSdekvBtYBgQrEN9BIn2B5zQqWDns%2BNM%2FCbaeKeT32AU0Mw2NimvwY6pgHC2i16rg7cS0A7UYef%2FkrbUVw28k9OLdzjObfNNCMl7z8%2Frzvz6r3CxtrJ3rsXnoGvjnMNChaa9oNHpNCpyyX1yaVYt6peBdNanyybWBixRfjSMrhosW76MiluEQ5LbdE9svZ3YYvotPSv3Io00iciFlTZPl7AtIMcwgRjxc7vCUPv8KhNSFmyP67o%2BXjqjx%2FogBMdTq2zmC%2BX4thmmjthtqCZuOwC&X-Amz-Signature=8e1013bee78ab9c40095a4eaba5639145a7d280efff0b6622d44e35e7f8d5e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IAKCKSW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIDzZFHYRcjI2UQIAX7mKviia0eoBU2mhKMt4eS64jBrRAiAqSU07SG1%2F6%2F8HITaPxttJ%2B%2B08tYrBXACt5zlRy7KKcyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUk6dK1nCpzaD9sW6KtwDyGd1BSYTKpageIIbvEnKLgw8T6yu%2Fs5%2FOn%2BSUaW8qbtBx6TKYGp3wViWriw3u4q8YLIoRkGaTf0W7T4JCvYLOWhUlqPmdYVPNqKu%2FuiHK89EjnGBP8LgER72KuIxAlJzR2lKJJVRpmGbuCKFn2eeZW6fN%2BLUglsh01U3Yw1BSvw35CwWr9gHV1y%2Bz4HTiqzEctEkDR16r1jf9H%2BfUDa%2B2inQnRPGeZpkFvLhAUKBSundx2ScAdp2pMJt93t%2F9XuyZN8Z6i0Y35uj0zJULBgUK%2FBezTtzGw7ugiVc30is7ZMAl5k289UoOzweZaky9UBxqKT8th1Pw097iR6RvqQt9C4za24G2BVWiPfgXqk9hiTzfdOM7cH9TlHXDcs2ghb8%2F%2F7HAClucbGsOlKZ%2BNHNw55KB%2BR%2F1C8%2FkLpd4CJRKuhUELuiL3FLOk8SOeZaQd14o3KK5gCakNv28T%2BiKYW7BDvb3V2kZk%2B9M2Qb%2FU2qlIcJrdkUkkDEQ2TAZ0Lq9IvG%2BT5rHVYqByY%2FMZaJjK8MeNciJSsMYsO%2FXoI9Ba4r6n4gNG09Mg7pMSv9bQ9J5C%2B39PeX8uL9ea9W2xSdekvBtYBgQrEN9BIn2B5zQqWDns%2BNM%2FCbaeKeT32AU0Mw2NimvwY6pgHC2i16rg7cS0A7UYef%2FkrbUVw28k9OLdzjObfNNCMl7z8%2Frzvz6r3CxtrJ3rsXnoGvjnMNChaa9oNHpNCpyyX1yaVYt6peBdNanyybWBixRfjSMrhosW76MiluEQ5LbdE9svZ3YYvotPSv3Io00iciFlTZPl7AtIMcwgRjxc7vCUPv8KhNSFmyP67o%2BXjqjx%2FogBMdTq2zmC%2BX4thmmjthtqCZuOwC&X-Amz-Signature=75c1538bee1922ca27efae0589e4660192a41fb9d9a837e64e41b748813945bf&X-Amz-SignedHeaders=host&x-id=GetObject)
