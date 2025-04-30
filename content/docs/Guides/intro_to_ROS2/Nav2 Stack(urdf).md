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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6KT3KI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD0NgirGo8ZRZsEVPq%2FNh%2B8Z6cpgFzlmZIVaWIYOPS2cQIhALQB7gtcgfPw3PjmF%2FF5mzuMQcvchBIWL7V96RvkdNSSKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt%2B0fCAFQxbBM7s8kq3APRYrY64Rzek0P4R6fD8ZeHIuGZAovmxLOOtjeTVF6TFQPqeCJ1VaMq9OIhOTUhTND6vuZ7lhoPM7Lnlyd3wJQZN37hgg0%2BFeOfwkfXEvpSq3jp2ZZEXJ04G9SlXHkYLJUaszIoH4bgfaIt36KbjPKfObfS8a1ekPnqaT4pUqlB6ODfcnzP53s5H2p3M9LN4y7NUCGDDQ0N55VCiGRb12kDXazzdGXxNLmODfOia4DJwbwcxOls5Iv0XxcjI8nueqqD1o%2BgbIPU2hgANmFa96V6hMMtXUIS51DK3n6uBCOC1ghpw%2Bk%2BJSvEr%2F6I9XyTzMKX3oqhMHW4z7nFN9bVCqnCyp7vD%2BSyS0QM%2FL9y24mY%2FLZWS8jd6KZDT10Ip%2FthfAZM0SD0jaqp3M2sGRdRVR7%2Bznk%2BbiOY91gpnZ8kkdA%2BWQISJpuoJgs2uKEITEf6d7GM9Rjhun17r%2BDkTrPCnPz8r8FHQoYf3WDwFMMJ2R0iZSS19lBfmTc%2FJ4S9TFB9xN8vCXDuqBtc8q2QbmtRXHqjLIz8LPcRqG9nPPMWtnPdJ9MCdWlX4rRZz5Syg7EAfnRR8A88mJ6TurLcLE7LTShV8jl07x5ZuUv2uQilXsXvqKE4jb2lGh%2F1mxEoBjCCh8bABjqkAYO8RQE3cjofG%2BhQMDeja2NTsw%2BvJ4wRg3SWN%2B0Phns8VgtSVZDsCxORPP8MEKmdaDY9Fa3eGihvcGSZWIXiNo8pXGOkhnU%2BGKIDjIjUbXrrb6ttGshji67Mb1B4WUjmzSwiz8KGi6%2BNe6kY7V5hcuIjsiCsC5tJHzGKufQaPxzbbUJ9ptb7Y7GrUA3IAhNpU7f5eWTLm9Ukv22osFwTkel3wDrw&X-Amz-Signature=1c9d79b6b118c6e09d1f53c1816a18419e252acc25a6b7ee0b8f27f18a6c59e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6KT3KI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD0NgirGo8ZRZsEVPq%2FNh%2B8Z6cpgFzlmZIVaWIYOPS2cQIhALQB7gtcgfPw3PjmF%2FF5mzuMQcvchBIWL7V96RvkdNSSKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt%2B0fCAFQxbBM7s8kq3APRYrY64Rzek0P4R6fD8ZeHIuGZAovmxLOOtjeTVF6TFQPqeCJ1VaMq9OIhOTUhTND6vuZ7lhoPM7Lnlyd3wJQZN37hgg0%2BFeOfwkfXEvpSq3jp2ZZEXJ04G9SlXHkYLJUaszIoH4bgfaIt36KbjPKfObfS8a1ekPnqaT4pUqlB6ODfcnzP53s5H2p3M9LN4y7NUCGDDQ0N55VCiGRb12kDXazzdGXxNLmODfOia4DJwbwcxOls5Iv0XxcjI8nueqqD1o%2BgbIPU2hgANmFa96V6hMMtXUIS51DK3n6uBCOC1ghpw%2Bk%2BJSvEr%2F6I9XyTzMKX3oqhMHW4z7nFN9bVCqnCyp7vD%2BSyS0QM%2FL9y24mY%2FLZWS8jd6KZDT10Ip%2FthfAZM0SD0jaqp3M2sGRdRVR7%2Bznk%2BbiOY91gpnZ8kkdA%2BWQISJpuoJgs2uKEITEf6d7GM9Rjhun17r%2BDkTrPCnPz8r8FHQoYf3WDwFMMJ2R0iZSS19lBfmTc%2FJ4S9TFB9xN8vCXDuqBtc8q2QbmtRXHqjLIz8LPcRqG9nPPMWtnPdJ9MCdWlX4rRZz5Syg7EAfnRR8A88mJ6TurLcLE7LTShV8jl07x5ZuUv2uQilXsXvqKE4jb2lGh%2F1mxEoBjCCh8bABjqkAYO8RQE3cjofG%2BhQMDeja2NTsw%2BvJ4wRg3SWN%2B0Phns8VgtSVZDsCxORPP8MEKmdaDY9Fa3eGihvcGSZWIXiNo8pXGOkhnU%2BGKIDjIjUbXrrb6ttGshji67Mb1B4WUjmzSwiz8KGi6%2BNe6kY7V5hcuIjsiCsC5tJHzGKufQaPxzbbUJ9ptb7Y7GrUA3IAhNpU7f5eWTLm9Ukv22osFwTkel3wDrw&X-Amz-Signature=a32c2afda7db83ba40538529b8e31c62d72d4b93a1a46ada018927693b1b2485&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6KT3KI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD0NgirGo8ZRZsEVPq%2FNh%2B8Z6cpgFzlmZIVaWIYOPS2cQIhALQB7gtcgfPw3PjmF%2FF5mzuMQcvchBIWL7V96RvkdNSSKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt%2B0fCAFQxbBM7s8kq3APRYrY64Rzek0P4R6fD8ZeHIuGZAovmxLOOtjeTVF6TFQPqeCJ1VaMq9OIhOTUhTND6vuZ7lhoPM7Lnlyd3wJQZN37hgg0%2BFeOfwkfXEvpSq3jp2ZZEXJ04G9SlXHkYLJUaszIoH4bgfaIt36KbjPKfObfS8a1ekPnqaT4pUqlB6ODfcnzP53s5H2p3M9LN4y7NUCGDDQ0N55VCiGRb12kDXazzdGXxNLmODfOia4DJwbwcxOls5Iv0XxcjI8nueqqD1o%2BgbIPU2hgANmFa96V6hMMtXUIS51DK3n6uBCOC1ghpw%2Bk%2BJSvEr%2F6I9XyTzMKX3oqhMHW4z7nFN9bVCqnCyp7vD%2BSyS0QM%2FL9y24mY%2FLZWS8jd6KZDT10Ip%2FthfAZM0SD0jaqp3M2sGRdRVR7%2Bznk%2BbiOY91gpnZ8kkdA%2BWQISJpuoJgs2uKEITEf6d7GM9Rjhun17r%2BDkTrPCnPz8r8FHQoYf3WDwFMMJ2R0iZSS19lBfmTc%2FJ4S9TFB9xN8vCXDuqBtc8q2QbmtRXHqjLIz8LPcRqG9nPPMWtnPdJ9MCdWlX4rRZz5Syg7EAfnRR8A88mJ6TurLcLE7LTShV8jl07x5ZuUv2uQilXsXvqKE4jb2lGh%2F1mxEoBjCCh8bABjqkAYO8RQE3cjofG%2BhQMDeja2NTsw%2BvJ4wRg3SWN%2B0Phns8VgtSVZDsCxORPP8MEKmdaDY9Fa3eGihvcGSZWIXiNo8pXGOkhnU%2BGKIDjIjUbXrrb6ttGshji67Mb1B4WUjmzSwiz8KGi6%2BNe6kY7V5hcuIjsiCsC5tJHzGKufQaPxzbbUJ9ptb7Y7GrUA3IAhNpU7f5eWTLm9Ukv22osFwTkel3wDrw&X-Amz-Signature=e59e937cbfda3f00c323a3a646e930e20cfea23b162f5ef84d5d264d6af9f2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6KT3KI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD0NgirGo8ZRZsEVPq%2FNh%2B8Z6cpgFzlmZIVaWIYOPS2cQIhALQB7gtcgfPw3PjmF%2FF5mzuMQcvchBIWL7V96RvkdNSSKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt%2B0fCAFQxbBM7s8kq3APRYrY64Rzek0P4R6fD8ZeHIuGZAovmxLOOtjeTVF6TFQPqeCJ1VaMq9OIhOTUhTND6vuZ7lhoPM7Lnlyd3wJQZN37hgg0%2BFeOfwkfXEvpSq3jp2ZZEXJ04G9SlXHkYLJUaszIoH4bgfaIt36KbjPKfObfS8a1ekPnqaT4pUqlB6ODfcnzP53s5H2p3M9LN4y7NUCGDDQ0N55VCiGRb12kDXazzdGXxNLmODfOia4DJwbwcxOls5Iv0XxcjI8nueqqD1o%2BgbIPU2hgANmFa96V6hMMtXUIS51DK3n6uBCOC1ghpw%2Bk%2BJSvEr%2F6I9XyTzMKX3oqhMHW4z7nFN9bVCqnCyp7vD%2BSyS0QM%2FL9y24mY%2FLZWS8jd6KZDT10Ip%2FthfAZM0SD0jaqp3M2sGRdRVR7%2Bznk%2BbiOY91gpnZ8kkdA%2BWQISJpuoJgs2uKEITEf6d7GM9Rjhun17r%2BDkTrPCnPz8r8FHQoYf3WDwFMMJ2R0iZSS19lBfmTc%2FJ4S9TFB9xN8vCXDuqBtc8q2QbmtRXHqjLIz8LPcRqG9nPPMWtnPdJ9MCdWlX4rRZz5Syg7EAfnRR8A88mJ6TurLcLE7LTShV8jl07x5ZuUv2uQilXsXvqKE4jb2lGh%2F1mxEoBjCCh8bABjqkAYO8RQE3cjofG%2BhQMDeja2NTsw%2BvJ4wRg3SWN%2B0Phns8VgtSVZDsCxORPP8MEKmdaDY9Fa3eGihvcGSZWIXiNo8pXGOkhnU%2BGKIDjIjUbXrrb6ttGshji67Mb1B4WUjmzSwiz8KGi6%2BNe6kY7V5hcuIjsiCsC5tJHzGKufQaPxzbbUJ9ptb7Y7GrUA3IAhNpU7f5eWTLm9Ukv22osFwTkel3wDrw&X-Amz-Signature=8226bda25e0aef284127a779227d06a9cc79fbcf104cbe7ec6e41c05ebc0c15e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6KT3KI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD0NgirGo8ZRZsEVPq%2FNh%2B8Z6cpgFzlmZIVaWIYOPS2cQIhALQB7gtcgfPw3PjmF%2FF5mzuMQcvchBIWL7V96RvkdNSSKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt%2B0fCAFQxbBM7s8kq3APRYrY64Rzek0P4R6fD8ZeHIuGZAovmxLOOtjeTVF6TFQPqeCJ1VaMq9OIhOTUhTND6vuZ7lhoPM7Lnlyd3wJQZN37hgg0%2BFeOfwkfXEvpSq3jp2ZZEXJ04G9SlXHkYLJUaszIoH4bgfaIt36KbjPKfObfS8a1ekPnqaT4pUqlB6ODfcnzP53s5H2p3M9LN4y7NUCGDDQ0N55VCiGRb12kDXazzdGXxNLmODfOia4DJwbwcxOls5Iv0XxcjI8nueqqD1o%2BgbIPU2hgANmFa96V6hMMtXUIS51DK3n6uBCOC1ghpw%2Bk%2BJSvEr%2F6I9XyTzMKX3oqhMHW4z7nFN9bVCqnCyp7vD%2BSyS0QM%2FL9y24mY%2FLZWS8jd6KZDT10Ip%2FthfAZM0SD0jaqp3M2sGRdRVR7%2Bznk%2BbiOY91gpnZ8kkdA%2BWQISJpuoJgs2uKEITEf6d7GM9Rjhun17r%2BDkTrPCnPz8r8FHQoYf3WDwFMMJ2R0iZSS19lBfmTc%2FJ4S9TFB9xN8vCXDuqBtc8q2QbmtRXHqjLIz8LPcRqG9nPPMWtnPdJ9MCdWlX4rRZz5Syg7EAfnRR8A88mJ6TurLcLE7LTShV8jl07x5ZuUv2uQilXsXvqKE4jb2lGh%2F1mxEoBjCCh8bABjqkAYO8RQE3cjofG%2BhQMDeja2NTsw%2BvJ4wRg3SWN%2B0Phns8VgtSVZDsCxORPP8MEKmdaDY9Fa3eGihvcGSZWIXiNo8pXGOkhnU%2BGKIDjIjUbXrrb6ttGshji67Mb1B4WUjmzSwiz8KGi6%2BNe6kY7V5hcuIjsiCsC5tJHzGKufQaPxzbbUJ9ptb7Y7GrUA3IAhNpU7f5eWTLm9Ukv22osFwTkel3wDrw&X-Amz-Signature=9dea27cd0869821d1177ba234117f27ca9959ab408e77b9680bbe9c0612378eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6KT3KI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD0NgirGo8ZRZsEVPq%2FNh%2B8Z6cpgFzlmZIVaWIYOPS2cQIhALQB7gtcgfPw3PjmF%2FF5mzuMQcvchBIWL7V96RvkdNSSKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyt%2B0fCAFQxbBM7s8kq3APRYrY64Rzek0P4R6fD8ZeHIuGZAovmxLOOtjeTVF6TFQPqeCJ1VaMq9OIhOTUhTND6vuZ7lhoPM7Lnlyd3wJQZN37hgg0%2BFeOfwkfXEvpSq3jp2ZZEXJ04G9SlXHkYLJUaszIoH4bgfaIt36KbjPKfObfS8a1ekPnqaT4pUqlB6ODfcnzP53s5H2p3M9LN4y7NUCGDDQ0N55VCiGRb12kDXazzdGXxNLmODfOia4DJwbwcxOls5Iv0XxcjI8nueqqD1o%2BgbIPU2hgANmFa96V6hMMtXUIS51DK3n6uBCOC1ghpw%2Bk%2BJSvEr%2F6I9XyTzMKX3oqhMHW4z7nFN9bVCqnCyp7vD%2BSyS0QM%2FL9y24mY%2FLZWS8jd6KZDT10Ip%2FthfAZM0SD0jaqp3M2sGRdRVR7%2Bznk%2BbiOY91gpnZ8kkdA%2BWQISJpuoJgs2uKEITEf6d7GM9Rjhun17r%2BDkTrPCnPz8r8FHQoYf3WDwFMMJ2R0iZSS19lBfmTc%2FJ4S9TFB9xN8vCXDuqBtc8q2QbmtRXHqjLIz8LPcRqG9nPPMWtnPdJ9MCdWlX4rRZz5Syg7EAfnRR8A88mJ6TurLcLE7LTShV8jl07x5ZuUv2uQilXsXvqKE4jb2lGh%2F1mxEoBjCCh8bABjqkAYO8RQE3cjofG%2BhQMDeja2NTsw%2BvJ4wRg3SWN%2B0Phns8VgtSVZDsCxORPP8MEKmdaDY9Fa3eGihvcGSZWIXiNo8pXGOkhnU%2BGKIDjIjUbXrrb6ttGshji67Mb1B4WUjmzSwiz8KGi6%2BNe6kY7V5hcuIjsiCsC5tJHzGKufQaPxzbbUJ9ptb7Y7GrUA3IAhNpU7f5eWTLm9Ukv22osFwTkel3wDrw&X-Amz-Signature=14351fc0ec3437149e0bc6fea4eb199bd422eb20884be0e23e2d57ff952366eb&X-Amz-SignedHeaders=host&x-id=GetObject)
