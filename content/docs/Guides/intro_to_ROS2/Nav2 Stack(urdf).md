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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDWL2OB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeDFeUfJ%2BNQxmmsQeumjN%2BPo6F4R04sZgOO1nxOvNewAiAaE%2FLLirZsAhqCu9B6plFkNA8UlHZDI7qhrrcyaLPYMyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfcRv79bvsmezn%2BSFKtwDA5rb4HtBdavCrHJpujHWS8fyFB9Jw%2FhiNO8JaCsjsI4SjXjVXhiBtuqKIlEArU8KDmWx338kLcbfGUa9ISKFFxg%2FdC08Y%2FfGpXdgPX7hdk3KFD0mxoxEPgNrfflGY52tKOsyAAw4CzlPdGlOgrBcfTUMblS6kbaY%2Fs3FIi88lZ76oZAqwu6zDdcZ%2Fw9B75oxfYMWYJ7isq%2BRz4DziNC3%2Bd1mAqgh6sK6ujYXqJJNSAgk7xf5%2BmK8QKXHilIHCPhZaAXLsSj2r9szVC8LXc%2FldUX2TyrFKX4%2B5vZMScmE8nljcLxBxYQWt26VD8lqF3oXJPU0rv%2BLJNcbaaLFEi0Yc6HgRUPDomoDsBCD6pYF3yb%2FOzwzbJ5gLXXndcJSy6nzahFz4805fpkjCFk9JweVY65R%2Fn6kv9bj5%2F9EJL61gGk3Mh3M8Vvq4qtKFyqGw1eFz5Tz0PyACIuUTJe%2Fb2%2F1Cz8jFe%2BFZeSYhE3UNY1S0aFAlO4c8AABLVwJezwBPasBByrQsORYke7mN0dGek7Fi6%2FmcpPkW268rnFBbWedqMmUUR7V%2BswsgOtzFWdNtUmXEgnvIYa7VTj1Jx%2BYhuR%2BY364ejhUE5KDzFCQsaRWfRxsWRWykHjXLa0tx4Aw%2B8qNvwY6pgGyr3fGm71%2FmoTiMdIKeBDEUS1GOejkJ3hsBOnj13sRx6vRTHvrfbV1tEnWWNd54il02DVNPMxJoDV%2B%2Fba5EatsADqVYts2l1siN0hKrLUP49rFnBTP0vTlV2sd4AnbeFnWnExFOnS226XecDVU9Ac5%2FmSGGcqIIFsxCcwoCQF6mDlQH7xK64ukSbYZOPGgIPbuApOeiINdclxOeDt5E48dfmE9Keh9&X-Amz-Signature=517bed176870f9fad89be2cebc4bfefb7c81394bbaee33f69210e6c4ef9eb788&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDWL2OB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeDFeUfJ%2BNQxmmsQeumjN%2BPo6F4R04sZgOO1nxOvNewAiAaE%2FLLirZsAhqCu9B6plFkNA8UlHZDI7qhrrcyaLPYMyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfcRv79bvsmezn%2BSFKtwDA5rb4HtBdavCrHJpujHWS8fyFB9Jw%2FhiNO8JaCsjsI4SjXjVXhiBtuqKIlEArU8KDmWx338kLcbfGUa9ISKFFxg%2FdC08Y%2FfGpXdgPX7hdk3KFD0mxoxEPgNrfflGY52tKOsyAAw4CzlPdGlOgrBcfTUMblS6kbaY%2Fs3FIi88lZ76oZAqwu6zDdcZ%2Fw9B75oxfYMWYJ7isq%2BRz4DziNC3%2Bd1mAqgh6sK6ujYXqJJNSAgk7xf5%2BmK8QKXHilIHCPhZaAXLsSj2r9szVC8LXc%2FldUX2TyrFKX4%2B5vZMScmE8nljcLxBxYQWt26VD8lqF3oXJPU0rv%2BLJNcbaaLFEi0Yc6HgRUPDomoDsBCD6pYF3yb%2FOzwzbJ5gLXXndcJSy6nzahFz4805fpkjCFk9JweVY65R%2Fn6kv9bj5%2F9EJL61gGk3Mh3M8Vvq4qtKFyqGw1eFz5Tz0PyACIuUTJe%2Fb2%2F1Cz8jFe%2BFZeSYhE3UNY1S0aFAlO4c8AABLVwJezwBPasBByrQsORYke7mN0dGek7Fi6%2FmcpPkW268rnFBbWedqMmUUR7V%2BswsgOtzFWdNtUmXEgnvIYa7VTj1Jx%2BYhuR%2BY364ejhUE5KDzFCQsaRWfRxsWRWykHjXLa0tx4Aw%2B8qNvwY6pgGyr3fGm71%2FmoTiMdIKeBDEUS1GOejkJ3hsBOnj13sRx6vRTHvrfbV1tEnWWNd54il02DVNPMxJoDV%2B%2Fba5EatsADqVYts2l1siN0hKrLUP49rFnBTP0vTlV2sd4AnbeFnWnExFOnS226XecDVU9Ac5%2FmSGGcqIIFsxCcwoCQF6mDlQH7xK64ukSbYZOPGgIPbuApOeiINdclxOeDt5E48dfmE9Keh9&X-Amz-Signature=83abc6f8b85f9fec3e3b34b22fad90e6ca2f2b906789d7411b78dce1effc43ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDWL2OB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeDFeUfJ%2BNQxmmsQeumjN%2BPo6F4R04sZgOO1nxOvNewAiAaE%2FLLirZsAhqCu9B6plFkNA8UlHZDI7qhrrcyaLPYMyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfcRv79bvsmezn%2BSFKtwDA5rb4HtBdavCrHJpujHWS8fyFB9Jw%2FhiNO8JaCsjsI4SjXjVXhiBtuqKIlEArU8KDmWx338kLcbfGUa9ISKFFxg%2FdC08Y%2FfGpXdgPX7hdk3KFD0mxoxEPgNrfflGY52tKOsyAAw4CzlPdGlOgrBcfTUMblS6kbaY%2Fs3FIi88lZ76oZAqwu6zDdcZ%2Fw9B75oxfYMWYJ7isq%2BRz4DziNC3%2Bd1mAqgh6sK6ujYXqJJNSAgk7xf5%2BmK8QKXHilIHCPhZaAXLsSj2r9szVC8LXc%2FldUX2TyrFKX4%2B5vZMScmE8nljcLxBxYQWt26VD8lqF3oXJPU0rv%2BLJNcbaaLFEi0Yc6HgRUPDomoDsBCD6pYF3yb%2FOzwzbJ5gLXXndcJSy6nzahFz4805fpkjCFk9JweVY65R%2Fn6kv9bj5%2F9EJL61gGk3Mh3M8Vvq4qtKFyqGw1eFz5Tz0PyACIuUTJe%2Fb2%2F1Cz8jFe%2BFZeSYhE3UNY1S0aFAlO4c8AABLVwJezwBPasBByrQsORYke7mN0dGek7Fi6%2FmcpPkW268rnFBbWedqMmUUR7V%2BswsgOtzFWdNtUmXEgnvIYa7VTj1Jx%2BYhuR%2BY364ejhUE5KDzFCQsaRWfRxsWRWykHjXLa0tx4Aw%2B8qNvwY6pgGyr3fGm71%2FmoTiMdIKeBDEUS1GOejkJ3hsBOnj13sRx6vRTHvrfbV1tEnWWNd54il02DVNPMxJoDV%2B%2Fba5EatsADqVYts2l1siN0hKrLUP49rFnBTP0vTlV2sd4AnbeFnWnExFOnS226XecDVU9Ac5%2FmSGGcqIIFsxCcwoCQF6mDlQH7xK64ukSbYZOPGgIPbuApOeiINdclxOeDt5E48dfmE9Keh9&X-Amz-Signature=b8deb8fec79412d8572acb04cd8af2f2734ef273083b420dae040a65a93db0fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDWL2OB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeDFeUfJ%2BNQxmmsQeumjN%2BPo6F4R04sZgOO1nxOvNewAiAaE%2FLLirZsAhqCu9B6plFkNA8UlHZDI7qhrrcyaLPYMyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfcRv79bvsmezn%2BSFKtwDA5rb4HtBdavCrHJpujHWS8fyFB9Jw%2FhiNO8JaCsjsI4SjXjVXhiBtuqKIlEArU8KDmWx338kLcbfGUa9ISKFFxg%2FdC08Y%2FfGpXdgPX7hdk3KFD0mxoxEPgNrfflGY52tKOsyAAw4CzlPdGlOgrBcfTUMblS6kbaY%2Fs3FIi88lZ76oZAqwu6zDdcZ%2Fw9B75oxfYMWYJ7isq%2BRz4DziNC3%2Bd1mAqgh6sK6ujYXqJJNSAgk7xf5%2BmK8QKXHilIHCPhZaAXLsSj2r9szVC8LXc%2FldUX2TyrFKX4%2B5vZMScmE8nljcLxBxYQWt26VD8lqF3oXJPU0rv%2BLJNcbaaLFEi0Yc6HgRUPDomoDsBCD6pYF3yb%2FOzwzbJ5gLXXndcJSy6nzahFz4805fpkjCFk9JweVY65R%2Fn6kv9bj5%2F9EJL61gGk3Mh3M8Vvq4qtKFyqGw1eFz5Tz0PyACIuUTJe%2Fb2%2F1Cz8jFe%2BFZeSYhE3UNY1S0aFAlO4c8AABLVwJezwBPasBByrQsORYke7mN0dGek7Fi6%2FmcpPkW268rnFBbWedqMmUUR7V%2BswsgOtzFWdNtUmXEgnvIYa7VTj1Jx%2BYhuR%2BY364ejhUE5KDzFCQsaRWfRxsWRWykHjXLa0tx4Aw%2B8qNvwY6pgGyr3fGm71%2FmoTiMdIKeBDEUS1GOejkJ3hsBOnj13sRx6vRTHvrfbV1tEnWWNd54il02DVNPMxJoDV%2B%2Fba5EatsADqVYts2l1siN0hKrLUP49rFnBTP0vTlV2sd4AnbeFnWnExFOnS226XecDVU9Ac5%2FmSGGcqIIFsxCcwoCQF6mDlQH7xK64ukSbYZOPGgIPbuApOeiINdclxOeDt5E48dfmE9Keh9&X-Amz-Signature=daa4b6ec8c50e89bc40ddaf3cc88158f67060dbd7532f773e1f0189e2162a141&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDWL2OB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeDFeUfJ%2BNQxmmsQeumjN%2BPo6F4R04sZgOO1nxOvNewAiAaE%2FLLirZsAhqCu9B6plFkNA8UlHZDI7qhrrcyaLPYMyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfcRv79bvsmezn%2BSFKtwDA5rb4HtBdavCrHJpujHWS8fyFB9Jw%2FhiNO8JaCsjsI4SjXjVXhiBtuqKIlEArU8KDmWx338kLcbfGUa9ISKFFxg%2FdC08Y%2FfGpXdgPX7hdk3KFD0mxoxEPgNrfflGY52tKOsyAAw4CzlPdGlOgrBcfTUMblS6kbaY%2Fs3FIi88lZ76oZAqwu6zDdcZ%2Fw9B75oxfYMWYJ7isq%2BRz4DziNC3%2Bd1mAqgh6sK6ujYXqJJNSAgk7xf5%2BmK8QKXHilIHCPhZaAXLsSj2r9szVC8LXc%2FldUX2TyrFKX4%2B5vZMScmE8nljcLxBxYQWt26VD8lqF3oXJPU0rv%2BLJNcbaaLFEi0Yc6HgRUPDomoDsBCD6pYF3yb%2FOzwzbJ5gLXXndcJSy6nzahFz4805fpkjCFk9JweVY65R%2Fn6kv9bj5%2F9EJL61gGk3Mh3M8Vvq4qtKFyqGw1eFz5Tz0PyACIuUTJe%2Fb2%2F1Cz8jFe%2BFZeSYhE3UNY1S0aFAlO4c8AABLVwJezwBPasBByrQsORYke7mN0dGek7Fi6%2FmcpPkW268rnFBbWedqMmUUR7V%2BswsgOtzFWdNtUmXEgnvIYa7VTj1Jx%2BYhuR%2BY364ejhUE5KDzFCQsaRWfRxsWRWykHjXLa0tx4Aw%2B8qNvwY6pgGyr3fGm71%2FmoTiMdIKeBDEUS1GOejkJ3hsBOnj13sRx6vRTHvrfbV1tEnWWNd54il02DVNPMxJoDV%2B%2Fba5EatsADqVYts2l1siN0hKrLUP49rFnBTP0vTlV2sd4AnbeFnWnExFOnS226XecDVU9Ac5%2FmSGGcqIIFsxCcwoCQF6mDlQH7xK64ukSbYZOPGgIPbuApOeiINdclxOeDt5E48dfmE9Keh9&X-Amz-Signature=ed811833475997121995f94bbf8428033aa21d79ba8a26920c0ca8fb4bf19ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJDWL2OB%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T032314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeDFeUfJ%2BNQxmmsQeumjN%2BPo6F4R04sZgOO1nxOvNewAiAaE%2FLLirZsAhqCu9B6plFkNA8UlHZDI7qhrrcyaLPYMyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMfcRv79bvsmezn%2BSFKtwDA5rb4HtBdavCrHJpujHWS8fyFB9Jw%2FhiNO8JaCsjsI4SjXjVXhiBtuqKIlEArU8KDmWx338kLcbfGUa9ISKFFxg%2FdC08Y%2FfGpXdgPX7hdk3KFD0mxoxEPgNrfflGY52tKOsyAAw4CzlPdGlOgrBcfTUMblS6kbaY%2Fs3FIi88lZ76oZAqwu6zDdcZ%2Fw9B75oxfYMWYJ7isq%2BRz4DziNC3%2Bd1mAqgh6sK6ujYXqJJNSAgk7xf5%2BmK8QKXHilIHCPhZaAXLsSj2r9szVC8LXc%2FldUX2TyrFKX4%2B5vZMScmE8nljcLxBxYQWt26VD8lqF3oXJPU0rv%2BLJNcbaaLFEi0Yc6HgRUPDomoDsBCD6pYF3yb%2FOzwzbJ5gLXXndcJSy6nzahFz4805fpkjCFk9JweVY65R%2Fn6kv9bj5%2F9EJL61gGk3Mh3M8Vvq4qtKFyqGw1eFz5Tz0PyACIuUTJe%2Fb2%2F1Cz8jFe%2BFZeSYhE3UNY1S0aFAlO4c8AABLVwJezwBPasBByrQsORYke7mN0dGek7Fi6%2FmcpPkW268rnFBbWedqMmUUR7V%2BswsgOtzFWdNtUmXEgnvIYa7VTj1Jx%2BYhuR%2BY364ejhUE5KDzFCQsaRWfRxsWRWykHjXLa0tx4Aw%2B8qNvwY6pgGyr3fGm71%2FmoTiMdIKeBDEUS1GOejkJ3hsBOnj13sRx6vRTHvrfbV1tEnWWNd54il02DVNPMxJoDV%2B%2Fba5EatsADqVYts2l1siN0hKrLUP49rFnBTP0vTlV2sd4AnbeFnWnExFOnS226XecDVU9Ac5%2FmSGGcqIIFsxCcwoCQF6mDlQH7xK64ukSbYZOPGgIPbuApOeiINdclxOeDt5E48dfmE9Keh9&X-Amz-Signature=4e2f182c740b027c9b8e30dfb0f7e3a3db61b570b6155fe8494685b4cb7d9815&X-Amz-SignedHeaders=host&x-id=GetObject)
