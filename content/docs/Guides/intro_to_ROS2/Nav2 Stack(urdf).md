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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ5TGGW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcL72UXwkBMc3PU%2B1jjwrWtqTKFGMqu2egiXTO5uy09AiEA83FL8JdIPMZUS%2BB6T4QMx1HC3u7RjTorMAeQtanhu38qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEHNAFJNlVPLbtnACrcAxFZ5CoRWEG1s5j5FKbGPIuDhDmQ9voPlEn3%2BZ85snDp7bH%2BVeZvs00zBoAij%2B5YkoN9lY9Tb%2FA4matKHrE8BCX45B%2FVgnelt5ZnTShOqf4pa2n9qYmrC47XjPHMaUQ1xlk%2BnnAnPH%2BwZkRmNaUkEUDoKnx6zp9MmeC2msx6%2F6mOpzHMh%2FULqkN%2BiuTJqp%2FHi4V5S1yzlACy%2BCxV1YPbdVNc29qsdjA6%2FfAbx%2BHjKWu%2BjWTtLtLQU2%2Frw46PzKucY8vewMKTQMv3cm%2BsWA1hOEMCPyXF54qVUzaMIzlDuTexDvNtAXsRmsbjTgCMz09dOXbcwipR2dRD6ahIzhuZz9LuqWCgS2MG0xChX2cMjFTk7HF2sWOet4Z8zU3GJzzve5wGnY4l6VrlykgbzNoYzZfs8%2FuKGAK8AhP22pg5J5gkHtWBougWFhvIDgHV%2Fyp6tudEPBp7xe260Tj0T8LidPVuC43zCo09CWQ%2FPbVEVrFD%2BRAKto%2BKzv1Lwwt8RRthi90WF3MB3g%2F0nF6M9ShE84Em8EA0MFWdlcJpPkhLKW3VIPF56EAJc4iVW0J1sMr%2B4xDjsdX3KwPdqCs3%2FOfQRN%2BsOVTFQXlr3x4Yl4txsYBvYDScTpPSeng6ccoiMLel97wGOqUB55S4KdL4XeQbMQz4PLSqMNgrkj7Bi6L6%2BRen66lLm1%2F%2BwjNFL%2Ba1f%2Fpu3j1wB%2FHkPJASLl8fwqBvf8DQykFi%2F1%2BnCxy6it080xeAkhMJhb1Jan1Xs1i5%2BQI3iwdkkoLP%2BlT3SxdLVFh9bPgmNCOQ8yBz5KwmuUpJNXiDg14%2FK%2FMXNLl5rrpWXhDtOnOPfet%2FRp%2BR%2BVkQgpHddXOvceO9e1WbmgZT&X-Amz-Signature=2d6323c26410973a882f0c2dda121f5cd9888466b521ad1a60320153bd31217c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ5TGGW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcL72UXwkBMc3PU%2B1jjwrWtqTKFGMqu2egiXTO5uy09AiEA83FL8JdIPMZUS%2BB6T4QMx1HC3u7RjTorMAeQtanhu38qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEHNAFJNlVPLbtnACrcAxFZ5CoRWEG1s5j5FKbGPIuDhDmQ9voPlEn3%2BZ85snDp7bH%2BVeZvs00zBoAij%2B5YkoN9lY9Tb%2FA4matKHrE8BCX45B%2FVgnelt5ZnTShOqf4pa2n9qYmrC47XjPHMaUQ1xlk%2BnnAnPH%2BwZkRmNaUkEUDoKnx6zp9MmeC2msx6%2F6mOpzHMh%2FULqkN%2BiuTJqp%2FHi4V5S1yzlACy%2BCxV1YPbdVNc29qsdjA6%2FfAbx%2BHjKWu%2BjWTtLtLQU2%2Frw46PzKucY8vewMKTQMv3cm%2BsWA1hOEMCPyXF54qVUzaMIzlDuTexDvNtAXsRmsbjTgCMz09dOXbcwipR2dRD6ahIzhuZz9LuqWCgS2MG0xChX2cMjFTk7HF2sWOet4Z8zU3GJzzve5wGnY4l6VrlykgbzNoYzZfs8%2FuKGAK8AhP22pg5J5gkHtWBougWFhvIDgHV%2Fyp6tudEPBp7xe260Tj0T8LidPVuC43zCo09CWQ%2FPbVEVrFD%2BRAKto%2BKzv1Lwwt8RRthi90WF3MB3g%2F0nF6M9ShE84Em8EA0MFWdlcJpPkhLKW3VIPF56EAJc4iVW0J1sMr%2B4xDjsdX3KwPdqCs3%2FOfQRN%2BsOVTFQXlr3x4Yl4txsYBvYDScTpPSeng6ccoiMLel97wGOqUB55S4KdL4XeQbMQz4PLSqMNgrkj7Bi6L6%2BRen66lLm1%2F%2BwjNFL%2Ba1f%2Fpu3j1wB%2FHkPJASLl8fwqBvf8DQykFi%2F1%2BnCxy6it080xeAkhMJhb1Jan1Xs1i5%2BQI3iwdkkoLP%2BlT3SxdLVFh9bPgmNCOQ8yBz5KwmuUpJNXiDg14%2FK%2FMXNLl5rrpWXhDtOnOPfet%2FRp%2BR%2BVkQgpHddXOvceO9e1WbmgZT&X-Amz-Signature=babcb292d4e171c2f7d9292415dc4898dc41444170da818b2727795e6edc5638&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ5TGGW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcL72UXwkBMc3PU%2B1jjwrWtqTKFGMqu2egiXTO5uy09AiEA83FL8JdIPMZUS%2BB6T4QMx1HC3u7RjTorMAeQtanhu38qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEHNAFJNlVPLbtnACrcAxFZ5CoRWEG1s5j5FKbGPIuDhDmQ9voPlEn3%2BZ85snDp7bH%2BVeZvs00zBoAij%2B5YkoN9lY9Tb%2FA4matKHrE8BCX45B%2FVgnelt5ZnTShOqf4pa2n9qYmrC47XjPHMaUQ1xlk%2BnnAnPH%2BwZkRmNaUkEUDoKnx6zp9MmeC2msx6%2F6mOpzHMh%2FULqkN%2BiuTJqp%2FHi4V5S1yzlACy%2BCxV1YPbdVNc29qsdjA6%2FfAbx%2BHjKWu%2BjWTtLtLQU2%2Frw46PzKucY8vewMKTQMv3cm%2BsWA1hOEMCPyXF54qVUzaMIzlDuTexDvNtAXsRmsbjTgCMz09dOXbcwipR2dRD6ahIzhuZz9LuqWCgS2MG0xChX2cMjFTk7HF2sWOet4Z8zU3GJzzve5wGnY4l6VrlykgbzNoYzZfs8%2FuKGAK8AhP22pg5J5gkHtWBougWFhvIDgHV%2Fyp6tudEPBp7xe260Tj0T8LidPVuC43zCo09CWQ%2FPbVEVrFD%2BRAKto%2BKzv1Lwwt8RRthi90WF3MB3g%2F0nF6M9ShE84Em8EA0MFWdlcJpPkhLKW3VIPF56EAJc4iVW0J1sMr%2B4xDjsdX3KwPdqCs3%2FOfQRN%2BsOVTFQXlr3x4Yl4txsYBvYDScTpPSeng6ccoiMLel97wGOqUB55S4KdL4XeQbMQz4PLSqMNgrkj7Bi6L6%2BRen66lLm1%2F%2BwjNFL%2Ba1f%2Fpu3j1wB%2FHkPJASLl8fwqBvf8DQykFi%2F1%2BnCxy6it080xeAkhMJhb1Jan1Xs1i5%2BQI3iwdkkoLP%2BlT3SxdLVFh9bPgmNCOQ8yBz5KwmuUpJNXiDg14%2FK%2FMXNLl5rrpWXhDtOnOPfet%2FRp%2BR%2BVkQgpHddXOvceO9e1WbmgZT&X-Amz-Signature=b2c0933bfe65e25338c6a1f1e75d07830caab8d7024f58b3d0d76332dfb09663&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ5TGGW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcL72UXwkBMc3PU%2B1jjwrWtqTKFGMqu2egiXTO5uy09AiEA83FL8JdIPMZUS%2BB6T4QMx1HC3u7RjTorMAeQtanhu38qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEHNAFJNlVPLbtnACrcAxFZ5CoRWEG1s5j5FKbGPIuDhDmQ9voPlEn3%2BZ85snDp7bH%2BVeZvs00zBoAij%2B5YkoN9lY9Tb%2FA4matKHrE8BCX45B%2FVgnelt5ZnTShOqf4pa2n9qYmrC47XjPHMaUQ1xlk%2BnnAnPH%2BwZkRmNaUkEUDoKnx6zp9MmeC2msx6%2F6mOpzHMh%2FULqkN%2BiuTJqp%2FHi4V5S1yzlACy%2BCxV1YPbdVNc29qsdjA6%2FfAbx%2BHjKWu%2BjWTtLtLQU2%2Frw46PzKucY8vewMKTQMv3cm%2BsWA1hOEMCPyXF54qVUzaMIzlDuTexDvNtAXsRmsbjTgCMz09dOXbcwipR2dRD6ahIzhuZz9LuqWCgS2MG0xChX2cMjFTk7HF2sWOet4Z8zU3GJzzve5wGnY4l6VrlykgbzNoYzZfs8%2FuKGAK8AhP22pg5J5gkHtWBougWFhvIDgHV%2Fyp6tudEPBp7xe260Tj0T8LidPVuC43zCo09CWQ%2FPbVEVrFD%2BRAKto%2BKzv1Lwwt8RRthi90WF3MB3g%2F0nF6M9ShE84Em8EA0MFWdlcJpPkhLKW3VIPF56EAJc4iVW0J1sMr%2B4xDjsdX3KwPdqCs3%2FOfQRN%2BsOVTFQXlr3x4Yl4txsYBvYDScTpPSeng6ccoiMLel97wGOqUB55S4KdL4XeQbMQz4PLSqMNgrkj7Bi6L6%2BRen66lLm1%2F%2BwjNFL%2Ba1f%2Fpu3j1wB%2FHkPJASLl8fwqBvf8DQykFi%2F1%2BnCxy6it080xeAkhMJhb1Jan1Xs1i5%2BQI3iwdkkoLP%2BlT3SxdLVFh9bPgmNCOQ8yBz5KwmuUpJNXiDg14%2FK%2FMXNLl5rrpWXhDtOnOPfet%2FRp%2BR%2BVkQgpHddXOvceO9e1WbmgZT&X-Amz-Signature=ebdca19ed5e1f8d20a125385fab9c8f311c231c6c99f9f4d88deff7f337da900&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ5TGGW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcL72UXwkBMc3PU%2B1jjwrWtqTKFGMqu2egiXTO5uy09AiEA83FL8JdIPMZUS%2BB6T4QMx1HC3u7RjTorMAeQtanhu38qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEHNAFJNlVPLbtnACrcAxFZ5CoRWEG1s5j5FKbGPIuDhDmQ9voPlEn3%2BZ85snDp7bH%2BVeZvs00zBoAij%2B5YkoN9lY9Tb%2FA4matKHrE8BCX45B%2FVgnelt5ZnTShOqf4pa2n9qYmrC47XjPHMaUQ1xlk%2BnnAnPH%2BwZkRmNaUkEUDoKnx6zp9MmeC2msx6%2F6mOpzHMh%2FULqkN%2BiuTJqp%2FHi4V5S1yzlACy%2BCxV1YPbdVNc29qsdjA6%2FfAbx%2BHjKWu%2BjWTtLtLQU2%2Frw46PzKucY8vewMKTQMv3cm%2BsWA1hOEMCPyXF54qVUzaMIzlDuTexDvNtAXsRmsbjTgCMz09dOXbcwipR2dRD6ahIzhuZz9LuqWCgS2MG0xChX2cMjFTk7HF2sWOet4Z8zU3GJzzve5wGnY4l6VrlykgbzNoYzZfs8%2FuKGAK8AhP22pg5J5gkHtWBougWFhvIDgHV%2Fyp6tudEPBp7xe260Tj0T8LidPVuC43zCo09CWQ%2FPbVEVrFD%2BRAKto%2BKzv1Lwwt8RRthi90WF3MB3g%2F0nF6M9ShE84Em8EA0MFWdlcJpPkhLKW3VIPF56EAJc4iVW0J1sMr%2B4xDjsdX3KwPdqCs3%2FOfQRN%2BsOVTFQXlr3x4Yl4txsYBvYDScTpPSeng6ccoiMLel97wGOqUB55S4KdL4XeQbMQz4PLSqMNgrkj7Bi6L6%2BRen66lLm1%2F%2BwjNFL%2Ba1f%2Fpu3j1wB%2FHkPJASLl8fwqBvf8DQykFi%2F1%2BnCxy6it080xeAkhMJhb1Jan1Xs1i5%2BQI3iwdkkoLP%2BlT3SxdLVFh9bPgmNCOQ8yBz5KwmuUpJNXiDg14%2FK%2FMXNLl5rrpWXhDtOnOPfet%2FRp%2BR%2BVkQgpHddXOvceO9e1WbmgZT&X-Amz-Signature=1ae3343133edaf6d303bdf63242ef653991e2016745fe866f7f7e22a1a541cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCQ5TGGW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcL72UXwkBMc3PU%2B1jjwrWtqTKFGMqu2egiXTO5uy09AiEA83FL8JdIPMZUS%2BB6T4QMx1HC3u7RjTorMAeQtanhu38qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEHNAFJNlVPLbtnACrcAxFZ5CoRWEG1s5j5FKbGPIuDhDmQ9voPlEn3%2BZ85snDp7bH%2BVeZvs00zBoAij%2B5YkoN9lY9Tb%2FA4matKHrE8BCX45B%2FVgnelt5ZnTShOqf4pa2n9qYmrC47XjPHMaUQ1xlk%2BnnAnPH%2BwZkRmNaUkEUDoKnx6zp9MmeC2msx6%2F6mOpzHMh%2FULqkN%2BiuTJqp%2FHi4V5S1yzlACy%2BCxV1YPbdVNc29qsdjA6%2FfAbx%2BHjKWu%2BjWTtLtLQU2%2Frw46PzKucY8vewMKTQMv3cm%2BsWA1hOEMCPyXF54qVUzaMIzlDuTexDvNtAXsRmsbjTgCMz09dOXbcwipR2dRD6ahIzhuZz9LuqWCgS2MG0xChX2cMjFTk7HF2sWOet4Z8zU3GJzzve5wGnY4l6VrlykgbzNoYzZfs8%2FuKGAK8AhP22pg5J5gkHtWBougWFhvIDgHV%2Fyp6tudEPBp7xe260Tj0T8LidPVuC43zCo09CWQ%2FPbVEVrFD%2BRAKto%2BKzv1Lwwt8RRthi90WF3MB3g%2F0nF6M9ShE84Em8EA0MFWdlcJpPkhLKW3VIPF56EAJc4iVW0J1sMr%2B4xDjsdX3KwPdqCs3%2FOfQRN%2BsOVTFQXlr3x4Yl4txsYBvYDScTpPSeng6ccoiMLel97wGOqUB55S4KdL4XeQbMQz4PLSqMNgrkj7Bi6L6%2BRen66lLm1%2F%2BwjNFL%2Ba1f%2Fpu3j1wB%2FHkPJASLl8fwqBvf8DQykFi%2F1%2BnCxy6it080xeAkhMJhb1Jan1Xs1i5%2BQI3iwdkkoLP%2BlT3SxdLVFh9bPgmNCOQ8yBz5KwmuUpJNXiDg14%2FK%2FMXNLl5rrpWXhDtOnOPfet%2FRp%2BR%2BVkQgpHddXOvceO9e1WbmgZT&X-Amz-Signature=4b799f98c0e3cfdd5d7145678f734991bd67123c453d07fd611750234ea29046&X-Amz-SignedHeaders=host&x-id=GetObject)
