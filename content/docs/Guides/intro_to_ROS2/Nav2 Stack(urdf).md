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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHVAYVL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7CUZZg8%2BhOwvYar%2Fk4V73hA4561aejstVt4Qh%2B7RKMAIhAOxzrnJ3dj9VDNK54HhXp9FpnJCBxOnfdBDK0txoXghaKv8DCC0QABoMNjM3NDIzMTgzODA1IgxQWgJkp6mvvjbtbewq3ANEASLUzhjPTVz7KFbr7SYHwODJOLRSvkTswyKq0pQE%2B08ufoC9Q%2FZM883gJ1ijSFTKpTk%2FWrzcLDJd%2BSb3TR2F4T2fmCQ1YLazh9XSR92lChB0%2BC9VeAEVGWm1jxJ4zATiWd4d2DCfCdZ4X4UwLmdPXVHhGUaGgBVUaDgm9iCVR%2BwVStV6KD7Ujmc6cT0aUj4keWgIVBY7J5MzPFcJLvDsNmcbAEWdFyYUaq2KYyLZ37iLyTfaSootQihkcW2ud1nSGGtyO53D%2FpOfdfbcsumgnpMgBJ%2BlTqcI0Jll%2B7YobNW45rn6NWEhbBtgf%2FwRsOevymJHn1eymZjF8PHbLx0LPLWyCSfzB1HIwYTE0EvNTPApBhnUV0OzJ%2FyDl%2B1WeewPxq5DP2YLoi%2BiY%2Br1WvSSrwhnSWVqRrweVQDTMfNj5akHyldlC0%2F3jmcy2UE3uobBrBhyz0cLkL6et%2FfY0djPKEtnO84GyetMaB0OBgVu8B5%2Bz3yXWUpIpegxXL%2FA3pqiqFUDbod7Hjr3o8hfiZtOXnLWm%2B%2FJjDwLRmXrxBYYGu8a69%2Fnnw7%2Bt8TfKxro%2BjtFoUOje7Ltwq%2Fewm4cYcBP733porg3D1hXHjNxSUlYkU0ZpKvUfUC2QYoodDCruPG9BjqkAbGp%2FS81fkV%2F7qZaWF6E0KriuWHn0yP%2FZUYK%2FI4oyyZQbW%2BCylUkuvd4KFX8XVxcHRcmNqHwqU0lKZO9FycmQ6%2FhzLsmfXNlNDtEjr3CbV3P%2FkqiyHNInQOdpvitAHlQe0tDE1pQ72dR35sA7yBJUDTCL5mCT6CMMhFpfMkGKU%2F81N9mvbtsP9c%2BTxOkyBhb7gPZkw7wdHDPIQicf8PAJUSVH0Y6&X-Amz-Signature=a7fee9b93e919625b768e91b1006573d19d01bafe65aa46d24b60ac3160b536a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHVAYVL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7CUZZg8%2BhOwvYar%2Fk4V73hA4561aejstVt4Qh%2B7RKMAIhAOxzrnJ3dj9VDNK54HhXp9FpnJCBxOnfdBDK0txoXghaKv8DCC0QABoMNjM3NDIzMTgzODA1IgxQWgJkp6mvvjbtbewq3ANEASLUzhjPTVz7KFbr7SYHwODJOLRSvkTswyKq0pQE%2B08ufoC9Q%2FZM883gJ1ijSFTKpTk%2FWrzcLDJd%2BSb3TR2F4T2fmCQ1YLazh9XSR92lChB0%2BC9VeAEVGWm1jxJ4zATiWd4d2DCfCdZ4X4UwLmdPXVHhGUaGgBVUaDgm9iCVR%2BwVStV6KD7Ujmc6cT0aUj4keWgIVBY7J5MzPFcJLvDsNmcbAEWdFyYUaq2KYyLZ37iLyTfaSootQihkcW2ud1nSGGtyO53D%2FpOfdfbcsumgnpMgBJ%2BlTqcI0Jll%2B7YobNW45rn6NWEhbBtgf%2FwRsOevymJHn1eymZjF8PHbLx0LPLWyCSfzB1HIwYTE0EvNTPApBhnUV0OzJ%2FyDl%2B1WeewPxq5DP2YLoi%2BiY%2Br1WvSSrwhnSWVqRrweVQDTMfNj5akHyldlC0%2F3jmcy2UE3uobBrBhyz0cLkL6et%2FfY0djPKEtnO84GyetMaB0OBgVu8B5%2Bz3yXWUpIpegxXL%2FA3pqiqFUDbod7Hjr3o8hfiZtOXnLWm%2B%2FJjDwLRmXrxBYYGu8a69%2Fnnw7%2Bt8TfKxro%2BjtFoUOje7Ltwq%2Fewm4cYcBP733porg3D1hXHjNxSUlYkU0ZpKvUfUC2QYoodDCruPG9BjqkAbGp%2FS81fkV%2F7qZaWF6E0KriuWHn0yP%2FZUYK%2FI4oyyZQbW%2BCylUkuvd4KFX8XVxcHRcmNqHwqU0lKZO9FycmQ6%2FhzLsmfXNlNDtEjr3CbV3P%2FkqiyHNInQOdpvitAHlQe0tDE1pQ72dR35sA7yBJUDTCL5mCT6CMMhFpfMkGKU%2F81N9mvbtsP9c%2BTxOkyBhb7gPZkw7wdHDPIQicf8PAJUSVH0Y6&X-Amz-Signature=76ceede2eb838eabe7e98da6872e67bc63202a71256f2181b25ff00a660a88f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHVAYVL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7CUZZg8%2BhOwvYar%2Fk4V73hA4561aejstVt4Qh%2B7RKMAIhAOxzrnJ3dj9VDNK54HhXp9FpnJCBxOnfdBDK0txoXghaKv8DCC0QABoMNjM3NDIzMTgzODA1IgxQWgJkp6mvvjbtbewq3ANEASLUzhjPTVz7KFbr7SYHwODJOLRSvkTswyKq0pQE%2B08ufoC9Q%2FZM883gJ1ijSFTKpTk%2FWrzcLDJd%2BSb3TR2F4T2fmCQ1YLazh9XSR92lChB0%2BC9VeAEVGWm1jxJ4zATiWd4d2DCfCdZ4X4UwLmdPXVHhGUaGgBVUaDgm9iCVR%2BwVStV6KD7Ujmc6cT0aUj4keWgIVBY7J5MzPFcJLvDsNmcbAEWdFyYUaq2KYyLZ37iLyTfaSootQihkcW2ud1nSGGtyO53D%2FpOfdfbcsumgnpMgBJ%2BlTqcI0Jll%2B7YobNW45rn6NWEhbBtgf%2FwRsOevymJHn1eymZjF8PHbLx0LPLWyCSfzB1HIwYTE0EvNTPApBhnUV0OzJ%2FyDl%2B1WeewPxq5DP2YLoi%2BiY%2Br1WvSSrwhnSWVqRrweVQDTMfNj5akHyldlC0%2F3jmcy2UE3uobBrBhyz0cLkL6et%2FfY0djPKEtnO84GyetMaB0OBgVu8B5%2Bz3yXWUpIpegxXL%2FA3pqiqFUDbod7Hjr3o8hfiZtOXnLWm%2B%2FJjDwLRmXrxBYYGu8a69%2Fnnw7%2Bt8TfKxro%2BjtFoUOje7Ltwq%2Fewm4cYcBP733porg3D1hXHjNxSUlYkU0ZpKvUfUC2QYoodDCruPG9BjqkAbGp%2FS81fkV%2F7qZaWF6E0KriuWHn0yP%2FZUYK%2FI4oyyZQbW%2BCylUkuvd4KFX8XVxcHRcmNqHwqU0lKZO9FycmQ6%2FhzLsmfXNlNDtEjr3CbV3P%2FkqiyHNInQOdpvitAHlQe0tDE1pQ72dR35sA7yBJUDTCL5mCT6CMMhFpfMkGKU%2F81N9mvbtsP9c%2BTxOkyBhb7gPZkw7wdHDPIQicf8PAJUSVH0Y6&X-Amz-Signature=f4d005e807ffc1e05cbc7da064c951133d8e52fbc80776f7e8deff114af25eef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHVAYVL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7CUZZg8%2BhOwvYar%2Fk4V73hA4561aejstVt4Qh%2B7RKMAIhAOxzrnJ3dj9VDNK54HhXp9FpnJCBxOnfdBDK0txoXghaKv8DCC0QABoMNjM3NDIzMTgzODA1IgxQWgJkp6mvvjbtbewq3ANEASLUzhjPTVz7KFbr7SYHwODJOLRSvkTswyKq0pQE%2B08ufoC9Q%2FZM883gJ1ijSFTKpTk%2FWrzcLDJd%2BSb3TR2F4T2fmCQ1YLazh9XSR92lChB0%2BC9VeAEVGWm1jxJ4zATiWd4d2DCfCdZ4X4UwLmdPXVHhGUaGgBVUaDgm9iCVR%2BwVStV6KD7Ujmc6cT0aUj4keWgIVBY7J5MzPFcJLvDsNmcbAEWdFyYUaq2KYyLZ37iLyTfaSootQihkcW2ud1nSGGtyO53D%2FpOfdfbcsumgnpMgBJ%2BlTqcI0Jll%2B7YobNW45rn6NWEhbBtgf%2FwRsOevymJHn1eymZjF8PHbLx0LPLWyCSfzB1HIwYTE0EvNTPApBhnUV0OzJ%2FyDl%2B1WeewPxq5DP2YLoi%2BiY%2Br1WvSSrwhnSWVqRrweVQDTMfNj5akHyldlC0%2F3jmcy2UE3uobBrBhyz0cLkL6et%2FfY0djPKEtnO84GyetMaB0OBgVu8B5%2Bz3yXWUpIpegxXL%2FA3pqiqFUDbod7Hjr3o8hfiZtOXnLWm%2B%2FJjDwLRmXrxBYYGu8a69%2Fnnw7%2Bt8TfKxro%2BjtFoUOje7Ltwq%2Fewm4cYcBP733porg3D1hXHjNxSUlYkU0ZpKvUfUC2QYoodDCruPG9BjqkAbGp%2FS81fkV%2F7qZaWF6E0KriuWHn0yP%2FZUYK%2FI4oyyZQbW%2BCylUkuvd4KFX8XVxcHRcmNqHwqU0lKZO9FycmQ6%2FhzLsmfXNlNDtEjr3CbV3P%2FkqiyHNInQOdpvitAHlQe0tDE1pQ72dR35sA7yBJUDTCL5mCT6CMMhFpfMkGKU%2F81N9mvbtsP9c%2BTxOkyBhb7gPZkw7wdHDPIQicf8PAJUSVH0Y6&X-Amz-Signature=d4918cc0caf445316a3f30581cc3ddca3df56ec81a02fa4f6b8e7518a73dc34d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHVAYVL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7CUZZg8%2BhOwvYar%2Fk4V73hA4561aejstVt4Qh%2B7RKMAIhAOxzrnJ3dj9VDNK54HhXp9FpnJCBxOnfdBDK0txoXghaKv8DCC0QABoMNjM3NDIzMTgzODA1IgxQWgJkp6mvvjbtbewq3ANEASLUzhjPTVz7KFbr7SYHwODJOLRSvkTswyKq0pQE%2B08ufoC9Q%2FZM883gJ1ijSFTKpTk%2FWrzcLDJd%2BSb3TR2F4T2fmCQ1YLazh9XSR92lChB0%2BC9VeAEVGWm1jxJ4zATiWd4d2DCfCdZ4X4UwLmdPXVHhGUaGgBVUaDgm9iCVR%2BwVStV6KD7Ujmc6cT0aUj4keWgIVBY7J5MzPFcJLvDsNmcbAEWdFyYUaq2KYyLZ37iLyTfaSootQihkcW2ud1nSGGtyO53D%2FpOfdfbcsumgnpMgBJ%2BlTqcI0Jll%2B7YobNW45rn6NWEhbBtgf%2FwRsOevymJHn1eymZjF8PHbLx0LPLWyCSfzB1HIwYTE0EvNTPApBhnUV0OzJ%2FyDl%2B1WeewPxq5DP2YLoi%2BiY%2Br1WvSSrwhnSWVqRrweVQDTMfNj5akHyldlC0%2F3jmcy2UE3uobBrBhyz0cLkL6et%2FfY0djPKEtnO84GyetMaB0OBgVu8B5%2Bz3yXWUpIpegxXL%2FA3pqiqFUDbod7Hjr3o8hfiZtOXnLWm%2B%2FJjDwLRmXrxBYYGu8a69%2Fnnw7%2Bt8TfKxro%2BjtFoUOje7Ltwq%2Fewm4cYcBP733porg3D1hXHjNxSUlYkU0ZpKvUfUC2QYoodDCruPG9BjqkAbGp%2FS81fkV%2F7qZaWF6E0KriuWHn0yP%2FZUYK%2FI4oyyZQbW%2BCylUkuvd4KFX8XVxcHRcmNqHwqU0lKZO9FycmQ6%2FhzLsmfXNlNDtEjr3CbV3P%2FkqiyHNInQOdpvitAHlQe0tDE1pQ72dR35sA7yBJUDTCL5mCT6CMMhFpfMkGKU%2F81N9mvbtsP9c%2BTxOkyBhb7gPZkw7wdHDPIQicf8PAJUSVH0Y6&X-Amz-Signature=714e91a809f60d0955c83103eaa0f9abc81432f964299c96c5e8b58ca4622087&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLHVAYVL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7CUZZg8%2BhOwvYar%2Fk4V73hA4561aejstVt4Qh%2B7RKMAIhAOxzrnJ3dj9VDNK54HhXp9FpnJCBxOnfdBDK0txoXghaKv8DCC0QABoMNjM3NDIzMTgzODA1IgxQWgJkp6mvvjbtbewq3ANEASLUzhjPTVz7KFbr7SYHwODJOLRSvkTswyKq0pQE%2B08ufoC9Q%2FZM883gJ1ijSFTKpTk%2FWrzcLDJd%2BSb3TR2F4T2fmCQ1YLazh9XSR92lChB0%2BC9VeAEVGWm1jxJ4zATiWd4d2DCfCdZ4X4UwLmdPXVHhGUaGgBVUaDgm9iCVR%2BwVStV6KD7Ujmc6cT0aUj4keWgIVBY7J5MzPFcJLvDsNmcbAEWdFyYUaq2KYyLZ37iLyTfaSootQihkcW2ud1nSGGtyO53D%2FpOfdfbcsumgnpMgBJ%2BlTqcI0Jll%2B7YobNW45rn6NWEhbBtgf%2FwRsOevymJHn1eymZjF8PHbLx0LPLWyCSfzB1HIwYTE0EvNTPApBhnUV0OzJ%2FyDl%2B1WeewPxq5DP2YLoi%2BiY%2Br1WvSSrwhnSWVqRrweVQDTMfNj5akHyldlC0%2F3jmcy2UE3uobBrBhyz0cLkL6et%2FfY0djPKEtnO84GyetMaB0OBgVu8B5%2Bz3yXWUpIpegxXL%2FA3pqiqFUDbod7Hjr3o8hfiZtOXnLWm%2B%2FJjDwLRmXrxBYYGu8a69%2Fnnw7%2Bt8TfKxro%2BjtFoUOje7Ltwq%2Fewm4cYcBP733porg3D1hXHjNxSUlYkU0ZpKvUfUC2QYoodDCruPG9BjqkAbGp%2FS81fkV%2F7qZaWF6E0KriuWHn0yP%2FZUYK%2FI4oyyZQbW%2BCylUkuvd4KFX8XVxcHRcmNqHwqU0lKZO9FycmQ6%2FhzLsmfXNlNDtEjr3CbV3P%2FkqiyHNInQOdpvitAHlQe0tDE1pQ72dR35sA7yBJUDTCL5mCT6CMMhFpfMkGKU%2F81N9mvbtsP9c%2BTxOkyBhb7gPZkw7wdHDPIQicf8PAJUSVH0Y6&X-Amz-Signature=06c27ad0cac62f7f163a9052f21eaf4e077bef31ba5eb5408567e468ab03d2c8&X-Amz-SignedHeaders=host&x-id=GetObject)
