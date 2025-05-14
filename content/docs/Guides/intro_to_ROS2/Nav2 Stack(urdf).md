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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXJL5Z6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEBh8qNYRw7xgoqKTcJ8Y4sd3QQP%2BwQBxKefdzzAHrgAiEAxCkMNbufY1UqyCC0N5eXnypI2Y9gxOCZU7ZZAD%2F3LJkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNiyigeDsvAQhbvfiSrcAwvl0CiWJgpBbWjlLzcAdv1ejXdabQ6eDe7CSkADG9g3uS3xhrOs%2BG1ncSqPIYpYQuA8VESlmfshMRXfIxMQniZ3dN38htbC88hGSHFFlSlNWtEARHd6sJFqfiucVBSKI7bcvIoSK4xfAjqfbMcr5cpIx2qa%2BIaBmDd2VEl5PVKj5NSGElEwFPJiZyjY2BOJuwUH%2BYGMthUYyCsXNFmAqI3%2BwTadSoiDiml0b0sd7z2B3O11hz3xPJ%2BhyqNjC4wgLHZcrF1E69DmLhH80SoOszQ%2FOT7jlo2WsqrvYtgIkdInTe062QG6Fl1eHB%2FZq4qkNmdJ2hbnlguwY%2BdrVoaD5iI5Dcv0uOuhSswxf4vhXm6x6WCtcLwgppN%2Fa%2BgE4pyoVBRu7Y6WXABGmNVSlFEkZKn9D5IHDk8ERVJ%2B4ayYL5JaxUsUpYfctEKFR20fbiWdymlcZya%2FCv3jbOqXRHpmSqBXjEmqYoPYPdVE%2BAAMPQhX2yJPUWnfvdGekobe7AJSbLqTEdhFlM2eQLR8x3SBuK8iqAOkpFfskQwSjQMsCNMKloomCcb97LDnH3GMJRzUju8yDHyTNDQHikPYNj4KcIyqsIkIMPMLeP9ZZBos9%2BwA9OUPNRL8QbqhVTM7MObPk8EGOqUBVyP6vsvsJ5DKviDYyxO8l85k6LIjrr3b10JE4xYXb%2BF9NYKNFnpKa9Clt8zkCxOoq4VaZVgS59vPP0YSFfo6nm4CxEXe%2FiCnnwY2wcVlOV95NyOGqTxmhOebnsb6LjVEQ%2Fn69umsVVs%2FNwNskGrQUY1n1DJDL4UFNW%2FqFdZzzuWQL4ozxQ8nNDiv5HSGUIqmr0zX5Hu4WHMHlR4FPHF9NbvXcfk2&X-Amz-Signature=f490a5a26f10383195a7b93611c8211588aca0227018007b4c16af8430eeb81c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXJL5Z6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEBh8qNYRw7xgoqKTcJ8Y4sd3QQP%2BwQBxKefdzzAHrgAiEAxCkMNbufY1UqyCC0N5eXnypI2Y9gxOCZU7ZZAD%2F3LJkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNiyigeDsvAQhbvfiSrcAwvl0CiWJgpBbWjlLzcAdv1ejXdabQ6eDe7CSkADG9g3uS3xhrOs%2BG1ncSqPIYpYQuA8VESlmfshMRXfIxMQniZ3dN38htbC88hGSHFFlSlNWtEARHd6sJFqfiucVBSKI7bcvIoSK4xfAjqfbMcr5cpIx2qa%2BIaBmDd2VEl5PVKj5NSGElEwFPJiZyjY2BOJuwUH%2BYGMthUYyCsXNFmAqI3%2BwTadSoiDiml0b0sd7z2B3O11hz3xPJ%2BhyqNjC4wgLHZcrF1E69DmLhH80SoOszQ%2FOT7jlo2WsqrvYtgIkdInTe062QG6Fl1eHB%2FZq4qkNmdJ2hbnlguwY%2BdrVoaD5iI5Dcv0uOuhSswxf4vhXm6x6WCtcLwgppN%2Fa%2BgE4pyoVBRu7Y6WXABGmNVSlFEkZKn9D5IHDk8ERVJ%2B4ayYL5JaxUsUpYfctEKFR20fbiWdymlcZya%2FCv3jbOqXRHpmSqBXjEmqYoPYPdVE%2BAAMPQhX2yJPUWnfvdGekobe7AJSbLqTEdhFlM2eQLR8x3SBuK8iqAOkpFfskQwSjQMsCNMKloomCcb97LDnH3GMJRzUju8yDHyTNDQHikPYNj4KcIyqsIkIMPMLeP9ZZBos9%2BwA9OUPNRL8QbqhVTM7MObPk8EGOqUBVyP6vsvsJ5DKviDYyxO8l85k6LIjrr3b10JE4xYXb%2BF9NYKNFnpKa9Clt8zkCxOoq4VaZVgS59vPP0YSFfo6nm4CxEXe%2FiCnnwY2wcVlOV95NyOGqTxmhOebnsb6LjVEQ%2Fn69umsVVs%2FNwNskGrQUY1n1DJDL4UFNW%2FqFdZzzuWQL4ozxQ8nNDiv5HSGUIqmr0zX5Hu4WHMHlR4FPHF9NbvXcfk2&X-Amz-Signature=cf0b98c32c5bc5097e630cae4c5c5c1766dbd3789d44a87455d7a5277168f0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXJL5Z6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEBh8qNYRw7xgoqKTcJ8Y4sd3QQP%2BwQBxKefdzzAHrgAiEAxCkMNbufY1UqyCC0N5eXnypI2Y9gxOCZU7ZZAD%2F3LJkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNiyigeDsvAQhbvfiSrcAwvl0CiWJgpBbWjlLzcAdv1ejXdabQ6eDe7CSkADG9g3uS3xhrOs%2BG1ncSqPIYpYQuA8VESlmfshMRXfIxMQniZ3dN38htbC88hGSHFFlSlNWtEARHd6sJFqfiucVBSKI7bcvIoSK4xfAjqfbMcr5cpIx2qa%2BIaBmDd2VEl5PVKj5NSGElEwFPJiZyjY2BOJuwUH%2BYGMthUYyCsXNFmAqI3%2BwTadSoiDiml0b0sd7z2B3O11hz3xPJ%2BhyqNjC4wgLHZcrF1E69DmLhH80SoOszQ%2FOT7jlo2WsqrvYtgIkdInTe062QG6Fl1eHB%2FZq4qkNmdJ2hbnlguwY%2BdrVoaD5iI5Dcv0uOuhSswxf4vhXm6x6WCtcLwgppN%2Fa%2BgE4pyoVBRu7Y6WXABGmNVSlFEkZKn9D5IHDk8ERVJ%2B4ayYL5JaxUsUpYfctEKFR20fbiWdymlcZya%2FCv3jbOqXRHpmSqBXjEmqYoPYPdVE%2BAAMPQhX2yJPUWnfvdGekobe7AJSbLqTEdhFlM2eQLR8x3SBuK8iqAOkpFfskQwSjQMsCNMKloomCcb97LDnH3GMJRzUju8yDHyTNDQHikPYNj4KcIyqsIkIMPMLeP9ZZBos9%2BwA9OUPNRL8QbqhVTM7MObPk8EGOqUBVyP6vsvsJ5DKviDYyxO8l85k6LIjrr3b10JE4xYXb%2BF9NYKNFnpKa9Clt8zkCxOoq4VaZVgS59vPP0YSFfo6nm4CxEXe%2FiCnnwY2wcVlOV95NyOGqTxmhOebnsb6LjVEQ%2Fn69umsVVs%2FNwNskGrQUY1n1DJDL4UFNW%2FqFdZzzuWQL4ozxQ8nNDiv5HSGUIqmr0zX5Hu4WHMHlR4FPHF9NbvXcfk2&X-Amz-Signature=6779a86b93eccabe6a112b2a426c5d21fdd8902cf2bd5dfcf51e5f294378b53a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXJL5Z6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEBh8qNYRw7xgoqKTcJ8Y4sd3QQP%2BwQBxKefdzzAHrgAiEAxCkMNbufY1UqyCC0N5eXnypI2Y9gxOCZU7ZZAD%2F3LJkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNiyigeDsvAQhbvfiSrcAwvl0CiWJgpBbWjlLzcAdv1ejXdabQ6eDe7CSkADG9g3uS3xhrOs%2BG1ncSqPIYpYQuA8VESlmfshMRXfIxMQniZ3dN38htbC88hGSHFFlSlNWtEARHd6sJFqfiucVBSKI7bcvIoSK4xfAjqfbMcr5cpIx2qa%2BIaBmDd2VEl5PVKj5NSGElEwFPJiZyjY2BOJuwUH%2BYGMthUYyCsXNFmAqI3%2BwTadSoiDiml0b0sd7z2B3O11hz3xPJ%2BhyqNjC4wgLHZcrF1E69DmLhH80SoOszQ%2FOT7jlo2WsqrvYtgIkdInTe062QG6Fl1eHB%2FZq4qkNmdJ2hbnlguwY%2BdrVoaD5iI5Dcv0uOuhSswxf4vhXm6x6WCtcLwgppN%2Fa%2BgE4pyoVBRu7Y6WXABGmNVSlFEkZKn9D5IHDk8ERVJ%2B4ayYL5JaxUsUpYfctEKFR20fbiWdymlcZya%2FCv3jbOqXRHpmSqBXjEmqYoPYPdVE%2BAAMPQhX2yJPUWnfvdGekobe7AJSbLqTEdhFlM2eQLR8x3SBuK8iqAOkpFfskQwSjQMsCNMKloomCcb97LDnH3GMJRzUju8yDHyTNDQHikPYNj4KcIyqsIkIMPMLeP9ZZBos9%2BwA9OUPNRL8QbqhVTM7MObPk8EGOqUBVyP6vsvsJ5DKviDYyxO8l85k6LIjrr3b10JE4xYXb%2BF9NYKNFnpKa9Clt8zkCxOoq4VaZVgS59vPP0YSFfo6nm4CxEXe%2FiCnnwY2wcVlOV95NyOGqTxmhOebnsb6LjVEQ%2Fn69umsVVs%2FNwNskGrQUY1n1DJDL4UFNW%2FqFdZzzuWQL4ozxQ8nNDiv5HSGUIqmr0zX5Hu4WHMHlR4FPHF9NbvXcfk2&X-Amz-Signature=7fc5cf231200e8a5213cebd4bb3a37378fee68cad930d88dce7ee063c9421114&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXJL5Z6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEBh8qNYRw7xgoqKTcJ8Y4sd3QQP%2BwQBxKefdzzAHrgAiEAxCkMNbufY1UqyCC0N5eXnypI2Y9gxOCZU7ZZAD%2F3LJkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNiyigeDsvAQhbvfiSrcAwvl0CiWJgpBbWjlLzcAdv1ejXdabQ6eDe7CSkADG9g3uS3xhrOs%2BG1ncSqPIYpYQuA8VESlmfshMRXfIxMQniZ3dN38htbC88hGSHFFlSlNWtEARHd6sJFqfiucVBSKI7bcvIoSK4xfAjqfbMcr5cpIx2qa%2BIaBmDd2VEl5PVKj5NSGElEwFPJiZyjY2BOJuwUH%2BYGMthUYyCsXNFmAqI3%2BwTadSoiDiml0b0sd7z2B3O11hz3xPJ%2BhyqNjC4wgLHZcrF1E69DmLhH80SoOszQ%2FOT7jlo2WsqrvYtgIkdInTe062QG6Fl1eHB%2FZq4qkNmdJ2hbnlguwY%2BdrVoaD5iI5Dcv0uOuhSswxf4vhXm6x6WCtcLwgppN%2Fa%2BgE4pyoVBRu7Y6WXABGmNVSlFEkZKn9D5IHDk8ERVJ%2B4ayYL5JaxUsUpYfctEKFR20fbiWdymlcZya%2FCv3jbOqXRHpmSqBXjEmqYoPYPdVE%2BAAMPQhX2yJPUWnfvdGekobe7AJSbLqTEdhFlM2eQLR8x3SBuK8iqAOkpFfskQwSjQMsCNMKloomCcb97LDnH3GMJRzUju8yDHyTNDQHikPYNj4KcIyqsIkIMPMLeP9ZZBos9%2BwA9OUPNRL8QbqhVTM7MObPk8EGOqUBVyP6vsvsJ5DKviDYyxO8l85k6LIjrr3b10JE4xYXb%2BF9NYKNFnpKa9Clt8zkCxOoq4VaZVgS59vPP0YSFfo6nm4CxEXe%2FiCnnwY2wcVlOV95NyOGqTxmhOebnsb6LjVEQ%2Fn69umsVVs%2FNwNskGrQUY1n1DJDL4UFNW%2FqFdZzzuWQL4ozxQ8nNDiv5HSGUIqmr0zX5Hu4WHMHlR4FPHF9NbvXcfk2&X-Amz-Signature=4179ed0bbd433c4eb20cfc086630db33c147a1237cafd15f24f06c7d93074bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXJL5Z6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEBh8qNYRw7xgoqKTcJ8Y4sd3QQP%2BwQBxKefdzzAHrgAiEAxCkMNbufY1UqyCC0N5eXnypI2Y9gxOCZU7ZZAD%2F3LJkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDNiyigeDsvAQhbvfiSrcAwvl0CiWJgpBbWjlLzcAdv1ejXdabQ6eDe7CSkADG9g3uS3xhrOs%2BG1ncSqPIYpYQuA8VESlmfshMRXfIxMQniZ3dN38htbC88hGSHFFlSlNWtEARHd6sJFqfiucVBSKI7bcvIoSK4xfAjqfbMcr5cpIx2qa%2BIaBmDd2VEl5PVKj5NSGElEwFPJiZyjY2BOJuwUH%2BYGMthUYyCsXNFmAqI3%2BwTadSoiDiml0b0sd7z2B3O11hz3xPJ%2BhyqNjC4wgLHZcrF1E69DmLhH80SoOszQ%2FOT7jlo2WsqrvYtgIkdInTe062QG6Fl1eHB%2FZq4qkNmdJ2hbnlguwY%2BdrVoaD5iI5Dcv0uOuhSswxf4vhXm6x6WCtcLwgppN%2Fa%2BgE4pyoVBRu7Y6WXABGmNVSlFEkZKn9D5IHDk8ERVJ%2B4ayYL5JaxUsUpYfctEKFR20fbiWdymlcZya%2FCv3jbOqXRHpmSqBXjEmqYoPYPdVE%2BAAMPQhX2yJPUWnfvdGekobe7AJSbLqTEdhFlM2eQLR8x3SBuK8iqAOkpFfskQwSjQMsCNMKloomCcb97LDnH3GMJRzUju8yDHyTNDQHikPYNj4KcIyqsIkIMPMLeP9ZZBos9%2BwA9OUPNRL8QbqhVTM7MObPk8EGOqUBVyP6vsvsJ5DKviDYyxO8l85k6LIjrr3b10JE4xYXb%2BF9NYKNFnpKa9Clt8zkCxOoq4VaZVgS59vPP0YSFfo6nm4CxEXe%2FiCnnwY2wcVlOV95NyOGqTxmhOebnsb6LjVEQ%2Fn69umsVVs%2FNwNskGrQUY1n1DJDL4UFNW%2FqFdZzzuWQL4ozxQ8nNDiv5HSGUIqmr0zX5Hu4WHMHlR4FPHF9NbvXcfk2&X-Amz-Signature=ae458ece9a8b6d4eb66c8af8a6e6d6e4cf8c357103b086e10c288f3ee5474e01&X-Amz-SignedHeaders=host&x-id=GetObject)
