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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRRYCJM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBxAkSzKa%2FoQ4g0oxx2jhb0uPOh56b1x0AlsFzbt4ZVQAiAJx%2FbSui9pieUuhF%2B9aHTexmY8uxXHv895tWp1yj2eKyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMSaPNj%2BW0JFPJv0MIKtwDhCkVjYMMhS0maT9RkiYB6PgbenOA0nvD5kZ8YgJ9fdPBfnXTJbz1PpsAHosMb2wqSrIZkWKxJ7aybNh%2BKogw%2BFnmmFi5IedkvSux4bqIpPxV5sFemh8kkDdhmhIjMhGSkYeh8GSxzjq1iFFNxhPblReZsAxzcT6EHbA%2BwpvNWPF%2B%2FLcPw5pp9KSYGu7m13uDGMHisR1CRUidpfO1NgYh9AEBtIXOii0vimZK9I4ZLewrJBoE0n9g%2FVHkJZFXsFNGbcpS1KVGF28Nw16VIlFTVDSeI5Qc8CvjPvGUv3HJl%2BqbGbZ2QmZCUs2lvzJKqs9BH0Av7VGC0XF7urviLexQlOzuNSHP%2FjFm%2BgjW9EftB5HU%2FMuelyyRPYUt2HIdfSxjPaY%2Ffobgomx8iEeK1cI8J1ue5B7EuhD0HXrVsjIf7dgc6Ly3hIJE%2BGWMrG%2BPq1NMNBcGUf4ZI7fSDmBLPehicYEmRC2slz3MOS3%2B8t3UBqBJsZt8igyUCdEQ9Q923F%2BOr%2FLCpkIqkHkB%2F7vxgGfcNYsnDoSox1JCnD4Pf6bh8L6ewhrmsGtdU86HV%2FetMtUakHQAbBxeE6jF%2FGVvwJcb7xu4kiQKXuBptczROFRTFLlvvkR8Bx%2Fe032zfVEw16uYwQY6pgEjUM8PNFCTR%2BKEV6bJ2i2hwsnZCvix6yO1lFm8fhNPfvzmXZTPFFNVhx%2BrC52YWZPkCGVTrr58uJdTeIIXILUJe2FY7FOWMt7N840ro%2BSLYgRBvyszpTj0KpmDRbjO5IZ3mNGiA1py63cZUF5mx0Cq9SWo%2FKTXcV1zjxsM0nFz%2Ba68UfjKvAO%2B%2BM4kEGss0aAiVZrFdeBJSVDWbKhYv5ikhxn1Qa%2Ff&X-Amz-Signature=5e6b10dec0a4e0a1a8048dd663973fe4d393134195a4cb555d4889987adefd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRRYCJM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBxAkSzKa%2FoQ4g0oxx2jhb0uPOh56b1x0AlsFzbt4ZVQAiAJx%2FbSui9pieUuhF%2B9aHTexmY8uxXHv895tWp1yj2eKyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMSaPNj%2BW0JFPJv0MIKtwDhCkVjYMMhS0maT9RkiYB6PgbenOA0nvD5kZ8YgJ9fdPBfnXTJbz1PpsAHosMb2wqSrIZkWKxJ7aybNh%2BKogw%2BFnmmFi5IedkvSux4bqIpPxV5sFemh8kkDdhmhIjMhGSkYeh8GSxzjq1iFFNxhPblReZsAxzcT6EHbA%2BwpvNWPF%2B%2FLcPw5pp9KSYGu7m13uDGMHisR1CRUidpfO1NgYh9AEBtIXOii0vimZK9I4ZLewrJBoE0n9g%2FVHkJZFXsFNGbcpS1KVGF28Nw16VIlFTVDSeI5Qc8CvjPvGUv3HJl%2BqbGbZ2QmZCUs2lvzJKqs9BH0Av7VGC0XF7urviLexQlOzuNSHP%2FjFm%2BgjW9EftB5HU%2FMuelyyRPYUt2HIdfSxjPaY%2Ffobgomx8iEeK1cI8J1ue5B7EuhD0HXrVsjIf7dgc6Ly3hIJE%2BGWMrG%2BPq1NMNBcGUf4ZI7fSDmBLPehicYEmRC2slz3MOS3%2B8t3UBqBJsZt8igyUCdEQ9Q923F%2BOr%2FLCpkIqkHkB%2F7vxgGfcNYsnDoSox1JCnD4Pf6bh8L6ewhrmsGtdU86HV%2FetMtUakHQAbBxeE6jF%2FGVvwJcb7xu4kiQKXuBptczROFRTFLlvvkR8Bx%2Fe032zfVEw16uYwQY6pgEjUM8PNFCTR%2BKEV6bJ2i2hwsnZCvix6yO1lFm8fhNPfvzmXZTPFFNVhx%2BrC52YWZPkCGVTrr58uJdTeIIXILUJe2FY7FOWMt7N840ro%2BSLYgRBvyszpTj0KpmDRbjO5IZ3mNGiA1py63cZUF5mx0Cq9SWo%2FKTXcV1zjxsM0nFz%2Ba68UfjKvAO%2B%2BM4kEGss0aAiVZrFdeBJSVDWbKhYv5ikhxn1Qa%2Ff&X-Amz-Signature=8b3d88c16311d0c605c0c8d4d635e62b0852419fdd41283295494fbb02377d1f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRRYCJM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBxAkSzKa%2FoQ4g0oxx2jhb0uPOh56b1x0AlsFzbt4ZVQAiAJx%2FbSui9pieUuhF%2B9aHTexmY8uxXHv895tWp1yj2eKyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMSaPNj%2BW0JFPJv0MIKtwDhCkVjYMMhS0maT9RkiYB6PgbenOA0nvD5kZ8YgJ9fdPBfnXTJbz1PpsAHosMb2wqSrIZkWKxJ7aybNh%2BKogw%2BFnmmFi5IedkvSux4bqIpPxV5sFemh8kkDdhmhIjMhGSkYeh8GSxzjq1iFFNxhPblReZsAxzcT6EHbA%2BwpvNWPF%2B%2FLcPw5pp9KSYGu7m13uDGMHisR1CRUidpfO1NgYh9AEBtIXOii0vimZK9I4ZLewrJBoE0n9g%2FVHkJZFXsFNGbcpS1KVGF28Nw16VIlFTVDSeI5Qc8CvjPvGUv3HJl%2BqbGbZ2QmZCUs2lvzJKqs9BH0Av7VGC0XF7urviLexQlOzuNSHP%2FjFm%2BgjW9EftB5HU%2FMuelyyRPYUt2HIdfSxjPaY%2Ffobgomx8iEeK1cI8J1ue5B7EuhD0HXrVsjIf7dgc6Ly3hIJE%2BGWMrG%2BPq1NMNBcGUf4ZI7fSDmBLPehicYEmRC2slz3MOS3%2B8t3UBqBJsZt8igyUCdEQ9Q923F%2BOr%2FLCpkIqkHkB%2F7vxgGfcNYsnDoSox1JCnD4Pf6bh8L6ewhrmsGtdU86HV%2FetMtUakHQAbBxeE6jF%2FGVvwJcb7xu4kiQKXuBptczROFRTFLlvvkR8Bx%2Fe032zfVEw16uYwQY6pgEjUM8PNFCTR%2BKEV6bJ2i2hwsnZCvix6yO1lFm8fhNPfvzmXZTPFFNVhx%2BrC52YWZPkCGVTrr58uJdTeIIXILUJe2FY7FOWMt7N840ro%2BSLYgRBvyszpTj0KpmDRbjO5IZ3mNGiA1py63cZUF5mx0Cq9SWo%2FKTXcV1zjxsM0nFz%2Ba68UfjKvAO%2B%2BM4kEGss0aAiVZrFdeBJSVDWbKhYv5ikhxn1Qa%2Ff&X-Amz-Signature=d29ad5cfb390f7f8772f5185762b5931621e9bc0bf8bfeec4e65fc14f695cf20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRRYCJM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBxAkSzKa%2FoQ4g0oxx2jhb0uPOh56b1x0AlsFzbt4ZVQAiAJx%2FbSui9pieUuhF%2B9aHTexmY8uxXHv895tWp1yj2eKyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMSaPNj%2BW0JFPJv0MIKtwDhCkVjYMMhS0maT9RkiYB6PgbenOA0nvD5kZ8YgJ9fdPBfnXTJbz1PpsAHosMb2wqSrIZkWKxJ7aybNh%2BKogw%2BFnmmFi5IedkvSux4bqIpPxV5sFemh8kkDdhmhIjMhGSkYeh8GSxzjq1iFFNxhPblReZsAxzcT6EHbA%2BwpvNWPF%2B%2FLcPw5pp9KSYGu7m13uDGMHisR1CRUidpfO1NgYh9AEBtIXOii0vimZK9I4ZLewrJBoE0n9g%2FVHkJZFXsFNGbcpS1KVGF28Nw16VIlFTVDSeI5Qc8CvjPvGUv3HJl%2BqbGbZ2QmZCUs2lvzJKqs9BH0Av7VGC0XF7urviLexQlOzuNSHP%2FjFm%2BgjW9EftB5HU%2FMuelyyRPYUt2HIdfSxjPaY%2Ffobgomx8iEeK1cI8J1ue5B7EuhD0HXrVsjIf7dgc6Ly3hIJE%2BGWMrG%2BPq1NMNBcGUf4ZI7fSDmBLPehicYEmRC2slz3MOS3%2B8t3UBqBJsZt8igyUCdEQ9Q923F%2BOr%2FLCpkIqkHkB%2F7vxgGfcNYsnDoSox1JCnD4Pf6bh8L6ewhrmsGtdU86HV%2FetMtUakHQAbBxeE6jF%2FGVvwJcb7xu4kiQKXuBptczROFRTFLlvvkR8Bx%2Fe032zfVEw16uYwQY6pgEjUM8PNFCTR%2BKEV6bJ2i2hwsnZCvix6yO1lFm8fhNPfvzmXZTPFFNVhx%2BrC52YWZPkCGVTrr58uJdTeIIXILUJe2FY7FOWMt7N840ro%2BSLYgRBvyszpTj0KpmDRbjO5IZ3mNGiA1py63cZUF5mx0Cq9SWo%2FKTXcV1zjxsM0nFz%2Ba68UfjKvAO%2B%2BM4kEGss0aAiVZrFdeBJSVDWbKhYv5ikhxn1Qa%2Ff&X-Amz-Signature=2dadab3bfaa03634807adb5b9a37814bc62efa0fb27fc379d47b921c6b72d132&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRRYCJM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBxAkSzKa%2FoQ4g0oxx2jhb0uPOh56b1x0AlsFzbt4ZVQAiAJx%2FbSui9pieUuhF%2B9aHTexmY8uxXHv895tWp1yj2eKyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMSaPNj%2BW0JFPJv0MIKtwDhCkVjYMMhS0maT9RkiYB6PgbenOA0nvD5kZ8YgJ9fdPBfnXTJbz1PpsAHosMb2wqSrIZkWKxJ7aybNh%2BKogw%2BFnmmFi5IedkvSux4bqIpPxV5sFemh8kkDdhmhIjMhGSkYeh8GSxzjq1iFFNxhPblReZsAxzcT6EHbA%2BwpvNWPF%2B%2FLcPw5pp9KSYGu7m13uDGMHisR1CRUidpfO1NgYh9AEBtIXOii0vimZK9I4ZLewrJBoE0n9g%2FVHkJZFXsFNGbcpS1KVGF28Nw16VIlFTVDSeI5Qc8CvjPvGUv3HJl%2BqbGbZ2QmZCUs2lvzJKqs9BH0Av7VGC0XF7urviLexQlOzuNSHP%2FjFm%2BgjW9EftB5HU%2FMuelyyRPYUt2HIdfSxjPaY%2Ffobgomx8iEeK1cI8J1ue5B7EuhD0HXrVsjIf7dgc6Ly3hIJE%2BGWMrG%2BPq1NMNBcGUf4ZI7fSDmBLPehicYEmRC2slz3MOS3%2B8t3UBqBJsZt8igyUCdEQ9Q923F%2BOr%2FLCpkIqkHkB%2F7vxgGfcNYsnDoSox1JCnD4Pf6bh8L6ewhrmsGtdU86HV%2FetMtUakHQAbBxeE6jF%2FGVvwJcb7xu4kiQKXuBptczROFRTFLlvvkR8Bx%2Fe032zfVEw16uYwQY6pgEjUM8PNFCTR%2BKEV6bJ2i2hwsnZCvix6yO1lFm8fhNPfvzmXZTPFFNVhx%2BrC52YWZPkCGVTrr58uJdTeIIXILUJe2FY7FOWMt7N840ro%2BSLYgRBvyszpTj0KpmDRbjO5IZ3mNGiA1py63cZUF5mx0Cq9SWo%2FKTXcV1zjxsM0nFz%2Ba68UfjKvAO%2B%2BM4kEGss0aAiVZrFdeBJSVDWbKhYv5ikhxn1Qa%2Ff&X-Amz-Signature=a082279e4a33feebca36d42464444593304a8072a707141f7d09a3112e4e19a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GRRYCJM%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIBxAkSzKa%2FoQ4g0oxx2jhb0uPOh56b1x0AlsFzbt4ZVQAiAJx%2FbSui9pieUuhF%2B9aHTexmY8uxXHv895tWp1yj2eKyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMSaPNj%2BW0JFPJv0MIKtwDhCkVjYMMhS0maT9RkiYB6PgbenOA0nvD5kZ8YgJ9fdPBfnXTJbz1PpsAHosMb2wqSrIZkWKxJ7aybNh%2BKogw%2BFnmmFi5IedkvSux4bqIpPxV5sFemh8kkDdhmhIjMhGSkYeh8GSxzjq1iFFNxhPblReZsAxzcT6EHbA%2BwpvNWPF%2B%2FLcPw5pp9KSYGu7m13uDGMHisR1CRUidpfO1NgYh9AEBtIXOii0vimZK9I4ZLewrJBoE0n9g%2FVHkJZFXsFNGbcpS1KVGF28Nw16VIlFTVDSeI5Qc8CvjPvGUv3HJl%2BqbGbZ2QmZCUs2lvzJKqs9BH0Av7VGC0XF7urviLexQlOzuNSHP%2FjFm%2BgjW9EftB5HU%2FMuelyyRPYUt2HIdfSxjPaY%2Ffobgomx8iEeK1cI8J1ue5B7EuhD0HXrVsjIf7dgc6Ly3hIJE%2BGWMrG%2BPq1NMNBcGUf4ZI7fSDmBLPehicYEmRC2slz3MOS3%2B8t3UBqBJsZt8igyUCdEQ9Q923F%2BOr%2FLCpkIqkHkB%2F7vxgGfcNYsnDoSox1JCnD4Pf6bh8L6ewhrmsGtdU86HV%2FetMtUakHQAbBxeE6jF%2FGVvwJcb7xu4kiQKXuBptczROFRTFLlvvkR8Bx%2Fe032zfVEw16uYwQY6pgEjUM8PNFCTR%2BKEV6bJ2i2hwsnZCvix6yO1lFm8fhNPfvzmXZTPFFNVhx%2BrC52YWZPkCGVTrr58uJdTeIIXILUJe2FY7FOWMt7N840ro%2BSLYgRBvyszpTj0KpmDRbjO5IZ3mNGiA1py63cZUF5mx0Cq9SWo%2FKTXcV1zjxsM0nFz%2Ba68UfjKvAO%2B%2BM4kEGss0aAiVZrFdeBJSVDWbKhYv5ikhxn1Qa%2Ff&X-Amz-Signature=c3df0be703fc85c0a513ec4ddd716474d446bf95e657def693979567f470026d&X-Amz-SignedHeaders=host&x-id=GetObject)
