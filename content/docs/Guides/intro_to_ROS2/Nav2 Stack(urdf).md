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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURJ3QXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCZnxGOY863Y0kdu3UPw7a0EZ5RblfnnGwkkBWg3W0h4AIgFnfYn7PqLt5lhFg8FbKBOcE0k0IhNKT4dzVEBohbib4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVK1b7V%2BOws6Bl7bSrcA9Dbw%2B90EWJP4j3Gb6YnL4UpkUERRKj2MgkjVqeTToqqVih2R0NTdogZlk3Bgys%2FShq5sedeS45dhm36QKwY6yj7FT8pmNBZbt%2BlsSUPSrq9oKLhJmrCeZ%2FER0AZ95QJqMSArIQV6SLRl5F8rk7TDsUvQIA0ZceJ1Yi2O6UIkJvGnHhOSlpeyPzfqDDHLcTUDL4bmEI5TBPxheAX65uPvCD8pRinaINZiX7FnJ6XX75%2FYPl4F2bdI7fbvTmXSQRjwAZcmILb3Z79YCI%2BMRlg6VxY5GXFg9OhPdIDmVmZEwPC%2BoiEFGr8Pm7geycAqJWA%2FDSYXbgiZphXi6m%2B39FLmmFJmpnfMeHjCF%2ByLSc1VHH4DrYMux5bCAY7v1Jx%2FykOKjs%2F6VQYc9ddk2BlC3GCrdvXBEFczrD0iNc%2FgXJgQy3uvdW3tc3kvMGl8Et3JYWlSf3MsJhV6K1oKWaW2XWN9Xl%2F14a2zgqA0%2BzZ8rsua4R2Gyw3Q3PJbZ6huLRyhpyl61C952GtwtvKtWinJWX4zzUKWO%2FQa%2BNrfQFXPqxfbAh1bSbnMIQl3i%2FP755wEA6smDyDV6v95V5c83xvX9TKn67ZwpxNuT4H2wmr8aBQKU0m9OC1xGzi00vO0jiZMOyE8b4GOqUBkyUANPRbZuL5jc7ruUPW4%2BJ462OfM7JvTKNqzUxzz2WTwX3%2BCAFf5rB4K7oaeasakT4C5SkYH%2FBBfsHT1S1Pz%2FK7JJJqGxjGnQH%2FkSa4wC0QKEkdkmIeTuhAYnHGXwkcCWHm5DG7YqWF8if3WdpqUmWh4R8o6iaU2RP1AOiic%2F9C9pIyRkCjlS3EON4CwkexnEIyBQfeuugYe0wM%2FtH%2FczlKAfyW&X-Amz-Signature=8eee9fac0377366c31773cd2d1c89bdcd5cde1870a50ca40ce0e2f4ee0b87403&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURJ3QXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCZnxGOY863Y0kdu3UPw7a0EZ5RblfnnGwkkBWg3W0h4AIgFnfYn7PqLt5lhFg8FbKBOcE0k0IhNKT4dzVEBohbib4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVK1b7V%2BOws6Bl7bSrcA9Dbw%2B90EWJP4j3Gb6YnL4UpkUERRKj2MgkjVqeTToqqVih2R0NTdogZlk3Bgys%2FShq5sedeS45dhm36QKwY6yj7FT8pmNBZbt%2BlsSUPSrq9oKLhJmrCeZ%2FER0AZ95QJqMSArIQV6SLRl5F8rk7TDsUvQIA0ZceJ1Yi2O6UIkJvGnHhOSlpeyPzfqDDHLcTUDL4bmEI5TBPxheAX65uPvCD8pRinaINZiX7FnJ6XX75%2FYPl4F2bdI7fbvTmXSQRjwAZcmILb3Z79YCI%2BMRlg6VxY5GXFg9OhPdIDmVmZEwPC%2BoiEFGr8Pm7geycAqJWA%2FDSYXbgiZphXi6m%2B39FLmmFJmpnfMeHjCF%2ByLSc1VHH4DrYMux5bCAY7v1Jx%2FykOKjs%2F6VQYc9ddk2BlC3GCrdvXBEFczrD0iNc%2FgXJgQy3uvdW3tc3kvMGl8Et3JYWlSf3MsJhV6K1oKWaW2XWN9Xl%2F14a2zgqA0%2BzZ8rsua4R2Gyw3Q3PJbZ6huLRyhpyl61C952GtwtvKtWinJWX4zzUKWO%2FQa%2BNrfQFXPqxfbAh1bSbnMIQl3i%2FP755wEA6smDyDV6v95V5c83xvX9TKn67ZwpxNuT4H2wmr8aBQKU0m9OC1xGzi00vO0jiZMOyE8b4GOqUBkyUANPRbZuL5jc7ruUPW4%2BJ462OfM7JvTKNqzUxzz2WTwX3%2BCAFf5rB4K7oaeasakT4C5SkYH%2FBBfsHT1S1Pz%2FK7JJJqGxjGnQH%2FkSa4wC0QKEkdkmIeTuhAYnHGXwkcCWHm5DG7YqWF8if3WdpqUmWh4R8o6iaU2RP1AOiic%2F9C9pIyRkCjlS3EON4CwkexnEIyBQfeuugYe0wM%2FtH%2FczlKAfyW&X-Amz-Signature=21068b89971cf2c435366742d9da9a92e5b7f384f93724b6ae59cb56f28c1d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURJ3QXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCZnxGOY863Y0kdu3UPw7a0EZ5RblfnnGwkkBWg3W0h4AIgFnfYn7PqLt5lhFg8FbKBOcE0k0IhNKT4dzVEBohbib4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVK1b7V%2BOws6Bl7bSrcA9Dbw%2B90EWJP4j3Gb6YnL4UpkUERRKj2MgkjVqeTToqqVih2R0NTdogZlk3Bgys%2FShq5sedeS45dhm36QKwY6yj7FT8pmNBZbt%2BlsSUPSrq9oKLhJmrCeZ%2FER0AZ95QJqMSArIQV6SLRl5F8rk7TDsUvQIA0ZceJ1Yi2O6UIkJvGnHhOSlpeyPzfqDDHLcTUDL4bmEI5TBPxheAX65uPvCD8pRinaINZiX7FnJ6XX75%2FYPl4F2bdI7fbvTmXSQRjwAZcmILb3Z79YCI%2BMRlg6VxY5GXFg9OhPdIDmVmZEwPC%2BoiEFGr8Pm7geycAqJWA%2FDSYXbgiZphXi6m%2B39FLmmFJmpnfMeHjCF%2ByLSc1VHH4DrYMux5bCAY7v1Jx%2FykOKjs%2F6VQYc9ddk2BlC3GCrdvXBEFczrD0iNc%2FgXJgQy3uvdW3tc3kvMGl8Et3JYWlSf3MsJhV6K1oKWaW2XWN9Xl%2F14a2zgqA0%2BzZ8rsua4R2Gyw3Q3PJbZ6huLRyhpyl61C952GtwtvKtWinJWX4zzUKWO%2FQa%2BNrfQFXPqxfbAh1bSbnMIQl3i%2FP755wEA6smDyDV6v95V5c83xvX9TKn67ZwpxNuT4H2wmr8aBQKU0m9OC1xGzi00vO0jiZMOyE8b4GOqUBkyUANPRbZuL5jc7ruUPW4%2BJ462OfM7JvTKNqzUxzz2WTwX3%2BCAFf5rB4K7oaeasakT4C5SkYH%2FBBfsHT1S1Pz%2FK7JJJqGxjGnQH%2FkSa4wC0QKEkdkmIeTuhAYnHGXwkcCWHm5DG7YqWF8if3WdpqUmWh4R8o6iaU2RP1AOiic%2F9C9pIyRkCjlS3EON4CwkexnEIyBQfeuugYe0wM%2FtH%2FczlKAfyW&X-Amz-Signature=0e4495f74f2006670d0e594e2b87f468f158c58b65d761ba38e2c09295f6a870&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURJ3QXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCZnxGOY863Y0kdu3UPw7a0EZ5RblfnnGwkkBWg3W0h4AIgFnfYn7PqLt5lhFg8FbKBOcE0k0IhNKT4dzVEBohbib4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVK1b7V%2BOws6Bl7bSrcA9Dbw%2B90EWJP4j3Gb6YnL4UpkUERRKj2MgkjVqeTToqqVih2R0NTdogZlk3Bgys%2FShq5sedeS45dhm36QKwY6yj7FT8pmNBZbt%2BlsSUPSrq9oKLhJmrCeZ%2FER0AZ95QJqMSArIQV6SLRl5F8rk7TDsUvQIA0ZceJ1Yi2O6UIkJvGnHhOSlpeyPzfqDDHLcTUDL4bmEI5TBPxheAX65uPvCD8pRinaINZiX7FnJ6XX75%2FYPl4F2bdI7fbvTmXSQRjwAZcmILb3Z79YCI%2BMRlg6VxY5GXFg9OhPdIDmVmZEwPC%2BoiEFGr8Pm7geycAqJWA%2FDSYXbgiZphXi6m%2B39FLmmFJmpnfMeHjCF%2ByLSc1VHH4DrYMux5bCAY7v1Jx%2FykOKjs%2F6VQYc9ddk2BlC3GCrdvXBEFczrD0iNc%2FgXJgQy3uvdW3tc3kvMGl8Et3JYWlSf3MsJhV6K1oKWaW2XWN9Xl%2F14a2zgqA0%2BzZ8rsua4R2Gyw3Q3PJbZ6huLRyhpyl61C952GtwtvKtWinJWX4zzUKWO%2FQa%2BNrfQFXPqxfbAh1bSbnMIQl3i%2FP755wEA6smDyDV6v95V5c83xvX9TKn67ZwpxNuT4H2wmr8aBQKU0m9OC1xGzi00vO0jiZMOyE8b4GOqUBkyUANPRbZuL5jc7ruUPW4%2BJ462OfM7JvTKNqzUxzz2WTwX3%2BCAFf5rB4K7oaeasakT4C5SkYH%2FBBfsHT1S1Pz%2FK7JJJqGxjGnQH%2FkSa4wC0QKEkdkmIeTuhAYnHGXwkcCWHm5DG7YqWF8if3WdpqUmWh4R8o6iaU2RP1AOiic%2F9C9pIyRkCjlS3EON4CwkexnEIyBQfeuugYe0wM%2FtH%2FczlKAfyW&X-Amz-Signature=5c5c1a88aab08181017ed7ddd0b306e5e940296ab51af27fedc63d47ba88f8de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURJ3QXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCZnxGOY863Y0kdu3UPw7a0EZ5RblfnnGwkkBWg3W0h4AIgFnfYn7PqLt5lhFg8FbKBOcE0k0IhNKT4dzVEBohbib4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVK1b7V%2BOws6Bl7bSrcA9Dbw%2B90EWJP4j3Gb6YnL4UpkUERRKj2MgkjVqeTToqqVih2R0NTdogZlk3Bgys%2FShq5sedeS45dhm36QKwY6yj7FT8pmNBZbt%2BlsSUPSrq9oKLhJmrCeZ%2FER0AZ95QJqMSArIQV6SLRl5F8rk7TDsUvQIA0ZceJ1Yi2O6UIkJvGnHhOSlpeyPzfqDDHLcTUDL4bmEI5TBPxheAX65uPvCD8pRinaINZiX7FnJ6XX75%2FYPl4F2bdI7fbvTmXSQRjwAZcmILb3Z79YCI%2BMRlg6VxY5GXFg9OhPdIDmVmZEwPC%2BoiEFGr8Pm7geycAqJWA%2FDSYXbgiZphXi6m%2B39FLmmFJmpnfMeHjCF%2ByLSc1VHH4DrYMux5bCAY7v1Jx%2FykOKjs%2F6VQYc9ddk2BlC3GCrdvXBEFczrD0iNc%2FgXJgQy3uvdW3tc3kvMGl8Et3JYWlSf3MsJhV6K1oKWaW2XWN9Xl%2F14a2zgqA0%2BzZ8rsua4R2Gyw3Q3PJbZ6huLRyhpyl61C952GtwtvKtWinJWX4zzUKWO%2FQa%2BNrfQFXPqxfbAh1bSbnMIQl3i%2FP755wEA6smDyDV6v95V5c83xvX9TKn67ZwpxNuT4H2wmr8aBQKU0m9OC1xGzi00vO0jiZMOyE8b4GOqUBkyUANPRbZuL5jc7ruUPW4%2BJ462OfM7JvTKNqzUxzz2WTwX3%2BCAFf5rB4K7oaeasakT4C5SkYH%2FBBfsHT1S1Pz%2FK7JJJqGxjGnQH%2FkSa4wC0QKEkdkmIeTuhAYnHGXwkcCWHm5DG7YqWF8if3WdpqUmWh4R8o6iaU2RP1AOiic%2F9C9pIyRkCjlS3EON4CwkexnEIyBQfeuugYe0wM%2FtH%2FczlKAfyW&X-Amz-Signature=5a5622a55837da6e884d50c737f9dce6bb0dc7f33a81d5b7cd8068d6af14fee4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURJ3QXU%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCZnxGOY863Y0kdu3UPw7a0EZ5RblfnnGwkkBWg3W0h4AIgFnfYn7PqLt5lhFg8FbKBOcE0k0IhNKT4dzVEBohbib4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDVK1b7V%2BOws6Bl7bSrcA9Dbw%2B90EWJP4j3Gb6YnL4UpkUERRKj2MgkjVqeTToqqVih2R0NTdogZlk3Bgys%2FShq5sedeS45dhm36QKwY6yj7FT8pmNBZbt%2BlsSUPSrq9oKLhJmrCeZ%2FER0AZ95QJqMSArIQV6SLRl5F8rk7TDsUvQIA0ZceJ1Yi2O6UIkJvGnHhOSlpeyPzfqDDHLcTUDL4bmEI5TBPxheAX65uPvCD8pRinaINZiX7FnJ6XX75%2FYPl4F2bdI7fbvTmXSQRjwAZcmILb3Z79YCI%2BMRlg6VxY5GXFg9OhPdIDmVmZEwPC%2BoiEFGr8Pm7geycAqJWA%2FDSYXbgiZphXi6m%2B39FLmmFJmpnfMeHjCF%2ByLSc1VHH4DrYMux5bCAY7v1Jx%2FykOKjs%2F6VQYc9ddk2BlC3GCrdvXBEFczrD0iNc%2FgXJgQy3uvdW3tc3kvMGl8Et3JYWlSf3MsJhV6K1oKWaW2XWN9Xl%2F14a2zgqA0%2BzZ8rsua4R2Gyw3Q3PJbZ6huLRyhpyl61C952GtwtvKtWinJWX4zzUKWO%2FQa%2BNrfQFXPqxfbAh1bSbnMIQl3i%2FP755wEA6smDyDV6v95V5c83xvX9TKn67ZwpxNuT4H2wmr8aBQKU0m9OC1xGzi00vO0jiZMOyE8b4GOqUBkyUANPRbZuL5jc7ruUPW4%2BJ462OfM7JvTKNqzUxzz2WTwX3%2BCAFf5rB4K7oaeasakT4C5SkYH%2FBBfsHT1S1Pz%2FK7JJJqGxjGnQH%2FkSa4wC0QKEkdkmIeTuhAYnHGXwkcCWHm5DG7YqWF8if3WdpqUmWh4R8o6iaU2RP1AOiic%2F9C9pIyRkCjlS3EON4CwkexnEIyBQfeuugYe0wM%2FtH%2FczlKAfyW&X-Amz-Signature=bb1eb2e645ae33ed5859a63da333efa404b5f98102e48a1e60fddb7b0565262e&X-Amz-SignedHeaders=host&x-id=GetObject)
