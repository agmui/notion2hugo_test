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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLZ6HZ7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2pcPelhdl9DssMzJkKJWv9tDQT14Aff%2Bsy8ljjulLwIhAK%2Bn6eJQOEieXHfnA03i1gksG4N8I%2Br56W91BLnfw%2BACKv8DCGEQABoMNjM3NDIzMTgzODA1IgyhisW9yLaIzjYAhyEq3AMyehxAytGthnMWtgPZti5e4jDHr6Vzgo4G1feD6e8xZx6zo4RRMCADLZjg6BZR1bBrdQfYqRxJdW0q2lsX0TDBcXPBBaJKqptuXOoG7a37zUPKL9UBZygJnXnI2iPu%2Be8EXqsQc4ALkQSWKOwmbPlPFPT6Q1XR4v6OgxHlWPnBFyETvy2WND63v2eILL0%2F4A7IQxgeROnuQ4ygPhEtuWl4cUBVmbFr3he2SOfW0rOgC12lL6de2JutQHclQQFRIE6DvBR0JdMoYGnTac22WtJrAXH9o3KgEM9m%2BzFnFzXLRDyFFVmBEEg1dOOmX3aYyC0Z0OsiDxS2alGZ9M7ZBwQzcYuRFwfrz2CEfprGJgWVbYnYjt3LdTUicYy8ZqAYJBdLftQFgkDTV0QYSkCYwy7uRXxJ0%2BDeMvE1Db43FV9fJJ7Gk8QGk9uUqrzJv1SHZNvsKJysHMeZiVuLuYJ%2B1oTUKJADF6yDuB1T5lU6CxKXdMkbVCNB9JNCEOvpsnIzaHvW5DhzWXJFbbtmRE7tjNkdj1MIFO5C2aFsK3Qr599PDI1CiliExYBoC%2FFGD5paI5SYeKHZ1iIrY7pXJKOGlhPRauBzD7ggoutbewbxJ8X8phFJcMzuSsQYXYgseTC%2BprnABjqkAVjGNxw%2FkEGtZLVwhBFpUVOkcJKWXDWVtLObXJmH1lq%2BWhcNnjB10UlBkp31%2F%2BoE6bhQ%2FShnE3jjga2Z4WhQWtIvkN4gR4IofW3b0xvsQdJCPF2XxPO%2BeL4V14MdAQcl0YolAO3li6JQ%2BSsy2X4ePubopKV2UUo4qoPm%2BQk0aFws3WhASoefdMf4IsGu9DOduKAyY8NPJvdNPliXWDVurc9T1L1V&X-Amz-Signature=e910893c7cdd52ddd4a41b57b6b6686d80a6575fa22651bbbe433cf745da5d37&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLZ6HZ7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2pcPelhdl9DssMzJkKJWv9tDQT14Aff%2Bsy8ljjulLwIhAK%2Bn6eJQOEieXHfnA03i1gksG4N8I%2Br56W91BLnfw%2BACKv8DCGEQABoMNjM3NDIzMTgzODA1IgyhisW9yLaIzjYAhyEq3AMyehxAytGthnMWtgPZti5e4jDHr6Vzgo4G1feD6e8xZx6zo4RRMCADLZjg6BZR1bBrdQfYqRxJdW0q2lsX0TDBcXPBBaJKqptuXOoG7a37zUPKL9UBZygJnXnI2iPu%2Be8EXqsQc4ALkQSWKOwmbPlPFPT6Q1XR4v6OgxHlWPnBFyETvy2WND63v2eILL0%2F4A7IQxgeROnuQ4ygPhEtuWl4cUBVmbFr3he2SOfW0rOgC12lL6de2JutQHclQQFRIE6DvBR0JdMoYGnTac22WtJrAXH9o3KgEM9m%2BzFnFzXLRDyFFVmBEEg1dOOmX3aYyC0Z0OsiDxS2alGZ9M7ZBwQzcYuRFwfrz2CEfprGJgWVbYnYjt3LdTUicYy8ZqAYJBdLftQFgkDTV0QYSkCYwy7uRXxJ0%2BDeMvE1Db43FV9fJJ7Gk8QGk9uUqrzJv1SHZNvsKJysHMeZiVuLuYJ%2B1oTUKJADF6yDuB1T5lU6CxKXdMkbVCNB9JNCEOvpsnIzaHvW5DhzWXJFbbtmRE7tjNkdj1MIFO5C2aFsK3Qr599PDI1CiliExYBoC%2FFGD5paI5SYeKHZ1iIrY7pXJKOGlhPRauBzD7ggoutbewbxJ8X8phFJcMzuSsQYXYgseTC%2BprnABjqkAVjGNxw%2FkEGtZLVwhBFpUVOkcJKWXDWVtLObXJmH1lq%2BWhcNnjB10UlBkp31%2F%2BoE6bhQ%2FShnE3jjga2Z4WhQWtIvkN4gR4IofW3b0xvsQdJCPF2XxPO%2BeL4V14MdAQcl0YolAO3li6JQ%2BSsy2X4ePubopKV2UUo4qoPm%2BQk0aFws3WhASoefdMf4IsGu9DOduKAyY8NPJvdNPliXWDVurc9T1L1V&X-Amz-Signature=f5c52150b59b0da6ad5d72b92a327998910b9954d53a951dec173c3df4dd5a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLZ6HZ7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2pcPelhdl9DssMzJkKJWv9tDQT14Aff%2Bsy8ljjulLwIhAK%2Bn6eJQOEieXHfnA03i1gksG4N8I%2Br56W91BLnfw%2BACKv8DCGEQABoMNjM3NDIzMTgzODA1IgyhisW9yLaIzjYAhyEq3AMyehxAytGthnMWtgPZti5e4jDHr6Vzgo4G1feD6e8xZx6zo4RRMCADLZjg6BZR1bBrdQfYqRxJdW0q2lsX0TDBcXPBBaJKqptuXOoG7a37zUPKL9UBZygJnXnI2iPu%2Be8EXqsQc4ALkQSWKOwmbPlPFPT6Q1XR4v6OgxHlWPnBFyETvy2WND63v2eILL0%2F4A7IQxgeROnuQ4ygPhEtuWl4cUBVmbFr3he2SOfW0rOgC12lL6de2JutQHclQQFRIE6DvBR0JdMoYGnTac22WtJrAXH9o3KgEM9m%2BzFnFzXLRDyFFVmBEEg1dOOmX3aYyC0Z0OsiDxS2alGZ9M7ZBwQzcYuRFwfrz2CEfprGJgWVbYnYjt3LdTUicYy8ZqAYJBdLftQFgkDTV0QYSkCYwy7uRXxJ0%2BDeMvE1Db43FV9fJJ7Gk8QGk9uUqrzJv1SHZNvsKJysHMeZiVuLuYJ%2B1oTUKJADF6yDuB1T5lU6CxKXdMkbVCNB9JNCEOvpsnIzaHvW5DhzWXJFbbtmRE7tjNkdj1MIFO5C2aFsK3Qr599PDI1CiliExYBoC%2FFGD5paI5SYeKHZ1iIrY7pXJKOGlhPRauBzD7ggoutbewbxJ8X8phFJcMzuSsQYXYgseTC%2BprnABjqkAVjGNxw%2FkEGtZLVwhBFpUVOkcJKWXDWVtLObXJmH1lq%2BWhcNnjB10UlBkp31%2F%2BoE6bhQ%2FShnE3jjga2Z4WhQWtIvkN4gR4IofW3b0xvsQdJCPF2XxPO%2BeL4V14MdAQcl0YolAO3li6JQ%2BSsy2X4ePubopKV2UUo4qoPm%2BQk0aFws3WhASoefdMf4IsGu9DOduKAyY8NPJvdNPliXWDVurc9T1L1V&X-Amz-Signature=3e8440353f7aa5e5c5995053ae9bbfdd7446d3481b3218ec60c5d2c4e9bddd92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLZ6HZ7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2pcPelhdl9DssMzJkKJWv9tDQT14Aff%2Bsy8ljjulLwIhAK%2Bn6eJQOEieXHfnA03i1gksG4N8I%2Br56W91BLnfw%2BACKv8DCGEQABoMNjM3NDIzMTgzODA1IgyhisW9yLaIzjYAhyEq3AMyehxAytGthnMWtgPZti5e4jDHr6Vzgo4G1feD6e8xZx6zo4RRMCADLZjg6BZR1bBrdQfYqRxJdW0q2lsX0TDBcXPBBaJKqptuXOoG7a37zUPKL9UBZygJnXnI2iPu%2Be8EXqsQc4ALkQSWKOwmbPlPFPT6Q1XR4v6OgxHlWPnBFyETvy2WND63v2eILL0%2F4A7IQxgeROnuQ4ygPhEtuWl4cUBVmbFr3he2SOfW0rOgC12lL6de2JutQHclQQFRIE6DvBR0JdMoYGnTac22WtJrAXH9o3KgEM9m%2BzFnFzXLRDyFFVmBEEg1dOOmX3aYyC0Z0OsiDxS2alGZ9M7ZBwQzcYuRFwfrz2CEfprGJgWVbYnYjt3LdTUicYy8ZqAYJBdLftQFgkDTV0QYSkCYwy7uRXxJ0%2BDeMvE1Db43FV9fJJ7Gk8QGk9uUqrzJv1SHZNvsKJysHMeZiVuLuYJ%2B1oTUKJADF6yDuB1T5lU6CxKXdMkbVCNB9JNCEOvpsnIzaHvW5DhzWXJFbbtmRE7tjNkdj1MIFO5C2aFsK3Qr599PDI1CiliExYBoC%2FFGD5paI5SYeKHZ1iIrY7pXJKOGlhPRauBzD7ggoutbewbxJ8X8phFJcMzuSsQYXYgseTC%2BprnABjqkAVjGNxw%2FkEGtZLVwhBFpUVOkcJKWXDWVtLObXJmH1lq%2BWhcNnjB10UlBkp31%2F%2BoE6bhQ%2FShnE3jjga2Z4WhQWtIvkN4gR4IofW3b0xvsQdJCPF2XxPO%2BeL4V14MdAQcl0YolAO3li6JQ%2BSsy2X4ePubopKV2UUo4qoPm%2BQk0aFws3WhASoefdMf4IsGu9DOduKAyY8NPJvdNPliXWDVurc9T1L1V&X-Amz-Signature=b8bdb1c86acb659782b0e7f563a726bb753f7b676ef0b8eec41817c92b463bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLZ6HZ7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2pcPelhdl9DssMzJkKJWv9tDQT14Aff%2Bsy8ljjulLwIhAK%2Bn6eJQOEieXHfnA03i1gksG4N8I%2Br56W91BLnfw%2BACKv8DCGEQABoMNjM3NDIzMTgzODA1IgyhisW9yLaIzjYAhyEq3AMyehxAytGthnMWtgPZti5e4jDHr6Vzgo4G1feD6e8xZx6zo4RRMCADLZjg6BZR1bBrdQfYqRxJdW0q2lsX0TDBcXPBBaJKqptuXOoG7a37zUPKL9UBZygJnXnI2iPu%2Be8EXqsQc4ALkQSWKOwmbPlPFPT6Q1XR4v6OgxHlWPnBFyETvy2WND63v2eILL0%2F4A7IQxgeROnuQ4ygPhEtuWl4cUBVmbFr3he2SOfW0rOgC12lL6de2JutQHclQQFRIE6DvBR0JdMoYGnTac22WtJrAXH9o3KgEM9m%2BzFnFzXLRDyFFVmBEEg1dOOmX3aYyC0Z0OsiDxS2alGZ9M7ZBwQzcYuRFwfrz2CEfprGJgWVbYnYjt3LdTUicYy8ZqAYJBdLftQFgkDTV0QYSkCYwy7uRXxJ0%2BDeMvE1Db43FV9fJJ7Gk8QGk9uUqrzJv1SHZNvsKJysHMeZiVuLuYJ%2B1oTUKJADF6yDuB1T5lU6CxKXdMkbVCNB9JNCEOvpsnIzaHvW5DhzWXJFbbtmRE7tjNkdj1MIFO5C2aFsK3Qr599PDI1CiliExYBoC%2FFGD5paI5SYeKHZ1iIrY7pXJKOGlhPRauBzD7ggoutbewbxJ8X8phFJcMzuSsQYXYgseTC%2BprnABjqkAVjGNxw%2FkEGtZLVwhBFpUVOkcJKWXDWVtLObXJmH1lq%2BWhcNnjB10UlBkp31%2F%2BoE6bhQ%2FShnE3jjga2Z4WhQWtIvkN4gR4IofW3b0xvsQdJCPF2XxPO%2BeL4V14MdAQcl0YolAO3li6JQ%2BSsy2X4ePubopKV2UUo4qoPm%2BQk0aFws3WhASoefdMf4IsGu9DOduKAyY8NPJvdNPliXWDVurc9T1L1V&X-Amz-Signature=80237fec52bf193f105ac0ac5aa842e1aaacbf9b2b0742c7dfd4b6abe04ebdb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLZ6HZ7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T170510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd2pcPelhdl9DssMzJkKJWv9tDQT14Aff%2Bsy8ljjulLwIhAK%2Bn6eJQOEieXHfnA03i1gksG4N8I%2Br56W91BLnfw%2BACKv8DCGEQABoMNjM3NDIzMTgzODA1IgyhisW9yLaIzjYAhyEq3AMyehxAytGthnMWtgPZti5e4jDHr6Vzgo4G1feD6e8xZx6zo4RRMCADLZjg6BZR1bBrdQfYqRxJdW0q2lsX0TDBcXPBBaJKqptuXOoG7a37zUPKL9UBZygJnXnI2iPu%2Be8EXqsQc4ALkQSWKOwmbPlPFPT6Q1XR4v6OgxHlWPnBFyETvy2WND63v2eILL0%2F4A7IQxgeROnuQ4ygPhEtuWl4cUBVmbFr3he2SOfW0rOgC12lL6de2JutQHclQQFRIE6DvBR0JdMoYGnTac22WtJrAXH9o3KgEM9m%2BzFnFzXLRDyFFVmBEEg1dOOmX3aYyC0Z0OsiDxS2alGZ9M7ZBwQzcYuRFwfrz2CEfprGJgWVbYnYjt3LdTUicYy8ZqAYJBdLftQFgkDTV0QYSkCYwy7uRXxJ0%2BDeMvE1Db43FV9fJJ7Gk8QGk9uUqrzJv1SHZNvsKJysHMeZiVuLuYJ%2B1oTUKJADF6yDuB1T5lU6CxKXdMkbVCNB9JNCEOvpsnIzaHvW5DhzWXJFbbtmRE7tjNkdj1MIFO5C2aFsK3Qr599PDI1CiliExYBoC%2FFGD5paI5SYeKHZ1iIrY7pXJKOGlhPRauBzD7ggoutbewbxJ8X8phFJcMzuSsQYXYgseTC%2BprnABjqkAVjGNxw%2FkEGtZLVwhBFpUVOkcJKWXDWVtLObXJmH1lq%2BWhcNnjB10UlBkp31%2F%2BoE6bhQ%2FShnE3jjga2Z4WhQWtIvkN4gR4IofW3b0xvsQdJCPF2XxPO%2BeL4V14MdAQcl0YolAO3li6JQ%2BSsy2X4ePubopKV2UUo4qoPm%2BQk0aFws3WhASoefdMf4IsGu9DOduKAyY8NPJvdNPliXWDVurc9T1L1V&X-Amz-Signature=189a5c0e7724168248bd588c146db6960f88bd312a7be83f24461e0b5b2a6173&X-Amz-SignedHeaders=host&x-id=GetObject)
