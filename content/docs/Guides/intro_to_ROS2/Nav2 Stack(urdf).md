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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSEPWO2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIL0of5aZDO%2BcvHB4jjqoJrqho4KY2i5oUElxh9rlMAIgfKmiL6cHZEhbtVJD9Md24TOTOlFOMAvgpe%2FZj51cmKUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK0MFYU%2FJvYxjbD9mCrcA7puT5ZQMA%2FuYg1drj0kJ2R0ZNyD8YB%2Fzqu%2FR%2BaTKAOayVfc6JjnPvPFRFEU9wKV1aXJpcTYqENbUQJDga4TRArz9yur4kQVWbgU08zkkJFA8PQaxUwwVsyAuHI%2FcNUnpuJQ%2F8scfyl5PQTV0CbCyJ78gVmgOyyLl1oi6CYYXL8NUCroz0u6vz3INFlDJaxPlBkVvb4jzLlpiL141%2FIV0p5qfv4qy8KxFYwb2ioCg3rIbqOI5ksaVRQusO4U5Y%2F6jxRIAKgtQ3uPkPyex%2FC%2B5hlajpSExoJ9TyYs4Jg3q5TI%2Ftl2NIRlcm5XEFBKvH0aLMexDS8%2FNpdJtdzwqOfjRfRo2EYdA970ZavgpLtCWyPXa%2BHND77KfrUBx%2Fgrn0hlXBCqGz36Bc%2Be15MUQScGuFgYgfU0MpMZGlz%2B1c%2Be5BQzgKjo5SLjo0kxnOQAhsYIUROFVWKVsuLDmT7ZHjERv%2BtUOYYFvB3AdOWqCjApxa25RXijyI%2Fp%2FPAXR7bxPSbxpj9RAuiBbRllHP9uy0WKvJMAGFhsgIKoO6g3xG2P3UF6pJDw73ugx4%2F5tgidmNXQZuDkn6sQLO0Qpzt2k9nZN9VpwHVmL872J%2FdOeBMsdiHy5CY2GXZs7LQvHESAMPLMlb8GOqUBurJoMzAtoGQaErx%2BjvmGtPBXBpGu60pyq8B1jxTJUgy%2B%2Bf15i9YGBK0IMEe7bUtXGIoATZusPKLI3LeztRHwCkdEvTxjnQS5fDd4F3ywLP%2FROFNAxoKs8VuJnykVgVoGwlblmhqrc2urm6E9Du9nATQlX7X%2FEK1YvNE7JXg6RXwAjFliNRGb9ldG%2BOQRYFk9FBtRW%2FN8yuzMljf7bz6TD9Sk3xoG&X-Amz-Signature=0a1fa7981b481e6773d5e3da10bbc1a142901cd8d7ad9249e2c069c0e6c71649&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSEPWO2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIL0of5aZDO%2BcvHB4jjqoJrqho4KY2i5oUElxh9rlMAIgfKmiL6cHZEhbtVJD9Md24TOTOlFOMAvgpe%2FZj51cmKUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK0MFYU%2FJvYxjbD9mCrcA7puT5ZQMA%2FuYg1drj0kJ2R0ZNyD8YB%2Fzqu%2FR%2BaTKAOayVfc6JjnPvPFRFEU9wKV1aXJpcTYqENbUQJDga4TRArz9yur4kQVWbgU08zkkJFA8PQaxUwwVsyAuHI%2FcNUnpuJQ%2F8scfyl5PQTV0CbCyJ78gVmgOyyLl1oi6CYYXL8NUCroz0u6vz3INFlDJaxPlBkVvb4jzLlpiL141%2FIV0p5qfv4qy8KxFYwb2ioCg3rIbqOI5ksaVRQusO4U5Y%2F6jxRIAKgtQ3uPkPyex%2FC%2B5hlajpSExoJ9TyYs4Jg3q5TI%2Ftl2NIRlcm5XEFBKvH0aLMexDS8%2FNpdJtdzwqOfjRfRo2EYdA970ZavgpLtCWyPXa%2BHND77KfrUBx%2Fgrn0hlXBCqGz36Bc%2Be15MUQScGuFgYgfU0MpMZGlz%2B1c%2Be5BQzgKjo5SLjo0kxnOQAhsYIUROFVWKVsuLDmT7ZHjERv%2BtUOYYFvB3AdOWqCjApxa25RXijyI%2Fp%2FPAXR7bxPSbxpj9RAuiBbRllHP9uy0WKvJMAGFhsgIKoO6g3xG2P3UF6pJDw73ugx4%2F5tgidmNXQZuDkn6sQLO0Qpzt2k9nZN9VpwHVmL872J%2FdOeBMsdiHy5CY2GXZs7LQvHESAMPLMlb8GOqUBurJoMzAtoGQaErx%2BjvmGtPBXBpGu60pyq8B1jxTJUgy%2B%2Bf15i9YGBK0IMEe7bUtXGIoATZusPKLI3LeztRHwCkdEvTxjnQS5fDd4F3ywLP%2FROFNAxoKs8VuJnykVgVoGwlblmhqrc2urm6E9Du9nATQlX7X%2FEK1YvNE7JXg6RXwAjFliNRGb9ldG%2BOQRYFk9FBtRW%2FN8yuzMljf7bz6TD9Sk3xoG&X-Amz-Signature=3bb57f9ea0f95d9aa1ec474e6a606b859b44dcb8f363e88ceb754b95e99a8078&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSEPWO2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIL0of5aZDO%2BcvHB4jjqoJrqho4KY2i5oUElxh9rlMAIgfKmiL6cHZEhbtVJD9Md24TOTOlFOMAvgpe%2FZj51cmKUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK0MFYU%2FJvYxjbD9mCrcA7puT5ZQMA%2FuYg1drj0kJ2R0ZNyD8YB%2Fzqu%2FR%2BaTKAOayVfc6JjnPvPFRFEU9wKV1aXJpcTYqENbUQJDga4TRArz9yur4kQVWbgU08zkkJFA8PQaxUwwVsyAuHI%2FcNUnpuJQ%2F8scfyl5PQTV0CbCyJ78gVmgOyyLl1oi6CYYXL8NUCroz0u6vz3INFlDJaxPlBkVvb4jzLlpiL141%2FIV0p5qfv4qy8KxFYwb2ioCg3rIbqOI5ksaVRQusO4U5Y%2F6jxRIAKgtQ3uPkPyex%2FC%2B5hlajpSExoJ9TyYs4Jg3q5TI%2Ftl2NIRlcm5XEFBKvH0aLMexDS8%2FNpdJtdzwqOfjRfRo2EYdA970ZavgpLtCWyPXa%2BHND77KfrUBx%2Fgrn0hlXBCqGz36Bc%2Be15MUQScGuFgYgfU0MpMZGlz%2B1c%2Be5BQzgKjo5SLjo0kxnOQAhsYIUROFVWKVsuLDmT7ZHjERv%2BtUOYYFvB3AdOWqCjApxa25RXijyI%2Fp%2FPAXR7bxPSbxpj9RAuiBbRllHP9uy0WKvJMAGFhsgIKoO6g3xG2P3UF6pJDw73ugx4%2F5tgidmNXQZuDkn6sQLO0Qpzt2k9nZN9VpwHVmL872J%2FdOeBMsdiHy5CY2GXZs7LQvHESAMPLMlb8GOqUBurJoMzAtoGQaErx%2BjvmGtPBXBpGu60pyq8B1jxTJUgy%2B%2Bf15i9YGBK0IMEe7bUtXGIoATZusPKLI3LeztRHwCkdEvTxjnQS5fDd4F3ywLP%2FROFNAxoKs8VuJnykVgVoGwlblmhqrc2urm6E9Du9nATQlX7X%2FEK1YvNE7JXg6RXwAjFliNRGb9ldG%2BOQRYFk9FBtRW%2FN8yuzMljf7bz6TD9Sk3xoG&X-Amz-Signature=8d8765c968bca1b1e7c0c7f4639d5d6325ba709ae534363d70bab261bffbfc12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSEPWO2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIL0of5aZDO%2BcvHB4jjqoJrqho4KY2i5oUElxh9rlMAIgfKmiL6cHZEhbtVJD9Md24TOTOlFOMAvgpe%2FZj51cmKUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK0MFYU%2FJvYxjbD9mCrcA7puT5ZQMA%2FuYg1drj0kJ2R0ZNyD8YB%2Fzqu%2FR%2BaTKAOayVfc6JjnPvPFRFEU9wKV1aXJpcTYqENbUQJDga4TRArz9yur4kQVWbgU08zkkJFA8PQaxUwwVsyAuHI%2FcNUnpuJQ%2F8scfyl5PQTV0CbCyJ78gVmgOyyLl1oi6CYYXL8NUCroz0u6vz3INFlDJaxPlBkVvb4jzLlpiL141%2FIV0p5qfv4qy8KxFYwb2ioCg3rIbqOI5ksaVRQusO4U5Y%2F6jxRIAKgtQ3uPkPyex%2FC%2B5hlajpSExoJ9TyYs4Jg3q5TI%2Ftl2NIRlcm5XEFBKvH0aLMexDS8%2FNpdJtdzwqOfjRfRo2EYdA970ZavgpLtCWyPXa%2BHND77KfrUBx%2Fgrn0hlXBCqGz36Bc%2Be15MUQScGuFgYgfU0MpMZGlz%2B1c%2Be5BQzgKjo5SLjo0kxnOQAhsYIUROFVWKVsuLDmT7ZHjERv%2BtUOYYFvB3AdOWqCjApxa25RXijyI%2Fp%2FPAXR7bxPSbxpj9RAuiBbRllHP9uy0WKvJMAGFhsgIKoO6g3xG2P3UF6pJDw73ugx4%2F5tgidmNXQZuDkn6sQLO0Qpzt2k9nZN9VpwHVmL872J%2FdOeBMsdiHy5CY2GXZs7LQvHESAMPLMlb8GOqUBurJoMzAtoGQaErx%2BjvmGtPBXBpGu60pyq8B1jxTJUgy%2B%2Bf15i9YGBK0IMEe7bUtXGIoATZusPKLI3LeztRHwCkdEvTxjnQS5fDd4F3ywLP%2FROFNAxoKs8VuJnykVgVoGwlblmhqrc2urm6E9Du9nATQlX7X%2FEK1YvNE7JXg6RXwAjFliNRGb9ldG%2BOQRYFk9FBtRW%2FN8yuzMljf7bz6TD9Sk3xoG&X-Amz-Signature=912378ba49585bed7c03667aa712fe1a9bf513d61228625037008626be572b97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSEPWO2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIL0of5aZDO%2BcvHB4jjqoJrqho4KY2i5oUElxh9rlMAIgfKmiL6cHZEhbtVJD9Md24TOTOlFOMAvgpe%2FZj51cmKUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK0MFYU%2FJvYxjbD9mCrcA7puT5ZQMA%2FuYg1drj0kJ2R0ZNyD8YB%2Fzqu%2FR%2BaTKAOayVfc6JjnPvPFRFEU9wKV1aXJpcTYqENbUQJDga4TRArz9yur4kQVWbgU08zkkJFA8PQaxUwwVsyAuHI%2FcNUnpuJQ%2F8scfyl5PQTV0CbCyJ78gVmgOyyLl1oi6CYYXL8NUCroz0u6vz3INFlDJaxPlBkVvb4jzLlpiL141%2FIV0p5qfv4qy8KxFYwb2ioCg3rIbqOI5ksaVRQusO4U5Y%2F6jxRIAKgtQ3uPkPyex%2FC%2B5hlajpSExoJ9TyYs4Jg3q5TI%2Ftl2NIRlcm5XEFBKvH0aLMexDS8%2FNpdJtdzwqOfjRfRo2EYdA970ZavgpLtCWyPXa%2BHND77KfrUBx%2Fgrn0hlXBCqGz36Bc%2Be15MUQScGuFgYgfU0MpMZGlz%2B1c%2Be5BQzgKjo5SLjo0kxnOQAhsYIUROFVWKVsuLDmT7ZHjERv%2BtUOYYFvB3AdOWqCjApxa25RXijyI%2Fp%2FPAXR7bxPSbxpj9RAuiBbRllHP9uy0WKvJMAGFhsgIKoO6g3xG2P3UF6pJDw73ugx4%2F5tgidmNXQZuDkn6sQLO0Qpzt2k9nZN9VpwHVmL872J%2FdOeBMsdiHy5CY2GXZs7LQvHESAMPLMlb8GOqUBurJoMzAtoGQaErx%2BjvmGtPBXBpGu60pyq8B1jxTJUgy%2B%2Bf15i9YGBK0IMEe7bUtXGIoATZusPKLI3LeztRHwCkdEvTxjnQS5fDd4F3ywLP%2FROFNAxoKs8VuJnykVgVoGwlblmhqrc2urm6E9Du9nATQlX7X%2FEK1YvNE7JXg6RXwAjFliNRGb9ldG%2BOQRYFk9FBtRW%2FN8yuzMljf7bz6TD9Sk3xoG&X-Amz-Signature=34f410487ad85accbb761ea5bdb468a7665e5282ea41b99b2b24c18f8b344144&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSEPWO2%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPIL0of5aZDO%2BcvHB4jjqoJrqho4KY2i5oUElxh9rlMAIgfKmiL6cHZEhbtVJD9Md24TOTOlFOMAvgpe%2FZj51cmKUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDK0MFYU%2FJvYxjbD9mCrcA7puT5ZQMA%2FuYg1drj0kJ2R0ZNyD8YB%2Fzqu%2FR%2BaTKAOayVfc6JjnPvPFRFEU9wKV1aXJpcTYqENbUQJDga4TRArz9yur4kQVWbgU08zkkJFA8PQaxUwwVsyAuHI%2FcNUnpuJQ%2F8scfyl5PQTV0CbCyJ78gVmgOyyLl1oi6CYYXL8NUCroz0u6vz3INFlDJaxPlBkVvb4jzLlpiL141%2FIV0p5qfv4qy8KxFYwb2ioCg3rIbqOI5ksaVRQusO4U5Y%2F6jxRIAKgtQ3uPkPyex%2FC%2B5hlajpSExoJ9TyYs4Jg3q5TI%2Ftl2NIRlcm5XEFBKvH0aLMexDS8%2FNpdJtdzwqOfjRfRo2EYdA970ZavgpLtCWyPXa%2BHND77KfrUBx%2Fgrn0hlXBCqGz36Bc%2Be15MUQScGuFgYgfU0MpMZGlz%2B1c%2Be5BQzgKjo5SLjo0kxnOQAhsYIUROFVWKVsuLDmT7ZHjERv%2BtUOYYFvB3AdOWqCjApxa25RXijyI%2Fp%2FPAXR7bxPSbxpj9RAuiBbRllHP9uy0WKvJMAGFhsgIKoO6g3xG2P3UF6pJDw73ugx4%2F5tgidmNXQZuDkn6sQLO0Qpzt2k9nZN9VpwHVmL872J%2FdOeBMsdiHy5CY2GXZs7LQvHESAMPLMlb8GOqUBurJoMzAtoGQaErx%2BjvmGtPBXBpGu60pyq8B1jxTJUgy%2B%2Bf15i9YGBK0IMEe7bUtXGIoATZusPKLI3LeztRHwCkdEvTxjnQS5fDd4F3ywLP%2FROFNAxoKs8VuJnykVgVoGwlblmhqrc2urm6E9Du9nATQlX7X%2FEK1YvNE7JXg6RXwAjFliNRGb9ldG%2BOQRYFk9FBtRW%2FN8yuzMljf7bz6TD9Sk3xoG&X-Amz-Signature=ad0d682ed857a9fb1832cf8dee8fac1854520082c09ccbdb1ebb7959f8cb2676&X-Amz-SignedHeaders=host&x-id=GetObject)
