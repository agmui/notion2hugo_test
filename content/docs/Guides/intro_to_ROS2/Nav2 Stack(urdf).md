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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGGV7NO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKyK4eULYaSK02Cprc%2BIeL7VH81u4VgvJiVibsSL2MGwIhAK1WQLvN%2BStkqM3KBXpu8GzJyTzvWJGJOSXBFgu3ejhVKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzCIUJuvFxGsaqV04q3APrezs1WVvJPrc%2FvSw5cny6M4vOW4VTJb8QMSwfve3NhL3Yyh2yErYBNnGnN57uZeJuZ5Z2v1fk0fLdnfcRbJk%2BvIguOYdFsumGtQbpjtN%2BvTCV8yCMTJnKsvj49NDr%2FXGtqMqPwQmK85MDHvLpS8mP11T%2BkVYSAq%2BvQZTGmNc1Oq1SUki%2Fsxwe%2Fw%2Fj1MBxApkBmMhWgyy5nOrMEv7WloK0%2FT8U4kkkBRQgH%2BWg%2FGf138QwDHUPSVYo1wSC517JMMWOyNJVxxshJWJk%2B2yyyj57U5%2Bd2tPLD0zqQ1h0297Pjy6pVG39V9Iot725kNdl4YAB8SNWOcEwpWs6U7t%2Be4DfQ16JxY2zj9BsKllNrTnqF0kG0%2ByC024RzQPCCH6Z5AQJxt30HqGgQO%2BKtvQm5Gz9F2JMuzGLkwQDzO9EOT3omSVG8cXZjtgjQ%2FaND8Tq4O4HbV1Pf%2BNTUEJDksFzOqW4gB4b0Fy2Bfc3t9%2FntAiqrvnlQTA14e7MI6RuErA5%2FaPl6aav8q2qdxP5Gvbkm526Aime08%2BN3VeJe7i8O30tMU3I0AHeIZH5fe%2FbnR9uLAuwZO2%2Fsgg4JQWzLvNKsl3dmZXpRYehAgBD2v%2FPQlaFFyNXlDkPP8llrqZiPDDWnvnDBjqkAf%2Bsrm4%2BlroHIS8KcHPTQoOyFJoqon7wyNIN2iJJtLp9hhdsj5nAuWACG05j5yVE%2BPtnuvp4bxhVf5PXyq2c1s0yILwf6NUFnJzhLbZih7gWIJw5JkiDRF%2B6ALExQ2sS%2BbPj1PbnUouBvlZOxLJy9Ab4ShKemv52OqhvvLFpFkzGbSIXDdMpuoqA8LWFEoowZpMq1vh3PsO6xowiOx8Q4p3NDLbh&X-Amz-Signature=78a93e4af9fe5f5bb48178cdc3378f76da8b392c897eaed709836ab9bcffb948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGGV7NO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKyK4eULYaSK02Cprc%2BIeL7VH81u4VgvJiVibsSL2MGwIhAK1WQLvN%2BStkqM3KBXpu8GzJyTzvWJGJOSXBFgu3ejhVKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzCIUJuvFxGsaqV04q3APrezs1WVvJPrc%2FvSw5cny6M4vOW4VTJb8QMSwfve3NhL3Yyh2yErYBNnGnN57uZeJuZ5Z2v1fk0fLdnfcRbJk%2BvIguOYdFsumGtQbpjtN%2BvTCV8yCMTJnKsvj49NDr%2FXGtqMqPwQmK85MDHvLpS8mP11T%2BkVYSAq%2BvQZTGmNc1Oq1SUki%2Fsxwe%2Fw%2Fj1MBxApkBmMhWgyy5nOrMEv7WloK0%2FT8U4kkkBRQgH%2BWg%2FGf138QwDHUPSVYo1wSC517JMMWOyNJVxxshJWJk%2B2yyyj57U5%2Bd2tPLD0zqQ1h0297Pjy6pVG39V9Iot725kNdl4YAB8SNWOcEwpWs6U7t%2Be4DfQ16JxY2zj9BsKllNrTnqF0kG0%2ByC024RzQPCCH6Z5AQJxt30HqGgQO%2BKtvQm5Gz9F2JMuzGLkwQDzO9EOT3omSVG8cXZjtgjQ%2FaND8Tq4O4HbV1Pf%2BNTUEJDksFzOqW4gB4b0Fy2Bfc3t9%2FntAiqrvnlQTA14e7MI6RuErA5%2FaPl6aav8q2qdxP5Gvbkm526Aime08%2BN3VeJe7i8O30tMU3I0AHeIZH5fe%2FbnR9uLAuwZO2%2Fsgg4JQWzLvNKsl3dmZXpRYehAgBD2v%2FPQlaFFyNXlDkPP8llrqZiPDDWnvnDBjqkAf%2Bsrm4%2BlroHIS8KcHPTQoOyFJoqon7wyNIN2iJJtLp9hhdsj5nAuWACG05j5yVE%2BPtnuvp4bxhVf5PXyq2c1s0yILwf6NUFnJzhLbZih7gWIJw5JkiDRF%2B6ALExQ2sS%2BbPj1PbnUouBvlZOxLJy9Ab4ShKemv52OqhvvLFpFkzGbSIXDdMpuoqA8LWFEoowZpMq1vh3PsO6xowiOx8Q4p3NDLbh&X-Amz-Signature=e4b93c432de50b693cacd2729bc0371103ca37199b40273ff95d30e3330c378f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGGV7NO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKyK4eULYaSK02Cprc%2BIeL7VH81u4VgvJiVibsSL2MGwIhAK1WQLvN%2BStkqM3KBXpu8GzJyTzvWJGJOSXBFgu3ejhVKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzCIUJuvFxGsaqV04q3APrezs1WVvJPrc%2FvSw5cny6M4vOW4VTJb8QMSwfve3NhL3Yyh2yErYBNnGnN57uZeJuZ5Z2v1fk0fLdnfcRbJk%2BvIguOYdFsumGtQbpjtN%2BvTCV8yCMTJnKsvj49NDr%2FXGtqMqPwQmK85MDHvLpS8mP11T%2BkVYSAq%2BvQZTGmNc1Oq1SUki%2Fsxwe%2Fw%2Fj1MBxApkBmMhWgyy5nOrMEv7WloK0%2FT8U4kkkBRQgH%2BWg%2FGf138QwDHUPSVYo1wSC517JMMWOyNJVxxshJWJk%2B2yyyj57U5%2Bd2tPLD0zqQ1h0297Pjy6pVG39V9Iot725kNdl4YAB8SNWOcEwpWs6U7t%2Be4DfQ16JxY2zj9BsKllNrTnqF0kG0%2ByC024RzQPCCH6Z5AQJxt30HqGgQO%2BKtvQm5Gz9F2JMuzGLkwQDzO9EOT3omSVG8cXZjtgjQ%2FaND8Tq4O4HbV1Pf%2BNTUEJDksFzOqW4gB4b0Fy2Bfc3t9%2FntAiqrvnlQTA14e7MI6RuErA5%2FaPl6aav8q2qdxP5Gvbkm526Aime08%2BN3VeJe7i8O30tMU3I0AHeIZH5fe%2FbnR9uLAuwZO2%2Fsgg4JQWzLvNKsl3dmZXpRYehAgBD2v%2FPQlaFFyNXlDkPP8llrqZiPDDWnvnDBjqkAf%2Bsrm4%2BlroHIS8KcHPTQoOyFJoqon7wyNIN2iJJtLp9hhdsj5nAuWACG05j5yVE%2BPtnuvp4bxhVf5PXyq2c1s0yILwf6NUFnJzhLbZih7gWIJw5JkiDRF%2B6ALExQ2sS%2BbPj1PbnUouBvlZOxLJy9Ab4ShKemv52OqhvvLFpFkzGbSIXDdMpuoqA8LWFEoowZpMq1vh3PsO6xowiOx8Q4p3NDLbh&X-Amz-Signature=a7fbc51972bf317d6892b6aeca3b27ec5990e8e1ce2465d355457f3a48318c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGGV7NO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKyK4eULYaSK02Cprc%2BIeL7VH81u4VgvJiVibsSL2MGwIhAK1WQLvN%2BStkqM3KBXpu8GzJyTzvWJGJOSXBFgu3ejhVKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzCIUJuvFxGsaqV04q3APrezs1WVvJPrc%2FvSw5cny6M4vOW4VTJb8QMSwfve3NhL3Yyh2yErYBNnGnN57uZeJuZ5Z2v1fk0fLdnfcRbJk%2BvIguOYdFsumGtQbpjtN%2BvTCV8yCMTJnKsvj49NDr%2FXGtqMqPwQmK85MDHvLpS8mP11T%2BkVYSAq%2BvQZTGmNc1Oq1SUki%2Fsxwe%2Fw%2Fj1MBxApkBmMhWgyy5nOrMEv7WloK0%2FT8U4kkkBRQgH%2BWg%2FGf138QwDHUPSVYo1wSC517JMMWOyNJVxxshJWJk%2B2yyyj57U5%2Bd2tPLD0zqQ1h0297Pjy6pVG39V9Iot725kNdl4YAB8SNWOcEwpWs6U7t%2Be4DfQ16JxY2zj9BsKllNrTnqF0kG0%2ByC024RzQPCCH6Z5AQJxt30HqGgQO%2BKtvQm5Gz9F2JMuzGLkwQDzO9EOT3omSVG8cXZjtgjQ%2FaND8Tq4O4HbV1Pf%2BNTUEJDksFzOqW4gB4b0Fy2Bfc3t9%2FntAiqrvnlQTA14e7MI6RuErA5%2FaPl6aav8q2qdxP5Gvbkm526Aime08%2BN3VeJe7i8O30tMU3I0AHeIZH5fe%2FbnR9uLAuwZO2%2Fsgg4JQWzLvNKsl3dmZXpRYehAgBD2v%2FPQlaFFyNXlDkPP8llrqZiPDDWnvnDBjqkAf%2Bsrm4%2BlroHIS8KcHPTQoOyFJoqon7wyNIN2iJJtLp9hhdsj5nAuWACG05j5yVE%2BPtnuvp4bxhVf5PXyq2c1s0yILwf6NUFnJzhLbZih7gWIJw5JkiDRF%2B6ALExQ2sS%2BbPj1PbnUouBvlZOxLJy9Ab4ShKemv52OqhvvLFpFkzGbSIXDdMpuoqA8LWFEoowZpMq1vh3PsO6xowiOx8Q4p3NDLbh&X-Amz-Signature=9a91a744e02c4cf31e2ba84d65c720224db43b5eee09d75367183b69b0fe9916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGGV7NO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKyK4eULYaSK02Cprc%2BIeL7VH81u4VgvJiVibsSL2MGwIhAK1WQLvN%2BStkqM3KBXpu8GzJyTzvWJGJOSXBFgu3ejhVKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzCIUJuvFxGsaqV04q3APrezs1WVvJPrc%2FvSw5cny6M4vOW4VTJb8QMSwfve3NhL3Yyh2yErYBNnGnN57uZeJuZ5Z2v1fk0fLdnfcRbJk%2BvIguOYdFsumGtQbpjtN%2BvTCV8yCMTJnKsvj49NDr%2FXGtqMqPwQmK85MDHvLpS8mP11T%2BkVYSAq%2BvQZTGmNc1Oq1SUki%2Fsxwe%2Fw%2Fj1MBxApkBmMhWgyy5nOrMEv7WloK0%2FT8U4kkkBRQgH%2BWg%2FGf138QwDHUPSVYo1wSC517JMMWOyNJVxxshJWJk%2B2yyyj57U5%2Bd2tPLD0zqQ1h0297Pjy6pVG39V9Iot725kNdl4YAB8SNWOcEwpWs6U7t%2Be4DfQ16JxY2zj9BsKllNrTnqF0kG0%2ByC024RzQPCCH6Z5AQJxt30HqGgQO%2BKtvQm5Gz9F2JMuzGLkwQDzO9EOT3omSVG8cXZjtgjQ%2FaND8Tq4O4HbV1Pf%2BNTUEJDksFzOqW4gB4b0Fy2Bfc3t9%2FntAiqrvnlQTA14e7MI6RuErA5%2FaPl6aav8q2qdxP5Gvbkm526Aime08%2BN3VeJe7i8O30tMU3I0AHeIZH5fe%2FbnR9uLAuwZO2%2Fsgg4JQWzLvNKsl3dmZXpRYehAgBD2v%2FPQlaFFyNXlDkPP8llrqZiPDDWnvnDBjqkAf%2Bsrm4%2BlroHIS8KcHPTQoOyFJoqon7wyNIN2iJJtLp9hhdsj5nAuWACG05j5yVE%2BPtnuvp4bxhVf5PXyq2c1s0yILwf6NUFnJzhLbZih7gWIJw5JkiDRF%2B6ALExQ2sS%2BbPj1PbnUouBvlZOxLJy9Ab4ShKemv52OqhvvLFpFkzGbSIXDdMpuoqA8LWFEoowZpMq1vh3PsO6xowiOx8Q4p3NDLbh&X-Amz-Signature=726e51dc0f895287017e019f6cfdb41230ab8c758b4e36e455a55a4757a7fd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGGV7NO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T151036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKyK4eULYaSK02Cprc%2BIeL7VH81u4VgvJiVibsSL2MGwIhAK1WQLvN%2BStkqM3KBXpu8GzJyTzvWJGJOSXBFgu3ejhVKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzCIUJuvFxGsaqV04q3APrezs1WVvJPrc%2FvSw5cny6M4vOW4VTJb8QMSwfve3NhL3Yyh2yErYBNnGnN57uZeJuZ5Z2v1fk0fLdnfcRbJk%2BvIguOYdFsumGtQbpjtN%2BvTCV8yCMTJnKsvj49NDr%2FXGtqMqPwQmK85MDHvLpS8mP11T%2BkVYSAq%2BvQZTGmNc1Oq1SUki%2Fsxwe%2Fw%2Fj1MBxApkBmMhWgyy5nOrMEv7WloK0%2FT8U4kkkBRQgH%2BWg%2FGf138QwDHUPSVYo1wSC517JMMWOyNJVxxshJWJk%2B2yyyj57U5%2Bd2tPLD0zqQ1h0297Pjy6pVG39V9Iot725kNdl4YAB8SNWOcEwpWs6U7t%2Be4DfQ16JxY2zj9BsKllNrTnqF0kG0%2ByC024RzQPCCH6Z5AQJxt30HqGgQO%2BKtvQm5Gz9F2JMuzGLkwQDzO9EOT3omSVG8cXZjtgjQ%2FaND8Tq4O4HbV1Pf%2BNTUEJDksFzOqW4gB4b0Fy2Bfc3t9%2FntAiqrvnlQTA14e7MI6RuErA5%2FaPl6aav8q2qdxP5Gvbkm526Aime08%2BN3VeJe7i8O30tMU3I0AHeIZH5fe%2FbnR9uLAuwZO2%2Fsgg4JQWzLvNKsl3dmZXpRYehAgBD2v%2FPQlaFFyNXlDkPP8llrqZiPDDWnvnDBjqkAf%2Bsrm4%2BlroHIS8KcHPTQoOyFJoqon7wyNIN2iJJtLp9hhdsj5nAuWACG05j5yVE%2BPtnuvp4bxhVf5PXyq2c1s0yILwf6NUFnJzhLbZih7gWIJw5JkiDRF%2B6ALExQ2sS%2BbPj1PbnUouBvlZOxLJy9Ab4ShKemv52OqhvvLFpFkzGbSIXDdMpuoqA8LWFEoowZpMq1vh3PsO6xowiOx8Q4p3NDLbh&X-Amz-Signature=e288328465dac1d950fc28d38b07726c66b95cd2a285d01d448111a83d2825c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
