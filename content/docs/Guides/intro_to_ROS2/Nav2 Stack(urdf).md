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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGDJFC2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FEcNDbA%2F3EIP6er%2BhqG2YcUyh%2FUDRAHnq%2FaS7fYDypAiEA0l68JgMsIlxaw3Fmgu6IEHLIVbq7IRdsFa2F%2BKNw1dMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFUHvColGote5LRHxircA0XBjrcERL52DaUm%2BqlVqdRXspPOHC87iQUBiwa%2FS5x9I6tAvTrGWeS5bz3jWWgLqEi7MY9IFlCbGJlAtfJi%2FV2jFIbcRiWACf5cB%2FUcMOn3JI%2FSlu0KMQvLP2vyeFaAZYyhnE3PqpSeXu%2BqU7T6dJOgLiI1Hdr9Lwq5427hq%2BquQCL4G%2BTJuHEpVGa39uWZ0YOCaepXAopqCLFLG7GqmrOdlKkVEdZTENEZ8C1kwJX5kY6ZJKn5bP9ialj0%2Fs9JKsn8kMEwrFojL8aHa8JNdNt%2FA1x6EqQZ%2B%2B4pK4KyuxDt5%2F0mBKEeIX7LChT%2FL%2BFGMGRST9WAud5PUMmdYGW4aezMsLOYLa8x3O5j7haGKUxuemeKGvcQdGGiWeC%2Fq2NovYusob29RFRp2NDUSqGF9vI%2FjTqu2hdTiB6W8XUrxxsUKfHjnBP9qQd4k9qi1F5DEKFI1dbvXtgTt4F%2BSSKZXmaBIiitiIfDzSqwwmwR%2FJBW4Qba5fsZMROWLaYbSa9vwy49ea1RA1Ny32bP6UKJcy3WKbqLDmQ3crBj3L%2FfXSurGUP1hDVOyZzlbEp8B%2B9fDgXdBacUxCgnEtj%2F5MVBg367l49bR7LrklzLwK6GNv%2B7D0tVPzTfMS0WGu%2F9MIbM6MAGOqUBqMSW6pj7TL8HMUKR7VXUz4wu9FOOMOGXJSpE7GTHjCVhpy2JUSnla2HrxaA0WP6%2FRapz3ROJOsIDviFibWMdMjOE4Q0a%2FqgdG9Htx4TmsmTPSEsLjTaJYcyTpyfBm6cpIHIDym4XBCd92%2BXqHhxsw9mURqsLExCwjC1CApH%2FjgF%2FDz%2B15wPnKgQldj1RglDeQKkHbWQxYTEG3Bzwj5pIn1SxTOoZ&X-Amz-Signature=5f13aeeb002f1185ef0bd813c4534634ec6b458fc77a7806912883ba232a8c02&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGDJFC2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FEcNDbA%2F3EIP6er%2BhqG2YcUyh%2FUDRAHnq%2FaS7fYDypAiEA0l68JgMsIlxaw3Fmgu6IEHLIVbq7IRdsFa2F%2BKNw1dMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFUHvColGote5LRHxircA0XBjrcERL52DaUm%2BqlVqdRXspPOHC87iQUBiwa%2FS5x9I6tAvTrGWeS5bz3jWWgLqEi7MY9IFlCbGJlAtfJi%2FV2jFIbcRiWACf5cB%2FUcMOn3JI%2FSlu0KMQvLP2vyeFaAZYyhnE3PqpSeXu%2BqU7T6dJOgLiI1Hdr9Lwq5427hq%2BquQCL4G%2BTJuHEpVGa39uWZ0YOCaepXAopqCLFLG7GqmrOdlKkVEdZTENEZ8C1kwJX5kY6ZJKn5bP9ialj0%2Fs9JKsn8kMEwrFojL8aHa8JNdNt%2FA1x6EqQZ%2B%2B4pK4KyuxDt5%2F0mBKEeIX7LChT%2FL%2BFGMGRST9WAud5PUMmdYGW4aezMsLOYLa8x3O5j7haGKUxuemeKGvcQdGGiWeC%2Fq2NovYusob29RFRp2NDUSqGF9vI%2FjTqu2hdTiB6W8XUrxxsUKfHjnBP9qQd4k9qi1F5DEKFI1dbvXtgTt4F%2BSSKZXmaBIiitiIfDzSqwwmwR%2FJBW4Qba5fsZMROWLaYbSa9vwy49ea1RA1Ny32bP6UKJcy3WKbqLDmQ3crBj3L%2FfXSurGUP1hDVOyZzlbEp8B%2B9fDgXdBacUxCgnEtj%2F5MVBg367l49bR7LrklzLwK6GNv%2B7D0tVPzTfMS0WGu%2F9MIbM6MAGOqUBqMSW6pj7TL8HMUKR7VXUz4wu9FOOMOGXJSpE7GTHjCVhpy2JUSnla2HrxaA0WP6%2FRapz3ROJOsIDviFibWMdMjOE4Q0a%2FqgdG9Htx4TmsmTPSEsLjTaJYcyTpyfBm6cpIHIDym4XBCd92%2BXqHhxsw9mURqsLExCwjC1CApH%2FjgF%2FDz%2B15wPnKgQldj1RglDeQKkHbWQxYTEG3Bzwj5pIn1SxTOoZ&X-Amz-Signature=c1f01c0af49110588ec571c5c40d4d8c6ffca210dc46acf42951ec650b75a848&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGDJFC2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FEcNDbA%2F3EIP6er%2BhqG2YcUyh%2FUDRAHnq%2FaS7fYDypAiEA0l68JgMsIlxaw3Fmgu6IEHLIVbq7IRdsFa2F%2BKNw1dMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFUHvColGote5LRHxircA0XBjrcERL52DaUm%2BqlVqdRXspPOHC87iQUBiwa%2FS5x9I6tAvTrGWeS5bz3jWWgLqEi7MY9IFlCbGJlAtfJi%2FV2jFIbcRiWACf5cB%2FUcMOn3JI%2FSlu0KMQvLP2vyeFaAZYyhnE3PqpSeXu%2BqU7T6dJOgLiI1Hdr9Lwq5427hq%2BquQCL4G%2BTJuHEpVGa39uWZ0YOCaepXAopqCLFLG7GqmrOdlKkVEdZTENEZ8C1kwJX5kY6ZJKn5bP9ialj0%2Fs9JKsn8kMEwrFojL8aHa8JNdNt%2FA1x6EqQZ%2B%2B4pK4KyuxDt5%2F0mBKEeIX7LChT%2FL%2BFGMGRST9WAud5PUMmdYGW4aezMsLOYLa8x3O5j7haGKUxuemeKGvcQdGGiWeC%2Fq2NovYusob29RFRp2NDUSqGF9vI%2FjTqu2hdTiB6W8XUrxxsUKfHjnBP9qQd4k9qi1F5DEKFI1dbvXtgTt4F%2BSSKZXmaBIiitiIfDzSqwwmwR%2FJBW4Qba5fsZMROWLaYbSa9vwy49ea1RA1Ny32bP6UKJcy3WKbqLDmQ3crBj3L%2FfXSurGUP1hDVOyZzlbEp8B%2B9fDgXdBacUxCgnEtj%2F5MVBg367l49bR7LrklzLwK6GNv%2B7D0tVPzTfMS0WGu%2F9MIbM6MAGOqUBqMSW6pj7TL8HMUKR7VXUz4wu9FOOMOGXJSpE7GTHjCVhpy2JUSnla2HrxaA0WP6%2FRapz3ROJOsIDviFibWMdMjOE4Q0a%2FqgdG9Htx4TmsmTPSEsLjTaJYcyTpyfBm6cpIHIDym4XBCd92%2BXqHhxsw9mURqsLExCwjC1CApH%2FjgF%2FDz%2B15wPnKgQldj1RglDeQKkHbWQxYTEG3Bzwj5pIn1SxTOoZ&X-Amz-Signature=b37142583c255663fd9770f09dd2bca87bf1ee55529f0fff4e2702b06aa2c50b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGDJFC2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FEcNDbA%2F3EIP6er%2BhqG2YcUyh%2FUDRAHnq%2FaS7fYDypAiEA0l68JgMsIlxaw3Fmgu6IEHLIVbq7IRdsFa2F%2BKNw1dMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFUHvColGote5LRHxircA0XBjrcERL52DaUm%2BqlVqdRXspPOHC87iQUBiwa%2FS5x9I6tAvTrGWeS5bz3jWWgLqEi7MY9IFlCbGJlAtfJi%2FV2jFIbcRiWACf5cB%2FUcMOn3JI%2FSlu0KMQvLP2vyeFaAZYyhnE3PqpSeXu%2BqU7T6dJOgLiI1Hdr9Lwq5427hq%2BquQCL4G%2BTJuHEpVGa39uWZ0YOCaepXAopqCLFLG7GqmrOdlKkVEdZTENEZ8C1kwJX5kY6ZJKn5bP9ialj0%2Fs9JKsn8kMEwrFojL8aHa8JNdNt%2FA1x6EqQZ%2B%2B4pK4KyuxDt5%2F0mBKEeIX7LChT%2FL%2BFGMGRST9WAud5PUMmdYGW4aezMsLOYLa8x3O5j7haGKUxuemeKGvcQdGGiWeC%2Fq2NovYusob29RFRp2NDUSqGF9vI%2FjTqu2hdTiB6W8XUrxxsUKfHjnBP9qQd4k9qi1F5DEKFI1dbvXtgTt4F%2BSSKZXmaBIiitiIfDzSqwwmwR%2FJBW4Qba5fsZMROWLaYbSa9vwy49ea1RA1Ny32bP6UKJcy3WKbqLDmQ3crBj3L%2FfXSurGUP1hDVOyZzlbEp8B%2B9fDgXdBacUxCgnEtj%2F5MVBg367l49bR7LrklzLwK6GNv%2B7D0tVPzTfMS0WGu%2F9MIbM6MAGOqUBqMSW6pj7TL8HMUKR7VXUz4wu9FOOMOGXJSpE7GTHjCVhpy2JUSnla2HrxaA0WP6%2FRapz3ROJOsIDviFibWMdMjOE4Q0a%2FqgdG9Htx4TmsmTPSEsLjTaJYcyTpyfBm6cpIHIDym4XBCd92%2BXqHhxsw9mURqsLExCwjC1CApH%2FjgF%2FDz%2B15wPnKgQldj1RglDeQKkHbWQxYTEG3Bzwj5pIn1SxTOoZ&X-Amz-Signature=556cbdb4aecb1a5a1efdb6dd821536b2c4a1fd59bef889659b7cc824af546742&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGDJFC2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FEcNDbA%2F3EIP6er%2BhqG2YcUyh%2FUDRAHnq%2FaS7fYDypAiEA0l68JgMsIlxaw3Fmgu6IEHLIVbq7IRdsFa2F%2BKNw1dMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFUHvColGote5LRHxircA0XBjrcERL52DaUm%2BqlVqdRXspPOHC87iQUBiwa%2FS5x9I6tAvTrGWeS5bz3jWWgLqEi7MY9IFlCbGJlAtfJi%2FV2jFIbcRiWACf5cB%2FUcMOn3JI%2FSlu0KMQvLP2vyeFaAZYyhnE3PqpSeXu%2BqU7T6dJOgLiI1Hdr9Lwq5427hq%2BquQCL4G%2BTJuHEpVGa39uWZ0YOCaepXAopqCLFLG7GqmrOdlKkVEdZTENEZ8C1kwJX5kY6ZJKn5bP9ialj0%2Fs9JKsn8kMEwrFojL8aHa8JNdNt%2FA1x6EqQZ%2B%2B4pK4KyuxDt5%2F0mBKEeIX7LChT%2FL%2BFGMGRST9WAud5PUMmdYGW4aezMsLOYLa8x3O5j7haGKUxuemeKGvcQdGGiWeC%2Fq2NovYusob29RFRp2NDUSqGF9vI%2FjTqu2hdTiB6W8XUrxxsUKfHjnBP9qQd4k9qi1F5DEKFI1dbvXtgTt4F%2BSSKZXmaBIiitiIfDzSqwwmwR%2FJBW4Qba5fsZMROWLaYbSa9vwy49ea1RA1Ny32bP6UKJcy3WKbqLDmQ3crBj3L%2FfXSurGUP1hDVOyZzlbEp8B%2B9fDgXdBacUxCgnEtj%2F5MVBg367l49bR7LrklzLwK6GNv%2B7D0tVPzTfMS0WGu%2F9MIbM6MAGOqUBqMSW6pj7TL8HMUKR7VXUz4wu9FOOMOGXJSpE7GTHjCVhpy2JUSnla2HrxaA0WP6%2FRapz3ROJOsIDviFibWMdMjOE4Q0a%2FqgdG9Htx4TmsmTPSEsLjTaJYcyTpyfBm6cpIHIDym4XBCd92%2BXqHhxsw9mURqsLExCwjC1CApH%2FjgF%2FDz%2B15wPnKgQldj1RglDeQKkHbWQxYTEG3Bzwj5pIn1SxTOoZ&X-Amz-Signature=d2f0f4dd837a332c1aa6b48f20e0a950c681527fb8e4fca92fe4addac485ca3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULGDJFC2%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FEcNDbA%2F3EIP6er%2BhqG2YcUyh%2FUDRAHnq%2FaS7fYDypAiEA0l68JgMsIlxaw3Fmgu6IEHLIVbq7IRdsFa2F%2BKNw1dMq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFUHvColGote5LRHxircA0XBjrcERL52DaUm%2BqlVqdRXspPOHC87iQUBiwa%2FS5x9I6tAvTrGWeS5bz3jWWgLqEi7MY9IFlCbGJlAtfJi%2FV2jFIbcRiWACf5cB%2FUcMOn3JI%2FSlu0KMQvLP2vyeFaAZYyhnE3PqpSeXu%2BqU7T6dJOgLiI1Hdr9Lwq5427hq%2BquQCL4G%2BTJuHEpVGa39uWZ0YOCaepXAopqCLFLG7GqmrOdlKkVEdZTENEZ8C1kwJX5kY6ZJKn5bP9ialj0%2Fs9JKsn8kMEwrFojL8aHa8JNdNt%2FA1x6EqQZ%2B%2B4pK4KyuxDt5%2F0mBKEeIX7LChT%2FL%2BFGMGRST9WAud5PUMmdYGW4aezMsLOYLa8x3O5j7haGKUxuemeKGvcQdGGiWeC%2Fq2NovYusob29RFRp2NDUSqGF9vI%2FjTqu2hdTiB6W8XUrxxsUKfHjnBP9qQd4k9qi1F5DEKFI1dbvXtgTt4F%2BSSKZXmaBIiitiIfDzSqwwmwR%2FJBW4Qba5fsZMROWLaYbSa9vwy49ea1RA1Ny32bP6UKJcy3WKbqLDmQ3crBj3L%2FfXSurGUP1hDVOyZzlbEp8B%2B9fDgXdBacUxCgnEtj%2F5MVBg367l49bR7LrklzLwK6GNv%2B7D0tVPzTfMS0WGu%2F9MIbM6MAGOqUBqMSW6pj7TL8HMUKR7VXUz4wu9FOOMOGXJSpE7GTHjCVhpy2JUSnla2HrxaA0WP6%2FRapz3ROJOsIDviFibWMdMjOE4Q0a%2FqgdG9Htx4TmsmTPSEsLjTaJYcyTpyfBm6cpIHIDym4XBCd92%2BXqHhxsw9mURqsLExCwjC1CApH%2FjgF%2FDz%2B15wPnKgQldj1RglDeQKkHbWQxYTEG3Bzwj5pIn1SxTOoZ&X-Amz-Signature=457e890ac3a4f9b3e911654ccb1b8db396bebcaf9f84a73e72b23f5c4e3eb852&X-Amz-SignedHeaders=host&x-id=GetObject)
