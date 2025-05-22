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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BFBPI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE7UuvDs7gSzhiFK%2BcP1VZvMhALYRGSu6TdefWQyOjpNAiEAmc6SBBwYnmJrRV%2BPZuZm1QprlCgI4gZMSpVW2R2t21gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMiWGszCYVfs5kj%2BCrcA%2FhL1cYrtbpkRcuyZ7v0W5nMDpAvEgVgzKRMI9pnR8WR45KIydDevxaIOYgSZGCKOd5ZhsREoyeoNzDFFkD8YkYl3RALATPpCEo3O6UI6JgJ6SpVcR0hTo14Ulq%2Bbk55AzOQXc%2FsoL5J3oF0U6TO%2FSCXZ897oy%2BPnqDis5jQcDZEVUrdzgTVAkclc8C4GdG6zp1ub3PloMyFmI5zD5AZFAd79q0Rjk%2FjLoOoUAhIG4RVs7L4nkP615rAjFpsgnu1UpHlnuh4zbtA9TjDpETa8nODjLubtIGfXgwcdIP24bSb82N51UqO5bRfeoNSWLbFT%2BsLTE6wr2OA1Fr0o8lopVOcmsWhDogSO0clVNUCNZV08vsydTyxwd3FX43vwJm9AeRCftm%2FfvBdq0UhGAaSkXOIPZ0eXtqbC6WGZoWiWpleg%2BQZay2RFx2fV7dwtgKyBhLmtYCCGk%2BV0FHR5pWq0GknX70bIODAoiIY%2BPTIak0ZRnjYYJ7%2BtA93fIvjvZ70TcyFb1oTbS9MKEfmhi6lp6zVZ2vbA3JkAyH2FhXl2zDPY5QEGG6kD9ZAzvvezjynOStj5ykfxAirXsByBc3bSVA86asfJyh0cJtOTzoigsRp70UiNgZ8e7W8yDBzMJ3ivMEGOqUBsQy4qVliec6rwJjAUag4lmtcsXgghOBfhzIvhpaEkM%2FZJZ1%2FpplxGwXK1F1RyWMo44hogFkmnH0q4C3VolqImjMNN36wfJsgJQzsznm%2BeG3DPbWhNvi%2Fe5sY8TU0PwYwIK%2FFlFuxofvGdKNf4DajzH0TQ%2B3X8ExmjOfNaBzg9kp6L%2BDfhR2wrg3zAxgQ%2Bth36ScG%2BtnlDKQCnEDCJ%2FVk0MgwLJmS&X-Amz-Signature=e9a7c4f69d6789a053467b24339b1565c7ad87da1a12809f29aa8877cd67daf8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BFBPI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE7UuvDs7gSzhiFK%2BcP1VZvMhALYRGSu6TdefWQyOjpNAiEAmc6SBBwYnmJrRV%2BPZuZm1QprlCgI4gZMSpVW2R2t21gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMiWGszCYVfs5kj%2BCrcA%2FhL1cYrtbpkRcuyZ7v0W5nMDpAvEgVgzKRMI9pnR8WR45KIydDevxaIOYgSZGCKOd5ZhsREoyeoNzDFFkD8YkYl3RALATPpCEo3O6UI6JgJ6SpVcR0hTo14Ulq%2Bbk55AzOQXc%2FsoL5J3oF0U6TO%2FSCXZ897oy%2BPnqDis5jQcDZEVUrdzgTVAkclc8C4GdG6zp1ub3PloMyFmI5zD5AZFAd79q0Rjk%2FjLoOoUAhIG4RVs7L4nkP615rAjFpsgnu1UpHlnuh4zbtA9TjDpETa8nODjLubtIGfXgwcdIP24bSb82N51UqO5bRfeoNSWLbFT%2BsLTE6wr2OA1Fr0o8lopVOcmsWhDogSO0clVNUCNZV08vsydTyxwd3FX43vwJm9AeRCftm%2FfvBdq0UhGAaSkXOIPZ0eXtqbC6WGZoWiWpleg%2BQZay2RFx2fV7dwtgKyBhLmtYCCGk%2BV0FHR5pWq0GknX70bIODAoiIY%2BPTIak0ZRnjYYJ7%2BtA93fIvjvZ70TcyFb1oTbS9MKEfmhi6lp6zVZ2vbA3JkAyH2FhXl2zDPY5QEGG6kD9ZAzvvezjynOStj5ykfxAirXsByBc3bSVA86asfJyh0cJtOTzoigsRp70UiNgZ8e7W8yDBzMJ3ivMEGOqUBsQy4qVliec6rwJjAUag4lmtcsXgghOBfhzIvhpaEkM%2FZJZ1%2FpplxGwXK1F1RyWMo44hogFkmnH0q4C3VolqImjMNN36wfJsgJQzsznm%2BeG3DPbWhNvi%2Fe5sY8TU0PwYwIK%2FFlFuxofvGdKNf4DajzH0TQ%2B3X8ExmjOfNaBzg9kp6L%2BDfhR2wrg3zAxgQ%2Bth36ScG%2BtnlDKQCnEDCJ%2FVk0MgwLJmS&X-Amz-Signature=4d1f3c6d1a0cea17bdafbf989a002bba1285a9db1cb867c56dd625c347c0f4d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BFBPI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE7UuvDs7gSzhiFK%2BcP1VZvMhALYRGSu6TdefWQyOjpNAiEAmc6SBBwYnmJrRV%2BPZuZm1QprlCgI4gZMSpVW2R2t21gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMiWGszCYVfs5kj%2BCrcA%2FhL1cYrtbpkRcuyZ7v0W5nMDpAvEgVgzKRMI9pnR8WR45KIydDevxaIOYgSZGCKOd5ZhsREoyeoNzDFFkD8YkYl3RALATPpCEo3O6UI6JgJ6SpVcR0hTo14Ulq%2Bbk55AzOQXc%2FsoL5J3oF0U6TO%2FSCXZ897oy%2BPnqDis5jQcDZEVUrdzgTVAkclc8C4GdG6zp1ub3PloMyFmI5zD5AZFAd79q0Rjk%2FjLoOoUAhIG4RVs7L4nkP615rAjFpsgnu1UpHlnuh4zbtA9TjDpETa8nODjLubtIGfXgwcdIP24bSb82N51UqO5bRfeoNSWLbFT%2BsLTE6wr2OA1Fr0o8lopVOcmsWhDogSO0clVNUCNZV08vsydTyxwd3FX43vwJm9AeRCftm%2FfvBdq0UhGAaSkXOIPZ0eXtqbC6WGZoWiWpleg%2BQZay2RFx2fV7dwtgKyBhLmtYCCGk%2BV0FHR5pWq0GknX70bIODAoiIY%2BPTIak0ZRnjYYJ7%2BtA93fIvjvZ70TcyFb1oTbS9MKEfmhi6lp6zVZ2vbA3JkAyH2FhXl2zDPY5QEGG6kD9ZAzvvezjynOStj5ykfxAirXsByBc3bSVA86asfJyh0cJtOTzoigsRp70UiNgZ8e7W8yDBzMJ3ivMEGOqUBsQy4qVliec6rwJjAUag4lmtcsXgghOBfhzIvhpaEkM%2FZJZ1%2FpplxGwXK1F1RyWMo44hogFkmnH0q4C3VolqImjMNN36wfJsgJQzsznm%2BeG3DPbWhNvi%2Fe5sY8TU0PwYwIK%2FFlFuxofvGdKNf4DajzH0TQ%2B3X8ExmjOfNaBzg9kp6L%2BDfhR2wrg3zAxgQ%2Bth36ScG%2BtnlDKQCnEDCJ%2FVk0MgwLJmS&X-Amz-Signature=ce43fb675754ece8fab4986563c456c83adbe6b339ec49c10f1f6f2bc06ae487&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BFBPI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE7UuvDs7gSzhiFK%2BcP1VZvMhALYRGSu6TdefWQyOjpNAiEAmc6SBBwYnmJrRV%2BPZuZm1QprlCgI4gZMSpVW2R2t21gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMiWGszCYVfs5kj%2BCrcA%2FhL1cYrtbpkRcuyZ7v0W5nMDpAvEgVgzKRMI9pnR8WR45KIydDevxaIOYgSZGCKOd5ZhsREoyeoNzDFFkD8YkYl3RALATPpCEo3O6UI6JgJ6SpVcR0hTo14Ulq%2Bbk55AzOQXc%2FsoL5J3oF0U6TO%2FSCXZ897oy%2BPnqDis5jQcDZEVUrdzgTVAkclc8C4GdG6zp1ub3PloMyFmI5zD5AZFAd79q0Rjk%2FjLoOoUAhIG4RVs7L4nkP615rAjFpsgnu1UpHlnuh4zbtA9TjDpETa8nODjLubtIGfXgwcdIP24bSb82N51UqO5bRfeoNSWLbFT%2BsLTE6wr2OA1Fr0o8lopVOcmsWhDogSO0clVNUCNZV08vsydTyxwd3FX43vwJm9AeRCftm%2FfvBdq0UhGAaSkXOIPZ0eXtqbC6WGZoWiWpleg%2BQZay2RFx2fV7dwtgKyBhLmtYCCGk%2BV0FHR5pWq0GknX70bIODAoiIY%2BPTIak0ZRnjYYJ7%2BtA93fIvjvZ70TcyFb1oTbS9MKEfmhi6lp6zVZ2vbA3JkAyH2FhXl2zDPY5QEGG6kD9ZAzvvezjynOStj5ykfxAirXsByBc3bSVA86asfJyh0cJtOTzoigsRp70UiNgZ8e7W8yDBzMJ3ivMEGOqUBsQy4qVliec6rwJjAUag4lmtcsXgghOBfhzIvhpaEkM%2FZJZ1%2FpplxGwXK1F1RyWMo44hogFkmnH0q4C3VolqImjMNN36wfJsgJQzsznm%2BeG3DPbWhNvi%2Fe5sY8TU0PwYwIK%2FFlFuxofvGdKNf4DajzH0TQ%2B3X8ExmjOfNaBzg9kp6L%2BDfhR2wrg3zAxgQ%2Bth36ScG%2BtnlDKQCnEDCJ%2FVk0MgwLJmS&X-Amz-Signature=a8c93e9e96567a9a22bc8bd1ea840138ee0f73add97b3a07f8ebb9d3768bb5fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BFBPI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE7UuvDs7gSzhiFK%2BcP1VZvMhALYRGSu6TdefWQyOjpNAiEAmc6SBBwYnmJrRV%2BPZuZm1QprlCgI4gZMSpVW2R2t21gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMiWGszCYVfs5kj%2BCrcA%2FhL1cYrtbpkRcuyZ7v0W5nMDpAvEgVgzKRMI9pnR8WR45KIydDevxaIOYgSZGCKOd5ZhsREoyeoNzDFFkD8YkYl3RALATPpCEo3O6UI6JgJ6SpVcR0hTo14Ulq%2Bbk55AzOQXc%2FsoL5J3oF0U6TO%2FSCXZ897oy%2BPnqDis5jQcDZEVUrdzgTVAkclc8C4GdG6zp1ub3PloMyFmI5zD5AZFAd79q0Rjk%2FjLoOoUAhIG4RVs7L4nkP615rAjFpsgnu1UpHlnuh4zbtA9TjDpETa8nODjLubtIGfXgwcdIP24bSb82N51UqO5bRfeoNSWLbFT%2BsLTE6wr2OA1Fr0o8lopVOcmsWhDogSO0clVNUCNZV08vsydTyxwd3FX43vwJm9AeRCftm%2FfvBdq0UhGAaSkXOIPZ0eXtqbC6WGZoWiWpleg%2BQZay2RFx2fV7dwtgKyBhLmtYCCGk%2BV0FHR5pWq0GknX70bIODAoiIY%2BPTIak0ZRnjYYJ7%2BtA93fIvjvZ70TcyFb1oTbS9MKEfmhi6lp6zVZ2vbA3JkAyH2FhXl2zDPY5QEGG6kD9ZAzvvezjynOStj5ykfxAirXsByBc3bSVA86asfJyh0cJtOTzoigsRp70UiNgZ8e7W8yDBzMJ3ivMEGOqUBsQy4qVliec6rwJjAUag4lmtcsXgghOBfhzIvhpaEkM%2FZJZ1%2FpplxGwXK1F1RyWMo44hogFkmnH0q4C3VolqImjMNN36wfJsgJQzsznm%2BeG3DPbWhNvi%2Fe5sY8TU0PwYwIK%2FFlFuxofvGdKNf4DajzH0TQ%2B3X8ExmjOfNaBzg9kp6L%2BDfhR2wrg3zAxgQ%2Bth36ScG%2BtnlDKQCnEDCJ%2FVk0MgwLJmS&X-Amz-Signature=689d9725f95a0a4c657a4df5376e8624c5686ffd21d4d43247d7d64210bb3402&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7BFBPI7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIE7UuvDs7gSzhiFK%2BcP1VZvMhALYRGSu6TdefWQyOjpNAiEAmc6SBBwYnmJrRV%2BPZuZm1QprlCgI4gZMSpVW2R2t21gqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMiWGszCYVfs5kj%2BCrcA%2FhL1cYrtbpkRcuyZ7v0W5nMDpAvEgVgzKRMI9pnR8WR45KIydDevxaIOYgSZGCKOd5ZhsREoyeoNzDFFkD8YkYl3RALATPpCEo3O6UI6JgJ6SpVcR0hTo14Ulq%2Bbk55AzOQXc%2FsoL5J3oF0U6TO%2FSCXZ897oy%2BPnqDis5jQcDZEVUrdzgTVAkclc8C4GdG6zp1ub3PloMyFmI5zD5AZFAd79q0Rjk%2FjLoOoUAhIG4RVs7L4nkP615rAjFpsgnu1UpHlnuh4zbtA9TjDpETa8nODjLubtIGfXgwcdIP24bSb82N51UqO5bRfeoNSWLbFT%2BsLTE6wr2OA1Fr0o8lopVOcmsWhDogSO0clVNUCNZV08vsydTyxwd3FX43vwJm9AeRCftm%2FfvBdq0UhGAaSkXOIPZ0eXtqbC6WGZoWiWpleg%2BQZay2RFx2fV7dwtgKyBhLmtYCCGk%2BV0FHR5pWq0GknX70bIODAoiIY%2BPTIak0ZRnjYYJ7%2BtA93fIvjvZ70TcyFb1oTbS9MKEfmhi6lp6zVZ2vbA3JkAyH2FhXl2zDPY5QEGG6kD9ZAzvvezjynOStj5ykfxAirXsByBc3bSVA86asfJyh0cJtOTzoigsRp70UiNgZ8e7W8yDBzMJ3ivMEGOqUBsQy4qVliec6rwJjAUag4lmtcsXgghOBfhzIvhpaEkM%2FZJZ1%2FpplxGwXK1F1RyWMo44hogFkmnH0q4C3VolqImjMNN36wfJsgJQzsznm%2BeG3DPbWhNvi%2Fe5sY8TU0PwYwIK%2FFlFuxofvGdKNf4DajzH0TQ%2B3X8ExmjOfNaBzg9kp6L%2BDfhR2wrg3zAxgQ%2Bth36ScG%2BtnlDKQCnEDCJ%2FVk0MgwLJmS&X-Amz-Signature=f5ec0b51c3c5a0ce73b93ca484a08bb0aa927917b9f9d45b4c3897b854fd13c9&X-Amz-SignedHeaders=host&x-id=GetObject)
