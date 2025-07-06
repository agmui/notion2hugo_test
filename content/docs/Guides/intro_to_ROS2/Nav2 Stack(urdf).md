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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJWEKEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHxVc1vnt%2BJLtveI6%2Bl3kS6q9hThi7LdxrUcWVwnvKpMAiEAjhV6vddgVHxSUQCL9ZEfl1Wj13XI%2BztY8QDvhtImGzMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP%2F%2FaygtFYrPSG2K%2FCrcAyjQ9YpMGT3ASPBU60b9mGjaHi9hQlwZ0wAY%2FpKVsmWM23nvyfHNUb8xJKyi5EFQR4LGDwgGsatY0QDYPIzOodYqAB%2BDIz4hb8n7I6orDjpuasjRfCNykoqE2NxTuVTpqaRlEZwhsTk652kAy%2FkxJrJBw1ZJmApUe8lLBfK2miFpD5FCcXM9iZ%2FdQSSArZA8swVkd4n7b6GKQlodAXd9ExfhGc7xi4UQLfD7a6CBFhpzqbAf9EztJHl4HX3Ih1UJ28VHlO%2Ffd2VwjJm9LcWbGVLgrdWE6gA8OxxhfP8JutnMHeho1SInc42PE6ib517fqY7jcS8JwUU0xTgGObQ3EfEx%2Fn76x8f%2BhrjnpgCRNfFX5jtI44c%2B%2FylEW8bt8U1cy3MwophJm6n%2FM6dP%2B9dHvNg%2B8%2BbgA3F8ZtjD896g5GjZ8ceddhos1RFKHOOlnSM0yTg3ZydIb2jN36IFE%2B852kuOLXebYABB5w2Oj6jCHK6ULik5ZjLDsd4KD1V1m1wjs0u03mgMpqKuNpjq%2BzgOFQpjIu8Z2PWaJM9uqY7jVS%2FfW4YbaOZpXAPHAmBz42Bntz7jaAWSpdONaEZJBzMy4PcE5pw%2FcWcXLEAOKdbbAa0dgsk%2FvelfD7RZHr0pMK%2FSqcMGOqUB0EKl0oE3hx9FbxyICJpHXUyZDU1esqV54wqs5Td1HBgLReWq%2FEOYYTP7ZdxD%2FhO%2BsrPP39CRt3baXDwlih18Te6lpB36tNNkRsq76wx8jjWmvyRRtc%2BnsVoeiKXRennW3KxHxwmpUz6HpWj%2BW9pTpTh5ZXBxli0hAjcPPupKxr%2F7GxkXlIR7tSpcJ%2Fx8RTmHMtN0rFMoDvC1FRKlI4PyCxs8%2FbMp&X-Amz-Signature=1dcf9db43845a6345608a6d90fc45231d9be580085d848d0a8ddd1c2888dbbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJWEKEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHxVc1vnt%2BJLtveI6%2Bl3kS6q9hThi7LdxrUcWVwnvKpMAiEAjhV6vddgVHxSUQCL9ZEfl1Wj13XI%2BztY8QDvhtImGzMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP%2F%2FaygtFYrPSG2K%2FCrcAyjQ9YpMGT3ASPBU60b9mGjaHi9hQlwZ0wAY%2FpKVsmWM23nvyfHNUb8xJKyi5EFQR4LGDwgGsatY0QDYPIzOodYqAB%2BDIz4hb8n7I6orDjpuasjRfCNykoqE2NxTuVTpqaRlEZwhsTk652kAy%2FkxJrJBw1ZJmApUe8lLBfK2miFpD5FCcXM9iZ%2FdQSSArZA8swVkd4n7b6GKQlodAXd9ExfhGc7xi4UQLfD7a6CBFhpzqbAf9EztJHl4HX3Ih1UJ28VHlO%2Ffd2VwjJm9LcWbGVLgrdWE6gA8OxxhfP8JutnMHeho1SInc42PE6ib517fqY7jcS8JwUU0xTgGObQ3EfEx%2Fn76x8f%2BhrjnpgCRNfFX5jtI44c%2B%2FylEW8bt8U1cy3MwophJm6n%2FM6dP%2B9dHvNg%2B8%2BbgA3F8ZtjD896g5GjZ8ceddhos1RFKHOOlnSM0yTg3ZydIb2jN36IFE%2B852kuOLXebYABB5w2Oj6jCHK6ULik5ZjLDsd4KD1V1m1wjs0u03mgMpqKuNpjq%2BzgOFQpjIu8Z2PWaJM9uqY7jVS%2FfW4YbaOZpXAPHAmBz42Bntz7jaAWSpdONaEZJBzMy4PcE5pw%2FcWcXLEAOKdbbAa0dgsk%2FvelfD7RZHr0pMK%2FSqcMGOqUB0EKl0oE3hx9FbxyICJpHXUyZDU1esqV54wqs5Td1HBgLReWq%2FEOYYTP7ZdxD%2FhO%2BsrPP39CRt3baXDwlih18Te6lpB36tNNkRsq76wx8jjWmvyRRtc%2BnsVoeiKXRennW3KxHxwmpUz6HpWj%2BW9pTpTh5ZXBxli0hAjcPPupKxr%2F7GxkXlIR7tSpcJ%2Fx8RTmHMtN0rFMoDvC1FRKlI4PyCxs8%2FbMp&X-Amz-Signature=7c23528ec8a4a8c72f24d162332c6bced112f0a6c0e7e79ef42f82fbec0a3ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJWEKEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHxVc1vnt%2BJLtveI6%2Bl3kS6q9hThi7LdxrUcWVwnvKpMAiEAjhV6vddgVHxSUQCL9ZEfl1Wj13XI%2BztY8QDvhtImGzMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP%2F%2FaygtFYrPSG2K%2FCrcAyjQ9YpMGT3ASPBU60b9mGjaHi9hQlwZ0wAY%2FpKVsmWM23nvyfHNUb8xJKyi5EFQR4LGDwgGsatY0QDYPIzOodYqAB%2BDIz4hb8n7I6orDjpuasjRfCNykoqE2NxTuVTpqaRlEZwhsTk652kAy%2FkxJrJBw1ZJmApUe8lLBfK2miFpD5FCcXM9iZ%2FdQSSArZA8swVkd4n7b6GKQlodAXd9ExfhGc7xi4UQLfD7a6CBFhpzqbAf9EztJHl4HX3Ih1UJ28VHlO%2Ffd2VwjJm9LcWbGVLgrdWE6gA8OxxhfP8JutnMHeho1SInc42PE6ib517fqY7jcS8JwUU0xTgGObQ3EfEx%2Fn76x8f%2BhrjnpgCRNfFX5jtI44c%2B%2FylEW8bt8U1cy3MwophJm6n%2FM6dP%2B9dHvNg%2B8%2BbgA3F8ZtjD896g5GjZ8ceddhos1RFKHOOlnSM0yTg3ZydIb2jN36IFE%2B852kuOLXebYABB5w2Oj6jCHK6ULik5ZjLDsd4KD1V1m1wjs0u03mgMpqKuNpjq%2BzgOFQpjIu8Z2PWaJM9uqY7jVS%2FfW4YbaOZpXAPHAmBz42Bntz7jaAWSpdONaEZJBzMy4PcE5pw%2FcWcXLEAOKdbbAa0dgsk%2FvelfD7RZHr0pMK%2FSqcMGOqUB0EKl0oE3hx9FbxyICJpHXUyZDU1esqV54wqs5Td1HBgLReWq%2FEOYYTP7ZdxD%2FhO%2BsrPP39CRt3baXDwlih18Te6lpB36tNNkRsq76wx8jjWmvyRRtc%2BnsVoeiKXRennW3KxHxwmpUz6HpWj%2BW9pTpTh5ZXBxli0hAjcPPupKxr%2F7GxkXlIR7tSpcJ%2Fx8RTmHMtN0rFMoDvC1FRKlI4PyCxs8%2FbMp&X-Amz-Signature=f5a88012555de20c7aaf6d795e320a8fcc4e9f00a47032b049dd533f87872a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJWEKEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHxVc1vnt%2BJLtveI6%2Bl3kS6q9hThi7LdxrUcWVwnvKpMAiEAjhV6vddgVHxSUQCL9ZEfl1Wj13XI%2BztY8QDvhtImGzMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP%2F%2FaygtFYrPSG2K%2FCrcAyjQ9YpMGT3ASPBU60b9mGjaHi9hQlwZ0wAY%2FpKVsmWM23nvyfHNUb8xJKyi5EFQR4LGDwgGsatY0QDYPIzOodYqAB%2BDIz4hb8n7I6orDjpuasjRfCNykoqE2NxTuVTpqaRlEZwhsTk652kAy%2FkxJrJBw1ZJmApUe8lLBfK2miFpD5FCcXM9iZ%2FdQSSArZA8swVkd4n7b6GKQlodAXd9ExfhGc7xi4UQLfD7a6CBFhpzqbAf9EztJHl4HX3Ih1UJ28VHlO%2Ffd2VwjJm9LcWbGVLgrdWE6gA8OxxhfP8JutnMHeho1SInc42PE6ib517fqY7jcS8JwUU0xTgGObQ3EfEx%2Fn76x8f%2BhrjnpgCRNfFX5jtI44c%2B%2FylEW8bt8U1cy3MwophJm6n%2FM6dP%2B9dHvNg%2B8%2BbgA3F8ZtjD896g5GjZ8ceddhos1RFKHOOlnSM0yTg3ZydIb2jN36IFE%2B852kuOLXebYABB5w2Oj6jCHK6ULik5ZjLDsd4KD1V1m1wjs0u03mgMpqKuNpjq%2BzgOFQpjIu8Z2PWaJM9uqY7jVS%2FfW4YbaOZpXAPHAmBz42Bntz7jaAWSpdONaEZJBzMy4PcE5pw%2FcWcXLEAOKdbbAa0dgsk%2FvelfD7RZHr0pMK%2FSqcMGOqUB0EKl0oE3hx9FbxyICJpHXUyZDU1esqV54wqs5Td1HBgLReWq%2FEOYYTP7ZdxD%2FhO%2BsrPP39CRt3baXDwlih18Te6lpB36tNNkRsq76wx8jjWmvyRRtc%2BnsVoeiKXRennW3KxHxwmpUz6HpWj%2BW9pTpTh5ZXBxli0hAjcPPupKxr%2F7GxkXlIR7tSpcJ%2Fx8RTmHMtN0rFMoDvC1FRKlI4PyCxs8%2FbMp&X-Amz-Signature=c5b5da798db1ac952461d2a664985d8751a3b26c9d2ffe473cd48da537a8e746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJWEKEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHxVc1vnt%2BJLtveI6%2Bl3kS6q9hThi7LdxrUcWVwnvKpMAiEAjhV6vddgVHxSUQCL9ZEfl1Wj13XI%2BztY8QDvhtImGzMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP%2F%2FaygtFYrPSG2K%2FCrcAyjQ9YpMGT3ASPBU60b9mGjaHi9hQlwZ0wAY%2FpKVsmWM23nvyfHNUb8xJKyi5EFQR4LGDwgGsatY0QDYPIzOodYqAB%2BDIz4hb8n7I6orDjpuasjRfCNykoqE2NxTuVTpqaRlEZwhsTk652kAy%2FkxJrJBw1ZJmApUe8lLBfK2miFpD5FCcXM9iZ%2FdQSSArZA8swVkd4n7b6GKQlodAXd9ExfhGc7xi4UQLfD7a6CBFhpzqbAf9EztJHl4HX3Ih1UJ28VHlO%2Ffd2VwjJm9LcWbGVLgrdWE6gA8OxxhfP8JutnMHeho1SInc42PE6ib517fqY7jcS8JwUU0xTgGObQ3EfEx%2Fn76x8f%2BhrjnpgCRNfFX5jtI44c%2B%2FylEW8bt8U1cy3MwophJm6n%2FM6dP%2B9dHvNg%2B8%2BbgA3F8ZtjD896g5GjZ8ceddhos1RFKHOOlnSM0yTg3ZydIb2jN36IFE%2B852kuOLXebYABB5w2Oj6jCHK6ULik5ZjLDsd4KD1V1m1wjs0u03mgMpqKuNpjq%2BzgOFQpjIu8Z2PWaJM9uqY7jVS%2FfW4YbaOZpXAPHAmBz42Bntz7jaAWSpdONaEZJBzMy4PcE5pw%2FcWcXLEAOKdbbAa0dgsk%2FvelfD7RZHr0pMK%2FSqcMGOqUB0EKl0oE3hx9FbxyICJpHXUyZDU1esqV54wqs5Td1HBgLReWq%2FEOYYTP7ZdxD%2FhO%2BsrPP39CRt3baXDwlih18Te6lpB36tNNkRsq76wx8jjWmvyRRtc%2BnsVoeiKXRennW3KxHxwmpUz6HpWj%2BW9pTpTh5ZXBxli0hAjcPPupKxr%2F7GxkXlIR7tSpcJ%2Fx8RTmHMtN0rFMoDvC1FRKlI4PyCxs8%2FbMp&X-Amz-Signature=cae6f37067a67f34c1bacd837992285fe79a798dbe557654b9595a5c5dc509f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTJWEKEG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIHxVc1vnt%2BJLtveI6%2Bl3kS6q9hThi7LdxrUcWVwnvKpMAiEAjhV6vddgVHxSUQCL9ZEfl1Wj13XI%2BztY8QDvhtImGzMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDP%2F%2FaygtFYrPSG2K%2FCrcAyjQ9YpMGT3ASPBU60b9mGjaHi9hQlwZ0wAY%2FpKVsmWM23nvyfHNUb8xJKyi5EFQR4LGDwgGsatY0QDYPIzOodYqAB%2BDIz4hb8n7I6orDjpuasjRfCNykoqE2NxTuVTpqaRlEZwhsTk652kAy%2FkxJrJBw1ZJmApUe8lLBfK2miFpD5FCcXM9iZ%2FdQSSArZA8swVkd4n7b6GKQlodAXd9ExfhGc7xi4UQLfD7a6CBFhpzqbAf9EztJHl4HX3Ih1UJ28VHlO%2Ffd2VwjJm9LcWbGVLgrdWE6gA8OxxhfP8JutnMHeho1SInc42PE6ib517fqY7jcS8JwUU0xTgGObQ3EfEx%2Fn76x8f%2BhrjnpgCRNfFX5jtI44c%2B%2FylEW8bt8U1cy3MwophJm6n%2FM6dP%2B9dHvNg%2B8%2BbgA3F8ZtjD896g5GjZ8ceddhos1RFKHOOlnSM0yTg3ZydIb2jN36IFE%2B852kuOLXebYABB5w2Oj6jCHK6ULik5ZjLDsd4KD1V1m1wjs0u03mgMpqKuNpjq%2BzgOFQpjIu8Z2PWaJM9uqY7jVS%2FfW4YbaOZpXAPHAmBz42Bntz7jaAWSpdONaEZJBzMy4PcE5pw%2FcWcXLEAOKdbbAa0dgsk%2FvelfD7RZHr0pMK%2FSqcMGOqUB0EKl0oE3hx9FbxyICJpHXUyZDU1esqV54wqs5Td1HBgLReWq%2FEOYYTP7ZdxD%2FhO%2BsrPP39CRt3baXDwlih18Te6lpB36tNNkRsq76wx8jjWmvyRRtc%2BnsVoeiKXRennW3KxHxwmpUz6HpWj%2BW9pTpTh5ZXBxli0hAjcPPupKxr%2F7GxkXlIR7tSpcJ%2Fx8RTmHMtN0rFMoDvC1FRKlI4PyCxs8%2FbMp&X-Amz-Signature=37fa0918e81cc2a4e6bc5c3bc237583ff2cb4dcc5bdfde8f87c016927dc1bbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
