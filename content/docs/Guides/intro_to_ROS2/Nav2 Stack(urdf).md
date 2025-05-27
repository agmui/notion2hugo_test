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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKQJPNN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBVBKj5A2GzZSrqqjkCbpx2eJ7cN3DKuRfc2GWrcl4VAIgfrbiCB%2BzOVDGPja6S6p30Tciw6s0MzjWYtUKuEbjckwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOtyDekPks5VyhVHyCrcA4W%2FtGKbiZwR0JOaQuhQKCeeYLMGbxQDKmXiQyfXUJDobmwXwOiuhr3Z3056yMx0wKiIOLwpaMkEh4fY%2Fma%2BO7hFSuM3cLR82dtJgLTtWBSFZDQwQtex1d9W9G2Ogf14Q3HzwItHZCLKjQT7qVixHLNki7c7DQGME0ARLCsAoFQP1rd4u152%2B5OaakdmrCTPKg61zA4Ysgd%2B1kXXIDCDRgu4t6HQ9Fd859686nuU0se%2FFIyjSVB1%2ByNFPLlDjuqPm4mrdYiLU6eXWhzDq8GA%2Bf62UUY7D3tjHHEcIsk4nI5ZsNPBmnfI1NpIBfgsUh4rZQsEJWsnhmFlQ5vbew%2FJqBYlTQWWu0viCK3upbyqQf%2FzyHpDmMs95CoBHGPplvOnl0T95KoAcXFx4%2F2IYC0j2H2bYh73dYW1WPZq342n5vtqpoWLIdnYj9hFXXADg37qbpFJql5Lm9RjlOlp3H26NZrOZmEmpkSKmc0XVIHb3qBxA4jtQhE55gMv4gJ8qFNWtwJLuh8o%2B9HZO8X%2F%2BocV8RAka59HFFH8RZR3RVzn71ZvSz%2BTnKSfVcG6hnWrKMD3rJLmz5nuP1BLsD85unwakmyM3%2F6nZNeEe7pFDCP7yBSyM2kToMW1i1RJgMWDML7k1cEGOqUBb1U1VbNs54%2Bh1znwEgGQgni5071f7OLx3VqE5co9Dq2XtXveKv3nXCuAamUXxMMEVTJIjhksQOlUWt699Ku986e0ZdOtNlu9%2FPABUqx9g%2F2ZljVRXXM%2FHOrp8497gb3HycDdyU609tVoBtNeCvS1nc1WkTvgvu8CZ6GYKzRfOfXR8NfQ9rpGiCadf%2BLK8ExFWEjdG0KoLMtlYN20h%2BqqabmyHZrV&X-Amz-Signature=666b8b68e733783d84bb2476103988c34d74feff6f171aab46c11899e6d8d516&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKQJPNN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBVBKj5A2GzZSrqqjkCbpx2eJ7cN3DKuRfc2GWrcl4VAIgfrbiCB%2BzOVDGPja6S6p30Tciw6s0MzjWYtUKuEbjckwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOtyDekPks5VyhVHyCrcA4W%2FtGKbiZwR0JOaQuhQKCeeYLMGbxQDKmXiQyfXUJDobmwXwOiuhr3Z3056yMx0wKiIOLwpaMkEh4fY%2Fma%2BO7hFSuM3cLR82dtJgLTtWBSFZDQwQtex1d9W9G2Ogf14Q3HzwItHZCLKjQT7qVixHLNki7c7DQGME0ARLCsAoFQP1rd4u152%2B5OaakdmrCTPKg61zA4Ysgd%2B1kXXIDCDRgu4t6HQ9Fd859686nuU0se%2FFIyjSVB1%2ByNFPLlDjuqPm4mrdYiLU6eXWhzDq8GA%2Bf62UUY7D3tjHHEcIsk4nI5ZsNPBmnfI1NpIBfgsUh4rZQsEJWsnhmFlQ5vbew%2FJqBYlTQWWu0viCK3upbyqQf%2FzyHpDmMs95CoBHGPplvOnl0T95KoAcXFx4%2F2IYC0j2H2bYh73dYW1WPZq342n5vtqpoWLIdnYj9hFXXADg37qbpFJql5Lm9RjlOlp3H26NZrOZmEmpkSKmc0XVIHb3qBxA4jtQhE55gMv4gJ8qFNWtwJLuh8o%2B9HZO8X%2F%2BocV8RAka59HFFH8RZR3RVzn71ZvSz%2BTnKSfVcG6hnWrKMD3rJLmz5nuP1BLsD85unwakmyM3%2F6nZNeEe7pFDCP7yBSyM2kToMW1i1RJgMWDML7k1cEGOqUBb1U1VbNs54%2Bh1znwEgGQgni5071f7OLx3VqE5co9Dq2XtXveKv3nXCuAamUXxMMEVTJIjhksQOlUWt699Ku986e0ZdOtNlu9%2FPABUqx9g%2F2ZljVRXXM%2FHOrp8497gb3HycDdyU609tVoBtNeCvS1nc1WkTvgvu8CZ6GYKzRfOfXR8NfQ9rpGiCadf%2BLK8ExFWEjdG0KoLMtlYN20h%2BqqabmyHZrV&X-Amz-Signature=16cadb5a806078a593c956c72f474155ba1a2b5cfd6c9a1bd63b76641465ba50&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKQJPNN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBVBKj5A2GzZSrqqjkCbpx2eJ7cN3DKuRfc2GWrcl4VAIgfrbiCB%2BzOVDGPja6S6p30Tciw6s0MzjWYtUKuEbjckwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOtyDekPks5VyhVHyCrcA4W%2FtGKbiZwR0JOaQuhQKCeeYLMGbxQDKmXiQyfXUJDobmwXwOiuhr3Z3056yMx0wKiIOLwpaMkEh4fY%2Fma%2BO7hFSuM3cLR82dtJgLTtWBSFZDQwQtex1d9W9G2Ogf14Q3HzwItHZCLKjQT7qVixHLNki7c7DQGME0ARLCsAoFQP1rd4u152%2B5OaakdmrCTPKg61zA4Ysgd%2B1kXXIDCDRgu4t6HQ9Fd859686nuU0se%2FFIyjSVB1%2ByNFPLlDjuqPm4mrdYiLU6eXWhzDq8GA%2Bf62UUY7D3tjHHEcIsk4nI5ZsNPBmnfI1NpIBfgsUh4rZQsEJWsnhmFlQ5vbew%2FJqBYlTQWWu0viCK3upbyqQf%2FzyHpDmMs95CoBHGPplvOnl0T95KoAcXFx4%2F2IYC0j2H2bYh73dYW1WPZq342n5vtqpoWLIdnYj9hFXXADg37qbpFJql5Lm9RjlOlp3H26NZrOZmEmpkSKmc0XVIHb3qBxA4jtQhE55gMv4gJ8qFNWtwJLuh8o%2B9HZO8X%2F%2BocV8RAka59HFFH8RZR3RVzn71ZvSz%2BTnKSfVcG6hnWrKMD3rJLmz5nuP1BLsD85unwakmyM3%2F6nZNeEe7pFDCP7yBSyM2kToMW1i1RJgMWDML7k1cEGOqUBb1U1VbNs54%2Bh1znwEgGQgni5071f7OLx3VqE5co9Dq2XtXveKv3nXCuAamUXxMMEVTJIjhksQOlUWt699Ku986e0ZdOtNlu9%2FPABUqx9g%2F2ZljVRXXM%2FHOrp8497gb3HycDdyU609tVoBtNeCvS1nc1WkTvgvu8CZ6GYKzRfOfXR8NfQ9rpGiCadf%2BLK8ExFWEjdG0KoLMtlYN20h%2BqqabmyHZrV&X-Amz-Signature=f485d4899186ece3a2b21efb97946a320c8681abd53c21a97a00dd51805cfb24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKQJPNN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBVBKj5A2GzZSrqqjkCbpx2eJ7cN3DKuRfc2GWrcl4VAIgfrbiCB%2BzOVDGPja6S6p30Tciw6s0MzjWYtUKuEbjckwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOtyDekPks5VyhVHyCrcA4W%2FtGKbiZwR0JOaQuhQKCeeYLMGbxQDKmXiQyfXUJDobmwXwOiuhr3Z3056yMx0wKiIOLwpaMkEh4fY%2Fma%2BO7hFSuM3cLR82dtJgLTtWBSFZDQwQtex1d9W9G2Ogf14Q3HzwItHZCLKjQT7qVixHLNki7c7DQGME0ARLCsAoFQP1rd4u152%2B5OaakdmrCTPKg61zA4Ysgd%2B1kXXIDCDRgu4t6HQ9Fd859686nuU0se%2FFIyjSVB1%2ByNFPLlDjuqPm4mrdYiLU6eXWhzDq8GA%2Bf62UUY7D3tjHHEcIsk4nI5ZsNPBmnfI1NpIBfgsUh4rZQsEJWsnhmFlQ5vbew%2FJqBYlTQWWu0viCK3upbyqQf%2FzyHpDmMs95CoBHGPplvOnl0T95KoAcXFx4%2F2IYC0j2H2bYh73dYW1WPZq342n5vtqpoWLIdnYj9hFXXADg37qbpFJql5Lm9RjlOlp3H26NZrOZmEmpkSKmc0XVIHb3qBxA4jtQhE55gMv4gJ8qFNWtwJLuh8o%2B9HZO8X%2F%2BocV8RAka59HFFH8RZR3RVzn71ZvSz%2BTnKSfVcG6hnWrKMD3rJLmz5nuP1BLsD85unwakmyM3%2F6nZNeEe7pFDCP7yBSyM2kToMW1i1RJgMWDML7k1cEGOqUBb1U1VbNs54%2Bh1znwEgGQgni5071f7OLx3VqE5co9Dq2XtXveKv3nXCuAamUXxMMEVTJIjhksQOlUWt699Ku986e0ZdOtNlu9%2FPABUqx9g%2F2ZljVRXXM%2FHOrp8497gb3HycDdyU609tVoBtNeCvS1nc1WkTvgvu8CZ6GYKzRfOfXR8NfQ9rpGiCadf%2BLK8ExFWEjdG0KoLMtlYN20h%2BqqabmyHZrV&X-Amz-Signature=daf311003aac58429d5dca2788a0638bc810ba60842743c35b2dcb4dcba43072&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKQJPNN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBVBKj5A2GzZSrqqjkCbpx2eJ7cN3DKuRfc2GWrcl4VAIgfrbiCB%2BzOVDGPja6S6p30Tciw6s0MzjWYtUKuEbjckwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOtyDekPks5VyhVHyCrcA4W%2FtGKbiZwR0JOaQuhQKCeeYLMGbxQDKmXiQyfXUJDobmwXwOiuhr3Z3056yMx0wKiIOLwpaMkEh4fY%2Fma%2BO7hFSuM3cLR82dtJgLTtWBSFZDQwQtex1d9W9G2Ogf14Q3HzwItHZCLKjQT7qVixHLNki7c7DQGME0ARLCsAoFQP1rd4u152%2B5OaakdmrCTPKg61zA4Ysgd%2B1kXXIDCDRgu4t6HQ9Fd859686nuU0se%2FFIyjSVB1%2ByNFPLlDjuqPm4mrdYiLU6eXWhzDq8GA%2Bf62UUY7D3tjHHEcIsk4nI5ZsNPBmnfI1NpIBfgsUh4rZQsEJWsnhmFlQ5vbew%2FJqBYlTQWWu0viCK3upbyqQf%2FzyHpDmMs95CoBHGPplvOnl0T95KoAcXFx4%2F2IYC0j2H2bYh73dYW1WPZq342n5vtqpoWLIdnYj9hFXXADg37qbpFJql5Lm9RjlOlp3H26NZrOZmEmpkSKmc0XVIHb3qBxA4jtQhE55gMv4gJ8qFNWtwJLuh8o%2B9HZO8X%2F%2BocV8RAka59HFFH8RZR3RVzn71ZvSz%2BTnKSfVcG6hnWrKMD3rJLmz5nuP1BLsD85unwakmyM3%2F6nZNeEe7pFDCP7yBSyM2kToMW1i1RJgMWDML7k1cEGOqUBb1U1VbNs54%2Bh1znwEgGQgni5071f7OLx3VqE5co9Dq2XtXveKv3nXCuAamUXxMMEVTJIjhksQOlUWt699Ku986e0ZdOtNlu9%2FPABUqx9g%2F2ZljVRXXM%2FHOrp8497gb3HycDdyU609tVoBtNeCvS1nc1WkTvgvu8CZ6GYKzRfOfXR8NfQ9rpGiCadf%2BLK8ExFWEjdG0KoLMtlYN20h%2BqqabmyHZrV&X-Amz-Signature=069a7261d0b2b8a19de3fe4119d9f2b40d8cb92235f97de594fa67cedf7c52b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKQJPNN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBVBKj5A2GzZSrqqjkCbpx2eJ7cN3DKuRfc2GWrcl4VAIgfrbiCB%2BzOVDGPja6S6p30Tciw6s0MzjWYtUKuEbjckwq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOtyDekPks5VyhVHyCrcA4W%2FtGKbiZwR0JOaQuhQKCeeYLMGbxQDKmXiQyfXUJDobmwXwOiuhr3Z3056yMx0wKiIOLwpaMkEh4fY%2Fma%2BO7hFSuM3cLR82dtJgLTtWBSFZDQwQtex1d9W9G2Ogf14Q3HzwItHZCLKjQT7qVixHLNki7c7DQGME0ARLCsAoFQP1rd4u152%2B5OaakdmrCTPKg61zA4Ysgd%2B1kXXIDCDRgu4t6HQ9Fd859686nuU0se%2FFIyjSVB1%2ByNFPLlDjuqPm4mrdYiLU6eXWhzDq8GA%2Bf62UUY7D3tjHHEcIsk4nI5ZsNPBmnfI1NpIBfgsUh4rZQsEJWsnhmFlQ5vbew%2FJqBYlTQWWu0viCK3upbyqQf%2FzyHpDmMs95CoBHGPplvOnl0T95KoAcXFx4%2F2IYC0j2H2bYh73dYW1WPZq342n5vtqpoWLIdnYj9hFXXADg37qbpFJql5Lm9RjlOlp3H26NZrOZmEmpkSKmc0XVIHb3qBxA4jtQhE55gMv4gJ8qFNWtwJLuh8o%2B9HZO8X%2F%2BocV8RAka59HFFH8RZR3RVzn71ZvSz%2BTnKSfVcG6hnWrKMD3rJLmz5nuP1BLsD85unwakmyM3%2F6nZNeEe7pFDCP7yBSyM2kToMW1i1RJgMWDML7k1cEGOqUBb1U1VbNs54%2Bh1znwEgGQgni5071f7OLx3VqE5co9Dq2XtXveKv3nXCuAamUXxMMEVTJIjhksQOlUWt699Ku986e0ZdOtNlu9%2FPABUqx9g%2F2ZljVRXXM%2FHOrp8497gb3HycDdyU609tVoBtNeCvS1nc1WkTvgvu8CZ6GYKzRfOfXR8NfQ9rpGiCadf%2BLK8ExFWEjdG0KoLMtlYN20h%2BqqabmyHZrV&X-Amz-Signature=b8ed8ce3615481b60a00e504fe9bf80585fa34aae7e14b6e9509227e3ea6a4bf&X-Amz-SignedHeaders=host&x-id=GetObject)
