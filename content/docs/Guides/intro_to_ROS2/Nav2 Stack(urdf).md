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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3WXZGS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FytfQJT8qzoZ1kMJ0r96C77iR2UDopvcb4%2FE1ILfZJAiBWFqBfObxL1JeUGa96xA4YQ6VWrF7uvPrgcuQlNbt5lyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc0u4t2tJ72b3exkkKtwDRCcK3UMNCiJdZHrOkcv9QBMsfYza3mGl%2BAUYpSbKv3tbuRTWpA8L5W279XpshmnwjZ9T4acnH7b4ILjFSGLNbYxF61YYdzcCdqD5iv6H%2FcghIRxFohN8H8Nt%2BUsDmpeVo%2F6L0E%2FeK1DjpcnogFJqmaIFimwrBF%2BYbJrXKeqPDYAogapbOJut86I%2Bis%2Bm3OHthY5znNml2uBxXqrdvLNvWLgvV8ziCaqvDHvBSEVcUwsWFJ9anxqg6eImjMC5H38lXc4us0L84A4vRfHejc3BYsvZ250Zsys2ec5Y91tpKCjiXv9qsmzH8jWyyxuC1c2QlnAfXI7cCPg50OBhiL0HsPwc6v0ZxqfHES4JwElrTS8%2BuZoOrBIVvUrM6PZtctkJk2IXDlW58hXprwpttOrJct5MAhUiW0b3AV8GDdlyKcC9hnUlsf4yw%2FmUQqfk1%2FbsnD3teo8FdxUN4YxjbwIfN9not24EyN5QkaB7Gn%2B4iRMDwk7xf8ip0HaiPNClDPcHBR%2Fc8DPvcZoBoNE2Rr7wPlfpw94qwtmPHkqEfg94cT%2FcfLGflTO%2BWylVBYBYjtEVBK6k2e6xQi43X4A8CUKMasUAVFdXUc6lww2jX7%2FTAFDkIxMyD6zeupR0U6Uw2ojhwQY6pgGdMuK8KDPxA2iubZUUSAUbwDtQkIUg3U097%2BSZ%2BEQhMsf8Q8qOjGJLQ87UzIcrI2YQmPhN5KLP624evGVUjhlLFAZkTq%2BMg3OBDVFjAfnU2ImV3hXSIB4fFXH%2FfFwa43KF2B37L7R%2BU0vhfylwvDvCfi2TrrVuGo752sI2DSc6zEYe1aYPnPForgMBD55GDRP9EvttILv%2BnWU7pwZ%2B9VAUuId8vRoN&X-Amz-Signature=db590d3afa6dcf3b747c99b2e4e30ab0ba1d5c69588e1121de0ce589d3bb1026&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3WXZGS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FytfQJT8qzoZ1kMJ0r96C77iR2UDopvcb4%2FE1ILfZJAiBWFqBfObxL1JeUGa96xA4YQ6VWrF7uvPrgcuQlNbt5lyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc0u4t2tJ72b3exkkKtwDRCcK3UMNCiJdZHrOkcv9QBMsfYza3mGl%2BAUYpSbKv3tbuRTWpA8L5W279XpshmnwjZ9T4acnH7b4ILjFSGLNbYxF61YYdzcCdqD5iv6H%2FcghIRxFohN8H8Nt%2BUsDmpeVo%2F6L0E%2FeK1DjpcnogFJqmaIFimwrBF%2BYbJrXKeqPDYAogapbOJut86I%2Bis%2Bm3OHthY5znNml2uBxXqrdvLNvWLgvV8ziCaqvDHvBSEVcUwsWFJ9anxqg6eImjMC5H38lXc4us0L84A4vRfHejc3BYsvZ250Zsys2ec5Y91tpKCjiXv9qsmzH8jWyyxuC1c2QlnAfXI7cCPg50OBhiL0HsPwc6v0ZxqfHES4JwElrTS8%2BuZoOrBIVvUrM6PZtctkJk2IXDlW58hXprwpttOrJct5MAhUiW0b3AV8GDdlyKcC9hnUlsf4yw%2FmUQqfk1%2FbsnD3teo8FdxUN4YxjbwIfN9not24EyN5QkaB7Gn%2B4iRMDwk7xf8ip0HaiPNClDPcHBR%2Fc8DPvcZoBoNE2Rr7wPlfpw94qwtmPHkqEfg94cT%2FcfLGflTO%2BWylVBYBYjtEVBK6k2e6xQi43X4A8CUKMasUAVFdXUc6lww2jX7%2FTAFDkIxMyD6zeupR0U6Uw2ojhwQY6pgGdMuK8KDPxA2iubZUUSAUbwDtQkIUg3U097%2BSZ%2BEQhMsf8Q8qOjGJLQ87UzIcrI2YQmPhN5KLP624evGVUjhlLFAZkTq%2BMg3OBDVFjAfnU2ImV3hXSIB4fFXH%2FfFwa43KF2B37L7R%2BU0vhfylwvDvCfi2TrrVuGo752sI2DSc6zEYe1aYPnPForgMBD55GDRP9EvttILv%2BnWU7pwZ%2B9VAUuId8vRoN&X-Amz-Signature=790739b088f786edc247986b25103526a76f39086579f1aea270777a9df81b94&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3WXZGS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FytfQJT8qzoZ1kMJ0r96C77iR2UDopvcb4%2FE1ILfZJAiBWFqBfObxL1JeUGa96xA4YQ6VWrF7uvPrgcuQlNbt5lyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc0u4t2tJ72b3exkkKtwDRCcK3UMNCiJdZHrOkcv9QBMsfYza3mGl%2BAUYpSbKv3tbuRTWpA8L5W279XpshmnwjZ9T4acnH7b4ILjFSGLNbYxF61YYdzcCdqD5iv6H%2FcghIRxFohN8H8Nt%2BUsDmpeVo%2F6L0E%2FeK1DjpcnogFJqmaIFimwrBF%2BYbJrXKeqPDYAogapbOJut86I%2Bis%2Bm3OHthY5znNml2uBxXqrdvLNvWLgvV8ziCaqvDHvBSEVcUwsWFJ9anxqg6eImjMC5H38lXc4us0L84A4vRfHejc3BYsvZ250Zsys2ec5Y91tpKCjiXv9qsmzH8jWyyxuC1c2QlnAfXI7cCPg50OBhiL0HsPwc6v0ZxqfHES4JwElrTS8%2BuZoOrBIVvUrM6PZtctkJk2IXDlW58hXprwpttOrJct5MAhUiW0b3AV8GDdlyKcC9hnUlsf4yw%2FmUQqfk1%2FbsnD3teo8FdxUN4YxjbwIfN9not24EyN5QkaB7Gn%2B4iRMDwk7xf8ip0HaiPNClDPcHBR%2Fc8DPvcZoBoNE2Rr7wPlfpw94qwtmPHkqEfg94cT%2FcfLGflTO%2BWylVBYBYjtEVBK6k2e6xQi43X4A8CUKMasUAVFdXUc6lww2jX7%2FTAFDkIxMyD6zeupR0U6Uw2ojhwQY6pgGdMuK8KDPxA2iubZUUSAUbwDtQkIUg3U097%2BSZ%2BEQhMsf8Q8qOjGJLQ87UzIcrI2YQmPhN5KLP624evGVUjhlLFAZkTq%2BMg3OBDVFjAfnU2ImV3hXSIB4fFXH%2FfFwa43KF2B37L7R%2BU0vhfylwvDvCfi2TrrVuGo752sI2DSc6zEYe1aYPnPForgMBD55GDRP9EvttILv%2BnWU7pwZ%2B9VAUuId8vRoN&X-Amz-Signature=0409f36f165bbfae6e1c1ddee79b9b6265e48c7fb3efacc41b26e3ac587d4604&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3WXZGS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FytfQJT8qzoZ1kMJ0r96C77iR2UDopvcb4%2FE1ILfZJAiBWFqBfObxL1JeUGa96xA4YQ6VWrF7uvPrgcuQlNbt5lyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc0u4t2tJ72b3exkkKtwDRCcK3UMNCiJdZHrOkcv9QBMsfYza3mGl%2BAUYpSbKv3tbuRTWpA8L5W279XpshmnwjZ9T4acnH7b4ILjFSGLNbYxF61YYdzcCdqD5iv6H%2FcghIRxFohN8H8Nt%2BUsDmpeVo%2F6L0E%2FeK1DjpcnogFJqmaIFimwrBF%2BYbJrXKeqPDYAogapbOJut86I%2Bis%2Bm3OHthY5znNml2uBxXqrdvLNvWLgvV8ziCaqvDHvBSEVcUwsWFJ9anxqg6eImjMC5H38lXc4us0L84A4vRfHejc3BYsvZ250Zsys2ec5Y91tpKCjiXv9qsmzH8jWyyxuC1c2QlnAfXI7cCPg50OBhiL0HsPwc6v0ZxqfHES4JwElrTS8%2BuZoOrBIVvUrM6PZtctkJk2IXDlW58hXprwpttOrJct5MAhUiW0b3AV8GDdlyKcC9hnUlsf4yw%2FmUQqfk1%2FbsnD3teo8FdxUN4YxjbwIfN9not24EyN5QkaB7Gn%2B4iRMDwk7xf8ip0HaiPNClDPcHBR%2Fc8DPvcZoBoNE2Rr7wPlfpw94qwtmPHkqEfg94cT%2FcfLGflTO%2BWylVBYBYjtEVBK6k2e6xQi43X4A8CUKMasUAVFdXUc6lww2jX7%2FTAFDkIxMyD6zeupR0U6Uw2ojhwQY6pgGdMuK8KDPxA2iubZUUSAUbwDtQkIUg3U097%2BSZ%2BEQhMsf8Q8qOjGJLQ87UzIcrI2YQmPhN5KLP624evGVUjhlLFAZkTq%2BMg3OBDVFjAfnU2ImV3hXSIB4fFXH%2FfFwa43KF2B37L7R%2BU0vhfylwvDvCfi2TrrVuGo752sI2DSc6zEYe1aYPnPForgMBD55GDRP9EvttILv%2BnWU7pwZ%2B9VAUuId8vRoN&X-Amz-Signature=65909fe99f948c45bf78669364e9796f70b1584052a945772ecfdf1d1caca86a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3WXZGS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FytfQJT8qzoZ1kMJ0r96C77iR2UDopvcb4%2FE1ILfZJAiBWFqBfObxL1JeUGa96xA4YQ6VWrF7uvPrgcuQlNbt5lyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc0u4t2tJ72b3exkkKtwDRCcK3UMNCiJdZHrOkcv9QBMsfYza3mGl%2BAUYpSbKv3tbuRTWpA8L5W279XpshmnwjZ9T4acnH7b4ILjFSGLNbYxF61YYdzcCdqD5iv6H%2FcghIRxFohN8H8Nt%2BUsDmpeVo%2F6L0E%2FeK1DjpcnogFJqmaIFimwrBF%2BYbJrXKeqPDYAogapbOJut86I%2Bis%2Bm3OHthY5znNml2uBxXqrdvLNvWLgvV8ziCaqvDHvBSEVcUwsWFJ9anxqg6eImjMC5H38lXc4us0L84A4vRfHejc3BYsvZ250Zsys2ec5Y91tpKCjiXv9qsmzH8jWyyxuC1c2QlnAfXI7cCPg50OBhiL0HsPwc6v0ZxqfHES4JwElrTS8%2BuZoOrBIVvUrM6PZtctkJk2IXDlW58hXprwpttOrJct5MAhUiW0b3AV8GDdlyKcC9hnUlsf4yw%2FmUQqfk1%2FbsnD3teo8FdxUN4YxjbwIfN9not24EyN5QkaB7Gn%2B4iRMDwk7xf8ip0HaiPNClDPcHBR%2Fc8DPvcZoBoNE2Rr7wPlfpw94qwtmPHkqEfg94cT%2FcfLGflTO%2BWylVBYBYjtEVBK6k2e6xQi43X4A8CUKMasUAVFdXUc6lww2jX7%2FTAFDkIxMyD6zeupR0U6Uw2ojhwQY6pgGdMuK8KDPxA2iubZUUSAUbwDtQkIUg3U097%2BSZ%2BEQhMsf8Q8qOjGJLQ87UzIcrI2YQmPhN5KLP624evGVUjhlLFAZkTq%2BMg3OBDVFjAfnU2ImV3hXSIB4fFXH%2FfFwa43KF2B37L7R%2BU0vhfylwvDvCfi2TrrVuGo752sI2DSc6zEYe1aYPnPForgMBD55GDRP9EvttILv%2BnWU7pwZ%2B9VAUuId8vRoN&X-Amz-Signature=9e0c7312c688eb8ae2214f9f3393327352ac91d421cc804969306655452a50db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3WXZGS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FytfQJT8qzoZ1kMJ0r96C77iR2UDopvcb4%2FE1ILfZJAiBWFqBfObxL1JeUGa96xA4YQ6VWrF7uvPrgcuQlNbt5lyqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc0u4t2tJ72b3exkkKtwDRCcK3UMNCiJdZHrOkcv9QBMsfYza3mGl%2BAUYpSbKv3tbuRTWpA8L5W279XpshmnwjZ9T4acnH7b4ILjFSGLNbYxF61YYdzcCdqD5iv6H%2FcghIRxFohN8H8Nt%2BUsDmpeVo%2F6L0E%2FeK1DjpcnogFJqmaIFimwrBF%2BYbJrXKeqPDYAogapbOJut86I%2Bis%2Bm3OHthY5znNml2uBxXqrdvLNvWLgvV8ziCaqvDHvBSEVcUwsWFJ9anxqg6eImjMC5H38lXc4us0L84A4vRfHejc3BYsvZ250Zsys2ec5Y91tpKCjiXv9qsmzH8jWyyxuC1c2QlnAfXI7cCPg50OBhiL0HsPwc6v0ZxqfHES4JwElrTS8%2BuZoOrBIVvUrM6PZtctkJk2IXDlW58hXprwpttOrJct5MAhUiW0b3AV8GDdlyKcC9hnUlsf4yw%2FmUQqfk1%2FbsnD3teo8FdxUN4YxjbwIfN9not24EyN5QkaB7Gn%2B4iRMDwk7xf8ip0HaiPNClDPcHBR%2Fc8DPvcZoBoNE2Rr7wPlfpw94qwtmPHkqEfg94cT%2FcfLGflTO%2BWylVBYBYjtEVBK6k2e6xQi43X4A8CUKMasUAVFdXUc6lww2jX7%2FTAFDkIxMyD6zeupR0U6Uw2ojhwQY6pgGdMuK8KDPxA2iubZUUSAUbwDtQkIUg3U097%2BSZ%2BEQhMsf8Q8qOjGJLQ87UzIcrI2YQmPhN5KLP624evGVUjhlLFAZkTq%2BMg3OBDVFjAfnU2ImV3hXSIB4fFXH%2FfFwa43KF2B37L7R%2BU0vhfylwvDvCfi2TrrVuGo752sI2DSc6zEYe1aYPnPForgMBD55GDRP9EvttILv%2BnWU7pwZ%2B9VAUuId8vRoN&X-Amz-Signature=a10072b0ac7ea1bf7c4b228cbef46014a8bee3f54557c4b30f2c59a01bbacd1b&X-Amz-SignedHeaders=host&x-id=GetObject)
