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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EC2A5IE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3NlCkni9nH6Rm4PwWISMVCxQacgLOGnULBY%2FrLYIImAiBGClmgc4jc%2BptLHzdg9ZkxpbwuvaEHZNIHb2NdXsR29ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlQ9sDSNJ7QkJyUOZKtwDxT4rhEmxq%2FTTbuZpiQAwBs0F32UQGHko6HkBt5g0p2vu%2F915SsKy%2BUTKr462ExfaUTTTF2JfrYu62q469fQQt80BcAQzGNwPiG9Wj3Cv1f1yNbBGYCyxY9m03XLA0TQw3IGqmGewKPkn3DzhgLMpi4LNwOo5GCfcXMKjOyAnt3%2BQLQLazYVe1qRDnz5OGBYG0lEX%2B2KR%2Bin4NlT3KH0furp55e9gPANLLy9Yy5H2xWLflxpKULsT2UHnqyivG9nDQ89XU2TS4DlkND%2FI6jCKOReVzI1tpehsjQbg5UrrmmjCbULkw70on8ax96GhEEWKY5WpRhjy8tZw2610%2BUqG446KyAoM48LZlZ2ocbdzV94ob3aiQMioeA5H6QfxqkoSQ0PXe4vIV4%2FckLeXFAVMMG1XmdnJIUUAgehxbQfoshRvgMLtrANVcSOmjaM3WywKPyvRscGsztWStcmkwzJRSEpgXcUddCv6ogBZ5g3em%2FqjX%2BU0fNhxznRQfc2fK%2BOigAeaLIsBsBf9Gnd7HuI2IakESGqrFp%2FzPYHpEKnbD4dw1mDY9JgXPFKllZWnvCX0sTgPOUHqiQiQqOpbu9NPNGst%2F6w1p%2FqmYvUOK8%2BMZS4wrXEuo3Ow3ft60SAwqtuPvwY6pgGgQm69C7%2FrLT18AdHgrhrCvjBM11y256u2XDXmrwKi5MzM3ci6E7nWOeoH8UbXSuC9EDjKccqfhOHoWhySRWtSyPEKDGFFZae0jDnCK3DpCAuumv2OKu6G%2Fl3y8gzGfpmsBo%2BfAmHyWc87EFf61LDyYHbztfDKaZBESO73gkFbPh%2FvrWZlmDPsTYAmf%2FoVkaJiFrCsYyhMA0w8AIs28vN9Cy2rrRSK&X-Amz-Signature=3ecd19ca1d9cf4121670fafc5d087bf77dfe420b4e6449111dba925ec682c30f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EC2A5IE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3NlCkni9nH6Rm4PwWISMVCxQacgLOGnULBY%2FrLYIImAiBGClmgc4jc%2BptLHzdg9ZkxpbwuvaEHZNIHb2NdXsR29ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlQ9sDSNJ7QkJyUOZKtwDxT4rhEmxq%2FTTbuZpiQAwBs0F32UQGHko6HkBt5g0p2vu%2F915SsKy%2BUTKr462ExfaUTTTF2JfrYu62q469fQQt80BcAQzGNwPiG9Wj3Cv1f1yNbBGYCyxY9m03XLA0TQw3IGqmGewKPkn3DzhgLMpi4LNwOo5GCfcXMKjOyAnt3%2BQLQLazYVe1qRDnz5OGBYG0lEX%2B2KR%2Bin4NlT3KH0furp55e9gPANLLy9Yy5H2xWLflxpKULsT2UHnqyivG9nDQ89XU2TS4DlkND%2FI6jCKOReVzI1tpehsjQbg5UrrmmjCbULkw70on8ax96GhEEWKY5WpRhjy8tZw2610%2BUqG446KyAoM48LZlZ2ocbdzV94ob3aiQMioeA5H6QfxqkoSQ0PXe4vIV4%2FckLeXFAVMMG1XmdnJIUUAgehxbQfoshRvgMLtrANVcSOmjaM3WywKPyvRscGsztWStcmkwzJRSEpgXcUddCv6ogBZ5g3em%2FqjX%2BU0fNhxznRQfc2fK%2BOigAeaLIsBsBf9Gnd7HuI2IakESGqrFp%2FzPYHpEKnbD4dw1mDY9JgXPFKllZWnvCX0sTgPOUHqiQiQqOpbu9NPNGst%2F6w1p%2FqmYvUOK8%2BMZS4wrXEuo3Ow3ft60SAwqtuPvwY6pgGgQm69C7%2FrLT18AdHgrhrCvjBM11y256u2XDXmrwKi5MzM3ci6E7nWOeoH8UbXSuC9EDjKccqfhOHoWhySRWtSyPEKDGFFZae0jDnCK3DpCAuumv2OKu6G%2Fl3y8gzGfpmsBo%2BfAmHyWc87EFf61LDyYHbztfDKaZBESO73gkFbPh%2FvrWZlmDPsTYAmf%2FoVkaJiFrCsYyhMA0w8AIs28vN9Cy2rrRSK&X-Amz-Signature=aa9a3b60595a7aea9d05c2452712888fddc543ba606751ad7f9f2d975933182a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EC2A5IE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3NlCkni9nH6Rm4PwWISMVCxQacgLOGnULBY%2FrLYIImAiBGClmgc4jc%2BptLHzdg9ZkxpbwuvaEHZNIHb2NdXsR29ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlQ9sDSNJ7QkJyUOZKtwDxT4rhEmxq%2FTTbuZpiQAwBs0F32UQGHko6HkBt5g0p2vu%2F915SsKy%2BUTKr462ExfaUTTTF2JfrYu62q469fQQt80BcAQzGNwPiG9Wj3Cv1f1yNbBGYCyxY9m03XLA0TQw3IGqmGewKPkn3DzhgLMpi4LNwOo5GCfcXMKjOyAnt3%2BQLQLazYVe1qRDnz5OGBYG0lEX%2B2KR%2Bin4NlT3KH0furp55e9gPANLLy9Yy5H2xWLflxpKULsT2UHnqyivG9nDQ89XU2TS4DlkND%2FI6jCKOReVzI1tpehsjQbg5UrrmmjCbULkw70on8ax96GhEEWKY5WpRhjy8tZw2610%2BUqG446KyAoM48LZlZ2ocbdzV94ob3aiQMioeA5H6QfxqkoSQ0PXe4vIV4%2FckLeXFAVMMG1XmdnJIUUAgehxbQfoshRvgMLtrANVcSOmjaM3WywKPyvRscGsztWStcmkwzJRSEpgXcUddCv6ogBZ5g3em%2FqjX%2BU0fNhxznRQfc2fK%2BOigAeaLIsBsBf9Gnd7HuI2IakESGqrFp%2FzPYHpEKnbD4dw1mDY9JgXPFKllZWnvCX0sTgPOUHqiQiQqOpbu9NPNGst%2F6w1p%2FqmYvUOK8%2BMZS4wrXEuo3Ow3ft60SAwqtuPvwY6pgGgQm69C7%2FrLT18AdHgrhrCvjBM11y256u2XDXmrwKi5MzM3ci6E7nWOeoH8UbXSuC9EDjKccqfhOHoWhySRWtSyPEKDGFFZae0jDnCK3DpCAuumv2OKu6G%2Fl3y8gzGfpmsBo%2BfAmHyWc87EFf61LDyYHbztfDKaZBESO73gkFbPh%2FvrWZlmDPsTYAmf%2FoVkaJiFrCsYyhMA0w8AIs28vN9Cy2rrRSK&X-Amz-Signature=af3045b8bba0798985efbf4eb9ea57f985447285cbee97e49f62c74aee83f481&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EC2A5IE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3NlCkni9nH6Rm4PwWISMVCxQacgLOGnULBY%2FrLYIImAiBGClmgc4jc%2BptLHzdg9ZkxpbwuvaEHZNIHb2NdXsR29ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlQ9sDSNJ7QkJyUOZKtwDxT4rhEmxq%2FTTbuZpiQAwBs0F32UQGHko6HkBt5g0p2vu%2F915SsKy%2BUTKr462ExfaUTTTF2JfrYu62q469fQQt80BcAQzGNwPiG9Wj3Cv1f1yNbBGYCyxY9m03XLA0TQw3IGqmGewKPkn3DzhgLMpi4LNwOo5GCfcXMKjOyAnt3%2BQLQLazYVe1qRDnz5OGBYG0lEX%2B2KR%2Bin4NlT3KH0furp55e9gPANLLy9Yy5H2xWLflxpKULsT2UHnqyivG9nDQ89XU2TS4DlkND%2FI6jCKOReVzI1tpehsjQbg5UrrmmjCbULkw70on8ax96GhEEWKY5WpRhjy8tZw2610%2BUqG446KyAoM48LZlZ2ocbdzV94ob3aiQMioeA5H6QfxqkoSQ0PXe4vIV4%2FckLeXFAVMMG1XmdnJIUUAgehxbQfoshRvgMLtrANVcSOmjaM3WywKPyvRscGsztWStcmkwzJRSEpgXcUddCv6ogBZ5g3em%2FqjX%2BU0fNhxznRQfc2fK%2BOigAeaLIsBsBf9Gnd7HuI2IakESGqrFp%2FzPYHpEKnbD4dw1mDY9JgXPFKllZWnvCX0sTgPOUHqiQiQqOpbu9NPNGst%2F6w1p%2FqmYvUOK8%2BMZS4wrXEuo3Ow3ft60SAwqtuPvwY6pgGgQm69C7%2FrLT18AdHgrhrCvjBM11y256u2XDXmrwKi5MzM3ci6E7nWOeoH8UbXSuC9EDjKccqfhOHoWhySRWtSyPEKDGFFZae0jDnCK3DpCAuumv2OKu6G%2Fl3y8gzGfpmsBo%2BfAmHyWc87EFf61LDyYHbztfDKaZBESO73gkFbPh%2FvrWZlmDPsTYAmf%2FoVkaJiFrCsYyhMA0w8AIs28vN9Cy2rrRSK&X-Amz-Signature=f9012c131ba33ce485cf1792adadaf9d70090428a16345ad802c779738c2d996&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EC2A5IE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3NlCkni9nH6Rm4PwWISMVCxQacgLOGnULBY%2FrLYIImAiBGClmgc4jc%2BptLHzdg9ZkxpbwuvaEHZNIHb2NdXsR29ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlQ9sDSNJ7QkJyUOZKtwDxT4rhEmxq%2FTTbuZpiQAwBs0F32UQGHko6HkBt5g0p2vu%2F915SsKy%2BUTKr462ExfaUTTTF2JfrYu62q469fQQt80BcAQzGNwPiG9Wj3Cv1f1yNbBGYCyxY9m03XLA0TQw3IGqmGewKPkn3DzhgLMpi4LNwOo5GCfcXMKjOyAnt3%2BQLQLazYVe1qRDnz5OGBYG0lEX%2B2KR%2Bin4NlT3KH0furp55e9gPANLLy9Yy5H2xWLflxpKULsT2UHnqyivG9nDQ89XU2TS4DlkND%2FI6jCKOReVzI1tpehsjQbg5UrrmmjCbULkw70on8ax96GhEEWKY5WpRhjy8tZw2610%2BUqG446KyAoM48LZlZ2ocbdzV94ob3aiQMioeA5H6QfxqkoSQ0PXe4vIV4%2FckLeXFAVMMG1XmdnJIUUAgehxbQfoshRvgMLtrANVcSOmjaM3WywKPyvRscGsztWStcmkwzJRSEpgXcUddCv6ogBZ5g3em%2FqjX%2BU0fNhxznRQfc2fK%2BOigAeaLIsBsBf9Gnd7HuI2IakESGqrFp%2FzPYHpEKnbD4dw1mDY9JgXPFKllZWnvCX0sTgPOUHqiQiQqOpbu9NPNGst%2F6w1p%2FqmYvUOK8%2BMZS4wrXEuo3Ow3ft60SAwqtuPvwY6pgGgQm69C7%2FrLT18AdHgrhrCvjBM11y256u2XDXmrwKi5MzM3ci6E7nWOeoH8UbXSuC9EDjKccqfhOHoWhySRWtSyPEKDGFFZae0jDnCK3DpCAuumv2OKu6G%2Fl3y8gzGfpmsBo%2BfAmHyWc87EFf61LDyYHbztfDKaZBESO73gkFbPh%2FvrWZlmDPsTYAmf%2FoVkaJiFrCsYyhMA0w8AIs28vN9Cy2rrRSK&X-Amz-Signature=403506e282d2d29ba01909d4874371cc7746c9b174f8e24a10cacad776b7d1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EC2A5IE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3NlCkni9nH6Rm4PwWISMVCxQacgLOGnULBY%2FrLYIImAiBGClmgc4jc%2BptLHzdg9ZkxpbwuvaEHZNIHb2NdXsR29ir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMlQ9sDSNJ7QkJyUOZKtwDxT4rhEmxq%2FTTbuZpiQAwBs0F32UQGHko6HkBt5g0p2vu%2F915SsKy%2BUTKr462ExfaUTTTF2JfrYu62q469fQQt80BcAQzGNwPiG9Wj3Cv1f1yNbBGYCyxY9m03XLA0TQw3IGqmGewKPkn3DzhgLMpi4LNwOo5GCfcXMKjOyAnt3%2BQLQLazYVe1qRDnz5OGBYG0lEX%2B2KR%2Bin4NlT3KH0furp55e9gPANLLy9Yy5H2xWLflxpKULsT2UHnqyivG9nDQ89XU2TS4DlkND%2FI6jCKOReVzI1tpehsjQbg5UrrmmjCbULkw70on8ax96GhEEWKY5WpRhjy8tZw2610%2BUqG446KyAoM48LZlZ2ocbdzV94ob3aiQMioeA5H6QfxqkoSQ0PXe4vIV4%2FckLeXFAVMMG1XmdnJIUUAgehxbQfoshRvgMLtrANVcSOmjaM3WywKPyvRscGsztWStcmkwzJRSEpgXcUddCv6ogBZ5g3em%2FqjX%2BU0fNhxznRQfc2fK%2BOigAeaLIsBsBf9Gnd7HuI2IakESGqrFp%2FzPYHpEKnbD4dw1mDY9JgXPFKllZWnvCX0sTgPOUHqiQiQqOpbu9NPNGst%2F6w1p%2FqmYvUOK8%2BMZS4wrXEuo3Ow3ft60SAwqtuPvwY6pgGgQm69C7%2FrLT18AdHgrhrCvjBM11y256u2XDXmrwKi5MzM3ci6E7nWOeoH8UbXSuC9EDjKccqfhOHoWhySRWtSyPEKDGFFZae0jDnCK3DpCAuumv2OKu6G%2Fl3y8gzGfpmsBo%2BfAmHyWc87EFf61LDyYHbztfDKaZBESO73gkFbPh%2FvrWZlmDPsTYAmf%2FoVkaJiFrCsYyhMA0w8AIs28vN9Cy2rrRSK&X-Amz-Signature=76c12726fcc937f565a42628b4ce5f1b54955681902e1de220aca09f681ea091&X-Amz-SignedHeaders=host&x-id=GetObject)
