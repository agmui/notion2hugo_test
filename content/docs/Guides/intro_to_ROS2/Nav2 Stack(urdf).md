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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULD5SD6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxw%2BUSoFNZk6PoXkmGkWocRC6tZ6OUJBnPpiG4zgMGgIhAPFP9pJiBB7CWfML5gGfshTRmZVmx2u3PKPWHOKQgTdRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq9Val33xNM2re3nAq3APiHVbIB5cUH%2F0hZA7mr2NAsfxM4bkciVk%2BCV6rxAPwqSIlnKtoOgTjRBSHTGOgyPMf%2FbhpqdnNOqupsSbSe9uBvkVglKvnZAxGmh1wYp%2B2fE3vX%2BI8LVwagiKtXL1RgFHYJUf8Lot2%2F9fM4bdlYS%2BkB4Xj5MadGDj5LJvDOB7sTD3MVPzTIkxx4APAarlc5x296RhbDWWq0iFMOVk7dRUZKOKwivi401pFN8tEbAsklq2tPFxKqxrwSaLuYfAIL3roaHjaxtzPl4EM4hDQMAWwhJ2vIF26ncQO%2BmUiHkdjobJeErlJkkzCZNsoqKKoL6fU6T25IfoWjBFI9qCdaUY7mV6r%2F7vM708Gl2Vr2jKJURMrpQH7uSkprAPB8yutVYj93cwJO6G7bKGreWfvr4WBfYpoUgKIISGqBi0hS3cb3sPLRyG2rOp2DZnc%2Fjl3pKkErP22%2FzkjyJGNAY2Umq3m%2F%2BjmBcLMSVGJocnGZawOEi3d94DPY1DjVHsxkQuhrAm49%2B5QJh6xmklN9E%2FBEDmMiMXja05CECsP7ZbwNOX9ySayEleIhKuU4mnm%2FCT8WekKmJlo4sRlntYRLWD6tptWkAiOt8GwnqdDC7vuGRqIjf7ZqM2ULTXk2wpnsDDyypzCBjqkAeJ79iIZPalp9pVgcm0w1h%2BttYRQ4NbfkE0ED04qWX2y4%2BHHCcO6E7yNSpg5FeHVoDtMcnvFVmzlA5XvCcPskROUSIfnnwOxB2SG2kbrF6ZHemFoEefp5P%2Bh1lwBIVwZ76buKmrdVYueHW6Lt4Y%2FZiMJBkr6nuuDiJkIrPf8YW1Q%2BUI15QPMQTITK3jfNMsGPzlywW9fMESj42q6Aj0P7xZHCxH1&X-Amz-Signature=95b1360ceb1c81040c7ca66444e39f8213953fc96abf2087cf19bb1aa33e797b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULD5SD6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxw%2BUSoFNZk6PoXkmGkWocRC6tZ6OUJBnPpiG4zgMGgIhAPFP9pJiBB7CWfML5gGfshTRmZVmx2u3PKPWHOKQgTdRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq9Val33xNM2re3nAq3APiHVbIB5cUH%2F0hZA7mr2NAsfxM4bkciVk%2BCV6rxAPwqSIlnKtoOgTjRBSHTGOgyPMf%2FbhpqdnNOqupsSbSe9uBvkVglKvnZAxGmh1wYp%2B2fE3vX%2BI8LVwagiKtXL1RgFHYJUf8Lot2%2F9fM4bdlYS%2BkB4Xj5MadGDj5LJvDOB7sTD3MVPzTIkxx4APAarlc5x296RhbDWWq0iFMOVk7dRUZKOKwivi401pFN8tEbAsklq2tPFxKqxrwSaLuYfAIL3roaHjaxtzPl4EM4hDQMAWwhJ2vIF26ncQO%2BmUiHkdjobJeErlJkkzCZNsoqKKoL6fU6T25IfoWjBFI9qCdaUY7mV6r%2F7vM708Gl2Vr2jKJURMrpQH7uSkprAPB8yutVYj93cwJO6G7bKGreWfvr4WBfYpoUgKIISGqBi0hS3cb3sPLRyG2rOp2DZnc%2Fjl3pKkErP22%2FzkjyJGNAY2Umq3m%2F%2BjmBcLMSVGJocnGZawOEi3d94DPY1DjVHsxkQuhrAm49%2B5QJh6xmklN9E%2FBEDmMiMXja05CECsP7ZbwNOX9ySayEleIhKuU4mnm%2FCT8WekKmJlo4sRlntYRLWD6tptWkAiOt8GwnqdDC7vuGRqIjf7ZqM2ULTXk2wpnsDDyypzCBjqkAeJ79iIZPalp9pVgcm0w1h%2BttYRQ4NbfkE0ED04qWX2y4%2BHHCcO6E7yNSpg5FeHVoDtMcnvFVmzlA5XvCcPskROUSIfnnwOxB2SG2kbrF6ZHemFoEefp5P%2Bh1lwBIVwZ76buKmrdVYueHW6Lt4Y%2FZiMJBkr6nuuDiJkIrPf8YW1Q%2BUI15QPMQTITK3jfNMsGPzlywW9fMESj42q6Aj0P7xZHCxH1&X-Amz-Signature=96e720a254ada6a831eef5814649558e5a08145381785b9067420bdc8f1a8605&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULD5SD6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxw%2BUSoFNZk6PoXkmGkWocRC6tZ6OUJBnPpiG4zgMGgIhAPFP9pJiBB7CWfML5gGfshTRmZVmx2u3PKPWHOKQgTdRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq9Val33xNM2re3nAq3APiHVbIB5cUH%2F0hZA7mr2NAsfxM4bkciVk%2BCV6rxAPwqSIlnKtoOgTjRBSHTGOgyPMf%2FbhpqdnNOqupsSbSe9uBvkVglKvnZAxGmh1wYp%2B2fE3vX%2BI8LVwagiKtXL1RgFHYJUf8Lot2%2F9fM4bdlYS%2BkB4Xj5MadGDj5LJvDOB7sTD3MVPzTIkxx4APAarlc5x296RhbDWWq0iFMOVk7dRUZKOKwivi401pFN8tEbAsklq2tPFxKqxrwSaLuYfAIL3roaHjaxtzPl4EM4hDQMAWwhJ2vIF26ncQO%2BmUiHkdjobJeErlJkkzCZNsoqKKoL6fU6T25IfoWjBFI9qCdaUY7mV6r%2F7vM708Gl2Vr2jKJURMrpQH7uSkprAPB8yutVYj93cwJO6G7bKGreWfvr4WBfYpoUgKIISGqBi0hS3cb3sPLRyG2rOp2DZnc%2Fjl3pKkErP22%2FzkjyJGNAY2Umq3m%2F%2BjmBcLMSVGJocnGZawOEi3d94DPY1DjVHsxkQuhrAm49%2B5QJh6xmklN9E%2FBEDmMiMXja05CECsP7ZbwNOX9ySayEleIhKuU4mnm%2FCT8WekKmJlo4sRlntYRLWD6tptWkAiOt8GwnqdDC7vuGRqIjf7ZqM2ULTXk2wpnsDDyypzCBjqkAeJ79iIZPalp9pVgcm0w1h%2BttYRQ4NbfkE0ED04qWX2y4%2BHHCcO6E7yNSpg5FeHVoDtMcnvFVmzlA5XvCcPskROUSIfnnwOxB2SG2kbrF6ZHemFoEefp5P%2Bh1lwBIVwZ76buKmrdVYueHW6Lt4Y%2FZiMJBkr6nuuDiJkIrPf8YW1Q%2BUI15QPMQTITK3jfNMsGPzlywW9fMESj42q6Aj0P7xZHCxH1&X-Amz-Signature=e6db1a066eda7adfb43073275499b1e3d77ff1e4b5e73342514ee684a111a556&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULD5SD6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxw%2BUSoFNZk6PoXkmGkWocRC6tZ6OUJBnPpiG4zgMGgIhAPFP9pJiBB7CWfML5gGfshTRmZVmx2u3PKPWHOKQgTdRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq9Val33xNM2re3nAq3APiHVbIB5cUH%2F0hZA7mr2NAsfxM4bkciVk%2BCV6rxAPwqSIlnKtoOgTjRBSHTGOgyPMf%2FbhpqdnNOqupsSbSe9uBvkVglKvnZAxGmh1wYp%2B2fE3vX%2BI8LVwagiKtXL1RgFHYJUf8Lot2%2F9fM4bdlYS%2BkB4Xj5MadGDj5LJvDOB7sTD3MVPzTIkxx4APAarlc5x296RhbDWWq0iFMOVk7dRUZKOKwivi401pFN8tEbAsklq2tPFxKqxrwSaLuYfAIL3roaHjaxtzPl4EM4hDQMAWwhJ2vIF26ncQO%2BmUiHkdjobJeErlJkkzCZNsoqKKoL6fU6T25IfoWjBFI9qCdaUY7mV6r%2F7vM708Gl2Vr2jKJURMrpQH7uSkprAPB8yutVYj93cwJO6G7bKGreWfvr4WBfYpoUgKIISGqBi0hS3cb3sPLRyG2rOp2DZnc%2Fjl3pKkErP22%2FzkjyJGNAY2Umq3m%2F%2BjmBcLMSVGJocnGZawOEi3d94DPY1DjVHsxkQuhrAm49%2B5QJh6xmklN9E%2FBEDmMiMXja05CECsP7ZbwNOX9ySayEleIhKuU4mnm%2FCT8WekKmJlo4sRlntYRLWD6tptWkAiOt8GwnqdDC7vuGRqIjf7ZqM2ULTXk2wpnsDDyypzCBjqkAeJ79iIZPalp9pVgcm0w1h%2BttYRQ4NbfkE0ED04qWX2y4%2BHHCcO6E7yNSpg5FeHVoDtMcnvFVmzlA5XvCcPskROUSIfnnwOxB2SG2kbrF6ZHemFoEefp5P%2Bh1lwBIVwZ76buKmrdVYueHW6Lt4Y%2FZiMJBkr6nuuDiJkIrPf8YW1Q%2BUI15QPMQTITK3jfNMsGPzlywW9fMESj42q6Aj0P7xZHCxH1&X-Amz-Signature=89cd5cfa42b189f41708fd5c5513546b8b5f2287efa44ccc7effd42ffa53a742&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULD5SD6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxw%2BUSoFNZk6PoXkmGkWocRC6tZ6OUJBnPpiG4zgMGgIhAPFP9pJiBB7CWfML5gGfshTRmZVmx2u3PKPWHOKQgTdRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq9Val33xNM2re3nAq3APiHVbIB5cUH%2F0hZA7mr2NAsfxM4bkciVk%2BCV6rxAPwqSIlnKtoOgTjRBSHTGOgyPMf%2FbhpqdnNOqupsSbSe9uBvkVglKvnZAxGmh1wYp%2B2fE3vX%2BI8LVwagiKtXL1RgFHYJUf8Lot2%2F9fM4bdlYS%2BkB4Xj5MadGDj5LJvDOB7sTD3MVPzTIkxx4APAarlc5x296RhbDWWq0iFMOVk7dRUZKOKwivi401pFN8tEbAsklq2tPFxKqxrwSaLuYfAIL3roaHjaxtzPl4EM4hDQMAWwhJ2vIF26ncQO%2BmUiHkdjobJeErlJkkzCZNsoqKKoL6fU6T25IfoWjBFI9qCdaUY7mV6r%2F7vM708Gl2Vr2jKJURMrpQH7uSkprAPB8yutVYj93cwJO6G7bKGreWfvr4WBfYpoUgKIISGqBi0hS3cb3sPLRyG2rOp2DZnc%2Fjl3pKkErP22%2FzkjyJGNAY2Umq3m%2F%2BjmBcLMSVGJocnGZawOEi3d94DPY1DjVHsxkQuhrAm49%2B5QJh6xmklN9E%2FBEDmMiMXja05CECsP7ZbwNOX9ySayEleIhKuU4mnm%2FCT8WekKmJlo4sRlntYRLWD6tptWkAiOt8GwnqdDC7vuGRqIjf7ZqM2ULTXk2wpnsDDyypzCBjqkAeJ79iIZPalp9pVgcm0w1h%2BttYRQ4NbfkE0ED04qWX2y4%2BHHCcO6E7yNSpg5FeHVoDtMcnvFVmzlA5XvCcPskROUSIfnnwOxB2SG2kbrF6ZHemFoEefp5P%2Bh1lwBIVwZ76buKmrdVYueHW6Lt4Y%2FZiMJBkr6nuuDiJkIrPf8YW1Q%2BUI15QPMQTITK3jfNMsGPzlywW9fMESj42q6Aj0P7xZHCxH1&X-Amz-Signature=7e06e23418ab9b0feee33e77b26366ea7661ca327bf596f73b01a9a3c243b70f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULD5SD6%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxw%2BUSoFNZk6PoXkmGkWocRC6tZ6OUJBnPpiG4zgMGgIhAPFP9pJiBB7CWfML5gGfshTRmZVmx2u3PKPWHOKQgTdRKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq9Val33xNM2re3nAq3APiHVbIB5cUH%2F0hZA7mr2NAsfxM4bkciVk%2BCV6rxAPwqSIlnKtoOgTjRBSHTGOgyPMf%2FbhpqdnNOqupsSbSe9uBvkVglKvnZAxGmh1wYp%2B2fE3vX%2BI8LVwagiKtXL1RgFHYJUf8Lot2%2F9fM4bdlYS%2BkB4Xj5MadGDj5LJvDOB7sTD3MVPzTIkxx4APAarlc5x296RhbDWWq0iFMOVk7dRUZKOKwivi401pFN8tEbAsklq2tPFxKqxrwSaLuYfAIL3roaHjaxtzPl4EM4hDQMAWwhJ2vIF26ncQO%2BmUiHkdjobJeErlJkkzCZNsoqKKoL6fU6T25IfoWjBFI9qCdaUY7mV6r%2F7vM708Gl2Vr2jKJURMrpQH7uSkprAPB8yutVYj93cwJO6G7bKGreWfvr4WBfYpoUgKIISGqBi0hS3cb3sPLRyG2rOp2DZnc%2Fjl3pKkErP22%2FzkjyJGNAY2Umq3m%2F%2BjmBcLMSVGJocnGZawOEi3d94DPY1DjVHsxkQuhrAm49%2B5QJh6xmklN9E%2FBEDmMiMXja05CECsP7ZbwNOX9ySayEleIhKuU4mnm%2FCT8WekKmJlo4sRlntYRLWD6tptWkAiOt8GwnqdDC7vuGRqIjf7ZqM2ULTXk2wpnsDDyypzCBjqkAeJ79iIZPalp9pVgcm0w1h%2BttYRQ4NbfkE0ED04qWX2y4%2BHHCcO6E7yNSpg5FeHVoDtMcnvFVmzlA5XvCcPskROUSIfnnwOxB2SG2kbrF6ZHemFoEefp5P%2Bh1lwBIVwZ76buKmrdVYueHW6Lt4Y%2FZiMJBkr6nuuDiJkIrPf8YW1Q%2BUI15QPMQTITK3jfNMsGPzlywW9fMESj42q6Aj0P7xZHCxH1&X-Amz-Signature=799d72143f62ebaff834e069d1347fe72d60efe42629aad358a2ccb195cad65e&X-Amz-SignedHeaders=host&x-id=GetObject)
