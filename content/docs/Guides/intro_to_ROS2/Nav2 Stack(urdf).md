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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR366AAK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6nxI%2F7sX5j%2FWXV%2Fw0Kf5YYJR0RzT9fUrJFk%2BiWptgQAIhANGxwrad4zP4yqSn1ieuRqMHJBzgmlygQne2MTTSsTTlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyunKwov%2BD1bps5X1Iq3AMSprwMCvZ7z25cO0UxiUX3NQ8UaXHMU80%2B2MBE2sQX8uDROMgFHHocthsmI4UUdW3t01fKpkJIm3jxHc%2B6TxkXM73HIcjHQwzTMz8UxmIXGXj%2Fk7BldIyEkknzjzdgUH3s7rVvak7oWb7ao0YUEWVi0LKnsb%2B3D7E0VttzKC9M9kMYTw0DxBWlZoS3I6XjYV9b5D%2BiInPCHmAEXlK%2FB4nIhb%2BO%2FseiKLjtdSGcUxPL5lRTizCJhSEXcR5n8KU3YtRBWINLBuWYSnDoEQFCFFH1BGsDBEP%2F%2FGmNYYH%2FTXMqtFPkL%2Fb2MGYotgWB7B9h8RAOAqMfoKUOhzBx8Kr5zUiOO85DMpl4yjljghMAm9LTx3iANXtNVGR1h6gWlNegnS3GSiwXwhrRF1ju1%2BTD03fSKp49ckZvdwo2JXqJcDk0sTxQHPqgRUoh7nFnLZFxoINYRXNz8jmc7qCQzkN0FkjWCCBWPnPCNvv1vh08TNp6jrH5fiBXs%2Blim%2FxHNorf3RBxIo41WChaNQm2V3wNLnxKvw0DgHQFDgjog73b%2FMBjI6S6D9M6vdEOeNbgdI1hx%2BFUgJs647X6Vkeb6GhRc4QPDhb%2Bp%2FKwEIJxr1BmSghO9NQ7ulnRab16tpkwMjDmg4jBBjqkAdYVLbc6YmKzwAYmwqJMskgPqc2%2Fq60yK5SihLxqRlvRVW%2FwOQFd6J7WzOcjcC4P2AR1SudDl9qxl%2BuWfyQLtfhlWrINxTcBrD%2BCZVTdXhBY8O4UjwrH0GTP7Mnh6LHIQvaGHkNogjnZv01TtjDZ6GeSjncyWiRJGEPyIiWn7PA7%2Fzbz0NushOGlyEWQFvbBWNDWP7zuOciKLcpcYSzZAQQ3fioW&X-Amz-Signature=1261c210bad031d35ff6e9551c25a5a04da3e1b7ec266763a33d46ff9d53c54a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR366AAK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6nxI%2F7sX5j%2FWXV%2Fw0Kf5YYJR0RzT9fUrJFk%2BiWptgQAIhANGxwrad4zP4yqSn1ieuRqMHJBzgmlygQne2MTTSsTTlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyunKwov%2BD1bps5X1Iq3AMSprwMCvZ7z25cO0UxiUX3NQ8UaXHMU80%2B2MBE2sQX8uDROMgFHHocthsmI4UUdW3t01fKpkJIm3jxHc%2B6TxkXM73HIcjHQwzTMz8UxmIXGXj%2Fk7BldIyEkknzjzdgUH3s7rVvak7oWb7ao0YUEWVi0LKnsb%2B3D7E0VttzKC9M9kMYTw0DxBWlZoS3I6XjYV9b5D%2BiInPCHmAEXlK%2FB4nIhb%2BO%2FseiKLjtdSGcUxPL5lRTizCJhSEXcR5n8KU3YtRBWINLBuWYSnDoEQFCFFH1BGsDBEP%2F%2FGmNYYH%2FTXMqtFPkL%2Fb2MGYotgWB7B9h8RAOAqMfoKUOhzBx8Kr5zUiOO85DMpl4yjljghMAm9LTx3iANXtNVGR1h6gWlNegnS3GSiwXwhrRF1ju1%2BTD03fSKp49ckZvdwo2JXqJcDk0sTxQHPqgRUoh7nFnLZFxoINYRXNz8jmc7qCQzkN0FkjWCCBWPnPCNvv1vh08TNp6jrH5fiBXs%2Blim%2FxHNorf3RBxIo41WChaNQm2V3wNLnxKvw0DgHQFDgjog73b%2FMBjI6S6D9M6vdEOeNbgdI1hx%2BFUgJs647X6Vkeb6GhRc4QPDhb%2Bp%2FKwEIJxr1BmSghO9NQ7ulnRab16tpkwMjDmg4jBBjqkAdYVLbc6YmKzwAYmwqJMskgPqc2%2Fq60yK5SihLxqRlvRVW%2FwOQFd6J7WzOcjcC4P2AR1SudDl9qxl%2BuWfyQLtfhlWrINxTcBrD%2BCZVTdXhBY8O4UjwrH0GTP7Mnh6LHIQvaGHkNogjnZv01TtjDZ6GeSjncyWiRJGEPyIiWn7PA7%2Fzbz0NushOGlyEWQFvbBWNDWP7zuOciKLcpcYSzZAQQ3fioW&X-Amz-Signature=19cf1aa8f97a3003818b3a4fd441cbd8432615442b098ce6c5691dd9f5e3bd82&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR366AAK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6nxI%2F7sX5j%2FWXV%2Fw0Kf5YYJR0RzT9fUrJFk%2BiWptgQAIhANGxwrad4zP4yqSn1ieuRqMHJBzgmlygQne2MTTSsTTlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyunKwov%2BD1bps5X1Iq3AMSprwMCvZ7z25cO0UxiUX3NQ8UaXHMU80%2B2MBE2sQX8uDROMgFHHocthsmI4UUdW3t01fKpkJIm3jxHc%2B6TxkXM73HIcjHQwzTMz8UxmIXGXj%2Fk7BldIyEkknzjzdgUH3s7rVvak7oWb7ao0YUEWVi0LKnsb%2B3D7E0VttzKC9M9kMYTw0DxBWlZoS3I6XjYV9b5D%2BiInPCHmAEXlK%2FB4nIhb%2BO%2FseiKLjtdSGcUxPL5lRTizCJhSEXcR5n8KU3YtRBWINLBuWYSnDoEQFCFFH1BGsDBEP%2F%2FGmNYYH%2FTXMqtFPkL%2Fb2MGYotgWB7B9h8RAOAqMfoKUOhzBx8Kr5zUiOO85DMpl4yjljghMAm9LTx3iANXtNVGR1h6gWlNegnS3GSiwXwhrRF1ju1%2BTD03fSKp49ckZvdwo2JXqJcDk0sTxQHPqgRUoh7nFnLZFxoINYRXNz8jmc7qCQzkN0FkjWCCBWPnPCNvv1vh08TNp6jrH5fiBXs%2Blim%2FxHNorf3RBxIo41WChaNQm2V3wNLnxKvw0DgHQFDgjog73b%2FMBjI6S6D9M6vdEOeNbgdI1hx%2BFUgJs647X6Vkeb6GhRc4QPDhb%2Bp%2FKwEIJxr1BmSghO9NQ7ulnRab16tpkwMjDmg4jBBjqkAdYVLbc6YmKzwAYmwqJMskgPqc2%2Fq60yK5SihLxqRlvRVW%2FwOQFd6J7WzOcjcC4P2AR1SudDl9qxl%2BuWfyQLtfhlWrINxTcBrD%2BCZVTdXhBY8O4UjwrH0GTP7Mnh6LHIQvaGHkNogjnZv01TtjDZ6GeSjncyWiRJGEPyIiWn7PA7%2Fzbz0NushOGlyEWQFvbBWNDWP7zuOciKLcpcYSzZAQQ3fioW&X-Amz-Signature=53867fac33dd48b5028a66f9b4837bee21040013ba430fa4bf8c988c5b25dfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR366AAK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6nxI%2F7sX5j%2FWXV%2Fw0Kf5YYJR0RzT9fUrJFk%2BiWptgQAIhANGxwrad4zP4yqSn1ieuRqMHJBzgmlygQne2MTTSsTTlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyunKwov%2BD1bps5X1Iq3AMSprwMCvZ7z25cO0UxiUX3NQ8UaXHMU80%2B2MBE2sQX8uDROMgFHHocthsmI4UUdW3t01fKpkJIm3jxHc%2B6TxkXM73HIcjHQwzTMz8UxmIXGXj%2Fk7BldIyEkknzjzdgUH3s7rVvak7oWb7ao0YUEWVi0LKnsb%2B3D7E0VttzKC9M9kMYTw0DxBWlZoS3I6XjYV9b5D%2BiInPCHmAEXlK%2FB4nIhb%2BO%2FseiKLjtdSGcUxPL5lRTizCJhSEXcR5n8KU3YtRBWINLBuWYSnDoEQFCFFH1BGsDBEP%2F%2FGmNYYH%2FTXMqtFPkL%2Fb2MGYotgWB7B9h8RAOAqMfoKUOhzBx8Kr5zUiOO85DMpl4yjljghMAm9LTx3iANXtNVGR1h6gWlNegnS3GSiwXwhrRF1ju1%2BTD03fSKp49ckZvdwo2JXqJcDk0sTxQHPqgRUoh7nFnLZFxoINYRXNz8jmc7qCQzkN0FkjWCCBWPnPCNvv1vh08TNp6jrH5fiBXs%2Blim%2FxHNorf3RBxIo41WChaNQm2V3wNLnxKvw0DgHQFDgjog73b%2FMBjI6S6D9M6vdEOeNbgdI1hx%2BFUgJs647X6Vkeb6GhRc4QPDhb%2Bp%2FKwEIJxr1BmSghO9NQ7ulnRab16tpkwMjDmg4jBBjqkAdYVLbc6YmKzwAYmwqJMskgPqc2%2Fq60yK5SihLxqRlvRVW%2FwOQFd6J7WzOcjcC4P2AR1SudDl9qxl%2BuWfyQLtfhlWrINxTcBrD%2BCZVTdXhBY8O4UjwrH0GTP7Mnh6LHIQvaGHkNogjnZv01TtjDZ6GeSjncyWiRJGEPyIiWn7PA7%2Fzbz0NushOGlyEWQFvbBWNDWP7zuOciKLcpcYSzZAQQ3fioW&X-Amz-Signature=2ff9ebecdb8f3068eb635f56fb3084f7748c8f7a96843060329ff7467915b26e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR366AAK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6nxI%2F7sX5j%2FWXV%2Fw0Kf5YYJR0RzT9fUrJFk%2BiWptgQAIhANGxwrad4zP4yqSn1ieuRqMHJBzgmlygQne2MTTSsTTlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyunKwov%2BD1bps5X1Iq3AMSprwMCvZ7z25cO0UxiUX3NQ8UaXHMU80%2B2MBE2sQX8uDROMgFHHocthsmI4UUdW3t01fKpkJIm3jxHc%2B6TxkXM73HIcjHQwzTMz8UxmIXGXj%2Fk7BldIyEkknzjzdgUH3s7rVvak7oWb7ao0YUEWVi0LKnsb%2B3D7E0VttzKC9M9kMYTw0DxBWlZoS3I6XjYV9b5D%2BiInPCHmAEXlK%2FB4nIhb%2BO%2FseiKLjtdSGcUxPL5lRTizCJhSEXcR5n8KU3YtRBWINLBuWYSnDoEQFCFFH1BGsDBEP%2F%2FGmNYYH%2FTXMqtFPkL%2Fb2MGYotgWB7B9h8RAOAqMfoKUOhzBx8Kr5zUiOO85DMpl4yjljghMAm9LTx3iANXtNVGR1h6gWlNegnS3GSiwXwhrRF1ju1%2BTD03fSKp49ckZvdwo2JXqJcDk0sTxQHPqgRUoh7nFnLZFxoINYRXNz8jmc7qCQzkN0FkjWCCBWPnPCNvv1vh08TNp6jrH5fiBXs%2Blim%2FxHNorf3RBxIo41WChaNQm2V3wNLnxKvw0DgHQFDgjog73b%2FMBjI6S6D9M6vdEOeNbgdI1hx%2BFUgJs647X6Vkeb6GhRc4QPDhb%2Bp%2FKwEIJxr1BmSghO9NQ7ulnRab16tpkwMjDmg4jBBjqkAdYVLbc6YmKzwAYmwqJMskgPqc2%2Fq60yK5SihLxqRlvRVW%2FwOQFd6J7WzOcjcC4P2AR1SudDl9qxl%2BuWfyQLtfhlWrINxTcBrD%2BCZVTdXhBY8O4UjwrH0GTP7Mnh6LHIQvaGHkNogjnZv01TtjDZ6GeSjncyWiRJGEPyIiWn7PA7%2Fzbz0NushOGlyEWQFvbBWNDWP7zuOciKLcpcYSzZAQQ3fioW&X-Amz-Signature=2e4f622110a2c4fef8dbb24086d01ffbf4fce4b2c1a109e428724c74ab6caa34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR366AAK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC6nxI%2F7sX5j%2FWXV%2Fw0Kf5YYJR0RzT9fUrJFk%2BiWptgQAIhANGxwrad4zP4yqSn1ieuRqMHJBzgmlygQne2MTTSsTTlKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyunKwov%2BD1bps5X1Iq3AMSprwMCvZ7z25cO0UxiUX3NQ8UaXHMU80%2B2MBE2sQX8uDROMgFHHocthsmI4UUdW3t01fKpkJIm3jxHc%2B6TxkXM73HIcjHQwzTMz8UxmIXGXj%2Fk7BldIyEkknzjzdgUH3s7rVvak7oWb7ao0YUEWVi0LKnsb%2B3D7E0VttzKC9M9kMYTw0DxBWlZoS3I6XjYV9b5D%2BiInPCHmAEXlK%2FB4nIhb%2BO%2FseiKLjtdSGcUxPL5lRTizCJhSEXcR5n8KU3YtRBWINLBuWYSnDoEQFCFFH1BGsDBEP%2F%2FGmNYYH%2FTXMqtFPkL%2Fb2MGYotgWB7B9h8RAOAqMfoKUOhzBx8Kr5zUiOO85DMpl4yjljghMAm9LTx3iANXtNVGR1h6gWlNegnS3GSiwXwhrRF1ju1%2BTD03fSKp49ckZvdwo2JXqJcDk0sTxQHPqgRUoh7nFnLZFxoINYRXNz8jmc7qCQzkN0FkjWCCBWPnPCNvv1vh08TNp6jrH5fiBXs%2Blim%2FxHNorf3RBxIo41WChaNQm2V3wNLnxKvw0DgHQFDgjog73b%2FMBjI6S6D9M6vdEOeNbgdI1hx%2BFUgJs647X6Vkeb6GhRc4QPDhb%2Bp%2FKwEIJxr1BmSghO9NQ7ulnRab16tpkwMjDmg4jBBjqkAdYVLbc6YmKzwAYmwqJMskgPqc2%2Fq60yK5SihLxqRlvRVW%2FwOQFd6J7WzOcjcC4P2AR1SudDl9qxl%2BuWfyQLtfhlWrINxTcBrD%2BCZVTdXhBY8O4UjwrH0GTP7Mnh6LHIQvaGHkNogjnZv01TtjDZ6GeSjncyWiRJGEPyIiWn7PA7%2Fzbz0NushOGlyEWQFvbBWNDWP7zuOciKLcpcYSzZAQQ3fioW&X-Amz-Signature=0e7ca6dd981bc7ce566f53cd438ef208fca65cb5420309a48f3e063bcf16b88e&X-Amz-SignedHeaders=host&x-id=GetObject)
