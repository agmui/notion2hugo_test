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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNKHAIB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAkKuc%2FNMgMfeeg%2Fx6%2FmlwWWz5NtWqD2cw0usSj%2BCP5AAiEAwxlF3rT%2F2RQdeT7tkO6gZVNu7N6leIggxCdIFk0rsocqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyzrgIyi1%2Fk%2B4HErircA0dcqVRrKwd6xyGlsPS91Jzw3tXEKvItfsam%2FJ6dxAMskBONk9VZIKZHT1zniHzZvdbcKeKXcw0sKwqjAOuacknSLtjYU9So3iLPKrKyOgvjsOB9JtRcDu1bbtJKV4iYItS9MdlK2cOZhsP3j64Vz4PnTkCZgPEgHOyzArVMmEyyPVjD%2BaMx1umgPYOmPQXldOP0lMkQ7TDfZEc3bWkc0K6Q7sn1yzXznwNQk5VX%2FPCv2QNBz%2FoiC0y4i0STK5jYt7tJhyY4k4TB3ioKDWF7KlHdeEpAIyl6TpQk%2BzW9kzRCxWAyucqUkUFfgo19jX4J4ftIvtOkIRQoCI9wdrHuaX5iwxKipq6gFVjTnMy2nMm%2FCn%2BN43%2BaOYayNUsUsvod24tlWKkkbPnNhGP%2BQ1v6U70bUVW%2FeGKLfqqxh97IHlF83P0G%2FCzS0WJ6ppcKe4Ln3H3v8qIS%2BbzT6ibZdY2EXof3nyNs%2FFiWiLfXYQ4F5lEh60OJZpf9ZA4AdTUVi4IFte2%2B%2Bbx4utH4eKk002qt0%2FTVzk9xV1bvQvTxesuvfeiLI5IGRopUGQwNZnZPv%2FY9Q3XfTRJ6mWHbHRc8IFiScuHFnnFBedkkysbwhlN18IbebM3%2BrFgY3kK0JgxkMLqUzMAGOqUBbSlUvBGdV8xBt88ylf4VuCfDdUUEWoo1YVrCaRFlbEoAAYqoYCMdUw%2F5OhWpSv0uYzvH7x2Zyv4NoxLo8t8HouUTWC5WxgCPzikK5tIf4MkREyPxfzdZagjvJEJS8d2iEK2%2BO3nE%2F8EbK8EoIWtEMJ%2Fr8hEXw6IAzjycAbuZbFlPus%2Bo6bteSQwadP2iPsI0%2B7fay%2FcOsm%2BCzMU8sZCVZuSi3L9o&X-Amz-Signature=f4a56597a4fea30fdee496fa71bdf57d2b5d6a828724a9556e0aa211d5a40ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNKHAIB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAkKuc%2FNMgMfeeg%2Fx6%2FmlwWWz5NtWqD2cw0usSj%2BCP5AAiEAwxlF3rT%2F2RQdeT7tkO6gZVNu7N6leIggxCdIFk0rsocqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyzrgIyi1%2Fk%2B4HErircA0dcqVRrKwd6xyGlsPS91Jzw3tXEKvItfsam%2FJ6dxAMskBONk9VZIKZHT1zniHzZvdbcKeKXcw0sKwqjAOuacknSLtjYU9So3iLPKrKyOgvjsOB9JtRcDu1bbtJKV4iYItS9MdlK2cOZhsP3j64Vz4PnTkCZgPEgHOyzArVMmEyyPVjD%2BaMx1umgPYOmPQXldOP0lMkQ7TDfZEc3bWkc0K6Q7sn1yzXznwNQk5VX%2FPCv2QNBz%2FoiC0y4i0STK5jYt7tJhyY4k4TB3ioKDWF7KlHdeEpAIyl6TpQk%2BzW9kzRCxWAyucqUkUFfgo19jX4J4ftIvtOkIRQoCI9wdrHuaX5iwxKipq6gFVjTnMy2nMm%2FCn%2BN43%2BaOYayNUsUsvod24tlWKkkbPnNhGP%2BQ1v6U70bUVW%2FeGKLfqqxh97IHlF83P0G%2FCzS0WJ6ppcKe4Ln3H3v8qIS%2BbzT6ibZdY2EXof3nyNs%2FFiWiLfXYQ4F5lEh60OJZpf9ZA4AdTUVi4IFte2%2B%2Bbx4utH4eKk002qt0%2FTVzk9xV1bvQvTxesuvfeiLI5IGRopUGQwNZnZPv%2FY9Q3XfTRJ6mWHbHRc8IFiScuHFnnFBedkkysbwhlN18IbebM3%2BrFgY3kK0JgxkMLqUzMAGOqUBbSlUvBGdV8xBt88ylf4VuCfDdUUEWoo1YVrCaRFlbEoAAYqoYCMdUw%2F5OhWpSv0uYzvH7x2Zyv4NoxLo8t8HouUTWC5WxgCPzikK5tIf4MkREyPxfzdZagjvJEJS8d2iEK2%2BO3nE%2F8EbK8EoIWtEMJ%2Fr8hEXw6IAzjycAbuZbFlPus%2Bo6bteSQwadP2iPsI0%2B7fay%2FcOsm%2BCzMU8sZCVZuSi3L9o&X-Amz-Signature=ef07dcc8dd5e80122b454ae0116ee60796d3da9eee2a18fafc2b4237dd296c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNKHAIB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAkKuc%2FNMgMfeeg%2Fx6%2FmlwWWz5NtWqD2cw0usSj%2BCP5AAiEAwxlF3rT%2F2RQdeT7tkO6gZVNu7N6leIggxCdIFk0rsocqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyzrgIyi1%2Fk%2B4HErircA0dcqVRrKwd6xyGlsPS91Jzw3tXEKvItfsam%2FJ6dxAMskBONk9VZIKZHT1zniHzZvdbcKeKXcw0sKwqjAOuacknSLtjYU9So3iLPKrKyOgvjsOB9JtRcDu1bbtJKV4iYItS9MdlK2cOZhsP3j64Vz4PnTkCZgPEgHOyzArVMmEyyPVjD%2BaMx1umgPYOmPQXldOP0lMkQ7TDfZEc3bWkc0K6Q7sn1yzXznwNQk5VX%2FPCv2QNBz%2FoiC0y4i0STK5jYt7tJhyY4k4TB3ioKDWF7KlHdeEpAIyl6TpQk%2BzW9kzRCxWAyucqUkUFfgo19jX4J4ftIvtOkIRQoCI9wdrHuaX5iwxKipq6gFVjTnMy2nMm%2FCn%2BN43%2BaOYayNUsUsvod24tlWKkkbPnNhGP%2BQ1v6U70bUVW%2FeGKLfqqxh97IHlF83P0G%2FCzS0WJ6ppcKe4Ln3H3v8qIS%2BbzT6ibZdY2EXof3nyNs%2FFiWiLfXYQ4F5lEh60OJZpf9ZA4AdTUVi4IFte2%2B%2Bbx4utH4eKk002qt0%2FTVzk9xV1bvQvTxesuvfeiLI5IGRopUGQwNZnZPv%2FY9Q3XfTRJ6mWHbHRc8IFiScuHFnnFBedkkysbwhlN18IbebM3%2BrFgY3kK0JgxkMLqUzMAGOqUBbSlUvBGdV8xBt88ylf4VuCfDdUUEWoo1YVrCaRFlbEoAAYqoYCMdUw%2F5OhWpSv0uYzvH7x2Zyv4NoxLo8t8HouUTWC5WxgCPzikK5tIf4MkREyPxfzdZagjvJEJS8d2iEK2%2BO3nE%2F8EbK8EoIWtEMJ%2Fr8hEXw6IAzjycAbuZbFlPus%2Bo6bteSQwadP2iPsI0%2B7fay%2FcOsm%2BCzMU8sZCVZuSi3L9o&X-Amz-Signature=e5784fccc2018788a3364d8f20727857b2e059606be863fd3a171775d84f11c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNKHAIB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAkKuc%2FNMgMfeeg%2Fx6%2FmlwWWz5NtWqD2cw0usSj%2BCP5AAiEAwxlF3rT%2F2RQdeT7tkO6gZVNu7N6leIggxCdIFk0rsocqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyzrgIyi1%2Fk%2B4HErircA0dcqVRrKwd6xyGlsPS91Jzw3tXEKvItfsam%2FJ6dxAMskBONk9VZIKZHT1zniHzZvdbcKeKXcw0sKwqjAOuacknSLtjYU9So3iLPKrKyOgvjsOB9JtRcDu1bbtJKV4iYItS9MdlK2cOZhsP3j64Vz4PnTkCZgPEgHOyzArVMmEyyPVjD%2BaMx1umgPYOmPQXldOP0lMkQ7TDfZEc3bWkc0K6Q7sn1yzXznwNQk5VX%2FPCv2QNBz%2FoiC0y4i0STK5jYt7tJhyY4k4TB3ioKDWF7KlHdeEpAIyl6TpQk%2BzW9kzRCxWAyucqUkUFfgo19jX4J4ftIvtOkIRQoCI9wdrHuaX5iwxKipq6gFVjTnMy2nMm%2FCn%2BN43%2BaOYayNUsUsvod24tlWKkkbPnNhGP%2BQ1v6U70bUVW%2FeGKLfqqxh97IHlF83P0G%2FCzS0WJ6ppcKe4Ln3H3v8qIS%2BbzT6ibZdY2EXof3nyNs%2FFiWiLfXYQ4F5lEh60OJZpf9ZA4AdTUVi4IFte2%2B%2Bbx4utH4eKk002qt0%2FTVzk9xV1bvQvTxesuvfeiLI5IGRopUGQwNZnZPv%2FY9Q3XfTRJ6mWHbHRc8IFiScuHFnnFBedkkysbwhlN18IbebM3%2BrFgY3kK0JgxkMLqUzMAGOqUBbSlUvBGdV8xBt88ylf4VuCfDdUUEWoo1YVrCaRFlbEoAAYqoYCMdUw%2F5OhWpSv0uYzvH7x2Zyv4NoxLo8t8HouUTWC5WxgCPzikK5tIf4MkREyPxfzdZagjvJEJS8d2iEK2%2BO3nE%2F8EbK8EoIWtEMJ%2Fr8hEXw6IAzjycAbuZbFlPus%2Bo6bteSQwadP2iPsI0%2B7fay%2FcOsm%2BCzMU8sZCVZuSi3L9o&X-Amz-Signature=c85fc42d5e64551a96b55f21cff1fef9fb45978c10c94b823163c38fd6655029&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNKHAIB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAkKuc%2FNMgMfeeg%2Fx6%2FmlwWWz5NtWqD2cw0usSj%2BCP5AAiEAwxlF3rT%2F2RQdeT7tkO6gZVNu7N6leIggxCdIFk0rsocqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyzrgIyi1%2Fk%2B4HErircA0dcqVRrKwd6xyGlsPS91Jzw3tXEKvItfsam%2FJ6dxAMskBONk9VZIKZHT1zniHzZvdbcKeKXcw0sKwqjAOuacknSLtjYU9So3iLPKrKyOgvjsOB9JtRcDu1bbtJKV4iYItS9MdlK2cOZhsP3j64Vz4PnTkCZgPEgHOyzArVMmEyyPVjD%2BaMx1umgPYOmPQXldOP0lMkQ7TDfZEc3bWkc0K6Q7sn1yzXznwNQk5VX%2FPCv2QNBz%2FoiC0y4i0STK5jYt7tJhyY4k4TB3ioKDWF7KlHdeEpAIyl6TpQk%2BzW9kzRCxWAyucqUkUFfgo19jX4J4ftIvtOkIRQoCI9wdrHuaX5iwxKipq6gFVjTnMy2nMm%2FCn%2BN43%2BaOYayNUsUsvod24tlWKkkbPnNhGP%2BQ1v6U70bUVW%2FeGKLfqqxh97IHlF83P0G%2FCzS0WJ6ppcKe4Ln3H3v8qIS%2BbzT6ibZdY2EXof3nyNs%2FFiWiLfXYQ4F5lEh60OJZpf9ZA4AdTUVi4IFte2%2B%2Bbx4utH4eKk002qt0%2FTVzk9xV1bvQvTxesuvfeiLI5IGRopUGQwNZnZPv%2FY9Q3XfTRJ6mWHbHRc8IFiScuHFnnFBedkkysbwhlN18IbebM3%2BrFgY3kK0JgxkMLqUzMAGOqUBbSlUvBGdV8xBt88ylf4VuCfDdUUEWoo1YVrCaRFlbEoAAYqoYCMdUw%2F5OhWpSv0uYzvH7x2Zyv4NoxLo8t8HouUTWC5WxgCPzikK5tIf4MkREyPxfzdZagjvJEJS8d2iEK2%2BO3nE%2F8EbK8EoIWtEMJ%2Fr8hEXw6IAzjycAbuZbFlPus%2Bo6bteSQwadP2iPsI0%2B7fay%2FcOsm%2BCzMU8sZCVZuSi3L9o&X-Amz-Signature=f0726bb6854a0dd17b3b894f81373028b3ef889479ff087c62a832fc04d7bf0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNKHAIB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAkKuc%2FNMgMfeeg%2Fx6%2FmlwWWz5NtWqD2cw0usSj%2BCP5AAiEAwxlF3rT%2F2RQdeT7tkO6gZVNu7N6leIggxCdIFk0rsocqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyzrgIyi1%2Fk%2B4HErircA0dcqVRrKwd6xyGlsPS91Jzw3tXEKvItfsam%2FJ6dxAMskBONk9VZIKZHT1zniHzZvdbcKeKXcw0sKwqjAOuacknSLtjYU9So3iLPKrKyOgvjsOB9JtRcDu1bbtJKV4iYItS9MdlK2cOZhsP3j64Vz4PnTkCZgPEgHOyzArVMmEyyPVjD%2BaMx1umgPYOmPQXldOP0lMkQ7TDfZEc3bWkc0K6Q7sn1yzXznwNQk5VX%2FPCv2QNBz%2FoiC0y4i0STK5jYt7tJhyY4k4TB3ioKDWF7KlHdeEpAIyl6TpQk%2BzW9kzRCxWAyucqUkUFfgo19jX4J4ftIvtOkIRQoCI9wdrHuaX5iwxKipq6gFVjTnMy2nMm%2FCn%2BN43%2BaOYayNUsUsvod24tlWKkkbPnNhGP%2BQ1v6U70bUVW%2FeGKLfqqxh97IHlF83P0G%2FCzS0WJ6ppcKe4Ln3H3v8qIS%2BbzT6ibZdY2EXof3nyNs%2FFiWiLfXYQ4F5lEh60OJZpf9ZA4AdTUVi4IFte2%2B%2Bbx4utH4eKk002qt0%2FTVzk9xV1bvQvTxesuvfeiLI5IGRopUGQwNZnZPv%2FY9Q3XfTRJ6mWHbHRc8IFiScuHFnnFBedkkysbwhlN18IbebM3%2BrFgY3kK0JgxkMLqUzMAGOqUBbSlUvBGdV8xBt88ylf4VuCfDdUUEWoo1YVrCaRFlbEoAAYqoYCMdUw%2F5OhWpSv0uYzvH7x2Zyv4NoxLo8t8HouUTWC5WxgCPzikK5tIf4MkREyPxfzdZagjvJEJS8d2iEK2%2BO3nE%2F8EbK8EoIWtEMJ%2Fr8hEXw6IAzjycAbuZbFlPus%2Bo6bteSQwadP2iPsI0%2B7fay%2FcOsm%2BCzMU8sZCVZuSi3L9o&X-Amz-Signature=ac6010a9d7265b2392fd22d36265d89f9ac098cb9dae75bfab0e3209fcb0e1cb&X-Amz-SignedHeaders=host&x-id=GetObject)
