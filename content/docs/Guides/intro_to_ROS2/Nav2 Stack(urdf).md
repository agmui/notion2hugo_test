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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CC34BCI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDIqwM5iVKaIjmFjvZZw0FOk2sFiR7lz3QlU%2Bi3jL9I5AIgDhk9EUTxGBxMy9L9ZynKYmD5YomqoF7rQyD4A3kRFW0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXGB8QHnmOMTQYDpircA5UEG5JGCQxOy4oK7oDu72WuIaK0J6sXwRG%2FzCAeQQ53O8dHvCTG%2B3NaL7LGm5kGSQzAo3WghGimZW2ogfA24ol7aYh7QhPTRYgNQhQSt9cKkiHVdbfM%2FmByyjpzmCwvfsKvzE97S0oA6jTB1PLpnfjMyaN08lHlKv8pr6lzYhUhcIJ3kAwQzuvBbsYy%2BpUxRG1oEwrztGnYvxwEyo0rWxpiMCWhXWEi6W30WL8LtlYOpw03yHq83jMotpWtRjDv4UqWhc%2FIl5Kv2SkzzCPoBvGXyOSvZ5U3sVJGhMmO%2FFIGpHh4hZVVGU3JNqLFCLARROh%2BZDRNgriXPa29Or0FbAjyuLZekq2tC9avBv%2BoEJqCV3osREUUJh7dedIfvNSIvd%2B9l%2FSPZUS3ntuG41VdolkfOw9%2B8wLqX%2BFitPP8KDigz8Gqi06VGgEh3sr6r%2FPw3BjlH2%2FhUl4qJvsARKa2qmLRVZRYEO%2Fnfbg5oals1YN8yrLraMMH1vTmpvbfKyGX0BwIVLfL4HDFTnZ4VxCsHb%2B4jvRbdHiV8AO3JZNt%2BVSeiSakgGTJWG2UwbdMb6tl8pDk0JP8dUDZ3Sev1PyUMxxbl6zOnDOhFPX85aUeepwdR%2FNCaUMMWIzRUFYFMOrK%2BMIGOqUBs6Lw62DDuNrDDkH%2BjJBG2ozMTPS8awKYLXb8xQt5Np10d%2Br9HwMYYhSDEVQo7PmnwQUCfha98NlRQc7UpiVmZlOx2wlbY8EbZWLmLb%2F8OYwkebYSzN4rCvoNei1B29yr6r7UVjuUotapaXS6PEFRxzd1%2BCtbUGmPeZr038%2BpChTmk7Y9PcZFVeF1CG25mwLMlkygYQJ31tye07fVZb5gOXX0fG6f&X-Amz-Signature=97fb9e1f0b86c02e99754426988a552655f172bdefc34938cf19304ded799f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CC34BCI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDIqwM5iVKaIjmFjvZZw0FOk2sFiR7lz3QlU%2Bi3jL9I5AIgDhk9EUTxGBxMy9L9ZynKYmD5YomqoF7rQyD4A3kRFW0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXGB8QHnmOMTQYDpircA5UEG5JGCQxOy4oK7oDu72WuIaK0J6sXwRG%2FzCAeQQ53O8dHvCTG%2B3NaL7LGm5kGSQzAo3WghGimZW2ogfA24ol7aYh7QhPTRYgNQhQSt9cKkiHVdbfM%2FmByyjpzmCwvfsKvzE97S0oA6jTB1PLpnfjMyaN08lHlKv8pr6lzYhUhcIJ3kAwQzuvBbsYy%2BpUxRG1oEwrztGnYvxwEyo0rWxpiMCWhXWEi6W30WL8LtlYOpw03yHq83jMotpWtRjDv4UqWhc%2FIl5Kv2SkzzCPoBvGXyOSvZ5U3sVJGhMmO%2FFIGpHh4hZVVGU3JNqLFCLARROh%2BZDRNgriXPa29Or0FbAjyuLZekq2tC9avBv%2BoEJqCV3osREUUJh7dedIfvNSIvd%2B9l%2FSPZUS3ntuG41VdolkfOw9%2B8wLqX%2BFitPP8KDigz8Gqi06VGgEh3sr6r%2FPw3BjlH2%2FhUl4qJvsARKa2qmLRVZRYEO%2Fnfbg5oals1YN8yrLraMMH1vTmpvbfKyGX0BwIVLfL4HDFTnZ4VxCsHb%2B4jvRbdHiV8AO3JZNt%2BVSeiSakgGTJWG2UwbdMb6tl8pDk0JP8dUDZ3Sev1PyUMxxbl6zOnDOhFPX85aUeepwdR%2FNCaUMMWIzRUFYFMOrK%2BMIGOqUBs6Lw62DDuNrDDkH%2BjJBG2ozMTPS8awKYLXb8xQt5Np10d%2Br9HwMYYhSDEVQo7PmnwQUCfha98NlRQc7UpiVmZlOx2wlbY8EbZWLmLb%2F8OYwkebYSzN4rCvoNei1B29yr6r7UVjuUotapaXS6PEFRxzd1%2BCtbUGmPeZr038%2BpChTmk7Y9PcZFVeF1CG25mwLMlkygYQJ31tye07fVZb5gOXX0fG6f&X-Amz-Signature=74b63e57a42d5bc609e252dec826b20a0786f969232988db93c41a5dffa389db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CC34BCI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDIqwM5iVKaIjmFjvZZw0FOk2sFiR7lz3QlU%2Bi3jL9I5AIgDhk9EUTxGBxMy9L9ZynKYmD5YomqoF7rQyD4A3kRFW0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXGB8QHnmOMTQYDpircA5UEG5JGCQxOy4oK7oDu72WuIaK0J6sXwRG%2FzCAeQQ53O8dHvCTG%2B3NaL7LGm5kGSQzAo3WghGimZW2ogfA24ol7aYh7QhPTRYgNQhQSt9cKkiHVdbfM%2FmByyjpzmCwvfsKvzE97S0oA6jTB1PLpnfjMyaN08lHlKv8pr6lzYhUhcIJ3kAwQzuvBbsYy%2BpUxRG1oEwrztGnYvxwEyo0rWxpiMCWhXWEi6W30WL8LtlYOpw03yHq83jMotpWtRjDv4UqWhc%2FIl5Kv2SkzzCPoBvGXyOSvZ5U3sVJGhMmO%2FFIGpHh4hZVVGU3JNqLFCLARROh%2BZDRNgriXPa29Or0FbAjyuLZekq2tC9avBv%2BoEJqCV3osREUUJh7dedIfvNSIvd%2B9l%2FSPZUS3ntuG41VdolkfOw9%2B8wLqX%2BFitPP8KDigz8Gqi06VGgEh3sr6r%2FPw3BjlH2%2FhUl4qJvsARKa2qmLRVZRYEO%2Fnfbg5oals1YN8yrLraMMH1vTmpvbfKyGX0BwIVLfL4HDFTnZ4VxCsHb%2B4jvRbdHiV8AO3JZNt%2BVSeiSakgGTJWG2UwbdMb6tl8pDk0JP8dUDZ3Sev1PyUMxxbl6zOnDOhFPX85aUeepwdR%2FNCaUMMWIzRUFYFMOrK%2BMIGOqUBs6Lw62DDuNrDDkH%2BjJBG2ozMTPS8awKYLXb8xQt5Np10d%2Br9HwMYYhSDEVQo7PmnwQUCfha98NlRQc7UpiVmZlOx2wlbY8EbZWLmLb%2F8OYwkebYSzN4rCvoNei1B29yr6r7UVjuUotapaXS6PEFRxzd1%2BCtbUGmPeZr038%2BpChTmk7Y9PcZFVeF1CG25mwLMlkygYQJ31tye07fVZb5gOXX0fG6f&X-Amz-Signature=8a1d7df9328e653e5bb499f46a8d3ef337e71871091d43e16c4c47b30e234067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CC34BCI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDIqwM5iVKaIjmFjvZZw0FOk2sFiR7lz3QlU%2Bi3jL9I5AIgDhk9EUTxGBxMy9L9ZynKYmD5YomqoF7rQyD4A3kRFW0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXGB8QHnmOMTQYDpircA5UEG5JGCQxOy4oK7oDu72WuIaK0J6sXwRG%2FzCAeQQ53O8dHvCTG%2B3NaL7LGm5kGSQzAo3WghGimZW2ogfA24ol7aYh7QhPTRYgNQhQSt9cKkiHVdbfM%2FmByyjpzmCwvfsKvzE97S0oA6jTB1PLpnfjMyaN08lHlKv8pr6lzYhUhcIJ3kAwQzuvBbsYy%2BpUxRG1oEwrztGnYvxwEyo0rWxpiMCWhXWEi6W30WL8LtlYOpw03yHq83jMotpWtRjDv4UqWhc%2FIl5Kv2SkzzCPoBvGXyOSvZ5U3sVJGhMmO%2FFIGpHh4hZVVGU3JNqLFCLARROh%2BZDRNgriXPa29Or0FbAjyuLZekq2tC9avBv%2BoEJqCV3osREUUJh7dedIfvNSIvd%2B9l%2FSPZUS3ntuG41VdolkfOw9%2B8wLqX%2BFitPP8KDigz8Gqi06VGgEh3sr6r%2FPw3BjlH2%2FhUl4qJvsARKa2qmLRVZRYEO%2Fnfbg5oals1YN8yrLraMMH1vTmpvbfKyGX0BwIVLfL4HDFTnZ4VxCsHb%2B4jvRbdHiV8AO3JZNt%2BVSeiSakgGTJWG2UwbdMb6tl8pDk0JP8dUDZ3Sev1PyUMxxbl6zOnDOhFPX85aUeepwdR%2FNCaUMMWIzRUFYFMOrK%2BMIGOqUBs6Lw62DDuNrDDkH%2BjJBG2ozMTPS8awKYLXb8xQt5Np10d%2Br9HwMYYhSDEVQo7PmnwQUCfha98NlRQc7UpiVmZlOx2wlbY8EbZWLmLb%2F8OYwkebYSzN4rCvoNei1B29yr6r7UVjuUotapaXS6PEFRxzd1%2BCtbUGmPeZr038%2BpChTmk7Y9PcZFVeF1CG25mwLMlkygYQJ31tye07fVZb5gOXX0fG6f&X-Amz-Signature=2311da776d2ec9777eed3a19307e74123a0faceca0fa04349b8ab01a478035eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CC34BCI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDIqwM5iVKaIjmFjvZZw0FOk2sFiR7lz3QlU%2Bi3jL9I5AIgDhk9EUTxGBxMy9L9ZynKYmD5YomqoF7rQyD4A3kRFW0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXGB8QHnmOMTQYDpircA5UEG5JGCQxOy4oK7oDu72WuIaK0J6sXwRG%2FzCAeQQ53O8dHvCTG%2B3NaL7LGm5kGSQzAo3WghGimZW2ogfA24ol7aYh7QhPTRYgNQhQSt9cKkiHVdbfM%2FmByyjpzmCwvfsKvzE97S0oA6jTB1PLpnfjMyaN08lHlKv8pr6lzYhUhcIJ3kAwQzuvBbsYy%2BpUxRG1oEwrztGnYvxwEyo0rWxpiMCWhXWEi6W30WL8LtlYOpw03yHq83jMotpWtRjDv4UqWhc%2FIl5Kv2SkzzCPoBvGXyOSvZ5U3sVJGhMmO%2FFIGpHh4hZVVGU3JNqLFCLARROh%2BZDRNgriXPa29Or0FbAjyuLZekq2tC9avBv%2BoEJqCV3osREUUJh7dedIfvNSIvd%2B9l%2FSPZUS3ntuG41VdolkfOw9%2B8wLqX%2BFitPP8KDigz8Gqi06VGgEh3sr6r%2FPw3BjlH2%2FhUl4qJvsARKa2qmLRVZRYEO%2Fnfbg5oals1YN8yrLraMMH1vTmpvbfKyGX0BwIVLfL4HDFTnZ4VxCsHb%2B4jvRbdHiV8AO3JZNt%2BVSeiSakgGTJWG2UwbdMb6tl8pDk0JP8dUDZ3Sev1PyUMxxbl6zOnDOhFPX85aUeepwdR%2FNCaUMMWIzRUFYFMOrK%2BMIGOqUBs6Lw62DDuNrDDkH%2BjJBG2ozMTPS8awKYLXb8xQt5Np10d%2Br9HwMYYhSDEVQo7PmnwQUCfha98NlRQc7UpiVmZlOx2wlbY8EbZWLmLb%2F8OYwkebYSzN4rCvoNei1B29yr6r7UVjuUotapaXS6PEFRxzd1%2BCtbUGmPeZr038%2BpChTmk7Y9PcZFVeF1CG25mwLMlkygYQJ31tye07fVZb5gOXX0fG6f&X-Amz-Signature=8c7f67fd01e56da54c4216f1d300f96494c0b68ad49993e2dc6a567183e995b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CC34BCI%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDIqwM5iVKaIjmFjvZZw0FOk2sFiR7lz3QlU%2Bi3jL9I5AIgDhk9EUTxGBxMy9L9ZynKYmD5YomqoF7rQyD4A3kRFW0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDGXGB8QHnmOMTQYDpircA5UEG5JGCQxOy4oK7oDu72WuIaK0J6sXwRG%2FzCAeQQ53O8dHvCTG%2B3NaL7LGm5kGSQzAo3WghGimZW2ogfA24ol7aYh7QhPTRYgNQhQSt9cKkiHVdbfM%2FmByyjpzmCwvfsKvzE97S0oA6jTB1PLpnfjMyaN08lHlKv8pr6lzYhUhcIJ3kAwQzuvBbsYy%2BpUxRG1oEwrztGnYvxwEyo0rWxpiMCWhXWEi6W30WL8LtlYOpw03yHq83jMotpWtRjDv4UqWhc%2FIl5Kv2SkzzCPoBvGXyOSvZ5U3sVJGhMmO%2FFIGpHh4hZVVGU3JNqLFCLARROh%2BZDRNgriXPa29Or0FbAjyuLZekq2tC9avBv%2BoEJqCV3osREUUJh7dedIfvNSIvd%2B9l%2FSPZUS3ntuG41VdolkfOw9%2B8wLqX%2BFitPP8KDigz8Gqi06VGgEh3sr6r%2FPw3BjlH2%2FhUl4qJvsARKa2qmLRVZRYEO%2Fnfbg5oals1YN8yrLraMMH1vTmpvbfKyGX0BwIVLfL4HDFTnZ4VxCsHb%2B4jvRbdHiV8AO3JZNt%2BVSeiSakgGTJWG2UwbdMb6tl8pDk0JP8dUDZ3Sev1PyUMxxbl6zOnDOhFPX85aUeepwdR%2FNCaUMMWIzRUFYFMOrK%2BMIGOqUBs6Lw62DDuNrDDkH%2BjJBG2ozMTPS8awKYLXb8xQt5Np10d%2Br9HwMYYhSDEVQo7PmnwQUCfha98NlRQc7UpiVmZlOx2wlbY8EbZWLmLb%2F8OYwkebYSzN4rCvoNei1B29yr6r7UVjuUotapaXS6PEFRxzd1%2BCtbUGmPeZr038%2BpChTmk7Y9PcZFVeF1CG25mwLMlkygYQJ31tye07fVZb5gOXX0fG6f&X-Amz-Signature=89345deccdd8753683a153127e2e69211881c23f766f02f9f21aef4a27c48036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
