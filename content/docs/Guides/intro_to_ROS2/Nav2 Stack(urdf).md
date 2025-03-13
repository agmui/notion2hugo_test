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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GEUHFW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9ys58ayug2JqZMqv%2ByCCjFjMqdtscXb9e%2FTwWS2KIVAiA%2B%2BmBoVYD4pCATki9wT8npy7hArQtdHEvN73%2FRIwNH5iqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf1EWbtFMGeI0Wb9TKtwDfV3cOyrV%2BQJQJRMJjpcH5cML%2BIGQTSgCOJ0VVEYq2qNXz%2Br2rauH65dr%2FFJ9CS%2B2UlFniyutob5ANUQBJbjDeyvYLyutIxBhfBFwXXZOlAy%2BmOQ2qUqjvcti8JYp%2Fe0Y0bjjQ1Hl9988qVEpKpsuyK%2FNcRLkAlb5vlnCVByPCmbzyQgodj4%2FFygpuaHS91xPuvxao5k2tjJ%2Bcj5C9Xbo0QTMUYEE6QCguOlaTX0ik%2F3PjADyFlbCCuacySurjP85bWdPadjYtpGVAADjCmddPFE%2BOe745D4NWSmWCCi6O489YooPBt9J7ZKXKUOLeRTg5aIz4v5bwsJSVpvwtxSBZdrYBGWzV9CVoK4iCcCmRCADt0chBeCnqh%2B%2BgOFbnupgu9iZKkH%2FnP6Z8vCMa%2FrZ1YszI7xjZD9aYjvaeODkI4Fl8eJ9yB7nVElHoVYGxv535q77k1V1bCqsCTj2nhuzQYYzHXSx8TvPgxSHYzGIrWEpklIFOgc6AmcNKjxdy96SwkZZaVgPg7EpqHKm7WmTMVAiDlKXIXCiZHbF5O%2FXgD8C5Nw0BJSrU8wDtqi9ZwDWLoWN7PIHFqpq2YNn2UO6r%2Bjpbc6DyKwPb5KxMBgQd5p0lK6cTG4gyWVn7Q4woPbMvgY6pgFBlpHNwTib4TDoU%2BowpK3pG%2B7fbrtz5HrSHOUf82lLjecGyQSQe52eIpYwQkK4Vku8tCbBCeP6Z6aghTZTvBUNIO3KEMV9Be%2Fawoz3kBCJcBS0LibXEoEU4LEQMegChU6RIeSXTZH%2F1sAQ4pKIKvrXprQqGnr61XRkkz7zhSnXdYXWOPaf0j6L44ZTVaAEcUBkhcc36lVgCNrl3hrUY2TiP9iCf9nG&X-Amz-Signature=cef0020347a0db016941d7524681912d13fe10ada571fca53883bf49eb8436f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GEUHFW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9ys58ayug2JqZMqv%2ByCCjFjMqdtscXb9e%2FTwWS2KIVAiA%2B%2BmBoVYD4pCATki9wT8npy7hArQtdHEvN73%2FRIwNH5iqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf1EWbtFMGeI0Wb9TKtwDfV3cOyrV%2BQJQJRMJjpcH5cML%2BIGQTSgCOJ0VVEYq2qNXz%2Br2rauH65dr%2FFJ9CS%2B2UlFniyutob5ANUQBJbjDeyvYLyutIxBhfBFwXXZOlAy%2BmOQ2qUqjvcti8JYp%2Fe0Y0bjjQ1Hl9988qVEpKpsuyK%2FNcRLkAlb5vlnCVByPCmbzyQgodj4%2FFygpuaHS91xPuvxao5k2tjJ%2Bcj5C9Xbo0QTMUYEE6QCguOlaTX0ik%2F3PjADyFlbCCuacySurjP85bWdPadjYtpGVAADjCmddPFE%2BOe745D4NWSmWCCi6O489YooPBt9J7ZKXKUOLeRTg5aIz4v5bwsJSVpvwtxSBZdrYBGWzV9CVoK4iCcCmRCADt0chBeCnqh%2B%2BgOFbnupgu9iZKkH%2FnP6Z8vCMa%2FrZ1YszI7xjZD9aYjvaeODkI4Fl8eJ9yB7nVElHoVYGxv535q77k1V1bCqsCTj2nhuzQYYzHXSx8TvPgxSHYzGIrWEpklIFOgc6AmcNKjxdy96SwkZZaVgPg7EpqHKm7WmTMVAiDlKXIXCiZHbF5O%2FXgD8C5Nw0BJSrU8wDtqi9ZwDWLoWN7PIHFqpq2YNn2UO6r%2Bjpbc6DyKwPb5KxMBgQd5p0lK6cTG4gyWVn7Q4woPbMvgY6pgFBlpHNwTib4TDoU%2BowpK3pG%2B7fbrtz5HrSHOUf82lLjecGyQSQe52eIpYwQkK4Vku8tCbBCeP6Z6aghTZTvBUNIO3KEMV9Be%2Fawoz3kBCJcBS0LibXEoEU4LEQMegChU6RIeSXTZH%2F1sAQ4pKIKvrXprQqGnr61XRkkz7zhSnXdYXWOPaf0j6L44ZTVaAEcUBkhcc36lVgCNrl3hrUY2TiP9iCf9nG&X-Amz-Signature=a487a2c04865c467ce9320e52233562b489d121babb3520fa2b292100b8fded6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GEUHFW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9ys58ayug2JqZMqv%2ByCCjFjMqdtscXb9e%2FTwWS2KIVAiA%2B%2BmBoVYD4pCATki9wT8npy7hArQtdHEvN73%2FRIwNH5iqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf1EWbtFMGeI0Wb9TKtwDfV3cOyrV%2BQJQJRMJjpcH5cML%2BIGQTSgCOJ0VVEYq2qNXz%2Br2rauH65dr%2FFJ9CS%2B2UlFniyutob5ANUQBJbjDeyvYLyutIxBhfBFwXXZOlAy%2BmOQ2qUqjvcti8JYp%2Fe0Y0bjjQ1Hl9988qVEpKpsuyK%2FNcRLkAlb5vlnCVByPCmbzyQgodj4%2FFygpuaHS91xPuvxao5k2tjJ%2Bcj5C9Xbo0QTMUYEE6QCguOlaTX0ik%2F3PjADyFlbCCuacySurjP85bWdPadjYtpGVAADjCmddPFE%2BOe745D4NWSmWCCi6O489YooPBt9J7ZKXKUOLeRTg5aIz4v5bwsJSVpvwtxSBZdrYBGWzV9CVoK4iCcCmRCADt0chBeCnqh%2B%2BgOFbnupgu9iZKkH%2FnP6Z8vCMa%2FrZ1YszI7xjZD9aYjvaeODkI4Fl8eJ9yB7nVElHoVYGxv535q77k1V1bCqsCTj2nhuzQYYzHXSx8TvPgxSHYzGIrWEpklIFOgc6AmcNKjxdy96SwkZZaVgPg7EpqHKm7WmTMVAiDlKXIXCiZHbF5O%2FXgD8C5Nw0BJSrU8wDtqi9ZwDWLoWN7PIHFqpq2YNn2UO6r%2Bjpbc6DyKwPb5KxMBgQd5p0lK6cTG4gyWVn7Q4woPbMvgY6pgFBlpHNwTib4TDoU%2BowpK3pG%2B7fbrtz5HrSHOUf82lLjecGyQSQe52eIpYwQkK4Vku8tCbBCeP6Z6aghTZTvBUNIO3KEMV9Be%2Fawoz3kBCJcBS0LibXEoEU4LEQMegChU6RIeSXTZH%2F1sAQ4pKIKvrXprQqGnr61XRkkz7zhSnXdYXWOPaf0j6L44ZTVaAEcUBkhcc36lVgCNrl3hrUY2TiP9iCf9nG&X-Amz-Signature=32fb05efef4db46a22173f3d79fb5b237df619a45765129f93007f785e9be67e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GEUHFW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9ys58ayug2JqZMqv%2ByCCjFjMqdtscXb9e%2FTwWS2KIVAiA%2B%2BmBoVYD4pCATki9wT8npy7hArQtdHEvN73%2FRIwNH5iqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf1EWbtFMGeI0Wb9TKtwDfV3cOyrV%2BQJQJRMJjpcH5cML%2BIGQTSgCOJ0VVEYq2qNXz%2Br2rauH65dr%2FFJ9CS%2B2UlFniyutob5ANUQBJbjDeyvYLyutIxBhfBFwXXZOlAy%2BmOQ2qUqjvcti8JYp%2Fe0Y0bjjQ1Hl9988qVEpKpsuyK%2FNcRLkAlb5vlnCVByPCmbzyQgodj4%2FFygpuaHS91xPuvxao5k2tjJ%2Bcj5C9Xbo0QTMUYEE6QCguOlaTX0ik%2F3PjADyFlbCCuacySurjP85bWdPadjYtpGVAADjCmddPFE%2BOe745D4NWSmWCCi6O489YooPBt9J7ZKXKUOLeRTg5aIz4v5bwsJSVpvwtxSBZdrYBGWzV9CVoK4iCcCmRCADt0chBeCnqh%2B%2BgOFbnupgu9iZKkH%2FnP6Z8vCMa%2FrZ1YszI7xjZD9aYjvaeODkI4Fl8eJ9yB7nVElHoVYGxv535q77k1V1bCqsCTj2nhuzQYYzHXSx8TvPgxSHYzGIrWEpklIFOgc6AmcNKjxdy96SwkZZaVgPg7EpqHKm7WmTMVAiDlKXIXCiZHbF5O%2FXgD8C5Nw0BJSrU8wDtqi9ZwDWLoWN7PIHFqpq2YNn2UO6r%2Bjpbc6DyKwPb5KxMBgQd5p0lK6cTG4gyWVn7Q4woPbMvgY6pgFBlpHNwTib4TDoU%2BowpK3pG%2B7fbrtz5HrSHOUf82lLjecGyQSQe52eIpYwQkK4Vku8tCbBCeP6Z6aghTZTvBUNIO3KEMV9Be%2Fawoz3kBCJcBS0LibXEoEU4LEQMegChU6RIeSXTZH%2F1sAQ4pKIKvrXprQqGnr61XRkkz7zhSnXdYXWOPaf0j6L44ZTVaAEcUBkhcc36lVgCNrl3hrUY2TiP9iCf9nG&X-Amz-Signature=af464bb8d9b44d21f95894f932b9426d1aed470d9a4097b80e031271953b31d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GEUHFW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9ys58ayug2JqZMqv%2ByCCjFjMqdtscXb9e%2FTwWS2KIVAiA%2B%2BmBoVYD4pCATki9wT8npy7hArQtdHEvN73%2FRIwNH5iqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf1EWbtFMGeI0Wb9TKtwDfV3cOyrV%2BQJQJRMJjpcH5cML%2BIGQTSgCOJ0VVEYq2qNXz%2Br2rauH65dr%2FFJ9CS%2B2UlFniyutob5ANUQBJbjDeyvYLyutIxBhfBFwXXZOlAy%2BmOQ2qUqjvcti8JYp%2Fe0Y0bjjQ1Hl9988qVEpKpsuyK%2FNcRLkAlb5vlnCVByPCmbzyQgodj4%2FFygpuaHS91xPuvxao5k2tjJ%2Bcj5C9Xbo0QTMUYEE6QCguOlaTX0ik%2F3PjADyFlbCCuacySurjP85bWdPadjYtpGVAADjCmddPFE%2BOe745D4NWSmWCCi6O489YooPBt9J7ZKXKUOLeRTg5aIz4v5bwsJSVpvwtxSBZdrYBGWzV9CVoK4iCcCmRCADt0chBeCnqh%2B%2BgOFbnupgu9iZKkH%2FnP6Z8vCMa%2FrZ1YszI7xjZD9aYjvaeODkI4Fl8eJ9yB7nVElHoVYGxv535q77k1V1bCqsCTj2nhuzQYYzHXSx8TvPgxSHYzGIrWEpklIFOgc6AmcNKjxdy96SwkZZaVgPg7EpqHKm7WmTMVAiDlKXIXCiZHbF5O%2FXgD8C5Nw0BJSrU8wDtqi9ZwDWLoWN7PIHFqpq2YNn2UO6r%2Bjpbc6DyKwPb5KxMBgQd5p0lK6cTG4gyWVn7Q4woPbMvgY6pgFBlpHNwTib4TDoU%2BowpK3pG%2B7fbrtz5HrSHOUf82lLjecGyQSQe52eIpYwQkK4Vku8tCbBCeP6Z6aghTZTvBUNIO3KEMV9Be%2Fawoz3kBCJcBS0LibXEoEU4LEQMegChU6RIeSXTZH%2F1sAQ4pKIKvrXprQqGnr61XRkkz7zhSnXdYXWOPaf0j6L44ZTVaAEcUBkhcc36lVgCNrl3hrUY2TiP9iCf9nG&X-Amz-Signature=86b5fe929b234cc18de26e3a19f26ed93c5d7f0ecbcc3ef5be2d3d3fee90e767&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GEUHFW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9ys58ayug2JqZMqv%2ByCCjFjMqdtscXb9e%2FTwWS2KIVAiA%2B%2BmBoVYD4pCATki9wT8npy7hArQtdHEvN73%2FRIwNH5iqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf1EWbtFMGeI0Wb9TKtwDfV3cOyrV%2BQJQJRMJjpcH5cML%2BIGQTSgCOJ0VVEYq2qNXz%2Br2rauH65dr%2FFJ9CS%2B2UlFniyutob5ANUQBJbjDeyvYLyutIxBhfBFwXXZOlAy%2BmOQ2qUqjvcti8JYp%2Fe0Y0bjjQ1Hl9988qVEpKpsuyK%2FNcRLkAlb5vlnCVByPCmbzyQgodj4%2FFygpuaHS91xPuvxao5k2tjJ%2Bcj5C9Xbo0QTMUYEE6QCguOlaTX0ik%2F3PjADyFlbCCuacySurjP85bWdPadjYtpGVAADjCmddPFE%2BOe745D4NWSmWCCi6O489YooPBt9J7ZKXKUOLeRTg5aIz4v5bwsJSVpvwtxSBZdrYBGWzV9CVoK4iCcCmRCADt0chBeCnqh%2B%2BgOFbnupgu9iZKkH%2FnP6Z8vCMa%2FrZ1YszI7xjZD9aYjvaeODkI4Fl8eJ9yB7nVElHoVYGxv535q77k1V1bCqsCTj2nhuzQYYzHXSx8TvPgxSHYzGIrWEpklIFOgc6AmcNKjxdy96SwkZZaVgPg7EpqHKm7WmTMVAiDlKXIXCiZHbF5O%2FXgD8C5Nw0BJSrU8wDtqi9ZwDWLoWN7PIHFqpq2YNn2UO6r%2Bjpbc6DyKwPb5KxMBgQd5p0lK6cTG4gyWVn7Q4woPbMvgY6pgFBlpHNwTib4TDoU%2BowpK3pG%2B7fbrtz5HrSHOUf82lLjecGyQSQe52eIpYwQkK4Vku8tCbBCeP6Z6aghTZTvBUNIO3KEMV9Be%2Fawoz3kBCJcBS0LibXEoEU4LEQMegChU6RIeSXTZH%2F1sAQ4pKIKvrXprQqGnr61XRkkz7zhSnXdYXWOPaf0j6L44ZTVaAEcUBkhcc36lVgCNrl3hrUY2TiP9iCf9nG&X-Amz-Signature=3a5ec3a127574637c9466ce1016ff8ed77110e766ee81a32a60f07f2d2ee0fc1&X-Amz-SignedHeaders=host&x-id=GetObject)
