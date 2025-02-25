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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5EOZT7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCSC%2BBPRC7Lk42ANm%2FRBh7Xl%2BqK5ZX8aLs957vWTpwlHgIgPJdNb0DKaIdMwlyFPr4PGFT%2B7BLEq8V7aV9r54yulrMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDISVZqKj87jjb3ifhyrcA462fgJqbEygvyd1u%2FFIKY4LUx19R64YzN5fEkEde%2FgKrtitC%2BY0D1AZcxU7rU2J7FYuaVpW3HUjjXuei65D7d6ImNk%2FCFH4PzOx4s6oZ51MDxagmFCJ66rgi4RYjxZv3xaDQS%2FcMFMipC7DZCkGSSVH8FxcfvYwQte3V%2BWNf0AJ3ibPEURS%2F6hFLCFaBbb4Y1RA5WmswFcCXCNt%2F51b7G1TJPtDvOuJMLstWVoFwRPmil5hPd9EDB%2BBrXh%2Fp8x6JcfmfoDIIpquShETDbazrfsFyeRmhvXMRlXaJEYfiIZtcnGnUZwx9IUzphgrv80hSKS3Uqxb0Re1iGqdEt2GHGNMMM8sO6m%2FGoZ3lzz1r1FtK1dtnmh%2BVveUUTSETAqPWGvKdlbKGKsGdWjjT8BZDQeSvQ2vhz90ZNL4Xhl43zYZMZaOCoho4oh2%2BkRhx3zrcaqin3SjZalVf%2FvLps6LggA%2BQvyeyY%2BDkxSFQfNTMWukRDZOKWBwxjTequj8w8Gr3Oc5sqctzjNtnxYQJXgVBXOPZVflNMYyCznvWuNjDCPvlJ9EEuxZWZwKWobBZXXpnOGML0RVYR3LpNK%2BM5FjHQoNGP1Gh3QdpGE7U3MUrK00rj0n6WYRfY9UMPvEMNKW970GOqUB9G3YE1kzd%2BxPqk1oobspVKNcx8CV2wjsy%2BDyFpKO0vwqbyM0PPbH1HCGKqVuNZ6If12n1nOemJRmcf%2FaMrzxQWyDOPaHIKdE8RC5d2%2BjexI1zYSZFuqzsuIpsjkapbIA64gP%2BTUftCbh5EDcW5cYtXYkgfE8e22%2FNhjNpLdnBnkKFaheFKPY6zX4Z%2FhPgGjHTMU4fBnPy%2FL%2FEa8oYLfyKU1nB5Vf&X-Amz-Signature=9f743243a1dd8cc3a2c6ba32e68a497a5210f3c76f35bc7a5b881a76c2f599fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5EOZT7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCSC%2BBPRC7Lk42ANm%2FRBh7Xl%2BqK5ZX8aLs957vWTpwlHgIgPJdNb0DKaIdMwlyFPr4PGFT%2B7BLEq8V7aV9r54yulrMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDISVZqKj87jjb3ifhyrcA462fgJqbEygvyd1u%2FFIKY4LUx19R64YzN5fEkEde%2FgKrtitC%2BY0D1AZcxU7rU2J7FYuaVpW3HUjjXuei65D7d6ImNk%2FCFH4PzOx4s6oZ51MDxagmFCJ66rgi4RYjxZv3xaDQS%2FcMFMipC7DZCkGSSVH8FxcfvYwQte3V%2BWNf0AJ3ibPEURS%2F6hFLCFaBbb4Y1RA5WmswFcCXCNt%2F51b7G1TJPtDvOuJMLstWVoFwRPmil5hPd9EDB%2BBrXh%2Fp8x6JcfmfoDIIpquShETDbazrfsFyeRmhvXMRlXaJEYfiIZtcnGnUZwx9IUzphgrv80hSKS3Uqxb0Re1iGqdEt2GHGNMMM8sO6m%2FGoZ3lzz1r1FtK1dtnmh%2BVveUUTSETAqPWGvKdlbKGKsGdWjjT8BZDQeSvQ2vhz90ZNL4Xhl43zYZMZaOCoho4oh2%2BkRhx3zrcaqin3SjZalVf%2FvLps6LggA%2BQvyeyY%2BDkxSFQfNTMWukRDZOKWBwxjTequj8w8Gr3Oc5sqctzjNtnxYQJXgVBXOPZVflNMYyCznvWuNjDCPvlJ9EEuxZWZwKWobBZXXpnOGML0RVYR3LpNK%2BM5FjHQoNGP1Gh3QdpGE7U3MUrK00rj0n6WYRfY9UMPvEMNKW970GOqUB9G3YE1kzd%2BxPqk1oobspVKNcx8CV2wjsy%2BDyFpKO0vwqbyM0PPbH1HCGKqVuNZ6If12n1nOemJRmcf%2FaMrzxQWyDOPaHIKdE8RC5d2%2BjexI1zYSZFuqzsuIpsjkapbIA64gP%2BTUftCbh5EDcW5cYtXYkgfE8e22%2FNhjNpLdnBnkKFaheFKPY6zX4Z%2FhPgGjHTMU4fBnPy%2FL%2FEa8oYLfyKU1nB5Vf&X-Amz-Signature=62a2e71e71ef429be616505bc27ecb838cda98d345c1f46926d7e14b43c337de&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5EOZT7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCSC%2BBPRC7Lk42ANm%2FRBh7Xl%2BqK5ZX8aLs957vWTpwlHgIgPJdNb0DKaIdMwlyFPr4PGFT%2B7BLEq8V7aV9r54yulrMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDISVZqKj87jjb3ifhyrcA462fgJqbEygvyd1u%2FFIKY4LUx19R64YzN5fEkEde%2FgKrtitC%2BY0D1AZcxU7rU2J7FYuaVpW3HUjjXuei65D7d6ImNk%2FCFH4PzOx4s6oZ51MDxagmFCJ66rgi4RYjxZv3xaDQS%2FcMFMipC7DZCkGSSVH8FxcfvYwQte3V%2BWNf0AJ3ibPEURS%2F6hFLCFaBbb4Y1RA5WmswFcCXCNt%2F51b7G1TJPtDvOuJMLstWVoFwRPmil5hPd9EDB%2BBrXh%2Fp8x6JcfmfoDIIpquShETDbazrfsFyeRmhvXMRlXaJEYfiIZtcnGnUZwx9IUzphgrv80hSKS3Uqxb0Re1iGqdEt2GHGNMMM8sO6m%2FGoZ3lzz1r1FtK1dtnmh%2BVveUUTSETAqPWGvKdlbKGKsGdWjjT8BZDQeSvQ2vhz90ZNL4Xhl43zYZMZaOCoho4oh2%2BkRhx3zrcaqin3SjZalVf%2FvLps6LggA%2BQvyeyY%2BDkxSFQfNTMWukRDZOKWBwxjTequj8w8Gr3Oc5sqctzjNtnxYQJXgVBXOPZVflNMYyCznvWuNjDCPvlJ9EEuxZWZwKWobBZXXpnOGML0RVYR3LpNK%2BM5FjHQoNGP1Gh3QdpGE7U3MUrK00rj0n6WYRfY9UMPvEMNKW970GOqUB9G3YE1kzd%2BxPqk1oobspVKNcx8CV2wjsy%2BDyFpKO0vwqbyM0PPbH1HCGKqVuNZ6If12n1nOemJRmcf%2FaMrzxQWyDOPaHIKdE8RC5d2%2BjexI1zYSZFuqzsuIpsjkapbIA64gP%2BTUftCbh5EDcW5cYtXYkgfE8e22%2FNhjNpLdnBnkKFaheFKPY6zX4Z%2FhPgGjHTMU4fBnPy%2FL%2FEa8oYLfyKU1nB5Vf&X-Amz-Signature=dcbae37b2d3eb5dc2ad015598041eb73e3f81fd0a2966330465ec0422e1cbde9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5EOZT7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCSC%2BBPRC7Lk42ANm%2FRBh7Xl%2BqK5ZX8aLs957vWTpwlHgIgPJdNb0DKaIdMwlyFPr4PGFT%2B7BLEq8V7aV9r54yulrMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDISVZqKj87jjb3ifhyrcA462fgJqbEygvyd1u%2FFIKY4LUx19R64YzN5fEkEde%2FgKrtitC%2BY0D1AZcxU7rU2J7FYuaVpW3HUjjXuei65D7d6ImNk%2FCFH4PzOx4s6oZ51MDxagmFCJ66rgi4RYjxZv3xaDQS%2FcMFMipC7DZCkGSSVH8FxcfvYwQte3V%2BWNf0AJ3ibPEURS%2F6hFLCFaBbb4Y1RA5WmswFcCXCNt%2F51b7G1TJPtDvOuJMLstWVoFwRPmil5hPd9EDB%2BBrXh%2Fp8x6JcfmfoDIIpquShETDbazrfsFyeRmhvXMRlXaJEYfiIZtcnGnUZwx9IUzphgrv80hSKS3Uqxb0Re1iGqdEt2GHGNMMM8sO6m%2FGoZ3lzz1r1FtK1dtnmh%2BVveUUTSETAqPWGvKdlbKGKsGdWjjT8BZDQeSvQ2vhz90ZNL4Xhl43zYZMZaOCoho4oh2%2BkRhx3zrcaqin3SjZalVf%2FvLps6LggA%2BQvyeyY%2BDkxSFQfNTMWukRDZOKWBwxjTequj8w8Gr3Oc5sqctzjNtnxYQJXgVBXOPZVflNMYyCznvWuNjDCPvlJ9EEuxZWZwKWobBZXXpnOGML0RVYR3LpNK%2BM5FjHQoNGP1Gh3QdpGE7U3MUrK00rj0n6WYRfY9UMPvEMNKW970GOqUB9G3YE1kzd%2BxPqk1oobspVKNcx8CV2wjsy%2BDyFpKO0vwqbyM0PPbH1HCGKqVuNZ6If12n1nOemJRmcf%2FaMrzxQWyDOPaHIKdE8RC5d2%2BjexI1zYSZFuqzsuIpsjkapbIA64gP%2BTUftCbh5EDcW5cYtXYkgfE8e22%2FNhjNpLdnBnkKFaheFKPY6zX4Z%2FhPgGjHTMU4fBnPy%2FL%2FEa8oYLfyKU1nB5Vf&X-Amz-Signature=44b55e6abfd16daa5668e3dcfabe9732cf5584758eafb722eadedb4b84f4d8a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5EOZT7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCSC%2BBPRC7Lk42ANm%2FRBh7Xl%2BqK5ZX8aLs957vWTpwlHgIgPJdNb0DKaIdMwlyFPr4PGFT%2B7BLEq8V7aV9r54yulrMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDISVZqKj87jjb3ifhyrcA462fgJqbEygvyd1u%2FFIKY4LUx19R64YzN5fEkEde%2FgKrtitC%2BY0D1AZcxU7rU2J7FYuaVpW3HUjjXuei65D7d6ImNk%2FCFH4PzOx4s6oZ51MDxagmFCJ66rgi4RYjxZv3xaDQS%2FcMFMipC7DZCkGSSVH8FxcfvYwQte3V%2BWNf0AJ3ibPEURS%2F6hFLCFaBbb4Y1RA5WmswFcCXCNt%2F51b7G1TJPtDvOuJMLstWVoFwRPmil5hPd9EDB%2BBrXh%2Fp8x6JcfmfoDIIpquShETDbazrfsFyeRmhvXMRlXaJEYfiIZtcnGnUZwx9IUzphgrv80hSKS3Uqxb0Re1iGqdEt2GHGNMMM8sO6m%2FGoZ3lzz1r1FtK1dtnmh%2BVveUUTSETAqPWGvKdlbKGKsGdWjjT8BZDQeSvQ2vhz90ZNL4Xhl43zYZMZaOCoho4oh2%2BkRhx3zrcaqin3SjZalVf%2FvLps6LggA%2BQvyeyY%2BDkxSFQfNTMWukRDZOKWBwxjTequj8w8Gr3Oc5sqctzjNtnxYQJXgVBXOPZVflNMYyCznvWuNjDCPvlJ9EEuxZWZwKWobBZXXpnOGML0RVYR3LpNK%2BM5FjHQoNGP1Gh3QdpGE7U3MUrK00rj0n6WYRfY9UMPvEMNKW970GOqUB9G3YE1kzd%2BxPqk1oobspVKNcx8CV2wjsy%2BDyFpKO0vwqbyM0PPbH1HCGKqVuNZ6If12n1nOemJRmcf%2FaMrzxQWyDOPaHIKdE8RC5d2%2BjexI1zYSZFuqzsuIpsjkapbIA64gP%2BTUftCbh5EDcW5cYtXYkgfE8e22%2FNhjNpLdnBnkKFaheFKPY6zX4Z%2FhPgGjHTMU4fBnPy%2FL%2FEa8oYLfyKU1nB5Vf&X-Amz-Signature=740beb63a4152e98d5c10a043361eee21df88f9461fdd457b872402016b9d890&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5EOZT7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCSC%2BBPRC7Lk42ANm%2FRBh7Xl%2BqK5ZX8aLs957vWTpwlHgIgPJdNb0DKaIdMwlyFPr4PGFT%2B7BLEq8V7aV9r54yulrMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDISVZqKj87jjb3ifhyrcA462fgJqbEygvyd1u%2FFIKY4LUx19R64YzN5fEkEde%2FgKrtitC%2BY0D1AZcxU7rU2J7FYuaVpW3HUjjXuei65D7d6ImNk%2FCFH4PzOx4s6oZ51MDxagmFCJ66rgi4RYjxZv3xaDQS%2FcMFMipC7DZCkGSSVH8FxcfvYwQte3V%2BWNf0AJ3ibPEURS%2F6hFLCFaBbb4Y1RA5WmswFcCXCNt%2F51b7G1TJPtDvOuJMLstWVoFwRPmil5hPd9EDB%2BBrXh%2Fp8x6JcfmfoDIIpquShETDbazrfsFyeRmhvXMRlXaJEYfiIZtcnGnUZwx9IUzphgrv80hSKS3Uqxb0Re1iGqdEt2GHGNMMM8sO6m%2FGoZ3lzz1r1FtK1dtnmh%2BVveUUTSETAqPWGvKdlbKGKsGdWjjT8BZDQeSvQ2vhz90ZNL4Xhl43zYZMZaOCoho4oh2%2BkRhx3zrcaqin3SjZalVf%2FvLps6LggA%2BQvyeyY%2BDkxSFQfNTMWukRDZOKWBwxjTequj8w8Gr3Oc5sqctzjNtnxYQJXgVBXOPZVflNMYyCznvWuNjDCPvlJ9EEuxZWZwKWobBZXXpnOGML0RVYR3LpNK%2BM5FjHQoNGP1Gh3QdpGE7U3MUrK00rj0n6WYRfY9UMPvEMNKW970GOqUB9G3YE1kzd%2BxPqk1oobspVKNcx8CV2wjsy%2BDyFpKO0vwqbyM0PPbH1HCGKqVuNZ6If12n1nOemJRmcf%2FaMrzxQWyDOPaHIKdE8RC5d2%2BjexI1zYSZFuqzsuIpsjkapbIA64gP%2BTUftCbh5EDcW5cYtXYkgfE8e22%2FNhjNpLdnBnkKFaheFKPY6zX4Z%2FhPgGjHTMU4fBnPy%2FL%2FEa8oYLfyKU1nB5Vf&X-Amz-Signature=566b6a0ade10cc2502cd614a61b13720c7bdb86900aa20e15c24722d0e26c129&X-Amz-SignedHeaders=host&x-id=GetObject)
