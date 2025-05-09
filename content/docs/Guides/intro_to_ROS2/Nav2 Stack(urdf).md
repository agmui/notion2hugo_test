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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBX2VN3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3YQnvJU5F1osEW1tplfiO1q2Eu4CBjtsda4Q%2F2XG%2FxgIhAKGezshkyvD7M89d75CSUz3dCBm%2BcSpAHvP6ajh74sROKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsx34nBh78dQsMaDIq3AM%2FSLMggCKPSBizWEpMBF73izzkPnyRYmvGsHa7j80ndHx3tt6qwSSKSjbHodl%2B2F6hJqElVERY4qRxPdbQ%2B%2B0gELTEqfj2w5C0FGAkfCCzKYF%2FYTCxsj1BIii7r1ovKP2aD15FbfmdzailPLeM66jVfJglyUyZ0tIUZIAPggG%2FkPBQ6hr%2FKE6jgRVV2jm%2BrCdhW%2FCxT1ldhmOTYSR4LMEw%2BnocigtcY3%2FhDG7rHsrxonAVtIHKXje5H6uG2H8ShSipcJl%2BFL7E8ieCevULizQ2NO5FQWBBC0VDTMcX%2FgPB%2BwtaJSQfLEnzlcGf9QdD0LJBtd2oHb29BfYZseYDe3pAaFj0Czi%2FbfWU%2B8jsJ5bRnpZxPvUtcx6uyc%2F%2FdQNIMjtyj87v0R0yhCptAdzn%2FVV%2BP7vN4bcqNKmGzWMQcNKB%2FZTV03YDY%2Fo6GVOhV26GupDFcBI7Vpg8HUpSLth6k1aIyClypwsxJnQ%2FtZOY%2F5qQncIfsHJIoZVJdB2mb2%2FWpCFJcvfLLb4OFp2bEYk1haXpCAUb%2FkOYGZWWXwxYY8is%2FZqvNFNAY86leSrHgj5cNFVpV0twA1UaFREa5sA5AJ20K1k%2F%2F7%2BoHkmMDvXIV2Y1NZRY2XVh9sZAa4rD8jCP8PjABjqkATf2mIdJjQ2rRUOoxzwGldc6pMYB9SH1o77XuuD02rhVq50UjCpG5oDC5rif3%2FQjrfGGSNkruj4%2Fa5EEIBlS2GtRQdjZHFOz3zjpHWfL8tRB8RleOFFMy377uDUpqxisLc1euZodQt6aFpHpFEgHMgMBDCJqOGqN0AbwcH%2BRmQWyM5W4kYB8HgZzZxq9%2FBUgtsIWSRIn43G5mqzbn1eG9nD2xGUT&X-Amz-Signature=fe6f7add64e6f1a25c6db3a1a62dd46509ec561f46c3c91cffa1a0b0f1494c41&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBX2VN3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3YQnvJU5F1osEW1tplfiO1q2Eu4CBjtsda4Q%2F2XG%2FxgIhAKGezshkyvD7M89d75CSUz3dCBm%2BcSpAHvP6ajh74sROKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsx34nBh78dQsMaDIq3AM%2FSLMggCKPSBizWEpMBF73izzkPnyRYmvGsHa7j80ndHx3tt6qwSSKSjbHodl%2B2F6hJqElVERY4qRxPdbQ%2B%2B0gELTEqfj2w5C0FGAkfCCzKYF%2FYTCxsj1BIii7r1ovKP2aD15FbfmdzailPLeM66jVfJglyUyZ0tIUZIAPggG%2FkPBQ6hr%2FKE6jgRVV2jm%2BrCdhW%2FCxT1ldhmOTYSR4LMEw%2BnocigtcY3%2FhDG7rHsrxonAVtIHKXje5H6uG2H8ShSipcJl%2BFL7E8ieCevULizQ2NO5FQWBBC0VDTMcX%2FgPB%2BwtaJSQfLEnzlcGf9QdD0LJBtd2oHb29BfYZseYDe3pAaFj0Czi%2FbfWU%2B8jsJ5bRnpZxPvUtcx6uyc%2F%2FdQNIMjtyj87v0R0yhCptAdzn%2FVV%2BP7vN4bcqNKmGzWMQcNKB%2FZTV03YDY%2Fo6GVOhV26GupDFcBI7Vpg8HUpSLth6k1aIyClypwsxJnQ%2FtZOY%2F5qQncIfsHJIoZVJdB2mb2%2FWpCFJcvfLLb4OFp2bEYk1haXpCAUb%2FkOYGZWWXwxYY8is%2FZqvNFNAY86leSrHgj5cNFVpV0twA1UaFREa5sA5AJ20K1k%2F%2F7%2BoHkmMDvXIV2Y1NZRY2XVh9sZAa4rD8jCP8PjABjqkATf2mIdJjQ2rRUOoxzwGldc6pMYB9SH1o77XuuD02rhVq50UjCpG5oDC5rif3%2FQjrfGGSNkruj4%2Fa5EEIBlS2GtRQdjZHFOz3zjpHWfL8tRB8RleOFFMy377uDUpqxisLc1euZodQt6aFpHpFEgHMgMBDCJqOGqN0AbwcH%2BRmQWyM5W4kYB8HgZzZxq9%2FBUgtsIWSRIn43G5mqzbn1eG9nD2xGUT&X-Amz-Signature=9507dcc1aaf66078a37430fafa8d7e4da5fcba271d9394afbfa6a8d426bb47b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBX2VN3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3YQnvJU5F1osEW1tplfiO1q2Eu4CBjtsda4Q%2F2XG%2FxgIhAKGezshkyvD7M89d75CSUz3dCBm%2BcSpAHvP6ajh74sROKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsx34nBh78dQsMaDIq3AM%2FSLMggCKPSBizWEpMBF73izzkPnyRYmvGsHa7j80ndHx3tt6qwSSKSjbHodl%2B2F6hJqElVERY4qRxPdbQ%2B%2B0gELTEqfj2w5C0FGAkfCCzKYF%2FYTCxsj1BIii7r1ovKP2aD15FbfmdzailPLeM66jVfJglyUyZ0tIUZIAPggG%2FkPBQ6hr%2FKE6jgRVV2jm%2BrCdhW%2FCxT1ldhmOTYSR4LMEw%2BnocigtcY3%2FhDG7rHsrxonAVtIHKXje5H6uG2H8ShSipcJl%2BFL7E8ieCevULizQ2NO5FQWBBC0VDTMcX%2FgPB%2BwtaJSQfLEnzlcGf9QdD0LJBtd2oHb29BfYZseYDe3pAaFj0Czi%2FbfWU%2B8jsJ5bRnpZxPvUtcx6uyc%2F%2FdQNIMjtyj87v0R0yhCptAdzn%2FVV%2BP7vN4bcqNKmGzWMQcNKB%2FZTV03YDY%2Fo6GVOhV26GupDFcBI7Vpg8HUpSLth6k1aIyClypwsxJnQ%2FtZOY%2F5qQncIfsHJIoZVJdB2mb2%2FWpCFJcvfLLb4OFp2bEYk1haXpCAUb%2FkOYGZWWXwxYY8is%2FZqvNFNAY86leSrHgj5cNFVpV0twA1UaFREa5sA5AJ20K1k%2F%2F7%2BoHkmMDvXIV2Y1NZRY2XVh9sZAa4rD8jCP8PjABjqkATf2mIdJjQ2rRUOoxzwGldc6pMYB9SH1o77XuuD02rhVq50UjCpG5oDC5rif3%2FQjrfGGSNkruj4%2Fa5EEIBlS2GtRQdjZHFOz3zjpHWfL8tRB8RleOFFMy377uDUpqxisLc1euZodQt6aFpHpFEgHMgMBDCJqOGqN0AbwcH%2BRmQWyM5W4kYB8HgZzZxq9%2FBUgtsIWSRIn43G5mqzbn1eG9nD2xGUT&X-Amz-Signature=c512e03054acea368b91e4b1aeabfa3746ca51f7d9116f744ea4838bd4c04dfc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBX2VN3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3YQnvJU5F1osEW1tplfiO1q2Eu4CBjtsda4Q%2F2XG%2FxgIhAKGezshkyvD7M89d75CSUz3dCBm%2BcSpAHvP6ajh74sROKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsx34nBh78dQsMaDIq3AM%2FSLMggCKPSBizWEpMBF73izzkPnyRYmvGsHa7j80ndHx3tt6qwSSKSjbHodl%2B2F6hJqElVERY4qRxPdbQ%2B%2B0gELTEqfj2w5C0FGAkfCCzKYF%2FYTCxsj1BIii7r1ovKP2aD15FbfmdzailPLeM66jVfJglyUyZ0tIUZIAPggG%2FkPBQ6hr%2FKE6jgRVV2jm%2BrCdhW%2FCxT1ldhmOTYSR4LMEw%2BnocigtcY3%2FhDG7rHsrxonAVtIHKXje5H6uG2H8ShSipcJl%2BFL7E8ieCevULizQ2NO5FQWBBC0VDTMcX%2FgPB%2BwtaJSQfLEnzlcGf9QdD0LJBtd2oHb29BfYZseYDe3pAaFj0Czi%2FbfWU%2B8jsJ5bRnpZxPvUtcx6uyc%2F%2FdQNIMjtyj87v0R0yhCptAdzn%2FVV%2BP7vN4bcqNKmGzWMQcNKB%2FZTV03YDY%2Fo6GVOhV26GupDFcBI7Vpg8HUpSLth6k1aIyClypwsxJnQ%2FtZOY%2F5qQncIfsHJIoZVJdB2mb2%2FWpCFJcvfLLb4OFp2bEYk1haXpCAUb%2FkOYGZWWXwxYY8is%2FZqvNFNAY86leSrHgj5cNFVpV0twA1UaFREa5sA5AJ20K1k%2F%2F7%2BoHkmMDvXIV2Y1NZRY2XVh9sZAa4rD8jCP8PjABjqkATf2mIdJjQ2rRUOoxzwGldc6pMYB9SH1o77XuuD02rhVq50UjCpG5oDC5rif3%2FQjrfGGSNkruj4%2Fa5EEIBlS2GtRQdjZHFOz3zjpHWfL8tRB8RleOFFMy377uDUpqxisLc1euZodQt6aFpHpFEgHMgMBDCJqOGqN0AbwcH%2BRmQWyM5W4kYB8HgZzZxq9%2FBUgtsIWSRIn43G5mqzbn1eG9nD2xGUT&X-Amz-Signature=4534910d7cf6555bd206a9f7924a1983857c17cd9c9475e5412e37ab9018c0a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBX2VN3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3YQnvJU5F1osEW1tplfiO1q2Eu4CBjtsda4Q%2F2XG%2FxgIhAKGezshkyvD7M89d75CSUz3dCBm%2BcSpAHvP6ajh74sROKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsx34nBh78dQsMaDIq3AM%2FSLMggCKPSBizWEpMBF73izzkPnyRYmvGsHa7j80ndHx3tt6qwSSKSjbHodl%2B2F6hJqElVERY4qRxPdbQ%2B%2B0gELTEqfj2w5C0FGAkfCCzKYF%2FYTCxsj1BIii7r1ovKP2aD15FbfmdzailPLeM66jVfJglyUyZ0tIUZIAPggG%2FkPBQ6hr%2FKE6jgRVV2jm%2BrCdhW%2FCxT1ldhmOTYSR4LMEw%2BnocigtcY3%2FhDG7rHsrxonAVtIHKXje5H6uG2H8ShSipcJl%2BFL7E8ieCevULizQ2NO5FQWBBC0VDTMcX%2FgPB%2BwtaJSQfLEnzlcGf9QdD0LJBtd2oHb29BfYZseYDe3pAaFj0Czi%2FbfWU%2B8jsJ5bRnpZxPvUtcx6uyc%2F%2FdQNIMjtyj87v0R0yhCptAdzn%2FVV%2BP7vN4bcqNKmGzWMQcNKB%2FZTV03YDY%2Fo6GVOhV26GupDFcBI7Vpg8HUpSLth6k1aIyClypwsxJnQ%2FtZOY%2F5qQncIfsHJIoZVJdB2mb2%2FWpCFJcvfLLb4OFp2bEYk1haXpCAUb%2FkOYGZWWXwxYY8is%2FZqvNFNAY86leSrHgj5cNFVpV0twA1UaFREa5sA5AJ20K1k%2F%2F7%2BoHkmMDvXIV2Y1NZRY2XVh9sZAa4rD8jCP8PjABjqkATf2mIdJjQ2rRUOoxzwGldc6pMYB9SH1o77XuuD02rhVq50UjCpG5oDC5rif3%2FQjrfGGSNkruj4%2Fa5EEIBlS2GtRQdjZHFOz3zjpHWfL8tRB8RleOFFMy377uDUpqxisLc1euZodQt6aFpHpFEgHMgMBDCJqOGqN0AbwcH%2BRmQWyM5W4kYB8HgZzZxq9%2FBUgtsIWSRIn43G5mqzbn1eG9nD2xGUT&X-Amz-Signature=e36d34cc9dc45e64c32ff598d421728ea3ea5fd2a648d5a5653fedcb8ce33f08&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDBX2VN3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3YQnvJU5F1osEW1tplfiO1q2Eu4CBjtsda4Q%2F2XG%2FxgIhAKGezshkyvD7M89d75CSUz3dCBm%2BcSpAHvP6ajh74sROKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsx34nBh78dQsMaDIq3AM%2FSLMggCKPSBizWEpMBF73izzkPnyRYmvGsHa7j80ndHx3tt6qwSSKSjbHodl%2B2F6hJqElVERY4qRxPdbQ%2B%2B0gELTEqfj2w5C0FGAkfCCzKYF%2FYTCxsj1BIii7r1ovKP2aD15FbfmdzailPLeM66jVfJglyUyZ0tIUZIAPggG%2FkPBQ6hr%2FKE6jgRVV2jm%2BrCdhW%2FCxT1ldhmOTYSR4LMEw%2BnocigtcY3%2FhDG7rHsrxonAVtIHKXje5H6uG2H8ShSipcJl%2BFL7E8ieCevULizQ2NO5FQWBBC0VDTMcX%2FgPB%2BwtaJSQfLEnzlcGf9QdD0LJBtd2oHb29BfYZseYDe3pAaFj0Czi%2FbfWU%2B8jsJ5bRnpZxPvUtcx6uyc%2F%2FdQNIMjtyj87v0R0yhCptAdzn%2FVV%2BP7vN4bcqNKmGzWMQcNKB%2FZTV03YDY%2Fo6GVOhV26GupDFcBI7Vpg8HUpSLth6k1aIyClypwsxJnQ%2FtZOY%2F5qQncIfsHJIoZVJdB2mb2%2FWpCFJcvfLLb4OFp2bEYk1haXpCAUb%2FkOYGZWWXwxYY8is%2FZqvNFNAY86leSrHgj5cNFVpV0twA1UaFREa5sA5AJ20K1k%2F%2F7%2BoHkmMDvXIV2Y1NZRY2XVh9sZAa4rD8jCP8PjABjqkATf2mIdJjQ2rRUOoxzwGldc6pMYB9SH1o77XuuD02rhVq50UjCpG5oDC5rif3%2FQjrfGGSNkruj4%2Fa5EEIBlS2GtRQdjZHFOz3zjpHWfL8tRB8RleOFFMy377uDUpqxisLc1euZodQt6aFpHpFEgHMgMBDCJqOGqN0AbwcH%2BRmQWyM5W4kYB8HgZzZxq9%2FBUgtsIWSRIn43G5mqzbn1eG9nD2xGUT&X-Amz-Signature=ce172408e26005a425af636ea82c3341992afd549b00bced64a059ff5da72824&X-Amz-SignedHeaders=host&x-id=GetObject)
