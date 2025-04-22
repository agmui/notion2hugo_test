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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFFQEQZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDyp6uKMuUvxQM%2FFm9H8dWwHKYsqQnK7PrZowrYDPbjRAIhAJu0g9s4RIYXDOXdM2LLqewo%2FDQvm4Y2q6aN3%2FU4caQuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI8bUfzEFug5BUfgwq3AM779vFcuqIrU0v62kgtXjmKN2oHZT3gj1Dl8YFGTBGPWs143aKaCX%2BIXSZXxSEKX0LiClCd4N0omge6Wq5IwGfk3xnMwmWnYVt1YjpRst%2FB%2BBmeQA72ld0GBbP3wNM%2FSNpM24RJlHtUKcCcG2Y9xA%2F8tUJs2xy3BeKudGJcdBJ7ihLQjtYcsRRsD5KC%2FyjRQe5Eephea5CMWRT3WIYkUpa71NFkDA1QzMagN%2BlhCWaM7nDjCKgKNv8iW3BNg4CGEgCk3qX0ZsXBcxCRWv2vUBh3VokaRznJ8UoUGi4jl7hOwkX6SALrBhUxrG1RN9aLPZpYH%2FnvoDPNkYLAyGLsvEcgueNaWUhceU2aQrn%2BpV7kXTeBcCeMzlCrq9kRzwM%2FmcfghKN7RDEGsaVQqQh8d57iSlMeZenpA2WQV4Pga8wwyVLFE9LvGm3KXlL7i9NiUZyiCoEypE%2Bw9s7bXmWtuj4oZCUDhXtIOZjF0NNmXjeK9xc40a%2BKFJHbipsnuyrIHIUSfI1KC6K17OkIHGZc9%2BqESLNRF2SilPS%2FiCVm0b6yITt9kLaWgDLGT%2ByxIWxTT94v7x11SOq6hI%2B1uBz%2B6187tPIoNH8rGLF2ASxVCBSpQydLDp1N9i8THKgHTDdopzABjqkASI2AuUHT1s8SZi6bPz5AliLa0eTUN0lwx6EzYsYy09vRulzfFGnQtG%2FsIzNgL8iQuQ7UITaqlnXm%2BX09NHNZ8CGe%2BtDAxzl%2FtB64yJlEB8CUV8pV2E8Vu6UhU1PW4OQSKgABfHU3pwgn6U7ebknvRh2wjnAzvwdBpb61r%2FMzO6IQA6eBeI75iLYgcFLBVqHCHWQTsAgIbIcGpA3N49F7K3D9uuA&X-Amz-Signature=21b0496862e827db130fc4ba8ef78ba1d8567f9b55c0cc105c81f42d38f8a570&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFFQEQZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDyp6uKMuUvxQM%2FFm9H8dWwHKYsqQnK7PrZowrYDPbjRAIhAJu0g9s4RIYXDOXdM2LLqewo%2FDQvm4Y2q6aN3%2FU4caQuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI8bUfzEFug5BUfgwq3AM779vFcuqIrU0v62kgtXjmKN2oHZT3gj1Dl8YFGTBGPWs143aKaCX%2BIXSZXxSEKX0LiClCd4N0omge6Wq5IwGfk3xnMwmWnYVt1YjpRst%2FB%2BBmeQA72ld0GBbP3wNM%2FSNpM24RJlHtUKcCcG2Y9xA%2F8tUJs2xy3BeKudGJcdBJ7ihLQjtYcsRRsD5KC%2FyjRQe5Eephea5CMWRT3WIYkUpa71NFkDA1QzMagN%2BlhCWaM7nDjCKgKNv8iW3BNg4CGEgCk3qX0ZsXBcxCRWv2vUBh3VokaRznJ8UoUGi4jl7hOwkX6SALrBhUxrG1RN9aLPZpYH%2FnvoDPNkYLAyGLsvEcgueNaWUhceU2aQrn%2BpV7kXTeBcCeMzlCrq9kRzwM%2FmcfghKN7RDEGsaVQqQh8d57iSlMeZenpA2WQV4Pga8wwyVLFE9LvGm3KXlL7i9NiUZyiCoEypE%2Bw9s7bXmWtuj4oZCUDhXtIOZjF0NNmXjeK9xc40a%2BKFJHbipsnuyrIHIUSfI1KC6K17OkIHGZc9%2BqESLNRF2SilPS%2FiCVm0b6yITt9kLaWgDLGT%2ByxIWxTT94v7x11SOq6hI%2B1uBz%2B6187tPIoNH8rGLF2ASxVCBSpQydLDp1N9i8THKgHTDdopzABjqkASI2AuUHT1s8SZi6bPz5AliLa0eTUN0lwx6EzYsYy09vRulzfFGnQtG%2FsIzNgL8iQuQ7UITaqlnXm%2BX09NHNZ8CGe%2BtDAxzl%2FtB64yJlEB8CUV8pV2E8Vu6UhU1PW4OQSKgABfHU3pwgn6U7ebknvRh2wjnAzvwdBpb61r%2FMzO6IQA6eBeI75iLYgcFLBVqHCHWQTsAgIbIcGpA3N49F7K3D9uuA&X-Amz-Signature=2c2e6200ac7da1cc4cb1d82d805069a290065d4349d4ff9047ff5970ebad60be&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFFQEQZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDyp6uKMuUvxQM%2FFm9H8dWwHKYsqQnK7PrZowrYDPbjRAIhAJu0g9s4RIYXDOXdM2LLqewo%2FDQvm4Y2q6aN3%2FU4caQuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI8bUfzEFug5BUfgwq3AM779vFcuqIrU0v62kgtXjmKN2oHZT3gj1Dl8YFGTBGPWs143aKaCX%2BIXSZXxSEKX0LiClCd4N0omge6Wq5IwGfk3xnMwmWnYVt1YjpRst%2FB%2BBmeQA72ld0GBbP3wNM%2FSNpM24RJlHtUKcCcG2Y9xA%2F8tUJs2xy3BeKudGJcdBJ7ihLQjtYcsRRsD5KC%2FyjRQe5Eephea5CMWRT3WIYkUpa71NFkDA1QzMagN%2BlhCWaM7nDjCKgKNv8iW3BNg4CGEgCk3qX0ZsXBcxCRWv2vUBh3VokaRznJ8UoUGi4jl7hOwkX6SALrBhUxrG1RN9aLPZpYH%2FnvoDPNkYLAyGLsvEcgueNaWUhceU2aQrn%2BpV7kXTeBcCeMzlCrq9kRzwM%2FmcfghKN7RDEGsaVQqQh8d57iSlMeZenpA2WQV4Pga8wwyVLFE9LvGm3KXlL7i9NiUZyiCoEypE%2Bw9s7bXmWtuj4oZCUDhXtIOZjF0NNmXjeK9xc40a%2BKFJHbipsnuyrIHIUSfI1KC6K17OkIHGZc9%2BqESLNRF2SilPS%2FiCVm0b6yITt9kLaWgDLGT%2ByxIWxTT94v7x11SOq6hI%2B1uBz%2B6187tPIoNH8rGLF2ASxVCBSpQydLDp1N9i8THKgHTDdopzABjqkASI2AuUHT1s8SZi6bPz5AliLa0eTUN0lwx6EzYsYy09vRulzfFGnQtG%2FsIzNgL8iQuQ7UITaqlnXm%2BX09NHNZ8CGe%2BtDAxzl%2FtB64yJlEB8CUV8pV2E8Vu6UhU1PW4OQSKgABfHU3pwgn6U7ebknvRh2wjnAzvwdBpb61r%2FMzO6IQA6eBeI75iLYgcFLBVqHCHWQTsAgIbIcGpA3N49F7K3D9uuA&X-Amz-Signature=37320e432628cd490b55d87981fea7ebf754ee2af8ee26c32e0fdc2c3adce130&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFFQEQZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDyp6uKMuUvxQM%2FFm9H8dWwHKYsqQnK7PrZowrYDPbjRAIhAJu0g9s4RIYXDOXdM2LLqewo%2FDQvm4Y2q6aN3%2FU4caQuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI8bUfzEFug5BUfgwq3AM779vFcuqIrU0v62kgtXjmKN2oHZT3gj1Dl8YFGTBGPWs143aKaCX%2BIXSZXxSEKX0LiClCd4N0omge6Wq5IwGfk3xnMwmWnYVt1YjpRst%2FB%2BBmeQA72ld0GBbP3wNM%2FSNpM24RJlHtUKcCcG2Y9xA%2F8tUJs2xy3BeKudGJcdBJ7ihLQjtYcsRRsD5KC%2FyjRQe5Eephea5CMWRT3WIYkUpa71NFkDA1QzMagN%2BlhCWaM7nDjCKgKNv8iW3BNg4CGEgCk3qX0ZsXBcxCRWv2vUBh3VokaRznJ8UoUGi4jl7hOwkX6SALrBhUxrG1RN9aLPZpYH%2FnvoDPNkYLAyGLsvEcgueNaWUhceU2aQrn%2BpV7kXTeBcCeMzlCrq9kRzwM%2FmcfghKN7RDEGsaVQqQh8d57iSlMeZenpA2WQV4Pga8wwyVLFE9LvGm3KXlL7i9NiUZyiCoEypE%2Bw9s7bXmWtuj4oZCUDhXtIOZjF0NNmXjeK9xc40a%2BKFJHbipsnuyrIHIUSfI1KC6K17OkIHGZc9%2BqESLNRF2SilPS%2FiCVm0b6yITt9kLaWgDLGT%2ByxIWxTT94v7x11SOq6hI%2B1uBz%2B6187tPIoNH8rGLF2ASxVCBSpQydLDp1N9i8THKgHTDdopzABjqkASI2AuUHT1s8SZi6bPz5AliLa0eTUN0lwx6EzYsYy09vRulzfFGnQtG%2FsIzNgL8iQuQ7UITaqlnXm%2BX09NHNZ8CGe%2BtDAxzl%2FtB64yJlEB8CUV8pV2E8Vu6UhU1PW4OQSKgABfHU3pwgn6U7ebknvRh2wjnAzvwdBpb61r%2FMzO6IQA6eBeI75iLYgcFLBVqHCHWQTsAgIbIcGpA3N49F7K3D9uuA&X-Amz-Signature=e985a259c58c5f1b7fb5696cd28f878eaced8d4cb84cc82d65acec3f861172bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFFQEQZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDyp6uKMuUvxQM%2FFm9H8dWwHKYsqQnK7PrZowrYDPbjRAIhAJu0g9s4RIYXDOXdM2LLqewo%2FDQvm4Y2q6aN3%2FU4caQuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI8bUfzEFug5BUfgwq3AM779vFcuqIrU0v62kgtXjmKN2oHZT3gj1Dl8YFGTBGPWs143aKaCX%2BIXSZXxSEKX0LiClCd4N0omge6Wq5IwGfk3xnMwmWnYVt1YjpRst%2FB%2BBmeQA72ld0GBbP3wNM%2FSNpM24RJlHtUKcCcG2Y9xA%2F8tUJs2xy3BeKudGJcdBJ7ihLQjtYcsRRsD5KC%2FyjRQe5Eephea5CMWRT3WIYkUpa71NFkDA1QzMagN%2BlhCWaM7nDjCKgKNv8iW3BNg4CGEgCk3qX0ZsXBcxCRWv2vUBh3VokaRznJ8UoUGi4jl7hOwkX6SALrBhUxrG1RN9aLPZpYH%2FnvoDPNkYLAyGLsvEcgueNaWUhceU2aQrn%2BpV7kXTeBcCeMzlCrq9kRzwM%2FmcfghKN7RDEGsaVQqQh8d57iSlMeZenpA2WQV4Pga8wwyVLFE9LvGm3KXlL7i9NiUZyiCoEypE%2Bw9s7bXmWtuj4oZCUDhXtIOZjF0NNmXjeK9xc40a%2BKFJHbipsnuyrIHIUSfI1KC6K17OkIHGZc9%2BqESLNRF2SilPS%2FiCVm0b6yITt9kLaWgDLGT%2ByxIWxTT94v7x11SOq6hI%2B1uBz%2B6187tPIoNH8rGLF2ASxVCBSpQydLDp1N9i8THKgHTDdopzABjqkASI2AuUHT1s8SZi6bPz5AliLa0eTUN0lwx6EzYsYy09vRulzfFGnQtG%2FsIzNgL8iQuQ7UITaqlnXm%2BX09NHNZ8CGe%2BtDAxzl%2FtB64yJlEB8CUV8pV2E8Vu6UhU1PW4OQSKgABfHU3pwgn6U7ebknvRh2wjnAzvwdBpb61r%2FMzO6IQA6eBeI75iLYgcFLBVqHCHWQTsAgIbIcGpA3N49F7K3D9uuA&X-Amz-Signature=1ab640302016f270bfbea72347fd2664a81622ffccc0b021dedf44ebee3b6a73&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFFQEQZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T041056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDyp6uKMuUvxQM%2FFm9H8dWwHKYsqQnK7PrZowrYDPbjRAIhAJu0g9s4RIYXDOXdM2LLqewo%2FDQvm4Y2q6aN3%2FU4caQuKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI8bUfzEFug5BUfgwq3AM779vFcuqIrU0v62kgtXjmKN2oHZT3gj1Dl8YFGTBGPWs143aKaCX%2BIXSZXxSEKX0LiClCd4N0omge6Wq5IwGfk3xnMwmWnYVt1YjpRst%2FB%2BBmeQA72ld0GBbP3wNM%2FSNpM24RJlHtUKcCcG2Y9xA%2F8tUJs2xy3BeKudGJcdBJ7ihLQjtYcsRRsD5KC%2FyjRQe5Eephea5CMWRT3WIYkUpa71NFkDA1QzMagN%2BlhCWaM7nDjCKgKNv8iW3BNg4CGEgCk3qX0ZsXBcxCRWv2vUBh3VokaRznJ8UoUGi4jl7hOwkX6SALrBhUxrG1RN9aLPZpYH%2FnvoDPNkYLAyGLsvEcgueNaWUhceU2aQrn%2BpV7kXTeBcCeMzlCrq9kRzwM%2FmcfghKN7RDEGsaVQqQh8d57iSlMeZenpA2WQV4Pga8wwyVLFE9LvGm3KXlL7i9NiUZyiCoEypE%2Bw9s7bXmWtuj4oZCUDhXtIOZjF0NNmXjeK9xc40a%2BKFJHbipsnuyrIHIUSfI1KC6K17OkIHGZc9%2BqESLNRF2SilPS%2FiCVm0b6yITt9kLaWgDLGT%2ByxIWxTT94v7x11SOq6hI%2B1uBz%2B6187tPIoNH8rGLF2ASxVCBSpQydLDp1N9i8THKgHTDdopzABjqkASI2AuUHT1s8SZi6bPz5AliLa0eTUN0lwx6EzYsYy09vRulzfFGnQtG%2FsIzNgL8iQuQ7UITaqlnXm%2BX09NHNZ8CGe%2BtDAxzl%2FtB64yJlEB8CUV8pV2E8Vu6UhU1PW4OQSKgABfHU3pwgn6U7ebknvRh2wjnAzvwdBpb61r%2FMzO6IQA6eBeI75iLYgcFLBVqHCHWQTsAgIbIcGpA3N49F7K3D9uuA&X-Amz-Signature=ef53b701c0866dceb0f5852d3232686f299dbb0c21ba939190f3f79acbc2f201&X-Amz-SignedHeaders=host&x-id=GetObject)
