---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESBPLH4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCeBOp3o1SLQKbuKop6UNjNbLbtTp2cqx6HV1eAMYVVMwIgLwZ27MJcAMNHeWN%2BmW82mNMZcFMbkMA72OSk9pZ2wgYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNfUQnP3MNfNprnKsircA6KXuf6zDecZ%2FYvfFhpmVrN1A8jfI1vtnD1%2BfEjfYviDvKoD76XZEu8Gv0FKcSJSJHuCrCAXvZaLDlstIBoeQvRraTy6IglmoSCAR3dRba4q0oDsCGprCOZjiZG7hEoheoa%2B%2Bir%2FkXDT17Zd3gU%2F96R0DgmwVo3fPJ3K4mpTCufQR5N9YrxeBHGAKaoUNz%2BNgBTSjZSTI8kzBx0L%2B1OjpOAhvSQWFS7REFqNMMKW7YVZRpLspbhjwxwjOA93gw6VyqLw3hQLRi2uihkvSTl31kv%2FXmrHeBfr9TiDN%2F8wqXSQ4iEpoQeBJFqFxBfktrvpgbwrT0X7M6Ek%2BaGE4D74QTSAIgAv60UbrHYpVJqEj%2BBBuORxrYL%2Fkk7K5k8MMb8jVBNDGuPCv0tb1qKcVZE8S%2Bx0fv5qvxEcgaL3B3vRsy7XEOn9jkNvqWqgXhNo8zbyJNAGbb%2Ftuv%2FeVtSVLtqy%2BDGydxl9RPVbdoStgK0DEA7ZjwC0Nz6uP%2F21WgFXs0cs3%2F0WTNS82I3996UpAVFozrKio%2BUKLc7J4N8Y%2FB842aqA41BbkBUfTMx3svccHsxXo%2BKIC1vLd5KUKld79IFmFXR8Q1UzU6z9RYLD%2FZy%2F46alOB4lIHHvc1HmoxGPMIWbkb0GOqUBS6WJTlCZhYPDg3M7L%2BAS3qzOnscb0kXxGxA8yg%2BXfPxEkukm6gUzz1KwCv1MSK0i2cenuMKVnstz1PoYu7O0uknxeoCUhCsV6sVcGTRbqdL9Ln4AeB75sGDffPC5RkPkgrORuYyiNVLoamcpaN%2Be9Mtc25P0sRiepXBafUVjeLrE7WbsrxGxEjL%2FpiYuSiY%2BR13GcIzRijHcBfO9XRWAHBk1eMqo&X-Amz-Signature=b66cafe554c937456ac636f61f1b04ac93d9330742c8c4c578538c4381894e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESBPLH4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCeBOp3o1SLQKbuKop6UNjNbLbtTp2cqx6HV1eAMYVVMwIgLwZ27MJcAMNHeWN%2BmW82mNMZcFMbkMA72OSk9pZ2wgYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNfUQnP3MNfNprnKsircA6KXuf6zDecZ%2FYvfFhpmVrN1A8jfI1vtnD1%2BfEjfYviDvKoD76XZEu8Gv0FKcSJSJHuCrCAXvZaLDlstIBoeQvRraTy6IglmoSCAR3dRba4q0oDsCGprCOZjiZG7hEoheoa%2B%2Bir%2FkXDT17Zd3gU%2F96R0DgmwVo3fPJ3K4mpTCufQR5N9YrxeBHGAKaoUNz%2BNgBTSjZSTI8kzBx0L%2B1OjpOAhvSQWFS7REFqNMMKW7YVZRpLspbhjwxwjOA93gw6VyqLw3hQLRi2uihkvSTl31kv%2FXmrHeBfr9TiDN%2F8wqXSQ4iEpoQeBJFqFxBfktrvpgbwrT0X7M6Ek%2BaGE4D74QTSAIgAv60UbrHYpVJqEj%2BBBuORxrYL%2Fkk7K5k8MMb8jVBNDGuPCv0tb1qKcVZE8S%2Bx0fv5qvxEcgaL3B3vRsy7XEOn9jkNvqWqgXhNo8zbyJNAGbb%2Ftuv%2FeVtSVLtqy%2BDGydxl9RPVbdoStgK0DEA7ZjwC0Nz6uP%2F21WgFXs0cs3%2F0WTNS82I3996UpAVFozrKio%2BUKLc7J4N8Y%2FB842aqA41BbkBUfTMx3svccHsxXo%2BKIC1vLd5KUKld79IFmFXR8Q1UzU6z9RYLD%2FZy%2F46alOB4lIHHvc1HmoxGPMIWbkb0GOqUBS6WJTlCZhYPDg3M7L%2BAS3qzOnscb0kXxGxA8yg%2BXfPxEkukm6gUzz1KwCv1MSK0i2cenuMKVnstz1PoYu7O0uknxeoCUhCsV6sVcGTRbqdL9Ln4AeB75sGDffPC5RkPkgrORuYyiNVLoamcpaN%2Be9Mtc25P0sRiepXBafUVjeLrE7WbsrxGxEjL%2FpiYuSiY%2BR13GcIzRijHcBfO9XRWAHBk1eMqo&X-Amz-Signature=bbe76ebe71a4ccc129baedf4df632292d904be236d070aadcff8a8808118d2df&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESBPLH4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCeBOp3o1SLQKbuKop6UNjNbLbtTp2cqx6HV1eAMYVVMwIgLwZ27MJcAMNHeWN%2BmW82mNMZcFMbkMA72OSk9pZ2wgYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNfUQnP3MNfNprnKsircA6KXuf6zDecZ%2FYvfFhpmVrN1A8jfI1vtnD1%2BfEjfYviDvKoD76XZEu8Gv0FKcSJSJHuCrCAXvZaLDlstIBoeQvRraTy6IglmoSCAR3dRba4q0oDsCGprCOZjiZG7hEoheoa%2B%2Bir%2FkXDT17Zd3gU%2F96R0DgmwVo3fPJ3K4mpTCufQR5N9YrxeBHGAKaoUNz%2BNgBTSjZSTI8kzBx0L%2B1OjpOAhvSQWFS7REFqNMMKW7YVZRpLspbhjwxwjOA93gw6VyqLw3hQLRi2uihkvSTl31kv%2FXmrHeBfr9TiDN%2F8wqXSQ4iEpoQeBJFqFxBfktrvpgbwrT0X7M6Ek%2BaGE4D74QTSAIgAv60UbrHYpVJqEj%2BBBuORxrYL%2Fkk7K5k8MMb8jVBNDGuPCv0tb1qKcVZE8S%2Bx0fv5qvxEcgaL3B3vRsy7XEOn9jkNvqWqgXhNo8zbyJNAGbb%2Ftuv%2FeVtSVLtqy%2BDGydxl9RPVbdoStgK0DEA7ZjwC0Nz6uP%2F21WgFXs0cs3%2F0WTNS82I3996UpAVFozrKio%2BUKLc7J4N8Y%2FB842aqA41BbkBUfTMx3svccHsxXo%2BKIC1vLd5KUKld79IFmFXR8Q1UzU6z9RYLD%2FZy%2F46alOB4lIHHvc1HmoxGPMIWbkb0GOqUBS6WJTlCZhYPDg3M7L%2BAS3qzOnscb0kXxGxA8yg%2BXfPxEkukm6gUzz1KwCv1MSK0i2cenuMKVnstz1PoYu7O0uknxeoCUhCsV6sVcGTRbqdL9Ln4AeB75sGDffPC5RkPkgrORuYyiNVLoamcpaN%2Be9Mtc25P0sRiepXBafUVjeLrE7WbsrxGxEjL%2FpiYuSiY%2BR13GcIzRijHcBfO9XRWAHBk1eMqo&X-Amz-Signature=3044dd77189f675626cff7f3db6e4b99f8fc23c92f5cc36c05fb8161ab15db0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESBPLH4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCeBOp3o1SLQKbuKop6UNjNbLbtTp2cqx6HV1eAMYVVMwIgLwZ27MJcAMNHeWN%2BmW82mNMZcFMbkMA72OSk9pZ2wgYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNfUQnP3MNfNprnKsircA6KXuf6zDecZ%2FYvfFhpmVrN1A8jfI1vtnD1%2BfEjfYviDvKoD76XZEu8Gv0FKcSJSJHuCrCAXvZaLDlstIBoeQvRraTy6IglmoSCAR3dRba4q0oDsCGprCOZjiZG7hEoheoa%2B%2Bir%2FkXDT17Zd3gU%2F96R0DgmwVo3fPJ3K4mpTCufQR5N9YrxeBHGAKaoUNz%2BNgBTSjZSTI8kzBx0L%2B1OjpOAhvSQWFS7REFqNMMKW7YVZRpLspbhjwxwjOA93gw6VyqLw3hQLRi2uihkvSTl31kv%2FXmrHeBfr9TiDN%2F8wqXSQ4iEpoQeBJFqFxBfktrvpgbwrT0X7M6Ek%2BaGE4D74QTSAIgAv60UbrHYpVJqEj%2BBBuORxrYL%2Fkk7K5k8MMb8jVBNDGuPCv0tb1qKcVZE8S%2Bx0fv5qvxEcgaL3B3vRsy7XEOn9jkNvqWqgXhNo8zbyJNAGbb%2Ftuv%2FeVtSVLtqy%2BDGydxl9RPVbdoStgK0DEA7ZjwC0Nz6uP%2F21WgFXs0cs3%2F0WTNS82I3996UpAVFozrKio%2BUKLc7J4N8Y%2FB842aqA41BbkBUfTMx3svccHsxXo%2BKIC1vLd5KUKld79IFmFXR8Q1UzU6z9RYLD%2FZy%2F46alOB4lIHHvc1HmoxGPMIWbkb0GOqUBS6WJTlCZhYPDg3M7L%2BAS3qzOnscb0kXxGxA8yg%2BXfPxEkukm6gUzz1KwCv1MSK0i2cenuMKVnstz1PoYu7O0uknxeoCUhCsV6sVcGTRbqdL9Ln4AeB75sGDffPC5RkPkgrORuYyiNVLoamcpaN%2Be9Mtc25P0sRiepXBafUVjeLrE7WbsrxGxEjL%2FpiYuSiY%2BR13GcIzRijHcBfO9XRWAHBk1eMqo&X-Amz-Signature=f4f2e7673d0dea485cc97ae0ce17bb559a0cb81e9ca48829f09f6330ffd26f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESBPLH4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCeBOp3o1SLQKbuKop6UNjNbLbtTp2cqx6HV1eAMYVVMwIgLwZ27MJcAMNHeWN%2BmW82mNMZcFMbkMA72OSk9pZ2wgYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNfUQnP3MNfNprnKsircA6KXuf6zDecZ%2FYvfFhpmVrN1A8jfI1vtnD1%2BfEjfYviDvKoD76XZEu8Gv0FKcSJSJHuCrCAXvZaLDlstIBoeQvRraTy6IglmoSCAR3dRba4q0oDsCGprCOZjiZG7hEoheoa%2B%2Bir%2FkXDT17Zd3gU%2F96R0DgmwVo3fPJ3K4mpTCufQR5N9YrxeBHGAKaoUNz%2BNgBTSjZSTI8kzBx0L%2B1OjpOAhvSQWFS7REFqNMMKW7YVZRpLspbhjwxwjOA93gw6VyqLw3hQLRi2uihkvSTl31kv%2FXmrHeBfr9TiDN%2F8wqXSQ4iEpoQeBJFqFxBfktrvpgbwrT0X7M6Ek%2BaGE4D74QTSAIgAv60UbrHYpVJqEj%2BBBuORxrYL%2Fkk7K5k8MMb8jVBNDGuPCv0tb1qKcVZE8S%2Bx0fv5qvxEcgaL3B3vRsy7XEOn9jkNvqWqgXhNo8zbyJNAGbb%2Ftuv%2FeVtSVLtqy%2BDGydxl9RPVbdoStgK0DEA7ZjwC0Nz6uP%2F21WgFXs0cs3%2F0WTNS82I3996UpAVFozrKio%2BUKLc7J4N8Y%2FB842aqA41BbkBUfTMx3svccHsxXo%2BKIC1vLd5KUKld79IFmFXR8Q1UzU6z9RYLD%2FZy%2F46alOB4lIHHvc1HmoxGPMIWbkb0GOqUBS6WJTlCZhYPDg3M7L%2BAS3qzOnscb0kXxGxA8yg%2BXfPxEkukm6gUzz1KwCv1MSK0i2cenuMKVnstz1PoYu7O0uknxeoCUhCsV6sVcGTRbqdL9Ln4AeB75sGDffPC5RkPkgrORuYyiNVLoamcpaN%2Be9Mtc25P0sRiepXBafUVjeLrE7WbsrxGxEjL%2FpiYuSiY%2BR13GcIzRijHcBfO9XRWAHBk1eMqo&X-Amz-Signature=1b0987967723971d9178437c4593695158ac62ed5493cbfa76bed872fc71f6c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ESBPLH4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCeBOp3o1SLQKbuKop6UNjNbLbtTp2cqx6HV1eAMYVVMwIgLwZ27MJcAMNHeWN%2BmW82mNMZcFMbkMA72OSk9pZ2wgYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDNfUQnP3MNfNprnKsircA6KXuf6zDecZ%2FYvfFhpmVrN1A8jfI1vtnD1%2BfEjfYviDvKoD76XZEu8Gv0FKcSJSJHuCrCAXvZaLDlstIBoeQvRraTy6IglmoSCAR3dRba4q0oDsCGprCOZjiZG7hEoheoa%2B%2Bir%2FkXDT17Zd3gU%2F96R0DgmwVo3fPJ3K4mpTCufQR5N9YrxeBHGAKaoUNz%2BNgBTSjZSTI8kzBx0L%2B1OjpOAhvSQWFS7REFqNMMKW7YVZRpLspbhjwxwjOA93gw6VyqLw3hQLRi2uihkvSTl31kv%2FXmrHeBfr9TiDN%2F8wqXSQ4iEpoQeBJFqFxBfktrvpgbwrT0X7M6Ek%2BaGE4D74QTSAIgAv60UbrHYpVJqEj%2BBBuORxrYL%2Fkk7K5k8MMb8jVBNDGuPCv0tb1qKcVZE8S%2Bx0fv5qvxEcgaL3B3vRsy7XEOn9jkNvqWqgXhNo8zbyJNAGbb%2Ftuv%2FeVtSVLtqy%2BDGydxl9RPVbdoStgK0DEA7ZjwC0Nz6uP%2F21WgFXs0cs3%2F0WTNS82I3996UpAVFozrKio%2BUKLc7J4N8Y%2FB842aqA41BbkBUfTMx3svccHsxXo%2BKIC1vLd5KUKld79IFmFXR8Q1UzU6z9RYLD%2FZy%2F46alOB4lIHHvc1HmoxGPMIWbkb0GOqUBS6WJTlCZhYPDg3M7L%2BAS3qzOnscb0kXxGxA8yg%2BXfPxEkukm6gUzz1KwCv1MSK0i2cenuMKVnstz1PoYu7O0uknxeoCUhCsV6sVcGTRbqdL9Ln4AeB75sGDffPC5RkPkgrORuYyiNVLoamcpaN%2Be9Mtc25P0sRiepXBafUVjeLrE7WbsrxGxEjL%2FpiYuSiY%2BR13GcIzRijHcBfO9XRWAHBk1eMqo&X-Amz-Signature=9baea47e0e5b307514a2ca0835dd982248a7df992023a24f362716f320df5b14&X-Amz-SignedHeaders=host&x-id=GetObject)
