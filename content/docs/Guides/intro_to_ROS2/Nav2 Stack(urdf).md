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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPSCQVN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDr6r6z2thUyvXal12JZZKvrZZ1c8QnMs%2BJuIeZ7oRKTAiBm1%2FCLtjm2rqVlFjL7paTiUxs9Anyts%2BefNCy5k%2FRP1SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzc6LFoXhxL6k4RdOKtwDZ0oHOnlbPLv8n%2BbB%2BVdIwW2tZdTMY85q5BXgqjyOPp5Qm01953MpzO3QG%2FYRxtHWRDug%2Bj7s2aVJ1BZ9DVXA%2BOaz41VJ5948rkQn8mcBvavk8EFqeAvWm%2BrQ75ANaOOfbGkbLk4iBiKxTzfbo7hTiP86gqWOSjDTK0%2F0aLAV06zVBS6%2F09uuL8Nq7j5rNQ2TeXqW1cpkn1mWHg9RIFY38ZF9Jf4o7h6sFyAno1oWNsjzLClRwZ5sxAvO%2FT%2B4jupfPV2TCWealw4s48VdDHrBSp3UFeS9668tm5Z3vgxGkahPQX4KYqSIOzy0Y1u9i4otBpgDFQLUJlzvDiLqNl3Ne86H3aexI1RGnh66%2ByKnhAfKwR1uJIUL3%2F1EbTrWTs6nzGoW84U%2FBlQGs%2FV87ZC2oLSSMrcCACMfvHjUT3JX9E%2FR5DhCyNvZCFl%2FfdVN2et3SH%2Bgkigm7L7GN%2BvqjnR%2Fo5LUxDjMQJCnlipojAXfmU6Hmx4JlCAqWhx2AnXcJ65w4rU3T7SpHHBL6rZhhUqAiFzgRlaMu73cu6W25NRzkOpPllg1jGp644FwS0f%2FkykM2owPhUfgMRjH%2FH%2BqhsehNMWOvpPrxya7gzbACGp57SDSO%2F8C4wB%2FX7VdIJkwg4eqwgY6pgFXQoXsXKpgK%2BPuX5%2FFj369ZYSK7Re5H5an2f0g7h2%2F6XMeN%2F9dQE2ByiLalpdvhfuNYEHfM1WnljezcvAhw8gkgNlCKklJi5jW0IguJ8lEbpyrnfkj6UArIhd5aKQ8eTlvhisEY4WMYpSAHAP6QMofSj43N5nl2EnCLaoqEMvoFnWdrXvf46v9WRRfy9UMyLy%2F8pEa6S2W4zL81UgIEhczaXZ7oOcT&X-Amz-Signature=249d0e3f3880998c32574b462c133a3753ca3f0208b0071adac0849f889cb617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPSCQVN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDr6r6z2thUyvXal12JZZKvrZZ1c8QnMs%2BJuIeZ7oRKTAiBm1%2FCLtjm2rqVlFjL7paTiUxs9Anyts%2BefNCy5k%2FRP1SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzc6LFoXhxL6k4RdOKtwDZ0oHOnlbPLv8n%2BbB%2BVdIwW2tZdTMY85q5BXgqjyOPp5Qm01953MpzO3QG%2FYRxtHWRDug%2Bj7s2aVJ1BZ9DVXA%2BOaz41VJ5948rkQn8mcBvavk8EFqeAvWm%2BrQ75ANaOOfbGkbLk4iBiKxTzfbo7hTiP86gqWOSjDTK0%2F0aLAV06zVBS6%2F09uuL8Nq7j5rNQ2TeXqW1cpkn1mWHg9RIFY38ZF9Jf4o7h6sFyAno1oWNsjzLClRwZ5sxAvO%2FT%2B4jupfPV2TCWealw4s48VdDHrBSp3UFeS9668tm5Z3vgxGkahPQX4KYqSIOzy0Y1u9i4otBpgDFQLUJlzvDiLqNl3Ne86H3aexI1RGnh66%2ByKnhAfKwR1uJIUL3%2F1EbTrWTs6nzGoW84U%2FBlQGs%2FV87ZC2oLSSMrcCACMfvHjUT3JX9E%2FR5DhCyNvZCFl%2FfdVN2et3SH%2Bgkigm7L7GN%2BvqjnR%2Fo5LUxDjMQJCnlipojAXfmU6Hmx4JlCAqWhx2AnXcJ65w4rU3T7SpHHBL6rZhhUqAiFzgRlaMu73cu6W25NRzkOpPllg1jGp644FwS0f%2FkykM2owPhUfgMRjH%2FH%2BqhsehNMWOvpPrxya7gzbACGp57SDSO%2F8C4wB%2FX7VdIJkwg4eqwgY6pgFXQoXsXKpgK%2BPuX5%2FFj369ZYSK7Re5H5an2f0g7h2%2F6XMeN%2F9dQE2ByiLalpdvhfuNYEHfM1WnljezcvAhw8gkgNlCKklJi5jW0IguJ8lEbpyrnfkj6UArIhd5aKQ8eTlvhisEY4WMYpSAHAP6QMofSj43N5nl2EnCLaoqEMvoFnWdrXvf46v9WRRfy9UMyLy%2F8pEa6S2W4zL81UgIEhczaXZ7oOcT&X-Amz-Signature=98738141eae257c93ba6af403095db6ffbf00b3ffcb8a9a5f8302bae78010a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPSCQVN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDr6r6z2thUyvXal12JZZKvrZZ1c8QnMs%2BJuIeZ7oRKTAiBm1%2FCLtjm2rqVlFjL7paTiUxs9Anyts%2BefNCy5k%2FRP1SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzc6LFoXhxL6k4RdOKtwDZ0oHOnlbPLv8n%2BbB%2BVdIwW2tZdTMY85q5BXgqjyOPp5Qm01953MpzO3QG%2FYRxtHWRDug%2Bj7s2aVJ1BZ9DVXA%2BOaz41VJ5948rkQn8mcBvavk8EFqeAvWm%2BrQ75ANaOOfbGkbLk4iBiKxTzfbo7hTiP86gqWOSjDTK0%2F0aLAV06zVBS6%2F09uuL8Nq7j5rNQ2TeXqW1cpkn1mWHg9RIFY38ZF9Jf4o7h6sFyAno1oWNsjzLClRwZ5sxAvO%2FT%2B4jupfPV2TCWealw4s48VdDHrBSp3UFeS9668tm5Z3vgxGkahPQX4KYqSIOzy0Y1u9i4otBpgDFQLUJlzvDiLqNl3Ne86H3aexI1RGnh66%2ByKnhAfKwR1uJIUL3%2F1EbTrWTs6nzGoW84U%2FBlQGs%2FV87ZC2oLSSMrcCACMfvHjUT3JX9E%2FR5DhCyNvZCFl%2FfdVN2et3SH%2Bgkigm7L7GN%2BvqjnR%2Fo5LUxDjMQJCnlipojAXfmU6Hmx4JlCAqWhx2AnXcJ65w4rU3T7SpHHBL6rZhhUqAiFzgRlaMu73cu6W25NRzkOpPllg1jGp644FwS0f%2FkykM2owPhUfgMRjH%2FH%2BqhsehNMWOvpPrxya7gzbACGp57SDSO%2F8C4wB%2FX7VdIJkwg4eqwgY6pgFXQoXsXKpgK%2BPuX5%2FFj369ZYSK7Re5H5an2f0g7h2%2F6XMeN%2F9dQE2ByiLalpdvhfuNYEHfM1WnljezcvAhw8gkgNlCKklJi5jW0IguJ8lEbpyrnfkj6UArIhd5aKQ8eTlvhisEY4WMYpSAHAP6QMofSj43N5nl2EnCLaoqEMvoFnWdrXvf46v9WRRfy9UMyLy%2F8pEa6S2W4zL81UgIEhczaXZ7oOcT&X-Amz-Signature=95084cc3eb85b75be0af48a54041a574aa4f826047441ac3e2b898bde3f2ce55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPSCQVN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDr6r6z2thUyvXal12JZZKvrZZ1c8QnMs%2BJuIeZ7oRKTAiBm1%2FCLtjm2rqVlFjL7paTiUxs9Anyts%2BefNCy5k%2FRP1SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzc6LFoXhxL6k4RdOKtwDZ0oHOnlbPLv8n%2BbB%2BVdIwW2tZdTMY85q5BXgqjyOPp5Qm01953MpzO3QG%2FYRxtHWRDug%2Bj7s2aVJ1BZ9DVXA%2BOaz41VJ5948rkQn8mcBvavk8EFqeAvWm%2BrQ75ANaOOfbGkbLk4iBiKxTzfbo7hTiP86gqWOSjDTK0%2F0aLAV06zVBS6%2F09uuL8Nq7j5rNQ2TeXqW1cpkn1mWHg9RIFY38ZF9Jf4o7h6sFyAno1oWNsjzLClRwZ5sxAvO%2FT%2B4jupfPV2TCWealw4s48VdDHrBSp3UFeS9668tm5Z3vgxGkahPQX4KYqSIOzy0Y1u9i4otBpgDFQLUJlzvDiLqNl3Ne86H3aexI1RGnh66%2ByKnhAfKwR1uJIUL3%2F1EbTrWTs6nzGoW84U%2FBlQGs%2FV87ZC2oLSSMrcCACMfvHjUT3JX9E%2FR5DhCyNvZCFl%2FfdVN2et3SH%2Bgkigm7L7GN%2BvqjnR%2Fo5LUxDjMQJCnlipojAXfmU6Hmx4JlCAqWhx2AnXcJ65w4rU3T7SpHHBL6rZhhUqAiFzgRlaMu73cu6W25NRzkOpPllg1jGp644FwS0f%2FkykM2owPhUfgMRjH%2FH%2BqhsehNMWOvpPrxya7gzbACGp57SDSO%2F8C4wB%2FX7VdIJkwg4eqwgY6pgFXQoXsXKpgK%2BPuX5%2FFj369ZYSK7Re5H5an2f0g7h2%2F6XMeN%2F9dQE2ByiLalpdvhfuNYEHfM1WnljezcvAhw8gkgNlCKklJi5jW0IguJ8lEbpyrnfkj6UArIhd5aKQ8eTlvhisEY4WMYpSAHAP6QMofSj43N5nl2EnCLaoqEMvoFnWdrXvf46v9WRRfy9UMyLy%2F8pEa6S2W4zL81UgIEhczaXZ7oOcT&X-Amz-Signature=e70c892ab4d7f5c27dbb47a491a9cf1fc12f3dabbcb0666bfd5a7de5bc9eea6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPSCQVN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDr6r6z2thUyvXal12JZZKvrZZ1c8QnMs%2BJuIeZ7oRKTAiBm1%2FCLtjm2rqVlFjL7paTiUxs9Anyts%2BefNCy5k%2FRP1SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzc6LFoXhxL6k4RdOKtwDZ0oHOnlbPLv8n%2BbB%2BVdIwW2tZdTMY85q5BXgqjyOPp5Qm01953MpzO3QG%2FYRxtHWRDug%2Bj7s2aVJ1BZ9DVXA%2BOaz41VJ5948rkQn8mcBvavk8EFqeAvWm%2BrQ75ANaOOfbGkbLk4iBiKxTzfbo7hTiP86gqWOSjDTK0%2F0aLAV06zVBS6%2F09uuL8Nq7j5rNQ2TeXqW1cpkn1mWHg9RIFY38ZF9Jf4o7h6sFyAno1oWNsjzLClRwZ5sxAvO%2FT%2B4jupfPV2TCWealw4s48VdDHrBSp3UFeS9668tm5Z3vgxGkahPQX4KYqSIOzy0Y1u9i4otBpgDFQLUJlzvDiLqNl3Ne86H3aexI1RGnh66%2ByKnhAfKwR1uJIUL3%2F1EbTrWTs6nzGoW84U%2FBlQGs%2FV87ZC2oLSSMrcCACMfvHjUT3JX9E%2FR5DhCyNvZCFl%2FfdVN2et3SH%2Bgkigm7L7GN%2BvqjnR%2Fo5LUxDjMQJCnlipojAXfmU6Hmx4JlCAqWhx2AnXcJ65w4rU3T7SpHHBL6rZhhUqAiFzgRlaMu73cu6W25NRzkOpPllg1jGp644FwS0f%2FkykM2owPhUfgMRjH%2FH%2BqhsehNMWOvpPrxya7gzbACGp57SDSO%2F8C4wB%2FX7VdIJkwg4eqwgY6pgFXQoXsXKpgK%2BPuX5%2FFj369ZYSK7Re5H5an2f0g7h2%2F6XMeN%2F9dQE2ByiLalpdvhfuNYEHfM1WnljezcvAhw8gkgNlCKklJi5jW0IguJ8lEbpyrnfkj6UArIhd5aKQ8eTlvhisEY4WMYpSAHAP6QMofSj43N5nl2EnCLaoqEMvoFnWdrXvf46v9WRRfy9UMyLy%2F8pEa6S2W4zL81UgIEhczaXZ7oOcT&X-Amz-Signature=824d88b9d1065990ed764c09026248aa81d7a6f0976ffc6f849fb1f9fb475614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPSCQVN%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIDr6r6z2thUyvXal12JZZKvrZZ1c8QnMs%2BJuIeZ7oRKTAiBm1%2FCLtjm2rqVlFjL7paTiUxs9Anyts%2BefNCy5k%2FRP1SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzc6LFoXhxL6k4RdOKtwDZ0oHOnlbPLv8n%2BbB%2BVdIwW2tZdTMY85q5BXgqjyOPp5Qm01953MpzO3QG%2FYRxtHWRDug%2Bj7s2aVJ1BZ9DVXA%2BOaz41VJ5948rkQn8mcBvavk8EFqeAvWm%2BrQ75ANaOOfbGkbLk4iBiKxTzfbo7hTiP86gqWOSjDTK0%2F0aLAV06zVBS6%2F09uuL8Nq7j5rNQ2TeXqW1cpkn1mWHg9RIFY38ZF9Jf4o7h6sFyAno1oWNsjzLClRwZ5sxAvO%2FT%2B4jupfPV2TCWealw4s48VdDHrBSp3UFeS9668tm5Z3vgxGkahPQX4KYqSIOzy0Y1u9i4otBpgDFQLUJlzvDiLqNl3Ne86H3aexI1RGnh66%2ByKnhAfKwR1uJIUL3%2F1EbTrWTs6nzGoW84U%2FBlQGs%2FV87ZC2oLSSMrcCACMfvHjUT3JX9E%2FR5DhCyNvZCFl%2FfdVN2et3SH%2Bgkigm7L7GN%2BvqjnR%2Fo5LUxDjMQJCnlipojAXfmU6Hmx4JlCAqWhx2AnXcJ65w4rU3T7SpHHBL6rZhhUqAiFzgRlaMu73cu6W25NRzkOpPllg1jGp644FwS0f%2FkykM2owPhUfgMRjH%2FH%2BqhsehNMWOvpPrxya7gzbACGp57SDSO%2F8C4wB%2FX7VdIJkwg4eqwgY6pgFXQoXsXKpgK%2BPuX5%2FFj369ZYSK7Re5H5an2f0g7h2%2F6XMeN%2F9dQE2ByiLalpdvhfuNYEHfM1WnljezcvAhw8gkgNlCKklJi5jW0IguJ8lEbpyrnfkj6UArIhd5aKQ8eTlvhisEY4WMYpSAHAP6QMofSj43N5nl2EnCLaoqEMvoFnWdrXvf46v9WRRfy9UMyLy%2F8pEa6S2W4zL81UgIEhczaXZ7oOcT&X-Amz-Signature=13641e3835fafa9f201675c414d1ab60161e40412b92d0cf566806ccb6c23286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
