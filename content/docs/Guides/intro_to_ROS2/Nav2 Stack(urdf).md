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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BY35UZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP8DJSYaTdduS4bmPjzB66XCq5zWo%2FJFmnNb20Uk3TjAiEAj638%2FkVzoumSQdw5tp71D5LcU4B32HwLcQ6wwVLnFY8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUDmO0yT4FOimQ3yyrcAz4eoEDjwlW%2BjMdAbpEF7RzkQ56UjHW8Mgj33BNiWAZhYYWxHsRQdkTOQbXM9C5PqoyBAs9H9YYX97zmu5bO50scGO3qjoM7DXkkUf1SGPA%2B1xMEVQWoy5dZ5KEIuPOhJ94tWFphBkA1oe5kZ%2FAGNbSI6LYQM%2BGC9AWov9SoRndA%2BHWh5afSzEs0qqXN8qoyjq3z%2FS1A3t0oLlPeLwc1OFqGr%2BHAkUsOTYjOz12pLZnwJ7gsIM6mCd5vzLcoxZWaEwN0jiCL5%2BZw3rr3ygOOzO5olaEptwYZanFaHlU7khYunrr%2BgTdrDl4KSkgBu5xzZBF3deHZRPT9myesDJAPN3BYvAEXijsdZ0OBfpR%2B%2FYtVzh1hJ5eDNshZmNJT1iBiWArkbY%2BcDKv2Zj4e9JGRK8LbHzEhAnirNxsc6LU00u1Ri9rzle9MFycopyCDmLYsY%2BAUrob4YCgkg0bt048GJCy5F9kqF0iNL7C638aMkE3Pe1Uh1ZZ5WpGz5AcISdOEZRAtMt9ulaHJ9S5Ulqef%2Bxu5U9C9nRVQrfirpXyHQAZvRQzsMjOq4vl7mhfYj32S%2FpivWx0W2myNgrOJYVk%2Fkl%2BCgrwePC%2FPhleRHgKYJkXwtV8XhDTIeI5T7DDxMP%2BY8cMGOqUBUCJ7lgsSrOFbra3FtWw2jmBP1mBqfWM3bF5vFjJeBbHlQ%2BH96Z3L2MGywLzDEo0bNzHhQ%2F4GKSpP1LLdzV3nH%2Bakpl8swB%2BpAonRxsReYGNeZuGG1lHFctuWRIp%2FRcSKaqRKLkfIZ2QYeRyV9FOMQgpOc2zhpyhqzUw1ikiP%2BKMXJU4o5oNj6hGIRs%2F1d%2BQ067pDZdaOyU7aW0BLhbjZAy4K4Uez&X-Amz-Signature=8f1c9054f4fabb11363517b503816422b0c999061c1172eb520c8c834ad9279a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BY35UZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP8DJSYaTdduS4bmPjzB66XCq5zWo%2FJFmnNb20Uk3TjAiEAj638%2FkVzoumSQdw5tp71D5LcU4B32HwLcQ6wwVLnFY8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUDmO0yT4FOimQ3yyrcAz4eoEDjwlW%2BjMdAbpEF7RzkQ56UjHW8Mgj33BNiWAZhYYWxHsRQdkTOQbXM9C5PqoyBAs9H9YYX97zmu5bO50scGO3qjoM7DXkkUf1SGPA%2B1xMEVQWoy5dZ5KEIuPOhJ94tWFphBkA1oe5kZ%2FAGNbSI6LYQM%2BGC9AWov9SoRndA%2BHWh5afSzEs0qqXN8qoyjq3z%2FS1A3t0oLlPeLwc1OFqGr%2BHAkUsOTYjOz12pLZnwJ7gsIM6mCd5vzLcoxZWaEwN0jiCL5%2BZw3rr3ygOOzO5olaEptwYZanFaHlU7khYunrr%2BgTdrDl4KSkgBu5xzZBF3deHZRPT9myesDJAPN3BYvAEXijsdZ0OBfpR%2B%2FYtVzh1hJ5eDNshZmNJT1iBiWArkbY%2BcDKv2Zj4e9JGRK8LbHzEhAnirNxsc6LU00u1Ri9rzle9MFycopyCDmLYsY%2BAUrob4YCgkg0bt048GJCy5F9kqF0iNL7C638aMkE3Pe1Uh1ZZ5WpGz5AcISdOEZRAtMt9ulaHJ9S5Ulqef%2Bxu5U9C9nRVQrfirpXyHQAZvRQzsMjOq4vl7mhfYj32S%2FpivWx0W2myNgrOJYVk%2Fkl%2BCgrwePC%2FPhleRHgKYJkXwtV8XhDTIeI5T7DDxMP%2BY8cMGOqUBUCJ7lgsSrOFbra3FtWw2jmBP1mBqfWM3bF5vFjJeBbHlQ%2BH96Z3L2MGywLzDEo0bNzHhQ%2F4GKSpP1LLdzV3nH%2Bakpl8swB%2BpAonRxsReYGNeZuGG1lHFctuWRIp%2FRcSKaqRKLkfIZ2QYeRyV9FOMQgpOc2zhpyhqzUw1ikiP%2BKMXJU4o5oNj6hGIRs%2F1d%2BQ067pDZdaOyU7aW0BLhbjZAy4K4Uez&X-Amz-Signature=92b20387d08c4bc79b84dde7be28a7d8706293898dc93d67fbf436ea0f260f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BY35UZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP8DJSYaTdduS4bmPjzB66XCq5zWo%2FJFmnNb20Uk3TjAiEAj638%2FkVzoumSQdw5tp71D5LcU4B32HwLcQ6wwVLnFY8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUDmO0yT4FOimQ3yyrcAz4eoEDjwlW%2BjMdAbpEF7RzkQ56UjHW8Mgj33BNiWAZhYYWxHsRQdkTOQbXM9C5PqoyBAs9H9YYX97zmu5bO50scGO3qjoM7DXkkUf1SGPA%2B1xMEVQWoy5dZ5KEIuPOhJ94tWFphBkA1oe5kZ%2FAGNbSI6LYQM%2BGC9AWov9SoRndA%2BHWh5afSzEs0qqXN8qoyjq3z%2FS1A3t0oLlPeLwc1OFqGr%2BHAkUsOTYjOz12pLZnwJ7gsIM6mCd5vzLcoxZWaEwN0jiCL5%2BZw3rr3ygOOzO5olaEptwYZanFaHlU7khYunrr%2BgTdrDl4KSkgBu5xzZBF3deHZRPT9myesDJAPN3BYvAEXijsdZ0OBfpR%2B%2FYtVzh1hJ5eDNshZmNJT1iBiWArkbY%2BcDKv2Zj4e9JGRK8LbHzEhAnirNxsc6LU00u1Ri9rzle9MFycopyCDmLYsY%2BAUrob4YCgkg0bt048GJCy5F9kqF0iNL7C638aMkE3Pe1Uh1ZZ5WpGz5AcISdOEZRAtMt9ulaHJ9S5Ulqef%2Bxu5U9C9nRVQrfirpXyHQAZvRQzsMjOq4vl7mhfYj32S%2FpivWx0W2myNgrOJYVk%2Fkl%2BCgrwePC%2FPhleRHgKYJkXwtV8XhDTIeI5T7DDxMP%2BY8cMGOqUBUCJ7lgsSrOFbra3FtWw2jmBP1mBqfWM3bF5vFjJeBbHlQ%2BH96Z3L2MGywLzDEo0bNzHhQ%2F4GKSpP1LLdzV3nH%2Bakpl8swB%2BpAonRxsReYGNeZuGG1lHFctuWRIp%2FRcSKaqRKLkfIZ2QYeRyV9FOMQgpOc2zhpyhqzUw1ikiP%2BKMXJU4o5oNj6hGIRs%2F1d%2BQ067pDZdaOyU7aW0BLhbjZAy4K4Uez&X-Amz-Signature=f3ded77ccb78cdee8658cee01f715b71d4ac3abbf8cd0af83560f4909c6648fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BY35UZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP8DJSYaTdduS4bmPjzB66XCq5zWo%2FJFmnNb20Uk3TjAiEAj638%2FkVzoumSQdw5tp71D5LcU4B32HwLcQ6wwVLnFY8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUDmO0yT4FOimQ3yyrcAz4eoEDjwlW%2BjMdAbpEF7RzkQ56UjHW8Mgj33BNiWAZhYYWxHsRQdkTOQbXM9C5PqoyBAs9H9YYX97zmu5bO50scGO3qjoM7DXkkUf1SGPA%2B1xMEVQWoy5dZ5KEIuPOhJ94tWFphBkA1oe5kZ%2FAGNbSI6LYQM%2BGC9AWov9SoRndA%2BHWh5afSzEs0qqXN8qoyjq3z%2FS1A3t0oLlPeLwc1OFqGr%2BHAkUsOTYjOz12pLZnwJ7gsIM6mCd5vzLcoxZWaEwN0jiCL5%2BZw3rr3ygOOzO5olaEptwYZanFaHlU7khYunrr%2BgTdrDl4KSkgBu5xzZBF3deHZRPT9myesDJAPN3BYvAEXijsdZ0OBfpR%2B%2FYtVzh1hJ5eDNshZmNJT1iBiWArkbY%2BcDKv2Zj4e9JGRK8LbHzEhAnirNxsc6LU00u1Ri9rzle9MFycopyCDmLYsY%2BAUrob4YCgkg0bt048GJCy5F9kqF0iNL7C638aMkE3Pe1Uh1ZZ5WpGz5AcISdOEZRAtMt9ulaHJ9S5Ulqef%2Bxu5U9C9nRVQrfirpXyHQAZvRQzsMjOq4vl7mhfYj32S%2FpivWx0W2myNgrOJYVk%2Fkl%2BCgrwePC%2FPhleRHgKYJkXwtV8XhDTIeI5T7DDxMP%2BY8cMGOqUBUCJ7lgsSrOFbra3FtWw2jmBP1mBqfWM3bF5vFjJeBbHlQ%2BH96Z3L2MGywLzDEo0bNzHhQ%2F4GKSpP1LLdzV3nH%2Bakpl8swB%2BpAonRxsReYGNeZuGG1lHFctuWRIp%2FRcSKaqRKLkfIZ2QYeRyV9FOMQgpOc2zhpyhqzUw1ikiP%2BKMXJU4o5oNj6hGIRs%2F1d%2BQ067pDZdaOyU7aW0BLhbjZAy4K4Uez&X-Amz-Signature=4428ac99f7a5b9fbbc526f1d303733a10407fdb86c021d7cecbdee6a22bb6a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BY35UZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP8DJSYaTdduS4bmPjzB66XCq5zWo%2FJFmnNb20Uk3TjAiEAj638%2FkVzoumSQdw5tp71D5LcU4B32HwLcQ6wwVLnFY8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUDmO0yT4FOimQ3yyrcAz4eoEDjwlW%2BjMdAbpEF7RzkQ56UjHW8Mgj33BNiWAZhYYWxHsRQdkTOQbXM9C5PqoyBAs9H9YYX97zmu5bO50scGO3qjoM7DXkkUf1SGPA%2B1xMEVQWoy5dZ5KEIuPOhJ94tWFphBkA1oe5kZ%2FAGNbSI6LYQM%2BGC9AWov9SoRndA%2BHWh5afSzEs0qqXN8qoyjq3z%2FS1A3t0oLlPeLwc1OFqGr%2BHAkUsOTYjOz12pLZnwJ7gsIM6mCd5vzLcoxZWaEwN0jiCL5%2BZw3rr3ygOOzO5olaEptwYZanFaHlU7khYunrr%2BgTdrDl4KSkgBu5xzZBF3deHZRPT9myesDJAPN3BYvAEXijsdZ0OBfpR%2B%2FYtVzh1hJ5eDNshZmNJT1iBiWArkbY%2BcDKv2Zj4e9JGRK8LbHzEhAnirNxsc6LU00u1Ri9rzle9MFycopyCDmLYsY%2BAUrob4YCgkg0bt048GJCy5F9kqF0iNL7C638aMkE3Pe1Uh1ZZ5WpGz5AcISdOEZRAtMt9ulaHJ9S5Ulqef%2Bxu5U9C9nRVQrfirpXyHQAZvRQzsMjOq4vl7mhfYj32S%2FpivWx0W2myNgrOJYVk%2Fkl%2BCgrwePC%2FPhleRHgKYJkXwtV8XhDTIeI5T7DDxMP%2BY8cMGOqUBUCJ7lgsSrOFbra3FtWw2jmBP1mBqfWM3bF5vFjJeBbHlQ%2BH96Z3L2MGywLzDEo0bNzHhQ%2F4GKSpP1LLdzV3nH%2Bakpl8swB%2BpAonRxsReYGNeZuGG1lHFctuWRIp%2FRcSKaqRKLkfIZ2QYeRyV9FOMQgpOc2zhpyhqzUw1ikiP%2BKMXJU4o5oNj6hGIRs%2F1d%2BQ067pDZdaOyU7aW0BLhbjZAy4K4Uez&X-Amz-Signature=393bd1660ac641c505d257edd1a89d4abbeec3ce0a6cac00bb27008ddada0c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BY35UZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP8DJSYaTdduS4bmPjzB66XCq5zWo%2FJFmnNb20Uk3TjAiEAj638%2FkVzoumSQdw5tp71D5LcU4B32HwLcQ6wwVLnFY8qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUDmO0yT4FOimQ3yyrcAz4eoEDjwlW%2BjMdAbpEF7RzkQ56UjHW8Mgj33BNiWAZhYYWxHsRQdkTOQbXM9C5PqoyBAs9H9YYX97zmu5bO50scGO3qjoM7DXkkUf1SGPA%2B1xMEVQWoy5dZ5KEIuPOhJ94tWFphBkA1oe5kZ%2FAGNbSI6LYQM%2BGC9AWov9SoRndA%2BHWh5afSzEs0qqXN8qoyjq3z%2FS1A3t0oLlPeLwc1OFqGr%2BHAkUsOTYjOz12pLZnwJ7gsIM6mCd5vzLcoxZWaEwN0jiCL5%2BZw3rr3ygOOzO5olaEptwYZanFaHlU7khYunrr%2BgTdrDl4KSkgBu5xzZBF3deHZRPT9myesDJAPN3BYvAEXijsdZ0OBfpR%2B%2FYtVzh1hJ5eDNshZmNJT1iBiWArkbY%2BcDKv2Zj4e9JGRK8LbHzEhAnirNxsc6LU00u1Ri9rzle9MFycopyCDmLYsY%2BAUrob4YCgkg0bt048GJCy5F9kqF0iNL7C638aMkE3Pe1Uh1ZZ5WpGz5AcISdOEZRAtMt9ulaHJ9S5Ulqef%2Bxu5U9C9nRVQrfirpXyHQAZvRQzsMjOq4vl7mhfYj32S%2FpivWx0W2myNgrOJYVk%2Fkl%2BCgrwePC%2FPhleRHgKYJkXwtV8XhDTIeI5T7DDxMP%2BY8cMGOqUBUCJ7lgsSrOFbra3FtWw2jmBP1mBqfWM3bF5vFjJeBbHlQ%2BH96Z3L2MGywLzDEo0bNzHhQ%2F4GKSpP1LLdzV3nH%2Bakpl8swB%2BpAonRxsReYGNeZuGG1lHFctuWRIp%2FRcSKaqRKLkfIZ2QYeRyV9FOMQgpOc2zhpyhqzUw1ikiP%2BKMXJU4o5oNj6hGIRs%2F1d%2BQ067pDZdaOyU7aW0BLhbjZAy4K4Uez&X-Amz-Signature=9d9c70cc792bdc66192820595058ba127b61e048ea7b255b287f5b6c35bbb98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
