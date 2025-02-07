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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL443ZIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDhkDm%2B0SQWXkMbPVfUoYxCUAtdaS8cz8QNwip7fgouJAIgZmgvFkEKGZt%2B8pv3IxTiRKp6wPQ1AcR%2BQ1%2F%2Bbpc82YQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM3EreGwRCZgXDaGfSrcAyuDZxUy0pnG1v2pdcDlGBp1jILVLx1T2wQB37wA441GMJ5JG%2BvwOJxUQjdbiWB%2BG7N5qQ959xU9wKjGEw3vtuv70%2BglSS41bVLGuYrETa0%2FzhMnkIOwqmSr%2FYereW46HHEzePWOQjtcSzq9lFOH3tEnd6OPjtPDTlnBF%2BES6USEZkd8UaMYvJzMd3h0NSbfC5hoYP0rL%2FY46XXOjDHZN54RMD0HnMrdHQrdWOUOMJ6NORqMVd8H1x9zKiSMos0UolYcvrvgV0OXeiWcNFPH%2FwrIcpb45Z047X%2BQGgEwGouJvb3fMojmiDUB4zJEgF1CthncOL8lrSQoX02rEOuhDFMOIRx%2BEFfEHo1dTfl5TwsktvwLxo24NJ5sSLBVt8ACobB4RINgDXIinDRwEx0iwftED%2BjmIKIzUzkSvcRPagsWO6HKcgJsR8wqRmXsXS71%2FYkLV7HjcZYFrvZ4Ba1DSkdjaYfaPPn2rpEroAfKEpTZ5uoDPhWmgrnxGp6w73yQvSeR6dn8FQ7W%2ByihSfqFZzGPnWZK6InD4Cdg8jhevPCMBgkYIemTKdTAK%2FwajAWjXvVbmu%2FuHGqZDA4CcqSj4Dcanx1iJZ9g1%2BrrkE71ajvuhY0NqgDPVrcUMEIQML3HmL0GOqUBVBDvfy4VLzRyw3lppqyPFUGhv02w6k4W6LAdExVDc%2FdXo1E2tHJCCPIOAkH2KxmEzA4mv4mLY9XRIpEyimbgSheiT8ZHoD9MsH4wooPPKmVjWEmmg54NGx5u44EvbWSQqaLPsZFttmqpsq8KPk8fmdPtctQFEkGXhEsrr%2FH1Ko5XwxaaVjWLfdnuDtRR29rNX8Ry8KYmUs4Js9WOiAcwOknL6X52&X-Amz-Signature=fe1e1bfa28de3d79c0565322de83f12aaa093e0aaf13f15e7513e6d6555935e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL443ZIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDhkDm%2B0SQWXkMbPVfUoYxCUAtdaS8cz8QNwip7fgouJAIgZmgvFkEKGZt%2B8pv3IxTiRKp6wPQ1AcR%2BQ1%2F%2Bbpc82YQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM3EreGwRCZgXDaGfSrcAyuDZxUy0pnG1v2pdcDlGBp1jILVLx1T2wQB37wA441GMJ5JG%2BvwOJxUQjdbiWB%2BG7N5qQ959xU9wKjGEw3vtuv70%2BglSS41bVLGuYrETa0%2FzhMnkIOwqmSr%2FYereW46HHEzePWOQjtcSzq9lFOH3tEnd6OPjtPDTlnBF%2BES6USEZkd8UaMYvJzMd3h0NSbfC5hoYP0rL%2FY46XXOjDHZN54RMD0HnMrdHQrdWOUOMJ6NORqMVd8H1x9zKiSMos0UolYcvrvgV0OXeiWcNFPH%2FwrIcpb45Z047X%2BQGgEwGouJvb3fMojmiDUB4zJEgF1CthncOL8lrSQoX02rEOuhDFMOIRx%2BEFfEHo1dTfl5TwsktvwLxo24NJ5sSLBVt8ACobB4RINgDXIinDRwEx0iwftED%2BjmIKIzUzkSvcRPagsWO6HKcgJsR8wqRmXsXS71%2FYkLV7HjcZYFrvZ4Ba1DSkdjaYfaPPn2rpEroAfKEpTZ5uoDPhWmgrnxGp6w73yQvSeR6dn8FQ7W%2ByihSfqFZzGPnWZK6InD4Cdg8jhevPCMBgkYIemTKdTAK%2FwajAWjXvVbmu%2FuHGqZDA4CcqSj4Dcanx1iJZ9g1%2BrrkE71ajvuhY0NqgDPVrcUMEIQML3HmL0GOqUBVBDvfy4VLzRyw3lppqyPFUGhv02w6k4W6LAdExVDc%2FdXo1E2tHJCCPIOAkH2KxmEzA4mv4mLY9XRIpEyimbgSheiT8ZHoD9MsH4wooPPKmVjWEmmg54NGx5u44EvbWSQqaLPsZFttmqpsq8KPk8fmdPtctQFEkGXhEsrr%2FH1Ko5XwxaaVjWLfdnuDtRR29rNX8Ry8KYmUs4Js9WOiAcwOknL6X52&X-Amz-Signature=497562ffe5b5589d23c983dfb8ddf91aa76b537ad9f8a6e404c9ac9bf32d6984&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL443ZIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDhkDm%2B0SQWXkMbPVfUoYxCUAtdaS8cz8QNwip7fgouJAIgZmgvFkEKGZt%2B8pv3IxTiRKp6wPQ1AcR%2BQ1%2F%2Bbpc82YQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM3EreGwRCZgXDaGfSrcAyuDZxUy0pnG1v2pdcDlGBp1jILVLx1T2wQB37wA441GMJ5JG%2BvwOJxUQjdbiWB%2BG7N5qQ959xU9wKjGEw3vtuv70%2BglSS41bVLGuYrETa0%2FzhMnkIOwqmSr%2FYereW46HHEzePWOQjtcSzq9lFOH3tEnd6OPjtPDTlnBF%2BES6USEZkd8UaMYvJzMd3h0NSbfC5hoYP0rL%2FY46XXOjDHZN54RMD0HnMrdHQrdWOUOMJ6NORqMVd8H1x9zKiSMos0UolYcvrvgV0OXeiWcNFPH%2FwrIcpb45Z047X%2BQGgEwGouJvb3fMojmiDUB4zJEgF1CthncOL8lrSQoX02rEOuhDFMOIRx%2BEFfEHo1dTfl5TwsktvwLxo24NJ5sSLBVt8ACobB4RINgDXIinDRwEx0iwftED%2BjmIKIzUzkSvcRPagsWO6HKcgJsR8wqRmXsXS71%2FYkLV7HjcZYFrvZ4Ba1DSkdjaYfaPPn2rpEroAfKEpTZ5uoDPhWmgrnxGp6w73yQvSeR6dn8FQ7W%2ByihSfqFZzGPnWZK6InD4Cdg8jhevPCMBgkYIemTKdTAK%2FwajAWjXvVbmu%2FuHGqZDA4CcqSj4Dcanx1iJZ9g1%2BrrkE71ajvuhY0NqgDPVrcUMEIQML3HmL0GOqUBVBDvfy4VLzRyw3lppqyPFUGhv02w6k4W6LAdExVDc%2FdXo1E2tHJCCPIOAkH2KxmEzA4mv4mLY9XRIpEyimbgSheiT8ZHoD9MsH4wooPPKmVjWEmmg54NGx5u44EvbWSQqaLPsZFttmqpsq8KPk8fmdPtctQFEkGXhEsrr%2FH1Ko5XwxaaVjWLfdnuDtRR29rNX8Ry8KYmUs4Js9WOiAcwOknL6X52&X-Amz-Signature=32cb51a9f4d09c6b2bf958f5bbcc3103f459b554d71d9aacd658bac72461dcae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL443ZIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDhkDm%2B0SQWXkMbPVfUoYxCUAtdaS8cz8QNwip7fgouJAIgZmgvFkEKGZt%2B8pv3IxTiRKp6wPQ1AcR%2BQ1%2F%2Bbpc82YQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM3EreGwRCZgXDaGfSrcAyuDZxUy0pnG1v2pdcDlGBp1jILVLx1T2wQB37wA441GMJ5JG%2BvwOJxUQjdbiWB%2BG7N5qQ959xU9wKjGEw3vtuv70%2BglSS41bVLGuYrETa0%2FzhMnkIOwqmSr%2FYereW46HHEzePWOQjtcSzq9lFOH3tEnd6OPjtPDTlnBF%2BES6USEZkd8UaMYvJzMd3h0NSbfC5hoYP0rL%2FY46XXOjDHZN54RMD0HnMrdHQrdWOUOMJ6NORqMVd8H1x9zKiSMos0UolYcvrvgV0OXeiWcNFPH%2FwrIcpb45Z047X%2BQGgEwGouJvb3fMojmiDUB4zJEgF1CthncOL8lrSQoX02rEOuhDFMOIRx%2BEFfEHo1dTfl5TwsktvwLxo24NJ5sSLBVt8ACobB4RINgDXIinDRwEx0iwftED%2BjmIKIzUzkSvcRPagsWO6HKcgJsR8wqRmXsXS71%2FYkLV7HjcZYFrvZ4Ba1DSkdjaYfaPPn2rpEroAfKEpTZ5uoDPhWmgrnxGp6w73yQvSeR6dn8FQ7W%2ByihSfqFZzGPnWZK6InD4Cdg8jhevPCMBgkYIemTKdTAK%2FwajAWjXvVbmu%2FuHGqZDA4CcqSj4Dcanx1iJZ9g1%2BrrkE71ajvuhY0NqgDPVrcUMEIQML3HmL0GOqUBVBDvfy4VLzRyw3lppqyPFUGhv02w6k4W6LAdExVDc%2FdXo1E2tHJCCPIOAkH2KxmEzA4mv4mLY9XRIpEyimbgSheiT8ZHoD9MsH4wooPPKmVjWEmmg54NGx5u44EvbWSQqaLPsZFttmqpsq8KPk8fmdPtctQFEkGXhEsrr%2FH1Ko5XwxaaVjWLfdnuDtRR29rNX8Ry8KYmUs4Js9WOiAcwOknL6X52&X-Amz-Signature=011b9d98cc23b1c6f472acf8927a6fe363dd8b68154df8f42bc09afc006e83d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL443ZIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDhkDm%2B0SQWXkMbPVfUoYxCUAtdaS8cz8QNwip7fgouJAIgZmgvFkEKGZt%2B8pv3IxTiRKp6wPQ1AcR%2BQ1%2F%2Bbpc82YQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM3EreGwRCZgXDaGfSrcAyuDZxUy0pnG1v2pdcDlGBp1jILVLx1T2wQB37wA441GMJ5JG%2BvwOJxUQjdbiWB%2BG7N5qQ959xU9wKjGEw3vtuv70%2BglSS41bVLGuYrETa0%2FzhMnkIOwqmSr%2FYereW46HHEzePWOQjtcSzq9lFOH3tEnd6OPjtPDTlnBF%2BES6USEZkd8UaMYvJzMd3h0NSbfC5hoYP0rL%2FY46XXOjDHZN54RMD0HnMrdHQrdWOUOMJ6NORqMVd8H1x9zKiSMos0UolYcvrvgV0OXeiWcNFPH%2FwrIcpb45Z047X%2BQGgEwGouJvb3fMojmiDUB4zJEgF1CthncOL8lrSQoX02rEOuhDFMOIRx%2BEFfEHo1dTfl5TwsktvwLxo24NJ5sSLBVt8ACobB4RINgDXIinDRwEx0iwftED%2BjmIKIzUzkSvcRPagsWO6HKcgJsR8wqRmXsXS71%2FYkLV7HjcZYFrvZ4Ba1DSkdjaYfaPPn2rpEroAfKEpTZ5uoDPhWmgrnxGp6w73yQvSeR6dn8FQ7W%2ByihSfqFZzGPnWZK6InD4Cdg8jhevPCMBgkYIemTKdTAK%2FwajAWjXvVbmu%2FuHGqZDA4CcqSj4Dcanx1iJZ9g1%2BrrkE71ajvuhY0NqgDPVrcUMEIQML3HmL0GOqUBVBDvfy4VLzRyw3lppqyPFUGhv02w6k4W6LAdExVDc%2FdXo1E2tHJCCPIOAkH2KxmEzA4mv4mLY9XRIpEyimbgSheiT8ZHoD9MsH4wooPPKmVjWEmmg54NGx5u44EvbWSQqaLPsZFttmqpsq8KPk8fmdPtctQFEkGXhEsrr%2FH1Ko5XwxaaVjWLfdnuDtRR29rNX8Ry8KYmUs4Js9WOiAcwOknL6X52&X-Amz-Signature=225733f5fd3b4764f77d0288759b64f45753eb26d9f8fc51699a76d6513e49d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL443ZIU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDhkDm%2B0SQWXkMbPVfUoYxCUAtdaS8cz8QNwip7fgouJAIgZmgvFkEKGZt%2B8pv3IxTiRKp6wPQ1AcR%2BQ1%2F%2Bbpc82YQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDM3EreGwRCZgXDaGfSrcAyuDZxUy0pnG1v2pdcDlGBp1jILVLx1T2wQB37wA441GMJ5JG%2BvwOJxUQjdbiWB%2BG7N5qQ959xU9wKjGEw3vtuv70%2BglSS41bVLGuYrETa0%2FzhMnkIOwqmSr%2FYereW46HHEzePWOQjtcSzq9lFOH3tEnd6OPjtPDTlnBF%2BES6USEZkd8UaMYvJzMd3h0NSbfC5hoYP0rL%2FY46XXOjDHZN54RMD0HnMrdHQrdWOUOMJ6NORqMVd8H1x9zKiSMos0UolYcvrvgV0OXeiWcNFPH%2FwrIcpb45Z047X%2BQGgEwGouJvb3fMojmiDUB4zJEgF1CthncOL8lrSQoX02rEOuhDFMOIRx%2BEFfEHo1dTfl5TwsktvwLxo24NJ5sSLBVt8ACobB4RINgDXIinDRwEx0iwftED%2BjmIKIzUzkSvcRPagsWO6HKcgJsR8wqRmXsXS71%2FYkLV7HjcZYFrvZ4Ba1DSkdjaYfaPPn2rpEroAfKEpTZ5uoDPhWmgrnxGp6w73yQvSeR6dn8FQ7W%2ByihSfqFZzGPnWZK6InD4Cdg8jhevPCMBgkYIemTKdTAK%2FwajAWjXvVbmu%2FuHGqZDA4CcqSj4Dcanx1iJZ9g1%2BrrkE71ajvuhY0NqgDPVrcUMEIQML3HmL0GOqUBVBDvfy4VLzRyw3lppqyPFUGhv02w6k4W6LAdExVDc%2FdXo1E2tHJCCPIOAkH2KxmEzA4mv4mLY9XRIpEyimbgSheiT8ZHoD9MsH4wooPPKmVjWEmmg54NGx5u44EvbWSQqaLPsZFttmqpsq8KPk8fmdPtctQFEkGXhEsrr%2FH1Ko5XwxaaVjWLfdnuDtRR29rNX8Ry8KYmUs4Js9WOiAcwOknL6X52&X-Amz-Signature=a062a7e6342a12e2805e979d1f02435a22cfe10628bdd88be895e41d6466ebdf&X-Amz-SignedHeaders=host&x-id=GetObject)
