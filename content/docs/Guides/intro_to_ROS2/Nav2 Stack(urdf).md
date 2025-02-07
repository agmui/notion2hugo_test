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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQ6WLFD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC3AUlHf2%2FdQZUcLDG3WyQnzEmeNrnSMBKecWfuCptzDwIgJsxSUec%2BSfg%2FyM25B9qfiOCEE9e%2BZxXlp38v%2FDWx4REq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD4iOjcGCLKnvdW7LCrcA0aaP%2F0rQNwfWw3XKdt6D8qDDg8lY3JPLqw8r%2BchnW%2BUMKyDnpHQH451JBoawHvNd5FiBMs8ef2nGMkB2uuNurjcZBZ%2FXykLb%2FFwVRfECO%2F9%2FbVLDVGza5A2C7iLs9Qc1RnCQqtD6T2LoYKcL%2BQc0g2R96ZaNHch%2FOa2ymRgpyCbR%2BhUCl1XjJG1lDoy05JeVQghSSqXDG5ecqWUPh5aZS5j7L134wbjhZjE11rlJ5%2F94YvUUkxfTswJpB0fzO6T05u5Iw%2B6WXZg45OTdytKd8uuSpy5IvDFzTTAXzAkXj9nnUctPbNVMcyrOrvPA25IyyPPYEfN18LR%2Bvs%2BMQ0x8CMfdwZJR3K98ZOWFqnA3jnMGGMmKpmSQzQySs2GHvIpD%2BAbU4LpOY0Xp9nH9YMcQKbZI0its7F3YuOPh4kwcz%2BpsKuaSFhfAlzgp6rl%2BopbHciTaYw53cbBF9ovDVhjgZxbEi3a5xggQqc7Rsvof6Vzgi7jYYj0wOj7dTVaZuySpZLTKbzQXYKfDH2P7Pt2ZthYXurAUwf1pqJA%2F%2FgBLslwrJvXogOIMpxJsSp43DpxPnpThdYGy16vq3ZF6GWngxzQa4fPEJCP2OZD1FdqLLg9ROt%2F8dh6o6EXINnPMMiamb0GOqUBrQ3rBQe9gUMIUYjCAUjNcKA9w3wlXo8rPTjGbth%2BoixAVye0Dzw8KwlhuVcTTcBZQfgaQeDm1uxgCvIcLGugqsc2k1Nlo5y%2FSpNUIEOmRSO08uQCOYbI%2FT%2BRO0ViaPes084OejV4vcJ0uVZR0xxv1YllS7s%2Fo0EVsCm8lcVPTbVmTTYGOTSu%2BA1peRoA3zEyBdheXlc5fHeZcIe%2B5h8jUgWd8RWY&X-Amz-Signature=77b23c5e146e9b9db2c6332d66153a19c5bf4e53b0b535296b5dbd9ddf29e920&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQ6WLFD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC3AUlHf2%2FdQZUcLDG3WyQnzEmeNrnSMBKecWfuCptzDwIgJsxSUec%2BSfg%2FyM25B9qfiOCEE9e%2BZxXlp38v%2FDWx4REq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD4iOjcGCLKnvdW7LCrcA0aaP%2F0rQNwfWw3XKdt6D8qDDg8lY3JPLqw8r%2BchnW%2BUMKyDnpHQH451JBoawHvNd5FiBMs8ef2nGMkB2uuNurjcZBZ%2FXykLb%2FFwVRfECO%2F9%2FbVLDVGza5A2C7iLs9Qc1RnCQqtD6T2LoYKcL%2BQc0g2R96ZaNHch%2FOa2ymRgpyCbR%2BhUCl1XjJG1lDoy05JeVQghSSqXDG5ecqWUPh5aZS5j7L134wbjhZjE11rlJ5%2F94YvUUkxfTswJpB0fzO6T05u5Iw%2B6WXZg45OTdytKd8uuSpy5IvDFzTTAXzAkXj9nnUctPbNVMcyrOrvPA25IyyPPYEfN18LR%2Bvs%2BMQ0x8CMfdwZJR3K98ZOWFqnA3jnMGGMmKpmSQzQySs2GHvIpD%2BAbU4LpOY0Xp9nH9YMcQKbZI0its7F3YuOPh4kwcz%2BpsKuaSFhfAlzgp6rl%2BopbHciTaYw53cbBF9ovDVhjgZxbEi3a5xggQqc7Rsvof6Vzgi7jYYj0wOj7dTVaZuySpZLTKbzQXYKfDH2P7Pt2ZthYXurAUwf1pqJA%2F%2FgBLslwrJvXogOIMpxJsSp43DpxPnpThdYGy16vq3ZF6GWngxzQa4fPEJCP2OZD1FdqLLg9ROt%2F8dh6o6EXINnPMMiamb0GOqUBrQ3rBQe9gUMIUYjCAUjNcKA9w3wlXo8rPTjGbth%2BoixAVye0Dzw8KwlhuVcTTcBZQfgaQeDm1uxgCvIcLGugqsc2k1Nlo5y%2FSpNUIEOmRSO08uQCOYbI%2FT%2BRO0ViaPes084OejV4vcJ0uVZR0xxv1YllS7s%2Fo0EVsCm8lcVPTbVmTTYGOTSu%2BA1peRoA3zEyBdheXlc5fHeZcIe%2B5h8jUgWd8RWY&X-Amz-Signature=126a625f11869d2f57c5c85e708705a84315342ff3a237480abf070a78565997&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQ6WLFD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC3AUlHf2%2FdQZUcLDG3WyQnzEmeNrnSMBKecWfuCptzDwIgJsxSUec%2BSfg%2FyM25B9qfiOCEE9e%2BZxXlp38v%2FDWx4REq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD4iOjcGCLKnvdW7LCrcA0aaP%2F0rQNwfWw3XKdt6D8qDDg8lY3JPLqw8r%2BchnW%2BUMKyDnpHQH451JBoawHvNd5FiBMs8ef2nGMkB2uuNurjcZBZ%2FXykLb%2FFwVRfECO%2F9%2FbVLDVGza5A2C7iLs9Qc1RnCQqtD6T2LoYKcL%2BQc0g2R96ZaNHch%2FOa2ymRgpyCbR%2BhUCl1XjJG1lDoy05JeVQghSSqXDG5ecqWUPh5aZS5j7L134wbjhZjE11rlJ5%2F94YvUUkxfTswJpB0fzO6T05u5Iw%2B6WXZg45OTdytKd8uuSpy5IvDFzTTAXzAkXj9nnUctPbNVMcyrOrvPA25IyyPPYEfN18LR%2Bvs%2BMQ0x8CMfdwZJR3K98ZOWFqnA3jnMGGMmKpmSQzQySs2GHvIpD%2BAbU4LpOY0Xp9nH9YMcQKbZI0its7F3YuOPh4kwcz%2BpsKuaSFhfAlzgp6rl%2BopbHciTaYw53cbBF9ovDVhjgZxbEi3a5xggQqc7Rsvof6Vzgi7jYYj0wOj7dTVaZuySpZLTKbzQXYKfDH2P7Pt2ZthYXurAUwf1pqJA%2F%2FgBLslwrJvXogOIMpxJsSp43DpxPnpThdYGy16vq3ZF6GWngxzQa4fPEJCP2OZD1FdqLLg9ROt%2F8dh6o6EXINnPMMiamb0GOqUBrQ3rBQe9gUMIUYjCAUjNcKA9w3wlXo8rPTjGbth%2BoixAVye0Dzw8KwlhuVcTTcBZQfgaQeDm1uxgCvIcLGugqsc2k1Nlo5y%2FSpNUIEOmRSO08uQCOYbI%2FT%2BRO0ViaPes084OejV4vcJ0uVZR0xxv1YllS7s%2Fo0EVsCm8lcVPTbVmTTYGOTSu%2BA1peRoA3zEyBdheXlc5fHeZcIe%2B5h8jUgWd8RWY&X-Amz-Signature=9147918429ce0f997fab13246627a05f2da3e606e9568bb22840918521f2cf8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQ6WLFD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC3AUlHf2%2FdQZUcLDG3WyQnzEmeNrnSMBKecWfuCptzDwIgJsxSUec%2BSfg%2FyM25B9qfiOCEE9e%2BZxXlp38v%2FDWx4REq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD4iOjcGCLKnvdW7LCrcA0aaP%2F0rQNwfWw3XKdt6D8qDDg8lY3JPLqw8r%2BchnW%2BUMKyDnpHQH451JBoawHvNd5FiBMs8ef2nGMkB2uuNurjcZBZ%2FXykLb%2FFwVRfECO%2F9%2FbVLDVGza5A2C7iLs9Qc1RnCQqtD6T2LoYKcL%2BQc0g2R96ZaNHch%2FOa2ymRgpyCbR%2BhUCl1XjJG1lDoy05JeVQghSSqXDG5ecqWUPh5aZS5j7L134wbjhZjE11rlJ5%2F94YvUUkxfTswJpB0fzO6T05u5Iw%2B6WXZg45OTdytKd8uuSpy5IvDFzTTAXzAkXj9nnUctPbNVMcyrOrvPA25IyyPPYEfN18LR%2Bvs%2BMQ0x8CMfdwZJR3K98ZOWFqnA3jnMGGMmKpmSQzQySs2GHvIpD%2BAbU4LpOY0Xp9nH9YMcQKbZI0its7F3YuOPh4kwcz%2BpsKuaSFhfAlzgp6rl%2BopbHciTaYw53cbBF9ovDVhjgZxbEi3a5xggQqc7Rsvof6Vzgi7jYYj0wOj7dTVaZuySpZLTKbzQXYKfDH2P7Pt2ZthYXurAUwf1pqJA%2F%2FgBLslwrJvXogOIMpxJsSp43DpxPnpThdYGy16vq3ZF6GWngxzQa4fPEJCP2OZD1FdqLLg9ROt%2F8dh6o6EXINnPMMiamb0GOqUBrQ3rBQe9gUMIUYjCAUjNcKA9w3wlXo8rPTjGbth%2BoixAVye0Dzw8KwlhuVcTTcBZQfgaQeDm1uxgCvIcLGugqsc2k1Nlo5y%2FSpNUIEOmRSO08uQCOYbI%2FT%2BRO0ViaPes084OejV4vcJ0uVZR0xxv1YllS7s%2Fo0EVsCm8lcVPTbVmTTYGOTSu%2BA1peRoA3zEyBdheXlc5fHeZcIe%2B5h8jUgWd8RWY&X-Amz-Signature=c2b016a1808b2fb0fd0f87808c76eaffe2730e0e2a073a3c22d89fcd9ee9a839&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQ6WLFD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC3AUlHf2%2FdQZUcLDG3WyQnzEmeNrnSMBKecWfuCptzDwIgJsxSUec%2BSfg%2FyM25B9qfiOCEE9e%2BZxXlp38v%2FDWx4REq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD4iOjcGCLKnvdW7LCrcA0aaP%2F0rQNwfWw3XKdt6D8qDDg8lY3JPLqw8r%2BchnW%2BUMKyDnpHQH451JBoawHvNd5FiBMs8ef2nGMkB2uuNurjcZBZ%2FXykLb%2FFwVRfECO%2F9%2FbVLDVGza5A2C7iLs9Qc1RnCQqtD6T2LoYKcL%2BQc0g2R96ZaNHch%2FOa2ymRgpyCbR%2BhUCl1XjJG1lDoy05JeVQghSSqXDG5ecqWUPh5aZS5j7L134wbjhZjE11rlJ5%2F94YvUUkxfTswJpB0fzO6T05u5Iw%2B6WXZg45OTdytKd8uuSpy5IvDFzTTAXzAkXj9nnUctPbNVMcyrOrvPA25IyyPPYEfN18LR%2Bvs%2BMQ0x8CMfdwZJR3K98ZOWFqnA3jnMGGMmKpmSQzQySs2GHvIpD%2BAbU4LpOY0Xp9nH9YMcQKbZI0its7F3YuOPh4kwcz%2BpsKuaSFhfAlzgp6rl%2BopbHciTaYw53cbBF9ovDVhjgZxbEi3a5xggQqc7Rsvof6Vzgi7jYYj0wOj7dTVaZuySpZLTKbzQXYKfDH2P7Pt2ZthYXurAUwf1pqJA%2F%2FgBLslwrJvXogOIMpxJsSp43DpxPnpThdYGy16vq3ZF6GWngxzQa4fPEJCP2OZD1FdqLLg9ROt%2F8dh6o6EXINnPMMiamb0GOqUBrQ3rBQe9gUMIUYjCAUjNcKA9w3wlXo8rPTjGbth%2BoixAVye0Dzw8KwlhuVcTTcBZQfgaQeDm1uxgCvIcLGugqsc2k1Nlo5y%2FSpNUIEOmRSO08uQCOYbI%2FT%2BRO0ViaPes084OejV4vcJ0uVZR0xxv1YllS7s%2Fo0EVsCm8lcVPTbVmTTYGOTSu%2BA1peRoA3zEyBdheXlc5fHeZcIe%2B5h8jUgWd8RWY&X-Amz-Signature=c62ca93bdfcd64b1b8469999ec02def1e34da19296f1618f4de4e3e9588f71a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LQ6WLFD%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC3AUlHf2%2FdQZUcLDG3WyQnzEmeNrnSMBKecWfuCptzDwIgJsxSUec%2BSfg%2FyM25B9qfiOCEE9e%2BZxXlp38v%2FDWx4REq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDD4iOjcGCLKnvdW7LCrcA0aaP%2F0rQNwfWw3XKdt6D8qDDg8lY3JPLqw8r%2BchnW%2BUMKyDnpHQH451JBoawHvNd5FiBMs8ef2nGMkB2uuNurjcZBZ%2FXykLb%2FFwVRfECO%2F9%2FbVLDVGza5A2C7iLs9Qc1RnCQqtD6T2LoYKcL%2BQc0g2R96ZaNHch%2FOa2ymRgpyCbR%2BhUCl1XjJG1lDoy05JeVQghSSqXDG5ecqWUPh5aZS5j7L134wbjhZjE11rlJ5%2F94YvUUkxfTswJpB0fzO6T05u5Iw%2B6WXZg45OTdytKd8uuSpy5IvDFzTTAXzAkXj9nnUctPbNVMcyrOrvPA25IyyPPYEfN18LR%2Bvs%2BMQ0x8CMfdwZJR3K98ZOWFqnA3jnMGGMmKpmSQzQySs2GHvIpD%2BAbU4LpOY0Xp9nH9YMcQKbZI0its7F3YuOPh4kwcz%2BpsKuaSFhfAlzgp6rl%2BopbHciTaYw53cbBF9ovDVhjgZxbEi3a5xggQqc7Rsvof6Vzgi7jYYj0wOj7dTVaZuySpZLTKbzQXYKfDH2P7Pt2ZthYXurAUwf1pqJA%2F%2FgBLslwrJvXogOIMpxJsSp43DpxPnpThdYGy16vq3ZF6GWngxzQa4fPEJCP2OZD1FdqLLg9ROt%2F8dh6o6EXINnPMMiamb0GOqUBrQ3rBQe9gUMIUYjCAUjNcKA9w3wlXo8rPTjGbth%2BoixAVye0Dzw8KwlhuVcTTcBZQfgaQeDm1uxgCvIcLGugqsc2k1Nlo5y%2FSpNUIEOmRSO08uQCOYbI%2FT%2BRO0ViaPes084OejV4vcJ0uVZR0xxv1YllS7s%2Fo0EVsCm8lcVPTbVmTTYGOTSu%2BA1peRoA3zEyBdheXlc5fHeZcIe%2B5h8jUgWd8RWY&X-Amz-Signature=9c340cd373dd19a30396a6d1ca8e70d324168bb38243b578335dfdbe710ad402&X-Amz-SignedHeaders=host&x-id=GetObject)
