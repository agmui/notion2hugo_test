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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SE7EDF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFHHDJBGu%2BqSLNm0%2FX%2BkB%2FIckdmsx2xxFxpv9qbSCFsQAiBuj0UZUU4Js1uu%2F%2FjazpI3%2FE%2FbaEgA0ka9R%2F%2F7DFUBTyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM64viMXAXB11C5cNzKtwDTD13ZGzGNjragNXDd5GiRH6shB%2B0uSDIMJNvfcl2RXFxNTMhdbAVNIwdzzJYCgBFJ3qEPSsVAI2WHpeB8WMQwUBJlXtsMXFZGi1DwShjoNB%2F2RDa78HqoSC0%2Fjzg1TVPJINBbDkD%2F8ZD8jaE353A1k6XSgzTsixx7WUcBJ9pWSv4p8A7Y0xlcVAsdA0tU4MJevA62nlSOU%2BoLJHrm3MVNHgH9SvVi7EBBJsqeGOEYFJQXXj%2BJ7fT0ObqRk5KsedH9VTY37itkwgmzWDNIrze1T%2Br6xNlsZ6MlfulH1hbT0EIeoVHukcAI6Tf0YGC0f3t677HavpkJ0R%2FRl7eL9p0iYU7S2wt%2BmIPnsfdvOIIXa5bhAAcWBi%2BQmbNNX0P9SKXWChUN7ZQ7HFR3XquxPFZhY0JpwFHTZLpw6cmoI3cXB9NUj%2F9M%2BaqS9UMI8CQQl6od5YCPr0JymwgQc%2FkrO4PJ47nI4MGVSjWXmXMeJbY9F8BA0R71%2FEhWLYjnwleYJFomBkB3wZ8Zcpi5c6IHVH6PJwOpUNZh5DTSAxYuLp%2F%2FRDKSuRqBWtnSIizx0%2FiYVVxK9avupj5UuN%2B9SUvfBTh99Y76scuw3jDbCSM4R9ZMLSvfAmzX9PrZuf62%2Bgwoai0vgY6pgEph64RIBJ8YDE6jKgQSlKV%2B%2BXkiYTt5KoYw43YLiALm5SY6%2Fo7IF%2BvIbPdxkHhQ1VRea2r5aHRdCI2sp31LXgtuMAvJM%2FiPEciJHJZpFoKLgkwMijO5zkh80nAPux3uarMCWgNLxoxmjOZzhFT78AsP4LswYKaAWsbCjI%2BqoxuCClaPf5JQTfSMmU19kjtLjWqEDr80j5zgKarRLyf%2BR6ooLefXqGc&X-Amz-Signature=740aa90e34b71a93af3214ca372b8dea234d1852d571b876c32b8c9506abb6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SE7EDF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFHHDJBGu%2BqSLNm0%2FX%2BkB%2FIckdmsx2xxFxpv9qbSCFsQAiBuj0UZUU4Js1uu%2F%2FjazpI3%2FE%2FbaEgA0ka9R%2F%2F7DFUBTyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM64viMXAXB11C5cNzKtwDTD13ZGzGNjragNXDd5GiRH6shB%2B0uSDIMJNvfcl2RXFxNTMhdbAVNIwdzzJYCgBFJ3qEPSsVAI2WHpeB8WMQwUBJlXtsMXFZGi1DwShjoNB%2F2RDa78HqoSC0%2Fjzg1TVPJINBbDkD%2F8ZD8jaE353A1k6XSgzTsixx7WUcBJ9pWSv4p8A7Y0xlcVAsdA0tU4MJevA62nlSOU%2BoLJHrm3MVNHgH9SvVi7EBBJsqeGOEYFJQXXj%2BJ7fT0ObqRk5KsedH9VTY37itkwgmzWDNIrze1T%2Br6xNlsZ6MlfulH1hbT0EIeoVHukcAI6Tf0YGC0f3t677HavpkJ0R%2FRl7eL9p0iYU7S2wt%2BmIPnsfdvOIIXa5bhAAcWBi%2BQmbNNX0P9SKXWChUN7ZQ7HFR3XquxPFZhY0JpwFHTZLpw6cmoI3cXB9NUj%2F9M%2BaqS9UMI8CQQl6od5YCPr0JymwgQc%2FkrO4PJ47nI4MGVSjWXmXMeJbY9F8BA0R71%2FEhWLYjnwleYJFomBkB3wZ8Zcpi5c6IHVH6PJwOpUNZh5DTSAxYuLp%2F%2FRDKSuRqBWtnSIizx0%2FiYVVxK9avupj5UuN%2B9SUvfBTh99Y76scuw3jDbCSM4R9ZMLSvfAmzX9PrZuf62%2Bgwoai0vgY6pgEph64RIBJ8YDE6jKgQSlKV%2B%2BXkiYTt5KoYw43YLiALm5SY6%2Fo7IF%2BvIbPdxkHhQ1VRea2r5aHRdCI2sp31LXgtuMAvJM%2FiPEciJHJZpFoKLgkwMijO5zkh80nAPux3uarMCWgNLxoxmjOZzhFT78AsP4LswYKaAWsbCjI%2BqoxuCClaPf5JQTfSMmU19kjtLjWqEDr80j5zgKarRLyf%2BR6ooLefXqGc&X-Amz-Signature=5e79a3b4b7316d098a1da79e47c6b9f5ccae2fda97cb9e5a0945b4cb4a8dff12&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SE7EDF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFHHDJBGu%2BqSLNm0%2FX%2BkB%2FIckdmsx2xxFxpv9qbSCFsQAiBuj0UZUU4Js1uu%2F%2FjazpI3%2FE%2FbaEgA0ka9R%2F%2F7DFUBTyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM64viMXAXB11C5cNzKtwDTD13ZGzGNjragNXDd5GiRH6shB%2B0uSDIMJNvfcl2RXFxNTMhdbAVNIwdzzJYCgBFJ3qEPSsVAI2WHpeB8WMQwUBJlXtsMXFZGi1DwShjoNB%2F2RDa78HqoSC0%2Fjzg1TVPJINBbDkD%2F8ZD8jaE353A1k6XSgzTsixx7WUcBJ9pWSv4p8A7Y0xlcVAsdA0tU4MJevA62nlSOU%2BoLJHrm3MVNHgH9SvVi7EBBJsqeGOEYFJQXXj%2BJ7fT0ObqRk5KsedH9VTY37itkwgmzWDNIrze1T%2Br6xNlsZ6MlfulH1hbT0EIeoVHukcAI6Tf0YGC0f3t677HavpkJ0R%2FRl7eL9p0iYU7S2wt%2BmIPnsfdvOIIXa5bhAAcWBi%2BQmbNNX0P9SKXWChUN7ZQ7HFR3XquxPFZhY0JpwFHTZLpw6cmoI3cXB9NUj%2F9M%2BaqS9UMI8CQQl6od5YCPr0JymwgQc%2FkrO4PJ47nI4MGVSjWXmXMeJbY9F8BA0R71%2FEhWLYjnwleYJFomBkB3wZ8Zcpi5c6IHVH6PJwOpUNZh5DTSAxYuLp%2F%2FRDKSuRqBWtnSIizx0%2FiYVVxK9avupj5UuN%2B9SUvfBTh99Y76scuw3jDbCSM4R9ZMLSvfAmzX9PrZuf62%2Bgwoai0vgY6pgEph64RIBJ8YDE6jKgQSlKV%2B%2BXkiYTt5KoYw43YLiALm5SY6%2Fo7IF%2BvIbPdxkHhQ1VRea2r5aHRdCI2sp31LXgtuMAvJM%2FiPEciJHJZpFoKLgkwMijO5zkh80nAPux3uarMCWgNLxoxmjOZzhFT78AsP4LswYKaAWsbCjI%2BqoxuCClaPf5JQTfSMmU19kjtLjWqEDr80j5zgKarRLyf%2BR6ooLefXqGc&X-Amz-Signature=d91f56c5d2b540434aebb9720376acdea45ae90a608ae3de17156bf357c17484&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SE7EDF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFHHDJBGu%2BqSLNm0%2FX%2BkB%2FIckdmsx2xxFxpv9qbSCFsQAiBuj0UZUU4Js1uu%2F%2FjazpI3%2FE%2FbaEgA0ka9R%2F%2F7DFUBTyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM64viMXAXB11C5cNzKtwDTD13ZGzGNjragNXDd5GiRH6shB%2B0uSDIMJNvfcl2RXFxNTMhdbAVNIwdzzJYCgBFJ3qEPSsVAI2WHpeB8WMQwUBJlXtsMXFZGi1DwShjoNB%2F2RDa78HqoSC0%2Fjzg1TVPJINBbDkD%2F8ZD8jaE353A1k6XSgzTsixx7WUcBJ9pWSv4p8A7Y0xlcVAsdA0tU4MJevA62nlSOU%2BoLJHrm3MVNHgH9SvVi7EBBJsqeGOEYFJQXXj%2BJ7fT0ObqRk5KsedH9VTY37itkwgmzWDNIrze1T%2Br6xNlsZ6MlfulH1hbT0EIeoVHukcAI6Tf0YGC0f3t677HavpkJ0R%2FRl7eL9p0iYU7S2wt%2BmIPnsfdvOIIXa5bhAAcWBi%2BQmbNNX0P9SKXWChUN7ZQ7HFR3XquxPFZhY0JpwFHTZLpw6cmoI3cXB9NUj%2F9M%2BaqS9UMI8CQQl6od5YCPr0JymwgQc%2FkrO4PJ47nI4MGVSjWXmXMeJbY9F8BA0R71%2FEhWLYjnwleYJFomBkB3wZ8Zcpi5c6IHVH6PJwOpUNZh5DTSAxYuLp%2F%2FRDKSuRqBWtnSIizx0%2FiYVVxK9avupj5UuN%2B9SUvfBTh99Y76scuw3jDbCSM4R9ZMLSvfAmzX9PrZuf62%2Bgwoai0vgY6pgEph64RIBJ8YDE6jKgQSlKV%2B%2BXkiYTt5KoYw43YLiALm5SY6%2Fo7IF%2BvIbPdxkHhQ1VRea2r5aHRdCI2sp31LXgtuMAvJM%2FiPEciJHJZpFoKLgkwMijO5zkh80nAPux3uarMCWgNLxoxmjOZzhFT78AsP4LswYKaAWsbCjI%2BqoxuCClaPf5JQTfSMmU19kjtLjWqEDr80j5zgKarRLyf%2BR6ooLefXqGc&X-Amz-Signature=1a922322393dd93c1d1ef1dcb2e7ac9a124644b83a010fd439382a3992aa5ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SE7EDF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFHHDJBGu%2BqSLNm0%2FX%2BkB%2FIckdmsx2xxFxpv9qbSCFsQAiBuj0UZUU4Js1uu%2F%2FjazpI3%2FE%2FbaEgA0ka9R%2F%2F7DFUBTyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM64viMXAXB11C5cNzKtwDTD13ZGzGNjragNXDd5GiRH6shB%2B0uSDIMJNvfcl2RXFxNTMhdbAVNIwdzzJYCgBFJ3qEPSsVAI2WHpeB8WMQwUBJlXtsMXFZGi1DwShjoNB%2F2RDa78HqoSC0%2Fjzg1TVPJINBbDkD%2F8ZD8jaE353A1k6XSgzTsixx7WUcBJ9pWSv4p8A7Y0xlcVAsdA0tU4MJevA62nlSOU%2BoLJHrm3MVNHgH9SvVi7EBBJsqeGOEYFJQXXj%2BJ7fT0ObqRk5KsedH9VTY37itkwgmzWDNIrze1T%2Br6xNlsZ6MlfulH1hbT0EIeoVHukcAI6Tf0YGC0f3t677HavpkJ0R%2FRl7eL9p0iYU7S2wt%2BmIPnsfdvOIIXa5bhAAcWBi%2BQmbNNX0P9SKXWChUN7ZQ7HFR3XquxPFZhY0JpwFHTZLpw6cmoI3cXB9NUj%2F9M%2BaqS9UMI8CQQl6od5YCPr0JymwgQc%2FkrO4PJ47nI4MGVSjWXmXMeJbY9F8BA0R71%2FEhWLYjnwleYJFomBkB3wZ8Zcpi5c6IHVH6PJwOpUNZh5DTSAxYuLp%2F%2FRDKSuRqBWtnSIizx0%2FiYVVxK9avupj5UuN%2B9SUvfBTh99Y76scuw3jDbCSM4R9ZMLSvfAmzX9PrZuf62%2Bgwoai0vgY6pgEph64RIBJ8YDE6jKgQSlKV%2B%2BXkiYTt5KoYw43YLiALm5SY6%2Fo7IF%2BvIbPdxkHhQ1VRea2r5aHRdCI2sp31LXgtuMAvJM%2FiPEciJHJZpFoKLgkwMijO5zkh80nAPux3uarMCWgNLxoxmjOZzhFT78AsP4LswYKaAWsbCjI%2BqoxuCClaPf5JQTfSMmU19kjtLjWqEDr80j5zgKarRLyf%2BR6ooLefXqGc&X-Amz-Signature=4c4dc460e36720be3ab29b596a0f1263442756fc4498bbd19624ed2ebda641d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SE7EDF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFHHDJBGu%2BqSLNm0%2FX%2BkB%2FIckdmsx2xxFxpv9qbSCFsQAiBuj0UZUU4Js1uu%2F%2FjazpI3%2FE%2FbaEgA0ka9R%2F%2F7DFUBTyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM64viMXAXB11C5cNzKtwDTD13ZGzGNjragNXDd5GiRH6shB%2B0uSDIMJNvfcl2RXFxNTMhdbAVNIwdzzJYCgBFJ3qEPSsVAI2WHpeB8WMQwUBJlXtsMXFZGi1DwShjoNB%2F2RDa78HqoSC0%2Fjzg1TVPJINBbDkD%2F8ZD8jaE353A1k6XSgzTsixx7WUcBJ9pWSv4p8A7Y0xlcVAsdA0tU4MJevA62nlSOU%2BoLJHrm3MVNHgH9SvVi7EBBJsqeGOEYFJQXXj%2BJ7fT0ObqRk5KsedH9VTY37itkwgmzWDNIrze1T%2Br6xNlsZ6MlfulH1hbT0EIeoVHukcAI6Tf0YGC0f3t677HavpkJ0R%2FRl7eL9p0iYU7S2wt%2BmIPnsfdvOIIXa5bhAAcWBi%2BQmbNNX0P9SKXWChUN7ZQ7HFR3XquxPFZhY0JpwFHTZLpw6cmoI3cXB9NUj%2F9M%2BaqS9UMI8CQQl6od5YCPr0JymwgQc%2FkrO4PJ47nI4MGVSjWXmXMeJbY9F8BA0R71%2FEhWLYjnwleYJFomBkB3wZ8Zcpi5c6IHVH6PJwOpUNZh5DTSAxYuLp%2F%2FRDKSuRqBWtnSIizx0%2FiYVVxK9avupj5UuN%2B9SUvfBTh99Y76scuw3jDbCSM4R9ZMLSvfAmzX9PrZuf62%2Bgwoai0vgY6pgEph64RIBJ8YDE6jKgQSlKV%2B%2BXkiYTt5KoYw43YLiALm5SY6%2Fo7IF%2BvIbPdxkHhQ1VRea2r5aHRdCI2sp31LXgtuMAvJM%2FiPEciJHJZpFoKLgkwMijO5zkh80nAPux3uarMCWgNLxoxmjOZzhFT78AsP4LswYKaAWsbCjI%2BqoxuCClaPf5JQTfSMmU19kjtLjWqEDr80j5zgKarRLyf%2BR6ooLefXqGc&X-Amz-Signature=f0e1f028060c5cb13a24914365b6ae94858b525d1f0e57453cbf0112c8fdbbec&X-Amz-SignedHeaders=host&x-id=GetObject)
