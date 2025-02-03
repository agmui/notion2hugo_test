---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2HY3S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyzvFHCZMvYOXMFBVJBpo5LUBPUYrZs9aYhfypRuPfIAIhAOLV7fM%2BGdmvCo1LlivjU7%2BqFtXnTn1O1r9eVIjMqGmaKv8DCBcQABoMNjM3NDIzMTgzODA1IgyAtbYzbdPLkd9l%2BQIq3AMPdFdNACmHBUWJf0%2F5sTfFuMba5Er0tAR9JDDvQ%2BI1QOlbDiPlyQwiNwZCXm2BgPNgeTTiXqK%2F1h79OmDyIQNON7EgSMcAh57LsUrOta85eYEPF%2BTF27Y%2ByI5rtihdbIbmeYfd1%2FU39rg%2Fr5BCeuGzn%2BFtv%2B4kYaTiRbqhEqx9fn%2B3UFEM1lz6oIH9LYI6aJ94xHY6Z38MiNVGvh394VVYbXHlHzW0wMYxPFURtQfoFkops2%2BCjiYCRwxOfaqjSXhmbb1Amp5tq%2B6DjBApXr1leUpcr6kuKI%2BmcXaS16RoMkYOvMGd3sRLIOixYgJarWD%2BL6lyozsi%2Bj08m4BEHDV4XqVsGnpDcPKXnPVZr5T3UeeeLX%2BCc7kRR43UEodlnvucqJjujx1i25AuYOgmdrZObroe1YiPkuCq0lu3b28U3h3TRqhiBp8Rb%2BBMDqC%2BrxPGzbv9igZjv5zv7Dx0Vx53arxjuZdCcGzQKUr%2B2CVTPa5qoaLH6EoLxVINaBTCVnoe0Uc%2F3UoWkI%2BOyfwb6ObjeRRiiahymSHzURXv8fvF6aELbMdiRabQNHR%2FMklbAm6hhMXhfxfwU0lr%2FsoZXXwSsOeLeEHUC%2F1ijHiREKS0yjsPM4jvYk4wCNnGKTDVjoO9BjqkAYaVIGQCy9mqhx7Si%2B4bQZZqXjUD3VD%2FXwVtCDpBc8z8ilol42%2FTMCLNUvMqBcfAlHU095a202taoGuY3nlrazOqVhHncpM6J5mqUx33BpDUYFW9WLDFtm5Nlwk45gle35v8bROflm%2FNQARF6Rx2XvDiWnNPVY4j%2BQHhe1uNDobGkG%2FGosRsTw6WCYeMY%2BBau3Y58HBw8R5jdTl3%2B1zAKMmLUpR%2B&X-Amz-Signature=360871408094d050c71392e1ef2de3ab04f89ee3589528b6c9b6d1cd3c6d4a28&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2HY3S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyzvFHCZMvYOXMFBVJBpo5LUBPUYrZs9aYhfypRuPfIAIhAOLV7fM%2BGdmvCo1LlivjU7%2BqFtXnTn1O1r9eVIjMqGmaKv8DCBcQABoMNjM3NDIzMTgzODA1IgyAtbYzbdPLkd9l%2BQIq3AMPdFdNACmHBUWJf0%2F5sTfFuMba5Er0tAR9JDDvQ%2BI1QOlbDiPlyQwiNwZCXm2BgPNgeTTiXqK%2F1h79OmDyIQNON7EgSMcAh57LsUrOta85eYEPF%2BTF27Y%2ByI5rtihdbIbmeYfd1%2FU39rg%2Fr5BCeuGzn%2BFtv%2B4kYaTiRbqhEqx9fn%2B3UFEM1lz6oIH9LYI6aJ94xHY6Z38MiNVGvh394VVYbXHlHzW0wMYxPFURtQfoFkops2%2BCjiYCRwxOfaqjSXhmbb1Amp5tq%2B6DjBApXr1leUpcr6kuKI%2BmcXaS16RoMkYOvMGd3sRLIOixYgJarWD%2BL6lyozsi%2Bj08m4BEHDV4XqVsGnpDcPKXnPVZr5T3UeeeLX%2BCc7kRR43UEodlnvucqJjujx1i25AuYOgmdrZObroe1YiPkuCq0lu3b28U3h3TRqhiBp8Rb%2BBMDqC%2BrxPGzbv9igZjv5zv7Dx0Vx53arxjuZdCcGzQKUr%2B2CVTPa5qoaLH6EoLxVINaBTCVnoe0Uc%2F3UoWkI%2BOyfwb6ObjeRRiiahymSHzURXv8fvF6aELbMdiRabQNHR%2FMklbAm6hhMXhfxfwU0lr%2FsoZXXwSsOeLeEHUC%2F1ijHiREKS0yjsPM4jvYk4wCNnGKTDVjoO9BjqkAYaVIGQCy9mqhx7Si%2B4bQZZqXjUD3VD%2FXwVtCDpBc8z8ilol42%2FTMCLNUvMqBcfAlHU095a202taoGuY3nlrazOqVhHncpM6J5mqUx33BpDUYFW9WLDFtm5Nlwk45gle35v8bROflm%2FNQARF6Rx2XvDiWnNPVY4j%2BQHhe1uNDobGkG%2FGosRsTw6WCYeMY%2BBau3Y58HBw8R5jdTl3%2B1zAKMmLUpR%2B&X-Amz-Signature=519427373e2837c7e152f12b0b384f0ce642c42ccca59a8a7c78d9ee0cd6ebac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2HY3S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyzvFHCZMvYOXMFBVJBpo5LUBPUYrZs9aYhfypRuPfIAIhAOLV7fM%2BGdmvCo1LlivjU7%2BqFtXnTn1O1r9eVIjMqGmaKv8DCBcQABoMNjM3NDIzMTgzODA1IgyAtbYzbdPLkd9l%2BQIq3AMPdFdNACmHBUWJf0%2F5sTfFuMba5Er0tAR9JDDvQ%2BI1QOlbDiPlyQwiNwZCXm2BgPNgeTTiXqK%2F1h79OmDyIQNON7EgSMcAh57LsUrOta85eYEPF%2BTF27Y%2ByI5rtihdbIbmeYfd1%2FU39rg%2Fr5BCeuGzn%2BFtv%2B4kYaTiRbqhEqx9fn%2B3UFEM1lz6oIH9LYI6aJ94xHY6Z38MiNVGvh394VVYbXHlHzW0wMYxPFURtQfoFkops2%2BCjiYCRwxOfaqjSXhmbb1Amp5tq%2B6DjBApXr1leUpcr6kuKI%2BmcXaS16RoMkYOvMGd3sRLIOixYgJarWD%2BL6lyozsi%2Bj08m4BEHDV4XqVsGnpDcPKXnPVZr5T3UeeeLX%2BCc7kRR43UEodlnvucqJjujx1i25AuYOgmdrZObroe1YiPkuCq0lu3b28U3h3TRqhiBp8Rb%2BBMDqC%2BrxPGzbv9igZjv5zv7Dx0Vx53arxjuZdCcGzQKUr%2B2CVTPa5qoaLH6EoLxVINaBTCVnoe0Uc%2F3UoWkI%2BOyfwb6ObjeRRiiahymSHzURXv8fvF6aELbMdiRabQNHR%2FMklbAm6hhMXhfxfwU0lr%2FsoZXXwSsOeLeEHUC%2F1ijHiREKS0yjsPM4jvYk4wCNnGKTDVjoO9BjqkAYaVIGQCy9mqhx7Si%2B4bQZZqXjUD3VD%2FXwVtCDpBc8z8ilol42%2FTMCLNUvMqBcfAlHU095a202taoGuY3nlrazOqVhHncpM6J5mqUx33BpDUYFW9WLDFtm5Nlwk45gle35v8bROflm%2FNQARF6Rx2XvDiWnNPVY4j%2BQHhe1uNDobGkG%2FGosRsTw6WCYeMY%2BBau3Y58HBw8R5jdTl3%2B1zAKMmLUpR%2B&X-Amz-Signature=dacacf0ce45159a7d77b2b922751759043d839759f8adf1c7d556b5efe5eaa7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2HY3S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyzvFHCZMvYOXMFBVJBpo5LUBPUYrZs9aYhfypRuPfIAIhAOLV7fM%2BGdmvCo1LlivjU7%2BqFtXnTn1O1r9eVIjMqGmaKv8DCBcQABoMNjM3NDIzMTgzODA1IgyAtbYzbdPLkd9l%2BQIq3AMPdFdNACmHBUWJf0%2F5sTfFuMba5Er0tAR9JDDvQ%2BI1QOlbDiPlyQwiNwZCXm2BgPNgeTTiXqK%2F1h79OmDyIQNON7EgSMcAh57LsUrOta85eYEPF%2BTF27Y%2ByI5rtihdbIbmeYfd1%2FU39rg%2Fr5BCeuGzn%2BFtv%2B4kYaTiRbqhEqx9fn%2B3UFEM1lz6oIH9LYI6aJ94xHY6Z38MiNVGvh394VVYbXHlHzW0wMYxPFURtQfoFkops2%2BCjiYCRwxOfaqjSXhmbb1Amp5tq%2B6DjBApXr1leUpcr6kuKI%2BmcXaS16RoMkYOvMGd3sRLIOixYgJarWD%2BL6lyozsi%2Bj08m4BEHDV4XqVsGnpDcPKXnPVZr5T3UeeeLX%2BCc7kRR43UEodlnvucqJjujx1i25AuYOgmdrZObroe1YiPkuCq0lu3b28U3h3TRqhiBp8Rb%2BBMDqC%2BrxPGzbv9igZjv5zv7Dx0Vx53arxjuZdCcGzQKUr%2B2CVTPa5qoaLH6EoLxVINaBTCVnoe0Uc%2F3UoWkI%2BOyfwb6ObjeRRiiahymSHzURXv8fvF6aELbMdiRabQNHR%2FMklbAm6hhMXhfxfwU0lr%2FsoZXXwSsOeLeEHUC%2F1ijHiREKS0yjsPM4jvYk4wCNnGKTDVjoO9BjqkAYaVIGQCy9mqhx7Si%2B4bQZZqXjUD3VD%2FXwVtCDpBc8z8ilol42%2FTMCLNUvMqBcfAlHU095a202taoGuY3nlrazOqVhHncpM6J5mqUx33BpDUYFW9WLDFtm5Nlwk45gle35v8bROflm%2FNQARF6Rx2XvDiWnNPVY4j%2BQHhe1uNDobGkG%2FGosRsTw6WCYeMY%2BBau3Y58HBw8R5jdTl3%2B1zAKMmLUpR%2B&X-Amz-Signature=75084d71e9fe17ec954087beb01fb8ab9a0549b779e1b4b1a412ebe741228b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2HY3S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyzvFHCZMvYOXMFBVJBpo5LUBPUYrZs9aYhfypRuPfIAIhAOLV7fM%2BGdmvCo1LlivjU7%2BqFtXnTn1O1r9eVIjMqGmaKv8DCBcQABoMNjM3NDIzMTgzODA1IgyAtbYzbdPLkd9l%2BQIq3AMPdFdNACmHBUWJf0%2F5sTfFuMba5Er0tAR9JDDvQ%2BI1QOlbDiPlyQwiNwZCXm2BgPNgeTTiXqK%2F1h79OmDyIQNON7EgSMcAh57LsUrOta85eYEPF%2BTF27Y%2ByI5rtihdbIbmeYfd1%2FU39rg%2Fr5BCeuGzn%2BFtv%2B4kYaTiRbqhEqx9fn%2B3UFEM1lz6oIH9LYI6aJ94xHY6Z38MiNVGvh394VVYbXHlHzW0wMYxPFURtQfoFkops2%2BCjiYCRwxOfaqjSXhmbb1Amp5tq%2B6DjBApXr1leUpcr6kuKI%2BmcXaS16RoMkYOvMGd3sRLIOixYgJarWD%2BL6lyozsi%2Bj08m4BEHDV4XqVsGnpDcPKXnPVZr5T3UeeeLX%2BCc7kRR43UEodlnvucqJjujx1i25AuYOgmdrZObroe1YiPkuCq0lu3b28U3h3TRqhiBp8Rb%2BBMDqC%2BrxPGzbv9igZjv5zv7Dx0Vx53arxjuZdCcGzQKUr%2B2CVTPa5qoaLH6EoLxVINaBTCVnoe0Uc%2F3UoWkI%2BOyfwb6ObjeRRiiahymSHzURXv8fvF6aELbMdiRabQNHR%2FMklbAm6hhMXhfxfwU0lr%2FsoZXXwSsOeLeEHUC%2F1ijHiREKS0yjsPM4jvYk4wCNnGKTDVjoO9BjqkAYaVIGQCy9mqhx7Si%2B4bQZZqXjUD3VD%2FXwVtCDpBc8z8ilol42%2FTMCLNUvMqBcfAlHU095a202taoGuY3nlrazOqVhHncpM6J5mqUx33BpDUYFW9WLDFtm5Nlwk45gle35v8bROflm%2FNQARF6Rx2XvDiWnNPVY4j%2BQHhe1uNDobGkG%2FGosRsTw6WCYeMY%2BBau3Y58HBw8R5jdTl3%2B1zAKMmLUpR%2B&X-Amz-Signature=158f93a2c10a8e51a766d2ca3f54ff95152a996f15db252ce691f4a3ceda174f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5D2HY3S%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyzvFHCZMvYOXMFBVJBpo5LUBPUYrZs9aYhfypRuPfIAIhAOLV7fM%2BGdmvCo1LlivjU7%2BqFtXnTn1O1r9eVIjMqGmaKv8DCBcQABoMNjM3NDIzMTgzODA1IgyAtbYzbdPLkd9l%2BQIq3AMPdFdNACmHBUWJf0%2F5sTfFuMba5Er0tAR9JDDvQ%2BI1QOlbDiPlyQwiNwZCXm2BgPNgeTTiXqK%2F1h79OmDyIQNON7EgSMcAh57LsUrOta85eYEPF%2BTF27Y%2ByI5rtihdbIbmeYfd1%2FU39rg%2Fr5BCeuGzn%2BFtv%2B4kYaTiRbqhEqx9fn%2B3UFEM1lz6oIH9LYI6aJ94xHY6Z38MiNVGvh394VVYbXHlHzW0wMYxPFURtQfoFkops2%2BCjiYCRwxOfaqjSXhmbb1Amp5tq%2B6DjBApXr1leUpcr6kuKI%2BmcXaS16RoMkYOvMGd3sRLIOixYgJarWD%2BL6lyozsi%2Bj08m4BEHDV4XqVsGnpDcPKXnPVZr5T3UeeeLX%2BCc7kRR43UEodlnvucqJjujx1i25AuYOgmdrZObroe1YiPkuCq0lu3b28U3h3TRqhiBp8Rb%2BBMDqC%2BrxPGzbv9igZjv5zv7Dx0Vx53arxjuZdCcGzQKUr%2B2CVTPa5qoaLH6EoLxVINaBTCVnoe0Uc%2F3UoWkI%2BOyfwb6ObjeRRiiahymSHzURXv8fvF6aELbMdiRabQNHR%2FMklbAm6hhMXhfxfwU0lr%2FsoZXXwSsOeLeEHUC%2F1ijHiREKS0yjsPM4jvYk4wCNnGKTDVjoO9BjqkAYaVIGQCy9mqhx7Si%2B4bQZZqXjUD3VD%2FXwVtCDpBc8z8ilol42%2FTMCLNUvMqBcfAlHU095a202taoGuY3nlrazOqVhHncpM6J5mqUx33BpDUYFW9WLDFtm5Nlwk45gle35v8bROflm%2FNQARF6Rx2XvDiWnNPVY4j%2BQHhe1uNDobGkG%2FGosRsTw6WCYeMY%2BBau3Y58HBw8R5jdTl3%2B1zAKMmLUpR%2B&X-Amz-Signature=2193418665a350dd9ac6c9a3a78bcb968c688f8440070343ee1aefe92cd76bd9&X-Amz-SignedHeaders=host&x-id=GetObject)
