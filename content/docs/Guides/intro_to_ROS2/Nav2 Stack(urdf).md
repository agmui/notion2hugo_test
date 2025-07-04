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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIYQCEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCI6X8IBAGVSLQwts4fWZM5rVw9sQgoDgvjnBQgofqFGwIhAKmvlPSeFz8nuKIlSev9u2E1aCI2rxk%2F50nPDEgkFCVRKv8DCCcQABoMNjM3NDIzMTgzODA1Igxx%2FCzL%2BV105viKGAYq3ANg60aUleQw8ykl6fjEK9iv%2B95NfyCghA3pNze2AYBJofrSdNVm6mt6bYKO0mcJ5zNVFop0lqTPGy9nwdgIuZhLJfF8hxHBpYrg%2F0FyDAo8Y8qEf2HrslInDbRviQoJxPU1DtHLo4aKS2pr8DFW9hNKs5BB89CQza%2FigPCfD9OVUVgGIljBIjOzNb5fS9MYLQCb6ujP6LWI6MTqx0nyNm%2By1PSdGrznUVl5tEBzR%2B9RrcIK7A5%2FBBdWMbU2F%2BPLWsZpvaFUN3DdEMgCqgXF2hRIo%2FVPUVNEk2W6HMcUjW4cexYL%2BeccDllUppBorlYRUTfzFmHJ4Q%2FxpHyetzBdul4TpdRGiRpIFnP3%2BCm5pJFEIZirOw8X38sHrc4n3fqKfaMGlePT5piINvNMox25St60Sp%2B7kMW4XhcgALouBa2CQRXIAt07Q31Zm78MDCckGsNFX8ZMAfIAnAxkSWOvCf2%2B42PVua8LNA8mzm%2BQ9KYLiLWhSxPtEUJbTiRXhaF92jZfXi3u6v9ggQbdZUOyvHYxjbO%2BqUrpW0OzrjV4HJ83acjrP8hCfjXLgn0RrJB8EomHTMjZ0%2FxvZDfTzqDZy3O9aTlFxAJDYJVOrfepWZBvXvQaHHvHGXSeXpLtcTDY4J3DBjqkAdgIrj2ZnQnwZDMTQTxwP%2B5Pm7lZDkwtISiTW32HgzMDPZto2pdR5%2F%2F82NzQ4CwEkStWiWYqWmrA0jkjbcK9vIH4%2FzwtMr0DyrqKO6ptUwfth5wgVL6KJZ94K2eWre7MjN028%2FeTQbGMnZPXpCT8ETPaQ6HL%2FsoCa7Rrqal4uclB3CPzzPfSrCxH2y1av6CAt2iP0hhz69seLUPtp0Ct%2FyS4GJq0&X-Amz-Signature=417ea7ec176ed3874af37925be4229c76cbfa879fe9272f80e63c69765dd1d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIYQCEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCI6X8IBAGVSLQwts4fWZM5rVw9sQgoDgvjnBQgofqFGwIhAKmvlPSeFz8nuKIlSev9u2E1aCI2rxk%2F50nPDEgkFCVRKv8DCCcQABoMNjM3NDIzMTgzODA1Igxx%2FCzL%2BV105viKGAYq3ANg60aUleQw8ykl6fjEK9iv%2B95NfyCghA3pNze2AYBJofrSdNVm6mt6bYKO0mcJ5zNVFop0lqTPGy9nwdgIuZhLJfF8hxHBpYrg%2F0FyDAo8Y8qEf2HrslInDbRviQoJxPU1DtHLo4aKS2pr8DFW9hNKs5BB89CQza%2FigPCfD9OVUVgGIljBIjOzNb5fS9MYLQCb6ujP6LWI6MTqx0nyNm%2By1PSdGrznUVl5tEBzR%2B9RrcIK7A5%2FBBdWMbU2F%2BPLWsZpvaFUN3DdEMgCqgXF2hRIo%2FVPUVNEk2W6HMcUjW4cexYL%2BeccDllUppBorlYRUTfzFmHJ4Q%2FxpHyetzBdul4TpdRGiRpIFnP3%2BCm5pJFEIZirOw8X38sHrc4n3fqKfaMGlePT5piINvNMox25St60Sp%2B7kMW4XhcgALouBa2CQRXIAt07Q31Zm78MDCckGsNFX8ZMAfIAnAxkSWOvCf2%2B42PVua8LNA8mzm%2BQ9KYLiLWhSxPtEUJbTiRXhaF92jZfXi3u6v9ggQbdZUOyvHYxjbO%2BqUrpW0OzrjV4HJ83acjrP8hCfjXLgn0RrJB8EomHTMjZ0%2FxvZDfTzqDZy3O9aTlFxAJDYJVOrfepWZBvXvQaHHvHGXSeXpLtcTDY4J3DBjqkAdgIrj2ZnQnwZDMTQTxwP%2B5Pm7lZDkwtISiTW32HgzMDPZto2pdR5%2F%2F82NzQ4CwEkStWiWYqWmrA0jkjbcK9vIH4%2FzwtMr0DyrqKO6ptUwfth5wgVL6KJZ94K2eWre7MjN028%2FeTQbGMnZPXpCT8ETPaQ6HL%2FsoCa7Rrqal4uclB3CPzzPfSrCxH2y1av6CAt2iP0hhz69seLUPtp0Ct%2FyS4GJq0&X-Amz-Signature=47f23ed86aef6718f18742148cc10d62bfd2e10b2d3c44b8025f710b8d3873d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIYQCEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCI6X8IBAGVSLQwts4fWZM5rVw9sQgoDgvjnBQgofqFGwIhAKmvlPSeFz8nuKIlSev9u2E1aCI2rxk%2F50nPDEgkFCVRKv8DCCcQABoMNjM3NDIzMTgzODA1Igxx%2FCzL%2BV105viKGAYq3ANg60aUleQw8ykl6fjEK9iv%2B95NfyCghA3pNze2AYBJofrSdNVm6mt6bYKO0mcJ5zNVFop0lqTPGy9nwdgIuZhLJfF8hxHBpYrg%2F0FyDAo8Y8qEf2HrslInDbRviQoJxPU1DtHLo4aKS2pr8DFW9hNKs5BB89CQza%2FigPCfD9OVUVgGIljBIjOzNb5fS9MYLQCb6ujP6LWI6MTqx0nyNm%2By1PSdGrznUVl5tEBzR%2B9RrcIK7A5%2FBBdWMbU2F%2BPLWsZpvaFUN3DdEMgCqgXF2hRIo%2FVPUVNEk2W6HMcUjW4cexYL%2BeccDllUppBorlYRUTfzFmHJ4Q%2FxpHyetzBdul4TpdRGiRpIFnP3%2BCm5pJFEIZirOw8X38sHrc4n3fqKfaMGlePT5piINvNMox25St60Sp%2B7kMW4XhcgALouBa2CQRXIAt07Q31Zm78MDCckGsNFX8ZMAfIAnAxkSWOvCf2%2B42PVua8LNA8mzm%2BQ9KYLiLWhSxPtEUJbTiRXhaF92jZfXi3u6v9ggQbdZUOyvHYxjbO%2BqUrpW0OzrjV4HJ83acjrP8hCfjXLgn0RrJB8EomHTMjZ0%2FxvZDfTzqDZy3O9aTlFxAJDYJVOrfepWZBvXvQaHHvHGXSeXpLtcTDY4J3DBjqkAdgIrj2ZnQnwZDMTQTxwP%2B5Pm7lZDkwtISiTW32HgzMDPZto2pdR5%2F%2F82NzQ4CwEkStWiWYqWmrA0jkjbcK9vIH4%2FzwtMr0DyrqKO6ptUwfth5wgVL6KJZ94K2eWre7MjN028%2FeTQbGMnZPXpCT8ETPaQ6HL%2FsoCa7Rrqal4uclB3CPzzPfSrCxH2y1av6CAt2iP0hhz69seLUPtp0Ct%2FyS4GJq0&X-Amz-Signature=2e1542f28f1309076a2d045223fc42061697264f9a21871b9233cdd7fef9a214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIYQCEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCI6X8IBAGVSLQwts4fWZM5rVw9sQgoDgvjnBQgofqFGwIhAKmvlPSeFz8nuKIlSev9u2E1aCI2rxk%2F50nPDEgkFCVRKv8DCCcQABoMNjM3NDIzMTgzODA1Igxx%2FCzL%2BV105viKGAYq3ANg60aUleQw8ykl6fjEK9iv%2B95NfyCghA3pNze2AYBJofrSdNVm6mt6bYKO0mcJ5zNVFop0lqTPGy9nwdgIuZhLJfF8hxHBpYrg%2F0FyDAo8Y8qEf2HrslInDbRviQoJxPU1DtHLo4aKS2pr8DFW9hNKs5BB89CQza%2FigPCfD9OVUVgGIljBIjOzNb5fS9MYLQCb6ujP6LWI6MTqx0nyNm%2By1PSdGrznUVl5tEBzR%2B9RrcIK7A5%2FBBdWMbU2F%2BPLWsZpvaFUN3DdEMgCqgXF2hRIo%2FVPUVNEk2W6HMcUjW4cexYL%2BeccDllUppBorlYRUTfzFmHJ4Q%2FxpHyetzBdul4TpdRGiRpIFnP3%2BCm5pJFEIZirOw8X38sHrc4n3fqKfaMGlePT5piINvNMox25St60Sp%2B7kMW4XhcgALouBa2CQRXIAt07Q31Zm78MDCckGsNFX8ZMAfIAnAxkSWOvCf2%2B42PVua8LNA8mzm%2BQ9KYLiLWhSxPtEUJbTiRXhaF92jZfXi3u6v9ggQbdZUOyvHYxjbO%2BqUrpW0OzrjV4HJ83acjrP8hCfjXLgn0RrJB8EomHTMjZ0%2FxvZDfTzqDZy3O9aTlFxAJDYJVOrfepWZBvXvQaHHvHGXSeXpLtcTDY4J3DBjqkAdgIrj2ZnQnwZDMTQTxwP%2B5Pm7lZDkwtISiTW32HgzMDPZto2pdR5%2F%2F82NzQ4CwEkStWiWYqWmrA0jkjbcK9vIH4%2FzwtMr0DyrqKO6ptUwfth5wgVL6KJZ94K2eWre7MjN028%2FeTQbGMnZPXpCT8ETPaQ6HL%2FsoCa7Rrqal4uclB3CPzzPfSrCxH2y1av6CAt2iP0hhz69seLUPtp0Ct%2FyS4GJq0&X-Amz-Signature=5173bdbf480e31aa14ea28b5299be3018c7862555e350505bed278a1d322303f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIYQCEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCI6X8IBAGVSLQwts4fWZM5rVw9sQgoDgvjnBQgofqFGwIhAKmvlPSeFz8nuKIlSev9u2E1aCI2rxk%2F50nPDEgkFCVRKv8DCCcQABoMNjM3NDIzMTgzODA1Igxx%2FCzL%2BV105viKGAYq3ANg60aUleQw8ykl6fjEK9iv%2B95NfyCghA3pNze2AYBJofrSdNVm6mt6bYKO0mcJ5zNVFop0lqTPGy9nwdgIuZhLJfF8hxHBpYrg%2F0FyDAo8Y8qEf2HrslInDbRviQoJxPU1DtHLo4aKS2pr8DFW9hNKs5BB89CQza%2FigPCfD9OVUVgGIljBIjOzNb5fS9MYLQCb6ujP6LWI6MTqx0nyNm%2By1PSdGrznUVl5tEBzR%2B9RrcIK7A5%2FBBdWMbU2F%2BPLWsZpvaFUN3DdEMgCqgXF2hRIo%2FVPUVNEk2W6HMcUjW4cexYL%2BeccDllUppBorlYRUTfzFmHJ4Q%2FxpHyetzBdul4TpdRGiRpIFnP3%2BCm5pJFEIZirOw8X38sHrc4n3fqKfaMGlePT5piINvNMox25St60Sp%2B7kMW4XhcgALouBa2CQRXIAt07Q31Zm78MDCckGsNFX8ZMAfIAnAxkSWOvCf2%2B42PVua8LNA8mzm%2BQ9KYLiLWhSxPtEUJbTiRXhaF92jZfXi3u6v9ggQbdZUOyvHYxjbO%2BqUrpW0OzrjV4HJ83acjrP8hCfjXLgn0RrJB8EomHTMjZ0%2FxvZDfTzqDZy3O9aTlFxAJDYJVOrfepWZBvXvQaHHvHGXSeXpLtcTDY4J3DBjqkAdgIrj2ZnQnwZDMTQTxwP%2B5Pm7lZDkwtISiTW32HgzMDPZto2pdR5%2F%2F82NzQ4CwEkStWiWYqWmrA0jkjbcK9vIH4%2FzwtMr0DyrqKO6ptUwfth5wgVL6KJZ94K2eWre7MjN028%2FeTQbGMnZPXpCT8ETPaQ6HL%2FsoCa7Rrqal4uclB3CPzzPfSrCxH2y1av6CAt2iP0hhz69seLUPtp0Ct%2FyS4GJq0&X-Amz-Signature=14452535f2e7da83c36ea20007ba1536630f64cfcf19b255db859d832a65b14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LIYQCEC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCI6X8IBAGVSLQwts4fWZM5rVw9sQgoDgvjnBQgofqFGwIhAKmvlPSeFz8nuKIlSev9u2E1aCI2rxk%2F50nPDEgkFCVRKv8DCCcQABoMNjM3NDIzMTgzODA1Igxx%2FCzL%2BV105viKGAYq3ANg60aUleQw8ykl6fjEK9iv%2B95NfyCghA3pNze2AYBJofrSdNVm6mt6bYKO0mcJ5zNVFop0lqTPGy9nwdgIuZhLJfF8hxHBpYrg%2F0FyDAo8Y8qEf2HrslInDbRviQoJxPU1DtHLo4aKS2pr8DFW9hNKs5BB89CQza%2FigPCfD9OVUVgGIljBIjOzNb5fS9MYLQCb6ujP6LWI6MTqx0nyNm%2By1PSdGrznUVl5tEBzR%2B9RrcIK7A5%2FBBdWMbU2F%2BPLWsZpvaFUN3DdEMgCqgXF2hRIo%2FVPUVNEk2W6HMcUjW4cexYL%2BeccDllUppBorlYRUTfzFmHJ4Q%2FxpHyetzBdul4TpdRGiRpIFnP3%2BCm5pJFEIZirOw8X38sHrc4n3fqKfaMGlePT5piINvNMox25St60Sp%2B7kMW4XhcgALouBa2CQRXIAt07Q31Zm78MDCckGsNFX8ZMAfIAnAxkSWOvCf2%2B42PVua8LNA8mzm%2BQ9KYLiLWhSxPtEUJbTiRXhaF92jZfXi3u6v9ggQbdZUOyvHYxjbO%2BqUrpW0OzrjV4HJ83acjrP8hCfjXLgn0RrJB8EomHTMjZ0%2FxvZDfTzqDZy3O9aTlFxAJDYJVOrfepWZBvXvQaHHvHGXSeXpLtcTDY4J3DBjqkAdgIrj2ZnQnwZDMTQTxwP%2B5Pm7lZDkwtISiTW32HgzMDPZto2pdR5%2F%2F82NzQ4CwEkStWiWYqWmrA0jkjbcK9vIH4%2FzwtMr0DyrqKO6ptUwfth5wgVL6KJZ94K2eWre7MjN028%2FeTQbGMnZPXpCT8ETPaQ6HL%2FsoCa7Rrqal4uclB3CPzzPfSrCxH2y1av6CAt2iP0hhz69seLUPtp0Ct%2FyS4GJq0&X-Amz-Signature=c6082a6f10ee80b7cecc51849838de509f487e24122f7cf1de6e35c6d76e4061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
