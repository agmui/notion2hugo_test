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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBGGVSM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICtmdXjBzxOv6%2BbXRddtvmlMFNeQv9wzy1coCwkpBuUdAiBpT26aUgppHf2bUCAKiosMbOV%2BMryDI56Ktun%2BEuMmLiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2algpyuedGKhnjlPKtwDrUkltJ1xgnXaEYgWr1L7ZNeAvXGak4niT6AxMph8cfzR%2B7Y4UofxTZJPqKKQcnxg6vR6KXFDxIBikkhAER0NKLnImDi13nBx1qd81w7XNauhvpoLut6vfjdxgLH9T5l%2FhyHlzu4bEBlFLwaJ47VO2glr5UvX9k0yCWTPS8nJKz%2FzkUbnHWYLOckoVt5vmzeeEBfrJAKDAZysM8%2B55lGv9CH4vta0IB5bRNhBeGLgwr5WwbSHkHspE%2Fgz6pIQ9c4bdSLELU0edqV90rATk66bzi7nvd5rbmXTOlEJWILIUfur4DzDNc%2BWOT09txL7TYq7YpX2ymUdnMmGBCn4LCBRWyihIYr3V9f0gwrc8DLi9mQ2VwmsbuWIaMyuS8qTX%2FJli8KQ%2Fa4mI9dDX%2FFbUV%2B5KBgVn1C4BeJ6zikF%2BZzpYkbAzDVtkXEH0eeLYQNegRn5XymFk3ah7j0mi784z%2BZwxVDndTAjmR2jn3J%2F%2Fda8aYealluFz%2FDItrqoxEW7O8jYwn4W9emXsFZ2l0eQ0Es0WfIVVB%2BIfMLnUgtstqOxK%2F1dnr2Tw8OPzh%2FwB4kvrtSMQMoprfOjVcHkPS%2BM0XaNA8jnk%2FuXVvyH1c9Fq3lkG1o9q%2FmjdWmYsmfPVfIwg%2BuUwAY6pgFkJAXP0zT5anIvos3z9J90nIftpmBX1ozYtYSLM52NvMNgMHGpTMoPURBr5Jzm5%2B3hpV8sjeRKFPKE%2BTy7BRyS4%2F2tLTiW763kuT1ARAsBh6VFVS0QtgAb4JbvWhK1nGVcZaOL1Ge39cFfbNWol7%2F9RwsID8%2BHkv4ZtQaLS2fHWW%2BoasPGX6V8IBYG2N9qYnnsOO2BqEl5%2BdVaASWaTjzXpOWImVle&X-Amz-Signature=8d95476e48c2c9386b4b6be9a7bbee40e228255b793f59c52c28fd3171f99c44&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBGGVSM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICtmdXjBzxOv6%2BbXRddtvmlMFNeQv9wzy1coCwkpBuUdAiBpT26aUgppHf2bUCAKiosMbOV%2BMryDI56Ktun%2BEuMmLiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2algpyuedGKhnjlPKtwDrUkltJ1xgnXaEYgWr1L7ZNeAvXGak4niT6AxMph8cfzR%2B7Y4UofxTZJPqKKQcnxg6vR6KXFDxIBikkhAER0NKLnImDi13nBx1qd81w7XNauhvpoLut6vfjdxgLH9T5l%2FhyHlzu4bEBlFLwaJ47VO2glr5UvX9k0yCWTPS8nJKz%2FzkUbnHWYLOckoVt5vmzeeEBfrJAKDAZysM8%2B55lGv9CH4vta0IB5bRNhBeGLgwr5WwbSHkHspE%2Fgz6pIQ9c4bdSLELU0edqV90rATk66bzi7nvd5rbmXTOlEJWILIUfur4DzDNc%2BWOT09txL7TYq7YpX2ymUdnMmGBCn4LCBRWyihIYr3V9f0gwrc8DLi9mQ2VwmsbuWIaMyuS8qTX%2FJli8KQ%2Fa4mI9dDX%2FFbUV%2B5KBgVn1C4BeJ6zikF%2BZzpYkbAzDVtkXEH0eeLYQNegRn5XymFk3ah7j0mi784z%2BZwxVDndTAjmR2jn3J%2F%2Fda8aYealluFz%2FDItrqoxEW7O8jYwn4W9emXsFZ2l0eQ0Es0WfIVVB%2BIfMLnUgtstqOxK%2F1dnr2Tw8OPzh%2FwB4kvrtSMQMoprfOjVcHkPS%2BM0XaNA8jnk%2FuXVvyH1c9Fq3lkG1o9q%2FmjdWmYsmfPVfIwg%2BuUwAY6pgFkJAXP0zT5anIvos3z9J90nIftpmBX1ozYtYSLM52NvMNgMHGpTMoPURBr5Jzm5%2B3hpV8sjeRKFPKE%2BTy7BRyS4%2F2tLTiW763kuT1ARAsBh6VFVS0QtgAb4JbvWhK1nGVcZaOL1Ge39cFfbNWol7%2F9RwsID8%2BHkv4ZtQaLS2fHWW%2BoasPGX6V8IBYG2N9qYnnsOO2BqEl5%2BdVaASWaTjzXpOWImVle&X-Amz-Signature=f0f9b23b4349d0a9346f6ff61c51cec320f85854284df518e0e870f285915331&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBGGVSM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICtmdXjBzxOv6%2BbXRddtvmlMFNeQv9wzy1coCwkpBuUdAiBpT26aUgppHf2bUCAKiosMbOV%2BMryDI56Ktun%2BEuMmLiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2algpyuedGKhnjlPKtwDrUkltJ1xgnXaEYgWr1L7ZNeAvXGak4niT6AxMph8cfzR%2B7Y4UofxTZJPqKKQcnxg6vR6KXFDxIBikkhAER0NKLnImDi13nBx1qd81w7XNauhvpoLut6vfjdxgLH9T5l%2FhyHlzu4bEBlFLwaJ47VO2glr5UvX9k0yCWTPS8nJKz%2FzkUbnHWYLOckoVt5vmzeeEBfrJAKDAZysM8%2B55lGv9CH4vta0IB5bRNhBeGLgwr5WwbSHkHspE%2Fgz6pIQ9c4bdSLELU0edqV90rATk66bzi7nvd5rbmXTOlEJWILIUfur4DzDNc%2BWOT09txL7TYq7YpX2ymUdnMmGBCn4LCBRWyihIYr3V9f0gwrc8DLi9mQ2VwmsbuWIaMyuS8qTX%2FJli8KQ%2Fa4mI9dDX%2FFbUV%2B5KBgVn1C4BeJ6zikF%2BZzpYkbAzDVtkXEH0eeLYQNegRn5XymFk3ah7j0mi784z%2BZwxVDndTAjmR2jn3J%2F%2Fda8aYealluFz%2FDItrqoxEW7O8jYwn4W9emXsFZ2l0eQ0Es0WfIVVB%2BIfMLnUgtstqOxK%2F1dnr2Tw8OPzh%2FwB4kvrtSMQMoprfOjVcHkPS%2BM0XaNA8jnk%2FuXVvyH1c9Fq3lkG1o9q%2FmjdWmYsmfPVfIwg%2BuUwAY6pgFkJAXP0zT5anIvos3z9J90nIftpmBX1ozYtYSLM52NvMNgMHGpTMoPURBr5Jzm5%2B3hpV8sjeRKFPKE%2BTy7BRyS4%2F2tLTiW763kuT1ARAsBh6VFVS0QtgAb4JbvWhK1nGVcZaOL1Ge39cFfbNWol7%2F9RwsID8%2BHkv4ZtQaLS2fHWW%2BoasPGX6V8IBYG2N9qYnnsOO2BqEl5%2BdVaASWaTjzXpOWImVle&X-Amz-Signature=8c7ed4ffc73e1c013bd1ee26e8612c2cb87fa262ab0c2322c685a7459974e959&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBGGVSM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICtmdXjBzxOv6%2BbXRddtvmlMFNeQv9wzy1coCwkpBuUdAiBpT26aUgppHf2bUCAKiosMbOV%2BMryDI56Ktun%2BEuMmLiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2algpyuedGKhnjlPKtwDrUkltJ1xgnXaEYgWr1L7ZNeAvXGak4niT6AxMph8cfzR%2B7Y4UofxTZJPqKKQcnxg6vR6KXFDxIBikkhAER0NKLnImDi13nBx1qd81w7XNauhvpoLut6vfjdxgLH9T5l%2FhyHlzu4bEBlFLwaJ47VO2glr5UvX9k0yCWTPS8nJKz%2FzkUbnHWYLOckoVt5vmzeeEBfrJAKDAZysM8%2B55lGv9CH4vta0IB5bRNhBeGLgwr5WwbSHkHspE%2Fgz6pIQ9c4bdSLELU0edqV90rATk66bzi7nvd5rbmXTOlEJWILIUfur4DzDNc%2BWOT09txL7TYq7YpX2ymUdnMmGBCn4LCBRWyihIYr3V9f0gwrc8DLi9mQ2VwmsbuWIaMyuS8qTX%2FJli8KQ%2Fa4mI9dDX%2FFbUV%2B5KBgVn1C4BeJ6zikF%2BZzpYkbAzDVtkXEH0eeLYQNegRn5XymFk3ah7j0mi784z%2BZwxVDndTAjmR2jn3J%2F%2Fda8aYealluFz%2FDItrqoxEW7O8jYwn4W9emXsFZ2l0eQ0Es0WfIVVB%2BIfMLnUgtstqOxK%2F1dnr2Tw8OPzh%2FwB4kvrtSMQMoprfOjVcHkPS%2BM0XaNA8jnk%2FuXVvyH1c9Fq3lkG1o9q%2FmjdWmYsmfPVfIwg%2BuUwAY6pgFkJAXP0zT5anIvos3z9J90nIftpmBX1ozYtYSLM52NvMNgMHGpTMoPURBr5Jzm5%2B3hpV8sjeRKFPKE%2BTy7BRyS4%2F2tLTiW763kuT1ARAsBh6VFVS0QtgAb4JbvWhK1nGVcZaOL1Ge39cFfbNWol7%2F9RwsID8%2BHkv4ZtQaLS2fHWW%2BoasPGX6V8IBYG2N9qYnnsOO2BqEl5%2BdVaASWaTjzXpOWImVle&X-Amz-Signature=04081e56b596f8636488ca0cd74499419c22078a2949ee4c0f172a3869e0c039&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBGGVSM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICtmdXjBzxOv6%2BbXRddtvmlMFNeQv9wzy1coCwkpBuUdAiBpT26aUgppHf2bUCAKiosMbOV%2BMryDI56Ktun%2BEuMmLiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2algpyuedGKhnjlPKtwDrUkltJ1xgnXaEYgWr1L7ZNeAvXGak4niT6AxMph8cfzR%2B7Y4UofxTZJPqKKQcnxg6vR6KXFDxIBikkhAER0NKLnImDi13nBx1qd81w7XNauhvpoLut6vfjdxgLH9T5l%2FhyHlzu4bEBlFLwaJ47VO2glr5UvX9k0yCWTPS8nJKz%2FzkUbnHWYLOckoVt5vmzeeEBfrJAKDAZysM8%2B55lGv9CH4vta0IB5bRNhBeGLgwr5WwbSHkHspE%2Fgz6pIQ9c4bdSLELU0edqV90rATk66bzi7nvd5rbmXTOlEJWILIUfur4DzDNc%2BWOT09txL7TYq7YpX2ymUdnMmGBCn4LCBRWyihIYr3V9f0gwrc8DLi9mQ2VwmsbuWIaMyuS8qTX%2FJli8KQ%2Fa4mI9dDX%2FFbUV%2B5KBgVn1C4BeJ6zikF%2BZzpYkbAzDVtkXEH0eeLYQNegRn5XymFk3ah7j0mi784z%2BZwxVDndTAjmR2jn3J%2F%2Fda8aYealluFz%2FDItrqoxEW7O8jYwn4W9emXsFZ2l0eQ0Es0WfIVVB%2BIfMLnUgtstqOxK%2F1dnr2Tw8OPzh%2FwB4kvrtSMQMoprfOjVcHkPS%2BM0XaNA8jnk%2FuXVvyH1c9Fq3lkG1o9q%2FmjdWmYsmfPVfIwg%2BuUwAY6pgFkJAXP0zT5anIvos3z9J90nIftpmBX1ozYtYSLM52NvMNgMHGpTMoPURBr5Jzm5%2B3hpV8sjeRKFPKE%2BTy7BRyS4%2F2tLTiW763kuT1ARAsBh6VFVS0QtgAb4JbvWhK1nGVcZaOL1Ge39cFfbNWol7%2F9RwsID8%2BHkv4ZtQaLS2fHWW%2BoasPGX6V8IBYG2N9qYnnsOO2BqEl5%2BdVaASWaTjzXpOWImVle&X-Amz-Signature=c88563134a85c54f2b83762f09ba8307d6ab83e4ad85e4986eeb36ef8b983f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZBGGVSM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICtmdXjBzxOv6%2BbXRddtvmlMFNeQv9wzy1coCwkpBuUdAiBpT26aUgppHf2bUCAKiosMbOV%2BMryDI56Ktun%2BEuMmLiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2algpyuedGKhnjlPKtwDrUkltJ1xgnXaEYgWr1L7ZNeAvXGak4niT6AxMph8cfzR%2B7Y4UofxTZJPqKKQcnxg6vR6KXFDxIBikkhAER0NKLnImDi13nBx1qd81w7XNauhvpoLut6vfjdxgLH9T5l%2FhyHlzu4bEBlFLwaJ47VO2glr5UvX9k0yCWTPS8nJKz%2FzkUbnHWYLOckoVt5vmzeeEBfrJAKDAZysM8%2B55lGv9CH4vta0IB5bRNhBeGLgwr5WwbSHkHspE%2Fgz6pIQ9c4bdSLELU0edqV90rATk66bzi7nvd5rbmXTOlEJWILIUfur4DzDNc%2BWOT09txL7TYq7YpX2ymUdnMmGBCn4LCBRWyihIYr3V9f0gwrc8DLi9mQ2VwmsbuWIaMyuS8qTX%2FJli8KQ%2Fa4mI9dDX%2FFbUV%2B5KBgVn1C4BeJ6zikF%2BZzpYkbAzDVtkXEH0eeLYQNegRn5XymFk3ah7j0mi784z%2BZwxVDndTAjmR2jn3J%2F%2Fda8aYealluFz%2FDItrqoxEW7O8jYwn4W9emXsFZ2l0eQ0Es0WfIVVB%2BIfMLnUgtstqOxK%2F1dnr2Tw8OPzh%2FwB4kvrtSMQMoprfOjVcHkPS%2BM0XaNA8jnk%2FuXVvyH1c9Fq3lkG1o9q%2FmjdWmYsmfPVfIwg%2BuUwAY6pgFkJAXP0zT5anIvos3z9J90nIftpmBX1ozYtYSLM52NvMNgMHGpTMoPURBr5Jzm5%2B3hpV8sjeRKFPKE%2BTy7BRyS4%2F2tLTiW763kuT1ARAsBh6VFVS0QtgAb4JbvWhK1nGVcZaOL1Ge39cFfbNWol7%2F9RwsID8%2BHkv4ZtQaLS2fHWW%2BoasPGX6V8IBYG2N9qYnnsOO2BqEl5%2BdVaASWaTjzXpOWImVle&X-Amz-Signature=ddeee9481dc0bda1ac14e0c2b8435f52917c5f644d971036bed4cc1114adfaa0&X-Amz-SignedHeaders=host&x-id=GetObject)
