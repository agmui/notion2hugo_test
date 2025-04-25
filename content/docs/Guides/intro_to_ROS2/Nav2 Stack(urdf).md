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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665S7YN5Y%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDATnL%2FQ785YzPjqmUYb2putojpnI5tvdjVH1WqioJrAAIhAKssSTL00%2BiwOaRCDWpa3j%2Fsc2xvDe50uziQdtWAGyuaKv8DCDQQABoMNjM3NDIzMTgzODA1IgwxnQl9fZy2I%2Fv48BMq3APZuJkRkqiVg%2BS%2B3ClQ9MFD3XQEd5UsBdPsibY18kd0cGzBa0khp676Q%2BVC63WQhocAPiC0lY83R6xQXf3EHCEEppHh20PUOOo4M1dj%2B2V1Oks7jUYviy3RU%2B8TQJ0Jf7JbaJoNruVoQF5VAXDkgKqhGLwy4zLQhd5vW0N46XKQYNS%2BjNpmofhBixZdmf5EtEzBRRg7DLr5AxVC%2F5e5pCzABeNvLjXU4fSKulHgvcbPj4ZboPEtPXE%2BtB5UAYzoxpTCs1gqLnRiAyA4LBw95lTp6Je%2FqZI6F5yXk1zloU1GtVPaXuUW4sPxHuMl5A%2BXqkw0aZe8DFBFU%2BYGxuBm3MYp3U81Rs3z14sUgiQ59cdiAgoP6b6t8h%2FCsQgYJMuHJbEpAJO0KlDA%2BoSbrMuA2Pq0gwu0ubg6FNE8NV%2F%2FnW0ROF5ovHIZnojJF5CieXDLJEKLVybHcde8%2BegfnLxgQQ3hgMqEWdb0auFnNIftJEQTvUx9rL8zFgOzaDAr%2FCjr3rVk13pE%2Fcdtw0Cq%2FmkIYwhyE4fP1QZYGnfE1OfQ%2B%2FhS%2Fg5xYPFS4G3MRUBk8rtK7m1vpn4CHHCaLMdEb8wv6PkXjglhaxmhz7jIe2HWFp6eY%2FjYm%2BSBzSNmJASsPDDTt6%2FABjqkAQoc74R8vq4QXush%2BXdBu%2BFhpo2vijsbSItSXgjv6dSm2voCryOKO13oLQIEcsae6xqFv2CjuWlaUryTv3pfTzLo20eBzECLUzfoPRat55OrnbHXOR8dD7kDG79LC4%2F6Dxd3O5uJokJOdO9s3J%2BiOeUmjaUrMIP8Z74M0B4SpRibY6LoduP7uaWp56NRgqZXTL064vKaN06R%2FRk3GWIwSlnk1weD&X-Amz-Signature=3098dd8613662a8f56215a1e6229d2a28486120ff7e2b93cae74d8326c4956e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665S7YN5Y%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDATnL%2FQ785YzPjqmUYb2putojpnI5tvdjVH1WqioJrAAIhAKssSTL00%2BiwOaRCDWpa3j%2Fsc2xvDe50uziQdtWAGyuaKv8DCDQQABoMNjM3NDIzMTgzODA1IgwxnQl9fZy2I%2Fv48BMq3APZuJkRkqiVg%2BS%2B3ClQ9MFD3XQEd5UsBdPsibY18kd0cGzBa0khp676Q%2BVC63WQhocAPiC0lY83R6xQXf3EHCEEppHh20PUOOo4M1dj%2B2V1Oks7jUYviy3RU%2B8TQJ0Jf7JbaJoNruVoQF5VAXDkgKqhGLwy4zLQhd5vW0N46XKQYNS%2BjNpmofhBixZdmf5EtEzBRRg7DLr5AxVC%2F5e5pCzABeNvLjXU4fSKulHgvcbPj4ZboPEtPXE%2BtB5UAYzoxpTCs1gqLnRiAyA4LBw95lTp6Je%2FqZI6F5yXk1zloU1GtVPaXuUW4sPxHuMl5A%2BXqkw0aZe8DFBFU%2BYGxuBm3MYp3U81Rs3z14sUgiQ59cdiAgoP6b6t8h%2FCsQgYJMuHJbEpAJO0KlDA%2BoSbrMuA2Pq0gwu0ubg6FNE8NV%2F%2FnW0ROF5ovHIZnojJF5CieXDLJEKLVybHcde8%2BegfnLxgQQ3hgMqEWdb0auFnNIftJEQTvUx9rL8zFgOzaDAr%2FCjr3rVk13pE%2Fcdtw0Cq%2FmkIYwhyE4fP1QZYGnfE1OfQ%2B%2FhS%2Fg5xYPFS4G3MRUBk8rtK7m1vpn4CHHCaLMdEb8wv6PkXjglhaxmhz7jIe2HWFp6eY%2FjYm%2BSBzSNmJASsPDDTt6%2FABjqkAQoc74R8vq4QXush%2BXdBu%2BFhpo2vijsbSItSXgjv6dSm2voCryOKO13oLQIEcsae6xqFv2CjuWlaUryTv3pfTzLo20eBzECLUzfoPRat55OrnbHXOR8dD7kDG79LC4%2F6Dxd3O5uJokJOdO9s3J%2BiOeUmjaUrMIP8Z74M0B4SpRibY6LoduP7uaWp56NRgqZXTL064vKaN06R%2FRk3GWIwSlnk1weD&X-Amz-Signature=a89de84e515481e9370ef2fb22cd39c6cd57e4c5425a1d3b5aa7538fdf4747fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665S7YN5Y%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDATnL%2FQ785YzPjqmUYb2putojpnI5tvdjVH1WqioJrAAIhAKssSTL00%2BiwOaRCDWpa3j%2Fsc2xvDe50uziQdtWAGyuaKv8DCDQQABoMNjM3NDIzMTgzODA1IgwxnQl9fZy2I%2Fv48BMq3APZuJkRkqiVg%2BS%2B3ClQ9MFD3XQEd5UsBdPsibY18kd0cGzBa0khp676Q%2BVC63WQhocAPiC0lY83R6xQXf3EHCEEppHh20PUOOo4M1dj%2B2V1Oks7jUYviy3RU%2B8TQJ0Jf7JbaJoNruVoQF5VAXDkgKqhGLwy4zLQhd5vW0N46XKQYNS%2BjNpmofhBixZdmf5EtEzBRRg7DLr5AxVC%2F5e5pCzABeNvLjXU4fSKulHgvcbPj4ZboPEtPXE%2BtB5UAYzoxpTCs1gqLnRiAyA4LBw95lTp6Je%2FqZI6F5yXk1zloU1GtVPaXuUW4sPxHuMl5A%2BXqkw0aZe8DFBFU%2BYGxuBm3MYp3U81Rs3z14sUgiQ59cdiAgoP6b6t8h%2FCsQgYJMuHJbEpAJO0KlDA%2BoSbrMuA2Pq0gwu0ubg6FNE8NV%2F%2FnW0ROF5ovHIZnojJF5CieXDLJEKLVybHcde8%2BegfnLxgQQ3hgMqEWdb0auFnNIftJEQTvUx9rL8zFgOzaDAr%2FCjr3rVk13pE%2Fcdtw0Cq%2FmkIYwhyE4fP1QZYGnfE1OfQ%2B%2FhS%2Fg5xYPFS4G3MRUBk8rtK7m1vpn4CHHCaLMdEb8wv6PkXjglhaxmhz7jIe2HWFp6eY%2FjYm%2BSBzSNmJASsPDDTt6%2FABjqkAQoc74R8vq4QXush%2BXdBu%2BFhpo2vijsbSItSXgjv6dSm2voCryOKO13oLQIEcsae6xqFv2CjuWlaUryTv3pfTzLo20eBzECLUzfoPRat55OrnbHXOR8dD7kDG79LC4%2F6Dxd3O5uJokJOdO9s3J%2BiOeUmjaUrMIP8Z74M0B4SpRibY6LoduP7uaWp56NRgqZXTL064vKaN06R%2FRk3GWIwSlnk1weD&X-Amz-Signature=e78a743ddcb7e3b16acdda3fca8dc3aaf73fe589ad12332a4acfb0bd01345264&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665S7YN5Y%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDATnL%2FQ785YzPjqmUYb2putojpnI5tvdjVH1WqioJrAAIhAKssSTL00%2BiwOaRCDWpa3j%2Fsc2xvDe50uziQdtWAGyuaKv8DCDQQABoMNjM3NDIzMTgzODA1IgwxnQl9fZy2I%2Fv48BMq3APZuJkRkqiVg%2BS%2B3ClQ9MFD3XQEd5UsBdPsibY18kd0cGzBa0khp676Q%2BVC63WQhocAPiC0lY83R6xQXf3EHCEEppHh20PUOOo4M1dj%2B2V1Oks7jUYviy3RU%2B8TQJ0Jf7JbaJoNruVoQF5VAXDkgKqhGLwy4zLQhd5vW0N46XKQYNS%2BjNpmofhBixZdmf5EtEzBRRg7DLr5AxVC%2F5e5pCzABeNvLjXU4fSKulHgvcbPj4ZboPEtPXE%2BtB5UAYzoxpTCs1gqLnRiAyA4LBw95lTp6Je%2FqZI6F5yXk1zloU1GtVPaXuUW4sPxHuMl5A%2BXqkw0aZe8DFBFU%2BYGxuBm3MYp3U81Rs3z14sUgiQ59cdiAgoP6b6t8h%2FCsQgYJMuHJbEpAJO0KlDA%2BoSbrMuA2Pq0gwu0ubg6FNE8NV%2F%2FnW0ROF5ovHIZnojJF5CieXDLJEKLVybHcde8%2BegfnLxgQQ3hgMqEWdb0auFnNIftJEQTvUx9rL8zFgOzaDAr%2FCjr3rVk13pE%2Fcdtw0Cq%2FmkIYwhyE4fP1QZYGnfE1OfQ%2B%2FhS%2Fg5xYPFS4G3MRUBk8rtK7m1vpn4CHHCaLMdEb8wv6PkXjglhaxmhz7jIe2HWFp6eY%2FjYm%2BSBzSNmJASsPDDTt6%2FABjqkAQoc74R8vq4QXush%2BXdBu%2BFhpo2vijsbSItSXgjv6dSm2voCryOKO13oLQIEcsae6xqFv2CjuWlaUryTv3pfTzLo20eBzECLUzfoPRat55OrnbHXOR8dD7kDG79LC4%2F6Dxd3O5uJokJOdO9s3J%2BiOeUmjaUrMIP8Z74M0B4SpRibY6LoduP7uaWp56NRgqZXTL064vKaN06R%2FRk3GWIwSlnk1weD&X-Amz-Signature=024cabeab2f5f8176cd8239fb9e607b8a354fb6524258e08c555bb4fcd3e31e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665S7YN5Y%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDATnL%2FQ785YzPjqmUYb2putojpnI5tvdjVH1WqioJrAAIhAKssSTL00%2BiwOaRCDWpa3j%2Fsc2xvDe50uziQdtWAGyuaKv8DCDQQABoMNjM3NDIzMTgzODA1IgwxnQl9fZy2I%2Fv48BMq3APZuJkRkqiVg%2BS%2B3ClQ9MFD3XQEd5UsBdPsibY18kd0cGzBa0khp676Q%2BVC63WQhocAPiC0lY83R6xQXf3EHCEEppHh20PUOOo4M1dj%2B2V1Oks7jUYviy3RU%2B8TQJ0Jf7JbaJoNruVoQF5VAXDkgKqhGLwy4zLQhd5vW0N46XKQYNS%2BjNpmofhBixZdmf5EtEzBRRg7DLr5AxVC%2F5e5pCzABeNvLjXU4fSKulHgvcbPj4ZboPEtPXE%2BtB5UAYzoxpTCs1gqLnRiAyA4LBw95lTp6Je%2FqZI6F5yXk1zloU1GtVPaXuUW4sPxHuMl5A%2BXqkw0aZe8DFBFU%2BYGxuBm3MYp3U81Rs3z14sUgiQ59cdiAgoP6b6t8h%2FCsQgYJMuHJbEpAJO0KlDA%2BoSbrMuA2Pq0gwu0ubg6FNE8NV%2F%2FnW0ROF5ovHIZnojJF5CieXDLJEKLVybHcde8%2BegfnLxgQQ3hgMqEWdb0auFnNIftJEQTvUx9rL8zFgOzaDAr%2FCjr3rVk13pE%2Fcdtw0Cq%2FmkIYwhyE4fP1QZYGnfE1OfQ%2B%2FhS%2Fg5xYPFS4G3MRUBk8rtK7m1vpn4CHHCaLMdEb8wv6PkXjglhaxmhz7jIe2HWFp6eY%2FjYm%2BSBzSNmJASsPDDTt6%2FABjqkAQoc74R8vq4QXush%2BXdBu%2BFhpo2vijsbSItSXgjv6dSm2voCryOKO13oLQIEcsae6xqFv2CjuWlaUryTv3pfTzLo20eBzECLUzfoPRat55OrnbHXOR8dD7kDG79LC4%2F6Dxd3O5uJokJOdO9s3J%2BiOeUmjaUrMIP8Z74M0B4SpRibY6LoduP7uaWp56NRgqZXTL064vKaN06R%2FRk3GWIwSlnk1weD&X-Amz-Signature=d96c22cb03e8ea2b4f62ab214eba412f0e0aa2bf54e08df4d0e179b7f91f9054&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665S7YN5Y%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDATnL%2FQ785YzPjqmUYb2putojpnI5tvdjVH1WqioJrAAIhAKssSTL00%2BiwOaRCDWpa3j%2Fsc2xvDe50uziQdtWAGyuaKv8DCDQQABoMNjM3NDIzMTgzODA1IgwxnQl9fZy2I%2Fv48BMq3APZuJkRkqiVg%2BS%2B3ClQ9MFD3XQEd5UsBdPsibY18kd0cGzBa0khp676Q%2BVC63WQhocAPiC0lY83R6xQXf3EHCEEppHh20PUOOo4M1dj%2B2V1Oks7jUYviy3RU%2B8TQJ0Jf7JbaJoNruVoQF5VAXDkgKqhGLwy4zLQhd5vW0N46XKQYNS%2BjNpmofhBixZdmf5EtEzBRRg7DLr5AxVC%2F5e5pCzABeNvLjXU4fSKulHgvcbPj4ZboPEtPXE%2BtB5UAYzoxpTCs1gqLnRiAyA4LBw95lTp6Je%2FqZI6F5yXk1zloU1GtVPaXuUW4sPxHuMl5A%2BXqkw0aZe8DFBFU%2BYGxuBm3MYp3U81Rs3z14sUgiQ59cdiAgoP6b6t8h%2FCsQgYJMuHJbEpAJO0KlDA%2BoSbrMuA2Pq0gwu0ubg6FNE8NV%2F%2FnW0ROF5ovHIZnojJF5CieXDLJEKLVybHcde8%2BegfnLxgQQ3hgMqEWdb0auFnNIftJEQTvUx9rL8zFgOzaDAr%2FCjr3rVk13pE%2Fcdtw0Cq%2FmkIYwhyE4fP1QZYGnfE1OfQ%2B%2FhS%2Fg5xYPFS4G3MRUBk8rtK7m1vpn4CHHCaLMdEb8wv6PkXjglhaxmhz7jIe2HWFp6eY%2FjYm%2BSBzSNmJASsPDDTt6%2FABjqkAQoc74R8vq4QXush%2BXdBu%2BFhpo2vijsbSItSXgjv6dSm2voCryOKO13oLQIEcsae6xqFv2CjuWlaUryTv3pfTzLo20eBzECLUzfoPRat55OrnbHXOR8dD7kDG79LC4%2F6Dxd3O5uJokJOdO9s3J%2BiOeUmjaUrMIP8Z74M0B4SpRibY6LoduP7uaWp56NRgqZXTL064vKaN06R%2FRk3GWIwSlnk1weD&X-Amz-Signature=d400e211c21cde5fd19bc47a56f0e92db4746839abf47a8ef0c4221b887216a5&X-Amz-SignedHeaders=host&x-id=GetObject)
