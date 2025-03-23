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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYSA6O2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHxbX%2FdXRcm916nOCYSPMTeu%2B2VXmlfgzHUCELPnTIEmAiEA7wPaXgKHf8Fu61RN7o1Tiuczqr44%2BWUxqfyUCBe9h0oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwNwmkrKeeKtHs9ISrcA8lbp4TAe8Dp7MOQHdGnIBaxkL1ajRdAhfPjhjGon7vUXmHdQ%2Fk8m9yChQElxgGE1xhcYMpFUlJ6B09dB4E95CG2cJr7akFZ3bjfhh4ztvZPEFFht1a4Nqv0THKdgcVzVSLiQdq%2B8RcnJeXhdSqqkzVnuErh0RtIB2NEJmJtDFw7qDptbykVHn5v%2F%2BEXq724wfEmfw3sicaNGUBoqz5eTRRRB9QGN4mFF0HVBJHkaWKeWzX%2BGCjHzDsru6NrCGminjc7hzVURC0ddk%2BvfmZcsLmeUDR8RN%2BgIzrTcTS1sXv1S3G%2B5feNh%2Bltdq%2BOI2N1vuIom%2FHPZJjKUVgRxDLi5sRVRbW7ORX7tzDemmXQlHPbW4UvoWuVgOJW3yDZ6yg8cboawgNKjNhsB3RYBSAPSmzl31M0BROTsWPrv54ENGgRqcWUxt97CTFmz43zAaKKlzoo2o3lSLUUbMkDvqOKwNrj8GCMRC4RnmOuwfcdZBtXLUqD4%2FsyslgjbgbIEcsgAc1ankmJlgEQgWmKpby1lRRtZXQ2Ila6tVZh2gHXDG6RbO5VWqU9iZWNVe4TJyFbxzGwfex%2BMJyISO61upEvwMggzTzqzmZe0Ja1TJLUkKDBZj57I9mIQJWFsYwvMI2V%2F74GOqUBw4kDQrrse3NpI%2FvqXhkYmb%2BJ82EjeLOebIGUoIXR2tkBG3h4Xp0HTerfisKpQaNHTWogIORRF8aI9cD4kgXZBnML3Wq%2F8o%2B88%2FRct0v3SZ2L%2F0U1pnvqmL9ZUYFmBTG%2BcEJterD9DmFwHKPwjwLJoZ5qjHq7re1YyH43W0WSil1UcsgtlLmndWE18eRrJ%2BUFP%2FPsrZJtSdfgfXK1Ew0oMDQ5Qemn&X-Amz-Signature=85c561a5c13269d84285a30359b7fe629188be792640551091958d1de4b8211e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYSA6O2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHxbX%2FdXRcm916nOCYSPMTeu%2B2VXmlfgzHUCELPnTIEmAiEA7wPaXgKHf8Fu61RN7o1Tiuczqr44%2BWUxqfyUCBe9h0oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwNwmkrKeeKtHs9ISrcA8lbp4TAe8Dp7MOQHdGnIBaxkL1ajRdAhfPjhjGon7vUXmHdQ%2Fk8m9yChQElxgGE1xhcYMpFUlJ6B09dB4E95CG2cJr7akFZ3bjfhh4ztvZPEFFht1a4Nqv0THKdgcVzVSLiQdq%2B8RcnJeXhdSqqkzVnuErh0RtIB2NEJmJtDFw7qDptbykVHn5v%2F%2BEXq724wfEmfw3sicaNGUBoqz5eTRRRB9QGN4mFF0HVBJHkaWKeWzX%2BGCjHzDsru6NrCGminjc7hzVURC0ddk%2BvfmZcsLmeUDR8RN%2BgIzrTcTS1sXv1S3G%2B5feNh%2Bltdq%2BOI2N1vuIom%2FHPZJjKUVgRxDLi5sRVRbW7ORX7tzDemmXQlHPbW4UvoWuVgOJW3yDZ6yg8cboawgNKjNhsB3RYBSAPSmzl31M0BROTsWPrv54ENGgRqcWUxt97CTFmz43zAaKKlzoo2o3lSLUUbMkDvqOKwNrj8GCMRC4RnmOuwfcdZBtXLUqD4%2FsyslgjbgbIEcsgAc1ankmJlgEQgWmKpby1lRRtZXQ2Ila6tVZh2gHXDG6RbO5VWqU9iZWNVe4TJyFbxzGwfex%2BMJyISO61upEvwMggzTzqzmZe0Ja1TJLUkKDBZj57I9mIQJWFsYwvMI2V%2F74GOqUBw4kDQrrse3NpI%2FvqXhkYmb%2BJ82EjeLOebIGUoIXR2tkBG3h4Xp0HTerfisKpQaNHTWogIORRF8aI9cD4kgXZBnML3Wq%2F8o%2B88%2FRct0v3SZ2L%2F0U1pnvqmL9ZUYFmBTG%2BcEJterD9DmFwHKPwjwLJoZ5qjHq7re1YyH43W0WSil1UcsgtlLmndWE18eRrJ%2BUFP%2FPsrZJtSdfgfXK1Ew0oMDQ5Qemn&X-Amz-Signature=5c1805fc4816f02e5873f2f46b8636f826a77c33a77ce18f60eb19e2fbc3c0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYSA6O2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHxbX%2FdXRcm916nOCYSPMTeu%2B2VXmlfgzHUCELPnTIEmAiEA7wPaXgKHf8Fu61RN7o1Tiuczqr44%2BWUxqfyUCBe9h0oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwNwmkrKeeKtHs9ISrcA8lbp4TAe8Dp7MOQHdGnIBaxkL1ajRdAhfPjhjGon7vUXmHdQ%2Fk8m9yChQElxgGE1xhcYMpFUlJ6B09dB4E95CG2cJr7akFZ3bjfhh4ztvZPEFFht1a4Nqv0THKdgcVzVSLiQdq%2B8RcnJeXhdSqqkzVnuErh0RtIB2NEJmJtDFw7qDptbykVHn5v%2F%2BEXq724wfEmfw3sicaNGUBoqz5eTRRRB9QGN4mFF0HVBJHkaWKeWzX%2BGCjHzDsru6NrCGminjc7hzVURC0ddk%2BvfmZcsLmeUDR8RN%2BgIzrTcTS1sXv1S3G%2B5feNh%2Bltdq%2BOI2N1vuIom%2FHPZJjKUVgRxDLi5sRVRbW7ORX7tzDemmXQlHPbW4UvoWuVgOJW3yDZ6yg8cboawgNKjNhsB3RYBSAPSmzl31M0BROTsWPrv54ENGgRqcWUxt97CTFmz43zAaKKlzoo2o3lSLUUbMkDvqOKwNrj8GCMRC4RnmOuwfcdZBtXLUqD4%2FsyslgjbgbIEcsgAc1ankmJlgEQgWmKpby1lRRtZXQ2Ila6tVZh2gHXDG6RbO5VWqU9iZWNVe4TJyFbxzGwfex%2BMJyISO61upEvwMggzTzqzmZe0Ja1TJLUkKDBZj57I9mIQJWFsYwvMI2V%2F74GOqUBw4kDQrrse3NpI%2FvqXhkYmb%2BJ82EjeLOebIGUoIXR2tkBG3h4Xp0HTerfisKpQaNHTWogIORRF8aI9cD4kgXZBnML3Wq%2F8o%2B88%2FRct0v3SZ2L%2F0U1pnvqmL9ZUYFmBTG%2BcEJterD9DmFwHKPwjwLJoZ5qjHq7re1YyH43W0WSil1UcsgtlLmndWE18eRrJ%2BUFP%2FPsrZJtSdfgfXK1Ew0oMDQ5Qemn&X-Amz-Signature=7d0def93e057e70f0c668ac416d872ce264e261789c0e5d2832ce144eaf4208e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYSA6O2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHxbX%2FdXRcm916nOCYSPMTeu%2B2VXmlfgzHUCELPnTIEmAiEA7wPaXgKHf8Fu61RN7o1Tiuczqr44%2BWUxqfyUCBe9h0oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwNwmkrKeeKtHs9ISrcA8lbp4TAe8Dp7MOQHdGnIBaxkL1ajRdAhfPjhjGon7vUXmHdQ%2Fk8m9yChQElxgGE1xhcYMpFUlJ6B09dB4E95CG2cJr7akFZ3bjfhh4ztvZPEFFht1a4Nqv0THKdgcVzVSLiQdq%2B8RcnJeXhdSqqkzVnuErh0RtIB2NEJmJtDFw7qDptbykVHn5v%2F%2BEXq724wfEmfw3sicaNGUBoqz5eTRRRB9QGN4mFF0HVBJHkaWKeWzX%2BGCjHzDsru6NrCGminjc7hzVURC0ddk%2BvfmZcsLmeUDR8RN%2BgIzrTcTS1sXv1S3G%2B5feNh%2Bltdq%2BOI2N1vuIom%2FHPZJjKUVgRxDLi5sRVRbW7ORX7tzDemmXQlHPbW4UvoWuVgOJW3yDZ6yg8cboawgNKjNhsB3RYBSAPSmzl31M0BROTsWPrv54ENGgRqcWUxt97CTFmz43zAaKKlzoo2o3lSLUUbMkDvqOKwNrj8GCMRC4RnmOuwfcdZBtXLUqD4%2FsyslgjbgbIEcsgAc1ankmJlgEQgWmKpby1lRRtZXQ2Ila6tVZh2gHXDG6RbO5VWqU9iZWNVe4TJyFbxzGwfex%2BMJyISO61upEvwMggzTzqzmZe0Ja1TJLUkKDBZj57I9mIQJWFsYwvMI2V%2F74GOqUBw4kDQrrse3NpI%2FvqXhkYmb%2BJ82EjeLOebIGUoIXR2tkBG3h4Xp0HTerfisKpQaNHTWogIORRF8aI9cD4kgXZBnML3Wq%2F8o%2B88%2FRct0v3SZ2L%2F0U1pnvqmL9ZUYFmBTG%2BcEJterD9DmFwHKPwjwLJoZ5qjHq7re1YyH43W0WSil1UcsgtlLmndWE18eRrJ%2BUFP%2FPsrZJtSdfgfXK1Ew0oMDQ5Qemn&X-Amz-Signature=dcc9874a9c62c0851fff82b5bf77e4518a5e2ddc1f24c79f6f4baa76fa3c7152&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYSA6O2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHxbX%2FdXRcm916nOCYSPMTeu%2B2VXmlfgzHUCELPnTIEmAiEA7wPaXgKHf8Fu61RN7o1Tiuczqr44%2BWUxqfyUCBe9h0oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwNwmkrKeeKtHs9ISrcA8lbp4TAe8Dp7MOQHdGnIBaxkL1ajRdAhfPjhjGon7vUXmHdQ%2Fk8m9yChQElxgGE1xhcYMpFUlJ6B09dB4E95CG2cJr7akFZ3bjfhh4ztvZPEFFht1a4Nqv0THKdgcVzVSLiQdq%2B8RcnJeXhdSqqkzVnuErh0RtIB2NEJmJtDFw7qDptbykVHn5v%2F%2BEXq724wfEmfw3sicaNGUBoqz5eTRRRB9QGN4mFF0HVBJHkaWKeWzX%2BGCjHzDsru6NrCGminjc7hzVURC0ddk%2BvfmZcsLmeUDR8RN%2BgIzrTcTS1sXv1S3G%2B5feNh%2Bltdq%2BOI2N1vuIom%2FHPZJjKUVgRxDLi5sRVRbW7ORX7tzDemmXQlHPbW4UvoWuVgOJW3yDZ6yg8cboawgNKjNhsB3RYBSAPSmzl31M0BROTsWPrv54ENGgRqcWUxt97CTFmz43zAaKKlzoo2o3lSLUUbMkDvqOKwNrj8GCMRC4RnmOuwfcdZBtXLUqD4%2FsyslgjbgbIEcsgAc1ankmJlgEQgWmKpby1lRRtZXQ2Ila6tVZh2gHXDG6RbO5VWqU9iZWNVe4TJyFbxzGwfex%2BMJyISO61upEvwMggzTzqzmZe0Ja1TJLUkKDBZj57I9mIQJWFsYwvMI2V%2F74GOqUBw4kDQrrse3NpI%2FvqXhkYmb%2BJ82EjeLOebIGUoIXR2tkBG3h4Xp0HTerfisKpQaNHTWogIORRF8aI9cD4kgXZBnML3Wq%2F8o%2B88%2FRct0v3SZ2L%2F0U1pnvqmL9ZUYFmBTG%2BcEJterD9DmFwHKPwjwLJoZ5qjHq7re1YyH43W0WSil1UcsgtlLmndWE18eRrJ%2BUFP%2FPsrZJtSdfgfXK1Ew0oMDQ5Qemn&X-Amz-Signature=404284e5d6bf6e4880d0927b878de56ee7ce4593f2c0803ec2db8cec4b2510de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JYSA6O2%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHxbX%2FdXRcm916nOCYSPMTeu%2B2VXmlfgzHUCELPnTIEmAiEA7wPaXgKHf8Fu61RN7o1Tiuczqr44%2BWUxqfyUCBe9h0oqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwNwmkrKeeKtHs9ISrcA8lbp4TAe8Dp7MOQHdGnIBaxkL1ajRdAhfPjhjGon7vUXmHdQ%2Fk8m9yChQElxgGE1xhcYMpFUlJ6B09dB4E95CG2cJr7akFZ3bjfhh4ztvZPEFFht1a4Nqv0THKdgcVzVSLiQdq%2B8RcnJeXhdSqqkzVnuErh0RtIB2NEJmJtDFw7qDptbykVHn5v%2F%2BEXq724wfEmfw3sicaNGUBoqz5eTRRRB9QGN4mFF0HVBJHkaWKeWzX%2BGCjHzDsru6NrCGminjc7hzVURC0ddk%2BvfmZcsLmeUDR8RN%2BgIzrTcTS1sXv1S3G%2B5feNh%2Bltdq%2BOI2N1vuIom%2FHPZJjKUVgRxDLi5sRVRbW7ORX7tzDemmXQlHPbW4UvoWuVgOJW3yDZ6yg8cboawgNKjNhsB3RYBSAPSmzl31M0BROTsWPrv54ENGgRqcWUxt97CTFmz43zAaKKlzoo2o3lSLUUbMkDvqOKwNrj8GCMRC4RnmOuwfcdZBtXLUqD4%2FsyslgjbgbIEcsgAc1ankmJlgEQgWmKpby1lRRtZXQ2Ila6tVZh2gHXDG6RbO5VWqU9iZWNVe4TJyFbxzGwfex%2BMJyISO61upEvwMggzTzqzmZe0Ja1TJLUkKDBZj57I9mIQJWFsYwvMI2V%2F74GOqUBw4kDQrrse3NpI%2FvqXhkYmb%2BJ82EjeLOebIGUoIXR2tkBG3h4Xp0HTerfisKpQaNHTWogIORRF8aI9cD4kgXZBnML3Wq%2F8o%2B88%2FRct0v3SZ2L%2F0U1pnvqmL9ZUYFmBTG%2BcEJterD9DmFwHKPwjwLJoZ5qjHq7re1YyH43W0WSil1UcsgtlLmndWE18eRrJ%2BUFP%2FPsrZJtSdfgfXK1Ew0oMDQ5Qemn&X-Amz-Signature=4946538771bfb6af049b03cf15cbcabd96c28bb6cdde2f2dc403783e15349542&X-Amz-SignedHeaders=host&x-id=GetObject)
