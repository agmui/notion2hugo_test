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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAKXZZS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC5QzoiYAN8ZiuLwlfwQL191NEeR8xOcZ%2FfI40jWKGD6AIgMegVni9g84xl%2FcJeQoH9RdeppejQzMRtJPdFnzy0fmYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv0%2B6EcvK4kYoGMLCrcA%2Fqt0ygaog5BbuLbvRHDzuxhcqqZchNzM4%2F41DeqotQQC78erL7GLxojx1hmxxP3CGJ7bfd%2FTTfJfJkSTtLSA7TXv%2FC62TNtjSa8PKastFaAxiUMSBvT%2BhjWyzGSnae%2FCIA825BE4TmDx0j0ZhGN1AFKxw1nTAyZaYJEfxt1BJYnqFQqornSWWM4bE4Q%2BWrLrawpazuFH0Z8IVEqcWrIP8Xr43wcDr4xrCdBdglOeIHAQVBg49mMj6%2FXjoghl6V38ZtZqVi2ebHh8sAwWMTxtlnVaIW0wCRn5jd81BtbiMuMcC04yPPKw4PyfFlJMcZuPHUlyhH2Yt6RuLuYJ4%2FHlcvZ7TLzwY2xzxvwm4JwNFEJ%2B0Xy6pz2%2FtH6TI%2Bs1pINoxYlYpc%2FuPPFw%2FUvKpnLwZKJD6OQayqWVdOpybHgS6A5BpLCMxgx7ukQ33eaFOgn%2Ft%2BAyhRWoNdu6WY7oHAD8vXxSUvs5OQrVO5kinvc1sa7hdeSTRWO3QmtKPWwMtJaD2dK1TNwGMRnFIYqwXp%2FqoyCfR4Ko%2BvT31CNUm5WO3SEurwtSxgLpi2yoyAZzwP4T8CXYW6Eoc0aEEEJjGR%2FJ%2B%2BIjoVK1faEUqvVUTTzPMFy73TTAeFWjKKEZF52MMuZ6sMGOqUBnrXlXJcozONiW7yLOI734jdYGSAQ4Srkt5AuREIwEz8NzxucnjkSz8PpC%2FrHTlD5Ryyv9Ws2Q%2BGo4y1lP%2FvVJBqjTqoiZzgDM%2FlmrfKXcB6SpXmpPMMxQGu8aNaMZIJUuFUseR0egDo3XVrj5Iy7CAny0gZ1Nj8gvyyViBLKHTiNkm%2Fu3sMcE6iWfMxttmeKjwC%2BVZZ93qNx8w01DuBejNF1HkfI&X-Amz-Signature=755ef183d65deeafdcca867bce095feaf5e5b5fefae925f0a0dbf8c41569ca1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAKXZZS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC5QzoiYAN8ZiuLwlfwQL191NEeR8xOcZ%2FfI40jWKGD6AIgMegVni9g84xl%2FcJeQoH9RdeppejQzMRtJPdFnzy0fmYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv0%2B6EcvK4kYoGMLCrcA%2Fqt0ygaog5BbuLbvRHDzuxhcqqZchNzM4%2F41DeqotQQC78erL7GLxojx1hmxxP3CGJ7bfd%2FTTfJfJkSTtLSA7TXv%2FC62TNtjSa8PKastFaAxiUMSBvT%2BhjWyzGSnae%2FCIA825BE4TmDx0j0ZhGN1AFKxw1nTAyZaYJEfxt1BJYnqFQqornSWWM4bE4Q%2BWrLrawpazuFH0Z8IVEqcWrIP8Xr43wcDr4xrCdBdglOeIHAQVBg49mMj6%2FXjoghl6V38ZtZqVi2ebHh8sAwWMTxtlnVaIW0wCRn5jd81BtbiMuMcC04yPPKw4PyfFlJMcZuPHUlyhH2Yt6RuLuYJ4%2FHlcvZ7TLzwY2xzxvwm4JwNFEJ%2B0Xy6pz2%2FtH6TI%2Bs1pINoxYlYpc%2FuPPFw%2FUvKpnLwZKJD6OQayqWVdOpybHgS6A5BpLCMxgx7ukQ33eaFOgn%2Ft%2BAyhRWoNdu6WY7oHAD8vXxSUvs5OQrVO5kinvc1sa7hdeSTRWO3QmtKPWwMtJaD2dK1TNwGMRnFIYqwXp%2FqoyCfR4Ko%2BvT31CNUm5WO3SEurwtSxgLpi2yoyAZzwP4T8CXYW6Eoc0aEEEJjGR%2FJ%2B%2BIjoVK1faEUqvVUTTzPMFy73TTAeFWjKKEZF52MMuZ6sMGOqUBnrXlXJcozONiW7yLOI734jdYGSAQ4Srkt5AuREIwEz8NzxucnjkSz8PpC%2FrHTlD5Ryyv9Ws2Q%2BGo4y1lP%2FvVJBqjTqoiZzgDM%2FlmrfKXcB6SpXmpPMMxQGu8aNaMZIJUuFUseR0egDo3XVrj5Iy7CAny0gZ1Nj8gvyyViBLKHTiNkm%2Fu3sMcE6iWfMxttmeKjwC%2BVZZ93qNx8w01DuBejNF1HkfI&X-Amz-Signature=f06e47e092082f6bb7637a8cf7d031543bf755ebd7adc23d23a3f67803d22869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAKXZZS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC5QzoiYAN8ZiuLwlfwQL191NEeR8xOcZ%2FfI40jWKGD6AIgMegVni9g84xl%2FcJeQoH9RdeppejQzMRtJPdFnzy0fmYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv0%2B6EcvK4kYoGMLCrcA%2Fqt0ygaog5BbuLbvRHDzuxhcqqZchNzM4%2F41DeqotQQC78erL7GLxojx1hmxxP3CGJ7bfd%2FTTfJfJkSTtLSA7TXv%2FC62TNtjSa8PKastFaAxiUMSBvT%2BhjWyzGSnae%2FCIA825BE4TmDx0j0ZhGN1AFKxw1nTAyZaYJEfxt1BJYnqFQqornSWWM4bE4Q%2BWrLrawpazuFH0Z8IVEqcWrIP8Xr43wcDr4xrCdBdglOeIHAQVBg49mMj6%2FXjoghl6V38ZtZqVi2ebHh8sAwWMTxtlnVaIW0wCRn5jd81BtbiMuMcC04yPPKw4PyfFlJMcZuPHUlyhH2Yt6RuLuYJ4%2FHlcvZ7TLzwY2xzxvwm4JwNFEJ%2B0Xy6pz2%2FtH6TI%2Bs1pINoxYlYpc%2FuPPFw%2FUvKpnLwZKJD6OQayqWVdOpybHgS6A5BpLCMxgx7ukQ33eaFOgn%2Ft%2BAyhRWoNdu6WY7oHAD8vXxSUvs5OQrVO5kinvc1sa7hdeSTRWO3QmtKPWwMtJaD2dK1TNwGMRnFIYqwXp%2FqoyCfR4Ko%2BvT31CNUm5WO3SEurwtSxgLpi2yoyAZzwP4T8CXYW6Eoc0aEEEJjGR%2FJ%2B%2BIjoVK1faEUqvVUTTzPMFy73TTAeFWjKKEZF52MMuZ6sMGOqUBnrXlXJcozONiW7yLOI734jdYGSAQ4Srkt5AuREIwEz8NzxucnjkSz8PpC%2FrHTlD5Ryyv9Ws2Q%2BGo4y1lP%2FvVJBqjTqoiZzgDM%2FlmrfKXcB6SpXmpPMMxQGu8aNaMZIJUuFUseR0egDo3XVrj5Iy7CAny0gZ1Nj8gvyyViBLKHTiNkm%2Fu3sMcE6iWfMxttmeKjwC%2BVZZ93qNx8w01DuBejNF1HkfI&X-Amz-Signature=262a2ec20d16a0b6935e629d89e1db4bd443c0806c2a560dbaa12e87933ac285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAKXZZS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC5QzoiYAN8ZiuLwlfwQL191NEeR8xOcZ%2FfI40jWKGD6AIgMegVni9g84xl%2FcJeQoH9RdeppejQzMRtJPdFnzy0fmYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv0%2B6EcvK4kYoGMLCrcA%2Fqt0ygaog5BbuLbvRHDzuxhcqqZchNzM4%2F41DeqotQQC78erL7GLxojx1hmxxP3CGJ7bfd%2FTTfJfJkSTtLSA7TXv%2FC62TNtjSa8PKastFaAxiUMSBvT%2BhjWyzGSnae%2FCIA825BE4TmDx0j0ZhGN1AFKxw1nTAyZaYJEfxt1BJYnqFQqornSWWM4bE4Q%2BWrLrawpazuFH0Z8IVEqcWrIP8Xr43wcDr4xrCdBdglOeIHAQVBg49mMj6%2FXjoghl6V38ZtZqVi2ebHh8sAwWMTxtlnVaIW0wCRn5jd81BtbiMuMcC04yPPKw4PyfFlJMcZuPHUlyhH2Yt6RuLuYJ4%2FHlcvZ7TLzwY2xzxvwm4JwNFEJ%2B0Xy6pz2%2FtH6TI%2Bs1pINoxYlYpc%2FuPPFw%2FUvKpnLwZKJD6OQayqWVdOpybHgS6A5BpLCMxgx7ukQ33eaFOgn%2Ft%2BAyhRWoNdu6WY7oHAD8vXxSUvs5OQrVO5kinvc1sa7hdeSTRWO3QmtKPWwMtJaD2dK1TNwGMRnFIYqwXp%2FqoyCfR4Ko%2BvT31CNUm5WO3SEurwtSxgLpi2yoyAZzwP4T8CXYW6Eoc0aEEEJjGR%2FJ%2B%2BIjoVK1faEUqvVUTTzPMFy73TTAeFWjKKEZF52MMuZ6sMGOqUBnrXlXJcozONiW7yLOI734jdYGSAQ4Srkt5AuREIwEz8NzxucnjkSz8PpC%2FrHTlD5Ryyv9Ws2Q%2BGo4y1lP%2FvVJBqjTqoiZzgDM%2FlmrfKXcB6SpXmpPMMxQGu8aNaMZIJUuFUseR0egDo3XVrj5Iy7CAny0gZ1Nj8gvyyViBLKHTiNkm%2Fu3sMcE6iWfMxttmeKjwC%2BVZZ93qNx8w01DuBejNF1HkfI&X-Amz-Signature=33fa103cea315563b53ab1b53f3e1b8c8c13d7e45519622b2e91560f65c4ffad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAKXZZS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC5QzoiYAN8ZiuLwlfwQL191NEeR8xOcZ%2FfI40jWKGD6AIgMegVni9g84xl%2FcJeQoH9RdeppejQzMRtJPdFnzy0fmYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv0%2B6EcvK4kYoGMLCrcA%2Fqt0ygaog5BbuLbvRHDzuxhcqqZchNzM4%2F41DeqotQQC78erL7GLxojx1hmxxP3CGJ7bfd%2FTTfJfJkSTtLSA7TXv%2FC62TNtjSa8PKastFaAxiUMSBvT%2BhjWyzGSnae%2FCIA825BE4TmDx0j0ZhGN1AFKxw1nTAyZaYJEfxt1BJYnqFQqornSWWM4bE4Q%2BWrLrawpazuFH0Z8IVEqcWrIP8Xr43wcDr4xrCdBdglOeIHAQVBg49mMj6%2FXjoghl6V38ZtZqVi2ebHh8sAwWMTxtlnVaIW0wCRn5jd81BtbiMuMcC04yPPKw4PyfFlJMcZuPHUlyhH2Yt6RuLuYJ4%2FHlcvZ7TLzwY2xzxvwm4JwNFEJ%2B0Xy6pz2%2FtH6TI%2Bs1pINoxYlYpc%2FuPPFw%2FUvKpnLwZKJD6OQayqWVdOpybHgS6A5BpLCMxgx7ukQ33eaFOgn%2Ft%2BAyhRWoNdu6WY7oHAD8vXxSUvs5OQrVO5kinvc1sa7hdeSTRWO3QmtKPWwMtJaD2dK1TNwGMRnFIYqwXp%2FqoyCfR4Ko%2BvT31CNUm5WO3SEurwtSxgLpi2yoyAZzwP4T8CXYW6Eoc0aEEEJjGR%2FJ%2B%2BIjoVK1faEUqvVUTTzPMFy73TTAeFWjKKEZF52MMuZ6sMGOqUBnrXlXJcozONiW7yLOI734jdYGSAQ4Srkt5AuREIwEz8NzxucnjkSz8PpC%2FrHTlD5Ryyv9Ws2Q%2BGo4y1lP%2FvVJBqjTqoiZzgDM%2FlmrfKXcB6SpXmpPMMxQGu8aNaMZIJUuFUseR0egDo3XVrj5Iy7CAny0gZ1Nj8gvyyViBLKHTiNkm%2Fu3sMcE6iWfMxttmeKjwC%2BVZZ93qNx8w01DuBejNF1HkfI&X-Amz-Signature=2d36234486533daa0531229ff861da4b4d1a3040754f44b9fadc24e89511dc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRAKXZZS%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQC5QzoiYAN8ZiuLwlfwQL191NEeR8xOcZ%2FfI40jWKGD6AIgMegVni9g84xl%2FcJeQoH9RdeppejQzMRtJPdFnzy0fmYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv0%2B6EcvK4kYoGMLCrcA%2Fqt0ygaog5BbuLbvRHDzuxhcqqZchNzM4%2F41DeqotQQC78erL7GLxojx1hmxxP3CGJ7bfd%2FTTfJfJkSTtLSA7TXv%2FC62TNtjSa8PKastFaAxiUMSBvT%2BhjWyzGSnae%2FCIA825BE4TmDx0j0ZhGN1AFKxw1nTAyZaYJEfxt1BJYnqFQqornSWWM4bE4Q%2BWrLrawpazuFH0Z8IVEqcWrIP8Xr43wcDr4xrCdBdglOeIHAQVBg49mMj6%2FXjoghl6V38ZtZqVi2ebHh8sAwWMTxtlnVaIW0wCRn5jd81BtbiMuMcC04yPPKw4PyfFlJMcZuPHUlyhH2Yt6RuLuYJ4%2FHlcvZ7TLzwY2xzxvwm4JwNFEJ%2B0Xy6pz2%2FtH6TI%2Bs1pINoxYlYpc%2FuPPFw%2FUvKpnLwZKJD6OQayqWVdOpybHgS6A5BpLCMxgx7ukQ33eaFOgn%2Ft%2BAyhRWoNdu6WY7oHAD8vXxSUvs5OQrVO5kinvc1sa7hdeSTRWO3QmtKPWwMtJaD2dK1TNwGMRnFIYqwXp%2FqoyCfR4Ko%2BvT31CNUm5WO3SEurwtSxgLpi2yoyAZzwP4T8CXYW6Eoc0aEEEJjGR%2FJ%2B%2BIjoVK1faEUqvVUTTzPMFy73TTAeFWjKKEZF52MMuZ6sMGOqUBnrXlXJcozONiW7yLOI734jdYGSAQ4Srkt5AuREIwEz8NzxucnjkSz8PpC%2FrHTlD5Ryyv9Ws2Q%2BGo4y1lP%2FvVJBqjTqoiZzgDM%2FlmrfKXcB6SpXmpPMMxQGu8aNaMZIJUuFUseR0egDo3XVrj5Iy7CAny0gZ1Nj8gvyyViBLKHTiNkm%2Fu3sMcE6iWfMxttmeKjwC%2BVZZ93qNx8w01DuBejNF1HkfI&X-Amz-Signature=205ee3b0cb68046098ff2628479e939935a207cf8a97129123c4a9a71c9a543d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
