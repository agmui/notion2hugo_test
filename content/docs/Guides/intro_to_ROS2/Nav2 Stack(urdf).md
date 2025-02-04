---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZZR3XY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICa53ORHDzWpPE%2FsRskNfhRFe%2BWCIs1Ho%2B7ULl2fZmW1AiEAynK%2BbyqEWdQnELsFqBVgM5l4uHkYp6LeNsGHU09SZmAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD3gApQ16AjgnyA2bCrcA96nZNWa78ux4iZoZe86xQNoUtb1NwmVseAybuE67vU1n1MucqaBTn0fTdH0cyOPyP0ajrA6Nr74nXwtxw084uxKOajZDtwjiBSLB6a%2BPnkRO6Xv%2BbgOsMPWfeK%2B14R36oaJIgLJudx0XOmjkplvOmkvsl1ec5%2BYnCKSeguIZIf%2FY%2B9IB2huy0r6drbN8kF%2FWAeeOFQqKryzW58dzz0GpoDA1CO0Kno1eZkzXXUSnYD5JuPXQuQ8JNkgUm9qDNHXz4MP0JftbltAob66WkWce3wzw35sjOnYFwgjU3rmSDIksBWi5mi%2BGd06BE8aTHSerxzC7YP3hDnNLjvfVg7BKcTXJWEj4HOYTu3ISzVO5c4bV%2FVzfVFd1vXW2hHzaVQLQ4%2BNts6BGYlonZgs8GG4mGpAEuPClso8%2BFOB4gKMnLmL%2BwUlQRjRUoUlmy82NibTc979rLNYpTSGZGQ4uIcqqP679jbMN9he3%2F4hTqoLv46BnXTgkDSkJ%2BVc5TlpoNeCXi7%2FWtt5WTIEEwrP2FLa5DExfbEO%2FEBTP3KOHFXBBmkoZkavDz3z4yuHbQfT2YJ5Tx%2FUSmSfZBhI3ZA6wyFpFWyfz3f849uCq5GIjshSGa0qIODbQTxtjwVwo2mxMPbniL0GOqUBmu5ObalYBhil7Kw4cFhK4RVbYEzEMB%2B4%2FwGmOgWyjZ2Jx2V6%2FW8Adeyb3OSiafroJ7tofto55rHRxBWsMRSUCYHh6qTJZOSd9ut77Vzx39QmFJ7UcJ9ERm9KCMqGVFultrZPBUy7OOYzK0SNmp0F7APV%2FQ3voGmv3CvfNkgApMCVndvtoDobj%2BHfO1myUFCiWIxK8qwh%2FvsmFoJ0t5AAJzYXj7vo&X-Amz-Signature=a5090de4821646b3a7489a9040ac4aca837f6a7b07b9cc8a92bbdf7e53b12a13&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZZR3XY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICa53ORHDzWpPE%2FsRskNfhRFe%2BWCIs1Ho%2B7ULl2fZmW1AiEAynK%2BbyqEWdQnELsFqBVgM5l4uHkYp6LeNsGHU09SZmAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD3gApQ16AjgnyA2bCrcA96nZNWa78ux4iZoZe86xQNoUtb1NwmVseAybuE67vU1n1MucqaBTn0fTdH0cyOPyP0ajrA6Nr74nXwtxw084uxKOajZDtwjiBSLB6a%2BPnkRO6Xv%2BbgOsMPWfeK%2B14R36oaJIgLJudx0XOmjkplvOmkvsl1ec5%2BYnCKSeguIZIf%2FY%2B9IB2huy0r6drbN8kF%2FWAeeOFQqKryzW58dzz0GpoDA1CO0Kno1eZkzXXUSnYD5JuPXQuQ8JNkgUm9qDNHXz4MP0JftbltAob66WkWce3wzw35sjOnYFwgjU3rmSDIksBWi5mi%2BGd06BE8aTHSerxzC7YP3hDnNLjvfVg7BKcTXJWEj4HOYTu3ISzVO5c4bV%2FVzfVFd1vXW2hHzaVQLQ4%2BNts6BGYlonZgs8GG4mGpAEuPClso8%2BFOB4gKMnLmL%2BwUlQRjRUoUlmy82NibTc979rLNYpTSGZGQ4uIcqqP679jbMN9he3%2F4hTqoLv46BnXTgkDSkJ%2BVc5TlpoNeCXi7%2FWtt5WTIEEwrP2FLa5DExfbEO%2FEBTP3KOHFXBBmkoZkavDz3z4yuHbQfT2YJ5Tx%2FUSmSfZBhI3ZA6wyFpFWyfz3f849uCq5GIjshSGa0qIODbQTxtjwVwo2mxMPbniL0GOqUBmu5ObalYBhil7Kw4cFhK4RVbYEzEMB%2B4%2FwGmOgWyjZ2Jx2V6%2FW8Adeyb3OSiafroJ7tofto55rHRxBWsMRSUCYHh6qTJZOSd9ut77Vzx39QmFJ7UcJ9ERm9KCMqGVFultrZPBUy7OOYzK0SNmp0F7APV%2FQ3voGmv3CvfNkgApMCVndvtoDobj%2BHfO1myUFCiWIxK8qwh%2FvsmFoJ0t5AAJzYXj7vo&X-Amz-Signature=076dd5ab947e18f43e3c76d6b73780ba75b0f0282b92ec4c8ca1268b63f07758&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZZR3XY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICa53ORHDzWpPE%2FsRskNfhRFe%2BWCIs1Ho%2B7ULl2fZmW1AiEAynK%2BbyqEWdQnELsFqBVgM5l4uHkYp6LeNsGHU09SZmAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD3gApQ16AjgnyA2bCrcA96nZNWa78ux4iZoZe86xQNoUtb1NwmVseAybuE67vU1n1MucqaBTn0fTdH0cyOPyP0ajrA6Nr74nXwtxw084uxKOajZDtwjiBSLB6a%2BPnkRO6Xv%2BbgOsMPWfeK%2B14R36oaJIgLJudx0XOmjkplvOmkvsl1ec5%2BYnCKSeguIZIf%2FY%2B9IB2huy0r6drbN8kF%2FWAeeOFQqKryzW58dzz0GpoDA1CO0Kno1eZkzXXUSnYD5JuPXQuQ8JNkgUm9qDNHXz4MP0JftbltAob66WkWce3wzw35sjOnYFwgjU3rmSDIksBWi5mi%2BGd06BE8aTHSerxzC7YP3hDnNLjvfVg7BKcTXJWEj4HOYTu3ISzVO5c4bV%2FVzfVFd1vXW2hHzaVQLQ4%2BNts6BGYlonZgs8GG4mGpAEuPClso8%2BFOB4gKMnLmL%2BwUlQRjRUoUlmy82NibTc979rLNYpTSGZGQ4uIcqqP679jbMN9he3%2F4hTqoLv46BnXTgkDSkJ%2BVc5TlpoNeCXi7%2FWtt5WTIEEwrP2FLa5DExfbEO%2FEBTP3KOHFXBBmkoZkavDz3z4yuHbQfT2YJ5Tx%2FUSmSfZBhI3ZA6wyFpFWyfz3f849uCq5GIjshSGa0qIODbQTxtjwVwo2mxMPbniL0GOqUBmu5ObalYBhil7Kw4cFhK4RVbYEzEMB%2B4%2FwGmOgWyjZ2Jx2V6%2FW8Adeyb3OSiafroJ7tofto55rHRxBWsMRSUCYHh6qTJZOSd9ut77Vzx39QmFJ7UcJ9ERm9KCMqGVFultrZPBUy7OOYzK0SNmp0F7APV%2FQ3voGmv3CvfNkgApMCVndvtoDobj%2BHfO1myUFCiWIxK8qwh%2FvsmFoJ0t5AAJzYXj7vo&X-Amz-Signature=25046e84bd0ad057af8157ef6dbc086ced1673bb9acfca97eb13756b022e2e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZZR3XY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICa53ORHDzWpPE%2FsRskNfhRFe%2BWCIs1Ho%2B7ULl2fZmW1AiEAynK%2BbyqEWdQnELsFqBVgM5l4uHkYp6LeNsGHU09SZmAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD3gApQ16AjgnyA2bCrcA96nZNWa78ux4iZoZe86xQNoUtb1NwmVseAybuE67vU1n1MucqaBTn0fTdH0cyOPyP0ajrA6Nr74nXwtxw084uxKOajZDtwjiBSLB6a%2BPnkRO6Xv%2BbgOsMPWfeK%2B14R36oaJIgLJudx0XOmjkplvOmkvsl1ec5%2BYnCKSeguIZIf%2FY%2B9IB2huy0r6drbN8kF%2FWAeeOFQqKryzW58dzz0GpoDA1CO0Kno1eZkzXXUSnYD5JuPXQuQ8JNkgUm9qDNHXz4MP0JftbltAob66WkWce3wzw35sjOnYFwgjU3rmSDIksBWi5mi%2BGd06BE8aTHSerxzC7YP3hDnNLjvfVg7BKcTXJWEj4HOYTu3ISzVO5c4bV%2FVzfVFd1vXW2hHzaVQLQ4%2BNts6BGYlonZgs8GG4mGpAEuPClso8%2BFOB4gKMnLmL%2BwUlQRjRUoUlmy82NibTc979rLNYpTSGZGQ4uIcqqP679jbMN9he3%2F4hTqoLv46BnXTgkDSkJ%2BVc5TlpoNeCXi7%2FWtt5WTIEEwrP2FLa5DExfbEO%2FEBTP3KOHFXBBmkoZkavDz3z4yuHbQfT2YJ5Tx%2FUSmSfZBhI3ZA6wyFpFWyfz3f849uCq5GIjshSGa0qIODbQTxtjwVwo2mxMPbniL0GOqUBmu5ObalYBhil7Kw4cFhK4RVbYEzEMB%2B4%2FwGmOgWyjZ2Jx2V6%2FW8Adeyb3OSiafroJ7tofto55rHRxBWsMRSUCYHh6qTJZOSd9ut77Vzx39QmFJ7UcJ9ERm9KCMqGVFultrZPBUy7OOYzK0SNmp0F7APV%2FQ3voGmv3CvfNkgApMCVndvtoDobj%2BHfO1myUFCiWIxK8qwh%2FvsmFoJ0t5AAJzYXj7vo&X-Amz-Signature=4f6b170e53b5e6e13504cd45f002467c345f71fedb7d6557f44b0085c336f937&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZZR3XY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICa53ORHDzWpPE%2FsRskNfhRFe%2BWCIs1Ho%2B7ULl2fZmW1AiEAynK%2BbyqEWdQnELsFqBVgM5l4uHkYp6LeNsGHU09SZmAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD3gApQ16AjgnyA2bCrcA96nZNWa78ux4iZoZe86xQNoUtb1NwmVseAybuE67vU1n1MucqaBTn0fTdH0cyOPyP0ajrA6Nr74nXwtxw084uxKOajZDtwjiBSLB6a%2BPnkRO6Xv%2BbgOsMPWfeK%2B14R36oaJIgLJudx0XOmjkplvOmkvsl1ec5%2BYnCKSeguIZIf%2FY%2B9IB2huy0r6drbN8kF%2FWAeeOFQqKryzW58dzz0GpoDA1CO0Kno1eZkzXXUSnYD5JuPXQuQ8JNkgUm9qDNHXz4MP0JftbltAob66WkWce3wzw35sjOnYFwgjU3rmSDIksBWi5mi%2BGd06BE8aTHSerxzC7YP3hDnNLjvfVg7BKcTXJWEj4HOYTu3ISzVO5c4bV%2FVzfVFd1vXW2hHzaVQLQ4%2BNts6BGYlonZgs8GG4mGpAEuPClso8%2BFOB4gKMnLmL%2BwUlQRjRUoUlmy82NibTc979rLNYpTSGZGQ4uIcqqP679jbMN9he3%2F4hTqoLv46BnXTgkDSkJ%2BVc5TlpoNeCXi7%2FWtt5WTIEEwrP2FLa5DExfbEO%2FEBTP3KOHFXBBmkoZkavDz3z4yuHbQfT2YJ5Tx%2FUSmSfZBhI3ZA6wyFpFWyfz3f849uCq5GIjshSGa0qIODbQTxtjwVwo2mxMPbniL0GOqUBmu5ObalYBhil7Kw4cFhK4RVbYEzEMB%2B4%2FwGmOgWyjZ2Jx2V6%2FW8Adeyb3OSiafroJ7tofto55rHRxBWsMRSUCYHh6qTJZOSd9ut77Vzx39QmFJ7UcJ9ERm9KCMqGVFultrZPBUy7OOYzK0SNmp0F7APV%2FQ3voGmv3CvfNkgApMCVndvtoDobj%2BHfO1myUFCiWIxK8qwh%2FvsmFoJ0t5AAJzYXj7vo&X-Amz-Signature=adec110b71bce015d93c626d2c98260f31170e7ea7a52095b8db2d34a46b3954&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MZZR3XY%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICa53ORHDzWpPE%2FsRskNfhRFe%2BWCIs1Ho%2B7ULl2fZmW1AiEAynK%2BbyqEWdQnELsFqBVgM5l4uHkYp6LeNsGHU09SZmAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD3gApQ16AjgnyA2bCrcA96nZNWa78ux4iZoZe86xQNoUtb1NwmVseAybuE67vU1n1MucqaBTn0fTdH0cyOPyP0ajrA6Nr74nXwtxw084uxKOajZDtwjiBSLB6a%2BPnkRO6Xv%2BbgOsMPWfeK%2B14R36oaJIgLJudx0XOmjkplvOmkvsl1ec5%2BYnCKSeguIZIf%2FY%2B9IB2huy0r6drbN8kF%2FWAeeOFQqKryzW58dzz0GpoDA1CO0Kno1eZkzXXUSnYD5JuPXQuQ8JNkgUm9qDNHXz4MP0JftbltAob66WkWce3wzw35sjOnYFwgjU3rmSDIksBWi5mi%2BGd06BE8aTHSerxzC7YP3hDnNLjvfVg7BKcTXJWEj4HOYTu3ISzVO5c4bV%2FVzfVFd1vXW2hHzaVQLQ4%2BNts6BGYlonZgs8GG4mGpAEuPClso8%2BFOB4gKMnLmL%2BwUlQRjRUoUlmy82NibTc979rLNYpTSGZGQ4uIcqqP679jbMN9he3%2F4hTqoLv46BnXTgkDSkJ%2BVc5TlpoNeCXi7%2FWtt5WTIEEwrP2FLa5DExfbEO%2FEBTP3KOHFXBBmkoZkavDz3z4yuHbQfT2YJ5Tx%2FUSmSfZBhI3ZA6wyFpFWyfz3f849uCq5GIjshSGa0qIODbQTxtjwVwo2mxMPbniL0GOqUBmu5ObalYBhil7Kw4cFhK4RVbYEzEMB%2B4%2FwGmOgWyjZ2Jx2V6%2FW8Adeyb3OSiafroJ7tofto55rHRxBWsMRSUCYHh6qTJZOSd9ut77Vzx39QmFJ7UcJ9ERm9KCMqGVFultrZPBUy7OOYzK0SNmp0F7APV%2FQ3voGmv3CvfNkgApMCVndvtoDobj%2BHfO1myUFCiWIxK8qwh%2FvsmFoJ0t5AAJzYXj7vo&X-Amz-Signature=576e88b3a38dd96c4839887b65460d12aafe319e2edee4a370e1467d892fa4e3&X-Amz-SignedHeaders=host&x-id=GetObject)
