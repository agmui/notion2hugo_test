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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZW6DSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDOy42V3gihMTpfuRdiY4SHwLD0Hxd30sIkBuEJuqmvcwIgMsIsM95%2BBAEZGZFQPY3tsTZ2B%2BnjRUahp36U5kgN%2BZ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBmltfrPQY0Ajm80hSrcA%2BJG11crqeJ6aYcltinyr5kFtdqlOtUcd%2F%2BCwM6kIH9RUD%2BR77iEAWf4A7zBhJuGCcLCnd4hCAVyyAtjGkp%2Bk0FNE3l6xdgTwOleeCnHGz8qqRrLkU6tQfRi8vER%2F6DzJZD3ssYHIPmDBeykNedxwoa6bxYclZP5wbsHdsPqevTuxruu8X3F1dYTINUyOA5P1lfRnsC9KNtS%2FEhhJ%2FzV4X%2BLQa8tU7RxVo5saVK6yYp%2FcAsI4LroXXNmbdSAJRI7wrDA%2F4R88FuEK2P%2Bc65hVhTervjEXBXBBoDgh8TgjBEfWS6SJ4mzZlWYpwfOK%2BMhZDc2i16KCwNv%2BvhY0dJc3Kn%2BCz1UtoCCxMbE%2F8YzkroYqb0HQ%2BVQLLSkUQuCTOJFiLJi0t3GAuW3tpS9BUBhG%2FEnnrFW%2B%2Fr3RambC0du2%2B%2BkFMvoQFpPrQ7dTuUQ8abxsSTuIr241gYFadjXaMWYwnXrGbV8hBsD0s%2FJObylCUEwEijveniouxecWftWnS0B6LtLX6P7hQ%2B6MqD1TEzVgDbUdfVcAy3sPUjhgXG2UBpvjcl3jFD07HlyHuPxVwwVwoJsz9OdiSEZ7%2FgSRApnyifNIFxwlDvDrF%2Fc%2B11n%2Fy3kecBRjiSZxkGs8ISTML3Op8AGOqUBOK5It8OtzDrPk%2BDK2MpV5%2BvKbbIkZNfzoBKKnydZLKHGfYAOhhEmKBZw6zaBSvxozafZECL3Um3bwayczpONpAz5eTIsg4wL%2BitlSelWw%2F7CTrUud%2F2FrUNedx3CUfacNXVB%2Fs6mvVtIcf6%2FI0HwJuy%2BsRA5lvvbukgy7%2BtQ8P0MwJzveAJH7TB82C8mRw7JM33z6pdLB0SfUnctXq%2FmRcZ7kRy9&X-Amz-Signature=975ad974d1bf16657b4f9c81453c3c7dfb60335baedaf8aaf6c2576c7a6bc96b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZW6DSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDOy42V3gihMTpfuRdiY4SHwLD0Hxd30sIkBuEJuqmvcwIgMsIsM95%2BBAEZGZFQPY3tsTZ2B%2BnjRUahp36U5kgN%2BZ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBmltfrPQY0Ajm80hSrcA%2BJG11crqeJ6aYcltinyr5kFtdqlOtUcd%2F%2BCwM6kIH9RUD%2BR77iEAWf4A7zBhJuGCcLCnd4hCAVyyAtjGkp%2Bk0FNE3l6xdgTwOleeCnHGz8qqRrLkU6tQfRi8vER%2F6DzJZD3ssYHIPmDBeykNedxwoa6bxYclZP5wbsHdsPqevTuxruu8X3F1dYTINUyOA5P1lfRnsC9KNtS%2FEhhJ%2FzV4X%2BLQa8tU7RxVo5saVK6yYp%2FcAsI4LroXXNmbdSAJRI7wrDA%2F4R88FuEK2P%2Bc65hVhTervjEXBXBBoDgh8TgjBEfWS6SJ4mzZlWYpwfOK%2BMhZDc2i16KCwNv%2BvhY0dJc3Kn%2BCz1UtoCCxMbE%2F8YzkroYqb0HQ%2BVQLLSkUQuCTOJFiLJi0t3GAuW3tpS9BUBhG%2FEnnrFW%2B%2Fr3RambC0du2%2B%2BkFMvoQFpPrQ7dTuUQ8abxsSTuIr241gYFadjXaMWYwnXrGbV8hBsD0s%2FJObylCUEwEijveniouxecWftWnS0B6LtLX6P7hQ%2B6MqD1TEzVgDbUdfVcAy3sPUjhgXG2UBpvjcl3jFD07HlyHuPxVwwVwoJsz9OdiSEZ7%2FgSRApnyifNIFxwlDvDrF%2Fc%2B11n%2Fy3kecBRjiSZxkGs8ISTML3Op8AGOqUBOK5It8OtzDrPk%2BDK2MpV5%2BvKbbIkZNfzoBKKnydZLKHGfYAOhhEmKBZw6zaBSvxozafZECL3Um3bwayczpONpAz5eTIsg4wL%2BitlSelWw%2F7CTrUud%2F2FrUNedx3CUfacNXVB%2Fs6mvVtIcf6%2FI0HwJuy%2BsRA5lvvbukgy7%2BtQ8P0MwJzveAJH7TB82C8mRw7JM33z6pdLB0SfUnctXq%2FmRcZ7kRy9&X-Amz-Signature=e60620378943089c844fbaa3482187fba5f68e09999cfc84224b7b9d8c38e2a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZW6DSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDOy42V3gihMTpfuRdiY4SHwLD0Hxd30sIkBuEJuqmvcwIgMsIsM95%2BBAEZGZFQPY3tsTZ2B%2BnjRUahp36U5kgN%2BZ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBmltfrPQY0Ajm80hSrcA%2BJG11crqeJ6aYcltinyr5kFtdqlOtUcd%2F%2BCwM6kIH9RUD%2BR77iEAWf4A7zBhJuGCcLCnd4hCAVyyAtjGkp%2Bk0FNE3l6xdgTwOleeCnHGz8qqRrLkU6tQfRi8vER%2F6DzJZD3ssYHIPmDBeykNedxwoa6bxYclZP5wbsHdsPqevTuxruu8X3F1dYTINUyOA5P1lfRnsC9KNtS%2FEhhJ%2FzV4X%2BLQa8tU7RxVo5saVK6yYp%2FcAsI4LroXXNmbdSAJRI7wrDA%2F4R88FuEK2P%2Bc65hVhTervjEXBXBBoDgh8TgjBEfWS6SJ4mzZlWYpwfOK%2BMhZDc2i16KCwNv%2BvhY0dJc3Kn%2BCz1UtoCCxMbE%2F8YzkroYqb0HQ%2BVQLLSkUQuCTOJFiLJi0t3GAuW3tpS9BUBhG%2FEnnrFW%2B%2Fr3RambC0du2%2B%2BkFMvoQFpPrQ7dTuUQ8abxsSTuIr241gYFadjXaMWYwnXrGbV8hBsD0s%2FJObylCUEwEijveniouxecWftWnS0B6LtLX6P7hQ%2B6MqD1TEzVgDbUdfVcAy3sPUjhgXG2UBpvjcl3jFD07HlyHuPxVwwVwoJsz9OdiSEZ7%2FgSRApnyifNIFxwlDvDrF%2Fc%2B11n%2Fy3kecBRjiSZxkGs8ISTML3Op8AGOqUBOK5It8OtzDrPk%2BDK2MpV5%2BvKbbIkZNfzoBKKnydZLKHGfYAOhhEmKBZw6zaBSvxozafZECL3Um3bwayczpONpAz5eTIsg4wL%2BitlSelWw%2F7CTrUud%2F2FrUNedx3CUfacNXVB%2Fs6mvVtIcf6%2FI0HwJuy%2BsRA5lvvbukgy7%2BtQ8P0MwJzveAJH7TB82C8mRw7JM33z6pdLB0SfUnctXq%2FmRcZ7kRy9&X-Amz-Signature=86bf6bf3b3347f15382931962e74fc644f0ee8535d9cc238472507711aebaa1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZW6DSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDOy42V3gihMTpfuRdiY4SHwLD0Hxd30sIkBuEJuqmvcwIgMsIsM95%2BBAEZGZFQPY3tsTZ2B%2BnjRUahp36U5kgN%2BZ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBmltfrPQY0Ajm80hSrcA%2BJG11crqeJ6aYcltinyr5kFtdqlOtUcd%2F%2BCwM6kIH9RUD%2BR77iEAWf4A7zBhJuGCcLCnd4hCAVyyAtjGkp%2Bk0FNE3l6xdgTwOleeCnHGz8qqRrLkU6tQfRi8vER%2F6DzJZD3ssYHIPmDBeykNedxwoa6bxYclZP5wbsHdsPqevTuxruu8X3F1dYTINUyOA5P1lfRnsC9KNtS%2FEhhJ%2FzV4X%2BLQa8tU7RxVo5saVK6yYp%2FcAsI4LroXXNmbdSAJRI7wrDA%2F4R88FuEK2P%2Bc65hVhTervjEXBXBBoDgh8TgjBEfWS6SJ4mzZlWYpwfOK%2BMhZDc2i16KCwNv%2BvhY0dJc3Kn%2BCz1UtoCCxMbE%2F8YzkroYqb0HQ%2BVQLLSkUQuCTOJFiLJi0t3GAuW3tpS9BUBhG%2FEnnrFW%2B%2Fr3RambC0du2%2B%2BkFMvoQFpPrQ7dTuUQ8abxsSTuIr241gYFadjXaMWYwnXrGbV8hBsD0s%2FJObylCUEwEijveniouxecWftWnS0B6LtLX6P7hQ%2B6MqD1TEzVgDbUdfVcAy3sPUjhgXG2UBpvjcl3jFD07HlyHuPxVwwVwoJsz9OdiSEZ7%2FgSRApnyifNIFxwlDvDrF%2Fc%2B11n%2Fy3kecBRjiSZxkGs8ISTML3Op8AGOqUBOK5It8OtzDrPk%2BDK2MpV5%2BvKbbIkZNfzoBKKnydZLKHGfYAOhhEmKBZw6zaBSvxozafZECL3Um3bwayczpONpAz5eTIsg4wL%2BitlSelWw%2F7CTrUud%2F2FrUNedx3CUfacNXVB%2Fs6mvVtIcf6%2FI0HwJuy%2BsRA5lvvbukgy7%2BtQ8P0MwJzveAJH7TB82C8mRw7JM33z6pdLB0SfUnctXq%2FmRcZ7kRy9&X-Amz-Signature=aab9dc9c687ce7f45861c905c7d7f8e6e5043c6133950e5469bf72af3dcdd673&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZW6DSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDOy42V3gihMTpfuRdiY4SHwLD0Hxd30sIkBuEJuqmvcwIgMsIsM95%2BBAEZGZFQPY3tsTZ2B%2BnjRUahp36U5kgN%2BZ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBmltfrPQY0Ajm80hSrcA%2BJG11crqeJ6aYcltinyr5kFtdqlOtUcd%2F%2BCwM6kIH9RUD%2BR77iEAWf4A7zBhJuGCcLCnd4hCAVyyAtjGkp%2Bk0FNE3l6xdgTwOleeCnHGz8qqRrLkU6tQfRi8vER%2F6DzJZD3ssYHIPmDBeykNedxwoa6bxYclZP5wbsHdsPqevTuxruu8X3F1dYTINUyOA5P1lfRnsC9KNtS%2FEhhJ%2FzV4X%2BLQa8tU7RxVo5saVK6yYp%2FcAsI4LroXXNmbdSAJRI7wrDA%2F4R88FuEK2P%2Bc65hVhTervjEXBXBBoDgh8TgjBEfWS6SJ4mzZlWYpwfOK%2BMhZDc2i16KCwNv%2BvhY0dJc3Kn%2BCz1UtoCCxMbE%2F8YzkroYqb0HQ%2BVQLLSkUQuCTOJFiLJi0t3GAuW3tpS9BUBhG%2FEnnrFW%2B%2Fr3RambC0du2%2B%2BkFMvoQFpPrQ7dTuUQ8abxsSTuIr241gYFadjXaMWYwnXrGbV8hBsD0s%2FJObylCUEwEijveniouxecWftWnS0B6LtLX6P7hQ%2B6MqD1TEzVgDbUdfVcAy3sPUjhgXG2UBpvjcl3jFD07HlyHuPxVwwVwoJsz9OdiSEZ7%2FgSRApnyifNIFxwlDvDrF%2Fc%2B11n%2Fy3kecBRjiSZxkGs8ISTML3Op8AGOqUBOK5It8OtzDrPk%2BDK2MpV5%2BvKbbIkZNfzoBKKnydZLKHGfYAOhhEmKBZw6zaBSvxozafZECL3Um3bwayczpONpAz5eTIsg4wL%2BitlSelWw%2F7CTrUud%2F2FrUNedx3CUfacNXVB%2Fs6mvVtIcf6%2FI0HwJuy%2BsRA5lvvbukgy7%2BtQ8P0MwJzveAJH7TB82C8mRw7JM33z6pdLB0SfUnctXq%2FmRcZ7kRy9&X-Amz-Signature=a1adae3349ecbd7ea9b85b048cd135bc500b4ac56763ab828f907c4fb433a6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4ZW6DSB%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDOy42V3gihMTpfuRdiY4SHwLD0Hxd30sIkBuEJuqmvcwIgMsIsM95%2BBAEZGZFQPY3tsTZ2B%2BnjRUahp36U5kgN%2BZ0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDBmltfrPQY0Ajm80hSrcA%2BJG11crqeJ6aYcltinyr5kFtdqlOtUcd%2F%2BCwM6kIH9RUD%2BR77iEAWf4A7zBhJuGCcLCnd4hCAVyyAtjGkp%2Bk0FNE3l6xdgTwOleeCnHGz8qqRrLkU6tQfRi8vER%2F6DzJZD3ssYHIPmDBeykNedxwoa6bxYclZP5wbsHdsPqevTuxruu8X3F1dYTINUyOA5P1lfRnsC9KNtS%2FEhhJ%2FzV4X%2BLQa8tU7RxVo5saVK6yYp%2FcAsI4LroXXNmbdSAJRI7wrDA%2F4R88FuEK2P%2Bc65hVhTervjEXBXBBoDgh8TgjBEfWS6SJ4mzZlWYpwfOK%2BMhZDc2i16KCwNv%2BvhY0dJc3Kn%2BCz1UtoCCxMbE%2F8YzkroYqb0HQ%2BVQLLSkUQuCTOJFiLJi0t3GAuW3tpS9BUBhG%2FEnnrFW%2B%2Fr3RambC0du2%2B%2BkFMvoQFpPrQ7dTuUQ8abxsSTuIr241gYFadjXaMWYwnXrGbV8hBsD0s%2FJObylCUEwEijveniouxecWftWnS0B6LtLX6P7hQ%2B6MqD1TEzVgDbUdfVcAy3sPUjhgXG2UBpvjcl3jFD07HlyHuPxVwwVwoJsz9OdiSEZ7%2FgSRApnyifNIFxwlDvDrF%2Fc%2B11n%2Fy3kecBRjiSZxkGs8ISTML3Op8AGOqUBOK5It8OtzDrPk%2BDK2MpV5%2BvKbbIkZNfzoBKKnydZLKHGfYAOhhEmKBZw6zaBSvxozafZECL3Um3bwayczpONpAz5eTIsg4wL%2BitlSelWw%2F7CTrUud%2F2FrUNedx3CUfacNXVB%2Fs6mvVtIcf6%2FI0HwJuy%2BsRA5lvvbukgy7%2BtQ8P0MwJzveAJH7TB82C8mRw7JM33z6pdLB0SfUnctXq%2FmRcZ7kRy9&X-Amz-Signature=b742c2b099f8732244fbca03235eb4b60184996542d68e0c673c2aa65a26c66b&X-Amz-SignedHeaders=host&x-id=GetObject)
