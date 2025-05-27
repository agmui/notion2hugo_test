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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YCVO6M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV9zFMUpo22nDeFcZoR2XfZ4Fw6TT98m2td3wQAvUQwIhAL8vs6b3ZNAZdEctFv3w%2FwHG4Bv4A%2BXd7paTC8H%2BhPg9Kv8DCF0QABoMNjM3NDIzMTgzODA1Igzm5njuiJPpGRkK7cYq3AP%2Bjgxby4V89QU9tojEGS7PK%2B6dQps%2B6gneGHU8FY6nv2nchtXhwxB59JA2O%2BfU%2BxP7N8TfhSM6elfZ1z5mBgHWG2askfjcraSAlLksqX%2BO9dZ1r6j35wv6DUt6vIL5MDIx9QGz%2FJtColWYG%2FZXoau8HFGjqgtc5J5W4qEBhnmLxDeITC58og18d9l%2FuguX4JO79dmfBJ%2BuS79bC9WmNwlF%2FPkSZyGtek%2FiPZKrxg2WsTtHq9CS462sY1YO9io75%2FECUKMp7iCGYeIvbtc%2F%2BWzPDXMOd3c5tIt8nLbfG9hYeadw%2BSbtYGG7xVUFQB9BZJs2DnR8D%2BSiHgp8Mk%2FJw20pdeZPpq2FgNVBxPAKXFTF6byn7uCMBLOSugRx%2BA7m1iyjnQq6Lmk%2FZKDBDFBK8IfTgOkEpP%2BJ0fqpHQhhEA49pLSS0lmkrvXR%2FYkJKsEox4j9hVThH4ItUAAYKA73OTm9%2BgIEsJdE3wYLZkYpXyx0bee%2F5zaDwoFZBIvyDWl1G6ohhC%2F3CnuoOvv6oBY3vO5EozXRHT4LOpXL9VE4Jn5tLssb5MoD89xD%2F%2BAg4odJ2A0JlqdXR7dxD9D6SH5TO7lc%2Fjd3c31WrVf%2FXUAghmkk38Bxla890qoWwZqU6TC71NbBBjqkAfDRotAeLq8gZ7TcQ06CcahwzWHm2Wj34oMewt79pNPOI90%2B5%2BhxbVrzvsRP1tzT8dArUf4sVcUmB5ZPPJCZ3bXOQ4KZ7G6taxncCHQtP8vz87Ts8ktLV5f%2Bi0Ut2WkZgwiqYA2l%2B8Uitla96v1f%2Fb1qJ2H44K%2Fzgk%2FD9CLb%2FF2Eu3o7AUXbnadDkPef5bmnHaDfdJMupc5pG8zwCgSw5xX4PKhv&X-Amz-Signature=47245df174f912d4d612b0f2b5fca3ffe70330a89fd1d1106bd56fc0943729ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YCVO6M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV9zFMUpo22nDeFcZoR2XfZ4Fw6TT98m2td3wQAvUQwIhAL8vs6b3ZNAZdEctFv3w%2FwHG4Bv4A%2BXd7paTC8H%2BhPg9Kv8DCF0QABoMNjM3NDIzMTgzODA1Igzm5njuiJPpGRkK7cYq3AP%2Bjgxby4V89QU9tojEGS7PK%2B6dQps%2B6gneGHU8FY6nv2nchtXhwxB59JA2O%2BfU%2BxP7N8TfhSM6elfZ1z5mBgHWG2askfjcraSAlLksqX%2BO9dZ1r6j35wv6DUt6vIL5MDIx9QGz%2FJtColWYG%2FZXoau8HFGjqgtc5J5W4qEBhnmLxDeITC58og18d9l%2FuguX4JO79dmfBJ%2BuS79bC9WmNwlF%2FPkSZyGtek%2FiPZKrxg2WsTtHq9CS462sY1YO9io75%2FECUKMp7iCGYeIvbtc%2F%2BWzPDXMOd3c5tIt8nLbfG9hYeadw%2BSbtYGG7xVUFQB9BZJs2DnR8D%2BSiHgp8Mk%2FJw20pdeZPpq2FgNVBxPAKXFTF6byn7uCMBLOSugRx%2BA7m1iyjnQq6Lmk%2FZKDBDFBK8IfTgOkEpP%2BJ0fqpHQhhEA49pLSS0lmkrvXR%2FYkJKsEox4j9hVThH4ItUAAYKA73OTm9%2BgIEsJdE3wYLZkYpXyx0bee%2F5zaDwoFZBIvyDWl1G6ohhC%2F3CnuoOvv6oBY3vO5EozXRHT4LOpXL9VE4Jn5tLssb5MoD89xD%2F%2BAg4odJ2A0JlqdXR7dxD9D6SH5TO7lc%2Fjd3c31WrVf%2FXUAghmkk38Bxla890qoWwZqU6TC71NbBBjqkAfDRotAeLq8gZ7TcQ06CcahwzWHm2Wj34oMewt79pNPOI90%2B5%2BhxbVrzvsRP1tzT8dArUf4sVcUmB5ZPPJCZ3bXOQ4KZ7G6taxncCHQtP8vz87Ts8ktLV5f%2Bi0Ut2WkZgwiqYA2l%2B8Uitla96v1f%2Fb1qJ2H44K%2Fzgk%2FD9CLb%2FF2Eu3o7AUXbnadDkPef5bmnHaDfdJMupc5pG8zwCgSw5xX4PKhv&X-Amz-Signature=2f009c7f9000a4dc0e9e47b2e10dad29b5a09ce11910f1c55469be331e105ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YCVO6M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV9zFMUpo22nDeFcZoR2XfZ4Fw6TT98m2td3wQAvUQwIhAL8vs6b3ZNAZdEctFv3w%2FwHG4Bv4A%2BXd7paTC8H%2BhPg9Kv8DCF0QABoMNjM3NDIzMTgzODA1Igzm5njuiJPpGRkK7cYq3AP%2Bjgxby4V89QU9tojEGS7PK%2B6dQps%2B6gneGHU8FY6nv2nchtXhwxB59JA2O%2BfU%2BxP7N8TfhSM6elfZ1z5mBgHWG2askfjcraSAlLksqX%2BO9dZ1r6j35wv6DUt6vIL5MDIx9QGz%2FJtColWYG%2FZXoau8HFGjqgtc5J5W4qEBhnmLxDeITC58og18d9l%2FuguX4JO79dmfBJ%2BuS79bC9WmNwlF%2FPkSZyGtek%2FiPZKrxg2WsTtHq9CS462sY1YO9io75%2FECUKMp7iCGYeIvbtc%2F%2BWzPDXMOd3c5tIt8nLbfG9hYeadw%2BSbtYGG7xVUFQB9BZJs2DnR8D%2BSiHgp8Mk%2FJw20pdeZPpq2FgNVBxPAKXFTF6byn7uCMBLOSugRx%2BA7m1iyjnQq6Lmk%2FZKDBDFBK8IfTgOkEpP%2BJ0fqpHQhhEA49pLSS0lmkrvXR%2FYkJKsEox4j9hVThH4ItUAAYKA73OTm9%2BgIEsJdE3wYLZkYpXyx0bee%2F5zaDwoFZBIvyDWl1G6ohhC%2F3CnuoOvv6oBY3vO5EozXRHT4LOpXL9VE4Jn5tLssb5MoD89xD%2F%2BAg4odJ2A0JlqdXR7dxD9D6SH5TO7lc%2Fjd3c31WrVf%2FXUAghmkk38Bxla890qoWwZqU6TC71NbBBjqkAfDRotAeLq8gZ7TcQ06CcahwzWHm2Wj34oMewt79pNPOI90%2B5%2BhxbVrzvsRP1tzT8dArUf4sVcUmB5ZPPJCZ3bXOQ4KZ7G6taxncCHQtP8vz87Ts8ktLV5f%2Bi0Ut2WkZgwiqYA2l%2B8Uitla96v1f%2Fb1qJ2H44K%2Fzgk%2FD9CLb%2FF2Eu3o7AUXbnadDkPef5bmnHaDfdJMupc5pG8zwCgSw5xX4PKhv&X-Amz-Signature=d4aaa7a7aa8ccfe876f8f5331f2000eb8c302e6d4a7254e4ed007018568ff36d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YCVO6M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV9zFMUpo22nDeFcZoR2XfZ4Fw6TT98m2td3wQAvUQwIhAL8vs6b3ZNAZdEctFv3w%2FwHG4Bv4A%2BXd7paTC8H%2BhPg9Kv8DCF0QABoMNjM3NDIzMTgzODA1Igzm5njuiJPpGRkK7cYq3AP%2Bjgxby4V89QU9tojEGS7PK%2B6dQps%2B6gneGHU8FY6nv2nchtXhwxB59JA2O%2BfU%2BxP7N8TfhSM6elfZ1z5mBgHWG2askfjcraSAlLksqX%2BO9dZ1r6j35wv6DUt6vIL5MDIx9QGz%2FJtColWYG%2FZXoau8HFGjqgtc5J5W4qEBhnmLxDeITC58og18d9l%2FuguX4JO79dmfBJ%2BuS79bC9WmNwlF%2FPkSZyGtek%2FiPZKrxg2WsTtHq9CS462sY1YO9io75%2FECUKMp7iCGYeIvbtc%2F%2BWzPDXMOd3c5tIt8nLbfG9hYeadw%2BSbtYGG7xVUFQB9BZJs2DnR8D%2BSiHgp8Mk%2FJw20pdeZPpq2FgNVBxPAKXFTF6byn7uCMBLOSugRx%2BA7m1iyjnQq6Lmk%2FZKDBDFBK8IfTgOkEpP%2BJ0fqpHQhhEA49pLSS0lmkrvXR%2FYkJKsEox4j9hVThH4ItUAAYKA73OTm9%2BgIEsJdE3wYLZkYpXyx0bee%2F5zaDwoFZBIvyDWl1G6ohhC%2F3CnuoOvv6oBY3vO5EozXRHT4LOpXL9VE4Jn5tLssb5MoD89xD%2F%2BAg4odJ2A0JlqdXR7dxD9D6SH5TO7lc%2Fjd3c31WrVf%2FXUAghmkk38Bxla890qoWwZqU6TC71NbBBjqkAfDRotAeLq8gZ7TcQ06CcahwzWHm2Wj34oMewt79pNPOI90%2B5%2BhxbVrzvsRP1tzT8dArUf4sVcUmB5ZPPJCZ3bXOQ4KZ7G6taxncCHQtP8vz87Ts8ktLV5f%2Bi0Ut2WkZgwiqYA2l%2B8Uitla96v1f%2Fb1qJ2H44K%2Fzgk%2FD9CLb%2FF2Eu3o7AUXbnadDkPef5bmnHaDfdJMupc5pG8zwCgSw5xX4PKhv&X-Amz-Signature=6308a82c2e7469eede7505383431e8bc715e9404f055f0d94a112f3f7e718389&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YCVO6M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV9zFMUpo22nDeFcZoR2XfZ4Fw6TT98m2td3wQAvUQwIhAL8vs6b3ZNAZdEctFv3w%2FwHG4Bv4A%2BXd7paTC8H%2BhPg9Kv8DCF0QABoMNjM3NDIzMTgzODA1Igzm5njuiJPpGRkK7cYq3AP%2Bjgxby4V89QU9tojEGS7PK%2B6dQps%2B6gneGHU8FY6nv2nchtXhwxB59JA2O%2BfU%2BxP7N8TfhSM6elfZ1z5mBgHWG2askfjcraSAlLksqX%2BO9dZ1r6j35wv6DUt6vIL5MDIx9QGz%2FJtColWYG%2FZXoau8HFGjqgtc5J5W4qEBhnmLxDeITC58og18d9l%2FuguX4JO79dmfBJ%2BuS79bC9WmNwlF%2FPkSZyGtek%2FiPZKrxg2WsTtHq9CS462sY1YO9io75%2FECUKMp7iCGYeIvbtc%2F%2BWzPDXMOd3c5tIt8nLbfG9hYeadw%2BSbtYGG7xVUFQB9BZJs2DnR8D%2BSiHgp8Mk%2FJw20pdeZPpq2FgNVBxPAKXFTF6byn7uCMBLOSugRx%2BA7m1iyjnQq6Lmk%2FZKDBDFBK8IfTgOkEpP%2BJ0fqpHQhhEA49pLSS0lmkrvXR%2FYkJKsEox4j9hVThH4ItUAAYKA73OTm9%2BgIEsJdE3wYLZkYpXyx0bee%2F5zaDwoFZBIvyDWl1G6ohhC%2F3CnuoOvv6oBY3vO5EozXRHT4LOpXL9VE4Jn5tLssb5MoD89xD%2F%2BAg4odJ2A0JlqdXR7dxD9D6SH5TO7lc%2Fjd3c31WrVf%2FXUAghmkk38Bxla890qoWwZqU6TC71NbBBjqkAfDRotAeLq8gZ7TcQ06CcahwzWHm2Wj34oMewt79pNPOI90%2B5%2BhxbVrzvsRP1tzT8dArUf4sVcUmB5ZPPJCZ3bXOQ4KZ7G6taxncCHQtP8vz87Ts8ktLV5f%2Bi0Ut2WkZgwiqYA2l%2B8Uitla96v1f%2Fb1qJ2H44K%2Fzgk%2FD9CLb%2FF2Eu3o7AUXbnadDkPef5bmnHaDfdJMupc5pG8zwCgSw5xX4PKhv&X-Amz-Signature=14a3e9f127e63b0a3d32a8144d90a36f07f87bd9a432c876acf8afe065a2c232&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YCVO6M%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOV9zFMUpo22nDeFcZoR2XfZ4Fw6TT98m2td3wQAvUQwIhAL8vs6b3ZNAZdEctFv3w%2FwHG4Bv4A%2BXd7paTC8H%2BhPg9Kv8DCF0QABoMNjM3NDIzMTgzODA1Igzm5njuiJPpGRkK7cYq3AP%2Bjgxby4V89QU9tojEGS7PK%2B6dQps%2B6gneGHU8FY6nv2nchtXhwxB59JA2O%2BfU%2BxP7N8TfhSM6elfZ1z5mBgHWG2askfjcraSAlLksqX%2BO9dZ1r6j35wv6DUt6vIL5MDIx9QGz%2FJtColWYG%2FZXoau8HFGjqgtc5J5W4qEBhnmLxDeITC58og18d9l%2FuguX4JO79dmfBJ%2BuS79bC9WmNwlF%2FPkSZyGtek%2FiPZKrxg2WsTtHq9CS462sY1YO9io75%2FECUKMp7iCGYeIvbtc%2F%2BWzPDXMOd3c5tIt8nLbfG9hYeadw%2BSbtYGG7xVUFQB9BZJs2DnR8D%2BSiHgp8Mk%2FJw20pdeZPpq2FgNVBxPAKXFTF6byn7uCMBLOSugRx%2BA7m1iyjnQq6Lmk%2FZKDBDFBK8IfTgOkEpP%2BJ0fqpHQhhEA49pLSS0lmkrvXR%2FYkJKsEox4j9hVThH4ItUAAYKA73OTm9%2BgIEsJdE3wYLZkYpXyx0bee%2F5zaDwoFZBIvyDWl1G6ohhC%2F3CnuoOvv6oBY3vO5EozXRHT4LOpXL9VE4Jn5tLssb5MoD89xD%2F%2BAg4odJ2A0JlqdXR7dxD9D6SH5TO7lc%2Fjd3c31WrVf%2FXUAghmkk38Bxla890qoWwZqU6TC71NbBBjqkAfDRotAeLq8gZ7TcQ06CcahwzWHm2Wj34oMewt79pNPOI90%2B5%2BhxbVrzvsRP1tzT8dArUf4sVcUmB5ZPPJCZ3bXOQ4KZ7G6taxncCHQtP8vz87Ts8ktLV5f%2Bi0Ut2WkZgwiqYA2l%2B8Uitla96v1f%2Fb1qJ2H44K%2Fzgk%2FD9CLb%2FF2Eu3o7AUXbnadDkPef5bmnHaDfdJMupc5pG8zwCgSw5xX4PKhv&X-Amz-Signature=ca305c64ee7a903f4e4c683e964c7412fb6db333699749a4ea0d98ba41224378&X-Amz-SignedHeaders=host&x-id=GetObject)
