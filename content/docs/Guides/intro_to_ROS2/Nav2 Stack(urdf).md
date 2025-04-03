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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=176cc7bc304fe9be8a1fc5e4c8609e132f0402de5c2b53db1e311f0a45764ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=1cefd98ba918a52721a931461b66878b956946dccd57aeb2f1f6f45e39db47c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=6bb338e74f64a0cfc7c1a892d70eb4fa119018601b63701c87946ce7ffef0a75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=737674c12234b667a18894d969ee8006c6fa61ad12fd5e4666ef5c7e64420206&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=d7413c7ed984ebf6983d3e7498b5b8bb2f8c4aab183f75f6c8c28da949847eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWSZAKJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0zVKJArHFRQSFOLrzQcVOW0Pd7gJmhv8v0RWkF%2FfDlAiEAqhoEpQolKlGpiLctBHVNoTaPDOwh3o3o1bpcGZ95bPsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAfL3EhXdagcpn0IircA3h1RnOdX5OwuFIJZ4rdvFtJhThVne4t6BcWvw1Y4JEJzx9U6aUEcvYAjJ%2Bx8wV3HZoGm2h7K1ocFluEJaw3w59h2eNdA7suEfdh5tqVyOo1hkQP4vVkPpbzYt8hg%2BmqSGttm8B5D8AtiVyvE9JMQYnkPsjDXkerwiyLiZTtfRFNEi10JkJGZ5l3zzztCpaAt1rU8O80rShYGBjQKBOPfu5hmCvCMXVUQSxuznfERzwrtvYioXQOiP9CadogkBJO8I3cCZFsKGsxoZXjo6T6mugNX5mpnqIJrobmwYOFs84iLHBXorKzjrROr7wZ9RJE%2FZ7%2BKMbN4tL4pcQ7TM6HovP66F3uNu%2FKhYqO8Uvodi%2BeiaUnO1%2FKC5ZoZpmwYs11NInajyyN9zjvUqkZZ8fgRAJFz5gYi1jwJBYz0M8%2FdXZ9iulut6O%2FSUSMhsSGnoR%2FrDK%2Bu8HfA3l36V1LB%2BmBMDgDFprCpj1bZZBW%2FAUh%2FUpe32rUxBPKvWR%2F0LPAzf354askuEeQF07wAklzTbPZid%2BdinCJue6l2eugHxuoctzHTofJZxWn3PDXzd6kKTY8agPVa%2Ffi2ydmHS9o5aSmPC5xavrixQA6aSNSYRZ3rRgaQyEaDLZaa5N5tzyWMMuyur8GOqUBeNOdQ0sJGlYYv3Te1xC5nFGIt3W%2FGIPCZiYeINm3zkpaxpHh5q3BTm3IsRXrlOXAmkYJA%2B5NhPADH8DY8FFu5Y0ep52DysjzEfXZmLV1aQaegIMZ%2FNeUnPCRVc%2BWr1uf12YAvqX9o8NZGCz%2Bh7qNCoMFXfefsgDakgdKJAnHG1wTfcVzA04M1M8DfP3sXEfnVkx5t7Cnk2db8pgYqDYQKwBSTFj0&X-Amz-Signature=528326af2e3dd324fbaa0479d71e702788cda92a20b42b4e4caa1f417caa74c4&X-Amz-SignedHeaders=host&x-id=GetObject)
