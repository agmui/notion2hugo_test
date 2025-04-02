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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGVWTH4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCsHYdTpDMpgMblDLSeltwuSnudq4Di2JuUznlTQkrc6QIgGv%2FonK6heieOSlkbzyEdqYJsCujTfclG0cLczU9IjqYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD86%2F4aGwDEQOHL74ircA%2FhJj3kQFs4GtC3pF142a6cu5Zi5rzojqTYmx9sPvfaCdOkH0DsiWP27KzjIqM8xkLztegiz0qRO0eNgrwgQQ%2BhHBFLKi65jEafEnfG6xi0nkGF9ulMJ4RT29P06h%2BWVQ1paOK3Rp6GsqlQkoyrF5Tt1hrb2XBaD8aFD%2FGtZkWkELt%2BeqLKZsFi1iC6sCoVRIG61p8yCAUh8c9XNscFEeEJ4moEEEWKQq%2FQbIqKYRqa2hWBZbToCLm%2FZvr9yXCpmR3ocWpbX1uf0jBXysb3W1jRzP60AyVUaSQMsbEc%2FSNuY96dR9DsGXpz7b8CqkU%2Bo2GVohkVSc%2BA2Uji9cvRRwh%2FWpfrzIAf%2B7G4woshpZkToP%2FcgMSZh%2FQ4OOJUG6r%2Bli8QY%2B6PZrSDbVOWTWCOTaJOSHG5z55yEL53GWPiljKKdUUgzj502Rc5esb9O1K5zH53DGBLAaA0K8lALvKx2V721wu%2BhxxtrdtjBPH0m3aL3xdq4DiG4Y%2BGld9MG77lo3jRyazyUZkytneNKSAFzYRywtkGrIgy8M48balj0pcwDCIAZ6q%2FfkoIgpxAhZfZtM%2BQUBFKA7bpZBw4JgTjouIBOZJHsbh7vmybvitC54Zy%2B9cEw1nosm5BX8slQMMP7tL8GOqUBvf%2FEolMPoAPvDWx8Y8iKuRjRnjKDwYoV2WS7evWhZdmEDtDorET6Lc269a%2BciFRKA1AdqKa162YQCmxxZn7CCBaQcwLzzlke0ot5aHbGzbAOVNw%2B2bFmhpWOw%2BS8Xiw2pUIovs8bM9cIvO0gouR40ChpK2kEKgv9LVqF7hh%2F%2Bwbyp72bcT8VeFqHnhC7mjJVYgxLBFBlhS4zWOr%2FJ7cUPbSVF8Yg&X-Amz-Signature=c3e80d1f629bb94504dfc59290a779e5525935f961c569768df14478f2ad3073&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGVWTH4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCsHYdTpDMpgMblDLSeltwuSnudq4Di2JuUznlTQkrc6QIgGv%2FonK6heieOSlkbzyEdqYJsCujTfclG0cLczU9IjqYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD86%2F4aGwDEQOHL74ircA%2FhJj3kQFs4GtC3pF142a6cu5Zi5rzojqTYmx9sPvfaCdOkH0DsiWP27KzjIqM8xkLztegiz0qRO0eNgrwgQQ%2BhHBFLKi65jEafEnfG6xi0nkGF9ulMJ4RT29P06h%2BWVQ1paOK3Rp6GsqlQkoyrF5Tt1hrb2XBaD8aFD%2FGtZkWkELt%2BeqLKZsFi1iC6sCoVRIG61p8yCAUh8c9XNscFEeEJ4moEEEWKQq%2FQbIqKYRqa2hWBZbToCLm%2FZvr9yXCpmR3ocWpbX1uf0jBXysb3W1jRzP60AyVUaSQMsbEc%2FSNuY96dR9DsGXpz7b8CqkU%2Bo2GVohkVSc%2BA2Uji9cvRRwh%2FWpfrzIAf%2B7G4woshpZkToP%2FcgMSZh%2FQ4OOJUG6r%2Bli8QY%2B6PZrSDbVOWTWCOTaJOSHG5z55yEL53GWPiljKKdUUgzj502Rc5esb9O1K5zH53DGBLAaA0K8lALvKx2V721wu%2BhxxtrdtjBPH0m3aL3xdq4DiG4Y%2BGld9MG77lo3jRyazyUZkytneNKSAFzYRywtkGrIgy8M48balj0pcwDCIAZ6q%2FfkoIgpxAhZfZtM%2BQUBFKA7bpZBw4JgTjouIBOZJHsbh7vmybvitC54Zy%2B9cEw1nosm5BX8slQMMP7tL8GOqUBvf%2FEolMPoAPvDWx8Y8iKuRjRnjKDwYoV2WS7evWhZdmEDtDorET6Lc269a%2BciFRKA1AdqKa162YQCmxxZn7CCBaQcwLzzlke0ot5aHbGzbAOVNw%2B2bFmhpWOw%2BS8Xiw2pUIovs8bM9cIvO0gouR40ChpK2kEKgv9LVqF7hh%2F%2Bwbyp72bcT8VeFqHnhC7mjJVYgxLBFBlhS4zWOr%2FJ7cUPbSVF8Yg&X-Amz-Signature=440f2fc173e726d6ac3bf9605e1d7052f628787f09c02cb8c8d7f0481833c92f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGVWTH4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCsHYdTpDMpgMblDLSeltwuSnudq4Di2JuUznlTQkrc6QIgGv%2FonK6heieOSlkbzyEdqYJsCujTfclG0cLczU9IjqYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD86%2F4aGwDEQOHL74ircA%2FhJj3kQFs4GtC3pF142a6cu5Zi5rzojqTYmx9sPvfaCdOkH0DsiWP27KzjIqM8xkLztegiz0qRO0eNgrwgQQ%2BhHBFLKi65jEafEnfG6xi0nkGF9ulMJ4RT29P06h%2BWVQ1paOK3Rp6GsqlQkoyrF5Tt1hrb2XBaD8aFD%2FGtZkWkELt%2BeqLKZsFi1iC6sCoVRIG61p8yCAUh8c9XNscFEeEJ4moEEEWKQq%2FQbIqKYRqa2hWBZbToCLm%2FZvr9yXCpmR3ocWpbX1uf0jBXysb3W1jRzP60AyVUaSQMsbEc%2FSNuY96dR9DsGXpz7b8CqkU%2Bo2GVohkVSc%2BA2Uji9cvRRwh%2FWpfrzIAf%2B7G4woshpZkToP%2FcgMSZh%2FQ4OOJUG6r%2Bli8QY%2B6PZrSDbVOWTWCOTaJOSHG5z55yEL53GWPiljKKdUUgzj502Rc5esb9O1K5zH53DGBLAaA0K8lALvKx2V721wu%2BhxxtrdtjBPH0m3aL3xdq4DiG4Y%2BGld9MG77lo3jRyazyUZkytneNKSAFzYRywtkGrIgy8M48balj0pcwDCIAZ6q%2FfkoIgpxAhZfZtM%2BQUBFKA7bpZBw4JgTjouIBOZJHsbh7vmybvitC54Zy%2B9cEw1nosm5BX8slQMMP7tL8GOqUBvf%2FEolMPoAPvDWx8Y8iKuRjRnjKDwYoV2WS7evWhZdmEDtDorET6Lc269a%2BciFRKA1AdqKa162YQCmxxZn7CCBaQcwLzzlke0ot5aHbGzbAOVNw%2B2bFmhpWOw%2BS8Xiw2pUIovs8bM9cIvO0gouR40ChpK2kEKgv9LVqF7hh%2F%2Bwbyp72bcT8VeFqHnhC7mjJVYgxLBFBlhS4zWOr%2FJ7cUPbSVF8Yg&X-Amz-Signature=d463ee6e9d52a61822802a8a5e477b03cfea39e033e5800bf62e8682ddd7ec82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGVWTH4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCsHYdTpDMpgMblDLSeltwuSnudq4Di2JuUznlTQkrc6QIgGv%2FonK6heieOSlkbzyEdqYJsCujTfclG0cLczU9IjqYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD86%2F4aGwDEQOHL74ircA%2FhJj3kQFs4GtC3pF142a6cu5Zi5rzojqTYmx9sPvfaCdOkH0DsiWP27KzjIqM8xkLztegiz0qRO0eNgrwgQQ%2BhHBFLKi65jEafEnfG6xi0nkGF9ulMJ4RT29P06h%2BWVQ1paOK3Rp6GsqlQkoyrF5Tt1hrb2XBaD8aFD%2FGtZkWkELt%2BeqLKZsFi1iC6sCoVRIG61p8yCAUh8c9XNscFEeEJ4moEEEWKQq%2FQbIqKYRqa2hWBZbToCLm%2FZvr9yXCpmR3ocWpbX1uf0jBXysb3W1jRzP60AyVUaSQMsbEc%2FSNuY96dR9DsGXpz7b8CqkU%2Bo2GVohkVSc%2BA2Uji9cvRRwh%2FWpfrzIAf%2B7G4woshpZkToP%2FcgMSZh%2FQ4OOJUG6r%2Bli8QY%2B6PZrSDbVOWTWCOTaJOSHG5z55yEL53GWPiljKKdUUgzj502Rc5esb9O1K5zH53DGBLAaA0K8lALvKx2V721wu%2BhxxtrdtjBPH0m3aL3xdq4DiG4Y%2BGld9MG77lo3jRyazyUZkytneNKSAFzYRywtkGrIgy8M48balj0pcwDCIAZ6q%2FfkoIgpxAhZfZtM%2BQUBFKA7bpZBw4JgTjouIBOZJHsbh7vmybvitC54Zy%2B9cEw1nosm5BX8slQMMP7tL8GOqUBvf%2FEolMPoAPvDWx8Y8iKuRjRnjKDwYoV2WS7evWhZdmEDtDorET6Lc269a%2BciFRKA1AdqKa162YQCmxxZn7CCBaQcwLzzlke0ot5aHbGzbAOVNw%2B2bFmhpWOw%2BS8Xiw2pUIovs8bM9cIvO0gouR40ChpK2kEKgv9LVqF7hh%2F%2Bwbyp72bcT8VeFqHnhC7mjJVYgxLBFBlhS4zWOr%2FJ7cUPbSVF8Yg&X-Amz-Signature=8c3269985c58e7ee262eac95ec824af0b2d1fa8de9c68b1ad368fd4f9be34d42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGVWTH4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCsHYdTpDMpgMblDLSeltwuSnudq4Di2JuUznlTQkrc6QIgGv%2FonK6heieOSlkbzyEdqYJsCujTfclG0cLczU9IjqYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD86%2F4aGwDEQOHL74ircA%2FhJj3kQFs4GtC3pF142a6cu5Zi5rzojqTYmx9sPvfaCdOkH0DsiWP27KzjIqM8xkLztegiz0qRO0eNgrwgQQ%2BhHBFLKi65jEafEnfG6xi0nkGF9ulMJ4RT29P06h%2BWVQ1paOK3Rp6GsqlQkoyrF5Tt1hrb2XBaD8aFD%2FGtZkWkELt%2BeqLKZsFi1iC6sCoVRIG61p8yCAUh8c9XNscFEeEJ4moEEEWKQq%2FQbIqKYRqa2hWBZbToCLm%2FZvr9yXCpmR3ocWpbX1uf0jBXysb3W1jRzP60AyVUaSQMsbEc%2FSNuY96dR9DsGXpz7b8CqkU%2Bo2GVohkVSc%2BA2Uji9cvRRwh%2FWpfrzIAf%2B7G4woshpZkToP%2FcgMSZh%2FQ4OOJUG6r%2Bli8QY%2B6PZrSDbVOWTWCOTaJOSHG5z55yEL53GWPiljKKdUUgzj502Rc5esb9O1K5zH53DGBLAaA0K8lALvKx2V721wu%2BhxxtrdtjBPH0m3aL3xdq4DiG4Y%2BGld9MG77lo3jRyazyUZkytneNKSAFzYRywtkGrIgy8M48balj0pcwDCIAZ6q%2FfkoIgpxAhZfZtM%2BQUBFKA7bpZBw4JgTjouIBOZJHsbh7vmybvitC54Zy%2B9cEw1nosm5BX8slQMMP7tL8GOqUBvf%2FEolMPoAPvDWx8Y8iKuRjRnjKDwYoV2WS7evWhZdmEDtDorET6Lc269a%2BciFRKA1AdqKa162YQCmxxZn7CCBaQcwLzzlke0ot5aHbGzbAOVNw%2B2bFmhpWOw%2BS8Xiw2pUIovs8bM9cIvO0gouR40ChpK2kEKgv9LVqF7hh%2F%2Bwbyp72bcT8VeFqHnhC7mjJVYgxLBFBlhS4zWOr%2FJ7cUPbSVF8Yg&X-Amz-Signature=6ff034251ccf61622cd796cc35b148ce5ead30feede18265cde6e041f3fae05b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DGVWTH4%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCsHYdTpDMpgMblDLSeltwuSnudq4Di2JuUznlTQkrc6QIgGv%2FonK6heieOSlkbzyEdqYJsCujTfclG0cLczU9IjqYqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD86%2F4aGwDEQOHL74ircA%2FhJj3kQFs4GtC3pF142a6cu5Zi5rzojqTYmx9sPvfaCdOkH0DsiWP27KzjIqM8xkLztegiz0qRO0eNgrwgQQ%2BhHBFLKi65jEafEnfG6xi0nkGF9ulMJ4RT29P06h%2BWVQ1paOK3Rp6GsqlQkoyrF5Tt1hrb2XBaD8aFD%2FGtZkWkELt%2BeqLKZsFi1iC6sCoVRIG61p8yCAUh8c9XNscFEeEJ4moEEEWKQq%2FQbIqKYRqa2hWBZbToCLm%2FZvr9yXCpmR3ocWpbX1uf0jBXysb3W1jRzP60AyVUaSQMsbEc%2FSNuY96dR9DsGXpz7b8CqkU%2Bo2GVohkVSc%2BA2Uji9cvRRwh%2FWpfrzIAf%2B7G4woshpZkToP%2FcgMSZh%2FQ4OOJUG6r%2Bli8QY%2B6PZrSDbVOWTWCOTaJOSHG5z55yEL53GWPiljKKdUUgzj502Rc5esb9O1K5zH53DGBLAaA0K8lALvKx2V721wu%2BhxxtrdtjBPH0m3aL3xdq4DiG4Y%2BGld9MG77lo3jRyazyUZkytneNKSAFzYRywtkGrIgy8M48balj0pcwDCIAZ6q%2FfkoIgpxAhZfZtM%2BQUBFKA7bpZBw4JgTjouIBOZJHsbh7vmybvitC54Zy%2B9cEw1nosm5BX8slQMMP7tL8GOqUBvf%2FEolMPoAPvDWx8Y8iKuRjRnjKDwYoV2WS7evWhZdmEDtDorET6Lc269a%2BciFRKA1AdqKa162YQCmxxZn7CCBaQcwLzzlke0ot5aHbGzbAOVNw%2B2bFmhpWOw%2BS8Xiw2pUIovs8bM9cIvO0gouR40ChpK2kEKgv9LVqF7hh%2F%2Bwbyp72bcT8VeFqHnhC7mjJVYgxLBFBlhS4zWOr%2FJ7cUPbSVF8Yg&X-Amz-Signature=32d735f43e1d96790a441599bc04da85c9880527e4044e6d967ae2ab048103ca&X-Amz-SignedHeaders=host&x-id=GetObject)
