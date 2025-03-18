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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYX3726%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2BFRwTlnpe339dZ%2F%2BwR1YCl4ITHCRiyeJ224psM7Qu0gIgDLVn7QEYHX%2By6XcLCWLb3dNDUMRXUtw2H7y2YsXslFoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN7aqVFxo%2FTRZy85WCrcA4HBbNli6eirbAD%2BiCH9DWB6MjqUkQ1cMjinYxix2qghaoo88fXw2YV%2BbYLPu0fmJALi49MbdFoiDsS1gcVUyCvbhlevM%2BnaAOt1jpBL7TdQEfG0Q7aP0TdizaqJjKEMrKSH3wlomhuXBBe43iaCoJbcy7KED5E9H%2BDoXgUPFUJrBE7wUL7PqoPe6ebh3uGrPSYLaNeweAASEQLAzsUGVp9ZbYFIF6ZRRgyk%2B1QGF%2FqExNSCBYpQCzgLICTsUkb%2BrjXDBvCd6A9yrzgLSFGNYl3h9g7BQW6xeEvR%2Fu5MBrYKiaP49r63ep7u4jtyZ4QsMeGfzD2sHOn7Y48kQwh4PBmVDXA%2BStLZ5nLaald1vnMmkxBB08EqB0HEZNX9pcS7UVNZMZWgqU0uLkkJudRK74VlOWCKMYlwXdA%2Fn15qDf3qyJ1nypSFx1N5YSQpBsu338iTebcgolBZ8%2Bi44ilFtExmZQitvKVPC22b4QJJdVRm0pUA3z%2FrviuZb6RfU0CRpcyAusOAH1sSpLzLI83QuzxRbyOJomN94y7MrizTFEPP0o1%2BwudWE3tOkEJuUX0IBfimVjaVhS%2FhvwnOw4NGvNPZ5udJzrDHlfadl6dErjDLN62c7ZEUUQiYc9DdMOnW5L4GOqUBBe%2FibmwueA3cE%2B0xnZBOmMc5l%2BqGuhqh1kf7H7VmBGuiRqDBE9pIx45gdQ6thQPMPfRfcBoMR8JiC54mbHOBgnksHxChF2z6qxQnZHNst5PFd2IN9m7XtG%2F4qT1jdzOt7J7lRuOhIrRya7yVy4kuCQ4i53Wk5jQuvLyKQd3qRey%2FBHGt7ReTxHiJ1ZL0tcOIeEUEyXDPXLntQeKdqTxo0yuE4VE1&X-Amz-Signature=85b9d33d3fab9d42161b2443bc0e8150d8e29165bedcde8c219ed88a9227ba01&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYX3726%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2BFRwTlnpe339dZ%2F%2BwR1YCl4ITHCRiyeJ224psM7Qu0gIgDLVn7QEYHX%2By6XcLCWLb3dNDUMRXUtw2H7y2YsXslFoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN7aqVFxo%2FTRZy85WCrcA4HBbNli6eirbAD%2BiCH9DWB6MjqUkQ1cMjinYxix2qghaoo88fXw2YV%2BbYLPu0fmJALi49MbdFoiDsS1gcVUyCvbhlevM%2BnaAOt1jpBL7TdQEfG0Q7aP0TdizaqJjKEMrKSH3wlomhuXBBe43iaCoJbcy7KED5E9H%2BDoXgUPFUJrBE7wUL7PqoPe6ebh3uGrPSYLaNeweAASEQLAzsUGVp9ZbYFIF6ZRRgyk%2B1QGF%2FqExNSCBYpQCzgLICTsUkb%2BrjXDBvCd6A9yrzgLSFGNYl3h9g7BQW6xeEvR%2Fu5MBrYKiaP49r63ep7u4jtyZ4QsMeGfzD2sHOn7Y48kQwh4PBmVDXA%2BStLZ5nLaald1vnMmkxBB08EqB0HEZNX9pcS7UVNZMZWgqU0uLkkJudRK74VlOWCKMYlwXdA%2Fn15qDf3qyJ1nypSFx1N5YSQpBsu338iTebcgolBZ8%2Bi44ilFtExmZQitvKVPC22b4QJJdVRm0pUA3z%2FrviuZb6RfU0CRpcyAusOAH1sSpLzLI83QuzxRbyOJomN94y7MrizTFEPP0o1%2BwudWE3tOkEJuUX0IBfimVjaVhS%2FhvwnOw4NGvNPZ5udJzrDHlfadl6dErjDLN62c7ZEUUQiYc9DdMOnW5L4GOqUBBe%2FibmwueA3cE%2B0xnZBOmMc5l%2BqGuhqh1kf7H7VmBGuiRqDBE9pIx45gdQ6thQPMPfRfcBoMR8JiC54mbHOBgnksHxChF2z6qxQnZHNst5PFd2IN9m7XtG%2F4qT1jdzOt7J7lRuOhIrRya7yVy4kuCQ4i53Wk5jQuvLyKQd3qRey%2FBHGt7ReTxHiJ1ZL0tcOIeEUEyXDPXLntQeKdqTxo0yuE4VE1&X-Amz-Signature=d065389a8213d9d11beb4d8103e3d48e6565c9da48ff1f67f1b9c6f047e95f69&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYX3726%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2BFRwTlnpe339dZ%2F%2BwR1YCl4ITHCRiyeJ224psM7Qu0gIgDLVn7QEYHX%2By6XcLCWLb3dNDUMRXUtw2H7y2YsXslFoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN7aqVFxo%2FTRZy85WCrcA4HBbNli6eirbAD%2BiCH9DWB6MjqUkQ1cMjinYxix2qghaoo88fXw2YV%2BbYLPu0fmJALi49MbdFoiDsS1gcVUyCvbhlevM%2BnaAOt1jpBL7TdQEfG0Q7aP0TdizaqJjKEMrKSH3wlomhuXBBe43iaCoJbcy7KED5E9H%2BDoXgUPFUJrBE7wUL7PqoPe6ebh3uGrPSYLaNeweAASEQLAzsUGVp9ZbYFIF6ZRRgyk%2B1QGF%2FqExNSCBYpQCzgLICTsUkb%2BrjXDBvCd6A9yrzgLSFGNYl3h9g7BQW6xeEvR%2Fu5MBrYKiaP49r63ep7u4jtyZ4QsMeGfzD2sHOn7Y48kQwh4PBmVDXA%2BStLZ5nLaald1vnMmkxBB08EqB0HEZNX9pcS7UVNZMZWgqU0uLkkJudRK74VlOWCKMYlwXdA%2Fn15qDf3qyJ1nypSFx1N5YSQpBsu338iTebcgolBZ8%2Bi44ilFtExmZQitvKVPC22b4QJJdVRm0pUA3z%2FrviuZb6RfU0CRpcyAusOAH1sSpLzLI83QuzxRbyOJomN94y7MrizTFEPP0o1%2BwudWE3tOkEJuUX0IBfimVjaVhS%2FhvwnOw4NGvNPZ5udJzrDHlfadl6dErjDLN62c7ZEUUQiYc9DdMOnW5L4GOqUBBe%2FibmwueA3cE%2B0xnZBOmMc5l%2BqGuhqh1kf7H7VmBGuiRqDBE9pIx45gdQ6thQPMPfRfcBoMR8JiC54mbHOBgnksHxChF2z6qxQnZHNst5PFd2IN9m7XtG%2F4qT1jdzOt7J7lRuOhIrRya7yVy4kuCQ4i53Wk5jQuvLyKQd3qRey%2FBHGt7ReTxHiJ1ZL0tcOIeEUEyXDPXLntQeKdqTxo0yuE4VE1&X-Amz-Signature=f3a4dc3d25f3ced11b4613ba2f8e3fc7165abf2a9abe9d34f67ac1ca696e6224&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYX3726%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2BFRwTlnpe339dZ%2F%2BwR1YCl4ITHCRiyeJ224psM7Qu0gIgDLVn7QEYHX%2By6XcLCWLb3dNDUMRXUtw2H7y2YsXslFoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN7aqVFxo%2FTRZy85WCrcA4HBbNli6eirbAD%2BiCH9DWB6MjqUkQ1cMjinYxix2qghaoo88fXw2YV%2BbYLPu0fmJALi49MbdFoiDsS1gcVUyCvbhlevM%2BnaAOt1jpBL7TdQEfG0Q7aP0TdizaqJjKEMrKSH3wlomhuXBBe43iaCoJbcy7KED5E9H%2BDoXgUPFUJrBE7wUL7PqoPe6ebh3uGrPSYLaNeweAASEQLAzsUGVp9ZbYFIF6ZRRgyk%2B1QGF%2FqExNSCBYpQCzgLICTsUkb%2BrjXDBvCd6A9yrzgLSFGNYl3h9g7BQW6xeEvR%2Fu5MBrYKiaP49r63ep7u4jtyZ4QsMeGfzD2sHOn7Y48kQwh4PBmVDXA%2BStLZ5nLaald1vnMmkxBB08EqB0HEZNX9pcS7UVNZMZWgqU0uLkkJudRK74VlOWCKMYlwXdA%2Fn15qDf3qyJ1nypSFx1N5YSQpBsu338iTebcgolBZ8%2Bi44ilFtExmZQitvKVPC22b4QJJdVRm0pUA3z%2FrviuZb6RfU0CRpcyAusOAH1sSpLzLI83QuzxRbyOJomN94y7MrizTFEPP0o1%2BwudWE3tOkEJuUX0IBfimVjaVhS%2FhvwnOw4NGvNPZ5udJzrDHlfadl6dErjDLN62c7ZEUUQiYc9DdMOnW5L4GOqUBBe%2FibmwueA3cE%2B0xnZBOmMc5l%2BqGuhqh1kf7H7VmBGuiRqDBE9pIx45gdQ6thQPMPfRfcBoMR8JiC54mbHOBgnksHxChF2z6qxQnZHNst5PFd2IN9m7XtG%2F4qT1jdzOt7J7lRuOhIrRya7yVy4kuCQ4i53Wk5jQuvLyKQd3qRey%2FBHGt7ReTxHiJ1ZL0tcOIeEUEyXDPXLntQeKdqTxo0yuE4VE1&X-Amz-Signature=130603f64746e9cb7dd1319d281cee27c4392e435dd9217267949a83670bec8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYX3726%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2BFRwTlnpe339dZ%2F%2BwR1YCl4ITHCRiyeJ224psM7Qu0gIgDLVn7QEYHX%2By6XcLCWLb3dNDUMRXUtw2H7y2YsXslFoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN7aqVFxo%2FTRZy85WCrcA4HBbNli6eirbAD%2BiCH9DWB6MjqUkQ1cMjinYxix2qghaoo88fXw2YV%2BbYLPu0fmJALi49MbdFoiDsS1gcVUyCvbhlevM%2BnaAOt1jpBL7TdQEfG0Q7aP0TdizaqJjKEMrKSH3wlomhuXBBe43iaCoJbcy7KED5E9H%2BDoXgUPFUJrBE7wUL7PqoPe6ebh3uGrPSYLaNeweAASEQLAzsUGVp9ZbYFIF6ZRRgyk%2B1QGF%2FqExNSCBYpQCzgLICTsUkb%2BrjXDBvCd6A9yrzgLSFGNYl3h9g7BQW6xeEvR%2Fu5MBrYKiaP49r63ep7u4jtyZ4QsMeGfzD2sHOn7Y48kQwh4PBmVDXA%2BStLZ5nLaald1vnMmkxBB08EqB0HEZNX9pcS7UVNZMZWgqU0uLkkJudRK74VlOWCKMYlwXdA%2Fn15qDf3qyJ1nypSFx1N5YSQpBsu338iTebcgolBZ8%2Bi44ilFtExmZQitvKVPC22b4QJJdVRm0pUA3z%2FrviuZb6RfU0CRpcyAusOAH1sSpLzLI83QuzxRbyOJomN94y7MrizTFEPP0o1%2BwudWE3tOkEJuUX0IBfimVjaVhS%2FhvwnOw4NGvNPZ5udJzrDHlfadl6dErjDLN62c7ZEUUQiYc9DdMOnW5L4GOqUBBe%2FibmwueA3cE%2B0xnZBOmMc5l%2BqGuhqh1kf7H7VmBGuiRqDBE9pIx45gdQ6thQPMPfRfcBoMR8JiC54mbHOBgnksHxChF2z6qxQnZHNst5PFd2IN9m7XtG%2F4qT1jdzOt7J7lRuOhIrRya7yVy4kuCQ4i53Wk5jQuvLyKQd3qRey%2FBHGt7ReTxHiJ1ZL0tcOIeEUEyXDPXLntQeKdqTxo0yuE4VE1&X-Amz-Signature=26ea33bf06894c648a87c5c9319047839525e44d2c5059d8e4dc40c675886a60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYX3726%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2BFRwTlnpe339dZ%2F%2BwR1YCl4ITHCRiyeJ224psM7Qu0gIgDLVn7QEYHX%2By6XcLCWLb3dNDUMRXUtw2H7y2YsXslFoq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDN7aqVFxo%2FTRZy85WCrcA4HBbNli6eirbAD%2BiCH9DWB6MjqUkQ1cMjinYxix2qghaoo88fXw2YV%2BbYLPu0fmJALi49MbdFoiDsS1gcVUyCvbhlevM%2BnaAOt1jpBL7TdQEfG0Q7aP0TdizaqJjKEMrKSH3wlomhuXBBe43iaCoJbcy7KED5E9H%2BDoXgUPFUJrBE7wUL7PqoPe6ebh3uGrPSYLaNeweAASEQLAzsUGVp9ZbYFIF6ZRRgyk%2B1QGF%2FqExNSCBYpQCzgLICTsUkb%2BrjXDBvCd6A9yrzgLSFGNYl3h9g7BQW6xeEvR%2Fu5MBrYKiaP49r63ep7u4jtyZ4QsMeGfzD2sHOn7Y48kQwh4PBmVDXA%2BStLZ5nLaald1vnMmkxBB08EqB0HEZNX9pcS7UVNZMZWgqU0uLkkJudRK74VlOWCKMYlwXdA%2Fn15qDf3qyJ1nypSFx1N5YSQpBsu338iTebcgolBZ8%2Bi44ilFtExmZQitvKVPC22b4QJJdVRm0pUA3z%2FrviuZb6RfU0CRpcyAusOAH1sSpLzLI83QuzxRbyOJomN94y7MrizTFEPP0o1%2BwudWE3tOkEJuUX0IBfimVjaVhS%2FhvwnOw4NGvNPZ5udJzrDHlfadl6dErjDLN62c7ZEUUQiYc9DdMOnW5L4GOqUBBe%2FibmwueA3cE%2B0xnZBOmMc5l%2BqGuhqh1kf7H7VmBGuiRqDBE9pIx45gdQ6thQPMPfRfcBoMR8JiC54mbHOBgnksHxChF2z6qxQnZHNst5PFd2IN9m7XtG%2F4qT1jdzOt7J7lRuOhIrRya7yVy4kuCQ4i53Wk5jQuvLyKQd3qRey%2FBHGt7ReTxHiJ1ZL0tcOIeEUEyXDPXLntQeKdqTxo0yuE4VE1&X-Amz-Signature=b7b6b5471afaea9ace98757ede54d5ff6c62ea034b2f7b3825e4cb98dd20dcf7&X-Amz-SignedHeaders=host&x-id=GetObject)
