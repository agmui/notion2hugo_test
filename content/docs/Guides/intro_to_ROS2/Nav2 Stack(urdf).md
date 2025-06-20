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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MME4OS7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKs%2BO6AWgxxMx%2B%2FDULWku8kN0hg6%2B19hFBUrBRNpa29AiEAoQoxt8aev%2BbCq0SsrnsvJQUYpPLYjBK35nIGzOpe%2FAIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXroPS0%2FaxIvU%2FKCSrcA1VrVR5Ka96JH2cURttapMpRvhTUl8P1ahbtnJ%2FrEOU04tfZWiHP6BuBedswAtrWa99ytlcfGq7q8d1SmLJnviNvSGVdZJHdX4tZMWXNt4%2B%2B6PU2gcUJlSHup%2FCEH1D85en7V%2BpdLUWTMfPCwX5ZhZ5zsiUTmrV9d7Uyzndy%2FRwlBW9nazE4lCBMq83aVYIrvoQAt7OpqEPGpyd%2BVwi8lq1oCaAc9IDr9aOyAvnrmmYVAnfcseZBXNvc5uBFWqbBzk%2FVZddx3FJnfbRnYnEhjT6gdNi8UraNly5OcN%2FBxvpZxN%2FCnOlRatmQEyWVrge89tLLfWD9ymBW4%2B1XIbviQhZRWz9HLNE8Quq458CKV8FouqVS6l1OdsOjqWtgcu%2BMAucVEaKRqfF3J9CxB6jGQHcYCesvZqPaeurXvjE4%2FMZTsxbXWiqyVQAgHT0PqkUOd9GibN4LHLEpLCpIUgprrbOeMlYmgkUWV0B4%2FWmUCKQOySRweNsrDi%2BkAno7gm2u6WTXRADUY8xPWHlRgV9EvvISIy0THnEBLnNxIsXnnU6Lkcw679QdZHXjOuOyWSdn128PimqmJiDqhWjDlbyQwTZg2nfE%2BQIEB%2BPkgJk2FZWkTuunihcMdFDt%2B3mpMPm808IGOqUBIIIDMTKc4HkyTSIIjgMCPFLfTHZ%2BsU0eBQmyTtebUivvUPn1oGmSCOXb7vj8QDNBw14dVwGSW4L1wpjycgiG9P8HBxNBOn04fscsM4szdO5tkFdVf9OVfQPRfDi4e7hniwoGHHTNk9Gtjqi9gnsL%2FnRTZfQ%2BwLWc31lK5TYBr%2FR0ehtgAXV6lFRBDqqlDFqaCw4al0KLlMFp1bTue%2BgQIiZWC2hB&X-Amz-Signature=a56a2c0deb6643d6dd45cef93548be44d56621167d74550e435abf664acb9b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MME4OS7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKs%2BO6AWgxxMx%2B%2FDULWku8kN0hg6%2B19hFBUrBRNpa29AiEAoQoxt8aev%2BbCq0SsrnsvJQUYpPLYjBK35nIGzOpe%2FAIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXroPS0%2FaxIvU%2FKCSrcA1VrVR5Ka96JH2cURttapMpRvhTUl8P1ahbtnJ%2FrEOU04tfZWiHP6BuBedswAtrWa99ytlcfGq7q8d1SmLJnviNvSGVdZJHdX4tZMWXNt4%2B%2B6PU2gcUJlSHup%2FCEH1D85en7V%2BpdLUWTMfPCwX5ZhZ5zsiUTmrV9d7Uyzndy%2FRwlBW9nazE4lCBMq83aVYIrvoQAt7OpqEPGpyd%2BVwi8lq1oCaAc9IDr9aOyAvnrmmYVAnfcseZBXNvc5uBFWqbBzk%2FVZddx3FJnfbRnYnEhjT6gdNi8UraNly5OcN%2FBxvpZxN%2FCnOlRatmQEyWVrge89tLLfWD9ymBW4%2B1XIbviQhZRWz9HLNE8Quq458CKV8FouqVS6l1OdsOjqWtgcu%2BMAucVEaKRqfF3J9CxB6jGQHcYCesvZqPaeurXvjE4%2FMZTsxbXWiqyVQAgHT0PqkUOd9GibN4LHLEpLCpIUgprrbOeMlYmgkUWV0B4%2FWmUCKQOySRweNsrDi%2BkAno7gm2u6WTXRADUY8xPWHlRgV9EvvISIy0THnEBLnNxIsXnnU6Lkcw679QdZHXjOuOyWSdn128PimqmJiDqhWjDlbyQwTZg2nfE%2BQIEB%2BPkgJk2FZWkTuunihcMdFDt%2B3mpMPm808IGOqUBIIIDMTKc4HkyTSIIjgMCPFLfTHZ%2BsU0eBQmyTtebUivvUPn1oGmSCOXb7vj8QDNBw14dVwGSW4L1wpjycgiG9P8HBxNBOn04fscsM4szdO5tkFdVf9OVfQPRfDi4e7hniwoGHHTNk9Gtjqi9gnsL%2FnRTZfQ%2BwLWc31lK5TYBr%2FR0ehtgAXV6lFRBDqqlDFqaCw4al0KLlMFp1bTue%2BgQIiZWC2hB&X-Amz-Signature=07fb74316a11fc54bfd85b22b0b77e7662aca4058233581077bef1fd954d5268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MME4OS7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKs%2BO6AWgxxMx%2B%2FDULWku8kN0hg6%2B19hFBUrBRNpa29AiEAoQoxt8aev%2BbCq0SsrnsvJQUYpPLYjBK35nIGzOpe%2FAIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXroPS0%2FaxIvU%2FKCSrcA1VrVR5Ka96JH2cURttapMpRvhTUl8P1ahbtnJ%2FrEOU04tfZWiHP6BuBedswAtrWa99ytlcfGq7q8d1SmLJnviNvSGVdZJHdX4tZMWXNt4%2B%2B6PU2gcUJlSHup%2FCEH1D85en7V%2BpdLUWTMfPCwX5ZhZ5zsiUTmrV9d7Uyzndy%2FRwlBW9nazE4lCBMq83aVYIrvoQAt7OpqEPGpyd%2BVwi8lq1oCaAc9IDr9aOyAvnrmmYVAnfcseZBXNvc5uBFWqbBzk%2FVZddx3FJnfbRnYnEhjT6gdNi8UraNly5OcN%2FBxvpZxN%2FCnOlRatmQEyWVrge89tLLfWD9ymBW4%2B1XIbviQhZRWz9HLNE8Quq458CKV8FouqVS6l1OdsOjqWtgcu%2BMAucVEaKRqfF3J9CxB6jGQHcYCesvZqPaeurXvjE4%2FMZTsxbXWiqyVQAgHT0PqkUOd9GibN4LHLEpLCpIUgprrbOeMlYmgkUWV0B4%2FWmUCKQOySRweNsrDi%2BkAno7gm2u6WTXRADUY8xPWHlRgV9EvvISIy0THnEBLnNxIsXnnU6Lkcw679QdZHXjOuOyWSdn128PimqmJiDqhWjDlbyQwTZg2nfE%2BQIEB%2BPkgJk2FZWkTuunihcMdFDt%2B3mpMPm808IGOqUBIIIDMTKc4HkyTSIIjgMCPFLfTHZ%2BsU0eBQmyTtebUivvUPn1oGmSCOXb7vj8QDNBw14dVwGSW4L1wpjycgiG9P8HBxNBOn04fscsM4szdO5tkFdVf9OVfQPRfDi4e7hniwoGHHTNk9Gtjqi9gnsL%2FnRTZfQ%2BwLWc31lK5TYBr%2FR0ehtgAXV6lFRBDqqlDFqaCw4al0KLlMFp1bTue%2BgQIiZWC2hB&X-Amz-Signature=7465806b071d0d8568307e629c91b903956ba01a9258fc05655073845e3eaba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MME4OS7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKs%2BO6AWgxxMx%2B%2FDULWku8kN0hg6%2B19hFBUrBRNpa29AiEAoQoxt8aev%2BbCq0SsrnsvJQUYpPLYjBK35nIGzOpe%2FAIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXroPS0%2FaxIvU%2FKCSrcA1VrVR5Ka96JH2cURttapMpRvhTUl8P1ahbtnJ%2FrEOU04tfZWiHP6BuBedswAtrWa99ytlcfGq7q8d1SmLJnviNvSGVdZJHdX4tZMWXNt4%2B%2B6PU2gcUJlSHup%2FCEH1D85en7V%2BpdLUWTMfPCwX5ZhZ5zsiUTmrV9d7Uyzndy%2FRwlBW9nazE4lCBMq83aVYIrvoQAt7OpqEPGpyd%2BVwi8lq1oCaAc9IDr9aOyAvnrmmYVAnfcseZBXNvc5uBFWqbBzk%2FVZddx3FJnfbRnYnEhjT6gdNi8UraNly5OcN%2FBxvpZxN%2FCnOlRatmQEyWVrge89tLLfWD9ymBW4%2B1XIbviQhZRWz9HLNE8Quq458CKV8FouqVS6l1OdsOjqWtgcu%2BMAucVEaKRqfF3J9CxB6jGQHcYCesvZqPaeurXvjE4%2FMZTsxbXWiqyVQAgHT0PqkUOd9GibN4LHLEpLCpIUgprrbOeMlYmgkUWV0B4%2FWmUCKQOySRweNsrDi%2BkAno7gm2u6WTXRADUY8xPWHlRgV9EvvISIy0THnEBLnNxIsXnnU6Lkcw679QdZHXjOuOyWSdn128PimqmJiDqhWjDlbyQwTZg2nfE%2BQIEB%2BPkgJk2FZWkTuunihcMdFDt%2B3mpMPm808IGOqUBIIIDMTKc4HkyTSIIjgMCPFLfTHZ%2BsU0eBQmyTtebUivvUPn1oGmSCOXb7vj8QDNBw14dVwGSW4L1wpjycgiG9P8HBxNBOn04fscsM4szdO5tkFdVf9OVfQPRfDi4e7hniwoGHHTNk9Gtjqi9gnsL%2FnRTZfQ%2BwLWc31lK5TYBr%2FR0ehtgAXV6lFRBDqqlDFqaCw4al0KLlMFp1bTue%2BgQIiZWC2hB&X-Amz-Signature=b4b196b1cfe26c61b30fe5b6d2dcd3962d09a476df78302244b7a6ee5406f880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MME4OS7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKs%2BO6AWgxxMx%2B%2FDULWku8kN0hg6%2B19hFBUrBRNpa29AiEAoQoxt8aev%2BbCq0SsrnsvJQUYpPLYjBK35nIGzOpe%2FAIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXroPS0%2FaxIvU%2FKCSrcA1VrVR5Ka96JH2cURttapMpRvhTUl8P1ahbtnJ%2FrEOU04tfZWiHP6BuBedswAtrWa99ytlcfGq7q8d1SmLJnviNvSGVdZJHdX4tZMWXNt4%2B%2B6PU2gcUJlSHup%2FCEH1D85en7V%2BpdLUWTMfPCwX5ZhZ5zsiUTmrV9d7Uyzndy%2FRwlBW9nazE4lCBMq83aVYIrvoQAt7OpqEPGpyd%2BVwi8lq1oCaAc9IDr9aOyAvnrmmYVAnfcseZBXNvc5uBFWqbBzk%2FVZddx3FJnfbRnYnEhjT6gdNi8UraNly5OcN%2FBxvpZxN%2FCnOlRatmQEyWVrge89tLLfWD9ymBW4%2B1XIbviQhZRWz9HLNE8Quq458CKV8FouqVS6l1OdsOjqWtgcu%2BMAucVEaKRqfF3J9CxB6jGQHcYCesvZqPaeurXvjE4%2FMZTsxbXWiqyVQAgHT0PqkUOd9GibN4LHLEpLCpIUgprrbOeMlYmgkUWV0B4%2FWmUCKQOySRweNsrDi%2BkAno7gm2u6WTXRADUY8xPWHlRgV9EvvISIy0THnEBLnNxIsXnnU6Lkcw679QdZHXjOuOyWSdn128PimqmJiDqhWjDlbyQwTZg2nfE%2BQIEB%2BPkgJk2FZWkTuunihcMdFDt%2B3mpMPm808IGOqUBIIIDMTKc4HkyTSIIjgMCPFLfTHZ%2BsU0eBQmyTtebUivvUPn1oGmSCOXb7vj8QDNBw14dVwGSW4L1wpjycgiG9P8HBxNBOn04fscsM4szdO5tkFdVf9OVfQPRfDi4e7hniwoGHHTNk9Gtjqi9gnsL%2FnRTZfQ%2BwLWc31lK5TYBr%2FR0ehtgAXV6lFRBDqqlDFqaCw4al0KLlMFp1bTue%2BgQIiZWC2hB&X-Amz-Signature=db51592ed47c70abf0ab811c9cd748f28ea6b3b910ee8aa2706e2c48f51dd973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MME4OS7%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKs%2BO6AWgxxMx%2B%2FDULWku8kN0hg6%2B19hFBUrBRNpa29AiEAoQoxt8aev%2BbCq0SsrnsvJQUYpPLYjBK35nIGzOpe%2FAIqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXroPS0%2FaxIvU%2FKCSrcA1VrVR5Ka96JH2cURttapMpRvhTUl8P1ahbtnJ%2FrEOU04tfZWiHP6BuBedswAtrWa99ytlcfGq7q8d1SmLJnviNvSGVdZJHdX4tZMWXNt4%2B%2B6PU2gcUJlSHup%2FCEH1D85en7V%2BpdLUWTMfPCwX5ZhZ5zsiUTmrV9d7Uyzndy%2FRwlBW9nazE4lCBMq83aVYIrvoQAt7OpqEPGpyd%2BVwi8lq1oCaAc9IDr9aOyAvnrmmYVAnfcseZBXNvc5uBFWqbBzk%2FVZddx3FJnfbRnYnEhjT6gdNi8UraNly5OcN%2FBxvpZxN%2FCnOlRatmQEyWVrge89tLLfWD9ymBW4%2B1XIbviQhZRWz9HLNE8Quq458CKV8FouqVS6l1OdsOjqWtgcu%2BMAucVEaKRqfF3J9CxB6jGQHcYCesvZqPaeurXvjE4%2FMZTsxbXWiqyVQAgHT0PqkUOd9GibN4LHLEpLCpIUgprrbOeMlYmgkUWV0B4%2FWmUCKQOySRweNsrDi%2BkAno7gm2u6WTXRADUY8xPWHlRgV9EvvISIy0THnEBLnNxIsXnnU6Lkcw679QdZHXjOuOyWSdn128PimqmJiDqhWjDlbyQwTZg2nfE%2BQIEB%2BPkgJk2FZWkTuunihcMdFDt%2B3mpMPm808IGOqUBIIIDMTKc4HkyTSIIjgMCPFLfTHZ%2BsU0eBQmyTtebUivvUPn1oGmSCOXb7vj8QDNBw14dVwGSW4L1wpjycgiG9P8HBxNBOn04fscsM4szdO5tkFdVf9OVfQPRfDi4e7hniwoGHHTNk9Gtjqi9gnsL%2FnRTZfQ%2BwLWc31lK5TYBr%2FR0ehtgAXV6lFRBDqqlDFqaCw4al0KLlMFp1bTue%2BgQIiZWC2hB&X-Amz-Signature=1900e4d5029a6c1ec90013bea592653bd09b5324b45884be2f011c2ea5c91a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
