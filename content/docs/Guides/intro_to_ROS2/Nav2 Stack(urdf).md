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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUV3OOS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAPL%2Bmv69nDYEeERQPnPhg2HcXFZ%2FYZ9%2FA1W9URCYHHUAiEAgM7AvHZ5l7n%2F6jas6cm4jNEYHOjIAmpG5j8Ku6ZNGPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI2ZxbYon%2FeVF8yE%2ByrcA8mSRoK8xfe9J%2B4chMlUoY0vo%2FdA7nqgQN3Zq7029hMS5AAG7pRz38VMx9TH6SiapYfQYdG%2B4crFj30VaIjFzJu6lWjXa2Cfjg43zSBG6eS7EHAxiWrkDWVQs%2BYIx0o3WlT%2FFK0ng%2BkcsykcRPWjoeqKewi3i2M9Zz1gYWXWr%2F7Mccgg5epikr%2BFuzzXUwgVDR823f62uRdJjOlXv4ajq0lQmdIbnx9e1dfffKZotv4ZLAeQpTyoyiaI28UfSVq8RRKa0Ylx555N353%2BrfKSP2sivYH2BCRQwf0PtN%2FKDa4f%2FL2Q5YNGbJr1Pbi2wczCmCPZiR1c1CePw13E1qsZLwVtO%2F1vzLf%2BKUWrTEg%2BnYKQV6B1O%2FTcvO7cBq4TPWwgho%2FP4nzULqPx9W%2FMwt4e5ZfSQjFOGbqATEubFEjqkgRUSs3jm52hrn1dmUQcf1KdKhd6CcjNaO7EItl0pozRGrG1CIQ3Ro9KMCNOBxuw%2F7NRfxEhIDHNQITnE97eAe5PsscL6EWwlzxgndrigtsbQOIUeFvMvdOQscYWZPfiyWbylOhJ9xnSVMJDjVsbhjGNYKr%2F6WJ0a%2BIER4Fpy%2FMj2iU0YtAawwmcge4Ziis7i7WAGoJoisXlvGP3nUyQMOzDxb0GOqUB6Y5r4FduA87M2oqcXsWrvcS85y0T1hfpDlfRb79%2BIpMVQ8IXLHvG%2BQvSWrp1ACFEWpREtWEra9aBJR89RlFV0Liy%2FtT5TLZb%2Bv%2FG5D9%2BzgI0tpgVM%2FzDCW83G9bd%2BE5Kcpg0q%2BdhoIu1CTYWLQG6jsxUEz5pJi3KvAZ8MGVhxhlN6ZwccWag4t76fZ2vxRvgJT48NKruO4fV8QvtiRTWfkwtqa8p&X-Amz-Signature=ecd3a1949a3ed4968c5467af0da8f9f2b1241bed2a14ec2f35aa9c7d07ec291b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUV3OOS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAPL%2Bmv69nDYEeERQPnPhg2HcXFZ%2FYZ9%2FA1W9URCYHHUAiEAgM7AvHZ5l7n%2F6jas6cm4jNEYHOjIAmpG5j8Ku6ZNGPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI2ZxbYon%2FeVF8yE%2ByrcA8mSRoK8xfe9J%2B4chMlUoY0vo%2FdA7nqgQN3Zq7029hMS5AAG7pRz38VMx9TH6SiapYfQYdG%2B4crFj30VaIjFzJu6lWjXa2Cfjg43zSBG6eS7EHAxiWrkDWVQs%2BYIx0o3WlT%2FFK0ng%2BkcsykcRPWjoeqKewi3i2M9Zz1gYWXWr%2F7Mccgg5epikr%2BFuzzXUwgVDR823f62uRdJjOlXv4ajq0lQmdIbnx9e1dfffKZotv4ZLAeQpTyoyiaI28UfSVq8RRKa0Ylx555N353%2BrfKSP2sivYH2BCRQwf0PtN%2FKDa4f%2FL2Q5YNGbJr1Pbi2wczCmCPZiR1c1CePw13E1qsZLwVtO%2F1vzLf%2BKUWrTEg%2BnYKQV6B1O%2FTcvO7cBq4TPWwgho%2FP4nzULqPx9W%2FMwt4e5ZfSQjFOGbqATEubFEjqkgRUSs3jm52hrn1dmUQcf1KdKhd6CcjNaO7EItl0pozRGrG1CIQ3Ro9KMCNOBxuw%2F7NRfxEhIDHNQITnE97eAe5PsscL6EWwlzxgndrigtsbQOIUeFvMvdOQscYWZPfiyWbylOhJ9xnSVMJDjVsbhjGNYKr%2F6WJ0a%2BIER4Fpy%2FMj2iU0YtAawwmcge4Ziis7i7WAGoJoisXlvGP3nUyQMOzDxb0GOqUB6Y5r4FduA87M2oqcXsWrvcS85y0T1hfpDlfRb79%2BIpMVQ8IXLHvG%2BQvSWrp1ACFEWpREtWEra9aBJR89RlFV0Liy%2FtT5TLZb%2Bv%2FG5D9%2BzgI0tpgVM%2FzDCW83G9bd%2BE5Kcpg0q%2BdhoIu1CTYWLQG6jsxUEz5pJi3KvAZ8MGVhxhlN6ZwccWag4t76fZ2vxRvgJT48NKruO4fV8QvtiRTWfkwtqa8p&X-Amz-Signature=b78b2295fb0ea825673bc8e6ff596f8629fa00a1d9754186c3d367db204e1ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUV3OOS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAPL%2Bmv69nDYEeERQPnPhg2HcXFZ%2FYZ9%2FA1W9URCYHHUAiEAgM7AvHZ5l7n%2F6jas6cm4jNEYHOjIAmpG5j8Ku6ZNGPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI2ZxbYon%2FeVF8yE%2ByrcA8mSRoK8xfe9J%2B4chMlUoY0vo%2FdA7nqgQN3Zq7029hMS5AAG7pRz38VMx9TH6SiapYfQYdG%2B4crFj30VaIjFzJu6lWjXa2Cfjg43zSBG6eS7EHAxiWrkDWVQs%2BYIx0o3WlT%2FFK0ng%2BkcsykcRPWjoeqKewi3i2M9Zz1gYWXWr%2F7Mccgg5epikr%2BFuzzXUwgVDR823f62uRdJjOlXv4ajq0lQmdIbnx9e1dfffKZotv4ZLAeQpTyoyiaI28UfSVq8RRKa0Ylx555N353%2BrfKSP2sivYH2BCRQwf0PtN%2FKDa4f%2FL2Q5YNGbJr1Pbi2wczCmCPZiR1c1CePw13E1qsZLwVtO%2F1vzLf%2BKUWrTEg%2BnYKQV6B1O%2FTcvO7cBq4TPWwgho%2FP4nzULqPx9W%2FMwt4e5ZfSQjFOGbqATEubFEjqkgRUSs3jm52hrn1dmUQcf1KdKhd6CcjNaO7EItl0pozRGrG1CIQ3Ro9KMCNOBxuw%2F7NRfxEhIDHNQITnE97eAe5PsscL6EWwlzxgndrigtsbQOIUeFvMvdOQscYWZPfiyWbylOhJ9xnSVMJDjVsbhjGNYKr%2F6WJ0a%2BIER4Fpy%2FMj2iU0YtAawwmcge4Ziis7i7WAGoJoisXlvGP3nUyQMOzDxb0GOqUB6Y5r4FduA87M2oqcXsWrvcS85y0T1hfpDlfRb79%2BIpMVQ8IXLHvG%2BQvSWrp1ACFEWpREtWEra9aBJR89RlFV0Liy%2FtT5TLZb%2Bv%2FG5D9%2BzgI0tpgVM%2FzDCW83G9bd%2BE5Kcpg0q%2BdhoIu1CTYWLQG6jsxUEz5pJi3KvAZ8MGVhxhlN6ZwccWag4t76fZ2vxRvgJT48NKruO4fV8QvtiRTWfkwtqa8p&X-Amz-Signature=d04f2a437e2a17fee84c7b36394ea18a6410675540053ede15cd74f6af54397b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUV3OOS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAPL%2Bmv69nDYEeERQPnPhg2HcXFZ%2FYZ9%2FA1W9URCYHHUAiEAgM7AvHZ5l7n%2F6jas6cm4jNEYHOjIAmpG5j8Ku6ZNGPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI2ZxbYon%2FeVF8yE%2ByrcA8mSRoK8xfe9J%2B4chMlUoY0vo%2FdA7nqgQN3Zq7029hMS5AAG7pRz38VMx9TH6SiapYfQYdG%2B4crFj30VaIjFzJu6lWjXa2Cfjg43zSBG6eS7EHAxiWrkDWVQs%2BYIx0o3WlT%2FFK0ng%2BkcsykcRPWjoeqKewi3i2M9Zz1gYWXWr%2F7Mccgg5epikr%2BFuzzXUwgVDR823f62uRdJjOlXv4ajq0lQmdIbnx9e1dfffKZotv4ZLAeQpTyoyiaI28UfSVq8RRKa0Ylx555N353%2BrfKSP2sivYH2BCRQwf0PtN%2FKDa4f%2FL2Q5YNGbJr1Pbi2wczCmCPZiR1c1CePw13E1qsZLwVtO%2F1vzLf%2BKUWrTEg%2BnYKQV6B1O%2FTcvO7cBq4TPWwgho%2FP4nzULqPx9W%2FMwt4e5ZfSQjFOGbqATEubFEjqkgRUSs3jm52hrn1dmUQcf1KdKhd6CcjNaO7EItl0pozRGrG1CIQ3Ro9KMCNOBxuw%2F7NRfxEhIDHNQITnE97eAe5PsscL6EWwlzxgndrigtsbQOIUeFvMvdOQscYWZPfiyWbylOhJ9xnSVMJDjVsbhjGNYKr%2F6WJ0a%2BIER4Fpy%2FMj2iU0YtAawwmcge4Ziis7i7WAGoJoisXlvGP3nUyQMOzDxb0GOqUB6Y5r4FduA87M2oqcXsWrvcS85y0T1hfpDlfRb79%2BIpMVQ8IXLHvG%2BQvSWrp1ACFEWpREtWEra9aBJR89RlFV0Liy%2FtT5TLZb%2Bv%2FG5D9%2BzgI0tpgVM%2FzDCW83G9bd%2BE5Kcpg0q%2BdhoIu1CTYWLQG6jsxUEz5pJi3KvAZ8MGVhxhlN6ZwccWag4t76fZ2vxRvgJT48NKruO4fV8QvtiRTWfkwtqa8p&X-Amz-Signature=6346f6c6946913a840988c26564bcec637a0cd9928af977cf22207d46452bbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUV3OOS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAPL%2Bmv69nDYEeERQPnPhg2HcXFZ%2FYZ9%2FA1W9URCYHHUAiEAgM7AvHZ5l7n%2F6jas6cm4jNEYHOjIAmpG5j8Ku6ZNGPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI2ZxbYon%2FeVF8yE%2ByrcA8mSRoK8xfe9J%2B4chMlUoY0vo%2FdA7nqgQN3Zq7029hMS5AAG7pRz38VMx9TH6SiapYfQYdG%2B4crFj30VaIjFzJu6lWjXa2Cfjg43zSBG6eS7EHAxiWrkDWVQs%2BYIx0o3WlT%2FFK0ng%2BkcsykcRPWjoeqKewi3i2M9Zz1gYWXWr%2F7Mccgg5epikr%2BFuzzXUwgVDR823f62uRdJjOlXv4ajq0lQmdIbnx9e1dfffKZotv4ZLAeQpTyoyiaI28UfSVq8RRKa0Ylx555N353%2BrfKSP2sivYH2BCRQwf0PtN%2FKDa4f%2FL2Q5YNGbJr1Pbi2wczCmCPZiR1c1CePw13E1qsZLwVtO%2F1vzLf%2BKUWrTEg%2BnYKQV6B1O%2FTcvO7cBq4TPWwgho%2FP4nzULqPx9W%2FMwt4e5ZfSQjFOGbqATEubFEjqkgRUSs3jm52hrn1dmUQcf1KdKhd6CcjNaO7EItl0pozRGrG1CIQ3Ro9KMCNOBxuw%2F7NRfxEhIDHNQITnE97eAe5PsscL6EWwlzxgndrigtsbQOIUeFvMvdOQscYWZPfiyWbylOhJ9xnSVMJDjVsbhjGNYKr%2F6WJ0a%2BIER4Fpy%2FMj2iU0YtAawwmcge4Ziis7i7WAGoJoisXlvGP3nUyQMOzDxb0GOqUB6Y5r4FduA87M2oqcXsWrvcS85y0T1hfpDlfRb79%2BIpMVQ8IXLHvG%2BQvSWrp1ACFEWpREtWEra9aBJR89RlFV0Liy%2FtT5TLZb%2Bv%2FG5D9%2BzgI0tpgVM%2FzDCW83G9bd%2BE5Kcpg0q%2BdhoIu1CTYWLQG6jsxUEz5pJi3KvAZ8MGVhxhlN6ZwccWag4t76fZ2vxRvgJT48NKruO4fV8QvtiRTWfkwtqa8p&X-Amz-Signature=d5a74eadd0b9023a37edcc23e7e536bd5b97980d2a10921cc151e91bf68bb64d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUV3OOS%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAPL%2Bmv69nDYEeERQPnPhg2HcXFZ%2FYZ9%2FA1W9URCYHHUAiEAgM7AvHZ5l7n%2F6jas6cm4jNEYHOjIAmpG5j8Ku6ZNGPUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDI2ZxbYon%2FeVF8yE%2ByrcA8mSRoK8xfe9J%2B4chMlUoY0vo%2FdA7nqgQN3Zq7029hMS5AAG7pRz38VMx9TH6SiapYfQYdG%2B4crFj30VaIjFzJu6lWjXa2Cfjg43zSBG6eS7EHAxiWrkDWVQs%2BYIx0o3WlT%2FFK0ng%2BkcsykcRPWjoeqKewi3i2M9Zz1gYWXWr%2F7Mccgg5epikr%2BFuzzXUwgVDR823f62uRdJjOlXv4ajq0lQmdIbnx9e1dfffKZotv4ZLAeQpTyoyiaI28UfSVq8RRKa0Ylx555N353%2BrfKSP2sivYH2BCRQwf0PtN%2FKDa4f%2FL2Q5YNGbJr1Pbi2wczCmCPZiR1c1CePw13E1qsZLwVtO%2F1vzLf%2BKUWrTEg%2BnYKQV6B1O%2FTcvO7cBq4TPWwgho%2FP4nzULqPx9W%2FMwt4e5ZfSQjFOGbqATEubFEjqkgRUSs3jm52hrn1dmUQcf1KdKhd6CcjNaO7EItl0pozRGrG1CIQ3Ro9KMCNOBxuw%2F7NRfxEhIDHNQITnE97eAe5PsscL6EWwlzxgndrigtsbQOIUeFvMvdOQscYWZPfiyWbylOhJ9xnSVMJDjVsbhjGNYKr%2F6WJ0a%2BIER4Fpy%2FMj2iU0YtAawwmcge4Ziis7i7WAGoJoisXlvGP3nUyQMOzDxb0GOqUB6Y5r4FduA87M2oqcXsWrvcS85y0T1hfpDlfRb79%2BIpMVQ8IXLHvG%2BQvSWrp1ACFEWpREtWEra9aBJR89RlFV0Liy%2FtT5TLZb%2Bv%2FG5D9%2BzgI0tpgVM%2FzDCW83G9bd%2BE5Kcpg0q%2BdhoIu1CTYWLQG6jsxUEz5pJi3KvAZ8MGVhxhlN6ZwccWag4t76fZ2vxRvgJT48NKruO4fV8QvtiRTWfkwtqa8p&X-Amz-Signature=1e58d0fe815dec7dfc5aea13aa9c4c14062516312c91b7f85004bf2cf4a959fe&X-Amz-SignedHeaders=host&x-id=GetObject)
