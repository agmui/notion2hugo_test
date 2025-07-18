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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBIUFGA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDeSJgBuaaaoud6N7IeUhcC7o49H6dXLUIypylRdv09eAiEA0Agf69KBP30Hwy%2Fx2uNdMboFzNYv7%2B%2FRdrzzYPZSPqIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5LBPFlqXhBRv01SrcAzbpIhGI4ZgmNCau3OlohJdiEulXuinCnbKiUU9b31E0okczd52dhIVZof7EWU3ITQcP2qT28J1pfiyIQYfgxnGgT0xan7v7EEgJoD8UuY8lxV5FkuPH5mwQpsw9KbQoWhURBQk2vFIysMxsguZOi00A0SBHX9eOqqg3OnbB7AGOW8u3%2FPqEld3npco7s%2FX7tL31%2BlEt04IjaUzOdPTcyLGnLaeFY4Ph6ddBzfraiAeZ3JD8klLHZtRo9U9sqqcWphrr9DBw2PhPciKSbYwyV931bfHFOrd30zkPSZHG%2Bi9w%2Bzg4tM7evbikSqUcoKGyVomEdbmv%2BilPqYiqtfzHKFY%2B%2FDFhZtmdkqr8a5u54ZuB7ttJEN9hHZbpw4IdFvfQRZgEq14LIvzw6uV3E8nYjX4Ilm%2BDiXICSM4jvuUX%2FCGQgywPYfBOxwhaJs0crB8NsAzYfeWVYR4YnwLITksc%2FPSIHOmK%2FSGKFVFJ%2Buow4ght%2FkaSTjpEodpFIiKh2E9kokc6s1ExZavh2RJGToz3fhcZ%2FYibszl8Jpb00vZ6BcIpSw1%2FDRhykhDoo%2Bz%2Fpd9T0ryv0x3NOXBlPYNxc46whuVw5nryi%2FQtjOnW1o82gPJhr3iZ%2Fa09ItdJ%2Fuv6MKjq6cMGOqUByzwYlUzKurC04nTqyUrukLxwiANcKMoaMarIZt04jPewcU1%2FVEG6lRTCXPr9y7No2vfJgbjZyhRcP4kKvonoDxgyPZrg5Uk5oXygqu8kByatr20aPi4yB6blCu33qQ9%2FfkbdvySln0pOcSkpJgrFzldqTuoM03sNucO7Q2w45C091hs4bY63ruY0WWoy0CPPVSPAEVZbTscxX4ySQvDdnEbJuh6U&X-Amz-Signature=05ccd61f3765ea69a01fb2ecf36cb55fc1ee3c4f33a7771eb4bec0dd89290363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBIUFGA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDeSJgBuaaaoud6N7IeUhcC7o49H6dXLUIypylRdv09eAiEA0Agf69KBP30Hwy%2Fx2uNdMboFzNYv7%2B%2FRdrzzYPZSPqIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5LBPFlqXhBRv01SrcAzbpIhGI4ZgmNCau3OlohJdiEulXuinCnbKiUU9b31E0okczd52dhIVZof7EWU3ITQcP2qT28J1pfiyIQYfgxnGgT0xan7v7EEgJoD8UuY8lxV5FkuPH5mwQpsw9KbQoWhURBQk2vFIysMxsguZOi00A0SBHX9eOqqg3OnbB7AGOW8u3%2FPqEld3npco7s%2FX7tL31%2BlEt04IjaUzOdPTcyLGnLaeFY4Ph6ddBzfraiAeZ3JD8klLHZtRo9U9sqqcWphrr9DBw2PhPciKSbYwyV931bfHFOrd30zkPSZHG%2Bi9w%2Bzg4tM7evbikSqUcoKGyVomEdbmv%2BilPqYiqtfzHKFY%2B%2FDFhZtmdkqr8a5u54ZuB7ttJEN9hHZbpw4IdFvfQRZgEq14LIvzw6uV3E8nYjX4Ilm%2BDiXICSM4jvuUX%2FCGQgywPYfBOxwhaJs0crB8NsAzYfeWVYR4YnwLITksc%2FPSIHOmK%2FSGKFVFJ%2Buow4ght%2FkaSTjpEodpFIiKh2E9kokc6s1ExZavh2RJGToz3fhcZ%2FYibszl8Jpb00vZ6BcIpSw1%2FDRhykhDoo%2Bz%2Fpd9T0ryv0x3NOXBlPYNxc46whuVw5nryi%2FQtjOnW1o82gPJhr3iZ%2Fa09ItdJ%2Fuv6MKjq6cMGOqUByzwYlUzKurC04nTqyUrukLxwiANcKMoaMarIZt04jPewcU1%2FVEG6lRTCXPr9y7No2vfJgbjZyhRcP4kKvonoDxgyPZrg5Uk5oXygqu8kByatr20aPi4yB6blCu33qQ9%2FfkbdvySln0pOcSkpJgrFzldqTuoM03sNucO7Q2w45C091hs4bY63ruY0WWoy0CPPVSPAEVZbTscxX4ySQvDdnEbJuh6U&X-Amz-Signature=3638ef87f7022046f65ce44686ddc6c0cb45a30a2f33cb942969818ffd9cd23b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBIUFGA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDeSJgBuaaaoud6N7IeUhcC7o49H6dXLUIypylRdv09eAiEA0Agf69KBP30Hwy%2Fx2uNdMboFzNYv7%2B%2FRdrzzYPZSPqIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5LBPFlqXhBRv01SrcAzbpIhGI4ZgmNCau3OlohJdiEulXuinCnbKiUU9b31E0okczd52dhIVZof7EWU3ITQcP2qT28J1pfiyIQYfgxnGgT0xan7v7EEgJoD8UuY8lxV5FkuPH5mwQpsw9KbQoWhURBQk2vFIysMxsguZOi00A0SBHX9eOqqg3OnbB7AGOW8u3%2FPqEld3npco7s%2FX7tL31%2BlEt04IjaUzOdPTcyLGnLaeFY4Ph6ddBzfraiAeZ3JD8klLHZtRo9U9sqqcWphrr9DBw2PhPciKSbYwyV931bfHFOrd30zkPSZHG%2Bi9w%2Bzg4tM7evbikSqUcoKGyVomEdbmv%2BilPqYiqtfzHKFY%2B%2FDFhZtmdkqr8a5u54ZuB7ttJEN9hHZbpw4IdFvfQRZgEq14LIvzw6uV3E8nYjX4Ilm%2BDiXICSM4jvuUX%2FCGQgywPYfBOxwhaJs0crB8NsAzYfeWVYR4YnwLITksc%2FPSIHOmK%2FSGKFVFJ%2Buow4ght%2FkaSTjpEodpFIiKh2E9kokc6s1ExZavh2RJGToz3fhcZ%2FYibszl8Jpb00vZ6BcIpSw1%2FDRhykhDoo%2Bz%2Fpd9T0ryv0x3NOXBlPYNxc46whuVw5nryi%2FQtjOnW1o82gPJhr3iZ%2Fa09ItdJ%2Fuv6MKjq6cMGOqUByzwYlUzKurC04nTqyUrukLxwiANcKMoaMarIZt04jPewcU1%2FVEG6lRTCXPr9y7No2vfJgbjZyhRcP4kKvonoDxgyPZrg5Uk5oXygqu8kByatr20aPi4yB6blCu33qQ9%2FfkbdvySln0pOcSkpJgrFzldqTuoM03sNucO7Q2w45C091hs4bY63ruY0WWoy0CPPVSPAEVZbTscxX4ySQvDdnEbJuh6U&X-Amz-Signature=e283fe6f568a772a7a1b0e5684a7ebcd6ff45aa267e40b8de6c6759f0a34f573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBIUFGA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDeSJgBuaaaoud6N7IeUhcC7o49H6dXLUIypylRdv09eAiEA0Agf69KBP30Hwy%2Fx2uNdMboFzNYv7%2B%2FRdrzzYPZSPqIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5LBPFlqXhBRv01SrcAzbpIhGI4ZgmNCau3OlohJdiEulXuinCnbKiUU9b31E0okczd52dhIVZof7EWU3ITQcP2qT28J1pfiyIQYfgxnGgT0xan7v7EEgJoD8UuY8lxV5FkuPH5mwQpsw9KbQoWhURBQk2vFIysMxsguZOi00A0SBHX9eOqqg3OnbB7AGOW8u3%2FPqEld3npco7s%2FX7tL31%2BlEt04IjaUzOdPTcyLGnLaeFY4Ph6ddBzfraiAeZ3JD8klLHZtRo9U9sqqcWphrr9DBw2PhPciKSbYwyV931bfHFOrd30zkPSZHG%2Bi9w%2Bzg4tM7evbikSqUcoKGyVomEdbmv%2BilPqYiqtfzHKFY%2B%2FDFhZtmdkqr8a5u54ZuB7ttJEN9hHZbpw4IdFvfQRZgEq14LIvzw6uV3E8nYjX4Ilm%2BDiXICSM4jvuUX%2FCGQgywPYfBOxwhaJs0crB8NsAzYfeWVYR4YnwLITksc%2FPSIHOmK%2FSGKFVFJ%2Buow4ght%2FkaSTjpEodpFIiKh2E9kokc6s1ExZavh2RJGToz3fhcZ%2FYibszl8Jpb00vZ6BcIpSw1%2FDRhykhDoo%2Bz%2Fpd9T0ryv0x3NOXBlPYNxc46whuVw5nryi%2FQtjOnW1o82gPJhr3iZ%2Fa09ItdJ%2Fuv6MKjq6cMGOqUByzwYlUzKurC04nTqyUrukLxwiANcKMoaMarIZt04jPewcU1%2FVEG6lRTCXPr9y7No2vfJgbjZyhRcP4kKvonoDxgyPZrg5Uk5oXygqu8kByatr20aPi4yB6blCu33qQ9%2FfkbdvySln0pOcSkpJgrFzldqTuoM03sNucO7Q2w45C091hs4bY63ruY0WWoy0CPPVSPAEVZbTscxX4ySQvDdnEbJuh6U&X-Amz-Signature=85267595a41053e0e12bd562093980827b3a084794741e883df85f6e3def56f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBIUFGA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDeSJgBuaaaoud6N7IeUhcC7o49H6dXLUIypylRdv09eAiEA0Agf69KBP30Hwy%2Fx2uNdMboFzNYv7%2B%2FRdrzzYPZSPqIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5LBPFlqXhBRv01SrcAzbpIhGI4ZgmNCau3OlohJdiEulXuinCnbKiUU9b31E0okczd52dhIVZof7EWU3ITQcP2qT28J1pfiyIQYfgxnGgT0xan7v7EEgJoD8UuY8lxV5FkuPH5mwQpsw9KbQoWhURBQk2vFIysMxsguZOi00A0SBHX9eOqqg3OnbB7AGOW8u3%2FPqEld3npco7s%2FX7tL31%2BlEt04IjaUzOdPTcyLGnLaeFY4Ph6ddBzfraiAeZ3JD8klLHZtRo9U9sqqcWphrr9DBw2PhPciKSbYwyV931bfHFOrd30zkPSZHG%2Bi9w%2Bzg4tM7evbikSqUcoKGyVomEdbmv%2BilPqYiqtfzHKFY%2B%2FDFhZtmdkqr8a5u54ZuB7ttJEN9hHZbpw4IdFvfQRZgEq14LIvzw6uV3E8nYjX4Ilm%2BDiXICSM4jvuUX%2FCGQgywPYfBOxwhaJs0crB8NsAzYfeWVYR4YnwLITksc%2FPSIHOmK%2FSGKFVFJ%2Buow4ght%2FkaSTjpEodpFIiKh2E9kokc6s1ExZavh2RJGToz3fhcZ%2FYibszl8Jpb00vZ6BcIpSw1%2FDRhykhDoo%2Bz%2Fpd9T0ryv0x3NOXBlPYNxc46whuVw5nryi%2FQtjOnW1o82gPJhr3iZ%2Fa09ItdJ%2Fuv6MKjq6cMGOqUByzwYlUzKurC04nTqyUrukLxwiANcKMoaMarIZt04jPewcU1%2FVEG6lRTCXPr9y7No2vfJgbjZyhRcP4kKvonoDxgyPZrg5Uk5oXygqu8kByatr20aPi4yB6blCu33qQ9%2FfkbdvySln0pOcSkpJgrFzldqTuoM03sNucO7Q2w45C091hs4bY63ruY0WWoy0CPPVSPAEVZbTscxX4ySQvDdnEbJuh6U&X-Amz-Signature=2ec7637a872be86a70be97645aefbf1a585bd87138265be3d216f526ed80c30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBIUFGA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T171238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDeSJgBuaaaoud6N7IeUhcC7o49H6dXLUIypylRdv09eAiEA0Agf69KBP30Hwy%2Fx2uNdMboFzNYv7%2B%2FRdrzzYPZSPqIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGy5LBPFlqXhBRv01SrcAzbpIhGI4ZgmNCau3OlohJdiEulXuinCnbKiUU9b31E0okczd52dhIVZof7EWU3ITQcP2qT28J1pfiyIQYfgxnGgT0xan7v7EEgJoD8UuY8lxV5FkuPH5mwQpsw9KbQoWhURBQk2vFIysMxsguZOi00A0SBHX9eOqqg3OnbB7AGOW8u3%2FPqEld3npco7s%2FX7tL31%2BlEt04IjaUzOdPTcyLGnLaeFY4Ph6ddBzfraiAeZ3JD8klLHZtRo9U9sqqcWphrr9DBw2PhPciKSbYwyV931bfHFOrd30zkPSZHG%2Bi9w%2Bzg4tM7evbikSqUcoKGyVomEdbmv%2BilPqYiqtfzHKFY%2B%2FDFhZtmdkqr8a5u54ZuB7ttJEN9hHZbpw4IdFvfQRZgEq14LIvzw6uV3E8nYjX4Ilm%2BDiXICSM4jvuUX%2FCGQgywPYfBOxwhaJs0crB8NsAzYfeWVYR4YnwLITksc%2FPSIHOmK%2FSGKFVFJ%2Buow4ght%2FkaSTjpEodpFIiKh2E9kokc6s1ExZavh2RJGToz3fhcZ%2FYibszl8Jpb00vZ6BcIpSw1%2FDRhykhDoo%2Bz%2Fpd9T0ryv0x3NOXBlPYNxc46whuVw5nryi%2FQtjOnW1o82gPJhr3iZ%2Fa09ItdJ%2Fuv6MKjq6cMGOqUByzwYlUzKurC04nTqyUrukLxwiANcKMoaMarIZt04jPewcU1%2FVEG6lRTCXPr9y7No2vfJgbjZyhRcP4kKvonoDxgyPZrg5Uk5oXygqu8kByatr20aPi4yB6blCu33qQ9%2FfkbdvySln0pOcSkpJgrFzldqTuoM03sNucO7Q2w45C091hs4bY63ruY0WWoy0CPPVSPAEVZbTscxX4ySQvDdnEbJuh6U&X-Amz-Signature=b1dd197f1db38b17facd9c007f8ce5abd11088f8024b5393814341931cbff38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
