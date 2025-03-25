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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEVLKVK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQMyN2SUVQtoCu76MlY6%2FouKpg2xLVGe0uKXZ0MXMVlAiEApNDvbk7E6iymbh5h%2FMR1Bn0UROu8c%2BF2eay2EImV4iMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyrpGntOo%2Bs6yr%2FFyrcA3P0OwKw%2F1oYumBIdeqG%2Bcs9AkUMNd9i%2B7DWYnVGHSVtygxg310sRS2yC3L2y%2FEbbB24hzXtXVD5hVBko%2BX2R99Ltpz5ByKClVYLnaHMFQyMAkbWxechj5rUzLRUjdtiAg4lL10%2BI4V4WpPYT4E2986IME2GlPVmRv691M%2BCLrDuT6WuUeU9id%2BrcDrIJqYVqGgGTia0uKyFBtatYr%2FJpOQPzYAGRfZUtXA8b1arClswhoXiaSYcEZ7t6cBKGBMLOJ6UgAY5b%2FFV5C0xJX59o7hscwpcvMnMCcin3KNgZ%2Bn%2FI32uunQFxT6%2Bs778St%2B0MNVf9avcwGDbehEfK20A3UVUAZeN3eyCFIgBFFTUmx9EvyOHKbI2%2BC8f4ohb407vfHgu%2FRr2Lo%2BqOGhZct%2FhwSbwTfcWRQXyiOeRDSfPRleoo5dO41wzVdoIo4rUt54w0JEW4lJAfAS9QDsL8iUMvYoDrM6PwGMXCA8bwsUEa06X8DBsX1lKcbgnr49J77IIitTlpKqRcVTcgIsj95cv80E6CHYf0QAF42PTmmN%2BiBzfpVlJHIbW43eePdbA6N4%2Fid8sHZOF0sa%2B9PAyoVBKzUOgGwUt4oDjF6PWGb6wv7HxJ87xOqKRQb%2BDZ%2FwxMP%2Fvh78GOqUBpns82RPxc7N4HxfaO9s0fjHRvyXCZQFZUcPJz8LpPUTIg%2Fkq8TcfGzdaVX6%2Byh0f08X6rY6azUC8XqaYzeRWTXqSfAutJC4L5LjqP2hyj1E05cKiJDgakhfkaeHDH0O11d11BPP7Gz%2BADp%2BhgBjW7Youe5oyqLas1HQLOvYWT34xe6loMqSL%2BULsmfUQ5T4snvz1m%2BhaHfk%2BqL7%2Ff2f1nIoIITlj&X-Amz-Signature=2370d417bbcf5a7c4035794ee672bf9ac662658cc61e9aebaf7c3f23dca65e04&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEVLKVK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQMyN2SUVQtoCu76MlY6%2FouKpg2xLVGe0uKXZ0MXMVlAiEApNDvbk7E6iymbh5h%2FMR1Bn0UROu8c%2BF2eay2EImV4iMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyrpGntOo%2Bs6yr%2FFyrcA3P0OwKw%2F1oYumBIdeqG%2Bcs9AkUMNd9i%2B7DWYnVGHSVtygxg310sRS2yC3L2y%2FEbbB24hzXtXVD5hVBko%2BX2R99Ltpz5ByKClVYLnaHMFQyMAkbWxechj5rUzLRUjdtiAg4lL10%2BI4V4WpPYT4E2986IME2GlPVmRv691M%2BCLrDuT6WuUeU9id%2BrcDrIJqYVqGgGTia0uKyFBtatYr%2FJpOQPzYAGRfZUtXA8b1arClswhoXiaSYcEZ7t6cBKGBMLOJ6UgAY5b%2FFV5C0xJX59o7hscwpcvMnMCcin3KNgZ%2Bn%2FI32uunQFxT6%2Bs778St%2B0MNVf9avcwGDbehEfK20A3UVUAZeN3eyCFIgBFFTUmx9EvyOHKbI2%2BC8f4ohb407vfHgu%2FRr2Lo%2BqOGhZct%2FhwSbwTfcWRQXyiOeRDSfPRleoo5dO41wzVdoIo4rUt54w0JEW4lJAfAS9QDsL8iUMvYoDrM6PwGMXCA8bwsUEa06X8DBsX1lKcbgnr49J77IIitTlpKqRcVTcgIsj95cv80E6CHYf0QAF42PTmmN%2BiBzfpVlJHIbW43eePdbA6N4%2Fid8sHZOF0sa%2B9PAyoVBKzUOgGwUt4oDjF6PWGb6wv7HxJ87xOqKRQb%2BDZ%2FwxMP%2Fvh78GOqUBpns82RPxc7N4HxfaO9s0fjHRvyXCZQFZUcPJz8LpPUTIg%2Fkq8TcfGzdaVX6%2Byh0f08X6rY6azUC8XqaYzeRWTXqSfAutJC4L5LjqP2hyj1E05cKiJDgakhfkaeHDH0O11d11BPP7Gz%2BADp%2BhgBjW7Youe5oyqLas1HQLOvYWT34xe6loMqSL%2BULsmfUQ5T4snvz1m%2BhaHfk%2BqL7%2Ff2f1nIoIITlj&X-Amz-Signature=9bb25cb4e28209dc1963a57a3a89eafbe945a7d65e03c6a2d7d2c08f78669fc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEVLKVK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQMyN2SUVQtoCu76MlY6%2FouKpg2xLVGe0uKXZ0MXMVlAiEApNDvbk7E6iymbh5h%2FMR1Bn0UROu8c%2BF2eay2EImV4iMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyrpGntOo%2Bs6yr%2FFyrcA3P0OwKw%2F1oYumBIdeqG%2Bcs9AkUMNd9i%2B7DWYnVGHSVtygxg310sRS2yC3L2y%2FEbbB24hzXtXVD5hVBko%2BX2R99Ltpz5ByKClVYLnaHMFQyMAkbWxechj5rUzLRUjdtiAg4lL10%2BI4V4WpPYT4E2986IME2GlPVmRv691M%2BCLrDuT6WuUeU9id%2BrcDrIJqYVqGgGTia0uKyFBtatYr%2FJpOQPzYAGRfZUtXA8b1arClswhoXiaSYcEZ7t6cBKGBMLOJ6UgAY5b%2FFV5C0xJX59o7hscwpcvMnMCcin3KNgZ%2Bn%2FI32uunQFxT6%2Bs778St%2B0MNVf9avcwGDbehEfK20A3UVUAZeN3eyCFIgBFFTUmx9EvyOHKbI2%2BC8f4ohb407vfHgu%2FRr2Lo%2BqOGhZct%2FhwSbwTfcWRQXyiOeRDSfPRleoo5dO41wzVdoIo4rUt54w0JEW4lJAfAS9QDsL8iUMvYoDrM6PwGMXCA8bwsUEa06X8DBsX1lKcbgnr49J77IIitTlpKqRcVTcgIsj95cv80E6CHYf0QAF42PTmmN%2BiBzfpVlJHIbW43eePdbA6N4%2Fid8sHZOF0sa%2B9PAyoVBKzUOgGwUt4oDjF6PWGb6wv7HxJ87xOqKRQb%2BDZ%2FwxMP%2Fvh78GOqUBpns82RPxc7N4HxfaO9s0fjHRvyXCZQFZUcPJz8LpPUTIg%2Fkq8TcfGzdaVX6%2Byh0f08X6rY6azUC8XqaYzeRWTXqSfAutJC4L5LjqP2hyj1E05cKiJDgakhfkaeHDH0O11d11BPP7Gz%2BADp%2BhgBjW7Youe5oyqLas1HQLOvYWT34xe6loMqSL%2BULsmfUQ5T4snvz1m%2BhaHfk%2BqL7%2Ff2f1nIoIITlj&X-Amz-Signature=41f55cdf1cce2e841523277353e016eda888febd578d8fbf671d5dd7f4aaf399&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEVLKVK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQMyN2SUVQtoCu76MlY6%2FouKpg2xLVGe0uKXZ0MXMVlAiEApNDvbk7E6iymbh5h%2FMR1Bn0UROu8c%2BF2eay2EImV4iMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyrpGntOo%2Bs6yr%2FFyrcA3P0OwKw%2F1oYumBIdeqG%2Bcs9AkUMNd9i%2B7DWYnVGHSVtygxg310sRS2yC3L2y%2FEbbB24hzXtXVD5hVBko%2BX2R99Ltpz5ByKClVYLnaHMFQyMAkbWxechj5rUzLRUjdtiAg4lL10%2BI4V4WpPYT4E2986IME2GlPVmRv691M%2BCLrDuT6WuUeU9id%2BrcDrIJqYVqGgGTia0uKyFBtatYr%2FJpOQPzYAGRfZUtXA8b1arClswhoXiaSYcEZ7t6cBKGBMLOJ6UgAY5b%2FFV5C0xJX59o7hscwpcvMnMCcin3KNgZ%2Bn%2FI32uunQFxT6%2Bs778St%2B0MNVf9avcwGDbehEfK20A3UVUAZeN3eyCFIgBFFTUmx9EvyOHKbI2%2BC8f4ohb407vfHgu%2FRr2Lo%2BqOGhZct%2FhwSbwTfcWRQXyiOeRDSfPRleoo5dO41wzVdoIo4rUt54w0JEW4lJAfAS9QDsL8iUMvYoDrM6PwGMXCA8bwsUEa06X8DBsX1lKcbgnr49J77IIitTlpKqRcVTcgIsj95cv80E6CHYf0QAF42PTmmN%2BiBzfpVlJHIbW43eePdbA6N4%2Fid8sHZOF0sa%2B9PAyoVBKzUOgGwUt4oDjF6PWGb6wv7HxJ87xOqKRQb%2BDZ%2FwxMP%2Fvh78GOqUBpns82RPxc7N4HxfaO9s0fjHRvyXCZQFZUcPJz8LpPUTIg%2Fkq8TcfGzdaVX6%2Byh0f08X6rY6azUC8XqaYzeRWTXqSfAutJC4L5LjqP2hyj1E05cKiJDgakhfkaeHDH0O11d11BPP7Gz%2BADp%2BhgBjW7Youe5oyqLas1HQLOvYWT34xe6loMqSL%2BULsmfUQ5T4snvz1m%2BhaHfk%2BqL7%2Ff2f1nIoIITlj&X-Amz-Signature=cc81e15840604b325cbf28b1f8d55acd6aa0df280eab23dac74975e04b3b750d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEVLKVK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQMyN2SUVQtoCu76MlY6%2FouKpg2xLVGe0uKXZ0MXMVlAiEApNDvbk7E6iymbh5h%2FMR1Bn0UROu8c%2BF2eay2EImV4iMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyrpGntOo%2Bs6yr%2FFyrcA3P0OwKw%2F1oYumBIdeqG%2Bcs9AkUMNd9i%2B7DWYnVGHSVtygxg310sRS2yC3L2y%2FEbbB24hzXtXVD5hVBko%2BX2R99Ltpz5ByKClVYLnaHMFQyMAkbWxechj5rUzLRUjdtiAg4lL10%2BI4V4WpPYT4E2986IME2GlPVmRv691M%2BCLrDuT6WuUeU9id%2BrcDrIJqYVqGgGTia0uKyFBtatYr%2FJpOQPzYAGRfZUtXA8b1arClswhoXiaSYcEZ7t6cBKGBMLOJ6UgAY5b%2FFV5C0xJX59o7hscwpcvMnMCcin3KNgZ%2Bn%2FI32uunQFxT6%2Bs778St%2B0MNVf9avcwGDbehEfK20A3UVUAZeN3eyCFIgBFFTUmx9EvyOHKbI2%2BC8f4ohb407vfHgu%2FRr2Lo%2BqOGhZct%2FhwSbwTfcWRQXyiOeRDSfPRleoo5dO41wzVdoIo4rUt54w0JEW4lJAfAS9QDsL8iUMvYoDrM6PwGMXCA8bwsUEa06X8DBsX1lKcbgnr49J77IIitTlpKqRcVTcgIsj95cv80E6CHYf0QAF42PTmmN%2BiBzfpVlJHIbW43eePdbA6N4%2Fid8sHZOF0sa%2B9PAyoVBKzUOgGwUt4oDjF6PWGb6wv7HxJ87xOqKRQb%2BDZ%2FwxMP%2Fvh78GOqUBpns82RPxc7N4HxfaO9s0fjHRvyXCZQFZUcPJz8LpPUTIg%2Fkq8TcfGzdaVX6%2Byh0f08X6rY6azUC8XqaYzeRWTXqSfAutJC4L5LjqP2hyj1E05cKiJDgakhfkaeHDH0O11d11BPP7Gz%2BADp%2BhgBjW7Youe5oyqLas1HQLOvYWT34xe6loMqSL%2BULsmfUQ5T4snvz1m%2BhaHfk%2BqL7%2Ff2f1nIoIITlj&X-Amz-Signature=53135ae2ede415f6c671a2a9a719774a7a470d30fb03f667c3446236417a045e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEEVLKVK%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQMyN2SUVQtoCu76MlY6%2FouKpg2xLVGe0uKXZ0MXMVlAiEApNDvbk7E6iymbh5h%2FMR1Bn0UROu8c%2BF2eay2EImV4iMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAyrpGntOo%2Bs6yr%2FFyrcA3P0OwKw%2F1oYumBIdeqG%2Bcs9AkUMNd9i%2B7DWYnVGHSVtygxg310sRS2yC3L2y%2FEbbB24hzXtXVD5hVBko%2BX2R99Ltpz5ByKClVYLnaHMFQyMAkbWxechj5rUzLRUjdtiAg4lL10%2BI4V4WpPYT4E2986IME2GlPVmRv691M%2BCLrDuT6WuUeU9id%2BrcDrIJqYVqGgGTia0uKyFBtatYr%2FJpOQPzYAGRfZUtXA8b1arClswhoXiaSYcEZ7t6cBKGBMLOJ6UgAY5b%2FFV5C0xJX59o7hscwpcvMnMCcin3KNgZ%2Bn%2FI32uunQFxT6%2Bs778St%2B0MNVf9avcwGDbehEfK20A3UVUAZeN3eyCFIgBFFTUmx9EvyOHKbI2%2BC8f4ohb407vfHgu%2FRr2Lo%2BqOGhZct%2FhwSbwTfcWRQXyiOeRDSfPRleoo5dO41wzVdoIo4rUt54w0JEW4lJAfAS9QDsL8iUMvYoDrM6PwGMXCA8bwsUEa06X8DBsX1lKcbgnr49J77IIitTlpKqRcVTcgIsj95cv80E6CHYf0QAF42PTmmN%2BiBzfpVlJHIbW43eePdbA6N4%2Fid8sHZOF0sa%2B9PAyoVBKzUOgGwUt4oDjF6PWGb6wv7HxJ87xOqKRQb%2BDZ%2FwxMP%2Fvh78GOqUBpns82RPxc7N4HxfaO9s0fjHRvyXCZQFZUcPJz8LpPUTIg%2Fkq8TcfGzdaVX6%2Byh0f08X6rY6azUC8XqaYzeRWTXqSfAutJC4L5LjqP2hyj1E05cKiJDgakhfkaeHDH0O11d11BPP7Gz%2BADp%2BhgBjW7Youe5oyqLas1HQLOvYWT34xe6loMqSL%2BULsmfUQ5T4snvz1m%2BhaHfk%2BqL7%2Ff2f1nIoIITlj&X-Amz-Signature=1928adaaf1460c53326ec32acba8ea5af86a6d15aee7fe405d194532d1aa1c15&X-Amz-SignedHeaders=host&x-id=GetObject)
