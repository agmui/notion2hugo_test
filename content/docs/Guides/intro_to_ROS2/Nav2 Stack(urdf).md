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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=ee0a94ef4ac6e4a0bc4d2002ca6cf7f992634211f68c1ee2268b950f1757c08c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=f2d8ebe24e5f7fa16bffbf18d6fd906918afd73babbc4f2aad2b49fcfa6de26e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=bcccd290c7889e3c8546b40e19d25abafbd5cc84c9085301b8c15da04798c1e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=cfe041ec888923bf557ffb7449e16e11d4f471de48234b584a1c7791c8a84fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=53f7a56cf632d8ec1a4e835ff2e9503ff9a9e387ce790f8976c1779966f1fcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMSAFFH%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQMuqewQSScQWbvtBAWVvHXNGoD%2F4mDtaubD4V29BObgIhANwFo86fIpL%2BOkaLWlJpkJCWpxVgDiJbTYJNGrfxsobbKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxP58NrfFWobPw8B4oq3AMCLvU28bbpIojdxj39HBi8IUYaszgTq2lE1wa3oVqvEdnVmr7wiuFZtaTqZQ4tbvXlATueS%2BKnaKMKXJfeBOglcR%2FLFH2BSX1KQxnQXUnt1WLPbV8Mozih7x5GCb39C6jDz6w%2FGAPffpA6zHHI3Y90swFbPitS9uHgCYaKw0zDGu%2FVTsyICRgq7JPCDpqEndV%2FMkOSpMISNx%2Fsknnrtoq4mEwnPRol69%2BcadoX6rtmRiQPb%2Bw7nekVtSCSej4l0TRNrZr8Us3MKUYEZ44wkze4bj6AboYZp7meeJiKNHgexYcx15j4zm8z5AjmiJlkT9u1%2FQUL6pr4jd9p9bQV44LULzn2vZP4bNVgfoMZhjRipWy6%2FIfxlt%2BNtlFD398ODfTxWiavhMTvAQfjnAJO7ux%2F%2F9jHE90MVUNP4bwFX0MqtiIBXUVXMmIVvroEQSUwNGpbPcena%2Fc7j1C1NL1Xdl0owtZiWdPw6%2FMPenLU9YPffyDZ72Qtsmp1LS9lp4pzQaz0X6tUKB6dcIdyUh3H5nvyAkFsW%2BXNEodA5QEnxGg4KBCpqz6myWxMeEOl6ZIkLnLx0ErR1%2FK4zFTe0oLtpmkg0w5bIXEDhLAZsURuJZYgMPSsGEGGE0XY%2FXd3KzC5svq8BjqkAWr12qaqZDIJRm3pRbCsI5sbtgbTZNMz24xpDrtRKp6N%2FG%2FL2Ge94wJTXHX9esaRX4zwJ06y73Y2Lu7iTAn6uMi%2FrjQ86KFl%2BG6Q%2FXW6fgC%2FY8fX2ANXJkgPFbgy1kwTYoKlRSfGYZd5YOEpi2CZewIoh2Oaj7CicxgPtUNHdO35wC5DSFdyYwCNU%2BBggjKX%2FDeKPvrjL6SvhFUG56SlT8kgoKv1&X-Amz-Signature=ef2a02ae85155d4e67b8fdc299c6a80a4b635e06e056b47c25d17da9da502f13&X-Amz-SignedHeaders=host&x-id=GetObject)
