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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVTKAMX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeVEocabx78CSS6pmQF1fPUC%2Bkq00LdtQJxUoyK4ya0AiEA7%2BWO5BBD6HKyIPBbHMDbIqhQkdueQ6b%2BnchB4L80%2FFAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgMQ38BiDV8rjv1BSrcAy%2FgdifhxFlLazm%2FihMwfdeMQ47St0riYGPAW6v0jbCQruC8NvXkAHJFOJQnlUHzSe%2F20Tpdr%2FeCiOrRPgISWDJVQ1%2BjnH4K8JQAFfpstJnlzTRSuRmUyLLTMHkNA27D4qUQmNGjY0A9eQI8Upnz6bKcxh5elXoyhbFp4uNGubntJYTvsvoiifABaZWG3KWkZO8KLPeFYyFQMlcU0DNx0UqgOKrPtGMifgvuv7wJ7n%2B3NUzoztEzjiYOo%2B%2FOgg8Xrt74zGFAZDb7%2B1jz%2BYY3EGmha1KQa2YvGBmWHMNZRsIBHBUFJobT5dKQfQe0VKNlvWbBLLfbu4vL0lkaWUlsbw7H4jh82M1E6plxm6Lk66lb8osYRMs%2FKVF5O4ruBKHRQeh90u2bSAqOUhcxe9DS7UNtLKtuEGrdcspy7I0LBg7jzlKJz8uScD8ISIOpXWVJ4s4VIqXoc9V9gNOfSxn1FdanjZOa0rkogfFMKhmPZQm5xfxkMJ%2F4oqV2UxjwU0Ir6%2Fak3OuVVssDXVW4kvGGBk9N21vBm99P4HWx39zLAO7ONS1akcPSzAqSsr7bd5gN7v82acLsAdi0wRpxfU5xIzItCDEs9zq0JwwJLAp5XLCFvGRBjinIx2Zsd791MMui0b4GOqUBcA7%2FeXFrpIUfL0T9V5Jsbsp1sfxewDOrDVHIow8Jd04fz7Ad%2FA3tu6RAPfFY8fqvDzdtrzbU5ueVxT5LVZAm5ZM%2F9J86WGHkbcm2MuVdrMAjB8DGbx%2FS8shXLBYibP5gEUbCaBjpyDT7valNKtkWhpXP%2F%2Bi17ACPfPf%2B%2BEXct4g3HhIzrLQwoCyCvTI7NvBwgPp1pD9l2uGvTM0UtSD3pyAA%2FLO1&X-Amz-Signature=bc04641e20c11e463f9e16ca2e8669858aa76ae0b2f1a34a4ca2d96f86776a66&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVTKAMX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeVEocabx78CSS6pmQF1fPUC%2Bkq00LdtQJxUoyK4ya0AiEA7%2BWO5BBD6HKyIPBbHMDbIqhQkdueQ6b%2BnchB4L80%2FFAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgMQ38BiDV8rjv1BSrcAy%2FgdifhxFlLazm%2FihMwfdeMQ47St0riYGPAW6v0jbCQruC8NvXkAHJFOJQnlUHzSe%2F20Tpdr%2FeCiOrRPgISWDJVQ1%2BjnH4K8JQAFfpstJnlzTRSuRmUyLLTMHkNA27D4qUQmNGjY0A9eQI8Upnz6bKcxh5elXoyhbFp4uNGubntJYTvsvoiifABaZWG3KWkZO8KLPeFYyFQMlcU0DNx0UqgOKrPtGMifgvuv7wJ7n%2B3NUzoztEzjiYOo%2B%2FOgg8Xrt74zGFAZDb7%2B1jz%2BYY3EGmha1KQa2YvGBmWHMNZRsIBHBUFJobT5dKQfQe0VKNlvWbBLLfbu4vL0lkaWUlsbw7H4jh82M1E6plxm6Lk66lb8osYRMs%2FKVF5O4ruBKHRQeh90u2bSAqOUhcxe9DS7UNtLKtuEGrdcspy7I0LBg7jzlKJz8uScD8ISIOpXWVJ4s4VIqXoc9V9gNOfSxn1FdanjZOa0rkogfFMKhmPZQm5xfxkMJ%2F4oqV2UxjwU0Ir6%2Fak3OuVVssDXVW4kvGGBk9N21vBm99P4HWx39zLAO7ONS1akcPSzAqSsr7bd5gN7v82acLsAdi0wRpxfU5xIzItCDEs9zq0JwwJLAp5XLCFvGRBjinIx2Zsd791MMui0b4GOqUBcA7%2FeXFrpIUfL0T9V5Jsbsp1sfxewDOrDVHIow8Jd04fz7Ad%2FA3tu6RAPfFY8fqvDzdtrzbU5ueVxT5LVZAm5ZM%2F9J86WGHkbcm2MuVdrMAjB8DGbx%2FS8shXLBYibP5gEUbCaBjpyDT7valNKtkWhpXP%2F%2Bi17ACPfPf%2B%2BEXct4g3HhIzrLQwoCyCvTI7NvBwgPp1pD9l2uGvTM0UtSD3pyAA%2FLO1&X-Amz-Signature=93c210d77bf49dbf47934407a0b99b8f9de2465c5d9a57e16c54ba6e1fcc6e65&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVTKAMX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeVEocabx78CSS6pmQF1fPUC%2Bkq00LdtQJxUoyK4ya0AiEA7%2BWO5BBD6HKyIPBbHMDbIqhQkdueQ6b%2BnchB4L80%2FFAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgMQ38BiDV8rjv1BSrcAy%2FgdifhxFlLazm%2FihMwfdeMQ47St0riYGPAW6v0jbCQruC8NvXkAHJFOJQnlUHzSe%2F20Tpdr%2FeCiOrRPgISWDJVQ1%2BjnH4K8JQAFfpstJnlzTRSuRmUyLLTMHkNA27D4qUQmNGjY0A9eQI8Upnz6bKcxh5elXoyhbFp4uNGubntJYTvsvoiifABaZWG3KWkZO8KLPeFYyFQMlcU0DNx0UqgOKrPtGMifgvuv7wJ7n%2B3NUzoztEzjiYOo%2B%2FOgg8Xrt74zGFAZDb7%2B1jz%2BYY3EGmha1KQa2YvGBmWHMNZRsIBHBUFJobT5dKQfQe0VKNlvWbBLLfbu4vL0lkaWUlsbw7H4jh82M1E6plxm6Lk66lb8osYRMs%2FKVF5O4ruBKHRQeh90u2bSAqOUhcxe9DS7UNtLKtuEGrdcspy7I0LBg7jzlKJz8uScD8ISIOpXWVJ4s4VIqXoc9V9gNOfSxn1FdanjZOa0rkogfFMKhmPZQm5xfxkMJ%2F4oqV2UxjwU0Ir6%2Fak3OuVVssDXVW4kvGGBk9N21vBm99P4HWx39zLAO7ONS1akcPSzAqSsr7bd5gN7v82acLsAdi0wRpxfU5xIzItCDEs9zq0JwwJLAp5XLCFvGRBjinIx2Zsd791MMui0b4GOqUBcA7%2FeXFrpIUfL0T9V5Jsbsp1sfxewDOrDVHIow8Jd04fz7Ad%2FA3tu6RAPfFY8fqvDzdtrzbU5ueVxT5LVZAm5ZM%2F9J86WGHkbcm2MuVdrMAjB8DGbx%2FS8shXLBYibP5gEUbCaBjpyDT7valNKtkWhpXP%2F%2Bi17ACPfPf%2B%2BEXct4g3HhIzrLQwoCyCvTI7NvBwgPp1pD9l2uGvTM0UtSD3pyAA%2FLO1&X-Amz-Signature=13e51fc48593b582886912866b59ea4f8ac76845e75796f42efa30316d2ab1b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVTKAMX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeVEocabx78CSS6pmQF1fPUC%2Bkq00LdtQJxUoyK4ya0AiEA7%2BWO5BBD6HKyIPBbHMDbIqhQkdueQ6b%2BnchB4L80%2FFAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgMQ38BiDV8rjv1BSrcAy%2FgdifhxFlLazm%2FihMwfdeMQ47St0riYGPAW6v0jbCQruC8NvXkAHJFOJQnlUHzSe%2F20Tpdr%2FeCiOrRPgISWDJVQ1%2BjnH4K8JQAFfpstJnlzTRSuRmUyLLTMHkNA27D4qUQmNGjY0A9eQI8Upnz6bKcxh5elXoyhbFp4uNGubntJYTvsvoiifABaZWG3KWkZO8KLPeFYyFQMlcU0DNx0UqgOKrPtGMifgvuv7wJ7n%2B3NUzoztEzjiYOo%2B%2FOgg8Xrt74zGFAZDb7%2B1jz%2BYY3EGmha1KQa2YvGBmWHMNZRsIBHBUFJobT5dKQfQe0VKNlvWbBLLfbu4vL0lkaWUlsbw7H4jh82M1E6plxm6Lk66lb8osYRMs%2FKVF5O4ruBKHRQeh90u2bSAqOUhcxe9DS7UNtLKtuEGrdcspy7I0LBg7jzlKJz8uScD8ISIOpXWVJ4s4VIqXoc9V9gNOfSxn1FdanjZOa0rkogfFMKhmPZQm5xfxkMJ%2F4oqV2UxjwU0Ir6%2Fak3OuVVssDXVW4kvGGBk9N21vBm99P4HWx39zLAO7ONS1akcPSzAqSsr7bd5gN7v82acLsAdi0wRpxfU5xIzItCDEs9zq0JwwJLAp5XLCFvGRBjinIx2Zsd791MMui0b4GOqUBcA7%2FeXFrpIUfL0T9V5Jsbsp1sfxewDOrDVHIow8Jd04fz7Ad%2FA3tu6RAPfFY8fqvDzdtrzbU5ueVxT5LVZAm5ZM%2F9J86WGHkbcm2MuVdrMAjB8DGbx%2FS8shXLBYibP5gEUbCaBjpyDT7valNKtkWhpXP%2F%2Bi17ACPfPf%2B%2BEXct4g3HhIzrLQwoCyCvTI7NvBwgPp1pD9l2uGvTM0UtSD3pyAA%2FLO1&X-Amz-Signature=60b780e7c2099c4d1faedb137c567dd222c14fd7b5cfd1b225ad063e8b0ada9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVTKAMX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeVEocabx78CSS6pmQF1fPUC%2Bkq00LdtQJxUoyK4ya0AiEA7%2BWO5BBD6HKyIPBbHMDbIqhQkdueQ6b%2BnchB4L80%2FFAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgMQ38BiDV8rjv1BSrcAy%2FgdifhxFlLazm%2FihMwfdeMQ47St0riYGPAW6v0jbCQruC8NvXkAHJFOJQnlUHzSe%2F20Tpdr%2FeCiOrRPgISWDJVQ1%2BjnH4K8JQAFfpstJnlzTRSuRmUyLLTMHkNA27D4qUQmNGjY0A9eQI8Upnz6bKcxh5elXoyhbFp4uNGubntJYTvsvoiifABaZWG3KWkZO8KLPeFYyFQMlcU0DNx0UqgOKrPtGMifgvuv7wJ7n%2B3NUzoztEzjiYOo%2B%2FOgg8Xrt74zGFAZDb7%2B1jz%2BYY3EGmha1KQa2YvGBmWHMNZRsIBHBUFJobT5dKQfQe0VKNlvWbBLLfbu4vL0lkaWUlsbw7H4jh82M1E6plxm6Lk66lb8osYRMs%2FKVF5O4ruBKHRQeh90u2bSAqOUhcxe9DS7UNtLKtuEGrdcspy7I0LBg7jzlKJz8uScD8ISIOpXWVJ4s4VIqXoc9V9gNOfSxn1FdanjZOa0rkogfFMKhmPZQm5xfxkMJ%2F4oqV2UxjwU0Ir6%2Fak3OuVVssDXVW4kvGGBk9N21vBm99P4HWx39zLAO7ONS1akcPSzAqSsr7bd5gN7v82acLsAdi0wRpxfU5xIzItCDEs9zq0JwwJLAp5XLCFvGRBjinIx2Zsd791MMui0b4GOqUBcA7%2FeXFrpIUfL0T9V5Jsbsp1sfxewDOrDVHIow8Jd04fz7Ad%2FA3tu6RAPfFY8fqvDzdtrzbU5ueVxT5LVZAm5ZM%2F9J86WGHkbcm2MuVdrMAjB8DGbx%2FS8shXLBYibP5gEUbCaBjpyDT7valNKtkWhpXP%2F%2Bi17ACPfPf%2B%2BEXct4g3HhIzrLQwoCyCvTI7NvBwgPp1pD9l2uGvTM0UtSD3pyAA%2FLO1&X-Amz-Signature=45100dfed7c63dcdf308f6c00b763429d1e060cdf38f4d2cfd7f6607c41149e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOVTKAMX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeVEocabx78CSS6pmQF1fPUC%2Bkq00LdtQJxUoyK4ya0AiEA7%2BWO5BBD6HKyIPBbHMDbIqhQkdueQ6b%2BnchB4L80%2FFAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgMQ38BiDV8rjv1BSrcAy%2FgdifhxFlLazm%2FihMwfdeMQ47St0riYGPAW6v0jbCQruC8NvXkAHJFOJQnlUHzSe%2F20Tpdr%2FeCiOrRPgISWDJVQ1%2BjnH4K8JQAFfpstJnlzTRSuRmUyLLTMHkNA27D4qUQmNGjY0A9eQI8Upnz6bKcxh5elXoyhbFp4uNGubntJYTvsvoiifABaZWG3KWkZO8KLPeFYyFQMlcU0DNx0UqgOKrPtGMifgvuv7wJ7n%2B3NUzoztEzjiYOo%2B%2FOgg8Xrt74zGFAZDb7%2B1jz%2BYY3EGmha1KQa2YvGBmWHMNZRsIBHBUFJobT5dKQfQe0VKNlvWbBLLfbu4vL0lkaWUlsbw7H4jh82M1E6plxm6Lk66lb8osYRMs%2FKVF5O4ruBKHRQeh90u2bSAqOUhcxe9DS7UNtLKtuEGrdcspy7I0LBg7jzlKJz8uScD8ISIOpXWVJ4s4VIqXoc9V9gNOfSxn1FdanjZOa0rkogfFMKhmPZQm5xfxkMJ%2F4oqV2UxjwU0Ir6%2Fak3OuVVssDXVW4kvGGBk9N21vBm99P4HWx39zLAO7ONS1akcPSzAqSsr7bd5gN7v82acLsAdi0wRpxfU5xIzItCDEs9zq0JwwJLAp5XLCFvGRBjinIx2Zsd791MMui0b4GOqUBcA7%2FeXFrpIUfL0T9V5Jsbsp1sfxewDOrDVHIow8Jd04fz7Ad%2FA3tu6RAPfFY8fqvDzdtrzbU5ueVxT5LVZAm5ZM%2F9J86WGHkbcm2MuVdrMAjB8DGbx%2FS8shXLBYibP5gEUbCaBjpyDT7valNKtkWhpXP%2F%2Bi17ACPfPf%2B%2BEXct4g3HhIzrLQwoCyCvTI7NvBwgPp1pD9l2uGvTM0UtSD3pyAA%2FLO1&X-Amz-Signature=d6d43f81587a5979df6a1593254fa3ccc5f09394d2a37e72661fd464dc6e3e43&X-Amz-SignedHeaders=host&x-id=GetObject)
