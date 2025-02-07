---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O67IVS4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCVUbE4GKskqOGDSwE7gTy5aguc8Td549cMUsCLA%2FtPRwIhAPFG%2Bwl8ME%2FIsWLccgJFbvQUhsMl7%2F8ODMwuBep3qk8%2BKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2Bd0fLQ5mDRNsDbjcq3APWuih13p7bvdpIVzzM64y%2FNRn3i4EDTTziNWxFRrOPhgPDuclUFWRbbZfJZrdqqMIgTiW%2BxR7OpoiASx88Zfab5ikuHpZNuME32GLHBpQ56JliykE42%2ByVQQM1wI6NCMxY9xsWUAeLRES5Oet%2BfG99HnVzi%2BmOHqPztiirDO5dh%2F4ARUAnNzQsiItRyH%2BMHP5q95PIJeTDdoRqD1XAjOO6Uw%2Ft4e%2FMAlusvabV%2F3e%2FigR217przNt%2Bqjj7ncis46mbfNYkPeG4EJwpJxYq1pBTrW9GEOFxLYIAZ09XXQnQqGlnR4HhJG5QMwbLpieeaMVJXFcNpx9Ni8xFlcw%2BmEmDs8lL5vxJqO3RjYfq8mUpPgbUkT9BBLVYrQtPSOEHQ6yATS9Em%2Fniz8HTjpeRWDry6zLiPEvR5fWSdq1nv5tULDKFq1Vc80C25Z%2B6UCwvwdo7XPNJxuNbIZ%2FQao%2B1tbyYPDDhOrxnPsUXBW7qatrzFBiKHoEf%2B3cn1fjR7P0RgbAiDt6xPHGSJMiSb8Ivet0vp9T3wf89IA6qJaxjlYSsBOOwV924zNhINPl0DNpsdBIEi1bKcezOfvf4WQNN7Z7%2FsbdbQaq3s9DopGzLEZLkZw4yUnZVD3mAp8mnRzCvjJi9BjqkAT%2B19bdJ9WWdAb51c3MOiS6mAWLGjz6Tkbq4RSGRLxtBzGPzgJA9u7LTRrt9zRFMuFtn9cU7ZDQdtSeP4b9DtGqt6BzsVyRL0JZFOYrIBWRVQDeoGuXVoSuqRXXHuF0iB%2FDtSFTICxrveAAu5jVAK6r8SkTbClbVZkIE2GsDMBpYulBvuDF7z87mE2pp8qNFqdTLSiaeHY3oSO2X44CRqNQo7kdo&X-Amz-Signature=d43a56b084468932333b460bdf9bd09b8536547edd44d6ca52bddb7cab67a8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O67IVS4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCVUbE4GKskqOGDSwE7gTy5aguc8Td549cMUsCLA%2FtPRwIhAPFG%2Bwl8ME%2FIsWLccgJFbvQUhsMl7%2F8ODMwuBep3qk8%2BKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2Bd0fLQ5mDRNsDbjcq3APWuih13p7bvdpIVzzM64y%2FNRn3i4EDTTziNWxFRrOPhgPDuclUFWRbbZfJZrdqqMIgTiW%2BxR7OpoiASx88Zfab5ikuHpZNuME32GLHBpQ56JliykE42%2ByVQQM1wI6NCMxY9xsWUAeLRES5Oet%2BfG99HnVzi%2BmOHqPztiirDO5dh%2F4ARUAnNzQsiItRyH%2BMHP5q95PIJeTDdoRqD1XAjOO6Uw%2Ft4e%2FMAlusvabV%2F3e%2FigR217przNt%2Bqjj7ncis46mbfNYkPeG4EJwpJxYq1pBTrW9GEOFxLYIAZ09XXQnQqGlnR4HhJG5QMwbLpieeaMVJXFcNpx9Ni8xFlcw%2BmEmDs8lL5vxJqO3RjYfq8mUpPgbUkT9BBLVYrQtPSOEHQ6yATS9Em%2Fniz8HTjpeRWDry6zLiPEvR5fWSdq1nv5tULDKFq1Vc80C25Z%2B6UCwvwdo7XPNJxuNbIZ%2FQao%2B1tbyYPDDhOrxnPsUXBW7qatrzFBiKHoEf%2B3cn1fjR7P0RgbAiDt6xPHGSJMiSb8Ivet0vp9T3wf89IA6qJaxjlYSsBOOwV924zNhINPl0DNpsdBIEi1bKcezOfvf4WQNN7Z7%2FsbdbQaq3s9DopGzLEZLkZw4yUnZVD3mAp8mnRzCvjJi9BjqkAT%2B19bdJ9WWdAb51c3MOiS6mAWLGjz6Tkbq4RSGRLxtBzGPzgJA9u7LTRrt9zRFMuFtn9cU7ZDQdtSeP4b9DtGqt6BzsVyRL0JZFOYrIBWRVQDeoGuXVoSuqRXXHuF0iB%2FDtSFTICxrveAAu5jVAK6r8SkTbClbVZkIE2GsDMBpYulBvuDF7z87mE2pp8qNFqdTLSiaeHY3oSO2X44CRqNQo7kdo&X-Amz-Signature=ba22d609dd4c361c537fb156de40b64b8a8117c04ffc587579aa6d109955d5c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O67IVS4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCVUbE4GKskqOGDSwE7gTy5aguc8Td549cMUsCLA%2FtPRwIhAPFG%2Bwl8ME%2FIsWLccgJFbvQUhsMl7%2F8ODMwuBep3qk8%2BKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2Bd0fLQ5mDRNsDbjcq3APWuih13p7bvdpIVzzM64y%2FNRn3i4EDTTziNWxFRrOPhgPDuclUFWRbbZfJZrdqqMIgTiW%2BxR7OpoiASx88Zfab5ikuHpZNuME32GLHBpQ56JliykE42%2ByVQQM1wI6NCMxY9xsWUAeLRES5Oet%2BfG99HnVzi%2BmOHqPztiirDO5dh%2F4ARUAnNzQsiItRyH%2BMHP5q95PIJeTDdoRqD1XAjOO6Uw%2Ft4e%2FMAlusvabV%2F3e%2FigR217przNt%2Bqjj7ncis46mbfNYkPeG4EJwpJxYq1pBTrW9GEOFxLYIAZ09XXQnQqGlnR4HhJG5QMwbLpieeaMVJXFcNpx9Ni8xFlcw%2BmEmDs8lL5vxJqO3RjYfq8mUpPgbUkT9BBLVYrQtPSOEHQ6yATS9Em%2Fniz8HTjpeRWDry6zLiPEvR5fWSdq1nv5tULDKFq1Vc80C25Z%2B6UCwvwdo7XPNJxuNbIZ%2FQao%2B1tbyYPDDhOrxnPsUXBW7qatrzFBiKHoEf%2B3cn1fjR7P0RgbAiDt6xPHGSJMiSb8Ivet0vp9T3wf89IA6qJaxjlYSsBOOwV924zNhINPl0DNpsdBIEi1bKcezOfvf4WQNN7Z7%2FsbdbQaq3s9DopGzLEZLkZw4yUnZVD3mAp8mnRzCvjJi9BjqkAT%2B19bdJ9WWdAb51c3MOiS6mAWLGjz6Tkbq4RSGRLxtBzGPzgJA9u7LTRrt9zRFMuFtn9cU7ZDQdtSeP4b9DtGqt6BzsVyRL0JZFOYrIBWRVQDeoGuXVoSuqRXXHuF0iB%2FDtSFTICxrveAAu5jVAK6r8SkTbClbVZkIE2GsDMBpYulBvuDF7z87mE2pp8qNFqdTLSiaeHY3oSO2X44CRqNQo7kdo&X-Amz-Signature=b4f62e72481ecc3de537fc8bfb72f508f629c22268eab52fec5acab34635b053&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O67IVS4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCVUbE4GKskqOGDSwE7gTy5aguc8Td549cMUsCLA%2FtPRwIhAPFG%2Bwl8ME%2FIsWLccgJFbvQUhsMl7%2F8ODMwuBep3qk8%2BKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2Bd0fLQ5mDRNsDbjcq3APWuih13p7bvdpIVzzM64y%2FNRn3i4EDTTziNWxFRrOPhgPDuclUFWRbbZfJZrdqqMIgTiW%2BxR7OpoiASx88Zfab5ikuHpZNuME32GLHBpQ56JliykE42%2ByVQQM1wI6NCMxY9xsWUAeLRES5Oet%2BfG99HnVzi%2BmOHqPztiirDO5dh%2F4ARUAnNzQsiItRyH%2BMHP5q95PIJeTDdoRqD1XAjOO6Uw%2Ft4e%2FMAlusvabV%2F3e%2FigR217przNt%2Bqjj7ncis46mbfNYkPeG4EJwpJxYq1pBTrW9GEOFxLYIAZ09XXQnQqGlnR4HhJG5QMwbLpieeaMVJXFcNpx9Ni8xFlcw%2BmEmDs8lL5vxJqO3RjYfq8mUpPgbUkT9BBLVYrQtPSOEHQ6yATS9Em%2Fniz8HTjpeRWDry6zLiPEvR5fWSdq1nv5tULDKFq1Vc80C25Z%2B6UCwvwdo7XPNJxuNbIZ%2FQao%2B1tbyYPDDhOrxnPsUXBW7qatrzFBiKHoEf%2B3cn1fjR7P0RgbAiDt6xPHGSJMiSb8Ivet0vp9T3wf89IA6qJaxjlYSsBOOwV924zNhINPl0DNpsdBIEi1bKcezOfvf4WQNN7Z7%2FsbdbQaq3s9DopGzLEZLkZw4yUnZVD3mAp8mnRzCvjJi9BjqkAT%2B19bdJ9WWdAb51c3MOiS6mAWLGjz6Tkbq4RSGRLxtBzGPzgJA9u7LTRrt9zRFMuFtn9cU7ZDQdtSeP4b9DtGqt6BzsVyRL0JZFOYrIBWRVQDeoGuXVoSuqRXXHuF0iB%2FDtSFTICxrveAAu5jVAK6r8SkTbClbVZkIE2GsDMBpYulBvuDF7z87mE2pp8qNFqdTLSiaeHY3oSO2X44CRqNQo7kdo&X-Amz-Signature=46242dba4364b3b4a19994126df381a4d31489de2f7d401c126724a0d511916c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O67IVS4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCVUbE4GKskqOGDSwE7gTy5aguc8Td549cMUsCLA%2FtPRwIhAPFG%2Bwl8ME%2FIsWLccgJFbvQUhsMl7%2F8ODMwuBep3qk8%2BKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2Bd0fLQ5mDRNsDbjcq3APWuih13p7bvdpIVzzM64y%2FNRn3i4EDTTziNWxFRrOPhgPDuclUFWRbbZfJZrdqqMIgTiW%2BxR7OpoiASx88Zfab5ikuHpZNuME32GLHBpQ56JliykE42%2ByVQQM1wI6NCMxY9xsWUAeLRES5Oet%2BfG99HnVzi%2BmOHqPztiirDO5dh%2F4ARUAnNzQsiItRyH%2BMHP5q95PIJeTDdoRqD1XAjOO6Uw%2Ft4e%2FMAlusvabV%2F3e%2FigR217przNt%2Bqjj7ncis46mbfNYkPeG4EJwpJxYq1pBTrW9GEOFxLYIAZ09XXQnQqGlnR4HhJG5QMwbLpieeaMVJXFcNpx9Ni8xFlcw%2BmEmDs8lL5vxJqO3RjYfq8mUpPgbUkT9BBLVYrQtPSOEHQ6yATS9Em%2Fniz8HTjpeRWDry6zLiPEvR5fWSdq1nv5tULDKFq1Vc80C25Z%2B6UCwvwdo7XPNJxuNbIZ%2FQao%2B1tbyYPDDhOrxnPsUXBW7qatrzFBiKHoEf%2B3cn1fjR7P0RgbAiDt6xPHGSJMiSb8Ivet0vp9T3wf89IA6qJaxjlYSsBOOwV924zNhINPl0DNpsdBIEi1bKcezOfvf4WQNN7Z7%2FsbdbQaq3s9DopGzLEZLkZw4yUnZVD3mAp8mnRzCvjJi9BjqkAT%2B19bdJ9WWdAb51c3MOiS6mAWLGjz6Tkbq4RSGRLxtBzGPzgJA9u7LTRrt9zRFMuFtn9cU7ZDQdtSeP4b9DtGqt6BzsVyRL0JZFOYrIBWRVQDeoGuXVoSuqRXXHuF0iB%2FDtSFTICxrveAAu5jVAK6r8SkTbClbVZkIE2GsDMBpYulBvuDF7z87mE2pp8qNFqdTLSiaeHY3oSO2X44CRqNQo7kdo&X-Amz-Signature=dc759d2268e2cb4dbbe77eaa2df1acb48880ca922821fca26efc1bdcd4a39ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O67IVS4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCVUbE4GKskqOGDSwE7gTy5aguc8Td549cMUsCLA%2FtPRwIhAPFG%2Bwl8ME%2FIsWLccgJFbvQUhsMl7%2F8ODMwuBep3qk8%2BKv8DCHYQABoMNjM3NDIzMTgzODA1Igz%2Bd0fLQ5mDRNsDbjcq3APWuih13p7bvdpIVzzM64y%2FNRn3i4EDTTziNWxFRrOPhgPDuclUFWRbbZfJZrdqqMIgTiW%2BxR7OpoiASx88Zfab5ikuHpZNuME32GLHBpQ56JliykE42%2ByVQQM1wI6NCMxY9xsWUAeLRES5Oet%2BfG99HnVzi%2BmOHqPztiirDO5dh%2F4ARUAnNzQsiItRyH%2BMHP5q95PIJeTDdoRqD1XAjOO6Uw%2Ft4e%2FMAlusvabV%2F3e%2FigR217przNt%2Bqjj7ncis46mbfNYkPeG4EJwpJxYq1pBTrW9GEOFxLYIAZ09XXQnQqGlnR4HhJG5QMwbLpieeaMVJXFcNpx9Ni8xFlcw%2BmEmDs8lL5vxJqO3RjYfq8mUpPgbUkT9BBLVYrQtPSOEHQ6yATS9Em%2Fniz8HTjpeRWDry6zLiPEvR5fWSdq1nv5tULDKFq1Vc80C25Z%2B6UCwvwdo7XPNJxuNbIZ%2FQao%2B1tbyYPDDhOrxnPsUXBW7qatrzFBiKHoEf%2B3cn1fjR7P0RgbAiDt6xPHGSJMiSb8Ivet0vp9T3wf89IA6qJaxjlYSsBOOwV924zNhINPl0DNpsdBIEi1bKcezOfvf4WQNN7Z7%2FsbdbQaq3s9DopGzLEZLkZw4yUnZVD3mAp8mnRzCvjJi9BjqkAT%2B19bdJ9WWdAb51c3MOiS6mAWLGjz6Tkbq4RSGRLxtBzGPzgJA9u7LTRrt9zRFMuFtn9cU7ZDQdtSeP4b9DtGqt6BzsVyRL0JZFOYrIBWRVQDeoGuXVoSuqRXXHuF0iB%2FDtSFTICxrveAAu5jVAK6r8SkTbClbVZkIE2GsDMBpYulBvuDF7z87mE2pp8qNFqdTLSiaeHY3oSO2X44CRqNQo7kdo&X-Amz-Signature=a58f63b7ffdb4c0309ed46a2edb5c5c697992f1949f386e7c94d8d12d96204aa&X-Amz-SignedHeaders=host&x-id=GetObject)
