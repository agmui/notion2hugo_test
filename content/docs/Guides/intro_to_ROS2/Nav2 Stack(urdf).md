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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TZOREL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbjTd7L7nP65C1Bu4ORhGXgJ7uQaCKAuwLaGl8T6OwgIgdDzuFvl6BGuBSAkFL8u%2FELjzzvVAEE0qUIxaRueXqfoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMycw7dFTXxfMIPviCrcA3bOKFgg2kCzAxT%2Bj1ZIhzyWlQxfEWoGLbj4K434I05JtLSbFxDaXbqRtp4GlTrMcIp9dAsfUNn4tuOAyJ7fdYH9pPM2ViTet8mEsRlaQLhDgxYQnIb0ZRn9zsfSW5%2BLiOcOFb9KuroNYF45SyFYoJ8sDqJi%2FKhVfgaleH9uB4FEuslCM%2Fm952ix3vFMIOmDs7nHwQkE%2BHe5d3WPTP%2BVrLR6Gsq7iHKh1YqGFxwTMw8gh1H8EC3Axzu4MZlGqhhwqRodtG3gcWAnSxjkROI4VtZ1akyjz09pEE0R3MiEhZDMfCPfiTa4LwehvunD5Rchh2SiC5T3nYmj3%2F58PNbY3ea5p3JwdkGPMc2n3jPTvEJv1ceWWB%2FvkEUXL6ZNzqdXu05ZPNXjr6F%2By6l%2Bv3FgRYDn87fNDWuEUCEEiEeRF5ywq43D8woE7PgcQrrm6wz%2BwESjnn5qLWGBxCDVnm7Nq5q8UhvB%2FUsg67yAepG9%2FCql8JeJZL9srjhEIgCg8mHL9B2Td%2FgyR0lO%2B3NJ53348e9iOf9ny7WyKNnlSqBY9hx%2FCSylXp7dE1z6cIB8iLQp8kZTnnmN%2Bt3znJyx3RQeHkQfAcBZMuRhhvoAX0o4SBL9nXr14I1PHX8JfPX3MNnUvcMGOqUBG53VWwreizofkLseMFz02FuLaVZkToN6i0PDEliiQYXVp%2BQlWwEhrzmj1Mf950OuDuPKg%2F6%2FUCfY%2Fr9ZZAznUkd1yPDtyhC2UGSHIFlS11W4WaVuo%2FfhoI%2BiIf8UjzFcO41M9iwUORt5XR%2FQwVKBF1XPIBG8GroDKdzwCM7OJtUxbSXc8ccdLJdOSmdOYl5%2Fpiv%2Bsmg0fe9F9mpdGxucfC1kyJZi&X-Amz-Signature=18e220209447f223524379cdbdbba98cd163e7e09c2d2c52f87151489c617686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TZOREL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbjTd7L7nP65C1Bu4ORhGXgJ7uQaCKAuwLaGl8T6OwgIgdDzuFvl6BGuBSAkFL8u%2FELjzzvVAEE0qUIxaRueXqfoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMycw7dFTXxfMIPviCrcA3bOKFgg2kCzAxT%2Bj1ZIhzyWlQxfEWoGLbj4K434I05JtLSbFxDaXbqRtp4GlTrMcIp9dAsfUNn4tuOAyJ7fdYH9pPM2ViTet8mEsRlaQLhDgxYQnIb0ZRn9zsfSW5%2BLiOcOFb9KuroNYF45SyFYoJ8sDqJi%2FKhVfgaleH9uB4FEuslCM%2Fm952ix3vFMIOmDs7nHwQkE%2BHe5d3WPTP%2BVrLR6Gsq7iHKh1YqGFxwTMw8gh1H8EC3Axzu4MZlGqhhwqRodtG3gcWAnSxjkROI4VtZ1akyjz09pEE0R3MiEhZDMfCPfiTa4LwehvunD5Rchh2SiC5T3nYmj3%2F58PNbY3ea5p3JwdkGPMc2n3jPTvEJv1ceWWB%2FvkEUXL6ZNzqdXu05ZPNXjr6F%2By6l%2Bv3FgRYDn87fNDWuEUCEEiEeRF5ywq43D8woE7PgcQrrm6wz%2BwESjnn5qLWGBxCDVnm7Nq5q8UhvB%2FUsg67yAepG9%2FCql8JeJZL9srjhEIgCg8mHL9B2Td%2FgyR0lO%2B3NJ53348e9iOf9ny7WyKNnlSqBY9hx%2FCSylXp7dE1z6cIB8iLQp8kZTnnmN%2Bt3znJyx3RQeHkQfAcBZMuRhhvoAX0o4SBL9nXr14I1PHX8JfPX3MNnUvcMGOqUBG53VWwreizofkLseMFz02FuLaVZkToN6i0PDEliiQYXVp%2BQlWwEhrzmj1Mf950OuDuPKg%2F6%2FUCfY%2Fr9ZZAznUkd1yPDtyhC2UGSHIFlS11W4WaVuo%2FfhoI%2BiIf8UjzFcO41M9iwUORt5XR%2FQwVKBF1XPIBG8GroDKdzwCM7OJtUxbSXc8ccdLJdOSmdOYl5%2Fpiv%2Bsmg0fe9F9mpdGxucfC1kyJZi&X-Amz-Signature=0959b597ccdd13ed46bf106488222bca8c52d7982a1d1c469cbfd70e60cd3f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TZOREL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbjTd7L7nP65C1Bu4ORhGXgJ7uQaCKAuwLaGl8T6OwgIgdDzuFvl6BGuBSAkFL8u%2FELjzzvVAEE0qUIxaRueXqfoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMycw7dFTXxfMIPviCrcA3bOKFgg2kCzAxT%2Bj1ZIhzyWlQxfEWoGLbj4K434I05JtLSbFxDaXbqRtp4GlTrMcIp9dAsfUNn4tuOAyJ7fdYH9pPM2ViTet8mEsRlaQLhDgxYQnIb0ZRn9zsfSW5%2BLiOcOFb9KuroNYF45SyFYoJ8sDqJi%2FKhVfgaleH9uB4FEuslCM%2Fm952ix3vFMIOmDs7nHwQkE%2BHe5d3WPTP%2BVrLR6Gsq7iHKh1YqGFxwTMw8gh1H8EC3Axzu4MZlGqhhwqRodtG3gcWAnSxjkROI4VtZ1akyjz09pEE0R3MiEhZDMfCPfiTa4LwehvunD5Rchh2SiC5T3nYmj3%2F58PNbY3ea5p3JwdkGPMc2n3jPTvEJv1ceWWB%2FvkEUXL6ZNzqdXu05ZPNXjr6F%2By6l%2Bv3FgRYDn87fNDWuEUCEEiEeRF5ywq43D8woE7PgcQrrm6wz%2BwESjnn5qLWGBxCDVnm7Nq5q8UhvB%2FUsg67yAepG9%2FCql8JeJZL9srjhEIgCg8mHL9B2Td%2FgyR0lO%2B3NJ53348e9iOf9ny7WyKNnlSqBY9hx%2FCSylXp7dE1z6cIB8iLQp8kZTnnmN%2Bt3znJyx3RQeHkQfAcBZMuRhhvoAX0o4SBL9nXr14I1PHX8JfPX3MNnUvcMGOqUBG53VWwreizofkLseMFz02FuLaVZkToN6i0PDEliiQYXVp%2BQlWwEhrzmj1Mf950OuDuPKg%2F6%2FUCfY%2Fr9ZZAznUkd1yPDtyhC2UGSHIFlS11W4WaVuo%2FfhoI%2BiIf8UjzFcO41M9iwUORt5XR%2FQwVKBF1XPIBG8GroDKdzwCM7OJtUxbSXc8ccdLJdOSmdOYl5%2Fpiv%2Bsmg0fe9F9mpdGxucfC1kyJZi&X-Amz-Signature=7e5af7f71cf04cd24e9c76d1441d120b8c86fe86c8366fe805b20e4f55fa7854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TZOREL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbjTd7L7nP65C1Bu4ORhGXgJ7uQaCKAuwLaGl8T6OwgIgdDzuFvl6BGuBSAkFL8u%2FELjzzvVAEE0qUIxaRueXqfoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMycw7dFTXxfMIPviCrcA3bOKFgg2kCzAxT%2Bj1ZIhzyWlQxfEWoGLbj4K434I05JtLSbFxDaXbqRtp4GlTrMcIp9dAsfUNn4tuOAyJ7fdYH9pPM2ViTet8mEsRlaQLhDgxYQnIb0ZRn9zsfSW5%2BLiOcOFb9KuroNYF45SyFYoJ8sDqJi%2FKhVfgaleH9uB4FEuslCM%2Fm952ix3vFMIOmDs7nHwQkE%2BHe5d3WPTP%2BVrLR6Gsq7iHKh1YqGFxwTMw8gh1H8EC3Axzu4MZlGqhhwqRodtG3gcWAnSxjkROI4VtZ1akyjz09pEE0R3MiEhZDMfCPfiTa4LwehvunD5Rchh2SiC5T3nYmj3%2F58PNbY3ea5p3JwdkGPMc2n3jPTvEJv1ceWWB%2FvkEUXL6ZNzqdXu05ZPNXjr6F%2By6l%2Bv3FgRYDn87fNDWuEUCEEiEeRF5ywq43D8woE7PgcQrrm6wz%2BwESjnn5qLWGBxCDVnm7Nq5q8UhvB%2FUsg67yAepG9%2FCql8JeJZL9srjhEIgCg8mHL9B2Td%2FgyR0lO%2B3NJ53348e9iOf9ny7WyKNnlSqBY9hx%2FCSylXp7dE1z6cIB8iLQp8kZTnnmN%2Bt3znJyx3RQeHkQfAcBZMuRhhvoAX0o4SBL9nXr14I1PHX8JfPX3MNnUvcMGOqUBG53VWwreizofkLseMFz02FuLaVZkToN6i0PDEliiQYXVp%2BQlWwEhrzmj1Mf950OuDuPKg%2F6%2FUCfY%2Fr9ZZAznUkd1yPDtyhC2UGSHIFlS11W4WaVuo%2FfhoI%2BiIf8UjzFcO41M9iwUORt5XR%2FQwVKBF1XPIBG8GroDKdzwCM7OJtUxbSXc8ccdLJdOSmdOYl5%2Fpiv%2Bsmg0fe9F9mpdGxucfC1kyJZi&X-Amz-Signature=c56724a454553fc4d9b0c3fa0dfeef8632f6b7cd71f8c9115acfbc0868b46688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TZOREL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbjTd7L7nP65C1Bu4ORhGXgJ7uQaCKAuwLaGl8T6OwgIgdDzuFvl6BGuBSAkFL8u%2FELjzzvVAEE0qUIxaRueXqfoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMycw7dFTXxfMIPviCrcA3bOKFgg2kCzAxT%2Bj1ZIhzyWlQxfEWoGLbj4K434I05JtLSbFxDaXbqRtp4GlTrMcIp9dAsfUNn4tuOAyJ7fdYH9pPM2ViTet8mEsRlaQLhDgxYQnIb0ZRn9zsfSW5%2BLiOcOFb9KuroNYF45SyFYoJ8sDqJi%2FKhVfgaleH9uB4FEuslCM%2Fm952ix3vFMIOmDs7nHwQkE%2BHe5d3WPTP%2BVrLR6Gsq7iHKh1YqGFxwTMw8gh1H8EC3Axzu4MZlGqhhwqRodtG3gcWAnSxjkROI4VtZ1akyjz09pEE0R3MiEhZDMfCPfiTa4LwehvunD5Rchh2SiC5T3nYmj3%2F58PNbY3ea5p3JwdkGPMc2n3jPTvEJv1ceWWB%2FvkEUXL6ZNzqdXu05ZPNXjr6F%2By6l%2Bv3FgRYDn87fNDWuEUCEEiEeRF5ywq43D8woE7PgcQrrm6wz%2BwESjnn5qLWGBxCDVnm7Nq5q8UhvB%2FUsg67yAepG9%2FCql8JeJZL9srjhEIgCg8mHL9B2Td%2FgyR0lO%2B3NJ53348e9iOf9ny7WyKNnlSqBY9hx%2FCSylXp7dE1z6cIB8iLQp8kZTnnmN%2Bt3znJyx3RQeHkQfAcBZMuRhhvoAX0o4SBL9nXr14I1PHX8JfPX3MNnUvcMGOqUBG53VWwreizofkLseMFz02FuLaVZkToN6i0PDEliiQYXVp%2BQlWwEhrzmj1Mf950OuDuPKg%2F6%2FUCfY%2Fr9ZZAznUkd1yPDtyhC2UGSHIFlS11W4WaVuo%2FfhoI%2BiIf8UjzFcO41M9iwUORt5XR%2FQwVKBF1XPIBG8GroDKdzwCM7OJtUxbSXc8ccdLJdOSmdOYl5%2Fpiv%2Bsmg0fe9F9mpdGxucfC1kyJZi&X-Amz-Signature=b32e93f7a79b6a1e33ab9ad4a4731cd6fb5e1048b6e67c0d2d9020a85affcc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TZOREL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDbjTd7L7nP65C1Bu4ORhGXgJ7uQaCKAuwLaGl8T6OwgIgdDzuFvl6BGuBSAkFL8u%2FELjzzvVAEE0qUIxaRueXqfoqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMycw7dFTXxfMIPviCrcA3bOKFgg2kCzAxT%2Bj1ZIhzyWlQxfEWoGLbj4K434I05JtLSbFxDaXbqRtp4GlTrMcIp9dAsfUNn4tuOAyJ7fdYH9pPM2ViTet8mEsRlaQLhDgxYQnIb0ZRn9zsfSW5%2BLiOcOFb9KuroNYF45SyFYoJ8sDqJi%2FKhVfgaleH9uB4FEuslCM%2Fm952ix3vFMIOmDs7nHwQkE%2BHe5d3WPTP%2BVrLR6Gsq7iHKh1YqGFxwTMw8gh1H8EC3Axzu4MZlGqhhwqRodtG3gcWAnSxjkROI4VtZ1akyjz09pEE0R3MiEhZDMfCPfiTa4LwehvunD5Rchh2SiC5T3nYmj3%2F58PNbY3ea5p3JwdkGPMc2n3jPTvEJv1ceWWB%2FvkEUXL6ZNzqdXu05ZPNXjr6F%2By6l%2Bv3FgRYDn87fNDWuEUCEEiEeRF5ywq43D8woE7PgcQrrm6wz%2BwESjnn5qLWGBxCDVnm7Nq5q8UhvB%2FUsg67yAepG9%2FCql8JeJZL9srjhEIgCg8mHL9B2Td%2FgyR0lO%2B3NJ53348e9iOf9ny7WyKNnlSqBY9hx%2FCSylXp7dE1z6cIB8iLQp8kZTnnmN%2Bt3znJyx3RQeHkQfAcBZMuRhhvoAX0o4SBL9nXr14I1PHX8JfPX3MNnUvcMGOqUBG53VWwreizofkLseMFz02FuLaVZkToN6i0PDEliiQYXVp%2BQlWwEhrzmj1Mf950OuDuPKg%2F6%2FUCfY%2Fr9ZZAznUkd1yPDtyhC2UGSHIFlS11W4WaVuo%2FfhoI%2BiIf8UjzFcO41M9iwUORt5XR%2FQwVKBF1XPIBG8GroDKdzwCM7OJtUxbSXc8ccdLJdOSmdOYl5%2Fpiv%2Bsmg0fe9F9mpdGxucfC1kyJZi&X-Amz-Signature=8b26fc132db2fc88e8f3a79e6c76fd02d90eaeabe59d091901d71d1b99ad24be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
