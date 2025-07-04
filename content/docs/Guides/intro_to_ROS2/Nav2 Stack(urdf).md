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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUYIP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBEMdAnt7wRsQO4czorQAGTqkJwDwc2CvLVE6AdhK8NVAiBkrRkgGwcTy4OKgAZgwS2vrBxTNFvedEV0WpISd1pSeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMoiiyd1wdDNsuXDwKtwDVdidfQv5QfN2CZ4u4%2BREMIbn8fWnEuLM4lNLnwLc78pGub2xEZncLGWHrj2arM%2FVI76qOkWe8OmXJthZxoBNRFXJxaGA%2BE23DP8Pe6oxJOoR0yTT2VwBhHjvB8qg3h9kRw%2BIcqnWIov%2BHBwYZE6fET6MMx5so%2B97Gmx%2BCVhLWzSbZBD7wvnyVitTbtMK6neRajUec%2FZ3Mvir2a9BzxSCF9Y90SHj%2Fyw%2BaoT6lHFpGHaQMEsfvDCmbXIDY%2FN8ieUqJIb7B1Lv1sFhtlE%2BxbQuGp9QyRqWCG97kA61VlHHlPLMZNxkyVCDd%2BIfxWo9fTEeA%2FpSNEe%2FeXzEAAIU%2BDJzRVQyqi0u%2BkNGlexZCuKaOwr3qu9ba1e06CQn9LR4yQH7mw5p5LCF0IIUmp42q59b6m0mmJ2kgvKbSvn8GGjnemPnA7rrP8S5cqFuow1%2FiFbxVKhFkZ1zsE34c8vQdH9KE4t77CPyr37f0%2FSGbUhSntXbYfwNOHZGh66JHMX4nC7wd94RmwxXGHJIMEEtwTScZgBrdCAn%2FVzYXf5j5ASMB3rxM97h3fC8Yca0gelMH0Mk4r0OzFDwGfaVKWc9tQP87C7rGe8XtqgUNKf9%2BjNsd3ncv0gsJw5RyMc0JKcwnbecwwY6pgGJdq9h2AQ3AG2FibIxyx5pWzwd1lVhFK5zO2LcoxSMLnCsguksojQyIEhvoi6ckvi1nsYJRtkAowu3QRqt0D7SzZNyGdbQbd70Ths0HVD3smdfuNgjctzLeGOR1y6qYpfY19Gb3J%2BOtCa1RT%2FpP5qGN67I%2FGM%2BF99jSARPkOfvXjNKaIJHg1RyAsCcIwypFQzDCFV%2BjSOAc3lxZsNxOEOcOq1f66x%2F&X-Amz-Signature=09842d08924dd9736bbcd78e8fd8d928868223f3c7c550fcd4ad491158623096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUYIP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBEMdAnt7wRsQO4czorQAGTqkJwDwc2CvLVE6AdhK8NVAiBkrRkgGwcTy4OKgAZgwS2vrBxTNFvedEV0WpISd1pSeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMoiiyd1wdDNsuXDwKtwDVdidfQv5QfN2CZ4u4%2BREMIbn8fWnEuLM4lNLnwLc78pGub2xEZncLGWHrj2arM%2FVI76qOkWe8OmXJthZxoBNRFXJxaGA%2BE23DP8Pe6oxJOoR0yTT2VwBhHjvB8qg3h9kRw%2BIcqnWIov%2BHBwYZE6fET6MMx5so%2B97Gmx%2BCVhLWzSbZBD7wvnyVitTbtMK6neRajUec%2FZ3Mvir2a9BzxSCF9Y90SHj%2Fyw%2BaoT6lHFpGHaQMEsfvDCmbXIDY%2FN8ieUqJIb7B1Lv1sFhtlE%2BxbQuGp9QyRqWCG97kA61VlHHlPLMZNxkyVCDd%2BIfxWo9fTEeA%2FpSNEe%2FeXzEAAIU%2BDJzRVQyqi0u%2BkNGlexZCuKaOwr3qu9ba1e06CQn9LR4yQH7mw5p5LCF0IIUmp42q59b6m0mmJ2kgvKbSvn8GGjnemPnA7rrP8S5cqFuow1%2FiFbxVKhFkZ1zsE34c8vQdH9KE4t77CPyr37f0%2FSGbUhSntXbYfwNOHZGh66JHMX4nC7wd94RmwxXGHJIMEEtwTScZgBrdCAn%2FVzYXf5j5ASMB3rxM97h3fC8Yca0gelMH0Mk4r0OzFDwGfaVKWc9tQP87C7rGe8XtqgUNKf9%2BjNsd3ncv0gsJw5RyMc0JKcwnbecwwY6pgGJdq9h2AQ3AG2FibIxyx5pWzwd1lVhFK5zO2LcoxSMLnCsguksojQyIEhvoi6ckvi1nsYJRtkAowu3QRqt0D7SzZNyGdbQbd70Ths0HVD3smdfuNgjctzLeGOR1y6qYpfY19Gb3J%2BOtCa1RT%2FpP5qGN67I%2FGM%2BF99jSARPkOfvXjNKaIJHg1RyAsCcIwypFQzDCFV%2BjSOAc3lxZsNxOEOcOq1f66x%2F&X-Amz-Signature=733666b9f0d878fb66e9b577a87499ea3a24c6666c2851c83192ee90fc2d3d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUYIP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBEMdAnt7wRsQO4czorQAGTqkJwDwc2CvLVE6AdhK8NVAiBkrRkgGwcTy4OKgAZgwS2vrBxTNFvedEV0WpISd1pSeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMoiiyd1wdDNsuXDwKtwDVdidfQv5QfN2CZ4u4%2BREMIbn8fWnEuLM4lNLnwLc78pGub2xEZncLGWHrj2arM%2FVI76qOkWe8OmXJthZxoBNRFXJxaGA%2BE23DP8Pe6oxJOoR0yTT2VwBhHjvB8qg3h9kRw%2BIcqnWIov%2BHBwYZE6fET6MMx5so%2B97Gmx%2BCVhLWzSbZBD7wvnyVitTbtMK6neRajUec%2FZ3Mvir2a9BzxSCF9Y90SHj%2Fyw%2BaoT6lHFpGHaQMEsfvDCmbXIDY%2FN8ieUqJIb7B1Lv1sFhtlE%2BxbQuGp9QyRqWCG97kA61VlHHlPLMZNxkyVCDd%2BIfxWo9fTEeA%2FpSNEe%2FeXzEAAIU%2BDJzRVQyqi0u%2BkNGlexZCuKaOwr3qu9ba1e06CQn9LR4yQH7mw5p5LCF0IIUmp42q59b6m0mmJ2kgvKbSvn8GGjnemPnA7rrP8S5cqFuow1%2FiFbxVKhFkZ1zsE34c8vQdH9KE4t77CPyr37f0%2FSGbUhSntXbYfwNOHZGh66JHMX4nC7wd94RmwxXGHJIMEEtwTScZgBrdCAn%2FVzYXf5j5ASMB3rxM97h3fC8Yca0gelMH0Mk4r0OzFDwGfaVKWc9tQP87C7rGe8XtqgUNKf9%2BjNsd3ncv0gsJw5RyMc0JKcwnbecwwY6pgGJdq9h2AQ3AG2FibIxyx5pWzwd1lVhFK5zO2LcoxSMLnCsguksojQyIEhvoi6ckvi1nsYJRtkAowu3QRqt0D7SzZNyGdbQbd70Ths0HVD3smdfuNgjctzLeGOR1y6qYpfY19Gb3J%2BOtCa1RT%2FpP5qGN67I%2FGM%2BF99jSARPkOfvXjNKaIJHg1RyAsCcIwypFQzDCFV%2BjSOAc3lxZsNxOEOcOq1f66x%2F&X-Amz-Signature=38abeb928761303193cf52a12a8278911b562383b9bc8a0efa431a399f555f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUYIP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBEMdAnt7wRsQO4czorQAGTqkJwDwc2CvLVE6AdhK8NVAiBkrRkgGwcTy4OKgAZgwS2vrBxTNFvedEV0WpISd1pSeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMoiiyd1wdDNsuXDwKtwDVdidfQv5QfN2CZ4u4%2BREMIbn8fWnEuLM4lNLnwLc78pGub2xEZncLGWHrj2arM%2FVI76qOkWe8OmXJthZxoBNRFXJxaGA%2BE23DP8Pe6oxJOoR0yTT2VwBhHjvB8qg3h9kRw%2BIcqnWIov%2BHBwYZE6fET6MMx5so%2B97Gmx%2BCVhLWzSbZBD7wvnyVitTbtMK6neRajUec%2FZ3Mvir2a9BzxSCF9Y90SHj%2Fyw%2BaoT6lHFpGHaQMEsfvDCmbXIDY%2FN8ieUqJIb7B1Lv1sFhtlE%2BxbQuGp9QyRqWCG97kA61VlHHlPLMZNxkyVCDd%2BIfxWo9fTEeA%2FpSNEe%2FeXzEAAIU%2BDJzRVQyqi0u%2BkNGlexZCuKaOwr3qu9ba1e06CQn9LR4yQH7mw5p5LCF0IIUmp42q59b6m0mmJ2kgvKbSvn8GGjnemPnA7rrP8S5cqFuow1%2FiFbxVKhFkZ1zsE34c8vQdH9KE4t77CPyr37f0%2FSGbUhSntXbYfwNOHZGh66JHMX4nC7wd94RmwxXGHJIMEEtwTScZgBrdCAn%2FVzYXf5j5ASMB3rxM97h3fC8Yca0gelMH0Mk4r0OzFDwGfaVKWc9tQP87C7rGe8XtqgUNKf9%2BjNsd3ncv0gsJw5RyMc0JKcwnbecwwY6pgGJdq9h2AQ3AG2FibIxyx5pWzwd1lVhFK5zO2LcoxSMLnCsguksojQyIEhvoi6ckvi1nsYJRtkAowu3QRqt0D7SzZNyGdbQbd70Ths0HVD3smdfuNgjctzLeGOR1y6qYpfY19Gb3J%2BOtCa1RT%2FpP5qGN67I%2FGM%2BF99jSARPkOfvXjNKaIJHg1RyAsCcIwypFQzDCFV%2BjSOAc3lxZsNxOEOcOq1f66x%2F&X-Amz-Signature=c7c5622da903e8e45a8ef810b13cb50fd46ddd841831f57e05ba47e2a45535f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUYIP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBEMdAnt7wRsQO4czorQAGTqkJwDwc2CvLVE6AdhK8NVAiBkrRkgGwcTy4OKgAZgwS2vrBxTNFvedEV0WpISd1pSeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMoiiyd1wdDNsuXDwKtwDVdidfQv5QfN2CZ4u4%2BREMIbn8fWnEuLM4lNLnwLc78pGub2xEZncLGWHrj2arM%2FVI76qOkWe8OmXJthZxoBNRFXJxaGA%2BE23DP8Pe6oxJOoR0yTT2VwBhHjvB8qg3h9kRw%2BIcqnWIov%2BHBwYZE6fET6MMx5so%2B97Gmx%2BCVhLWzSbZBD7wvnyVitTbtMK6neRajUec%2FZ3Mvir2a9BzxSCF9Y90SHj%2Fyw%2BaoT6lHFpGHaQMEsfvDCmbXIDY%2FN8ieUqJIb7B1Lv1sFhtlE%2BxbQuGp9QyRqWCG97kA61VlHHlPLMZNxkyVCDd%2BIfxWo9fTEeA%2FpSNEe%2FeXzEAAIU%2BDJzRVQyqi0u%2BkNGlexZCuKaOwr3qu9ba1e06CQn9LR4yQH7mw5p5LCF0IIUmp42q59b6m0mmJ2kgvKbSvn8GGjnemPnA7rrP8S5cqFuow1%2FiFbxVKhFkZ1zsE34c8vQdH9KE4t77CPyr37f0%2FSGbUhSntXbYfwNOHZGh66JHMX4nC7wd94RmwxXGHJIMEEtwTScZgBrdCAn%2FVzYXf5j5ASMB3rxM97h3fC8Yca0gelMH0Mk4r0OzFDwGfaVKWc9tQP87C7rGe8XtqgUNKf9%2BjNsd3ncv0gsJw5RyMc0JKcwnbecwwY6pgGJdq9h2AQ3AG2FibIxyx5pWzwd1lVhFK5zO2LcoxSMLnCsguksojQyIEhvoi6ckvi1nsYJRtkAowu3QRqt0D7SzZNyGdbQbd70Ths0HVD3smdfuNgjctzLeGOR1y6qYpfY19Gb3J%2BOtCa1RT%2FpP5qGN67I%2FGM%2BF99jSARPkOfvXjNKaIJHg1RyAsCcIwypFQzDCFV%2BjSOAc3lxZsNxOEOcOq1f66x%2F&X-Amz-Signature=6414053828b4ffba26844521b8df56933ed30d825617d225947df4104885b8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BKUYIP%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T004302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBEMdAnt7wRsQO4czorQAGTqkJwDwc2CvLVE6AdhK8NVAiBkrRkgGwcTy4OKgAZgwS2vrBxTNFvedEV0WpISd1pSeir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMMoiiyd1wdDNsuXDwKtwDVdidfQv5QfN2CZ4u4%2BREMIbn8fWnEuLM4lNLnwLc78pGub2xEZncLGWHrj2arM%2FVI76qOkWe8OmXJthZxoBNRFXJxaGA%2BE23DP8Pe6oxJOoR0yTT2VwBhHjvB8qg3h9kRw%2BIcqnWIov%2BHBwYZE6fET6MMx5so%2B97Gmx%2BCVhLWzSbZBD7wvnyVitTbtMK6neRajUec%2FZ3Mvir2a9BzxSCF9Y90SHj%2Fyw%2BaoT6lHFpGHaQMEsfvDCmbXIDY%2FN8ieUqJIb7B1Lv1sFhtlE%2BxbQuGp9QyRqWCG97kA61VlHHlPLMZNxkyVCDd%2BIfxWo9fTEeA%2FpSNEe%2FeXzEAAIU%2BDJzRVQyqi0u%2BkNGlexZCuKaOwr3qu9ba1e06CQn9LR4yQH7mw5p5LCF0IIUmp42q59b6m0mmJ2kgvKbSvn8GGjnemPnA7rrP8S5cqFuow1%2FiFbxVKhFkZ1zsE34c8vQdH9KE4t77CPyr37f0%2FSGbUhSntXbYfwNOHZGh66JHMX4nC7wd94RmwxXGHJIMEEtwTScZgBrdCAn%2FVzYXf5j5ASMB3rxM97h3fC8Yca0gelMH0Mk4r0OzFDwGfaVKWc9tQP87C7rGe8XtqgUNKf9%2BjNsd3ncv0gsJw5RyMc0JKcwnbecwwY6pgGJdq9h2AQ3AG2FibIxyx5pWzwd1lVhFK5zO2LcoxSMLnCsguksojQyIEhvoi6ckvi1nsYJRtkAowu3QRqt0D7SzZNyGdbQbd70Ths0HVD3smdfuNgjctzLeGOR1y6qYpfY19Gb3J%2BOtCa1RT%2FpP5qGN67I%2FGM%2BF99jSARPkOfvXjNKaIJHg1RyAsCcIwypFQzDCFV%2BjSOAc3lxZsNxOEOcOq1f66x%2F&X-Amz-Signature=e140f8c98e3cda10645b9c5bdd02aeba177c072f6eedee360d3ceaab58195fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
