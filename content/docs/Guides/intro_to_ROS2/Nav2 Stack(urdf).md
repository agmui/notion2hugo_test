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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEP4QINI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJE9OnrcOdS493pAPQfXU2Z9cjG1ZATYxnDVaMsh53wIgZwAHgfoJ94VR%2Bo969FUgKQksMOd5PnVm9YD8VlgegyUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDClzMy7QYLBePqokJSrcA1WdKiHqmgqg1FTT6Ia9%2BAnJ5RgSW8ZZeWLjwUu4kvY%2FXAHx6CSwtX7UpNW%2BZ9bE4bBtM9FjunryH%2BrcAihEyL3rB%2FiUC8DHuI9ZOC8Egpm2nml4FUD30QlugD%2FSAG1PnJW7D5fnPs0tCwP5YcW5fM8dHzgdchQyM9Ojpv6FOM%2BkV5ux1u%2FkjJE1mMcb%2FSu1JO4H3gML007kQ0asVqYLKaL%2FQ55PxCOMkf3s7bGwW8HjWf0UDA17bqj%2B4UB51vI4wEY9keGzzV%2F3NZ194V6Tz3I%2BkXLjrsGD%2F3UXgmrTijJ%2FQWCLEyDB8GgzpcPnLzZDWIFKWQvg2RN8V14fEYuB47P3uiBdDb0GzHm%2BsUVm1F0sbln%2FqvCJ4C0KY7rk3HRqMLgyHmr2FWv%2FGchGfPBXKIuXlMez3v1M%2Fk1ItUe0S%2FRyZ56Y%2B7n24bS5L9j3Y7vmQjSsK%2Bs6Pt%2FPDpI5tLqiSWpaYXPiO6iTlknWLopbQ%2BkFMeD6%2FE1rHWaJP9GmzvWUVM4y%2FmeJcDUZBbKdgXNCvhxSj7X%2FRsGBEBSbhE7ms%2FMR4%2Ft4oSmGQgkIdUKqua6sTi2mMuN8EwL%2BKvjOK8umf3rbX91VAlsrLARQB4nH%2F%2BXEZV%2FugDesvhqMbhLFMI6C2L4GOqUBeIDhYhaDYjYBqS5h8MTFKGemmVU48fmqZTTHCb9WkM%2BJUDuv5sw5yKL2DeqpVRSPj20gmfd8ggOq145A1y17Ig4mmzOApRONxYCIwO1CDPC09BhrX%2FYJJdHcBIJ0%2Bnj6%2FDBIL%2FqjuYNOJF%2BFV8zeVOoaOLMTzNJ0bRj%2FB%2BF%2BRGJt%2BV9Eyjq1D2f2skl1cYWXOg4Xl2aFCgPbGMLAYEBCW51ZXwE1&X-Amz-Signature=1c837754019d2dd42ed147a82c3d63045555f3c43ddf643e6b4fe5d8bbda0af2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEP4QINI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJE9OnrcOdS493pAPQfXU2Z9cjG1ZATYxnDVaMsh53wIgZwAHgfoJ94VR%2Bo969FUgKQksMOd5PnVm9YD8VlgegyUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDClzMy7QYLBePqokJSrcA1WdKiHqmgqg1FTT6Ia9%2BAnJ5RgSW8ZZeWLjwUu4kvY%2FXAHx6CSwtX7UpNW%2BZ9bE4bBtM9FjunryH%2BrcAihEyL3rB%2FiUC8DHuI9ZOC8Egpm2nml4FUD30QlugD%2FSAG1PnJW7D5fnPs0tCwP5YcW5fM8dHzgdchQyM9Ojpv6FOM%2BkV5ux1u%2FkjJE1mMcb%2FSu1JO4H3gML007kQ0asVqYLKaL%2FQ55PxCOMkf3s7bGwW8HjWf0UDA17bqj%2B4UB51vI4wEY9keGzzV%2F3NZ194V6Tz3I%2BkXLjrsGD%2F3UXgmrTijJ%2FQWCLEyDB8GgzpcPnLzZDWIFKWQvg2RN8V14fEYuB47P3uiBdDb0GzHm%2BsUVm1F0sbln%2FqvCJ4C0KY7rk3HRqMLgyHmr2FWv%2FGchGfPBXKIuXlMez3v1M%2Fk1ItUe0S%2FRyZ56Y%2B7n24bS5L9j3Y7vmQjSsK%2Bs6Pt%2FPDpI5tLqiSWpaYXPiO6iTlknWLopbQ%2BkFMeD6%2FE1rHWaJP9GmzvWUVM4y%2FmeJcDUZBbKdgXNCvhxSj7X%2FRsGBEBSbhE7ms%2FMR4%2Ft4oSmGQgkIdUKqua6sTi2mMuN8EwL%2BKvjOK8umf3rbX91VAlsrLARQB4nH%2F%2BXEZV%2FugDesvhqMbhLFMI6C2L4GOqUBeIDhYhaDYjYBqS5h8MTFKGemmVU48fmqZTTHCb9WkM%2BJUDuv5sw5yKL2DeqpVRSPj20gmfd8ggOq145A1y17Ig4mmzOApRONxYCIwO1CDPC09BhrX%2FYJJdHcBIJ0%2Bnj6%2FDBIL%2FqjuYNOJF%2BFV8zeVOoaOLMTzNJ0bRj%2FB%2BF%2BRGJt%2BV9Eyjq1D2f2skl1cYWXOg4Xl2aFCgPbGMLAYEBCW51ZXwE1&X-Amz-Signature=f9fb9361214acda741cbc5d8175418b1791258e67ebabc6ec0daf6daf6bcbcde&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEP4QINI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJE9OnrcOdS493pAPQfXU2Z9cjG1ZATYxnDVaMsh53wIgZwAHgfoJ94VR%2Bo969FUgKQksMOd5PnVm9YD8VlgegyUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDClzMy7QYLBePqokJSrcA1WdKiHqmgqg1FTT6Ia9%2BAnJ5RgSW8ZZeWLjwUu4kvY%2FXAHx6CSwtX7UpNW%2BZ9bE4bBtM9FjunryH%2BrcAihEyL3rB%2FiUC8DHuI9ZOC8Egpm2nml4FUD30QlugD%2FSAG1PnJW7D5fnPs0tCwP5YcW5fM8dHzgdchQyM9Ojpv6FOM%2BkV5ux1u%2FkjJE1mMcb%2FSu1JO4H3gML007kQ0asVqYLKaL%2FQ55PxCOMkf3s7bGwW8HjWf0UDA17bqj%2B4UB51vI4wEY9keGzzV%2F3NZ194V6Tz3I%2BkXLjrsGD%2F3UXgmrTijJ%2FQWCLEyDB8GgzpcPnLzZDWIFKWQvg2RN8V14fEYuB47P3uiBdDb0GzHm%2BsUVm1F0sbln%2FqvCJ4C0KY7rk3HRqMLgyHmr2FWv%2FGchGfPBXKIuXlMez3v1M%2Fk1ItUe0S%2FRyZ56Y%2B7n24bS5L9j3Y7vmQjSsK%2Bs6Pt%2FPDpI5tLqiSWpaYXPiO6iTlknWLopbQ%2BkFMeD6%2FE1rHWaJP9GmzvWUVM4y%2FmeJcDUZBbKdgXNCvhxSj7X%2FRsGBEBSbhE7ms%2FMR4%2Ft4oSmGQgkIdUKqua6sTi2mMuN8EwL%2BKvjOK8umf3rbX91VAlsrLARQB4nH%2F%2BXEZV%2FugDesvhqMbhLFMI6C2L4GOqUBeIDhYhaDYjYBqS5h8MTFKGemmVU48fmqZTTHCb9WkM%2BJUDuv5sw5yKL2DeqpVRSPj20gmfd8ggOq145A1y17Ig4mmzOApRONxYCIwO1CDPC09BhrX%2FYJJdHcBIJ0%2Bnj6%2FDBIL%2FqjuYNOJF%2BFV8zeVOoaOLMTzNJ0bRj%2FB%2BF%2BRGJt%2BV9Eyjq1D2f2skl1cYWXOg4Xl2aFCgPbGMLAYEBCW51ZXwE1&X-Amz-Signature=55323926099e4c852decf3d3a5a5396c99216d307f81b54d0291dbc2b0303390&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEP4QINI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJE9OnrcOdS493pAPQfXU2Z9cjG1ZATYxnDVaMsh53wIgZwAHgfoJ94VR%2Bo969FUgKQksMOd5PnVm9YD8VlgegyUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDClzMy7QYLBePqokJSrcA1WdKiHqmgqg1FTT6Ia9%2BAnJ5RgSW8ZZeWLjwUu4kvY%2FXAHx6CSwtX7UpNW%2BZ9bE4bBtM9FjunryH%2BrcAihEyL3rB%2FiUC8DHuI9ZOC8Egpm2nml4FUD30QlugD%2FSAG1PnJW7D5fnPs0tCwP5YcW5fM8dHzgdchQyM9Ojpv6FOM%2BkV5ux1u%2FkjJE1mMcb%2FSu1JO4H3gML007kQ0asVqYLKaL%2FQ55PxCOMkf3s7bGwW8HjWf0UDA17bqj%2B4UB51vI4wEY9keGzzV%2F3NZ194V6Tz3I%2BkXLjrsGD%2F3UXgmrTijJ%2FQWCLEyDB8GgzpcPnLzZDWIFKWQvg2RN8V14fEYuB47P3uiBdDb0GzHm%2BsUVm1F0sbln%2FqvCJ4C0KY7rk3HRqMLgyHmr2FWv%2FGchGfPBXKIuXlMez3v1M%2Fk1ItUe0S%2FRyZ56Y%2B7n24bS5L9j3Y7vmQjSsK%2Bs6Pt%2FPDpI5tLqiSWpaYXPiO6iTlknWLopbQ%2BkFMeD6%2FE1rHWaJP9GmzvWUVM4y%2FmeJcDUZBbKdgXNCvhxSj7X%2FRsGBEBSbhE7ms%2FMR4%2Ft4oSmGQgkIdUKqua6sTi2mMuN8EwL%2BKvjOK8umf3rbX91VAlsrLARQB4nH%2F%2BXEZV%2FugDesvhqMbhLFMI6C2L4GOqUBeIDhYhaDYjYBqS5h8MTFKGemmVU48fmqZTTHCb9WkM%2BJUDuv5sw5yKL2DeqpVRSPj20gmfd8ggOq145A1y17Ig4mmzOApRONxYCIwO1CDPC09BhrX%2FYJJdHcBIJ0%2Bnj6%2FDBIL%2FqjuYNOJF%2BFV8zeVOoaOLMTzNJ0bRj%2FB%2BF%2BRGJt%2BV9Eyjq1D2f2skl1cYWXOg4Xl2aFCgPbGMLAYEBCW51ZXwE1&X-Amz-Signature=f03b65f3ab151d85298d3727456dbeb64f5da888f127d22a7813aa0b2b440519&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEP4QINI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJE9OnrcOdS493pAPQfXU2Z9cjG1ZATYxnDVaMsh53wIgZwAHgfoJ94VR%2Bo969FUgKQksMOd5PnVm9YD8VlgegyUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDClzMy7QYLBePqokJSrcA1WdKiHqmgqg1FTT6Ia9%2BAnJ5RgSW8ZZeWLjwUu4kvY%2FXAHx6CSwtX7UpNW%2BZ9bE4bBtM9FjunryH%2BrcAihEyL3rB%2FiUC8DHuI9ZOC8Egpm2nml4FUD30QlugD%2FSAG1PnJW7D5fnPs0tCwP5YcW5fM8dHzgdchQyM9Ojpv6FOM%2BkV5ux1u%2FkjJE1mMcb%2FSu1JO4H3gML007kQ0asVqYLKaL%2FQ55PxCOMkf3s7bGwW8HjWf0UDA17bqj%2B4UB51vI4wEY9keGzzV%2F3NZ194V6Tz3I%2BkXLjrsGD%2F3UXgmrTijJ%2FQWCLEyDB8GgzpcPnLzZDWIFKWQvg2RN8V14fEYuB47P3uiBdDb0GzHm%2BsUVm1F0sbln%2FqvCJ4C0KY7rk3HRqMLgyHmr2FWv%2FGchGfPBXKIuXlMez3v1M%2Fk1ItUe0S%2FRyZ56Y%2B7n24bS5L9j3Y7vmQjSsK%2Bs6Pt%2FPDpI5tLqiSWpaYXPiO6iTlknWLopbQ%2BkFMeD6%2FE1rHWaJP9GmzvWUVM4y%2FmeJcDUZBbKdgXNCvhxSj7X%2FRsGBEBSbhE7ms%2FMR4%2Ft4oSmGQgkIdUKqua6sTi2mMuN8EwL%2BKvjOK8umf3rbX91VAlsrLARQB4nH%2F%2BXEZV%2FugDesvhqMbhLFMI6C2L4GOqUBeIDhYhaDYjYBqS5h8MTFKGemmVU48fmqZTTHCb9WkM%2BJUDuv5sw5yKL2DeqpVRSPj20gmfd8ggOq145A1y17Ig4mmzOApRONxYCIwO1CDPC09BhrX%2FYJJdHcBIJ0%2Bnj6%2FDBIL%2FqjuYNOJF%2BFV8zeVOoaOLMTzNJ0bRj%2FB%2BF%2BRGJt%2BV9Eyjq1D2f2skl1cYWXOg4Xl2aFCgPbGMLAYEBCW51ZXwE1&X-Amz-Signature=2b5fe0995d9da5deb3201f537e96983ac79eabf29d314ce052b10a87cff8a426&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEP4QINI%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTJE9OnrcOdS493pAPQfXU2Z9cjG1ZATYxnDVaMsh53wIgZwAHgfoJ94VR%2Bo969FUgKQksMOd5PnVm9YD8VlgegyUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDClzMy7QYLBePqokJSrcA1WdKiHqmgqg1FTT6Ia9%2BAnJ5RgSW8ZZeWLjwUu4kvY%2FXAHx6CSwtX7UpNW%2BZ9bE4bBtM9FjunryH%2BrcAihEyL3rB%2FiUC8DHuI9ZOC8Egpm2nml4FUD30QlugD%2FSAG1PnJW7D5fnPs0tCwP5YcW5fM8dHzgdchQyM9Ojpv6FOM%2BkV5ux1u%2FkjJE1mMcb%2FSu1JO4H3gML007kQ0asVqYLKaL%2FQ55PxCOMkf3s7bGwW8HjWf0UDA17bqj%2B4UB51vI4wEY9keGzzV%2F3NZ194V6Tz3I%2BkXLjrsGD%2F3UXgmrTijJ%2FQWCLEyDB8GgzpcPnLzZDWIFKWQvg2RN8V14fEYuB47P3uiBdDb0GzHm%2BsUVm1F0sbln%2FqvCJ4C0KY7rk3HRqMLgyHmr2FWv%2FGchGfPBXKIuXlMez3v1M%2Fk1ItUe0S%2FRyZ56Y%2B7n24bS5L9j3Y7vmQjSsK%2Bs6Pt%2FPDpI5tLqiSWpaYXPiO6iTlknWLopbQ%2BkFMeD6%2FE1rHWaJP9GmzvWUVM4y%2FmeJcDUZBbKdgXNCvhxSj7X%2FRsGBEBSbhE7ms%2FMR4%2Ft4oSmGQgkIdUKqua6sTi2mMuN8EwL%2BKvjOK8umf3rbX91VAlsrLARQB4nH%2F%2BXEZV%2FugDesvhqMbhLFMI6C2L4GOqUBeIDhYhaDYjYBqS5h8MTFKGemmVU48fmqZTTHCb9WkM%2BJUDuv5sw5yKL2DeqpVRSPj20gmfd8ggOq145A1y17Ig4mmzOApRONxYCIwO1CDPC09BhrX%2FYJJdHcBIJ0%2Bnj6%2FDBIL%2FqjuYNOJF%2BFV8zeVOoaOLMTzNJ0bRj%2FB%2BF%2BRGJt%2BV9Eyjq1D2f2skl1cYWXOg4Xl2aFCgPbGMLAYEBCW51ZXwE1&X-Amz-Signature=930096eaefe33281388328bd09e6d71dc718b812405fbd68c06ee589b620676e&X-Amz-SignedHeaders=host&x-id=GetObject)
