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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVPLWHW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDq87rSx%2BHfxQW%2FGPZb7khOjCMSLLztrdoiY7x1%2Fr3%2ByAiBz0NetS6NLOh27j35E4efSUJnPX4%2B1%2BUsSzMgzz7j7viqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVF16fN%2FB6yM51msKtwDDLYuzRp2HRqudDt%2FMmH%2Fcw1Mj%2FugjS2Q25AR9gS%2BSQO0L4y106ACbar4mKOPXtcxn%2BxBQ3YqKMf%2FPYvmr5LKjlxiZ595pmFNH5BUk44x3wIGLqYwTmMar8sorT8jQebTD6fFBxVMfwu18XHLkz7bRbBV%2F1YpRjqR8qGCtsS0bcpSLhqldxoiYCFm9fSs%2FFKvdyWqt4CK9711fYsKS6nBAB%2BtFA%2BDzhy8BKPYLvzr68uYaZu1QNE2K94wjrVB6BCPn3OZg%2Fp7Z50ZG7W5paEjPNxUkDNSI1VFd1u7Af9jXpX8u5FSKtRpXF8E1zo2jt7L3LcUuOpWuxe7G5goK4KIS34iBzi9A9p67biHU2JkvB%2BipgF4OctYhvPuABUVShb5UsjkpkPk9TDBDNlZzRxyqrMlltfdBuBZ1iao12tUUaDQ%2FJE%2FIQVWSoW7Hb%2FN3aUFUIHAKPX84vm2TIOK17TvqiU0q%2B%2BgnDnUkvKYteQmzUVcyCW0yxY1wsorF%2B5zsC%2FHl%2B7k5EvMs%2BCn%2FwNHpT6OdbF2ztZumN0dZMWTIrIEGtTkfh66jtoM25QuM6BKvVVqC%2Bmcffdy%2B2LHCtCnj1sT2%2FD8c1katim8ftzeqbE63h6KmPMSVSTgOhJtVzEwoOP9vgY6pgEInknt1kklu2qmmuuxOdYRaOIyReiQugc%2BmKoc9s%2Fjfbt9z%2Bky6YHXkK1BdexPWy%2BrPqMI7jLQTOPRYM%2BooWsCRuZziDkyYcDpmoJXc9XDj9wMTvpH5XDv33I6iFKT0hc7I3mjcAFNfMZc8X3jSjiE6QuMTMbXm4D9ExjAnScx4jhIWJWEqTi5%2FfeGq7dDZ%2F9JSxFHPAo3njrURfJNjoQH7fNsI%2FaO&X-Amz-Signature=9aa57522e52ff803fbc44fbc62529ffcb4018147bf3f62acf2154634d69566d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVPLWHW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDq87rSx%2BHfxQW%2FGPZb7khOjCMSLLztrdoiY7x1%2Fr3%2ByAiBz0NetS6NLOh27j35E4efSUJnPX4%2B1%2BUsSzMgzz7j7viqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVF16fN%2FB6yM51msKtwDDLYuzRp2HRqudDt%2FMmH%2Fcw1Mj%2FugjS2Q25AR9gS%2BSQO0L4y106ACbar4mKOPXtcxn%2BxBQ3YqKMf%2FPYvmr5LKjlxiZ595pmFNH5BUk44x3wIGLqYwTmMar8sorT8jQebTD6fFBxVMfwu18XHLkz7bRbBV%2F1YpRjqR8qGCtsS0bcpSLhqldxoiYCFm9fSs%2FFKvdyWqt4CK9711fYsKS6nBAB%2BtFA%2BDzhy8BKPYLvzr68uYaZu1QNE2K94wjrVB6BCPn3OZg%2Fp7Z50ZG7W5paEjPNxUkDNSI1VFd1u7Af9jXpX8u5FSKtRpXF8E1zo2jt7L3LcUuOpWuxe7G5goK4KIS34iBzi9A9p67biHU2JkvB%2BipgF4OctYhvPuABUVShb5UsjkpkPk9TDBDNlZzRxyqrMlltfdBuBZ1iao12tUUaDQ%2FJE%2FIQVWSoW7Hb%2FN3aUFUIHAKPX84vm2TIOK17TvqiU0q%2B%2BgnDnUkvKYteQmzUVcyCW0yxY1wsorF%2B5zsC%2FHl%2B7k5EvMs%2BCn%2FwNHpT6OdbF2ztZumN0dZMWTIrIEGtTkfh66jtoM25QuM6BKvVVqC%2Bmcffdy%2B2LHCtCnj1sT2%2FD8c1katim8ftzeqbE63h6KmPMSVSTgOhJtVzEwoOP9vgY6pgEInknt1kklu2qmmuuxOdYRaOIyReiQugc%2BmKoc9s%2Fjfbt9z%2Bky6YHXkK1BdexPWy%2BrPqMI7jLQTOPRYM%2BooWsCRuZziDkyYcDpmoJXc9XDj9wMTvpH5XDv33I6iFKT0hc7I3mjcAFNfMZc8X3jSjiE6QuMTMbXm4D9ExjAnScx4jhIWJWEqTi5%2FfeGq7dDZ%2F9JSxFHPAo3njrURfJNjoQH7fNsI%2FaO&X-Amz-Signature=3dd54104d4b66f511cc27aaacf3cc4a7d7e17fd0aec1f71f7a75a515e08cfe7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVPLWHW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDq87rSx%2BHfxQW%2FGPZb7khOjCMSLLztrdoiY7x1%2Fr3%2ByAiBz0NetS6NLOh27j35E4efSUJnPX4%2B1%2BUsSzMgzz7j7viqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVF16fN%2FB6yM51msKtwDDLYuzRp2HRqudDt%2FMmH%2Fcw1Mj%2FugjS2Q25AR9gS%2BSQO0L4y106ACbar4mKOPXtcxn%2BxBQ3YqKMf%2FPYvmr5LKjlxiZ595pmFNH5BUk44x3wIGLqYwTmMar8sorT8jQebTD6fFBxVMfwu18XHLkz7bRbBV%2F1YpRjqR8qGCtsS0bcpSLhqldxoiYCFm9fSs%2FFKvdyWqt4CK9711fYsKS6nBAB%2BtFA%2BDzhy8BKPYLvzr68uYaZu1QNE2K94wjrVB6BCPn3OZg%2Fp7Z50ZG7W5paEjPNxUkDNSI1VFd1u7Af9jXpX8u5FSKtRpXF8E1zo2jt7L3LcUuOpWuxe7G5goK4KIS34iBzi9A9p67biHU2JkvB%2BipgF4OctYhvPuABUVShb5UsjkpkPk9TDBDNlZzRxyqrMlltfdBuBZ1iao12tUUaDQ%2FJE%2FIQVWSoW7Hb%2FN3aUFUIHAKPX84vm2TIOK17TvqiU0q%2B%2BgnDnUkvKYteQmzUVcyCW0yxY1wsorF%2B5zsC%2FHl%2B7k5EvMs%2BCn%2FwNHpT6OdbF2ztZumN0dZMWTIrIEGtTkfh66jtoM25QuM6BKvVVqC%2Bmcffdy%2B2LHCtCnj1sT2%2FD8c1katim8ftzeqbE63h6KmPMSVSTgOhJtVzEwoOP9vgY6pgEInknt1kklu2qmmuuxOdYRaOIyReiQugc%2BmKoc9s%2Fjfbt9z%2Bky6YHXkK1BdexPWy%2BrPqMI7jLQTOPRYM%2BooWsCRuZziDkyYcDpmoJXc9XDj9wMTvpH5XDv33I6iFKT0hc7I3mjcAFNfMZc8X3jSjiE6QuMTMbXm4D9ExjAnScx4jhIWJWEqTi5%2FfeGq7dDZ%2F9JSxFHPAo3njrURfJNjoQH7fNsI%2FaO&X-Amz-Signature=8834f0c2c2dd8a6e46aed3dc6ff8bcbb61eeb68f3cf98a320bea9fc1b961a4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVPLWHW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDq87rSx%2BHfxQW%2FGPZb7khOjCMSLLztrdoiY7x1%2Fr3%2ByAiBz0NetS6NLOh27j35E4efSUJnPX4%2B1%2BUsSzMgzz7j7viqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVF16fN%2FB6yM51msKtwDDLYuzRp2HRqudDt%2FMmH%2Fcw1Mj%2FugjS2Q25AR9gS%2BSQO0L4y106ACbar4mKOPXtcxn%2BxBQ3YqKMf%2FPYvmr5LKjlxiZ595pmFNH5BUk44x3wIGLqYwTmMar8sorT8jQebTD6fFBxVMfwu18XHLkz7bRbBV%2F1YpRjqR8qGCtsS0bcpSLhqldxoiYCFm9fSs%2FFKvdyWqt4CK9711fYsKS6nBAB%2BtFA%2BDzhy8BKPYLvzr68uYaZu1QNE2K94wjrVB6BCPn3OZg%2Fp7Z50ZG7W5paEjPNxUkDNSI1VFd1u7Af9jXpX8u5FSKtRpXF8E1zo2jt7L3LcUuOpWuxe7G5goK4KIS34iBzi9A9p67biHU2JkvB%2BipgF4OctYhvPuABUVShb5UsjkpkPk9TDBDNlZzRxyqrMlltfdBuBZ1iao12tUUaDQ%2FJE%2FIQVWSoW7Hb%2FN3aUFUIHAKPX84vm2TIOK17TvqiU0q%2B%2BgnDnUkvKYteQmzUVcyCW0yxY1wsorF%2B5zsC%2FHl%2B7k5EvMs%2BCn%2FwNHpT6OdbF2ztZumN0dZMWTIrIEGtTkfh66jtoM25QuM6BKvVVqC%2Bmcffdy%2B2LHCtCnj1sT2%2FD8c1katim8ftzeqbE63h6KmPMSVSTgOhJtVzEwoOP9vgY6pgEInknt1kklu2qmmuuxOdYRaOIyReiQugc%2BmKoc9s%2Fjfbt9z%2Bky6YHXkK1BdexPWy%2BrPqMI7jLQTOPRYM%2BooWsCRuZziDkyYcDpmoJXc9XDj9wMTvpH5XDv33I6iFKT0hc7I3mjcAFNfMZc8X3jSjiE6QuMTMbXm4D9ExjAnScx4jhIWJWEqTi5%2FfeGq7dDZ%2F9JSxFHPAo3njrURfJNjoQH7fNsI%2FaO&X-Amz-Signature=a0f80d0e2e4417e432994fdf3b2ae5eb6755b8e4cfb2972bbb617c42744cc638&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVPLWHW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDq87rSx%2BHfxQW%2FGPZb7khOjCMSLLztrdoiY7x1%2Fr3%2ByAiBz0NetS6NLOh27j35E4efSUJnPX4%2B1%2BUsSzMgzz7j7viqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVF16fN%2FB6yM51msKtwDDLYuzRp2HRqudDt%2FMmH%2Fcw1Mj%2FugjS2Q25AR9gS%2BSQO0L4y106ACbar4mKOPXtcxn%2BxBQ3YqKMf%2FPYvmr5LKjlxiZ595pmFNH5BUk44x3wIGLqYwTmMar8sorT8jQebTD6fFBxVMfwu18XHLkz7bRbBV%2F1YpRjqR8qGCtsS0bcpSLhqldxoiYCFm9fSs%2FFKvdyWqt4CK9711fYsKS6nBAB%2BtFA%2BDzhy8BKPYLvzr68uYaZu1QNE2K94wjrVB6BCPn3OZg%2Fp7Z50ZG7W5paEjPNxUkDNSI1VFd1u7Af9jXpX8u5FSKtRpXF8E1zo2jt7L3LcUuOpWuxe7G5goK4KIS34iBzi9A9p67biHU2JkvB%2BipgF4OctYhvPuABUVShb5UsjkpkPk9TDBDNlZzRxyqrMlltfdBuBZ1iao12tUUaDQ%2FJE%2FIQVWSoW7Hb%2FN3aUFUIHAKPX84vm2TIOK17TvqiU0q%2B%2BgnDnUkvKYteQmzUVcyCW0yxY1wsorF%2B5zsC%2FHl%2B7k5EvMs%2BCn%2FwNHpT6OdbF2ztZumN0dZMWTIrIEGtTkfh66jtoM25QuM6BKvVVqC%2Bmcffdy%2B2LHCtCnj1sT2%2FD8c1katim8ftzeqbE63h6KmPMSVSTgOhJtVzEwoOP9vgY6pgEInknt1kklu2qmmuuxOdYRaOIyReiQugc%2BmKoc9s%2Fjfbt9z%2Bky6YHXkK1BdexPWy%2BrPqMI7jLQTOPRYM%2BooWsCRuZziDkyYcDpmoJXc9XDj9wMTvpH5XDv33I6iFKT0hc7I3mjcAFNfMZc8X3jSjiE6QuMTMbXm4D9ExjAnScx4jhIWJWEqTi5%2FfeGq7dDZ%2F9JSxFHPAo3njrURfJNjoQH7fNsI%2FaO&X-Amz-Signature=519d0e29d8938c8e819a3e6205c461e078d3d595184ce90da69d9f8d95b647cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLVPLWHW%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDq87rSx%2BHfxQW%2FGPZb7khOjCMSLLztrdoiY7x1%2Fr3%2ByAiBz0NetS6NLOh27j35E4efSUJnPX4%2B1%2BUsSzMgzz7j7viqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCVF16fN%2FB6yM51msKtwDDLYuzRp2HRqudDt%2FMmH%2Fcw1Mj%2FugjS2Q25AR9gS%2BSQO0L4y106ACbar4mKOPXtcxn%2BxBQ3YqKMf%2FPYvmr5LKjlxiZ595pmFNH5BUk44x3wIGLqYwTmMar8sorT8jQebTD6fFBxVMfwu18XHLkz7bRbBV%2F1YpRjqR8qGCtsS0bcpSLhqldxoiYCFm9fSs%2FFKvdyWqt4CK9711fYsKS6nBAB%2BtFA%2BDzhy8BKPYLvzr68uYaZu1QNE2K94wjrVB6BCPn3OZg%2Fp7Z50ZG7W5paEjPNxUkDNSI1VFd1u7Af9jXpX8u5FSKtRpXF8E1zo2jt7L3LcUuOpWuxe7G5goK4KIS34iBzi9A9p67biHU2JkvB%2BipgF4OctYhvPuABUVShb5UsjkpkPk9TDBDNlZzRxyqrMlltfdBuBZ1iao12tUUaDQ%2FJE%2FIQVWSoW7Hb%2FN3aUFUIHAKPX84vm2TIOK17TvqiU0q%2B%2BgnDnUkvKYteQmzUVcyCW0yxY1wsorF%2B5zsC%2FHl%2B7k5EvMs%2BCn%2FwNHpT6OdbF2ztZumN0dZMWTIrIEGtTkfh66jtoM25QuM6BKvVVqC%2Bmcffdy%2B2LHCtCnj1sT2%2FD8c1katim8ftzeqbE63h6KmPMSVSTgOhJtVzEwoOP9vgY6pgEInknt1kklu2qmmuuxOdYRaOIyReiQugc%2BmKoc9s%2Fjfbt9z%2Bky6YHXkK1BdexPWy%2BrPqMI7jLQTOPRYM%2BooWsCRuZziDkyYcDpmoJXc9XDj9wMTvpH5XDv33I6iFKT0hc7I3mjcAFNfMZc8X3jSjiE6QuMTMbXm4D9ExjAnScx4jhIWJWEqTi5%2FfeGq7dDZ%2F9JSxFHPAo3njrURfJNjoQH7fNsI%2FaO&X-Amz-Signature=c26f4d837252f37e1441301ef88457656e24f018bbb824f384ecd00866c45e8d&X-Amz-SignedHeaders=host&x-id=GetObject)
