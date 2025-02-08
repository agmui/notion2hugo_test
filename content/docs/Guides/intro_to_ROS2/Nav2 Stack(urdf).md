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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGPPI7J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCN6c3WxByvLo0DxgdDcJd8MZH7okax1skHhpa2tCSjrAIhAO0XAR3%2FkQKKlKgyuJ582N%2BumvCz8zTHqhf1K6bp%2BJhlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAQJanh6pymJr%2FHm4q3AM28KLziDJ5pFhmDBF%2FRv3D1c3i7s8Ad2md0cbk%2Bm4hZrC%2B4S0AVUltbCsM5BP01EpjcU3iS5xqvfkv8iLhwaBNu%2Bp09EYs8NsMuS26UztGc15%2B5rOIn603kXT4HRBBf8iYk1y9JkIlOZy7eVJpt%2B7NaHywTIs4n2Uut73D%2Bu10HipsVnnZfIlNu6IOjeYb7YhVlzvC2k4P%2FY%2Bt5ogrfhAo%2B0%2FpAmJYHCpLG7TODFzP6PVTdwObMpkx1ccCZ8FsaJfPHXUKVQ9qcIa%2FWyd7k2JehPNokqf0%2FDnDFi7H880aMRu85bHicw6zrU%2FEH0NUWLu%2BWjd%2BZH1lGSgaMY1Bjk9aRHiMCNGuCkr8mk1vk%2FQhLY8Bs7EgAp%2BcnZMT7TZzEnoBkFktOTIn7ipud89YUU3BuVvJiuYqV6YdW8OSfjAu7Xk7ieti46aX9g0Rc0dKliQJlznNi%2FQBY9ylgIJcVEvvv3QcfS%2Fx%2BGhPxTeOcFJhHZo8b%2F6gtldQiwdoF745McbcYa3GOgyWV6cmvROAaVeYQ8puW2bUyO%2BDTIc%2BgeIgjjc792YMYu%2FewXKDq%2FiAjBJtEYwmccPF3vjuEpY2h%2Ft88AOffVA6XquV%2F2tVw5331JX9Yf9Gu3u96HpuxzDuj5y9BjqkAQl%2BhyQoJq8fgBN8CGMHI1k%2BiaTCDpqlWQTtQdZz9igjbJCLrMsMjx3gRKYRM3kb5ZFMZMVSvHJVoHoUM36tjt2vybNd7wbH9vuAjwlFySouXROCuUbME8%2B1dSHbFjqOD4ouVsMS%2B8GsUxt8nEX8jBZ6MgETvqozWWXMEY2PWCdmiAjUd0T23eziATOsH7omRDxWjjEAakV3yneiWQLp4fWCbuQ2&X-Amz-Signature=86c955df68dace06399c5d1f09b632c9c4480e3bcb431d8f33e4f6496cdd608d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGPPI7J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCN6c3WxByvLo0DxgdDcJd8MZH7okax1skHhpa2tCSjrAIhAO0XAR3%2FkQKKlKgyuJ582N%2BumvCz8zTHqhf1K6bp%2BJhlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAQJanh6pymJr%2FHm4q3AM28KLziDJ5pFhmDBF%2FRv3D1c3i7s8Ad2md0cbk%2Bm4hZrC%2B4S0AVUltbCsM5BP01EpjcU3iS5xqvfkv8iLhwaBNu%2Bp09EYs8NsMuS26UztGc15%2B5rOIn603kXT4HRBBf8iYk1y9JkIlOZy7eVJpt%2B7NaHywTIs4n2Uut73D%2Bu10HipsVnnZfIlNu6IOjeYb7YhVlzvC2k4P%2FY%2Bt5ogrfhAo%2B0%2FpAmJYHCpLG7TODFzP6PVTdwObMpkx1ccCZ8FsaJfPHXUKVQ9qcIa%2FWyd7k2JehPNokqf0%2FDnDFi7H880aMRu85bHicw6zrU%2FEH0NUWLu%2BWjd%2BZH1lGSgaMY1Bjk9aRHiMCNGuCkr8mk1vk%2FQhLY8Bs7EgAp%2BcnZMT7TZzEnoBkFktOTIn7ipud89YUU3BuVvJiuYqV6YdW8OSfjAu7Xk7ieti46aX9g0Rc0dKliQJlznNi%2FQBY9ylgIJcVEvvv3QcfS%2Fx%2BGhPxTeOcFJhHZo8b%2F6gtldQiwdoF745McbcYa3GOgyWV6cmvROAaVeYQ8puW2bUyO%2BDTIc%2BgeIgjjc792YMYu%2FewXKDq%2FiAjBJtEYwmccPF3vjuEpY2h%2Ft88AOffVA6XquV%2F2tVw5331JX9Yf9Gu3u96HpuxzDuj5y9BjqkAQl%2BhyQoJq8fgBN8CGMHI1k%2BiaTCDpqlWQTtQdZz9igjbJCLrMsMjx3gRKYRM3kb5ZFMZMVSvHJVoHoUM36tjt2vybNd7wbH9vuAjwlFySouXROCuUbME8%2B1dSHbFjqOD4ouVsMS%2B8GsUxt8nEX8jBZ6MgETvqozWWXMEY2PWCdmiAjUd0T23eziATOsH7omRDxWjjEAakV3yneiWQLp4fWCbuQ2&X-Amz-Signature=27ef031e5a0c9182b96a3d5b02536995dec204e684497ea5456d0d17f0bf8948&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGPPI7J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCN6c3WxByvLo0DxgdDcJd8MZH7okax1skHhpa2tCSjrAIhAO0XAR3%2FkQKKlKgyuJ582N%2BumvCz8zTHqhf1K6bp%2BJhlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAQJanh6pymJr%2FHm4q3AM28KLziDJ5pFhmDBF%2FRv3D1c3i7s8Ad2md0cbk%2Bm4hZrC%2B4S0AVUltbCsM5BP01EpjcU3iS5xqvfkv8iLhwaBNu%2Bp09EYs8NsMuS26UztGc15%2B5rOIn603kXT4HRBBf8iYk1y9JkIlOZy7eVJpt%2B7NaHywTIs4n2Uut73D%2Bu10HipsVnnZfIlNu6IOjeYb7YhVlzvC2k4P%2FY%2Bt5ogrfhAo%2B0%2FpAmJYHCpLG7TODFzP6PVTdwObMpkx1ccCZ8FsaJfPHXUKVQ9qcIa%2FWyd7k2JehPNokqf0%2FDnDFi7H880aMRu85bHicw6zrU%2FEH0NUWLu%2BWjd%2BZH1lGSgaMY1Bjk9aRHiMCNGuCkr8mk1vk%2FQhLY8Bs7EgAp%2BcnZMT7TZzEnoBkFktOTIn7ipud89YUU3BuVvJiuYqV6YdW8OSfjAu7Xk7ieti46aX9g0Rc0dKliQJlznNi%2FQBY9ylgIJcVEvvv3QcfS%2Fx%2BGhPxTeOcFJhHZo8b%2F6gtldQiwdoF745McbcYa3GOgyWV6cmvROAaVeYQ8puW2bUyO%2BDTIc%2BgeIgjjc792YMYu%2FewXKDq%2FiAjBJtEYwmccPF3vjuEpY2h%2Ft88AOffVA6XquV%2F2tVw5331JX9Yf9Gu3u96HpuxzDuj5y9BjqkAQl%2BhyQoJq8fgBN8CGMHI1k%2BiaTCDpqlWQTtQdZz9igjbJCLrMsMjx3gRKYRM3kb5ZFMZMVSvHJVoHoUM36tjt2vybNd7wbH9vuAjwlFySouXROCuUbME8%2B1dSHbFjqOD4ouVsMS%2B8GsUxt8nEX8jBZ6MgETvqozWWXMEY2PWCdmiAjUd0T23eziATOsH7omRDxWjjEAakV3yneiWQLp4fWCbuQ2&X-Amz-Signature=dc04c4fdc6d943162e9cd5a2d7480b5303c0c573d0359b06ed23d5438e2597d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGPPI7J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCN6c3WxByvLo0DxgdDcJd8MZH7okax1skHhpa2tCSjrAIhAO0XAR3%2FkQKKlKgyuJ582N%2BumvCz8zTHqhf1K6bp%2BJhlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAQJanh6pymJr%2FHm4q3AM28KLziDJ5pFhmDBF%2FRv3D1c3i7s8Ad2md0cbk%2Bm4hZrC%2B4S0AVUltbCsM5BP01EpjcU3iS5xqvfkv8iLhwaBNu%2Bp09EYs8NsMuS26UztGc15%2B5rOIn603kXT4HRBBf8iYk1y9JkIlOZy7eVJpt%2B7NaHywTIs4n2Uut73D%2Bu10HipsVnnZfIlNu6IOjeYb7YhVlzvC2k4P%2FY%2Bt5ogrfhAo%2B0%2FpAmJYHCpLG7TODFzP6PVTdwObMpkx1ccCZ8FsaJfPHXUKVQ9qcIa%2FWyd7k2JehPNokqf0%2FDnDFi7H880aMRu85bHicw6zrU%2FEH0NUWLu%2BWjd%2BZH1lGSgaMY1Bjk9aRHiMCNGuCkr8mk1vk%2FQhLY8Bs7EgAp%2BcnZMT7TZzEnoBkFktOTIn7ipud89YUU3BuVvJiuYqV6YdW8OSfjAu7Xk7ieti46aX9g0Rc0dKliQJlznNi%2FQBY9ylgIJcVEvvv3QcfS%2Fx%2BGhPxTeOcFJhHZo8b%2F6gtldQiwdoF745McbcYa3GOgyWV6cmvROAaVeYQ8puW2bUyO%2BDTIc%2BgeIgjjc792YMYu%2FewXKDq%2FiAjBJtEYwmccPF3vjuEpY2h%2Ft88AOffVA6XquV%2F2tVw5331JX9Yf9Gu3u96HpuxzDuj5y9BjqkAQl%2BhyQoJq8fgBN8CGMHI1k%2BiaTCDpqlWQTtQdZz9igjbJCLrMsMjx3gRKYRM3kb5ZFMZMVSvHJVoHoUM36tjt2vybNd7wbH9vuAjwlFySouXROCuUbME8%2B1dSHbFjqOD4ouVsMS%2B8GsUxt8nEX8jBZ6MgETvqozWWXMEY2PWCdmiAjUd0T23eziATOsH7omRDxWjjEAakV3yneiWQLp4fWCbuQ2&X-Amz-Signature=64d403869fb3489f19dddb208826d63f093622b987557c4cf2313e4861d26e95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGPPI7J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCN6c3WxByvLo0DxgdDcJd8MZH7okax1skHhpa2tCSjrAIhAO0XAR3%2FkQKKlKgyuJ582N%2BumvCz8zTHqhf1K6bp%2BJhlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAQJanh6pymJr%2FHm4q3AM28KLziDJ5pFhmDBF%2FRv3D1c3i7s8Ad2md0cbk%2Bm4hZrC%2B4S0AVUltbCsM5BP01EpjcU3iS5xqvfkv8iLhwaBNu%2Bp09EYs8NsMuS26UztGc15%2B5rOIn603kXT4HRBBf8iYk1y9JkIlOZy7eVJpt%2B7NaHywTIs4n2Uut73D%2Bu10HipsVnnZfIlNu6IOjeYb7YhVlzvC2k4P%2FY%2Bt5ogrfhAo%2B0%2FpAmJYHCpLG7TODFzP6PVTdwObMpkx1ccCZ8FsaJfPHXUKVQ9qcIa%2FWyd7k2JehPNokqf0%2FDnDFi7H880aMRu85bHicw6zrU%2FEH0NUWLu%2BWjd%2BZH1lGSgaMY1Bjk9aRHiMCNGuCkr8mk1vk%2FQhLY8Bs7EgAp%2BcnZMT7TZzEnoBkFktOTIn7ipud89YUU3BuVvJiuYqV6YdW8OSfjAu7Xk7ieti46aX9g0Rc0dKliQJlznNi%2FQBY9ylgIJcVEvvv3QcfS%2Fx%2BGhPxTeOcFJhHZo8b%2F6gtldQiwdoF745McbcYa3GOgyWV6cmvROAaVeYQ8puW2bUyO%2BDTIc%2BgeIgjjc792YMYu%2FewXKDq%2FiAjBJtEYwmccPF3vjuEpY2h%2Ft88AOffVA6XquV%2F2tVw5331JX9Yf9Gu3u96HpuxzDuj5y9BjqkAQl%2BhyQoJq8fgBN8CGMHI1k%2BiaTCDpqlWQTtQdZz9igjbJCLrMsMjx3gRKYRM3kb5ZFMZMVSvHJVoHoUM36tjt2vybNd7wbH9vuAjwlFySouXROCuUbME8%2B1dSHbFjqOD4ouVsMS%2B8GsUxt8nEX8jBZ6MgETvqozWWXMEY2PWCdmiAjUd0T23eziATOsH7omRDxWjjEAakV3yneiWQLp4fWCbuQ2&X-Amz-Signature=e313bccf364ff52d13d92df3ffc284805548d0b3fdaec85d35c348bdeb0083c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MGPPI7J%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCN6c3WxByvLo0DxgdDcJd8MZH7okax1skHhpa2tCSjrAIhAO0XAR3%2FkQKKlKgyuJ582N%2BumvCz8zTHqhf1K6bp%2BJhlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAQJanh6pymJr%2FHm4q3AM28KLziDJ5pFhmDBF%2FRv3D1c3i7s8Ad2md0cbk%2Bm4hZrC%2B4S0AVUltbCsM5BP01EpjcU3iS5xqvfkv8iLhwaBNu%2Bp09EYs8NsMuS26UztGc15%2B5rOIn603kXT4HRBBf8iYk1y9JkIlOZy7eVJpt%2B7NaHywTIs4n2Uut73D%2Bu10HipsVnnZfIlNu6IOjeYb7YhVlzvC2k4P%2FY%2Bt5ogrfhAo%2B0%2FpAmJYHCpLG7TODFzP6PVTdwObMpkx1ccCZ8FsaJfPHXUKVQ9qcIa%2FWyd7k2JehPNokqf0%2FDnDFi7H880aMRu85bHicw6zrU%2FEH0NUWLu%2BWjd%2BZH1lGSgaMY1Bjk9aRHiMCNGuCkr8mk1vk%2FQhLY8Bs7EgAp%2BcnZMT7TZzEnoBkFktOTIn7ipud89YUU3BuVvJiuYqV6YdW8OSfjAu7Xk7ieti46aX9g0Rc0dKliQJlznNi%2FQBY9ylgIJcVEvvv3QcfS%2Fx%2BGhPxTeOcFJhHZo8b%2F6gtldQiwdoF745McbcYa3GOgyWV6cmvROAaVeYQ8puW2bUyO%2BDTIc%2BgeIgjjc792YMYu%2FewXKDq%2FiAjBJtEYwmccPF3vjuEpY2h%2Ft88AOffVA6XquV%2F2tVw5331JX9Yf9Gu3u96HpuxzDuj5y9BjqkAQl%2BhyQoJq8fgBN8CGMHI1k%2BiaTCDpqlWQTtQdZz9igjbJCLrMsMjx3gRKYRM3kb5ZFMZMVSvHJVoHoUM36tjt2vybNd7wbH9vuAjwlFySouXROCuUbME8%2B1dSHbFjqOD4ouVsMS%2B8GsUxt8nEX8jBZ6MgETvqozWWXMEY2PWCdmiAjUd0T23eziATOsH7omRDxWjjEAakV3yneiWQLp4fWCbuQ2&X-Amz-Signature=c0946a1b0fbf41cdfee7cbd079db5556eb17d9fa38ba267557d5be389c120205&X-Amz-SignedHeaders=host&x-id=GetObject)
