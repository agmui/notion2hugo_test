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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7ZV6NJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FB91aWy2EcIMUHYONJr1AYCClRFmYsbYl2p%2BfJAs9yQIhALmIA7h0RhbFlwTCi8bmGVoSfuHGGbQcvmQYonqKdWnAKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBJM85r1Jh%2BIi2goq3ANaQqoF8RUFUfmBlkYWB%2BHpECY5q3pK5gYD31F8GNmLpR31hWq5WICIzjQAPKiyItN775B4s0nTfZN3Wmclo66tbSr7ETl%2FdnCSDURtRPw65zgcinPbuqBoR8pmOJ78nIs13QmcRW26zvEzvPKxsaJ79LOpZOtUL5uUNGetFvcfTXf2w1cI3iDnc868Ixz6%2Fdg5M%2Fb2MlaMXCSPrbdBhKxGAgFiiho4Wlpn2PPGRXzek%2B%2F1kDS9XQyYL%2BWqs1hyigl6GhxqBoBDvTMy1%2B5G9gp%2FtULnWsBFdKyh9Wzy%2FHqf2D6gzy1f0%2FR1C0sBfNtIi7FpESGi4NOK3y7M%2FEnP91db5ZyfA8jQ3Aw5TyTOR0QM5P1wjxpBYKmwxSp8fuVEw%2BBLbhi3pMflegWhD%2Bgo9xdmTbRtGXN3XxnDQXNH%2FIaw9AoOWt16rKQtLk2bv2C9RKzbyc29bP770uXdl1LRPbiLcQrxOSRFRmJ9fsY7qwOPTirJYNUwGCLr2KSUETvJgw5Rc70vV0VBAIrN%2FsClSgWakCNH3yyENLA8USXBLzc7ytVPWvcNNh6eUUCiyAP66nERaJAtnf4X4byRCHGTADDdC12hcsapRxDU4TawXELhsPhUTnfYtKVrJJm0BzC8sOi8BjqkAUUTUXFTjtUKT5RbVWe%2BOXyB0cDmez2ShLD62oammf5ZLxo9H99NaTeVRROo1slcr04P%2BIcCAVH73IzbfnjvE%2FljOJdS08GEyZ8StBxATuIrl%2BY0Yo1Aw70E1WRV4ZDFvNnwC%2Bhb0JaJtzROblR%2BGvGcOF7iQ6rlTK3mwxHZzUqLQ4eFGTvzvbuRcjLoQaQ6eojYkZpNw6zOgQWDdLL1dXJlM3Hs&X-Amz-Signature=ca918c504542dc6a377f288993232b7e567bfdd88622488baec4429309d614e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7ZV6NJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FB91aWy2EcIMUHYONJr1AYCClRFmYsbYl2p%2BfJAs9yQIhALmIA7h0RhbFlwTCi8bmGVoSfuHGGbQcvmQYonqKdWnAKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBJM85r1Jh%2BIi2goq3ANaQqoF8RUFUfmBlkYWB%2BHpECY5q3pK5gYD31F8GNmLpR31hWq5WICIzjQAPKiyItN775B4s0nTfZN3Wmclo66tbSr7ETl%2FdnCSDURtRPw65zgcinPbuqBoR8pmOJ78nIs13QmcRW26zvEzvPKxsaJ79LOpZOtUL5uUNGetFvcfTXf2w1cI3iDnc868Ixz6%2Fdg5M%2Fb2MlaMXCSPrbdBhKxGAgFiiho4Wlpn2PPGRXzek%2B%2F1kDS9XQyYL%2BWqs1hyigl6GhxqBoBDvTMy1%2B5G9gp%2FtULnWsBFdKyh9Wzy%2FHqf2D6gzy1f0%2FR1C0sBfNtIi7FpESGi4NOK3y7M%2FEnP91db5ZyfA8jQ3Aw5TyTOR0QM5P1wjxpBYKmwxSp8fuVEw%2BBLbhi3pMflegWhD%2Bgo9xdmTbRtGXN3XxnDQXNH%2FIaw9AoOWt16rKQtLk2bv2C9RKzbyc29bP770uXdl1LRPbiLcQrxOSRFRmJ9fsY7qwOPTirJYNUwGCLr2KSUETvJgw5Rc70vV0VBAIrN%2FsClSgWakCNH3yyENLA8USXBLzc7ytVPWvcNNh6eUUCiyAP66nERaJAtnf4X4byRCHGTADDdC12hcsapRxDU4TawXELhsPhUTnfYtKVrJJm0BzC8sOi8BjqkAUUTUXFTjtUKT5RbVWe%2BOXyB0cDmez2ShLD62oammf5ZLxo9H99NaTeVRROo1slcr04P%2BIcCAVH73IzbfnjvE%2FljOJdS08GEyZ8StBxATuIrl%2BY0Yo1Aw70E1WRV4ZDFvNnwC%2Bhb0JaJtzROblR%2BGvGcOF7iQ6rlTK3mwxHZzUqLQ4eFGTvzvbuRcjLoQaQ6eojYkZpNw6zOgQWDdLL1dXJlM3Hs&X-Amz-Signature=fe0d20b1de4c82f571bfe34a8fcb2074cd5b3116dbc0d009a83159a84fd33a1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7ZV6NJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FB91aWy2EcIMUHYONJr1AYCClRFmYsbYl2p%2BfJAs9yQIhALmIA7h0RhbFlwTCi8bmGVoSfuHGGbQcvmQYonqKdWnAKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBJM85r1Jh%2BIi2goq3ANaQqoF8RUFUfmBlkYWB%2BHpECY5q3pK5gYD31F8GNmLpR31hWq5WICIzjQAPKiyItN775B4s0nTfZN3Wmclo66tbSr7ETl%2FdnCSDURtRPw65zgcinPbuqBoR8pmOJ78nIs13QmcRW26zvEzvPKxsaJ79LOpZOtUL5uUNGetFvcfTXf2w1cI3iDnc868Ixz6%2Fdg5M%2Fb2MlaMXCSPrbdBhKxGAgFiiho4Wlpn2PPGRXzek%2B%2F1kDS9XQyYL%2BWqs1hyigl6GhxqBoBDvTMy1%2B5G9gp%2FtULnWsBFdKyh9Wzy%2FHqf2D6gzy1f0%2FR1C0sBfNtIi7FpESGi4NOK3y7M%2FEnP91db5ZyfA8jQ3Aw5TyTOR0QM5P1wjxpBYKmwxSp8fuVEw%2BBLbhi3pMflegWhD%2Bgo9xdmTbRtGXN3XxnDQXNH%2FIaw9AoOWt16rKQtLk2bv2C9RKzbyc29bP770uXdl1LRPbiLcQrxOSRFRmJ9fsY7qwOPTirJYNUwGCLr2KSUETvJgw5Rc70vV0VBAIrN%2FsClSgWakCNH3yyENLA8USXBLzc7ytVPWvcNNh6eUUCiyAP66nERaJAtnf4X4byRCHGTADDdC12hcsapRxDU4TawXELhsPhUTnfYtKVrJJm0BzC8sOi8BjqkAUUTUXFTjtUKT5RbVWe%2BOXyB0cDmez2ShLD62oammf5ZLxo9H99NaTeVRROo1slcr04P%2BIcCAVH73IzbfnjvE%2FljOJdS08GEyZ8StBxATuIrl%2BY0Yo1Aw70E1WRV4ZDFvNnwC%2Bhb0JaJtzROblR%2BGvGcOF7iQ6rlTK3mwxHZzUqLQ4eFGTvzvbuRcjLoQaQ6eojYkZpNw6zOgQWDdLL1dXJlM3Hs&X-Amz-Signature=bfabfbf5c6e06d2d5b3494f9f94079032b4e5b4c3a34fb14b46d738682ae9676&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7ZV6NJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FB91aWy2EcIMUHYONJr1AYCClRFmYsbYl2p%2BfJAs9yQIhALmIA7h0RhbFlwTCi8bmGVoSfuHGGbQcvmQYonqKdWnAKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBJM85r1Jh%2BIi2goq3ANaQqoF8RUFUfmBlkYWB%2BHpECY5q3pK5gYD31F8GNmLpR31hWq5WICIzjQAPKiyItN775B4s0nTfZN3Wmclo66tbSr7ETl%2FdnCSDURtRPw65zgcinPbuqBoR8pmOJ78nIs13QmcRW26zvEzvPKxsaJ79LOpZOtUL5uUNGetFvcfTXf2w1cI3iDnc868Ixz6%2Fdg5M%2Fb2MlaMXCSPrbdBhKxGAgFiiho4Wlpn2PPGRXzek%2B%2F1kDS9XQyYL%2BWqs1hyigl6GhxqBoBDvTMy1%2B5G9gp%2FtULnWsBFdKyh9Wzy%2FHqf2D6gzy1f0%2FR1C0sBfNtIi7FpESGi4NOK3y7M%2FEnP91db5ZyfA8jQ3Aw5TyTOR0QM5P1wjxpBYKmwxSp8fuVEw%2BBLbhi3pMflegWhD%2Bgo9xdmTbRtGXN3XxnDQXNH%2FIaw9AoOWt16rKQtLk2bv2C9RKzbyc29bP770uXdl1LRPbiLcQrxOSRFRmJ9fsY7qwOPTirJYNUwGCLr2KSUETvJgw5Rc70vV0VBAIrN%2FsClSgWakCNH3yyENLA8USXBLzc7ytVPWvcNNh6eUUCiyAP66nERaJAtnf4X4byRCHGTADDdC12hcsapRxDU4TawXELhsPhUTnfYtKVrJJm0BzC8sOi8BjqkAUUTUXFTjtUKT5RbVWe%2BOXyB0cDmez2ShLD62oammf5ZLxo9H99NaTeVRROo1slcr04P%2BIcCAVH73IzbfnjvE%2FljOJdS08GEyZ8StBxATuIrl%2BY0Yo1Aw70E1WRV4ZDFvNnwC%2Bhb0JaJtzROblR%2BGvGcOF7iQ6rlTK3mwxHZzUqLQ4eFGTvzvbuRcjLoQaQ6eojYkZpNw6zOgQWDdLL1dXJlM3Hs&X-Amz-Signature=cf5dc7b1327dd13bf9c5238a2e3d18738065bea9935b2697dc50ea30f2efad24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7ZV6NJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FB91aWy2EcIMUHYONJr1AYCClRFmYsbYl2p%2BfJAs9yQIhALmIA7h0RhbFlwTCi8bmGVoSfuHGGbQcvmQYonqKdWnAKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBJM85r1Jh%2BIi2goq3ANaQqoF8RUFUfmBlkYWB%2BHpECY5q3pK5gYD31F8GNmLpR31hWq5WICIzjQAPKiyItN775B4s0nTfZN3Wmclo66tbSr7ETl%2FdnCSDURtRPw65zgcinPbuqBoR8pmOJ78nIs13QmcRW26zvEzvPKxsaJ79LOpZOtUL5uUNGetFvcfTXf2w1cI3iDnc868Ixz6%2Fdg5M%2Fb2MlaMXCSPrbdBhKxGAgFiiho4Wlpn2PPGRXzek%2B%2F1kDS9XQyYL%2BWqs1hyigl6GhxqBoBDvTMy1%2B5G9gp%2FtULnWsBFdKyh9Wzy%2FHqf2D6gzy1f0%2FR1C0sBfNtIi7FpESGi4NOK3y7M%2FEnP91db5ZyfA8jQ3Aw5TyTOR0QM5P1wjxpBYKmwxSp8fuVEw%2BBLbhi3pMflegWhD%2Bgo9xdmTbRtGXN3XxnDQXNH%2FIaw9AoOWt16rKQtLk2bv2C9RKzbyc29bP770uXdl1LRPbiLcQrxOSRFRmJ9fsY7qwOPTirJYNUwGCLr2KSUETvJgw5Rc70vV0VBAIrN%2FsClSgWakCNH3yyENLA8USXBLzc7ytVPWvcNNh6eUUCiyAP66nERaJAtnf4X4byRCHGTADDdC12hcsapRxDU4TawXELhsPhUTnfYtKVrJJm0BzC8sOi8BjqkAUUTUXFTjtUKT5RbVWe%2BOXyB0cDmez2ShLD62oammf5ZLxo9H99NaTeVRROo1slcr04P%2BIcCAVH73IzbfnjvE%2FljOJdS08GEyZ8StBxATuIrl%2BY0Yo1Aw70E1WRV4ZDFvNnwC%2Bhb0JaJtzROblR%2BGvGcOF7iQ6rlTK3mwxHZzUqLQ4eFGTvzvbuRcjLoQaQ6eojYkZpNw6zOgQWDdLL1dXJlM3Hs&X-Amz-Signature=4619fb371cfb8fd333bb8bf82dee794339f3da36097c20375fcf57839ed96432&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7ZV6NJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FB91aWy2EcIMUHYONJr1AYCClRFmYsbYl2p%2BfJAs9yQIhALmIA7h0RhbFlwTCi8bmGVoSfuHGGbQcvmQYonqKdWnAKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDBJM85r1Jh%2BIi2goq3ANaQqoF8RUFUfmBlkYWB%2BHpECY5q3pK5gYD31F8GNmLpR31hWq5WICIzjQAPKiyItN775B4s0nTfZN3Wmclo66tbSr7ETl%2FdnCSDURtRPw65zgcinPbuqBoR8pmOJ78nIs13QmcRW26zvEzvPKxsaJ79LOpZOtUL5uUNGetFvcfTXf2w1cI3iDnc868Ixz6%2Fdg5M%2Fb2MlaMXCSPrbdBhKxGAgFiiho4Wlpn2PPGRXzek%2B%2F1kDS9XQyYL%2BWqs1hyigl6GhxqBoBDvTMy1%2B5G9gp%2FtULnWsBFdKyh9Wzy%2FHqf2D6gzy1f0%2FR1C0sBfNtIi7FpESGi4NOK3y7M%2FEnP91db5ZyfA8jQ3Aw5TyTOR0QM5P1wjxpBYKmwxSp8fuVEw%2BBLbhi3pMflegWhD%2Bgo9xdmTbRtGXN3XxnDQXNH%2FIaw9AoOWt16rKQtLk2bv2C9RKzbyc29bP770uXdl1LRPbiLcQrxOSRFRmJ9fsY7qwOPTirJYNUwGCLr2KSUETvJgw5Rc70vV0VBAIrN%2FsClSgWakCNH3yyENLA8USXBLzc7ytVPWvcNNh6eUUCiyAP66nERaJAtnf4X4byRCHGTADDdC12hcsapRxDU4TawXELhsPhUTnfYtKVrJJm0BzC8sOi8BjqkAUUTUXFTjtUKT5RbVWe%2BOXyB0cDmez2ShLD62oammf5ZLxo9H99NaTeVRROo1slcr04P%2BIcCAVH73IzbfnjvE%2FljOJdS08GEyZ8StBxATuIrl%2BY0Yo1Aw70E1WRV4ZDFvNnwC%2Bhb0JaJtzROblR%2BGvGcOF7iQ6rlTK3mwxHZzUqLQ4eFGTvzvbuRcjLoQaQ6eojYkZpNw6zOgQWDdLL1dXJlM3Hs&X-Amz-Signature=92870c1ff2e7e498aabcfc4cc1f45c2efc4264528cf6bb774dba8fff0894d92c&X-Amz-SignedHeaders=host&x-id=GetObject)
