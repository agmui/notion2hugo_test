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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMARCAL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiw%2BDP2oQ0nLnx2lG%2Bx%2BbhdgFcpWiSghqAphGfAzK07QIhAN4QZRFeB%2FOQnKSmSLP4jk5jW0AZFhN%2Bfs0kBb0Z3I1OKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCb1v3zn1JgEPDdSkq3AMvEJykFbJN4SvnFgRA%2FpIil9vIK2bb9y6onYIPl90hybb8fFkCQHAYEPly%2BhB%2Fq9l7VlHtS2o0EgvkV%2F1%2BY8ozLvxh06d%2FiiZrw8xXsIue%2BRk44F4P0GTlbuM58DYVvR7xFkMUx3MQBJ%2FQNszE8gU0wgZNLosvROCy9a7hfUuUIfHphUuwlnaVaz1bjETbnu8YzxtX5mbQRaNs4rcG4ilNF6MuyzGNLswhcQoRpZVWWUYyxgWYTtQc%2F0iSJgNwv73UvbzYtCx7%2FPWrzO5c53%2Boe1Uqgb1b%2FR1fKpVBHJ4XRqw2LgoBnGCOEWqAm%2BvVjgVyQVDbSWNL1i0qlh6RP9sTPv311udDcxEnDYehwPtjzpsGSpGRc%2Bi6ytj8W%2FnsW19pqUWmiBRMI%2BSqs%2F1KDfp46uPnMjKqorVWHh%2F5uoNvvaEVKeZCZoHMHVMV0XDmpLTjHSFWA9QnpObXMb3wwEjETaVzmhbnGP7TwQUydabk7LoIRh8xzrkzq6WnWMCYtuTwmFyYvKyDlKz6Fhz13ZrzzJisJ%2BFoeJcFMGDYlqUijtgdtrLKEwpGOUcgiAT7kOKQNLkZjkZFShBdb3MIn6XMt7EDIjChq4LrtfIbkOpFckbqyeBmWWG1%2Ftib3DCngYTDBjqkAQ6f7AKraDM%2BEcy9R%2FugyLbCSHD3OlG4uln%2B5iJqDmGViR2fGklHwVjAZe3OHEXQA6Bb1XhM%2F5OxD4AK6HmpkxNJ9ilAdkcvUCjcEtLk21gFoScPsF7yGewsdNENfu8S8GTX49RevtBwNaavixyONjqruyQuPhnX36kypu9hRpj%2B92BvJ2Z8u0hlCcKBJbydouvQJdJs92dKQfVtEuGRPXhhcj3k&X-Amz-Signature=d70f9bd10a29f96e41553309de1d0a322311bf3ee82da8d632598b0e638076f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMARCAL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiw%2BDP2oQ0nLnx2lG%2Bx%2BbhdgFcpWiSghqAphGfAzK07QIhAN4QZRFeB%2FOQnKSmSLP4jk5jW0AZFhN%2Bfs0kBb0Z3I1OKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCb1v3zn1JgEPDdSkq3AMvEJykFbJN4SvnFgRA%2FpIil9vIK2bb9y6onYIPl90hybb8fFkCQHAYEPly%2BhB%2Fq9l7VlHtS2o0EgvkV%2F1%2BY8ozLvxh06d%2FiiZrw8xXsIue%2BRk44F4P0GTlbuM58DYVvR7xFkMUx3MQBJ%2FQNszE8gU0wgZNLosvROCy9a7hfUuUIfHphUuwlnaVaz1bjETbnu8YzxtX5mbQRaNs4rcG4ilNF6MuyzGNLswhcQoRpZVWWUYyxgWYTtQc%2F0iSJgNwv73UvbzYtCx7%2FPWrzO5c53%2Boe1Uqgb1b%2FR1fKpVBHJ4XRqw2LgoBnGCOEWqAm%2BvVjgVyQVDbSWNL1i0qlh6RP9sTPv311udDcxEnDYehwPtjzpsGSpGRc%2Bi6ytj8W%2FnsW19pqUWmiBRMI%2BSqs%2F1KDfp46uPnMjKqorVWHh%2F5uoNvvaEVKeZCZoHMHVMV0XDmpLTjHSFWA9QnpObXMb3wwEjETaVzmhbnGP7TwQUydabk7LoIRh8xzrkzq6WnWMCYtuTwmFyYvKyDlKz6Fhz13ZrzzJisJ%2BFoeJcFMGDYlqUijtgdtrLKEwpGOUcgiAT7kOKQNLkZjkZFShBdb3MIn6XMt7EDIjChq4LrtfIbkOpFckbqyeBmWWG1%2Ftib3DCngYTDBjqkAQ6f7AKraDM%2BEcy9R%2FugyLbCSHD3OlG4uln%2B5iJqDmGViR2fGklHwVjAZe3OHEXQA6Bb1XhM%2F5OxD4AK6HmpkxNJ9ilAdkcvUCjcEtLk21gFoScPsF7yGewsdNENfu8S8GTX49RevtBwNaavixyONjqruyQuPhnX36kypu9hRpj%2B92BvJ2Z8u0hlCcKBJbydouvQJdJs92dKQfVtEuGRPXhhcj3k&X-Amz-Signature=efb178e735841971e22cf575a9de2a27ede1b580136d4a5f7781e7dd8634f28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMARCAL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiw%2BDP2oQ0nLnx2lG%2Bx%2BbhdgFcpWiSghqAphGfAzK07QIhAN4QZRFeB%2FOQnKSmSLP4jk5jW0AZFhN%2Bfs0kBb0Z3I1OKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCb1v3zn1JgEPDdSkq3AMvEJykFbJN4SvnFgRA%2FpIil9vIK2bb9y6onYIPl90hybb8fFkCQHAYEPly%2BhB%2Fq9l7VlHtS2o0EgvkV%2F1%2BY8ozLvxh06d%2FiiZrw8xXsIue%2BRk44F4P0GTlbuM58DYVvR7xFkMUx3MQBJ%2FQNszE8gU0wgZNLosvROCy9a7hfUuUIfHphUuwlnaVaz1bjETbnu8YzxtX5mbQRaNs4rcG4ilNF6MuyzGNLswhcQoRpZVWWUYyxgWYTtQc%2F0iSJgNwv73UvbzYtCx7%2FPWrzO5c53%2Boe1Uqgb1b%2FR1fKpVBHJ4XRqw2LgoBnGCOEWqAm%2BvVjgVyQVDbSWNL1i0qlh6RP9sTPv311udDcxEnDYehwPtjzpsGSpGRc%2Bi6ytj8W%2FnsW19pqUWmiBRMI%2BSqs%2F1KDfp46uPnMjKqorVWHh%2F5uoNvvaEVKeZCZoHMHVMV0XDmpLTjHSFWA9QnpObXMb3wwEjETaVzmhbnGP7TwQUydabk7LoIRh8xzrkzq6WnWMCYtuTwmFyYvKyDlKz6Fhz13ZrzzJisJ%2BFoeJcFMGDYlqUijtgdtrLKEwpGOUcgiAT7kOKQNLkZjkZFShBdb3MIn6XMt7EDIjChq4LrtfIbkOpFckbqyeBmWWG1%2Ftib3DCngYTDBjqkAQ6f7AKraDM%2BEcy9R%2FugyLbCSHD3OlG4uln%2B5iJqDmGViR2fGklHwVjAZe3OHEXQA6Bb1XhM%2F5OxD4AK6HmpkxNJ9ilAdkcvUCjcEtLk21gFoScPsF7yGewsdNENfu8S8GTX49RevtBwNaavixyONjqruyQuPhnX36kypu9hRpj%2B92BvJ2Z8u0hlCcKBJbydouvQJdJs92dKQfVtEuGRPXhhcj3k&X-Amz-Signature=250150916ca9e24f7032fb9a5c8152e8a04b3fd7cc7c142eac3bf97af7413766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMARCAL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiw%2BDP2oQ0nLnx2lG%2Bx%2BbhdgFcpWiSghqAphGfAzK07QIhAN4QZRFeB%2FOQnKSmSLP4jk5jW0AZFhN%2Bfs0kBb0Z3I1OKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCb1v3zn1JgEPDdSkq3AMvEJykFbJN4SvnFgRA%2FpIil9vIK2bb9y6onYIPl90hybb8fFkCQHAYEPly%2BhB%2Fq9l7VlHtS2o0EgvkV%2F1%2BY8ozLvxh06d%2FiiZrw8xXsIue%2BRk44F4P0GTlbuM58DYVvR7xFkMUx3MQBJ%2FQNszE8gU0wgZNLosvROCy9a7hfUuUIfHphUuwlnaVaz1bjETbnu8YzxtX5mbQRaNs4rcG4ilNF6MuyzGNLswhcQoRpZVWWUYyxgWYTtQc%2F0iSJgNwv73UvbzYtCx7%2FPWrzO5c53%2Boe1Uqgb1b%2FR1fKpVBHJ4XRqw2LgoBnGCOEWqAm%2BvVjgVyQVDbSWNL1i0qlh6RP9sTPv311udDcxEnDYehwPtjzpsGSpGRc%2Bi6ytj8W%2FnsW19pqUWmiBRMI%2BSqs%2F1KDfp46uPnMjKqorVWHh%2F5uoNvvaEVKeZCZoHMHVMV0XDmpLTjHSFWA9QnpObXMb3wwEjETaVzmhbnGP7TwQUydabk7LoIRh8xzrkzq6WnWMCYtuTwmFyYvKyDlKz6Fhz13ZrzzJisJ%2BFoeJcFMGDYlqUijtgdtrLKEwpGOUcgiAT7kOKQNLkZjkZFShBdb3MIn6XMt7EDIjChq4LrtfIbkOpFckbqyeBmWWG1%2Ftib3DCngYTDBjqkAQ6f7AKraDM%2BEcy9R%2FugyLbCSHD3OlG4uln%2B5iJqDmGViR2fGklHwVjAZe3OHEXQA6Bb1XhM%2F5OxD4AK6HmpkxNJ9ilAdkcvUCjcEtLk21gFoScPsF7yGewsdNENfu8S8GTX49RevtBwNaavixyONjqruyQuPhnX36kypu9hRpj%2B92BvJ2Z8u0hlCcKBJbydouvQJdJs92dKQfVtEuGRPXhhcj3k&X-Amz-Signature=87e143feba1f3032e042895de6a979fc4d63104e14e7a5e7c2897371f8b2a10b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMARCAL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiw%2BDP2oQ0nLnx2lG%2Bx%2BbhdgFcpWiSghqAphGfAzK07QIhAN4QZRFeB%2FOQnKSmSLP4jk5jW0AZFhN%2Bfs0kBb0Z3I1OKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCb1v3zn1JgEPDdSkq3AMvEJykFbJN4SvnFgRA%2FpIil9vIK2bb9y6onYIPl90hybb8fFkCQHAYEPly%2BhB%2Fq9l7VlHtS2o0EgvkV%2F1%2BY8ozLvxh06d%2FiiZrw8xXsIue%2BRk44F4P0GTlbuM58DYVvR7xFkMUx3MQBJ%2FQNszE8gU0wgZNLosvROCy9a7hfUuUIfHphUuwlnaVaz1bjETbnu8YzxtX5mbQRaNs4rcG4ilNF6MuyzGNLswhcQoRpZVWWUYyxgWYTtQc%2F0iSJgNwv73UvbzYtCx7%2FPWrzO5c53%2Boe1Uqgb1b%2FR1fKpVBHJ4XRqw2LgoBnGCOEWqAm%2BvVjgVyQVDbSWNL1i0qlh6RP9sTPv311udDcxEnDYehwPtjzpsGSpGRc%2Bi6ytj8W%2FnsW19pqUWmiBRMI%2BSqs%2F1KDfp46uPnMjKqorVWHh%2F5uoNvvaEVKeZCZoHMHVMV0XDmpLTjHSFWA9QnpObXMb3wwEjETaVzmhbnGP7TwQUydabk7LoIRh8xzrkzq6WnWMCYtuTwmFyYvKyDlKz6Fhz13ZrzzJisJ%2BFoeJcFMGDYlqUijtgdtrLKEwpGOUcgiAT7kOKQNLkZjkZFShBdb3MIn6XMt7EDIjChq4LrtfIbkOpFckbqyeBmWWG1%2Ftib3DCngYTDBjqkAQ6f7AKraDM%2BEcy9R%2FugyLbCSHD3OlG4uln%2B5iJqDmGViR2fGklHwVjAZe3OHEXQA6Bb1XhM%2F5OxD4AK6HmpkxNJ9ilAdkcvUCjcEtLk21gFoScPsF7yGewsdNENfu8S8GTX49RevtBwNaavixyONjqruyQuPhnX36kypu9hRpj%2B92BvJ2Z8u0hlCcKBJbydouvQJdJs92dKQfVtEuGRPXhhcj3k&X-Amz-Signature=473ddf61c91a9c2657d2906eac06584aebfc8f8e81d8bc2e0ca69e6826c2d733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMARCAL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiw%2BDP2oQ0nLnx2lG%2Bx%2BbhdgFcpWiSghqAphGfAzK07QIhAN4QZRFeB%2FOQnKSmSLP4jk5jW0AZFhN%2Bfs0kBb0Z3I1OKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCb1v3zn1JgEPDdSkq3AMvEJykFbJN4SvnFgRA%2FpIil9vIK2bb9y6onYIPl90hybb8fFkCQHAYEPly%2BhB%2Fq9l7VlHtS2o0EgvkV%2F1%2BY8ozLvxh06d%2FiiZrw8xXsIue%2BRk44F4P0GTlbuM58DYVvR7xFkMUx3MQBJ%2FQNszE8gU0wgZNLosvROCy9a7hfUuUIfHphUuwlnaVaz1bjETbnu8YzxtX5mbQRaNs4rcG4ilNF6MuyzGNLswhcQoRpZVWWUYyxgWYTtQc%2F0iSJgNwv73UvbzYtCx7%2FPWrzO5c53%2Boe1Uqgb1b%2FR1fKpVBHJ4XRqw2LgoBnGCOEWqAm%2BvVjgVyQVDbSWNL1i0qlh6RP9sTPv311udDcxEnDYehwPtjzpsGSpGRc%2Bi6ytj8W%2FnsW19pqUWmiBRMI%2BSqs%2F1KDfp46uPnMjKqorVWHh%2F5uoNvvaEVKeZCZoHMHVMV0XDmpLTjHSFWA9QnpObXMb3wwEjETaVzmhbnGP7TwQUydabk7LoIRh8xzrkzq6WnWMCYtuTwmFyYvKyDlKz6Fhz13ZrzzJisJ%2BFoeJcFMGDYlqUijtgdtrLKEwpGOUcgiAT7kOKQNLkZjkZFShBdb3MIn6XMt7EDIjChq4LrtfIbkOpFckbqyeBmWWG1%2Ftib3DCngYTDBjqkAQ6f7AKraDM%2BEcy9R%2FugyLbCSHD3OlG4uln%2B5iJqDmGViR2fGklHwVjAZe3OHEXQA6Bb1XhM%2F5OxD4AK6HmpkxNJ9ilAdkcvUCjcEtLk21gFoScPsF7yGewsdNENfu8S8GTX49RevtBwNaavixyONjqruyQuPhnX36kypu9hRpj%2B92BvJ2Z8u0hlCcKBJbydouvQJdJs92dKQfVtEuGRPXhhcj3k&X-Amz-Signature=04f31a45573183f9dabe3ea6d9b88bc6080717189f214bd473cea731eaf6e5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
