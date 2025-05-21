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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTE3EUT5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSgvB0MLkFwWpb6zvJtILSWPUXs7LwS3H5yriEgG8FNQIgWvWrw8nIZhUSiRxQlFObo9sXj%2BBztH4yrY3WRb0F5KUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9n72yAfT6KZzzqTSrcA4L1pgEBbc2V74sto5yZi5WmPXQUcHzgJndWeZ2x4Wpxma3xm7KHIhxz4leoYz7d71OEkiCgtf7XAhvMSqMqpNDIhn3lrIDjK0KNwICDO7fmaH5QxjQ23LjkeOrLBU3eNx1VADGCCmy0RRrB%2BXzGx2sVYkkJ7nHXMxU7%2F2V%2BEwRuvyCh0IRCldyZaYLgFh6imsbYHkavV%2BKtyLOLg1G04vsGwaRa6ez4E1ugXuAmVHQrHTKn5pUsO7ccR2ztrkirDPVx%2FITceZksEC4aail6Gjmjb%2FZLlxEm3oBfN7fijpQZRCRf2WHTLnpc9e2kjqICy%2Bmq58Zp53JsJF8Fsu0En4eDV0dkCwZP07ymVQvA%2Byas6EPknRqbrTEMFPutduOs2euFPF6ZysxMVJvbpRs0hQvRmk426h0LOKKaF2giL6pmWzK0RQgvArziytUXIK%2FnSXkY5XajC%2BxSZATVZpf6AJWS3j%2BycVUzrKFH%2B5NjWEKGhOd7ZUV8QDzWrb5yQk4SNvQoT9FY6e2NrV8Nt1YN67YtQhRDx9PLURGsQ26SC11VSTJfAQuGdN0SQNeLynKh3gNE9Qo%2BLC9RrkP%2Fu3vKeayoXfWi54CbVg7frUobCRP%2FzizYcWegHU1e10hpMOTstcEGOqUBtDZSOrrJotVCEasogsIWawqlF7av4lswuIo6YG%2BbOYxzvCHI8Z1W7tEHXODo%2Ba%2FH06nN6aWkcRw4a8pYfpXuqFUDSoCOs04xyF243LyvW3p1POEe%2FV5VOCIcc0zeSMIxDZuva83jQb0iW3kxzVkfA6tdwhuFoA4o3UhOj0JerukUZzVWTXkWYqWkyn5dz8BIFVqfj5kHnHKQ59EYNh6fx0KzV8mB&X-Amz-Signature=95780f4569174182c14ef0feb1ebcc774516651a939f4166f02939d33b2ffd4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTE3EUT5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSgvB0MLkFwWpb6zvJtILSWPUXs7LwS3H5yriEgG8FNQIgWvWrw8nIZhUSiRxQlFObo9sXj%2BBztH4yrY3WRb0F5KUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9n72yAfT6KZzzqTSrcA4L1pgEBbc2V74sto5yZi5WmPXQUcHzgJndWeZ2x4Wpxma3xm7KHIhxz4leoYz7d71OEkiCgtf7XAhvMSqMqpNDIhn3lrIDjK0KNwICDO7fmaH5QxjQ23LjkeOrLBU3eNx1VADGCCmy0RRrB%2BXzGx2sVYkkJ7nHXMxU7%2F2V%2BEwRuvyCh0IRCldyZaYLgFh6imsbYHkavV%2BKtyLOLg1G04vsGwaRa6ez4E1ugXuAmVHQrHTKn5pUsO7ccR2ztrkirDPVx%2FITceZksEC4aail6Gjmjb%2FZLlxEm3oBfN7fijpQZRCRf2WHTLnpc9e2kjqICy%2Bmq58Zp53JsJF8Fsu0En4eDV0dkCwZP07ymVQvA%2Byas6EPknRqbrTEMFPutduOs2euFPF6ZysxMVJvbpRs0hQvRmk426h0LOKKaF2giL6pmWzK0RQgvArziytUXIK%2FnSXkY5XajC%2BxSZATVZpf6AJWS3j%2BycVUzrKFH%2B5NjWEKGhOd7ZUV8QDzWrb5yQk4SNvQoT9FY6e2NrV8Nt1YN67YtQhRDx9PLURGsQ26SC11VSTJfAQuGdN0SQNeLynKh3gNE9Qo%2BLC9RrkP%2Fu3vKeayoXfWi54CbVg7frUobCRP%2FzizYcWegHU1e10hpMOTstcEGOqUBtDZSOrrJotVCEasogsIWawqlF7av4lswuIo6YG%2BbOYxzvCHI8Z1W7tEHXODo%2Ba%2FH06nN6aWkcRw4a8pYfpXuqFUDSoCOs04xyF243LyvW3p1POEe%2FV5VOCIcc0zeSMIxDZuva83jQb0iW3kxzVkfA6tdwhuFoA4o3UhOj0JerukUZzVWTXkWYqWkyn5dz8BIFVqfj5kHnHKQ59EYNh6fx0KzV8mB&X-Amz-Signature=1ce5d8d2033cec7f9b3ce9259e3f1f5c6ca9f208a2f958275940f49bdf7fbb03&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTE3EUT5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSgvB0MLkFwWpb6zvJtILSWPUXs7LwS3H5yriEgG8FNQIgWvWrw8nIZhUSiRxQlFObo9sXj%2BBztH4yrY3WRb0F5KUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9n72yAfT6KZzzqTSrcA4L1pgEBbc2V74sto5yZi5WmPXQUcHzgJndWeZ2x4Wpxma3xm7KHIhxz4leoYz7d71OEkiCgtf7XAhvMSqMqpNDIhn3lrIDjK0KNwICDO7fmaH5QxjQ23LjkeOrLBU3eNx1VADGCCmy0RRrB%2BXzGx2sVYkkJ7nHXMxU7%2F2V%2BEwRuvyCh0IRCldyZaYLgFh6imsbYHkavV%2BKtyLOLg1G04vsGwaRa6ez4E1ugXuAmVHQrHTKn5pUsO7ccR2ztrkirDPVx%2FITceZksEC4aail6Gjmjb%2FZLlxEm3oBfN7fijpQZRCRf2WHTLnpc9e2kjqICy%2Bmq58Zp53JsJF8Fsu0En4eDV0dkCwZP07ymVQvA%2Byas6EPknRqbrTEMFPutduOs2euFPF6ZysxMVJvbpRs0hQvRmk426h0LOKKaF2giL6pmWzK0RQgvArziytUXIK%2FnSXkY5XajC%2BxSZATVZpf6AJWS3j%2BycVUzrKFH%2B5NjWEKGhOd7ZUV8QDzWrb5yQk4SNvQoT9FY6e2NrV8Nt1YN67YtQhRDx9PLURGsQ26SC11VSTJfAQuGdN0SQNeLynKh3gNE9Qo%2BLC9RrkP%2Fu3vKeayoXfWi54CbVg7frUobCRP%2FzizYcWegHU1e10hpMOTstcEGOqUBtDZSOrrJotVCEasogsIWawqlF7av4lswuIo6YG%2BbOYxzvCHI8Z1W7tEHXODo%2Ba%2FH06nN6aWkcRw4a8pYfpXuqFUDSoCOs04xyF243LyvW3p1POEe%2FV5VOCIcc0zeSMIxDZuva83jQb0iW3kxzVkfA6tdwhuFoA4o3UhOj0JerukUZzVWTXkWYqWkyn5dz8BIFVqfj5kHnHKQ59EYNh6fx0KzV8mB&X-Amz-Signature=ca101afa3ed0044df822ae2f77028e45b8cf4c2b381b5a11be5bf7c0545ce152&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTE3EUT5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSgvB0MLkFwWpb6zvJtILSWPUXs7LwS3H5yriEgG8FNQIgWvWrw8nIZhUSiRxQlFObo9sXj%2BBztH4yrY3WRb0F5KUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9n72yAfT6KZzzqTSrcA4L1pgEBbc2V74sto5yZi5WmPXQUcHzgJndWeZ2x4Wpxma3xm7KHIhxz4leoYz7d71OEkiCgtf7XAhvMSqMqpNDIhn3lrIDjK0KNwICDO7fmaH5QxjQ23LjkeOrLBU3eNx1VADGCCmy0RRrB%2BXzGx2sVYkkJ7nHXMxU7%2F2V%2BEwRuvyCh0IRCldyZaYLgFh6imsbYHkavV%2BKtyLOLg1G04vsGwaRa6ez4E1ugXuAmVHQrHTKn5pUsO7ccR2ztrkirDPVx%2FITceZksEC4aail6Gjmjb%2FZLlxEm3oBfN7fijpQZRCRf2WHTLnpc9e2kjqICy%2Bmq58Zp53JsJF8Fsu0En4eDV0dkCwZP07ymVQvA%2Byas6EPknRqbrTEMFPutduOs2euFPF6ZysxMVJvbpRs0hQvRmk426h0LOKKaF2giL6pmWzK0RQgvArziytUXIK%2FnSXkY5XajC%2BxSZATVZpf6AJWS3j%2BycVUzrKFH%2B5NjWEKGhOd7ZUV8QDzWrb5yQk4SNvQoT9FY6e2NrV8Nt1YN67YtQhRDx9PLURGsQ26SC11VSTJfAQuGdN0SQNeLynKh3gNE9Qo%2BLC9RrkP%2Fu3vKeayoXfWi54CbVg7frUobCRP%2FzizYcWegHU1e10hpMOTstcEGOqUBtDZSOrrJotVCEasogsIWawqlF7av4lswuIo6YG%2BbOYxzvCHI8Z1W7tEHXODo%2Ba%2FH06nN6aWkcRw4a8pYfpXuqFUDSoCOs04xyF243LyvW3p1POEe%2FV5VOCIcc0zeSMIxDZuva83jQb0iW3kxzVkfA6tdwhuFoA4o3UhOj0JerukUZzVWTXkWYqWkyn5dz8BIFVqfj5kHnHKQ59EYNh6fx0KzV8mB&X-Amz-Signature=418a99b81837bbc52d507ceb403fa989cf1473cafb3cfcc6119f6b63a14d20b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTE3EUT5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSgvB0MLkFwWpb6zvJtILSWPUXs7LwS3H5yriEgG8FNQIgWvWrw8nIZhUSiRxQlFObo9sXj%2BBztH4yrY3WRb0F5KUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9n72yAfT6KZzzqTSrcA4L1pgEBbc2V74sto5yZi5WmPXQUcHzgJndWeZ2x4Wpxma3xm7KHIhxz4leoYz7d71OEkiCgtf7XAhvMSqMqpNDIhn3lrIDjK0KNwICDO7fmaH5QxjQ23LjkeOrLBU3eNx1VADGCCmy0RRrB%2BXzGx2sVYkkJ7nHXMxU7%2F2V%2BEwRuvyCh0IRCldyZaYLgFh6imsbYHkavV%2BKtyLOLg1G04vsGwaRa6ez4E1ugXuAmVHQrHTKn5pUsO7ccR2ztrkirDPVx%2FITceZksEC4aail6Gjmjb%2FZLlxEm3oBfN7fijpQZRCRf2WHTLnpc9e2kjqICy%2Bmq58Zp53JsJF8Fsu0En4eDV0dkCwZP07ymVQvA%2Byas6EPknRqbrTEMFPutduOs2euFPF6ZysxMVJvbpRs0hQvRmk426h0LOKKaF2giL6pmWzK0RQgvArziytUXIK%2FnSXkY5XajC%2BxSZATVZpf6AJWS3j%2BycVUzrKFH%2B5NjWEKGhOd7ZUV8QDzWrb5yQk4SNvQoT9FY6e2NrV8Nt1YN67YtQhRDx9PLURGsQ26SC11VSTJfAQuGdN0SQNeLynKh3gNE9Qo%2BLC9RrkP%2Fu3vKeayoXfWi54CbVg7frUobCRP%2FzizYcWegHU1e10hpMOTstcEGOqUBtDZSOrrJotVCEasogsIWawqlF7av4lswuIo6YG%2BbOYxzvCHI8Z1W7tEHXODo%2Ba%2FH06nN6aWkcRw4a8pYfpXuqFUDSoCOs04xyF243LyvW3p1POEe%2FV5VOCIcc0zeSMIxDZuva83jQb0iW3kxzVkfA6tdwhuFoA4o3UhOj0JerukUZzVWTXkWYqWkyn5dz8BIFVqfj5kHnHKQ59EYNh6fx0KzV8mB&X-Amz-Signature=f481668d35046fff573604b701c6f5002b97893194a5a3c49edc3d584d5fef1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTE3EUT5%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSgvB0MLkFwWpb6zvJtILSWPUXs7LwS3H5yriEgG8FNQIgWvWrw8nIZhUSiRxQlFObo9sXj%2BBztH4yrY3WRb0F5KUqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9n72yAfT6KZzzqTSrcA4L1pgEBbc2V74sto5yZi5WmPXQUcHzgJndWeZ2x4Wpxma3xm7KHIhxz4leoYz7d71OEkiCgtf7XAhvMSqMqpNDIhn3lrIDjK0KNwICDO7fmaH5QxjQ23LjkeOrLBU3eNx1VADGCCmy0RRrB%2BXzGx2sVYkkJ7nHXMxU7%2F2V%2BEwRuvyCh0IRCldyZaYLgFh6imsbYHkavV%2BKtyLOLg1G04vsGwaRa6ez4E1ugXuAmVHQrHTKn5pUsO7ccR2ztrkirDPVx%2FITceZksEC4aail6Gjmjb%2FZLlxEm3oBfN7fijpQZRCRf2WHTLnpc9e2kjqICy%2Bmq58Zp53JsJF8Fsu0En4eDV0dkCwZP07ymVQvA%2Byas6EPknRqbrTEMFPutduOs2euFPF6ZysxMVJvbpRs0hQvRmk426h0LOKKaF2giL6pmWzK0RQgvArziytUXIK%2FnSXkY5XajC%2BxSZATVZpf6AJWS3j%2BycVUzrKFH%2B5NjWEKGhOd7ZUV8QDzWrb5yQk4SNvQoT9FY6e2NrV8Nt1YN67YtQhRDx9PLURGsQ26SC11VSTJfAQuGdN0SQNeLynKh3gNE9Qo%2BLC9RrkP%2Fu3vKeayoXfWi54CbVg7frUobCRP%2FzizYcWegHU1e10hpMOTstcEGOqUBtDZSOrrJotVCEasogsIWawqlF7av4lswuIo6YG%2BbOYxzvCHI8Z1W7tEHXODo%2Ba%2FH06nN6aWkcRw4a8pYfpXuqFUDSoCOs04xyF243LyvW3p1POEe%2FV5VOCIcc0zeSMIxDZuva83jQb0iW3kxzVkfA6tdwhuFoA4o3UhOj0JerukUZzVWTXkWYqWkyn5dz8BIFVqfj5kHnHKQ59EYNh6fx0KzV8mB&X-Amz-Signature=058078509258cf375caa97812215cb1743b46f5dc42d0671782b30d4ca415edc&X-Amz-SignedHeaders=host&x-id=GetObject)
