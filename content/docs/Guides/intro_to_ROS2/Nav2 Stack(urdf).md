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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMJBKCA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHtW%2Bu0fBk7uino6IkDfdeKPzJ6Ngozem1mNRZkmNW4AiB4oaX4SgenLoqpGhuaZvI5VUS68s7NXnN60qmriADNDiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRZqPoIwDJNHfvaKtwDEqcmC%2BS9X22fj9vpjqDpp07qFMfSILrjf%2BsUrRS%2BP%2BxjvexP6p8qgi%2FpqzonkDOIj%2BPzGE62SiHvwP%2B9SUqewSe5LB2da4CPUIhFd48M2ia5G2ZeSUq5owbpzZXJwZDFQ%2FlDqoXwiQ88tfQ4nFtYLdQXGUFrYYy7KVWCAHdAgw4Hadjb6NrjJ9F3EOI7okIqD44YTzHMMIK%2BUf120uWPf4b8fbHbOZxWVSgwmHn4pyyimY6VglZpW1NaI3Jr%2BfoA6xj%2FXzekNXwt1PxH86b3uKuQz7uWb5bSjJs4DSjTQCtor47JyFiK50zVWKZ%2B7BPHmseyDUTFZNRaawv1a97lKS8tzwTAUWti1oeoz3bToBWOaig4N3nF95BE2UR1luaMUb2j79k9ki7rLZ3m38a89UpwrFifG8%2F77tD9p5s%2FgH4sqpLOFQiLY6b4wntNEiW6MZwILzY0eIMw5qdOObQ6siMhQeS344aghksoKf7BAxD%2BXFX3ZR9fbmwwJXQjJx4usV0%2BpmVy7%2F4LdMAnth3MuUZa%2FCGuIcolpiYqsyjj%2F6gBw%2FlssbjqdXkM8q1WgeYuPQbMqT31G%2BKLznazTXkW60t9RZ4VuL%2BDNXBVQ5TOM6giTQGfulGh0lw%2B0ykwoZ7jvQY6pgHp1xhTj4ONx%2FG4sb38IL9TeRGowRWdkHEhPigRkDK7tmbPhx2ZvsmscuMrsmInqk%2FvFKvH86vLfTwO5y0Jxkiqxk0bzws0r2Z62%2Fat%2F74bsxR1hU6br49%2F6W6JbT5bvYRJLF18gF%2BFZoFv0ECOD%2FDkrZYWu%2FLmqoKx21sRa8J0HJNg89rTHJaGTLRkf4nBBGafFwhjgao9ZrOfo3yPTB22Y0xzx0Lo&X-Amz-Signature=cbaac8d85097ba8450d8a935823765dae28eb87713ea31c4fa4943960fcb7dd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMJBKCA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHtW%2Bu0fBk7uino6IkDfdeKPzJ6Ngozem1mNRZkmNW4AiB4oaX4SgenLoqpGhuaZvI5VUS68s7NXnN60qmriADNDiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRZqPoIwDJNHfvaKtwDEqcmC%2BS9X22fj9vpjqDpp07qFMfSILrjf%2BsUrRS%2BP%2BxjvexP6p8qgi%2FpqzonkDOIj%2BPzGE62SiHvwP%2B9SUqewSe5LB2da4CPUIhFd48M2ia5G2ZeSUq5owbpzZXJwZDFQ%2FlDqoXwiQ88tfQ4nFtYLdQXGUFrYYy7KVWCAHdAgw4Hadjb6NrjJ9F3EOI7okIqD44YTzHMMIK%2BUf120uWPf4b8fbHbOZxWVSgwmHn4pyyimY6VglZpW1NaI3Jr%2BfoA6xj%2FXzekNXwt1PxH86b3uKuQz7uWb5bSjJs4DSjTQCtor47JyFiK50zVWKZ%2B7BPHmseyDUTFZNRaawv1a97lKS8tzwTAUWti1oeoz3bToBWOaig4N3nF95BE2UR1luaMUb2j79k9ki7rLZ3m38a89UpwrFifG8%2F77tD9p5s%2FgH4sqpLOFQiLY6b4wntNEiW6MZwILzY0eIMw5qdOObQ6siMhQeS344aghksoKf7BAxD%2BXFX3ZR9fbmwwJXQjJx4usV0%2BpmVy7%2F4LdMAnth3MuUZa%2FCGuIcolpiYqsyjj%2F6gBw%2FlssbjqdXkM8q1WgeYuPQbMqT31G%2BKLznazTXkW60t9RZ4VuL%2BDNXBVQ5TOM6giTQGfulGh0lw%2B0ykwoZ7jvQY6pgHp1xhTj4ONx%2FG4sb38IL9TeRGowRWdkHEhPigRkDK7tmbPhx2ZvsmscuMrsmInqk%2FvFKvH86vLfTwO5y0Jxkiqxk0bzws0r2Z62%2Fat%2F74bsxR1hU6br49%2F6W6JbT5bvYRJLF18gF%2BFZoFv0ECOD%2FDkrZYWu%2FLmqoKx21sRa8J0HJNg89rTHJaGTLRkf4nBBGafFwhjgao9ZrOfo3yPTB22Y0xzx0Lo&X-Amz-Signature=0be311761106ed1da5bdbe6a5588fb075d58da69009d792d83de538148253614&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMJBKCA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHtW%2Bu0fBk7uino6IkDfdeKPzJ6Ngozem1mNRZkmNW4AiB4oaX4SgenLoqpGhuaZvI5VUS68s7NXnN60qmriADNDiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRZqPoIwDJNHfvaKtwDEqcmC%2BS9X22fj9vpjqDpp07qFMfSILrjf%2BsUrRS%2BP%2BxjvexP6p8qgi%2FpqzonkDOIj%2BPzGE62SiHvwP%2B9SUqewSe5LB2da4CPUIhFd48M2ia5G2ZeSUq5owbpzZXJwZDFQ%2FlDqoXwiQ88tfQ4nFtYLdQXGUFrYYy7KVWCAHdAgw4Hadjb6NrjJ9F3EOI7okIqD44YTzHMMIK%2BUf120uWPf4b8fbHbOZxWVSgwmHn4pyyimY6VglZpW1NaI3Jr%2BfoA6xj%2FXzekNXwt1PxH86b3uKuQz7uWb5bSjJs4DSjTQCtor47JyFiK50zVWKZ%2B7BPHmseyDUTFZNRaawv1a97lKS8tzwTAUWti1oeoz3bToBWOaig4N3nF95BE2UR1luaMUb2j79k9ki7rLZ3m38a89UpwrFifG8%2F77tD9p5s%2FgH4sqpLOFQiLY6b4wntNEiW6MZwILzY0eIMw5qdOObQ6siMhQeS344aghksoKf7BAxD%2BXFX3ZR9fbmwwJXQjJx4usV0%2BpmVy7%2F4LdMAnth3MuUZa%2FCGuIcolpiYqsyjj%2F6gBw%2FlssbjqdXkM8q1WgeYuPQbMqT31G%2BKLznazTXkW60t9RZ4VuL%2BDNXBVQ5TOM6giTQGfulGh0lw%2B0ykwoZ7jvQY6pgHp1xhTj4ONx%2FG4sb38IL9TeRGowRWdkHEhPigRkDK7tmbPhx2ZvsmscuMrsmInqk%2FvFKvH86vLfTwO5y0Jxkiqxk0bzws0r2Z62%2Fat%2F74bsxR1hU6br49%2F6W6JbT5bvYRJLF18gF%2BFZoFv0ECOD%2FDkrZYWu%2FLmqoKx21sRa8J0HJNg89rTHJaGTLRkf4nBBGafFwhjgao9ZrOfo3yPTB22Y0xzx0Lo&X-Amz-Signature=dbfd6cc364711093edf56488254bd86a03006e0a957f1060b3e655c1a6d3d596&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMJBKCA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHtW%2Bu0fBk7uino6IkDfdeKPzJ6Ngozem1mNRZkmNW4AiB4oaX4SgenLoqpGhuaZvI5VUS68s7NXnN60qmriADNDiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRZqPoIwDJNHfvaKtwDEqcmC%2BS9X22fj9vpjqDpp07qFMfSILrjf%2BsUrRS%2BP%2BxjvexP6p8qgi%2FpqzonkDOIj%2BPzGE62SiHvwP%2B9SUqewSe5LB2da4CPUIhFd48M2ia5G2ZeSUq5owbpzZXJwZDFQ%2FlDqoXwiQ88tfQ4nFtYLdQXGUFrYYy7KVWCAHdAgw4Hadjb6NrjJ9F3EOI7okIqD44YTzHMMIK%2BUf120uWPf4b8fbHbOZxWVSgwmHn4pyyimY6VglZpW1NaI3Jr%2BfoA6xj%2FXzekNXwt1PxH86b3uKuQz7uWb5bSjJs4DSjTQCtor47JyFiK50zVWKZ%2B7BPHmseyDUTFZNRaawv1a97lKS8tzwTAUWti1oeoz3bToBWOaig4N3nF95BE2UR1luaMUb2j79k9ki7rLZ3m38a89UpwrFifG8%2F77tD9p5s%2FgH4sqpLOFQiLY6b4wntNEiW6MZwILzY0eIMw5qdOObQ6siMhQeS344aghksoKf7BAxD%2BXFX3ZR9fbmwwJXQjJx4usV0%2BpmVy7%2F4LdMAnth3MuUZa%2FCGuIcolpiYqsyjj%2F6gBw%2FlssbjqdXkM8q1WgeYuPQbMqT31G%2BKLznazTXkW60t9RZ4VuL%2BDNXBVQ5TOM6giTQGfulGh0lw%2B0ykwoZ7jvQY6pgHp1xhTj4ONx%2FG4sb38IL9TeRGowRWdkHEhPigRkDK7tmbPhx2ZvsmscuMrsmInqk%2FvFKvH86vLfTwO5y0Jxkiqxk0bzws0r2Z62%2Fat%2F74bsxR1hU6br49%2F6W6JbT5bvYRJLF18gF%2BFZoFv0ECOD%2FDkrZYWu%2FLmqoKx21sRa8J0HJNg89rTHJaGTLRkf4nBBGafFwhjgao9ZrOfo3yPTB22Y0xzx0Lo&X-Amz-Signature=f4cfc25395742f3dcc7dd9c430acb61c1c38f3a019046024d30e71b26e5e2605&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMJBKCA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHtW%2Bu0fBk7uino6IkDfdeKPzJ6Ngozem1mNRZkmNW4AiB4oaX4SgenLoqpGhuaZvI5VUS68s7NXnN60qmriADNDiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRZqPoIwDJNHfvaKtwDEqcmC%2BS9X22fj9vpjqDpp07qFMfSILrjf%2BsUrRS%2BP%2BxjvexP6p8qgi%2FpqzonkDOIj%2BPzGE62SiHvwP%2B9SUqewSe5LB2da4CPUIhFd48M2ia5G2ZeSUq5owbpzZXJwZDFQ%2FlDqoXwiQ88tfQ4nFtYLdQXGUFrYYy7KVWCAHdAgw4Hadjb6NrjJ9F3EOI7okIqD44YTzHMMIK%2BUf120uWPf4b8fbHbOZxWVSgwmHn4pyyimY6VglZpW1NaI3Jr%2BfoA6xj%2FXzekNXwt1PxH86b3uKuQz7uWb5bSjJs4DSjTQCtor47JyFiK50zVWKZ%2B7BPHmseyDUTFZNRaawv1a97lKS8tzwTAUWti1oeoz3bToBWOaig4N3nF95BE2UR1luaMUb2j79k9ki7rLZ3m38a89UpwrFifG8%2F77tD9p5s%2FgH4sqpLOFQiLY6b4wntNEiW6MZwILzY0eIMw5qdOObQ6siMhQeS344aghksoKf7BAxD%2BXFX3ZR9fbmwwJXQjJx4usV0%2BpmVy7%2F4LdMAnth3MuUZa%2FCGuIcolpiYqsyjj%2F6gBw%2FlssbjqdXkM8q1WgeYuPQbMqT31G%2BKLznazTXkW60t9RZ4VuL%2BDNXBVQ5TOM6giTQGfulGh0lw%2B0ykwoZ7jvQY6pgHp1xhTj4ONx%2FG4sb38IL9TeRGowRWdkHEhPigRkDK7tmbPhx2ZvsmscuMrsmInqk%2FvFKvH86vLfTwO5y0Jxkiqxk0bzws0r2Z62%2Fat%2F74bsxR1hU6br49%2F6W6JbT5bvYRJLF18gF%2BFZoFv0ECOD%2FDkrZYWu%2FLmqoKx21sRa8J0HJNg89rTHJaGTLRkf4nBBGafFwhjgao9ZrOfo3yPTB22Y0xzx0Lo&X-Amz-Signature=d50435ce7629efac0052f1a5cd7b2818643ecc08ecccee01b9306ed60d2c45d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAMJBKCA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHtW%2Bu0fBk7uino6IkDfdeKPzJ6Ngozem1mNRZkmNW4AiB4oaX4SgenLoqpGhuaZvI5VUS68s7NXnN60qmriADNDiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGRZqPoIwDJNHfvaKtwDEqcmC%2BS9X22fj9vpjqDpp07qFMfSILrjf%2BsUrRS%2BP%2BxjvexP6p8qgi%2FpqzonkDOIj%2BPzGE62SiHvwP%2B9SUqewSe5LB2da4CPUIhFd48M2ia5G2ZeSUq5owbpzZXJwZDFQ%2FlDqoXwiQ88tfQ4nFtYLdQXGUFrYYy7KVWCAHdAgw4Hadjb6NrjJ9F3EOI7okIqD44YTzHMMIK%2BUf120uWPf4b8fbHbOZxWVSgwmHn4pyyimY6VglZpW1NaI3Jr%2BfoA6xj%2FXzekNXwt1PxH86b3uKuQz7uWb5bSjJs4DSjTQCtor47JyFiK50zVWKZ%2B7BPHmseyDUTFZNRaawv1a97lKS8tzwTAUWti1oeoz3bToBWOaig4N3nF95BE2UR1luaMUb2j79k9ki7rLZ3m38a89UpwrFifG8%2F77tD9p5s%2FgH4sqpLOFQiLY6b4wntNEiW6MZwILzY0eIMw5qdOObQ6siMhQeS344aghksoKf7BAxD%2BXFX3ZR9fbmwwJXQjJx4usV0%2BpmVy7%2F4LdMAnth3MuUZa%2FCGuIcolpiYqsyjj%2F6gBw%2FlssbjqdXkM8q1WgeYuPQbMqT31G%2BKLznazTXkW60t9RZ4VuL%2BDNXBVQ5TOM6giTQGfulGh0lw%2B0ykwoZ7jvQY6pgHp1xhTj4ONx%2FG4sb38IL9TeRGowRWdkHEhPigRkDK7tmbPhx2ZvsmscuMrsmInqk%2FvFKvH86vLfTwO5y0Jxkiqxk0bzws0r2Z62%2Fat%2F74bsxR1hU6br49%2F6W6JbT5bvYRJLF18gF%2BFZoFv0ECOD%2FDkrZYWu%2FLmqoKx21sRa8J0HJNg89rTHJaGTLRkf4nBBGafFwhjgao9ZrOfo3yPTB22Y0xzx0Lo&X-Amz-Signature=d801c2726d318a631613f9e3a3a24662d398ec752ec4363c55486f6f1454bdc9&X-Amz-SignedHeaders=host&x-id=GetObject)
