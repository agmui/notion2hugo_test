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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3WBECC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASqM3HwHz%2FhzJ7zFLufEWeVsZ4satonntHizK9cpEOCAiEA6x9RIAev2iVeeqRESezazb9SxRXRPoJBripGzKfqUu4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD69JGPNI4YDvRfA0CrcA9t1MKVMJczlrbYLV20pj6xhU8K9zM%2BlDi%2F33zhQa0%2BahpGgaHowIDE8tg4CQ7Fs6HbwyhRooBobF7tcLxIwb%2FT1YpO5u7jSRmGEqg8ZZuxH3P3lbmr%2BB%2FQxnHHKZH7%2FNLucNq93pZU8HXRcI5Gh97pgL2HHBIG6dNZER4X2b7cUMbecKxdR5pGBJFMWWteRXH4gr7DBBBoJbJPZ%2FOXNUqO6X6tPIADmT6nA1Iqs9pOscfDddpwPKkvTjjinTplQBiK%2FFA8%2Bar8YkDFSQePQRTEAqbve59N78mpygAaNuToVIeuMaTHv9Knbc5LAXCbMFH71UYhY2EIEFsqKgqdHET3EJNHtxrmek7DY6IprqjziW68XrPe7KuROHutLurB5%2FAyo0efrqZDzm0viJ4NAGfjfk4hPkyF8zGcRUEDrG%2BN%2BQQ1ZJsnoplVQzMl7czwKcBdWyk3b7%2FTJke2ZHJ7wh8xR9I99OvhGDOskf5StkbOd263DKt7SiX0lT4C7yilNCStLtkXeProkR0lAO2yTNAa54uFFi6QTyAIQ1pVYlm7xFbYZYyliK3x%2BNDethKJ7P4HQ%2FlbJwUVdCIt7WpEgYN5Dsk6RhqQdE33Hi1aH1kMdYrZsml3fR6Nf7O5xMO3ms8AGOqUBjadd9bw3WRNTPL10EXSnpwzzQP6r3zaZUJU8Pv79LNvIi6vT%2B5ipgXwGWS7KoNNfPuParoGDMuEJjZLenmw5H84ckQbyVadNbvuFxXQ4zP4ybNPcp64Xbc0jxOrbwqEy93ROpUxbBEBEsvzSCOKg3hEoADEaAUvRB9bvo4t2UDwN6g5EatQmuHkyJJZ%2B00ZDvw4HfsE3LZWSau92%2BdNENAVjUFO8&X-Amz-Signature=249ea2ea9f7c550b77624163515f3c688ca488b9c65996bfdc70735b13309aae&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3WBECC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASqM3HwHz%2FhzJ7zFLufEWeVsZ4satonntHizK9cpEOCAiEA6x9RIAev2iVeeqRESezazb9SxRXRPoJBripGzKfqUu4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD69JGPNI4YDvRfA0CrcA9t1MKVMJczlrbYLV20pj6xhU8K9zM%2BlDi%2F33zhQa0%2BahpGgaHowIDE8tg4CQ7Fs6HbwyhRooBobF7tcLxIwb%2FT1YpO5u7jSRmGEqg8ZZuxH3P3lbmr%2BB%2FQxnHHKZH7%2FNLucNq93pZU8HXRcI5Gh97pgL2HHBIG6dNZER4X2b7cUMbecKxdR5pGBJFMWWteRXH4gr7DBBBoJbJPZ%2FOXNUqO6X6tPIADmT6nA1Iqs9pOscfDddpwPKkvTjjinTplQBiK%2FFA8%2Bar8YkDFSQePQRTEAqbve59N78mpygAaNuToVIeuMaTHv9Knbc5LAXCbMFH71UYhY2EIEFsqKgqdHET3EJNHtxrmek7DY6IprqjziW68XrPe7KuROHutLurB5%2FAyo0efrqZDzm0viJ4NAGfjfk4hPkyF8zGcRUEDrG%2BN%2BQQ1ZJsnoplVQzMl7czwKcBdWyk3b7%2FTJke2ZHJ7wh8xR9I99OvhGDOskf5StkbOd263DKt7SiX0lT4C7yilNCStLtkXeProkR0lAO2yTNAa54uFFi6QTyAIQ1pVYlm7xFbYZYyliK3x%2BNDethKJ7P4HQ%2FlbJwUVdCIt7WpEgYN5Dsk6RhqQdE33Hi1aH1kMdYrZsml3fR6Nf7O5xMO3ms8AGOqUBjadd9bw3WRNTPL10EXSnpwzzQP6r3zaZUJU8Pv79LNvIi6vT%2B5ipgXwGWS7KoNNfPuParoGDMuEJjZLenmw5H84ckQbyVadNbvuFxXQ4zP4ybNPcp64Xbc0jxOrbwqEy93ROpUxbBEBEsvzSCOKg3hEoADEaAUvRB9bvo4t2UDwN6g5EatQmuHkyJJZ%2B00ZDvw4HfsE3LZWSau92%2BdNENAVjUFO8&X-Amz-Signature=e766a62cb2ded7781029509a2c6a025929881105cc1333870f8c9d70a5dbfdc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3WBECC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASqM3HwHz%2FhzJ7zFLufEWeVsZ4satonntHizK9cpEOCAiEA6x9RIAev2iVeeqRESezazb9SxRXRPoJBripGzKfqUu4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD69JGPNI4YDvRfA0CrcA9t1MKVMJczlrbYLV20pj6xhU8K9zM%2BlDi%2F33zhQa0%2BahpGgaHowIDE8tg4CQ7Fs6HbwyhRooBobF7tcLxIwb%2FT1YpO5u7jSRmGEqg8ZZuxH3P3lbmr%2BB%2FQxnHHKZH7%2FNLucNq93pZU8HXRcI5Gh97pgL2HHBIG6dNZER4X2b7cUMbecKxdR5pGBJFMWWteRXH4gr7DBBBoJbJPZ%2FOXNUqO6X6tPIADmT6nA1Iqs9pOscfDddpwPKkvTjjinTplQBiK%2FFA8%2Bar8YkDFSQePQRTEAqbve59N78mpygAaNuToVIeuMaTHv9Knbc5LAXCbMFH71UYhY2EIEFsqKgqdHET3EJNHtxrmek7DY6IprqjziW68XrPe7KuROHutLurB5%2FAyo0efrqZDzm0viJ4NAGfjfk4hPkyF8zGcRUEDrG%2BN%2BQQ1ZJsnoplVQzMl7czwKcBdWyk3b7%2FTJke2ZHJ7wh8xR9I99OvhGDOskf5StkbOd263DKt7SiX0lT4C7yilNCStLtkXeProkR0lAO2yTNAa54uFFi6QTyAIQ1pVYlm7xFbYZYyliK3x%2BNDethKJ7P4HQ%2FlbJwUVdCIt7WpEgYN5Dsk6RhqQdE33Hi1aH1kMdYrZsml3fR6Nf7O5xMO3ms8AGOqUBjadd9bw3WRNTPL10EXSnpwzzQP6r3zaZUJU8Pv79LNvIi6vT%2B5ipgXwGWS7KoNNfPuParoGDMuEJjZLenmw5H84ckQbyVadNbvuFxXQ4zP4ybNPcp64Xbc0jxOrbwqEy93ROpUxbBEBEsvzSCOKg3hEoADEaAUvRB9bvo4t2UDwN6g5EatQmuHkyJJZ%2B00ZDvw4HfsE3LZWSau92%2BdNENAVjUFO8&X-Amz-Signature=dbac88980a45177c122a05f4143f5abaf1b1bf594ee777a351db00f2080e1251&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3WBECC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASqM3HwHz%2FhzJ7zFLufEWeVsZ4satonntHizK9cpEOCAiEA6x9RIAev2iVeeqRESezazb9SxRXRPoJBripGzKfqUu4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD69JGPNI4YDvRfA0CrcA9t1MKVMJczlrbYLV20pj6xhU8K9zM%2BlDi%2F33zhQa0%2BahpGgaHowIDE8tg4CQ7Fs6HbwyhRooBobF7tcLxIwb%2FT1YpO5u7jSRmGEqg8ZZuxH3P3lbmr%2BB%2FQxnHHKZH7%2FNLucNq93pZU8HXRcI5Gh97pgL2HHBIG6dNZER4X2b7cUMbecKxdR5pGBJFMWWteRXH4gr7DBBBoJbJPZ%2FOXNUqO6X6tPIADmT6nA1Iqs9pOscfDddpwPKkvTjjinTplQBiK%2FFA8%2Bar8YkDFSQePQRTEAqbve59N78mpygAaNuToVIeuMaTHv9Knbc5LAXCbMFH71UYhY2EIEFsqKgqdHET3EJNHtxrmek7DY6IprqjziW68XrPe7KuROHutLurB5%2FAyo0efrqZDzm0viJ4NAGfjfk4hPkyF8zGcRUEDrG%2BN%2BQQ1ZJsnoplVQzMl7czwKcBdWyk3b7%2FTJke2ZHJ7wh8xR9I99OvhGDOskf5StkbOd263DKt7SiX0lT4C7yilNCStLtkXeProkR0lAO2yTNAa54uFFi6QTyAIQ1pVYlm7xFbYZYyliK3x%2BNDethKJ7P4HQ%2FlbJwUVdCIt7WpEgYN5Dsk6RhqQdE33Hi1aH1kMdYrZsml3fR6Nf7O5xMO3ms8AGOqUBjadd9bw3WRNTPL10EXSnpwzzQP6r3zaZUJU8Pv79LNvIi6vT%2B5ipgXwGWS7KoNNfPuParoGDMuEJjZLenmw5H84ckQbyVadNbvuFxXQ4zP4ybNPcp64Xbc0jxOrbwqEy93ROpUxbBEBEsvzSCOKg3hEoADEaAUvRB9bvo4t2UDwN6g5EatQmuHkyJJZ%2B00ZDvw4HfsE3LZWSau92%2BdNENAVjUFO8&X-Amz-Signature=01e08428251ac73ffa9fc37da041759e8bbcfdef6d6a2cac19d8bb736aebfef7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3WBECC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASqM3HwHz%2FhzJ7zFLufEWeVsZ4satonntHizK9cpEOCAiEA6x9RIAev2iVeeqRESezazb9SxRXRPoJBripGzKfqUu4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD69JGPNI4YDvRfA0CrcA9t1MKVMJczlrbYLV20pj6xhU8K9zM%2BlDi%2F33zhQa0%2BahpGgaHowIDE8tg4CQ7Fs6HbwyhRooBobF7tcLxIwb%2FT1YpO5u7jSRmGEqg8ZZuxH3P3lbmr%2BB%2FQxnHHKZH7%2FNLucNq93pZU8HXRcI5Gh97pgL2HHBIG6dNZER4X2b7cUMbecKxdR5pGBJFMWWteRXH4gr7DBBBoJbJPZ%2FOXNUqO6X6tPIADmT6nA1Iqs9pOscfDddpwPKkvTjjinTplQBiK%2FFA8%2Bar8YkDFSQePQRTEAqbve59N78mpygAaNuToVIeuMaTHv9Knbc5LAXCbMFH71UYhY2EIEFsqKgqdHET3EJNHtxrmek7DY6IprqjziW68XrPe7KuROHutLurB5%2FAyo0efrqZDzm0viJ4NAGfjfk4hPkyF8zGcRUEDrG%2BN%2BQQ1ZJsnoplVQzMl7czwKcBdWyk3b7%2FTJke2ZHJ7wh8xR9I99OvhGDOskf5StkbOd263DKt7SiX0lT4C7yilNCStLtkXeProkR0lAO2yTNAa54uFFi6QTyAIQ1pVYlm7xFbYZYyliK3x%2BNDethKJ7P4HQ%2FlbJwUVdCIt7WpEgYN5Dsk6RhqQdE33Hi1aH1kMdYrZsml3fR6Nf7O5xMO3ms8AGOqUBjadd9bw3WRNTPL10EXSnpwzzQP6r3zaZUJU8Pv79LNvIi6vT%2B5ipgXwGWS7KoNNfPuParoGDMuEJjZLenmw5H84ckQbyVadNbvuFxXQ4zP4ybNPcp64Xbc0jxOrbwqEy93ROpUxbBEBEsvzSCOKg3hEoADEaAUvRB9bvo4t2UDwN6g5EatQmuHkyJJZ%2B00ZDvw4HfsE3LZWSau92%2BdNENAVjUFO8&X-Amz-Signature=2fac64742692fa64b7bee45bac3645de415f50296c7204565aa77f20b4f4f86e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3WBECC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASqM3HwHz%2FhzJ7zFLufEWeVsZ4satonntHizK9cpEOCAiEA6x9RIAev2iVeeqRESezazb9SxRXRPoJBripGzKfqUu4q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDD69JGPNI4YDvRfA0CrcA9t1MKVMJczlrbYLV20pj6xhU8K9zM%2BlDi%2F33zhQa0%2BahpGgaHowIDE8tg4CQ7Fs6HbwyhRooBobF7tcLxIwb%2FT1YpO5u7jSRmGEqg8ZZuxH3P3lbmr%2BB%2FQxnHHKZH7%2FNLucNq93pZU8HXRcI5Gh97pgL2HHBIG6dNZER4X2b7cUMbecKxdR5pGBJFMWWteRXH4gr7DBBBoJbJPZ%2FOXNUqO6X6tPIADmT6nA1Iqs9pOscfDddpwPKkvTjjinTplQBiK%2FFA8%2Bar8YkDFSQePQRTEAqbve59N78mpygAaNuToVIeuMaTHv9Knbc5LAXCbMFH71UYhY2EIEFsqKgqdHET3EJNHtxrmek7DY6IprqjziW68XrPe7KuROHutLurB5%2FAyo0efrqZDzm0viJ4NAGfjfk4hPkyF8zGcRUEDrG%2BN%2BQQ1ZJsnoplVQzMl7czwKcBdWyk3b7%2FTJke2ZHJ7wh8xR9I99OvhGDOskf5StkbOd263DKt7SiX0lT4C7yilNCStLtkXeProkR0lAO2yTNAa54uFFi6QTyAIQ1pVYlm7xFbYZYyliK3x%2BNDethKJ7P4HQ%2FlbJwUVdCIt7WpEgYN5Dsk6RhqQdE33Hi1aH1kMdYrZsml3fR6Nf7O5xMO3ms8AGOqUBjadd9bw3WRNTPL10EXSnpwzzQP6r3zaZUJU8Pv79LNvIi6vT%2B5ipgXwGWS7KoNNfPuParoGDMuEJjZLenmw5H84ckQbyVadNbvuFxXQ4zP4ybNPcp64Xbc0jxOrbwqEy93ROpUxbBEBEsvzSCOKg3hEoADEaAUvRB9bvo4t2UDwN6g5EatQmuHkyJJZ%2B00ZDvw4HfsE3LZWSau92%2BdNENAVjUFO8&X-Amz-Signature=70c0c183cf93a80ca27aa489d8006a625d3d7ec12bb16256dff41fadccbc8c35&X-Amz-SignedHeaders=host&x-id=GetObject)
