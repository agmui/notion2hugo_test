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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GQOLRZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD2aPV3TIRB27lI2GZD3w4TBT1Zr6bh%2FPfRVtAzo7eRvQIgdq0JXW7x8F%2F2Ep6OXhuJWZNzZero%2FJIuyOLk48lZ9ZUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh4xzfebbt%2BEdRnxSrcA8%2FKjALjaOAjgpqf%2FtiEremPUHfdCpfJgXl1HeQCBttME2vanA78DKh6WlP0nb%2FCjIorsfUrkJHBLQtJgGY1Avq%2FO9K7Ac2TXNAUbVxXoGluextT3DkyDTVZVm8kCidmctUUE1yuuB6mrj2VszjBRCvpr%2F0AFQ80Jh1%2B7y33IIYoaBz%2FvnYSYT5ml7X6h8s0e7NZpl%2BQ%2FKNtXQq%2F4SjZn8aNVUzZvvadY1HFTSlebrVECvAfKzgTdxItrnUA%2BawWK5K%2FU75Mgxx84WdqhcA%2F6nFDloUrQvNiictgIZBGPyXs87r%2Bg3uBK0UqBs7c6oV%2FBdsVA2EQ8M0RBT7e1ENtQXdQubScTi%2B1IEcOvEY6q%2F9pgEQz3EMpLEzKCLLzT3j0VHGLIz%2FGgdCFvlQ%2BWkAD0%2BpcY3kq08v3nesgp0myjQ7nDbSf%2B7z%2BJk53luGUjeF9Hv4ZpVY9mY1UoHAWF%2BTZKsWI345JWGsulXdMDqHFepeugv4usGJoa5wDajArZmWxPbWz55eVAAjSlJ0cA32St0FdaWR61%2BUAnRKM68WZ8V2SvMwYZgjd%2FiUDM1pJoNafrn6refdpG3EnfPWsPdxdRB2AMa5SCuGh13E5C7OlkDzELU9JIC8s74b%2FXWPdMLzkx74GOqUB8Ml%2BVmZhDddzJuucSfkC7oX%2FYHpzc0n4E6C8v8o67mVV5SwV%2BVzWTYT%2F0nNNZYceVHHHT91keWz6gHHIHWXGT61psJ6b4py6Q8J3tYLTwoasxsvi3kgGDeaHTUatrCaIWiFHBvJ4XaaPFNW%2BjTRrBqna9AaA6K%2FkR6Zzrz7Zn%2FmPptiIAM3bhOgaFQ%2F%2BlGgavAmoi%2FLkFIddT%2BN0WbZN8hIMnmKL&X-Amz-Signature=4d34eff672c1c4e76cabf522d8881423a7fadf351358fb1a7694166e71b6ea9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GQOLRZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD2aPV3TIRB27lI2GZD3w4TBT1Zr6bh%2FPfRVtAzo7eRvQIgdq0JXW7x8F%2F2Ep6OXhuJWZNzZero%2FJIuyOLk48lZ9ZUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh4xzfebbt%2BEdRnxSrcA8%2FKjALjaOAjgpqf%2FtiEremPUHfdCpfJgXl1HeQCBttME2vanA78DKh6WlP0nb%2FCjIorsfUrkJHBLQtJgGY1Avq%2FO9K7Ac2TXNAUbVxXoGluextT3DkyDTVZVm8kCidmctUUE1yuuB6mrj2VszjBRCvpr%2F0AFQ80Jh1%2B7y33IIYoaBz%2FvnYSYT5ml7X6h8s0e7NZpl%2BQ%2FKNtXQq%2F4SjZn8aNVUzZvvadY1HFTSlebrVECvAfKzgTdxItrnUA%2BawWK5K%2FU75Mgxx84WdqhcA%2F6nFDloUrQvNiictgIZBGPyXs87r%2Bg3uBK0UqBs7c6oV%2FBdsVA2EQ8M0RBT7e1ENtQXdQubScTi%2B1IEcOvEY6q%2F9pgEQz3EMpLEzKCLLzT3j0VHGLIz%2FGgdCFvlQ%2BWkAD0%2BpcY3kq08v3nesgp0myjQ7nDbSf%2B7z%2BJk53luGUjeF9Hv4ZpVY9mY1UoHAWF%2BTZKsWI345JWGsulXdMDqHFepeugv4usGJoa5wDajArZmWxPbWz55eVAAjSlJ0cA32St0FdaWR61%2BUAnRKM68WZ8V2SvMwYZgjd%2FiUDM1pJoNafrn6refdpG3EnfPWsPdxdRB2AMa5SCuGh13E5C7OlkDzELU9JIC8s74b%2FXWPdMLzkx74GOqUB8Ml%2BVmZhDddzJuucSfkC7oX%2FYHpzc0n4E6C8v8o67mVV5SwV%2BVzWTYT%2F0nNNZYceVHHHT91keWz6gHHIHWXGT61psJ6b4py6Q8J3tYLTwoasxsvi3kgGDeaHTUatrCaIWiFHBvJ4XaaPFNW%2BjTRrBqna9AaA6K%2FkR6Zzrz7Zn%2FmPptiIAM3bhOgaFQ%2F%2BlGgavAmoi%2FLkFIddT%2BN0WbZN8hIMnmKL&X-Amz-Signature=82fae6884eb9347e4250d8162e3c46a44d8f35e2e61be02cb27edc5032cf68ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GQOLRZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD2aPV3TIRB27lI2GZD3w4TBT1Zr6bh%2FPfRVtAzo7eRvQIgdq0JXW7x8F%2F2Ep6OXhuJWZNzZero%2FJIuyOLk48lZ9ZUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh4xzfebbt%2BEdRnxSrcA8%2FKjALjaOAjgpqf%2FtiEremPUHfdCpfJgXl1HeQCBttME2vanA78DKh6WlP0nb%2FCjIorsfUrkJHBLQtJgGY1Avq%2FO9K7Ac2TXNAUbVxXoGluextT3DkyDTVZVm8kCidmctUUE1yuuB6mrj2VszjBRCvpr%2F0AFQ80Jh1%2B7y33IIYoaBz%2FvnYSYT5ml7X6h8s0e7NZpl%2BQ%2FKNtXQq%2F4SjZn8aNVUzZvvadY1HFTSlebrVECvAfKzgTdxItrnUA%2BawWK5K%2FU75Mgxx84WdqhcA%2F6nFDloUrQvNiictgIZBGPyXs87r%2Bg3uBK0UqBs7c6oV%2FBdsVA2EQ8M0RBT7e1ENtQXdQubScTi%2B1IEcOvEY6q%2F9pgEQz3EMpLEzKCLLzT3j0VHGLIz%2FGgdCFvlQ%2BWkAD0%2BpcY3kq08v3nesgp0myjQ7nDbSf%2B7z%2BJk53luGUjeF9Hv4ZpVY9mY1UoHAWF%2BTZKsWI345JWGsulXdMDqHFepeugv4usGJoa5wDajArZmWxPbWz55eVAAjSlJ0cA32St0FdaWR61%2BUAnRKM68WZ8V2SvMwYZgjd%2FiUDM1pJoNafrn6refdpG3EnfPWsPdxdRB2AMa5SCuGh13E5C7OlkDzELU9JIC8s74b%2FXWPdMLzkx74GOqUB8Ml%2BVmZhDddzJuucSfkC7oX%2FYHpzc0n4E6C8v8o67mVV5SwV%2BVzWTYT%2F0nNNZYceVHHHT91keWz6gHHIHWXGT61psJ6b4py6Q8J3tYLTwoasxsvi3kgGDeaHTUatrCaIWiFHBvJ4XaaPFNW%2BjTRrBqna9AaA6K%2FkR6Zzrz7Zn%2FmPptiIAM3bhOgaFQ%2F%2BlGgavAmoi%2FLkFIddT%2BN0WbZN8hIMnmKL&X-Amz-Signature=90edb336e5f870a20dbb09aa5a28d684ca22247abb02bfa9b1ef01b1a051b3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GQOLRZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD2aPV3TIRB27lI2GZD3w4TBT1Zr6bh%2FPfRVtAzo7eRvQIgdq0JXW7x8F%2F2Ep6OXhuJWZNzZero%2FJIuyOLk48lZ9ZUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh4xzfebbt%2BEdRnxSrcA8%2FKjALjaOAjgpqf%2FtiEremPUHfdCpfJgXl1HeQCBttME2vanA78DKh6WlP0nb%2FCjIorsfUrkJHBLQtJgGY1Avq%2FO9K7Ac2TXNAUbVxXoGluextT3DkyDTVZVm8kCidmctUUE1yuuB6mrj2VszjBRCvpr%2F0AFQ80Jh1%2B7y33IIYoaBz%2FvnYSYT5ml7X6h8s0e7NZpl%2BQ%2FKNtXQq%2F4SjZn8aNVUzZvvadY1HFTSlebrVECvAfKzgTdxItrnUA%2BawWK5K%2FU75Mgxx84WdqhcA%2F6nFDloUrQvNiictgIZBGPyXs87r%2Bg3uBK0UqBs7c6oV%2FBdsVA2EQ8M0RBT7e1ENtQXdQubScTi%2B1IEcOvEY6q%2F9pgEQz3EMpLEzKCLLzT3j0VHGLIz%2FGgdCFvlQ%2BWkAD0%2BpcY3kq08v3nesgp0myjQ7nDbSf%2B7z%2BJk53luGUjeF9Hv4ZpVY9mY1UoHAWF%2BTZKsWI345JWGsulXdMDqHFepeugv4usGJoa5wDajArZmWxPbWz55eVAAjSlJ0cA32St0FdaWR61%2BUAnRKM68WZ8V2SvMwYZgjd%2FiUDM1pJoNafrn6refdpG3EnfPWsPdxdRB2AMa5SCuGh13E5C7OlkDzELU9JIC8s74b%2FXWPdMLzkx74GOqUB8Ml%2BVmZhDddzJuucSfkC7oX%2FYHpzc0n4E6C8v8o67mVV5SwV%2BVzWTYT%2F0nNNZYceVHHHT91keWz6gHHIHWXGT61psJ6b4py6Q8J3tYLTwoasxsvi3kgGDeaHTUatrCaIWiFHBvJ4XaaPFNW%2BjTRrBqna9AaA6K%2FkR6Zzrz7Zn%2FmPptiIAM3bhOgaFQ%2F%2BlGgavAmoi%2FLkFIddT%2BN0WbZN8hIMnmKL&X-Amz-Signature=eec4bbefda6dc01918c1a95353fb2b61a669df095d3ba93bf6c302e535b199e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GQOLRZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD2aPV3TIRB27lI2GZD3w4TBT1Zr6bh%2FPfRVtAzo7eRvQIgdq0JXW7x8F%2F2Ep6OXhuJWZNzZero%2FJIuyOLk48lZ9ZUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh4xzfebbt%2BEdRnxSrcA8%2FKjALjaOAjgpqf%2FtiEremPUHfdCpfJgXl1HeQCBttME2vanA78DKh6WlP0nb%2FCjIorsfUrkJHBLQtJgGY1Avq%2FO9K7Ac2TXNAUbVxXoGluextT3DkyDTVZVm8kCidmctUUE1yuuB6mrj2VszjBRCvpr%2F0AFQ80Jh1%2B7y33IIYoaBz%2FvnYSYT5ml7X6h8s0e7NZpl%2BQ%2FKNtXQq%2F4SjZn8aNVUzZvvadY1HFTSlebrVECvAfKzgTdxItrnUA%2BawWK5K%2FU75Mgxx84WdqhcA%2F6nFDloUrQvNiictgIZBGPyXs87r%2Bg3uBK0UqBs7c6oV%2FBdsVA2EQ8M0RBT7e1ENtQXdQubScTi%2B1IEcOvEY6q%2F9pgEQz3EMpLEzKCLLzT3j0VHGLIz%2FGgdCFvlQ%2BWkAD0%2BpcY3kq08v3nesgp0myjQ7nDbSf%2B7z%2BJk53luGUjeF9Hv4ZpVY9mY1UoHAWF%2BTZKsWI345JWGsulXdMDqHFepeugv4usGJoa5wDajArZmWxPbWz55eVAAjSlJ0cA32St0FdaWR61%2BUAnRKM68WZ8V2SvMwYZgjd%2FiUDM1pJoNafrn6refdpG3EnfPWsPdxdRB2AMa5SCuGh13E5C7OlkDzELU9JIC8s74b%2FXWPdMLzkx74GOqUB8Ml%2BVmZhDddzJuucSfkC7oX%2FYHpzc0n4E6C8v8o67mVV5SwV%2BVzWTYT%2F0nNNZYceVHHHT91keWz6gHHIHWXGT61psJ6b4py6Q8J3tYLTwoasxsvi3kgGDeaHTUatrCaIWiFHBvJ4XaaPFNW%2BjTRrBqna9AaA6K%2FkR6Zzrz7Zn%2FmPptiIAM3bhOgaFQ%2F%2BlGgavAmoi%2FLkFIddT%2BN0WbZN8hIMnmKL&X-Amz-Signature=3eb45c37b80b6f6733fac797999c2e4b1e3ad6336ad090bb130c076e9b1fd6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GQOLRZ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD2aPV3TIRB27lI2GZD3w4TBT1Zr6bh%2FPfRVtAzo7eRvQIgdq0JXW7x8F%2F2Ep6OXhuJWZNzZero%2FJIuyOLk48lZ9ZUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh4xzfebbt%2BEdRnxSrcA8%2FKjALjaOAjgpqf%2FtiEremPUHfdCpfJgXl1HeQCBttME2vanA78DKh6WlP0nb%2FCjIorsfUrkJHBLQtJgGY1Avq%2FO9K7Ac2TXNAUbVxXoGluextT3DkyDTVZVm8kCidmctUUE1yuuB6mrj2VszjBRCvpr%2F0AFQ80Jh1%2B7y33IIYoaBz%2FvnYSYT5ml7X6h8s0e7NZpl%2BQ%2FKNtXQq%2F4SjZn8aNVUzZvvadY1HFTSlebrVECvAfKzgTdxItrnUA%2BawWK5K%2FU75Mgxx84WdqhcA%2F6nFDloUrQvNiictgIZBGPyXs87r%2Bg3uBK0UqBs7c6oV%2FBdsVA2EQ8M0RBT7e1ENtQXdQubScTi%2B1IEcOvEY6q%2F9pgEQz3EMpLEzKCLLzT3j0VHGLIz%2FGgdCFvlQ%2BWkAD0%2BpcY3kq08v3nesgp0myjQ7nDbSf%2B7z%2BJk53luGUjeF9Hv4ZpVY9mY1UoHAWF%2BTZKsWI345JWGsulXdMDqHFepeugv4usGJoa5wDajArZmWxPbWz55eVAAjSlJ0cA32St0FdaWR61%2BUAnRKM68WZ8V2SvMwYZgjd%2FiUDM1pJoNafrn6refdpG3EnfPWsPdxdRB2AMa5SCuGh13E5C7OlkDzELU9JIC8s74b%2FXWPdMLzkx74GOqUB8Ml%2BVmZhDddzJuucSfkC7oX%2FYHpzc0n4E6C8v8o67mVV5SwV%2BVzWTYT%2F0nNNZYceVHHHT91keWz6gHHIHWXGT61psJ6b4py6Q8J3tYLTwoasxsvi3kgGDeaHTUatrCaIWiFHBvJ4XaaPFNW%2BjTRrBqna9AaA6K%2FkR6Zzrz7Zn%2FmPptiIAM3bhOgaFQ%2F%2BlGgavAmoi%2FLkFIddT%2BN0WbZN8hIMnmKL&X-Amz-Signature=e911a17bdf83641e0936af397cffff04fcc2353afc0691db7aa0c0cd51c33eac&X-Amz-SignedHeaders=host&x-id=GetObject)
