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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHL3NN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8R%2F2Wtmf8m0Yq168Cjio6bHfLvIkS%2BSR1q9vL7Q7FLAiAbFJCGL8GmzQxVmBAwlH3G8vCeVHyAv7wd4AAFQb3O%2FSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxaWoKmIkC1tnKvLKtwDuw5159agBsJ%2FuDVRfzOtiGq1I%2FEOxwCwUiMTyZ3caZfYH9Zi8f5Qjz%2FEGVgpz6JV2I8NWCUq98oHNJvfToEtutSQxrgJoh1stwhIFUNEQ56Ygsy2fa6NXj6tTM8HlDLylygBa7I9GLKH8Jiv3XB302pl9KMIKoA8eolSOxhjG5KX8n%2FiFpIuqSuQhuDf%2FWwF3RYfPhMBmYJLr%2F8hWPx2SMyzF3u0YHzKfmZ7j%2FBOfRcWx5EMqmlQw9Xx0HCAAQb%2FDVi8bxQx8L0Wjm5vcU5lJJRCtKIBzrgzB3v2xc2U%2BnT1p1SjHDtpDLWDQfH27rIwg%2F5GLw0CcggTvZJzuozX2A%2FjiAz8gji8czTIsLx6bgMDTjEFLY7MQvmJexI3uM8qRcUlph8%2BfTQUHhVWdeaBx4V3BWRcAt8d2JgCvme2CS8J%2FsML5oTbFm%2FEZ19YkGck%2FYzKJ23z%2FN2J%2F%2F6D0yADzWCScL1V0dwTy52K6vdcDtVMQ%2B8IhnZFe%2BwFgqAuZ7C%2BCQWY5wNmyrIfErp05ozlLha%2F6rpf0893bzavCDwAvLadaA5d6ND43HcCXm8APFAxvWQ0Z%2BEUduVFHHb0%2FRZY3BkjI7qop8AVIP2Oso%2FDhYiEI65rlVVi1x%2FppbAw%2FPuMwAY6pgEeovhfMU%2BqR0EfW%2FwPeigWSY1g3TvjIq%2Fbz%2BXV3Ui3n7qfMW58qcU5xKJhNfN%2BilSNlDMFjs3y7E4gfeYKF3IItuSOPiWuy0NhdRMZ5QcK7B4oBlfpCU2q38jlW%2F4j1R47tpkYeNdguS%2FmeqY7Mu3st03qD3nP7ZVTCsGCcQJN7WQ0NN7WdTNiHr8n%2BQUSNJ6mZpPjUIKOzESv57J51TDuCvIOKBTv&X-Amz-Signature=a22ac6f255db432426436e68185f119fdfbeb799b5dc18704433b6fd19269e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHL3NN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8R%2F2Wtmf8m0Yq168Cjio6bHfLvIkS%2BSR1q9vL7Q7FLAiAbFJCGL8GmzQxVmBAwlH3G8vCeVHyAv7wd4AAFQb3O%2FSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxaWoKmIkC1tnKvLKtwDuw5159agBsJ%2FuDVRfzOtiGq1I%2FEOxwCwUiMTyZ3caZfYH9Zi8f5Qjz%2FEGVgpz6JV2I8NWCUq98oHNJvfToEtutSQxrgJoh1stwhIFUNEQ56Ygsy2fa6NXj6tTM8HlDLylygBa7I9GLKH8Jiv3XB302pl9KMIKoA8eolSOxhjG5KX8n%2FiFpIuqSuQhuDf%2FWwF3RYfPhMBmYJLr%2F8hWPx2SMyzF3u0YHzKfmZ7j%2FBOfRcWx5EMqmlQw9Xx0HCAAQb%2FDVi8bxQx8L0Wjm5vcU5lJJRCtKIBzrgzB3v2xc2U%2BnT1p1SjHDtpDLWDQfH27rIwg%2F5GLw0CcggTvZJzuozX2A%2FjiAz8gji8czTIsLx6bgMDTjEFLY7MQvmJexI3uM8qRcUlph8%2BfTQUHhVWdeaBx4V3BWRcAt8d2JgCvme2CS8J%2FsML5oTbFm%2FEZ19YkGck%2FYzKJ23z%2FN2J%2F%2F6D0yADzWCScL1V0dwTy52K6vdcDtVMQ%2B8IhnZFe%2BwFgqAuZ7C%2BCQWY5wNmyrIfErp05ozlLha%2F6rpf0893bzavCDwAvLadaA5d6ND43HcCXm8APFAxvWQ0Z%2BEUduVFHHb0%2FRZY3BkjI7qop8AVIP2Oso%2FDhYiEI65rlVVi1x%2FppbAw%2FPuMwAY6pgEeovhfMU%2BqR0EfW%2FwPeigWSY1g3TvjIq%2Fbz%2BXV3Ui3n7qfMW58qcU5xKJhNfN%2BilSNlDMFjs3y7E4gfeYKF3IItuSOPiWuy0NhdRMZ5QcK7B4oBlfpCU2q38jlW%2F4j1R47tpkYeNdguS%2FmeqY7Mu3st03qD3nP7ZVTCsGCcQJN7WQ0NN7WdTNiHr8n%2BQUSNJ6mZpPjUIKOzESv57J51TDuCvIOKBTv&X-Amz-Signature=96f5e116b27548cd8ef7c9c48bd907d069e5a21e5a4df4c0bf0af84fdac43098&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHL3NN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8R%2F2Wtmf8m0Yq168Cjio6bHfLvIkS%2BSR1q9vL7Q7FLAiAbFJCGL8GmzQxVmBAwlH3G8vCeVHyAv7wd4AAFQb3O%2FSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxaWoKmIkC1tnKvLKtwDuw5159agBsJ%2FuDVRfzOtiGq1I%2FEOxwCwUiMTyZ3caZfYH9Zi8f5Qjz%2FEGVgpz6JV2I8NWCUq98oHNJvfToEtutSQxrgJoh1stwhIFUNEQ56Ygsy2fa6NXj6tTM8HlDLylygBa7I9GLKH8Jiv3XB302pl9KMIKoA8eolSOxhjG5KX8n%2FiFpIuqSuQhuDf%2FWwF3RYfPhMBmYJLr%2F8hWPx2SMyzF3u0YHzKfmZ7j%2FBOfRcWx5EMqmlQw9Xx0HCAAQb%2FDVi8bxQx8L0Wjm5vcU5lJJRCtKIBzrgzB3v2xc2U%2BnT1p1SjHDtpDLWDQfH27rIwg%2F5GLw0CcggTvZJzuozX2A%2FjiAz8gji8czTIsLx6bgMDTjEFLY7MQvmJexI3uM8qRcUlph8%2BfTQUHhVWdeaBx4V3BWRcAt8d2JgCvme2CS8J%2FsML5oTbFm%2FEZ19YkGck%2FYzKJ23z%2FN2J%2F%2F6D0yADzWCScL1V0dwTy52K6vdcDtVMQ%2B8IhnZFe%2BwFgqAuZ7C%2BCQWY5wNmyrIfErp05ozlLha%2F6rpf0893bzavCDwAvLadaA5d6ND43HcCXm8APFAxvWQ0Z%2BEUduVFHHb0%2FRZY3BkjI7qop8AVIP2Oso%2FDhYiEI65rlVVi1x%2FppbAw%2FPuMwAY6pgEeovhfMU%2BqR0EfW%2FwPeigWSY1g3TvjIq%2Fbz%2BXV3Ui3n7qfMW58qcU5xKJhNfN%2BilSNlDMFjs3y7E4gfeYKF3IItuSOPiWuy0NhdRMZ5QcK7B4oBlfpCU2q38jlW%2F4j1R47tpkYeNdguS%2FmeqY7Mu3st03qD3nP7ZVTCsGCcQJN7WQ0NN7WdTNiHr8n%2BQUSNJ6mZpPjUIKOzESv57J51TDuCvIOKBTv&X-Amz-Signature=0cc5e99e2a20816e6362fa46a859b00a637c97a53af0d1398469b964e442a6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHL3NN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8R%2F2Wtmf8m0Yq168Cjio6bHfLvIkS%2BSR1q9vL7Q7FLAiAbFJCGL8GmzQxVmBAwlH3G8vCeVHyAv7wd4AAFQb3O%2FSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxaWoKmIkC1tnKvLKtwDuw5159agBsJ%2FuDVRfzOtiGq1I%2FEOxwCwUiMTyZ3caZfYH9Zi8f5Qjz%2FEGVgpz6JV2I8NWCUq98oHNJvfToEtutSQxrgJoh1stwhIFUNEQ56Ygsy2fa6NXj6tTM8HlDLylygBa7I9GLKH8Jiv3XB302pl9KMIKoA8eolSOxhjG5KX8n%2FiFpIuqSuQhuDf%2FWwF3RYfPhMBmYJLr%2F8hWPx2SMyzF3u0YHzKfmZ7j%2FBOfRcWx5EMqmlQw9Xx0HCAAQb%2FDVi8bxQx8L0Wjm5vcU5lJJRCtKIBzrgzB3v2xc2U%2BnT1p1SjHDtpDLWDQfH27rIwg%2F5GLw0CcggTvZJzuozX2A%2FjiAz8gji8czTIsLx6bgMDTjEFLY7MQvmJexI3uM8qRcUlph8%2BfTQUHhVWdeaBx4V3BWRcAt8d2JgCvme2CS8J%2FsML5oTbFm%2FEZ19YkGck%2FYzKJ23z%2FN2J%2F%2F6D0yADzWCScL1V0dwTy52K6vdcDtVMQ%2B8IhnZFe%2BwFgqAuZ7C%2BCQWY5wNmyrIfErp05ozlLha%2F6rpf0893bzavCDwAvLadaA5d6ND43HcCXm8APFAxvWQ0Z%2BEUduVFHHb0%2FRZY3BkjI7qop8AVIP2Oso%2FDhYiEI65rlVVi1x%2FppbAw%2FPuMwAY6pgEeovhfMU%2BqR0EfW%2FwPeigWSY1g3TvjIq%2Fbz%2BXV3Ui3n7qfMW58qcU5xKJhNfN%2BilSNlDMFjs3y7E4gfeYKF3IItuSOPiWuy0NhdRMZ5QcK7B4oBlfpCU2q38jlW%2F4j1R47tpkYeNdguS%2FmeqY7Mu3st03qD3nP7ZVTCsGCcQJN7WQ0NN7WdTNiHr8n%2BQUSNJ6mZpPjUIKOzESv57J51TDuCvIOKBTv&X-Amz-Signature=538c347ec58c5489ce90eaab77fef3d3e5df1161cadfbd93a3c2d2daf2f2f689&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHL3NN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8R%2F2Wtmf8m0Yq168Cjio6bHfLvIkS%2BSR1q9vL7Q7FLAiAbFJCGL8GmzQxVmBAwlH3G8vCeVHyAv7wd4AAFQb3O%2FSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxaWoKmIkC1tnKvLKtwDuw5159agBsJ%2FuDVRfzOtiGq1I%2FEOxwCwUiMTyZ3caZfYH9Zi8f5Qjz%2FEGVgpz6JV2I8NWCUq98oHNJvfToEtutSQxrgJoh1stwhIFUNEQ56Ygsy2fa6NXj6tTM8HlDLylygBa7I9GLKH8Jiv3XB302pl9KMIKoA8eolSOxhjG5KX8n%2FiFpIuqSuQhuDf%2FWwF3RYfPhMBmYJLr%2F8hWPx2SMyzF3u0YHzKfmZ7j%2FBOfRcWx5EMqmlQw9Xx0HCAAQb%2FDVi8bxQx8L0Wjm5vcU5lJJRCtKIBzrgzB3v2xc2U%2BnT1p1SjHDtpDLWDQfH27rIwg%2F5GLw0CcggTvZJzuozX2A%2FjiAz8gji8czTIsLx6bgMDTjEFLY7MQvmJexI3uM8qRcUlph8%2BfTQUHhVWdeaBx4V3BWRcAt8d2JgCvme2CS8J%2FsML5oTbFm%2FEZ19YkGck%2FYzKJ23z%2FN2J%2F%2F6D0yADzWCScL1V0dwTy52K6vdcDtVMQ%2B8IhnZFe%2BwFgqAuZ7C%2BCQWY5wNmyrIfErp05ozlLha%2F6rpf0893bzavCDwAvLadaA5d6ND43HcCXm8APFAxvWQ0Z%2BEUduVFHHb0%2FRZY3BkjI7qop8AVIP2Oso%2FDhYiEI65rlVVi1x%2FppbAw%2FPuMwAY6pgEeovhfMU%2BqR0EfW%2FwPeigWSY1g3TvjIq%2Fbz%2BXV3Ui3n7qfMW58qcU5xKJhNfN%2BilSNlDMFjs3y7E4gfeYKF3IItuSOPiWuy0NhdRMZ5QcK7B4oBlfpCU2q38jlW%2F4j1R47tpkYeNdguS%2FmeqY7Mu3st03qD3nP7ZVTCsGCcQJN7WQ0NN7WdTNiHr8n%2BQUSNJ6mZpPjUIKOzESv57J51TDuCvIOKBTv&X-Amz-Signature=16f6c29897ddd8ace822d3d25e188a89c9641053590bfd707838ab124d99b58d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLHL3NN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8R%2F2Wtmf8m0Yq168Cjio6bHfLvIkS%2BSR1q9vL7Q7FLAiAbFJCGL8GmzQxVmBAwlH3G8vCeVHyAv7wd4AAFQb3O%2FSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDxaWoKmIkC1tnKvLKtwDuw5159agBsJ%2FuDVRfzOtiGq1I%2FEOxwCwUiMTyZ3caZfYH9Zi8f5Qjz%2FEGVgpz6JV2I8NWCUq98oHNJvfToEtutSQxrgJoh1stwhIFUNEQ56Ygsy2fa6NXj6tTM8HlDLylygBa7I9GLKH8Jiv3XB302pl9KMIKoA8eolSOxhjG5KX8n%2FiFpIuqSuQhuDf%2FWwF3RYfPhMBmYJLr%2F8hWPx2SMyzF3u0YHzKfmZ7j%2FBOfRcWx5EMqmlQw9Xx0HCAAQb%2FDVi8bxQx8L0Wjm5vcU5lJJRCtKIBzrgzB3v2xc2U%2BnT1p1SjHDtpDLWDQfH27rIwg%2F5GLw0CcggTvZJzuozX2A%2FjiAz8gji8czTIsLx6bgMDTjEFLY7MQvmJexI3uM8qRcUlph8%2BfTQUHhVWdeaBx4V3BWRcAt8d2JgCvme2CS8J%2FsML5oTbFm%2FEZ19YkGck%2FYzKJ23z%2FN2J%2F%2F6D0yADzWCScL1V0dwTy52K6vdcDtVMQ%2B8IhnZFe%2BwFgqAuZ7C%2BCQWY5wNmyrIfErp05ozlLha%2F6rpf0893bzavCDwAvLadaA5d6ND43HcCXm8APFAxvWQ0Z%2BEUduVFHHb0%2FRZY3BkjI7qop8AVIP2Oso%2FDhYiEI65rlVVi1x%2FppbAw%2FPuMwAY6pgEeovhfMU%2BqR0EfW%2FwPeigWSY1g3TvjIq%2Fbz%2BXV3Ui3n7qfMW58qcU5xKJhNfN%2BilSNlDMFjs3y7E4gfeYKF3IItuSOPiWuy0NhdRMZ5QcK7B4oBlfpCU2q38jlW%2F4j1R47tpkYeNdguS%2FmeqY7Mu3st03qD3nP7ZVTCsGCcQJN7WQ0NN7WdTNiHr8n%2BQUSNJ6mZpPjUIKOzESv57J51TDuCvIOKBTv&X-Amz-Signature=3f62151b16591e70f8c1dd0d0e9d9630dbab7af314a6914209403f5b2067797c&X-Amz-SignedHeaders=host&x-id=GetObject)
