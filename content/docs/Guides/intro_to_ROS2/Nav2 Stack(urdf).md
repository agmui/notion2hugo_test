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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6B4JLTQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO5A7y5gDmu1PVNmFMoId6x%2BBQT5TlHHHBFTZdtMaZJAiEAzUPvjOKZp5KO50dLIgL5DVUI9e4KeMSmJfDnhoQH4hQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpDGfTHJTPp6GRPOyrcAyOdGZrUkDwiggenvKnhHmUR0zr8A7we2osu6p4e74ENQAwlyaAqYTKh3NYSuLta1F7WVS560Id6SXeYnaFlf0B4Aaoo%2F32GFTbLA%2FXtlrrHIJXJKnEJAa40hx8QFtzNAoU709bZpq%2Fo6ljcoOvHWcT6qJeJH8r8dZhaH%2BzpdmvlVtAiQKK1NhzWyKEZ%2Fy7YgFpdlgU399jRV2OO%2B3U3wUiozuMB6uMtZxJcO0F4JfsAW6JNAe5x8nDmX0IHtqWYNJCfxSS99UM5HZ20YcMxtYByjAF05AMppjyFxNLvr0SK10jYEOjqlqIjJK4rUe728WOJOmZbTdwfl9kcjAWhJH9peVSgcdDRHVWzVCMIHGSKghbZJPuPA%2BVUENjR9KzoQuzumdkvksydn96yaHw5uJI6WXbHX1kFZngA2ijCfW6aNdaETvhNYmNWRn5xHib33sBDEoF1V1WcRT%2BDJd7PP19pebo3o16SIf9jRvFsoey%2BhbzRHd1PjvbVl%2BJbkgJHwOwIIYnuEMMyJoiM6wQnwnSTHadf0Ok3pdahjMVXarOcw2sczUNagw6M4op2uPd427StQ7g9%2FM1CnPMwMu3V5lDD3vPIhlgFpyKaQBGydBX3Gy3Q4N1M161OycR9MOXP5sEGOqUBUdghjCURDeyUPTIMR4gORU4I1MKdQ4HNQ1ly5OhtgbKqfNxD5i5NxCJFqXHlW7SotXiOD7Weu%2FpfDi%2Ftmvq7UFkXk8wDSG3NDcZWB8S%2B7v6PoSNaaXOwlQ2%2BkXrZiTG5PxtBJQKT81qNV24bIS5ckCWyYBBNbTkMHxew%2BoYn1lVDV8g6rC9vsWA%2BgnelRvJ%2Bu6Z06JgUGwNIFztBbmIs7IVQ6U24&X-Amz-Signature=76bd497acfd718051a6b0d78d181f8ba53eb02a6ef5fe75e604d089d31fd9a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6B4JLTQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO5A7y5gDmu1PVNmFMoId6x%2BBQT5TlHHHBFTZdtMaZJAiEAzUPvjOKZp5KO50dLIgL5DVUI9e4KeMSmJfDnhoQH4hQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpDGfTHJTPp6GRPOyrcAyOdGZrUkDwiggenvKnhHmUR0zr8A7we2osu6p4e74ENQAwlyaAqYTKh3NYSuLta1F7WVS560Id6SXeYnaFlf0B4Aaoo%2F32GFTbLA%2FXtlrrHIJXJKnEJAa40hx8QFtzNAoU709bZpq%2Fo6ljcoOvHWcT6qJeJH8r8dZhaH%2BzpdmvlVtAiQKK1NhzWyKEZ%2Fy7YgFpdlgU399jRV2OO%2B3U3wUiozuMB6uMtZxJcO0F4JfsAW6JNAe5x8nDmX0IHtqWYNJCfxSS99UM5HZ20YcMxtYByjAF05AMppjyFxNLvr0SK10jYEOjqlqIjJK4rUe728WOJOmZbTdwfl9kcjAWhJH9peVSgcdDRHVWzVCMIHGSKghbZJPuPA%2BVUENjR9KzoQuzumdkvksydn96yaHw5uJI6WXbHX1kFZngA2ijCfW6aNdaETvhNYmNWRn5xHib33sBDEoF1V1WcRT%2BDJd7PP19pebo3o16SIf9jRvFsoey%2BhbzRHd1PjvbVl%2BJbkgJHwOwIIYnuEMMyJoiM6wQnwnSTHadf0Ok3pdahjMVXarOcw2sczUNagw6M4op2uPd427StQ7g9%2FM1CnPMwMu3V5lDD3vPIhlgFpyKaQBGydBX3Gy3Q4N1M161OycR9MOXP5sEGOqUBUdghjCURDeyUPTIMR4gORU4I1MKdQ4HNQ1ly5OhtgbKqfNxD5i5NxCJFqXHlW7SotXiOD7Weu%2FpfDi%2Ftmvq7UFkXk8wDSG3NDcZWB8S%2B7v6PoSNaaXOwlQ2%2BkXrZiTG5PxtBJQKT81qNV24bIS5ckCWyYBBNbTkMHxew%2BoYn1lVDV8g6rC9vsWA%2BgnelRvJ%2Bu6Z06JgUGwNIFztBbmIs7IVQ6U24&X-Amz-Signature=cca815e3f3608afe62fb3f7fcf4e5c42cfea34469c8eaf9016986e50393b629f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6B4JLTQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO5A7y5gDmu1PVNmFMoId6x%2BBQT5TlHHHBFTZdtMaZJAiEAzUPvjOKZp5KO50dLIgL5DVUI9e4KeMSmJfDnhoQH4hQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpDGfTHJTPp6GRPOyrcAyOdGZrUkDwiggenvKnhHmUR0zr8A7we2osu6p4e74ENQAwlyaAqYTKh3NYSuLta1F7WVS560Id6SXeYnaFlf0B4Aaoo%2F32GFTbLA%2FXtlrrHIJXJKnEJAa40hx8QFtzNAoU709bZpq%2Fo6ljcoOvHWcT6qJeJH8r8dZhaH%2BzpdmvlVtAiQKK1NhzWyKEZ%2Fy7YgFpdlgU399jRV2OO%2B3U3wUiozuMB6uMtZxJcO0F4JfsAW6JNAe5x8nDmX0IHtqWYNJCfxSS99UM5HZ20YcMxtYByjAF05AMppjyFxNLvr0SK10jYEOjqlqIjJK4rUe728WOJOmZbTdwfl9kcjAWhJH9peVSgcdDRHVWzVCMIHGSKghbZJPuPA%2BVUENjR9KzoQuzumdkvksydn96yaHw5uJI6WXbHX1kFZngA2ijCfW6aNdaETvhNYmNWRn5xHib33sBDEoF1V1WcRT%2BDJd7PP19pebo3o16SIf9jRvFsoey%2BhbzRHd1PjvbVl%2BJbkgJHwOwIIYnuEMMyJoiM6wQnwnSTHadf0Ok3pdahjMVXarOcw2sczUNagw6M4op2uPd427StQ7g9%2FM1CnPMwMu3V5lDD3vPIhlgFpyKaQBGydBX3Gy3Q4N1M161OycR9MOXP5sEGOqUBUdghjCURDeyUPTIMR4gORU4I1MKdQ4HNQ1ly5OhtgbKqfNxD5i5NxCJFqXHlW7SotXiOD7Weu%2FpfDi%2Ftmvq7UFkXk8wDSG3NDcZWB8S%2B7v6PoSNaaXOwlQ2%2BkXrZiTG5PxtBJQKT81qNV24bIS5ckCWyYBBNbTkMHxew%2BoYn1lVDV8g6rC9vsWA%2BgnelRvJ%2Bu6Z06JgUGwNIFztBbmIs7IVQ6U24&X-Amz-Signature=b70e35e34d623526fbc62f8841aa3cab488708e98a569b977abe0589618684d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6B4JLTQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO5A7y5gDmu1PVNmFMoId6x%2BBQT5TlHHHBFTZdtMaZJAiEAzUPvjOKZp5KO50dLIgL5DVUI9e4KeMSmJfDnhoQH4hQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpDGfTHJTPp6GRPOyrcAyOdGZrUkDwiggenvKnhHmUR0zr8A7we2osu6p4e74ENQAwlyaAqYTKh3NYSuLta1F7WVS560Id6SXeYnaFlf0B4Aaoo%2F32GFTbLA%2FXtlrrHIJXJKnEJAa40hx8QFtzNAoU709bZpq%2Fo6ljcoOvHWcT6qJeJH8r8dZhaH%2BzpdmvlVtAiQKK1NhzWyKEZ%2Fy7YgFpdlgU399jRV2OO%2B3U3wUiozuMB6uMtZxJcO0F4JfsAW6JNAe5x8nDmX0IHtqWYNJCfxSS99UM5HZ20YcMxtYByjAF05AMppjyFxNLvr0SK10jYEOjqlqIjJK4rUe728WOJOmZbTdwfl9kcjAWhJH9peVSgcdDRHVWzVCMIHGSKghbZJPuPA%2BVUENjR9KzoQuzumdkvksydn96yaHw5uJI6WXbHX1kFZngA2ijCfW6aNdaETvhNYmNWRn5xHib33sBDEoF1V1WcRT%2BDJd7PP19pebo3o16SIf9jRvFsoey%2BhbzRHd1PjvbVl%2BJbkgJHwOwIIYnuEMMyJoiM6wQnwnSTHadf0Ok3pdahjMVXarOcw2sczUNagw6M4op2uPd427StQ7g9%2FM1CnPMwMu3V5lDD3vPIhlgFpyKaQBGydBX3Gy3Q4N1M161OycR9MOXP5sEGOqUBUdghjCURDeyUPTIMR4gORU4I1MKdQ4HNQ1ly5OhtgbKqfNxD5i5NxCJFqXHlW7SotXiOD7Weu%2FpfDi%2Ftmvq7UFkXk8wDSG3NDcZWB8S%2B7v6PoSNaaXOwlQ2%2BkXrZiTG5PxtBJQKT81qNV24bIS5ckCWyYBBNbTkMHxew%2BoYn1lVDV8g6rC9vsWA%2BgnelRvJ%2Bu6Z06JgUGwNIFztBbmIs7IVQ6U24&X-Amz-Signature=5a6b7d987cfc721ba2cbeb79109dc4742a8d728fcae1146a3c42a45331904f00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6B4JLTQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO5A7y5gDmu1PVNmFMoId6x%2BBQT5TlHHHBFTZdtMaZJAiEAzUPvjOKZp5KO50dLIgL5DVUI9e4KeMSmJfDnhoQH4hQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpDGfTHJTPp6GRPOyrcAyOdGZrUkDwiggenvKnhHmUR0zr8A7we2osu6p4e74ENQAwlyaAqYTKh3NYSuLta1F7WVS560Id6SXeYnaFlf0B4Aaoo%2F32GFTbLA%2FXtlrrHIJXJKnEJAa40hx8QFtzNAoU709bZpq%2Fo6ljcoOvHWcT6qJeJH8r8dZhaH%2BzpdmvlVtAiQKK1NhzWyKEZ%2Fy7YgFpdlgU399jRV2OO%2B3U3wUiozuMB6uMtZxJcO0F4JfsAW6JNAe5x8nDmX0IHtqWYNJCfxSS99UM5HZ20YcMxtYByjAF05AMppjyFxNLvr0SK10jYEOjqlqIjJK4rUe728WOJOmZbTdwfl9kcjAWhJH9peVSgcdDRHVWzVCMIHGSKghbZJPuPA%2BVUENjR9KzoQuzumdkvksydn96yaHw5uJI6WXbHX1kFZngA2ijCfW6aNdaETvhNYmNWRn5xHib33sBDEoF1V1WcRT%2BDJd7PP19pebo3o16SIf9jRvFsoey%2BhbzRHd1PjvbVl%2BJbkgJHwOwIIYnuEMMyJoiM6wQnwnSTHadf0Ok3pdahjMVXarOcw2sczUNagw6M4op2uPd427StQ7g9%2FM1CnPMwMu3V5lDD3vPIhlgFpyKaQBGydBX3Gy3Q4N1M161OycR9MOXP5sEGOqUBUdghjCURDeyUPTIMR4gORU4I1MKdQ4HNQ1ly5OhtgbKqfNxD5i5NxCJFqXHlW7SotXiOD7Weu%2FpfDi%2Ftmvq7UFkXk8wDSG3NDcZWB8S%2B7v6PoSNaaXOwlQ2%2BkXrZiTG5PxtBJQKT81qNV24bIS5ckCWyYBBNbTkMHxew%2BoYn1lVDV8g6rC9vsWA%2BgnelRvJ%2Bu6Z06JgUGwNIFztBbmIs7IVQ6U24&X-Amz-Signature=8dfb0d50f1f8fd327236af5abd74082c1581e749d6f4ea7e3eac7f667c0b494a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6B4JLTQ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGO5A7y5gDmu1PVNmFMoId6x%2BBQT5TlHHHBFTZdtMaZJAiEAzUPvjOKZp5KO50dLIgL5DVUI9e4KeMSmJfDnhoQH4hQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpDGfTHJTPp6GRPOyrcAyOdGZrUkDwiggenvKnhHmUR0zr8A7we2osu6p4e74ENQAwlyaAqYTKh3NYSuLta1F7WVS560Id6SXeYnaFlf0B4Aaoo%2F32GFTbLA%2FXtlrrHIJXJKnEJAa40hx8QFtzNAoU709bZpq%2Fo6ljcoOvHWcT6qJeJH8r8dZhaH%2BzpdmvlVtAiQKK1NhzWyKEZ%2Fy7YgFpdlgU399jRV2OO%2B3U3wUiozuMB6uMtZxJcO0F4JfsAW6JNAe5x8nDmX0IHtqWYNJCfxSS99UM5HZ20YcMxtYByjAF05AMppjyFxNLvr0SK10jYEOjqlqIjJK4rUe728WOJOmZbTdwfl9kcjAWhJH9peVSgcdDRHVWzVCMIHGSKghbZJPuPA%2BVUENjR9KzoQuzumdkvksydn96yaHw5uJI6WXbHX1kFZngA2ijCfW6aNdaETvhNYmNWRn5xHib33sBDEoF1V1WcRT%2BDJd7PP19pebo3o16SIf9jRvFsoey%2BhbzRHd1PjvbVl%2BJbkgJHwOwIIYnuEMMyJoiM6wQnwnSTHadf0Ok3pdahjMVXarOcw2sczUNagw6M4op2uPd427StQ7g9%2FM1CnPMwMu3V5lDD3vPIhlgFpyKaQBGydBX3Gy3Q4N1M161OycR9MOXP5sEGOqUBUdghjCURDeyUPTIMR4gORU4I1MKdQ4HNQ1ly5OhtgbKqfNxD5i5NxCJFqXHlW7SotXiOD7Weu%2FpfDi%2Ftmvq7UFkXk8wDSG3NDcZWB8S%2B7v6PoSNaaXOwlQ2%2BkXrZiTG5PxtBJQKT81qNV24bIS5ckCWyYBBNbTkMHxew%2BoYn1lVDV8g6rC9vsWA%2BgnelRvJ%2Bu6Z06JgUGwNIFztBbmIs7IVQ6U24&X-Amz-Signature=ad6e7858b53e6ae7a50dbd36bb0e451b68f76641e3187b1a24be0e46985e9bb0&X-Amz-SignedHeaders=host&x-id=GetObject)
