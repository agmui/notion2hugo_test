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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XN2WWLD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErK%2BtufZYWr4mikl%2FaunopO3fy4Op5N8MZSaXE%2BxGBLAiEA5PeG%2BWbbfy7Pgh7H%2BOfpjOPDSr8mYiR3zZPKIf9kTCEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBj4mMgzGLnIoH25oyrcA9I4frToCuovBd9I2Q54yKoWo2qLnli4ZYzYGzSyMdoqUk5V0jE0DtnjJQE%2Bauv7s1afgMmFuZwX%2FZCXFslU0YXRPqXlPqD4F0WWqRBQneyprq4Gl2VFqvXseted2cJNx%2BlPwhsCM9CcWbq0XOvs%2F9dOhf315RBY4RrMQitLYiFTpNH%2B25PxX1EhRA60YHf0iMcsutKQshpKZlbIk7MDYPBGhLkmBRYSMbOR9UGla7y0KgW6gTLoHpRdKVKv2N7XGD42Dhd%2FHV4p8D8TdixW9iD2wd%2FH9iVuTMEL736RZC3NesRrHKeL1ZfLW4UbT6MJq4NHavNUW%2Br4I339S9Uwx4LE7tBbEXooN3pLt0vU%2FlltWW0hyHk5uuNGQkcHVuD%2Bw3WxZIMtZZXU6%2BDfRPI3S82qTtV05%2BX53DdPA9AKVjzSCkdkgi66vXCs4QqprGmwlW9CAtw6xU1jnvp7XhG9lyYK3%2FPVoQQac%2FW8FUkiLA4HMW6Y4Q4o5iG6YgEG5ncsxodLyLoPj8MvV028IJXgiNsN13pXbLCJc01FtZA8SBL2XVomqlwjXt3tI5JlLoDsAS%2BX2PnUO4CFlxeJrJOj4%2BFoF%2Bi59k6NeSfuig8Y%2FVDFaJ84NPSHTtwyRW%2FdMNbA%2Fb8GOqUBtSFrcF9%2BBio6NJGa7gmFJJYfh3L1J4bLAkAcmFjZKjTLPvBCbuTQOxqnsdiPipSCZv%2FtOwgVUjB%2FG52A3dWxyUqGgmTGsCeIJhMwZhSZEVuHH9Z7WPcUqbmSChBx5DXQ%2BRwu53qlcPNlAPJBsCRs74tI4eMlFFiwwi7rdjiD6QlXumRd6qn3R1wJvOhXH9Yq%2FbyvhnsNtk9AOIZMXfnLk5OI7YRD&X-Amz-Signature=d9ae43e4df3a9b75cba01fe2564881c2daaffb012af5ab1bd336d3672718c41b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XN2WWLD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErK%2BtufZYWr4mikl%2FaunopO3fy4Op5N8MZSaXE%2BxGBLAiEA5PeG%2BWbbfy7Pgh7H%2BOfpjOPDSr8mYiR3zZPKIf9kTCEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBj4mMgzGLnIoH25oyrcA9I4frToCuovBd9I2Q54yKoWo2qLnli4ZYzYGzSyMdoqUk5V0jE0DtnjJQE%2Bauv7s1afgMmFuZwX%2FZCXFslU0YXRPqXlPqD4F0WWqRBQneyprq4Gl2VFqvXseted2cJNx%2BlPwhsCM9CcWbq0XOvs%2F9dOhf315RBY4RrMQitLYiFTpNH%2B25PxX1EhRA60YHf0iMcsutKQshpKZlbIk7MDYPBGhLkmBRYSMbOR9UGla7y0KgW6gTLoHpRdKVKv2N7XGD42Dhd%2FHV4p8D8TdixW9iD2wd%2FH9iVuTMEL736RZC3NesRrHKeL1ZfLW4UbT6MJq4NHavNUW%2Br4I339S9Uwx4LE7tBbEXooN3pLt0vU%2FlltWW0hyHk5uuNGQkcHVuD%2Bw3WxZIMtZZXU6%2BDfRPI3S82qTtV05%2BX53DdPA9AKVjzSCkdkgi66vXCs4QqprGmwlW9CAtw6xU1jnvp7XhG9lyYK3%2FPVoQQac%2FW8FUkiLA4HMW6Y4Q4o5iG6YgEG5ncsxodLyLoPj8MvV028IJXgiNsN13pXbLCJc01FtZA8SBL2XVomqlwjXt3tI5JlLoDsAS%2BX2PnUO4CFlxeJrJOj4%2BFoF%2Bi59k6NeSfuig8Y%2FVDFaJ84NPSHTtwyRW%2FdMNbA%2Fb8GOqUBtSFrcF9%2BBio6NJGa7gmFJJYfh3L1J4bLAkAcmFjZKjTLPvBCbuTQOxqnsdiPipSCZv%2FtOwgVUjB%2FG52A3dWxyUqGgmTGsCeIJhMwZhSZEVuHH9Z7WPcUqbmSChBx5DXQ%2BRwu53qlcPNlAPJBsCRs74tI4eMlFFiwwi7rdjiD6QlXumRd6qn3R1wJvOhXH9Yq%2FbyvhnsNtk9AOIZMXfnLk5OI7YRD&X-Amz-Signature=d542538e2963c9ecb67a2d6f433b5746f7531046747520fc22fed1ccf2686000&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XN2WWLD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErK%2BtufZYWr4mikl%2FaunopO3fy4Op5N8MZSaXE%2BxGBLAiEA5PeG%2BWbbfy7Pgh7H%2BOfpjOPDSr8mYiR3zZPKIf9kTCEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBj4mMgzGLnIoH25oyrcA9I4frToCuovBd9I2Q54yKoWo2qLnli4ZYzYGzSyMdoqUk5V0jE0DtnjJQE%2Bauv7s1afgMmFuZwX%2FZCXFslU0YXRPqXlPqD4F0WWqRBQneyprq4Gl2VFqvXseted2cJNx%2BlPwhsCM9CcWbq0XOvs%2F9dOhf315RBY4RrMQitLYiFTpNH%2B25PxX1EhRA60YHf0iMcsutKQshpKZlbIk7MDYPBGhLkmBRYSMbOR9UGla7y0KgW6gTLoHpRdKVKv2N7XGD42Dhd%2FHV4p8D8TdixW9iD2wd%2FH9iVuTMEL736RZC3NesRrHKeL1ZfLW4UbT6MJq4NHavNUW%2Br4I339S9Uwx4LE7tBbEXooN3pLt0vU%2FlltWW0hyHk5uuNGQkcHVuD%2Bw3WxZIMtZZXU6%2BDfRPI3S82qTtV05%2BX53DdPA9AKVjzSCkdkgi66vXCs4QqprGmwlW9CAtw6xU1jnvp7XhG9lyYK3%2FPVoQQac%2FW8FUkiLA4HMW6Y4Q4o5iG6YgEG5ncsxodLyLoPj8MvV028IJXgiNsN13pXbLCJc01FtZA8SBL2XVomqlwjXt3tI5JlLoDsAS%2BX2PnUO4CFlxeJrJOj4%2BFoF%2Bi59k6NeSfuig8Y%2FVDFaJ84NPSHTtwyRW%2FdMNbA%2Fb8GOqUBtSFrcF9%2BBio6NJGa7gmFJJYfh3L1J4bLAkAcmFjZKjTLPvBCbuTQOxqnsdiPipSCZv%2FtOwgVUjB%2FG52A3dWxyUqGgmTGsCeIJhMwZhSZEVuHH9Z7WPcUqbmSChBx5DXQ%2BRwu53qlcPNlAPJBsCRs74tI4eMlFFiwwi7rdjiD6QlXumRd6qn3R1wJvOhXH9Yq%2FbyvhnsNtk9AOIZMXfnLk5OI7YRD&X-Amz-Signature=544af6baf5165d96774e3e0340f0329b08514616415638a957605b91b9e926a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XN2WWLD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErK%2BtufZYWr4mikl%2FaunopO3fy4Op5N8MZSaXE%2BxGBLAiEA5PeG%2BWbbfy7Pgh7H%2BOfpjOPDSr8mYiR3zZPKIf9kTCEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBj4mMgzGLnIoH25oyrcA9I4frToCuovBd9I2Q54yKoWo2qLnli4ZYzYGzSyMdoqUk5V0jE0DtnjJQE%2Bauv7s1afgMmFuZwX%2FZCXFslU0YXRPqXlPqD4F0WWqRBQneyprq4Gl2VFqvXseted2cJNx%2BlPwhsCM9CcWbq0XOvs%2F9dOhf315RBY4RrMQitLYiFTpNH%2B25PxX1EhRA60YHf0iMcsutKQshpKZlbIk7MDYPBGhLkmBRYSMbOR9UGla7y0KgW6gTLoHpRdKVKv2N7XGD42Dhd%2FHV4p8D8TdixW9iD2wd%2FH9iVuTMEL736RZC3NesRrHKeL1ZfLW4UbT6MJq4NHavNUW%2Br4I339S9Uwx4LE7tBbEXooN3pLt0vU%2FlltWW0hyHk5uuNGQkcHVuD%2Bw3WxZIMtZZXU6%2BDfRPI3S82qTtV05%2BX53DdPA9AKVjzSCkdkgi66vXCs4QqprGmwlW9CAtw6xU1jnvp7XhG9lyYK3%2FPVoQQac%2FW8FUkiLA4HMW6Y4Q4o5iG6YgEG5ncsxodLyLoPj8MvV028IJXgiNsN13pXbLCJc01FtZA8SBL2XVomqlwjXt3tI5JlLoDsAS%2BX2PnUO4CFlxeJrJOj4%2BFoF%2Bi59k6NeSfuig8Y%2FVDFaJ84NPSHTtwyRW%2FdMNbA%2Fb8GOqUBtSFrcF9%2BBio6NJGa7gmFJJYfh3L1J4bLAkAcmFjZKjTLPvBCbuTQOxqnsdiPipSCZv%2FtOwgVUjB%2FG52A3dWxyUqGgmTGsCeIJhMwZhSZEVuHH9Z7WPcUqbmSChBx5DXQ%2BRwu53qlcPNlAPJBsCRs74tI4eMlFFiwwi7rdjiD6QlXumRd6qn3R1wJvOhXH9Yq%2FbyvhnsNtk9AOIZMXfnLk5OI7YRD&X-Amz-Signature=4710af26229ec00505541ab3d71cca7c37a4e78afd19dc2105df17183cbffb22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XN2WWLD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErK%2BtufZYWr4mikl%2FaunopO3fy4Op5N8MZSaXE%2BxGBLAiEA5PeG%2BWbbfy7Pgh7H%2BOfpjOPDSr8mYiR3zZPKIf9kTCEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBj4mMgzGLnIoH25oyrcA9I4frToCuovBd9I2Q54yKoWo2qLnli4ZYzYGzSyMdoqUk5V0jE0DtnjJQE%2Bauv7s1afgMmFuZwX%2FZCXFslU0YXRPqXlPqD4F0WWqRBQneyprq4Gl2VFqvXseted2cJNx%2BlPwhsCM9CcWbq0XOvs%2F9dOhf315RBY4RrMQitLYiFTpNH%2B25PxX1EhRA60YHf0iMcsutKQshpKZlbIk7MDYPBGhLkmBRYSMbOR9UGla7y0KgW6gTLoHpRdKVKv2N7XGD42Dhd%2FHV4p8D8TdixW9iD2wd%2FH9iVuTMEL736RZC3NesRrHKeL1ZfLW4UbT6MJq4NHavNUW%2Br4I339S9Uwx4LE7tBbEXooN3pLt0vU%2FlltWW0hyHk5uuNGQkcHVuD%2Bw3WxZIMtZZXU6%2BDfRPI3S82qTtV05%2BX53DdPA9AKVjzSCkdkgi66vXCs4QqprGmwlW9CAtw6xU1jnvp7XhG9lyYK3%2FPVoQQac%2FW8FUkiLA4HMW6Y4Q4o5iG6YgEG5ncsxodLyLoPj8MvV028IJXgiNsN13pXbLCJc01FtZA8SBL2XVomqlwjXt3tI5JlLoDsAS%2BX2PnUO4CFlxeJrJOj4%2BFoF%2Bi59k6NeSfuig8Y%2FVDFaJ84NPSHTtwyRW%2FdMNbA%2Fb8GOqUBtSFrcF9%2BBio6NJGa7gmFJJYfh3L1J4bLAkAcmFjZKjTLPvBCbuTQOxqnsdiPipSCZv%2FtOwgVUjB%2FG52A3dWxyUqGgmTGsCeIJhMwZhSZEVuHH9Z7WPcUqbmSChBx5DXQ%2BRwu53qlcPNlAPJBsCRs74tI4eMlFFiwwi7rdjiD6QlXumRd6qn3R1wJvOhXH9Yq%2FbyvhnsNtk9AOIZMXfnLk5OI7YRD&X-Amz-Signature=08cf7b589edac23ceb6ee6bbe7eb4dd4d4caba28a7541c951e9b7cf969b58f86&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XN2WWLD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErK%2BtufZYWr4mikl%2FaunopO3fy4Op5N8MZSaXE%2BxGBLAiEA5PeG%2BWbbfy7Pgh7H%2BOfpjOPDSr8mYiR3zZPKIf9kTCEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBj4mMgzGLnIoH25oyrcA9I4frToCuovBd9I2Q54yKoWo2qLnli4ZYzYGzSyMdoqUk5V0jE0DtnjJQE%2Bauv7s1afgMmFuZwX%2FZCXFslU0YXRPqXlPqD4F0WWqRBQneyprq4Gl2VFqvXseted2cJNx%2BlPwhsCM9CcWbq0XOvs%2F9dOhf315RBY4RrMQitLYiFTpNH%2B25PxX1EhRA60YHf0iMcsutKQshpKZlbIk7MDYPBGhLkmBRYSMbOR9UGla7y0KgW6gTLoHpRdKVKv2N7XGD42Dhd%2FHV4p8D8TdixW9iD2wd%2FH9iVuTMEL736RZC3NesRrHKeL1ZfLW4UbT6MJq4NHavNUW%2Br4I339S9Uwx4LE7tBbEXooN3pLt0vU%2FlltWW0hyHk5uuNGQkcHVuD%2Bw3WxZIMtZZXU6%2BDfRPI3S82qTtV05%2BX53DdPA9AKVjzSCkdkgi66vXCs4QqprGmwlW9CAtw6xU1jnvp7XhG9lyYK3%2FPVoQQac%2FW8FUkiLA4HMW6Y4Q4o5iG6YgEG5ncsxodLyLoPj8MvV028IJXgiNsN13pXbLCJc01FtZA8SBL2XVomqlwjXt3tI5JlLoDsAS%2BX2PnUO4CFlxeJrJOj4%2BFoF%2Bi59k6NeSfuig8Y%2FVDFaJ84NPSHTtwyRW%2FdMNbA%2Fb8GOqUBtSFrcF9%2BBio6NJGa7gmFJJYfh3L1J4bLAkAcmFjZKjTLPvBCbuTQOxqnsdiPipSCZv%2FtOwgVUjB%2FG52A3dWxyUqGgmTGsCeIJhMwZhSZEVuHH9Z7WPcUqbmSChBx5DXQ%2BRwu53qlcPNlAPJBsCRs74tI4eMlFFiwwi7rdjiD6QlXumRd6qn3R1wJvOhXH9Yq%2FbyvhnsNtk9AOIZMXfnLk5OI7YRD&X-Amz-Signature=a11cba5b3309cdd2274299613f1e3b442923f4241ba5341941fc6195b86ac5c3&X-Amz-SignedHeaders=host&x-id=GetObject)
