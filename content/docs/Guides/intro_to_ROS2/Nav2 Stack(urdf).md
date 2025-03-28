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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3GT5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5R10OHaaNLDrjo4FJx75aQmTtK%2BBMdiOHotEfN3X5eAIgabuDnfoQGCktjSWlTkAyD9D4LkF3kF%2FM4792dWjOX3cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNvxhFjUgGLZKyHLYyrcAwROMrjmpG13asohImlSQe2AAPg58GXM1TMNXBtOxdcTsDGcdEbOYDpej%2Fh7FVNOUr1LwKPrked7xZE4JB3wlSRAkM13Bv7jyHz6HLPF4EyxObKcRn%2BUUdI4QAAGehaEq46ZnXj5vHyMzZbc%2BqbnYxpLVApmAwNBdKaXYMhRGdeUQwWxqCxv7%2BX9KlbjosiT4M%2FXv0%2BKyJuCdMQIuKdcBR8KiW%2By2dqsyt7weWaQKzOi2Ji6diSheAdKKaMbB8ZwSQPCTCscyAw18KjC8lLT1jw8Le6VmemAOzYNl7HYNzLhwpSAhwUrq3ZZR4usDBHpAy4nL9KEJg72AtJ0j86tMUw1DUSjlSbtfoZfgJSvejKjSG7AJKCWMnyHhPZeWc%2FJ2RhVAy7TBe3EPj%2FWk4vUXjFBOBQqN6Y4sbGWTcExnwz09WfFRYbXBLeCj%2FrMOVAomM9GGwlx5%2FSl%2BuzBPUZWOHi%2Fk4zssUwuJeBr55e7%2F%2BqGtFSbTOmH8OxnVsJ35S7SutcsQQQGC3WNLL72ARh684CR%2FLFVwVesMThLOE6g3CDkYpPO2OiVTh3W02hgyyhPVieOlyBDdtvAVsQBnCKZzsrMxGZ%2BdvKMgZmoj5KnvDqGvYjMIo1Twsl5KpzFMJGqnL8GOqUB7Sl5wl0XeXX%2BQsGqpRwTAv5SX7wGObjVikqfcM7W3Ly1yY2MA6nXS52a13S3tseMsv3cAUZ8gB3A9qd5SuFrDvtCgjewUjTBUb37afg1izUQy6f7NlS8%2FqK70hn5VL6tlZE1Wp7Y8eh4WHv8VxUKW9ICx6QsouvbRkhEAuUMk1LPCulzESuwWoZLBrBAdvWta3dvEcbHjLU0sa%2FR7OhuZlOSjSH8&X-Amz-Signature=1e518ad075e06aaee304e4e2a3ea4fbd24d8f94e4d43c72d10d67c070a68a082&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3GT5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5R10OHaaNLDrjo4FJx75aQmTtK%2BBMdiOHotEfN3X5eAIgabuDnfoQGCktjSWlTkAyD9D4LkF3kF%2FM4792dWjOX3cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNvxhFjUgGLZKyHLYyrcAwROMrjmpG13asohImlSQe2AAPg58GXM1TMNXBtOxdcTsDGcdEbOYDpej%2Fh7FVNOUr1LwKPrked7xZE4JB3wlSRAkM13Bv7jyHz6HLPF4EyxObKcRn%2BUUdI4QAAGehaEq46ZnXj5vHyMzZbc%2BqbnYxpLVApmAwNBdKaXYMhRGdeUQwWxqCxv7%2BX9KlbjosiT4M%2FXv0%2BKyJuCdMQIuKdcBR8KiW%2By2dqsyt7weWaQKzOi2Ji6diSheAdKKaMbB8ZwSQPCTCscyAw18KjC8lLT1jw8Le6VmemAOzYNl7HYNzLhwpSAhwUrq3ZZR4usDBHpAy4nL9KEJg72AtJ0j86tMUw1DUSjlSbtfoZfgJSvejKjSG7AJKCWMnyHhPZeWc%2FJ2RhVAy7TBe3EPj%2FWk4vUXjFBOBQqN6Y4sbGWTcExnwz09WfFRYbXBLeCj%2FrMOVAomM9GGwlx5%2FSl%2BuzBPUZWOHi%2Fk4zssUwuJeBr55e7%2F%2BqGtFSbTOmH8OxnVsJ35S7SutcsQQQGC3WNLL72ARh684CR%2FLFVwVesMThLOE6g3CDkYpPO2OiVTh3W02hgyyhPVieOlyBDdtvAVsQBnCKZzsrMxGZ%2BdvKMgZmoj5KnvDqGvYjMIo1Twsl5KpzFMJGqnL8GOqUB7Sl5wl0XeXX%2BQsGqpRwTAv5SX7wGObjVikqfcM7W3Ly1yY2MA6nXS52a13S3tseMsv3cAUZ8gB3A9qd5SuFrDvtCgjewUjTBUb37afg1izUQy6f7NlS8%2FqK70hn5VL6tlZE1Wp7Y8eh4WHv8VxUKW9ICx6QsouvbRkhEAuUMk1LPCulzESuwWoZLBrBAdvWta3dvEcbHjLU0sa%2FR7OhuZlOSjSH8&X-Amz-Signature=d938f70454a317b11db037dc8a3ba3d0c0e97af0a49391d5b1b23b2f683f3e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3GT5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5R10OHaaNLDrjo4FJx75aQmTtK%2BBMdiOHotEfN3X5eAIgabuDnfoQGCktjSWlTkAyD9D4LkF3kF%2FM4792dWjOX3cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNvxhFjUgGLZKyHLYyrcAwROMrjmpG13asohImlSQe2AAPg58GXM1TMNXBtOxdcTsDGcdEbOYDpej%2Fh7FVNOUr1LwKPrked7xZE4JB3wlSRAkM13Bv7jyHz6HLPF4EyxObKcRn%2BUUdI4QAAGehaEq46ZnXj5vHyMzZbc%2BqbnYxpLVApmAwNBdKaXYMhRGdeUQwWxqCxv7%2BX9KlbjosiT4M%2FXv0%2BKyJuCdMQIuKdcBR8KiW%2By2dqsyt7weWaQKzOi2Ji6diSheAdKKaMbB8ZwSQPCTCscyAw18KjC8lLT1jw8Le6VmemAOzYNl7HYNzLhwpSAhwUrq3ZZR4usDBHpAy4nL9KEJg72AtJ0j86tMUw1DUSjlSbtfoZfgJSvejKjSG7AJKCWMnyHhPZeWc%2FJ2RhVAy7TBe3EPj%2FWk4vUXjFBOBQqN6Y4sbGWTcExnwz09WfFRYbXBLeCj%2FrMOVAomM9GGwlx5%2FSl%2BuzBPUZWOHi%2Fk4zssUwuJeBr55e7%2F%2BqGtFSbTOmH8OxnVsJ35S7SutcsQQQGC3WNLL72ARh684CR%2FLFVwVesMThLOE6g3CDkYpPO2OiVTh3W02hgyyhPVieOlyBDdtvAVsQBnCKZzsrMxGZ%2BdvKMgZmoj5KnvDqGvYjMIo1Twsl5KpzFMJGqnL8GOqUB7Sl5wl0XeXX%2BQsGqpRwTAv5SX7wGObjVikqfcM7W3Ly1yY2MA6nXS52a13S3tseMsv3cAUZ8gB3A9qd5SuFrDvtCgjewUjTBUb37afg1izUQy6f7NlS8%2FqK70hn5VL6tlZE1Wp7Y8eh4WHv8VxUKW9ICx6QsouvbRkhEAuUMk1LPCulzESuwWoZLBrBAdvWta3dvEcbHjLU0sa%2FR7OhuZlOSjSH8&X-Amz-Signature=5e9cbe08e0f60de923df3cdf3f33757274688cd5c5f8d3c4b15d37fc8f91baa7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3GT5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5R10OHaaNLDrjo4FJx75aQmTtK%2BBMdiOHotEfN3X5eAIgabuDnfoQGCktjSWlTkAyD9D4LkF3kF%2FM4792dWjOX3cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNvxhFjUgGLZKyHLYyrcAwROMrjmpG13asohImlSQe2AAPg58GXM1TMNXBtOxdcTsDGcdEbOYDpej%2Fh7FVNOUr1LwKPrked7xZE4JB3wlSRAkM13Bv7jyHz6HLPF4EyxObKcRn%2BUUdI4QAAGehaEq46ZnXj5vHyMzZbc%2BqbnYxpLVApmAwNBdKaXYMhRGdeUQwWxqCxv7%2BX9KlbjosiT4M%2FXv0%2BKyJuCdMQIuKdcBR8KiW%2By2dqsyt7weWaQKzOi2Ji6diSheAdKKaMbB8ZwSQPCTCscyAw18KjC8lLT1jw8Le6VmemAOzYNl7HYNzLhwpSAhwUrq3ZZR4usDBHpAy4nL9KEJg72AtJ0j86tMUw1DUSjlSbtfoZfgJSvejKjSG7AJKCWMnyHhPZeWc%2FJ2RhVAy7TBe3EPj%2FWk4vUXjFBOBQqN6Y4sbGWTcExnwz09WfFRYbXBLeCj%2FrMOVAomM9GGwlx5%2FSl%2BuzBPUZWOHi%2Fk4zssUwuJeBr55e7%2F%2BqGtFSbTOmH8OxnVsJ35S7SutcsQQQGC3WNLL72ARh684CR%2FLFVwVesMThLOE6g3CDkYpPO2OiVTh3W02hgyyhPVieOlyBDdtvAVsQBnCKZzsrMxGZ%2BdvKMgZmoj5KnvDqGvYjMIo1Twsl5KpzFMJGqnL8GOqUB7Sl5wl0XeXX%2BQsGqpRwTAv5SX7wGObjVikqfcM7W3Ly1yY2MA6nXS52a13S3tseMsv3cAUZ8gB3A9qd5SuFrDvtCgjewUjTBUb37afg1izUQy6f7NlS8%2FqK70hn5VL6tlZE1Wp7Y8eh4WHv8VxUKW9ICx6QsouvbRkhEAuUMk1LPCulzESuwWoZLBrBAdvWta3dvEcbHjLU0sa%2FR7OhuZlOSjSH8&X-Amz-Signature=723a6fe2d5a5f8b9b2328c8354018ba08d9a77eaea8b6ae47ea944892c1bb75d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3GT5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5R10OHaaNLDrjo4FJx75aQmTtK%2BBMdiOHotEfN3X5eAIgabuDnfoQGCktjSWlTkAyD9D4LkF3kF%2FM4792dWjOX3cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNvxhFjUgGLZKyHLYyrcAwROMrjmpG13asohImlSQe2AAPg58GXM1TMNXBtOxdcTsDGcdEbOYDpej%2Fh7FVNOUr1LwKPrked7xZE4JB3wlSRAkM13Bv7jyHz6HLPF4EyxObKcRn%2BUUdI4QAAGehaEq46ZnXj5vHyMzZbc%2BqbnYxpLVApmAwNBdKaXYMhRGdeUQwWxqCxv7%2BX9KlbjosiT4M%2FXv0%2BKyJuCdMQIuKdcBR8KiW%2By2dqsyt7weWaQKzOi2Ji6diSheAdKKaMbB8ZwSQPCTCscyAw18KjC8lLT1jw8Le6VmemAOzYNl7HYNzLhwpSAhwUrq3ZZR4usDBHpAy4nL9KEJg72AtJ0j86tMUw1DUSjlSbtfoZfgJSvejKjSG7AJKCWMnyHhPZeWc%2FJ2RhVAy7TBe3EPj%2FWk4vUXjFBOBQqN6Y4sbGWTcExnwz09WfFRYbXBLeCj%2FrMOVAomM9GGwlx5%2FSl%2BuzBPUZWOHi%2Fk4zssUwuJeBr55e7%2F%2BqGtFSbTOmH8OxnVsJ35S7SutcsQQQGC3WNLL72ARh684CR%2FLFVwVesMThLOE6g3CDkYpPO2OiVTh3W02hgyyhPVieOlyBDdtvAVsQBnCKZzsrMxGZ%2BdvKMgZmoj5KnvDqGvYjMIo1Twsl5KpzFMJGqnL8GOqUB7Sl5wl0XeXX%2BQsGqpRwTAv5SX7wGObjVikqfcM7W3Ly1yY2MA6nXS52a13S3tseMsv3cAUZ8gB3A9qd5SuFrDvtCgjewUjTBUb37afg1izUQy6f7NlS8%2FqK70hn5VL6tlZE1Wp7Y8eh4WHv8VxUKW9ICx6QsouvbRkhEAuUMk1LPCulzESuwWoZLBrBAdvWta3dvEcbHjLU0sa%2FR7OhuZlOSjSH8&X-Amz-Signature=d0157abc926a5edc543cd2317e607ef35d7fb4a5d49197670d6d769d798870aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LA3GT5U%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5R10OHaaNLDrjo4FJx75aQmTtK%2BBMdiOHotEfN3X5eAIgabuDnfoQGCktjSWlTkAyD9D4LkF3kF%2FM4792dWjOX3cq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDNvxhFjUgGLZKyHLYyrcAwROMrjmpG13asohImlSQe2AAPg58GXM1TMNXBtOxdcTsDGcdEbOYDpej%2Fh7FVNOUr1LwKPrked7xZE4JB3wlSRAkM13Bv7jyHz6HLPF4EyxObKcRn%2BUUdI4QAAGehaEq46ZnXj5vHyMzZbc%2BqbnYxpLVApmAwNBdKaXYMhRGdeUQwWxqCxv7%2BX9KlbjosiT4M%2FXv0%2BKyJuCdMQIuKdcBR8KiW%2By2dqsyt7weWaQKzOi2Ji6diSheAdKKaMbB8ZwSQPCTCscyAw18KjC8lLT1jw8Le6VmemAOzYNl7HYNzLhwpSAhwUrq3ZZR4usDBHpAy4nL9KEJg72AtJ0j86tMUw1DUSjlSbtfoZfgJSvejKjSG7AJKCWMnyHhPZeWc%2FJ2RhVAy7TBe3EPj%2FWk4vUXjFBOBQqN6Y4sbGWTcExnwz09WfFRYbXBLeCj%2FrMOVAomM9GGwlx5%2FSl%2BuzBPUZWOHi%2Fk4zssUwuJeBr55e7%2F%2BqGtFSbTOmH8OxnVsJ35S7SutcsQQQGC3WNLL72ARh684CR%2FLFVwVesMThLOE6g3CDkYpPO2OiVTh3W02hgyyhPVieOlyBDdtvAVsQBnCKZzsrMxGZ%2BdvKMgZmoj5KnvDqGvYjMIo1Twsl5KpzFMJGqnL8GOqUB7Sl5wl0XeXX%2BQsGqpRwTAv5SX7wGObjVikqfcM7W3Ly1yY2MA6nXS52a13S3tseMsv3cAUZ8gB3A9qd5SuFrDvtCgjewUjTBUb37afg1izUQy6f7NlS8%2FqK70hn5VL6tlZE1Wp7Y8eh4WHv8VxUKW9ICx6QsouvbRkhEAuUMk1LPCulzESuwWoZLBrBAdvWta3dvEcbHjLU0sa%2FR7OhuZlOSjSH8&X-Amz-Signature=72c607a2c8c2d118f6268b2a4c9906744f9f6b58c212a16ae64e68d57a17da4a&X-Amz-SignedHeaders=host&x-id=GetObject)
