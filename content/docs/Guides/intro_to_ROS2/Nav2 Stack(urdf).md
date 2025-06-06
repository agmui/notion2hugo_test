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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGJQED6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHZng6HQM79tB88DBJ2RUE1MQixFS1eOJ2hmiitRM8%2FyAiEArZpUfJQODkJja9j95G6SP%2FXHjTCiAdgAx0ziYs%2FQbhQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEeDgbgq1GO7YnJX9CrcA11A7%2Bl5qQ%2B%2FZ3GKib07k9Z2U19JHVab7NH60dOF7RQioFgNq6a2QOVV%2Fjl9ccFk1REnRffT%2B87Vz32%2FK9PqzKxNGq3jL7kbGI5kJGE1%2Fo4HBeYha%2FXuJ87rz41Iu202SPsElbKf%2BPLV4Xw5fte6O4LzXX7G6%2BH%2BzhjGCIKGEizhbqyN385VRWDlbO3Nn0ENaN2XB2q1jRhTudQ2yVjEh2bSPmi7j5GR1xK8HtbjSQn%2FDDvYcceb4sadDN6z8qt4j%2BM7T6a3ak%2F2c9z9ZPoABRbgF%2Bgjsh3CAuQ3LUqUjG8TareF%2BHg87C1NkNLtC0q31H7DGPVo9gnEZI3qQ2fN%2BpTnh%2Fu%2Bm6QMM%2Fzd8ih8PC2ELil1f%2BoZk3k11tfilA1pLJowK0V4PE9yVZj2YvyqB%2FfFXLfAbf9E%2FcKTyNEsls9EaXqQgs9pQc8hYIFupedgy6B9wRz6ohUtSzeV4vDkpIeirrPDphgAeLltHA3NM55ztBe8mFIZqC6p8uTHzwGNUgd3VyjzerJXczVsxKsQnD06UrDjw%2FxPQOAkfjO8CnESavJI6UJ%2BHV26NPSYBG%2FbtVpUyWXSjH7AXElPyhyVfYTR1OUqHDiDlnDoSiVweGW5Pxt2g2JackbbQZc5MJaWisIGOqUBnmSl4L7%2F9nlcQyo3z%2B5vbhIyve4VZVNS63M78C%2FDho8zhx3umieV2V189O5YEDJqwo5wrn%2F%2BsC65x%2FZx19IVM6Ian3MepdLq5A8H79Ns9O1hYF5wCullm7KPwtnqCK9xe8PZ4iWZ8baixO1Ye%2FGOI4l476NqCHA%2FyOZ%2B5InzwX8dmK8siTV7IMPtTnUD1xRRLNO8I%2Fv6lH8UofRrU9JBid1gV3Mz&X-Amz-Signature=ce4452c17a4827ade6a1bd69822803b21f1889b80ef4285e0a48b994a0884196&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGJQED6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHZng6HQM79tB88DBJ2RUE1MQixFS1eOJ2hmiitRM8%2FyAiEArZpUfJQODkJja9j95G6SP%2FXHjTCiAdgAx0ziYs%2FQbhQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEeDgbgq1GO7YnJX9CrcA11A7%2Bl5qQ%2B%2FZ3GKib07k9Z2U19JHVab7NH60dOF7RQioFgNq6a2QOVV%2Fjl9ccFk1REnRffT%2B87Vz32%2FK9PqzKxNGq3jL7kbGI5kJGE1%2Fo4HBeYha%2FXuJ87rz41Iu202SPsElbKf%2BPLV4Xw5fte6O4LzXX7G6%2BH%2BzhjGCIKGEizhbqyN385VRWDlbO3Nn0ENaN2XB2q1jRhTudQ2yVjEh2bSPmi7j5GR1xK8HtbjSQn%2FDDvYcceb4sadDN6z8qt4j%2BM7T6a3ak%2F2c9z9ZPoABRbgF%2Bgjsh3CAuQ3LUqUjG8TareF%2BHg87C1NkNLtC0q31H7DGPVo9gnEZI3qQ2fN%2BpTnh%2Fu%2Bm6QMM%2Fzd8ih8PC2ELil1f%2BoZk3k11tfilA1pLJowK0V4PE9yVZj2YvyqB%2FfFXLfAbf9E%2FcKTyNEsls9EaXqQgs9pQc8hYIFupedgy6B9wRz6ohUtSzeV4vDkpIeirrPDphgAeLltHA3NM55ztBe8mFIZqC6p8uTHzwGNUgd3VyjzerJXczVsxKsQnD06UrDjw%2FxPQOAkfjO8CnESavJI6UJ%2BHV26NPSYBG%2FbtVpUyWXSjH7AXElPyhyVfYTR1OUqHDiDlnDoSiVweGW5Pxt2g2JackbbQZc5MJaWisIGOqUBnmSl4L7%2F9nlcQyo3z%2B5vbhIyve4VZVNS63M78C%2FDho8zhx3umieV2V189O5YEDJqwo5wrn%2F%2BsC65x%2FZx19IVM6Ian3MepdLq5A8H79Ns9O1hYF5wCullm7KPwtnqCK9xe8PZ4iWZ8baixO1Ye%2FGOI4l476NqCHA%2FyOZ%2B5InzwX8dmK8siTV7IMPtTnUD1xRRLNO8I%2Fv6lH8UofRrU9JBid1gV3Mz&X-Amz-Signature=fda43263acd1ed0adb9be347799cce407bca1090ac0e525739670c4ad7514c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGJQED6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHZng6HQM79tB88DBJ2RUE1MQixFS1eOJ2hmiitRM8%2FyAiEArZpUfJQODkJja9j95G6SP%2FXHjTCiAdgAx0ziYs%2FQbhQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEeDgbgq1GO7YnJX9CrcA11A7%2Bl5qQ%2B%2FZ3GKib07k9Z2U19JHVab7NH60dOF7RQioFgNq6a2QOVV%2Fjl9ccFk1REnRffT%2B87Vz32%2FK9PqzKxNGq3jL7kbGI5kJGE1%2Fo4HBeYha%2FXuJ87rz41Iu202SPsElbKf%2BPLV4Xw5fte6O4LzXX7G6%2BH%2BzhjGCIKGEizhbqyN385VRWDlbO3Nn0ENaN2XB2q1jRhTudQ2yVjEh2bSPmi7j5GR1xK8HtbjSQn%2FDDvYcceb4sadDN6z8qt4j%2BM7T6a3ak%2F2c9z9ZPoABRbgF%2Bgjsh3CAuQ3LUqUjG8TareF%2BHg87C1NkNLtC0q31H7DGPVo9gnEZI3qQ2fN%2BpTnh%2Fu%2Bm6QMM%2Fzd8ih8PC2ELil1f%2BoZk3k11tfilA1pLJowK0V4PE9yVZj2YvyqB%2FfFXLfAbf9E%2FcKTyNEsls9EaXqQgs9pQc8hYIFupedgy6B9wRz6ohUtSzeV4vDkpIeirrPDphgAeLltHA3NM55ztBe8mFIZqC6p8uTHzwGNUgd3VyjzerJXczVsxKsQnD06UrDjw%2FxPQOAkfjO8CnESavJI6UJ%2BHV26NPSYBG%2FbtVpUyWXSjH7AXElPyhyVfYTR1OUqHDiDlnDoSiVweGW5Pxt2g2JackbbQZc5MJaWisIGOqUBnmSl4L7%2F9nlcQyo3z%2B5vbhIyve4VZVNS63M78C%2FDho8zhx3umieV2V189O5YEDJqwo5wrn%2F%2BsC65x%2FZx19IVM6Ian3MepdLq5A8H79Ns9O1hYF5wCullm7KPwtnqCK9xe8PZ4iWZ8baixO1Ye%2FGOI4l476NqCHA%2FyOZ%2B5InzwX8dmK8siTV7IMPtTnUD1xRRLNO8I%2Fv6lH8UofRrU9JBid1gV3Mz&X-Amz-Signature=a1126b410215a28d5f98d73cdccf10504942e7002e2eb16612b1eca7c078472d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGJQED6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHZng6HQM79tB88DBJ2RUE1MQixFS1eOJ2hmiitRM8%2FyAiEArZpUfJQODkJja9j95G6SP%2FXHjTCiAdgAx0ziYs%2FQbhQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEeDgbgq1GO7YnJX9CrcA11A7%2Bl5qQ%2B%2FZ3GKib07k9Z2U19JHVab7NH60dOF7RQioFgNq6a2QOVV%2Fjl9ccFk1REnRffT%2B87Vz32%2FK9PqzKxNGq3jL7kbGI5kJGE1%2Fo4HBeYha%2FXuJ87rz41Iu202SPsElbKf%2BPLV4Xw5fte6O4LzXX7G6%2BH%2BzhjGCIKGEizhbqyN385VRWDlbO3Nn0ENaN2XB2q1jRhTudQ2yVjEh2bSPmi7j5GR1xK8HtbjSQn%2FDDvYcceb4sadDN6z8qt4j%2BM7T6a3ak%2F2c9z9ZPoABRbgF%2Bgjsh3CAuQ3LUqUjG8TareF%2BHg87C1NkNLtC0q31H7DGPVo9gnEZI3qQ2fN%2BpTnh%2Fu%2Bm6QMM%2Fzd8ih8PC2ELil1f%2BoZk3k11tfilA1pLJowK0V4PE9yVZj2YvyqB%2FfFXLfAbf9E%2FcKTyNEsls9EaXqQgs9pQc8hYIFupedgy6B9wRz6ohUtSzeV4vDkpIeirrPDphgAeLltHA3NM55ztBe8mFIZqC6p8uTHzwGNUgd3VyjzerJXczVsxKsQnD06UrDjw%2FxPQOAkfjO8CnESavJI6UJ%2BHV26NPSYBG%2FbtVpUyWXSjH7AXElPyhyVfYTR1OUqHDiDlnDoSiVweGW5Pxt2g2JackbbQZc5MJaWisIGOqUBnmSl4L7%2F9nlcQyo3z%2B5vbhIyve4VZVNS63M78C%2FDho8zhx3umieV2V189O5YEDJqwo5wrn%2F%2BsC65x%2FZx19IVM6Ian3MepdLq5A8H79Ns9O1hYF5wCullm7KPwtnqCK9xe8PZ4iWZ8baixO1Ye%2FGOI4l476NqCHA%2FyOZ%2B5InzwX8dmK8siTV7IMPtTnUD1xRRLNO8I%2Fv6lH8UofRrU9JBid1gV3Mz&X-Amz-Signature=fb64e2f6ac7d6ebf57b169d8ca9edf8d2711cd31607dd799c5bf20827441b09b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGJQED6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHZng6HQM79tB88DBJ2RUE1MQixFS1eOJ2hmiitRM8%2FyAiEArZpUfJQODkJja9j95G6SP%2FXHjTCiAdgAx0ziYs%2FQbhQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEeDgbgq1GO7YnJX9CrcA11A7%2Bl5qQ%2B%2FZ3GKib07k9Z2U19JHVab7NH60dOF7RQioFgNq6a2QOVV%2Fjl9ccFk1REnRffT%2B87Vz32%2FK9PqzKxNGq3jL7kbGI5kJGE1%2Fo4HBeYha%2FXuJ87rz41Iu202SPsElbKf%2BPLV4Xw5fte6O4LzXX7G6%2BH%2BzhjGCIKGEizhbqyN385VRWDlbO3Nn0ENaN2XB2q1jRhTudQ2yVjEh2bSPmi7j5GR1xK8HtbjSQn%2FDDvYcceb4sadDN6z8qt4j%2BM7T6a3ak%2F2c9z9ZPoABRbgF%2Bgjsh3CAuQ3LUqUjG8TareF%2BHg87C1NkNLtC0q31H7DGPVo9gnEZI3qQ2fN%2BpTnh%2Fu%2Bm6QMM%2Fzd8ih8PC2ELil1f%2BoZk3k11tfilA1pLJowK0V4PE9yVZj2YvyqB%2FfFXLfAbf9E%2FcKTyNEsls9EaXqQgs9pQc8hYIFupedgy6B9wRz6ohUtSzeV4vDkpIeirrPDphgAeLltHA3NM55ztBe8mFIZqC6p8uTHzwGNUgd3VyjzerJXczVsxKsQnD06UrDjw%2FxPQOAkfjO8CnESavJI6UJ%2BHV26NPSYBG%2FbtVpUyWXSjH7AXElPyhyVfYTR1OUqHDiDlnDoSiVweGW5Pxt2g2JackbbQZc5MJaWisIGOqUBnmSl4L7%2F9nlcQyo3z%2B5vbhIyve4VZVNS63M78C%2FDho8zhx3umieV2V189O5YEDJqwo5wrn%2F%2BsC65x%2FZx19IVM6Ian3MepdLq5A8H79Ns9O1hYF5wCullm7KPwtnqCK9xe8PZ4iWZ8baixO1Ye%2FGOI4l476NqCHA%2FyOZ%2B5InzwX8dmK8siTV7IMPtTnUD1xRRLNO8I%2Fv6lH8UofRrU9JBid1gV3Mz&X-Amz-Signature=21565b3fbc19035100229d295046940a382c3aa394e31adfa2ac11171cda9c90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GGJQED6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHZng6HQM79tB88DBJ2RUE1MQixFS1eOJ2hmiitRM8%2FyAiEArZpUfJQODkJja9j95G6SP%2FXHjTCiAdgAx0ziYs%2FQbhQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDEeDgbgq1GO7YnJX9CrcA11A7%2Bl5qQ%2B%2FZ3GKib07k9Z2U19JHVab7NH60dOF7RQioFgNq6a2QOVV%2Fjl9ccFk1REnRffT%2B87Vz32%2FK9PqzKxNGq3jL7kbGI5kJGE1%2Fo4HBeYha%2FXuJ87rz41Iu202SPsElbKf%2BPLV4Xw5fte6O4LzXX7G6%2BH%2BzhjGCIKGEizhbqyN385VRWDlbO3Nn0ENaN2XB2q1jRhTudQ2yVjEh2bSPmi7j5GR1xK8HtbjSQn%2FDDvYcceb4sadDN6z8qt4j%2BM7T6a3ak%2F2c9z9ZPoABRbgF%2Bgjsh3CAuQ3LUqUjG8TareF%2BHg87C1NkNLtC0q31H7DGPVo9gnEZI3qQ2fN%2BpTnh%2Fu%2Bm6QMM%2Fzd8ih8PC2ELil1f%2BoZk3k11tfilA1pLJowK0V4PE9yVZj2YvyqB%2FfFXLfAbf9E%2FcKTyNEsls9EaXqQgs9pQc8hYIFupedgy6B9wRz6ohUtSzeV4vDkpIeirrPDphgAeLltHA3NM55ztBe8mFIZqC6p8uTHzwGNUgd3VyjzerJXczVsxKsQnD06UrDjw%2FxPQOAkfjO8CnESavJI6UJ%2BHV26NPSYBG%2FbtVpUyWXSjH7AXElPyhyVfYTR1OUqHDiDlnDoSiVweGW5Pxt2g2JackbbQZc5MJaWisIGOqUBnmSl4L7%2F9nlcQyo3z%2B5vbhIyve4VZVNS63M78C%2FDho8zhx3umieV2V189O5YEDJqwo5wrn%2F%2BsC65x%2FZx19IVM6Ian3MepdLq5A8H79Ns9O1hYF5wCullm7KPwtnqCK9xe8PZ4iWZ8baixO1Ye%2FGOI4l476NqCHA%2FyOZ%2B5InzwX8dmK8siTV7IMPtTnUD1xRRLNO8I%2Fv6lH8UofRrU9JBid1gV3Mz&X-Amz-Signature=60c46c7851bf149cb22cf292bff6a8c5279c931fd22d386b2f8c6d04e1894699&X-Amz-SignedHeaders=host&x-id=GetObject)
