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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGUAI7Z2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2TbFz%2FeUSztUIQqx5MrPBdyQ0ntnYYB11rAaVcZcvKAiEAqbOkZyGaBgUMfWRSg1rHGvhvBYHliaIffsuz45zqBbYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPkctX%2Bm6UW9UEpPCrcA4GNpX1%2FcBkPaGkQd3xi4ukH0su7KTquSHjBbXbLz4KJeLCLEksOsbpV5gic7tgasFfqZAS37InNTRNWdSl4dLFJPtrmtjeWR27ELiuMZ9UnVXAJjPpaGA38Oqj42lTrtX1H0ZFFRXNbL4CGIKyvHU3bsLgvF5HJjneC6TzmpiHXGsw9PGqg4ey0zE0a8blJttJhd3lP7YEmwz9UY3u2mH5xQE%2FY1btnPPy5IHOvxIFSsNhaGVkQvzqiisyARMMF53Q3P3DvQZGMjXTkvCy8xBR32xxYOyRSwJvZ4dms6ThFO257LZp9YyXxEtTShQaEu0%2FkONiyyvvOWYpZeZ%2FB3xWicpa%2FXIFh2KxJuCF%2BzL36ek7TeJLMkahak%2BXBleyGAE5dQ0TwZMoREKTThhdF64LME8VMe0J4TB6X%2By%2Fi47wOMwm9O5PkNyXAg8tye8Mgu5NAfxGQC1LZUdDCIA1uyP7%2BzLdmI5%2FY2wHjZZqaFWIlx9qV4ZepiqQ%2FEe4HXswXYQwHDz2vEZUgJxi7E9p45KAc3liZsG6s0lrwSTT%2FJ6gGFKGB8%2B8U763qEYIexWUnM%2FzCxvHCuQO7dqFdk7OB0MmmSLZG1CpTcuMA%2BObL7RMXSNjzAw%2BHvVQX9AFfMKqzosIGOqUBni7ZXuikULIgwexypjrSx2d4FKgfZloXqcxUGAaJLYF1m89V9Jb2QI2q89ibAZ%2B6OgmxhCKe5jB3P%2BB1nzVR3%2FGLYB3uDF5v2jen%2FMBWdQqEJOH4UzVLwfLPDIBsKIrv%2FmCufmMzrIhAFVvqq1b01loQ1GcVOUM%2Bl%2FslSh16LJsPUh6uF8gZ4zcP0BOUqdqhge8dQk4IY0ziypAy6bFa8uLH%2F3Tw&X-Amz-Signature=5519202a83950c1d97741773e1122e8bb3af60fa8f3e203c87e55b211f68a5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGUAI7Z2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2TbFz%2FeUSztUIQqx5MrPBdyQ0ntnYYB11rAaVcZcvKAiEAqbOkZyGaBgUMfWRSg1rHGvhvBYHliaIffsuz45zqBbYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPkctX%2Bm6UW9UEpPCrcA4GNpX1%2FcBkPaGkQd3xi4ukH0su7KTquSHjBbXbLz4KJeLCLEksOsbpV5gic7tgasFfqZAS37InNTRNWdSl4dLFJPtrmtjeWR27ELiuMZ9UnVXAJjPpaGA38Oqj42lTrtX1H0ZFFRXNbL4CGIKyvHU3bsLgvF5HJjneC6TzmpiHXGsw9PGqg4ey0zE0a8blJttJhd3lP7YEmwz9UY3u2mH5xQE%2FY1btnPPy5IHOvxIFSsNhaGVkQvzqiisyARMMF53Q3P3DvQZGMjXTkvCy8xBR32xxYOyRSwJvZ4dms6ThFO257LZp9YyXxEtTShQaEu0%2FkONiyyvvOWYpZeZ%2FB3xWicpa%2FXIFh2KxJuCF%2BzL36ek7TeJLMkahak%2BXBleyGAE5dQ0TwZMoREKTThhdF64LME8VMe0J4TB6X%2By%2Fi47wOMwm9O5PkNyXAg8tye8Mgu5NAfxGQC1LZUdDCIA1uyP7%2BzLdmI5%2FY2wHjZZqaFWIlx9qV4ZepiqQ%2FEe4HXswXYQwHDz2vEZUgJxi7E9p45KAc3liZsG6s0lrwSTT%2FJ6gGFKGB8%2B8U763qEYIexWUnM%2FzCxvHCuQO7dqFdk7OB0MmmSLZG1CpTcuMA%2BObL7RMXSNjzAw%2BHvVQX9AFfMKqzosIGOqUBni7ZXuikULIgwexypjrSx2d4FKgfZloXqcxUGAaJLYF1m89V9Jb2QI2q89ibAZ%2B6OgmxhCKe5jB3P%2BB1nzVR3%2FGLYB3uDF5v2jen%2FMBWdQqEJOH4UzVLwfLPDIBsKIrv%2FmCufmMzrIhAFVvqq1b01loQ1GcVOUM%2Bl%2FslSh16LJsPUh6uF8gZ4zcP0BOUqdqhge8dQk4IY0ziypAy6bFa8uLH%2F3Tw&X-Amz-Signature=96cc10e211e032e60928510862ae51ab657f583cd3ebca3a88655f7dc8ce7552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGUAI7Z2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2TbFz%2FeUSztUIQqx5MrPBdyQ0ntnYYB11rAaVcZcvKAiEAqbOkZyGaBgUMfWRSg1rHGvhvBYHliaIffsuz45zqBbYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPkctX%2Bm6UW9UEpPCrcA4GNpX1%2FcBkPaGkQd3xi4ukH0su7KTquSHjBbXbLz4KJeLCLEksOsbpV5gic7tgasFfqZAS37InNTRNWdSl4dLFJPtrmtjeWR27ELiuMZ9UnVXAJjPpaGA38Oqj42lTrtX1H0ZFFRXNbL4CGIKyvHU3bsLgvF5HJjneC6TzmpiHXGsw9PGqg4ey0zE0a8blJttJhd3lP7YEmwz9UY3u2mH5xQE%2FY1btnPPy5IHOvxIFSsNhaGVkQvzqiisyARMMF53Q3P3DvQZGMjXTkvCy8xBR32xxYOyRSwJvZ4dms6ThFO257LZp9YyXxEtTShQaEu0%2FkONiyyvvOWYpZeZ%2FB3xWicpa%2FXIFh2KxJuCF%2BzL36ek7TeJLMkahak%2BXBleyGAE5dQ0TwZMoREKTThhdF64LME8VMe0J4TB6X%2By%2Fi47wOMwm9O5PkNyXAg8tye8Mgu5NAfxGQC1LZUdDCIA1uyP7%2BzLdmI5%2FY2wHjZZqaFWIlx9qV4ZepiqQ%2FEe4HXswXYQwHDz2vEZUgJxi7E9p45KAc3liZsG6s0lrwSTT%2FJ6gGFKGB8%2B8U763qEYIexWUnM%2FzCxvHCuQO7dqFdk7OB0MmmSLZG1CpTcuMA%2BObL7RMXSNjzAw%2BHvVQX9AFfMKqzosIGOqUBni7ZXuikULIgwexypjrSx2d4FKgfZloXqcxUGAaJLYF1m89V9Jb2QI2q89ibAZ%2B6OgmxhCKe5jB3P%2BB1nzVR3%2FGLYB3uDF5v2jen%2FMBWdQqEJOH4UzVLwfLPDIBsKIrv%2FmCufmMzrIhAFVvqq1b01loQ1GcVOUM%2Bl%2FslSh16LJsPUh6uF8gZ4zcP0BOUqdqhge8dQk4IY0ziypAy6bFa8uLH%2F3Tw&X-Amz-Signature=872b637844f220cc850e5fe17529cc0b4fdb01f0239cf549f5f105bc34b74f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGUAI7Z2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2TbFz%2FeUSztUIQqx5MrPBdyQ0ntnYYB11rAaVcZcvKAiEAqbOkZyGaBgUMfWRSg1rHGvhvBYHliaIffsuz45zqBbYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPkctX%2Bm6UW9UEpPCrcA4GNpX1%2FcBkPaGkQd3xi4ukH0su7KTquSHjBbXbLz4KJeLCLEksOsbpV5gic7tgasFfqZAS37InNTRNWdSl4dLFJPtrmtjeWR27ELiuMZ9UnVXAJjPpaGA38Oqj42lTrtX1H0ZFFRXNbL4CGIKyvHU3bsLgvF5HJjneC6TzmpiHXGsw9PGqg4ey0zE0a8blJttJhd3lP7YEmwz9UY3u2mH5xQE%2FY1btnPPy5IHOvxIFSsNhaGVkQvzqiisyARMMF53Q3P3DvQZGMjXTkvCy8xBR32xxYOyRSwJvZ4dms6ThFO257LZp9YyXxEtTShQaEu0%2FkONiyyvvOWYpZeZ%2FB3xWicpa%2FXIFh2KxJuCF%2BzL36ek7TeJLMkahak%2BXBleyGAE5dQ0TwZMoREKTThhdF64LME8VMe0J4TB6X%2By%2Fi47wOMwm9O5PkNyXAg8tye8Mgu5NAfxGQC1LZUdDCIA1uyP7%2BzLdmI5%2FY2wHjZZqaFWIlx9qV4ZepiqQ%2FEe4HXswXYQwHDz2vEZUgJxi7E9p45KAc3liZsG6s0lrwSTT%2FJ6gGFKGB8%2B8U763qEYIexWUnM%2FzCxvHCuQO7dqFdk7OB0MmmSLZG1CpTcuMA%2BObL7RMXSNjzAw%2BHvVQX9AFfMKqzosIGOqUBni7ZXuikULIgwexypjrSx2d4FKgfZloXqcxUGAaJLYF1m89V9Jb2QI2q89ibAZ%2B6OgmxhCKe5jB3P%2BB1nzVR3%2FGLYB3uDF5v2jen%2FMBWdQqEJOH4UzVLwfLPDIBsKIrv%2FmCufmMzrIhAFVvqq1b01loQ1GcVOUM%2Bl%2FslSh16LJsPUh6uF8gZ4zcP0BOUqdqhge8dQk4IY0ziypAy6bFa8uLH%2F3Tw&X-Amz-Signature=3f19059d0013066b18cceaf5b6da57abaf1f600c540df23d9e4f38459ac0ccf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGUAI7Z2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2TbFz%2FeUSztUIQqx5MrPBdyQ0ntnYYB11rAaVcZcvKAiEAqbOkZyGaBgUMfWRSg1rHGvhvBYHliaIffsuz45zqBbYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPkctX%2Bm6UW9UEpPCrcA4GNpX1%2FcBkPaGkQd3xi4ukH0su7KTquSHjBbXbLz4KJeLCLEksOsbpV5gic7tgasFfqZAS37InNTRNWdSl4dLFJPtrmtjeWR27ELiuMZ9UnVXAJjPpaGA38Oqj42lTrtX1H0ZFFRXNbL4CGIKyvHU3bsLgvF5HJjneC6TzmpiHXGsw9PGqg4ey0zE0a8blJttJhd3lP7YEmwz9UY3u2mH5xQE%2FY1btnPPy5IHOvxIFSsNhaGVkQvzqiisyARMMF53Q3P3DvQZGMjXTkvCy8xBR32xxYOyRSwJvZ4dms6ThFO257LZp9YyXxEtTShQaEu0%2FkONiyyvvOWYpZeZ%2FB3xWicpa%2FXIFh2KxJuCF%2BzL36ek7TeJLMkahak%2BXBleyGAE5dQ0TwZMoREKTThhdF64LME8VMe0J4TB6X%2By%2Fi47wOMwm9O5PkNyXAg8tye8Mgu5NAfxGQC1LZUdDCIA1uyP7%2BzLdmI5%2FY2wHjZZqaFWIlx9qV4ZepiqQ%2FEe4HXswXYQwHDz2vEZUgJxi7E9p45KAc3liZsG6s0lrwSTT%2FJ6gGFKGB8%2B8U763qEYIexWUnM%2FzCxvHCuQO7dqFdk7OB0MmmSLZG1CpTcuMA%2BObL7RMXSNjzAw%2BHvVQX9AFfMKqzosIGOqUBni7ZXuikULIgwexypjrSx2d4FKgfZloXqcxUGAaJLYF1m89V9Jb2QI2q89ibAZ%2B6OgmxhCKe5jB3P%2BB1nzVR3%2FGLYB3uDF5v2jen%2FMBWdQqEJOH4UzVLwfLPDIBsKIrv%2FmCufmMzrIhAFVvqq1b01loQ1GcVOUM%2Bl%2FslSh16LJsPUh6uF8gZ4zcP0BOUqdqhge8dQk4IY0ziypAy6bFa8uLH%2F3Tw&X-Amz-Signature=10b2b4483a637493320c3077fc172d94a680f74b7fe486ad923e06f847b98a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGUAI7Z2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2TbFz%2FeUSztUIQqx5MrPBdyQ0ntnYYB11rAaVcZcvKAiEAqbOkZyGaBgUMfWRSg1rHGvhvBYHliaIffsuz45zqBbYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPkctX%2Bm6UW9UEpPCrcA4GNpX1%2FcBkPaGkQd3xi4ukH0su7KTquSHjBbXbLz4KJeLCLEksOsbpV5gic7tgasFfqZAS37InNTRNWdSl4dLFJPtrmtjeWR27ELiuMZ9UnVXAJjPpaGA38Oqj42lTrtX1H0ZFFRXNbL4CGIKyvHU3bsLgvF5HJjneC6TzmpiHXGsw9PGqg4ey0zE0a8blJttJhd3lP7YEmwz9UY3u2mH5xQE%2FY1btnPPy5IHOvxIFSsNhaGVkQvzqiisyARMMF53Q3P3DvQZGMjXTkvCy8xBR32xxYOyRSwJvZ4dms6ThFO257LZp9YyXxEtTShQaEu0%2FkONiyyvvOWYpZeZ%2FB3xWicpa%2FXIFh2KxJuCF%2BzL36ek7TeJLMkahak%2BXBleyGAE5dQ0TwZMoREKTThhdF64LME8VMe0J4TB6X%2By%2Fi47wOMwm9O5PkNyXAg8tye8Mgu5NAfxGQC1LZUdDCIA1uyP7%2BzLdmI5%2FY2wHjZZqaFWIlx9qV4ZepiqQ%2FEe4HXswXYQwHDz2vEZUgJxi7E9p45KAc3liZsG6s0lrwSTT%2FJ6gGFKGB8%2B8U763qEYIexWUnM%2FzCxvHCuQO7dqFdk7OB0MmmSLZG1CpTcuMA%2BObL7RMXSNjzAw%2BHvVQX9AFfMKqzosIGOqUBni7ZXuikULIgwexypjrSx2d4FKgfZloXqcxUGAaJLYF1m89V9Jb2QI2q89ibAZ%2B6OgmxhCKe5jB3P%2BB1nzVR3%2FGLYB3uDF5v2jen%2FMBWdQqEJOH4UzVLwfLPDIBsKIrv%2FmCufmMzrIhAFVvqq1b01loQ1GcVOUM%2Bl%2FslSh16LJsPUh6uF8gZ4zcP0BOUqdqhge8dQk4IY0ziypAy6bFa8uLH%2F3Tw&X-Amz-Signature=02a59b4a2b59edd4a01f7afb622eae43dc50189e387a5a57c0b2ab4f86e593de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
