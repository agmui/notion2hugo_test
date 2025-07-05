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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSFTGW3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIAS6%2BRPeQUeSGGm1%2BQ%2FfgpPmHlkeWYBWxpM3mKllyDLGAiBTLnYGOkgyY8bBdglk0hVg8Kg24tdPfgkEHcBPrEXaTCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPmKFqsWWHH0kCM6zKtwDlyYNRaXAlT%2FgfA9T6RV5lNwKFbTFbF8g5HNsrp4LCD%2B7MpTX0MBMmZBBTEbhScQeD2oQy5vT4CF88zhj521mSC0i8ctLhGjLx4%2BRDK3mwbT%2FLJ5GUIFO0mTxaq2rYXteBhDMm9%2BObVyiZR1JrkHVmZcvxMixt7MvA1wucXoMkPwyZRAWzFQyWcmfa45XefxVFBmViixrdwMTQplEyz2hRfnd3NrkWPjBYXa11hexSo%2FzY6YdWJaFKy%2FAu3WXbrFXwx8CxiFZS7f0me9jkmNqDVviln65mhZLTXFwKZQXX6Zikq7YDkYQcf9QCcSqyjubb04Dy3b6tNbht6yL5y6Wx2sNuyDgYZRPyy2vor6AfsJBLyQUWIjJ2NxrJQhklUUr2fYt31j1CjrRCJXYrRdi7ZIajUqfeHbqgTqZqZoUakIbyO8a02LtLcAVZF2tg1drBJck%2Fho0rR9EzbhcDPolj5oS2z9Jxu7gPpJ%2ByaRO4seOnPJ%2BX5NGr7gVowVs0JgcIu9aP6rOICWrj3srce9kMGPs4NDlXGb6KCHVBqDzEvaHtk9q%2BbbjHmyDPuR%2F6yIBq7Hho8NU%2BXqyt3A4wlbcOlgrgVmddRcFbI0I5JgRsERbFwkzpdthq0VPuc0w8cmlwwY6pgEnhoeR0g0W5vQvrubPu8p7mO8mV3N348L%2F2BF2X1vkaHeHw5RJXet5GJrc7Qyh6pI%2Fc%2BVDr7Q95KosDODFaUgoJb%2BEOf1W0UF18WwFGiwLRXVQOAY1SCTdHb%2B1rlV66XFxIk1xQKnjerToap2r331gEIz9LPdYZ6fhCwC9fDcbCknsc3tVYPdMgZ51y%2FhYBEQa2BuGtR6tFPnQqsq0lwnRriwVYKTC&X-Amz-Signature=54d90f8f54e4355caae9fb90e4ec48214439829779a51cecb86a5a1bbab7be72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSFTGW3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIAS6%2BRPeQUeSGGm1%2BQ%2FfgpPmHlkeWYBWxpM3mKllyDLGAiBTLnYGOkgyY8bBdglk0hVg8Kg24tdPfgkEHcBPrEXaTCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPmKFqsWWHH0kCM6zKtwDlyYNRaXAlT%2FgfA9T6RV5lNwKFbTFbF8g5HNsrp4LCD%2B7MpTX0MBMmZBBTEbhScQeD2oQy5vT4CF88zhj521mSC0i8ctLhGjLx4%2BRDK3mwbT%2FLJ5GUIFO0mTxaq2rYXteBhDMm9%2BObVyiZR1JrkHVmZcvxMixt7MvA1wucXoMkPwyZRAWzFQyWcmfa45XefxVFBmViixrdwMTQplEyz2hRfnd3NrkWPjBYXa11hexSo%2FzY6YdWJaFKy%2FAu3WXbrFXwx8CxiFZS7f0me9jkmNqDVviln65mhZLTXFwKZQXX6Zikq7YDkYQcf9QCcSqyjubb04Dy3b6tNbht6yL5y6Wx2sNuyDgYZRPyy2vor6AfsJBLyQUWIjJ2NxrJQhklUUr2fYt31j1CjrRCJXYrRdi7ZIajUqfeHbqgTqZqZoUakIbyO8a02LtLcAVZF2tg1drBJck%2Fho0rR9EzbhcDPolj5oS2z9Jxu7gPpJ%2ByaRO4seOnPJ%2BX5NGr7gVowVs0JgcIu9aP6rOICWrj3srce9kMGPs4NDlXGb6KCHVBqDzEvaHtk9q%2BbbjHmyDPuR%2F6yIBq7Hho8NU%2BXqyt3A4wlbcOlgrgVmddRcFbI0I5JgRsERbFwkzpdthq0VPuc0w8cmlwwY6pgEnhoeR0g0W5vQvrubPu8p7mO8mV3N348L%2F2BF2X1vkaHeHw5RJXet5GJrc7Qyh6pI%2Fc%2BVDr7Q95KosDODFaUgoJb%2BEOf1W0UF18WwFGiwLRXVQOAY1SCTdHb%2B1rlV66XFxIk1xQKnjerToap2r331gEIz9LPdYZ6fhCwC9fDcbCknsc3tVYPdMgZ51y%2FhYBEQa2BuGtR6tFPnQqsq0lwnRriwVYKTC&X-Amz-Signature=37cd0727dd57d99a1dea258af30e0148626b8b3d67ff8d1bb4a59271bf8ecfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSFTGW3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIAS6%2BRPeQUeSGGm1%2BQ%2FfgpPmHlkeWYBWxpM3mKllyDLGAiBTLnYGOkgyY8bBdglk0hVg8Kg24tdPfgkEHcBPrEXaTCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPmKFqsWWHH0kCM6zKtwDlyYNRaXAlT%2FgfA9T6RV5lNwKFbTFbF8g5HNsrp4LCD%2B7MpTX0MBMmZBBTEbhScQeD2oQy5vT4CF88zhj521mSC0i8ctLhGjLx4%2BRDK3mwbT%2FLJ5GUIFO0mTxaq2rYXteBhDMm9%2BObVyiZR1JrkHVmZcvxMixt7MvA1wucXoMkPwyZRAWzFQyWcmfa45XefxVFBmViixrdwMTQplEyz2hRfnd3NrkWPjBYXa11hexSo%2FzY6YdWJaFKy%2FAu3WXbrFXwx8CxiFZS7f0me9jkmNqDVviln65mhZLTXFwKZQXX6Zikq7YDkYQcf9QCcSqyjubb04Dy3b6tNbht6yL5y6Wx2sNuyDgYZRPyy2vor6AfsJBLyQUWIjJ2NxrJQhklUUr2fYt31j1CjrRCJXYrRdi7ZIajUqfeHbqgTqZqZoUakIbyO8a02LtLcAVZF2tg1drBJck%2Fho0rR9EzbhcDPolj5oS2z9Jxu7gPpJ%2ByaRO4seOnPJ%2BX5NGr7gVowVs0JgcIu9aP6rOICWrj3srce9kMGPs4NDlXGb6KCHVBqDzEvaHtk9q%2BbbjHmyDPuR%2F6yIBq7Hho8NU%2BXqyt3A4wlbcOlgrgVmddRcFbI0I5JgRsERbFwkzpdthq0VPuc0w8cmlwwY6pgEnhoeR0g0W5vQvrubPu8p7mO8mV3N348L%2F2BF2X1vkaHeHw5RJXet5GJrc7Qyh6pI%2Fc%2BVDr7Q95KosDODFaUgoJb%2BEOf1W0UF18WwFGiwLRXVQOAY1SCTdHb%2B1rlV66XFxIk1xQKnjerToap2r331gEIz9LPdYZ6fhCwC9fDcbCknsc3tVYPdMgZ51y%2FhYBEQa2BuGtR6tFPnQqsq0lwnRriwVYKTC&X-Amz-Signature=e752c9c00bd78633bdc434006c128f46775dcb01b4fe7f53e6faec85fff8d2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSFTGW3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIAS6%2BRPeQUeSGGm1%2BQ%2FfgpPmHlkeWYBWxpM3mKllyDLGAiBTLnYGOkgyY8bBdglk0hVg8Kg24tdPfgkEHcBPrEXaTCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPmKFqsWWHH0kCM6zKtwDlyYNRaXAlT%2FgfA9T6RV5lNwKFbTFbF8g5HNsrp4LCD%2B7MpTX0MBMmZBBTEbhScQeD2oQy5vT4CF88zhj521mSC0i8ctLhGjLx4%2BRDK3mwbT%2FLJ5GUIFO0mTxaq2rYXteBhDMm9%2BObVyiZR1JrkHVmZcvxMixt7MvA1wucXoMkPwyZRAWzFQyWcmfa45XefxVFBmViixrdwMTQplEyz2hRfnd3NrkWPjBYXa11hexSo%2FzY6YdWJaFKy%2FAu3WXbrFXwx8CxiFZS7f0me9jkmNqDVviln65mhZLTXFwKZQXX6Zikq7YDkYQcf9QCcSqyjubb04Dy3b6tNbht6yL5y6Wx2sNuyDgYZRPyy2vor6AfsJBLyQUWIjJ2NxrJQhklUUr2fYt31j1CjrRCJXYrRdi7ZIajUqfeHbqgTqZqZoUakIbyO8a02LtLcAVZF2tg1drBJck%2Fho0rR9EzbhcDPolj5oS2z9Jxu7gPpJ%2ByaRO4seOnPJ%2BX5NGr7gVowVs0JgcIu9aP6rOICWrj3srce9kMGPs4NDlXGb6KCHVBqDzEvaHtk9q%2BbbjHmyDPuR%2F6yIBq7Hho8NU%2BXqyt3A4wlbcOlgrgVmddRcFbI0I5JgRsERbFwkzpdthq0VPuc0w8cmlwwY6pgEnhoeR0g0W5vQvrubPu8p7mO8mV3N348L%2F2BF2X1vkaHeHw5RJXet5GJrc7Qyh6pI%2Fc%2BVDr7Q95KosDODFaUgoJb%2BEOf1W0UF18WwFGiwLRXVQOAY1SCTdHb%2B1rlV66XFxIk1xQKnjerToap2r331gEIz9LPdYZ6fhCwC9fDcbCknsc3tVYPdMgZ51y%2FhYBEQa2BuGtR6tFPnQqsq0lwnRriwVYKTC&X-Amz-Signature=5082d4fc4319eff5681a0fa2e60167f0cfbc853838c4880e7aa293f3467f9893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSFTGW3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIAS6%2BRPeQUeSGGm1%2BQ%2FfgpPmHlkeWYBWxpM3mKllyDLGAiBTLnYGOkgyY8bBdglk0hVg8Kg24tdPfgkEHcBPrEXaTCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPmKFqsWWHH0kCM6zKtwDlyYNRaXAlT%2FgfA9T6RV5lNwKFbTFbF8g5HNsrp4LCD%2B7MpTX0MBMmZBBTEbhScQeD2oQy5vT4CF88zhj521mSC0i8ctLhGjLx4%2BRDK3mwbT%2FLJ5GUIFO0mTxaq2rYXteBhDMm9%2BObVyiZR1JrkHVmZcvxMixt7MvA1wucXoMkPwyZRAWzFQyWcmfa45XefxVFBmViixrdwMTQplEyz2hRfnd3NrkWPjBYXa11hexSo%2FzY6YdWJaFKy%2FAu3WXbrFXwx8CxiFZS7f0me9jkmNqDVviln65mhZLTXFwKZQXX6Zikq7YDkYQcf9QCcSqyjubb04Dy3b6tNbht6yL5y6Wx2sNuyDgYZRPyy2vor6AfsJBLyQUWIjJ2NxrJQhklUUr2fYt31j1CjrRCJXYrRdi7ZIajUqfeHbqgTqZqZoUakIbyO8a02LtLcAVZF2tg1drBJck%2Fho0rR9EzbhcDPolj5oS2z9Jxu7gPpJ%2ByaRO4seOnPJ%2BX5NGr7gVowVs0JgcIu9aP6rOICWrj3srce9kMGPs4NDlXGb6KCHVBqDzEvaHtk9q%2BbbjHmyDPuR%2F6yIBq7Hho8NU%2BXqyt3A4wlbcOlgrgVmddRcFbI0I5JgRsERbFwkzpdthq0VPuc0w8cmlwwY6pgEnhoeR0g0W5vQvrubPu8p7mO8mV3N348L%2F2BF2X1vkaHeHw5RJXet5GJrc7Qyh6pI%2Fc%2BVDr7Q95KosDODFaUgoJb%2BEOf1W0UF18WwFGiwLRXVQOAY1SCTdHb%2B1rlV66XFxIk1xQKnjerToap2r331gEIz9LPdYZ6fhCwC9fDcbCknsc3tVYPdMgZ51y%2FhYBEQa2BuGtR6tFPnQqsq0lwnRriwVYKTC&X-Amz-Signature=dd952055ba4a178943065cfef4ab361868e3dc86de0676c524dda01bb5d5d806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USSFTGW3%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIAS6%2BRPeQUeSGGm1%2BQ%2FfgpPmHlkeWYBWxpM3mKllyDLGAiBTLnYGOkgyY8bBdglk0hVg8Kg24tdPfgkEHcBPrEXaTCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMPmKFqsWWHH0kCM6zKtwDlyYNRaXAlT%2FgfA9T6RV5lNwKFbTFbF8g5HNsrp4LCD%2B7MpTX0MBMmZBBTEbhScQeD2oQy5vT4CF88zhj521mSC0i8ctLhGjLx4%2BRDK3mwbT%2FLJ5GUIFO0mTxaq2rYXteBhDMm9%2BObVyiZR1JrkHVmZcvxMixt7MvA1wucXoMkPwyZRAWzFQyWcmfa45XefxVFBmViixrdwMTQplEyz2hRfnd3NrkWPjBYXa11hexSo%2FzY6YdWJaFKy%2FAu3WXbrFXwx8CxiFZS7f0me9jkmNqDVviln65mhZLTXFwKZQXX6Zikq7YDkYQcf9QCcSqyjubb04Dy3b6tNbht6yL5y6Wx2sNuyDgYZRPyy2vor6AfsJBLyQUWIjJ2NxrJQhklUUr2fYt31j1CjrRCJXYrRdi7ZIajUqfeHbqgTqZqZoUakIbyO8a02LtLcAVZF2tg1drBJck%2Fho0rR9EzbhcDPolj5oS2z9Jxu7gPpJ%2ByaRO4seOnPJ%2BX5NGr7gVowVs0JgcIu9aP6rOICWrj3srce9kMGPs4NDlXGb6KCHVBqDzEvaHtk9q%2BbbjHmyDPuR%2F6yIBq7Hho8NU%2BXqyt3A4wlbcOlgrgVmddRcFbI0I5JgRsERbFwkzpdthq0VPuc0w8cmlwwY6pgEnhoeR0g0W5vQvrubPu8p7mO8mV3N348L%2F2BF2X1vkaHeHw5RJXet5GJrc7Qyh6pI%2Fc%2BVDr7Q95KosDODFaUgoJb%2BEOf1W0UF18WwFGiwLRXVQOAY1SCTdHb%2B1rlV66XFxIk1xQKnjerToap2r331gEIz9LPdYZ6fhCwC9fDcbCknsc3tVYPdMgZ51y%2FhYBEQa2BuGtR6tFPnQqsq0lwnRriwVYKTC&X-Amz-Signature=a1097173fc5894e00b56f24c16e1dff2ea02f7800a93cc86d68074e8f136980c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
