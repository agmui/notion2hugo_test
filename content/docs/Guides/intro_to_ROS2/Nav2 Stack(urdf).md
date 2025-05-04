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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UN3NHB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBjlKPyZTGxLEWqr4mDYIqPxWJEFg9b7jk4Dy9wtb74AAiAxZcZcv4bVBUCGP7RBvzR2EUl8ETah5w%2BaZYPqeaZQaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWHvXCicosUuZUgBKtwDrqr4eY4FcBFJBDc4IuCGFOh6HoDsGdhZYiNAEkAzPlEr32GeNGuFMG7i4wbI2WObTUZEoc2SNQaovzrFr%2FXy9seNopB4i5KsS3m%2BeJrr3X39WU%2BnFl4chILrCN6mzhGyyM9LOBl2%2BKUW0qSSUysFrBmwfgNG1I6eod8WQmnYxzONGI9W9P2Jd%2F47jnY1BokghOElHzqunRkVFRyUR6l7Dt0uXdKRw8Q%2FoNCvaFP7sP5I5ptnnoOvj4nuwRRftQ2EPuXic2sEdVSzZc9Khu8kTARP5ISRolktQO78ACEb7Db6lkOJESPPvFwmNq9zSRpbr%2FU4PYxp7cuTW2vRPNMv68xyIhQu%2B7q7YCzCuNiqXPnKmns%2FlfR%2F5LJY8pTDMPEYwX7msxlYJslPPZ%2FwDouzuqpvHLW0DAch3NMgJKiyEbQETD9H4HcGb1flr2%2BZLypbRde4Sgupm%2B2lPc3x0fmY8NleSGMt7Mjoiti3OjTdbQruTI%2F571B6ETWBgnKY9fr3j7PRDOWFXpGS%2BFQi03ADyTF3Q%2F9CzhdkbtRrkyN%2BZr%2FPLSdmPY7HIer7kpw%2BIKARIfJo4USPyS8%2BBtu7qN%2F3kHlPfA3GRTeiLtofgH7xI7wVE2M8MB7HYAZkXLgwp%2BvbwAY6pgG%2BKOnyQ31JXxGygVGOwIAfZX8PG8fD4kExiU2U5%2F1gvzyYFXG1ULbYNhu9PzrJAhTcYSHR2zoDHAqERO2eCX%2BYLz3X0%2Fzli1bj92thapWJs%2FGrNzImYVV6GOdJfDN7Y99WvOUjqrG%2B%2Fhffd%2FSVzADXINv5JRrrPd7GbRqXvGWNO6%2BVDz%2F6h5pNDg4Q3L%2Fyz3A5vcgW4kC6BKpFyfd58ld1kkIt5La%2B&X-Amz-Signature=b5b02d007ed2dfcfe05fa280eae569c8325248de371e9f35654a903720bd9c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UN3NHB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBjlKPyZTGxLEWqr4mDYIqPxWJEFg9b7jk4Dy9wtb74AAiAxZcZcv4bVBUCGP7RBvzR2EUl8ETah5w%2BaZYPqeaZQaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWHvXCicosUuZUgBKtwDrqr4eY4FcBFJBDc4IuCGFOh6HoDsGdhZYiNAEkAzPlEr32GeNGuFMG7i4wbI2WObTUZEoc2SNQaovzrFr%2FXy9seNopB4i5KsS3m%2BeJrr3X39WU%2BnFl4chILrCN6mzhGyyM9LOBl2%2BKUW0qSSUysFrBmwfgNG1I6eod8WQmnYxzONGI9W9P2Jd%2F47jnY1BokghOElHzqunRkVFRyUR6l7Dt0uXdKRw8Q%2FoNCvaFP7sP5I5ptnnoOvj4nuwRRftQ2EPuXic2sEdVSzZc9Khu8kTARP5ISRolktQO78ACEb7Db6lkOJESPPvFwmNq9zSRpbr%2FU4PYxp7cuTW2vRPNMv68xyIhQu%2B7q7YCzCuNiqXPnKmns%2FlfR%2F5LJY8pTDMPEYwX7msxlYJslPPZ%2FwDouzuqpvHLW0DAch3NMgJKiyEbQETD9H4HcGb1flr2%2BZLypbRde4Sgupm%2B2lPc3x0fmY8NleSGMt7Mjoiti3OjTdbQruTI%2F571B6ETWBgnKY9fr3j7PRDOWFXpGS%2BFQi03ADyTF3Q%2F9CzhdkbtRrkyN%2BZr%2FPLSdmPY7HIer7kpw%2BIKARIfJo4USPyS8%2BBtu7qN%2F3kHlPfA3GRTeiLtofgH7xI7wVE2M8MB7HYAZkXLgwp%2BvbwAY6pgG%2BKOnyQ31JXxGygVGOwIAfZX8PG8fD4kExiU2U5%2F1gvzyYFXG1ULbYNhu9PzrJAhTcYSHR2zoDHAqERO2eCX%2BYLz3X0%2Fzli1bj92thapWJs%2FGrNzImYVV6GOdJfDN7Y99WvOUjqrG%2B%2Fhffd%2FSVzADXINv5JRrrPd7GbRqXvGWNO6%2BVDz%2F6h5pNDg4Q3L%2Fyz3A5vcgW4kC6BKpFyfd58ld1kkIt5La%2B&X-Amz-Signature=3d18d89278644df4b4c889751d99b9f6fdb62eb6f834be481fa506e703026d2f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UN3NHB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBjlKPyZTGxLEWqr4mDYIqPxWJEFg9b7jk4Dy9wtb74AAiAxZcZcv4bVBUCGP7RBvzR2EUl8ETah5w%2BaZYPqeaZQaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWHvXCicosUuZUgBKtwDrqr4eY4FcBFJBDc4IuCGFOh6HoDsGdhZYiNAEkAzPlEr32GeNGuFMG7i4wbI2WObTUZEoc2SNQaovzrFr%2FXy9seNopB4i5KsS3m%2BeJrr3X39WU%2BnFl4chILrCN6mzhGyyM9LOBl2%2BKUW0qSSUysFrBmwfgNG1I6eod8WQmnYxzONGI9W9P2Jd%2F47jnY1BokghOElHzqunRkVFRyUR6l7Dt0uXdKRw8Q%2FoNCvaFP7sP5I5ptnnoOvj4nuwRRftQ2EPuXic2sEdVSzZc9Khu8kTARP5ISRolktQO78ACEb7Db6lkOJESPPvFwmNq9zSRpbr%2FU4PYxp7cuTW2vRPNMv68xyIhQu%2B7q7YCzCuNiqXPnKmns%2FlfR%2F5LJY8pTDMPEYwX7msxlYJslPPZ%2FwDouzuqpvHLW0DAch3NMgJKiyEbQETD9H4HcGb1flr2%2BZLypbRde4Sgupm%2B2lPc3x0fmY8NleSGMt7Mjoiti3OjTdbQruTI%2F571B6ETWBgnKY9fr3j7PRDOWFXpGS%2BFQi03ADyTF3Q%2F9CzhdkbtRrkyN%2BZr%2FPLSdmPY7HIer7kpw%2BIKARIfJo4USPyS8%2BBtu7qN%2F3kHlPfA3GRTeiLtofgH7xI7wVE2M8MB7HYAZkXLgwp%2BvbwAY6pgG%2BKOnyQ31JXxGygVGOwIAfZX8PG8fD4kExiU2U5%2F1gvzyYFXG1ULbYNhu9PzrJAhTcYSHR2zoDHAqERO2eCX%2BYLz3X0%2Fzli1bj92thapWJs%2FGrNzImYVV6GOdJfDN7Y99WvOUjqrG%2B%2Fhffd%2FSVzADXINv5JRrrPd7GbRqXvGWNO6%2BVDz%2F6h5pNDg4Q3L%2Fyz3A5vcgW4kC6BKpFyfd58ld1kkIt5La%2B&X-Amz-Signature=817083efdc6342d025481496ffa31d1859cb8ae7f43ee245d373e2849a1231f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UN3NHB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBjlKPyZTGxLEWqr4mDYIqPxWJEFg9b7jk4Dy9wtb74AAiAxZcZcv4bVBUCGP7RBvzR2EUl8ETah5w%2BaZYPqeaZQaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWHvXCicosUuZUgBKtwDrqr4eY4FcBFJBDc4IuCGFOh6HoDsGdhZYiNAEkAzPlEr32GeNGuFMG7i4wbI2WObTUZEoc2SNQaovzrFr%2FXy9seNopB4i5KsS3m%2BeJrr3X39WU%2BnFl4chILrCN6mzhGyyM9LOBl2%2BKUW0qSSUysFrBmwfgNG1I6eod8WQmnYxzONGI9W9P2Jd%2F47jnY1BokghOElHzqunRkVFRyUR6l7Dt0uXdKRw8Q%2FoNCvaFP7sP5I5ptnnoOvj4nuwRRftQ2EPuXic2sEdVSzZc9Khu8kTARP5ISRolktQO78ACEb7Db6lkOJESPPvFwmNq9zSRpbr%2FU4PYxp7cuTW2vRPNMv68xyIhQu%2B7q7YCzCuNiqXPnKmns%2FlfR%2F5LJY8pTDMPEYwX7msxlYJslPPZ%2FwDouzuqpvHLW0DAch3NMgJKiyEbQETD9H4HcGb1flr2%2BZLypbRde4Sgupm%2B2lPc3x0fmY8NleSGMt7Mjoiti3OjTdbQruTI%2F571B6ETWBgnKY9fr3j7PRDOWFXpGS%2BFQi03ADyTF3Q%2F9CzhdkbtRrkyN%2BZr%2FPLSdmPY7HIer7kpw%2BIKARIfJo4USPyS8%2BBtu7qN%2F3kHlPfA3GRTeiLtofgH7xI7wVE2M8MB7HYAZkXLgwp%2BvbwAY6pgG%2BKOnyQ31JXxGygVGOwIAfZX8PG8fD4kExiU2U5%2F1gvzyYFXG1ULbYNhu9PzrJAhTcYSHR2zoDHAqERO2eCX%2BYLz3X0%2Fzli1bj92thapWJs%2FGrNzImYVV6GOdJfDN7Y99WvOUjqrG%2B%2Fhffd%2FSVzADXINv5JRrrPd7GbRqXvGWNO6%2BVDz%2F6h5pNDg4Q3L%2Fyz3A5vcgW4kC6BKpFyfd58ld1kkIt5La%2B&X-Amz-Signature=9228d9a5cf833262eac45538e4fa407933a8c5cc1db31e7e18b317b1e2fe9046&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UN3NHB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBjlKPyZTGxLEWqr4mDYIqPxWJEFg9b7jk4Dy9wtb74AAiAxZcZcv4bVBUCGP7RBvzR2EUl8ETah5w%2BaZYPqeaZQaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWHvXCicosUuZUgBKtwDrqr4eY4FcBFJBDc4IuCGFOh6HoDsGdhZYiNAEkAzPlEr32GeNGuFMG7i4wbI2WObTUZEoc2SNQaovzrFr%2FXy9seNopB4i5KsS3m%2BeJrr3X39WU%2BnFl4chILrCN6mzhGyyM9LOBl2%2BKUW0qSSUysFrBmwfgNG1I6eod8WQmnYxzONGI9W9P2Jd%2F47jnY1BokghOElHzqunRkVFRyUR6l7Dt0uXdKRw8Q%2FoNCvaFP7sP5I5ptnnoOvj4nuwRRftQ2EPuXic2sEdVSzZc9Khu8kTARP5ISRolktQO78ACEb7Db6lkOJESPPvFwmNq9zSRpbr%2FU4PYxp7cuTW2vRPNMv68xyIhQu%2B7q7YCzCuNiqXPnKmns%2FlfR%2F5LJY8pTDMPEYwX7msxlYJslPPZ%2FwDouzuqpvHLW0DAch3NMgJKiyEbQETD9H4HcGb1flr2%2BZLypbRde4Sgupm%2B2lPc3x0fmY8NleSGMt7Mjoiti3OjTdbQruTI%2F571B6ETWBgnKY9fr3j7PRDOWFXpGS%2BFQi03ADyTF3Q%2F9CzhdkbtRrkyN%2BZr%2FPLSdmPY7HIer7kpw%2BIKARIfJo4USPyS8%2BBtu7qN%2F3kHlPfA3GRTeiLtofgH7xI7wVE2M8MB7HYAZkXLgwp%2BvbwAY6pgG%2BKOnyQ31JXxGygVGOwIAfZX8PG8fD4kExiU2U5%2F1gvzyYFXG1ULbYNhu9PzrJAhTcYSHR2zoDHAqERO2eCX%2BYLz3X0%2Fzli1bj92thapWJs%2FGrNzImYVV6GOdJfDN7Y99WvOUjqrG%2B%2Fhffd%2FSVzADXINv5JRrrPd7GbRqXvGWNO6%2BVDz%2F6h5pNDg4Q3L%2Fyz3A5vcgW4kC6BKpFyfd58ld1kkIt5La%2B&X-Amz-Signature=a2e85815daa149a06a13b84075514c1880a59d57aa9c9fd1fe0354943b59fdf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7UN3NHB%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBjlKPyZTGxLEWqr4mDYIqPxWJEFg9b7jk4Dy9wtb74AAiAxZcZcv4bVBUCGP7RBvzR2EUl8ETah5w%2BaZYPqeaZQaiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBWHvXCicosUuZUgBKtwDrqr4eY4FcBFJBDc4IuCGFOh6HoDsGdhZYiNAEkAzPlEr32GeNGuFMG7i4wbI2WObTUZEoc2SNQaovzrFr%2FXy9seNopB4i5KsS3m%2BeJrr3X39WU%2BnFl4chILrCN6mzhGyyM9LOBl2%2BKUW0qSSUysFrBmwfgNG1I6eod8WQmnYxzONGI9W9P2Jd%2F47jnY1BokghOElHzqunRkVFRyUR6l7Dt0uXdKRw8Q%2FoNCvaFP7sP5I5ptnnoOvj4nuwRRftQ2EPuXic2sEdVSzZc9Khu8kTARP5ISRolktQO78ACEb7Db6lkOJESPPvFwmNq9zSRpbr%2FU4PYxp7cuTW2vRPNMv68xyIhQu%2B7q7YCzCuNiqXPnKmns%2FlfR%2F5LJY8pTDMPEYwX7msxlYJslPPZ%2FwDouzuqpvHLW0DAch3NMgJKiyEbQETD9H4HcGb1flr2%2BZLypbRde4Sgupm%2B2lPc3x0fmY8NleSGMt7Mjoiti3OjTdbQruTI%2F571B6ETWBgnKY9fr3j7PRDOWFXpGS%2BFQi03ADyTF3Q%2F9CzhdkbtRrkyN%2BZr%2FPLSdmPY7HIer7kpw%2BIKARIfJo4USPyS8%2BBtu7qN%2F3kHlPfA3GRTeiLtofgH7xI7wVE2M8MB7HYAZkXLgwp%2BvbwAY6pgG%2BKOnyQ31JXxGygVGOwIAfZX8PG8fD4kExiU2U5%2F1gvzyYFXG1ULbYNhu9PzrJAhTcYSHR2zoDHAqERO2eCX%2BYLz3X0%2Fzli1bj92thapWJs%2FGrNzImYVV6GOdJfDN7Y99WvOUjqrG%2B%2Fhffd%2FSVzADXINv5JRrrPd7GbRqXvGWNO6%2BVDz%2F6h5pNDg4Q3L%2Fyz3A5vcgW4kC6BKpFyfd58ld1kkIt5La%2B&X-Amz-Signature=6231bf4fe740243508137cb05c3fe0a36ea03c033110ac0d897d31e843459a8e&X-Amz-SignedHeaders=host&x-id=GetObject)
