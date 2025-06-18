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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWYPRPD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzr0J2H2QXm2chZwxuWbOaCkuyjJyN3TU2WwoKNsLt%2BQIhAKF6U8YjCa6wR8qFmpRmcYmnhtQrn6l%2FJBozliY854JqKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4yUIYoiTamcp5f04q3AM6WMY1ElW9UtngrfmctExGO%2FYCL%2B3LVSyhOZsdXWBIPLqIXpq%2B274riNZ%2BwasOs1xG9MTXf94hP5C1JQhn4ePJT2l5snS%2BYT8PqYveNdiR3VgvSP9R74QDR%2Bg%2BUDbGufHw6v6doDWGRil1gqFt9gjSrBCH2fQdE%2FCHfBZJuF%2FpmFFeXZDWlwkir84li0Oh2kczrtnPKBzaZDxmpZAbGRldpSvE6hDdTczpU1qkrhf5QKb78iw5ilsV%2B38fmrH3dsargVZ0vvEOnXooA6MSmaM1Qf6gC32YMIgQUZVEqgh%2Blr1JOqVtLLAHI0l7tUiN61cquPOaMJZqJVwwhzyYahpUVWKPvTPeI5JdgTJTUGo%2FrMNT0gchKQjXZ0L%2F28gFOVlGgv3qwTMvSZ1tDcSlxtLME4coCu6ZKjNZkNN8BFGKaeqrz5Y%2BuEjrWaVo9a2eTEqvGpg2hzffnJ0t7TI%2FPL9ydEpcK7vHxfEZJKjoKc3UpWz%2B7NMv%2B3tA%2B2%2B8jP4G1NeB%2FCmTI%2FLpExqjkrSU9vYlwpEBdwxFPr%2BoL7OJHeURpP2Xk6zSm2Y%2BcLtiOvQMaamfO4VEiiAcaJPiM8XZ0SicNqnLOBu7Twm2l9MA3P3aM7xOMkJVV2j6dXKl8zDCjcrCBjqkAZiRB5LZd36XgZF3FEFH%2BTQCDOYofhB8FdY24BXc88GNW0WrCgzAKKHvIE5APaJhh1vbagjcuC%2BGUVo1ZiZQziKzRz4XoTkCYnje6QnORIOfJhCZ9%2FRQ7fTdyZ3l%2BELvolTPcYXCTdvhn6wZcTrX9gDz3Y3urXTxu0xsgrMNuuX64SckdyfSTiDOW66YRpL%2F8nJk0QrsE%2Briq4HYepf3LGRIVOQ0&X-Amz-Signature=583ef4728071b2bbe800bbf9abc52ef8faaace32b34f1bf1f04004586890cb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWYPRPD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzr0J2H2QXm2chZwxuWbOaCkuyjJyN3TU2WwoKNsLt%2BQIhAKF6U8YjCa6wR8qFmpRmcYmnhtQrn6l%2FJBozliY854JqKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4yUIYoiTamcp5f04q3AM6WMY1ElW9UtngrfmctExGO%2FYCL%2B3LVSyhOZsdXWBIPLqIXpq%2B274riNZ%2BwasOs1xG9MTXf94hP5C1JQhn4ePJT2l5snS%2BYT8PqYveNdiR3VgvSP9R74QDR%2Bg%2BUDbGufHw6v6doDWGRil1gqFt9gjSrBCH2fQdE%2FCHfBZJuF%2FpmFFeXZDWlwkir84li0Oh2kczrtnPKBzaZDxmpZAbGRldpSvE6hDdTczpU1qkrhf5QKb78iw5ilsV%2B38fmrH3dsargVZ0vvEOnXooA6MSmaM1Qf6gC32YMIgQUZVEqgh%2Blr1JOqVtLLAHI0l7tUiN61cquPOaMJZqJVwwhzyYahpUVWKPvTPeI5JdgTJTUGo%2FrMNT0gchKQjXZ0L%2F28gFOVlGgv3qwTMvSZ1tDcSlxtLME4coCu6ZKjNZkNN8BFGKaeqrz5Y%2BuEjrWaVo9a2eTEqvGpg2hzffnJ0t7TI%2FPL9ydEpcK7vHxfEZJKjoKc3UpWz%2B7NMv%2B3tA%2B2%2B8jP4G1NeB%2FCmTI%2FLpExqjkrSU9vYlwpEBdwxFPr%2BoL7OJHeURpP2Xk6zSm2Y%2BcLtiOvQMaamfO4VEiiAcaJPiM8XZ0SicNqnLOBu7Twm2l9MA3P3aM7xOMkJVV2j6dXKl8zDCjcrCBjqkAZiRB5LZd36XgZF3FEFH%2BTQCDOYofhB8FdY24BXc88GNW0WrCgzAKKHvIE5APaJhh1vbagjcuC%2BGUVo1ZiZQziKzRz4XoTkCYnje6QnORIOfJhCZ9%2FRQ7fTdyZ3l%2BELvolTPcYXCTdvhn6wZcTrX9gDz3Y3urXTxu0xsgrMNuuX64SckdyfSTiDOW66YRpL%2F8nJk0QrsE%2Briq4HYepf3LGRIVOQ0&X-Amz-Signature=fdc5b233e3f697de311f545f3c923daef652cb2f35cc16203f2ec3f14e2a9b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWYPRPD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzr0J2H2QXm2chZwxuWbOaCkuyjJyN3TU2WwoKNsLt%2BQIhAKF6U8YjCa6wR8qFmpRmcYmnhtQrn6l%2FJBozliY854JqKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4yUIYoiTamcp5f04q3AM6WMY1ElW9UtngrfmctExGO%2FYCL%2B3LVSyhOZsdXWBIPLqIXpq%2B274riNZ%2BwasOs1xG9MTXf94hP5C1JQhn4ePJT2l5snS%2BYT8PqYveNdiR3VgvSP9R74QDR%2Bg%2BUDbGufHw6v6doDWGRil1gqFt9gjSrBCH2fQdE%2FCHfBZJuF%2FpmFFeXZDWlwkir84li0Oh2kczrtnPKBzaZDxmpZAbGRldpSvE6hDdTczpU1qkrhf5QKb78iw5ilsV%2B38fmrH3dsargVZ0vvEOnXooA6MSmaM1Qf6gC32YMIgQUZVEqgh%2Blr1JOqVtLLAHI0l7tUiN61cquPOaMJZqJVwwhzyYahpUVWKPvTPeI5JdgTJTUGo%2FrMNT0gchKQjXZ0L%2F28gFOVlGgv3qwTMvSZ1tDcSlxtLME4coCu6ZKjNZkNN8BFGKaeqrz5Y%2BuEjrWaVo9a2eTEqvGpg2hzffnJ0t7TI%2FPL9ydEpcK7vHxfEZJKjoKc3UpWz%2B7NMv%2B3tA%2B2%2B8jP4G1NeB%2FCmTI%2FLpExqjkrSU9vYlwpEBdwxFPr%2BoL7OJHeURpP2Xk6zSm2Y%2BcLtiOvQMaamfO4VEiiAcaJPiM8XZ0SicNqnLOBu7Twm2l9MA3P3aM7xOMkJVV2j6dXKl8zDCjcrCBjqkAZiRB5LZd36XgZF3FEFH%2BTQCDOYofhB8FdY24BXc88GNW0WrCgzAKKHvIE5APaJhh1vbagjcuC%2BGUVo1ZiZQziKzRz4XoTkCYnje6QnORIOfJhCZ9%2FRQ7fTdyZ3l%2BELvolTPcYXCTdvhn6wZcTrX9gDz3Y3urXTxu0xsgrMNuuX64SckdyfSTiDOW66YRpL%2F8nJk0QrsE%2Briq4HYepf3LGRIVOQ0&X-Amz-Signature=102161d4554d6344e60896b61ea5bf957da1662645be76765a566c7bdb58ff20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWYPRPD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzr0J2H2QXm2chZwxuWbOaCkuyjJyN3TU2WwoKNsLt%2BQIhAKF6U8YjCa6wR8qFmpRmcYmnhtQrn6l%2FJBozliY854JqKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4yUIYoiTamcp5f04q3AM6WMY1ElW9UtngrfmctExGO%2FYCL%2B3LVSyhOZsdXWBIPLqIXpq%2B274riNZ%2BwasOs1xG9MTXf94hP5C1JQhn4ePJT2l5snS%2BYT8PqYveNdiR3VgvSP9R74QDR%2Bg%2BUDbGufHw6v6doDWGRil1gqFt9gjSrBCH2fQdE%2FCHfBZJuF%2FpmFFeXZDWlwkir84li0Oh2kczrtnPKBzaZDxmpZAbGRldpSvE6hDdTczpU1qkrhf5QKb78iw5ilsV%2B38fmrH3dsargVZ0vvEOnXooA6MSmaM1Qf6gC32YMIgQUZVEqgh%2Blr1JOqVtLLAHI0l7tUiN61cquPOaMJZqJVwwhzyYahpUVWKPvTPeI5JdgTJTUGo%2FrMNT0gchKQjXZ0L%2F28gFOVlGgv3qwTMvSZ1tDcSlxtLME4coCu6ZKjNZkNN8BFGKaeqrz5Y%2BuEjrWaVo9a2eTEqvGpg2hzffnJ0t7TI%2FPL9ydEpcK7vHxfEZJKjoKc3UpWz%2B7NMv%2B3tA%2B2%2B8jP4G1NeB%2FCmTI%2FLpExqjkrSU9vYlwpEBdwxFPr%2BoL7OJHeURpP2Xk6zSm2Y%2BcLtiOvQMaamfO4VEiiAcaJPiM8XZ0SicNqnLOBu7Twm2l9MA3P3aM7xOMkJVV2j6dXKl8zDCjcrCBjqkAZiRB5LZd36XgZF3FEFH%2BTQCDOYofhB8FdY24BXc88GNW0WrCgzAKKHvIE5APaJhh1vbagjcuC%2BGUVo1ZiZQziKzRz4XoTkCYnje6QnORIOfJhCZ9%2FRQ7fTdyZ3l%2BELvolTPcYXCTdvhn6wZcTrX9gDz3Y3urXTxu0xsgrMNuuX64SckdyfSTiDOW66YRpL%2F8nJk0QrsE%2Briq4HYepf3LGRIVOQ0&X-Amz-Signature=329634d7a53ca9e2bcacdef163d3e509049bce42d0027c19b542a2448534e01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWYPRPD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzr0J2H2QXm2chZwxuWbOaCkuyjJyN3TU2WwoKNsLt%2BQIhAKF6U8YjCa6wR8qFmpRmcYmnhtQrn6l%2FJBozliY854JqKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4yUIYoiTamcp5f04q3AM6WMY1ElW9UtngrfmctExGO%2FYCL%2B3LVSyhOZsdXWBIPLqIXpq%2B274riNZ%2BwasOs1xG9MTXf94hP5C1JQhn4ePJT2l5snS%2BYT8PqYveNdiR3VgvSP9R74QDR%2Bg%2BUDbGufHw6v6doDWGRil1gqFt9gjSrBCH2fQdE%2FCHfBZJuF%2FpmFFeXZDWlwkir84li0Oh2kczrtnPKBzaZDxmpZAbGRldpSvE6hDdTczpU1qkrhf5QKb78iw5ilsV%2B38fmrH3dsargVZ0vvEOnXooA6MSmaM1Qf6gC32YMIgQUZVEqgh%2Blr1JOqVtLLAHI0l7tUiN61cquPOaMJZqJVwwhzyYahpUVWKPvTPeI5JdgTJTUGo%2FrMNT0gchKQjXZ0L%2F28gFOVlGgv3qwTMvSZ1tDcSlxtLME4coCu6ZKjNZkNN8BFGKaeqrz5Y%2BuEjrWaVo9a2eTEqvGpg2hzffnJ0t7TI%2FPL9ydEpcK7vHxfEZJKjoKc3UpWz%2B7NMv%2B3tA%2B2%2B8jP4G1NeB%2FCmTI%2FLpExqjkrSU9vYlwpEBdwxFPr%2BoL7OJHeURpP2Xk6zSm2Y%2BcLtiOvQMaamfO4VEiiAcaJPiM8XZ0SicNqnLOBu7Twm2l9MA3P3aM7xOMkJVV2j6dXKl8zDCjcrCBjqkAZiRB5LZd36XgZF3FEFH%2BTQCDOYofhB8FdY24BXc88GNW0WrCgzAKKHvIE5APaJhh1vbagjcuC%2BGUVo1ZiZQziKzRz4XoTkCYnje6QnORIOfJhCZ9%2FRQ7fTdyZ3l%2BELvolTPcYXCTdvhn6wZcTrX9gDz3Y3urXTxu0xsgrMNuuX64SckdyfSTiDOW66YRpL%2F8nJk0QrsE%2Briq4HYepf3LGRIVOQ0&X-Amz-Signature=69d80aa56dc492d2dadd4cabeff2598853732e76ae39bdd7099b7cd3a4666b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSWYPRPD%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzr0J2H2QXm2chZwxuWbOaCkuyjJyN3TU2WwoKNsLt%2BQIhAKF6U8YjCa6wR8qFmpRmcYmnhtQrn6l%2FJBozliY854JqKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4yUIYoiTamcp5f04q3AM6WMY1ElW9UtngrfmctExGO%2FYCL%2B3LVSyhOZsdXWBIPLqIXpq%2B274riNZ%2BwasOs1xG9MTXf94hP5C1JQhn4ePJT2l5snS%2BYT8PqYveNdiR3VgvSP9R74QDR%2Bg%2BUDbGufHw6v6doDWGRil1gqFt9gjSrBCH2fQdE%2FCHfBZJuF%2FpmFFeXZDWlwkir84li0Oh2kczrtnPKBzaZDxmpZAbGRldpSvE6hDdTczpU1qkrhf5QKb78iw5ilsV%2B38fmrH3dsargVZ0vvEOnXooA6MSmaM1Qf6gC32YMIgQUZVEqgh%2Blr1JOqVtLLAHI0l7tUiN61cquPOaMJZqJVwwhzyYahpUVWKPvTPeI5JdgTJTUGo%2FrMNT0gchKQjXZ0L%2F28gFOVlGgv3qwTMvSZ1tDcSlxtLME4coCu6ZKjNZkNN8BFGKaeqrz5Y%2BuEjrWaVo9a2eTEqvGpg2hzffnJ0t7TI%2FPL9ydEpcK7vHxfEZJKjoKc3UpWz%2B7NMv%2B3tA%2B2%2B8jP4G1NeB%2FCmTI%2FLpExqjkrSU9vYlwpEBdwxFPr%2BoL7OJHeURpP2Xk6zSm2Y%2BcLtiOvQMaamfO4VEiiAcaJPiM8XZ0SicNqnLOBu7Twm2l9MA3P3aM7xOMkJVV2j6dXKl8zDCjcrCBjqkAZiRB5LZd36XgZF3FEFH%2BTQCDOYofhB8FdY24BXc88GNW0WrCgzAKKHvIE5APaJhh1vbagjcuC%2BGUVo1ZiZQziKzRz4XoTkCYnje6QnORIOfJhCZ9%2FRQ7fTdyZ3l%2BELvolTPcYXCTdvhn6wZcTrX9gDz3Y3urXTxu0xsgrMNuuX64SckdyfSTiDOW66YRpL%2F8nJk0QrsE%2Briq4HYepf3LGRIVOQ0&X-Amz-Signature=a1ae07de84f24f89b81eab05ff6f60fac66cd37f18816416cb6c5b4cdd7748a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
