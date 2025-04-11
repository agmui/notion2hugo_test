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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NU6UJ7N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBFkt4HeLOlKsfVdfwqWkMpkmONCJCNCJY2pe%2FZTPb8uAiEAxXFb0NwSJIzfqr94B22XkkjDfsigO%2FMIwanB89snOewqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOb20SAFZlPqZ1VSCrcAxw0JOIUOzMwLbMxEE5o9C1gXtg5mkWETPWUDOLO7GUSAB4Z3geSVA1yGuG2%2FxH7YSbSja%2B8xCV6xxDBeA9VsvrSLpQKqWm6HGUqp0DRDltVIEPo2IFQEbUPPSrtvODJT9s99evW5yqTDwA6tqhNo5sKAkeors654LgI9MDj1bUcHDZea%2B6%2Ft%2BGawngY4PvpD1yE6r7KS6%2BeVludjZ4QfBiQOcOWNBiNZ0xvlmLNsNVLaTCvDD8UJbAVtGV8aFzQ4DAj0FE9EPY0v%2Fm9bnTPIH%2B5SWu5R51O6FK51VOzQgG2olR6OwZ6lhwEH2ZS2tJsPIdi0qbrdVys5hABeURZS7p1ozJJ9hCwo1cfcCVxDyTvOLfo6oKYnJpWLwDMAMJ0LcndijPRFXt8Ozh4Zz3QIouvxBSnxPHMhGRc0IIggUj1q2%2B72tMAC2TIg80aojky2OctziRqHV5rRqK4N9nv3xFOXnpZQHbcQkc5%2BDFlWoN6YesXEmJndhO80R7FNGdoRnNsmTi65je1%2BeF4ZUL320rEM26UAnj%2FCKudNN7fDnRMlwUlr2ZsEs4Div87Jrsw9RSN%2F7UU%2FWcRPRcEo%2BSBu4PK%2F%2Fm%2BQThZAOW0Sn4YEjsFb5NGAF%2BMs7Pu0YW%2FMJqB5L8GOqUBSxP9nAV9F5oQikv5B8beWxDu5g9FINve1V9aQKVclgQxWE8aMKncH%2B0SYQ6uP%2FfsmyA%2BQYGVIn20hB9q%2FStgqOxYoLVBDPprG%2Bn5HPp7bJeYwhrvEZkova91kOMF%2FeN83jvslR4%2F0tpFgyjObTASIwWFzWtPUK3bUGfUsUN8bbtein67pr8oefUhojlSLkHirnFphwExDftIkfIowJggI%2FfZuX7j&X-Amz-Signature=ad945c49e580bc95104f01aa8c31ce3acd920d667c345476d45c0faca7db0a98&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NU6UJ7N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBFkt4HeLOlKsfVdfwqWkMpkmONCJCNCJY2pe%2FZTPb8uAiEAxXFb0NwSJIzfqr94B22XkkjDfsigO%2FMIwanB89snOewqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOb20SAFZlPqZ1VSCrcAxw0JOIUOzMwLbMxEE5o9C1gXtg5mkWETPWUDOLO7GUSAB4Z3geSVA1yGuG2%2FxH7YSbSja%2B8xCV6xxDBeA9VsvrSLpQKqWm6HGUqp0DRDltVIEPo2IFQEbUPPSrtvODJT9s99evW5yqTDwA6tqhNo5sKAkeors654LgI9MDj1bUcHDZea%2B6%2Ft%2BGawngY4PvpD1yE6r7KS6%2BeVludjZ4QfBiQOcOWNBiNZ0xvlmLNsNVLaTCvDD8UJbAVtGV8aFzQ4DAj0FE9EPY0v%2Fm9bnTPIH%2B5SWu5R51O6FK51VOzQgG2olR6OwZ6lhwEH2ZS2tJsPIdi0qbrdVys5hABeURZS7p1ozJJ9hCwo1cfcCVxDyTvOLfo6oKYnJpWLwDMAMJ0LcndijPRFXt8Ozh4Zz3QIouvxBSnxPHMhGRc0IIggUj1q2%2B72tMAC2TIg80aojky2OctziRqHV5rRqK4N9nv3xFOXnpZQHbcQkc5%2BDFlWoN6YesXEmJndhO80R7FNGdoRnNsmTi65je1%2BeF4ZUL320rEM26UAnj%2FCKudNN7fDnRMlwUlr2ZsEs4Div87Jrsw9RSN%2F7UU%2FWcRPRcEo%2BSBu4PK%2F%2Fm%2BQThZAOW0Sn4YEjsFb5NGAF%2BMs7Pu0YW%2FMJqB5L8GOqUBSxP9nAV9F5oQikv5B8beWxDu5g9FINve1V9aQKVclgQxWE8aMKncH%2B0SYQ6uP%2FfsmyA%2BQYGVIn20hB9q%2FStgqOxYoLVBDPprG%2Bn5HPp7bJeYwhrvEZkova91kOMF%2FeN83jvslR4%2F0tpFgyjObTASIwWFzWtPUK3bUGfUsUN8bbtein67pr8oefUhojlSLkHirnFphwExDftIkfIowJggI%2FfZuX7j&X-Amz-Signature=8a7500e979038b6732bf762e36dc8c17a0e77851679e4729f4aa38bf0cafd1ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NU6UJ7N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBFkt4HeLOlKsfVdfwqWkMpkmONCJCNCJY2pe%2FZTPb8uAiEAxXFb0NwSJIzfqr94B22XkkjDfsigO%2FMIwanB89snOewqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOb20SAFZlPqZ1VSCrcAxw0JOIUOzMwLbMxEE5o9C1gXtg5mkWETPWUDOLO7GUSAB4Z3geSVA1yGuG2%2FxH7YSbSja%2B8xCV6xxDBeA9VsvrSLpQKqWm6HGUqp0DRDltVIEPo2IFQEbUPPSrtvODJT9s99evW5yqTDwA6tqhNo5sKAkeors654LgI9MDj1bUcHDZea%2B6%2Ft%2BGawngY4PvpD1yE6r7KS6%2BeVludjZ4QfBiQOcOWNBiNZ0xvlmLNsNVLaTCvDD8UJbAVtGV8aFzQ4DAj0FE9EPY0v%2Fm9bnTPIH%2B5SWu5R51O6FK51VOzQgG2olR6OwZ6lhwEH2ZS2tJsPIdi0qbrdVys5hABeURZS7p1ozJJ9hCwo1cfcCVxDyTvOLfo6oKYnJpWLwDMAMJ0LcndijPRFXt8Ozh4Zz3QIouvxBSnxPHMhGRc0IIggUj1q2%2B72tMAC2TIg80aojky2OctziRqHV5rRqK4N9nv3xFOXnpZQHbcQkc5%2BDFlWoN6YesXEmJndhO80R7FNGdoRnNsmTi65je1%2BeF4ZUL320rEM26UAnj%2FCKudNN7fDnRMlwUlr2ZsEs4Div87Jrsw9RSN%2F7UU%2FWcRPRcEo%2BSBu4PK%2F%2Fm%2BQThZAOW0Sn4YEjsFb5NGAF%2BMs7Pu0YW%2FMJqB5L8GOqUBSxP9nAV9F5oQikv5B8beWxDu5g9FINve1V9aQKVclgQxWE8aMKncH%2B0SYQ6uP%2FfsmyA%2BQYGVIn20hB9q%2FStgqOxYoLVBDPprG%2Bn5HPp7bJeYwhrvEZkova91kOMF%2FeN83jvslR4%2F0tpFgyjObTASIwWFzWtPUK3bUGfUsUN8bbtein67pr8oefUhojlSLkHirnFphwExDftIkfIowJggI%2FfZuX7j&X-Amz-Signature=dbd31ae20f04aed2517d02f4a6029a0d9fc44bce24769d8d187eae59a8387c82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NU6UJ7N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBFkt4HeLOlKsfVdfwqWkMpkmONCJCNCJY2pe%2FZTPb8uAiEAxXFb0NwSJIzfqr94B22XkkjDfsigO%2FMIwanB89snOewqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOb20SAFZlPqZ1VSCrcAxw0JOIUOzMwLbMxEE5o9C1gXtg5mkWETPWUDOLO7GUSAB4Z3geSVA1yGuG2%2FxH7YSbSja%2B8xCV6xxDBeA9VsvrSLpQKqWm6HGUqp0DRDltVIEPo2IFQEbUPPSrtvODJT9s99evW5yqTDwA6tqhNo5sKAkeors654LgI9MDj1bUcHDZea%2B6%2Ft%2BGawngY4PvpD1yE6r7KS6%2BeVludjZ4QfBiQOcOWNBiNZ0xvlmLNsNVLaTCvDD8UJbAVtGV8aFzQ4DAj0FE9EPY0v%2Fm9bnTPIH%2B5SWu5R51O6FK51VOzQgG2olR6OwZ6lhwEH2ZS2tJsPIdi0qbrdVys5hABeURZS7p1ozJJ9hCwo1cfcCVxDyTvOLfo6oKYnJpWLwDMAMJ0LcndijPRFXt8Ozh4Zz3QIouvxBSnxPHMhGRc0IIggUj1q2%2B72tMAC2TIg80aojky2OctziRqHV5rRqK4N9nv3xFOXnpZQHbcQkc5%2BDFlWoN6YesXEmJndhO80R7FNGdoRnNsmTi65je1%2BeF4ZUL320rEM26UAnj%2FCKudNN7fDnRMlwUlr2ZsEs4Div87Jrsw9RSN%2F7UU%2FWcRPRcEo%2BSBu4PK%2F%2Fm%2BQThZAOW0Sn4YEjsFb5NGAF%2BMs7Pu0YW%2FMJqB5L8GOqUBSxP9nAV9F5oQikv5B8beWxDu5g9FINve1V9aQKVclgQxWE8aMKncH%2B0SYQ6uP%2FfsmyA%2BQYGVIn20hB9q%2FStgqOxYoLVBDPprG%2Bn5HPp7bJeYwhrvEZkova91kOMF%2FeN83jvslR4%2F0tpFgyjObTASIwWFzWtPUK3bUGfUsUN8bbtein67pr8oefUhojlSLkHirnFphwExDftIkfIowJggI%2FfZuX7j&X-Amz-Signature=5eae479a9f0216cd6f0e80a49742056cfac4273fa19731b3f9453bd128193234&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NU6UJ7N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBFkt4HeLOlKsfVdfwqWkMpkmONCJCNCJY2pe%2FZTPb8uAiEAxXFb0NwSJIzfqr94B22XkkjDfsigO%2FMIwanB89snOewqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOb20SAFZlPqZ1VSCrcAxw0JOIUOzMwLbMxEE5o9C1gXtg5mkWETPWUDOLO7GUSAB4Z3geSVA1yGuG2%2FxH7YSbSja%2B8xCV6xxDBeA9VsvrSLpQKqWm6HGUqp0DRDltVIEPo2IFQEbUPPSrtvODJT9s99evW5yqTDwA6tqhNo5sKAkeors654LgI9MDj1bUcHDZea%2B6%2Ft%2BGawngY4PvpD1yE6r7KS6%2BeVludjZ4QfBiQOcOWNBiNZ0xvlmLNsNVLaTCvDD8UJbAVtGV8aFzQ4DAj0FE9EPY0v%2Fm9bnTPIH%2B5SWu5R51O6FK51VOzQgG2olR6OwZ6lhwEH2ZS2tJsPIdi0qbrdVys5hABeURZS7p1ozJJ9hCwo1cfcCVxDyTvOLfo6oKYnJpWLwDMAMJ0LcndijPRFXt8Ozh4Zz3QIouvxBSnxPHMhGRc0IIggUj1q2%2B72tMAC2TIg80aojky2OctziRqHV5rRqK4N9nv3xFOXnpZQHbcQkc5%2BDFlWoN6YesXEmJndhO80R7FNGdoRnNsmTi65je1%2BeF4ZUL320rEM26UAnj%2FCKudNN7fDnRMlwUlr2ZsEs4Div87Jrsw9RSN%2F7UU%2FWcRPRcEo%2BSBu4PK%2F%2Fm%2BQThZAOW0Sn4YEjsFb5NGAF%2BMs7Pu0YW%2FMJqB5L8GOqUBSxP9nAV9F5oQikv5B8beWxDu5g9FINve1V9aQKVclgQxWE8aMKncH%2B0SYQ6uP%2FfsmyA%2BQYGVIn20hB9q%2FStgqOxYoLVBDPprG%2Bn5HPp7bJeYwhrvEZkova91kOMF%2FeN83jvslR4%2F0tpFgyjObTASIwWFzWtPUK3bUGfUsUN8bbtein67pr8oefUhojlSLkHirnFphwExDftIkfIowJggI%2FfZuX7j&X-Amz-Signature=9916b301413a9f9f2f3cd62772f00cf1d13bb1c8a17c5b82da83da4ae5c453c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NU6UJ7N%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBFkt4HeLOlKsfVdfwqWkMpkmONCJCNCJY2pe%2FZTPb8uAiEAxXFb0NwSJIzfqr94B22XkkjDfsigO%2FMIwanB89snOewqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOb20SAFZlPqZ1VSCrcAxw0JOIUOzMwLbMxEE5o9C1gXtg5mkWETPWUDOLO7GUSAB4Z3geSVA1yGuG2%2FxH7YSbSja%2B8xCV6xxDBeA9VsvrSLpQKqWm6HGUqp0DRDltVIEPo2IFQEbUPPSrtvODJT9s99evW5yqTDwA6tqhNo5sKAkeors654LgI9MDj1bUcHDZea%2B6%2Ft%2BGawngY4PvpD1yE6r7KS6%2BeVludjZ4QfBiQOcOWNBiNZ0xvlmLNsNVLaTCvDD8UJbAVtGV8aFzQ4DAj0FE9EPY0v%2Fm9bnTPIH%2B5SWu5R51O6FK51VOzQgG2olR6OwZ6lhwEH2ZS2tJsPIdi0qbrdVys5hABeURZS7p1ozJJ9hCwo1cfcCVxDyTvOLfo6oKYnJpWLwDMAMJ0LcndijPRFXt8Ozh4Zz3QIouvxBSnxPHMhGRc0IIggUj1q2%2B72tMAC2TIg80aojky2OctziRqHV5rRqK4N9nv3xFOXnpZQHbcQkc5%2BDFlWoN6YesXEmJndhO80R7FNGdoRnNsmTi65je1%2BeF4ZUL320rEM26UAnj%2FCKudNN7fDnRMlwUlr2ZsEs4Div87Jrsw9RSN%2F7UU%2FWcRPRcEo%2BSBu4PK%2F%2Fm%2BQThZAOW0Sn4YEjsFb5NGAF%2BMs7Pu0YW%2FMJqB5L8GOqUBSxP9nAV9F5oQikv5B8beWxDu5g9FINve1V9aQKVclgQxWE8aMKncH%2B0SYQ6uP%2FfsmyA%2BQYGVIn20hB9q%2FStgqOxYoLVBDPprG%2Bn5HPp7bJeYwhrvEZkova91kOMF%2FeN83jvslR4%2F0tpFgyjObTASIwWFzWtPUK3bUGfUsUN8bbtein67pr8oefUhojlSLkHirnFphwExDftIkfIowJggI%2FfZuX7j&X-Amz-Signature=870e048a524c9f335b8c0f8a45bda878a1d7ba507466c253cea01e4b8398080d&X-Amz-SignedHeaders=host&x-id=GetObject)
