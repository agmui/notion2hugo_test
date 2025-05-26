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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXAKQRQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZDdLgEWlOLznFamjmV04uZS1f9O7aFJDrXblVy%2FsRwgIhALPvPwwv2k9Pfz4Adzc8W1tWFdAl%2BDJIg6rmT%2BsWz%2BqQKv8DCEsQABoMNjM3NDIzMTgzODA1Igy8Qu2G5uYE9gJx3N0q3ANsyJCET21zqq1dAqNB%2B6D54YPgvukB6%2Fp9BToIan9OUdtvpzJaycOlePeQPBOt2pt5P1N4uy2BKymeNvmmzOUGBwHH23k4E%2FfVJ6W8cIbEe5mCG2mARfEgJ5qV2dOXyuCNWqu%2BFwd4oa7%2BggNjkP7sio5cVQzeIeV9amsAd8IJDp4DAajypDHPe%2FtbDKB4rc3xtUFhWi0RxjtbjZ4F75gh34yIrtbDR27E6seTJqxCIQOLjDfGwxNBRkYj0ENbzSF2oS98hQvtmgIxUCb%2FnQ8GLKC%2BAWYt6keelm7i2gUOswov5ggknHmaW7lEdDs%2FDxB5EfYIeD%2BZH1XGZoOogyvoZphx%2FbXCV%2BRhk8jY92gVnrlYwbam4fdgghF2vX9uvvNLt%2BN2yFqNkySpQYEXs8twdhb%2FbRSjGyxpeTrsw%2F5m4w25DQ2HlAUfLXnrQY7jAOsl37OSHtVfTgwIzCfQPSD0pp85estO2zSl4Z%2FK8aJocZt6B5qIePA5%2By9C1DncfbIrQvb36tBbLuh6rbwQIUMS3i7FC21k9XrznlHN%2B1o9tnZAIQ1n4pq8wGqyMtJvbvyMotwil7hFm%2FrTd%2FKKk0DfwvU8EK6LqoADz3DNIV63zwvWHNhpeNEViX1UbzCL0NLBBjqkAY5HZRMKA5Gvcw%2FoopqwNxvGYw8W1nqNYyzPDKKhbsX1B%2Fl7QLfX6bH%2FJ8%2FDsiWrrSUApBlzYH9aZ4WMuuZsK10YVq8XT5%2FxPJAocVPCq06MTgvl4PJgbpiyGO%2FZD6U%2BSmf6Sv2dUxiqhDoPgwwAGfk%2FYeR4vDuqvzn%2FfYDzgJcPyIAgxcaqIwI%2FdM5AUSLtbuu4l9mylxv6fqmzmUtLxoCQUfq8&X-Amz-Signature=bdfa4ab942b6e5d34d6f793f39f05da95794bcfe5d5e382ac555da223c592007&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXAKQRQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZDdLgEWlOLznFamjmV04uZS1f9O7aFJDrXblVy%2FsRwgIhALPvPwwv2k9Pfz4Adzc8W1tWFdAl%2BDJIg6rmT%2BsWz%2BqQKv8DCEsQABoMNjM3NDIzMTgzODA1Igy8Qu2G5uYE9gJx3N0q3ANsyJCET21zqq1dAqNB%2B6D54YPgvukB6%2Fp9BToIan9OUdtvpzJaycOlePeQPBOt2pt5P1N4uy2BKymeNvmmzOUGBwHH23k4E%2FfVJ6W8cIbEe5mCG2mARfEgJ5qV2dOXyuCNWqu%2BFwd4oa7%2BggNjkP7sio5cVQzeIeV9amsAd8IJDp4DAajypDHPe%2FtbDKB4rc3xtUFhWi0RxjtbjZ4F75gh34yIrtbDR27E6seTJqxCIQOLjDfGwxNBRkYj0ENbzSF2oS98hQvtmgIxUCb%2FnQ8GLKC%2BAWYt6keelm7i2gUOswov5ggknHmaW7lEdDs%2FDxB5EfYIeD%2BZH1XGZoOogyvoZphx%2FbXCV%2BRhk8jY92gVnrlYwbam4fdgghF2vX9uvvNLt%2BN2yFqNkySpQYEXs8twdhb%2FbRSjGyxpeTrsw%2F5m4w25DQ2HlAUfLXnrQY7jAOsl37OSHtVfTgwIzCfQPSD0pp85estO2zSl4Z%2FK8aJocZt6B5qIePA5%2By9C1DncfbIrQvb36tBbLuh6rbwQIUMS3i7FC21k9XrznlHN%2B1o9tnZAIQ1n4pq8wGqyMtJvbvyMotwil7hFm%2FrTd%2FKKk0DfwvU8EK6LqoADz3DNIV63zwvWHNhpeNEViX1UbzCL0NLBBjqkAY5HZRMKA5Gvcw%2FoopqwNxvGYw8W1nqNYyzPDKKhbsX1B%2Fl7QLfX6bH%2FJ8%2FDsiWrrSUApBlzYH9aZ4WMuuZsK10YVq8XT5%2FxPJAocVPCq06MTgvl4PJgbpiyGO%2FZD6U%2BSmf6Sv2dUxiqhDoPgwwAGfk%2FYeR4vDuqvzn%2FfYDzgJcPyIAgxcaqIwI%2FdM5AUSLtbuu4l9mylxv6fqmzmUtLxoCQUfq8&X-Amz-Signature=17e06508508c6747c43985ffc2dc93316ee85d091722e928815407fee2cbcf68&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXAKQRQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZDdLgEWlOLznFamjmV04uZS1f9O7aFJDrXblVy%2FsRwgIhALPvPwwv2k9Pfz4Adzc8W1tWFdAl%2BDJIg6rmT%2BsWz%2BqQKv8DCEsQABoMNjM3NDIzMTgzODA1Igy8Qu2G5uYE9gJx3N0q3ANsyJCET21zqq1dAqNB%2B6D54YPgvukB6%2Fp9BToIan9OUdtvpzJaycOlePeQPBOt2pt5P1N4uy2BKymeNvmmzOUGBwHH23k4E%2FfVJ6W8cIbEe5mCG2mARfEgJ5qV2dOXyuCNWqu%2BFwd4oa7%2BggNjkP7sio5cVQzeIeV9amsAd8IJDp4DAajypDHPe%2FtbDKB4rc3xtUFhWi0RxjtbjZ4F75gh34yIrtbDR27E6seTJqxCIQOLjDfGwxNBRkYj0ENbzSF2oS98hQvtmgIxUCb%2FnQ8GLKC%2BAWYt6keelm7i2gUOswov5ggknHmaW7lEdDs%2FDxB5EfYIeD%2BZH1XGZoOogyvoZphx%2FbXCV%2BRhk8jY92gVnrlYwbam4fdgghF2vX9uvvNLt%2BN2yFqNkySpQYEXs8twdhb%2FbRSjGyxpeTrsw%2F5m4w25DQ2HlAUfLXnrQY7jAOsl37OSHtVfTgwIzCfQPSD0pp85estO2zSl4Z%2FK8aJocZt6B5qIePA5%2By9C1DncfbIrQvb36tBbLuh6rbwQIUMS3i7FC21k9XrznlHN%2B1o9tnZAIQ1n4pq8wGqyMtJvbvyMotwil7hFm%2FrTd%2FKKk0DfwvU8EK6LqoADz3DNIV63zwvWHNhpeNEViX1UbzCL0NLBBjqkAY5HZRMKA5Gvcw%2FoopqwNxvGYw8W1nqNYyzPDKKhbsX1B%2Fl7QLfX6bH%2FJ8%2FDsiWrrSUApBlzYH9aZ4WMuuZsK10YVq8XT5%2FxPJAocVPCq06MTgvl4PJgbpiyGO%2FZD6U%2BSmf6Sv2dUxiqhDoPgwwAGfk%2FYeR4vDuqvzn%2FfYDzgJcPyIAgxcaqIwI%2FdM5AUSLtbuu4l9mylxv6fqmzmUtLxoCQUfq8&X-Amz-Signature=806dec335dca5fc894a79af5efaefcc712495526b392e3003ea7f6704d127d60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXAKQRQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZDdLgEWlOLznFamjmV04uZS1f9O7aFJDrXblVy%2FsRwgIhALPvPwwv2k9Pfz4Adzc8W1tWFdAl%2BDJIg6rmT%2BsWz%2BqQKv8DCEsQABoMNjM3NDIzMTgzODA1Igy8Qu2G5uYE9gJx3N0q3ANsyJCET21zqq1dAqNB%2B6D54YPgvukB6%2Fp9BToIan9OUdtvpzJaycOlePeQPBOt2pt5P1N4uy2BKymeNvmmzOUGBwHH23k4E%2FfVJ6W8cIbEe5mCG2mARfEgJ5qV2dOXyuCNWqu%2BFwd4oa7%2BggNjkP7sio5cVQzeIeV9amsAd8IJDp4DAajypDHPe%2FtbDKB4rc3xtUFhWi0RxjtbjZ4F75gh34yIrtbDR27E6seTJqxCIQOLjDfGwxNBRkYj0ENbzSF2oS98hQvtmgIxUCb%2FnQ8GLKC%2BAWYt6keelm7i2gUOswov5ggknHmaW7lEdDs%2FDxB5EfYIeD%2BZH1XGZoOogyvoZphx%2FbXCV%2BRhk8jY92gVnrlYwbam4fdgghF2vX9uvvNLt%2BN2yFqNkySpQYEXs8twdhb%2FbRSjGyxpeTrsw%2F5m4w25DQ2HlAUfLXnrQY7jAOsl37OSHtVfTgwIzCfQPSD0pp85estO2zSl4Z%2FK8aJocZt6B5qIePA5%2By9C1DncfbIrQvb36tBbLuh6rbwQIUMS3i7FC21k9XrznlHN%2B1o9tnZAIQ1n4pq8wGqyMtJvbvyMotwil7hFm%2FrTd%2FKKk0DfwvU8EK6LqoADz3DNIV63zwvWHNhpeNEViX1UbzCL0NLBBjqkAY5HZRMKA5Gvcw%2FoopqwNxvGYw8W1nqNYyzPDKKhbsX1B%2Fl7QLfX6bH%2FJ8%2FDsiWrrSUApBlzYH9aZ4WMuuZsK10YVq8XT5%2FxPJAocVPCq06MTgvl4PJgbpiyGO%2FZD6U%2BSmf6Sv2dUxiqhDoPgwwAGfk%2FYeR4vDuqvzn%2FfYDzgJcPyIAgxcaqIwI%2FdM5AUSLtbuu4l9mylxv6fqmzmUtLxoCQUfq8&X-Amz-Signature=bffd5533e54b7371dc168ab9442727fe93e000927d45603d19f008d53d3fc75f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXAKQRQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZDdLgEWlOLznFamjmV04uZS1f9O7aFJDrXblVy%2FsRwgIhALPvPwwv2k9Pfz4Adzc8W1tWFdAl%2BDJIg6rmT%2BsWz%2BqQKv8DCEsQABoMNjM3NDIzMTgzODA1Igy8Qu2G5uYE9gJx3N0q3ANsyJCET21zqq1dAqNB%2B6D54YPgvukB6%2Fp9BToIan9OUdtvpzJaycOlePeQPBOt2pt5P1N4uy2BKymeNvmmzOUGBwHH23k4E%2FfVJ6W8cIbEe5mCG2mARfEgJ5qV2dOXyuCNWqu%2BFwd4oa7%2BggNjkP7sio5cVQzeIeV9amsAd8IJDp4DAajypDHPe%2FtbDKB4rc3xtUFhWi0RxjtbjZ4F75gh34yIrtbDR27E6seTJqxCIQOLjDfGwxNBRkYj0ENbzSF2oS98hQvtmgIxUCb%2FnQ8GLKC%2BAWYt6keelm7i2gUOswov5ggknHmaW7lEdDs%2FDxB5EfYIeD%2BZH1XGZoOogyvoZphx%2FbXCV%2BRhk8jY92gVnrlYwbam4fdgghF2vX9uvvNLt%2BN2yFqNkySpQYEXs8twdhb%2FbRSjGyxpeTrsw%2F5m4w25DQ2HlAUfLXnrQY7jAOsl37OSHtVfTgwIzCfQPSD0pp85estO2zSl4Z%2FK8aJocZt6B5qIePA5%2By9C1DncfbIrQvb36tBbLuh6rbwQIUMS3i7FC21k9XrznlHN%2B1o9tnZAIQ1n4pq8wGqyMtJvbvyMotwil7hFm%2FrTd%2FKKk0DfwvU8EK6LqoADz3DNIV63zwvWHNhpeNEViX1UbzCL0NLBBjqkAY5HZRMKA5Gvcw%2FoopqwNxvGYw8W1nqNYyzPDKKhbsX1B%2Fl7QLfX6bH%2FJ8%2FDsiWrrSUApBlzYH9aZ4WMuuZsK10YVq8XT5%2FxPJAocVPCq06MTgvl4PJgbpiyGO%2FZD6U%2BSmf6Sv2dUxiqhDoPgwwAGfk%2FYeR4vDuqvzn%2FfYDzgJcPyIAgxcaqIwI%2FdM5AUSLtbuu4l9mylxv6fqmzmUtLxoCQUfq8&X-Amz-Signature=b63f9653a1e7f2a0fd5fe43f9a3a3c10d37cb427832a4835ff03c49cc248d626&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXAKQRQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZDdLgEWlOLznFamjmV04uZS1f9O7aFJDrXblVy%2FsRwgIhALPvPwwv2k9Pfz4Adzc8W1tWFdAl%2BDJIg6rmT%2BsWz%2BqQKv8DCEsQABoMNjM3NDIzMTgzODA1Igy8Qu2G5uYE9gJx3N0q3ANsyJCET21zqq1dAqNB%2B6D54YPgvukB6%2Fp9BToIan9OUdtvpzJaycOlePeQPBOt2pt5P1N4uy2BKymeNvmmzOUGBwHH23k4E%2FfVJ6W8cIbEe5mCG2mARfEgJ5qV2dOXyuCNWqu%2BFwd4oa7%2BggNjkP7sio5cVQzeIeV9amsAd8IJDp4DAajypDHPe%2FtbDKB4rc3xtUFhWi0RxjtbjZ4F75gh34yIrtbDR27E6seTJqxCIQOLjDfGwxNBRkYj0ENbzSF2oS98hQvtmgIxUCb%2FnQ8GLKC%2BAWYt6keelm7i2gUOswov5ggknHmaW7lEdDs%2FDxB5EfYIeD%2BZH1XGZoOogyvoZphx%2FbXCV%2BRhk8jY92gVnrlYwbam4fdgghF2vX9uvvNLt%2BN2yFqNkySpQYEXs8twdhb%2FbRSjGyxpeTrsw%2F5m4w25DQ2HlAUfLXnrQY7jAOsl37OSHtVfTgwIzCfQPSD0pp85estO2zSl4Z%2FK8aJocZt6B5qIePA5%2By9C1DncfbIrQvb36tBbLuh6rbwQIUMS3i7FC21k9XrznlHN%2B1o9tnZAIQ1n4pq8wGqyMtJvbvyMotwil7hFm%2FrTd%2FKKk0DfwvU8EK6LqoADz3DNIV63zwvWHNhpeNEViX1UbzCL0NLBBjqkAY5HZRMKA5Gvcw%2FoopqwNxvGYw8W1nqNYyzPDKKhbsX1B%2Fl7QLfX6bH%2FJ8%2FDsiWrrSUApBlzYH9aZ4WMuuZsK10YVq8XT5%2FxPJAocVPCq06MTgvl4PJgbpiyGO%2FZD6U%2BSmf6Sv2dUxiqhDoPgwwAGfk%2FYeR4vDuqvzn%2FfYDzgJcPyIAgxcaqIwI%2FdM5AUSLtbuu4l9mylxv6fqmzmUtLxoCQUfq8&X-Amz-Signature=ea60bfb6d906e1262b8e743a5eb6019fdc16961309cefe7d4662e7af279f8a53&X-Amz-SignedHeaders=host&x-id=GetObject)
