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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIN2QV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDaHWXJJDomA6A%2BCxcaDAcz6yHViN1ODsTY69tUAvJgIhAJqDiaag3e1UCPtF96K9woSfogAY5iZEgjCnTSYza54%2BKv8DCGUQABoMNjM3NDIzMTgzODA1IgwrZWlSoXbsb8c%2F7z4q3ANcCIYQ0RzOg%2Fi9EE2Y7QvHN4iAgcleWylW3fxmviXP%2FkAGZGKfStfjZGb27PkgC1fJkB1mdb6OUUjBp9bqy%2B6pqr%2F%2BnZHWS9j%2BHlSvAfSo6RNoylcXzHMRgabXyZnq%2FpxwJAQPNKUZWJ5%2FCtkvtOtDc8sAnzbEtiLis2EQDtfB7Sr%2Fh%2FbHEnity15vxTk96mMnOqLg7dO07gotIYC28DXNj3UYsbSbpbRjBrDWsUHMm5LgMfwhwaeZ3S%2BsYjnFsJ5fp3RMtEOLXAxALnqHrn0vmO9tyaOxqhK67S6FjgKZqf49DUzFWWx7O5WCKpi%2BBMKKEh17xYc57smqRuJnkxrjHP%2FtWne95qr%2BItzqa8Q5z6tFLCTEu4VTKFYWGycnTCWz7g5bcnvrLp5mi92yrHS5dmu%2BQWmS8Hhu5yJPSc2tbZHrrHk5gwPFwT3vo8Y1MnNgAQR6ER1qvsUqloTwcrhZn9jqBW7BNyGQCV6SeMq2AkgtA9gxRbx8irePj60af%2Bg2GQIttbQt1QCuAa3g5SiiufEHgSwY%2F4uUqBwsK3bTuuwCGSmliwUexhMLORqcWF7RSUrIy5%2FLOUOD21d4wOdz%2FBDfQ7BuTzRwnHbkGNbP6phUIOGma%2F3X2VH%2BgzCyy6PBBjqkAVU6QUK2N8Zyjed6QBtjBObgiWKhL2T7%2FYWOBcPqZcuUJNruaIN%2FZruMBYcYsedVbIZeKCRphJzytaoSjEwCC%2Fr891aqTJw%2Bu6K2uIiJdblpHgwiqrzVZmvtPhp4WiQA6RPeMYPGzEQtk8meJKA2xaspvGJVGk8i0WpqJWrwPWMlPsEIhm7lrdT1E8KpVVSu75nIIPCubL4ANJRFx5qMmopGBOWC&X-Amz-Signature=b5102c2d664883a1a694eb918fd92c3b6ae7943517b7fc41d866bc0895c3c96f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIN2QV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDaHWXJJDomA6A%2BCxcaDAcz6yHViN1ODsTY69tUAvJgIhAJqDiaag3e1UCPtF96K9woSfogAY5iZEgjCnTSYza54%2BKv8DCGUQABoMNjM3NDIzMTgzODA1IgwrZWlSoXbsb8c%2F7z4q3ANcCIYQ0RzOg%2Fi9EE2Y7QvHN4iAgcleWylW3fxmviXP%2FkAGZGKfStfjZGb27PkgC1fJkB1mdb6OUUjBp9bqy%2B6pqr%2F%2BnZHWS9j%2BHlSvAfSo6RNoylcXzHMRgabXyZnq%2FpxwJAQPNKUZWJ5%2FCtkvtOtDc8sAnzbEtiLis2EQDtfB7Sr%2Fh%2FbHEnity15vxTk96mMnOqLg7dO07gotIYC28DXNj3UYsbSbpbRjBrDWsUHMm5LgMfwhwaeZ3S%2BsYjnFsJ5fp3RMtEOLXAxALnqHrn0vmO9tyaOxqhK67S6FjgKZqf49DUzFWWx7O5WCKpi%2BBMKKEh17xYc57smqRuJnkxrjHP%2FtWne95qr%2BItzqa8Q5z6tFLCTEu4VTKFYWGycnTCWz7g5bcnvrLp5mi92yrHS5dmu%2BQWmS8Hhu5yJPSc2tbZHrrHk5gwPFwT3vo8Y1MnNgAQR6ER1qvsUqloTwcrhZn9jqBW7BNyGQCV6SeMq2AkgtA9gxRbx8irePj60af%2Bg2GQIttbQt1QCuAa3g5SiiufEHgSwY%2F4uUqBwsK3bTuuwCGSmliwUexhMLORqcWF7RSUrIy5%2FLOUOD21d4wOdz%2FBDfQ7BuTzRwnHbkGNbP6phUIOGma%2F3X2VH%2BgzCyy6PBBjqkAVU6QUK2N8Zyjed6QBtjBObgiWKhL2T7%2FYWOBcPqZcuUJNruaIN%2FZruMBYcYsedVbIZeKCRphJzytaoSjEwCC%2Fr891aqTJw%2Bu6K2uIiJdblpHgwiqrzVZmvtPhp4WiQA6RPeMYPGzEQtk8meJKA2xaspvGJVGk8i0WpqJWrwPWMlPsEIhm7lrdT1E8KpVVSu75nIIPCubL4ANJRFx5qMmopGBOWC&X-Amz-Signature=1d6beb45955ef278a12f23039da222662151f24ffb5958b41bf6f4478b66a042&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIN2QV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDaHWXJJDomA6A%2BCxcaDAcz6yHViN1ODsTY69tUAvJgIhAJqDiaag3e1UCPtF96K9woSfogAY5iZEgjCnTSYza54%2BKv8DCGUQABoMNjM3NDIzMTgzODA1IgwrZWlSoXbsb8c%2F7z4q3ANcCIYQ0RzOg%2Fi9EE2Y7QvHN4iAgcleWylW3fxmviXP%2FkAGZGKfStfjZGb27PkgC1fJkB1mdb6OUUjBp9bqy%2B6pqr%2F%2BnZHWS9j%2BHlSvAfSo6RNoylcXzHMRgabXyZnq%2FpxwJAQPNKUZWJ5%2FCtkvtOtDc8sAnzbEtiLis2EQDtfB7Sr%2Fh%2FbHEnity15vxTk96mMnOqLg7dO07gotIYC28DXNj3UYsbSbpbRjBrDWsUHMm5LgMfwhwaeZ3S%2BsYjnFsJ5fp3RMtEOLXAxALnqHrn0vmO9tyaOxqhK67S6FjgKZqf49DUzFWWx7O5WCKpi%2BBMKKEh17xYc57smqRuJnkxrjHP%2FtWne95qr%2BItzqa8Q5z6tFLCTEu4VTKFYWGycnTCWz7g5bcnvrLp5mi92yrHS5dmu%2BQWmS8Hhu5yJPSc2tbZHrrHk5gwPFwT3vo8Y1MnNgAQR6ER1qvsUqloTwcrhZn9jqBW7BNyGQCV6SeMq2AkgtA9gxRbx8irePj60af%2Bg2GQIttbQt1QCuAa3g5SiiufEHgSwY%2F4uUqBwsK3bTuuwCGSmliwUexhMLORqcWF7RSUrIy5%2FLOUOD21d4wOdz%2FBDfQ7BuTzRwnHbkGNbP6phUIOGma%2F3X2VH%2BgzCyy6PBBjqkAVU6QUK2N8Zyjed6QBtjBObgiWKhL2T7%2FYWOBcPqZcuUJNruaIN%2FZruMBYcYsedVbIZeKCRphJzytaoSjEwCC%2Fr891aqTJw%2Bu6K2uIiJdblpHgwiqrzVZmvtPhp4WiQA6RPeMYPGzEQtk8meJKA2xaspvGJVGk8i0WpqJWrwPWMlPsEIhm7lrdT1E8KpVVSu75nIIPCubL4ANJRFx5qMmopGBOWC&X-Amz-Signature=b4c082a740337148c02de6a2b4f1184e0d576364158c8dbf36a2c8b401e4a475&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIN2QV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDaHWXJJDomA6A%2BCxcaDAcz6yHViN1ODsTY69tUAvJgIhAJqDiaag3e1UCPtF96K9woSfogAY5iZEgjCnTSYza54%2BKv8DCGUQABoMNjM3NDIzMTgzODA1IgwrZWlSoXbsb8c%2F7z4q3ANcCIYQ0RzOg%2Fi9EE2Y7QvHN4iAgcleWylW3fxmviXP%2FkAGZGKfStfjZGb27PkgC1fJkB1mdb6OUUjBp9bqy%2B6pqr%2F%2BnZHWS9j%2BHlSvAfSo6RNoylcXzHMRgabXyZnq%2FpxwJAQPNKUZWJ5%2FCtkvtOtDc8sAnzbEtiLis2EQDtfB7Sr%2Fh%2FbHEnity15vxTk96mMnOqLg7dO07gotIYC28DXNj3UYsbSbpbRjBrDWsUHMm5LgMfwhwaeZ3S%2BsYjnFsJ5fp3RMtEOLXAxALnqHrn0vmO9tyaOxqhK67S6FjgKZqf49DUzFWWx7O5WCKpi%2BBMKKEh17xYc57smqRuJnkxrjHP%2FtWne95qr%2BItzqa8Q5z6tFLCTEu4VTKFYWGycnTCWz7g5bcnvrLp5mi92yrHS5dmu%2BQWmS8Hhu5yJPSc2tbZHrrHk5gwPFwT3vo8Y1MnNgAQR6ER1qvsUqloTwcrhZn9jqBW7BNyGQCV6SeMq2AkgtA9gxRbx8irePj60af%2Bg2GQIttbQt1QCuAa3g5SiiufEHgSwY%2F4uUqBwsK3bTuuwCGSmliwUexhMLORqcWF7RSUrIy5%2FLOUOD21d4wOdz%2FBDfQ7BuTzRwnHbkGNbP6phUIOGma%2F3X2VH%2BgzCyy6PBBjqkAVU6QUK2N8Zyjed6QBtjBObgiWKhL2T7%2FYWOBcPqZcuUJNruaIN%2FZruMBYcYsedVbIZeKCRphJzytaoSjEwCC%2Fr891aqTJw%2Bu6K2uIiJdblpHgwiqrzVZmvtPhp4WiQA6RPeMYPGzEQtk8meJKA2xaspvGJVGk8i0WpqJWrwPWMlPsEIhm7lrdT1E8KpVVSu75nIIPCubL4ANJRFx5qMmopGBOWC&X-Amz-Signature=71ca672596ddc660cb822b42584487b8a213b507d158cb2010c6a21810fa520e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIN2QV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDaHWXJJDomA6A%2BCxcaDAcz6yHViN1ODsTY69tUAvJgIhAJqDiaag3e1UCPtF96K9woSfogAY5iZEgjCnTSYza54%2BKv8DCGUQABoMNjM3NDIzMTgzODA1IgwrZWlSoXbsb8c%2F7z4q3ANcCIYQ0RzOg%2Fi9EE2Y7QvHN4iAgcleWylW3fxmviXP%2FkAGZGKfStfjZGb27PkgC1fJkB1mdb6OUUjBp9bqy%2B6pqr%2F%2BnZHWS9j%2BHlSvAfSo6RNoylcXzHMRgabXyZnq%2FpxwJAQPNKUZWJ5%2FCtkvtOtDc8sAnzbEtiLis2EQDtfB7Sr%2Fh%2FbHEnity15vxTk96mMnOqLg7dO07gotIYC28DXNj3UYsbSbpbRjBrDWsUHMm5LgMfwhwaeZ3S%2BsYjnFsJ5fp3RMtEOLXAxALnqHrn0vmO9tyaOxqhK67S6FjgKZqf49DUzFWWx7O5WCKpi%2BBMKKEh17xYc57smqRuJnkxrjHP%2FtWne95qr%2BItzqa8Q5z6tFLCTEu4VTKFYWGycnTCWz7g5bcnvrLp5mi92yrHS5dmu%2BQWmS8Hhu5yJPSc2tbZHrrHk5gwPFwT3vo8Y1MnNgAQR6ER1qvsUqloTwcrhZn9jqBW7BNyGQCV6SeMq2AkgtA9gxRbx8irePj60af%2Bg2GQIttbQt1QCuAa3g5SiiufEHgSwY%2F4uUqBwsK3bTuuwCGSmliwUexhMLORqcWF7RSUrIy5%2FLOUOD21d4wOdz%2FBDfQ7BuTzRwnHbkGNbP6phUIOGma%2F3X2VH%2BgzCyy6PBBjqkAVU6QUK2N8Zyjed6QBtjBObgiWKhL2T7%2FYWOBcPqZcuUJNruaIN%2FZruMBYcYsedVbIZeKCRphJzytaoSjEwCC%2Fr891aqTJw%2Bu6K2uIiJdblpHgwiqrzVZmvtPhp4WiQA6RPeMYPGzEQtk8meJKA2xaspvGJVGk8i0WpqJWrwPWMlPsEIhm7lrdT1E8KpVVSu75nIIPCubL4ANJRFx5qMmopGBOWC&X-Amz-Signature=2391c77ca3b2f3c590bb46c7150999c343a3a1250febfc31a5b0474de6daf398&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIN2QV2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUDaHWXJJDomA6A%2BCxcaDAcz6yHViN1ODsTY69tUAvJgIhAJqDiaag3e1UCPtF96K9woSfogAY5iZEgjCnTSYza54%2BKv8DCGUQABoMNjM3NDIzMTgzODA1IgwrZWlSoXbsb8c%2F7z4q3ANcCIYQ0RzOg%2Fi9EE2Y7QvHN4iAgcleWylW3fxmviXP%2FkAGZGKfStfjZGb27PkgC1fJkB1mdb6OUUjBp9bqy%2B6pqr%2F%2BnZHWS9j%2BHlSvAfSo6RNoylcXzHMRgabXyZnq%2FpxwJAQPNKUZWJ5%2FCtkvtOtDc8sAnzbEtiLis2EQDtfB7Sr%2Fh%2FbHEnity15vxTk96mMnOqLg7dO07gotIYC28DXNj3UYsbSbpbRjBrDWsUHMm5LgMfwhwaeZ3S%2BsYjnFsJ5fp3RMtEOLXAxALnqHrn0vmO9tyaOxqhK67S6FjgKZqf49DUzFWWx7O5WCKpi%2BBMKKEh17xYc57smqRuJnkxrjHP%2FtWne95qr%2BItzqa8Q5z6tFLCTEu4VTKFYWGycnTCWz7g5bcnvrLp5mi92yrHS5dmu%2BQWmS8Hhu5yJPSc2tbZHrrHk5gwPFwT3vo8Y1MnNgAQR6ER1qvsUqloTwcrhZn9jqBW7BNyGQCV6SeMq2AkgtA9gxRbx8irePj60af%2Bg2GQIttbQt1QCuAa3g5SiiufEHgSwY%2F4uUqBwsK3bTuuwCGSmliwUexhMLORqcWF7RSUrIy5%2FLOUOD21d4wOdz%2FBDfQ7BuTzRwnHbkGNbP6phUIOGma%2F3X2VH%2BgzCyy6PBBjqkAVU6QUK2N8Zyjed6QBtjBObgiWKhL2T7%2FYWOBcPqZcuUJNruaIN%2FZruMBYcYsedVbIZeKCRphJzytaoSjEwCC%2Fr891aqTJw%2Bu6K2uIiJdblpHgwiqrzVZmvtPhp4WiQA6RPeMYPGzEQtk8meJKA2xaspvGJVGk8i0WpqJWrwPWMlPsEIhm7lrdT1E8KpVVSu75nIIPCubL4ANJRFx5qMmopGBOWC&X-Amz-Signature=1d87293a7c5049de5fefde0b9306701a7b52ef2c8fb602a0fc9c87ed66d513fe&X-Amz-SignedHeaders=host&x-id=GetObject)
