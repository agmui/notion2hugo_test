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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4FZV5J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA6oKzRm2Ddlsjf8mVq673VW4qLKyJLPVxs9ilGDAzbtAiEA9%2FDIRS0A8O%2FIGjdfGyF9t8Xt4KL6haSyxhxVtEgVoHcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM3G3voM9tpSM4BHUircA%2ByQHVDzbHLpoAjtbYAOzfybg%2BKho9PkfRA1RcQjzwUVU5oftAvw2UVSmEYveO%2BkYLQAy0E2m%2FAN8OuWGNGv9XdsR60vhlxUPVBpbph3AlMVsr9QJWCBn0dHhwo%2FMCBZVXjK0wz0NtMENjD5mVAkpVgp6zwoaEj4gVs%2Fq2tU%2B5Gp4sm9tGSheL%2BfYRUcIgQ7yxyMp67PHvHWThOxNUCauHOjWI7xdhef4A1qgc4WInO7dxe9D%2F9JGQUp1eU9TSpVzH0ZwAY5rfDTzAyzXX7rsk9muw9vKWzwjO1blYErF3xLjPxQMbg2QN34ork6aJe9wnDlb33Z%2FufmvTURqpMHLTDShlswR1vP%2B7wlYRwWoOkKF0hD2uu1NRmQJRmtPN6MhYfVki0vqrKsGJgUEOFyVPjJT5F%2FlKZEKMQgahRyn%2BX5rwXVtpYBBlgcILszBnTH8muUDjA3OWjZAKzTtwBEdGUHMl78ooZwYCVUPt38QgncXgp4b%2FToV1HZCWRJfBH%2BI3GlP4v7wjROPzGJywZsSXQAbHobkXQOWeXYs9lNLqQ7NXadZ6TmNTRLdsrkZOy9NQDW9TE%2BYDfY%2BF8nBY0RgV1mTTJe2MNsP2XQO%2FuTFQ4RCw33DB91rRcaUGZjMKy7ksEGOqUBh5EJSa5Yia%2F3mrbJkFGJItLLNr6q46elCZ%2B1%2BbuwSOZblyhgbC%2BqMQpj7kWfKErpLBToqAP0dcIvKa6ADtBPPV7k5OGXBzPupghw6tIB2OZAjWBliDV2G001aFfYr%2F4C3pDgQXn4paeZVj5dUTzBSVpGZd4iSHnYEuVAmHL4ZVfABZRJS0Ww9zSn8cI3W%2Bx1XOlXnj4B08clseb8UGBjlOaywmS0&X-Amz-Signature=d435fb00885be01e5cd8331e87227f8358262c979ea2d45af916e3e6421cb41e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4FZV5J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA6oKzRm2Ddlsjf8mVq673VW4qLKyJLPVxs9ilGDAzbtAiEA9%2FDIRS0A8O%2FIGjdfGyF9t8Xt4KL6haSyxhxVtEgVoHcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM3G3voM9tpSM4BHUircA%2ByQHVDzbHLpoAjtbYAOzfybg%2BKho9PkfRA1RcQjzwUVU5oftAvw2UVSmEYveO%2BkYLQAy0E2m%2FAN8OuWGNGv9XdsR60vhlxUPVBpbph3AlMVsr9QJWCBn0dHhwo%2FMCBZVXjK0wz0NtMENjD5mVAkpVgp6zwoaEj4gVs%2Fq2tU%2B5Gp4sm9tGSheL%2BfYRUcIgQ7yxyMp67PHvHWThOxNUCauHOjWI7xdhef4A1qgc4WInO7dxe9D%2F9JGQUp1eU9TSpVzH0ZwAY5rfDTzAyzXX7rsk9muw9vKWzwjO1blYErF3xLjPxQMbg2QN34ork6aJe9wnDlb33Z%2FufmvTURqpMHLTDShlswR1vP%2B7wlYRwWoOkKF0hD2uu1NRmQJRmtPN6MhYfVki0vqrKsGJgUEOFyVPjJT5F%2FlKZEKMQgahRyn%2BX5rwXVtpYBBlgcILszBnTH8muUDjA3OWjZAKzTtwBEdGUHMl78ooZwYCVUPt38QgncXgp4b%2FToV1HZCWRJfBH%2BI3GlP4v7wjROPzGJywZsSXQAbHobkXQOWeXYs9lNLqQ7NXadZ6TmNTRLdsrkZOy9NQDW9TE%2BYDfY%2BF8nBY0RgV1mTTJe2MNsP2XQO%2FuTFQ4RCw33DB91rRcaUGZjMKy7ksEGOqUBh5EJSa5Yia%2F3mrbJkFGJItLLNr6q46elCZ%2B1%2BbuwSOZblyhgbC%2BqMQpj7kWfKErpLBToqAP0dcIvKa6ADtBPPV7k5OGXBzPupghw6tIB2OZAjWBliDV2G001aFfYr%2F4C3pDgQXn4paeZVj5dUTzBSVpGZd4iSHnYEuVAmHL4ZVfABZRJS0Ww9zSn8cI3W%2Bx1XOlXnj4B08clseb8UGBjlOaywmS0&X-Amz-Signature=b23ad73cd144ece8bf845de239e8feb170943b166d3158fd0c63553dfd938a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4FZV5J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA6oKzRm2Ddlsjf8mVq673VW4qLKyJLPVxs9ilGDAzbtAiEA9%2FDIRS0A8O%2FIGjdfGyF9t8Xt4KL6haSyxhxVtEgVoHcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM3G3voM9tpSM4BHUircA%2ByQHVDzbHLpoAjtbYAOzfybg%2BKho9PkfRA1RcQjzwUVU5oftAvw2UVSmEYveO%2BkYLQAy0E2m%2FAN8OuWGNGv9XdsR60vhlxUPVBpbph3AlMVsr9QJWCBn0dHhwo%2FMCBZVXjK0wz0NtMENjD5mVAkpVgp6zwoaEj4gVs%2Fq2tU%2B5Gp4sm9tGSheL%2BfYRUcIgQ7yxyMp67PHvHWThOxNUCauHOjWI7xdhef4A1qgc4WInO7dxe9D%2F9JGQUp1eU9TSpVzH0ZwAY5rfDTzAyzXX7rsk9muw9vKWzwjO1blYErF3xLjPxQMbg2QN34ork6aJe9wnDlb33Z%2FufmvTURqpMHLTDShlswR1vP%2B7wlYRwWoOkKF0hD2uu1NRmQJRmtPN6MhYfVki0vqrKsGJgUEOFyVPjJT5F%2FlKZEKMQgahRyn%2BX5rwXVtpYBBlgcILszBnTH8muUDjA3OWjZAKzTtwBEdGUHMl78ooZwYCVUPt38QgncXgp4b%2FToV1HZCWRJfBH%2BI3GlP4v7wjROPzGJywZsSXQAbHobkXQOWeXYs9lNLqQ7NXadZ6TmNTRLdsrkZOy9NQDW9TE%2BYDfY%2BF8nBY0RgV1mTTJe2MNsP2XQO%2FuTFQ4RCw33DB91rRcaUGZjMKy7ksEGOqUBh5EJSa5Yia%2F3mrbJkFGJItLLNr6q46elCZ%2B1%2BbuwSOZblyhgbC%2BqMQpj7kWfKErpLBToqAP0dcIvKa6ADtBPPV7k5OGXBzPupghw6tIB2OZAjWBliDV2G001aFfYr%2F4C3pDgQXn4paeZVj5dUTzBSVpGZd4iSHnYEuVAmHL4ZVfABZRJS0Ww9zSn8cI3W%2Bx1XOlXnj4B08clseb8UGBjlOaywmS0&X-Amz-Signature=1906b8a85e07fcbb7b48ee0b04f27f15378cc619414dc3320b2d0b701fde930e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4FZV5J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA6oKzRm2Ddlsjf8mVq673VW4qLKyJLPVxs9ilGDAzbtAiEA9%2FDIRS0A8O%2FIGjdfGyF9t8Xt4KL6haSyxhxVtEgVoHcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM3G3voM9tpSM4BHUircA%2ByQHVDzbHLpoAjtbYAOzfybg%2BKho9PkfRA1RcQjzwUVU5oftAvw2UVSmEYveO%2BkYLQAy0E2m%2FAN8OuWGNGv9XdsR60vhlxUPVBpbph3AlMVsr9QJWCBn0dHhwo%2FMCBZVXjK0wz0NtMENjD5mVAkpVgp6zwoaEj4gVs%2Fq2tU%2B5Gp4sm9tGSheL%2BfYRUcIgQ7yxyMp67PHvHWThOxNUCauHOjWI7xdhef4A1qgc4WInO7dxe9D%2F9JGQUp1eU9TSpVzH0ZwAY5rfDTzAyzXX7rsk9muw9vKWzwjO1blYErF3xLjPxQMbg2QN34ork6aJe9wnDlb33Z%2FufmvTURqpMHLTDShlswR1vP%2B7wlYRwWoOkKF0hD2uu1NRmQJRmtPN6MhYfVki0vqrKsGJgUEOFyVPjJT5F%2FlKZEKMQgahRyn%2BX5rwXVtpYBBlgcILszBnTH8muUDjA3OWjZAKzTtwBEdGUHMl78ooZwYCVUPt38QgncXgp4b%2FToV1HZCWRJfBH%2BI3GlP4v7wjROPzGJywZsSXQAbHobkXQOWeXYs9lNLqQ7NXadZ6TmNTRLdsrkZOy9NQDW9TE%2BYDfY%2BF8nBY0RgV1mTTJe2MNsP2XQO%2FuTFQ4RCw33DB91rRcaUGZjMKy7ksEGOqUBh5EJSa5Yia%2F3mrbJkFGJItLLNr6q46elCZ%2B1%2BbuwSOZblyhgbC%2BqMQpj7kWfKErpLBToqAP0dcIvKa6ADtBPPV7k5OGXBzPupghw6tIB2OZAjWBliDV2G001aFfYr%2F4C3pDgQXn4paeZVj5dUTzBSVpGZd4iSHnYEuVAmHL4ZVfABZRJS0Ww9zSn8cI3W%2Bx1XOlXnj4B08clseb8UGBjlOaywmS0&X-Amz-Signature=b4d77cbd3476fbf7477cad2e500aa5be8dbe64cdb3914e469a9208e813566b93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4FZV5J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA6oKzRm2Ddlsjf8mVq673VW4qLKyJLPVxs9ilGDAzbtAiEA9%2FDIRS0A8O%2FIGjdfGyF9t8Xt4KL6haSyxhxVtEgVoHcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM3G3voM9tpSM4BHUircA%2ByQHVDzbHLpoAjtbYAOzfybg%2BKho9PkfRA1RcQjzwUVU5oftAvw2UVSmEYveO%2BkYLQAy0E2m%2FAN8OuWGNGv9XdsR60vhlxUPVBpbph3AlMVsr9QJWCBn0dHhwo%2FMCBZVXjK0wz0NtMENjD5mVAkpVgp6zwoaEj4gVs%2Fq2tU%2B5Gp4sm9tGSheL%2BfYRUcIgQ7yxyMp67PHvHWThOxNUCauHOjWI7xdhef4A1qgc4WInO7dxe9D%2F9JGQUp1eU9TSpVzH0ZwAY5rfDTzAyzXX7rsk9muw9vKWzwjO1blYErF3xLjPxQMbg2QN34ork6aJe9wnDlb33Z%2FufmvTURqpMHLTDShlswR1vP%2B7wlYRwWoOkKF0hD2uu1NRmQJRmtPN6MhYfVki0vqrKsGJgUEOFyVPjJT5F%2FlKZEKMQgahRyn%2BX5rwXVtpYBBlgcILszBnTH8muUDjA3OWjZAKzTtwBEdGUHMl78ooZwYCVUPt38QgncXgp4b%2FToV1HZCWRJfBH%2BI3GlP4v7wjROPzGJywZsSXQAbHobkXQOWeXYs9lNLqQ7NXadZ6TmNTRLdsrkZOy9NQDW9TE%2BYDfY%2BF8nBY0RgV1mTTJe2MNsP2XQO%2FuTFQ4RCw33DB91rRcaUGZjMKy7ksEGOqUBh5EJSa5Yia%2F3mrbJkFGJItLLNr6q46elCZ%2B1%2BbuwSOZblyhgbC%2BqMQpj7kWfKErpLBToqAP0dcIvKa6ADtBPPV7k5OGXBzPupghw6tIB2OZAjWBliDV2G001aFfYr%2F4C3pDgQXn4paeZVj5dUTzBSVpGZd4iSHnYEuVAmHL4ZVfABZRJS0Ww9zSn8cI3W%2Bx1XOlXnj4B08clseb8UGBjlOaywmS0&X-Amz-Signature=7ac53f2ef07f37ff258152e89cadcbe420df7121d37e457dd8a58eea053083b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P4FZV5J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIA6oKzRm2Ddlsjf8mVq673VW4qLKyJLPVxs9ilGDAzbtAiEA9%2FDIRS0A8O%2FIGjdfGyF9t8Xt4KL6haSyxhxVtEgVoHcq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDM3G3voM9tpSM4BHUircA%2ByQHVDzbHLpoAjtbYAOzfybg%2BKho9PkfRA1RcQjzwUVU5oftAvw2UVSmEYveO%2BkYLQAy0E2m%2FAN8OuWGNGv9XdsR60vhlxUPVBpbph3AlMVsr9QJWCBn0dHhwo%2FMCBZVXjK0wz0NtMENjD5mVAkpVgp6zwoaEj4gVs%2Fq2tU%2B5Gp4sm9tGSheL%2BfYRUcIgQ7yxyMp67PHvHWThOxNUCauHOjWI7xdhef4A1qgc4WInO7dxe9D%2F9JGQUp1eU9TSpVzH0ZwAY5rfDTzAyzXX7rsk9muw9vKWzwjO1blYErF3xLjPxQMbg2QN34ork6aJe9wnDlb33Z%2FufmvTURqpMHLTDShlswR1vP%2B7wlYRwWoOkKF0hD2uu1NRmQJRmtPN6MhYfVki0vqrKsGJgUEOFyVPjJT5F%2FlKZEKMQgahRyn%2BX5rwXVtpYBBlgcILszBnTH8muUDjA3OWjZAKzTtwBEdGUHMl78ooZwYCVUPt38QgncXgp4b%2FToV1HZCWRJfBH%2BI3GlP4v7wjROPzGJywZsSXQAbHobkXQOWeXYs9lNLqQ7NXadZ6TmNTRLdsrkZOy9NQDW9TE%2BYDfY%2BF8nBY0RgV1mTTJe2MNsP2XQO%2FuTFQ4RCw33DB91rRcaUGZjMKy7ksEGOqUBh5EJSa5Yia%2F3mrbJkFGJItLLNr6q46elCZ%2B1%2BbuwSOZblyhgbC%2BqMQpj7kWfKErpLBToqAP0dcIvKa6ADtBPPV7k5OGXBzPupghw6tIB2OZAjWBliDV2G001aFfYr%2F4C3pDgQXn4paeZVj5dUTzBSVpGZd4iSHnYEuVAmHL4ZVfABZRJS0Ww9zSn8cI3W%2Bx1XOlXnj4B08clseb8UGBjlOaywmS0&X-Amz-Signature=b45f62b14bfa3b618c02a543df91ef9a03ac1ecd0fbe45c927f9023b80f0d5df&X-Amz-SignedHeaders=host&x-id=GetObject)
