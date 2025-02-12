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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQGRDU7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4lYhGD6JzhhWD4lyyyzgoU0rJoG92oRHA5WQoEsiQSgIhAJ189kZd0KyGBA%2BPujXw%2FrBHX2R23ZTMjtvpNVTvaOJXKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6jSIvjYflNs9vFPYq3AMLvvcdhZe6XAJyTkgkiD4s%2FgXlIHwEomd8zXRgrOimHJl7u31zM2ny21p9%2FdBiUMbM4IJe5YQH5OTSsath%2Bi4wRMSVNGilm5Cc%2B1pCpesPxKezk0XQ%2BhJJJHPDGuzEc%2BV6B0KHZckeDcaecbZZxYth871cheU3MdY1l8Lcqo5iedDhRr79HPhIDBuVIxgmyVw5uMoxw17q9NQ2Q6RVODrFx%2B1QGan%2Byn9j0Fzk%2BuApw9oQ%2BJrplQ9qckluHJk2IHL%2BXQXC2OpR58f8QmILEMN8pomuRwYTyb8HAqp4wB3Ja1NqtQiy5UOihwKZuCkqleiHgcmC7lKQ1gQ6ilQgFVG25kYL8s%2Ffrvwuze0%2BEKdbVkqCC5xuwgh1KyFyyo6csEjwDBVO6v9VG8fvGpucBBWzDOrtisBhgJXo%2Fu5nJ16JVrrJOZss9nwCuRplpXNIgcftEDGwYBLZYcz7m7QTJjbPI1Z223zc1ycCYHUrIFkK5ROQ7SSVJHcSJLV63Sh%2BI87GZU4wzbI59sZWEI%2FC6Iop3BRmQthXAZ8xjHJprq7qsjqNcgvpMYELndRFpBFhySN%2FddLD66CmRunAqtqE2ZqhlwgsBudcnZPRNLnxwvxXYmxfI0RY7t3O%2BwWIZzDfi7G9BjqkAfgmZLY48CioNREOQgaCUOjr2PerDZFNQAw60hsY7lltnjdZtHXfd0a165xv1rvdGZCcWYXzuxEd77JLg7oUUFWUf3BHNu28eBKdRzIcuIxbRfCkW38TbNSj6tCcQP%2Fq%2BNu37v4n0YUqFw4noCQJeDTXre8U%2BkMaNmnwuGZAOJuzfs2OU7D4KxDy%2FhU%2BrgTZ68LT3OhuKz5v3PIYqiy5Q6IUTgBj&X-Amz-Signature=e756c87089044cce6e4d32a63dea1bcc9ce849c632a0970534594787ef7ca58c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQGRDU7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4lYhGD6JzhhWD4lyyyzgoU0rJoG92oRHA5WQoEsiQSgIhAJ189kZd0KyGBA%2BPujXw%2FrBHX2R23ZTMjtvpNVTvaOJXKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6jSIvjYflNs9vFPYq3AMLvvcdhZe6XAJyTkgkiD4s%2FgXlIHwEomd8zXRgrOimHJl7u31zM2ny21p9%2FdBiUMbM4IJe5YQH5OTSsath%2Bi4wRMSVNGilm5Cc%2B1pCpesPxKezk0XQ%2BhJJJHPDGuzEc%2BV6B0KHZckeDcaecbZZxYth871cheU3MdY1l8Lcqo5iedDhRr79HPhIDBuVIxgmyVw5uMoxw17q9NQ2Q6RVODrFx%2B1QGan%2Byn9j0Fzk%2BuApw9oQ%2BJrplQ9qckluHJk2IHL%2BXQXC2OpR58f8QmILEMN8pomuRwYTyb8HAqp4wB3Ja1NqtQiy5UOihwKZuCkqleiHgcmC7lKQ1gQ6ilQgFVG25kYL8s%2Ffrvwuze0%2BEKdbVkqCC5xuwgh1KyFyyo6csEjwDBVO6v9VG8fvGpucBBWzDOrtisBhgJXo%2Fu5nJ16JVrrJOZss9nwCuRplpXNIgcftEDGwYBLZYcz7m7QTJjbPI1Z223zc1ycCYHUrIFkK5ROQ7SSVJHcSJLV63Sh%2BI87GZU4wzbI59sZWEI%2FC6Iop3BRmQthXAZ8xjHJprq7qsjqNcgvpMYELndRFpBFhySN%2FddLD66CmRunAqtqE2ZqhlwgsBudcnZPRNLnxwvxXYmxfI0RY7t3O%2BwWIZzDfi7G9BjqkAfgmZLY48CioNREOQgaCUOjr2PerDZFNQAw60hsY7lltnjdZtHXfd0a165xv1rvdGZCcWYXzuxEd77JLg7oUUFWUf3BHNu28eBKdRzIcuIxbRfCkW38TbNSj6tCcQP%2Fq%2BNu37v4n0YUqFw4noCQJeDTXre8U%2BkMaNmnwuGZAOJuzfs2OU7D4KxDy%2FhU%2BrgTZ68LT3OhuKz5v3PIYqiy5Q6IUTgBj&X-Amz-Signature=e9da7457850d70ee21236aae71bb36c626f2cf325f3170592cea7df2d3117653&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQGRDU7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4lYhGD6JzhhWD4lyyyzgoU0rJoG92oRHA5WQoEsiQSgIhAJ189kZd0KyGBA%2BPujXw%2FrBHX2R23ZTMjtvpNVTvaOJXKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6jSIvjYflNs9vFPYq3AMLvvcdhZe6XAJyTkgkiD4s%2FgXlIHwEomd8zXRgrOimHJl7u31zM2ny21p9%2FdBiUMbM4IJe5YQH5OTSsath%2Bi4wRMSVNGilm5Cc%2B1pCpesPxKezk0XQ%2BhJJJHPDGuzEc%2BV6B0KHZckeDcaecbZZxYth871cheU3MdY1l8Lcqo5iedDhRr79HPhIDBuVIxgmyVw5uMoxw17q9NQ2Q6RVODrFx%2B1QGan%2Byn9j0Fzk%2BuApw9oQ%2BJrplQ9qckluHJk2IHL%2BXQXC2OpR58f8QmILEMN8pomuRwYTyb8HAqp4wB3Ja1NqtQiy5UOihwKZuCkqleiHgcmC7lKQ1gQ6ilQgFVG25kYL8s%2Ffrvwuze0%2BEKdbVkqCC5xuwgh1KyFyyo6csEjwDBVO6v9VG8fvGpucBBWzDOrtisBhgJXo%2Fu5nJ16JVrrJOZss9nwCuRplpXNIgcftEDGwYBLZYcz7m7QTJjbPI1Z223zc1ycCYHUrIFkK5ROQ7SSVJHcSJLV63Sh%2BI87GZU4wzbI59sZWEI%2FC6Iop3BRmQthXAZ8xjHJprq7qsjqNcgvpMYELndRFpBFhySN%2FddLD66CmRunAqtqE2ZqhlwgsBudcnZPRNLnxwvxXYmxfI0RY7t3O%2BwWIZzDfi7G9BjqkAfgmZLY48CioNREOQgaCUOjr2PerDZFNQAw60hsY7lltnjdZtHXfd0a165xv1rvdGZCcWYXzuxEd77JLg7oUUFWUf3BHNu28eBKdRzIcuIxbRfCkW38TbNSj6tCcQP%2Fq%2BNu37v4n0YUqFw4noCQJeDTXre8U%2BkMaNmnwuGZAOJuzfs2OU7D4KxDy%2FhU%2BrgTZ68LT3OhuKz5v3PIYqiy5Q6IUTgBj&X-Amz-Signature=24ab8993ad4ba98958bd5a18284f809a94788320e92776f81d285bc53382ef64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQGRDU7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4lYhGD6JzhhWD4lyyyzgoU0rJoG92oRHA5WQoEsiQSgIhAJ189kZd0KyGBA%2BPujXw%2FrBHX2R23ZTMjtvpNVTvaOJXKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6jSIvjYflNs9vFPYq3AMLvvcdhZe6XAJyTkgkiD4s%2FgXlIHwEomd8zXRgrOimHJl7u31zM2ny21p9%2FdBiUMbM4IJe5YQH5OTSsath%2Bi4wRMSVNGilm5Cc%2B1pCpesPxKezk0XQ%2BhJJJHPDGuzEc%2BV6B0KHZckeDcaecbZZxYth871cheU3MdY1l8Lcqo5iedDhRr79HPhIDBuVIxgmyVw5uMoxw17q9NQ2Q6RVODrFx%2B1QGan%2Byn9j0Fzk%2BuApw9oQ%2BJrplQ9qckluHJk2IHL%2BXQXC2OpR58f8QmILEMN8pomuRwYTyb8HAqp4wB3Ja1NqtQiy5UOihwKZuCkqleiHgcmC7lKQ1gQ6ilQgFVG25kYL8s%2Ffrvwuze0%2BEKdbVkqCC5xuwgh1KyFyyo6csEjwDBVO6v9VG8fvGpucBBWzDOrtisBhgJXo%2Fu5nJ16JVrrJOZss9nwCuRplpXNIgcftEDGwYBLZYcz7m7QTJjbPI1Z223zc1ycCYHUrIFkK5ROQ7SSVJHcSJLV63Sh%2BI87GZU4wzbI59sZWEI%2FC6Iop3BRmQthXAZ8xjHJprq7qsjqNcgvpMYELndRFpBFhySN%2FddLD66CmRunAqtqE2ZqhlwgsBudcnZPRNLnxwvxXYmxfI0RY7t3O%2BwWIZzDfi7G9BjqkAfgmZLY48CioNREOQgaCUOjr2PerDZFNQAw60hsY7lltnjdZtHXfd0a165xv1rvdGZCcWYXzuxEd77JLg7oUUFWUf3BHNu28eBKdRzIcuIxbRfCkW38TbNSj6tCcQP%2Fq%2BNu37v4n0YUqFw4noCQJeDTXre8U%2BkMaNmnwuGZAOJuzfs2OU7D4KxDy%2FhU%2BrgTZ68LT3OhuKz5v3PIYqiy5Q6IUTgBj&X-Amz-Signature=1a7d33676bdbae3bd5491b9fe5c53a274bf4ec4a81c2aec65cfa281a0b1a2119&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQGRDU7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4lYhGD6JzhhWD4lyyyzgoU0rJoG92oRHA5WQoEsiQSgIhAJ189kZd0KyGBA%2BPujXw%2FrBHX2R23ZTMjtvpNVTvaOJXKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6jSIvjYflNs9vFPYq3AMLvvcdhZe6XAJyTkgkiD4s%2FgXlIHwEomd8zXRgrOimHJl7u31zM2ny21p9%2FdBiUMbM4IJe5YQH5OTSsath%2Bi4wRMSVNGilm5Cc%2B1pCpesPxKezk0XQ%2BhJJJHPDGuzEc%2BV6B0KHZckeDcaecbZZxYth871cheU3MdY1l8Lcqo5iedDhRr79HPhIDBuVIxgmyVw5uMoxw17q9NQ2Q6RVODrFx%2B1QGan%2Byn9j0Fzk%2BuApw9oQ%2BJrplQ9qckluHJk2IHL%2BXQXC2OpR58f8QmILEMN8pomuRwYTyb8HAqp4wB3Ja1NqtQiy5UOihwKZuCkqleiHgcmC7lKQ1gQ6ilQgFVG25kYL8s%2Ffrvwuze0%2BEKdbVkqCC5xuwgh1KyFyyo6csEjwDBVO6v9VG8fvGpucBBWzDOrtisBhgJXo%2Fu5nJ16JVrrJOZss9nwCuRplpXNIgcftEDGwYBLZYcz7m7QTJjbPI1Z223zc1ycCYHUrIFkK5ROQ7SSVJHcSJLV63Sh%2BI87GZU4wzbI59sZWEI%2FC6Iop3BRmQthXAZ8xjHJprq7qsjqNcgvpMYELndRFpBFhySN%2FddLD66CmRunAqtqE2ZqhlwgsBudcnZPRNLnxwvxXYmxfI0RY7t3O%2BwWIZzDfi7G9BjqkAfgmZLY48CioNREOQgaCUOjr2PerDZFNQAw60hsY7lltnjdZtHXfd0a165xv1rvdGZCcWYXzuxEd77JLg7oUUFWUf3BHNu28eBKdRzIcuIxbRfCkW38TbNSj6tCcQP%2Fq%2BNu37v4n0YUqFw4noCQJeDTXre8U%2BkMaNmnwuGZAOJuzfs2OU7D4KxDy%2FhU%2BrgTZ68LT3OhuKz5v3PIYqiy5Q6IUTgBj&X-Amz-Signature=c5a2b0c36827ac275c46b84d63b5b298a038d1cb6b215555ccd44d65673a6fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQGRDU7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4lYhGD6JzhhWD4lyyyzgoU0rJoG92oRHA5WQoEsiQSgIhAJ189kZd0KyGBA%2BPujXw%2FrBHX2R23ZTMjtvpNVTvaOJXKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6jSIvjYflNs9vFPYq3AMLvvcdhZe6XAJyTkgkiD4s%2FgXlIHwEomd8zXRgrOimHJl7u31zM2ny21p9%2FdBiUMbM4IJe5YQH5OTSsath%2Bi4wRMSVNGilm5Cc%2B1pCpesPxKezk0XQ%2BhJJJHPDGuzEc%2BV6B0KHZckeDcaecbZZxYth871cheU3MdY1l8Lcqo5iedDhRr79HPhIDBuVIxgmyVw5uMoxw17q9NQ2Q6RVODrFx%2B1QGan%2Byn9j0Fzk%2BuApw9oQ%2BJrplQ9qckluHJk2IHL%2BXQXC2OpR58f8QmILEMN8pomuRwYTyb8HAqp4wB3Ja1NqtQiy5UOihwKZuCkqleiHgcmC7lKQ1gQ6ilQgFVG25kYL8s%2Ffrvwuze0%2BEKdbVkqCC5xuwgh1KyFyyo6csEjwDBVO6v9VG8fvGpucBBWzDOrtisBhgJXo%2Fu5nJ16JVrrJOZss9nwCuRplpXNIgcftEDGwYBLZYcz7m7QTJjbPI1Z223zc1ycCYHUrIFkK5ROQ7SSVJHcSJLV63Sh%2BI87GZU4wzbI59sZWEI%2FC6Iop3BRmQthXAZ8xjHJprq7qsjqNcgvpMYELndRFpBFhySN%2FddLD66CmRunAqtqE2ZqhlwgsBudcnZPRNLnxwvxXYmxfI0RY7t3O%2BwWIZzDfi7G9BjqkAfgmZLY48CioNREOQgaCUOjr2PerDZFNQAw60hsY7lltnjdZtHXfd0a165xv1rvdGZCcWYXzuxEd77JLg7oUUFWUf3BHNu28eBKdRzIcuIxbRfCkW38TbNSj6tCcQP%2Fq%2BNu37v4n0YUqFw4noCQJeDTXre8U%2BkMaNmnwuGZAOJuzfs2OU7D4KxDy%2FhU%2BrgTZ68LT3OhuKz5v3PIYqiy5Q6IUTgBj&X-Amz-Signature=9ed5fdff482df7f00778730200052c15674f23656269df1c20c7902099a5e38d&X-Amz-SignedHeaders=host&x-id=GetObject)
