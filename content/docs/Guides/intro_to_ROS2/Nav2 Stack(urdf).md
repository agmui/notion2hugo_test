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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IFHJ3W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8FlrV%2BGoOltumsV8GQVGgrKwA5MkFCIAKuYLyjUpj3AIhAPSvtZNElbcx03quF1VRydLrgMNGDune%2FzxZMkzHE4WpKv8DCDcQABoMNjM3NDIzMTgzODA1Igyu%2FKqVvBiK7vsUIqMq3AP%2FUU5Jv7wyLQ4WWNnKYm0EtRuVGhv%2FmMaXqQzDNZUpqt56osPfe22oxDFjj3N0pLgpHm4lgCr7lZkdInoECwHPtBf56eER8HKcNaDFHdJEpIcItI11r1cfwzH%2Bo7i8TpgROMKX2Y3%2F9LFyFY5yXlrCeMutDVJKzIlw%2FkLY55LS6OskcajZGGfRtd29R4X23D9zWd3l4U4EdYQVYvOgWhwPc7twxWw71DZrddenrKT4PGA2YIwlMLwNYhL0Xz8T7iEae7lByj%2FnkO4NDT%2Fs%2FGNmBKGyt5wdudPVmSm%2FSPRXn4tu7Xj79F1MnmyFBqIG2kWTcgwX0HQS1PQX5Rq3L4OLIh%2Bk1oXqxaU%2BgmJB7ZL89kWuAR3W%2BpVpf82PrshN5Qe1whEQhN8AhOf44lyos1CUTQqJSUpd3FenDljqBeV19E9Fm3R2t8kJI6U%2F28OlAeR5tqlCb9FaJkuSabVc6e81bcWGFpQAM%2Fwjg44OrRvMLcJD%2FqGktb7v50g%2FqqY98j0flgk%2BtXCHHmTjFcbNULHjIoAupILolvnHOJpsdWuEboqeVjnDSf19NH3UJkMw1z1M6%2F8knzAAjq3O3Wq0m8xZ1uKEQP%2FnHmo04vE9IcUkDNgiV0OXOO3ekM08fjC5qs7BBjqkAdsHDie5N%2Fb5FRLNvC19g7CGvXqgNq2bV5CJglrhe%2FuucBVBqreEwc8Sn259WUN21gos%2F%2Bhxi%2BVRvMs2RnQzVjO%2BXjvTvTNAh9LLdFGyKP9lxfRBB5L1bAgz63uq83wpU24SnaQbidlBsWi5SZ0tJu1U07Ho6hzahGP19n9a4OJzQgvRQgx3z1LlEgN88UmjWFngPail7yyaNvtegJtiVAp%2ByoJm&X-Amz-Signature=d091a60e0f884841a06c95d5d6eae24348e9f09ecf835aa0537d042d98eb89b0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IFHJ3W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8FlrV%2BGoOltumsV8GQVGgrKwA5MkFCIAKuYLyjUpj3AIhAPSvtZNElbcx03quF1VRydLrgMNGDune%2FzxZMkzHE4WpKv8DCDcQABoMNjM3NDIzMTgzODA1Igyu%2FKqVvBiK7vsUIqMq3AP%2FUU5Jv7wyLQ4WWNnKYm0EtRuVGhv%2FmMaXqQzDNZUpqt56osPfe22oxDFjj3N0pLgpHm4lgCr7lZkdInoECwHPtBf56eER8HKcNaDFHdJEpIcItI11r1cfwzH%2Bo7i8TpgROMKX2Y3%2F9LFyFY5yXlrCeMutDVJKzIlw%2FkLY55LS6OskcajZGGfRtd29R4X23D9zWd3l4U4EdYQVYvOgWhwPc7twxWw71DZrddenrKT4PGA2YIwlMLwNYhL0Xz8T7iEae7lByj%2FnkO4NDT%2Fs%2FGNmBKGyt5wdudPVmSm%2FSPRXn4tu7Xj79F1MnmyFBqIG2kWTcgwX0HQS1PQX5Rq3L4OLIh%2Bk1oXqxaU%2BgmJB7ZL89kWuAR3W%2BpVpf82PrshN5Qe1whEQhN8AhOf44lyos1CUTQqJSUpd3FenDljqBeV19E9Fm3R2t8kJI6U%2F28OlAeR5tqlCb9FaJkuSabVc6e81bcWGFpQAM%2Fwjg44OrRvMLcJD%2FqGktb7v50g%2FqqY98j0flgk%2BtXCHHmTjFcbNULHjIoAupILolvnHOJpsdWuEboqeVjnDSf19NH3UJkMw1z1M6%2F8knzAAjq3O3Wq0m8xZ1uKEQP%2FnHmo04vE9IcUkDNgiV0OXOO3ekM08fjC5qs7BBjqkAdsHDie5N%2Fb5FRLNvC19g7CGvXqgNq2bV5CJglrhe%2FuucBVBqreEwc8Sn259WUN21gos%2F%2Bhxi%2BVRvMs2RnQzVjO%2BXjvTvTNAh9LLdFGyKP9lxfRBB5L1bAgz63uq83wpU24SnaQbidlBsWi5SZ0tJu1U07Ho6hzahGP19n9a4OJzQgvRQgx3z1LlEgN88UmjWFngPail7yyaNvtegJtiVAp%2ByoJm&X-Amz-Signature=87aee7b31f45ca0d3e798c8d460781a53c058e7879a82fd8c1aa7b78c09393d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IFHJ3W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8FlrV%2BGoOltumsV8GQVGgrKwA5MkFCIAKuYLyjUpj3AIhAPSvtZNElbcx03quF1VRydLrgMNGDune%2FzxZMkzHE4WpKv8DCDcQABoMNjM3NDIzMTgzODA1Igyu%2FKqVvBiK7vsUIqMq3AP%2FUU5Jv7wyLQ4WWNnKYm0EtRuVGhv%2FmMaXqQzDNZUpqt56osPfe22oxDFjj3N0pLgpHm4lgCr7lZkdInoECwHPtBf56eER8HKcNaDFHdJEpIcItI11r1cfwzH%2Bo7i8TpgROMKX2Y3%2F9LFyFY5yXlrCeMutDVJKzIlw%2FkLY55LS6OskcajZGGfRtd29R4X23D9zWd3l4U4EdYQVYvOgWhwPc7twxWw71DZrddenrKT4PGA2YIwlMLwNYhL0Xz8T7iEae7lByj%2FnkO4NDT%2Fs%2FGNmBKGyt5wdudPVmSm%2FSPRXn4tu7Xj79F1MnmyFBqIG2kWTcgwX0HQS1PQX5Rq3L4OLIh%2Bk1oXqxaU%2BgmJB7ZL89kWuAR3W%2BpVpf82PrshN5Qe1whEQhN8AhOf44lyos1CUTQqJSUpd3FenDljqBeV19E9Fm3R2t8kJI6U%2F28OlAeR5tqlCb9FaJkuSabVc6e81bcWGFpQAM%2Fwjg44OrRvMLcJD%2FqGktb7v50g%2FqqY98j0flgk%2BtXCHHmTjFcbNULHjIoAupILolvnHOJpsdWuEboqeVjnDSf19NH3UJkMw1z1M6%2F8knzAAjq3O3Wq0m8xZ1uKEQP%2FnHmo04vE9IcUkDNgiV0OXOO3ekM08fjC5qs7BBjqkAdsHDie5N%2Fb5FRLNvC19g7CGvXqgNq2bV5CJglrhe%2FuucBVBqreEwc8Sn259WUN21gos%2F%2Bhxi%2BVRvMs2RnQzVjO%2BXjvTvTNAh9LLdFGyKP9lxfRBB5L1bAgz63uq83wpU24SnaQbidlBsWi5SZ0tJu1U07Ho6hzahGP19n9a4OJzQgvRQgx3z1LlEgN88UmjWFngPail7yyaNvtegJtiVAp%2ByoJm&X-Amz-Signature=cd7734d15eb1762199fd08c68c409860a9f5a4c8ca4d40233262f5a9782fd062&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IFHJ3W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8FlrV%2BGoOltumsV8GQVGgrKwA5MkFCIAKuYLyjUpj3AIhAPSvtZNElbcx03quF1VRydLrgMNGDune%2FzxZMkzHE4WpKv8DCDcQABoMNjM3NDIzMTgzODA1Igyu%2FKqVvBiK7vsUIqMq3AP%2FUU5Jv7wyLQ4WWNnKYm0EtRuVGhv%2FmMaXqQzDNZUpqt56osPfe22oxDFjj3N0pLgpHm4lgCr7lZkdInoECwHPtBf56eER8HKcNaDFHdJEpIcItI11r1cfwzH%2Bo7i8TpgROMKX2Y3%2F9LFyFY5yXlrCeMutDVJKzIlw%2FkLY55LS6OskcajZGGfRtd29R4X23D9zWd3l4U4EdYQVYvOgWhwPc7twxWw71DZrddenrKT4PGA2YIwlMLwNYhL0Xz8T7iEae7lByj%2FnkO4NDT%2Fs%2FGNmBKGyt5wdudPVmSm%2FSPRXn4tu7Xj79F1MnmyFBqIG2kWTcgwX0HQS1PQX5Rq3L4OLIh%2Bk1oXqxaU%2BgmJB7ZL89kWuAR3W%2BpVpf82PrshN5Qe1whEQhN8AhOf44lyos1CUTQqJSUpd3FenDljqBeV19E9Fm3R2t8kJI6U%2F28OlAeR5tqlCb9FaJkuSabVc6e81bcWGFpQAM%2Fwjg44OrRvMLcJD%2FqGktb7v50g%2FqqY98j0flgk%2BtXCHHmTjFcbNULHjIoAupILolvnHOJpsdWuEboqeVjnDSf19NH3UJkMw1z1M6%2F8knzAAjq3O3Wq0m8xZ1uKEQP%2FnHmo04vE9IcUkDNgiV0OXOO3ekM08fjC5qs7BBjqkAdsHDie5N%2Fb5FRLNvC19g7CGvXqgNq2bV5CJglrhe%2FuucBVBqreEwc8Sn259WUN21gos%2F%2Bhxi%2BVRvMs2RnQzVjO%2BXjvTvTNAh9LLdFGyKP9lxfRBB5L1bAgz63uq83wpU24SnaQbidlBsWi5SZ0tJu1U07Ho6hzahGP19n9a4OJzQgvRQgx3z1LlEgN88UmjWFngPail7yyaNvtegJtiVAp%2ByoJm&X-Amz-Signature=eb4e45a32664d7c549fb3f6288ef2f368a507cab6cdffabf1c5cab8d8089dc7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IFHJ3W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8FlrV%2BGoOltumsV8GQVGgrKwA5MkFCIAKuYLyjUpj3AIhAPSvtZNElbcx03quF1VRydLrgMNGDune%2FzxZMkzHE4WpKv8DCDcQABoMNjM3NDIzMTgzODA1Igyu%2FKqVvBiK7vsUIqMq3AP%2FUU5Jv7wyLQ4WWNnKYm0EtRuVGhv%2FmMaXqQzDNZUpqt56osPfe22oxDFjj3N0pLgpHm4lgCr7lZkdInoECwHPtBf56eER8HKcNaDFHdJEpIcItI11r1cfwzH%2Bo7i8TpgROMKX2Y3%2F9LFyFY5yXlrCeMutDVJKzIlw%2FkLY55LS6OskcajZGGfRtd29R4X23D9zWd3l4U4EdYQVYvOgWhwPc7twxWw71DZrddenrKT4PGA2YIwlMLwNYhL0Xz8T7iEae7lByj%2FnkO4NDT%2Fs%2FGNmBKGyt5wdudPVmSm%2FSPRXn4tu7Xj79F1MnmyFBqIG2kWTcgwX0HQS1PQX5Rq3L4OLIh%2Bk1oXqxaU%2BgmJB7ZL89kWuAR3W%2BpVpf82PrshN5Qe1whEQhN8AhOf44lyos1CUTQqJSUpd3FenDljqBeV19E9Fm3R2t8kJI6U%2F28OlAeR5tqlCb9FaJkuSabVc6e81bcWGFpQAM%2Fwjg44OrRvMLcJD%2FqGktb7v50g%2FqqY98j0flgk%2BtXCHHmTjFcbNULHjIoAupILolvnHOJpsdWuEboqeVjnDSf19NH3UJkMw1z1M6%2F8knzAAjq3O3Wq0m8xZ1uKEQP%2FnHmo04vE9IcUkDNgiV0OXOO3ekM08fjC5qs7BBjqkAdsHDie5N%2Fb5FRLNvC19g7CGvXqgNq2bV5CJglrhe%2FuucBVBqreEwc8Sn259WUN21gos%2F%2Bhxi%2BVRvMs2RnQzVjO%2BXjvTvTNAh9LLdFGyKP9lxfRBB5L1bAgz63uq83wpU24SnaQbidlBsWi5SZ0tJu1U07Ho6hzahGP19n9a4OJzQgvRQgx3z1LlEgN88UmjWFngPail7yyaNvtegJtiVAp%2ByoJm&X-Amz-Signature=e76821c742fe7d7f60fbcc92ef482ad94d309cd38fd4a2442c53ef69882d247c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672IFHJ3W%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T004328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8FlrV%2BGoOltumsV8GQVGgrKwA5MkFCIAKuYLyjUpj3AIhAPSvtZNElbcx03quF1VRydLrgMNGDune%2FzxZMkzHE4WpKv8DCDcQABoMNjM3NDIzMTgzODA1Igyu%2FKqVvBiK7vsUIqMq3AP%2FUU5Jv7wyLQ4WWNnKYm0EtRuVGhv%2FmMaXqQzDNZUpqt56osPfe22oxDFjj3N0pLgpHm4lgCr7lZkdInoECwHPtBf56eER8HKcNaDFHdJEpIcItI11r1cfwzH%2Bo7i8TpgROMKX2Y3%2F9LFyFY5yXlrCeMutDVJKzIlw%2FkLY55LS6OskcajZGGfRtd29R4X23D9zWd3l4U4EdYQVYvOgWhwPc7twxWw71DZrddenrKT4PGA2YIwlMLwNYhL0Xz8T7iEae7lByj%2FnkO4NDT%2Fs%2FGNmBKGyt5wdudPVmSm%2FSPRXn4tu7Xj79F1MnmyFBqIG2kWTcgwX0HQS1PQX5Rq3L4OLIh%2Bk1oXqxaU%2BgmJB7ZL89kWuAR3W%2BpVpf82PrshN5Qe1whEQhN8AhOf44lyos1CUTQqJSUpd3FenDljqBeV19E9Fm3R2t8kJI6U%2F28OlAeR5tqlCb9FaJkuSabVc6e81bcWGFpQAM%2Fwjg44OrRvMLcJD%2FqGktb7v50g%2FqqY98j0flgk%2BtXCHHmTjFcbNULHjIoAupILolvnHOJpsdWuEboqeVjnDSf19NH3UJkMw1z1M6%2F8knzAAjq3O3Wq0m8xZ1uKEQP%2FnHmo04vE9IcUkDNgiV0OXOO3ekM08fjC5qs7BBjqkAdsHDie5N%2Fb5FRLNvC19g7CGvXqgNq2bV5CJglrhe%2FuucBVBqreEwc8Sn259WUN21gos%2F%2Bhxi%2BVRvMs2RnQzVjO%2BXjvTvTNAh9LLdFGyKP9lxfRBB5L1bAgz63uq83wpU24SnaQbidlBsWi5SZ0tJu1U07Ho6hzahGP19n9a4OJzQgvRQgx3z1LlEgN88UmjWFngPail7yyaNvtegJtiVAp%2ByoJm&X-Amz-Signature=bc7990f13bed8356ef1f4ea42debac8fbac14832781c1c2c856bd1960dde53d7&X-Amz-SignedHeaders=host&x-id=GetObject)
