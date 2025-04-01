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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5SPMY7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD5E%2FwaH1erp6FmiHpD8hgCpmJ4KukF2%2BT0qlL7x7SrjgIhALiqA2bC9I1JZZeoMPWWT2h%2BWZmO75EnOcCIpXbVi5wcKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl6FNK86MxREaFgzIq3AMDqk9j1%2Bia1Iaf81%2FF54r7P24ajTun1LKP9PRmLRf4eP8OSumBad680q2kpcVqp%2B0XTHX2OdYFeBcv%2Byn5nZP38tpiaFLLCP%2Bv4QIK8irbnF9ypFvqf4uTs3Z5a0hdV0RDdWnXyU%2Fy5D1zA7X0UFrL1L2pF4ZpN0DH5YbiUPVEr36iCvODlJHKpTG3XR3H813EARAnTbuWIe6CJ7pK8nsNjO1DdQJWlXn6lKP69F6VbzA%2FHRVD67o5qLj3Q1CKUHirVr8tq5%2B1rhtOXCmx8bgKH5W4AJLhy%2B8%2FbwhW6lxUbCHw2K7HuHixpZ93q%2Bl%2FdCpmcCH9us%2FKfYhGcF18CEs%2FotxR9l4o3e8GdfB5s7o%2BQp7%2BHPJFpqEVQecErlrE8mG6VbFP%2FJkIyqeWh3HiLWZCxeZ2R71%2BPeib%2FBQ%2FrGdvw0%2BTVtKvIMPJHpH3uNc%2F5pThixv3urfkYs8rtVYeh7NtQxI6AIOQQ6I3H0ZtlDBsJ3yeDpPEdtv4HWyPsQU54t1FcHM9otl4uBfGSsETsvBcTyBSfSzta5%2FxKB5Pz%2B1IPHRJGbUWi19DH%2B3YedCTGphpkawQy83bRn5LANKktJKNeq%2Fz80yXFY4oTPS2w6pL4idf8YA1WX7AsnFtGzC5pK2%2FBjqkAaEm7bm9k83sim%2FbQ6Ga2bNjaS8TP%2BQNDRfc79xtIR0nhT%2B989uRq3%2Bwy%2BT7%2FHWA9pzLL6MoUtY1p0blsPPoT2YEI7NlC9wuPfxGGgsbZZKHPClqj7iub%2BmulwAOLrftBvlpLU9qnNsjihzLgCm9AVIVImcpO06GVSDE7%2FIKKzOkSSkf6gh4G78FCVo%2FtLZFgmjrZkQcjubOOubdsJSKedUtLQAS&X-Amz-Signature=089ac4bafd6548aa6b2c6ac89a61a85dce89257f280ab56cce97bf925ecef1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5SPMY7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD5E%2FwaH1erp6FmiHpD8hgCpmJ4KukF2%2BT0qlL7x7SrjgIhALiqA2bC9I1JZZeoMPWWT2h%2BWZmO75EnOcCIpXbVi5wcKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl6FNK86MxREaFgzIq3AMDqk9j1%2Bia1Iaf81%2FF54r7P24ajTun1LKP9PRmLRf4eP8OSumBad680q2kpcVqp%2B0XTHX2OdYFeBcv%2Byn5nZP38tpiaFLLCP%2Bv4QIK8irbnF9ypFvqf4uTs3Z5a0hdV0RDdWnXyU%2Fy5D1zA7X0UFrL1L2pF4ZpN0DH5YbiUPVEr36iCvODlJHKpTG3XR3H813EARAnTbuWIe6CJ7pK8nsNjO1DdQJWlXn6lKP69F6VbzA%2FHRVD67o5qLj3Q1CKUHirVr8tq5%2B1rhtOXCmx8bgKH5W4AJLhy%2B8%2FbwhW6lxUbCHw2K7HuHixpZ93q%2Bl%2FdCpmcCH9us%2FKfYhGcF18CEs%2FotxR9l4o3e8GdfB5s7o%2BQp7%2BHPJFpqEVQecErlrE8mG6VbFP%2FJkIyqeWh3HiLWZCxeZ2R71%2BPeib%2FBQ%2FrGdvw0%2BTVtKvIMPJHpH3uNc%2F5pThixv3urfkYs8rtVYeh7NtQxI6AIOQQ6I3H0ZtlDBsJ3yeDpPEdtv4HWyPsQU54t1FcHM9otl4uBfGSsETsvBcTyBSfSzta5%2FxKB5Pz%2B1IPHRJGbUWi19DH%2B3YedCTGphpkawQy83bRn5LANKktJKNeq%2Fz80yXFY4oTPS2w6pL4idf8YA1WX7AsnFtGzC5pK2%2FBjqkAaEm7bm9k83sim%2FbQ6Ga2bNjaS8TP%2BQNDRfc79xtIR0nhT%2B989uRq3%2Bwy%2BT7%2FHWA9pzLL6MoUtY1p0blsPPoT2YEI7NlC9wuPfxGGgsbZZKHPClqj7iub%2BmulwAOLrftBvlpLU9qnNsjihzLgCm9AVIVImcpO06GVSDE7%2FIKKzOkSSkf6gh4G78FCVo%2FtLZFgmjrZkQcjubOOubdsJSKedUtLQAS&X-Amz-Signature=3274f67dc642aa0d910cf754c70018d8c50c52228338358b9e5940e1a7597866&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5SPMY7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD5E%2FwaH1erp6FmiHpD8hgCpmJ4KukF2%2BT0qlL7x7SrjgIhALiqA2bC9I1JZZeoMPWWT2h%2BWZmO75EnOcCIpXbVi5wcKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl6FNK86MxREaFgzIq3AMDqk9j1%2Bia1Iaf81%2FF54r7P24ajTun1LKP9PRmLRf4eP8OSumBad680q2kpcVqp%2B0XTHX2OdYFeBcv%2Byn5nZP38tpiaFLLCP%2Bv4QIK8irbnF9ypFvqf4uTs3Z5a0hdV0RDdWnXyU%2Fy5D1zA7X0UFrL1L2pF4ZpN0DH5YbiUPVEr36iCvODlJHKpTG3XR3H813EARAnTbuWIe6CJ7pK8nsNjO1DdQJWlXn6lKP69F6VbzA%2FHRVD67o5qLj3Q1CKUHirVr8tq5%2B1rhtOXCmx8bgKH5W4AJLhy%2B8%2FbwhW6lxUbCHw2K7HuHixpZ93q%2Bl%2FdCpmcCH9us%2FKfYhGcF18CEs%2FotxR9l4o3e8GdfB5s7o%2BQp7%2BHPJFpqEVQecErlrE8mG6VbFP%2FJkIyqeWh3HiLWZCxeZ2R71%2BPeib%2FBQ%2FrGdvw0%2BTVtKvIMPJHpH3uNc%2F5pThixv3urfkYs8rtVYeh7NtQxI6AIOQQ6I3H0ZtlDBsJ3yeDpPEdtv4HWyPsQU54t1FcHM9otl4uBfGSsETsvBcTyBSfSzta5%2FxKB5Pz%2B1IPHRJGbUWi19DH%2B3YedCTGphpkawQy83bRn5LANKktJKNeq%2Fz80yXFY4oTPS2w6pL4idf8YA1WX7AsnFtGzC5pK2%2FBjqkAaEm7bm9k83sim%2FbQ6Ga2bNjaS8TP%2BQNDRfc79xtIR0nhT%2B989uRq3%2Bwy%2BT7%2FHWA9pzLL6MoUtY1p0blsPPoT2YEI7NlC9wuPfxGGgsbZZKHPClqj7iub%2BmulwAOLrftBvlpLU9qnNsjihzLgCm9AVIVImcpO06GVSDE7%2FIKKzOkSSkf6gh4G78FCVo%2FtLZFgmjrZkQcjubOOubdsJSKedUtLQAS&X-Amz-Signature=afdfb746f7b06884eb97ec0035caf8986fdd4f9ba6f8f027ad58b7ccf53e95b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5SPMY7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD5E%2FwaH1erp6FmiHpD8hgCpmJ4KukF2%2BT0qlL7x7SrjgIhALiqA2bC9I1JZZeoMPWWT2h%2BWZmO75EnOcCIpXbVi5wcKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl6FNK86MxREaFgzIq3AMDqk9j1%2Bia1Iaf81%2FF54r7P24ajTun1LKP9PRmLRf4eP8OSumBad680q2kpcVqp%2B0XTHX2OdYFeBcv%2Byn5nZP38tpiaFLLCP%2Bv4QIK8irbnF9ypFvqf4uTs3Z5a0hdV0RDdWnXyU%2Fy5D1zA7X0UFrL1L2pF4ZpN0DH5YbiUPVEr36iCvODlJHKpTG3XR3H813EARAnTbuWIe6CJ7pK8nsNjO1DdQJWlXn6lKP69F6VbzA%2FHRVD67o5qLj3Q1CKUHirVr8tq5%2B1rhtOXCmx8bgKH5W4AJLhy%2B8%2FbwhW6lxUbCHw2K7HuHixpZ93q%2Bl%2FdCpmcCH9us%2FKfYhGcF18CEs%2FotxR9l4o3e8GdfB5s7o%2BQp7%2BHPJFpqEVQecErlrE8mG6VbFP%2FJkIyqeWh3HiLWZCxeZ2R71%2BPeib%2FBQ%2FrGdvw0%2BTVtKvIMPJHpH3uNc%2F5pThixv3urfkYs8rtVYeh7NtQxI6AIOQQ6I3H0ZtlDBsJ3yeDpPEdtv4HWyPsQU54t1FcHM9otl4uBfGSsETsvBcTyBSfSzta5%2FxKB5Pz%2B1IPHRJGbUWi19DH%2B3YedCTGphpkawQy83bRn5LANKktJKNeq%2Fz80yXFY4oTPS2w6pL4idf8YA1WX7AsnFtGzC5pK2%2FBjqkAaEm7bm9k83sim%2FbQ6Ga2bNjaS8TP%2BQNDRfc79xtIR0nhT%2B989uRq3%2Bwy%2BT7%2FHWA9pzLL6MoUtY1p0blsPPoT2YEI7NlC9wuPfxGGgsbZZKHPClqj7iub%2BmulwAOLrftBvlpLU9qnNsjihzLgCm9AVIVImcpO06GVSDE7%2FIKKzOkSSkf6gh4G78FCVo%2FtLZFgmjrZkQcjubOOubdsJSKedUtLQAS&X-Amz-Signature=030ed359ab994b77000d6a9e3d6a58f725f28c5c8a592f5fedad993e36fb92ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5SPMY7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD5E%2FwaH1erp6FmiHpD8hgCpmJ4KukF2%2BT0qlL7x7SrjgIhALiqA2bC9I1JZZeoMPWWT2h%2BWZmO75EnOcCIpXbVi5wcKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl6FNK86MxREaFgzIq3AMDqk9j1%2Bia1Iaf81%2FF54r7P24ajTun1LKP9PRmLRf4eP8OSumBad680q2kpcVqp%2B0XTHX2OdYFeBcv%2Byn5nZP38tpiaFLLCP%2Bv4QIK8irbnF9ypFvqf4uTs3Z5a0hdV0RDdWnXyU%2Fy5D1zA7X0UFrL1L2pF4ZpN0DH5YbiUPVEr36iCvODlJHKpTG3XR3H813EARAnTbuWIe6CJ7pK8nsNjO1DdQJWlXn6lKP69F6VbzA%2FHRVD67o5qLj3Q1CKUHirVr8tq5%2B1rhtOXCmx8bgKH5W4AJLhy%2B8%2FbwhW6lxUbCHw2K7HuHixpZ93q%2Bl%2FdCpmcCH9us%2FKfYhGcF18CEs%2FotxR9l4o3e8GdfB5s7o%2BQp7%2BHPJFpqEVQecErlrE8mG6VbFP%2FJkIyqeWh3HiLWZCxeZ2R71%2BPeib%2FBQ%2FrGdvw0%2BTVtKvIMPJHpH3uNc%2F5pThixv3urfkYs8rtVYeh7NtQxI6AIOQQ6I3H0ZtlDBsJ3yeDpPEdtv4HWyPsQU54t1FcHM9otl4uBfGSsETsvBcTyBSfSzta5%2FxKB5Pz%2B1IPHRJGbUWi19DH%2B3YedCTGphpkawQy83bRn5LANKktJKNeq%2Fz80yXFY4oTPS2w6pL4idf8YA1WX7AsnFtGzC5pK2%2FBjqkAaEm7bm9k83sim%2FbQ6Ga2bNjaS8TP%2BQNDRfc79xtIR0nhT%2B989uRq3%2Bwy%2BT7%2FHWA9pzLL6MoUtY1p0blsPPoT2YEI7NlC9wuPfxGGgsbZZKHPClqj7iub%2BmulwAOLrftBvlpLU9qnNsjihzLgCm9AVIVImcpO06GVSDE7%2FIKKzOkSSkf6gh4G78FCVo%2FtLZFgmjrZkQcjubOOubdsJSKedUtLQAS&X-Amz-Signature=97cc497d5570fcb8ca733a9f17aed4d08a6c74ba6ff66d7e833f2f5d3a15d2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO5SPMY7%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQD5E%2FwaH1erp6FmiHpD8hgCpmJ4KukF2%2BT0qlL7x7SrjgIhALiqA2bC9I1JZZeoMPWWT2h%2BWZmO75EnOcCIpXbVi5wcKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl6FNK86MxREaFgzIq3AMDqk9j1%2Bia1Iaf81%2FF54r7P24ajTun1LKP9PRmLRf4eP8OSumBad680q2kpcVqp%2B0XTHX2OdYFeBcv%2Byn5nZP38tpiaFLLCP%2Bv4QIK8irbnF9ypFvqf4uTs3Z5a0hdV0RDdWnXyU%2Fy5D1zA7X0UFrL1L2pF4ZpN0DH5YbiUPVEr36iCvODlJHKpTG3XR3H813EARAnTbuWIe6CJ7pK8nsNjO1DdQJWlXn6lKP69F6VbzA%2FHRVD67o5qLj3Q1CKUHirVr8tq5%2B1rhtOXCmx8bgKH5W4AJLhy%2B8%2FbwhW6lxUbCHw2K7HuHixpZ93q%2Bl%2FdCpmcCH9us%2FKfYhGcF18CEs%2FotxR9l4o3e8GdfB5s7o%2BQp7%2BHPJFpqEVQecErlrE8mG6VbFP%2FJkIyqeWh3HiLWZCxeZ2R71%2BPeib%2FBQ%2FrGdvw0%2BTVtKvIMPJHpH3uNc%2F5pThixv3urfkYs8rtVYeh7NtQxI6AIOQQ6I3H0ZtlDBsJ3yeDpPEdtv4HWyPsQU54t1FcHM9otl4uBfGSsETsvBcTyBSfSzta5%2FxKB5Pz%2B1IPHRJGbUWi19DH%2B3YedCTGphpkawQy83bRn5LANKktJKNeq%2Fz80yXFY4oTPS2w6pL4idf8YA1WX7AsnFtGzC5pK2%2FBjqkAaEm7bm9k83sim%2FbQ6Ga2bNjaS8TP%2BQNDRfc79xtIR0nhT%2B989uRq3%2Bwy%2BT7%2FHWA9pzLL6MoUtY1p0blsPPoT2YEI7NlC9wuPfxGGgsbZZKHPClqj7iub%2BmulwAOLrftBvlpLU9qnNsjihzLgCm9AVIVImcpO06GVSDE7%2FIKKzOkSSkf6gh4G78FCVo%2FtLZFgmjrZkQcjubOOubdsJSKedUtLQAS&X-Amz-Signature=a2ae7bfebf1106fd9575235e70f40b15e7df4bd9553d4f0c524cb2d491ec1176&X-Amz-SignedHeaders=host&x-id=GetObject)
