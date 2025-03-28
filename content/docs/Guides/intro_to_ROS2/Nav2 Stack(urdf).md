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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H72TKGM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGiiBsZpHC3QtlpVH4nu0SkNnoTkWYq8D%2BbT8cr3DUiAiAjd6cA8fUAuiotLW6IDtqMe8fiRdcJfImy5bqtPNGkjir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMM3JtFxl8dqNZ5m3gKtwDjqwB76mJ%2B0j97Qj6qybEMkSDvyhUkh9qNvrJMywKSku0z4WHJvKdcv9z5p6%2FXHly6Edob1fBVPxfBn9BxCirQOEXCpucstQUzisXvTf8rRpX0D9DyysxTRrYLTCU5FMewOVOYUPCzZvuDx3VIky6tn7isygZ1I%2FJWVnrvlximzImxR0REwypXMGnbUstMmbbFt6Xwl3IzwrnAMhRVUBwDCKo4danc4MJ4jFjsNZAVcEZmvhRg1UD8hGKKPXS%2Bhv6T2V7UQZUMSvomEm9XTxWKubZlJ3i7aCHGJhWGWvsD0%2BJZW5bOoqY3OECVClC%2FYFsy1GOMMtuSqZKXCP4xJr0wqMDyNv6tRNL%2BlVWkbFC%2BVM%2FRNiHsM%2BLNLcDX1K6Dw%2BcKQn7niOf4NizoCwyFf8fKRQuhlLXMMmNuSweCUEc6r7rUfzgzfdjSq7pT5nCZj5b6zsJFnttLmje8LOZXt%2FVhU1hkdbNyVxRY6rt9fnlYsiiMq7TQwy6nQQV6l3%2Fan3nWIlJfj7iOjU94lQplqGAB2UVRd9p8ByJztYaT1pA0IZEUlrGEmWcWEc70m9ofW3oZWTbChUo4smuf1jAzQ0AnuNF59Syp9lECCXqGmsI35edJvPM4v0FwWoE8lkw5tqXvwY6pgEs42nopKE3F5SgQNJ54wgt%2B1pJ8Y0TLPFC0Z6cVlbIQ2WyBBHWxmoiEnwZamuyEQ4zRHZfOMIdgGCVaS0YpxTCaqDMD5XX9BUKX%2FmhsuEccOPN%2BNLesvGUd9WXKwOwr%2BDbhVvidSPwO1B5KtGqS3fZg2XoIVGnO3SyRPoPChJ0KhpaZwK9rt10j3gQ%2FmSNnZ6WUS%2Fe5oxOM9%2FSEH7ePlUrot6qwtbw&X-Amz-Signature=b32e3010177e041523a54a04f9a37517ecf4a257f9545fc688b727c561aead32&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H72TKGM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGiiBsZpHC3QtlpVH4nu0SkNnoTkWYq8D%2BbT8cr3DUiAiAjd6cA8fUAuiotLW6IDtqMe8fiRdcJfImy5bqtPNGkjir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMM3JtFxl8dqNZ5m3gKtwDjqwB76mJ%2B0j97Qj6qybEMkSDvyhUkh9qNvrJMywKSku0z4WHJvKdcv9z5p6%2FXHly6Edob1fBVPxfBn9BxCirQOEXCpucstQUzisXvTf8rRpX0D9DyysxTRrYLTCU5FMewOVOYUPCzZvuDx3VIky6tn7isygZ1I%2FJWVnrvlximzImxR0REwypXMGnbUstMmbbFt6Xwl3IzwrnAMhRVUBwDCKo4danc4MJ4jFjsNZAVcEZmvhRg1UD8hGKKPXS%2Bhv6T2V7UQZUMSvomEm9XTxWKubZlJ3i7aCHGJhWGWvsD0%2BJZW5bOoqY3OECVClC%2FYFsy1GOMMtuSqZKXCP4xJr0wqMDyNv6tRNL%2BlVWkbFC%2BVM%2FRNiHsM%2BLNLcDX1K6Dw%2BcKQn7niOf4NizoCwyFf8fKRQuhlLXMMmNuSweCUEc6r7rUfzgzfdjSq7pT5nCZj5b6zsJFnttLmje8LOZXt%2FVhU1hkdbNyVxRY6rt9fnlYsiiMq7TQwy6nQQV6l3%2Fan3nWIlJfj7iOjU94lQplqGAB2UVRd9p8ByJztYaT1pA0IZEUlrGEmWcWEc70m9ofW3oZWTbChUo4smuf1jAzQ0AnuNF59Syp9lECCXqGmsI35edJvPM4v0FwWoE8lkw5tqXvwY6pgEs42nopKE3F5SgQNJ54wgt%2B1pJ8Y0TLPFC0Z6cVlbIQ2WyBBHWxmoiEnwZamuyEQ4zRHZfOMIdgGCVaS0YpxTCaqDMD5XX9BUKX%2FmhsuEccOPN%2BNLesvGUd9WXKwOwr%2BDbhVvidSPwO1B5KtGqS3fZg2XoIVGnO3SyRPoPChJ0KhpaZwK9rt10j3gQ%2FmSNnZ6WUS%2Fe5oxOM9%2FSEH7ePlUrot6qwtbw&X-Amz-Signature=7fb35a942fa4a58ba7420db410fadcfbb7b5251f3f8cdee7e0155bf4bfaad13e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H72TKGM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGiiBsZpHC3QtlpVH4nu0SkNnoTkWYq8D%2BbT8cr3DUiAiAjd6cA8fUAuiotLW6IDtqMe8fiRdcJfImy5bqtPNGkjir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMM3JtFxl8dqNZ5m3gKtwDjqwB76mJ%2B0j97Qj6qybEMkSDvyhUkh9qNvrJMywKSku0z4WHJvKdcv9z5p6%2FXHly6Edob1fBVPxfBn9BxCirQOEXCpucstQUzisXvTf8rRpX0D9DyysxTRrYLTCU5FMewOVOYUPCzZvuDx3VIky6tn7isygZ1I%2FJWVnrvlximzImxR0REwypXMGnbUstMmbbFt6Xwl3IzwrnAMhRVUBwDCKo4danc4MJ4jFjsNZAVcEZmvhRg1UD8hGKKPXS%2Bhv6T2V7UQZUMSvomEm9XTxWKubZlJ3i7aCHGJhWGWvsD0%2BJZW5bOoqY3OECVClC%2FYFsy1GOMMtuSqZKXCP4xJr0wqMDyNv6tRNL%2BlVWkbFC%2BVM%2FRNiHsM%2BLNLcDX1K6Dw%2BcKQn7niOf4NizoCwyFf8fKRQuhlLXMMmNuSweCUEc6r7rUfzgzfdjSq7pT5nCZj5b6zsJFnttLmje8LOZXt%2FVhU1hkdbNyVxRY6rt9fnlYsiiMq7TQwy6nQQV6l3%2Fan3nWIlJfj7iOjU94lQplqGAB2UVRd9p8ByJztYaT1pA0IZEUlrGEmWcWEc70m9ofW3oZWTbChUo4smuf1jAzQ0AnuNF59Syp9lECCXqGmsI35edJvPM4v0FwWoE8lkw5tqXvwY6pgEs42nopKE3F5SgQNJ54wgt%2B1pJ8Y0TLPFC0Z6cVlbIQ2WyBBHWxmoiEnwZamuyEQ4zRHZfOMIdgGCVaS0YpxTCaqDMD5XX9BUKX%2FmhsuEccOPN%2BNLesvGUd9WXKwOwr%2BDbhVvidSPwO1B5KtGqS3fZg2XoIVGnO3SyRPoPChJ0KhpaZwK9rt10j3gQ%2FmSNnZ6WUS%2Fe5oxOM9%2FSEH7ePlUrot6qwtbw&X-Amz-Signature=dc3f0640b23b4a995a2ee2e2cee55328f02b1c1b9f2e559a6c8459ab1ef6a78e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H72TKGM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGiiBsZpHC3QtlpVH4nu0SkNnoTkWYq8D%2BbT8cr3DUiAiAjd6cA8fUAuiotLW6IDtqMe8fiRdcJfImy5bqtPNGkjir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMM3JtFxl8dqNZ5m3gKtwDjqwB76mJ%2B0j97Qj6qybEMkSDvyhUkh9qNvrJMywKSku0z4WHJvKdcv9z5p6%2FXHly6Edob1fBVPxfBn9BxCirQOEXCpucstQUzisXvTf8rRpX0D9DyysxTRrYLTCU5FMewOVOYUPCzZvuDx3VIky6tn7isygZ1I%2FJWVnrvlximzImxR0REwypXMGnbUstMmbbFt6Xwl3IzwrnAMhRVUBwDCKo4danc4MJ4jFjsNZAVcEZmvhRg1UD8hGKKPXS%2Bhv6T2V7UQZUMSvomEm9XTxWKubZlJ3i7aCHGJhWGWvsD0%2BJZW5bOoqY3OECVClC%2FYFsy1GOMMtuSqZKXCP4xJr0wqMDyNv6tRNL%2BlVWkbFC%2BVM%2FRNiHsM%2BLNLcDX1K6Dw%2BcKQn7niOf4NizoCwyFf8fKRQuhlLXMMmNuSweCUEc6r7rUfzgzfdjSq7pT5nCZj5b6zsJFnttLmje8LOZXt%2FVhU1hkdbNyVxRY6rt9fnlYsiiMq7TQwy6nQQV6l3%2Fan3nWIlJfj7iOjU94lQplqGAB2UVRd9p8ByJztYaT1pA0IZEUlrGEmWcWEc70m9ofW3oZWTbChUo4smuf1jAzQ0AnuNF59Syp9lECCXqGmsI35edJvPM4v0FwWoE8lkw5tqXvwY6pgEs42nopKE3F5SgQNJ54wgt%2B1pJ8Y0TLPFC0Z6cVlbIQ2WyBBHWxmoiEnwZamuyEQ4zRHZfOMIdgGCVaS0YpxTCaqDMD5XX9BUKX%2FmhsuEccOPN%2BNLesvGUd9WXKwOwr%2BDbhVvidSPwO1B5KtGqS3fZg2XoIVGnO3SyRPoPChJ0KhpaZwK9rt10j3gQ%2FmSNnZ6WUS%2Fe5oxOM9%2FSEH7ePlUrot6qwtbw&X-Amz-Signature=89f0c62bea43be433e8455172210d09bcc160a97ec0e3aaca965d79245dd7364&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H72TKGM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGiiBsZpHC3QtlpVH4nu0SkNnoTkWYq8D%2BbT8cr3DUiAiAjd6cA8fUAuiotLW6IDtqMe8fiRdcJfImy5bqtPNGkjir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMM3JtFxl8dqNZ5m3gKtwDjqwB76mJ%2B0j97Qj6qybEMkSDvyhUkh9qNvrJMywKSku0z4WHJvKdcv9z5p6%2FXHly6Edob1fBVPxfBn9BxCirQOEXCpucstQUzisXvTf8rRpX0D9DyysxTRrYLTCU5FMewOVOYUPCzZvuDx3VIky6tn7isygZ1I%2FJWVnrvlximzImxR0REwypXMGnbUstMmbbFt6Xwl3IzwrnAMhRVUBwDCKo4danc4MJ4jFjsNZAVcEZmvhRg1UD8hGKKPXS%2Bhv6T2V7UQZUMSvomEm9XTxWKubZlJ3i7aCHGJhWGWvsD0%2BJZW5bOoqY3OECVClC%2FYFsy1GOMMtuSqZKXCP4xJr0wqMDyNv6tRNL%2BlVWkbFC%2BVM%2FRNiHsM%2BLNLcDX1K6Dw%2BcKQn7niOf4NizoCwyFf8fKRQuhlLXMMmNuSweCUEc6r7rUfzgzfdjSq7pT5nCZj5b6zsJFnttLmje8LOZXt%2FVhU1hkdbNyVxRY6rt9fnlYsiiMq7TQwy6nQQV6l3%2Fan3nWIlJfj7iOjU94lQplqGAB2UVRd9p8ByJztYaT1pA0IZEUlrGEmWcWEc70m9ofW3oZWTbChUo4smuf1jAzQ0AnuNF59Syp9lECCXqGmsI35edJvPM4v0FwWoE8lkw5tqXvwY6pgEs42nopKE3F5SgQNJ54wgt%2B1pJ8Y0TLPFC0Z6cVlbIQ2WyBBHWxmoiEnwZamuyEQ4zRHZfOMIdgGCVaS0YpxTCaqDMD5XX9BUKX%2FmhsuEccOPN%2BNLesvGUd9WXKwOwr%2BDbhVvidSPwO1B5KtGqS3fZg2XoIVGnO3SyRPoPChJ0KhpaZwK9rt10j3gQ%2FmSNnZ6WUS%2Fe5oxOM9%2FSEH7ePlUrot6qwtbw&X-Amz-Signature=2254c7549c83f69a9172ca48b5c1e50ec1940c90d669b6901738a54f8b4a2609&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H72TKGM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAGiiBsZpHC3QtlpVH4nu0SkNnoTkWYq8D%2BbT8cr3DUiAiAjd6cA8fUAuiotLW6IDtqMe8fiRdcJfImy5bqtPNGkjir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMM3JtFxl8dqNZ5m3gKtwDjqwB76mJ%2B0j97Qj6qybEMkSDvyhUkh9qNvrJMywKSku0z4WHJvKdcv9z5p6%2FXHly6Edob1fBVPxfBn9BxCirQOEXCpucstQUzisXvTf8rRpX0D9DyysxTRrYLTCU5FMewOVOYUPCzZvuDx3VIky6tn7isygZ1I%2FJWVnrvlximzImxR0REwypXMGnbUstMmbbFt6Xwl3IzwrnAMhRVUBwDCKo4danc4MJ4jFjsNZAVcEZmvhRg1UD8hGKKPXS%2Bhv6T2V7UQZUMSvomEm9XTxWKubZlJ3i7aCHGJhWGWvsD0%2BJZW5bOoqY3OECVClC%2FYFsy1GOMMtuSqZKXCP4xJr0wqMDyNv6tRNL%2BlVWkbFC%2BVM%2FRNiHsM%2BLNLcDX1K6Dw%2BcKQn7niOf4NizoCwyFf8fKRQuhlLXMMmNuSweCUEc6r7rUfzgzfdjSq7pT5nCZj5b6zsJFnttLmje8LOZXt%2FVhU1hkdbNyVxRY6rt9fnlYsiiMq7TQwy6nQQV6l3%2Fan3nWIlJfj7iOjU94lQplqGAB2UVRd9p8ByJztYaT1pA0IZEUlrGEmWcWEc70m9ofW3oZWTbChUo4smuf1jAzQ0AnuNF59Syp9lECCXqGmsI35edJvPM4v0FwWoE8lkw5tqXvwY6pgEs42nopKE3F5SgQNJ54wgt%2B1pJ8Y0TLPFC0Z6cVlbIQ2WyBBHWxmoiEnwZamuyEQ4zRHZfOMIdgGCVaS0YpxTCaqDMD5XX9BUKX%2FmhsuEccOPN%2BNLesvGUd9WXKwOwr%2BDbhVvidSPwO1B5KtGqS3fZg2XoIVGnO3SyRPoPChJ0KhpaZwK9rt10j3gQ%2FmSNnZ6WUS%2Fe5oxOM9%2FSEH7ePlUrot6qwtbw&X-Amz-Signature=841bb83ee18b7c88366d9cb268e4910c462f8fbcacfa61d558caf633a57611f8&X-Amz-SignedHeaders=host&x-id=GetObject)
