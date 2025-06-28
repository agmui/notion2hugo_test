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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GKKTCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCouQEyxA1%2B9wvphFnTNTIDNrMdR8pSgp7AVIvi%2F90KXgIgJ3fZJZS7ME44Y52dcg2Scs4nFYZ1mBUj3Z9UXqCzMAkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU4ifwSIbcsEbtOtircA%2FrijIx2BiDXg505QfbjGknmboY6kwpKz8lZ0%2FtB1vJQMOeabGiFsFyctF3oRfO6L9UpgYJrTTA59TxHqfMnG%2FA32HRdCyYvXv33w0Z2e1O9fKPB01qCy1%2FdSF30%2FWUyLx6j%2Fj%2BLrjEx5PZ7CrQjdluv0pCMrTNaXCL%2FHy5ykBQDmPZef7IYz%2B81t9uQ9zL7jujRYLECuHBMmL5Q3ba9aR2fOJ5oMMTx1t0xwaj1VfWNYbbSo8SpcEfZ4hHmT7SN%2FRv5%2Fz5Am3beUsH6kTNiR8rJh5davBUBOU5zGUoZFFv42uYOn2RC2nrkIZxAwG6dxrjk9%2BjcNB%2BLjEnw47rmdtxRiWiiUMANRNeM60%2FTho8OUMqx9VGKnaSnYnWHcmWMRTVacn4rWK44AwhG0oHQLGeXWx%2FHrHKJcom9MZ%2FLy9IirSoUCfflwxObQQPtft5xtoo5mKrHmDQBGkKGyUO9jWlXwkOFcI9BzS1CmVLHMbz8oiyoM3mnnBT2jGbz6U%2F%2BW2mURs6zvP5%2FjUmTCMtl7qOM2RgSVfMJdGjaDWqqkc8ttcFKRFR7iYTsBYaseSO176VpJZ8mwhayaDxYVuwScI8ZDAyFcgzrn1T2ff4LH9aPyC5WkD7KnTHgGTvLML30gMMGOqUBH%2FLoFNvu%2BM9gmRfGh%2F%2FdrGRFi4dM%2BaMYZxoYxTw8BZykC8nsN23PGDZCmHiis3pHxzrRiyKiz5YoyGNSCJV%2BOD%2Bz2Yw%2BAL0XRIly%2FUV74pz%2FwK2223W3MmUSx0kHkC5QXiTv5sjk71ruysm7cvuQpSQP1AYi0sgIZI9Ta0n8L%2BvOyhsM5SSRot8zwnFSbMYPb72foSek2a6ThnEibCeasPi2CfE4&X-Amz-Signature=a1677dcde6cb57e57005d9cfb8c7bc32e634e6856d393d9710c9629e301b80da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GKKTCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCouQEyxA1%2B9wvphFnTNTIDNrMdR8pSgp7AVIvi%2F90KXgIgJ3fZJZS7ME44Y52dcg2Scs4nFYZ1mBUj3Z9UXqCzMAkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU4ifwSIbcsEbtOtircA%2FrijIx2BiDXg505QfbjGknmboY6kwpKz8lZ0%2FtB1vJQMOeabGiFsFyctF3oRfO6L9UpgYJrTTA59TxHqfMnG%2FA32HRdCyYvXv33w0Z2e1O9fKPB01qCy1%2FdSF30%2FWUyLx6j%2Fj%2BLrjEx5PZ7CrQjdluv0pCMrTNaXCL%2FHy5ykBQDmPZef7IYz%2B81t9uQ9zL7jujRYLECuHBMmL5Q3ba9aR2fOJ5oMMTx1t0xwaj1VfWNYbbSo8SpcEfZ4hHmT7SN%2FRv5%2Fz5Am3beUsH6kTNiR8rJh5davBUBOU5zGUoZFFv42uYOn2RC2nrkIZxAwG6dxrjk9%2BjcNB%2BLjEnw47rmdtxRiWiiUMANRNeM60%2FTho8OUMqx9VGKnaSnYnWHcmWMRTVacn4rWK44AwhG0oHQLGeXWx%2FHrHKJcom9MZ%2FLy9IirSoUCfflwxObQQPtft5xtoo5mKrHmDQBGkKGyUO9jWlXwkOFcI9BzS1CmVLHMbz8oiyoM3mnnBT2jGbz6U%2F%2BW2mURs6zvP5%2FjUmTCMtl7qOM2RgSVfMJdGjaDWqqkc8ttcFKRFR7iYTsBYaseSO176VpJZ8mwhayaDxYVuwScI8ZDAyFcgzrn1T2ff4LH9aPyC5WkD7KnTHgGTvLML30gMMGOqUBH%2FLoFNvu%2BM9gmRfGh%2F%2FdrGRFi4dM%2BaMYZxoYxTw8BZykC8nsN23PGDZCmHiis3pHxzrRiyKiz5YoyGNSCJV%2BOD%2Bz2Yw%2BAL0XRIly%2FUV74pz%2FwK2223W3MmUSx0kHkC5QXiTv5sjk71ruysm7cvuQpSQP1AYi0sgIZI9Ta0n8L%2BvOyhsM5SSRot8zwnFSbMYPb72foSek2a6ThnEibCeasPi2CfE4&X-Amz-Signature=6ff6ac6368cb044a8c0a58fb32767a886d239a3b48ce31ce2b7f978ae136f8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GKKTCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCouQEyxA1%2B9wvphFnTNTIDNrMdR8pSgp7AVIvi%2F90KXgIgJ3fZJZS7ME44Y52dcg2Scs4nFYZ1mBUj3Z9UXqCzMAkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU4ifwSIbcsEbtOtircA%2FrijIx2BiDXg505QfbjGknmboY6kwpKz8lZ0%2FtB1vJQMOeabGiFsFyctF3oRfO6L9UpgYJrTTA59TxHqfMnG%2FA32HRdCyYvXv33w0Z2e1O9fKPB01qCy1%2FdSF30%2FWUyLx6j%2Fj%2BLrjEx5PZ7CrQjdluv0pCMrTNaXCL%2FHy5ykBQDmPZef7IYz%2B81t9uQ9zL7jujRYLECuHBMmL5Q3ba9aR2fOJ5oMMTx1t0xwaj1VfWNYbbSo8SpcEfZ4hHmT7SN%2FRv5%2Fz5Am3beUsH6kTNiR8rJh5davBUBOU5zGUoZFFv42uYOn2RC2nrkIZxAwG6dxrjk9%2BjcNB%2BLjEnw47rmdtxRiWiiUMANRNeM60%2FTho8OUMqx9VGKnaSnYnWHcmWMRTVacn4rWK44AwhG0oHQLGeXWx%2FHrHKJcom9MZ%2FLy9IirSoUCfflwxObQQPtft5xtoo5mKrHmDQBGkKGyUO9jWlXwkOFcI9BzS1CmVLHMbz8oiyoM3mnnBT2jGbz6U%2F%2BW2mURs6zvP5%2FjUmTCMtl7qOM2RgSVfMJdGjaDWqqkc8ttcFKRFR7iYTsBYaseSO176VpJZ8mwhayaDxYVuwScI8ZDAyFcgzrn1T2ff4LH9aPyC5WkD7KnTHgGTvLML30gMMGOqUBH%2FLoFNvu%2BM9gmRfGh%2F%2FdrGRFi4dM%2BaMYZxoYxTw8BZykC8nsN23PGDZCmHiis3pHxzrRiyKiz5YoyGNSCJV%2BOD%2Bz2Yw%2BAL0XRIly%2FUV74pz%2FwK2223W3MmUSx0kHkC5QXiTv5sjk71ruysm7cvuQpSQP1AYi0sgIZI9Ta0n8L%2BvOyhsM5SSRot8zwnFSbMYPb72foSek2a6ThnEibCeasPi2CfE4&X-Amz-Signature=ee3da00ee289eaefa817bd2e9a22576914b0e3c31fd341655565e1971dcb159d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GKKTCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCouQEyxA1%2B9wvphFnTNTIDNrMdR8pSgp7AVIvi%2F90KXgIgJ3fZJZS7ME44Y52dcg2Scs4nFYZ1mBUj3Z9UXqCzMAkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU4ifwSIbcsEbtOtircA%2FrijIx2BiDXg505QfbjGknmboY6kwpKz8lZ0%2FtB1vJQMOeabGiFsFyctF3oRfO6L9UpgYJrTTA59TxHqfMnG%2FA32HRdCyYvXv33w0Z2e1O9fKPB01qCy1%2FdSF30%2FWUyLx6j%2Fj%2BLrjEx5PZ7CrQjdluv0pCMrTNaXCL%2FHy5ykBQDmPZef7IYz%2B81t9uQ9zL7jujRYLECuHBMmL5Q3ba9aR2fOJ5oMMTx1t0xwaj1VfWNYbbSo8SpcEfZ4hHmT7SN%2FRv5%2Fz5Am3beUsH6kTNiR8rJh5davBUBOU5zGUoZFFv42uYOn2RC2nrkIZxAwG6dxrjk9%2BjcNB%2BLjEnw47rmdtxRiWiiUMANRNeM60%2FTho8OUMqx9VGKnaSnYnWHcmWMRTVacn4rWK44AwhG0oHQLGeXWx%2FHrHKJcom9MZ%2FLy9IirSoUCfflwxObQQPtft5xtoo5mKrHmDQBGkKGyUO9jWlXwkOFcI9BzS1CmVLHMbz8oiyoM3mnnBT2jGbz6U%2F%2BW2mURs6zvP5%2FjUmTCMtl7qOM2RgSVfMJdGjaDWqqkc8ttcFKRFR7iYTsBYaseSO176VpJZ8mwhayaDxYVuwScI8ZDAyFcgzrn1T2ff4LH9aPyC5WkD7KnTHgGTvLML30gMMGOqUBH%2FLoFNvu%2BM9gmRfGh%2F%2FdrGRFi4dM%2BaMYZxoYxTw8BZykC8nsN23PGDZCmHiis3pHxzrRiyKiz5YoyGNSCJV%2BOD%2Bz2Yw%2BAL0XRIly%2FUV74pz%2FwK2223W3MmUSx0kHkC5QXiTv5sjk71ruysm7cvuQpSQP1AYi0sgIZI9Ta0n8L%2BvOyhsM5SSRot8zwnFSbMYPb72foSek2a6ThnEibCeasPi2CfE4&X-Amz-Signature=3115329618379cd64e67931305293be814e949b42f3b38aa817370063fe82e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GKKTCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCouQEyxA1%2B9wvphFnTNTIDNrMdR8pSgp7AVIvi%2F90KXgIgJ3fZJZS7ME44Y52dcg2Scs4nFYZ1mBUj3Z9UXqCzMAkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU4ifwSIbcsEbtOtircA%2FrijIx2BiDXg505QfbjGknmboY6kwpKz8lZ0%2FtB1vJQMOeabGiFsFyctF3oRfO6L9UpgYJrTTA59TxHqfMnG%2FA32HRdCyYvXv33w0Z2e1O9fKPB01qCy1%2FdSF30%2FWUyLx6j%2Fj%2BLrjEx5PZ7CrQjdluv0pCMrTNaXCL%2FHy5ykBQDmPZef7IYz%2B81t9uQ9zL7jujRYLECuHBMmL5Q3ba9aR2fOJ5oMMTx1t0xwaj1VfWNYbbSo8SpcEfZ4hHmT7SN%2FRv5%2Fz5Am3beUsH6kTNiR8rJh5davBUBOU5zGUoZFFv42uYOn2RC2nrkIZxAwG6dxrjk9%2BjcNB%2BLjEnw47rmdtxRiWiiUMANRNeM60%2FTho8OUMqx9VGKnaSnYnWHcmWMRTVacn4rWK44AwhG0oHQLGeXWx%2FHrHKJcom9MZ%2FLy9IirSoUCfflwxObQQPtft5xtoo5mKrHmDQBGkKGyUO9jWlXwkOFcI9BzS1CmVLHMbz8oiyoM3mnnBT2jGbz6U%2F%2BW2mURs6zvP5%2FjUmTCMtl7qOM2RgSVfMJdGjaDWqqkc8ttcFKRFR7iYTsBYaseSO176VpJZ8mwhayaDxYVuwScI8ZDAyFcgzrn1T2ff4LH9aPyC5WkD7KnTHgGTvLML30gMMGOqUBH%2FLoFNvu%2BM9gmRfGh%2F%2FdrGRFi4dM%2BaMYZxoYxTw8BZykC8nsN23PGDZCmHiis3pHxzrRiyKiz5YoyGNSCJV%2BOD%2Bz2Yw%2BAL0XRIly%2FUV74pz%2FwK2223W3MmUSx0kHkC5QXiTv5sjk71ruysm7cvuQpSQP1AYi0sgIZI9Ta0n8L%2BvOyhsM5SSRot8zwnFSbMYPb72foSek2a6ThnEibCeasPi2CfE4&X-Amz-Signature=10066157e7fe20033da9dc1067b3db893ba04c015e8ce13140cf60c033cf3c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652GKKTCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCouQEyxA1%2B9wvphFnTNTIDNrMdR8pSgp7AVIvi%2F90KXgIgJ3fZJZS7ME44Y52dcg2Scs4nFYZ1mBUj3Z9UXqCzMAkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKU4ifwSIbcsEbtOtircA%2FrijIx2BiDXg505QfbjGknmboY6kwpKz8lZ0%2FtB1vJQMOeabGiFsFyctF3oRfO6L9UpgYJrTTA59TxHqfMnG%2FA32HRdCyYvXv33w0Z2e1O9fKPB01qCy1%2FdSF30%2FWUyLx6j%2Fj%2BLrjEx5PZ7CrQjdluv0pCMrTNaXCL%2FHy5ykBQDmPZef7IYz%2B81t9uQ9zL7jujRYLECuHBMmL5Q3ba9aR2fOJ5oMMTx1t0xwaj1VfWNYbbSo8SpcEfZ4hHmT7SN%2FRv5%2Fz5Am3beUsH6kTNiR8rJh5davBUBOU5zGUoZFFv42uYOn2RC2nrkIZxAwG6dxrjk9%2BjcNB%2BLjEnw47rmdtxRiWiiUMANRNeM60%2FTho8OUMqx9VGKnaSnYnWHcmWMRTVacn4rWK44AwhG0oHQLGeXWx%2FHrHKJcom9MZ%2FLy9IirSoUCfflwxObQQPtft5xtoo5mKrHmDQBGkKGyUO9jWlXwkOFcI9BzS1CmVLHMbz8oiyoM3mnnBT2jGbz6U%2F%2BW2mURs6zvP5%2FjUmTCMtl7qOM2RgSVfMJdGjaDWqqkc8ttcFKRFR7iYTsBYaseSO176VpJZ8mwhayaDxYVuwScI8ZDAyFcgzrn1T2ff4LH9aPyC5WkD7KnTHgGTvLML30gMMGOqUBH%2FLoFNvu%2BM9gmRfGh%2F%2FdrGRFi4dM%2BaMYZxoYxTw8BZykC8nsN23PGDZCmHiis3pHxzrRiyKiz5YoyGNSCJV%2BOD%2Bz2Yw%2BAL0XRIly%2FUV74pz%2FwK2223W3MmUSx0kHkC5QXiTv5sjk71ruysm7cvuQpSQP1AYi0sgIZI9Ta0n8L%2BvOyhsM5SSRot8zwnFSbMYPb72foSek2a6ThnEibCeasPi2CfE4&X-Amz-Signature=90f9cf7a8abce3b68922beef21827483e33e597e9388dfeb458fd41002b0000d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
