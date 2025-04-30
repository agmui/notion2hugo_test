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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTG4GQ7B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCzzXuCrJfL0u0i62GUNzChKc4XRYMrDQM0HfbcQaQcvQIgKhqbeNid3APwVQ7IHvBNsUY3h%2FRPPQgINvceaxcAdqMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHhwWTk01yb4O8loircA6n6uiN7w1m7xJwhjlLXVCozlr%2F%2BV2Ru1fEK1M4Pq8hie7OhzBQRFZFj10ewlO8y0L2XAlGHbTNnMY4FGr3uoC%2B5jEY9zSqyxcRCyAaC09ct49zL%2BWOq4hGMM1wnFzkhZ37arm%2BnIErUbXrklt2OeAqpXkA0G4zUkvazwBn1OzMXVIczaxPWD8hibczORUbb5a5bqDA%2BI8K7iNLcom%2BVtAXOT49itGgx6LLleVlTlb2et%2BgfwRNJBYQdA1aDU4LrwoVm1YSSRJ49FJT1Spozb2ZiMHlstQSFEfoa8DXvheLB3i2R%2ByZBRvvPSnmlCeiR%2FIcQuhQp3XDVs6x89%2FVgMgy1gtYfORi85tmM1guJf0vZEZaEk7LQgYf2HTNMOZ1ZiVhdNB9o7ofoaIt9zMzIiUTgrsoZRgN2viqVULzguEx6ge2Vgevg96dryG75rSsX%2FRm6G%2FEeSiH3iqmzmGKu0%2FAa8%2FVTU4Ldi7yjoGNQAGSULSuIqNJPBcIEqxCn9l4vcw2H1YFJ4Z0vYa6v7mNZAIrEmafaMptYDtC1mJTflGabtrZPlAlz%2BrI3ML4ZkmFA5P7%2BAmHB4vqVPjveHRJyNu5ebPrKz3sazDRLkbJB6PqNTFc%2BYmLsp4aR37vVMIWBycAGOqUBTawabnoXm%2FJp3gSSSzYqWteG8tPpyeHv%2BygoiwPrwP5s%2FOUzOinejL%2Btf5x28X279q1E0KgjOP1iH38YXUh6dLSxmBhhPREP8rnx1lsFVbvHE2MA%2FGa4FN9weSHEYsdxy%2FTSR0UuBc%2B9qH%2Fe6MM7OejkxV95A0iYoEuvuBpSUEcmXGwskzgdy9AbaOt57CV9MPSpkGTDUipCBrlRZUYxm7i6Pm3d&X-Amz-Signature=5565a8668df2543c731a7037c7673743a86f8123f8a83832e7c520194ea057bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTG4GQ7B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCzzXuCrJfL0u0i62GUNzChKc4XRYMrDQM0HfbcQaQcvQIgKhqbeNid3APwVQ7IHvBNsUY3h%2FRPPQgINvceaxcAdqMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHhwWTk01yb4O8loircA6n6uiN7w1m7xJwhjlLXVCozlr%2F%2BV2Ru1fEK1M4Pq8hie7OhzBQRFZFj10ewlO8y0L2XAlGHbTNnMY4FGr3uoC%2B5jEY9zSqyxcRCyAaC09ct49zL%2BWOq4hGMM1wnFzkhZ37arm%2BnIErUbXrklt2OeAqpXkA0G4zUkvazwBn1OzMXVIczaxPWD8hibczORUbb5a5bqDA%2BI8K7iNLcom%2BVtAXOT49itGgx6LLleVlTlb2et%2BgfwRNJBYQdA1aDU4LrwoVm1YSSRJ49FJT1Spozb2ZiMHlstQSFEfoa8DXvheLB3i2R%2ByZBRvvPSnmlCeiR%2FIcQuhQp3XDVs6x89%2FVgMgy1gtYfORi85tmM1guJf0vZEZaEk7LQgYf2HTNMOZ1ZiVhdNB9o7ofoaIt9zMzIiUTgrsoZRgN2viqVULzguEx6ge2Vgevg96dryG75rSsX%2FRm6G%2FEeSiH3iqmzmGKu0%2FAa8%2FVTU4Ldi7yjoGNQAGSULSuIqNJPBcIEqxCn9l4vcw2H1YFJ4Z0vYa6v7mNZAIrEmafaMptYDtC1mJTflGabtrZPlAlz%2BrI3ML4ZkmFA5P7%2BAmHB4vqVPjveHRJyNu5ebPrKz3sazDRLkbJB6PqNTFc%2BYmLsp4aR37vVMIWBycAGOqUBTawabnoXm%2FJp3gSSSzYqWteG8tPpyeHv%2BygoiwPrwP5s%2FOUzOinejL%2Btf5x28X279q1E0KgjOP1iH38YXUh6dLSxmBhhPREP8rnx1lsFVbvHE2MA%2FGa4FN9weSHEYsdxy%2FTSR0UuBc%2B9qH%2Fe6MM7OejkxV95A0iYoEuvuBpSUEcmXGwskzgdy9AbaOt57CV9MPSpkGTDUipCBrlRZUYxm7i6Pm3d&X-Amz-Signature=07ef8389779f8d47ef44cb5d215d19da86cc36b9a3007c4ae12dd78a46dcfe88&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTG4GQ7B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCzzXuCrJfL0u0i62GUNzChKc4XRYMrDQM0HfbcQaQcvQIgKhqbeNid3APwVQ7IHvBNsUY3h%2FRPPQgINvceaxcAdqMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHhwWTk01yb4O8loircA6n6uiN7w1m7xJwhjlLXVCozlr%2F%2BV2Ru1fEK1M4Pq8hie7OhzBQRFZFj10ewlO8y0L2XAlGHbTNnMY4FGr3uoC%2B5jEY9zSqyxcRCyAaC09ct49zL%2BWOq4hGMM1wnFzkhZ37arm%2BnIErUbXrklt2OeAqpXkA0G4zUkvazwBn1OzMXVIczaxPWD8hibczORUbb5a5bqDA%2BI8K7iNLcom%2BVtAXOT49itGgx6LLleVlTlb2et%2BgfwRNJBYQdA1aDU4LrwoVm1YSSRJ49FJT1Spozb2ZiMHlstQSFEfoa8DXvheLB3i2R%2ByZBRvvPSnmlCeiR%2FIcQuhQp3XDVs6x89%2FVgMgy1gtYfORi85tmM1guJf0vZEZaEk7LQgYf2HTNMOZ1ZiVhdNB9o7ofoaIt9zMzIiUTgrsoZRgN2viqVULzguEx6ge2Vgevg96dryG75rSsX%2FRm6G%2FEeSiH3iqmzmGKu0%2FAa8%2FVTU4Ldi7yjoGNQAGSULSuIqNJPBcIEqxCn9l4vcw2H1YFJ4Z0vYa6v7mNZAIrEmafaMptYDtC1mJTflGabtrZPlAlz%2BrI3ML4ZkmFA5P7%2BAmHB4vqVPjveHRJyNu5ebPrKz3sazDRLkbJB6PqNTFc%2BYmLsp4aR37vVMIWBycAGOqUBTawabnoXm%2FJp3gSSSzYqWteG8tPpyeHv%2BygoiwPrwP5s%2FOUzOinejL%2Btf5x28X279q1E0KgjOP1iH38YXUh6dLSxmBhhPREP8rnx1lsFVbvHE2MA%2FGa4FN9weSHEYsdxy%2FTSR0UuBc%2B9qH%2Fe6MM7OejkxV95A0iYoEuvuBpSUEcmXGwskzgdy9AbaOt57CV9MPSpkGTDUipCBrlRZUYxm7i6Pm3d&X-Amz-Signature=ba7c397fc23968a0ad659e2c8e19af9bb4043425fccbca7a1a32ef8d163a4448&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTG4GQ7B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCzzXuCrJfL0u0i62GUNzChKc4XRYMrDQM0HfbcQaQcvQIgKhqbeNid3APwVQ7IHvBNsUY3h%2FRPPQgINvceaxcAdqMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHhwWTk01yb4O8loircA6n6uiN7w1m7xJwhjlLXVCozlr%2F%2BV2Ru1fEK1M4Pq8hie7OhzBQRFZFj10ewlO8y0L2XAlGHbTNnMY4FGr3uoC%2B5jEY9zSqyxcRCyAaC09ct49zL%2BWOq4hGMM1wnFzkhZ37arm%2BnIErUbXrklt2OeAqpXkA0G4zUkvazwBn1OzMXVIczaxPWD8hibczORUbb5a5bqDA%2BI8K7iNLcom%2BVtAXOT49itGgx6LLleVlTlb2et%2BgfwRNJBYQdA1aDU4LrwoVm1YSSRJ49FJT1Spozb2ZiMHlstQSFEfoa8DXvheLB3i2R%2ByZBRvvPSnmlCeiR%2FIcQuhQp3XDVs6x89%2FVgMgy1gtYfORi85tmM1guJf0vZEZaEk7LQgYf2HTNMOZ1ZiVhdNB9o7ofoaIt9zMzIiUTgrsoZRgN2viqVULzguEx6ge2Vgevg96dryG75rSsX%2FRm6G%2FEeSiH3iqmzmGKu0%2FAa8%2FVTU4Ldi7yjoGNQAGSULSuIqNJPBcIEqxCn9l4vcw2H1YFJ4Z0vYa6v7mNZAIrEmafaMptYDtC1mJTflGabtrZPlAlz%2BrI3ML4ZkmFA5P7%2BAmHB4vqVPjveHRJyNu5ebPrKz3sazDRLkbJB6PqNTFc%2BYmLsp4aR37vVMIWBycAGOqUBTawabnoXm%2FJp3gSSSzYqWteG8tPpyeHv%2BygoiwPrwP5s%2FOUzOinejL%2Btf5x28X279q1E0KgjOP1iH38YXUh6dLSxmBhhPREP8rnx1lsFVbvHE2MA%2FGa4FN9weSHEYsdxy%2FTSR0UuBc%2B9qH%2Fe6MM7OejkxV95A0iYoEuvuBpSUEcmXGwskzgdy9AbaOt57CV9MPSpkGTDUipCBrlRZUYxm7i6Pm3d&X-Amz-Signature=b2db4c91a10ef0d202ed4d7ac584ab4db4889fb2686c3c168a242edee2ed8de1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTG4GQ7B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCzzXuCrJfL0u0i62GUNzChKc4XRYMrDQM0HfbcQaQcvQIgKhqbeNid3APwVQ7IHvBNsUY3h%2FRPPQgINvceaxcAdqMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHhwWTk01yb4O8loircA6n6uiN7w1m7xJwhjlLXVCozlr%2F%2BV2Ru1fEK1M4Pq8hie7OhzBQRFZFj10ewlO8y0L2XAlGHbTNnMY4FGr3uoC%2B5jEY9zSqyxcRCyAaC09ct49zL%2BWOq4hGMM1wnFzkhZ37arm%2BnIErUbXrklt2OeAqpXkA0G4zUkvazwBn1OzMXVIczaxPWD8hibczORUbb5a5bqDA%2BI8K7iNLcom%2BVtAXOT49itGgx6LLleVlTlb2et%2BgfwRNJBYQdA1aDU4LrwoVm1YSSRJ49FJT1Spozb2ZiMHlstQSFEfoa8DXvheLB3i2R%2ByZBRvvPSnmlCeiR%2FIcQuhQp3XDVs6x89%2FVgMgy1gtYfORi85tmM1guJf0vZEZaEk7LQgYf2HTNMOZ1ZiVhdNB9o7ofoaIt9zMzIiUTgrsoZRgN2viqVULzguEx6ge2Vgevg96dryG75rSsX%2FRm6G%2FEeSiH3iqmzmGKu0%2FAa8%2FVTU4Ldi7yjoGNQAGSULSuIqNJPBcIEqxCn9l4vcw2H1YFJ4Z0vYa6v7mNZAIrEmafaMptYDtC1mJTflGabtrZPlAlz%2BrI3ML4ZkmFA5P7%2BAmHB4vqVPjveHRJyNu5ebPrKz3sazDRLkbJB6PqNTFc%2BYmLsp4aR37vVMIWBycAGOqUBTawabnoXm%2FJp3gSSSzYqWteG8tPpyeHv%2BygoiwPrwP5s%2FOUzOinejL%2Btf5x28X279q1E0KgjOP1iH38YXUh6dLSxmBhhPREP8rnx1lsFVbvHE2MA%2FGa4FN9weSHEYsdxy%2FTSR0UuBc%2B9qH%2Fe6MM7OejkxV95A0iYoEuvuBpSUEcmXGwskzgdy9AbaOt57CV9MPSpkGTDUipCBrlRZUYxm7i6Pm3d&X-Amz-Signature=74d11925a4389e06fb6a46ad5c83bff55a73a91b17f8bdd9dba2b2cebecd2ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTG4GQ7B%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCzzXuCrJfL0u0i62GUNzChKc4XRYMrDQM0HfbcQaQcvQIgKhqbeNid3APwVQ7IHvBNsUY3h%2FRPPQgINvceaxcAdqMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHhwWTk01yb4O8loircA6n6uiN7w1m7xJwhjlLXVCozlr%2F%2BV2Ru1fEK1M4Pq8hie7OhzBQRFZFj10ewlO8y0L2XAlGHbTNnMY4FGr3uoC%2B5jEY9zSqyxcRCyAaC09ct49zL%2BWOq4hGMM1wnFzkhZ37arm%2BnIErUbXrklt2OeAqpXkA0G4zUkvazwBn1OzMXVIczaxPWD8hibczORUbb5a5bqDA%2BI8K7iNLcom%2BVtAXOT49itGgx6LLleVlTlb2et%2BgfwRNJBYQdA1aDU4LrwoVm1YSSRJ49FJT1Spozb2ZiMHlstQSFEfoa8DXvheLB3i2R%2ByZBRvvPSnmlCeiR%2FIcQuhQp3XDVs6x89%2FVgMgy1gtYfORi85tmM1guJf0vZEZaEk7LQgYf2HTNMOZ1ZiVhdNB9o7ofoaIt9zMzIiUTgrsoZRgN2viqVULzguEx6ge2Vgevg96dryG75rSsX%2FRm6G%2FEeSiH3iqmzmGKu0%2FAa8%2FVTU4Ldi7yjoGNQAGSULSuIqNJPBcIEqxCn9l4vcw2H1YFJ4Z0vYa6v7mNZAIrEmafaMptYDtC1mJTflGabtrZPlAlz%2BrI3ML4ZkmFA5P7%2BAmHB4vqVPjveHRJyNu5ebPrKz3sazDRLkbJB6PqNTFc%2BYmLsp4aR37vVMIWBycAGOqUBTawabnoXm%2FJp3gSSSzYqWteG8tPpyeHv%2BygoiwPrwP5s%2FOUzOinejL%2Btf5x28X279q1E0KgjOP1iH38YXUh6dLSxmBhhPREP8rnx1lsFVbvHE2MA%2FGa4FN9weSHEYsdxy%2FTSR0UuBc%2B9qH%2Fe6MM7OejkxV95A0iYoEuvuBpSUEcmXGwskzgdy9AbaOt57CV9MPSpkGTDUipCBrlRZUYxm7i6Pm3d&X-Amz-Signature=81551b0726abb1364ce8fdf6f655884e5f2975ceae979ee85ef4f0dbf32ebad1&X-Amz-SignedHeaders=host&x-id=GetObject)
