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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXKP3T7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHh0iqpx34WjltFsL%2B4Ua294MEvORYFa6NvJ2CBvP79SAiEA9GE79NlWAYtyQgnmwgTDfD0mdtp%2B%2Bc6YGuJH0LxxjkwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0WGKatQJzLWpWezyrcAx0CM3O8El%2FCM6PyHzOEjxFNVwrDsPIYpZOeWqzDlhrnkIKEPXa513y74HXJ5fVVzbUH4PzZb%2BjD2NrjpptRYtZJaI55so62bl0E0dp4m3iRrIfURILYk%2FFz60SwmLpUvFhowDy6f2uVX02l40XIq0UTIzq7xjzSelirNGhSPvNiNK5yWLf%2BxR5yI1czD9Zs1U6OdwzZ5fzUAweL3CznccliHvPTABDxWR1Zslg38Dr28U0KtHNpS8FYRiKvendKfHQZgRJ6pWYPXA6U8Bf9QTAxBKPAEgKX2LXTDZ2ETqYqHLglRaKY4yZ9tdnqu04gJVQqlfxaSlFHF8KAqGBtoqdk5QTVS6NYbmEkhhZkfgzP%2BgObv2SaBKLlYkwxg35e9oCVF3A5cJf3wUTW0ptAe2iripxyzntjHw1ypmyLdhNkk0eYbKqeIjsfBwnm5hm44qK9VtHaC9slzWQPBvCIAxdqqdC1HJU8snpUZwyw4Ltw6g6Zai9iY5Se2v1YgiAefJRutmMwAOZKYZpE%2FXiVowWu9UlmQQue8Y7a%2FKv8YSJOFsbX4gXzAPb4%2Boy4mPdCkWh2Ny9Ze91xWofr4N%2F3ksWuFwWrA6pgyPVaZTsHsvHznohY9UMN%2FaU4FBsqMJaUusEGOqUBnvTVci3aGL6zY7KMmnSBDSDGvGYimz8tjZaHYLtSnAKpSsvvsxFs2D%2Bl3QdcIvlrg%2BPZODdZIbDjuJtGj6DFF3392MY0rrsfEAU8K%2BfqyHOoK2EqJNgKuesEdxBwb3yt%2FvFvWbG7Wyl%2Fn3%2Bn6bxUlmeQ0YBHqvYNabx2K6CGlYtOOcPhRSHNu2dD8RVxxfjxoPBkY01fbrgV2du1TZICzSocj7Y7&X-Amz-Signature=59d6372a3f95422df7676f84db0bbe8b81f2325ae7251b1094068e19c2115c91&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXKP3T7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHh0iqpx34WjltFsL%2B4Ua294MEvORYFa6NvJ2CBvP79SAiEA9GE79NlWAYtyQgnmwgTDfD0mdtp%2B%2Bc6YGuJH0LxxjkwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0WGKatQJzLWpWezyrcAx0CM3O8El%2FCM6PyHzOEjxFNVwrDsPIYpZOeWqzDlhrnkIKEPXa513y74HXJ5fVVzbUH4PzZb%2BjD2NrjpptRYtZJaI55so62bl0E0dp4m3iRrIfURILYk%2FFz60SwmLpUvFhowDy6f2uVX02l40XIq0UTIzq7xjzSelirNGhSPvNiNK5yWLf%2BxR5yI1czD9Zs1U6OdwzZ5fzUAweL3CznccliHvPTABDxWR1Zslg38Dr28U0KtHNpS8FYRiKvendKfHQZgRJ6pWYPXA6U8Bf9QTAxBKPAEgKX2LXTDZ2ETqYqHLglRaKY4yZ9tdnqu04gJVQqlfxaSlFHF8KAqGBtoqdk5QTVS6NYbmEkhhZkfgzP%2BgObv2SaBKLlYkwxg35e9oCVF3A5cJf3wUTW0ptAe2iripxyzntjHw1ypmyLdhNkk0eYbKqeIjsfBwnm5hm44qK9VtHaC9slzWQPBvCIAxdqqdC1HJU8snpUZwyw4Ltw6g6Zai9iY5Se2v1YgiAefJRutmMwAOZKYZpE%2FXiVowWu9UlmQQue8Y7a%2FKv8YSJOFsbX4gXzAPb4%2Boy4mPdCkWh2Ny9Ze91xWofr4N%2F3ksWuFwWrA6pgyPVaZTsHsvHznohY9UMN%2FaU4FBsqMJaUusEGOqUBnvTVci3aGL6zY7KMmnSBDSDGvGYimz8tjZaHYLtSnAKpSsvvsxFs2D%2Bl3QdcIvlrg%2BPZODdZIbDjuJtGj6DFF3392MY0rrsfEAU8K%2BfqyHOoK2EqJNgKuesEdxBwb3yt%2FvFvWbG7Wyl%2Fn3%2Bn6bxUlmeQ0YBHqvYNabx2K6CGlYtOOcPhRSHNu2dD8RVxxfjxoPBkY01fbrgV2du1TZICzSocj7Y7&X-Amz-Signature=5586ae683e00d14dce9286e5460db881e909bb811eb2f26c1c085120cfc901e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXKP3T7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHh0iqpx34WjltFsL%2B4Ua294MEvORYFa6NvJ2CBvP79SAiEA9GE79NlWAYtyQgnmwgTDfD0mdtp%2B%2Bc6YGuJH0LxxjkwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0WGKatQJzLWpWezyrcAx0CM3O8El%2FCM6PyHzOEjxFNVwrDsPIYpZOeWqzDlhrnkIKEPXa513y74HXJ5fVVzbUH4PzZb%2BjD2NrjpptRYtZJaI55so62bl0E0dp4m3iRrIfURILYk%2FFz60SwmLpUvFhowDy6f2uVX02l40XIq0UTIzq7xjzSelirNGhSPvNiNK5yWLf%2BxR5yI1czD9Zs1U6OdwzZ5fzUAweL3CznccliHvPTABDxWR1Zslg38Dr28U0KtHNpS8FYRiKvendKfHQZgRJ6pWYPXA6U8Bf9QTAxBKPAEgKX2LXTDZ2ETqYqHLglRaKY4yZ9tdnqu04gJVQqlfxaSlFHF8KAqGBtoqdk5QTVS6NYbmEkhhZkfgzP%2BgObv2SaBKLlYkwxg35e9oCVF3A5cJf3wUTW0ptAe2iripxyzntjHw1ypmyLdhNkk0eYbKqeIjsfBwnm5hm44qK9VtHaC9slzWQPBvCIAxdqqdC1HJU8snpUZwyw4Ltw6g6Zai9iY5Se2v1YgiAefJRutmMwAOZKYZpE%2FXiVowWu9UlmQQue8Y7a%2FKv8YSJOFsbX4gXzAPb4%2Boy4mPdCkWh2Ny9Ze91xWofr4N%2F3ksWuFwWrA6pgyPVaZTsHsvHznohY9UMN%2FaU4FBsqMJaUusEGOqUBnvTVci3aGL6zY7KMmnSBDSDGvGYimz8tjZaHYLtSnAKpSsvvsxFs2D%2Bl3QdcIvlrg%2BPZODdZIbDjuJtGj6DFF3392MY0rrsfEAU8K%2BfqyHOoK2EqJNgKuesEdxBwb3yt%2FvFvWbG7Wyl%2Fn3%2Bn6bxUlmeQ0YBHqvYNabx2K6CGlYtOOcPhRSHNu2dD8RVxxfjxoPBkY01fbrgV2du1TZICzSocj7Y7&X-Amz-Signature=38739ec6083c12ec2d4aa9e86e7341e05fb5d4efaedce7df1322c7dd3e733c00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXKP3T7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHh0iqpx34WjltFsL%2B4Ua294MEvORYFa6NvJ2CBvP79SAiEA9GE79NlWAYtyQgnmwgTDfD0mdtp%2B%2Bc6YGuJH0LxxjkwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0WGKatQJzLWpWezyrcAx0CM3O8El%2FCM6PyHzOEjxFNVwrDsPIYpZOeWqzDlhrnkIKEPXa513y74HXJ5fVVzbUH4PzZb%2BjD2NrjpptRYtZJaI55so62bl0E0dp4m3iRrIfURILYk%2FFz60SwmLpUvFhowDy6f2uVX02l40XIq0UTIzq7xjzSelirNGhSPvNiNK5yWLf%2BxR5yI1czD9Zs1U6OdwzZ5fzUAweL3CznccliHvPTABDxWR1Zslg38Dr28U0KtHNpS8FYRiKvendKfHQZgRJ6pWYPXA6U8Bf9QTAxBKPAEgKX2LXTDZ2ETqYqHLglRaKY4yZ9tdnqu04gJVQqlfxaSlFHF8KAqGBtoqdk5QTVS6NYbmEkhhZkfgzP%2BgObv2SaBKLlYkwxg35e9oCVF3A5cJf3wUTW0ptAe2iripxyzntjHw1ypmyLdhNkk0eYbKqeIjsfBwnm5hm44qK9VtHaC9slzWQPBvCIAxdqqdC1HJU8snpUZwyw4Ltw6g6Zai9iY5Se2v1YgiAefJRutmMwAOZKYZpE%2FXiVowWu9UlmQQue8Y7a%2FKv8YSJOFsbX4gXzAPb4%2Boy4mPdCkWh2Ny9Ze91xWofr4N%2F3ksWuFwWrA6pgyPVaZTsHsvHznohY9UMN%2FaU4FBsqMJaUusEGOqUBnvTVci3aGL6zY7KMmnSBDSDGvGYimz8tjZaHYLtSnAKpSsvvsxFs2D%2Bl3QdcIvlrg%2BPZODdZIbDjuJtGj6DFF3392MY0rrsfEAU8K%2BfqyHOoK2EqJNgKuesEdxBwb3yt%2FvFvWbG7Wyl%2Fn3%2Bn6bxUlmeQ0YBHqvYNabx2K6CGlYtOOcPhRSHNu2dD8RVxxfjxoPBkY01fbrgV2du1TZICzSocj7Y7&X-Amz-Signature=485cbeace6c3c5dc6dae4faa39f8a44905362a3a70ef4075bba962576ac6d0ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXKP3T7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHh0iqpx34WjltFsL%2B4Ua294MEvORYFa6NvJ2CBvP79SAiEA9GE79NlWAYtyQgnmwgTDfD0mdtp%2B%2Bc6YGuJH0LxxjkwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0WGKatQJzLWpWezyrcAx0CM3O8El%2FCM6PyHzOEjxFNVwrDsPIYpZOeWqzDlhrnkIKEPXa513y74HXJ5fVVzbUH4PzZb%2BjD2NrjpptRYtZJaI55so62bl0E0dp4m3iRrIfURILYk%2FFz60SwmLpUvFhowDy6f2uVX02l40XIq0UTIzq7xjzSelirNGhSPvNiNK5yWLf%2BxR5yI1czD9Zs1U6OdwzZ5fzUAweL3CznccliHvPTABDxWR1Zslg38Dr28U0KtHNpS8FYRiKvendKfHQZgRJ6pWYPXA6U8Bf9QTAxBKPAEgKX2LXTDZ2ETqYqHLglRaKY4yZ9tdnqu04gJVQqlfxaSlFHF8KAqGBtoqdk5QTVS6NYbmEkhhZkfgzP%2BgObv2SaBKLlYkwxg35e9oCVF3A5cJf3wUTW0ptAe2iripxyzntjHw1ypmyLdhNkk0eYbKqeIjsfBwnm5hm44qK9VtHaC9slzWQPBvCIAxdqqdC1HJU8snpUZwyw4Ltw6g6Zai9iY5Se2v1YgiAefJRutmMwAOZKYZpE%2FXiVowWu9UlmQQue8Y7a%2FKv8YSJOFsbX4gXzAPb4%2Boy4mPdCkWh2Ny9Ze91xWofr4N%2F3ksWuFwWrA6pgyPVaZTsHsvHznohY9UMN%2FaU4FBsqMJaUusEGOqUBnvTVci3aGL6zY7KMmnSBDSDGvGYimz8tjZaHYLtSnAKpSsvvsxFs2D%2Bl3QdcIvlrg%2BPZODdZIbDjuJtGj6DFF3392MY0rrsfEAU8K%2BfqyHOoK2EqJNgKuesEdxBwb3yt%2FvFvWbG7Wyl%2Fn3%2Bn6bxUlmeQ0YBHqvYNabx2K6CGlYtOOcPhRSHNu2dD8RVxxfjxoPBkY01fbrgV2du1TZICzSocj7Y7&X-Amz-Signature=7238f698753054f29d7bec7c1781974ebdc090e68a6e7c6e526c90a51153def8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXKP3T7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIHh0iqpx34WjltFsL%2B4Ua294MEvORYFa6NvJ2CBvP79SAiEA9GE79NlWAYtyQgnmwgTDfD0mdtp%2B%2Bc6YGuJH0LxxjkwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0WGKatQJzLWpWezyrcAx0CM3O8El%2FCM6PyHzOEjxFNVwrDsPIYpZOeWqzDlhrnkIKEPXa513y74HXJ5fVVzbUH4PzZb%2BjD2NrjpptRYtZJaI55so62bl0E0dp4m3iRrIfURILYk%2FFz60SwmLpUvFhowDy6f2uVX02l40XIq0UTIzq7xjzSelirNGhSPvNiNK5yWLf%2BxR5yI1czD9Zs1U6OdwzZ5fzUAweL3CznccliHvPTABDxWR1Zslg38Dr28U0KtHNpS8FYRiKvendKfHQZgRJ6pWYPXA6U8Bf9QTAxBKPAEgKX2LXTDZ2ETqYqHLglRaKY4yZ9tdnqu04gJVQqlfxaSlFHF8KAqGBtoqdk5QTVS6NYbmEkhhZkfgzP%2BgObv2SaBKLlYkwxg35e9oCVF3A5cJf3wUTW0ptAe2iripxyzntjHw1ypmyLdhNkk0eYbKqeIjsfBwnm5hm44qK9VtHaC9slzWQPBvCIAxdqqdC1HJU8snpUZwyw4Ltw6g6Zai9iY5Se2v1YgiAefJRutmMwAOZKYZpE%2FXiVowWu9UlmQQue8Y7a%2FKv8YSJOFsbX4gXzAPb4%2Boy4mPdCkWh2Ny9Ze91xWofr4N%2F3ksWuFwWrA6pgyPVaZTsHsvHznohY9UMN%2FaU4FBsqMJaUusEGOqUBnvTVci3aGL6zY7KMmnSBDSDGvGYimz8tjZaHYLtSnAKpSsvvsxFs2D%2Bl3QdcIvlrg%2BPZODdZIbDjuJtGj6DFF3392MY0rrsfEAU8K%2BfqyHOoK2EqJNgKuesEdxBwb3yt%2FvFvWbG7Wyl%2Fn3%2Bn6bxUlmeQ0YBHqvYNabx2K6CGlYtOOcPhRSHNu2dD8RVxxfjxoPBkY01fbrgV2du1TZICzSocj7Y7&X-Amz-Signature=05402654c9830c47abc8245575a44997b7f5f4408272969a1c8c0f09bdecdabb&X-Amz-SignedHeaders=host&x-id=GetObject)
