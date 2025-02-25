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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SJC3JR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEa6LahBB8unhD9XERuaMDWxXMls31%2BnRo9jclhLQ4EFAiEA3I1wgF5zgqp5yBalyYsCvrHzFbGQWSkvaxoVGXT0lzgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ1XP%2FdxA2FVQxcMbCrcA0LwJicWVUJBflyn5ZmEtN66u7Tgl9bHxVhc5bcG1C7c%2F8IotWzQns7OJgQbviIZK47Vv2VVSLHEn5vup0rGZDGW8FveNiJ9xQ3VR%2Ba56P0GbtwHbL2%2FN8TJui8yqKXJgjrK8qGdFzK7vbYxnH2mzQnUPu%2FOR8L7DwihLxFA%2FGczIFSnUmim%2FBDgpqm1%2F9WcFGxk05ZUYUyBU4%2BRDvZuVKKdAgGJZniUhQp%2BONdC4klNrWf2EYlpzDBvwadNkcyBtxYPdzrtoJ07Y4o3HCMgIsQFY%2BDT6lL8zx0Uzq4A1FKJSBqctzcyGtlqufXvcJglpsYEQ2v1wxENGdi0QELqfnYvRo3XHHyaKHFXZRi3pTdo7ONrecjrHmL4IK2VtEbx8rfdoOiRt%2FuOpPGnBfMn1G%2FRdNB35CsJ0%2F9BwVML0bv%2BhbQQB%2B8W4JoTJx1lQXXb00aext9i9V0FPlidT3qfpd6GeZGu6MVUsXA9h5TZ3%2FbpzKuYF6ydCQ4XQC%2FhRkHEsYdd4h5bY6JM5NNEYlV9QB6dGnB%2Fovci9sy0siOpoLsI%2BpBIJK7StZc7kLJ7O2v2GIWuA1%2BX0xGVz2p1dwLXChdrCHm1fVonT4yEJyAYKN%2BYmXCSBUolAqNwjQ6SMNHo9b0GOqUB3hApehQcJXQO%2B7UpW2WY6laq2emWjyYH8Hdrh%2Flqzaqr1FPjSJtfbh1Dveiv8npj76SVZARIhhnYV24BzfmLJcddgziocPnKXoQbWhCzysjlgeIIcYgPK1bVVbXgjUh6DZX8m6Z8vff1dkRuBiLUTF8a%2FcHu%2F0epQ4WbuAZQs%2FMptc2dkkSFqghSV6H578e9IpQ4aUJyezjYaS5GX0sP40ooqf7T&X-Amz-Signature=5509135cc9a62a446aabfee4125086f6799cea2288a85c12f7dc6232bd034d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SJC3JR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEa6LahBB8unhD9XERuaMDWxXMls31%2BnRo9jclhLQ4EFAiEA3I1wgF5zgqp5yBalyYsCvrHzFbGQWSkvaxoVGXT0lzgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ1XP%2FdxA2FVQxcMbCrcA0LwJicWVUJBflyn5ZmEtN66u7Tgl9bHxVhc5bcG1C7c%2F8IotWzQns7OJgQbviIZK47Vv2VVSLHEn5vup0rGZDGW8FveNiJ9xQ3VR%2Ba56P0GbtwHbL2%2FN8TJui8yqKXJgjrK8qGdFzK7vbYxnH2mzQnUPu%2FOR8L7DwihLxFA%2FGczIFSnUmim%2FBDgpqm1%2F9WcFGxk05ZUYUyBU4%2BRDvZuVKKdAgGJZniUhQp%2BONdC4klNrWf2EYlpzDBvwadNkcyBtxYPdzrtoJ07Y4o3HCMgIsQFY%2BDT6lL8zx0Uzq4A1FKJSBqctzcyGtlqufXvcJglpsYEQ2v1wxENGdi0QELqfnYvRo3XHHyaKHFXZRi3pTdo7ONrecjrHmL4IK2VtEbx8rfdoOiRt%2FuOpPGnBfMn1G%2FRdNB35CsJ0%2F9BwVML0bv%2BhbQQB%2B8W4JoTJx1lQXXb00aext9i9V0FPlidT3qfpd6GeZGu6MVUsXA9h5TZ3%2FbpzKuYF6ydCQ4XQC%2FhRkHEsYdd4h5bY6JM5NNEYlV9QB6dGnB%2Fovci9sy0siOpoLsI%2BpBIJK7StZc7kLJ7O2v2GIWuA1%2BX0xGVz2p1dwLXChdrCHm1fVonT4yEJyAYKN%2BYmXCSBUolAqNwjQ6SMNHo9b0GOqUB3hApehQcJXQO%2B7UpW2WY6laq2emWjyYH8Hdrh%2Flqzaqr1FPjSJtfbh1Dveiv8npj76SVZARIhhnYV24BzfmLJcddgziocPnKXoQbWhCzysjlgeIIcYgPK1bVVbXgjUh6DZX8m6Z8vff1dkRuBiLUTF8a%2FcHu%2F0epQ4WbuAZQs%2FMptc2dkkSFqghSV6H578e9IpQ4aUJyezjYaS5GX0sP40ooqf7T&X-Amz-Signature=aa1c07a878d7f115641d4288a2f9b2f804fd5f77c2e63c5217917e8c882711fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SJC3JR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEa6LahBB8unhD9XERuaMDWxXMls31%2BnRo9jclhLQ4EFAiEA3I1wgF5zgqp5yBalyYsCvrHzFbGQWSkvaxoVGXT0lzgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ1XP%2FdxA2FVQxcMbCrcA0LwJicWVUJBflyn5ZmEtN66u7Tgl9bHxVhc5bcG1C7c%2F8IotWzQns7OJgQbviIZK47Vv2VVSLHEn5vup0rGZDGW8FveNiJ9xQ3VR%2Ba56P0GbtwHbL2%2FN8TJui8yqKXJgjrK8qGdFzK7vbYxnH2mzQnUPu%2FOR8L7DwihLxFA%2FGczIFSnUmim%2FBDgpqm1%2F9WcFGxk05ZUYUyBU4%2BRDvZuVKKdAgGJZniUhQp%2BONdC4klNrWf2EYlpzDBvwadNkcyBtxYPdzrtoJ07Y4o3HCMgIsQFY%2BDT6lL8zx0Uzq4A1FKJSBqctzcyGtlqufXvcJglpsYEQ2v1wxENGdi0QELqfnYvRo3XHHyaKHFXZRi3pTdo7ONrecjrHmL4IK2VtEbx8rfdoOiRt%2FuOpPGnBfMn1G%2FRdNB35CsJ0%2F9BwVML0bv%2BhbQQB%2B8W4JoTJx1lQXXb00aext9i9V0FPlidT3qfpd6GeZGu6MVUsXA9h5TZ3%2FbpzKuYF6ydCQ4XQC%2FhRkHEsYdd4h5bY6JM5NNEYlV9QB6dGnB%2Fovci9sy0siOpoLsI%2BpBIJK7StZc7kLJ7O2v2GIWuA1%2BX0xGVz2p1dwLXChdrCHm1fVonT4yEJyAYKN%2BYmXCSBUolAqNwjQ6SMNHo9b0GOqUB3hApehQcJXQO%2B7UpW2WY6laq2emWjyYH8Hdrh%2Flqzaqr1FPjSJtfbh1Dveiv8npj76SVZARIhhnYV24BzfmLJcddgziocPnKXoQbWhCzysjlgeIIcYgPK1bVVbXgjUh6DZX8m6Z8vff1dkRuBiLUTF8a%2FcHu%2F0epQ4WbuAZQs%2FMptc2dkkSFqghSV6H578e9IpQ4aUJyezjYaS5GX0sP40ooqf7T&X-Amz-Signature=7140cb2da2032d1d922dc6ad6a0ee91e8238dbed53c6133cd39673ca0b4f69d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SJC3JR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEa6LahBB8unhD9XERuaMDWxXMls31%2BnRo9jclhLQ4EFAiEA3I1wgF5zgqp5yBalyYsCvrHzFbGQWSkvaxoVGXT0lzgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ1XP%2FdxA2FVQxcMbCrcA0LwJicWVUJBflyn5ZmEtN66u7Tgl9bHxVhc5bcG1C7c%2F8IotWzQns7OJgQbviIZK47Vv2VVSLHEn5vup0rGZDGW8FveNiJ9xQ3VR%2Ba56P0GbtwHbL2%2FN8TJui8yqKXJgjrK8qGdFzK7vbYxnH2mzQnUPu%2FOR8L7DwihLxFA%2FGczIFSnUmim%2FBDgpqm1%2F9WcFGxk05ZUYUyBU4%2BRDvZuVKKdAgGJZniUhQp%2BONdC4klNrWf2EYlpzDBvwadNkcyBtxYPdzrtoJ07Y4o3HCMgIsQFY%2BDT6lL8zx0Uzq4A1FKJSBqctzcyGtlqufXvcJglpsYEQ2v1wxENGdi0QELqfnYvRo3XHHyaKHFXZRi3pTdo7ONrecjrHmL4IK2VtEbx8rfdoOiRt%2FuOpPGnBfMn1G%2FRdNB35CsJ0%2F9BwVML0bv%2BhbQQB%2B8W4JoTJx1lQXXb00aext9i9V0FPlidT3qfpd6GeZGu6MVUsXA9h5TZ3%2FbpzKuYF6ydCQ4XQC%2FhRkHEsYdd4h5bY6JM5NNEYlV9QB6dGnB%2Fovci9sy0siOpoLsI%2BpBIJK7StZc7kLJ7O2v2GIWuA1%2BX0xGVz2p1dwLXChdrCHm1fVonT4yEJyAYKN%2BYmXCSBUolAqNwjQ6SMNHo9b0GOqUB3hApehQcJXQO%2B7UpW2WY6laq2emWjyYH8Hdrh%2Flqzaqr1FPjSJtfbh1Dveiv8npj76SVZARIhhnYV24BzfmLJcddgziocPnKXoQbWhCzysjlgeIIcYgPK1bVVbXgjUh6DZX8m6Z8vff1dkRuBiLUTF8a%2FcHu%2F0epQ4WbuAZQs%2FMptc2dkkSFqghSV6H578e9IpQ4aUJyezjYaS5GX0sP40ooqf7T&X-Amz-Signature=5d675742d34270e16599b7b4cc88e203f6b28f765c60ad0532ea9e3ec4c2f217&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SJC3JR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEa6LahBB8unhD9XERuaMDWxXMls31%2BnRo9jclhLQ4EFAiEA3I1wgF5zgqp5yBalyYsCvrHzFbGQWSkvaxoVGXT0lzgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ1XP%2FdxA2FVQxcMbCrcA0LwJicWVUJBflyn5ZmEtN66u7Tgl9bHxVhc5bcG1C7c%2F8IotWzQns7OJgQbviIZK47Vv2VVSLHEn5vup0rGZDGW8FveNiJ9xQ3VR%2Ba56P0GbtwHbL2%2FN8TJui8yqKXJgjrK8qGdFzK7vbYxnH2mzQnUPu%2FOR8L7DwihLxFA%2FGczIFSnUmim%2FBDgpqm1%2F9WcFGxk05ZUYUyBU4%2BRDvZuVKKdAgGJZniUhQp%2BONdC4klNrWf2EYlpzDBvwadNkcyBtxYPdzrtoJ07Y4o3HCMgIsQFY%2BDT6lL8zx0Uzq4A1FKJSBqctzcyGtlqufXvcJglpsYEQ2v1wxENGdi0QELqfnYvRo3XHHyaKHFXZRi3pTdo7ONrecjrHmL4IK2VtEbx8rfdoOiRt%2FuOpPGnBfMn1G%2FRdNB35CsJ0%2F9BwVML0bv%2BhbQQB%2B8W4JoTJx1lQXXb00aext9i9V0FPlidT3qfpd6GeZGu6MVUsXA9h5TZ3%2FbpzKuYF6ydCQ4XQC%2FhRkHEsYdd4h5bY6JM5NNEYlV9QB6dGnB%2Fovci9sy0siOpoLsI%2BpBIJK7StZc7kLJ7O2v2GIWuA1%2BX0xGVz2p1dwLXChdrCHm1fVonT4yEJyAYKN%2BYmXCSBUolAqNwjQ6SMNHo9b0GOqUB3hApehQcJXQO%2B7UpW2WY6laq2emWjyYH8Hdrh%2Flqzaqr1FPjSJtfbh1Dveiv8npj76SVZARIhhnYV24BzfmLJcddgziocPnKXoQbWhCzysjlgeIIcYgPK1bVVbXgjUh6DZX8m6Z8vff1dkRuBiLUTF8a%2FcHu%2F0epQ4WbuAZQs%2FMptc2dkkSFqghSV6H578e9IpQ4aUJyezjYaS5GX0sP40ooqf7T&X-Amz-Signature=398c5e99b154d4afc504dfaf4f7b0cf9cf8dff2e8cfbaf635a10ff2ed979aace&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SJC3JR%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEa6LahBB8unhD9XERuaMDWxXMls31%2BnRo9jclhLQ4EFAiEA3I1wgF5zgqp5yBalyYsCvrHzFbGQWSkvaxoVGXT0lzgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDJ1XP%2FdxA2FVQxcMbCrcA0LwJicWVUJBflyn5ZmEtN66u7Tgl9bHxVhc5bcG1C7c%2F8IotWzQns7OJgQbviIZK47Vv2VVSLHEn5vup0rGZDGW8FveNiJ9xQ3VR%2Ba56P0GbtwHbL2%2FN8TJui8yqKXJgjrK8qGdFzK7vbYxnH2mzQnUPu%2FOR8L7DwihLxFA%2FGczIFSnUmim%2FBDgpqm1%2F9WcFGxk05ZUYUyBU4%2BRDvZuVKKdAgGJZniUhQp%2BONdC4klNrWf2EYlpzDBvwadNkcyBtxYPdzrtoJ07Y4o3HCMgIsQFY%2BDT6lL8zx0Uzq4A1FKJSBqctzcyGtlqufXvcJglpsYEQ2v1wxENGdi0QELqfnYvRo3XHHyaKHFXZRi3pTdo7ONrecjrHmL4IK2VtEbx8rfdoOiRt%2FuOpPGnBfMn1G%2FRdNB35CsJ0%2F9BwVML0bv%2BhbQQB%2B8W4JoTJx1lQXXb00aext9i9V0FPlidT3qfpd6GeZGu6MVUsXA9h5TZ3%2FbpzKuYF6ydCQ4XQC%2FhRkHEsYdd4h5bY6JM5NNEYlV9QB6dGnB%2Fovci9sy0siOpoLsI%2BpBIJK7StZc7kLJ7O2v2GIWuA1%2BX0xGVz2p1dwLXChdrCHm1fVonT4yEJyAYKN%2BYmXCSBUolAqNwjQ6SMNHo9b0GOqUB3hApehQcJXQO%2B7UpW2WY6laq2emWjyYH8Hdrh%2Flqzaqr1FPjSJtfbh1Dveiv8npj76SVZARIhhnYV24BzfmLJcddgziocPnKXoQbWhCzysjlgeIIcYgPK1bVVbXgjUh6DZX8m6Z8vff1dkRuBiLUTF8a%2FcHu%2F0epQ4WbuAZQs%2FMptc2dkkSFqghSV6H578e9IpQ4aUJyezjYaS5GX0sP40ooqf7T&X-Amz-Signature=db30d650ddec48abb28d7bdef98c15ceadb175770a8ad0355f79f185bc692847&X-Amz-SignedHeaders=host&x-id=GetObject)
