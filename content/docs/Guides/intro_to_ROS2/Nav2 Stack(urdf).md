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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTU5MZY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGk8J%2FEZYOCFa%2FKXsM2AgcNOaJSzKybDRy2DK%2FrhzGKeAiEAn1Yjddt5cI8B061nb2xqvRFfiMI2C5fTiC%2BpDS72Gowq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK7qbM6a8LE%2FPZkoNCrcAzf%2Fm4HmN7AUVdnsZm9hN6SnnfbSMzN7Vr0OKsfsKpkdRfBZ0fcju6Rqb0i3vPvgYVZOl7sdsbyHrj84YGo8z1nq4HSjiUiVO%2F3ijHNkRTcUDadcyo%2BFQzCeK3%2B9mZflll%2FNuF9rr512lWeVe3s30HmE8O2%2FlJAfl%2FCeihlpABpkmSGXQMWe4EIQ%2B5HG2vwCFVwqHFyOkXemsydkLzAbDxz0nMq025BYNdj1xoOkApHm4ssHgHQjaJTMWt7JxiT5p88HxAqMGikg%2BMH4Xz3aIu%2F%2Fe5SThQNxQccrVndXOgE4B6wy32gOAoN8P3siszJTwfG%2FqxyzkBuBRfVRSHbOUFTIGh7laoAJqfnMwpSN6M9b6%2BZPiTgSQVKwP09AVau8Pt3z8ZV3lPaFr%2B%2FJoILuMQM98dOapIIXhRFoT5y44YvTqwkJ3gW%2FFIxbzPclaVy9mR%2F0QGYU%2F9pi%2BS%2F%2F01wu9aYAwG5ff27DhdFZzAC3ioeyoEPaCWtRudFuNEbeQ9%2Bc5R7kG5ocIHabgAeyV85PYerqNvxEfnQxvqMxUNduOFb4qBJ9XMbX7w%2Fx1NETRLVK2TC5VXV0%2Bp2BZnloDlVc9xdd4eAtWKVjmfAElxbf9C7iVxTHpmJUSf3zW5xXMI%2FM98IGOqUBcJiojtxKfdt3kc8nEtttpKBthG85UU2Nvpl%2BhGRbbqWteZQgvLTUMUezOR%2FR7qzH4WzHq1o7xKo%2BAo9uSoIZeNUfIXx8BoAiHVUwVLDj5YcTUqD2N6y8X9LhCS93UfqRCS6sr7XWP0EMJHm8jXW%2FKhiIxBqsuYyV8RvtDwMwC1LjahrU5TbZHYWwWYE6nLeZ0Q%2B1341Df%2FSxSIKabk9%2F71wtCfkY&X-Amz-Signature=9d4526f83a50c060ee408cb4e3dde8904701e53db05b9ae6f68dbc7bee899d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTU5MZY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGk8J%2FEZYOCFa%2FKXsM2AgcNOaJSzKybDRy2DK%2FrhzGKeAiEAn1Yjddt5cI8B061nb2xqvRFfiMI2C5fTiC%2BpDS72Gowq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK7qbM6a8LE%2FPZkoNCrcAzf%2Fm4HmN7AUVdnsZm9hN6SnnfbSMzN7Vr0OKsfsKpkdRfBZ0fcju6Rqb0i3vPvgYVZOl7sdsbyHrj84YGo8z1nq4HSjiUiVO%2F3ijHNkRTcUDadcyo%2BFQzCeK3%2B9mZflll%2FNuF9rr512lWeVe3s30HmE8O2%2FlJAfl%2FCeihlpABpkmSGXQMWe4EIQ%2B5HG2vwCFVwqHFyOkXemsydkLzAbDxz0nMq025BYNdj1xoOkApHm4ssHgHQjaJTMWt7JxiT5p88HxAqMGikg%2BMH4Xz3aIu%2F%2Fe5SThQNxQccrVndXOgE4B6wy32gOAoN8P3siszJTwfG%2FqxyzkBuBRfVRSHbOUFTIGh7laoAJqfnMwpSN6M9b6%2BZPiTgSQVKwP09AVau8Pt3z8ZV3lPaFr%2B%2FJoILuMQM98dOapIIXhRFoT5y44YvTqwkJ3gW%2FFIxbzPclaVy9mR%2F0QGYU%2F9pi%2BS%2F%2F01wu9aYAwG5ff27DhdFZzAC3ioeyoEPaCWtRudFuNEbeQ9%2Bc5R7kG5ocIHabgAeyV85PYerqNvxEfnQxvqMxUNduOFb4qBJ9XMbX7w%2Fx1NETRLVK2TC5VXV0%2Bp2BZnloDlVc9xdd4eAtWKVjmfAElxbf9C7iVxTHpmJUSf3zW5xXMI%2FM98IGOqUBcJiojtxKfdt3kc8nEtttpKBthG85UU2Nvpl%2BhGRbbqWteZQgvLTUMUezOR%2FR7qzH4WzHq1o7xKo%2BAo9uSoIZeNUfIXx8BoAiHVUwVLDj5YcTUqD2N6y8X9LhCS93UfqRCS6sr7XWP0EMJHm8jXW%2FKhiIxBqsuYyV8RvtDwMwC1LjahrU5TbZHYWwWYE6nLeZ0Q%2B1341Df%2FSxSIKabk9%2F71wtCfkY&X-Amz-Signature=1621986756687c25599bd3a00ba039cb8f9b247a9f29ff18d3f313b3e33a2a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTU5MZY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGk8J%2FEZYOCFa%2FKXsM2AgcNOaJSzKybDRy2DK%2FrhzGKeAiEAn1Yjddt5cI8B061nb2xqvRFfiMI2C5fTiC%2BpDS72Gowq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK7qbM6a8LE%2FPZkoNCrcAzf%2Fm4HmN7AUVdnsZm9hN6SnnfbSMzN7Vr0OKsfsKpkdRfBZ0fcju6Rqb0i3vPvgYVZOl7sdsbyHrj84YGo8z1nq4HSjiUiVO%2F3ijHNkRTcUDadcyo%2BFQzCeK3%2B9mZflll%2FNuF9rr512lWeVe3s30HmE8O2%2FlJAfl%2FCeihlpABpkmSGXQMWe4EIQ%2B5HG2vwCFVwqHFyOkXemsydkLzAbDxz0nMq025BYNdj1xoOkApHm4ssHgHQjaJTMWt7JxiT5p88HxAqMGikg%2BMH4Xz3aIu%2F%2Fe5SThQNxQccrVndXOgE4B6wy32gOAoN8P3siszJTwfG%2FqxyzkBuBRfVRSHbOUFTIGh7laoAJqfnMwpSN6M9b6%2BZPiTgSQVKwP09AVau8Pt3z8ZV3lPaFr%2B%2FJoILuMQM98dOapIIXhRFoT5y44YvTqwkJ3gW%2FFIxbzPclaVy9mR%2F0QGYU%2F9pi%2BS%2F%2F01wu9aYAwG5ff27DhdFZzAC3ioeyoEPaCWtRudFuNEbeQ9%2Bc5R7kG5ocIHabgAeyV85PYerqNvxEfnQxvqMxUNduOFb4qBJ9XMbX7w%2Fx1NETRLVK2TC5VXV0%2Bp2BZnloDlVc9xdd4eAtWKVjmfAElxbf9C7iVxTHpmJUSf3zW5xXMI%2FM98IGOqUBcJiojtxKfdt3kc8nEtttpKBthG85UU2Nvpl%2BhGRbbqWteZQgvLTUMUezOR%2FR7qzH4WzHq1o7xKo%2BAo9uSoIZeNUfIXx8BoAiHVUwVLDj5YcTUqD2N6y8X9LhCS93UfqRCS6sr7XWP0EMJHm8jXW%2FKhiIxBqsuYyV8RvtDwMwC1LjahrU5TbZHYWwWYE6nLeZ0Q%2B1341Df%2FSxSIKabk9%2F71wtCfkY&X-Amz-Signature=7d63abdcf92f703ec758354a3121143925068317b3b538298b17dd6665709b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTU5MZY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGk8J%2FEZYOCFa%2FKXsM2AgcNOaJSzKybDRy2DK%2FrhzGKeAiEAn1Yjddt5cI8B061nb2xqvRFfiMI2C5fTiC%2BpDS72Gowq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK7qbM6a8LE%2FPZkoNCrcAzf%2Fm4HmN7AUVdnsZm9hN6SnnfbSMzN7Vr0OKsfsKpkdRfBZ0fcju6Rqb0i3vPvgYVZOl7sdsbyHrj84YGo8z1nq4HSjiUiVO%2F3ijHNkRTcUDadcyo%2BFQzCeK3%2B9mZflll%2FNuF9rr512lWeVe3s30HmE8O2%2FlJAfl%2FCeihlpABpkmSGXQMWe4EIQ%2B5HG2vwCFVwqHFyOkXemsydkLzAbDxz0nMq025BYNdj1xoOkApHm4ssHgHQjaJTMWt7JxiT5p88HxAqMGikg%2BMH4Xz3aIu%2F%2Fe5SThQNxQccrVndXOgE4B6wy32gOAoN8P3siszJTwfG%2FqxyzkBuBRfVRSHbOUFTIGh7laoAJqfnMwpSN6M9b6%2BZPiTgSQVKwP09AVau8Pt3z8ZV3lPaFr%2B%2FJoILuMQM98dOapIIXhRFoT5y44YvTqwkJ3gW%2FFIxbzPclaVy9mR%2F0QGYU%2F9pi%2BS%2F%2F01wu9aYAwG5ff27DhdFZzAC3ioeyoEPaCWtRudFuNEbeQ9%2Bc5R7kG5ocIHabgAeyV85PYerqNvxEfnQxvqMxUNduOFb4qBJ9XMbX7w%2Fx1NETRLVK2TC5VXV0%2Bp2BZnloDlVc9xdd4eAtWKVjmfAElxbf9C7iVxTHpmJUSf3zW5xXMI%2FM98IGOqUBcJiojtxKfdt3kc8nEtttpKBthG85UU2Nvpl%2BhGRbbqWteZQgvLTUMUezOR%2FR7qzH4WzHq1o7xKo%2BAo9uSoIZeNUfIXx8BoAiHVUwVLDj5YcTUqD2N6y8X9LhCS93UfqRCS6sr7XWP0EMJHm8jXW%2FKhiIxBqsuYyV8RvtDwMwC1LjahrU5TbZHYWwWYE6nLeZ0Q%2B1341Df%2FSxSIKabk9%2F71wtCfkY&X-Amz-Signature=f7417085086cb278ba44f0f6a0c92a540cfecade8240199c6bf0e1465256321d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTU5MZY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGk8J%2FEZYOCFa%2FKXsM2AgcNOaJSzKybDRy2DK%2FrhzGKeAiEAn1Yjddt5cI8B061nb2xqvRFfiMI2C5fTiC%2BpDS72Gowq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK7qbM6a8LE%2FPZkoNCrcAzf%2Fm4HmN7AUVdnsZm9hN6SnnfbSMzN7Vr0OKsfsKpkdRfBZ0fcju6Rqb0i3vPvgYVZOl7sdsbyHrj84YGo8z1nq4HSjiUiVO%2F3ijHNkRTcUDadcyo%2BFQzCeK3%2B9mZflll%2FNuF9rr512lWeVe3s30HmE8O2%2FlJAfl%2FCeihlpABpkmSGXQMWe4EIQ%2B5HG2vwCFVwqHFyOkXemsydkLzAbDxz0nMq025BYNdj1xoOkApHm4ssHgHQjaJTMWt7JxiT5p88HxAqMGikg%2BMH4Xz3aIu%2F%2Fe5SThQNxQccrVndXOgE4B6wy32gOAoN8P3siszJTwfG%2FqxyzkBuBRfVRSHbOUFTIGh7laoAJqfnMwpSN6M9b6%2BZPiTgSQVKwP09AVau8Pt3z8ZV3lPaFr%2B%2FJoILuMQM98dOapIIXhRFoT5y44YvTqwkJ3gW%2FFIxbzPclaVy9mR%2F0QGYU%2F9pi%2BS%2F%2F01wu9aYAwG5ff27DhdFZzAC3ioeyoEPaCWtRudFuNEbeQ9%2Bc5R7kG5ocIHabgAeyV85PYerqNvxEfnQxvqMxUNduOFb4qBJ9XMbX7w%2Fx1NETRLVK2TC5VXV0%2Bp2BZnloDlVc9xdd4eAtWKVjmfAElxbf9C7iVxTHpmJUSf3zW5xXMI%2FM98IGOqUBcJiojtxKfdt3kc8nEtttpKBthG85UU2Nvpl%2BhGRbbqWteZQgvLTUMUezOR%2FR7qzH4WzHq1o7xKo%2BAo9uSoIZeNUfIXx8BoAiHVUwVLDj5YcTUqD2N6y8X9LhCS93UfqRCS6sr7XWP0EMJHm8jXW%2FKhiIxBqsuYyV8RvtDwMwC1LjahrU5TbZHYWwWYE6nLeZ0Q%2B1341Df%2FSxSIKabk9%2F71wtCfkY&X-Amz-Signature=52e2b6bbb937c66389ec94bd6d63c0a64b3fc53febe26ebb0679485b4a4061cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTU5MZY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGk8J%2FEZYOCFa%2FKXsM2AgcNOaJSzKybDRy2DK%2FrhzGKeAiEAn1Yjddt5cI8B061nb2xqvRFfiMI2C5fTiC%2BpDS72Gowq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK7qbM6a8LE%2FPZkoNCrcAzf%2Fm4HmN7AUVdnsZm9hN6SnnfbSMzN7Vr0OKsfsKpkdRfBZ0fcju6Rqb0i3vPvgYVZOl7sdsbyHrj84YGo8z1nq4HSjiUiVO%2F3ijHNkRTcUDadcyo%2BFQzCeK3%2B9mZflll%2FNuF9rr512lWeVe3s30HmE8O2%2FlJAfl%2FCeihlpABpkmSGXQMWe4EIQ%2B5HG2vwCFVwqHFyOkXemsydkLzAbDxz0nMq025BYNdj1xoOkApHm4ssHgHQjaJTMWt7JxiT5p88HxAqMGikg%2BMH4Xz3aIu%2F%2Fe5SThQNxQccrVndXOgE4B6wy32gOAoN8P3siszJTwfG%2FqxyzkBuBRfVRSHbOUFTIGh7laoAJqfnMwpSN6M9b6%2BZPiTgSQVKwP09AVau8Pt3z8ZV3lPaFr%2B%2FJoILuMQM98dOapIIXhRFoT5y44YvTqwkJ3gW%2FFIxbzPclaVy9mR%2F0QGYU%2F9pi%2BS%2F%2F01wu9aYAwG5ff27DhdFZzAC3ioeyoEPaCWtRudFuNEbeQ9%2Bc5R7kG5ocIHabgAeyV85PYerqNvxEfnQxvqMxUNduOFb4qBJ9XMbX7w%2Fx1NETRLVK2TC5VXV0%2Bp2BZnloDlVc9xdd4eAtWKVjmfAElxbf9C7iVxTHpmJUSf3zW5xXMI%2FM98IGOqUBcJiojtxKfdt3kc8nEtttpKBthG85UU2Nvpl%2BhGRbbqWteZQgvLTUMUezOR%2FR7qzH4WzHq1o7xKo%2BAo9uSoIZeNUfIXx8BoAiHVUwVLDj5YcTUqD2N6y8X9LhCS93UfqRCS6sr7XWP0EMJHm8jXW%2FKhiIxBqsuYyV8RvtDwMwC1LjahrU5TbZHYWwWYE6nLeZ0Q%2B1341Df%2FSxSIKabk9%2F71wtCfkY&X-Amz-Signature=84293af1e08ff60a5a9c2a546a3bca434f42e1c69c4458546b56798ddbb08f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
