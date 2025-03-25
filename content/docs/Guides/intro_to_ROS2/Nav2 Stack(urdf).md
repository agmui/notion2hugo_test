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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOSM3H3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNmztjc1gPAPwQUSkNxM2fK%2B%2BD%2FM%2F3EsFErAJ%2FYy%2FX7wIgYb7kEg1VRdbo%2FFgjKZHQVARijeOo6%2BOwie3rI16a1n0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5kUeFwJDkDeNSggSrcA1EsxOTiKslzkN22%2BB8uDq%2B2HxOYDNQioZ7%2FZGtQmWhhYKhP9WBjqIAE1AbCh4mKYV5XicYntF7csrFTXlUyWlesT4gUWVR%2BjjpfRS8xVXMsObF0pYwPkL32GX5xi%2B5%2BGxu2wieFBHio3Fc%2BfghMeShReaNzBByTZDeIqKiFcBd%2FeS4A1XxJFEMl6vWdEoZ8YY1vxd9sJg33N%2B%2BAxoE9Hw92HBOtUlkfw16Gyvyn2DNhfVz%2BYhC6tIgST%2BBtJ8VrwCpqnaJ14r3QDcNBy6T4iSrxLQJfxeNgq6rg62VdvPLpKQcely8hMLVFU6ytXN1B5%2BwJs2XxrRnGV6TIiZcRJnF8kgLJzaJWnm9qXqwGLFlJi%2BxPJIxVxbYYWYeoKkSDeNv1I%2Fovh7JhqkRKTNb4OivWDt9RzaMKCh9QE3AkeL2fH0%2B%2BbKPlLtmFaTlWdncuE5VXIfCG9I2lk%2FRSfpRoZmfIIXG3glaKPkQPU4rHbG6oXojNPY%2BtVaTaNy9J19%2Bp4eW%2B6m1IB3VkdFj6X5LN11mIn3XV3ffOy15ZhbFyL3NPw6H9SvXqeZXc5MW%2Fi0ZX1iPtzn4i0W%2Be4aEbTb9LvA87WucVns1vZ4OJ1oiW0NzDa6jcAsaceXH53JytMImWiL8GOqUBzAlKF%2BEDFNDT7A1aDL3DEkgzCUEEoy9vGEOHT2Wgb%2Fr2fLp5RwsoC%2FJx3JKjSYVPfYN1P3ULG3PE2uzRr7V1JZYvpYaM5aVpxWuhUwY2ypg18MmM4J03R0G38FS%2FNu2vlktKiSH8KP0fiOypWvSoAcppE3twEVe1vc9rYCaeSvTibTOQvhlH%2FsZmoOGG4vL8ZIdoN4wa4vVuRdO4SeTJ91Yp4EOv&X-Amz-Signature=3c6d84311f28310be79f8f0d8bfa9ce1f2c14866c203f95fe33bcef3197058c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOSM3H3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNmztjc1gPAPwQUSkNxM2fK%2B%2BD%2FM%2F3EsFErAJ%2FYy%2FX7wIgYb7kEg1VRdbo%2FFgjKZHQVARijeOo6%2BOwie3rI16a1n0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5kUeFwJDkDeNSggSrcA1EsxOTiKslzkN22%2BB8uDq%2B2HxOYDNQioZ7%2FZGtQmWhhYKhP9WBjqIAE1AbCh4mKYV5XicYntF7csrFTXlUyWlesT4gUWVR%2BjjpfRS8xVXMsObF0pYwPkL32GX5xi%2B5%2BGxu2wieFBHio3Fc%2BfghMeShReaNzBByTZDeIqKiFcBd%2FeS4A1XxJFEMl6vWdEoZ8YY1vxd9sJg33N%2B%2BAxoE9Hw92HBOtUlkfw16Gyvyn2DNhfVz%2BYhC6tIgST%2BBtJ8VrwCpqnaJ14r3QDcNBy6T4iSrxLQJfxeNgq6rg62VdvPLpKQcely8hMLVFU6ytXN1B5%2BwJs2XxrRnGV6TIiZcRJnF8kgLJzaJWnm9qXqwGLFlJi%2BxPJIxVxbYYWYeoKkSDeNv1I%2Fovh7JhqkRKTNb4OivWDt9RzaMKCh9QE3AkeL2fH0%2B%2BbKPlLtmFaTlWdncuE5VXIfCG9I2lk%2FRSfpRoZmfIIXG3glaKPkQPU4rHbG6oXojNPY%2BtVaTaNy9J19%2Bp4eW%2B6m1IB3VkdFj6X5LN11mIn3XV3ffOy15ZhbFyL3NPw6H9SvXqeZXc5MW%2Fi0ZX1iPtzn4i0W%2Be4aEbTb9LvA87WucVns1vZ4OJ1oiW0NzDa6jcAsaceXH53JytMImWiL8GOqUBzAlKF%2BEDFNDT7A1aDL3DEkgzCUEEoy9vGEOHT2Wgb%2Fr2fLp5RwsoC%2FJx3JKjSYVPfYN1P3ULG3PE2uzRr7V1JZYvpYaM5aVpxWuhUwY2ypg18MmM4J03R0G38FS%2FNu2vlktKiSH8KP0fiOypWvSoAcppE3twEVe1vc9rYCaeSvTibTOQvhlH%2FsZmoOGG4vL8ZIdoN4wa4vVuRdO4SeTJ91Yp4EOv&X-Amz-Signature=b48ef234efebe25639e7f5d8689ffccb88c82a59717327ee12508d3276e591ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOSM3H3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNmztjc1gPAPwQUSkNxM2fK%2B%2BD%2FM%2F3EsFErAJ%2FYy%2FX7wIgYb7kEg1VRdbo%2FFgjKZHQVARijeOo6%2BOwie3rI16a1n0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5kUeFwJDkDeNSggSrcA1EsxOTiKslzkN22%2BB8uDq%2B2HxOYDNQioZ7%2FZGtQmWhhYKhP9WBjqIAE1AbCh4mKYV5XicYntF7csrFTXlUyWlesT4gUWVR%2BjjpfRS8xVXMsObF0pYwPkL32GX5xi%2B5%2BGxu2wieFBHio3Fc%2BfghMeShReaNzBByTZDeIqKiFcBd%2FeS4A1XxJFEMl6vWdEoZ8YY1vxd9sJg33N%2B%2BAxoE9Hw92HBOtUlkfw16Gyvyn2DNhfVz%2BYhC6tIgST%2BBtJ8VrwCpqnaJ14r3QDcNBy6T4iSrxLQJfxeNgq6rg62VdvPLpKQcely8hMLVFU6ytXN1B5%2BwJs2XxrRnGV6TIiZcRJnF8kgLJzaJWnm9qXqwGLFlJi%2BxPJIxVxbYYWYeoKkSDeNv1I%2Fovh7JhqkRKTNb4OivWDt9RzaMKCh9QE3AkeL2fH0%2B%2BbKPlLtmFaTlWdncuE5VXIfCG9I2lk%2FRSfpRoZmfIIXG3glaKPkQPU4rHbG6oXojNPY%2BtVaTaNy9J19%2Bp4eW%2B6m1IB3VkdFj6X5LN11mIn3XV3ffOy15ZhbFyL3NPw6H9SvXqeZXc5MW%2Fi0ZX1iPtzn4i0W%2Be4aEbTb9LvA87WucVns1vZ4OJ1oiW0NzDa6jcAsaceXH53JytMImWiL8GOqUBzAlKF%2BEDFNDT7A1aDL3DEkgzCUEEoy9vGEOHT2Wgb%2Fr2fLp5RwsoC%2FJx3JKjSYVPfYN1P3ULG3PE2uzRr7V1JZYvpYaM5aVpxWuhUwY2ypg18MmM4J03R0G38FS%2FNu2vlktKiSH8KP0fiOypWvSoAcppE3twEVe1vc9rYCaeSvTibTOQvhlH%2FsZmoOGG4vL8ZIdoN4wa4vVuRdO4SeTJ91Yp4EOv&X-Amz-Signature=4cc43c93eb44a95f98f40f7857a811c955006b554336fca23d486fc20f6da9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOSM3H3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNmztjc1gPAPwQUSkNxM2fK%2B%2BD%2FM%2F3EsFErAJ%2FYy%2FX7wIgYb7kEg1VRdbo%2FFgjKZHQVARijeOo6%2BOwie3rI16a1n0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5kUeFwJDkDeNSggSrcA1EsxOTiKslzkN22%2BB8uDq%2B2HxOYDNQioZ7%2FZGtQmWhhYKhP9WBjqIAE1AbCh4mKYV5XicYntF7csrFTXlUyWlesT4gUWVR%2BjjpfRS8xVXMsObF0pYwPkL32GX5xi%2B5%2BGxu2wieFBHio3Fc%2BfghMeShReaNzBByTZDeIqKiFcBd%2FeS4A1XxJFEMl6vWdEoZ8YY1vxd9sJg33N%2B%2BAxoE9Hw92HBOtUlkfw16Gyvyn2DNhfVz%2BYhC6tIgST%2BBtJ8VrwCpqnaJ14r3QDcNBy6T4iSrxLQJfxeNgq6rg62VdvPLpKQcely8hMLVFU6ytXN1B5%2BwJs2XxrRnGV6TIiZcRJnF8kgLJzaJWnm9qXqwGLFlJi%2BxPJIxVxbYYWYeoKkSDeNv1I%2Fovh7JhqkRKTNb4OivWDt9RzaMKCh9QE3AkeL2fH0%2B%2BbKPlLtmFaTlWdncuE5VXIfCG9I2lk%2FRSfpRoZmfIIXG3glaKPkQPU4rHbG6oXojNPY%2BtVaTaNy9J19%2Bp4eW%2B6m1IB3VkdFj6X5LN11mIn3XV3ffOy15ZhbFyL3NPw6H9SvXqeZXc5MW%2Fi0ZX1iPtzn4i0W%2Be4aEbTb9LvA87WucVns1vZ4OJ1oiW0NzDa6jcAsaceXH53JytMImWiL8GOqUBzAlKF%2BEDFNDT7A1aDL3DEkgzCUEEoy9vGEOHT2Wgb%2Fr2fLp5RwsoC%2FJx3JKjSYVPfYN1P3ULG3PE2uzRr7V1JZYvpYaM5aVpxWuhUwY2ypg18MmM4J03R0G38FS%2FNu2vlktKiSH8KP0fiOypWvSoAcppE3twEVe1vc9rYCaeSvTibTOQvhlH%2FsZmoOGG4vL8ZIdoN4wa4vVuRdO4SeTJ91Yp4EOv&X-Amz-Signature=3811612780fe7858e78587d0a6f7f8708b94bd9c6603eb9f92684e780c8ac49f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOSM3H3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNmztjc1gPAPwQUSkNxM2fK%2B%2BD%2FM%2F3EsFErAJ%2FYy%2FX7wIgYb7kEg1VRdbo%2FFgjKZHQVARijeOo6%2BOwie3rI16a1n0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5kUeFwJDkDeNSggSrcA1EsxOTiKslzkN22%2BB8uDq%2B2HxOYDNQioZ7%2FZGtQmWhhYKhP9WBjqIAE1AbCh4mKYV5XicYntF7csrFTXlUyWlesT4gUWVR%2BjjpfRS8xVXMsObF0pYwPkL32GX5xi%2B5%2BGxu2wieFBHio3Fc%2BfghMeShReaNzBByTZDeIqKiFcBd%2FeS4A1XxJFEMl6vWdEoZ8YY1vxd9sJg33N%2B%2BAxoE9Hw92HBOtUlkfw16Gyvyn2DNhfVz%2BYhC6tIgST%2BBtJ8VrwCpqnaJ14r3QDcNBy6T4iSrxLQJfxeNgq6rg62VdvPLpKQcely8hMLVFU6ytXN1B5%2BwJs2XxrRnGV6TIiZcRJnF8kgLJzaJWnm9qXqwGLFlJi%2BxPJIxVxbYYWYeoKkSDeNv1I%2Fovh7JhqkRKTNb4OivWDt9RzaMKCh9QE3AkeL2fH0%2B%2BbKPlLtmFaTlWdncuE5VXIfCG9I2lk%2FRSfpRoZmfIIXG3glaKPkQPU4rHbG6oXojNPY%2BtVaTaNy9J19%2Bp4eW%2B6m1IB3VkdFj6X5LN11mIn3XV3ffOy15ZhbFyL3NPw6H9SvXqeZXc5MW%2Fi0ZX1iPtzn4i0W%2Be4aEbTb9LvA87WucVns1vZ4OJ1oiW0NzDa6jcAsaceXH53JytMImWiL8GOqUBzAlKF%2BEDFNDT7A1aDL3DEkgzCUEEoy9vGEOHT2Wgb%2Fr2fLp5RwsoC%2FJx3JKjSYVPfYN1P3ULG3PE2uzRr7V1JZYvpYaM5aVpxWuhUwY2ypg18MmM4J03R0G38FS%2FNu2vlktKiSH8KP0fiOypWvSoAcppE3twEVe1vc9rYCaeSvTibTOQvhlH%2FsZmoOGG4vL8ZIdoN4wa4vVuRdO4SeTJ91Yp4EOv&X-Amz-Signature=8f78e6a9b68b9715c6bf0ba070d5fe1458cda81bfb6eaf192f2b5000db1c930d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOSM3H3%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T021839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNmztjc1gPAPwQUSkNxM2fK%2B%2BD%2FM%2F3EsFErAJ%2FYy%2FX7wIgYb7kEg1VRdbo%2FFgjKZHQVARijeOo6%2BOwie3rI16a1n0qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5kUeFwJDkDeNSggSrcA1EsxOTiKslzkN22%2BB8uDq%2B2HxOYDNQioZ7%2FZGtQmWhhYKhP9WBjqIAE1AbCh4mKYV5XicYntF7csrFTXlUyWlesT4gUWVR%2BjjpfRS8xVXMsObF0pYwPkL32GX5xi%2B5%2BGxu2wieFBHio3Fc%2BfghMeShReaNzBByTZDeIqKiFcBd%2FeS4A1XxJFEMl6vWdEoZ8YY1vxd9sJg33N%2B%2BAxoE9Hw92HBOtUlkfw16Gyvyn2DNhfVz%2BYhC6tIgST%2BBtJ8VrwCpqnaJ14r3QDcNBy6T4iSrxLQJfxeNgq6rg62VdvPLpKQcely8hMLVFU6ytXN1B5%2BwJs2XxrRnGV6TIiZcRJnF8kgLJzaJWnm9qXqwGLFlJi%2BxPJIxVxbYYWYeoKkSDeNv1I%2Fovh7JhqkRKTNb4OivWDt9RzaMKCh9QE3AkeL2fH0%2B%2BbKPlLtmFaTlWdncuE5VXIfCG9I2lk%2FRSfpRoZmfIIXG3glaKPkQPU4rHbG6oXojNPY%2BtVaTaNy9J19%2Bp4eW%2B6m1IB3VkdFj6X5LN11mIn3XV3ffOy15ZhbFyL3NPw6H9SvXqeZXc5MW%2Fi0ZX1iPtzn4i0W%2Be4aEbTb9LvA87WucVns1vZ4OJ1oiW0NzDa6jcAsaceXH53JytMImWiL8GOqUBzAlKF%2BEDFNDT7A1aDL3DEkgzCUEEoy9vGEOHT2Wgb%2Fr2fLp5RwsoC%2FJx3JKjSYVPfYN1P3ULG3PE2uzRr7V1JZYvpYaM5aVpxWuhUwY2ypg18MmM4J03R0G38FS%2FNu2vlktKiSH8KP0fiOypWvSoAcppE3twEVe1vc9rYCaeSvTibTOQvhlH%2FsZmoOGG4vL8ZIdoN4wa4vVuRdO4SeTJ91Yp4EOv&X-Amz-Signature=3877e76a61590a035321c9c0c8e153340698ec36f9546ccb7acdfdcd65f40655&X-Amz-SignedHeaders=host&x-id=GetObject)
