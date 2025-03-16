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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWRJ64I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI25IoFFoiw9s8XpuSueuzTP24Ivp8zIsLUGJwNGmbuAIhAMQJS5ON8W1uGJ12KTznm4UOEnGSfVPsfRD8nXpy2%2FYPKv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2FuNKyIgUZ9NHrHWUq3APgI5c0hCtxIEYRK4BR9JeC3ATNoLUHLgS0iX%2FSRCrHP0esgjNwDZenBVYk1Ex8Hxv55UFDG1B4flFTXOuctJFbGxpz0rMLtu%2BKlohxeQRdkTElgg9m1Nxh6zkVZTeejIZCB1X%2ByOynMnf2nJ4UmpgFtPmTn1XFY6giKgKaBnx6T2xvZ122xvEWCm%2FWwRNPU%2Bknpnay5m87fnPEpRX%2BHJuXBND9rkq%2F3Pioy45eoS2CL8dneRJQzxl73w%2FNorHH4qIiKtZM64d%2BFieoTsexZzuejSok2xnJ9GWOt4NSuZ9xaFUxAjYTLWPTk2dgQyJhVtyEzTrDsTWdJs4YPq8p0vqsCwYAEjy2VxQIJg6DaNLIYWRwCTKbvKWbu25sUQC6DauKoRfNDRkHq0TUYOw2M7bDVtAmg1gWTvgW3sS1oDdoXG2svlML1BcKolDfTqZnVsmS2dT6a5HImYEBACWKiGgY0%2B%2BcKgG3dZ5tQ1Nhyfvv4PMJpMdbnxwndNUOkgR7Wxz0FL5y4vRGaXa0cQYIxu5m%2F5ImPIKIcC02t%2BggrY5gFOFlnb8H9CP73%2B9AeH3wIfpLxdCSTYU2TLludNTV4ynrgj4J0u%2FP6pZC35klBLjJecn7d3xnzbda7NZTpzDy3tu%2BBjqkAcM8dbj6QjmjPG04kAW6dhhNqO6ahbTfOeD%2BDOv6gd5ts5%2FGUooe6kDQy%2B0O70BRiC%2BfB4TlxXhc8DqGNkfp4TB3SWMCtk%2FIltnQii26QcUh5Fg2Y2YryZFsw4PDcKAhi6br2gMw1aiZ8aU7YZg%2Bl8Z3%2FUtBYiF6D0WDN2APRw7i%2FpHshqs1ui7sHLGqrAwswgBJiAnjKbmlmL7h5TpmlxG0JLQt&X-Amz-Signature=5f44346b7be6bcb75baa1cb272651d2da3099beeb8a53c61d1bb91aef24e2b81&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWRJ64I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI25IoFFoiw9s8XpuSueuzTP24Ivp8zIsLUGJwNGmbuAIhAMQJS5ON8W1uGJ12KTznm4UOEnGSfVPsfRD8nXpy2%2FYPKv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2FuNKyIgUZ9NHrHWUq3APgI5c0hCtxIEYRK4BR9JeC3ATNoLUHLgS0iX%2FSRCrHP0esgjNwDZenBVYk1Ex8Hxv55UFDG1B4flFTXOuctJFbGxpz0rMLtu%2BKlohxeQRdkTElgg9m1Nxh6zkVZTeejIZCB1X%2ByOynMnf2nJ4UmpgFtPmTn1XFY6giKgKaBnx6T2xvZ122xvEWCm%2FWwRNPU%2Bknpnay5m87fnPEpRX%2BHJuXBND9rkq%2F3Pioy45eoS2CL8dneRJQzxl73w%2FNorHH4qIiKtZM64d%2BFieoTsexZzuejSok2xnJ9GWOt4NSuZ9xaFUxAjYTLWPTk2dgQyJhVtyEzTrDsTWdJs4YPq8p0vqsCwYAEjy2VxQIJg6DaNLIYWRwCTKbvKWbu25sUQC6DauKoRfNDRkHq0TUYOw2M7bDVtAmg1gWTvgW3sS1oDdoXG2svlML1BcKolDfTqZnVsmS2dT6a5HImYEBACWKiGgY0%2B%2BcKgG3dZ5tQ1Nhyfvv4PMJpMdbnxwndNUOkgR7Wxz0FL5y4vRGaXa0cQYIxu5m%2F5ImPIKIcC02t%2BggrY5gFOFlnb8H9CP73%2B9AeH3wIfpLxdCSTYU2TLludNTV4ynrgj4J0u%2FP6pZC35klBLjJecn7d3xnzbda7NZTpzDy3tu%2BBjqkAcM8dbj6QjmjPG04kAW6dhhNqO6ahbTfOeD%2BDOv6gd5ts5%2FGUooe6kDQy%2B0O70BRiC%2BfB4TlxXhc8DqGNkfp4TB3SWMCtk%2FIltnQii26QcUh5Fg2Y2YryZFsw4PDcKAhi6br2gMw1aiZ8aU7YZg%2Bl8Z3%2FUtBYiF6D0WDN2APRw7i%2FpHshqs1ui7sHLGqrAwswgBJiAnjKbmlmL7h5TpmlxG0JLQt&X-Amz-Signature=115d81a10c56092489e31bbc1eb51302aea6a75d2752af96f90a71838bff68ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWRJ64I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI25IoFFoiw9s8XpuSueuzTP24Ivp8zIsLUGJwNGmbuAIhAMQJS5ON8W1uGJ12KTznm4UOEnGSfVPsfRD8nXpy2%2FYPKv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2FuNKyIgUZ9NHrHWUq3APgI5c0hCtxIEYRK4BR9JeC3ATNoLUHLgS0iX%2FSRCrHP0esgjNwDZenBVYk1Ex8Hxv55UFDG1B4flFTXOuctJFbGxpz0rMLtu%2BKlohxeQRdkTElgg9m1Nxh6zkVZTeejIZCB1X%2ByOynMnf2nJ4UmpgFtPmTn1XFY6giKgKaBnx6T2xvZ122xvEWCm%2FWwRNPU%2Bknpnay5m87fnPEpRX%2BHJuXBND9rkq%2F3Pioy45eoS2CL8dneRJQzxl73w%2FNorHH4qIiKtZM64d%2BFieoTsexZzuejSok2xnJ9GWOt4NSuZ9xaFUxAjYTLWPTk2dgQyJhVtyEzTrDsTWdJs4YPq8p0vqsCwYAEjy2VxQIJg6DaNLIYWRwCTKbvKWbu25sUQC6DauKoRfNDRkHq0TUYOw2M7bDVtAmg1gWTvgW3sS1oDdoXG2svlML1BcKolDfTqZnVsmS2dT6a5HImYEBACWKiGgY0%2B%2BcKgG3dZ5tQ1Nhyfvv4PMJpMdbnxwndNUOkgR7Wxz0FL5y4vRGaXa0cQYIxu5m%2F5ImPIKIcC02t%2BggrY5gFOFlnb8H9CP73%2B9AeH3wIfpLxdCSTYU2TLludNTV4ynrgj4J0u%2FP6pZC35klBLjJecn7d3xnzbda7NZTpzDy3tu%2BBjqkAcM8dbj6QjmjPG04kAW6dhhNqO6ahbTfOeD%2BDOv6gd5ts5%2FGUooe6kDQy%2B0O70BRiC%2BfB4TlxXhc8DqGNkfp4TB3SWMCtk%2FIltnQii26QcUh5Fg2Y2YryZFsw4PDcKAhi6br2gMw1aiZ8aU7YZg%2Bl8Z3%2FUtBYiF6D0WDN2APRw7i%2FpHshqs1ui7sHLGqrAwswgBJiAnjKbmlmL7h5TpmlxG0JLQt&X-Amz-Signature=e722a612d106838a906bacd379927e828085648927f7cbb4ea8728053a3c8a91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWRJ64I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI25IoFFoiw9s8XpuSueuzTP24Ivp8zIsLUGJwNGmbuAIhAMQJS5ON8W1uGJ12KTznm4UOEnGSfVPsfRD8nXpy2%2FYPKv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2FuNKyIgUZ9NHrHWUq3APgI5c0hCtxIEYRK4BR9JeC3ATNoLUHLgS0iX%2FSRCrHP0esgjNwDZenBVYk1Ex8Hxv55UFDG1B4flFTXOuctJFbGxpz0rMLtu%2BKlohxeQRdkTElgg9m1Nxh6zkVZTeejIZCB1X%2ByOynMnf2nJ4UmpgFtPmTn1XFY6giKgKaBnx6T2xvZ122xvEWCm%2FWwRNPU%2Bknpnay5m87fnPEpRX%2BHJuXBND9rkq%2F3Pioy45eoS2CL8dneRJQzxl73w%2FNorHH4qIiKtZM64d%2BFieoTsexZzuejSok2xnJ9GWOt4NSuZ9xaFUxAjYTLWPTk2dgQyJhVtyEzTrDsTWdJs4YPq8p0vqsCwYAEjy2VxQIJg6DaNLIYWRwCTKbvKWbu25sUQC6DauKoRfNDRkHq0TUYOw2M7bDVtAmg1gWTvgW3sS1oDdoXG2svlML1BcKolDfTqZnVsmS2dT6a5HImYEBACWKiGgY0%2B%2BcKgG3dZ5tQ1Nhyfvv4PMJpMdbnxwndNUOkgR7Wxz0FL5y4vRGaXa0cQYIxu5m%2F5ImPIKIcC02t%2BggrY5gFOFlnb8H9CP73%2B9AeH3wIfpLxdCSTYU2TLludNTV4ynrgj4J0u%2FP6pZC35klBLjJecn7d3xnzbda7NZTpzDy3tu%2BBjqkAcM8dbj6QjmjPG04kAW6dhhNqO6ahbTfOeD%2BDOv6gd5ts5%2FGUooe6kDQy%2B0O70BRiC%2BfB4TlxXhc8DqGNkfp4TB3SWMCtk%2FIltnQii26QcUh5Fg2Y2YryZFsw4PDcKAhi6br2gMw1aiZ8aU7YZg%2Bl8Z3%2FUtBYiF6D0WDN2APRw7i%2FpHshqs1ui7sHLGqrAwswgBJiAnjKbmlmL7h5TpmlxG0JLQt&X-Amz-Signature=e567254008dfec3de5432ad4fb2c3044474064c6e11e957d633b3d732956bd76&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWRJ64I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI25IoFFoiw9s8XpuSueuzTP24Ivp8zIsLUGJwNGmbuAIhAMQJS5ON8W1uGJ12KTznm4UOEnGSfVPsfRD8nXpy2%2FYPKv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2FuNKyIgUZ9NHrHWUq3APgI5c0hCtxIEYRK4BR9JeC3ATNoLUHLgS0iX%2FSRCrHP0esgjNwDZenBVYk1Ex8Hxv55UFDG1B4flFTXOuctJFbGxpz0rMLtu%2BKlohxeQRdkTElgg9m1Nxh6zkVZTeejIZCB1X%2ByOynMnf2nJ4UmpgFtPmTn1XFY6giKgKaBnx6T2xvZ122xvEWCm%2FWwRNPU%2Bknpnay5m87fnPEpRX%2BHJuXBND9rkq%2F3Pioy45eoS2CL8dneRJQzxl73w%2FNorHH4qIiKtZM64d%2BFieoTsexZzuejSok2xnJ9GWOt4NSuZ9xaFUxAjYTLWPTk2dgQyJhVtyEzTrDsTWdJs4YPq8p0vqsCwYAEjy2VxQIJg6DaNLIYWRwCTKbvKWbu25sUQC6DauKoRfNDRkHq0TUYOw2M7bDVtAmg1gWTvgW3sS1oDdoXG2svlML1BcKolDfTqZnVsmS2dT6a5HImYEBACWKiGgY0%2B%2BcKgG3dZ5tQ1Nhyfvv4PMJpMdbnxwndNUOkgR7Wxz0FL5y4vRGaXa0cQYIxu5m%2F5ImPIKIcC02t%2BggrY5gFOFlnb8H9CP73%2B9AeH3wIfpLxdCSTYU2TLludNTV4ynrgj4J0u%2FP6pZC35klBLjJecn7d3xnzbda7NZTpzDy3tu%2BBjqkAcM8dbj6QjmjPG04kAW6dhhNqO6ahbTfOeD%2BDOv6gd5ts5%2FGUooe6kDQy%2B0O70BRiC%2BfB4TlxXhc8DqGNkfp4TB3SWMCtk%2FIltnQii26QcUh5Fg2Y2YryZFsw4PDcKAhi6br2gMw1aiZ8aU7YZg%2Bl8Z3%2FUtBYiF6D0WDN2APRw7i%2FpHshqs1ui7sHLGqrAwswgBJiAnjKbmlmL7h5TpmlxG0JLQt&X-Amz-Signature=d1185f92d2d021574edc532419880e680c0298810c3fd0dca78381264d5472db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OWRJ64I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI25IoFFoiw9s8XpuSueuzTP24Ivp8zIsLUGJwNGmbuAIhAMQJS5ON8W1uGJ12KTznm4UOEnGSfVPsfRD8nXpy2%2FYPKv8DCDEQABoMNjM3NDIzMTgzODA1Igz%2FuNKyIgUZ9NHrHWUq3APgI5c0hCtxIEYRK4BR9JeC3ATNoLUHLgS0iX%2FSRCrHP0esgjNwDZenBVYk1Ex8Hxv55UFDG1B4flFTXOuctJFbGxpz0rMLtu%2BKlohxeQRdkTElgg9m1Nxh6zkVZTeejIZCB1X%2ByOynMnf2nJ4UmpgFtPmTn1XFY6giKgKaBnx6T2xvZ122xvEWCm%2FWwRNPU%2Bknpnay5m87fnPEpRX%2BHJuXBND9rkq%2F3Pioy45eoS2CL8dneRJQzxl73w%2FNorHH4qIiKtZM64d%2BFieoTsexZzuejSok2xnJ9GWOt4NSuZ9xaFUxAjYTLWPTk2dgQyJhVtyEzTrDsTWdJs4YPq8p0vqsCwYAEjy2VxQIJg6DaNLIYWRwCTKbvKWbu25sUQC6DauKoRfNDRkHq0TUYOw2M7bDVtAmg1gWTvgW3sS1oDdoXG2svlML1BcKolDfTqZnVsmS2dT6a5HImYEBACWKiGgY0%2B%2BcKgG3dZ5tQ1Nhyfvv4PMJpMdbnxwndNUOkgR7Wxz0FL5y4vRGaXa0cQYIxu5m%2F5ImPIKIcC02t%2BggrY5gFOFlnb8H9CP73%2B9AeH3wIfpLxdCSTYU2TLludNTV4ynrgj4J0u%2FP6pZC35klBLjJecn7d3xnzbda7NZTpzDy3tu%2BBjqkAcM8dbj6QjmjPG04kAW6dhhNqO6ahbTfOeD%2BDOv6gd5ts5%2FGUooe6kDQy%2B0O70BRiC%2BfB4TlxXhc8DqGNkfp4TB3SWMCtk%2FIltnQii26QcUh5Fg2Y2YryZFsw4PDcKAhi6br2gMw1aiZ8aU7YZg%2Bl8Z3%2FUtBYiF6D0WDN2APRw7i%2FpHshqs1ui7sHLGqrAwswgBJiAnjKbmlmL7h5TpmlxG0JLQt&X-Amz-Signature=9fccb2ebe785857f21b75d40ac7510a1a78ff34a7ceace774b5a3c5dd9cffd9b&X-Amz-SignedHeaders=host&x-id=GetObject)
