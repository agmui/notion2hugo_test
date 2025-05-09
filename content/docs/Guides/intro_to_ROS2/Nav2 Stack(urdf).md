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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCXESGY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXYO77o2mriVCiMKJSMzI3qyg8HWKn%2FETmAzIMVSQT9QIhAMuVdQc6TwwdSo0Bzv6wzyn2%2B1EfT1Kv%2Bhb98i5SaS40KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2nZC7GVihoOhz0bsq3ANYzwB%2B4pscxoBOIv8PyivzLhv0pfAkXWAi0Ra4OT4XQHNvLcLZNv5OMh1c2lyUmn9ts%2F4N0hJQX45zMhcYjk99xTHXSolHJ%2FKsuLrxiGtENJsRSf7x7%2FE8V1Nu0rBfWFYdk7PYY1v%2BOsPlsrdqWN3uK5n0dJXJf4dHIq4th6tXbMA7POwCikRYTzGg0cBuB9H1k79%2BCD5btXRuxdyOBW0%2B3f%2FdInr7ksXKENlzJoh%2FZCsyvhGMbjbv9qTSNXI70t9igBnU9Vg09xTKV3ivR50GqomrJN4VNObcxDSnBYwRkiZSFmeSWKC1KYdLycDy8Kqtz0UgE%2FZF0oGpvJtrLsYlfOVDJXOQhHH3Y6Pz1SpaAbMgwN8mcjlDS1r19pSd%2Bz5mqqVZ1K9%2BzVKFRkCwH7WjUuC%2BxXgtsMNuHCCJrBbHn0rZltnlJ6AaVSoScZ9wtBCuN117G%2BP2KvR1Zb7V1mycAO8tDYtB1xddoLwGg1FjyqG6Vnu3l9J5jUpP5X4R3kZQ4xwYkGbHy0x%2F2DAfcVrscfFJTTU1oOxwXBiU4T%2BXx16%2B%2FOeY3omgTyKvGW4SBoMHBteo5KbjY4kiwNrvap2EaC8KXFczv9Nk8gSmh6YAoWEjQMouMooWYnTvrDDLgfrABjqkARYb0kNR%2BfjrBq2SaaJKzmbcPcg6mXpOTZ2gRokDXJWhB%2FmV1JGqhKxPvnxCA3zH2mX%2BWjg8OH%2Bf5hop8Yh333TCtIjqNqlRS%2Fm6g64rb0kKWWtArsAZriEgfFkXY%2FuWep6v8JJ3q8LqIBYfFSzQpOa83BmTIhIWuJSr%2BcfarsseO9GJhg5MbykY%2FQHfbcaPmSQOWVvibUhfQmSvz3t7W1DiMteS&X-Amz-Signature=e40f2c8273f77e87f5761aa6de83a075ea0ae8ae63e00ff5e87ff7003cc147df&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCXESGY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXYO77o2mriVCiMKJSMzI3qyg8HWKn%2FETmAzIMVSQT9QIhAMuVdQc6TwwdSo0Bzv6wzyn2%2B1EfT1Kv%2Bhb98i5SaS40KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2nZC7GVihoOhz0bsq3ANYzwB%2B4pscxoBOIv8PyivzLhv0pfAkXWAi0Ra4OT4XQHNvLcLZNv5OMh1c2lyUmn9ts%2F4N0hJQX45zMhcYjk99xTHXSolHJ%2FKsuLrxiGtENJsRSf7x7%2FE8V1Nu0rBfWFYdk7PYY1v%2BOsPlsrdqWN3uK5n0dJXJf4dHIq4th6tXbMA7POwCikRYTzGg0cBuB9H1k79%2BCD5btXRuxdyOBW0%2B3f%2FdInr7ksXKENlzJoh%2FZCsyvhGMbjbv9qTSNXI70t9igBnU9Vg09xTKV3ivR50GqomrJN4VNObcxDSnBYwRkiZSFmeSWKC1KYdLycDy8Kqtz0UgE%2FZF0oGpvJtrLsYlfOVDJXOQhHH3Y6Pz1SpaAbMgwN8mcjlDS1r19pSd%2Bz5mqqVZ1K9%2BzVKFRkCwH7WjUuC%2BxXgtsMNuHCCJrBbHn0rZltnlJ6AaVSoScZ9wtBCuN117G%2BP2KvR1Zb7V1mycAO8tDYtB1xddoLwGg1FjyqG6Vnu3l9J5jUpP5X4R3kZQ4xwYkGbHy0x%2F2DAfcVrscfFJTTU1oOxwXBiU4T%2BXx16%2B%2FOeY3omgTyKvGW4SBoMHBteo5KbjY4kiwNrvap2EaC8KXFczv9Nk8gSmh6YAoWEjQMouMooWYnTvrDDLgfrABjqkARYb0kNR%2BfjrBq2SaaJKzmbcPcg6mXpOTZ2gRokDXJWhB%2FmV1JGqhKxPvnxCA3zH2mX%2BWjg8OH%2Bf5hop8Yh333TCtIjqNqlRS%2Fm6g64rb0kKWWtArsAZriEgfFkXY%2FuWep6v8JJ3q8LqIBYfFSzQpOa83BmTIhIWuJSr%2BcfarsseO9GJhg5MbykY%2FQHfbcaPmSQOWVvibUhfQmSvz3t7W1DiMteS&X-Amz-Signature=e697029c6a31918cb09bdc3e9785a34ff6e4072c54ff799884c4f2ed8d14ef42&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCXESGY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXYO77o2mriVCiMKJSMzI3qyg8HWKn%2FETmAzIMVSQT9QIhAMuVdQc6TwwdSo0Bzv6wzyn2%2B1EfT1Kv%2Bhb98i5SaS40KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2nZC7GVihoOhz0bsq3ANYzwB%2B4pscxoBOIv8PyivzLhv0pfAkXWAi0Ra4OT4XQHNvLcLZNv5OMh1c2lyUmn9ts%2F4N0hJQX45zMhcYjk99xTHXSolHJ%2FKsuLrxiGtENJsRSf7x7%2FE8V1Nu0rBfWFYdk7PYY1v%2BOsPlsrdqWN3uK5n0dJXJf4dHIq4th6tXbMA7POwCikRYTzGg0cBuB9H1k79%2BCD5btXRuxdyOBW0%2B3f%2FdInr7ksXKENlzJoh%2FZCsyvhGMbjbv9qTSNXI70t9igBnU9Vg09xTKV3ivR50GqomrJN4VNObcxDSnBYwRkiZSFmeSWKC1KYdLycDy8Kqtz0UgE%2FZF0oGpvJtrLsYlfOVDJXOQhHH3Y6Pz1SpaAbMgwN8mcjlDS1r19pSd%2Bz5mqqVZ1K9%2BzVKFRkCwH7WjUuC%2BxXgtsMNuHCCJrBbHn0rZltnlJ6AaVSoScZ9wtBCuN117G%2BP2KvR1Zb7V1mycAO8tDYtB1xddoLwGg1FjyqG6Vnu3l9J5jUpP5X4R3kZQ4xwYkGbHy0x%2F2DAfcVrscfFJTTU1oOxwXBiU4T%2BXx16%2B%2FOeY3omgTyKvGW4SBoMHBteo5KbjY4kiwNrvap2EaC8KXFczv9Nk8gSmh6YAoWEjQMouMooWYnTvrDDLgfrABjqkARYb0kNR%2BfjrBq2SaaJKzmbcPcg6mXpOTZ2gRokDXJWhB%2FmV1JGqhKxPvnxCA3zH2mX%2BWjg8OH%2Bf5hop8Yh333TCtIjqNqlRS%2Fm6g64rb0kKWWtArsAZriEgfFkXY%2FuWep6v8JJ3q8LqIBYfFSzQpOa83BmTIhIWuJSr%2BcfarsseO9GJhg5MbykY%2FQHfbcaPmSQOWVvibUhfQmSvz3t7W1DiMteS&X-Amz-Signature=85a29768a1a5f5fe8080a1e323504fd751fe49faa1ba6ccf393467734be177ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCXESGY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXYO77o2mriVCiMKJSMzI3qyg8HWKn%2FETmAzIMVSQT9QIhAMuVdQc6TwwdSo0Bzv6wzyn2%2B1EfT1Kv%2Bhb98i5SaS40KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2nZC7GVihoOhz0bsq3ANYzwB%2B4pscxoBOIv8PyivzLhv0pfAkXWAi0Ra4OT4XQHNvLcLZNv5OMh1c2lyUmn9ts%2F4N0hJQX45zMhcYjk99xTHXSolHJ%2FKsuLrxiGtENJsRSf7x7%2FE8V1Nu0rBfWFYdk7PYY1v%2BOsPlsrdqWN3uK5n0dJXJf4dHIq4th6tXbMA7POwCikRYTzGg0cBuB9H1k79%2BCD5btXRuxdyOBW0%2B3f%2FdInr7ksXKENlzJoh%2FZCsyvhGMbjbv9qTSNXI70t9igBnU9Vg09xTKV3ivR50GqomrJN4VNObcxDSnBYwRkiZSFmeSWKC1KYdLycDy8Kqtz0UgE%2FZF0oGpvJtrLsYlfOVDJXOQhHH3Y6Pz1SpaAbMgwN8mcjlDS1r19pSd%2Bz5mqqVZ1K9%2BzVKFRkCwH7WjUuC%2BxXgtsMNuHCCJrBbHn0rZltnlJ6AaVSoScZ9wtBCuN117G%2BP2KvR1Zb7V1mycAO8tDYtB1xddoLwGg1FjyqG6Vnu3l9J5jUpP5X4R3kZQ4xwYkGbHy0x%2F2DAfcVrscfFJTTU1oOxwXBiU4T%2BXx16%2B%2FOeY3omgTyKvGW4SBoMHBteo5KbjY4kiwNrvap2EaC8KXFczv9Nk8gSmh6YAoWEjQMouMooWYnTvrDDLgfrABjqkARYb0kNR%2BfjrBq2SaaJKzmbcPcg6mXpOTZ2gRokDXJWhB%2FmV1JGqhKxPvnxCA3zH2mX%2BWjg8OH%2Bf5hop8Yh333TCtIjqNqlRS%2Fm6g64rb0kKWWtArsAZriEgfFkXY%2FuWep6v8JJ3q8LqIBYfFSzQpOa83BmTIhIWuJSr%2BcfarsseO9GJhg5MbykY%2FQHfbcaPmSQOWVvibUhfQmSvz3t7W1DiMteS&X-Amz-Signature=41daaae5a18c6616a0f065fe32a620bab9c383aea7b4898ed56e83ca5c279dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCXESGY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXYO77o2mriVCiMKJSMzI3qyg8HWKn%2FETmAzIMVSQT9QIhAMuVdQc6TwwdSo0Bzv6wzyn2%2B1EfT1Kv%2Bhb98i5SaS40KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2nZC7GVihoOhz0bsq3ANYzwB%2B4pscxoBOIv8PyivzLhv0pfAkXWAi0Ra4OT4XQHNvLcLZNv5OMh1c2lyUmn9ts%2F4N0hJQX45zMhcYjk99xTHXSolHJ%2FKsuLrxiGtENJsRSf7x7%2FE8V1Nu0rBfWFYdk7PYY1v%2BOsPlsrdqWN3uK5n0dJXJf4dHIq4th6tXbMA7POwCikRYTzGg0cBuB9H1k79%2BCD5btXRuxdyOBW0%2B3f%2FdInr7ksXKENlzJoh%2FZCsyvhGMbjbv9qTSNXI70t9igBnU9Vg09xTKV3ivR50GqomrJN4VNObcxDSnBYwRkiZSFmeSWKC1KYdLycDy8Kqtz0UgE%2FZF0oGpvJtrLsYlfOVDJXOQhHH3Y6Pz1SpaAbMgwN8mcjlDS1r19pSd%2Bz5mqqVZ1K9%2BzVKFRkCwH7WjUuC%2BxXgtsMNuHCCJrBbHn0rZltnlJ6AaVSoScZ9wtBCuN117G%2BP2KvR1Zb7V1mycAO8tDYtB1xddoLwGg1FjyqG6Vnu3l9J5jUpP5X4R3kZQ4xwYkGbHy0x%2F2DAfcVrscfFJTTU1oOxwXBiU4T%2BXx16%2B%2FOeY3omgTyKvGW4SBoMHBteo5KbjY4kiwNrvap2EaC8KXFczv9Nk8gSmh6YAoWEjQMouMooWYnTvrDDLgfrABjqkARYb0kNR%2BfjrBq2SaaJKzmbcPcg6mXpOTZ2gRokDXJWhB%2FmV1JGqhKxPvnxCA3zH2mX%2BWjg8OH%2Bf5hop8Yh333TCtIjqNqlRS%2Fm6g64rb0kKWWtArsAZriEgfFkXY%2FuWep6v8JJ3q8LqIBYfFSzQpOa83BmTIhIWuJSr%2BcfarsseO9GJhg5MbykY%2FQHfbcaPmSQOWVvibUhfQmSvz3t7W1DiMteS&X-Amz-Signature=f78027b2b4b85a1f8277ba7e1e64d5e3aa0fe7f07215e9f2b5c1690d24c2c756&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCXESGY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXYO77o2mriVCiMKJSMzI3qyg8HWKn%2FETmAzIMVSQT9QIhAMuVdQc6TwwdSo0Bzv6wzyn2%2B1EfT1Kv%2Bhb98i5SaS40KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2nZC7GVihoOhz0bsq3ANYzwB%2B4pscxoBOIv8PyivzLhv0pfAkXWAi0Ra4OT4XQHNvLcLZNv5OMh1c2lyUmn9ts%2F4N0hJQX45zMhcYjk99xTHXSolHJ%2FKsuLrxiGtENJsRSf7x7%2FE8V1Nu0rBfWFYdk7PYY1v%2BOsPlsrdqWN3uK5n0dJXJf4dHIq4th6tXbMA7POwCikRYTzGg0cBuB9H1k79%2BCD5btXRuxdyOBW0%2B3f%2FdInr7ksXKENlzJoh%2FZCsyvhGMbjbv9qTSNXI70t9igBnU9Vg09xTKV3ivR50GqomrJN4VNObcxDSnBYwRkiZSFmeSWKC1KYdLycDy8Kqtz0UgE%2FZF0oGpvJtrLsYlfOVDJXOQhHH3Y6Pz1SpaAbMgwN8mcjlDS1r19pSd%2Bz5mqqVZ1K9%2BzVKFRkCwH7WjUuC%2BxXgtsMNuHCCJrBbHn0rZltnlJ6AaVSoScZ9wtBCuN117G%2BP2KvR1Zb7V1mycAO8tDYtB1xddoLwGg1FjyqG6Vnu3l9J5jUpP5X4R3kZQ4xwYkGbHy0x%2F2DAfcVrscfFJTTU1oOxwXBiU4T%2BXx16%2B%2FOeY3omgTyKvGW4SBoMHBteo5KbjY4kiwNrvap2EaC8KXFczv9Nk8gSmh6YAoWEjQMouMooWYnTvrDDLgfrABjqkARYb0kNR%2BfjrBq2SaaJKzmbcPcg6mXpOTZ2gRokDXJWhB%2FmV1JGqhKxPvnxCA3zH2mX%2BWjg8OH%2Bf5hop8Yh333TCtIjqNqlRS%2Fm6g64rb0kKWWtArsAZriEgfFkXY%2FuWep6v8JJ3q8LqIBYfFSzQpOa83BmTIhIWuJSr%2BcfarsseO9GJhg5MbykY%2FQHfbcaPmSQOWVvibUhfQmSvz3t7W1DiMteS&X-Amz-Signature=cca9cc7ab9f1b397e12b7a52514e876f80c3f31841ae5353dc7a4934591d67a2&X-Amz-SignedHeaders=host&x-id=GetObject)
