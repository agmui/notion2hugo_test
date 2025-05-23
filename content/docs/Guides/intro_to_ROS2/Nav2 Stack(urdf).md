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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEI4U7IV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDX3sr30WYbkRgfbYP05NewKRifZoju3%2BRqzaAZaXhNxQIgVyvPneb2fyCAt8gTuF1BAoW85DmTvw9h1vT5T0ov8IEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbHIMBh30Qwu95jkSrcA%2Fo0jChdo1k0KrTwk1iH4JZN4cOOvlDam2VBHEOw%2FVuMBfam5IiF2zEZ3EQuA9mg1G884tL5gw%2Fa%2FI1nzkA22xI%2FTxEjBaEeWrmw2Jmf%2FsY7UrQnug%2B77GrlJmQZbOB4TKhNhLdNZVAHVUwMkFOy9n%2FcwSwQ7X0XYmZawb7jCamq4o04U%2BrKZtnXPDgtKjOzqaaA22juBDbGzo1ls7iusCFyKAB1p4vos5%2B9MCYoCRtizQJ84zt50cF%2BfxBDE1M2%2BCWr0v1V4OWEPBZz9vToNZhsf750Zf5HTJ%2BDsYpEMNAJXgbQ9UTqrQe8jH5mZk4%2FD8qBGlt98HhhzgkoVmwRLHGtNnctsTWqTaFYMirViM3uOgJFNTLXEtPIpzX75Xz13gkXSRrqjtnlKhR5yoEDoQfmcVQhVOTVmwenKDuH4yjFBg8mv8d83Qyq3qtG6aCWq%2BjaHbTeawhS%2BXpFPSMIuY%2BCnsUcs9cOq6s0JxOZxrqbVd%2BZAhV91H0QoXnw%2BO3LeK5XWlMo%2FO9HanEy00u9n8yodbFWTSSQPEc%2BE9UYyJu2h8Q1PHFfKMykNBis1R6xdOZN6J2nIqHdKL5AOiwbkPGnQTzpE1%2FkQzWK%2BfB7jESSBkULcjr35rsETjDWMOnCv8EGOqUBTyailxJ3mdwkVKSKD710JutC2nx7dVP7LFYdUHlnPNLxwAHr3iGq7lltbLiWuu1zVtC9YuxvUaN7K%2BE%2FQSlYy9nasZbVJnYRBB2FfWucvWAPU11bnFZC%2FSWw%2Fs4U%2FgqPBzE5mph7rXrq%2FdJfMBW1%2BzyQOW5UiAOKhVJxmQc48fIeJ97daNkMTy%2BDU2%2B%2FbTroui17aBmF9x2BMLzZmJJpjKH4ARqD&X-Amz-Signature=7a8dd0ef88a0680d8c1fe0f3f9939b298e76d788378a2abcf9c65fed5cc97bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEI4U7IV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDX3sr30WYbkRgfbYP05NewKRifZoju3%2BRqzaAZaXhNxQIgVyvPneb2fyCAt8gTuF1BAoW85DmTvw9h1vT5T0ov8IEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbHIMBh30Qwu95jkSrcA%2Fo0jChdo1k0KrTwk1iH4JZN4cOOvlDam2VBHEOw%2FVuMBfam5IiF2zEZ3EQuA9mg1G884tL5gw%2Fa%2FI1nzkA22xI%2FTxEjBaEeWrmw2Jmf%2FsY7UrQnug%2B77GrlJmQZbOB4TKhNhLdNZVAHVUwMkFOy9n%2FcwSwQ7X0XYmZawb7jCamq4o04U%2BrKZtnXPDgtKjOzqaaA22juBDbGzo1ls7iusCFyKAB1p4vos5%2B9MCYoCRtizQJ84zt50cF%2BfxBDE1M2%2BCWr0v1V4OWEPBZz9vToNZhsf750Zf5HTJ%2BDsYpEMNAJXgbQ9UTqrQe8jH5mZk4%2FD8qBGlt98HhhzgkoVmwRLHGtNnctsTWqTaFYMirViM3uOgJFNTLXEtPIpzX75Xz13gkXSRrqjtnlKhR5yoEDoQfmcVQhVOTVmwenKDuH4yjFBg8mv8d83Qyq3qtG6aCWq%2BjaHbTeawhS%2BXpFPSMIuY%2BCnsUcs9cOq6s0JxOZxrqbVd%2BZAhV91H0QoXnw%2BO3LeK5XWlMo%2FO9HanEy00u9n8yodbFWTSSQPEc%2BE9UYyJu2h8Q1PHFfKMykNBis1R6xdOZN6J2nIqHdKL5AOiwbkPGnQTzpE1%2FkQzWK%2BfB7jESSBkULcjr35rsETjDWMOnCv8EGOqUBTyailxJ3mdwkVKSKD710JutC2nx7dVP7LFYdUHlnPNLxwAHr3iGq7lltbLiWuu1zVtC9YuxvUaN7K%2BE%2FQSlYy9nasZbVJnYRBB2FfWucvWAPU11bnFZC%2FSWw%2Fs4U%2FgqPBzE5mph7rXrq%2FdJfMBW1%2BzyQOW5UiAOKhVJxmQc48fIeJ97daNkMTy%2BDU2%2B%2FbTroui17aBmF9x2BMLzZmJJpjKH4ARqD&X-Amz-Signature=2eb68dbd7885781dd01b68cfeb96cee8e60660c439a82749b39ce3932c862313&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEI4U7IV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDX3sr30WYbkRgfbYP05NewKRifZoju3%2BRqzaAZaXhNxQIgVyvPneb2fyCAt8gTuF1BAoW85DmTvw9h1vT5T0ov8IEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbHIMBh30Qwu95jkSrcA%2Fo0jChdo1k0KrTwk1iH4JZN4cOOvlDam2VBHEOw%2FVuMBfam5IiF2zEZ3EQuA9mg1G884tL5gw%2Fa%2FI1nzkA22xI%2FTxEjBaEeWrmw2Jmf%2FsY7UrQnug%2B77GrlJmQZbOB4TKhNhLdNZVAHVUwMkFOy9n%2FcwSwQ7X0XYmZawb7jCamq4o04U%2BrKZtnXPDgtKjOzqaaA22juBDbGzo1ls7iusCFyKAB1p4vos5%2B9MCYoCRtizQJ84zt50cF%2BfxBDE1M2%2BCWr0v1V4OWEPBZz9vToNZhsf750Zf5HTJ%2BDsYpEMNAJXgbQ9UTqrQe8jH5mZk4%2FD8qBGlt98HhhzgkoVmwRLHGtNnctsTWqTaFYMirViM3uOgJFNTLXEtPIpzX75Xz13gkXSRrqjtnlKhR5yoEDoQfmcVQhVOTVmwenKDuH4yjFBg8mv8d83Qyq3qtG6aCWq%2BjaHbTeawhS%2BXpFPSMIuY%2BCnsUcs9cOq6s0JxOZxrqbVd%2BZAhV91H0QoXnw%2BO3LeK5XWlMo%2FO9HanEy00u9n8yodbFWTSSQPEc%2BE9UYyJu2h8Q1PHFfKMykNBis1R6xdOZN6J2nIqHdKL5AOiwbkPGnQTzpE1%2FkQzWK%2BfB7jESSBkULcjr35rsETjDWMOnCv8EGOqUBTyailxJ3mdwkVKSKD710JutC2nx7dVP7LFYdUHlnPNLxwAHr3iGq7lltbLiWuu1zVtC9YuxvUaN7K%2BE%2FQSlYy9nasZbVJnYRBB2FfWucvWAPU11bnFZC%2FSWw%2Fs4U%2FgqPBzE5mph7rXrq%2FdJfMBW1%2BzyQOW5UiAOKhVJxmQc48fIeJ97daNkMTy%2BDU2%2B%2FbTroui17aBmF9x2BMLzZmJJpjKH4ARqD&X-Amz-Signature=8589a53a1d74167dba30be847138df1478865817e7442c582fee82b4d8ace9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEI4U7IV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDX3sr30WYbkRgfbYP05NewKRifZoju3%2BRqzaAZaXhNxQIgVyvPneb2fyCAt8gTuF1BAoW85DmTvw9h1vT5T0ov8IEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbHIMBh30Qwu95jkSrcA%2Fo0jChdo1k0KrTwk1iH4JZN4cOOvlDam2VBHEOw%2FVuMBfam5IiF2zEZ3EQuA9mg1G884tL5gw%2Fa%2FI1nzkA22xI%2FTxEjBaEeWrmw2Jmf%2FsY7UrQnug%2B77GrlJmQZbOB4TKhNhLdNZVAHVUwMkFOy9n%2FcwSwQ7X0XYmZawb7jCamq4o04U%2BrKZtnXPDgtKjOzqaaA22juBDbGzo1ls7iusCFyKAB1p4vos5%2B9MCYoCRtizQJ84zt50cF%2BfxBDE1M2%2BCWr0v1V4OWEPBZz9vToNZhsf750Zf5HTJ%2BDsYpEMNAJXgbQ9UTqrQe8jH5mZk4%2FD8qBGlt98HhhzgkoVmwRLHGtNnctsTWqTaFYMirViM3uOgJFNTLXEtPIpzX75Xz13gkXSRrqjtnlKhR5yoEDoQfmcVQhVOTVmwenKDuH4yjFBg8mv8d83Qyq3qtG6aCWq%2BjaHbTeawhS%2BXpFPSMIuY%2BCnsUcs9cOq6s0JxOZxrqbVd%2BZAhV91H0QoXnw%2BO3LeK5XWlMo%2FO9HanEy00u9n8yodbFWTSSQPEc%2BE9UYyJu2h8Q1PHFfKMykNBis1R6xdOZN6J2nIqHdKL5AOiwbkPGnQTzpE1%2FkQzWK%2BfB7jESSBkULcjr35rsETjDWMOnCv8EGOqUBTyailxJ3mdwkVKSKD710JutC2nx7dVP7LFYdUHlnPNLxwAHr3iGq7lltbLiWuu1zVtC9YuxvUaN7K%2BE%2FQSlYy9nasZbVJnYRBB2FfWucvWAPU11bnFZC%2FSWw%2Fs4U%2FgqPBzE5mph7rXrq%2FdJfMBW1%2BzyQOW5UiAOKhVJxmQc48fIeJ97daNkMTy%2BDU2%2B%2FbTroui17aBmF9x2BMLzZmJJpjKH4ARqD&X-Amz-Signature=312156c9dc98afb8b6d39d3d18588a0bd3acf08af2a453a01ded91f50ea8d170&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEI4U7IV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDX3sr30WYbkRgfbYP05NewKRifZoju3%2BRqzaAZaXhNxQIgVyvPneb2fyCAt8gTuF1BAoW85DmTvw9h1vT5T0ov8IEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbHIMBh30Qwu95jkSrcA%2Fo0jChdo1k0KrTwk1iH4JZN4cOOvlDam2VBHEOw%2FVuMBfam5IiF2zEZ3EQuA9mg1G884tL5gw%2Fa%2FI1nzkA22xI%2FTxEjBaEeWrmw2Jmf%2FsY7UrQnug%2B77GrlJmQZbOB4TKhNhLdNZVAHVUwMkFOy9n%2FcwSwQ7X0XYmZawb7jCamq4o04U%2BrKZtnXPDgtKjOzqaaA22juBDbGzo1ls7iusCFyKAB1p4vos5%2B9MCYoCRtizQJ84zt50cF%2BfxBDE1M2%2BCWr0v1V4OWEPBZz9vToNZhsf750Zf5HTJ%2BDsYpEMNAJXgbQ9UTqrQe8jH5mZk4%2FD8qBGlt98HhhzgkoVmwRLHGtNnctsTWqTaFYMirViM3uOgJFNTLXEtPIpzX75Xz13gkXSRrqjtnlKhR5yoEDoQfmcVQhVOTVmwenKDuH4yjFBg8mv8d83Qyq3qtG6aCWq%2BjaHbTeawhS%2BXpFPSMIuY%2BCnsUcs9cOq6s0JxOZxrqbVd%2BZAhV91H0QoXnw%2BO3LeK5XWlMo%2FO9HanEy00u9n8yodbFWTSSQPEc%2BE9UYyJu2h8Q1PHFfKMykNBis1R6xdOZN6J2nIqHdKL5AOiwbkPGnQTzpE1%2FkQzWK%2BfB7jESSBkULcjr35rsETjDWMOnCv8EGOqUBTyailxJ3mdwkVKSKD710JutC2nx7dVP7LFYdUHlnPNLxwAHr3iGq7lltbLiWuu1zVtC9YuxvUaN7K%2BE%2FQSlYy9nasZbVJnYRBB2FfWucvWAPU11bnFZC%2FSWw%2Fs4U%2FgqPBzE5mph7rXrq%2FdJfMBW1%2BzyQOW5UiAOKhVJxmQc48fIeJ97daNkMTy%2BDU2%2B%2FbTroui17aBmF9x2BMLzZmJJpjKH4ARqD&X-Amz-Signature=cb6207fac04a7e7a9a0d04e57d706d2ae913c1b2a51f06cf98caaaa1b42847cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEI4U7IV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDX3sr30WYbkRgfbYP05NewKRifZoju3%2BRqzaAZaXhNxQIgVyvPneb2fyCAt8gTuF1BAoW85DmTvw9h1vT5T0ov8IEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbHIMBh30Qwu95jkSrcA%2Fo0jChdo1k0KrTwk1iH4JZN4cOOvlDam2VBHEOw%2FVuMBfam5IiF2zEZ3EQuA9mg1G884tL5gw%2Fa%2FI1nzkA22xI%2FTxEjBaEeWrmw2Jmf%2FsY7UrQnug%2B77GrlJmQZbOB4TKhNhLdNZVAHVUwMkFOy9n%2FcwSwQ7X0XYmZawb7jCamq4o04U%2BrKZtnXPDgtKjOzqaaA22juBDbGzo1ls7iusCFyKAB1p4vos5%2B9MCYoCRtizQJ84zt50cF%2BfxBDE1M2%2BCWr0v1V4OWEPBZz9vToNZhsf750Zf5HTJ%2BDsYpEMNAJXgbQ9UTqrQe8jH5mZk4%2FD8qBGlt98HhhzgkoVmwRLHGtNnctsTWqTaFYMirViM3uOgJFNTLXEtPIpzX75Xz13gkXSRrqjtnlKhR5yoEDoQfmcVQhVOTVmwenKDuH4yjFBg8mv8d83Qyq3qtG6aCWq%2BjaHbTeawhS%2BXpFPSMIuY%2BCnsUcs9cOq6s0JxOZxrqbVd%2BZAhV91H0QoXnw%2BO3LeK5XWlMo%2FO9HanEy00u9n8yodbFWTSSQPEc%2BE9UYyJu2h8Q1PHFfKMykNBis1R6xdOZN6J2nIqHdKL5AOiwbkPGnQTzpE1%2FkQzWK%2BfB7jESSBkULcjr35rsETjDWMOnCv8EGOqUBTyailxJ3mdwkVKSKD710JutC2nx7dVP7LFYdUHlnPNLxwAHr3iGq7lltbLiWuu1zVtC9YuxvUaN7K%2BE%2FQSlYy9nasZbVJnYRBB2FfWucvWAPU11bnFZC%2FSWw%2Fs4U%2FgqPBzE5mph7rXrq%2FdJfMBW1%2BzyQOW5UiAOKhVJxmQc48fIeJ97daNkMTy%2BDU2%2B%2FbTroui17aBmF9x2BMLzZmJJpjKH4ARqD&X-Amz-Signature=965eb976b172613be8965a123654a898bdcb93cebc6661f25d4eb5b5709850ae&X-Amz-SignedHeaders=host&x-id=GetObject)
