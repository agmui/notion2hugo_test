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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVKTFD5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrOq8GgHnO4cKnKL0eKGS2T%2FS4T%2Fckq8egDgclVB0p1AiBHNQCEOWDitJgqCDJrTCRltUf2JBrazBAOOqNDH7%2BSvyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMo02WMEPf5NVjrz9pKtwDFYdDewfH6%2F9ylkugnyhYvcdLgfe7SZ%2BV0tyZB6Plk5hDS6ABfgS7XmeNW3eB%2F5%2BxUPUsrVMd5Wjg4YK2h4IvVkRk8au7MS710Nlb72jegmnmuyPggKrT404lBkNUJorGKgjyN33XWS8Lv%2F%2BiJdddhOkCZQPBsvCXQobedm%2BrJ7xZB0XJ6PqCI39wtaJp1go7vuDwywLnpspdEV%2B0oAoiGaIIQBke3DjhV4i9GWoO2xu57Y4cdTJt2YJctNXmC8reM4%2B8zxMLMwKdajwud5E9RNYxA%2FmJNHn37lk96jsxYhXxd%2Bns7IXGaWK0OTGoe%2BqAxI9ZABlM5UiDxOCmC6c%2F0NnJWTxU%2B0QP3VUgyDytIdIroJk%2BWfpQ2afPb8Kg3Z59SCeTqUtwgD%2BR2u%2FU%2Bo0xVH5m5LI7a%2Bwul0reNeWI6e9vIFJBUUHKvG%2Fs7kkaLio58%2BHhhArsj5e9%2BMi98JcuUSHJFtXLzTJ2BG4v78kyycr78NpeCpbO9xULZDIitkuB5uxtzLUoZM3bxCegL%2Fwhu2wzRHbFaAW4MAKjsZPIxgzi6tZAwCsgaZN88L2b87GXXM11pH4fMEjMYCr5a359B8iVkElbnUCtIAwD7zJwXUxQiq6wyoZyXhcJhiow4Z%2FzvwY6pgH5jhYKLrpprWn8iMp6ekDCYFNfFrhRSeBfTBjsD6feWBx3tDkAgNNS7xihU%2B5c6eBu4L2qZSlt949eku96pjdgpZ6hV4V0O%2F2WwBDlqxocfEXqVV8qn966hM4PxLq6anrffkrS1%2FQ2QPr90d159sOXdPjYg27T40EPWffRuqCdRX7L2L5n1dSXC8%2B1JUTcTFtJTW42IQpSyzVAEF3bKM69xvuw2AIR&X-Amz-Signature=5f7db84a3eaf9a83dd963570762320ad34e50d0c397663a44e1fd040d7c0dae9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVKTFD5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrOq8GgHnO4cKnKL0eKGS2T%2FS4T%2Fckq8egDgclVB0p1AiBHNQCEOWDitJgqCDJrTCRltUf2JBrazBAOOqNDH7%2BSvyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMo02WMEPf5NVjrz9pKtwDFYdDewfH6%2F9ylkugnyhYvcdLgfe7SZ%2BV0tyZB6Plk5hDS6ABfgS7XmeNW3eB%2F5%2BxUPUsrVMd5Wjg4YK2h4IvVkRk8au7MS710Nlb72jegmnmuyPggKrT404lBkNUJorGKgjyN33XWS8Lv%2F%2BiJdddhOkCZQPBsvCXQobedm%2BrJ7xZB0XJ6PqCI39wtaJp1go7vuDwywLnpspdEV%2B0oAoiGaIIQBke3DjhV4i9GWoO2xu57Y4cdTJt2YJctNXmC8reM4%2B8zxMLMwKdajwud5E9RNYxA%2FmJNHn37lk96jsxYhXxd%2Bns7IXGaWK0OTGoe%2BqAxI9ZABlM5UiDxOCmC6c%2F0NnJWTxU%2B0QP3VUgyDytIdIroJk%2BWfpQ2afPb8Kg3Z59SCeTqUtwgD%2BR2u%2FU%2Bo0xVH5m5LI7a%2Bwul0reNeWI6e9vIFJBUUHKvG%2Fs7kkaLio58%2BHhhArsj5e9%2BMi98JcuUSHJFtXLzTJ2BG4v78kyycr78NpeCpbO9xULZDIitkuB5uxtzLUoZM3bxCegL%2Fwhu2wzRHbFaAW4MAKjsZPIxgzi6tZAwCsgaZN88L2b87GXXM11pH4fMEjMYCr5a359B8iVkElbnUCtIAwD7zJwXUxQiq6wyoZyXhcJhiow4Z%2FzvwY6pgH5jhYKLrpprWn8iMp6ekDCYFNfFrhRSeBfTBjsD6feWBx3tDkAgNNS7xihU%2B5c6eBu4L2qZSlt949eku96pjdgpZ6hV4V0O%2F2WwBDlqxocfEXqVV8qn966hM4PxLq6anrffkrS1%2FQ2QPr90d159sOXdPjYg27T40EPWffRuqCdRX7L2L5n1dSXC8%2B1JUTcTFtJTW42IQpSyzVAEF3bKM69xvuw2AIR&X-Amz-Signature=db70130150a4d1b5abc5dfbde0c6d7ea593d7f0d459a950d0dfebb2181d1ae37&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVKTFD5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrOq8GgHnO4cKnKL0eKGS2T%2FS4T%2Fckq8egDgclVB0p1AiBHNQCEOWDitJgqCDJrTCRltUf2JBrazBAOOqNDH7%2BSvyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMo02WMEPf5NVjrz9pKtwDFYdDewfH6%2F9ylkugnyhYvcdLgfe7SZ%2BV0tyZB6Plk5hDS6ABfgS7XmeNW3eB%2F5%2BxUPUsrVMd5Wjg4YK2h4IvVkRk8au7MS710Nlb72jegmnmuyPggKrT404lBkNUJorGKgjyN33XWS8Lv%2F%2BiJdddhOkCZQPBsvCXQobedm%2BrJ7xZB0XJ6PqCI39wtaJp1go7vuDwywLnpspdEV%2B0oAoiGaIIQBke3DjhV4i9GWoO2xu57Y4cdTJt2YJctNXmC8reM4%2B8zxMLMwKdajwud5E9RNYxA%2FmJNHn37lk96jsxYhXxd%2Bns7IXGaWK0OTGoe%2BqAxI9ZABlM5UiDxOCmC6c%2F0NnJWTxU%2B0QP3VUgyDytIdIroJk%2BWfpQ2afPb8Kg3Z59SCeTqUtwgD%2BR2u%2FU%2Bo0xVH5m5LI7a%2Bwul0reNeWI6e9vIFJBUUHKvG%2Fs7kkaLio58%2BHhhArsj5e9%2BMi98JcuUSHJFtXLzTJ2BG4v78kyycr78NpeCpbO9xULZDIitkuB5uxtzLUoZM3bxCegL%2Fwhu2wzRHbFaAW4MAKjsZPIxgzi6tZAwCsgaZN88L2b87GXXM11pH4fMEjMYCr5a359B8iVkElbnUCtIAwD7zJwXUxQiq6wyoZyXhcJhiow4Z%2FzvwY6pgH5jhYKLrpprWn8iMp6ekDCYFNfFrhRSeBfTBjsD6feWBx3tDkAgNNS7xihU%2B5c6eBu4L2qZSlt949eku96pjdgpZ6hV4V0O%2F2WwBDlqxocfEXqVV8qn966hM4PxLq6anrffkrS1%2FQ2QPr90d159sOXdPjYg27T40EPWffRuqCdRX7L2L5n1dSXC8%2B1JUTcTFtJTW42IQpSyzVAEF3bKM69xvuw2AIR&X-Amz-Signature=6087ef77702f5cbc0b8a07913c0ab831d2b87ca5360037edb17ea5e9f7e7ed66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVKTFD5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrOq8GgHnO4cKnKL0eKGS2T%2FS4T%2Fckq8egDgclVB0p1AiBHNQCEOWDitJgqCDJrTCRltUf2JBrazBAOOqNDH7%2BSvyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMo02WMEPf5NVjrz9pKtwDFYdDewfH6%2F9ylkugnyhYvcdLgfe7SZ%2BV0tyZB6Plk5hDS6ABfgS7XmeNW3eB%2F5%2BxUPUsrVMd5Wjg4YK2h4IvVkRk8au7MS710Nlb72jegmnmuyPggKrT404lBkNUJorGKgjyN33XWS8Lv%2F%2BiJdddhOkCZQPBsvCXQobedm%2BrJ7xZB0XJ6PqCI39wtaJp1go7vuDwywLnpspdEV%2B0oAoiGaIIQBke3DjhV4i9GWoO2xu57Y4cdTJt2YJctNXmC8reM4%2B8zxMLMwKdajwud5E9RNYxA%2FmJNHn37lk96jsxYhXxd%2Bns7IXGaWK0OTGoe%2BqAxI9ZABlM5UiDxOCmC6c%2F0NnJWTxU%2B0QP3VUgyDytIdIroJk%2BWfpQ2afPb8Kg3Z59SCeTqUtwgD%2BR2u%2FU%2Bo0xVH5m5LI7a%2Bwul0reNeWI6e9vIFJBUUHKvG%2Fs7kkaLio58%2BHhhArsj5e9%2BMi98JcuUSHJFtXLzTJ2BG4v78kyycr78NpeCpbO9xULZDIitkuB5uxtzLUoZM3bxCegL%2Fwhu2wzRHbFaAW4MAKjsZPIxgzi6tZAwCsgaZN88L2b87GXXM11pH4fMEjMYCr5a359B8iVkElbnUCtIAwD7zJwXUxQiq6wyoZyXhcJhiow4Z%2FzvwY6pgH5jhYKLrpprWn8iMp6ekDCYFNfFrhRSeBfTBjsD6feWBx3tDkAgNNS7xihU%2B5c6eBu4L2qZSlt949eku96pjdgpZ6hV4V0O%2F2WwBDlqxocfEXqVV8qn966hM4PxLq6anrffkrS1%2FQ2QPr90d159sOXdPjYg27T40EPWffRuqCdRX7L2L5n1dSXC8%2B1JUTcTFtJTW42IQpSyzVAEF3bKM69xvuw2AIR&X-Amz-Signature=bfaa36d1fe4076edc678fe61d665dbf831f76aa3c00aef173ba8b7663288904d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVKTFD5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrOq8GgHnO4cKnKL0eKGS2T%2FS4T%2Fckq8egDgclVB0p1AiBHNQCEOWDitJgqCDJrTCRltUf2JBrazBAOOqNDH7%2BSvyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMo02WMEPf5NVjrz9pKtwDFYdDewfH6%2F9ylkugnyhYvcdLgfe7SZ%2BV0tyZB6Plk5hDS6ABfgS7XmeNW3eB%2F5%2BxUPUsrVMd5Wjg4YK2h4IvVkRk8au7MS710Nlb72jegmnmuyPggKrT404lBkNUJorGKgjyN33XWS8Lv%2F%2BiJdddhOkCZQPBsvCXQobedm%2BrJ7xZB0XJ6PqCI39wtaJp1go7vuDwywLnpspdEV%2B0oAoiGaIIQBke3DjhV4i9GWoO2xu57Y4cdTJt2YJctNXmC8reM4%2B8zxMLMwKdajwud5E9RNYxA%2FmJNHn37lk96jsxYhXxd%2Bns7IXGaWK0OTGoe%2BqAxI9ZABlM5UiDxOCmC6c%2F0NnJWTxU%2B0QP3VUgyDytIdIroJk%2BWfpQ2afPb8Kg3Z59SCeTqUtwgD%2BR2u%2FU%2Bo0xVH5m5LI7a%2Bwul0reNeWI6e9vIFJBUUHKvG%2Fs7kkaLio58%2BHhhArsj5e9%2BMi98JcuUSHJFtXLzTJ2BG4v78kyycr78NpeCpbO9xULZDIitkuB5uxtzLUoZM3bxCegL%2Fwhu2wzRHbFaAW4MAKjsZPIxgzi6tZAwCsgaZN88L2b87GXXM11pH4fMEjMYCr5a359B8iVkElbnUCtIAwD7zJwXUxQiq6wyoZyXhcJhiow4Z%2FzvwY6pgH5jhYKLrpprWn8iMp6ekDCYFNfFrhRSeBfTBjsD6feWBx3tDkAgNNS7xihU%2B5c6eBu4L2qZSlt949eku96pjdgpZ6hV4V0O%2F2WwBDlqxocfEXqVV8qn966hM4PxLq6anrffkrS1%2FQ2QPr90d159sOXdPjYg27T40EPWffRuqCdRX7L2L5n1dSXC8%2B1JUTcTFtJTW42IQpSyzVAEF3bKM69xvuw2AIR&X-Amz-Signature=f26a1509c55a366451fa934f6bcd48f83f569e099d3273074279c02ddcb2fdb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVKTFD5%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrOq8GgHnO4cKnKL0eKGS2T%2FS4T%2Fckq8egDgclVB0p1AiBHNQCEOWDitJgqCDJrTCRltUf2JBrazBAOOqNDH7%2BSvyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMo02WMEPf5NVjrz9pKtwDFYdDewfH6%2F9ylkugnyhYvcdLgfe7SZ%2BV0tyZB6Plk5hDS6ABfgS7XmeNW3eB%2F5%2BxUPUsrVMd5Wjg4YK2h4IvVkRk8au7MS710Nlb72jegmnmuyPggKrT404lBkNUJorGKgjyN33XWS8Lv%2F%2BiJdddhOkCZQPBsvCXQobedm%2BrJ7xZB0XJ6PqCI39wtaJp1go7vuDwywLnpspdEV%2B0oAoiGaIIQBke3DjhV4i9GWoO2xu57Y4cdTJt2YJctNXmC8reM4%2B8zxMLMwKdajwud5E9RNYxA%2FmJNHn37lk96jsxYhXxd%2Bns7IXGaWK0OTGoe%2BqAxI9ZABlM5UiDxOCmC6c%2F0NnJWTxU%2B0QP3VUgyDytIdIroJk%2BWfpQ2afPb8Kg3Z59SCeTqUtwgD%2BR2u%2FU%2Bo0xVH5m5LI7a%2Bwul0reNeWI6e9vIFJBUUHKvG%2Fs7kkaLio58%2BHhhArsj5e9%2BMi98JcuUSHJFtXLzTJ2BG4v78kyycr78NpeCpbO9xULZDIitkuB5uxtzLUoZM3bxCegL%2Fwhu2wzRHbFaAW4MAKjsZPIxgzi6tZAwCsgaZN88L2b87GXXM11pH4fMEjMYCr5a359B8iVkElbnUCtIAwD7zJwXUxQiq6wyoZyXhcJhiow4Z%2FzvwY6pgH5jhYKLrpprWn8iMp6ekDCYFNfFrhRSeBfTBjsD6feWBx3tDkAgNNS7xihU%2B5c6eBu4L2qZSlt949eku96pjdgpZ6hV4V0O%2F2WwBDlqxocfEXqVV8qn966hM4PxLq6anrffkrS1%2FQ2QPr90d159sOXdPjYg27T40EPWffRuqCdRX7L2L5n1dSXC8%2B1JUTcTFtJTW42IQpSyzVAEF3bKM69xvuw2AIR&X-Amz-Signature=529959c01f15e1978955f30887793826cdb141a413431b228839187a1489da20&X-Amz-SignedHeaders=host&x-id=GetObject)
