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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWEFPCI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICTEGuPDHPXCXKEEZ9QyVPUo4lSPp9D35hCAyWpIhWQJAiByrSm%2FBdEJuvRCsA%2BRJDFIl%2FSl4aBCCiXw7FdiGxMaIyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBOx1vSwNU%2BJcqT8%2FKtwDCWr6qBbJjqxV10M8QOBfbw1DT7h6zKMCpoy4IIPzk4LRSlWK3TqtNrz%2FMmvgXsjeoqVMZnxZY3v0%2F9L222Hj%2Be4oLNsuI%2By%2FO9dQ9CIdxCC%2F4PwulHyoY3bh%2BAa5dAHRPimIMrg3uPiZ1qPZeB%2BREyspgRVxA49zOtN4TPc5WXJaKAu69AWKHB2QMn%2BQsq9ALG7wxgo1SZmqzS9U%2B5T%2BK9mv7mgpQE%2FQin0eJ7ViGAYdMZ7%2BAeSakOKYiuxKio4Nje1EC2CYxCPYecNj%2BRq9wSTEbPPy%2BoKAxr96m6pBwCADgE8k268SCHZaXQRLfU6beqwjWm6sfhGYr%2F8pfTu6DrplUi6jCc7sXOTocAb2cp1tx%2BlUWkfzfBF9tbNiBTp1yLYcxa8tfYp2o7USMWodtvZHz9wQgEgTdDNtshh9KFS9ll%2F%2BqLga8UzJ7tqhacJr5cPOKhTRvBq3WEDYLuxl8cCszKLwO6SuLCAtdRitJSfYoqBlFMF%2BuosUZP5PPzRMwhbQkLcyUwl1zsiOPzU194OVNW61fJHwCCbOCmYlxCWojPCshrUi3y4hec2olkRUSdXLcwl6d9kwCGnBXmVFQSTTZwJvtqMs8XN1pY4pAURKN9YaqV01OjJejZ4wnaOWvQY6pgGrSfBdZ6TPmDQDub811to9AG1IGq9W55nzZ7jNK%2F8tFnp7GZ4a2yKqcRTdbBxpRqRjqUMzdj9yA8yTBOo3YlCovKRncQ%2BY%2FleS%2FUveZdBJwbTQ29WmoDG9V0dbaqtoHc%2F1uRvOm6uLoHozWiyacI%2BvDA7nUiQ%2FPayn7p1vsEl3DJRyneo7KG%2BmzXFsXHnKUZPB6wXITqCnkKeLSKPa1DbP2tRwxZ3Y&X-Amz-Signature=8834c9b8015079e03113c8dfaf888a29d0f965cc40b5a52f6f76f13f014225a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWEFPCI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICTEGuPDHPXCXKEEZ9QyVPUo4lSPp9D35hCAyWpIhWQJAiByrSm%2FBdEJuvRCsA%2BRJDFIl%2FSl4aBCCiXw7FdiGxMaIyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBOx1vSwNU%2BJcqT8%2FKtwDCWr6qBbJjqxV10M8QOBfbw1DT7h6zKMCpoy4IIPzk4LRSlWK3TqtNrz%2FMmvgXsjeoqVMZnxZY3v0%2F9L222Hj%2Be4oLNsuI%2By%2FO9dQ9CIdxCC%2F4PwulHyoY3bh%2BAa5dAHRPimIMrg3uPiZ1qPZeB%2BREyspgRVxA49zOtN4TPc5WXJaKAu69AWKHB2QMn%2BQsq9ALG7wxgo1SZmqzS9U%2B5T%2BK9mv7mgpQE%2FQin0eJ7ViGAYdMZ7%2BAeSakOKYiuxKio4Nje1EC2CYxCPYecNj%2BRq9wSTEbPPy%2BoKAxr96m6pBwCADgE8k268SCHZaXQRLfU6beqwjWm6sfhGYr%2F8pfTu6DrplUi6jCc7sXOTocAb2cp1tx%2BlUWkfzfBF9tbNiBTp1yLYcxa8tfYp2o7USMWodtvZHz9wQgEgTdDNtshh9KFS9ll%2F%2BqLga8UzJ7tqhacJr5cPOKhTRvBq3WEDYLuxl8cCszKLwO6SuLCAtdRitJSfYoqBlFMF%2BuosUZP5PPzRMwhbQkLcyUwl1zsiOPzU194OVNW61fJHwCCbOCmYlxCWojPCshrUi3y4hec2olkRUSdXLcwl6d9kwCGnBXmVFQSTTZwJvtqMs8XN1pY4pAURKN9YaqV01OjJejZ4wnaOWvQY6pgGrSfBdZ6TPmDQDub811to9AG1IGq9W55nzZ7jNK%2F8tFnp7GZ4a2yKqcRTdbBxpRqRjqUMzdj9yA8yTBOo3YlCovKRncQ%2BY%2FleS%2FUveZdBJwbTQ29WmoDG9V0dbaqtoHc%2F1uRvOm6uLoHozWiyacI%2BvDA7nUiQ%2FPayn7p1vsEl3DJRyneo7KG%2BmzXFsXHnKUZPB6wXITqCnkKeLSKPa1DbP2tRwxZ3Y&X-Amz-Signature=5c5b6a11eae2b37d39048e9583f8efe4dcaf497ee0305bdf3aafcf2633e86451&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWEFPCI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICTEGuPDHPXCXKEEZ9QyVPUo4lSPp9D35hCAyWpIhWQJAiByrSm%2FBdEJuvRCsA%2BRJDFIl%2FSl4aBCCiXw7FdiGxMaIyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBOx1vSwNU%2BJcqT8%2FKtwDCWr6qBbJjqxV10M8QOBfbw1DT7h6zKMCpoy4IIPzk4LRSlWK3TqtNrz%2FMmvgXsjeoqVMZnxZY3v0%2F9L222Hj%2Be4oLNsuI%2By%2FO9dQ9CIdxCC%2F4PwulHyoY3bh%2BAa5dAHRPimIMrg3uPiZ1qPZeB%2BREyspgRVxA49zOtN4TPc5WXJaKAu69AWKHB2QMn%2BQsq9ALG7wxgo1SZmqzS9U%2B5T%2BK9mv7mgpQE%2FQin0eJ7ViGAYdMZ7%2BAeSakOKYiuxKio4Nje1EC2CYxCPYecNj%2BRq9wSTEbPPy%2BoKAxr96m6pBwCADgE8k268SCHZaXQRLfU6beqwjWm6sfhGYr%2F8pfTu6DrplUi6jCc7sXOTocAb2cp1tx%2BlUWkfzfBF9tbNiBTp1yLYcxa8tfYp2o7USMWodtvZHz9wQgEgTdDNtshh9KFS9ll%2F%2BqLga8UzJ7tqhacJr5cPOKhTRvBq3WEDYLuxl8cCszKLwO6SuLCAtdRitJSfYoqBlFMF%2BuosUZP5PPzRMwhbQkLcyUwl1zsiOPzU194OVNW61fJHwCCbOCmYlxCWojPCshrUi3y4hec2olkRUSdXLcwl6d9kwCGnBXmVFQSTTZwJvtqMs8XN1pY4pAURKN9YaqV01OjJejZ4wnaOWvQY6pgGrSfBdZ6TPmDQDub811to9AG1IGq9W55nzZ7jNK%2F8tFnp7GZ4a2yKqcRTdbBxpRqRjqUMzdj9yA8yTBOo3YlCovKRncQ%2BY%2FleS%2FUveZdBJwbTQ29WmoDG9V0dbaqtoHc%2F1uRvOm6uLoHozWiyacI%2BvDA7nUiQ%2FPayn7p1vsEl3DJRyneo7KG%2BmzXFsXHnKUZPB6wXITqCnkKeLSKPa1DbP2tRwxZ3Y&X-Amz-Signature=89ee0ee85be19af033e19ca9f94e4835bd17039ec7ff3083563fc5429e33dea0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWEFPCI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICTEGuPDHPXCXKEEZ9QyVPUo4lSPp9D35hCAyWpIhWQJAiByrSm%2FBdEJuvRCsA%2BRJDFIl%2FSl4aBCCiXw7FdiGxMaIyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBOx1vSwNU%2BJcqT8%2FKtwDCWr6qBbJjqxV10M8QOBfbw1DT7h6zKMCpoy4IIPzk4LRSlWK3TqtNrz%2FMmvgXsjeoqVMZnxZY3v0%2F9L222Hj%2Be4oLNsuI%2By%2FO9dQ9CIdxCC%2F4PwulHyoY3bh%2BAa5dAHRPimIMrg3uPiZ1qPZeB%2BREyspgRVxA49zOtN4TPc5WXJaKAu69AWKHB2QMn%2BQsq9ALG7wxgo1SZmqzS9U%2B5T%2BK9mv7mgpQE%2FQin0eJ7ViGAYdMZ7%2BAeSakOKYiuxKio4Nje1EC2CYxCPYecNj%2BRq9wSTEbPPy%2BoKAxr96m6pBwCADgE8k268SCHZaXQRLfU6beqwjWm6sfhGYr%2F8pfTu6DrplUi6jCc7sXOTocAb2cp1tx%2BlUWkfzfBF9tbNiBTp1yLYcxa8tfYp2o7USMWodtvZHz9wQgEgTdDNtshh9KFS9ll%2F%2BqLga8UzJ7tqhacJr5cPOKhTRvBq3WEDYLuxl8cCszKLwO6SuLCAtdRitJSfYoqBlFMF%2BuosUZP5PPzRMwhbQkLcyUwl1zsiOPzU194OVNW61fJHwCCbOCmYlxCWojPCshrUi3y4hec2olkRUSdXLcwl6d9kwCGnBXmVFQSTTZwJvtqMs8XN1pY4pAURKN9YaqV01OjJejZ4wnaOWvQY6pgGrSfBdZ6TPmDQDub811to9AG1IGq9W55nzZ7jNK%2F8tFnp7GZ4a2yKqcRTdbBxpRqRjqUMzdj9yA8yTBOo3YlCovKRncQ%2BY%2FleS%2FUveZdBJwbTQ29WmoDG9V0dbaqtoHc%2F1uRvOm6uLoHozWiyacI%2BvDA7nUiQ%2FPayn7p1vsEl3DJRyneo7KG%2BmzXFsXHnKUZPB6wXITqCnkKeLSKPa1DbP2tRwxZ3Y&X-Amz-Signature=0381822bd32129f1974c1d13da16e36f447523c8cfc40a9c248a6a2d8397ccc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWEFPCI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICTEGuPDHPXCXKEEZ9QyVPUo4lSPp9D35hCAyWpIhWQJAiByrSm%2FBdEJuvRCsA%2BRJDFIl%2FSl4aBCCiXw7FdiGxMaIyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBOx1vSwNU%2BJcqT8%2FKtwDCWr6qBbJjqxV10M8QOBfbw1DT7h6zKMCpoy4IIPzk4LRSlWK3TqtNrz%2FMmvgXsjeoqVMZnxZY3v0%2F9L222Hj%2Be4oLNsuI%2By%2FO9dQ9CIdxCC%2F4PwulHyoY3bh%2BAa5dAHRPimIMrg3uPiZ1qPZeB%2BREyspgRVxA49zOtN4TPc5WXJaKAu69AWKHB2QMn%2BQsq9ALG7wxgo1SZmqzS9U%2B5T%2BK9mv7mgpQE%2FQin0eJ7ViGAYdMZ7%2BAeSakOKYiuxKio4Nje1EC2CYxCPYecNj%2BRq9wSTEbPPy%2BoKAxr96m6pBwCADgE8k268SCHZaXQRLfU6beqwjWm6sfhGYr%2F8pfTu6DrplUi6jCc7sXOTocAb2cp1tx%2BlUWkfzfBF9tbNiBTp1yLYcxa8tfYp2o7USMWodtvZHz9wQgEgTdDNtshh9KFS9ll%2F%2BqLga8UzJ7tqhacJr5cPOKhTRvBq3WEDYLuxl8cCszKLwO6SuLCAtdRitJSfYoqBlFMF%2BuosUZP5PPzRMwhbQkLcyUwl1zsiOPzU194OVNW61fJHwCCbOCmYlxCWojPCshrUi3y4hec2olkRUSdXLcwl6d9kwCGnBXmVFQSTTZwJvtqMs8XN1pY4pAURKN9YaqV01OjJejZ4wnaOWvQY6pgGrSfBdZ6TPmDQDub811to9AG1IGq9W55nzZ7jNK%2F8tFnp7GZ4a2yKqcRTdbBxpRqRjqUMzdj9yA8yTBOo3YlCovKRncQ%2BY%2FleS%2FUveZdBJwbTQ29WmoDG9V0dbaqtoHc%2F1uRvOm6uLoHozWiyacI%2BvDA7nUiQ%2FPayn7p1vsEl3DJRyneo7KG%2BmzXFsXHnKUZPB6wXITqCnkKeLSKPa1DbP2tRwxZ3Y&X-Amz-Signature=db46e2714121c97205d3f69fc06a35d429b81b4a746edc88b7cf7d2a6304db6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGWEFPCI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICTEGuPDHPXCXKEEZ9QyVPUo4lSPp9D35hCAyWpIhWQJAiByrSm%2FBdEJuvRCsA%2BRJDFIl%2FSl4aBCCiXw7FdiGxMaIyr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMBOx1vSwNU%2BJcqT8%2FKtwDCWr6qBbJjqxV10M8QOBfbw1DT7h6zKMCpoy4IIPzk4LRSlWK3TqtNrz%2FMmvgXsjeoqVMZnxZY3v0%2F9L222Hj%2Be4oLNsuI%2By%2FO9dQ9CIdxCC%2F4PwulHyoY3bh%2BAa5dAHRPimIMrg3uPiZ1qPZeB%2BREyspgRVxA49zOtN4TPc5WXJaKAu69AWKHB2QMn%2BQsq9ALG7wxgo1SZmqzS9U%2B5T%2BK9mv7mgpQE%2FQin0eJ7ViGAYdMZ7%2BAeSakOKYiuxKio4Nje1EC2CYxCPYecNj%2BRq9wSTEbPPy%2BoKAxr96m6pBwCADgE8k268SCHZaXQRLfU6beqwjWm6sfhGYr%2F8pfTu6DrplUi6jCc7sXOTocAb2cp1tx%2BlUWkfzfBF9tbNiBTp1yLYcxa8tfYp2o7USMWodtvZHz9wQgEgTdDNtshh9KFS9ll%2F%2BqLga8UzJ7tqhacJr5cPOKhTRvBq3WEDYLuxl8cCszKLwO6SuLCAtdRitJSfYoqBlFMF%2BuosUZP5PPzRMwhbQkLcyUwl1zsiOPzU194OVNW61fJHwCCbOCmYlxCWojPCshrUi3y4hec2olkRUSdXLcwl6d9kwCGnBXmVFQSTTZwJvtqMs8XN1pY4pAURKN9YaqV01OjJejZ4wnaOWvQY6pgGrSfBdZ6TPmDQDub811to9AG1IGq9W55nzZ7jNK%2F8tFnp7GZ4a2yKqcRTdbBxpRqRjqUMzdj9yA8yTBOo3YlCovKRncQ%2BY%2FleS%2FUveZdBJwbTQ29WmoDG9V0dbaqtoHc%2F1uRvOm6uLoHozWiyacI%2BvDA7nUiQ%2FPayn7p1vsEl3DJRyneo7KG%2BmzXFsXHnKUZPB6wXITqCnkKeLSKPa1DbP2tRwxZ3Y&X-Amz-Signature=1e22cceea781b3ff54cafab2a9a4b910d63114f3c9fa30e60c1bdfb5ee10ad04&X-Amz-SignedHeaders=host&x-id=GetObject)
