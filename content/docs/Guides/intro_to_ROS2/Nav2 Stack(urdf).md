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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FQ5DOM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0aUaO34w8v2svFVeHgWmYmP0eQp6GhBa6RIg2KemcwwIgIzFjvfipv4%2BOv1RbxX6NI2p1pdnniEl0fUPQA8y5%2FDwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7%2B6VARrWGtoTG%2ByCrcAwA9OfxL0Im5rFHaYQhUdFwhMyk9JJTTaJasfsv6eNPshZLJ1YVqu0zxhC24xfyahnuzjfbw6sC7fEuYENH6w8MxPtRpuPiP3OH4LYgUxA7mPreM3X42zgIcC0LZjC19con48ltUT%2FILZbfWPV0Yq8pUw86A%2BIjziqtlyUWg%2Fyjv81qgyVJ6pk2fvW8KdttQuAl5iaU2zjKVBHmV774%2B43%2B5f%2BkTua6muGgzcmBZwFs%2Bn7IirQCBSR64Hze%2Fc4NJ4Xl0oAjLmbQyqmUFZmht9%2BTbsOumb7e9njD8CJydcTNAXIETEENxIP0kU49lC35Lesdd4c%2Bi5OytRZ5rwwcSSXMfwfXzouJvTj9kHOjBNOGIXsFVCZmZkz0%2FKhXSux4CMPtZlOoQWOqLTV7R1xnbivtH3GhHsI70DwTVBGQO%2Fler9KVohydU8gP3sk6X89XSV%2FHoZDzpPj99A0FyeoxMI%2FqrlgxBhfKkTMYdJRPlWmThwIKdjUTR3S7482YmE1rqQwdEjwxjU00a6JRoHXm7vFiwlI0yv0%2FXcmK6niIbRcBQvPIwwj7TGK%2BFOfyarF4MJenn3fyJaLKAdMMRHhEkk2xWdsqtkezRZ8SN09HUlg6Bo%2FxaNYUhAuPoryvLMIKA%2FcIGOqUBSJI6KTjYM0TvM5MZQ8Kww5Zj1hUOQF6LIigJaGUGUoxvOz%2F4KJhtRVh81qxvefoEPVuuisYa5XJywLilgL1yBC6DkJD7d5oS8Ospx3EZ6tmEKBAsHIIM8TrAYv%2BPgLT85Sa602LgZIA8Kx9Rf%2BAlxqoo2WFkXXz0Fy4P0JBodL3SrcHnw0EwesQf8PXnE3LDJfWn8RtBtgXHdrNNK%2BigAkmTY%2BGC&X-Amz-Signature=6590402e99c015e1c8cf4f27b52e4cf1440b2356e167c91afdc1985b1c35b5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FQ5DOM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0aUaO34w8v2svFVeHgWmYmP0eQp6GhBa6RIg2KemcwwIgIzFjvfipv4%2BOv1RbxX6NI2p1pdnniEl0fUPQA8y5%2FDwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7%2B6VARrWGtoTG%2ByCrcAwA9OfxL0Im5rFHaYQhUdFwhMyk9JJTTaJasfsv6eNPshZLJ1YVqu0zxhC24xfyahnuzjfbw6sC7fEuYENH6w8MxPtRpuPiP3OH4LYgUxA7mPreM3X42zgIcC0LZjC19con48ltUT%2FILZbfWPV0Yq8pUw86A%2BIjziqtlyUWg%2Fyjv81qgyVJ6pk2fvW8KdttQuAl5iaU2zjKVBHmV774%2B43%2B5f%2BkTua6muGgzcmBZwFs%2Bn7IirQCBSR64Hze%2Fc4NJ4Xl0oAjLmbQyqmUFZmht9%2BTbsOumb7e9njD8CJydcTNAXIETEENxIP0kU49lC35Lesdd4c%2Bi5OytRZ5rwwcSSXMfwfXzouJvTj9kHOjBNOGIXsFVCZmZkz0%2FKhXSux4CMPtZlOoQWOqLTV7R1xnbivtH3GhHsI70DwTVBGQO%2Fler9KVohydU8gP3sk6X89XSV%2FHoZDzpPj99A0FyeoxMI%2FqrlgxBhfKkTMYdJRPlWmThwIKdjUTR3S7482YmE1rqQwdEjwxjU00a6JRoHXm7vFiwlI0yv0%2FXcmK6niIbRcBQvPIwwj7TGK%2BFOfyarF4MJenn3fyJaLKAdMMRHhEkk2xWdsqtkezRZ8SN09HUlg6Bo%2FxaNYUhAuPoryvLMIKA%2FcIGOqUBSJI6KTjYM0TvM5MZQ8Kww5Zj1hUOQF6LIigJaGUGUoxvOz%2F4KJhtRVh81qxvefoEPVuuisYa5XJywLilgL1yBC6DkJD7d5oS8Ospx3EZ6tmEKBAsHIIM8TrAYv%2BPgLT85Sa602LgZIA8Kx9Rf%2BAlxqoo2WFkXXz0Fy4P0JBodL3SrcHnw0EwesQf8PXnE3LDJfWn8RtBtgXHdrNNK%2BigAkmTY%2BGC&X-Amz-Signature=22b27b8b3d174f4624689737a9e300cd3dfa8d35ed6827eaac3147ffa31b5a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FQ5DOM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0aUaO34w8v2svFVeHgWmYmP0eQp6GhBa6RIg2KemcwwIgIzFjvfipv4%2BOv1RbxX6NI2p1pdnniEl0fUPQA8y5%2FDwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7%2B6VARrWGtoTG%2ByCrcAwA9OfxL0Im5rFHaYQhUdFwhMyk9JJTTaJasfsv6eNPshZLJ1YVqu0zxhC24xfyahnuzjfbw6sC7fEuYENH6w8MxPtRpuPiP3OH4LYgUxA7mPreM3X42zgIcC0LZjC19con48ltUT%2FILZbfWPV0Yq8pUw86A%2BIjziqtlyUWg%2Fyjv81qgyVJ6pk2fvW8KdttQuAl5iaU2zjKVBHmV774%2B43%2B5f%2BkTua6muGgzcmBZwFs%2Bn7IirQCBSR64Hze%2Fc4NJ4Xl0oAjLmbQyqmUFZmht9%2BTbsOumb7e9njD8CJydcTNAXIETEENxIP0kU49lC35Lesdd4c%2Bi5OytRZ5rwwcSSXMfwfXzouJvTj9kHOjBNOGIXsFVCZmZkz0%2FKhXSux4CMPtZlOoQWOqLTV7R1xnbivtH3GhHsI70DwTVBGQO%2Fler9KVohydU8gP3sk6X89XSV%2FHoZDzpPj99A0FyeoxMI%2FqrlgxBhfKkTMYdJRPlWmThwIKdjUTR3S7482YmE1rqQwdEjwxjU00a6JRoHXm7vFiwlI0yv0%2FXcmK6niIbRcBQvPIwwj7TGK%2BFOfyarF4MJenn3fyJaLKAdMMRHhEkk2xWdsqtkezRZ8SN09HUlg6Bo%2FxaNYUhAuPoryvLMIKA%2FcIGOqUBSJI6KTjYM0TvM5MZQ8Kww5Zj1hUOQF6LIigJaGUGUoxvOz%2F4KJhtRVh81qxvefoEPVuuisYa5XJywLilgL1yBC6DkJD7d5oS8Ospx3EZ6tmEKBAsHIIM8TrAYv%2BPgLT85Sa602LgZIA8Kx9Rf%2BAlxqoo2WFkXXz0Fy4P0JBodL3SrcHnw0EwesQf8PXnE3LDJfWn8RtBtgXHdrNNK%2BigAkmTY%2BGC&X-Amz-Signature=f3f46d6d2ea3bd47b214d504607072359cbc96b54e3e6b8f72280cedaeaa762e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FQ5DOM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0aUaO34w8v2svFVeHgWmYmP0eQp6GhBa6RIg2KemcwwIgIzFjvfipv4%2BOv1RbxX6NI2p1pdnniEl0fUPQA8y5%2FDwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7%2B6VARrWGtoTG%2ByCrcAwA9OfxL0Im5rFHaYQhUdFwhMyk9JJTTaJasfsv6eNPshZLJ1YVqu0zxhC24xfyahnuzjfbw6sC7fEuYENH6w8MxPtRpuPiP3OH4LYgUxA7mPreM3X42zgIcC0LZjC19con48ltUT%2FILZbfWPV0Yq8pUw86A%2BIjziqtlyUWg%2Fyjv81qgyVJ6pk2fvW8KdttQuAl5iaU2zjKVBHmV774%2B43%2B5f%2BkTua6muGgzcmBZwFs%2Bn7IirQCBSR64Hze%2Fc4NJ4Xl0oAjLmbQyqmUFZmht9%2BTbsOumb7e9njD8CJydcTNAXIETEENxIP0kU49lC35Lesdd4c%2Bi5OytRZ5rwwcSSXMfwfXzouJvTj9kHOjBNOGIXsFVCZmZkz0%2FKhXSux4CMPtZlOoQWOqLTV7R1xnbivtH3GhHsI70DwTVBGQO%2Fler9KVohydU8gP3sk6X89XSV%2FHoZDzpPj99A0FyeoxMI%2FqrlgxBhfKkTMYdJRPlWmThwIKdjUTR3S7482YmE1rqQwdEjwxjU00a6JRoHXm7vFiwlI0yv0%2FXcmK6niIbRcBQvPIwwj7TGK%2BFOfyarF4MJenn3fyJaLKAdMMRHhEkk2xWdsqtkezRZ8SN09HUlg6Bo%2FxaNYUhAuPoryvLMIKA%2FcIGOqUBSJI6KTjYM0TvM5MZQ8Kww5Zj1hUOQF6LIigJaGUGUoxvOz%2F4KJhtRVh81qxvefoEPVuuisYa5XJywLilgL1yBC6DkJD7d5oS8Ospx3EZ6tmEKBAsHIIM8TrAYv%2BPgLT85Sa602LgZIA8Kx9Rf%2BAlxqoo2WFkXXz0Fy4P0JBodL3SrcHnw0EwesQf8PXnE3LDJfWn8RtBtgXHdrNNK%2BigAkmTY%2BGC&X-Amz-Signature=54cb6f8cf07491082f2e630bf1e144c549bd38ee78647eb6d0c703cc5191d419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FQ5DOM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0aUaO34w8v2svFVeHgWmYmP0eQp6GhBa6RIg2KemcwwIgIzFjvfipv4%2BOv1RbxX6NI2p1pdnniEl0fUPQA8y5%2FDwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7%2B6VARrWGtoTG%2ByCrcAwA9OfxL0Im5rFHaYQhUdFwhMyk9JJTTaJasfsv6eNPshZLJ1YVqu0zxhC24xfyahnuzjfbw6sC7fEuYENH6w8MxPtRpuPiP3OH4LYgUxA7mPreM3X42zgIcC0LZjC19con48ltUT%2FILZbfWPV0Yq8pUw86A%2BIjziqtlyUWg%2Fyjv81qgyVJ6pk2fvW8KdttQuAl5iaU2zjKVBHmV774%2B43%2B5f%2BkTua6muGgzcmBZwFs%2Bn7IirQCBSR64Hze%2Fc4NJ4Xl0oAjLmbQyqmUFZmht9%2BTbsOumb7e9njD8CJydcTNAXIETEENxIP0kU49lC35Lesdd4c%2Bi5OytRZ5rwwcSSXMfwfXzouJvTj9kHOjBNOGIXsFVCZmZkz0%2FKhXSux4CMPtZlOoQWOqLTV7R1xnbivtH3GhHsI70DwTVBGQO%2Fler9KVohydU8gP3sk6X89XSV%2FHoZDzpPj99A0FyeoxMI%2FqrlgxBhfKkTMYdJRPlWmThwIKdjUTR3S7482YmE1rqQwdEjwxjU00a6JRoHXm7vFiwlI0yv0%2FXcmK6niIbRcBQvPIwwj7TGK%2BFOfyarF4MJenn3fyJaLKAdMMRHhEkk2xWdsqtkezRZ8SN09HUlg6Bo%2FxaNYUhAuPoryvLMIKA%2FcIGOqUBSJI6KTjYM0TvM5MZQ8Kww5Zj1hUOQF6LIigJaGUGUoxvOz%2F4KJhtRVh81qxvefoEPVuuisYa5XJywLilgL1yBC6DkJD7d5oS8Ospx3EZ6tmEKBAsHIIM8TrAYv%2BPgLT85Sa602LgZIA8Kx9Rf%2BAlxqoo2WFkXXz0Fy4P0JBodL3SrcHnw0EwesQf8PXnE3LDJfWn8RtBtgXHdrNNK%2BigAkmTY%2BGC&X-Amz-Signature=c191f07cb4532692ddc4f97d3ff0dfbeba2cccd6df34a0dff167c5161b7e9b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FQ5DOM%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0aUaO34w8v2svFVeHgWmYmP0eQp6GhBa6RIg2KemcwwIgIzFjvfipv4%2BOv1RbxX6NI2p1pdnniEl0fUPQA8y5%2FDwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7%2B6VARrWGtoTG%2ByCrcAwA9OfxL0Im5rFHaYQhUdFwhMyk9JJTTaJasfsv6eNPshZLJ1YVqu0zxhC24xfyahnuzjfbw6sC7fEuYENH6w8MxPtRpuPiP3OH4LYgUxA7mPreM3X42zgIcC0LZjC19con48ltUT%2FILZbfWPV0Yq8pUw86A%2BIjziqtlyUWg%2Fyjv81qgyVJ6pk2fvW8KdttQuAl5iaU2zjKVBHmV774%2B43%2B5f%2BkTua6muGgzcmBZwFs%2Bn7IirQCBSR64Hze%2Fc4NJ4Xl0oAjLmbQyqmUFZmht9%2BTbsOumb7e9njD8CJydcTNAXIETEENxIP0kU49lC35Lesdd4c%2Bi5OytRZ5rwwcSSXMfwfXzouJvTj9kHOjBNOGIXsFVCZmZkz0%2FKhXSux4CMPtZlOoQWOqLTV7R1xnbivtH3GhHsI70DwTVBGQO%2Fler9KVohydU8gP3sk6X89XSV%2FHoZDzpPj99A0FyeoxMI%2FqrlgxBhfKkTMYdJRPlWmThwIKdjUTR3S7482YmE1rqQwdEjwxjU00a6JRoHXm7vFiwlI0yv0%2FXcmK6niIbRcBQvPIwwj7TGK%2BFOfyarF4MJenn3fyJaLKAdMMRHhEkk2xWdsqtkezRZ8SN09HUlg6Bo%2FxaNYUhAuPoryvLMIKA%2FcIGOqUBSJI6KTjYM0TvM5MZQ8Kww5Zj1hUOQF6LIigJaGUGUoxvOz%2F4KJhtRVh81qxvefoEPVuuisYa5XJywLilgL1yBC6DkJD7d5oS8Ospx3EZ6tmEKBAsHIIM8TrAYv%2BPgLT85Sa602LgZIA8Kx9Rf%2BAlxqoo2WFkXXz0Fy4P0JBodL3SrcHnw0EwesQf8PXnE3LDJfWn8RtBtgXHdrNNK%2BigAkmTY%2BGC&X-Amz-Signature=72aa6b98d1ed8a1f47f6cc2cf5ffb62add547d488a70d6e575b4d370d057d13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
