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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U2PQE2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGK8J0YkkAwltm4fdJRj2x7FqyZ%2BZCI%2B%2BVMou%2FCxDHmLAiAprAWqUVA8mCoRqZi57OJ3dV78tb8rsWPaDKr9X3r%2FESr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2Fc41m8GqfxvzSZ9wKtwDhbAnM79AvyXvG4Mv5c%2BPETLMZgWZ4dnGeGOUhJKSuYZuTZ6RDGLnwuuwPtdxfCerCHR%2BZEL2L6O8kxj1XiicgPcqYxCq4GbnJoRYCCfa4%2FjcPUxz%2FTLFD%2Fb7zFPGsLp%2BAr6MhoPKuhcML%2FgKeE0mpoNK24fQRoxuM%2F2SkNp9x%2BxaWBn8MBble0HKu0b5ktLw0jKzJpqK3CicZp8dzZdKxr3A427%2BXBsvG%2ByQ1ap6Wv%2FKrZ8E6jTDjDrFQlkaP3xJrtFzRZZy1BxRXbM9qZCnH1XOCLsbEjn5TrSRNRnEwc7GkWYUhUu0U5jQPuoHUtOeRrhfdO%2BEkY3zKsFN3b7qf0o59yANRsPOla%2FUmabXa8jVyn6CWqtyskHp%2Bc1euMfjPtfIl%2BpVB1wjLqt0BYhXkL8QgZx9m27ONc8lFH8TGrtRVgZh0iAr0jVZqfME5RwnNyJKgxLzJA3dKka%2Fgkje9wXSXJEde2opndBwarqbC72lOIhHeRah3b1SFmEkUElwArFpjHs13a9yK6qnXSAoXM%2BXwFsiE5fQaDBIEBJoKyBP6uBFYvmPrwyZJsOuoNgranpxUmkFtahH4shdVPJ%2B0flLlDtvU2wsvc2UTSYGK4vaZio9LN5tMXhC9Hcws8uHvQY6pgEfPznKo0LY%2F2xIJjCE%2BaJPsBPEUJALP7gBZrtRlpI77T3wqmNdClso8Zzm206nuVvZqetIWgoyhJkCDsM9qrRa5J7gcR%2BrbdHMtNw3F57rlftgI9OqHtLsUkPJPkkvVJEJlc4oFEdXgjubUkOL4dZqPDl%2Bm%2BXxUyBlgcMjchOjBglrOnDEVHNKHrj7IEim27fgeADlpwtvHFd2tGEy5VoE489Q8yTF&X-Amz-Signature=a339adb0edb7f4543bfb4089b9a5f3d2468e6762e803b54289ad810a4319ef93&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U2PQE2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGK8J0YkkAwltm4fdJRj2x7FqyZ%2BZCI%2B%2BVMou%2FCxDHmLAiAprAWqUVA8mCoRqZi57OJ3dV78tb8rsWPaDKr9X3r%2FESr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2Fc41m8GqfxvzSZ9wKtwDhbAnM79AvyXvG4Mv5c%2BPETLMZgWZ4dnGeGOUhJKSuYZuTZ6RDGLnwuuwPtdxfCerCHR%2BZEL2L6O8kxj1XiicgPcqYxCq4GbnJoRYCCfa4%2FjcPUxz%2FTLFD%2Fb7zFPGsLp%2BAr6MhoPKuhcML%2FgKeE0mpoNK24fQRoxuM%2F2SkNp9x%2BxaWBn8MBble0HKu0b5ktLw0jKzJpqK3CicZp8dzZdKxr3A427%2BXBsvG%2ByQ1ap6Wv%2FKrZ8E6jTDjDrFQlkaP3xJrtFzRZZy1BxRXbM9qZCnH1XOCLsbEjn5TrSRNRnEwc7GkWYUhUu0U5jQPuoHUtOeRrhfdO%2BEkY3zKsFN3b7qf0o59yANRsPOla%2FUmabXa8jVyn6CWqtyskHp%2Bc1euMfjPtfIl%2BpVB1wjLqt0BYhXkL8QgZx9m27ONc8lFH8TGrtRVgZh0iAr0jVZqfME5RwnNyJKgxLzJA3dKka%2Fgkje9wXSXJEde2opndBwarqbC72lOIhHeRah3b1SFmEkUElwArFpjHs13a9yK6qnXSAoXM%2BXwFsiE5fQaDBIEBJoKyBP6uBFYvmPrwyZJsOuoNgranpxUmkFtahH4shdVPJ%2B0flLlDtvU2wsvc2UTSYGK4vaZio9LN5tMXhC9Hcws8uHvQY6pgEfPznKo0LY%2F2xIJjCE%2BaJPsBPEUJALP7gBZrtRlpI77T3wqmNdClso8Zzm206nuVvZqetIWgoyhJkCDsM9qrRa5J7gcR%2BrbdHMtNw3F57rlftgI9OqHtLsUkPJPkkvVJEJlc4oFEdXgjubUkOL4dZqPDl%2Bm%2BXxUyBlgcMjchOjBglrOnDEVHNKHrj7IEim27fgeADlpwtvHFd2tGEy5VoE489Q8yTF&X-Amz-Signature=d8a0431d88982c684cda17c25fe6e742e8fd643d57bde04e5f683af7a74d7c43&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U2PQE2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGK8J0YkkAwltm4fdJRj2x7FqyZ%2BZCI%2B%2BVMou%2FCxDHmLAiAprAWqUVA8mCoRqZi57OJ3dV78tb8rsWPaDKr9X3r%2FESr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2Fc41m8GqfxvzSZ9wKtwDhbAnM79AvyXvG4Mv5c%2BPETLMZgWZ4dnGeGOUhJKSuYZuTZ6RDGLnwuuwPtdxfCerCHR%2BZEL2L6O8kxj1XiicgPcqYxCq4GbnJoRYCCfa4%2FjcPUxz%2FTLFD%2Fb7zFPGsLp%2BAr6MhoPKuhcML%2FgKeE0mpoNK24fQRoxuM%2F2SkNp9x%2BxaWBn8MBble0HKu0b5ktLw0jKzJpqK3CicZp8dzZdKxr3A427%2BXBsvG%2ByQ1ap6Wv%2FKrZ8E6jTDjDrFQlkaP3xJrtFzRZZy1BxRXbM9qZCnH1XOCLsbEjn5TrSRNRnEwc7GkWYUhUu0U5jQPuoHUtOeRrhfdO%2BEkY3zKsFN3b7qf0o59yANRsPOla%2FUmabXa8jVyn6CWqtyskHp%2Bc1euMfjPtfIl%2BpVB1wjLqt0BYhXkL8QgZx9m27ONc8lFH8TGrtRVgZh0iAr0jVZqfME5RwnNyJKgxLzJA3dKka%2Fgkje9wXSXJEde2opndBwarqbC72lOIhHeRah3b1SFmEkUElwArFpjHs13a9yK6qnXSAoXM%2BXwFsiE5fQaDBIEBJoKyBP6uBFYvmPrwyZJsOuoNgranpxUmkFtahH4shdVPJ%2B0flLlDtvU2wsvc2UTSYGK4vaZio9LN5tMXhC9Hcws8uHvQY6pgEfPznKo0LY%2F2xIJjCE%2BaJPsBPEUJALP7gBZrtRlpI77T3wqmNdClso8Zzm206nuVvZqetIWgoyhJkCDsM9qrRa5J7gcR%2BrbdHMtNw3F57rlftgI9OqHtLsUkPJPkkvVJEJlc4oFEdXgjubUkOL4dZqPDl%2Bm%2BXxUyBlgcMjchOjBglrOnDEVHNKHrj7IEim27fgeADlpwtvHFd2tGEy5VoE489Q8yTF&X-Amz-Signature=554df5c25c7cbb0f6ee10169420b682971ecfd21cac091852d96766888f51e02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U2PQE2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGK8J0YkkAwltm4fdJRj2x7FqyZ%2BZCI%2B%2BVMou%2FCxDHmLAiAprAWqUVA8mCoRqZi57OJ3dV78tb8rsWPaDKr9X3r%2FESr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2Fc41m8GqfxvzSZ9wKtwDhbAnM79AvyXvG4Mv5c%2BPETLMZgWZ4dnGeGOUhJKSuYZuTZ6RDGLnwuuwPtdxfCerCHR%2BZEL2L6O8kxj1XiicgPcqYxCq4GbnJoRYCCfa4%2FjcPUxz%2FTLFD%2Fb7zFPGsLp%2BAr6MhoPKuhcML%2FgKeE0mpoNK24fQRoxuM%2F2SkNp9x%2BxaWBn8MBble0HKu0b5ktLw0jKzJpqK3CicZp8dzZdKxr3A427%2BXBsvG%2ByQ1ap6Wv%2FKrZ8E6jTDjDrFQlkaP3xJrtFzRZZy1BxRXbM9qZCnH1XOCLsbEjn5TrSRNRnEwc7GkWYUhUu0U5jQPuoHUtOeRrhfdO%2BEkY3zKsFN3b7qf0o59yANRsPOla%2FUmabXa8jVyn6CWqtyskHp%2Bc1euMfjPtfIl%2BpVB1wjLqt0BYhXkL8QgZx9m27ONc8lFH8TGrtRVgZh0iAr0jVZqfME5RwnNyJKgxLzJA3dKka%2Fgkje9wXSXJEde2opndBwarqbC72lOIhHeRah3b1SFmEkUElwArFpjHs13a9yK6qnXSAoXM%2BXwFsiE5fQaDBIEBJoKyBP6uBFYvmPrwyZJsOuoNgranpxUmkFtahH4shdVPJ%2B0flLlDtvU2wsvc2UTSYGK4vaZio9LN5tMXhC9Hcws8uHvQY6pgEfPznKo0LY%2F2xIJjCE%2BaJPsBPEUJALP7gBZrtRlpI77T3wqmNdClso8Zzm206nuVvZqetIWgoyhJkCDsM9qrRa5J7gcR%2BrbdHMtNw3F57rlftgI9OqHtLsUkPJPkkvVJEJlc4oFEdXgjubUkOL4dZqPDl%2Bm%2BXxUyBlgcMjchOjBglrOnDEVHNKHrj7IEim27fgeADlpwtvHFd2tGEy5VoE489Q8yTF&X-Amz-Signature=49f71a318b2eb4a6394e23aceef3ae02d383cf80f9ea3a10f75fa7f9a21449eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U2PQE2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGK8J0YkkAwltm4fdJRj2x7FqyZ%2BZCI%2B%2BVMou%2FCxDHmLAiAprAWqUVA8mCoRqZi57OJ3dV78tb8rsWPaDKr9X3r%2FESr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2Fc41m8GqfxvzSZ9wKtwDhbAnM79AvyXvG4Mv5c%2BPETLMZgWZ4dnGeGOUhJKSuYZuTZ6RDGLnwuuwPtdxfCerCHR%2BZEL2L6O8kxj1XiicgPcqYxCq4GbnJoRYCCfa4%2FjcPUxz%2FTLFD%2Fb7zFPGsLp%2BAr6MhoPKuhcML%2FgKeE0mpoNK24fQRoxuM%2F2SkNp9x%2BxaWBn8MBble0HKu0b5ktLw0jKzJpqK3CicZp8dzZdKxr3A427%2BXBsvG%2ByQ1ap6Wv%2FKrZ8E6jTDjDrFQlkaP3xJrtFzRZZy1BxRXbM9qZCnH1XOCLsbEjn5TrSRNRnEwc7GkWYUhUu0U5jQPuoHUtOeRrhfdO%2BEkY3zKsFN3b7qf0o59yANRsPOla%2FUmabXa8jVyn6CWqtyskHp%2Bc1euMfjPtfIl%2BpVB1wjLqt0BYhXkL8QgZx9m27ONc8lFH8TGrtRVgZh0iAr0jVZqfME5RwnNyJKgxLzJA3dKka%2Fgkje9wXSXJEde2opndBwarqbC72lOIhHeRah3b1SFmEkUElwArFpjHs13a9yK6qnXSAoXM%2BXwFsiE5fQaDBIEBJoKyBP6uBFYvmPrwyZJsOuoNgranpxUmkFtahH4shdVPJ%2B0flLlDtvU2wsvc2UTSYGK4vaZio9LN5tMXhC9Hcws8uHvQY6pgEfPznKo0LY%2F2xIJjCE%2BaJPsBPEUJALP7gBZrtRlpI77T3wqmNdClso8Zzm206nuVvZqetIWgoyhJkCDsM9qrRa5J7gcR%2BrbdHMtNw3F57rlftgI9OqHtLsUkPJPkkvVJEJlc4oFEdXgjubUkOL4dZqPDl%2Bm%2BXxUyBlgcMjchOjBglrOnDEVHNKHrj7IEim27fgeADlpwtvHFd2tGEy5VoE489Q8yTF&X-Amz-Signature=11a58998963c7c73c2b2533b5ac47dd4ab0ec8613857d3f459bc271cd15099f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673U2PQE2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIGK8J0YkkAwltm4fdJRj2x7FqyZ%2BZCI%2B%2BVMou%2FCxDHmLAiAprAWqUVA8mCoRqZi57OJ3dV78tb8rsWPaDKr9X3r%2FESr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2Fc41m8GqfxvzSZ9wKtwDhbAnM79AvyXvG4Mv5c%2BPETLMZgWZ4dnGeGOUhJKSuYZuTZ6RDGLnwuuwPtdxfCerCHR%2BZEL2L6O8kxj1XiicgPcqYxCq4GbnJoRYCCfa4%2FjcPUxz%2FTLFD%2Fb7zFPGsLp%2BAr6MhoPKuhcML%2FgKeE0mpoNK24fQRoxuM%2F2SkNp9x%2BxaWBn8MBble0HKu0b5ktLw0jKzJpqK3CicZp8dzZdKxr3A427%2BXBsvG%2ByQ1ap6Wv%2FKrZ8E6jTDjDrFQlkaP3xJrtFzRZZy1BxRXbM9qZCnH1XOCLsbEjn5TrSRNRnEwc7GkWYUhUu0U5jQPuoHUtOeRrhfdO%2BEkY3zKsFN3b7qf0o59yANRsPOla%2FUmabXa8jVyn6CWqtyskHp%2Bc1euMfjPtfIl%2BpVB1wjLqt0BYhXkL8QgZx9m27ONc8lFH8TGrtRVgZh0iAr0jVZqfME5RwnNyJKgxLzJA3dKka%2Fgkje9wXSXJEde2opndBwarqbC72lOIhHeRah3b1SFmEkUElwArFpjHs13a9yK6qnXSAoXM%2BXwFsiE5fQaDBIEBJoKyBP6uBFYvmPrwyZJsOuoNgranpxUmkFtahH4shdVPJ%2B0flLlDtvU2wsvc2UTSYGK4vaZio9LN5tMXhC9Hcws8uHvQY6pgEfPznKo0LY%2F2xIJjCE%2BaJPsBPEUJALP7gBZrtRlpI77T3wqmNdClso8Zzm206nuVvZqetIWgoyhJkCDsM9qrRa5J7gcR%2BrbdHMtNw3F57rlftgI9OqHtLsUkPJPkkvVJEJlc4oFEdXgjubUkOL4dZqPDl%2Bm%2BXxUyBlgcMjchOjBglrOnDEVHNKHrj7IEim27fgeADlpwtvHFd2tGEy5VoE489Q8yTF&X-Amz-Signature=e84ce763a97b30fb4661a41c726723dd5c5809ce5488b05f5a79ba35adc37d13&X-Amz-SignedHeaders=host&x-id=GetObject)
