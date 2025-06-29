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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLJIGMC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOSOlzUt0C99YpO%2FZ3OwlYShr1pGnthsrNVlRyqUm%2BAIhAM%2FaMxg54jixkYkZcJQUyDXLtUlN4qOl7xzU6OP2X75bKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNR0iomv3Umh2jg60q3AN2qNbeDpnjbxxZ5Zn%2FwPjBlq7HHEKOfxOdzbPgiQ0%2BAFJsCJs%2BX51hPqTlZdHESAQNokBL6ocUjGpqyNJFgHvGaHBDLTOZ9J2NqlsIbuqk6ln5BzDWS74AxWflGtG79RklZs76AjbXDeMTUHKLZrHUniqzackvuiJxalP5rUxGt6FzuEq7VIZozPAY06jWKpYjR0%2BBS3HjJEDV2ziCDyq%2BWv4G0mrx5wbHOczpsCIcd9HN%2BW0DCeTHYj5cGw6Ij%2BMHlgxX%2B8ll1gWn62lQ9ez%2FkDCJGfI4wB8vnv8Qhrq4XhdFn%2Bp5uclHtk%2FCC%2BVKCMvAy%2B%2BGsHqXrbkR4NL9viLkA0szubAxj1dWgHWswCGEWVicthc2Sn%2BQmyiz82sg6gOdEyijlFhZ2eFXvlM10U8cOCjO2rdGW4eWRPM%2FfV3PHbDIY1NGBl%2Bqq1dJ8yeF3b4r6%2BlbVWL1tCrdw%2F%2FueoAKKlcTQ%2BcF%2FvmTRCwZVhSaRg7yg9e9zXHXnadIYnZ07AARKVMY7HCMoZik%2BICg%2F9KPWW%2F24xWG1MnBcAk4s5iyPzeL%2FGZGJ0CI2AnImUSI633CD5b93TQbyFLtnLfesLzj%2FbodYL2R5v3O2yfsFmW0%2FnWCaikW8DRea%2BDXCDCLr4PDBjqkAT%2F8IGFRvj3rWvQNvwiKNx%2BaiHvgFbPsKKq8oTnYcNvDJqSRfI02UO3duyCAdZznEHOwnZdoLIACWBFjrQoPGaZ2TtDTpfPq50Et08MMoKqB8jYAUfr2xgj0ioLzIh%2BzwMHHIhut8PpwLL9EFsXqPazAI7apAxv3MBHwWtGUy7EvGVlzhsFpqJtBusTYcNMFqpaecxf2Y7CXbe8QYe5OnoMzFOeb&X-Amz-Signature=ebc1015220913a747bba544dbfd21ad28d3e35d4d917cd39fa2b6f0e045583b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLJIGMC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOSOlzUt0C99YpO%2FZ3OwlYShr1pGnthsrNVlRyqUm%2BAIhAM%2FaMxg54jixkYkZcJQUyDXLtUlN4qOl7xzU6OP2X75bKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNR0iomv3Umh2jg60q3AN2qNbeDpnjbxxZ5Zn%2FwPjBlq7HHEKOfxOdzbPgiQ0%2BAFJsCJs%2BX51hPqTlZdHESAQNokBL6ocUjGpqyNJFgHvGaHBDLTOZ9J2NqlsIbuqk6ln5BzDWS74AxWflGtG79RklZs76AjbXDeMTUHKLZrHUniqzackvuiJxalP5rUxGt6FzuEq7VIZozPAY06jWKpYjR0%2BBS3HjJEDV2ziCDyq%2BWv4G0mrx5wbHOczpsCIcd9HN%2BW0DCeTHYj5cGw6Ij%2BMHlgxX%2B8ll1gWn62lQ9ez%2FkDCJGfI4wB8vnv8Qhrq4XhdFn%2Bp5uclHtk%2FCC%2BVKCMvAy%2B%2BGsHqXrbkR4NL9viLkA0szubAxj1dWgHWswCGEWVicthc2Sn%2BQmyiz82sg6gOdEyijlFhZ2eFXvlM10U8cOCjO2rdGW4eWRPM%2FfV3PHbDIY1NGBl%2Bqq1dJ8yeF3b4r6%2BlbVWL1tCrdw%2F%2FueoAKKlcTQ%2BcF%2FvmTRCwZVhSaRg7yg9e9zXHXnadIYnZ07AARKVMY7HCMoZik%2BICg%2F9KPWW%2F24xWG1MnBcAk4s5iyPzeL%2FGZGJ0CI2AnImUSI633CD5b93TQbyFLtnLfesLzj%2FbodYL2R5v3O2yfsFmW0%2FnWCaikW8DRea%2BDXCDCLr4PDBjqkAT%2F8IGFRvj3rWvQNvwiKNx%2BaiHvgFbPsKKq8oTnYcNvDJqSRfI02UO3duyCAdZznEHOwnZdoLIACWBFjrQoPGaZ2TtDTpfPq50Et08MMoKqB8jYAUfr2xgj0ioLzIh%2BzwMHHIhut8PpwLL9EFsXqPazAI7apAxv3MBHwWtGUy7EvGVlzhsFpqJtBusTYcNMFqpaecxf2Y7CXbe8QYe5OnoMzFOeb&X-Amz-Signature=696756a60d05919f3bb7e1f1cb0ef2f2ea0eb2ed756a0df483c4cea71735addb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLJIGMC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOSOlzUt0C99YpO%2FZ3OwlYShr1pGnthsrNVlRyqUm%2BAIhAM%2FaMxg54jixkYkZcJQUyDXLtUlN4qOl7xzU6OP2X75bKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNR0iomv3Umh2jg60q3AN2qNbeDpnjbxxZ5Zn%2FwPjBlq7HHEKOfxOdzbPgiQ0%2BAFJsCJs%2BX51hPqTlZdHESAQNokBL6ocUjGpqyNJFgHvGaHBDLTOZ9J2NqlsIbuqk6ln5BzDWS74AxWflGtG79RklZs76AjbXDeMTUHKLZrHUniqzackvuiJxalP5rUxGt6FzuEq7VIZozPAY06jWKpYjR0%2BBS3HjJEDV2ziCDyq%2BWv4G0mrx5wbHOczpsCIcd9HN%2BW0DCeTHYj5cGw6Ij%2BMHlgxX%2B8ll1gWn62lQ9ez%2FkDCJGfI4wB8vnv8Qhrq4XhdFn%2Bp5uclHtk%2FCC%2BVKCMvAy%2B%2BGsHqXrbkR4NL9viLkA0szubAxj1dWgHWswCGEWVicthc2Sn%2BQmyiz82sg6gOdEyijlFhZ2eFXvlM10U8cOCjO2rdGW4eWRPM%2FfV3PHbDIY1NGBl%2Bqq1dJ8yeF3b4r6%2BlbVWL1tCrdw%2F%2FueoAKKlcTQ%2BcF%2FvmTRCwZVhSaRg7yg9e9zXHXnadIYnZ07AARKVMY7HCMoZik%2BICg%2F9KPWW%2F24xWG1MnBcAk4s5iyPzeL%2FGZGJ0CI2AnImUSI633CD5b93TQbyFLtnLfesLzj%2FbodYL2R5v3O2yfsFmW0%2FnWCaikW8DRea%2BDXCDCLr4PDBjqkAT%2F8IGFRvj3rWvQNvwiKNx%2BaiHvgFbPsKKq8oTnYcNvDJqSRfI02UO3duyCAdZznEHOwnZdoLIACWBFjrQoPGaZ2TtDTpfPq50Et08MMoKqB8jYAUfr2xgj0ioLzIh%2BzwMHHIhut8PpwLL9EFsXqPazAI7apAxv3MBHwWtGUy7EvGVlzhsFpqJtBusTYcNMFqpaecxf2Y7CXbe8QYe5OnoMzFOeb&X-Amz-Signature=19f244404fe3f380d69207a912674515824242d6bc9bdc55a33df023ea142082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLJIGMC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOSOlzUt0C99YpO%2FZ3OwlYShr1pGnthsrNVlRyqUm%2BAIhAM%2FaMxg54jixkYkZcJQUyDXLtUlN4qOl7xzU6OP2X75bKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNR0iomv3Umh2jg60q3AN2qNbeDpnjbxxZ5Zn%2FwPjBlq7HHEKOfxOdzbPgiQ0%2BAFJsCJs%2BX51hPqTlZdHESAQNokBL6ocUjGpqyNJFgHvGaHBDLTOZ9J2NqlsIbuqk6ln5BzDWS74AxWflGtG79RklZs76AjbXDeMTUHKLZrHUniqzackvuiJxalP5rUxGt6FzuEq7VIZozPAY06jWKpYjR0%2BBS3HjJEDV2ziCDyq%2BWv4G0mrx5wbHOczpsCIcd9HN%2BW0DCeTHYj5cGw6Ij%2BMHlgxX%2B8ll1gWn62lQ9ez%2FkDCJGfI4wB8vnv8Qhrq4XhdFn%2Bp5uclHtk%2FCC%2BVKCMvAy%2B%2BGsHqXrbkR4NL9viLkA0szubAxj1dWgHWswCGEWVicthc2Sn%2BQmyiz82sg6gOdEyijlFhZ2eFXvlM10U8cOCjO2rdGW4eWRPM%2FfV3PHbDIY1NGBl%2Bqq1dJ8yeF3b4r6%2BlbVWL1tCrdw%2F%2FueoAKKlcTQ%2BcF%2FvmTRCwZVhSaRg7yg9e9zXHXnadIYnZ07AARKVMY7HCMoZik%2BICg%2F9KPWW%2F24xWG1MnBcAk4s5iyPzeL%2FGZGJ0CI2AnImUSI633CD5b93TQbyFLtnLfesLzj%2FbodYL2R5v3O2yfsFmW0%2FnWCaikW8DRea%2BDXCDCLr4PDBjqkAT%2F8IGFRvj3rWvQNvwiKNx%2BaiHvgFbPsKKq8oTnYcNvDJqSRfI02UO3duyCAdZznEHOwnZdoLIACWBFjrQoPGaZ2TtDTpfPq50Et08MMoKqB8jYAUfr2xgj0ioLzIh%2BzwMHHIhut8PpwLL9EFsXqPazAI7apAxv3MBHwWtGUy7EvGVlzhsFpqJtBusTYcNMFqpaecxf2Y7CXbe8QYe5OnoMzFOeb&X-Amz-Signature=95340412d26c9dfb943b5b81a8340e82f99a554cdd85a649e7b6b2481a8a9e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLJIGMC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOSOlzUt0C99YpO%2FZ3OwlYShr1pGnthsrNVlRyqUm%2BAIhAM%2FaMxg54jixkYkZcJQUyDXLtUlN4qOl7xzU6OP2X75bKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNR0iomv3Umh2jg60q3AN2qNbeDpnjbxxZ5Zn%2FwPjBlq7HHEKOfxOdzbPgiQ0%2BAFJsCJs%2BX51hPqTlZdHESAQNokBL6ocUjGpqyNJFgHvGaHBDLTOZ9J2NqlsIbuqk6ln5BzDWS74AxWflGtG79RklZs76AjbXDeMTUHKLZrHUniqzackvuiJxalP5rUxGt6FzuEq7VIZozPAY06jWKpYjR0%2BBS3HjJEDV2ziCDyq%2BWv4G0mrx5wbHOczpsCIcd9HN%2BW0DCeTHYj5cGw6Ij%2BMHlgxX%2B8ll1gWn62lQ9ez%2FkDCJGfI4wB8vnv8Qhrq4XhdFn%2Bp5uclHtk%2FCC%2BVKCMvAy%2B%2BGsHqXrbkR4NL9viLkA0szubAxj1dWgHWswCGEWVicthc2Sn%2BQmyiz82sg6gOdEyijlFhZ2eFXvlM10U8cOCjO2rdGW4eWRPM%2FfV3PHbDIY1NGBl%2Bqq1dJ8yeF3b4r6%2BlbVWL1tCrdw%2F%2FueoAKKlcTQ%2BcF%2FvmTRCwZVhSaRg7yg9e9zXHXnadIYnZ07AARKVMY7HCMoZik%2BICg%2F9KPWW%2F24xWG1MnBcAk4s5iyPzeL%2FGZGJ0CI2AnImUSI633CD5b93TQbyFLtnLfesLzj%2FbodYL2R5v3O2yfsFmW0%2FnWCaikW8DRea%2BDXCDCLr4PDBjqkAT%2F8IGFRvj3rWvQNvwiKNx%2BaiHvgFbPsKKq8oTnYcNvDJqSRfI02UO3duyCAdZznEHOwnZdoLIACWBFjrQoPGaZ2TtDTpfPq50Et08MMoKqB8jYAUfr2xgj0ioLzIh%2BzwMHHIhut8PpwLL9EFsXqPazAI7apAxv3MBHwWtGUy7EvGVlzhsFpqJtBusTYcNMFqpaecxf2Y7CXbe8QYe5OnoMzFOeb&X-Amz-Signature=e8a672b57e8013d8b434f7872744b4525f0751b0c2103e437b1ebe222f7b6336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLJIGMC%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLOSOlzUt0C99YpO%2FZ3OwlYShr1pGnthsrNVlRyqUm%2BAIhAM%2FaMxg54jixkYkZcJQUyDXLtUlN4qOl7xzU6OP2X75bKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNR0iomv3Umh2jg60q3AN2qNbeDpnjbxxZ5Zn%2FwPjBlq7HHEKOfxOdzbPgiQ0%2BAFJsCJs%2BX51hPqTlZdHESAQNokBL6ocUjGpqyNJFgHvGaHBDLTOZ9J2NqlsIbuqk6ln5BzDWS74AxWflGtG79RklZs76AjbXDeMTUHKLZrHUniqzackvuiJxalP5rUxGt6FzuEq7VIZozPAY06jWKpYjR0%2BBS3HjJEDV2ziCDyq%2BWv4G0mrx5wbHOczpsCIcd9HN%2BW0DCeTHYj5cGw6Ij%2BMHlgxX%2B8ll1gWn62lQ9ez%2FkDCJGfI4wB8vnv8Qhrq4XhdFn%2Bp5uclHtk%2FCC%2BVKCMvAy%2B%2BGsHqXrbkR4NL9viLkA0szubAxj1dWgHWswCGEWVicthc2Sn%2BQmyiz82sg6gOdEyijlFhZ2eFXvlM10U8cOCjO2rdGW4eWRPM%2FfV3PHbDIY1NGBl%2Bqq1dJ8yeF3b4r6%2BlbVWL1tCrdw%2F%2FueoAKKlcTQ%2BcF%2FvmTRCwZVhSaRg7yg9e9zXHXnadIYnZ07AARKVMY7HCMoZik%2BICg%2F9KPWW%2F24xWG1MnBcAk4s5iyPzeL%2FGZGJ0CI2AnImUSI633CD5b93TQbyFLtnLfesLzj%2FbodYL2R5v3O2yfsFmW0%2FnWCaikW8DRea%2BDXCDCLr4PDBjqkAT%2F8IGFRvj3rWvQNvwiKNx%2BaiHvgFbPsKKq8oTnYcNvDJqSRfI02UO3duyCAdZznEHOwnZdoLIACWBFjrQoPGaZ2TtDTpfPq50Et08MMoKqB8jYAUfr2xgj0ioLzIh%2BzwMHHIhut8PpwLL9EFsXqPazAI7apAxv3MBHwWtGUy7EvGVlzhsFpqJtBusTYcNMFqpaecxf2Y7CXbe8QYe5OnoMzFOeb&X-Amz-Signature=f40e959732604b7ab02e3c05175ba58155c376f52bc40163222f4eb535799e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
